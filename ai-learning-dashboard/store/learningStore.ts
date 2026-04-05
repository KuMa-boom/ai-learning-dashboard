"use client";

import { create } from "zustand";
import { weeks, certs } from "@/data/curriculum";

const STORAGE_KEY = "ai_learning_v1";

interface LearningState {
  completedWeeks: Set<number>;
  toggleWeek: (id: number) => void;
  isWeekCompleted: (id: number) => boolean;
  getOverallProgress: () => number;
  getCompletedWeekCount: () => number;
  getCompletedCertCount: () => number;
  getCurrentPhase: () => number;
  getPhaseProgress: (phaseId: number) => number;
  isCertEarned: (weekTarget: number) => boolean;
  hydrate: () => void;
}

export const useLearningStore = create<LearningState>((set, get) => ({
  completedWeeks: new Set<number>(),

  hydrate: () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const arr: number[] = JSON.parse(stored);
        set({ completedWeeks: new Set(arr) });
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
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...current]));
    } catch {
      // ignore
    }
  },

  isWeekCompleted: (id: number) => get().completedWeeks.has(id),

  getOverallProgress: () => {
    const count = get().completedWeeks.size;
    return Math.round((count / weeks.length) * 100);
  },

  getCompletedWeekCount: () => get().completedWeeks.size,

  getCompletedCertCount: () => {
    const completed = get().completedWeeks;
    return certs.filter((c) => completed.has(c.weekTarget)).length;
  },

  getCurrentPhase: () => {
    const completed = get().completedWeeks;
    if (completed.size === 0) return 1;
    const maxCompleted = Math.max(...[...completed]);
    const week = weeks.find((w) => w.id === maxCompleted);
    return week ? week.phase : 1;
  },

  getPhaseProgress: (phaseId: number) => {
    const phaseWeeks = weeks.filter((w) => w.phase === phaseId);
    const completed = phaseWeeks.filter((w) => get().completedWeeks.has(w.id));
    return Math.round((completed.length / phaseWeeks.length) * 100);
  },

  isCertEarned: (weekTarget: number) => get().completedWeeks.has(weekTarget),
}));
