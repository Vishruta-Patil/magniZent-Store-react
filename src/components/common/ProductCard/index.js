import axios from "axios";
import "./index.css";
import { useWishList } from "../../../context/wishlistContext";
import { addToCart, addToWishListHandler, deleteWishListHandler } from "../../../utils/handler";
import { useNavigate } from "react-router";
import { User } from "../../../context/userContext";

const ProductCard = ({ item, clickHandler, from, cartHandler }) => {
  const { state, dispatch } = useWishList();
  const navigate = useNavigate();

  const {loginStatus} = User()


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
    <div className="product-unit flex-column ">
      <img
        className="img-product justify-center"
        src={item.img_url}
        alt={item.img_name}
      />
      <div className="product-unit-header justify-between">
        <p className="name-product">{item.product_name}</p>
       
          {!inWishlist ? (
            <span className="material-icons wishlist-icon" onClick={() => addToWishListHandler({item}, dispatch, navigate)}> favorite </span>
          ) : (
            <span className="material-icons wishlist-active" onClick={() => deleteWishListHandler(dispatch, {item})}> favorite </span>
          )}
        
      </div>

      <p className="price">
        ₹{item.product_price}
        <span className="price-offer">{item.product_offer}% off</span>{" "}
        {item?.info?.ratings}
      </p>
      <div className="btn-container flex product-unit-btn-container">
        {!inCart ? (
          <button
            onClick={() => addToCart(loginStatus, item, dispatch, navigate)}
            className="hero-btn product-unit-btn flex-center"
            style={{ fontWeight: 400 }}
          >
            Add To Cart<span className="material-icons "> shopping_cart </span>
          </button>
        ) : (
          <button
            onClick={() => navigate("/cart")}
            className="outline-btn product-unit-btn flex-center"
            style={{ fontWeight: 400 }}
          >
            Go To Cart<span className="material-icons "> shopping_cart </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
// onClick={({item}) => console.log({item})}
