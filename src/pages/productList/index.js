import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../components/common/Loader";
import ProductCard from "../../components/common/ProductCard";
import Filter from "../../components/productList/Filter";
import { useProductList } from "../../context/productListContext";
import {LOADING_SPINNER, PRODUCT_LIST_DATA} from "../../reducer/productList/productConstants"

export const ProductList = () => {
const { state, dispatch, filteredData} = useProductList();

  const getHandler = async () => {
    dispatch({ type: LOADING_SPINNER });
    try {
      const response = await axios.get("/api/products");
      dispatch({ type: LOADING_SPINNER });
      dispatch({ type: PRODUCT_LIST_DATA, payload: response.data.products })
    } catch (err) {
      console.log(err);
    }
  };

useEffect(() => (async () => await getHandler())(),[]);

  return (
    
      <div class="product-list-container">
        <Filter />

        <div class="product-container">
          {state.loading ? (
            <Loader />
          ) : (
            filteredData.map((data) => (
              <ProductCard item={data}/>
            ))
          )}
        </div>
      </div>
  );
};
