import {LOADING_SPINNER, PRODUCT_LIST_DATA} from "./productConstants"

export const productReducer = (state,action) => {
  switch (action.type) {
    case LOADING_SPINNER:
      return {
        ...state,
        loading: !state.loading,
      };

      case PRODUCT_LIST_DATA:
          return {
              ...state,
              productListData: action.payload
          }

    default:
      return state;
    
  }
};
