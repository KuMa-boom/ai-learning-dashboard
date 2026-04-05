# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 言語

**やり取りはすべて日本語で行うこと。**

---

## プロジェクト構成

このリポジトリには以下が含まれる：

- `ai-learning-dashboard/` — Next.js製のAI学習進捗管理ダッシュボード（メインプロジェクト）
- `multi-agent-viz.html` — スタンドアロンのHTMLビジュアライゼーション

---

## ai-learning-dashboard

### コマンド

すべてのコマンドは `ai-learning-dashboard/` ディレクトリ内で実行する。

```bash
npm run dev      # 開発サーバー起動 (http://localhost:3000)
npm run build    # プロダクションビルド
npm run start    # プロダクションサーバー起動
vercel --prod    # Vercelへデプロイ
```

TypeScriptの型チェックはビルド時に自動実行される（`npm run build`）。単独で実行する場合：

```bash
npx tsc --noEmit
```

### 技術スタック

- **Next.js 16.2.2**（App Router）— バージョン固有の破壊的変更あり。コード変更前に `node_modules/next/dist/docs/` のドキュメントを確認すること
- **Tailwind CSS v4** — `tailwind.config.ts` は存在しない。設定は `app/globals.css` の `@theme` ブロックで管理。ダークモードは `@variant dark` で定義
- **Zustand v5** — クライアント側の進捗状態管理
- **TypeScript strict mode**

### アーキテクチャ

データフローは一方向：

```
data/curriculum.ts  →  store/learningStore.ts  →  components/
（静的マスターデータ）    （状態・派生値・永続化）       （表示・操作）
```

**`data/curriculum.ts`**
Week（15件）・Phase（5件）・Cert（7件）の静的マスターデータ。変更時はここだけ編集すればよい。

**`store/learningStore.ts`**
Zustandストア。`completedWeeks: Set<number>` が唯一の状態。進捗計算（全体・フェーズ別・修了証）はすべてこのストアの派生関数として実装。localStorage永続化キーは `ai_learning_v1`。

**SSRハイドレーション**
`Dashboard.tsx` が `useEffect` 内で `hydrate()` を呼び出すことでSSRとの不整合を防いでいる。`hydrated` フラグが `false` の間はローディング表示にフォールバックする。

**`"use client"` の付与ルール**
localStorage・Zustand・イベントハンドラを使うコンポーネントにのみ付与。`app/page.tsx` と `app/layout.tsx` はサーバーコンポーネントのまま維持する。

### デプロイ先

Vercel（プロジェクト：`gotoutakuuma-1361s-projects/ai-learning-dashboard`）
本番URL：https://ai-learning-dashboard-three.vercel.app
