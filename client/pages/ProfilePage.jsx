import { useState, useEffect } from "react";
import { Btn, Card, PageWrap } from "@/components/UIComponents";

export default function ProfilePage({ setScreen }) {
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
    { label: "Current streak", value: "5 days", emoji: "🔥" },
    { label: "Words learned", value: "40", emoji: "📚" },
    { label: "Retention rate", value: "82%", emoji: "🎯" },
  ];

  return (
    <PageWrap isDesktop={isDesktop}>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12 space-y-8">
        <h1 className="text-3xl font-bold text-dark-text">Profile</h1>

        {/* User Info */}
        <Card className="text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-red text-white flex items-center justify-center font-bold text-2xl mx-auto">
            S
          </div>
          <div>
            <h2 className="text-2xl font-bold text-dark-text">Sokha</h2>
            <p className="text-muted">sokha@example.com</p>
          </div>
          <div className="inline-block px-4 py-2 bg-success bg-opacity-10 text-success rounded-full text-sm font-semibold">
            HSK 1
          </div>
        </Card>

        {/* Stats */}
        <Card>
          <div className="space-y-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`flex items-center justify-between py-3 ${
                  i !== stats.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{stat.emoji}</span>
                  <span className="text-body-text">{stat.label}</span>
                </div>
                <span className="font-bold text-dark-text">{stat.value}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Actions */}
        <div className="space-y-3">
          <Btn variant="ghost" onClick={() => {}}>
            Reset my level
          </Btn>
          <Btn
            variant="outline"
            onClick={() => setScreen("landing")}
            className="border-red text-red hover:opacity-90"
          >
            Log Out
          </Btn>
        </div>
      </div>
    </PageWrap>
  );
}
