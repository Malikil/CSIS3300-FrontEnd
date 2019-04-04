import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  withRouter
} from "react-router-dom";
import Home from './pages/Home';
import MoviePage from './pages/MoviePage';
import MovieList from './pages/MovieList';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';
import api from './api';
import "./App.css";

class App extends React.Component {
  render() {
    return <div>
      <Router>
          <Navbar />
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={LoginPage} />
              <Route path="/movie/:searchType/:search" component={MovieList} />
              <Route path="/movie/:mid" component={MoviePage} />
              <Route path="/user/:uid" component={UserPage}/>
              <Route component={Home} />
          </Switch>
      </Router>
    </div>;
  }
}

const Navbar = withRouter(
  ({ history }) =>
    !!auth.user ? (
      <table className="navbar">
        <tbody>
          <tr>
            <td className="lalign"><Link to="/">Movie Theatre x</Link></td>
            <td className="ralign"><Link to={`/user/${auth.user.userid}`}>{auth.user.username}</Link> <button onClick={() =>
                auth.logout(() => history.push("/"))
              }>Logout</button>
            </td>
          </tr>
        </tbody>
      </table>
    ) : (
      <table className="navbar">
        <tbody>
          <tr>
            <td className="lalign"><Link to="/">Movie Theatre x</Link></td>
            <td className="ralign">
              guest <Link to="/login"><button>Login</button></Link>
            </td>
          </tr>
        </tbody>
      </table>
    )
)

const auth = {
  user: null,
  login(user, pass, callback) {
    fetch(`${api}/auth`,
    {
      method: "GET",
      headers: {
        "x-username": user,
        "x-password": pass
      }
    })
    .then(response => response.json())
    .then(data => {
      if (!!data.userid)
        this.user = {
          userid: data.userid,
          username: user
        };
      else
        this.user = null;
      return this.user;
    }).then(callback);
  },
  logout(callback) {
    this.user = null;
    setTimeout(callback, 100);
  }
}

export default App;
export {
  auth
};
