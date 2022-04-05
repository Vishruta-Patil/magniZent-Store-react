import { useWishList } from "../../context/wishlistContext";

export const PriceDetails = () => {
    const {state} = useWishList()
    const cartQuantity = state.cartData.length + state.cartQuantity
   
  return (
    <div class="price-details-container flex-column">
      <div class="price-details-header">Price Details</div>
      <hr class="rg-line" />
      <div class="price-calculation flex-column secondary-color">
        <div class="total-price-item justify-between">
          <p>{`Price (${state.cartData.length} items):`} </p>
          <p>₹{state.priceDetails.totalPrice}</p>
        </div>
        <div class="discount justify-between">
          <p>Discount: </p>
          <p>- ₹5000</p>
        </div>
        <div class="delivery-charges justify-between">
          <p>Delivery charges: </p>
          <p>₹0</p>
        </div>
      </div>
      <hr class="rg-line" />
      <div class="total-amount-box black-color justify-between">
        <p class="total-amount">Total Amount</p>
        <p>₹5000</p>
      </div>
      <hr class="rg-line" />
      <p class="gen-msg">You will save ₹1200 on this order</p>
      <button class="hero-btn place-order-btn">Place this order</button>
    </div>
  );
};
