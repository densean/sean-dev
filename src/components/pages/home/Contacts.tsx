import { Link } from "react-router-dom";

export const ContactSection = () => {
	return (
		<section className="bg-gray-100 py-16 px-6 sm:px-12">
			<div className="max-w-7xl mx-auto text-center">
				<h2 className="text-3xl font-semibold text-gray-900 mb-4">
					Let's Get In Touch!
				</h2>
				<p className="text-xl text-gray-700 mb-6">
					Have any questions or want to collaborate? I'm just a click away.
				</p>
				<Link to="/contact">
					<button
						className="px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300"
						style={{ borderRadius: "1rem" }}
					>
						Send me a message
					</button>
				</Link>
			</div>
		</section>
	);
};
