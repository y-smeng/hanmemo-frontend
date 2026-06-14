import { useState } from "react";
import { Btn, ProgressBar } from "@/components/UIComponents";
import { REVIEW_CARDS } from "@/data/lessons";

export default function ReviewCard({ setScreen }) {
  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [ratings, setRatings] = useState([]);
  const card = REVIEW_CARDS[idx];
  const total = REVIEW_CARDS.length;
  const percent = Math.round(((idx + 1) / total) * 100);

  const ratingOptions = [
    { label: "Again", emoji: "😰", color: "#E74C3C", value: 0 },
    { label: "Hard", emoji: "😐", color: "#F39C12", value: 1 },
    { label: "Good", emoji: "🙂", color: "#3498DB", value: 2 },
    { label: "Easy", emoji: "😄", color: "#27AE60", value: 3 },
  ];

  const handleRate = (value) => {
    const newRatings = [...ratings, value];
    setRatings(newRatings);

    if (idx === total - 1) {
      setScreen("review-complete");
    } else {
      setIdx(idx + 1);
      setRevealed(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8 pb-24 md:pb-8">
      {/* Progress */}
      <div className="w-full max-w-2xl mb-12">
        <div className="flex items-center justify-between mb-4">
          <span className="text-muted text-sm">
            Card {idx + 1} of {total}
          </span>
          <span className="text-muted text-sm">{percent}%</span>
        </div>
        <ProgressBar value={idx + 1} max={total} />
      </div>

      {/* Card */}
      <div className="w-full max-w-lg mb-12 animate-pop">
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-border text-center space-y-6">
          {/* Hanzi */}
          <div className="text-6xl md:text-7xl font-serif font-bold text-dark-text hanzi">
            {card.hanzi}
          </div>

          {/* Pinyin */}
          <div className="text-2xl text-body-text italic pinyin">
            {card.pinyin}
          </div>

          {/* English and Sentences (revealed) */}
          {revealed && (
            <div className="space-y-4 animate-fadeIn">
              <div className="text-2xl font-semibold text-red">{card.en}</div>

              <div className="border-t border-border pt-4 text-left space-y-3">
                <div className="text-body-text hanzi">{card.sentence_zh}</div>
                <div className="text-muted italic pinyin text-sm">
                  {card.sentence_py}
                </div>
                <div className="text-muted text-sm">{card.sentence_en}</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Show Answer or Rating Grid */}
      {!revealed ? (
        <div className="w-full max-w-2xl">
          <Btn onClick={() => setRevealed(true)}>Show Answer</Btn>
        </div>
      ) : (
        <div className="w-full max-w-2xl space-y-4">
          <p className="text-center text-muted text-sm">
            How well did you remember this?
          </p>
          <div className="grid grid-cols-4 gap-2 md:gap-3">
            {ratingOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleRate(option.value)}
                className="flex flex-col items-center gap-1 p-3 rounded-lg border-2 border-border hover:border-red transition-colors"
                style={{
                  borderColor: "currentColor",
                  color: option.color,
                }}
              >
                <span className="text-2xl">{option.emoji}</span>
                <span className="text-xs font-semibold">{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
