const songs = [
    {
        name: "SKINNY",
        duration: "3:39",
    },
    {
        name: "LUNCH",
        duration: "2:59",
    },
    {
        name: "CHIHIRO",
        duration: "5:03",
    },
    {
        name: "BIRDS OF A FEATHER",
        duration: "3:30",
    },
    {
        name: "WILDFLOWER",
        duration: "4:21",
    },
    {
        name: "THE GREATEST",
        duration: "4:53",
    },
    {
        name: "L'AMOUR DE MA VIE",
        duration: "5:33",
    },
    {
        name: "THE DINER",
        duration: "3:06",
    },
    {
        name: "BITTERSUITE",
        duration: "4:58",
    },
    {
        name: "BLUE",
        duration: "5:43 ",
    },
];

const allSongsContainer = document.getElementById("allSongsContainer");

function elementFromHtml(html) {
    const template = document.createElement("template");
    template.innerHTML = html.trim();

    return template.content.firstElementChild;
}

for (let i = 0; i < songs.length; i++) {
    allSongsContainer.appendChild(
        elementFromHtml(`
            <div class="song tableDesign">
                <span class="index">${i + 1}</span>
                <div>
                    <h2>${songs[i].name}</h2>
                    <h3>Billie Eilish</h3>
                </div>
                <span>${songs[i].duration}</span>
                <span><img src="assets/icons/like.svg" /></span>
            </div>
        `)
    );
}
