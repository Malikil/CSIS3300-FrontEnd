import React from 'react';
import './MoviePage.css';

class MoviePage extends React.Component
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
    componentDidMount()
    {
        // Fetch goes here
    }

    render()
    {
        return <div>
            <h2>Movie Title with id {this.state.movieid}</h2>
            <p>Description</p>
            <p>rating and genre</p>
        </div>;
    }
}

export default MoviePage;