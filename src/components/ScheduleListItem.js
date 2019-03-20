import React from 'react'

class ScheduleListItem extends React.Component
{
    render(props)
    {
        return <table>
            <tbody>
                <tr>
                    <td>Auditorium: {props.schedule.auditorium}</td>
                    <td>Price: ${props.schedule.price}</td>
                </tr>
                <tr>
                    <td colSpan="2">Showtime: {props.schedule.price}</td>
                </tr>
            </tbody>
        </table>;
    }
}

export default ScheduleListItem;