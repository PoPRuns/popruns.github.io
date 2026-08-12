import loadTriggers from "./loads.js";
import beamData from "./beams.js";

const loadSelect = document.getElementById('loadSelect');
loadTriggers.forEach((load, i) => {
    const loadOption = document.createElement('option');
    loadOption.textContent = load.name;
    // Index is carried in the option value so setLoadTriggerCoords can look up
    // this trigger's real footprint (its true world-space quad), not just its center point
    loadOption.value = `${load.coords[0]},${load.coords[1]},${i}`;
    loadSelect.appendChild(loadOption);
});

const tableBody = document.getElementById('tableBody');

// The footprint of whichever load trigger is currently selected from the
// dropdown, or null when the target was typed in manually (in which case the
// math falls back to exact-point behaviour, same as before this change).
let selectedFootprint = null;

for (const id of ['pointX', 'pointY']) {
    document.getElementById(id).addEventListener('input', () => {
        selectedFootprint = null;
    });
}

function processJSON() {
    const pointX = parseFloat(document.getElementById('pointX').value);
    const pointY = parseFloat(document.getElementById('pointY').value);

    const ledgeX = parseFloat(document.getElementById('ledgeX').value);
    const ledgeY = parseFloat(document.getElementById('ledgeY').value);

    if (isNaN(pointX) || isNaN(pointY)) {
        alert('Please select load trigger coordinates.');
        return;
    }

    displayTable(beamData, pointX, pointY, ledgeX, ledgeY);
    document.getElementById("results").style.display = null;
}
window.processJSON = processJSON;

function setLoadTriggerCoords(value) {
    const [loadX, loadY, idx] = value.split(",");
    document.getElementById("pointX").value = loadX;
    document.getElementById("pointY").value = loadY;
    const load = idx !== undefined ? loadTriggers[idx] : null;
    selectedFootprint = (load && load.footprint) ? load.footprint : null;
}
window.setLoadTriggerCoords = setLoadTriggerCoords;

function handleChangeMode(value) {
    const ledgestorage = document.getElementById("ledgestorage");
    ledgestorage.style.display = (value === "ledgewarp" ? "block" : "none");
}
window.handleChangeMode = handleChangeMode;

function getBeamDisplay(x, y) {
    const beamElement = document.createElement('pre');
    beamElement.textContent = `(${x.toFixed(3)}, ${y.toFixed(3)})`;
    return beamElement;
}

function displayTable(data, pointX, pointY, ledgeX, ledgeY) {
    tableBody.textContent = '';
    const mode = document.getElementById("mode").value;

    if (mode === "airwalk") {
        document.getElementById("frameHeader").style.display = "none";
        const calculatedDistances = data.map(item => {
            const { x1, y1, x2, y2 } = item;
            return {
                x1,
                y1,
                x2,
                y2,
                distance: bestDistanceFromLine(pointX, pointY, x1, y1, x2, y2, selectedFootprint)
            };
        });

        const filteredAndSortedData = calculatedDistances
            .filter(item => item.distance !== Infinity)
            .sort((a, b) => a.distance - b.distance);

        filteredAndSortedData.forEach(item => {
            const { x1, y1, x2, y2, distance } = item;

            const row = document.createElement('tr');
            row.insertCell().appendChild(getBeamDisplay(x2, y2));
            row.insertCell().textContent = estimateLocation(x1, y1);
            row.insertCell().appendChild(nearestLoad(x1, y1));
            Object.assign(row.insertCell(), { textContent: distance.toFixed(3), className: "text-important" });
            tableBody.appendChild(row);
        });
    }

    else if (mode === "ledgewarp") {
        document.getElementById("frameHeader").style.display = null;
        const calculatedDistances = data.map(item => {
            const { x1, y1, x2, y2 } = item;
            const [distance, frame] = bestClosestLedgeWarpDistance(
                x2, y2, pointX, pointY, ledgeX, ledgeY, selectedFootprint);
            return {
                x1,
                y1,
                x2,
                y2,
                distance,
                frame
            };
        });

        const filteredAndSortedData = calculatedDistances
            .filter((a) => a.frame !== 0)
            .sort((a, b) => a.distance - b.distance);

        filteredAndSortedData.forEach(item => {
            const { x1, y1, x2, y2, distance, frame } = item;

            const row = document.createElement('tr');
            row.insertCell().appendChild(getBeamDisplay(x2, y2));
            row.insertCell().textContent = estimateLocation(x1, y1);
            row.insertCell().appendChild(nearestLoad(x1, y1));
            Object.assign(row.insertCell(), { textContent: distance.toFixed(3), className: "text-important" });
            Object.assign(row.insertCell(), { textContent: frame, className: "text-important" });
            tableBody.appendChild(row);
        });
    }
}

