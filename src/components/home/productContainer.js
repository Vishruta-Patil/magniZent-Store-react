import topProductsData from "../../data/topProductsData"

const ProductContainer = () => {
    return (
        <div class="product-container">
        {topProductsData.map(item => (
          <div class="product-unit flex-column ">
          <img class="img-product justify-center" src={item.img_url} alt={item.img_name}/>
            <div class="product-unit-header justify-between">
              <p class="name-product">{item.product_name}</p>
              <span class="material-icons wishlist-icon"> favorite </span>
            </div>

            {/* <p class="description-product">{item.product_desc}</p> */}
            <p class="price">{item.product_price}<span class="price-offer">{item.product_offer} off</span></p>
            <button class="outline-btn">Add To Cart</button>
        </div>
        ))}
      </div>
    )
}

export default ProductContainer