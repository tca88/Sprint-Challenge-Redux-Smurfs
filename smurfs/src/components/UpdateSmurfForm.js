import React, { Component } from "react";
import { connect } from "react-redux";
import { updateSmurf } from "../actions";

class UpdateSmurfForm extends Component {
  state = {
    smurf: {
      name: "",
      age: "",
      height: ""
    }
  };
  handleChange = e => {
    e.persist();
    console.log(this.props.smurf);
    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value
      }
    });
  };

  componentDidMount() {
    this.setState({
      smurf: this.props.smurf
    });
  }

  updateSmurf = e => {
    e.preventDefault();
    this.props.updateSmurf(this.state.smurf);
  };

  render() {
    // console.log("UOOUO", this.props.smurfs);
    if (!this.state.smurf) return <div>loading</div>;
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
