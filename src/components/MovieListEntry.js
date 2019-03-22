import React from 'react';
import { Link } from 'react-router-dom';
import './MovieListEntry.css';

class MovieListEntry extends React.Component
{
    render()
    {
        return <table className = "movieListEntry">
            <tbody>
            <tr>
                <td className="title">Title: <Link to = {`/movie/${this.props.movie.movieid}`}>
                    {this.props.movie.title}
                </Link></td> 
                <td>Rating: {this.props.movie.rating}</td>
            </tr>
            <tr>
                <td colSpan = "2">Genres: {this.props.movie.genre.map((item, index) => (
                    index > 0? `, ${item}` : item
                ))}</td>
            </tr>
            <tr>
                <td colSpan = "2">
                    Description: <br/> 
                    {this.props.movie.description}
                </td>
            </tr>
            </tbody>
        </table>;
    }
}

export default MovieListEntry;