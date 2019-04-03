import React from 'react';
import { Redirect } from 'react-router-dom';
import { api } from '../App';

const searchName = {
    textAlign: "right",
    paddingRight: "1ex"
}

class Home extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            title: "",
            genre: "",
            rating: "",
            genres: [],
            ratings: [],
            searchType: "title",
            formSubmitted: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e)
    {
        this.setState({
            formSubmitted: true
        });
        e.preventDefault();
    }

    componentWillMount()
    {
        fetch(`${api}/get_genres`)
        .then(response => response.json())
        .then(data =>
            this.setState({
                genres: data.map(item => item.genre),
                genre: data[0].genre
            }));
        
        fetch(`${api}/get_ratings`)
        .then(response => response.json())
        .then(data =>
            this.setState({
                ratings: data.map(item => item.rating),
                rating: data[0].rating
            }));
    }

    inputView()
    {
        switch (this.state.searchType)
        {
            case "title":
                return <input className="formInputItem" type="text" value={this.state.title} onChange={(e) =>
                    this.setState({
                        title: e.target.value
                    })
                } />;
            case "genre":
                return <select className="formInputItem" value={this.state.genre} onChange={(e) =>
                    this.setState({
                        genre: e.target.value
                    })
                }>
                    {this.state.genres.map(item => 
                        <option key={item} value={item.toLowerCase()}>{item}</option>)}
                </select>;
            case "rating":
                return <select className="formInputItem" value={this.state.rating} onChange={(e) =>
                    this.setState({
                        rating: e.target.value
                    })
                }>
                    {this.state.ratings.map(item =>
                        <option key={item} value={item.toLowerCase()}>{item}</option>)}
                </select>;
        }
    }

    shouldRedirect()
    {
        if (this.state.formSubmitted)
        {
            switch (this.state.searchType)
            {
                case "title":
                    return <Redirect to={`/movie/title/${this.state.title}`} />;
                case "genre":
                    return <Redirect to={`/movie/genre/${this.state.genre}`} />;
                case "rating":
                    return <Redirect to={`/movie/rating/${this.state.rating}`} />;
            }
        }
    }

    render()
    {
        return <div>
            {this.shouldRedirect()}
            <h1>Welcome to Movie Theatre X</h1>
            <form onSubmit={this.handleSubmit}>
                <table className="contentFit">
                    <tbody>
                        <tr>
                            <td>Search by</td>
                            <td style={searchName}>
                                <select value={this.state.searchType} onChange={(e) =>
                                    this.setState({
                                        searchType: e.target.value
                                    })
                                }>
                                    <option value="title">Title</option>
                                    <option value="genre">Genre</option>
                                    <option value="rating">Rating</option>
                                </select>
                            </td>
                            <td>
                                {this.inputView()}
                            </td>
                        </tr>
                        <tr style={{
                            marginTop: "1ex"
                        }}>
                            <td colSpan="3" style={{
                                textAlign: "center"
                            }}>
                                <input type="submit" value="Search"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>;
    }
}

export default Home;
