import React from 'react';
import { Link } from 'react-router-dom';

class TicketListEntry extends React.Component
{
    render()
    {
        return <table className = "movieListEntry">
            <tbody>
            <tr>
                <td colSpan="3" className="title">Title: <Link to = {`/movie/${this.props.ticket.movieid}`}>
                    {this.props.ticket.title}
                </Link></td> 
            </tr>
            <tr>
                <td>Rating: <Link to = {`/movie/rating/${this.props.ticket.rating}`}>
                {this.props.ticket.rating}</Link></td>
                <td>Auditorium: {this.props.ticket.auditorium}</td>
                <td>Seat: {this.props.ticket.seat}</td>
            </tr>
            <tr>
                <td>
                    Show Time: {new Date(this.props.ticket.showtime).toLocaleString(
                        "en-US",
                        {
                            weekday: "short",
                            month: "long",
                            day: "numeric",
                            hour: "numeric",
                            minute: "2-digit"
                        }
                    )}
                </td>
            </tr>
            <tr>
                <td>Ticket Price: ${this.props.ticket.ticketprice}</td>
            </tr>
            </tbody>
        </table>;
    }
}

export default TicketListEntry;