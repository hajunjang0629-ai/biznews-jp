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
    id: "investors-scored-on-iran-war-s-oil-marke-88ce0e21",
    title: "Investors scored on Iran war's oil market boom. Staying long the trade will get trickier",
    titleJa: "投資家はイラン戦争による石油市場の活況を評価した。長く滞在すると取引は難しくなる",
    summaryJa: "米国とイランの戦争によって引き起こされた原油価格の変動は、市場で大きな勝者を生み出しましたが、バイアンドホールドの投資家にとっては、より長期的に監視すべきエネルギーテーマがあります。",
    bodyOriginal: `The past week's earnings from the energy sector demonstrated just how much the U.S.-Iran war has contributed to the short-term performance of major players in the oil market — and to the portfolio gains of investors who targeted stock opportunities in the sector. The sums are massive, but sitting on those gains for too long could be a mistake, according to investing experts.
ExxonMobil and Chevron reported quarterly profits on Friday that surged due to the war's impact on oil prices, with Exxon's profits doubling year-over-year to $14.5 billion and Chevron's net income increasing close to 400%.
"We're kind of firing on all cylinders, which is good, because the world needs it," CEO Mike Wirth told CNBC's Becky Quick on Friday.
From April through June, U.S. crude oil futures averaged over $92, a quarterly increase of 27%.
The action in refiners has been even stronger. Valero Energy's earnings were up over 400% for the quarter compared to last year in world that Valero estimates is still five million barrels short per day of global refining capacity and over 100 million barrels short of oil inventories. Chevron's refining segment saw profits jump 500% amid the rise in gasoline and diesel prices.
An energy market driven by geopolitics — not only the war in the Middle East but also between Russian and Ukraine — has attracted money into oil and oil industry-related ETFs, and it has created big winners along the way. But oil prices have been turbulent this year, particularly since the on-again, off-again war in Iran started. Since early March, the price of a barrel of oil peaked at nearly $120, dipped as low as $72, and seesawed — sometimes daily — within that range.
This weekend, President Trump offered his latest comments that an end to the war may be in sight, referring to the "perimeters of a deal" and potential reopening of the Strait of Hormuz. As of Friday, U.S. crude was trading under $85 per barrel, with Brent crude around $90. Prices fell more than 5% over the past week on bets that the situation in the Middle East would improve.
That leaves a big decision for investors who have profited from the recent runup in the energy sector, investing experts say. The recent gains can largely be attributed to trades that are closer to short-term speculation than long-term fundamental analysis, and there may be better opportunities for buy-and-hold investors elsewhere in the energy sector.
"If you're making a play on oil because of geopolitics in a six-month period, you are not investing; you are gambling," said ETF.com's Dave Nadig. "[The trades were] literally intraday reactions to things blowing up in the Persian Gulf."
Traders and investors with extensive knowledge of energy markets can time these kinds of trades right based on understanding of oil production and refining capacity, and with past experience trading through bouts of volatility. But according to Nadig, most buy-and-hold investors typically are "terrible" at market timing. "Historically, individual investors get shellacked [in this kind of environment]," he said.
Among the big winners have been crude oil futures ETFs such as the United States Oil Fund (USO), Invesco DB Oil Fund (DBO), and United States Brent Oil Fund (BNO). At a broader level of exposure, winning trades include the energy sector index fund, State Street Energy Select Sector SPDR ETF (XLE), as well as crude oil refining trades, such as the VanEck Oil Refiners ETF (CRAK).
Nadig says the run in these energy stocks began before the outbreak of war, attracting inflows since the election of President Trump in November 2024. Year-to-date, USO has returned 87%; BNO is at 78.1%; DBO at 76%; CRAK at 44.6%; and XLE over 30%.
"Short-term traders prefer ETFs like DBO since futures prices track more closely to spot oil prices than equities and are therefore more volatile than stock-based ETFs," said Aniket Ullal, head of ETF research & analytics for CFRA. He cited the trailing one-year volatility for XLE is 21.1%, while for DBO it is 38.6%.
That's the exact thing that attracts speculators and ramps up the volatility in the ETFs themselves, Nadig said.
But for investors planning for the long term, volatile markets reacting to geopolitics are just too difficult to read, according to Bryan Armour, director of ETF and passive strategies research for North America at Morningstar. Volatility can move against investors as quickly as it has favored them, he said, adding that he has "no expectation of potential outcomes one way or another. … There are a lot of risks."
His advice for long-term investors seeking exposure to oil and broader energy markets: "Lower cost, better diversified, broader investment themes tend to work better," Armour said.
CFRA's analysts went underweight on energy shortly after the war started back in March, based on the view that any price hikes would be short term and reactionary, Ullal said. "Our outlook for WTI crude is more in the $60 [a barrel] range. … There are other pockets of energy that we're optimistic on," he added.
Ullal pointed to energy ETFs with diversified exposure that includes natural gas. "We're more optimistic on bigger exposure to natural gas," he said, explaining he expects natural gas to benefit going forward from AI-driven demand as more data centers go online. Infrastructure ETFs such as Alerian MLP ETF (AMLP) and First Trust North American Energy Infrastructure Fund (EMLP) hold promise, Ullal said.
Nadig pointed to uranium and related nuclear energy ETFs, which he said attracted $5.67 billion in the time period between President Trump's election and the start of the war. The short-term performance has not been there, with ETF trades including the Van Eck Uranium and Nuclear ETF (NLR) selling off this year. But he says it is another AI-powered trade with longer-term prospects despite the sector underperforming while the market focused on war headlines.
—CNBC's Spencer Kimball and Pippa Stevens contributed to this report.`,
    bodyJa: `エネルギーセクターの先週の収益は、米国とイランの戦争が石油市場の主要企業の短期的なパフォーマンス、そしてこのセクターの株式機会を狙った投資家のポートフォリオ利益にどれだけ貢献したかを示した。投資専門家らによると、その金額は巨額だが、こうした利益をあまりにも長く放置するのは間違いになる可能性があるという。
エクソンモービルとシェブロンが金曜日に発表した四半期利益は戦争による原油価格への影響で大幅に増加し、エクソンの利益は前年比倍増の145億ドルとなり、シェブロンの純利益は400％近く増加した。
マイク・ワース最高経営責任者（ＣＥＯ）は金曜日、ＣＮＢＣのベッキー・クイックに対し、「われわれは全気筒に点火しているような状態だ。世界がそれを必要としているので、これは良いことだ」と語った。
4月から6月にかけて、米国の原油先物価格は平均92ドルを超え、四半期ベースで27％上昇した。
精製業者の動きはさらに強くなっています。バレロ・エナジーの同四半期の収益は、世界全体で前年比400％以上増加したが、バレロの試算では世界の精製能力は依然として日量500万バレル不足、石油在庫は1億バレル以上不足している。シェブロンの精製部門は、ガソリンとディーゼル価格の上昇を受けて利益が５００％増加した。
中東戦争だけでなく、ロシアとウクライナの間の地政学によって動かされたエネルギー市場は、石油および石油産業関連のETFに資金を集め、その過程で大きな勝者を生み出してきた。しかし、今年の原油価格は特にイランで断続的な戦争が始まって以来、混乱している。 3月初旬以来、石油価格は1バレルあたり120ドル近くでピークに達し、72ドルまで下落し、その範囲内で（時には毎日）シーソー状態を繰り返した。
トランプ大統領は今週末、「合意の境界線」とホルムズ海峡再開の可能性に言及し、戦争終結が見えてきたかもしれないとの最新コメントを発表した。金曜日の時点で、米国産原油は1バレル当たり85ドル以下で取引されており、ブレント原油は90ドル前後となっている。中東情勢が改善するとの見方から、価格は過去１週間で５％以上下落した。
投資専門家らによると、最近のエネルギーセクターの急騰で利益を得てきた投資家にとっては、大きな決断を迫られることになるという。最近の上昇は長期的なファンダメンタルズ分析よりも短期的な投機に近い取引によるところが大きく、エネルギーセクターの他の分野ではバイアンドホールド投資家にとってより良い機会がある可能性がある。
ETF.comのデイブ・ナディグ氏は「地政学を理由に半年以内に石油をもてあそんでいるなら、それは投資ではなく、ギャンブルだ」と述べた。 「（取引は）ペルシャ湾での爆発に対する文字通り日中の反応だった。」
エネルギー市場に関する広範な知識を持つトレーダーや投資家は、石油生産と精製能力の理解と、ボラティリティの発生による過去の取引経験に基づいて、この種の取引のタイミングを適切に計ることができます。しかし、ナディグ氏によると、バイアンドホールド投資家のほとんどは通常、市場のタイミングを「非常に」重視します。 「歴史的に、個人投資家は（この種の環境では）厳しい目に遭っている」と同氏は語った。
大きな勝者の中には、米国石油ファンド（USO）、インベスコ DB 石油ファンド（DBO）、米国ブレント石油ファンド（BNO）などの原油先物 ETF があります。より広範なエクスポージャーレベルでは、エネルギーセクターのインデックスファンドであるステート・ストリート・エネルギー・セレクト・セクターSPDR ETF (XLE) や、VanEck Oil Refiners ETF (CRAK) などの原油精製取引が勝者となっています。
ナディグ氏によると、これらのエネルギー株の値下がりは戦争勃発前に始まり、2024年11月のトランプ大統領当選以来資金が流入してきた。年初からUSOのリターンは87％。 BNOは78.1%です。 DBOは76%。 CRAKは44.6%。 XLE は 30% 以上です。
CFRAのETF調査・分析責任者、アニケット・ウラル氏は「先物価格は株式よりも原油現物価格に近い動きをしており、したがって株式ベースのETFよりも変動が大きいため、短期トレーダーはDBOのようなETFを好む」と述べた。同氏は、XLEの1年間のボラティリティが21.1％であるのに対し、DBOの場合は38.6％であると述べた。
それこそが投機家を惹きつけ、ETF自体のボラティリティを高める原因となっている、とナディグ氏は語った。
しかし、長期的な計画を立てる投資家にとって、地政学に反応する不安定な市場を読むのはあまりにも難しい、とモーニングスターの北米ETF・パッシブ戦略リサーチ担当ディレクターのブライアン・アーマー氏は言う。同氏は、ボラティリティーは投資家に有利であったのと同じくらい急速に投資家に不利に働く可能性があると述べ、「何らかの形で潜在的な結果については期待していない。…多くのリスクがある」と付け加えた。
アーマー氏は、石油市場やより広範なエネルギー市場へのエクスポージャーを求める長期投資家へのアドバイスとして、「コストが低く、より分散され、より広範な投資テーマがよりうまく機能する傾向がある」と述べた。
ウラル氏によると、CFRAのアナリストらは、3月に戦争が始まった直後、価格上昇は短期的で反動的なものになるだろうとの見方に基づいて、エネルギーをアンダーウエートに置いたという。同氏は、「WTI原油のわれわれの見通しは、さらに60ドル（1バレル）の範囲にある。…われわれが楽観視しているエネルギー資源は他にもある」と付け加えた。
ウラル氏は、天然ガスを含む多様なエクスポージャーを持つエネルギーETFを指摘した。同氏は「われわれは天然ガスへのエクスポージャーの拡大についてはより楽観的だ」と述べ、より多くのデータセンターのオンライン化に伴い、天然ガスは今後AI主導の需要から恩恵を受けるとの見通しを説明した。ウラル氏は、アレリアンMLP ETF（AMLP）やファースト・トラスト・ノース・アメリカン・エネルギー・インフラストラクチャー・ファンド（EMLP）などのインフラETFには期待があると述べた。
ナディグ氏はウランと関連原子力エネルギーETFを挙げ、トランプ大統領の当選から戦争開始までの期間に56億7000万ドルが集まったと述べた。今年はヴァンエック・ウラン・アンド・ニュークリアETF（NLR）などのETF取引が売却されており、短期的なパフォーマンスは芳しくない。しかし同氏は、市場が戦争の見出しに注目する中、このセクターのパフォーマンスが低迷しているにもかかわらず、これも長期的な見通しを備えたAIを活用した取引であると述べた。
—CNBCのスペンサー・キンボール氏とピッパ・スティーブンス氏がこのレポートに貢献しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/02/oil-prices-iran-war-energy-market.html",
    publishedAt: "2026-08-02T13:00:01+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 7,
  },
  {
    id: "how-apple-s-cheap-macbook-neo-sparked-a-ba47c4a3",
    title: "How Apple’s cheap MacBook Neo sparked a war in budget laptops",
    titleJa: "Apple の安価な MacBook Neo がいかにして低価格ラップトップの戦争を引き起こしたか",
    summaryJa: "Apple の低価格 MacBook Neo への賭けが功を奏し、ライバル各社は自社製品の再考を余儀なくされている。",
    bodyOriginal: `Apple’s gamble on the budget MacBook Neo is paying off and forcing rivals to rethink their offerings.`,
    bodyJa: `Apple の低価格 MacBook Neo への賭けが功を奏し、ライバル各社は自社製品の再考を余儀なくされている。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/how-apples-cheap-macbook-neo-sparked-a-war-in-budget-laptops-8fbaf839?mod=mw_rss_topstories",
    publishedAt: "2026-08-02T13:00:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-23072814",
    readTime: 2,
  },
  {
    id: "top-wall-street-analysts-are-bullish-on-dd74fcc2",
    title: "Top Wall Street analysts are bullish on these 3 dividend stocks for passive income",
    titleJa: "ウォール街のトップアナリストは不労所得向けのこれら3つの配当銘柄に強気だ",
    summaryJa: "中東情勢の不確実性と、人工知能ブームの持続性や高額支出に対する懸念が引き続き投資家心理の重しとなっている。投資家は、配当株を追加することでポートフォリオを強化することを検討できます。ウォール街のトップアナリストを追跡することは、投資家が魅力的な配当銘柄を最終候補に挙げるのに役立ちます。これらの専門家は、企業の財務状況と成長見通しを徹底的に分析した後、有益な洞察を提供してくれるからです。",
    bodyOriginal: `The uncertainty in the Middle East and concerns about the durability of the artificial intelligence boom and high spending continue to weigh on investor sentiment. Investors can consider strengthening their portfolios by adding dividend stocks.
Tracking top Wall Street analysts can help investors shortlist attractive dividend stocks, as these experts provide useful insights after thorough analysis of a company's financials and growth prospects.
Here are three dividend-paying stocks that are highlighted by Wall Street's top pros, as tracked by TipRanks, a platform that ranks analysts based on their past performance.
Expand Energy
This week's first dividend pick is natural gas producer Expand Energy, which recently announced the $1.25 billion acquisition of Twin Eagle Holdings, a private asset-backed natural gas marketing and optimization business. The deal is expected to accelerate EXE's marketing and commercial goals.
Meanwhile, Expand Energy impressed investors with solid second-quarter results. It repurchased shares worth $530 million in Q2 2026 and announced an additional $1 billion of buyback authorization. Expand declared a dividend of nearly 58 cents per share, payable on Sept. 3. At an annualized dividend per share of $2.30, EXE stock offers a dividend yield of 2.5%.
Following the Q2 print, Wolfe Research analyst Doug Leggate reiterated a buy rating on EXE stock and raised his price target to $114 from $110. The five-star analyst noted that Expand delivered market-beating adjusted earnings per share and earnings before interest, taxes, depreciation and amortization, driven by better gas realizations and lower gathering, processing, and transportation expenses.
"Solid 2Q26 with in-line guidance keeps our focus on what it can control, walking the line between options to return value to s/holders," said Leggate.
As Expand Energy continues to weigh options to enhance shareholder returns, Leggate believes that net debt reduction is the best choice. He highlighted that the company repaid $1.3 billion of gross debt in April, supported by seasonally higher cash flows in the first quarter. EXE ended Q2 2026 with $3.1 billion in net debt. Leggate views buybacks as the second-best option and mergers and acquisitions as the third, with the Twin Eagle deal expected to lower Expand's breakeven by about 7 cents from about $2.80/Mcf.
Leggate ranks No. 807 among more than 12,400 analysts tracked by TipRanks. His ratings have been successful 57% of the time, delivering an average return of 10.1%. See Expand Energy Stock Buybacks on TipRanks.
SM Energy
Moving on to SM Energy, an operator of oil and gas assets across four leading U.S. shale basins: the Permian Basin, DJ Basin, South Texas, and Uinta Basin. SM offers a quarterly dividend of 22 cents per share, or an annualized dividend of 88 cents per share, representing a yield of about 2.7%.
Following a preliminary update on Q2 metrics, Roth analyst Leo Mariani reaffirmed a buy rating on SM Energy stock and raised his price target to $34 from $32. The analyst cited higher oil prices and his optimism about a strong second-quarter report as the reasons for the upgraded price target.
Commenting on the key insights from the Q2 preliminary update, Mariani noted strong oil and gas price realizations in the quarter. However, the update reflected a slightly larger cash hedging loss of $220 million from derivatives, compared to Roth's estimate of about $211 million.
Meanwhile, the five-star analyst raised his cash flow per share estimate by 3%, citing a strong Q2 2026 pricing update. Mariani added that he expects SM Energy to report strong Q2 2026 results on Aug. 5, with oil production of 237,650 barrels of oil per day, which is around 1.5% above the Street's estimate. He expects capital expenditure of $820 million, in line with consensus.
"We rate SM Energy a Buy based on its reasonable returns of capital to shareholders, its discounted valuation vs. peers, and its upside potential in the Austin Chalk and Uinta plays," said Mariani.
Mariani ranks No. 65 among more than 12,400 analysts tracked by TipRanks. His ratings have been successful 67% of the time, delivering an average return of 27%. See SM Energy Financials on TipRanks.
SLB
Oilfield services provider SLB, formerly known as Schlumberger, reported better-than-expected Q2 earnings. The company attributed its Q2 performance to sequential growth across international markets, mainly led by offshore activity in Latin America, Europe and Africa, as well as Asia, helping offset disruptions in the Middle East due to the U.S.-Iran conflict.
SLB announced a quarterly cash dividend of almost 30 cents per share, payable on Oct. 8. At an annualized dividend per share of $1.18, SLB's yield stands at 2.4%.
Reacting to the Q2 earnings, Goldman Sachs analyst Neil Mehta reaffirmed a buy rating on SLB stock with a price target of $62. "Given SLB's position within international OFS, we reiterate our Buy rating and see forward activity expectations as a driver of earnings," said the analyst.
Within Goldman's oilfield services coverage, Mehta is optimistic about SLB as he expects the company to benefit from a recovery in international activity. The five-star analyst projects international revenue growth of about 10% between 2026 and 2027, driven by SLB's exposure to incremental intervention activity and a recovery in Middle East activity. He also expects international revenue to gain from higher offshore activity and a potential ramp-up of exploration activity across several geographies.
Furthermore, Mehta's bullish stance is backed by long-term growth prospects of SLB's data center business. He noted that the company expects the annual run-rate revenue of this business to exceed $2 billion by the end of 2027, with the potential to grow the customer base and products. Mehta also expects SLB to deliver strong free cash flow and shareholder returns this year, driven by higher activity and unique business lines.
Mehta ranks No. 666 among more than 12,400 analysts tracked by TipRanks. His ratings have been successful 59% of the time, delivering an average return of 10.4%. See SLB Ownership Structure on TipRanks.`,
    bodyJa: `中東情勢の不確実性と、人工知能ブームの持続性や高額支出に対する懸念が引き続き投資家心理の重しとなっている。投資家は、配当株を追加することでポートフォリオを強化することを検討できます。
ウォール街のトップアナリストを追跡することは、投資家が魅力的な配当銘柄を最終候補に挙げるのに役立ちます。これらの専門家は、企業の財務状況と成長見通しを徹底的に分析した後、有益な洞察を提供してくれるからです。
過去のパフォーマンスに基づいてアナリストをランク付けするプラットフォームであるTipRanksが追跡した、ウォール街のトッププロによって注目されている高配当株3つを紹介します。
エネルギーを拡大する
今週最初の配当候補は天然ガス生産会社エクスパンド・エナジーで、最近、民間資産を活用した天然ガスのマーケティング・最適化事業であるツイン・イーグル・ホールディングスを12億5000万ドルで買収すると発表した。この契約により、EXE のマーケティングおよび商業目標が加速されることが期待されます。
一方、Expand Energy は第 2 四半期の堅調な業績で投資家に感銘を与えました。同社は2026年第2四半期に5億3000万ドル相当の株式を買い戻し、さらに10億ドルの買い戻し承認を発表した。 Expand は、1 株あたり 58 セント近くの配当金を 9 月 3 日に支払うと発表しました。1 株あたりの年間配当金は 2.30 ドルで、EXE 株の配当利回りは 2.5% です。
第2四半期の報道後、ウルフ・リサーチのアナリスト、ダグ・レッゲート氏はEXE株の買い評価を繰り返し、目標株価を110ドルから114ドルに引き上げた。五つ星のアナリストは、エクスパンドがガス実現の改善と収集、加工、輸送費の削減により、市場を上回る調整後一株当たり利益と利息、税金、減価償却前利益を達成したと指摘した。
「インラインガイダンスを備えた堅調な2026年第2四半期は、当社がコントロールできるものに焦点を当て続け、保有者に価値を還元するための選択肢の間を歩む」とレッゲート氏は述べた。
Expand Energy は株主利益を高めるための選択肢を検討し続けており、Leggate は純負債の削減が最良の選択であると考えています。同氏は、第1四半期の季節的に増加したキャッシュフローに支えられ、同社が4月に総額13億ドルの負債を返済したことを強調した。 EXEは2026年第2四半期を31億ドルの純負債で終了した。 Leggate は自社株買いが 2 番目に良い選択肢、M&A が 3 番目に良い選択肢であると考えており、ツインイーグルとの取引により、Expand の損益分岐点は 1 マクフ当たり約 2.80 ドルから約 7 セント引き下げられると予想されています。
Leggate は、TipRanks で追跡されている 12,400 人を超えるアナリストの中で 807 位にランクされています。彼の評価は 57% の確率で成功し、平均 10.1% のリターンをもたらしました。 TipRanks のエネルギー株買い戻しの拡大を参照してください。
SMエナジー
次に、SM エナジー社は、パーミアン盆地、DJ 盆地、南テキサス州、ウインタ盆地という米国の 4 つの主要なシェール盆地にわたる石油およびガス資産の運営会社です。 SM は、1 株あたり 22 セントの四半期配当、または 1 株あたり 88 セントの年間配当を提供しており、利回りは約 2.7% になります。
第2四半期の指標に関する暫定的な最新情報を受けて、ロスのアナリスト、レオ・マリアーニ氏はSMエナジー株の買い評価を再確認し、目標株価を32ドルから34ドルに引き上げた。同アナリストは、物価目標を引き上げた理由として、原油価格の上昇と好調な第２・四半期報告書に対する自身の楽観的な見方を挙げた。
マリアーニ氏は、第 2 四半期の予備アップデートからの重要な洞察についてコメントし、同四半期の石油とガスの価格が堅調に実現したことを指摘しました。しかし、今回の更新では、ロス氏の推定約2億1,100万ドルと比較して、デリバティブによる現金ヘッジ損失2億2,000万ドルが若干大きくなったことが反映されている。
一方、5つ星のアナリストは、2026年第2四半期の価格更新が強力であることを理由に、1株当たりのキャッシュフロー予想を3％引き上げた。マリアーニ氏は、SMエナジーが8月5日に2026年第2四半期の好調な業績を報告し、原油生産量は日量23万7,650バレルと、ストリートの予想を約1.5％上回ると予想していると付け加えた。同氏は、コンセンサスと一致して、資本支出が 8 億 2,000 万ドルになると予想しています。
マリアーニ氏は、「株主への合理的な資本還元、同業他社と比較した割安な評価、オースティンチョークとウインタでの上昇の可能性に基づいて、SMエナジーを買いと評価している」と述べた。
マリアーニ氏は、TipRanks が追跡する 12,400 人以上のアナリストの中で 65 位にランクされています。彼の評価は 67% の確率で成功し、平均 27% の収益をもたらしました。 TipRanks の SM Energy Financials を参照してください。
SLB
油田サービスプロバイダーのSLB（旧名シュルンベルジェ）は、予想を上回る第2四半期利益を報告した。同社は、第2四半期の業績は、主にアジアだけでなくラテンアメリカ、ヨーロッパ、アフリカでのオフショア活動が牽引し、米国とイランの紛争による中東の混乱を相殺するのに貢献した国際市場全体での連続的な成長によるものであると考えた。
SLB は、10 月 8 日に支払われる、1 株あたり約 30 セントの四半期現金配当を発表しました。1 株あたりの年換算配当金が 1.18 ドルで、SLB の利回りは 2.4% になります。
第2四半期の決算を受けて、ゴールドマン・サックスのアナリスト、ニール・メータ氏は、SLB株の目標株価を62ドルとし、買いの評価を再確認した。同アナリストは「国際ＯＦＳ内でのＳＬＢの立場を考慮し、われわれは買いの格付けを改めて表明し、今後の活動期待が収益の原動力になるとみている」と述べた。
ゴールドマンの油田サービスの範囲内で、メータ氏は同社が国際的な活動の回復から恩恵を受けると予想しており、SLBについて楽観的だ。 5つ星のアナリストは、SLBの段階的介入活動へのエクスポージャーと中東活動の回復により、2026年から2027年にかけて国際収益が約10%増加すると予測している。同氏はまた、海洋活動の活発化と、複数の地域にわたる探査活動の潜在的な増加によって国際収益が増加すると予想している。
さらに、メータ氏の強気の姿勢は、SLBのデータセンター事業の長期的な成長見通しによって裏付けられている。同氏は、同社はこの事業の年間ランレート収益が2027年末までに20億ドルを超えると予想しており、顧客ベースと製品が拡大する可能性があると指摘した。メータ氏はまた、SLBが今年、より活発な活動と独自の事業分野に牽引されて、強力なフリーキャッシュフローと株主利益をもたらすと期待している。
メータ氏は、TipRanks が追跡する 12,400 人以上のアナリストの中で 666 位にランクされています。彼の評価は 59% の確率で成功し、平均リターンは 10.4% でした。 TipRanks の SLB 所有権構造を参照してください。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/02/top-analysts-are-bullish-on-these-dividend-stocks-for-passive-income-.html",
    publishedAt: "2026-08-02T12:01:00+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 8,
  },
  {
    id: "why-flights-are-so-expensive-and-will-li-b32d8a84",
    title: "Why flights are so expensive and will likely stay that way",
    titleJa: "なぜ航空券は非常に高価であり、今後もその価格が続く可能性があるのか",
    summaryJa: "今年、燃料価格が不安定な方向に向かう場合は、格安航空券を期待しないでください。最新の連邦データによると、6月の米国の航空運賃は前年比26.5％上昇した。",
    bodyOriginal: `Wherever volatile fuel prices head this year, don't expect bargain flights.
Airfare in the U.S. in June was up 26.5% compared with a year earlier, according to the latest federal data.
Airline leaders say customers continue to book even after carriers hiked fares. They told Wall Street analysts this month that they're expecting to hold onto that pricing power at least through the rest of the year, if not longer.
Traveler Marjorie Aran said she and her husband paid a combined $800 to go from New York to Chicago in economy on United Airlines this week to visit their daughter.
"We used to go to Chicago for a couple of hundred dollars," she said. Asked if she would skip a trip because of the fares she said no. "We can afford it."
Airlines are betting that stays true for millions of consumers.
The average Southwest one-way fare, for example, was $225.61 in the second quarter, up from $186.65 during the same span of 2025.
"Despite high fuel and high prices, we're seeing really strong demand," Southwest Airlines CEO Bob Jordan told CNBC's "Squawk on the Street" in late July.
United said it expects to pay about $6 billion more for fuel this year than it expected at the start of 2026. American Airlines forecast a $6 billion increase in fuel costs compared with last year, each a jump of a more than 50% from 2025. Both carriers said demand is still strong, even as they're passing costs on to customers with higher fares.
"We observed minimal to no negative impact on demand from higher price points, a trend we see continuing," United Chief Commercial Officer Andrew Nocella told Wall Street analysts on the company's July 16 earnings call. The carrier expects unit revenue year over year for the rest of 2026 to rise and even exceed the second quarter's increase, he said.
Airlines are eager to make up not just the billions of dollars more they've paid for fuel this year, but also to cover higher costs of labor, maintenance and basic operating expenses like increased airport fees.
"Labor costs have escalated dramatically. Maintenance is off the charts in terms of escalation. And those are all costs that every single airline pays the same," United CEO Scott Kirby said on the call.
Volatility continues
The surprise surge in fuel costs — airlines' biggest expense after payroll — was a shock to the industry. Airlines pruned schedules this year, which can mean fewer flights per day or week on a certain route. That leaves customers with a lower number of flights to choose from and can lift fares.
According to S&P Global Energy Platts data, jet fuel prices have eased from four-year highs in April, but are still up about 50% since Feb. 28, when the U.S. and Israel's strikes on Iran kicked off the monthslong military conflict that has choked off a main shipping channel for months.
United said its fuel costs rose $575 million from the start of July until mid-month as it was reporting results, knocking $1.12 off of third-quarter adjusted earnings.
In a sign of how seriously airlines were taking the turmoil in fuel markets this year, Southwest — fearing a supply crunch on the import-reliant West Coast — sent a boat filled with more than 12 million gallons of jet fuel, about a week's supply for the airline, through the Panama Canal from Houston to Los Angeles in May. It was the first time the airline had sent fuel from Texas to another U.S. destination by sea.
U.S. Gulf Coast jet fuel was going for about $3.60 a gallon, as of Monday, according to S&P Global Energy Platts. While that's off from $4.78 a gallon in April, prices vary depending on geography and on local supply.
The volatility that's come along with on-again, off-again ceasefires with Iran has also made it harder for airlines to schedule and price flights.
Tightening grip on consumers
As fares and fuel rise, the four biggest U.S. airlines — American, Delta Air Lines, United and Southwest — have been gaining share of the U.S. market.
According to Cirium data, those carriers have 82.1% share of the seats flown by U.S. airlines this year, up from 80.7% last year and 79.7% in 2022. That increase comes even as Southwest, which carries more passengers domestically than any other, is barely growing this year.
That increasing share for big airlines is in part because there's less competition from some smaller rivals.
Spirit Airlines, the iconic U.S. discounter, collapsed in May, taking tens of millions of seats off the market overnight.
Spirit's problems were bubbling for years: Costs were on the rise for labor and other expenses, many of its Airbus jets were grounded by a Pratt & Whitney engine manufacturer defect, and upmarket travel was outshining economy class. Last summer, it filed for bankruptcy protection for the second time in a less than a year, with some analysts criticizing the carrier for not doing enough in its first Chapter 11 to cut costs. The carrier shut down before dawn May 2, failing to reach a deal with bondholders, including for a potential government bailout.
Some smaller low-cost airlines are moderating their growth, if not shrinking altogether, to save money as fuel prices remain high. According to Cirium, Avelo is shrinking and so is a combined Allegiant and Sun Country, which completed their merger in May.
Still, JetBlue Airways, Frontier Airlines and Breeze Airways, a startup launched by JetBlue founder David Neeleman are planning to grow.
"Despite this second-half earnings improvement, we plan to continue to maintain a conservative capacity profile given that the geopolitical backdrop remains fluid and fuel remains volatile," JetBlue CEO Joanna Geraghty said on an earnings call on Tuesday.
JetBlue forecast an increase in unit revenue of as much as 16.5% in the current quarter.
Frontier, which is now the largest U.S. discounter, is also enjoying increased pricing power. Its average fare revenue in the second quarter was $63.04, up from $40.94 the year before, thouh its non-fare revenue, which includes seating fees and other add-ons, was down 1% from the year-earlier period.
The Denver-based airline is planning to grow capacity as much as 18% this quarter and forecast unit revenue growth of 20%. It plans to expand about 7% in the fourth quarter.
The increase in revenue has helped offset higher fuel prices, Frontier CEO Jimmy Dempsey said in an interview Thursday. That's key to stabilizing the carrier, which lost money in five of the past six years.
"There's a lot of energy in the airline about bringing us back to profitability," Dempsey said.
Frontier, JetBlue and Allegiant are planning to introduce first-class seats in the coming months, roomier, more expensive options that executives say will cater to customers looking to pay up for more space.
Post-summer test
The next few months, when the big summer travel rush ends, will determine just how much airlines can pass along to customers. And the summer season is ending earlier and earlier, with August not as strong of a demand month as it used to be. However, carriers also say that for international travel, customers are booking more often in the fall and other traditionally off-peak periods, to avoid crowds, high prices and oppressive heat.
Airport checkpoint screenings are down 0.5% from last year through July 24, and down 2.6% from the four weeks that ended that day, David Vernon, airline analyst at Bernstein, said in a Monday note.
Justin Wittekind, 27, a podcast writer and researcher, who was on his way back to Ontario, California, from New York said he paid about $340 on United. He said he would likely think about drawing the line at $400 for a round trip.
"But if I have to go home ... I'll pay $400, but I wouldn't like it," he said.`,
    bodyJa: `今年、燃料価格が不安定な方向に向かう場合は、格安航空券を期待しないでください。
最新の連邦データによると、6月の米国の航空運賃は前年比26.5％上昇した。
航空会社幹部らは、航空会社が運賃を値上げした後も顧客は予約を続けていると述べた。彼らは今月、ウォール街のアナリストに対し、それ以上ではないにしても、少なくとも年内はその価格決定力を維持すると予想していると語った。
旅行者のマージョリー・アランさんは、娘に会いに今週、夫とユナイテッド航空のエコノミーでニューヨークからシカゴまで総額800ドルを支払ったと語った。
「私たちはよくシカゴに数百ドルを払って行きました」と彼女は語った。運賃を理由に旅行をスキップするかと尋ねると、彼女はノーと答えた。 「余裕があります。」
航空会社は、それが何百万もの消費者にとって真実であることに賭けています。
たとえば、南西部の平均片道運賃は、第2四半期には225.61ドルで、2025年の同じ期間の186.65ドルから増加しました。
サウスウエスト航空のボブ・ジョーダン最高経営責任者（ＣＥＯ）は７月下旬、ＣＮＢＣの「スコーク・オン・ザ・ストリート」で「燃料高と価格高にもかかわらず、非常に強い需要がある」と語った。
ユナイテッド航空は、今年の燃料費は2026年初めの予想よりも約60億ドル多く支払うと予想していると述べた。アメリカン航空は、燃料費が昨年比で60億ドル増加すると予想しており、それぞれ2025年から50％以上増加している。両航空会社は、コストをより高い運賃で顧客に転嫁しているにもかかわらず、需要は依然として強いと述べた。
ユナイテッドのアンドリュー・ノセラ最高コマーシャル・オフィサーは、同社の7月16日の決算会見でウォール街のアナリストに対し、「高価格帯による需要への悪影響は最小限、あるいはまったくないことが観察され、この傾向は続くと見ている」と語った。同航空会社は、2026年の残り期間のユニット収益が前年比で増加し、第2四半期の増加を上回ると予想していると同氏は述べた。
航空各社は、今年燃料代として支払った数十億ドルの増加だけでなく、人件費、メンテナンス費、空港使用料の値上げなどの基本的な運営費の増加も埋め合わせたいと考えている。
ユナイテッド航空のスコット・カービー最高経営責任者（CEO）は電話会議で、「人件費は劇的に高騰している。整備費は高騰という点で桁外れだ。そしてこれらはすべて、どの航空会社も同じように支払っているコストだ」と語った。
ボラティリティが続く
航空会社にとって人件費に次ぐ最大の出費である燃料費の予想外の高騰は、業界に衝撃を与えた。航空会社は今年スケジュールを削減し、特定の路線では1日または1週間あたりの便数が減る可能性がある。そのため、顧客は選択できるフライトの数が減り、運賃が値上げされる可能性があります。
S&Pグローバル・エネルギー・プラッツのデータによると、ジェット燃料価格は4月の4年ぶりの高値からは下落したが、米国とイスラエルの対イラン攻撃で数か月にわたる軍事衝突が始まり、主要輸送路が数カ月にわたり遮断された2月28日以降は依然として約50％上昇している。
ユナイテッド航空は、決算発表中の7月初めから今月中旬までに燃料費が5億7500万ドル増加し、第3四半期の調整後利益を1.12ドル押し下げたと発表した。
航空会社が今年の燃料市場の混乱をいかに真剣に受け止めているかの表れとして、サウスウエスト航空は輸入に依存している西海岸での供給不足を懸念し、5月に同社の約1週間分に相当する1200万ガロン以上のジェット燃料を満載したボートをパナマ運河を通ってヒューストンからロサンゼルスまで送った。同航空がテキサス州から米国の別の目的地に海上で燃料を送ったのはこれが初めてだった。
S&Pグローバル・エネルギー・プラッツによると、月曜日の時点で、米国メキシコ湾岸のジェット燃料の価格は1ガロンあたり約3.60ドルだった。 4月の1ガロン当たり4.78ドルからは下がるものの、価格は地理や地元の供給量によって異なる。
イランとの停戦の断続に伴う不安定性により、航空会社が航空便のスケジュールや価格設定を行うことも困難になっている。
消費者に対する締め付けの強化
運賃と燃料の高騰に伴い、アメリカン航空、デルタ航空、ユナイテッド航空、サウスウエスト航空という米国の4大航空会社が米国市場でのシェアを獲得している。
Ciriumのデータによると、これらの航空会社は今年米国の航空会社が運航する座席数の82.1％を占め、昨年の80.7％、2022年の79.7％から増加している。この増加は、他のどの航空会社よりも多くの国内線を運ぶサウスウエスト航空が今年ほとんど成長していないにもかかわらずだ。
大手航空会社のシェアが増加しているのは、一部の小規模なライバルとの競争が減っていることが一因だ。
米国を代表するディスカウント会社であるスピリット航空は5月に経営破綻し、一夜にして数千万席の座席を市場から奪った。
スピリット社の問題は何年も前から沸き上がっていた。人件費やその他の経費が高騰し、同社のエアバス機の多くがプラット・アンド・ホイットニー社のエンジンメーカーの欠陥により運航停止になり、高級旅行客がエコノミークラスを上回っていた。同社は昨夏、この1年足らずで2度目となる破産保護の申請を行ったが、一部のアナリストは同社が最初の連邦法11条でコスト削減に十分な措置を講じていないと批判していた。この航空会社は5月2日未明に運航を停止し、政府救済の可能性を含め社債保有者との合意に達することができなかった。
一部の小規模格安航空会社は、燃料価格が高止まりする中、費用を節約するために、完全に縮小ではないにしても、成長を緩やかにしている。 Cirium によると、Avelo は縮小しており、5 月に合併を完了した Allegiant と Sun Country の合併も同様である。
それでも、ジェットブルー航空、フロンティア航空、ジェットブルーの創設者デイビッド・ニーレマン氏が立ち上げた新興企業ブリーズ・エアウェイズは成長を計画している。
ジェットブルーのジョアンナ・ジェラティ最高経営責任者（CEO）は火曜日の決算会見で、「この下半期の収益改善にも関わらず、地政学的な背景が依然として流動的であり、燃料が不安定な状況が続いていることを考慮すると、当社は引き続き保守的な供給プロファイルを維持する計画だ」と述べた。
ジェットブルーは、今四半期のユニット収益が最大 16.5% 増加すると予測しています。
現在米国最大のディスカウント業者であるフロンティアも、価格決定力の増大を享受している。第2四半期の平均運賃収入は63.04ドルで、前年同期の40.94ドルから​​増加したが、座席料やその他の追加料金を含む運賃外収入は前年同期比1%減少した。
デンバーに本拠を置くこの航空会社は、今四半期に輸送能力を 18% まで拡大する予定で、ユニット収益の伸びは 20% になると予測しています。第４・四半期には約７％拡大する計画だ。
フロンティアのジミー・デンプシー最高経営責任者（CEO）は木曜日のインタビューで、収益の増加が燃料価格の高騰を相殺するのに役立ったと語った。それが、過去6年間のうち5年間で赤字となった航空会社を安定させる鍵となる。
デンプシー氏は「航空会社では黒字化に向けて多大なエネルギーが注がれている」と述べた。
フロンティア、ジェットブルー、アレジアントは今後数カ月以内にファーストクラスの座席を導入する予定で、より広くて高価なオプションで、お金を払ってより多くのスペースを求めている顧客に応えると幹部らは言う。
夏休み後のテスト
夏の大きな旅行ラッシュが終わる今後数カ月で、航空会社が顧客にどれだけの利益を還元できるかが決まるだろう。そして、夏のシーズンの終わりはますます早くなり、8月は以前ほど強い需要月ではなくなりました。しかし、航空会社はまた、海外旅行については、混雑、高価格、蒸し暑い暑さを避けるために、顧客は秋やその他の伝統的にオフピークの時期に予約することが多くなっているとも述べています。
バーンスタインの航空アナリスト、デービッド・バーノン氏は月曜日のメモで、空港の検問所検査数は7月24日までに昨年と比べて0.5％減少し、その日に終了した4週間と比べて2.6％減少したと述べた。
ニューヨークからカリフォルニア州オンタリオに戻る途中だったポッドキャストのライター兼研究者のジャスティン・ウィッテカインドさん（27）は、ユナイテッド航空で約340ドルを支払ったと語った。同氏は往復400ドルで線引きを検討する可能性が高いと述べた。
「でも、もし家に帰らなければならなくなったら…400ドルは払いますが、それは嫌です」と彼は言った。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/02/flights-are-getting-even-more-expensive-as-fuel-prices-rise.html",
    publishedAt: "2026-08-02T12:00:01+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 9,
  },
  {
    id: "investors-are-rotating-into-financial-st-ed63d7f5",
    title: "Investors are rotating into financial stocks. The Fed’s next move could determine how far the rally runs.",
    titleJa: "投資家は金融株にシフトしている。 FRBの次の行動によって、ラリーがどこまで続くかが決まる可能性がある。",
    summaryJa: "金融株は今月、市場で最も好調な銘柄の一つとなった。しかし、FRBの次の動きによって、ローテーションがどこまで続けられるかが決まるかもしれない。",
    bodyOriginal: `Financial stocks have been among the market’s best performers this month. The Fed’s next move, however, may determine how much further the rotation can run.`,
    bodyJa: `金融株は今月、市場で最も好調な銘柄の一つとなった。しかし、FRBの次の動きによって、ローテーションがどこまで続けられるかが決まるかもしれない。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/investors-are-rotating-into-financial-stocks-the-feds-next-move-could-determine-how-far-the-rally-runs-662c63df?mod=mw_rss_topstories",
    publishedAt: "2026-08-02T12:00:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-65765833",
    readTime: 2,
  },
  {
    id: "trump-says-he-has-canceled-a-planned-att-8cbe6732",
    title: "Trump says he has canceled a planned attack on Iran after reaching an agreement over the 'perimeters of a deal'",
    titleJa: "トランプ大統領、「合意の境界線」をめぐる合意に達した後、計画していたイランへの攻撃を中止したと発表",
    summaryJa: "ドナルド・トランプ大統領は日曜早朝、イランと近隣諸国の要請を受けて計画していたイランへの攻撃を中止したと発表した。トランプ大統領はトゥルース・ソーシャルへの投稿で、「われわれはイランや他の中東諸国から、合意の範囲内で合意したという点でいかなる攻撃も控えるよう要請されたところだ」と述べた。",
    bodyOriginal: `President Donald Trump said early Sunday he has canceled a planned attack on Iran following a request by Tehran and its regional neighbors.
"We have just been asked by Iran, and other Middle Eastern Countries, to hold off any attack in that the perimeters of a deal has been agreed to," Trump said in a Truth Social post.
He said that the agreement would include the "Immediate, Complete, and Total OPENING OF THE HORMUZ STRAIT, and an end to Iran's nuclear threat."
"Based on this request, I have agreed, for the future benefit of the WORLD and, likewise, the survival of a successful and prosperous Iran, to cancel the attack, subject to being able to rapidly make a DEAL," Trump added. "The Country of Israel joins me in this commitment."
He said the U.S. remains ready to strike Iran forcefully and is "is locked and loaded and ready to go".
Iran's Fars International state news agency said via its Telegram channel Sunday that Trump's demands amounted to a "wish list".
U.S. media reports had said that Trump was preparing for a fresh round of strikes against Iran as early as this weekend, as hopes of a negotiated end to the war that began on Feb. 28 receded and energy prices climbed.
On Saturday, a number of U.S. Embassies in the Middle East warned American citizens in the region to exercise caution and be prepared for flight cancellations amid growing tensions between Iran and the United States.
Embassies in Iraq, Jordan and the United Arab Emirates each warned U.S. citizens to consider leaving the region immediately, or be prepared to depart should there be an escalation in fighting.
The warnings came after a tanker near Oman reported being struck late Friday, with another saying it saw an explosion nearby. Iran has warned Washington that the U.S. military's blockade of the Strait of Hormuz would result in the closure of key shipping routes.
Iran's Foreign Minister Abbas Araqchi told his Saudi counterpart in a phone call on Saturday that any "aggression" by the U.S. and Israel or participation of regional countries will be met with a "decisive and proportionate response," according to Araqchi's Telegram account.
A temporary ceasefire following the signing of a memorandum of understanding between the U.S. and Iran on June 17 has effectively broken down. Neither side has given way on key sticking points, including Iran's nuclear program and control of shipping through the Strait of Hormuz, through which about a fifth of the world's oil supplies moved before the war broke out.
The Wall Street Journal cited unnamed U.S. officials as saying Friday that Trump had ordered the military to launch a fresh attack on Iran that could begin as soon as this weekend. But Trump could call off the planned strikes, officials told the Journal, if there was progress on the diplomatic front.
"We will be hitting them very hard," The Associated Press quoted Trump as saying Friday at a televised cabinet meeting at the Camp David presidential retreat. "And you know at some point, they're going to say, 'We just can't take it anymore.'"
'Adventurous action'
Over the last week, the U.S. completed a "heavy wave" of strikes against Iran, hitting dozens of Islamic Revolutionary Guard Corps targets. In retaliation, Iran attacked U.S. military bases in Kuwait and Bahrain.
Egypt said Thursday that a drone hit two ships at its Mediterranean port of Damietta, triggering a fire. No one claimed responsibility for the strike, which marks the first attack on Egyptian soil since the war began and another sign that the conflict is expanding.
Araqchi warned on Saturday against any "adventurous action" by the U.S. in separate phone calls with his Turkish counterpart and Pakistan's army commander, according to the Iranian minister's account on Telegram.
Araqchi stressed his country's readiness to respond decisively to any "aggression."
An Iranian official also warned that the U.S.'s actions would lead Iran to tighten its control over critical maritime passages.
"The continuation of the naval blockade and warmongering by the U.S. regime will not only lock the Strait of Hormuz tighter, but will also shut down other straits and chokepoints," Iran's WANA news agency quoted Mohammad Bagher Zolghadr, Secretary of Iran's Supreme National Security Council, as saying.
The U.S. reimposed a naval blockade on Iranian ships on July 13, preventing its vessels from entering or leaving its ports.
Recent strikes by Iran-backed Houthi fighters in Yemen and Friday's drone strike in Egypt have raised fears that the crucial Bab el-Mandeb strait at the southern end of the Red Sea could become a second choke point for Iran to target as the two sides tussle over the Strait of Hormuz.
On Friday, West Texas Intermediate futures rose more than 1% to close at $84.67 per barrel. Brent crude, the international benchmark, also gained more than 1% to settle at $90.12. Prices fell more than 5% for the week after selling off Monday on hopes the conflict in the Middle East would de-escalate.
– Reuters contributed to this report.`,
    bodyJa: `ドナルド・トランプ大統領は日曜早朝、イランと近隣諸国の要請を受けて計画していたイランへの攻撃を中止したと発表した。
トランプ大統領はトゥルース・ソーシャルへの投稿で、「われわれはイランや他の中東諸国から、合意の範囲内で合意したという点でいかなる攻撃も控えるよう要請されたところだ」と述べた。
同氏は、合意には「ホルムズ海峡の即時、完全、完全な開通とイランの核の脅威の停止」が盛り込まれると述べた。
トランプ大統領は、「この要請に基づき、私は世界の将来の利益、そして同様に成功し繁栄したイランの存続のため、速やかにDEALを締結できることを条件に攻撃を中止することに同意した」と付け加えた。 「イスラエル国は私とともにこの取り組みに参加します。」
同氏は、米国は引き続きイランを強力に攻撃する準備ができており、「しっかりと準備を整え、準備ができている」と述べた。
イランの国営ファールス国際通信は日曜日、テレグラムチャンネルを通じて、トランプ大統領の要求は「要望リスト」に相当すると述べた。
米メディアの報道によると、２月２８日に始まった戦争の交渉による終結への期待が後退し、エネルギー価格が上昇する中、トランプ大統領は早ければ今週末にもイランに対する新たな攻撃の準備を進めているという。
土曜日、イランと米国の間の緊張が高まる中、中東の多くの米国大使館は、中東地域の米国国民に対し、警戒を怠らず、飛行機の欠航に備えるよう警告した。
イラク、ヨルダン、アラブ首長国連邦の大使館はそれぞれ、米国民に対し、直ちに地域を離れることを検討するか、戦闘が激化した場合には出国する準備をしておくよう警告した。
この警告は、金曜日遅くにオマーン近郊のタンカーが衝突されたと報告し、別のタンカーが近くで爆発を見たという報告を受けて発出された。イランは米軍によるホルムズ海峡の封鎖は主要な輸送路の閉鎖につながると米国政府に警告した。
アラークチ外相のテレグラムアカウントによると、イランのアッバス・アラクチ外相は土曜日の電話会談でサウジ側に対し、米国とイスラエルによるいかなる「侵略」や地域諸国の参加にも「断固とした相応の対応」で対処すると語った。
6月17日の米国とイランの覚書署名後の一時停戦は事実上決裂した。イランの核開発計画や、開戦前に世界の石油供給量の約５分の１がホルムズ海峡を通過していた海峡を通る船舶の管理など、重要な争点については両国とも譲歩していない。
ウォール・ストリート・ジャーナルは、金曜日、トランプ大統領が軍にイランへの新たな攻撃を命令し、早ければ今週末にも開始される可能性があると、匿名の米国当局者の発言を引用した。しかし当局者らは、外交面で進展があれば、トランプ大統領は計画されていた攻撃を中止する可能性があるとWSJに語った。
AP通信は、トランプ大統領が金曜日、キャンプデービッド大統領静養所でテレビ放映された閣僚会議で「我々は彼らを厳しく攻撃するだろう」と述べたと報じた。 「そして、いつか彼らは『もう耐えられない』と言うでしょう。」
「冒険的なアクション」
先週、米国はイランに対する「大波」攻撃を完了し、イスラム革命防衛隊の数十の目標を攻撃した。イランは報復としてクウェートとバーレーンの米軍基地を攻撃した。
エジプトは木曜日、地中海のダミエッタ港で無人機が船舶２隻に衝突し、火災が発生したと発表した。この攻撃については誰も犯行声明を出さなかったが、これは戦争が始まって以来エジプト本土への初めての攻撃であり、紛争が拡大していることを示す新たな兆候である。
テレグラム上のイラン大臣の説明によると、アラクチ氏は土曜日、トルコ側およびパキスタン軍司令官との個別の電話会談で、米国によるいかなる「冒険的な行動」にも警告した。
アラクチ氏は、いかなる「侵略」に対しても断固として対応する用意があると強調した。
イラン当局者はまた、米国の行動によりイランは重要な海路の管理を強化することになると警告した。
イランのWANA通信は、イラン最高国家安全保障会議書記のモハマド・バガー・ゾルガドル氏の発言を引用し、「米国政権による海上封鎖と戦争挑発の継続は、ホルムズ海峡の封鎖を強化するだけでなく、他の海峡やチョークポイントも封鎖するだろう」と述べた。
米国は7月13日、イラン船舶に対する海上封鎖を再発動し、イラン船舶の入出港を阻止した。
イエメンでのイラン支援のフーシ派戦闘員による最近の攻撃と金曜日のエジプトでの無人機攻撃により、ホルムズ海峡を巡る両国の攻防の中で、紅海の南端にある重要なバブ・エル・マンデブ海峡がイランにとって標的となる第二のチョークポイントになる可能性があるとの懸念が高まっている。
金曜日、ウェスト・テキサス・インターミディエイト先物は1％以上上昇し、1バレル＝84.67ドルで取引を終えた。国際ベンチマークであるブレント原油も1％以上上昇し、90.12ドルで落ち着いた。中東紛争が激化しないとの期待から月曜に売られた後、価格は週間で５％以上下落した。
– ロイターがこのレポートに寄稿しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/02/trump-planned-attack-on-iran-canceled-after-reaching-outline-of-deal.html",
    publishedAt: "2026-08-02T07:47:37+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 5,
  },
  {
    id: "an-exam-leak-in-india-exposed-a-gen-z-jo-0e5447f7",
    title: "An exam leak in India exposed a Gen Z jobs crisis that goes much deeper",
    titleJa: "インドでの試験漏洩により、Z世代の雇用危機がさらに深刻化していることが明らかになった",
    summaryJa: "インドの若者の失業危機はナレンドラ・モディ首相の政府にとって最大の脆弱性の一つとなっており、国の経済的野心と何百万もの若い卒業生が直面している現実とのギャップを浮き彫りにしている。今月、流出した論文によってインドの超競争率の高い医学部入学試験の再試験が強制されたことを受け、不満が公然と噴出し、ソーシャルメディアを中心としたバイラルな若者運動「ゴキブリ・ジャンタ党」が主導する全国規模の学生抗議運動を引き起こした。",
    bodyOriginal: `India's youth unemployment crisis has become one of the biggest vulnerabilities for Prime Minister Narendra Modi's government, exposing the gap between the country's economic ambitions and the reality facing millions of young graduates.
The frustration erupted into the open this month after a leaked paper forced a retest of India's ultra-competitive medical entrance exam, prompting nationwide student protests led by a viral, social media-focused youth movement called the Cockroach Janta Party.
While the exam scandal was the immediate trigger, economists say the demonstrations reflected something much deeper: a generation struggling to find secure, well-paying jobs despite spending years competing for an education.
Seeing footage of police fire tear gas at student protesters in Delhi on July 20 struck a nerve with 27-year-old Mumbai professional Abheet Mohanty (whose name has been changed due to the sensitive nature of the topic). He said he wasn't protesting because of one leaked exam paper, but because of what it represented.
The Gen Z students in the crowd were calling for accountability from the government after exam papers were leaked in May for a crucial medical entrance exam test, also known as the National Eligibility cum Entrance Test (NEET). While a retest took place in June, more than 20 students died by suicide in the aftermath of the leak.
"I felt for the students because I was a NEET student back in 2018," Mohanty told CNBC, recalling the immense pressure he felt as his parents pushed him to take the test, which would help him land a secure job with good pay.
Mohanty didn't pass the test and instead pursued a degree in communications. "It was very difficult to get a job," he said. After waiting a year, he landed a job in Mumbai, but his parents insisted that he take the NEET again instead.
They said his monthly salary of 20,000 rupees ($208) was "unsustainable" in Mumbai. Mohanty joined the Gen Z protests in the city on July 23.
His experience is increasingly common. India has the world's largest Gen Z population, but also faces one of its toughest employment challenges.
Graduate unemployment among 15-to 25-year-olds is close to 40%, according to the State of Working India 2026 report, while graduates accounted for two-thirds of the country's unemployed in 2023.
As good jobs become harder to find, millions of young Indians are pinning their hopes on a handful of ultra-competitive entrance exams for medicine, engineering and government jobs that offer one of the few reliable paths to secure, well-paid jobs.
Unsurprisingly, the number of students applying for the NEET exam rose 50% to over 2.2 million between 2019 and 2026, according to data from the National Testing Agency.
And the scramble extends well beyond medicine. Millions of students also compete for the Joint Entrance Examination (JEE) to enter the prestigious Indian Institutes of Technology (IITs), the Common University Entrance Test (CUET) for undergraduate admissions, and the Union Public Service Commission's (UPSC) civil services examination.
In India's tech city Bengaluru, 24-year-old graphic designer Aditi Garg faces a similar dilemma. Jobs are rare, applicants are many, and as a result, "companies pay peanuts," she told CNBC.
More than half a decade ago, Garg failed to get into the Indian Institute of Technology (IIT), a prestigious institute, despite a good score.
"I have lost count of the number of jobs I applied to last year," said Garg, adding that people of her generation are "barely able to find a job or settle for one that barely pays bills." There is little room for negotiating better pay, she explains, as there are "always a hundred other people" desperate enough to do the job for less.
This angst — and frustration at India's state of education and economy — is what Garg said drove her to join the offshoot of the Delhi student protest in Bengaluru.
Rush for NEET
Neelanjan Sircar, an associate professor in the division of social sciences at Ahmedabad University, told CNBC that the appeal of medicine and government jobs to young people is clear.
"In a country where 'nearly one in two graduates is not getting a job,' young people are choosing to take routes like the NEET that guarantee one," he said.
Seventeen-year-old Dimpy Gola (name changed) sat the NEET exam twice this year, first in May and then again when it was rescheduled in June. She did not score high enough to secure a medical college place and now plans to take a gap year before trying again next year.
Even if she gets a master's degree in science and a PHD, her prospects of finding a job will be "uncertain," she said.
Last week, India's Education Minister Dharmendra Pradhan resigned in response to the Gen Z student protests — which Gola welcomed. She said the paper leak had "distressed" many students, especially those who had dropped out for more than a year in an effort to pass the test.
Angry youth
The protests were notable because they targeted a government that has largely maintained strong electoral support among young voters. Experts say frustrations over education and employment are emerging as one of the biggest vulnerabilities for the Modi government.
While the exam leaks were the immediate trigger for the protest, the underlying issue is the limited supply of "secure, well-paid jobs" in India, Alexandra Hermann Prasad, lead economist at Oxford Economics, told CNBC.
India's graduate jobs problem has been building for years. Access to higher education has expanded rapidly, but job creation has failed to keep pace. Between 2004 and 2023, the country produced roughly 5 million graduates each year, but only 2.8 million found jobs, and even fewer secured salaried employment, according to the State of Working report.
Modi inherited many of these structural challenges when he took office in 2014, but much of his political appeal rested on promises of economic transformation and better employment opportunities. Economists say progress has been uneven, with India's shift from agriculture into higher-productivity manufacturing proving slower than many had hoped.
Global research house Bernstein, in a report in April, underscored the failure of India's economic policies to shift its workforce away from agriculture, boost the manufacturing sector, and direct investment into sovereign artificial intelligence tech.
The report highlighted that nearly 45% of the workforce remains in agriculture, which contributes just 15% to 16% of GDP, while manufacturing's share of the economy has remained largely unchanged. Bernstein also warned that artificial intelligence could eventually threaten India's IT services and business process outsourcing sectors, another traditional source of upward mobility.
It means that, more than a decade after Modi came to power, the government's economic record is increasingly being judged by a generation of young graduates whose expectations have risen faster than employment opportunities.
Slow job growth
Twenty-one-year-old Arshia Mathur from Delhi attended the July 20 Gen Z protest because, despite graduating with an English Honors degree, she feels "nervous" and "skeptical" about finding a job.
"I have applied to a lot of roles" but no one responds, she said, adding that her college seniors and friends have a similar experience. She hopes that things will improve once she gets a master's degree.
Though Mathur said she is apolitical, she briefly followed the Cockroach Janta Party's Instagram page and supported the protests. The satirical youth movement — formed in response to comments comparing unemployed young people to cockroaches — resonated with her.
In the aftermath of the protest, Modi appointed a new Education Minister Pralhad Joshi and announced the creation of a task force, headed by Indian tech entrepreneur Nandan Nilekani, to overhaul the education system.
On Thursday, the parliament passed a bill to amend the anti-paper leak law, enforcing stricter punishment for those found to be involved with examination leaks, such as a jail term of up to 10 years and a fine up to 50 lakh rupees.
But as educated young Indians increasingly feel the promise of upward mobility has not materialized, economists warn that more will need to be done to prevent India's much-celebrated demographic dividend becoming a demographic burden.`,
    bodyJa: `インドの若者の失業危機はナレンドラ・モディ首相の政府にとって最大の脆弱性の一つとなっており、国の経済的野心と何百万もの若い卒業生が直面している現実とのギャップを浮き彫りにしている。
今月、流出した論文によってインドの超競争率の高い医学部入学試験の再試験が強制されたことを受け、不満が公然と噴出し、ソーシャルメディアを中心としたバイラルな若者運動「ゴキブリ・ジャンタ党」が主導する全国規模の学生抗議運動を引き起こした。
経済学者らは、試験スキャンダルが直接の引き金となったが、このデモはもっと深い何かを反映している、つまり教育を得るために何年も競争してきたにもかかわらず、安全で高収入の仕事を見つけるのに苦労している世代を反映していると述べている。
7月20日にデリーで警察が学生デモ参加者に催涙ガスを発射する映像を見て、ムンバイの27歳の専門家アヒート・モハンティさん（話題のデリケートな性質のため名前は変更されている）の神経を逆なでした。同氏は、試験用紙が漏洩したために抗議しているのではなく、それが何を表しているかのために抗議していると述べた。
国家資格兼入学試験（ニート）としても知られる重要な医学部入学試験の試験問題が5月に漏洩したことを受け、群衆にいたZ世代の学生らは政府に説明責任を求めていた。 6月に再試験が行われたが、漏洩の余波で20人以上の学生が自殺で死亡した。
モハンティさんはCNBCに対し、「2018年当時、私はニートの学生だったので、学生たちに同情した」と語り、両親から試験を受けるよう勧められ、高賃金で安定した仕事に就くことができると感じた計り知れないプレッシャーを思い出した。
モハンティさんは試験に合格せず、代わりにコミュニケーションの学位取得を目指した。 「仕事を見つけるのはとても難しかった」と彼は語った。 1年待った後、彼はムンバイで仕事を見つけたが、両親は代わりに再びニートになるよう主張した。
同氏の月給２万ルピー（２０８ドル）はムンバイでは「持続不可能」だと彼らは主張した。モハンティさんは7月23日に市内で行われたZ世代の抗議活動に参加した。
彼の経験はますます一般的になっています。インドは世界最大のZ世代人口を抱えていますが、最も厳しい雇用課題の一つにも直面しています。
2026年のインド労働実態報告書によると、15～25歳の大学院生の失業率は40％近くとなっており、2023年のインドの失業者の3分の2は卒業生が占めている。
良い仕事を見つけるのが難しくなる中、何百万人ものインドの若者が、安全で高収入の仕事に就くための数少ない確実な道を提供する医学、工学、政府の仕事のための、非常に競争率の高い少数の入学試験に希望を託している。
当然のことながら、国家試験庁のデータによると、2019年から2026年の間にニート試験に応募する学生の数は50％増加し、220万人以上となった。
そしてこの争奪戦は医学をはるかに超えて広がっている。また、何百万人もの学生が、名門インド工科大学（IIT）に入学するための合同入学試験（JEE）、学部入学のための大学入学共通テスト（CUET）、連邦公務員委員会（UPSC）の公務員試験を目指して競い合っています。
インドのテクノロジー都市ベンガルールでも、24 歳のグラフィック デザイナー、アディティ ガーグさんも同様のジレンマに直面しています。仕事は稀で、応募者は多く、その結果「企業はピーナツを支払っている」と彼女はCNBCに語った。
5年以上前、ガーグさんは良い成績を収めたにもかかわらず、名門校であるインド工科大学（IIT）に入学できなかった。
「昨年応募した仕事の数は数え切れないほどだ」とガーグさんは語り、彼女の世代の人々は「仕事を見つけることも、ほとんど給料を払えない仕事に落ち着くこともほとんどできない」と付け加えた。より低い賃金で仕事をしようと切望している人は「常に他にも100人いる」ため、より良い賃金を交渉する余地はほとんどないと彼女は説明する。
この不安、そしてインドの教育と経済の現状に対するフラストレーションが、彼女をバンガロールでのデリー学生抗議活動の派生活動に参加させたのだ、とガーグさんは語った。
ニートラッシュ
アーメダバード大学社会科学部のニーランジャン・シルカール准教授はCNBCに対し、若者にとって医学と政府の仕事が魅力的であることは明らかだと語った。
「『卒業生のほぼ2人に1人が職に就いていない』この国で、若者は1人を保証するニートのようなルートを選択している」と同氏は述べた。
17歳のディンピー・ゴラさん（名前変更）は今年、ニート試験を2回受けた。1回目は5月、2回目は6月に日程が変更された。彼女は医科大学への入学を確保できるほど高いスコアを獲得できなかったため、ギャップイヤーを取得してから来年再挑戦する予定だ。
たとえ科学の修士号と博士号を取得したとしても、就職の見通しは「不確実」だという。
先週、インドのダルメンドラ・プラダン教育大臣はZ世代の学生抗議活動を受けて辞任したが、ゴーラ氏はこれを歓迎した。彼女は、紙の漏洩により多くの学生、特に試験に合格するために1年以上中退していた学生を「苦しめた」と述べた。
怒る若者
この抗議活動が注目に値したのは、若者の有権者の間で選挙で強い支持を維持してきた政府を標的にしたからだ。専門家らは、教育と雇用をめぐる不満がモディ政権にとって最大の脆弱性の一つとして浮上していると指摘する。
オックスフォード・エコノミクスの首席エコノミスト、アレクサンドラ・ヘルマン・プラサド氏はCNBCに対し、試験漏洩が抗議活動の直接の引き金となったが、根底にある問題はインドにおける「安全で高賃金の仕事」の供給が限られていることだと語った。
インドの大学院生の雇用問題は何年にもわたって深刻化している。高等教育へのアクセスは急速に拡大したが、雇用創出が追いついていない。労働現状報告書によると、2004年から2023年にかけて、この国は毎年約500万人の卒業生を輩出したが、就職できたのはわずか280万人で、確保された給与雇用はさらに少ない。
モディ氏は2014年に就任した際、こうした構造的課題の多くを引き継いだが、彼の政治的魅力の多くは経済変革と雇用機会の改善の約束に基づいていた。エコノミストらは、インドの農業から生産性の高い製造業への移行が大方の予想よりも遅れていることが判明し、進捗状況は一様ではないと指摘する。
世界的調査会社バーンスタインは4月の報告書で、農業から労働力をシフトさせ、製造業を活性化し、主権のある人工知能技術への直接投資を図るというインドの経済政策の失敗を強調した。
報告書は、労働力の45％近くが依然として農業に携わっており、GDPのわずか15～16％に寄与している一方、経済に占める製造業のシェアはほとんど変わっていないことを強調した。バーンスタイン氏はまた、人工知能は最終的にインドのITサービスやビジネスプロセスのアウトソーシング部門（これも伝統的な上昇志向の源泉）を脅かす可能性があると警告した。
これは、モディ氏が政権を握ってから10年以上が経ち、政府の経済実績は、雇用の機会よりも期待が高まっている若い卒業生の世代によってますます評価されるようになっていることを意味する。
雇用の伸びが遅い
デリー在住の21歳のアルシア・マトゥールさんは、イギリスの優等学位を取得して卒業したにもかかわらず、仕事を見つけることに「緊張」し「懐疑的」だと感じているため、7月20日のZ世代の抗議活動に参加した。
「たくさんの役に応募したけど、誰も応じてくれなかった」と彼女は言い、大学の先輩や友人たちも同じような経験をしていると付け加えた。彼女は修士号を取得すれば状況が改善されることを望んでいます。
マトゥールさんは自分は政治に無関心だと述べたが、ゴキブリ・ジャンタ党のインスタグラム・ページを短期間フォローし、抗議活動を支援した。失業中の若者をゴキブリに喩えるコメントに反応して結成された風刺的な若者運動が彼女の共感を呼んだ。
抗議活動の余波を受けて、モディ首相は新たにプラハド・ジョシ教育大臣を任命し、教育制度を徹底的に見直すため、インドのテクノロジー起業家ナンダン・ニレカニ氏を長とする特別委員会の創設を発表した。
議会は木曜日、書類漏洩防止法改正案を可決し、試験漏洩に関与したと判明した者に対し、最長10年の懲役と最高500万ルピーの罰金などの厳しい処罰を課した。
しかし、教育を受けたインドの若者たちは上昇志向の期待が現実化していないと感じるようになり、経済学者らは、インドの大いに称賛される人口ボーナスが人口統計上の負担になるのを防ぐためにさらなる対策が必要だと警告している。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/02/india-exam-leak-protests-jobs-crisis-gen-z-unemployment-modi.html",
    publishedAt: "2026-08-02T05:18:21+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 9,
  },
  {
    id: "trump-says-he-is-cancelling-strikes-on-i-03742517",
    title: "Trump says he is cancelling strikes on Iran subject to 'rapidly' making deal",
    titleJa: "トランプ大統領、「速やかに」合意形成を条件にイラン攻撃を中止すると表明",
    summaryJa: "トランプ大統領、「速やかに」合意形成を条件にイラン攻撃を中止すると表明- 公開されました",
    bodyOriginal: `Trump says he is cancelling strikes on Iran subject to 'rapidly' making deal
- Published
Donald Trump says he has cancelled strikes against Iran provided a deal was struck "rapidly" with the country.
In a post on Truth Social, the US president wrote that he had decided to "cancel the attack, subject to being able to rapidly make a DEAL" - which would include the immediate opening of the Strait of Hormuz and an end to "Iran's nuclear threat".
Trump said the decision had been taken alongside Israel. The announcement came amid US media reports that Washington might have been planning new, intense strikes on Iran over the weekend.
Tehran earlier accused the US of escalating tensions, saying any regional state co-operating with Washington would be "engulfed by the flames of war".
In the post, Trump said the US was "locked and loaded and ready to go against the Islamic Republic of Iran, at levels of Military Terror, Strength, and Power not seen since World War II".
But he said he had cancelled the strikes after being "asked" by Iran and other countries in the Middle East to "hold off" on any attack to allow for a deal to be reached.
He appeared to suggest progress towards an agreement had been made, saying that the "perimeters of a deal has been agreed to".
"This would include the Immediate, Complete, and Total OPENING OF THE HORMUZ STRAIT, and an end to Iran's nuclear threat," he wrote.
Iran has not yet responded to Trump's announcement.
The US government had earlier urged Americans across the Middle East to be alert and ready to leave "should there be escalation" in the region.
"Americans currently in the Middle East should exercise caution and heightened vigilance and should be prepared for flight cancellations, periodic airspace closures, and potential travel disruptions," the security alert said on Saturday.
The US and Israel were planning what would be one of the harshest bombing campaigns to date against energy infrastructure targets in Iran, multiple sources earlier told CBS News, the BBC's media partner in America.
The plan came up during Trump's cabinet meeting on Friday, sources told CBS News.
During that meeting, Trump was heard saying while reporters were still in the room: "We'll be hitting them [Iranians] very hard. At some point, they're going to say, 'We just can't take it anymore.'"
Axios reported that Saudi Crown Prince Mohammed bin Salman spoke to Trump on Saturday and "expressed concern" about the potential strikes. Reuters also reported the phone call.
Washington and Tehran have engaged in escalating strikes and counter-strikes since a ceasefire in April aimed at pausing the war fell apart in June.
Earlier this week, the US said it completed a "heavy wave" of strikes against Iran in retaliation for an attempted ballistic missile attack on American forces in the region.
The US has blockaded Iranian ports and bombed Iranian sites, while Iran has fired missiles and drones at US assets in countries across the Middle East and targeted shipping in the Strait of Hormuz, a vital waterway for global oil shipping.
The US and Israel began launching their strikes against Iran on 28 February, with the outbreak of war leading to significant fluctuations in oil prices.
Related topics
- Published6 hours ago
- Published2 days ago`,
    bodyJa: `トランプ大統領、「速やかに」合意形成を条件にイラン攻撃を中止すると表明
- 公開されました
ドナルド・トランプ大統領は、イランとの合意が「速やかに」締結された場合には、イランに対する攻撃を中止すると述べた。
トランプ大統領はトゥルース・ソーシャルへの投稿で、ホルムズ海峡の即時開放と「イランの核の脅威」の停止を含む「迅速な合意ができることを条件に、攻撃を中止する」ことを決定したと書いた。
トランプ大統領は、この決定はイスラエルとともに行われたと述べた。この発表は、米国政府が週末にイランに対する新たな激しい攻撃を計画している可能性があるとの米国メディアの報道の中で発表された。
イラン政府はこれに先立ち、米国と協力する地域諸国は「戦争の炎に包まれる」だろうと述べ、緊張が高まっているとして米国を非難した。
トランプ大統領は投稿の中で、米国は「第二次世界大戦以来見られないレベルの軍事的テロ、戦力、権力でイラン・イスラム共和国に対抗する準備が整っており、準備が整っている」と述べた。
しかし同氏は、イランや他の中東諸国から、合意に達するためにいかなる攻撃も「控える」よう「求められた」ため、攻撃を中止したと述べた。
同氏は「合意の境界線は合意された」と述べ、合意に向けた進展があったことを示唆したようだ。
「これにはホルムズ海峡の即時、完全、完全な開通とイランの核の脅威の終結が含まれるだろう」と同氏は書いた。
イランはまだトランプ大統領の発表に反応していない。
米政府はこれに先立ち、中東全域の米国民に対し、この地域で「事態がエスカレートした場合には」警戒し、撤退する用意があるよう呼び掛けていた。
土曜日の警戒警報は、「現在中東に滞在している米国人は警戒と警戒を強化し、航空便の欠航や定期的な空域閉鎖、旅行の混乱の可能性に備える必要がある」と述べた。
米国とイスラエルは、イランのエネルギーインフラ標的に対するこれまでで最も過酷な爆撃作戦の一つとなるものを計画していたと、複数の関係筋が先にBBCの米国メディアパートナーであるCBSニュースに語った。
この計画は金曜日のトランプ閣僚会議で持ち上がったと関係者がCBSニュースに語った。
その会談中、記者らがまだ部屋にいる間にトランプ大統領が「我々は彼ら（イラン人）を非常に厳しく攻撃するだろう。ある時点で彼らは『もう我慢できない』と言うだろう」と発言したのが聞こえた。
アクシオスは、サウジのムハンマド・ビン・サルマン皇太子が土曜日にトランプ大統領と会談し、攻撃の可能性について「懸念を表明」したと報じた。ロイター通信も電話会談を報じた。
戦争一時停止を目的とした4月の停戦が6月に決裂して以来、米国とイラン政府はストライキと反撃を激化させている。
今週初め、米国は、地域の米軍に対する弾道ミサイル攻撃未遂への報復として、イランに対する「大波状」の攻撃を完了したと発表した。
米国はイランの港を封鎖し、イランの拠点を爆撃している一方、イランは中東諸国の米国資産にミサイルや無人機を発射し、世界の石油輸送にとって重要な水路であるホルムズ海峡の船舶を標的にしている。
米国とイスラエルは2月28日にイランに対する攻撃を開始し、戦争の勃発により原油価格が大幅に変動した。
関連トピック
- 6 時間前に公開
- 2 日前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cjwx74qgld2o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-02T03:05:16+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/9c36/live/eb797180-8e18-11f1-b916-5b9500660788.jpg",
    readTime: 3,
  },
  {
    id: "how-spain-s-migrant-crisis-created-a-pol-6e3379c0",
    title: "How Spain's migrant crisis created a political storm - whipped up by social media",
    titleJa: "スペインの移民危機がどのようにして政治的嵐を引き起こしたのか - ソーシャルメディアによって引き起こされた",
    summaryJa: "スペインの移民危機がどのようにして政治的嵐を引き起こしたのか - ソーシャルメディアによって引き起こされた- 公開されました",
    bodyOriginal: `How Spain's migrant crisis created a political storm - whipped up by social media
- Published
Most of the tens of thousands of migrants who swam into the Spanish exclave of Ceuta on Thursday have now returned to Morocco, escorted to the border by Spanish soldiers and police.
But the extraordinary surge of arrivals has left at least 67 people dead, their bodies pulled from the sea where they floated alongside abandoned rubber rings and flippers.
This week's events have also shaken Europe politically, once again exposing divisions over the sensitive issue of migration.
And they've left lingering questions about what sparked the sudden influx: whether social media posts promising an easy path to Europe just went viral or this was something more deliberate, even organised.
The politics
Whatever the cause, Spain's socialist prime minister is angry with the response.
Pedro Sanchez has hit out at some in the EU for "attacking" Spain in this crisis, playing politics instead of showing support.
He meant Italy, above all.
Fratelli d'Italia, the hard-right party of Prime Minister Giorgia Meloni, had been quick to post images of migrants racing through the streets of Ceuta.
"This is the Sanchez model the Italian left wing likes so much," the caption crowed.
Meloni then announced she was suspending Italy's Schengen agreement with Spain that allows for the free movement of people, citing a security threat.
Madrid is fuming.
The way Spain sees it, the crisis has been contained and Ceuta is not in the Schengen zone so Moroccan migrants were never going to head for mainland Europe, unchecked.
Meloni knows that.
But she faces elections next year with her coalition losing ground to a new and virulently anti-immigrant party. This was a chance to sound tough herself and claw back votes and she leaped on it.
Soft touch Spain?
Italy is not the only country to see Spain as soft on migration, though.
Meloni's call for an urgent meeting of interior ministers to be held on Tuesday was signed by almost two dozen EU heads of state, calling for the elimination of all policies that could be "pull factors" to Europe.
Above all, they mean Spain's controversial move to allow hundreds of thousands of undocumented migrants apply for residence and work permits and "regularise" their status.
The government's pragmatic: Spain is ageing and needs workers.
But those who flocked to the beaches of Ceuta this week were not heading to sign up for a campaign that's already closed.
Sanchez himself points instead to a recent ruling by Spain's Supreme Court: it said those who enter by sea cannot be pushed back immediately.
The prime minister argues that was misrepresented by smugglers to promise an easy path to Europe.
The crowd heading for Ceuta didn't need to pay smugglers, though, because most were Moroccan and the route is well known.
The message was actually spread online.
Migrants have shown social media posts to reporters with people shouting that "Spain is Open" and jumping into the sea.
Multiple accounts we've checked ourselves show young people in wetsuits and flippers, or filming themselves already swimming, mixed with pictures from inside Ceuta itself.
Some have only been active for weeks. Several have tens of thousands of likes.
All their promises were false.
The crowds who made it to kiss the shore in Ceuta with joy were met with nothing. Without food or shelter, and with no way on to continental Europe, most quickly turned back.
So what was it all about?
So have migrants been "weaponised" as happened a few years back in Belarus, for example?
If so, who did it?
For now we only see those enjoying the results.
The global right wing are "hyperventilating with happiness", as journalist Andrea Rizzi wrote in Spain's El Pais newspaper.
US President Donald Trump, angry at Spain for opposing his war on Iran, has talked of a "catastrophe" and an "invasion". Like Meloni, he has an election looming.
Russia has been gloating, too: it loves chaos and division in Europe. Anything to weaken Ukraine's allies.
As for Morocco, it's blaming "criminal organisations". But its border guards must have seen the crowds building.
The last time something similar happened, albeit smaller, Spain and Morocco were at loggerheads over Western Sahara, a former colony.
There are new tensions, right now.
Sanchez is emphatically not blaming Morocco for what happened, calling Rabat a "good ally".
But his critics call that appeasement and say he should be "showing teeth".
Results
For now, Spain is busy protecting Ceuta against further incident.
It is extending the border fence out to sea, attaching long lines of orange buoys to the jetty which ships will then patrol to deter future swimmers.
Next week, EU interior ministers will talk about strengthening external borders, with those on the populist right emboldened.
Travellers from Spain to Italy face random document checks by police for a few weeks.
So no huge change.
Except for the dozens of young people who set out to sea, chasing a vision they'd seen online, and are now being sent back to Morocco in coffins.
- Published7 hours ago
- Published1 day ago`,
    bodyJa: `スペインの移民危機がどのようにして政治的嵐を引き起こしたのか - ソーシャルメディアによって引き起こされた
- 公開されました
木曜日にスペインの飛び地セウタに泳いで入った数万人の移民のほとんどが現在、スペインの兵士と警察に国境まで護送されてモロッコに戻っている。
しかし、異常な到着者数の急増により少なくとも67人が死亡し、遺体は海から引き上げられ、放置されたゴム製のリングや足ひれとともに浮かんでいた。
今週の出来事はヨーロッパを政治的にも揺るがし、移民というデリケートな問題をめぐる分裂を再び浮き彫りにした。
そして、何が突然の流入を引き起こしたのかについて、彼らは依然として疑問を残している。ヨーロッパへの簡単な道を約束するソーシャルメディアの投稿がただ広まったのか、それともこれはもっと意図的で組織的な何かだったのか。
政治
原因が何であれ、スペインの社会党首相はこの対応に怒っている。
ペドロ・サンチェス氏は、この危機においてスペインを「攻撃」し、支持を示す代わりに政治ごっこをしているとしてEU内の一部を非難している。
彼が言ったのは、何よりもイタリアのことだった。
ジョルジア・メローニ首相率いる極右政党「フラテッリ・ディタリア」は、セウタの街路を駆け巡る移民の画像をいち早く投稿していた。
「これはイタリアの左翼が大好きなサンチェスモデルだ」とキャプションが躍った。
その後、メローニ氏は安全保障上の脅威を理由に、人の自由な移動を認めるイタリアとスペインのシェンゲン協定を停止すると発表した。
マドリッドは大騒ぎになっている。
スペインの見方では、危機は収束しており、セウタはシェンゲン圏内ではないため、モロッコ移民が無制限にヨーロッパ本土に向かうことは決してなかった。
メローニはそれを知っています。
しかし、彼女は来年の選挙に直面しており、彼女の連立政権は新しく猛烈な反移民政党に劣勢に立たされている。これは自分自身に厳しい印象を与え、投票を取り戻すチャンスであり、彼女はそれに飛びついた。
ソフトタッチのスペイン？
しかし、スペインが移民に対して甘いと見ているのはイタリアだけではない。
メローニ氏は火曜日に緊急内相会議を開催するよう呼びかけ、約20人のEU諸国首脳が署名し、欧州への「引き寄せ要因」となる可能性のある政策をすべて撤廃するよう求めた。
何よりも、それらは、何十万人もの不法移民に居住許可と労働許可の申請を許可し、彼らの地位を「正規化」することを許可するという物議を醸しているスペインの措置を意味する。
政府の現実主義者は、スペインは高齢化が進んでおり、労働者を必要としている。
しかし、今週セウタのビーチに集まった人々は、すでに終了したキャンペーンに登録するつもりはなかった。
サンチェス自身は代わりに、スペイン最高裁判所による最近の判決を挙げ、海から入国した者を直ちに追い返すことはできないとした。
首相は、これは密航業者によってヨーロッパへの容易な道を約束するために誤って伝えられたと主張している。
しかし、セウタに向かう群衆は密航業者にお金を払う必要はなかったが、それは大半がモロッコ人であり、このルートはよく知られていたからだ。
このメッセージは実際にオンラインで拡散されました。
移民らは、人々が「スペインは開かれている」と叫び、海に飛び込むソーシャルメディアの投稿を記者らに見せた。
私たちが独自に確認した複数のアカウントには、ウェットスーツと足ひれを着た若者、または既に泳いでいる自分たちを撮影している姿が、セウタ内部の写真と混じって映っていた。
数週間しか活動していない人もいます。中には数万件の「いいね！」が付いている人もいます。
彼らの約束はすべて嘘だった。
喜び勇んでセウタの海岸にキスをした群衆は何の成果も得られなかった。食べ物も住む場所もなく、ヨーロッパ大陸へ行く道もなかったので、ほとんどの人はすぐに引き返しました。
それで、それは一体何だったのでしょうか？
では、例えば数年前にベラルーシで起きたように、移民は「武器を持たせられた」ことはあるのだろうか？
もしそうなら、誰がやったのですか？
今のところ、私たちは結果を楽しんでいる人たちだけを見ています。
ジャーナリストのアンドレア・リッツィ氏がスペインのエル・パイス紙に書いたように、世界の右翼は「幸福感で過呼吸」になっている。
ドナルド・トランプ米大統領は、対イラン戦争に反対したスペインに激怒し、「大惨事」と「侵略」について語った。メローニと同じように、彼にも選挙が迫っている。
ロシアもまた、ヨーロッパの混乱と分裂を愛しているとほくそ笑んでいる。ウクライナの同盟国を弱体化させるためなら何でも。
モロッコに関しては「犯罪組織」を非難している。しかし、国境警備隊は群衆が増えていくのを見ていたに違いない。
前回同様のことが起こったとき、規模は小さかったとはいえ、スペインとモロッコは元植民地だった西サハラを巡って対立していた。
今、新たな緊張が生じています。
サンチェス氏は、ラバトを「良き同盟国」と呼び、今回の出来事についてモロッコを非難しないことを強調した。
しかし、同氏を批判する人々はそれを宥和的と呼び、同氏は「歯を見せる」べきだと主張している。
結果
今のところスペインはさらなる事件からセウタを守ることに忙しい。
国境フェンスを海まで延長し、桟橋にオレンジ色のブイの長い列を取り付け、将来の遊泳を阻止するために船舶が巡回する予定だ。
来週、EU内務大臣らは対外国境の強化について話し合う予定で、ポピュリスト右派も勇気を出している。
スペインからイタリアへの旅行者は数週間にわたって警察による抜き打ちの書類検査を受けることになる。
したがって、大きな変化はありません。
ネットで見たビジョンを追って海に出た数十人の若者を除いては、今は棺に入れられてモロッコに送り返されている。
- 7 時間前に公開
- 1 日前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c62vl925dqdo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-02T00:55:16+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/b913/live/403e8040-8e03-11f1-8f5c-bb464f752049.jpg",
    readTime: 6,
  },
  {
    id: "tourist-plane-crashes-in-peru-killing-13-07e61dee",
    title: "Tourist plane crashes in Peru, killing 13",
    titleJa: "ペルーで観光旅客機が墜落、13人死亡",
    summaryJa: "ペルーで観光旅客機が墜落、13人死亡- 公開されました",
    bodyOriginal: `Tourist plane crashes in Peru, killing 13
- Published
A small plane carrying tourists has crashed in Peru, killing all 13 people on board, according to local news reports and Peruvian officials.
The aircraft, a Cessna Caravan C-208, had been flying over Nazca Lines archaeological site when it went down on Saturday. Eleven passengers and two pilots were on board.
The passengers included two German, two Spanish and seven Italian tourists, Peru's state news agency reported. The cause of the crash is not yet clear.
The Nazca Lines is a popular tourist attraction and Unesco World Heritage site in southern Peru that features ancient drawings of animals in desert sand. Tourists often fly in small planes to see the extent of the drawings.
"Given the severity of the accident, there are no survivors. We have recovered four bodies so far," Police Major Jorge Andrade said, according to AFP.
The crash happened around 13:00 local time (19:00 BST) in the Pueblo Viejo region after the plane departed from an airport in Pisco, Peru.
Video from Reuters news agency shows firefighters spraying water at the scene as smoke rises from the wreckage.
In a statement in Spanish posted online by the Municipalidad Provincial de Nasca, officials expressed "deep sorrow" for the accident and extended "heartfelt condolences to the families of the deceased".
The statement said the plane belonged to local Peruvian airline Aerodiana.
In a statement, the airline said it would "assess its flight schedule in accordance with the directives of the relevant authorities", according to Reuters.
The BBC has contacted the airline for comment.
This isn't the first plane to crash over the famed site in the past few decades.
In 2022, another small tourist plane crashed during a flight over the Nazca Lines site, killing seven on board.
And in 2010, a tourist plane went down over the site, killing six people on board.`,
    bodyJa: `ペルーで観光旅客機が墜落、13人死亡
- 公開されました
地元報道やペルー当局によると、観光客を乗せた小型飛行機がペルーで墜落し、乗っていた13人全員が死亡した。
飛行機はセスナキャラバンC-208で、土曜日に墜落したとき、ナスカの地上絵遺跡上空を飛行していた。乗客11名とパイロット2名が搭乗していた。
ペルーの国営通信によると、乗客にはドイツ人２人、スペイン人２人、イタリア人観光客７人が含まれていた。墜落の原因はまだ明らかになっていない。
ナスカの地上絵はペルー南部にある人気の観光名所であり、砂漠の砂に描かれた古代の動物の絵が描かれたユネスコ世界遺産です。観光客は、絵の範囲を見るために小型飛行機で飛ぶことがよくあります。
AFP通信によると、ホルヘ・アンドラーデ警察少佐は「事故の深刻さを考えると生存者はいない。これまでに4人の遺体を回収した」と述べた。
墜落は、飛行機がペルーのピスコの空港を出発した後、現地時間13時（BST19時）頃にプエブロ・ビエホ地域で発生した。
ロイター通信のビデオには、残骸から煙が立ち上る中、消防士が現場で放水している様子が映っている。
ナスカ市当局はオンラインに掲載したスペイン語の声明で、事故に対する「深い悲しみ」を表明し、「亡くなった方の家族に心からのお悔やみ」を表明した。
声明によると、飛行機は地元ペルーの航空会社アエロディアナのものだった。
ロイター通信によると、同社は声明で「関連当局の指示に従って運航スケジュールを検討する」と述べた。
BBCは航空会社にコメントを求めた。
過去数十年間でこの有名な場所上空で墜落した飛行機はこれが初めてではない。
2022年にも別の小型観光飛行機がナスカの地上絵の上空を飛行中に墜落し、乗客乗員7名が死亡した。
そして2010年には観光飛行機が現場上空で墜落し、乗客乗員6名が死亡した。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c70g132erlko?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-02T00:29:55+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/233c/live/7e290c00-8e16-11f1-b8e8-d5f03f10fe6d.jpg",
    readTime: 2,
  },
  {
    id: "young-guns-for-hire-the-teenage-hitmen-r-043cea5e",
    title: "Young guns for hire - the teenage hitmen recruited to kill across Europe",
    titleJa: "若い銃をレンタル - ヨーロッパ全土で殺害のために募集された 10 代の殺し屋",
    summaryJa: "若い銃をレンタル - ヨーロッパ全土で殺害のために募集された 10 代の殺し屋- 公開されました",
    bodyOriginal: `Young guns for hire - the teenage hitmen recruited to kill across Europe
- Published
In a Stockholm suburb a man dressed in black appeared out of the winter night. Carrying a handgun, he approached 20-year-old Murad Abdelkader, a student on his way back from a shift at McDonald's.
The gunman opened fire, shooting again and again as he approached his target. He fired the last shot into his victim's head as he lay helpless on the ground.
The killer was 18-year-old Atilla Azimov. On that February night last year, he had killed the wrong man.
He had done it for money - hired by the Foxtrot Network, an organised crime group with links to the Iranian regime which has become notorious for its violence-as-a-service (VaaS) tactics.
Since 2022, the Foxtrot Network is thought to have been responsible for about 35 murders as well as a number of attacks and attempted attacks on Israeli targets in Europe including two involving explosives and hand grenades.
The gang recruits teenagers to carry out the attacks for cash, but it almost never has to pay out as they often get caught.
Like Johannes Natland, a Norwegian teenager who was convicted of conspiracy to murder by a jury at the Old Bailey in London on Wednesday for a planned killing in West Yorkshire.
According to Operational Taskforce (OTF) GRIMM, the Europol group set up to tackle the problem, the teenage hitmen are recruited on social media, and are given their instructions in a "gamified" way, imitating how computer games work.
Andy Kraag, the head of Europol's European Serious and Organised Crime Centre, calls it the "calculated outsourcing of murder" to vulnerable young people.
OTF GRIMM currently involves 11 countries affected by the VaaS phenomenon - Belgium, Denmark, Finland, France, Germany, Iceland, the Netherlands, Norway, Spain, Sweden, and the United Kingdom.
The leader of the Foxtrot Network, Rawa Majid, has fled Sweden and his later operating base in Turkey, and is now based in the Iranian capital Tehran. Police believe some of the VaaS attacks have been carried out for the Iranian regime, including a hand grenade attack on the Israeli embassy in Copenhagen, though other attacks are part of Foxtrot's drugs turf wars.
Diamant Salihu, an investigative journalist for the Swedish broadcaster SVT, has been researching Foxtrot and its Iranian links for three years.
"The regime is ordering the leader of the Foxtrot Network to instigate his network to commit attacks against the Iranian regime's enemies," he said.
"It can be dissidents, journalists that are in the opposition against the regime, and it can also be Israeli targets."
The links to the Iranian regime started after October 2023 when Majid fled to Tehran, Salihu said.
"He had to make a deal to be able to live freely in Iran, under condition that he and his network work for the regime."
The Foxtrot Network and Majid were sanctioned by the UK government, external in April 2025.
That was the month after the arrest of Natland, who was 18 at the time. He had flown in to carry out a hit on behalf of Foxtrot somewhere near Huddersfield.
The Natland case illustrates how the VaaS system works.
Natland is the son of two journalists in Stavanger and had a comfortable upbringing, but he drifted into drugs and developed psychosis, ending up spending time in rehab and a short period in a children's home. There he met another teenager who used the online handle UnknownHustler.
It was UnknownHustler who first sent Natland the online request for someone to carry out a hit in the UK - "Killing in England 270k" (270,000 Norwegian kroner is about £21,000). It had come from another teenager with the handle Generalen. Generalen - who was 16 at the time and had spent the last three years living in a children's home - subsequently recruited Natland for the hit.
Natland was then passed on to a Foxtrot member with the online username Agent 47, which is borrowed from the Hitman game franchise. Swedish police have accused Ali Shehad Ahmed, who is close to the Foxtrot leader Majid, of being Agent 47.
Agent 47 booked Natland's one way ticket to Manchester Airport, and helped him through the process of getting an emergency passport. Using the messaging app Signal, he guided Natland at every stage of his journey before handing him on to a logistics man with the username "1".
Treating Natland a bit like a character in a computer game, "1" sent him a map and videos showing him where to find the guns hidden in woodland in Huddersfield, and then another video showing him how to access a stash of cash hidden in the undergrowth near a foot tunnel.
Once Natland was installed in his Huddersfield hotel with the weapons, Agent 47 messaged him again: "We have much to do tomorrow."
Natland was arrested the next morning. He had not yet been told who he was to kill, and counterterrorism detectives are still trying to work out whether it was to be a criminal hit or a political one carried out for Iran.
Sweden ditches plan to imprison 13-year-old serious offenders
- Published11 June
The teenager who recruited Natland - Generalen - was prolific. As well as hiring Natland as a hitman he had also recruited at least two people who carried out murders in Sweden. They were Azimov, who is serving a life sentence for killing the wrong man, and a 17-year-old who shot dead Ahmed Zamzam in Lund, south Sweden, three and a half weeks earlier.
Neither of the killers got paid, because they were both caught. Salihu said this was part of how Foxtrot worked.
"They don't care at all if the teenagers get caught. Because when they get caught, they cannot ask for money that they have been offered, and we see no examples of money being paid to these young killers," he said.
"It has been a deliberate policy to recruit younger and younger teenagers because they don't think about the consequences of getting caught, and they are more willing to take the risks."
Generalen was eventually stopped because he was trying to arrange the murder of the 14-year-old son of a Norwegian police officer. He recruited a 15-year-old and a 17-year-old to carry out the knife attack, but the 15-year-old told the police. When Generalen was arrested detectives found details of the Huddersfield murder plot on his phone that led to British police arresting Natland just in time.
Generalen was convicted in May and is serving a 14-year-prison sentence.
OTF GRIMM has had some successes in the 15 months since it was set up. Police have made more than 280 arrests including a few key suspects.
One of the most important arrests was that of Ahmed, who is thought to be Agent 47.
He was detained in the Kurdish city of Sulaymaniyah in Iraq, and is currently subject to an extradition request to Sweden.
The Swedish deputy national police commissioner Stefan Hector said they were "constantly expanding our co-operation with other countries" and showing organised criminals "they cannot feel safe anywhere in the world".
In May, Mohamed "Moewgli" Mohdhi, a former rapper described by Swedish police as a "central actor" in Foxtrot, was arrested in Tunisia.
But Majid himself remains out of reach in Iran.
"He's still active," Salihu said. "And as long as this network is active we will still continue, I fear, to see attacks on the enemies of the Iranian regime."
It is not yet clear the extent to which the arrests have degraded Foxtrot's ability to operate, but other groups - including Foxtrot's rivals the Dalen Network - have already adopted the VaaS method of recruiting vulnerable teenagers for murders, so the danger is still very present.
It spread quickly from Sweden across Scandinavia and northern Europe and, as the Natland case shows, reached the UK last year.`,
    bodyJa: `若い銃をレンタル - ヨーロッパ全土で殺害のために募集された 10 代の殺し屋
- 公開されました
ストックホルム郊外で、冬の夜から黒い服を着た男が現れた。彼は拳銃を持って、マクドナルドの勤務から帰る途中の学生、ムラド・アブデルカデルさん（20）に近づいた。
犯人は発砲し、標的に近づくと何度も発砲した。彼は地面に無力で横たわった犠牲者の頭に最後の一発を放った。
犯人は18歳のアティラ・アジモフ。去年の2月の夜、彼は間違った男を殺してしまった。
彼はお金のためにそれをやったのです - サービスとしての暴力（VaaS）戦術で悪名高いイラン政権とつながりのある組織犯罪グループ、フォックストロット・ネットワークに雇われていました。
2022年以来、フォックストロット・ネットワークは約35件の殺人事件のほか、爆発物や手榴弾を使った2件を含むヨーロッパのイスラエルの標的に対する多数の攻撃や攻撃未遂に関与したと考えられている。
ギャングは現金を求めて十代の若者たちを募集して襲撃を実行させますが、逮捕されることが多いため、金銭を支払う必要はほとんどありません。
水曜日、ウェスト・ヨークシャーで計画された殺人事件で、ロンドンのオールド・ベイリーの陪審によって殺人共謀の罪で有罪判決を受けたノルウェー人の十代の少年、ヨハネス・ナットランドと同様だ。
ユーロポールがこの問題に取り組むために設立したグループ、作戦特別委員会（OTF）グリムによると、10代の殺し屋たちはソーシャルメディアで募集され、コンピューターゲームの仕組みを模倣した「ゲーム化された」方法で指示を与えられるという。
ユーロポールの欧州重大組織犯罪センター所長アンディ・クラーグ氏は、これを弱い立場の若者に対する「計算された殺人の外部委託」と呼んでいる。
OTF GRIMM には現在、VaaS 現象の影響を受けているベルギー、デンマーク、フィンランド、フランス、ドイツ、アイスランド、オランダ、ノルウェー、スペイン、スウェーデン、英国の 11 か国が参加しています。
フォックストロット・ネットワークのリーダー、ラワ・マジッドはスウェーデンとその後の活動拠点であるトルコから逃亡し、現在はイランの首都テヘランに拠点を置いている。警察は、コペンハーゲンのイスラエル大使館に対する手榴弾攻撃など、VaaS攻撃の一部はイラン政権のために行われたと考えているが、その他の攻撃はフォックストロットの麻薬縄張り戦争の一環である。
スウェーデンの放送局SVTの調査ジャーナリストであるディアマント・サリフ氏は、フォックストロットとイランとのつながりを3年間にわたって調査してきた。
同氏は、「政権はフォックストロット・ネットワークの指導者に対し、イラン政権の敵に対する攻撃を扇動するよう命令している」と述べた。
「反体制派や反体制派のジャーナリストが標的になる可能性もあるし、イスラエルの標的になる可能性もある」
サリフ氏によると、イラン政権とのつながりはマジド氏がテヘランに逃亡した２０２３年１０月以降に始まったという。
「彼は、自分と彼のネットワークが政権のために働くことを条件に、イランで自由に暮らせる契約を結ばなければならなかった。」
フォックストロット ネットワークとマジッドは、2025 年 4 月に英国政府によって対外的に認可されました。
当時18歳だったナットランドさんが逮捕された翌月のことだった。彼はハダースフィールド近くのどこかでフォックストロットに代わってヒットを打つために飛んできた。
Natland の事例は、VaaS システムがどのように機能するかを示しています。
ナットランドはスタヴァンゲルで二人のジャーナリストの息子として生まれ、何不自由なく育ったが、麻薬に溺れ精神病を発症し、最終的にはリハビリ施設で過ごし、短期間児童養護施設で過ごすことになった。そこで彼は、オンライン ハンドル UnknownHustler を使用する別のティーンエイジャーに会いました。
イギリスでヒット作「Kill​​ing in England 270k」（27万ノルウェークローネは約2万1千ポンド）を実行してくれる人を求めるオンラインリクエストを最初にナットランドに送ったのはUnknownHustlerだった。それはジェネレンというハンドル名を持つ別の十代の若者からのものだった。当時16歳で過去3年間を児童養護施設で過ごしていたジェネレンは、その後ナットランドをヒット作にスカウトした。
その後、ナットランドは、ヒットマン ゲーム フランチャイズから借用したオンライン ユーザー名エージェント 47 を持つフォックストロット メンバーに引き継がれました。スウェーデン警察は、フォックストロットのリーダー、マジッドに近いアリ・シェハド・アーメドをエージェント47として告発した。
エージェント 47 はナットランドさんのマンチェスター空港行きの片道航空券を予約し、緊急パスポートの取得手続きを手伝いました。彼はメッセージング アプリ Signal を使用して、ナットランドを旅のあらゆる段階でガイドし、その後、ユーザー名「1」の物流担当者に引き渡しました。
ナットランドをコンピューター ゲームの登場人物のように扱い、「1」はナットランドにハダースフィールドの森に隠された銃の場所を示す地図とビデオを送り、次にフット トンネル近くの下草に隠された現金の隠し場所にアクセスする方法を示す別のビデオを彼に送りました。
ナットランドがハダースフィールドのホテルに武器を設置されると、エージェント47は再び彼に「明日はやるべきことがたくさんある」とメッセージを送った。
ナットランドさんは翌朝逮捕された。誰を殺害するのかはまだ告げられておらず、テロ対策刑事はそれが犯罪的なものだったのか、それともイランのために行われた政治的なものだったのかを解明しようとしている。
スウェーデン、13歳の重犯罪者を投獄する計画を撤回
- 6 月 11 日発行
ナットランドをスカウトしたティーンエイジャー、ジェネレンは多作だった。彼はナットランドを殺し屋として雇っただけでなく、スウェーデンで殺人を実行した少なくとも2人の人物も雇っていた。彼らは、不当な殺人の罪で終身刑で服役中のアジモフと、3週間半前にスウェーデン南部ルンドでアーメド・ザムザムを射殺した17歳の少年だった。
犯人は二人とも捕まったため、報酬は支払われなかった。サリフ氏は、これはフォックストロットの仕組みの一部だと語った。
「彼らは十代の若者たちが捕まっても全く気にしていない。捕まった場合、提示された金銭を要求することはできないし、これらの若い殺人者に金銭が支払われた例も見当たらないからだ」と同氏は語った。
「彼らは逮捕された場合の影響について考えておらず、より進んでリスクを冒すため、ますます若いティーンエイジャーを採用することが意図的な政策となっている。」
ジェネレンは、ノルウェー警察官の14歳の息子の殺害を手配しようとしていたため、最終的に止められた。彼はナイフによる襲撃を実行するために15歳と17歳を雇ったが、15歳は警察に供述した。ジェネレンが逮捕されたとき、刑事は彼の携帯電話からハダースフィールド殺人計画の詳細を発見し、それが英国警察に間一髪でナットランドを逮捕するに至った。
ジェネレン氏は5月に有罪判決を受け、懲役14年の刑で服役している。
OTF GRIMM は設立以来 15 か月間でいくつかの成功を収めてきました。警察はこれまでに数人の重要容疑者を含む280人以上を逮捕した。
最も重要な逮捕の 1 つは、エージェント 47 であると考えられているアーメッドの逮捕でした。
同氏はイラクのクルド人都市スレイマニヤで拘束されており、現在スウェーデンへの引き渡し要請を受けている。
スウェーデン国家警察副本部長ステファン・ヘクター氏は、スウェーデンは「他国との協力を絶えず拡大」しており、組織犯罪者が「世界のどこにいても安全を感じることができない」ことを示していると述べた。
5月、スウェーデン警察によってフォックストロットの「中心人物」と評された元ラッパー、モハメド・“モーグリ”・モヒがチュニジアで逮捕された。
しかし、マジド自身はイランでは依然として連絡が取れないままである。
「彼はまだ現役だ」とサリフ氏は語った。 「そして、このネットワークが活動している限り、イラン政権の敵に対する攻撃はまだ続くのではないかと私は懸念しています。」
逮捕によってフォックストロットの運営能力がどの程度低下したかはまだ明らかではないが、フォックストロットのライバルであるダレン・ネットワークを含む他のグループはすでにVaaS方式を採用し、弱い立場にある十代の若者を殺人に勧誘しているため、危険は依然として非常に存在している。
スウェーデンからスカンジナビアや北ヨーロッパ全体に急速に広がり、ナットランドの事例が示すように、昨年英国に到達した。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/czrjyevmv61o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-01T23:03:35+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/fe10/live/f5b8a870-8c09-11f1-8665-e382dc49dfdb.jpg",
    readTime: 9,
  },
  {
    id: "the-sopranos-star-vincent-pastore-dies-a-404a64fd",
    title: "The Sopranos star Vincent Pastore dies aged 80",
    titleJa: "ソプラノ歌手ヴィンセント・パストーレさんが80歳で死去",
    summaryJa: "ソプラノ歌手ヴィンセント・パストーレさんが80歳で死去- 公開されました",
    bodyOriginal: `The Sopranos star Vincent Pastore dies aged 80
- Published
US actor Vincent Pastore, who played Salvatore "Big Pussy" Bonpensiero in the hit show The Sopranos, has died aged 80, according to several US outlets.
Pastore was found at his home in the Bronx, New York City and there was no indication of criminality, the BBC's US partner CBS News reported.
In The Sopranos, Pastore played Tony Soprano's best friend who ultimately became an informant for the FBI. His character's death in series two was one of the show's most memorable storylines.
Robert Attermann, Pastore's manager, told CBS News: "To the world, he will always be remembered as the unforgettable 'Big Pussy,' but to those of us who knew him, he was so much more."
"He loved being an actor. He was passionate about his craft and was always encouraging, respectful, and generous with young actors, taking the time to offer guidance and support whenever he could," Attermann said.
He continued: "For me, losing Vinny is deeply personal. Over more than three decades, I had the honor of watching not only his remarkable career but also the incredible person he was. I will miss his friendship, his loyalty, his humor, and his heart."
Pastore was born in the Bronx in 1946. He enlisted in the US Navy during the Vietnam War before embarking on a career in acting.
His early credits included roles in movies such as Goodfellas and Carlito's Way.
Later TV appearances included Law & Order, General Hospital and Hawaii Five-O.
But it was his role in The Sopranos which brought Pastore widespread recognition. He appeared in all six seasons of the critically acclaimed show, despite his character being killed off in the second series.
In 2000, Pastore and his fellow The Sopranos cast members won the Screen Actors Guild Award for Outstanding Performance by an Ensemble in a Drama Series.`,
    bodyJa: `ソプラノ歌手ヴィンセント・パストーレさんが80歳で死去
- 公開されました
複数の米国メディアによると、人気番組「ザ・ソプラノズ」でサルバトーレ・“ビッグ・プッシー”・ボンペンシエーロを演じた米俳優ヴィンセント・パストーレさんが80歳で死去した。
パストーレ氏はニューヨーク市ブロンクスの自宅で発見され、犯罪性の兆候はなかったとBBCの米国パートナーCBSニュースが報じた。
『ザ・ソプラノズ』でパストーレは、最終的にFBIの情報提供者となるトニー・ソプラノの親友を演じた。シリーズ 2 での彼のキャラクターの死は、ショーの最も記憶に残るストーリーラインの 1 つでした。
パストーレのマネージャー、ロバート・アッターマン氏はCBSニュースに対し、「世界にとって彼は忘れられない『ビッグ・プッシー』としていつまでも記憶されるだろうが、彼を知る私たちにとって彼はそれ以上の存在だった」と語った。
「彼は俳優であることが大好きでした。彼は自分の芸術に情熱を持っていて、若い俳優たちを常に励まし、敬意を払い、寛大で、可能な限り時間をかけて指導とサポートを提供してくれました」とアッターマン氏は語った。
さらに「私にとって、ヴィニーを失うことは極めて個人的なことだ。30年以上にわたり、彼の素晴らしいキャリアだけでなく、彼の素晴らしい人間性を見守ることができて光栄だった。彼の友情、忠誠心、ユーモア、そして心を恋しく思うだろう」と語った。
パストーレは 1946 年にブロンクスで生まれました。俳優としてのキャリアを始める前に、ベトナム戦争中にアメリカ海軍に入隊しました。
彼の初期のクレジットには、『グッドフェローズ』や『カリートズ・ウェイ』などの映画での役割が含まれていました。
その後、「Law & Order」、「General Hospital」、「Hawaii Five-O」などのテレビ出演が行われました。
しかし、パストーレに広く知られるようになったのは、『ザ・ソプラノズ』での彼の役割でした。彼は、第2シリーズでキャラクターが殺されたにもかかわらず、批評家から高く評価されたこの番組の全6シーズンに出演した。
2000年、パストーレと彼の同僚の「ザ・ソプラノズ」のキャストメンバーは、ドラマシリーズのアンサンブルの優秀な演技に対して映画俳優組合賞を受賞した。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cm2gz0epljgo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-01T22:57:55+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/0086/live/c9f00e60-8df6-11f1-902e-fd8182e85c3f.jpg",
    readTime: 2,
  },
  {
    id: "a-bruising-24-hours-what-next-for-fifa-a-3e035529",
    title: "A bruising 24 hours - what next for Fifa and under-pressure Infantino?",
    titleJa: "傷だらけの 24 時間 - FIFA とプレッシャーにさらされたインファンティーノの今後は?",
    summaryJa: "ジャンニ・インファンティーノに対するプレッシャーが高まっている。物議を醸したワールドカップ投資計画が破綻した後、彼はFIFA会長として生き残ることができるだろうか？",
    bodyOriginal: `A bruising 24 hours - what next for Fifa and under-pressure Infantino?
- Published
A week is a long time in politics. Football politics.
On Tuesday morning, Gianni Infantino was in an impregnable position as Fifa president, the most powerful job in football.
Now, after trying to sell stakes in Fifa competitions to private investments firms - apparently without the knowledge of anyone else - Infantino's position appears to be under threat.
Uefa - Infantino's fiercest critic - dealt its trump card on Thursday by threatening to boycott all Fifa competitions, including the World Cup.
Now European football's governing body senses the opportunity to remove Infantino - and this is likely to be the best chance it will ever get.
But they're far from the only unhappy federation.
Concacaf, the confederation Infantino worked so closely with to organise the 2026 World Cup, has called for a "full review" into the leadership of Fifa in light of Infantino's plan.
Even more damaging, loyal countries in the Asian Football Confederation (AFC) shunned him too.
Then he was abandoned by two of his closest allies - first senior adviser Carlos Cordeiro and then chief operating officer Kevin Lamour.
After Infantino backtracked in the early hours of Saturday morning, Uefa delivered another devastating blow by issuing a strong statement saying it had lost confidence in him.
The battles lines have been drawn. What could happen next?
Uefa has 'lost confidence' in Infantino's Fifa leadership
- Published15 hours ago
Four reasons why Fifa's World Cup plan never stacked up
- Published19 hours ago
Infantino on the brink? Who might replace him if he goes?
- Published22 hours ago
How could Infantino be ousted?
The quickest route for Infantino's exit would be for the Swiss to resign, like his predecessor Sepp Blatter did in 2015.
But Infantino still retains support and he could try to hold out until March, when he is up for re-election for a fourth and final term as president.
What other avenues are open?
The Fifa Council could try to force Infantino's hand through an emergency meeting.
Such a gathering would be triggered if 19 of the 37 Fifa Council members call for one.
Uefa has nine members, AFC has seven, Concacaf five, Africa has six, Conmebol five and Oceania three. It is completed by Infantino and secretary general Mattias Grafstrom.
BBC Sport understands there are some doubts that the 19 votes could be achieved.
If they do get to 19, the meeting must take place within two weeks and the Fifa Council could call on Infantino to tender his resignation. But he could simply refuse to do so.
It would, however, add further pressure.
The next step would be an extraordinary congress of the 211 Fifa member associations, which would be held if one-fifth, or 43 associations, "make such a request in writing".
So Uefa, which has 55 nations, can trigger the extraordinary congress whenever it wishes.
That would take a minimum of two months from the point it is triggered, but more likely three months, and there is no guarantee of success.
In effect, it would be a de facto election without there being another candidate as 106 votes would be needed to pass the vote of no confidence.
Uefa has 55, Africa 54, Asia 46, Concacaf 35, Oceania 11 and Conmebol 10.
Africa, Conmebol and Oceania have not criticised Infantino's plan.
So could Uefa get to 106? In total, 136 countries officially rejected the investment plan, but voting to reject an idea is not the same as voting to kick Infantino out.
Of the 136, Qatar have already publicly backed him and Mexico have distanced themselves from the joint Concacaf statement.
Which leaves finding a suitable candidate to fight the election in March.
Infantino stood unopposed when he was re-elected in 2019 and 2023 and if someone wants to battle him for the position, the deadline to announce their candidacy is 18 November.
The five dramatic days that shook Infantino and world football
- Published19 hours ago
Who could potentially replace Infantino?
If Uefa and Infantino's biggest critics have to go down the election route, they will need to find a unifying leader.
As Uefa has been so strong in its opposition to Infantino, a European candidate might struggle to get global support. After all, it might seem like it is trying to take over Fifa itself.
So there must be a candidate who can attract the support of those countries in Concacaf, Africa and Asia who could have been loyal to Infantino but could be persuaded to switch their votes.
The most likely candidate appears to be Concacaf president Victor Montagliani.
Like Infantino, he was elected in 2016 promising governance reform. A former president of Canada Soccer, Montagliani was heavily involved in the build up to and delivery of the 2026 World Cup. He is fluent in French, Italian and Spanish, as well as English.
Another option would be Sheikh Salman bin Ebrahim Al Khalifa, the AFC president.
Initially elected in 2013, he was re-elected unopposed for a fourth term to run to 2027.
Sheikh Salman signed off the confederation's brutal takedown of how Fifa is being run by Infantino and has carried with him a 46-member confederation, many of whom are aware the figures being offered by Infantino's plan are huge in terms of their overall football expenditure.
Less likely appears to be Paris St-Germain president Nasser Al-Khelaifi, the Qatari who is also the chair of European Football Clubs.
Al-Khelaifi helped bring European football back together after another seismic event that threatened to pull the game apart - the ill-fated European Super League.
In theory, the Qatari would be a serious challenger to Infantino. But it seems he doesn't want the role. Qatar's support for Infantino could be an issue, too.
How likely is it that Infantino is ousted?
In any other business, Infantino would be unlikely to continue in his role.
But football, of course, is not a normal business.
Remember, Blatter had been re-elected the week before he resigned in 2015 when he had no option left amid a corruption scandal.
So will Infantino try to fight on?
In his statement on Saturday, he said his intent "was to bring all interested parties back together in the coming days and weeks".
For Infantino, contrition could make this all float away.
Maybe it is working. Following on from Qatar, 2030 co-hosts Morocco backed him on Saturday evening. Then Egypt praised Infantino for cancelling his masterplan.
Infantino may be thinking that if he can, day by day, get more member associations on board, the prospect of a no-confidence vote is less likely to be successful.
After all, his support base has been so strong for so long you can understand why he might have such faith.
As any vote of no confidence is three months away, he has the chance to repair at least some of the damage.
It is a race to 106 - and the more time elapses, the more chance Infantino can persuade his former allies this was just an aberration.
For Uefa, the question is whether it can create a situation whereby Infantino is left with no option but to resign.
For that to happen, the criticism from federations across the world must continue.
But if there is one thing that could damage Infantino further, it would be for major sponsors to distance themselves from the organisation.
During the 2015 Fifa scandal, Sony, Emirates, Castrol, Continental Tyres and Johnson & Johnson were among the companies to discontinue their huge sponsorship deals.
There is no sign of this just yet but this is a saga with the potential to rumble on.
Related topics
- Published8 June
- Published8 June`,
    bodyJa: `傷だらけの 24 時間 - FIFA とプレッシャーにさらされたインファンティーノの今後は?
- 公開されました
政治の世界では一週間は長い。サッカー政治。
火曜日の朝、ジャンニ・インファンティーノはサッカー界で最も権力のある職であるFIFA会長という難攻不落の地位に就いた。
現在、FIFA大会の株式を民間投資会社に売ろうとした後、どうやら誰にも知られずにインファンティーノの立場が脅かされているようだ。
インファンティーノ氏を最も激しく批判するUEFAは木曜日、ワールドカップを含むすべてのFIFA大会をボイコットすると脅すという切り札を出した。
現在、欧州サッカー統括団体はインファンティーノを解任する機会を察知しているが、これはこれまでで最高のチャンスとなる可能性が高い。
しかし、不幸な連邦は彼らだけではありません。
インファンティーノ氏が2026年ワールドカップの開催に向けて緊密に協力した連盟であるコンカカフは、インファンティーノ氏の計画を踏まえてFIFAの指導体制を「全面的に見直す」よう求めた。
さらに有害なアジアサッカー連盟（AFC）の忠実な国々も彼を敬遠した。
その後、彼は最も近い同盟者2人、初代上級顧問カルロス・コルデイロ氏と当時最高執行責任者ケビン・ラムール氏に見捨てられた。
土曜日の早朝にインファンティーノ監督が撤回したことを受け、UEFAは同選手に対する信頼を失ったと強い声明を発表し、さらなる壊滅的な打撃を与えた。
戦いの線は引かれました。次に何が起こるでしょうか?
UEFA、インファンティーノ氏のFIFA指導力に「信頼を失った」
- 15 時間前に公開
FIFAのワールドカップ計画が実現しなかった4つの理由
- 19 時間前に公開
インファンティーノは瀬戸際？彼が去った場合、誰が彼の代わりをするでしょうか？
- 22 時間前に公開
インファンティーノ氏はどうして解任されるのでしょうか？
インファンティーノ氏の退任への最も早いルートは、2015年に前任者のゼップ・ブラッター氏がしたように、スイス人が辞任することだろう。
しかし、インファンティーノ氏は依然として支持を維持しており、大統領として最後の4期目の再選が予定されている3月までは持ちこたえる可能性がある。
他にどんな道が開かれていますか？
FIFA評議会は緊急会議を通じてインファンティーノ氏の手を押し出そうとする可能性がある。
このような集会は、FIFA評議会メンバー37人中19人が呼びかければ開催されることになる。
UEFAの加盟国は9名、AFCは7名、コンカカフは5名、アフリカは6名、コンメボルは5名、オセアニアは3名となっている。インファンティーノ氏と事務総長マティアス・グラフストロム氏によって完成される。
BBCスポーツは、19票を達成できるかどうかには若干の疑問があることを理解している。
19人に達した場合、会議は2週間以内に開かれなければならず、FIFA評議会はインファンティーノ氏に辞任を申し出るよう求める可能性がある。しかし、彼はそうすることを単に拒否することもできました。
しかし、それはさらなるプレッシャーを与えることになるだろう。
次のステップは、211のFIFA加盟協会による臨時会議で、5分の1、つまり43の協会が「書面でそのような要請をした」場合に開催されることになる。
したがって、55か国が参加するUEFAは、望むときはいつでも臨時議会を開催することができる。
それには、トリガーされてから最低でも 2 か月、多くの場合は 3 か月かかりますが、成功する保証はありません。
不信任案可決には106票が必要となるため、事実上、他候補者がいない事実上の選挙となる。
UEFAは55、アフリカは54、アジアは46、コンカカフは35、オセアニアは11、コンメボルは10となっている。
アフリカ、コンメボル、オセアニアはインファンティーノ氏の計画を批判していない。
では、UEFAは106位まで到達できるだろうか？合計136カ国がこの投資計画を正式に拒否したが、アイデアの拒否に投票することは、インファンティーノ氏を追い出すことに投票することと同じではない。
136人のうち、カタールはすでに同氏を公に支持しており、メキシコはコンカカフ共同声明から距離を置いている。
そのため、3 月の選挙を戦うのに適した候補者を見つける必要がある。
インファンティーノ氏は2019年と2023年に再選された際に無抵抗で立候補しており、もし誰かが彼とその座を争うことを希望する場合、立候補を発表する期限は11月18日である。
インファンティーノと世界のサッカーを震撼させた劇的な5日間
- 19 時間前に公開
インファンティーノの代わりを務める可能性があるのは誰でしょうか？
UEFAとインファンティーノの最大の批判者たちが選挙の道を歩まなければならない場合、彼らは統一する指導者を見つける必要があるだろう。
ＵＥＦＡはインファンティーノ氏に対する反対姿勢が非常に強いため、欧州の候補者は世界的な支持を得るのに苦労するかもしれない。結局のところ、FIFA自体を乗っ取ろうとしているように見えるかもしれません。
したがって、コンカフ、アフリカ、アジアの国々の支持を集めることができ、インファンティーノに忠誠を誓いながらも投票を変えるよう説得できる候補者がいるはずだ。
最も有力な候補はコンカカフのビクトル・モンタリアーニ会長とみられる。
インファンティーノと同様、同氏は統治改革を約束して２０１６年に選出された。カナダサッカーの元会長であるモンタリアーニは、2026 年ワールドカップの準備と開催に深く関与しました。彼は英語だけでなく、フランス語、イタリア語、スペイン語にも堪能です。
もう一つの選択肢は、AFC会長のシェイク・サルマン・ビン・エブラヒム・アル・ハリファだろう。
2013年に初当選し、無投票で再選され、2027年までの4期目となる。
サルマン首長は、インファンティーノによるFIFAの運営方法に対する連盟の残忍な非難に同意し、46人の加盟国からなる連盟を引き継いだ。その多くは、インファンティーノの計画によって提示されている数字がサッカー全体の支出の観点から巨額であることを認識している。
パリ・サンジェルマンの会長であり、欧州サッカークラブの会長でもあるカタール人のナセル・アル・ケライフィ氏の可能性は低いようだ。
アル・ケライフィは、不運なヨーロッパ・スーパーリーグという、試合を引き離す恐れのあるもう一つの衝撃的な出来事の後、ヨーロッパのサッカーを再び団結させるのに貢献した。
理論的には、カタール人はインファンティーノにとって本格的な挑戦者となるだろう。しかし、どうやら彼はその役を望んでいないらしい。カタールのインファンティーノ支持も問題になる可能性がある。
インファンティーノ監督が解任される可能性はどのくらいあるでしょうか?
他の事業においては、インファンティーノ氏がその職を続ける可能性は低いだろう。
しかし、もちろん、サッカーは通常のビジネスではありません。
覚えておいてください、ブラッター氏は2015年に汚職スキャンダルの渦中で選択肢が残されていなかったときに辞任する1週間前に再選されていました。
では、インファンティーノは戦い続けようとするだろうか？
同氏は土曜日の声明で、「今後数日から数週間以内にすべての関係者を再び結集させること」が目的だと述べた。
インファンティーノにとって、悔い改めがすべてを吹き飛ばしてくれるかもしれない。
たぶんそれは機能しています。カタールに続き、土曜日の夕方、2030年の共催国であるモロッコも彼を支持した。その後、エジプトはインファンティーノ氏の基本計画を中止したことを称賛した。
インファンティーノ氏は、日々より多くの加盟団体を参加させることができれば、不信任投票が成功する可能性は低くなる、と考えているのかもしれない。
結局のところ、彼の支持基盤は長い間非常に強かったので、彼がなぜこれほどの信頼を持っているのか理解できるでしょう。
不信任投票までに3か月かかるため、彼には少なくともダメージの一部を修復するチャンスがある。
これは106歳までの競争であり、時間が経てば経つほど、インファンティーノがかつての同盟者たちにこれは単なる異常であると説得できる可能性が高まる。
UEFAにとって問題は、インファンティーノ監督が辞任せざるを得なくなる状況を作り出せるかどうかだ。
そのためには、世界中の連盟からの批判が続けられなければなりません。
しかし、インファンティーノにさらなるダメージを与える可能性があるとすれば、それは大手スポンサーが組織から距離を置くことだろう。
2015年のFIFAスキャンダルでは、ソニー、エミレーツ、カストロール、コンチネンタルタイヤ、ジョンソン・エンド・ジョンソンなどが巨額のスポンサー契約を打ち切った。
まだその兆候はありませんが、これはゴロゴロする可能性を秘めた物語です。
関連トピック
- 6 月 8 日発行
- 6 月 8 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/sport/football/articles/c9w0djx2g92o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-01T22:23:20+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/de1b/live/d2f82cb0-8ddb-11f1-9d54-295807679b3c.jpg",
    readTime: 9,
  },
  {
    id: "my-girlfriend-is-62-can-she-claim-her-la-7957b3b4",
    title: "My girlfriend is 62. Can she claim her late husband’s full Social Security benefit — or does she have to wait?",
    titleJa: "私のガールフレンドは 62 歳です。彼女は亡き夫の社会保障給付金を全額請求できますか? それとも待たなければなりませんか?",
    summaryJa: "「彼女の夫は10年前に亡くなりました。彼らは20年以上結婚していました。」",
    bodyOriginal: `“Her husband passed away 10 years ago. They had been married for more than 20 years.”`,
    bodyJa: `「彼女の夫は10年前に亡くなりました。彼らは20年以上結婚していました。」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/my-girlfriend-is-62-can-she-claim-her-late-husbands-full-social-security-benefit-or-does-she-have-to-wait-315c0fa1?mod=mw_rss_topstories",
    publishedAt: "2026-08-01T22:00:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-93168750",
    readTime: 2,
  },
  {
    id: "eu-calls-emergency-meeting-to-discuss-ce-fa3557a0",
    title: "EU calls emergency meeting to discuss Ceuta migrant crossings",
    titleJa: "EU、セウタ移民の入国問題について話し合うため緊急会合を開催",
    summaryJa: "EU、セウタ移民の入国問題について話し合うため緊急会合を開催- 公開されました",
    bodyOriginal: `EU calls emergency meeting to discuss Ceuta migrant crossings
- Published
The European Union will hold emergency talks on Tuesday to discuss the migration crisis in Ceuta after tense exchanges between Spain and other member states.
Twenty-two member states issued a joint letter calling for co-ordinated action and the strengthening of the EU's external borders, after some 60,000 migrants entered the Spanish enclave from Morocco.
Spain condemned "selfish, polarising and unlawful" reaction to the crisis after Italy suspended the EU's border-free Schengen arrangement with Spain - a move backed by Finland and Denmark.
Officials say almost all those who reached Ceuta on 30 July have returned, while deaths from the surge in crossings had risen to at least 67.
The EU members' letter addresses concerns around "hybrid threats to create the perception that illegal entry into the European Union is possible," adding that the perception "would encourage further attempts, undermine confidence in our common migration policy and have repercussions for all Member States".
Leaders of the Netherlands, Finland and Belgium are among 22 signatures on the letter, addressed to EU President Antonio Costa, president of the European Commission Ursula von der Leyen and Taoiseach Michael Martin, as Ireland currently holds the presidency of the Council of the European Union.
In a separate letter to von der Leyen, Spanish Prime Minister Pedro Sánchez said he had "serious concerns" about some European governments.
He said the Spanish government had fully restored control over the border and prevented any "unauthorised onward movement towards continental Europe" in less than 48 hours.
While most had shown "support and solidarity", Sánchez said other European governments had chosen to attack Spain, "driven by prejudice, fake news, ignorance, or political interest", and pointed out that Ceuta was not part of the Schengen area.
On Friday, Sánchez accused migrant traffickers of exploiting a decision recently made by the country's supreme court which constrained the government's right to immediately deport people who had arrived by sea.
The country's Interior Minister, Fernando Grande-Marlaska, said in a news conference on Saturday that the situation had almost returned to normal and the country was working on inflatable barrier to prevent illegal migration via the water.
"Almost all of [the migrants] have already left Ceuta," he said adding that businesses there had now reopened.
Influx of migrants to Ceuta gives Spain diplomatic headache
- Published1 day ago
Some criticism of the situation has involved concerns over the Schengen Area - an agreement which eliminates border checks and now encompasses more than 450 million people and 29 countries in Europe.
In addition to Italian Prime Minister Giorgia Meloni suspending Italy's Schengen agreement with Spain for a month, Finland, France and Portugal have all said they were either looking at, or considering, border checks.
Danish Prime Minister Mette Frederiksen urged the EU to "consider all options, including a suspension of Schengen co-operation".
Von der Leyen said the images from Ceuta were "unacceptable". Writing on social media, she said: "We cannot allow anyone to come to our Union without abiding by our rules."
German Chancellor Friedrich Merz demanded that Morocco "take back illegal migrants immediately", while on Saturday, UK Prime Minister Andy Burnham said he had spoken to Sánchez and the UK was "providing what help we can".
Morocco witnessed several Gen Z anti-government protests last year, with young people demanding better opportunities and improvements to public services.
Together with Melilla, Ceuta forms the European Union's only land borders with Africa. Migrants can enter the enclave by swimming several kilometres.
While the surge of migrants this year is extraordinary, Ceuta has long been a focal point for migrants attempting to reach Europe. During the summer months, there is often a big push to reach Ceuta, typically organised over social media.
In 2021, about 8,000 people entered Ceuta over a matter of days, exacerbating Spain's diplomatic tensions with Morocco.
Spain has a relatively friendly approach to immigration. In April, the government approved plans to give legal status to 500,000 undocumented migrants, allowing them to be formally integrated into the workforce.
- Published18 May 2023
- Published5 June 2021`,
    bodyJa: `EU、セウタ移民の入国問題について話し合うため緊急会合を開催
- 公開されました
スペインと他の加盟国間の緊迫したやりとりの後、欧州連合は火曜日にセウタの移民危機について話し合う緊急協議を開催する。
モロッコからスペイン飛び地に約6万人の移民が流入したことを受け、加盟22カ国は協調行動とEU外国境の強化を求める共同書簡を発表した。
スペインは、イタリアがEUとスペインとの国境のないシェンゲン協定を停止したことを受けて、危機に対する「利己的で二極化した不法」な対応を非難した。この動きにはフィンランドとデンマークも支持している。
当局者らによると、7月30日にセウタに到着した人のほぼ全員が戻ってきた一方、渡航者の急増による死者は少なくとも67人に上ったという。
EU加盟国の書簡は「欧州連合への不法入国が可能であるという認識を生み出す複合的な脅威」に関する懸念に言及し、その認識は「更なる試みを促し、我々の共通の移民政策に対する信頼を損ない、すべての加盟国に影響を与えるだろう」と付け加えた。
書簡にはオランダ、フィンランド、ベルギーの首脳も含まれており、アントニオ・コスタEU大統領、ウルズラ・フォン・デア・ライエン欧州委員会委員長、アイルランドが現在欧州連合理事会議長国を務めているマイケル・マーティン首相に宛てたものである。
スペインのペドロ・サンチェス首相はフォンデアライエン宛ての別の書簡の中で、一部の欧州政府について「深刻な懸念」を抱いていると述べた。
同氏は、スペイン政府が国境の管理を完全に回復し、48時間以内に「欧州大陸への不正な前進」を阻止したと述べた。
サンチェス氏は、大半の政府が「支持と団結」を示していた一方で、他の欧州各国政府が「偏見、フェイクニュース、無知、政治的利益に動かされて」スペイン攻撃を選択したと述べ、セウタはシェンゲン圏に含まれていないと指摘した。
サンチェス氏は金曜日、海路で到着した人々を即時国外追放する政府の権利を制約する同国の最高裁判所が最近下した決定を悪用したとして移民人身売買業者を非難した。
同国のフェルナンド・グランデ・マルラスカ内務大臣は土曜日の記者会見で、状況はほぼ正常に戻り、水路を通じた不法移民を防ぐためにインフレータブルバリアの建設に取り組んでいると述べた。
同氏は、「（移民の）ほぼ全員がすでにセウタを離れた」と述べ、セウタでの事業は現在再開されていると付け加えた。
セウタへの移民流入がスペイン外交に頭痛の種
- 1 日前に公開
この状況に対する批判の中には、シェンゲン圏に対する懸念も含まれている。シェンゲン圏は国境検問を廃止し、現在ヨーロッパの29カ国、4億5千万人以上の人々が参加する協定である。
イタリアのジョルジア・メローニ首相がスペインとのシェンゲン協定を１カ月間停止したことに加え、フィンランド、フランス、ポルトガルも国境検査を検討している、あるいは検討していると述べた。
デンマークのメッテ・フレデリクセン首相はEUに対し「シェンゲン協定への協力停止を含むあらゆる選択肢を検討する」よう求めた。
フォンデアライエン氏は、セウタからの画像は「容認できない」と述べた。彼女はソーシャルメディアに「私たちの規則に従わない者が私たちの組合に来ることを許すことはできない」と述べた。
ドイツのフリードリヒ・メルツ首相はモロッコに対し「不法移民を即時奪還する」よう要求し、土曜日には英国のアンディ・バーナム首相もサンチェス氏と話しており、英国は「できる限りの支援を行っている」と述べた。
モロッコでは昨年、Z世代による反政府抗議活動が数回発生し、若者たちはより良い機会と公共サービスの改善を求めていた。
セウタはメリリャとともに、欧州連合でアフリカとの唯一の陸上国境を形成しています。移民は数キロ泳いで飛び地に入ることができる。
今年の移民の急増は異常だが、セウタは長年、ヨーロッパを目指す移民の中心となってきた。夏の間、セウタに到達しようとする大きな動きがあり、通常はソーシャルメディア上で組織されます。
2021年には数日間で約8000人がセウタに入国し、スペインとモロッコの外交的緊張が悪化した。
スペインは移民に対して比較的友好的なアプローチを取っています。政府は4月、50万人の不法移民に法的地位を与え、正式に労働力として統合できるようにする計画を承認した。
- 2023 年 5 月 18 日公開
- 2021 年 6 月 5 日公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cz7d17r455go?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-01T20:09:27+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/394b/live/4f569510-8dd9-11f1-b2ab-0dd01740f9f6.jpg",
    readTime: 5,
  },
  {
    id: "let-s-elect-candidates-who-will-make-the-f5f7dd37",
    title: "Let’s elect candidates who will make the wealthy pay taxes",
    titleJa: "富裕層に税金を支払わせる候補者を選出しましょう",
    summaryJa: "私たちはこれらの収入の一部を社会保障への拠出をより公平にするために使用できます。",
    bodyOriginal: `We can use some of those revenues to make Social Security contributions more equitable.`,
    bodyJa: `私たちはこれらの収入の一部を社会保障への拠出をより公平にするために使用できます。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/lets-elect-candidates-who-will-make-the-wealthy-pay-taxes-15f53a4a?mod=mw_rss_topstories",
    publishedAt: "2026-08-01T18:30:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-38740801",
    readTime: 2,
  },
  {
    id: "rising-medicare-part-d-premiums-could-dr-1a1c255b",
    title: "Rising Medicare Part D premiums could drive more people into Medicare Advantage plans",
    titleJa: "メディケア パート D 保険料の上昇により、より多くの人がメディケア アドバンテージ プランに加入する可能性がある",
    summaryJa: "メディケア・アドバンテージ計画は、メディケア処方薬計画の費用を低く抑えるプログラムを早期に終了するというトランプ政権の決定の勝者となる可能性がある。",
    bodyOriginal: `Medicare Advantage plans could be the winners of a decision by the Trump administration to put an early end to a program that kept the cost of Medicare prescription drug plans lower.`,
    bodyJa: `メディケア・アドバンテージ計画は、メディケア処方薬計画の費用を低く抑えるプログラムを早期に終了するというトランプ政権の決定の勝者となる可能性がある。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/rising-part-d-premiums-could-drive-more-people-into-medicare-advantage-plans-32c2a392?mod=mw_rss_topstories",
    publishedAt: "2026-08-01T18:06:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-87598403",
    readTime: 2,
  },
  {
    id: "italy-putting-nearly-all-major-cities-on-b9ed161f",
    title: "Italy putting nearly all major cities on highest heat alert",
    titleJa: "イタリア、ほぼすべての主要都市に最高度の暑さ警報を発令",
    summaryJa: "イタリア、ほぼすべての主要都市に最高度の暑さ警報を発令- 公開されました",
    bodyOriginal: `Italy putting nearly all major cities on highest heat alert
- Published
Italy is putting nearly all of its major cities on the highest "red" alert for high temperatures, as a new heatwave grips the country.
Health officials say 19 cities from north to south - including the capital Rome, Milan, Venice and Naples - are already at red alert, and by Monday all but two cities will be.
Temperatures hit mid-30s C in many places on Saturday, and authorities are warning warning of risks to even healthy and active people - not just groups including the elderly, very young children and people with chronic illnesses.
The warnings come as several European nations battle devastating wildfires after a succession of heatwaves that have created favourable conditions for blazes.
Devastating European wildfires in maps - and how they're being tackled
- Published3 days ago
In its latest heatwave bulletin published on Saturday, the Italian health ministry says that by Monday, some 25 of the country's 27 major cities will be on red alert.
It says it expects only two - Reggio Calabria in the southern tip of Italy's "boot" and Messina, facing it across on the island of Sicily - to be on the second-highest "amber" alert.
The ministry urges residents in the affected areas to avoid exposure to heat and direct sunlight during the hottest hours between 11:00 and 18:00, stay indoors and drink plenty of fluids.
The extreme heat is being caused by a subtropical anticyclone from North Africa that is now strengthening over the Mediterranean.
Meanwhile, firefighters in Greece, France, Portugal and Spain are still tackling blazes spanning thousands of hectares.
In France, some 2,500 people were evacuated in the south-eastern Var region on Friday evening after a blaze - which had been contained for several days - reignited, local officials said.
But a massive fire in the south-western Gironde region is now under control, and some 200,000 local evacuated residents have been able to return to their homes.
In Greece, hundreds of people - mostly tourists - have been evacuated by sea from a coastal town of Viotia hemmed in by one of the many wildfires raging across the country.
And in Spain, more than 200,000 hectares of land has burnt in 2026 - roughly five times above the average by this point in the year - while the burnt land in Portugal is also higher than usual, EU data shows.
Climate change is driving up temperatures around the world, and Europe is the fastest warming continent, heating up twice as fast as the global average, according to the Copernicus Climate Change Service.
This is causing increased summer heatwaves, greater pressure on Europe's water supply, and more intense wildfires.`,
    bodyJa: `イタリア、ほぼすべての主要都市に最高度の暑さ警報を発令
- 公開されました
イタリアは新たな熱波が国中を襲う中、ほぼすべての主要都市に高温に対する最高度の「非常警報」を発令している。
保健当局によると、首都ローマ、ミラノ、ヴェネツィア、ナポリを含む北から南までの19都市はすでに非常警報が出ており、月曜日までには2都市を除くすべての都市が警報が出るとのことだ。
土曜日には多くの場所で気温が摂氏30度半ばに達し、当局は高齢者や幼い子供、慢性疾患を持つ人々だけでなく、健康で活動的な人々にもリスクがあると警告している。
この警告は、火災に有利な条件を作り出した熱波が続いた後、ヨーロッパのいくつかの国が壊滅的な山火事と戦っている中で発せられた。
地図で見るヨーロッパの壊滅的な山火事 - そしてその対処方法
- 3 日前に公開
イタリア保健省は土曜日に発表した最新の熱波速報で、月曜日までに国内の主要27都市のうち約25都市に非常警報が出ると発表した。
イタリアの「ブーツ」の南端にあるレッジョ・ディ・カラブリア州と、シチリア島の対岸にあるメッシーナの2つだけが2番目に高い「アンバー」警戒態勢にあると予想しているという。
同省は、被災地域の住民に対し、午前11時から午後18時までの最も暑い時間帯に熱や直射日光を避け、屋内に留まり、十分な水分を摂取するよう呼び掛けている。
極度の暑さは、北アフリカからの亜熱帯高気圧によって引き起こされており、現在地中海で強まっています。
一方、ギリシャ、フランス、ポルトガル、スペインの消防団は依然として数千ヘクタールにわたる火災の消火活動を続けている。
フランスでは、金曜夕方、数日間鎮火していた火災が再燃し、南東部ヴァール地方で約２５００人が避難したと地元当局者が明らかにした。
しかし、ジロンド州南西部の大規模火災は現在鎮火しており、避難していた地元住民約20万人が自宅に戻ることができた。
ギリシャでは、国中で猛威を振るう山火事の一つに囲まれた海岸沿いの町ヴィオティアから、観光客を中心に数百人が海路で避難している。
そしてスペインでは、2026年に20万ヘクタール以上の土地が焼け、これは今年のこの時点までの平均の約5倍を上回っているが、ポルトガルの焼けた土地も例年より多いことがEUのデータで示されている。
コペルニクス気候変動サービスによると、気候変動により世界中で気温が上昇しており、ヨーロッパは最も温暖化が進んでいる大陸であり、世界平均の2倍の速さで気温が上昇しているという。
これにより、夏の熱波が増大し、ヨーロッパの水供給への圧力が増大し、山火事の激化が起こっています。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cr7k4gdrgljo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-01T17:51:46+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/f990/live/6272fba0-8dd1-11f1-b8ee-9b3c26ad07bb.jpg",
    readTime: 3,
  },
  {
    id: "my-financial-adviser-says-i-don-t-need-a-61480baf",
    title: "My financial adviser says I don’t need a tax-efficient withdrawal plan for my $2.3 million portfolio. Is that madness?",
    titleJa: "私のファイナンシャルアドバイザーは、私の230万ドルのポートフォリオには節税効果のある引き出し計画は必要ないと言いました。それは狂気ですか？",
    summaryJa: "「彼の提案には、私の資産70万ドルを管理するための独自の株式ヘッジ戦略が含まれています。」",
    bodyOriginal: `“His proposal involves a proprietary equity hedge strategy to manage $700,000 of my assets.”`,
    bodyJa: `「彼の提案には、私の資産70万ドルを管理するための独自の株式ヘッジ戦略が含まれています。」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/its-a-high-price-to-pay-my-adviser-says-i-dont-need-a-withdrawal-plan-for-my-2-3-million-portfolio-is-he-right-06cb1eb2?mod=mw_rss_topstories",
    publishedAt: "2026-08-01T17:15:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-22873977",
    readTime: 2,
  },
  {
    id: "call-for-full-review-as-pressure-grows-o-eeb9d1e0",
    title: "Call for 'full review' as pressure grows on Infantino",
    titleJa: "インファンティーノ監督への圧力高まる中「全面見直し」を求める",
    summaryJa: "インファンティーノ監督への圧力高まる中「全面見直し」を求める- 公開されました",
    bodyOriginal: `Call for 'full review' as pressure grows on Infantino
- Published
Gianni Infantino's leadership of Fifa has been publicly questioned by football's governing bodies in Europe, North and Central America and the Caribbean.
Uefa and Concacaf both released statements on Saturday criticising the leadership at the world governing body after Infantino said Fifa would no longer proceed with the proposal to sell stakes in their competitions to private investors.
Uefa, which governs European football, welcomed the decision to withdraw the plan, describing it as a "victory for the whole game".
The body accused of Infantino of failing to deliver on promises, quoting a speech he gave when campaigning to become Fifa president in 2016.
Concacaf, which oversees football in North, Central America and the Caribbean, followed Uefa in criticising the plans, saying "unity had prevailed" and that the proposals were a "symptom of leadership that has stopped putting football first".
"This recent unilateral and egregious act of poor governance and leadership follows a pattern of missteps and similar behaviour. A full review of this leadership must now take place," a Concacaf statement read.
Unlike Uefa, Concacaf did not mention Infantino by name.
Infantino under pressure ahead of re-election bid
The fallout from the plans means Infantino is now under immense pressure as he seeks re-election for a fourth term as president at the Fifa Congress in March.
Uefa were the first major governing body to react to Infantino's decision to drop the investment plans, saying the Swiss had failed to deliver on his promises.
"The current Fifa leadership has not only lost Uefa's confidence but also that of many other members of the football family," Uefa's statement read.
"When Gianni Infantino asked for the trust and the votes of Fifa's member associations to elect him as their president in 2016, he said, 'Of course we have to be transparent'.
"He told the assembled stakeholders, 'The money of Fifa is your money. It's not the money of the Fifa president. You are the national associations and the money of Fifa has to serve for the development of football and not for anything else'.
"On both these promises, he has failed to deliver. The shabby, back room, opaque deal he hatched and tried to force through was anything but transparent."
Later on Saturday, Concacaf joined Uefa in criticising Fifa leadership and said "accountability cannot be optional".
"When people entrusted with protecting the game conclude they can no longer do so from within, the football family is entitled to ask how such a proposal was allowed to proceed and who bears responsibility for it," a Concacaf statement read.
UK Prime Minister Andy Burnham - the first leader of a major country to call on Infantino to resign - said Fifa made "the right decision" to back down.
Qatar's football association became the first body to publicly back Infantino, despite welcoming his decision to scrap the investment plans.
"While the proposal had merit, we applaud the wisdom behind prioritising unity among member associations," said Sheikh Hamad bin Khalifa bin Ahmed Al Thani, president of the Qatar FA.
"The Qatar FA fully supports president Infantino's efforts to continue growing and strengthening the game globally."
The decision to host the 2022 World Cup in Qatar was controversial given the country's human rights record and treatment of LGBTQ+ people.
On the eve of the tournament four years, Infantino defended Qatar and said European countries should apologise for acts committed in their own histories, rather than focusing on migrant workers' issues in Qatar.
Four reasons why Fifa's World Cup plan never stacked up
- Published6 hours ago
Courting controversy and befriending Trump - the story of Fifa boss Infantino
- Published9 hours ago
Infantino on the brink? Who might replace him if he goes?
- Published9 hours ago
What did Uefa's statement say?
Uefa had been highly critical of the proposals since they were first reported in the media on Tuesday.
In a powerful, lengthy statement released several hours after Fifa announced it had scrapped the plans, Uefa said:
it "cannot keep going on" with "secret schemes of fast-track timescales cooked up by faceless individuals and of dubious benefit to the game".
those responsible for the plan should be identified and held to account.
it would devise a plan "with its associations and in close co-operation with other confederations" to make sure this "cannot occur again".
it would work with partners to "propose a new way of distributing resources through the existing Fifa Forward programme".
It also accused Infantino of "failing to use associations' money for the benefit of the game".
"We must start to use some of that money that is sat idle in Fifa's bank account to deliver the kick-start that the grassroots and the wider game need," the statement added.
"But we don't need to sell off the family silver to pay for it.
"This is a victory for the whole game. But it must not be the end of the story.
"The proposal has gone. The task of rebuilding trust in Fifa has only just begun."
Fifa has yet to respond to Uefa's statement.
What did Concacaf's statement say?
Concacaf, which hosted this year's World Cup, was critical of the Fifa leadership without naming Infantino.
The governing body expressed concern at Infantino's plans on Thursday, after Uefa had voted to boycott World Cups if the Fifa plan proceeded.
While they stopped short of expressing no confidence in the Swiss, Concacaf said a "full review" of Fifa's leadership should be undertaken.
Concacaf said:
the "future of the FIFA World Cup, the greatest asset in world football, was advanced outside every established governance framework, without transparency, consultation or due process".
the plans were a "symptom of leadership that has stopped putting football first".
Fifa is "not a private enterprise. It is a body held in trust for the game and its members. Those appointed to serve it carry a fiduciary duty, a duty of service over power. Where that duty is not upheld, accountability cannot be optional".
They added the unity demonstrated by its 41 member associations this week "reaffirmed that when guided by courage, integrity and sound governance, the game will remain where it belongs: in the hands of football - not a single individual".
The Football Association said it supports Uefa's position, adding: "It is time for a full and robust review of Fifa's leadership and governance to ensure that the global game is run transparently."
Lise Klaveness, president of the Norwegian Football Federation, said it was "reassuring to be part of a strong and united Uefa throughout this process".
"We must acknowledge the entire framework of international football co-operation was unnecessarily put at risk in pursuit of individual interests rather than the best interests of the game," a statement read.
"Going forward, all our efforts must be directed towards improving governance.
"This cannot end as merely another power struggle conducted behind closed doors or through bilateral discussions."
'Thunderous barrage of criticism from Uefa'
Any hope Infantino might have had of tiptoeing away from the scene of his World Cup private-investment wreckage with just minor damage to his reputation has been obliterated.
Uefa has gone straight for the Fifa president.
The Asian Football Confederation (AFC) couched its condemnation of Infantino - make no mistake, it is livid - in creative terms.
But Uefa's statement is one of the most ferocious, possibly the most ferocious, ever aimed at the head of world football.
Words such as "shabby" and "secret schemes" speak for themselves.
It is fair to ask why football's powerbrokers didn't step in before now. There have been plenty of instances in the past few months alone when people have felt Fifa's president seemed to be acting against the benefit of the wider game.
But that is a different question.
Uefa has now taken aim at Infantino with a thunderous barrage of criticism, condemnation and vicious questioning.
The damage to Infantino is severe and it doesn't appear anyone is coming to help.
How did the proposal fall apart?
The proposal - first reported in the media on Tuesday - was met with widespread criticism, with Uefa voting on Thursday to boycott World Cups if the plans went ahead.
European football's governing body said the World Cup "cannot be treated as an investment product".
Two other major confederations then spoke out against the plans.
Concacaf, which governs football in North and Central America and the Caribbean - and hosted this summer's World Cup - said its members "rejected" the proposal, with sources saying the vast majority of associations from the region are losing, or have lost, faith in Infantino.
The AFC said it stood in "solidarity" with Uefa and Concacaf, while Burnham said Infantino was "the wrong man" to lead Fifa.
On Friday, Fifa's chief operating officer Kevin Lamour said the governing body's own administration had been "deceived" about the project.
Carlos Cordeiro, Infantino's senior adviser on global strategy and governance, resigned over the matter, saying the proposal was "a bad deal for football" and would "mortgage football's future".
What were Infantino's plans?
Fifa and Infantino wanted to create a commercial subsidiary to run its main events, including its World Cups, and external investors would have been able to buy stakes in it.
It said it would "invite third parties to make minority, non-controlling investments" in a new subsidiary called Fifa Forward Enterprise (FFE).
In a 25-page document created by investment bank JP Morgan, it was made clear Fifa's tournaments would expand to hit an estimated increased payout of 24m euros (£20.5m) per member association in the 2035-39 cycle.
In the document, the World Cup was described as the "most widely viewed" sporting event but Fifa, by contrast, was said to be "under-monetised".
There was no mention of the women's game.
Fifa said Thrive Eternal was expected to lead the proposed investor group for FFE, had it been approved.
Thrive is an American venture capital firm founded by Joshua Kushner, the brother of US President Donald Trump's son-in-law Jared.
A report in the New York Post, which broke the story of the Fifa plan withdrawal, quoted an unnamed source saying the situation had become a "brand nightmare" for Kushner.`,
    bodyJa: `インファンティーノ監督への圧力高まる中「全面見直し」を求める
- 公開されました
ジャンニ・インファンティーノ氏のFIFA指導力は、ヨーロッパ、北中米、カリブ海のサッカー統括団体から公の場で疑問視されている。
インファンティーノ氏がFIFAが民間投資家に自社の大会の株式を売却する提案を今後進めるつもりはないと述べたことを受け、UEFAとコンカカフは土曜日、両者ともに土曜日、世界統括団体の指導部を批判する声明を発表した。
欧州サッカーを統括するUEFAは、この計画撤回の決定を「試合全体の勝利」として歓迎した。
同団体は、インファンティーノ氏が2016年のFIFA会長就任を目指して選挙運動を行った際のスピーチを引用し、約束を果たせなかったとして非難した。
北、中米、カリブ海のサッカーを統括するコンカカフはUEFAに続き、「団結が広まった」とし、この提案は「サッカーを第一に考えることをやめたリーダーシップの表れ」だと述べ、この計画を批判した。
コンカカフの声明には「この最近の一方的でひどい統治とリーダーシップの欠如は、失策や同様の行動のパターンに倣っている。このリーダーシップの全面的な見直しが今行われなければならない」と書かれている。
ウエファとは異なり、コンカカフはインファンティーノの名前を挙げなかった。
再選を前にプレッシャーを受けるインファンティーノ
この計画の影響により、インファンティーノ氏は現在、3月のFIFA総会で会長として4期目の再選を目指しており、多大なプレッシャーにさらされている。
UEFAは、インファンティーノ氏の投資計画中止の決定に反応し、スイスが約束を果たせなかったと主張した最初の主要統括団体となった。
UEFAの声明には「現在のFIFA指導部はUEFAの信頼を失っただけでなく、サッカーファミリーの他の多くのメンバーの信頼も失った」と記されている。
「ジャンニ・インファンティーノ氏が、2016年に自分を会長に選出するためにFIFA加盟協会の信頼と投票を求めたとき、彼はこう言った。『もちろん、我々は透明性を持たなければならない』と。
「彼は集まった関係者に『FIFAのお金はあなたのお金だ』と言いました。それはFIFA会長のお金ではありません。皆さんは各国協会であり、FIFAのお金はサッカーの発展のために役立つものであり、他のもののためではありません。」
「これらの約束は両方とも、彼は果たせなかった。彼が練り上げ、強引に押し通そうとしたみすぼらしい、密室で不透明な取引は、決して透明なものではなかった。」
土曜日遅く、コンカフ氏もUEFAとともにFIFA指導部を批判し、「説明責任は任意ではない」と述べた。
コンカカフの声明には「試合を守ることを託された人々が、もはや内部から守ることはできないと結論づけたとき、サッカー界はそのような提案がどのようにして進められたのか、誰がその責任を負うのかを問う権利がある」と書かれている。
インファンティーノ氏に辞任を要求した主要国の指導者として初めて英国のアンディ・バーナム首相は、FIFAが辞任するという「正しい決断」をしたと述べた。
カタールのサッカー協会は、投資計画を撤回するという同氏の決定を歓迎したにもかかわらず、インファンティノ氏を公的に支持した最初の団体となった。
カタールサッカー協会の会長、シェイク・ハマド・ビン・ハリファ・ビン・アーメド・アル・サーニ氏は、「この提案には価値があるが、我々は加盟協会間の結束を優先する賢明さを称賛する」と述べた。
「カタールサッカー協会は、世界的にサッカーの成長と強化を継続するためのインファンティーノ会長の取り組みを全面的にサポートしている。」
2022年ワールドカップをカタールで開催するという決定は、この国の人権実績とLGBTQ+の人々の扱いを考慮すると物議を醸した。
４年ぶりの大会前夜、インファンティーノ氏はカタールを擁護し、欧州諸国はカタールの移民労働者問題に焦点を当てるのではなく、自国の歴史の中で犯した行為を謝罪すべきだと述べた。
FIFAのワールドカップ計画が実現しなかった4つの理由
- 6 時間前に公開
論争を巻き起こし、トランプと友人になる - FIFA会長インファンティーノの物語
- 9 時間前に公開
インファンティーノは瀬戸際？彼が去った場合、誰が彼の代わりをするでしょうか？
- 9 時間前に公開
UEFAの声明は何と言ったのでしょうか？
火曜日に最初にメディアで報じられて以来、UEFAはこの提案に対して非常に批判的だった。
FIFAが計画の撤回を発表した数時間後に発表した力強い長い声明の中で、UEFAは次のように述べた。
「顔の見えない人物が作り上げた、ゲームに利益をもたらす疑わしい秘密計画の急行スケジュール」を「続けることはできない」。
計画の責任者は特定され、責任を問われるべきである。
このようなことが「二度と起こらないように」するため、「協会と他の連盟と緊密に協力して」計画を立てるつもりだ。
パートナーと協力して「既存のFIFA Forwardプログラムを通じてリソースを分配する新しい方法を提案する」という。
また、インファンティーノ監督が「協会の資金を試合の利益のために使用しなかった」と非難した。
「我々は草の根とより広範なスポーツ界が必要とするキックスタートを提供するために、FIFAの銀行口座に眠っている資金の一部を使い始めなければならない」と声明は付け加えた。
「しかし、その代金を支払うために家族の銀を売り飛ばす必要はありません。
「これは試合全体の勝利だ。しかし、それで話が終わってはいけません。
「提案は消えた。FIFAへの信頼を再構築する仕事は始まったばかりだ」
FIFAはUEFAの声明に対してまだ返答していない。
コンカカフの声明は何と言ったのでしょうか？
今年のワールドカップを主催したコンカカフは、インファンティーノ氏の名前は挙げずにFIFA指導部を批判した。
FIFAの計画が進めばワールドカップをボイコットすることをUEFAが決議したことを受け、統括団体は木曜日、インファンティーノ氏の計画に懸念を表明した。
コンカカフ氏はスイス人に対する不信任を表明するまでには至らなかったが、FIFAの指導力について「全面的な見直し」を行うべきだと述べた。
コンカフ氏はこう語った。
「世界サッカーにおける最大の資産であるFIFAワールドカップの将来は、透明性、協議、適正手続きなしに、あらゆる確立されたガバナンスの枠組みの外で進められた」。
この計画は「サッカーを第一に考えることをやめたリーダーシップの兆候」だった。
FIFAは「民間企業ではない。競技会とその会員のために信託された団体である。FIFAに奉仕するよう任命された者は、受託者としての義務、権力に対する奉仕の義務を負う。その義務が守られない場合、責任は任意であることはできない」。
さらに、加盟41協会が今週示した団結は「勇気、誠実さ、健全な統治に導かれれば、ゲームは本来あるべき場所に留まる、つまり一人の個人ではなくフットボールの手中にあることを再確認した」と付け加えた。
サッカー協会はUEFAの立場を支持すると述べ、「世界的な試合が透明性をもって運営されるよう、FIFAのリーダーシップとガバナンスを完全かつしっかりと見直す時期が来た」と付け加えた。
ノルウェーサッカー連盟のリーゼ・クラベネス会長は、「このプロセスを通じて、強く団結したUEFAの一員でいられることは心強い」と語った。
「我々は、サッカーの国際協力の枠組み全体が、競技の最善の利益ではなく個人の利益を追求するために不必要に危険にさらされたことを認めなければならない」と声明で述べた。
「今後、私たちのあらゆる努力はガバナンスの改善に向けられなければなりません。
「これを、密室で行われる、あるいは二国間協議を通じて行われる単なる権力闘争で終わるわけにはいかない。」
「UEFAからの激しい批判の集中砲火」
インファンティーノ監督がワールドカップでの個人投資の惨状から、名誉を少しでも傷つけるだけで、その現場から忍び足で逃げられるという希望は打ち砕かれた。
UEFAはFIFA会長選出馬に真っ向から乗り出した。
アジアサッカー連盟（AFC）は、クリエイティブな言葉でインファンティーノ氏を非難した――間違いなく、激怒している――と主張した。
しかし、UEFAの今回の声明は、これまで世界サッカー界のトップに向けられた中で最も凶暴、おそらく最も凶暴なものの一つだ。
「みすぼらしい」や「秘密の計画」といった言葉がそれを物語っています。
なぜサッカー界の権力者たちが今まで介入しなかったのかと疑問に思うのは当然だ。過去数カ月間だけでも、FIFA会長が競技全体の利益に反して行動しているように見えると人々が感じた例は数多くあった。
しかし、それは別の質問です。
UEFAは現在、激しい批判、非難、そして悪質な尋問でインファンティーノに狙いを定めている。
インファンティーノの被害は深刻で、誰も助けに来てくれないようだ。
提案はどのようにして決裂したのでしょうか?
この提案は火曜日に初めてメディアで報道されたが、広範囲にわたる批判にさらされ、UEFAは木曜日、計画が実行される場合にはワールドカップをボイコットすることに投票した。
欧州サッカー統括団体はワールドカップを「投資商品として扱うことはできない」と述べた。
その後、他の2つの主要な連盟も計画に反対の声を上げた。
北中米とカリブ海地域のサッカーを統括し、今夏のワールドカップを主催するコンカカフは、加盟団体がこの提案を「拒否した」と述べ、関係者によると、この地域のサッカー協会の大半がインファンティーノ氏への信頼を失いつつある、あるいは失っているという。
AFCはUEFAとコンカカフと「連帯」すると述べたが、バーナムはインファンティーノ氏がFIFAを率いるには「間違った人物」だと述べた。
金曜日、FIFAの最高執行責任者ケビン・ラムール氏は、FIFA運営当局がこのプロジェクトについて「だまされていた」と述べた。
インファンティーノ氏の世界戦略とガバナンスに関する上級顧問カルロス・コルデイロ氏は、この提案は「サッカーにとって悪い取引」であり、「サッカーの将来を抵当に入れることになる」として、この問題を理由に辞任した。
インファンティーノの計画は何だったのでしょうか？
FIFAとインファンティーノは、ワールドカップを含む主要イベントを運営するための商業子会社を設立したいと考えており、外部投資家がその株式を購入することができたはずだ。
同社は、FIFAフォワードエンタープライズ（FFE）と呼ばれる新しい子会社に対して「少数株主非支配投資を行うよう第三者を招待する」と述べた。
投資銀行JPモルガンが作成した25ページの文書の中で、FIFAのトーナメントが拡大し、2035年から39年のサイクルで加盟協会当たり推定支払額2,400万ユーロ（約2,050万ポンド）の増加額に達することが明らかになった。
この文書では、ワールドカップは「最も広く視聴されている」スポーツイベントであるとされているが、対照的にFIFAは「収益化が不十分」であるとされている。
女子の試合については言及がなかった。
FIFAは、承認されればスライブ・エターナルがFFEへの提案された投資家グループを率いることが期待されると述べた。
Thriveは、ドナルド・トランプ米大統領の義理の息子ジャレッドの弟であるジョシュア・クシュナーによって設立された米国のベンチャーキャピタル会社です。
FIFA計画撤回の記事を報じたニューヨーク・ポスト紙の報道は、状況がクシュナー氏にとって「ブランドの悪夢」になったと匿名の情報筋の言葉を引用した。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/sport/football/articles/c04kr2nv3v3o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-01T17:07:46+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/f8ad/live/497ab970-8d91-11f1-b2ab-0dd01740f9f6.jpg",
    readTime: 10,
  },
  {
    id: "spain-attacks-selfish-response-of-some-e-7164f125",
    title: "Spain attacks 'selfish' response of some EU countries to Ceuta migrant crossings",
    titleJa: "スペイン、セウタの移民入国に対する一部EU諸国の「利己的な」対応を攻撃",
    summaryJa: "スペイン、セウタの移民入国に対する一部EU諸国の「利己的な」対応を攻撃- 公開されました",
    bodyOriginal: `Spain attacks 'selfish' response of some EU countries to Ceuta migrant crossings
- Published
Spain has condemned the "selfish, polarising and unlawful" reaction of some EU countries to the influx of about 60,000 migrants from Morocco into the Spanish enclave of Ceuta.
Spanish officials say almost all those who reached Ceuta on 30 July have returned, while Spain's interior minister said on Saturday that the death toll from the surge in crossings had risen to at least 67.
Italy temporarily suspended the EU's border-free Schengen arrangement with Spain, as PM Giorgia Meloni called the scenes "shocking". Finland and Denmark backed Italy's move, while Czech PM Andrej Babiš urged a temporary suspension of Spain's Schengen membership.
EU interior ministers will meet on Tuesday by video conference to discuss the issue.
Spanish Prime Minister Pedro Sanchez had called for an urgent meeting to "reaffirm that the security of our external borders is a shared responsibility of all Member States".
Twenty-two of the EU's 27 countries also called for emergency talks in an open letter, citing "serious concerns" regarding the developments in Ceuta.
The nations "welcome that Spain and Morocco are cooperating closely to ensure the swift return of migrants", but said a video conference would help reach agreement on mobilising EU instruments and support for Spain to restore "effective control" of the border and prevent further uncontrolled crossings.
In a letter to European Commission President Ursula von der Leyen, Spanish Prime Minister Pedro Sánchez said he had "serious concerns" about some European governments.
He said the Spanish government had fully restored control over the border and prevented any "unauthorised onward movement towards continental Europe" in less than 48 hours.
While most had shown "support and solidarity", Sanchez said other European governments had chosen to attack Spain, "driven by prejudice, fake news, ignorance, or political interest", and pointed out that Ceuta was not part of the Schengen area.
"The European Union cannot afford this kind of selfish, polarising and unlawful reaction," he said.
Also on Saturday, UK Prime Minister Andy Burnham said he had spoken to Sánchez and the UK was "providing what help we can".
There were chaotic scenes on Thursday in Ceuta as border controls in the North African enclave apparently broke down.
But in a news conference on Saturday, Spain's Interior Minister Fernando Grande-Marlaska told reporters the situation in Ceuta had almost returned to normal.
"Almost all of [the migrants] have already left Ceuta," the minister said, adding that businesses had now reopened. "The situation has been almost entirely reversed."
He also said Spain had started to establish an inflatable maritime barrier to prevent further illegal migrant entry.
But while the situation on the ground appears to be easing, political and diplomatic fallout is rippling through Madrid and other capitals.
On Thursday, Italy's Prime Minister Giorgia Meloni wrote on social media that such "uncontrolled immigration" was a threat to national security, before suspending the Schengen zone agreement with Spain for a month.
The Schengen Area is a system of open borders spanning 29 European countries that have abolished controls at their common borders.
Spain responded by summoning the Italian ambassador to Madrid, while its foreign minister said he expected "European solidarity and not partisan demagoguery".
Finland's Interior Minister Mari Rantanen said she had started preparations for restoring internal border checks "if the need arises". She also urged "all European countries" to support Meloni's move.
Danish Prime Minister Mette Frederiksen also urged the EU to "consider all options, including a suspension of Schengen co-operation".
France has tightened checks on its border with Spain and said it would increase its police presence by Saturday.
Portuguese PM Luis Montenegro said he was considering reinforcing border checks.
Von der Leyen said the images from Ceuta were "unacceptable". "We cannot allow anyone to come to our Union without abiding by our rules," she said on social media.
German Chancellor Friedrich Merz said he "supports Spain's intention not to allow illegal migrants onto the European continent", and demanded that Morocco "take back illegal migrants immediately".
In the US, the State Department said the incident was a direct result of Spain's migration policies. President Donald Trump called the situation a "catastrophe" and said "it looks like an invasion of a country by hundreds of thousands of people".
Spain has defended its handling of the migrant surge. Madrid has sent troops, more police, drones, divers and boats to Ceuta. The country has also deployed its armed forces to bolster security in another Spanish enclave, Melilla, where hundreds of crossings were also reported.
Sánchez, who has visited Ceuta after the migrant influx, said he would consider reinforcing the border with Morocco, and that Moroccan authorities were co-operating.
He blamed trafficking gangs for the migrant surge, calling the incident a "violation of Spain's territorial integrity".
"Trafficking mafias took a self-serving interpretation of a Supreme Court ruling" which "spread like wildfire", he said.
EU Commissioner Magnus Brunner said, after a phone call with Spanish Foreign Minister José Manuel Albares, that "not a single person has crossed to mainland EU".
In June, Spain's Supreme Court ruled that migrants stopped at sea while trying to reach Ceuta or Melilla could not be summarily returned to Morocco without due process.
While the surge of migrants this year is extraordinary, Ceuta has long been a focal point for migrants attempting to reach Europe. During the summer months, there is often a big push to reach Ceuta, typically organised over social media.
In 2021, about 8,000 people entered Ceuta over a matter of days, exacerbating Spain's diplomatic tensions with Morocco.
Morocco, which has been suffering from a high unemployment rate, witnessed several Gen Z anti-government protests last year, with young people demanding better opportunities and improvements to public services.
Together with Melilla, Ceuta forms the European Union's only land borders with Africa. Migrants can enter the enclave by swimming several kilometres.
Spain has a relatively friendly approach to immigration. In April, the government approved plans to give legal status to 500,000 undocumented migrants, allowing them to be formally integrated into the workforce.
At that time, the right-wing Italian prime minister had already criticised Sánchez, saying the policy would "affect its neighbours".
In June the European Parliament approved tougher migration rules that grant authorities broader powers to return irregular arrivals.
- Published1 day ago
- Published5 June 2021`,
    bodyJa: `スペイン、セウタの移民入国に対する一部EU諸国の「利己的な」対応を攻撃
- 公開されました
スペインは、モロッコからスペインの飛び地セウタへの約6万人の移民流入に対する一部のEU諸国の「利己的で二極化した不法な」反応を非難した。
スペイン当局は、7月30日にセウタに到着したほぼ全員が帰還したと発表する一方、スペイン内務大臣は土曜日、渡航者の急増による死者数は少なくとも67人に達したと発表した。
ジョルジア・メローニ首相がこの事態を「衝撃的」だと述べたため、イタリアはEUのスペインとの国境のないシェンゲン協定を一時停止した。フィンランドとデンマークはイタリアの動きを支持し、チェコのアンドレイ・バビシュ首相はスペインのシェンゲン加盟国の一時停止を主張した。
EU内相らは火曜日にビデオ会議で会合し、この問題について話し合う予定だ。
スペインのペドロ・サンチェス首相は「国境の安全は全加盟国の共通の責任であることを再確認する」ため、緊急会合の開催を呼びかけた。
EU加盟27カ国のうち22カ国も公開書簡で、セウタの動向に関する「深刻な懸念」を理由に緊急協議を呼びかけた。
両国は「スペインとモロッコが移民の迅速な帰還を確保するために緊密に協力していることを歓迎」しているが、ビデオ会議は国境の「実効支配」を回復し、さらなる野放しな越境を防ぐためにEUの手段とスペインへの支援を動員することで合意に達するのに役立つだろうと述べた。
スペインのペドロ・サンチェス首相は欧州委員会のウルズラ・フォン・デア・ライエン委員長に宛てた書簡の中で、一部の欧州政府について「深刻な懸念」を抱いていると述べた。
同氏は、スペイン政府が国境の管理を完全に回復し、48時間以内に「欧州大陸への不正な前進」を阻止したと述べた。
サンチェス氏は、大半の政府が「支持と団結」を示していた一方で、他の欧州各国政府が「偏見、フェイクニュース、無知、政治的利益に動かされて」スペイン攻撃を選択したと述べ、セウタはシェンゲン圏に含まれていないと指摘した。
「欧州連合はこの種の利己的で二極化した不法な反応を容認することはできない」と述べた。
また土曜日、英国のアンディ・バーナム首相はサンチェス氏と話し、英国は「できる限りの支援を提供している」と述べた。
木曜日、北アフリカの飛び地での国境管理が明らかに機能不全に陥り、セウタでは混沌とした場面があった。
しかし、スペインのフェルナンド・グランデ・マルラスカ内務大臣は土曜日の記者会見で、セウタの状況はほぼ正常に戻ったと語った。
同大臣は「（移民の）ほぼ全員がすでにセウタを出国した」と述べ、現在は事業が再開されていると付け加えた。 「状況はほぼ完全に逆転した。」
同氏はまた、スペインがさらなる不法移民の入国を防ぐために膨張可能な海上障壁の設置を開始したと述べた。
しかし、現場の状況は緩和しているように見える一方で、政治的・外交的影響がマドリードや他の首都に波及している。
イタリアのジョルジア・メローニ首相は木曜日、ソーシャルメディアにこのような「野放図な移民」は国家安全保障への脅威であると書き込み、その後スペインとのシェンゲン圏協定を１カ月間停止した。
シェンゲン圏は、共通の国境における管理を廃止したヨーロッパ 29 か国にまたがるオープンな国境システムです。
スペインはこれに応じて駐マドリードのイタリア大使を召喚し、外相は「党派的な扇動ではなく欧州の団結」を期待していると述べた。
フィンランドのマリ・ランタネン内務大臣は、「必要が生じた場合」国内の国境検査を復活させる準備を開始したと述べた。同氏はまた、「すべてのヨーロッパ諸国」に対し、メローニ氏の動きを支持するよう呼び掛けた。
デンマークのメッテ・フレデリクセン首相もEUに対し「シェンゲン協定への協力停止を含むあらゆる選択肢を検討する」よう求めた。
フランスはスペインとの国境での検問を強化し、土曜日までに警察の駐留を強化すると発表した。
ポルトガルのルイス・モンテネグロ首相は、国境検査の強化を検討していると述べた。
フォンデアライエン氏は、セウタからの画像は「容認できない」と述べた。 「私たちの規則に従わない者が組合に来ることを許すことはできません」と彼女はソーシャルメディアで述べた。
ドイツのフリードリヒ・メルツ首相は「欧州大陸への不法移民を認めないというスペインの意向を支持する」と述べ、モロッコに対し「不法移民を即時奪還する」よう要求した。
米国国務省は、この事件はスペインの移民政策の直接の結果であると述べた。ドナルド・トランプ大統領はこの状況を「大惨事」と呼び、「数十万人による国への侵略のようだ」と述べた。
スペインは移民急増への対応を擁護してきた。マドリードはセウタに軍隊、さらに多くの警察、ドローン、ダイバー、ボートを派遣した。同国はまた、スペインの別の飛び地であるメリリャでも治安を強化するために軍隊を派遣しており、そこでも数百件の踏切が報告されている。
移民流入後にセウタを訪問したサンチェス氏は、モロッコとの国境の強化を検討すると述べ、モロッコ当局も協力していると述べた。
同氏は移民急増の原因は人身売買組織だと非難し、この事件を「スペインの領土一体性の侵害」と呼んだ。
同氏は、「人身売買マフィアは最高裁判所の判決を利己的に解釈し」、それが「山火事のように広がった」と述べた。
EUのマグヌス・ブルナー委員はスペインのホセ・マヌエル・アルバレス外相との電話会談後、「EU本土に渡った人は一人もいない」と述べた。
スペイン最高裁判所は6月、セウタまたはメリリャに到達しようとして海上に立ち寄った移民を適正手続きなしにモロッコに即時送還することはできないとの判決を下した。
今年の移民の急増は異常だが、セウタは長年、ヨーロッパを目指す移民の中心となってきた。夏の間、セウタに到達しようとする大きな動きがあり、通常はソーシャルメディア上で組織されます。
2021年には数日間で約8000人がセウタに入国し、スペインとモロッコの外交的緊張が悪化した。
高い失業率に悩まされているモロッコでは昨年、若い世代がより良い機会と公共サービスの改善を求め、Z世代による反政府抗議活動が数回起きた。
セウタはメリリャとともに、欧州連合でアフリカとの唯一の陸上国境を形成しています。移民は数キロ泳いで飛び地に入ることができる。
スペインは移民に対して比較的友好的なアプローチを取っています。政府は4月、50万人の不法移民に法的地位を与え、彼らが正式に労働力に組み込まれるようにする計画を承認した。
当時、イタリアの右派首相はすでにサンチェス氏を批判し、この政策は「近隣諸国に影響を与える」と述べていた。
欧州議会は6月、不法入国者を帰国させるためのより広範な権限を当局に与える、より厳格な移民規則を承認した。
- 1 日前に公開
- 2021 年 6 月 5 日公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cx2v91xn1z9o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-01T15:46:08+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/9964/live/578198d0-8dc9-11f1-a7ab-8b30adf0800a.jpg",
    readTime: 7,
  },
  {
    id: "berkshire-hathaway-shares-hit-eight-mont-91efc9cd",
    title: "Berkshire Hathaway shares hit eight-month high",
    titleJa: "バークシャー・ハサウェイ株が8カ月ぶり高値を更新",
    summaryJa: "(これはウォーレン・バフェット・ウォッチのニュースレター、ウォーレン・バフェットとバークシャー・ハサウェイに関するニュースと分析です。ここからサインアップすると、毎週金曜日の夜に受信箱で受け取ることができます。)バークシャー株は8カ月ぶりの高値を記録",
    bodyOriginal: `(This is the Warren Buffett Watch newsletter, news and analysis on all things Warren Buffett and Berkshire Hathaway. You can sign up here to receive it every Friday evening in your inbox.)
Berkshire shares hit eight-month high
Berkshire Hathaway shares rallied to an eight-month high this week and there could be more gains ahead if they continue to catch up to the S&P 500.
The B shares closed Tuesday at $512.37, their highest level since November 28, when they finished at $513.81.
They closed Friday at $511.54, down 5.2% from the all-time closing high of $539.80 on May 2 of last year, the day before Warren Buffett revealed he would step down as CEO at the end 2025.
The Class A shares ended Tuesday at $768,010, also their highest close since November 28's $770,100.
Friday's close of $766,600 was 5.3% below their all-time closing high of $809,350.
A story in Barron's says Berkshire's rally "has room to run" since the stock remains "well behind" the benchmark S&P 500, which is 7.6 percentage points ahead.
But Berkshire has erased more than half of its 17.5 percentage point deficit just two months ago.
Berkshire is also lagging behind competitors in two key sectors: railroads ...
... and insurance.
Another positive for Berkshire is the big gains for three of its biggest equity portfolio holdings.
Number one Apple, now worth more than $70 billion, is up 13.6% so far this year.
Coca-Cola, Berkshire's third largest position at $35 billion, has jumped 25% year-to-date. Earnings this week came in ahead of expectations and Coke raised its full-year outlook.
Number four Bank of America is up 12.6% on the year. That stake is now valued at almost $32 billion.
Berkshire's gain of around 3% on Tuesday may have been partially fueled by UBS analyst Brian Meredith raising his price target on the B shares to $585 from $570, and on the A shares to $877,848 from $854,596.
While maintaining a "buy" rating, Meredith also edged his earnings estimates higher and welcomed a Barron's report two weeks ago that Berkshire appeared to have bought back as much as $11 billion of its stock in the second quarter.
We'll get the actual number when Berkshire releases second-quarter results, expected on Saturday, August 8.
BUFFETT & BERKSHIRE AROUND THE INTERNET
Some links may require a subscription:
- Barron's on MSN: Warren Buffett's worst-ever deal benefits this place the most
- Barron's on MSN: Why Berkshire Hathaway would win if the Fed lifts interest rates
- The Motley Fool: Why Berkshire's stake in Apple still matters more than people think
- The Motley Fool: Warren Buffett's legacy oil bet is paying off under Greg Abel. Nobody's talking about it.
HIGHLIGHTS FROM CNBC'S BUFFETT ARCHIVE
Why Buffett doesn't ask his friends for favors (2003)
Warren Buffett responds to a request from an audience member to enlist the support of his "cousin" Jimmy Buffett in saving the trees in the Florida botanical garden and theme park Cypress Gardens.
AUDIENCE MEMBER: Several weeks from now I'll be before [Florida] Governor [Jeb] Bush with the Friends of Cypress Gardens. We have a website ... trying to keep a developer from clear-cutting the trees in Cypress Gardens, a national treasure.
And my question is, would you consider contacting your "cousin," [musician] Jimmy Buffett, about possibly helping us in some way? ...
WARREN BUFFETT: I get asked to contact — probably the one I get asked to contact the most is Bill Gates, but I get asked to contact all kinds of people.
And I mean, everybody is slipping me envelopes with letters in them, sending things to the office and saying, "Won't you get this person?" and all they can say is no.
I don't do — I don't make requests of my friends, basically, for anything.
And I just — I would spend the rest of my life doing it. They would feel — I would never know — (applause) — you know, what they were doing —
You know, I would never know what they were doing because I was asking versus what they really felt.
I mean it's an impossible — from my standpoint at least — that's an impossible game to get into, in terms of that.
I mean when [Washington Post publisher] Kay Graham was alive, everybody, you know, wanted her for one reason or another. And they've all got causes.
And, frankly, they, you know, they want to use me to get her, or Jimmy Buffett, or whomever, to say yes to something that they're saying yes to, partially, because they feel they don't want to say no to me.
And I, you know, that — I just don't want to use my friendship for that purpose, frankly.
And I don't do it, even for things that I strongly believe in, myself...
I've never had one of those honorary dinners where they send out, you know, to all the suppliers to Berkshire and everything and start leaning on them and saying, you know, "We're honoring Warren."
Well, hell, if they want to honor me, they can honor me without soliciting all my friends for money. I mean, I don't consider that much of an honor if the reason they picked me was because I got rich friends.
So, I just don't do that.
BERKSHIRE STOCK WATCH
Four weeks
Twelve months
BRK.A stock price: $766600.01
BRK.B stock price: $511.54
BRK.B P/E (TTM): 15.23
Berkshire market capitalization: $1,102,963,354,142
Berkshire Cash as of March 31: $397.4 billion (Up 6.5% from Dec. 31)
Excluding Rail Cash and Subtracting T-Bills Payable: $380.2 billion (Up 3.0% from Dec. 31)
Berkshire repurchased $234 million of its shares in Q1 2026.
(All figures are as of the date of publication, unless otherwise indicated)
BERKSHIRE'S TOP EQUITY HOLDINGS - July 31, 2026
Berkshire's top holdings of disclosed publicly traded stocks in the U.S. and Japan, by market value, based on the latest closing prices.
Holdings are as of March 31, 2026, as reported in Berkshire Hathaway's 13F filing on May 15, 2026, except for:
- Alphabet, which includes the $10 billion in shares that Berkshire agreed to buy directly from the company, as announced on June 1, 2026. Berkshire has not yet formally disclosed whether the transaction has been completed. The entry is a combination of Class A and Class C Alphabet shares. The market price is a weighted average of the prices of the two classes.
- Mitsubishi, which is as of April 30, 2026
The full list of holdings and current market values is available from CNBC.com's Berkshire Hathaway Portfolio Tracker.
QUESTIONS OR COMMENTS
Please send any questions or comments about the newsletter to me at alex.crippen@nbcuni.com. (Sorry, but we don't forward questions or comments to Buffett himself.)
If you aren't already subscribed to this newsletter, you can sign up here.
Also, Buffett's annual letters to shareholders are highly recommended reading. They are collected here on Berkshire's website.
-- Alex Crippen, Editor, Warren Buffett Watch`,
    bodyJa: `(これはウォーレン・バフェット・ウォッチのニュースレター、ウォーレン・バフェットとバークシャー・ハサウェイに関するニュースと分析です。ここからサインアップすると、毎週金曜日の夜に受信箱で受け取ることができます。)
バークシャー株は8カ月ぶりの高値を記録
バークシャー・ハサウェイの株価は今週、８カ月ぶりの高値に上昇しており、今後もＳ＆Ｐ５００指数に追いつけばさらなる上昇が見込まれる可能性がある。
B株の火曜日の終値は512.37ドルで、513.81ドルで終了した11月28日以来の高値となった。
金曜日の終値は511.54ドルで、ウォーレン・バフェット氏が2025年末にCEOを辞任することを明らかにする前日、昨年5月2日の終値史上最高値539.80ドルから5.2％下落した。
クラスA株の火曜日の終値は76万8,010ドルで、これも11月28日の77万100ドル以来の最高値となった。
金曜日の終値は76万6,600ドルで、終値史上最高値の80万9,350ドルを5.3％下回った。
本誌の記事は、バークシャー株がベンチマークであるS&P500指数（7.6％ポイントの差）を依然として「大きく下回っている」ため、バークシャー株の上昇には「上昇の余地がある」と述べている。
しかしバークシャーはわずか２カ月前に１７．５％ポイントの赤字の半分以上を解消した。
バークシャーはまた、鉄道という 2 つの主要セクターでも競合他社に遅れをとっています。
...そして保険。
バークシャーにとってもう一つのプラスは、同社が保有する最大の株式ポートフォリオのうち3銘柄が大幅に上昇したことだ。
ナンバーワンのアップルは現在700億ドル以上の価値があり、年初から13.6％上昇している。
コカ・コーラは350億ドルでバークシャー第3位の地位を占めており、年初から25％上昇した。今週の決算は予想を上回り、コーラは通年の見通しを引き上げた。
4位のバンク・オブ・アメリカは前年比12.6％上昇した。その株式の価値は現在約320億ドルに上る。
火曜日のバークシャーの約3％上昇は、UBSアナリストのブライアン・メレディス氏がB株の目標株価を570ドルから585ドルに、A株の目標株価を85万4,596ドルから87万7,848ドルに引き上げたことによって部分的に加速された可能性がある。
メレディス氏は「買い」の格付けを維持しながらも利益予想を若干引き上げ、バークシャーが第２・四半期に最大１１０億ドルの自社株買いを行ったようだという２週間前の本誌の報道を歓迎した。
実際の数字は、バークシャーが第 2 四半期決算を発表 (8 月 8 日土曜日予定) するときにわかります。
インターネット上のバフェットとバークシャー
一部のリンクには購読が必要な場合があります。
- MSN 上の本誌: ウォーレン・バフェット氏の史上最悪の取引がこの場所に最も利益をもたらす
- MSN 上の本誌: FRB が金利を引き上げたらバークシャー・ハサウェイが勝つ理由
- モトリーフール社: バークシャーの Apple 株が依然として人々が考えている以上に重要である理由
- モトリーフール社: ウォーレン・バフェット氏の伝統的な石油への賭けは、グレッグ・エイベルの下で報われています。誰もそれについて話していません。
CNBC のバフェット アーカイブのハイライト
バフェットが友人にお願いをしない理由 (2003)
ウォーレン・バフェット氏は、フロリダ植物園とテーマパークのサイプレス・ガーデンズの木々を救うために「いとこ」ジミー・バフェット氏の支援を求めるという聴衆からのリクエストに応えた。
聴衆: 今から数週間後、私はサイプレス・ガーデンズの友人たちとともに[フロリダ]知事[ジェブ]・ブッシュの前に行きます。私たちはウェブサイトを持っています...開発者が国宝であるサイプレスガーデンの木々を皆伐するのを阻止しようとしています。
それで、私の質問は、あなたの「いとこ」（ミュージシャン）のジミー・バフェットに、何らかの形で私たちを助けてもらえる可能性について連絡することを検討してもらえますか？ ...
ウォーレン・バフェット: 私は連絡を求められます。おそらく最も多く連絡を求められるのはビル・ゲイツですが、あらゆる種類の人に連絡を求められます。
つまり、みんなが私に手紙の入った封筒を滑り込ませたり、オフィスに物を送ったりして、「この人を受け取ってもらえませんか？」と言ってきます。そして彼らが言えるのは「ノー」だけです。
私はしません。基本的に、私は友達に何かを要求しません。
そして私はただ、それをすることに残りの人生を費やすつもりです。彼らはこう感じただろう — 私には決して分からない — (拍手) — ほら、彼らが何をしていたのか —
ご存知のように、私は彼らが実際に何を感じているかを尋ねていたので、彼らが何をしているか決して知りませんでした。
つまり、少なくとも私の立場からすると、その点で、参加するのは不可能なゲームです。
つまり、[ワシントン・ポストの発行人]ケイ・グラハムが生きていたとき、誰もが何らかの理由で彼女を欲しがっていました。そして、それらにはすべて原因があります。
そして、率直に言って、彼らは、私を利用して、彼女やジミー・バフェット、あるいは誰でも、自分たちがイエスと言っていることにイエスと言わせるために私を利用したいのです。その理由の一部は、私にノーと言いたくないからです。
そして私は、ご存知の通り、率直に言って、自分の友情をその目的に使いたくないのです。
そして、自分が強く信じていることであっても、私はそれをしません...
私は、彼らがバークシャーへのすべてのサプライヤーやあらゆるものに送り込み、彼らに寄りかかって「私たちはウォーレンを称えています」と言い始めるような名誉晩餐会に参加したことがありません。
まあ、彼らが私に敬意を表したいなら、私の友人全員にお金を要求しなくても私を尊敬できるでしょう。つまり、もし彼らが私を選んだ理由が、私に金持ちの友達がいたからだとしたら、私はそれほど名誉なことだとは思わない。
だから、私はそんなことはしません。
バークシャー株式時計
4週間
12ヶ月
BRK.A株価: $766600.01
BRK.Bの株価：511.54ドル
BRK.B PER (TTM): 15.23
バークシャーの時価総額: 1,102,963,354,142ドル
3月31日時点のバークシャーキャッシュ：3,974億ドル（12月31日比6.5％増）
鉄道現金と未払国庫短期証券を除く：3,802億ドル（12月31日比3.0％増）
バークシャーは2026年第1四半期に2億3400万ドルの自社株を買い戻した。
（特に断りのない限り、すべての数値は発行日現在のものです）
バークシャーのトップ株式保有 - 2026 年 7 月 31 日
最新の終値に基づいた、米国および日本の公開株式の時価ベースでのバークシャーの保有高上位。
保有資産は、2026年5月15日のバークシャー・ハサウェイの13階提出書類で報告されているように、2026年3月31日現在である。ただし、以下を除く。
- アルファベットには、2026年6月1日に発表されたように、バークシャーが同社から直接購入することに同意した100億ドルの株式が含まれる。バークシャーは、取引が完了したかどうかをまだ正式に明らかにしていない。エントリーはクラス A とクラス C のアルファベット株式の組み合わせです。市場価格は、2 つのクラスの価格の加重平均です。
- 三菱、2026 年 4 月 30 日現在
保有銘柄と現在の市場価値の完全なリストは、CNBC.com のバークシャー・ハサウェイ ポートフォリオ トラッカーから入手できます。
質問またはコメント
ニュースレターに関するご質問やご意見は、alex.crippen@nbcuni.com までお送りください。 （申し訳ありませんが、バフェット氏自身に質問やコメントを転送することはありません。）
このニュースレターをまだ購読していない場合は、ここから登録できます。
また、バフェット氏が株主に宛てた年次書簡も強くお勧めします。これらはバークシャーのウェブサイトに集められています。
-- アレックス・クリッペン、ウォーレン・バフェット・ウォッチ編集者`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/01/-berkshire-hathaway-shares-hit-eight-month-high.html",
    publishedAt: "2026-08-01T14:41:54+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 9,
  },
  {
    id: "looking-at-just-the-odds-isn-t-enough-ho-20932102",
    title: "Looking at just the odds isn’t enough. How traders gain an edge on prediction markets",
    titleJa: "オッズだけを見るだけでは十分ではありません。トレーダーが予測市場で優位性を得る方法",
    summaryJa: "26歳のローガン・スデイスが予測市場のフルタイムトレーダーになってから1年も経たないうちに、1か月だけで25万ドルを集めることに成功した。それは単にプラットフォーム上でイベント契約のオッズをチェックするだけでは起こりません、と彼は言いました。賢い取引にはツールが必要です。",
    bodyOriginal: `It's been less than a year since 26-year-old Logan Sudeith became a full-time trader on prediction markets and in one month alone he managed to collect $250,000.
That doesn't happen from simply checking the odds of an event contract on the platform, he said. A clever trade requires tools.
"For the Super Bowl I bought an antenna, so that I could watch the commercials," he said, noting online streaming services could face lags. Sudeith was able to quickly trade on what companies would show ads during the largest televised U.S. sporting event, or what would be said during those commercials. "I wanted to have the lowest latency access to those."
Between Polymarket and Kalshi alone, there can be more than 100,000 active markets. That's too much for traders like Sudeith to juggle on their own. And that's why they don't.
CNBC spoke to several active traders on prediction market exchanges about how they gain an edge. From using AI bots to purchasing an antenna, traders rely on tools and peculiar methods to compete against others, and it's enough motivation for some to trade on the platforms full-time.
And while hedge funds and large institutional trading desks are known for using complicated tools that help them win in the market, these traders are often just one person doing the work from their homes.
Not every trader has the capacity to make custom workflows. That's why some platforms are offering more advanced technology to speculators, so that they don't have to build it all on their own.
But whether those new, accessible products can deliver the same results to what individuals have made for themselves is unclear.
The news, AI, repeat
One common theme among traders is reading the news. Kenneth Deneau, 32, calls it a "minimum requirement" to know what's happening in the world but admits that it can get overwhelming.
He turned to AI to scan relevant information, including the newsletters he's subscribed to and Discord servers, to find insight for potential trades.
"I think that has been probably one of the most transformative aspects of allowing me to do this now, being able to build out those tools," he said about Anthropic-owned language model Claude.
The surge in trading volume on Kalshi and Polymarket last fall drove Deneau to become a full-time prediction market trader. He left behind nearly a decade of work in institutional investing but carried over one key skill to his next gig: deep research under a time crunch.
Earlier this year, when an event contract asked the date for when President Donald Trump would fire former Attorney General Pam Bondi, Deneau relied on Pacer, a database providing court records, to figure it out before it became viral.
"If you found those filings, which I did, you could use that as a baseline to help you determine when [Bondi] actually left the office," Deneau said. "As far as I know, I was probably one of the first ones to take advantage of that."
A coder's paradise
Prediction market platforms have an Application Programming Interface, or API, that makes their live and closed markets accessible. It's a playground full of analysis for Atlanta-based data engineer Steve Farmer.
From his wife's "big closet", Farmer spent countless hours building an AI bot that would trade on Kalshi all day.
"As a trader, I wouldn't do very well myself because you know, impulses and greed and all that will just drive me nuts," he said. "A bot doesn't have all that."
His bot has about a 70% win rate in trading on economic-related event contracts on Kalshi, though he admitted it's likely not a long-term investment strategy, noting it's not replacing his retirement fund.
What it is, however, is "enough to pay for my AI bills," he said.
Protecting the edge
Michael Boss placed his first trades on Kalshi during the 2024 presidential election, and decided he wanted to start speculating more often on the platform in summer 2025. But he didn't start trading full-time until February this year, waiting until he had the necessary software.
The software Boss uses is placing many trades all the time across various markets. He wouldn't reveal exactly what he uses to train his software, showcasing just how much he wants to protect any edge he has over other traders.
"On something like Kalshi, a lot of different things need to go well," he said. "There's a ton of markets on Kalshi, so it's kind of a big problem to tackle in that way."
Expanding access
Prediction market exchanges know their most active traders have elaborate software and tools. Some platforms are looking to make trading easier for highly-engaged speculators.
Kalshi, for example, recently launched a "Pro" trading terminal, which it says makes it easier to place trades faster and view data about individual markets.
Deekaraul "Deek" Harinath, a Kalshi speculator who has placed more than 5,700 trades on the platform, was part of a select group that tested the terminal before its official launch this month. He told CNBC he often trades on the 15-minute cryptocurrency contracts, which ask if Bitcoin prices will go up or down in a quarter hour.
"Everything is faster on the Pro, and that's a big deal for me," he said. Harinath said having the ability to only click once to submit a trade, a feature of Kalshi Pro, is also an upgrade.
Still, while Harinath plans to use Kalshi Pro to place manual trades, he also intends to develop a bot for automation purposes and place trades on various short-term contracts that he's too busy to participate in manually.
Beyond the two major exchanges, startups are also trying to convince traders their tools will give them that missing edge.
Jay Malavia is a co-founder and CEO at Kairos, an Andreessen Horowitz-backed prediction market trading terminal that allows speculators to trade across various exchanges, including Kalshi and Polymarket.
Malavia said the goal at Kairos is to offer strong technology to those who can't or don't know how to build it themselves.
"There's these big trading firms that are going to build the best tech in the world, and we are going to give you the closest technology to go and compete and win in these markets," he said.
Kairos allows traders to see different contracts and price moves across exchanges, as well as deliver real-time data and headlines across various events.
And while Kairos is geared to "democratizing" technology for prediction market traders who don't have their own, Malavia also said it can be a solution for highly active traders too. That's because Kairos takes on the job of maintaining the software rather than an individual having to do it.
So long as people are manually placing trades, Boss thinks a speculator will be behind those who have tools to do the work for them.
"Anything discretionary can be systematized," Boss said. "No person is going to be as competitive as good software."
Disclosure: CNBC and Kalshi have a commercial relationship that includes customer acquisition and a minority investment.`,
    bodyJa: `26歳のローガン・スデイスが予測市場のフルタイムトレーダーになってから1年も経たないうちに、1か月だけで25万ドルを集めることに成功した。
それは単にプラットフォーム上でイベント契約のオッズをチェックするだけでは起こりません、と彼は言いました。賢い取引にはツールが必要です。
同氏は、「スーパーボウルのために、コマーシャルを視聴できるようにアンテナを購入した」と述べ、オンラインストリーミングサービスには遅延が生じる可能性があると指摘した。スデイス氏は、テレビで放映される米国最大のスポーツイベント中に企業がどのような広告を表示するか、あるいはそれらのコマーシャル中に何を言うかをすぐに取引することができた。 「それらへのアクセスの遅延を最小限に抑えたかったのです。」
ポリマーケットとカルシの間にだけでも、100,000 以上の活発な市場が存在する可能性があります。スデイスのようなトレーダーにとって、これは独力でやりくりするには多すぎる額だ。だからこそ彼らはそうしないのです。
CNBCは予測市場取引所でアクティブなトレーダー数名に、どのようにして優位性を得るのかについて話を聞いた。 AI ボットの使用からアンテナの購入に至るまで、トレーダーはツールや独特の方法に依存して他のトレーダーと競争しており、一部のトレーダーにとっては、フルタイムでプラットフォームで取引するのに十分な動機となっています。
また、ヘッジファンドや大手機関投資家のトレーディングデスクは、市場で勝つために複雑なツールを使用していることで知られていますが、これらのトレーダーは多くの場合、自宅で仕事をしているのはたった 1 人です。
すべてのトレーダーがカスタム ワークフローを作成できるわけではありません。そのため、一部のプラットフォームは、投機家がすべてを独自に構築する必要がないように、より高度なテクノロジーを提供しています。
しかし、これらの新しく入手しやすい製品が、個人が自分のために作ったものと同じ結果をもたらすことができるかどうかは不明です。
ニュース、AI、リピート
トレーダーに共通するテーマの 1 つは、ニュースを読むことです。ケネス・デノーさん（32）は、世界で何が起こっているのかを知ることを「最低限の要件」と呼ぶが、それが圧倒されてしまう可能性があることを認めている。
彼は AI を利用して、購読しているニュースレターや Discord サーバーなどの関連情報をスキャンし、潜在的な取引に関する洞察を見つけました。
「これらのツールを構築できるようになったのは、おそらく最も変革的な側面の 1 つだったと思います」と彼は Anthropic が所有する言語モデルのクロードについて語った。
昨年の秋にカルシとポリマーケットの取引量が急増したことをきっかけに、ドノー氏はフルタイムの予測市場トレーダーになった。彼は機関投資家として 10 年近くの仕事を残しましたが、次の仕事に 1 つの重要なスキルを引き継ぎました。それは、時間的制約の下での深い調査です。
今年初め、イベント契約でドナルド・トランプ大統領が元司法長官パム・ボンディ氏を解任する日付を尋ねられた際、ドノー氏は法廷記録を提供するデータベースであるペイサーを頼りに、それが広まる前にそれを把握した。
「もしあなたがそれらの提出書類を見つけたら、私もそうしましたが、それをベースラインとして使用して、[ボンディ]が実際にいつオフィスを去ったかを判断するのに役立ちます」とドノー氏は述べた。 「私の知る限り、私はおそらくそれを利用した最初の一人です。」
プログラマーの楽園
予測市場プラットフォームには、ライブ市場とクローズド市場へのアクセスを可能にするアプリケーション プログラミング インターフェイス (API) が備わっています。アトランタを拠点とするデータ エンジニア、スティーブ ファーマーにとって、これは分析に満ちた遊び場です。
ファーマー氏は、妻の「大きなクローゼット」から、一日中カルシで取引する AI ボットの構築に数えきれないほどの時間を費やしました。
「私自身、トレーダーとしてはあまりうまくいきません。なぜなら、衝動や貪欲、その他すべてが私を狂わせるからです」と彼は語った。 「ボットにはそのすべてが備わっているわけではありません。」
同氏のボットはカルシでの経済関連イベント契約の取引で約70％の勝率を示しているが、同氏はこれが長期的な投資戦略ではない可能性が高いことを認め、退職金の代わりにはならないと指摘した。
しかし、それは「AIの費用を支払うのに十分だ」と彼は言う。
エッジの保護
マイケル・ボス氏は、2024年の大統領選挙中にカルシで最初の取引を行い、2025年夏にはこのプラットフォームでより頻繁に投機を開始したいと決めた。しかし、彼がフルタイムで取引を開始したのは今年2月で、必要なソフトウェアが手に入るまで待っていた。
Boss が使用しているソフトウェアは、さまざまな市場で常に多くの取引を行っています。彼はソフトウェアのトレーニングに何を使用しているのか正確には明らかにせず、他のトレーダーに対する自分の優位性をいかに守りたいかを示しました。
「カルシのようなものでは、多くの異なることがうまくいく必要がある」と彼は言った。 「カルシにはたくさんの市場があるので、そのように取り組むのはある意味大きな問題です。」
アクセスの拡大
予測市場取引所は、最もアクティブなトレーダーが精巧なソフトウェアとツールを持っていることを知っています。一部のプラットフォームは、熱心な投機家にとって取引を容易にすることを目指しています。
例えば、カルシは最近「プロ」取引端末を発売し、これにより取引をより迅速に行ったり、個々の市場に関するデータを閲覧したりすることが容易になると同社は述べている。
同プラットフォームで5,700件以上の取引を行ったカルシの投機家、ディーカラウル・“ディーク”・ハリナス氏は、今月の正式発売前に端末をテストした選ばれたグループの一員だった。同氏はCNBCに対し、ビットコイン価格が15分以内に上がるか下がるかを尋ねる15分間の仮想通貨契約で取引することが多いと語った。
「Pro ではすべてが速くなり、それは私にとって大きなことです」と彼は言いました。 Harinath 氏は、Kalshi Pro の機能である 1 回クリックするだけで取引を送信できることもアップグレードであると述べました。
それでも、ハリナス氏はカルシ プロを使用して手動取引を行う予定ですが、自動化を目的としたボットを開発し、忙しくて手動で参加できないさまざまな短期契約で取引を行うつもりでもあります。
2つの主要な取引所以外にも、スタートアップ企業は、自社のツールが欠けている優位性をトレーダーに提供してくれると説得しようとしている。
ジェイ・マラヴィアは、投機家がカルシやポリマーケットを含むさまざまな取引所で取引できるようにする、アンドリーセン・ホロヴィッツが支援する予測市場取引ターミナルであるカイロスの共同創設者兼最高経営責任者（CEO）です。
マラヴィア氏は、カイロス社の目標は、強力なテクノロジーを自分で構築できない、または構築方法を知らない人々に提供することであると述べた。
「世界最高のテクノロジーを構築しようとしている大手商社があり、私たちはこれらの市場で競争して勝つために最も近いテクノロジーを提供するつもりです」と同氏は語った。
Kairos を使用すると、トレーダーはさまざまな取引所にわたるさまざまな契約や価格の動きを確認できるだけでなく、さまざまなイベントにわたるリアルタイムのデータやヘッドラインを配信することができます。
そして、カイロスは独自の予測市場トレーダーを対象としたテクノロジーの「民主化」を目指しているが、マラビア氏はまた、これは非常にアクティブなトレーダーにとってもソリューションになり得ると述べた。それは、ソフトウェアのメンテナンスを個人が行うのではなく、カイロスが引き受けるからです。
人々が手動で取引を行っている限り、その作業を行うツールを持った人々の背後には投機家がいるだろうとボス氏は考えている。
「裁量的なものはすべてシステム化できる」とボス氏は言う。 「優れたソフトウェアほど競争力を発揮できる人はいないでしょう。」
開示: CNBC とカルシには、顧客の獲得と少数出資を含む商業関係があります。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/01/traders-go-full-time-on-prediction-markets-using-ai-bots-and-antennas.html",
    publishedAt: "2026-08-01T13:44:04+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 9,
  },
  {
    id: "disappointed-by-your-skimpy-pay-raise-bl-641643c1",
    title: "Disappointed by your skimpy pay raise? Blame your healthcare benefits.",
    titleJa: "あなたのわずかな昇給に失望しましたか？医療給付のせいにする。",
    summaryJa: "企業の医療費がこれほど急速に上昇してから20年が経ちました。",
    bodyOriginal: `It’s been two decades since companies’ health-benefit costs have climbed this fast.`,
    bodyJa: `企業の医療費がこれほど急速に上昇してから20年が経ちました。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/disappointed-by-your-skimpy-pay-raise-blame-your-healthcare-benefits-8025491b?mod=mw_rss_topstories",
    publishedAt: "2026-08-01T13:30:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-76272389",
    readTime: 2,
  },
  {
    id: "here-s-what-s-worth-streaming-in-august-cb4531d2",
    title: "Here’s what’s worth streaming in August 2026 on Netflix, Hulu, HBO Max and more",
    titleJa: "2026 年 8 月に Netflix、Hulu、HBO Max などでストリーミングされる価値のあるものは次のとおりです",
    summaryJa: "頭をオフにして、Apple の「テッド ラッソ」、Amazon の「Reacher」、Netflix の「アウター バンクス」などの新シーズンをお楽しみください",
    bodyOriginal: `Turn off your brain and enjoy new seasons of Apple’s ‘Ted Lasso,’ Amazon’s ‘Reacher,’ Netflix’s ‘Outer Banks’ and much more`,
    bodyJa: `頭をオフにして、Apple の「テッド ラッソ」、Amazon の「Reacher」、Netflix の「アウター バンクス」などの新シーズンをお楽しみください`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/heres-whats-worth-streaming-in-august-2026-on-netflix-hulu-hbo-max-and-more-21b78a08?mod=mw_rss_topstories",
    publishedAt: "2026-08-01T13:01:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-83880291",
    readTime: 2,
  },
  {
    id: "faisal-islam-four-reasons-why-fifa-s-wor-e0f5bbc3",
    title: "Faisal Islam: Four reasons why Fifa's World Cup plan never stacked up",
    titleJa: "ファイサル・イスラム氏：FIFAワールドカップ計画が実現しなかった4つの理由",
    summaryJa: "ファイサル・イスラム氏：FIFAワールドカップ計画が実現しなかった4つの理由- 公開されました",
    bodyOriginal: `Faisal Islam: Four reasons why Fifa's World Cup plan never stacked up
- Published
Documents that set out Fifa's plan to part-privatise the World Cup and seen by the BBC show why the deal may have fallen apart.
The sales pitch was circulated to Fifa members this week, setting out the case for Gianni Infantino's controversial plan featuring pictures of the Spain team lifting the trophy and Argentina's fans.
The 25-page deck of slides painted a picture of American football-level revenue expectations, which pointed to a potential continuation and extension of the controversial 2026 US-influenced World Cup model.
It suggested there was the potential for $1,000+ tickets, dynamic pricing, and pressure to put broadcasting of the world's biggest sports tournament behind a paywall.
The documents make it clear that the plan and Fifa's arguments never really stacked up. Here are four reasons why.
1. The claim that football is 'under-monetised'
In the slides, Fifa's central argument was that football does not raise enough cash in relation to its fan base, that "Fifa has been under-monetised versus other leagues" and so "global football development gets squeezed".
It did this with reference to a comparative chart showing annual revenue as well as revenue per fan for Fifa, the Uefa Champions League, Premier League, US baseball and NFL American football.
On the face of it, Fifa is the poorer cousin at just $1 per global fan, compared to NFL's $52.8. But this measure is rather suspect.
The World Cup is not an annual competition; it happens once every four years. If instead this was done on revenue per World Cup 2026 match, Fifa makes multiples of the Premier League, perhaps more than three times as much.
As important, football is decentralised globally, so more of the revenues go to individual leagues, such as the Premier League or Champions League. Fifa was effectively arguing it wanted to keep more of that overall football pie.
Football's fans are also spread across the globe, in rich and poor countries alike. NFL has a much smaller base concentrated in the US and is pretty much the whole of American Football.
Finally, about half of NFL's revenues are paid out as wages. Fifa does not pay Erling Haaland or Lionel Messi or Vozinha. Profits would have yielded a rather different result than the chart’s focus on revenues.
2. Extraordinary ticket prices
According to the document, the new partly privatised entity, called Fifa Forward Enterprise (FFE), would have become the "organiser and operator of competitions" - i.e. the World Cup - and would be responsible for ticketing, broadcast, licensing and sponsorship.
That would have been a clear transfer of the organising power from a non-profit answerable to all of world football to a privately-backed company, albeit one with majority of Fifa board members.
The slides said that the FFE structure would "expand and optimise media rights monetisation" and "maximise the value of Fifa IP [Intellectual Property], which has been undermonetised, historically". This would have been a transfer of responsibility and accountability from Fifa itself.
As Fifa highlighted the revenue per fan of the NFL in the document, it raised questions about a future of free-to-air World Cup games.
This is protected by legislation in the UK and Europe, but digital rights will alter considerably in the coming years. It could also clearly have underpinned the continuation of the extraordinary ticket prices charged in 2026.
Infantino on the brink? Who might replace him if he goes?
- Published3 hours ago
Fifa executive joins Burnham in questioning Infantino
- Published15 hours ago
Fifa says 'nobody selling football' as plan continues
- Published1 day ago
3. No stated fee for the 'annual licence payment'
Why was Fifa trying to sell a $4.2bn stake?
Fifa had already said that it would give FFE a 20% stake in the organisation, which would raise an initial $4.2bn.
The document made it clear that initial cash injection would fund the $20m "extraordinary distribution" to each of the 211 member associations.
That explained the $4.2bn funding requirement. Essentially the funding would have been used to provide a $20m one-off payment for infrastructure to every voting association that would have made the decision on Infantino's plan.
It would have meant, for example, giving Montserrat a sum worth just under half its entire economy or $10,000 per person, and the same for, say, Bangladesh, a massive highly-populated growth market for global football development.
Where would the extra money for investment in Fifa's future been, given the new investment would have been immediately distributed to voting members? How much would actually have been paid back to Fifa as an "annual license payment" referred to in a flow diagram in the charts, but not quantified? Would that have been fixed or proportionate to revenues?
Did FFE have a mission to maximise revenues at all costs to provide returns for the investors?
None of these crucial questions were answered by the document.
4. The Kushner connection
The private timetable shared in the document said that investors would be given access to the materials starting this month. Terms would have been confirmed by September, and bids and transfer of funds by the end of October. This showed how advanced the plans were, and the speed with which members were being asked to decide.
The lead investors were publicly been named as Thrive Eternal, run by Joshua Kushner, the brother of President Trump's son-in law, Jared.
Thrive was almost entirely concerned with AI investments, with OpenAI taking a stake in one of its arms.
Thrive only began its sports investment arm in April, with an investment in the San Francisco Giants baseball team, which was the pioneer in sport-based dynamic pricing of tickets.
Kushner said that the fund would focus on certain live sports as "these are assets with qualities that cannot be replicated by technology".
This is an investment thesis that the value of certain forms of entertainment which can not be replaced by AI (unlike music or some films) will increase in the coming years.
So in the end, we were left with an opaque structure designed to continue the 2026 experiment with high ticket prices, commercialisation which would put pressure on broadcast costs, and inevitably lead to more matches, and more frequent tournaments. A proposal that fell apart in a matter of days.
- Published3 hours ago
- Published12 June`,
    bodyJa: `ファイサル・イスラム氏：FIFAワールドカップ計画が実現しなかった4つの理由
- 公開されました
BBCが入手したワールドカップの一部民営化というFIFAの計画を記した文書は、合意が破綻した理由を示している。
このセールストークは今週、FIFA会員に回覧され、トロフィーを掲げるスペインチームとアルゼンチンのファンの写真を特集したジャンニ・インファンティーノの物議を醸す計画の正当性を明らかにした。
25ページのスライドはアメリカンフットボールレベルの収益予想を描いており、物議を醸している2026年米国影響ワールドカップモデルの継続と延長の可能性を指摘していた。
それは、1,000ドル以上のチケット、ダイナミックプライシング、そして世界最大のスポーツトーナメントの放送を有料の壁の中に置く圧力の可能性があることを示唆しました。
この文書は、この計画とFIFAの主張が実際には決して矛盾していなかったことを明らかにしている。その理由を 4 つ挙げます。
1. サッカーは「収益化が不十分」であるという主張
スライドの中で、FIFAの中心的な主張は、サッカーはファンベースに比べて十分な資金を集めていないこと、「FIFAは他のリーグと比べて収益化が不十分」であり、そのため「世界的なサッカーの発展が圧迫されている」というものだった。
これは、FIFA、UEFAチャンピオンズリーグ、プレミアリーグ、米国野球、NFLアメリカンフットボールの年間収益とファン1人当たりの収益を示す比較表を参照して行われた。
一見すると、NFL の 52.8 ドルに比べ、FIFA は世界のファン 1 人あたりわずか 1 ドルで、最も貧しいと言えます。しかし、この措置はかなり疑わしい。
ワールドカップは毎年開催される大会ではありません。それは4年に1度起こります。代わりに、これが 2026 年ワールドカップの試合ごとの収益に基づいて行われた場合、FIFA はプレミア リーグの何倍か、おそらく 3 倍以上の収益を上げます。
重要なこととして、サッカーは世界的に分散化されているため、収益の多くはプレミア リーグやチャンピオンズ リーグなどの個々のリーグに送られます。 FIFAは事実上、サッカー全体のパイをもっと維持したいと主張していた。
サッカーのファンは、裕福な国も貧しい国も同様に世界中に広がっています。 NFL の拠点は米国に集中しており、アメリカン フットボールのほぼ全体です。
最後に、NFL の収益の約半分は賃金として支払われます。 FIFAはアーリング・ハーランドにもリオネル・メッシにもボジーニャにも給料を支払っていない。利益は、グラフの収益に焦点を当てたものとはかなり異なる結果をもたらしたでしょう。
2. 破格のチケット価格
この文書によると、FIFAフォワードエンタープライズ（FFE）と呼ばれる部分的に民営化された新しい組織は、ワールドカップなどの「大会の主催者および運営者」となり、チケット販売、放送、ライセンス供与、スポンサーシップを担当することになるという。
それは、世界のサッカー界全体に責任を負う非営利団体から、たとえFIFA理事会メンバーの過半数を擁する民間企業に組織権力を移管することになるはずだった。
スライドでは、FFEの構造は「メディア権利の収益化を拡大および最適化」し、「歴史的に収益化が不十分であったFIFA IP（知的財産）の価値を最大化する」と述べている。これはFIFA自体からの責任と責任の移譲だったろう。
FIFAが文書の中でNFLのファン1人当たりの収益を強調したことで、ワールドカップの試合の無料放送の将来について疑問が生じた。
これは英国とヨーロッパの法律によって保護されていますが、デジタル著作権は今後数年間で大幅に変化するでしょう。また、それは明らかに、2026年に課せられる異常なチケット価格の継続を裏付けていた可能性がある。
インファンティーノは瀬戸際？彼が去った場合、誰が彼の代わりをするでしょうか？
- 3 時間前に公開
FIFA幹部もバーナムとともにインファンティーノ氏への尋問に参加
- 15 時間前に公開
FIFA、計画継続中「誰もサッカーを売らない」と発言
- 1 日前に公開
3. 「年間ライセンス支払い」の料金は明記されていません
なぜFIFAは42億ドルの株式を売ろうとしたのでしょうか？
FIFAはすでにFFEに組織の20％の株式を付与し、当初42億ドルを調達すると発表していた。
この文書は、最初の現金注入が211の各加盟協会への2,000万ドルの「特別分配」の資金となることを明らかにした。
これで 42 億ドルの資金要件が説明されました。本来、この資金は、インファンティーノの計画を決定するすべての投票団体にインフラ整備のための2,000万ドルの一時金を提供するために使用されるはずだった。
それは、例えば、モントセラトに全経済の半分弱、または一人当たり1万ドルに相当する金額を与えることを意味し、また、例えば、世界的なサッカーの発展のための巨大な人口密度の高い成長市場であるバングラデシュにも同じことを意味するだろう。
新たな投資が投票権を持つメンバーに即座に分配されることを考えると、FIFAの将来への追加投資資金はどこにあったのだろうか？図のフロー図で言及されているが、定量化されていない「年間ライセンス支払い」として、実際にはいくらが FIFA に返還されることになるでしょうか?それは固定だったのでしょうか、それとも収益に比例したのでしょうか?
FFE には、投資家に利益を提供するために、どんな犠牲を払ってでも収益を最大化するという使命がありましたか?
この文書では、これらの重要な質問のいずれにも回答がありませんでした。
4. クシュナーとの関係
文書で共有された非公開スケジュールには、投資家が今月から資料にアクセスできるようになることが記載されていた。条件は9月までに確認され、入札と資金の送金は10月末までに完了する予定だった。これは、計画がどれほど進んでいたか、そしてメンバーが決定を求められているスピードを示していました。
主要投資家らは、トランプ大統領の義理の息子ジャレッド氏の弟、ジョシュア・クシュナー氏が経営するスライブ・エターナル社として公表された。
Thrive はほぼ完全に AI 投資に関与しており、OpenAI はその部門の 1 つに出資していました。
スライヴはスポーツ投資部門を4月に開始したばかりで、スポーツに基づいたチケットのダイナミックプライシングの先駆者である野球チームのサンフランシスコ・ジャイアンツに投資した。
クシュナー氏は、「これらはテクノロジーでは再現できない性質を持つ資産」であるため、この基金は特定のライブスポーツに焦点を当てると述べた。
これは、（音楽や一部の映画とは異なり）AI に代替できない特定の形式のエンターテイメントの価値が今後数年間で増加するだろうという投資理論です。
そのため最終的には、高額なチケット価格、放送コストを圧迫する商業化、そして必然的に試合数とトーナメントの頻度が増加するという、2026年の実験を継続するように設計された不透明な構造が残されました。数日で決裂した提案。
- 3 時間前に公開
- 6 月 12 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/clyvd8363wlo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-01T12:41:17+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/5f87/live/51e22a90-8d2c-11f1-a7ab-8b30adf0800a.jpg",
    readTime: 8,
  },
  {
    id: "as-americans-go-direct-with-glp-1-prescr-dc431ac7",
    title: "As Americans go direct with GLP-1 prescriptions, Walmart, Costco, Amazon will be big weight-loss winners",
    titleJa: "アメリカ人がGLP-1の処方を直接行うようになると、ウォルマート、コストコ、アマゾンが減量の大きな勝者となるだろう",
    summaryJa: "ウエストラインを減らすためにGLP-1減量薬を使用するアメリカ人が増える中、小売大手は薬の価格設定や購入方法の変化に伴う収益の向上に賭けている。雇用主は、WegovyやZepboundのようなGLP-1薬の保険適用を大幅に廃止し、より多くの患者を消費者直販処方プログラムに誘導し、ウォルマート、コストコ、CVS、アマゾンに市場シェアを拡大​​する機会を提供している。小売薬局チェーンにとって、GLP-1 処方箋は単なる販売以上のものへと進化しており、何年にもわたって継続できる顧客関係を構築するための橋頭堡となり、買い物客を棚にある他のあらゆるものに引き寄せています。顧客がウォルマートから GLP-1 を入手する場合は、他のすべての処方箋を入手し、消臭剤、ペーパータオル、調味料を積み込んだほうがよいでしょう。",
    bodyOriginal: `As more Americans use GLP-1 weight-loss drugs to shrink their waistlines, retail giants are betting on a bottom-line bump tied to a shift in the way the drugs are priced and purchased. Employers are dropping coverage for GLP-1 drugs like Wegovy and Zepbound in greater numbers, nudging more patients to direct-to-consumer prescription programs, and providing Walmart, Costco, CVS and Amazon the opportunity to gain a greater share of the market.
For the retail pharmacy chains, a GLP-1 prescription is evolving into more than a simple sale — it's creating a beachhead to developing customer relationships that can run for years and pull shoppers toward everything else on the shelf. If a customer is going to get their GLP-1s from Walmart, they might as well get all their other prescriptions and load up on deodorant, paper towels, and condiments.
"Retailers are betting that if they can become the front door for obesity care, they'll earn a relationship that extends far beyond a single GLP-1 prescription," said Eric Bormel, managing director specializing in digital healthcare at Solomon Partners' healthcare group.
The DTC GLP-1 programs are customer acquisition tools, Bormel said, and retailers are increasingly valuing the entire ecosystem around the medication more than the medication itself, which is experiencing downward price pressure.
"Everyone recognizes that obesity treatment is becoming a longitudinal consumer relationship," Bormel said, noting that retailers aren't simply fighting over the same customers, but bringing in new ones through the GLP-1 business. It's one of the business tailwinds that is in stark contrast to initial concerns that GLP-1s were a headwind for retailers as consumers cut back on impulse buys and overall grocery spending.
New clothing needs is one way that retailers stand to benefit from GLP-1 usage. But the need for prescription refills fits into an even broader strategy for large retail pharmacy networks that have been betting the weight-loss drug boom, even at low margins, will pay off for their businesses.
"In a retail industry that spends billions chasing foot traffic, that is the most reliable recurring customer relationship on the market," said Jackie Swanson, managing partner at Gartner Consulting.
The prescription refill is a retail one-of-a-kind
Walmart becoming the retail pickup point for LillyDirect matters because the patient who collects a prescription walks through the store to reach it. "Pharmacy lock-in is loyalty-program economics applied to medicine, and it works because the refill, unlike almost everything else in retail, is non-negotiable," Swanson said.
She notes LillyDirect's cash prices, which run $299 to $449 a month, with the better pricing tied to refilling within 45 days. "Which is a loyalty program dressed as a discount schedule," Swanson said.
Novo Nordisk's NovoCare has a $199 price for introductory months, which later steps up to $349, a "classic acquisition funnel," Swanson said.
Meanwhile, Costco's Sesame partnership prices Wegovy at around $349 and requires a membership. "So the prescription now helps sell the $65 card," Swanson said.
Swanson says that, for customers, the discount is real, and for chains, what is a deal for customers is a deal for them, too: a minimal acquisition cost for a long-term relationship.
"When a discount is tied to a network, the patient's choice of pharmacy happens at sign-up, not at the counter, and that's a meaningful change for any pharmacy that has historically won business through service and proximity. The economics of these programs favor scale," Swanson said. "The retailer that fills the prescription tends to sell the groceries too, and pharmacy is quietly becoming the membership battleground of American retail," Swanson added.
Walmart, the nation's fifth-largest prescription provider with nearly 4,600 pharmacies, has moved aggressively to capture this shift. In April, the retailer expanded its Better Care Services digital platform to bundle GLP-1 prescriptions with weight-management support like nutrition coaching, fitness apps, and AI-driven coaching tools, while positioning itself as a one-stop destination rather than just a pickup counter. According to the most recent published data from Drug Channels Institute, a pharmacy industry research firm, Walmart currently holds 4.8% of the pharmacy market, well behind CVS's 14.7% and Walgreens' 14.6%. The DTC GLP-1 gives Walmart a new tool to try to catch up.
Amazon, which has spent years attempting to increase its healthcare footprint, is targeting the opportunity as well. In April, the company launched a GLP-1 management program through Amazon One Medical, the primary care business it acquired in 2022, and Amazon Pharmacy, offering insured patients prices as low as $25 a month and providing same-day delivery in nearly 3,000 cities, expanding to 4,500 by year's end.
Capital from retailers is flowing into weight-management platforms, virtual obesity care, nutrition coaching, metabolic health solutions, and employer care management programs.
Big retail has struggled to make healthcare profitable
The focus on GLP-1s from the major retailers is not new. As far back as 2023, then-Walmart CEO Doug McMillon said the company expected weight loss drugs to help drive sales. But that didn't necessarily translate into profitability. "Sales dollars are a lot bigger than the margin dollars," said Kroger CEO Rodney McMullen at that time. "The impact on profitability is pretty narrow," he said.
The big retailers have also struggled in the past to capture a broader slice of the healthcare pie. Walmart shuttered its Walmart Health clinics and virtual care service entirely in 2024, closing all 51 locations across six states after concluding the primary-care business wasn't sustainable amid reimbursement pressures and rising costs — five years after it first opened the clinics.
Amazon's history of healthcare efforts includes shutting down its Amazon Care telehealth service at the end of 2022, just weeks after unveiling its $3.9 billion deal for One Medical. Years earlier, it walked away from Haven, its joint health care venture with JPMorgan Chase and Berkshire Hathaway, which dissolved in 2021 without producing the cost savings the three companies had promised.
CVS has had to shutter many of its instore Minute Clinics and the company has had its share of other struggles over the years with trying to make healthcare as profitable as paper towels or back-to-school supplies.
Swanson said the timing of these DTC efforts dovetails with employers leaving the space. A survey by Mercer last month showed 6% of large employers dropped GLP-1 coverage this year, with the drugs' share of claims swelling to 11.4% from the 6.9% figure it was at in 2023. More employers have balked at paying for them because so many people could be eligible for the treatments and many patients stop them after achieving a weight-loss goal. Health insurance company Cigna said earlier this month it would stop covering the medicines for its own employees.
More employers are pointing workers to the direct-to-consumer platforms.
"Every patient who loses coverage is choosing a new front door for care this year, and retailers are competing to be that door at the exact moment of the decision. Real affordability gets delivered; a customer relationship gets acquired; both statements are true simultaneously," Swanson said.
As employers balk at cost, local pharmacies lose
Seth Friedman, pharmacy & health plan services practice leader at Gallagher, says on the other side of the opportunity for the retail chains are the independent pharmacies and non-chain players, who stand to be the big losers in this shift. "Smaller pharmacies stand to lose volume for sure," Friedman said.
Dared Price, who owns nine pharmacies located in small Kansas towns like Winfield, population 11,000, said he is already feeling the impact as customers race to the big chains for their GLP-1s. "It is frustrating to me to not be able to provide the same access to our patients that they do to CVS or Costco," Price said. "It puts independent pharmacies at a big disadvantage."
Price said the shift creates a potentially dangerous situation for some patients. "If one of my customers wants to do a DTC program and has to go to CVS or Costco, those pharmacies don't have access to the rest of their portfolio," Price said. Price, for his part, has no way of knowing whether a customer is taking GLP-1 drugs if they are getting them from big pharmacies. "My system won't flag any drug interactions with GLP drugs and there are drug interactions that can be dangerous," he said, adding it's a serious issue given that there are known interactions with other drugs like insulin or oral contraceptives that could be problematic.
CVS, however, says its pharmacists are ready to treat the whole patient. "Access is only part of the equation with GLP-1 medications. Patients also need support to stay on therapy and see results," said Sid Tenneti, senior vice president and interim president, pharmacy and consumer wellness, in a statement shared by a CVS spokesperson.
"Participation in NovoCare is one way we are assisting patients, but we are also participating in Medicare Bridge and accept most third-party prescription discount cards," the CVS spokesperson added.
That program, a new Centers for Medicare & Medicaid Services initiative launched July 1, offering eligible Medicare patients GLP-1s for weight loss at a flat $50 monthly copay, runs through a single central processor rather than through a patient's regular pharmacy of record, the kind of structural gap that worries some obesity-care specialists.
Some experts fear the focus on the lowest possible price for GLPs obscures the larger healthcare needs of patients even if pharmacies promise to watch the whole patient.
"My view on this is that the drugs are not the solution by themselves; they are a powerful tool. But the medication alone doesn't work that well. People do much better when cared for by expert clinicians," said Elina Onitskansky, founder & CEO of Ilant Health, an obesity-care center.
Onitskansky said she understands why chains are interested in the GLPs, but the race for the lowest price has created a "gold rush" mentality, and she worries that patients who participate in the DTC programs are leaving valuable information about their health behind, leaving pharmacists at a disadvantage. "I don't think fragmentation helps," she said.
Price says the pharmaceutical giants want to sign one contract and get 2,000 stores, but there are associations of smaller pharmacies with many members that could enter into similar DTC programs, but so far there's been no movement. "There are no good programs for independents. It is a travesty that there [aren't]," Price said.
—CNBC's Angelica Peebles contributed to this report.`,
    bodyJa: `ウエストラインを減らすためにGLP-1減量薬を使用するアメリカ人が増える中、小売大手は薬の価格設定や購入方法の変化に伴う収益の向上に賭けている。雇用主は、WegovyやZepboundのようなGLP-1薬の保険適用を大幅に廃止し、より多くの患者を消費者直販処方プログラムに誘導し、ウォルマート、コストコ、CVS、アマゾンに市場シェアを拡大​​する機会を提供している。
小売薬局チェーンにとって、GLP-1 処方箋は単なる販売以上のものへと進化しており、何年にもわたって継続できる顧客関係を構築するための橋頭堡となり、買い物客を棚にある他のあらゆるものに引き寄せています。顧客がウォルマートから GLP-1 を入手する場合は、他のすべての処方箋を入手し、消臭剤、ペーパータオル、調味料を積み込んだほうがよいでしょう。
ソロモン・パートナーズのヘルスケア・グループでデジタル・ヘルスケアを専門とするマネージング・ディレクターのエリック・ボーメル氏は、「小売業者は、自分たちが肥満ケアの玄関口になれれば、単一のGLP-1処方箋をはるかに超えた関係を獲得できると賭けている」と語る。
ボーメル氏によると、DTC GLP-1 プログラムは顧客獲得ツールであり、小売業者は価格下落圧力にさらされている医薬品そのものよりも、医薬品を取り巻くエコシステム全体をますます重視するようになっているという。
「肥満治療が長期的な消費者関係になりつつあることは誰もが認識している」とボーメル氏は述べ、小売業者は単に同じ顧客を奪い合っているだけではなく、GLP-1事業を通じて新しい顧客を取り込んでいると指摘した。これは、消費者が衝動買いや食料品支出全体を控える中、GLP-1が小売業者にとって逆風となるという当初の懸念とは全く対照的な、ビジネスへの追い風の1つだ。
小売業者が GLP-1 の使用から恩恵を受ける方法の 1 つは、衣料品の新たなニーズです。しかし、処方箋の補充の必要性は、たとえ利益が低くても減量薬ブームがビジネスに利益をもたらすことに賭けている大手小売薬局ネットワークにとって、さらに広範な戦略に適合する。
ガートナー・コンサルティングのマネージング・パートナー、ジャッキー・スワンソン氏は、「客足の追跡に数十億ドルを費やしている小売業界において、それは市場で最も信頼できる継続的な顧客関係である」と述べた。
処方箋リフィルは小売店独自のものです
処方箋を受け取る患者は店内を歩いてたどり着くため、ウォルマートがリリーダイレクトの小売店受け取り場所になることは重要だ。 「薬局のロックインはロイヤルティプログラムの経済学を医薬品に適用したもので、小売業界の他のほとんどすべてのものとは異なり、詰め替え品は交渉の余地がないため機能する」とスワンソン氏は語った。
彼女は、LillyDirect の現金価格は月額 299 ドルから 449 ドルで、45 日以内に補充することでより有利な価格設定になっていると指摘しています。 「これは割引スケジュールのふりをしたロイヤルティプログラムだ」とスワンソン氏は語った。
ノボ ノルディスクのノボケアの価格は導入月は 199 ドルで、その後は 349 ドルに上がるが、これは「典型的な獲得目標到達プロセス」だとスワンソン氏は語った。
一方、コストコのセサミ提携ではウィゴビーの価格は約349ドルで、会員登録が必要となる。 「つまり、この処方箋が65ドルのカードを売るのに役立っているのです」とスワンソン氏は語った。
スワンソン氏は、顧客にとって割引は本物であり、チェーンにとって顧客にとっての取引は彼らにとっても取引であり、長期的な関係を維持するための最小限の獲得コストであると述べています。
「割引がネットワークに結び付けられている場合、患者の薬局の選択は窓口ではなく登録時に行われます。これは、歴史的にサービスと近接性によってビジネスを獲得してきた薬局にとって、意味のある変化です。これらのプログラムの経済性は規模を重視します」とスワンソン氏は述べた。 「処方箋を調剤する小売店は食料品も販売する傾向があり、薬局は密かにアメリカの小売業界の会員制の戦場になりつつある」とスワンソン氏は付け加えた。
約4,600の薬局を擁する全米5位の処方箋提供会社であるウォルマートは、この変化を捉えるために積極的に動いている。同社は4月にBetter Care Servicesデジタルプラットフォームを拡張し、GLP-1処方箋に栄養コーチング、フィットネスアプリ、AI主導のコーチングツールなどの体重管理サポートをバンドルするとともに、単なる受け取りカウンターではなくワンストップの目的地としての地位を確立した。薬局業界の調査会社であるドラッグ・チャネル・インスティテュートが発表した最新のデータによると、ウォルマートは現在薬局市場の4.8％を占めており、CVSの14.7％やウォルグリーンズの14.6％を大きく下回っている。 DTC GLP-1 は、ウォルマートに追いつくための新しいツールを提供します。
アマゾンは何年にもわたってヘルスケア事業の拡大に努めてきたが、この機会も狙っている。同社は4月に、2022年に買収したプライマリケア事業であるアマゾン・ワン・メディカルとアマゾン・ファーマシーを通じてGLP-1管理プログラムを開始し、保険患者に月額25ドルという低価格を提供し、ほぼ3,000の都市で即日配達を提供し、年末までに4,500都市に拡大した。
小売業者からの資本は、体重管理プラットフォーム、バーチャル肥満ケア、栄養指導、代謝健康ソリューション、雇用主ケア管理プログラムに流れ込んでいます。
大手小売業はヘルスケアの収益化に苦戦している
大手小売業者が GLP-1 に注目するのは新しいことではありません。ウォルマートの当時の最高経営責任者（CEO）ダグ・マクミロン氏は2023年まで遡り、同社は減量薬が売上増加につながると期待していると述べた。しかし、それが必ずしも収益につながるとは限りませんでした。クローガーのロドニー・マクマレン最高経営責任者（CEO）は当時、「売上高はマージンよりもはるかに大きい」と語った。同氏は「収益性への影響はかなり狭い」と述べた。
大手小売業者もこれまで、ヘルスケア市場のより広い部分を獲得しようと苦戦してきた。ウォルマートは、最初にクリニックを開設してから5年後、償還圧力とコスト上昇の中でプライマリ・ケア事業は持続可能ではないと結論付け、2024年にウォルマート・ヘルス・クリニックとバーチャル・ケア・サービスを完全に閉鎖し、6州の51カ所すべてを閉鎖した。
Amazonのヘルスケアへの取り組みの歴史には、One Medicalとの39億ドルの契約を発表したわずか数週間後の2022年末にAmazon Care遠隔医療サービスを終了したことが含まれる。その数年前、同社はJPモルガン・チェースおよびバークシャー・ハサウェイとのヘルスケア合弁事業であるヘブンから撤退したが、同事業は3社が約束していたコスト削減を実現することなく2021年に解散した。
CVSは店内にあるミニッツ・クリニックの多くを閉鎖しなければならず、同社も医療をペーパータオルや新学期用品と同じくらい収益性の高いものにしようと長年にわたって苦闘してきた。
スワンソン氏は、こうした DTC の取り組みのタイミングは、雇用主がこの分野から撤退するタイミングと一致していると述べた。マーサーが先月行った調査によると、大規模雇用主の6％が今年GLP-1の適用を取りやめ、保険請求に占める医薬品の割合は2023年の6.9％から11.4％に膨らんだ。非常に多くの人が治療を受ける資格がある可能性があり、多くの患者が減量目標を達成した後に治療を中止するため、治療費の支払いをためらう雇用主が増えている。健康保険会社シグナは今月初め、自社従業員への医薬品の補償を中止すると発表した。
より多くの雇用主が労働者に消費者直販プラットフォームを勧めるようになっています。
「今年、保険を失ったすべての患者が治療のために新しい玄関口を選択しており、小売業者はまさにその決定の瞬間にその玄関口になれるよう競い合っている。真の手頃な価格が提供され、顧客との関係が獲得される。両方の言葉は同時に真実である」とスワンソン氏は語った。
雇用主がコストに二の足を踏む中、地元の薬局は損失を被る
ギャラガー社の薬局・医療プランサービスプラクティスリーダーであるセス・フリードマン氏は、小売チェーンにとってチャンスの裏側には独立系薬局や非チェーン企業があり、彼らはこの変化において大きな敗者となると指摘する。 「小規模な薬局は確実に販売量を失うことになる」とフリードマン氏は言う。
人口1万1000人のウィンフィールドのようなカンザス州の小さな町に9軒の薬局を経営するデアド・プライス氏は、顧客がGLP-1を求めて大手チェーンに殺到するなか、すでにその影響を感じていると語った。 「CVSやコストコと同じアクセスを患者に提供できないのはもどかしい」とプライス氏は語った。 「これにより、独立系薬局は大きな不利な立場に置かれることになります。」
プライス氏は、この変化により一部の患者にとって潜在的に危険な状況が生じると述べた。 「私の顧客の1人がDTCプログラムを希望し、CVSやコストコに行かなければならない場合、それらの薬局はポートフォリオの残りの部分にアクセスできません」とプライス氏は語った。プライス氏としては、顧客が大手薬局からGLP-1薬を入手している場合、その薬を服用しているかどうかを知る方法はない。 「私のシステムはGLP薬との薬物相互作用にはフラグを立てませんが、危険な可能性のある薬物相互作用は存在します」と同氏は述べ、インスリンや経口避妊薬など他の薬物との相互作用が問題となる可能性があることが知られていることから、これは深刻な問題だと付け加えた。
しかしCVSは、薬剤師が患者全体を治療する準備ができていると述べている。 「GLP-1治療薬へのアクセスは方程式の一部にすぎません。患者は治療を継続し、結果を確認するためのサポートも必要です」と、CVSの広報担当者が共有した声明の中で、上級副社長兼薬局・消費者ウェルネス担当暫定社長のシド・テネティ氏は述べた。
「ノボケアへの参加は私たちが患者を支援する方法の一つですが、私たちはメディケアブリッジにも参加しており、ほとんどのサードパーティの処方箋割引カードを受け入れています」とCVSの広報担当者は付け加えた。
このプログラムは、メディケア・メディケイド・サービスセンターが7月1日に開始した新しい取り組みで、適格なメディケア患者に月額一律50ドルの自己負担で減量のためのGLP-1を提供するもので、患者の通常の薬局記録ではなく、単一の中央処理装置で運営されており、一部の肥満症ケア専門家を懸念させる構造的なギャップのようなものである。
一部の専門家は、たとえ薬局が患者全体を観察すると約束したとしても、GLPの可能な限りの低価格に重点を置くことで、患者のより大きな医療ニーズが見えにくくなるのではないかと懸念している。
「これについての私の見解は、薬はそれ自体では解決策ではなく、強力なツールだということです。しかし、薬だけではそれほど効果はありません。専門の臨床医によるケアを受けると、人々の状態はずっと良くなります」と、肥満治療センター、イラント・ヘルスの創設者兼最高経営責任者（CEO）のエリナ・オニツカンスキー氏は語った。
オニツカンスキー氏は、チェーン店がGLPに興味を持っている理由は理解しているが、最安値競争が「ゴールドラッシュ」の心理を生み出しており、DTCプログラムに参加する患者が自分の健康に関する貴重な情報を置き去りにし、薬剤師が不利な立場に置かれていることを懸念していると語った。 「断片化は役に立たないと思います」と彼女は言う。
プライス氏によると、製薬大手は一つの契約を結び、2,000店舗を獲得したいと考えているが、同様のDTCプログラムに参加できる会員数の多い小規模薬局協会も存在するが、今のところ動きはないという。 「独立系の人たちにとって良いプログラムはない。存在しないのは滑稽だ」とプライス氏は語った。
—CNBCのアンジェリカ・ピーブルズがこのレポートに寄稿しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/01/glp-1-prescriptions-weight-loss-walmart-costco-amazon.html",
    publishedAt: "2026-08-01T12:30:01+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "openai-s-hugging-face-hack-confirmed-mon-bcf79012",
    title: "OpenAI's Hugging Face hack confirmed months of AI cyber warnings: 'Pandora's box is open'",
    titleJa: "OpenAIのHugging Faceハッキングにより、数ヶ月にわたるAIサイバー警告が確認された：「パンドラの箱は開いている」",
    summaryJa: "サイバーセキュリティのリーダーたちは数か月間、人工知能が脅威の状況を再構築し、数週間、数日にわたるサイバー攻撃を数分に圧縮すると警告してきた。先週まで、こうした脅威はまだ遠いリスクのように感じられていました。",
    bodyOriginal: `For months, cybersecurity leaders warned that artificial intelligence would reshape the threat landscape, compressing weeks- and dayslong cyberattacks into a matter of minutes.
Until last week, those threats still felt like a distant risk.
The OpenAI agent hack on Hugging Face illustrates that this era has not only arrived but also created a new challenge: AI agents will go to extremes to accomplish their goals, and do it in unpredictable ways.
"The reality is Pandora's box is open," said Sam Curry, chief information security officer at Zscaler. "We need to act as if AI is just a fact of life going forward. The most those things will do is slow it. They won't stop it."
The rollout of Anthropic's powerful Mythos model nearly four months ago raised concerns that hackers could potentially use these models to exploit vulnerabilities. Major technology companies formed coalitions to start testing this advanced AI in order to prepare.
At the time, Palo Alto Networks' product and technology chief Lee Klarich warned that AI-driven exploits would soon become the new norm and businesses had a three-to-five-month window to outpace their foes.
The Hugging Face incident couldn't come at a more opportune time for the cyber industry.
This upcoming week, thousands of industry experts descend on Las Vegas for Black Hat, one of the premier cybersecurity events of the year. It's also the first major conference for the sector since the widespread release of Mythos-class models and the government's increased focus on AI security.
In the wake of Hugging Face, businesses are not only asking how to defend themselves against adversaries but also confronting the stark reality that AI systems designed to safeguard their networks could also turn up in unexpected places.
"We've gone from science fiction into reality," said Brad Medairy, president of Booz Allen's national cyber business.
The significance of Hugging Face
Last week, OpenAI disclosed that some of its AI models broke out of a sandboxed testing environment. The agents, looking for information to cheat on an internal test, breached open-source developer platform Hugging Face and accessed four other accounts to facilitate the attack.
Hugging Face flagged the incident as the first time it dealt with an attack led by an agentic system from start to finish, signaling how advanced attack capabilities have already become without human intervention.
Days later, Anthropic identified three instances where its Claude models "gained unauthorized access to the real systems of three different organizations."
Experts say these aren't the first AI-agent-led attacks, but they're drawing outsized attention because of the scale and name recognition. In April, Jer Crane, the founder of software startup PocketOS, said a Cursor AI agent that the company was using in its own system wiped out its production database and backups in 9 seconds.
Code deletion represents more extreme cases, but SailPoint tech chief Chandra Gnanasambandam said instances with AI acquiring permissions are actually more common than people realize, and it's happening daily.
"The nature of conversations that I have had with our customers are different from even a month ago," he said. "They are a lot more aware of this problem."
Even more worrisome is that the Hugging Face incident is one of the clearest illustrations yet of the stark reality that AI doesn't operate like the human brain and will research and adapt to outsmart systems and accomplish goals.
Months ago, businesses fretted over adversaries using AI to attack. Customers are now questioning how to introduce AI without self-inflicting damage — and they will be looking for answers at Black Hat.
"It's something that for AI is pretty straightforward," said Sanaz Yashar, CEO of cybersecurity startup Zafran Security. "I have one mission: solve this problem, and I will kill everything in front of me or bypass it."`,
    bodyJa: `サイバーセキュリティのリーダーたちは数か月間、人工知能が脅威の状況を再構築し、数週間、数日にわたるサイバー攻撃を数分に圧縮すると警告してきた。
先週まで、こうした脅威はまだ遠いリスクのように感じられていました。
OpenAI エージェントによる Hugging Face へのハッキングは、この時代が到来しただけでなく、新たな課題も生み出したことを示しています。AI エージェントは目標を達成するために極端な行動をとり、それを予測不可能な方法で実行することになります。
ゼットスケーラーの最高情報セキュリティ責任者サム・カリー氏は、「現実にはパンドラの箱は開いたままだ」と語った。 「私たちは今後、AI が単なる現実であるかのように行動する必要があります。それらはせいぜい AI の速度を遅らせるだけであり、AI を止めることはできません。」
約 4 か月前に Anthropic の強力な Mythos モデルが公開されたことにより、ハッカーがこれらのモデルを使用して脆弱性を悪用する可能性があるという懸念が生じました。大手テクノロジー企業は連合を結成し、この高度な AI のテストを開始して準備を整えました。
当時、パロアルトネットワークスの製品および技術部門責任者のリー・クラリッチ氏は、AIを活用したエクスプロイトは間もなく新たな標準となり、企業が敵を出し抜くには3～5か月の猶予があると警告した。
ハグフェイス事件は、サイバー業界にとってこれ以上に好都合な時期に発生しました。
今週、今年の主要なサイバーセキュリティ イベントの 1 つである Black Hat のために、数千人の業界専門家がラスベガスに集まります。また、これは、Mythos クラスのモデルが広範囲にリリースされ、政府が AI セキュリティに重点を置くようになって以来、この分野にとって初の主要なカンファレンスでもあります。
「顔ハグ」事件を受けて、企業は敵から身を守る方法を問うだけでなく、ネットワークを保護するために設計された AI システムが予期せぬ場所に出現する可能性があるという厳しい現実にも直面しています。
ブーズ・アレンの国営サイバー事業の社長、ブラッド・メデイリー氏は「われわれはSFから現実へ移行した」と語った。
ハグフェイスの重要性
OpenAIは先週、自社のAIモデルの一部がサンドボックス化されたテスト環境から抜け出したことを明らかにした。エージェントたちは、内部テストで不正行為を行うための情報を探していたため、オープンソースの開発者プラットフォーム「Hugging Face」に侵入し、他の 4 つのアカウントにアクセスして攻撃を促進しました。
ハグ・フェイスは、このインシデントが最初から最後までエージェント・システムによって主導された攻撃に対処した初めての事件であると報告し、人間の介入なしに攻撃能力がすでにどれほど高度になっているかを示した。
数日後、Anthropic は、自社のクロード モデルが「3 つの異なる組織の実際のシステムに不正アクセスした」3 つの事例を特定しました。
専門家らは、AIエージェント主導の攻撃はこれが初めてではないが、その規模と知名度から非常に大きな注目を集めていると述べている。ソフトウェア新興企業PocketOSの創設者ジャー・クレーン氏は4月、同社が自社のシステムで使用していたCursor AIエージェントが本番データベースとバックアップを9秒で消去したと述べた。
コードの削除はより極端なケースを表しているが、SailPointの技術責任者チャンドラ・グナナサンバンダム氏は、AIが権限を取得するインスタンスは実際には人々が思っているよりも一般的であり、それは毎日起こっていると述べた。
「私と顧客との会話の性質は、1 か月前とはまったく異なります」と彼は言いました。 「彼らはこの問題をもっとよく認識しています。」
さらに憂慮すべきは、「顔を抱きしめる」事件は、AIが人間の脳のようには機能せず、賢いシステムを研究して適応し、目標を達成するという厳然たる現実を、これまでで最も明確に示した例の1つであるということだ。
数カ月前、企業は敵が AI を使って攻撃することに不安を感じていました。顧客は現在、自らに損害を与えずに AI を導入する方法に疑問を抱いており、Black Hat でその答えを探していることになります。
サイバーセキュリティの新興企業ザフラン・セキュリティの最高経営責任者（CEO）サナズ・ヤシャール氏は、「AIにとってこれは非常に簡単なことだ」と語った。 「私の使命は1つです。この問題を解決することです。目の前のすべてを殺すか、回避します。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/01/open-ai-hugging-face-hack-cyber-warnings.html",
    publishedAt: "2026-08-01T12:00:01+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "to-keep-growing-incoming-best-buy-ceo-sa-f121bd64",
    title: "To keep growing, incoming Best Buy CEO says he first wants to go smaller",
    titleJa: "成長を続けるために、Best Buyの次期CEOはまず規模を縮小したいと語る",
    summaryJa: "次期 CEO のジェイソン・ボンフィグ氏は、自らの手綱を引き継ぐ準備を進めており、会社のリーチを拡大し、顧客エクスペリエンスを向上させることに注力していると CNBC に語った。",
    bodyOriginal: `Best Buy is at a critical juncture as the consumer electronics retailer aims to revitalize its performance under incoming CEO Jason Bonfig, who spoke exclusively with CNBC about his strategy for the company.
The company has been struggling with slumping sales over the past few years, which it has attributed to lower consumer confidence, less tech innovation and a slower housing market. In an effort to refresh its products, improve the customer experience and drive more sales, the retailer announced Bonfig will succeed current CEO Corie Barry this fall.
As he prepares to take the helm, Bonfig has said he's focused on four key pillars: advancing Best Buy as a retail and technology company, improving its reach, enhancing the customer experience and focusing on being a human-powered company. Bonfig has also said he's looking into ways to capitalize on the artificial intelligence boom and Best Buy's spot in that next chapter.
This week, Best Buy opened two new stores, one in Jonesboro, Arkansas, and one in Cape Cod, Massachusetts, which Bonfig told CNBC illustrates his strategy as he prioritizes returning the company to long-term and sustainable growth.
"What we're finding is that there are markets that we just can't be in with a traditional size Best Buy store, but they're markets that absolutely make sense for Best Buy from a reach perspective," Bonfig said.
To lean into those markets, the company is opening new small-format stores, ranging from 12,000 to 15,000 square feet, compared to its medium-format stores, which range from 20,000 to 25,000 square feet. Some of its largest stores, including its flagship location in New York City, exceed 40,000 square feet.
The new small stores tap into Bonfig's priority of expanding the company's reach, he said.
"We also know that when we put a store close to a customer, it doesn't just change the customers' behavior in the frequency of the visits of the store … it also changes their behavior digitally as well," Bonfig said.
When Best Buy joins a new, smaller community, he said, the company has found more customers physically go to a store for the first time, but they also use the app and digital channels as well. The Jonesboro store marks Best Buy's return to the town after a tornado destroyed its previous location.
"It's a great example of a vibrant market, a place where customers are interested in our brand, but not a market that could support a 30,000- or 35,000-square-foot store," Bonfig said. "An 18,000-square-foot store allows us to have the best of all of our different categories and meet the needs at that particular location."
The second opening, in Cape Cod, is slightly larger than Best Buy's normal medium-format stores, coming in at 28,000 square feet, but Bonfig said it's another example of finding "the right size store in the right location in the right node."
He added that Best Buy Canada, which can often do things faster than its U.S. counterpart, has been after the small-format store for "an extended period of time" and has seen success with locations as small as 7,000 square feet.
Still, Bonfig emphasized that the small stores are not a replacement for its more typical-format locations.
"It's actually an enhancement of what we're doing today," he said. "But it actually allows us to reach more customers and more markets that we just were not in before."
Trying to turn the page
Over the past five years, Best Buy has seen its stock sink roughly 20% after hitting its peak in late 2021, trading at $138 per share.
For the current fiscal year, Best Buy has said it expects comparable sales in the range of a decline of 1% to an increase of 1%. Though its most recent quarter outperformed Wall Street expectations, it came on the heels of years of declines, like the third fiscal quarter of 2026, when Best Buy reported net income of $140 million, down from $273 million the year prior.
The retailer was also hit by tariffs and is navigating the soaring price of memory chips, which have caused the costs of some consumer electronics to rise.
Bonfig said he attributes Best Buy's recent stagnant performance to a general pull-forward behavior from consumers during Covid that created an unprecedented demand curve that led to a lull. Like home improvement companies, Best Buy saw outsized spending as shoppers were stuck at home and looking to upgrade.
He said Best Buy saw that behavior reset the technology life cycle for a lot of consumers while also forcing vendors to pivot from innovation to production.
"I wouldn't say that Best Buy's lost its momentum," he told CNBC. "I think there's been a very interesting couple years, or maybe more than a couple years, in the market where there was an interesting demand curve where everything was pulled forward."
As he prepares to take the reins of the company, Bonfig said he's focused on improving the customer experience, including upgrading TV selections and working with customers to replace their existing TVs.
Bonfig said he'll define success during his tenure as CEO by the customer response.
He also said the company is leaning into AI for customers and the corporate side of the business, adding that Best Buy is actively investing in new products like Meta's glasses. Best Buy also has an AI tool for customers to use, in addition to partnerships with OpenAI and Google.
"Agentic commerce and commerce through AI platforms is happening today," Bonfig said. "We're seeing traffic there, and we want to make sure that the Best Buy experience is represented."
Still, he added, he expects AI to be an enhancement to the human power behind Best Buy.
And, ultimately, as he looks to step into his new role, Bonfig said he still believes in the core strength of Best Buy despite its recent stagnation.
"Corie had an amazing strategy, and my strategy is built on top of that," Bonfig said. "There is a tremendous amount of momentum."`,
    bodyJa: `家電量販店ベスト・バイは、次期最高経営責任者（CEO）ジェイソン・ボンフィグ氏の下で業績の立て直しを目指しており、同社の戦略についてCNBCと独占インタビューした。
同社は過去数年間、売上高の低迷に苦しんでおり、その原因として消費者信頼感の低下、技術革新の鈍化、住宅市場の減速が挙げられている。製品を刷新し、顧客エクスペリエンスを向上させ、売上を増やす取り組みの一環として、小売業者であるボンフィグはこの秋に現CEOのコーリー・バリーの後任となることを発表した。
ボンフィグ氏は、経営陣に就任する準備を進める中で、小売およびテクノロジー企業としてベストバイを前進させること、リーチを改善すること、顧客エクスペリエンスを向上させること、そして人力企業であることへの注力という4つの重要な柱に注力していると述べた。ボンフィグ氏はまた、人工知能ブームとベスト・バイの次の章での地位を活かす方法を検討しているとも述べた。
今週、ベスト・バイはアーカンソー州ジョーンズボロとマサチューセッツ州ケープコッドに2店舗の新店舗をオープンした。ボンフィグ氏はCNBCに対し、これは会社を長期的かつ持続可能な成長に戻すことを優先する同氏の戦略を表していると語った。
「私たちが発見したのは、従来型の規模のベスト・バイの店舗では参入できない市場が存在するということですが、それらはリーチの観点からベスト・バイにとって絶対に意味のある市場であるということです」とボンフィグ氏は語った。
これらの市場に力を入れるため、同社は20,000～25,000平方フィートの中型店舗と比較して、12,000～15,000平方フィートの小型店舗を新たにオープンしている。ニューヨーク市の旗艦店を含む最大規模の店舗の一部は、面積が 40,000 平方フィートを超えています。
新しい小規模店舗は、会社のリーチを拡大するというボンフィグの優先事項を活用している、と同氏は述べた。
「また、店舗を顧客の近くに置くと、顧客の来店頻度が変わるだけでなく、デジタル面でも顧客の行動が変わることもわかっています」とボンフィグ氏は語った。
Best Buy が新しい小規模コミュニティに参加すると、より多くの顧客が初めて物理的に店舗に足を運ぶだけでなく、アプリやデジタル チャネルも利用することがわかったと同氏は述べました。ジョーンズボロ店は、竜巻によって以前の店舗が破壊された後、ベスト・バイが町に戻ってきたことを記念するものである。
「これは活気に満ちた市場の好例であり、顧客は当社のブランドに興味を持っているが、30,000平方フィートや35,000平方フィートの店舗をサポートできる市場ではない」とボンフィグ氏は語った。 「18,000平方フィートの店舗では、さまざまなカテゴリーのすべてを最大限に活用し、その特定の場所のニーズを満たすことができます。」
ケープコッドにオープンする2号店は、ベスト・バイの通常の中型店舗よりわずかに大きく、面積は2万8000平方フィートだが、ボンフィグ氏はこれも「適切なノードの適切な場所に適切な規模の店舗」を見つける一例だと述べた。
同氏は、ベスト・バイ・カナダはしばしば米国の同業他社よりも迅速に物事を進めることができるが、「長期間」小型店を追求しており、7,000平方フィートもの小さな店舗で成功を収めていると付け加えた。
それでも、ボンフィグ氏は、小規模店舗は、より典型的な店舗の代わりになるものではないと強調した。
「実際、これは私たちが現在行っていることを強化したものです」と彼は言いました。 「しかし実際には、これにより、これまで参入できなかったより多くの顧客とより多くの市場にリーチできるようになります。」
ページをめくろうとすると
過去5年間、ベストバイの株価は2021年後半に最高値を付けた後、約20％下落し、1株当たり138ドルで取引されている。
ベスト・バイは今会計年度について、同等の売上高が１％減から１％増の範囲になると予想していると述べた。直近の四半期はウォール街の予想を上回ったものの、ベスト・バイが純利益を前年同期の2億7,300万ドルから1億4,000万ドルと報告した2026年第3四半期など、長年の落ち込みの直後にあった。
同社は関税の影響も受けており、一部の家電製品の価格高騰を引き起こしたメモリーチップの価格高騰を乗り切ろうとしている。
ボンフィグ氏は、ベスト・バイの最近の業績停滞の原因は、新型コロナウイルス感染症下での消費者の全般的な引き戻し行動が前例のない需要曲線を生み出し、小康状態に陥ったことにあると述べた。ホームセンター企業と同様に、買い物客が家に閉じこもってアップグレードを検討しているため、ベストバイでも多額の支出が見られました。
同氏は、この行動が多くの消費者のテクノロジーのライフサイクルをリセットすると同時に、ベンダーにイノベーションから生産への方向転換を強いることをBest Buyが見ていると述べた。
同氏はCNBCに対し、「ベスト・バイが勢いを失ったとは言えない」と語った。 「市場では、すべてが前方に引っ張られる興味深い需要曲線が見られた非常に興味深い数年間、あるいはおそらく数年以上があったと思います。」
ボンフィグ氏は、会社の手綱を引き継ぐ準備を進める中で、テレビの品揃えをアップグレードしたり、顧客と協力して既存のテレビを置き換えたりするなど、顧客体験の向上に注力していると語った。
ボンフィグ氏は、CEO在任中の成功を顧客の反応によって定義すると述べた。
同氏はまた、同社は顧客やビジネスの企業側のためにAIに傾いていると述べ、ベスト・バイはメタ社の眼鏡のような新製品に積極的に投資していると付け加えた。 Best Buy は、OpenAI および Google との提携に加え、顧客が使用できる AI ツールも提供しています。
「代理店商取引とAIプラットフォームを通じた商取引が今日行われている」とボンフィグ氏は語った。 「そこにはトラフィックが集まっているので、Best Buy のエクスペリエンスを確実に表現したいと考えています。」
それでも同氏は、AIがBest Buyの背後にある人間の力を強化するものになると期待していると付け加えた。
そして最終的には、新たな役割に就こうとしているボンフィグ氏は、最近の停滞にもかかわらず、ベスト・バイの中核的な強さを依然として信じていると語った。
「コーリーは素晴らしい戦略を持っていた。私の戦略はそれに基づいて構築されている」とボンフィグ氏は語った。ものすごい勢いです。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/01/best-buy-ceo-jason-bonfig-smaller-stores.html",
    publishedAt: "2026-08-01T12:00:01+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 7,
  },
  {
    id: "tankers-near-oman-come-under-fire-as-ira-e169266c",
    title: "Tankers near Oman come under fire as Iran threatens to choke off shipping routes",
    titleJa: "イランが航路を封鎖すると脅し、オマーン近郊のタンカーが砲撃を受ける",
    summaryJa: "オマーン近郊のタンカーが一晩襲われたと報告しており、イランが米軍のホルムズ海峡封鎖により主要な輸送路の閉鎖につながると米国に警告した中、近くで爆発があったとの報告もあった。これとは別にクウェートは、防空体制がイランによる敵対的な無人機攻撃に直面していると述べた。",
    bodyOriginal: `A tanker near Oman reported being struck overnight, with another saying it saw an explosion nearby as Iran warned Washington that the U.S. military's blockade of the Strait of Hormuz would result in the closure of key shipping routes.
Separately, Kuwait said its air defenses confronted hostile drone attacks by Iran.
The latest conflict comes amid U.S. media reports that U.S. President Donald Trump is preparing for a fresh round of strikes against Iran as early as this weekend, as hopes of a negotiated end to the war that began on Feb. 28 recede and energy prices climb.
The United Kingdom Maritime Trade Operations Centre (UKMTO) — an organization backed by the British Navy — said Saturday it received a report of a tanker being hit by an "unknown projectile which has caused damage to the engine room."
"The tanker is not under command and the regional Coast Guard have been informed. There are no reported casualties or environmental impact," UKMTO said of the incident 11 nautical miles northeast of Oman.
Another tanker in the waters off Oman reported "seeing a large splash and explosion in close proximity to the vessel," UKMTO said.
A temporary ceasefire following the signing of a memorandum of understanding between the U.S. and Iran on June 17 has effectively broken down. Neither side has given way on key sticking points, including Iran's nuclear program and control of shipping through the Strait of Hormuz, through which about a fifth of the world's oil supplies moved before the war broke out.
Over the last week, the U.S. completed a "heavy wave" of strikes against Iran, hitting dozens of Islamic Revolutionary Guard Corps targets. In retaliation, Iran attacked U.S. military bases in Kuwait and Bahrain.
Egypt said Thursday that a drone hit two ships at its Mediterranean port of Damietta, triggering a fire. No one claimed responsibility for the strike, which marks the first attack on Egyptian soil since the war began and another sign that the conflict is expanding.
'Hitting them very hard'
The Wall Street Journal cited unnamed U.S. officials as saying Friday that Trump has ordered the military to launch a fresh attack on Iran that could begin as soon as this weekend. But Trump could call off the planned strikes, officials told the Journal, if there is progress on the diplomatic front.
"We will be hitting them very hard," The Associated Press quoted Trump as saying Friday at a televised cabinet meeting at the Camp David presidential retreat. "And you know at some point, they're going to say, 'We just can't take it anymore.'"
Axios quoted an unnamed U.S. official as saying that Trump is seriously considering attacking Iranian energy targets in the next few days, but hasn't given final orders to do so.
An Iranian official warned that the U.S.'s actions would lead to Iran tightening its control over critical maritime passages.
"The continuation of the naval blockade and warmongering by the U.S. regime will not only lock the Strait of Hormuz tighter, but will also shut down other straits and chokepoints," Iran's WANA news agency quoted Mohammad Bagher Zolghadr, Secretary of Iran's Supreme National Security Council, as saying.
"The price for this will be paid by the global economy, the energy market, and American voters," Zolghadr reportedly said.
The U.S. reimposed a naval blockade on Iranian ships on July 13, preventing its vessels from entering or leaving its ports.
Recent strikes by Iran-backed Houthi fighters in Yemen and Friday's drone strike in Egypt have raised fears that the crucial Bab el-Mandeb strait at the southern end of the Red Sea could become a second choke point for Iran to target as the two sides tussle over the Strait of Hormuz.
On Friday, West Texas Intermediate futures rose more than 1% to close at $84.67 per barrel. Brent crude, the international benchmark, also gained more than 1% to settle at $90.12. Prices fell more than 5% for the week after selling off Monday on hopes the conflict in the Middle East would de-escalate.`,
    bodyJa: `オマーン近郊のタンカーが一晩襲われたと報告しており、イランが米軍のホルムズ海峡封鎖により主要な輸送路の閉鎖につながると米国に警告した中、近くで爆発があったとの報告もあった。
これとは別にクウェートは、防空体制がイランによる敵対的な無人機攻撃に直面していると述べた。
今回の紛争は、2月28日に始まった戦争の交渉による終結への期待が後退し、エネルギー価格が上昇する中、ドナルド・トランプ米大統領が早ければ今週末にもイランに対する新たな攻撃の準備を進めているとの米メディア報道の最中に起きた。
英国海軍が支援する組織、英国海事貿易業務センター（UKMTO）は土曜日、タンカーが「エンジンルームに損傷を与えた未知の飛翔体」に衝突されたとの報告を受けたと発表した。
UKMTOはオマーン北東11海里での事故について、「タンカーは指揮下になく、地域沿岸警備隊に通報が入った。死傷者や環境への影響は報告されていない」と述べた。
オマーン沖の別のタンカーは「船のすぐ近くで大きな飛沫と爆発を見た」と報告したとUKMTOは述べた。
6月17日の米国とイランの覚書署名後の一時停戦は事実上決裂した。イランの核開発計画や、開戦前に世界の石油供給量の約５分の１がホルムズ海峡を通過していた海峡を通る船舶の管理など、重要な争点については両国とも譲歩していない。
先週、米国はイランに対する「大波」攻撃を完了し、イスラム革命防衛隊の数十の目標を攻撃した。イランは報復としてクウェートとバーレーンの米軍基地を攻撃した。
エジプトは木曜日、地中海のダミエッタ港でドローンが２隻の船に衝突し、火災が発生したと発表した。この攻撃については誰も犯行声明を出さなかったが、これは戦争が始まって以来エジプト本土への初めての攻撃であり、紛争が拡大していることを示す新たな兆候である。
「彼らをとても強く殴った」
ウォール・ストリート・ジャーナルは金曜日、トランプ大統領が軍にイランへの新たな攻撃を命令し、早ければ今週末にも開始される可能性があると匿名の米当局者の発言を引用した。しかし外交面で進展があれば、トランプ大統領は計画されていた攻撃を中止する可能性があると当局者はWSJに語った。
AP通信は、トランプ大統領が金曜日、キャンプデービッド大統領静養所でテレビ放映された閣僚会議で「我々は彼らを厳しく攻撃するだろう」と述べたと報じた。 「そして、いつか彼らは『もう耐えられない』と言うでしょう。」
アクシオスは、トランプ大統領が数日以内にイランのエネルギー目標を攻撃することを真剣に検討しているが、最終的な命令は出していない、と匿名の米当局者の発言を伝えた。
イラン当局者は、米国の行動は重要な海路に対するイランの管理強化につながると警告した。
イランのWANA通信は、イラン最高国家安全保障会議書記のモハマド・バガー・ゾルガドル氏の発言を引用し、「米国政権による海上封鎖と戦争挑発の継続は、ホルムズ海峡の封鎖を強化するだけでなく、他の海峡やチョークポイントも封鎖するだろう」と述べた。
「その代償は世界経済、エネルギー市場、そして米国の有権者が支払うことになる」とゾルガドル氏は語ったという。
米国は7月13日、イラン船舶に対する海上封鎖を再発動し、イラン船舶の入出港を阻止した。
イエメンでのイラン支援のフーシ派戦闘員による最近の攻撃と、金曜日のエジプトでの無人機攻撃により、ホルムズ海峡を巡る両国の攻防の中で、紅海の南端にある重要なバブ・エル・マンデブ海峡がイランにとって標的となる第二の難所となる可能性があるとの懸念が高まっている。
金曜日、ウェスト・テキサス・インターミディエイト先物は1％以上上昇し、1バレル＝84.67ドルで取引を終えた。国際ベンチマークであるブレント原油も1％以上上昇し、90.12ドルで落ち着いた。中東紛争が激化しないとの期待から月曜に売られた後、価格は週間で５％以上下落した。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/01/tankers-near-oman-come-under-fire.html",
    publishedAt: "2026-08-01T10:56:11+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "russian-strikes-on-kyiv-kill-at-least-ni-4c708364",
    title: "Russian strikes on Kyiv kill at least nine, Ukraine officials say",
    titleJa: "ロシアのキエフ攻撃で少なくとも9人死亡、ウクライナ当局発表",
    summaryJa: "ロシアのキエフ攻撃で少なくとも9人死亡、ウクライナ当局発表- 公開されました",
    bodyOriginal: `Russian strikes on Kyiv kill at least nine, Ukraine officials say
- Published
At least nine people have been killed in Russian ballistic missile strikes on Kyiv, local officials said.
A further 28 people were injured in the attack on the Ukrainian capital on Saturday morning, according to the country's State Emergency Service.
Moscow has escalated deadly ballistic missile attacks on Kyiv recently, prompting Ukrainian President Volodymyr Zelensky to say that missile interceptors are urgently needed.
The strikes come two days after a suspected Russian cruise missile landed in Poland during a widespread attack on Ukraine that killed at least eight people, including six members of one family.
Kyiv's Mayor Vitali Klitschko said the capital had come under a ballistic missile attack on Saturday, with AFP reporting more than 10 explosions.
Fires broke out across the city and power cuts were reported in some areas.
Klitschko said a residential building in Shevchenkivskyi was partially destroyed, trapping people inside.
The emergency services said at least seven people were killed in a strike in the Darnytskyi district. Another 14 were injured, including two children, it reported.
In Solomyanskyi district, two people died and eight were injured, including two children, as a five-storey residential building was partially destroyed, officials said.
A missile landed near the Lithuanian embassy, breaking windows and scattering debris in the compound, Lithuania's foreign ministry said.
The attack comes after Zelensky met President Donald Trump in Washington DC earlier this week to urge the US to grant Ukraine a licence to produce Patriot interceptor missiles.
Asked about the missiles during a cabinet meeting at the Camp David retreat on Friday, Trump said the US had not agreed to Ukraine building Patriot missiles but that talks were ongoing.
He said the US had to be "very careful about letting somebody build them".
Emphasising concerns about sharing advanced US weaponry, Trump called it "a big step".
Trump's latest comments regarding Patriot missiles come weeks after he offered to give Ukraine the right to produce them.
As Russia has stepped up its air attacks, Ukraine has run low on supplies of Patriots, which remain the only weapon in its arsenal capable of downing ballistic missiles.
"I don't think this would ever happen, but, you know, those people that you give that technology, they can someday turn on you," Trump said.
Zelensky said in a post on X on Friday that he had followed up on his meeting with Trump with a "good" phone call with US Vice-President JD Vance.
"As Russia's air attacks on our country continue unabated, air defence – specifically Patriot interceptors against ballistic missiles – remains a top priority," Zelensky wrote.
For its part, Ukraine has escalated its retaliatory strikes in recent months, including attacks on several retail warehouses belonging to Russia's biggest online retailer, Wildberries.
Kyiv says it is targeting logistics hubs used by Russians to buy military equipment, and disrupting supplies to the Russian army.
Related topics
More about this story
- Published11 hours ago`,
    bodyJa: `ロシアのキエフ攻撃で少なくとも9人死亡、ウクライナ当局発表
- 公開されました
地元当局者によると、ロシアによるキエフへの弾道ミサイル攻撃で少なくとも９人が死亡した。
ウクライナ国家緊急局によると、土曜朝のウクライナ首都攻撃でさらに28人が負傷した。
ロシア政府は最近、キエフへの致命的な弾道ミサイル攻撃をエスカレートさせており、ウクライナのウォロディミル・ゼレンスキー大統領はミサイル迎撃機が緊急に必要であると述べた。
この空爆は、ウクライナへの大規模な攻撃中にロシアの巡航ミサイルとみられるものがポーランドに着陸し、一家族６人を含む少なくとも８人が死亡した２日後に行われた。
キエフのビタリ・クリチコ市長は、土曜日に首都が弾道ミサイル攻撃を受け、AFP通信は10件以上の爆発があったと報じた。
市内全域で火災が発生し、一部の地域では停電が報告された。
クリチコ氏は、シェフチェンキフスキーの住宅建物が部分的に破壊され、人々が屋内に閉じ込められたと述べた。
救急当局は、ダルニツキー地区でのストライキで少なくとも７人が死亡したと発表した。さらに子供２人を含む１４人が負傷したと報じた。
ソロミャンスキー地区では５階建て住宅が半壊し、２人が死亡、子供２人を含む８人が負傷したと当局が発表した。
リトアニア外務省によると、ミサイル１発がリトアニア大使館近くに着弾し、窓が割れ、瓦礫が館内に散乱した。
この攻撃は、ゼレンスキー氏が今週初めにワシントンDCでドナルド・トランプ大統領と会談し、米国に対しパトリオット迎撃ミサイルの製造許可をウクライナに与えるよう求めた後に行われた。
トランプ大統領は金曜日、キャンプデービッドの避難所で行われた閣議でミサイルについて質問され、米国はウクライナによるパトリオット・ミサイル製造に同意していないが、交渉は継続していると述べた。
同氏は、米国は「誰かに建設させることに細心の注意を払う必要がある」と述べた。
トランプ大統領は、米国の先進兵器の共有に対する懸念を強調し、これは「大きな一歩」だと述べた。
パトリオット・ミサイルに関するトランプ大統領の最新のコメントは、同氏がウクライナにミサイル製造の権利を与えると申し出てから数週間後に出た。
ロシアが空爆を強化する中、ウクライナは弾道ミサイルを撃墜できる唯一の兵器であるペイトリオットの供給が不足している。
「こんなことは決して起こらないと思うが、あなたがその技術を与えた人々は、いつかあなたを敵に回す可能性がある」とトランプ大統領は語った。
ゼレンスキー氏は金曜日のＸへの投稿で、トランプ大統領との会談のフォローアップとして、バンス米副大統領と「良い」電話会談を行ったと述べた。
「我が国に対するロシアの空襲が衰えることなく続く中、防空、特に弾道ミサイルに対するパトリオット迎撃ミサイルは依然として最優先事項である」とゼレンスキー氏は書いた。
一方、ウクライナはここ数カ月、ロシア最大のオンライン小売業者ワイルドベリーズに属する複数の小売倉庫への攻撃を含む報復攻撃をエスカレートさせている。
キエフは、ロシア人が軍事装備を購入するために利用する物流拠点を標的にし、ロシア軍への供給を妨害していると述べた。
関連トピック
この話についてさらに詳しく
- 11 時間前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/ce973yvk7pko?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-01T08:24:09+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/8710/live/778466c0-8d4d-11f1-b2ab-0dd01740f9f6.jpg",
    readTime: 3,
  },
  {
    id: "stick-to-spending-limits-pm-and-chancell-bb793e88",
    title: "Stick to spending limits, PM and chancellor tell ministers in joint memo",
    titleJa: "支出制限を堅持、首相と首相が共同メモで閣僚に伝える",
    summaryJa: "支出制限を堅持、首相と首相が共同メモで閣僚に伝える- 公開されました",
    bodyOriginal: `Stick to spending limits, PM and chancellor tell ministers in joint memo
- Published
Chancellor John Healey and Prime Minister Andy Burnham have written a joint letter to cabinet ministers telling them that they must stick within their existing spending limits while funding new pledges.
After taking office, Burnham announced a host of new cost-of-living policies, including scrapping VAT on domestic electricity bills, reducing business rates for pubs and capping bus fares in England.
Burnham and Healey are determined to stick within the fiscal rules set out by their predecessors Sir Keir Starmer and Rachel Reeves, treasury sources have told the BBC.
Healey's first Budget will be on 28 October and will be "built on fiscal discipline", the chancellor said.
Chris Mason: New chancellor faces tough spending choices
- Published21 July
Burnham has big ideas - but what will they cost?
- Published20 July
Healey said the budget would "meet our fiscal rules" and "give businesses and families some of the stability they need to plan for the future".
A report in the Times says the joint letter told ministers they must work "within the budgets they have already got" even while "pay[ing] for new things they want to do this year and next".
While the ongoing war in Iran is pushing up inflation and borrowing costs, senior Treasury sources confirmed that the government was determined to stay "well within the fiscal rules" inherited from Sir Keir and Reeves.
But Burnham has said his government will stick to Labour's fiscal rules on spending and borrowing as well as the party's 2024 manifesto pledges not to increase income tax, VAT or National Insurance contributions.
He also said he will honour the fiscal rules imposed by Reeves, which include a pledge to balance day-to-day spending with tax revenues by the end of the decade.
An influential think tank said earlier this week that the prime minister only had a small margin of error to do this and that Healey may have to cut spending or raise taxes to meet Burnham's policy priorities, such as extra defence spending and better social care.
Healey was defence secretary under Sir Keir but resigned after a row over defence spending commitments, saying he was "certain" that Britain should lift its spending to 3% by 2030.
Questioned about funding on Thursday, Burnham's Defence Secretary Wes Streeting repeatedly refused to commit to that target.
"Before we set out specific spending commitments, we will also set out how we pay for them at the same time," he said.
Reeves left a £22bn buffer in her last Budget, but persistent inflation due to the Iran war could have eroded that.
On Friday, the PM said he would give all mayors of city regions in England a share of income tax revenue for the first time, as part of his efforts to move power away from Westminster.
Reeves had previously said that regional mayors could be given control of some tax revenue to spend on their local priorities.
Labour pledged to devolve more powers to local councils and mayors in areas such as housing and transport as part of its 2024 election manifesto.
More details of Burnham's plan are expected to be announced in the Budget, but the government said the rate of income tax will not change as a direct result of the reforms.
AJ Bell public policy director Tom Selby said Healey "doesn't have the luxury of pointing the finger of blame at the last administration".
"Healey will likely spend a chunk of his time leafing through the thesaurus looking for new ways to rephrase the 'tough choices' message of his predecessor," he said.
Shadow chancellor Sir Mel Stride said the announcement of the budget date meant "89 more days of unfunded spending commitments and damaging tax speculation until we get some details".
"Eighty-nine more days for Brits to wait before they know how much their taxes are going to go up to fund Burnham's spending addiction," he said.
Sign up for our Politics Essential newsletter to read top political analysis, gain insight from across the UK and stay up to speed with the big moments. It'll be delivered straight to your inbox every weekday.
Related topics
- Published27 April`,
    bodyJa: `支出制限を堅持、首相と首相が共同メモで閣僚に伝える
- 公開されました
ジョン・ヒーリー首相とアンディ・バーナム首相は閣僚に連名で書簡を送り、新たな公約に資金を提供する一方で既存の支出制限を遵守する必要があると訴えた。
バーナム氏は就任後、国内の電気代に対する付加価値税の撤廃、パブの営業料金引き下げ、英国のバス料金の上限規制など、多くの新たな生活費政策を発表した。
バーナム氏とヒーリー氏は、前任のキア・スターマー卿とレイチェル・リーブス卿が定めた財政規則を堅持する決意であると財務関係者がBBCに語った。
ヒーリー氏の最初の予算案は10月28日に提出され、「財政規律に基づいて構築される」と首相は述べた。
クリス・メイソン：新首相は厳しい支出選択に直面している
- 7 月 21 日発行
バーナムには大きなアイデアがありますが、それにはどれくらいの費用がかかるのでしょうか?
- 7 月 20 日発行
ヒーリー氏は、この予算は「財政規則を満たし」、「企業や家庭に将来の計画に必要な安定を与える」と述べた。
タイムズ紙の報道によると、共同書簡は閣僚らに対し、「今年と来年やりたい新しいことにお金を払いながらも」「すでに獲得した予算の範囲内で」仕事をしなければならないと訴えたという。
現在進行中のイラン戦争でインフレと借入コストが上昇している中、財務省幹部らは、政府がキーア卿とリーブス卿から受け継いだ「財政ルールの範囲内で十分」にとどまる決意であることを確認した。
しかしバーナム氏は、政府は支出と借入に関する労働党の財政規則と、所得税、付加価値税、国民保険料を増額しないという党の2024年のマニフェストの公約を堅持すると述べた。
同氏はまた、10年代末までに日々の支出と税収のバランスをとるとの誓約など、リーブス氏が課した財政規則を遵守すると述べた。
影響力のあるシンクタンクは今週初​​め、首相がこれを行うにはわずかな誤差しかなく、追加の国防費や社会保障の充実といったバーナム氏の政策優先事項を満たすためにヒーリー氏は歳出削減か増税が必要になる可能性があると述べた。
ヒーリー氏はキーア卿の下で国防長官を務めていたが、国防費の公約をめぐる口論の末に辞任し、英国が2030年までに支出を3％に引き上げるべきであると「確信している」と述べた。
木曜日に資金提供について質問されたバーナムのウェス・ストリーティング国防長官は、その目標へのコミットメントを繰り返し拒否した。
同氏は「具体的な支出約束を定める前に、その支払い方法も同時に定めるつもりだ」と述べた。
リーブス氏は前回の予算案に220億ポンドのバッファーを残したが、イラン戦争による持続的なインフレでそれが損なわれる可能性もあった。
金曜日、首相はウェストミンスターから権力を移す取り組みの一環として、イングランドのすべての都市地域の市長に初めて所得税収入の一部を与えると発表した。
リーブス氏は以前、地方首長が地元の優先事項に支出するために税収の一部をコントロールできるようになると述べていた。
労働党は２０２４年の選挙マニフェストの一環として、住宅や交通などの分野で地方議会や市長にさらなる権限を委譲すると約束した。
バーナム計画の詳細は予算案で発表される予定だが、政府は改革の直接の結果として所得税の税率が変更されることはないと述べた。
AJベルの公共政策部長トム・セルビー氏は、ヒーリー氏には「前政権に責任の矛先を向ける余裕はない」と語った。
「ヒーリー氏はおそらく、前任者の『厳しい選択』というメッセージを言い換える新たな方法を探すために、シソーラスをめくることにかなりの時間を費やすことになるだろう」と同氏は語った。
影の財務大臣メル・ストライド卿は、予算案日程の発表は「詳細が判明するまで、あと89日間、財源のない支出が約束され、税金投機に悪影響を与えることになる」と述べた。
同氏は、「バーナム氏の浪費癖を解消するために自分たちの税金がどれだけ上がるのかを英国人が知るまで、あと89日待たなければならない」と語った。
Politics Essential ニュースレターに登録して、トップの政治分析を読み、英国全土からの洞察を得て、重要な瞬間を常に把握してください。平日は毎日あなたの受信箱に直接配信されます。
関連トピック
- 4 月 27 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cjd4yz35x8go?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-01T07:48:01+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/f911/live/99ae70c0-8ced-11f1-a573-93159e2b55da.jpg",
    readTime: 5,
  },
  {
    id: "race-to-rescue-remaining-climbers-after-c48f55e4",
    title: "Race to rescue remaining climbers after deadly avalanche in Pakistan",
    titleJa: "パキスタンで致命的な雪崩が発生し、残った登山者を救出するレース",
    summaryJa: "パキスタンで致命的な雪崩が発生し、残った登山者を救出するレース- 公開されました",
    bodyOriginal: `Race to rescue remaining climbers after deadly avalanche in Pakistan
- Published
Rescue teams in Pakistan are carrying out a second day of search for climbers caught in an avalanche on the world's 12th-highest summit.
Among the seven still missing from the 10-person expedition on Broad Peak, on the border with China, is renowned Nepal-born climber Nirmal Purja.
The operation has expanded with local Pakistani climbers volunteering, together with others from Nepal who have halted their expeditions on nearby K2.
Bad weather has been hampering the search. Pakistani officials say the bodies of three climbers have been recovered.
They have been named as American Mallory Geis, Nadhira Ahmed Abdullah Al Harthy from Oman and Pur Bahadur Gurung from Nepal.
On Friday, the Alpine Club of Pakistan said several climbers had been spotted by drones but their condition was unknown.
The club's secretary general, Ayaz Shigri, told the BBC rescuers were concerned about the risk of further avalanches.
Military helicopters are on standby to fly to assist, weather permitting.
The search and rescue operation for the team began after reports of an avalanche on Thursday on the 8,047-metre (26,400ft) peak in the Karakoram range.
The multinational climbing group was being led by Purja. He is known for climbing all 14 of the world's 8,000m-plus mountains in just over six months in 2019.
Purja joined the British Army in 2003 and the Special Boat Service - the special forces unit of the Royal Navy - in 2009.
In 2012, he reached the summit of the 6,119m Lobuche East mountain in Nepal - his first peak.
In June, Mallory Geis posted on social media that she was ready for "her first big kid climbing expedition in Pakistan".
Pur Bahadur Gurung - also known as Yukta - was certified by the International Federation of Mountain Guides Associations and close to completing the 14-peaks challenge.
Also among the group is Kili Pemba Sherpa Kili, who has so far scaled Everest 15 times. In 2021, he was a member of a historic K2 winter expedition, along with several Nepali climbers including Purja.
Broad Peak is regarded as one of the more challenging mountains for climbers. The first successful ascent was in 1957, when an Austrian expedition reached the summit.
Since then, many more have climbed the mountain, but dozens have lost their lives.
One of Broad Peak's deadliest years was 2013, when at least six fatalities were recorded.
Correction 31/7/26: A previous version of this story stated that four members of the expedition had been found dead, citing the Alpine Club of Pakistan. This was a miscommunication on its part and has since been amended.
- Published29 October 2019
- Published22 May`,
    bodyJa: `パキスタンで致命的な雪崩が発生し、残った登山者を救出するレース
- 公開されました
パキスタンの救助チームは、世界で12番目に高い山頂で雪崩に巻き込まれた登山者の捜索2日目を行っている。
中国との国境にあるブロード・ピークでの10人の遠征隊のうち、依然として行方不明の7人の中には、ネパール生まれの著名な登山家ニルマル・プルジャさんもいる。
この活動は、地元のパキスタン人登山家がボランティアとして参加するとともに、近くのK2で遠征を中止したネパールからの登山者らも加わって拡大している。
悪天候のため捜索が難航している。パキスタン当局は、登山者３人の遺体が収容されたと発表した。
彼らはアメリカ人のマロリー・ガイス、オマーンのナディラ・アーメド・アブドラ・アル・ハーシー、ネパールのプル・バハドゥル・グルンと名付けられた。
金曜日、パキスタン山岳クラブは、数人の登山者がドローンによって発見されたが、彼らの状態は不明であると発表した。
同クラブのアヤズ・シグリ事務局長はBBCに対し、救助隊はさらなる雪崩の危険性を懸念していると語った。
軍用ヘリコプターは天候がよければ支援のために飛行できるよう待機している。
チームの捜索救助活動は、木曜日にカラコルム山脈の標高8,047メートル（26,400フィート）の山頂で雪崩が発生したとの報告を受けて開始された。
多国籍の登山グループはプルジャが率いていた。彼は2019年に世界の8,000メートル以上の山14座すべてを半年強で登頂したことで知られている。
プルジャは 2003 年に英国陸軍に入隊し、2009 年に英国海軍の特殊部隊であるスペシャル ボート サービスに入隊しました。
2012年、彼はネパールにある標高6,119メートルのロブチェ・イースト山の頂上に初めて到達した。
6月、マロリー・ガイスさんはソーシャルメディアに「パキスタンでの初めての大きな子供の登山遠征」の準備ができていると投稿した。
ユクタとしても知られるプール バハドゥル グルンは、国際山岳ガイド協会連盟によって認定されており、14 峰チャレンジの達成に近づいています。
このグループには、これまでにエベレストに15回登頂したキリ・ペンバ・シェルパ・キリもいる。 2021年、彼はプルジャを含むネパール人登山家数名とともに、歴史的なK2冬季遠征のメンバーとなった。
ブロード ピークは、登山家にとって最も挑戦的な山の 1 つとみなされています。最初の登頂に成功したのは 1957 年で、オーストリアの遠征隊が頂上に到達しました。
それ以来、さらに多くの人が山に登ったが、数十人が命を落とした。
ブロード ピークで最も死者数が多かった年の 1 つは 2013 年で、少なくとも 6 人の死亡者が記録されました。
訂正 31/7/26: この記事の以前のバージョンでは、パキスタン山岳クラブの情報として、遠征隊員 4 人が死亡しているのが発見されたと述べられていました。これは側の誤解であり、その後修正されました。
- 2019 年 10 月 29 日公開
- 5 月 22 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cddjz1r01l8o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-01T07:22:30+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/17c1/live/47cb0380-8d16-11f1-bfeb-2930213869d1.jpg",
    readTime: 3,
  },
  {
    id: "building-for-131-f-europe-races-to-prote-98e1f51e",
    title: "Building for 131°F: Europe races to protect its infrastructure from a ‘quiet catastrophe’",
    titleJa: "華氏 131 度に向けて建設: ヨーロッパはインフラを「静かな大惨事」から守るために競う",
    summaryJa: "干ばつ、猛威をふるう山火事、そして夏の異常気象に見舞われているヨーロッパ各国は、広く過小評価されている猛暑という気候課題への対応に奔走している。気候危機によってさらに加速され、ここ数カ月間の一連の記録的な熱波は、世界で最も急速に温暖化が進む大陸の広い範囲に大混乱を引き起こした。灼熱による深刻なインフラストレスにより、企業や政策立案者は対応を迫られている。",
    bodyOriginal: `Gripped by drought, raging wildfires and a summer of weather extremes, countries across Europe are scrambling to address the widely underestimated climate challenge of extreme heat.
Supercharged by the climate crisis, a series of record-breaking heat waves in recent months has wreaked havoc across large swaths of the world's fastest-warming continent. Severe infrastructure stress brought on by the searing heat has forced companies and policymakers to respond.
Eurostar, for example, recently announced that it is preparing to for unprecedented heat across Europe with a new fleet of trains designed to withstand temperatures of up to 55 degrees Celsius (131 degrees Fahrenheit).
"A decision has been taken to equip our new fleet of up to 50 Celestia trains with air conditioning capable of operating in temperatures up to 55 degrees," a Eurostar spokesperson told CNBC by email. "These trains will enter service in 2031 and run into the 2060s so it's essential to be prepared for the future."
The high-speed train operator, which runs some of the longest and largest passenger train sets in Europe, had originally intended to invest in a new fleet of trains that could operate in conditions of up to 45 degrees Celsius, but recent heat waves prompted a change of plan.
In Norway, extreme heat has pushed asphalt temperatures at Oslo Airport toward 52 degrees Celsius, prompting fire crews to douse the tarmac with thousands of liters of water to prevent damage to aircraft stands and taxiways.
Workers at Oslo Airport, which is operated by Avinor, said each cooling round used around 13,000 liters of water, with these operations repeating every hour during the hottest periods.
In Sweden, meanwhile, Stockholm's public transport operator SL has painted railway tracks white to reduce the risk of heat-related disruptions, such as track displacement and track buckling, sometimes referred to as "sun kinks."
This method has also been used on particularly vulnerable railway sections in southern Europe, including Spain and Italy.
'Adaption alone is not a viable strategy'
Wildfires in France and Spain forced the evacuation of more than 330,000 people in the past week, with both countries bracing for a fourth heat wave of the summer.
Jan Rosenow, professor of energy and climate policy at the U.K.'s University of Oxford, said the ravaged village of Le Porge at the center of France's wildlife crisis should serve as a stark reminder of the root cause of the climate crisis.
Scientists have repeatedly warned that climate change is exacerbating the frequency and intensity of extreme weather events. The burning of fossil fuels such as coal, oil and gas is the chief driver of the climate crisis.
"For decades climate scientists told us this would happen more frequently and that the severity of extreme weather and its consequences would increase. The world did not listen and we keep burning fossil fuels at record levels," Rosenow said in a LinkedIn post published on July 28.
"Adaption alone is not a viable strategy as the extreme fires show us."
How is the EU responding?
Europe is known to be warming at twice the speed of the global average since the 1980s, according to the European Union's Copernicus Climate Change Service.
James Brennan, director of climate risk modelling at Climate X, said extreme heat days are set to double or even triple across central Europe by 2050 under a high-emission scenario used by the Intergovernmental Panel on Climate Change (IPCC).
That would mean regions currently recording five to 10 days per year of extreme heat would see 20 to 30 days per year within a single generation.
"Southern Europe faces the most severe conditions, with parts of the Iberian Peninsula, southern Italy and Greece projected to exceed 40 to 55 extreme heat days per year," Brennan told CNBC.
"No region in Europe sees a reduction in extreme heat days by 2050: the acceleration is universal. But the risk is greatest where exposure is already highest, making adaptation both most urgent and most difficult in the south," he added.
Read more
A spokesperson for the European Commission, the EU's executive arm, said the Commission will soon present a new integrated framework for climate resilience and risk management.
"It is clear that the efficiency and intent of all policies is being compromised by climate change unless that is calibrated into the policy design," a Commission spokesperson told CNBC by email.
"So, independent whether we are talking about energy policy, infrastructure, transport policy, health, we have to be able to calibrate our approaches and investments according to the actual climatic conditions in which those policies need to operate," they added.
Insurers 'cannot solve this problem alone'
Lena Fuldauer, head of resilience and business development at Allianz Risk Consulting, said the challenge of extreme heat is "a quiet catastrophe" for businesses — unlike storms or earthquakes.
Businesses can typically incur equipment failures and reduced operational efficiency as well as increased maintenance and downtime during periods of excessive heat, while supply chain disruptions, power grid strains and workforce impacts can compound these problems.
Fuldauer cited recent research from Nature Science, which showed that the June 2026 heat wave saw nearly half of 854 European cities break or approach all-time heat-stress records, with a peak of 48°C recorded at Casteltermini, Italy.
"Temperatures above 50°C, which have been virtually impossible at Mediterranean locations in the pre-industrial world, have seen their likelihood increase by a factor of 10 to 1,000 under human-induced climate change – using recent climate attribution science," Fuldauer told CNBC by email. "By end-of-century, such extremes could occur annually at the hottest locations."
Fuldauer said the insurance industry needs to become a resilience partner for society, describing public-private partnerships as key to success in this area.
"The insurance industry cannot solve this problem alone but needs to work with government and international organizations to develop scalable solutions for extreme heat," Fuldauer said.`,
    bodyJa: `干ばつ、猛威をふるう山火事、そして夏の異常気象に見舞われているヨーロッパ各国は、広く過小評価されている猛暑という気候課題への対応に奔走している。
気候危機によってさらに加速され、ここ数カ月間の一連の記録的な熱波は、世界で最も急速に温暖化が進む大陸の広い範囲に大混乱を引き起こした。灼熱による深刻なインフラストレスにより、企業や政策立案者は対応を迫られている。
例えば、ユーロスターは最近、摂氏55度（華氏131度）までの気温に耐えるように設計された新しい列車群を導入し、ヨーロッパ全土で前例のない暑さに備えていると発表した。
ユーロスターの広報担当者は電子メールでＣＮＢＣに対し、「最大５０両のセレスティア列車からなる当社の新しい車両に、最高５５度の気温でも動作可能な空調装置を装備することが決定された」と電子メールで語った。 「これらの列車は 2031 年に運行を開始し、2060 年代まで運行されるため、将来に備えることが不可欠です。」
ヨーロッパで最長かつ最大の旅客列車を運行するこの高速鉄道運営会社は、当初は最高45℃の環境でも運行できる新しい列車群に投資するつもりだったが、最近の熱波により計画変更を余儀なくされた。
ノルウェーでは、猛暑によりオスロ空港のアスファルトの温度が摂氏52度近くまで上昇し、消防隊員が航空機の駐機場や誘導路への損傷を防ぐために駐機場に数千リットルの水をかけている。
アビノールが運営するオスロ空港の職員らによると、各冷却作業では約１万３０００リットルの水を使用し、最も暑い時期にはこうした作業が１時間ごとに繰り返されたという。
一方、スウェーデンでは、ストックホルムの公共交通機関運営会社SLが、「サンキンク」とも呼ばれる線路の変位や線路の座屈など、熱に関連した障害のリスクを軽減するために鉄道線路を白く塗装した。
この方法は、スペインやイタリアなど南ヨーロッパの特に脆弱な鉄道区間でも使用されています。
「適応だけでは実行可能な戦略ではない」
フランスとスペインの山火事により、過去１週間で３３万人以上が避難を余儀なくされ、両国ともこの夏４度目の熱波に備えている。
英国オックスフォード大学のエネルギー・気候政策教授ジャン・ローズナウ氏は、フランスの野生生物危機の中心にある荒廃したル・ポルジュ村は、気候危機の根本原因をはっきりと思い出させるものとなるはずだと語った。
科学者たちは、気候変動が異常気象の頻度と激しさを悪化させていると繰り返し警告してきた。石炭、石油、ガスなどの化石燃料の燃焼は、気候危機の主な原因です。
ローズナウ氏は7月28日に公開されたLinkedInへの投稿で、「何十年もの間、気候科学者らは、このような事態がより頻繁に起こり、異常気象とその影響の深刻さが増すだろうと我々に告げていた。世界は耳を貸さず、我々は記録的なレベルで化石燃料を燃やし続けている」と述べた。
「極端な火災が示しているように、適応だけでは実行可能な戦略ではありません。」
EUはどう対応しているのでしょうか？
欧州連合のコペルニクス気候変動局によると、ヨーロッパは1980年代以降、世界平均の2倍の速度で温暖化していることが知られている。
クライメートXの気候リスクモデリング担当ディレクター、ジェームズ・ブレナン氏は、気候変動に関する政府間パネル（IPCC）が採用した高排出シナリオの下では、2050年までに中央ヨーロッパ全土で猛暑日が2倍、さらには3倍になる見込みだと述べた。
つまり、現在年間5～10日の猛暑を記録している地域では、1世代以内に年間20～30日の猛暑が続くことになる。
ブレナン氏はCNBCに対し、「南ヨーロッパは最も厳しい状況に直面しており、イベリア半島、イタリア南部、ギリシャの一部では猛暑日が年間40日から55日を超えると予想されている」と述べた。
「欧州のどの地域も2050年までに猛暑日が減少するとみられており、その加速は普遍的だ。しかし、すでに暴露量が最も高い地域ではリスクが最も大きく、南部では適応が最も緊急であり、最も困難なものとなっている」と同氏は付け加えた。
続きを読む
ＥＵの執行機関である欧州委員会の報道官は、同委員会が気候回復力とリスク管理のための新たな統合枠組みを近く提示すると述べた。
「気候変動が政策設計に組み込まれない限り、すべての政策の効率性と意図が気候変動によって損なわれていることは明らかだ」と欧州委員会の広報担当者は電子メールでCNBCに語った。
「したがって、エネルギー政策、インフラストラクチャー、交通政策、健康のいずれについて話しているのかに関係なく、それらの政策が実施される必要がある実際の気候条件に応じてアプローチと投資を調整できなければならない」と彼らは付け加えた。
保険会社「単独ではこの問題を解決できない」
アリアンツ・リスク・コンサルティングのレジリエンスおよび事業開発責任者のレナ・フルダウアー氏は、嵐や地震とは異なり、猛暑という課題は企業にとって「静かな大災害」であると述べた。
企業は通常、過度の暑さの期間中に機器の故障や運用効率の低下、メンテナンスやダウンタイムの増加に見舞われる可能性がありますが、サプライチェーンの混乱、送電網の負担、労働力への影響がこれらの問題をさらに悪化させる可能性があります。
フルダウアー教授は、ネイチャー・サイエンスの最近の研究を引用し、2026年6月の熱波では、ヨーロッパの854都市のほぼ半数が、イタリアのカステルテルミニで最高気温48℃を記録するなど、熱ストレスの史上最高記録を更新、またはそれに近づいていることを示した。
「産業革命以前の世界の地中海地域では気温が50℃を超えることは事実上不可能であったが、最近の気候帰属科学を用いて人為的気候変動下ではその可能性が10～1,000倍に増加した」とフルダウアー氏は電子メールでCNBCに語った。 「今世紀末までに、このような極端な現象が最も暑い場所で毎年起こる可能性があります。」
フルダウアー氏は、保険業界は社会の強靭なパートナーになる必要があると述べ、官民パートナーシップがこの分野での成功の鍵であると述べた。
「保険業界は単独でこの問題を解決することはできないが、政府や国際機関と協力して猛暑に対する拡張可能なソリューションを開発する必要がある」とフルダウアー氏は述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/01/europe-extreme-heat-climate-change-55c.html",
    publishedAt: "2026-08-01T06:58:41+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 7,
  },
  {
    id: "iran-s-overlapping-power-centers-make-en-3b2bfd2b",
    title: "Iran's overlapping power centers make ending the war more complicated",
    titleJa: "イランの権力中枢が重複しているため、戦争終結はさらに複雑になっている",
    summaryJa: "2月28日にイラン戦争が始まって以来5カ月間、戦闘が一時停止するたびに、戦争終結の複雑さが浮き彫りになった。6月17日の覚書は、ホルムズ海峡、制裁、イランの核・ミサイル計画を巡る60日間の交渉期間を開始したが、船舶に対するイランの攻撃がエスカレーションを促したため、数週間以内に決裂した。",
    bodyOriginal: `In the five months since the Iran war began on Feb. 28, each pause in fighting has underscored the complexities of ending it.
The June 17 memorandum of understanding opened a 60-day negotiating period over the Strait of Hormuz, sanctions and Iran's nuclear and missile programs, but frayed within weeks as Iranian attacks on shipping prompted escalation.
The U.S. resumed strikes for 13 consecutive nights until it paused on July 24, only for the fighting to resume on Tuesday, with strikes overnight on Wednesday and Thursday. Iran's army said on Friday it had launched attacks on strategic U.S. assets and military bases in Kuwait and Bahrain.
Whenever negotiations resume, Iran's opaque power structure — spanning the Supreme Leader, the Revolutionary Guards, civilian government, commanders and other groups — will shape not only what is agreed, but whether any deal can be enforced.
Any ceasefire would have to pass through layers of command, and the Islamic Revolutionary Guard Corps (IRGC) commanders and Tehran-aligned groups may interpret the terms differently. Attacks attributed this week to Iran-aligned Iraqi militias on Saudi oil facilities and to Yemen's Houthis on pipeline infrastructure show how groups sympathetic to Iran could widen the conflict.
Why Iran's power structure complicates a ceasefire
Attacks on commercial shipping could become an early test of Iran's wartime balance of power.
The U.S. has always emphasized it wants to see the Strait of Hormuz reopened without tolls. While Tehran's civilian government is seeking economic relief and sanctions easing, elements within the security establishment may view continued pressure in the strait as an important source of leverage.
Iran's civilian government hopes to unlock frozen funds to provide financial relief for the population of over 90 million Iranians crippled by decades of sanctions.
The government has long been undermined by the IRGC, who are "the dominant force on war and national security," Sanam Vakil, director, Middle East North Africa Program at Chatham House, told CNBC.
They operate "missiles, drones, intelligence networks and regional armed partnerships, and during active conflict its commanders can exercise considerable autonomy," she added.
"The civilian government still matters, and the president can shape diplomacy, economic policy and the work of the Supreme National Security Council, but he does not command the armed forces," Vakil continued.
Who controls Iran's military decisions?
President Masoud Pezeshkian leads Iran's civilian government but ultimate authority over national security rests with Supreme Leader Ayatollah Ali Khamenei, while the IRGC exercises significant operational autonomy.
While the Supreme Leader has the final say over national security, "he does not personally direct every tactical operation," Vakil said.
The IRGC has become Iran's dominant military and security institution, overseeing missile forces, drones, regional operations and relationships with armed groups aligned with Tehran. It answers directly to the Supreme Leader rather than the civilian government.
It exists alongside Iran's conventional military but is more powerful politically and oversees foreign operations and Iran's proxies, like Hezbollah. Crucially, these proxies export the ideology of the Islamic Republic through weapons, training and funding. The IRGC also oversees Iran's internal security through the Basij paramilitary force.
What it means for negotiations
This week marked the end of a temporary halt in hostilities, after the U.S. and Saudi Arabia struck Iran-backed militias in Iraq. Iran launched a surprise missile attack on U.S. forces in Jordan, all of which were intercepted according to the U.S. military.
The strike underscored how quickly the conflict can expand even as diplomats attempt to restart negotiations.
Earlier this week, diplomats sought to give peace talks "some space." Iran's Foreign Ministry spokesperson, Esmail Baghaei, on Monday said Iran currently has "no negotiations with the United States."
Amos Hochstein, former senior advisor to President Joe Biden and managing partner at TWG Global, told CNBC: "Iran has no intention of returning to the status quo before the war."
"A ceasefire is not a switch that can simply be flipped. Iran wants to translate battlefield realities into political gains before locking itself into a new status quo," Alex Vatanka, senior fellow at the Middle East Institute, told CNBC.`,
    bodyJa: `2月28日にイラン戦争が始まって以来5カ月間、戦闘が一時停止するたびに、戦争終結の複雑さが浮き彫りになった。
6月17日の覚書は、ホルムズ海峡、制裁、イランの核・ミサイル計画を巡る60日間の交渉期間を開始したが、船舶に対するイランの攻撃がエスカレーションを促したため、数週間以内に決裂した。
米国は7月24日に一時停止するまで13夜連続でストライキを再開したが、火曜日に戦闘が再開され、水曜日と木曜日には夜間ストライキが行われた。イラン軍は金曜日、クウェートとバーレーンにある米国の戦略的資産と軍事基地への攻撃を開始したと発表した。
交渉が再開されるたびに、最高指導者、革命防衛隊、文民政府、司令官、その他のグループにまたがるイランの不透明な権力構造が、合意内容だけでなく、協定を履行できるかどうかも左右することになる。
停戦には複数の指揮命令を通過する必要があり、イスラム革命防衛隊（IRGC）の司令官とイランと連携するグループは条件を異なる解釈をする可能性がある。今週、サウジアラビアの石油施設に対するイランと同盟関係にあるイラク民兵組織による攻撃と、パイプラインインフラに対するイエメンのフーシ派による攻撃は、イランに同情的なグループがいかに紛争を拡大する可能性があるかを示している。
イランの権力構造が停戦を複雑にする理由
商業船舶への攻撃は、戦時中のイランの力の均衡を試す初期の試練となる可能性がある。
米国はホルムズ海峡が通行料なしで再開されることを望んでいると常に強調してきた。テヘラン文民政府は経済救済と制裁の緩和を求めているが、治安体制内の勢力は海峡における継続的な圧力を重要なてことみなしている可能性がある。
イラン文民政府は、数十年にわたる制裁によって不自由な状態にある9,000万人以上のイラン国民に経済的救済を提供するために、凍結された基金を解除したいと考えている。
チャタム・ハウスの中東北アフリカ・プログラム責任者のサナム・ヴァキル氏はCNBCに対し、政府は「戦争と国家安全保障における支配的な勢力」である革命防衛隊によって長い間弱体化されてきたと語った。
彼らは「ミサイル、無人偵察機、諜報ネットワーク、地域的な軍事提携を運用しており、紛争が進行している間、指揮官はかなりの自治権を行使できる」と付け加えた。
「文民政府は依然として重要であり、大統領は外交、経済政策、国家安全保障最高会議の活動を決定することができるが、軍を指揮することはできない」とバキル氏は続けた。
イランの軍事的決定をコントロールしているのは誰ですか?
マスード・ペゼシキアン大統領はイラン文民政府を率いているが、国家安全保障に関する最終的な権限は最高指導者ハメネイ師にあり、革命防衛隊は大幅な運営上の自主権を行使している。
最高指導者は国家安全保障について最終決定権を持っているが、「あらゆる戦術作戦を個人的に指揮するわけではない」とバキル氏は語った。
革命防衛隊はイランの有力な軍事・安全保障機関となっており、ミサイル部隊、無人機、地域作戦、テヘランと同盟関係にある武装集団との関係を監督している。それは文民政府ではなく最高指導者に直接答えます。
それはイランの従来の軍隊と並行して存在するが、政治的にはより強力であり、外国の作戦やヒズボラのようなイランの代理組織を監督している。重要なのは、これらの代理人が武器、訓練、資金提供を通じてイスラム共和国のイデオロギーを輸出していることです。革命防衛隊はまた、民兵組織バスィージを通じてイラン国内の安全保障も監督している。
交渉にとって意味があること
米国とサウジアラビアがイラクでイラン支援の民兵組織を攻撃したことを受け、今週、敵対行為の一時停止が終了した。イランはヨルダン駐留米軍にミサイル奇襲攻撃を開始したが、米軍によると全て迎撃された。
このストライキは、外交官が交渉を再開しようとしているにもかかわらず、紛争がいかに急速に拡大する可能性があるかを浮き彫りにした。
今週初め、外交官らは和平交渉に「ある程度の余地」を与えるよう求めた。イラン外務省のエスマイル・バガエイ報道官は月曜、イランは現在「米国と交渉を行っていない」と述べた。
ジョー・バイデン大統領の元上級顧問でTWGグローバルのマネージングパートナーであるアモス・ホッホシュタイン氏はCNBCに対し、「イランには戦前の現状に戻るつもりはない」と語った。
中東研究所の上級研究員アレックス・バタンカ氏はCNBCに対し、「停戦は簡単に切り替えられるスイッチではない。イランは自らを新たな現状に固定する前に、戦場の現実を政治的利益に変えたいと考えている」と語った。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/01/iran-ceasefire-power-structure.html",
    publishedAt: "2026-08-01T06:52:42+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 5,
  },
  {
    id: "fifa-scraps-controversial-world-cup-inve-a09cd518",
    title: "Fifa scraps controversial World Cup investment plan",
    titleJa: "FIFA、物議を醸したワールドカップへの投資計画を撤回",
    summaryJa: "FIFA、物議を醸したワールドカップへの投資計画を撤回- 公開されました",
    bodyOriginal: `Fifa scraps controversial World Cup investment plan
- Published
Fifa president Gianni Infantino says he has scrapped the controversial plan to sell off stakes in the governing body's competitions to private investors following widespread opposition.
Infantino said it had become clear the project had "created divisions" that are "no longer in the interest" of its original objective.
The Swiss official added: "As a result, this proposal will not proceed."
Infantino had offered Fifa's 211 member associations $40m (£30m) if they backed a proposal for private investment in its tournaments, including the men's and women's World Cups.
However, Uefa - which governs European football - responded by voting to boycott World Cups if the plans went ahead, and other governing bodies also voiced their opposition.
Infantino on the brink? Who might replace him if he goes?
- Published8 hours ago
On Friday, Fifa's chief operating officer Kevin Lamour said the governing body's own administration had been "deceived" about the project.
Carlos Cordeiro - Infantino's senior adviser on global strategy and governance - resigned over the matter, saying the proposal was "a bad deal for football" and would "mortgage football's future".
That came after two other major confederations spoke out against the plans.
Concacaf, which governs football in North, Central America and the Caribbean - and hosted this summer's World Cup - said its members "rejected" the proposal, with sources saying the vast majority of associations from the region are losing, or have lost, faith in Infantino.
The Asian Football Confederation (AFC) said it stood in "solidarity" with Uefa and Concacaf, while UK Prime Minister Andy Burnham said Infantino was "the wrong man" to lead Fifa.
It means Infantino is now under immense pressure as he seeks re-election for a fourth term as president at the Fifa Congress in March.
"Our purpose has always been - and will always be - to unite and improve," the 56-year-old added in a statement.
"Moving forward, my intent is to bring all interested parties back together in the coming days and weeks in the spirit of shared interest in our game."
AFC president Sheikh Salman bin Ebrahim Al Khalifa welcomed the withdrawal of the plan.
"The future of global football must always be shaped through proper consultation, collective dialogue and respect for the established governance structures of our game," he said.
Infantino's plans were unlikely to pass
Despite rejections from Uefa and Concacaf, Fifa initially vowed to continue with its proposals on Friday, saying "nobody is selling football".
However, Infantino would have needed the backing of a majority of member associations to pass the plans - meaning 106 of its 211 members needed to vote in favour.
That became unlikely when the AFC joined Uefa and Concacaf in opposing the plans.
Uefa has 55 votes, Concacaf has 35 and Asia has 46.
If all member associations backed the stance of their governing body, that would have meant 136 nations voting against Infantino's plan.
Governing bodies in Africa (CAF) and Oceania (OFC) had said they would discuss Fifa's plan in August.
Conmebol - South American football's governing body - said it had asked Fifa for "additional information and clarifications" regarding the "scope, structure, governance and possible effects" of the proposals.
What was Infantino's plan?
Fifa and Infantino wanted to create a commercial subsidiary to run its main events, including its World Cups, with external investors able to buy stakes in it.
It said it would "invite third parties to make minority, non-controlling investments" in a new subsidiary - Fifa Forward Enterprise (FFE).
Infantino set a deadline of 19 September for football federations to accept his plans if they wanted to access an initial $20m (£15m).
A 25-page document created by investment bank JP Morgan laid out how Fifa's tournaments would expand to hit an estimated increased payout of 24m euros (£20.5m) per member association in the 2035-2039 cycle.
It mentioned "new business initiatives" and "attracting top talent with incentive-driven compensation".
The World Cup is described in it as the "most widely viewed" sporting event but Fifa, by contrast, is said to be "under-monetised".
There was no mention in the document of the women's game.
Fifa said Thrive Eternal was expected to lead the proposed investor group for FFE.
Thrive is an American venture capital firm founded by Joshua Kushner - the brother of US President Donald Trump's son-in-law Jared.
Trump - addressing the proposals for the first time on Friday - said he had not spoken to Infantino about the plans.
The two have developed a close relationship since Trump assumed office for a second time in 2025.
Can Infantino survive?
Infantino became Fifa president in 2016 when he beat AFC president Sheikh Salman by 115 votes to 88.
Fifa's next president will be confirmed at the organisation's 77th Congress in Morocco next March. Candidates have until 18 November to put their names forward.
Prior to this week, it had been anticipated Infantino would be re-elected unopposed. Associations around the world, including some in Europe, had already confirmed their intention to vote for him.
It remains to be seen if the events of this week will result in a mass withdrawal of their support.
In his statement, Infantino reiterated his plan was designed to strengthen member associations, "especially in countries where support is most needed" - but the proposal clearly created division within Fifa itself.
Cordeiro, who represented Fifa on the White House taskforce for the 2026 World Cup, is the first senior figure at the governing body to resign over the plans.
In a lengthy statement, Cordeiro said he "unequivocally" opposed the plans and "did not accept the proposition" Fifa needed outside investors to "unlock greater value". He added he had no involvement in the proposal.
It is understood Infantino even left some of Fifa's eight vice-presidents in the dark about his plan, which it is claimed could have raised $10bn (£7.5bn).
Lamour called it "the project of one person" and said "a president must bring people together, unite them, and inspire them" but this was "the opposite".
"If that means I lose my job, then so be it," he added. "I will understand and respect that decision. At least I'll sleep well tonight."
'Bruised Infantino makes humiliating climbdown' - analysis
As reports first emerged on Tuesday about Fifa's plans, a senior figure in English football told me the story would be as big, if not bigger, than the European Super League.
I do not think he felt it would unravel in quite the same way - but the idea only took two days longer than Super League to be scrapped.
There have been no fan protests on the streets, but animosity towards the plans was evident from the moment the likely implications dawned on the game.
Infantino is an astute politician. He knew the numbers were against him and has decided to cut his losses now rather than risk further personal damage.
It is a humiliating moment - but for Infantino, the real work starts now. He has some significant bridge building to do.
In their statement - which, in its own way, was just as damning as Uefa's threatened boycott - the Asian Football Confederation (AFC) pointed to a much wider issue.
"The AFC considers this issue extends far beyond a single proposal," it read. "Rather, it has exposed fundamental weaknesses in Fifa's consultation and decision-making processes that must now be addressed."
Infantino cannot just walk away from the past few days as though nothing has happened.
There are a lot of angry people in football who feel he has been acting beyond his power - just as the organisation's chief operating officer suggested on Friday.
The immediate crisis has passed. Over the short to medium term, it will be fascinating to see whether Infantino can restore his reputation.
Timeline
Monday, 27 July
In a 15-slide post on his personal Instagram account, Fifa president Gianni Infantino tells his critics to "meditate, pray or watch a football match" instead of "spreading hate and false rumours" about his leadership.
Tuesday, 28 July
The Times and Financial Times report Infantino's plan to sell stakes in its competitions, including the World Cup, to private investors.
Uefa publishes its first statement saying football is "not Fifa's to sell", and accuses Fifa of 'crossing a line'.
Fifa issues statement confirming the plans.
Wednesday, 29 July
Infantino writes to all 211 Fifa member associations saying they will receive $40m (£30m) if they back his plans, but must do so by 19 September if they want to access an initial $20m (£15m).
Uefa says Fifa "cannot continue to use our sport to enrich themselves and their friends".
Thursday, 30 July
Uefa's 55 member associations vote to boycott World Cups if Infantino's plan goes ahead.
Concacaf says its 41 member associations also "rejected" the proposal.
Friday, 31 July
Fifa says "nobody is selling football" and vows to continue with the plan.
Asian Football Confederation (AFC) says it "stands in solidarity" with Uefa and Concacaf, though stops short of unequivocally rejecting Infantino's proposal.
A senior adviser to Infantino, Carlos Cordeiro, resigns, citing "a bad deal for football" that would "mortgage football's future".
UK Prime Minister Andy Burnham says Infantino is the "wrong man" to lead Fifa.
Fifa's chief operating officer Kevin Lamour says the governing body's own administration has been "deceived" about the project.
Saturday, 1 August
Infantino releases statement at about 00:30 BST on Saturday, saying the plan will not proceed.
Related topics
- Published8 June
- Published8 June`,
    bodyJa: `FIFA、物議を醸したワールドカップへの投資計画を撤回
- 公開されました
FIFAのジャンニ・インファンティーノ会長は、広範な反対を受けて、運営団体の競技会の株式を個人投資家に売却するという物議を醸した計画を撤回したと述べた。
インファンティーノ氏は、このプロジェクトが当初の目的とは「もはや利益にならない」「分断を生み出した」ことが明らかになったと述べた。
スイス当局者は「結果として、この提案は進められない」と付け加えた。
インファンティーノ氏は、FIFA加盟211協会に対し、男女ワールドカップを含む大会への民間投資の提案を支持する場合には4,000万ドル（3,000万ポンド）を提供すると提案していた。
しかし、欧州サッカーを統括するUEFAは、この計画が実行される場合にはワールドカップをボイコットする投票で応じ、他の統括団体も反対を表明した。
インファンティーノは瀬戸際？彼が去った場合、誰が彼の代わりをするでしょうか？
- 8 時間前に公開
金曜日、FIFAの最高執行責任者ケビン・ラムール氏は、FIFA運営当局がこのプロジェクトについて「だまされていた」と述べた。
インファンティーノ氏の世界戦略とガバナンスに関する上級顧問であるカルロス・コルデイロ氏は、この提案は「サッカーにとって悪い取引」であり、「サッカーの将来を抵当に入れることになる」として、この問題をめぐって辞任した。
これは、他の2つの主要な連盟がこの計画に反対を表明した後のことだった。
北、中米、カリブ海地域のサッカーを統括し、今夏のワールドカップを主催するコンカカフは、加盟団体がこの提案を「拒否した」と述べ、関係者によると、この地域のサッカー協会の大半がインファンティーノ氏への信頼を失いつつある、あるいは失っているという。
アジアサッカー連盟（AFC）はUEFAとコンカカフと「連帯」すると表明し、英国のアンディ・バーナム首相はインファンティーノ氏がFIFAを率いるには「間違った人物」だと述べた。
これは、3月のFIFA総会で会長として4期目の再選を目指すインファンティーノ氏が現在、計り知れないプレッシャーにさらされていることを意味する。
「私たちの目的はこれまでも、そしてこれからも、団結して改善することだ」と56歳の彼は声明で付け加えた。
「今後、私の意図は、私たちのゲームに対する共通の関心の精神に基づいて、今後数日から数週間以内にすべての関係者を再び一堂に会させることです。」
AFC会長シェイク・サルマン・ビン・エブラヒム・アル・ハリファは計画の撤回を歓迎した。
「世界のサッカーの未来は、常に適切な協議、集団的な対話、そして確立されたサッカーの統治構造の尊重を通じて形作られなければならない」と同氏は語った。
インファンティーノの計画が通る可能性は低い
ＵＥＦＡとコンカカフからの拒否にもかかわらず、ＦＩＦＡは当初、金曜日に「誰もサッカーを売り込んでいない」として、提案を続行することを誓った。
しかし、インファンティーノがこの計画を可決するには、加盟団体の過半数の支持が必要だった。つまり、211人の会員のうち106人が賛成票を投じる必要があった。
AFCがUEFAとコンカカフに加わって計画に反対したことで、その可能性は低くなった。
UEFAは55票、コンカカフは35票、アジアは46票を獲得している。
もし全加盟協会が統括団体の立場を支持していれば、136カ国がインファンティーノ氏の計画に反対票を投じたことになる。
アフリカ（CAF）とオセアニア（OFC）の統治機関は、FIFAの計画について8月に協議すると発表していた。
南米サッカーの統括団体であるコンメボルは、提案の「範囲、構造、ガバナンス、考えられる影響」に関する「追加情報と説明」をFIFAに求めたと発表した。
インファンティーノの計画は何でしたか？
FIFAとインファンティーノは、ワールドカップを含む主要イベントを運営するための商業子会社を設立し、外部投資家がその株式を購入できるようにしたいと考えていた。
同社は、新しい子会社であるFIFAフォワードエンタープライズ（FFE）に対して「少数株主非支配投資を行うよう第三者を招待する」と述べた。
インファンティーノ氏は、最初の2,000万ドル（約1,500万ポンド）の資金にアクセスしたい場合、サッカー連盟が彼の計画を受け入れる期限を9月19日と設定した。
投資銀行JPモルガンが作成した25ページの文書には、2035年から2039年のサイクルで加盟団体当たり推定2,400万ユーロ（約2,050万ポンド）の増額を達成するためにFIFAのトーナメントがどのように拡大されるかが示されている。
「新たな事業への取り組み」と「インセンティブ主導の報酬による優秀な人材の獲得」について言及した。
その中でワールドカップは「最も広く視聴されている」スポーツイベントであるとされているが、対照的にFIFAは「収益化が不十分」だと言われている。
文書には女子の試合に関する言及はなかった。
FIFAは、スライブ・エターナルがFFEの提案された投資家グループを率いることが期待されていると述べた。
Thrive は、ドナルド・トランプ米大統領の義理の息子ジャレッドの弟であるジョシュア・クシュナーによって設立された米国のベンチャーキャピタル会社です。
トランプ大統領は金曜日に初めてこの提案について言及し、計画についてインファンティーノ氏とは話していないと述べた。
トランプ氏が2025年に二度目の大統領に就任して以来、両者は緊密な関係を築いてきた。
インファンティーノは生き残ることができるのか？
インファンティーノ氏は2016年にAFC会長シェイク・サルマン氏を115票対88票で破り、FIFA会長に就任した。
FIFAの次期会長は来年3月にモロッコで開催される第77回大会で承認される予定だ。候補者は11月18日までに名乗りを上げなければならない。
今週まではインファンティーノ氏が無投票で再選されると予想されていた。ヨーロッパの一部を含む世界中の協会はすでに彼に投票する意向を確認していた。
今週の出来事が彼らの支持の大量撤退につながるかどうかはまだ分からない。
インファンティーノ氏は声明の中で、自身の計画が「特に支援を最も必要としている国」で加盟協会を強化することを目的としていると繰り返したが、この提案は明らかにFIFA内部に分裂を生み出した。
2026年ワールドカップのホワイトハウス対策委員会でFIFAの代表を務めたコルデイロ氏は、この計画を巡って辞任した理事会の幹部としては初めてとなる。
コルデイロ氏は長い声明の中で、この計画に「明白に」反対し、FIFAが「より大きな価値を引き出す」ために外部投資家を必要とする「提案を受け入れなかった」と述べた。同氏は、この提案には関与していないと付け加えた。
インファンティーノ氏は、FIFAの8人の副会長の一部にも自分の計画について黙らせたとされており、その計画により100億ドル（約7500億円）を調達できる可能性があると主張されている。
ラムール氏はこれを「一人の人間のプロジェクト」と呼び、「大統領は人々を団結させ、団結させ、鼓舞しなければならない」と述べたが、これは「逆」だった。
「それが私が仕事を失うことを意味するなら、それはそれでいい」と彼は付け加えた。 「私はその決定を理解し、尊重します。少なくとも今夜はよく眠れます。」
「傷ついたインファンティーノが屈辱的なクライムダウンをする」 - 分析
火曜日にFIFAの計画に関する報道が初めて出たとき、イングランドサッカー界の幹部は、この話は欧州スーパーリーグと同等、もしくはそれ以上に大きなものになるだろうと私に語った。
彼はそれがまったく同じ方法で解決するとは思っていなかったとは思いますが、このアイデアが廃止されるまでにスーパーリーグよりも2日だけ長くかかっただけでした。
路上でファンの抗議活動は起きていないが、試合に影響が及ぶ可能性が生じた瞬間から、この計画に対する敵意は明らかだった。
インファンティーノは聡明な政治家である。彼は数字が自分にとって不利であることを知っており、これ以上個人的な損害を被るリスクを冒すよりも、今すぐ損失を削減することに決めました。
それは屈辱的な瞬間だが、インファンティーノにとって本当の仕事はこれから始まる。彼には重要な橋を建設しなければならないことがあります。
アジアサッカー連盟（AFC）は、その声明の中で――それはある意味、UEFAのボイコット脅しと同じくらいひどいものだった――の中で、より広範な問題を指摘した。
「AFCは、この問題は単一の提案をはるかに超えたものであると考えている」と書かれている。 「むしろ、これはFIFAの協議と意思決定のプロセスにおける根本的な弱点を露呈させたものであり、今後対処しなければならない」
インファンティーノは、何事もなかったかのように過去数日間をただ立ち去ることはできない。
サッカー界には、サッカー協会の最高執行責任者が金曜日に示唆したように、彼が権限を超えた行動をとっていると感じて怒っている人がたくさんいる。
差し迫った危機は去った。短期から中期的には、インファンティーノが評判を回復できるかどうかに注目が集まるだろう。
タイムライン
7月27日月曜日
FIFA会長のジャンニ・インファンティーノは、自身のインスタグラムアカウントに投稿した15枚のスライドの中で、自身のリーダーシップについて「憎しみや虚偽の噂を広める」のではなく、「瞑想したり、祈ったり、サッカーの試合を観戦したりする」よう批判者たちに呼びかけている。
7月28日火曜日
タイムズ紙とフィナンシャル・タイムズ紙は、インファンティーノがワールドカップを含む自社大会の株式を個人投資家に売却する計画を報じている。
UEFAはサッカーは「FIFAが売るものではない」との初の声明を発表し、FIFAが「一線を越えている」と非難した。
FIFAは計画を確認する声明を発表。
7月29日水曜日
インファンティーノ氏は、全211のFIFA加盟協会に書簡を送り、同氏の計画を支持すれば4,000万ドル（約3,000万ポンド）を受け取るが、最初の2,000万ドル（約1,500万ポンド）を獲得するには9月19日までにそうする必要があると述べている。
UEFAは、FIFAが「自分たちとその友人たちを豊かにするために我々のスポーツを利用し続けることはできない」と述べた。
7月30日（木）
インファンティーノ氏の計画が実行された場合、UEFA加盟55協会はワールドカップのボイコットに投票する。
コンカカフは、加盟41団体もこの提案を「拒否」したとしている。
7月31日金曜日
FIFAは「誰もサッカーを売り込んでいない」と述べ、計画を継続すると誓った。
アジアサッカー連盟（AFC）は、インファンティーノ氏の提案を明確に拒否するまでには至っていないものの、UEFAとコンカカフと「連帯する」としている。
インファンティーノ氏の上級顧問、カルロス・コルデイロ氏が辞任し、「サッカーにとって悪い取引」であり、「サッカーの将来を抵当に入れる」ことになると述べた。
英国のアンディ・バーナム首相は、インファンティーノ氏はFIFAを率いるには「間違った人物」だと述べた。
FIFAの最高執行責任者ケビン・ラムール氏は、FIFA運営当局がこのプロジェクトについて「だまされていた」と述べた。
8月1日土曜日
インファンティーノ氏は土曜日午前０時３０分（英国標準時間）頃に声明を発表し、計画は続行しないと述べた。
関連トピック
- 6 月 8 日発行
- 6 月 8 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/sport/football/articles/czekr6kn58po?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-01T05:42:31+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/6843/live/935b3ad0-8d6c-11f1-a7ab-8b30adf0800a.jpg",
    readTime: 10,
  },
  {
    id: "israeli-west-bank-settler-tells-bbc-atta-fb847163",
    title: "Israeli West Bank settler tells BBC attacks on Palestinians are justified as revenge",
    titleJa: "イスラエルヨルダン川西岸入植者、パレスチナ人への攻撃は報復としてBBCに正当化されると語る",
    summaryJa: "イスラエルヨルダン川西岸入植者、パレスチナ人への攻撃は報復としてBBCに正当化されると語る- 公開されました",
    bodyOriginal: `Israeli West Bank settler tells BBC attacks on Palestinians are justified as revenge
- Published
The Israeli settler outpost of Havat Gilad, deep inside the occupied West Bank, is spread across several hilltops, its sheds and simple block houses clearly visible from neighbouring Palestinian villages.
Last weekend saw a wave of settler attacks on Palestinian villages in the area, after an Israeli security guard from Havat Gilad was killed during a confrontation between Palestinians and Israelis in the village of Tal last Friday.
Four Palestinians and an Israeli soldier were also killed in the incident, the original cause of which is disputed.
After spending the weekend speaking to Palestinians around Havat Gilad, we drove into the outpost itself, to ask one of its residents about the violence, and the expansion of Israeli settlements in the West Bank.
It is rare for an international media organisation like the BBC to be allowed into these outposts. But on this occasion, Yehuda Shimon, a lawyer with an organisation that represents Israelis arrested for violence against Palestinians, agreed to speak.
He told me that attacks on Palestinian villages last weekend were justified as revenge for the killing of the outpost's security guard.
"I think now, after they killed one Israeli, we need to kill all the people in Tal and Sarra, even Jit and Farata," he said, naming the Palestinian villages closest to the outpost.
I put it to him that he was equating one Jewish life with hundreds or even thousands of Palestinian lives.
"No," he said, "millions. One Jewish life, it's 10 million [Palestinians]."
BBC speaks to Palestinians targeted by Israeli settlers
- Published5 days ago
Challenged on the racism of his statement, he did not deny it.
"Yes, I know," he replied. "But this is the truth, because God chose us [and] because of this you are jealous."
These extreme views – rejected by many Israelis – are crucial to understanding the conflict playing out across the West Bank, as Israel's settlements and outposts expand, and violence against Palestinians grows.
Many settlers here, especially in unauthorised outposts like Havat Gilad, built without Israeli planning permission or legal oversight, see the West Bank as land given to the Jewish people by God.
Both Israel's official settlements and its unauthorised outposts are illegal under international law.
Havat Gilad was established more than 20 years ago, in memory of an Israeli security officer murdered by Palestinians – a loosely scattered collection of houses with a vineyard perched high on one hill.
When we visit there is a row of newly burned buildings near the entrance – the result, Shimon says, of an arson attack by Palestinians. Israeli media reported that police were treating the fire as accidental, caused by cigarette butts thrown from a car window.
Israel's government has previously said it would legalise Havat Gilad. The Israeli organisation Peace Now, which monitors settlements, says it has been unable to do so because much of the land it is built on is recognised by Israel as privately owned by Palestinians, and that the government has instead designated a patch of land to the south of the outpost as state land, to enable settlers to build there.
These issues were dismissed by Shimon, who said international law was irrelevant, because the Bible gave Jews their right to West Bank land.
He criticised Israel's government and army for failing to back Jewish claims to the land strongly enough, despite a vast expansion in settlements and outposts under the current Israeli government, and the presence of far-right religious-nationalist ministers around the cabinet table who are driving it.
And he criticised the Israeli army for not using lethal force often enough against Palestinians, during confrontations with Israeli settlers.
"The Israeli government and the Israeli army, they like the United Nations – if Palestinians come and Jewish people come, [they] don't kill the Palestinians, [they] just separate the people," he said. "Afterwards, because they don't kill Palestinians, the Palestinians kill us."
The figures for numbers killed and injured in the West Bank contradict his statement.
The UN Office for the Co-ordination of Humanitarian Affairs (OCHA), which tracks these numbers, says 64 Palestinians were killed in the West Bank from the beginning of this year until 20 July - 18 of them during settler attacks.
At least 12 of those were killed by settlers, three by Israeli forces, and in three other cases it is not yet clear whether soldiers or settlers were responsible. It says one Israeli was killed over the same period.
The number of injuries inflicted by settlers during these attacks has risen sharply to more than three per day this year, OCHA says.
An Israeli soldier who served in the West Bank recently told me he only ever saw fear on the faces of Palestinians, and "never on the face of any Jew that lived there".
Challenged on this, Shimon accused the global media of "buying the narrative of the Palestinians", alleging that every Palestinian in the area owned two guns and was preparing to repeat the Hamas-led attacks of 7 October 2023.
"If we don't wake up and drop them all from this area, from all areas of Israel, even Gaza too, they will come back, and come back [again]," he said.
The conflict between Israeli settlers and Palestinian residents in the West Bank is not an equal one.
Israel occupied the territory during the 1967 Middle East war, and has since built hundreds of settlements and outposts there, housing more than half a million Jews.
Those settlers are protected by Israel's powerful army, and also by local armed security units which are staffed by settlers themselves.
Israelis in the West Bank are still subject to Israel's civilian law and enjoy widespread freedom of movement, while Palestinians are subject to Israel's military occupation and military courts, and are tightly restricted by road closures and checkpoints – a system described by some prominent human rights groups as "apartheid".
Israel has rejected that label as "absurd and distorted".
Asked about the Palestinian residents of the West Bank, Shimon laid out three options: live quietly under Israeli rule and ownership of the land; voluntarily emigrate to other Arab or Muslim nations; or "if you don't want to make peace with us, and you don't want to get out, I don't have a choice: I must kill you, and I kill you all," he said.
This vision from one radical settler seems strikingly close to a plan outlined by Israel's now-Finance Minister, Bezalel Smotrich, in a blueprint published in 2017, before he joined the government.
In it, he presented a plan for the West Bank in which Palestinians would be told to give up any struggle for a Palestinian state and live quietly under Israeli rule. Those who had "difficulty letting go of national ambitions" could leave the territory, he said at the time, and those who stayed and continued armed struggle against Israel would be killed by Israel's armed forces.
More recently, while in government, he has pushed for the "voluntary migration" of Palestinians from the Gaza Strip and the re-settlement of Israelis there, and has described Palestinian identity as "an invention".
One Palestinian living within sight of Havat Gilad told me she watched the outpost from her window constantly, for signs of an imminent settler attack.
Many Palestinians we spoke to said they felt unprotected – that Israel's occupying army was focused on protecting Israeli settlers, that their own security forces were absent, and that the international community had abandoned them.
"It's a very bad situation," one told me. "Europe is busy, America is occupied with Iran, China doesn't care, Russia is fighting Ukraine, the UN are finished and the Arabs have internal problems. We don't know what we can do."
From Havat Gilad, the nearest Palestinian villages are less than a mile away, but the landscape here is divided by Israeli law, Israeli power and mutual hostility.
Additional reporting by Oren Rosenfeld and Rebecca Hartmann`,
    bodyJa: `イスラエルヨルダン川西岸入植者、パレスチナ人への攻撃は報復としてBBCに正当化されると語る
- 公開されました
占領下のヨルダン川西岸の奥深くにあるハヴァト・ギラドのイスラエル入植者前哨基地は、いくつかの丘の上に広がっており、その小屋や簡素なブロックハウスは、近隣のパレスチナ人の村からはっきりと見える。
先週金曜日にタル村で起きたパレスチナ人とイスラエル人の衝突でハヴァト・ギラドのイスラエル警備員が殺害されたことを受け、先週末には同地域のパレスチナ人の村々に対する入植者の襲撃が相次いだ。
この事件ではパレスチナ人4人とイスラエル兵1人も死亡したが、そもそもの原因については議論がある。
週末をハヴァト・ギラド周辺でパレスチナ人と話すのに費やした後、私たちは前哨基地​​自体に車で行き、住民の一人に暴力とヨルダン川西岸でのイスラエル人入植地の拡大について尋ねた。
BBC のような国際的な報道機関がこれらの前哨基地への立ち入りを許可されるのは珍しいことです。しかし今回は、パレスチナ人に対する暴力で逮捕されたイスラエル人の代理人団体の弁護士イェフダ・シモン氏が講演に同意した。
彼は私に、先週末のパレスチナ人の村への攻撃は、前哨基地の警備員殺害に対する報復として正当化されたと語った。
同氏は、前哨基地に最も近いパレスチナ人の村を挙げ、「イスラエル人１人を殺害した今、タルとサラの住民全員、さらにはジットとファラタも殺害する必要があると思う」と語った。
私は彼に、一人のユダヤ人の命を何百人、あるいは何千人のパレスチナ人の命と同一視しているのではないかと言いました。
「いいえ、何百万人です。ユダヤ人一人の命なら、（パレスチナ人）1,000万人です。」と彼は言った。
BBCがイスラエル入植者の標的となったパレスチナ人に語りかける
- 5 日前に公開
自分の発言が人種差別的であると異議を唱えられたが、彼はそれを否定しなかった。
「はい、知っています」と彼は答えた。 「しかし、これが真実です。なぜなら、神は私たちを選んだからです。そして、そのためにあなたは嫉妬しているのです。」
イスラエルの入植地や前哨基地が拡大し、パレスチナ人に対する暴力が増大する中、多くのイスラエル人が拒否しているこれらの極端な見解は、ヨルダン川西岸全域で展開している紛争を理解する上で極めて重要である。
ここの入植者の多くは、特にイスラエルの計画許可や法的監視なしに建設されたハヴァト・ギラドのような無許可の前哨基地では、ヨルダン川西岸を神がユダヤ人に与えた土地とみなしている。
イスラエルの公式入植地と無許可の前哨基地はいずれも国際法上違法である。
ハヴァト ギラドは、パレスチナ人に殺害されたイスラエル治安当局者を追悼するために 20 年以上前に設立されました。丘の上の高い丘にブドウ畑があり、緩やかに点在する家々が集まった建物です。
私たちが訪れたとき、入り口付近には新しく焼けた建物が並んでいたが、これはパレスチナ人による放火の結果だとシモン氏は言う。イスラエルのメディアは、警察は車の窓から投げ込まれたタバコの吸い殻が原因の事故火災として処理していると報じた。
イスラエル政府は以前、ハヴァト・ギラドを合法化すると述べていた。入植地を監視するイスラエルの組織ピース・ナウは、入植地が建設されている土地の多くがパレスチナ人の私有地であるとイスラエルが認識しているため、入植地を監視することができず、代わりに政府が前哨基地の南の一区画を国有地として指定し、入植者がそこに建設できるようにしたと述べた。
これらの問題は、聖書がユダヤ人にヨルダン川西岸の土地に対する権利を与えているため、国際法は無関係であるとシモンによって却下された。
同氏は、現在のイスラエル政府の下で入植地や前哨基地が大幅に拡大し、それを推進している極右の宗教国家主義者の閣僚が閣僚の周りに存在しているにもかかわらず、その土地に対するユダヤ人の主張を十分に強力に支持できていないとしてイスラエル政府と軍を批判した。
そして、イスラエル入植者との衝突の際、パレスチナ人に対して十分な頻度で致死的な武力を行使しなかったとしてイスラエル軍を批判した。
「イスラエル政府とイスラエル軍は国連が好きだ。もしパレスチナ人が来てユダヤ人が来ても、彼らはパレスチナ人を殺さない。ただ人々を分離するだけだ」と彼は語った。 「その後、彼らがパレスチナ人を殺さないので、パレスチナ人が私たちを殺すことになります。」
ヨルダン川西岸での死傷者数の数字は彼の声明と矛盾している。
これらの数字を追跡している国連人道問題調整事務所（OCHA）によると、今年初めから7月20日までにヨルダン川西岸で64人のパレスチナ人が殺害され、そのうち18人は入植者の襲撃により殺害されたという。
このうち少なくとも12人は入植者によって殺害され、3人はイスラエル軍によって殺害され、他の3件については兵士と入植者のどちらが犯したのかはまだ明らかになっていない。同じ期間にイスラエル人１人が殺害されたとしている。
OCHAによると、これらの攻撃で入植者が負った負傷者数は、今年1日あたり3人以上に急増している。
ヨルダン川西岸で勤務していたイスラエル兵は最近、パレスチナ人の顔に恐怖を感じたことしかなく、「そこに住んでいたユダヤ人の顔には一度も見たことがない」と私に語った。
これに異議を唱えたシモン氏は、この地域のパレスチナ人全員が銃２丁を所有し、２０２３年１０月７日のハマス主導の攻撃を繰り返す準備をしていると主張し、世界メディアが「パレスチナ人の言い分を買っている」と非難した。
「私たちが目を覚まして、この地域、イスラエル全土、さらにはガザ地区からも彼ら全員を追い出さなければ、彼らは戻ってきて、また戻ってくるでしょう」と彼は語った。
ヨルダン川西岸のイスラエル人入植者とパレスチナ住民の間の紛争は対等なものではない。
イスラエルは1967年の中東戦争中にこの領土を占領し、それ以来数百の入植地や前哨基地を建設し、50万人以上のユダヤ人が居住している。
これらの入植者はイスラエルの強力な軍隊と、入植者自身が配置された地元の武装治安部隊によって保護されている。
ヨルダン川西岸のイスラエル人は依然としてイスラエルの民法に服従し、広範な移動の自由を享受しているが、パレスチナ人はイスラエルの軍事占領と軍事法廷の対象となっており、道路封鎖と検問所によって厳しく制限されており、このシステムを一部の著名な人権団体は「アパルトヘイト」と表現している。
イスラエルはそのレッテルを「不条理で歪んだもの」として拒否した。
ヨルダン川西岸のパレスチナ住民について質問されたシモン氏は、3つの選択肢を挙げた。イスラエルの統治と土地の所有権の下で静かに暮らすこと。他のアラブ諸国またはイスラム諸国に自発的に移住する。あるいは、「もしあなたが私たちと和解したくない、そして出て行きたくないのなら、私には選択肢がありません。私はあなたを殺すしかありません、そして私はあなたたち全員を殺します」と彼は言いました。
ある急進的入植者のこのビジョンは、イスラエルの現財務大臣ベザレル・スモトリヒが政府に加わる前の2017年に発表した青写真で概説した計画に驚くほど近いようだ。
その中で同氏は、パレスチナ人に対し、パレスチナ国家のためのあらゆる闘争を放棄し、イスラエルの統治下で静かに暮らすよう告げるヨルダン川西岸計画を提示した。同氏は当時、「国家的野心を手放すのが難しい」人々は領土を離れることができ、残ってイスラエルに対する武力闘争を続ける人々はイスラエル軍によって殺害されるだろうと述べた。
最近では、政権在任中にガザ地区からのパレスチナ人の「自発的移住」とイスラエル人の再定住を推進し、パレスチナ人のアイデンティティを「発明」だと述べた。
ハヴァト・ギラドの見える範囲内に住むあるパレスチナ人は、差し迫った入植者の攻撃の兆候がないか、常に窓から前哨基地を監視していると語った。
私たちが話を聞いた多くのパレスチナ人は、自分たちは無防備だと感じている、つまりイスラエル占領軍はイスラエル入植者の保護に重点を置いており、自国の治安部隊は不在で、国際社会は彼らを見捨てていると語った。
「非常に悪い状況だ」と一人が私に言いました。 「欧州は忙しく、米国はイランに占領され、中国は無関心、ロシアはウクライナと戦っており、国連は終わっており、アラブ人は国内問題を抱えている。我々には何ができるか分からない。」
ハヴァト・ギラドから最も近いパレスチナ人の村までは1マイルも離れていないが、ここの風景はイスラエルの法律、イスラエルの権力、そして相互の敵意によって分断されている。
Oren Rosenfeld と Rebecca Hartmann による追加レポート`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c4g4djgdyk2o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-01T05:01:56+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/678b/live/ea29f390-8c56-11f1-b8ee-9b3c26ad07bb.jpg",
    readTime: 9,
  },
  {
    id: "my-ex-husband-s-sister-died-so-why-is-fi-d1734a56",
    title: "My ex-husband’s sister died — so why is Fidelity asking me for her death certificate?",
    titleJa: "私の元夫の妹が亡くなりました。では、なぜフィデリティは私に彼女の死亡診断書を要求するのでしょうか?",
    summaryJa: "「死亡診断書を支払うのは宝くじを買うようなものだと、私の心の一部は冗談を言っています。」",
    bodyOriginal: `“Part of me jokes that paying for a death certificate would be like buying a lottery ticket.”`,
    bodyJa: `「死亡診断書を支払うのは宝くじを買うようなものだと、私の心の一部は冗談を言っています。」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/its-like-buying-a-lottery-ticket-fidelity-asked-for-my-former-sister-in-laws-death-certificate-does-this-mean-im-due-a-windfall-2ebdcd69?mod=mw_rss_topstories",
    publishedAt: "2026-08-01T00:45:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-08192839",
    readTime: 2,
  },
  {
    id: "if-social-security-s-funding-crisis-is-t-d23641b0",
    title: "If Social Security’s funding crisis is the elephant in the room, this is the mouse everyone has overlooked. You have been warned.",
    titleJa: "社会保障の資金危機が部屋の中の象だとすれば、これは誰もが見落としてきたネズミです。あなたは警告を受けました。",
    summaryJa: "「社会保障を70歳まで遅らせると、月々の支払額が増加し、それに比例して生活費の調整も高くなります。」",
    bodyOriginal: `“Delaying Social Security until 70 results in an increased monthly payment — and that comes with proportionally higher cost-of-living adjustments.”`,
    bodyJa: `「社会保障を70歳まで遅らせると、月々の支払額が増加し、それに比例して生活費の調整も高くなります。」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/if-social-securitys-funding-crisis-is-the-elephant-in-the-room-this-is-the-mouse-everyone-has-overlooked-you-have-been-warned-b95c450d?mod=mw_rss_topstories",
    publishedAt: "2026-08-01T00:25:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-91835700",
    readTime: 2,
  },
  {
    id: "pirro-moves-to-drop-case-against-olympia-2bda5269",
    title: "Pirro moves to drop case against Olympian, says Reflecting Pool damage caused by 'flawed installation'",
    titleJa: "ピッロ、オリンピック選手に対する訴訟を取り下げる方向に動く、リフレクティング・プールの損害は「設置の欠陥」が原因と語る",
    summaryJa: "コロンビア特別区のジャニーン・ピロ米国検事は金曜日、リンカーン記念堂のリフレクティング・プールを破壊したとして米国のオリンピック・カヌー選手デビッド・ハーン氏を告発した起訴状を棄却する動きを見せ、プールのシーラントへの損傷は「欠陥のある設置」の結果であると裁判所への提出文書に記した。ピッロ氏はワシントンDC高等裁判所に提出した書面で、起訴後に事務所が「起訴の証拠根拠を著しく損なう」情報と証拠を受け取ったと述べた。",
    bodyOriginal: `U.S. Attorney for the District of Columbia Jeanine Pirro on Friday moved to dismiss an indictment charging U.S. Olympic canoeist David Hearn with vandalizing the Reflecting Pool of the Lincoln Memorial, writing in a court filing that damage to the pool's sealant was the result of a "flawed installation."
Pirro, in a court filing in D.C. Superior Court, said her office received information and evidence after the charges were filed that "significantly undermine the evidentiary basis for the indictment."
Hearn had been charged with felony destruction of property in early July, with Pirro saying at a press conference that he "violently" ripped up part of the pool's liner with his bare hands.
Hearn's attorneys accused the Trump administration of making the 67-year-old ex-Olympian a "scapegoat" for the expensive and troubled renovation, which President Donald Trump had frequently boasted about.
After the pool appeared to continue leaking following its renovation, Trump repeatedly claimed, without providing evidence, that vandals had cut a gash hundreds of feet long along the bottom.
But Pirro said in Friday's court filing that a "botched installation" was to blame.
Prosecutors had presented a grand jury in D.C. with "evidence that damage to the Reflecting Pool was caused by vandals" after receiving initial reports to that effect from the Department of the Interior and the U.S. Park Police, Pirro wrote.
But after that grand jury returned its indictment against Hearn, the Interior Department provided "additional documents" showing that the damage occurring in June was the "result of flawed installation by the contractor, Atlantic Industrial Coatings," Pirro said.
She also blamed "the rush to complete the project prior to events associated with the America 250 celebration in the weeks surrounding Independence Day 2026."
Asked for additional comment, the U.S. Attorney's Office for D.C. told CNBC, "The motion speaks for itself."
Hearn's attorneys told CNBC in a statement, "The Trump administration's case against Davey Hearn should have never been brought."
"Its dismissal today does not erase the abuse of government power in arresting and charging a patriotic American who did nothing wrong," read the statement from lawyers Norm Eisen, Mary Dohrmann and Steve Levin.
"The government's approach was ready, fire, aim. The administration owes Mr. Hearn an apology," they said.
The White House did not immediately respond to CNBC's request for comment.
Four days earlier, Hearn's attorneys wrote in a court filing that the government's key grand-jury witness in the case "testified that the property was already damaged before Mr. Hearn allegedly touched it."
In that same filing, the defense lawyers asked for the disclosure of the information that the government provided to the grand jury before it made the decision to charge Hearn.
Pirro's decision to pack up her case may foreclose the possibility of that information being revealed.
Her filing repeatedly and pointedly lays blame on the Interior Department for providing her office with shoddy information.
"DOI provided less than fulsome information at the outset of this case," Pirro wrote at one point. "It was not until USAO-DC repeatedly reached out to DOI dozens and dozens of times that DOI slowly started trickling information to USAO-DC."
"Had DOI been forthcoming with the information clearly in its possession, the government would not have sought a grand jury indictment," she wrote. "DOI's failure to fully and accurately provide information to USAODC undermined the government's ability to abide by these responsibilities."
The Interior Department did not immediately respond to CNBC's request for comment.
Pirro's motion to dismiss also provides new detail about issues that plagued the Reflecting Pool renovation and caused delays "almost immediately."
She pointed to "a combination of very rainy and windy weather, repeated failures of testing on the sealing of the expansion joints, and delays in obtaining sealing product at the worksite."
"The rush to complete the project led to hasty and botched work that was not remediated before the project was finished and the fencing removed," Pirro wrote.
The Trump administration had awarded the contractor, Atlantic Industrial Coatings LLC, a no-bid contract to work on the Reflecting Pool.
Trump, in one of numerous instances detailing the renovation project to the press, said in April that he chose a contractor that had worked on one of his swimming pools.
CNBC has requested comment from the contractor. A website associated with the company currently features a pop-up window with two Reflecting Pool-related updates, with the most recent one dated June 21.
"Atlantic Industrial Coatings in conjunction with the US Park Service has identified some areas in the Reflecting Pool that require repairs," the update reads. "These areas are a very small part of the massive 7 acre project, and do not indicate a failure of the liner."`,
    bodyJa: `コロンビア特別区のジャニーン・ピロ米国検事は金曜日、リンカーン記念堂のリフレクティング・プールを破壊したとして米国のオリンピック・カヌー選手デビッド・ハーン氏を告発した起訴状を棄却する動きを見せ、プールのシーラントへの損傷は「欠陥のある設置」の結果であると裁判所への提出文書に記した。
ピッロ氏はワシントンDC高等裁判所に提出した書面で、起訴後に事務所が「起訴の証拠根拠を著しく損なう」情報と証拠を受け取ったと述べた。
ハーン氏は７月上旬に器物損壊の重罪で起訴されており、ピッロ氏は記者会見でプールのライナーの一部を素手で「暴力的に」引き裂いたと述べた。
ハーン氏の弁護士らは、トランプ政権が、ドナルド・トランプ大統領が頻繁に自慢してきた、高額で問題を抱えた改修工事の「スケープゴート」に、67歳の元オリンピック選手を仕立て上げたと非難した。
プールの改修後も水漏れが続いているように見えることを受けて、トランプ大統領は証拠を示さずに、破壊者らが底に沿って数百フィートの長さの切り込みを入れたと繰り返し主張した。
しかし、ピッロ氏は金曜日の裁判所への提出文書で、「設備の失敗」が原因だと述べた。
ピロ氏は、内務省と米国公園警察からその旨の最初の報告を受けた後、検察はワシントンDCの大陪審に「リフレクティング・プールへの損害が破壊者によって引き起こされたという証拠」を提出したと書いた。
しかし、大陪審がハーンに対する起訴状を差し戻した後、内務省は6月に起きた損害が「請負業者であるアトランティック・インダストリアル・コーティングス社による施工の不備の結果」であることを示す「追加文書」を提出したとピッロ氏は述べた。
彼女はまた、「2026年の独立記念日の前後数週間に行われるアメリカ250周年記念行事に関連するイベントの前にプロジェクトを急いで完了させたこと」を非難した。
追加のコメントを求められたワシントンDC連邦検察局はCNBCに対し、「動議はそれ自体を物語っている」と語った。
ハーン氏の弁護士はCNBCに対し、「トランプ政権によるデイビー・ハーン氏の訴訟は決して起こされるべきではなかった」と声明で述べた。
ノーム・アイゼン弁護士、メアリー・ドーマン弁護士、スティーブ・レビン弁護士の声明文には、「今日の却下は、何も悪いことをしていない愛国的なアメリカ人を逮捕し起訴するという政府権力の乱用が消えるわけではない」と書かれている。
「政府のアプローチは準備万端で、狙いを定めていた。政府はハーン氏に謝罪する義務がある」と彼らは述べた。
ホワイトハウスはCNBCのコメント要請にすぐには応じなかった。
4日前、ハーン氏の弁護士は法廷提出書類の中で、この事件における政府の大陪審の主要証人が「ハーン氏が触ったとされる前に、その物件はすでに損傷していたと証言した」と述べた。
同じ申し立ての中で、弁護人はハーン氏の起訴を決定する前に政府が大陪審に提供した情報の開示を求めた。
ピッロ氏が事件をまとめるという決断をしたことで、その情報が暴露される可能性はなくなるかもしれない。
彼女の提出書類は、内務省が彼女の事務所に粗末な情報を提供したことを繰り返し明確に非難している。
「DOIはこの訴訟の開始時に十分な情報を提供しなかった」とピロ氏はある時点で書いた。 「USAO-DCが何十回もDOIに連絡を繰り返して初めて、DOIはゆっくりとUSAO-DCに情報を流し始めた。」
「もしDOIが明らかに保有している情報を持って臨んでいたら、政府は大陪審の起訴を求めなかったであろう」と彼女は書いた。 「DOIがUSAODCに完全かつ正確に情報を提供できなかったことにより、これらの責任を遵守する政府の能力が損なわれた。」
内務省はCNBCのコメント要請にすぐには応じなかった。
ピッロ氏の却下動議はまた、リフレクティング・プール改修工事を悩ませ、「ほぼ即座に」遅延を引き起こした問題について新たな詳細を明らかにした。
彼女は「非常に雨と風の強い天候、伸縮継手のシールに関するテストの度重なる失敗、現場でのシール製品の入手の遅れ」を指摘した。
「プロジェクトの完成を急ぐあまり、性急で失敗した作業が発生し、プロジェクトが完了してフェンスが撤去されるまで修正されなかった」とピッロ氏は書いた。
トランプ政権は、請負業者であるアトランティック・インダストリアル・コーティングスLLCに、リフレクティング・プールの工事について入札なしの契約を結んでいた。
トランプ大統領は報道陣に改修計画について詳しく説明した数多くの事例の一つで、4月にプールの1つを手がけた請負業者を選んだと述べた。
CNBCは請負業者にコメントを求めた。同社に関連する Web サイトには現在、リフレクティング プール関連の 2 つの更新情報を表示するポップアップ ウィンドウが表示されており、最新のものは 6 月 21 日付けです。
「Atlantic Industrial Coatingsは米国公園局と協力し、リフレクティングプールの一部のエリアで修理が必要であることを特定した」とアップデートには書かれている。 「これらの地域は7エーカーの巨大プロジェクトのごく一部であり、ライナーの故障を示すものではありません。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/31/trump-pirro-reflecting-pool-olympian-david-hearn.html",
    publishedAt: "2026-07-31T23:19:16+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
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
