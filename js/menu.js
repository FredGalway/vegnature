let sidenav = document.getElementById("mySidenav");
let bt_menu = document.getElementById("bt-menu");
bt_menu.onclick = mobile_menu;

function mobile_menu() {
    bt_menu.classList.toggle("active");
    bt_menu.classList.contains("active") ? openNav() : closeNav();
}
/* Set the width of the side navigation to 250px */
function openNav() {
    sidenav.classList.add("active");
    console.log('menu ouvert');
}
/* Set the width of the side navigation to 0 */
function closeNav() {
    sidenav.classList.remove("active");
    console.log('menu fermé');
}