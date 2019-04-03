import React from 'react';
import { auth } from '../App';


// https://stackoverflow.com/questions/49819183/react-what-is-the-best-way-to-handle-authenticated-logged-in-state
class Navbar extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
          user: null
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
          logout();
      });
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
                    <td className="lalign">Movie Theatre x</td>
                    <td className="ralign">{!!this.state.user ? this.state.user.username : "not logged in"}</td>
                </tr>
            </tbody>
        </table>;
    }
}

export default Navbar;