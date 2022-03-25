import {WISHLIST_LOADER, WISHLIST_DATA} from "./wishlistConstants"

export const wishlistReducer = (state, action) => {
    switch(action.type) {
        case WISHLIST_LOADER:
            return {
                ...state,
                wishListLoader: !state.wishListLoader
            }
        case WISHLIST_DATA:
            return {
                ...state,
                wishListData: action.payload
            }
    }
}