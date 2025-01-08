import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { briefcase, layers, phone, save } from "lucide-react";

export const FounderDashboard = () => {
  const [activeTab, setActiveTab] = useState<"ideas" | "applications" | "profile">("profile");
  const [founderProfile, setFounderProfile] = useState({
    background: "",
    industry: "",
    previousStartups: "",
    whatsapp: ""
  });

  const handleProfileUpdate = (field: keyof typeof founderProfile, value: string) => {
    setFounderProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveProfile = () => {
    // TODO: Implement profile saving logic
    console.log("Saving profile:", founderProfile);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Welcome, VAIBHAV KALUNGADA!</h1>
            <p className="text-muted-foreground">You are logged in as a founder</p>
          </div>
          <Button variant="outline">Logout</Button>
        </div>

        {/* Navigation */}
        <div className="flex space-x-4 border-b border-border">
          <Button
            variant={activeTab === "ideas" ? "default" : "ghost"}
            onClick={() => setActiveTab("ideas")}
          >
            My Ideas
          </Button>
          <Button
            variant={activeTab === "applications" ? "default" : "ghost"}
            onClick={() => setActiveTab("applications")}
          >
            Applications
          </Button>
          <Button
            variant={activeTab === "profile" ? "default" : "ghost"}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </Button>
        </div>

        {/* Content */}
        {activeTab === "profile" && (
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-xl">Founder Profile</CardTitle>
              <p className="text-muted-foreground">
                Complete your profile to attract the best technical co-founders
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Professional Background
                  </label>
                  <Textarea
                    placeholder="Share your professional experience and achievements..."
                    value={founderProfile.background}
                    onChange={(e) => handleProfileUpdate("background", e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Industry Focus
                  </label>
                  <Input
                    placeholder="e.g., Fintech, Healthcare, E-commerce"
                    value={founderProfile.industry}
                    onChange={(e) => handleProfileUpdate("industry", e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Previous Startups
                  </label>
                  <Textarea
                    placeholder="Share any previous startup experience..."
                    value={founderProfile.previousStartups}
                    onChange={(e) => handleProfileUpdate("previousStartups", e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    WhatsApp Number
                  </label>
                  <Input
                    placeholder="+1234567890"
                    value={founderProfile.whatsapp}
                    onChange={(e) => handleProfileUpdate("whatsapp", e.target.value)}
                  />
                </div>

                <Button
                  className="w-full mt-6"
                  onClick={handleSaveProfile}
                >
                  Save Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};