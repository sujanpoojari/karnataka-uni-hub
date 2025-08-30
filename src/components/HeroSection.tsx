import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, FileText, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Digital Education Management
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Streamlined university and college administration system for Karnataka's educational institutions.
            Secure, efficient, and comprehensive management platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="secondary" className="text-primary font-semibold">
              Student Portal
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Faculty Login
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <Card className="bg-card/10 border-primary-foreground/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <GraduationCap className="h-8 w-8 mx-auto mb-4 text-accent" />
                <h3 className="font-semibold mb-2">Student Management</h3>
                <p className="text-sm opacity-80">Comprehensive student records and academic tracking</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/10 border-primary-foreground/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 mx-auto mb-4 text-accent" />
                <h3 className="font-semibold mb-2">Faculty Portal</h3>
                <p className="text-sm opacity-80">Faculty management and academic administration</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/10 border-primary-foreground/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <FileText className="h-8 w-8 mx-auto mb-4 text-accent" />
                <h3 className="font-semibold mb-2">Administrative Tools</h3>
                <p className="text-sm opacity-80">Centralized administration and reporting systems</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/10 border-primary-foreground/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Shield className="h-8 w-8 mx-auto mb-4 text-accent" />
                <h3 className="font-semibold mb-2">Secure Access</h3>
                <p className="text-sm opacity-80">Government-grade security and data protection</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;