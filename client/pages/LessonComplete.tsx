import React, { useState, useEffect } from "react";
import { Btn } from "@/components/UIComponents";

interface LessonCompleteProps {
  setScreen: (screen: string) => void;
}

interface Confetti {
  id: string;
  x: number;
  color: string;
  duration: number;
  delay: number;
}

export default function LessonComplete({ setScreen }: LessonCompleteProps) {
  const [confetti, setConfetti] = useState<Confetti[]>([]);

  useEffect(() => {
    const colors = ["#E8453C", "#F39C12", "#27AE60", "#3498DB"];
    const confettiPieces = Array.from({ length: 18 }, (_, i) => ({
      id: `confetti-${i}`,
      x: Math.random() * 100,
      color: colors[i % colors.length],
      duration: 2 + Math.random() * 1,
      delay: Math.random() * 0.5,
    }));
    setConfetti(confettiPieces);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8 pb-24 md:pb-8 relative overflow-hidden">
      {/* Confetti */}
      {confetti.map((c) => (
        <div
          key={c.id}
          style={{
            position: "absolute",
            left: `${c.x}%`,
            top: -10,
            width: 8,
            height: 8,
            background: c.color,
            borderRadius: "50%",
            animation: `confetti ${c.duration}s ease-in ${c.delay}s`,
            "--duration": `${c.duration}s`,
            "--delay": `${c.delay}s`,
          } as React.CSSProperties}
        />
      ))}

      {/* Content */}
      <div className="max-w-md text-center space-y-6">
        <div className="text-6xl">🏆</div>

        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-dark-text mb-2">
            Lesson 4 Complete! 🎉
          </h1>
          <p className="text-lg text-body-text mb-4">
            You just learned 10 new words
          </p>
          <p className="text-muted">
            These words have been added to your review deck and will appear
            periodically to reinforce your memory
          </p>
        </div>

        <div className="space-y-3">
          <Btn onClick={() => setScreen("lesson-intro")}>
            Start Lesson 5 →
          </Btn>
          <Btn onClick={() => setScreen("home")} variant="outline">
            Go to Dashboard
          </Btn>
        </div>
      </div>
    </div>
  );
}
