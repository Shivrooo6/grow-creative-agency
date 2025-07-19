import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/80" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-bold tracking-tight">
                <span className="text-foreground">U</span>
                <span className="text-brand-green"> Grow</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl">
                Empowering Businesses Through Creative Marketing & Technology
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-brand-green hover:bg-brand-green-dark text-white px-8 py-6 text-lg"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white px-8 py-6 text-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Our Services
              </Button>
            </div>
          </div>
          
          {/* Right Content - Founder Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Creative Frame Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-green via-brand-green-light to-brand-green opacity-75 blur-lg rounded-3xl"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-green-dark to-brand-green rounded-2xl"></div>
              
              {/* Founder Image */}
              <div className="relative bg-background p-2 rounded-2xl">
                <img
                  src="/lovable-uploads/36cad67e-6329-4888-993d-5a5d0dccd174.png"
                  alt="Founder"
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-xl shadow-2xl"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-green rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-brand-green-light rounded-full opacity-60 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-green rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};