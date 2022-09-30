import { Carousel } from "../../components/carousel";
import ContentTitle from "../../components/home/contentTiltle";
import CategoryContainer from "../../components/home/categoryContainer";
import ProductCard from "../../components/common/ProductCard";
import topProductsData from "../../data/topProductsData";
import Loader from "../../components/common/Loader";
import { User } from "../../context/userContext";
import { addToWishListHandler, getCartItems, getProductList, getWishlistItems } from "../../utils/handler";
import { useWishList } from "../../context/wishlistContext";
import { useProductList } from "../../context/productListContext";
import { useEffect } from "react";

export const Home = () => {
  const {authState} = User()
 const {state, dispatch} = useWishList()
  const { productDispatch } = useProductList();
  useEffect(() => {
    getProductList(productDispatch);
    getWishlistItems(dispatch);
     getCartItems(dispatch)
  }, []);
 
  return (
    <div>
      {authState.userLoading ?
      <div> 
      <Loader />
      </div>
      :
    <div>
      <Carousel />
      <div className="prominent-category">
        <ContentTitle styles={"offer-header offer-header-1"}>
          PROMINENT CATEGORY TO BAG
        </ContentTitle>
        <CategoryContainer />
      </div>
 
      <div className="top-products-container">
        <ContentTitle styles={"offer-header"}>
          MOST DAZZLING OFFERS
        </ContentTitle>
        <div className="product-container">
          {topProductsData.map(item => (
            <ProductCard item={item} key={item._id} clickHandler={(item) => addToWishListHandler(item)}/>
          ))}
        </div>
      </div>
    </div>
}
    </div>
  );
};
