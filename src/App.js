import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import MoviePage from './pages/MoviePage';
import MovieList from './pages/MovieList';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import "./App.css";

class App extends React.Component {
  render() {
    return <div>
      <Router>
          {nav}
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={LoginPage} />
              <Route path="/movie/:searchType/:search" component={MovieList} />
              <Route path="/movie/:mid" component={MoviePage} />
              <Route path="/loginpage" component={LoginPage}/>
              <Route component={Home} />
          </Switch>
      </Router>
    </div>;
  }
}

const nav = <Navbar />;
const api = "http://35.247.73.56:1337";

export default App;
export {
  nav,
  api
};
