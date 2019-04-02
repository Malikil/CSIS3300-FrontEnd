import React from 'react';

class Navbar extends React.Component
{
    render()
    {
        return <table className="navbar">
            <tbody>
                <tr>
                    <td className="lalign">Movie Theatre x</td>
                    <td className="ralign"><input type="button" value="Login"/></td>
                </tr>
            </tbody>
        </table>;
    }
}

export default Navbar;
