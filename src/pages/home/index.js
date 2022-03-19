import { Carousel } from "../../components/carousel"
import ContentTitle from "../../components/home/contentTiltle"
import CategoryContainer from "../../components/home/categoryContainer"
import ProductContainer from "../../components/home/productContainer"

export const Home = () => {
  return (
    <div>
      <Carousel />

      <div class="prominent-category">
        <ContentTitle styles={"offer-header offer-header-1"}>PROMINENT CATEGORY TO BAG</ContentTitle>
        <CategoryContainer />
      </div>

      <div class="top-products-container">
        <ContentTitle styles={"offer-header"}>MOST DAZZLING OFFERS</ContentTitle>
        <ProductContainer />
      </div>
      
    </div>
  )
}

