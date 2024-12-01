import { fetchPortfolioDetails } from "@/api/PortfolioDetailsApi";
import { RootState } from "@/redux/store/configureStore";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IPortfolioDetails } from "./interfaces/IPortfolioDetails";
import { HeroSection } from "./Hero";
import { AboutSection } from "./About";
import { ProjectsSection } from "./Projects";
import { SkillsSection } from "./Skills";
import { ProfessionalExperience } from "./ProfessionalExperience";
import { CertificationSection } from "./Certification";
import { EducationSection } from "./Education";
import { TestimonialsSection } from "./Testimonials";
import { Footer } from "@/components/common/Footer";
import { ContactSection } from "./Contacts";

export const Home = () => {
	let details: IPortfolioDetails = {
		username: "",
		role: "",
		about: [],
		professionalExperience: [],
		projects: [],
		skills: [],
		contacts: null,
		education: [],
		certifications: [],
		testimonials: [],
	};
	const dispatch = useDispatch();

	const { portfolioDetails, loading, error } = useSelector(
		(state: RootState) => state.portfolioDetails
	);

	useEffect(() => {
		dispatch(fetchPortfolioDetails() as any);
	}, [dispatch]);

	if (portfolioDetails) {
		details = portfolioDetails.payload;
		console.log(details.about, "abuot");
	}

	if (loading) {
		return <div>Loading portfolio details...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<div>
			{/* Hero Section
			About Me
			Professional Experience
			Projects
			Skills
			Certifications
			Education
			Reviews/Testimonials
			Contact
			Footer */}
			<HeroSection />
			<AboutSection about={details.about} />
			<ProfessionalExperience experiences={details.professionalExperience} />
			<ProjectsSection projects={details.projects} />
			<SkillsSection skills={details.skills} />
			<CertificationSection certifications={details.certifications} />
			<EducationSection education={details.education} />
			<TestimonialsSection testimonials={details.testimonials} />
			<ContactSection />
			<Footer />
		</div>
	);
};
