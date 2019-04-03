import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MoviePage from './pages/MoviePage';
import MovieList from './pages/MovieList';
import Navbar from './components/Navbar';
import "./App.css";

function Home() {
  return <h2>Movie Theatre</h2>;
}

class App extends React.Component
{
  render() {
    return <div>
      {nav}
      <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/movie/:searchType/:search" component={MovieList} />
              <Route path="/movie/:mid" component={MoviePage} />
              <Route component={Home} />
            </Switch>
      </Router>
    </div>;
  }
}

const nav = <Navbar />;

export default App;
export {
  nav
};
