const HeroSection = () => (
	<section
		id="herosection"
		className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-[var(--background-color)]">
		<div className="flex-1 mb-8 md:mb-0 md:mr-12">
			<h1 className="text-4xl md:text-5xl font-extrabold text-[var(--main-color)] mb-4">
				Empowering Freelancers. Connecting Clients.
			</h1>
			<p className="text-lg md:text-xl text-gray-700 mb-6">
				Freepilot is your gateway to top freelance talent and exciting projects.
				Join a thriving community, showcase your skills, and grow your business
				with ease.
			</p>
			<a
				href="#signup"
				className="inline-block px-8 py-3 rounded bg-[var(--main-color)] text-white font-semibold text-lg hover:bg-[var(--secondary-color)] transition">
				Get Started
			</a>
		</div>
		<div className="flex-1 flex justify-center">
			<img
				src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=80"
				alt="Freelance work"
				className="rounded-lg shadow-lg w-full max-w-md object-cover"
			/>
		</div>
	</section>
);

export default HeroSection;
