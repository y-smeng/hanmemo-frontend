import React, { ReactNode } from "react";
import { ChevronDown, Home, BookOpen, RotateCcw, User, LogOut } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  children: ReactNode;
}

export const Btn = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className, ...props }, ref) => {
    const baseStyles =
      "flex items-center justify-center gap-2 rounded-lg font-bold text-base px-6 py-3.5 w-full transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary: "bg-red text-white shadow-lg hover:opacity-90 active:opacity-85",
      outline:
        "bg-transparent border-2 border-red text-red hover:opacity-90 active:opacity-85",
      ghost: "bg-light-gray text-body-text hover:bg-[#E8E8F0] active:opacity-85",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${className || ""}`}
        {...props}
      />
    );
  }
);

Btn.displayName = "Btn";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className = "" }: CardProps) => (
  <div
    className={`bg-white rounded-2xl p-6 shadow-sm border border-border ${className}`}
  >
    {children}
  </div>
);

interface ProgressBarProps {
  value: number;
  max: number;
  color?: string;
  height?: number;
}

export const ProgressBar = ({
  value,
  max,
  color = "#e8453c",
  height = 8,
}: ProgressBarProps) => (
  <div
    style={{
      background: "#E8E8F0",
      borderRadius: 9999,
      height,
      overflow: "hidden",
    }}
  >
    <div
      style={{
        width: `${(value / max) * 100}%`,
        background: color,
        height: "100%",
        transition: "width 0.4s ease",
      }}
    />
  </div>
);

interface PageWrapProps {
  children: ReactNode;
  isDesktop: boolean;
}

export const PageWrap = ({ children, isDesktop }: PageWrapProps) => (
  <div
    style={{
      minHeight: "100vh",
      background: "#FAFAFA",
      paddingTop: isDesktop ? 80 : 0,
      paddingBottom: isDesktop ? 0 : 80,
    }}
  >
    {children}
  </div>
);

interface LessonCardProps {
  lesson: any;
  isLocked: boolean;
  isCurrentLesson: boolean;
  isDone: boolean;
  onClick: () => void;
}

export const LessonCard = ({
  lesson,
  isLocked,
  isCurrentLesson,
  isDone,
  onClick,
}: LessonCardProps) => {
  const getBackground = () => {
    if (isDone) return "bg-white";
    if (isCurrentLesson) return "bg-red-tint";
    if (isLocked) return "bg-light-gray";
    return "bg-white";
  };

  const getBorder = () => {
    if (isCurrentLesson) return "border-[1.5px] border-[#F8CECA]";
    return "border-[1.5px] border-transparent";
  };

  return (
    <button
      onClick={onClick}
      disabled={isLocked}
      className={`w-full flex items-center gap-4 p-4 rounded-lg transition-all ${getBackground()} ${getBorder()} disabled:cursor-not-allowed`}
    >
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 ${
          isDone ? "bg-success" : isCurrentLesson ? "bg-red" : "bg-light-gray"
        }`}
      >
        {isDone ? "✓" : isCurrentLesson ? "▶" : isLocked ? "🔒" : ""}
      </div>
      <div className="flex-1 text-left">
        <div className="font-semibold text-dark-text">{lesson.title}</div>
        <div className="text-sm text-muted">{lesson.words} words</div>
      </div>
      <span className="text-muted text-sm">{lesson.mins} min</span>
    </button>
  );
};
