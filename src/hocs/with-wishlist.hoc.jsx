import React from "react";
import WishlistProvider from "../context/wishlist/wishlist.context";

const withWishlist = (WrappedComponent) => {
  return function WithWishlist(props) {
    return (
      <WishlistProvider.Consumer>
        {(value) => <WrappedComponent {...value} {...props} />}
      </WishlistProvider.Consumer>
    );
  };
};

export default withWishlist;
