import './helpers/polyfill';
import { sierotki } from './helpers/sierotki';
// Sliders
import { bannerSlider } from "./components/sliders/bannerSlider";
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
console.log(document.querySelector('.opinions__slider'))
if(document.querySelector('.opinions__slider')) {
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

