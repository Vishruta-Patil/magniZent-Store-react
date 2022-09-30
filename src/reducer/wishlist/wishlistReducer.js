import {
  WISHLIST_LOADER,
  CART_DATA,
  CART_INCREMENT,
  CART_DECREMENT,
  GET_WISHLIST,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  RESET_DATA,
  GET_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
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
        wishListData: action.payload,
      };
    case ADD_TO_WISHLIST:
      return {
        ...state,
        wishListData: [...state.wishListData, action.payload],
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishListData: state.wishListData.filter(
          (item) => item.product._id !== action.payload
        ),
      };

    case GET_CART:
      return {
        ...state,
        cartData: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cartData: [...state.cartData, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartData: state.cartData.filter(
          (item) => item.product._id !== action.payload
        ),
      };

    case CART_INCREMENT:
      const cart = state.cartData.map((item) =>
      (
       item.product._id === action.payload ?
       ({...item, "quantity": item.quantity + 1}) : ({...item, "quantity": item.quantity})
      ))
      return {
        ...state,
        cartData: cart,
      };

    case CART_DECREMENT:
      const cartDec = state.cartData.map((item) =>
      (
       item.product._id === action.payload ?
       ({...item, "quantity": item.quantity - 1}) : ({...item, "quantity": item.quantity})
      ))
      return {
        ...state,
        cartData: cartDec,
      };

    case RESET_DATA:
      return {
        ...state,
        wishListData: [],
        cartData: [],
        cartQuantity: 0,
        priceDetails: {
          totalPrice: 0,
          actualPrice: 0,
        },
      };
  }
};
