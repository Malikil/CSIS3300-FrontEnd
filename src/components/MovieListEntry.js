import React from 'react';

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
        return <table>
            <tbody>
            <tr>
                <td>Title: {this.state.title}</td> 
            </tr>
            <tr>
                <td>Rating: {this.state.rating}</td>
            </tr>
            <tr>
                <td>Genres: {this.state.genre.map((item, index) => (index > 0? `, ${item}` : item))}</td>
            </tr>
            <tr>
                <td>
                    Description: <br/> 
                    {this.state.description}
                </td>
            </tr>
            </tbody>
        </table>;
    }
}

export default MovieListEntry;