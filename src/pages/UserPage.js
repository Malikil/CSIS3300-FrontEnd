import React from 'react';
import TicketList from '../pages/TicketList';

class UserPage extends React.Component
{
    render()
    {
        return <table>
            <tbody>
                <tr>
                    <th>History</th>
                    <th>Upcoming</th>
                </tr>
                <tr>
                    <td><TicketList list = {this.props.history}/></td> 
                    <td><TicketList list = {this.props.upcoming}/></td>
                </tr>
                
            </tbody>
        </table>
    }
}
export default UserPage;