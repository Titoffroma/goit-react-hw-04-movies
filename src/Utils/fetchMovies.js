import { pushError, removeError } from "./pnotify";

// https://api.themoviedb.org/3/movie/550?api_key=e5d54dbf2f396b3152db969b26cf47ab

export default class FetchMovies {
  constructor() {
    this.APIURL = "https://api.themoviedb.org/3/";
    this.searchQuery = "";
    this.key = "e5d54dbf2f396b3152db969b26cf47ab";
    this.query = "";
    this.movie = "";
    this.page = 1;
    this.points = {
      trending: "trending/movie/week",
      search: "search/movie",
      movie: "movie/",
    };
    this.type = "";
    this.extra = "";
  }
  get searchURL() {
    return (
      this.APIURL +
      this.points[this.type] +
      this.movie +
      this.extra +
      "?api_key=" +
      this.key
    );
  }
  clearResult() {
    this.count = 1;
    removeError();
  }

  async fetchResult({ movie = "", query = "", type = "trending", extra = "" }) {
    this.query = query;
    this.type = type;
    this.movie = movie;
    this.extra = extra;
    let pageQuot = "";
    if (query.length) pageQuot = "&query=" + query;
    try {
      const response = await fetch(this.searchURL + pageQuot);
      const result = await response.json();
      if (response.ok) {
        return result;
      }
      return pushError(result.errors[0]);
    } catch (err) {
      pushError(err.message);
    }
  }
}
