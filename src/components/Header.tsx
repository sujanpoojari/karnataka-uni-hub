import { Button } from "@/components/ui/button";
import { Globe, Menu } from "lucide-react";
import { useState } from "react";
import karnatakaEmblem from "@/assets/karnataka-emblem.png";

const Header = () => {
  const [language, setLanguage] = useState<'en' | 'kn'>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'kn' : 'en');
  };

  return (
    <header className="bg-primary shadow-government border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Government Branding */}
          <div className="flex items-center space-x-4">
            <img 
              src={karnatakaEmblem} 
              alt="Government of Karnataka Emblem" 
              className="h-12 w-12"
            />
            <div className="text-primary-foreground">
              <h1 className="text-xl font-bold">
                {language === 'en' ? 'UUCMS' : 'ಯುಯುಸಿಎಂಎಸ್'}
              </h1>
              <p className="text-sm opacity-90">
                {language === 'en' 
                  ? 'Unified University & College Management System' 
                  : 'ಸಮಗ್ರ ವಿಶ್ವವಿದ್ಯಾಲಯ ಮತ್ತು ಕಾಲೇಜು ನಿರ್ವಹಣಾ ವ್ಯವಸ್ಥೆ'
                }
              </p>
            </div>
          </div>

          {/* Navigation and Language Toggle */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Globe className="h-4 w-4 mr-2" />
              {language === 'en' ? 'ಕನ್ನಡ' : 'English'}
            </Button>
            
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10 md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;