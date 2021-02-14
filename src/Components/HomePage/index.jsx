import { Component } from "react";
import fetchMovies from "../../Utils/fetchMovies";
import { MoviesList } from "../MoviesPage/MoviesList";

const myFetchMovie = new fetchMovies();

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    movies: [],
  };

  componentDidMount() {
    myFetchMovie.fetchResult({}).then((response) => {
      if (response) {
        this.setState({ movies: response.results });
      }
    });
  }

  render() {
    const { movies } = this.state;
    return <MoviesList movies={movies} />;
  }
}
