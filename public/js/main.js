// window.addEventListener('scroll', () => {
//     const navbar = document.querySelector('.navbar-default');
//     navbar.classList.toggle('navbar-scroll', window.scrollY > 100);
// });

document.addEventListener('DOMContentLoaded', () => {
    const date = new Date();
    const footerYear = document.querySelector('.footer-year');
    footerYear.innerText = date.getFullYear();
});