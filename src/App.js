import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MoviePage from './pages/MoviePage';
import "./App.css";

function Home() {
  return <h2>Movie Theatre</h2>;
}

function MovieSearch({ match }) {
  if (isNaN(match.params.search))
    return <h2>NaN: {match.params.search}</h2>
  else
    return <MoviePage id={match.params.search} />;
}

class App extends React.Component {
  render() {
    return (
      <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/movies/:search" component={MovieSearch} />
            </Switch>
      </Router>
    );
  }
}

export default App;
