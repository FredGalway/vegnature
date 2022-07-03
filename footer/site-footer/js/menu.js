let sidenav = document.getElementById("mySidenav");
let bt_menu = document.getElementById("bt-menu");
bt_menu.onclick = mobile_menu;
// Avec l'activation du toggle, la condition ternaire renvoie le test boléen de la class active à True
function mobile_menu() {
    bt_menu.classList.toggle("active");
    bt_menu.classList.contains("active") ? openNav() : closeNav();
}

function openNav() {
    sidenav.classList.add("active");
    console.log('menu ouvert');
}

function closeNav() {
    sidenav.classList.remove("active");
    console.log('menu fermé');
}

function closeMenuFromItem() {
    sidenav.classList.remove("active");
    bt_menu.classList.toggle("active");
}