import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import ErrorNotice from "./ErrorNotice";
import '../css/App.css'
import { Auth } from './auth.js'

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [displayName, setDisplayName] = useState();
  const [error, setError] = useState();

  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const newUser = { email, password, passwordCheck, displayName };
      await Axios.post("http://localhost:5000/users/register", newUser)
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
    <div className="text-center">
      <p className="brandName">Cars+</p>
      <h1 class="h3 mb-3 font-weight-normal">Please Sign Up</h1>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <form className="form-signin" onSubmit={submit}>
        <label htmlFor="register-email"  className="sr-only">Email</label>
        <input
          className="form-control"
          id="register-email"
          type="email"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="register-password"  className="sr-only">Password</label>
        <input
          className="form-control"
          id="register-password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="form-control"
          type="password"
          placeholder="Verify Password"
          onChange={(e) => setPasswordCheck(e.target.value)}
        />

        <label htmlFor="register-display-name"  className="sr-only">Display name</label>
        <input
          className="form-control"
          id="register-display-name"
          type="text"
          placeholder="User Name"
          onChange={(e) => setDisplayName(e.target.value)}
        />

        <input type="submit" class="btn btn-lg btn-primary btn-block" value="Register" />
      </form>
    </div>
  );
}
