// Mobile Navbar Script
let openBtn = document.querySelector('.open-btn');
let closeBtn = document.querySelector('.close-btn');

let navBar = document.querySelector('.mobile-nav-list');
function toggle() {
    closeBtn.classList.toggle('display-none');
    openBtn.classList.toggle('display-none');
    navBar.classList.toggle('display-none');
}