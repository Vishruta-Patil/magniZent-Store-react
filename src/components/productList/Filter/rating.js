import { FILTER_BY_RATING } from "../../../reducer/productList/productConstants";
import { useProductList } from "../../../context/productListContext";

const Rating = () => {
  const { state, dispatch } = useProductList();
  const ratingData = [4, 3, 2, 1];
  return (
    <div>
      {ratingData.map(item => (
        <div class="filter-item align-center" key={item}>
          <input
            type="checkbox"
            id={`${item}-star`}
            onChange={() =>
              dispatch({ type: FILTER_BY_RATING, payload: `${item}` })
            }
            checked={state.ratingAmount === `${item}`}
          />
          <label htmlFor={`${item}-star`}>
            {item} <i class="fas fa-star"></i> & above
          </label>
        </div>
      ))}  
    </div>
  );
};

export default Rating;
