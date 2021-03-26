import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import wishlist from "./wishlist/wishlist.reducer";
import auth from "./auth/auth.reducer";

const config = {
  key: "auth",
  storage,
  whitelist: ["accessToken", "refreshToken"],
  // blacklist: ["accessToken", "refreshToken"],
};

const persistedAuthReducer = persistReducer(config, auth);

const reducer = {
  wishlist,
  auth: persistedAuthReducer,
};

export default reducer;
