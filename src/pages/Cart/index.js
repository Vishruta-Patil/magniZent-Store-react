import axios from "axios";
import { useEffect } from "react";
import { CART_DATA } from "../../reducer/wishlist/wishlistConstants";
import { useWishList } from "../../context/wishlistContext";
import EmptyBag from "../../components/common/EmptyBag";
import emptyCart from "../../assets/emptyCart.svg";
import { addToCart, getCartItems } from "../../utils/handler";
import Loader from "../../components/common/Loader";
import {HorizontalCard} from "../../components/common/HorizontalCard";
import { PriceDetails } from "../../components/Cart/priceDetails";

export const Cart = () => {
  const { state, dispatch, cartSummary } = useWishList();

  useEffect(() => getCartItems(dispatch), []);

  const cartQuantity = cartSummary(state.cartData)
    console.log(cartQuantity)
  
  return (
    <div>
      {state.wishListLoader ? (
        <Loader />
      ) : (
        <div class="cart-hero-container">
         
          <h2 class="cart-main-header">My Cart ({cartQuantity.cartQuant})</h2>

          {cartQuantity.cartQuant === 0 ? (
            <EmptyBag name={"Cart"} img={emptyCart} />
          ) : (
            <div class="cart-management-box flex">
              <div class="cart-display-container flex-column">
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
