import axios from "axios";
import "./index.css";
import { useState } from "react";
import { useWishList } from "../../../context/wishlistContext";
import { deleteCartHandler, addToCart } from "../../../utils/handler";

const ProductCard = ({ item, clickHandler, from, cartHandler }) => {
  const [activeClass, setActiveClass] = useState("wishlist-icon");
  const { state, dispatch } = useWishList();

  const btnHandler = () => {
    // dispatch({type: WISHLIST_STATUS_CLASS})
    clickHandler({ item });
    if (activeClass === "wishlist-icon") {
      setActiveClass("wishlist-active");
    } else {
      setActiveClass("wishlist-icon");
    }
  };

  const inCartHandler = (product) => {
    const isCart = state.cartData.find((item) => item._id === product._id);
    if (isCart) return true;
    else return false;
  };

  const inCart = inCartHandler(item);

  return (
    <div class="product-unit flex-column ">
      <img
        class="img-product justify-center"
        src={item.img_url}
        alt={item.img_name}
      />
      <div class="product-unit-header justify-between">
        <p class="name-product">{item.product_name}</p>

        <button style={{ background: "none", padding: 0 }} onClick={btnHandler}>
          {
            from ? (
              <span class="material-icons wishlist-in-icon"> favorite </span>
            ) : (
              <span class={`material-icons ${activeClass}`}> favorite </span>
            ) //state.wishListStatusClass
          }
        </button>
      </div>

      {/* <p class="description-product">{item.product_desc}</p> */}
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
          onClick={() => deleteCartHandler(item, dispatch)}
            className="outline-btn product-unit-btn flex-center"
            style={{ fontWeight: 400 }}
          >
            Remove from Cart<span class="material-icons "> shopping_cart </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
// onClick={({item}) => console.log({item})}
