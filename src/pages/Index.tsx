import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import GameSection from '@/components/GameSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <GameSection />
      
      {/* Additional sections can be added here */}
      <section id="tournaments" className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-primary text-glow">Tournaments</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Compete in daily tournaments with massive prize pools
          </p>
        </div>
      </section>
      
      <section id="community" className="py-20 bg-card/30 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-secondary">Community</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Join our thriving community of passionate gamers
          </p>
        </div>
      </section>
      
      <section id="about" className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-accent">About PPI Gaming</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Leading the future of competitive gaming experiences
          </p>
        </div>
      </section>
      
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
