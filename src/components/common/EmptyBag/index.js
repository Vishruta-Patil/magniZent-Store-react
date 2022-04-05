const EmptyBag = ({name, img}) => {
    return(
        <div className="wishlist-empty-box flex-center">
            <div className="wishlist-empty-header">
            <h1 className="wishlist-title">Your {name} Is Empty :(</h1>
            <h2 className="wishlist-subtitle">Add Your Favorite Items To Your {name} Now!!</h2>
            </div>
            <div className="wishlist-empty-box">
              <img
                className="wishlist-empty-image"
                src={img}
                alt={name}
              />
            </div>   
          </div>
    )
}

export default EmptyBag