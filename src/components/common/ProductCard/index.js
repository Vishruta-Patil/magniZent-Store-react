import "./index.css"
const ProductCard = ({item}) => {
    return (
       
          <div class="product-unit flex-column ">
          <img class="img-product justify-center" src={item.img_url} alt={item.img_name}/>
            <div class="product-unit-header justify-between">
              <p class="name-product">{item.product_name}</p>
              <span class="material-icons wishlist-icon"> favorite </span>
            </div>

            {/* <p class="description-product">{item.product_desc}</p> */}
            <p class="price">₹{item.product_price}<span class="price-offer">{item.product_offer} off</span> {item?.info?.ratings}</p>
            <div class="btn-container flex product-unit-btn-container">
            <button class="hero-btn product-unit-btn">Buy Now</button>
            <button class="outline-btn product-unit-btn">Add To Cart</button>
            </div>
        </div>
        
    )
}

export default ProductCard