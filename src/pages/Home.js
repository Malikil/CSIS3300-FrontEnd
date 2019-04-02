import React from 'react';

class Home extends React.Component
{
    render()
    {
        return <div>
            
            <h1>Welcome to Movie Theatre X</h1>
            <table>
                <tbody>
                <tr>
                    <td><input type="button" value="Search by Title" onClick={() => this.props.history.push("/search/title/")} /></td>
                    <td><input type="button" value="Search by Genre" onClick={() => this.props.history.push("/search/genre/")}/></td>
                </tr>
                </tbody>
            </table>
        </div>
    }
}

export default Home;
