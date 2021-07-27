import './App.css';
import { Route, Switch } from "react-router-dom";
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';


const App = () => (
  <>

    {/* <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route path={routes.movies} component={MoviesPage} /> */}
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/movies" component={MoviesPage} />
      <Route path="/moviesDetails" component={MovieDetailsPage} />
    </Switch>
  </>
);

export default App;
