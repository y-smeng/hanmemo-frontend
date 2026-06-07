import React, { useState } from "react";
import { Btn, ProgressBar } from "@/components/UIComponents";
import { FLASHCARDS } from "@/data/lessons";
import { Volume2 } from "lucide-react";

interface FlashcardScreenProps {
  setScreen: (screen: string) => void;
}

export default function FlashcardScreen({ setScreen }: FlashcardScreenProps) {
  const [idx, setIdx] = useState(0);
  const card = FLASHCARDS[idx];
  const total = FLASHCARDS.length;
  const percent = Math.round(((idx + 1) / total) * 100);

  const handleNext = () => {
    if (idx === total - 1) {
      setScreen("quiz");
    } else {
      setIdx(idx + 1);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8 pb-24 md:pb-8">
      {/* Progress Section */}
      <div className="w-full max-w-2xl mb-12">
        <div className="flex items-center justify-between mb-4">
          <span className="text-muted text-sm">
            Word {idx + 1} of {total}
          </span>
          <span className="text-muted text-sm">{percent}%</span>
        </div>
        <ProgressBar value={idx + 1} max={total} />
      </div>

      {/* Flashcard */}
      <div className="w-full max-w-lg max-h-96 mb-12 animate-pop">
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-border text-center space-y-6">
          {/* Hanzi */}
          <div className="text-6xl md:text-7xl font-serif font-bold text-dark-text hanzi">
            {card.hanzi}
          </div>

          {/* Pinyin */}
          <div className="text-2xl text-body-text italic pinyin">
            {card.pinyin}
          </div>

          {/* English */}
          <div className="text-2xl font-semibold text-red">{card.en}</div>

          {/* Divider */}
          <div className="border-t border-border my-2"></div>

          {/* Example Sentence */}
          <div className="space-y-3 text-left">
            <div className="text-body-text hanzi">{card.sentence_zh}</div>
            <div className="text-muted italic pinyin text-sm">
              {card.sentence_py}
            </div>
            <div className="text-muted text-sm">{card.sentence_en}</div>
          </div>

          {/* Speaker Icon */}
          <button className="w-10 h-10 rounded-full bg-light-gray flex items-center justify-center text-muted hover:bg-border transition-colors mx-auto mt-4">
            <Volume2 size={18} />
          </button>
        </div>
      </div>

      {/* Action Button */}
      <div className="w-full max-w-2xl">
        <Btn onClick={handleNext}>
          {idx === total - 1 ? "Take Quiz →" : "Got it →"}
        </Btn>
      </div>
    </div>
  );
}
