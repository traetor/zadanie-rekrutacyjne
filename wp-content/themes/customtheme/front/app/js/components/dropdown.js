function dropdown(){
    let selected = $('.dropdown').find('.selected');
    let dropdown = $('.dropdown-list');
    let optionList = $('.dropdown-list').find('li');

    selected.on('click', (e) => {
        dropdown.removeClass('active');
        $(e.currentTarget).siblings('.dropdown-list').toggleClass('active');

        if($(e.currentTarget).siblings('.dropdown-list').hasClass('active')) {
            $(e.currentTarget).siblings('.dropdown-list').find('li').click(function() {

                if($(e.currentTarget).siblings('.dropdown-list').find('li').hasClass('active')) {
                    $(this).siblings().removeClass('active');
                } else {
                    $(this).addClass('active');
                }
                $(e.currentTarget).siblings('.dropdown-list').removeClass('active');
                $(e.currentTarget).children('span').html($(this).html());
            })
        }
    });

    $(document).on('click', (e) => {
        if (!$(e.target).closest(selected).length && !$(e.target).closest(dropdown).length) {
            dropdown.removeClass('active');
        }
    })
}

export { dropdown };