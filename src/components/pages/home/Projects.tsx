import { Link } from "react-router-dom";
import { IProjects } from "./interfaces/IPortfolioDetails";

export const ProjectsSection = (props: { projects: IProjects[] }) => {
	const { projects } = props;
	console.log(projects);

	return (
		<div className="bg-[#e5ebff]">
			<div className=" mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<h5 className="pt-8  text-[#FFA620] w-full"> [DEV CREATIONS]</h5>
				<h2 className="">Selected Projects</h2>
				{projects.map((project) => (
					<div className="pt-6 pb-6 ">
						<div
							className=" bg-white grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 pb-8 shadow-2xl"
							style={{ borderRadius: "0.7rem" }}
						>
							<div
								className="flex flex-col gap-4 md:col-span-1 pl-6"
								key={project.id}
							>
								<h2 className="text-2xl font-bold">{project.title}</h2>
								<p className="text-gray-600">{project.description}</p>
								<ul className="flex flex-wrap gap-2 pb-6 pl-0">
									{project.stacks.map((stack) => (
										<li className="border-black bg-black text-white border-2 px-3 py-1 rounded-full text-sm">
											{stack}
										</li>
									))}
								</ul>
								<Link
									to={"/"}
									className="text-[#c3302f] underline underline-offset-3 font-bold"
								>
									View Project
								</Link>
							</div>
							<div
								className={`grid gap-4 p-6 ${
									project.images && project.images.length > 1
										? "grid-cols-1 md:grid-cols-2 md:col-span-2"
										: "grid-cols-1 md:grid-cols-4 md:col-span-2"
								}`}
							>
								{project.images &&
									project.images.map((image, index) => (
										<img
											src={image}
											alt={`${project.title} Screenshot ${index + 1}`}
											className={`rounded-lg shadow-md w-full h-auto ${
												project.images && project.images.length === 1
													? "col-span-4"
													: ""
											}`}
											style={{ borderRadius: "0.5rem" }}
										/>
									))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
