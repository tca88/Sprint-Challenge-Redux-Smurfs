/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from "axios";
export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
  // when making async calls, you first dispatch a start action, then start the API call.
  dispatch({ type: FETCH_SMURFS_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({
        type: FETCH_SMURFS_SUCCESS,
        payload: res.data
      });
      console.log("lookie", res.data);
    })
    .catch(err => {
      dispatch({
        type: FETCH_SMURFS_FAILURE,
        payload: err
      });
    });
};

export const ADD_SMURF_START = "ADD_DATA_START";
export const ADD_SMURF_SUCCESS = "ADD_DATA_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_DATA_FAILURE";
export const addSmurf = newSmurf => dispatch => {
  console.log("newnew", newSmurf);
  dispatch({ type: ADD_SMURF_START });
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(res => {
      console.log("look", res);
      return dispatch({
        type: ADD_SMURF_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: ADD_SMURF_FAILURE, payload: err.response });
    });
};

export const DELETE_SMURF_START = "DELETE_SMURF_START";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";
export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURF_START });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      console.log("look", res);
      return dispatch({
        type: DELETE_SMURF_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: DELETE_SMURF_FAILURE, payload: err.response });
    });
};

export const UPDATE_SMURF_START = "UPDATE_SMURF_START";
export const UPDATE_SMURF_SUCCESS = "UPDATE_SMURF_SUCCESS";
export const UPDATE_SMURF_FAILURE = "UPDATE_SMURF_FAILURE";
export const updateSmurf = updatedSmurf => dispatch => {
  dispatch({ type: UPDATE_SMURF_START });
  axios
    .delete(`http://localhost:3333/smurfs/${updatedSmurf.id}`, updatedSmurf)
    .then(res => {
      console.log("look", res);
      return dispatch({
        type: UPDATE_SMURF_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: UPDATE_SMURF_FAILURE, payload: err.response });
    });
};
