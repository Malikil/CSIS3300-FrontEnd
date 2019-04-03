import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../App';


// https://stackoverflow.com/questions/49819183/react-what-is-the-best-way-to-handle-authenticated-logged-in-state
class Navbar extends React.Component
{
    loginButton()
    {
        if (!!this.state.user)
            return <button onClick={auth.logout}>Logout</button>;
        else
            return <Link to="/login"><button>Login</button></Link>;
    }
    constructor(props)
    {
        super(props);
        this.state = {
          user: null
        };
    }

    login(user, pass, callback)
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
          this.setState({
            user: {
            loggedInId: data.userid,
            username: user,
            password: pass
            }
          });
        else
          this.setState({
            user: null
          });
        return this.state.user;
      }).then(callback);
    }

    logout()
    {
        this.setState({
          user: null
        });
    }

    render()
    {
        return <table className="navbar">
            <tbody>
                <tr>
                    <td className="lalign"><Link to="/">Movie Theatre x</Link></td>
                    <td className="ralign">{`${this.state.user.username}`} {this.loginButton()}</td>
                </tr>
            </tbody>
        </table>;
    }
}

export default Navbar;
