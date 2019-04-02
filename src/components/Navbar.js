import React from 'react';
import { Link } from 'react-router-dom';

// https://stackoverflow.com/questions/49819183/react-what-is-the-best-way-to-handle-authenticated-logged-in-state


class Navbar extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            username:this.props.username
        };
    } 
    render()
    {
        console.log(this.state.username);
        return <table className="navbar">
            <tbody>
                <tr>
                    <td className="lalign"><Link to={'/'}>Movie Theatre x</Link></td>
                    <td className="ralign">{this.username}</td>
                    <td className="ralign">
                        <Link to={'/loginpage'}>Login</Link>
                        
                    </td>
                </tr>
            </tbody>
        </table>
    }
}
export default Navbar;
