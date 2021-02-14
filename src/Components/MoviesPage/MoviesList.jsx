import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import StyledMoviesList from "./MoviesListStyled";

const MoviesList = ({ movies }) => {
  return (
    <StyledMoviesList>
      {movies.length ? (
        movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} className="Link">
              {movie.original_title}
            </Link>
          </li>
        ))
      ) : (
        <li>No mathes.Try new search.</li>
      )}
    </StyledMoviesList>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export { MoviesList };
