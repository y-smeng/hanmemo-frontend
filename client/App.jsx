import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import LevelSelection from "./pages/LevelSelection";
import HomeDashboard from "./pages/HomeDashboard";
import LessonsPage from "./pages/LessonsPage";
import LessonIntro from "./pages/LessonIntro";
import FlashcardScreen from "./pages/FlashcardScreen";
import QuizScreen from "./pages/QuizScreen";
import LessonComplete from "./pages/LessonComplete";
import ReviewIntro from "./pages/ReviewIntro";
import ReviewCard from "./pages/ReviewCard";
import ReviewComplete from "./pages/ReviewComplete";
import ProgressPage from "./pages/ProgressPage";
import ProfilePage from "./pages/ProfilePage";
import NavBar from "./components/NavBar";

const queryClient = new QueryClient();

const AppContent = () => {
  const [screen, setScreenState] = useState("landing");
  const [streakAnim, setStreakAnim] = useState(false);
  const reviewDue = 12;

  // Helper to convert between Screen type and string for component props
  const setScreen = (s) => setScreenState(s);

  useEffect(() => {
    if (screen === "home") {
      setStreakAnim(true);
      const timer = setTimeout(() => setStreakAnim(false), 600);
      return () => clearTimeout(timer);
    }
  }, [screen]);

  const screens = {
    landing: <Landing setScreen={setScreen} />,
    register: <Register setScreen={setScreen} />,
    login: <Login setScreen={setScreen} />,
    level: <LevelSelection setScreen={setScreen} />,
    home: (
      <HomeDashboard
        setScreen={setScreen}
        streakAnim={streakAnim}
        reviewDue={reviewDue}
      />
    ),
    lessons: <LessonsPage setScreen={setScreen} />,
    "lesson-intro": <LessonIntro setScreen={setScreen} />,
    flashcard: <FlashcardScreen setScreen={setScreen} />,
    quiz: <QuizScreen setScreen={setScreen} />,
    "lesson-complete": <LessonComplete setScreen={setScreen} />,
    "review-intro": <ReviewIntro setScreen={setScreen} />,
    "review-card": <ReviewCard setScreen={setScreen} />,
    "review-complete": <ReviewComplete setScreen={setScreen} />,
    progress: <ProgressPage setScreen={setScreen} />,
    profile: <ProfilePage setScreen={setScreen} />,
  };

  return (
    <>
      <NavBar screen={screen} setScreen={setScreen} reviewDue={reviewDue} />
      {screens[screen]}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppContent />
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")).render(<App />);
