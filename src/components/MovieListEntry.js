import React from 'react';

class MovieListEntry extends React.Component
{
    
    

    render(props)
    {
        return <table>
            <tr>
                <td>Title: {props.movie.title}</td> 
            </tr>
            <tr>
                <td>Rating: {props.movie.rating}</td>
                <td>Genres: {props.movie.genre.map((item, index) => (index > 0? `, ${item}` : item))}</td>
            </tr>
            <tr>
                <td>
                    Description: <br/> 
                    {props.movie.description}
                </td>
            </tr>
        </table>;
    }
}

export default MovieListEntry;