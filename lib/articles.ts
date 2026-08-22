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
    id: "tiktok-to-pay-400m-to-us-in-one-of-large-ec14d6f8",
    title: "TikTok to pay $400m to US in one of largest child privacy settlements",
    titleJa: "TikTok、児童プライバシーに関する最大規模の和解で米国に4億ドルを支払う",
    summaryJa: "この提携は、TikTokとその親会社バイトダンスが13歳未満の数百万人のユーザーに関する「膨大な量のデータ」を収集したと主張する2024年の訴訟に端を発している。",
    bodyOriginal: `TikTok to pay $400m to US in one of largest child privacy settlements
- Published
TikTok has agreed to pay $400m (£293m) to the US to end a lawsuit alleging its platform violated children‘s privacy, marking one of the largest ever settlements over the issue.
The deal stems from a 2024 suit by the Department of Justice under former President Joe Biden alleging TikTok and its parent company ByteDance collected "vast amounts of data" on millions of users under the age of 13.
Doing so was against the Children's Online Privacy Protection Act (COPPA), a federal law enacted in 2000. It is the same law that dozens of US states are now suing Meta over.
"Children and parents are better protected today than they were when this case began," assistant Attorney General Brett Shumate said.
Other companies to have paid penalties to the US government for COPPA violations include Google's YouTube, which in 2019 paid $170m, and Epic Games, which in 2022 paid $275m.
Meta is also now facing penalties that could exceed hundreds of billions of dollars stemming from COPPA violations alleged by attorneys general of 29 US states. A jury trial in the lawsuit started this week, with the Instagram and Facebook owner accused of targeting child users and profiting off of them.
While the TikTok lawsuit predates last year's split of TikTok's US business and operations from its original base of China, the settlement only involves TikTok's operations in China.
ByteDance, which is a privately held company, was most recently valued by investors at $550bn, external.
Under the terms of the deal, TikTok and ByteDance will immediately pay the DOJ $300m. It will pay another $100m when the government vacates a 2019 consent decree, external with the Federal Trade Commission.
As part of the agreement, the predecessor to ByteDance, Musical.ly, was required to pay a $5.7m fine for COPPA violations and ensure it sought parental consent for any user aged under 13.
The justice department did not detail on Friday any action against TikTok beyond the fine. But the department noted that since it sued the platform, TikTok has "undergone significant changes," including to its ownership, privacy practices and platform controls for young users.
When the lawsuit was filed, attorneys for the US said there were more than 170 million teenagers using TikTok and that the app was "directed to children." Yet, it did not effectively gauge the age of users or get parental consent for use from those underage.
In 2024, former President Biden pushed for TikTok to be either banned, or have the company divest its US operations. President Donald Trump went on to support divestment of the app, which occurred last year.
Its US operations are now 81% owned by a consortium of investors, while Bytdance maintains a 19% stake.
A representative of TikTok did not respond to the BBC for comment.
Related topics
- Published3 days ago
- Published26 September 2025
- Published23 January`,
    bodyJa: `TikTok、児童プライバシーに関する最大規模の和解で米国に4億ドルを支払う
- 公開されました
TikTokは、同社のプラットフォームが子どものプライバシーを侵害したとする訴訟を終わらせるために米国に4億ドル（2億9,300万ポンド）を支払うことに同意し、この問題に関して過去最大規模の和解の1つとなった。
この提携は、ジョー・バイデン前大統領の下で司法省が2024年に起こした訴訟に端を発しており、TikTokとその親会社バイトダンスが13歳未満の数百万人のユーザーに関する「膨大な量のデータ」を収集したと主張している。
このような行為は、2000 年に制定された連邦法である児童オンライン プライバシー保護法 (COPPA) に違反するものでした。現在、米国の数十の州が Meta をめぐって訴訟を起こしているのと同じ法律です。
ブレット・シューメート司法次官補は「この事件が始まった時よりも、今の子どもや親はよりよく守られている」と述べた。
COPPA違反で米国政府に罰金を支払った他の企業には、2019年に1億7,000万ドルを支払ったGoogle傘下のYouTubeや、2022年に2億7,500万ドルを支払ったエピックゲームズが含まれる。
メタ社は現在、米国29州の司法長官によるCOPPA違反の申し立てにより、数千億ドルを超える可能性のある罰金にも直面している。この訴訟の陪審裁判は今週始まり、インスタグラムとフェイスブックのオーナーは児童ユーザーをターゲットにし、そこから利益を得ていたとして告発された。
TikTok訴訟は昨年、TikTokの米国事業と運営を本来の拠点である中国から分離する前に起きているが、今回の和解にはTikTokの中国での事業のみが含まれる。
非公開企業であるバイトダンスは、最近、外部評価で投資家によって5,500億ドルと評価されました。
契約条件に基づき、TikTokとByteDanceは司法省に直ちに3億ドルを支払うことになる。政府が連邦取引委員会の外での2019年の同意判決を無効にする場合、同社はさらに1億ドルを支払うことになる。
合意の一環として、ByteDanceの前身であるMusical.lyは、COPPA違反に対して570万ドルの罰金を支払うことと、13歳未満のユーザーには必ず親の同意を求めることが求められた。
司法省は金曜日、罰金以外のTikTokに対するいかなる措置についても詳細を明らかにしなかった。しかし同省は、同プラットフォームを提訴して以来、TikTokはその所有権、プライバシー慣行、若いユーザー向けのプラットフォーム管理など「重大な変更」を受けていると指摘した。
訴訟が起こされたとき、米国の弁護士は、TikTokを利用している十代の若者は1億7000万人以上おり、このアプリは「子供向け」であると述べた。しかし、ユーザーの年齢を効果的に測定したり、未成年者の使用について保護者の同意を得たりすることはできませんでした。
2024年、バイデン前大統領はTikTokを禁止するか、同社の米国事業を売却するよう要求した。ドナルド・トランプ大統領は、昨年行われたアプリの売却を支持し続けた。
同社の米国事業は現在、投資家連合が81％所有しており、バイトダンスは19％の株式を維持している。
TikTokの代表者はBBCのコメントに応じていない。
関連トピック
- 3 日前に公開
- 2025 年 9 月 26 日発行
- 1 月 23 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cwyr0l45xjro?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-21T22:36:12+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/ebfc/live/7de297d0-9da6-11f1-95ab-d3b679e2384a.jpg",
    readTime: 4,
  },
  {
    id: "anthropic-ipo-filing-will-show-ai-backla-3f013101",
    title: "Anthropic IPO filing will show AI backlash as a risk factor, sources say",
    titleJa: "人間的なIPO申請はAIの反発をリスク要因として示すだろうと情報筋が語る",
    summaryJa: "人工知能を懸念し、新しいデータセンターに声高に反対するアメリカ人が増えている中、Anthropic は公開市場に投入される準備ができている。事情に詳しい関係者によると、こうした反発はアンスロピックのＩＰＯ目論見書における主要なリスク要因になると予想されている。関係者らによると、クロードの作者はサンフランシスコで銀行家や投資家らと予備的な「実験」会議を行っているという。会議内容は機密事項であるため匿名を希望した関係者らは語った。関係者によると、会議ではクリシュナ・ラオ最高財務責任者（ＣＦＯ）に対し、競争やオープンソースモデルによる利益圧力、データセンターの建設が停滞した場合の対応などについて質問されるという。",
    bodyOriginal: `Anthropic is poised to hit the public market at a time when an increasing number of Americans are worried about artificial intelligence and are loudly opposing new data centers. That backlash is expected to be a key risk factor in Anthropic's IPO prospectus, according to people familiar with matter.
