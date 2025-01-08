export interface User {
  id: string;
  email: string;
  fullName: string;
  userType: "founder" | "developer";
  createdAt: Date;
}

export interface Founder extends User {
  userType: "founder";
  ideas: StartupIdea[];
}

export interface Developer extends User {
  userType: "developer";
  githubUsername?: string;
  skills: string[];
  experience: string;
  compensation: string;
}

export interface StartupIdea {
  id: string;
  founderId: string;
  title: string;
  description: string;
  requiredSkills: string[];
  equity: string;
  createdAt: Date;
  applications: Application[];
}

export interface Application {
  id: string;
  ideaId: string;
  developerId: string;
  message: string;
  status: "pending" | "accepted" | "rejected";
  createdAt: Date;
}