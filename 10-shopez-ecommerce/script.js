const app = document.getElementById("app");

async function render(page) {
    const response = await fetch(`./pages/${page}.html`);

    const html = await response.text();

    app.innerHTML = html;
}

document.addEventListener("click", (e) => {
    if (e.target.matches("[data-page]")) {
        e.preventDefault();

        const page = e.target.dataset.page;

        location.hash = page;

        render(page);
    }
});

const currentPage = location.hash.slice(1) || "home";

render(currentPage);
