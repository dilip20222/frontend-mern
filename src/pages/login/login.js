import "./login.css";
import { useState } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { actions } from "../../redux/user/index";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
// import commonValidationHook from "../../customHook/commonHook";

const Login = (props) => {
  const [state, setState] = useState({ userName: "", password: "" });
  let navigate = useNavigate();
  const handleChange = (e) => {
    setState((preState) => ({ ...preState, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // commonValidationHook(state);
    console.log("agr", props);
    console.log("agr", navigate);
    // Todo Validation
    props.actions.loginSuccess({
      ...state,
      callback: () => navigate("/user/homePage"),
    });
  };

  return (
    <div>
      <div className="body" />
      <div className="grad" />
      <div className="header">
        <div>
          Site<span>Random</span>
        </div>
      </div>
      <br />
      <div className="login">
        <form action="" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Enter your username"
            name="userName"
            value={state.userName || ""}
          />
          <br />
          <input
            onChange={handleChange}
            type="password"
            placeholder="Enter your password"
            name="password"
            value={state.password || ""}
          />
          <br />
          <input type="button" defaultValue="Login" onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
};

const mapDispatchProps = (dispatch) => ({
  actions: { ...bindActionCreators(actions, dispatch) },
});

const mapStateProp = (state) => ({
  auth: state.auth,
});

export default connect(mapStateProp, mapDispatchProps)(Login);
