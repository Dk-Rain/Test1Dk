// Get the toggle button and sidebar
const toggleBtn = document.getElementById("sidebarToggle");
const sidebar = document.getElementById("sidebar");

// Add click event to toggle the 'active' class
toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});