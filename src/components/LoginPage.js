import React from 'react';

class LoginPage extends React.Component
{
    render()
    {
        return <div>
            <table className="loginpage">
                <tbody>
                    <tr>
                        <th colSpan="2">Login</th>
                    </tr>
                    <tr>
                        <td className="ralign">User Name</td>
                        <td className="lalign"><input id="username" type="text"/></td>
                    </tr>
                    <tr>
                        <td className="ralign">Password</td>
                        <td className="lalign"><input id="pw" type="text"/></td>
                    </tr>
                    <tr>
                        <td colSpan="2"><input type="button" value="Login"/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    }
}

export default LoginPage;