import { create } from "zustand";
import { weeks, certs } from "@/data/curriculum";

const STORAGE_KEY = "ai_learning_v1";

interface StorageData {
  completedWeeks: number[];
  memos: Record<string, string>;
}

interface LearningState {
  completedWeeks: Set<number>;
  memos: Record<number, string>;
  toggleWeek: (id: number) => void;
  isWeekCompleted: (id: number) => boolean;
  getOverallProgress: () => number;
  getCompletedWeekCount: () => number;
  getCompletedCertCount: () => number;
  getCurrentPhase: () => number;
  getPhaseProgress: (phaseId: number) => number;
  isCertEarned: (weekTarget: number) => boolean;
  setMemo: (weekId: number, memo: string) => void;
  hydrate: () => void;
}

function saveToStorage(completedWeeks: Set<number>, memos: Record<number, string>) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ completedWeeks: [...completedWeeks], memos } satisfies StorageData),
    );
  } catch {
    // ignore (private browsing etc.)
  }
}

export const useLearningStore = create<LearningState>((set, get) => {
  let memoSaveTimer: ReturnType<typeof setTimeout> | null = null;

  return {
    completedWeeks: new Set<number>(),
    memos: {},

    hydrate: () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) return;
        const parsed: unknown = JSON.parse(stored);

        // Legacy format: plain number[]
        if (Array.isArray(parsed) && parsed.every((x) => typeof x === "number")) {
          set({ completedWeeks: new Set(parsed) });
          return;
        }

        // New format: { completedWeeks, memos }
        if (parsed !== null && typeof parsed === "object" && !Array.isArray(parsed)) {
          const data = parsed as Record<string, unknown>;

          if (Array.isArray(data.completedWeeks) && data.completedWeeks.every((x) => typeof x === "number")) {
            set({ completedWeeks: new Set(data.completedWeeks as number[]) });
          }

          if (data.memos !== null && typeof data.memos === "object" && !Array.isArray(data.memos)) {
            const validMemos: Record<number, string> = {};
            for (const [k, v] of Object.entries(data.memos as object)) {
              const key = Number(k);
              if (!isNaN(key) && typeof v === "string") validMemos[key] = v;
            }
            set({ memos: validMemos });
          }
        }
      } catch {
        // ignore
      }
    },

    toggleWeek: (id: number) => {
      const current = new Set(get().completedWeeks);
      if (current.has(id)) {
        current.delete(id);
      } else {
        current.add(id);
      }
      set({ completedWeeks: current });
      saveToStorage(current, get().memos);
    },

    setMemo: (weekId: number, memo: string) => {
      const newMemos = { ...get().memos, [weekId]: memo };
      set({ memos: newMemos });
      if (memoSaveTimer) clearTimeout(memoSaveTimer);
      memoSaveTimer = setTimeout(() => {
        saveToStorage(get().completedWeeks, get().memos);
      }, 500);
    },

    isWeekCompleted: (id: number) => get().completedWeeks.has(id),

    getOverallProgress: () => {
      return Math.round((get().completedWeeks.size / weeks.length) * 100);
    },

    getCompletedWeekCount: () => get().completedWeeks.size,

    getCompletedCertCount: () => {
      const completed = get().completedWeeks;
      return certs.filter((c) => completed.has(c.weekTarget)).length;
    },

    getCurrentPhase: () => {
      const completed = get().completedWeeks;
      if (completed.size === 0) return 1;
      const maxCompleted = Array.from(completed).reduce((a, b) => Math.max(a, b), 0);
      const week = weeks.find((w) => w.id === maxCompleted);
      return week ? week.phase : 1;
    },

    getPhaseProgress: (phaseId: number) => {
      const phaseWeeks = weeks.filter((w) => w.phase === phaseId);
      const completed = phaseWeeks.filter((w) => get().completedWeeks.has(w.id));
      return Math.round((completed.length / phaseWeeks.length) * 100);
    },

    isCertEarned: (weekTarget: number) => get().completedWeeks.has(weekTarget),
  };
});
