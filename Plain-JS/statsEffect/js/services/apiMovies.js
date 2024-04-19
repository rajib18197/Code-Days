const KEY = "cb3cde7d";
export const API_URL = `https://www.omdbapi.com/?apikey=${KEY}`;

export async function getMoviesData(searchTerm) {
  const response = await fetch(`${API_URL}&s=${searchTerm}`);
  console.log(response);

  if (!response.ok) {
    console.log("Error");
    throw new Error("Could Not load your Data!!! Please try again.");
  }

  const data = await response.json();

  if (response.Error) {
    return [];
  }

  console.log(data);

  return data.Results;
}

// Poster
// :
// "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
// Title
// :
// "The Avengers"
// Type
// :
// "movie"
// Year
// :
// "2012"
// imdbID
// :
// "tt0848228"
