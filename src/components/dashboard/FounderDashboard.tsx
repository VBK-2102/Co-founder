import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Briefcase, Layers, Phone, Save } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const FounderDashboard = () => {
  const [activeTab, setActiveTab] = useState<"ideas" | "applications" | "profile">("profile");
  const [founderProfile, setFounderProfile] = useState({
    background: "",
    industry: "",
    previousStartups: "",
    whatsapp: ""
  });

  const [newIdea, setNewIdea] = useState({
    title: "",
    description: "",
    requiredSkills: "",
    equity: "",
    compensationType: "equity"
  });

  const handleProfileUpdate = (field: keyof typeof founderProfile, value: string) => {
    setFounderProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleIdeaUpdate = (field: keyof typeof newIdea, value: string) => {
    setNewIdea(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveProfile = () => {
    console.log("Saving founder profile:", founderProfile);
  };

  const handlePostIdea = () => {
    console.log("Posting new idea:", newIdea);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Welcome, VAIBHAV KALUNGADA!</h1>
            <p className="text-muted-foreground">You are logged in as a founder</p>
          </div>
          <Button variant="outline" className="bg-secondary/50 hover:bg-secondary">Logout</Button>
        </div>

        {/* Navigation */}
        <div className="flex space-x-4 bg-secondary/20 p-1 rounded-lg">
          <Button
            variant={activeTab === "ideas" ? "secondary" : "ghost"}
            onClick={() => setActiveTab("ideas")}
            className="flex-1"
          >
            My Ideas
          </Button>
          <Button
            variant={activeTab === "applications" ? "secondary" : "ghost"}
            onClick={() => setActiveTab("applications")}
            className="flex-1"
          >
            Applications
          </Button>
          <Button
            variant={activeTab === "profile" ? "secondary" : "ghost"}
            onClick={() => setActiveTab("profile")}
            className="flex-1"
          >
            Profile
          </Button>
        </div>

        {/* Content */}
        {activeTab === "profile" && (
          <Card className="border-border/10 bg-card/50">
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
                    className="min-h-[100px] bg-secondary/50"
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
                    className="bg-secondary/50"
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
                    className="min-h-[100px] bg-secondary/50"
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
                    className="bg-secondary/50"
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

        {activeTab === "ideas" && (
          <div className="space-y-6">
            <Card className="border-border/10 bg-card/50">
              <CardHeader>
                <CardTitle className="text-xl">Post New Startup Idea</CardTitle>
                <p className="text-muted-foreground">
                  Share your startup idea to find the perfect technical co-founder
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Idea Title
                    </label>
                    <Input
                      placeholder="Enter your startup idea title"
                      value={newIdea.title}
                      onChange={(e) => handleIdeaUpdate("title", e.target.value)}
                      className="bg-secondary/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Description
                    </label>
                    <Textarea
                      placeholder="Describe your startup idea, vision, and goals..."
                      value={newIdea.description}
                      onChange={(e) => handleIdeaUpdate("description", e.target.value)}
                      className="min-h-[100px] bg-secondary/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Required Technical Skills
                    </label>
                    <Input
                      placeholder="e.g., React, Node.js, AWS (comma separated)"
                      value={newIdea.requiredSkills}
                      onChange={(e) => handleIdeaUpdate("requiredSkills", e.target.value)}
                      className="bg-secondary/50"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Equity Range
                      </label>
                      <Input
                        placeholder="e.g., 10-20%"
                        value={newIdea.equity}
                        onChange={(e) => handleIdeaUpdate("equity", e.target.value)}
                        className="bg-secondary/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Compensation Type
                      </label>
                      <Select
                        value={newIdea.compensationType}
                        onValueChange={(value) => handleIdeaUpdate("compensationType", value)}
                      >
                        <SelectTrigger className="bg-secondary/50">
                          <SelectValue placeholder="Select compensation type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="equity">Equity Only</SelectItem>
                          <SelectItem value="equity_salary">Equity + Salary</SelectItem>
                          <SelectItem value="negotiable">Negotiable</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button
                    className="w-full mt-6"
                    onClick={handlePostIdea}
                  >
                    Post Idea
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/10 bg-card/50">
              <CardHeader>
                <CardTitle className="text-xl">My Posted Ideas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">No ideas posted yet.</p>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "applications" && (
          <Card className="border-border/10 bg-card/50">
            <CardHeader>
              <CardTitle className="text-xl">Received Applications</CardTitle>
              <p className="text-muted-foreground">
                Review and respond to developers interested in your ideas
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">No applications received yet.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};