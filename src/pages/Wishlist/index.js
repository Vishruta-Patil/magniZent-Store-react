import axios from "axios";
import { useEffect } from "react";
import { useWishList } from "../../context/wishlistContext";
import ProductCard from "../../components/common/ProductCard";
import Loader from "../../components/common/Loader";
import EmptyBag from "../../components/common/EmptyBag";
import { getWishlistItems, deleteWishListHandler } from "../../utils/handler";
import { EMPTY_BAG } from "../../reducer/wishlist/wishlistConstants";

export const Wishlist = () => {
  const { state, dispatch } = useWishList();
  useEffect(() => getWishlistItems(dispatch), []);

  return (
    <div>
      {state.wishListLoader ? (
        <Loader />
      ) : (
        <div className="wishlist-container">
          <h2 className="header-wishlist">
            My Wishlist ({state.wishListData.length})
          </h2>

          <div>
            {state.wishListData.length === 0 ? (
              <EmptyBag
                name={"Wishlist"}
                img={EMPTY_BAG}
              />
            ) : (
              <div className="wishlist-unit">
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
