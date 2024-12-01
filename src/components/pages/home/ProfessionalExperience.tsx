import { Card, CardTitle } from "@/components/ui/card";
import { IProfessionalExperience } from "./interfaces/IPortfolioDetails";

export const ProfessionalExperience = (props: {
	experiences: IProfessionalExperience[];
}) => {
	const { experiences } = props;

	const formatDate = (date: Date) => {
		const options: Intl.DateTimeFormatOptions = {
			year: "numeric",
			month: "long",
		};
		return new Date(date).toLocaleDateString(undefined, options);
	};

	return (
		<div className="bg-white">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<h5 className="pt-8 text-[#FFA620] text-lg font-semibold">[CAREER]</h5>
				<h2 className="text-gray-900 text-3xl font-bold mb-6">
					Professional Experience
				</h2>

				{experiences.map((experience) => (
					<div
						key={experience.id}
						className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 pb-5 mt-6 mb-6 shadow-xl bg-slate-100"
						style={{ borderRadius: "0.5rem" }}
					>
						{/* Left Column - Company Info */}
						<div
							className="flex flex-col gap-2 md:col-span-1 p-4 max-sm:mr-6 md:mr-0"
							style={{
								borderBottomRightRadius: "0.7rem",
								borderTopRightRadius: "0.7rem",
							}}
						>
							<h2 className="text-[#222129] text-lg font-bold">
								{experience.companyName}
							</h2>
							<h6 className="text-[#333333] text-md">{experience.role}</h6>
							<p className="text-[#333333] text-sm">
								{formatDate(experience.startDate)} -{" "}
								{formatDate(experience.endDate)}
							</p>
						</div>

						{/* Right Column - Highlights */}
						<div className="flex flex-col gap-4 md:col-span-2 text-black p-4 ">
							<h4 className="text-lg font-semibold">Highlights</h4>
							<ul className=" pl-2">
								{experience.highlights.map((highlight, index) => (
									<li
										key={index}
										className="text-sm"
										style={{ lineHeight: ".8rem" }}
									>
										{highlight}
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
