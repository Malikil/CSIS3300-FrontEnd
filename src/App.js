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
  constructor(props)
  {
    super(props);

    this.state = {
      loggedInId: null,
      username: "",
      password: ""
    };
  }

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
    .then(data => 
      this.setState({
        loggedInId: data.userid,
        username: user,
        password: pass
      }));
  }

  render() {
    return <div>
      <Navbar user={{
        userid: this.state.loggedInId,
        username: this.state.username,
        password: this.state.password
      }} handlelogin={this.login} />
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
