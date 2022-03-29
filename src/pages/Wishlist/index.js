import axios from "axios";
import { useEffect } from "react";
import { useWishList } from "../../context/wishlistContext";
import ProductCard from "../../components/common/ProductCard";
import Loader from "../../components/common/Loader";
import EmptyBag from "../../components/common/EmptyBag";
import { getWishlistItems, deleteWishListHandler } from "../../utils/handler";

export const Wishlist = () => {
  const { state, dispatch } = useWishList();
  useEffect(() => getWishlistItems(dispatch), []);

  return (
    <div>
      {state.wishListLoader ? (
        <Loader />
      ) : (
        <div class="wishlist-container">
          <h2 class="header-wishlist">
            My Wishlist ({state.wishListData.length})
          </h2>

          <div>
            {state.wishListData.length === 0 ? (
              <EmptyBag
                name={"Wishlist"}
                img={
                  "https://res.cloudinary.com/debanftke/image/upload/v1648206283/wishlist_empty_pcbldx.jpg"
                }
              />
            ) : (
              <div class="wishlist-unit">
                {state.wishListData.map((data, index) => (
                  <ProductCard
                    item={data}
                    key={index}
                    clickHandler={({ item }) =>
                      deleteWishListHandler(dispatch, { item })
                    } // doubt
                    from={true}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
