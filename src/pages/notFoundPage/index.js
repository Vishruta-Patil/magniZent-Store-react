import "./index.css";
import { NOT_FOUND } from "../../reducer/wishlist/wishlistConstants";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="wishlist-empty-box flex-center">
      <div className="wishlist-empty-box">
        <img className="not-found-img " src={NOT_FOUND} alt="404 Not Found" />
      </div>
      <div>
        <h2 className="wishlist-title lg-font">
          We couldn't find any matches!
        </h2>
        <div className="btn-container">
          <Link to="/">
            <button className="btn hero-btn md-font not-found-btn">Home</button>
          </Link>
          <Link to="/product-list">
            <button className="btn outline-btn md-font not-found-btn">Shop now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
