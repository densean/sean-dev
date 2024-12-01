import * as React from "react";
import { ITestimonial } from "./interfaces/IPortfolioDetails";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

interface TestimonialsSectionProps {
	testimonials: ITestimonial[];
}

export const TestimonialsSection = ({
	testimonials,
}: TestimonialsSectionProps) => {
	return (
		<section className="bg-gray-50 py-16 px-6 sm:px-12">
			<div className="max-w-7xl mx-auto text-center">
				<h2 className="text-3xl font-semibold text-gray-900 mb-12">
					What Clients Are Saying
				</h2>

				{/* ShadCN Carousel */}
				<Carousel className="w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
					<CarouselContent>
						{testimonials.map((testimonial, index) => (
							<CarouselItem
								key={index}
								className="p-4 flex justify-center md:basis-1/2 lg:basis-1/3"
							>
								<div
									className="max-w-xs bg-white p-6 rounded-lg shadow-lg"
									style={{ borderRadius: "0.5rem" }}
								>
									{/* Profile Image */}
									<img
										className="w-24 h-24 rounded-full mx-auto mb-4"
										src={testimonial.image || "https://via.placeholder.com/150"} // Fallback image
										alt={testimonial.name}
									/>

									{/* Name and Info */}
									<h3 className="text-xl font-bold text-gray-800">
										{testimonial.name}
									</h3>
									<p className="text-gray-500 text-sm mb-2">
										{testimonial.title}
									</p>
									<p className="text-gray-500 text-sm mb-2">
										{testimonial.company}
									</p>

									{/* Testimonial */}
									<p className="text-gray-600 mt-4 italic">
										"{testimonial.testimonial}"
									</p>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>

					{/* Navigation Arrows */}
					<CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-800 bg-gray-100 p-2 rounded-full hover:bg-gray-200">
						<span className="material-icons">chevron_left</span>
					</CarouselPrevious>
					<CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-800 bg-gray-100 p-2 rounded-full hover:bg-gray-200">
						<span className="material-icons">chevron_right</span>
					</CarouselNext>
				</Carousel>
			</div>
		</section>
	);
};
