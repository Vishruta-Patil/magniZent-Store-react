import Category from "./category"
import PriceRange from "./priceRange"
import Rating from "./rating"
import Sort from "./sort"
import { useProductList } from "../../../context/productListContext"
import {CLEAR_ALL_FILTER} from "../../../reducer/productList/productConstants"

const Filter = () => {
  const {dispatch} = useProductList()
    return (
        <div className="filter-container">
          <div className="filter-header flex">
            <h3 className="primary-color">Filters</h3>
            <p className="secondary-color clear-link" onClick={() => dispatch({type:CLEAR_ALL_FILTER})}>Clear</p>
          </div>
          <hr />

          <div className="filter-content">
            <div className="filter-inner-content">
              <h3 className="filter-content-title">PRICE</h3>
              <PriceRange />
            </div>

            <hr className="rg-line" />

            <div className="filter-inner-content">
              <h3 className="filter-content-title secondary-color">CATEGORY</h3>
              <Category />
            </div>

            <hr className="rg-line" />

            <div className="filter-inner-content">
              <h3 className="filter-content-title secondary-color">RATING</h3>
              <Rating />
            </div>

            <hr className="rg-line" />

            <div className="filter-inner-content">
              <h3 className="filter-content-title secondary-color">SORT BY</h3>
              <Sort />
            </div>
          </div>
        </div>
    )
}

export default Filter