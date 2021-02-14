import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Header } from "../Header";

const HomePage = lazy(() => import("../HomePage"));
const MoviesPage = lazy(() => import("../MoviesPage"));
const MovieDetailsPage = lazy(() => import("../MovieDetailsPage"));
const Cast = lazy(() => import("../Cast"));
const Reviews = lazy(() => import("../Reviews"));

const AsyncHomePage = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <HomePage {...props} />
  </Suspense>
);

const AsyncMoviesPage = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <MoviesPage {...props} />
  </Suspense>
);

const AsyncMovieDetailsPage = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <MovieDetailsPage {...props} />
  </Suspense>
);

const AsyncCast = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Cast {...props} />
  </Suspense>
);

const AsyncReviews = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Reviews {...props} />
  </Suspense>
);

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={AsyncHomePage} />
        <Route exact path="/movies" component={AsyncMoviesPage} />
        <Route path="/movies/:movieId" component={AsyncMovieDetailsPage} />
        <Redirect to="/" />
      </Switch>
      <Route path="/movies/:movieId/cast" component={AsyncCast} />
      <Route path="/movies/:movieId/reviews" component={AsyncReviews} />
    </>
  );
}

export default App;
