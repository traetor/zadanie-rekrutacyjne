//News slider
import {tns} from "../../libs/tinySlider/tinySlider";

function newsSlider() {
    tns({
        container: '.news__slider__wrapper',
        loop: true,
        items: 1,
        gutter: 20,
        speed: 1000,
        nav: true,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayButtonOutput: false,
        controlsContainer: ".slider-nav__content--news",
        responsive: {
            768: {
                nav: false,
            }
        }
    });
}

export { newsSlider };