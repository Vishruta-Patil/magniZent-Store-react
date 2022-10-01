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
    const isWishlist = state?.wishListData?.find(
      (item) => item.product._id === product._id
    );
    if (isWishlist) return true;
    else return false;
  };

  const inWishlist = inWishListHandler(item?.product);
  
  return (
    <div className="cart-display-container flex-column">
      <div className="item-container flex">
        <div className="product-img-container">
          <img className="product-img" src={item?.product?.img_url} alt={item?.product?.img_name} />
        </div>
        <div className="product-content-container flex-column">
          <div className="product-cart-title">{item?.product?.product_name}</div>
          <div className="price-tag flex">
            <div className="price-amount">₹{item?.product?.product_price}</div>
            <div className="duplicate-price-amount">₹3999</div>
          </div>
          <div className="price-offer-cart">{item?.product?.product_offer}% off</div>
          <div className="quantity-container flex">
            <p>Quantity:</p>
            <button
              className="quantity-btn"
              onClick={() => cartQuantityHandler(item, "INCREMENT", dispatch)}
            >
              +
            </button>
            <div className="quantity-input flex-center">{item.quantity}</div>
            {item.quantity > 1 ? (
              <button
                className="quantity-btn"
                onClick={() => cartQuantityHandler(item, "DECREMENT", dispatch)}
              >
                -
              </button>
            ) : (
              <button
                className="quantity-btn"
                onClick={() => cartQuantityHandler(item, "INCREMENT", dispatch)}
                disabled
              >
                -
              </button>
            ) }
          </div>
          <button
            className="hero-btn remove-cart-btn"
            onClick={() => deleteCartHandler(item.product, dispatch)}
          >
            Remove From Cart
          </button>
          
          {!inWishlist ? (
            <button
            className="outline-btn add-wishlist-btn"
            onClick={() => addToWishListHandler(item.product._id, dispatch, navigate)}
          >
            Add to Wishlist
          </button>
          ) : (
            <button
            className="outline-btn add-wishlist-btn"
            onClick={() => deleteWishListHandler(dispatch, item.product?._id)}
          >
            Delete from Wishlist
          </button>
            
          )}

        </div>
      </div>
    </div>
  );
};
