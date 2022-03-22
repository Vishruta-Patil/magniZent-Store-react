import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../reducer/productList/productListReducer";
import {
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
  };

  const [state, dispatch] = useReducer(productReducer, initialValue);

  const filteredData = filterByPriceRange(
    state,
    filterByCategory(
      state,
      filterByRating(state, sortByPrice(state, state.productListData))
    )
  );

  const composeFunc = (state, func) => {
    func.reduce((acc, curr) => curr(acc), state);
  };

  return (
    <ProductListContext.Provider value={{ state, dispatch, filteredData }}>
      {children}
    </ProductListContext.Provider>
  );
};

export { ProductProvider, useProductList };
