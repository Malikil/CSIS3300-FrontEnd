import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MoviePage from './pages/MoviePage';
import MovieList from './pages/MovieList';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import "./App.css";

function Home() {
  return <h2>Movie Theatre</h2>;
}

class App extends React.Component
{
  render() {
    return <div>
      <Router>
          <Navbar />
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={LoginPage} />
              <Route path="/movie/:searchType/:search" component={MovieList} />
              <Route path="/movie/:mid" component={MoviePage} />
              <Route component={Home} />
          </Switch>
      </Router>
    </div>;
  }
}

const auth = {
    user: null,
    login(user, pass)
    {
      fetch('http://localhost:1337/auth',
      {
        method: "GET",
        headers: {
          "x-username": user,
          "x-password": pass
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data.userid)
          this.user = {
            loggedInId: data.userid,
            username: user,
            password: pass
          }
        else
          this.logout();
      });
    },
    logout()
    {
        this.user = null;
    }
}

export default App;
export { auth };
