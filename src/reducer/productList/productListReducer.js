import {
  LOADING_SPINNER,
  PRODUCT_LIST_DATA,
  SORT_BY_PRICE,
  FILTER_BY_RATING,
  FILTER_BY_CATEGORY,
  FILTER_BY_PRICE_RANGE,
  CLEAR_ALL_FILTER,
} from "./productConstants";

export const productReducer = (state, action) => {
  switch (action.type) {
    case LOADING_SPINNER:
      return {
        ...state,
        loading: !state.loading,
      };

    case PRODUCT_LIST_DATA:
      return {
        ...state,
        productListData: action.payload,
      };

    case SORT_BY_PRICE:
      return {
        ...state,
        sortDir: action.payload,
      };

    case FILTER_BY_RATING:
      return {
        ...state,
        ratingAmount: action.payload,
      };

    case FILTER_BY_CATEGORY:
      return {
        ...state,
        category: {
          ...state.category,
          [action.payload]: !state.category[action.payload],
        },
      };

    // case FILTER_BY_CATEGORY:
    //   if (Object.keys(state.category).length === 0)
    //     return {
    //       ...state,
    //       category: { ...state.category, [action.payload.categoryName]: true },
    //     };
    //   return {
    //     ...state,
    //     category: {
    //       ...state.category,
    //       [action.payload.categoryName]: !state.category[action.payload.categoryName],
    //     },
    //   };

    case FILTER_BY_PRICE_RANGE:
      return {
        ...state,
        priceRange: +action.payload,
      };

    case CLEAR_ALL_FILTER:
      return {
        ...state,
        sortDir: "",
        ratingAmount: "",
        priceRange: "",
        clearAll: false,
        category: {
          fashion: false,
          jewellery: false,
          home: false,
        },
      };

    default:
      return state;
  }
};
