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
            genre: [],
            movies: []
        }
    }

    componentDidMount()
    {
        // Fetch goes here
        fetch(`http://localhost:1337/get_${this.props.searchType}/${this.props.search}`)
        .then(response => response.json())
        .then(data => {
           this.setState({
                movies: data.map((item, index) => (
                    <MovieListEntry movieid={item.movieid}/>
                ))
            });
        });
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