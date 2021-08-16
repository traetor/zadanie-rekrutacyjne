//Banner slider
import {tns} from "../../libs/tinySlider/tinySlider";

function bannerSlider() {
    tns({
        container: '.banner__slider',
        loop: true,
        items: 1,
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