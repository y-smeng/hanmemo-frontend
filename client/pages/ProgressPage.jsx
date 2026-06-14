import { useState, useEffect } from "react";
import { Card, ProgressBar, PageWrap } from "@/components/UIComponents";

export default function ProgressPage({ setScreen }) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hskData = [
    { level: 1, learned: 40, total: 50, locked: false },
    { level: 2, learned: 0, total: 60, locked: false },
    { level: 3, learned: 0, total: 70, locked: true },
    { level: 4, learned: 0, total: 80, locked: true },
  ];

  const colorMap = {
    1: "#27AE60",
    2: "#3498DB",
    3: "#F39C12",
    4: "#E8453C",
  };

  const sessions = [
    { date: "Today", words: 12, score: "92%" },
    { date: "Yesterday", words: 10, score: "88%" },
    { date: "2 days ago", words: 15, score: "95%" },
  ];

  return (
    <PageWrap isDesktop={isDesktop}>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12 space-y-8">
        <h1 className="text-3xl font-bold text-dark-text">Your Progress</h1>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <div className="text-center">
              <div className="text-3xl font-bold text-dark-text">40</div>
              <div className="text-muted text-sm mt-2">Words learned</div>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <div className="text-3xl font-bold text-red">5</div>
              <div className="text-muted text-sm mt-2">Current streak</div>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <div className="text-3xl font-bold text-success">82%</div>
              <div className="text-muted text-sm mt-2">Retention rate</div>
            </div>
          </Card>
        </div>

        {/* HSK Progress */}
        <Card>
          <h3 className="text-xl font-bold text-dark-text mb-6">HSK Progress</h3>
          <div className="space-y-4">
            {hskData.map((hsk) => (
              <div key={hsk.level} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {hsk.locked && <span>🔒</span>}
                    <span className="font-semibold text-dark-text">
                      HSK Level {hsk.level}
                    </span>
                  </div>
                  <span className="text-muted text-sm">
                    {hsk.locked
                      ? "Locked"
                      : `${hsk.learned}/${hsk.total}`}
                  </span>
                </div>
                <ProgressBar
                  value={hsk.locked ? 0 : hsk.learned}
                  max={hsk.total}
                  color={hsk.locked ? "#E8E8F0" : colorMap[hsk.level]}
                />
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Sessions */}
        <Card>
          <h3 className="text-xl font-bold text-dark-text mb-4">
            Recent Sessions
          </h3>
          <div className="space-y-3">
            {sessions.map((session, i) => (
              <div
                key={i}
                className={`flex items-center justify-between p-3 rounded-lg ${
                  i !== sessions.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div>
                  <div className="font-semibold text-dark-text">
                    {session.date}
                  </div>
                  <div className="text-sm text-muted">
                    {session.words} words reviewed
                  </div>
                </div>
                <div className="font-semibold text-green-600">
                  {session.score}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </PageWrap>
  );
}
