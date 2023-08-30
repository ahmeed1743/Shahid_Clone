let nav_bar = document.getElementById("nav");

window.addEventListener('scroll', () => {
    if (window.scrollY >= 600) {
        nav_bar.style.background = "linear-gradient(to right,#0c9,#181d25)";
        nav_bar.style.padding="20px 80px";
    } else {
        nav_bar.style.background = "transparent";
        nav_bar.style.padding="20px 40px";
    }
});


