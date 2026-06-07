import React, { useState, useEffect } from "react";
import { Btn, Card, PageWrap } from "@/components/UIComponents";

interface ReviewCompleteProps {
  setScreen: (screen: string) => void;
}

export default function ReviewComplete({ setScreen }: ReviewCompleteProps) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const stats = [
    { label: "Words reviewed", value: "12", color: "#1A1A2E" },
    { label: "Again", value: "2", color: "#E74C3C" },
    { label: "Hard", value: "3", color: "#F39C12" },
    { label: "Good", value: "5", color: "#3498DB" },
    { label: "Easy", value: "2", color: "#27AE60" },
  ];

  return (
    <PageWrap isDesktop={isDesktop}>
      <div className="max-w-2xl mx-auto px-4 md:px-8 py-8 md:py-12 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center space-y-8 max-w-md">
          <div className="text-6xl">🎉</div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-dark-text mb-2">
              Review Complete!
            </h1>
          </div>

          <div className="flex items-center justify-center gap-2 text-xl font-semibold text-dark-text">
            <span>🔥</span>
            <span>Day 6 — Keep it up!</span>
          </div>

          <Card>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="text-center py-3">
                  <div
                    className="text-2xl font-bold"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </Card>

          <Btn onClick={() => setScreen("home")}>
            Go to Dashboard
          </Btn>
        </div>
      </div>
    </PageWrap>
  );
}
