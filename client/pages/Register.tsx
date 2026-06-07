import React, { useState } from "react";
import { Btn, Card } from "@/components/UIComponents";

interface RegisterProps {
  setScreen: (screen: string) => void;
}

export default function Register({ setScreen }: RegisterProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (
      formData.name &&
      formData.email &&
      formData.password &&
      formData.confirm === formData.password
    ) {
      setScreen("level");
    }
  };

  const baseInputStyles =
    "w-full px-4 py-3 border-2 border-border rounded-lg font-sans text-dark-text placeholder-muted focus:border-red focus:outline-none focus:ring-2 focus:ring-red focus:ring-opacity-10 transition-all";

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-[400px] space-y-6">
        <Card>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-dark-text">
              Create your account
            </h2>
            <p className="text-muted mt-2">
              Join thousands of Chinese learners
            </p>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              className={baseInputStyles}
            />
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
            <input
              type="password"
              name="confirm"
              placeholder="Confirm Password"
              value={formData.confirm}
              onChange={handleInputChange}
              className={baseInputStyles}
            />
          </div>

          <Btn onClick={handleSubmit} className="mt-6">
            Create Account
          </Btn>

          <div className="text-center mt-6">
            <span className="text-body-text">Already have an account? </span>
            <button
              onClick={() => setScreen("login")}
              className="text-red font-semibold hover:text-red-dark transition-colors"
            >
              Log in
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}
