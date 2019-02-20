import React, { Component } from "react";

import "./AddMovie.css";

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: "",
      title: "",
      director: "",
      imdbRating: "",
      // no input for this state (it's always false)
      hasOscars: false
    };
  }

  // onChange event methods need to receive the event object
  // (contains information about the <input> tag)
  genericOnChange(event) {
    // event.target is the <input> tag that the onChange is connected to
    const { name, value } = event.target;
    // "value" is the text inside the <input> tag
    // "name" is the <input> tag's name attribute ("title", "director", etc.)

    // Example: imagine that name = "director"
    // use the variable "name" to set the key of the object
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    // prevent the default page refresh you get when you submit a form
    event.preventDefault();

    // save the new movie info (this.state) in the array
    // (movieSubmit is the method PROP sent to us by MovieList)
    this.props.movieSubmit(this.state);

    // clear the form by setting the state back to initial values
    // (REMEMBER to use SET STATE)
    this.setState({
      _id: "",
      title: "",
      director: "",
      imdbRating: "",
      hasOscars: false
    });
  }

  render() {
    return (
      <section className="AddMovie">
        <h2>Add a Movie</h2>

        {/*
         * NO action and method on React forms
         * (use an onSubmit event instead to handle the submission)
         */}
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            ID:
            <input
              // onChange captures user's typing
              onChange={event => this.genericOnChange(event)}
              // value sets initial text and allows us to reset the text
              value={this.state._id}
              type="text"
              name="_id"
              placeholder="11k"
            />
          </label>

          <label>
            Title:
            <input
              // onChange captures user's typing
              onChange={event => this.genericOnChange(event)}
              // value sets initial text and allows us to reset the text
              value={this.state.title}
              type="text"
              name="title"
              placeholder="Titanic"
            />
          </label>

          <label>
            Director:
            <input
              // onChange captures user's typing
              onChange={event => this.genericOnChange(event)}
              // value sets initial text and allows us to reset the text
              value={this.state.director}
              type="text"
              name="director"
              placeholder="James Cameron"
            />
          </label>

          <label>
            IMDB Rating:
            <input
              // onChange captures user's typing
              onChange={event => this.genericOnChange(event)}
              // value sets initial text and allows us to reset the text
              value={this.state.imdbRating}
              type="number"
              name="imdbRating"
              placeholder="9"
            />
          </label>

          <button>Save This Movie</button>
        </form>
      </section>
    );
  }
}

export default AddMovie;
