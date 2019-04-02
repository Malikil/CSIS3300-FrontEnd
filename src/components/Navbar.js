import React from 'react';

class Navbar extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            loggedin: false
        };
    }

    checkLogin()
    {
        
    }

    render()
    {
        return <table className="navbar">
            <tbody>
                <tr>
                    <td className="lalign">Movie Theatre x</td>
                    <td className="ralign">Login button here</td>
                </tr>
            </tbody>
        </table>;
    }
}

export default Navbar;
