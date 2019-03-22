import React from 'react';
import MovieListEntry from '../components/MovieListEntry';

class MovieList extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            searchType: props.match.params.searchType,
            search: props.match.params.search,
            movies: []
        }
    }
    componentDidMount()
    {
        // Fetch goes here
        
        fetch(`http://localhost:1337/get_${this.state.searchType}/${this.state.search}`)
        .then(response => response.json())
        .then(data => {
           this.setState({
                movies: data
            });
        });
    }

    render()
    {
        return <div>
            {this.state.movies.map(item => (
                <MovieListEntry key={item.movieid} movie={item}/>
            ))}
        </div>;
    }
}
export default MovieList;