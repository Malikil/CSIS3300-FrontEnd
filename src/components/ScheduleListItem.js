import React from 'react';
import "./ScheduleListItem.css";

class ScheduleListItem extends React.Component
{
    render()
    {
        return <table className="scheduleListItem">
            <tbody>
                <tr>
                    <td>Auditorium: {this.props.schedule.auditorium}</td>
                    <td>Price: ${this.props.schedule.price}</td>
                </tr>
                <tr>
                    <td colSpan="2">Showtime: {this.props.schedule.time}</td>
                </tr>
            </tbody>
        </table>;
    }
}

export default ScheduleListItem;