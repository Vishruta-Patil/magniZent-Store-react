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
} from "../reducer/productList/productConstants";
import { USER_LOADING, LOGIN_STATUS } from "../reducer/user/userConstants";

const encodedtoken = localStorage.getItem("token");
const config = {
  headers: {
    authorization: encodedtoken,
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
    dispatch({type: LOGIN_STATUS})
    setTimeout(() => dispatch({ type: USER_LOADING }), 1000);
  } catch (err) {
    console.log("Error: ", err);
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


// Wishlist
export const getWishlistItems = async (dispatch) => {
  dispatch({ type: WISHLIST_LOADER });
  try {
    const response = await axios.get("/api/user/wishlist", config);
    dispatch({ type: WISHLIST_LOADER });
    dispatch({ type: WISHLIST_DATA, payload: response.data.wishlist });
  } catch (err) {
    dispatch({ type: WISHLIST_LOADER });
    console.log("error: ", err);
  }
};

export const addToWishListHandler = async ({ item }, dispatch) => {
  try {
    const data = {
      product: item,
    };
    const response = await axios.post("/api/user/wishlist", data, config);
    dispatch({ type: WISHLIST_DATA, payload: response.data.wishlist });
  } catch (err) {
    console.log("error:- " + err);
  }
};

export const deleteWishListHandler = async (dispatch, { item }) => {
  try {
    const response = await axios.delete(
      `/api/user/wishlist/${item._id}`,
      config
    )
    dispatch({ type: WISHLIST_DATA, payload: response.data.wishlist });
  } catch (err) {
    console.log("error:- " + err);
  }
};


// Cart
export const getCartItems = async (dispatch) => {
  dispatch({ type: WISHLIST_LOADER });
  try {
    const response = await axios.get("/api/user/cart", config);
    dispatch({ type: WISHLIST_LOADER });
    dispatch({ type: CART_DATA, payload: response.data.cart });
  } catch (err) {
    dispatch({ type: WISHLIST_LOADER });
    console.log("error: ", err);
  }
};

export const addToCart = async (item,dispatch) => {
  try {
  const data = {
    product: item
  }
    const response = await axios.post("/api/user/cart", data, config)
    dispatch({ type: CART_DATA, payload: response?.data?.cart });
  } catch(err) {

    console.log("error: " + err)
  }
}

export const deleteCartHandler = async (item, dispatch) => {
  try {
    const response = await axios.delete(`/api/user/cart/${item?._id}`, config)
    dispatch({ type: CART_DATA, payload: response?.data?.cart })
  } catch(err) {
    console.log("error: " + err)
  }
}

export const cartQuantityHandler = async(item, actionType, dispatch) => {
  try {
    const {data} = await axios.post(`/api/user/cart/${item?._id}`, { action: { type: actionType }}, config)
    const {cart} = data
    dispatch(actionType === "increment" ? {type: CART_INCREMENT, payload: cart} :  {type: CART_DECREMENT, payload: cart})
  } catch(err) {
    console.log("error: " + err)
  }
}

