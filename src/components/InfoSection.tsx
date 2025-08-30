import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, FileText, Shield, Info, Download } from "lucide-react";

const InfoSection = () => {
  const notices = [
    {
      title: "System Maintenance Notification",
      date: "2024-01-15",
      type: "maintenance",
      description: "Scheduled maintenance on January 20th from 2:00 AM to 6:00 AM IST"
    },
    {
      title: "New Academic Session Registration",
      date: "2024-01-10",
      type: "announcement",
      description: "Registration for 2024-25 academic session now open for all institutions"
    },
    {
      title: "Security Policy Update",
      date: "2024-01-05",
      type: "policy",
      description: "Updated data security policies for enhanced protection"
    }
  ];

  const policies = [
    {
      title: "Privacy Policy",
      description: "Information on data collection, usage, and protection",
      icon: Shield
    },
    {
      title: "Terms of Service",
      description: "Guidelines for system usage and user responsibilities",
      icon: FileText
    },
    {
      title: "Data Security Policy",
      description: "Comprehensive security measures and protocols",
      icon: Shield
    },
    {
      title: "User Manual",
      description: "Complete guide for system navigation and features",
      icon: Info
    }
  ];

  const getNoticeTypeColor = (type: string) => {
    switch (type) {
      case 'maintenance': return 'warning';
      case 'announcement': return 'default';
      case 'policy': return 'secondary';
      default: return 'default';
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Notices Section */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Bell className="h-5 w-5" />
                Important Notices
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {notices.map((notice, index) => (
                <div key={index} className="border-l-4 border-primary pl-4 py-2">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-foreground">{notice.title}</h4>
                    <Badge variant={getNoticeTypeColor(notice.type) as any}>
                      {notice.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{notice.description}</p>
                  <span className="text-xs text-muted-foreground">{notice.date}</span>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4">
                View All Notices
              </Button>
            </CardContent>
          </Card>

          {/* Policies & Documentation */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <FileText className="h-5 w-5" />
                Policies & Documentation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {policies.map((policy, index) => {
                const IconComponent = policy.icon;
                return (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <IconComponent className="h-5 w-5 text-primary" />
                      <div>
                        <h4 className="font-medium text-foreground">{policy.title}</h4>
                        <p className="text-sm text-muted-foreground">{policy.description}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>

        {/* System Information */}
        <Card className="mt-8 shadow-card">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">500+</h3>
                <p className="text-muted-foreground">Registered Institutions</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">50,000+</h3>
                <p className="text-muted-foreground">Active Students</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">99.9%</h3>
                <p className="text-muted-foreground">System Uptime</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InfoSection;