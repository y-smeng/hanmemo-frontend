import { useState } from "react";
import { Btn, ProgressBar } from "@/components/UIComponents";
import { QUIZ } from "@/data/lessons";

export default function QuizScreen({ setScreen }) {
  const [idx, setIdx] = useState(0);
  const [chosen, setChosen] = useState(null);
  const question = QUIZ[idx];
  const total = QUIZ.length;
  const percent = Math.round(((idx + 1) / total) * 100);

  const getOptionColor = (optionIdx) => {
    if (chosen === null) {
      return "bg-white border-border text-muted hover:bg-light-gray";
    }

    if (optionIdx === question.correct) {
      return "bg-[#F0FBF5] border-success text-success";
    }

    if (optionIdx === chosen && optionIdx !== question.correct) {
      return "bg-red-tint border-error text-error";
    }

    return "bg-white border-border text-muted";
  };

  const handleNext = () => {
    if (idx === total - 1) {
      setScreen("lesson-complete");
    } else {
      setIdx(idx + 1);
      setChosen(null);
    }
  };

  // Wrap Chinese characters with hanzi class
  const renderQuestion = (text) => {
    const regex = /([一-龯]+)/;
    const parts = text.split(regex);
    return (
      <>
        {parts.map((part, i) =>
          regex.test(part) ? (
            <span key={i} className="hanzi font-serif">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8 pb-24 md:pb-8">
      {/* Progress */}
      <div className="w-full max-w-2xl mb-12">
        <div className="flex items-center justify-between mb-4">
          <span className="text-muted text-sm">
            Question {idx + 1} of {total}
          </span>
          <span className="text-muted text-sm">{percent}%</span>
        </div>
        <ProgressBar value={idx + 1} max={total} />
      </div>

      {/* Question */}
      <div className="w-full max-w-2xl mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-dark-text text-center">
          {renderQuestion(question.question)}
        </h2>
      </div>

      {/* Options */}
      <div className="w-full max-w-2xl space-y-3 mb-12">
        {question.options.map((option, optionIdx) => (
          <button
            key={optionIdx}
            onClick={() => {
              if (chosen === null) {
                setChosen(optionIdx);
              }
            }}
            className={`w-full p-4 rounded-lg border-2 font-semibold text-lg transition-all ${getOptionColor(optionIdx)} ${
              chosen !== null ? "cursor-default" : "cursor-pointer"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Next Button */}
      {chosen !== null && (
        <div className="w-full max-w-2xl">
          <Btn onClick={handleNext}>
            {idx === total - 1 ? "Finish Lesson 🎉" : "Next →"}
          </Btn>
        </div>
      )}
    </div>
  );
}
