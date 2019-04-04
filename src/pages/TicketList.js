import React from 'react';
import TicketListEntry from '../components/TicketListEntry';
import api from '../api';

class TicketList extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            uid: props.userid,
            timeframe: props.time,
            tickets: []
        };
        console.log(this.state.timeframe);
    }

    componentDidMount()
    {
        let uri = `${api}/get_tickets/${this.state.timeframe}/${this.state.uid}`;
        console.log(`from: ${uri}`);
        fetch(uri)
        .then(response => response.json())
        .then(data => {
            this.setState({
                tickets: data
            });
        });
    }
    
    render()
    {
        return <div>
            {this.state.tickets.map(item => (
                <TicketListEntry key={item.ticketid} ticket={item} />
            ))}
        </div>;
    }
}
export default TicketList;