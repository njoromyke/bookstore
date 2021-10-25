import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
function Login() {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const SignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, Password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        alert(error)
      });
    //some fancy firebase login shiiiiiiiiiiiiiiish........
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserwithEmailAndPassword(email, Password)
      .then((auth) => {
        //created a new user

        console.log(auth);
      })
      .catch((error) => alert(error.message));
    // do some fancy register firebase register shiiiiiiiiiiish..........
  };

  return (
    <div className="Login">
      <Link to="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_zbFfar-utTRNPwZAGiasY
            tMf9d7vejlcnQ&usqp=CAU"
          alt="logo"
        />
      </Link>
      <div className="Login__container">
        <h1>Sign in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={SignIn}
            className="Login__signInButton "
          >
            Sign In
          </button>
        </form>
        <p>
          By signing in you agree to VITABUU'S terms and conditions. Please see
          our privacy notice, our cookies notice and our interest based ads.
        </p>
        <button onClick={register} className="login__registerButton">
          Create New Account
        </button>
      </div>
    </div>
  );
}

export default Login;
