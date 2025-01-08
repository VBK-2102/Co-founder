import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Briefcase, Send } from "lucide-react";

export const DeveloperDashboard = () => {
  const [activeTab, setActiveTab] = useState<"ideas" | "applications" | "profile">("profile");
  const [devProfile, setDevProfile] = useState({
    githubUsername: "",
    skills: "",
    experience: "",
    compensation: "",
    whatsapp: ""
  });

  const handleProfileUpdate = (field: keyof typeof devProfile, value: string) => {
    setDevProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveProfile = () => {
    // TODO: Implement profile saving logic
    console.log("Saving developer profile:", devProfile);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Developer Dashboard</h1>
            <p className="text-muted-foreground">Find your next startup opportunity</p>
          </div>
          <Button variant="outline">Logout</Button>
        </div>

        {/* Navigation */}
        <div className="flex space-x-4 border-b border-border">
          <Button
            variant={activeTab === "ideas" ? "default" : "ghost"}
            onClick={() => setActiveTab("ideas")}
          >
            Browse Ideas
          </Button>
          <Button
            variant={activeTab === "applications" ? "default" : "ghost"}
            onClick={() => setActiveTab("applications")}
          >
            My Applications
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
              <CardTitle className="text-xl">Developer Profile</CardTitle>
              <p className="text-muted-foreground">
                Complete your profile to connect with founders
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    GitHub Username
                  </label>
                  <Input
                    placeholder="your-github-username"
                    value={devProfile.githubUsername}
                    onChange={(e) => handleProfileUpdate("githubUsername", e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Skills
                  </label>
                  <Input
                    placeholder="e.g., React, Node.js, Python, AWS"
                    value={devProfile.skills}
                    onChange={(e) => handleProfileUpdate("skills", e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Experience
                  </label>
                  <Textarea
                    placeholder="Share your technical experience and achievements..."
                    value={devProfile.experience}
                    onChange={(e) => handleProfileUpdate("experience", e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Compensation Expectations
                  </label>
                  <Input
                    placeholder="e.g., Equity %, Monthly salary, or both"
                    value={devProfile.compensation}
                    onChange={(e) => handleProfileUpdate("compensation", e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    WhatsApp Number
                  </label>
                  <Input
                    placeholder="+1234567890"
                    value={devProfile.whatsapp}
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