import { useProductList } from "../../context/productListContext"

const { productDispatch } = useProductList();

const GetHandler = async () => {
  productDispatch({ type: "LOADING_SPINNER" });
    try {
      const response = await axios.get("/api/products");
      productDispatch({ type: "LOADING_SPINNER" });
      productDispatch({ type:"PRODUCT_LIST_DATA", payload: response.data.products })
    } catch (err) {
      console.log(err);
    }
  };

  export default GetHandler


  