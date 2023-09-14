// JavaScript function to toggle the mobile menu
function toggleMenu() {
    var menu = document.querySelector('.nav ul');
    var icon = document.querySelector('.checkbtn i');
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        icon.classList.remove('active');
    } else {
        menu.classList.add('active');
        icon.classList.add('active');
    }
}
