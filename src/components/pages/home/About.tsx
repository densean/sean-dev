import { CodeXml, HardHat, Palette, ShieldAlert } from "lucide-react";
import { IAbout } from "./interfaces/IPortfolioDetails";
import "./styles/About.less";

const getIcon = (iconName: "HardHat" | "CodeXml" | "Palette") => {
	const icons = {
		HardHat: <HardHat />,
		CodeXml: <CodeXml />,
		Palette: <Palette />,
	};

	return icons[iconName] || <ShieldAlert />;
};

export const AboutSection = (props: { about: IAbout[] }) => {
	const { about } = props;
	return (
		<div className="bg-[#F0EFF4]">
			<div className="flex items-center justify-center mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative ">
				<div className="flex flex-col md:flex-row gap-6 items-center justify-center p-6">
					{about.map((x) => (
						<div
							key={x.id}
							className="flex flex-col items-center p-4 text-center"
						>
							<div className="about-icon text-[#c3302f]">{getIcon(x.icon)}</div>
							<h2 className="text-xl font-semibold mb-2">{x.title}</h2>
							<p>{x.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
