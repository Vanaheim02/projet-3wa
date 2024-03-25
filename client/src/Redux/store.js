import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../Redux/action/user.action.js";


// ... autres définitions d'actions

const mapStateToProps = (state) => ({
  utilisateur: state.userReducer.utilisateur,
});

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch(loginUser(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps);
