import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../components/common/Loader";
import ProductCard from "../../components/common/ProductCard";
import Filter from "../../components/productList/Filter";
import { useProductList } from "../../context/productListContext";
import { useWishList } from "../../context/wishlistContext";
import { getProductList, getWishlistItems, getCartItems } from "../../utils/handler";
import { addToWishListHandler } from "../../utils/handler";


export const ProductList = () => {
  const { productState, productDispatch, filteredData } = useProductList();
  const {state, dispatch} = useWishList()
  useEffect(() => {
    getProductList(productDispatch);
  }, []);
  
  return (
    <div className="product-list-container">
      <Filter />

      <div className="product-container">
        {productState.loading ? (
          <Loader />
        ) : (
          filteredData.length === 0 ? <h2>No products found</h2> :
          filteredData.map((data, index) => (
            <ProductCard
              item={data}
              key={index}
              clickHandler={(item) => addToWishListHandler(item)}
            />
          ))
        )}
      </div>
    </div>
  );
};
