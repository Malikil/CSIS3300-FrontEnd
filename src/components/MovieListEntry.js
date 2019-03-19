import React from 'react';

class MovieListEntry extends React.Component
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
                <td>Title: {this.state.title}</td> 
            </tr>
            <tr>
                <td>Rating: {this.state.movies.rating}</td>
                <td>Genres: {this.state.movies.genre}</td>
            </tr>
            <tr>
                <td>
                    Description: <br/> 
                    {this.state.movies.description}
                </td>
            </tr>
        </table>;
    }
}

export default MovieListEntry;