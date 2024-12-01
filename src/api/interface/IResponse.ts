export interface IResponse {
	success: boolean;
	status: number;
	error: IError | {} | null;
	payload: Element | {} | null;
}

export interface IError {
	errorCode: string;
	errorMessage: string;
}
