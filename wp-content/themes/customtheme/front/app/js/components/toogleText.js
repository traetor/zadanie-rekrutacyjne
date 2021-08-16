function toggleText(){
    const btnToggle = document.querySelector('.btn-toggle');
    const infoContainer = document.querySelector('.form__info');
    btnToggle.addEventListener('click', (e) => {
        e.preventDefault();
        infoContainer.classList.add('show-more-text');
    });
}

export { toggleText };