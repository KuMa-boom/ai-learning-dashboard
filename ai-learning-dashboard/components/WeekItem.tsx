"use client";

import { useLearningStore } from "@/store/learningStore";
import type { Week } from "@/types";

const TAG_COLORS: Record<string, string> = {
  cc: "bg-blue-500/20 text-blue-300 border border-blue-500/30",
  aa: "bg-purple-500/20 text-purple-300 border border-purple-500/30",
  ap: "bg-green-500/20 text-green-300 border border-green-500/30",
  fe: "bg-orange-500/20 text-orange-300 border border-orange-500/30",
  g:  "bg-red-500/20 text-red-300 border border-red-500/30",
};

const TAG_LABELS: Record<string, string> = {
  cc: "CC",
  aa: "AA",
  ap: "AP",
  fe: "FE",
  g:  "G",
};

interface Props {
  week: Week;
  phaseColor: string;
  isCurrentWeek: boolean;
}

export default function WeekItem({ week, phaseColor, isCurrentWeek }: Props) {
  const { toggleWeek, isWeekCompleted } = useLearningStore();
  const completed = isWeekCompleted(week.id);

  return (
    <div
      onClick={() => toggleWeek(week.id)}
      className={`
        flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer
        transition-all duration-200 select-none
        ${completed
          ? "bg-white/5 opacity-60"
          : isCurrentWeek
            ? "bg-white/10 ring-1 ring-white/30"
            : "bg-white/5 hover:bg-white/10"
        }
      `}
    >
      {/* Checkbox */}
      <div
        className={`
          w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0
          transition-all duration-200
          ${completed ? "border-transparent" : "border-white/40"}
        `}
        style={completed ? { backgroundColor: phaseColor, borderColor: phaseColor } : {}}
      >
        {completed && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>

      {/* Week number */}
      <span className="text-xs font-mono text-white/40 w-8 flex-shrink-0">
        W{week.id}
      </span>

      {/* Date */}
      <span className="text-xs text-white/50 w-12 flex-shrink-0">{week.date}</span>

      {/* Label */}
      <span className={`flex-1 text-sm ${completed ? "line-through text-white/40" : "text-white/90"}`}>
        {week.label}
      </span>

      {/* Tags */}
      <div className="flex gap-1">
        {week.tags.map((tag) => (
          <span key={tag} className={`text-xs px-1.5 py-0.5 rounded font-mono ${TAG_COLORS[tag] || ""}`}>
            {TAG_LABELS[tag] || tag}
          </span>
        ))}
      </div>

      {/* Current week badge */}
      {isCurrentWeek && !completed && (
        <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-400/20 text-yellow-300 border border-yellow-400/30">
          今週
        </span>
      )}
    </div>
  );
}
