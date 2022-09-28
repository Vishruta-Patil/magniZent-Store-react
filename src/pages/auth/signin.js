import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router";
import { User } from "../../context/userContext";
import { USER_LOADING, LOGIN_STATUS } from "../../reducer/user/userConstants";
import { signInHandler } from "../../utils/handler";

export const SignIn = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const { authDispatch } = User();

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <form className="login-container signin-container flex-column">
      <h2 className="main-header">REGISTER</h2>
      <p className="top-msg gen-msg">
        Looks like you are new!! Please fill in the information below.
      </p>
      <input
        type="text"
        className="input-box"
        placeholder="Enter your name"
        required
        onChange={(e) =>
          setCredentials({ ...credentials, name: e.target.value })
        }
      />
      <input
        type="email"
        className="input-box"
        placeholder="Enter your email"
        required
        onChange={(e) =>
          setCredentials({ ...credentials, email: e.target.value })
        }
      />
      <input
        type="password"
        className="input-box"
        placeholder="Enter your password"
        required
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      {/* <input
          type="password"
          className="input-box"
          placeholder="Confirm your password"
        /> */}

      {/* <div className="terms-container flex">
        <input id="terms-input" type="checkbox" required />{" "}
        <label htmlFor="terms-input">
          I accept all the terms and conditions
        </label>
      </div> */}

      <button
        className="hero-btn"
        onClick={(e) => {
          e.preventDefault();
          signInHandler(credentials, location, authDispatch, navigate);
        }}
      >
        Sign In
      </button>
      <p className="gen-msg">
        Already have an account?{" "}
        <Link className="primary-color" to="/login">
          {" "}
          Log In!
        </Link>
      </p>
    </form>
  );
};
