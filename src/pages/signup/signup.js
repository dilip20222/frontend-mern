import { useState } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { actions } from "../../redux/user";
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';

const SingUp = (props) => {
  const [state, setState] = useState({
    name: "test",
    userName: "test43",
    DOB: "27/2/2022",
    password: "12345678",
    email: "test31@gmail.com",
    number: "123456789",
  });
  const navigate = useNavigate()
  const handleChange = (e) => {
    setState((preState) => ({ ...preState, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Work", state);
    props.actions.signUpSucceess({...state, callback: ()=> navigate('/user/homePage')})
    setState({
      name: "",
      email: "",
      contact: "",
      userName: "",
      DOB: "",
      password: "",
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
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Enter your Name"
            name="name"
            value={state.name || ""}
          />
          <input
            onChange={handleChange}
            type="text"
            placeholder="Enter your userName"
            name="userName"
            value={state.userName || ""}
          />
          <input
            onChange={handleChange}
            type="date"
            placeholder="Enter your DOB"
            name="DOB"
            value={state.DOB || ""}
          />
          <input
            onChange={handleChange}
            type="number"
            placeholder="Enter your contact"
            name="contact"
            value={state.contact || ""}
          />
          <input
            onChange={handleChange}
            type="email"
            placeholder="Enter your email"
            name="email"
            value={state.email || ""}
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
          <input type="button" defaultValue="SignUp" onClick={handleSubmit} />
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
export default connect(mapStateProp, mapDispatchProps)(SingUp);
