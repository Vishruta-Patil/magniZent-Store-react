import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useProductList } from "../../context/productListContext";
import { User } from "../../context/userContext";
import { USER_LOADING, LOGIN_STATUS } from "../../reducer/user/userConstants";

export const LogIn = () => {
  const [credentails, setCredentials] = useState({});
  const { state, dispatch } = User();

  let navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.encodedToken);
      navigate("/");
      dispatch({ type: USER_LOADING });
      dispatch({type: LOGIN_STATUS})
      setTimeout(() => dispatch({ type: USER_LOADING }), 1000);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const loginHandler = async () => {
    await login(credentails.email, credentails.password);
  };

  const guestCredentailsHandler = async () => {
    await login("adarshbalika@gmail.com", "adarshBalika123");
  };

  return (
    <div class="login-container flex-column">
      <h2 class="main-header">LOGIN</h2>
      <input
        type="email"
        class="input-box"
        placeholder="Enter your email"
        onChange={(e) => {
          setCredentials({ ...credentails, email: e.target.value });
        }}
      />
      <input
        type="password"
        class="input-box"
        placeholder="Enter your password"
        onChange={(e) => {
          setCredentials({ ...credentails, password: e.target.value });
        }}
      />
      <div class="terms-container flex">
        <input id="terms-input" type="checkbox" />{" "}
        <label htmlFor="terms-input">I accept all the terms and conditions</label>
      </div>

      <button class="hero-btn" onClick={loginHandler}>
        Login
      </button>
      <button class="outline-btn" onClick={guestCredentailsHandler}>
        Login With Guest Credentials
      </button>
      <p class="gen-msg">
        Dont have an account,{" "}
        <Link class="primary-color" to="/signin">
          {" "}
          Sign In!
        </Link>
      </p>
    </div>
  );
};
