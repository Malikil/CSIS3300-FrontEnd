import React from 'react';


// https://stackoverflow.com/questions/49819183/react-what-is-the-best-way-to-handle-authenticated-logged-in-state
class Navbar extends React.Component
{
    constructor(props)
    {
        super(props);
        this.login = ()=> {
            this.setState({
              isAuthenticated: true
            });
          }
        this.state = {
            isAuthenticated: false,
            login: this.login
        };
    }

    componentDidMount() {
        authenticate().then(isAuthenticated => {
          this.setState({ isAuthenticated })
        })
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
