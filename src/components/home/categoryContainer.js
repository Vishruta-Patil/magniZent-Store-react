import categoryData from "../../data/categoryData"
import { FILTER_BY_CATEGORY } from "../../reducer/productList/productConstants"
import { useProductList } from "../../context/productListContext"

const CategoryContainer = () => {
    return (
        <div class="category-container">
          {categoryData.map(item => (
             <div class="category-unit flex-center" key={item?.id} >
             <img src={item.img_url} alt={item.img_name} />
             <p class="category-content">{item.img_name}</p>
           </div>
          ))}
        </div>
    )
}

export default CategoryContainer


//onClick={() =>
// dispatch({
//   type: FILTER_BY_CATEGORY,
//   payload: categoryName.toLowerCase(),  // {categoryName}
// })}