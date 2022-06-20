import { useProductList } from "../../../context/productListContext";
import { FILTER_BY_CATEGORY } from "../../../reducer/productList/productConstants";

const Category = () => {
  const { productState, productDispatch } = useProductList();
  const categories = ["Fashion", "Jewellery", "Home"];
  return (
    <div>
      {categories.map((categoryName) => (
        <div className="filter-item align-center" key={categoryName}>
          <input
            type="checkbox"
            id={categoryName}
            checked={productState.category[categoryName.toLowerCase()]}
            onChange={() =>
              productDispatch({
                type: FILTER_BY_CATEGORY,
                payload: categoryName.toLowerCase(),  // {categoryName}
              })
            }
          />
          <label htmlFor={categoryName}>{categoryName}</label>
        </div>
      ))}
    </div>
  );
};

export default Category;
