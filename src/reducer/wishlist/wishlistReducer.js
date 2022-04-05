import {
  WISHLIST_LOADER,
  WISHLIST_DATA,
  WISHLIST_STATUS_CLASS,
  CART_DATA,
  CART_INCREMENT,
  CART_DECREMENT,
  TOTAL_PRICE,
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
    case WISHLIST_STATUS_CLASS:
      return {
        ...state,
        wishListStatusClass:
          state.wishListStatusClass === "wishlist-icon"
            ? "wishlist-active"
            : "wishlist-icon",
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

      case TOTAL_PRICE:
        return {
          ...state,   
          priceDetails: {
            ...state.priceDetails,
            totalPrice: action.payload + state.priceDetails.totalPrice,
            totalQuantity: action.quantity + state.priceDetails.totalQuantit
          }
        }
      
      case "CART_QUANTITY":
        return {
          ...state,
          cartQuantity: action.payload
      }
  }
};


