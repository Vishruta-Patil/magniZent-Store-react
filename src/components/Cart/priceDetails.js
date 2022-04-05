import { useWishList } from "../../context/wishlistContext";

export const PriceDetails = () => {
    const {state, cartSummary} = useWishList()
    const cartDetails = cartSummary(state.cartData)
   
  return (
    <div class="price-details-container flex-column">
      <div class="price-details-header">Price Details</div>
      <hr class="rg-line" />
      <div class="price-calculation flex-column secondary-color">
        <div class="total-price-item justify-between">
          <p>{`Price (${cartDetails.cartQuant} items):`} </p>
          <p>₹{(cartDetails.totalPrice + cartDetails.discountedPrice).toFixed(2)}</p>
        </div>
        <div class="discount justify-between">
          <p>Discount: </p>
          <p>- ₹ {(cartDetails.discountedPrice).toFixed(2)}</p>
        </div>
        <div class="delivery-charges justify-between">
          <p>Delivery charges: </p>
          <p>₹ {cartDetails.deliveryCharges}</p>
        </div>
      </div>
      <hr class="rg-line" />
      <div class="total-amount-box black-color justify-between">
        <p class="total-amount">Total Amount</p>
        <p>₹{(cartDetails.totalPrice + cartDetails.deliveryCharges).toFixed(2)}</p>
      </div>
      <hr class="rg-line" />
      <p class="gen-msg">You will save ₹ {(cartDetails.discountedPrice - cartDetails.deliveryCharges).toFixed(2)} on this order</p>
      <button class="hero-btn place-order-btn">Place this order</button>
    </div>
  );
};
