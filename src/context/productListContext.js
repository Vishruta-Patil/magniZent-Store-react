import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../reducer/productList/productListReducer";
import {
  composeFunc,
  sortByPrice,
  filterByRating,
  filterByCategory,
  filterByPriceRange,
} from "../reducer/productList/helper";

const ProductListContext = createContext();
const useProductList = () => useContext(ProductListContext);

const ProductProvider = ({ children }) => {
  const initialValue = {
    loading: false,
    productListData: [],
    sortDir: "",
    ratingAmount: "",
    priceRange: "",
    category: {
      fashion: false,
      jewellery: false,
      home: false,
    },
    // category: {},
    singleProduct: [],
  };

  const [productState, productDispatch] = useReducer(productReducer, initialValue);

  const filteredData = composeFunc(productState, filterByPriceRange, filterByCategory, filterByRating, sortByPrice)(productState.productListData)

  return (
    <ProductListContext.Provider value={{ productState, productDispatch, filteredData }}>
      {children}
    </ProductListContext.Provider>
  );
};

export { ProductProvider, useProductList };
