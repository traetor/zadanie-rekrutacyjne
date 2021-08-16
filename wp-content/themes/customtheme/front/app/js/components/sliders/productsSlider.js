//Products card slider
import {tns} from "../../libs/tinySlider/tinySlider";

function productsSlider() {
    if(window.screen.width > 768) {
        tns({
            container: '.slider-products',
            items: 2,
            loop: true,
            slideBy: 'page',
            speed: 1000,
            autoplay: true,
            autoplayTimeout: 10000,
            autoplayButtonOutput: false,
            // controls: false,
            navPosition: 'bottom',
            controlsContainer: ".card__content .slider-nav__content--card-products",
            swipeAngle: false,
            responsive: {
                1200: {
                    items: 3,
                }
            }
        });
    }
}

export { productsSlider };