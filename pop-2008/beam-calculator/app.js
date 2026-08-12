import loadTriggers from "./loads.js";
import beamData from "./beams.js";

const loadSelect = document.getElementById('loadSelect');
loadTriggers.forEach((load, i) => {
    const loadOption = document.createElement('option');
    loadOption.textContent = load.name;
    // Index is carried in the option value so setLoadTriggerCoords can look up
    // this trigger's real footprint (its true world-space quad), not just its
    // center point -- see loads.js, which now has both.
    loadOption.value = `${load.coords[0]},${load.coords[1]},${i}`;
    loadSelect.appendChild(loadOption);
});

const tableBody = document.getElementById('tableBody');

// The footprint of whichever load trigger is currently selected from the
// dropdown, or null when the target was typed in manually (in which case the
// math falls back to exact-point behaviour, same as before this change).
//
// Triggers are not points -- some of these quads are ~90 units across (see
// loads.js) -- so "distance to one guessed interior point" and "distance to
// the trigger's actual nearest edge" can disagree by a lot for a large or
// rotated trigger. Manual X/Y entry still targets an exact point, since that
// is meaningful too (e.g. probing a specific spot); the dropdown now targets
// the trigger's real shape instead of an eyeballed single point inside it.
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

// Both wrappers below reuse distanceFromLine / closestLedgeWarpDistance
// completely unchanged -- just called once per corner of the trigger's real
// footprint instead of once for a single guessed point, keeping whichever
// result is best. A trigger with no footprint (manually typed target, or an
// old entry with no match -- see loads.js) falls back to the original
// single-point call, so behaviour is identical to before this change unless
// a footprint is actually selected.
function bestDistanceFromLine(targetX, targetY, x1, y1, x2, y2, footprint) {
    if (!footprint) {
        return distanceFromLine(targetX, targetY, x1, y1, x2, y2);
    }
    let best = Infinity;
    for (const [fx, fy] of footprint) {
        const d = distanceFromLine(fx, fy, x1, y1, x2, y2);
        if (d < best) best = d;
    }
    return best;
}

function bestClosestLedgeWarpDistance(xb, yb, targetX, targetY, ledgeX, ledgeY, footprint) {
    if (!footprint) {
        return closestLedgeWarpDistance(xb, yb, targetX, targetY, ledgeX, ledgeY);
    }
    let best = [Infinity, 0];
    for (const [fx, fy] of footprint) {
        const result = closestLedgeWarpDistance(xb, yb, fx, fy, ledgeX, ledgeY);
        if (result[0] < best[0]) best = result;
    }
    return best;
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