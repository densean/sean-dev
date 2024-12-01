import {
	API_CALL_FAIL,
	API_CALL_START,
	PORTFOLIO_CALL_SUCCESS,
} from "../actions/ActionTypes";
import { IPortfolioState } from "../interfaces/IPortfolioState";

const initialState: IPortfolioState = {
	portfolioDetails: null,
	loading: false,
	error: null,
	ongoingApiCalls: 0,
};

export const PortfolioDetailsReducer = (
	state = initialState,
	action: any
): IPortfolioState => {
	switch (action.type) {
		case API_CALL_START:
			return {
				...state,
				loading: true,
				error: null,
				ongoingApiCalls: state.ongoingApiCalls + 1,
			};

		case PORTFOLIO_CALL_SUCCESS:
			return {
				...state,
				loading: false,
				portfolioDetails: action.payload,
				ongoingApiCalls: state.ongoingApiCalls - 1,
			};

		case API_CALL_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
				ongoingApiCalls: state.ongoingApiCalls - 1,
			};

		default:
			return state;
	}
};
