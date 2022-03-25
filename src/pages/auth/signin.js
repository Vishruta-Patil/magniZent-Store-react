import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { User } from "../../context/userContext";
import { USER_LOADING, LOGIN_STATUS } from "../../reducer/user/userConstants"

export const SignIn = () => {
  let navigate = useNavigate();
  const { state, dispatch } = User();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const signInHandler = async () => {
    try {
      const response = await axios.post("/api/auth/signup", {
        email: credentials.email,
        password: credentials.password,
      });
      localStorage.setItem("token", response.data.encodedToken);
      navigate("/");
      dispatch({type: USER_LOADING})
      dispatch({type: LOGIN_STATUS})
       setTimeout(() => dispatch({type: USER_LOADING}), 500)
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  return (
    <div class="login-container signin-container flex-column">
      <h2 class="main-header">REGISTER</h2>
      <p class="top-msg gen-msg">
        Looks like you are new!! Please fill in the information below.
      </p>
      {/* <input type="text" class="input-box" placeholder="Enter your name" /> */}
      <input
        type="email"
        class="input-box"
        placeholder="Enter your email"
        onChange={(e) =>
          setCredentials({ ...credentials, email: e.target.value })
        }
      />
      <input
        type="password"
        class="input-box"
        placeholder="Enter your password"
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      {/* <input
          type="password"
          class="input-box"
          placeholder="Confirm your password"
        /> */}

      <div class="terms-container flex">
        <input id="terms-input" type="checkbox" />{" "}
        <label for="terms-input">I accept all the terms and conditions</label>
      </div>

      <button class="hero-btn" onClick={signInHandler}>
        Sign In
      </button>
      <p class="gen-msg">
        Already have an account?{" "}
        <Link class="primary-color" to="/login">
          {" "}
          Log In!
        </Link>
      </p>
    </div>
  );
};
