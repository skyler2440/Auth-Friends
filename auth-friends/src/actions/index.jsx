import { axiosWithAuth } from "../utils/axiosWithAuth";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const POST_DATA_START = "POST__START";
export const POST_DATA_SUCCESS = "POST__SUCCESS";
export const POST_DATA_FAIL = "POST__FAIL";
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";

export const signIn = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuth()
    .post("/login", credentials)
    .then(res => {
      console.log("login res", res.data.payload);
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("error response login", err.response);
    });
};
export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  return axiosWithAuth()
    .get("/friends")
    .then(res => {
      console.log("DATA res", res.data);
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("error response data", err);
    });
};
