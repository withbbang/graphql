import fetch from "node-fetch";

const API_URL = `https://yts-proxy.now.sh/list_movies.json`;

export const getMovies = async () => {
  const res = await fetch(API_URL);
  const json = await res.json();

  return json.data.movies;
};
