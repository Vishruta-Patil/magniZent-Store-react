import {
  WISHLIST_LOADER,
  WISHLIST_DATA,

  CART_DATA,
  CART_INCREMENT,
  CART_DECREMENT,
} from "./wishlistConstants";

export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case WISHLIST_LOADER:
      return {
        ...state,
        wishListLoader: !state.wishListLoader,
      };
    case WISHLIST_DATA:
      return {
        ...state,
        wishListData: action.payload,
      };

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


