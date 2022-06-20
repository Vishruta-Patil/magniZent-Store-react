import {
  deleteCartHandler,
  addToWishListHandler,
  deleteWishListHandler
} from "../../../utils/handler";
import { useWishList } from "../../../context/wishlistContext";
import { useNavigate } from "react-router";

export const HorizontalCard = ({ item }) => {
  const navigate = useNavigate()
  const { state, dispatch, cartQuantityHandler } = useWishList();

  const inWishListHandler = (product) => {
    const isWishlist = state.wishListData.find(
      (item) => item._id === product._id
    );
    if (isWishlist) return true;
    else return false;
  };

  const inWishlist = inWishListHandler(item);
  
  return (
    <div className="cart-display-container flex-column">
      <div className="item-container flex">
        <div className="product-img-container">
          <img className="product-img" src={item.img_url} alt={item.img_name} />
        </div>
        <div className="product-content-container flex-column">
          <div className="product-cart-title">{item.product_name}</div>
          <div className="price-tag flex">
            <div className="price-amount">₹{item.product_price}</div>
            <div className="duplicate-price-amount">₹3999</div>
          </div>
          <div className="price-offer-cart">{item.product_offer}% off</div>
          <div className="quantity-container flex">
            <p>Quantity:</p>
            <button
              className="quantity-btn"
              onClick={() => cartQuantityHandler(item, "increment", dispatch)}
            >
              +
            </button>
            <div className="quantity-input flex-center">{item.qty}</div>
            {item.qty > 1 ? (
              <button
                className="quantity-btn"
                onClick={() => cartQuantityHandler(item, "decrement", dispatch)}
              >
                -
              </button>
            ) : (
              <button
                className="quantity-btn"
                onClick={() => cartQuantityHandler(item, "decrement", dispatch)}
                disabled
              >
                -
              </button>
            ) }
          </div>
          <button
            className="hero-btn remove-cart-btn"
            onClick={() => deleteCartHandler(item, dispatch)}
          >
            Remove From Cart
          </button>
          
          {!inWishlist ? (
            <button
            className="outline-btn add-wishlist-btn"
            onClick={() => addToWishListHandler(item, dispatch, navigate)}
          >
            Add to Wishlist
          </button>
          ) : (
            <button
            className="outline-btn add-wishlist-btn"
            onClick={() => deleteWishListHandler(dispatch, {item})}
          >
            Delete to Wishlist
          </button>
            
          )}

        </div>
      </div>
    </div>
  );
};
