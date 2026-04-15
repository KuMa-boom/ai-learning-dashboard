"use client";

import { useEffect, useState } from "react";
import { useLearningStore } from "@/store/learningStore";
import { weeks, phases } from "@/data/curriculum";
import MetricCards from "./MetricCards";
import PhaseSection from "./PhaseSection";
import CertSection from "./CertSection";
import WeekModal from "./WeekModal";

const DATE_MAP: Record<number, Date> = {
  1:  new Date(2026, 3,  5),   // 2026-04-05
  2:  new Date(2026, 3,  12),  // 2026-04-12
  3:  new Date(2026, 3,  19),  // 2026-04-19
  4:  new Date(2026, 3,  26),  // 2026-04-26
  5:  new Date(2026, 4,  3),   // 2026-05-03
  6:  new Date(2026, 4,  10),  // 2026-05-10
  7:  new Date(2026, 4,  17),  // 2026-05-17
  8:  new Date(2026, 5,  7),   // 2026-06-07
  9:  new Date(2026, 5,  21),  // 2026-06-21
  10: new Date(2026, 6,  12),  // 2026-07-12
  11: new Date(2026, 6,  25),  // 2026-07-25
  12: new Date(2026, 7,  9),   // 2026-08-09
  13: new Date(2026, 7,  23),  // 2026-08-23
  14: new Date(2026, 9,  4),   // 2026-10-04
  15: new Date(2026, 10, 1),   // 2026-11-01
};

function getCurrentWeekId(): number | null {
  const today = new Date();
  let currentId: number | null = null;
  for (let i = 1; i <= 15; i++) {
    if (today >= DATE_MAP[i]) currentId = i;
  }
  return currentId;
}

export default function Dashboard() {
  const { hydrate } = useLearningStore();
  const [hydrated, setHydrated] = useState(false);
  const [currentWeekId, setCurrentWeekId] = useState<number | null>(null);
  const [modalWeekId, setModalWeekId] = useState<number | null>(null);

  useEffect(() => {
    hydrate();
    setCurrentWeekId(getCurrentWeekId());
    setHydrated(true);
  }, [hydrate]);

  if (!hydrated) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-white/50 text-sm">読み込み中...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white mb-1">AI学習ダッシュボード</h1>
          <p className="text-sm text-white/50">2026年 学習ロードマップ | 15週間カリキュラム</p>
        </div>

        {/* Metric Cards */}
        <div className="mb-6">
          <MetricCards />
        </div>

        {/* Phase Sections */}
        <div className="mb-6 flex flex-col gap-4">
          {phases.map((phase) => {
            const phaseWeeks = weeks.filter((w) => w.phase === phase.id);
            return (
              <PhaseSection
                key={phase.id}
                phase={phase}
                weeks={phaseWeeks}
                currentWeekId={currentWeekId}
                onOpenModal={setModalWeekId}
              />
            );
          })}
        </div>

        {/* Cert Section */}
        <CertSection />
      </div>

      {/* Week Detail Modal */}
      {modalWeekId !== null && (
        <WeekModal
          key={modalWeekId}
          weekId={modalWeekId}
          onClose={() => setModalWeekId(null)}
          onOpenWeek={setModalWeekId}
        />
      )}
    </div>
  );
}
