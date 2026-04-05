"use client";

import { useMemo } from "react";
import { useLearningStore } from "@/store/learningStore";
import { weeks, phases, certs } from "@/data/curriculum";

export default function MetricCards() {
  const progress = useLearningStore((s) =>
    Math.round((s.completedWeeks.size / weeks.length) * 100),
  );
  const weekCount = useLearningStore((s) => s.completedWeeks.size);
  const certCount = useLearningStore((s) =>
    certs.filter((c) => s.completedWeeks.has(c.weekTarget)).length,
  );
  const currentPhaseId = useLearningStore((s) => {
    if (s.completedWeeks.size === 0) return 1;
    const maxCompleted = Array.from(s.completedWeeks).reduce((a, b) => Math.max(a, b), 0);
    const week = weeks.find((w) => w.id === maxCompleted);
    return week ? week.phase : 1;
  });

  const currentPhase = phases.find((p) => p.id === currentPhaseId);

  const cards = useMemo(
    () => [
      {
        label: "全体進捗",
        value: `${progress}%`,
        sub: "15週間カリキュラム",
        color: "#378ADD",
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        ),
        extra: (
          <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%`, backgroundColor: "#378ADD" }}
            />
          </div>
        ),
      },
      {
        label: "完了Week",
        value: `${weekCount}`,
        sub: "/ 15 週",
        color: "#1D9E75",
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
      {
        label: "取得済み修了証",
        value: `${certCount}`,
        sub: "/ 7 件",
        color: "#7F77DD",
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
        ),
      },
      {
        label: "現在のフェーズ",
        value: currentPhase ? currentPhase.label : "Phase 1",
        sub: currentPhase ? currentPhase.title : "",
        color: currentPhase ? currentPhase.color : "#378ADD",
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
      },
    ],
    [progress, weekCount, certCount, currentPhase],
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => (
        <div
          key={card.label}
          className="rounded-xl bg-white/5 border border-white/10 p-4"
          style={{ borderTopColor: card.color, borderTopWidth: 2 }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-white/50 font-medium">{card.label}</span>
            <span style={{ color: card.color }}>{card.icon}</span>
          </div>
          <div className="text-2xl font-bold text-white mb-0.5">{card.value}</div>
          <div className="text-xs text-white/50">{card.sub}</div>
          {card.extra}
        </div>
      ))}
    </div>
  );
}
