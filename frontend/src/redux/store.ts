import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root.reducers";
import { persistStore } from "redux-persist";



export const store = configureStore({
  reducer:rootReducer,
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
      serializableCheck:false
    })
});

export const persister = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default {store , persister};