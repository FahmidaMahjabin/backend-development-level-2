import { Middleware } from "@reduxjs/toolkit";
export const logger: Middleware = (store) => (next) => (action) => {
  console.log("store:", store.getState());
  next(action);
  console.log("action:", action);
  console.log("store:", store.getState());
};
