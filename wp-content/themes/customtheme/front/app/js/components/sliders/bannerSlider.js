//Banner slider
import {tns} from "../../libs/tinySlider/tinySlider";

function bannerSlider() {
    tns({
        container: '.opinions__slider',
        loop: true,
        items: 2,
        nav: true,
        speed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayButtonOutput: false,
        controlsContainer: ".slider-nav__content--banner",
        navPosition: 'bottom',
    });
}

export { bannerSlider };