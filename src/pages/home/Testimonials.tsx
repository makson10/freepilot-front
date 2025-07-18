const testimonials = [
	{
		quote:
			'Freepilot connected me with amazing clients and helped me grow my freelance business faster than ever!',
		name: 'Alex P.',
		role: 'Web Developer',
	},
	{
		quote:
			'I found the perfect designer for my project in just a few hours. The process was smooth and secure.',
		name: 'Maria L.',
		role: 'Startup Founder',
	},
	{
		quote:
			'The platform is easy to use and the talent pool is top-notch. Highly recommended!',
		name: 'James T.',
		role: 'Marketing Manager',
	},
];

const Testimonials = () => (
	<section
		id="testimonials"
		className="w-full py-12 bg-[var(--background-color)] flex flex-col items-center my-12">
		<h2 className="text-3xl font-bold text-[var(--main-color)] mb-8">
			What Our Users Say
		</h2>
		<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
			{testimonials.map((t) => (
				<div
					key={t.name}
					className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
					<p className="italic text-gray-700 mb-4">"{t.quote}"</p>
					<span className="font-semibold text-[var(--main-color)]">
						{t.name}
					</span>
					<span className="text-sm text-gray-500">{t.role}</span>
				</div>
			))}
		</div>
	</section>
);

export default Testimonials;
