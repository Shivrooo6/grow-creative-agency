import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, Play, Rocket, TrendingUp, Palette, Zap, Trophy } from "lucide-react";

export const Hero = () => {
  const outcomes = [
    { icon: Rocket, label: "Grow", tooltip: "Lead Generation" },
    { icon: TrendingUp, label: "Scale", tooltip: "Performance Marketing" },
    { icon: Palette, label: "Create", tooltip: "Creative Branding" },
    { icon: Zap, label: "Launch", tooltip: "Tech Solutions" },
    { icon: Trophy, label: "Dominate", tooltip: "Market Leadership" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(61,22,117,0.3),transparent_70%)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Founder Image */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative group">
              {/* 3D Wireframe Background Effect */}
              <div className="absolute -inset-8 opacity-30">
                <div className="w-full h-full bg-gradient-to-br from-neon-green/20 via-purple/30 to-transparent rounded-3xl animate-float" />
                <div className="absolute top-4 left-4 w-12 h-12 border-2 border-neon-green/40 rounded-lg animate-pulse" />
                <div className="absolute bottom-8 right-8 w-8 h-8 border-2 border-purple/60 rounded-full animate-bounce" />
              </div>
              
              {/* Main Frame Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-neon-green via-purple-light to-neon-green opacity-75 blur-xl rounded-3xl animate-pulse-glow"></div>
              <div className="absolute -inset-2 bg-purple-gradient rounded-2xl shadow-2xl"></div>
              
              {/* TODO: Replace with actual founder image */}
              <div className="relative bg-dark-surface p-3 rounded-2xl">
                <img
                  src="/lovable-uploads/93903fe1-351d-42fa-b1c6-7ce782e9128a.png"
                  alt="Founder - U Grow Agency"
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Floating Holographic Elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-neon-green/30 rounded-full animate-float blur-sm"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple/40 rounded-lg animate-pulse"></div>
              <div className="absolute top-1/2 -right-8 w-6 h-20 bg-gradient-to-b from-neon-green/50 to-transparent rounded-full animate-bounce"></div>
            </div>
          </div>
          
          {/* Right Content - Text & Icons */}
          <div className="text-center lg:text-left space-y-8 order-1 lg:order-2">
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-none">
                <span className="text-white">Empowering Businesses</span>
                <br />
                <span className="gradient-text text-shadow-neon">to Grow Faster.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-xl">
                Creative + Performance + Tech under one roof.
              </p>
            </div>

            {/* Outcome Icons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              {outcomes.map((outcome, index) => {
                const IconComponent = outcome.icon;
                return (
                  <div 
                    key={outcome.label}
                    className="group relative"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="bg-dark-surface border border-neon-green/30 rounded-lg p-3 hover:bg-neon-green/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-neon-green/25">
                      <IconComponent className="h-6 w-6 text-neon-green group-hover:animate-pulse" />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-dark-surface text-xs text-neon-green px-2 py-1 rounded border border-neon-green/30 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {outcome.tooltip}
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="bg-neon-green text-bg-dark hover:bg-neon-green/90 shine-animation neon-glow font-bold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
                  >
                    Get Proposal
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-dark-surface border-neon-green/30 max-w-4xl max-h-[80vh] overflow-hidden">
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-neon-green mb-4">Get Your Free Growth Proposal</h3>
                    <iframe 
                      src="https://docs.google.com/forms/d/e/1FAIpQLSc1sTAAXin64mEFrrCqDo7rLNEuYjqySQ5Gu77qwp9xgRFlHg/viewform?embedded=true" 
                      width="100%" 
                      height="600" 
                      frameBorder="0" 
                      marginHeight={0} 
                      marginWidth={0}
                      className="rounded-lg"
                    >
                      Loading…
                    </iframe>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-bg-dark px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="mr-2 h-5 w-5" />
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-green/60 rounded-full flex justify-center bg-dark-surface/50">
          <div className="w-1 h-3 bg-neon-green rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};