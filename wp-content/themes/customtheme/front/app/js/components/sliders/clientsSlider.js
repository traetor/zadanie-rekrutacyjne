//Clients card slider
import {tns} from "../../libs/tinySlider/tinySlider";

function clientsSlider() {
    tns({
        container: '.slider-clients',
        loop: true,
        items: 1,
        speed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayButtonOutput: false,
        //controls: false,
        navPosition: 'bottom',
        controlsContainer: ".card__content .slider-nav__content--clients",
    });
}

export { clientsSlider };