import './helpers/polyfill';
import { sierotki } from './helpers/sierotki';
// Sliders
import { bannerSlider } from "./components/sliders/bannerSlider";
import { newsSlider } from "./components/sliders/newsSlider";
import { clientsSlider } from "./components/sliders/clientsSlider";
import { fixitOperationsSlider } from "./components/sliders/fixitOperationsSlider";
import { caseStudiesSlider } from "./components/sliders/caseStudiesSlider";
import { productsSlider } from "./components/sliders/productsSlider";
import { historySlider } from "./components/sliders/historySlider";
import { gallerySlider } from "./components/sliders/gallerySlider";
import { aboutSlider } from "./components/sliders/aboutSlider";
// Fixed header
import { fixHeader } from "./components/fixHeader";
// Validate forms
import { validateForm } from "./components/validation/validateForms";
// Dropdown nav
import { dropdownNav } from "./components/dropdownNav";
// Toggle text
import { toggleText } from "./components/toogleText";
// dropdown
import { dropdown } from "./components/dropdown";
// Change gallery
import { changeGallery } from "./components/changeGallery";

const App = (() => {

  return {
    sierotki: () => {
      sierotki();
    },
    bannerSlider: () => {
      bannerSlider();
    },
    fixHeader: () => {
      fixHeader();
    },
    validateForm: () => {
      validateForm();
    },
    dropdownNav: () => {
      dropdownNav();
    },
    toggleText: () => {
      toggleText();
    },
    dropdown: () => {
      dropdown();
    },
    filter: () => {
      filter();
    },
    changeGallery: () => {
      changeGallery();
    }
  };

})();

// Banner slider
if(document.querySelector('.banner__slider')) {
 App.bannerSlider();
}
// Fixed header
//App.fixHeader();
// Dropdown nav
if(document.querySelector('.nav-dropdown')) {
  App.dropdownNav();
}
// Sierotki
App.sierotki();
// Toggle text
if(document.querySelector('.btn-toggle')) {
  App.toggleText();
}
if(document.querySelector('.dropdown')) {
  App.dropdown();
}

