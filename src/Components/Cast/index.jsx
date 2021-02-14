// import PropTypes from "prop-types";
import { Component } from 'react';
import { CastItem } from './CastItem';
import fetchMovies from '../../Utils/fetchMovies';
import StyledCastList from './CastListStyled';

const myFetchMovie = new fetchMovies();

export default class Cast extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    cast: [],
  };

  options = {
    movie: this.props.match.params.movieId,
    type: 'movie',
    extra: '/credits',
  };

  componentDidMount() {
    myFetchMovie.fetchResult(this.options).then(result => {
      result && this.setState({ cast: result.cast });
    });
  }

  render() {
    const { cast } = this.state;
    return (
      <StyledCastList>
        {cast &&
          cast.map(actor => (
            <CastItem
              key={actor.id}
              img={actor.profile_path || null}
              name={actor.name}
              role={actor.character}
            />
          ))}
      </StyledCastList>
    );
  }
}
