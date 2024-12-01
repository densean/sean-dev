export interface IPortfolioDetails {
	username: string;
	role: string;
	about: IAbout[];
	professionalExperience: IProfessionalExperience[];
	projects: IProjects[];
	skills: ISkills[];
	contacts: IContacts | null;
	education: IEducation[];
	certifications: ICertifications[];
	testimonials: ITestimonial[];
}

export interface IAbout {
	id: number;
	title: string;
	description: string;
	icon: "HardHat" | "CodeXml" | "Palette";
}

export interface ISkills {
	id: number;
	title: string;
	techStack: string | null;
	proficiency: number;
	iconClass: string;
	description: string;
}

export interface IProjects {
	id: number;
	title: string;
	description: string;
	stacks: string[];
	images?: string[];
}

export interface IContacts {
	id: number;
	email: string;
	mobileNumber: string;
	socialAccount: {
		name: string;
		icon: string;
		url: string;
	};
}

export interface IProfessionalExperience {
	id: number;
	companyName: string;
	role: string;
	highlights: string[];
	startDate: Date;
	endDate: Date;
}

export interface ICertifications {
	id: number;
	title: string;
	provider: string;
	type: "LICENSE" | "CERTIFICATE";
	startDate: Date;
	expiryDate: Date;
}

export interface IEducation {
	id: number;
	university: string;
	degree: string;
	course: string;
	startYear: number;
	endYear: number;
}

export interface ITestimonial {
	name: string;
	title: string;
	company: string;
	testimonial: string;
	image: string;
}
