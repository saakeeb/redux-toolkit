import { Middleware } from "@reduxjs/toolkit";

export const logger: Middleware = (store) => (next) => (action) => {
  console.log("current state:", store.getState());
  console.log("action: ", action);

  next(action);
  console.log("update state:", store.getState());
};
