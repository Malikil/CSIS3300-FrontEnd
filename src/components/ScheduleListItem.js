import React from 'react';

class ScheduleListItem extends React.Component
{
    render()
    {
        return <table className="scheduleListItem">
            <tbody>
                <tr>
                    <td>Auditorium: {this.props.schedule.auditorium}</td>
                    <td>Price: ${this.props.schedule.ticketprice}</td>
                </tr>
                <tr>
                    <td colSpan="2">Showtime: {new Date(this.props.schedule.showtime).toLocaleString(
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
            </tbody>
        </table>;
    }
}

export default ScheduleListItem;