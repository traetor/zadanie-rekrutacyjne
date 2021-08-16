//Case studies card slider
import {tns} from "../../libs/tinySlider/tinySlider";

function gallerySlider() {
    //if(window.screen.width > 768) {
        tns({
            container: '.slider-gallery',
            items: 1,
            loop: false,
            slideBy: 'page',
            speed: 1000,
            autoplay: true,
            autoplayTimeout: 10000,
            autoplayButtonOutput: false,
            gutter: 13,
            // controls: false,
            navPosition: 'bottom',
            //controlsContainer: ".columns__gallery .slider-nav__content--gallery",
            swipeAngle: false,
            responsive: {
                1200: {
                    items: 2,
                }
            }
        });
    //}
    if(window.screen.width > 768) {
        if ($('.column__description').height() < 300) {
            let wrapper = $('.columns__gallery__wrapper');
            let height = $('.tns-nav').height();
            let navHeight = -height;
            navHeight -= 80;
            $('.column__text').css('bottom', `${navHeight}px`);
            $('.columns__gallery').html('');
            $('.column__text').html(wrapper);
        }
    }
}

export { gallerySlider };