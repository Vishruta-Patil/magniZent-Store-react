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
    cartQuantity: 0,
    priceDetails: {
      totalPrice: 0,
      actualPrice: 0,
    },
  };
  const [state, dispatch] = useReducer(wishlistReducer, initialValue);

  const cartSummary = (cartData) => {
    return cartData.reduce(
      (acc, curr) => ({
        ...acc,
        cartQuant: acc.cartQuant + curr.qty,
        totalPrice: acc.totalPrice + (curr.qty * curr.product_price),
        discountedPrice: acc.discountedPrice + (curr.qty * (curr.product_price * curr.product_offer) / 100),
        deliveryCharges: +acc.totalPrice > 3000 ? 49 : 0,
      }),
      { cartQuant: 0, 
        totalPrice: 0, 
        discountedPrice: 0,
        deliveryCharges: 0,
      }
    );
  };

  return (
    <WishlistContext.Provider
      value={{ state, dispatch, addToCart, cartQuantityHandler, cartSummary }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export { useWishList, WishlistProvider };
