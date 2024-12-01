import { combineReducers } from "@reduxjs/toolkit";
import { PortfolioDetailsReducer } from "./PortfolioDetails";

export const rootReducer = combineReducers({
	portfolioDetails: PortfolioDetailsReducer,
});
