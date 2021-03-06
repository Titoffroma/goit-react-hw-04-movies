import { Link } from 'react-router-dom';
import { Component } from 'react';
import fetchMovies from '../../Utils/fetchMovies';
import StyledMovieDetails from './MoviesDetailsStyled';
import StyledDetailsLinks from './DetailsLinksStyled';

const myFetchMovie = new fetchMovies();

export default class MovieDetailsPage extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    movie: null,
  };

  options = {
    movie: this.props.match.params.movieId,
    type: 'movie',
  };

  componentDidMount() {
    myFetchMovie.fetchResult(this.options).then(result => {
      result && this.setState({ movie: result });
    });
  }

  render() {
    if (this.state.movie) {
      const {
        poster_path: img,
        original_title: name,
        vote_average,
        overview,
        genres,
        release_date,
      } = this.state.movie;

      const path = 'https://www.themoviedb.org/t/p/';
      const thmb = 'w300_and_h450_bestv2';
      const lrg = 'w600_and_h900_bestv2';
      const alt =
        'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg';
      const year = release_date.slice(0, 4);

      return (
        <>
          <StyledMovieDetails>
            <img
              src={img ? path + thmb + img : alt}
              alt={name}
              srcSet={
                img ? `${path + thmb + img} 1x, ${path + lrg + img} 2x` : alt
              }
            />
            <div className="MovieDetails">
              <h1>{`${name} (${year})`}</h1>
              <p>{`User Score: ${vote_average * 10}%`}</p>
              <h2>Overview</h2>
              <p>{overview}</p>
              <h3>Genres</h3>
              <ul className="GenreList">
                {genres.length
                  ? genres.map(genre => (
                      <li className="GenreItem" key={genre.id}>
                        {genre.name}
                      </li>
                    ))
                  : null}
              </ul>
            </div>
          </StyledMovieDetails>
          <StyledDetailsLinks>
            <h3>Additional information:</h3>
            <ul>
              <li>
                <Link
                  to={`/movies/${this.options.movie}/cast`}
                  className="Link"
                >
                  Cast
                </Link>
              </li>
              <li>
                <Link
                  to={`/movies/${this.options.movie}/reviews`}
                  className="Link"
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </StyledDetailsLinks>
        </>
      );
    } else return <div>Something went wrong</div>;
  }
}
