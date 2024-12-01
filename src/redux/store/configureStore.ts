import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers/Index";

const store = configureStore({
	reducer: rootReducer,
});

// Define RootState type by inferring from rootReducer
export type RootState = ReturnType<typeof rootReducer>;

// Define AppDispatch for dispatching actions in your components
export type AppDispatch = typeof store.dispatch;

export default store;
