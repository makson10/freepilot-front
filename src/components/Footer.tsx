import { Link } from "react-router";

const Footer = () => (
  <footer className="w-full py-8 px-8 bg-white border-t mt-auto">
    <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-6">
      <div className="text-[var(--main-color)] font-bold text-lg mb-4 md:mb-0">
        Freepilot
      </div>
      <div className="flex gap-6 text-gray-600 text-sm mb-4 md:mb-0">
        <Link to="#" className="hover:text-[var(--main-color)]">
          About
        </Link>
        <Link to="#" className="hover:text-[var(--main-color)]">
          Contact
        </Link>
        <Link to="#" className="hover:text-[var(--main-color)]">
          Privacy Policy
        </Link>
      </div>
      <div className="text-gray-400 text-xs">
        &copy; {new Date().getFullYear()} Freepilot. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
