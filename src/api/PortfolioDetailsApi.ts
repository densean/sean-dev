import {
	apiCallFail,
	apiCallStart,
	portfolioCallSuccess,
} from "@/redux/actions/PortfolioDetails";
// import axios from "axios";
import { Dispatch } from "redux";
import * as API_RESPONSE from "../public/mocks/portfolioDetailsResponse.json";
// const API_URL = "http://localhost:3004/portfolioDetails";
// import "./mocks/"
export const fetchPortfolioDetails = () => {
	return async (dispatch: Dispatch) => {
		dispatch(apiCallStart());

		try {
			// const response = await axios.get(API_URL);
			const response = API_RESPONSE;

			dispatch(portfolioCallSuccess(response));
		} catch (error) {
			dispatch(apiCallFail("Failed to fetch portfolio details"));
		}
	};
};
