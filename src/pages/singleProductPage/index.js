import { useEffect } from "react";
import { useParams } from "react-router";
import { useProductList } from "../../context/productListContext";
import { getSingleProduct } from "../../utils/handler";

export const SingleProduct = () => {
  const params = useParams();
  const { state, dispatch } = useProductList();

  useEffect(() => {
    getSingleProduct(params.productId, dispatch);
  }, []);

  return (
    <div>
      <h1>Shree Krishna</h1>
      <h2>{params.productId}</h2>
    </div>
  );
};
