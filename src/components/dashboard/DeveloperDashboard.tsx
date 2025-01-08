import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Briefcase, Send, Search } from "lucide-react";
import { IdeaCard } from "./developer/IdeaCard";
import { ApplicationCard } from "./developer/ApplicationCard";

// Mock data for demonstration
const mockIdeas = [
  {
    id: "1",
    title: "AI-Powered Healthcare Platform",
    description: "Building a revolutionary healthcare platform that uses AI to predict and prevent diseases.",
    requiredSkills: ["React", "Python", "TensorFlow"],
    equity: "15-20%",
    compensationType: "Equity + Salary"
  },
  {
    id: "2",
    title: "Sustainable E-commerce Platform",
    description: "Creating an eco-friendly marketplace for sustainable products.",
    requiredSkills: ["React", "Node.js", "PostgreSQL"],
    equity: "10-15%",
    compensationType: "Equity Only"
  }
];

const mockApplications = [
  {
    id: "1",
    ideaTitle: "AI-Powered Healthcare Platform",
    status: "accepted" as const,
    appliedDate: "2024-02-20",
    founderName: "John Doe",
    whatsappNumber: "+1234567890"
  },
  {
    id: "2",
    ideaTitle: "Sustainable E-commerce Platform",
    status: "pending" as const,
    appliedDate: "2024-02-22"
  }
];

export const DeveloperDashboard = () => {
  const [activeTab, setActiveTab] = useState<"ideas" | "applications" | "profile">("profile");
  const [devProfile, setDevProfile] = useState({
    githubUsername: "",
    skills: "",
    experience: "",
    compensation: "",
    portfolioUrl: "",
    whatsapp: ""
  });

  const [searchQuery, setSearchQuery] = useState("");

  const handleProfileUpdate = (field: keyof typeof devProfile, value: string) => {
    setDevProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveProfile = () => {
    console.log("Saving developer profile:", devProfile);
  };

  const handleApplyToIdea = (ideaId: string) => {
    console.log("Applying to idea:", ideaId);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Welcome, Developer!</h1>
            <p className="text-muted-foreground">Find your next startup opportunity</p>
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
            Browse Ideas
          </Button>
          <Button
            variant={activeTab === "applications" ? "secondary" : "ghost"}
            onClick={() => setActiveTab("applications")}
            className="flex-1"
          >
            My Applications
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
              <CardTitle className="text-xl">Developer Profile</CardTitle>
              <p className="text-muted-foreground">
                Complete your profile to stand out to founders
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    GitHub Username
                  </label>
                  <div className="relative">
                    <Input
                      placeholder="your-github-username"
                      value={devProfile.githubUsername}
                      onChange={(e) => handleProfileUpdate("githubUsername", e.target.value)}
                      className="bg-secondary/50 pl-10"
                    />
                    <Github className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Technical Skills
                  </label>
                  <Input
                    placeholder="e.g., React, Node.js, AWS (comma separated)"
                    value={devProfile.skills}
                    onChange={(e) => handleProfileUpdate("skills", e.target.value)}
                    className="bg-secondary/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Professional Experience
                  </label>
                  <Textarea
                    placeholder="Share your relevant work experience..."
                    value={devProfile.experience}
                    onChange={(e) => handleProfileUpdate("experience", e.target.value)}
                    className="min-h-[100px] bg-secondary/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Preferred Compensation
                  </label>
                  <Input
                    placeholder="e.g., Equity range, salary expectations"
                    value={devProfile.compensation}
                    onChange={(e) => handleProfileUpdate("compensation", e.target.value)}
                    className="bg-secondary/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Portfolio URL
                  </label>
                  <Input
                    placeholder="https://your-portfolio.com"
                    value={devProfile.portfolioUrl}
                    onChange={(e) => handleProfileUpdate("portfolioUrl", e.target.value)}
                    className="bg-secondary/50"
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
                <CardTitle className="text-xl">Available Startup Ideas</CardTitle>
                <p className="text-muted-foreground">
                  Find exciting startup opportunities to join as a technical co-founder
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-6">
                  <div className="relative flex-1">
                    <Input 
                      placeholder="Search by skills, industry, or keywords"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-secondary/50 pl-10"
                    />
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  </div>
                  <Button>Search</Button>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {mockIdeas.map((idea) => (
                    <IdeaCard
                      key={idea.id}
                      {...idea}
                      onApply={() => handleApplyToIdea(idea.id)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "applications" && (
          <Card className="border-border/10 bg-card/50">
            <CardHeader>
              <CardTitle className="text-xl">My Applications</CardTitle>
              <p className="text-muted-foreground">
                Track the status of your applications
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                {mockApplications.map((application) => (
                  <ApplicationCard
                    key={application.id}
                    {...application}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};