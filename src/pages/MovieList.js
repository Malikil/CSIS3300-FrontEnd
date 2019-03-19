import React from 'react';
import MovieListEntry from '../components/MovieListEntry';

class MovieList extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
           movies: []
        }
    }
    render()
    {
        return <div>
            {this.state.movies.map((item, index) => (
                <MovieListEntry movieid={item.movieid}/>
            ))}
        </div>;    
    }
}
export default MovieList;