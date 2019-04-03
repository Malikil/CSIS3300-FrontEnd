import React from 'react';


// https://stackoverflow.com/questions/49819183/react-what-is-the-best-way-to-handle-authenticated-logged-in-state
class Navbar extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
          user: props.user
        };
    }

    componentWillReceiveProps(newprops)
    {
      this.setState({
        user: newprops.user
      });
    }

    render()
    {
        return <table className="navbar">
            <tbody>
                <tr>
                    <td className="lalign" onClick={(e) => this.props.handlelogin("InitUser", "InitPass")}>Movie Theatre x</td>
                    <td className="ralign">{this.state.user.username ? this.state.user.username : "not logged in"}</td>
                </tr>
            </tbody>
        </table>;
    }
}



export default Navbar;
