import type { WeekDetail } from "@/types";

export const weekDetails: WeekDetail[] = [
  {
    weekId: 1,
    prerequisiteWeeks: [],
    goal: "Claude Codeの基本操作を習得し、CLAUDE.mdの役割を理解する",
    tasks: [
      {
        axis: "claude_code",
        title: "/init・CLAUDE.mdを手を動かして体験",
        description:
          "Zenn記事（カンリー社内ハンズオン資料）を読みながら、Claude Codeをインストールして/initを実行。CLAUDE.mdの役割と書き方を理解し、GitHub MCPも導入して動作確認まで行う。",
        duration: "2〜3時間",
        url: "https://zenn.dev/canly/articles/2e0d115e360144",
        difficulty: "easy",
      },
      {
        axis: "academy",
        title: "Claude 101 を修了する",
        description:
          "Anthropic AcademyのClaude 101コースを受講。基本操作・プロジェクト・Artifacts・Skills・ツール連携の全体像を把握し、修了証を取得してLinkedInに追加する。",
        duration: "30〜60分",
        url: "https://anthropic.skilljar.com/",
        difficulty: "easy",
      },
      {
        axis: "qualification",
        title: "生成AIパスポートの試験概要を把握する",
        description:
          "公式サイトで出題範囲・試験形式・受験方法を確認。AIの基礎概念（機械学習・深層学習・生成AIの仕組み）を公式テキストまたは過去問サイトで一通りインプットする。",
        duration: "30〜60分",
        url: "https://www.guga.or.jp/generative-ai-passport/",
        difficulty: "easy",
      },
    ],
  },
  {
    weekId: 2,
    prerequisiteWeeks: [1],
    goal: "Skillを1つ自作し、社内タスクの自動化を1件完成させる",
    tasks: [
      {
        axis: "claude_code",
        title: "業務自動化Skillを1つ作る",
        description:
          "Qiita記事（業務自動化10ユースケース）を参考に、自分の社内タスク（日次レポート・メール下書きなど）を1件Skillに落とし込んで実際に動かす。プロンプト例をコピーして改変するところから始めてOK。",
        duration: "3〜4時間",
        url: "https://qiita.com/renewer_horiuchi/items/94cc5d00906f1945b94e",
        difficulty: "normal",
      },
      {
        axis: "academy",
        title: "AI Fluency: Framework & Foundations を修了する",
        description:
          "4Dフレームワーク（Delegation・Description・Discernment・Diligence）を学ぶ。AIに何を任せるか・どう指示するか・出力をどう評価するか・倫理的に使い続けるかの4軸を体系化する。修了証を取得する。",
        duration: "1〜2時間",
        url: "https://anthropic.skilljar.com/",
        difficulty: "easy",
      },
      {
        axis: "qualification",
        title: "AIの歴史・機械学習・深層学習の基礎をインプット",
        description:
          "生成AIパスポート対策として、AIの歴史（ルールベース→機械学習→深層学習→生成AI）、機械学習の基礎概念（教師あり・なし・強化学習）、深層学習の仕組み（CNN・RNNなど）を整理する。",
        duration: "1〜2時間",
        difficulty: "normal",
      },
    ],
  },
  {
    weekId: 3,
    prerequisiteWeeks: [1, 2],
    goal: "Claude CodeのIDE連携を体験し、Agent Skillsの概念を理解する",
    tasks: [
      {
        axis: "claude_code",
        title: "Udemy「Claude Code ハンズオン入門」前半を受講",
        description:
          "環境構築・基本操作・CLAUDE.mdの書き方を体系化する。VS CodeやCursorとのIDE Integrationを習得。1.5〜2倍速で視聴し、ハンズオンパートだけ等速で手を動かす。",
        duration: "2〜3時間",
        url: "https://www.udemy.com/course/claude-code/",
        difficulty: "normal",
      },
      {
        axis: "academy",
        title: "Introduction to Agent Skills を受講",
        description:
          "Skillの仕組み・再利用設計・SKILL.mdの書き方を学ぶ。約22分の動画コース。副業の9スキル構成設計の予習として、Skillがエージェントの作業をどう効率化するかを理解する。",
        duration: "30〜60分",
        url: "https://anthropic.skilljar.com/",
        difficulty: "easy",
      },
      {
        axis: "qualification",
        title: "生成AIのビジネス活用・リスク・倫理・法律をインプット",
        description:
          "生成AIパスポート対策として、ビジネス活用事例・著作権・プライバシー・セキュリティリスク・AI倫理・国内外のAIガイドラインを整理する。「どこまでOKでどこからNGか」の判断軸を身につける。",
        duration: "1〜2時間",
        difficulty: "normal",
      },
    ],
  },
  {
    weekId: 4,
    prerequisiteWeeks: [3],
    goal: "GitHub ActionsとMCP連携を習得し、AIパスポートの受験申込をする",
    tasks: [
      {
        axis: "claude_code",
        title: "Udemy「Claude Code ハンズオン入門」後半を受講",
        description:
          "IDE Integration・GitHub Actions・MCP連携を手を動かして体験。GitHubのissue読み込みやPull Request作成をClaude Code経由で実行できる状態にする。",
        duration: "3〜4時間",
        url: "https://www.udemy.com/course/claude-code/",
        difficulty: "normal",
      },
      {
        axis: "academy",
        title: "Agent Skillsの復習・副業設計への転用メモ化",
        description:
          "先週学んだAgent Skillsの内容を振り返り、副業プロジェクトの9スキル構成（planner・architect・tdd-guideなど）への転用方法をCLAUDE.mdにメモとして整理する。",
        duration: "30分",
        difficulty: "easy",
      },
      {
        axis: "qualification",
        title: "生成AIパスポートの過去問・模擬試験で総仕上げ＆受験申込",
        description:
          "過去問・模擬試験で弱点を特定して補強。合格ラインの目安は正答率70%以上。仕上がったら公式サイトから受験申込を完了させる（会社費用負担の確認も忘れずに）。",
        duration: "1〜2時間",
        url: "https://www.guga.or.jp/generative-ai-passport/",
        difficulty: "normal",
      },
    ],
  },
  {
    weekId: 5,
    prerequisiteWeeks: [4],
    goal: "初めてのWebアプリをVercelにデプロイし、生成AIパスポートを受験する",
    tasks: [
      {
        axis: "claude_code",
        title: "Udemy「Vibe Coding入門」でアプリを作りVercelにデプロイ",
        description:
          "HTML/JS/Pythonを使ったシンプルなアプリを作成し、GitHub→Vercelの自動デプロイまで完走する。「作って→デプロイして→URLを人に見せられる」状態を目標にする。",
        duration: "3〜4時間",
        url: "https://www.udemy.com/course/claude-code-vibe-cording/",
        difficulty: "normal",
      },
      {
        axis: "academy",
        title: "Building with Claude API を受講",
        description:
          "APIを使ったアプリ開発の基礎を学ぶ。Vibe Codingで作ったアプリとの接続イメージを持ちながら受講すると理解が深まる。修了証を取得する。",
        duration: "1〜2時間",
        url: "https://anthropic.skilljar.com/",
        difficulty: "normal",
      },
      {
        axis: "qualification",
        title: "生成AIパスポートを受験する",
        description:
          "オンラインで受験（随時）。Week4までに申込済みの前提。合格後は会社に費用申請する。合格証はLinkedInと職務経歴書に追加する。",
        duration: "1〜2時間（試験本番）",
        url: "https://www.guga.or.jp/generative-ai-passport/",
        difficulty: "easy",
      },
    ],
  },
  {
    weekId: 6,
    prerequisiteWeeks: [5],
    goal: "9専門エージェント構成の前半を理解し、副業設計に転用する",
    tasks: [
      {
        axis: "claude_code",
        title: "Udemy「Everything Claude Code」前半を受講",
        description:
          "Anthropicハッカソン優勝設定集をベースに、planner・architect・tdd-guideなど専門エージェントの前半4つを学ぶ。副業プロジェクトの構成図と照らし合わせながら受講する。",
        duration: "3〜4時間",
        url: "https://www.udemy.com/course/everything-claude-code/",
        difficulty: "hard",
      },
      {
        axis: "academy",
        title: "MCPコース（初級）を受講",
        description:
          "MCPの基本概念・Pythonでの外部サービス連携の基礎を学ぶ。Googleカレンダー・Gmail・NotionなどのMCPサーバーとClaudeを接続するイメージを掴む。",
        duration: "1〜2時間",
        url: "https://anthropic.skilljar.com/",
        difficulty: "normal",
      },
    ],
  },
  {
    weekId: 7,
    prerequisiteWeeks: [6],
    goal: "エージェント構成の後半を習得し、MCP修了証を取得する",
    tasks: [
      {
        axis: "claude_code",
        title: "Udemy「Everything Claude Code」後半を受講",
        description:
          "code-reviewer・security-reviewer・Context Window Disciplineなど後半エージェントを学ぶ。TDD-Centric（RED-GREEN-REFACTORサイクル）とSecurity-First設計を副業プロジェクトに適用する方法を整理する。",
        duration: "3〜4時間",
        url: "https://www.udemy.com/course/everything-claude-code/",
        difficulty: "hard",
      },
      {
        axis: "academy",
        title: "MCPコース（上級）を受講・修了証取得",
        description:
          "Pythonで外部サービスとClaudeを連携させる実装スキルを習得。副業の外部連携強化（Notion・Asana・Stripe MCPなど）への応用方法をメモする。修了証を取得する。",
        duration: "1〜2時間",
        url: "https://anthropic.skilljar.com/",
        difficulty: "hard",
      },
    ],
  },
  {
    weekId: 8,
    prerequisiteWeeks: [7],
    goal: "SaaS開発をスタートしつつFE試験の直前準備を開始する",
    tasks: [
      {
        axis: "claude_code",
        title: "Udemy「Next.js × Supabase × Stripe SaaS開発」を開始",
        description:
          "Clerk認証・Stripe決済・Supabaseデータベースを統合したサブスクリプション型アプリの構築を開始する。FE優先のため進捗は抑えめでOK。週2〜3時間を目安に進める。",
        duration: "2〜3時間",
        url: "https://www.udemy.com/course/claude-code-project-tracker/",
        difficulty: "hard",
      },
      {
        axis: "qualification",
        title: "FE試験・科目Aの弱点ドメイン補強",
        description:
          "過去問道場で科目Aの弱点ドメインを特定し、テキストで補強する。目標：科目A 75%安定。ミスは未知用語・概念不明・ケアレス・計算ミスの4分類で記録する。",
        duration: "2〜3時間",
        url: "https://fe-siken.com/",
        difficulty: "normal",
      },
    ],
  },
  {
    weekId: 9,
    prerequisiteWeeks: [8],
    goal: "FE科目Bの疑似言語を時間内に読めるようになる",
    tasks: [
      {
        axis: "qualification",
        title: "FE試験・科目B問題集を1周する",
        description:
          "「出るとこだけ！科目B予想＋過去問題集」を使い、疑似言語・アルゴリズム問題を集中的に演習する。目標：疑似言語を制限時間内に読み切れる状態にする。",
        duration: "3〜4時間",
        difficulty: "hard",
      },
      {
        axis: "claude_code",
        title: "SaaS開発を継続（FE優先のため軽め）",
        description:
          "FE学習の合間にSaaS開発を少し進める。詰まったらClaude Codeに相談しながら進めること。完成を急がず、動く部分を少しずつ増やしていく。",
        duration: "1時間",
        url: "https://www.udemy.com/course/claude-code-project-tracker/",
        difficulty: "normal",
      },
    ],
  },
  {
    weekId: 10,
    prerequisiteWeeks: [9],
    goal: "FE模擬試験で科目A 80%・科目B 70%を安定させる",
    tasks: [
      {
        axis: "qualification",
        title: "パーフェクトラーニング模擬試験を実施",
        description:
          "「パーフェクトラーニング過去問題集 令和08年版」で本番形式の模擬試験を実施。科目A・Bを通しで解いて時間配分を確認する。弱点は集中的に周回する。",
        duration: "3〜4時間",
        difficulty: "normal",
      },
    ],
  },
  {
    weekId: 11,
    prerequisiteWeeks: [10],
    goal: "FE試験を受験し、G検定の学習をスタートする",
    tasks: [
      {
        axis: "qualification",
        title: "基本情報技術者試験（FE）を受験する",
        description:
          "CBT形式で受験（7月末〜8月上旬）。受験後は結果に関わらずG検定の学習に切り替える。合格した場合は合格証書をLinkedIn・職務経歴書に追加する。",
        duration: "3時間（試験本番）",
        url: "https://www.ipa.go.jp/shiken/kubun/fe.html",
        difficulty: "hard",
      },
      {
        axis: "qualification",
        title: "G検定の学習計画を立てる・公式テキストを入手する",
        description:
          "G検定の出題範囲（シラバス）を確認し、Anthropic Academyで学んだ内容との重複を洗い出す。公式テキスト「ディープラーニングG検定テキスト」を入手して全体構成を把握する。受験チケット（13,200円）を購入する。",
        duration: "1〜2時間",
        url: "https://www.jdla.org/certificate/general/",
        difficulty: "easy",
      },
    ],
  },
  {
    weekId: 12,
    prerequisiteWeeks: [11],
    goal: "G検定のAI基礎・機械学習領域を完全に理解する",
    tasks: [
      {
        axis: "qualification",
        title: "G検定：AIの歴史・数学基礎・機械学習を学ぶ",
        description:
          "シラバスに基づき、AIの歴史（第1〜3次ブーム）・線形代数・確率統計の基礎・機械学習手法（回帰・分類・クラスタリング）を学ぶ。Anthropic Academyの内容と重複する部分は復習として高速で通過する。",
        duration: "2〜3時間",
        difficulty: "normal",
      },
      {
        axis: "claude_code",
        title: "SaaS開発を継続（G検定優先のため軽め）",
        description:
          "G検定学習の合間にSaaS開発を少し進める。週1時間程度を目安に。完成を急がず動く部分を増やしていく。",
        duration: "1時間",
        url: "https://www.udemy.com/course/claude-code-project-tracker/",
        difficulty: "normal",
      },
    ],
  },
  {
    weekId: 13,
    prerequisiteWeeks: [12],
    goal: "G検定の深層学習・応用領域を理解する",
    tasks: [
      {
        axis: "qualification",
        title: "G検定：深層学習・生成AI・ビジネス活用を学ぶ",
        description:
          "CNN・RNN・Transformer・拡散モデルなど深層学習の主要モデルを理解する。生成AIのビジネス活用・法律・倫理・セキュリティ領域はAIパスポート学習の延長として復習する。過去問で理解度を確認する。",
        duration: "2〜3時間",
        difficulty: "hard",
      },
      {
        axis: "claude_code",
        title: "SaaS開発を継続",
        description:
          "G検定学習の合間にSaaS開発を進める。Clerk認証・Stripe決済・Supabaseの基本的な動作確認まで進めることを目標にする。",
        duration: "1時間",
        url: "https://www.udemy.com/course/claude-code-project-tracker/",
        difficulty: "normal",
      },
    ],
  },
  {
    weekId: 14,
    prerequisiteWeeks: [13],
    goal: "G検定の模擬試験で合格ラインを突破する",
    tasks: [
      {
        axis: "qualification",
        title: "G検定：模擬試験＋弱点周回",
        description:
          "公式サイトのミニテストや市販の模擬試験を活用して弱点ドメインを特定する。間違えた問題を3回以上繰り返し、正答率80%以上を目標にする。受験日の最終確認（オンライン試験 or 会場試験の選択）をする。",
        duration: "3〜4時間",
        url: "https://www.jdla.org/certificate/general/",
        difficulty: "normal",
      },
      {
        axis: "claude_code",
        title: "副業プロジェクトの最終調整",
        description:
          "G検定後に副業をフルコミットできるよう、SaaS開発の現状整理・残タスクのリスト化・CLAUDE.mdへの知見蓄積を行う。",
        duration: "1〜2時間",
        difficulty: "normal",
      },
    ],
  },
  {
    weekId: 15,
    prerequisiteWeeks: [14],
    goal: "G検定に合格し、副業プロジェクトを本格稼働させる",
    tasks: [
      {
        axis: "qualification",
        title: "G検定を受験する（2026年第5回 or 第6回）",
        description:
          "オンライン試験（100分・145問）または会場試験で受験。合格後はDX推進パスポートのオープンバッジを取得し、LinkedInと職務経歴書に追加する。受験料は会社費用負担の申請を忘れずに。",
        duration: "2時間（試験本番）",
        url: "https://www.jdla.org/certificate/general/",
        difficulty: "hard",
      },
      {
        axis: "claude_code",
        title: "副業プロジェクトを本格稼働させる",
        description:
          "G検定合格後はClaude Code学習にフルコミット。SaaS開発の完成・デプロイ・収益化フローの構築を進める。Next.js × Supabase × Stripeの本番環境をVercelに展開する。",
        duration: "3〜4時間",
        url: "https://www.udemy.com/course/claude-code-project-tracker/",
        difficulty: "hard",
      },
    ],
  },
];
