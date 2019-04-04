import React from 'react';
import TicketListEntry from '../components/TicketListEntry';

class TicketList extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            tickets: props.tickets
        };
    }

    render()
    {
        return <div>
            {this.state.tickets.map(item => (
                <TicketListEntry key={item.ticketid} ticket={item}/>
            ))}
        </div>;
    }
}
export default TicketList;