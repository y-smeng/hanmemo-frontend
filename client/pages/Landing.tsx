import React from "react";
import { Btn } from "@/components/UIComponents";

interface LandingProps {
  setScreen: (screen: string) => void;
}

export default function Landing({ setScreen }: LandingProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-border px-4 md:px-8 py-4 flex items-center justify-between z-40">
        <div className="text-2xl md:text-3xl font-bold text-red">
          🀄 HanMaomo
        </div>
        <div className="flex gap-3 items-center">
          <button
            onClick={() => setScreen("login")}
            className="text-body-text font-semibold hover:text-dark-text transition-colors"
          >
            Log In
          </button>
          <Btn
            variant="primary"
            onClick={() => setScreen("register")}
            className="w-auto"
          >
            Get Started
          </Btn>
        </div>
      </div>

      {/* Hero */}
      <div className="px-4 md:px-8 py-12 md:py-24">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="text-6xl md:text-7xl">🀄</div>
          <h1 className="text-4xl md:text-5xl font-bold text-dark-text leading-tight">
            Finally remember the{" "}
            <span className="text-red">Chinese you study</span>
          </h1>
          <p className="text-lg md:text-xl text-body-text max-w-2xl mx-auto">
            Learn Mandarin with spaced repetition, daily streaks, and real
            progress tracking. Scientifically proven to work.
          </p>
          <div className="pt-4">
            <Btn onClick={() => setScreen("register")}>
              Get Started Free →
            </Btn>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="px-4 md:px-8 py-12 md:py-24 bg-light-gray">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="text-4xl">🧠</div>
              <h3 className="font-bold text-lg text-dark-text">
                Science-based review scheduling
              </h3>
              <p className="text-body-text">
                Algorithms optimize when you see each word for maximum retention
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="text-4xl">🔥</div>
              <h3 className="font-bold text-lg text-dark-text">
                Daily streaks to keep you consistent
              </h3>
              <p className="text-body-text">
                Build habits that stick with daily learning goals and rewards
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="text-4xl">📊</div>
              <h3 className="font-bold text-lg text-dark-text">
                Track your progress in real time
              </h3>
              <p className="text-body-text">
                Watch your vocabulary grow and see exactly how far you've come
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border px-4 md:px-8 py-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
          <div>&copy; 2024 HanMaomo. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-body-text transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-body-text transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-body-text transition-colors">
              Help
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
