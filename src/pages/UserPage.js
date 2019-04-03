import React from 'react';
import TicketList from '../pages/TicketList';
import { api } from '../App';

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

    componentWillMount()
    {
        fetch(`${api}/get_tickets/past/${this.state.uid}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                history:data
            });
        });
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
                    <td><TicketList list = {this.state.history}/></td> 
                    <td><TicketList list = {this.state.upcoming}/></td>
                </tr>
                
            </tbody>
        </table>
    }
}
export default UserPage;