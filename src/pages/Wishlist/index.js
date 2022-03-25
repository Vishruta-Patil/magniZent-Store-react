import axios from "axios";
import { useEffect } from "react";
import { useWishList } from "../../context/wishlistContext";
import { WISHLIST_DATA } from "../../reducer/wishlist/wishlistConstants";

export const Wishlist = () => {
  const { state, dispatch } = useWishList();
  const encodedtoken = localStorage.getItem("token");

  useEffect(
    () =>
      (async () => {
        try {
          const response = await axios.get("/api/user/wishlist", {
            headers: {
              authorization: encodedtoken,
            },
          });

          console.log(
            "wishlist" +
              state.wishListData.length +
              JSON.stringify(response.data.wishlist)
          );
          dispatch({ type: WISHLIST_DATA, payload: response.data.wishlist });
        } catch (err) {
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
      console.log(response.data.wishlist)
      dispatch({ type: WISHLIST_DATA, payload: response.data.wishlist });

    } catch (err) {
      console.log("err:- " + err);
    }
  };

  return (
    <div class="wishlist-container">
      <h2 class="header-wishlist">My Wishlist</h2>

      <div>
        {state.wishListData.length === 0 ? (
          <div className="wishlist-empty-box flex-center">
            <div className="wishlist-empty-header">
            <h1 className="wishlist-title">Your Wishlist Is Empty :(</h1>
            <h2 className="wishlist-subtitle">Add Your Favorite Items To Your Wishlist Now!!</h2>
            </div>
            <div className="wishlist-empty-box">
              <img
                className="wishlist-empty-image"
                src="https://res.cloudinary.com/debanftke/image/upload/v1648206283/wishlist_empty_pcbldx.jpg"
                alt=""
              />
            </div>   
          </div>
        ) : (
          <div class="wishlist-unit">
            {state.wishListData.map((item,index)=> (
              <div class="product-unit flex-column">
              <img
                class="img-product justify-center"
                src={item.img_url}
                alt=""
              />
              <div class="product-unit-header justify-between">
                <p class="name-product">Product</p>
                <button onClick={() => deleteWishListHandler({item})}><span class="material-icons wishlist-icon"> favorite </span></button>
              </div>

              <p class="description-product">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                iusto.
              </p>
              <p class="price">
              ₹{item.product_price}+ <span class="price-offer">45% off</span>
              </p>
              <div class="btn-container flex">
                <button class="btn hero-btn">Buy Now</button>
                <button class="btn outline-btn">Add To Cart</button>
              </div>
            </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
