import AboutBanner from "../components/About/AboutBanner";
import AccessoriesSection from "../components/About/AccessoriesSection";
import MoreAboutUsSection from "../components/About/MoreAboutUs";
import TeamSection from "../components/About/TeamSection";
import CTAv3 from "../components/CTASection";

export default function AboutPage() {
  return (
    <>
      <AboutBanner />
      <MoreAboutUsSection />
      <AccessoriesSection />
      <TeamSection />
      <CTAv3 />
    </>
  );
}
