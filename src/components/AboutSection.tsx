import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Gamepad2, GraduationCap, Smartphone } from 'lucide-react';

const services = [
  {
    icon: Gamepad2,
    title: 'Branded Gamified Booths & Events',
    description: 'From trade shows to brand activations—craft interactive experiences that educate, engage, and entertain (inspired by the trade show PowerPlay model)',
    features: [
      'Interactive gaming experiences',
      'Brand activation solutions', 
      'Trade show entertainment',
      'Immersive booth designs'
    ]
  },
  {
    icon: GraduationCap,
    title: 'Educational Game Platforms',
    description: 'Develop games that align with specific learning goals (e.g., onboarding, training, awareness campaigns), leveraging real feedback loops, rewards, and narrative elements.',
    features: [
      'Custom learning objectives',
      'Real-time feedback systems',
      'Reward-based progression',
      'Engaging narrative design'
    ]
  },
  {
    icon: Smartphone,
    title: 'Mobile/Web Casual Games with Meaning',
    description: 'Simple, story-rich experiences—like daily challenges, mini-quests, or scenario simulations that foster retention and engagement over time.',
    features: [
      'Daily challenge systems',
      'Story-driven gameplay',
      'Mini-quest mechanics',
      'Long-term engagement focus'
    ]
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-accent">About PowerPlay Interactive (PPI Gaming)</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading the future of competitive gaming experiences through innovative interactive solutions that bridge entertainment, education, and engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-card/50 border-accent/20 gaming-hover h-full">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-accent/20 rounded-full">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-center text-accent">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10 rounded-2xl p-12 border border-accent/20">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              At PowerPlay Interactive, we believe gaming is more than entertainment—it's a powerful medium for learning, 
              connection, and transformation. We create experiences that not only captivate players but also deliver meaningful 
              value for brands, educators, and communities worldwide.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <div className="text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2M+</div>
                <div className="text-muted-foreground">Players Engaged</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">98%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;