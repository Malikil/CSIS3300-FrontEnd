import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../App';


// https://stackoverflow.com/questions/49819183/react-what-is-the-best-way-to-handle-authenticated-logged-in-state
class Navbar extends React.Component
{
    loginButton()
    {
        if (!!auth.user)
            return <button onClick={auth.logout}>Logout</button>;
        else
            return <Link to="/login"><button>Login</button></Link>;
    }

    render()
    {
        return <table className="navbar">
            <tbody>
                <tr>
                    <td className="lalign"><Link to="/">Movie Theatre x</Link></td>
                    <td className="ralign">{`${auth.user}`} {this.loginButton()}</td>
                </tr>
            </tbody>
        </table>;
    }
}

export default Navbar;
