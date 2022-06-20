import { useProductList } from "../../../context/productListContext";

const Sort = () => {
  const { productState, productDispatch } = useProductList();
  return (
    <div>
      <div className="filter-item align-center">
        <input
          type="radio"
          id="low-to-high"
          name="sort-by-price"
          onChange={() =>
            productDispatch({ type: "SORT_BY_PRICE", payload: "LOW_TO_HIGH" })
          }
          checked={productState.sortDir === "LOW_TO_HIGH"}
        />
        <label htmlFor="low-to-high">Price - Low to High </label>
      </div>
      
      <div className="filter-item align-center">
        <input
          type="radio"
          id="high-to-low"
          name="sort-by-price"
          onChange={() =>
            productDispatch({ type: "SORT_BY_PRICE", payload: "HIGH_TO_LOW" })
          }
          checked={productState.sortDir === "HIGH_TO_LOW"}
        />
        <label htmlFor="high-to-low">Price - High to Low</label>
      </div>
    </div>
  );
};

export default Sort;
