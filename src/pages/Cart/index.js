import axios from "axios";
import { useEffect } from "react";
import { CART_DATA, EMPTY_BAG } from "../../reducer/wishlist/wishlistConstants";
import { useWishList } from "../../context/wishlistContext";
import EmptyBag from "../../components/common/EmptyBag";
import { addToCart, getCartItems } from "../../utils/handler";
import Loader from "../../components/common/Loader";
import {HorizontalCard} from "../../components/common/HorizontalCard";
import { PriceDetails } from "../../components/Cart/priceDetails";

export const Cart = () => {
  const { state, dispatch, cartSummary } = useWishList();

  useEffect(() => getCartItems(dispatch), []);

  const cartQuantity = cartSummary(state.cartData)
  
  return (
    <div>
      {state.wishListLoader ? (
        <Loader />
      ) : (
        <div className="cart-hero-container">
         
          <h2 className="cart-main-header">My Cart ({cartQuantity.cartQuant})</h2>

          {cartQuantity.cartQuant === 0 ? (
            <EmptyBag name={"Cart"} img={EMPTY_BAG} />
          ) : (
            <div className="cart-management-box flex">
              <div className="cart-display-container flex-column">
                {state.cartData.map((item, index) => (
                  <HorizontalCard
                    item={item}
                    key={index}
                  />
                ))}
              </div>
              <PriceDetails />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
