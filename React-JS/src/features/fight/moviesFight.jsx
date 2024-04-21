import { useState } from "react";
import { getMoviesData } from "../../../../Plain-JS/statsEffect/js/services/apiMovies";
import AutoComplete from "../../ui/AutoComplete";

const obj = {
  async onSearch(searchTerm) {
    return getMoviesData({ searchTerm });
  },
  onInputValue(movie) {
    return movie.Title;
  },
};

export default function MoviesFight() {
  const [leftMovieDetails, setLeftMovieDetails] = useState({});
  const [rightMovieDetails, setRightMovieDetails] = useState({});

  const config = [
    {
      ...obj,
      onSelection(movie) {
        leftHandleSelection(movie);
      },
    },

    {
      ...obj,
      onSelection(movie) {
        rightHandleSelection(movie);
      },
    },
  ];

  async function leftHandleSelection(movie) {
    const movieDetails = await getMoviesData({ imdbID: movie.imdbID });
    setLeftMovieDetails(movieDetails);
  }

  async function rightHandleSelection(movie) {
    const movieDetails = await getMoviesData({ imdbID: movie.imdbID });
    setRightMovieDetails(movieDetails);
  }

  return (
    <div>
      <header className="header"></header>
      <div className="columns">
        <div className="column">
          <div className={`left-autocomplete`}>
            <AutoComplete
              onSearch={config[0].onSearch}
              onSelection={config[0].onSelection}
              onInputValue={config[0].onInputValue}
            />
          </div>
          <div className={`left-summary`}>
            {Object.keys(leftMovieDetails).length > 0 && (
              <>
                <img src={`${leftMovieDetails.Poster}`} alt="movie" />
                <p>{leftMovieDetails.Title}</p>
                <p> {leftMovieDetails.Plot}</p>
                <p>
                  Imdb Rating: ${leftMovieDetails.imdbRating}, Release Year: $
                  {leftMovieDetails.Year}
                </p>
                <p>
                  Actors: ${leftMovieDetails.Actors}, Director: $
                  {leftMovieDetails.Director}
                </p>
                <p>Awards: ${leftMovieDetails.Awards}</p>
                <p>Income: ${leftMovieDetails.BoxOffice}</p>
                <p>Votes: ${leftMovieDetails.imdbVotes}</p>
              </>
            )}
          </div>
        </div>

        <div className="column">
          <div className={`right-autocomplete`}>
            <AutoComplete
              onSearch={config[1].onSearch}
              onSelection={config[1].onSelection}
              onInputValue={config[1].onInputValue}
            />
          </div>
          <div className={`right-summary`}>
            {Object.keys(rightMovieDetails).length > 0 && (
              <>
                <img src={`${rightMovieDetails.Poster}`} alt="movie" />
                <p>{rightMovieDetails.Title}</p>
                <p> {rightMovieDetails.Plot}</p>
                <p>
                  Imdb Rating: ${rightMovieDetails.imdbRating}, Release Year: $
                  {rightMovieDetails.Year}
                </p>
                <p>
                  Actors: ${rightMovieDetails.Actors}, Director: $
                  {rightMovieDetails.Director}
                </p>
                <p>Awards: ${rightMovieDetails.Awards}</p>
                <p>Income: ${rightMovieDetails.BoxOffice}</p>
                <p>Votes: ${rightMovieDetails.imdbVotes}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
