import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
// import Loader from "react-loader-spinner";

function Smurfs(props) {
  console.log("Smurf Name: ", props.smurfs);
  return (
    <div>
      {props.smurfs.map(smurf => (
        <div>
          <p key={smurf.name}>{smurf.name}</p>
          <Link to={`/smurfs/${smurf.name}`}>
            <p>Learn More</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Smurfs;
