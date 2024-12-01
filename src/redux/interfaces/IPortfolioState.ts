export interface IPortfolioState {
	portfolioDetails: any | null;
	loading: boolean;
	error: string | null;
	ongoingApiCalls: number;
}
