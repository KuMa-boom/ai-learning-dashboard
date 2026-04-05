"use client";

import { useLearningStore } from "@/store/learningStore";
import { certs } from "@/data/curriculum";

const ICON_COLORS: Record<string, string> = {
  A: "#7F77DD",
  G: "#1D9E75",
  F: "#D85A30",
  J: "#BA7517",
};

export default function CertSection() {
  const { isCertEarned } = useLearningStore();

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <h2 className="text-sm font-semibold text-white/70 mb-3 flex items-center gap-2">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
        資格・修了証ステータス
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {certs.map((cert) => {
          const earned = isCertEarned(cert.weekTarget);
          const iconColor = ICON_COLORS[cert.icon] || "#378ADD";
          return (
            <div
              key={cert.name}
              className={`
                flex items-center gap-3 px-3 py-2.5 rounded-lg border transition-all duration-200
                ${earned
                  ? "border-white/20 bg-white/10"
                  : "border-white/5 bg-white/3 opacity-60"
                }
              `}
            >
              {/* Icon */}
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{
                  backgroundColor: earned ? iconColor + "33" : "#ffffff11",
                  color: earned ? iconColor : "#ffffff44",
                  border: `1px solid ${earned ? iconColor + "66" : "#ffffff11"}`,
                }}
              >
                {cert.icon}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className={`text-xs font-medium truncate ${earned ? "text-white/90" : "text-white/50"}`}>
                  {cert.name}
                </div>
                <div className="text-xs text-white/40 truncate">{cert.issuer}</div>
              </div>

              {/* Status badge */}
              <div className="flex-shrink-0">
                {earned ? (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                    取得済
                  </span>
                ) : (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-white/30 border border-white/10">
                    未取得
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
