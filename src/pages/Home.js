import React from 'react';
import { Redirect } from 'react-router-dom';

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
        fetch("http://localhost:1337/get_genres")
        .then(response => response.json())
        .then(data =>
            this.setState({
                genres: data.map(item => item.genre)
            }));
        
        fetch("http://localhost:1337/get_ratings")
        .then(response => response.json())
        .then(data =>
            this.setState({
                ratings: data.map(item => item.rating)
            }));
    }

    renderRedirect()
    {
        if (this.state.formSubmitted)
            return <Redirect to={`/search_title/${this.state.title}`} />;
    }

    render()
    {
        return <div>
            {this.renderRedirect()}
            <h1>Welcome to Movie Theatre X</h1>
            <form onSubmit={this.handleSubmit}>
                <table className="contentFit">
                    <tbody>
                        <tr>
                            <td style={searchName}>Title</td>
                            <td className="lalign">
                                <input type="text" value={this.state.title} onChange={(e) =>
                                    this.setState({
                                        title: e.target.value
                                    })
                                } />
                            </td>
                        </tr>
                        <tr>
                            <td style={searchName}>Genre</td>
                            <td className="lalign">
                                <select name="genre" value={this.state.genre} onChange={(e) =>
                                    this.setState({
                                        genre: e.target.value
                                    })
                                }>
                                    <option>All</option>
                                    {this.state.genres.map(item => 
                                        <option key={item} value={item.toLowerCase()}>{item}</option>)}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td style={searchName}>Rating</td>
                            <td className="lalign">
                                <select value={this.state.rating} onChange={(e) =>
                                    this.setState({
                                        rating: e.target.value
                                    })
                                }>
                                    <option value="">All</option>
                                    {this.state.ratings.map(item =>
                                        <option key={item} value={item.toLowerCase()}>{item}</option>)}
                                </select>
                            </td>
                        </tr>
                        <tr style={{
                            marginTop: "1ex"
                        }}>
                            <td colSpan="2" style={{
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
