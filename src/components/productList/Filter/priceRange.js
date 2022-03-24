import {FILTER_BY_PRICE_RANGE} from "../../../reducer/productList/productConstants"
import {useProductList} from "../../../context/productListContext"
import "./filter.css"

const PriceRange = () => {
  const {state, dispatch} = useProductList()
  return (
    <div class="filter-item align-center">
      <input type="range" min={499} max={9999} step={1900} list="tickmarks" className="slider" value={state.priceRange} onChange={(e) => dispatch({type:FILTER_BY_PRICE_RANGE, payload: +e.target.value})}/>
      <datalist id="tickmarks">
        <option value="499"></option>
        <option value="2399"></option>
        <option value="4299"></option>
        <option value="6199"></option>
        <option value="8099"></option>
        <option value="9999"></option>
      </datalist>
    </div>
  );
};

export default PriceRange;
