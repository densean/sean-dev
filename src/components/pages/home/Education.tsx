import { IEducation } from "./interfaces/IPortfolioDetails";
import { FaUniversity } from "react-icons/fa"; // Importing icons from react-icons

export const EducationSection = (props: { education: IEducation[] }) => {
	const { education } = props;

	return (
		<section className="bg-white mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
			<h5 className="pt-8  text-[#FFA620] w-full"> [UNDERGRAD]</h5>
			<h2 className="text-2xl font-bold mb-4 flex items-center">
				Education
				{/* <FaGraduationCap className="text-blue-500 mr-2" /> Education */}
			</h2>
			<ul>
				{education.map((edu, index) => (
					<li key={index} className="mb-6 flex items-start space-x-4">
						{/* Icon for Degree */}
						<div className="flex-shrink-0">
							{/* <FaBookOpen className="text-gray-700" /> */}
						</div>
						<div className="flex-grow">
							<h3 className="text-xl font-bold mb-2">
								{edu.degree} in{" "}
								<span className="text-blue-500">{edu.course}</span>
							</h3>
							<p className="text-gray-700 flex items-center space-x-2">
								{/* Icon for University */}
								<FaUniversity className="text-gray-500" />
								<span>{edu.university}</span>
								<span className="text-gray-500">
									({edu.startYear} - {edu.endYear})
								</span>
							</p>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};
