const generateColorBtn = document.getElementById("generateColorBtn");

generateColorBtn.addEventListener("click", generateColor);

function generateColor() {
    let colors = [];
    for (let i = 0; i < 6; i++) {
        colors.push(generateColorCode());
    }
    displayColorPalette(colors);
}

function generateColorCode() {
    let code = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += code[Math.floor(Math.random() * 16)];
    }
    return color;
}

function displayColorPalette(colors) {
    const boxes = document.querySelectorAll(".color-box");
    boxes.forEach((box, idx) => {
        const colorDiv = box.querySelector(".color-div");
        const colorCode = box.querySelector(".color-code");
        colorDiv.style.backgroundColor = colors[idx];
        colorCode.textContent = colors[idx];
    });
}
