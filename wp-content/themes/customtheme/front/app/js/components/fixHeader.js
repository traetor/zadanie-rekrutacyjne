function fixHeader() {
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('is-active');
        } else {
            header.classList.remove('is-active');
        }
    });

    $('.resToggle').on('click', (e) => {
        e.preventDefault();
        $('.the-nav').toggleClass('is-active');
    });
}

export { fixHeader };