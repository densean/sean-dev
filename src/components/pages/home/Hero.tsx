import { Facebook, GithubIcon, Instagram, Linkedin } from "lucide-react";
import "./styles/Hero.less";

export const HeroSection = () => {
	return (
		<div className="bg-[#222129]">
			<div className="flex items-center justify-between mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 hero-section relative">
				<div className="relative z-10">
					<h1 className="hero-title">DENIS SEAN</h1>
					<h2 className="hero-sub-title mt-3 text-white text-lg font-semibold">
						An alchemist of ideas, blending creativity and skill to transform
						concepts into impactful creations. Every challenge is an opportunity
						for growth, turning imagination into reality through endless
						curiosity and innovation.
					</h2>
					<p className="mt-3 text-white">Get in touch</p>
					<div className="icons flex gap-4 mt-1 text-[#FFA620] text-2xl">
						<Instagram />
						<Facebook />
						<Linkedin />
						<GithubIcon />
					</div>
				</div>

				<div className="w-full relative">
					<div className="hero-picture absolute z-0 top-1/2 right-0 transform -translate-y-1/2"></div>
				</div>
			</div>
		</div>
	);
};
