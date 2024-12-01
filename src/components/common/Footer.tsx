import React from "react";

export const Footer = () => {
	return (
		<footer className="bg-[#191919] text-white py-8">
			{/* First Section: Heading */}
			<div className="h-[3rem] bg-[#191919] content-center">
				<h5 className="m-0 text-white mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
					Turning imaginations into reality
				</h5>
			</div>

			{/* Main Footer Content */}
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-8">
				{/* Footer Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{/* First Column: Name (Denis Sean) */}
					<div className="flex justify-center sm:justify-start">
						<h1 className="text-2xl font-semibold">DENIS SEAN</h1>
					</div>

					{/* Second Column: Contacts (Email & Phone) */}
					<div className="flex flex-col  sm:text-left">
						<h6 className="text-lg font-semibold mb-2">Contacts</h6>
						<div className="flex items-center mb-2">
							<i className="fa-solid fa-envelope mr-2"></i>
							<a
								href="mailto:john.doe@example.com"
								className="text-gray-400 hover:text-white"
							>
								john.doe@example.com
							</a>
						</div>
						<div className="flex items-center">
							<i className="fa-solid fa-phone mr-2"></i>
							<a
								href="tel:+1234567890"
								className="text-gray-400 hover:text-white"
							>
								+1234567890
							</a>
						</div>
					</div>

					{/* Third Column: Social Links */}
					<div className="flex flex-col  sm:justify-end sm:text-left">
						<h6 className="text-lg font-semibold mb-2">Socials</h6>
						<div className=" ">
							<a
								href="https://www.linkedin.com/in/johndoe"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white flex items-center"
							>
								<i className="fa-brands fa-linkedin mr-2"></i> LinkedIn
							</a>
							<a
								href="https://www.instagram.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white flex items-center"
							>
								<i className="fa-brands fa-instagram mr-2"></i> Instagram
							</a>
							<a
								href="https://www.facebook.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white flex items-center"
							>
								<i className="fa-brands fa-facebook mr-2"></i> Facebook
							</a>
							<a
								href="https://github.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white flex items-center"
							>
								<i className="fa-brands fa-github mr-2"></i>GitHub
							</a>
						</div>
					</div>
				</div>

				{/* Footer Divider */}
				<hr className="my-8 border-gray-600" />

				{/* Copyright Section */}
				<div className="">
					<p className="text-sm text-gray-400">
						&copy; 2024 Sean. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};
