import { useState } from "react";
import { getMoviesData } from "../../../../Plain-JS/statsEffect/js/services/apiMovies";
import AutoComplete from "../../ui/AutoComplete";

const obj = {
  onSearch(searchTerm) {
    getMoviesData({ searchTerm });
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
      id: 1,
      ...obj,
      type: "left",
      onSelection(movie) {
        leftHandleSelection(movie);
      },
    },

    {
      id: 2,
      ...obj,
      type: "right",
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
        {config.map((item, i) => (
          <div className="column" key={item.id}>
            <div className={`${item.type}-autocomplete`}>
              <AutoComplete
                onSearch={item.onSearch}
                onSelection={item.onSelection}
                onInputValue={item.onInputValue}
              />
            </div>
            <div className={`${item.type}-summary`}>
              {(Object.keys(`left-MovieDetails`).length > 0 ||
                Object.keys(`rightMovieDetails`).length > 0) && (
                <>
                  <img
                    src={`${
                      item.type === "left"
                        ? leftMovieDetails.Poster
                        : rightMovieDetails.Poster
                    }`}
                    alt="movie"
                  />
                  <p>
                    {item.type === "left"
                      ? leftMovieDetails.Title
                      : rightMovieDetails.Title}
                  </p>
                  <p>
                    {item.type === "left"
                      ? leftMovieDetails.Plot
                      : rightMovieDetails.Plot}
                  </p>
                  <p>
                    Imdb Rating:{" "}
                    {item.type === "left"
                      ? leftMovieDetails.imdbRating
                      : rightMovieDetails.imdbRating}
                    , Release Year:
                    {item.type === "left"
                      ? leftMovieDetails.Year
                      : rightMovieDetails.Year}
                  </p>
                  <p>
                    Actors:{" "}
                    {item.type === "left"
                      ? leftMovieDetails.Actors
                      : rightMovieDetails.Actors}
                    , Director:
                    {item.type === "left"
                      ? leftMovieDetails.Director
                      : rightMovieDetails.Director}
                  </p>
                  <p>
                    Awards:{" "}
                    {item.type === "left"
                      ? leftMovieDetails.Awards
                      : rightMovieDetails.Awards}
                  </p>
                  <p>
                    Income:{" "}
                    {item.type === "left"
                      ? leftMovieDetails.BoxOffice
                      : rightMovieDetails.BoxOffice}
                  </p>
                  <p>
                    Votes:{" "}
                    {item.type === "left"
                      ? leftMovieDetails.imdbVotes
                      : rightMovieDetails.imdbVotes}
                  </p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
