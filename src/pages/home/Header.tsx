import { Link } from 'react-router';

const Header = () => (
	<header className="w-full flex items-center justify-between p-4 bg-white shadow-md mb-8">
		<div className="flex items-center gap-2">
			<span className="text-2xl font-bold text-[var(--main-color)]">
				Freepilot
			</span>
		</div>
		<nav className="flex gap-6 text-[var(--main-color)] font-medium">
			<a
				href="#herosection"
				className="hover:text-[var(--secondary-color)] transition">
				Hero Section
			</a>
			<a
				href="#howitworks"
				className="hover:text-[var(--secondary-color)] transition">
				How It Works
			</a>
			<a
				href="#achievements"
				className="hover:text-[var(--secondary-color)] transition">
				Achievements
			</a>
			<a
				href="#featuredcategories"
				className="hover:text-[var(--secondary-color)] transition">
				Featured Categories
			</a>
			<a
				href="#testimonials"
				className="hover:text-[var(--secondary-color)] transition">
				Testimonials
			</a>
			<Link
				to="/signup"
				className="ml-4 px-4 py-2 rounded bg-[var(--main-color)] text-white hover:bg-[var(--secondary-color)] transition">
				Sign Up
			</Link>
		</nav>
	</header>
);

export default Header;
