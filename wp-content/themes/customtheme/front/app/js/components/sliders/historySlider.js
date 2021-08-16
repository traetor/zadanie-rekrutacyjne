//History slider
import {tns} from "../../libs/tinySlider/tinySlider";

function historySlider() {
    tns({
        container: '.company-history__slider__wrapper',
        loop: true,
        items: 1,
        gutter: 20,
        speed: 1000,
        nav: false,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayButtonOutput: false,
        controlsContainer: ".slider-nav__content--company-history",
    });

    tns({
        container: '.company-history__slider__wrapper-mobile',
        loop: true,
        items: 1,
        gutter: 20,
        speed: 1000,
        nav: true,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayButtonOutput: false,
        controlsContainer: ".slider-nav__content--company-history",
    });
}

export { historySlider };