The Claude creator has been holding preliminary "test-the-water" meetings with bankers and investors in San Francisco, said the people, who asked not to be named because the sessions are confidential. In the meetings, CFO Krishna Rao is being asked about competition, margin pressure from open-source models, and what happens if there's a slowdown in the building of data centers, the sources said.
In June, Anthropic confidentially filed to go public in what will be among the biggest IPOs on record. Elon Musk's SpaceX, which competes with Anthropic through its AI division, raised $85.7 billion, including the underwriter option, two months ago. It's by far the largest offering to date.
Investors expect that Anthropic may top that, and project the company could float at a valuation of about $2 trillion, the people said.
Anthropic declined to comment.
Like rival OpenAI, Anthropic is pushing infrastructure partners to build out at warp speed in order to meet demand for advanced models and new services. Tech's hyperscalers are shelling out hundreds of billions of dollars this year on capital expenditures to fuel data center develop and purchase the graphics processing units needed to fill them.
But public sentiment isn't in their favor.
According to a Gallup survey published in May, seven in 10 Americans opposed AI data center construction in their area, with close to half of those polled "strongly opposed." Roughly a quarter of people surveyed are in favor, Gallup said.
With midterms less than three months away, politicians on both sides of the aisle have been pushing back on data center development, reflecting the anger of their constituents.
It was a key issue in Florida's Republican gubernatorial primary on Tuesday, which was won by Rep. Byron Donalds, who has proposed restrictions on data centers in Florida. That same day Pennsylvania Democratic Gov. Josh Shapiro signed an executive order placing harsh standards on data center development in his state.
Companies are required to outline their risk factors as investor disclosures and for legal protection in their prospectus. SpaceX said in its risk factors section that, "Adverse global macroeconomic and geopolitical conditions may negatively affect our business, financial condition, results of operations and future prospects."
Compute capacity is directly correlated to revenue for AI labs like Anthropic, which is valued at close to $1 trillion in the private market. A slowdown could dent the historic growth rate for a company that just topped a $65 billion annual revenue run rate, as CNBC previously reported.
— CNBC's Ashley Capoot contributed to this report.`,
    bodyJa: `人工知能を懸念し、新しいデータセンターに声高に反対するアメリカ人が増えている中、Anthropic は公開市場に投入される準備ができている。事情に詳しい関係者によると、こうした反発はアンスロピックのＩＰＯ目論見書における主要なリスク要因になると予想されている。
関係者らによると、クロードの作者はサンフランシスコで銀行家や投資家らと予備的な「実験」会議を行っているという。会議内容は機密事項であるため匿名を希望した関係者らは語った。関係者によると、会議ではクリシュナ・ラオ最高財務責任者（ＣＦＯ）に対し、競争やオープンソースモデルによる利益圧力、データセンターの建設が停滞した場合の対応などについて質問されるという。
6月、アンスロピックは史上最大規模のIPOとなる株式公開を内密に申請した。 AI部門を通じてアンスロピックと競合するイーロン・マスク氏のスペースXは、2カ月前に引受オプションを含めて857億ドルを調達した。これはこれまでで最大の提供品です。
投資家らはアンスロピックがそれを上回る可能性があると予想しており、同社の評価額は約2兆ドルになる可能性があると関係者らは述べた。
アントロピック氏はコメントを控えた。
ライバルの OpenAI と同様に、Anthropic は、高度なモデルと新しいサービスの需要を満たすために、インフラストラクチャ パートナーに猛スピードで構築するよう促しています。ハイテク企業のハイパースケーラーは今年、データセンターの開発とデータセンターに必要なグラフィックス処理ユニットの購入を促進するための設備投資に数千億ドルを投じている。
しかし、国民感情は彼らに好意的ではない。
5月に発表されたギャラップの調査によると、アメリカ人の10人中7人が自分たちの地域でのAIデータセンター建設に反対しており、調査対象者の半数近くが「強く反対」した。ギャラップによると、調査対象者のおよそ4分の1が賛成しているという。
中間選挙まで3か月を切った今、有権者の怒りを反映して、両側の政治家がデータセンター開発を後押ししている。
これは火曜日に行われたフロリダ州の共和党知事予備選の重要な争点であり、フロリダ州のデータセンターに対する制限を提案したバイロン・ドナルド下院議員が勝利した。同日、ペンシルベニア州民主党のジョシュ・シャピロ知事は、同州のデータセンター開発に厳しい基準を課す大統領令に署名した。
企業は、投資家への開示および法的保護のために、目論見書でリスク要因を概説する必要があります。スペースXはリスク要因の項目で、「世界的なマクロ経済的および地政学的な逆境が当社の事業、財務状況、業績、将来見通しに悪影響を与える可能性がある」と述べた。
コンピューティング能力は、民間市場で 1 兆ドル近くと評価されている Anthropic のような AI ラボの収益と直接相関しています。 CNBCが以前報じたように、景気減速は、年間売上高が650億ドルを超えたばかりの企業の歴史的な成長率を損なう可能性がある。
— CNBC の Ashley Capoot がこのレポートに貢献しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/21/-anthropic-ipo-filing-will-show-ai-backlash-as-risk-sources-say.html",
    publishedAt: "2026-08-21T22:03:39+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 3,
  },
  {
    id: "you-can-now-venmo-your-kid-s-college-tui-4a8b8362",
    title: "You can now Venmo your kid’s college tuition. But should you?",
    titleJa: "お子様の大学の学費を Venmo で賄えるようになりました。しかし、そうすべきでしょうか？",
    summaryJa: "消費者が柔軟な支出オプションを求める中、一部の大学は非伝統的な支払い方法を受け入れ始めるだろう。",
    bodyOriginal: `Some universities will begin accepting the nontraditional payment method as consumers seek flexible spending options.`,
    bodyJa: `消費者が柔軟な支出オプションを求める中、一部の大学は非伝統的な支払い方法を受け入れ始めるだろう。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/should-you-venmo-your-tuition-heres-what-to-know-as-colleges-add-new-payment-options-1a70ae96?mod=mw_rss_topstories",
    publishedAt: "2026-08-21T21:20:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-56268337",
    readTime: 2,
  },
  {
    id: "tesla-s-stock-jumps-as-the-company-gets-cef49256",
    title: "Tesla’s stock jumps as the company gets cleared for a Las Vegas robotaxi launch",
    titleJa: "テスラの株価はラスベガスでのロボタクシーの立ち上げ許可を受けて急騰",
    summaryJa: "同社はまもなくテキサス州オースティンでサイバーキャブを発売する予定で、ネバダ州に数千台の車両を配備することに同意した。",
    bodyOriginal: `The automaker plans to soon launch its Cybercab in Austin, Texas, and got the nod to deploy thousands of vehicles in Nevada.`,
    bodyJa: `同社はまもなくテキサス州オースティンでサイバーキャブを発売する予定で、ネバダ州に数千台の車両を配備することに同意した。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/tesla-stocks-jumps-as-the-company-gets-ready-for-a-robotaxi-push-c680f87f?mod=mw_rss_topstories",
    publishedAt: "2026-08-21T20:34:00+00:00",
    category: "自動車",
    imageUrl: "https://images.mktw.net/im-74392946",
    readTime: 2,
  },
  {
    id: "ray-dalio-says-bessent-move-is-sign-that-3d172f13",
    title: "Ray Dalio says Bessent move is sign that a debt crisis is getting closer; recommends gold and bitcoin",
    titleJa: "レイ・ダリオ氏は、ベセントの動きは債務危機が近づいている兆候だと述べている。ゴールドとビットコインを推奨",
    summaryJa: "億万長者の投資家レイ・ダリオ氏によると、スコット・ベッセント財務長官の今週の国債買い戻し発表は、来るべき危機を示唆する可能性のあるより広範なパターンに当てはまるという。ブリッジウォーター・アソシエイツの創設者は、ベッセント氏の国債買い入れ拡大計画は米経済にとって問題を引き起こす可能性があると述べた。日本政府が米債券市場へのエクスポージャーを削減し、長期米国債利回りが急上昇していることと相まって、投資家は仮想通貨や金を保有することでリスクの増大に備えたポートフォリオを準備したいと考えるかもしれない、とダリオ氏は述べた。",
    bodyOriginal: `Treasury Secretary Scott Bessent's debt buyback announcement this week fits into a broader pattern that can signal a forthcoming crisis, according to billionaire investor Ray Dalio.
The Bridgewater Associates founder said Bessent's plan to increase government debt purchases may portend trouble for the U.S. economy. Coupled with the Japanese government reducing its U.S. bond market exposure and surging long-dated American bond yields, Dalio said investors may want to prepare their portfolios for increased risk by owning cryptocurrencies and gold.
"I am confident that the government's financial condition is at an inflection point," Dalio wrote in a LinkedIn post published Friday. "If this is not dealt with now, the debts will build up to levels where they can't be managed without great trauma."
Dalio noted that the Treasury Department has "only limited capacity" to buy back bonds. Bessent told CNBC on Thursday that his team was going to "make a market" and that the purchases would likely top $4 billion.
Burgeoning deficit
The U.S. is spending about 40% more than it's bringing in, resulting in the burgeoning budget deficit, Dalio said. The U.S. budget deficit topped $432 billion in July, but Bessent told CNBC that it's likely peaked under President Donald Trump's administration.
Bessent said in the interview that a team was looking at ways to shrink spending by hundreds of billions of dollars. But Dalio said there is "very little ability" to do so given that it is either committed or considered essential.
After years of overspending, Dalio said total debt now dwarfs what the U.S. brings in each year. If the U.S. government was a business, Dalio said debt service payments would come in at roughly $11 trillion — about 200% of annual revenue.
Dalio, 77, warned the cost of repaying principal and servicing the debt will only grow over time.
Three-prong approach
To solve this, Dalio said the U.S. needs to carefully employ a three-part strategy to get the budget deficit down to 3% of gross domestic product.
First, Dalio said the U.S. government needs to reduce its spending. Second, he said tax revenue needs to be raised. Finally, the New York native and Harvard Business School alumni said lower interest rates were needed.
"All three need to happen concurrently so as to prevent any one from being too large," Dalio said. "If any one is too large, the adjustment will be traumatic."
Dalio cautioned against ramming through these adjustments by "force." For instance, "it would be very bad if the Federal Reserve unnaturally forced interest rates down," he said.
Dalio said it's important to to take steps now, while the economy is healthy. An economy in recession requires increased government spending, he said.
Dalio said the exact timing of a debt crisis can be swayed by variables ranging from military conflict to political change. On its current trajectory, the U.S. could enter such a crisis in as early as one year or as late as five. "My guess, which I suppose will be a bad one, is that it will come in three years, give or take two, if the course we're on is not changed."
To prepare, Dalio recommended investors are underweight debt assets, such as bonds.
As much as 10% to 15% of a portfolio could land in gold, as well as "a bit" of bitcoin, the hedge fund founder said.
Dalio's post came at the tail end of a volatile week for U.S. financial markets. Rising long-term Treasury yields have pressured stocks, leading the S&P 500 to snap a a three-week-long advance.`,
    bodyJa: `億万長者の投資家レイ・ダリオ氏によると、スコット・ベッセント財務長官の今週の国債買い戻し発表は、来るべき危機を示唆する可能性のあるより広範なパターンに当てはまるという。
ブリッジウォーター・アソシエイツの創設者は、ベッセント氏の国債買い入れ拡大計画は米経済にとって問題を引き起こす可能性があると述べた。日本政府が米債券市場へのエクスポージャーを削減し、長期米国債利回りが急上昇していることと相まって、投資家は仮想通貨や金を保有することでリスクの増大に備えたポートフォリオを準備したいと考えるかもしれない、とダリオ氏は述べた。
ダリオ氏は金曜日に公開されたリンクトインへの投稿で、「政府の財政状況が変曲点にあると確信している」と述べた。 「今すぐに対処しなければ、大きなトラウマを残さずには処理できないレベルまで借金が膨らむことになるだろう。」
ダリオ氏は、財務省が債券を買い戻す能力は「限られている」と指摘した。ベッセント氏は木曜日、CNBCに対し、チームは「市場を作る」つもりであり、買収金額はおそらく40億ドルを超えるだろうと語った。
赤字の急増
ダリオ氏は、米国は収入を約40％上回る支出を行っており、その結果、財政赤字が急増していると述べた。米国の財政赤字は7月に4,320億ドルを超えたが、ベセント氏はCNBCに対し、ドナルド・トランプ大統領政権下でピークに達した可能性が高いと語った。
ベッセント氏はインタビューで、チームは支出を数千億ドル削減する方法を検討していると述べた。しかしダリオ氏は、それが熱心であるか、不可欠であると考えられている以上、そうする能力は「ほとんどない」と述べた。
ダリオ氏は、何年にもわたる過剰支出を経て、今や債務総額は米国が毎年もたらす額に比べて小さくなっていると語った。ダリオ氏は、米国政府が企業であれば、債務返済額はおよそ11兆ドルとなり、これは年間収入の約200％に相当すると述べた。
77歳のダリオ氏は、元金の返済と債務返済のコストは時間の経過とともに増大する一方だと警告した。
3 つの側面からのアプローチ
これを解決するには、米国は財政赤字を国内総生産の3％まで下げるために3つの部分からなる戦略を慎重に採用する必要があるとダリオ氏は述べた。
まずダリオ氏は、米国政府は支出を削減する必要があると述べた。第二に、税収を増やす必要があると述べた。最後に、ニューヨーク出身でハーバード・ビジネス・スクールの卒業生である同氏は、金利の引き下げが必要だと述べた。
「どれかが大きくなりすぎないように、3つすべてが同時に起こる必要がある」とダリオ氏は語った。 「どれかが大きすぎると、調整がトラウマになるでしょう。」
ダリオ氏は、こうした調整を「力」で押し通さないよう警告した。例えば、「連邦準備理事会が不自然に金利引き下げを強制すれば非常に悪いことだ」と同氏は述べた。
ダリオ氏は、経済が健全なうちに今すぐ措置を講じることが重要だと述べた。景気後退には政府支出の拡大が必要だと同氏は述べた。
ダリオ氏は、債務危機の正確な時期は軍事紛争から政変までさまざまな変数によって左右される可能性があると述べた。現在の軌道では、米国は早ければ1年、遅くても5年以内にそのような危機に陥る可能性がある。 「私の推測は、悪い推測ではあると思いますが、我々の進む道が変わらなければ、2年経っても3年以内にはそうなるだろうということです。」
ダリオ氏は、準備として債券などの負債資産をアンダーウエートにするよう投資家に推奨した。
同ヘッジファンド創設者によると、ポートフォリオの10～15％が金に加え、ビットコインも「少し」入る可能性があるという。
ダリオ氏の投稿は、米国金融市場にとって不安定な週の終わりに行われた。長期国債利回りの上昇が株価を圧迫し、S&P500指数は3週間ぶりの上昇となった。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/21/ray-dalio-bessent-debt-crisis-bitcoin-gold.html",
    publishedAt: "2026-08-21T20:19:21+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 4,
  },
  {
    id: "here-s-how-bessent-s-newly-activist-trea-bece81cc",
    title: "Here’s how Bessent’s newly activist Treasury Department is undercutting the Fed’s Warsh",
    titleJa: "ベッセント氏の新たな活動家である財務省がFRBのウォーシュ氏をどのように弱体化させているかがここにある",
    summaryJa: "スコット・ベッセント財務長官が今週、政府債務コストを引き下げるために国債市場に介入するという驚くべき行動をとったことで、金利政策を決定するケビン・ウォーシュ連邦準備理事会議長の信頼性が損なわれると専門家らは指摘する。",
    bodyOriginal: `The surprising move this week by Treasury Secretary Scott Bessent to intervene in Treasury markets to lower the cost of government debt undercuts the credibility of Federal Reserve Chairman Kevin Warsh to make interest-rate policy, experts said.`,
    bodyJa: `スコット・ベッセント財務長官が今週、政府債務コストを引き下げるために国債市場に介入するという驚くべき行動をとったことは、金利政策を決定する連邦準備制度理事会のケビン・ウォーシュ議長の信頼性を損なうと専門家らは指摘する。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/heres-how-bessents-newly-activist-treasury-department-is-undercutting-the-feds-warsh-480455c2?mod=mw_rss_topstories",
    publishedAt: "2026-08-21T20:11:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-92171270",
    readTime: 2,
  },
  {
    id: "tesla-recalls-3-million-vehicles-in-chin-34e762ad",
    title: "Tesla recalls 3 million vehicles in China over doorhandle safety, driver monitoring",
    titleJa: "テスラ、ドアハンドルの安全性やドライバー監視を巡り中国で300万台の車両をリコール",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Tesla is voluntarily recalling about 3 million vehicles in China to address two separate safety issues, the latest setback for the company as it tries to remain a major player in the world's largest auto market.
One recall involves Tesla's doorhandles, which are electronically operated and retractable, and the other is tied to the company's driver "attention monitoring" systems, according to notices published on Friday by Tesla and China's product safety regulator.
Tesla said in a doorhandle recall notice that severe collisions can cause the "vehicle's low-voltage system to fail," and that resulting doorhandle problems "could hinder occupants from quickly opening the doors to escape and impede rescue efforts by those outside the vehicle, posing a safety hazard."
The company said it plans to "affix warning labels" to recalled vehicles, and will upgrade its "window control software" with an over-the-air update so that windows automatically lower after an accident is detected. Model 3, Model Y, Model S and Model X vehicles, including some imports and those made in China between March 4, 2019, and April 29, 2026, are subject to the recall.
The Model Y is one of the best-selling vehicles in China, but Tesla faces intensifying pressure there from local competitors, including BYD and Xiaomi, that are are making more affordable and innovative electric cars. According to China Passenger Car Association data, Tesla delivered 25,158 Model Y units in China in July, down 18% from 30,766 a year earlier.
The flush doorhandles that Tesla popularized are featured on cars made by Tesla competitors like Xiaomi, Geely and others that also issued recalls in China on Friday. Deaths apparently caused by malfunctioning or inaccessible doorhandles, have led to regulatory changes in China, prompting the widespread recalls involving nine automakers.
Regulatory changes are also being considered in the U.S. The National Highway Traffic Safety Administration said in July that it would begin the process to establish a new federal rule to "mandate a robust and obvious door egress system in all motor vehicles," according a regulatory filing.
Tesla's other recall on Friday is to address deficiencies in some of its vehicles' driver monitoring systems, which are meant to ensure drivers stay attentive and ready to take over steering and braking at any time while using partially automated driving features like autosteer.
In a recall notice, Tesla said it would provide customers with free over-the-air software updates, and add "in-cabin camera monitoring" alongside its steering-wheel based torque sensors to prompt drivers to stay more engaged, and take over steering and braking when needed.
For vehicles that can't be upgraded via over-the-air software updates, Tesla's recall notice said its service centers will "contact relevant users" to book repairs.
The second recall applies to China-made Model 3 and Model Y vehicles manufactured between March 4, 2019, and December 7, 2025.
Tesla didn't respond to a request for comment.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/21/tesla-recalls-cars-in-china-over-doorhandle-safety-driver-monitoring.html",
    publishedAt: "2026-08-21T19:29:48+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "supreme-court-allows-trump-to-continue-w-265b6c79",
    title: "Supreme Court allows Trump to continue White House ballroom construction for now",
    titleJa: "最高裁判所、トランプ大統領がホワイトハウスの宴会場の建設を当面継続することを許可",
    summaryJa: "最高裁判所は金曜日、ドナルド・トランプ大統領に対し、物議を醸しているホワイトハウスの宴会場プロジェクトの建設継続を今のところ許可した。ジョン・ロバーツ首席判事は、ボールルーム計画に異議を唱える訴訟が展開されている間、トランプ大統領が建設を継続することを禁じた連邦地方裁判所判事の差し止め命令を差し止めた。",
    bodyOriginal: `The Supreme Court on Friday allowed President Donald Trump, for now, to continue construction on his controversial White House ballroom project.
Chief Justice John Roberts, in an order, stayed a federal district court judge's injunction, which had barred Trump from continuing construction while a lawsuit challenging the ballroom project played out.
Roberts' order came on the same day the injunction was scheduled to take effect.
The order is an administrative stay, which could be lifted by the entire Supreme Court.
Trump in 2025 had the White House's East Wing demolished, without notifying Congress, to make way for the planned, 90,000 square-foot ballroom.
The National Trust for Historic Preservation is suing Trump to block the project on the grounds that Trump did not obtain required authorization or reviews for it.`,
    bodyJa: `最高裁判所は金曜日、ドナルド・トランプ大統領に対し、物議を醸しているホワイトハウスの宴会場プロジェクトの建設継続を今のところ許可した。
ジョン・ロバーツ首席判事は、ボールルーム計画に異議を唱える訴訟が展開されている間、トランプ大統領が建設を継続することを禁じた連邦地方裁判所判事の差し止め命令を差し止めた。
ロバーツ氏の命令は、差し止め命令の発効が予定されていた同日に出された。
この命令は行政上の停止命令であり、最高裁判所全体によって解除される可能性がある。
トランプ大統領は2025年、計画されていた9万平方フィートの宴会場に道を譲るため、議会に通知することなくホワイトハウスの東棟を取り壊させた。
歴史保存ナショナル・トラストは、トランプ大統領がプロジェクトに必要な許可や審査を取得していないことを理由に、プロジェクトの差し止めを求めてトランプ氏を訴えている。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/21/supreme-court-trump-white-house-ballroom.html",
    publishedAt: "2026-08-21T18:43:05+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "as-gop-warns-data-centers-put-ohio-senat-b28b5253",
    title: "As GOP warns data centers put Ohio Senate seat at risk, Husted defends energy policy",
    titleJa: "共和党がデータセンターがオハイオ州上院議席を危うくすると警告する中、ハステッド氏はエネルギー政策を擁護",
    summaryJa: "ジョン・ハステッド上院議員（共和党、オハイオ州）は金曜日、データセンターをめぐる反発で同氏の議席が危うくなる可能性があると共和党が警告する中、J・D・バンス副大統領とともにオハイオ州南西部製鉄所に姿を現し、ドナルド・トランプ大統領のエネルギーと経済政策を擁護した。ハステッド氏のコメントは、全米共和党上院委員会（NRSC）がメモで、データセンターが光熱費に与える影響を米国人がますます懸念する中、この選挙サイクルではデータセンターが「深刻な問題」になっていると警告した数日後に出た。",
    bodyOriginal: `Sen. Jon Husted, R-Ohio, defended President Donald Trump's energy and economic agenda on Friday during an appearance at a southwestern Ohio steel mill with Vice President JD Vance, as Republicans warn that backlash over data centers could be putting his seat in jeopardy.
Husted's comments come days after the National Republican Senatorial Committee, or NRSC, warned in a memo that data centers have become a "sleeper issue" this election cycle, as Americans increasingly worry about the impact they could have on their utility costs.
Ohio is home to several large data center projects, including a proposed 10-gigawatt campus in Pike County that could cost more than $500 billion.
But higher electricity costs, Husted said, are the result of Democratic policies, not data center construction.
"You want to have lower electricity prices — I want to tell you why they're rising. Because Congress and, under the Obama administration, under the Biden administration, they closed 23 power plants in the state of Ohio, representing half the electricity we use on a daily basis," Husted said at the Cleveland-Cliffs steel plant, in Middletown, Ohio. "Radical climate policies did that."
Husted and Vance were joined by other GOP candidates, including Vivek Ramaswamy, the Republican candidate for Ohio governor who is locked in a close race with Democrat Amy Acton.
According to recent polling, Husted is narrowly trailing former Democratic Sen. Sherrod Brown in his bid for reelection.
Husted's seat is seen as crucial for Republicans if they want to retain their majority in the Senate in the next Congress. The GOP is widely favored to keep the Senate, though Trump's falling approval ratings, rising inflation, the ongoing Iran war and growing data center anxieties are causing concerns within the party.
"If voters' perceptions of data centers are not fixed quickly, the campaign against them will expand far beyond Ohio," the NRSC wrote in the Tuesday memo, which was obtained by CNBC and first reported by Axios.
Husted, meanwhile, touted the Trump administration's investment in manufacturing in Ohio, including a $500 million Department of Energy grant to Cleveland-Cliffs, which was initially awarded by the Biden administration to finance a hydrogen-powered furnace at the Middletown facility, but now will be used for other upgrades, including to its blast furnace and artificial intelligence technologies.
Cleveland-Cliffs said in a statement it will match the DOE's funding, for a total $1 billion investment in the facility. The company said the project would employ more than 1,500 workers during construction.
"We can bring back manufacturing to this great country, in places like Middletown and across our great state," Husted said. "And why is it important that we do this? Investments like this, a billion-dollar investment right here? Because it's job security, it's economic security, it's national security."`,
    bodyJa: `ジョン・ハステッド上院議員（共和党、オハイオ州）は金曜日、データセンターをめぐる反発で同氏の議席が危うくなる可能性があると共和党が警告する中、J・D・バンス副大統領とともにオハイオ州南西部製鉄所に姿を現し、ドナルド・トランプ大統領のエネルギーと経済政策を擁護した。
ハステッド氏のコメントは、全米共和党上院委員会（NRSC）がメモで、データセンターが光熱費に与える影響を米国人がますます懸念する中、この選挙サイクルではデータセンターが「深刻な問題」になっていると警告した数日後に出た。
オハイオ州には、パイク郡に計画されている 10 ギガワットのキャンパスを含め、5,000 億ドル以上かかる可能性がある大規模なデータセンター プロジェクトがいくつかあります。
しかし、電力コストの上昇はデータセンター建設の結果ではなく、民主党の政策の結果であるとハステッド氏は述べた。
オハイオ州ミドルタウンのクリーブランド・クリフス製鉄所でハステッド氏は、「皆さんは電気料金を下げたいと思っているが、なぜ値上がりしているのかを教えてほしい。なぜなら議会、そしてオバマ政権下、バイデン政権下でオハイオ州内の23の発電所を閉鎖したからだ。これは私たちが日常的に使用する電力の半分に相当する」と述べた。 「急進的な気候政策がそれを実現したのです。」
ハステッド氏とバンス氏には、民主党のエイミー・アクトン氏と接戦となっているオハイオ州知事の共和党候補ヴィベク・ラマスワミ氏を含む他の共和党候補者も加わった。
最近の世論調査によると、ハステッド氏は再選を目指して元民主党上院議員シェロッド・ブラウン氏を僅差で追いかけている。
共和党が次期議会で上院の過半数を維持したい場合、ハステッド氏の議席は極めて重要とみられている。共和党は上院維持に広く支持されているが、トランプ大統領の支持率低下、インフレ上昇、進行中のイラン戦争、データセンターへの不安の増大が党内に懸念を引き起こしている。
CNBCが入手し、アクシオスが最初に報じた火曜日のメモの中でNRSCは、「データセンターに対する有権者の認識がすぐに修正されなければ、データセンターに対する反対運動はオハイオ州をはるかに超えて拡大するだろう」と書いている。
一方、ハステッド氏は、クリーブランド・クリフスへのエネルギー省補助金5億ドルを含む、トランプ政権のオハイオ州製造業への投資を宣伝した。この補助金は当初、ミドルタウン施設の水素燃料炉の資金調達としてバイデン政権から与えられたものだが、現在は高炉や人工知能技術など他の改修に使われる予定だ。
クリーブランド・クリフスは声明で、施設への投資総額はDOEの資金と同額の10億ドルになると述べた。同社は、このプロジェクトでは建設中に1,500人以上の労働者を雇用すると発表した。
「ミドルタウンのような場所や偉大な州全域で、この偉大な国に製造業を取り戻すことができる」とハステッド氏は語った。 「そして、なぜ私たちがこれを行うことが重要なのでしょうか？このような投資、ここへの数十億ドルの投資？なぜなら、それは雇用の安全であり、経済の安全であり、国家の安全だからです。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/21/jon-husted-data-centers-ohio-senate.html",
    publishedAt: "2026-08-21T18:39:16+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "ken-griffin-says-citadel-unwound-more-th-c00ccf88",
    title: "Ken Griffin says Citadel unwound more than 80% of risk tied to Situational Awareness portfolio",
    titleJa: "ケン・グリフィン氏は、シタデルが状況認識ポートフォリオに関連するリスクの80%以上を解消したと語る",
    summaryJa: "シタデルのケン・グリフィン氏は金曜日、顧客に宛てた書簡の中で、同社がレオポルド・アッシェンブレナー氏の状況認識ヘッジファンドから資産を購入したことについて初めて触れた。CNBCのサラ・アイゼン氏が入手した書簡によると、グリフィン氏は顧客に対し、シタデルは市場価値40億ドルを超える100回以上のブロック取引を実施することで購入した元のポートフォリオから総リスクの80％以上を解消したと語った。",
    bodyOriginal: `Ken Griffin of Citadel in a letter to clients on Friday addressed for the first time the firm's purchase of assets from Leopold Aschenbrenner's Situational Awareness hedge fund.
According to a letter obtained by CNBC's Sara Eisen, Griffin told clients that Citadel has unwound more than 80% of the aggregate risk from the original portfolio purchased by conducting more than 100 block trades over $4 billion in market value.
Griffin detailed in the letter that Citadel entered discussions with Situational Awareness to acquire some of the fund's holdings on July 29. One day later, CNBC's David Faber reported that Situational Awareness was forced to sell all of its public stock positions after facing steep losses. Citadel was later revealed as the buyer of the assets.
"A transaction of this magnitude could not have been completed without the extraordinary cooperation of the trading and prime brokerage teams at the banks serving both firms," Griffin wrote in the Friday letter to clients. "I am grateful for the focused effort they brought to the rapid transfer of the portfolio."
Griffin also confirmed the firm's flagship multistrategy Wellington fund returned 5.94% in July, which CNBC previously reported marked the fund's best monthly performance since 2022.
Situational Awareness as a hedge fund concentrated positions in the artificial intelligence trade, on a belief by 25-year-old Aschenbrenner that the technology would fundamentally reshape the world and the economy. At the same time, the fund had short positions in some software companies, a sector that investors have worried will be disrupted by AI.
However, the AI trade faltered in June and July — even while broader indexes appeared flat — with stocks that Situational Awareness had large stakes in, like Sandisk and Bloom Energy, tumbling more than 50%. At the same time, software names like Adobe rebounded, meaning the fund was losing money on both its long and short positions.
That set off both margin calls and compulsory sales at the fund.
Since Citadel stepped in to buy the fund's publicly traded assets, the AI trade has rebounded, with Situational Awareness' sale representing a bottom for the sell-off that started in June.`,
    bodyJa: `シタデルのケン・グリフィン氏は金曜日、顧客に宛てた書簡の中で、同社がレオポルド・アッシェンブレナー氏の状況認識ヘッジファンドから資産を購入したことについて初めて触れた。
CNBCのサラ・アイゼン氏が入手した書簡によると、グリフィン氏は顧客に対し、シタデルは市場価値40億ドルを超える100回以上のブロック取引を実施することで購入した元のポートフォリオから総リスクの80％以上を解消したと語った。
グリフィン氏は書簡の中で、シタデルが7月29日に同ファンドの保有株の一部を取得するためにシチュエーショナル・アウェアネスと協議に入ったと詳しく述べた。その翌日、CNBCのデビッド・フェイバーは、シチュエーショナル・アウェアネスが巨額の損失に直面したため、公開株のポジションをすべて売却せざるを得なくなったと報じた。その後、シタデルが資産の買い手であることが明らかになった。
「この規模の取引は、両社にサービスを提供している銀行のトレーディングチームとプライムブローカレッジチームの並外れた協力なしには完了できなかったでしょう」とグリフィン氏は顧客に宛てた金曜日の書簡の中で述べた。 「ポートフォリオの迅速な移転に向けた集中的な取り組みに感謝しています。」
グリフィン氏はまた、同社の主力マルチ戦略ウェリントン・ファンドの7月のリターンが5.94％だったことも認め、CNBCが以前報じたところによると、同ファンドの月間パフォーマンスは2022年以来最高となった。
ヘッジファンドとしての状況認識は、この技術が世界と経済を根本的に変えるという25歳のアシェンブレナー氏の信念に基づいて、人工知能取引にポジションを集中させた。同時に、同ファンドは一部のソフトウェア企業のショートポジションを抱えていたが、この分野は投資家がAIによって破壊されるのではないかと懸念していた。
しかし、AI取引は6月と7月に低迷し、たとえ広範な指数が横ばいであったとしても、サンディスクやブルーム・エナジーなどシチュエーショナル・アウェアネスが多額の株式を保有していた銘柄は50％以上下落した。同時に、Adobe などのソフトウェア名が回復し、ファンドはロングポジションとショートポジションの両方で損失を被ったことを意味しました。
これにより、ファンドでのマージンコールと強制販売の両方が引き起こされました。
シタデルが同ファンドの上場資産の購入に踏み切って以来、AI取引は回復しており、シチュエーションアウェアネスの売却は6月に始まった下落の底となった。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/21/citadel-situational-awareness-ken-griffin.html",
    publishedAt: "2026-08-21T18:34:28+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "trump-vance-and-bessent-try-to-calm-the-42bb5281",
    title: "Trump, Vance and Bessent try to calm the bond market with ‘alternative facts’",
    titleJa: "トランプ氏、バンス氏、ベッセント氏は「もう一つの事実」で債券市場を落ち着かせようとしている",
    summaryJa: "おそらくこれはテレビや切り株で機能するでしょう。しかし、人々が数えられるウォール街ではそれは機能しません。",
    bodyOriginal: `Maybe this stuff works on TV or on the stump. But it doesn’t work on Wall Street, where people can count.`,
    bodyJa: `おそらくこれはテレビや切り株で機能するでしょう。しかし、人々が数えられるウォール街ではそれは機能しません。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/trump-vance-and-bessent-try-to-calm-the-bond-market-with-alternative-facts-8e424378?mod=mw_rss_topstories",
    publishedAt: "2026-08-21T18:29:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-42027181",
    readTime: 2,
  },
  {
    id: "bessent-s-bond-gambit-aimed-at-calming-m-a47bdcd0",
    title: "Bessent's bond gambit aimed at calming markets is instead stirring inflation worries",
    titleJa: "市場の沈静化を狙ったベッセントの債券戦略は、むしろインフレ懸念を煽っている",
    summaryJa: "投資家は過去数日間、今後のインフレ高進の可能性を織り込んでおり、これは国債市場の流動性改善に向けた財務省の今週の取り組みが、より広範な政策への影響に対する懸念を高めていることを示す潜在的な兆候だ。いわゆる損益分岐点金利（米国債利回りを同じ満期のインフレ連動証券と比較する市場ベースの指標）は曲線全体で上昇し、２カ月超ぶりの高水準を記録した。損益分岐点は、インフレ期待だけでなく、投資家がインフレリスクやその他の要因に対して求める補償も反映しています。",
    bodyOriginal: `Investors over the past several days have priced in a likelihood of higher inflation ahead, a potential sign that the Treasury Department's efforts this week to improve liquidity in the government debt market are raising concerns over broader policy implications.
The so-called breakeven rate, a market-based measure that compares Treasury yields to inflation-protected securities of the same maturity, rose across the curve, hitting its highest level in more than two months. Breakevens reflect inflation expectations as well as compensation investors seek for inflation risk and other factors.
At the 10-year horizon, the breakeven rate rose to 2.34% on Thursday, its highest since June 10. Five-year breakevens hit the same level, the highest since June 16. While the measures can be volatile and still imply the market doesn't expect runaway inflation, they also indicate that inflation worries are rising.
The concern follows a Treasury announcement Wednesday saying it will be at least doubling the size of its typical $2 billion debt buyback, a routine operation begun in 2024 that helps provide a market for longer-dated debt.
Though Treasury Secretary Scott Bessent insisted the move wasn't an attempt to tamp down yields, it came after the 10- and 30-year Treasurys hit levels not seen since prior to the global financial crisis in 2008.
"The background here is very unforgiving at the moment, There's this cocktail of concerns that has risen up," said Van Hesser, chief strategist at KBRA, a credit and bond rating agency.
Traders pricing in higher inflation "fits into the backdrop where people are concerned about inflation, and and that continues to lean on the market. These things sort of come and go. I think there are all of these these risks have been out there, and many of them for some time now. They they flare up from time to time and manifest themselves in markets."
Negative market reaction
The rise in market-based inflation expectations follows a general pattern this week.
While long-dated Treasury yields plunged the day of the buyback announcement, they rebounded Thursday and were up again Friday. The 10-year benchmark stood at 4.73% in early afternoon trading, up 3.4 basis points on the day and higher than the pre-announcement level.
Similarly, the 30-year yield climbed 3.6 basis points to 5.27%, while yields also were up on shorter-dated issues. Treasury is required to offset the buybacks of long-dated debt by issuing shorter-term bills.
The jump in yield has been tied to a number of factors, inflation fears prominent among them. Treasurys also have been forced to compete against higher-yielding government debt in Asia and Europe, a record-setting surge of issuance from hyperscalers investing in artificial intelligence, and a general rise in term premiums, or the extra yield investors demand for holding U.S. debt, which surpassed the $40 trillion mark this week.
While yields rose, the dollar also weakened, continuing a trend this week that has seen the greenback lose nearly 0.9%.
The dollar move "too, may be the result of 'read-through' of the Treasury announcement to the prospect of looser Fed policies," wrote Thierry Wizman, Macquarie Group's global foreign exchange and rates strategist.
"Upon the announcement of the buyback increase and the 'signaling effect' it mustered, the 10-year breakeven rose by about 6-7 bps - not insignificant. That's as if to say that something about the announcement was 'inflationary,'" Wizman added.
Treasury Department officials did not respond to a request for comment.
Warsh on deck
The market's response ups the ante for Fed Chairman Kevin Warsh, who is scheduled to deliver his closely watched keynote on Aug. 28 at the central bank's annual symposium in Jackson Hole, Wyo.
Prior statements by Warsh in which he endorsed the Fed having a reduced role in markets were interpreted by markets as being dovish on inflation.
Wizman noted that "were Warsh to signal that he would stay 'dovish' indefinitely, it could be self-defeating for him and the Treasury, since inflation breakevens would rise further, perhaps undoing the stability in the nominal long-term yields that [Treasury Secretary] Scott Bessent is trying to achieve."
Still, some in the market don't see the recent yield spike as cause for concern.
David Zervos, the chief market strategist at Jefferies, pointed out in a CNBC interview that the 10-year note is in "one of the tightest ranges" it has seen in 20 years. "It's not running away from anybody," he said.
"What we're seeing is a different kind of Treasury secretary, someone who's willing to come in and be more tactical, and that is something new for the market, and the market's going to have to adjust to that," Zervos said.
Likewise, Hesser, the KBRA strategist, said the current yield levels are more in keeping with historical norms, a switch after a prolonged period in which the Fed used its tools to keep rates artificially low.
"A 4 to 5% 10-year is a very constructive level of rates in a thriving economy," he said. "I think a 4 to 5% tenure is a very healthy rate that allows interest rates to do what interest rates are supposed to do, and that is moderate capital flows through the economy."`,
    bodyJa: `投資家は過去数日間、今後のインフレ高進の可能性を織り込んでおり、これは国債市場の流動性改善に向けた財務省の今週の取り組みが、より広範な政策への影響に対する懸念を高めていることを示す潜在的な兆候だ。
いわゆる損益分岐点金利（米国債利回りを同じ満期のインフレ連動証券と比較する市場ベースの指標）は曲線全体で上昇し、２カ月超ぶりの高水準を記録した。損益分岐点は、インフレ期待だけでなく、投資家がインフレリスクやその他の要因に対して求める補償も反映しています。
10年間の損益分岐点率は木曜日に2.34%に上昇し、6月10日以来の高水準となった。5年間の損益分岐点も同じ水準に達し、6月16日以来の高水準となった。今回の措置は不安定な可能性があり、市場が暴走するインフレを期待していないことを示唆している一方で、インフレ懸念が高まっていることも示している。
この懸念は、長期債の市場を提供するために2024年に開始される定例オペである通常の20億ドルの債券買い戻しの規模を少なくとも2倍にするという財務省の水曜日の発表を受けたものである。
スコット・ベッセント財務長官は、この措置は利回りを押し下げる試みではないと主張したが、10年債と30年債が2008年の世界金融危機以前以来の水準に達した後の措置だった。
信用・債券格付け会社ＫＢＲＡの首席ストラテジスト、ヴァン・ヘッサー氏は「現時点での背景は非常に容赦ない。さまざまな懸念が積み重なって高まっている」と述べた。
トレーダーらはインフレ高進を織り込んでおり、「人々がインフレを懸念しており、それが市場に依存し続けているという背景に適合している。こうしたことは、ある種、行ったり来たりするものである。これらのリスクはすべて存在しており、その多くはしばらく前から存在していると思う。それらは時折燃え上がり、市場に現れる。」
市場の否定的な反応
今週の市場ベースのインフレ期待の上昇は一般的なパターンに従っている。
長期国債利回りは買い戻し発表当日に急落したが、木曜日には反発し、金曜日には再び上昇した。午後早い時間の取引では１０年物指標は４．７３％となり、この日は３．４ベーシスポイント上昇し、発表前の水準を上回った。
同様に、30年債利回りも3.6ベーシスポイント上昇して5.27％となり、短期債の利回りも上昇した。財務省は長期債の買い戻しを短期手形の発行で相殺するよう求められている。
利回りの急上昇には多くの要因が関係しており、中でもインフレ懸念が顕著だ。財務省はまた、アジアや欧州の高利回り国債、人工知能に投資するハイパースケーラーによる記録的な発行額の急増、定期プレミアム、つまり今週40兆ドルを超えた米国債保有に対する投資家需要の超過利回りとの競争を強いられている。
利回りが上昇する一方でドルも下落し、今週もドルが0.9％近く下落する傾向が続いた。
マッコーリー・グループのグローバル外国為替・金利ストラテジスト、ティエリー・ウィズマン氏は、ドルの動きも「FRB政策緩和の見通しに対する財務省の発表を『読み取った』結果かもしれない」と書いている。
「自社株買い増額の発表とそれが呼び起こした『シグナル効果』を受けて、10年間の損益分岐点は約6～7bps上昇したが、それは無視できないほどではなかった。これは、発表の何かが『インフレ的』だと言っているかのようだ」とウィズマン氏は付け加えた。
財務省当局者はコメント要請に応じなかった。
デッキ上のウォーシュ
市場の反応により、8月28日にワイオミング州ジャクソンホールで開催される中央銀行年次シンポジウムで注目を集める基調講演を予定しているケビン・ウォーシュFRB議長への期待が高まっている。
FRBの市場における役割の縮小を支持したウォーシュ氏の以前の発言は、市場によってインフレに関してハト派的であると解釈された。
ウィズマン氏は、「ウォーシュ氏が無期限に『ハト派』であり続けると示唆した場合、インフレ損益分岐点がさらに上昇し、スコット・ベッセント氏（財務長官）が達成しようとしている名目長期利回りの安定が台無しになる可能性があるため、それは同氏と財務省にとって自滅的になる可能性がある」と指摘した。
それでも市場の一部は、最近の利回りの急上昇を懸念材料とはみなしていない。
ジェフリーズの首席市場ストラテジスト、デビッド・ゼルボス氏はCNBCのインタビューで、10年債は過去20年間で最も狭いレンジの一つにあると指摘した。 「それは誰からも逃げているわけではない」と彼は言った。
ゼルボス氏は「われわれが見ているのは、これまでとは異なる種類の財務長官だ。喜んで登場してより戦術的に行動しようとする人物だ。これは市場にとって新しいことであり、市場はそれに適応する必要があるだろう」と述べた。
同様に、KBRAのストラテジスト、ヘッサー氏は、現在の利回り水準は歴史的基準に沿ったものとなっており、FRBが金利を人為的に低水準に維持するためのツールを長期間使用した後の転換であると述べた。
同氏は「１０年物４─５％は、繁栄する経済においては非常に建設的な金利水準だ」と述べた。 「４─５％の金利は金利が本来の役割を果たせる非常に健全な金利だと思う。経済全体に適度な資本が流れるということだ」と述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/21/bessents-bond-gambit-aimed-at-calming-markets-is-instead-stirring-inflation-worries-.html",
    publishedAt: "2026-08-21T17:51:10+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 6,
  },
  {
    id: "us-borrowing-costs-rise-as-attempts-to-e-929e0440",
    title: "US borrowing costs rise as attempts to ease rates prove short-lived",
    titleJa: "金利緩和の試みが長続きしないことが判明し、米国の借り入れコストが上昇",
    summaryJa: "金利緩和の試みが長続きしないことが判明し、米国の借り入れコストが上昇- 公開されました",
    bodyOriginal: `US borrowing costs rise as attempts to ease rates prove short-lived
- Published
Long-term borrowing costs in the US rose again despite an announcement from the government that it would intervene to try to lower them.
Earlier this week, the Treasury Department said it would buy back more debt in a bid to lower rates being charged by investors on global bond markets, which governments and major corporations rely on to borrow money.
While rates - or yields as they are called - eased on borrowing over 30 years following the intervention, they have since risen again. Such moves can affect mortgage rates and car loans.
Economists said the surprise move by the US government had proved short-lived, with ongoing concerns over the level of borrowing as national debt passed $40tn.
On Friday, the interest rate on 30-year bonds had risen to around 5.27%.
Governments and corporations sell bonds - essentially an IOU - to raise money for spending, and in return they pay interest. Interest rates on bonds are known as yields.
Bond investors typically demand higher returns - or yields - if inflation is high or they expect it to be elevated in the future.
Yields had fallen sharply earlier this week to 5.18% from an almost two-decade high of 5.34% following the Treasury Department announcing its "support".
By stepping in to buy back government debt, Treasury Secretary Scott Bessent aimed to boost demand for bonds and lower borrowing rates.
But the strategy has appeared to have only worked in the short-term.
John Canavan, lead analyst at Oxford Economics said the response to the government's intervention was "unsurprisingly short-lived".
He said traders were focused on the "daunting" amounts of global borrowing from governments and corporations, as well as increases in oil prices.
"As Bessent himself confirmed, the move is mainly a signalling mechanism, with the Treasury showing it is prepared to step in with yields near current levels," said economists at Capital Economics.
"It is not necessarily an effective one, however, as much of the initial fall in 30-year yields has now been reversed."
The BBC has contacted the Treasury Department for comment on the market reaction.
Bessent sought to blame the Biden administration for the current situation, telling US media on Thursday: "We did not get here in a day, we were left with a mess."
Why the US economy is ringing alarm bells
- Published10 hours ago
US national debt passes $40tn after doubling in a decade
- Published1 day ago
Global borrowing costs have spiked in recent months due to higher oil prices caused by the US-Iran war disrupting supplies and stoking fears of inflation.
Large amounts of cash being borrowed by tech firms to develop Artificial Intelligence (AI), with the timeline and level of returns on investment uncertain, and tax revenues being outstripped by public spending have also contributed to higher yields.
On Wednesday, figures revealed US national debt had more than doubled in a decade to reach a milestone $40tn (£29.4tn).
The rise reflects years of heavy spending under both the Trump and Biden administrations, along with higher interest payments that have added to the total. In 2016, the national debt stood at just under $20tn.
In response to volatility in the bond markets, the dollar weakened. The dollar the world's primary reserve currency, meaning it is held by central banks around the world in large quantities as part of their foreign exchange reserves.
Central banks use US dollars in international transactions, to pay for international debt, or to support domestic exchange rates.
A fall in the dollar means US goods exports become cheaper, but imported goods may become more expensive due to the weaker currency. Americans going abroad also might notice their money does not go as far, while foreign tourists in the US might find their currency will buy them more.
Gold climbed to a more than three-month high on Friday amid uncertainty in the global economy. Investors see gold once of the safest places to invest in.`,
    bodyJa: `金利緩和の試みが長続きしないことが判明し、米国の借り入れコストが上昇
- 公開されました
米国の長期借入コストは、政府が引き下げに向け介入すると発表したにもかかわらず、再び上昇した。
財務省は今週初め、政府や大手企業が資金の借り入れに依存している世界の債券市場で投資家が課す金利を引き下げるため、さらに多くの債券を買い戻すと発表した。
金利、または利回りと呼ばれるものは、介入後 30 年間にわたって借入が緩和されましたが、その後再び上昇しました。こうした動きは住宅ローン金利や自動車ローンに影響を与える可能性がある。
エコノミストらは、国家債務が40兆ドルを突破する中、借入水準をめぐる懸念が続いており、米政府の予想外の措置は長続きしなかったとの見方を示した。
金曜時点では３０年債金利は５．２７％付近まで上昇していた。
政府や企業は支出資金を調達するために債券（本質的には借用書）を販売し、その見返りに利子を支払います。債券の金利は利回りとして知られています。
債券投資家は通常、インフレ率が高い場合、またはインフレ率が将来上昇すると予想される場合、より高いリターン、つまり利回りを要求します。
財務省が「支援」を発表したことを受け、利回りは今週初め、約２０年ぶりの高水準だった５．３４％から５．１８％に急低下していた。
スコット・ベッセント財務長官は国債の買い戻しに踏み切ることで、債券の需要を高め、借入金利を引き下げることを目指した。
しかし、この戦略は短期的にしか機能しなかったようだ。
オックスフォード・エコノミクスの主任アナリスト、ジョン・カナバン氏は、政府の介入に対する反応は「当然のことながら短命だった」と述べた。
同氏は、トレーダーらは原油価格の上昇だけでなく、政府や企業からの「気の遠くなるような」世界的な借入額にも注目していると述べた。
キャピタル・エコノミクスのエコノミストらは「ベッセント氏自身も確認したように、今回の措置は主にシグナル伝達のメカニズムであり、財務省が利回りを現状水準に近い水準で介入する用意があることを示している」と述べた。
「とはいえ、30年債利回りの当初の下落の大部分は現在では反転しているため、必ずしも効果的なものではない。」
BBCは市場の反応についてコメントを求めて財務省に問い合わせた。
ベッセント氏は木曜、米メディアに対し、現在の状況はバイデン政権のせ​​いだと主張し、「一日にして成らず、混乱が残った」と語った。
米国経済が警鐘を鳴らしている理由
- 10 時間前に公開
米国の国債、10年で倍増、40兆ドルを突破
- 1 日前に公開
米国とイランの戦争による原油価格の高騰で供給が混乱し、インフレ懸念が高まったため、世界の借入コストはここ数カ月で急上昇している。
投資収益率のスケジュールや水準が不透明な中、人工知能（AI）開発のためにハイテク企業が多額の現金を借り入れていることや、税収が公共支出を上回っていることも利回りの上昇に寄与している。
水曜日の統計は、米国の国債が10年間で2倍以上に増加し、節目となる40兆ドル（約29兆4000億ポンド）に達したことを明らかにした。
この増加は、トランプ、バイデン両政権下で長年にわたる巨額支出と、利払い総額の増加を反映している。 2016 年の国家債務は 20 兆ドル弱でした。
債券市場のボラティリティーを受けてドル安となった。ドルは世界の主要準備通貨であり、世界中の中央銀行が外貨準備の一部として大量に保有していることを意味します。
中央銀行は国際取引で米ドルを使用し、国際債務の支払いや国内為替レートの維持に使用します。
ドルの下落は米国製品の輸出が安くなることを意味しますが、通貨安により輸入品は高くなる可能性があります。海外に行くアメリカ人も、自分のお金がそれほど遠くに行かないことに気づくかもしれないが、米国にいる外国人観光客は、自国の通貨がもっと買ってくれると気づくかもしれない。
世界経済の不確実性を背景に、金は金曜日に３カ月ぶりの高値まで上昇した。投資家はかつて金を最も安全な投資先だと考えています。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cvg92p3ez17o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-21T16:45:09+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/4911/live/003dd3f0-9d81-11f1-adf5-2dc21c9cc109.jpg",
    readTime: 4,
  },
  {
    id: "trump-to-allow-import-of-300-000-metric-0068d9b0",
    title: "Trump to allow import of 300,000 metric tons of ground beef without tariff",
    titleJa: "トランプ大統領、30万トンのひき肉を関税なしで輸入許可へ",
    summaryJa: "ドナルド・トランプ大統領は金曜朝、米国は今後3カ月以内に、割当外関税の適用を受けずに最大30万トンのひき肉製品の輸入を許可すると発表した。トランプ大統領はまた、「この牛肉を現在の市場価格より２５％低く販売するという約束がある」とも述べた。",
    bodyOriginal: `President Donald Trump on Friday morning said the United States will allow up to 300,000 metric tons of product for ground beef to be imported over the next three months without being subject to out-of-quota tariffs.
Trump also said, "We have a commitment that this beef will be sold at 25 percent below current market prices."
Trump will formally sign an executive order on the tariff waiver for beef trimmings imports within the next two weeks, according to the White House.
The president's Truth Social post announcing the move did not say which companies had made those commitments, which he said came "as we work to rebuild this herd [of U.S. cattle] and help our ranchers."
Trump also did not say which foreign beef exporters he had reached a deal with.
The National Cattlemen's Beef Association criticized the move, saying it would not address Trump's stated intention of helping to increase the size of the U.S. beef herd.
Sen. Tim Sheehy, R-Mont., in a tweet, said, "I've advised President Trump against this course of action for a year because American ranchers have been struggling against the packer monopoly for decades, and this will further harm them — most of whom are MAGA Republicans."
"The President's heart is in the right place on wanting lower prices for the American people, and beef prices have been impacted by the Mexican screwworm," Sheehy said.
"But the reality is this action will make it more difficult for American ranchers to rebuild our herd and bring prices down for the American people," the senator said. "And most importantly, this will harm our ranching families who feed the nation."
The U.S. imposes tariffs on imported beef beyond a certain quota limit for individual countries.
A report in May from the American Farm Bureau Federation noted that "imports entering under quota generally face a tariff of just 4.4 cents per kilogram, while imports above quota face a 26.4% tariff."
"For beef valued around $7 per kilogram, that difference can exceed $1.80 per kilogram in tariff costs," the report said.
Beef prices in the U.S have soared in 2026 due to a reduction in the nation's cattle herd from years of drought, high feed costs and herd liquidation. The size of the herd is at its lowest point since the 1950s.
Trump's post comes as his fellow Republicans fear that Americans' concerns about the affordability of everyday products such as food could lead to losses for GOP candidates in congressional elections in November.
"Today, I concluded a deal to substantially lower the price of ground beef for working American families," Trump said in his post.
"This deal will reduce prices for Americans while giving space for our Great American Beef Herd to grow again," he said.
National Cattlemen's Beef Association CEO Colin Woodall, in a statement, said his group "is disappointed by the President's statement."
"While America's cattle producers share the goal of keeping groceries affordable for consumers, flooding the market with government-subsidized, below-market beef is not the way to rebuild the American cattle herd," Woodall said. "Cattle markets have already turned sharply lower this morning, to the detriment of farmers and ranchers."
"Today's announcement and other market interventions throw cold water on the prospect of herd expansion and sacrifices long-term stability for short term messaging," Woodall said.
Altin Kalo, head economist at Steiner Consulting Group, said the potential impact on prices remains to be seen.
"Imported beef already is trading at a steep discount," Kalo told CNBC.
"The out-of-quota tariff has not been an issue for importers to this point as a record amount is being imported," he said.
Kalo said that many grocery stores use only fresh ground beef in the meat case.
But almost all beef that is meant to be used for grinding beef, which comes from Australia or Brazil, is frozen, and a large portion of that goes to food service operations, mostly fast food companies.`,
    bodyJa: `ドナルド・トランプ大統領は金曜朝、米国は今後3カ月以内に、割当外関税の適用を受けずに最大30万トンのひき肉製品の輸入を許可すると発表した。
トランプ大統領はまた、「この牛肉を現在の市場価格より２５％低く販売するという約束がある」とも述べた。
ホワイトハウスによると、トランプ大統領は今後２週間以内に牛肉トリミング輸入品の関税免除に関する大統領令に正式に署名する予定だという。
この動きを発表したトランプ大統領のトゥルース・ソーシャルへの投稿では、どの企業がそうした約束をしたのかについては言及されておらず、「この（米国牛の）群れを再建し、牧場主を支援するために取り組んでいる」としてそうした約束をしたと同氏は述べた。
トランプ大統領はまた、どの外国牛肉輸出業者と合意に達したかについても言及しなかった。
全米畜産牛肉協会は、米国の牛肉群れの規模拡大を支援するというトランプ大統領の明言された意図に対処するものではないとし、この動きを批判した。
ティム・シーヒー上院議員（共和党、モント州）はツイートで、「私はトランプ大統領にこの行動方針に反対するよう1年間忠告してきた。なぜなら米国の牧場経営者は数十年にわたりパッカーの独占に対して苦闘しており、これは彼らにさらなる損害を与えるだろうからだ。彼らのほとんどはMAGA共和党員だ」と述べた。
シーヒー氏は、「米国民のために低価格を求める大統領の心は正しいところにあり、牛肉の価格はメキシコのラセンウジ虫の影響を受けている」と述べた。
「しかし現実には、この措置により、米国の牧場主が群れを再建し、米国国民のために価格を下げることがさらに困難になるだろう」と上院議員は述べた。 「そして最も重要なことは、これは国民を養う牧畜家族に損害を与えることになるだろう。」
米国は各国に対する一定の割当制限を超えた輸入牛肉に関税を課している。
米国農業局連盟の5月の報告書は、「割当量内で入ってくる輸入品には一般に1キログラム当たりわずか4.4セントの関税が課されるが、割当量を超える輸入品には26.4％の関税が課せられる」と指摘している。
同報告書は、「牛肉の価値が1キロ当たり約7ドルの場合、その差額は関税コストとして1キロ当たり1.80ドルを超える可能性がある」としている。
米国の牛肉価格は、長年の干ばつによる国内の牛群の減少、飼料コストの高騰、牛群の整理により、2026年に高騰した。群れの規模は1950年代以来最低となっている。
トランプ大統領の投稿は、食品など日用品の手頃な価格に対する米国民の懸念が11月の議会選挙で共和党候補者の損失につながる可能性があると共和党員らが懸念している中で行われた。
トランプ大統領は投稿の中で、「今日、私は米国の勤労家庭向けにひき肉の価格を大幅に引き下げる協定を締結した」と述べた。
同氏は、「この協定は米国人にとっての価格を引き下げると同時に、グレート・アメリカン牛群が再び成長する余地を与えることになるだろう」と述べた。
全米畜産牛肉協会のコリン・ウッドール最高経営責任者（CEO）は声明で、同団体は「大統領の声明に失望している」と述べた。
「米国の牛生産者は、食料品を消費者にとって手頃な価格に保つという目標を共有しているが、政府補助金を受けて市場価格以下の牛肉を市場に溢れさせることは、米国の牛群を再建する方法ではない」とウドール氏は述べた。 「牛市場は今朝すでに大幅に下落しており、農家や牧場主は不利益を被っている。」
ウドール氏は「今日の発表やその他の市場介入は群れ拡大の見通しに冷や水を浴びせ、短期的なメッセージのために長期的な安定を犠牲にするものだ」と述べた。
シュタイナー・コンサルティング・グループの首席エコノミスト、アルティン・カロ氏は、物価への潜在的な影響はまだ分からないと述べた。
「輸入牛肉はすでに大幅な割引価格で取引されている」とカロ氏はCNBCに語った。
同氏は「記録的な量が輸入されているため、輸入業者にとって割当外関税はこれまで問題になっていない」と述べた。
カロ氏によると、多くの食料品店では肉ケースに新鮮なひき肉のみを使用しているという。
しかし、オーストラリアやブラジル産の、挽肉に使用される牛肉のほとんどは冷凍されており、その大部分は外食産業、主にファストフード会社に送られる。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/21/trump-ground-beef-import-tariff.html",
    publishedAt: "2026-08-21T16:42:13+00:00",
    category: "貿易",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
    readTime: 5,
  },
  {
    id: "canada-should-fight-as-us-trade-deadline-05962e6b",
    title: "Canada 'should fight' as US trade deadline looms, Manitoba premier says",
    titleJa: "米国の通商期限が迫る中、カナダは「戦うべき」マニトバ州首相発言",
    summaryJa: "米国の通商期限が迫る中、カナダは「戦うべき」マニトバ州首相発言- 公開されました",
    bodyOriginal: `Canada 'should fight' as US trade deadline looms, Manitoba premier says
- Published
One of Canada's provincial leaders has criticised a prospective trade deal with the US and pushed his country to hold out for favourable terms, showing Prime Minister Mark Carney faces a tough battle in getting buy-in on the agreement hours away from a US-set deadline.
Negotiators have until Friday night to finalise the deal or risk a fresh wave of additional US tariffs on a wide range of Canadian goods.
Still, Manitoba Premier Wab Kinew said Canada "should fight" and not rush to make concessions.
Carney needs Kinew and other premiers to restore sales of US alcohol on liquor store shelves, so that the US will reportedly agree to reduce some of its tariffs on Canadian metals and autos.
Trump pauses new tariffs on Canada for three days, saying deal close
- Published2 days ago
Canada's 'powerful' dairy sector is in Trump's trade crosshairs
- Published23 July
Canada-US Trade Minister Dominic LeBlanc is set to meet with his counterpart, US Trade Representative Jamieson Greer, again on Friday morning.
After a meeting with Greer that lasted more than three hours on Thursday, LeBlanc told reporters that the two sides were "very close".
Details leaked to several media outlets suggest the US will agree to reduce tariffs on Canadian steel and aluminium from 50% to 25%, and tariffs on Canadian automobiles from 25% to 15%.
In addition to restoring the sale of American booze, Canada is said to be considering allowing American dairy producers greater access to its market and removing its retaliatory tariffs on the US.
As negotiators have worked around the clock to hammer out a deal, some Canadians are expressing concern about what is - and what isn't - on the table.
President Donald Trump has hailed the possible deal as good for American farmers and manufacturers, while Carney has said the two sides are closing in on an agreement addressing "Canada's most important strategic sectors".
Kinew said on Thursday that he believed Trump was a "bad person", and questioned why Canada would give up some of its leverage by restoring US alcohol sales.
"Everybody knows the American president by now, he's erratic, he's irresponsible, and he's not to be trusted," Kinew said. "And this is the person that we were supposed to make a deal with, and we're going to make additional concessions for it."
Kinew added that he would reluctantly restore the sale of US alcohol in his province if it was for the benefit of all of Canada, but he urged Canadians not to buy it.
"Let it sit on the shelf," he said.
Quebec Premier Christine Fréchette, whose province is home to a large dairy industry, said on Thursday that she was analysing what the deal will mean for Quebec farmers before deciding on whether to restore US alcohol sales.
Doug Ford, the traditionally outspoken premier of Canada's largest province Ontario, has yet to comment publicly on the deal.
Meanwhile, other premiers, namely of Nova Scotia and the Yukon territory, said they were prepared to restore US alcohol sales.
The mayor of an Ontario city that is home to the country's second-largest steel producer told the CBC that a deal that includes 25% tariffs on the sector "wouldn't be something to celebrate".
"I am worried with the news that's coming out that we are not seeing a deal that will benefit our community at the very least," Mayor Matthew Shoemaker said.
Leader of the Conservative opposition Pierre Poilievre also criticised what is known about the deal so far, saying that "one-sided tariffs on Canadian industry would be a bad deal."
But Carney has also faced pressure from businesses and stakeholders to reach a deal that would avert an additional 50% tariff that Trump has threatened on a range of Canadian goods, from hockey equipment to wine to cement.
Canada could lose 90,000 jobs if the new tariffs were implemented, according to estimates in an analysis published on Thursday, external by Trevor Tombe, a Calgary-based economist.
The mixed reaction so far is a glimpse of the task ahead for Prime Minister Carney after he campaigned on a tough "elbows-up" approach to dealing with Trump.
Polls suggest a majority of Canadians would be unhappy if the Carney government made significant concessions to the US, with 56% surveyed by polling firm Leger, external saying they wanted Canada to take a hardline approach.
In a leaked audio recording reported by the Canadian Press, US Vice-President JD Vance told attendees at a private fundraiser on Wednesday that Carney has tried to "out-tough Donald Trump" in trade talks.
"It's hilarious because Carney presents this as some victory for Canada when fundamentally, like, they climb down on a lot of issues," Vance reportedly told the room.`,
    bodyJa: `米国の通商期限が迫る中、カナダは「戦うべき」マニトバ州首相発言
- 公開されました
カナダの州指導者の一人は、米国との通商協定の見通しを批判し、有利な条件を求めてカナダに持ちこたえるよう促しており、マーク・カーニー首相が米国が設定した期限まであと数時間で協定への賛同を得るためには厳しい戦いに直面していることが示された。
交渉関係者らは金曜夜までに合意をまとめる必要があり、さもなければ幅広いカナダ製品に対する米国の追加関税の新たな波にさらされる危険を冒すことになる。
それでもマニトバ州のワブ・キニュー首相は、カナダは「戦うべき」であり、急いで譲歩すべきではないと述べた。
報道によると、米国がカナダの金属や自動車に対する関税の一部を引き下げることに同意するよう、カーニー首相はキニュー氏や他の首相に対し、酒屋の店頭での米国産アルコールの販売を回復するよう求めている。
トランプ大統領、カナダへの新たな関税を3日間一時停止、合意成立と表明
- 2 日前に公開
カナダの「強力な」乳製品セクターがトランプ大統領の貿易標的に
- 7 月 23 日発行
カナダ・米国貿易相のドミニク・ルブラン氏は金曜日午前にジェイミーソン・グリア米国通商代表と再び会談する予定だ。
木曜日に３時間以上続いたグリア氏との会談後、ルブラン氏は記者団に対し、両者は「非常に緊密」であると語った。
複数のメディアに流出した詳細によると、米国はカナダの鉄鋼とアルミニウムに対する関税を50％から25％に、カナダの自動車に対する関税を25％から15％に引き下げることに同意する予定だ。
カナダは米国産酒の販売を回復することに加えて、米国の乳製品生産者に自国市場へのより大きなアクセスを許可し、米国に対する報復関税を撤廃することを検討していると言われている。
交渉担当者が協定をまとめるために24時間体制で取り組んでいる中、一部のカナダ国民は、テーブルに何があり、何がテーブルにないのかについて懸念を表明している。
ドナルド・トランプ大統領は、合意の可能性は米国の農家や製造業者にとって良いものだと歓迎し、カーニー氏は、両国が「カナダの最も重要な戦略分野」に取り組む合意に近づいていると述べた。
キニュー氏は木曜日、トランプ氏は「悪い人」だと信じていると述べ、なぜカナダが米国のアルコール販売を回復することで影響力の一部を手放すのか疑問を呈した。
「アメリカ大統領のことは今では誰もが知っているが、彼は常軌を逸しており、無責任で、信頼できる人物ではない」とキニュー氏は語った。 「そしてこの人は我々が取引をするはずだった人物であり、我々はそれに対して追加の譲歩をするつもりだ。」
キニュー氏は、カナダ全土の利益のためなら、しぶしぶ州内での米国産アルコールの販売を再開するつもりだが、カナダ人には買わないよう呼び掛けた、と付け加えた。
「棚に置いておきなさい」と彼は言った。
ケベック州に大規模な酪農産業が本拠地を置くケベック州のクリスティーヌ・フレシェット首相は木曜日、米国のアルコール販売を再開するかどうかを決定する前に、この協定がケベック州の農家にとってどのような意味を持つかを分析していると述べた。
カナダ最大の州オンタリオ州の伝統的に率直な首相であるダグ・フォード氏は、この協定についてまだ公にはコメントしていない。
一方、他のノバスコシア州とユーコン準州の首相は、米国のアルコール販売を回復する用意があると述べた。
国内第２位の鉄鋼生産国の本拠地であるオンタリオ州の市長はＣＢＣに対し、同部門への２５％の関税を含む合意は「祝うべきことではない」と語った。
マシュー・シューメーカー市長は、「少なくとも地域社会に利益をもたらすような合意が得られないとのニュースを見て心配している」と語った。
保守党野党党首のピエール・ポイエーブル氏も、これまでにわかっている合意内容を批判し、「カナダの産業に対する一方的な関税は悪い合意だろう」と述べた。
しかしカーニー氏はまた、ホッケー用具からワイン、セメントに至るまで幅広いカナダ製品に対してトランプ大統領が脅迫している50％の追加関税を回避する合意に達するよう、企業や利害関係者からの圧力にも直面している。
カルガリーを拠点とする経済学者トレバー・トンベ氏が木曜日に発表した社外分析の推計によると、新たな関税が実施された場合、カナダは9万人の雇用を失う可能性がある。
これまでのところさまざまな反応が見られるのは、トランプ氏に対処するために厳しい「ひじを上げた」アプローチを掲げて選挙運動を行ってきたカーニー首相がこれから直面する課題を垣間見ることができる。
世論調査によると、カーニー政権が米国に大幅な譲歩をした場合、カナダ国民の大多数が不満を抱いており、世論調査会社レジャーの調査では56％がカナダに強硬なアプローチを取ることを望んでいると外部から回答している。
カナダ通信社が報じた漏洩音声記録の中で、JD・バンス米副大統領は水曜日の非公開募金活動の参加者に対し、カーニー氏は通商協議で「ドナルド・トランプ氏を打ち負かそうとしている」と語った。
ヴァンス氏は会場で「カナダが根本的に多くの問題で折り合いをつけているのに、カーニー氏はこれをカナダの何らかの勝利として提示しているのだから面白い」と語ったという。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/czjlr0evy0do?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-21T15:34:06+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/768e/live/ffd477b0-9d68-11f1-a07c-85afe5c51b6f.jpg",
    readTime: 6,
  },
  {
    id: "bitcoin-on-track-for-best-week-in-more-t-b933351b",
    title: "Bitcoin on track for best week in more than two years. Has the next crypto bull market arrived?",
    titleJa: "ビットコインは過去2年以上で最高の週を記録。次の仮想通貨強気市場は到来したのか?",
    summaryJa: "ビットコインは長期にわたる低迷を経て前進する準備ができているのだろうか?あるアナリストは、投資家は仮想通貨の底値を推測する際に注意すべきだと述べている。",
    bodyOriginal: `Is bitcoin ready to move on after a lengthy slump? One analyst says investors should be careful in trying to guess a bottom for the crypto.`,
    bodyJa: `ビットコインは長期にわたる低迷を経て前進する準備ができているのだろうか?あるアナリストは、投資家は仮想通貨の底値を推測する際に注意すべきだと述べている。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/bitcoin-on-track-for-best-week-in-more-than-two-years-has-the-next-crypto-bull-market-arrived-0181180c?mod=mw_rss_topstories",
    publishedAt: "2026-08-21T13:01:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-97523838",
    readTime: 2,
  },
  {
    id: "u-s-canada-near-final-trade-deal-as-trum-98f91481",
    title: "U.S., Canada near final trade deal as Trump tariff deadline looms",
    titleJa: "トランプ大統領の関税期限が迫る中、米国とカナダは最終通商合意に近づく",
    summaryJa: "米国とカナダは、ドナルド・トランプ大統領によるホッケースティック、ワイン、その他のカナダ製品に対する土曜日早朝の新たな関税の発効を阻止する最終的な貿易協定をまだ発表していない。50％の報復関税は当初水曜日に発動される予定だったが、トランプ大統領は11時間目の真実ソーシャルへの投稿で、ワシントンとオタワが暫定合意をまとめることができるよう、報復関税を3日間延期すると述べた。",
    bodyOriginal: `The U.S. and Canada have yet to announce a final trade deal that will keep President Donald Trump's new tariffs on hockey sticks, wine and other Canadian goods from taking effect early Saturday morning.
The 50% retaliatory tariffs were initially set to kick in Wednesday — until Trump, in an eleventh-hour post on Truth Social, said he would postpone them for three days so Washington and Ottawa could finalize a tentative deal.
Trump's post signaled that the agreement was all but complete, "subject to the finalization of documents." But trade officials emerged from additional rounds of talks in Washington on Wednesday and Thursday without a final deal in hand.
"We're very close," Canada-U.S. Trade Minister Dominic LeBlanc told reporters Thursday afternoon. "We continue to make progress, and we're going to stay here and do the work that's necessary until we get to that point."
LeBlanc noted that Canadian negotiator Janice Charette was still engaged in talks with U.S. Trade Representative Jamieson Greer and other Trump administration officials.
"Canadians expect us to get a deal that's in the economic interest of Canada and Canadian workers," LeBlanc said.
If no deal is reached by 12:01 a.m. ET on Saturday, the 50% tariffs on roughly $20 billion worth of imports will switch on. Businesses have warned that the duties could cripple their sales, and that the threat alone has already taken a toll.
Negotiators have been tight-lipped about the specifics of a deal, as well as the remaining sticking points. Trump's existing tariffs on imports of Canadian steel, aluminum and lumber are a central concern, The New York Times reported Thursday, citing people familiar with the talks.
LeBlanc and his office have declined to comment to CNBC on how the metals tariffs factor into the negotiations.
Trump said Wednesday that the U.S. might agree to lower those duties and suggested that lower tariffs on Canadian autos might also be on the table. Trump has also suggested that the deal could revive Keystone XL, the planned oil pipeline from Alberta to Nebraska that was scrapped in 2021 by then-President Joe Biden.
The Trump administration has said that Canada has committed to lower its trade barriers on the U.S., without offering specifics.
Trump said Wednesday that Canadian tariffs "will be nonexistent for our farmers." The looming 50% tariff threat was partly based on Canada's alleged discrimination against the U.S. dairy industry. Canada has not confirmed Trump's claim.
Prime Minister Mark Carney said in an X post Wednesday, "We are now moving towards an agreement that reinforces that Canadian advantage, including by securing the best terms in each of Canada's most important strategic sectors and providing greater certainty about our future trading relationship."
The looming 50% tariffs were invoked last month under Section 338 of the Tariff Act of 1930, which lets the president impose duties in response to discrimination or unfair commerce. But the Great Depression-era law has rarely, if ever, been invoked, and it has been neglected for decades.
This is developing news. Please check back for updates.`,
    bodyJa: `米国とカナダは、ドナルド・トランプ大統領によるホッケースティック、ワイン、その他のカナダ製品に対する土曜日早朝の新たな関税の発効を阻止する最終的な貿易協定をまだ発表していない。
50％の報復関税は当初水曜日に発動される予定だったが、トランプ大統領は11時間目の真実ソーシャルへの投稿で、ワシントンとオタワが暫定合意をまとめることができるよう、報復関税を3日間延期すると述べた。
トランプ大統領の投稿は、「文書の完成を条件として」合意がほぼ完全であることを示唆した。しかし通商当局者らは水曜と木曜にワシントンで行われた追加協議を最終合意が得られないまま終了した。
カナダ・米国貿易相のドミニク・ルブラン氏は木曜午後、記者団に対し「われわれは非常に接近している」と語った。 「私たちは進歩を続けており、その点に到達するまでここに留まり、必要な作業を行うつもりです。」
ルブラン氏は、カナダの交渉官ジャニス・シャレット氏がジェイミーソン・グリア米通商代表らトランプ政権の他の当局者らと依然として協議を行っていると指摘した。
ルブラン氏は「カナダ国民は、カナダとカナダ労働者の経済的利益にかなう協定が得られることを期待している」と述べた。
土曜日の東部時間午前0時1分までに合意に至らなかった場合、約200億ドル相当の輸入品に対して50％の関税が発動されることになる。企業らは、関税によって売上が減少する可能性があり、脅威だけでもすでに大きな被害が出ていると警告している。
交渉関係者らは合意の詳細や残りの懸案点について口を閉ざしている。ニューヨーク・タイムズ紙は木曜日、協議に詳しい関係者の話として、カナダの鉄鋼、アルミニウム、木材の輸入に対するトランプ大統領の既存の関税が最大の懸念事項であると報じた。
ルブラン氏と彼の事務所は、金属関税が交渉にどのように織り込まれるかについてCNBCにコメントすることを拒否した。
トランプ大統領は水曜日、米国はこれらの関税の引き下げに同意する可能性があると述べ、カナダの自動車に対する関税引き下げも検討の対象となる可能性があることを示唆した。トランプ大統領はまた、この協定により、当時のジョー・バイデン大統領によって2021年に廃止されたアルバータ州からネブラスカ州への石油パイプライン計画が再開される可能性があると示唆した。
トランプ政権は、カナダは米国に対する貿易障壁を下げると約束していると述べたが、詳細は明らかにしなかった。
トランプ大統領は水曜日、カナダの関税は「我が国の農家にとっては存在しない」と述べた。差し迫った50％の関税の脅威は、米国の乳製品業界に対するカナダの差別疑惑に部分的に基づいていた。カナダはトランプ氏の主張を確認していない。
マーク・カーニー首相は水曜日のXポストで、「我々は現在、カナダの最も重要な戦略分野のそれぞれで最良の条件を確保し、将来の通商関係についてより確実性をもたらすなど、カナダの優位性を強化する合意に向けて進んでいる」と述べた。
差し迫った50％の関税は、差別や不公正な取引に対応して大統領が関税を課すことを可能にする1930年関税法第338条に基づいて先月発動された。しかし、大恐慌時代の法律が発動されたことはあってもほとんどなく、何十年も無視されてきた。
これは発展途上のニュースです。最新情報を再度ご確認ください。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/21/trump-canada-tariffs-trade-deal-deadline.html",
    publishedAt: "2026-08-21T12:17:29+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "gold-rebounds-as-bond-jitters-debt-fears-29ecb0bc",
    title: "Gold rebounds as bond jitters, debt fears and weaker dollar revive bullion demand",
    titleJa: "債券不安、債務不安、ドル安により地金需要が回復、金が反発",
    summaryJa: "債券市場の動揺、ドル安、米国債務に対する新たな懸念が貴金属の需要を回復する中、金価格は金曜日に上昇し、今週は地金が5％近く上昇する見通しとなった。金曜序盤の取引で金先物は1.67％上昇して4,647.70ドルとなり、地金現物価格は1.55％上昇し4,588.08ドルで取引された。この上昇により、貴金属の週のプラス週の上限が決まり、先物相場は３カ月ぶりの高値に向けて推移しており、５日間で４．７％上昇した。",
    bodyOriginal: `Gold prices climbed Friday, putting bullion on course for a gain of nearly 5% this week, as bond market jitters, a softer dollar and renewed concerns over U.S. debt helped revive demand for the precious metal.
Gold futures rose 1.67% to $4,647.70 in early trading Friday, while spot bullion prices notched a 1.55% gain, trading at $4,588.08. The advance caps a positive week for the precious metal, which is up 4.7% over the five-day period, with futures moving toward a three-month high.
The rebound follows gold's sharp reversal from record highs of almost $5,600 earlier this year, and its worst quarterly perfomance since 2013 in the three months through June.
Giovanni Staunovo, commodity analyst at UBS, said rising debt levels globally, coupled with sustained weakness in the dollar, underpinned gold's surge last year — and now those concerns are returning.
"[That] should lift the price of gold to $5,400 per ounce over the next 12 months, in our view," Staunovo told CNBC via email.
The Treasury Department said Wednesday it would at least double the size of liquidity-support buybacks for 10- to 30-year government debt, an effort to stabilize a selloff in longer-dated Treasurys. The announcement initially pushed Treasury yields lower and weakened the dollar, sending gold prices higher.
Structural drivers
The buyback plan landed just as U.S. government debt topped $40 trillion for the first time ever.
Diane Garrett, executive chairman and CEO of Hycroft Mining, said markets appear to now be reading the the moves as a signal that the debt load's cost and duration will now be a key factor shaping policy.
"That's exactly the kind of structural, long-term driver gold investors are underwriting," Garrett told CNBC via email. "It also tracks with why central banks keep rotating reserves out of Treasuries and into gold."
The World Gold Council's annual Central Bank Gold Reserves Survey, published in June, found that 89% of respondents expect global central bank gold reserves to increase over the next year. A record 45% expect their own institutions' holdings to rise, while 1% expect them to decline.
"While this does add a degree of volatility, we think it's supportive of the underlying demand trends for precious metals," Garrett added.
"Short-term moves like this week's announcement by Treasury Secretary Scott Bessent will keep driving volatility in the gold price, and tensions in the Middle East will add to that. However, the structural picture hasn't changed," said Theo Botoulas, CEO of Neo Energy Metals, a South Africa-focused gold and uranium developer.
"Annual gold consumption is running at record levels of almost 5,000 [metric] tons per annum. At the same time, supply increases by little more than 1.5% annually, providing a favorable backdrop for the market."
Near-term headwinds
However, analysts conceded that headwinds remain, with Staunovo flagging higher oil prices caused by the ongoing Middle East conflict as a potential pressure point.
"More expensive energy could add to inflation pressures and keep central banks more cautious about lowering interest rates, potentially supporting bond yields and weighing on the non-yielding metal," Staunovo said.
Rhona O'Connell, head of market analysis for EMEA and Asia at StoneX, said upward pressure on yields is expected to return given the strength of the U.S. economy.
"On balance, gold has to weigh up the headwinds of high, and likely continued rising, Treasury yields against the tailwinds of a weaker dollar — and don't forget the Gulf. Much of this already priced in and gold may now need yet another breather."
David Morrison, senior market analyst at Trade Nation, said the latest rebound could leave gold vulnerable to a near-term pullback.
"While this move in gold is impressive, especially given its 10% rally off multi-month lows since the end of last month, it may be a case of too far, too quickly. Prices may have to back up and fill in now for gold to make further gains," Morrison said.
"But even if gold were to drop back to $4,400, if it could find support there, that would be a positive sign for the bulls. Even more so should the U.S. dollar continue to decline," he added.`,
    bodyJa: `債券市場の動揺、ドル安、米国債務に対する新たな懸念が貴金属の需要を回復する中、金価格は金曜日に上昇し、今週は地金が5％近く上昇する見通しとなった。
金曜序盤の取引で金先物は1.67％上昇して4,647.70ドルとなり、地金現物価格は1.55％上昇し4,588.08ドルで取引された。この上昇により、貴金属の週のプラス週の上限が決まり、先物相場は３カ月ぶりの高値に向けて推移しており、５日間で４．７％上昇した。
この回復は、金が今年初めの約5,600ドルという過去最高値からの急激な反転と、6月までの3カ月で2013年以来最悪の四半期パフォーマンスとなったことに続くものである。
ＵＢＳの商品アナリスト、ジョバンニ・スタウノヴォ氏は、世界的な債務水準の上昇と持続的なドル安が昨年の金の高騰を支えたが、現在はそうした懸念が再発しつつあると述べた。
スタウノヴォ氏は電子メールでＣＮＢＣに対し、「我々の見解では、金の価格は今後１２カ月間でオンス当たり５４００ドルに上昇するはずだ」と語った。
財務省は水曜日、長期国債の下落を安定させるため、流動性支援として10年から30年国債の買い戻し規模を少なくとも2倍に増やすと発表した。この発表により当初、米国債利回りが低下しドル安となり、金価格が上昇した。
構造的推進力
米国政府債務が史上初めて40兆ドルを突破したちょうどそのタイミングで、買い戻し計画が実現した。
ハイクロフト・マイニングの執行会長兼最高経営責任者（CEO）のダイアン・ギャレット氏は、市場は現在、この動きを、債務負担のコストと期間が政策を形成する重要な要素となることを示すシグナルと捉えているようだと述べた。
ギャレット氏は電子メールでＣＮＢＣに対し、「これはまさに、金投資家が引き受けている構造的で長期的な原動力のようなものである」と語った。 「また、中央銀行が外貨準備を国債から金にローテーションし続ける理由も追跡できます。」
ワールド・ゴールド・カウンシルが6月に発表した年次中央銀行金準備調査では、回答者の89％が世界の中央銀行の金準備が来年にかけて増加すると予想していることが判明した。過去最高の45％が自身の機関の保有資産が増加すると予想している一方、1％は減少すると予想している。
「これはある程度のボラティリティを高めますが、貴金属の根本的な需要傾向を支援していると考えています」とギャレット氏は付け加えた。
「今週のスコット・ベッセント財務長官の発表のような短期的な動きは、金価格の不安定さをさらに高め、中東の緊張がそれに拍車をかけるだろう。しかし、構造的な状況は変わっていない」と南アフリカに注力する金とウランの開発会社ネオ・エナジー・メタルズの最高経営責任者（CEO）、テオ・ボトゥラス氏は語った。
「金の年間消費量は、年間ほぼ5,000[メートル]トンという記録的な水準で推移しています。同時に、供給量は年間1.5％強増加しており、市場にとって有利な背景となっています。」
短期的な逆風
しかし、アナリストらは依然として逆風が続いていることを認めており、スタウノヴォは現在進行中の中東紛争による原油価格の上昇が潜在的な圧力ポイントとなっていると指摘している。
スタウノヴォ氏は「エネルギーの価格高騰でインフレ圧力が高まり、中央銀行が金利引き下げに一層慎重になる可能性があり、債券利回りを下支えし、非利回り金属の重しと​​なる可能性がある」と述べた。
ストーンＸのＥＭ​​ＥＡ・アジア市場分析責任者、ローナ・オコネル氏は、米国経済の堅調さを考慮すると、利回り上昇圧力は再び高まると予想されると述べた。
「結局のところ、金はドル安の追い風に反して米国債利回りが高く、おそらく上昇し続けるという逆風に耐える必要がある。湾岸のことも忘れてはいけない。こうしたことの多くはすでに織り込まれており、金は今さらに一息つける必要があるかもしれない。」
トレード・ネイションのシニア市場アナリスト、デービッド・モリソン氏は、最近の反発により、金は短期的な下落に対して脆弱になる可能性があると述べた。
モリソン氏は「金のこの動きは印象的だが、特に先月末以来、数カ月ぶりの安値から１０％回復していることを考えると、行き過ぎ、早すぎるケースかもしれない。金がさらに上昇するには、今価格が反発して埋める必要があるかもしれない」と述べた。
「しかし、たとえ金が4,400ドルに戻ったとしても、そこにサポートを見つけることができれば、それは強気派にとって明るい兆候となるだろう。米ドルが下落し続ければ、なおさらだ」と同氏は付け加えた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/21/gold-prices-us-debt-dollar.html",
    publishedAt: "2026-08-21T11:35:46+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 5,
  },
  {
    id: "why-some-of-america-s-biggest-brands-are-3b2e9a64",
    title: "Why some of America's biggest brands are losing ground in China",
    titleJa: "アメリカの大手ブランドの一部が中国で地位を失いつつある理由",
    summaryJa: "中国はかつて、多くの米国ブランドにとって最も魅力的で急速に成長している市場の一つだった。人口が 14 億人を超え、ビジネスに大きなチャンスがあるため、企業は中国が提供できる恩恵を急いで活用していました。",
    bodyOriginal: `China was once one of the most attractive and fastest-growing markets for many American brands.
With its population of more than 1.4 billion people and massive opportunities for businesses, companies were racing to take advantage of the boon that China could offer.
But in recent years, some consumer brands, including Nike, Starbucks and General Motors, have begun to see the tide turn. With rising geopolitical tensions, a surge in domestic competition and a disconnect from the Chinese consumer, American companies have lost ground in the region that once offered fuel for growth.
"China is such a big market. The numbers are so big so quickly when you talk about China that sort of everybody has wanted to try, and that's why all brands went there," Aaron Cheris, head of global retail practice at Bain & Company, told CNBC.
Yet those companies haven't adjusted to the local market and its changing structures and needs, he said.
"If anything, the question isn't what's going wrong in China — it's why isn't that happening in the rest of the world," Cheris added.
Cheris said price premiums for American products are often not worth it for Chinese consumers, and Chinese brands often have a fast innovation cycle and better distribution within the region.
"We're just not nearly as developed. Our brands don't necessarily think and develop quite in the same way," Cheris said.
The U.S. and China have also been embroiled in geopolitical tensions over the past few years, especially with President Donald Trump's volatile tariff agenda. And while the political backdrop may be disincentivizing Chinese consumers from buying American, it coincides with a rise in pride for domestic brands as consumers look to buy more local.
Some of those domestic brands have also disrupted the broader industry, reset innovation cycles and launched price wars.
Still, some companies — such as Lululemon, Ralph Lauren and Kentucky Fried Chicken — are finding success in China with their products, a discrepancy Cheris said is due to "the basics" of their business strategies.
"Am I coming in with a good value? Did I have a compelling product that felt locally relevant? Am I advertising and making it available in the channels and stores that are winning in that market?" he said. "It really is a blocking and tackling and running your brand right kind of story."
For more U.S. companies to turn around their China businesses, Cheris said, they'll have to make sure the product is worth the price premium and quality.
"The key will be which brands take it seriously enough and really build enough local capability to do that, rather than just saying, 'I'm going to take what I built globally and try to sell it to a Chinese consumer,'" he said.
Here's how some consumer companies have seen their influence in China dwindle over the past few years:
Retail
Some retailers' popularity and relevance have tanked in China over recent years as their bets to go big internationally faltered.
Nike is one of the biggest victims. The sneaker company has seen its China business shrink 30% since 2021, with its annual revenue hitting its lowest level in eight years in the spring. While China was once Nike's fastest-growing region, shoppers are increasingly turning to domestic brands over international ones, while Nike is attempting to overhaul its distribution model in the country.
Yaling Jiang, founder of consumer research firm ApertureChina, previously told CNBC that Nike has "just become irrelevant" in China, while Adidas has gained traction.
That slowdown is against a backdrop of China's sports renaissance, with the country's sportswear market more than doubling over the past decade, according to GlobalData.
And Nike isn't sure it'll be able to recover its losses. On its most recent earnings call in June, outgoing CFO Matt Friend said he was unable to determine when the company's China business would return to growth. Still, Cathy Sparks, the vice president and general manager of Greater China for Nike, previously told CNBC the company is actively working to reconnect with Chinese consumers.
Other retailers have seen similar struggles.
Beauty retailer Estée Lauder has faced significant headwinds in China, with CEO Stéphane de La Faverie saying on a conference call in early June that he doesn't believe China will soon resume to double-digit growth.
"We deal by making sure that our brands are the most locally relevant in the market where we operate," he said, adding that he's "confident" the company's performance will be revived.
In 2022, Gap sold its China business to e-commerce firm Baozun in a $40 million all-cash deal after experiencing a slowdown in its business and an inability to connect with Chinese consumers. Under the deal, Baozun refined the company's local strategy and Gap broke even for the first time earlier this year, with plans to open 50 new stores in mainland China in 2026.
Abercrombie & Fitch is also reportedly looking for local partners in China to hand off the reins of its business there and strengthen its performance.
Some brands, such as Lululemon and Ralph Lauren,have managed to maintain relevancy and sales. Lululemon has seen its China business rise and now expects China to grow about 20% for the year, while Ralph Lauren saw 40% growth in China in its most recent quarter.
Food and consumer packaged goods
While some food and beverage companies, such as Kentucky Fried Chicken, have continued to see success in the region, others have seen stark declines.
Starbucks entered mainland China in 1999, and it became the company's second-largest market by 2015. But the Covid-19 pandemic started a downward turn for the company, which saw Chinese consumers seeking out lower-priced local brands instead.
"The market is going through a transition as we see an increase in mass market competitors, which we believe will shake out over time, and the market will emerge looking fundamentally different than what we see today," then-CEO Laxman Narasimhan said on a Starbucks earnings conference call in early 2024.
Starbucks has seen intense competition from Chinese brand Luckin Coffee, which now has more than three times the number of stores in China. It also sells its drinks at a steep discount.
At the same time, Starbucks' U.S. business was struggling, leading CEO Brian Niccol to create a joint venture with Boyu Capital to operate the company's business in China. Boyu holds a roughly 60% stake in the joint venture and aims to use its local knowledge to lift Starbucks' sales in China once again.
China is also the second-largest market for consumer packaged goods giant Procter & Gamble. But in recent years, P&G's product sales have struggled in China.
"Coming out of Covid, [Greater China] was a depressed market. It was a tough competitive environment, and the results were not great," P&G CEO Shailesh Jejurikar said on the company's earnings conference call in late July.
Sales of its pricey SK-II skincare brand have seesawed. Chinese consumers are traveling less and scaling back spending even when they do go on vacation, hurting sales of SK-II, which relies heavily on luxury travel retail and duty-free stores. In late 2023, SK-II, which originated in Japan but is owned by P&G, also saw sales plummet, as anti-Japanese sentiment weighed on demand from Chinese consumers.
Still, P&G maintains that many of its brands are strong in China, saying some segments are hurt more by the consumer environment than a loss in brand equity. Company executives said they can grow sales in China, such as with diapers made with silk fibers that are winning over consumers.
"We are now growing share in China for the first time in 15 quarters, driven by fundamental changes we made similar to what we're doing in the company," Jejurikar told analysts in late July.
Autos
The U.S. automotive industry has been crippled in China.
What was once the largest potential growth market for automakers a decade ago has now turned into a massive restructuring, largely driven by the rise of domestic Chinese car companies and overcapacity creating a price war.
Detroit's "Big Three" automakers — GM, Ford Motor and Chrysler parent Stellantis, which is no longer based in the U.S. — have collectively fallen from a global market share of 21.4% in 2019 to an estimated 15.7% in 2025, according to S&P Global Mobility. As a result, they've retreated from the region or restructured their Chinese operations.
General Motors, which is the longest-standing U.S. automaker in the country, is now just a shell of its former self in China. Its earnings in the region fell from around $2 billion annually in 2018 to two consecutive years of losses in 2024 and 2025.
GM's fall from grace in the country comes as the automaker is seeing increased domestic competition and changing consumer sentiment. Experts have said local automakers are being fueled by government funding, as well as a culture of innovation and speed that China has instilled in its workers.
Still, a slowing Chinese market and underutilization have forced domestic companies — such as BYD, Geely and more — to begin exporting to major auto markets globally, including Europe, Canada and South America.
More Chinese consumers are also choosing electric vehicles over traditional gas-powered cars for their price and quality. New energy vehicles, which include battery and hybrid-powered cars, accounted for 65.1% of new passenger cars sold in July — up from 54% a year ago, according to China Passenger Car Association data released Tuesday.
GM isn't the only American automaker considering its future in the region. EV leader Tesla is reportedly weighing the sale or spinoff of its Chinese business, according to a July report by The Wall Street Journal.
Ford, which in recent years has worked to position itself as the most American automaker, has been moving more of its operations and sales efforts to the U.S., including shifting the production of its Lincoln models from China to the U.S. beginning in 2030.
Between 2018 and 2022, Ford said, it saw a 32.4% decline in China sales. The company no longer reports its financial results by region.
– CNBC's Gabrielle Fonrouge, Amelia Lucas and Mike Wayland contributed to this report.`,
    bodyJa: `中国はかつて、多くの米国ブランドにとって最も魅力的で急速に成長している市場の一つだった。
人口が 14 億人を超え、ビジネスに大きなチャンスがあるため、企業は中国が提供できる恩恵を急いで活用していました。
しかし近年、ナイキ、スターバックス、ゼネラルモーターズなどの一部の消費者ブランドは潮目が変わり始めている。地政学的緊張の高まり、国内競争の激化、中国消費者との乖離により、米国企業はかつて成長の原動力となっていた地域での地位を失っている。
「中国は非常に大きな市場だ。中国について話すと、その数字はあっという間に大きくなり、誰もが挑戦したいと思ってきた。だからこそ、すべてのブランドが中国に進出したのだ」とベイン・アンド・カンパニーのグローバル小売業務責任者、アーロン・チェリス氏はCNBCに語った。
しかし、これらの企業は地元市場とその変化する構造やニーズに適応できていない、と同氏は述べた。
「どちらかと言えば、問題は中国で何が起こっているのかということではなく、なぜそれが世界の他の地域で起こらないのかということだ」とチェリス氏は付け加えた。
チェリス氏は、米国製品の価格プレミアムは中国の消費者にとって価値がないことが多く、中国のブランドはイノベーションサイクルが速く、地域内での流通が良好であることが多いと述べた。
「私たちはそこまで発展していないのです。私たちのブランドは必ずしも同じように考え、同じように発展しているわけではありません」とチェリス氏は語った。
米国と中国はここ数年、特にドナルド・トランプ大統領の不安定な関税政策を巡る地政学的な緊張にも巻き込まれている。また、政治的背景が中国の消費者が米国産製品を購入する意欲を阻害している可能性がある一方で、消費者がより多くの地元産製品を購入しようとする中、国内ブランドに対する誇りが高まっていることと一致している。
そうした国内ブランドの中には、業界全体を混乱させ、イノベーションサイクルをリセットし、価格競争を仕掛けたものもある。
それでも、ルルレモン、ラルフ・ローレン、ケンタッキー・フライド・チキンなどの一部の企業は自社製品で中国で成功を収めているが、この矛盾は事業戦略の「基本」にあるとチェリス氏は述べた。
「私は良い価値を持って参入しているだろうか? 地元に関連性があると感じられる魅力的な製品を持っていただろうか? その市場で成功しているチャネルや店舗で宣伝し、それを入手できるようにしているだろうか?」彼は言い​​ました。 「これはまさに、ブランドを阻止し、それに取り組み、ブランドを運営するという正しい類の話だ。」
チェリス氏は、より多くの米国企業が中国事業を立て直すためには、製品が価格プレミアムと品質に見合ったものであることを確認する必要があると述べた。
「鍵となるのは、どのブランドがこの問題を十分に真剣に受け止め、『自分が構築したものを世界的に活用して中国の消費者に販売しようとする』とだけ言うのではなく、実際にそれを実現するのに十分な現地能力を構築するかどうかだ」と同氏は述べた。
ここ数年、一部の消費者企業が中国における影響力の低下をどのように見ているかは次のとおりだ。
小売
一部の小売業者は、国際的に大きくなるという賭けが挫折し、ここ数年中国での人気と関連性が低下している。
ナイキは最大の被害者の一人だ。同社のスニーカー会社は2021年以降、中国事業が30％縮小しており、今春には年間売上高が8年ぶりの最低水準に達した。中国はかつてナイキにとって最も急成長している地域だったが、ナイキは同国での流通モデルの全面的な見直しを試みる中、買い物客は海外ブランドよりも国内ブランドに目を向けるようになっている。
消費者調査会社アパーチャーチャイナの創設者ヤリン・ジャン氏は以前CNBCに対し、アディダスが勢いを増している一方で、ナイキは中国では「無価値になっただけ」だと語った。
グローバルデータによると、この減速は中国のスポーツルネッサンスを背景としており、同国のスポーツウェア市場は過去10年間で2倍以上に成長している。
そしてナイキは損失を取り戻せるかどうか確信が持てない。 6月に行われた直近の決算会見で、退任する最高財務責任者（CFO）のマット・フレンド氏は、同社の中国事業がいつ成長に戻るかは判断できないと述べた。それでも、ナイキの副社長兼中華圏ゼネラルマネージャーのキャシー・スパークス氏は以前CNBCに対し、同社は中国の消費者とのつながりを取り戻すために積極的に取り組んでいると語った。
他の小売業者も同様の苦戦を経験している。
美容品小売り大手エスティ・ローダーは中国で大きな逆風に直面しており、最高経営責任者（CEO）のステファン・ドゥ・ラ・ファヴェリ氏は6月初旬の電話会議で、中国がすぐに二桁成長に戻るとは信じていないと語った。
同氏は「当社のブランドが、当社が事業を展開する市場において最も地元に密着したものとなるように取り組んでいる」と述べ、同社の業績が回復すると「確信している」と付け加えた。
ギャップは事業の低迷と中国の消費者とのつながりの喪失を経験し、2022年に中国事業を4000万ドルの全額現金取引で電子商取引会社Baozunに売却した。この契約に基づき、Baozunは同社の地域戦略を洗練させ、ギャップは今年初めに初めて収支均衡を達成し、2026年には中国本土に50の新規店舗をオープンする計画を立てている。
アバクロンビー＆フィッチはまた、中国での事業の手綱を渡して業績を強化するため、中国の現地パートナーを探していると伝えられている。
ルルレモンやラルフ ローレンなどの一部のブランドは、関連性と売上を維持することに成功しています。ルルレモンは中国事業の成長を実感しており、今年の中国の成長率は約20％と見込んでいる一方、ラルフ・ローレンは直近四半期で中国で40％の成長を記録した。
食品および消費財
ケンタッキー・フライド・チキンなど一部の食品・飲料会社はこの地域で引き続き成功を収めているが、その他の会社は大幅な衰退を経験している。
スターバックスは1999年に中国本土に進出し、2015年までに同社にとって第2位の市場となった。しかし、新型コロナウイルス感染症のパンデミックにより同社は低迷し始め、中国の消費者は代わりに低価格の地元ブランドを求めるようになった。
当時のCEO、ラックスマン・ナラシンハン氏は、2024年初頭のスターバックスの決算電話会見で、「マスマーケットの競合他社が増加し、市場は過渡期にあるが、時間の経過とともに淘汰されると考えており、市場は現在とは根本的に異なる姿で現れるだろう」と語った。
スターバックスは、現在中国で3倍以上の店舗数を有する中国ブランドのラッキンコーヒーとの熾烈な競争にさらされている。ドリンクも大幅割引で販売しています。
同時に、スターバックスの米国事業は苦戦しており、最高経営責任者（CEO）のブライアン・ニコル氏は中国で同社の事業を運営するため、Boyu Capitalと合弁会社を設立することを決断した。 Boyuは合弁会社の株式の約60％を保有しており、現地の知識を活用して中国でのスターバックスの売上を再び伸ばすことを目指している。
中国は消費財大手プロクター・アンド・ギャンブルにとって第２位の市場でもある。しかし近年、P&Gの製品販売は中国で苦戦している。
Ｐ＆Ｇのシャイレシュ・ジェジュリカール最高経営責任者（ＣＥＯ）は７月下旬の決算会見で、「新型コロナウイルスの影響で、（中華圏）市場は低迷した。厳しい競争環境で、業績も良くなかった」と述べた。
同社の高価なスキンケアブランド「SK-II」の売り上げは低迷している。中国の消費者は旅行を減らし、休暇に行く場合でも支出を控えており、高級旅行用品小売店や免税店に大きく依存しているSK-IIの売上高に打撃を与えている。 2023年後半には、日本発でP&G傘下のSK-IIも、反日感情が中国人消費者の需要を圧迫し、売上が急減した。
それでもP&Gは自社ブランドの多くが中国で好調であると主張し、一部のセグメントはブランド資産の損失よりも消費者環境の影響の方が大きいと述べた。同社幹部らは、シルク繊維を使ったおむつが消費者の心を掴むなど、中国での売上を伸ばすことができると述べた。
ジェジュリカー氏は7月下旬、アナリストに対し、「当社が社内で行っていることと同様の根本的な変化によって、当社は15四半期ぶりに中国でのシェアを伸ばしている」とアナリストに語った。
自動車
米国の自動車産業は中国で打撃を受けている。
10年前には自動車メーカーにとって最大の潜在成長市場だった市場は、現在では主に中国国内の自動車会社の台頭と過剰生産能力による価格戦争が原因で大規模な再編に変わっている。
S&Pグローバル・モビリティによると、デトロイトの「ビッグ3」自動車メーカー（GM、フォード・モーター、クライスラーの親会社ステランティス（現在は米国に本拠を置いていない））は、合わせて2019年の21.4％から2025年には推定15.7％まで低下した。その結果、彼らはこの地域から撤退するか、中国事業を再構築した。
中国で最も歴史のある米国の自動車メーカーであるゼネラル・モーターズは、現在中国ではかつての姿を脱した形に過ぎない。この地域における同社の収益は、2018年の年間約20億ドルから2024年と2025年には2年連続の赤字にまで減少した。
GMが同国で失脚したのは、同自動車メーカーが国内競争の激化と消費者心理の変化に直面しているためだ。専門家らは、地元自動車メーカーは政府の資金提供と、中国が労働者に植え付けたイノベーションとスピードの文化によって支えられていると述べた。
それでも、中国市場の減速と十分な活用がされていないため、BYDや吉利などの国内企業は、ヨーロッパ、カナダ、南米など世界の主要な自動車市場への輸出を始めざるを得なくなっている。
価格と品質を理由に、従来のガソリン車ではなく電気自動車を選ぶ中国の消費者も増えています。火曜日に発表された中国乗用車協会のデータによると、バッテリー車やハイブリッド車を含む新エネルギー車は、7月に販売された新車乗用車の65.1％を占め、前年同期の54％から増加した。
この地域での将来を検討している米国の自動車メーカーはGMだけではない。ウォール・ストリート・ジャーナルの7月の報道によると、EV大手テスラは中国事業の売却かスピンオフを検討していると報じられている。
フォードは近年、自らを最も米国的な自動車メーカーとしての地位を確立することに努めており、2030年からリンカーンモデルの生産を中国から米国に移管するなど、事業と販売活動の米国への移転を進めている。
フォードによると、2018年から2022年にかけて中国での販売は32.4％減少したという。同社は今後、地域ごとの財務結果を報告しない。
– CNBC のガブリエル・フォンルージュ、アメリア・ルーカス、マイク・ウェイランドがこのレポートに貢献しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/21/us-brands-china-competition.html",
    publishedAt: "2026-08-21T11:30:02+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "royal-mail-misses-delivery-targets-again-4214165a",
    title: "Royal Mail misses delivery targets again but hails 'encouraging' signs",
    titleJa: "ロイヤルメール、またも配達目標を達成できないも「心強い」兆候を歓迎",
    summaryJa: "ロイヤルメール、またも配達目標を達成できないも「心強い」兆候を歓迎- 公開されました",
    bodyOriginal: `Royal Mail misses delivery targets again but hails 'encouraging' signs
- Published
Royal Mail has once again missed its delivery targets for first and second class post, but said it is making progress towards the goals as its turnaround plan continues.
The postal service delivered 85% of first class deliveries the next day between March and June, up from 76% in the same three months of 2025, but below regulator Ofcom's 90% target.
Second class mail was delivered within three days 91% of the time, another improvement from the previous year, but short of Ofcom's 95% target.
Royal Mail said the results are "encouraging and show that the work we are doing to improve the service is having an impact".
Royal Mail, which is owned by International Distribution Services (IDS), has struggled with rising competition in the delivery market, fewer people sending letters and fines from the regulator for missing targets in recent years.
But it said that, compared with the same period last year, the portion of first class mail delivered next-day had risen significantly while the amount of second class mail delivered within three days had improved slightly.
Chief operating officer Jamie Stephenson said: "These results are encouraging and show that the work we are doing to improve the service is having an impact.
"First Class performance is well ahead of where we expected to be at this stage of our Improvement Plan, while Second Class is tracking in line with the plan."
Stephenson added that there is "more to do", pointing to a £500m investment plan to improve the firm over the next five years. The plan includes a commitment to meet Ofcom's delivery targets by May 2027.
The postal service has faced years of criticism from politicians and the public over the slowness of its letter delivery.
It is currently under investigation by Ofcom for the second year running for failure to meet its delivery targets.
The regulator fined it a record £21m in October last year for missing targets in 2024-25.
In March, postal workers from across the UK told the BBC they were being asked to move or hide mail from senior bosses so it looks like delivery targets were being met.
The firm apologised to Gloucester residents where post was sometimes delayed for months, admitting its service there was "totally unacceptable".
Most recently, people in Worcestershire hit out over postal delays, complaining of weeks-long delays for important post to arrive, with some missing hospital appointments.
Royal Mail recently said it aims to meet regulator Ofcom's targets by May 2027 as part of a turnaround plan costing around £500m in the next five years.
"We know there is more to do," Stephenson wrote in a statement. "We are investing £500 million over five years and making significant changes across our network... None of this progress would be possible without the continued hard work of our frontline colleagues, including through the recent extreme heat."
IDS was bought in 2025 by Czech billionaire Daniel Kretinsky.
- Published11 August
- Published28 July
- Published11 July`,
    bodyJa: `ロイヤルメール、またも配達目標を達成できないも「心強い」兆候を歓迎
- 公開されました
ロイヤル・メールは第一種郵便物と第二種郵便物の配達目標を再び達成できなかったが、再建計画の継続により目標に向かって前進していると述べた。
郵便事業は3月から6月にかけてファーストクラス配達の85％を翌日配達し、2025年の同じ3か月の76％から増加したが、規制当局のオフコムの目標90％には届かなかった。
第二種郵便は 91% の確率で 3 日以内に配達され、前年よりさらに改善されましたが、Ofcom の目標である 95% には届きませんでした。
ロイヤルメールは、この結果は「励みになるものであり、サービスを改善するために私たちが行っている取り組みが効果をもたらしていることを示している」と述べた。
国際流通サービス（IDS）傘下のロイヤル・メールは近年、配達市場での競争激化、手紙を送る人の減少、目標を達成できなかった場合の規制当局からの罰金などに苦戦している。
しかし、前年同期と比較すると、翌日配達される第一種郵便物の割合は大幅に増加し、3日以内に配達される第二種郵便物の量はわずかに改善したと述べた。
最高執行責任者のジェイミー・スティーブンソン氏は、「これらの結果は心強いものであり、サービスを改善するために私たちが取り組んでいる取り組みが効果を上げていることを示しています。
「ファーストクラスのパフォーマンスは、改善計画の現段階で予想していた水準を大きく上回っていますが、セカンドクラスは計画に沿って推移しています。」
スティーブンソン氏は「やるべきことはまだある」と付け加え、今後5年間で会社を改善するための5億ポンドの投資計画を指摘した。この計画には、2027 年 5 月までに Ofcom の納入目標を達成するという約束が含まれています。
郵便事業は、手紙の配達の遅さについて長年、政治家や国民からの批判にさらされてきた。
現在、出荷目標を達成できていないとして、2年連続でOfcomによる調査を受けている。
規制当局は昨年10月、2024年から2025年の目標を達成できなかったとして、過去最高となる2100万ポンドの罰金を科した。
3月、英国全土の郵便局員らがBBCに対し、配達目標が達成されているように見えるよう、上級上司から郵便物を移動したり隠したりするよう求められていると語った。
同社は、郵便が数カ月も遅れることもあったグロスター住民に謝罪し、そこでのサービスが「まったく容認できない」ことを認めた。
ごく最近では、ウスターシャー州の人々が郵便の遅れを非難し、重要な郵便物の到着が数週間も遅れ、病院の予約も取れなかった人もいると不満を漏らした。
ロイヤルメールは最近、今後5年間で約5億ポンドかかる再建計画の一環として、規制当局のオフコムの目標を2027年5月までに達成することを目指すと発表した。
スティーブンソン氏は声明で「やるべきことはまだあると我々は分かっている」と述べた。 「私たちは5年間で5億ポンドを投資し、ネットワーク全体に大きな変化をもたらしています...最近の猛暑を含め、最前線の同僚の継続的な努力がなければ、この進歩はいずれも不可能です。」
IDSは2025年にチェコの億万長者ダニエル・クレチンスキー氏に買収された。
- 8月11日発行
- 7 月 28 日発行
- 7 月 11 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c1w1rg208xdo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-21T11:20:57+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/b693/live/e8990510-9d46-11f1-a3dc-c3f8cfe34ff8.jpg",
    readTime: 4,
  },
  {
    id: "most-americans-aren-t-anti-vaccine-they-f352a8f7",
    title: "Most Americans aren't anti-vaccine. They're uncertain — and that's a growing public health challenge",
    titleJa: "ほとんどのアメリカ人は反ワクチンではありません。それらは不確実です - そしてそれは増大する公衆衛生上の課題です",
    summaryJa: "当面のより大きな問題は、多くのアメリカ人が、ワクチンに断固として賛成するわけでもなく、断固として反対するわけでもなく、大きく不確実な中間点に陥っていることかもしれない。",
    bodyOriginal: `Record measles cases and rising childhood vaccine exemptions in the U.S. have fueled concerns that Americans are increasingly turning against vaccines.
But the reality may be more complicated than that.
The biggest challenge for public health officials trying to contain deadly diseases may not be widespread anti-vaccine sentiment or the influencers and political figures who spread it. Only a small share of Americans indicate they firmly believe common myths about the shots, according to a survey released in July by health policy research organization KFF.
Many other Americans fall into a large, uncertain middle ground — neither firmly pro-vaccine nor staunchly opposed — where they have questions or anxieties about shots and may be susceptible to conflicting messages about their safety and effectiveness.
KFF presented adults with four common vaccine myths. Fewer than 1 in 10 respondents said each claim was definitely true. But at least half fell into a gray area, saying the claims were either "probably true" or "probably false."
"What's more true is a lot of people are confused," Drew Altman, KFF CEO and founding president, said in an interview. "They don't know who to believe, they don't know what to believe, and that means that a lot of America is stuck in the middle, unsure and they're up for grabs."
That uncertainty could pose a growing public health hazard as the Trump administration reshapes federal vaccine policy and health officials grapple with declining immunization rates for some shots. Vaccine misinformation has a larger megaphone than ever with Trump in the White House: Earlier this month, without evidence, he linked the measles-mumps-rubella vaccine to autism, as he called for splitting the routine childhood immunization into separate shots.
People who are confused about vaccines may become "paralyzed" and delay or avoid decisions such as whether to immunize their children, Altman said.
The majority of Americans still get themselves and their children vaccinated, but "even little dips in that coverage could lead to more of a highly contagious virus like measles circulating," said Jess Steier, a public health scientist and founder and CEO of Unbiased Science, which specializes in making complex scientific concepts understandable.
Still, she emphasized that while people with questions about vaccines may be susceptible to misinformation, they can also be reached through clear, evidence-based information and conversations with trusted healthcare providers.
"Uncertainty can resolve once people have time, information and access," she added.
Why people are uncertain about vaccines
Vaccine hesitancy is much more complicated than outright opposition to vaccines, Steier said. Social media and the current political environment only fuel more of the confusion, she added.
People are often exposed to emotionally charged, alarming content online because social media algorithms tend to amplify it, Steier said. As a result, many people are encountering conflicting messages about vaccines and struggling to determine which sources are trustworthy. Rather than being firmly anti-vaccine, many are simply overwhelmed by competing information, she said.
Some of that messaging comes from political leaders such as Trump and Health and Human Services Secretary Robert F. Kennedy Jr., which makes the challenge facing other public health officials tougher. Kennedy has frequently said that he is not "anti-vaccine," but he has a well-documented history of spreading scientifically inaccurate information around vaccine safety and efficacy.
Based on years of reviewing comments, questions and survey responses from people engaging with Unbiased Science's social media platforms, Steier developed a framework for understanding vaccine hesitancy.
She identifies five broad groups: "Lost" people who are confused by conflicting information and don't know whom to trust; "Anxious" people who fear side effects; "Naturalists" who prefer natural immunity and are skeptical of medical interventions; "Distrusters" who are broadly suspicious of institutions such as government, medicine and pharmaceutical companies; and "Shruggers," who aren't opposed to vaccines but don't view them as a priority or necessary for themselves.
Steier noted that while those are major factors driving vaccine hesitancy, people likely won't "cleanly fall into one of these buckets."
Dr. Lori Handy, an attending physician and associate director of the Vaccine Education Center at Children's Hospital of Philadelphia, agrees.
"What we actually find is that individuals don't bucket as nicely as we want because the factors that play into either having questions or having hesitancy about vaccines are really complex and are coming together as this combination of social factors, religious factors, access factors and who's on their Instagram feed," she said in an interview.
Some people's beliefs about one vaccine may not even transfer over to another shot at times, Handy added.
Andrew, a 19-year-old from Pennsylvania who asked that his last name be omitted for privacy, said his family is the primary reason why he has not yet received any vaccines. He said several factors shape his family's skepticism about immunization: misinformation, distrust of the healthcare industry and the government, and their religious background.
He said he grew skeptical of his family's vaccine positions over time and eventually researched immunizations, which helped him "know the reality better" and decide to start getting vaccinated. He said he's "fairly certain" he'll get caught up on all the major vaccines over the next few months.
He said he still has a few concerns about vaccines, such as potential side effects, but noted that the bigger issue at hand is the conflict his decision could create within his family.
Measles cases rise, childhood vaccinations fall
Many Americans are uncertain about vaccines at a time when the U.S. is seeing record cases of measles, potentially heightening the risk to public health.
The U.S. has so far reported 2,566 confirmed measles cases and 38 new outbreaks across 47 jurisdictions this year, marking a 35-year high that surpasses 2025's previous multidecade record, according to data released this month from the Centers for Disease Control and Prevention. More than 93% of the infected individuals are unvaccinated or have an unknown vaccination status, the agency said.
At the same time, U.S. childhood vaccination rates have inched down to about 92% for kindergartners, while nonmedical exemptions reached a record high of 4.2% during the 2025-2026 school year, the CDC said this week. Those exemptions — the majority of which are for non-medical reasons — represent an estimated 155,000 children nationally.
This postpandemic decline in both figures leaves some communities vulnerable and could help fuel the resurgence of preventable illnesses such as measles.
"This is one of those really terrifying things about certain infectious diseases — they are just so spreadable in so many areas, and when you have a high population of unvaccinated individuals, they will inevitably get infected when they encounter that virus," Steier said.
Handy said hesitancy around the measles vaccine dates back to 2000 or even earlier. She cited a publication, which has since been retracted, that tried to link the measles-mumps-rubella, or MMR, vaccine to autism despite studies repeatedly proving that there is no relationship.
Still, that unfounded claim has continued to make some parents question the MMR shot, Handy said. Over the last two to three years, political leaders have further added to that skepticism by questioning the measles vaccine and attempting to change recommendations around it.
Trump this month signed an executive order that suggests splitting the MMR shot, falsely claiming that the combined version is "quite lethal" and tying the vaccine and other jabs to autism. That type of rhetoric "makes parents less and less likely to vaccinate their child because they are seeing individuals in a position of authority who do not endorse it," Handy said.
While the infectious disease and pediatric communities still strongly recommend the measles vaccine due to its safety record, some parents trust different authorities, she added.
"All of a sudden, vaccine science has become a political issue or a partisan issue in a way that we've never seen before, and it is really, really challenging to be part of the American public and not know which message to trust because we are seeing different messages come out from the government, from our healthcare providers, from different health authorities, and people really have to then decide," Handy said.
Approaching hesitant individuals
Health experts said that addressing vaccine-hesitant people starts with listening rather than lecturing.
"We've been a bit more paternalistic in the past, where we tell people things versus listening first and understanding why they might be hesitant or what questions they have," Steier said. "A lot of this, in my opinion, centers on listening first, understanding what's driving the hesitancy, not dismissing these things outright."
Instead of dismissing social media as a source, providers should acknowledge that many people rely on platforms such as TikTok for health information and then help them compare that information with evidence from trusted medical sources, Handy added.
The goal is to have an open conversation that addresses individual fears and helps people better evaluate the information they see, she said.
Handy also argued that vaccines have become victims of their own success.
Because diseases such as measles were largely eliminated for decades, many parents have never seen the illness firsthand and don't view it as a serious threat. As a result, the perceived risk of the disease is lower than the perceived risk of the vaccine, she said.
"We're in a different period with a different risk profile that people need to understand for their child," Handy said. "Let's revisit this question that parents may have because times have changed, and we need to really keep their child safe."`,
    bodyJa: `米国における麻疹症例の記録的な増加と小児用ワクチン免除の増加により、米国人がますますワクチンに反対する傾向にあるとの懸念が高まっている。
しかし、現実はそれよりも複雑かもしれません。
致死性の病気を封じ込めようとする公衆衛生当局にとっての最大の課題は、広範な反ワクチン感情やそれを広める影響力者や政治家ではないかもしれない。医療政策研究団体KFFが7月に発表した調査結果によると、ワクチン接種に関する通説を固く信じているアメリカ人はわずかだという。
他の多くのアメリカ人は、ワクチンに断固賛成でも断固反対でもなく、大きく不確実な中間点に陥っており、ワクチン接種について疑問や不安を抱えており、ワクチンの安全性と有効性について相反するメッセージに影響されやすい可能性がある。
KFFは成人に4つの一般的なワクチン神話を紹介した。それぞれの主張が間違いなく真実であると答えた回答者は 10 人に 1 人未満でした。しかし、少なくとも半数はグレーゾーンに該当し、その主張は「おそらく真実」か「おそらく虚偽」であると述べた。
「もっと真実なのは、多くの人が混乱しているということだ」とKFFのCEO兼創業社長のドリュー・アルトマン氏はインタビューで語った。 「彼らは誰を信じてよいのか、何を信じてよいのか分からない。つまり、多くのアメリカ国民が板挟みになり、確信が持てず、手を出そうとしているのだ。」
トランプ政権が連邦ワクチン政策を再編し、保健当局が一部のワクチン接種率の低下に取り組んでいる中、この不確実性は公衆衛生上の危険を増大させる可能性がある。ワクチンの誤った情報は、ホワイトハウスでトランプ大統領にこれまで以上に大きなメガホンをとっている。今月初め、トランプ大統領は証拠もないのに、麻疹・おたふく風邪・風疹のワクチンを自閉症と結び付け、小児期の定期予防接種を複数回に分けて接種するよう求めた。
アルトマン氏は、ワクチンについて混乱している人々は「麻痺」し、子供に予防接種を受けるかどうかなどの決定を遅らせたり回避したりする可能性があると述べた。
米国人の大多数は依然として自分自身とその子供たちにワクチン接種を受けているが、「その報道が少しでも落ち込むだけで、はしかのような伝染性の高いウイルスがさらに流行する可能性がある」と公衆衛生科学者であり、複雑な科学的概念を理解できるようにすることを専門とするアンバイアスド・サイエンスの創設者兼最高経営責任者（CEO）のジェス・シュタイアー氏は語る。
それでも彼女は、ワクチンについて疑問を持つ人は誤った情報に影響されやすいかもしれないが、明確な証拠に基づいた情報や信頼できる医療提供者との会話を通じて質問できることもある、と強調した。
「人々が時間と情報とアクセスを手に入れれば、不確実性は解決できる」と彼女は付け加えた。
人々がワクチンについて不安を抱く理由
シュタイアー氏は、ワクチンへの躊躇は、ワクチンに対する完全な反対よりもはるかに複雑だと述べた。ソーシャルメディアと現在の政治環境は混乱をさらに助長するだけだと彼女は付け加えた。
シュタイアー氏は、ソーシャルメディアのアルゴリズムがそれを増幅させる傾向があるため、人々はオンラインで感情を揺さぶる憂慮すべきコンテンツにさらされることが多いと述べた。その結果、多くの人がワクチンに関して相反するメッセージに遭遇し、どの情報源が信頼できるかを判断するのに苦労しています。多くの人は断固として反ワクチンであるというよりも、単に競合する情報に圧倒されているだけだと彼女は言う。
そのメッセージの中には、トランプ大統領やロバート・F・ケネディ・ジュニア保健福祉長官などの政治指導者からのものもあるため、他の公衆衛生当局が直面する課題はさらに厳しいものとなっている。ケネディ大統領は自分は「反ワクチン」ではないと頻繁に発言しているが、ワクチンの安全性や有効性に関して科学的に不正確な情報を広めた経歴は十分に文書化されている。
Unbiased Science のソーシャル メディア プラットフォームに携わる人々からのコメント、質問、調査回答を何年にもわたってレビューしたことに基づいて、シュタイアー氏はワクチンへの躊躇を理解するためのフレームワークを開発しました。
彼女は大きく 5 つのグループを特定しています。矛盾する情報に混乱し、誰を信頼してよいのか分からない「迷子」の人々。副作用を恐れる「不安」な人。自然免疫を好み、医療介入に懐疑的な「自然主義者」。政府、医療、製薬会社などの組織に広く疑いを抱いている「不信者」。そして、ワクチンに反対ではないが、ワクチンを優先事項や自分たちにとって必要なものとは考えていない「シュラッガー」。
シュタイアー氏は、これらはワクチン接種をためらう主な要因ではあるが、人々が「これらのバケツのいずれかにきれいに当てはまる」可能性は低いと指摘した。
フィラデルフィア小児病院の主治医でワクチン教育センター副所長のロリ・ハンディ博士もこれに同意する。
「私たちが実際に発見したのは、ワクチンについて疑問を抱いたりためらいを抱いたりする要因は非常に複雑で、社会的要因、宗教的要因、アクセス要因、インスタグラムのフィードに誰が参加しているかなどの要素が組み合わさってできているため、個人は私たちが望むほど適切にバケツを使っていないということです」と彼女はインタビューで語った。
あるワクチンに対する一部の人々の信念は、場合によっては別のワクチンに移行できないこともあるとハンディ氏は付け加えた。
ペンシルベニア州出身のアンドリューさん（19歳）はプライバシー保護のため名字を省略するよう求めたが、まだワクチンを受けていない主な理由は家族だと述べた。同氏は、誤った情報、医療業界や政府に対する不信感、宗教的背景など、家族の予防接種に対する懐疑的な見方にはいくつかの要因があると述べた。
同氏は、時間の経過とともに家族のワクチンに対する立場に懐疑的になり、最終的には予防接種について調べた結果、「現実をよりよく知る」ことができ、ワクチン接種を開始することを決意したと語った。同氏は、今後数カ月以内にすべての主要なワクチンに追いつくだろうと「かなり確信している」と述べた。
同氏は、潜在的な副作用など、ワクチンに関して依然としていくつかの懸念があると述べたが、当面のより大きな問題は、自身の決定が家族内に衝突を引き起こす可能性があることだと指摘した。
麻疹の感染者は増加、小児予防接種は減少
米国では麻疹の記録的な症例が確認されており、公衆衛生へのリスクが高まる可能性がある現在、多くの米国人はワクチンについて不安を抱いている。
疾病管理予防センターが今月発表したデータによると、米国では今年これまでに47の管轄区域で麻疹の確定症例2,566件と新たな流行38件が報告されており、2025年の数十年来の記録を上回る35年ぶりの高水準となっている。同庁によると、感染者の93％以上はワクチン接種を受けていないか、ワクチン接種状況が不明だという。
同時に、米国の小児ワクチン接種率は幼稚園児の約92％まで少しずつ低下し、医療以外の免除率は2025年から2026学年度に4.2％と過去最高に達したとCDCが今週発表した。これらの免除は、その大部分が非医学的理由によるもので、全国で推定15万5,000人の子どもに相当する。
このパンデミック後の両方の数値の減少により、一部の地域社会が脆弱になり、麻疹などの予防可能な病気の再発を促進する可能性があります。
「これは、特定の感染症に関する本当に恐ろしいことの一つだ。感染症は非常に多くの地域で蔓延しており、ワクチン接種を受けていない人が多数いる場合、そのウイルスに遭遇すると必然的に感染するだろう」とシュタイアー氏は語った。
ハンディ氏は、麻疹ワクチンに対する躊躇は2000年かそれ以前に遡ると語った。彼女は、関連性がないことが研究で繰り返し証明されているにもかかわらず、麻疹・おたふく風邪・風疹（MMR）ワクチンと自閉症を関連付けようとした出版物を引用したが、その後撤回された。
それでも、その根拠のない主張により、一部の親はMMR注射に疑問を抱き続けている、とハンディ氏は語った。過去 2 ～ 3 年にわたり、政治指導者たちは麻疹ワクチンに疑問を投げかけ、それに関する推奨事項を変更しようとすることで、その懐疑をさらに深めてきました。
トランプ大統領は今月、MMRワクチンの分割接種を提案する大統領令に署名し、混合ワクチンは「極めて致死性」であると誤って主張し、ワクチンやその他の注射剤を自閉症と結び付けた。この種のレトリックにより、「親は自分の子供にワクチン接種をする可能性がますます低くなります。なぜなら、親は権威ある立場にある個人がワクチン接種を支持しないとみなしているからです」とハンディ氏は述べた。
感染症と小児科のコミュニティはその安全性の実績から麻疹ワクチンを依然として強く推奨しているが、一部の保護者は異なる当局を信頼していると彼女は付け加えた。
「突然、ワクチン科学がこれまでに見たことのない形で政治問題や党派問題になった。アメリカ国民の一員でありながらどのメッセージを信じてよいのか分からないのは、本当に本当に大変なことだ。なぜなら、政府、医療提供者、保健当局からさまざまなメッセージが出てくるのを目の当たりにしており、人々は実際にその判断を迫られるからだ」とハンディ氏は語った。
迷っている人へのアプローチ
保健専門家らは、ワクチン接種をためらう人々への対応は、説教するのではなく聞くことから始まると述べた。
「私たちはこれまで、もう少しパターナリズム的でした。まず話を聞いて、なぜ躊躇するのか、どんな疑問があるのか​​を理解するのではなく、人々に物事を伝えるのです」とシュタイアー氏は語った。 「私の意見では、これらの多くは、最初に耳を傾け、躊躇の原因を理解することに重点が置かれており、これらのことを完全に否定するのではありません。」
医療提供者はソーシャルメディアを情報源として否定するのではなく、多くの人が健康情報をTikTokなどのプラットフォームに依存していることを認め、その情報を信頼できる医療情報源からの証拠と比較できるように支援すべきだとハンディ氏は付け加えた。
目標は、個人の不安に対処し、人々が目にする情報をより適切に評価できるようにするオープンな会話を行うことである、と彼女は述べた。
ハンディ氏はまた、ワクチンは自らの成功の犠牲になっているとも主張した。
麻疹などの病気は数十年にわたってほとんど排除されてきたため、多くの親はこの病気を直接見たことがなく、深刻な脅威とは考えていません。その結果、病気の認識されるリスクはワクチンの認識されるリスクよりも低いと彼女は述べた。
「私たちは今とは異なる時期におり、子供のために人々が理解する必要がある異なるリスクプロファイルを持っています」とハンディ氏は語った。 「時代が変わり、子どもの安全を本当に守る必要があるため、親が抱くかもしれないこの疑問をもう一度考えてみましょう。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/21/why-vaccination-rates-are-falling-in-the-us.html",
    publishedAt: "2026-08-21T11:00:01+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "nato-member-romania-scrambles-f-16-fight-1f6134c8",
    title: "NATO member Romania scrambles F-16 fighter jets to destroy drone near critical European gas project",
    titleJa: "NATO加盟国ルーマニア、欧州の重要ガスプロジェクト付近で無人機を破壊するためF-16戦闘機を緊急発進",
    summaryJa: "ルーマニア大統領は、ロシアが海洋無人機を配備しており、大規模な天然ガス開発の近くで発見され、木曜日に軍が破壊したと非難した。この事態の進展は、ロシアのウクライナ戦争が国境を越えて波及する可能性を示す新たな事件を示しており、重要インフラへのリスクを浮き彫りにしている。",
    bodyOriginal: `Romania's president has accused Russia of deploying a marine drone that its military destroyed on Thursday after it was spotted close to a major natural gas development.
The development marks yet another incident in which Russia's war in Ukraine has potentially spilled beyond the country's borders, underscoring risk to critical infrastructure.
In a series of Facebook posts, Romanian defense minister Radu-Dinel Miruţă said F-16 fighter jets destroyed a marine drone in the vicinity of the Neptun Deep gas project in the Black Sea on Thursday.
Once developed, Neptun Deep will make Romania the largest natural gas producer in the European Union. Located around 99 miles off the coast, the platform is expected to begin producing gas in 2027.
European energy prices rose drastically in the wake of Russia's full-scale invasion of Ukraine in 2022, as Western governments slapped Moscow with sanctions and looked for alternative sources of oil and gas.
Miruţă said Thursday that the Romanian Coast Guard reported the presence of the drone a few hundred meters from Neptun Deep's gas extraction operations on Thursday morning, 80 miles east of the Romanian city of Constanța.
Romania's defense ministry then requested NATO authorization to "take charge of the situation," he said.
"Following an assessment and in coordination with the President of Romania, the decision was made to destroy the drone in order to protect the lives of the hundreds of personnel working on the platform and to safeguard critical infrastructure," Miruţă added.
"To ensure a rapid response, two Romanian F-16 fighter jets were scrambled with orders to engage. The drone was safely destroyed."
President accuses Moscow
The operation was "an action against time," Romanian President Nicușor Dan said in a post on X. He added that the drone had come from Russia.
"I strongly condemn the intensification of these types of irresponsible incidents on the part of the Russian Federation," he said. "We remain vigilant alongside NATO allies to defend ourselves and repel such challenges."
CNBC reached out to the Russian government for comment.
Romania shares a border with Ukraine, with Russia lying across the Black Sea. Miruţă said Romanian officials had confirmed the drone was not of Ukrainian origin. Data indicated that only a single drone was involved in the incident, according to Romanian investigations.
A NATO spokesperson told CNBC the military alliance was "aware that two Romanian Air Force F-16 aircraft were scrambled in response to a maritime drone detected in Romania's Exclusive Economic Zone in the Black Sea."
"One of the aircraft successfully engaged the drone, demonstrating continued readiness to respond to any potential threat," they said.
A series of Russian aircraft have breached Romanian airspace in recent weeks, with Romania's Air Force shooting a drone down in late July.
Romania's Dan said at the time that his country and its allies treated such incidents with "the utmost seriousness," labeling the airspace incursion "inadmissible and intolerable."
In May, an apartment block in Galați – a city near Romania's border with Ukraine – was hit by a Russian drone.`,
    bodyJa: `ルーマニア大統領は、ロシアが海洋無人機を配備しており、大規模な天然ガス開発の近くで発見され、木曜日に軍が破壊したと非難した。
この事態の進展は、ロシアのウクライナ戦争が国境を越えて波及する可能性を示す新たな事件を示しており、重要インフラへのリスクを浮き彫りにしている。
ルーマニアのラドゥディネル・ミルシャ国防相は一連のフェイスブックへの投稿で、木曜日に黒海のネプチューン・ディープ・ガスプロジェクト付近でF-16戦闘機が海洋無人機を破壊したと述べた。
ネプチューン・ディープが開発されれば、ルーマニアは欧州連合最大の天然ガス生産国となる。海岸から約 99 マイル離れたところに位置するこのプラットフォームは、2027 年にガス生産を開始する予定です。
2022年のロシアによるウクライナへの本格侵攻を受けて、西側諸国政府がロシアを制裁で叩きのめし、代替の石油・ガス源を模索する中、欧州のエネルギー価格は大幅に上昇した。
ミルシャ氏は木曜、ルーマニア沿岸警備隊が木曜朝、ルーマニアのコンスタンツァ市の東130マイル、ネプチューン・ディープのガス採掘作業から数百メートルの地点にドローンの存在を報告したと発表した。
その後、ルーマニア国防省は「状況を担当する」ためにNATOの承認を要請したと同氏は述べた。
「評価を経て、ルーマニア大統領との調整を経て、プラットフォーム上で作業する数百人の職員の命を守り、重要なインフラを守るためにドローンを破壊する決定がなされた」とミルシャ氏は付け加えた。
「迅速な対応を確保するため、ルーマニアのF-16戦闘機2機が交戦命令を受けて緊急発進した。無人機は安全に破壊された。」
大統領、モスクワを非難
ルーマニアのニクショー・ダン大統領は、この作戦は「時間との闘い」だったとＸへの投稿で述べ、ドローンはロシアから来たものだと付け加えた。
「私はロシア連邦側によるこの種の無責任な事件の激化を強く非難する」と述べた。 「我々はNATO同盟国とともに、自らを守り、このような挑戦を撃退するために引き続き警戒を続けている。」
CNBCはロシア政府にコメントを求めた。
ルーマニアはウクライナと国境を接しており、黒海を挟んでロシアと接している。ミルシャ氏は、ルーマニア当局はドローンがウクライナ製ではないことを確認したと述べた。ルーマニアの調査によると、データは事件に関与したドローンは1機のみであることを示した。
NATO報道官はCNBCに対し、軍事同盟は「黒海のルーマニアの排他的経済水域で海上無人機が探知されたことを受けて、ルーマニア空軍のF-16航空機2機が緊急発進したことを認識している」と語った。
「航空機のうちの1機は無人機との交戦に成功し、あらゆる潜在的な脅威に対応する継続的な準備ができていることを示した」と彼らは述べた。
ここ数週間で一連のロシア航空機がルーマニア領空を侵犯しており、7月下旬にはルーマニア空軍が無人機を撃墜した。
ルーマニアのダン氏は当時、自国とその同盟国はこのような事件を「最大限の真剣さ」で対処し、領空侵犯は「容認できない、容認できない」ものだと述べた。
5月にはルーマニアとウクライナの国境近くの都市ガラシの集合住宅がロシアの無人機による攻撃を受けた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/21/romania-russia-ukraine-drone-gas-nato.html",
    publishedAt: "2026-08-21T10:15:18+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "uk-borrows-more-than-expected-in-july-as-6264b9b5",
    title: "UK borrows more than expected in July as Healey prepares for first Budget",
    titleJa: "ヒーリーが最初の予算案を準備中、英国は7月に予想を上回る借入を行う",
    summaryJa: "ヒーリーが最初の予算案を準備中、英国は7月に予想を上回る借入を行う- 公開されました",
    bodyOriginal: `UK borrows more than expected in July as Healey prepares for first Budget
- Published
The government borrowed more than expected in July, according to figures published as Chancellor John Healey draws up his first Budget.
The Office for National Statistics (ONS) said borrowing, the gap between what the government spends and what it collects in tax, was £1.8bn during the month.
Official forecasters had expected a surplus of £500m, meaning the government borrowed £2.3bn more than predicted.
Economists warned the figure will restrict Healey and Prime Minister Andy Burnham's room for manoeuvre as they target measures aimed at easing the cost of living for households, with little room to increase borrowing in the Budget on 27 October.
Healey has made it clear he will oversee "strong fiscal discipline" at the Budget – which will limit how much the government has to spend.
He has adopted his predecessor Rachel Reeves' fiscal rules, which commit the government to funding all day-to-day spending through tax receipts by the end of the decade.
Responding to the borrowing figures, Healey said: "We are cutting the deficit faster than any other G7 economy, while giving people a bit of breathing space with cost of living pressures and focusing support to get young people into work."
July's borrowing figure was significantly lower than June's £16bn, with a surge in self-assessed income tax receipts boosting the government's coffers for the month. But economists said the public finances would come under renewed pressure when the one-off lift, typical for July each year, runs out.
Despite falling from June to July, the borrowing figure was higher than expected. Experts pointed to increased welfare spending, including benefits and other payments such the state pension, with social payments coming in £2bn higher than the same period last year.
The ONS said borrowing from April to July, the first four months of the government's fiscal year, has reached £56.7bn. This is lower than last year, but £2.3bn higher than forecasts from the Office for Budget Responsibility (OBR), which the government uses when drawing up its spending plans.
Senior economist at Capital Economics Ashley Webb said the figure continued a "run of bad news" for the economy and that "there will be little scope to raise borrowing in the Budget later this year".
He said the borrowing overshoot "will probably get bigger" this year as economic growth slows and the government rolls out more measures to support households with the cost of living.
Joe Nellis, head of economic research at accountancy firm MHA, also said the figures will not "prevent difficult decisions that must be made in the upcoming October Budget".
Healey will have to find "additional tax revenue, tighter control over public sector spending and changes elsewhere" to balance the books and meet the government's fiscal rules.
"Failure to do so will unsettle the financial markets and potentially push up the cost of government borrowing still further," Nellis warned.
The ONS also said Britain's overall debt pile is approaching £3tn, having grown by £127.2bn a year earlier. The Conservatives said Labour's spending would leave "ordinary families" left to cover the bill.
Shadow Chancellor Mel Stride said: "We spend more on just the interest of our soaring debt than we do on our defence, police, and prisons combined. We simply cannot afford the price of Labour."
The Liberal Democrats accused the government of pursuing an "anti-growth agenda" and called for action to lower energy bills and support high street businesses.
"In their autumn Budget, the chancellor needs to take the handbrake off Britain's economy," Treasury spokesperson Daisy Cooper said.
The ONS also said retail sales were lacklustre in July, falling 0.5% from June. Analysts said the drop was caused by a surge of hot weather and a World Cup-induced surge in sales in June. Clothing and footwear saw the slowest growth since May last year.
Related topics
- Published12 August
- Published12 August`,
    bodyJa: `ヒーリーが最初の予算案を準備中、英国は7月に予想を上回る借入を行う
- 公開されました
ジョン・ヒーリー財務大臣が初の予算案を作成する際に発表された数字によると、政府は7月に予想を上回る額の借入を行った。
国家統計局（ＯＮＳ）は、政府の支出額と税金として徴収する額の差である借入額が同月に１８億ポンドだったと発表した。
公式予測者らは5億ポンドの黒字を予想していたが、これは政府が予想より23億ポンド多く借りたことを意味する。
エコノミストらは、10月27日の予算案で借入を増やす余地がほとんどなく、家計の生活費緩和を目的とした政策を目標とするヒーリー氏とアンディ・バーナム首相の策動の余地がこの数字によって制限されると警告した。
ヒーリー氏は予算案で政府支出額を制限する「強力な財政規律」を監督することを明らかにした。
同氏は前任者レイチェル・リーブス氏の財政規則を採用し、政府が10年代末までに税金の領収書を通じて日常支出のすべてを賄うことを約束した。
借り入れの数字を受けてヒーリー氏は、「われわれは他のＧ７諸国よりも早く財政赤字を削減しつつ、生活費が圧迫される国民に少しの余裕を与え、若者の就労促進に重点的な支援を行っている」と述べた。
７月の借入額は６月の１６０億ポンドを大きく下回り、申告所得税収入の急増が同月の政府財源を押し上げた。しかしエコノミストらは、毎年7月に恒例となっている1回限りの解除が終了すると、財政は新たな圧力にさらされるだろうと述べた。
6月から7月にかけて借入額は減少したにもかかわらず、予想を上回った。専門家らは、給付金や国民年金などの支払いを含む福祉支出が増加し、社会支払額が前年同期より20億ポンド増加していると指摘した。
ＯＮＳは、政府会計年度の最初の４カ月間である４月から７月までの借り入れが５６７億ポンドに達したと発表した。これは昨年より低いが、政府が支出計画を立てる際に使用する予算責任局（OBR）の予測よりは23億ポンド高い。
キャピタル・エコノミクスのシニアエコノミスト、アシュリー・ウェッブ氏は、この数字は経済にとって「悪いニュースの連続」であり、「年内の予算で借入を増やす余地はほとんどないだろう」と述べた。
同氏は、経済成長が減速し、政府が家計への生活費支援策をさらに打ち出す中、今年の借り入れ超過は「おそらくさらに大きくなるだろう」と述べた。
会計事務所ＭＨＡの経済調査責任者、ジョー・ネリス氏も、この数字は「次期１０月予算で下さなければならない難しい決断を妨げるものではない」と述べた。
ヒーリー氏は帳尻を合わせて政府の財政規則を満たすために「追加の税収、公共部門支出のより厳格な管理、その他の分野での変化」を見つける必要があるだろう。
ネリス氏は「そうしなければ金融市場が不安定になり、政府の借り入れコストがさらに上昇する可能性がある」と警告した。
ＯＮＳはまた、英国全体の債務の山は前年同期に１２７２億ポンド増加し、３兆ポンドに近づいていると述べた。保守党は、労働党の支出により「一般家庭」がその費用を負担することになると述べた。
影の宰相メル・ストライド氏は「われわれは国防、警察、刑務所を合わせた支出よりも、急増する債務の利子だけに多くを支出している。労働党の代償を支払う余裕はない」と述べた。
自由民主党は政府が「反成長政策」を追求していると非難し、光熱費を引き下げ、大通りのビジネスを支援する措置を求めた。
財務省報道官のデイジー・クーパー氏は「秋の予算案で首相は英国経済のブレーキを解除する必要がある」と述べた。
ＯＮＳはまた、７月の小売売上高が精彩を欠き、６月比０．５％減少したと発表した。アナリストらは、この減少は猛暑とワールドカップによる6月の売上急増が原因だと述べた。衣料品と履物は昨年５月以来の低い伸びとなった。
関連トピック
- 8 月 12 日発行
- 8 月 12 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cly8kzkyvwgo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-21T09:45:11+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/5711/live/12719030-9d21-11f1-ab6e-831b967255ae.jpg",
    readTime: 4,
  },
  {
    id: "panama-canal-to-cut-number-of-ships-pass-e79e0aec",
    title: "Panama Canal to cut number of ships passing through due to El Niño",
    titleJa: "パナマ運河、エルニーニョの影響で通過船舶数削減へ",
    summaryJa: "パナマ運河、エルニーニョの影響で通過船舶数削減へ- 公開されました",
    bodyOriginal: `Panama Canal to cut number of ships passing through due to El Niño
- Published
Panama Canal's operator is to cut the number of vessels passing through the key waterway due to low rainfall caused by El Niño.
The Panama Canal Authority (ACP) told shipping firms on Thursday that 32 vessels a day will be able to pass through it from 15 September, compared to 36 currently.
El Niño, a pattern of periodical sea surface warming, effects weather systems globally. This year is expected to be particularly strong, with its effects made more intense by climate change.
The shipping industry is already dealing with severe disruptions due to the Iran war causing a large reduction in the number of vessels passing through the crucial Strait of Hormuz.
The ACP said the measures were being put in place to preserve service reliability and safeguard water resources for human consumption.
It added that despite the arrival of the rainy season in Central America and some water-saving measures already being put in place in the canal, additional action was needed "to support the long-term sustainability of transit operations".
The new measures will be phased in from 3 September.
The Panama Canal greatly reduces the time and distance ships have to travel between the Atlantic and Pacific oceans.
About 14,000 ships per year use the artificial waterway - which operates 24 hours a day, 365 days a year.
As well as being a crucial route for global trade, it is also a key source of income for Panama, bringing in about $3bn (£2.2bn) a year.
In 2023, the ACP cut the number of vessels using the waterway during the last El Niño period after Panama was hit with its driest October since records began in 1950.
Since then, the authority has introduced measures to cut the amount of water it uses.
Many forecasts suggest that this year's El Niño, which is a naturally occurring pattern, could be one of the strongest ever recorded, with disruptions to weather, food supplies and economies.
- Published6 hours ago
- Published14 July
- Published24 February`,
    bodyJa: `パナマ運河、エルニーニョの影響で通過船舶数削減へ
- 公開されました
パナマ運河の運営会社は、エルニーニョによる降雨量の減少のため、重要な水路を通過する船舶の数を削減する予定である。
パナマ運河庁（ACP）は木曜日、海運会社に対し、現在は1日あたり36隻の船舶が9月15日から同運河を通過できるようになると発表した。
エルニーニョは周期的な海面温暖化のパターンであり、世界中の気象システムに影響を与えます。今年は、気候変動の影響がさらに強まるため、特に好調が予想されています。
海運業界はすでに、イラン戦争による重大な混乱に直面しており、重要なホルムズ海峡を通過する船舶の数が大幅に減少している。
ACPは、サービスの信頼性を維持し、人間が消費する水資源を保護するためにこの措置が講じられていると述べた。
さらに、中米では雨季が到来し、運河にはすでにいくつかの節水対策が講じられているにもかかわらず、「交通運営の長期的な持続可能性を支援するために」追加の措置が必要であると付け加えた。
新たな措置は９月３日から段階的に導入される。
パナマ運河により、船が大西洋と太平洋の間を移動する時間と距離が大幅に短縮されます。
年間約 14,000 隻の船舶がこの人工水路を利用しており、24 時間 365 日稼働しています。
世界貿易にとって重要なルートであるだけでなく、パナマにとって重要な収入源でもあり、年間約30億ドル（約22億ポンド）をもたらしている。
パナマが1950年の記録開始以来最も乾燥した10月に見舞われたことを受け、2023年、ACPは最後のエルニーニョ期間中にこの水路を使用する船舶の数を削減した。
それ以来、当局は水の使用量を削減する措置を導入してきた。
多くの予測は、今年のエルニーニョ現象は自然発生的なパターンであり、天候、食料供給、経済に混乱をもたらし、観測史上最も強いものの一つとなる可能性があることを示唆している。
- 6 時間前に公開
- 7 月 14 日発行
- 2 月 24 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cwyl0jkxxryo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-21T06:46:08+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/db42/live/677fca00-9d18-11f1-bd22-47519fb87a16.jpg",
    readTime: 2,
  },
  {
    id: "israel-re-establishes-closed-west-bank-s-217cf03f",
    title: "Israel re-establishes closed West Bank settlement, defying growing international protests",
    titleJa: "イスラエル、増大する国際抗議活動を無視して閉鎖されていたヨルダン川西岸入植地を再開",
    summaryJa: "イスラエル、増大する国際抗議活動を無視して閉鎖されていたヨルダン川西岸入植地を再開- 公開されました",
    bodyOriginal: `Israel re-establishes closed West Bank settlement, defying growing international protests
- Published
A new generation of Israeli settlers has returned to the settlement of Kadim, in the occupied West Bank, two decades after it was closed by a previous Israeli government.
Thirty "pioneer families" had arrived in the settlement on Thursday from Tel Aviv, according to the regional settlers' council, riding a wave of Jewish nationalism driven by Israel's current government.
They came in small groups, some under military escort, blue and white Israeli flags fluttering from their cars as they passed Palestinian villages and farmlands. Some dragged trailers loaded with bedding, furniture and building material.
Israel's government has overturned a 20-year ban on Jewish settlements around Jenin. Palestinian residents are watching the new push on settlement expansion here with fear.
All Israeli settlements and settler outposts are illegal under international law. Outposts are also illegal under Israeli law, though are often supported by state services and funding.
"21 years after the crime of expulsion from northern Samaria, we have completed the correction […] and have returned to the settlement of Kadim," said Israel's far-right Finance Minister Bezalel Smotrich at the opening ceremony, using the Biblical word for the northern West Bank.
Alongside him were Israel's Justice Minister, the Speaker of the Knesset, and Yossi Dagan, head of the regional settlers' council, who vowed that settlers would one day return to Gaza too.
Kadim, on a small hillside outside the Palestinian city of Jenin, was evacuated in 2005 by a previous Israeli government as part of a wider unilateral Disengagement Plan that also saw all Jewish settlers and soldiers pulled out of Gaza, and three other settlements in the northern West Bank dismantled.
At the time, the four settlements were considered too isolated and costly to protect, and of little strategic value.
In recent weeks, white trailer homes have appeared on the hilltop here again, in preparation for families to return.
Our request to speak to people at the opening ceremony was refused; we were told no media were allowed to enter the settlement today.
Driving along a dirt track on the hill behind it, we met a Palestinian vegetable farmer, living in the house he was born in 53 years ago.
He told me how, as a boy, he watched Kadim being built for the first time, then watched again as the settlers there were forced out by the government twenty years later.
"Back then, the settlers were living alongside us, and we coexisted peacefully. They lived their lives and we lived ours," he told me.
Now, watching them return, he's fearful.
"I'm afraid of the events spreading around us, and the bypass road [where] they demolished shops and businesses," he said.
"They drove my nephews away from their vegetables and citrus trees, telling them 'you have no place here, don't come back'".
He said his family fled here from Haifa during the 1948 Arab-Israeli War.
"There's no more displacement left in me," he said. "We're living with a sense of resignation. It's a life of fear."
After Kadim and the three other settlements here were evacuated in 2005, Israelis were banned from settling in this area. Israel's current government overturned that ban.
Kadim is the last of the settlements evacuated in 2005 to reopen. Ganim, Sanur and Homesh have already been formally opened, and families moved in.
But they are a drop in the ocean of the Israeli government's settlement project here. Since it took power in late 2022, it has approved more than 100 new settlements across the West Bank, including 19 in the northern West Bank.
Hagit Ofran, director of the Settlement Watch programme at Peace Now, says the rapid construction in Jenin is part of a wider race by the Israeli government to expand settlements in the West Bank before Israeli elections are held in October.
One of those new settlements is Emek Dotan, to the west of Jenin, formally opened last Sunday and now home to almost two dozen Jewish families.
From the small hamlet of Palestinian houses next door to Emek Dotan, teacher Samer Jaber, has watched the settlement take shape: first the bulldozers, then the caravans lifted into place. The problems began even before most of the families moved in, he said.
"Groups come and stand opposite our houses, filming us," he told me.
"Yesterday they came and stood here, filming me and my children. Every time my wife stepped outside, they filmed her too. They try to enter our homes. And they go house by house, shining powerful floodlights directly through all the windows at two or three in the morning."
Samer is partially blind and has a leg injury that makes moving difficult.
"Fear dominates everything. We are completely defenceless," he said. "All of them have weapons. I'm bringing concrete blocks to close off this side of the house because I'm afraid for my children."
Samer has watched settlements – and settler attacks – grow in other parts of the West Bank over the past few years, despite international pressure.
"Europe has no time for us, America is preoccupied with Iran, China has no interest," his analysis began. "Russia is busy with Ukraine, the United Nations is finished, and the Arab countries have their own internal problems."
"Democratic systems are over, they're finished," he concluded, anger and bitterness leaking out. "Civilisation, progress and modernity are lies."
Alongside the new settlements around Jenin, two new Israeli military bases are rapidly going up – construction vehicles churning up dust behind high concrete walls topped with watchtowers and barbed wire, Israeli flags flapping in the wind.
A military outpost is also being built on seized Palestinian land beside Jenin Refugee Camp – the first Israeli military base to be built on land under full Palestinian Authority control since the Oslo Accords were signed in 1993.
Israel's military evacuated thousands of residents from Jenin Refugee camp before occupying it in 2025.
The Israel Defence Forces confirmed that construction of the outpost in Jabriyat had been ordered "in accordance with operational needs".
The Palestinian Authority Governor for Jenin, Kamal Abu al-Rub, told me he was worried that Israel's seizure of land around the refugee camp signalled a plan to house settlers there, right in the heart of a Palestinian city, dividing it up like Hebron or Jerusalem.
He described the past two decades without settlers around Jenin as "bliss".
"Now, we live in the hell orchestrated by them and their assaults," he said. "It limits our movement. They cut off roads, bulldoze lands and cut down trees."
The speed of change here is breathtaking.
A few weeks ago, I sat drinking coffee in a café on the road that runs from Kadim through the northern West Bank to Israel: now that café – and dozens of Palestinian shops and businesses around it – are just piles of rubble along the road; demolished by the Israeli army.
The countdown to Israeli elections in October marked in the number of Palestinian buildings demolished, the number of new settler caravans.
Related topics
- Published26 July
- Published1 day ago
- Published2 days ago`,
    bodyJa: `イスラエル、増大する国際抗議活動を無視して閉鎖されていたヨルダン川西岸入植地を再開
- 公開されました
占領下のヨルダン川西岸地区にあるカディム入植地が前イスラエル政府によって閉鎖されてから20年が経ち、新世代のイスラエル人入植者がこの入植地に戻ってきた。
地域入植者評議会によると、イスラエル現政権が推進するユダヤ民族主義の波に乗って、木曜日にテルアビブから30人の「開拓者家族」が入植地に到着した。
彼らは小グループに分かれ、一部は軍の護衛を受け、青と白のイスラエル国旗を車からはためかせながらパレスチナ人の村や農地を通過した。寝具、家具、建築資材を積んだトレーラーを牽引するものもあった。
イスラエル政府は、ジェニン周辺のユダヤ人入植に対する20年間の禁止措置を撤回した。パレスチナ住民は、ここでの入植地拡大の新たな動きを不安を持って見守っている。
すべてのイスラエルの入植地と入植者の前哨基地は国際法の下で違法です。前哨基地もイスラエルの法律では違法だが、国のサービスや資金によって支援されていることが多い。
「サマリア北部からの追放という犯罪から21年が経ち、我々は矯正を完了し、カディムの入植地に戻った」とイスラエルの極右財務大臣ベザレル・スモトリヒは開会式で、ヨルダン川西岸北部を意味する聖書の言葉を使って述べた。
彼の傍らにはイスラエルの法務大臣、クネセト議長、地域入植者評議会の議長ヨッシ・ダガンも出席し、入植者もいつかガザに戻ると誓った。
パレスチナの都市ジェニン郊外の小さな丘の中腹にあるカディムは、2005年に前イスラエル政府により広範な一方的撤退計画の一環として避難させられ、ユダヤ人入植者と兵士もすべてガザから撤退し、ヨルダン川西岸北部の他の3つの入植地も解体された。
当時、4 つの入植地は孤立しすぎて保護するには費用がかかり、戦略的価値はほとんどないと考えられていました。
ここ数週間、家族の帰還に備えて、ここの丘の上に白いトレーラーハウスが再び出現している。
開会式で人々に話をしたいという私たちの要請は拒否されました。今日はメディアは入植地に入ることを許可されていないと言われました。
裏手の丘にある未舗装の道路に沿って車を走らせていると、53年前に生まれた家に住んでいるパレスチナ人の野菜農家に出会った。
彼は、少年の頃、初めてカディムが建設されるのを見て、20年後にそこの入植者たちが政府によって強制的に追い出されるのを再び見たという話をしてくれた。
「当時、入植者たちは私たちと一緒に暮らしていて、私たちは平和に共存していました。彼らは彼らの生活を送り、私たちは自分たちの生活を送りました」と彼は私に語った。
今、彼らが戻ってくるのを見て、彼は恐怖を感じています。
「事件が私たちの周囲に広がり、店舗や企業が破壊されたバイパス道路が怖い」と彼は語った。
「彼らは私の甥たちを野菜や柑橘類の木から追い払い、『ここにはお前の居場所はない、戻ってくるな』と言いました。」
同氏によれば、家族は1948年のアラブ・イスラエル戦争中にハイファからここに逃れてきたという。
「私の中にはもうこれ以上の移動は残っていない」と彼は言った。 「私たちは諦めの気持ちを抱えて生きています。恐怖の人生です。」
2005年にカディムと他の3つの入植地が避難された後、イスラエル人はこの地域に定住することが禁止された。イスラエルの現政府はその禁止を撤回した。
カディムは、2005年に立ち退いた集落の中で再開した最後の集落である。ガニム、サヌール、ホメシュはすでに正式に開所しており、家族連れが入居している。
しかし、それらはここでのイスラエル政府の入植プロジェクトの大海の一滴にすぎません。 2022年末に政権を握って以来、ヨルダン川西岸北部の19カ所を含むヨルダン川西岸全域で100カ所以上の新規入植地を承認した。
ピース・ナウの入植監視プログラム責任者のハギット・オフラン氏は、ジェニンでの急速な建設は、10月にイスラエルの選挙が行われる前にヨルダン川西岸の入植地を拡大しようとするイスラエル政府による広範な競争の一環であると語る。
それらの新しい入植地の1つは、ジェニンの西にあるエメク・ドタンで、先週の日曜日に正式に開設され、現在は約24世帯のユダヤ人家族が住んでいる。
エメク・ドタンの隣にあるパレスチナ人住宅の小さな集落から、教師のサメル・ジャベルは入植地が形を成していくのを見守ってきた。最初はブルドーザー、次にキャラバンが所定の位置に持ち上げられていく。問題は、ほとんどの家族が引っ越してくる前から始まっていたという。
「集団がやって来て、私たちの家の向かいに立って、私たちを撮影しています」と彼は私に語った。
「昨日、彼らは来てここに立って、私と私の子供たちを撮影していました。妻が外に出るたびに、彼らも彼女のことを撮影しました。彼らは私たちの家に入ろうとします。そして彼らは家々を訪問し、午前2時か3時にすべての窓から強力な投光器を直接照らします。」
サメルさんは半盲で、足に怪我を負っているため移動が困難です。
「恐怖がすべてを支配している。私たちは完全に無防備だ」と彼は語った。 「全員が武器を持っています。子供たちが心配なのでコンクリートブロックを持ってきて家のこちら側を封鎖しています。」
サメル氏は、国際的な圧力にもかかわらず、過去数年間、ヨルダン川西岸の他の地域で入植地と入植者の襲撃が拡大するのを観察してきた。
「欧州には我々のための時間がなく、米国はイランのことで頭がいっぱいで、中国には興味がない」と同氏は分析を始めた。 「ロシアはウクライナ問題で忙しいし、国連は終わったし、アラブ諸国は独自の国内問題を抱えている。」
「民主主義制度は終わった、終わった」と怒りと苦々しさが漏れ出て結論づけた。 「文明も進歩も近代も嘘だ。」
ジェニン周辺の新たな入植地と並んで、2つの新たなイスラエル軍事基地が急速に建設されている。監視塔と有刺鉄線を備えた高いコンクリート壁の陰で建設車両が砂埃を巻き上げ、イスラエル国旗が風にはためいている。
ジェニン難民キャンプの隣にある押収されたパレスチナの土地には軍事前哨基地も建設されている。これは1993年のオスロ合意の署名以来、パレスチナ自治政府の完全な管理下にある土地に建設された初めてのイスラエル軍事基地である。
イスラエル軍は2025年にジェニン難民キャンプを占拠する前に、数千人の住民をジェニン難民キャンプから避難させた。
イスラエル国防軍は、ジャブリヤットの前哨基地の建設が「作戦上の必要性に従って」発注されたことを認めた。
パレスチナ自治政府ジェニン知事のカマル・アブ・アルルブ氏は、イスラエルが難民キャンプ周辺の土地を接収したことは、パレスチナの都市の中心部にヘブロンやエルサレムのように分断して入植者を収容する計画を示唆しているのではないかと心配していると語った。
彼は、ジェニン周辺に入植者がいなかった過去20年間を「至福」だったと語った。
「今、私たちは彼らと彼らの襲撃によって仕組まれた地獄の中で生きている」と彼は語った。 「それは私たちの移動を制限します。彼らは道路を寸断し、土地をブルドーザーで破壊し、木を伐採します。」
ここでの変化のスピードは驚くべきものです。
数週間前、私はカディムからヨルダン川西岸北部を通ってイスラエルに向かう道路沿いのカフェで座ってコーヒーを飲んでいた。今ではそのカフェも、その周囲にある数十のパレスチナ人の店や企業も、道路沿いにただの瓦礫の山となっている。イスラエル軍によって破壊された。
10月のイスラエル選挙へのカウントダウンでは、取り壊されたパレスチナ人の建物の数と、新たな入植者キャラバンの数が記録された。
関連トピック
- 7 月 26 日発行
- 1 日前に公開
- 2 日前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cn7n0l4p0kzo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-21T05:00:57+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/5acd/live/49a65740-9d3d-11f1-aed2-8d6da8d75094.jpg",
    readTime: 8,
  },
  {
    id: "perfect-storm-brews-for-global-food-sup-4812640d",
    title: "'Perfect storm' brews for global food supply this winter as grain prices soar",
    titleJa: "穀物価格の高騰により、この冬、世界の食糧供給に「完璧な嵐」が起こる",
    summaryJa: "ロシアとウクライナは互いの港湾インフラを攻撃し続けており、「ヨーロッパの穀倉地帯」からの出荷を阻止し、小麦価格を高騰させ、世界の食料供給を苦しめる厳しい要因が重なっている。この二つの広大な国は、世界の穀物輸出量の約4分の1を生産していると推定されている。税関統計によると、6月までの1年間に紛争諸国は両国間で1億トン近い穀物を輸出しており、世界の食料供給を保護する外交協定のおかげで、2022年のロシアの全面侵攻以来、出荷はほぼ継続している。",
    bodyOriginal: `Russia and Ukraine continue to attack one another's port infrastructure, blocking shipments from the "breadbasket of Europe" and driving up wheat prices, and adding to a grim cocktail of factors afflicting global food supply.
The two vast nations are estimated to produce around a quarter of the world's grain exports. The warring countries exported nearly 100 million metric tons of grain between them in the year to June, according to customs figures, with shipments largely continuing to flow since Russia's full-scale invasion in 2022 thanks to diplomatic agreements to protect global food supplies.
Recent military strikes on grain export facilities, oil tankers and vessels in the Black Sea region have now made it too challenging for shipping firms to get insurance, meaning many are avoiding its ports. Alternative land routes for Ukrainian grain are also being stymied by low water levels on the Danube river, and by rail maintenance in Eastern Europe.
Agricultural shipments are being disrupted not just by conflict on the Black Sea but also by the blockade of the Strait of Hormuz and by the depletion of waterways such as Germany's Rhine.
Ongoing obstruction of those waterways is helping drive up the price of agricultural products such as fertilizer — and adding to farming woes in the process.
Soaring costs for farmers around the world, from fertilizer and diesel to labor, will further jeopardize food security if many decide they simply cannot make the money they need, analysts warn.
Profit problem
Higher fertilizer prices have become "structural" and are here to stay, CoBank's lead economist Jacqui Fatka wrote in a note last week, with key chemicals in tight supply due to the Middle East conflict.
U.S. farmers are conscious that under-fertilization can prove more costly than higher input prices if they sacrifice crop productivity, Fatka said — a balance that is becoming increasingly precarious as they exhaust other options for optimizing yields.
"Cash is tight at the farm gate, limiting some growers from locking in any product for the next crop year until additional financing or working capital becomes available," she wrote.
In Europe too, there is a fear that farmers in Russia, Ukraine and beyond will not plant much this winter because of profitability concerns and an inability to get financing, trade and agriculture analyst Noel Fryer told CNBC.
"A lot of things will come together to seriously affect crops next year," Fryer said on Thursday.
"We've had crops decimated by weather in Europe and the U.S. A searingly hot summer in Europe has eroded grazing potential, with no hay and grass for cattle. A possible result of that is significant herd liquidation," he said.
"We've got no end in sight to the Black Sea problem. The issue with fertilizer since the start of the Iran conflict is still there and if anything getting worse. U.S. corn yields look concerning after a wet spring and less fertilizer use, and could push prices up."
"And we've got uncertainty from a massive El Niño event about to hit," he said, referring to the weather event expected to increase volatility in the southern hemisphere.
"It's just a huge mix of different issues and we don't know how they're going to end. It's a perfect storm."`,
    bodyJa: `ロシアとウクライナは互いの港湾インフラを攻撃し続けており、「ヨーロッパの穀倉地帯」からの出荷を阻止し、小麦価格を高騰させ、世界の食料供給を苦しめる厳しい要因が重なっている。
この二つの広大な国は、世界の穀物輸出量の約4分の1を生産していると推定されている。税関統計によると、6月までの1年間に紛争諸国は両国間で1億トン近い穀物を輸出しており、世界の食料供給を保護する外交協定のおかげで、2022年のロシアの全面侵攻以来、出荷はほぼ継続している。
黒海地域の穀物輸出施設、石油タンカー、船舶に対する最近の軍事攻撃により、海運会社が保険に加入することが非常に困難になっており、多くの海運会社が黒海港を避けていることを意味している。ウクライナ産穀物を輸送する代替陸路も、ドナウ川の水位低下と東ヨーロッパの鉄道整備によって妨げられている。
農産物の輸送は、黒海での紛争だけでなく、ホルムズ海峡の封鎖やドイツのライン川などの水路の枯渇によっても中断されている。
これらの水路の継続的な妨害は、肥料などの農産物の価格高騰を助長しており、その過程で農業の苦境がさらに深刻になっている。
肥料やディーゼル燃料から人件費に至るまで、世界中の農家のコストが高騰し、多くの人が必要なお金を稼ぐことができないと判断すれば、食料安全保障はさらに危険にさらされるだろうとアナリストは警告する。
利益の問題
コーバンクの主任エコノミスト、ジャッキー・ファトカ氏は先週のメモで、中東紛争の影響で主要化学物質の供給が逼迫しており、肥料価格の高騰は「構造的」となり、その傾向が続いていると述べた。
ファトカ氏によると、米国の農家は、作物の生産性を犠牲にすれば、施肥不足が投入価格の上昇よりもコストが高くなる可能性があることを認識しているが、収量を最適化するための他の選択肢を使い果たしているため、このバランスはますます不安定になっているという。
「農場の資金は逼迫しており、追加の融資や運転資金が利用可能になるまで、一部の生産者は次の作物年度に農産物を確保することができない」と彼女は書いた。
欧州でも、ロシアやウクライナなどの農家が、採算性への懸念と融資を受けられないため、この冬はあまり作付けしないのではないかとの懸念があると、貿易・農業アナリストのノエル・フライヤー氏がCNBCに語った。
フライヤー氏は木曜日、「多くのことが重なり、来年は農作物に深刻な影響を与えるだろう」と語った。
「ヨーロッパとアメリカでは天候によって作物が壊滅状態になった。ヨーロッパの灼熱の夏は放牧の可能性を侵食し、牛のための干し草や牧草がなくなった。その結果として考えられるのは、大規模な群れの整理だ」と同氏は述べた。
「黒海問題には終わりの見通しが立っていない。イラン紛争勃発以来の肥料問題は依然として存在しており、むしろ悪化している。春の雨が多く肥料使用量が減った米国のトウモロコシの収量は懸念されており、価格が上昇する可能性がある。」
同氏は、南半球でボラティリティが高まると予想される気象現象に言及し、「大規模なエルニーニョ現象が間もなく発生するため、不確実性がある」と述べた。
「さまざまな問題が複雑に絡み合ったもので、どのように収束するかはわかりません。まさに完璧な嵐です。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/21/grain-price-russia-food-supply.html",
    publishedAt: "2026-08-21T05:00:01+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "a-delicate-dance-jd-vance-says-economic-6f54f0ac",
    title: "'A delicate dance': JD Vance says economic pressure is the best way to achieve Washington's objectives in Iran",
    titleJa: "「繊細なダンス」：JD・ヴァンス氏、イランにおけるワシントンの目的を達成するには経済的圧力が最善の方法だと語る",
    summaryJa: "JD・バンス米国副大統領によると、経済圧力はイランに対する米国の「最も効果的な手段」だという。ヴァンス氏はポッドキャストで、双方が互いに圧力をかけているため、この動きは「デリケートな踊り」だったと述べたが、「ここ数週間で真実なのは、彼らが我々よりもはるかに大きなプレッシャーを感じていたということだ」と付け加えた。",
    bodyOriginal: `Economic pressure is the United States' "most effective tool" against Iran, according to U.S. Vice President JD Vance.
Speaking on a podcast, Vance said that the move was "a delicate dance" as both sides apply pressure to each other, but added that "what has been true over the last couple of weeks is they felt a lot more pressure than we have."
His comments come after U.S. President Donald Trump said the U.S. will launch what he called the "most crushing economic operation ever taken against any country" against Iran. Trump also threatened severe financial penalties on any nation that helps Tehran evade sanctions, and added that "this will be Economic Warfare and Isolation on an unprecedented scale."
Vance, in his remarks, said pump prices for Americans are still elevated, but claimed that they have come down "substantially" because the U.S. has managed to get "a lot of oil and gas out" of the Strait of Hormuz due to the assistance of its military.
However, recently observed ship traffic through Hormuz has remained low, with 10 crossings on Monday and two transits on Sunday, according to data provided by the trade intelligence firm Kpler.
Before the war, average ship transits through the Strait were about 130 ships a day.
Iran's main leverage, Vance said, was access into the Strait, adding "if we can, not even get it back to where it was before, but if we can get enough oil and gas out to give some Americans some ease at the pumps, some ease on energy prices."
Iran was being punished for shooting at commercial ships and the U.S. will make sure that Iranian forces are not able to do that, Vance said.
"I think we've been quite successful," he claimed. His words echoed Trump's Truth Social post, which said Iran was already "on the ropes."
"Do they want to have their economy strangled for the rest of time, or do they want to have a better relationship with the West? That's always been the option that the president has put to these guys," Vance said.
— CNBC's Anniek Bao and Chloe Taylor contributed to this report.`,
    bodyJa: `JD・バンス米国副大統領によると、経済圧力はイランに対する米国の「最も効果的な手段」だという。
ヴァンス氏はポッドキャストで、双方が互いに圧力をかけているため、この動きは「デリケートな踊り」だったと述べたが、「ここ数週間で真実なのは、彼らが我々よりもはるかに大きなプレッシャーを感じていたということだ」と付け加えた。
同氏のコメントは、ドナルド・トランプ米大統領が、米国はイランに対して「これまでにどの国に対しても行われた中で最も壊滅的な経済作戦」と呼ぶものを開始すると述べた後に出された。トランプ大統領はまた、イラン政府の制裁回避に協力した国には厳しい経済制裁を科すと脅迫し、「これは前例のない規模の経済戦争と孤立になるだろう」と付け加えた。
バンス氏は発言の中で、米国人のポンプ価格は依然高くなっているが、米国が軍の支援によりホルムズ海峡から「大量の石油とガス」を取り出すことに成功したため、価格は「大幅に」下がったと主張した。
しかし、貿易情報会社Kplerが提供したデータによると、最近観察されたホルムズを通過する船舶の交通量は依然として少ないままで、月曜日には10回の航海があり、日曜日には2回の通過であった。
戦前、海峡を通過する船舶の平均は 1 日あたり約 130 隻でした。
バンス氏は、イランの主な影響力は海峡へのアクセスだと述べ、「できれば以前の状態に戻すことさえできないが、十分な石油とガスを取り出して、一部の米国人がポンプでいくらか楽になり、エネルギー価格もいくらか緩和できるのであれば」と付け加えた。
バンス氏は、イランは商船への銃撃で処罰されており、米国はイラン軍がそのような行為をできないようにするつもりだと述べた。
「我々はかなり成功したと思う」と彼は主張した。同氏の言葉は、イランはすでに「危機に瀕している」としたトランプ氏の真実ソーシャル投稿と同調した。
「彼らは残りの期間、自国の経済を窒息させておきたいのか、それとも西側諸国とより良い関係を築きたいのか。それが大統領が彼らに与えてきた選択肢だ」とバンス氏は語った。
— CNBC の Anniek Bao と Chloe Taylor がこのレポートに貢献しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/21/us-iran-war-trump-hormuz-vance-economic-pressure.html",
    publishedAt: "2026-08-21T04:32:59+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "taiwan-s-ai-fueled-forecast-of-11-gdp-gr-1e944b39",
    title: "Taiwan's AI-fueled forecast of 11% GDP growth likely not sustainable, economists say",
    titleJa: "AIを活用した台湾のGDP成長率11％予測は持続可能ではない可能性が高いとエコノミストらは指摘",
    summaryJa: "台湾政府の2026年の2桁GDP成長予測は、人工知能経済の楽観的な見方を反映している可能性があるが、設備投資の鈍化やマクロ経済低迷のリスク、また半導体産業への集中度を考慮すると、成長は時間の経過とともに鈍化する可能性が高い。今月初め、台湾の統計局は、今年のGDP成長率が11.05％になるとの見通しを発表し、5月に発表した予想の9.64％を上回った。台湾の加重株価指数は、ハイテク業界のAI需要に支えられ、年初から56%以上の上昇を見せている。",
    bodyOriginal: `The Taiwanese government's double-digit GDP forecast growth in 2026 may reflect optimism in the artificial-intelligence economy, but growth is likely to moderate over time given risks of capex slowdown and macroeconomic downturns, and with its high concentration in the semiconductor industry.
Earlier this month, Taiwan's statistics agency said it expects its GDP growth to be at 11.05% for the year, up from 9.64% forecast it issued in May. Taiwan's weighted stock index has seen a growth of over 56% year-to-date, supported by AI demand for its tech industry.
"I think it is important not to extrapolate the exceptional pace of growth this year too far ahead," said Saktiandi Supaat, head of FX research at Maybank.
While Taiwan has greatly benefited from huge investments by global tech companies amid growing demand for AI-related products, if the pace of AI investment slows, "this could feed relatively quickly into Taiwan's exports, manufacturing and investment," Supaat said.
Supaat added that Taiwan's reliance on technology and semiconductors makes it particularly exposed to swings in the global technology and AI capex cycles, as well as geopolitical developments.
Jeremy Tan, chief executive officer of Tiger Fund Management, noted that such risks "put the long-term sustainability of such growth in question."
Meanwhile, a potential rise in global interest rates due to rising inflation risks may also weigh on Taiwan's budding AI startups.
"Tighter global financial conditions could deepen the pullbacks in equity markets, in turn increasing stress in private credit markets," said Caroline Wong, country risk analyst at BMI. "For AI startups, the resulting impact of limited refinancing options for tech firms could lead to a slowdown in Taiwan's investment growth."
Wong also highlighted that risk sentiment may be dampened by heightened tensions with Beijing, and any pullback in investments could prompt customers of key chip manufacturers to diversify away from Taiwan,
The pace of wage growth is also another concern in Taiwan's economy, as real wages have remained stagnant even after the booming tech-heavy domestic equities market has lifted private consumption, said Nick Marro, principal economist for Asia at EIU.
"All of this suggests that the dividends from the AI boom aren't evenly dispersing through the economy, including in ways that would be structurally sustainable.," Marro said.
UOB economist Ho Woei Chen said Taiwan's ability to maintain its technological edge is key to its long-term sustainability.
"This requires continued investment in research and development, talent development, advanced manufacturing capabilities, and next-generation technologies," Ho said.`,
    bodyJa: `台湾政府の2026年の2桁GDP成長予測は、人工知能経済の楽観的な見方を反映している可能性があるが、設備投資の鈍化やマクロ経済低迷のリスク、また半導体産業への集中度を考慮すると、成長は時間の経過とともに鈍化する可能性が高い。
今月初め、台湾の統計局は、今年のGDP成長率が11.05％になるとの見通しを発表し、5月に発表した予想の9.64％を上回った。台湾の加重株価指数は、ハイテク業界のAI需要に支えられ、年初から56%以上の上昇を見せている。
メイバンクの為替調査部門責任者、サクティアンディ・スパアト氏は「今年の異例の成長ペースをあまり先のことまで推定しないことが重要だと思う」と述べた。
台湾はAI関連製品への需要が高まる中、世界的なハイテク企業による巨額投資から大きな恩恵を受けているが、AI投資のペースが鈍化すれば、「台湾の輸出、製造、投資に比較的早く反映される可能性がある」とスパアト氏は述べた。
スパアト氏は、台湾はテクノロジーと半導体に依存しているため、世界的なテクノロジーやAIの設備投資サイクル、地政学的展開の変動に特にさらされていると付け加えた。
タイガー・ファンド・マネジメントのジェレミー・タン最高経営責任者（CEO）は、こうしたリスクにより「こうした成長の長期的な持続可能性が疑問視される」と指摘した。
一方、インフレリスクの高まりによる世界的な金利上昇の可能性も、台湾の新進AIスタートアップにとって重しとなる可能性がある。
ＢＭＩのカントリーリスクアナリスト、キャロライン・ウォン氏は「世界的な金融情勢の逼迫は株式市場の反動をさらに深め、民間信用市場のストレスを増大させる可能性がある」と述べた。 「AI新興企業にとって、ハイテク企業への借り換えの選択肢が限られていることによる影響は、台湾の投資の伸びの鈍化につながる可能性がある。」
ウォン氏はまた、中国政府との緊張の高まりによってリスクセンチメントが弱まる可能性があり、投資が後退すれば主要な半導体メーカーの顧客が台湾から分散する可能性があると強調した。
EIUのアジア担当首席エコノミスト、ニック・マーロ氏は、ハイテク中心の国内株式市場の活況が個人消費を押し上げた後も、実質賃金は停滞したままであり、賃金上昇ペースも台湾経済のもう一つの懸念材料だと述べた。
「これらすべては、AI ブームからの配当が、構造的に持続可能な方法を含め、経済全体に均等に分散されていないことを示唆しています」とマーロ氏は述べた。
UOBのエコノミスト、ホー・ウェイ・チェン氏は、台湾が技術的優位性を維持できることが長期的な持続可能性の鍵であると述べた。
「これには、研究開発、人材育成、高度な製造能力、次世代技術への継続的な投資が必要です」とホー氏は述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/21/taiwan-gdp-growth-outlook-tech-forecast.html",
    publishedAt: "2026-08-21T03:59:53+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 3,
  },
  {
    id: "u-s-bond-intervention-is-like-paying-you-2e6ba597",
    title: "U.S. bond intervention is like 'paying your mortgage with your credit card,' JPMorgan's Sullivan says",
    titleJa: "JPモルガンのサリバン氏、米国債介入は「クレジットカードで住宅ローンを支払う」ようなものだと語る",
    summaryJa: "ＪＰモルガンによると、世界的な国債発行の急増で投資家の需要が試されるなか、米国債市場の圧力に対処しようとする米政府の取り組みは問題を将来にずらすだけかもしれない。ＪＰモルガンのグローバル・ファンダメンタルズ調査共同責任者ジェームズ・サリバン氏は金曜日、ＣＮＢＣの「スコーク・ボックス」で、財務省は短期手形を発行しながら長期債を事実上買い戻しており、これは一時的な救済にはなるものの、根本的な債務負担はそのまま残す戦略だと語った。",
    bodyOriginal: `The U.S. government's efforts to manage pressure in the Treasury market may merely shift the problem down the road as a surge in global debt issuance tests investor demand, according to JPMorgan.
The Treasury is effectively buying back longer-duration bonds while issuing shorter-dated bills, a strategy that can provide temporary relief but leaves the underlying debt burden intact, James Sullivan, JPMorgan's co-head of global fundamental research, told CNBC's "Squawk Box" on Friday.
The U.S. Treasury Department, led by Secretary Scott Bessent, on Wednesday announced it would at least double the size of its government debt buybacks, starting Sept. 9 and running through Nov. 4.
Sullivan compared the approach to refinancing longer-term obligations with shorter-term borrowing.
"It's a little bit like paying your mortgage with your credit card. It can work for a while, but eventually the mismatch starts to become more obvious," he added.
The intervention may help manage borrowing costs in the near term, but Sullivan's concern is that it does little to address the bigger problem: a mounting wall of government and corporate debt that ultimately has to find buyers.
"Governments trying to control markets is not a particularly attractive story most of the time."
The challenge extends beyond the U.S. Sullivan pointed to roughly $40 trillion in U.S. government debt and around $76 trillion across developed-market governments globally, alongside record corporate bond issuance.
Even with strong economic fundamentals, the sheer increase in bond supply matters for markets, Sullivan said. More debt needs to find buyers, potentially requiring issuers to offer investors more attractive yields.
"The only way you balance supply and demand is through price," he said. That equation is becoming more complicated as some traditional buyers of U.S. government debt pull back.
China's holdings of Treasurys are at an 18-year low, while U.S. Treasury custody holdings for foreign governments are at their lowest in 14 years.
The borrowing wave is not confined to governments. Corporations are also tapping debt markets heavily as economic growth becomes increasingly capital intensive, driven in part by artificial intelligence infrastructure, reshoring and national-security-related investment.
Leading AI companies have issued $200 billion of debt so far this year, up 80% from a year earlier, according to Sullivan. Spending on data centers and other AI infrastructure is adding to the broader competition for capital.
The implications extend to stocks. Higher bond yields can make fixed-income assets increasingly competitive with equities, particularly when stock valuations are elevated.
Bonds yields are now higher than the earnings yield on the S&P 500, according to JPMorgan data, making investors' choices between asset classes more difficult.
"The asset allocation decision becomes significantly more complex going forward as we see these environments play out," Sullivan said.`,
    bodyJa: `ＪＰモルガンによると、世界的な国債発行の急増で投資家の需要が試されるなか、米国債市場の圧力に対処しようとする米政府の取り組みは問題を将来にずらすだけかもしれない。
ＪＰモルガンのグローバル・ファンダメンタルズ調査共同責任者ジェームズ・サリバン氏は金曜日、ＣＮＢＣの「スコーク・ボックス」で、財務省は短期手形を発行しながら長期債を事実上買い戻しており、これは一時的な救済にはなるものの、根本的な債務負担はそのまま残す戦略だと語った。
スコット・ベッセント長官率いる米財務省は水曜日、9月9日から11月4日までの期間、国債買い戻しの規模を少なくとも2倍に拡大すると発表した。
サリバン氏は、長期債務の借り換えアプローチを短期借入と比較しました。
「クレジットカードで住宅ローンを支払うのと少し似ています。しばらくはうまくいくかもしれませんが、最終的には不一致がより明らかになり始めます。」と彼は付け加えた。
この介入は短期的には借入コストの管理に役立つかもしれないが、サリバン氏の懸念は、最終的に買い手を見つけなければならない政府債務と企業債務の増大する壁という、より大きな問題への対処にはほとんど役立たないということだ。
「政府が市場をコントロールしようとするというのは、ほとんどの場合、特に魅力的な話ではない。」
この課題は、記録的な社債発行と並んで、約40兆ドルの米国政府債務と世界中の先進国政府全体で約76兆ドルに上るとサリバン氏が指摘した米国の枠を超えて広がっている。
サリバン氏は、たとえ経済のファンダメンタルズが堅調であっても、債券供給の大幅な増加が市場にとって重要であると述べた。より多くの債券を発行するには買い手を見つける必要があり、発行体は投資家により魅力的な利回りを提供する必要がある可能性がある。
「需要と供給のバランスを取る唯一の方法は価格を通じてだ」と同氏は語った。従来の米国債買い手の一部が撤退するにつれ、この方程式はさらに複雑になっている。
中国の米国債保有高は18年ぶりの低水準にあり、外国政府による米財務省の保管残高は14年ぶりの低水準となっている。
借金の波は政府に限定されません。また、人工知能インフラ、リショアリング、国家安全保障関連の投資などによって経済成長がますます資本集約的になる中、企業は債務市場を大いに活用している。
サリバン氏によると、大手AI企業は今年これまでに2000億ドルの債券を発行しており、これは前年比80％増となっている。データセンターやその他の AI インフラストラクチャへの支出により、資本を巡る広範な競争が激化しています。
その影響は株式にも及ぶ。債券利回りの上昇により、特に株式の評価額が上昇した場合、債券資産の株式との競争力がますます高まる可能性があります。
JPモルガンのデータによると、債券利回りは現在S&P500種の収益利回りよりも高くなっており、投資家による資産クラスの選択はより困難になっている。
サリバン氏は、「こうした環境が展開するにつれて、資産配分の決定は今後大幅に複雑になる」と述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/21/us-bond-intervention-shifting-problem-future-jpmorgan.html",
    publishedAt: "2026-08-21T02:48:10+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 3,
  },
  {
    id: "japan-headline-inflation-rate-hits-highe-731e3837",
    title: "Japan headline inflation rate hits highest this year as energy prices bite",
    titleJa: "エネルギー価格の高騰により、日本の総合インフレ率は今年最高に達する",
    summaryJa: "イラン戦争のさなかエネルギーコストが上昇する中、日本の総合インフレ率は7月に1.9％と今年最高水準に達した。生鮮食料品の価格を差し引いた、エネルギーを含むコアインフレ率は1.8％で予想と一致した。",
    bodyOriginal: `Japan's headline inflation rate hit 1.9% in July, the highest level this year, as energy costs increase amid the Iran war.
Core inflation — which strips out prices of fresh food but includes energy — was in line with expectations, coming in at 1.8%.
Energy prices rose for the first time since November 2025 despite government subsidies, due to high oil costs from the conflict in the Middle East. That showed up in wholesale inflation, which came in at 7.2% for July, with electricity charges being the largest contributor.
Fresh food prices also saw a sharp spike, increasing 7% compared to a 3.9% rise in June.
Analysts have previously told CNBC that the relatively low consumer inflation is due to subsidies handed out by Prime Minister Sanae Takaichi's administration as it attempts to shield consumers from higher energy prices.
The so called "core-core" inflation rate — which strips out prices of both fresh food and energy, came in at 1.9%.
The Bank of Japan warned in its outlook report last month that core inflation was likely to accelerate to a level "clearly above" 2% from the second half of its 2026 fiscal year, which runs from September to March.
It cited wage increases being passed along into selling prices, the rise in crude oil prices and the recent depreciation of the yen. Inflation should then come down toward 2% as oil declines, it said.`,
    bodyJa: `イラン戦争のさなかエネルギーコストが上昇する中、日本の総合インフレ率は7月に1.9％と今年最高水準に達した。
生鮮食料品の価格を差し引いた、エネルギーを含むコアインフレ率は1.8％で予想と一致した。
中東紛争による原油価格高騰のため、政府の補助金にもかかわらず、エネルギー価格は２０２５年１１月以来初めて上昇した。これは7月の卸売インフレ率に表れ、7.2％となり、電気料金が最大の要因となった。
生鮮食品の価格も急騰し、6月の3.9％上昇に対し7％上昇した。
アナリストらは以前CNBCに対し、比較的低い消費者インフレは高市早苗首相の政権が消費者をエネルギー価格高騰から守るために配布した補助金によるものだと語った。
生鮮食品とエネルギーの価格を差し引いた、いわゆる「コアコア」インフレ率は1.9％となった。
日銀は先月の見通し報告書の中で、コアインフレ率が２０２６会計年度（９月から３月）の下半期から２％を「明らかに上回る」水準まで加速する可能性が高いと警告した。
賃金上昇が販売価格に転嫁されているほか、原油価格の上昇や最近の円安などを理由に挙げた。その後、原油価格の下落に伴いインフレ率は２％に向けて低下するだろうとの見方を示した。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/21/japan-inflation-iran-war-energy.html",
    publishedAt: "2026-08-21T00:22:20+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "japan-s-historic-yen-intervention-has-tu-9b164d9b",
    title: "Japan's historic yen intervention has ‘turbo-charged’ the carry trade",
    titleJa: "日本の歴史的な円介入はキャリートレードを「ターボチャージ」した",
    summaryJa: "円を下支えしようとする日本の歴史的な取り組みは、一部の投資家にキャリートレードを倍増させるより良い機会を与えるという、意図せぬ結果をもたらした可能性がある。財務省のデータによると、日本の投資家は８月１５日までの２週間に海外株式と長期債券を５兆円以上買い越し、それまでの２週間は３０００億円以上売り越していた。",
    bodyOriginal: `Japan's historic effort to prop up the yen may have had an unintended consequence: giving some investors a better opportunity to double down on carry trade.
Japanese investors net bought more than 5 trillion yen of foreign equities and long-term bonds over the two weeks ended Aug. 15, compared with net selling of over 300 billion yen in the prior two weeks, according to Ministry of Finance data.
The purchases suggest investors took advantage of the yen's sharp rally following last month's joint U.S.-Japan currency intervention to snap up overseas assets at more favorable exchange rates, said market watchers.
"Intervention has 'turbo charged' the carry trade for fundamental & long term investors," according Jesper Koll, expert director at Monex Group. "As long as the cost of money in Japan is lower than the return overseas, carry trades will re-assert," Koll said.
While authorities succeeded in jolting the yen higher, they did little to change the incentive for investors to borrow or raise funds cheaply in Japan and put the money into higher-yielding assets abroad.
The yen strengthened from around 164 per dollar before the intervention to roughly 155, but quickly surrendered a large chunk of those gains. It has since weakened back toward 159 against the greenback.
That has reinforced expectations that the yen will remain under pressure unless the Bank of Japan raises rates enough to materially narrow the bond yield gap with the U.S. The U.S.-Japan 10-year yield spread stood at roughly 1.8 percentage point as of Thursday.
The short-lived yen gains signal that investors are treating bouts of yen strength as opportunities to rebuild carry trade positions rather than abandon them.
That dynamic is particularly visible among Japanese institutional investors. Long-term investors such as pension funds and asset managers continued selling yen, according to Masahiko Loo, fixed income strategist at State Street Global Advisors.
"The intervention only addressed a 'symptom', but [is] not curing the 'disease,'" said Francis Tan, Asia chief strategist at Indosuez Wealth Management, referring to the structural forces including Japan's low borrowing costs and wide interest-rate differentials with other major economies.
Koll also said that Japanese retail and institutional investors have used the stronger yen to establish new positions in non-yen assets, particularly higher-yielding U.S. bills and bonds.
"The market is far less one-sided than before the intervention, but the incentives to fund in yen remain attractive while U.S.-Japan rate differentials stay wide," Loo said.
Other flow data point more directly to carry positions being maintained. Long-term investors are continuing to sell low-yielding yen against higher-yielding G10 currencies, consistent with investors using the Japanese currency to fund positions elsewhere, said to Masahiko Loo, fixed income strategist at State Street Global Advisors.
Alpha Binwani Capital's founder Ashwin Binwani said institutional investors remained positioned in carry trades against a basket of G10 currencies, led by the Australian dollar.
There are also signs that some currency traders are rebuilding bearish bets on the yen, as the impact of the intervention has faded.
Binwani exited long dollar-yen positions after the U.S.-backed intervention, before re-establishing them just above 157, expecting the yen to weaken going forward. "Upon news of the U.S. intervention, we took profit and once again re-established dollar yen long positions just slightly above 157," he said.
Binwani said each intervention-driven rally could potentially offer investors a better entry point to sell the currency. While distinct from borrowing yen to invest directly in higher-yielding assets, the trade is underpinned by the same fundamental force: Japan's relatively low interest rates that keep its currency under pressure.
Overall, speculative positions against the yen, however, have declined. CFTC data show leveraged funds slashed net short yen positions from almost 138,000 contracts at the end of June to 59,526 as of Aug. 11, as authorities demonstrated their willingness to intervene.`,
    bodyJa: `円を下支えしようとする日本の歴史的な取り組みは、一部の投資家にキャリートレードを倍増させるより良い機会を与えるという、意図せぬ結果をもたらした可能性がある。
財務省のデータによると、日本の投資家は８月１５日までの２週間に海外株式と長期債券を５兆円以上買い越し、それまでの２週間は３０００億円以上売り越していた。
市場関係者らによると、今回の購入は、投資家が先月の日米共同為替介入後の円の急騰を利用して、より有利な為替レートで海外資産を買い占めたことを示唆しているという。
マネックスグループのエキスパートディレクター、ジェスパー・コル氏は、「介入により、ファンダメンタルズ投資家や長期投資家にとってキャリートレードは『ターボチャージ』された」と述べた。 「日本のお金のコストが海外のリターンよりも低い限り、キャリートレードは再び活発化するだろう」とコル氏は語った。
当局は円高を揺るがすことに成功したが、投資家が日本で安く資金を借りたり調達し、その資金を海外の高利回り資産に投資したりするインセンティブを変えることはほとんどできなかった。
円は介入前の1ドル＝約164円から約155円まで上昇したが、その上昇分のかなりの部分をすぐに放棄した。その後、対ドルで159ドルに向けて下落した。
このため、日銀が米国との債券利回り格差を大幅に縮小するほど十分な利上げをしない限り、円には引き続き圧力がかかるとの見方が強まった。日米10年債利回り格差は木曜時点で約1.8％ポイントとなっている。
短期間の円高は、投資家が円高局面をキャリートレードのポジションを放棄するのではなく、再構築する機会として捉えていることを示している。
この力関係は特に日本の機関投資家の間で顕著に見られます。ステート・ストリート・グローバル・アドバイザーズの債券ストラテジスト、マサヒコ・ルー氏によると、年金基金や資産運用会社などの長期投資家は円を売り続けた。
インドスエズ・ウェルス・マネジメントのアジア首席ストラテジスト、フランシス・タン氏は「介入は『症状』に対処しただけで、『病気』は治癒していない」と述べ、日本の低い借入コストや他の主要国との大きな金利差などの構造的要因に言及した。
コル氏はまた、日本の個人投資家や機関投資家が円高を利用して、円以外の資産、特に高利回りの米紙幣や債券に新たなポジションを確立していると述べた。
ルー氏は「市場は介入前に比べてはるかに一方的ではなくなったが、日米の金利差が依然として大きい中、円で資金を調達するインセンティブは依然として魅力的だ」と述べた。
他のフロー データは、維持されているキャリー ポジションをより直接的に示します。ステート・ストリート・グローバル・アドバイザーズの債券ストラテジスト、マサヒコ・ルー氏は、長期投資家は高利回りのG10通貨に対して低利回りの円を売り続けており、これは投資家が日本通貨を他の場所のポジションに資金調達するために利用していることと一致すると述べた。
アルファ・ビンワニ・キャピタルの創設者アシュウィン・ビンワニ氏は、機関投資家は豪ドル主導でＧ１０通貨バスケットに対してキャリートレードを続けていると述べた。
介入の影響が薄れる中、一部の為替トレーダーが円に対する弱気の賭けを再構築している兆候もある。
ビンワニ氏は米国支援の介入後、ドル円のロングポジションを解消したが、今後の円安を予想して１５７ドルを少し上回る水準に再確立した。同氏は「米国の介入のニュースを受けて、利益確定し、ドル円のロングポジションを１５７をわずかに上回る水準に再設定した」と述べた。
ビンワニ氏は、介入主導の上昇は投資家にとって通貨売りのより良いエントリーポイントとなる可能性があると述べた。円を借りて高利回り資産に直接投資するのとは異なりますが、この取引は同じ基本的な力、つまり自国通貨に圧力をかけ続ける日本の比較的低い金利によって支えられています。
しかしながら、全体的には対円投機ポジションは減少している。 CFTCのデータによると、当局が介入の姿勢を示したため、レバレッジファンドは6月末の約13万8,000枚から8月11日時点で5万9,526枚まで円のネットショートポジションを削減した。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/20/us-japan-yen-intervention-bank-of-japan-carry-trade.html",
    publishedAt: "2026-08-21T00:00:01+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 4,
  },
  {
    id: "how-much-could-trump-s-economic-d-day-hu-88e6381f",
    title: "How much could Trump's 'economic D-Day' hurt Iran?",
    titleJa: "トランプ大統領の「経済的Dデー」はイランにどれだけのダメージを与える可能性があるだろうか？",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `How much could Trump's 'economic D-Day' hurt Iran?
- Published
Nearly six months after US President Donald Trump vowed a swift victory over Iran, the conflict appears to be at a standstill, with prospects of a military victory or negotiated settlement growing dimmer.
To break the deadlock, Trump has vowed an "economic D-Day" under which any country that does business with Iran would face "tremendous" economic consequences.
Iran, however, has long faced sanctions and has so far shown a willingness to endure pain and a capacity to adapt to immense economic and military pressure as the conflict drags on.
The key question for the US then becomes, will further sanctions work where other strategies have failed?
The exact mechanics of the new US economic pressure campaign remain unclear, with Treasury Secretary Scott Bessent promising to reveal them in a news conference on 24 August.
But in an interview with CNBC, Bessent made clear that the US is willing to take action against any country - friend or foe - that it believes is extending a lifeline to Iran.
"You are either with us or against us," he said. "If you insist on doing business with [Iran], either transferring money, buying their oil or doing seaborne sea transfers, then the US treasury and the US government... will put its full might and force toward enforcing against you."
Vice-President JD Vance has described the sanctions as a "new phase" of the conflict in which economic pressure is the "most effective" tool available to the US.
"They're going to try to apply economic pressure to us, but what has been true over the last couple of weeks is that they felt a lot more pressure than we have," Vance said on the Clay Travis and Buck Sexton show.
"We're going to keep that going because we think that's the best way to ultimately achieve the final objective," he added.
Iran has faced significant US sanctions since nearly the beginning of the Islamic Republic in 1979.
The economic pressure campaign intensified after the first Trump administration withdrew from the Joint Comprehensive Plan of Action (JCPOA), a 2015 pact between world powers and Iran to curb its nuclear programme.
And in the current conflict, the US government has already announced Operation Economic Fury, a two-pronged US economic campaign combining US treasury-co-ordinated sanctions against regime financial flows and a naval blockade against Iranian ports.
Imran Bayoumi, a geostrategy expert with the Atlantic Council in Washington DC and former policy adviser to the defence department, told the BBC the latest announcement was likely the result of mounting frustration that other options have not delivered the results Trump wants.
"This is really a recognition that the US is almost stuck in this war," he said. "It's another try at economic pressure."
"This is just another tool that the US is using," Bayoumi added. "We've not seen a clear strategy laid out by the administration with either military or economic tools. The question of what the US is trying to achieve is still unanswered."
Michael Parker, an eight-year veteran of the Office of Foreign Assets Control (OFAC) and expert on economic sanctions, said the new strategy will likely represent an effort to "expand the economic blast radius" of sanctions by targeting third countries that still deal with Iran, but have economies that depend on the US dollar.
"Thus far, the US has largely used the threat of these secondary sanctions against foreign financial institutions to encourage compliance with sanctions policy," he said.
"But this is a lever that is sort of unexplored insofar as targeting anything touching the US dollar that is also touching Iran," Parker added.
As an example, Parker pointed to foreign financial institutions that help Iran evade sanctions, or directs money towards Iranian coffers.
How Iran would respond to these moves remains unclear, but sanctions experts say that Iran has so far proved adept at using irregular channels to circumvent sanctions - such as "shadow" vessels transporting oil or new commercial fronts unlisted by US sanctions.
"You keep seeing new names popping up, because Iran is adapting really quickly," said Mohammed Hammouda, an export control and sanctions manager at the London Stock Exchange. "Whatever sanctions one does, they find a new road [around it]."
These Iranian counter-moves, he added, often leave those charged with enforcing compliance playing a game of catch-up.
"Sanctions are all on paper, but the hard work is behind the scenes," Hammouda added. "There are teams worldwide trying to impose sanctions and identify those parties involved, which is why Iran has to try to adapt."
How effective these sanctions are will largely be determined by how the countries that are ultimately targeted - which could include US allies like Turkey and Iraq, as well as China - react.
"Some of this is out of Iran's hands," Parker said. "Iran's ability to evade or avoid sanctions is, in large part, contingent on other countries and financial institution's willingness to give them [Iran] access to the formal banking system."
Parker believes that the sanctions are "only as powerful" as the willingness of targeted countries to comply with American foreign policy objectives, or face potentially painful sanctions on trade involving the US dollar.
Some experts question whether that willingness currently exists.
"I can't really see China agreeing to that, for example," Bayoumi said. "These states have all been able to navigate their own interests with the Trump administration."
"The underlying point is that this is just another tool," he added. "But the broader question of strategy remains. Absent that, I'm not sure this is going to change anything long term."
- Published3 hours ago
- Published1 day ago
- Published3 days ago`,
    bodyJa: `トランプ大統領の「経済的Dデー」はイランにどれだけのダメージを与える可能性があるだろうか？
- 公開されました
ドナルド・トランプ米大統領がイランに対する速やかな勝利を誓ってからほぼ6カ月が経ち、軍事的勝利や交渉による解決の見通しはますます薄れており、紛争は停滞しているようだ。
行き詰まりを打開するために、トランプ大統領は、イランと取引する国は「甚大な」経済的影響に直面する「経済Dデー」を宣言した。
しかし、イランは長年にわたり制裁に直面しており、これまでのところ、紛争が長引く中、苦痛に耐える姿勢と、経済的・軍事的圧力の巨大化に適応する能力を示している。
米国にとって重要な問題は、他の戦略が失敗した場合にさらなる制裁が機能するかどうかということになる。
米国の新たな経済圧力キャンペーンの正確な仕組みは依然として不明であり、スコット・ベッセント財務長官は8月24日の記者会見で明らかにすると約束している。
しかし、ベセント氏はCNBCとのインタビューで、米国はイランに命綱を伸ばしていると思われる国に対しては、敵味方問わず行動を起こす用意があると明言した。
「あなたたちは我々に味方するか、反対するかのどちらかだ」と彼は言った。 「もしあなたが送金、石油の購入、あるいは海上輸送など、（イランと）取引をすることを主張するなら、米国財務省と米国政府は…全力を尽くしてあなたに対して強制力を行使するだろう。」
Ｊ・Ｄ・バンス副大統領は、今回の制裁を、経済的圧力が米国にとって「最も効果的な」手段となる紛争の「新たな段階」であると述べた。
ヴァンス氏はクレイ・トラビスとバック・セクストンの番組で、「彼らは私たちに経済的圧力をかけようとしているが、ここ数週間で真実なのは、彼らが私たちよりもはるかに大きなプレッシャーを感じていたということだ」と語った。
「最終的に最終目標を達成するにはそれが最善の方法だと考えているので、我々はそれを続けるつもりだ」と彼は付け加えた。
イランは、1979年のイスラム共和国発足間近以来、米国による大幅な制裁に直面してきた。
第一次トランプ政権が核開発計画を抑制するための世界大国とイランとの間の２０１５年の協定である包括的共同行動計画（ＪＣＰＯＡ）から離脱した後、経済圧力キャンペーンは激化した。
そして現在の紛争において、米国政府は既に「経済的怒り作戦」を発表している。これは、政権の資金の流れに対する米国財務省と連携した制裁と、イラン港湾に対する海上封鎖を組み合わせた二本柱の米国経済キャンペーンである。
ワシントンD.C.の大西洋評議会の地政戦略専門家で元国防総省政策顧問のイムラン・バユーミ氏はBBCに対し、今回の発表は他の選択肢がトランプ大統領の望む結果をもたらしていないことへの不満の高まりの結果である可能性が高いと語った。
「これはまさに、米国がこの戦争にほぼ巻き込まれているという認識だ」と同氏は述べた。 「これは経済的圧力に対する新たな試みだ。」
「これは米国が利用しているもう一つの手段に過ぎない」とバユーミ氏は付け加えた。 「軍事的手段や経済的手段を用いて政権が打ち出した明確な戦略を我々は見たことがない。米国が何を達成しようとしているのかという問題はいまだ答えられていない。」
外国資産管理局（OFAC）に8年間勤務し経済制裁の専門家であるマイケル・パーカー氏は、新たな戦略は、依然としてイランと取引を続けているが、経済が米ドルに依存している第三国をターゲットにすることで、制裁の「経済的爆発範囲を拡大する」取り組みを示す可能性が高いと述べた。
同氏は「これまで米国は主に、外国金融機関に対するこうした二次制裁の脅威を利用して、制裁政策の順守を促してきた」と述べた。
「しかし、これは、イランにも影響を及ぼし、米ドルに影響を与えるものを標的にするという点では、ある意味未開発の手段だ」とパーカー氏は付け加えた。
パーカー氏は一例として、イランの制裁回避を支援したり、資金をイランの金庫に振り向けたりする外国金融機関を挙げた。
イランがこうした動きにどう対応するかは依然として不明だが、制裁専門家らによると、イランはこれまでのところ、石油や米国の制裁対象外の新たな商業分野を輸送する「影の」船舶など、不規則なルートを利用して制裁を回避することに長けているという。
ロンドン証券取引所の輸出管理・制裁担当マネジャー、モハメド・ハムーダ氏は、「イランは非常に早く適応しているため、新しい名前が次々と登場している」と述べた。 「どんな制裁をしても、彼らは[その周りに]新しい道を見つけるのです。」
こうしたイランの対抗策により、コンプライアンスを強制する責任を負った人々は、後追いゲームをすることになることが多い、と同氏は付け加えた。
「制裁はすべて紙の上で行われているが、努力は舞台裏で行われている」とハモウダ氏は付け加えた。 「制裁を課し、関係者を特定しようとしているチームが世界中に存在しており、そのためイランは適応しようと努めなければならない。」
これらの制裁がどれだけ効果的かは、最終的に標的となる国（トルコやイラクといった米国の同盟国や中国も含まれる可能性がある）がどのように反応するかによって大きく決まるだろう。
「この一部はイランの手に負えない」とパーカー氏は語った。 「イランが制裁を回避できるかどうかは、主に他国と金融機関が（イランに）正規の銀行システムへのアクセスを与えるかどうかにかかっています。」
パーカー氏は、制裁の威力は、対象国が米国の外交政策目標に従うか、米ドルが絡む貿易に関して潜在的に痛みを伴う制裁に直面するかどうかに応じて「強力」になると考えている。
一部の専門家は、そのような意欲が現在存在するかどうかを疑問視しています。
「例えば中国がそれに同意するとは到底思えない」とバユーミ氏は語った。 「これらの州はすべて、トランプ政権とともに自らの利益をうまく進めることができた。」
「根底にあるのは、これは単なるツールの1つだということだ」と同氏は付け加えた。 「しかし、戦略というより広範な問題が残っている。それがなければ、これが長期的に何かを変えるかどうかは分からない。」
- 3 時間前に公開
- 1 日前に公開
- 3 日前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cre4gdvlj9ro?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-20T23:16:45+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/1ffc/live/12640900-9cdc-11f1-a291-b542ee92de7c.jpg",
    readTime: 7,
  },
  {
    id: "why-the-us-economy-is-ringing-alarm-bell-6a9857b2",
    title: "Why the US economy is ringing alarm bells",
    titleJa: "米国経済が警鐘を鳴らしている理由",
    summaryJa: "米国経済が警鐘を鳴らしている理由- 公開されました",
    bodyOriginal: `Why the US economy is ringing alarm bells
- Published
What with a 250th birthday, Taylor Swift's wedding and the football World Cup, Americans could be forgiven for taking their eye off the ball this summer.
But signs of economic trouble have been building. This week they hit the headlines when US national debt passed the $40tn mark, raising concerns both at home and abroad.
How did the we get here?
It took almost 200 years for America's national debt reach $1tn for the first time, says Maya MacGuineas, president of the Committee for a Responsible Federal Budget.
That milestone back in 1981 was treated as a wake-up call. "At that time, President [Ronald] Reagan told the nation in a televised address, 'If we as a nation needed a warning, let that be it'," she said.
"Jumping to America's 250th year, we are spending more than that just on interest payments on our debt."
Hitting the $40tn milestone was expected - driven by public spending surges under both the Donald Trump and Joe Biden administrations - but it marks another line in the sand.
Ballooning costs for social programs and other spending have outstripped revenues undermined by tax cuts. Responses to crises such as the 2008 financial crisis and the Covid pandemic have led to increased borrowing.
Add to that higher interest rates in response to recent inflation shocks and the picture begins to look grim.
How bad is it?
At the beginning of Trump's first presidential term in 2016, US national debt stood at just under $20tn. It has doubled in the decade since.
According to the Congress Joint Economic Committee, the figure is rising by about $90,000 every second, or $7.8bn a day.
"What's very different now compared to a decade ago is the level of interest rates," says Eric Swanson, professor of economics at University of California and former senior economist at the Federal Reserve.
"Long-term interest rates in the US are at multi-decade highs - part of that is concerns about inflation, but part of that is concerns about the extreme levels of US government borrowing."
The bond market is demanding higher returns with investors wary of the scale of the US's debt, but also because tech firms borrowing eye-watering sums to spend on AI are competing with the government for investors' cash.
"What happens when interest rates go up is that the funding of the deficit becomes more expensive," says economist Mohamed A. El-Erian, a professor at the Wharton School.
Interest payments on government debt are now 15% higher than the same period last year, says El-Erian. They are almost 20% of tax revenue "larger than defence", he adds.
Should I be worried?
The US is nearing its $41.1tn debt ceiling, with debt forecast to climb to about $64tn by 2036, according to the Congressional Budget Office.
But the situation is not yet critical, say economists. The US's position as the world's largest economy and the dollar being the world's reserve currency gives the US a "much longer runway to fiscally misbehave" than other countries, El-Erian says.
"We're getting to a point where it's a flashing yellow light. It's not a flashing red light," he says.
Swanson says other countries have had similar, or higher debt levels.
While US national debt is 126% compared with the size of the economy, it's lower than other G7 nations Japan and Italy.
But investor appetite in lending the US government money through buying bonds is "diminishing", Swanson warns, creating a "vicious" cycle, requiring the government to offer ever higher returns to keep investors purchasing its debt.
And higher US borrowing costs inevitably spill over, raising other countries' borrowing costs too. "What happens in the US never stays in the US," says El-Erian.
What does it mean for you?
Households will likely face higher rates for mortgages, auto loans and credit cards as a result of the current situation, with those on lower incomes hit hardest, El-Erian says.
There's also a secondary effect on consumers as higher borrowing costs for firms is often passed through to them via higher prices.
So the impact of the debt "finds its way to the pocketbooks of people one way or another," says MacGuineas.
What next?
The US's latest figures show the economy slowed in recent months, but it is still growing at fair lick.
That matters because economic growth means more tax revenue, which can pay for spending, whether that's on government programmes or interest payments. With enough growth, the debt problem is eased, points out El-Erian.
But without sufficient growth the US might have to look at other options. They could include reforming the tax system and public spending, or austerity. Debt restructuring is another option.
The strategy so far employed has been a kind of financial engineering, with the Treasury department on Wednesday stepping in to buy back government debt, boosting demand for bonds and lowering borrowing rates.
But the impact was shortlived with long-term borrowing costs bouncing back up a day later.
With the mid-term elections approaching, the White House will want to be seen to be delivering on the economy. Affordability is the top concern among voters. But the other options are no more appealing and El-Erian is doubtful the government is ready to look at other measures.
"I don't see anything happening that is going to significantly lower the deficit over the next two to three years. If you look at the political talk, it's about tax cuts."`,
    bodyJa: `米国経済が警鐘を鳴らしている理由
- 公開されました
生誕250年、テイラー・スウィフトの結婚式、そしてサッカーのワールドカップを控えているこの夏、アメリカ人がボールから目を離すのも無理はないだろう。
しかし、経済問題の兆候は高まっている。今週、米国の国債が40兆ドルの水準を超えたことがニュースの見出しとなり、国内外で懸念が高まった。
どうやって私たちはここに来たの？
責任ある連邦予算委員会の委員長マヤ・マクギニアス氏は、アメリカの国家債務が初めて1兆ドルに達するまでにほぼ200年かかった、と語る。
1981 年のこのマイルストーンは、警鐘として扱われました。 「当時、（ロナルド）レーガン大統領はテレビ演説で国民に『国家として警告が必要なら、それでいい』と語った」と彼女は語った。
「アメリカ建国250周年に目を向けると、我々は借金の利払いだけでそれ以上の支出をしている。」
ドナルド・トランプ、ジョー・バイデン両政権下での公共支出の急増により、40兆ドルの節目の達成が予想されていたが、これはまた新たな一線を画すことになる。
社会プログラムやその他の支出にかかる費用が膨れ上がり、減税によって損なわれた歳入を上回っている。 2008年の金融危機や新型コロナウイルスのパンデミックなどの危機への対応により、借入が増加した。
それに加えて、最近のインフレショックに対応した金利上昇もあり、状況は暗くなり始めています。
どれくらいひどいですか？
2016年のトランプ大統領の最初の任期の初めには、米国の国債は20兆ドル弱に達していた。それ以来10年で2倍になった。
米議会合同経済委員会によると、この数字は毎秒約9万ドル、つまり1日あたり78億ドルずつ増加しているという。
「10年前と比べて現在大きく変わっているのは、金利の水準だ」とカリフォルニア大学経済学部教授で元連邦準備制度理事会シニアエコノミストのエリック・スワンソン氏は言う。
「米国の長期金利は数十年ぶりの高水準にある。インフレ懸念もあるが、米国政府の極端な借り入れ水準に対する懸念もある。」
債券市場がより高いリターンを求めているのは、投資家が米国の債務の規模に警戒していることだけでなく、AI関連に支出するために目がくらむような金額を借りているハイテク企業が投資家の現金をめぐって政府と争っているためでもある。
「金利が上昇すると何が起こるかというと、財政赤字の資金調達がより高価になるということです」とウォートンスクールの経済学者モハメド・A・エラリアン教授は言う。
エラリアン氏によると、政府債務の利払いは現在、前年同期に比べて15％増加しているという。これらは税収のほぼ20％で「国防よりも大きい」と彼は付け加えた。
心配する必要がありますか？
議会予算局によると、米国は41.1兆ドルの債務上限に近づき、債務は2036年までに約64兆ドルに増加すると予測されている。
しかし、経済学者らによると、状況はまだ危機的ではないという。世界最大の経済大国としての米国の地位と、ドルが世界基軸通貨であることにより、米国は他国に比べて「財政上の不正行為が起きる可能性がはるかに長い」とエラリアン氏は言う。
「我々は、黄色信号の点滅という段階に達しつつある。赤信号の点滅ではない」と彼は言う。
スワンソン氏は、他の国も同様かそれ以上の債務水準にあると述べた。
米国の国債は経済規模に比べて126％だが、他のG7諸国である日本やイタリアに比べれば低い。
しかし、債券購入を通じて米国政府に資金を融資する投資家の意欲は「減退」しており、投資家が国債を購入し続けるために政府はこれまで以上に高い収益を提供する必要があるという「悪循環」を生み出している、とスワンソン氏は警告する。
そして米国の借入コストの上昇は必然的に波及し、他国の借入コストも上昇する。 「米国で起こったことは、決して米国内にとどまることはありません」とエラリアンは言う。
それはあなたにとって何を意味しますか？
現在の状況により、家計は住宅ローン、自動車ローン、クレジットカードの金利上昇に直面する可能性が高く、最も大きな打撃を受けるのは低所得世帯だ、とエラリアン氏は言う。
企業の借入コストの上昇は、価格の上昇を通じて消費者に転嫁されることが多いため、消費者にも二次的な影響があります。
そのため、借金の影響は「何らかの形で人々の懐に影響を及ぼしている」とマクギニアス氏は言う。
次は何でしょうか？
米国の最新の統計は、ここ数カ月で経済が減速したことを示しているが、依然としてかなりの勢いで成長している。
経済成長は税収の増加を意味し、政府のプログラムや利払いなどの支出を賄うことができるため、これは重要だ。十分な成長があれば、債務問題は緩和される、とエラリアン氏は指摘する。
しかし、十分な成長がなければ、米国は他の選択肢を検討しなければならないかもしれない。それには税制や公共支出の改革、あるいは緊縮財政が含まれる可能性がある。債務再編も選択肢の一つです。
これまで採用されてきた戦略は一種の金融工学であり、水曜日に財務省が国債買い戻しに介入し、債券需要を高め、借入金利を引き下げた。
しかし、その影響は長くは続かず、翌日には長期借入コストが回復した。
中間選挙が近づく中、ホワイトハウスは経済に貢献していると思われることを望んでいるだろう。有権者の最大の関心事は手頃な価格だ。しかし、他の選択肢はもはや魅力的ではなく、エラリアン氏は政府が他の措置を検討する用意があるか疑っている。
「今後２、３年で財政赤字を大幅に削減するような出来事は起きていないと思う。政治的な話題を見てみると、それは減税に関するものだ。」`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c9d8z72nn02o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-20T23:15:15+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/6d5b/live/f6865980-9cf0-11f1-a0c7-a733f826760a.jpg",
    readTime: 6,
  },
  {
    id: "how-landscape-gardening-is-being-electri-9d803131",
    title: "How landscape gardening is being electrified",
    titleJa: "造園の電動化はどのように進んでいるのか",
    summaryJa: "造園の電動化はどのように進んでいるのか- 公開されました",
    bodyOriginal: `How landscape gardening is being electrified
- Published
Part of the soundtrack to a day in southern California is the drone of petrol-powered gardening equipment.
Noise is one of the main reasons that cities around the US, external are banning petrol landscaping tools or encouraging electric alternatives.
These alternatives have the additional benefits of reducing carbon emissions, vibrations and the exposure of landscapers to pollution.
In addition they can mean longer working hours, as they can be used at times when residents demand quiet.
Today, I'm taking part in training run by the American Green Zone Alliance (AGZA), an organisation supporting the transition towards electric landscaping equipment.
To my surprise, the electric backpack leaf blower I strap on is not much heavier than my normal rucksack. Using the blower to herd balls around the park feels fairly intuitive, though naturally I'm much clumsier and slower than the pro landscapers.
As for noise, there's still a buzz, but the sound is higher-pitched and not quite so loud as the familiar petrol-powered machines.
The move to electric power is attracting new companies to the market for gardening kit.
US aerospace start-up Whisper Aero is one of those firms. Its main business is electric propulsion systems for aircraft.
But in 2022, after the Covid-19 pandemic made many people more sensitive to noise, and following a couple of years of research and development, the company realised that its aerospace-grade fans would work well in leaf blowers.
"Our technology is cleaner, quieter and more efficient than other air-moving technologies that exist today," according to Andrew Terajewicz, Whisper Aero's director of air management. "And the leaf blower is the perfect mix of this."
The battery on Whisper Aero's blower lasts up to 50 minutes at full power.
The company has had to scale up its manufacturing volume in its expansion to consumer technology.
Online pre-orders of Whisper Aero's handheld leaf blower started this year. It's priced at the high-end of electric leaf blowers, which are often more expensive than traditional petrol versions.
But for that you get a machine which is less likely to disturb the peace.
"It is so ultra quiet yet powerful, that the brain has a hard time understanding what's happening," says Dan Mabe, the former landscaper who founded AGZA.
Whisper Aero aims to further develop its products, including a backpack leaf blower that would be better suited to professional landscapers.
Even with innovation like that, petrol-powered machines are unlikely to disappear anytime soon, particularly for professional landscapers.
For a start, petrol machines are much more powerful, which makes for quicker work, so less time is spent lugging around heavy equipment.
Terajewicz says that heavy-duty petrol backpack blowers can reach a maximum blowing force of about 50 newtons.
The handheld Whisper Aero blower typically runs at about half that, though it can go higher.
Another big issue is runtime. Professional gardeners like to use their blowers at full throttle.
"For us, it's a little bit hard to use electric," explains Carlos Camarena, a supervisor for a California landscaping company.
Camarena's company uses electric tools where they're required to, in cities with ordinances banning petrol tools. But when they have a choice, they stick to petrol.
His company typically uses batteries that last for about 30 minutes. A crew has six batteries charging at any given time; each takes about 45 minutes to reach a full charge.
Then there's the considerable upfront cost of going electric. One landscaper estimates that it would cost his business around $10,000 (£7,540) to transition all their equipment.
The subsidies and rebates offered by some local governments may not be enough to offset the cost of the switch.
The change would be even harder for landscapers who work as sole proprietors, with a single vehicle and limited space for charging and storing equipment.
Added to that is the weight of tools with multiple batteries, and the cost of accessories to hold them all.
Nevertheless the biggest makers of power tools are investing in electric.
Stihl, a power tool manufacturer headquartered in Germany, aims for battery-powered equipment to make up 35% of its sales by next year, and 80% by 2035.
It's on track to meet the 2027 goal in Europe, though sales in the US have been slower.
To help reach its targets, the company opened its first plant solely manufacturing batteries and tools, in Romania in 2025.
"We like to say that we are dual-technology leaders," says Paul Hicks, senior marketing and product manager at Stihl GB.
"So we are being very open with our customers if in some cases a petrol tool may be a better solution for them… But in the large majority of cases, battery-power tools pay off fairly swiftly because of the cost of fuel."
In May, Stihl announced a new battery system that uses high-performance batteries.
These batteries use a relatively new, more efficient design for lithium battery cells, known as tabless cells.
Tabless cells have 60% more peak power than standard cells, according to Hicks. This means that the batteries charge faster, and landscapers can take fewer batteries out to sites.
The batteries are also relatively lightweight.
Mabe believes that overall, for gardeners embracing long-lasting electric equipment, "There's big rewards if they can make it work."
Back in southern California, landscaper Camarena sees the benefits of electric tools. "We don't contaminate the air," he says.
"When we use the gas blower, some people get mad. They are reading a book or something."
More Technology of Business
- Published12 June
- Published5 June
- Published9 June`,
    bodyJa: `造園の電動化はどのように進んでいるのか
- 公開されました
南カリフォルニアの 1 日のサウンドトラックの一部は、ガソリンを動力とするガーデニング機器のドローンです。
騒音は、全米各地の都市や国外でガソリンの造園道具を禁止したり、電気の代替品を奨励したりする主な理由の 1 つです。
これらの代替案には、炭素排出量、振動、造園業者の汚染への曝露を軽減するという追加の利点もあります。
さらに、住民が静かさを要求するときに使用できるため、労働時間が長くなる可能性があります。
今日、私は電動造園機器への移行を支援する組織であるAmerican Green Zone Alliance（AGZA）が実施するトレーニングに参加しています。
驚いたことに、私が背負っている電動バックパックリーフブロワーは、通常のリュックサックよりもそれほど重くありません。送風機を使って公園の周りでボールを集めるのはかなり直感的ですが、当然のことながら、私はプロの造園家よりもはるかに不器用で遅いです。
騒音に関しては、まだブーンという音がしますが、その音は高音で、おなじみのガソリンエンジンのマシンほど大きくはありません。
電力への移行により、園芸キット市場に新たな企業が参入しつつある。
米国の航空宇宙新興企業ウィスパー・エアロもそうした企業の1つだ。主な事業は航空機用電気推進システムです。
しかし、2022 年、新型コロナウイルス感染症のパンデミックにより多くの人が騒音に敏感になったことを受け、数年間の研究開発を経て、同社は航空宇宙グレードのファンがリーフブロワーでうまく機能することに気づきました。
「当社の技術は、現在存在する他の空気移動技術よりもクリーンで、より静かで、より効率的です」と Whisper Aero の空気管理ディレクターである Andrew Terajewicz 氏は述べています。 「そしてリーフブロワーはこれを完璧に組み合わせたものです。」
Whisper Aero のブロワーのバッテリーは、フルパワーで最大 50 分間持続します。
同社は消費者向けテクノロジーへの拡大に伴い、製造量を拡大する必要に迫られている。
Whisper Aero の手持ち式リーフブロワーのオンライン予約注文が今年開始されました。価格は電動リーフブロワーのハイエンドに相当し、従来のガソリンバージョンよりも高価であることがよくあります。
しかし、そのために平和を乱す可能性が低い機械を手に入れることができます。
AGZA を設立した元造園業者のダン・メイブ氏は、「非常に静かでありながらパワフルなので、脳は何が起こっているのかを理解するのが難しい」と語る。
Whisper Aero は、プロの造園業者により適したバックパック型リーフブロワーなど、製品のさらなる開発を目指しています。
このような技術革新があっても、特にプロの造園業者にとって、ガソリン駆動の機械がすぐに消えることはありません。
まず、ガソリン機械ははるかに強力であるため、作業が迅速になり、重機を持ち運ぶのに費やす時間が短縮されます。
Terajewicz氏によると、大型ガソリンバックパックブロワーは最大吹き出し力が約50ニュートンに達するという。
ハンドヘルドの Whisper Aero ブロワーは通常、その約半分の速度で動作しますが、それよりも高くなる場合もあります。
もう 1 つの大きな問題は実行時間です。プロの庭師はブロワーをフルスロットルで使用することを好みます。
「私たちにとって、電気を使うのは少し難しいんです」とカリフォルニアの造園会社の監督者であるカルロス・カマレナ氏は説明する。
カマレナさんの会社は、ガソリン工具を禁止する条例のある都市で、必要に応じて電動工具を使用している。しかし、選択肢がある場合、彼らはガソリンに固執します。
彼の会社では通常、約 30 分間持続するバッテリーを使用しています。乗組員は常に 6 つのバッテリーを充電しています。フル充電に達するまでにそれぞれ約 45 分かかります。
さらに、電気を導入するにはかなりの初期費用がかかります。ある造園業者は、すべての設備を移行するには約 10,000 ドル (7,540 ポンド) の費用がかかると見積もっています。
一部の地方自治体が提供する補助金やリベートでは、切り替えのコストを相殺するには十分ではない可能性があります。
個人事業主として働く造園業者にとって、この変化はさらに困難となるだろう。車両は 1 台で、機器の充電や保管のためのスペースも限られているからだ。
これに加えて、複数のバッテリーを搭載したツールの重量と、それらをすべて保持するためのアクセサリのコストがかかります。
それにもかかわらず、電動工具の最大手メーカーは電動化に投資している。
ドイツに本社を置く電動工具メーカーStihlは、来年までに売上高の35％をバッテリー駆動機器が占め、2035年までに80％を占めることを目指している。
欧州では2027年の目標達成に向けて順調に進んでいるが、米国での販売は鈍化している。
Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cpq3w3v19veo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-20T23:12:38+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/9a26/live/a80a27a0-754f-11f1-a627-714adb4eed6e.jpg",
    readTime: 6,
  },
  {
    id: "millennials-are-struggling-to-buy-a-home-3daed881",
    title: "Millennials are struggling to buy a home - but is it actually getting easier?",
    titleJa: "ミレニアル世代は住宅購入に苦労していますが、実際には住宅購入は容易になりつつあるのでしょうか?",
    summaryJa: "ミレニアル世代は住宅購入に苦労していますが、実際には住宅購入は容易になりつつあるのでしょうか?- 公開されました",
    bodyOriginal: `Millennials are struggling to buy a home - but is it actually getting easier?
- Published
Leaving education, getting a job, buying a home and perhaps starting a family: the path previous generations followed may seem a distant dream to many now.
But is it getting a bit easier - at least when it comes to getting on the housing ladder?
Today's prospective first-time buyers may well feel hard done by; they are still worse off than recent generations.
If you were born in the UK in the mid-1990s you've about a 25% chance of owning your own home, as this chart shows.
Twenty-somethings in the 1990s were almost twice as likely to be on the housing ladder, the previous generation even more so.
But before looking at the current picture, what's behind the longer term shift?
One issue is that property prices have outpaced incomes across many decades.
In the chart below, housing economist Paul Cheshire puts it starkly, comparing the rise in egg prices with house prices over the past 71 years.
Changes in the mortgage markets have contributed, but ultimately it's about a lack of housebuilding.
The government previously estimated that England alone needs another 300,000 dwellings per year to keep up with population change and our preference for living in smaller households.
But only 208,000 were added last year. We've not built close to 300,000 new homes in a year for at least three decades.
There are many reasons why, but inflation has been key - from the price of land, to builders' wages and bricks.
Our analysis shows that the cost of raw materials like timber, steel, plasterboard, concrete and insulation rose in line with general inflation from the 1990s until the Covid-19 pandemic, when they became harder to source.
That was compounded by the impact of the war in Ukraine, which drove up both the cost of energy - 15% in a single year - for making these materials and for use in construction itself. The war in Iran has pushed prices up further.
Even before the pandemic, more than one in five construction firms struggled with a lack of skilled staff, exacerbated by Brexit.
As a guide, a home that cost £150,000 to build in 2015 may cost £230,000 now - analysts say those costs could rise by another 15% in the next five years.
And that's before contending with planning. Strict regulations protect the environment and uphold safety standards but can add costs.
The rising - and increasingly unpredictable - cost of building, coupled with uncertain demand has put some housebuilders off.
As property prices have increased, the deposit needed to buy a house has reached tens of thousands.
The amount to get a 10% deposit varies sharply across the country.
Saving for a deposit becomes particularly hard if you're paying rent too. Private rents typically soak up a third of prospective buyers' incomes.
No surprise a larger number of young people are opting to live at home and pay far lower housing costs so they can save more.
But things may be turning a corner.
House prices have typically risen more slowly than wages in the last few years, making it easier to save - and some lenders will take a smaller deposit. Plus, lenders tend to be more willing to offer larger loans with longer repayment times.
And the slower growth of property prices and lower rates than a few years ago mean mortgage payments, relative to wages, are moving back towards the long-term average.
But ultimately, to make it as easy to get on the ladder as it was for previous generations, we need more homes.
There are moves afoot: Sir Keir Starmer's government introduced plans to streamline planning processes that can be chaotic and slow.
Reforms will also allow more homes to be built on the green belt - not something everyone agrees with.
But to really get things moving, we need to incentivise builders to commit with more confidence to building.
And whatever approach the government takes, the results will take years to come through.`,
    bodyJa: `ミレニアル世代は住宅購入に苦労していますが、実際には住宅購入は容易になりつつあるのでしょうか?
- 公開されました
教育をやめ、仕事に就き、家を購入し、おそらくは家族を築くなど、前の世代がたどった道は、今では多くの人にとって遠い夢のように見えるかもしれません。
しかし、少なくとも住居のはしごに乗るときは、少しは楽になったでしょうか？
今日、初めて購入を検討している人は、次のような理由で大変だと感じるかもしれません。彼らは最近の世代よりもまだ貧しい状況にあります。
このグラフが示すように、1990 年代半ばにイギリスで生まれた場合、自分の家を所有できる確率は約 25% です。
1990年代の20代は住宅のはしごに上がる確率がほぼ2倍で、前の世代はさらに高かった。
しかし、現在の状況を見る前に、長期的な変化の背後にあるものは何でしょうか?
問題の1つは、何十年にもわたって不動産価格が収入を上回っていることだ。
以下のグラフでは、住宅経済学者のポール・チェシャーが、過去71年間の卵価格の上昇と住宅価格を比較して、それを率直に述べている。
住宅ローン市場の変化も寄与しているが、最終的には住宅建設の不足が原因だ。
政府は以前、人口の変化と少人数の世帯での居住を求める国民の好みに対応するには、イングランドだけでも年間さらに 30 万戸の住宅が必要であると推定しました。
しかし、昨年増加したのはわずか20万8,000人だった。私たちは少なくとも30年間、年間30万戸近くの新しい住宅を建てていません。
理由はたくさんありますが、土地の価格から建設業者の賃金やレンガに至るまで、インフレが鍵となっています。
私たちの分析によると、木材、鉄鋼、石膏ボード、コンクリート、断熱材などの原材料の価格は、1990年代から新型コロナウイルス感染症のパンデミックまでの一般的なインフレに伴って上昇し、調達が困難になったことが示されています。
ウクライナ戦争の影響により、これらの材料の製造と建設自体に使用するエネルギーのコストが 1 年間で 15% 上昇したため、この状況はさらに悪化しました。イラン戦争により価格はさらに上昇した。
パンデミック以前でさえ、建設会社の5社に1社以上が熟練スタッフの不足に悩まされており、EU離脱によりさらに悪化した。
目安として、2015 年に建設に 15 万ポンドかかった住宅の価格は現在 23 万ポンドになる可能性があります。アナリストらは、これらのコストは今後 5 年間でさらに 15% 上昇する可能性があると述べています。
それは計画と戦う前の話です。厳格な規制は環境を保護し、安全基準を維持しますが、コストが増加する可能性があります。
建設コストの上昇とますます予測不可能さが不確実な需要と相まって、一部の住宅建設業者を敬遠させている。
不動産価格の上昇に伴い、住宅を購入するために必要な頭金は数万ドルに達しています。
10% のデポジットを受け取る金額は国によって大きく異なります。
家賃も払っている場合、頭金を貯めるのは特に難しくなります。民間賃貸料は通常、購入希望者の収入の 3 分の 1 を吸い取ってしまいます。
より多くの若者が、より多くの貯蓄をするために、自宅に住み、はるかに低い住宅費を支払うことを選択しているのも不思議ではありません。
しかし、事態は曲がり角を迎えているかもしれない。
ここ数年、住宅価格は通常、賃金よりもゆっくりと上昇しているため、貯蓄が容易になっており、一部の貸し手は頭金を少額で受け取ることになる。さらに、貸し手は返済期間が長くても大規模なローンを提供する傾向があります。
そして、数年前に比べて不動産価格の伸びが鈍化し、金利が低下していることは、賃金に比べて住宅ローンの支払額が長期平均に近づきつつあることを意味している。
しかし最終的には、前の世代と同じように簡単にはしごに乗るためには、より多くの家が必要です。
キーア・スターマー卿の政府は、混沌として時間のかかる計画プロセスを合理化する計画を導入しました。
改革により、緑地帯にさらに多くの住宅を建てることも可能になるが、誰もが同意するものではない。
しかし、本当に物事を進めるためには、建設業者がより自信を持って建設に取り組むよう奨励する必要があります。
そして政府がどのようなアプローチをとろうとも、結果が出るまでには何年もかかるだろう。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cgewlld498xo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-20T23:10:58+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/a4a7/live/1acdc570-9cb6-11f1-b109-879e35c24276.png",
    readTime: 5,
  },
  {
    id: "stifling-heat-and-broken-toilets-tui-riv-a3d005a4",
    title: "Stifling heat and broken toilets: TUI River Cruise passengers tell of their holiday hell",
    titleJa: "息苦しい暑さと壊れたトイレ：TUI リバー クルーズの乗客が語る地獄の休日",
    summaryJa: "息苦しい暑さと壊れたトイレ：TUI リバー クルーズの乗客が語る地獄の休日- 公開されました",
    bodyOriginal: `Stifling heat and broken toilets: TUI River Cruise passengers tell of their holiday hell
- Published
Dozens of people have accused TUI River Cruises of operating vessels with faulty facilities including persistently broken air conditioning, after they spent thousands of pounds on holidays.
Earlier this year passengers on the Skyla, a ship operated by TUI, contacted BBC Your Voice to say they had been stranded in Budapest during a heatwave with little to no air conditioning.
Following that report more people got in touch to say they faced similar problems on both the Skyla and its sister vessel, the Isla. They criticised TUI's customer service and said the refunds offered were inadequate.
TUI apologised to customers where trips "fell short of the standards we aim to deliver".
A spokesperson for TUI, said: "We understand the disappointment and frustration caused to affected customers."
Passengers described stifling conditions as well as problems with plumbing after paying thousands of pounds for European cruises, including on the Danube River.
Andy Peach and his wife booked a seven-day trip on the Skyla in June, travelling through Budapest, Vienna and Linz.
It turned out to be "the worst TUI holiday we've ever been on", he said.
Instead of air conditioning, Peach said there were "big blowers" on board, expelling hot air.
"One was in the middle of the corridor, blocking the exit," he said. "It didn't seem to cool the place down."
Temperatures onboard climbed as the holiday went on leaving him "exhausted", he said. By the end of the week, Peach said the air conditioning in cabins had broken too.
On the second-to-last day passengers were transferred to hotels, which Peach said were "really basic".
He and his wife had paid nearly £4,000 for the holiday but they were offered only £300 as a refund and given 72-hours to accept it.
He said: "TUI know there's problems on these boats, but continue to sell them to people as a full luxury cruise."
During the time Peach was on the Skyla, Joan Craven came across complaints on social media.
She was due to take the ship's next sailing from Budapest a few days later and was worried.
TUI's customer services assured her by email that the air conditioning on board was working. When she arrived, however, a holiday rep told her it was not. Craven told the BBC she felt misled.
Some people had described issues with air conditioning as well as problems with the water supply on the same vessel in May.
Meanwhile, complaints about the Isla go back even further.
'A tropical house at a zoo'
Wendy Charnley and her husband Rob had "pushed the boat out" to celebrate his retirement by booking a cruise on the Isla in April 2025 departing from Amsterdam.
It was like "being in a tropical house at a zoo" Charnley said, with no sign of air conditioning.
"Some areas were really, really hot." she said. "There wasn't really anywhere that you could go that you could cool down."
A couple of months later, Kevin Darvill boarded the ship in Frankfurt.
He immediately noticed the toilet didn't work in the reception area. Portable fans and air conditioning units were also visible.
Darvill said the ship became "really hot" with "no respite".
"It was intolerable because there was literally no air circulation," he said. "The worst places were the restaurants."
He struggled to sleep. Meanwhile, his shower alternated between freezing cold and "scalding hot".
He said passengers were initially offered a 15% refund due to the air conditioning problems, which was increased to 40% when the cruise was cut short on the penultimate day.
But he thinks the holiday should not have gone ahead in the first place.
"Had I known that the air conditioning wasn't working, having gone on river cruises before, I wouldn't have gone," he said.
Problems with the Isla have continued this year.
John Welsh, who boarded in June, said some toilets were out-of-order and also reported issues with air conditioning.
"The whole ship was a sweat box," he said, with some passengers in cabins that had no windows resorting to sleeping on the ship's roof.
Welsh said staff were "soaking to the skin with sweat working in the restaurant", and he also needed to change his sweat-soaked clothes after eating there.
He said he felt "fobbed off" when he complained to the cruise director. He accepted TUI's offer of a £140 per person refund for the problems with the air conditioning but said he would never travel with the company again.
'Indefensible'
By July, low river levels due to the heatwave were severely affecting European cruises.
Tony Harper was informed a few days before his trip began on 20 July there would be some coach travel in place of sailing.
But issues with the ship itself also stood out.
"The common area smelt of sewage, there was water dripping through the ceiling and there were public toilets out of action for the whole voyage," he said.
And there were portable air conditioning units onboard, which he said were not effective.
Harper said: "You can't hold it against them for the low river, that's just nature.
"But it was the way they dealt with that. It was their communication and poor maintenance of the ships, and you can't put it down to anything else other than that.
"It's indefensible, really."
TUI River Cruises said it had experienced "unexpected technical issues affecting air conditioning systems" as well as other challenges caused by low water levels on the Danube.
It said extreme heat across parts of Europe had put systems under pressure and extensive repairs and maintenance work had been undertaken, including temporary measures.
The company added that it was investing in its air conditioning systems across its European river cruise fleet this winter, including significant upgrades.`,
    bodyJa: `息苦しい暑さと壊れたトイレ：TUI リバー クルーズの乗客が語る地獄の休日
- 公開されました
休日に数千ポンドを費やしたTUIリバークルーズは、エアコンが壊れ続けるなど欠陥のある設備で船を運航しているとして、数十人が非難している。
今年初め、TUIが運航するスカイラ号の乗客がBBC Your Voiceに連絡し、熱波で空調がほとんどない中、ブダペストで足止めされていると話した。
この報告を受けて、スカイラ号とその姉妹船であるアイラ号の両方で同様の問題に直面しているとの連絡がさらに多く寄せられました。彼らはTUIの顧客サービスを批判し、提供された返金は不十分だと述べた。
TUIは、旅行が「当社が提供しようとしている基準を満たしていない」顧客に謝罪した。
TUIの広報担当者は「影響を受けた顧客に失望と不満を与えていることは理解している」と述べた。
乗客らは、ドナウ川を含むヨーロッパのクルーズに数千ポンドを支払った後の息苦しい状況や配管の問題を語った。
アンディ・ピーチと妻は6月にスカイラでブダペスト、ウィーン、リンツを巡る7日間の旅行を予約した。
それは「これまでで最悪のTUI休暇」になった、と彼は語った。
ピーチ社は、機内にはエアコンの代わりに熱気を排出する「大型送風機」があったと述べた。
「1人は廊下の真ん中にいて、出口を塞いでいた」と彼は語った。 「場が冷める様子はなかった。」
休暇が続くにつれて船内の気温が上昇し、「疲れ果てた」と彼は語った。ピーチ社は、週末までに客室のエアコンも故障したと述べた。
最後から2日目には乗客はホテルに移送されたが、ピーチ社は「本当に基本的なものだった」と述べた。
彼と彼の妻は休暇のために4,000ポンド近くを支払ったが、払い戻しとして提示されたのは300ポンドのみで、それを受け入れるまで72時間与えられた。
同氏は、「TUIはこれらの船に問題があることを承知しているが、完全な豪華クルーズとして人々に販売し続けている」と述べた。
ピーチがスカイラに乗っていた間、ジョーン・クレイブンさんはソーシャルメディアで苦情を目にした。
彼女は数日後にブダペストから次の船に乗る予定だったが、心配していた。
TUI の顧客サービスは、船内の空調が作動していることを電子メールで彼女に保証しました。しかし、彼女が到着すると、ホリデー担当者はそうではないと彼女に言いました。クレイブンさんはBBCに対し、誤解されていると感じたと語った。
5月には同じ船で給水の問題だけでなく空調の問題も報告した人もいた。
一方、イスラに関する苦情はさらに遡ります。
「動物園のトロピカルハウス」
ウェンディ・チャーンリーさんと夫のロブさんは、2025年4月にアムステルダム発のイスラ島クルーズを予約し、引退を祝うために「船を押し出して」いた。
チャーンリー氏は、エアコンの気配もなく「動物園のトロピカルハウスにいるような気分だった」と語った。
「一部の地域は本当にとても暑かったです。」彼女は言いました。 「クールダウンできる場所は本当にどこにもありませんでした。」
数か月後、ケビン・ダーヴィルはフランクフルトで船に乗り込みました。
彼はすぐに、受付エリアのトイレが機能しないことに気づきました。携帯扇風機やエアコンも展示されていました。
ダービル氏は、船内は「非常に熱く」なり、「休む間もない」と語った。
「文字通り空気の循環がなかったため、耐えられなかった」と彼は語った。 「最悪の場所はレストランでした。」
彼はなかなか眠れなかった。その間、彼のシャワーは凍てつくような冷たさと「灼熱の熱さ」を交互に繰り返した。
同氏によると、乗客には当初、空調設備の問題を理由に15％の払い戻しが提供されたが、最後から2番目の日にクルーズが中止されたため、払い戻し額は40％に増額されたという。
しかし彼は、そもそも休暇を前倒しすべきではなかったと考えている。
「以前にリバークルーズに行ったことがあるので、エアコンが効かないと知っていたら、行かなかったでしょう」と彼は言う。
イスラ島の問題は今年も続いている。
6月に乗船したジョン・ウェルシュさんは、一部のトイレが故障しており、空調にも問題があると報告した。
「船全体が汗だくのような状態だった」と同氏は述べ、窓のない船室の乗客の中には船の屋根で寝る人もいたという。
ウェールズさんは、スタッフが「レストランで働いていると汗で皮膚がびしょ濡れ」になっており、食事後には汗で濡れた服を着替える必要もあったと語った。
クルーズディレクターに苦情を言ったとき、彼は「がっかりした」と感じたと語った。同氏は、空調の問題に対する一人当たり140ポンドの返金というTUIの申し出を受け入れたが、同社とは二度と旅行しないと述べた。
「弁護できない」
7月までに、熱波による川の水位低下はヨーロッパのクルーズに深刻な影響を及ぼした。
トニー・ハーパーは、7月20日に旅行が始まる数日前に、セーリングの代わりにバスでの移動が予定されていると知らされた。
しかし、船自体の問題も目立った。
「共用エリアは下水の臭いがし、天井からは水が滴り落ち、航海中ずっと公衆トイレは使用できなかった」と同氏は語った。
また、船内には移動式の空調装置があったが、効果がなかったという。
ハーパーさんは「川が低いからといって彼らに抵抗することはできない。それが自然だ。
「しかし、それが彼らの対処方法だった。原因は彼らのコミュニケーションと船の整備不良であり、それ以外の原因にすることはできません。
「それは本当に、弁護の余地のないことです。」
TUIリバークルーズは、「空調システムに影響を及ぼす予期せぬ技術的問題」や、ドナウ川の水位低下によって引き起こされるその他の問題を経験したと述べた。
同報告書は、欧州各地で猛暑によりシステムに圧力がかかり、一時的な措置を含む大規模な修理・保守作業が行われたと述べた。
同社は、この冬、ヨーロッパのリバークルーズ船団全体の空調システムに大幅なアップグレードを含めて投資していると付け加えた。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cy07exrz5lpo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-20T22:59:35+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/48ad/live/65eaf140-9cac-11f1-b366-155f83b9d1f8.jpg",
    readTime: 6,
  },
  {
    id: "our-4-year-old-son-has-100-000-in-his-52-cbd908a1",
    title: "Our 4-year-old son has $100,000 in his 529 account. Is a bull market a bad time to buy him stocks instead?",
    titleJa: "私たちの 4 歳の息子は、529 口座に 100,000 ドルを持っています。強気相場は株を買うのに悪い時期なのでしょうか?",
    summaryJa: "「息子が学生ローンを借りずに大学に通えるようになれば嬉しいです。」",
    bodyOriginal: `“I’d love for our son to be able to attend college without needing to take out student loans.”`,
    bodyJa: `「息子が学生ローンを借りずに大学に通えるようになれば嬉しいです。」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/our-4-year-old-son-has-100-000-in-his-529-account-should-we-buy-him-stocks-instead-3ca745b2?mod=mw_rss_topstories",
    publishedAt: "2026-08-20T22:00:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-94025750",
    readTime: 2,
  },
  {
    id: "warsh-faces-fed-independence-test-as-bes-60b14da0",
    title: "Warsh faces Fed independence test as Bessent moves in on central bank's turf",
    titleJa: "ベッセント氏が中央銀行の縄張りに乗り出す中、ウォーシュ氏はFRBの独立性テストに直面している",
    summaryJa: "長期国債利回りを抑制しようとするベッセント氏の取り組みにより、ウォーシュ氏は債券とバランスシートに関してFRBがどこまで協調すべきなのか明確にするよう迫られる可能性がある。",
    bodyOriginal: `If Treasury Secretary Scott Bessent truly wants to bring the full force of the federal government to bear on what he sees as a misbehaving bond market, he can't go it alone. A sustained effort to bring down Treasury yields would eventually require coordination with Bessent's longtime friend, now at the Federal Reserve, Chairman Kevin Warsh.
Bessent's efforts to influence the bond market will add to the immense scrutiny on Warsh to clarify where he stands on the Fed's independence and on its attitude about the vast pool of U.S. government debt.
The Fed has historically only intervened in the bond market to affect yields in periods of severe economic weakness or clear emergencies. The concerns Bessent has expressed so far fall below that threshold, and there is no sign the central bank intends to get involved now. But there is no definitive line between where Treasury's responsibilities end and the Fed's begin, and Warsh has said repeatedly that he believes the Fed ought to hand more power to the Treasury over sensitive matters involving the Fed's balance sheet.
The Treasury Department on Wednesday announced it would at least double the maximum size of its planned long-dated treasury buybacks, from $2 billion to at least $4 billion per operation. That would need to be offset by shorter-maturity debt.
Bessent suggested he might have more plans in store. "We have a big toolkit, so we'll see," Bessent said on CNBC Thursday.
"Part of it is signaling here and to show that we believe that the yields don't reflect the underlying fundamentals," Bessent said. Yields on the 10-year Treasury note dropped on Wednesday, but had already unwound most of those gains on Thursday.
"There's more firepower in terms of how you manage the yield curve sitting at the Federal Reserve," Rick Rieder, chief investment officer of global fixed income, told CNBC Wednesday.
"Going to Jackson Hole, that's going to be interesting to see how they address that," Rieder said.
Warsh was already facing questions about his relationship to the Treasury market going into the Jackson Hole Economic Policy Symposium, the annual late-August gathering of central bankers in the Wyoming mountains.
Warsh's remarks after the FOMC's July meeting gave some in the markets the impression that he welcomed a rise in long-term bond yields.
Bond traders raised yields further to account for that uncertainty, said Loretta Mester, former president of the Cleveland Fed.
"I think part of what's happening is we don't have very much clarity yet on what Kevin Warsh's plans are," Mester said in an interview on CNBC. "We don't even have clarity on their reaction function."
Warsh in July said he was concerned about inflation, but didn't directly answer reporters' questions about what it would take for him to raise interest rates to address it.
Fed independence
Warsh has also been vague on the precise limits of the Fed's authority over certain aspects of the financial system.
"Fed independence is at its peak in the conduct of monetary policy," Warsh said at his Senate confirmation hearing in April. That nuanced view implies that some aspects of the Fed's operations aren't fully independent. Warsh carved out bank supervision as an example of non-independent policy, but he hasn't fully specified exactly what is and isn't included.
Warsh has separately said he wants the Fed to rewrite its relationship with the Treasury. He proposed in 2025 to update the 1951 Treasury-Fed Accord, which established the modern basis for the division of responsibilities between the two agencies — and secured the Fed's political independence. As part of that revised accord, Warsh wanted to give the Treasury more authority over any major adjustment to the Fed's vast balance sheet.
"The Treasury secretary would need to find the proposed change in Fed holdings acceptable, given that it is partially fiscal policy in disguise," Warsh said in 2025.
How the Fed thinks about the $6.7 trillion in financial assets currently on its balance sheet could make or break Bessent's plans. Warsh's existing plans would seem to cut against Bessent's hopes to tamp down yields. Warsh wants the Fed to reduce its overall holdings and shift them toward short-term debt, which would likely push up the yield on longer-term Treasuries — the opposite of what Bessent wants to achieve.
But the Fed is divided even on that question. Recently released minutes from the Federal Open Market Committee's July meeting showed that the Fed deferred questions about its balance sheet until a task force Warsh has assigned to report on that issue comes back. That will be late this year or early next.
The Treasury and Fed have in practice historically communicated with each other on major changes in the balance sheet. Bessent on Thursday in an interview on CNBC suggested that would continue.
"I think that the Treasury and the Fed would work together if there was any change in the balance sheet, and we would adjust to any kind of runoff that they're doing," Bessent said.
Neither the Fed nor the Treasury Department responded to emailed questions about whether Bessent's comment implied he and Warsh had begun to coordinate.`,
    bodyJa: `スコット・ベッセント財務長官が、不正行為を行っていると見なす債券市場に連邦政府の総力をあげて対処したいと本当に望んでいるのであれば、彼一人で行動することはできない。国債利回りを引き下げるための持続的な取り組みには、最終的にはベッセント氏の長年の友人で現在は連邦準備制度理事会に勤務するケビン・ウォーシュ議長との調整が必要となるだろう。
債券市場に影響を与えようとするベッセント氏の取り組みは、FRBの独立性と巨額の米政府債務に対する同氏の立場を明らかにするため、ウォーシュ氏に対する厳しい監視をさらに強めることになるだろう。
FRBはこれまで、深刻な景気低迷時や明らかな緊急事態の際にのみ、利回りに影響を与える目的で債券市場に介入してきた。ベッセント氏がこれまでに表明した懸念はその基準を下回っており、中銀が現時点で関与するつもりの兆候はない。しかし、財務省の責任がどこで終わり、FRBの責任が始まるのかの間に明確な境界線はなく、ウォーシュ氏はこれまで、FRBのバランスシートに関わるデリケートな問題について、FRBは財務省により多くの権限を委譲すべきだとの考えを繰り返し述べてきた。
財務省は水曜日、計画されている長期にわたる国債買い取りの最大規模を、オペ当たりの20億ドルから少なくとも40億ドルに少なくとも2倍にすると発表した。この分は満期の短い債務で相殺する必要がある。
ベッセント氏は、さらなる計画があるかもしれないと示唆した。 「我々には大きなツールキットがあるので、様子を見てみよう」とベッセント氏は木曜CNBCで語った。
ベッセント氏は「その一部はここでのシグナルであり、利回りが基礎的なファンダメンタルズを反映していないと我々が信じていることを示すためだ」と述べた。 １０年米国債利回りは水曜日に低下したが、木曜日にはすでに上昇分の大部分が解消されていた。
グローバル債券部門の最高投資責任者であるリック・リーダー氏は水曜日、CNBCに対し、「連邦準備制度理事会がイールドカーブを管理する方法に関して、より強力な力がある」と語った。
「ジャクソンホールに行くことになるが、彼らがそれにどのように対処するかを見るのは興味深いことになるだろう」とリーダー氏は語った。
ウォーシュ氏は、毎年8月下旬にワイオミング山脈で中央銀行関係者が集まるジャクソンホール経済政策シンポジウムに向けて、すでに米国債市場との関係についての疑問に直面していた。
７月のＦＯＭＣ後のウォーシュ総裁の発言は、市場の一部に同氏が長期債利回りの上昇を歓迎しているという印象を与えた。
クリーブランド連銀の元総裁ロレッタ・メスター氏は、債券トレーダーらはこうした不確実性を考慮して利回りをさらに引き上げたと述べた。
メスター氏はCNBCのインタビューで、「ケビン・ウォーシュ氏の計画が何なのかまだあまり明確になっていないことが、起こっていることの一部だと思う」と語った。 「それらの反応機能さえ明確になっていません。」
ウォーシュ総裁は７月、インフレを懸念していると述べたが、それに対処するために利上げに何が必要かという記者の質問には直接答えなかった。
FRBの独立性
ウォーシュ氏はまた、金融システムの特定の側面に対するFRBの権限の正確な限界についても曖昧だった。
ウォーシュ氏は4月の上院承認公聴会で「金融政策運営においてFRBの独立性は最高潮に達している」と述べた。この微妙な見方は、FRBの運営の一部の側面が完全に独立していないことを示唆している。ウォーシュ氏は非独立政策の一例として銀行監督を取り上げたが、何が含まれ、何が含まれないのかについては完全には明らかにしていない。
ウォーシュ氏はこれとは別に、FRBに財務省との関係を書き直すことを望んでいると述べた。同氏は2025年に1951年の財務・連銀合意を更新することを提案し、これにより両機関間の責任分担の現代的基礎が確立され、FRBの政治的独立性が確保された。この修正合意の一環として、ウォーシュ氏はFRBの膨大なバランスシートの大幅な調整に関して財務省により多くの権限を与えることを望んでいた。
ウォーシュ氏は２０２５年について「部分的に偽装された財政政策であることを考慮すると、財務長官はＦＲＢ保有額の変更案が受け入れられると判断する必要があるだろう」と述べた。
FRBが現在バランスシート上にある6兆7000億ドルの金融資産をどのように考えるかによって、ベッセント氏の計画が成否を分ける可能性がある。ウォーシュ氏の既存の計画は、利回りを抑制したいというベッセント氏の期待に反するものとみられる。ウォーシュ氏はFRBが保有資産全体を減らして短期国債に振り向けることを望んでおり、そうなれば長期国債の利回りが上昇する可能性が高く、ベッセント氏が達成したいこととは逆だ。
しかし、この問題に関してもFRBの意見は分かれている。最近公表された7月の連邦公開市場委員会議事録によると、FRBはバランスシートに関する質問を、ウォーシュ氏がこの問題について報告するよう割り当てたタスクフォースが戻ってくるまで延期したことが明らかになった。それは今年の終わりか来年の初めになるだろう。
財務省とFRBは歴史的に、バランスシートの大きな変更に関して実際に相互に意思疎通を行ってきた。ベッセント氏は木曜日、CNBCのインタビューで、それが継続することを示唆した。
ベッセント氏は「バランスシートに何らかの変化があれば財務省とFRBは協力すると思うし、彼らが行っているいかなる種類の流出にも対応するだろう」と述べた。
FRBも財務省も、ベッセント氏のコメントが同氏とウォーシュ氏が調整を始めたことを示唆しているかどうかという電子メールでの質問には回答しなかった。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/20/bessent-warsh-fed-bond-market-treasury-yields.html",
    publishedAt: "2026-08-20T21:53:44+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 6,
  },
  {
    id: "anxious-bond-market-sends-troubling-mess-16b5bc0b",
    title: "Anxious bond market sends troubling message to investors: There’s no easy fix for U.S. debt",
    titleJa: "不安な債券市場が投資家に憂慮すべきメッセージを送る：米国の債務を簡単に解決することはできない",
    summaryJa: "市場を落ち着かせるというスコット・ベッセント財務長官の計画はうまく機能していない。",
    bodyOriginal: `Treasury Secretary Scott Bessent’s plan to calm markets is being short-circuited.`,
    bodyJa: `市場を落ち着かせるというスコット・ベッセント財務長官の計画はうまく機能していない。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/treasury-rout-restarts-one-day-after-bessents-beefed-up-buyback-plan-972766a1?mod=mw_rss_topstories",
    publishedAt: "2026-08-20T19:40:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-86558017",
    readTime: 2,
  },
  {
    id: "sports-betting-to-build-wealth-is-becomi-864bd04b",
    title: "Sports betting to build wealth is becoming the new American dream",
    titleJa: "富を築くためのスポーツ賭博は新たなアメリカンドリームになりつつある",
    summaryJa: "30歳未満の人が住宅購入や学生ローンの支払いの近道としてギャンブルを利用する人が増えている",
    bodyOriginal: `More people under 30 are using gambling as a shortcut to buying a home or paying student loans`,
    bodyJa: `30歳未満の人が住宅購入や学生ローンの支払いの近道としてギャンブルを利用する人が増えている`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/sports-betting-to-build-wealth-is-becoming-the-new-american-dream-1e29b728?mod=mw_rss_topstories",
    publishedAt: "2026-08-20T19:14:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-56677379",
    readTime: 2,
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
