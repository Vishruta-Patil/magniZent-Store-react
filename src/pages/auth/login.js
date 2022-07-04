import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { User } from "../../context/userContext";
import { login } from "../../utils/handler";

export const LogIn = () => {
  const [credentails, setCredentials] = useState({});
  const { authDispatch } = User();

  let navigate = useNavigate();
  let location = useLocation();

  const loginHandler = async () => {
    await login(
      credentails.email,
      credentails.password,
      authDispatch,
      navigate,
      location
    );
  };

  const guestCredentailsHandler = async () => {
    await login(
      "adarshbalika@gmail.com",
      "adarshBalika123",
      authDispatch,
      navigate,
      location
    );
  };

  return (
    <form className="login-container flex-column">
      <h2 className="main-header">LOGIN</h2>
      <input
        type="email"
        className="input-box"
        placeholder="Enter your email"
        required
        onChange={(e) => {
          setCredentials({ ...credentails, email: e.target.value });
        }}
      />
      <input
        type="password"
        className="input-box"
        placeholder="Enter your password"
        required
        onChange={(e) => {
          setCredentials({ ...credentails, password: e.target.value });
        }}
      />
      <div className="terms-container flex">
        <input id="terms-input" type="checkbox" required />{" "}
        <label htmlFor="terms-input">
          I accept all the terms and conditions
        </label>
      </div>

      <button className="hero-btn" onClick={loginHandler}>
        Login
      </button>

      <button className="outline-btn" onClick={guestCredentailsHandler}>
        Login With Guest Credentials
      </button>
      <p className="gen-msg">
        Dont have an account,{" "}
        <Link className="primary-color" to="/signin">
          {" "}
          Sign In!
        </Link>
      </p>
    </form>
  );
};
