import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./root.reducer";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

const persistor = persistStore(store);

export { store, persistor };
