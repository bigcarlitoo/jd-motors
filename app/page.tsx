import FeaturedVehicles from '@/components/home/FeaturedVehicles';
import SearchBar from '@/components/home/SearchBar';
import ThematicSections from '@/components/home/ThematicSections';
import HeroSection from '@/components/home/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import LatestNews from '@/components/home/LatestNews';
import { FadeIn } from '@/components/motion/fade-in';

export default function Home() {
  return (
    <div className="space-y-16 bg-white">
      <HeroSection />
      <FadeIn>
        <div className="container mx-auto px-4">
          <SearchBar />
          <FeaturedVehicles />
          <ThematicSections />
          <ServicesOverview />
          <LatestNews />
        </div>
      </FadeIn>
    </div>
  );
}