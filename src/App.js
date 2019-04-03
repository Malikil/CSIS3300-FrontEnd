import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import MoviePage from './pages/MoviePage';
import MovieList from './pages/MovieList';
import Navbar from './components/Navbar';
import "./App.css";

class App extends React.Component {
  render() {
    return <div>
      <Navbar />
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

export default App;
