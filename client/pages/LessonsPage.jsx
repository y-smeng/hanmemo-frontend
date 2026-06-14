import { useState, useEffect } from "react";
import { Card, ProgressBar, PageWrap, LessonCard } from "@/components/UIComponents";
import { LESSONS } from "@/data/lessons";
import { ChevronDown, Lock } from "lucide-react";

export default function LessonsPage({ setScreen }) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [open, setOpen] = useState({ 1: true, 2: false, 3: false, 4: false });

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const colorMap = {
    1: "#27AE60",
    2: "#3498DB",
    3: "#F39C12",
    4: "#E8453C",
  };

  const toggleOpen = (hsk) => {
    setOpen((prev) => ({ ...prev, [hsk]: !prev[hsk] }));
  };

  return (
    <PageWrap isDesktop={isDesktop}>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <h1 className="text-3xl font-bold text-dark-text mb-8">Lessons</h1>

        <div className="space-y-4">
          {[1, 2, 3, 4].map((hsk) => {
            const lessons = LESSONS[hsk];
            const isUnlocked = hsk === 1;
            const completedCount = lessons.filter((l) => l.done).length;
            const totalCount = lessons.length;
            const isExpanded = open[hsk];

            return (
              <Card key={hsk} className="space-y-4">
                {/* Header Button */}
                <button
                  onClick={() => toggleOpen(hsk)}
                  className={`w-full flex items-center gap-3 p-4 rounded-lg transition-colors ${
                    isUnlocked
                      ? "hover:bg-light-gray"
                      : "bg-light-gray cursor-not-allowed"
                  }`}
                >
                  {!isUnlocked && <Lock size={18} className="text-muted" />}
                  <div className="flex-1 text-left flex items-center gap-3">
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                      style={{ background: colorMap[hsk] }}
                    >
                      {hsk}
                    </span>
                    <span className="font-bold text-dark-text">
                      HSK Level {hsk}
                    </span>
                  </div>
                  {isUnlocked ? (
                    <>
                      <span className="text-sm font-semibold bg-light-gray text-body-text px-3 py-1 rounded-full">
                        {completedCount}/{totalCount}
                      </span>
                      <ChevronDown
                        size={20}
                        className={`text-muted transition-transform ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </>
                  ) : (
                    <span className="text-muted text-sm">
                      Complete HSK {hsk - 1} first
                    </span>
                  )}
                </button>

                {/* Progress Bar (Unlocked only) */}
                {isUnlocked && (
                  <div className="px-4">
                    <ProgressBar
                      value={completedCount}
                      max={totalCount}
                      color={colorMap[hsk]}
                    />
                  </div>
                )}

                {/* Lessons List */}
                {isExpanded && isUnlocked && (
                  <div className="px-4 space-y-2">
                    {lessons.map((lesson) => (
                      <LessonCard
                        key={lesson.id}
                        lesson={lesson}
                        isLocked={lesson.locked || false}
                        isCurrentLesson={lesson.current || false}
                        isDone={lesson.done}
                        onClick={() => {
                          if (!lesson.locked) {
                            setScreen("lesson-intro");
                          }
                        }}
                      />
                    ))}
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </PageWrap>
  );
}
