import {WISHLIST_LOADER, WISHLIST_DATA, WISHLIST_STATUS_CLASS} from "./wishlistConstants"

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
        case WISHLIST_STATUS_CLASS:
            return {
                ...state,
                wishListStatusClass: state.wishListStatusClass === "wishlist-icon" ? "wishlist-active" : "wishlist-icon"
            }
    }
}