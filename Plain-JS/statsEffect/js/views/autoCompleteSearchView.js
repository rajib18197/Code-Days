import { debounce } from "../utils/helpers.js";

export default class AutoCompleteSearchView {
  data;

  constructor({
    rootElement,
    apiService,
    renderOptionMarkup,
    itemDatasetValue,
    inputValue,
    setSelectedOptions,
    onOptionSelection,
  }) {
    this.data = {
      rootElement,
      apiService,
      renderOptionMarkup,
      itemDatasetValue,
      inputValue,
      setSelectedOptions,
      onOptionSelection,
    };

    const markup = this.#generateAutoCompleteMarkup();
    this.data.rootElement.insertAdjacentHTML("beforeend", markup);

    this.addHandlerInputChange();
    this.closeDropdownOutside();
  }

  showDropdown() {
    this.data.rootElement
      .querySelector(".dropdown")
      .classList.remove("dropdown__hidden");
  }

  closeDropdown() {
    this.data.rootElement
      .querySelector(".dropdown")
      .classList.add("dropdown__hidden");
  }

  closeDropdownOutside() {
    document.addEventListener("click", (e) => {
      console.log(e.target);
      console.log(this.data.rootElement);
      console.log(e.target.contains(this.data.rootElement));
      if (!e.target.contains(this.data.rootElement)) {
        this.closeDropdown();
      }
    });
  }

  async #handleInputChange(e) {
    const data = await this.data.apiService(e.target.value);
    this.showDropdown();
    const selectedOptions = {};

    const optionMarkup = data
      .map((item) => {
        const optionObj = this.data.setSelectedOptions(item);
        selectedOptions[optionObj.key] = optionObj.value;

        const value = this.data.itemDatasetValue(item);
        const optionMarkup = this.data.renderOptionMarkup(item);
        const markup = `
      	<div class='dropdown__item' data-value="${value}">${optionMarkup}</div>
			`;
        return markup;
      })
      .join("");

    this.data.rootElement
      .querySelector(".dropdown__menu")
      .insertAdjacentHTML("beforeend", optionMarkup);

    this.data.rootElement.addEventListener("click", (e) => {
      if (e.target.closest(".dropdown__item")) {
        this.closeDropdown();
        const selectedValue = e.target.closest(".dropdown__item").dataset.value;

        this.data.rootElement.querySelector("#search").value =
          selectedOptions[selectedValue];

        this.data.onOptionSelection(selectedValue);
      }
    });
  }

  addHandlerInputChange() {
    const inputElement = this.data.rootElement.querySelector("#search");
    inputElement.addEventListener(
      "input",
      debounce(this.#handleInputChange.bind(this), 1000)
    );
  }

  #generateAutoCompleteMarkup() {
    return `
			<label for="search">Search Your Thing</label>
			<input type="text" id="search" />

			<div class="dropdown dropdown__hidden">
				<div class="dropdown__menu">
					
				</div>
			</div>
		`;
  }
}
