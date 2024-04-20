import { getMoviesData } from "./services/apiMovies.js";
import AutoCompleteSearchView from "./views/autoCompleteSearchView.js";

// <!-- Application Specific Code -->

const config = {
  apiService: getMoviesData,

  onSelectedValue(movie) {
    return movie.imdbID;
  },

  onInputValue(movie) {
    return movie.Title;
  },

  renderDropDownContentMarkup(movieData) {
    return `
        <img src="${movieData.Poster}" alt="" />
        <p>${movieData.Title}</p>
      `;
  },

  async onSelection(movie) {
    const movieDetails = await getMoviesData({ imdbID: movie.imdbID });
    const markup = generateMovieDetailsMarkup(movieDetails);

    document
      .querySelector(".left-summary")
      .insertAdjacentHTML("beforeend", markup);
  },
};

const controlAutoCompleteSearchView = function () {
  // Left-Side Search Summary
  new AutoCompleteSearchView({
    ...config,
    rootElement: document.querySelector(".left-autocomplete"),
    async onSelection(movie) {
      const movieDetails = await getMoviesData({ imdbID: movie.imdbID });
      const markup = generateMovieDetailsMarkup(movieDetails);

      document
        .querySelector(".left-summary")
        .insertAdjacentHTML("beforeend", markup);
    },
  });

  // Right-Side Search Summary
  new AutoCompleteSearchView({
    ...config,
    rootElement: document.querySelector(".right-autocomplete"),
    async onSelection(movie) {
      const movieDetails = await getMoviesData({ imdbID: movie.imdbID });
      const markup = generateMovieDetailsMarkup(movieDetails);

      document
        .querySelector(".right-summary")
        .insertAdjacentHTML("beforeend", markup);
    },
  });
};

controlAutoCompleteSearchView();

function generateMovieDetailsMarkup(movieDetails) {
  return `
    <img src="${movieDetails.Poster}" alt="" />
    <p>${movieDetails.Title}</p>
    <p>${movieDetails.Plot}</p>
    <p>Imdb Rating: ${movieDetails.imdbRating}, Release Year: ${movieDetails.Year}</p>
    <p>Actors: ${movieDetails.Actors}, Director: ${movieDetails.Director}</p>
    <p>Awards: ${movieDetails.Awards}</p>
    <p>Income: ${movieDetails.BoxOffice}</p>
    <p>Votes: ${movieDetails.imdbVotes}</p>
  `;
}
