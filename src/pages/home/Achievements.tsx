const stats = [
	{ label: 'Freelancers', value: '12,000+' },
	{ label: 'Projects Completed', value: '35,000+' },
	{ label: 'Client Satisfaction', value: '98%' },
	{ label: 'Countries Served', value: '50+' },
];

const Achievements = () => (
	<section
		id="achievements"
		className="w-full py-12 bg-white flex flex-col items-center my-12">
		<h2 className="text-3xl font-bold text-[var(--main-color)] mb-8">
			Our Achievements
		</h2>
		<div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl">
			{stats.map((stat) => (
				<div
					key={stat.label}
					className="flex flex-col items-center p-6 bg-[var(--background-color)] rounded-lg shadow-md">
					<span className="text-2xl font-extrabold text-[var(--secondary-color)]">
						{stat.value}
					</span>
					<span className="text-gray-700 mt-2">{stat.label}</span>
				</div>
			))}
		</div>
	</section>
);

export default Achievements;
