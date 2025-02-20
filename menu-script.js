document.addEventListener("DOMContentLoaded", function() {
    console.log("✅ Script chargé depuis GitHub Pages !");
});

document.addEventListener("DOMContentLoaded", function() {
    console.log("✅ Menu script chargé !");

    const openMenu = document.getElementById("open-menu");
    const closeMenu = document.getElementById("close-menu");
    const menuOverlay = document.getElementById("menu-overlay");
    const mainMenu = document.getElementById("main-menu");
    const subMenu = document.getElementById("submenu");
    const backButton = document.getElementById("back-button");

    // Ouvrir le menu
    openMenu.addEventListener("click", function() {
        menuOverlay.style.display = "flex";
    });

    // Fermer le menu
    closeMenu.addEventListener("click", function() {
        menuOverlay.style.display = "none";
        resetMenu();
    });

    // Gérer les sous-menus
    document.querySelectorAll("#main-menu li").forEach(item => {
        item.addEventListener("click", function() {
            let category = this.getAttribute("data-target");
            showSubMenu(category);
        });
    });

    // Retour aux catégories principales
    backButton.addEventListener("click", function() {
        resetMenu();
    });

    function showSubMenu(category) {
        mainMenu.style.display = "none";
        subMenu.style.display = "block";
        backButton.style.display = "block";
        subMenu.innerHTML = `<li>${category} - Option 1</li><li>${category} - Option 2</li>`;
    }

    function resetMenu() {
        mainMenu.style.display = "block";
        subMenu.style.display = "none";
        backButton.style.display = "none";
    }
});
