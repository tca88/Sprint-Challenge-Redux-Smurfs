import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteSmurf } from "../actions";

function Smurf(props) {
  console.log("Smurfs: ", props.smurfs);
  const smurf = props.smurfs.find(
    smurf => `${smurf.name}` === props.match.params.name
  );
  if (!smurf) return <h3>Loading data...</h3>;

  console.log("Smurfy1", smurf);

  const updateSmurf = (e, smurf) => {
    e.preventDefault();
    console.log("Smurfy2", smurf);
    props.setActiveSmurf(smurf);
    props.history.push(`/update-smurf/${smurf.name}`);
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
      <button onClick={e => updateSmurf(e, smurf)}>Update Smurf</button>
    </div>
  );
}

export default connect(
  null,
  { deleteSmurf }
)(Smurf);
