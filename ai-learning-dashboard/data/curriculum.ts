import type { Week, Phase, Cert } from "@/types";

export const weeks: Week[] = [
  { id: 1,  phase: 1, label: "全体像把握・CLAUDE.md体験",               date: "04/05", tags: ["cc", "aa", "ap"] },
  { id: 2,  phase: 1, label: "業務自動化Skill作成 + AI Fluency",         date: "04/12", tags: ["cc", "aa", "ap"] },
  { id: 3,  phase: 1, label: "Udemy前半 + Agent Skills入門",             date: "04/19", tags: ["cc", "aa", "ap"] },
  { id: 4,  phase: 1, label: "Udemy後半 + AIパスポート仕上げ",            date: "04/26", tags: ["cc", "aa", "ap"] },
  { id: 5,  phase: 2, label: "Vibe Coding + デプロイ + AIパスポート受験", date: "05/03", tags: ["cc", "aa", "ap"] },
  { id: 6,  phase: 2, label: "Everything Claude Code前半",               date: "05/10", tags: ["cc", "aa"] },
  { id: 7,  phase: 2, label: "Everything Claude Code後半 + MCP",         date: "05/17", tags: ["cc", "aa"] },
  { id: 8,  phase: 3, label: "SaaS開発開始 + FE直前準備",                date: "06/07", tags: ["cc", "fe"] },
  { id: 9,  phase: 3, label: "FE模擬試験・弱点周回",                      date: "06/21", tags: ["fe"] },
  { id: 10, phase: 3, label: "FE最終調整",                               date: "07/12", tags: ["fe"] },
  { id: 11, phase: 4, label: "FE受験 + G検定学習開始",                   date: "07/末",  tags: ["fe", "g"] },
  { id: 12, phase: 4, label: "G検定 AIの歴史・機械学習基礎",              date: "08/09", tags: ["g"] },
  { id: 13, phase: 4, label: "G検定 深層学習・ビジネス活用",              date: "08/23", tags: ["g"] },
  { id: 14, phase: 5, label: "G検定 直前対策・模擬試験",                  date: "10/初旬", tags: ["g", "cc"] },
  { id: 15, phase: 5, label: "G検定受験 + 副業本格稼働",                  date: "11月",  tags: ["g", "cc"] },
];

export const phases: Phase[] = [
  { id: 1, label: "Phase 1", title: "全体像把握 + AIパスポート対策",       period: "2026/04/05 〜 04/26", color: "#378ADD" },
  { id: 2, label: "Phase 2", title: "アプリ開発入門 〜 デプロイ",          period: "2026/05/03 〜 05/17", color: "#1D9E75" },
  { id: 3, label: "Phase 3", title: "Claude Code上級 + FE試験直前",       period: "2026/06 〜 07",       color: "#7F77DD" },
  { id: 4, label: "Phase 4", title: "FE受験後 → G検定本格学習",           period: "2026/08 〜 09",       color: "#D85A30" },
  { id: 5, label: "Phase 5", title: "G検定受験 + 副業プロジェクト統合",    period: "2026/10 〜 11",       color: "#BA7517" },
];

export const certs: Cert[] = [
  { name: "Claude 101",               issuer: "Anthropic Academy", icon: "A", weekTarget: 1  },
  { name: "AI Fluency",               issuer: "Anthropic Academy", icon: "A", weekTarget: 2  },
  { name: "生成AIパスポート",           issuer: "GUGA",             icon: "G", weekTarget: 5  },
  { name: "Building with Claude API", issuer: "Anthropic Academy", icon: "A", weekTarget: 5  },
  { name: "MCPコース",                 issuer: "Anthropic Academy", icon: "A", weekTarget: 7  },
  { name: "基本情報技術者試験（FE）",   issuer: "IPA",              icon: "F", weekTarget: 11 },
  { name: "G検定",                    issuer: "JDLA",              icon: "J", weekTarget: 15 },
];
