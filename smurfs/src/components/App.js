import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Smurfs from "../components/Smurfs";
import Smurf from "../components/Smurf";
import AddSmurfForm from "../components/AddSmurfForm";
import UpdateSmurfForm from "../components/UpdateSmurfForm";
import { connect } from "react-redux";
import { getSmurfs, setActiveSmurf } from "../actions";
import "./App.css";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    return this.props.getSmurfs();
  }

  setActiveSmurf = smurf => {
    console.log("Initial Smurf", smurf);
    return this.props.setActiveSmurf(smurf);
  };

  render() {
    if (this.props.isFetching) {
      console.log("data is being fetched!");
    }

    return (
      <Router>
        <div className="App">
          <nav>
            <NavLink className="nav-item" to="/add-smurf">
              Add Smurf
            </NavLink>
            <NavLink className="nav-item" exact to="/">
              Home
            </NavLink>
          </nav>
          <Route
            exact
            path="/"
            render={props => <Smurfs {...props} smurfs={this.props.smurfs} />}
          />
          <Route
            path="/smurfs/:name"
            render={props => (
              <Smurf
                {...props}
                smurfs={this.props.smurfs}
                setActiveSmurf={this.setActiveSmurf}
              />
            )}
          />
          <Route
            path="/add-smurf"
            render={props => (
              <AddSmurfForm {...props} smurfs={this.props.smurfs} />
            )}
          />

          <Route
            path="/update-smurf/:name"
            render={p => <UpdateSmurfForm {...p} smurf={this.props.smurf} />}
          />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  console.log("why", state);
  return {
    smurfs: state.smurfs,
    error: state.error,
    isFetching: state.isFetching,
    smurf: state.smurf
  };
};

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    /* action creators go here */
    getSmurfs,
    setActiveSmurf
  }
)(App);
