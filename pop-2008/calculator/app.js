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

    if (isNaN(pointX) || isNaN(pointY)) {
        alert('Please select load trigger coordinates.');
        return;
    }

    displayTable(beamData, pointX, pointY);
    document.getElementById("results").style.display = "block";
}
window.processJSON = processJSON;

function setLoadTriggerCoords(value) {
    const [loadX, loadY] = value.split(",");
    document.getElementById("pointX").value = loadX;
    document.getElementById("pointY").value = loadY;
}
window.setLoadTriggerCoords = setLoadTriggerCoords;

function displayTable(data, pointX, pointY) {
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
            row.innerHTML = `
                    <td><pre>(${x1}, ${y1}) &#x1F82E; (${x2}, ${y2})</pre></td>
                    <td>${estimateLocation(x1, y1)}</td>
                    <td><pre>${nearestLoad(x1, y1)}</pre></td>
                    <td class="text-important">${distance.toFixed(3)}</td>
                `;

            tableBody.appendChild(row);
        });
    }
    else if (mode === "templewarp") {
        document.getElementById("frameHeader").style.display = null;
        const calculatedDistances = data.map(item => {
            const { x1, y1, x2, y2 } = item;
            const [distance, frame] = closestTempleWarpDistance(x2, y2, pointX, pointY);
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
            row.innerHTML = `
                    <td><pre>(${x1}, ${y1}) &#x1F82E; (${x2}, ${y2})</pre></td>
                    <td>${estimateLocation(x1, y1)}</td>
                    <td><pre>${nearestLoad(x1, y1)}</pre></td>
                    <td class="text-important">${distance.toFixed(3)}</td>
                    <td class="text-important">${frame}</td>
                `;

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

function closestTempleWarpDistance(x2, y2, x, y) {
    let minDistance = distanceBetweenPoints(x2, y2, x, y);
    let closestFrame = 0;
    for (let i = 1; i <= 15; i++) {
        x2 = 0.75 * x2;
        y2 = 0.75 * y2;
        const distance = distanceBetweenPoints(x2, y2, x, y);
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
            closestLoad = `(${loadX}, ${loadY}, ${loadY})`;
        }
    }

    return closestLoad;
}