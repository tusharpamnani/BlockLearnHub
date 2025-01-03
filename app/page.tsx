import Footer from "@/components/footer";
import { FeaturesSection } from "@/components/landing/featureSection";
import HeroSection from "@/components/landing/Hero";
import { MarqueeDemo } from "@/components/landing/MarqueeDemo";
import { Navbar } from "@/components/landing/Nav";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <FeaturesSection />
    <MarqueeDemo/>
    <Footer />
    </>
  );
}
