import axios from "axios";
import { useEffect } from "react";
import { useWishList } from "../../context/wishlistContext";
import { WISHLIST_LOADER, WISHLIST_DATA } from "../../reducer/wishlist/wishlistConstants";
import ProductCard from "../../components/common/ProductCard";
import EmptyWishList from "./emptyWishList";
import Loader from "../../components/common/Loader";

export const Wishlist = () => {
  const { state, dispatch } = useWishList();
  const encodedtoken = localStorage.getItem("token");

  useEffect(
    () =>
      (async () => {
        {console.log("wishlist1: ", state.wishListLoader)}
        dispatch({type: WISHLIST_LOADER})
        {console.log("wishlist2: ", state.wishListLoader)}
        try {
          const response = await axios.get("/api/user/wishlist", {
            headers: {
              authorization: encodedtoken,
            },
          });

          dispatch({type: WISHLIST_LOADER})
          {console.log("wishlist3: ", state.wishListLoader)}
          dispatch({ type: WISHLIST_DATA, payload: response.data.wishlist });
        } catch (err) {
          dispatch({type: WISHLIST_LOADER})
          console.log(err);
        }
      })(),
    []
  );

  const deleteWishListHandler = async ({ item }) => {
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      
      const response = await axios.delete(`/api/user/wishlist/${item._id}`, config);
      console.log("wish res: " + response.data.wishlist)
      dispatch({ type: WISHLIST_DATA, payload: response.data.wishlist });

    } catch (err) {
      console.log("wish err:- " + err);
    }
  };

  return (
    <div>
      {state.wishListLoader ? <Loader /> :
    <div class="wishlist-container">
      <h2 class="header-wishlist">My Wishlist</h2>

      <div>
        {state.wishListData.length === 0 ? (
          <EmptyWishList />
        ) : (
          <div class="wishlist-unit">
            {state.wishListData.map((data,index)=> (
             <ProductCard item={data} key={index} clickHandler={deleteWishListHandler} from={true}/>
            ))}
          </div>
        )}
      </div>
    </div>
}
    </div>
  );
};
