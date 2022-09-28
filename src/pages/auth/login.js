import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { User } from "../../context/userContext";
import { login } from "../../utils/handler";

export const LogIn = () => {
  const [credentails, setCredentials] = useState({email:"", password:""});
  const { authDispatch } = User();

  let navigate = useNavigate();
  let location = useLocation();

  const loginHandler = async (e) => {
    e.preventDefault()
     login(
      credentails.email,
      credentails.password,
      authDispatch,
      navigate,
      location
    );
  };

  const guestCredentailsHandler = async (e) => {
    e.preventDefault()
    setCredentials({email:"test123@gmail.com", password: "test123"})
    await login(
      "test123@gmail.com",
      "test123",
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
        value={credentails.email}
      />
      <input
        // type="password"
        className="input-box"
        placeholder="Enter your password"
        required
        onChange={(e) => {
          setCredentials({ ...credentails, password: e.target.value });
        }}
        value={credentails.password}
      />
      {/* <div className="terms-container flex">
        <input id="terms-input" type="checkbox" required />{" "}
        <label htmlFor="terms-input">
          I accept all the terms and conditions
        </label>
      </div> */}

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
