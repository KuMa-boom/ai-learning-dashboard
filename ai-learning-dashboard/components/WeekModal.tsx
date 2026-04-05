"use client";

import { useEffect, useRef, useState } from "react";
import { useLearningStore } from "@/store/learningStore";
import { weeks } from "@/data/curriculum";
import { weekDetails } from "@/data/weekDetails";
import type { Task, TaskAxis } from "@/types";

const AXIS_CONFIG: Record<TaskAxis, { label: string; bgClass: string; textClass: string; borderClass: string }> = {
  claude_code:   { label: "Claude Code",        bgClass: "bg-blue-500/20",    textClass: "text-blue-300",    borderClass: "border-blue-500/30"    },
  academy:       { label: "Anthropic Academy",  bgClass: "bg-emerald-500/20", textClass: "text-emerald-300", borderClass: "border-emerald-500/30" },
  qualification: { label: "資格",               bgClass: "bg-amber-500/20",   textClass: "text-amber-300",   borderClass: "border-amber-500/30"   },
};

const DIFFICULTY_CONFIG = {
  easy:   { label: "易",   bgClass: "bg-green-500/20", textClass: "text-green-400", borderClass: "border-green-500/30" },
  normal: { label: "普通", bgClass: "bg-blue-500/20",  textClass: "text-blue-400",  borderClass: "border-blue-500/30"  },
  hard:   { label: "難",   bgClass: "bg-red-500/20",   textClass: "text-red-400",   borderClass: "border-red-500/30"   },
};

const AXIS_ORDER: TaskAxis[] = ["claude_code", "academy", "qualification"];

interface Props {
  weekId: number;
  onClose: () => void;
  onOpenWeek: (weekId: number) => void;
}

export default function WeekModal({ weekId, onClose, onOpenWeek }: Props) {
  const week = weeks.find((w) => w.id === weekId);
  const detail = weekDetails.find((d) => d.weekId === weekId);

  const completed = useLearningStore((s) => s.completedWeeks.has(weekId));
  const toggleWeek = useLearningStore((s) => s.toggleWeek);
  const storedMemo = useLearningStore((s) => s.memos[weekId] ?? "");
  const setMemo = useLearningStore((s) => s.setMemo);

  const [memoValue, setMemoValue] = useState(storedMemo);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ESCキーで閉じる
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  // bodyのスクロール抑制
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // debounceタイマーのクリーンアップ
  useEffect(() => {
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, []);

  const handleMemoChange = (value: string) => {
    setMemoValue(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => setMemo(weekId, value), 500);
  };

  if (!week || !detail) return null;

  const tasksByAxis = detail.tasks.reduce<Partial<Record<TaskAxis, Task[]>>>((acc, task) => {
    (acc[task.axis] ??= []).push(task);
    return acc;
  }, {});

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full h-full sm:h-auto sm:max-w-2xl sm:max-h-[90vh] bg-gray-900 sm:rounded-2xl border-0 sm:border sm:border-white/10 overflow-y-auto"
        style={{ animation: "fadeIn 0.2s ease" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ヘッダー */}
        <div className="sticky top-0 z-10 bg-gray-900/95 backdrop-blur border-b border-white/10 px-5 py-4 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono text-white/40">W{week.id}</span>
              <span className="text-xs text-white/40">{week.date}</span>
              {completed && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                  完了
                </span>
              )}
            </div>
            <h2 className="text-base font-semibold text-white leading-snug">{week.label}</h2>
          </div>
          <button
            type="button"
            aria-label="モーダルを閉じる"
            onClick={onClose}
            className="ml-4 flex-shrink-0 text-white/40 hover:text-white/90 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-5 py-4 space-y-5">
          {/* ゴール */}
          <div>
            <div className="text-xs font-semibold text-white/40 mb-1.5 uppercase tracking-wider">ゴール</div>
            <p className="text-sm text-white/90 bg-white/5 rounded-lg px-3 py-2.5 leading-relaxed">
              {detail.goal}
            </p>
          </div>

          {/* 前提Week */}
          {detail.prerequisiteWeeks.length > 0 && (
            <div>
              <div className="text-xs font-semibold text-white/40 mb-1.5 uppercase tracking-wider">前提Week</div>
              <div className="flex flex-wrap gap-2">
                {detail.prerequisiteWeeks.map((preId) => {
                  const preWeek = weeks.find((w) => w.id === preId);
                  return (
                    <button
                      key={preId}
                      type="button"
                      onClick={() => onOpenWeek(preId)}
                      className="text-xs px-2.5 py-1 rounded-lg bg-white/10 text-white/70 border border-white/15 hover:bg-white/15 hover:text-white transition-colors"
                    >
                      W{preId}: {preWeek?.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* タスク一覧 */}
          <div>
            <div className="text-xs font-semibold text-white/40 mb-2 uppercase tracking-wider">タスク</div>
            <div className="space-y-4">
              {AXIS_ORDER.filter((axis) => (tasksByAxis[axis]?.length ?? 0) > 0).map((axis) => {
                const cfg = AXIS_CONFIG[axis];
                return (
                  <div key={axis}>
                    <div className={`inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full mb-2 border ${cfg.bgClass} ${cfg.textClass} ${cfg.borderClass}`}>
                      {cfg.label}
                    </div>
                    <div className="space-y-2">
                      {(tasksByAxis[axis] ?? []).map((task, i) => {
                        const diff = DIFFICULTY_CONFIG[task.difficulty];
                        return (
                          <div key={i} className="rounded-lg bg-white/5 border border-white/10 p-3">
                            <div className="flex items-start justify-between gap-2 mb-1.5">
                              <span className="text-sm font-medium text-white/90 leading-snug">{task.title}</span>
                              <span className={`text-xs px-2 py-0.5 rounded-full border flex-shrink-0 ${diff.bgClass} ${diff.textClass} ${diff.borderClass}`}>
                                {diff.label}
                              </span>
                            </div>
                            <p className="text-xs text-white/55 leading-relaxed mb-2">{task.description}</p>
                            <div className="flex items-center gap-3">
                              <span className="text-xs text-white/35">⏱ {task.duration}</span>
                              {task.url && (
                                <a
                                  href={task.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs px-2 py-0.5 rounded bg-white/10 text-white/55 hover:text-white/90 hover:bg-white/15 transition-colors border border-white/10"
                                >
                                  参照 ↗
                                </a>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 学習メモ */}
          <div>
            <div className="text-xs font-semibold text-white/40 mb-1.5 uppercase tracking-wider">学習メモ</div>
            <textarea
              value={memoValue}
              onChange={(e) => handleMemoChange(e.target.value)}
              placeholder="学習メモを入力..."
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white/90 placeholder-white/25 resize-none focus:outline-none focus:border-white/30 transition-colors"
            />
          </div>

          {/* 完了トグルボタン */}
          <div className="pb-2">
            <button
              type="button"
              onClick={() => toggleWeek(weekId)}
              className={`w-full py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 border ${
                completed
                  ? "bg-white/5 text-white/50 border-white/10 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/30"
                  : "bg-green-500/20 text-green-400 border-green-500/30 hover:bg-green-500/30"
              }`}
            >
              {completed ? "未完了に戻す" : "完了にする"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
