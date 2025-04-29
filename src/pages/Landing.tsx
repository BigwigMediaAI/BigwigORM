import About from "../components/About";
import Blog from "../components/Blog";
import FAQ from "../components/Faq";
import FeatureSection from "../components/Features";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
import Nav from "../components/Nav";
// import PricingPlans from '../components/Pricing';
import TestimonialSection from "../components/Testimonial";
import Hero from "../components/Hero";

function Landing() {
  return (
    <div className="bg-black">
      <Nav />
      <Hero />
      <HowItWorks />
      <FeatureSection />
      <TestimonialSection />
      <About />
      <Blog />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Landing;
