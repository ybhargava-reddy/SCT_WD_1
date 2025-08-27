import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import GameSection from '@/components/GameSection';
import TournamentsSection from '@/components/TournamentsSection';
import CommunitySection from '@/components/CommunitySection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <GameSection />
      <TournamentsSection />
      <CommunitySection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
