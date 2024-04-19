const KEY = "cb3cde7d";
export const API_URL = `https://www.omdbapi.com/?apikey=${KEY}`;

export async function getMoviesData({ searchTerm, imdbId }) {
  let url = API_URL;

  if (searchTerm) url += `&s=${searchTerm}`;
  if (imdbId) url += `&i=${imdbId}`;

  const response = await fetch(url);
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

  return searchTerm ? data.Search : data;
}

// Poster, Title, Type, Year, imdbID
