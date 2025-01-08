import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual login logic
    toast({
      title: "Login successful",
      description: "Welcome back!",
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div>
          <h1 className="auth-title">Login</h1>
          <p className="auth-subtitle">Welcome back! Please login to continue.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
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
          <button type="submit" className="auth-button">
            Login
          </button>
        </form>
        <div className="text-center">
          <Link to="/signup" className="auth-link">
            Don't have an account? Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};