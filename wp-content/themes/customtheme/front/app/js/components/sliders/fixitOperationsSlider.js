//Fixit operations card slider
import {tns} from "../../libs/tinySlider/tinySlider";

function fixitOperationsSlider() {
    if(window.screen.width > 768) {
        tns({
            container: '.slider-fixit-operations',
            items: 2,
            loop: true,
            slideBy: 'page',
            speed: 1000,
            autoplay: true,
            autoplayTimeout: 10000,
            autoplayButtonOutput: false,
            // controls: false,
            navPosition: 'bottom',
            controlsContainer: ".card__content .slider-nav__content--fixit-operations-center",
            swipeAngle: false,
            responsive: {
                1200: {
                    items: 3,
                }
            }
        });
    }
}

export { fixitOperationsSlider };