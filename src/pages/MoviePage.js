import React from 'react';
import ScheduleListItem from "../components/ScheduleListItem";

class MoviePage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            movieid: props.match.params.mid,
            title: "",
            description: "",
            rating: "",
            genre: [],
            showtimes: []
        }
    }

    componentDidMount()
    {
        // Fetch goes here
        fetch(`http://localhost:1337/get_movie/${this.state.movieid}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                title: data.title,
                description: data.description,
                rating: data.rating,
                genre: data.genre
            });
        });
        fetch(`http://localhost:1337/get_schedule/movie/${this.state.movieid}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                showtimes: data
            });
        });
    }

    render()
    {
        return <div className="movieBase">
            <h2>{this.state.title}</h2>
            <table>
                <tbody>
                    <tr>
                        <td className="descCol" valign="top">
                            <p>
                                <b>Description:</b><br />
                                {this.state.description}
                            </p>
                            <p>
                                Genre: {this.state.genre.map((item, index) => (
                                    index > 0 ? `, ${item}` : item
                                ))}<br />
                                Rating: {this.state.rating}
                            </p>
                        </td>
                        <td className="showtimes" valign="top">
                            {this.state.showtimes.map(item => 
                                <ScheduleListItem key={item.scheduleid} schedule={item} />
                            )}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>;
    }
}

export default MoviePage;