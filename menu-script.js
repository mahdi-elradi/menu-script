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

    // Définition des sous-catégories avec leurs liens
    let subCategories = {
        "poubelles": [
            { name: "Poubelle de cuisine", link: "/categorie/poubelle-cuisine" },
            { name: "Poubelle extérieure", link: "/categorie/poubelle-exterieure" }
        ],
        "boites": [
            { name: "Boîte en plastique", link: "/categorie/boite-plastique" },
            { name: "Boîte en métal", link: "/categorie/boite-metal" }
        ],
        "cuisine": [
            { name: "Éviers et robinets", link: "/categorie/eviers-robinets" },
            { name: "Rangement cuisine", link: "/categorie/rangement-cuisine" }
        ],
        "salle": [
            { name: "Bac à linge", link: "/categorie/bac-linge" },
            { name: "Accessoires de bain", link: "/categorie/accessoires-bain" }
        ],
        "tables": [
            { name: "Tables de salle à manger", link: "/categorie/tables-salle-manger" },
            { name: "Tables pliantes", link: "/categorie/tables-pliantes" }
        ],
        "salon": [
            { name: "Canapés", link: "/categorie/canapes" },
            { name: "Fauteuils", link: "/categorie/fauteuils" }
        ],
        "outillage": [
            { name: "Perceuses", link: "/categorie/perceuses" },
            { name: "Scies électriques", link: "/categorie/scies-electriques" }
        ],
        "caisse": [
            { name: "Caisses empilables", link: "/categorie/caisses-empilables" },
            { name: "Caisses pliantes", link: "/categorie/caisses-pliantes" }
        ]
    };

    // Récupérer les sous-catégories de la catégorie cliquée
    let items = subCategories[category] || [];

    // Générer la liste HTML des sous-catégories avec des liens
    subMenu.innerHTML = items.map(item => `<li><a href="${item.link}">${item.name}</a></li>`).join('');
}

    function resetMenu() {
        mainMenu.style.display = "block";
        subMenu.style.display = "none";
        backButton.style.display = "none";
    }
});
