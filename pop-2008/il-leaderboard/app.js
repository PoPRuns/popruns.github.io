const mapElements = document.getElementById("map-elements");
const levels = [
    {
        name: "King's Gate",
        playlistId: "PLUbxAKkVPqs6at4edL7E5smMLw8lvrM-w",
        cx: "156.194",
        cy: "252.966",
        row: 6,
        col: 2
    },
    {
        name: "The Cauldron",
        playlistId: "PLUbxAKkVPqs59tZ48U1hEvXOC7qdw1Y7k",
        cx: "210.677",
        cy: "192.834",
        row: 18,
        col: 2
    },
    {
        name: "The Cavern",
        playlistId: "PLUbxAKkVPqs4CudGGQz8AZUksclh40a4M",
        cx: "283.106",
        cy: "192.24",
        row: 30,
        col: 2
    },
    {
        name: "City Gate",
        playlistId: "PLUbxAKkVPqs5Mve3iA1ecO0iwC17O32_E",
        cx: "339.855",
        cy: "251.478",
        row: 42,
        col: 2
    },
    {
        name: "The Sun Temple",
        playlistId: "PLUbxAKkVPqs4Usycg8j6RGZ1YB6ob4eaL",
        cx: "123.466",
        cy: "239.508",
        row: 6,
        col: 5
    },
    {
        name: "Martyrs' Tower",
        playlistId: "PLUbxAKkVPqs5NP2RRu7xgySAyPZoB5jvz",
        cx: "123.979",
        cy: "196.78",
        row: 6,
        col: 11
    },
    {
        name: "Marshalling Ground",
        playlistId: "PLUbxAKkVPqs5u0utlFNvID3wh6z8Sgwad",
        cx: "79.604",
        cy: "240.236",
        row: 6,
        col: 8
    },
    {
        name: "The Windmills",
        playlistId: "PLUbxAKkVPqs7o3qWmne2YKpOpp4flIxC7",
        cx: "80.712",
        cy: "197.482",
        row: 6,
        col: 14
    },
    {
        name: "City of Light",
        playlistId: "PLUbxAKkVPqs7TER846Dfm7YGdIMKnJBDn",
        cx: "417.829",
        cy: "196.24",
        row: 42,
        col: 14
    },
    {
        name: "Queen's Tower",
        playlistId: "PLUbxAKkVPqs5K99E1SvDd20MpuqSgde8u",
        cx: "417.666",
        cy: "238.777",
        row: 42,
        col: 8
    },
    {
        name: "Tower of Ahriman",
        playlistId: "PLUbxAKkVPqs7Ok1ZtrHk-G2JT8ff9kcBQ",
        cx: "373.156",
        cy: "197.402",
        row: 42,
        col: 5
    },
    {
        name: "Tower of Ormazd",
        playlistId: "PLUbxAKkVPqs6ZdIBVrwAeNr3OydNCeqrl",
        cx: "373.372",
        cy: "240.535",
        row: 42,
        col: 11
    },
    {
        name: "Coronation Hall",
        playlistId: "PLUbxAKkVPqs42VHYygYq2ufj-9XDLHMl5",
        cx: "312.781",
        cy: "86.489",
        row: 30,
        col: 14
    },
    {
        name: "Royal Spire",
        playlistId: "PLUbxAKkVPqs7fpDwkRRX2Oqb5Eqc6_yW_",
        cx: "333.563",
        cy: "125.568",
        row: 30,
        col: 11
    },
    {
        name: "Royal Gardens",
        playlistId: "PLUbxAKkVPqs75RLDM8kH4XVxSLj1GRor0",
        cx: "297.673",
        cy: "148.972",
        row: 30,
        col: 5
    },
    {
        name: "Spire of Dreams",
        playlistId: "PLUbxAKkVPqs5iZffy5UretrfVp_q6_4bh",
        cx: "275.269",
        cy: "111.379",
        row: 30,
        col: 8
    },
    {
        name: "Reservoir",
        playlistId: "PLUbxAKkVPqs6dIWmIQo-bEM98OLp_aohk",
        cx: "216.515",
        cy: "110.244",
        row: 18,
        col: 8
    },
    {
        name: "Heaven's Stair",
        playlistId: "PLUbxAKkVPqs4GS5XepANjWzE2sI_ZUKuB",
        cx: "178.49",
        cy: "88.11",
        row: 18,
        col: 14
    },
    {
        name: "Construction Yard",
        playlistId: "PLUbxAKkVPqs7s8shMnqPHpNnP6E_sA6Il",
        cx: "196.084",
        cy: "149.404",
        row: 18,
        col: 5
    },
    {
        name: "Machinery Ground",
        playlistId: "PLUbxAKkVPqs7FRKn5sJwtXPsexegvuhI9",
        cx: "158.059",
        cy: "125.432",
        row: 18,
        col: 11
    },
];
let worksheet = null;

