import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Smurfs from "../components/Smurfs";
import Smurf from "../components/Smurf";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import "./App.css";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    return this.props.getSmurfs();
  }
  render() {
    if (this.props.isFetching) {
      console.log("data is being fetched!");
    }

    return (
      <Router>
        <div className="App">
          <Route
            exact
            path="/"
            render={props => <Smurfs {...props} smurfs={this.props.smurfs} />}
          />
          <Route
            path="/smurfs/:name"
            render={props => <Smurf {...props} smurfs={this.props.smurfs} />}
          />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    isFetching: state.isFetching
  };
};

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    /* action creators go here */
    getSmurfs
  }
)(App);
