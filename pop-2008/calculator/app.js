import loadTriggers from "./loads.js";
import beamData from "./beams.js";

const loadSelect = document.getElementById('loadSelect');
loadTriggers.forEach((load) => {
    const loadOption = document.createElement('option');
    loadOption.textContent = load.name;
    loadOption.value = `${load.coords[0]},${load.coords[1]}`;
    loadSelect.appendChild(loadOption);
});

const tableBody = document.getElementById('tableBody');

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
    const [loadX, loadY] = value.split(",");
    document.getElementById("pointX").value = loadX;
    document.getElementById("pointY").value = loadY;
}
window.setLoadTriggerCoords = setLoadTriggerCoords;

function handleChangeMode(value) {
    const ledgestorage = document.getElementById("ledgestorage");
    if (value === "ledgewarp") ledgestorage.childNodes.forEach(elem => elem.disabled = false);
    else ledgestorage.childNodes.forEach(elem => elem.disabled = true);
}
window.handleChangeMode = handleChangeMode;

function getBeamDisplay(x1, y1, x2, y2) {
    const beamElement = document.createElement('pre');
    beamElement.textContent = `(${x1.toFixed(3)}, ${y1.toFixed(3)}) 🠮 (${x2.toFixed(3)}, ${y2.toFixed(3)})`;
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
                distance: distanceFromLine(pointX, pointY, x1, y1, x2, y2)
            };
        });

        const filteredAndSortedData = calculatedDistances
            .filter(item => item.distance !== Infinity)
            .sort((a, b) => a.distance - b.distance);

        filteredAndSortedData.forEach(item => {
            const { x1, y1, x2, y2, distance } = item;

            const row = document.createElement('tr');
            row.insertCell().appendChild(getBeamDisplay(x1, y1, x2, y2));
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
            const [distance, frame] = closestLedgeWarpDistance(x2, y2, pointX, pointY, ledgeX, ledgeY);
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
            row.insertCell().appendChild(getBeamDisplay(x1, y1, x2, y2));
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

    for (const load in loadTriggers) {
        const [loadX, loadY, loadZ] = loadTriggers[load].coords;
        const distance = distanceBetweenPoints(x, y, loadX, loadY);

        if (distance < minDistance) {
            minDistance = distance;
            closestLoad = `(${loadX}, ${loadY}, ${loadZ})`;
        }
    }

    const nearestLoadElement = document.createElement('pre');
    nearestLoadElement.textContent = closestLoad;
    return nearestLoadElement;
}