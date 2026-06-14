import { useState, useEffect } from "react";
import {
  Home,
  BookOpen,
  RotateCcw,
  User,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

const HIDDEN_NAV = [
  "landing",
  "register",
  "login",
  "level",
  "flashcard",
  "quiz",
  "lesson-complete",
  "review-card",
  "review-intro",
  "review-complete",
];

export default function NavBar({ screen, setScreen, reviewDue }) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isDesk = window.innerWidth >= 768;
      setIsDesktop(isDesk);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (HIDDEN_NAV.includes(screen)) return null;

  const getActiveTab = () => {
    if (screen === "home") return "home";
    if (screen === "lessons" || screen === "lesson-intro") return "lessons";
    if (screen === "progress" || screen === "review-intro") return "review";
    return "profile";
  };

  const activeTab = getActiveTab();

  const navItems = [
    { key: "home", label: "Home", icon: Home },
    { key: "lessons", label: "Lessons", icon: BookOpen },
    { key: "review", label: "Review", icon: RotateCcw },
    { key: "profile", label: "Profile", icon: User },
  ];

  const handleNavClick = (key) => {
    if (key === "home") setScreen("home");
    else if (key === "lessons") setScreen("lessons");
    else if (key === "review") setScreen("progress");
    else if (key === "profile") setScreen("profile");
    setMobileOpen(false);
  };

  if (isDesktop) {
    return (
      <nav className="fixed top-0 left-0 right-0 h-20 bg-white border-b border-border shadow-sm z-50 flex items-center px-8">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-red">🀄 HanMaomo</div>
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.key;
              const showBadge =
                item.key === "review" && reviewDue > 0 && isActive;

              return (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.key)}
                  className={`px-6 py-2 rounded-lg font-semibold text-sm transition-colors flex items-center gap-2 relative ${
                    isActive
                      ? "bg-red-tint text-red"
                      : "text-muted hover:bg-light-gray hover:text-body-text"
                  }`}
                >
                  <Icon size={18} />
                  {item.label}
                  {showBadge && (
                    <div className="ml-1 bg-red text-white text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                      {reviewDue}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
          <div style={{ width: 120 }} />
        </div>
      </nav>
    );
  }

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 h-20 bg-white border-t border-border shadow-sm z-50">
        <div className="flex items-center justify-around h-full">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.key;
            const showBadge = item.key === "review" && reviewDue > 0;

            return (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key)}
                className={`flex flex-col items-center justify-center gap-1 flex-1 h-full transition-colors relative ${
                  isActive ? "text-red" : "text-muted"
                }`}
              >
                <Icon size={24} />
                <span className="text-xs font-semibold">{item.label}</span>
                {showBadge && (
                  <div className="absolute -top-1 -right-1 bg-red text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                    {reviewDue}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
