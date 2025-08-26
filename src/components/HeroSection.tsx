import { Button } from '@/components/ui/button';
import { Play, Users, Trophy } from 'lucide-react';
import heroImage from '@/assets/gaming-hero.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Gaming Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-primary text-glow">PowerPlay</span>
            <br />
            <span className="text-foreground">Interactive Gaming</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Experience the future of competitive gaming. Join thousands of players in epic battles, 
            tournaments, and immersive gaming experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="gaming-hover bg-primary text-primary-foreground hover:bg-primary-glow glow-primary px-8 py-4 text-lg"
            >
              <Play className="mr-2 h-5 w-5" />
              Start Playing
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="gaming-hover border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 text-lg"
            >
              <Users className="mr-2 h-5 w-5" />
              Join Community
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary text-glow mb-2">500K+</div>
              <div className="text-muted-foreground">Active Players</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">1,000+</div>
              <div className="text-muted-foreground">Daily Tournaments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">$2M+</div>
              <div className="text-muted-foreground">Prize Pool</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;