import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import ErrorNotice from "./ErrorNotice";
import { Auth } from './auth.js'
import '../css/App.css'

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginRes = await Axios.post(
        "http://localhost:5000/users/login",
        loginUser)
        .then(res =>{
          Auth.userName = res.data.displayName
          Auth.userLoged = true
          alert("Welcome " + Auth.userName)
          history.push("/");
          })
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };
  return (
    <div className="text-center" style={{"padding": "100px"}}>
      <p className="brandName">Cars+</p>
      <h1 class="h3 mb-3 font-weight-normal">Please login</h1>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <form className="form-signin" onSubmit={submit}>
        <label htmlFor="login-email" className="sr-only">Email</label>
        <input
          className="form-control"
          id="login-email"
          type="email"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="login-password" className="sr-only">Password</label>
        <input
          className="form-control"
          id="login-password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input class="btn btn-lg btn-primary btn-block" type="submit" value="Log in" />
      </form>
    </div>
  );
}
