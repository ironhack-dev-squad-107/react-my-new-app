import React, { Component } from "react";

import "./MovieList.css";
import AddMovie from "./AddMovie.js";

function longRatingText(movie) {
  if (movie.hasOscars && movie.imdbRating >= 9) {
    return <p>🤯 Mindblowing film! Rating is {movie.imdbRating}.</p>;
  } else if (movie.hasOscars && movie.imdbRating >= 7) {
    return (
      <p>
        😮 Solid film! Has Oscars and a decent rating of {movie.imdbRating}.
      </p>
    );
  } else {
    return <p>Rating is {movie.imdbRating}.</p>;
  }
}

class MovieList extends Component {
  // use constructor for ONLY when you need state
  constructor(props) {
    super(props);

    // initial state of our component
    this.state = {
      showOscarFilmsOnly: false,
      movieArray: [
        {
          _id: "7g",
          title: "The Godfather",
          director: "Francis Coppola",
          imdbRating: 9.2,
          hasOscars: true
        },
        {
          _id: "8h",
          title: "Star Wars",
          director: "George Lucas",
          imdbRating: 8.7,
          hasOscars: true
        },
        {
          _id: "9i",
          title: "The Shawshank Redemption",
          director: "Frank Darabont",
          imdbRating: 9.3,
          hasOscars: false
        },
        {
          _id: "10j",
          title: "Glitter",
          director: "Vondie Curtis-Hall",
          imdbRating: 2.2,
          hasOscars: false
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

  toggleOscarFilter() {
    const oldFilter = this.state.showOscarFilmsOnly;
    // set the state to the opposite of the boolean value it had before
    this.setState({ showOscarFilmsOnly: !oldFilter });
  }

  // we will send this method to AddMovie to update the array
  addNewMovie(movieObject) {
    // get the old array from the state
    const movies = this.state.movieArray;

    // update the array
    movies.unshift(movieObject);

    // save the new array in the state to render the component again
    this.setState({ movieArray: movies });
  }

  render() {
    const { movieArray, showOscarFilmsOnly } = this.state;

    return (
      <section className="MovieList">
        <h2>Movie List Example</h2>

        {/* send our addNewMovie() method as a PROP named movieSubmit */}
        <AddMovie movieSubmit={movieObject => this.addNewMovie(movieObject)} />

        <button onClick={() => this.toggleOscarFilter()}>
          Show {showOscarFilmsOnly ? "All Films" : "Oscar Winners Only"}
        </button>

        <ul>
          {movieArray.map((oneMovie, index) => {
            return (
              // return the <li> of this movie if the filter is FALSE
              // -OR- if the filter is TRUE and the movie has Oscars
              (!showOscarFilmsOnly || oneMovie.hasOscars) && (
                // add a UNIQUE key to the HTML tag you return in map()
                // (this helps React be more efficient when updating the DOM)
                <li key={oneMovie._id}>
                  <h3>{oneMovie.title}</h3>
                  <p>Directed by {oneMovie.director}</p>

                  {/* if the movie has won oscars */}
                  {oneMovie.hasOscars ? (
                    <p>Oscar Winning Film 🏆</p>
                  ) : (
                    <p>Great film, but no Oscars. 😕</p>
                  )}
                  {/* CONDITION ? OPTION A : OPTION B */}

                  {/* if the rating is less than 4 */}
                  {oneMovie.imdbRating < 4 && <p>This movie is 💩</p>}
                  {/* {CONDITION && CONTENT} */}

                  {longRatingText(oneMovie)}

                  <button onClick={() => this.deleteMovie(index)}>
                    Delete
                  </button>
                </li>
              )
            );
          })}
        </ul>
      </section>
    );
  }
}

export default MovieList;
