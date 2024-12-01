import { ICertifications } from "./interfaces/IPortfolioDetails";

export const CertificationSection = (props: {
	certifications: ICertifications[];
}) => {
	const { certifications } = props;

	return (
		<div className="bg-[#f4f4f4] py-8">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<h5 className="pt-4 text-[#FFA620] w-full text-left">[ACHIEVEMENTS]</h5>
				<h2 className="text-left text-gray-900 mb-8">
					Certifications & Licenses
				</h2>
				<div className="gap-6 grid grid-flow-col">
					{certifications.map((certification) => {
						const startDate = new Date(certification.startDate);
						const expiryDate = certification.expiryDate
							? new Date(certification.expiryDate)
							: null;

						return (
							<div
								key={certification.id}
								className="flex flex-col items-center"
							>
								{/* Icon */}
								<div className="flex items-center justify-center w-20 h-20 bg-[#FFA620] rounded-full mb-4">
									<i className="fas fa-certificate text-white text-2xl"></i>
								</div>

								{/* Details */}
								<div className="text-center">
									<h3 className="text-lg font-semibold text-gray-800">
										{certification.title}
									</h3>
									<p className="text-sm text-gray-600 mb-1">
										Provider: {certification.provider}
									</p>
									<p className="text-sm text-gray-600">
										Issued:{" "}
										<span className="font-medium">
											{startDate.toLocaleDateString(undefined, {
												year: "numeric",
												month: "short",
											})}
										</span>
										{expiryDate && (
											<>
												{" "}
												| Expires:{" "}
												<span className="font-medium text-red-600">
													{expiryDate.toLocaleDateString(undefined, {
														year: "numeric",
														month: "short",
													})}
												</span>
											</>
										)}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
