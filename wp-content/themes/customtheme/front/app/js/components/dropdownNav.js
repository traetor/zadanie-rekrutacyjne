function dropdownNav(){

    const arrows = document.querySelectorAll('.nav-toggle span')
    arrows.forEach(arrow => {
        arrow.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const clickedArrow = e.target.closest('li');
            clickedArrow.classList.toggle('active');
        })
    })
}

export { dropdownNav };