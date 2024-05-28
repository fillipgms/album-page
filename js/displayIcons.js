const icons = [
    "assets/icons/play.svg",
    "assets/icons/shuffle.svg",
    "assets/icons/add.svg",
    "assets/icons/playlist.svg",
    "assets/icons/download.svg",
    "assets/icons/share.svg",
    "assets/icons/more.svg",
];

const controls = document.getElementById("controls");

function elementFromHtml(html) {
    const template = document.createElement("template");
    template.innerHTML = html.trim();

    return template.content.firstElementChild;
}

for (let i = 0; i < icons.length; i++) {
    controls.appendChild(
        elementFromHtml(`
            <li>
                <img src=${icons[i]} alt="" />
            </li>
        `)
    );
}
