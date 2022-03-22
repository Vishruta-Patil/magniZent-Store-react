const Filter = () => {
    return (
        <div class="filter-container">
          <div class="filter-header flex">
            <h3 class="primary-color">Filters</h3>
            <p class="secondary-color clear-link">Clear</p>
          </div>
          <hr />

          <div class="filter-content">
            <div class="filter-inner-content">
              <h3 class="filter-content-title">Price</h3>
              <div class="filter-item align-center">
                <input type="range" min="1" max="100" value="50" />
              </div>
            </div>

            <hr class="rg-line" />

            <div class="filter-inner-content">
              <h3 class="filter-content-title secondary-color">Category</h3>
              <div class="filter-item align-center">
                <input type="checkbox" />
                <label for="">Category-1 </label>
              </div>
              <div class="filter-item align-center">
                <input type="checkbox" />
                <label for="">Category-2 </label>
              </div>
              <div class="filter-item align-center">
                <input type="checkbox" />
                <label for="">Category-3 </label>
              </div>
            </div>

            <hr class="rg-line" />

            <div class="filter-inner-content">
              <h3 class="filter-content-title secondary-color">Rating</h3>
              <div class="filter-item align-center">
                <input type="checkbox" />
                <label for="">4 Stars & above</label>
              </div>
              <div class="filter-item align-center">
                <input type="checkbox" />
                <label for="">3 Stars & above</label>
              </div>
              <div class="filter-item align-center">
                <input type="checkbox" />
                <label for="">2 Stars & above</label>
              </div>
              <div class="filter-item align-center">
                <input type="checkbox" />
                <label for="">1 Stars & above</label>
              </div>
            </div>

            <hr class="rg-line" />
            <div class="filter-inner-content">
              <h3 class="filter-content-title secondary-color">Sort by</h3>
              <div class="filter-item align-center">
                <input type="radio" />
                <label for="">Price - Low to High </label>
              </div>
              <div class="filter-item align-center">
                <input type="radio" />
                <label for="">Price - High to Low</label>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Filter