import { useProductList } from "../../context/productListContext"

const { dispatch } = useProductList();

const GetHandler = async () => {
    dispatch({ type: "LOADING_SPINNER" });
    try {
      const response = await axios.get("/api/products");
      dispatch({ type: "LOADING_SPINNER" });
      dispatch({ type:"PRODUCT_LIST_DATA", payload: response.data.products })
    } catch (err) {
      console.log(err);
    }
  };

  export default GetHandler


  