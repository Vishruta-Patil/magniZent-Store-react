import categoryData from "../../data/categoryData"

const CategoryContainer = () => {
    return (
        <div class="category-container">
          {categoryData.map(item => (
             <div class="category-unit flex-center">
             <img src={item.img_url} alt={item.img_name} />
             <p class="category-content">{item.img_name}</p>
           </div>
          ))}
        </div>
    )
}

export default CategoryContainer