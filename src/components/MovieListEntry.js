import React from 'react';
import { Link } from 'react-router-dom';
import './MovieListEntry.css';

class MovieListEntry extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            movieid: props.movie.movieid,
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
                <td className="title">Title: <Link to = {`/movie/${this.state.movieid}`}>{this.state.title}</Link></td> 
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