function distanceFromLine(x, y, x1, y1, x2, y2) {
    const a = y2 - y1;
    const b = x1 - x2;
    const c = x2 * y1 - x1 * y2;
    const square = a * a + b * b;
    const d = (x - x1) * (-b) + (y - y1) * (a);

    const distance = Math.abs(a * x + b * y + c) / Math.sqrt(square);

    if (d > square) {
        return distance;
    }
    return Infinity;
}

function distanceBetweenPoints(x1, y1, x2, y2) {
    const a = y2 - y1;
    const b = x1 - x2;
    return Math.sqrt(a * a + b * b)
}

function clipToValidHalfPlane(poly, x1, y1, x2, y2) {
    const a = y2 - y1;
    const b = x1 - x2;
    const square = a * a + b * b;
    // Mirrors distanceFromLine's own `d > square` test, shifted so that
    // positive == valid and 0 == the same boundary distanceFromLine excludes.
    const side = (px, py) => (px - x1) * (-b) + (py - y1) * a - square;

    const out = [];
    const n = poly.length;
    for (let i = 0; i < n; i++) {
        const curr = poly[i];
        const prev = poly[(i + n - 1) % n];
        const sCurr = side(curr[0], curr[1]);
        const sPrev = side(prev[0], prev[1]);
        if (sCurr > 0) {
            if (sPrev <= 0) {
                const t = sPrev / (sPrev - sCurr);
                out.push([prev[0] + t * (curr[0] - prev[0]), prev[1] + t * (curr[1] - prev[1])]);
            }
            out.push(curr);
        } else if (sPrev > 0) {
            const t = sPrev / (sPrev - sCurr);
            out.push([prev[0] + t * (curr[0] - prev[0]), prev[1] + t * (curr[1] - prev[1])]);
        }
    }
    return out;
}

function bestDistanceFromLine(targetX, targetY, x1, y1, x2, y2, footprint) {
    if (!footprint) {
        return distanceFromLine(targetX, targetY, x1, y1, x2, y2);
    }

    const clipped = clipToValidHalfPlane(footprint, x1, y1, x2, y2);
    if (clipped.length === 0) {
        return Infinity;
    }

    const a = y2 - y1;
    const b = x1 - x2;
    const c = x2 * y1 - x1 * y2;
    const lineLen = Math.sqrt(a * a + b * b);

    let minSigned = Infinity;
    let maxSigned = -Infinity;
    for (const [px, py] of clipped) {
        const signed = a * px + b * py + c;
        if (signed < minSigned) minSigned = signed;
        if (signed > maxSigned) maxSigned = signed;
    }

    if (minSigned <= 0 && maxSigned >= 0) {
        return 0; // the beam line crosses the trigger's (valid-region) footprint
    }
    return Math.min(Math.abs(minSigned), Math.abs(maxSigned)) / lineLen;
}

// Point-to-convex-polygon distance (0 if inside), giving the ledgewarp path
// the same "real shape, not just corners" treatment as bestDistanceFromLine
// above. Each simulated frame is a fixed point, so the true nearest distance
// to the trigger can land on an edge interior -- or be 0 if a frame position
// ends up inside the trigger -- not just at one of its 4 corners.
function distanceToSegment(px, py, x1, y1, x2, y2) {
    const dx = x2 - x1, dy = y2 - y1;
    const lenSq = dx * dx + dy * dy;
    let t = lenSq === 0 ? 0 : ((px - x1) * dx + (py - y1) * dy) / lenSq;
    t = Math.max(0, Math.min(1, t));
    return distanceBetweenPoints(px, py, x1 + t * dx, y1 + t * dy);
}

function pointInConvexPolygon(px, py, poly) {
    let sign = 0;
    const n = poly.length;
    for (let i = 0; i < n; i++) {
        const [x1, y1] = poly[i];
        const [x2, y2] = poly[(i + 1) % n];
        const cross = (x2 - x1) * (py - y1) - (y2 - y1) * (px - x1);
        if (cross !== 0) {
            const s = cross > 0 ? 1 : -1;
            if (sign === 0) sign = s;
            else if (s !== sign) return false;
        }
    }
    return true;
}

