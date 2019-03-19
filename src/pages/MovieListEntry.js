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
        return <div>
            {this.props.state.map((item, index) => (
                <Item movieid={item.movieid}
                    title={item.title}
                    description={item.description}
                    rating={item.rating}
                    genre={item.genre}
                />
            ))}
        </div>;
    }
}

export default MovieListEntry;