import React from 'react';
import { Link } from 'react-router-dom';

class TicketListEntry extends React.Component
{
    render()
    {
        return <table className = "movieListEntry">
            <tbody>
            <tr>
                <td className="title">Title: <Link to = {`/movie/${this.props.movie.movieid}`}>
                    {this.props.ticket.title}
                </Link></td> 
            </tr>
            <tr>
                <td>Rating: <Link to = {`/movie/rating/${this.props.movie.rating}`}>
                {this.props.ticket.rating}</Link></td>
                <td>Seat: {this.props.ticket.seat}</td>
            </tr>
            <tr>
                <td>Auditorium: {this.props.ticket.autiorium}</td>
            </tr>
            <tr>
                <td>
                    Show Time: <br/> 
                    {this.props.ticket.showtime}
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