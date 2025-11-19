import AboutUsSection from "./components/AboutUsSection";
import CTAv3 from "./components/CTASection";

import HomeBanner from "./components/HomeBanner";
import HomeFeaturesSection from "./components/HomeFeatureSection";
import LocationsSection from "./components/LocationSection";
import OurServices from "./components/OurService";
import StatsSection from "./components/StatsSection";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <HomeFeaturesSection />
      <OurServices />
      <StatsSection />
      <AboutUsSection />
      <Testimonials />
      <LocationsSection />

      <CTAv3 />
    </>
  );
}
