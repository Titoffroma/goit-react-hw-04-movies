import { Component } from "react";
// import { CastItem } from "./CastItem";
import fetchMovies from "../../Utils/fetchMovies";

const myFetchMovie = new fetchMovies();

export default class Reviews extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    reviews: [],
  };

  options = {
    movie: this.props.match.params.movieId,
    type: "movie",
    extra: "/reviews",
  };

  componentDidMount() {
    myFetchMovie.fetchResult(this.options).then((result) => {
      result && this.setState({ reviews: result.results });
    });
  }

  render() {
    const { reviews } = this.state;
    return (
      <ul className="ImageGallery">
        {reviews.length ? (
          reviews.map((review) => (
            <li key={review.id}>
              <h4>Author: {review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <div>No reviews found</div>
        )}
      </ul>
    );
  }
}
