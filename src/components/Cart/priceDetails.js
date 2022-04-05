import { useWishList } from "../../context/wishlistContext";

export const PriceDetails = () => {
    const {state, cartSummary} = useWishList()
    const cartDetails = cartSummary(state.cartData)
   
  return (
    <div className="price-details-container flex-column">
      <div className="price-details-header">Price Details</div>
      <hr className="rg-line" />
      <div className="price-calculation flex-column secondary-color">
        <div className="total-price-item justify-between">
          <p>{`Price (${cartDetails.cartQuant} items):`} </p>
          <p>₹{(cartDetails.totalPrice + cartDetails.discountedPrice).toFixed(2)}</p>
        </div>
        <div className="discount justify-between">
          <p>Discount: </p>
          <p>- ₹ {(cartDetails.discountedPrice).toFixed(2)}</p>
        </div>
        <div className="delivery-charges justify-between">
          <p>Delivery charges: </p>
          <p>₹ {cartDetails.deliveryCharges}</p>
        </div>
      </div>
      <hr className="rg-line" />
      <div className="total-amount-box black-color justify-between">
        <p className="total-amount">Total Amount</p>
        <p>₹{(cartDetails.totalPrice + cartDetails.deliveryCharges).toFixed(2)}</p>
      </div>
      <hr className="rg-line" />
      <p className="gen-msg">You will save ₹ {(cartDetails.discountedPrice - cartDetails.deliveryCharges).toFixed(2)} on this order</p>
      <button className="hero-btn place-order-btn">Place this order</button>
    </div>
  );
};
