import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "../features/ReservationSlice";
import customerReducer from "../features/CustomerSlice";

export const Store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    customer: customerReducer,
  },
});
//This is the state of the application
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
