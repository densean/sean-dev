import {
	API_CALL_FAIL,
	API_CALL_START,
	PORTFOLIO_CALL_SUCCESS,
} from "./ActionTypes";

export const apiCallStart = () => ({
	type: API_CALL_START,
});

export const portfolioCallSuccess = (data: any) => ({
	type: PORTFOLIO_CALL_SUCCESS,
	payload: data,
});

export const apiCallFail = (error: string) => ({
	type: API_CALL_FAIL,
	payload: error,
});
