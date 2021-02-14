import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StyledMoviesList from './MoviesListStyled';

const MoviesList = ({ movies }) => {
  return (
    <StyledMoviesList>
      {movies ? (
        movies.length ? (
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} className="Link">
                {movie.original_title}
              </Link>
            </li>
          ))
        ) : (
          <li>No matches found.Try new search.</li>
        )
      ) : null}
    </StyledMoviesList>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
};

export { MoviesList };
