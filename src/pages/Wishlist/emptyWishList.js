const EmptyWishList = () => {
    return(
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
    )
}

export default EmptyWishList