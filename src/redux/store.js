import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { addressSlice, productFilterSlice, authSlice, cartSlice, commentsSlice } from './slices'
import { productApi } from "../services/productApi";
import { commentApi } from "../services/commentApi";
import { addressesApi } from "../services/addressesApi";
import { externalApi } from "../services/externalApi";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducers = combineReducers({
  productfilter: productFilterSlice,
  auth: authSlice,
  cart: cartSlice,
  address: addressSlice,
  comment: commentsSlice,
  [productApi.reducerPath]: productApi.reducer,
  [commentApi.reducerPath]: commentApi.reducer,
  [addressesApi.reducerPath]: addressesApi.reducer,
  [externalApi.reducerPath]: externalApi.reducer,
})

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productApi.middleware).concat(commentApi.middleware).concat(addressesApi.middleware).concat(externalApi.middleware)
});

export let persistor = persistStore(store);
