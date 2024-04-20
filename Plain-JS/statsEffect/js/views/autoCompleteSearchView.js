import { debounce } from "../utils/helpers.js";

export default class AutoCompleteSearchView {
  #data;

  constructor({ rootElement, apiService }) {
    this.#data = {
      rootElement,
      apiService,
    };

    const markup = this.#generateInitialMarkup();
    this.#clear();
    this.#data.rootElement.insertAdjacentHTML("beforeend", markup);
    this.#addHandlerInputChange();
  }

  #clear() {
    this.#data.rootElement.innerHTML = "";
  }

  async #onInputChange(e) {
    const data = await this.#data.apiService({ searchTerm: e.target.value });
    this.#generateDropdownItemMarkup(data);
  }

  #addHandlerInputChange() {
    this.#data.rootElement.addEventListener(
      "input",
      debounce(this.#onInputChange.bind(this), 1000)
    );
  }

  #generateDropdownItemMarkup(data) {
    return `${data.map(
      (item) => `
      <div class="dropdown__item">
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
      <div class="dropdown">
        <div class="dropdown__menu">
          
        </div>
      </div>
    `;
  }
}
