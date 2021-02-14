import { Component } from 'react';
import { SearchBar } from './SearchBar';
import fetchMovies from '../../Utils/fetchMovies';
import { MoviesList } from './MoviesList';

const myFetchMovie = new fetchMovies();

export default class MoviesPage extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    movies: null,
  };

  handleSearch = e => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    if (!query.length) return;
    const options = {
      type: 'search',
      query: e.target.elements.search.value,
    };
    this.fetchSearch(options);
    const { location, history } = this.props;
    history.push(
      location.pathname + '?query=' + e.target.elements.search.value,
    );
  };

  fetchSearch(options) {
    myFetchMovie.fetchResult(options).then(response => {
      if (response) {
        this.setState({ movies: response.results });
      }
    });
  }

  componentDidMount() {
    const { location } = this.props;
    if (location.search) {
      const options = {
        type: 'search',
        query: location.search.split('=').reverse()[0],
      };
      this.fetchSearch(options);
    }
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleSearch} />
        <MoviesList movies={movies} />
      </>
    );
  }
}
