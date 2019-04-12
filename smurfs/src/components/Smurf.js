import React, { Component } from "react";

function Smurf(props) {
  console.log("Smurfs: ", props.smurfs);
  const smurf = props.smurfs.find(
    smurf => `${smurf.name}` === props.match.params.name
  );
  if (!smurf) return <h3>Loading data...</h3>;
  return (
    <div>
      <p>{smurf.name}</p>
      <p>{smurf.age}</p>
      <p>{smurf.height}</p>
    </div>
  );
}

export default Smurf;
