import AutoCompleteSearchView from "./autoCompleteSearchView.js";

export default class SearchView extends AutoCompleteSearchView {
  generateMovieItemMarkup(movie) {
    return `
			<img src="${movie.Poster}" alt="" />
			<h3>${movie.Title}</h3>
		`;
  }

  generateMovieSummaryMarkup(movieSummaryData) {
    return `
			<img src="" alt="">
			<p></p>
			<p></p>
			<p></p>
		`;
  }
}
