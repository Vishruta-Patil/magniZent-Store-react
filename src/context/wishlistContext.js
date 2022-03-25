import { createContext, useContext, useReducer } from "react"
import {wishlistReducer} from "../reducer/wishlist/wishlistReducer"

const WishlistContext = createContext(null)
const useWishList = () => useContext(WishlistContext)

const WishlistProvider = ({children}) => {
    const initialValue = {
        wishListLoader: false,
        wishListData: []
    }
    const [state, dispatch] = useReducer(wishlistReducer, initialValue)
    return (
        <WishlistContext.Provider value={{state, dispatch}}>
            {children}
        </WishlistContext.Provider>
    )
}

export {useWishList, WishlistProvider}