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
})

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productApi.middleware).concat(commentApi.middleware)
});

export let persistor = persistStore(store);
