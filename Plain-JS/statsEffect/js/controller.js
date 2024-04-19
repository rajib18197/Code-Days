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

    setSelectedOptions(movie) {
      return { key: movie.imdbID, value: movie.Title };
    },

    inputValue(movie) {
      return movie.Title;
    },

    async onOptionSelection(id) {
      const movieSummaryData = await getMoviesData({ imdbId: id });
      const summaryMarkup = generateMovieSummaryMarkup(movieSummaryData);
      document
        .querySelector(".left-summary")
        .insertAdjacentHTML("beforeend", summaryMarkup);
    },
  });

  // 2nd
  new AutoCompleteSearchView({
    rootElement: rightautoCompleteRootElement,

    apiService: async (value) => await getMoviesData({ searchTerm: value }),

    renderOptionMarkup(movie) {
      return generateMovieItemMarkup(movie);
    },

    itemDatasetValue(movie) {
      return movie.imdbID;
    },

    setSelectedOptions(movie) {
      return { key: movie.imdbID, value: movie.Title };
    },

    async onOptionSelection(id) {
      const movieSummaryData = await getMoviesData({ imdbId: id });
      const summaryMarkup = generateMovieSummaryMarkup(movieSummaryData);
      document
        .querySelector(".right-summary")
        .insertAdjacentHTML("beforeend", summaryMarkup);
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
		<img src="${movieSummaryData.Poster}" alt="">
		<p>${movieSummaryData.Title}</p>
		<p>${movieSummaryData.Plot}</p>
		<p>Imdb Rating: ${movieSummaryData.imdbRating}, Release Year: ${movieSummaryData.Year}</p>
		<p>Actors: ${movieSummaryData.Actors}, Director: ${movieSummaryData.Director}</p>
		<p>Awards: ${movieSummaryData.Awards}</p>
		<p>Income: ${movieSummaryData.BoxOffice}</p>
		<p>Votes: ${movieSummaryData.imdbVotes}</p>
		`;
}

controlAutoComplete();
