import React, { useState } from "react";
import { Btn, Card } from "@/components/UIComponents";
import { Check } from "lucide-react";

interface LevelSelectionProps {
  setScreen: (screen: string) => void;
}

export default function LevelSelection({ setScreen }: LevelSelectionProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const levels = [
    {
      id: "beginner",
      title: "Complete Beginner",
      description: "I'm new to Mandarin",
    },
    {
      id: "basics",
      title: "I know some basics",
      description: "I can say simple words",
    },
    {
      id: "intermediate",
      title: "Intermediate",
      description: "I can have basic conversations",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-dark-text mb-2">
            What is your current Chinese level?
          </h2>
          <p className="text-body-text">
            We'll customize your learning path accordingly
          </p>
        </div>

        <div className="space-y-3">
          {levels.map((level) => (
            <button
              key={level.id}
              onClick={() => setSelected(level.id)}
              className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                selected === level.id
                  ? "border-red bg-red-tint"
                  : "border-border bg-white hover:border-red hover:bg-red-tint hover:bg-opacity-30"
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 flex items-center justify-center ${
                    selected === level.id
                      ? "bg-red border-red"
                      : "border-border"
                  }`}
                >
                  {selected === level.id && (
                    <Check size={14} className="text-white" />
                  )}
                </div>
                <div>
                  <div className="font-semibold text-dark-text">
                    {level.title}
                  </div>
                  <div className="text-sm text-muted">{level.description}</div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <Btn
          onClick={() => selected && setScreen("home")}
          disabled={!selected}
        >
          Continue →
        </Btn>
      </div>
    </div>
  );
}
