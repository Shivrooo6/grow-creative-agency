import { Card, CardContent } from "@/components/ui/card";
import { 
  Video, 
  Camera, 
  TrendingUp, 
  Edit3, 
  Box, 
  Palette, 
  Megaphone,
  Share2,
  Building,
  Plane,
  Smartphone,
  Globe,
  Search,
  Award,
  Target,
  Users
} from "lucide-react";

const services = [
  { icon: Video, title: "Video Shoot", description: "Professional video production services" },
  { icon: Camera, title: "Cinematic Shoot", description: "High-quality cinematic video production" },
  { icon: TrendingUp, title: "Performance Marketing", description: "Data-driven marketing campaigns" },
  { icon: Edit3, title: "Video Editing", description: "Professional video editing and post-production" },
  { icon: Box, title: "3D Editing", description: "Advanced 3D editing and effects" },
  { icon: Palette, title: "3D Modeling", description: "Custom 3D modeling and animation" },
  { icon: Camera, title: "Ad Shoot", description: "Commercial advertisement photography" },
  { icon: Share2, title: "Social Media Management", description: "Complete social media strategy" },
  { icon: Building, title: "Real Estate Shoot", description: "Professional real estate photography" },
  { icon: Plane, title: "Drone Shoot", description: "Aerial photography and videography" },
  { icon: Smartphone, title: "Android Development", description: "Custom mobile app development" },
  { icon: Globe, title: "Website Development", description: "Modern web development solutions" },
  { icon: Search, title: "SEO", description: "Search engine optimization services" },
  { icon: Award, title: "Branding & Creative Campaigns", description: "Complete brand identity solutions" },
  { icon: Target, title: "Digital Advertising", description: "Facebook & Google Ads management" },
  { icon: Users, title: "Influencer Marketing", description: "Strategic influencer partnerships" }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Our <span className="text-brand-green">Services</span>
          </h2>
          <div className="w-24 h-1 bg-brand-green mx-auto"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive creative and marketing solutions to grow your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border hover:border-brand-green/50"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-brand-green/10 rounded-full flex items-center justify-center group-hover:bg-brand-green group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-brand-green group-hover:text-white" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-brand-green transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};