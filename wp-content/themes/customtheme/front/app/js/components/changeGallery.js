function changeGallery(){
    let changeGallery = $('.changeGallery');
    let content = $('.gallery__content');

    changeGallery.on('click', (e) => {
        e.preventDefault();
        content.html('');
        initLoader(content);

        let url = $(e.currentTarget).attr('href');

        getApartmentPosts(url, content);
    })

    /**
     * Ajax get posts
     */
    function getApartmentPosts(url, element) {
        $.ajax({
            method: 'GET',
            url,

            success: function(data){
                element.append(data)
                removeLoader(element);

                $('#aniimated-thumbnials').lightGallery({
                    thumbnail:true
                });
            },
            error: function(data){
                removeLoader(element);
            }
        })
    }

    function initLoader(container){
        let animateContainer = $('.load-container').clone().removeClass('d-none');
        container.append(animateContainer);
    }

    function removeLoader(container) {
        container.find('.load-container').remove();
    }
}

export { changeGallery };