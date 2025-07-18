import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

const Layout = () => (
	<div className="bg-[var(--background-color)] min-h-screen flex flex-col">
		<Header />
		<Outlet />
		<Footer />
	</div>
);

export default Layout;
