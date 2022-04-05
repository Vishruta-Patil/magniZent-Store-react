import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../reducer/wishlist/wishlistReducer";
import { addToCart } from "../utils/handler";
import { cartQuantityHandler } from "../utils/handler";

const WishlistContext = createContext(null);
const useWishList = () => useContext(WishlistContext);

const WishlistProvider = ({ children }) => {
  const initialValue = {
    wishListLoader: false,
    wishListData: [],
    wishListStatusClass: "wishlist-icon",
    cartData: [],
    cartQuantity:0,
    priceDetails: {
      totalPrice: 0,
      actualPrice: 0,
    },
  };
  const [state, dispatch] = useReducer(wishlistReducer, initialValue);



  return (
    <WishlistContext.Provider
      value={{ state, dispatch, addToCart, cartQuantityHandler }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export { useWishList, WishlistProvider };
