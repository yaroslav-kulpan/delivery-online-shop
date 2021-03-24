import { createAction } from "@reduxjs/toolkit";

// fetch
const fetchWishListRequested = createAction("wishlist/fetchWishListRequested");
const fetchWishListSuccess = createAction("wishlist/fetchWishListSuccess");
const fetchWishListFailure = createAction("wishlist/fetchWishListFailure");

// add
const addWishListItemRequested = createAction(
  "wishlist/addWishListItemRequested"
);
const addWishListItemSuccess = createAction("wishlist/addWishListItemSuccess");
const addWishListItemFailure = createAction("wishlist/addWishListItemFailure");

// delete
const deleteWishListItemRequested = createAction(
  "wishlist/deleteWishListItemRequested"
);
const deleteWishListItemSuccess = createAction(
  "wishlist/deleteWishListItemSuccess"
);
const deleteWishListItemFailure = createAction(
  "wishlist/deleteWishListItemFailure"
);

export {
  fetchWishListFailure,
  addWishListItemFailure,
  addWishListItemRequested,
  addWishListItemSuccess,
  deleteWishListItemFailure,
  deleteWishListItemRequested,
  deleteWishListItemSuccess,
  fetchWishListRequested,
  fetchWishListSuccess,
};
