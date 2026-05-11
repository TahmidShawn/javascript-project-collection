const app = document.getElementById("app");

function getRoute() {
    const hash = location.hash.slice(1);

    if (!hash) return { page: "home" };

    if (hash.startsWith("product-")) {
        const id = hash.split("-")[1];
        return { page: "product", id };
    }

    return { page: hash };
}

async function render(page, id = null) {
    const response = await fetch(`./pages/${page}.html`);
    const html = await response.text();

    app.innerHTML = html;

    if (page === "shop") {
        const { initShop } = await import("../scripts/shop.js");
        initShop();
    }

    if (page === "product") {
        const { initProduct } = await import("../scripts/product.js");
        initProduct(id);
    }
}

const route = getRoute();
render(route.page, route.id);

document.addEventListener("click", (e) => {
    const link = e.target.closest("[data-page]");
    if (!link) return;

    e.preventDefault();

    const page = link.dataset.page;

    if (page === "product") {
        const id = link.dataset.id;

        location.hash = `product-${id}`;
        render("product", id);

        return;
    }

    location.hash = page;
    render(page);
});

window.addEventListener("hashchange", () => {
    const route = getRoute();
    render(route.page, route.id);
});
