//Case studies card slider
import {tns} from "../../libs/tinySlider/tinySlider";

function caseStudiesSlider() {
    if(window.screen.width > 768) {
        tns({
            container: '.slider-case-studies',
            items: 2,
            loop: true,
            slideBy: 'page',
            speed: 1000,
            autoplay: true,
            autoplayTimeout: 10000,
            autoplayButtonOutput: false,
            // controls: false,
            navPosition: 'bottom',
            controlsContainer: ".card__content .slider-nav__content--case-studies",
            swipeAngle: false,
            responsive: {
                1200: {
                    items: 3,
                }
            }
        });
    }
}

export { caseStudiesSlider };