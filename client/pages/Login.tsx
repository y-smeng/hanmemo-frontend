import React, { useState } from "react";
import { Btn, Card } from "@/components/UIComponents";

interface LoginProps {
  setScreen: (screen: string) => void;
}

export default function Login({ setScreen }: LoginProps) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (formData.email && formData.password) {
      setScreen("home");
    }
  };

  const baseInputStyles =
    "w-full px-4 py-3 border-2 border-border rounded-lg font-sans text-dark-text placeholder-muted focus:border-red focus:outline-none focus:ring-2 focus:ring-red focus:ring-opacity-10 transition-all";

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-[400px] space-y-6">
        <Card>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-dark-text">Log In</h2>
            <p className="text-muted mt-2">Welcome back!</p>
          </div>

          <div className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className={baseInputStyles}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className={baseInputStyles}
            />
          </div>

          <Btn onClick={handleSubmit} className="mt-6">
            Log In
          </Btn>

          <div className="text-center mt-6">
            <span className="text-body-text">Don't have an account? </span>
            <button
              onClick={() => setScreen("register")}
              className="text-red font-semibold hover:text-red-dark transition-colors"
            >
              Sign up
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}
