import { products } from "../data/products.js";

export function initProduct(id) {
    const container = document.getElementById("product-details");

    const product = products.find((p) => p.id == id);

    if (!product) {
        container.innerHTML = "Product not found";
        return;
    }

    container.innerHTML = `
        <h1>${product.name}</h1>
        <p>Price: $${product.price}</p>
    `;
}
