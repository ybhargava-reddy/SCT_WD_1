import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Target, Sword, Shield } from 'lucide-react';

const GameSection = () => {
  const games = [
    {
      title: 'Cyber Arena',
      description: 'Fast-paced multiplayer battles in a futuristic setting',
      icon: Zap,
      players: '150K+',
      type: 'FPS'
    },
    {
      title: 'Precision Strike',
      description: 'Tactical shooter requiring skill and strategy',
      icon: Target,
      players: '89K+',
      type: 'Tactical'
    },
    {
      title: 'Blade Masters',
      description: 'Medieval combat with modern gaming mechanics',
      icon: Sword,
      players: '95K+',
      type: 'Action'
    },
    {
      title: 'Guardian Protocol',
      description: 'Team-based defense scenarios and missions',
      icon: Shield,
      players: '120K+',
      type: 'Strategy'
    }
  ];

  return (
    <section id="games" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary text-glow">Featured</span>
            <span className="text-foreground ml-3">Games</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dive into our collection of competitive games designed for serious gamers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {games.map((game, index) => (
            <Card 
              key={game.title} 
              className="gaming-hover bg-card/50 border-border/50 backdrop-blur-sm group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <game.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm text-accent font-medium bg-accent/10 px-2 py-1 rounded-full">
                    {game.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {game.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm">
                  {game.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary font-medium">
                    {game.players} players
                  </span>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Play Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameSection;