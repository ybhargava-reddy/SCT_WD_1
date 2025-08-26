import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import GameSection from '@/components/GameSection';
import TournamentsSection from '@/components/TournamentsSection';
import CommunitySection from '@/components/CommunitySection';
import AboutSection from '@/components/AboutSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <GameSection />
      <TournamentsSection />
      <CommunitySection />
      <AboutSection />
      
      <section id="contact" className="py-20 bg-card/30 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-primary text-glow">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to elevate your gaming experience?
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
