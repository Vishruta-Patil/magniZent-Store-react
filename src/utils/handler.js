import axios from "axios";
import {
  WISHLIST_LOADER,
  CART_DATA,
  CART_INCREMENT,
  CART_DECREMENT,
  GET_WISHLIST,
  REMOVE_FROM_WISHLIST,
  ADD_TO_WISHLIST,
  RESET_DATA,
} from "../reducer/wishlist/wishlistConstants";
import {
  PRODUCT_LIST_DATA,
  LOADING_SPINNER,
  GET_SINGLE_PRODUCT_DATA,
} from "../reducer/productList/productConstants";
import { USER_LOADING, LOGIN_STATUS } from "../reducer/user/userConstants";
import { toast } from "react-toastify";

// Auth
export const signInHandler = async (
  credentials,
  location,
  authDispatch,
  navigate
) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_ENDPOINT}/signin`,
      {
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }
    );
    navigate("/");
    localStorage.setItem("token", response.data.token);
    authDispatch({ type: LOGIN_STATUS });
    toast.success("Signed In Sucessfully!");
  } catch (err) {
    console.log(err.response);
    toast.error(
      "Couldn't fetch User Account Data. Please try logging in again!"
    );
  }
};

export const login = async (email, password, dispatch, navigate, location) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_ENDPOINT}/login`,
      {
        email,
        password,
      }
    );
    localStorage.setItem("token", response.data.token);
    navigate("/");
    dispatch({ type: LOGIN_STATUS });
    toast.success("Logged In Sucessfully!");
  } catch (err) {
    console.log("Error: ", err?.response);
  }
};

export const logOut = (authDispatch, navigate, dispatch) => {
  localStorage.clear();
  authDispatch({ type: LOGIN_STATUS });
  navigate("/");
  dispatch({type: RESET_DATA})
  // authDispatch({ type: USER_LOADING});
  // setTimeout(() => authDispatch({ type: USER_LOADING }), 500);
  toast.success("Logged out Sucessfully!");
};

export const addToCart = async (item, dispatch, navigate) => {
  try {
    if (!localStorage.getItem("token")) {
      navigate("/login");
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
    toast.success("Added to Cart");
  } catch (err) {
    console.log("error: " + err.response.data);
  }
};

// Product List
export const getProductList = async (dispatch) => {
  dispatch({ type: LOADING_SPINNER });
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}/products`
    );
    dispatch({ type: LOADING_SPINNER });
    dispatch({ type: PRODUCT_LIST_DATA, payload: response.data.products });
  } catch (err) {
    dispatch({ type: LOADING_SPINNER });
    console.log("error: ", err.message);
  }
};

export const getSingleProduct = async (id, dispatch) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}/products/${id}`
    );
    dispatch({ type: GET_SINGLE_PRODUCT_DATA, payload: response.data.product });
  } catch (err) {
    console.log(err);
  }
};

// Wishlist
export const getWishlistItems = async (dispatch) => {
  dispatch({ type: WISHLIST_LOADER });
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}/wishlist`,
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    dispatch({ type: WISHLIST_LOADER });
    dispatch({ type: GET_WISHLIST, payload: response.data.wishlist });
  } catch (err) {
    dispatch({ type: WISHLIST_LOADER });
    console.log("error: ", err);
  }
};

// used on product listing page, to like/unlike the product in wishlist
export const toggleWishlist = async (
  productId,
  dispatch,
  navigate,
  setDisable,
  e,
  inWishlist
) => {
  console.log(localStorage.getItem("token"));
  e.preventDefault();
  setDisable(true);
  try {
    const data = {
      productId,
    };
    if (!localStorage.getItem("token")) navigate("/login");
    else {
      const response = !inWishlist
        ? await axios.post(
            `${process.env.REACT_APP_API_ENDPOINT}/wishlist`,
            data,
            {
              headers: {
                token: localStorage.getItem("token"),
              },
            }
          )
        : await axios.delete(
            `${process.env.REACT_APP_API_ENDPOINT}/wishlist/${productId}`,
            {
              headers: {
                token: localStorage.getItem("token"),
              },
            }
          );

          console.log(inWishlist)
      !inWishlist
        ? dispatch({ type: ADD_TO_WISHLIST, payload: response.data.wishlist })
        : dispatch({ type: REMOVE_FROM_WISHLIST, payload: productId });
      !inWishlist
        ? toast.success("Added to Wishlist")
        : toast.success("Removed from Wishlist");
      console.log(response);
    }
  } catch (err) {
    console.log(err);
  } finally {
    setDisable(false);
  }
};

export const deleteWishListHandler = async (dispatch, item) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_ENDPOINT}/wishlist/${productId}`,
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    dispatch({ type: REMOVE_FROM_WISHLIST, payload: productId });
    toast.success("Removed from Wishlist");
  } catch (err) {
    console.log("error:- " + err);
  }
};

export const addToWishListHandler = async (productId, dispatch, navigate) => {
  // doubt
  // e.preventDefault();
  // setWishlistLoader(true)
  try {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
    const data = {
      productId,
    };
    const response = await axios.post(
      `${process.env.REACT_APP_API_ENDPOINT}/wishlist`,
      data,
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    dispatch({ type: ADD_TO_WISHLIST, payload: response.data.wishlist })
    toast.success("Added to wishlist");
  } catch (err) {
    console.log("error:- " + err);
  }
  // finally {
  //   setWishlistLoader(false)
  // }
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
    toast.success("Deleted from Cart");
  } catch (err) {
    console.log("error: " + err.message);
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
