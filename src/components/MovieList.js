import React, { Component } from "react";

import "./MovieList.css";

class MovieList extends Component {
  // use constructor for ONLY when you need state
  constructor(props) {
    super(props);

    // initial state of our component
    this.state = {
      movieArray: [
        { _id: "7g", title: "The Godfather", director: "Francis Coppola" },
        { _id: "8h", title: "Star Wars", director: "George Lucas" },
        {
          _id: "9i",
          title: "The Shawshank Redemption",
          director: "Frank Darabont"
        }
      ]
    };
  }

  deleteMovie(movieIndex) {
    const movies = this.state.movieArray;

    // remove the movie from the array
    movies.splice(movieIndex, 1);

    // setState() to tell React to change the DOM
    this.setState({ movieArray: movies });
  }

  render() {
    const { movieArray } = this.state;

    return (
      <section className="MovieList">
        <h2>Movie List Example</h2>

        <ul>
          {movieArray.map((oneMovie, index) => {
            return (
              // add a UNIQUE key to the HTML tag you return in map()
              // (this helps React be more efficient when updating the DOM)
              <li key={oneMovie._id}>
                <h3>{oneMovie.title}</h3>
                <p>Directed by {oneMovie.director}</p>
                <button onClick={() => this.deleteMovie(index)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default MovieList;
