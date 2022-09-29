import {
  WISHLIST_LOADER,
  CART_DATA,
  CART_INCREMENT,
  CART_DECREMENT,
  GET_WISHLIST,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "./wishlistConstants";

export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case WISHLIST_LOADER:
      return {
        ...state,
        wishListLoader: !state.wishListLoader,
      };

    case GET_WISHLIST:
      return {
        ...state,
        wishListData: action.payload
      }
    case ADD_TO_WISHLIST:
      console.log("ADD TO THE WISHLIST")
      console.log(action.payload)
      return {
        ...state,
        wishListData: [...state.wishListData, action.payload]
      }
    case REMOVE_FROM_WISHLIST:
      console.log("REMOVE_FROM THE WISHLIST")
      return {
        ...state,
        wishListData: state.wishListData.filter(item => item.product._id !== action.payload)
      }

    case CART_DATA:
      return {
        ...state,
        cartData: action.payload,
      };

    case CART_INCREMENT:
      return {
        ...state,
        cartData: action.payload,
      };

    case CART_DECREMENT:
      return {
        ...state,
        cartData: action.payload,
      };
  }
};


