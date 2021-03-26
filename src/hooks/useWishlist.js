import { useContext } from "react";
import { WishlistContext } from "../context/wishlist/wishlist.context";

const useWishlist = () => {
  const state = useContext(WishlistContext);

  if (!state) {
    throw new Error("Your using hooks outside WishlistProvide!");
  }

  return state;
};

export default useWishlist;
