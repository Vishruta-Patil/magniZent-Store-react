import Category from "./category"
import PriceRange from "./priceRange"
import Rating from "./rating"
import Sort from "./sort"
import { useProductList } from "../../../context/productListContext"
import {CLEAR_ALL_FILTER} from "../../../reducer/productList/productConstants"

const Filter = () => {
  const {dispatch} = useProductList()
    return (
        <div class="filter-container">
          <div class="filter-header flex">
            <h3 class="primary-color">Filters</h3>
            <p class="secondary-color clear-link" onClick={() => dispatch({type:CLEAR_ALL_FILTER})}>Clear</p>
          </div>
          <hr />

          <div class="filter-content">
            <div class="filter-inner-content">
              <h3 class="filter-content-title">PRICE</h3>
              <PriceRange />
            </div>

            <hr class="rg-line" />

            <div class="filter-inner-content">
              <h3 class="filter-content-title secondary-color">CATEGORY</h3>
              <Category />
            </div>

            <hr class="rg-line" />

            <div class="filter-inner-content">
              <h3 class="filter-content-title secondary-color">RATING</h3>
              <Rating />
            </div>

            <hr class="rg-line" />

            <div class="filter-inner-content">
              <h3 class="filter-content-title secondary-color">SORT BY</h3>
              <Sort />
            </div>
          </div>
        </div>
    )
}

export default Filter