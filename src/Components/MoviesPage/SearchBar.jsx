import PropTypes from 'prop-types';
import StyledSearchBar from './SearchBarStyled';

const SearchBar = ({ onSubmit }) => {
  return (
    <StyledSearchBar onSubmit={onSubmit}>
      <input
        name="search"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <button type="submit">Search</button>
    </StyledSearchBar>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { SearchBar };
