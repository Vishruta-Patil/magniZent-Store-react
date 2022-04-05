import {
  deleteCartHandler,
  addToWishListHandler,
} from "../../../utils/handler";
import { useWishList } from "../../../context/wishlistContext";

export const HorizontalCard = ({ item }) => {
  const { state, dispatch, cartQuantityHandler } = useWishList();
  return (
    <div class="cart-display-container flex-column">
      <div class="item-container flex">
        <div class="product-img-container">
          <img class="product-img" src={item.img_url} alt={item.img_name} />
        </div>
        <div class="product-content-container flex-column">
          <div class="product-cart-title">{item.product_name}</div>
          <div class="price-tag flex">
            <div class="price-amount">₹{item.product_price}</div>
            <div class="duplicate-price-amount">₹3999</div>
          </div>
          <div class="price-offer-cart">{item.product_offer} off</div>
          <div class="quantity-container flex">
            <p>Quantity:</p>
            <button
              class="quantity-btn"
              onClick={() => cartQuantityHandler(item, "increment", dispatch)}
            >
              +
            </button>
            <div class="quantity-input flex-center">{item.qty}</div>
            {item.qty > 1 ? (
              <button
                class="quantity-btn"
                onClick={() => cartQuantityHandler(item, "decrement", dispatch)}
              >
                -
              </button>
            ) : (
              <button
                class="quantity-btn"
                onClick={() => cartQuantityHandler(item, "decrement", dispatch)}
                disabled
              >
                -
              </button>
            ) }
          </div>
          <button
            class="hero-btn remove-cart-btn"
            onClick={() => deleteCartHandler(item, dispatch)}
          >
            Remove From Cart
          </button>
          <button
            class="outline-btn add-wishlist-btn"
            onClick={() => addToWishListHandler({ item })}
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};
