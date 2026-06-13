// starter template for webring widget
// subject to change
const DATA_FOR_WEBRING = `https://raw.githubusercontent.com/merakith/merakith-webring/refs/heads/main/members.json?token=GHSAT0AAAAAADXFMORSLSGW46UC2GFJ5RUW2RM726Q`;

const template = document.createElement("template");
template.innerHTML = `
    <style>
        .webring {
            text-align: center;
        }
    </style>

    <div class="webring">
        <div id="copy">
            
        </div>
    </div>
`;

class WebRing extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        const thisSite = this.getAttribute("site");

        fetch(DATA_FOR_WEBRING)
        .then((response) => response.json())
        .then((sites) => {
            const matchedSiteIndex = sites.findIndex(
                (site) => site.url === thisSite
            );
            const matchedSite = sites[matchedSiteIndex];

            let prevSiteIndex = matchedSiteIndex - 1;
            if (prevSiteIndex === -1) prevSiteIndex = sites.length - 1;

            let nextSiteIndex = matchedSiteIndex + 1;
            if (nextSiteIndex > sites.length) nextSiteIndex = 0;

            const randomSiteIndex = this.getRandomInt(0, sites.length - 1);

            const cp = `
                <h1>Merakith Webring</h1>
                <p>
                    This <a href="${matchedSite.url}">${matchedSite.name}</a> site is owned by ${matchedSite.owner}
                </p>
          
                <p>
                    <a href="${sites[prevSiteIndex].url}">[Prev]</a>
                    <a href="${sites[nextSiteIndex].url}">[Next]</a>
                    <a href="${sites[randomSiteIndex].url}">[Random]</a>
                </p>
            `;

            this.shadowRoot
            .querySelector("#copy")
            .insertAdjacentHTML("afterbegin", cp);
        });
  }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

window.customElements.define("merakith-webring", WebRing);
