const btnMenu = document.querySelector('.btn-menu');
const nav = document.querySelector('.nav');
const menuLinks = document.querySelectorAll('.menu a');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();

    nav.classList.toggle('active');
    btnMenu.classList.toggle('active');

    const isActive = nav.classList.contains('active');
    btnMenu.setAttribute('aria-expanded', isActive);
    btnMenu.setAttribute('aria-label', isActive ? 'Fechar Menu' : 'Abrir Menu');
}

btnMenu.addEventListener('click', toggleMenu);
btnMenu.addEventListener('touchstart', toggleMenu);

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        btnMenu.classList.remove('active');
        btnMenu.setAttribute('aria-expanded', false);
        btnMenu.setAttribute('aria-label', 'Abrir Menu');
    });
});