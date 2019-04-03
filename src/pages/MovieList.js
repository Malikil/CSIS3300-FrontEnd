import React from 'react';
import MovieListEntry from '../components/MovieListEntry';
import { api } from '../App';

class MovieList extends React.Component
{
    constructor(props)
    {
        super(props);
        this.getMovieInfo = this.getMovieInfo.bind(this);
        this.state = {
            movies: []
        }
    }

    getMovieInfo(type, search)
    {
        ((!!!type || !!!search) ? 
        fetch(`${api}/search_all`) :
        fetch(`${api}/search_${type}/${search}`))
        .then(response => response.json())
        .then(data => {
           this.setState({
                movies: data
            });
        });
    }

    componentWillReceiveProps(newProps)
    {
        this.getMovieInfo(
            newProps.match.params.searchType,
            newProps.match.params.search
        );
    }

    componentDidMount()
    {
        // Fetch goes here
        this.getMovieInfo(
            this.props.match.params.searchType,
            this.props.match.params.search
        );
    }

    render()
    {
        return <div>
            {this.state.movies.map(item => (
                <MovieListEntry key={item.movieid} movie={item} redir={this.getMovieInfo}/>
            ))}
        </div>;
    }
}
export default MovieList;