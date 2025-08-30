import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Lock, User, Building } from "lucide-react";

const LoginSection = () => {
  const [userType, setUserType] = useState<string>("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userType || !credentials.username || !credentials.password) {
      toast({
        variant: "destructive",
        title: "Login Error",
        description: "Please fill in all required fields"
      });
      return;
    }

    // Demo login functionality
    toast({
      title: "Login Successful",
      description: `Welcome ${userType}! Redirecting to dashboard...`,
    });
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <Card className="shadow-government">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary flex items-center justify-center gap-2">
                <Lock className="h-6 w-6" />
                Secure Login
              </CardTitle>
              <p className="text-muted-foreground">Access your UUCMS account</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="userType">User Type</Label>
                  <Select value={userType} onValueChange={setUserType} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select user type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          Student
                        </div>
                      </SelectItem>
                      <SelectItem value="faculty">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          Faculty
                        </div>
                      </SelectItem>
                      <SelectItem value="admin">
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4" />
                          Administrator
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="username">Username / ID</Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter your username or ID"
                    value={credentials.username}
                    onChange={(e) => setCredentials(prev => ({...prev, username: e.target.value}))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={credentials.password}
                    onChange={(e) => setCredentials(prev => ({...prev, password: e.target.value}))}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90">
                  Login to UUCMS
                </Button>
              </form>

              <div className="text-center space-y-2">
                <Button variant="link" className="text-primary">
                  Forgot Password?
                </Button>
                <div className="text-sm text-muted-foreground">
                  Need help? Contact your institution's IT department
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;