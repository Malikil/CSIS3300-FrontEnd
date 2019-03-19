import React from 'react';
import MovieList from '../pages/MovieList';

class MovieList extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            movieid: props.id,
            title: "",
            description: "",
            rating: "",
            genre: []
        }
    }
    render()
    {
        return <table>
            <tr>
                <td>{this.state.title}</td> 
            </tr>
            <tr>
                <td>Rating: {this.state.rating}</td>
                <td>Genres: {this.state.genre}</td>
            </tr>
            <tr>
                <td>
                    Description: <br/> 
                    {this.state.description}
                </td>
            </tr>
        </table>;
    }
}
export default MovieList;