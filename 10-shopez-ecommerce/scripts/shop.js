import { products } from "./../data/products.js";

export function initShop() {
    const container = document.getElementById("products");

    container.innerHTML = products
        .map(
            (p) => `
				<a href="#product" data-page="product" data-id="${p.id}">
					<div class="product">
						<h3>${p.name}</h3>
						<p>${p.price}</p>
					</div>
				</a>
    		`,
        )
        .join("");
}
