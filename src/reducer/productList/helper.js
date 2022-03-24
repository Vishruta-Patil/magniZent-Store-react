export const composeFunc = ( state, ...func) => (data)=> {
    return func.reduce((acc, curr) =>  curr(state, acc), data);
  };

export const sortByPrice = (state,data) => {
    if(state.sortDir === "LOW_TO_HIGH") {
        return [...data].sort((a,b) => a.product_price - b.product_price)
    }
    else if(state.sortDir === "HIGH_TO_LOW") {
        return [...data].sort((a,b) => b.product_price - a.product_price)
    }
    else return data
}

export const filterByRating = (state,data) => {
    return state.ratingAmount === "" ? data : data.filter(product => product.info.ratings >= state.ratingAmount)
}

export const filterByPriceRange = (state, data) => {
    return state.priceRange === "" ? data : data.filter(product => product.product_price <= state.priceRange)
}

export const filterByCategory = (state, products) => {
    return Object.values(state.category).every((value) => value === false)
      ? products
      : products.filter(product => state.category[product.info.category])
}

//   export const filterByCategory = (state, products) => {
//       console.log(state.category)
//     return Object.keys(state.category).length === 0 ||
//       Object.values(state.category).every((value) => value === false)
//       ? products
//       : products.filter((product) => state.category[product.info.category])
//   };
  