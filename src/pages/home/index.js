import { Carousel } from "../../components/carousel";
import ContentTitle from "../../components/home/contentTiltle";
import CategoryContainer from "../../components/home/categoryContainer";
import ProductCard from "../../components/common/ProductCard";
import topProductsData from "../../data/topProductsData";
import Loader from "../../components/common/Loader";
import { User } from "../../context/userContext";
import axios from "axios";

export const Home = () => {
  const {state} = User()

  const addToWishListHandler = async ({ item }) => {
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      const data = {
        product: item,
      };
      await axios.post("/api/user/wishlist", data, config);
      console.log("working from home")

    } catch (err) {
      console.log("err:- " + err);
    }
  };


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
            <ProductCard item={item} key={item._id} clickHandler={addToWishListHandler}/>
          ))}
        </div>
      </div>
    </div>
}
    </div>
  );
};
