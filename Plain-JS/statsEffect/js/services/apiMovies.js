const KEY = "cb3cde7d";
export const API_URL = `https://www.omdbapi.com/?apikey=${KEY}`;

export async function getMoviesData({ searchTerm, imdbID }) {
  let url = API_URL;

  if (searchTerm) url += `&s=${searchTerm}`;
  if (imdbID) url += `&i=${imdbID}`;

  const response = await fetch(url);

  if (!response.ok) {
    console.log("Error");
    throw new Error("Could Not load your Data!!! Please try again.");
  }

  const data = await response.json();

  if (response.Error) {
    return [];
  }

  console.log(data);

  return searchTerm ? data.Search : data;
}

// Poster, Title, Type, Year, imdbID
