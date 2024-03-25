import React from "react";
import { connect } from "react-redux";

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export function loginUser(username, password) {
  return {
    type: LOGIN,
    payload: {
      username,
      password,
    },
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      user,
    },
  };
}

export function loginFailed(error) {
  return {
    type: LOGIN_FAILED,
    payload: {
      error,
    },
  };
}

const mapStateToProps = (state) => ({
  utilisateur: state.userReducer.utilisateur,
});

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch(loginUser(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps);