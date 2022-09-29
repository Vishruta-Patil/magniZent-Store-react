import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { LOGIN_STATUS, USER_LOADING } from "../../reducer/user/userConstants";
import { User } from "../../context/userContext";
import { useWishList } from "../../context/wishlistContext";
import { useProductList } from "../../context/productListContext";
import { GET_SEARCH_PRODUCTS } from "../../reducer/productList/productConstants";
import { logOut } from "../../utils/handler";

export const Header = () => {
  const { authState, authDispatch } = User();
  const navigate = useNavigate();

  const { state, cartSummary } = useWishList()
  const cartQuantity = cartSummary(state.cartData)

  const {productDispatch} = useProductList()


  const logInHandler = () => {
    navigate("/login");
  };

  const searchProductsHandler = (e) => {
    if(window.location.pathname !== "/product-list") navigate("/product-list")
    productDispatch({type: GET_SEARCH_PRODUCTS, payload: e.target.value})
  }

  return (
    <div className="header-container">
      <div className="header">
        <div className="logo">
          <Link className="primary-color" to="/">
            <h2 className="main-title">
              magni<span className="bold-main-title">Z</span>ent{" "}
              <span className="bold-main-title secondary-color"></span>
            </h2>
          </Link>
        </div>

        <div className="header-main-content">
          <ul className="flex header-inner-container">
            <Link className="secondary-color" to="/">
              <li className="header-item">Home</li>
            </Link>
            <Link className="secondary-color" to="/product-list">
              <p className="header-item primary-color">Shop Now</p>
            </Link>
          </ul>
        </div>

        <div className="search-bar-container search-bar-inline">
          <div className="search-bar">
            <input
              className="input-search"
              type="text"
              placeholder="Search your favorite brand and products"
              onChange={(e) => searchProductsHandler(e)}
            />
            <span className="material-icons search-icon">search</span>
          </div>
        </div>

        <div className="icon-container flex">
          <div className="icon-unit">
            {!authState.loginStatus ? (
              <div
                className="flex-column flex-center secondary-color header-icon"
                onClick={logInHandler}
              >
                <div className="material-icons icon"> login</div>
                <p>Login</p>
              </div>
            ) : (
              <div
                className="flex-column flex-center secondary-color header-icon"
                onClick={() => logOut(authDispatch, navigate)}
              >
                <div className="material-icons icon"> logout</div>
                <p>Logout</p>
              </div>
            )}
          </div>
          <div className="icon-unit">
            <Link
              className="flex-column flex-center secondary-color header-icon"
              to="/wishlist"
            >
              <div className="material-icons icon badge-icons">
                {" "}
                favorite
                <span class="flex-container icon-badge">{state?.wishListData?.length}</span>
              </div>
              <p>WishList</p>
            </Link>
          </div>
          <div className="icon-unit">
            <Link
              className="flex-column flex-center secondary-color header-icon"
              to="/cart"
            >
              <div className="material-icons icon badge-icons">
                {" "}
                shopping_cart
                <span class="flex-container icon-badge">{cartQuantity.cartQuant}</span>
              </div>
              <p>Cart</p>
            </Link>
          </div>
        </div>

        <span className="material-icons icon hide-menu menu-logo"> menu </span>
      </div>

      <hr className="hr-line header-divider" />

      <div className="search-bar-container search-bar-block">
        <div className="search-bar flex">
          <input
            className="input-search"
            type="text"
            placeholder="Search your favorite brand and products"
          />
          <span className="material-icons search-icon flex-center">
            {" "}
            search{" "}
          </span>
        </div>
      </div>
    </div>
  );
};
