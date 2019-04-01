import React from 'react';
import { Link } from 'react-router-dom';

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
                <td>Rating: <Link to = {`/movie/rating/${this.props.movie.rating}`}>
                {this.props.movie.rating}</Link></td>
            </tr>
            <tr>
                <td colSpan = "2">Genres: {this.state.genre.map((item, index) =>
                                    <span>
                                        {index > 0 ? `, ` : ""}
                                        <Link to={`/movie/genre/${item}`}>
                                            {item}
                                        </Link>
                                    </span>
                )}</td>
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