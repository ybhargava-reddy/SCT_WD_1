import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import bgmiImage from '@/assets/bgmi-game.jpg';
import valorantImage from '@/assets/valorant-game.jpg';
import codImage from '@/assets/cod-game.jpg';

const tournaments = [
  {
    id: 1,
    name: 'BGMI',
    fullName: 'Battlegrounds Mobile India',
    image: bgmiImage,
    prizePool: '$50,000',
    participants: '2,048',
    nextTournament: 'Daily at 8 PM IST',
    status: 'Live'
  },
  {
    id: 2,
    name: 'VALORANT',
    fullName: 'VALORANT Championship Series',
    image: valorantImage,
    prizePool: '$75,000',
    participants: '1,024',
    nextTournament: 'Weekly Saturdays',
    status: 'Upcoming'
  },
  {
    id: 3,
    name: 'CALL OF DUTY',
    fullName: 'Call of Duty: Mobile Championships',
    image: codImage,
    prizePool: '$60,000',
    participants: '1,536',
    nextTournament: 'Bi-weekly Events',
    status: 'Registration Open'
  }
];

const TournamentsSection = () => {
  return (
    <section id="tournaments" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-primary text-glow">Elite Tournaments</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compete in daily tournaments with massive prize pools across the most popular gaming titles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tournaments.map((tournament) => (
            <Card key={tournament.id} className="bg-card/50 border-primary/20 gaming-hover overflow-hidden">
              <div className="relative">
                <img 
                  src={tournament.image} 
                  alt={tournament.fullName}
                  className="w-full h-48 object-cover"
                />
                <Badge 
                  className={`absolute top-4 right-4 ${
                    tournament.status === 'Live' 
                      ? 'bg-accent text-accent-foreground' 
                      : tournament.status === 'Upcoming'
                      ? 'bg-secondary text-secondary-foreground'
                      : 'bg-primary text-primary-foreground'
                  }`}
                >
                  {tournament.status}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-primary">{tournament.name}</h3>
                <p className="text-muted-foreground mb-4">{tournament.fullName}</p>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Prize Pool:</span>
                    <span className="font-semibold text-accent">{tournament.prizePool}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Participants:</span>
                    <span className="font-semibold">{tournament.participants}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Next Event:</span>
                    <span className="font-semibold text-secondary">{tournament.nextTournament}</span>
                  </div>
                </div>
                
                <button className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90 py-3 px-4 rounded-md font-medium gaming-hover transition-all">
                  Join Tournament
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TournamentsSection;