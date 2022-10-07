import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { cartSlice, globalSlice } from "./slices";

const cartConfig = { key: "cart", version: 1, storage };

const store = configureStore({
  reducer: combineReducers({
    global: globalSlice.reducer,
    cart: persistReducer(cartConfig, cartSlice.reducer),
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type RootDispatch = typeof store.dispatch;

export type RootThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
