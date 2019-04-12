import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteSmurf } from "../actions";
import { updateSmurf } from "../actions";

function Smurf(props) {
  console.log("Smurfs: ", props.smurfs);
  const smurf = props.smurfs.find(
    smurf => `${smurf.name}` === props.match.params.name
  );
  if (!smurf) return <h3>Loading data...</h3>;

  const updateSmurf = e => {
    e.preventDefault();
    props.updateSmurf(smurf);
    props.history.push("/update-smurf");
  };

  const deleteSmurf = e => {
    e.preventDefault();
    props.deleteSmurf(smurf.id);
    alert(`${smurf.name} was removed from your friends list`);
    props.history.push("/");
  };

  return (
    <div>
      <p>{smurf.name}</p>
      <p>{smurf.age}</p>
      <p>{smurf.height}</p>
      <button onClick={deleteSmurf}>Delete Smurf</button>
      <button onClick={updateSmurf}>Update Smurf</button>
    </div>
  );
}

export default connect(
  null,
  { deleteSmurf }
)(Smurf);
