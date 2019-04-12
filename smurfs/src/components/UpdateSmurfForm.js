import React, { Component } from "react";
import { connect } from "react-redux";
import { updateSmurf } from "../actions";

class UpdateSmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: this.props.activeSmurf
    };
  }

  handleChange = e => {
    e.persist();
    console.log(this.state.smurf);
    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value
      }
    });
  };

  updateSmurf = e => {
    e.preventDefault();
    this.props.updateSmurf(this.state.smurf);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.updateSmurf}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="name"
              onChange={this.handleChange}
              value={this.state.smurf.name}
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              onChange={this.handleChange}
              value={this.state.smurf.age}
            />
            <input
              type="text"
              name="height"
              placeholder="Height"
              onChange={this.handleChange}
              value={this.state.smurf.height}
            />
          </div>
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { updateSmurf }
)(UpdateSmurfForm);
