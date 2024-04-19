import { getMoviesData } from "./services/apiMovies.js";
import AutoCompleteSearchView from "./views/autoCompleteSearchView.js";

const leftautoCompleteRootElement =
  document.querySelector(".left-autocomplete");

const rightautoCompleteRootElement = document.querySelector(
  ".right-autocomplete"
);

const controlAutoComplete = function () {
  new AutoCompleteSearchView({
    rootElement: leftautoCompleteRootElement,

    apiService: async (value) => await getMoviesData({ searchTerm: value }),

    renderOptionMarkup(movie) {
      return generateMovieItemMarkup(movie);
    },

    itemDatasetValue(movie) {
      return movie.imdbID;
    },

    inputValue(movie) {
      return movie.Title;
    },

    async onOptionSelection(id) {
      const movieSummaryData = await getMoviesData({ imdbId: id });
      const summaryMarkup = generateMovieSummaryMarkup(movieSummaryData);
      document
        .querySelector(".left-summary")
        .insertAdjacentHTML("beforend", summaryMarkup);
    },
  });

  new AutoCompleteSearchView({
    rootElement: rightautoCompleteRootElement,

    apiService: async (value) => await getMoviesData({ searchTerm: value }),

    renderOptionMarkup(movie) {
      return generateMovieItemMarkup(movie);
    },

    itemDatasetValue(movie) {
      return movie.imdbID;
    },

    inputValue(movie) {
      return movie.Title;
    },

    async onOptionSelection(id) {
      const movieSummaryData = await getMoviesData({ imdbId: id });
      const summaryMarkup = generateMovieSummaryMarkup(movieSummaryData);
      document
        .querySelector(".left-summary")
        .insertAdjacentHTML("beforend", summaryMarkup);
    },
  });
};

function generateMovieItemMarkup(movie) {
  return `
		<img src="${movie.Poster}" alt="" />
		<h3>${movie.Title}</h3>
	`;
}

function generateMovieSummaryMarkup(movieSummaryData) {
  return `
		<img src="" alt="">
		<p></p>
		<p></p>
		<p></p>
		`;
}

controlAutoComplete();
