import React from 'react';

class LoginPage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            username: "",
            pw: ""
        };
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
    handleUserChange(e)
    {
        this.setState({
            username: e.target.value
        })
    }
    handlePasswordChange(e)
    {
        this.setState({
            pw: e.target.value
        })
    }
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
                        <td className="lalign">
                            <input id="username" type="text" value={this.state.username} onChange={this.handleUserChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td className="ralign">Password</td>
                        <td className="lalign">
                            <input id="pw" type="text" value={this.state.pw} onChange={this.handlePasswordChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2"><input type="button" value="Login" onClick={() => {this.props.history.push('/')}}/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    }
}

export default LoginPage;