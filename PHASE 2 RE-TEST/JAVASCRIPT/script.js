document.addEventListener("DOMContentLoaded", () => {
    // Handle page navigation
    const navLinks = document.querySelectorAll("nav .nav-link");
    const pages = document.querySelectorAll(".page");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = link.getAttribute("href").replace("#", "");

            // Hide all pages and show the target page
            pages.forEach(page => page.classList.remove("active"));
            document.getElementById(target).classList.add("active");

            // Update the active link style
            navLinks.forEach(link => link.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // Default to show the home page
    document.getElementById("home").classList.add("active");
});