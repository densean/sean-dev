import {
	apiCallFail,
	apiCallStart,
	portfolioCallSuccess,
} from "@/redux/actions/PortfolioDetails";
import axios from "axios";
import { Dispatch } from "redux";

const API_URL = "http://localhost:3004/portfolioDetails";

export const fetchPortfolioDetails = () => {
	return async (dispatch: Dispatch) => {
		dispatch(apiCallStart());

		try {
			const response = await axios.get(API_URL);
			console.log(response, "resp");

			dispatch(portfolioCallSuccess(response.data));
		} catch (error) {
			dispatch(apiCallFail("Failed to fetch portfolio details"));
		}
	};
};