function distanceToPolygon(px, py, poly) {
    if (pointInConvexPolygon(px, py, poly)) return 0;
    let best = Infinity;
    const n = poly.length;
    for (let i = 0; i < n; i++) {
        const [x1, y1] = poly[i];
        const [x2, y2] = poly[(i + 1) % n];
        const d = distanceToSegment(px, py, x1, y1, x2, y2);
        if (d < best) best = d;
    }
    return best;
}

function closestLedgeWarpDistanceToShape(xb, yb, poly, xl, yl) {
    let minDistance = distanceToPolygon(xb, yb, poly);
    let closestFrame = 0;
    for (let i = 1; i <= 15; i++) {
        xb = 0.75 * xb + 0.25 * xl;
        yb = 0.75 * yb + 0.25 * yl;
        const distance = distanceToPolygon(xb, yb, poly);
        if (distance < minDistance) {
            minDistance = distance;
            closestFrame = i;
        }
    }
    return [minDistance, closestFrame];
}

function bestClosestLedgeWarpDistance(xb, yb, targetX, targetY, ledgeX, ledgeY, footprint) {
    if (!footprint) {
        return closestLedgeWarpDistance(xb, yb, targetX, targetY, ledgeX, ledgeY);
    }
    return closestLedgeWarpDistanceToShape(xb, yb, footprint, ledgeX, ledgeY);
}

function closestLedgeWarpDistance(xb, yb, x, y, xl, yl) {
    let minDistance = distanceBetweenPoints(xb, yb, x, y);
    let closestFrame = 0;
    for (let i = 1; i <= 15; i++) {
        xb = 0.75 * xb + 0.25 * xl;
        yb = 0.75 * yb + 0.25 * yl;
        const distance = distanceBetweenPoints(xb, yb, x, y);
        if (distance < minDistance) {
            minDistance = distance;
            closestFrame = i;
        }
    }
    return [minDistance, closestFrame];
}

function estimateLocation(x, y) {
    const areaMapping = {
        "Temple": [4.68, -147.53],
        "King's Gate": [-413.54, -66.49],
        "The Sun Temple": [-566.48, -43.91],
        "Marshalling Ground": [-780.90, -17.71],
        "The Windmills": [-775.92, 164.92],
        "Hunter's Lair": [-929.43, 322.36],
        "Martyrs' Tower": [-552.84, 202.43],
        "The Cauldron": [-167.81, 225.33],
        "Construction Yard": [-251.37, 456.49],
        "Machinery Ground": [-395.26, 512.35],
        "Heaven's Stair": [-303.65, 652.55],
        "The Observatory": [-296.59, 697.24],
        "Reservoir": [-157.00, 571.22],
        "The Cavern": [155.28, 180.34],
        "Royal Gardens": [265.01, 381.49],
        "Spire of Dreams": [187.59, 550.25],
        "Coronation Hall": [340.30, 582.45],
        "The Palace Rooms": [351.24, 799.46],
        "Royal Spire": [468.48, 425.92],
        "City Gate": [421.11, -88.07],
        "Tower of Ahriman": [598.56, 13.45],
        "Tower of Ormazd": [654.07, 208.06],
        "City of Light": [804.07, 113.09],
        "Warrior's Fortress": [1039.05, 309.18],
        "Queen's Tower": [786.82, -32.44],
    }

    let minDistance = Infinity;
    let closestArea = "";

    for (const area in areaMapping) {
        const [areaX, areaY] = areaMapping[area];
        const distance = distanceBetweenPoints(x, y, areaX, areaY);

        if (distance < minDistance) {
            minDistance = distance;
            closestArea = area;
        }
    }

    return closestArea;
}

function nearestLoad(x, y) {
    let minDistance = Infinity;
    let closestLoad = "";

    for (const load of loadTriggers) {
        const [loadX, loadY, loadZ] = load.coords;
        // Distance to the real footprint's nearest corner when there is one,
        // not just the center point -- for a large or off-center trigger a
        // point on the beam could be genuinely closer to an edge/corner than
        // to the recorded center.
        let distance = distanceBetweenPoints(x, y, loadX, loadY);
        if (load.footprint) {
            for (const [fx, fy] of load.footprint) {
                const d = distanceBetweenPoints(x, y, fx, fy);
                if (d < distance) distance = d;
            }
        }

        if (distance < minDistance) {
            minDistance = distance;
            closestLoad = `(${loadX}, ${loadY}, ${loadZ})`;
        }
    }

    const nearestLoadElement = document.createElement('pre');
    nearestLoadElement.textContent = closestLoad;
    return nearestLoadElement;
}