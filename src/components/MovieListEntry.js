import React from 'react';
import './MovieListEntry.css';

class MovieListEntry extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            title: props.movie.title,
            description: props.movie.description,
            rating: props.movie.rating,
            genre: props.movie.genre
        }
    }
    render()
    {
        return <table className = "movieListEntry">
            <tbody>
            <tr>
                <td className="title">Title: {this.state.title}</td> 
                <td>Rating: {this.state.rating}</td>
            </tr>
            <tr>
                <td colSpan = "2">Genres: {this.state.genre.map((item, index) => (index > 0? `, ${item}` : item))}</td>
            </tr>
            <tr>
                <td colSpan = "2">
                    Description: <br/> 
                    {this.state.description}
                </td>
            </tr>
            </tbody>
        </table>;
    }
}

export default MovieListEntry;