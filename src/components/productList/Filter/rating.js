import { FILTER_BY_RATING } from "../../../reducer/productList/productConstants";
import { useProductList } from "../../../context/productListContext";

const Rating = () => {
  const { productState, productDispatch } = useProductList();
  const ratingData = [4, 3, 2, 1];
  return (
    <div>
      {ratingData.map(item => (
        <div className="filter-item align-center" key={item}>
          <input
            type="checkbox"
            id={`${item}-star`}
            onChange={() =>
              productDispatch({ type: FILTER_BY_RATING, payload: `${item}` })
            }
            checked={productState.ratingAmount === `${item}`}
          />
          <label htmlFor={`${item}-star`}>
            {item} <i className="fas fa-star"></i> & above
          </label>
        </div>
      ))}  
    </div>
  );
};

export default Rating;
