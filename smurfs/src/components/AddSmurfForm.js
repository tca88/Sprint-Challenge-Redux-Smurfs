import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

class AddSmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: "",
        age: "",
        height: ""
      }
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

  addSmurf = e => {
    e.preventDefault();

    this.props.addSmurf(this.state.smurf);

    this.setState({
      smurf: {
        name: "",
        age: 0,
        height: ""
      }
    });
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addSmurf}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Add a new Smurf"
              onChange={this.handleChange}
              value={this.state.name}
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              onChange={this.handleChange}
              value={this.state.age}
            />
            <input
              type="text"
              name="height"
              placeholder="Height"
              onChange={this.handleChange}
              value={this.state.height}
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
  { addSmurf }
)(AddSmurfForm);
