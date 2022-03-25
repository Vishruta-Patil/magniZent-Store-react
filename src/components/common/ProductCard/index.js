import axios from "axios";
import "./index.css";

const ProductCard = ({ item, clickHandler }) => {
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
          style={{ background: "none" }}
          onClick={() => clickHandler({ item })}
        >
          <span class="material-icons wishlist-icon"> favorite </span>
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
