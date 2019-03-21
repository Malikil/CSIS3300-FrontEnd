import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MoviePage from './pages/MoviePage';
import "./App.css";

function Home() {
  return <h2>Movie Theatre</h2>;
}

function MovieSearch({ location }) {
  if (location.pathname.includes("genre"))
    return <h2>looking for genre</h2>;
  else
    return <h2>looking for rating</h2>;
}

class App extends React.Component {
  render() {
    return (
      <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/movie/genre/:search" component={MovieSearch} />
              <Route path="/movie/rating/:search" component={MovieSearch} />
              <Route path="/movie/:mid" component={MoviePage} />
              <Route component={Home} />
            </Switch>
      </Router>
    );
  }
}

export default App;
