import axios from "axios";
import "./index.css";
import { useState } from "react";
import { useWishList } from "../../../context/wishlistContext";
import { WISHLIST_STATUS_CLASS } from "../../../reducer/wishlist/wishlistConstants";

const ProductCard = ({ item, clickHandler, from }) => {
  const [activeClass, setActiveClass] = useState("wishlist-icon")
  const {state, dispatch} = useWishList()

  const btnHandler = () => {
    // dispatch({type: WISHLIST_STATUS_CLASS})
    clickHandler({ item })
    if(activeClass ==="wishlist-icon") {
      setActiveClass("wishlist-active")
    } else {
      setActiveClass("wishlist-icon")
    }
  }
  return (
    <div class="product-unit flex-column ">
      <img
        class="img-product justify-center"
        src={item.img_url}
        alt={item.img_name}
      />
      <div class="product-unit-header justify-between">
        <p class="name-product">{item.product_name}</p>
        
        <button
          style={{ background: "none", padding: 0}}
          onClick={btnHandler}
        >
          {from ?
          <span class="material-icons wishlist-in-icon"> favorite </span>
          :  <span class={`material-icons ${activeClass}`}> favorite </span> //state.wishListStatusClass
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
        <button class="hero-btn product-unit-btn">Buy Now</button>
        <button class="outline-btn product-unit-btn">Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
