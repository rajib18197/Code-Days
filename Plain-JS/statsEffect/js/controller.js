import { getMoviesData } from "./services/apiMovies.js";
import AutoCompleteSearchView from "./views/autoCompleteSearchView.js";

// <!-- Application Specific Code -->

const controlAutoCompleteSearchView = function () {
  new AutoCompleteSearchView({
    rootElement: document.querySelector(".left-autocomplete"),
    apiService: getMoviesData,
    setSelectedValue(movie) {
      return movie.imdbID;
    },
    renderDropDownContentMarkup(movieData) {
      return `
        <img src="${movieData.Poster}" alt="" />
        <p>${movieData.Title}</p>
      `;
    },
  });
};

controlAutoCompleteSearchView();
