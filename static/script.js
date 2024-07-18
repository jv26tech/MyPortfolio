/* Trigger Nav Menu */

const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains('bi-list') ? 
    menuMobile.classList.replace('bi-list', 'bi-x') :
    menuMobile.classList.replace('bi-x', 'bi-list');
    body.classList.toggle('menu-nav-active');
})

const navItem = document.querySelectorAll('.nav-link');

navItem.forEach(item => {
    item.addEventListener('click', () => {
        navItem.forEach(item => {
            item.classList.remove('active');
        })
        menuMobile.classList.replace('bi-x', 'bi-list');
        item.classList.add('active');
        body.classList.toggle('menu-nav-active');
    })
})