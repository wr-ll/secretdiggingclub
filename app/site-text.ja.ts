// ウェブサイト全体で使用する日本語の文章を編集するファイルです。
export const siteTextJa = {
  brandName: "Secret Digging Club",
  description: "tkmizの作品、ZUN's Music Collections、東方Projectについて語る同人サークル兼Discordコミュニティです。",
  ui: { skipToContent: "本文へ移動", homeLabel: "Secret Digging Club ホーム", primaryNavigation: "メインナビゲーション", footerNavigation: "フッターナビゲーション", languageNavigation: "言語" },
  gateway: { metadataDescription: "Secret Digging Clubの表示言語を選択してください。", message: "言語を選択してください。ブラウザの設定に応じて自動的に選択されます。", navigationLabel: "言語を選択" },
  notFound: { message: "このページは存在しません。" },
  nav: { writings: "読み物", people: "メンバー", about: "概要", discord: "Discord" },
  home: {
    read: "記事を読む", recent: "新着記事", viewAll: "すべて見る", noWritings: "記事はまだ公開されていません。", club: "サークルについて",
    clubText: "私たちは小さな同人サークル兼Discordコミュニティです。関心のあるテーマについて、エッセイ、ワーキングペーパー、分析、意見/解釈を公開します。",
    privacy: "サイトは手動で更新します。Discordサーバーとウェブサイトは別々に管理しています。",
    about: "詳しく見る", people: "メンバー", allProfiles: "プロフィール一覧", noPeople: "公開プロフィールはまだありません。", join: "私たちのDiscordに参加",
    joinText: "tkmiz、ZUN's Music Collections、および関連する関心事について話しましょう。", serverInfo: "サーバー情報",
  },
  writings: { title: "読み物", intro: "エッセイ、分析、ワーキングペーパー、意見/解釈を掲載しています。", search: "記事を検索", placeholder: "タイトル、著者、種類、タグで検索…", noResults: "該当する記事はありません。", empty: "記事はまだ公開されていません。" },
  people: { title: "メンバー", intro: "公開プロフィールは任意で、手動で管理されます。Discordへの参加だけで掲載されることはありません。", empty: "公開プロフィールはまだありません。", interests: "関心分野", elsewhere: "外部リンク", noLinks: "リンクはありません。", policy: "プロフィール方針", policyText: "仮名を使用し、手動で管理します。", publications: "掲載記事", noPublications: "掲載記事はまだありません。", allPeople: "メンバー一覧" },
  about: {
    title: "概要", intro: "Secret Digging Clubは、独立した同人サークル兼Discordコミュニティです。",
    p1: "もう一度検索したり、比較したり、注釈を付けたりする価値のあるテーマが好きです。エッセイ、分析、ワーキングペーパー、レビュー、意見/解釈を公開します。",
    serverTitle: "ウェブサイトとサーバー", server1: "このサイトは検索可能な公開アーカイブです。会話はDiscordで行います。参加しただけで公開プロフィールが作られることはなく、サーバーの発言が自動転載されることもありません。", server2: "Discordからの引用は、手動で選ばれ、発言者の承認を得た場合のみ掲載します。",
    editorialTitle: "編集方針", editorial: "すべての内容はサイト管理者が確認し、手動で公開します。投稿、共同制作、公開プロフィールの掲載は管理者の判断で決定します。",
  },
  discord: { title: "Discord", intro: "会話、参考資料の共有、制作途中の内容のためのスペースです。", widget: "Discordサーバー", widgetHelp: "Discord側で読み込みが許可されると、ここにサーバーウィジェットが表示されます。", expect: "サーバーについて", items: ["作品、翻訳、アーカイブ、および関連する関心事について話します。", "気軽な会話と詳しい分析の両方を歓迎する環境です。", "会話は原則非公開で、ウェブサイトへ自動転載されません。", "公開プロフィールや寄稿は任意で、仮名を使用できます。"], join: "サーバーに参加", forthcoming: "招待リンク準備中" },
  article: { writtenBy: "著者", published: "公開日", format: "種類", length: "読了時間", minutes: "分", tags: "タグ" },
  kinds: { "essay": "エッセイ", "working-paper": "ワーキングペーパー", "opinion-hc": "意見/解釈", "translation": "翻訳" },
} as const;
