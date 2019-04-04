import React from 'react';
import TicketListEntry from '../components/TicketListEntry';
import api from '../api';

class TicketList extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            tickets: props.tickets
        };
        
    }
    getTicketInfo(type, ticket)
    {
        ((!!!type || !!!ticket) ? 
        fetch(`${api}/get_tickets/past`):
        fetch(`${api}/get_tickets/future`))
        .then(response => response.json())
        .then(data => {
           this.setState({
                tickets: data
            });
        });
    }
    componentWillMount()
    {
        this.getTicketInfo(
            this.props.type,
            this.props.ticket
        );
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