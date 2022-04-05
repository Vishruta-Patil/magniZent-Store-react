import axios from "axios";
import "./index.css";
import { useWishList } from "../../../context/wishlistContext";
import { addToCart, addToWishListHandler, deleteWishListHandler } from "../../../utils/handler";
import { useNavigate } from "react-router";

const ProductCard = ({ item, clickHandler, from, cartHandler }) => {
  const { state, dispatch } = useWishList();
  const navigate = useNavigate();


  const inCartHandler = (product) => {
    const isCart = state.cartData.find((item) => item._id === product._id);
    if (isCart) return true;
    else return false;
  };

  const inCart = inCartHandler(item);

  const inWishListHandler = (product) => {
    const isWishlist = state.wishListData.find(
      (item) => item._id === product._id
    );
    if (isWishlist) return true;
    else return false;
  };

  const inWishlist = inWishListHandler(item);

  return (
    <div class="product-unit flex-column ">
      <img
        class="img-product justify-center"
        src={item.img_url}
        alt={item.img_name}
      />
      <div class="product-unit-header justify-between">
        <p class="name-product">{item.product_name}</p>

        
          {!inWishlist ? (
            <span className="material-icons wishlist-icon" onClick={() => addToWishListHandler({item}, dispatch)}> favorite </span>
          ) : (
            <span className="material-icons wishlist-active" onClick={() => deleteWishListHandler(dispatch, {item})}> favorite </span>
          )}
        
      </div>

      <p class="price">
        ₹{item.product_price}
        <span class="price-offer">{item.product_offer} off</span>{" "}
        {item?.info?.ratings}
      </p>
      <div class="btn-container flex product-unit-btn-container">
        {!inCart ? (
          <button
            onClick={() => addToCart(item, dispatch)}
            className="hero-btn product-unit-btn flex-center"
            style={{ fontWeight: 400 }}
          >
            Add To Cart<span class="material-icons "> shopping_cart </span>
          </button>
        ) : (
          <button
            onClick={() => navigate("/cart")}
            className="outline-btn product-unit-btn flex-center"
            style={{ fontWeight: 400 }}
          >
            Go To Cart<span class="material-icons "> shopping_cart </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
// onClick={({item}) => console.log({item})}
