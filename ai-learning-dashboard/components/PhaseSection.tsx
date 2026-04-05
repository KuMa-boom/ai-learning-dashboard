"use client";

import { useLearningStore } from "@/store/learningStore";
import WeekItem from "./WeekItem";
import type { Phase, Week } from "@/types";

interface Props {
  phase: Phase;
  weeks: Week[];
  currentWeekId: number | null;
}

export default function PhaseSection({ phase, weeks, currentWeekId }: Props) {
  const { getPhaseProgress } = useLearningStore();
  const progress = getPhaseProgress(phase.id);

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
      {/* Phase header */}
      <div className="px-4 py-3 border-b border-white/10" style={{ borderLeftColor: phase.color, borderLeftWidth: 4 }}>
        <div className="flex items-center justify-between mb-1">
          <div>
            <span
              className="text-xs font-bold px-2 py-0.5 rounded-full mr-2"
              style={{ backgroundColor: phase.color + "33", color: phase.color }}
            >
              {phase.label}
            </span>
            <span className="text-sm font-semibold text-white/90">{phase.title}</span>
          </div>
          <span className="text-xs text-white/50">{phase.period}</span>
        </div>
        {/* Progress bar */}
        <div className="mt-2 flex items-center gap-2">
          <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%`, backgroundColor: phase.color }}
            />
          </div>
          <span className="text-xs font-mono text-white/60 w-10 text-right">{progress}%</span>
        </div>
      </div>

      {/* Weeks */}
      <div className="p-2 flex flex-col gap-1">
        {weeks.map((week) => (
          <WeekItem
            key={week.id}
            week={week}
            phaseColor={phase.color}
            isCurrentWeek={week.id === currentWeekId}
          />
        ))}
      </div>
    </div>
  );
}
