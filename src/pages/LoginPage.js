import React from 'react';
import { Redirect } from 'react-router-dom';
import { auth } from '../App';

class LoginPage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.login = this.login.bind(this);
        this.state = {
            redirectToReferrer: false,
            username: "",
            password: ""
        }
    }

    login()
    {
        auth.login(this.state.username, this.state.password, (userobj) => {
            if (!!userobj)
                this.setState({
                    redirectToReferrer: true
                });
            else
                alert("Login unsuccessful");
        });
    }

    render()
    {
        if (this.state.redirectToReferrer)
            return <Redirect to="/" />;
        else
            return <table className="contentFit">
                <tbody>
                    <tr>
                        <th colSpan="2">Login</th>
                    </tr>
                    <tr>
                        <td className="ralign">Username</td>
                        <td className="lalign">
                            <input type="text" value={this.state.username} onChange={(e) =>
                                this.setState({
                                    username: e.target.value
                                })
                            }/>
                        </td>
                    </tr>
                    <tr>
                        <td className="ralign">Password</td>
                        <td className="lalign">
                            <input type="text" value={this.state.password} onChange={(e) =>
                                this.setState({
                                    password: e.target.value
                                })
                            } />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" style={{textAlign: "center"}}>
                            <button onClick={this.login}>Login</button>
                        </td>
                    </tr>
                </tbody>
            </table>;
    }
}

export default LoginPage;