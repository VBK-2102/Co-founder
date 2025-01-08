import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [userType, setUserType] = useState<"founder" | "developer">("founder");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }
    // TODO: Implement actual signup logic
    toast({
      title: "Account created",
      description: "Welcome to the platform!",
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div>
          <h1 className="auth-title">Sign Up</h1>
          <p className="auth-subtitle">Create an account to get started.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="auth-label">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="auth-input"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="auth-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="auth-input"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="auth-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="auth-input"
              placeholder="Enter your password"
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="auth-label">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="auth-input"
              placeholder="Confirm your password"
              required
            />
          </div>
          <div>
            <label className="auth-label">I am a:</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="userType"
                  value="founder"
                  checked={userType === "founder"}
                  onChange={(e) => setUserType("founder")}
                  className="mr-2"
                />
                Founder
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="userType"
                  value="developer"
                  checked={userType === "developer"}
                  onChange={(e) => setUserType("developer")}
                  className="mr-2"
                />
                Developer
              </label>
            </div>
          </div>
          <button type="submit" className="auth-button">
            Sign Up
          </button>
        </form>
        <div className="text-center">
          <Link to="/login" className="auth-link">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
};