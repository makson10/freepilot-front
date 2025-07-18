import Header from "./Header";
import HeroSection from "./HeroSection";
import Achievements from "./Achievements";
import HowItWorks from "./HowItWorks";
import FeaturedCategories from "./FeaturedCategories";
import Testimonials from "./Testimonials";
import Footer from "../../components/Footer";

const HomePage = () => (
  <div className="bg-[var(--background-color)] min-h-screen flex flex-col">
    <Header />
    <main className="flex flex-col gap-16">
      <HeroSection />
      <Achievements />
      <HowItWorks />
      <FeaturedCategories />
      <Testimonials />
    </main>
    <Footer />
  </div>
);

export default HomePage;
