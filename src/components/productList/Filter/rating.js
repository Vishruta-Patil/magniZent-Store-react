import {FILTER_BY_RATING} from "../../../reducer/productList/productConstants"
import { useProductList } from "../../../context/productListContext"

const Rating = () => {
  const {state, dispatch} = useProductList()
    return (
        <div>
            <div class="filter-item align-center">
                <input type="checkbox" id="4-star" onChange={() => dispatch({type: FILTER_BY_RATING, payload:4})} checked={state.ratingAmount === 4}/>
                <label for="4-star">4 <i class="fas fa-star"></i> & above</label>
               
              </div>
              <div class="filter-item align-center">
                <input type="checkbox" id="3-star" onChange={() => dispatch({type: FILTER_BY_RATING, payload:3})} checked={state.ratingAmount === 3}/>
                <label for="3-star">3 <i class="fas fa-star"></i> & above</label>
              </div>
              <div class="filter-item align-center">
                <input type="checkbox" id="2-star" onChange={() => dispatch({type: FILTER_BY_RATING, payload:2})} checked={state.ratingAmount === 2}/>
                <label for="2-star">2 <i class="fas fa-star"></i> & above</label>
              </div>
              <div class="filter-item align-center">
                <input type="checkbox" id="1-star" onChange={() => dispatch({type: FILTER_BY_RATING, payload:1})} checked={state.ratingAmount === 1}/>
                <label for="1-star">1 <i class="fas fa-star"></i> & above</label>
              </div>
        </div>
    )
}

export default Rating

//checked={state.ratingAmount === 1}