import { createContext, useContext, useReducer} from "react";
import {productReducer} from "../reducer/productList/productListReducer"

const ProductListContext = createContext()
const useProductList = () => useContext(ProductListContext)

const initialValue = {
    loading: false,
    productListData: []
}

const ProductProvider = ({children}) => {
    const [state, dispatch] = useReducer(productReducer, initialValue)
    return (
        <ProductListContext.Provider value={{state,dispatch}}>
            {children}
        </ProductListContext.Provider>
    )
}

export {ProductProvider, useProductList}