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

    } catch (err) {
      console.log("err:- " + err);
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
            filteredData.map((data,index) => (
              <ProductCard item={data} key={index} clickHandler={addToWishListHandler}/>
            ))
          )}
        </div>
      </div>
  );
};
