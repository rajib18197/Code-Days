import AutoCompleteSearchView from "./views/autoCompleteSearchView.js";

const leftautoCompleteRootElement =
  document.querySelector(".left-autocomplete");

const controlAutoComplete = function () {
  new AutoCompleteSearchView({
    rootElement: leftautoCompleteRootElement,
  });
};
