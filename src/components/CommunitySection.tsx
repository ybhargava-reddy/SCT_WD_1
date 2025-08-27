import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Instagram, Youtube, Twitter } from 'lucide-react';
import discordLogo from '@/assets/discord-logo.png';

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    followers: '125K',
    description: 'Daily highlights, behind-the-scenes content, and community spotlights',
    url: '#',
    color: 'text-pink-500'
  },
  {
    name: 'YouTube',
    icon: Youtube,
    followers: '89K',
    description: 'Tournament streams, tutorials, and exclusive gaming content',
    url: '#',
    color: 'text-red-500'
  },
  {
    name: 'Discord',
    icon: 'discord',
    followers: '45K',
    description: 'Real-time chat, team formation, and community events',
    url: '#',
    color: 'text-indigo-500'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    followers: '67K',
    description: 'Latest updates, announcements, and live tournament coverage',
    url: '#',
    color: 'text-blue-500'
  }
];

const CommunitySection = () => {
  return (
    <section id="community" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-secondary">Gaming Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our thriving community of passionate gamers across multiple platforms. Connect, compete, and grow together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <Card key={social.name} className="bg-card/50 border-primary/20 gaming-hover group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-muted/50 rounded-full group-hover:bg-primary/20 transition-all">
                      {social.name === 'Discord' ? (
                        <img src={discordLogo} alt="Discord" className="w-8 h-8" />
                      ) : (
                        <IconComponent className={`w-8 h-8 ${social.color} group-hover:text-primary transition-colors`} />
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{social.name}</h3>
                  <div className="text-2xl font-bold text-accent mb-3">{social.followers}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {social.description}
                  </p>
                  
                  <button className="mt-4 w-full bg-secondary/20 hover:bg-secondary/30 text-secondary py-2 px-4 rounded-md font-medium transition-all gaming-hover">
                    Follow
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Join the PPI Gaming Universe</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Connect with players worldwide, participate in exclusive events, and be the first to know about new tournaments and gaming opportunities.
            </p>
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 py-3 px-8 rounded-md font-medium gaming-hover glow-primary">
              Join Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;