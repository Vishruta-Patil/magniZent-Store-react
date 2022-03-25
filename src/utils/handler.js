export const addToWishListHandler = async (item) => {
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      const data = {
        product: item,
      };
      await axios.post("/api/user/wishlist", data, config);

    } catch (err) {
      console.log("err:- " + err);
    }
  };
