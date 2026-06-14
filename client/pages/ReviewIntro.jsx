import { useState, useEffect } from "react";
import { Btn, Card, PageWrap } from "@/components/UIComponents";

export default function ReviewIntro({ setScreen }) {
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
      <div className="max-w-2xl mx-auto px-4 md:px-8 py-8 md:py-12 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center space-y-6 max-w-md">
          <div className="text-6xl">🔄</div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-dark-text mb-2">
              Today's Review
            </h1>
            <p className="text-lg text-body-text">
              <span className="font-bold text-red">12 words</span> due for
              review
            </p>
          </div>

          <Card>
            <div className="space-y-4 text-left">
              <h3 className="font-bold text-dark-text">How it works:</h3>
              <ul className="space-y-3 text-body-text text-sm">
                <li className="flex gap-3">
                  <span>📚</span>
                  <span>Review each word and rate how well you remembered it</span>
                </li>
                <li className="flex gap-3">
                  <span>⏱️</span>
                  <span>
                    The next review is automatically scheduled based on your
                    rating
                  </span>
                </li>
                <li className="flex gap-3">
                  <span>✨</span>
                  <span>
                    Words you know well will be reviewed less frequently
                  </span>
                </li>
              </ul>
            </div>
          </Card>

          <Btn onClick={() => setScreen("review-card")}>
            Start Review →
          </Btn>
        </div>
      </div>
    </PageWrap>
  );
}
