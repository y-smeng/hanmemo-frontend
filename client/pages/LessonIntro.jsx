import { useState, useEffect } from "react";
import { Btn } from "@/components/UIComponents";
import { ArrowLeft } from "lucide-react";

export default function LessonIntro({ setScreen }) {
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
    <div className="min-h-screen bg-white flex flex-col">
      {/* Back Button */}
      <div className={`${isDesktop ? "pt-24" : "pt-6"} px-4 md:px-8`}>
        <button
          onClick={() => setScreen("lessons")}
          className="w-12 h-12 rounded-full bg-light-gray flex items-center justify-center text-body-text hover:bg-border transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
      </div>

      {/* Content */}
      <div className={`flex-1 flex items-center justify-center px-4 md:px-8 ${isDesktop ? "" : "pb-24"}`}>
        <div className="max-w-md text-center space-y-6">
          <div className="text-6xl">🍜</div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-dark-text mb-2">
              Lesson 4 — Food & Drink
            </h1>
            <p className="text-body-text">
              Learn 10 essential words about food and beverages that will help
              you order at restaurants and talk about meals
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-light-gray rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-dark-text">10</div>
              <div className="text-sm text-muted">📝 New words</div>
            </div>
            <div className="bg-light-gray rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-dark-text">8</div>
              <div className="text-sm text-muted">⏱️ Minutes</div>
            </div>
          </div>

          <Btn onClick={() => setScreen("flashcard")}>
            Start Lesson →
          </Btn>
        </div>
      </div>
    </div>
  );
}
