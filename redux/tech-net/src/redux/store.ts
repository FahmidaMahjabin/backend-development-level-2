import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./features/counter/counterSlice";
import { logger } from "./middleware/logger";
// reducer function gulo reducer property er moddhe object hishebe thakbe

export const store = configureStore({
  reducer: { counter: counterSliceReducer },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
