import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../App';
import api from '../api';

class ScheduleListItem extends React.Component
{
    constructor(props)
    {
        super(props);
        this.purchaseTicket = this.purchaseTicket.bind(this);
        console.log(!!auth.user);
        this.state = {
            showid: props.schedule.scheduleid,
            auditorium: props.schedule.auditorium,
            ticketprice: props.schedule.ticketprice,
            showtime: props.schedule.showtime,
            available: (props.schedule.seats_total - props.schedule.seats_taken)
        };
    }

    purchaseTicket()
    {
        console.log("hello");
        fetch(`${api}/put_ticket`, {
            method: "GET",
            headers: {
                "scheduleid": this.state.showid,
                "account": auth.user.userid
            }
        }).then(response => {
            if (response.status === 409)
                alert("No seats are available for that movie");
            else if (response.status === 201)
                alert("Ticket purchased");
        });
    }

    render()
    {
        return <table className="scheduleListItem">
            <tbody>
                <tr>
                    <td>Auditorium: {this.state.auditorium}</td>
                    <td>Price: ${this.state.ticketprice}</td>
                </tr>
                <tr>
                    <td colSpan="2">Showtime: {new Date(this.state.showtime).toLocaleString(
                        "en-US",
                        {
                            weekday: "short",
                            month: "long",
                            day: "numeric",
                            hour: "numeric",
                            minute: "2-digit"
                        }
                    )}</td>
                </tr>
                <tr>
                    <td>
                        Seats Available: {this.state.available}
                    </td>
                    <td>{
                        !!auth.user ?
                        <button onClick={this.purchaseTicket}>Purchase</button> :
                        <Link to="/login"><button>Purchase</button></Link>
                    }</td>
                </tr>
            </tbody>
        </table>;
    }
}

export default ScheduleListItem;