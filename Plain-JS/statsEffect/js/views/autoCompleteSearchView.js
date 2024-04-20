import { debounce } from "../utils/helpers.js";

export default class AutoCompleteSearchView {
  #data;

  constructor({
    rootElement,
    apiService,
    onInputValue,
    onSelectedValue,
    renderDropDownContentMarkup,
    onSelection,
  }) {
    this.#data = {
      rootElement,
      apiService,
      onSelectedValue,
      onInputValue,
      renderDropDownContentMarkup,
      onSelection,
    };

    const markup = this.#generateInitialMarkup();
    this.#clear();
    this.#data.rootElement.insertAdjacentHTML("beforeend", markup);
    this.#addHandlerInputChange();
    this.#addHandlerClickOutside();
  }

  #openDropdown() {
    this.#data.rootElement
      .querySelector(".dropdown")
      .classList.remove("dropdown__hidden");
  }

  #addHandlerClickOutside() {
    document.addEventListener("click", (e) => {
      if (!this.#data.rootElement.contains(e.target)) this.#closeDropdown();
    });
  }

  #closeDropdown() {
    this.#data.rootElement
      .querySelector(".dropdown")
      .classList.add("dropdown__hidden");
  }

  #clear() {
    this.#data.rootElement.innerHTML = "";
  }

  async #handleInputChange(e) {
    this.#data.apiData = await this.#data.apiService({
      searchTerm: e.target.value,
    });

    this.#openDropdown();
    const markup = this.#generateDropdownItemMarkup();
    this.#data.rootElement
      .querySelector(".dropdown__menu")
      .insertAdjacentHTML("beforeend", markup);
    this.#addHandlerItemSelection();
  }

  #handleItemSelection(e) {
    if (e.target.closest(".dropdown__item")) {
      const selectedItem = e.target.closest(".dropdown__item").dataset.value;

      const item = this.#data.apiData.find(
        (el) => this.#data.onSelectedValue(el) === selectedItem
      );

      this.#data.rootElement.querySelector("#search").value =
        this.#data.onInputValue(item);

      this.#closeDropdown();

      this.#data.onSelection(item);
    }
  }

  #addHandlerItemSelection() {
    this.#data.rootElement.addEventListener(
      "click",
      this.#handleItemSelection.bind(this)
    );
  }

  #addHandlerInputChange() {
    this.#data.rootElement.addEventListener(
      "input",
      debounce(this.#handleInputChange.bind(this), 1000)
    );
  }

  #generateDropdownItemMarkup() {
    return `${this.#data.apiData.map(
      (item) => `
      <div class="dropdown__item" data-value="${this.#data.onSelectedValue(
        item
      )}">
        ${this.#data.renderDropDownContentMarkup(item)}
      </div>
    `
    )}
    `;
  }

  #generateInitialMarkup() {
    return `
      <label for="search">Search Your Thing...</label>
      <input type="text" id="search" />
      <div class="dropdown dropdown__hidden">
        <div class="dropdown__menu"></div>
      </div>
    `;
  }
}
