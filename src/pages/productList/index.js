import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../components/common/Loader";
import ProductCard from "../../components/common/ProductCard";
import Filter from "../../components/productList/Filter";
import { useProductList } from "../../context/productListContext";
import { getProductList } from "../../utils/handler";
import { addToWishListHandler } from "../../utils/handler";


export const ProductList = () => {
  const { state, dispatch, filteredData } = useProductList();
  useEffect(() => getProductList(dispatch), []);

  return (
    <div className="product-list-container">
      <Filter />

      <div className="product-container">
        {state.loading ? (
          <Loader />
        ) : (
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
