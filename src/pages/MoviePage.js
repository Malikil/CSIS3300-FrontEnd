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
            genre: ["Genre1", "Genre2"]
        }
    }
    componentDidMount()
    {
        // Fetch goes here
    }

    render()
    {
        return <div class="movieBase">
            <h2>{this.state.title}</h2>
            <table>
                <tr>
                    <td class="descCol">
                        <p>
                            <b>Description:</b><br />
                            {this.state.description}
                        </p>
                        <p>
                            Genres: {this.state.genre.map((item, index) => (
                                index > 0 ? `, ${item}` : item
                            ))}<br />
                            Rating: {this.state.rating}
                        </p>
                    </td>
                    <td class="showtimes">
                        List of showtimes
                    </td>
                </tr>
            </table>
        </div>;
    }
}

export default MoviePage;