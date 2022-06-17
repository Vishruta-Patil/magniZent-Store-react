import axios from "axios";
import {
  WISHLIST_LOADER,
  CART_DATA,
  WISHLIST_DATA,
  CART_INCREMENT,
  CART_DECREMENT,
} from "../reducer/wishlist/wishlistConstants";
import {
  PRODUCT_LIST_DATA,
  LOADING_SPINNER,
  GET_SINGLE_PRODUCT_DATA,
} from "../reducer/productList/productConstants";
import { USER_LOADING, LOGIN_STATUS } from "../reducer/user/userConstants";

const encodedtoken = localStorage.getItem("token");
const config = {
  headers: {
    authorization: localStorage.getItem("token"),
  },
};

// Auth
export const login = async (email, password, dispatch, navigate) => {
  try {
    const response = await axios.post("/api/auth/login", {
      email,
      password,
    });
    localStorage.setItem("token", response.data.encodedToken);
    navigate("/");
    dispatch({ type: USER_LOADING });
    dispatch({ type: LOGIN_STATUS });
    setTimeout(() => dispatch({ type: USER_LOADING }), 1000);
  } catch (err) {
    console.log("Error: ", err.response.data);
  }
};

export const addToCart = async (loginStatus, item, dispatch, navigate) => {
  console.log("not working")
  try {
    if(!localStorage.getItem("token")) {
      navigate("/login")
    }
    const data = {
      product: item,
    };
    const response = await axios.post("/api/user/cart", data, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    dispatch({ type: CART_DATA, payload: response?.data?.cart });
  } catch (err) {
    console.log("error: " + err.response.data);
  }
};

// Product List
export const getProductList = async (dispatch) => {
  dispatch({ type: LOADING_SPINNER });
  try {
    const response = await axios.get("/api/products");
    dispatch({ type: LOADING_SPINNER });
    dispatch({ type: PRODUCT_LIST_DATA, payload: response.data.products });
  } catch (err) {
    dispatch({ type: LOADING_SPINNER });
    console.log("error: ", err);
  }
};

export const getSingleProduct = async(id, dispatch) => {
  try {
    const response = await axios.get(`/api/products/${id}`)
    dispatch({type: GET_SINGLE_PRODUCT_DATA, payload: response.data.product})
    console.log(response)
  } catch(err) {
    console.log(err)
  }
}

// Wishlist
export const getWishlistItems = async (dispatch) => {
  dispatch({ type: WISHLIST_LOADER });
  try {
    const response = await axios.get("/api/user/wishlist", {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    dispatch({ type: WISHLIST_LOADER });
    dispatch({ type: WISHLIST_DATA, payload: response.data.wishlist });
  } catch (err) {
    dispatch({ type: WISHLIST_LOADER });
    console.log("error: ", err);
  }
};

export const addToWishListHandler = async ({ item }, dispatch, navigate) => {
  try {
    if(!localStorage.getItem("token")) {
      navigate("/login")
    }
    const data = {
      product: item,
    };
    const response = await axios.post("/api/user/wishlist", data, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    dispatch({ type: WISHLIST_DATA, payload: response.data.wishlist });
  } catch (err) {
    console.log("error:- " + err);
  }
};

export const deleteWishListHandler = async (dispatch, { item }) => {
  console.log("yui" + encodedtoken)
  try {
    console.log("In wishlist delete")
    const response = await axios.delete(`/api/user/wishlist/${item._id}`, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    dispatch({ type: WISHLIST_DATA, payload: response.data.wishlist });
  } catch (err) {
    console.log("error:- " + err);
  }
};

// Cart
export const getCartItems = async (dispatch) => {
  dispatch({ type: WISHLIST_LOADER });
  try {
    const response = await axios.get("/api/user/cart", {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    dispatch({ type: WISHLIST_LOADER });
    dispatch({ type: CART_DATA, payload: response.data.cart });
  } catch (err) {
    dispatch({ type: WISHLIST_LOADER });
    console.log("error: ", err);
  }
};

export const deleteCartHandler = async (item, dispatch) => {
  try {
    const response = await axios.delete(`/api/user/cart/${item?._id}`, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    dispatch({ type: CART_DATA, payload: response?.data?.cart });
  } catch (err) {
    console.log("error: " + err);
  }
};

export const cartQuantityHandler = async (item, actionType, dispatch) => {
  try {
    const { data } = await axios.post(
      `/api/user/cart/${item?._id}`,
      { action: { type: actionType } },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    const { cart } = data;
    dispatch(
      actionType === "increment"
        ? { type: CART_INCREMENT, payload: cart }
        : { type: CART_DECREMENT, payload: cart }
    );
  } catch (err) {
    console.log("error: " + err);
  }
};
