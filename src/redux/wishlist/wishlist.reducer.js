import { createReducer, combineReducers } from "@reduxjs/toolkit";

const items = createReducer([], {});
const loading = createReducer(false, {});
const error = createReducer(null, {});

const wishListItems = combineReducers({
  items,
  error,
  loading,
});

export default wishListItems;
