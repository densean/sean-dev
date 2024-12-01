import { useState } from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { ISkills } from "./interfaces/IPortfolioDetails";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import "./styles/Skills.less";

export const SkillsSection = (props: { skills: ISkills[] }) => {
	const { skills } = props;

	const [flippedState, setFlippedState] = useState<Record<string, boolean>>({});

	const toggleFlip = (id: number) => {
		setFlippedState((prevState) => ({
			...prevState,
			[id]: !prevState[id],
		}));
	};

	const getProficiency = (proficiency: number) => {
		proficiency = Math.floor(proficiency / 20);
		const maxProficiency = 5;

		return (
			<div>
				{Array.from({ length: maxProficiency }).map((_, i) => (
					<i
						key={i}
						className={`fa-solid fa-star text-sm ${
							i < proficiency ? "text-yellow-400" : "text-gray-300"
						}`}
					/>
				))}
				<p>{summarizeProficiency(proficiency)}</p>
			</div>
		);
	};

	const summarizeProficiency = (proficiency: number) => {
		const proficiencyLevels = [
			"",
			"Trained",
			"Experienced",
			"Intermediate",
			"Advanced",
			"Pro",
		];
		return proficiencyLevels[proficiency] || proficiency;
	};

	return (
		<div className="bg-[#fff] skills-section">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 justify-center items-center text-center pb-8">
				<h5 className="pt-8 text-[#FFA620] w-full text-left">[COMPETENCY]</h5>
				<h2 className="text-left">Skills</h2>
				<div className="justify-items-center">
					<Carousel
						opts={{
							align: "start",
						}}
						className="w-full mt-8"
					>
						<CarouselContent>
							{skills.map((skill) => (
								<CarouselItem
									key={skill.id}
									className="md:basis-1/3 lg:basis-1/3 "
								>
									<div
										className="p-3 relative"
										onClick={() => toggleFlip(skill.id)}
										style={{ cursor: "pointer", perspective: "1000px" }}
									>
										<div
											className={`relative w-full h-[300px] transition-transform duration-500 transform ${
												flippedState[skill.id] ? "rotate-y-180" : ""
											}`}
											style={{ transformStyle: "preserve-3d" }}
										>
											{/* Front Card */}
											<Card className="absolute w-full h-full backface-hidden shadow-md">
												<CardHeader>
													<CardTitle>{skill.title}</CardTitle>
													<CardDescription>{skill.techStack}</CardDescription>
												</CardHeader>
												<CardContent className="flex items-center justify-center">
													<span className="text-3xl font-semibold">
														<p>Proficiency:</p>
														{getProficiency(skill.proficiency)}
													</span>
												</CardContent>
											</Card>

											{/* Back Card */}
											<Card className="absolute w-full h-full backface-hidden shadow-md rotate-y-180">
												<CardHeader>
													<CardTitle>
														<i
															className={`fa-brands ${skill.iconClass} text-4xl`}
														/>
													</CardTitle>
												</CardHeader>
												<CardContent className="flex items-center justify-center">
													<span className="text-3xl font-semibold">
														{skill.description}
													</span>
												</CardContent>
											</Card>
										</div>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</div>
			</div>
		</div>
	);
};
