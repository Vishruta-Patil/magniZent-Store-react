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
import { toast } from "react-toastify";

const encodedtoken = localStorage.getItem("token");
const config = {
  headers: {
    authorization: localStorage.getItem("token"),
  },
};

// Auth
export const signInHandler = async (credentials, location, authDispatch, navigate) => {
  try {
    const response = await axios.post("/api/auth/signup", {
      email: credentials.email,
      password: credentials.password,
    });
    localStorage.setItem("token", response.data.encodedToken);
    authDispatch({type: LOGIN_STATUS}) 
    toast.success("Signed In Sucessfully!")
    navigate("/");
  } catch (err) {
    toast.error("Couldn't fetch User Account Data. Please try logging in again!");
  }
};

export const login = async (email, password, dispatch, navigate, location) => {
  try {
    const response = await axios.post("/api/auth/login", {
      email,
      password,
    });
    localStorage.setItem("token", response.data.encodedToken);
    navigate("/");
    dispatch({ type: LOGIN_STATUS });
    toast.success("Logged In Sucessfully!")
    // if (location.state) navigate(location.state?.from?.pathname);
  } catch (err) {
    console.log("Error: ", err.response.data);
  }
};

export const logOut = (authDispatch, navigate) => {
  localStorage.clear();
  authDispatch({ type: LOGIN_STATUS });
  navigate("/");
  // authDispatch({ type: USER_LOADING});
  // setTimeout(() => authDispatch({ type: USER_LOADING }), 500);
  toast.success("Logged out Sucessfully!")
};

export const addToCart = async (item, dispatch, navigate) => {
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
    toast.success("Added to Cart")
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


  // used on product listing page, to like/unlike the product in wishlist
  export const toggleWishlist = async (item, dispatch, navigate, setDisable, e, inWishlist) => {
    e.preventDefault();
    setDisable(true);
    try {
      const data = {
        product: item,
      };
      if (!localStorage.getItem("token")) navigate("/login");
      else {
        const response = !inWishlist
          ? await axios.post("/api/user/wishlist", data, {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          })
          : await axios.delete(`/api/user/wishlist/${item._id}`, {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          })

        dispatch({
          type: WISHLIST_DATA,
          payload: response.data.wishlist,
        });
        !inWishlist ? toast.success("Added to Wishlist") : toast.success("Deleted from Wishlist")
      }
    } catch (err) {
      console.log(err)
    } finally {
      setDisable(false);
    }
  };

  export const deleteWishListHandler = async (dispatch, item) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${item._id}`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      dispatch({ type: WISHLIST_DATA, payload: response.data.wishlist });
      toast.success("Deleted from Wishlist")
    } catch (err) {
      console.log("error:- " + err);
    } 
  };



export const addToWishListHandler = async ( item , dispatch, navigate) => {
  // doubt
  // e.preventDefault();
  // setWishlistLoader(true)
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
    toast.success("Added to wishlist")
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
    toast.success("Deleted from Cart")
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
