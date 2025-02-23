const mapElements = document.getElementById("map-elements");
const levels = [
    {
        name: "Temple",
        playlistId: "PLUbxAKkVPqs4q08Zu34HsU6UbIimm6ULa",
        cx: "244.041",
        cy: "280.223",
    },
    {
        name: "King's Gate",
        playlistId: "PLUbxAKkVPqs6at4edL7E5smMLw8lvrM-w",
        cx: "156.194",
        cy: "252.966",
    },
    {
        name: "The Cauldron",
        playlistId: "PLUbxAKkVPqs59tZ48U1hEvXOC7qdw1Y7k",
        cx: "210.677",
        cy: "192.834",
    },
    {
        name: "The Cavern",
        playlistId: "PLUbxAKkVPqs4CudGGQz8AZUksclh40a4M",
        cx: "283.106",
        cy: "192.24",
    },
    {
        name: "City Gate",
        playlistId: "PLUbxAKkVPqs5Mve3iA1ecO0iwC17O32_E",
        cx: "339.855",
        cy: "251.478",
    },
    {
        name: "The Sun Temple",
        playlistId: "PLUbxAKkVPqs4Usycg8j6RGZ1YB6ob4eaL",
        cx: "123.466",
        cy: "239.508",
    },
    {
        name: "Martyrs' Tower",
        playlistId: "PLUbxAKkVPqs5NP2RRu7xgySAyPZoB5jvz",
        cx: "123.979",
        cy: "196.78",
    },
    {
        name: "Marshalling Ground",
        playlistId: "PLUbxAKkVPqs5u0utlFNvID3wh6z8Sgwad",
        cx: "79.604",
        cy: "240.236",
    },
    {
        name: "The Windmills",
        playlistId: "PLUbxAKkVPqs7o3qWmne2YKpOpp4flIxC7",
        cx: "80.712",
        cy: "197.482",
    },
    {
        name: "Hunter's Lair",
        playlistId: "PLUbxAKkVPqs50aGzYIeMrL3tmtKyKf7XR",
        cx: "46.795",
        cy: "166.16",
    },
    {
        name: "The Observatory",
        playlistId: "PLUbxAKkVPqs5kdC2XNNJMPOOr95SnhX2q",
        cx: "169.977",
        cy: "54.058",
    },
    {
        name: "The Palace Rooms",
        playlistId: "PLUbxAKkVPqs7zBS58BJHjY7iUnsRPKdLJ",
        cx: "325.05",
        cy: "54.922",
    },
    {
        name: "Warrior's Fortress",
        playlistId: "PLUbxAKkVPqs6Zwn2-j2udwVM3wYqPXAu9",
        cx: "449.341",
        cy: "165.863",
    },
    {
        name: "City of Light",
        playlistId: "PLUbxAKkVPqs7TER846Dfm7YGdIMKnJBDn",
        cx: "417.829",
        cy: "196.24",
    },
    {
        name: "Queen's Tower",
        playlistId: "PLUbxAKkVPqs5K99E1SvDd20MpuqSgde8u",
        cx: "417.666",
        cy: "238.777",
    },
    {
        name: "Tower of Ahriman",
        playlistId: "PLUbxAKkVPqs7Ok1ZtrHk-G2JT8ff9kcBQ",
        cx: "373.156",
        cy: "197.402",
    },
    {
        name: "Tower of Ormazd",
        playlistId: "PLUbxAKkVPqs6ZdIBVrwAeNr3OydNCeqrl",
        cx: "373.372",
        cy: "240.535",
    },
    {
        name: "Coronation Hall",
        playlistId: "PLUbxAKkVPqs42VHYygYq2ufj-9XDLHMl5",
        cx: "312.781",
        cy: "86.489",
    },
    {
        name: "Royal Spire",
        playlistId: "PLUbxAKkVPqs7fpDwkRRX2Oqb5Eqc6_yW_",
        cx: "333.563",
        cy: "125.568",
    },
    {
        name: "Royal Gardens",
        playlistId: "PLUbxAKkVPqs75RLDM8kH4XVxSLj1GRor0",
        cx: "297.673",
        cy: "148.972",
    },
    {
        name: "Spire of Dreams",
        playlistId: "PLUbxAKkVPqs5iZffy5UretrfVp_q6_4bh",
        cx: "275.269",
        cy: "111.379",
    },
    {
        name: "Reservoir",
        playlistId: "PLUbxAKkVPqs6dIWmIQo-bEM98OLp_aohk",
        cx: "216.515",
        cy: "110.244",
    },
    {
        name: "Heaven's Stair",
        playlistId: "PLUbxAKkVPqs4GS5XepANjWzE2sI_ZUKuB",
        cx: "178.49",
        cy: "88.11",
    },
    {
        name: "Construction Yard",
        playlistId: "PLUbxAKkVPqs7s8shMnqPHpNnP6E_sA6Il",
        cx: "196.084",
        cy: "149.404",
    },
    {
        name: "Machinery Ground",
        playlistId: "PLUbxAKkVPqs7FRKn5sJwtXPsexegvuhI9",
        cx: "158.059",
        cy: "125.432",
    },
]

const createCircle = (cx, cy, r) => {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("rx", r);
    circle.setAttribute("ry", r);
    return circle;
};

levels.forEach((level) => {
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.setAttribute("class", "bubble-group");

    const bubble = createCircle(level.cx, level.cy, "13.053");
    bubble.setAttribute("class", "bubble");
    bubble.setAttribute("stroke", "black");
    bubble.setAttribute("fill", "rgba(164, 158, 170)");
    bubble.setAttribute("stroke-width", "1");
    bubble.onclick = () => window.open(`https://www.youtube.com/playlist?list=${level.playlistId}`, '_blank');
    bubble.onmouseover = () => {
        const element = document.getElementById('selected-playlist');
        element.innerText = level.name;
        element.classList.remove("selected-none");
    }
    bubble.onmouseleave = () => {
        const element = document.getElementById('selected-playlist');
        element.innerText = "None";
        element.classList.add("selected-none");
    }

    const dot = createCircle(level.cx, level.cy, "3");
    dot.setAttribute("class", "bubble-dot");
    dot.style.pointerEvents = "none";

    group.appendChild(bubble);
    group.appendChild(dot);
    mapElements.appendChild(group)
});