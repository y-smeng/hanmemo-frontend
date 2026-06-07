import React, { useState } from "react";
import { Btn, Card, ProgressBar, PageWrap } from "@/components/UIComponents";
import { useEffect } from "react";

interface HomeDashboardProps {
  setScreen: (screen: string) => void;
  streakAnim: boolean;
  reviewDue: number;
}

export default function HomeDashboard({
  setScreen,
  streakAnim,
  reviewDue,
}: HomeDashboardProps) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <PageWrap isDesktop={isDesktop}>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12 space-y-8">
        {/* Greeting */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-dark-text">
            Good morning, Sokha 🌞
          </h1>
          <div className="w-12 h-12 rounded-full bg-red text-white flex items-center justify-center font-bold text-lg">
            S
          </div>
        </div>

        {/* Streak Card */}
        <div
          className={`rounded-2xl p-6 md:p-8 border-[1.5px] border-[#F8CECA] bg-gradient-to-br from-red-tint to-white ${
            streakAnim ? "animate-streak" : ""
          }`}
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl md:text-4xl">🔥</span>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-red">
                Day 5 streak
              </h2>
              <p className="text-body-text">Keep it up!</p>
            </div>
          </div>
          <p className="text-muted text-sm">
            You've practiced 5 days in a row. Amazing consistency!
          </p>
        </div>

        {/* Review Due or All Caught Up */}
        {reviewDue > 0 ? (
          <div className="rounded-2xl p-6 md:p-8 border-l-4 border-red bg-white shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-muted text-sm mb-1">📚 Review due</p>
                <h3 className="text-3xl md:text-4xl font-bold text-red">
                  {reviewDue}
                </h3>
                <p className="text-body-text text-sm">
                  words due for review today
                </p>
              </div>
              <Btn
                onClick={() => setScreen("review-intro")}
                className="w-auto"
              >
                Start Review →
              </Btn>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl p-6 md:p-8 bg-gradient-to-br from-[#F0FBF5] to-white border border-success shadow-sm text-center">
            <div className="text-4xl mb-2">✨</div>
            <h3 className="text-xl font-bold text-success mb-2">
              You're all caught up!
            </h3>
            <p className="text-body-text">
              No reviews due today. Time to learn something new!
            </p>
          </div>
        )}

        {/* Continue Learning */}
        <Card>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-dark-text">
              Continue Learning
            </h3>
            <div className="inline-block px-3 py-1 bg-success bg-opacity-10 text-success rounded-full text-sm font-semibold">
              HSK 1
            </div>
            <div>
              <h4 className="font-semibold text-dark-text">
                Lesson 4 — Food & Drink
              </h4>
              <p className="text-muted text-sm mt-1">
                Learn 10 essential food and drink words
              </p>
            </div>
            <div className="space-y-2">
              <ProgressBar value={3} max={10} />
              <div className="flex justify-between text-xs text-muted">
                <span>3 of 10 words</span>
                <span>30%</span>
              </div>
            </div>
            <Btn
              onClick={() => setScreen("lesson-intro")}
              variant="outline"
            >
              Continue →
            </Btn>
          </div>
        </Card>
      </div>
    </PageWrap>
  );
}
