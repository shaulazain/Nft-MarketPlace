import { configureStore } from "@reduxjs/toolkit";
import collectionsReducer from "../store/slices/NftCollectionsSlice";
import NftsByCollectionReducer from "./slices/NftsByCollectionSllice";
import NftReducer from "./slices/NftSlice";

export const store = configureStore({
  reducer: {
    collectionsReducer,
    NftsByCollectionReducer,
    NftReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
