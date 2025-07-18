const categories = [
	{
		icon: '💻',
		title: 'Web Development',
		desc: 'Build modern websites, apps, and platforms.',
	},
	{
		icon: '🎨',
		title: 'Design & Creative',
		desc: 'Logos, branding, UI/UX, and more.',
	},
	{
		icon: '✍️',
		title: 'Writing & Translation',
		desc: 'Content, copywriting, and localization.',
	},
	{
		icon: '📈',
		title: 'Marketing',
		desc: 'SEO, social media, and digital marketing.',
	},
];

const FeaturedCategories = () => (
	<section
		id="featuredcategories"
		className="w-full py-12 bg-white flex flex-col items-center my-12">
		<h2 className="text-3xl font-bold text-[var(--main-color)] mb-8">
			Featured Categories
		</h2>
		<div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-5xl">
			{categories.map((cat) => (
				<div
					key={cat.title}
					className="flex flex-col items-center p-6 bg-[var(--background-color)] rounded-lg shadow-md">
					<span className="text-4xl mb-4">{cat.icon}</span>
					<h3 className="text-xl font-semibold text-[var(--main-color)] mb-2">
						{cat.title}
					</h3>
					<p className="text-gray-700 text-center">{cat.desc}</p>
				</div>
			))}
		</div>
	</section>
);

export default FeaturedCategories;
