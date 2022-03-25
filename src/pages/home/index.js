import { Carousel } from "../../components/carousel";
import ContentTitle from "../../components/home/contentTiltle";
import CategoryContainer from "../../components/home/categoryContainer";
import ProductCard from "../../components/common/ProductCard";
import topProductsData from "../../data/topProductsData";
import Loader from "../../components/common/Loader";
import { User } from "../../context/userContext";


export const Home = () => {
  const {state} = User()
  return (
    <div>
      {state.userLoading ?
      <div> 
      <Loader />
      </div>
      :
    <div>
      <Carousel />
      <div class="prominent-category">
        <ContentTitle styles={"offer-header offer-header-1"}>
          PROMINENT CATEGORY TO BAG
        </ContentTitle>
        <CategoryContainer />
      </div>

      <div class="top-products-container">
        <ContentTitle styles={"offer-header"}>
          MOST DAZZLING OFFERS
        </ContentTitle>
        <div class="product-container">
          {topProductsData.map(item => (
            <ProductCard item={item} key={item.id}/>
          ))}
        </div>
      </div>
    </div>
}
    </div>
  );
};