const createCircle = (cx, cy, r) => {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("rx", r);
    circle.setAttribute("ry", r);
    return circle;
};

try {
    const mainContainer = document.getElementsByClassName('main-container')[0];
    const loader = document.getElementById('loader');
    mainContainer.style.display = 'none';
    loader.style.display = 'inherit';

    const url = "https://docs.google.com/spreadsheets/d/1ArG9rZHyvuw1o_aNshhb1a2d8G2SxdpJ_RXqgmqhaEs/export?format=xlsx";
    const response = await fetch(url);
    const blob = await response.blob();

    const reader = new FileReader();
    reader.readAsArrayBuffer(blob);
    reader.onload = async function (event) {
        const buffer = event.target.result;

        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.load(buffer);

        worksheet = workbook.worksheets[0];

        mainContainer.style.display = 'flex';
        loader.style.display = 'none';
    };
} catch (error) {
    console.error("Error loading Excel file:", error);
}

const parseHyperlinkFormula = (cellValue) => {
    const match = cellValue.formula.match(/HYPERLINK\("([^"]+)",\s*"([^"]+)"\)/);
    return match ? { url: match[1], text: match[2] } : null;
};

const populateTable = (row, col) => {
    const table = document.getElementById('leaderboard-table');
    table.textContent = ""
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    ['Player', 'Time'].forEach(text => {
        const th = headerRow.insertCell();
        const strong = document.createElement('strong');
        strong.textContent = text;
        th.appendChild(strong);
    });
    thead.appendChild(headerRow);

    const tbody = document.createElement('tbody');
    for (let r = row; r < row + 10; r++) {
        const player = worksheet.getRow(r).getCell(col + 1).value;
        const time = worksheet.getRow(r).getCell(col).value
        if (typeof player !== 'string' || typeof time !== 'object') continue;

        const runRow = document.createElement('tr');
        runRow.insertCell().textContent = player;

        const timeParsed = parseHyperlinkFormula(time);
        const link = document.createElement('a');
        link.href = timeParsed.url;
        link.target = "_blank";
        link.textContent = timeParsed.text;
        runRow.insertCell().appendChild(link);

        tbody.appendChild(runRow);
    }

    if (tbody.childElementCount > 0) {
        table.appendChild(thead);
        table.appendChild(tbody);
    }
    else {
        const noRunsElement = document.createElement("span");
        noRunsElement.textContent = "No runs";
        noRunsElement.style.fontStyle = "italic";
        noRunsElement.style.color = "grey";
        table.insertRow().insertCell().appendChild(noRunsElement);
    }
};

levels.forEach((level) => {
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.setAttribute("class", "bubble-group");

    const bubble = createCircle(level.cx, level.cy, "13.053");
    bubble.setAttribute("class", "bubble");
    bubble.setAttribute("stroke", "black");
    bubble.setAttribute("fill", "rgba(164, 158, 170)");
    bubble.setAttribute("stroke-width", "1");
    bubble.onclick = () => {
        const element = document.getElementById('selected-playlist');
        element.textContent = level.name;
        element.classList.remove("selected-none");
        document.querySelectorAll(".group-selected").forEach(elem => elem.classList.remove("group-selected"));
        group.classList.add("group-selected");
        populateTable(level.row, level.col);
    }

    const dot = createCircle(level.cx, level.cy, "3");
    dot.setAttribute("class", "bubble-dot");
    dot.style.pointerEvents = "none";

    group.appendChild(bubble);
    group.appendChild(dot);
    mapElements.appendChild(group)
});