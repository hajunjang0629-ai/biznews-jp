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
    id: "fed-rate-hold-2025",
    title: "Federal Reserve Holds Rates Steady, Signals One Cut Later This Year",
    titleJa: "米連邦準備制度理事会、金利据え置き──年内1回の利下げを示唆",
    summaryJa:
      "米連邦準備制度理事会（FRB）は政策金利を4.25〜4.50%の範囲で据え置きました。インフレが目標の2%に向かって緩やかに低下している一方、雇用市場は依然として堅調であると判断しています。パウエル議長は「データに依存した姿勢を維持する」と述べ、年内に1回の利下げの可能性を示唆しました。市場は9月の利下げを織り込み始めており、長期金利は小幅に下落しました。企業は資金調達コストの安定を歓迎する一方、住宅ローン金利の高止まりが不動産市場に引き続き圧力をかけています。",
    bodyOriginal: `The Federal Reserve kept its benchmark interest rate unchanged at 4.25% to 4.50% on Wednesday, extending a pause that began late last year as policymakers assess whether inflation is sustainably moving toward their 2% target.

In a statement following a two-day meeting, the central bank noted that economic activity has been expanding at a solid pace, while job gains have remained robust and the unemployment rate has stayed low. Officials acknowledged that inflation has eased over the past year but remains somewhat elevated.

Chair Jerome Powell told reporters that the Fed is "not in a hurry" to adjust rates, emphasizing that each decision will depend on incoming economic data. "We want to see more evidence that inflation is moving sustainably toward 2% before we consider further rate cuts," Powell said.

Markets had widely expected the hold, but traders shifted bets toward a September rate cut after Powell's comments. The S&P 500 rose 0.4% following the announcement, while the 10-year Treasury yield fell to 4.18%.

Corporate borrowers welcomed the stability. "Predictable financing costs help us plan capital expenditures," said the CFO of a major industrial firm. However, mortgage rates near 7% continue to weigh on the housing market, with existing home sales falling 2.1% last month.

Analysts at Goldman Sachs now forecast one 25-basis-point cut in 2025, down from two cuts projected earlier. The next policy meeting is scheduled for late July.`,
    bodyJa: `米連邦準備制度理事会（FRB）は水曜日、政策金利を4.25%から4.50%の範囲で据え置きました。インフレが持続的に2%の目標に向かって動いているかどうかを政策当局が評価する中、昨年後半から続く金利据え置きが延長されました。

2日間の会合後に発表された声明で、中央銀行は経済活動が堅調なペースで拡大し続けていること、雇用の増加が力強く続き、失業率が低い水準を維持していることを指摘しました。当局者は、インフレが過去1年で緩和されたものの、依然としてやや高い水準にあることを認めました。

ジェローム・パウエル議長は記者会見で、FRBは金利調整を「急いでいない」と述べ、各決定が今後の経済データに依存することを強調しました。「さらなる利下げを検討する前に、インフレが持続的に2%に向かって動いているというより多くの証拠を見たい」とパウエル氏は語りました。

市場は据え置きを広く予想していましたが、パウエル氏の発言後、トレーダーは9月の利下げに賭ける動きにシフトしました。発表後、S&P500は0.4%上昇し、10年物国債利回りは4.18%まで下落しました。

企業の借り手は安定を歓迎しました。「予測可能な資金調達コストは、設備投資の計画に役立ちます」と大手工業会社のCFOは述べました。しかし、7%近い住宅ローン金利は引き続き住宅市場に重しとなっており、既存住宅の売却件数は先月2.1%減少しました。

ゴールドマン・サックスのアナリストは、2025年の利下げ予測を従来の2回から1回の25ベーシスポイント利下げに下方修正しました。次の政策会合は7月下旬に予定されています。`,
    source: "Reuters",
    sourceUrl: "https://www.reuters.com/business/",
    publishedAt: "2025-07-08T14:30:00Z",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 4,
  },
  {
    id: "nvidia-ai-chip-demand",
    title: "Nvidia Surpasses $4 Trillion Market Cap on AI Chip Demand",
    titleJa: "エヌビディア、AI半導体需要で時価総額4兆ドル突破",
    summaryJa:
      "エヌビディアの時価総額が4兆ドルを超え、世界初の非金融企業としてこの水準に到達しました。データセンター向けAI半導体の需要が引き続き急増しており、同社の四半期売上は前年比78%増の386億ドルに達しました。主要クラウドプロバイダーが次世代GPUの大量発注を続けており、供給制約が依然として課題です。競合のAMDやインテルもAIチップ市場への参入を加速していますが、エヌビディアのシェアは80%以上を維持しています。投資家はAI投資サイクルの持続性に注目しており、規制リスクや地政学的なサプライチェーン問題が今後の変数となります。",
    bodyOriginal: `Nvidia became the first non-financial company to surpass a $4 trillion market capitalization on Tuesday, driven by relentless demand for its artificial intelligence chips used in data centers worldwide.

The chipmaker reported quarterly revenue of $38.6 billion, up 78% year-over-year, beating Wall Street estimates for the fifth consecutive quarter. Data center revenue alone reached $32.1 billion, accounting for 83% of total sales.

CEO Jensen Huang said demand for the company's next-generation Blackwell architecture "exceeds supply by a wide margin." Major cloud providers including Amazon, Microsoft, and Google have placed multi-billion-dollar orders for Nvidia GPUs to power their AI services.

"We are at the beginning of a new industrial revolution," Huang told investors on an earnings call. "Every company will become an AI company, and every data center will be accelerated."

Competitors are racing to catch up. AMD unveiled its MI350 series chips targeting enterprise AI workloads, while Intel is restructuring its foundry business to compete more aggressively. Despite these efforts, Nvidia maintains over 80% share in the AI accelerator market.

Analysts warn that valuation concerns are growing. At current levels, Nvidia trades at 45 times forward earnings. Regulatory scrutiny over the company's dominance in AI chips is also intensifying in both the U.S. and Europe.

Shares rose 3.2% in after-hours trading following the earnings report.`,
    bodyJa: `エヌビディアは火曜日、世界中のデータセンターで使用される人工知能半導体への途切れない需要に押され、非金融企業として初めて時価総額4兆ドルを超えました。

同社は四半期売上386億ドル（前年比78%増）を報告し、5四半期連続でウォール街の予想を上回りました。データセンター部門の売上だけで321億ドルに達し、総売上の83%を占めています。

ジェンセン・フアンCEOは、同社の次世代Blackwellアーキテクチャへの需要が「供給を大きく上回っている」と述べました。アマゾン、マイクロソフト、グーグルを含む主要クラウドプロバイダーは、AIサービスを支えるためにエヌビディアGPUの数十億ドル規模の注文を出しています。

「私たちは新しい産業革命の始まりにいます」とフアン氏は決算説明会で投資家に語りました。「すべての企業がAI企業となり、すべてのデータセンターが加速化されます。」

競合他社は追いつこうと競争を加速させています。AMDはエンタープライズAIワークロードをターゲットにしたMI350シリーズチップを発表し、インテルはより積極的に競争するためにファウンドリ事業を再編しています。これらの努力にもかかわらず、エヌビディアはAIアクセラレータ市場で80%以上のシェアを維持しています。

アナリストは、評価面での懸念が高まっていると警告しています。現在の水準では、エヌビディアは予想利益の45倍で取引されています。AI半導体における同社の支配的地位に対する規制当局の監視も、米国と欧州の両方で強まっています。

決算発表後、株価は時間外取引で3.2%上昇しました。`,
    source: "Bloomberg",
    sourceUrl: "https://www.bloomberg.com/",
    publishedAt: "2025-07-07T21:00:00Z",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "japan-boj-rate-decision",
    title: "Bank of Japan Raises Rates to 0.75%, Highest in 17 Years",
    titleJa: "日本銀行、政策金利を0.75%に引き上げ──17年ぶりの高水準",
    summaryJa:
      "日本銀行は金融政策決定会合で政策金利を0.5%から0.75%に引き上げ、1995年以来17年ぶりの高水準としました。春闘での賃上げ率の改善と物価の安定した上昇を背景に、金融正常化のペースを加速させています。植田総裁は「実質金利は依然としてマイナスであり、緩和的な金融環境は維持される」と説明しました。円相場は一時1ドル=155円台まで円高が進み、輸出企業の株価には押し下げ圧力がかかりました。一方、銀行株は金利上昇を歓迎し、三菱UFJフィナンシャル・グループなどが上昇しました。市場は年内にさらなる利上げの可能性を50%程度と見ています。",
    bodyOriginal: `The Bank of Japan raised its policy interest rate to 0.75% on Thursday, the highest level in 17 years, as stronger wage growth and persistent inflation give policymakers confidence to continue normalizing monetary policy.

Governor Kazuo Ueda said the decision reflects "growing evidence that the virtuous cycle between wages and prices is taking hold." Major companies agreed to average wage increases of 5.25% in this year's spring labor negotiations, the highest in three decades.

"In real terms, interest rates remain negative, and monetary conditions continue to be accommodative," Ueda told a news conference. The BOJ will also gradually reduce its purchases of Japanese government bonds.

The yen strengthened to 155.2 per dollar following the announcement, gaining 0.8% on the day. Exporters including Toyota and Sony saw their shares decline, while banking stocks rallied. Mitsubishi UFJ Financial Group rose 2.4%.

Economists at Nomura Securities expect one more rate hike by year-end, bringing the policy rate to 1.0%. However, global trade tensions and uncertainty over U.S. tariff policies could complicate the BOJ's path forward.

Japan's core consumer price index rose 2.8% in May from a year earlier, staying above the BOJ's 2% target for the 38th consecutive month.`,
    bodyJa: `日本銀行は木曜日、賃金上昇の強まりと持続的なインフレを背景に、政策当局が金融政策の正常化を継続する自信を深めているとして、政策金利を0.75%に引き上げ、17年ぶりの高水準としました。

植田和男総裁は、この決定は「賃金と物価の好循環が定着しつつあるという証拠が増えていること」を反映していると述べました。大手企業は今年の春闘で平均5.25%の賃上げに合意し、30年ぶりの高水準となりました。

「実質金利は依然としてマイナスであり、金融環境は引き続き緩和的です」と植田氏は記者会見で語りました。日銀は日本国債の買い入れも段階的に縮小します。

発表後、円は1ドル=155.2円まで円高となり、当日0.8%上昇しました。トヨタやソニーなどの輸出企業の株価は下落した一方、銀行株は上昇しました。三菱UFJフィナンシャル・グループは2.4%上昇しました。

野村證券のエコノミストは、年末までにもう1回の利上げがあり、政策金利は1.0%に達すると予想しています。しかし、グローバルな貿易摩擦と米国の関税政策の不確実性が、日銀の今後の道筋を複雑にする可能性があります。

日本のコア消費者物価指数は5月に前年比2.8%上昇し、日銀の2%目標を38か月連続で上回りました。`,
    source: "Nikkei Asia",
    sourceUrl: "https://asia.nikkei.com/",
    publishedAt: "2025-07-08T03:00:00Z",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1540959733336-eab4de63ee47?w=800&q=80",
    readTime: 4,
  },
  {
    id: "tesla-robotaxi-launch",
    title: "Tesla Launches Robotaxi Service in Austin, Texas",
    titleJa: "テスラ、テキサス州オースティンでロボタクシーサービスを開始",
    summaryJa:
      "テスラはテキサス州オースティンで自動運転タクシーサービス「Robotaxi」の限定運用を開始しました。Model Yをベースにした車両が、安全運転員なしで市内の特定エリアを走行します。イーロン・マスクCEOは「交通の未来はここから始まる」と述べましたが、規制当局や競合からは安全性への懸念が示されています。ウェイモやクルーズなどの競合は既に他都市で商用サービスを展開しており、テスラは後発組です。初期は招待制の利用者のみが対象で、1回の乗車料金は推定5〜10ドルです。テスラの株価は発表後4%上昇しましたが、自動運転技術の実用化には依然としてハードルが残ります。",
    bodyOriginal: `Tesla officially launched its long-awaited Robotaxi service in Austin, Texas on Monday, marking the electric vehicle maker's boldest bet on autonomous driving technology.

A fleet of modified Model Y vehicles began operating in a geofenced area of the city without safety drivers, though remote monitoring staff can intervene if needed. The service is initially available to invited users only, with rides priced between $5 and $10 per trip.

"This is the beginning of the future of transportation," CEO Elon Musk said at a launch event. "Within a few years, owning a car that doesn't drive itself will be like owning a horse."

The launch comes as competitors Waymo and Cruise have already deployed commercial robotaxi services in Phoenix, San Francisco, and other cities. Analysts note that Tesla's approach relies primarily on camera-based systems without lidar sensors, a design choice that has drawn skepticism from safety advocates.

The National Highway Traffic Safety Administration said it is monitoring the deployment closely. Austin city officials granted Tesla a permit for up to 200 vehicles in the initial phase.

Tesla shares jumped 4% on the news, adding roughly $40 billion to its market value. However, the company faces ongoing lawsuits related to previous Autopilot incidents, and full-scale commercialization could take years.`,
    bodyJa: `テスラは月曜日、テキサス州オースティンで長らく待望されていたロボタクシーサービスを正式に開始し、自動運転技術への同社最大の賭けを実現しました。

改造されたModel Yの車隊が、安全運転員なしで市内の特定エリア（ジオフェンス内）での運行を開始しましたが、必要に応じてリモート監視スタッフが介入できます。サービスは当初、招待されたユーザーのみが利用可能で、1回の乗車料金は5〜10ドルです。

「これは交通の未来の始まりです」とイーロン・マスクCEOはローンチイベントで述べました。「数年以内に、自分で運転しない車を所有することは、馬を所有するようなものになるでしょう。」

このローンチは、競合のウェイモやクルーズが既にフェニックス、サンフランシスコなどの都市で商用ロボタクシーサービスを展開している中で行われました。アナリストは、テスラのアプローチが主にLiDARセンサーなしのカメラベースのシステムに依存していることに注目しており、この設計選択は安全擁護派から懐疑的な視線を向けられています。

全米高速道路交通安全局（NHTSA）は展開を綿密に監視していると述べました。オースティン市の当局者は、初期段階で最大200台の車両についてテスラに許可証を交付しました。

テスラの株価はこのニュースで4%急騰し、時価総額は約400億ドル増加しました。しかし、同社は以前のAutopilot関連事故に関する訴訟に直面しており、本格的な商用化には数年かかる可能性があります。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/",
    publishedAt: "2025-07-07T16:00:00Z",
    category: "自動車",
    imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    readTime: 4,
  },
  {
    id: "opec-oil-production",
    title: "OPEC+ Agrees to Gradual Output Increase Starting August",
    titleJa: "OPEC+、8月から段階的な原油増産で合意",
    summaryJa:
      "OPEC+は8月から毎月22万バレルの段階的な原油増産に合意しました。サウジアラビア主導のこの決定は、高い原油価格による世界経済への影響を懸念する一方、市場シェアの回復も狙っています。ブレント原油はバレルあたり78ドル前後で推移しており、増産発表後は2%下落しました。エネルギーアナリストは、需要の季節的な強さと地政学リスクが価格の下支えになると分析しています。米国のシェールオイル生産も記録的高水準で、OPEC+の価格支配力は相対的に低下しています。日本や欧州の輸入国にとっては、エネルギーコストの安定化がインフレ抑制に寄与する可能性があります。",
    bodyOriginal: `OPEC and its allies agreed on Sunday to begin gradually increasing oil production by 220,000 barrels per day starting in August, a move that signals the group's confidence in global demand while addressing concerns about high energy prices.

Saudi Arabia, the de facto leader of OPEC+, has been balancing the need to support oil prices—which fund its ambitious economic diversification plans—with pressure from consuming nations worried about inflation.

Brent crude fell 2% to $78.40 per barrel following the announcement. Oil prices have traded in a relatively narrow range this year, supported by Middle East tensions but capped by rising U.S. shale production.

"We believe the market can absorb this additional supply," Saudi Energy Minister Prince Abdulaziz bin Salman said after the virtual meeting. The group plans to review production levels monthly.

U.S. shale output has reached record levels of 13.4 million barrels per day, reducing OPEC+'s market influence. American producers have benefited from technology improvements that lowered extraction costs.

For import-dependent economies like Japan and the eurozone, lower energy costs could help ease inflationary pressures. Japan's trade deficit widened last month partly due to higher fuel import costs.

Energy analysts at Wood Mackenzie expect Brent to average $80 per barrel in the second half of 2025.`,
    bodyJa: `OPECと同盟国は日曜日、8月から毎日22万バレルの段階的な原油増産を開始することで合意しました。この動きは、高いエネルギー価格への懸念に対応しつつ、世界の需要に対するグループの自信を示すものです。

事実上のOPEC+のリーダーであるサウジアラビアは、野心的な経済多角化計画の資金源となる石油価格を支える必要性と、インフレを懸念する消費国からの圧力のバランスを取っています。

ブレント原油は発表後2%下落し、1バレル=78.40ドルとなりました。原油価格は今年、中東の緊張に支えられながらも、米国のシェール生産の増加によって上値を抑えられ、比較的狭いレンジで推移しています。

「市場はこの追加供給を吸収できると考えています」とサウジのエネルギー大臣アブドゥルアジーズ・ビン・サルマン王子は仮想会議後に述べました。グループは生産量を毎月見直す予定です。

米国のシェール生産量は1日1340万バレルの記録的高水準に達し、OPEC+の市場への影響力を弱めています。米国の生産者は、採掘コストを下げた技術革新の恩恵を受けています。

日本やユーロ圏のような輸入依存型経済にとって、エネルギーコストの低下はインフレ圧力の緩和に役立つ可能性があります。日本の貿易赤字は先月、燃料輸入コストの上昇が一因で拡大しました。

ウッド・マッケンジーのエネルギーアナリストは、2025年下半期のブレント原油平均を1バレル80ドルと予想しています。`,
    source: "Financial Times",
    sourceUrl: "https://www.ft.com/",
    publishedAt: "2025-07-06T12:00:00Z",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "amazon-ai-investment",
    title: "Amazon Plans $100 Billion AI Infrastructure Investment Over Five Years",
    titleJa: "アマゾン、5年間でAIインフラに1000億ドル投資へ",
    summaryJa:
      "アマゾンは今後5年間で人工知能インフラに1000億ドル（約15兆円）を投資する計画を発表しました。AWSのデータセンター拡張、カスタムAIチップ「Trainium」「Inferentia」の開発、生成AIサービスの強化が主な内容です。アンディ・ジャシーCEOは「AIはアマゾンにとってこれまでで最大の技術変革」と強調しました。マイクロソフトやグーグルも同様の大規模投資を発表しており、クラウド各社のAI軍拡競争が激化しています。投資家は短期の利益率低下を懸念する一方、長期的な競争力確保には不可欠と評価しています。AWSの市場シェアは32%で首位を維持していますが、マイクロソフトAzureの追い上げが続いています。",
    bodyOriginal: `Amazon announced plans to invest $100 billion in artificial intelligence infrastructure over the next five years, one of the largest corporate technology investments ever disclosed.

The spending will fund expansion of Amazon Web Services data centers, development of custom AI chips including Trainium and Inferentia, and enhancement of generative AI services such as Amazon Bedrock and the Nova model family.

"AI represents the biggest technology transformation in Amazon's history," CEO Andy Jassy said at the company's annual cloud conference in Las Vegas. "We are investing at a scale that matches the opportunity."

The announcement comes as cloud rivals Microsoft and Google have committed tens of billions to AI infrastructure. Microsoft's capital expenditure reached $14 billion last quarter alone, while Google parent Alphabet spent $12 billion.

AWS maintains a 32% share of the global cloud market, but Microsoft Azure is growing faster at 29% share. Amazon's stock rose 1.8% on the news, though some investors expressed concern about near-term margin pressure.

The investment will create an estimated 50,000 construction and engineering jobs across the United States, with new data center campuses planned in Virginia, Ohio, and Oregon.

Analysts at Morgan Stanley estimate Amazon's AI-related revenue could reach $50 billion annually by 2028.`,
    bodyJa: `アマゾンは今後5年間で人工知能インフラに1000億ドルを投資する計画を発表し、これは企業が開示した中でも最大級の技術投資の一つです。

この支出は、Amazon Web Services（AWS）のデータセンター拡張、TrainiumやInferentiaを含むカスタムAIチップの開発、Amazon BedrockやNovaモデルファミリーなどの生成AIサービスの強化に充てられます。

「AIはアマゾンの歴史において最大の技術変革を意味します」とアンディ・ジャシーCEOはラスベガスで開催された同社の年次クラウドカンファレンスで述べました。「私たちはその機会に見合った規模で投資しています。」

この発表は、クラウドの競合であるマイクロソフトとグーグルがAIインフラに数百億ドルを投じると公約している中で行われました。マイクロソフトの設備投資は昨四半期だけで140億ドルに達し、グーグルの親会社アルファベットは120億ドルを支出しました。

AWSは世界のクラウド市場で32%のシェアを維持していますが、マイクロソフトAzureは29%のシェアでより速い成長を続けています。アマゾンの株価はこのニュースで1.8%上昇しましたが、一部の投資家は短期的な利益率への圧力を懸念しました。

この投資は米国全体で推定5万人の建設・エンジニアリングの雇用を生み出し、バージニア、オハイオ、オレゴンに新しいデータセンターキャンパスの建設が計画されています。

モルガン・スタンレーのアナリストは、アマゾンのAI関連売上が2028年までに年間500億ドルに達する可能性があると推定しています。`,
    source: "Wall Street Journal",
    sourceUrl: "https://www.wsj.com/",
    publishedAt: "2025-07-08T10:00:00Z",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    readTime: 5,
  },
  {
    id: "eu-trade-tariffs",
    title: "EU and U.S. Reach Preliminary Trade Deal, Tariffs Reduced to 10%",
    titleJa: "EUと米国が貿易合意の大枠で合意、関税を10%に引き下げ",
    summaryJa:
      "欧州連合と米国は貿易協定の大枠で合意し、相互に課していた関税を10%に引き下げることになりました。自動車、鉄鋼、農産物をめぐる紛争が緩和され、両地域の企業にとって見通しが改善しました。欧州の自動車メーカーは米国市場への輸出コストの低下を歓迎しており、フォルクスワーゲンやメルセデス・ベンツの株価が上昇しました。ただし、合意の詳細は今後数週間で詰める必要があり、各国議会の承認も必要です。世界貿易の不確実性が一段落したことで、グローバル株式市場は全体的に上昇しました。日本企業にとっても、欧米間の貿易摩擦緩和はサプライチェーンの安定に寄与すると期待されています。",
    bodyOriginal: `The European Union and the United States reached a preliminary trade agreement on Friday, reducing reciprocal tariffs to 10% and easing tensions that have weighed on global markets for months.

The deal addresses disputes over automobiles, steel, and agricultural products. European automakers, which export millions of vehicles to the U.S. annually, welcomed the reduction in costs. Shares of Volkswagen and Mercedes-Benz rose 3% and 2.5% respectively.

"We have found a path forward that protects our workers and our industries," European Commission President Ursula von der Leyen said at a joint press conference with U.S. Trade Representative Jamieson Greer.

Details of the agreement still need to be finalized over the coming weeks, and approval from legislative bodies on both sides of the Atlantic is required. Some lawmakers in France and Germany have expressed reservations about concessions made on agricultural access.

Global equity markets rallied on the news, with the Stoxx Europe 600 gaining 1.2% and the Dow Jones Industrial Average rising 0.8%. The euro strengthened modestly against the dollar.

Japanese officials said the deal could help stabilize supply chains for automakers and electronics manufacturers with operations in both regions. Trade uncertainty has been a key concern for the Bank of Japan's policy outlook.

Analysts cautioned that implementation risks remain, and future policy changes in Washington could alter the terms.`,
    bodyJa: `欧州連合と米国は金曜日、貿易協定の大枠で合意し、相互関税を10%に引き下げ、数か月間世界市場に重しとなっていた緊張を緩和しました。

この合意は、自動車、鉄鋼、農産物をめぐる紛争に対応するものです。年間数百万台を米国に輸出している欧州の自動車メーカーは、コスト低下を歓迎しました。フォルクスワーゲンとメルセデス・ベンツの株価はそれぞれ3%と2.5%上昇しました。

「私たちの労働者と産業を守る前進の道を見出しました」とウルズラ・フォン・デアライエン欧州委員長は、米国通商代表のジェイミーソン・グリアー氏との共同記者会見で述べました。

合意の詳細は今後数週間で詰める必要があり、大西洋両岸の立法府による承認も必要です。フランスとドイツの一部の議員は、農産物市場アクセスに関する譲歩について懸念を表明しています。

このニュースを受けて世界の株式市場は上昇し、STOXX欧州600は1.2%、ダウ工業株30種は0.8%上昇しました。ユーロはドルに対して小幅に強含みました。

日本の当局者は、この合意が両地域に事業を展開する自動車メーカーや電機メーカーのサプライチェーン安定に役立つ可能性があると述べました。貿易の不確実性は日本銀行の政策見通しにおける主要な懸念事項でした。

アナリストは、実施リスクが残っており、ワシントンの将来の政策変更が条件を変える可能性があると警告しました。`,
    source: "Reuters",
    sourceUrl: "https://www.reuters.com/business/",
    publishedAt: "2025-07-05T18:00:00Z",
    category: "貿易",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
    readTime: 4,
  },
  {
    id: "china-stimulus-package",
    title: "China Unveils $140 Billion Stimulus Package to Boost Domestic Consumption",
    titleJa: "中国、国内消費刺激のため14兆円規模の景気対策を発表",
    summaryJa:
      "中国国務院は国内消費を刺激するため、約1400億ドル（約21兆円）規模の景気対策パッケージを発表しました。家電製品や自動車の買い替え補助、地方自治体向けのインフラ投資、住宅ローン金利の引き下げが含まれます。不動産市場の長期低迷と若年層の高失業率が経済の弱点となっており、当局は内需拡大に注力しています。上海総合指数は発表後2.1%上昇しました。ただし、経済学者の間では、この措置だけでは構造的な問題の解決には不十分ではないかとの見方もあります。日本企業にとっては、中国市場の消費回復が輸出にプラスに働く可能性がありますが、地政学リスクは依然として不透明感を残しています。",
    bodyOriginal: `China's State Council unveiled a 1 trillion yuan ($140 billion) stimulus package on Wednesday aimed at boosting domestic consumption and stabilizing economic growth amid persistent property market weakness.

The measures include subsidies for replacing home appliances and vehicles, increased infrastructure spending by local governments, and reduced mortgage rates for first-time homebuyers. Consumer vouchers will be distributed in major cities including Beijing, Shanghai, and Shenzhen.

"Expanding domestic demand is our top priority," Premier Li Qiang said at a State Council meeting. "We must activate the consumption potential of our 1.4 billion people."

China's economy grew 5.2% in the first quarter, meeting the government's annual target, but youth unemployment remains elevated at 15.3%, and property investment has declined for 18 consecutive months.

The Shanghai Composite Index rose 2.1% following the announcement. Japanese and South Korean exporters with significant China exposure, including Toyota and Samsung, saw modest stock gains.

Economists at UBS said the package is "necessary but insufficient" to address structural challenges including local government debt and demographic headwinds. They expect additional measures later this year.

Foreign businesses welcomed the focus on consumption but called for clearer regulatory policies and equal treatment for international companies operating in China.`,
    bodyJa: `中国国務院は水曜日、不動産市場の長期低迷の中で国内消費を刺激し経済成長を安定させることを目的とした、1兆元（約1400億ドル）規模の景気対策パッケージを発表しました。

この措置には、家電製品や自動車の買い替え補助金、地方自治体によるインフラ支出の増加、初めて住宅を購入する人向けの住宅ローン金利の引き下げが含まれます。北京、上海、深センを含む主要都市で消費券が配布されます。

「国内需要の拡大が最優先事項です」と李強首相は国務院の会議で述べました。「14億人の消費潜在力を活性化しなければなりません。」

中国経済は第1四半期に5.2%成長し、政府の年間目標を達成しましたが、若年失業率は15.3%と依然として高く、不動産投資は18か月連続で減少しています。

発表後、上海総合指数は2.1%上昇しました。中国市場への露出が大きいトヨタやサムスンを含む日本と韓国の輸出企業の株価も小幅に上昇しました。

UBSのエコノミストは、このパッケージは地方政府の債務や人口動態の逆風といった構造的課題に対処するには「必要だが不十分」だと述べました。年内に追加措置があると予想しています。

外国企業は消費重視を歓迎したものの、より明確な規制政策と、中国で事業を展開する国際企業への平等な扱いを求めました。`,
    source: "South China Morning Post",
    sourceUrl: "https://www.scmp.com/",
    publishedAt: "2025-07-08T06:00:00Z",
    category: "マクロ経済",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    readTime: 5,
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
