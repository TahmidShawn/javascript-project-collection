const app = document.getElementById("app");
const nav = document.getElementById("nav");

async function render(page) {
    const response = await fetch(`./pages/${page}.html`);

    const html = await response.text();

    app.innerHTML = html;
}

nav.addEventListener("click", (e) => {
    // console.log(e.target.dataset.page);
    if (e.target.matches("[data-page]")) {
        e.preventDefault();

        const page = e.target.dataset.page;
        location.hash = page;
        render(page);
    }
});

const currentPage = location.hash.slice(1) || "home";

render(currentPage);
