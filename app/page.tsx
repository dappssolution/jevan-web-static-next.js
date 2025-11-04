 
import AboutUsSection from "./components/AboutUsSection";
import CTAv3 from "./components/CTASection";
 
import HeroSection from "./components/HeroSection";
import LocationsSection from "./components/LocationSection";
import OurServices from "./components/OurService";
import ServicesSection from "./components/Services/ServiceSection";
import StatsSection from "./components/StatsSection";
import Testimonials from "./components/Testimonials";
import WhyUsSection from "./components/WhyUsSection";
 

export default function Home() {
  return (
     <>
      
      <HeroSection/>
      <WhyUsSection/>
      <OurServices/>
      <StatsSection/>
      <ServicesSection/>
      <AboutUsSection/>
        <Testimonials/>
      <LocationsSection/>
    
      <CTAv3/>
     </>
  );
}
