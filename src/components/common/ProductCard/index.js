import axios from "axios";
import "./index.css";
import { useWishList } from "../../../context/wishlistContext";
import {
  addToCart,
  addToWishListHandler,
  deleteWishListHandler,
  getWishlistItems,
  isWishlisted,
  toggleWishlist,
} from "../../../utils/handler";
import { useNavigate } from "react-router";
import { User } from "../../../context/userContext";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductCard = ({ item }) => {
  const { state, dispatch } = useWishList();
  const navigate = useNavigate();

  const { loginStatus } = User();

  const inCartHandler = (product) => {
    const isCart = state.cartData.find((item) => item._id === product._id);
    if (isCart) return true;
    else return false;
  };

  const inCart = inCartHandler(item);

  const inWishListHandler = (product) => {
    const isWishlist = state?.wishListData?.find(
      (prod) => prod?.product?._id === product?._id
    );
    if (isWishlist) return true;
    else return false;
  };

  const inWishlist = inWishListHandler(item);

  //const inWishlist = state?.wishListData?.some((prod) => prod?.product?._id === item?._id);

  const [wishlistLoader, setWishlistLoader] = useState(false);

  return (
    <>
      <div className="product-unit ">
        <Link
          to={`/product/${item._id}`}
          onClick={(e) => {
            if (wishlistLoader) e.preventDefault();
          }}
        >
          <div className="flex-column ">
            <img
              className="img-product justify-center"
              src={item.img_url}
              alt={item.img_name}
            />
            <div className="product-unit-header justify-between">
              <p className="name-product">{item.product_name}</p>

            {/* *********** different Approach *********** */}
              {/* {!inWishlist ? (
              <span
                className="material-icons wishlist-icon"
                onClick={(e) =>
                  addToWishListHandler(item, dispatch, navigate, setWishlistLoader, e)
                }
              >
                {" "}
                favorite{" "}
              </span>
            ) : (
              <span
                className="material-icons wishlist-active"
                onClick={(e) => deleteWishListHandler(dispatch, { item }, setWishlistLoader, e)}
              >
                {" "}
                favorite{" "}
              </span>
            )} */}

              <span
                className= {`material-icons ${!inWishlist ? "wishlist-icon" : "wishlist-active"}`}
                onClick={(e) =>
                  toggleWishlist(
                    item._id,
                    dispatch,
                    navigate,
                    setWishlistLoader,
                    e,
                    inWishlist
                  )
                }
              >
                {" "}
                favorite{" "}
              </span>
            </div>

            <p className="price secondary-color">
              ₹{item.product_price}
              <span className="price-offer">
                {item.product_offer}% off
              </span>{" "}
              {item?.info?.ratings}
            </p>
          </div>
        </Link>

        <div className="btn-container flex product-unit-btn-container">
          {!inCart ? (
            <button
              onClick={() => addToCart(item, dispatch, navigate)}
              className="hero-btn product-unit-btn flex-center"
              style={{ fontWeight: 400 }}
            >
              Add To Cart
              <span className="material-icons "> shopping_cart </span>
            </button>
          ) : (
            <button
              onClick={() => navigate("/cart")}
              className="outline-btn product-unit-btn flex-center"
              style={{ fontWeight: 400 }}
            >
              Go To Cart
              <span className="material-icons "> shopping_cart </span>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCard;

