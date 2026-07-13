export interface Article {
  id: string;
  title: string;
  titleJa: string;
  summaryJa: string;
  bodyOriginal: string;
  bodyJa: string;
  source: string;
  sourceUrl: string;
  publishedAt: string;
  category: string;
  imageUrl?: string;
  readTime: number;
}

export const articles: Article[] = [
  {
    id: "meta-s-louisiana-data-center-investment-30003a99",
    title: "Meta's Louisiana data center investment to reach $50 billion, aided by generous tax incentives",
    titleJa: "メタのルイジアナ州データセンターへの投資は寛大な税制優遇を受けて500億ドルに達する",
    summaryJa: "メタ氏によると、ルイジアナ州リッチランド教区に計画されているハイペリオン・データセンター・スーパークラスターは5GWの施設で、費用は500億ドル以上になるという。",
    bodyOriginal: `Meta's massive Hyperion data center project in rural Louisiana is getting much bigger and costlier, with a big assist from the state's government.
The company said in a blog post on Monday that the site in Richland Parish, Louisiana — home to what will be Meta's largest data center — will be a 5GW facility and cost over $50 billion. That's higher than the $27 billion figure that was revealed in October, when Meta and Blue Owl Capital formed a joint venture to help with the buildout and management of the facility, originally planned as a 2GW data center.
As Meta pursues its multi-hundred-billion-dollar buildout artificial intelligence buildout, the company and hyperscaler rivals Microsoft, Alphabet and Amazon are taking advantage of tax rebates and energy deals being offered by states that are fighting to get a piece of the AI boom.
In late 2024, Louisiana Republican Governor Jeff Landry signed into law a 20-year sales tax exemption for data centers built before 2029 as part of an effort to court Meta in the state, CNBC previously reported. Landry is set to host a press event on Monday in Baton Rouge.
"I'm a business guy," Landry told CNBC in an interview last year. "What we know is when you look at the overall comprehensive package here, it's in the black. For local government, and the state, and how you get to the bottom line is irrespective to me."
Meta is expanding the project as it seeks to build out enough AI infrastructure to meet demand. The announcement comes after Meta had its best week on the stock market since early 2024 following the release of two major AI models under the leadership of AI chief Alexandr Wang, head of Meta Superintelligence Labs. Investors have been looking for the company to start showing returns on its outsized AI investments.
Meta said in Monday's post that the company "pays the full costs of the energy, water, and related infrastructure the data center uses so consumers aren't paying the cost." Since construction of the Louisiana data center began in December 2024, local businesses have received over $1.6 billion in contracts from Meta, the company said.
"With this expansion, we will be investing over $1 billion in local infrastructure improvements, including roads, water and wastewater systems," Meta said in the post. The company didn't announce a financial partner for the expansion.
When the project began, the estimated price tag was $10 billion. CEO Mark Zuckerberg said in a Facebook post roughly six months later that the supercluster, named Hyperion, would be "able to scale up to 5GW over several years." Unlike traditional data centers, superclusters are packed with graphics processing units and related cutting-edge hardware tailored for AI workloads.
"Meta Superintelligence Labs will have industry-leading levels of compute and by far the greatest compute per researcher," Zuckerberg wrote.
A Meta spokesperson told CNBC that the Hyperion project should reach 2GW by 2030, but there's no timeline for when the full 5GW project will be completed.`,
    bodyJa: `ルイジアナ州の田舎にあるメタ社の大規模なハイペリオン・データセンター・プロジェクトは、州政府からの多大な支援を受けて、はるかに大規模かつ高価になっている。
同社は月曜日のブログ投稿で、メタ社最大のデータセンターとなるルイジアナ州リッチランド教区のサイトは5GWの施設で、費用は500億ドル以上になると述べた。これは、当初2GWのデータセンターとして計画されていた施設の建設と管理を支援するために、メタとブルー・オウル・キャピタルが合弁事業を設立した10月に明らかになった270億ドルという数字よりも高い。
メタ社が数千億ドル規模の人工知能開発を進める中、同社とハイパースケーラーのライバルであるマイクロソフト社、アルファベット社、アマゾン社は、AIブームの一部を獲得しようと争っている州が提供する税金還付やエネルギー協定を利用している。
2024年後半、ルイジアナ州の共和党知事ジェフ・ランドリーは、州内のメタに求愛する取り組みの一環として、2029年以前に建設されたデータセンターに対する20年間の売上税免除法案に署名したとCNBCが以前報じた。ランドリー氏は月曜日にバトンルージュでプレスイベントを主催する予定だ。
「私はビジネスマンだ」とランドリー氏は昨年CNBCのインタビューで語った。 「私たちが知っているのは、ここでの包括的なパッケージ全体を見ると、黒字だということです。地方自治体にとっても州にとっても、最終的にどうやって利益を得るのかは私には関係ありません。」
Meta は、需要を満たすのに十分な AI インフラストラクチャを構築するためにプロジェクトを拡大しています。この発表は、メタ・スーパーインテリジェンス・ラボ所長でAI責任者のアレクサンドル・ワン氏のリーダーシップの下、2つの主要なAIモデルのリリースを受けて、メタが株式市場で2024年初頭以来最高の週を迎えた後に行われた。投資家は同社が大規模なAI投資から利益を上げ始めることを期待していた。
メタ氏は月曜の投稿で、同社が「データセンターが使用するエネルギー、水道、関連インフラの費用を全額負担しているため、消費者はコストを支払っていない」と述べた。ルイジアナ州のデータセンターの建設が2024年12月に始まって以来、地元企業はメタ社から16億ドル以上の契約を受け取ったと同社は述べた。
「この拡張により、道路、上下水道システムを含む地域インフラの改善に10億ドル以上を投資することになる」とメタ氏は投稿の中で述べた。同社は拡張のための財務パートナーを発表しなかった。
プロジェクトが開始されたとき、推定価格は 100 億ドルでした。 CEOのマーク・ザッカーバーグ氏は約6か月後のFacebookへの投稿で、Hyperionと名付けられたスーパークラスターは「数年かけて5GWまでスケールアップできる」と述べた。従来のデータセンターとは異なり、スーパークラスターには、AI ワークロードに合わせて調整されたグラフィックス処理ユニットと関連する最先端のハードウェアが詰め込まれています。
「メタ・スーパーインテリジェンス・ラボは業界をリードするレベルのコンピューティングを備え、研究者一人当たりのコンピューティングはこれまでで最も優れたものになるだろう」とザッカーバーグ氏は書いた。
Metaの広報担当者はCNBCに対し、Hyperionプロジェクトは2030年までに2GWに達するはずだが、完全な5GWプロジェクトがいつ完了するかについてのタイムラインはないと語った。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/13/meta-louisiana-data-center-investment-reaches-50-billion-amid-ai-push.html",
    publishedAt: "2026-07-13T09:30:01+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "oil-prices-surge-as-much-as-5-after-iran-b38e9343",
    title: "Oil prices surge as much as 5% after Iran declares Strait of Hormuz is closed",
    titleJa: "イランがホルムズ海峡閉鎖宣言後、原油価格が最大5％上昇",
    summaryJa: "今週は米国とイランによる攻撃の応酬が続く中、原油価格が新たな急騰で始まる。",
    bodyOriginal: `The week is kicking off with fresh spikes for oil prices as the U.S. and Iran continued to exchange attacks.`,
    bodyJa: `今週は米国とイランによる攻撃の応酬が続く中、原油価格が新たな急騰で始まる。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/oil-prices-surge-as-much-as-5-after-iran-declares-strait-of-hormuz-is-closed-6905599b?mod=mw_rss_topstories",
    publishedAt: "2026-07-13T09:27:00+00:00",
    category: "エネルギー",
    imageUrl: "https://images.mktw.net/im-94895376",
    readTime: 2,
  },
  {
    id: "geopolitical-shock-exposes-sk-hynix-leve-019238e6",
    title: "Geopolitical shock exposes SK Hynix leverage after hot ADR debut",
    titleJa: "地政学的衝撃により、活発なADRデビュー後にSKハイニックスのレバレッジが暴露される",
    summaryJa: "米国での預託証券上場が大成功を収めたわずか1取引セッション後、韓国の半導体メーカーSKハイニックスの現地株はソウルの国内取引所で15％急落した。",
    bodyOriginal: `Just one trading session after a highly successful U.S. listing for its depositary receipts, local shares in South Korean chip maker SK Hynix plummeted 15% on the domestic exchange in Seoul.`,
    bodyJa: `米国での預託証券上場が大成功を収めたわずか1取引セッション後、韓国の半導体メーカーSKハイニックスの現地株はソウルの国内取引所で15％急落した。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/geopolitical-shock-exposes-sk-hynix-leverage-after-hot-adr-debut-340ae8d4?mod=mw_rss_topstories",
    publishedAt: "2026-07-13T09:12:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-66386191",
    readTime: 2,
  },
  {
    id: "tsmc-just-reported-a-record-month-for-re-9c2d9430",
    title: "TSMC just reported a record month for revenue ahead of critical earnings report on Thursday",
    titleJa: "TSMCは木曜日の重要な収益報告に先立ち、記録的な月収を報告したばかりだ",
    summaryJa: "台湾積体電路製造公司は、6月の純収益が67%増加して132億ドルになったと発表した",
    bodyOriginal: `Taiwan Semiconductor Manufacturing Corp. said net revenue increased by 67% in June to $13.2 billion`,
    bodyJa: `台湾積体電路製造公司は、6月の純収益が67%増加して132億ドルになったと発表した`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/tsmc-just-reported-a-record-month-for-revenue-ahead-of-critical-earnings-report-on-thursday-508195fd?mod=mw_rss_topstories",
    publishedAt: "2026-07-13T09:01:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-72859017",
    readTime: 2,
  },
  {
    id: "u-s-and-iran-exchange-strikes-as-strait-371be56d",
    title: "U.S. and Iran exchange strikes as Strait of Hormuz standoff escalates",
    titleJa: "ホルムズ海峡の対立激化で米国とイランが攻撃を交わす",
    summaryJa: "イランは週末の米軍の新たな攻撃に対抗し、湾岸諸国の米軍基地への攻撃を開始し、戦略的に重要なホルムズ海峡を巡る対立が深まった。今回のやりとりは、先月署名された暫定和平協定の将来にさらなる疑問を投げかけている。この協定は、ホルムズ海峡を再開し、60日間の交渉を経て戦争を終結させる道筋をつけることを目的としていた。",
    bodyOriginal: `Iran responded to a fresh wave of strikes from U.S. forces over the weekend by launching an attack on American military bases in several Gulf states, deepening a standoff over the strategically vital Strait of Hormuz.
The latest exchange casts further doubt over the future of the interim peace agreement signed last month, a deal that had sought to pave the way to reopen the Strait of Hormuz and end the war after 60 days of negotiations.
Iran's strikes targeted U.S. bases in Kuwait, Bahrain, Jordan, Oman and Qatar, according to the country's state media outlets, describing them as retaliatory measures to renewed U.S. bombings.
Sirens sounded for the third time in Bahrain on Monday, Reuters reported, citing the country's interior ministry. The Islamic Revolutionary Guard Corps (IRGC) said it had targeted U.S. military facilities in Bahrain and radar systems in Oman as part of its latest retaliatory attacks.
U.S. Central Command said Sunday that American forces had successfully hit dozens of targets at multiple locations to degrade Tehran's ability to continue attacking vessels traversing the Strait of Hormuz.
American forces struck Iranian military air-defense systems, coastal radar sites, missile and drone capabilities and small boats using U.S. fighter aircraft, naval vessels, one-way attack aerial drones and one-way attack sea drones for the first time, Centcom said in a post on X.
The U.S. and Iran also issued conflicting accounts over whether the Strait of Hormuz remains open to shipping.
Located in the gulf between Oman and Iran, the Strait of Hormuz is recognized as one of the world's most critical energy choke points. The narrow waterway typically handles around 20% of the world's oil traffic.
Oil prices jumped on Monday morning as the latest cycle of attacks and counterattacks renewed fears of further disruption to flows through the Strait of Hormuz.
International benchmark Brent crude futures with September delivery advanced 2.8% to trade at $78.14 per barrel, paring gains from earlier in the session. U.S. West Texas Intermediate futures with August delivery, meanwhile, gained 2.5% to $73.24.
"The era of one-sided deals is OVER. We told you: keep your word or pay the price. Reality is knocking," Iran's parliament speaker Mohammad Bagher Ghalibaf said Sunday in a social media post.
Ghalibaf's comments were posted alongside an image of Article 5 of the U.S.-Iran memorandum of understanding, which relates to the reopening of the Strait of Hormuz.
U.S. President Donald Trump on Friday said the U.S. and Iran had agreed to continue peace talks, but said the ceasefire established in last month's peace deal had been scrapped.
Iran accuses U.S. of exerting pressure on Oman
Iran's Ministry of Foreign Affairs on Monday condemned U.S. attacks over the last 24 hours, saying the bombings represent a "serious threat to international peace and security," and have "rendered futile all efforts of the past few months to reduce tension and establish peace in the West Asian region."
Iran also accused the U.S. of exerting "overt and covert pressure" on Oman, thereby preventing a result from recent talks in Muscat for both countries to establish arrangements for managing the Strait of Hormuz and traffic routes.
Read more
A White House spokesperson was not immediately available to comment when contacted by CNBC on Monday morning.
Situated on the southeastern coast of the Arabian Peninsula, opposite Iran across the strait, Oman has been in joint talks with Iran on a new maritime security order, amid reports that the two countries could push to establish transit fees.
Analysts have told CNBC that Oman's ability to impose service fees sits within tight legal limits, given that the strait is governed by the principle of transit passage, which does not allow states to charge vessels for passing through. Service fees, however, may be one way to circumvent this.
— CNBC's Emma Graham contributed to this report.`,
    bodyJa: `イランは週末の米軍の新たな攻撃に対抗し、湾岸諸国の米軍基地への攻撃を開始し、戦略的に重要なホルムズ海峡を巡る対立が深まった。
今回のやりとりは、先月署名された暫定和平協定の将来にさらなる疑問を投げかけている。この協定は、ホルムズ海峡を再開し、60日間の交渉を経て戦争を終結させる道筋をつけることを目的としていた。
イランの国営メディアによると、イランの空爆はクウェート、バーレーン、ヨルダン、オマーン、カタールの米軍基地を標的にしており、米国による新たな爆撃に対する報復措置だと説明した。
ロイター通信が同国内務省の話として報じたところによると、月曜日、バーレーンで３回目のサイレンが鳴った。イスラム革命防衛隊（IRGC）は、最新の報復攻撃の一環としてバーレーンの米軍施設とオマーンのレーダーシステムを標的にしたと発表した。
米中央軍は日曜日、米軍がホルムズ海峡を通過する船舶を攻撃し続けるイランの能力を低下させるために、複数の場所で数十の目標を攻撃することに成功したと発表した。
セントコムはＸへの投稿で、米軍が初めて米国の戦闘機、海軍艦艇、一方向攻撃用航空無人機、一方向攻撃用海上無人機を使用して、イラン軍の防空システム、沿岸レーダーサイト、ミサイルと無人機の能力、小型船舶を攻撃したと述べた。
米国とイランはまた、ホルムズ海峡の船舶航行が引き続き可能かどうかについて矛盾した説明を発表した。
オマーンとイランの間の湾に位置するホルムズ海峡は、世界で最も重要なエネルギーのチョークポイントの一つとして認識されています。この狭い水路は通常、世界の石油輸送の約 20% を処理しています。
最近の一連の攻撃と反撃により、ホルムズ海峡を通る流れがさらに混乱するのではないかとの懸念が改めて高まり、月曜朝、原油価格が急騰した。
国際ベンチマークであるブレント原油先物（9月渡し）は2.8％上昇し、1バレル当たり78.14ドルで取引され、取引序盤からの上昇に匹敵した。一方、8月渡しの米国ウェスト・テキサス・インターミディエート先物は2.5％上昇し73.24ドルとなった。
「一方的な取引の時代は終わった。我々は言った、約束を守るか、代償を払うかだ。現実はノックしている」とイラン国会議長のモハマド・バーガー・ガリバフは日曜、ソーシャルメディアへの投稿で述べた。
ガリバフ氏のコメントは、ホルムズ海峡の再開に関する米国・イラン覚書の第５条の画像とともに掲載された。
ドナルド・トランプ米大統領は金曜日、米国とイランは和平交渉を継続することで合意したが、先月の和平合意で確立された停戦は破棄されたと述べた。
イラン、米国がオマーンに圧力をかけていると非難
イラン外務省は月曜、過去24時間にわたる米国の攻撃を非難し、今回の爆撃は「国際の平和と安全に対する深刻な脅威」であり、「西アジア地域の緊張を緩和し平和を確立するための過去数カ月のあらゆる努力が無駄になった」と述べた。
イランはまた、米国がオマーンに「公然かつ秘密の圧力」をかけ、それによってホルムズ海峡と交通路の管理に関する取り決めを確立するという最近のマスカットでの両国協議の成果を妨げていると非難した。
続きを読む
ホワイトハウス報道官は月曜日午前にCNBCから連絡を受けたが、すぐにはコメントできなかった。
アラビア半島の南東海岸に位置し、海峡を挟んでイランの反対側に位置するオマーンは、両国が通過料金の制定を推進する可能性があるとの報道のなか、新たな海洋安全保障令についてイランと共同協議を行っている。
アナリストらはCNBCに対し、この海峡は通過通航の原則が適用されており、国家が船舶の通過に対して料金を請求することを認めていないことを考慮すると、オマーンがサービス料を課す能力は厳しい法的制限の範囲内にあると語った。ただし、サービス料金はこれを回避する 1 つの方法である可能性があります。
— CNBC の Emma Graham がこのレポートに寄稿しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/13/us-iran-war-hormuz-oil-trump.html",
    publishedAt: "2026-07-13T09:00:32+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "tsmc-the-world-s-largest-contract-chipma-88245b7a",
    title: "TSMC, the world's largest contract chipmaker, reports 68% surge in June revenue",
    titleJa: "世界最大の受託チップメーカーであるTSMC、6月の売上高が68%増加したと報告",
    summaryJa: "台湾積体電路製造は今週後半の第2四半期決算発表に先立ち、月曜、6月の売上高が前年同期比67.9％増加したと報告した。2026年上半期のTSMCの総収益は2兆4000億新台湾ドル(749億9000万ドル)に達し、2025年の同時期と比較して35.6%増加した。TSMCは6月の収益が4,426億8000万台湾ドルと報告し、前月比6.2%増加した。",
    bodyOriginal: `Taiwan Semiconductor Manufacturing Co. reported a 67.9% year-on-year rise in its June sales on Monday, ahead of its second-quarter earnings release later this week.
For the first half of 2026, TSMC's total revenue reached 2.4 trillion new Taiwan dollars ($74.99 billion), representing a 35.6% increase compared to the same period in 2025. TSMC reported June revenue of NT$ 442.68 billion — a 6.2% increase from the previous month.
The Taiwanese chip giant's shares rose 1% Monday.
TSMC's numbers are "quite robust," said Sravan Kundojjala, an analyst at SemiAnalysis, noting that the chipmaker's second-quarter revenue exceeded its high-end guidance of $40.2 billion. The result came whereas historically June revenue has declined month-over-month over the past four years, he added.
"The demand supply situation in AI is still quite tight and TSMC is sold out on N3, which is targeted by all leading AI GPU and CPUs this year," he added.
The world's largest contract chipmaker manufactures semiconductors for a wide range of applications, spanning from smartphones to high-performance AI computing systems, with key clients including U.S. technology leaders such as AI darling Nvidia, Apple and Advanced Micro Devices.
"We estimate TSMC is on track to over $40 billion in AI chip revenue in 2026, or close to 25% of its total revenue," Kundojjala said.
TSMC plans to add two advanced chip packaging plants in the Chiayi Science Park in southern Taiwan, Reuters reported, citing remarks made by Taiwan's National Science and Technology Council Minister Wu Cheng-wen on Sunday. Wu noted that the site's first facility is already in mass production, with the second expected to begin shortly.
TSMC, which commands a 73% share of the global pure-foundry market — chips manufactured for clients — in the first quarter of 2026, according to data from Counterpoint Research, is set to report its second-quarter earnings on Thursday, July 16.`,
    bodyJa: `台湾積体電路製造は今週後半の第2四半期決算発表に先立ち、月曜、6月の売上高が前年同期比67.9％増加したと報告した。
2026年上半期のTSMCの総収益は2兆4000億新台湾ドル(749億9000万ドル)に達し、2025年の同時期と比較して35.6%増加した。TSMCは6月の収益が4,426億8000万台湾ドルと報告し、前月比6.2%増加した。
台湾の半導体大手の株価は月曜日に1％上昇した。
セミアナリシスのアナリスト、スラバン・クンドジャラ氏は、TSMCの数字は「非常に堅調だ」と述べ、同社の第2四半期の売上高が上限予想の402億ドルを上回ったと指摘した。過去 4 年間、歴史的に 6 月の収益が前月比で減少してきた中で、この結果がもたらされたと同氏は付け加えた。
「AI分野の需要供給状況は依然かなり逼迫しており、TSMCは今年、すべての主要なAI GPUとCPUのターゲットとなっているN3で完売状態だ」と同氏は付け加えた。
世界最大の受託チップメーカーは、スマートフォンから高性能 AI コンピューティング システムに至る幅広いアプリケーション向けの半導体を製造しており、主要顧客には AI の最愛の Nvidia、Apple、Advanced Micro Devices などの米国のテクノロジー リーダーが含まれます。
Kundojjala氏は、「TSMCのAIチップ収益は2026年に400億ドル以上、つまり総収益の25％近くに達すると推定している」と述べた。
台湾の国家科学技術委員会の呉承文大臣の日曜の発言を引用してロイター通信が報じたところによると、TSMCは台湾南部の嘉義サイエンスパークに2つの先端チップパッケージング工場を追加する計画だという。ウー氏は、この施設の最初の施設はすでに量産中であり、2番目の施設も間もなく開始される予定であると述べた。
Counterpoint Researchのデータによると、TSMCは、2026年第1四半期に世界のピュアファウンドリ市場（顧客向けに製造されるチップ）で73％のシェアを獲得しており、7月16日木曜日に第2四半期決算を発表する予定だ。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/13/tsmc-june-revenue-rises-percent-ahead-second-quarter.html",
    publishedAt: "2026-07-13T07:29:26+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "the-spacex-ipo-made-history-one-month-on-a6b166d1",
    title: "The SpaceX IPO made history. One month on has it lost momentum?",
    titleJa: "SpaceXのIPOは歴史を作りました。 1か月経って勢いがなくなったでしょうか？",
    summaryJa: "SpaceXのIPOは歴史を作りました。 1か月経って勢いがなくなったでしょうか？- 公開されました",
    bodyOriginal: `The SpaceX IPO made history. One month on has it lost momentum?
- Published
SpaceX investors have swung from celebration to apparent concern in its first month as a publicly traded company.
When shares in the firm, co-founded and led by Elon Musk, first became available for individuals to buy on the public stock market on 12 June, there was an investor frenzy.
Although the company had decided to price its shares at $135 each, the price immediately shot up to $150 that first day, climbing to $176, before closing at $160.95.
It solidified SpaceX as the largest initial public offering (IPO) of all time.
The following week, its shares went up even further, hitting an intraday high of $225, meaning it had surpassed Amazon and Microsoft in total market value.
"With Elon Musk, any company he touches gets people excited," Keith Snyder, analyst at investment research firm CFRA, said. "But this was also the first time people felt like they were able to invest in something that was being marketed as an AI play."
Willy Lee, an investor at Neosteller, which facilitates individual investors putting money into private companies, agreed that the excitement around the IPO was very much around artificial intelligence (AI).
"Everyone saw SpaceX as an AI story," he said.
SpaceX earlier this year acquired Musk's AI start-up xAI, recently renamed SpaceXAI, external and best known for the controversial chatbot Grok, and also started leasing data centre capacity to other tech companies.
But its main business is the manufacture and launch of rockets and telecommunications satellites called Starlink. When Starlink said it was cutting prices in the Memphis, Tennessee area amid local concerns over a massive data centre project, SpaceX shares fell on the day by 8%.
As the reality of how SpaceX currently makes money has seemed to come into clearer focus, the company's shares have started to sink.
Even amid a tumultuous couple of weeks for tech stocks, SpaceX has taken a particular hit.
When it was added to the Nasdaq100 index on 7 July, for instance, although the index closed down 1.7%, SpaceX fell 4.4%. An earlier addition to the FTSE Russell index had given the shares a slight boost.
SpaceX did not respond to a request for comment.
At the end of its first trading month, shares of SpaceX were selling at around $145 each, roughly 18% less than the high on its first day of trading, and 35% less than its peak so far.
'Definitely underwater'
Such a drop in price means that retail investors who purchased SpaceX stock during its first five days of trading are looking at a potential loss on their investment.
"If you bought around the first tick you're definitely underwater," Snyder said.
"It started to look a lot like a meme stock," Snyder added, pointing to the examples of GameStop and, more recently, Wendy's, external, where retail investors drive up a stock price through little more than excited online conversation.
He expects SpaceX to dip even further, to around $115 a share, based on the company's business performance. That would value the company at around $1.5 trillion.
Samuel Kerr, who heads analysis of equity capital markets for Mergermarket, noted that the swings in the share price so far will have had a different impact on different investors.
"If you're an IPO investor, you're ok," Kerr said, referring to groups of investors who were either able to buy SpaceX at the company's proposed listing price of $135, or who were insiders with pre-IPO equity in the company.
"If you bought in the first few days, you're not very happy right now," Kerr added.
Nevertheless, Musk has expressed little but enthusiasm for the business prospects of SpaceX.
After the company's public listing made him the world's first trillionaire, Musk said that SpaceX would pull in $1tn in yearly revenue by 2030.
Musk has also shown that he is ready and willing to use SpaceX shares, and their volatility, as a currency.
When the share price spiked on 16 June, SpaceX announced it was acquiring Cursor, a start-up that created an AI bot for writing computer code, in an all-stock deal valued at $60bn.
By doing so at that time, Musk essentially bought Cursor for free, given how much value SpaceX stock had gained at that exact time.
"It showed a level of market sophistication that almost no other issuer has," Kerr said of the Cursor acquisition.
SpaceX shares have drifted down since.
All eyes on earnings
Morgan Stanley, which was a lead banker on the SpaceX IPO, seems to think the dip will be an interlude.
It last week initiated coverage by its financial analysts and put a target share price, external on the company of $300, a 33% jump from its highest trading price to date.
SpaceX currently operates at a loss and last year it made $18bn in revenue, according to financial disclosures required for it to go public.
Musk's projected $1tn in revenue is roughly 55 times that.
At the moment, anticipation is building around the company's first public earnings report. SpaceX has not yet announced a date for this, but financial analysts are expecting it to happen in early August.
The company's earnings will likely coincide with the end of what's known as a "lock-up" period, when SpaceX employees who have been prohibited from selling shares in the firm that they received as part of their compensation will be able to shift them on to the open market.
More shares for sale, plus a potentially more detailed explanation of SpaceX's business and future growth could create further dramatic swings in price.
"If SpaceX can do all the things it says it will do, yes, investors are sitting on the most valuable company ever," Kerr said.
"But it's got a lot of work to do to get there."`,
    bodyJa: `SpaceXのIPOは歴史を作りました。 1か月経って勢いがなくなったでしょうか？
- 公開されました
スペースXの投資家らは、上場企業としての最初の1カ月で祝賀ムードから明らかな懸念へと揺れ動いた。
イーロン・マスク氏が共同設立し率いていた同社の株式が6月12日に初めて公開株式市場で個人が購入できるようになったとき、投資家は熱狂した。
同社は自社株の価格を1株当たり135ドルに決定していたが、その初日に株価はすぐに150ドルまで急騰し、176ドルまで上昇し、160.95ドルで取引を終えた。
これによりSpaceXは史上最大の新規株式公開（IPO）としての地位を確立した。
翌週、同社の株価はさらに上昇し、日中最高値の225ドルを記録した。これは、時価総額でアマゾンとマイクロソフトを上回ったことを意味する。
投資調査会社CFRAのアナリスト、キース・スナイダー氏は、「イーロン・マスク氏の場合、彼が関わる企業はすべて人々を興奮させる」と語る。 「しかし、人々がAI劇として売り出されたものに投資できると感じたのもこれが初めてだった。」
個人投資家が非公開企業に資金を投入できるように支援するネオステラーの投資家ウィリー・リー氏も、IPOの興奮は人工知能（AI）に大きく寄せられていたことに同意した。
「誰もがSpaceXをAIの物語として見ていた」と彼は語った。
SpaceXは今年初めにマスク氏のAI新興企業xAI（最近社名をSpaceXAIに変更した社外）を買収し、物議を醸したチャットボットGrokで最もよく知られ、データセンター容量の他のハイテク企業へのリースも開始した。
しかし、同社の主な事業はスターリンクと呼ばれるロケットと通信衛星の製造と打ち上げだ。大規模なデータセンタープロジェクトに対する地元の懸念を受けてスターリンクがテネシー州メンフィス地域で価格を引き下げると発表すると、スペースX株はその日8％下落した。
SpaceXが現在どのようにして利益を上げているのかという現実がより明確になってきたように見えるにつれ、同社の株価は下がり始めた。
ハイテク株にとってここ数週間の激動の中でも、スペースXは特に打撃を受けている。
例えば、7月7日に同社がナスダック100指数に追加されたとき、指数は1.7％下落したにもかかわらず、スペースXは4.4％下落した。 FTSEラッセル指数への以前の追加は株価をわずかに押し上げた。
スペースXはコメント要請に応じなかった。
最初の取引月の終わり時点で、スペースXの株価は1株あたり約145ドルで販売されており、取引初日の高値より約18％安、これまでのピークより35％安となっている。
「間違いなく水中にいる」
このような価格下落は、取引開始から最初の5日間にスペースX株を購入した個人投資家が投資損失の可能性を検討していることを意味する。
「最初のティック付近で買ったとしたら、間違いなく水中にいるだろう」とスナイダー氏は言う。
「ミーム株のように見え始めた」とスナイダー氏は付け加え、ゲームストップや最近では社外のウェンディーズの例を挙げ、個人投資家がオンラインでの興奮した会話以上に株価をつり上げている。
同氏は、同社の業績に基づいてスペースXの株価がさらに下がり、1株あたり115ドル程度になると予想している。そうすれば、同社の価値は約1兆5000億ドルとなる。
マージャーマーケットの株式資本市場分析責任者であるサミュエル・カー氏は、これまでの株価の変動は投資家によって異なる影響を与えるだろうと指摘した。
カー氏は、スペースX社の提示価格135ドルでスペースX社を購入できた投資家グループ、またはIPO前の同社株式を保有していたインサイダーグループを指して、「あなたがIPO投資家なら大丈夫だ」と語った。
「最初の数日で購入した人は、今はあまり満足していないでしょう」とカー氏は付け加えた。
それにもかかわらず、マスク氏はスペースXの事業見通しについて熱意以外はほとんど表明していない。
マスク氏は、同社の上場により世界初の大富豪となった後、スペースXは2030年までに年間1兆ドルの収益を得るだろうと述べた。
マスク氏はまた、スペースX株とそのボラティリティを通貨として利用する用意があり、喜んで利用する用意があることも示した。
6月16日に株価が急騰したとき、スペースXはコンピューターコードを書くためのAIボットを開発した新興企業カーソルを600億ドル相当の全株式取引で買収すると発表した。
その時点でSpaceX株がどれだけの価値を得ていたかを考えると、マスク氏はその時点でCursorを実質的に無料で購入したことになる。
カー氏はカーサー社の買収について、「他の発行体にはほぼないレベルの市場の洗練性を示した」と述べた。
それ以来、スペースX株は下落している。
収益に注目
スペースXのIPOでリードバンカーだったモルガン・スタンレーは、今回の下落はつなぎになると考えているようだ。
同社は先週、財務アナリストらによる取材を開始し、社外目標株価をこれまでの最高値から33％上昇する300ドルに設定した。
上場に必要な財務情報開示によると、スペースXは現在赤字で運営されており、昨年は180億ドルの収益をあげた。
マスク氏の予想売上高1兆ドルはその約55倍だ。
現時点では、同社の初の公開決算報告に期待が高まっている。スペースXはまだその日程を発表していないが、金融アナリストらは8月初旬に開催されると予想している。
同社の決算は、報酬の一部として受け取った同社株の売却を禁止されていたスペースX従業員が公開市場に移行できるようになる、いわゆる「ロックアップ」期間の終了と同時となる可能性が高い。
より多くの株式が売り出され、さらにスペースXの事業と将来の成長についてより詳細な説明が行われる可能性があれば、さらに劇的な価格変動が生じる可能性がある。
「スペースXが言うことをすべて実行できるなら、そう、投資家は史上最も価値のある企業に注目していることになる」とカー​​氏は語った。
「しかし、そこに到達するにはやるべきことがたくさんあります。」`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c3wyj6e4210o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-13T07:19:57+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/2ab1/live/ee081470-7c79-11f1-b976-0b9c15b0ccfc.png",
    readTime: 6,
  },
  {
    id: "us-and-iran-trade-fire-as-tensions-rise-4645adbf",
    title: "US and Iran trade fire as tensions rise over Strait of Hormuz",
    titleJa: "ホルムズ海峡で緊張高まる米国とイランの交戦",
    summaryJa: "ホルムズ海峡で緊張高まる米国とイランの交戦- 公開されました",
    bodyOriginal: `US and Iran trade fire as tensions rise over Strait of Hormuz
- Published
The US launched a new attack on Iran on Sunday evening, continuing days of strikes between the two countries. Iranian state media reported that the strikes killed one person in southwestern Iran, while four were injured.
Within hours of the fresh US strikes, Iran's Islamic Revolutionary Guard Corps (IRGC) said it had struck US military bases in Kuwait, Jordan and Bahrain.
The escalating attacks, which cast doubt over the future of the interim US-Iran agreement signed in June, come amid conflicting claims over whether the Strait of Hormuz is open.
Iran says it has closed the key waterway until further notice, while the US insists it is open.
On Sunday evening, Centcom announced another round of strikes against Iran, which it said started at 17:00 ET (22:00 BST).
Dozens of Iranian military targets, including air-defence systems, coastal radar sites, and missile and drone capabilities were struck, it said later.
US forces were "prepared to ensure that freedom of navigation remains available to commercial shipping despite Iran's continued unwarranted aggression, harassment, threats, and arbitrary declarations," Centcom said.
Minutes before the initial Centcom announcement, Iranian state TV reported explosions in Sirik, Qeshm, Bandar Abbas and Jask.
"Following the attack of the American enemy on Monday morning... one person was martyred and four others were injured," IRNA reported, citing the deputy governor for security and law enforcement in Khuzestan province, Valiollah Hayati.
Oil prices jumped on Monday in Asia. Brent crude was up by 4.3% at $79.26 (£59.22) a barrel, while US-traded oil also rose by 4.3% to $74.50.
Energy prices on global wholesale markets have swung wildly in recent months as traders reacted to developments in the conflict.
Shortly after the US and Israel attacked Iran on 28 February Tehran effectively closed the Strait of Hormuz, through which around 20% of the world's oil and liquefied natural gas (LNG) usually passes.
Despite the latest gains, prices are well below the more than $120 a barrel mark Brent reached at the end of April.
The new wave of US strikes on Sunday evening, came after US forces hit 140 Iranian military targets, Centcom said on Saturday evening.
Iran's Islamic Revolutionary Guard Corps (IRGC) responded to those strikes with wide-ranging attacks on US bases and allies across the region, marking an escalation in the scale of hostilities.
Among those targeted by Iran were Qatar, a mediator in ceasefire talks which had not been attacked since April, and the UAE, which had not been attacked since May. The BBC has approached US Central Command (Centcom) for comment on an attack in Jordan.
The renewed fire has put in jeopardy an interim ceasefire agreement signed last month, which aimed to reopen the strait and eventually bring a permanent end to the conflict.
Earlier this week, US President Donald Trump declared the Iranian attacks meant the ceasefire was over, while Iran's Foreign Minister Abbas Araghchi accused the US of violating the deal.
However, Trump said talks would still continue and mediators were trying to revive the process.
On Sunday, US Central Command insisted the Strait was open, warning the US military was in position to make sure it stayed free-flowing.
Additional reporting by Goncheh Habibiazad.
Related topics
- Published11 hours ago
- Published18 June`,
    bodyJa: `ホルムズ海峡で緊張高まる米国とイランの交戦
- 公開されました
米国は日曜夜にイランへの新たな攻撃を開始し、両国間の攻撃は数日間続いた。イラン国営メディアは、この空爆によりイラン南西部で１人が死亡、４人が負傷したと報じた。
米国の新たな攻撃から数時間以内に、イランイスラム革命防衛隊（IRGC）はクウェート、ヨルダン、バーレーンの米軍基地を攻撃したと発表した。
6月に署名された米国とイランの暫定合意の将来に疑問を投げかける攻撃の激化は、ホルムズ海峡が開いているかどうかをめぐる主張の対立の中で起こっている。
イランは追って通知があるまで主要水路を閉鎖していると主張しているが、米国は開いていると主張している。
日曜日の夕方、セントコムはイランに対する追加攻撃を発表し、東部時間17時（BST22時）に開始したと発表した。
その後、防空システム、沿岸レーダーサイト、ミサイルや無人機の能力を含む数十のイランの軍事目標が攻撃されたと発表した。
セントコムは、米軍は「イランの不当な侵略、嫌がらせ、脅迫、恣意的な宣言が続いているにもかかわらず、商船の航行の自由を確保する準備ができていた」と述べた。
最初のセントコムの発表の数分前に、イラン国営テレビはシリク、ケシュム、バンダル・アッバス、ジャスクで爆発があったと報じた。
ＩＲＮＡはフゼスターン州の治安・法執行担当副知事ヴァリオラ・ハヤティ氏の話として、「月曜朝の米敵の攻撃を受けて…１人が殉教し、他の４人が負傷した」と報じた。
月曜日、アジアでは原油価格が急騰した。ブレント原油は4.3％上昇して1バレルあたり79.26ドル（59.22ポンド）、米国で取引される原油も4.3％上昇して74.50ドルとなった。
トレーダーらが紛争の展開に反応したため、世界の卸売市場のエネルギー価格はここ数カ月で大きく変動した。
2月28日に米国とイスラエルがイランを攻撃した直後、イランは通常、世界の石油と液化天然ガス（LNG）の約20％が通過するホルムズ海峡を事実上封鎖した。
最近の上昇にもかかわらず、価格はブレントが4月末に達した1バレル当たり120ドルを超える水準を大きく下回っている。
日曜夕方の米国の新たな攻撃の波は、米軍がイランの軍事目標140カ所を攻撃した後に起こったとセントコムは土曜夜に発表した。
イランのイスラム革命防衛隊（IRGC）はこれらの攻撃に応じて、地域全体の米軍基地と同盟国に対する広範な攻撃を行い、敵対行為の規模の拡大を示した。
イランの標的となった国の中には、停戦交渉の仲介国で4月以来攻撃されていないカタールや、5月以来攻撃されていないUAEも含まれていた。 BBCはヨルダンでの攻撃に関するコメントを求めて米中央軍（セントコム）に問い合わせた。
新たな火災により、海峡の再開と最終的に紛争の恒久的な終結を目指す先月署名された暫定停戦合意が危うくなった。
今週初め、ドナルド・トランプ米大統領はイランの攻撃は停戦の終了を意味すると宣言し、イランのアッバス・アラグチ外相は米国が協定に違反していると非難した。
しかし、トランプ大統領は、交渉はまだ継続しており、調停者はプロセスを復活させようとしていると述べた。
日曜日、米中央軍は海峡は開いていると主張し、米軍は海峡の自由な流れを確保する立場にあると警告した。
Goncheh Habibiazad による追加レポート。
関連トピック
- 11 時間前に公開
- 6 月 18 日公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cevlr112pmgo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-13T05:00:46+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/c03f/live/5cc84d20-7e6a-11f1-bee8-53ce494e1abc.jpg",
    readTime: 4,
  },
  {
    id: "sk-hynix-shares-slide-12-in-seoul-after-b599c41c",
    title: "SK Hynix shares slide 12% in Seoul after stellar Nasdaq debut",
    titleJa: "SKハイニックス株、ナスダック市場での好調なデビュー後、ソウル市場で12％下落",
    summaryJa: "SKハイニックス株は、投資家が利益を確保し、人工知能メモリチップに対する需要の急増が株価の急騰を正当化するかどうかを検討する中、金曜の同社のナスダック市場での好調なデビュー後、月曜ソウル市場で12％以上下落した。韓国のメモリチップメーカーである同社は、AI関連の半導体株に対する米国の投資家の強い意欲を反映し、金曜日のウォール街デビューで13%急騰した。",
    bodyOriginal: `SK Hynix shares tumbled more than 12% in Seoul on Monday after the chipmaker's strong Nasdaq debut Friday, as investors locked in profits and weighed whether surging demand for artificial intelligence memory chips justified the stock's sharp gains.
The South Korean memory-chip maker had jumped 13% in its Wall Street debut on Friday, reflecting strong appetite from U.S. investors for AI-linked semiconductor stocks.
The decline on Monday reflects a mix of profit-taking and uncertainty over how the U.S.-listed shares should be valued relative to the Korean stock, with analysts saying the ADR debut has effectively created a new benchmark for investors to assess the company's valuation.
"Everybody's really confused about what's going to happen to the memory demand and where the fair price is," Daniel Yoo, global strategist at Yuanta Securities, said on "Squawk Box Asia." "It's all about how much demand is there versus how much supply is going to come in ... [and] what kind of multiple you will be getting."
Taiwan Semiconductor Manufacturing Co.'s U.S.-listed ADRs trade at a roughly 13% to 14% premium to its domestic shares, Yoo pointed out, adding that SK Hynix's sharp move has created a discount rate of more than 20% between its U.S. and Korean listings.
Yoo said the sell-off was also driven by the mechanics of the offering, calling it "additional share issuance" that increased the supply of stock available to investors. "The market is taking this as a correctional period for SK Hynix domestically."
The pullback was likely to prove temporary as structural AI demand continues to outpace supply, he said, adding that shares will likely move "in the right direction" over the next six to 12 months despite near-term volatility.
Phillip Wool, chief research officer at Rayliant Global Advisors, also downplayed the recent weakness in Asian AI hardware names, describing it as a portfolio rebalancing exercise rather than a deterioration in the industry's outlook.
"I think it's mostly risk management," Wool said, noting that many investors had accumulated outsized positions in South Korean and Taiwanese AI chipmakers after their strong gains. "Prudent risk management suggests you have to scale those back."
He added that the selling "doesn't really speak to any sort of reduction in the excitement about AI hardware." Wool said the AI investment was broadening beyond semiconductors, but that should continue to benefit memory suppliers such as SK Hynix.`,
    bodyJa: `SKハイニックス株は、投資家が利益を確保し、人工知能メモリチップに対する需要の急増が株価の急騰を正当化するかどうかを検討する中、金曜の同社のナスダック市場での好調なデビュー後、月曜ソウル市場で12％以上下落した。
韓国のメモリチップメーカーである同社は、AI関連の半導体株に対する米国の投資家の強い意欲を反映し、金曜日のウォール街デビューで13%急騰した。
月曜日の下落は利益確定売りと、韓国株と比べて米国上場株をどのように評価すべきかという不確実性が重なったことを反映しており、アナリストらは、ADRデビューが事実上、投資家にとって同社の評価を評価するための新たなベンチマークとなったと述べている。
ユアンタ証券のグローバルストラテジスト、ダニエル・ユー氏は「メモリ需要がどうなるのか、適正価格はどこなのかについて、誰もが本当に混乱している」と「Squawk Box Asia」で語った。 「重要なのは、どれだけの需要があるか、それに対してどのくらいの供給が入るか、そしてどのような倍率になるかです。」
台湾積体電路製造の米国上場ADRは国内株に対して約13～14%のプレミアムで取引されているとユ氏は指摘し、SKハイニックスの急激な動きにより米国と韓国の上場の間に20%以上の割引率が生じたと付け加えた。
ユ氏は、売り出しの仕組みも売り出しの原因となったと述べ、投資家が利用できる株式の供給を増やす「追加株式発行」と呼んだ。 「市場はこれを国内のSKハイニックスの調整期間と受け止めている。」
同氏は、AIの構造的な需要が供給を上回り続けているため、反落は一時的なものに終わる可能性が高いと述べ、短期的なボラティリティにもかかわらず、株価は今後6～12カ月で「正しい方向に」動く可能性が高いと付け加えた。
レイリアント・グローバル・アドバイザーズの首席研究責任者フィリップ・ウール氏も、最近のアジアのAIハードウェア銘柄の低迷を軽視し、これは業界の見通しの悪化ではなく、ポートフォリオのバランス調整の一環であると説明した。
ウール氏は「主にリスク管理だと思う」と述べ、多くの投資家が韓国や台湾のAIチップメーカーの大幅な上昇を受けて巨額のポジションを蓄積していると指摘した。 「慎重なリスク管理は、それらを縮小する必要があることを示唆しています。」
同氏は、この売却は「AIハードウェアに対する興奮が冷めるわけではない」と付け加えた。ウール氏は、AIへの投資は半導体を超えて拡大しているが、SKハイニックスなどのメモリサプライヤーには引き続き恩恵をもたらすだろうと述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/13/sk-hynix-shares-fall-after-stellar-nasdaq-debut.html",
    publishedAt: "2026-07-13T03:33:59+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 3,
  },
  {
    id: "oil-prices-rise-stock-futures-dip-after-e1c578a9",
    title: "Oil prices rise, stock futures dip after latest flare-up of strikes between U.S. and Iran",
    titleJa: "米国とイランの間の最近のストライキ激化を受けて、原油価格は上昇、株価先物は下落",
    summaryJa: "米国とイランが週末にホルムズ海峡周辺での報復攻撃を続けたことを受け、日曜日には原油価格が上昇し、米国の株価指数先物が下落した。",
    bodyOriginal: `Oil prices rose and U.S. stock-index futures slipped on Sunday, after the U.S. and Iran continued their tit-for-tat attacks around the Strait of Hormuz over the weekend.`,
    bodyJa: `米国とイランが週末にホルムズ海峡周辺での報復攻撃を続けたことを受け、日曜日には原油価格が上昇し、米国の株価指数先物が下落した。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/oil-prices-rise-stock-futures-dip-after-latest-flare-up-of-strikes-between-u-s-and-iran-fef7f856?mod=mw_rss_topstories",
    publishedAt: "2026-07-13T03:03:00+00:00",
    category: "エネルギー",
    imageUrl: "https://images.mktw.net/im-00964245",
    readTime: 2,
  },
  {
    id: "mcconnell-provides-health-update-after-l-0394a365",
    title: "McConnell provides health update after long unexplained absence; says he suffered fall, pneumonia",
    titleJa: "マコーネル氏は、原因不明の長い不在の後、健康状態の最新情報を提供します。秋と肺炎を患ったと言う",
    summaryJa: "ケンタッキー州、共和党のミッチ・マコネル上院議員は日曜日、転倒により意識を失い病院に運ばれ、数週間の欠席に至ったと述べた。6月14日に入院して以来上院を欠席している84歳のマコーネル氏も、自身の写真と自身の状態を説明する声明を提供した。ここ数週間、特に自宅で心停止が発生し救急隊が対応したと報じられて以来、彼の不在と入院についての憶測が激しくなっている。",
    bodyOriginal: `Sen. Mitch McConnell, R-Ky., on Sunday said he suffered a fall that rendered him unconscious and landed him in the hospital, leading to a multi-week absence.
McConnell, 84 — who has been absent from the Senate since he was hospitalized on June 14 — also provided a photo of himself with a statement explaining his condition. His absence and hospitalization have been speculated on intensely in recent weeks, especially after it was reported that emergency services responded to a case of cardiac arrest at his home.
McConnell, who is a polio survivor, sought to put the speculation over his health to rest.
"[L]ast month, I took a fall which landed me in the hospital," McConnell said in the statement to his constituents. "My doctors have confirmed that I didn't break any bones or suffer a concussion. I didn't have a heart attack or a stroke. I don't have any tumors or hemorrhages. But I was briefly unconscious and was taken to the hospital."
The former Senate GOP leader said he also "had to deal with a mild case of pneumonia" while in the hospital. In a photo released with his statement, McConnell is holding a copy of the Sports section of the July 12 edition of The Washington Post.
McConnell is the longest-serving party leader in Senate history. He stepped down from the leader post at the beginning of this Congress, handing the reins to Sen. John Thune, R-S.D.
Last week, Kentucky Gov. Andy Beshear requested that McConnell provide an update on his health and fitness to serve after the senator's office provided sparse updates on his condition throughout his hospitalization, leaving questions about his condition swirling.
McConnell said in the statement that he remains fit to serve, but will not return to the Senate yet.
"As much as it frustrates me, this process takes time. And on the advice of my doctors, I won't be able to return to the Senate floor to vote quite yet," he said. "But rest assured that, in the meantime, I'm not taking a break from the Senate business that matters to you. I've been working closely with my legislative staff on current issues, and with my Kentucky team who help me provide timely constituent services across our Commonwealth."
McConnell will retire at the end of his term next year.`,
    bodyJa: `ケンタッキー州、共和党のミッチ・マコネル上院議員は日曜日、転倒により意識を失い病院に運ばれ、数週間の欠席に至ったと述べた。
6月14日に入院して以来上院を欠席している84歳のマコーネル氏も、自身の写真と自身の状態を説明する声明を提供した。ここ数週間、特に自宅で心停止が発生し救急隊が対応したと報じられて以来、彼の不在と入院についての憶測が激しくなっている。
ポリオ生存者であるマコーネル氏は、自分の健康に対する憶測を鎮めようと努めた。
マコネル氏は有権者に向けた声明で「先月、転倒して病院に入院した」と述べた。 「医師たちは、私が骨折や脳震盪を起こしていないことを確認しました。心臓発作や脳卒中も起こしていません。腫瘍や出血もありません。しかし、一時的に意識を失い、病院に運ばれました。」
元上院共和党指導者は、入院中に「軽度の肺炎に対処しなければならなかった」とも語った。声明とともに公開された写真の中で、マコネル氏はワシントン・ポスト紙7月12日号のスポーツ欄のコピーを手に持っている。
マコーネル氏は上院史上最も長く党首を務めた人物である。彼は今議会の初めに党首のポストを降り、共和党のジョン・チューン上院議員に手綱を引き渡した。
先週、ケンタッキー州のアンディ・ベシェア知事は、上院議員事務所が入院期間中のマコネル氏の病状に関する最新情報をほとんど提供せず、マコネル氏の病状についての疑問が渦巻いていることを受けて、マコネル氏に対し、自身の健康状態と就任に向けた適性に関する最新情報を提供するよう要請した。
マコーネル氏は声明の中で、自身は引き続き職務に適任だが、まだ上院に戻るつもりはないと述べた。
「私はイライラしているのですが、このプロセスには時間がかかります。そして医師のアドバイスにより、私はまだ上院議場に戻って投票することはできないでしょう」と彼は語った。 「しかし、その間、私はあなたたちにとって重要な上院の仕事を休むわけではないのでご安心ください。私は現在の問題について立法スタッフと緊密に協力しており、連邦全体でタイムリーな有権者サービスを提供するのを手伝ってくれるケンタッキー州のチームと緊密に協力しています。」
マコーネル氏は来年の任期満了で退任する。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/12/mcconnell-provides-health-update-after-long-unexplained-absence.html",
    publishedAt: "2026-07-13T01:25:20+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "10-years-of-pok-mon-go-and-the-millions-53742d0f",
    title: "10 years of Pokémon Go and the millions still trying to catch 'em all",
    titleJa: "Pokémon GO が誕生して 10 年、何百万人もの人々が今もポケモン Go をすべて捕まえようとしています",
    summaryJa: "Pokémon GO が誕生して 10 年、何百万人もの人々が今もポケモン Go をすべて捕まえようとしています- 公開されました",
    bodyOriginal: `10 years of Pokémon Go and the millions still trying to catch 'em all
- Published
Pokémon fans have spent the past three decades trying to catch 'em all - and since the beginning this hunt has often taken place outside the home.
The popular series started out on Nintendo's portable Game Boy console in 1996, and has found modern success on people's phones.
The mobile app Pokémon Go, which is now celebrating its 10th anniversary, uses GPS and augmented reality to let players find and catch virtual monsters in real-world locations.
It has been downloaded more than a billion times across iOS and Android devices, with millions still logging on each day.
And Michael Steranka, vice president of product at the game's publisher Scopely, says the Pokémon Go experience has always been about bringing people together.
"Pokémon Go will always start with community - we think we're only scratching the surface here," he said.
"We often receive wedding invites from players who met through Pokémon Go... because it's been such an integral part of their relationship."
It may seem a surprising sentiment to have for a game and its studio.
But Pokémon Go's connection with its players appears to have prevailed, as hundreds of gamers gathered in New York's Times Square on Thursday to battle a giant Mewtwo - a reference to the game's original trailer published over a decade ago, external.
When it was released in 2016, Pokémon Go quickly became one of the biggest mobile game launches in history.
The technology overlays digital creatures onto a live view of the real world through a smartphone's camera, making it appear as though they're standing in front of the player.
It sparked a craze where people flocked to places like parks, waterfronts and shopping malls in the hope of catching Pokémon.
"By allowing you to take your mobile phone out into the world to discover virtual creatures, Pokémon Go helped realise the millennial dream of becoming a Pokémon Trainer," said Matthew Reynolds, editor of Pokémon news website One More Catch, external.
The game's popularity has endured. It has hosted major live events in more than 60 countries, averaging more than 400,000 attendees a year since the first Go Fest in 2017.
'Like a music festival'
Scopely estimates players have explored over 100 billion kilometres while playing Pokémon Go - roughly 334 round trips between the Earth and the Sun.
UK content creator j0beats runs one of Twitch's biggest channels dedicated to the game and regularly travels to events like the one in New York to meet fellow players.
"People always think it's crazy that you travel all over just to catch some pixels," she laughs.
"But it's not just about that. When you go to these big events, you're there for the people and for the energy of it.
"It's like a music festival - you could just stay at home and just listen to the music, or you could go out there and you could listen live and appreciate it with other people. It's the same sort of concept."
But the streamer says her fondest memory of the game is a little closer to home.
In 2025, Pokémon Go's Wild Area - one of its events - came to South Yorkshire.
"It was the only European event and it was hosted in Doncaster, which is sort of just around the corner from me," she said.
"So it was really exciting to collaborate with the community ambassadors there and help them host the event."
For some players, the game has also had an unexpected impact on their mental health.
Austin lives in Maine in the US and has been playing since 2017.
He told me before playing Pokémon Go it was "nearly impossible" to motivate himself to do anything, as he was feeling very anxious and depressed about life.
"When I went to my first raid meetup it was like a warm blanket," he said.
"As I held my phone and walked to the group of strangers in the park, I saw them look at me, and for the first time I wasn't nervous meeting this new group of people, I was actually excited and happy."
"From that day on that little voice telling me to stay in bed was put on mute."
Over the years, the game has sometimes been a victim of its own hype and global appeal.
Police and safety groups once warned players not to become so engrossed in catching the next Psyduck that they got lost or put themselves in danger.
The game's immense popularity sometimes also meant "servers buckled under the strain", said Reynolds, meaning connectivity problems were "rife for some time".
And while the pandemic was seen as a boon for many in the video game industry, Steranka says the initial strict lockdowns "impacted Pokémon Go probably more than any other game out there".
The game later bounced back as restrictions eased and people once again looked for reasons to get outside.
Then in 2025, some fans questioned how the game's future might change when Scopely - which is itself owned by Saudi Arabia's Public Investment Fund, bought developer Niantic for $3.5bn (then £2.7bn).
"My hope is that we prove to players over time that this is definitively a good thing for the game and the community," Steranka says.
Looking ahead, Steranka says the focus for the game remains on community, memories and creating experiences families can share.
"No matter where I was and what phase of my life, Pokémon Go has been there for me," he says.
"It meets people where they are, at whatever phase of life they're in."
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.
Related topics
- Published17 April
- Published11 May
- Published27 February`,
    bodyJa: `Pokémon GO が誕生して 10 年、何百万人もの人々が今もポケモン Go をすべて捕まえようとしています
- 公開されました
ポケモンファンは過去 30 年間、すべてのポケモンを捕まえようと努力してきましたが、当初からこの狩りは家の外で行われることが多かったです。
この人気シリーズは 1996 年に任天堂のポータブル ゲームボーイ コンソールで始まり、人々の携帯電話でも現代的な成功を収めました。
現在 10 周年を迎えているモバイル アプリ Pokémon Go は、GPS と拡張現実を使用して、プレイヤーが現実世界の場所で仮想モンスターを見つけて捕まえることができます。
iOS および Android デバイス全体で 10 億回以上ダウンロードされており、今でも毎日数百万人がログインしています。
そして、ゲームの発売元であるスコープリー社の製品担当副社長であるマイケル・ステランカ氏は、ポケモンGOの体験は常に人々を結び付けるものであったと語る。
「Pokémon Goは常にコミュニティから始まります。私たちはここで表面をなぞっただけだと考えています」と彼は語った。
「Pokémon GO を通じて知り合ったプレイヤーから結婚式の招待状をよく受け取ります。ポケモン GO は彼らの関係にとって非常に重要な部分だからです。」
ゲームとそのスタジオに対してこのような感情を持つのは驚くべきことのように思えるかもしれません。
しかし、Pokémon Goとプレイヤーとのつながりは広まったようで、木曜日には数百人のゲーマーが巨大なミュウツーと戦うためにニューヨークのタイムズスクエアに集まった（これは10年以上前に外部で公開されたゲームのオリジナルトレーラーへの言及である）。
Pokémon Go は 2016 年にリリースされると、すぐに史上最大のモバイル ゲームのローンチの 1 つになりました。
この技術は、スマートフォンのカメラを介して現実世界のライブビューにデジタル生物を重ね合わせ、あたかもプレイヤーの前に立っているように見せます。
それはポケモンを捕まえることを期待して人々が公園、水辺、ショッピングモールなどの場所に群がる熱狂を引き起こした。
「携帯電話を世界に持ち出して仮想の生き物を発見できるようにしたことで、Pokémon GO はポケモントレーナーになるという千年の夢の実現に役立ちました」と、ポケモン ニュース ウェブサイト One More Catch の編集者であるマシュー レイノルズ氏 (社外) は述べています。
ゲームの人気は根強く残っています。 2017 年の最初の Go Fest 以来、60 か国以上で大規模なライブ イベントを主催し、年間平均 40 万人以上の参加者を集めています。
「音楽祭みたい」
Scopely は、プレイヤーが Pokémon Go をプレイ中に探検した距離は 1,000 億キロメートル以上、つまり地球と太陽をおよそ 334 往復したと推定しています。
英国のコンテンツ クリエイターである j0beats は、ゲーム専用の Twitch 最大のチャンネルの 1 つを運営しており、ニューヨークで開催されるようなイベントに定期的に出張して仲間のプレイヤーと交流しています。
「ピクセルをキャッチするためだけにあちこちを旅するなんて、みんな頭がおかしいといつも思われます」と彼女は笑います。
「しかし、それだけではありません。これらの大きなイベントに行くとき、あなたは人々とそのエネルギーのためにそこにいるのです。
「それは音楽フェスティバルのようなものです。家にいてただ音楽を聴くこともできますし、外に出て生で聴いて他の人と一緒に鑑賞することもできます。それと同じようなコンセプトですね。」
しかし、ストリーマーは、ゲームに関する彼女の最も楽しい思い出は、もう少し身近なところにあると語ります。
2025 年、Pokémon GO のイベントの 1 つであるワイルド エリアがサウス ヨークシャーにやって来ました。
「これはヨーロッパで唯一のイベントで、ドンカスターで開催されましたが、それは私からすぐ近くにあります」と彼女は言いました。
「ですから、現地のコミュニティアンバサダーと協力してイベントの主催を手伝うことができて、本当にエキサイティングでした。」
一部のプレイヤーにとって、このゲームは精神的健康に予期せぬ影響を与えました。
オースティンは米国メイン州に住んでおり、2017年からプレーしている。
彼は、Pokémon GO をプレイする前、人生に対して非常に不安と憂鬱を感じていたため、何かをする動機を自分に与えることは「ほぼ不可能」だったと私に語った。
「初めてレイド交流会に行ったときは、まるで暖かい毛布のようでした」と彼は語った。
「携帯電話を持って公園にいる見知らぬ人たちのグループに歩いていくと、彼らが私を見ているのが見えました。初めてこの新しい人々のグループに会うことに緊張しなくなり、実際に興奮していて幸せでした。」
「その日から、ベッドにいてくださいという小さな声は聞こえなくなりました。」
長年にわたり、このゲームは時として、その誇大広告や世界的な魅力の犠牲者となってきました。
警察や安全団体はかつて、次のサイダックを捕まえるのに夢中になりすぎて道に迷ったり、危険にさらされないようプレイヤーに警告したことがある。
レイノルズ氏によると、このゲームの絶大な人気により、「サーバーが過負荷で座屈」することもあり、接続の問題が「しばらくの間蔓延」していたことを意味するという。
そして、パンデミックはビデオゲーム業界の多くの人々にとって恩恵と見なされていたが、ステランカ氏は、最初の厳格なロックダウンが「おそらく他のどのゲームよりもポケモンGOに影響を与えた」と述べた。
その後、制限が緩和され、人々が再び外出する理由を探すにつれて、ゲームは回復しました。
そして2025年、サウジアラビアの公共投資基金が所有するスコープリーが開発会社ナイアンティックを35億ドル（当時27億ポンド）で買収したことで、一部のファンはゲームの将来がどう変わるのか疑問を抱いた。
「私の願いは、これがゲームとコミュニティにとって決定的に良いことであることを、時間をかけてプレイヤーに証明することです」とステランカ氏は言います。
今後を見据えて、ステランカ氏は、ゲームの焦点は引き続きコミュニティ、思い出、家族が共有できる体験の創造にあると述べています。
「私がどこにいても、人生のどの段階にいても、Pokémon GO は私にとって常にそこにありました」と彼は言います。
「人生のどの段階にいても、その人がいる場所で人々と出会います。」
Tech Decoded ニュースレターに登録して、世界のトップのテクノロジー ストーリーやトレンドをフォローしてください。英国外ですか？ここからサインアップしてください。
関連トピック
- 4 月 17 日公開
- 5 月 11 日公開
- 2 月 27 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cevlwk4nrm7o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-13T00:07:00+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/c312/live/88ec5440-7be6-11f1-9010-bd4e2d0a26e0.png",
    readTime: 7,
  },
  {
    id: "new-era-for-gibraltar-with-removal-of-11-effe7d8b",
    title: "New era for Gibraltar with removal of 118-year-old border controls with Spain",
    titleJa: "118年間続いたスペインとの国境管理が撤廃され、ジブラルタルに新時代が到来",
    summaryJa: "118年間続いたスペインとの国境管理が撤廃され、ジブラルタルに新時代が到来- 公開されました",
    bodyOriginal: `New era for Gibraltar with removal of 118-year-old border controls with Spain
- Published
Every weekday morning, Shilpi Chotrani rides her bicycle from her home in the Spanish town of La Línea de la Concepción to Gibraltar. It's a short journey but it means crossing an international border.
A British Overseas Territory of around 40,000 inhabitants, Gibraltar has a border control for those entering and leaving.
That means that during the morning and afternoon rush hours, when around 15,000 Spaniards who work in the territory cross the frontier, there can be long, time-consuming queues.
"The fact that there is a border between us is ridiculous," says Chotrani, who has a job in human resources in a Gibraltarian shipping and tourism company. "I don't think a fence should separate people from one place and another."
Behind her, the 1,400-foot-tall Rock of Gibraltar is shrouded in early-morning cloud. Perched at the southern tip of mainland western Europe, it is just nine miles from Morocco, at a point where the Atlantic Ocean and the Mediterranean Sea meet.
It is a place that has witnessed military battles, sovereignty disputes and a 13-year blockade imposed by Spain.
But from 15 July it is scheduled to see a new development - the removal of the border, allowing freedom of movement between Spain and Gibraltar.
This is part of a carefully negotiated agreement between the European Union and the UK following the latter's exit from the bloc. Sharing a land border with the EU meant that Gibraltar posed a unique challenge in the post-Brexit era.
"This is going to be a great step forward, both for the Spanish side and the British side," says Chotrani. "All of those of us who live [in La Línea de la Concepción] think this is a great idea. This should have been done a long time ago."
Gibraltar has one of the highest per capita incomes in the world. But La Línea de la Concepción and the nearby area is one of the most deprived parts of Spain.
Unemployment, which is high across the southern Andalusia region, is close to 30% here. The removal of the border is therefore expected to have major economic benefits, facilitating the flow of people back and forth, and possibly going some way to redress the imbalance between the two territories.
"This is something historic, we've had a border fence since 1908," says Juan Franco, the mayor of La Línea de la Concepción, who is keen to underline the local economic dependence on the British territory.
"You have to realise that for an average company in this town a third of its income is from clients in Gibraltar," he says.
After a decade of uncertainty regarding Gibraltar's future relationship with Spain following the UK's vote to leave the EU, Franco says he believes "this solution to Brexit will end up having a positive effect for us".
Spain to check Gibraltar arrivals under post-Brexit deal
- Published26 February
No threat to British sovereignty over Gibraltar deal, says Lammy
- Published12 June 2025
Gibraltarians were staunchly opposed to Brexit, with 96% of them voting to remain in the EU in the 2016 referendum on the issue. That staunchly pro-EU stance was driven partly by concerns that exiting the bloc would encourage Spanish sovereignty claims on the Rock.
But another major factor was Gibraltar's existing close trade relationship with the EU – particularly in areas such as online gaming, shipping and financial services – and fears about the logistical challenges Brexit would pose.
After years of negotiation involving Spain, the EU and the UK, the solution has been to align Gibraltar with the European customs union and the Schengen European free travel zone.
Travellers arriving from countries outside Schengen, such as the UK, will have to show their passports to Gibraltarian and Spanish officials at the territory's airport and port.
The Chief Minister of Gibraltar, Fabian Picardo, says the new arrangements, which are due to be provisionally implemented with their approval by the UK and European Parliaments still pending, represent "a huge change" for the territory.
"One of the key things which has defined the past eight generations of Gibraltarians is the restrictions at the frontier," he told the BBC in the Gibraltarian government's headquarters.
Picardo describes the agreement as introducing "complete and utter fluidity of people and goods" between Gibraltar, on the one hand, and Spain and the EU on the other.
The most obvious economic benefit for Gibraltar, Picardo says, will be an increase in arrivals.
"Business will now be able, in Gibraltar, to see a footfall increase which is not going to be restrained by a potential queue on the way in or frontier queue on the way out."
With Spain contesting the UK's sovereignty of Gibraltar, it is an issue that occasionally flares up in the political arena. In the most notorious episode of bilateral tensions in recent times, Spain's dictator, Francisco Franco, introduced a blockade of the Rock in 1969, which was only lifted in 1982, well after his death.
The chief minister casts the new arrangement as the opposite of the blockade - a logical, mutually beneficial opening up of a border.
"This will be huge for human relations, it will be huge for business, it will be huge for frontier workers, it will be a new dawn" for Gibraltar's relationship with Spain and the EU, says Picardo.
Spain's foreign minister, José Manuel Albares, has cast it in a similar light, speaking of "a new era" for the Rock.
However, the deal also means that goods sold in Gibraltar must comply with EU regulations, something that had not been the case until now.
In addition, the lack of value added tax (VAT) in Gibraltar has meant that a new transaction tax is being introduced, replacing import duty. Charged on all goods sold in Gibraltar, it will start at 15% this year, eventually rising to 17%. There will also be higher rates of excise tax on certain goods.
John Isola, managing director of Anglo Hispano Company, which runs several restaurants and bars on the Rock, says there is a sense of relief among the Gibraltarian business community that the drawn-out Brexit issue has, finally, been resolved – and without a hard border.
He sees the new arrangement as "a good compromise" that will encourage more visitors to Gibraltar and therefore more business.
However, Isola also admits to some nervousness due to the new regulations and tax regime, which he expects will have an impact on competitiveness. "For anybody importing goods the scenario changes completely in terms of the paperwork that one is going to have to present to get the goods in," he says.
He also believes that new requirements to adhere to EU standards "is a challenge for anybody who is importing goods from the UK or anywhere else outside the EU".
Gibraltarians and residents of La Línea de la Concepción have had plenty of time to get used to the idea of the new arrangement. In recent weeks, machinery has been tearing down the border fence each night, in preparation for 15 July.
Having witnessed so much drama in the past, this territory is about to discover the significance of the latest twist in its history.
Related topics
Read more global business stories
- Published4 days ago
- Published7 days ago`,
    bodyJa: `118年間続いたスペインとの国境管理が撤廃され、ジブラルタルに新時代が到来
- 公開されました
シルピ・チョトラーニさんは平日の毎朝、スペインの町ラ・リネア・デ・ラ・コンセプシオンの自宅からジブラルタルまで自転車に乗ります。短い旅ではありますが、国境を越えることになります。
人口約 40,000 人の英国海外領土であるジブラルタルには、出入国者に対する国境管理が行われています。
つまり、領土内で働く約1万5000人のスペイン人が国境を越える朝と午後のラッシュアワーには、時間のかかる長い行列ができる可能性がある。
「私たちの間に国境があるという事実はばかばかしい」と、ジブラルタルの海運・観光会社で人事の仕事をしているチョトラーニ氏は言う。 「フェンスで人々をある場所と別の場所から隔てるべきではないと思います。」
彼女の後ろには、高さ400フィートのジブラルタルの岩が早朝の雲に覆われています。西ヨーロッパ本土の南端に位置し、モロッコからわずか 9 マイル、大西洋と地中海が交わる地点にあります。
ここは軍事戦闘、主権紛争、そしてスペインによる13年間にわたる封鎖を目撃してきた場所だ。
しかし、7月15日からは国境が撤廃され、スペインとジブラルタル間の移動の自由が認められるという新たな展開が予定されている。
これは、欧州連合と英国のEU離脱後の英国との間で慎重に交渉された協定の一部である。 EUと陸路で国境を共有していることは、ジブラルタルがEU離脱後の時代に独特の課題を突きつけることを意味した。
「これはスペイン側にとってもイギリス側にとっても大きな前進となるだろう」とチョトラーニ氏は言う。 「[ラ・リネア・デ・ラ・コンセプシオンに]住んでいる私たち全員が、これは素晴らしいアイデアだと考えています。これはずっと前に行われるべきでした。」
ジブラルタルは一人当たりの所得が世界で最も高い国の一つです。しかし、ラ・リネア・デ・ラ・コンセプシオンとその近隣地域は、スペインで最も恵まれない地域の一つです。
アンダルシア南部地域全体で失業率は高く、ここでも失業率は30％近くに達している。したがって、国境の撤廃は大きな経済的利益をもたらし、人々の行き来を促進し、おそらく両国間の不均衡を是正する何らかの手段になると期待されている。
ラ・リネア・デ・ラ・コンセプシオン市長のフアン・フランコ氏は、「これは歴史的なことだ。1908年から国境フェンスが設置されてきた」と語り、英国領土への地域経済の依存度を強調したいとしている。
「この町の平均的な企業では、収入の 3 分の 1 がジブラルタルの顧客からのものであることを認識する必要があります」と彼は言います。
英国のEU離脱投票後、ジブラルタルとスペインの将来の関係については10年にわたり不確実性が続いたが、フランコ氏は「EU離脱に対するこの解決策は最終的には我が国にとってプラスの効果をもたらすだろう」と信じていると述べた。
スペイン、EU離脱後の協定に基づきジブラルタル到着者をチェックへ
- 2 月 26 日発行
ラミー氏、ジブラルタル協定を巡る英国の主権への脅威はない
- 2025 年 6 月 12 日公開
ジブラルタル国民はEU離脱に断固反対しており、この問題に関する2016年の国民投票では国民の96％がEU残留に投票した。この断固とした親EUの姿勢は、EU離脱がスペインのザ・ロックに対する主権主張を促進するのではないかという懸念によって部分的に推進された。
しかし、もう一つの大きな要因は、ジブラルタルとEUとの既存の密接な貿易関係、特にオンラインゲーム、海運、金融サービスなどの分野における関係と、Brexitがもたらす物流上の課題に対する懸念だった。
スペイン、EU、英国が関与した長年の交渉を経て、解決策はジブラルタルを欧州関税同盟およびシェンゲン欧州自由旅行圏と連携させることであった。
英国などシェンゲン協定外の国から到着する旅行者は、シェンゲン圏の空港と港でジブラルタルとスペインの当局者にパスポートを提示する必要がある。
ジブラルタル州のファビアン・ピカルド首相は、英国と欧州議会の承認をまだ保留したまま暫定的に実施される予定の新たな取り決めは、ジブラルタルにとって「大きな変化」を意味すると述べた。
同氏はジブラルタル政府本部でBBCに対し、「過去8世代のジブラルタル人を特徴づけた重要なことの一つは、辺境での制限だ」と語った。
ピカルド氏は、この協定は、一方ではジブラルタル、もう一方ではスペインとEUの間に「人や物の完全かつ完全な流動性」を導入するものであると説明している。
ジブラルタルにとって最も明白な経済的利益は到着者数の増加だ、とピカルド氏は言う。
「ジブラルタルでは、ビジネスは今後、往路の行列や退路の辺境の行列によって妨げられることなく、客足の増加を確認できるようになります。」
スペインが英国のジブラルタル主権を争っており、政治の舞台で時折激化する問題だ。最近の二国間緊張の最も悪名高いエピソードでは、スペインの独裁者フランシスコ・フランコが1969年にロック封鎖を導入したが、それが解除されたのは彼の死後かなり後の1982年だった。
首相は新たな取り決めを封鎖とは反対の、論理的で相互利益となる国境開放だと位置づけている。
ジブラルタルとスペインおよびEUの関係にとって、「これは人間関係にとっても、ビジネスにとっても、国境地帯の労働者にとっても非常に大きなものであり、新たな夜明けとなるだろう」とピカルド氏は言う。
スペインの外務大臣ホセ・マヌエル・アルバレスも同様の見方をし、ロックの「新時代」について語った。
しかし、この協定は、ジブラルタルで販売される商品がEUの規制に従わなければならないことも意味しており、これまではそうではなかった。
さらに、ジブラルタルには付加価値税 (VAT) が存在しないため、輸入税に代わって新しい取引税が導入されることになります。ジブラルタルで販売されるすべての商品に課せられる税率は、今年は15％から始まり、最終的には17％に引き上げられる。また、特定の商品に対する消費税の税率も高くなります。
オン・ザ・ロックで複数のレストランやバーを経営するアングロ・イスパノ・カンパニーのマネージング・ディレクター、ジョン・イソラ氏は、ジブラルタルのビジネス界には、長引いた英国のEU離脱問題がついに、しかも厳しい国境線もなく解決されたという安堵感が広がっていると語る。
同氏は、この新たな取り決めは、ジブラルタルへのより多くの訪問者、ひいてはビジネスの増加を促進する「良い妥協策」だと考えている。
しかし、イゾラ氏はまた、新しい規制と税制のために多少の不安を感じていることも認めており、競争力に影響を与えると予想している。 「商品を輸入する人にとって、商品を受け取るために提示しなければならない書類の点でシナリオは完全に変わります」と彼は言います。
同氏はまた、EU基準に準拠するための新たな要件は「英国やEU域外から商品を輸入する者にとっての課題である」とも考えている。
ジブラルタル人やラ・リネア・デ・ラ・コンセプシオンの住民は、新しい取り決めのアイデアに慣れるまでに十分な時間があった。ここ数週間、7月15日に備えて機械が毎晩国境フェンスの破壊を行っている。
過去に多くのドラマを目撃してきたこの地域は、その歴史における最新の展開の重要性を発見しようとしています。
関連トピック
グローバル ビジネス ストーリーをもっと読む
- 4 日前に公開
- 7 日前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cwydz60j3eno?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-12T23:29:06+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/df71/live/aad05480-7c4a-11f1-bee8-53ce494e1abc.jpg",
    readTime: 8,
  },
  {
    id: "why-switching-to-save-money-is-easier-th-340bb693",
    title: "Why switching to save money is easier than you might think",
    titleJa: "お金を節約するための切り替えが思っているよりも簡単な理由",
    summaryJa: "お金を節約するための切り替えが思っているよりも簡単な理由- 公開されました",
    bodyOriginal: `Why switching to save money is easier than you might think
- Published
Seeking out a better deal from your broadband, pay TV and energy suppliers? While you know it could save hundreds of pounds, you might be wondering if it's worth the hassle.
But often it only needs one call or a couple of clicks - and banks even pay an incentive to people who switch their main current accounts.
Regulators have made the switching process easier in recent years, encouraging people to shop around when cost of living pressures have intensified.
Which deals are the best for you still depends on your circumstances, but here are some of the ways that switching works.
'One touch' broadband switch
Virgin Media has just been fined £28m by regulator Ofcom for repeatedly preventing customers from cancelling contracts.
The communications regulator said it uncovered tactics including agents deliberately hanging up calls, and customers being put on hold "for no reason". Millions of calls from customers were likely to have been mishandled over a three-year period which prevented or delayed them from switching to a better broadband, landline or pay-TV deal.
Anyone switching now shouldn't face the same hassle. Ofcom's One Touch Switch service, launched in 2024, means you only have to contact your new provider, not negotiate with the old one.
Ofcom says you should check whether you are in or out of contract, external, as you could face exit fees.
Some people are motivated to switch because they are fed up with the service from their old supplier.
Many do so in order to save money. So, customers may still decide to call their current provider in order to negotiate a better deal, or ask them to match the offer they could get by switching.
Paid to change bank
In years gone by, most people would get a bank account early in their adult life and stick with it for decades.
Competition now sees banks try to win over new customers by offering cash to switch - but only if you use their current account as your main account.
Many people have been put off that idea owing to the perceived complication of wages being paid into that account, and direct debits and the like needing to be moved.
The Current Account Switch Service, external now does most of the hard work.
You provide the account and debit card numbers for the account you are leaving to your new bank and choose a date for the move (although it can take seven days).
Behind the scenes, the service will then automatically transfer direct debits and standing orders, move the balance, redirect incoming payments, such as benefits or salaries, and close your old account.
If anything goes wrong, you'll be refunded any interest and charges on your old and new accounts.
If you have an overdraft, you'll have to check the new bank offers to cover this, and the amount owed will then be switched automatically. If not, you'll have to pay it off.
Doing your homework on energy switch
Changing energy supplier and tariff has also been simplified by regulator Ofgem, but there are some key things to check, including:
The way you pay can make a big difference to your bill - paying every month by direct debit is typically £140 a year cheaper than getting a bill every three months
Falling behind on previous bills can prevent you from switching to a new supplier
Decide on whether to move to a fixed tariff, which sets the price per unit of gas and electricity for a period of time, or a variable one
As with broadband, you only need to contact the new supplier if you want to switch.
Ofgem says the new supplier will need, external your postcode, the name of your current energy supplier and your current tariff, the amount you pay for your energy per unit (shown in kilowatt hours - kWh - on your bill), and the amount of energy you use each year. Most of this is on bills or energy statements, and switching services can help.
The switch can take five days, and you have a 14-day cooling off period, during which you can cancel the switch without a fee.
It is important to take meter readings, so you get charged the correct amount by your old and new supplier.`,
    bodyJa: `お金を節約するための切り替えが思っているよりも簡単な理由
- 公開されました
ブロードバンド、有料テレビ、エネルギー供給業者からより有利な取引を探していますか?何百ポンドも節約できることはわかっていても、手間をかける価値があるかどうか疑問に思うかもしれません。
しかし多くの場合、1回の電話か数回のクリックだけで手続きが完了し、銀行はメインの当座預金口座を切り替える人に奨励金を支払うことさえある。
規制当局は近年、切り替えプロセスを容易にし、生活費の圧迫が高まったときに人々が買い物をするよう奨励している。
どの取引があなたにとって最適であるかは状況によって異なりますが、切り替えの方法をいくつか紹介します。
「ワンタッチ」ブロードバンドスイッチ
Virgin Mediaは顧客の契約解除を繰り返し妨害したとして、規制当局のOfcomから2,800万ポンドの罰金を課されたばかりだ。
通信規制当局は、エージェントが意図的に電話を切ったり、顧客が「理由もなく」保留にされたりするなどの手口が判明したと述べた。顧客からの数百万件の電話は、3 年間で誤って処理された可能性があり、そのため、より良いブロードバンド、固定電話、または有料テレビ契約への切り替えが妨げられたり、遅れたりしました。
これから切り替える人は同じ問題に直面する必要はありません。 2024 年に開始された Ofcom のワンタッチ スイッチ サービスでは、古いプロバイダーと交渉する必要はなく、新しいプロバイダーに連絡するだけで済みます。
Ofcom は、契約終了時に違約金が発生する可能性があるため、外部契約の有無を確認する必要があると述べています。
以前のサプライヤーのサービスにうんざりしたために、乗り換えようとする人もいます。
多くの人はお金を節約するためにそうします。したがって、顧客は、より有利な取引を交渉するために、または切り替えによって得られるオファーと一致するように依頼するために、現在のプロバイダーに電話することを決定する可能性があります。
銀行を変更するために支払われる
昔は、ほとんどの人が成人してから早い段階で銀行口座を取得し、それを何十年も使い続けていたでしょう。
現在、競争が激化しており、銀行は切り替え用の現金を提供することで新規顧客を獲得しようとしているが、それは当座預金口座をメイン口座として使用している場合に限られる。
賃金がその口座に支払われ、口座振替などを移動する必要があるという複雑な認識のせいで、多くの人がその考えを先延ばしにしてきました。
現在、外部の現在のアカウント切り替えサービスが、ほとんどのハードワークを実行します。
退職する口座の口座番号とデビット カード番号を新しい銀行に提供し、移行日を選択します (ただし、7 日かかる場合があります)。
その後、このサービスは舞台裏で自動的に口座振替や定期注文の転送、残高の移動、福利厚生や給与などの入金のリダイレクトを行い、古いアカウントを閉鎖します。
何か問題が発生した場合は、古いアカウントと新しいアカウントの利息と料金が返金されます。
当座貸越がある場合は、これをカバーするために銀行の新しいオファーを確認する必要があり、その後、未払い額が自動的に切り替えられます。そうでない場合は、返済しなければなりません。
エネルギースイッチで宿題をする
エネルギー供給者と料金の変更も規制当局 Ofgem によって簡素化されましたが、次のような重要な確認事項がいくつかあります。
支払い方法によって請求額に大きな違いが生じる可能性があります。通常、口座振替で毎月支払う方が、3 か月ごとに請求書を受け取るよりも年間 140 ポンド安くなります。
以前の請求を滞納すると、新しいサプライヤーに切り替えることができなくなる可能性があります
一定期間のガスと電気の単位あたりの価格を設定する固定料金プランに移行するか、変動料金プランに移行するかを決定します。
ブロードバンドと同様に、切り替えたい場合は新しいサプライヤーに連絡するだけで済みます。
Ofgem によれば、新しい供給業者には、郵便番号、現在のエネルギー供給業者の名前と現在の料金表、単位あたりのエネルギー料金の支払い額 (請求書にはキロワット時 (kWh) で表示)、および毎年使用するエネルギー量が必要になります。そのほとんどは請求書や電力料金明細書に記載されており、サービスの切り替えが役に立ちます。
切り替えには 5 日間かかりますが、14 日間のクーリングオフ期間があり、その間は手数料なしで切り替えをキャンセルできます。
新旧のサプライヤーから正しい金額が請求されるように、メーターの測定値を取得することが重要です。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cd7w98n2y3eo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-12T23:28:01+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/c16a/live/a606cc70-7c74-11f1-917a-91e958a7e786.png",
    readTime: 5,
  },
  {
    id: "who-will-replace-lindsey-graham-in-the-s-a0493d94",
    title: "Who will replace Lindsey Graham in the Senate?",
    titleJa: "上院でリンジー・グラハムの後任は誰になるでしょうか?",
    summaryJa: "先週末に急死したリンジー・グラハム上院議員（共和党、サウスカロライナ州）の空席を埋めるべく、混雑する可能性のある議場で最初に名前が挙がっているのはナンシー・メイス下院議員（共和党、サウスカロライナ州）とヘンリー・マクマスター・サウスカロライナ州知事の2人である。グラハム氏は死去当時、再選を目指しており、今年11月の総選挙で民主党のアニー・アンドリュース氏と対決する予定だった。この選挙戦では、エイミー・ウォルター氏とともにクック・ポリティカル・リポートが「ソリッドR」と名付けていた。",
    bodyOriginal: `Rep. Nancy Mace, R-S.C., and South Carolina Gov. Henry McMaster are among the first two names being floated in what could be a crowded field to fill the seat vacated by Sen. Lindsey Graham, R-S.C., who died suddenly over the weekend.
Graham was seeking reelection at the time of his death and was due to square off against Democrat Annie Andrews in the general election this November, in a race the Cook Political Report with Amy Walter had labeled "Solid R."
A person familiar with Mace's thinking, who spoke on condition of anonymity, said she is "strongly considering" running for the seat and would be out with polling on Monday.
Mace, who has represented South Carolina's 1st congressional district since 2021, launched a campaign for governor but lost in the Republican primary in June.
"South Carolina lost a giant last night. For more than three decades, Lindsey Graham gave everything he had to this state and this country, from the Air Force to the United States Senate," Mace wrote on X on Sunday. "We did not always agree, but no one ever questioned his love for South Carolina or the fight he brought to every room he walked into."
In a subsequent post on X on Sunday, Mace referenced "The Godfather Part III."
"'Just when I thought I was out… they pull me back in…'" she posted.
Meanwhile, President Donald Trump, the preeminent kingmaker in Republican politics, said on NBC's "Meet the Press" Sunday morning that "I have somebody I like" to replace Graham, but declined to name who it is.
"I'm not going to tell you who now because it's too soon," the president said.
Trump, however, heaped praise on South Carolina Gov. Henry McMaster, a close ally, during the interview.
"Henry's been a great governor, you know now he's termed out, but he's going to do the right thing," Trump said. "I think Henry will be fantastic."
According to South Carolina state law, McMaster will need to hold a special primary election on Aug.11 to replace Graham on the November ballot. The filing period for that primary will open July 21.
McMaster has the authority to appoint a candidate to fill Graham's current role. Michelle LeClair, McMaster's press secretary, told CNBC: "At this time, our focus is on honoring Senator Graham's life and service. Questions regarding the process for filling the vacancy will be addressed by the Governor's Office when there are updates to share."
Punchbowl News had reported that Rep. Joe Wilson, R-S.C., is interested in the interim appointment and would run for a full term.
But Wilson, who is running for reelection in South Carolina's 2nd congressional district, on Sunday appeared to throw cold water on the claim in a post on X.
"I was grateful to speak with President Trump today reminiscing about our mutual friend, Senator Lindsey Graham. I assured him my goal is to remain in the House to keep his two-vote majority for the American people!!!" Wilson posted.
Others could also join the race.
Rep. William Timmons, who is seeking another term representing South Carolina's 4th congressional district, said in a statement to CNBC that he was "deeply saddened" by Graham's passing but didn't rule out a run.
"If and when the time comes to discuss the future, I have always been willing to serve South Carolina wherever I can make the greatest difference," Timmons said.
Rep. Ralph Norman, another member of South Carolina's House delegation who fell short in his campaign for governor earlier this year, is also expected to test the waters, multiple outlets reported.
Graham's replacement potentially could come from outside the halls of Congress. There is speculation that Lt. Gov. Pamela Evette, who earned Trump's endorsement in her campaign for governor, could enter the fray.
And Politico reported that Treasury Secretary Scott Bessent, a South Carolina native who has kept a home in the state, was fielding calls from people encouraging him to run. Bessent's spokespeople did not immediately respond to a CNBC request for comment.`,
    bodyJa: `先週末に急死したリンジー・グラハム上院議員（共和党、サウスカロライナ州）の空席を埋めるべく、混雑する可能性のある議場で最初に名前が挙がっているのはナンシー・メイス下院議員（共和党、サウスカロライナ州）とヘンリー・マクマスター・サウスカロライナ州知事の2人である。
グラハム氏は死去当時、再選を目指しており、今年11月の総選挙で民主党のアニー・アンドリュース氏と対決する予定だった。この選挙戦では、エイミー・ウォルター氏とともにクック・ポリティカル・リポートが「ソリッドR」と名付けていた。
メイス氏の考えに詳しい関係者は匿名を条件に、メイス氏は立候補を「強く検討」しており、月曜日には投票に行く予定だと語った。
2021年からサウスカロライナ州第1下院選挙区の代表を務めているメイス氏は知事選に立候補したが、6月の共和党予備選で敗れた。
「サウスカロライナ州は昨夜、巨人を失った。リンジー・グラハムは30年以上にわたり、空軍から米国上院まで、この州とこの国に持てるすべてを捧げた」とメイス氏は日曜日のXに書いた。 「私たちはいつも同意していたわけではありませんでしたが、彼のサウスカロライナへの愛や、彼がどの部屋に入っても喧嘩をしたことに疑問を抱く人は誰もいませんでした。」
日曜日のXに関するその後の投稿で、メイスは「ゴッドファーザー パートIII」に言及した。
「『外に出たと思ったら…彼らは私を引き戻した…』」と彼女は投稿した。
一方、共和党政界の傑出したキングメーカーであるドナルド・トランプ大統領は日曜朝、NBCの「ミート・ザ・プレス」でグラハム氏の後任に「好きな人がいる」と述べたが、それが誰なのかは明らかにしなかった。
大統領は「時期尚早なので今は誰とは言わない」と述べた。
しかし、トランプ大統領はインタビュー中に、親密な同盟者であるサウスカロライナ州知事ヘンリー・マクマスターを称賛した。
トランプ大統領は「ヘンリーは偉大な知事だった。もう解任されたが、彼は正しいことをするつもりだ」と語った。 「ヘンリーは素晴らしい選手になると思うよ。」
サウスカロライナ州法によれば、マクマスター氏は11月の投票でグラハム氏に代わって8月11日に特別予備選挙を実施する必要がある。その予備選挙の提出期間は7月21日に始まる。
マクマスター氏はグラハム氏の現在の役割を担う候補者を任命する権限を持っている。マクマスター氏の報道官ミシェル・ルクレア氏はCNBCに対し、「現時点では、我々はグラハム上院議員の生涯と功績に敬意を表することに重点を置いている。欠員補充のプロセスに関する質問については、最新情報があれば知事室から回答されるだろう」と語った。
パンチボウル・ニュースは、ジョー・ウィルソン下院議員（共和党、サウスカロライナ州）が暫定任命に興味を示しており、全任期に立候補するつもりだと報じていた。
しかし、サウスカロライナ州第2下院選挙区での再選を目指して立候補しているウィルソン氏は日曜日、Xへの投稿でこの主張に冷や水を浴びせたようだ。
「今日、私たちの共通の友人であるリンジー・グラハム上院議員のことを思い出しながら、トランプ大統領と話せたことに感謝しました。私の目標は下院に留まり、アメリカ国民の2票の過半数を維持することであると彼に約束しました!!!」ウィルソンが投稿しました。
他の人もレースに参加する可能性があります。
サウスカロライナ州第4選挙区を代表して再選を目指しているウィリアム・ティモンズ下院議員はCNBCへの声明で、グラハム氏の死去に「深く悲しんでいる」としながらも、出馬する可能性は否定しなかった。
ティモンズ氏は、「将​​来について話し合う時期が来たら、私は常にサウスカロライナ州で最大の変化をもたらすことができる限り喜んで奉仕するつもりだ」と語った。
今年初めの知事選での選挙戦で落選したサウスカロライナ州下院議員団のもう一人のラルフ・ノーマン下院議員も水域を試すとみられると複数の報道機関が報じた。
グラハム氏の後任は議会外から選出される可能性がある。知事選でトランプ大統領の支持を得たパメラ・エヴェット副知事がこの争いに加わる可能性があるとの憶測がある。
また、ポリティコは、サウスカロライナ州出身で州内に住居を構えているスコット・ベッセント財務長官が、出馬を促す人々からの電話に対応していると報じた。ベッセント氏の広報担当者はCNBCのコメント要請にすぐには応じなかった。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/12/nancy-mace-lindsey-graham-senate-seat-south-carolina-election.html",
    publishedAt: "2026-07-12T20:28:16+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 5,
  },
  {
    id: "graham-s-death-complicates-myriad-gop-go-47262358",
    title: "Graham’s death complicates myriad GOP goals in Congress",
    titleJa: "グラハム氏の死は議会における無数の共和党の目標を複雑にする",
    summaryJa: "リンジー・グラハム上院議員の死去は、議会がホワイトハウスの有力な情報提供者であり連立構築者の一人を失う中、共和党の一連の政策努力に混乱をもたらすことになる。71歳で亡くなった共和党サウスカロライナ州グラハム氏は、上院の重鎮であり、ドナルド・トランプ大統領との緊密な関係により、上院が数多くの協定を仲介し、ウクライナなどの同盟国への援助を確保することに貢献した。上院予算委員会の委員長を務めたグラハム氏は、「大きくて美しい法案」として知られるトランプ大統領の目玉和解税・支出法案の可決に不可欠な存在だった。",
    bodyOriginal: `Sen. Lindsey Graham's death stands to scramble an array of Republican policy efforts, as Congress loses one of its top White House whisperers and coalition builders.
Graham, R-S.C., who died at 71, was a titan of the Senate whose close relationship with President Donald Trump helped the upper chamber broker numerous deals and secure aid for allies such as Ukraine. Graham, who chaired the Senate Budget Committee, was integral to passing Trump's marquee reconciliation tax-and-spending law, known as the "one big, beautiful bill."
He also served on the Appropriations, Judiciary, and Environment and Public Works Committees and was known to work across the aisle on policy issues.
Graham's death comes as the Senate works to advance many of Trump's priorities before heading into a tough midterm election in November, and his passing is likely to complicate those efforts. Included in the long list of unfinished business is the SAVE America Act, Trump's sought-after voter-ID bill; a third reconciliation bill to address affordability and replenish the military; and the confirmation of Attorney General nominee Todd Blanche.
SAVE America Act
Graham was a staunch advocate for the SAVE America Act, Trump's laundry list bill to require voter ID and proof of citizenship to vote, along with several other White House priorities. Trump has been almost singularly focused on the bill, despite its steep odds of becoming law.
Trump, in a Sunday call on NBC's "Meet the Press," lamented that the SAVE America Act will be harder to pass without Graham's support.
"This is a big blow to the Save America Act, let me tell you," Trump said. "He was pushing for the SAVE America Act like crazy."
The SAVE America Act, especially the version being pushed by Trump, faced steep odds of becoming law with or without Graham. It was far short of the 60 votes needed to overcome the Senate filibuster, given strong Democratic opposition.
Graham's death, however, will make it more difficult for the Senate to communicate the steep odds of passing the SAVE America Act. Trump noted that he spoke with Graham Saturday night about the bill.
"He called, and he said we're all set for the Save America Act," Trump said. "He literally called me about the Save America Act."
Reconciliation 3.0
Graham would have been integral to any additional reconciliation packages Republicans aim to pass by the end of this year. The Budget Committee steers reconciliation bills, which must be budget-centric and comply with the Byrd Rule — an arcane Senate process that allows the upper chamber to skirt the 60-vote filibuster.
Congress has already passed two reconciliation bills this year, including the one big, beautiful bill and a bill to fund immigration enforcement agencies after federal agents from those agencies shot and killed two American citizens earlier this year.
A third package — still not entirely fleshed out and largely in flux — was expected to include military spending to replenish stockpiles depleted by the war with Iran, affordability issues and fraud.
Graham's death now throws into disarray any planning he had done for that bill and leaves the Budget Committee without a chairman.
Blanche nomination
Trump's pick for Attorney General, acting AG Todd Blanche, now faces a new hurdle to Senate confirmation.
Graham served on the Judiciary Committee and was next in line to take the gavel when the term of Chair Chuck Grassley, R-Iowa, ends. The Committee includes 12 Republicans and 10 Democrats, meaning any Republican defection, along with full Democratic opposition, would result in a deadlock. Graham's death brings that tally to 11 Republicans and 10 Democrats.
Sen. Thom Tillis, R-N.C., who is retiring at the end of his term and also serves on the Judiciary Committee, is currently undecided on Blanche's nomination, though he said he has a positive predisposition toward him and has met with Trump's former personal attorney. Should Tillis defect now, along with all Democrats, Blanche's nomination would fail 11-10.
Ukraine aid
Graham has been one of Ukraine's staunchest supporters as it repels Russia's invasion that began in 2021. He has been critical in shepherding money through Congress and greasing the wheels for Trump to support aid to Ukraine.
The senator had just returned from Ukraine immediately before his death.
Trump, who came into office pledging to end the war in Ukraine, was significantly more antagonistic to the country than his predecessor, former President Joe Biden. In the first days of his second term, Trump hosted Ukrainian President Volodymyr Zelenskyy and berated him publicly. Trump has also threatened to cut off aid to Ukraine on numerous occasions.
After much lobbying from Graham, however, the president eventually warmed to aiding Ukraine as it fights Russia. Trump recently said Ukraine would be licensed to make Patriot missile interceptors, a long-range defense system that Ukraine has long sought.
On Friday, Graham announced he and several other senators had reached a deal with the White House to advance an updated sanctions package aimed at Russia.
"As Russia intensifies its slaughter of civilians, it is imperative that the legislative and executive branches work together to create tools to exact a heavy price on those who buy Russian oil and natural gas, fueling the Putin war machine," the senators said.`,
    bodyJa: `リンジー・グラハム上院議員の死去は、議会がホワイトハウスの有力な情報提供者であり連立構築者の一人を失う中、共和党の一連の政策努力に混乱をもたらすことになる。
71歳で亡くなった共和党サウスカロライナ州グラハム氏は、上院の重鎮であり、ドナルド・トランプ大統領との緊密な関係により、上院が数多くの協定を仲介し、ウクライナなどの同盟国への援助を確保することに貢献した。上院予算委員会の委員長を務めたグラハム氏は、「大きくて美しい法案」として知られるトランプ大統領の目玉和解税・支出法案の可決に不可欠な存在だった。
彼はまた、歳出委員会、司法委員会、環境・公共事業委員会の委員も務め、通路を越えて政策問題に取り組むことで知られていました。
グラハム氏の死去は、上院が11月の厳しい中間選挙に向けてトランプ大統領の優先事項の多くを前進させようと取り組んでいる最中に起きたもので、同氏の死去によりこうした取り組みが複雑になる可能性が高い。未完の仕事の長いリストには、トランプ大統領が求めていた有権者ID法案であるSAVE America Actが含まれている。手頃な価格に対処し、軍隊を補充するための3番目の和解法案。そして司法長官候補のトッド・ブランシュ氏の承認。
セーブ・アメリカ法
グラハム氏は、SAVE America Act、投票に有権者IDと市民権証明を要求するトランプ大統領の洗濯物リスト法案、その他いくつかのホワイトハウスの優先事項の熱心な支持者だった。成立の可能性が非常に高いにもかかわらず、トランプ大統領はほぼ唯一この法案に焦点を当ててきた。
トランプ大統領は日曜日のNBC番組「ミート・ザ・プレス」に出演し、グラハム氏の支持がなければSAVEアメリカ法の可決はさらに困難になると嘆いた。
トランプ大統領は「これはセーブ・アメリカ法に対する大きな打撃だ、言わせてほしい」と述べた。 「彼は狂ったようにSAVE America Actを推進していました。」
SAVE America Act、特にトランプ大統領が推し進めている法案は、グラハム氏の有無にかかわらず成立するかどうかは極めて難しい。民主党の強い反対を考慮すると、上院議事妨害を打開するために必要な60票には遠く及ばなかった。
しかし、グラハム氏の死により、上院が「SAVE America Act」可決の極めて高い確率を伝えることはさらに困難になるだろう。トランプ大統領は土曜日の夜に法案についてグラハム氏と話したと述べた。
トランプ大統領は「彼から電話があり、『セーブ・アメリカ法』への準備は整っていると言われた」と語った。 「彼は文字通り、『アメリカ救援法』について私に電話をかけてきました。」
和解 3.0
共和党が今年末までに可決を目指す追加の和解案にはグラハム氏が不可欠だったはずだ。予算委員会は和解法案の立案を主導するが、この法案は予算中心であり、上院が60票の議事妨害を回避できるようにする難解な上院プロセスであるバード・ルールに準拠する必要がある。
議会は今年すでに2件の和解法案を可決しており、そのうちの1件は大きく美しい法案と、今年初めに移民執行機関の連邦職員が米国人2名を射殺した事件を受けて移民執行機関に資金を提供する法案である。
3番目のパッケージはまだ完全に具体化されておらず、ほぼ流動的であるが、イランとの戦争、手頃な価格の問題、詐欺によって枯渇した備蓄を補充するための軍事支出が含まれると予想されていた。
グラハム氏の死により、彼がその法案のために行った計画はすべて混乱に陥り、予算委員会は委員長不在のままとなった。
ブランシュのノミネート
トランプ大統領が司法長官に指名したトッド・ブランシュ長官代理は、上院での承認を得るために新たなハードルに直面している。
グラハム氏は司法委員会の委員を務め、チャック・グラスリー委員長（共和党、アイオワ州）の任期が終了する際に次に小槌を受け取る予定だった。同委員会には共和党員12名、民主党員10名が含まれており、民主党の全面反対とともに共和党が離党すれば膠着状態に陥ることになる。グラハム氏の死により、その数は共和党員11名、民主党員10名となった。
任期満了で退任し、司法委員会の委員も務めるトム・ティリス上院議員（共和党、ノースカロライナ州）は現在、ブランチ氏の指名について未定だが、ブランチ氏に対して好意的な傾向があり、トランプ氏の元個人弁護士と面会したと述べた。もしティリス氏が今、民主党員全員とともに離党すれば、ブランシュ氏の指名は11対10で失敗することになる。
ウクライナ援助
グラハム氏は、2021年に始まったロシアの侵略を撃退するウクライナの最も熱心な支持者の一人だ。議会を通じて資金を誘導し、トランプ大統領がウクライナ支援を支援できるようにすることに重要な役割を果たしてきた。
同上院議員は亡くなる直前にウクライナから帰国したばかりだった。
ウクライナ戦争終結を誓って就任したトランプ氏は、前任のジョー・バイデン前大統領よりもウクライナに対する敵対心が著しく強かった。 2期目の任期の最初の数日、トランプ氏はウクライナのウォロディミル・ゼレンスキー大統領を接待し、公の場で彼を非難した。トランプ大統領はまた、何度もウクライナへの援助を打ち切ると脅してきた。
しかし、グラハム氏からの多大なロビー活動の後、大統領は最終的に、ロシアと戦うウクライナを支援することに前向きになった。トランプ大統領は最近、ウクライナが長年求めてきた長距離防衛システムであるパトリオットミサイル迎撃システムの製造許可をウクライナに与えると述べた。
金曜日、グラハム氏は自身と他の数名の上院議員がロシアを対象とした最新の制裁パッケージを進めることでホワイトハウスと合意に達したと発表した。
「ロシアが民間人虐殺を強化する中、立法府と行政府が協力して、ロシアの石油や天然ガスを購入する者たちに高額の対価を課し、プーチン大統領の戦争機構を刺激する手段を作り出すことが不可欠だ」と上院議員らは述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/12/grahams-death-policy-washington-save-america-ukraine-blanche-reconciliation.html",
    publishedAt: "2026-07-12T18:22:11+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 6,
  },
  {
    id: "elon-musk-and-sam-altman-spar-on-x-after-5ff7cf92",
    title: "Elon Musk and Sam Altman spar on X after Apple files OpenAI lawsuit",
    titleJa: "AppleがOpenAI訴訟を起こした後、イーロン・マスク氏とサム・アルトマン氏がXを巡って争う",
    summaryJa: "イーロン・マスク氏とサム・アルトマン氏はXに関する新しい投稿で互いを批判し、OpenAIの進化を巡る億万長者の長年にわたる争いを浮き彫りにした。マスク氏とアルトマン氏は、エンジニアや科学者の一団とともに、非営利の人工知能研究ラボとして 2015 年に OpenAI を立ち上げるのに貢献しました。",
    bodyOriginal: `Elon Musk and Sam Altman criticized each other in new posts on X, highlighting the billionaires' long-standing tussle over OpenAI's evolution.
Musk and Altman helped to start OpenAI in 2015 as a nonprofit artificial intelligence research lab alongside a band of engineers and scientists.
In 2018, Musk left OpenAI's board after donating tens of millions to the organization, although he later objected to Altman's efforts to construct "an opaque web of for-profit OpenAI affiliates" in a lawsuit that went to trial in California this year. A jury ruled in favor of Altman, and Musk said he would appeal the case.
Musk's relationship with Altman and OpenAI eroded after the Tesla and SpaceX CEO borrowed OpenAI engineering personnel to remake Tesla's Autopilot technology and poached AI researcher Andrej Karpathy from OpenAI. Musk pressured OpenAI to give him complete control and merge the lab into Tesla. Altman and other OpenAI board members rebuffed Musk, who stopped making promised contributions to OpenAI, leaving it in a difficult financial position.
Weeks after the trial, Musk's company SpaceX — which controls the X social platform, the xAI lab that challenges OpenAI and the Starlink broadband internet service — completed its landmark initial public offering. SpaceX raised a record $75 billion as it promoted plans to launch data centers into space, as well as ambitions in enterprise AI applications and interplanetary transportation. Meanwhile, OpenAI has filed confidentially for its own IPO.
This week, SpaceX released the Grok 4.5 generative AI model, while OpenAI debuted its own GPT-5.6 Sol. For days, Musk and Altman have hyped up their respective releases, but on Saturday the rivalry got personal. Earlier, Musk sued both Apple and OpenAI, alleging that they engaged in anti-competitive practices that left Grok lower in app store rankings than other AI chatbots and image generators.
SpaceX has sought to expand in AI coding through its $60 billion all-stock acquisition of Cursor, which it expects to close in the third quarter following regulatory review. The deal would help SpaceX go up against Anthropic's Claude Code and OpenAI's Codex, which quickly write source code for applications.
In response to an X post about Apple filing suit against OpenAI on Friday over alleged theft of trade secrets, Musk wrote, "Scam Altman strikes again …"
The Tesla and SpaceX CEO has used the "Scam Altman" moniker to refer to the OpenAI CEO on several occasions over the past year. Minutes after his post, Musk doubled down, writing, "He takes scamming to a whole new level."
Next, Musk published a photo of Altman that included the words, "I'm doing this because I love it."
"By 'this' he means scamming," Musk wrote, including two rolling-on-the-floor-laughing emojis.
Musk then replied to that post, writing, "He might literally love scamming more than any human alive!"
The flurry of social activity got Altman's attention.
"[H]omeboy you're the one sellling public market investors on short-term space datacenters," Altman wrote in an X post of his own that garnered over 11 million views.
"We start flying them next year. Maybe you can come see them if your parole officer approves," Musk fired back.
Separately, Altman put Musk's fresh wave of attention in the context of OpenAI's fresh model release.
"[T]here are a lot of benchmarks that suggest 5.6 sol is the best model in the world right now, but the most reliable way to tell is that elon is obsessed with me again," Altman wrote on X.
Elsewhere on X, the account @iliketeslas asserted that Altman is scared of Apple. That, too, prompted a response from Altman.
"[I] am not afraid of apple, but i have tremendous respect for them. s-tier company," Altman wrote.
Altman's post led Nikita Bier, X's head of product, to respond: "Incredible trade secrets as well, some of the best."
Musk replied with a face-with-tears-of-joy emoji.
On Friday, an OpenAI spokesperson told CNBC, "We have no interest in other companies' trade secrets."
— CNBC's Lora Kolodny contributed to this report.
WATCH: Elon Musk loses court battle against Sam Altman, OpenAI`,
    bodyJa: `イーロン・マスク氏とサム・アルトマン氏はXに関する新しい投稿で互いを批判し、OpenAIの進化を巡る億万長者の長年にわたる争いを浮き彫りにした。
マスク氏とアルトマン氏は、エンジニアや科学者の一団とともに、非営利の人工知能研究ラボとして 2015 年に OpenAI を立ち上げるのに貢献しました。
2018年、マスク氏はOpenAIに数千万ドルを寄付した後、同社の取締役を辞任したが、その後、今年カリフォルニア州で裁判になった訴訟で「営利目的のOpenAI関連会社の不透明な網」を構築しようとするアルトマン氏の取り組みに反対した。陪審はアルトマン氏に有利な判決を下し、マスク氏は控訴するつもりだと述べた。
マスク氏とアルトマンおよびOpenAIとの関係は、テスラとスペースXのCEOがテスラのオートパイロット技術を作り直すためにOpenAIのエンジニアリング人材を借りたり、AI研究者のアンドレイ・カルパシーをOpenAIから引き抜いたりしたことで悪化した。マスク氏はOpenAIに完全な管理権を与え、研究所をテスラに統合するよう圧力をかけた。アルトマン氏と他のOpenAI取締役会メンバーはマスク氏を拒否したが、マスク氏はOpenAIへの約束した貢献をやめ、同社を厳しい財務状況に陥らせた。
裁判から数週間後、マスク氏の会社スペースX（Xソーシャルプラットフォーム、OpenAIに挑戦するxAIラボ、ブロードバンドインターネットサービスStarlinkを管理する）は画期的な新規株式公開を完了した。 SpaceXは、データセンターを宇宙に打ち上げる計画や、エンタープライズAIアプリケーションや惑星間輸送の野望を推進し、過去最高となる750億ドルを調達した。一方、OpenAIは独自のIPOを極秘に申請した。
今週、SpaceX は Grok 4.5 生成 AI モデルをリリースし、OpenAI は独自の GPT-5.6 Sol をデビューさせました。ここ数日、マスク氏とアルトマン氏はそれぞれのリリースを宣伝してきたが、土曜日には対立関係が個人的なものになった。これに先立ち、マスク氏はAppleとOpenAIの両社を告訴し、両社がアプリストアのランキングでGrokを他のAIチャットボットや画像ジェネレーターよりも低くする反競争的行為を行ったと主張した。
SpaceXは、600億ドルでCursor社を全株買収することでAIコーディング分野の拡大を目指しており、規制当局の審査を経て第3四半期に買収が完了する予定だ。この契約は、SpaceXがアプリケーションのソースコードを迅速に作成するAnthropicのClaude CodeやOpenAIのCodexに対抗するのに役立つだろう。
Appleが金曜日に営業秘密の窃盗の疑いでOpenAIを相手に訴訟を起こしたことに関するX投稿に応えて、マスク氏は「詐欺師アルトマンが再び攻撃…」と書いた。
TeslaとSpaceXのCEOは、過去1年間に何度かOpenAIのCEOを指すのに「詐欺アルトマン」というあだ名を使ってきた。投稿の数分後、マスク氏は気を引き締めて、「彼は詐欺をまったく新しいレベルに引き上げた」と書いた。
次にマスク氏は「大好きだからこれをやっている」という言葉を添えたアルトマンの写真を公開した。
マスク氏は「『これ』とは詐欺を意味する」と床を転がりながら笑う絵文字を2つ添えて書いた。
するとマスク氏はその投稿に返信し、「彼は文字通り、生きているどの人間よりも詐欺が好きなのかもしれない！」と書いた。
社会活動の慌ただしさがアルトマンの注意を引いた。
「おい、あなたは短期宇宙データセンターを公開市場の投資家に売りつけているのだ」とアルトマン氏は自身のX投稿に書き、1100万回以上の閲覧を集めた。
マスク氏は「来年から運航を開始する。仮釈放官が許可すれば見に来てもいいかもしれない」と反撃した。
これとは別に、アルトマン氏はマスク氏の新たな注目の波を、OpenAIの新モデルリリースとの関連で説明した。
「5.6 sol が現時点で世界最高のモデルであることを示唆するベンチマークはたくさんありますが、最も信頼できる方法は、イーロンが再び私に夢中になっているということです」とアルトマンは X について書いた。
X の他の場所では、アカウント @iliketeslas が、アルトマンは Apple を恐れていると主張しました。これもアルトマンからの返答を促した。
アルトマン氏は「アップルを恐れてはいないが、彼らを非常に尊敬している。一流企業だ」と書いた。
アルトマン氏の投稿を受けて、Xの製品責任者であるニキータ・ビア氏は「信じられないほどの企業秘密もあり、その中には最高のものもある」と反応した。
マスク氏は喜びの涙を浮かべた顔の絵文字で返答した。
金曜日、OpenAIの広報担当者はCNBCに対し、「当社は他社の企業秘密には興味がない」と語った。
— CNBC の Lora Kolodny がこのレポートに貢献しました。
注目：イーロン・マスク氏、OpenAIのサム・アルトマン氏との法廷闘争で敗訴`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/12/elon-musk-and-sam-altman-spar-.html",
    publishedAt: "2026-07-12T18:16:11+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "former-emir-of-qatar-sheikh-hamad-bin-kh-5543115b",
    title: "Former Emir of Qatar Sheikh Hamad bin Khalifa Al Thani dies aged 74",
    titleJa: "カタール元首長シェイク・ハマド・ビン・ハリファ・アール・サーニー氏が74歳で死去",
    summaryJa: "カタール元首長シェイク・ハマド・ビン・ハリファ・アール・サーニー氏が74歳で死去- 公開されました",
    bodyOriginal: `Former Emir of Qatar Sheikh Hamad bin Khalifa Al Thani dies aged 74
- Published
Sheikh Hamad bin Khalifa Al Thani, the former leader of Qatar, has died aged 74, the country's government announced on Sunday.
"The Bureau of the Emir mourns the great loss to the nation of the late, may God have mercy on him," a statement read.
Sheikh Hamad was one of the key masterminds behind modern Qatar and had taken power from his father in June 1995 in a bloodless coup.
He is credited with transforming its economy into the wealthy global powerhouse it is today, thanks to its huge gas reserves. But his reign also had controversies - including Qatar's World Cup bid in 2010.
Qatari emir hands power to son Tamim
- Published25 June 2013
Funeral prayers will be held on Sunday evening before several days of public mourning across the country to mark his death.
Flags will be flown at half mast, while government offices and public institutions will be shut as a mark of respect.
King Charles and Queen Camilla paid tribute, saying Sheikh Hamad had "dedicated many years of distinguished service to Qatar".
"His leadership, vision and commitment to the welfare of the Qatari people were widely admired, both within Qatar and around the world," they added.
India declared a day of national mourning and said that all entertainment events would cancelled during the period.
Prime Minister Shri Narendra Modi said: "A visionary leader who led Qatar to great levels of development and prosperity.
"We remember him also as a true friend whom I had the honour of meeting during my last visit to Qatar in February 2024."
When Sheikh Hamad took power 31 years ago Qatar was struggling for money with its oil reserves dwindling.
His coup - carried out while his father Sheikh Khalifa was abroad - changed the country forever.
It became a leading producer and exporter of liquefied natural gas, thanks to international partnerships and investments that had been brokered.
In 1996 Al Jazeera was launched there before becoming a big name in international broadcasting.
And Sheikh Hamad founded the Qatar Investment Authority which put money into businesses abroad, including Harrods and football team Paris Saint-Germain.
It would be football where he secured one of Qatar's biggest - and controversial - triumphs.
The country was awarded the right to host the 2022 World Cup in 2010, despite allegations of corruption it was later cleared of.
It hired 30,000 foreign labourers just to build the stadiums. In 2021 it was reported some 6,500 migrant workers from India, Pakistan, Nepal, Bangladesh and Sri Lanka had died since it won the World Cup bid.
The Qatar government said not all the deaths recorded were of people working on World Cup-related projects and many had lived there a long time.
There was also criticism over Qatar's human rights record and laws against same-sex relationships.
Sheikh Hamad voluntarily abdicated for his son in 2013.
Qatar was a British protectorate until 1971, with the Al Thani family as monarchs since 1851.`,
    bodyJa: `カタール元首長シェイク・ハマド・ビン・ハリファ・アール・サーニー氏が74歳で死去
- 公開されました
カタールの元指導者シェイク・ハマド・ビン・ハリファ・アル・サーニ氏が74歳で死去したと同国政府が日曜日に発表した。
「首長局は故国民の多大なる損失を悼みます。神が彼に慈悲を与えてくださいますように」と声明で述べた。
シェイク・ハマドは現代カタールの背後にある主要な首謀者の一人であり、1995年6月に無血クーデターで父親から権力を掌握した。
彼は、その膨大なガス埋蔵量のおかげで、その経済を今日のような裕福な世界的大国に変えたと信じられています。しかし、彼の治世には2010年のカタールのワールドカップ招致など、論争もあった。
カタール首長、息子タミムに権力を委譲
- 2013 年 6 月 25 日公開
彼の死を記念して全米で数日間の追悼が続く前に、日曜の夕方に葬儀の祈りが行われる。
国旗は半旗で掲げられ、政府機関や公共機関は敬意を表して閉鎖される。
チャールズ国王とカミラ王妃は、ハマド首長が「長年にわたる功績をカタールに捧げた」と述べ、追悼の意を表した。
「彼のリーダーシップ、ビジョン、そしてカタール国民の福祉への取り組みは、カタール国内だけでなく世界中で広く称賛された」と彼らは付け加えた。
インドは国家喪の日を宣言し、期間中のすべての娯楽イベントは中止されると発表した。
シュリ・ナレンドラ・モディ首相は「カタールを素晴らしいレベルの発展と繁栄に導いた先見の明のある指導者。
「私たちは彼を、2024年2月にカタールを最後に訪問した際にお会いできて光栄だった真の友人としても覚えています。」
31年前にハマド首長が権力を握ったとき、カタールは石油埋蔵量が減少する中、資金繰りに苦しんでいた。
彼のクーデターは、父シェイク・ハリファが海外にいる間に実行され、国を永遠に変えた。
国際的なパートナーシップと仲介された投資のおかげで、同社は液化天然ガスの主要な生産者および輸出者となった。
1996 年にアルジャジーラがこの地で創刊され、その後国際放送で有名になりました。
そしてシェイク・ハマドはカタール投資庁を設立し、ハロッズやサッカーチームのパリ・サンジェルマンなど海外のビジネスに資金を投入した。
彼がカタール最大の、そして物議を醸す勝利を収めたのはサッカーだろう。
この国は2010年に2022年ワールドカップの開催権を獲得したが、汚職疑惑は後に解消された。
スタジアム建設のためだけに3万人の外国人労働者を雇用した。 2021年には、インド、パキスタン、ネパール、バングラデシュ、スリランカからの約6,500人の出稼ぎ労働者がワールドカップ招致に勝利して以来死亡したと報告された。
カタール政府は、記録された死亡者のすべてがワールドカップ関連のプロジェクトに従事していた人々によるものではなく、多くは長年そこに住んでいたと述べた。
カタールの人権実績や同性愛を禁止する法律についても批判があった。
シェイク・ハマドは2013年に息子のために自主的に退位した。
カタールは1971年まで英国の保護領であり、1851年からアル・サーニ家が君主となった。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cql1qdq14xro?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-12T16:35:50+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/d015/live/7ee2a4e0-7df8-11f1-9800-45cddfec00b9.jpg",
    readTime: 3,
  },
  {
    id: "as-five-big-u-s-banks-report-earnings-on-cc229f15",
    title: "As five big U.S. banks report earnings on the same day, Citigroup is the one to watch",
    titleJa: "米国の大手銀行5行が同日に決算を発表する中、シティグループが注目される",
    summaryJa: "米国最大手の銀行の中で、シティグループは、ある重要な指標によって最大の改善を示すと予想されている。しかし、独自のパフォーマンス目標を達成するにはまだ長い道のりがあります。",
    bodyOriginal: `Among the largest U.S. banks, Citigroup is expected to show the greatest improvement by one important measure. But it still has a long way to go to reach its own performance target.`,
    bodyJa: `米国最大手の銀行の中で、シティグループは、ある重要な指標によって最大の改善を示すと予想されている。しかし、独自のパフォーマンス目標を達成するにはまだ長い道のりがあります。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/as-five-big-u-s-banks-report-earnings-on-the-same-day-citigroup-is-the-one-to-watch-683c3707?mod=mw_rss_topstories",
    publishedAt: "2026-07-12T15:30:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-74725908",
    readTime: 2,
  },
  {
    id: "earnings-estimates-have-been-following-a-db2ccd43",
    title: "Earnings estimates have been following an unusual pattern this time around",
    titleJa: "今回の利益予想は異例のパターンをたどっている",
    summaryJa: "アナリストは通常​​、決算前の数カ月に予想を引き下げる。しかし、エネルギーとテクノロジーセクターのおかげで、第 2 四半期の決算に向けて期待は実際に高まっています。",
    bodyOriginal: `Analysts generally lower their estimates in the months before earnings. But thanks to the energy and tech sectors, expectations have actually climbed heading into second-quarter results.`,
    bodyJa: `アナリストは通常​​、決算前の数カ月に予想を引き下げる。しかし、エネルギーとテクノロジーセクターのおかげで、第 2 四半期の決算に向けて期待は実際に高まっています。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/earnings-estimates-have-been-following-an-unusual-pattern-this-time-around-fbebfb62?mod=mw_rss_topstories",
    publishedAt: "2026-07-12T14:00:00+00:00",
    category: "エネルギー",
    imageUrl: "https://images.mktw.net/im-85790238",
    readTime: 2,
  },
  {
    id: "badly-burned-british-couple-rescued-from-7e9bd596",
    title: "Badly burned British couple rescued from ravine during Spain wildfires, reports say",
    titleJa: "スペインの山火事で大やけどを負った英国人夫婦が渓谷から救出されたと報道",
    summaryJa: "スペインの山火事で大やけどを負った英国人夫婦が渓谷から救出されたと報道- 公開されました",
    bodyOriginal: `Badly burned British couple rescued from ravine during Spain wildfires, reports say
- Published
A British couple have been found down a ravine, badly burned and semi-conscious, after being caught up in the deadly wildfires that tore through Spain's Almeria province, according to local media.
The pair are thought to have been out hiking when they were caught up in the blaze, which spread rapidly through the province on Thursday. They were evacuated and taken to hospital where they are in intensive care.
Hundreds of firefighters have been battling the fires, which have claimed the lives of 12 people, including four believed to be Britons, and burned through 6,600 hectares (16,300 acres), local authorities said.
The identities of those killed have not yet been officially confirmed.
The couple were discovered by Civil Guard officers searching for survivors near the worst-hit village of Bedar in the early hours of Friday morning.
One of the rescuers, Sergeant Pedro Barre, said they heard distant cries for help.
"As you gain more experience, something inside you tells you, 'Look again, try one more time,'" he told Spain's TVE state broadcaster.
The rescue team followed the sound and climbed down a hillside. They found the couple in critical condition, semi-conscious and with severe burns covering 40% of their bodies.
"Being able to call out in the condition they were in was a titanic effort," said Rafael Zea, another of the officers involved in the operation.
"We'll never forget that look of surprise and emotion on their faces," Barre added.
On Sunday, Andalusia's regional government head, Juan Manuel Moreno Bonilla, said that "the fire has been contained and its perimeter secured," adding in a social media post that the overall alert had been downgraded.
Firefighters had made significant progress in getting the fires under control on Saturday, when calmer winds and higher air humidity prevailed.
About 600 of the nearly 1,500 people evacuated from the fire zone in Almería province were told they could return, regional emergency chief Antonio Sanz said.
On Sunday, dozens of people gathered at a roundabout beneath the village of Bédar, hoping to be allowed back to their homes.
Many said they had no idea if their properties had survived the fire.
Their path was being blocked by blue police tape and traffic officers from the Civil Guard.
Among those waiting anxiously were Mike and Belinda Lithgoe from Cornwall, who have a holiday property nearby.
Since the fires, they have slept in their camper van alongside their dog, Rocket.
The couple said they would be allowed to check on their home during a one hour window later on Sunday, following a meeting attended by the village mayor and the emergency services.
"We're waiting to see if our house is still there" said Belinda.
She said she was "hopeful" because the smoke was on the other side of the mountain as they were fleeing.
"It's impossible to know," said Mike. "You hope it will have gone down the ravine and round rather than up through the village."
Also waiting nearby were Emma Mitchell and her husband.
Emma challenged an earlier statement by local authorities that some of those killed had not taken a designated evacuation route.
"We've lived here for three years full time and there has never been information that you should take this road if there is a fire, never."
And the son of a Belgian man who perished in Spanish wildfires also disputed authorities' claims that his father and other victims ignored official advice to shelter in place, telling the Reuters news agency that emergency services gave them no guidance.
Emma also condemned the decision not to send a text message to all phones in the area.
"I think they should have done the mobile alert, as they do for earthquakes. I know they said that it was too technical and complex… but the reality is, out here in Bédar, there are very few officials."
Local officials have said previously said they did not issue an alert on Thursday night because it may have reached people beyond the affected area and could have complicated evacuations.
Emma said her local policeman as well as local firefighters had been magnificent in their individual efforts, visiting dozens of people as the fire took hold.
A sustained heatwave with temperatures of around 40C (104F) has caused wildfires across Southern Europe this summer, particularly in France, Portugal and Spain.
On Friday, Los Gallardos mayor Francisco Miguel Reyes told Spanish radio station Cadena SER said "it feels like a bomb has fallen" on the area.
"This is the first time we've faced a fire as devastating as this."
Hundreds of firefighters, military and law enforcement personnel, and 30 aircraft, continued responding to the blaze.
Forensic scientists in Madrid are using samples from the bodies of the victims and DNA samples from the families of those reported missing to try to identify the dead.
The identification process has been slowed because collecting DNA samples from relatives has proved difficult, with family members traveling from other countries.
With at least 12 people dead, this is already among the deadliest wildfires in Spanish history.
In 1984, 20 people died in a fire on the Canary Island of La Gomera, while in 1979, 21 people, including nine children, died in a forest fire near Lloret de Mar in north-eastern Spain.
Climate change is driving up temperatures around the world, and Europe is the fastest warming continent, heating up twice as fast as the global average, according to the Copernicus climate service.
This is causing increased summer heatwaves, greater pressure on Europe's water supply, and more intense wildfires.
Wildfires have also plagued France over the summer months.
On Monday over 10,000 people were evacuated from their homes in the foothills of the French Pyrenees.
However, French authorities said on Saturday 32 people had been arrested on suspicion of starting the fires.
Additional reporting by Kostas Kallergis`,
    bodyJa: `スペインの山火事で大やけどを負った英国人夫婦が渓谷から救出されたと報道
- 公開されました
地元メディアによると、スペインのアルメリア県を襲った致命的な山火事に巻き込まれ、重度の火傷を負って意識不明の英国人夫婦が渓谷で発見された。
２人は木曜日に州内に急速に広がった火災に巻き込まれた際、ハイキングに出ていたとみられている。彼らは避難して病院に運ばれ、集中治療を受けています。
地元当局によると、数百人の消防士が消火活動を行っており、英国人とみられる４人を含む１２人の命が奪われ、６６００ヘクタール（１万６３００エーカー）が全焼した。
殺害された人々の身元はまだ正式に確認されていない。
夫妻は金曜日の早朝、最も被害が大きかったベダル村近くで生存者を捜索していた民間警備隊員によって発見された。
救助隊員の一人、ペドロ・バーレ軍曹は、遠くで助けを求める叫び声が聞こえたと語った。
「経験を積むにつれて、自分の中の何かが『もう一度見て、もう一度試してみろ』と言うのです」と彼はスペインの国営放送TVEに語った。
救助隊は音を追って丘の斜面を降りた。彼らは夫婦が意識不明の重体で、体の40％を覆う重度の火傷を負っているのを発見した。
「彼らが置かれていた状態で声を上げることができたのは大変な努力だった」と作戦に参加したもう一人の警察官ラファエル・ゼア氏は語った。
「彼らの驚きと感動の表情を我々は決して忘れないだろう」とバーレ氏は付け加えた。
日曜日、アンダルシア州の地方自治体長官、フアン・マヌエル・モレノ・ボニージャ氏は「火災は鎮火し、周囲の安全は確保された」と述べ、全体的な警戒態勢が引き下げられたとソーシャルメディアへの投稿で付け加えた。
風が穏やかで空気の湿度が高かった土曜日、消防士らは火災の鎮圧に大きく前進した。
アルメリア州の火災地帯から避難した約1,500人のうち約600人が帰還の可能性があると告げられたと、地域緊急事態責任者のアントニオ・サンス氏は述べた。
日曜日、数十人の人々が自宅への帰還を望んでベダル村の下にあるロータリーに集まった。
多くの人は、自分たちの財産が火災から生き残ったかどうかわからないと述べた。
彼らの道は青い警察テープと民間警備隊の交通警官によって遮断されていた。
心配そうに待っていた人々の中には、近くに別荘を持っているコーンウォール出身のマイク・リスゴーさんとベリンダ・リスゴーさんの姿もあった。
火災以来、彼らは愛犬のロケットと一緒にキャンピングカーの中で寝ています。
夫妻は、村長と救急隊が出席した会議の後、日曜後半の１時間の枠内で自宅の様子を確認することが許可されると述べた。
「私たちは家がまだそこにあるかどうかを確認するのを待っています」とベリンダさんは言いました。
彼らが逃げているときに煙が山の向こう側にあったので、彼女は「希望を持っていた」と語った。
「それを知ることは不可能だ」とマイクは言った。 「それが村を通って上がるのではなく、渓谷を下って回ってくれればよかったのに」
近くにはエマ・ミッチェルさんと夫も待っていました。
エマさんは、死亡者の中には指定された避難経路を通らなかった人もいるとする地元当局の以前の声明に異議を唱えた。
「私たちはここにフルタイムで3年間住んでいますが、火事が起きたらこの道を通るべきだという情報は一度もありませんでした。」
また、スペインの山火事で死亡したベルギー人男性の息子も、父親や他の犠牲者が避難勧告を無視したという当局の主張に異議を唱え、救急サービスは何も指導しなかったとロイター通信に語った。
エマさんはまた、地域内のすべての電話にテキストメッセージを送信しないという決定を非難した。
「地震のときと同じように、モバイル警報を行うべきだったと思います。技術的で複雑すぎると彼らが言ったことは知っています…しかし現実には、ここベダルには職員がほとんどいません。」
地元当局者らはこれまで、感染地域を超えて人々に到達し、避難が複雑になる可能性があるため、木曜夜には警報を発令しなかったと述べていた。
エマさんは、地元の警察官と地元の消防士が、火災が発生した際に数十人を訪問するなど、それぞれの活動で素晴らしい活躍をしてくれたと語った。
この夏、気温約40度（104度）の持続的な熱波により、南ヨーロッパ全域、特にフランス、ポルトガル、スペインで山火事が発生した。
金曜日、ロス・ガヤルドスのフランシスコ・ミゲル・レイエス市長はスペインのラジオ局カデナSERに対し、この地域は「爆弾が落ちたような気分だ」と語った。
「これほど壊滅的な火災に直面したのは初めてだ。」
数百人の消防士、軍および法執行機関の職員、および30機の航空機が火災への対応を続けた。
マドリッドの法医学者らは、犠牲者の遺体から採取したサンプルと、行方不明と報告された人々の家族から採取したDNAサンプルを使用して、死者の身元確認を試みている。
家族が他国から旅行しているため、親族からDNAサンプルを収集することが困難であることが判明したため、身元特定プロセスは遅れている。
少なくとも12人が死亡し、これはすでにスペインの歴史の中で最も死者数の多い山火事の一つとなっている。
1984年にはカナリア諸島のラ・ゴメラ島で火災が発生し20人が死亡し、1979年にはスペイン北東部リョレト・デ・マル近郊の山火事で9人の子供を含む21人が死亡した。
コペルニクス気候局によると、気候変動により世界中で気温が上昇しており、ヨーロッパは最も温暖化が進んでいる大陸であり、世界平均の2倍の速さで気温が上昇しているという。
これにより、夏の熱波が増大し、ヨーロッパの水供給への圧力が増大し、山火事の激化が起こっています。
夏の間、山火事もフランスを悩ませている。
月曜日、フランスのピレネー山脈の麓にある自宅から1万人以上が避難した。
しかし、フランス当局は土曜日、火災を起こした容疑で３２人を逮捕したと発表した。
Kostas Kallergis による追加レポート`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cx2x7441762o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-12T13:35:01+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/586b/live/21e5a140-7df6-11f1-a2c7-db8990d0c651.jpg",
    readTime: 6,
  },
  {
    id: "majority-of-u-s-workers-support-an-ai-we-2eb087af",
    title: "Majority of U.S. workers support an AI wealth fund as tech layoffs surge, survey finds",
    titleJa: "技術者の解雇が急増する中、米国の労働者の大多数がAIウェルスファンドを支持していることが調査で判明",
    summaryJa: "最近の世論調査によると、米国の従業員の過半数は現在、企業全体の利益が増加しているにもかかわらずテクノロジー部門の人員削減の増加に不満を抱いており、AI政府系ファンドを通じて企業の責任をさらに追及したいと考えている。調査会社ベラサイトが成人1,690人を対象に6月に実施し、今月初めに発表した全国調査によると、現在アメリカ国民の69％がAI企業に株式の50％を公的政府系ファンドに譲渡する「強制」を支持していることが示唆された。",
    bodyOriginal: `A majority of U.S. employees now want to hold corporations more accountable via an AI sovereign wealth fund, amid dissatisfaction over a growing number of tech layoffs despite higher overall corporate profits, according to a recent poll.
The national survey of 1,690 adults by research firm Verasight, which was carried out in June and published earlier this month, suggests that 69% of Americans now support "forcing" AI firms to transfer 50% of their stock to a public sovereign wealth fund.
"In the eyes of the public, AI Sovereign funds are seen as a tool to distribute the gains from the AI industry back to broader society," said Benjamin Leff, chief executive officer of Verasight.
In June, Senator Bernie Sanders proposed the American AI Sovereign Wealth Fund Act which, if passed, would give the public a 50% stake in the largest AI companies in the U.S.
"It would guarantee that the economic benefits generated by AI are used to improve the lives of all of us — not simply to make the richest people in the world even richer," Sanders said in a statement last month.
"The future of AI and the fate of humanity must not be decided behind closed doors in Silicon Valley by billionaires seeking to maximize their power and profit," Sanders said.
The rising number of tech layoffs in the U.S. have left many workers frustrated and worried over job security, as corporations continue to ramp up capital expenditure for AI expansion.
Goldman Sachs Senior Global Economist Joseph Briggs estimates that more than 9% of the labor force, or around 15 million workers, could lose their jobs during a 10-year AI transition period, the bank said in a report published last month.
This "would be the type of automation and reallocation shock that we saw in the late '90s and early 2000s and in other periods of significant technological change," Briggs said.
"But [Briggs] believes these losses will prove temporary owing to his expectation that AI will create many new jobs over the long term even as it destroys existing ones," the Goldman Sachs report says.
Sovereign wealth funds can serve in multiple roles when it comes to AI. They can lead development of AI at a national level by funding capital-intensive AI infrastructure, take equity stakes in AI companies and capture a share of AI-driven economic gains for the public treasury, according to research firm Windfall Trust.
However, sovereign wealth funds could also face challenges in managing between the public good and the global race to build AI capabilities.
"There is also a tension between the financial mandate (maximize returns for citizens) and the strategic mandate (build national AI capacity, maintain influence over frontier systems), since these objectives can conflict when the best financial investment is a foreign AI company rather than a domestic one," Windfall Trust added.`,
    bodyJa: `最近の世論調査によると、米国の従業員の過半数は現在、企業全体の利益が増加しているにもかかわらずテクノロジー部門の人員削減の増加に不満を抱いており、AI政府系ファンドを通じて企業の責任をさらに追及したいと考えている。
調査会社ベラサイトが成人1,690人を対象に6月に実施し、今月初めに発表した全国調査によると、現在アメリカ国民の69％がAI企業に株式の50％を公的政府系ファンドに譲渡する「強制」を支持していることが示唆された。
Verasightのベンジャミン・レフ最高経営責任者（CEO）は「一般の人々の目には、AIソブリンファンドはAI産業から得た利益をより広範な社会に分配するツールとみなされている」と述べた。
6月、バーニー・サンダース上院議員は、可決されれば米国最大のAI企業の株式50％を国民に付与する米国AIソブリン・ウェルス・ファンド法を提案した。
サンダース氏は先月の声明で、「AIによって生み出される経済的利益が、単に世界で最も裕福な人々をさらに裕福にするためではなく、私たち全員の生活を向上させるために使われることが保証されるだろう」と述べた。
サンダース氏は「AIの将来と人類の運命は、権力と利益を最大化しようとする億万長者によってシリコンバレーの密室で決定されるべきではない」と述べた。
企業がAI拡張のための設備投資を増やし続ける中、米国ではハイテク部門の人員削減数が増加し、多くの労働者が雇用の確保に不満と不安を抱えている。
ゴールドマン・サックスのシニア・グローバル・エコノミスト、ジョセフ・ブリッグス氏は、10年間のAI移行期間中に労働力の9％以上、つまり約1500万人が職を失う可能性があると同銀行が先月発表した報告書で述べた。
これは「90年代後半から2000年代初頭、その他の重大な技術革新の時期に見られたタイプの自動化と再割り当てのショックだろう」とブリッグス氏は述べた。
「しかし、ブリッグス氏は、AIが既存の雇用を破壊する一方で、長期的には多くの新たな雇用を創出するとの期待から、これらの損失は一時的なものに終わると信じている」とゴールドマン・サックスの報告書は述べている。
AI に関しては、政府系ファンドは複数の役割を果たすことができます。調査会社ウィンドフォール・トラストによると、彼らは資本集約型のAIインフラに資金を提供することで国家レベルでAIの開発を主導し、AI企業の株式を取得し、AIによる経済利益の一部を国庫に納めることができるという。
しかし、政府系ファンドは、公益と AI 機能構築の世界的な競争の間での管理において課題に直面する可能性もあります。
「また、財政的使命（国民への利益の最大化）と戦略的使命（国家AI能力の構築、フロンティアシステムへの影響力の維持）の間には緊張も存在する。なぜなら、最良の財政投資が国内のAI企業ではなく外国のAI企業である場合、これらの目標は矛盾する可能性があるからである」とWindfall Trustは付け加えた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/12/majority-of-us-workers-support-ai-fund-amid-tech-layoffs-survey.html",
    publishedAt: "2026-07-12T12:27:55+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 3,
  },
  {
    id: "us-senator-lindsey-graham-dies-after-bri-b2e44540",
    title: "US Senator Lindsey Graham dies after 'brief and sudden illness', his office says",
    titleJa: "米国上院議員リンジー・グラハム氏が「短期間の突然の病気」で死去、事務所が発表",
    summaryJa: "米国上院議員リンジー・グラハム氏が「短期間の突然の病気」で死去、事務所が発表- 公開されました",
    bodyOriginal: `US Senator Lindsey Graham dies after 'brief and sudden illness', his office says
- Published
US Republican Senator Lindsey Graham has died at the age of 71 following a brief and sudden illness.
His office has released a statement saying he died on Saturday evening, adding that Graham's family "asks for privacy during this incredibly difficult period."
Elected to the Senate in 2002, the South Carolina politician was one of Washington's most influential voices on foreign policy and a key ally of Trump.
He had just returned from Kyiv, where he met the Ukrainian President Volodymyr Zelensky on Friday. There were no known health concerns ahead of his trip.
In a social media post marking the senator's death, US President Donald Trump said Graham was a "true American Patriot".
Graham also served as Chairman of the Senate Budget Committee.
He was a strong proponent of US support for Ukraine. In his most recent trip to the country, Graham was working on a version of the Russia sanctions bill, which he said would give "tools to President Trump to end this war."
"Putin will not stop in Ukraine," he told the BBC in 2023.
"To be weak in Ukraine means that you lose in Taiwan," he said.
Over the years, Graham clashed with President Trump. After the US Capitol riots in 2021, Graham gave a speech on the Senate floor, in which he said: "Trump and I, we've had a hell of a journey. I hate it to end this way."
"All I can say is a count me out. Enough is enough."
But he later became one of his staunchest backers and supported Trump in the 2024 election.
He told the BBC in 2023: "There is a dark side to Donald Trump... and he was a very good president. But I am sticking with him because I saw what he did," citing Trump's record on the US southern border, the killing of Iran's Qasem Soleimani and the appointment of conservative judges.
Graham "consistently pushed for outcomes in the War on Terror that protect our long-term national security interests," his website said.
He was opposed to the withdrawal of US troops from Afghanistan in 2021, describing it as a "sad and dangerous event for US national security...Jihadists all over the world are celebrating. America will be seen as weak."
Graham was a staunch supporter of Israel. Israel's President Benjamin Netanyahu paid tribute to Graham, saying "Lindsey understood that the security of Israel and America are inseparable."
Israel lost "one of its greatest friends" he said.
Related topics
- Published29 May 2023
- Published28 February 2025`,
    bodyJa: `米国上院議員リンジー・グラハム氏が「短期間の突然の病気」で死去、事務所が発表
- 公開されました
米国共和党上院議員リンジー・グラハム氏が短期間の突然の病気のため71歳で死去した。
グラハム氏の事務所は声明を発表し、グラハム氏が土曜夜に亡くなったと発表し、グラハム氏の家族は「この信じられないほど困難な時期にプライバシーを守るよう求めている」と付け加えた。
2002年に上院議員に選出されたサウスカロライナ州の政治家は、外交政策に関してワシントンで最も影響力のある発言者の一人であり、トランプ大統領の重要な同盟者だった。
同氏は金曜日にウクライナのウォロディミル・ゼレンスキー大統領と会談したキエフから戻ったばかりだった。彼の旅行前に健康上の懸念は知られていなかった。
ドナルド・トランプ米大統領は上院議員の死を伝えるソーシャルメディアへの投稿で、グラハム氏は「真のアメリカの愛国者」だと述べた。
グラハム氏は上院予算委員長も務めた。
彼は米国のウクライナ支援を強く支持していた。グラハム氏は最近の同国訪問で、対ロシア制裁法案の作成に取り組んでおり、同法案は「トランプ大統領にこの戦争を終わらせるための手段」を与えるものになると述べた。
「プーチン大統領はウクライナに止まらない」と2023年にBBCに語った。
「ウクライナで弱いということは、台湾で負けるということだ」と同氏は語った。
グラハム氏は長年にわたりトランプ大統領と衝突してきた。 2021年の連邦議会議事堂暴動後、グラハム氏は上院議場で演説し、「トランプと私は、地獄のような旅をしてきた。このまま終わるのは嫌だ」と語った。
「私が言えるのは、私を除外してくださいということだけです。もう十分です。」
しかしその後、同氏はトランプ氏の最も熱心な支持者の一人となり、2024年の選挙ではトランプ氏を支持した。
同氏は2023年にBBCに対し、「ドナルド・トランプには暗い面がある…そして彼はとても良い大統領だった。しかし、私は彼に固執する。なぜなら、彼のやったことを見たからである」と述べ、米国南部国境でのトランプの記録、イランのガーセム・ソレイマニ殺害、保守派判事の任命を挙げた。
グレアム氏は「長期的な国家安全保障上の利益を守る対テロ戦争の成果を一貫して推進した」とグラハム氏のウェブサイトには記載されている。
同氏は２０２１年のアフガニスタンからの米軍撤退に反対し、「米国の国家安全保障にとって悲しく危険な出来事だ…世界中のジハード主義者が祝っている。米国は弱いとみなされるだろう」と述べた。
グラハムはイスラエルの熱心な支持者でした。イスラエルのベンヤミン・ネタニヤフ大統領は「リンゼイ氏はイスラエルと米国の安全が分かちがたいものであることを理解していた」とグラハム氏に敬意を表した。
イスラエルは「最も偉大な友人の一人」を失ったと同氏は語った。
関連トピック
- 2023 年 5 月 29 日公開
- 2025 年 2 月 28 日公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cvgj25j6nmeo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-12T08:14:08+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/0992/live/576e9b70-7dc2-11f1-b976-0b9c15b0ccfc.jpg",
    readTime: 3,
  },
  {
    id: "senator-lindsey-graham-has-died-after-a-d8bea833",
    title: "Senator Lindsey Graham has died after a brief illness, his office says",
    titleJa: "リンジー・グラハム上院議員が短期間の病気の末に死去したと事務所が発表",
    summaryJa: "リンジー・グラハム上院議員が死去したと彼の事務所が日曜日に発表した。グラハム氏の事務所はXに関する声明で、「7月11日土曜日の夜、米国上院議員リンジー・グラハム氏が短期間の突然の病気により亡くなった」と発表した。",
    bodyOriginal: `Senator Lindsey Graham has passed away, his office said Sunday.
"On the evening of Saturday, July 11, U.S. Senator Lindsey Graham passed away from a brief and sudden illness," Graham's office said in a statement on X.
Graham, a prominent Republican from South Carolina, was 71.
"Senator Graham's family appreciates prayers at this time and asks for privacy during this incredibly difficult period," his office added.
A spokeswoman for Graham told MS NOW that he had just returned from a trip to Ukraine. She had no additional information on the circumstances of his passing and said more information would become available in the coming days.
His Senate website described Graham as "a conservative problem-solver and one of the strongest proponents of a robust national defense."
President Donald Trump said Graham was "one of the greatest people and Senators I have ever known".
"He was always working, and was a true American Patriot. Lindsey will be greatly missed!!!," Trump said in a post on Truth Social.
Israeli Prime Minister Benjamin Netanyahu said he and his wife Sara were grieving "with the American people over the loss of our dear friend, Senator Lindsey Graham".
"Lindsey understood that the security of Israel and America are inseparable. He devoted his life to defending America, strengthening our alliance and standing up for the free world," Netanyahu said in a post on X.
Graham was elected to the U.S. Senate in 2002 and was re-elected in 2008, 2014, and 2020.
He served as Chairman of the Senate Budget Committee and as a member of the Senate Committee on Appropriations, Senate Judiciary Committee, and Senate Committee on Environment and Public Works.
Prior to serving in the Senate, Graham was elected to the House of Representatives in 1994.
Before being elected to Congress, Graham served in the U.S. Air Force, logging six-and-a-half years of service on active duty as an Air Force lawyer.
During the first Gulf War in the early 1990's, Graham was called to active duty and served as a Staff Judge Advocate where he prepared members for deployment to the Gulf region.
Graham retired from the Air Force Reserves in June 2015 having served his country in uniform for 33 years. He retired at the rank of Colonel.
A native South Carolinian, Graham grew up in a blue collar family in the small town of Central where his parents ran a restaurant and pool hall, according to his website. The first member of his family to go to college, Graham earned his undergraduate and law degrees from the University of South Carolina.`,
    bodyJa: `リンジー・グラハム上院議員が死去したと彼の事務所が日曜日に発表した。
グラハム氏の事務所はXに関する声明で、「7月11日土曜日の夜、米国上院議員リンジー・グラハム氏が短期間の突然の病気により亡くなった」と発表した。
サウスカロライナ州出身の著名な共和党員グラハム氏は71歳。
同氏の事務所は「グラハム上院議員の家族は現時点での祈りに感謝しており、この信じられないほど困難な時期にプライバシーを守ってほしいと願っている」と付け加えた。
グラハムさんの広報担当者はMS NOWに対し、グラハムさんはウクライナ旅行から戻ったばかりだと語った。彼女は彼の死の状況について追加情報を持っておらず、今後数日中にさらなる情報が入手可能になるだろうと述べた。
同氏の上院ウェブサイトでは、グラハム氏を「保守的な問題解決者であり、強固な国防の最も強力な支持者の一人」と評している。
ドナルド・トランプ大統領はグラハム氏について「私がこれまで知った中で最も偉大な人物であり上院議員の一人」と述べた。
トランプ大統領はトゥルース・ソーシャルへの投稿で、「彼は常に仕事をしており、真のアメリカ愛国者だった。リンジーがいなくなるととても寂しくなるだろう！！！」と述べた。
イスラエルのベンヤミン・ネタニヤフ首相は、自身と妻サラが「親愛なる友人リンジー・グラハム上院議員の死を米国民とともに」悲しんでいると述べた。
ネタニヤフ首相はＸへの投稿で「リンゼイ氏はイスラエルと米国の安全保障が切り離せないことを理解していた。米国を守り、同盟を強化し、自由世界のために立ち上がることに人生を捧げた」と述べた。
グラハム氏は2002年に米国上院議員に選出され、2008年、2014年、2020年に再選された。
上院予算委員会の委員長を務め、上院歳出委員会、上院司法委員会、上院環境・公共事業委員会の委員も務めた。
グラハム氏は上院議員に就任する前、1994年に下院議員に選出された。
グラハム氏は議会議員に選出される前に米国空軍に勤務し、空軍弁護士として6年半現役勤務した。
1990年代初頭の第一次湾岸戦争中、グラハムは現役に召集され、法務参謀として湾岸地域への派遣隊員の準備を務めた。
グラハム氏は33年間軍服を着て祖国に奉仕し、2015年6月に空軍予備役を退役した。彼は大佐の階級で退役した。
彼のウェブサイトによると、生来のサウスカロライナ人であるグラハムは、両親がレストランとビリヤード場を経営するセントラルの小さな町のブルーカラーの家庭で育った。家族の中で大学に進学した最初のメンバーであるグラハムは、サウスカロライナ大学で学士号と法学の学位を取得しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/12/senator-lindsey-graham-has-died-after-a-brief-illness-his-office-says.html",
    publishedAt: "2026-07-12T08:04:37+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "how-aldi-is-taking-on-us-supermarkets-wi-29c49c01",
    title: "How Aldi is taking on US supermarkets with its $4 almond butter",
    titleJa: "Aldi は 4 ドルのアーモンドバターで米国のスーパーマーケットにどのように対抗しているか",
    summaryJa: "ドイツのスーパーマーケットが米国で90億ドルを投じるこの計画は、マンハッタンのような都市の中心地をターゲットにしている。その割引モデルはウォルマートに匹敵するでしょうか?",
    bodyOriginal: `How Aldi is taking on US supermarkets with its $4 almond butter
- Published
When Mary Porter walked into Manhattan's newest Aldi store hunting for bargains, the long-time resident found what she considered a retail miracle in plain sight: a $4 jar of almond butter that costs $22 in her own neighbourhood.
"Aldi has the reputation for being inexpensive, so I thought I would come and check it out, and by golly, it is amazing," Porter, 79, told the BBC, marvelling at the savings alongside the fresh spinach and organic raspberries filling her basket.
To the unassuming passer-by, the storefront is completely hidden, tucked away in an underground parking lot beneath The Ellery, a luxury apartment complex where the cheapest rent starts at nearly $5,000 (£3,725) a month.
In fact, the building's own website completely omits the discount grocer from its curated online neighbourhood guide, choosing instead to highlight pricier nearby options like Whole Foods and Brooklyn Fare.
But step past the luxury façade into the basement, and the quiet disappears. Even on an early Tuesday afternoon in July, the brightly lit, bustling space hums with high energy as a lunchtime crowd of New Yorkers tightly navigates the narrow aisles with oversized canvas bags.
Porter's discovery is part of Aldi's $9bn US expansion plan to add 800 new stores over five years, specifically targeting dense urban hubs like Manhattan. It marks a massive scale-up for the German discounter, which first entered the US in 1976 and has steadily grown its footprint to nearly 2,800 storefronts.
The aggressive real estate blitz signals a bold shift for a brand traditionally associated with suburban strip malls and lower-end consumers.
Incumbent US grocers may look with some concern at the insurgency Aldi pulled off since it entered the UK market in the 1990s.
Alongside fellow German discounter Lidl, Aldi picked up huge swathes of the market by offering discount prices for high-quality goods. The traditional "big four" grocers at the time - Tesco, Sainsbury's, Asda and Morrisons - were slow to respond to the new competition, leaving the challengers to gradually pick off their shoppers.
Today, Aldi is the UK's fourth biggest grocer, commanding 10.8% of the market.
Its rapid growth is being mirrored across Europe, its rise aided by easing perceptions of it as a strictly discount grocer as shoppers became increasingly impressed by the quality of its products. The cost of living crisis of the 2020s further fuelled its ascent.
However, while Aldi is rapidly ascending the ranks of American grocery consciousness, it is not, and may never aim to be, Walmart.
Aldi currently holds just 2.9% of the US grocery pie, while Walmart controls about 20%.
Yet analysts say that staying smaller is precisely how Aldi wins.
Data from location analytics firm Placer.ai reveals Aldi is capturing middle- and higher-income shoppers with household incomes between $75,000 and $125,000.
While hard discounters traditionally rely on lower-income demographics, years of persistent inflation have flipped the script, forcing wealthier households to aggressively trade down.
"Those shoppers have started to trade off a visit to a conventional grocery store or a quick service restaurant and started to go into Aldi more frequently," RJ Hottovy, Placer.ai's head of analytical research, told the BBC. "They're looking for ways to stretch their household budget."
For some urban commuters, the new city location offers a better experience than older formats. Kelvin Dozier, who usually shops at an Aldi in Brooklyn, recently started visiting the Manhattan location right across from his office for convenience.
"The one here - it's brighter," Dozier told the BBC, noting the fresh sweet navel oranges in his basket. "The one in Brooklyn is a little smaller. It almost seems temporary, but here it looks like a permanent location."
Still, winning over city slickers accustomed to premium brands remains an uphill battle. Ralph Montenegro, visiting Aldi for the first time, remained fiercely loyal to competitors.
"It has more variety than say Target," Montenegro said, praising the prices on staples like flour and fruit, though he noted he still prefers Trader Joe's. He added that Aldi's heavy reliance on packaged, private-label processed foods was a detractor compared to the natural organic options he prefers.
This strict reliance on limited, private labels is exactly what keeps Aldi's overheads low, according to Dustin York, an associate professor of communication at Maryville University.
He says that Aldi targets a lean, highly efficient model that provides about 80% of what a traditional big-box retailer carries, but at a much lower cost.
Still, York argues it is unlikely that Aldi will take dramatic market share from Walmart, because the retail giant is simply too massive. "I call Walmart the battleship, and I call Aldi a kind of submarine."
But navigating those crowded waters can bring a distinct financial hazard.
"Their biggest kryptonite is real estate cost," York warned, pointing to a brutal Manhattan retail landscape where average asking rents are between $350 and $700 per square foot.
In addition to high rents, Manhattan's roads provide another challenge.
Speaking on Bloomberg's Odd Lots podcast, Aldi's US chief commercial officer Scott Patton detailed that supplying the Manhattan store requires trucking inventory in from South Windsor, Connecticut, using shorter, specialised trucks to navigate tight city streets.
"We come at night because of the congestion," Patton said, noting that each truck requires a two-driver team to handle the city's turning radiuses. One driver watches for blind spots while the other unloads the groceries. To keep shelves in the Manhattan location stocked, Aldi runs three to four of these trips every night, calling the operation a "logistical symphony".
Walmart becomes first retailer to hit $1tn market value
- Published3 February
Because of those structural constraints, beating America's largest retailer is nearly impossible, says Jerry Sheldon, a retail analyst at IHL Group.
"The reason Aldi cannot simply out-discount its way to the throne is that Walmart fights with a war chest and Aldi fights with a scalpel," Sheldon explained.
Walmart pours more than $20bn a year into its business, the bulk of it into technology, automation, and its supply chain, with robots moving product through its warehouses and AI setting its forecasts on delivery routes.
Furthermore, Sheldon points out that Walmart earns billions from things like advertising and membership, which Aldi does not.
"Aldi is a brilliant single-purpose machine, while Walmart is a money machine that happens to sell groceries cheaply. That gap is the whole ballgame," Sheldon said.
For shoppers like Mary Porter, the corporate chess match matters less than the immediate relief to her wallet.
"I get on the subway with my big bag and go home with my cheap groceries. I mean, I'm so happy. This is amazing," Porter said.
Additional reporting by Archie Mitchell`,
    bodyJa: `Aldi は 4 ドルのアーモンドバターで米国のスーパーマーケットにどのように対抗しているか
- 公開されました
メアリー・ポーターがバーゲン品を探してマンハッタンの最新のアルディ店に入ったとき、長年住んでいた彼女は小売業の奇跡だと思うものを目に見えて見つけた。それは、自分の近所では22ドルもする4ドルのアーモンドバターの瓶だった。
「アルディは安いという評判があるので、行ってみようと思ったのですが、なんと驚くべきことでしょう」と79歳のポーターさんはBBCに語り、カゴにいっぱいの新鮮なほうれん草や有機ラズベリーとともに節約効果に驚嘆した。
気取らない通行人にとって、店の外観は完全に隠されており、最も安い家賃で月額 5,000 ドル (3,725 ポンド) 近くから始まる高級マンション、エラリーの地下駐車場にひっそりと佇んでいます。
実際、この建物のウェブサイトでは、厳選されたオンライン近所ガイドからディスカウント食料品店を完全に除外し、代わりにホールフーズやブルックリン・フェアなど、近隣のより高価な選択肢を強調しています。
しかし、豪華なファサードを通り過ぎて地下に一歩足を踏み入れると、静けさは消えてしまいます。 7 月の火曜日の午後早くでも、ランチタイムのニューヨーカーの群衆が特大のキャンバスバッグを抱えて狭い通路をぎっしりと行き交い、明るく照らされた賑やかな空間は活気に満ちた活気にあふれています。
ポーターの発見は、特にマンハッタンのような密集した都市中心部をターゲットに、5年間で800の新しい店舗を追加するアルディの90億ドルの米国拡大計画の一環である。これは、1976 年に初めて米国に進出し、着実に店舗数を 2,800 近くまで拡大してきたドイツのディスカウント業者にとって、大規模な規模拡大を意味します。
積極的な不動産の攻勢は、伝統的に郊外のストリップモールや低価格帯の消費者と関連付けられてきたブランドの大胆な転換を示唆している。
米国の既存食料品店は、アルディが1990年代に英国市場に参入して以来、反乱を起こしていることを若干の懸念の目で見ているかもしれない。
アルディは、同じくドイツのディスカウント業者であるリドルと並んで、高品質の商品を割引価格で提供することで、市場の広大な領域を獲得した。当時の伝統的な「ビッグ 4」食料品店、テスコ、セインズベリーズ、アズダ、モリソンズは、新たな競争への対応が遅れ、挑戦者たちは徐々に買い物客を狙い撃ちしていった。
現在、アルディは英国で 4 番目に大きな食料品店であり、市場の 10.8% を占めています。
その急速な成長はヨーロッパ全土に反映されており、買い物客が同社の製品の品質にますます感銘を受けるようになり、完全なディスカウント食料品店としての認識が緩和されたことがその成長を後押ししました。 2020年代の生活費危機がその上昇にさらに拍車をかけた。
しかし、アルディはアメリカの食料品店の意識のランクを急速に上げているが、ウォルマートではないし、決してウォルマートを目指すことはないかもしれない。
アルディは現在、米国の食料品のパイのわずか2.9％を握っているが、ウォルマートは約20％を支配している。
しかしアナリストは、規模を小さくし続けることがまさにアルディの勝利だと言う。
位置分析会社Placer.aiのデータによると、アルディが世帯収入7万5000ドルから12万5000ドルの間の中所得以上の買い物客を獲得していることが明らかになった。
ハードディスカウント業者は伝統的に低所得者層に依存しているが、長年にわたるインフレが続いたため状況は反転し、裕福な世帯は積極的に値下げを余儀なくされている。
「これらの買い物客は、従来の食料品店やクイックサービスのレストランへの訪問を犠牲にし始め、より頻繁にアルディに行き始めています」とPlacer.aiの分析調査責任者RJ Hottovy氏はBBCに語った。 「彼らは家計を豊かにする方法を探しています。」
一部の都市部の通勤者にとって、都市部の新しい場所は古い形式よりも優れたエクスペリエンスを提供します。普段はブルックリンのアルディで買い物をするケルビン・ドージャーさんは、最近、便宜上、オフィスの真向かいにあるマンハッタンの店舗を訪れるようになった。
「ここのほうが明るいよ」とドージャーさんはBBCに語り、かごの中の新鮮で甘いネーブルオレンジに注目した。 「ブルックリンのものはもう少し小さいです。ほとんど一時的なもののように見えますが、ここでは恒久的な場所のように見えます。」
それでも、プレミアムブランドに慣れている都会派の人々を勝ち取るのは依然として困難な戦いである。初めてアルディを訪れたラルフ・モンテネグロは、競合他社に対する激しい忠誠心を保ち続けた。
「ターゲットよりも品揃えが豊富だ」とモンテネグロ氏は小麦粉や果物などの必需品の価格を賞賛しながらも、それでもトレーダー・ジョーズを好むと述べた。同氏は、アルディ氏が包装されたプライベートブランドの加工食品に大きく依存していることは、彼が好む自然なオーガニックの選択肢と比較すると中傷になると付け加えた。
メリービル大学コミュニケーション学部のダスティン・ヨーク准教授によると、この限定されたプライベートブランドへの厳密な依存こそが、アルディの諸経費を低く抑えているのだという。
同氏によると、アルディは従来の大型小売店が取り扱う商品の約80％を、はるかに低コストで提供する無駄のない高効率モデルをターゲットにしているという。
それでもヨーク氏は、アルディがウォルマートから劇的な市場シェアを奪う可能性は低いと主張する。なぜなら、この小売大手は単純に巨大すぎるからである。 「私はウォルマートを戦艦と呼び、アルディを一種の潜水艦と呼んでいます。」
しかし、こうした混雑した海域を航行することは、明らかな経済的危険をもたらす可能性があります。
ヨーク氏は、平均募集賃料が平方フィート当たり350ドルから700ドルの間である過酷なマンハッタンの小売業界の現状を指摘し、「彼らにとって最大の難関は不動産コストだ」と警告した。
高い家賃に加えて、マンハッタンの道路には別の課題があります。
アルディの米国最高商務責任者スコット・パットン氏は、ブルームバーグのポッドキャスト「Odd Lots」で、マンハッタンの店舗に商品を供給するには、コネチカット州サウスウィンザーから在庫を輸送する必要があり、狭い市内の通りを移動するために短い専用トラックを使用する必要があると詳述した。
「渋滞のため、私たちは夜に来ます」とパットン氏は述べ、各トラックには市内の回転半径を処理するために2人のドライバーチームが必要であると指摘した。 1 人のドライバーが死角を監視し、もう 1 人が食料品を降ろします。マンハッタンの店舗の棚に在庫を保管しておくために、アルディ氏はこうした出張を毎晩 3 ～ 4 回実施し、この業務を「ロジスティック・シンフォニー」と呼んでいます。
ウォルマートが時価総額1兆ドルに達した初の小売業者となる
- 2 月 3 日発行
IHLグループの小売アナリスト、ジェリー・シェルドン氏は、こうした構造的制約のため、米国最大の小売業者に勝つことはほぼ不可能だと語る。
「アルディが王位への道を単純に割り引くことができない理由は、ウォルマートが軍資金で戦い、アルディがメスで戦うからだ」とシェルドン氏は説明した。
ウォルマートは年間200億ドル以上を事業に注ぎ込んでおり、その大半はテクノロジー、オートメーション、サプライチェーンに投じられており、ロボットが倉庫内で商品を移動させたり、AIが配送ルートの予測を設定したりしている。
さらにシェルドン氏は、ウォルマートは広告や会員制などで何十億ドルも稼いでいるが、アルディはそうではない、と指摘する。
「アルディは素晴らしい単一目的のマシンだが、ウォルマートは食料品をたまたま安く売るマネーマシンだ。その差がすべての勝負だ」とシェルドン氏は語った。
メアリー・ポーターのような買い物客にとって、企業のチェスの試合は、自分の財布の当面の救済よりも重要である。
「大きなバッグを持って地下鉄に乗り、安い食料品を持って家に帰ります。つまり、とても幸せです。これは素晴らしいことです」とポーターさんは語った。
Archie Mitchell による追加レポート`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cly0l5d5xn7o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-12T05:00:15+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/c5e0/live/402e3660-7c59-11f1-ad56-219c1e341d26.jpg",
    readTime: 9,
  },
  {
    id: "almost-unlimited-execs-says-ai-demand-r-8d0477f7",
    title: "‘Almost unlimited’: Execs says AI demand remains strong even as enterprises move to ‘valuemaxxing’",
    titleJa: "「ほぼ無制限」：企業が「価値最大化」に移行しているにもかかわらず、AI 需要は依然として強いと幹部らは語る",
    summaryJa: "投資家が世界的なAIインフラ整備における半導体セクターの中心的な役割に賭けたため、半導体株は過去1年間で猛烈な上昇を見せた。しかし、半導体株をめぐるボラティリティが再び高まっており、これがAI需要に対する広範な懸念の表れなのかどうかという議論が巻き起こっている。",
    bodyOriginal: `Chip stocks have had a blistering rally over the past year as investors bet on the semiconductor sector's central role in the global AI infrastructure buildout.
But renewed volatility around chip stocks has sparked a debate if this is a sign of broader concern about AI demand.
In interviews with CNBC this week, several AI executives poured cold water over the idea that demand is slowing, even as they acknowledged that businesses are being more cautious on the cost of using AI.
"I somewhat think of AI demand as almost unlimited," Pat Gelsinger, the former Intel CEO and now general partner at Playground Global, told CNBC on Wednesday, adding that energy availability is "the only real limiter."
"Because how much economic value do you get for increased intelligence? Almost infinite across every industry imaginable," Gelsinger added.
Data center, chip player report supply constraints
A number of factors have stoked volatility in markets around chip and AI data center-related stocks. An announcement from Meta that it will sell its excess AI computing capacity was in part a contributor to the sell-off. While Meta's stock popped on the news, it raised questions over whether this was a sign that there was broader overcapacity of compute out there. Elon Musk's xAI also rented its excess capacity out this year.
And this week, Samsung, one of the world's biggest memory chip companies, forecast a gigantic rise in profit, but its stock fell. After a more than 360% rally in its shares over the last 12 months, the market questioned how much further it could go.
None of these moves appears to have dampened demand for compute and the infrastructure behind it.
"What we're experiencing in terms of demand is extraordinary. There's much more demand than we're able to fulfil, and that's been our experience for some time now," Marc Boroditsky, chief revenue officer at Nebius, told CNBC on Thursday. Nebius is building data centers using Nvidia's GPUs.
Andrew Feldman, CEO of Cerebras Systems, said the example of Meta and xAI selling its excess capacity is a "unique" case.
"For the industry as a whole, the demand for compute far outstrips available capacity, and we're short on data centers. I think we're short on, as an industry, many of the inputs to compute," Feldman told CNBC on Wednesday.
Cerebras, which went public earlier this year, is one of a slew of semiconductor startups attempting to become major players in the data center market and challenge Nvidia.
Rebellions, another chip startup from South Korea, which is backed by Samsung and SK Hynix, reported seeing similar ample demand.
"AI infrastructure momentum [is] still huge," Sungyun Park, CEO of Rebellions, told CNBC on Wednesday.
"I personally believe it's not the signal saying that … all the hyperscalers [are overinvesting] in the infrastructure," Park added in reference to the Meta and xAI news.
Lumentum, which sells photonics and optical products for connectivity in the data center, said its products are sold out for the next five years.
"We're trying to build up our capacity as much as we possibly can to fulfil a demand that we see out five years at this point," Michael Hurlston, CEO of Lumentum, told CNBC on Wednesday.
Lumentum's stock is up around 600% over the last 12 months as investors pile into companies addressing key bottlenecks in the buildout of AI data centers.
Enterprise spending to 'rationalize'
Another big debate around the AI trade is how much enterprises are willing to pay for the technology.
There has been a period of so-called 'tokenmaxxing' at enterprises where companies would encourage employees to use as much AI as possible no matter the result. The tools often used were those from frontier labs like OpenAI and Anthropic.
But companies are now focusing more on the return on investment from AI, especially as those frontier models remain expensive relative to open source offerings from companies like DeepSeek or Alibaba.
Nebius' Boroditsky said that tokenmaxxing is only worthwhile if an organization is seeing a return on investment as a result.
"The CFO bringing the hammer down and slowing spend should actually be looking for value or valuemaxxing," Boroditsky said, adding that AI should be applied to create value that justifies the spending.
"We're seeing a shift now to more rationalization. We've seen it with every tech cycle, and that rationalization will definitely continue the demand," Nebius' Boroditsky said.
While frontier AI models are seen as the most advanced, there are a plethora of open source models that are close in performance and some that are less advanced. Different models have different capabilities, which can be used for specific tasks.
Cerebras' Feldman said that in the future, certain models will be used in specific situations. For example, frontier models can be used for more advanced problems, while some workloads will shift to others.
"I think it's probably the case that you don't need a giant bus to go to the grocery store," Feldman said.
"Certain workloads migrate to some type of compute and easier workloads to others, and I think as we learn and become more sophisticated in our deployment of AI, the same thing will happen."`,
    bodyJa: `投資家が世界的なAIインフラ整備における半導体セクターの中心的な役割に賭けたため、半導体株は過去1年間で猛烈な上昇を見せた。
しかし、半導体株をめぐるボラティリティが再び高まっており、これがAI需要に対する広範な懸念の表れなのかどうかという議論が巻き起こっている。
今週のCNBCとのインタビューで、数人のAI幹部は、企業がAIの使用コストについてより慎重になっていることを認めながらも、需要が鈍化しているという考えに冷や水を浴びせた。
元インテル最高経営責任者（CEO）で現在プレイグラウンド・グローバルのゼネラルパートナーであるパット・ゲルシンガー氏は水曜日、CNBCで「AIの需要はほぼ無制限だと考えている」と語り、エネルギーの利用可能性が「唯一の本当の制限要因」であると付け加えた。
「なぜなら、知能の向上によってどのくらいの経済的価値が得られるのでしょうか? 考えられるすべての業界で、ほぼ無限大です」とゲルシンガー氏は付け加えた。
データセンター、チッププレーヤーの供給制約を報告
さまざまな要因により、チップおよびAIデータセンター関連銘柄を中心に市場のボラティリティが高まっている。メタ社が余剰のAIコンピューティング能力を売却すると発表したことも下落の一因となった。 Meta の株がニュースで急上昇した一方で、これがコンピューティング能力のより広範な過剰が存在する兆候なのかどうかという疑問が生じました。イーロン・マスク氏のxAIも今年、余剰容量を貸し出した。
そして今週、世界最大のメモリーチップ企業の一つであるサムスンは大幅な増益を予想したが、株価は下落した。過去12カ月で株価が360％以上上昇した後、市場はどこまで株価が上昇するのか疑問を抱いた。
これらの動きはいずれも、コンピューティングとその背後にあるインフラストラクチャに対する需要を弱めるものではないようです。
ネビウスの最高収益責任者、マーク・ボロディツキー氏は木曜日、CNBCに対し、「需要という点でわれわれが経験していることは異常だ。われわれが対応できる以上の需要があり、それがここしばらくのわれわれの経験だ」と語った。 Nebius は、Nvidia の GPU を使用してデータセンターを構築しています。
セレブラス・システムズのアンドリュー・フェルドマン最高経営責任者（CEO）は、メタとxAIが余剰容量を売却した例は「ユニークな」ケースだと述べた。
「業界全体として、コンピューティングの需要は利用可能なキャパシティをはるかに上回っており、データセンターが不足しています。業界全体として、コンピューティングに必要なインプットの多くが不足していると思います」とフェルドマン氏は水曜日にCNBCに語った。
今年初めに株式を公開したセレブラスは、データセンター市場で主要なプレーヤーになり、エヌビディアに挑戦しようとしている多数の半導体新興企業の1つである。
サムスンとSKハイニックスが支援する韓国の別の半導体新興企業であるリベリオンズも、同様の豊富な需要があると報告した。
「AIインフラの勢いは依然として大きい」とRebellionsのCEO、Sungyun Park氏は水曜日にCNBCに語った。
「個人的には、これは…すべてのハイパースケーラーがインフラストラクチャに[過剰投資]しているというシグナルではないと信じています」とパーク氏はメタとxAIのニュースに言及して付け加えた。
データセンターの接続用フォトニクスおよび光学製品を販売するLumentumは、同社の製品は今後5年間は完売すると述べた。
ルメンタムのマイケル・ハールストン最高経営責任者（CEO）は水曜日、CNBCに対し、「現時点で5年先が見込まれる需要を満たすために、できる限り能力を増強しようとしている」と語った。
AIデータセンター構築における主要なボトルネックに対処する企業に投資家が殺到する中、ルメンタムの株価は過去12カ月で約600％上昇している。
企業支出の「合理化」
AI 貿易をめぐるもう 1 つの大きな議論は、企業がテクノロジーにいくら支払うつもりかということです。
企業では、結果に関係なく従業員に可能な限り AI を使用するよう奨励する、いわゆる「トークンマックス化」の時期がありました。多くの場合、OpenAI や Anthropic などのフロンティア ラボのツールが使用されました。
しかし、特にこれらのフロンティア モデルは、DeepSeek や Alibaba などの企業が提供するオープンソース製品と比べて依然として高価であるため、企業は現在、AI からの投資収益率にさらに重点を置いています。
Nebius の Boroditsky 氏は、tokenmaxxing は、組織が結果として投資収益率を実感できる場合にのみ価値があると述べました。
「鉄槌を下して支出を遅らせるCFOは、実際には価値や価値の最大化を求めているはずだ」とボロディツキー氏は述べ、支出を正当化する価値を生み出すためにAIを適用すべきだと付け加えた。
ネビウスのボロディツキー氏は、「現在、さらなる合理化への移行が見られている。テクノロジーサイクルのたびにそれを見てきたが、その合理化は間違いなく需要を継続するだろう」と述べた。
フロンティア AI モデルは最も先進的であるとみなされていますが、パフォーマンスがほぼ同じ、またはそれほど先進的ではないオープンソース モデルが多数存在します。モデルが異なれば、特定のタスクに使用できる機能も異なります。
Cerebras の Feldman 氏は、将来的には特定のモデルが特定の状況で使用されるようになるだろうと述べた。たとえば、フロンティア モデルはより高度な問題に使用できますが、一部のワークロードは他のワークロードに移行します。
「食料品店に行くのに巨大なバスは必要ないのではないかと思います」とフェルドマン氏は語った。
「特定のワークロードはあるタイプのコンピューティングに移行し、より簡単なワークロードは他のタイプに移行します。AI の導入を学び、より洗練されるにつれて、同じことが起こると思います。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/12/ai-demand-chips-data-centers-stock-volatility.html",
    publishedAt: "2026-07-12T05:00:01+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 6,
  },
  {
    id: "at-least-two-killed-in-toronto-street-fe-57ac54e4",
    title: "At least two killed in Toronto street festival shooting",
    titleJa: "トロントのストリートフェスティバル銃撃で少なくとも2人死亡",
    summaryJa: "トロントのストリートフェスティバル銃撃で少なくとも2人死亡- 公開されました",
    bodyOriginal: `At least two killed in Toronto street festival shooting
- Published
At least two people have been killed in gunfire at a street festival in Toronto.
Police in the Canadian city initially received reports of an active shooter on St Clair Avenue at approximately 20:12 local time (01:12 BST), where a salsa festival was being held.
Six victims with gunshot wounds were found by police, who said two people had been pronounced dead at the scene.
At a press conference hours after the shooting, police said there had been an exchange of gunfire at the festival between two individuals, and two firearms had been recovered from the scene.
Police were yet to arrest anyone in connection with the shooting, and investigations were ongoing.
Toronto Deputy Police Chief Francisco Barredo described the scene as "very chaotic", and said there was an estimated 13,000 people at the festival when the shooting happened.
He said police were managing three separate crime scenes in connection with the shooting, and the public would be updated once more information was available.
People were told to stay away from the area, where a large police presence remained. Anyone with information in connection with the shooting, including witness statements, have been urged to call police.
Canadian Prime Minister Mark Carney said he was "horrified" by the shooting, and offered his prayers to "the families grieving their loved ones, those who are in critical condition, and everyone who has been affected by this horrific event".
Doug Ford, the Premier of Ontario, condemned the "senseless violence" at the salsa festival, which he confirmed had "claimed two lives and injured others".
"The person responsible must be caught, brought to justice and spend the rest of their life behind bars," he wrote in a statement on X.
He thanked first responders who attended the scene, adding his thoughts were with "the victims, their families and everyone affected".
St Clair Avenue, located in midtown Toronto, is lined with shops and restaurants.
Between the 11 and 12 July, it was set to host the annual Salsa on St Clair Latin festival, a yearly celebration which features a host of live music and dance performances.
This year was the festival's 22nd iteration.`,
    bodyJa: `トロントのストリートフェスティバル銃撃で少なくとも2人死亡
- 公開されました
トロントのストリートフェスティバルで銃撃があり、少なくとも２人が死亡した。
カナダ都市の警察は当初、現地時間20時12分頃（BST01時12分）、サルサフェスティバルが開催されていたセントクレア通りで銃乱射事件が発生したとの通報を受けた。
警察は銃撃による負傷者6人を発見し、現場で2人の死亡が確認されたと発表した。
銃撃事件から数時間後の記者会見で、警察はフェスティバルで２人の間で銃撃戦があり、現場から銃器２丁が回収されたと発表した。
警察はまだ銃撃に関連した人物を逮捕しておらず、捜査が続いている。
トロント警察副署長のフランシスコ・バレド氏は、現場は「非常に混沌とした」状態だったと述べ、銃撃が起きた当時、フェスティバルには推定1万3000人が集まっていたと述べた。
同氏は、警察は銃撃に関連して3つの別々の犯罪現場を管理しており、さらなる情報が入手可能になり次第、一般公開されるだろうと述べた。
人々は、大規模な警察の駐留が残っている地域に近づかないよう指示された。目撃者の証言など、銃撃に関連する情報を持っている人は警察に通報するよう呼び掛けられている。
カナダのマーク・カーニー首相は銃撃事件に「恐怖を感じている」と述べ、「愛する人を悲しんでいる家族、危篤の人々、そしてこの恐ろしい出来事の影響を受けたすべての人たち」に祈りを捧げた。
オンタリオ州のダグ・フォード首相は、サルサ・フェスティバルでの「無分別な暴力」を非難し、「2人の命を奪い、他の人に怪我を負わせた」ことを認めた。
「責任者は逮捕され、裁判にかけられ、残りの人生を刑務所の中で送らなければならない」と彼はXに関する声明で述べた。
同氏は現場に立ち会った初期対応者に感謝の意を表し、「犠牲者とその家族、そして影響を受けたすべての人たち」に思いを馳せた、と付け加えた。
トロントのミッドタウンにあるセント クレア アベニューには、ショップやレストランが立ち並んでいます。
7月11日から12日にかけて、生演奏やダンスパフォーマンスが数多く行われる毎年恒例のサルサ・オン・セントクレア・ラテン・フェスティバルが開催される予定だった。
今年で22回目の開催となった。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/ce3e66e1x3go?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-12T03:56:02+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/94a2/live/bfc51ee0-7d92-11f1-b0c0-b9b367ec5905.jpg",
    readTime: 2,
  },
  {
    id: "u-s-launches-airstrikes-against-iran-aft-de164bdc",
    title: "U.S. launches airstrikes against Iran after Tehran attacks container ship in Hormuz, Pentagon says",
    titleJa: "イランによるホルムズのコンテナ船攻撃を受け、米国がイランへの空爆を開始、国防総省が発表",
    summaryJa: "米軍は声明で、イスラム革命防衛隊がホルムズ海峡を通過中の商船を攻撃したことを受け、土曜日、イランに対する新たな空爆を命令したと発表した。キプロス船籍で航行中のコンテナ船「M/V GFS ギャラクシー」は、イランの攻撃により船内火災が発生し、機関室に重大な損傷が発生し、航行を継続できなくなったと米中央軍が発表した。セントコムによると、民間乗組員１名が行方不明となっている。",
    bodyOriginal: `President Donald Trump ordered renewed airstrikes against Iran on Saturday after the Islamic Revolutionary Guard Corps attacked a commercial ship transiting the Strait of Hormuz, the U.S. military said in a statement.
The M/V GFS Galaxy, a container ship sailing under the flag of Cyprus, is unable to continue its journey after the Iranian attack caused an onboard fire and significant damage to the vessel's engine room, U.S. Central Command said. A civilian crew member is missing, Centcom said.
"In response, the United States is imposing a heavy cost by continuing to degrade Iran's ability to attack civilian mariners and commercial ships freely transiting the strait," Centcom said in a social media post.
"Iran made a poor choice. Now they pay," Defense Secretary Pete Hegseth said in a post on X.
The Revolutionary Guard said it has closed Hormuz to all ship traffic "until further notice," according to the Iranian state news outlet PressTV.
"No vessel will be permitted to transit the strait," the Guard said in a statement published by PressTV.
The airstrikes on Saturday are the third time the U.S. has bombed Iran this week in retaliation for attacks on commercial vessels transiting Hormuz.
Iran has attacked ships that are using a southern route along Oman's coast protected by the U.S. military. Tehran is demanding that vessels use a northern route through its territorial waters.
The U.S. and Iran signed a memorandum of understanding on June 17 to reopen the strait. But Washington and Tehran are now disputing the terms under which Hormuz was supposed to reopen.
Under the agreement, Iran promised to "make arrangements using its best efforts" to ensure safe passage for ships transiting Hormuz and agreed to not charge a toll for 60 days. But the agreement left the precise transit routes undefined.
"The underlying problem here is that the memorandum of understanding did not reach an understanding with respect to the management of ship traffic through the strait," said David Goldwyn, who served as the U.S. State Department's special envoy for international energy affairs under former President Barack Obama.
"It essentially punted that issue," Goldwyn said.
Energy Secretary Chris Wright said last month that the U.S. military would "assure the flow of energy out of the Gulf with or without an agreement with Iran."
"Iran will not have the ability to close the Strait of Hormuz going forward," Wright said at a conference in New York City on June 24. "That's their key leverage and we're taking that leverage away from them."
Earlier Saturday, Iran's Tasnim News Agency reported that Iranian Foreign Minister Abbas Araghchi arrived in Oman for talks with Foreign Minister Sayyid Badr bin Hamad Al Busaidi. Oman has been one of the key mediators in efforts to end the war between the U.S. and Iran.
A U.S. official told MS Now that its technical negotiations team was not involved in the discussions in Oman.
A senior Middle East diplomat with direct knowledge of the talks told MS Now that France and the U.K. are studying proposals drafted by Oman that may allow the charging of navigational fees in the strait, so long as the tolls are not compulsory and have the support of the UN's International Maritime Organization, which regulates sea transport.`,
    bodyJa: `米軍は声明で、イスラム革命防衛隊がホルムズ海峡を通過中の商船を攻撃したことを受け、土曜日、イランに対する新たな空爆を命令したと発表した。
キプロス船籍で航行中のコンテナ船「M/V GFS ギャラクシー」は、イランの攻撃により船内火災が発生し、機関室に重大な損傷が発生し、航行を継続できなくなったと米中央軍が発表した。セントコムによると、民間乗組員１名が行方不明となっている。
セントコムはソーシャルメディアへの投稿で、「これに対し、米国は海峡を自由に通過する民間船員や商船を攻撃するイランの能力を低下させ続けることで、大きな代償を課している」と述べた。
ピート・ヘグセス国防長官はＸへの投稿で「イランは間違った選択をした。今はその代償を払っている」と述べた。
イラン国営報道局プレスTVによると、革命防衛隊は「追って通知があるまで」ホルムズをすべての船舶の通行に閉鎖したと発表した。
「いかなる船舶も海峡を通過することは許可されない」と警備隊はプレスTVが発表した声明で述べた。
土曜日の空爆は、ホルムズを通過する商船への攻撃への報復として米国が今週イランを爆撃したのは3回目である。
イランは、米軍が保護するオマーン沿岸の南航路を利用する船舶を攻撃した。テヘランは船舶が領海を通る北方航路を使用するよう要求している。
米国とイランは６月１７日、海峡再開に向けた覚書に署名した。しかし、米国政府とテヘラン政府は現在、ホルムズ島の再開にかかる条件について議論している。
この合意に基づき、イランはホルムズを通過する船舶の安全な航行を確保するために「最善の努力を払って調整する」と約束し、60日間通行料を請求しないことに同意した。しかし、この協定では正確な輸送ルートは未定義のままとなった。
バラク・オバマ前大統領の下で米国務省の国際エネルギー問題担当特使を務めたデービッド・ゴールドウィン氏は、「ここでの根本的な問題は、覚書が海峡を通る船舶交通の管理に関して合意に達していないことだ」と述べた。
「本質的にその問題を台無しにしたものだ」とゴールドウィン氏は語った。
クリス・ライト・エネルギー長官は先月、米軍は「イランとの合意の有無にかかわらず、湾岸からのエネルギー流出を保証する」と述べた。
ライト氏は6月24日、ニューヨーク市での会見で、「イランには今後、ホルムズ海峡を封鎖する能力はない。これが彼らの重要な影響力であり、われわれはその影響力を彼らから奪おうとしている」と述べた。
土曜日早朝、イランのタスニム通信は、イランのアッバス・アラグチ外相がサイード・バドル・ビン・ハマド・アル・ブサイディ外相と会談するためオマーンに到着したと報じた。オマーンは米国とイランの戦争終結に向けた取り組みにおいて重要な仲介者の一つとなっている。
米国当局者はMS Nowに対し、技術交渉チームはオマーンでの協議には関与していないと語った。
会談を直接知る中東の上級外交官はMSナウに対し、フランスと英国は、通行料金が強制的ではなく、海上輸送を規制する国連の国際海事機関の支援がある限り、海峡での航行料金の請求を認める可能性のあるオマーンが起草した提案を検討していると語った。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/11/us-airstrikes-iran-strait-hormuz.html",
    publishedAt: "2026-07-12T02:13:07+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "us-launches-fresh-strikes-as-iran-closes-34a40f33",
    title: "US launches fresh strikes as Iran closes Strait of Hormuz",
    titleJa: "イランがホルムズ海峡を閉鎖する中、米国が新たな攻撃を開始",
    summaryJa: "イランがホルムズ海峡を閉鎖する中、米国が新たな攻撃を開始- 公開されました",
    bodyOriginal: `US launches fresh strikes as Iran closes Strait of Hormuz
- Published
The US said it launched a fresh wave of strikes on Iran after Tehran struck a ship passing through the Strait of Hormuz.
Iran's Islamic Revolutionary Guard Corps (IRGC) says it closed the waterway until further notice, and the "offending" vessel was attacked after it turned off its systems and diverted from the approved route, according to state media.
US Central Command (Centcom) says it carried out the "third round of strikes this week" after the IRGC forces "blatantly attacked" a Cyprus-flagged vessel.
It comes after incidents earlier this week in which three commercial tankers were attacked, prompting an exchange of strikes with the US.
Centcom said the MV GFS Galaxy was "unable to continue its journey" as a result of significant damage to the engine room. One civilian crew member was missing, it said.
The UK's Maritime Trade Operations (UKMTO) said it had been informed by military authorities that the crew were forced to abandon ship and were in a lifeboat.
"Iran was provided yet another opportunity to demonstrate adherence to the Memorandum of Understanding after being held accountable for earlier attacks on commercial vessels but has again failed," Centcom wrote in a statement shared to X.
The statement was shared by US Secretary of Defense Pete Hegseth, who wrote: "Iran made a poor choice. Now they pay."
Earlier on Sunday, state media said Iran had closed the Strait of Hormuz until further notice after firing a naval cruise missile at a vessel that was attempting to sail along an unapproved route.
The Guards said the vessel was "hit by warning shots and stopped" after ignoring repeated instructions, according to a statement carried by state news agency
It also warned that any US "aggression" as a result of the closure would be responded to with "severity" and new bases in the region would be targeted.
Earlier this week, three commercial tankers were attacked as they tried to cross a US-recommended route through Omani waters. Iran has repeatedly said the only "safe" route is a separate route through its waters.
The incident prompted a series of US strikes in which 17 people were killed and 115 injured, according to Iranian officials. Iran responded with strikes on US allies in the Gulf.
The exchange raised tensions, with US President Donald Trump declaring the Iranian attacks mean the ceasefire is over. Iran's Foreign Minister Abbas Araghchi has accused the US of violating the deal.
However, the US leader said talks would still continue and mediators were trying to revive the process. US media has reported that Iran told American officials the attacks on tankers were a mistake and blamed a rogue internal group.
American officials say they have conveyed through mediators the demand that Iran publicly state that the Strait of Hormuz, a vital international shipping route, is open and pledge to stop firing on commercial ships.
The closure follows a call for revenge from Iranian Supreme Leader Ayatollah Mojtaba Khamenei, in his first public statement since taking leadership.
His father and predecessor, Ali Khamenei, was killed in an air strike on 28 February, on the first day of the US-Israeli war against Iran. He was buried in his home city of Mashhad on Friday.
Reading a statement on state television, the new ayatollah said that vengeance was the "will of the nation".
"We pledge to avenge the blood of the martyred leader and all the martyrs of these two wars from the criminal and disgraced killers," he was quoted as saying.
"The matter depends neither on my personal existence nor on that of other officials. Whether we are present or not, it will come to pass."
Many Iranians taking part in funeral ceremonies over the past few days carried placards calling for the killing of US President Donald Trump, who on Saturday warned that any such plans would see the US "decimate and destroy all areas" of Iran in response.
The Wall Street Journal and other US media reported this week that Israel had shared intelligence with Washington that Iran had recently devised a plan to assassinate the US president.
However, Trump denied that Tehran had made a fresh plan or that Israel was the source of any intelligence. He told the New York Post in an interview that he had been "No. 1 [on Iran's kill list] for a long time".
Related topics
- Published6 days ago
- Published3 days ago`,
    bodyJa: `イランがホルムズ海峡を閉鎖する中、米国が新たな攻撃を開始
- 公開されました
米国は、イラン政府がホルムズ海峡を通過中の船舶を攻撃したことを受け、イランに対する新たな攻撃を開始したと発表した。
国営メディアによると、イランのイスラム革命防衛隊（IRGC）は、追って通知があるまで水路を閉鎖し、「問題の」船舶はシステムの電源を切り、承認された航路から逸脱した後に攻撃されたと発表した。
米中央軍（セントコム）は、革命防衛隊がキプロス船籍の船舶を「露骨に攻撃」したことを受けて、今週「第3弾の攻撃」を実施したと発表した。
今週初めに商業タンカー３隻が攻撃された事件を受けて、米国との攻撃の応酬が始まった。
セントコムは、MV GFS ギャラクシーはエンジンルームに重大な損傷があったため「航行を続けることができなくなった」と述べた。民間乗組員１人が行方不明になったという。
英国の海事貿易業務局（ＵＫＭＴＯ）は、乗組員が退船を余儀なくされ救命ボートに乗っていると軍当局から連絡を受けたと発表した。
「イランには、商船への以前の攻撃の責任を問われた後、覚書の順守を示すもう一つの機会が与えられたが、またしても失敗した」とセントコムはXに共有した声明で述べた。
この声明はピート・ヘグセス米国防長官も共有し、「イランは間違った選択をした。今度は彼らがその代償を払うことになる」と書いた。
日曜早朝、国営メディアは、イランが未承認のルートを航行しようとした船舶に海軍巡航ミサイルを発射した後、追って通知があるまでホルムズ海峡を封鎖したと報じた。
国営通信社が伝えた声明によると、警備隊は同船が度重なる指示を無視したため「威嚇射撃を受けて停止した」と発表した。
また、閉鎖の結果としての米国の「侵略」には「厳正に」対応し、この地域の新たな基地が標的となるだろうと警告した。
今週初め、オマーン海域を通る米国推奨の航路を通ろうとした商業タンカー３隻が攻撃された。イランは、唯一の「安全な」ルートは自国の海域を通る別のルートであると繰り返し述べてきた。
イラン当局者らによると、この事件をきっかけに米国による一連の攻撃が行われ、１７人が死亡、１１５人が負傷した。イランは湾岸の米国同盟国に対する攻撃で対抗した。
このやりとりは緊張を高め、ドナルド・トランプ米大統領はイランの攻撃は停戦の終了を意味すると宣言した。イランのアッバス・アラグチ外相は、米国が合意に違反していると非難した。
しかし、米国の指導者は、交渉はまだ継続しており、調停者はプロセスを復活させようとしていると述べた。米メディアの報道によると、イランは米当局者に対し、タンカーへの攻撃は誤りであり、内部の不正組織のせいだと語ったという。
アメリカ当局者らは、イランに対し、重要な国際航路であるホルムズ海峡が開いていることを公にし、商船への砲撃を停止することを約束するよう求める要求を調停者を通じて伝えたと述べた。
この閉鎖は、イラン最高指導者モジタバ・ハメネイ師が指導者就任後初めての公式声明で報復を呼びかけたことを受けたものである。
彼の父であり前任者であるアリ・ハメネイ師は、米国・イスラエルによる対イラン戦争の初日である2月28日に空爆で殺害された。彼は金曜日に故郷のマシュハドに埋葬された。
新アヤトラは国営テレビで声明を読み、復讐は「国家の意志」であると述べた。
「私たちは、殉教した指導者とこの二つの戦争で殉教したすべての人々に対して、犯罪者と不名誉な殺人者らの血に復讐することを誓う」と同氏は述べたという。
「この問題は私の個人的な存在にも、他の当局者の存在にも依存しません。私たちが出席するかどうかに関係なく、それは起こるでしょう。」
過去数日間、葬儀に参加した多くのイラン人はドナルド・トランプ米大統領の殺害を求めるプラカードを掲げていたが、トランプ大統領は土曜日、そのような計画には米国が対抗してイランの「全地域を壊滅させ破壊する」ことになると警告した。
ウォール・ストリート・ジャーナルと他の米国メディアは今週、イランが最近米国大統領暗殺計画を立案したという情報をイスラエルが米国政府と共有したと報じた。
しかし、トランプ大統領はイランが新たな計画を立てたことや、イスラエルが何らかの情報源であることを否定した。同氏はニューヨーク・ポスト紙のインタビューで、自分が「長い間（イラン殺害リストの）１位だった」と語った。
関連トピック
- 6 日前に公開
- 3 日前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cj9gkpp0dkeo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-12T01:55:03+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/6961/live/7bbcded0-7d7f-11f1-b976-0b9c15b0ccfc.jpg",
    readTime: 5,
  },
  {
    id: "china-s-second-typhoon-in-a-week-makes-l-dc95e59d",
    title: "China's second typhoon in a week makes landfall",
    titleJa: "中国に1週間で2度目となる台風が上陸",
    summaryJa: "中国に1週間で2度目となる台風が上陸- 公開されました",
    bodyOriginal: `China's second typhoon in a week makes landfall
- Published
A powerful typhoon has made landfall in China, the second to hit the country in a week, with nearly two million people evacuated from areas in the path of the storm.
Typhoon Bavi, which spans 1,000km (620 miles) at its widest point - roughly the width of France - first came ashore in the coastal city of Taizhou on Saturday evening before making a second landfall in Wenzhou around midnight (17:00 GMT).
After pummelling a chain of remote Japanese islands, it brought heavy rainfall to Taiwan as it brushed past its northern tip.
Earlier landslides triggered by the storm killed at least 17 people in the Philippines.
Though it has weakened to a severe tropical storm, it still presents a risk because of the huge volume of moisture within its rain bands.
The storm is expected to gradually diminish in its intensity as it moves north-west.
Bavi is forecast to bring "exceptionally heavy rains" to eastern Zhejiang province and northeastern Fujian province on Sunday, the authorities said, adding that evacuations were "undertaken entirely to guard against the [worst-case] scenario".
More than 1.7 million people were evacuated in Zhejiang and thousands more in neighbouring provinces, state media said. Schools, work and outdoor activities have been suspended in Zhejiang, while 400 flights and dozens of train services have been cancelled.
The city of Wenzhou, home to around 10 million people, is close to the path of the storm, with authorities evacuating hundreds of thousands of residents.
Beijing had ordered the evacuation of 100,000 people to "avoid risk", officials said.
Bavi began as a super typhoon, battering Guam and the Northern Mariana Islands last Monday with wind speeds of 290km/h (180mph).
As it made its way through the Pacific, weakening to 144 km/h winds, it struck the Sakishima islands, part of Japan's Ryukyu island chain between the country's main islands and Taiwan. At least five people were injured and thousands were without power.
Taiwan itself did not receive a direct hit but thousands of people were forced to leave their homes and there was a danger of landslides after heavy rain. Neither country has reported any deaths.
Taiwanese authorities had warned that Bavi could bring up to 1m (39 inches) of rainfall.
Dozens of flights have been cancelled while schools have suspended classes across the region. Supermarket shelves have been wiped clean as residents stock up on supplies.
Parts of southern China are still reeling from the devastation brought by Typhoon Maysak earlier this week.
Maysak left at least 39 people dead and killed large numbers of livestock, resulting in massive agriculture loss. It also spurred two rare tornadoes in the central Hubei province.
Related topics
- Published5 days ago`,
    bodyJa: `中国に1週間で2度目となる台風が上陸
- 公開されました
強力な台風が中国に上陸し、この１週間で２度目の上陸となり、２００万人近くが嵐の通り道にある地域から避難している。
最も幅の広いところで1,000キロ（620マイル）、およそフランスの幅に相当する台風バヴィは、土曜日の夕方に最初に沿岸都市の台州に上陸し、その後真夜中（日本時間午後17時）頃に温州に二度目に上陸した。
日本の離島列島を襲った後、北端を通過する際に台湾に大雨をもたらした。
フィリピンではこれより先に、嵐による土砂崩れが発生し、少なくとも１７人が死亡した。
激しい熱帯低気圧にまで弱まったものの、降雨帯内に大量の水分が含まれているため、依然として危険が存在します。
暴風雨は北西に進むにつれて徐々に勢力を弱める見込みです。
当局は、バビにより日曜日に浙江省東部と福建省北東部に「異常な大雨」が降ると予想されており、避難は「完全に（最悪の）シナリオを防ぐために行われた」と付け加えた。
国営メディアによると、浙江省では170万人以上が避難し、近隣の省ではさらに数千人が避難している。浙江省では学校、仕事、野外活動が中止され、飛行機400便と鉄道数十便が欠航となっている。
人口約1,000万人の温州市は嵐の通り道に近く、当局は数十万人の住民を避難させている。
当局者らによると、中国政府は「危険を避ける」ために10万人に避難を命じた。
バビは超大型台風として始まり、先週月曜日に時速290km（時速180マイル）の風速でグアムと北マリアナ諸島を襲いました。
太平洋を通過中、風速は時速144キロに弱まり、日本の本島と台湾の間にある琉球列島の一部である先島諸島を襲った。少なくとも5人が負傷し、数千人が停電した。
台湾自体は直接的な被害はなかったが、数千人が自宅を追われ、大雨の後は土砂崩れの危険もあった。両国とも死亡者は報告していない。
台湾当局は、バビでは最大1メートル（39インチ）の雨が降る可能性があると警告していた。
数十の航空便がキャンセルされ、学校は地域全体で授業を中止した。住民が物資を買いだめする中、スーパーマーケットの棚はきれいに掃除されている。
中国南部の一部は、今週初めに台風メイサークがもたらした被害に今も動揺している。
メイサクでは少なくとも39人が死亡し、多数の家畜が殺され、その結果、農業に大規模な損失がもたらされた。また、湖北省中部で珍しい竜巻が２件発生した。
関連トピック
- 5 日前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cdxd3wkp2rzo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-12T01:22:22+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/5dd5/live/0a1f8470-7d1c-11f1-926f-c90d1bcfbc84.jpg",
    readTime: 3,
  },
  {
    id: "t-rex-could-become-most-expensive-fossil-1130b60a",
    title: "T. rex could become most expensive fossil ever - but it's a ​problem for scientists",
    titleJa: "ティラノサウルスは史上最も高価な化石になる可能性がありますが、それは科学者にとっての問題です",
    summaryJa: "ティラノサウルスは史上最も高価な化石になる可能性があるが、科学者にとっては問題だ- 公開されました",
    bodyOriginal: `T. rex could become most expensive fossil ever - but it's a problem for scientists
- Published
In 1997, Sotheby's hosted its first natural history auction selling fossils and other wonders of our prehistoric world.
It was a niche event mostly attended by the world's museums looking for specimens to add to their collections.
On the books that day was a Tyrannosaurus Rex called Sue - she was eventually sold for $8m (£6m) to the Field Museum in Chicago.
Nearly 30 years later, on Tuesday, another T. rex will make an appearance at the annual auction - one of the most complete specimens of this kind ever found.
And this time it is not just scientists who are dinosaur-hunting but also the super-rich.
The new specimen, known as Gus, has already been valued at $30m but it could fetch more, possibly even becoming the most expensive dinosaur ever sold.
It adds to a growing debate in the natural history world – should specimens of such scientific importance be reserved for museums and their scientists?
Or - as auctioneers would argue - should fossil hunters be rewarded for their discovery of dinosaurs lost to science and saving them from a second extinction?
Cassandra Hatton, global head of natural history at Sotheby's, knows very well the lengths some fossil scientists - palaeontologists - are willing to go to in the search for these creatures.
"People die on excavations," she says.
And for many of these hunters, the ultimate prize is the Tyrannosaurus Rex.
This dinosaur that lived millions of years ago hardly needs describing, having been immortalised in our culture by appearances in films like King Kong and Jurassic Park, and as the namesake of an English rock band.
"The people that look for these fossils will spend months out in the field with tents and their food in their backpacks and they're camping out in the middle of nowhere with the rattlesnakes and the bugs and the mountain lions," she explains.
This is South Dakota - Badlands country - where Gus was eventually discovered 67 million years after roaming our planet.
But finding it is almost the easy part, explains Dr Fiann Smithwick, an independent palaeontologist who has been collecting and preserving fossils for the past 20 years.
"Suddenly when they're out of the ground, they're out of equilibrium, and that normally means they start to decay, fall apart."
Thomas Heitkamp and the team that discovered Gus - named after the late Gary "Gus" Licking, a cattle rancher whose land it was found on - spent three years carefully excavating.
"But it's not the full year," Cassandra Hatton explains. "You can only dig during the field season. So you have to wait till the ground has thawed. And then you are furiously digging until the ground freezes again [in September]."
In 2023, the dig was complete, but the team was only halfway through the recovery process. They then spent a further three years documenting and reconstructing the T. rex back in the lab.
Tuesday's auction will be a payday that has been a long time coming for the team, and could be the biggest yet.
Gus has the highest pre-sale valuation at $30m.
The record for a dinosaur auction is currently held by Apex, a Stegosaurus sold by Sotheby's in 2024 for $44.6m - but that was 11 times what it had originally been valued at going into the auction.
If you are inclined to put a bid in this time, your starting offer cannot be lower than $19m.
For some of the oldest and largest museums in the world dealing in fossils, even this is out of reach.
"We're already priced out of having access to many, many specimens," explains Prof Susannah Maidment, dinosaur researcher at London's Natural History Museum (NHM).
The five most expensive dinosaurs sold at auction have all been since 2020, including Stan a T. rex sold for $31.8m in 2020 - the guide price had been $6-8m.
And this, she says, is "really problematic".
"There's no substitute for having the real fossil. If we're going to do any sort of study, the number one thing is we need to understand the anatomy. We need to know what's real," Prof Maidment explains.
And she said palaeobiology - the study of past life on the planet - has never been more important.
"We are in what is probably a mass extinction right now, we're changing our environment very, very, very rapidly. The past is really the only kind of empirical data we have to tell us about what is going on right now and in the future," she says.
That is just the impact on the scientists. Prof Maidment says that for the public, being able to see the real bones of a dinosaur in a museum "helps them engage with the natural world".
She says that dinosaur specimens are no longer being seen for their scientific value "but like we might view art" as something to collect by wealthy individuals, which has driven the price up.
'A huge bite mark on the skull'
Cassandra Hatton argues that the price of Gus is a reflection of how important a specimen he is.
"Gus is one of the largest and most complete T. rex ever found, 61% of the bones has been identified - in general you find half of the skeleton that's a major scientific find," she says.
The condition of the bones also provides deep insight into the kind of life this creature would have had.
"There's a huge bite mark on the top of the skull, which could have been sustained during a battle. You've got broken bones - some of the ribs, you see huge lumps where they broke and they healed."
Cassandra Hatton says she has reached out to museums all over the world for months to get them to take part in the auction. She wants "something that's scientifically important to get it into the public trust".
But she said the price has to reflect the time, skill, expense and risks with recovering dinosaurs. "For a lot of excavators, some of these people are living hand to mouth. They're not wealthy people.
"They have to invest their own money. It's not billionaires digging them up."
But it is billionaires buying them.
Apex, the Stegosaurus, was auctioned to Kenneth Griffin, founder and CEO of the hedge fund Citadel. Griffin has since loaned Apex to the American Natural History Museum for four years.
Museums have for a long time relied on wealthy individuals bequeathing, loaning or donating artefacts to build their science and art collections, explains Dr Smithwick, who recovers and sells fossils professionally.
But unlike pieces of art, there is a big stumbling block to relying on the philanthropy of private estates when it comes to the study of fossils.
The most respected scientific journals will not accept any study done on a specimen in a private collection. It is almost as if it does not exist to the scientific world.
The argument is that scientists need to be able to revisit the fossil over many years - to agree and disagree, to check their findings as other specimens emerge.
"What happens [if] that person gets bored of them, dies, gets divorced. And there have been many cases where specimens have been in private collections, and there's been a scientific description of them and [that has] gone in the skip," says Prof Maidment from NHM.
"So it's actually just not science anymore."
The second extinction of dinosaurs
Smithwick says the potential for losing specimens is also a risk with museums.
One of the most prolific early collectors of fossils was Mary Anning. In 1829, she discovered the first Squaloraja fossil - known as the fish with the "curling iron eyes" - it was an ancient creature which bridged the gap between sharks and rays. Its body was donated to the Bristol Institute but over a century later it was destroyed in a WWII bombing raid.
But they all agree - the fossil collector, the museum scientist, the auctioneer - that without the work and skill of these professional hunters, there would be no specimens to argue over and far fewer scientific discoveries.
"They're saving the dinosaurs from the second extinction," says Sotheby's Cassandra Hatton.
And Smithwick knows too well the race against time to save fossils in his hunting ground on the Jurassic coast of England.
"I've found a rock with the perfect impression of what was a fish an hour before, and now it's gone. If you imagine a wave coming in, splitting that rock open, the next wave comes along, just wipes out the fish.
"The sea has broken it into 10,000 pieces, and that is it. It is lost forever."
For fossils that are recovered in time, most will never make it to an auction house like Sotheby's.
They are smaller, less culturally revered, but he argues they can hold much greater value - to museums and the public.
"There are countless other specimens that will be scientifically more important in the grand scheme of palaeontology," says Dr Smithwick. "And you have got people selling ammonites to kids on the beach and that is inspiring curiosity in the outside world."
- Published29 June
- Published27 December 2025`,
    bodyJa: `ティラノサウルスは史上最も高価な化石になる可能性があるが、科学者にとっては問題だ
- 公開されました
1997 年、サザビーズは化石や先史時代の世界のその他の驚異を販売する初の自然史オークションを開催しました。
これは、コレクションに追加する標本を探している世界の博物館が主に参加するニッチなイベントでした。
その日の本にはスーと呼ばれるティラノサウルスが載っていました。彼女は最終的にシカゴのフィールド博物館に800万ドル（600万ポンド）で売却されました。
ほぼ30年後の火曜日、別のティラノサウルスが毎年恒例のオークションに登場する。この種の標本としてはこれまでに発見された中で最も完全なものの一つだ。
そして今回、恐竜狩りをしているのは科学者だけではなく、超富裕層も含まれている。
ガスとして知られるこの新しい標本はすでに3,000万ドルの価値があるとされているが、さらに値上がりする可能性があり、おそらくこれまでに販売された恐竜の中で最も高価なものになる可能性がある。
このことは、自然史の世界で議論をさらに深めています。このような科学的に重要な標本は、博物館とその科学者のために保管すべきなのでしょうか?
それとも、競売人が主張するように、化石ハンターは、科学の失われてしまった恐竜を発見し、二度目の絶滅から救ったことで報われるべきなのだろうか？
サザビーズの自然史グローバル責任者であるカサンドラ・ハットンは、一部の化石科学者、古生物学者がこれらの生物の探索にどれほどの努力を惜しまないかをよく知っている。
「発掘中に人が亡くなります」と彼女は言う。
そして、これらのハンターの多くにとって、究極の賞品はティラノサウルスです。
何百万年も前に生きていたこの恐竜は、説明するまでもなく、『キングコング』や『ジュラシックパーク』などの映画に登場したり、イギリスのロックバンドの名前の由来となったりして、私たちの文化の中で不滅の存在となりました。
「これらの化石を探す人々は、テントとバックパックに食料を詰めて何ヶ月も野原で過ごし、ガラガラヘビや昆虫、ピューマと一緒に人里離れた場所でキャンプをしているのです」と彼女は説明する。
ここはサウスダコタ州、バッドランズカントリーで、地球を歩き回ってから 6,700 万年後にガスが最終的に発見された場所です。
しかし、それを見つけるのはほとんど簡単なことだと、過去 20 年間にわたって化石の収集と保存を続けてきた独立系古生物学者のフィアン・スミスウィック博士は説明します。
「突然、それらが地面から出てくると、それらは平衡を失い、通常、それらは腐敗し、ばらばらになり始めることを意味します。」
トーマス・ハイトカンプ氏とガスを発見したチーム（発見された土地の牛牧場主、故ゲイリー・“ガス”・リッキングにちなんで名付けられた）は、3年をかけて慎重に発掘作業を行った。
「しかし、今年は通年ではありません」とカサンドラ・ハットンは説明する。 「掘ることができるのは畑の季節だけです。だから、地面が解けるまで待たなければなりません。そして、（9月に）再び地面が凍るまで、猛烈な勢いで掘り続けます。」
2023 年に発掘は完了しましたが、チームはまだ復興プロセスの半ばにすぎませんでした。その後、彼らは研究室に戻ってティラノサウルスの記録と復元にさらに 3 年を費やしました。
火曜日のオークションはチームにとって長い間待ち望んでいた給料日となり、これまでで最大のオークションとなる可能性がある。
ガスの売却前評価額は3,000万ドルと最も高い。
現在、恐竜オークションの記録は、2024年にサザビーズが4460万ドルで落札したステゴサウルスのアペックスが保持しているが、これはオークションに出品された当初の価値の11倍だった。
今回入札する場合は、開始オファーを 1,900 万ドルより低くすることはできません。
化石を扱う世界最古かつ最大規模の博物館の一部では、これさえも手の届かないところにある。
ロンドン自然史博物館（NHM）の恐竜研究者であるスザンナ・メイドメント教授は、「我々はすでに、非常に多くの標本にアクセスできるという代償を払っている」と説明する。
オークションで落札された最も高価な恐竜5種はすべて2020年以降に出品されたもので、2020年に3180万ドルで落札されたスタン・ティラノサウルスも含まれており、目安価格は600万～800万ドルだった。
そしてこれは「本当に問題がある」と彼女は言う。
「本物の化石を手にすることに代わるものはありません。何らかの研究をしようとするなら、一番大切なことは解剖学的構造を理解する必要があるということです。何が本物なのかを知る必要があります」とメイドメント教授は説明する。
そして彼女は、古生物学（地球上の過去の生命の研究）がかつてないほど重要になっていると述べた。
「私たちは現在、おそらく大量絶滅の最中にあり、私たちの環境は非常に、非常に、非常に急速に変化しています。実際、現在と将来に何が起こっているのかについて私たちが教えてくれる唯一の経験的データは過去です」と彼女は言う。
それだけ科学者に影響を与えているということです。メイドメント教授は、一般の人々にとって、博物館で恐竜の本物の骨を見ることができることは、「自然界と関わるのに役立つ」と述べています。
彼女は、恐竜の標本はもはや科学的価値で見なされなくなっており、「私たちが芸術を裕福な個人が収集するものと見なしているのと同じように」、それが価格を高騰させていると語った。
「頭蓋骨に大きな噛み跡」
カサンドラ・ハットンは、ガスの価格は彼がどれほど重要な標本であるかを反映していると主張する。
「ガスは、これまでに発見されたティラノサウルスの中で最大かつ最も完全なものの1つで、骨の61％が特定されています。一般的に、骨格の半分が見つかるということは、科学的に重要な発見です」と彼女は言う。
骨の状態からは、この生き物がどのような人生を送っていたのかについての深い洞察も得られます。
「頭蓋骨の上部には大きな噛み跡があり、戦闘中に付けられた可能性があります。肋骨の一部が折れていて、折れたところに大きなしこりがあり、それが治ったのが見えます。」
カサンドラ・ハットンさんは、オークションに参加するよう世界中の美術館に何か月も働きかけてきたと語る。彼女は「社会の信頼を得るために科学的に重要なもの」を望んでいる。
しかし彼女は、価格には恐竜の回収にかかる時間、技術、費用、リスクを反映する必要があると述べた。 「多くの掘削労働者にとって、その中にはその日暮らしをしている人もいます。彼らは裕福な人々ではありません。
「彼らは自分のお金を投資しなければなりません。億万長者がそれらを掘り起こすわけではありません。」
しかし、それを買うのは億万長者です。
ステゴサウルスのエイペックスは、ヘッジファンド「シタデル」の創設者兼最高経営責任者（CEO）のケネス・グリフィンに競売にかけられた。その後、グリフィン氏はエイペックスをアメリカ自然史博物館に4年間貸与した。
専門的に化石の回収と販売を行っているスミスウィック博士は、博物館は長い間、科学や芸術のコレクションを構築するために遺物を遺贈したり、貸し出したり、寄付したりする裕福な個人に依存してきました、と説明します。
しかし、芸術作品とは異なり、化石の研究に関して私有財産の慈善活動に依存することには大きな障害があります。
最も権威のある科学雑誌は、個人コレクションの標本について行われた研究を受け入れません。科学の世界にとって、それはまるで存在しないかのようです。
その議論は、科学者は何年にもわたってその化石を再調査し、同意することも反対することも、他の標本が出現したときにその発見を確認することもできる必要があるということだ。
「その人が飽きたり、死んだり、離婚したりしたらどうなるでしょう。そして、標本が個人のコレクションに保管されていて、それらの科学的記述があったにもかかわらず、無視されてしまったというケースも数多くあります」とNHMのメイドメント教授は言う。
「つまり、それは実際にはもはや科学ではないのです。」
恐竜の二度目の絶滅
スミスウィック氏は、標本を紛失する可能性も博物館のリスクであると述べています。
初期の最も多作な化石収集家の 1 人は、メアリー アニングでした。 1829 年に彼女は、「カーリングアイアンの目」を持つ魚として知られる最初のスクワラジャの化石を発見しました。これは、サメとエイの間の橋渡しをした古代の生き物でした。その遺体はブリストル研究所に寄贈されましたが、1世紀以上後、第二次世界大戦の空襲で破壊されました。
しかし、化石収集家、博物館の科学者、競売人は皆、プロの狩猟者の仕事と技術がなければ、議論の対象となる標本は存在せず、科学的発見もはるかに少なくなるだろうということに同意しています。
「彼らは恐竜を二度目の絶滅から救っているのです」とサザビーズのカサンドラ・ハットン氏は言う。
そしてスミスウィック氏は、イギリスのジュラ紀の海岸にある狩猟場で化石を保存するのは時間との勝負であることをよく知っています。
「1時間前には魚だった形跡が完璧に残っている岩を見つけましたが、今はもう消えています。波が押し寄せて岩を割ると想像すると、次の波が押し寄せて魚を一掃してしまいます。
「海がそれを1万個の破片に砕いた、それで終わりです。それは永遠に失われます。」
時間内に回収された化石の場合、ほとんどはサザビーズのようなオークションハウスに出品されることはありません。
それらは小さく、文化的にはそれほど尊敬されていませんが、博物館や一般の人々にとって、それらははるかに大きな価値を保持できると彼は主張します。
「古生物学の壮大な計画において科学的により重要となる標本は他にも無数にあります」とスミスウィック博士は言う。 「そして、ビーチで子供たちにアンモナイトを売る人々がいて、それが外の世界の好奇心を刺激しています。」
- 6 月 29 日発行
- 2025 年 12 月 27 日公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c4gykgyn1r4o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-11T23:58:40+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/6771/live/98eee880-7c5e-11f1-bee8-53ce494e1abc.jpg",
    readTime: 10,
  },
  {
    id: "it-s-heartbreaking-my-brother-claimed-s-c35164cf",
    title: "‘It’s heartbreaking’: My brother claimed Social Security at 70. He died from cancer after one payment. Why wait to claim?",
    titleJa: "「悲痛な思いだ」: 私の兄は 70 歳で社会保障を請求しました。彼は 1 回の支払い後に癌で亡くなりました。なぜ請求を待つ必要があるのでしょうか？",
    summaryJa: "「私はずっと、給付金の請求を遅らせる政府の奨励には少し懐疑的でした。」",
    bodyOriginal: `“I’ve always been a little skeptical of the government’s encouragement to delay claiming benefits.”`,
    bodyJa: `「私はずっと、給付金の請求を遅らせる政府の奨励には少し懐疑的でした。」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/its-heartbreaking-my-brother-claimed-social-security-at-70-he-died-from-cancer-after-one-payment-why-wait-to-claim-491669b6?mod=mw_rss_topstories",
    publishedAt: "2026-07-11T18:46:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-87957694",
    readTime: 2,
  },
  {
    id: "is-it-better-to-spend-my-savings-now-so-6d68d505",
    title: "Is it better to spend my savings now so I can delay taking Social Security? How do I choose?",
    titleJa: "社会保障の加入を遅らせるために、今貯蓄を使い果たしたほうが良いでしょうか?どうやって選べばいいのでしょうか？",
    summaryJa: "「もっと早くに主張することで、ポートフォリオをより多く保存し、それらの資産を複利化し続けることができました。」",
    bodyOriginal: `“By claiming earlier, I could preserve more of my portfolio and allow those assets to continue compounding.”`,
    bodyJa: `「もっと早くに主張することで、ポートフォリオをより多く保存し、それらの資産を複利化し続けることができました。」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/my-retirement-savings-will-suffer-if-i-delay-social-security-how-do-i-choose-between-the-two-a85273e3?mod=mw_rss_topstories",
    publishedAt: "2026-07-11T16:44:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-61885275",
    readTime: 2,
  },
  {
    id: "your-data-built-the-ai-boom-but-big-tech-75dbfa11",
    title: "Your data built the AI boom — but Big Tech is pocketing 100% of the equity",
    titleJa: "あなたのデータが AI ブームを築きました – しかしビッグテックが株式の 100% を私腹化しています",
    summaryJa: "AI の富のあなたの分け前は権利であり、施しではありません。お金を取り戻す方法は次のとおりです。",
    bodyOriginal: `Your share of the AI wealth is a right — not a handout. Here is how we claw back our money.`,
    bodyJa: `AI の富のあなたの分け前は権利であり、施しではありません。お金を取り戻す方法は次のとおりです。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/your-share-of-the-ai-wealth-is-a-right-not-a-handout-here-is-how-we-claw-back-our-money-7454b0e0?mod=mw_rss_topstories",
    publishedAt: "2026-07-11T16:01:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-97773361",
    readTime: 2,
  },
  {
    id: "only-5-of-u-s-adults-can-ace-this-8-ques-48aae2ba",
    title: "Only 5% of U.S. adults can ace this 8-question financial-literacy test. Can you?",
    titleJa: "この 8 つの質問による金融リテラシー テストに合格できるのは、米国の成人のわずか 5% です。できますか？",
    summaryJa: "金融リテラシーはここ 10 年で最低水準に達し、銀行口座は壊滅的な打撃を受けています。",
    bodyOriginal: `Financial literacy just hit a 10-year low — and it is devastating bank accounts.`,
    bodyJa: `金融リテラシーはここ 10 年で最低水準に達し、銀行口座は壊滅的な打撃を受けています。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/only-5-of-u-s-adults-can-ace-this-8-question-financial-literacy-test-can-you-93a57cc6?mod=mw_rss_topstories",
    publishedAt: "2026-07-11T16:00:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-73352954",
    readTime: 2,
  },
  {
    id: "you-want-a-portfolio-that-matches-your-m-ad15a8cb",
    title: "You want a portfolio that matches your morals. Your retirement plan might disagree.",
    titleJa: "自分の道徳に合ったポートフォリオが必要です。あなたの退職計画は同意できないかもしれません。",
    summaryJa: "より多くの投資家が自分のお金に自分の価値観を反映したいと考えています。それは正義のように感じますが、現実はもっと厄介です。",
    bodyOriginal: `More investors want their money to reflect their values. It feels righteous — but the reality is a lot messier.`,
    bodyJa: `より多くの投資家が自分のお金に自分の価値観を反映したいと考えています。それは正義のように感じますが、現実はもっと厄介です。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/you-want-a-portfolio-that-matches-your-morals-but-that-could-sink-your-retirement-plans-0b6fb5bf?mod=mw_rss_topstories",
    publishedAt: "2026-07-11T16:00:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-60464887",
    readTime: 2,
  },
  {
    id: "these-underperforming-trades-could-yield-41c27c0e",
    title: "These underperforming trades could yield big returns over next six months",
    titleJa: "これらのパフォーマンスの低い取引は、今後6か月間で大きな利益を生み出す可能性があります",
    summaryJa: "見落とされている市場エリアには、今年の後半にバナーが表示される可能性があります。ETFアクションの共同創設者マイク・エイキンス氏は投資家に対し、主要な人工知能株と比べてパフォーマンスが低いグループへのエクスポージャーを増やすよう奨励している。",
    bodyOriginal: `Overlooked market areas may have a banner second half of the year.
ETF Action co-founder Mike Akins is encouraging investors to boost exposure to groups that underperformed compared with major artificial intelligence stocks.
He told "ETF Edge" this week that his list includes software and cloud computing names. Many have fallen from "nosebleed valuations" and have "very strong growth scenarios."
"These companies prove that 'yes,' we still do need software to do our day-to-day jobs," Akins said.
He is also flagging disruptive technology as a strong buy for the next six months.
"It's a thematic strategy," Akins noted. "It kind of plays a little bit further down market into the mid [and] small-cap range. Those names have been kind of left behind in this mega-cap, semiconductor-led market …. Those could do quite well when you look through to their earnings growth estimates by the analysts. It's just a pretty rosy set up."
Akins, who was head of exchange-traded funds at ALPS before co-launching his independent financial tech and research firm, also highlights opportunities among the underperforming "Magnificent Seven" index, which is comprised of Nvidia, Microsoft, Alphabet, Amazon, Meta, Apple and Tesla.
"Who [would have] thought that Mag 7 was going to be flat year-to-date at the halfway market," said Akins, who considers the group as a sound catch-up trade for the year's second half.
The Magnificent Seven underperformed the Nasdaq-100 in the first half of the year, falling more than 2% while the Nasdaq-100 gained nearly 20%.
The momentum may already be materializing. In the early trading days of the year's second half, the Magnificent Seven index is up 5% while the Nasdaq-100 is 1% lower as of Friday's close.
Plus, Akins expects small and mid-cap companies as favorable spots going into 2027, noting how small-caps in particular have performed incredibly well this year.
"All of the down-market names are really starting to catch up," he said. "I think you could see that continuing throughout the year — not just from growing earnings [and] growing revenue, but also from an expansion of multiples that [have been] extremely depressed over the last several years."
So far this year, the Russell 2000 index, which tracks small-cap stocks, is up almost 20% while the broader S&P 500 is up almost 11%.`,
    bodyJa: `見落とされている市場エリアには、今年の後半にバナーが表示される可能性があります。
ETFアクションの共同創設者マイク・エイキンス氏は投資家に対し、主要な人工知能株と比べてパフォーマンスが低いグループへのエクスポージャーを増やすよう奨励している。
同氏は今週「ETF Edge」に対し、自分のリストにはソフトウェアやクラウドコンピューティングの名前が含まれていると語った。多くの企業は「鼻血のようなバリュエーション」から下落しており、「非常に強力な成長シナリオ」を掲げている。
「これらの企業は、日常業務を遂行するために依然としてソフトウェアが必要であるということを証明しています」とエイキンス氏は語った。
同氏はまた、破壊的テクノロジーを今後6カ月間の有力な買い材料として挙げている。
「これはテーマ別の戦略だ」とエイキンス氏は指摘する。 「市場のもう少し下の方、中小型株のレンジに位置するような感じだ。これらの銘柄は、このメガキャップの半導体主導の市場では取り残されているようなところがある…。アナリストによる利益成長予測に目を通せば、これらの銘柄はかなり好成績を収める可能性がある。かなりバラ色の設定だ。」
独立した金融テクノロジー・調査会社を共同立ち上げる前はALPSで上場投資信託の責任者を務めていたエイキンス氏は、エヌビディア、マイクロソフト、アルファベット、アマゾン、メタ、アップル、テスラで構成される「マグニフィセント・セブン」指数の低迷銘柄の中のチャンスも強調している。
「マグ7が中間相場で年初来横ばいになるとは誰が予想したでしょうか」と同グループを今年下半期の確実な追い上げトレードと考えているエイキンス氏は語った。
マグニフィセント・セブンは今年上半期にナスダック100をアンダーパフォームし、ナスダック100が20％近く上昇する一方で2％以上下落した。
その勢いはすでに現実化しつつあるのかもしれない。今年下半期の取引序盤、金曜終値時点でマグニフィセントセブン指数は５％上昇、ナスダック１００指数は１％安となっている。
さらに、エイキンス氏は、2027年に向けて中小型株が有利なスポットになると予想しており、特に小型株が今年信じられないほど好成績を収めたことを指摘している。
「ダウンマーケットの名前はすべて、本当に追いつき始めています」と彼は言いました。 「この傾向が年間を通して続いていることがおわかりいただけると思います。利益の増加や売上高の増加だけでなく、過去数年間で非常に落ち込んでいた倍率の拡大からも同様です。」
今年これまでのところ、小型株に連動するラッセル2000指数は約20％上昇し、より幅広いS&P500指数は約11％上昇している。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/11/mag-7-and-software-could-boost-portfolio-in-second-half-etf-action.html",
    publishedAt: "2026-07-11T15:00:01+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "new-housing-law-targets-affordability-wh-92b127ff",
    title: "New housing law targets affordability — what it means for homebuyers and sellers",
    titleJa: "新しい住宅法は手頃な価格をターゲットにしています – それが住宅購入者と販売者にとって何を意味するか",
    summaryJa: "米国の住宅供給を増やし、手頃な価格を改善することを目的とした超党派の法案が成立したが、専門家らは、住宅購入者と販売者は迅速な救済を期待すべきではないと主張する。21世紀ROAD to Housing法は、ドナルド・トランプ大統領が期限内に署名も拒否権も発動しなかった後、土曜日に自動的に成立した。この法律は、住宅建設の促進、融資へのアクセスの拡大、大規模な機関投資家による購入の制限を目的とした数十の住宅対策を組み合わせたものである。",
    bodyOriginal: `Bipartisan legislation intended to increase the U.S. housing supply and improve affordability is now law — but experts say homebuyers and sellers shouldn't expect fast relief.
The 21st Century ROAD to Housing Act automatically became law on Saturday after President Donald Trump neither signed it nor vetoed it within a set timeframe. The legislation combines dozens of housing measures aimed at encouraging home construction, expanding access to financing and restricting purchases by large institutional investors.
The legislation "will help expand the nation's housing supply by reducing regulatory barriers and encouraging local governments to reform zoning and land-use policies that have limited home building," said Bill Owens, chairman of the National Association of Home Builders, in a statement after the measure cleared Congress on June 23.
Housing affordability continues to plague buyers
The new law arrives as housing affordability remains strained. Home prices are near record highs and 30-year fixed mortgage rates continue to hover above 6.5%.
The median price of an existing home in the U.S. reached $440,600 in June, up 49.2% from June 2020, according to data from the National Association of Realtors. There's also an estimated housing supply deficit of about 4 million homes, according to Realtor.com.
"This bill directly targets some of the biggest drivers of housing costs: land-use restrictions, permitting delays, financing constraints and regulatory hurdles," said Selma Hepp, chief economist at Cotality, a real estate data company.
"Unfortunately, homebuyers should not expect immediate relief," Hepp said, adding that "housing development takes time and many of the benefits would likely materialize gradually rather than overnight."
Limits on institutional investor home purchases
Among the new law's many technical and policy changes, several provisions are likely to matter most to consumers.
A key provision would prohibit large institutional investors that own at least 350 single-family homes from purchasing additional single-family homes, subject to several exceptions. Those exceptions include certain build-to-rent and renovate-to-rent projects, as well as programs that help renters build credit and eventually purchase homes.
Supporters say the measure could help limit competition from large corporate buyers in some housing markets, particularly in parts of the Sun Belt where institutional investors have been blamed for contributing to higher home prices. Economists, however, say institutional investors' purchase activity remains relatively light even in many of those markets.
Broader definition of 'manufactured home'
Another provision aims to reduce barriers to manufactured housing and encourage broader use of factory-built homes, which are often among the least expensive paths to homeownership.
Specifically, the bill expands the federal definition of "manufactured home" to include houses that are built without a permanent steel chassis, the metal frame under manufactured and mobile homes that enabled easy transportation with a tow truck. However, few homes are moved after being placed, according to the Lincoln Institute of Land Policy.
Among other benefits, the chassis requirement could reduce the cost of a manufactured home by $5,000 to $10,000, which could put homeownership within reach for more families, according to the Niskanen Center, a nonpartisan think tank.
Pilot program aims to make small mortgages accessible
The legislation also creates a four-year pilot program to expand the availability of small mortgages — those under $100,000 — which some lenders avoid due to compliance costs. Supporters say improving access to smaller loans could help buyers in lower-cost markets and those purchasing less expensive homes.
The pilot program includes paying lenders a subsidy to originate those smaller mortgages and providing borrower grants for down payments and closing costs.
Overall, the legislation may help the housing supply "more at the margin, and certainly not overnight," said John Walkup, co-founder at UrbanDigs, a New York City real estate pricing intelligence platform.
Housing supply is ultimately a local issue, Walkup said.
"It's a complicated calculation that ropes in construction costs, labor availability, land prices, infrastructure constraints, local zoning rules, and community opposition that determines how much housing gets built," he said. "Legislation can help create incentives and remove obstacles, but it can't single-handedly solve a housing shortage that has been building for years."
Trump had canceled a June 24 signing ceremony for the bipartisan bill hours before the event, saying he would not sign it until Congress passes the SAVE America Act, a Republican-backed election measure that would require proof of U.S. citizenship to register to vote. The move caught lawmakers in both parties off guard and delayed enactment of the legislation.
House Speaker Mike Johnson, R-La., sent the housing bill to the White House on June 29, starting the clock for the president to take action. After 10 calendar days — excluding Sundays — because Trump neither vetoed the bill nor signed it, the measure became law without his signature.`,
    bodyJa: `米国の住宅供給を増やし、手頃な価格を改善することを目的とした超党派の法案が成立したが、専門家らは、住宅購入者と販売者は迅速な救済を期待すべきではないと主張する。
21世紀ROAD to Housing法は、ドナルド・トランプ大統領が期限内に署名も拒否権も発動しなかった後、土曜日に自動的に成立した。この法律は、住宅建設の促進、融資へのアクセスの拡大、大規模な機関投資家による購入の制限を目的とした数十の住宅対策を組み合わせたものである。
全米住宅建設業者協会のビル・オーエンズ会長は、法案が6月23日に議会を通過した後の声明で、この法案は「規制の障壁を軽減し、地方自治体に住宅建設を制限しているゾーニングや土地利用政策の改革を奨励することで、国内の住宅供給を拡大するのに役立つだろう」と述べた。
住宅の手頃な価格が引き続き購入者を悩ませている
住宅の手頃な価格が依然として厳しい中、新法が施行される。住宅価格は過去最高値付近にあり、30年固定住宅ローン金利は引き続き6.5％を超えて推移している。
全米不動産業者協会のデータによると、6月の米国の中古住宅価格の中央値は44万600ドルに達し、2020年6月比49.2％上昇した。 Realtor.comによると、推定約400万戸の住宅供給不足もあるという。
不動産データ会社コタリティのチーフエコノミスト、セルマ・ヘップ氏は「この法案は、土地利用制限、許可の遅れ、資金調達の制約、規制上のハードルといった、住宅コストを押し上げる最大の要因のいくつかを直接ターゲットにしている」と述べた。
ヘップ氏は「残念ながら、住宅購入者は即時の救済を期待すべきではない」とし、「住宅開発には時間がかかり、恩恵の多くは一夜にしてではなく徐々に実現する可能性が高い」と付け加えた。
機関投資家の住宅購入制限
新法の多くの技術的および政策的変更の中で、消費者にとって最も重要な規定がいくつかあると考えられます。
重要な条項は、少なくとも350戸の一戸建て住宅を所有する大手機関投資家が、いくつかの例外を除き、追加の一戸建て住宅を購入することを禁止するものである。これらの例外には、特定の建築して賃貸するプロジェクトや改修して賃貸するプロジェクト、賃貸人が信用を築き、最終的には住宅を購入するのを支援するプログラムが含まれます。
支持者らは、この措置が一部の住宅市場、特に機関投資家が住宅価格高騰の一因とされているサンベルト地域の一部地域で、大企業の購入者との競争を制限するのに役立つ可能性があると主張している。しかしエコノミストらは、こうした市場の多くでも機関投資家の購入活動は依然として比較的軽いと指摘する。
「住宅」の広義の定義
別の条項は、住宅所有への障壁を減らし、多くの場合、住宅所有への最も安価な手段の一つである工場で建てられた住宅の広範な利用を奨励することを目的としています。
具体的には、この法案は連邦政府による「製造住宅」の定義を拡大し、恒久的な鋼製シャーシを使用せずに建設された住宅、製造中の金属フレーム、およびレッカー車で簡単に輸送できる移動住宅を含むようにした。しかし、リンカーン土地政策研究所によると、設置後に移転される住宅はほとんどありません。
超党派のシンクタンク、ニスカネンセンターによると、とりわけ、シャーシ要件により、製造住宅のコストが5,000ドルから10,000ドル削減される可能性があり、これによりより多くの家族が住宅所有に手が届くようになる可能性があるという。
パイロットプログラムは少額の住宅ローンを利用できるようにすることを目的としています
この法案はまた、一部の貸し手はコンプライアンス費用を理由に敬遠している少額住宅ローン（10万ドル未満）の利用可能性を拡大するための4年間の試験プログラムも創設している。支持者らは、少額ローンへのアクセスを改善することで、低コスト市場の購入者やより安価な住宅を購入する購入者を助けることができると主張している。
試験的プログラムには、こうした小規模住宅ローンを組成するための補助金を貸し手に支払うことと、頭金とクロージングコストに対して借り手に補助金を提供することが含まれる。
ニューヨーク市の不動産価格インテリジェンスプラットフォーム、アーバンディグスの共同創設者ジョン・ウォークアップ氏は、全体的に見て、この法案は住宅供給を「よりぎりぎりで、決して一夜にしてではない」助けになる可能性があると述べた。
ウォークアップ氏は、住宅供給は最終的には地域の問題であると述べた。
同氏は、「建設コスト、労働力の確保、地価、インフラの制約、地域の区画規則、地域住民の反対などが絡み合った複雑な計算で、どれだけの住宅が建設されるかが決まる」と述べた。 「法律はインセンティブを生み出し、障害を取り除くのに役立ちますが、何年も続いている住宅不足を単独で解決することはできません。」
トランプ大統領は、6月24日の超党派法案の署名式をその数時間前にキャンセルし、有権者登録に米国籍の証明を求める共和党支持の選挙対策法案「SAVE America Act」が議会で可決されるまで署名しないと述べた。この動きに両党の議員は不意を突かれ、法案の制定が遅れた。
マイク・ジョンソン下院議長（共和党、ルイジアナ州）は6月29日に住宅法案をホワイトハウスに送付し、大統領が行動を起こすための時計を開始した。日曜日を除く10暦日後、トランプ大統領が法案に拒否権を発動せず、署名もしなかったため、この法案は大統領の署名なしで成立した。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/11/21st-century-road-to-housing-act-homebuyers-sellers.html",
    publishedAt: "2026-07-11T13:41:13+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 6,
  },
  {
    id: "berkshire-hathaway-gains-ground-but-stil-674a04a7",
    title: "Berkshire Hathaway gains ground, but still trails the S&P 500 as '26 enters second half",
    titleJa: "バークシャー・ハサウェイは勢いを増すも、26年後半に入りS&P 500には依然として及ばない",
    summaryJa: "(これはウォーレン・バフェット・ウォッチのニュースレター、ウォーレン・バフェットとバークシャー・ハサウェイに関するニュースと分析です。ここからサインアップすると、毎週金曜日の夜に受信箱で受け取ることができます。)バークシャーは順位を上げるも、26年後半に入りS&Pには依然として劣る",
    bodyOriginal: `(This is the Warren Buffett Watch newsletter, news and analysis on all things Warren Buffett and Berkshire Hathaway. You can sign up here to receive it every Friday evening in your inbox.)
Berkshire gains ground but still trails S&P as '26 enters second half
With 2026 a bit more than half over, Berkshire Hathaway's B shares are down 1.8% year-to-date and 12.4 percentage points behind the S&P 500's 10.7% gain. (Including dividends, the S&P is up 11.4% giving it a 13.1 percentage point lead).
A strong June for Berkshire erased almost a third of its 17.5 percentage point deficit as of June 1, its biggest losing margin of the year so far.
Even with that June bump, however, it's been a tough Q2 (+ 10 days) for Berkshire with a gain of a bit more than 3% versus the benchmark's strong tech-driven 16% advance, totally erasing what was a slim 1.8 percentage point Berkshire lead at the end of March.
Last year, Berkshire underperformed the S&P by 5.5 percentage points excluding dividends. The deficit was 7.0 percentage points with dividends included.
Berkshire execs spotted at exclusive Sun Valley conference
Berkshire Hathaway CEO Greg Abel and portfolio manager Ted Weschler aren't featured in the Forbes article on "Sun Valley's Billionaire Summer Camp" now underway in Idaho.
But they are on the magazine's list of attendees and photos from CNBC's David Grogan and Brendan McDermid of Reuters provide visual evidence they are present at the annual Allen & Co. invitation-only gathering of moguls, along with names like Jeff Bezos, Mark Zuckerberg, and Sam Altman.
Warren Buffett went to Sun Valley for decades but has not attended the last few years.
In 1999, at the height of the dotcom craze, he gave a notable speech at the conference warning that while the internet would be transformative, investors were expecting too much and were bound to be disappointed.
BUFFETT & BERKSHIRE AROUND THE INTERNET
Some links may require a subscription:
- Financial Express (India): Warren Buffett vs. Indian grandmothers: Who wins the great gold debate
HIGHLIGHTS FROM CNBC'S BUFFETT ARCHIVE
AI could make financial scams a 'growth industry' (2024)
Warren Buffett describes seeing a convincing AI-generated video of himself that has him worried the technology will make financial scams much more effective.
AUDIENCE MEMBER: How do you think about the role of technological advances, especially generative AI, on more traditional industries? Thank you...
WARREN BUFFETT: I don't know anything about AI. But I do — I do have — I don't — that doesn't mean I deny its existence or importance or anything of the sort.
And last year I said, you know, that we let the genie out of the bottle when we developed nuclear weapons, and that genie has been doing some terrible things lately.
And the power of that genie is what, you know, scares the hell out of me. And on, the other hand, I don't know any way to get the genie back in the bottle.
And AI is somewhat similar. It's out — it's part-way out of the bottle. And it's enormously important, and it's going to be done by somebody...
Now AI, I had one experience that does make me a little nervous. And I'll just explain it.
Very recently — fairly recently — I saw an image in front of my eyes on the screen, and it was me, and it was my voice and wearing the kind of clothes I wear. And my wife or my daughter wouldn't have been able to detect any difference. And it was delivering a message that no way came from me.
So — it — when you think of the potential for scamming people, if you can reproduce images that I can't even tell, that say, I need money, you know, it's your daughter, I've just had a car crash. I need fifty thousand dollars wired.
I mean, scamming has always been part of the American scene. But this would make me, if I was interested in investing in scamming, it's going to be the growth industry of all time.
And it's enabled in a way — you know, obviously AI has potential for good things, too, but I don't know how you — based on the one I saw recently, I practically would send money to myself over in some crazy country. (Laughter)
So I don't have any advice on how the world handles it because I don't think we know how to handle what we did with the nuclear genie.
But I do think, as someone who doesn't understand a damn thing about it, that it is — it has enormous potential for good and enormous potential for harm, and I just don't know how that plays out.
BERKSHIRE STOCK WATCH
Four weeks
Twelve months
BRK.A stock price: $739,750.00
BRK.B stock price: $493.71
BRK.B P/E (TTM): 14.70
Berkshire market capitalization: $1,064,452,706,579
Berkshire Cash as of March 31: $397.4 billion (Up 6.5% from Dec. 31)
Excluding Rail Cash and Subtracting T-Bills Payable: $380.2 billion (Up 3.0% from Dec. 31)
Berkshire repurchased $234 million of its shares in Q1 2026.
BERKSHIRE'S TOP EQUITY HOLDINGS - Jul. 10, 2026
Berkshire's top holdings of disclosed publicly traded stocks in the U.S. and Japan, by market value, based on the latest closing prices.
Holdings are as of March 31, 2026, as reported in Berkshire Hathaway's 13F filing on May 15, 2026, except for:
- Alphabet, which includes the $10 billion in shares that Berkshire agreed to buy directly from the company, as announced on June 1, 2026. Berkshire has not yet formally disclosed whether the transaction has been completed. The entry is a combination of Class A and Class C Alphabet shares. The market price is a weighted average of the prices of the two classes.
- Mitsubishi, which is as of April 30, 2026
The full list of holdings and current market values is available from CNBC.com's Berkshire Hathaway Portfolio Tracker.
QUESTIONS OR COMMENTS
Please send any questions or comments about the newsletter to me at alex.crippen@nbcuni.com. (Sorry, but we don't forward questions or comments to Buffett himself.)
If you aren't already subscribed to this newsletter, you can sign up here.
Also, Buffett's annual letters to shareholders are highly recommended reading. There are collected here on Berkshire's website.
-- Alex Crippen, Editor, Warren Buffett Watch`,
    bodyJa: `(これはウォーレン・バフェット・ウォッチのニュースレター、ウォーレン・バフェットとバークシャー・ハサウェイに関するニュースと分析です。ここからサインアップすると、毎週金曜日の夜に受信箱で受け取ることができます。)
バークシャーは順位を上げるも、26年後半に入りS&Pには依然として劣る
2026年も半分を少し過ぎた現在、バークシャー・ハサウェイのB株は年初から1.8％下落し、S&P500種の10.7％上昇とは12.4ポイント差となっている。 (配当を含めると、S&P は 11.4% 上昇し、13.1% ポイントの差をつけています)。
バークシャーの6月の好調により、6月1日時点で17.5％ポイントの赤字のほぼ3分の1が解消され、これまでのところ今年最大の赤字となった。
しかし、6月の急騰にもかかわらず、バークシャーにとって第2四半期（+10日）は厳しいもので、ベンチマークのハイテク主導による16％の躍進に対して3％強の上昇となり、3月末にはわずか1.8％ポイントだったバークシャーのリードが完全に消え去った。
昨年、バークシャーは配当を除くとＳ＆Ｐを５．５％ポイント下回った。配当を含めた赤字は７．０％ポイントだった。
バークシャーの幹部らがサンバレーの独占カンファレンスで目撃される
バークシャー・ハサウェイのグレッグ・エイベルCEOとポートフォリオマネージャーのテッド・ウェシュラー氏は、アイダホ州で現在開催中の「サンバレーの億万長者サマーキャンプ」に関するフォーブスの記事には掲載されていない。
しかし、彼らは同誌の出席者リストに載っており、CNBCのデービッド・グローガン氏とロイターのブレンダン・マクダーミッド氏の写真は、ジェフ・ベゾス氏、マーク・ザッカーバーグ氏、サム・アルトマン氏らの名前とともに、アレン・アンド・カンパニーが主催する毎年恒例の招待者限定の大御所の集まりに彼らが出席しているという視覚的な証拠を提供している。
ウォーレン・バフェットは何十年もサンバレーに行っていたが、ここ数年は参加していない。
1999 年、ドットコムブームが最高潮に達していたとき、同氏はカンファレンスで注目すべきスピーチを行い、インターネットは変革をもたらすものの、投資家は期待しすぎており、必ず失望するだろうと警告した。
インターネット上のバフェットとバークシャー
一部のリンクには購読が必要な場合があります。
- Financial Express (インド): ウォーレン・バフェット vs. インドのおばあさん: 金に関する大論争で誰が勝つか
CNBC のバフェット アーカイブのハイライト
AI は金融詐欺を「成長産業」にする可能性がある (2024)
ウォーレン・バフェット氏は、AI が生成した説得力のある自分のビデオを見て、このテクノロジーにより金融詐欺がさらに効果的に行われるのではないかと心配になったと述べています。
聴衆: 技術の進歩、特に生成型 AI がより伝統的な産業に果たす役割についてどう思いますか?ありがとう...
ウォーレン・バフェット: AI については何も知りません。しかし、それは私がその存在や重要性、あるいはその類のものを否定するという意味ではありません。
そして去年私は、核兵器を開発したときに魔神を瓶から出してしまった、そして魔神は最近ひどいことをしていると言いました。
そして、その魔神の力が、私を本当に怖がらせているのです。その一方で、魔神を瓶に戻す方法もわかりません。
AIもある程度似ています。ボトルから途中まで出ています。そしてそれは非常に重要であり、それは誰かによって行われるでしょう...
さて、AIさん、私は少し緊張する経験をしました。そして、それを説明します。
ごく最近、かなり最近、スクリーン上の目の前にある画像を見ました。それは私であり、私の声であり、私が着ているような服を着ていたのです。そして私の妻や娘は違いを見つけることができなかったでしょう。そしてそれは、私からは決して出てこないメッセージを伝えていました。
それで、つまり、人を騙す可能性について考えたとき、私には分からないような画像を再現できれば、つまり、「お金が必要だ、あなたの娘だよ、今自動車事故に遭ったんだ」などと言うのです。 5万ドルを送金する必要があります。
つまり、詐欺は常にアメリカ社会の一部でした。しかし、もし私が詐欺への投資に興味があるとしたら、それは史上最高の成長産業になるでしょう。
そして、それはある意味で有効になっています - ご存知のとおり、明らかに AI には良いことをもたらす可能性もありますが、どうやってかはわかりませんが - 最近見たものに基づいて、私は実際にどこか狂った国にいる自分自身に送金するでしょう。 （笑）
ですから、世界がこの問題にどう対処するかについて私にはアドバイスはありません。なぜなら、私たちが核の魔神に対して行ったことにどう対処すべきか私たちは知らないと思うからです。
しかし、それについてまったく理解していない人間として、私はそれがそうであると思います—それは良いことをもたらす可能性と害をもたらす可能性が非常に高く、それがどのように展開するかはわかりません。
バークシャー株式時計
4週間
12ヶ月
BRK.A 株価: $739,750.00
BRK.Bの株価：493.71ドル
BRK.B PER (TTM): 14.70
バークシャーの時価総額: 1,064,452,706,579ドル
3月31日時点のバークシャーキャッシュ：3,974億ドル（12月31日比6.5％増）
鉄道現金と未払国庫短期証券を除く：3,802億ドル（12月31日から3.0％増加）
バークシャーは2026年第1四半期に2億3400万ドルの自社株を買い戻した。
バークシャーのトップ株式保有 - 2026 年 7 月 10 日
最新の終値に基づいた、米国および日本の公開株式の時価ベースでのバークシャーの保有高上位。
保有資産は、2026年5月15日のバークシャー・ハサウェイの13階提出書類で報告されているように、2026年3月31日現在である。ただし、以下の場合を除く。
- アルファベットには、2026年6月1日に発表されたように、バークシャーが同社から直接購入することに同意した100億ドルの株式が含まれる。バークシャーは、取引が完了したかどうかをまだ正式に明らかにしていない。エントリーはクラス A とクラス C のアルファベット株式の組み合わせです。市場価格は、2 つのクラスの価格の加重平均です。
- 三菱、2026 年 4 月 30 日現在
保有銘柄と現在の市場価値の完全なリストは、CNBC.com のバークシャー・ハサウェイ ポートフォリオ トラッカーから入手できます。
質問またはコメント
ニュースレターに関するご質問やご意見は、alex.crippen@nbcuni.com までお送りください。 (申し訳ありませんが、バフェット氏自身に質問やコメントを転送することはありません。)
このニュースレターをまだ購読していない場合は、ここから登録できます。
また、バフェット氏が株主に宛てた年次書簡も強くお勧めします。ここバークシャーのウェブサイトに集められています。
-- アレックス・クリッペン、ウォーレン・バフェット・ウォッチ編集者`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/11/berkshire-hathaway-gains-ground-but-still-trails-the-sp-500-as-26-enters-second-half.html",
    publishedAt: "2026-07-11T13:07:41+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 8,
  },
  {
    id: "trump-threatens-to-decimate-iran-if-it-t-cdbcd8f4",
    title: "Trump threatens to 'decimate' Iran if it tries to kill him, as Treasury sanctions alleged Iranian financier",
    titleJa: "トランプ大統領、イランが自分を殺そうとするならイランを「壊滅させる」と脅迫、財務省制裁でイラン金融業者が主張",
    summaryJa: "米財務省がイラン資本家とされる人物を制裁したことを受け、ドナルド・トランプ大統領は、イランが大統領暗殺の脅しに基づいて行動すれば、イランを「壊滅させて破壊する」と脅した。イラン外相が会談のためオマーンに到着したと伝えられている中、イランは土曜日、新たな金融措置は交戦中の両国が先月締結した予備合意に違反していると述べた。",
    bodyOriginal: `President Donald Trump threatened to "decimate and destroy" Iran if Tehran acts on threats to assassinate him, as the U.S. Treasury Department sanctioned an alleged Iranian financier.
Iran said Saturday that the new financial measure was a violation of the preliminary deal the two warring countries struck last month as its foreign minister reportedly arrived in Oman for talks.
"1000 Missiles are Locked and Loaded and aimed at the Islamic Republic of Iran, with thousands of more to immediately follow, should the Iranian Government act on its threat, pronounced in many corners of the Globe, to assassinate, or attempt to assassinate, the sitting President of the United States of America, in this case, ME!" Trump wrote on Truth Social late Friday U.S. time.
"Orders have already been given, and the U.S. Military is ready, willing, and able, for a one year period of time, subject to extension, to completely decimate and destroy all areas of Iran - PRAISE BE TO ALLAH!," he added.
The Wall Street Journal and other U.S. media reported earlier this week that Israel had shared intelligence about an alleged Iranian plot to assassinate Trump.
According to Reuters, some mourners at the funeral on Thursday of Iran's slain Supreme Leader Ayatollah Ali Khamenei, who was killed in a U.S. airstrike early in the war, carried banners reading: "We Will Kill Trump".
In a post on X, Khamenei's son and successor as Iran's supreme leader, Mojtaba Khamenei, promised to avenge the deaths of those killed in U.S. strikes.
"This vengeance is what our nation is demanding, and this must definitely be done," Mojtaba Khamenei said. He has not been seen in public since the attack on Feb. 28 at the start of the war that killed his father and other family members.
Talks in Oman
Iran's semi-official Tasnim News Agency reported that Iranian Foreign Minister Abbas Araghchi arrived in Oman early Saturday for talks. Oman has been a key mediator in efforts to end the war.
A senior Middle East diplomat with direct knowledge of the talks told MS Now that France and the U.K. are studying proposals drafted by Oman that may allow the charging of navigational fees in the strait of Hormuz, so long as the tolls are not compulsory and have the support of the UN's International Maritime Organization that regulates sea transport.
Shipping traffic through the strait practically ground to a halt after the start of the war, as Iranian forces choked off vital energy supplies from the Middle East, sending oil prices soaring.
Under the interim deal with the U.S., Iran promised safe passage to commercial ships through Hormuz and agreed to not charge tolls for 60 days. In exchange, the U.S. lifted its naval blockade of Iran and temporarily removed sanctions on its oil sales.
But Tehran has insisted in the three weeks since the deal that ships are entitled to safe passage only if they use a northern route through Iran's territorial waters.
The U.S. president's latest verbal salvo came after a day of relative calm following a week of fighting and fears that a fragile ceasefire could be about to break down.
Trump said early Friday said that the United States and Iran have agreed to continue peace talks, even though the ceasefire established by last month's preliminary deal has been scrapped.
In a Truth Social post, Trump claimed that the Islamic Republic "has asked us to continue 'talks'" and that "we have agreed to do so."
"But the United States has stated to them, in no uncertain terms, that the Cease Fire is OVER!" Trump wrote.
Iran's state media channels did not immediately confirm or deny that it had asked to continue negotiations.
'Technical talks'
Trump's early Friday post confirmed a report by MS NOW, citing a U.S. official, that the warring powers will engage in "technical talks" and remain committed to finding solutions despite a return to hostilities.
The U.S. military conducted renewed rounds of offensive strikes against Iran in retaliation for the three commercial vessels transiting the Strait of Hormuz coming under attack. The U.S. Treasury Department subsequently withdrew a waiver that had allowed Iran to sell its oil.
Treasury subsequently stepped up the pressure on Iran with sanctions against an alleged financier it accused of helping new Supreme Leader Mojtaba Khamenei, the son of the late leader Ali Khamenei.
"Following Iran's resumption of attacks on international shipping in the Strait of Hormuz, the U.S. Department of the Treasury's Office of Foreign Assets Control (OFAC) took action against Iranian financial facilitator Ali Ansari (Ansari), who oversees a sprawling global network of assets benefitting Iran's leader—Mojtaba Khamenei—and other regime elites," the department said in a statement.
"The so-called Supreme Leader is hiding in seclusion while his regime crumbles," Treasury Secretary Scott Bessent was quoted as saying in the statement. "Treasury will continue using every tool at its disposal to isolate him and other regime elites from the global financial system. We will preserve these assets for the Iranian people."
Araghchi said the move was a violation of the June memorandum of understanding between the U.S. and Iran.
"Iran has so far kept its word, unlike the so-called U.S. Treasury Secretary who is violating Para 9 of the MoU," Araghchi said in a post on X.
"That violation follows other violations and missteps by the United States. Reality check: There can only be mutual compliance," he added.`,
    bodyJa: `米財務省がイラン資本家とされる人物を制裁したことを受け、ドナルド・トランプ大統領は、イランが大統領暗殺の脅しに基づいて行動すれば、イランを「壊滅させて破壊する」と脅した。
イラン外相が会談のためオマーンに到着したと伝えられている中、イランは土曜日、新たな金融措置は交戦中の両国が先月締結した予備合意に違反していると述べた。
「1000発のミサイルが封鎖され搭載されており、イラン・イスラム共和国に向けられており、地球上の多くの地域で宣言されている現職のアメリカ合衆国大統領、この場合は私を暗殺する、あるいは暗殺を試みるという脅迫にイラン政府が行動した場合には、さらに数千発がただちに追撃される予定だ！」トランプ氏は米国時間金曜日遅く、トゥルース・ソーシャルにこう書いた。
さらに、「命令はすでに下されており、米軍は延長を条件として1年間、イラン全土を完全に破壊し破壊する準備ができており、意欲があり、実行できる。アッラーに讃美あれ！」と付け加えた。
ウォール・ストリート・ジャーナルとその他の米国メディアは今週初め、イスラエルがイランによるトランプ暗殺計画に関する情報を共有していたと報じた。
ロイター通信によると、戦争初期に米国の空爆で殺害されたイラン最高指導者ハメネイ師の木曜日の葬儀では、弔問客の一部が「トランプを殺す」と書かれた横断幕を掲げた。
ハメネイ師の息子でイラン最高指導者の後継者であるモジタバ・ハメネイ師は、Ｘへの投稿で、米国の空爆で亡くなった人々に復讐すると約束した。
モジタバ・ハメネイ師は「この復讐は我が国が求めていることであり、これは必ず行われなければならない」と述べた。戦争が始まった2月28日の攻撃で父親と他の家族が殺害されて以来、彼は公の場に姿を現していない。
オマーンでの会談
イランの半国営タスニム通信は、イランのアッバス・アラグチ外相が会談のため土曜早朝にオマーンに到着したと報じた。オマーンは戦争終結に向けた取り組みにおいて重要な仲介者となっている。
会談を直接知る中東の上級外交官はMSナウに対し、フランスと英国は、通行料金が強制的でなく海上輸送を規制する国連の国際海事機関の支援がある限り、ホルムズ海峡での航行料金の徴収を認める可能性のあるオマーンが草案した提案を検討していると語った。
戦争開始後、イラン軍が中東からの重要なエネルギー供給を遮断し、原油価格が高騰したため、海峡を通る船舶交通は事実上停止した。
米国との暫定合意に基づき、イランはホルムズを商船が安全に航行できることを約束し、60日間通行料を徴収しないことに同意した。その見返りとして、米国はイランに対する海上封鎖を解除し、石油販売に対する制裁を一時的に解除した。
しかしイラン政府は合意以来3週間、船舶がイラン領海を通る北方航路を使用する場合にのみ安全に航行する権利があると主張してきた。
米国大統領の最新の口頭一斉射撃は、1週間にわたる戦闘と脆弱な停戦が崩壊しつつあるのではないかとの懸念が続いた後、比較的平穏な一日が続いた後に行われた。
トランプ大統領は金曜日早朝、先月の予備合意によって確立された停戦は破棄されたものの、米国とイランは和平交渉を継続することで合意したと述べた。
トランプ大統領はトゥルース・ソーシャルへの投稿で、イスラム共和国が「我々に『対話』を継続するよう要請してきた」とし、「我々はそうすることに同意した」と主張した。
「しかし、米国は彼らに対し、停戦は終わったと明確な言葉で述べた。」トランプ氏は書いた。
イラン国営メディアは、イランが交渉継続を求めたことについて直ちに肯定も否定もしなかった。
「技術的な話」
トランプ大統領の金曜早朝の投稿は、米国当局者の話として、交戦中両国が「技術的な協議」を行い、敵対行為が再開されたとしても解決策を見つけることに引き続き尽力するというMS NOWの報道を確認した。
米軍は、ホルムズ海峡を通過中の商船３隻が攻撃を受けた報復として、イランに対する新たな攻撃を実施した。その後、米国財務省はイランの石油販売を許可していた免除を撤回した。
その後、財務省はイランへの圧力を強化し、故ハメネイ師の息子で新最高指導者モジタバ・ハメネイ師を支援した疑いのある金融業者に対する制裁を強化した。
「イランがホルムズ海峡で国際船舶への攻撃を再開したことを受け、米国財務省外国資産管理局（OFAC）は、イランの指導者モジタバ・ハメネイ師や他の政権エリートに利益をもたらす広大な世界的資産ネットワークを監督するイラン金融仲介者アリ・アンサリ氏に対して措置を講じた」と同省は声明で述べた。
スコット・ベッセント財務長官は声明で「いわゆる最高指導者は政権が崩壊する間、隠遁している」と述べたという。 「財務省は今後もあらゆる手段を駆使して同氏や他の政権エリートを世界金融システムから孤立させるだろう。我々はイラン国民のためにこれらの資産を保全するだろう。」
アラグチ氏は、この措置は6月に米国とイランの間で締結された覚書に違反していると述べた。
アラグチ氏はXへの投稿で、「覚書第9項に違反しているいわゆる米国財務長官とは異なり、イランはこれまでのところ約束を守っている」と述べた。
「この違反は米国による他の違反や失策に続くものである。現実確認：相互遵守しかあり得ない」と同氏は付け加えた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/11/trump-threat.html",
    publishedAt: "2026-07-11T12:51:50+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 6,
  },
];

export function getArticleById(id: string): Article | undefined {
  return articles.find((a) => a.id === id);
}

export function getArticlesByCategory(category?: string): Article[] {
  if (!category || category === "すべて") return articles;
  return articles.filter((a) => a.category === category);
}

export function getCategories(): string[] {
  const cats = new Set(articles.map((a) => a.category));
  return ["すべて", ...Array.from(cats)];
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
