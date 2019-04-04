import React from 'react';
import TicketList from '../pages/TicketList';
import  api  from '../api';

class UserPage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            uid: props.match.params.uid,
            history: [],
            upcoming: []
        }
    }

    componentDidMount()
    {
        
        fetch(`${api}/get_tickets/future/${this.state.uid}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                upcoming:data
            });
        });        
    }

    render()
    {
        return <table>
            <tbody>
                <tr>
                    <th>History</th>
                    <th>Upcoming</th>
                </tr>
                <tr>
                    <td className="half" valign="top"><TicketList time="past" userid={this.state.uid} /></td> 
                    <td className="half" valign="top"><TicketList time="future" userid={this.state.uid} /></td>
                </tr>
                
            </tbody>
        </table>
    }
}
export default UserPage;