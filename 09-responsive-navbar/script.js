const sidebar = document.querySelector(".side-bar");
const menuBtn = document.querySelector(".menu-btn");
const overlay = document.querySelector(".overlay");

function openSidebar() {
    sidebar.classList.add("active");
    overlay.classList.add("active");
    menuBtn.textContent = "Close";
}

function closeSidebar() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    menuBtn.textContent = "Open";
}

menuBtn.addEventListener("click", () => {
    if (sidebar.classList.contains("active")) {
        closeSidebar();
    } else {
        openSidebar();
    }
});

overlay.addEventListener("click", closeSidebar);
