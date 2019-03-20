import React from 'react';
import './MoviePage.css';

class MoviePage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            movieid: props.id,
            title: "Title placeholder",
            description: "Description placeholder",
            rating: "RtgPH",
            genre: ["Genre1", "Genre2"],
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
                genre: data.genres
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
                            List of showtimes
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>;
    }
}

export default MoviePage;