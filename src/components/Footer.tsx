import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Government Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Government of Karnataka</h3>
            <p className="text-sm opacity-90 mb-4">
              Department of Higher Education<br />
              Education Secretariat<br />
              Vidhana Soudha, Bengaluru - 560001
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91-80-2225-2500</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>admin@uucms.karnataka.gov.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Button variant="link" className="p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground">Student Portal</Button></li>
              <li><Button variant="link" className="p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground">Faculty Login</Button></li>
              <li><Button variant="link" className="p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground">Admin Dashboard</Button></li>
              <li><Button variant="link" className="p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground">Help & Support</Button></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Button variant="link" className="p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground">User Manual</Button></li>
              <li><Button variant="link" className="p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground">System Requirements</Button></li>
              <li><Button variant="link" className="p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground">FAQ</Button></li>
              <li><Button variant="link" className="p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground">Downloads</Button></li>
            </ul>
          </div>

          {/* Related Sites */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Related Sites</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Button variant="link" className="p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground">
                  Karnataka.gov.in <ExternalLink className="h-3 w-3 ml-1 inline" />
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground">
                  KSHE Portal <ExternalLink className="h-3 w-3 ml-1 inline" />
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground">
                  AICTE Portal <ExternalLink className="h-3 w-3 ml-1 inline" />
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground">
                  UGC Portal <ExternalLink className="h-3 w-3 ml-1 inline" />
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="opacity-80 mb-4 md:mb-0">
            © 2024 Government of Karnataka. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Button variant="link" className="p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground text-sm">
              Privacy Policy
            </Button>
            <Button variant="link" className="p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground text-sm">
              Terms of Service
            </Button>
            <Button variant="link" className="p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground text-sm">
              Accessibility
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;