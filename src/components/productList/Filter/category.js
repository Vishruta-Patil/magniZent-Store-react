import { useProductList } from "../../../context/productListContext";
import { FILTER_BY_CATEGORY } from "../../../reducer/productList/productConstants";

const Category = () => {
  const { state, dispatch } = useProductList();
  const categories = ["Fashion", "Jewellery", "Home"];
  return (
    <div>
      {categories.map((categoryName) => (
        <div class="filter-item align-center" key={categoryName}>
          <input
            type="checkbox"
            id={categoryName}
            checked={state.category[categoryName.toLowerCase()]}
            onChange={() =>
              dispatch({
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
