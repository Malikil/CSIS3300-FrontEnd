import React from 'react';
import './MoviePage.css';

class MoviePage extends React.Component
{
    constructor({ match })
    {
        super();
        console.log(match.params.mid);
        this.state = {
            movieid: match.params.mid,
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
                genre: data.genres
            });
        });
        //fetch(`http://localhost:1337/get_schedule/${this.state.movieid}`)
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