import { useState } from "react";
import { getMoviesData } from "../../../../Plain-JS/statsEffect/js/services/apiMovies";
import AutoComplete from "../../ui/AutoComplete";

export default function MoviesFight() {
  const [movieDetails, setMovieDetails] = useState({});

  async function handleSelection(movie) {
    const movieDetails = await getMoviesData({ imdbID: movie.imdbID });
    setMovieDetails(movieDetails);
  }

  return (
    <div>
      <header className="header"></header>
      <div className="columns">
        <div className="column">
          <div className="left-autocomplete">
            <AutoComplete
              onSearch={(searchTerm) => getMoviesData({ searchTerm })}
              onSelection={handleSelection}
              onInputValue={(movie) => movie.Title}
            />
          </div>
          <div className="left-summary">
            {Object.keys(movieDetails).length > 0 && (
              <>
                <img src={`${movieDetails.Poster}`} alt="movie" />
                <p>{movieDetails.Title}</p>
                <p>{movieDetails.Plot}</p>
                <p>
                  Imdb Rating: {movieDetails.imdbRating}, Release Year:
                  {movieDetails.Year}
                </p>
                <p>
                  Actors: {movieDetails.Actors}, Director:
                  {movieDetails.Director}
                </p>
                <p>Awards: {movieDetails.Awards}</p>
                <p>Income: {movieDetails.BoxOffice}</p>
                <p>Votes: {movieDetails.imdbVotes}</p>
              </>
            )}
          </div>
        </div>

        <div className="column">
          <div className="right-autocomplete"></div>
          <div className="right-summary"></div>
        </div>
      </div>
    </div>
  );
}
