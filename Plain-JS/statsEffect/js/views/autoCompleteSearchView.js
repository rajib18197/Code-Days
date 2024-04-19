import { getMoviesData } from "../services/apiMovies.js";
import { debounce } from "../utils/helpers.js";

export default class AutoCompleteSearchView {
  #root;

  constructor({ rootElement }) {
    this.#root = rootElement;
    const markup = this.#generateAutoCompleteMarkup();
    this.#root.insertAdjacentHTML("beforeend", markup);
  }

  addHandlerInputChange(handler) {
    const inputElement = this.#root.querySelector("#search");
    inputElement.addEventListner("input", debounce(getMoviesData));
  }

  #generateAutoCompleteMarkup() {
    return `
			<label for="search">Search Your Thing</label>
			<input type="text" id="search" />

			<div class="dropdown dropdown-hidden">
				<div class="dropdown__menu">
					<div class="dropdown__item">
						<img src="" alt="" />
						<h3></h3>
					</div>
				</div>
			</div>
		`;
  }
}
