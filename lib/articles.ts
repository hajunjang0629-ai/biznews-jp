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
    id: "easyjet-agrees-to-surprise-takeover-bid-0835e377",
    title: "EasyJet agrees to surprise takeover bid as rival US firm swoops in",
    titleJa: "イージージェット、ライバル米国企業の急襲を受けてサプライズ買収案に合意",
    summaryJa: "イージージェット、ライバル米国企業の急襲を受けてサプライズ買収案に合意- 公開されました",
    bodyOriginal: `EasyJet agrees to surprise takeover bid as rival US firm swoops in
- Published
No-frills airline EasyJet says it has agreed in principle to a £5.7bn takeover proposal from US firm Apollo Global Management - just days after accepting an offer from a rival suitor.
The carrier said Apollo's offer delivered "a superior outcome" to investors than the previous bid from US investment firm Castlelake that EasyJet had also agreed to in principle at the weekend.
EasyJet is one of Europe's largest airlines. It employs more than 19,000 people, and flies around 1,200 routes across 35 European countries.
It was founded by Sir Stelios Haji-Ioannou in 1995 to offer cheap air fares to Europe and, together with other carriers such as Ryanair, has transformed UK air travel.
Its first flights took off in November 1995 flying from Luton to Glasgow and Edinburgh, with its first international flights the following year.
Sir Stelios and the Haji-Ioannou family still own about a 15% stake in the airline.
EasyJet said Apollo's offer was worth £7.15 per share, compared with the £6.90 per share proposal from Castlelake which it said it was now "no longer minded" to accept. Castlelake declined to comment on the latest move.
Analysts say EasyJet is an attractive target as it is profitable, has a large fleet of aircraft, and has take-off and landing slots at major airports such as Gatwick and Paris Charles de Gaulle. The most popular slots can be worth tens of millions of pounds when traded between airlines.
Business as usual for passengers right now
Susannah Streeter, chief investment strategist at Wealth Club, said Apollo was focusing on EasyJet's potential.
"While the carrier has been buffeted recently by higher fuel costs and geopolitical turbulence, it has built a resilient European network, a strong balance sheet and, crucially, a fast-growing holidays business. That's likely to be one of Apollo's biggest attractions."
"Package holidays generate higher margins and more predictable revenues than airline tickets alone," she added.
"For passengers, it's very much business as usual for now, with flights, bookings and loyalty schemes unaffected while any deal works its way through the regulatory process."
The latest statement from EasyJet does not mean a deal has been confirmed. Apollo has been set a deadline of 17:00 on 7 August to either make a firm bid for EasyJet or walk away. Castlelake's deadline to make a firm offer is 3 August.
Apollo's move came after Castlelake had made a series of offers for EasyJet, which had initially been rebuffed by the carrier after it accused the US firm of trying to buy it "on the cheap".
However, on Sunday, EasyJet said it had reached an agreement in principle with Castlelake, a US investment firm, over a potential takeover offer worth around £5.2bn.
One significant regulatory hurdle to any EasyJet takeover is that European Union regulations stipulate the carrier must be majority-owned by EU citizens.
Castlelake had proposed going into partnership with two EU nationals, businessmen Peter Bellew and Mark Breen. They would own an EU-based company that would have majority control of the airline.
Apollo said it will take "all necessary steps" to meet any EU conditions surrounding the deal.
Shares in EasyJet jumped nearly 15% on Friday to stand at around 673p.
EasyJet said the offer from Apollo represented an 81% increase from its share price of £3.94 on 28 May, the last day of trading before the takeover interest from Castlelake was made public.
Until EasyJet reached agreement with Castlelake, it had accused the US firm of being "highly opportunistic" with its bids, the first of which was at 560p a share, arguing that its share price had been "temporarily depressed" partly due to the impact of Iran war on the travel sector.
"The bidding war now comes down to price," said Dan Coatsworth, head of markets at AJ Bell.
"The spotlight now turns back to the original suitor [Castlelake] to see if it will dig even deeper to beat Apollo. Shareholders will be putting their feet up and enjoying the ride."
Related topics
- Published4 days ago
- Published10 November 2025`,
    bodyJa: `イージージェット、ライバル米国企業の急襲を受けてサプライズ買収案に合意
- 公開されました
飾り気のない航空会社イージージェットは、ライバルの求婚者からの提案を受け入れてからわずか数日後に、米国企業アポロ・グローバル・マネジメントからの57億ポンドの買収提案に原則合意したと発表した。
同航空は、アポロの提案は、イージージェットも週末に大筋合意した米国の投資会社キャッスルレイクによる前回の入札よりも投資家に「優れた結果」をもたらしたと述べた。
EasyJet はヨーロッパ最大の航空会社の 1 つです。従業員は 19,000 名を超え、ヨーロッパ 35 か国の約 1,200 路線を運航しています。
1995 年にステリオス・ハジ・イオアノウ卿によってヨーロッパへの格安航空運賃を提供するために設立され、ライアンエアーなどの他の航空会社と協力して英国の航空旅行を変革しました。
1995 年 11 月にルートンからグラスゴーとエディンバラへの最初のフライトが離陸し、翌年には最初の国際線が開設されました。
ステリオス卿とハジ・イオアノウ家は今でも航空会社の株式の約15％を所有している。
イージージェットは、アポロの提案は一株当たり7.15ポンドの価値があると述べたが、キャッスルレイクからの提案は1株当たり6.90ポンドであり、現時点では「もはや受け入れる気はない」としている。キャッスルレイク氏は最新の動きについてコメントを控えた。
アナリストらは、イージージェットは収益性が高く、多数の航空機を保有し、ガトウィック空港やパリ・シャルル・ド・ゴール空港などの主要空港に離着陸枠を持っているため、魅力的な標的であるとしている。最も人気のあるスロットは、航空会社間で取引されると数千万ポンドの価値がある場合があります。
現在、乗客は通常通り営業しています
ウェルス・クラブの首席投資ストラテジスト、スザンナ・ストリーター氏は、アポロはイージージェットの可能性に注目していると述べた。
「この航空会社は最近、燃料費の高騰と地政学的な混乱によって打撃を受けているが、回復力のあるヨーロッパのネットワーク、強固なバランスシート、そして重要なことに、急速に成長しているホリデー事業を構築している。それがアポロの最大の魅力の一つだろう。」
「パッケージ旅行は航空券単体よりも高い利益率と予測可能な収益を生み出します」と彼女は付け加えた。
「乗客にとっては、現時点では通常通りの業務であり、航空券、予約、ロイヤルティ制度は影響を受けず、契約は規制手続きを経ている。」
イージージェットの最新の声明は、契約が確認されたことを意味するものではない。アポロ社には、イージージェットにしっかりと入札するか撤退するかの期限が8月7日17時に設定されている。キャッスルレイクが確約を提示する期限は8月3日である。
アポロ社の動きは、キャッスルレイク社がイージージェット社に一連のオファーを出していた後に行われたが、同社は同社がイージージェット社を「安く」買収しようとしていると非難し、当初は断られていた。
しかしイージージェットは日曜日、約52億ポンド相当の買収提案の可能性について米投資会社キャッスルレイクと大筋合意に達したと発表した。
イージージェット買収に対する大きな規制上のハードルの 1 つは、欧州連合の規制により、航空会社は EU 国民によって過半数を所有されなければならないと規定されていることです。
キャッスルレイク氏は、実業家のピーター・ベリュー氏とマーク・ブリーン氏という2人のEU国民と提携することを提案していた。彼らはEUに本拠を置く会社を所有し、その会社が航空会社の過半数を支配することになる。
アポロは、この合意を巡るEUの条件を満たすために「必要なあらゆる措置を講じる」と述べた。
イージージェットの株価は金曜日に15％近く上昇し、約673ペンスとなった。
イージージェットは、アポロからの提案は、キャッスルレイクからの買収権益が公表される前の取引最終日である５月２８日の株価３．９４ポンドから８１％上昇したと述べた。
イージージェット社はキャッスルレイク社と合意に達するまで、同社の入札は「極めて日和見主義的」であり、最初の入札額は1株当たり560ペンスであったと非難し、同社の株価は旅行セクターに対するイラン戦争の影響もあり「一時的に下落」したと主張していた。
ＡＪベルの市場責任者、ダン・コーツワース氏は「入札合戦は今や価格次第だ」と述べた。
「現在、スポットライトは最初の求婚者（キャッスルレイク）に戻り、アポロを倒すためにさらに深く掘り下げるかどうかが確認されています。株主は脚を上げて乗り心地を楽しむでしょう。」
関連トピック
- 4 日前に公開
- 2025 年 11 月 10 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cgjxqq9jg8yo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-10T09:38:07+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/18e4/live/9e552290-7c30-11f1-b3bb-a3d4161295ad.jpg",
    readTime: 5,
  },
  {
    id: "world-oil-demand-set-for-first-annual-de-d00d5b6b",
    title: "World oil demand set for first annual decline since 2020, IEA says",
    titleJa: "世界の石油需要、2020年以来初の年間減少に見込まれるとIEAが発表",
    summaryJa: "国際エネルギー機関（IEA）は金曜日、イラン戦争が中東の生産と輸出に大打撃を与えたため、世界の石油需要は2020年以来初めて減少する見通しであると発表した。IEAは最新の石油市場報告書で、2026年の世界の石油需要は前年比で日量100万バレル減少する見通しで、これは2020年の新型コロナウイルス感染症パンデミックの最盛期以来初の年間減少となると述べた。",
    bodyOriginal: `Global oil demand is set to decline for the first time since 2020 as the Iran war wreaked havoc with production and exports in the Middle East, the International Energy Agency (IEA) said Friday.
World oil demand is set to decline by 1 million b/d year-on-year in 2026, which would mark its first annual decrease since the height of the Covid-19 pandemic in 2020, the IEA said in its latest oil market report.
This year's contraction is "highly skewed in both product and regional terms," as the closure of the Strait of Hormuz — the vital shipping route for oil and gas — disrupted exports through the Persian gulf, the agency noted.
A recovery is underway, the researchers added, though they warned renewed escalation in the conflict could complicate matters and further cloud the outlook.
The IEA's forecast rests on the assumption of a ceasefire and the gradual reopening of Hormuz, an outcome that looks increasingly uncertain as the U.S. and Iran traded hostilities this week. A number of ships came under attack and traffic through the Strait has once again slowed to a trickle.
"While the global oil market balance looks set to swing back to surplus towards the end of the year, the forecast hinges on the assumption that tanker flows through the Strait will gradually recover, allowing producers to restart fields and refiners in the Middle East and elsewhere to resume product shipments," the IEA wrote.
"Renewed exchanges of fire in the Gulf this week highlight the risks of not reaching a lasting peace agreement, which is a must for the normalization in oil markets."
Oil prices edged lower on Friday, with global benchmark Brent crude futures for September delivery easing to $76.25 per barrel while U.S. West Texas Intermediate crude futures held steady at $72.09.
Gradual recovery
There will not be a "swift or linear" recovery as the IEA expects a "very uncertain and unstable situation" in the region, Toril Bosoni, IEA's head of oil and markets, told CNBC's "Squawk Box Europe" on Friday.
"But with significant growth from other producers, and with demand levels lower than we were expecting before the war, we could return to a surplus through the end of the year and into next year," she added.
"This would provide welcome relief to the market and allow countries to rebuild their inventories."
The U.S. said it will engage in "technical talks" with Iran and remains committed to finding a solution to the conflict, despite the two countries trading airstrikes in recent days, MS Now reported Thursday, citing a U.S. official.
U.S. President Donald Trump had made his position clear and characterized Iran's attacks on commercial vessels as "acts of terrorism," the official said, according to MS Now.
Those comments come after Trump at the NATO summit in Ankara, Turkey, said that the ceasefire with Iran was "over."`,
    bodyJa: `国際エネルギー機関（IEA）は金曜日、イラン戦争が中東の生産と輸出に大打撃を与えたため、世界の石油需要は2020年以来初めて減少する見通しであると発表した。
IEAは最新の石油市場報告書で、2026年の世界の石油需要は前年比で日量100万バレル減少する見通しで、これは2020年の新型コロナウイルス感染症パンデミックの最盛期以来初の年間減少となると述べた。
石油とガスの重要な輸送ルートであるホルムズ海峡の閉鎖により、ペルシャ湾を通じた輸出が中断されたため、今年の縮小は「製品と地域の両方の点で大きく偏っている」と当局は指摘した。
研究者らは、回復は進行しているが、紛争の新たな激化が事態を複雑にし、見通しをさらに曇らせる可能性があると警告していると付け加えた。
IEAの予測は停戦とホルムズ島の段階的な再開を前提としているが、今週米国とイランが敵対行為を交わす中、その結果はますます不確実になりそうだ。多数の船舶が攻撃を受け、海峡を通る交通は再び細流にまで減速した。
「世界の石油市場の収支は年末にかけて黒字に戻りそうだが、この予測は海峡を通るタンカーの航行量が徐々に回復し、生産者が中東などで油田や精製所を再開して製品の出荷を再開できるようになるという前提にかかっている」とIEAは書いている。
「今週湾岸で新たな銃撃戦が発生し、石油市場の正常化には不可欠な恒久的な和平合意に達しないリスクが浮き彫りになった。」
金曜日の原油価格は若干下落し、世界の指標となるブレント原油先物9月渡しは1バレル当たり76.25ドルまで下落したが、米国ウェスト・テキサス・インターミディエイト原油先物は72.09ドルで安定した。
徐々に回復
IEAの石油・市場責任者トリル・ボゾーニ氏は金曜日、CNBCの番組「スコーク・ボックス・ヨーロッパ」で、IEAはこの地域で「非常に不確実で不安定な状況」が続くと予想しているため、「急速または直線的な」回復はないだろうと語った。
「しかし、他の生産者の大幅な成長と、戦前に予想していたよりも需要レベルが低いため、年末から来年にかけて黒字に戻る可能性があります。」と彼女は付け加えた。
「これは市場に歓迎すべき救済をもたらし、各国が在庫を再構築できるようになるだろう。」
ＭＳナウは木曜、米当局者の話として、両国がここ数日空爆を行っているにもかかわらず、米国はイランと「技術協議」を行うと述べ、紛争解決の解決策を見つけることに引き続き尽力すると述べた。
ＭＳナウによると、ドナルド・トランプ米大統領は自身の立場を明確にし、イランによる商船への攻撃を「テロ行為」と位置づけたと当局者が述べた。
これらのコメントは、トルコのアンカラで行われたNATO首脳会議でトランプ大統領がイランとの停戦は「終わった」と発言した後に出たものである。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/10/iea-world-oil-demand-declines-iran-war.html",
    publishedAt: "2026-07-10T09:15:22+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "easyjet-pops-13-as-airline-weighs-7-7-bi-030b1cf8",
    title: "EasyJet pops 13% as airline weighs $7.7 billion rival takeover bid from Apollo",
    titleJa: "航空会社がアポロ社からの77億ドルのライバル買収案を検討中、イージージェットは13％急騰",
    summaryJa: "金曜日、格安航空会社がアポロ・グローバル・マネジメントから77億ドルの買収提案を検討していると発表したことを受けて、イージージェットの株価は急騰し、同社はプライベートエクイティ入札合戦の中心となった。現金オファーの条件に基づき、イージージェットの株主は同社の1株当たり7.15ポンド（9.61ドル）を受け取る権利があり、同社の評価額は57億ポンド（約76億6,000万ドル）となる。",
    bodyOriginal: `EasyJet stock soared Friday after the budget carrier said it is considering a $7.7 billion takeover bid from Apollo Global Management, putting the airline at the center of a private equity bidding war.
Under the terms of the cash offer, easyJet shareholders would be entitled to £7.15 ($9.61) per share of the company, valuing the firm at £5.7 billion, around $7.66 billion.
As an alternative to the cash payment, Apollo would also offer shareholders a Stub Equity Alternative – the option to "roll their existing shareholding in easyJet into the vehicle through which the Apollo Funds would hold their investment in easyJet."
The terms of that alternative, which would see shareholders maintain their voting rights, is still subject to further discussion.
The London-listed stock was last trading 13.2% higher. It closed at £5.88 on Thursday, after falling by 0.5% during the trading session. Since the beginning of the year, the shares have risen by 15.2%.
EasyJet's shares jumped on Monday after the airline agreed in principle to a $7.3 billion takeover offer from private equity firm Castlelake. But the company hinted Friday that it was reconsidering the position.
"The Proposed Cash Offer delivers a superior outcome for easyJet shareholders by providing a higher cash value than Castlelake's latest proposal," EasyJet said of Apollo's bid, noting that the board also saw the proposal as "an attractive combination of value, strategic alignment and long-term stewardship of the business."
"Accordingly, the easyJet Board is no longer minded to recommend the Castlelake Proposal," EasyJet said.
Castlelake's bid represents a cash offer of $6.90 per share, with the firm having until Aug. 3 to make a firm offer or walk away from the deal.
The Apollo bid marks around a 22% premium to Thursday's closing price.
Apollo's proposed offer price also represents an 81% premium to easyJet's closing share price of £3.94 per share on May 28, which was the final business day before the offer period began on Castlelake's bid to take over the company.
It comes as the global aviation sector remains under pressure, with jet fuel supplies squeezed in the wake of the U.S.-Iran war. Last month, the International Air Transport Association warned global airline profitability was expected to halve this year as the industry's fuel bills surge.
In the first half of 2026, EasyJet's losses widened as it reported a pre-tax loss of £552 million – down from a loss of £394 million for the same period the previous year. It said its performance in the second half of the year so far had been impacted by the Middle East conflict, with higher fuel costs and lower forward visibility weighing on operations.
An acquisition by Apollo increases the probability of EasyJet's growth path continuing as planned, Bernstein analysts said in a note on Friday morning.
"However, in this case, a heroic cost restructuring and earnings inflection, far above what we currently forecast, would be required for the deal to make sense at this price," they added.
— CNBC's Hugh Leask contributed to this article.`,
    bodyJa: `金曜日、格安航空会社がアポロ・グローバル・マネジメントから77億ドルの買収提案を検討していると発表したことを受けて、イージージェットの株価は急騰し、同社はプライベートエクイティ入札合戦の中心となった。
現金オファーの条件に基づき、イージージェットの株主は同社の1株当たり7.15ポンド（9.61ドル）を受け取る権利があり、同社の評価額は57億ポンド（約76億6,000万ドル）となる。
現金支払いの代替案として、アポロは株主にスタブ・エクイティ・オルタナティブ、つまり「イージージェットの既存株式を、アポロ・ファンドがイージージェットへの投資を保持する手段に転用する」オプションも提供する予定だ。
株主が議決権を維持するという代替案の条件については、まださらなる議論の余地がある。
ロンドン上場株の前回取引は１３．２％高だった。木曜日は取引中に０．５％下落し、５．８８ポンドで取引を終えた。年初以来、株価は15.2％上昇した。
イージージェット航空がプライベートエクイティ会社キャッスルレイクからの73億ドルの買収提案に大筋合意したことを受け、月曜日にイージージェットの株価は急騰した。しかし同社は金曜日、この立場を再検討していることを示唆した。
「提案された現金提案は、キャッスルレイクの最新の提案よりも高い現金価値を提供することで、イージージェットの株主に優れた結果をもたらす」とイージージェットはアポロの買収について述べ、取締役会もこの提案を「価値、戦略的整合性、事業の長期管理の魅力的な組み合わせ」とみなしていると指摘した。
「したがって、イージージェット理事会はもはやキャッスルレイク提案を推奨するつもりはない」とイージージェットは述べた。
キャッスルレイクの入札は1株当たり6.90ドルの現金提示を意味しており、同社は8月3日までに確約を提示するか、取引を放棄するかを決定する必要がある。
アポロ入札は木曜日の終値に約２２％のプレミアムを付けている。
また、アポロ社の提案価格は、キャッスルレイク社による同社買収提案の提案期間開始前の最終営業日である5月28日のイージージェット社の株価終値である1株当たり3.94ポンドに対して81％のプレミアムを上乗せした額となっている。
米国とイランの戦争の影響でジェット燃料の供給が逼迫し、世界の航空業界が依然として圧力にさらされている中での出来事だ。国際航空運送協会は先月、航空業界の燃料代の高騰により、世界の航空会社の収益は今年は半減すると予想されていると警告した。
2026年上半期、イージージェットの損失は拡大し、税引前損失は5億5,200万ポンドとなり、前年同期の3億9,400万ポンドの損失から減少しました。同社は、これまでのところ今年下半期の業績は中東紛争の影響を受けており、燃料費の高騰と前方視界の低下が運航の重しとなっていると述べた。
バーンスタインのアナリストらは金曜朝のメモで、アポロによる買収によりイージージェットの成長路線が計画通り続く可能性が高まると述べた。
「ただし、この場合、この価格で契約を成立させるには、現時点での予想をはるかに上回る壮大なコスト再編と利益の変動が必要となるだろう」と両氏は付け加えた。
— CNBC の Hugh Leask がこの記事に寄稿しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/10/easyjet-apollo-takeover-bid-castlelake-share-price.html",
    publishedAt: "2026-07-10T08:00:03+00:00",
    category: "自動車",
    imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    readTime: 3,
  },
  {
    id: "u-s-to-continue-technical-talks-with-ira-67262c5e",
    title: "U.S. to continue 'technical talks' with Iran after Trump said ceasefire was 'over'",
    titleJa: "トランプ大統領、停戦は「終わった」と発言後、米国、イランとの「技術協議」継続へ",
    summaryJa: "ここ数日、両国が空爆を行っているにもかかわらず、米国はイランと「技術協議」に参加し、紛争の解決策を見つけることに引き続き尽力する、とMSナウが木曜、米国当局者の話として報じた。ＭＳナウによると、同当局者は、ドナルド・トランプ大統領が自身の立場を明確にし、イランによる商船への攻撃を「テロ行為」と位置づけたと述べた。",
    bodyOriginal: `The U.S. will engage in "technical talks" with Iran and remains committed to finding a solution to the conflict, despite the two countries trading airstrikes in recent days, MS Now reported Thursday, citing a U.S. official.
The official said President Donald Trump had made his position clear and characterized Iran's attacks on commercial vessels as "acts of terrorism," according to MS Now.
Those comments come after Trump at the NATO summit in Ankara, Turkey, said that the ceasefire with Iran was "over."
The memorandum of understanding between the two countries is performance-based, and Iran's actions constitute "failed performance at an unacceptable level," the U.S. official told MS Now, adding that talks with Tehran will continue.
The ceasefire signed last month has come under serious strain in recent days with the U.S. and Iranian forces conducting strikes this week. "I don't want to deal with them [Iran] anymore," Trump said at the NATO summit.
On his way back from the summit, Trump said that Iran had called to make a deal to cease the escalating hostilities in the Middle East. "They called a little while ago. They want to make a deal so badly. I just don't know if they're worthy of making a deal. I don't know that they're going to honor the deal. That's the problem," he said.
Iranian officials have accused the U.S. of not honoring the MOU, citing violation of "Iranian adjustments" in the Strait of Hormuz, "persistent threats of further strikes" and reinstating oil sanctions.
The U.S. military conducted renewed rounds of offensive strikes against Iran in retaliation for three commercial vessels transiting the Strait of Hormuz coming under attack. The U.S. Treasury Department subsequently withdrew a waiver that had allowed Iran to sell its oil.
Oil prices were marginally lower on Friday in Asia trading, with global benchmark Brent crude futures for September delivery easing to $76.3 per barrel while U.S. West Texas Intermediate crude futures at $71.87.`,
    bodyJa: `ここ数日、両国が空爆を行っているにもかかわらず、米国はイランと「技術協議」に参加し、紛争の解決策を見つけることに引き続き尽力する、とMSナウが木曜、米国当局者の話として報じた。
ＭＳナウによると、同当局者は、ドナルド・トランプ大統領が自身の立場を明確にし、イランによる商船への攻撃を「テロ行為」と位置づけたと述べた。
これらのコメントは、トルコのアンカラで行われたNATO首脳会議でトランプ大統領がイランとの停戦は「終わった」と発言した後に出たものである。
両国間の覚書は実績ベースであり、イランの行動は「容認できないレベルでの失敗」に相当すると米当局者はMS Nowに語り、テヘランとの協議は継続すると付け加えた。
先月署名された停戦は、米国軍とイラン軍が今週空爆を実施するなど、ここ数日で深刻な緊張にさらされている。トランプ大統領はNATO首脳会議で「彼ら（イラン）とはもう関わりたくない」と語った。
トランプ大統領はサミットからの帰り道、イランが中東で激化する敵対行為を停止するための合意を求めたと述べた。同氏は「彼らは少し前に電話してきた。彼らはとても合意を望んでいる。ただ、彼らが合意を結ぶに値するかどうかは分からない。彼らが合意を遵守するかどうかも分からない。それが問題だ」と述べた。
イラン当局者らは、ホルムズ海峡における「イランの調整」への違反、「更なる攻撃の執拗な脅迫」、石油制裁の復活などを理由に、米国が覚書を遵守していないとして非難している。
米軍は、ホルムズ海峡を通過中の商船３隻が攻撃を受けた報復として、イランに対する新たな攻撃を実施した。その後、米国財務省はイランによる石油販売を許可していた免除を撤回した。
金曜日のアジア取引では原油価格が小幅下落し、世界の指標となるブレント原油先物9月渡しは1バレル当たり76.3ドルに下落し、米国ウエスト・テキサス・インターミディエイト原油先物は71.87ドルとなった。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/10/us-iran-war-strikes-strait-of-hormuz-technical-talks-progress-.html",
    publishedAt: "2026-07-10T02:51:57+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "chip-giant-sk-hynix-raises-26-5bn-in-meg-864f2579",
    title: "Chip giant SK Hynix raises $26.5bn in mega US share sale",
    titleJa: "半導体大手SKハイニックス、米国株の大型売却で265億ドルを調達",
    summaryJa: "半導体大手SKハイニックス、米国株の大型売却で265億ドルを調達- 公開されました",
    bodyOriginal: `Chip giant SK Hynix raises $26.5bn in mega US share sale
- Published
South Korean computer chip maker SK Hynix has raised $26.5bn (£19.8bn) in its New York share offering, marking the largest ever listing by a foreign firm in the US.
The company, a key supplier to artificial intelligence (AI) chip giant Nvidia, said on Thursday that it had sold 177.9 million American depositary shares for $149 each. The shares are set to begin trading on Friday on the Nasdaq.
SK Hynix saw its market value top $1tn in its home country in May, lifted by the boom in demand for AI chips.
Its share price has more than tripled in South Korea this year, which along with Samsung Electronics has helped boost the benchmark Kospi index by more than 70% over the same period.
SK Hynix is one of the world's leading memory chip makers. The industry has been given a major boost by the hundreds of billions being spent on AI.
Shares in rivals Samsung Electronics and Micron have more than doubled in recent months.
The US listing gives SK Hynix easier access to huge amounts of potential investment from the world's biggest economy, which has fewer barriers than South Korea, said Seoul National University finance professor Jaewon Choi.
Traders are closely watching the listing as a "yardstick to test the water" for whether investor enthusiasm for memory chip makers will continue, Choi said.
The AI boom has triggered a rush of companies raising money on the the stock market.
In June, GrokAI owner SpaceX became the world's biggest ever listing as it raised $85.7bn.
Meanwhile, AI developers Anthropic and OpenAI are preparing to go public, with valuations of more $1tn.
Demand for SK Hynix's offering was reportedly over seven times more than the number of shares available, highlighting the strong investor appetite for a key company in the AI supply chain.
Each American depositary share is equivalent to a tenth of a Seoul-traded common share, SK Hynix said.
The offering gives US investors a way to buy SK Hynix shares without having to trade via an overseas stock exchange.
The company has pledged major investments to develop South Korea's chip making and AI capabilities in the coming years.
The country's government is likely to be counting on SK Hynix's US listing to raise funds that can support the firm's domestic investments, said Hanyang University business professor Yun Youngjin.
But the Nasdaq listing carries some risks, especially if investors move money towards the US and away from South Korea's stock market, Yun added.
In June, the country's government unveiled plans for more than $880bn of investments in partnership with SK Hynix and Samsung.
Both SK Hynix and Samsung have stock market valuations of more that $1tn, joining growing group of firms which includes tech giants Nvidia, Apple, Microsoft and Google-owner Alphabet.`,
    bodyJa: `半導体大手SKハイニックス、米国株の大型売却で265億ドルを調達
- 公開されました
韓国のコンピューターチップメーカーSKハイニックスはニューヨーク株式売り出しで265億ドル（198億ポンド）を調達し、外国企業による米国上場としては史上最大規模となった。
人工知能（AI）チップ大手エヌビディアへの主要サプライヤーである同社は木曜日、米国預託株式1億7790万株を1株149ドルで売却したと発表した。株式は金曜日にナスダックで取引が開始される予定だ。
SKハイニックスは、AIチップの需要ブームによって5月に本国での時価総額が1兆ドルを超えた。
同社の株価は今年韓国で3倍以上に上昇し、サムスン電子とともに同時期に基準となるコスピ指数を70％以上押し上げることに貢献した。
SK Hynix は世界有数のメモリ チップ メーカーの 1 つです。 AI に数千億ドルが費やされることで、業界は大きな後押しを受けています。
ライバルのサムスン電子とマイクロンの株価はここ数カ月で２倍以上に上昇した。
ソウル国立大学のジェウォン・チョイ金融教授は、米国での上場により、SKハイニックスは韓国よりも障壁が少ない世界最大の経済大国からの巨額の潜在的投資へのアクセスが容易になると述べた。
トレーダーらは、メモリーチップメーカーに対する投資家の熱意が続くかどうかを見極める「見極めの基準」として、今回の上場を注視しているとチョイ氏は語った。
AIブームをきっかけに、株式市場で資金調達を行う企業が殺到している。
6月にはGrokAIの所有者であるSpaceXが857億ドルを調達し、史上最大の上場企業となった。
一方、AI開発者のAnthropicとOpenAIは株式公開の準備を進めており、評価額は1兆ドルを超える。
伝えられるところによると、SKハイニックスの売り出しに対する需要は入手可能な株式数の7倍以上であり、AIサプライチェーンの主要企業に対する投資家の強い意欲を浮き彫りにしている。
SKハイニックスによると、米国の預託株式は1株当たりソウルで取引される普通株の10分の1に相当する。
この提案により、米国の投資家は海外の証券取引所を介して取引することなくSKハイニックスの株を購入する方法が得られる。
同社は、今後数年間で韓国のチップ製造とAI能力を開発するために大規模な投資を約束している。
漢陽大学ビジネス教授のユン・ヨンジン氏は、韓国政府はSKハイニックスの国内投資を支援できる資金を調達するために、SKハイニックスの米国上場を期待している可能性が高いと述べた。
しかし、特に投資家が韓国の株式市場から米国に資金を移した場合、ナスダック上場にはいくつかのリスクが伴うとユン氏は付け加えた。
6月、同国政府はSKハイニックスとサムスンと提携して8,800億ドルを超える投資計画を発表した。
SKハイニックスとサムスンはどちらも株式市場評価額が1兆ドルを超えており、ハイテク大手のエヌビディア、アップル、マイクロソフト、グーグル傘下のアルファベットを含む成長企業グループに加わっている。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c4gym70r0y4o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-10T02:48:18+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/8cb7/live/4865ed80-7c0b-11f1-a0e5-951d7247156a.jpg",
    readTime: 3,
  },
  {
    id: "sk-hynix-raises-26-5-billion-in-u-s-offe-62bd0449",
    title: "SK Hynix raises $26.5 billion in U.S. offering. What to know about the stock.",
    titleJa: "SKハイニックスが米国で265億ドルを調達。株式について知っておくべきこと。",
    summaryJa: "米国の投資家は、メモリチップの激戦市場に参入する別の簡単な方法を手に入れようとしている。",
    bodyOriginal: `U.S. investors are about to get another straightforward way to play the red-hot market for memory chips.`,
    bodyJa: `米国の投資家は、メモリチップの激戦市場に参入する別の簡単な方法を手に入れようとしている。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/sk-hynix-is-about-to-hit-the-u-s-market-heres-what-to-know-about-the-deal-1c873fa4?mod=mw_rss_topstories",
    publishedAt: "2026-07-10T02:38:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-18931762",
    readTime: 2,
  },
  {
    id: "vapes-to-have-less-enticing-names-and-fl-fc31a1f5",
    title: "Vapes to have less enticing names and flavours to protect children",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "子どもたちを守るため、電子タバコはあまり魅力的でない名前とフレーバーに変更される- 公開されました",
    bodyOriginal: `Vapes to have less enticing names and flavours to protect children
- Published
Vapes with colourful packaging, or with names or flavours inspired by sweets and cocktails, could be banned as part of plans to stop them being marketed to children.
The government is launching a 12-week consultation about its plans "to make vaping less attractive for children and young people". Health Secretary James Murray said it was clear too many were being lured into experimenting.
Under the new proposals, packs would need to be plain with strict limits on branding and only simple flavour descriptions like "apple" or "cola" used.
Other restrictions would move vapes out of sight in shops, similar to how cigarettes and tobacco are currently sold.
Children as young as 13 admit vaping, say NHS staff
- Published19 January
Vapers overtake smokers for first time in Britain
- Published4 November 2025
There is no legitimate reason for nicotine products to come in neon packaging, feature cartoon images, or use flavours and branding designed to catch a child's eye, say health experts.
Murray said: "The evidence is clear: there are too many young people experimenting with vapes, attracted by the array of flavours, bright colours and marketing displays.
"We must act now to reduce the appeal of addictive vapes to our children.
"Vapes are less harmful than cigarettes and can play an important role in helping adult smokers to quit, but they should never be designed or marketed in ways that tempt children.
"These proposals are about striking the right balance and I urge everyone to have their say."
The 100 day consultation follows the recent passing of the Tobacco and Vapes Act, which sets out proposals to create the UK's first smoke-free generation, protecting children from nicotine addiction, while ensuring adult smokers can still access vaping products to help them quit.
Children aged 17 or younger now face a lifelong ban on buying cigarettes, since it will be illegal for shops to sell tobacco to anyone born after 1 January 2009.
And it gives the power to ban vaping in cars carrying children, in playgrounds and outside schools and at hospitals, expanding smoke-free laws.
It follows a ban on single-use vapes and comes ahead of future bans on the sale of vapes from vending machines and a planned end to the advertising and sponsorship of vapes.
Around one million or nearly one in every five 11-17 year olds in Great Britain reported trying vaping in 2025, according to the charity Action on Smoking and Health.
The consultation also proposes inserts for cigarette packs telling buyers where to get help to quit and plans to make all tobacco products – including cigarette rolling paper and cigars – come in plain packaging.
Get in touch
Are you affected by this issue? Do you have a view on the plans?
Related topics
- Published11 May
- Published9 June`,
    bodyJa: `子どもたちを守るため、電子タバコはあまり魅力的でない名前とフレーバーに変更される
- 公開されました
カラフルなパッケージのVAPEや、お菓子やカクテルからインスピレーションを得た名前やフレーバーのVAPEは、子供向けの販売を阻止する計画の一環として禁止される可能性がある。
政府は「子供や若者にとって電子タバコの魅力を薄める」計画について12週間の協議を開始している。ジェームズ・マレー保健長官は、あまりにも多くの人が実験に誘惑されているのは明らかだと述べた。
新しい提案では、パックはブランド表示を厳格に制限し、「リンゴ」や「コーラ」などの単純なフレーバーの説明のみを使用したプレーンなものにする必要がある。
他の規制により、現在紙巻きタバコが販売されているのと同様に、電子タバコが店頭で見えなくなることになる。
13歳の子供も電子タバコを吸っていることを認めているとNHSスタッフが発表
- 1 月 19 日公開
英国で初めてベイパーが喫煙者を追い抜く
- Published4 November 2025
健康専門家らは、ニコチン製品がネオンのパッケージで提供されたり、漫画の画像が使われたり、子供の目を引くようにデザインされたフレーバーやブランドを使用したりする正当な理由はない、と述べている。
マレー氏は「証拠は明らかだ。さまざまなフレーバー、明るい色、マーケティング表示に惹かれて、ベイプを試している若者が多すぎる」と語った。
「私たちは子供たちにとって中毒性のある電子タバコの魅力を減らすために今すぐ行動しなければなりません。
「VAPEは紙巻きタバコよりも害が少なく、成人喫煙者の禁煙を助ける重要な役割を果たす可能性があるが、決して子供を誘惑するような設計や販売をすべきではない。
「これらの提案は適切なバランスをとることを目的としたものであり、皆さんに意見を求めることを強く求めます。」
この100日間の協議は、最近可決されたタバコ・電子タバコ法に続くもので、同法では英国初の非喫煙世代を創設し、子供たちをニコチン中毒から守り、同時に成人喫煙者が禁煙を支援する電子タバコ製品を引き続き利用できるようにするための提案が定められている。
2009年1月1日以降に生まれた人に店がタバコを販売することは違法となるため、17歳以下の子供はタバコの購入を生涯禁止されることになる。
そして、子供を乗せた車内、遊び場、学校外や病院での電子タバコの使用を禁止する権限を与え、禁煙法を拡大する。
これは使い捨て電子タバコの禁止に続き、今後の自動販売機での電子タバコの販売禁止や電子タバコの広告とスポンサーシップの計画終了に先立って行われる。
慈善団体「喫煙と健康に関するアクション」によると、2025年には英国の11～17歳の約100万人、つまり5人に1人近くが電子タバコを吸おうとしていると報告されている。
この協議ではまた、購入者に禁煙の助けをどこに求めるべきかを示す紙巻きタバコの箱の差し込み物や、紙巻タバコや葉巻を含むすべてのタバコ製品を無地のパッケージにする計画も提案されている。
連絡する
Are you affected by this issue? Do you have a view on the plans?
関連トピック
- 5 月 11 日公開
- 6 月 9 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c9v29d7vml7o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-10T02:15:38+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/f2b3/live/aaac8d00-7b93-11f1-897a-ebe8a20106d3.jpg",
    readTime: 3,
  },
  {
    id: "cool-in-90-seconds-the-fake-portable-ai-cacf79fa",
    title: "'Cool in 90 seconds' - the fake portable air conditioners sweeping the internet",
    titleJa: "「90秒で涼しい」ネットを席巻する偽ポータブルエアコン",
    summaryJa: "「90秒で涼しい」ネットを席巻する偽ポータブルエアコン- 公開されました",
    bodyOriginal: `'Cool in 90 seconds' - the fake portable air conditioners sweeping the internet
- Published
As parts of the UK brace for another hot weekend, online adverts have been appearing for portable air conditioners claiming to be "designed by former Nasa engineers" and able to "cool a room in 90 seconds".
The adverts have emerged on platforms including Facebook and YouTube, but the Advertising Standards Authority (ASA) has now warned the products are often "too good to be true".
YouTuber Stuart Matthews, who bought several devices to test on his Proper DIY channel, told the BBC that despite paying £70 for one machine, it turned out to be "a small, simple fan worth only a few pounds".
The BBC has approached Meta and YouTube for comment.
The ASA told the BBC that some of the adverts it had seen online in recent weeks made exaggerated claims, including that a small device could cool an entire home within minutes or used very little electricity.
It also said the adverts frequently featured fake customer reviews describing dramatic temperature drops or exceptional performance.
The adverts direct shoppers to websites selling the devices, typically for between £70 and £120.
Many of the adverts also appeared to be AI-generated, using visuals such as copper coils and metallic boxes to make the products seem more sophisticated.
The ASA said there were several ways for customers to tell if an advert for a portable air conditioner was likely to be misleading.
It said people should be sceptical of the following:
Promises which sound too good to be true, like claims a small device can chill large rooms
Dramatic backstories about "secret inventions" or "industry breakthroughs"
Poor grammar, spelling mistakes and inconsistent branding
Customer reviews describing dramatic results or reading as though they're too perfect
The watchdog advised consumers who were unsure to research the retailer and check it provided genuine contact details and a business address.
Customers should also look for independent reviews rather than relying solely on testimonials on the seller's website.
It added that anyone concerned about an air conditioner advert could report it via their website, external.
A closer look
Matthews said he bought several of the devices to see whether they performed as advertised.
The civil engineer and content creator said rather than buying something that would bring the temperature of his room down quickly, he found he had instead bought some "cheap components" made using "flawed science".
One advert described the product as a "reverse-engineered aircon unit" featuring "a liquid-compressed cooling cartridge".
Matthews said the device actually contained "a load of cardboard fins that get wet as the water blows past them".
While so-called "swamp coolers" - machines that chill air by evaporating water - do work reasonably well in hot, dry climates, they also increase humidity and so are much less effective in humid places like much of the UK.
They are also not conventional air conditioners, which work by removing heat from a room via an exhaust hose or external unit.
"I really feel for the people that have been sucked into buying some of this rubbish," Matthews said.
The ASA said it was monitoring sites to spot such adverts and issuing an enforcement notice "instructing advertisers to get their ads in order". It also bans adverts found to have breached its rules.
Although the body regulates paid-for adverts on platforms including YouTube and Facebook, it cannot issue fines itself.
How can I get air conditioning in my home and how much does it cost?
- Published23 hours ago
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.
Get in touch
Have you been affected by the extreme heat in the UK? Do you have a story to share?
- Published1 day ago
- Published2 days ago
- Published10 June`,
    bodyJa: `「90秒で涼しい」ネットを席巻する偽ポータブルエアコン
- 公開されました
英国では再び暑い週末に備える一環として、「元NASAのエンジニアが設計」し、「90秒で部屋を冷やすことができる」と主張するポータブルエアコンのオンライン広告が登場している。
広告はフェイスブックやユーチューブなどのプラットフォームに掲載されているが、広告基準局（ASA）は今回、こうした商品は「真実すぎる」ことが多いと警告した。
自身の Proper DIY チャンネルでテストするためにいくつかのデバイスを購入したユーチューバーのスチュアート・マシューズ氏は、1 台のマシンに 70 ポンドを支払ったにもかかわらず、それは「数ポンドの価値しかない小型で単純なファン」であることが判明したと BBC に語った。
BBCはMetaとYouTubeにコメントを求めた。
ASAはBBCに対し、ここ数週間オンラインで見た広告の一部には、小型機器で数分以内に家全体を冷やすことができるとか、電気の使用量が非常に少ないなどの誇張した主張が含まれていたと語った。
また、広告には劇的な気温の低下や並外れたパフォーマンスを説明する偽の顧客レビューが頻繁に掲載されていたとも述べた。
広告は買い物客を、通常 70 ポンドから 120 ポンドの間でデバイスを販売する Web サイトに誘導します。
広告の多くも AI によって生成されているようで、製品をより洗練されているように見せるために銅製のコイルや金属製の箱などのビジュアルが使用されていました。
ASAは、ポータブルエアコンの広告が誤解を招く可能性があるかどうかを顧客が見分ける方法はいくつかあると述べた。
それは、人々は以下の点について懐疑的であるべきだと述べています。
小さなデバイスで広い部屋を冷やすことができるというような、うますぎる約束
「秘密の発明」や「業界の躍進」に関する劇的な裏話
不十分な文法、スペルミス、一貫性のないブランド表示
劇的な結果を述べたり、完璧すぎるかのような感想を述べたりする顧客レビュー
監視機関は、小売業者を調べて本物の連絡先の詳細と会社の住所が提供されていることを確認することに自信がない消費者にアドバイスしました。
また、顧客は、販売者の Web サイト上の体験談だけに頼るのではなく、独立したレビューを探す必要があります。
エアコンの広告に懸念を抱いた人は、外部のウェブサイトを通じて通報できるとも付け加えた。
もっと詳しく見る
マシューズ氏は、宣伝どおりに動作するかどうかを確認するためにデバイスをいくつか購入したと述べた。
土木技師でありコンテンツクリエイターでもあるこの男性は、部屋の温度をすぐに下げるものを買うのではなく、「欠陥のある科学」を使って作られた「安価な部品」を買ってしまったことに気づいたと語った。
ある広告では、この製品を「液体圧縮冷却カートリッジ」を特徴とする「リバースエンジニアリングされたエアコンユニット」と説明していました。
マシューズ氏は、この装置には実際には「水が吹き抜けると濡れてしまう大量のボール紙製のフィン」が含まれていたと述べた。
水を蒸発させて空気を冷やす機械、いわゆる「スワンプクーラー」は、暑く乾燥した気候ではそれなりにうまく機能しますが、湿度も上昇させるため、英国の大部分のような湿気の多い場所ではあまり効果がありません。
また、排気ホースや室外機を介して部屋の熱を除去する従来のエアコンでもありません。
「このようなゴミを買うことに巻き込まれた人々に本当に同情します」とマシューズさんは語った。
ASAは、そのような広告を見つけるためにサイトを監視しており、「広告主に広告を適切に掲載するよう指示する」施行通知を発行していると述べた。また、規則に違反していると判明した広告も禁止する。
同団体はYouTubeやFacebookなどのプラットフォーム上の有料広告を規制しているが、自ら罰金を課すことはできない。
家にエアコンを設置するにはどうすればよいですか?また、その費用はどれくらいかかりますか?
- 23 時間前に公開
Tech Decoded ニュースレターに登録して、世界のトップのテクノロジー ストーリーやトレンドをフォローしてください。英国外ですか？ここからサインアップしてください。
連絡する
イギリスの猛暑の影響はありましたか？ Do you have a story to share?
- 1 日前に公開
- 2 日前に公開
- 6 月 10 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cj6g41pzy41o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-10T01:33:45+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/40f4/live/3731f960-7c3c-11f1-9510-1546718f668b.jpg",
    readTime: 5,
  },
  {
    id: "openai-exec-fidji-simo-says-she-s-steppi-5463df6b",
    title: "OpenAI exec Fidji Simo says she's stepping down due to chronic illness, will transition to advisor",
    titleJa: "OpenAI幹部のフィジー・シモ氏、慢性疾患のため辞任し、アドバイザーに転任すると発表",
    summaryJa: "OpenAIの製品およびビジネス責任者であるフィジ・シモ氏は木曜日、「慢性疾患の重度の悪化」からの回復に専念するため、人工知能企業での役職を辞任すると発表した。シモさんは2019年に体位起立性頻脈症候群（POTS）と診断され、「症状、治療法、保険、不安、そして患者であることに伴う目に見えない仕事すべてに対処しながら、数え切れないほどの時間を診療所で過ごしている」と語った。",
    bodyOriginal: `Fidji Simo, OpenAI's product and business chief, on Thursday announced she is stepping down from her role at the artificial intelligence company to focus on recovery after a "severe exacerbation of a chronic illness."
Simo was diagnosed with Postural Orthostatic Tachycardia Syndrome, or POTS, in 2019, and said she's been spending "countless hours in doctors' offices, dealing with symptoms, treatments, insurance, uncertainty, and all the invisible work that comes with being a patient."
She stepped away from OpenAI in April for a medical leave. OpenAI President Greg Brockman took over product responsibilities in Simo's absence.
"When I went on leave, many people told me I was courageous for prioritizing my health," Simo wrote in a post on X on Thursday. "The truth is that I am only making this decision now because I failed to make it many times before."
Simo said she will transition into a role as a part-time advisor at OpenAI.
OpenAI hired Simo in May of 2025 to lead the company's applications business. OpenAI CEO Sam Altman said in a memo at the time that Simo would "focus on enabling our 'traditional' company functions to scale as we enter a next phase of growth."
Last month OpenAI confidentially filed for an IPO, a week after rival Anthropic did the same. However, the company hasn't offered a timeline for a public market debut and is reportedly putting off those plans until at least next year.
Simo previously served as CEO of Instacart, where she took the company public and helped to break the longest tech IPO drought in three decades. She also spent more than a decade in leadership roles at Meta, acting as the head of Facebook from 2019 until 2021.
"Two years after I got sick, Facebook offered me the opportunity to take a full year of medical leave. I didn't even pause to consider it. I immediately said no," Simo wrote on Thursday. She added that CEO Mark Zuckerberg "told me I should play the long game. I wish I had listened."
Altman said in a post on X that he's grateful for Simo's contributions to the company, "and even grateful for her friendship and who she is as a person."
WATCH: OpenAI CEO Sam Altman on whether the company will go public this year: ‘I don’t know’`,
    bodyJa: `OpenAIの製品およびビジネス責任者であるフィジ・シモ氏は木曜日、「慢性疾患の重度の悪化」からの回復に専念するため、人工知能企業での役職を辞任すると発表した。
シモさんは2019年に体位起立性頻脈症候群（POTS）と診断され、「症状、治療法、保険、不安、そして患者であることに伴う目に見えない仕事すべてに対処しながら、数え切れないほどの時間を診療所で過ごしている」と語った。
彼女は4月に病気療養のためOpenAIを退職した。 OpenAI の社長である Greg Brockman が、Simo 氏の不在中に製品責任を引き継ぎました。
「休暇に入ったとき、多くの人が私が健康を優先するのは勇気があると言ってくれた」とシモさんは木曜日のXに投稿した。 「実を言うと、これまで何度も失敗してきたので、今になってこの決断を下しただけなのです。」
シモ氏は、OpenAI の非常勤アドバイザーとしての役割に移行する予定であると述べた。
OpenAI は 2025 年 5 月に、同社のアプリケーション ビジネスを率いるために Simo を雇用しました。 OpenAIの最高経営責任者（CEO）サム・アルトマン氏は当時のメモで、Simoは「次の成長段階に入る際に『従来の』企業機能を拡張できるようにすることに注力する」と述べた。
先月、OpenAIは極秘にIPOを申請したが、その1週間後にはライバルのAnthropicも同様の申請を行った。しかし、同社は公開市場デビューのスケジュールを提示しておらず、伝えられるところによれば、それらの計画は少なくとも来年まで延期される。
シモ氏は以前、インスタカートのCEOを務め、同社を株式公開し、過去30年間で最長となったテクノロジー関連IPOの干ばつ打破に貢献した。彼女はまた、Meta で 10 年以上にわたって指導的役割を果たし、2019 年から 2021 年まで Facebook の責任者を務めました。
「病気になってから2年後、フェイスブックは私に丸1年間の医療休暇を取る機会を提供してくれた。私は立ち止まって検討することさえしなかった。すぐにノーと答えた」とシモ氏は木曜日に書いた。さらに、CEOのマーク・ザッカーバーグ氏は「長期戦をするべきだと言った。聞いていればよかった」とも付け加えた。
アルトマン氏はXへの投稿で、シモ氏の会社への貢献に感謝しており、「彼女の友情や人間としての彼女にも感謝している」と述べた。
注目：OpenAI CEOのサム・アルトマン氏、同社が今年上場するかどうかについて「分からない」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/09/openai-exec-fidji-simo-says-she-will-step-down-and-transition-to-part-time-advisor.html",
    publishedAt: "2026-07-09T23:38:13+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "inside-nato-s-extraordinary-48-hours-tha-4c388d23",
    title: "Inside NATO's extraordinary 48 hours that revealed Trump's grip on global diplomacy",
    titleJa: "世界外交に対するトランプ大統領の支配力を明らかにしたNATOの異例の48時間の内部",
    summaryJa: "トルコのアンカラでは48時間、あたかも世界がドナルド・トランプの予定通りに動いているかのように感じられた。市場は急騰した。 NATO同盟国は対立に備えている。ウクライナは安心感を求めた。イランは議題をひっくり返すと脅した。ある瞬間、指導者たちは外交危機に備えていた。次に、同盟関係がこれまで以上に分裂するのではないかと多くの人が懸念していた大統領との「ラブイン」について説明していた。",
    bodyOriginal: `For 48 hours in Ankara, Turkey, it felt as though the world was moving on Donald Trump's timetable.
Markets lurched. NATO allies braced for confrontation. Ukraine searched for reassurance. Iran threatened to upend the agenda. One moment, leaders were preparing for diplomatic crisis; the next, they were describing a "love-in" with the very president many had feared would leave the alliance more divided than ever.
I've covered hundreds of major international events over my 25 years at CNBC — G7, G8 and G20 summits, OPEC meetings, climate conferences and multiple trips to Ukraine. But I've never witnessed such dramatic reversals of fortune, affecting so many global players, compressed into just 48 hours.
The NATO Summit wasn't simply another diplomatic gathering. It became a real-time demonstration of how quickly the geopolitical landscape can shift when President Trump is at the center of it.
While major summits involving the U.S. inevitably revolve around Washington, this one felt different. It revolved not just around one country, but also around one individual.
Think about everything that was in play. Iran. Russia's war in Ukraine. Greenland. European security. Spain's refusal to meet NATO's military spending targets. President Volodymyr Zelenskyy's uncertain standing with Washington. Every major issue seemed to converge on one summit — and every one of them ultimately revolved around the U.S. president.
To recount, every European NATO member — plus Canada — was effectively on trial coming into this gathering. Trump and Defense Secretary Pete Hegseth had again been aggressively criticizing NATO for its lack of support over Iran and for failing to spend anywhere near enough money on its own security.
In addition, the president took aim at Denmark yet again over its refusal to hand over Greenland for the greater good — whose greater good being a mildly contentious point — and, of course, Spain was getting both barrels for being even worse than the other 30 NATO partners in its military spending.
Zelenskyy was in town, once again to drum up NATO support. And let's be honest, he never really knows what kind of reception he's going to get from the Leader of the Free World.
Then came the absolute bombshell from Mr. Trump that he was done with dealing with the Iranians, done with the memorandum of understanding and the ceasefire. Markets went south and oil went north.
At that point, the summit appeared to be heading toward confrontation.
And yet, then the optics changed on a dime. The mood changed just like that, and suddenly love was in the air.
Even before the big final Trump press conference, world leaders were telling me in quiet asides that the meeting with Trump had gone brilliantly, that he had been very happy, that he had listened — actually listened — to every leader in the big closed-door confab and had left in a good mood.
Hang on, was this the same Donald Trump who had been berating partners only hours earlier?
Yes, apparently so.
I wasn't so sure, but I heard it myself from the horse's mouth only hours later when, in front of a thousand journalists at his summit-closing press conference, the U.S. president confirmed the love-in was real.
Standing alongside Secretary of State Marco Rubio, Treasury Secretary Scott Bessent, Hegseth and Deputy Chief of Staff Stephen Miller, the president spoke of the "tremendous love in the room" during the leaders' meeting. "The unity was amazing," he said. "The love was pretty wild."
It was a remarkable turnaround from the public criticism Trump had directed at many of those same allies only hours earlier.
The summit produced some clear winners and losers. Turkish President Recep Tayyip Erdoğan emerged stronger after hosting a smooth summit and appeared to move closer to securing U.S. approval for F-35 fighter jets.
Mark Rutte, the NATO secretary general, kept up the praise for Trump and, in doing so, helped keep the U.S. engaged with NATO, at least for now. Spain and Denmark, despite early assaults, came away without any major rebuke from the U.S. in Trump's closing press conference.
Another big winner must be Zelenskyy, who appears to have risen in the U.S. president's estimation as Ukraine has stabilized the battlefield and taken the fight deep into Russia despite the odds. The Ukrainian leader may even have secured a deal to produce Patriot missile systems — something Kyiv has long viewed as a priority.
Losers? Well, clearly Putin would have been unhappy with both the show of unity from NATO, its huge progress on defense spending and Ukraine's warmer reception from Trump.
And Iran? Well, that remains the big unknown.
I asked the U.S. president directly when I got the chance to fire a question at him: "What happens next if you really have given up on the ceasefire?"
His answer, I'm afraid, was opaque. He simply returned to the point that Iran would never have a nuclear weapon on his watch.
And perhaps that's the lasting takeaway from these extraordinary 48 hours.
The atmosphere inside NATO changed dramatically over the course of the summit, but the biggest questions remain unanswered. What happens next with Iran? Can the improved mood between Trump and NATO allies last beyond this meeting? And what does it ultimately mean for Ukraine?
Those questions matter far more than the political theater. But if this summit demonstrated anything, it is how quickly the geopolitical landscape can shift when Donald Trump is at the center of it. Allies, adversaries and markets alike are learning to adjust in real time.`,
    bodyJa: `トルコのアンカラでは48時間、あたかも世界がドナルド・トランプの予定通りに動いているかのように感じられた。
市場は急騰した。 NATO同盟国は対立に備えている。ウクライナは安心感を求めた。イランは議題をひっくり返すと脅した。ある瞬間、指導者たちは外交危機に備えていた。次に、同盟関係がこれまで以上に分裂するのではないかと多くの人が懸念していた大統領との「ラブイン」について説明していた。
私はCNBCでの25年間にわたり、G7、G8、G20サミット、OPEC会議、気候会議、ウクライナへの複数回の訪問など、何百もの主要な国際イベントを取材してきました。しかし、これほど劇的な運命の逆転が、わずか 48 時間に圧縮されて、これほど多くの世界的プレーヤーに影響を与えるのを私は見たことがありません。
NATO首脳会議は単なる外交集会ではなかった。これは、トランプ大統領が地政学的な状況の中心にいるときに、地政学的な状況がいかに急速に変化するかをリアルタイムで実証するものとなった。
米国が関与する主要な首脳会談は必然的にワシントンを中心に展開するが、今回は違うと感じた。それは 1 つの国だけでなく、1 人の個人を中心に展開していました。
プレー中に起こったことすべてを考えてください。イラン。ロシアによるウクライナ戦争。グリーンランド。ヨーロッパの安全保障。スペインはNATOの軍事支出目標の達成を拒否した。ウォロディミル・ゼレンスキー大統領のワシントンに対する不確実な立場。すべての主要な問題は 1 つの首脳会談に収束するかのように見えましたが、最終的にはそのどれもが米国大統領を中心に展開しました。
もう一度言いますと、ヨーロッパのすべての NATO 加盟国、さらにカナダもこの集会に参加した事実上の裁判を受けていました。トランプ大統領とピート・ヘグセス国防長官は、NATOがイランに対する支援を欠如し、自国の安全保障に十分な資金をほとんど投じていないとして、再び激しく批判していた。
さらに、大統領は、より大きな利益のためにグリーンランドの引き渡しを拒否したデンマークを再び非難した。そのより大きな利益は、やや議論の余地のある点であるが。そしてもちろん、スペインは軍事支出において他のNATO加盟国30カ国よりもさらに悪いということで、両方の非難を浴びていた。
ゼレンスキー氏は再びNATO支援を強化するために街にいた。そして正直に言うと、彼は自由世界の指導者からどのような歓迎を受けるか全く分かりません。
その後、トランプ氏から、覚書と停戦でイランとの付き合いは終わったという、まったくの爆弾発言があった。市場は南へ、石油は北へ向かいました。
この時点で首脳会談は対立に向かっているように見えた。
それでも、光学系は劇的に変化しました。それだけで雰囲気が変わり、突然恋の空気が漂ってきました。
最後のトランプの大規模な記者会見の前でさえ、世界の指導者たちは、トランプとの会談は見事に終わった、彼はとても幸せだった、大規模な密室会議ですべての指導者の言うことに耳を傾け、実際に耳を傾け、上機嫌で帰っていった、と私に静かに話していた。
ちょっと待って、これはほんの数時間前にパートナーを非難していたドナルド・トランプ氏だったのか？
はい、どうやらそうです。
私にはあまり確信がありませんでしたが、わずか数時間後、首脳会談閉会記者会見で1000人のジャーナリストの前で、米国大統領がラブインが本物であることを認めたとき、馬の口からそれを自分で聞きました。
マルコ・ルビオ国務長官、スコット・ベッセント財務長官、ヘグセス氏、スティーブン・ミラー首席補佐官らと並んで立った大統領は、首脳会談中に「室内の計り知れない愛」について語った。 「団結力は素晴らしかった」と彼は語った。 「その愛はかなりワイルドだった。」
これは、ほんの数時間前にトランプ大統領が同じ同盟国の多くに向けていた国民の批判からの驚くべき転換だった。
このサミットでは、明らかな勝者と敗者が明らかになった。トルコのレジェップ・タイイップ・エルドアン大統領は、首脳会談を円滑に主催した後さらに勢いを増し、F-35戦闘機に対する米国の承認獲得に近づくように見えた。
NATO事務総長のマーク・ルッテ氏はトランプ氏を称賛し続け、そうすることで少なくとも現時点では米国がNATOと関わり続けることに貢献した。スペインとデンマークは、序盤の攻撃にも関わらず、トランプ大統領の閉会記者会見で米国からの大きな叱責も受けずに済んだ。
もう一人の大きな勝者はゼレンスキー氏に違いない。ウクライナが不利な状況にもかかわらず戦場を安定させ、ロシアの奥深くまで戦いを持ち込んだことで、米国大統領の評価が上がったようだ。ウクライナの指導者は、キエフが長い間優先事項として考えていたパトリオット・ミサイル・システムを製造する契約さえ獲得した可能性がある。
敗者？まあ、明らかにプーチン大統領は、NATOの団結の誇示、国防費の大幅な進展、そしてウクライナのトランプからの温かい歓迎の両方に不満を抱いていただろう。
そしてイランは？まあ、それは大きな未知のままです。
私はアメリカ大統領に質問する機会を得たとき、「もし本当に停戦を諦めたら、次に何が起こるのか？」と直接尋ねた。
残念ですが、彼の答えは不透明でした。彼は単に、イランが核兵器を監視することは決してないだろうという点に戻っただけだ。
そしておそらくそれが、この並外れた 48 時間から得られる永続的な収穫です。
NATO内部の雰囲気は首脳会談の過程で劇的に変化したが、最大の疑問は未解決のままだ。イランとの今後はどうなるでしょうか？トランプ大統領とNATO同盟国との間の改善されたムードは今回の会談以降も続くだろうか？そして、それはウクライナにとって最終的に何を意味するのでしょうか？
こうした疑問は、政治劇よりもはるかに重要だ。しかし、今回の首脳会談が何かを示したとすれば、それは、ドナルド・トランプ氏が地政学的状況の中心にいるときに、地政学的な状況がどれだけ早く変化し得るかということだ。同盟国、敵対者、市場は同様にリアルタイムで調整することを学んでいます。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/09/nato-trump-rutte-ukraine-russia-us-iran.html",
    publishedAt: "2026-07-09T23:00:52+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 6,
  },
  {
    id: "pressure-builds-on-europe-s-biggest-port-860c5a02",
    title: "Pressure builds on Europe's biggest port to be greener",
    titleJa: "ヨーロッパ最大の港をより環境に優しいものにするよう圧力が高まる",
    summaryJa: "ヨーロッパ最大の港をより環境に優しいものにするよう圧力が高まる- 公開されました",
    bodyOriginal: `Pressure builds on Europe's biggest port to be greener
- Published
Standing on a grassy verge in the Hook of Holland, I'm overlooking the Port of Rotterdam.
At the delta of the Rhine and Meuse in the Netherlands, on land largely reclaimed from the North Sea, it's the biggest port for freight, external in Europe.
By some measures, Rotterdam alone handles almost as much cargo as all UK ports combined.
The horizon is dominated by cranes, bulk carriers and container stacks – the visible parts of a vast energy and chemicals hub.
Five refineries, including Shell's largest in Europe, process hundreds of thousands of barrels of crude oil a day, while a tight cluster of chemical plants feeds factories across the continent.
According to research by CE Delft, the fossil fuels flowing through the port are ultimately linked to around 600 megatonnes of CO2 a year – many times more than the CO2 output of the Netherlands' biggest airport, Schiphol.
That scale has made Rotterdam a test case for a difficult question: can a port built on fossil fuels ever truly become green?
Pressure is building on the port to do something.
A lawsuit brought by environmental group Advocates for the Future argues that the Port of Rotterdam Authority is not doing enough to phase out fossil-based energy, and wants a concrete plan to wind down the coal, oil and gas flows whose emissions dwarf those of most countries.
Rotterdam's own industrial cluster currently emits about 29 million tonnes of CO2 a year – roughly half of the Netherlands' domestic emissions, says Mark van Dijk, head of external relations at the Port of Rotterdam Authority.
That's the equivalent of tens of thousands of return flights from Amsterdam to Los Angeles. "It's not good," admits van Dijk.
The Port Authority has a plan to cut the emissions of its own activities and encourage businesses on the site to be greener.
It has set targets to cut its own direct and purchased energy emissions by 90% between 2019 and 2030.
The plan includes developing a hydrogen hub where companies can test new fuels, investing in onshore power so ships can plug into the grid instead of burning fuel at berth, and supporting bunkering of alternatives such as LNG, biofuels and methanol.
There is also an effort to mitigate CO2 emissions.
"In the short term we're focusing on CCS [Carbon Capture and Storage] – capturing CO2 and storing it in depleted gas fields," van Dijk says, referring to the Porthos project that will pipe industrial emissions offshore.
Buffeted by the wind, Advocates for the Future director Maikel van Wissen argues that a port of this scale shouldn't just be managing the flow of fossil fuels. Instead, he argues, it has a responsibility to use its clout to speed up the shift to cleaner operations.
"A state-owned enterprise should take legal obligations on states to reduce emissions," Van Wissen says.
"We are asking in the lawsuit to phase out that dependency, to create alternatives. It takes time, but if you don't have a plan, you always choose cheap short-term solutions. This is an important hub, if you do it in a controlled way, you offer an alternative, that will stop industry from moving elsewhere."
The port says it is making efforts to shift its business model.
"We try to work together with the polluters, and slowly phase them out," says Oscar van Veen, director of innovation at the Port of Rotterdam, speaking on a small boat in the harbour. He pauses, then corrects himself: "As fast as possible, of course."
But many of the biggest emitters in the port answer to headquarters in the US or China.
Their loyalty lies with boardrooms abroad. If the rules in Rotterdam become too tight, they can simply move – as Shell shifted its headquarters to the UK and Unilever left Rotterdam altogether.
"The Port of Rotterdam is a key player in this sustainable transition but their sphere of influence is limited," says Bettina Kampman, from environmental consultancy CE Delft, which works for governments, companies and NGOs.
Even transitioning their own activities to lower emissions comes with challenges.
"New developments need physical space. They can speed up the energy infrastructure developments - the electricity needed to electrify the processes. That's all limited at the moment due to the lack of power cables," Kampman says.
Emeritus professor Harry Geerlings, of Erasmus University Rotterdam, has spent more than three decades studying sustainable transport and ports.
He is sceptical that any single port authority can drive a full transition on its own. What is needed, he says, is a global level playing field – the kind of framework provided in Europe by the Emissions Trading System and past rules on sulphur in marine fuels.
He points out how EU sulphur limits changed behaviour: ships calling at European ports had to switch to cleaner fuels or fit scrubbers to reduce pollution.
China initially resisted, he says, but when its ships could no longer enter US and European ports without complying, it followed suit. "If you have the right incentives, you change the behaviour of these companies."
But there are limits to what regional rules can do. Many ships now sail with dual fuel set ups, burning cleaner, low-sulphur fuel as they enter European waters, then flipping back to cheaper, high sulphur heavy fuel oil once they are out on the high seas.
Geerlings believes Rotterdam's port authority genuinely wants to change and is building the infrastructure for a smoother transition.
"But their biggest income is still tied to fossil fuel industries," he notes. "It's not simply a switch you turn on or off. A port needs activity as a logistics node – otherwise it's no longer a port. It's a real dilemma."
The geopolitics are not always helpful. Across the Atlantic, US President Donald Trump has cast doubt on climate policy and railed against wind power, while offering incentives that favour fossil fuels over renewables.
That contrast sharpens Rotterdam's concern about losing energy intensive industry to regions with looser rules and cheaper power.
Advocates for the Future argues that as a publicly owned company, the Port of Rotterdam Authority should be held to a higher standard.
It wants a detailed phase-out plan for fossil activities, not just a long-term promise of climate neutrality by 2050. "We are not asking for anything extraordinary," says director Maikel van Wissen. "We're asking for a plan that really contributes to a sustainable future for the port."
"We do want the same thing," insists Van Dijk. Sharing an electric taxi back towards the city, a 45-minute drive from the edge of the sprawling port. He stresses that Rotterdam and its critics are, on paper at least, heading for the same destination: net zero around mid century. The disagreement is over how fast, and how radically, to change.
More Technology of Business
- Published12 June
- Published26 June
- Published5 June`,
    bodyJa: `ヨーロッパ最大の港をより環境に優しいものにするよう圧力が高まる
- 公開されました
オランダのフックの草が茂った端に立って、私はロッテルダム港を見下ろしています。
オランダのライン川とムーズ川のデルタ地帯にあり、大部分が北海から埋め立てられた土地にあり、ヨーロッパ国外最大の貨物港です。
見方によっては、ロッテルダムだけでも英国のすべての港を合わせた量とほぼ同じ量の貨物を扱っています。
地平線上には、クレーン、ばら積み貨物船、コンテナの積み重ねが占めており、これらは広大なエネルギーと化学の拠点の目に見える部分です。
シェルの欧州最大の製油所を含む 5 つの製油所が 1 日あたり数十万バレルの原油を処理し、化学工場が密集して大陸中の工場に供給されています。
CE デルフトの調査によると、港を流れる化石燃料は最終的に年間約 600 メガトンの CO2 を排出しており、これはオランダ最大のスキポール空港の CO2 排出量の何倍にもなります。
この規模により、ロッテルダムは、化石燃料で建設された港は本当に環境に優しいものになることができるのかという難しい質問に対するテストケースとなっています。
港湾には何かをするよう圧力が高まっている。
環境保護団体「未来のためのアドボケート」が起こした訴訟では、ロッテルダム港湾管理局は化石燃料エネルギーの段階的廃止に十分な努力をしていないと主張し、ほとんどの国に比べて排出量が少ない石炭、石油、ガスの排出量を削減するための具体的な計画を求めている。
ロッテルダム港湾公社の対外関係責任者、マーク・ファン・ダイク氏によると、ロッテルダム自身の産業クラスターは現在、年間約2,900万トンのCO2を排出しているが、これはオランダ国内の排出量の約半分に相当するという。
これはアムステルダムからロサンゼルスまでの往復航空券数万便に相当します。 「それは良くない」とファン・ダイクは認める。
港湾局は、自らの活動による排出量を削減し、敷地内での企業の環境への配慮を奨励する計画を立てています。
同社は2019年から2030年までに自社の直接および購入したエネルギー排出量を90％削減するという目標を設定している。
この計画には、企業が新しい燃料をテストできる水素ハブの開発、船舶が停泊時に燃料を燃やす代わりに送電網に接続できるように陸上電力に投資すること、LNG、バイオ燃料、メタノールなどの代替燃料の補給をサポートすることが含まれている。
CO2排出量を削減する取り組みも行われています。
「短期的には、CO2を回収して枯渇したガス田に貯蔵するCCS（炭素回収・貯蔵）に注力している」とファン・ダイク氏は産業排出物を海洋にパイプするポルトス・プロジェクトについて言及した。
風を受けながらも、「未来のための権利擁護団体」のディレクター、マイケル・ファン・ウィッセン氏は、この規模の港は化石燃料の流れを管理するだけではいけないと主張する。むしろ、その影響力を利用してよりクリーンな運営への移行を加速する責任がある、と同氏は主張する。
「国有企業は州に対して排出量を削減する法的義務を負うべきだ」とヴァン・ウィッセン氏は言う。
「私たちは訴訟でその依存関係を段階的に廃止し、代替案を作成するよう求めています。時間はかかりますが、計画がなければ、常に安価な短期的な解決策を選択します。これは重要な拠点です。管理された方法で実行すれば、代替案を提供することになり、業界が他の場所に移動するのを阻止することになります。」
同港はビジネスモデルの転換に取り組んでいるとしている。
「私たちは汚染者と協力し、徐々に汚染者を排除しようと努めています」とロッテルダム港のイノベーション担当ディレクター、オスカー・ヴァン・フェーン氏は港の小型ボート上で語った。彼は立ち止まり、「もちろんできるだけ早く」と訂正した。
しかし、港湾の最大排出者の多くは米国または中国の本社に回答している。
彼らの忠誠心は海外の役員室にあります。シェルが本社を英国に移転し、ユニリーバがロッテルダムを完全に撤退したため、ロッテルダムの規則が厳しくなりすぎた場合は、移転するだけで済みます。
「ロッテルダム港はこの持続可能な移行において重要な役割を果たしていますが、その影響範囲は限られています」と政府、企業、NGOのために活動する環境コンサルタント会社CEデルフトのベッティーナ・カンプマン氏は言う。
自らの活動を排出量削減に移行するにも課題が伴います。
「新たな開発には物理的なスペースが必要です。エネルギーインフラの開発、つまりプロセスを電動化するために必要な電力の開発をスピードアップすることができます。電力ケーブルが不足しているため、現時点ではそれがすべて制限されています」とカンプマン氏は言う。
エラスムス大学ロッテルダム名誉教授ハリー・ギアリングス氏は、30年以上にわたって持続可能な交通と港湾の研究に取り組んできた。
同氏は、単一の港湾局が単独で完全な移行を推進できるかどうかについては懐疑的である。必要なのは、世界的に平等な競争の場、つまり排出権取引制度や海洋燃料中の硫黄に関する過去の規則によってヨーロッパで提供されているような枠組みだ、と同氏は言う。
同氏は、EUの硫黄制限によって行動がどのように変化したかを指摘し、ヨーロッパの港に寄港する船舶は、汚染を軽減するためによりクリーンな燃料に切り替えるか、スクラバーを装着する必要があった。
同氏によると、中国は当初は抵抗したが、中国の船舶が従わなければ米国や欧州の港に入港できなくなると、それに従ったという。 「適切なインセンティブがあれば、これらの企業の行動を変えることができます。」
しかし、地域のルールにできることには限界があります。現在、多くの船は二重燃料設定で航行しており、ヨーロッパの海域に入る際にはよりクリーンで低硫黄の燃料を燃焼させ、公海上に出るとより安価な高硫黄の重油に切り替えています。
ギアリングス氏は、ロッテルダムの港湾局が本気で変化を望んでおり、よりスムーズな移行のためのインフラを構築していると信じている。
「しかし、彼らの最大の収入は依然として化石燃料産業に依存している」と彼は指摘する。 「それは単にスイッチをオンまたはオフにするものではありません。港には物流ノードとしての活動が必要です。そうでなければ、港はもはや港ではありません。これは本当のジレンマです。」
地政学は必ずしも役に立つとは限りません。大西洋の向こうでは、ドナルド・トランプ米大統領が気候変動政策に疑問を投げかけ、風力発電を激しく非難する一方で、再生可能エネルギーよりも化石燃料を優遇する奨励金を提示している。
このコントラストは、ルールが緩く電力料金が安い地域にエネルギー集約型産業が奪われるのではないかというロッテルダムの懸念をさらに強めている。
Advocates for the Futureは、上場企業としてロッテルダム港管理局はより高い基準を遵守すべきだと主張している。
同政府は、2050年までに気候中立性を保つという長期的な約束だけでなく、化石活動の詳細な段階的廃止計画を求めている。「我々は特別なことを求めているわけではない」とディレクターのマイケル・ファン・ウィッセン氏は言う。 「私たちは港の持続可能な未来に真に貢献する計画を求めています。」
「私たちも同じことを望んでいます」とファン・ダイクは主張する。電気タクシーに乗って、広大な港の端から車で 45 分の市内に戻ります。同氏は、ロッテルダムとその批判者たちは、少なくとも建前上は同じ目的地、つまり今世紀半ば頃にネットゼロを目指していると強調する。意見の相違は、どれだけ早く、どれだけ根本的に変化するかという点にある。
ビジネスのさらなるテクノロジー
- 6 月 12 日発行
- 6 月 26 日発行
- 6 月 5 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c39y78rwrmno?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-09T23:00:51+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/c82f/live/34e11c20-7397-11f1-b1db-af71d47507d6.jpg",
    readTime: 8,
  },
  {
    id: "we-saved-6-000-on-holidays-by-swapping-h-c1c018dc",
    title: "We saved £6,000 on holidays by swapping homes with strangers",
    titleJa: "休日に見知らぬ人と家を交換して6,000ポンドを節約しました",
    summaryJa: "休日に見知らぬ人と家を交換して6,000ポンドを節約しました- 公開されました",
    bodyOriginal: `We saved £6,000 on holidays by swapping homes with strangers
- Published
Would you swap homes with a stranger in exchange for a cheaper holiday? Or would the idea of someone sleeping in your bed and using your kitchen while you were away put you off?
Henry Vanderpump, 42, his wife Elliw, 39, and their two young children have had two home exchange holidays in the past two years and have another planned this summer.
In each case, they have stayed in another family's home, while that family stays in theirs, a five-bedroom house in Tarporley, rural Cheshire.
Neither side pays anything for their accommodation, although they do pay an annual membership fee to Home Link, the listings site they use to book the trips.
So far, the Vanderpumps have stayed in similarly sized properties in Hamburg and Copenhagen, and Henry says they have saved around £2,500 on accommodation per trip, plus a further £700 on transport, as they also swapped cars.
"We used to have one holiday a summer, now we have two [because of the savings we make from home exchanges]. And the kids love the idea of living in someone else's house while that person is living in theirs."
Home exchanges have been around since at least the 1950s, but an increasing number of people seem to be embracing them because of the rising cost of living, or simply to experience a new type of travel, commentators say.
'We lived like a German family'
Henry says the best thing about swapping homes isn't the savings but getting to visit places off the tourist trail and have a "really authentic experience".
When the family visited Hamburg in 2024, they stayed in a suburb and lived "like a German family" for a week, exploring lakes on the edge of the city recommended by their hosts.
Last year, they stayed in "a very Scandinavian house" in suburban Copenhagen, which was "all on one level and had no clutter".
"They also left us several electric bikes to use," Henry says. "We cycled to the beach, swam in the Baltic and tried restaurants they recommended."
Some people are not comfortable with the idea of strangers staying in their home, and for those who are, there's a lot of preparation and tidying to do before their guests arrive.
Home swappers may also have to be more flexible about when they travel - Home Link says members typically send 10-15 messages before getting an offer.
"Last minute bookings won't always work," says May Burrough, 38, a chief operating officer from London who has done 34 home swaps over the last three years using HomeExchange.
Rather than doing direct exchanges, she hosts people in her central London flat while she's overseas staying with her partner in France.
This way, May builds up points on the platform she can use to book trips at other times.
How to home swap successfully
If you are putting your home on a booking platform, make the listing clear, with plenty of information and appealing photos
Keep in contact before and during the exchange to build trust and avoid misunderstandings
Declutter and make space in wardrobes, drawers and cupboards your guests will use
Leave a comprehensive guide for guests, covering things like appliance instructions, rubbish collection and emergency information
Share local recommendations to help them get the most out of their stay
Lock away items of value to avoid them being damaged
Check that your home insurance policy provides the cover you need
Sources: Home Link, HomeExchange, the Association of British Insurers
May reckons she has saved about £5,000-£8,000 through swaps in places like Barcelona and the Swiss Alps.
She loves the "community feel" of home exchanges and says she's only ever had one "semi-negative experience" when a booking she thought was for a whole flat turned out to be a room in a flat share.
As for preparation before guests arrive, she says she tries to make sure her flat is clean and clears some space in her wardrobe. "I provide clean sheets and towels. I lock away valuables."
The main home-swap listings platforms vet their members and invite them to review one another.
But the Association of British Insurers advises hosts to check that their home and contents insurance provides the cover they need before hosting guests.
It also says it is worth checking your travel insurance before staying in someone else's home to check it covers accidental damage.
Petra Novak, who uses the home swap site Kindred, says the platform's own damage protection policy has covered her on the few occasions something was damaged in her London flat.
The 34-year-old, who uses the platform as she works remotely around Europe, says she has saved some £18,000-£20,000 through home exchanges.
She says she was nervous about swapping homes with strangers at first but has never had a bad experience.
However, for added peace of mind, she likes to check out the social media profiles of prospective guests, adding that a personal touch can help build trust before an exchange.
"I personally like when someone submits their booking request along with a nice introduction letter, telling me about themselves and the reason why they would be visiting London."`,
    bodyJa: `休日に見知らぬ人と家を交換して6,000ポンドを節約しました
- 公開されました
より安価な休暇と引き換えに、見知らぬ人と家を交換しますか?それとも、あなたがいない間に誰かがあなたのベッドで寝ていてキッチンを使うと思うと嫌になりますか?
ヘンリー・ヴァンダーポンプさん（42歳）と妻のエリーさん（39歳）、そして二人の幼い子供たちは、過去2年間に2回自宅交換休暇を過ごしており、この夏にはもう一つの休暇を計画している。
いずれの場合も、彼らは別の家族の家に滞在し、その家族はチェシャーの田舎、ターポーリーにある寝室が5つある自分たちの家に滞在している。
どちらも宿泊費は一切支払わないが、旅行の予約に利用する物件情報サイト「ホームリンク」には年会費を支払っている。
これまでヴァンダーポンプ一家はハンブルクとコペンハーゲンにある同様の広さの物件に滞在しており、ヘンリーさんによると、旅行ごとに宿泊費が約2,500ポンド、さらに車も交換したため、交通費がさらに700ポンド節約できたという。
「以前は夏に1回の休暇がありましたが、今は（住宅交換で得た節約のおかげで）2回あります。そして、子供たちは、その人が自分の家に住んでいる間、他の人の家に住むというアイデアが大好きです。」
コメンテーターらによると、ホームエクスチェンジは少なくとも1950年代から存在しているが、生活費の上昇を理由に、あるいは単に新しいタイプの旅行を体験するためにこれを受け入れる人が増えているようだという。
「私たちはドイツ人の家族のように暮らしました」
ヘンリーさんは、家を交換する一番の利点は節約ではなく、観光コースから外れた場所を訪れて「本当に本物の体験」ができることだと語った。
2024年に家族がハンブルクを訪れたとき、家族は郊外に滞在し、ホストの勧めで市外れの湖を探索しながら「ドイツ人の家族のように」1週間暮らした。
昨年、夫妻はコペンハーゲン郊外にある「まさにスカンジナビア風の家」に滞在したが、そこは「すべてが同じ階にあり、散らかったものは何もなかった」という。
「彼らはまた、私たちに使用できる電動自転車を数台残してくれました」とヘンリーは言います。 「私たちは自転車でビーチに行き、バルト海で泳ぎ、彼らが勧めてくれたレストランを試しました。」
見知らぬ人が家に泊まるという考えに抵抗を感じる人もいます。そのような人にとっては、ゲストが到着する前にたくさんの準備や片付けをしなければなりません。
ホーム交換者は旅行の時期についてもより柔軟になる必要があるかもしれない - Home Link によると、メンバーはオファーを得る前に通常 10 ～ 15 件のメッセージを送信するという。
「直前の予約が常にうまくいくとは限りません」と、HomeExchange を使用して過去 3 年間で 34 件の住宅交換を行ったロンドン在住の最高執行責任者、メイ バロー氏 (38 歳) は言います。
彼女は、フランスにいるパートナーと一緒に海外に滞在している間、直接的な交流を行うのではなく、ロンドン中心部のアパートで人々を受け入れています。
このようにして、メイさんはプラットフォーム上にポイントを貯め、別の機会に旅行を予約するために使用できます。
ホームスワップを成功させる方法
自宅を予約プラットフォームに掲載する場合は、豊富な情報と魅力的な写真を掲載し、明確なリストを作成してください。
信頼を築き、誤解を避けるために、交換前および交換中に連絡を取り続けます。
ゲストが使用するワードローブ、引き出し、食器棚を整理してスペースを作ります
家電製品の説明書、ゴミの収集、緊急情報などを網羅した包括的なガイドをゲスト向けに残してください。
滞在を最大限に楽しむために地元のおすすめ情報を共有する
貴重品は破損しないように鍵をかけて保管してください
住宅保険契約が必要な補償を提供しているかどうかを確認してください
出典: Home Link、HomeExchange、英国保険会社協会
メイさんは、バルセロナやスイスアルプスなどでの交換を通じて、約5000ポンドから8000ポンドを節約したと考えている。
彼女はホームエクスチェンジの「コミュニティ感」が大好きで、アパート全体を予約すると思っていたのにアパートシェアの一室だったことが判明したときの「半否定的な経験」は一度だけだという。
ゲストが到着する前の準備に関しては、アパートを清潔にし、ワードローブにスペースを空けるように努めていると彼女は言います。 「清潔なシーツとタオルを提供します。貴重品は鍵をかけて保管します。」
主要な住宅交換物件プラットフォームは会員を精査し、相互にレビューするよう招待しています。
しかし、英国保険協会はホストに対し、ゲストを迎える前に、住宅保険や生活物品保険が必要な補償を提供しているかどうかを確認するようアドバイスしている。
また、他人の家に滞在する前に、旅行保険が偶発的な損害をカバーしているかどうかを確認する価値があるとも述べています。
住宅交換サイト「Kindred」を利用しているペトラ・ノバクさんは、ロンドンのアパートで何かが破損したことは数回あったが、プラットフォーム独自の損害補償ポリシーでカバーされていると語った。
ヨーロッパ各地でリモートで仕事をする際にこのプラットフォームを利用している34歳の彼女は、ホームエクスチェンジを通じて約1万8000ポンドから2万ポンドを節約したと語る。
最初は見知らぬ人と家を交換することに緊張したが、悪い経験は一度もなかったと彼女は言う。
しかし、さらに安心感を与えるために、彼女は見込み客のソーシャルメディアのプロフィールをチェックするのが好きで、交流の前に個人的なタッチをすることで信頼を築くことができると付け加えました。
「個人的には、誰かが自分自身のことやロンドンを訪れる理由を伝える素敵な紹介状と一緒に予約リクエストを提出するのが好きです。」`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/ce8kkerxz74o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-09T23:00:38+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/9834/live/74796a60-7b6a-11f1-936a-038dbfe02d14.jpg",
    readTime: 6,
  },
  {
    id: "new-fed-task-force-members-share-chairma-a4b75285",
    title: "New Fed task force members share Chairman Kevin Warsh's embrace of AI",
    titleJa: "FRB特別委員会の新メンバーがケビン・ウォーシュ議長のAIへの支持を共有",
    summaryJa: "ケビン・ウォーシュ議長は木曜日、連邦準備理事会に外部の考え方を導入することを目的とした一連の特別委員会には「最も優れた頭脳」が含まれると述べた。 FRBの経済運営に特に影響を与える可能性のある人工知能に関する特別委員会にとって、外部の人々は皆同じ方向を向いているようだ。ウォーシュ氏の AI タスクフォースのメンバーは全員、AI が成長と生産性に広範囲に影響を与える革新的なテクノロジーになると信じているようだ。それはウォーシュ自身の見解と一致する。彼は特別委員会のメンバーを個人的に選出した。",
    bodyOriginal: `A series of task forces designed to bring outside thinking to the Federal Reserve will include the "best minds," Chairman Kevin Warsh said Thursday. For a task force that could be especially consequential for the Fed's management of the economy — on artificial intelligence — those outside minds all seem to lean in the same direction.
Warsh's AI task force members all appear to believe AI will be a transformative technology, with far-reaching effects on growth and productivity. That lines up with Warsh's own views. He selected the task-force members personally.
The AI task force was one of five the Fed rolled out Thursday. Its formal charge is to "assess the economic impact of new general-purpose technologies, including artificial intelligence, to inform the Federal Reserve's policy judgments." It will be led by three external advisors: venture capitalist Marc Andreessen, economist Charles I. Jones, and Xbox CEO Asha Sharma.
All have recently spoken or written in sharply positive terms about the effects of AI on the economy.
The Fed chairman is a longtime proponent of the potentially transformative economic potential of AI. Its adoption is "perhaps as important a change in the economy and business and households that we've had in my adult lifetime," Warsh said in June at his first press conference as chairman.
He said in 2025 that he believed advancements in AI would be a reason for the Fed to cut interest rates, because it would help the economy to grow quickly without raising inflation.
Warsh has been personal friends with Andreessen for decades. Warsh also ran venture-capital investments for investor Stanley Druckenmiller after a stint at the Fed that ended in 2011. That expanded his Silicon Valley network — and his wealth.
Andreessen made a fortune creating some of the internet's earliest web browsers and is now one of AI's most vocal evangelists. "We've turned sand into thought," Andreessen told podcaster Joe Rogan in May, referencing the silicon that is the physical basis for AI chips.
Jones, the economist, shares much of Andreessen's West Coast optimism. Jones recently went on leave from Stanford University to join the Anthropic Institute, part of leading AI firm Anthropic. Jones's academic work recently has focused on the effects of AI on economic growth, making him an important voice in Warsh's efforts to bring the Fed around to his point of view.
Jones noted in a recent paper that U.S. growth per capita has consistently averaged 2% over much of U.S. history. "Nevertheless, if AI eventually automates away nearly all the weak links in the economy, economic growth could accelerate significantly, with rates potentially exceeding 5 percent per year," he wrote.
The paper analyzes what Jones identifies as weak links — aspects of the economy that will be difficult to automate — and considers lower potential growth rates as well. But Jones writes bluntly that AI "will likely be the most transformative technology of the modern era."
Sharma, who in February became CEO of Microsoft's Xbox gaming business, has made strong statements in support of AI. But as the leader of an operating business, she made the rare decision not to prioritize AI. Even as Microsoft incorporates AI into all aspects of its products, Sharma opted not to put it front and center on Xbox, she said in a recent Bloomberg interview.
"Our console players aren't excited about that experience," Sharma said.
But that doesn't make her a skeptic. "Now, do I believe in AI? Absolutely," she said.
The three task force members didn't immediately respond to a request for comment. The Fed declined to comment.
Where Warsh may encounter skeptics is on the Federal Open Market Committee, which has the power to set interest rates. FOMC members discussed at its June meeting the question of whether AI can raise productivity, minutes from the discussion released this week show. Some FOMC participants bought into the idea that productivity would speed up, the minutes said.
And yet they weren't fully sold. "These participants remarked, however, that considerable uncertainty remained regarding both the timing and magnitude of potential productivity gains, which were expected to lag the ongoing boost of AI adoption on demand."
Meanwhile, U.S. tech firms' headlong embrace of AI is starting to heat the economy. New York Fed President John Williams on Thursday said he was concerned about price increases in electricity and semiconductors from the AI boom.
Prices have risen like a "hockey stick," with some components doubling and tripling, Williams said. AI is a "demand shock," he said, adding that it is unclear if supply will grow alongside it, which would be necessary to keep inflation down.
The Fed meets again at the end of July, when it is expected to hold interest rates steady. The task forces are expected to finish their work by the end of the year.`,
    bodyJa: `ケビン・ウォーシュ議長は木曜日、連邦準備理事会に外部の考え方を導入することを目的とした一連の特別委員会には「最も優れた頭脳」が含まれると述べた。 FRBの経済運営に特に影響を与える可能性のある人工知能に関する特別委員会にとって、外部の人々は皆同じ方向を向いているようだ。
ウォーシュ氏の AI タスクフォースのメンバーは全員、AI が成長と生産性に広範囲に影響を与える革新的なテクノロジーになると信じているようだ。それはウォーシュ自身の見解と一致する。彼は特別委員会のメンバーを個人的に選出した。
AIタスクフォースはFRBが木曜日に展開した5つのうちの1つだった。その正式な任務は、「連邦準備制度の政策判断に情報を提供するために、人工知能を含む新しい汎用技術の経済的影響を評価する」ことである。ベンチャーキャピタリストのマーク・アンドリーセン氏、経済学者のチャールズ・I・ジョーンズ氏、Xbox CEOのアシャ・シャルマ氏という3人の外部アドバイザーが率いることになる。
全員が最近、AI が経済に及ぼす影響について非常に肯定的な言葉で話したり書いたりしています。
FRB議長は長年、AIが経済に変革をもたらす可能性を提唱している。ウォーシュ氏は6月、会長として初めての記者会見で、この政策の導入は「おそらく私が成人してから経験したのと同じくらい重要な経済、企業、家計の変化だ」と述べた。
同氏は、AIの進歩がインフレ率を上昇させることなく経済の急速な成長を促すため、2025年にはFRBが利下げする理由になるとの考えを示した。
ウォーシュはアンドリーセンと数十年来の個人的な友人だ。ウォーシュ氏はまた、2011年にFRB勤務を終えた投資家スタンリー・ドラッケンミラー氏のためにベンチャーキャピタルへの投資も行った。これにより彼のシリコンバレーのネットワークと富が拡大した。
アンドリーセン氏は、インターネットの初期の Web ブラウザーのいくつかを作成して富を築き、現在では AI の最も声高な伝道者の 1 人です。 「私たちは砂を思考に変えました」とアンドリーセン氏は5月にポッドキャスターのジョー・ローガン氏に語り、AIチップの物理的基盤であるシリコンに言及した。
経済学者のジョーンズ氏は、アンドリーセン氏の西海岸の楽観主義に多くの共感を抱いている。ジョーンズ氏は最近、大手AI企業アンスロピック社の一部であるアンスロピック研究所に入社するため、スタンフォード大学を休学した。ジョーンズ氏の学術研究は最近、AIが経済成長に及ぼす影響に焦点を当てており、FRBを自分の視点に近づけようとするウォーシュ氏の取り組みにおいて重要な発言者となっている。
ジョーンズ氏は最近の論文で、米国の歴史の大部分において、米国の一人当たりの成長率は一貫して平均2%であったと指摘した。 「それでも、最終的にAIが経済の脆弱な部分のほぼすべてを自動化すれば、経済成長は大幅に加速し、その率は年間5％を超える可能性がある」と同氏は書いた。
この論文は、ジョーンズ氏が弱点として特定したもの、つまり自動化が困難な経済の側面を分析し、潜在成長率の低下についても考慮しています。しかしジョーンズ氏は、AIは「おそらく現代で最も革新的なテクノロジーになるだろう」と率直に書いている。
2月にマイクロソフトのXboxゲーム事業のCEOに就任したシャルマ氏は、AIを支持する強い発言をしている。しかし、運営ビジネスのリーダーとして、彼女は AI を優先しないという珍しい決断を下しました。マイクロソフトは AI を自社製品のあらゆる側面に組み込んでいますが、シャルマ氏はそれを Xbox の中心に据えることを選択しなかった、と最近のブルームバーグのインタビューで述べました。
「当社のコンソールプレイヤーはその体験に興奮していません」とシャルマ氏は語った。
しかし、だからといって彼女が懐疑的になるわけではない。 「さて、私はAIを信じますか？もちろん信じます」と彼女は言った。
特別委員会のメンバー３人はコメントの要請に応じていない。 FRBはコメントを控えた。
ウォーシュ氏が懐疑論者に遭遇する可能性があるのは、金利を設定する権限を持つ連邦公開市場委員会だ。今週公表された議論の議事録によると、FOMCメンバーらは6月の会合でAIが生産性を向上できるかどうかという問題について議論した。議事要旨によると、一部のＦＯＭＣ参加者は生産性が向上するという考えを支持したという。
しかし、まだ完全には売れていませんでした。 「しかし、これらの参加者は、潜在的な生産性向上のタイミングと規模の両方に関してかなりの不確実性が残っており、オンデマンドでの AI 導入の継続的な促進に遅れることが予想されると述べた。」
その一方で、米国のハイテク企業による AI への真っ向からの取り組みが経済を加熱し始めている。ニューヨーク連銀のウィリアムズ総裁は木曜日、AIブームによる電力と半導体の価格上昇を懸念していると述べた。
ウィリアムズ氏によると、価格は「ホッケーのスティック」のように上昇し、一部の部品では2倍、3倍になっているという。同氏はAIは「需要ショック」であると述べ、インフレ抑制に必要となる供給もそれに伴って増加するかどうかは不透明だと付け加えた。
FRBは7月末に再び会合を開き、金利は据え置かれると予想されている。対策本部は年末までに作業を完了する予定だ。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/09/fed-task-force-member-chairman-kevin-warsh-ai.html",
    publishedAt: "2026-07-09T23:00:10+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 6,
  },
  {
    id: "taco-bell-is-reportedly-pulling-produce-9f9b2ad6",
    title: "Taco Bell is reportedly pulling produce from some stores. Here’s what to know.",
    titleJa: "タコベルは一部の店舗から農産物を撤去していると伝えられている。ここで知っておくべきことは次のとおりです。",
    summaryJa: "ミシガン州では、寄生虫が原因の病気が発生し、1,000人以上が罹患している。",
    bodyOriginal: `An outbreak of a parasite-caused illness has sickened more than 1,000 people in Michigan.`,
    bodyJa: `ミシガン州では、寄生虫が原因の病気が発生し、1,000人以上が罹患している。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/taco-bell-is-reportedly-pulling-produce-from-some-stores-heres-what-to-know-a3569cd8?mod=mw_rss_topstories",
    publishedAt: "2026-07-09T22:30:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-879242",
    readTime: 2,
  },
  {
    id: "why-a-hidden-divergence-between-the-vix-44cc4028",
    title: "Why a hidden divergence between the VIX and Nasdaq volatility has the smart money on edge",
    titleJa: "VIX とナスダックのボラティリティの間に隠れた乖離があり、賢いマネーが危機に瀕している理由",
    summaryJa: "トレーダーは強気市場に完全に魅了されていますが、ナスダックのボラティリティの急上昇は、ヘッジの時期が来たことを示唆しています。",
    bodyOriginal: `Traders are completely enthralled by the bull market — but surging Nasdaq volatility suggests it is time to hedge.`,
    bodyJa: `トレーダーは強気市場に完全に魅了されていますが、ナスダックのボラティリティの急上昇は、ヘッジの時期が来たことを示唆しています。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/why-a-hidden-divergence-between-the-vix-and-nasdaq-volatility-has-the-smart-money-on-edge-cda23cc0?mod=mw_rss_topstories",
    publishedAt: "2026-07-09T22:19:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-615981",
    readTime: 2,
  },
  {
    id: "kevin-warsh-names-members-of-his-federal-7d7af9cd",
    title: "Kevin Warsh names members of his Federal Reserve task forces, including Marc Andreessen, Doug McMillon",
    titleJa: "ケビン・ウォーシュはマーク・アンドリーセン、ダグ・マクミロンらを連邦準備制度の特別委員会のメンバーに指名",
    summaryJa: "FRBのケビン・ウォーシュ議長は木曜日、FRBの運営を調査するための5つの特別委員会を構成する専門家の名前を発表した。そのリストにはウォール街の著名人、ビジネスリーダー、そして広範囲にわたる学者や元FRB関係者が含まれている。ウォーシュ氏は先月初めて特別委員会を設置する意向を明らかにし、コミュニケーション、データ、FRBのバランスシート、データ、生産性、雇用、政策立案者のインフレに対する見方の枠組みに取り組むと述べた。同グループは、ウォーシュ氏が約束した金融政策の見直しの一環として、インフレから人工知能まであらゆるものに取り組む予定だ。",
    bodyOriginal: `Federal Reserve Chairman Kevin Warsh on Thursday released names of the experts who will comprise five task forces to examine the institution's operations — a list that includes several prominent Wall Street names, business leaders and a wide expanse of academicians and former Fed officials.
Warsh first disclosed his intention to create the task forces last month, saying they would tackle communications, data, the Fed's balance sheet, data, productivity and jobs and the framework for how the policymakers view inflation. The group's will tackle everything from inflation to artificial intelligence as part of Warsh's promised review of monetary policy.
Among the prominent names involved are venture capitalist Marc Andreessen, former Bank of England Governor Mervin King, and Greg Mankiw, former chairman of the White House's Council of Economic Advisers. Doug McMillon, the former CEO of Walmart, leads the names of business executives involved. Several of the names, including King, had been leaked previously.
"I am honored that the best minds from a range of disciplines have agreed to work with us to sharpen our performance as an institution," Warsh said. "The goal is straightforward: to ensure the Fed is best positioned to achieve our objectives in this consequential time."
A Fed news release did not indicate a timeline of when the task forces would complete their work, though Warsh has said he expects changes to come this year.
The statement also noted that the panels will "operate independently, with a mandate to follow the evidence, provide candid feedback, and produce rigorous findings" that will be reported back to officials on the Federal Open Market Committee.
Members represent a swath of interests, spanning ideologies and backgrounds.
Others named to the task forces include Raghuram Rajan, former governor the Reserve Bank of India; former Fed Governor Jeremy Stein and William White, a Canadian economist who warned about central bank easy money prior to the 2008 global financial crisis.
For Andreesen, this is the second prominent appointment in recent days, having been named in late June to the U.S. Defense Policy Board, a civilian advisory group for the Pentagon. Andreesen is on the productivity and jobs task force.
When he initially announced the task forces, Warsh, who has been chairman for less than two months, said the groups would "start with first principles; ask hard questions; examine current practice; consider alternatives; and, ultimately, propose next steps for policymaker consideration."
The chairman said in the Thursday announcement that the Fed has "resolve to pursue our mandate with rigor."
The task forces are expected to take a sharp look at Fed orthodoxy. Warsh already has had an impact on Fed communications as officials look to provide less guidance about where policy is headed and focus more on their "reaction function," or the conditions under which they will adjust interest rates. The post-meeting statement in June was notably shorter than prior versions.
The members of the task forces are:
Communications: Peter R. Fisher, professor of practice, Foster School of Business, University of Washington; Arminio Fraga, founder and chairman, Gávea Investimentos and the former president of the Central Bank of Brazil; and King.
Balance Sheet Policy: Karen Dynan, Harvard economist; Rajan and Stein.
Data: McMillon, Harvard economist Raj Chetty and University of Chicago economist Kevin Murphy.
Productivity and Jobs: Andreesen, Stanford economist Charles I. Jones, and Asha Sharma, executive vice president and XBOX CEO at Microsoft.
Inflation Frameworks: Mankiw, White and New York University economist Thomas Sargent.
The groups will be supported as well by Fed staff.`,
    bodyJa: `FRBのケビン・ウォーシュ議長は木曜日、FRBの運営を調査するための5つの特別委員会を構成する専門家の名前を発表した。そのリストにはウォール街の著名人、ビジネスリーダー、そして広範囲にわたる学者や元FRB関係者が含まれている。
ウォーシュ氏は先月初めて特別委員会を設置する意向を明らかにし、コミュニケーション、データ、FRBのバランスシート、データ、生産性、雇用、政策立案者のインフレに対する見方の枠組みに取り組むと述べた。同グループは、ウォーシュ氏が約束した金融政策の見直しの一環として、インフレから人工知能まであらゆるものに取り組む予定だ。
関与した著名人の中には、ベンチャーキャピタリストのマーク・アンドリーセン氏、元イングランド銀行総裁マービン・キング氏、元ホワイトハウス経済諮問委員長グレッグ・マンキュー氏などが含まれる。ウォルマートの元最高経営責任者（CEO）であるダグ・マクミロン氏が、関与した企業幹部の名前を率いている。キング氏を含む数人の名前は以前にリークされていた。
「さまざまな分野の最高の人材が、機関としてのパフォーマンスを向上させるために私たちと協力することに同意したことを光栄に思います」とウォーシュ氏は述べた。 「目標は単純明快で、この重大な時期にFRBが目標を達成するために最適な立場にあることを保証することだ。」
FRBのニュースリリースでは、タスクフォースがいつ作業を完了するかについてのスケジュールは示されていないが、ウォーシュ総裁は今年中に変更が加えられると予想していると述べた。
声明ではまた、委員会は「証拠を追跡し、率直なフィードバックを提供し、厳密な調査結果を生み出すという使命のもと、独立して運営」され、それらの調査結果は連邦公開市場委員会の当局者に報告されると述べた。
メンバーは、イデオロギーや背景にまたがる幅広い関心を代表しています。
特別委員会に指名された他のメンバーには、元インド準備銀行総裁のラグラム・ラジャン氏も含まれる。元FRB総裁のジェレミー・スタイン氏と、2008年の世界金融危機前に中央銀行のイージーマネーについて警告したカナダの経済学者ウィリアム・ホワイト氏。
アンドリーセン氏にとって、これは、6月下旬に国防総省の文民諮問機関である米国国防政策委員会のメンバーに指名されて以来、ここ数日で2度目の重要な任命となる。アンドリーセン氏は生産性と雇用の特別委員会に所属している。
委員長に就任して2カ月も経っていないウォーシュ氏は、最初にタスクフォースの設立を発表した際、各グループが「第一原則から始め、厳しい質問をし、現在の慣行を調査し、代替案を検討し、最終的には政策立案者の検討のために次のステップを提案する」と述べた。
議長は木曜日の発表で、FRBは「我々の任務を厳格に遂行する決意」をしていると述べた。
特別委員会はFRBの正統性を厳しく検討すると予想されている。当局者が政策の方向性についてのガイダンスをあまり提供せず、「反応機能」、つまり金利を調整する条件に重点を置く傾向にあるため、ウォーシュ氏はすでにFRBのコミュニケーションに影響を与えている。 6月の会合後の声明は、以前の声明に比べて著しく短かった。
タスクフォースのメンバーは次のとおりです。
コミュニケーション: ピーター R. フィッシャー、ワシントン大学フォスター ビジネス スクール実践教授。アルミニオ・フラガ氏、Gávea Investimentos の創設者兼会長、ブラジル中央銀行の元総裁。そしてキング。
バランスシート政策: カレン・ダイナン、ハーバード大学の経済学者。ラージャンとスタイン。
データ: マクミロン、ハーバード大学の経済学者ラジ・チェッティ、シカゴ大学の経済学者ケビン・マーフィー。
生産性と雇用: アンドリーセン氏、スタンフォード大学の経済学者チャールズ I. ジョーンズ氏、およびマイクロソフトの執行副社長兼 XBOX CEO のアシャ シャルマ氏。
インフレの枠組み: マンキュー、ホワイト、ニューヨーク大学の経済学者トーマス・サージェント。
これらのグループはFRB​​スタッフからも支援される予定だ。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/09/kevin-warsh-names-members-of-his-federal-reserve-task-forces-including-marc-andreessen-doug-mcmillon.html",
    publishedAt: "2026-07-09T19:53:20+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 4,
  },
  {
    id: "new-ex-elon-etfs-let-you-avoid-spacex-an-66f8d4c6",
    title: "New ‘Ex-Elon’ ETFs let you avoid SpaceX and Tesla — but are they just a gimmick?",
    titleJa: "新しい「Ex-Elon」ETF を使えば、SpaceX と Tesla を回避できますが、単なる仕掛けなのでしょうか?",
    summaryJa: "ある専門家は、Subversiveの新しいETFが有意義な形で普及するかどうかを疑っている。",
    bodyOriginal: `One expert doubts that new ETFs from Subversive will catch on in a meaningful way.`,
    bodyJa: `ある専門家は、Subversiveの新しいETFが有意義な形で普及するかどうかを疑っている。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/new-ex-elon-etfs-let-you-avoid-spacex-and-tesla-but-are-they-just-a-gimmick-e872d762?mod=mw_rss_topstories",
    publishedAt: "2026-07-09T19:52:00+00:00",
    category: "自動車",
    imageUrl: "https://images.mktw.net/im-33044798",
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
    publishedAt: "2026-07-09T19:49:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-73352954",
    readTime: 2,
  },
  {
    id: "a-huge-trade-just-happened-on-the-nasdaq-310066f2",
    title: "A huge trade just happened on the Nasdaq 100. Bulls are taking notice",
    titleJa: "ナスダック 100 で大規模な取引が起こった。強気派が注目している",
    summaryJa: "木曜日のインベスコQQQトラストETFの単独最大の取引が何らかの兆候であれば、ハイテク強気派は新高値をそれほど長く待つ必要はないかもしれない。同トレーダーは、今月末までにナスダック100指数が史上最高値を更新する必要がある3部構成のコールスプレッド、確信度の高い方向性の賭け、そして木曜日に取引された全オプションの中で3番目に大きな取引に2400万ドルを費やした。",
    bodyOriginal: `Tech bulls may not have to wait much longer for fresh highs, if the single-biggest trade in the Invesco QQQ Trust ETF on Thursday is any indication.
The trader spent $24 million on a three-part call spread that needs the Nasdaq-100 index to make an all-time high by the end of this month, a high-conviction directional bet and the third-biggest trade among all options exchanged on Thursday.
Despite recent volatility, the Nasdaq 100 has been effectively flat since May 14. The index last made a high on June 3, with most options volume centering around the $710 level, according to data from ThinkOrSwim. At the same time, the S&P 500 has been trading in a roughly 200-point range since early May.
The main piece of the bullish position, executed about 90 minutes after the opening bell, was a $30 million purchase of 28,000 736-strike calls expiring July 31. At the same time, the person sold $6 million worth of the 730/740-strike call spread expiring the same date, lowering the cost of the trade, but pushing the breakeven up to about $750 – less than $2 above the QQQ high from early June.
"If he doesn't have another position against this, he needs Qs to explode higher," Scott Bauer, CEO of Chicago-based Prosper Trading Academy, said by phone. "The spread reduces his cost but pushes up the level for the breakeven. If the index just grinds he's going to get killed."
Open interest in the 736-strike calls was equal to the volume of the trade at the time of execution, suggesting the trader might have been buying back calls that they sold, arguably a lower-conviction trade but still one that reflects a neutral to positive view on the index.
Of the $1.6 billion in QQQ options traded Thursday, $944 million was tied to calls, according to SpotGamma data, though about as many calls were sold as bought, ThinkOrSwim data suggest. Almost exactly the same number of contracts were sold as bought for both puts and calls.
While the $24 million trade stands out for its apparent directional bias, one of the two trades bigger on the day was also bullish, in the S&P 500 ETF SPY.
In that fund, someone bought 2,000 of deep in-the-money 500-strike calls expiring July 24 for $50 million.
The second-biggest single trade of the day was in nuclear business Oklo, where someone bought $46 million worth of 200-strike calls expiring in January 2028, as well as $21 million of 90-strike calls expiring in mid-December. The stock currently trades at $50.`,
    bodyJa: `木曜日のインベスコQQQトラストETFの単独最大の取引が何らかの兆候であれば、ハイテク強気派は新高値をそれほど長く待つ必要はないかもしれない。
同トレーダーは、今月末までにナスダック100指数が史上最高値を更新する必要がある3部構成のコールスプレッド、確信度の高い方向性の賭け、そして木曜日に取引された全オプションの中で3番目に大きな取引に2400万ドルを費やした。
最近のボラティリティにもかかわらず、ナスダック 100 は 5 月 14 日以降、実質的に横ばいでした。ThinkOrSwim のデータによると、ナスダック 100 指数が最後に高値を付けたのは 6 月 3 日で、ほとんどのオプション取引高は 710 ドルの水準を中心にしていました。同時に、S&P500指数は5月初旬以来、約200ポイントの範囲で取引されている。
開始ベルの約90分後に実行された強気ポジションの主な部分は、7月31日に期限切れとなる2万8000個の736ストライクコールを3000万ドルで購入したことだった。同時に、その人物は同日期限切れの730/740ストライクコールスプレッドの600万ドル相当を売却し、取引コストを下げたが、損益分岐点を約750ドルまで押し上げた。これはQQQの高値を2ドル下回っていた。 6月上旬から。
シカゴに本拠を置くプロスパー・トレーディング・アカデミーのスコット・バウアー最高経営責任者（CEO）は、「彼がこれに対して別のポジションを持っていないのであれば、Qsを爆発的に高める必要がある」と電話で語った。 「スプレッドは彼のコストを削減しますが、損益分岐点のレベルを押し上げます。指​​数がただ下がったら、彼は殺されるでしょう。」
736ストライクコールの建玉は約定時の取引量と同額であり、トレーダーが売却したコールを買い戻していた可能性があることを示唆しており、おそらく確信度の低い取引ではあるが、依然として指数に対して中立から肯定的な見方を反映している取引であると考えられる。
SpotGamma データによると、木曜日に取引された QQQ オプション 16 億ドルのうち、9 億 4,400 万ドルがコールに関連していましたが、ThinkOrSwim のデータによると、コールの売りと買いの数はほぼ同じでした。プットとコールの両方で、売られた契約と買われた契約の数がほぼ同じ数でした。
2,400万ドルの取引は、その明らかな方向性の偏りで際立っていますが、この日のより大きな取引2件のうちの1件、S&P 500 ETF SPYも強気でした。
そのファンドでは、誰かが7月24日に期限切れとなるディープ・イン・ザ・マネーの500ストライク・コール2,000件を5,000万ドルで購入した。
この日2番目に大きかった単一取引は原子力事業オクロで、誰かが2028年1月に期限切れとなる200ストライクコールを4,600万ドル相当と、12月中旬に期限切れとなる90ストライクコールを2,100万ドル相当購入した。現在、株価は50ドルで取引されている。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/09/a-huge-trade-just-happened-on-the-nasdaq-100-bulls-are-taking-notice.html",
    publishedAt: "2026-07-09T19:26:44+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "anduril-ceo-says-it-s-bad-to-ipo-in-midd-afecdbf6",
    title: "Anduril CEO says it's bad to IPO in ‘middle of a hype cycle’",
    titleJa: "アンドゥリルCEO、「誇大宣伝サイクルの真っ只中」にIPOするのは良くないと語る",
    summaryJa: "アンドゥリルのブライアン・シンプ最高​​経営責任者（CEO）は、現在の市場状況を考慮すると、防衛テクノロジー企業は上場を急ぐ必要はないと述べた。シンプ氏は木曜日、アレン＆カンパニー・サンバレーカンファレンスでCNBCのジュリア・ブールスティンに対し、「投資家が実際に上場してから3年間で十分な利益を得られたことをIPOの成功と定義する」と語った。 「誇大宣伝サイクルの真っ只中は、それを行うには悪い時期です。ですから、急いで外出する必要はありません。」",
    bodyOriginal: `Anduril CEO Brian Schimpf said the defense tech company is in no hurry to go public given the current market conditions.
"We define a successful IPO as our investors got a good return three years from actually going out," Schimpf told CNBC's Julia Boorstin at the Allen & Co. Sun Valley Conference on Thursday. "A bad time to do that is in the middle of a hype cycle. So we're not in a rush to go out."
Defense tech companies like Anduril are riding a surge in demand for their products and services, fueled by President Donald Trump's military reindustrialization aspirations. Spending on the technology is hitting all-time highs, with the defense budget on track to reach $1.5 trillion.
Still, the tech IPO market remains relatively tepid, even after SpaceX's record offering last month. Shares of Elon Musk's space and artificial intelligence company closed at a high of $201.80 on their third day, but have since lost about a quarter of their value and are trading just above their $150 opening price.
Meanwhile, AI model leaders OpenAI and Anthropic have both confidentially filed to go public, but neither have set a timeline for their IPOs. Some investors are increasingly skeptical of whether the public market would buy in at their current valuations of close to $1 trillion.
Anduril, which makes drones and AI-powered weapons, doubled its valuation in May to $61 billion, becoming one of the most richly valued private tech companies. Schimpf said at the time that the company would "aggressively" invest in scaling defense systems for the U.S.
Defense tech companies Shield AI and autonomous shipmaker Saronic also closed big funding rounds earlier this year.
However, that's not necessarily a good thing, Schimpf said.
"We're seeing crazy high valuations on the expectations of future growth and all of those different things," he said. "I'm not sure that the market is particularly rational on the pricing right now."
As Anduril scales, questions mount over when the shares will finally hit the public market. Founder Palmer Luckey has said he "definitely" aims to IPO, but hasn't set a target.
"I do think a lot of companies are dangerously leading into overvalued territory in a way that could backfire," Schimpf said.
WATCH: Nasdaq's president says there's a 'significant' pickup in international firms listing`,
    bodyJa: `アンドゥリルのブライアン・シンプ最高​​経営責任者（CEO）は、現在の市場状況を考慮すると、防衛テクノロジー企業は上場を急ぐ必要はないと述べた。
シンプ氏は木曜日、アレン＆カンパニー・サンバレーカンファレンスでCNBCのジュリア・ブールスティンに対し、「投資家が実際に上場してから3年間で十分な利益を得られたことをIPOの成功と定義する」と語った。 「誇大宣伝サイクルの真っ只中は、それを行うには悪い時期です。ですから、急いで外出する必要はありません。」
アンドゥリルのような防衛テクノロジー企業は、ドナルド・トランプ大統領の軍事再産業化の願望に後押しされて、自社の製品やサービスに対する需要の急増に乗っている。この技術への支出は過去最高を記録しており、国防予算は1兆5000億ドルに達する見込みだ。
それでも、スペースX社が先月記録的な株式を公開した後でも、ハイテクIPO市場は比較的低調なままだ。イーロン・マスク氏の宇宙・人工知能企業の株価は3日目に201.80ドルの高値で取引を終えたが、その後は価値の約4分の1を失い、初値の150ドルをわずかに上回る水準で取引されている。
一方、AIモデルのリーダーであるOpenAIとAnthropicは両社とも極秘に株式公開を申請しているが、どちらもIPOのスケジュールを設定していない。一部の投資家は、公開市場が現在の1兆ドル近い評価額で買い入れるかどうかについて、懐疑的な見方を強めている。
ドローンやAI搭載兵器を製造するアンドゥリルは、5月に評価額を2倍の610億ドルに引き上げ、最も価値のある民間テクノロジー企業の1つとなった。シンプフ氏は当時、同社が米国の防衛システムの拡張に「積極的に」投資すると述べた。
防衛テクノロジー企業のシールドAIと自律型船舶メーカーのサロニックも今年初めに大規模な資金調達ラウンドを終了した。
しかし、それは必ずしも良いことではない、とシンプ氏は言う。
同氏は、「将​​来の成長への期待や、さまざまな事柄について、非常に高い評価が見られている」と述べた。 「現時点で市場が特に合理的な価格設定をしているかどうかはわかりません。」
アンドゥリルの規模が拡大するにつれ、株式が最終的に公開市場に投入されるのはいつになるのかという疑問が高まっている。創業者のパーマー・ラッキー氏は「間違いなく」IPOを目指すと述べたが、目標は設定していない。
「多くの企業が、裏目に出かねない危険なやり方で過大評価の領域に突入しようとしていると私は思う」とシンプフ氏は語った。
注目：ナスダック社長、国際企業の上場が「大幅に」増加していると発言`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/09/anduril-ceo-ipo-defense.html",
    publishedAt: "2026-07-09T18:52:42+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "prediction-markets-spark-insider-trading-3c812188",
    title: "Prediction markets spark insider trading concerns. Here's how Goldman and other companies are responding",
    titleJa: "予測市場はインサイダー取引の懸念を引き起こします。ゴールドマンと他の企業の対応は次のとおりです",
    summaryJa: "インサイダー取引は、予測市場という新しい世界において新たなリスクとなっており、ゴールドマン・サックスを含む一部の企業は、プラットフォーム上での従業員の取引を制限する措置を講じています。関係者によると、ゴールドマン・サックスは従業員に対し、選挙、金融市場、マクロ経済データ、地政学だけでなく、銀行特有の出来事に関連した契約に基づいて取引することを禁止した。",
    bodyOriginal: `Insider trading is an emerging risk in the new world of prediction markets, and some companies – including Goldman Sachs – are taking steps to limit employees' trades on the platforms.
Goldman Sachs has banned its employees from trading on contracts related to events that are specific to the bank, as well as elections, financial markets, macroeconomic data and geopolitics, according to people familiar with the matter.
A representative for Goldman declined to comment on the policy, but did state that the bank prohibits using material, nonpublic information to trade across all markets.
While some firms have started developing policies to managing insider trading risks on prediction markets, many others have yet to take those first steps, legal experts say.
"We are getting constant questions from clients, particularly among regulated entity clients, about what the regulator expectations are, what the risks are, where the areas of potential liability are," said David Oliwenstein, a partner and securities enforcement practice lead at Pillsbury.
The news of an explicit prediction market trading directive at Goldman comes after the first event contract insider-trading case to involve a private sector company.
In May, the Commodity Futures Trading Commission and Department of Justice charged Google employee Michele Spagnuolo with using material, nonpublic information to trade on Polymarket contracts related to the browser's "Year in Search" lists. Using the handle "AlphaRaccoon," Spagnuolo allegedly collected about $1.2 million in profit, according to the CFTC's complaint.
Legal experts said the sheer number of contracts available on prediction platforms may provide new avenues for material, nonpublic information to be used to turn a profit. For example, a Google employee could use internal data to trade on contracts about what the company's headcount will be this year, when it may release a new version of its Gemini AI tool or where Alphabet's share price will end the month.
"All these different questions that you're able to bet on… it makes it really hard to kind of play whack-a-mole in terms of where people are using the information they've obtained confidentially," said Karen Woody, law professor at Washington and Lee University.
Lawyers told CNBC that as more insider trading on these platforms is caught and prosecuted, there will be greater expectations that businesses have sufficient policies and education to avoid any potential liability in a case involving one of their employees.
But lawyers also said they're advising clients it's nowhere near late, and companies should take this time now to develop the necessary policies.
Where companies stand
CNBC reached out to 50 publicly traded and privately held companies, which all have contracts regarding details about their businesses on prediction market platforms.
In total, only three revealed they have policies related to trading on prediction markets, while another two said it was something they were actively reviewing.
United Airlines told CNBC it does not have an explicit policy on prediction market trading, but that its employee guidelines "prohibit using your position (or company confidential information gained from your position) for your personal gain."
A spokesperson for JPMorgan Chase confirmed a Barron's report that employees are urged to proceed with caution when trading on prediction markets — particularly on contracts related to the financial sector.
At Morgan Stanley, a spokesperson said the bank has policies regarding trading on prediction markets in its employee code of conduct, but did not disclose further details.
A person familiar with Bank of America's plans told CNBC that the company was in the process of communicating updates to policy that will outline prohibited activities for employees and provide examples to help clarify expectations for trading on prediction market platforms. The person didn't provide details about the specific changes to policy itself.
Banks appeared to be the sector most likely to respond that they were developing prediction market trading policies or already had one in place.
"Financial institutions, they have huge compliance departments," said Lara Shortz, a partner at Michelman & Robinson in its labor and employment practice. "They spend a lot of time putting together policies related to trading and the use of information."
Overall, 36 companies — including from sectors beyond just banks — did not respond to inquiries from CNBC regarding their prediction market trading policies for employees. Another seven declined to comment on the matter.
While CNBC cannot conclude exactly what these businesses that did not respond are doing, it matches what lawyers who work with companies on internal policy matters said: just a few companies have undertaken major policy changes so far, while many others are still in the early stages of any form of updates during the platform's new, explosive rise.
"Right now, training is not necessarily the gold standard, just because it is new," said Marissa Mastroianni, an employment law attorney at Cole Schotz.
What's already on the books
Some legal experts and company representatives argued that broad directives that ban insider trading inherently apply to prediction markets, too. A person familiar with OpenAI's employee policies said that the company's blanket insider trading policy is clear that staff cannot use material, nonpublic information in any way.
But Tiffany Magri, a regulatory advisor at compliance technology company Smarsh, said companies benefit from explicitly mentioning prediction markets in their policies.
"The question is no longer whether exchanges can detect suspicious trades," she said. "It's whether employers have established clear expectations around when employees should be prohibited from participating in markets tied to information they encounter through their work."
To Magri's point, leading prediction market platforms Kalshi and Polymarket have taken steps on their own to crack down on insider trading.
Kalshi, in early June, announced new employment verification tools for participants on some prediction markets. That same month, it partnered with StarCompliance to allow employers with the partner's software to access their employees' event contract trades. To beef up its own internal oversight, the exchange partnered with Solidus Labs, a market integrity company, in February.
Polymarket highlighted its own partnerships in a statement to CNBC. Those include one with Chainalysis — an on-chain market enforcement company — and another with Palantir to monitor suspicious activity on its sports-related contracts.
But Magri noted these are just first steps, and that companies need to start training employees about the platforms rather than rely on the exchanges themselves to stop insider trading.
Both Kalshi and Polymarket declined to comment if they're working with companies directly as they develop internal oversight and enforcement mechanisms.
Early days, growing urgency
Companies and the CFTC are jumping into new territory when confronting insider information on prediction markets.
On the prosecution front, Woody said the CFTC has a "blank canvas" on how it will go after insider trading. "I think what's going to be interesting with the CFTC taking the lead here is that there aren't a lot of cases to date yet in this space. It's fairly new," she said.
The CFTC did not respond to a request from CNBC to comment on whether it foresees companies becoming liable in the future for insider trading from their employees if they are deemed to have failed in educating them enough about it.
With lingering uncertainty on the regulatory side, companies should take the lead in rulemaking and learn how prediction markets work, said John Sullivan, professor of management at San Francisco State University.
Lawyers from King & Spalding LLP outlined steps companies can take in an article on Law360. Those include updating their insider trading policies to include event contracts and establishing protocols to monitor unusual activity on individual markets related to their businesses.
For even stricter measures, Sullivan told CNBC businesses should consider banning the platforms on company-owned devices and prevent employees from trading during work hours.
The foolish move would be to dismiss prediction markets' relevance, he said. "It's embarrassing not to have done anything or not to know about it."
— CNBC's Ashley Capoot contributed reporting
Disclosure: CNBC and Kalshi have a commercial relationship that includes customer acquisition and a minority investment.`,
    bodyJa: `インサイダー取引は、予測市場という新しい世界において新たなリスクとなっており、ゴールドマン・サックスを含む一部の企業は、プラットフォーム上での従業員の取引を制限する措置を講じています。
関係者によると、ゴールドマン・サックスは従業員に対し、選挙、金融市場、マクロ経済データ、地政学だけでなく、銀行特有の出来事に関連した契約に基づいて取引することを禁止した。
ゴールドマンの代表者はこの方針についてコメントを控えたが、同行はすべての市場での取引に重要な非公開情報を使用することを禁止していると述べた。
一部の企業は予測市場におけるインサイダー取引のリスクを管理するためのポリシーを策定し始めているが、他の多くの企業はまだ最初の一歩を踏み出していないと法律専門家は言う。
ピルズベリーのパートナー兼証券執行実務責任者のデービッド・オリウェンスタイン氏は、「規制当局の期待は何なのか、リスクは何なのか、潜在的な責任の範囲はどこなのかなど、顧客、特に規制対象企業の顧客から絶えず質問を受けている」と述べた。
ゴールドマンにおける明示的な予測市場取引指令のニュースは、民間企業が関与した初のイベント契約インサイダー取引事件の後に発表された。
5月、商品先物取引委員会と司法省は、ブラウザの「検索年」リストに関連するPolymarket契約の取引に重要な非公開情報を使用したとして、Google社員のMichele Spagnuolo氏を起訴した。 CFTCの訴状によると、スパニョーロは「AlphaRaccoon」というハンドル名を使って約120万ドルの利益を集めたという。
法律専門家らは、予測プラットフォームで利用できる膨大な数の契約が、重要な非公開情報を利益を上げるために利用する新たな手段を提供する可能性があると述べた。たとえば、Googleの従業員は内部データを使用して、今年の会社の従業員数、Gemini AIツールの新バージョンのリリース時期、またはAlphabetの株価が月末にどこで終了するかなどに関する契約を取引することができます。
ワシントン・アンド・リー大学の法学教授カレン・ウッディ氏は、「こうしたさまざまな質問に賭けることができるため、人々が極秘に入手した情報がどこで使われているかという点で、一種のモグラたたきをするのが非常に難しくなる」と述べた。
弁護士らはCNBCに対し、これらのプラットフォームでのインサイダー取引が摘発され、起訴されることが増えるにつれ、従業員が関与した訴訟での潜在的な責任を回避するために企業が十分なポリシーと教育を備えていることへの期待が高まるだろうと語った。
しかし、弁護士らは顧客に対し、今からでも遅くはない、企業は今この機会に必要な方針を策定すべきだとアドバイスしているとも述べた。
企業の立ち位置
CNBCは上場企業および非公開企業50社に連絡を取り、いずれも予測市場プラットフォームでの事業の詳細に関する契約を結んでいる。
合計で、予測市場での取引に関するポリシーがあることを明らかにしたのはわずか 3 社で、他の 2 社は積極的に検討中であると述べました。
ユナイテッド航空はCNBCに対し、予測市場取引に関する明確なポリシーはないものの、従業員向けのガイドラインは「個人的な利益のために自分の地位（または自分の地位から得た企業機密情報）を利用することを禁止している」と語った。
JPモルガン・チェースの広報担当者は、従業員が予測市場、特に金融セクターに関連する契約で取引する際には、慎重に取引を進めるよう求められているという本誌の報道を認めた。
モルガン・スタンレーの広報担当者は、同行が従業員の行動規範に予測市場での取引に関する方針を定めていると述べたが、それ以上の詳細は明らかにしなかった。
バンク・オブ・アメリカの計画に詳しい関係者はCNBCに対し、同社は従業員に対する禁止行為の概要を示し、予測市場プラットフォームでの取引に対する期待を明確にするための例を示す方針の最新情報を伝達しているところだと語った。同関係者は政策そのものの具体的な変更については詳細を明らかにしなかった。
銀行は、予測市場取引ポリシーを開発中、またはすでに導入していると回答する可能性が最も高いセクターであるようです。
「金融機関には大規模なコンプライアンス部門がある」と、マイケルマン・アンド・ロビンソンの労働・雇用実務パートナーであるララ・ショートツ氏は語る。 「彼らは取引や情報の利用に関する政策をまとめるのに多くの時間を費やしている。」
全体として、銀行以外のセクターを含む 36 社が、従業員向けの予測市場取引ポリシーに関する CNBC の問い合わせに回答しませんでした。他の7人はこの件についてコメントを拒否した。
CNBCは、応答しなかった企業が何をしているのかを正確に結論づけることはできないが、企業と協力して内部政策問題に取り組んでいる弁護士らの発言と一致している。これまでに大規模なポリシー変更を行ったのはほんの数社だが、他の多くの企業はプラットフォームの新たな爆発的な台頭の中で、何らかの形でのアップデートの初期段階にあるという。
コール・ショッツの雇用法弁護士、マリッサ・マストロヤンニ氏は、「現時点では、トレーニングが新しいという理由だけで、必ずしもトレーニングが黄金律であるとは限らない」と述べた。
すでに本に載っているもの
一部の法律専門家や企業代表は、インサイダー取引を禁止する広範な指令は本質的に予測市場にも適用されると主張した。 OpenAIの従業員ポリシーに詳しい関係者は、同社の包括的インサイダー取引ポリシーでは、従業員が重要な非公開情報をいかなる形でも使用できないことは明らかだと述べた。
しかし、コンプライアンステクノロジー企業スマッシュの規制アドバイザー、ティファニー・マグリ氏は、企業はポリシーで予測市場について明示的に言及することで利益を得られると述べた。
「もはや問題は、取引所が疑わしい取引を検知できるかどうかではない」と同氏は述べた。 「雇用主が、従業員が仕事を通じて遭遇する情報に関連する市場への参加をいつ禁止すべきかについて、明確な期待を定めているかどうかが問題だ。」
マグリ氏の指摘によれば、予測市場プラットフォーム大手のカルシとポリマーケットは、インサイダー取引を取り締まるために独自の措置を講じている。
カルシは6月初旬、一部の予測市場の参加者向けに新しい雇用確認ツールを発表した。同月、同社はStarComplianceと提携し、パートナーのソフトウェアを使用する雇用主が従業員のイベント契約取引にアクセスできるようにした。独自の内部監視を強化するため、同取引所は2月に市場健全性企業Solidus Labsと提携した。
ポリマーケットはCNBCへの声明で自社のパートナーシップを強調した。その中には、オンチェーン市場執行会社であるChainaliesとの提携や、スポーツ関連契約における不審な活動を監視するPalantirとの提携も含まれる。
しかしマグリ氏は、これらは単なる最初のステップであり、企業はインサイダー取引を阻止するために取引所自体に依存するのではなく、プラットフォームについて従業員のトレーニングを開始する必要があると指摘した。
カルシとポリマーケットの両社は、内部監視と執行メカニズムの開発にあたり、企業と直接協力しているかどうかについてはコメントを控えた。
初期の頃、高まる緊急性
企業とCFTCは、予測市場に関するインサイダー情報に直面する際に、新たな領域に飛び込もうとしている。
ウディ氏は検察面で、CFTCはインサイダー取引をどうするかについて「白紙のキャンバス」を持っていると述べた。 「CFTCがここで主導権を握ることで興味深いのは、この分野でこれまでに多くの訴訟が存在していないことだと思う。これはかなり新しいことだ」と彼女は述べた。
CFTCはCNBCからの、企業が従業員に対するインサイダー取引について十分な教育を怠ったとみなされた場合、将来的に従業員によるインサイダー取引の責任を負うことになると予想しているかどうかについてコメントを求めたが、回答はなかった。
サンフランシスコ州立大学のジョン・サリバン教授（経営学）は、規制面での不確実性が残る中、企業はルール策定で主導権を握り、予測市場がどのように機能するかを学ぶべきだと述べた。
King & Spalding LLP の弁護士は、Law360 に関する記事に関して企業が講じることができる手順について概説しました。これらには、イベント契約を含めるためにインサイダー取引ポリシーを更新することや、ビジネスに関連する個々の市場での異常な活動を監視するためのプロトコルを確立することが含まれます。
サリバン氏はさらに厳しい措置として、企業は会社所有の端末でのプラットフォームの禁止や、従業員の勤務時間中の取引を禁止することを検討すべきだとCNBCに語った。
同氏は、予測市場の関連性を無視するのは愚かな行動だ、と述べた。 「何もしていない、知らないというのは恥ずかしいことだ。」
— CNBC の Ashley Capoot がレポートに寄稿
開示: CNBC とカルシには、顧客の獲得と少数出資を含む商業関係があります。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/09/prediction-markets-spark-insider-trading-fears-how-firms-are-responding.html",
    publishedAt: "2026-07-09T18:52:22+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "interest-rates-may-need-to-rise-this-yea-7992a742",
    title: "Interest rates may need to rise this year, says Bank of England economist",
    titleJa: "イングランド銀行のエコノミスト、今年は金利上昇が必要かもしれないと語る",
    summaryJa: "イングランド銀行のエコノミスト、今年は金利上昇が必要かもしれないと語る- 公開されました",
    bodyOriginal: `Interest rates may need to rise this year, says Bank of England economist
- Published
Interest rates may need to increase this year to keep rising prices under control, according to the Bank of England's chief economist.
Huw Pill, who is from Cardiff, told the Walescast podcast that the "speed limit at which you can run the economy is a bit lower than it's been in the past".
Pill is one of only nine people in the UK who decide what the Bank of England's interest rate should be - something which affects the cost of mortgages and the rates at which prices rise.
He went to Whitchurch High School in Cardiff, whose alumni include some of Wales' best known sporting heroes.
Unlike them, he has had a chance to see the 400,000 bars of gold bullion stored at the Bank and has confirmed that they're "amazingly shiny."
Pill is a member of the Monetary Policy Committee (MPC) which decides whether to raise or lower the Bank of England interest rate.
This rate helps determine the cost of mortgages, other borrowing and the return savers get on their money. It also controls inflation which is the rate at which prices are rising.
The Bank of England has an inflation target of 2%, but the rate currently stands at 2.8%.
In Conversation with the Bank of England's Chief Economist
Fliss and James speak to Huw Pill about his Welsh roots and his journey from Cardiff to one of the most influential economic roles in the country
Pill believes interest rates will need to increase this year to keep inflation down.
He was in a minority of MPC members who voted for an increase in interest rates in June.
"I've been at the bank for 56 months, inflation's been at or below target for three months, it's been above target for 53 months," he said.
"So I think that's a reflection of the fact that, in part, we've had some bad luck, we've been subject to challenges, but perhaps we've been a little bit over optimistic about what the trend growth in the economy is."
What is happening to UK prices?
- Published17 June
He said that productivity, which measures how efficiently people work, has slowed down in the UK.
It is also a particular problem in Wales where it is the lowest of the four home nations and around 15 percent lower than the UK average, external.
People in Wales also earn lower wages than the UK average, and the country has some of the highest rates of welfare claims.
Pill said improving the efficiency of the Welsh economy is the key to raising living standards.
Things like better infrastructure "to link places together" and creating "a better educated workforce" are recognised drivers of productivity.
But he acknowledged that it is "a very difficult thing to deliver" in an uncertain world, where "public finances are constrained" and politicians face "hard decisions".
Before joining the Bank of England, Pill previously worked at the European Central Bank from its inception through to the Eurozone crisis, when the survival of the single currency was in jeopardy.
He said the ability of a central bank to set interest rates and print money were powerful tools, but they were also blunt tools.
"It doesn't allow you to solve all problems," he said.
Pill said countries like Greece, Spain Portugal and Ireland had to go through "a lot of pain", with politicians making "difficult decisions" about changing their economies.
But "they have come out the other side in stronger shape," he argued.
Inside the century-old building standing above 400,000 gold bars
- Published16 September 2025
Since taking up his role at the Bank of England, Pill said he had only seen the billions of pounds worth of gold bullion stored in the vaults once, when the MPs on the Treasury Select Committee visited.
"Perhaps unsurprisingly, they're not encouraging people to go down there too often," he said.
But "it's very heavy and it's amazingly shiny," he added.
You can listen to the full interview with Huw Pill on Walescast on BBC Sounds.`,
    bodyJa: `イングランド銀行のエコノミスト、今年は金利上昇が必要かもしれないと語る
- 公開されました
イングランド銀行の首席エコノミストによると、物価上昇を抑えるために今年は金利を引き上げる必要があるかもしれないという。
カーディフ出身のヒュー・ピル氏はウェールズキャストのポッドキャストで、「経済を運営できる制限速度は過去に比べて若干低い」と語った。
ピル氏は、住宅ローンのコストや物価上昇率に影響を与えるイングランド銀行の金利を決定する、英国でわずか9人のうちの1人である。
彼はカーディフのウィッチチャーチ高校に通いましたが、その卒業生にはウェールズで最も有名なスポーツ界の英雄も含まれています。
彼らとは異なり、彼は銀行に保管されている40万本の金地金を見る機会があり、それらが「驚くほど輝いている」ことを確認した。
ピル氏はイングランド銀行の金利を引き上げるか引き下げるかを決定する金融政策委員会（MPC）の委員を務めている。
この金利は、住宅ローンやその他の借入のコストを決定するのに役立ち、貯蓄者はお金を得ることができます。また、価格の上昇率であるインフレも制御します。
イングランド銀行はインフレ目標を2％としているが、現在のインフレ率は2.8％となっている。
イングランド銀行のチーフエコノミストとの対談
フリスとジェームズがヒュー・ピルにウェールズのルーツと、カーディフからこの国で最も影響力のある経済的役割の一つに至るまでの道のりについて語る
ピル氏はインフレを抑えるために今年は金利を引き上げる必要があると考えている。
同氏は6月の利上げに賛成票を投じたMPC会員の少数派だった。
同氏は「私は銀行に５６カ月間勤務しており、インフレ率は３カ月間目標以下で推移しており、５３カ月間は目標を上回っている」と述べた。
「したがって、これは、私たちが不運に見舞われ、困難にさらされてきたという事実を反映していると思いますが、おそらく経済成長の傾向について少し楽観的すぎたのでしょう。」
イギリスの物価に何が起こっているのでしょうか？
- 6 月 17 日公開
同氏は、人々がどれだけ効率的に働くかを測る生産性が英国では鈍化していると述べた。
また、ウェールズでは特に問題となっており、本国4か国の中で最も低く、英国の対外平均よりも約15パーセント低い。
また、ウェールズの人々の賃金は英国の平均よりも低く、この国は生活保護受給率が最も高い国の一つです。
ピル氏は、ウェールズ経済の効率を改善することが生活水準向上の鍵であると述べた。
「場所を結び付ける」ためのより良いインフラストラクチャや「より良い教育を受けた労働力」の創出などが、生産性の原動力として認識されています。
しかし同氏は、「財政が制約され」、政治家が「難しい決断」を迫られている不確実な世界において、それを実現するのは「非常に難しいこと」であると認めた。
ピル氏はイングランド銀行に入社する前、欧州中央銀行の発足から単一通貨の存続が危機に瀕したユーロ圏危機まで勤務していた。
同氏は、金利を設定し紙幣を印刷する中央銀行の能力は強力なツールだが、同時に鈍器でもあると述べた。
「それですべての問題を解決できるわけではない」と彼は言う。
ピル氏は、ギリシャ、スペイン、ポルトガル、アイルランドなどの国々は政治家が経済変革について「難しい決断」を下しており、「多くの痛み」を経験しなければならなかったと述べた。
しかし、「彼らはより強い形で向こう側に来ている」と彼は主張した。
40万本の金の延べ棒の上にそびえる築100年の建物の内部
- 2025 年 9 月 16 日公開
ピル氏はイングランド銀行に就任して以来、財務特別委員会の議員らが訪れた際に一度だけ金庫に保管されている数十億ポンド相当の金塊を見たことがあると語った。
「おそらく当然のことかもしれませんが、彼らは人々にあまり頻繁にそこに行くことを奨励していません」と彼は言いました。
しかし、「非常に重く、驚くほど光沢がある」と彼は付け加えた。
ヒュー・ピル氏のインタビュー全文は、BBC Sounds の Walescast で聴くことができます。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c932ed8nv75o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-09T17:37:11+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/3e9e/live/5a89b0f0-7bbb-11f1-8b3b-4de03d5aab17.jpg",
    readTime: 4,
  },
  {
    id: "alleged-reflecting-pool-vandal-david-hea-4839c54e",
    title: "Alleged Reflecting Pool vandal David Hearn pleads not guilty; lawyer calls him 'scapegoat'",
    titleJa: "リフレクティング・プールの破壊者とされるデビッド・ハーン氏は無罪を主張。弁護士は彼を「スケープゴート」と呼ぶ",
    summaryJa: "弁護士は「ハーン氏がリフレクティング・プールに触れたとして重罪に問われる可能性があるなら、すべてのアメリカ人が危険にさらされることになる」とトランプ政権を非難した。",
    bodyOriginal: `Three-time U.S. Olympic canoeist David Hearn pleaded not guilty on Thursday to a felony charge for allegedly ripping up sealant in the National Mall's Reflecting Pool in Washington.
Hearn's attorney afterward blasted prosecutors for obtaining an indictment against the 67-year-old, calling him a political "scapegoat" for the Trump administration's controversial handling of the renovation of the roughly 2,000-foot Reflecting Pool.
"Mr. Hearn pled not guilty because he is not guilty," the attorney, Norm Eisen, told reporters outside of D.C. Superior Court.
"If Mr. Hearn can be charged with a felony for touching the Reflecting Pool, every American is at risk, and every American should be alarmed about this prosecution," Eisen said.
"It is not a crime to touch the Reflecting Pool, to touch water in the United States of America."
Supporters of Hearn who gathered outside the court carried signs, including ones that said "Trump always blames others for his failures;" "The Deflecting Pool: Never admit failure;" and "Drop the Trumped Up Charges."
Hearn was arrested June 19 on a misdemeanor charge after the Bethesda, Maryland, resident stopped at the Reflecting Pool during a bicycle ride and reached into it.
Hearn has said he put his hand into the pool to see what a partially detached piece of blue liner from the bottom felt like.
But U.S. Attorney for the District of Columbia Jeanine Pirro claimed he had intentionally damaged a 2-square-foot piece of sealant as she announced July 2 that a grand jury had indicted Hearn on a felony charge of destruction of property.
"National Park employees observed Hearn actually forcefully and violently pulling up and removing the bottom liner with both hands," Pirro said at a press conference that day.
Hearn is accused of causing more than $1,000 in damage. He faces a maximum possible sentence of 10 years in prison, but would likely receive a much less harsh sentence if convicted.
"The government's evidence is weak," said Mary Dohrmann, another lawyer for Hearn, during his appearance in court, The Associated Press reported. Hearn was not required to post bail in the case.
President Donald Trump has made renovation of the Reflecting Pool on the National Mall a top priority of his administration.
That project has been criticized by some over the administration's award of a no-bid contract to a company connected to a Trump donor for work on the pool, a new blue liner peeling from the bottom of the pool and the water turning green from algae.
Trump and government officials have claimed, without evidence, that vandals cut a gash extending several hundred feet in the pool lining.
A National Park Service official in a court filing has said that after the renovation was substantially complete in early June, U.S. Park Police found that "a caulk over the foam sealant" in the pool had been "cut with a sharp knife or razor and destruction of the delaminating surface material."
Hearn is not accused of using a razor or knife.
"This indictment reflects the administration's effort to scapegoat Davy and to shift blame for their own failures," Eisen said outside of the court on Thursday.
"This is a case that should never have been brought," Eisen said. "Davy Hearn is innocent, and we are going to fight this case and entrust the justice system to do the right thing."
"We will litigate these issues vigorously," Eisen said. "We have confidence in our justice system to see through this misuse of government power against an ordinary American based on a false and politicized narrative."`,
    bodyJa: `オリンピックに3度出場した米国のカヌー選手、デビッド・ハーン氏は木曜日、ワシントンにあるナショナル・モールのリフレクティング・プールでシーラントを引き裂いたとされる重罪に対して無罪を主張した。
ハーン氏の弁護士はその後、ハーン氏を約2,000フィートのリフレクティング・プール改修に関する物議を醸したトランプ政権の対応に対する政治的な「スケープゴート」と呼び、67歳のハーン氏に対する起訴を取得した検察当局を非難した。
ノーム・アイゼン弁護士はワシントンDC高等裁判所の外で記者団に対し、「ハーン氏は無罪を主張した。なぜなら自分は無罪だからだ」と語った。
「もしハーン氏がリフレクティング・プールに触れたことで重罪に問われる可能性があるなら、すべてのアメリカ人が危険にさらされており、すべてのアメリカ人がこの訴追について警戒すべきだ」とアイゼン氏は述べた。
「アメリカ合衆国では、反射するプールや水に触れることは犯罪ではありません。」
法廷の外に集まったハーン支持者らは、「トランプ氏は自分の失敗をいつも他人のせいにする」などと書かれたプラカードを掲げていた。 「偏向プール: 失敗を決して認めない。」そして「でっち上げられた告発を取り下げる」。
ハーン氏はメリーランド州ベセスダ在住のハーン氏が自転車走行中にリフレクティング・プールに立ち寄り、プールに手を入れたとして軽犯罪容疑で６月１９日に逮捕された。
ハーン氏は、プールの底から部分的に剥がれた青いライナーの部分がどのような感じかを確認するためにプールに手を入れたと述べた。
しかし、コロンビア特別区のジャニーン・ピロ連邦検事は、7月2日に大陪審が器物損壊の重罪でハーンを起訴したと発表し、2平方フィートのシーラントを意図的に損傷したと主張した。
ピッロ氏は同日の記者会見で、「国立公園の職員らは、ハーン氏が実際に力強く暴力的にボトムライナーを両手で引き上げたり外したりしているのを目撃した」と述べた。
ハーンは1,000ドル以上の損害を与えた疑いで告訴されている。同氏には最長で懲役10年の刑が言い渡される可能性があるが、有罪判決が下されれば、それよりも軽い刑が言い渡される可能性が高い。
AP通信によると、ハーン氏のもう一人の弁護士、メアリー・ドーマン氏は出廷中に「政府の証拠は弱い」と述べた。ハーン氏はこの事件で保釈金を支払う必要はなかった。
ドナルド・トランプ大統領は、ナショナル・モールのリフレクティング・プールの改修を政権の最優先課題に据えている。
このプロジェクトは、プール工事でトランプ大統領の寄付者に関係する企業に政府が入札なしの契約を与え、プールの底から新しい青いライナーが剥がれ、水が藻類で緑色に変色したことをめぐって、一部の人々から批判されている。
トランプ大統領と政府当局者は、証拠もなく、破壊者らがプールの裏地に数百フィートに及ぶ切り傷を切った、と主張した。
国立公園局職員は裁判所への提出書類の中で、改修工事が6月初旬に実質的に完了した後、米国公園警察がプール内の「発泡シーラント上のコーキング」が「鋭利なナイフかカミソリで切断され、剥離した表面素材が破壊されていた」ことを発見したと述べた。
ハーンはカミソリやナイフを使用した疑いは持たれていない。
アイゼン氏は木曜日、法廷の外で「今回の起訴は、デービー氏をスケープゴートにし、自らの失敗の責任を転嫁しようとする政権の努力を反映している」と述べた。
「これは決して提起されるべきではなかった事件だ」とアイゼン氏は語った。 「デイビー・ハーンは無実であり、私たちはこの訴訟を戦い、司法制度に正しいことを委ねるつもりです。」
「我々はこれらの問題を精力的に訴訟するつもりだ」とアイゼン氏は語った。 「私たちは、誤った政治化された物語に基づいて一般のアメリカ人に対する政府権力の悪用を見破る司法制度を信頼しています。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/09/reflecting-pool-david-hearn-washington-trump-olympian.html",
    publishedAt: "2026-07-09T17:35:10+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "micron-shares-rise-7-after-announcing-bi-57daec17",
    title: "Micron shares rise 7% after announcing billions more in U.S. chipmaking investments",
    titleJa: "米国のチップ製造投資への数十億ドルの追加発表を受け、マイクロン株は7％上昇",
    summaryJa: "同社が米国の半導体サプライチェーンの強化を目的とした新たな投資ラウンドと、2035年まで同国での支出を加速する計画を発表したため、マイクロン株は木曜日に7％上昇した。最大30億ドルの新たな戦略的投資には、台湾に本社を置くGlobalWafersがテキサスの施設でウェーハの開発と製造を拡大するための5億ドルが含まれており、生シリコンウェーハの生産能力に対する10年間の供給契約も含まれている。",
    bodyOriginal: `Micron shares rose 7% on Thursday as the company announced a new round of investments aimed at boosting the U.S. semiconductor supply chain, and plans to accelerate its spending in the country through 2035.
The new strategic investment of up to $3 billion includes $500 million for Taiwanese-headquartered GlobalWafers to expand its wafer development and manufacturing in its Texas facilities, and also comes with a 10-year supply agreement for raw silicon wafer capacity.
"Securing a reliable supply of critical input materials is essential to supporting Micron's long-term growth and technology roadmap," said Ben Tessone, Micron's chief procurement officer, in a press release.
In a separate announcement, the chipmaker said it will also raise its planned U.S. investment to $250 billion through 2035, roughly a $50 billion increase, as memory demand from the artificial intelligence buildout skyrockets.
Other names in the chip space rallied on Thursday, with Applied Materials, KLA Corp and Lam Research up 7%, ARM Holdings up 11%.`,
    bodyJa: `同社が米国の半導体サプライチェーンの強化を目的とした新たな投資ラウンドと、2035年まで同国での支出を加速する計画を発表したため、マイクロン株は木曜日に7％上昇した。
最大30億ドルの新たな戦略的投資には、台湾に本社を置くGlobalWafersがテキサスの施設でウェーハの開発と製造を拡大するための5億ドルが含まれており、生シリコンウェーハの生産能力に対する10年間の供給契約も含まれている。
「マイクロンの長期的な成長と技術ロードマップをサポートするには、重要な投入材料の信頼できる供給を確保することが不可欠です」とマイクロンの最高調達責任者ベン・テッソーネ氏はプレスリリースで述べた。
別の発表の中で、同社はまた、人工知能構築によるメモリ需要の急増に伴い、米国での投資計画を2035年までに約500億ドル増額の2,500億ドルに引き上げると発表した。
木曜日にはチップ分野の他の銘柄も上昇し、アプライド・マテリアルズ、KLAコーポレーション、ラム・リサーチが7％上昇、ARMホールディングスが11％上昇した。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/09/micron-stock-us-chipmaking.html",
    publishedAt: "2026-07-09T15:21:56+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "meet-sk-hynix-the-trillion-dollar-south-edb1e9c5",
    title: "Meet SK Hynix, the trillion-dollar South Korean chipmaker debuting on U.S. markets",
    titleJa: "米国市場にデビューした1兆ドル規模の韓国チップメーカー、SK Hynixをご紹介します",
    summaryJa: "米国の投資家はメモリブームに乗り出す新たな方法を手に入れている。サムスンに次いで韓国で2番目に時価総額の高い企業であるSKハイニックスは金曜日にナスダックで取引を開始する予定だ。この市場デビューは、同社の米国での大規模な拡大計画と同時に行われ、過去1年間で株価が7倍以上上昇し、株価上昇によりSKハイニックスの時価総額が約1兆ドルにまで上昇した後に行われた。",
    bodyOriginal: `U.S. investors are getting a new way to buy into the memory boom.
SK Hynix, the second most valuable company in South Korea, behind only Samsung, is slated to begin trading on the Nasdaq on Friday. The market debut, coinciding with the company's hefty expansion plans for the U.S., comes after a more than sevenfold increase in its stock price over the past year, a rally that's lifted SK Hynix's market cap to about $1 trillion.
Many Americans don't know the name SK Hynix, but they've likely had plenty of exposure to the company's products. Along with Micron and Samsung, SK Hynix is one of three primary makers of computer memory used in laptops and phones sold by companies such as Apple and Dell.
Memory has long occupied a sleepy corner of the semiconductor market. That's changed dramatically over the last couple years as surging demand for artificial intelligence has upended the industry, creating severe shortages for the chips and sending prices to all-time highs.
SK Hynix is the leader in the high-performance memory that's used in AI chips from Nvidia, the world's most valuable company. While memory components are typically relatively simple chips, often called RAM, that every computer needs to store data, high-bandwidth memory, or HBM, is more complicated, as it stacks many layers of traditional memory together. SK Hynix was the first to do it, and analysts project the company will capture more than half the market this year.
In June, Nvidia CEO Jensen Huang visited SK Hynix on a trip to Seoul, as the two companies announced a multiyear partnership. Nvidia is the biggest HBM buyer.
"That advantage has positioned SK Hynix as one of the biggest beneficiaries of the rapid growth in AI infra," said TrendForce analyst Ellie Wang.
SK Hynix will trade on the Nasdaq under ticker symbol SKHY (initially SKHYV). The company plans to raise around $29 billion by issuing American depositary receipts, or ADRs, in order to fund new factories and equipment, according to a regulatory filing.
Some of that build-out is taking place in the U.S. SK Hynix is constructing its first production facility in the country, scheduled for completion in 2028. The $4 billion plant in West Lafayette, Indiana, will be used for what's known as advanced packaging, an essential part of the process for producing HBM that involves connecting and stacking individual chips into larger systems that can be used in a computer.
SK Hynix expects to receive up to $458 million in funding from the U.S. CHIPS and Science Act, passed in 2022 as the centerpiece of a plan to build up the domestic chip industry. The company could also receive up to $570 million of loans from the U.S. Commerce Department.
It's not just HBM that's boosting SK Hynix. The whole memory industry is experiencing soaring prices due to the AI crunch, which means there's also a shortage for traditional memory needed for phones, tablets, PCs, cars, medical devices and other products. Profit margins are hitting record levels.
More than three-quarters of SK Hynix's revenue comes from RAM, including HBM. The company also makes NAND flash, or hard drives, and is the market leader, with 19% share in the first quarter, according to IDC.
SK Hynix's financials are as eye-popping as its stock price. Annual revenue almost tripled from 2023 to 2025, when sales reached about $65 billion. For 2026, analysts polled by LSEG expect that number to more than triple again to about $235 billion.
History of boom and bust
The company's path to the Nasdaq hasn't been a consistent track up and to the right.
SK Hynix was founded in 1983 as Hyundai Electronics, a subsidiary of Korean conglomerate Hyundai. In 1997, during a financial crisis, it merged with LG Semicon as memory prices were slumping from a supply glut. Four years later, the company rebranded as Hynix Semiconductor, and then became SK Hynix when SK Telecom purchased a controlling stake in 2012.
As of March 31, according to the Securities and Exchange Commission filing, SK Square, "which was demerged from SK Telecom in 2021, held a 20.5% interest in us."
Betting on memory booms has proven risky due to the cyclical nature of the business. Big tech shifts like the dot-com frenzy, the growth of smartphones, or the transition from packaged software to the cloud have brought huge demand for memory to power new devices. That's often led to oversupply, followed by a collapse in prices.
The concern is pervasive today given the hypergrowth of AI. But the industry is trying to prepare for whatever volatility is to come.
SK Hynix, along with Micron and Samsung, are implementing long-term contracts for memory, using their market power to lock in prices and orders years into the future. In the past, memory companies often sold their supply on a quarterly or annual basis.
Companies of all sizes, including giants like Apple, are scrambling to secure memory.
"These agreements typically require customers to provide longer-term demand visibility," said TrendForce's Wang, allowing SK Hynix to plan its spending with more confidence.
Daniel Newman, an analyst and Futurum Group CEO, said investors have to weigh the risks of buying in at these levels, knowing what they know about the past.
"This is how memory always acts in any megacycle or supercycle," Newman said. "The problem is, it always crashes hard."
But, Newman added, if AI demand stays high in the years ahead, memory companies like SK Hynix are a bargain. Industry experts say that AI needs increasing amounts of memory in order to operate without hitting "the memory wall," and memory vendors say the shortage won't subside until at least 2027.
SK Hynix is banking on it.
In South Korea, SK Hynix is planning to spend up to $720 billion on expanding facilities to meet memory demand for AI, according to the company.
One cluster of chip fabrication plants in Yongin, just south of Seoul, will cost $390 billion. The company is speeding up the timeline for the project by more than a decade, with four fabs now scheduled for completion by 2033. Elsewhere in South Korea, SK Hynix is expanding its production facilities in Cheongju, and developing a new cluster of fabs in the southwestern region of the country.
The factories require that SK Hynix shell out large amounts of capital for crucial chipmaking equipment known as extreme ultraviolet lithography, or EUV, machines, which are necessary for etching the advanced circuitry needed to make and stack advanced chips like HBM. They're hard to come by, cost up to $400 million and are only made by ASML in the Netherlands. SK Hynix plans to spend around $7.8 billion on new EUV machines by the end of 2027, according to the company's filing with the SEC.
"If you go to Korea they are building lots of fabs," said MS Hwang, research director at Counterpoint. "But it takes time. The earliest time frame that they can bring out manufactured wafers is end of 2027."
In the U.S., SK Hynix has big expansion plans on top of its Indiana project.
The company said in January that it had set aside $10 billion to make investments for what it's calling AI Company, an effort to find new product lines and back U.S. businesses.
AI Company's biggest component is Solidigm. That business makes NAND flash memory and was purchased from Intel in 2021 for $9 billion. It's now headquartered in Rancho Cordova, California, near Sacramento, where it develops new products, like solid state drives that can store more data.
The bulk of the action is still back home.
"Everybody is coming," said Hwang, referring to companies swarming to South Korea to sign big contracts.
Hwang said word on the street is that nearby hotels are "fully booked" as cloud companies and chipmakers "are all lining up to sign a long-term contract."`,
    bodyJa: `米国の投資家はメモリブームに乗り出す新たな方法を手に入れている。
サムスンに次いで韓国で2番目に時価総額の高い企業であるSKハイニックスは金曜日にナスダックで取引を開始する予定だ。この市場デビューは、同社の米国での大規模な拡大計画と同時に行われ、過去1年間で株価が7倍以上上昇し、株価上昇によりSKハイニックスの時価総額が約1兆ドルにまで上昇した後に行われた。
多くのアメリカ人は SK Hynix の名前を知りませんが、おそらく同社の製品にはよく触れたことがあるでしょう。 SK Hynix は、Micron や Samsung と並んで、Apple や Dell などの企業が販売するラップトップや携帯電話に使用されるコンピュータ メモリの主要メーカー 3 社のうちの 1 つです。
メモリは長い間、半導体市場の眠い一角を占めてきました。人工知能に対する需要の急増により業界が混乱し、チップの深刻な不足が生じ、価格が史上最高値に達したため、この状況はここ数年で劇的に変化しました。
SK Hynix は、世界で最も価値のある企業である Nvidia の AI チップに使用される高性能メモリのリーダーです。メモリ コンポーネントは、通常、すべてのコンピュータがデータを保存するために必要な RAM と呼ばれる比較的単純なチップですが、高帯域幅メモリ (HBM) は、従来のメモリを何層にも積み重ねているため、より複雑です。これを最初に実行したのはSKハイニックスであり、アナリストらは同社が今年市場の半分以上を獲得すると予測している。
6 月、NVIDIA の CEO ジェンスン フアン氏はソウルへの旅行で SK ハイニックスを訪問し、両社は複数年にわたる提携関係を発表しました。 Nvidia は HBM の最大の購入者です。
TrendForceのアナリスト、エリー・ワン氏は、「この利点により、SKハイニックスはAIインフラの急速な成長の最大の受益者の1つとなった」と述べた。
SKハイニックスはティッカーシンボルSKHY（当初はSKHYV）でナスダックで取引される。規制当局への提出書類によると、同社は新しい工場や設備に資金を提供するため、米国預託証券（ADR）を発行することで約290億ドルを調達する計画だという。
その建設の一部は米国で行われており、SKハイニックスは国内初の生産施設を建設中で、2028年に完成予定である。インディアナ州ウェストラファイエットにある40億ドルの工場は、高度パッケージングとして知られるものに使用される予定で、これは個々のチップを接続して積み重ねてコンピューターで使用できるより大きなシステムにするHBM製造プロセスの重要な部分である。
SKハイニックスは、国内チップ産業を育成する計画の目玉として2022年に可決された米国のチップおよび科学法から最大4億5,800万ドルの資金を受け取ることを期待している。同社は米商務省から最大５億７０００万ドルの融資を受ける可能性もある。
SKハイニックスを後押ししているのはHBMだけではない。 AI需要の影響でメモリ業界全体が価格の高騰に見舞われており、これは携帯電話、タブレット、PC、自動車、医療機器、その他の製品に必要な従来型メモリも不足していることを意味している。利益率は記録的な水準に達しています。
SK Hynix の収益の 4 分の 3 以上は、HBM を含む RAM によるものです。 IDCによると、同社はNANDフラッシュ（ハードドライブ）も製造しており、第1四半期で19％のシェアを獲得し市場リーダーとなっている。
SKハイニックスの財務状況は、株価と同様に目を見張るものがある。 2023 年から 2025 年にかけて年間収益はほぼ 3 倍となり、売上高は約 650 億ドルに達しました。 LSEGがまとめたアナリストらは、2026年にはその数字がさらに3倍以上の約2,350億ドルになると予想している。
好景気と不況の歴史
同社のナスダックへの道のりは右肩上がりの一貫した道ではなかった。
SKハイニックスは、韓国の複合企業ヒュンダイの子会社であるヒュンダイエレクトロニクスとして1983年に設立されました。金融危機中の1997年、供給過剰でメモリ価格が低迷していたためにLGセミコンと合併した。 4年後、同社はハイニックスセミコンダクターにブランド変更され、2012年にSKテレコムが支配株を購入してSKハイニックスとなった。
証券取引委員会への提出書類によると、3月31日現在、「2021年にSKテレコムから分離したSKスクエアは当社の20.5％の権益を保有している」という。
ビジネスの周期的な性質により、メモリブームに賭けるのは危険であることがわかっています。ドットコムの熱狂、スマートフォンの成長、パッケージ ソフトウェアからクラウドへの移行などの大きなテクノロジーの変化により、新しいデバイスに電力を供給するためのメモリに対する莫大な需要がもたらされました。それはしばしば供給過剰につながり、その後価格の暴落が起こります。
AI の急速な成長を考慮すると、今日ではこの懸念が広まっています。しかし、業界は今後のいかなる変動にも備えようとしている。
SKハイニックスは、マイクロンやサムスンとともに、市場支配力を利用して数年先までの価格と注文を固定するメモリの長期契約を実施している。過去には、メモリ会社は四半期または年次ベースで供給を販売することがよくありました。
Apple のような巨大企業を含むあらゆる規模の企業がメモリの確保に躍起になっています。
TrendForceのWang氏は、「これらの契約では通常、顧客が長期的な需要の可視性を提供することを要求している」と述べ、これによりSKハイニックスはより自信を持って支出を計画できるようになるという。
アナリスト兼フチュラム・グループ最高経営責任者（CEO）のダニエル・ニューマン氏は、投資家は過去の知識を踏まえた上で、こうした水準で買い入れるリスクを検討する必要があると述べた。
「メガサイクルやスーパーサイクルにおいて、メモリは常にこのように動作します」とニューマン氏は言う。 「問題は、いつも激しくクラッシュすることです。」
しかしニューマン氏は、AI需要が今後も高いままであれば、SKハイニックスのようなメモリ企業はお買い得だと付け加えた。業界の専門家らは、AIが「メモリの壁」にぶつからずに動作するためには、メモリの量を増やす必要があると述べており、メモリベンダーらは、不足は少なくとも2027年までは解消されないと述べている。
SKハイニックスはそれに期待している。
同社によると、韓国ではSKハイニックスがAI向けメモリ需要を満たすための設備拡張に最大7200億ドルを投じる計画だという。
ソウルのすぐ南、龍仁にあるチップ製造工場の1クラスターの建設費用は3,900億ドルとなる。同社はプロジェクトのスケジュールを10年以上早めており、現在4つの工場が2033年までに完成する予定だ。韓国の他の場所では、SKハイニックスは清州の生産施設を拡張し、国の南西部に新しい工場群を開発している。
これらの工場では、SK ハイニックスが極紫外線リソグラフィー (EUV) マシンとして知られる重要なチップ製造装置に多額の資本を投じる必要がある。これらの装置は、HBM のような高度なチップの製造と積層に必要な高度な回路のエッチングに必要である。これらは入手が難しく、価格は最大 4 億ドルで、オランダの ASML によってのみ製造されています。 SECへの提出書類によると、SKハイニックスは2027年末までに新しいEUV装置に約78億ドルを投じる計画だという。
「韓国に行くと、たくさんの工場が建設されています」とカウンターポイントのリサーチディレクター、MS・ファン氏は語った。 「しかし、それには時間がかかります。製造されたウェーハを出荷できる最も早い時期は2027年末です。」
米国では、SK Hynix がインディアナ州プロジェクトに加えて大規模な拡張計画を立てています。
同社は1月、新たな製品ラインを見つけて米国事業を支援する取り組み、いわゆるAIカンパニーへの投資のために100億ドルを確保したと発表した。
AI Company の最大のコンポーネントは Solidigm です。この企業はNANDフラッシュメモリを製造しており、2021年にインテルから90億ドルで買収された。現在はカリフォルニア州サクラメント近郊のランチョコルドバに本社を置き、より多くのデータを保存できるソリッドステートドライブなどの新製品を開発している。
活動の大部分はまだ帰国中だ。
ファン氏は、大型契約を結ぶために韓国に押し寄せる企業について言及し、「誰もが来ている」と語った。
ファン氏は、巷の噂では、クラウド会社や半導体メーカーが「長期契約を結ぶために列をなしている」ため、近くのホテルが「満室」であると語った。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/09/meet-sk-hynix-the-trillion-dollar-chipmaker-debuting-on-us-markets-.html",
    publishedAt: "2026-07-09T15:13:29+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 9,
  },
  {
    id: "goldman-sachs-wins-70-billion-in-asset-m-2350f37e",
    title: "Goldman Sachs wins $70 billion in asset management deals with Verizon, Lockheed Martin",
    titleJa: "ゴールドマン・サックス、ベライゾン、ロッキード・マーチンとの資産管理契約で700億ドルを獲得",
    summaryJa: "ゴールドマン・サックスは木曜日、ベライゾン・コミュニケーションズとロッキード・マーティンの退職資産合計700億ドルを管理する契約を獲得したと発表した。これは、急成長する企業投資のアウトソーシング市場における最近の大きな発表の1つである。ゴールドマンによると、その義務にはベライゾンとロッキード・マーティンの年金資産約300億ドルと、ベライゾンの確定拠出退職資産（通常は401(k)）の約400億ドルが含まれるという。",
    bodyOriginal: `Goldman Sachs said Thursday it won deals to manage a combined $70 billion in retirement assets for Verizon Communications and Lockheed Martin, one of the larger recent announcements in the fast-growing market for outsourced corporate investing.
The mandates include about $30 billion in pension assets for Verizon and Lockheed Martin and $40 billion in Verizon defined-contribution retirement assets, which are typically 401(k)s, according to Goldman.
The moves underscore how some of America's largest employers are increasingly handing responsibility for managing retirement assets to outside firms such as Goldman as portfolios become more complex and require expertise across public and private markets.
Competition in the multitrillion-dollar market for retirement assets is fierce among managers including Goldman, BlackRock, Russell Investments and Mercer, because the long-term institutional mandates generate steady fee revenue.
By growing that business, Goldman hopes to increase its share of revenues that are seen as stable and recurring, unlike the more volatile trading and investment banking operations.
"Large plan sponsors are consolidating responsibilities with one partner with the investment expertise and depth of platform to manage their bespoke needs," Marc Nachmann, Goldman's global head of asset and wealth management, said in a statement.
Goldman's outsourced chief investment officer business had about $480 billion in assets as of March 31, while the firm's broader asset and wealth management division oversees roughly $3.7 trillion worth of investments.`,
    bodyJa: `ゴールドマン・サックスは木曜日、ベライゾン・コミュニケーションズとロッキード・マーティンの退職資産合計700億ドルを管理する契約を獲得したと発表した。これは、急成長する企業投資のアウトソーシング市場における最近の大きな発表の1つである。
ゴールドマンによると、その義務にはベライゾンとロッキード・マーティンの年金資産約300億ドルと、ベライゾンの確定拠出退職資産（通常は401(k)）の約400億ドルが含まれるという。
この動きは、ポートフォリオがより複雑になり、公的市場と私的市場にわたる専門知識が必要となる中、米国最大の雇用主の一部が退職資産管理の責任をゴールドマンなどの外部企業にますます委譲していることを浮き彫りにしている。
数兆ドル規模の退職資産市場における競争は、ゴールドマン、ブラックロック、ラッセル・インベストメンツ、マーサーなどの運用会社の間で熾烈を極めている。これは、長期にわたる機関投資家が安定した手数料収入を生み出しているためである。
ゴールドマンは、同事業を成長させることで、より不安定なトレーディングや投資銀行業務とは異なり、安定的かつ継続的とみなされる収益のシェアを拡大​​したいと考えている。
ゴールドマンの資産・ウェルスマネジメント部門グローバル責任者マーク・ナックマン氏は声明で、「大規模なプランのスポンサーは、投資の専門知識とオーダーメードのニーズを管理するための深いプラットフォームを備えたパートナー1社との責任を統合している」と述べた。
ゴールドマンの外部委託最高投資責任者業務の資産は3月31日時点で約4800億ドルで、同社の広範な資産・資産管理部門は約3兆7000億ドル相当の投資を監督している。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/09/goldman-sachs-asset-management-deals-verizon-lockheed-martin.html",
    publishedAt: "2026-07-09T15:00:50+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "june-home-sales-disappoint-as-prices-rea-1ea98bd1",
    title: "June home sales disappoint as prices reach an all-time high",
    titleJa: "6月の住宅販売は価格が過去最高値に達し失望",
    summaryJa: "住宅ローン金利の高さと過去最高の価格が住宅購入者の手を引いている。全米不動産業者協会によると、６月の中古住宅販売は季節調整済み年率ベースで５月比２．４％減の４０９万戸となった。住宅アナリストらは前月比わずかな増加を予想していた。",
    bodyOriginal: `High mortgage rates coupled with record-high prices are causing homebuyers to pull back.
Sales of previously owned homes in June dropped 2.4% from May to 4.09 million units on a seasonally adjusted, annualized basis, according to the National Association of Realtors. Housing analysts were predicting a slight gain month over month.
June sales were, however, 2.8% higher than the same month a year prior.
"The back-and-forth in monthly home sales activity, driven by mild fluctuations in mortgage rates, shows how sensitive home buyers are to affordability conditions," said Lawrence Yun, the Realtors' chief economist, in a release. "However, job gains—more than half a million since the beginning of the year—will continue to provide support for the housing market."
This count represents closed sales, so contracts that were likely signed in May, when the average rate on the 30-year fixed mortgage was still moving higher. It began rising sharply at the start of March at the beginning of the Iran war.
Inventory at the end of June was 1.56 million units, down 0.6% from May but 1.3% higher than June 2025. At the current sales pace, that represents a 4.6-month supply. The market is considered balanced between buyer and seller at a six-month supply.
With the market still lean, prices continue to rise. The median price of an existing home sold in June was $440,600, an increase of 1.8% from the year before and the highest on record. June is usually the strongest month for both sales and prices.
"Progress on long-term housing affordability could be hampered if inventory growth continues to stall. Without consistent gains in inventory, home prices can accelerate. It is critical to introduce more supply to the market to widen the opportunity for homeownership," Yun said.
Sales continue to be strongest on the higher end of the market. Sales of homes priced below $100,000 were down 1.7% from a year ago, and sales of those priced between $100,000 and $250,000 were up less than 1%. Meanwhile sales of homes priced between $750,000 and $1 million were up nearly 14% from the year before, and sales of homes priced above $1 million were up 18%.
Regionally, home sales were down in June month over month everywhere except in the Northeast.
One-quarter of all sales were all-cash, down from 29% last year. First-time buyers made up 33% of sales, up from 30% a year ago.`,
    bodyJa: `住宅ローン金利の高さと過去最高の価格が住宅購入者の手を引いている。
全米不動産業者協会によると、６月の中古住宅販売は季節調整済み年率ベースで５月比２．４％減の４０９万戸となった。住宅アナリストらは前月比わずかな増加を予想していた。
ただ、６月の売上高は前年同月比２．８％増だった。
ザ・リアルターズのチーフエコノミスト、ローレンス・ユン氏はリリースで「住宅ローン金利の緩やかな変動によって毎月の住宅販売活動が一進一退していることは、住宅購入者が手頃な価格の条件にいかに敏感であるかを示している」と述べた。 「しかし、年初から50万人を超える雇用の増加は引き続き住宅市場を下支えするだろう。」
この数は成約済みの販売を表しているため、30 年固定住宅ローンの平均金利がまだ上昇していた 5 月に署名された可能性が高い契約です。イラン戦争が始まった3月初めから急激に上昇し始めた。
6月末の在庫は156万個で、5月から0.6％減少したが、2025年6月と比べると1.3％増加した。現在の販売ペースでは4.6か月分の供給に相当する。市場は 6 か月分の供給で買い手と売り手のバランスが取れていると考えられます。
市場が依然として低迷しているため、価格は上昇し続けています。 6月に販売された中古住宅価格の中央値は44万600ドルで、前年比1.8％上昇し、過去最高となった。通常、6 月は売上と価格の両方が最も好調な月です。
「在庫の伸びが停滞し続ければ、長期的な住宅価格の上昇が妨げられる可能性がある。在庫が一貫して増加しなければ、住宅価格は加速する可能性がある。住宅保有の機会を広げるためには、より多くの供給を市場に導入することが重要である」とユン氏は述べた。
ハイエンド市場での売上は引き続き好調です。価格が10万ドル未満の住宅の販売は前年比1.7％減少し、価格が10万～25万ドルの住宅の販売は1％未満の増加となった。一方、価格が75万ドルから100万ドルの間の住宅の販売は前年比14％近く増加し、価格が100万ドルを超える住宅の販売は18％増加した。
地域別に見ると、6月の住宅販売は北東部を除く全地域で前月比減少した。
全売上高の4分の1が現金によるもので、昨年の29％から減少した。初回購入者が売上に占める割合は 33% となり、1 年前の 30% から増加しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/09/june-home-sales-prices.html",
    publishedAt: "2026-07-09T14:44:29+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 2,
  },
  {
    id: "ohio-is-america-s-top-state-for-business-b8094259",
    title: "Ohio is America's Top State for Business in 2026, capping yearslong rise with first No. 1 finish",
    titleJa: "オハイオ州は 2026 年にアメリカでビジネスのトップの州となり、長年の上昇を初の 1 位で締めくくる",
    summaryJa: "比類のないコストで比類のないアクセスを提供するオハイオ州は、2026 年にはアメリカのビジネスでトップの州になります。ここは、かつてラストベルトのバックルと考えられていたバックアイ州の長い登山の頂点です。オハイオ州は、2007 年の第 1 回 CNBC 調査で 30 位に終わりました。現在、オハイオ州は成長、資本、イノベーションを引き寄せる魅力を持っており、そのスローガン「すべての中心」に忠実です。",
    bodyOriginal: `Offering unparalleled access at unrivaled costs, Ohio is America's Top State for Business in 2026.
It is the pinnacle of a long climb for the Buckeye State, once considered the buckle of the Rust Belt. Ohio finished 30th in the inaugural CNBC study in 2007. Today, it is a magnet for growth, capital and innovation, truly living up to its slogan, "The Heart of it All."
"We've been strategically focused on making Ohio literally the go-to state for business," said Gov. Mike DeWine, a Republican, in his State of the State address in March.
The efforts have paid off. Ohio broke into the top five in CNBC's rankings for the first time last year. This year, the 20th year of our annual study, the competitive environment plays to the state's biggest strengths.
Ohio shines in infrastructure and business costs
Ohio ranks No. 1 for Infrastructure, the most important category under this year's Top States methodology. More than 143 million people live within a day's drive of Ohio, affording Ohio companies better access to markets than any other state. But that is just the beginning of Ohio's infrastructure advantage.
The state offers one of the nation's most robust programs to pair companies with shovel-ready sites for development, according to data compiled for the CNBC study by the Site Selectors Guild. The state earmarked $175 million for site readiness last year, second only to California. As of this month, a state database listed 26 available "SiteOhio Authenticated" sites, which the state economic development agency, JobsOhio, says are "construction ready on day one."
In an interview with CNBC on Thursday, DeWine gave the example of defense technology company Anduril, which chose a site near Columbus, Ohio, early last year for a major manufacturing site, at an initial investment of $1 billion. "We sat down with them at the governor's residence, me and my wife had [Anduril CEO and co-founder] Palmer Luckey and others over, and they said, 'We want to be in production within a year,' and now they are almost ready for production, within the next few days," he said.
With good connectivity and abundant electrical power for sophisticated computing, Ohio is already in the top 10 for the number of data centers at 224, according to Data Center Map. And the state will soon be home to one of the largest data centers in the world under a public-private partnership announced in March between SoftBank and electric utility AEP. The 10-gigawatt, $4.2 billion facility is being built on a federally owned site in Pike County, east of Cincinnati, where a U.S. uranium enrichment facility for nuclear weapons once stood.
Data center development is controversial, however. A grassroots organization seeking a constitutional ban on future large projects in Ohio claims to have gathered 100,000 signatures and is now hoping to get the measure on the ballot next year. In May, DeWine, an early proponent of the facilities, ordered a temporary freeze on the state's 100% sales tax break for data center developers.
"Data centers are contributing to our economic development in the state. They draw in other companies and other business; we absolutely know that," DeWine said. "But one thing that we [are doing] is [making] sure that when a data center comes in, they pay their fair share," he added. "When they come in, they should not be causing people's homeowner's rates to go up."
Ohio gubernatorial race focuses on affordability
The data center issue is helping to shape a harsh debate about affordability in the race to succeed DeWine, who is term-limited.
The Democratic nominee, former state Public Health Director Dr. Amy Acton, is calling for guardrails on data centers to protect residential utility rates, union jobs and the environment.
The Republican candidate, tech entrepreneur Vivek Ramaswamy, has been more receptive to data centers, based on his public statements, though he said developers should be required to pay for their own electricity.
"One thing about Ohio, whether we've had Democrat governors or Republican governors, [is that] they are either center-left or center-right," DeWine said. "This is a state that has stability … we're predictable; we're not going to have any big changes that [would] bother you from bringing your company in here."
While affordability has been a major focus in the gubernatorial race, Ohio has a much better track record than most states.
The state ranks No. 1 in the important Cost of Doing Business category. Rents for office and industrial space are among the lowest in the country, according to real estate data firm CoStar. Insurance and utility costs are reasonable, and incentives provided to businesses are among the most generous in the country. State financial disclosures show the state gave out more than $1 billion in tax breaks last fiscal year.
While Ohio is a low tax state, property taxes are high, and that's become a political weakness, but DeWine noted that the state legislature has taken action in recent months and the government will continue to focus on the issue. "You don't hear people talking about the problem with our income tax or other taxes," he said. "We have a low income tax and you will continue to see that reduced. Property tax is the one thing, because we rely on property taxes for a significant portion of funding our schools. But we are moving on that. We hear the people, and we've taken action, and we will continue to do that in the future," he said.
Individuals do well, too. Ohio ranks No. 9 for Cost of Living, with housing costs among the most affordable in the country.
Ohio also finishes in the Top 10 in other categories: Economy, at No. 9; Technology and Innovation, at No. 10; and Access to Capital, at No. 9.
The Top State still lags in key categories
Despite all its progress, Ohio still has considerable work to do.
Ohio ranks No. 23 in Education, with the ninth-largest average public school class size, according to the National Education Association. State funding for higher education lags, according to the State Higher Education Officers Association.
That contributes to Ohio's most glaring competitive weakness, in the important Workforce category, where America's Top State for Business finishes No. 35. Only about 19% of Ohio adults have a bachelor's degree or higher, according to the Census Bureau, placing Ohio workers in the bottom tier of the nation for educational attainment. More crucially, not enough skilled workers are staying in Ohio or moving there, based on data compiled for CNBC by labor analytics firm Lightcast.
"We're focusing on the student," DeWine said. "If you're in the top 5% of your graduating high school class, you're going to get $20,000 … you can [use that towards] any state school, or you can pick a private school in the state of Ohio," he said. "We've seen the number of kids in that cohort [which] was at around 60% go[ing] to school in the state of Ohio [grow to] about 85% since we put that into effect," he added.
Hoping to close the state's skills gap, JobsOhio announced in June that it will invest $300 million over the next 10 years to recruit and train skilled workers. The agency estimates the state will need 540,000 workers in science, technology, engineering and math, or STEM, occupations in the decade to come.
"This is aimed at getting people prepared for real jobs in the real world," DeWine said in announcing the JobsOhio Experiential Learning Initiative.
How we scored all 50 U.S. states
The CNBC study measures all 50 states across 10 categories of competitiveness, for a total of 2,500 possible points. Ohio scored 1,623 points to capture this year's crown.
Our methodology assigns a weight to each category based on how frequently the states cite it as a selling point. The idea is to measure the states based on the criteria they use to pitch themselves to business.
Here are this year's categories and point totals:
- Infrastructure: 440 points (17.6%)
- Economy: 415 points (16.6%)
- Workforce: 345 points (13.8%)
- Quality of Life: 290 points (11.6%)
- Cost of Doing Business: 285 points (11.4%)
- Technology and Innovation: 245 points (9.8%)
- Business Friendliness: 225 points (9%)
- Access to Capital: 105 points (4.2%)
- Education: 100 points (4%)
- Cost of Living: 50 points (2%)
The rest of the Top States
North Carolina, which was last year's Top State, finishes No. 2 this year. The Tar Heel State has been on an impressive run in CNBC's rankings. The state has finished first or second in each of the past six years, and it misses a repeat win in 2026 by just nine points.
North Carolina is top-ranked in the Economy category this year, even though the state went a full year without being able to pass a budget. Its state legislature finally passed a budget last week, which Gov. Josh Stein signed on Tuesday. Job growth and economic growth have been strong. But that growth has helped push costs higher. North Carolina ranks 35th for Cost of Living. And poor worker protections and rising crime help push the state to No. 34 for Quality of Life.
Virginia finishes third, ranking No. 2 for Infrastructure, behind Ohio, and No. 5 for Education. But federal budget and personnel cuts have hurt the Old Dominion's Economy ranking, which falls to No. 23 in 2026 compared with No. 14 last year.
Texas comes in fourth, ranking No. 1 for Workforce and No. 2 for Economy and Access to Capital. But persistently high crime, poor healthcare, and a lack of inclusiveness land the Lone Star State at No. 49 for Quality of Life.
No. 5 Minnesota, by contrast, ranks No. 4 for Quality of Life, with outstanding healthcare, strong worker protections, and inclusive state laws. But the North Star State can be crushingly expensive, with high taxes and living costs.
This year's Most Improved State is Arkansas, which has seen an influx of workers in the corporation-heavy northwest part of the state, home to Walmart, Tyson Foods and J.B. Hunt Transport Services. The Natural State rises 13 spots to No. 28 overall, led by a 23-place jump to No. 13 in the Workforce category.
2026 Bottom States include some old standbys
We rank all 50 states, so if there are Top States, there must be Bottom States.
At No. 46 is West Virginia, which ranks No. 48 for Economy and No. 49 for Access to Capital. But The Mountain State is No. 1 for Cost of Living.
Louisiana comes in at No. 47. The Pelican State ranks poorly for Economy, at No. 47; Business Friendliness, at No. 48; and Quality of Life, at No. 46.
Coming in at No. 48 is Rhode Island. The Ocean State ranks last for Economy, No. 48 for Access to Capital, and No. 46 for Infrastructure. Yet it still manages to be America's fifth-most expensive state to live in.
No. 49 is Alaska. The Last Frontier ranks dead last for Education and Access to Capital, and No. 49 for Infrastructure.
This year's Bottom State is Hawaii. The Aloha State comes in last for Infrastructure and the Cost of Doing Business, and at No. 47 for Cost of Living. Even Hawaii's legendary lifestyle takes a hit in 2026, because childcare is more expensive than it is in any other state. That drops Hawaii to No. 6 for Quality of Life.
Join the conversation
Didn't see your state mentioned? You can see where it ranked overall, and in all 10 categories of competitiveness, on the 2026 America's Top States for Business full rankings page.
As always, CNBC welcomes your feedback. On social media, use the hashtag #TopStates.`,
    bodyJa: `比類のないコストで比類のないアクセスを提供するオハイオ州は、2026 年にはアメリカのビジネスでトップの州になります。
ここは、かつてラストベルトのバックルと考えられていたバックアイ州の長い登山の頂点です。オハイオ州は、2007 年の第 1 回 CNBC 調査で 30 位に終わりました。現在、オハイオ州は成長、資本、イノベーションを引き寄せる魅力を持っており、そのスローガン「すべての中心」に忠実です。
共和党のマイク・デワイン知事は３月の州教書演説で、「われわれはオハイオ州を文字通りビジネスにとって頼りになる州にすることに戦略的に注力してきた」と述べた。
努力が実を結びました。オハイオ州は昨年、CNBCのランキングで初めてトップ5に入った。年次調査の20年目となる今年は、競争環境が州の最大の強みを発揮します。
オハイオ州はインフラストラクチャとビジネスコストで優れています
オハイオ州は、今年のトップステートの方法論で最も重要なカテゴリーであるインフラストラクチャーで第 1 位にランクされています。オハイオ州から車で 1 日圏内に 1 億 4,300 万人以上の人々が住んでおり、オハイオ州の企業は他のどの州よりも市場へのアクセスが良好です。しかし、それはオハイオ州のインフラストラクチャの優位性の始まりにすぎません。
Site Selectors GuildがCNBCの調査のためにまとめたデータによると、同州は、企業と開発用のシャベル準備が整った用地を組み合わせる国内で最も強力なプログラムの1つを提供している。同州は昨年、サイトの準備に1億7,500万ドルを割り当て、これはカリフォルニア州に次いで2位となった。今月の時点で、州データベースには利用可能な「SiteOhio Authenticated」サイト 26 件がリストされており、州経済開発庁 JobsOhio は「初日から建設の準備ができている」と述べている。
木曜日のCNBCとのインタビューで、デワイン氏は防衛技術企業アンドゥリルの例を挙げ、昨年初めに初期投資10億ドルで大手製造拠点としてオハイオ州コロンバス近郊の敷地を選んだ。 「私たちは知事公邸で彼らと話し合い、私と妻は（アンドゥリルのCEO兼共同創設者である）パーマー・ラッキーらを招いて、彼らは『1年以内に生産を開始したい』と言いました。そして現在、数日以内に生産の準備がほぼ整いました」と同氏は語った。
データセンターマップによると、オハイオ州は高度なコンピューティングのための良好な接続性と豊富な電力により、データセンター数ですでに 224 でトップ 10 に入っています。そして同州には、ソフトバンクと電力会社AEPが3月に発表した官民提携に基づき、まもなく世界最大級のデータセンターが建設される予定だ。 10ギガワット、42億ドルのこの施設は、かつて米国の核兵器用ウラン濃縮施設があったシンシナティ東のパイク郡の連邦所有の敷地に建設されている。
ただし、データセンターの開発には議論の余地があります。オハイオ州で将来の大規模プロジェクトを憲法で禁止することを求める草の根団体は、10万人の署名を集めたと主張し、現在、来年の投票でこの法案が可決されることを期待している。 5月、この施設の初期の提案者であるデワイン氏は、データセンター開発者に対する州の100％消費税減税の一時凍結を命令した。
「データセンターは州の経済発展に貢献している。データセンターは他の企業や他のビジネスを呼び込んでいる。私たちはそのことをよく知っている」とデワイン氏は語った。 「しかし、私たちが[取り組んでいる]ことの1つは、データセンターが導入されたときに、彼らが公平な負担を確実に支払うようにすることです」と彼は付け加えた。 「それらが入ってくると、人々の住宅所有者の金利が上昇するようなことがあってはなりません。」
オハイオ州知事選は手頃な価格を重視
データセンターの問題は、任期付きのデワイン氏の後継者争いにおいて、価格の手頃さに関する厳しい議論を形作る一因となっている。
民主党候補者である元州公衆衛生局長のエイミー・アクトン博士は、住宅の公共料金、労働組合の雇用、環境を守るためにデータセンターにガードレールを設置するよう求めている。
共和党候補のハイテク起業家ヴィヴェク・ラマスワミ氏は、公式声明に基づいてデータセンターに対してより寛容な姿勢を示しているが、開発者は電気代を自費で支払う必要があると述べた。
「オハイオ州について一つ言えることは、これまでに民主党の知事がいたか共和党の知事がいたかにかかわらず、彼らは中道左派か中道右派のどちらかだということだ」とデワイン氏は語った。 「これは安定した州です…私たちは予測可能です。あなたの会社をここに連れてくることを悩ませるような大きな変化はありません。」
知事選では手頃な価格が大きな焦点となっているが、オハイオ州は他の州よりもはるかに優れた実績を持っている。
同州は重要な事業コストの分野で第 1 位にランクされています。不動産データ会社コスターによると、オフィスや工業用スペースの賃料は国内で最も低い部類に入る。保険料や公共料金は手頃で、企業に提供されるインセンティブは国内で最も寛大なものの一つです。州の財務情報開示によると、州は昨年会計年度に10億ドル以上の減税を行った。
オハイオ州は税金が低い州である一方、固定資産税が高く、それが政治的な弱点となっているが、デワイン氏は、ここ数カ月で州議会が行動を起こしており、政府は引き続きこの問題に注力していくだろうと指摘した。 「我々の所得税やその他の税金の問題について人々が話しているのを聞いたことがない」と彼は言った。 「我が国の所得税は低く、今後も減税が続くだろう。学校資金のかなりの部分を固定資産税に依存しているため、固定資産税が唯一の課題だ。しかし、我々はその方向に進んでいる。我々は国民の声を聞き、行動を起こしており、今後もそれを続けるつもりだ」と同氏は語った。
個人も元気です。オハイオ州は生活費で第 9 位にランクされており、住宅費は全米で最も手頃な地域の一つです。
オハイオ州は他のカテゴリーでもトップ 10 に入っています。エコノミーは 9 位。テクノロジーとイノベーション、10位。そして9位は「資本へのアクセス」。
トップ州は主要カテゴリーで依然として後れを取っている
あらゆる進歩にもかかわらず、オハイオ州にはまだやるべき多くの仕事が残っています。
全米教育協会によると、オハイオ州は教育分野で第 23 位にランクされており、公立学校の平均クラス人数は第 9 位となっています。州高等教育職員協会によると、高等教育に対する州の資金提供が遅れている。
このことが、アメリカのビジネスでトップの州が35位に終わっている重要な労働力部門におけるオハイオ州の最も明らかな競争力の弱さに寄与している。国勢調査局によると、オハイオ州の成人のうち学士以上の学位を持っている人は約19％しかおらず、オハイオ州の労働者は学歴の点で全米最下位に位置している。さらに重要なのは、労働分析会社ライトキャストがCNBC向けにまとめたデータによると、十分な熟練労働者がオハイオ州に留まったり、移住したりしていないことだ。
「私たちはこの学生に焦点を当てています」とデワイン氏は語った。 「高校卒業クラスの上位5％に入れば、2万ドルがもらえる…どの州立学校にでも使えるし、オハイオ州の私立学校を選ぶこともできる」と同氏は語った。 「この政策を施行して以来、オハイオ州の学校に通っている子どもの数は約60％でしたが、約85％に増加しました」と彼は付け加えた。
ジョブズオハイオ州は州内のスキルギャップを埋めることを期待し、熟練労働者の採用と訓練に今後10年間で3億ドルを投資すると6月に発表した。同庁は、同州では今後10年間に科学、技術、工学、数学（STEM）の分野で54万人の労働者が必要になると推計している。
「これは人々に現実世界での実際の仕事に向けて準備をさせることを目的としている」とデワイン氏はジョブズオハイオ体験学習イニシアチブの発表で述べた。
米国 50 州すべてをどのように採点したか
CNBCの調査では、50州すべてを10のカテゴリーにわたる競争力を測定し、合計2,500点を獲得できる可能性がある。オハイオ州は1,623得点を獲得し、今年の栄冠を獲得した。
私たちの方法論では、州がそれをセールスポイントとして挙げる頻度に基づいて、各カテゴリーに重みを割り当てます。そのアイデアは、州がビジネスに売り込む際に使用する基準に基づいて州を評価することです。
今年のカテゴリーと合計ポイントは次のとおりです。
- インフラストラクチャー: 440 ポイント (17.6%)
- 経済: 415 ポイント (16.6%)
- 従業員: 345 ポイント (13.8%)
- 生活の質: 290 ポイント (11.6%)
- ビジネスのコスト: 285 ポイント (11.4%)
- テクノロジーとイノベーション: 245 ポイント (9.8%)
- ビジネスフレンドリー度: 225 ポイント (9%)
- 資本へのアクセス: 105 ポイント (4.2%)
- 教育: 100 ポイント (4%)
- 生活費：50ポイント（2%）
残りのトップ州
昨年トップの州だったノースカロライナ州は今年は2位に終わった。タールヒール州はCNBCのランキングで目覚ましい成績を収めている。同州は過去6年間いずれも1位か2位で終わっており、わずか9ポイント差で2026年の連覇を逃している。
ノースカロライナ州は予算を可決できずに一年を過ごしたにもかかわらず、今年の経済部門でトップにランクされている。同州議会は先週ようやく予算案を可決し、ジョシュ・スタイン知事が火曜日に署名した。雇用の増加と経済成長は力強いものでした。しかし、その成長によりコストが上昇しました。ノースカロライナ州は生活費で 35 位にランクされています。そして、不十分な労働者保護と犯罪の増加により、州は生活の質で 34 位に押し上げられています。
バージニア州は 3 位で、インフラストラクチャーではオハイオ州に次ぐ第 2 位、教育では第 5 位となっています。しかし、連邦予算と人員削減によりオールド・ドミニオンの経済ランキングは悪化し、昨年の14位から2026年には23位に下がった。
テキサス州は 4 位で、労働力で 1 位、経済と資本へのアクセスで 2 位となっています。しかし、依然として高い犯罪、劣悪な医療、包括性の欠如により、この孤立星州は生活の質で 49 位にランクされています。
対照的に、第 5 位のミネソタ州は、優れた医療、強力な労働者保護、包括的な州法を備え、生活の質で第 4 位にランクされています。しかし、北極州は税金や生活費が高く、非常に物価が高い場合があります。
今年最も改善された州はアーカンソー州で、ウォルマート、タイソン・フーズ、J.B.ハント・トランスポート・サービスの本拠地である企業の多い州北西部に労働者が流入している。 Natural State は、労働力部門で 23 ランク上昇して 13 位となり、全体で 28 位と 13 ランク上昇しました。
2026 年のボトムステートには古いスタンバイがいくつか含まれています
私たちは 50 州すべてをランク付けしているため、上位の州があれば下位の州も存在するはずです。
46 位はウェストバージニア州で、経済面で 48 位、資本へのアクセス面で 49 位にランクされています。しかし、山岳州は生活費ではナンバーワンです。
ルイジアナ州は 47 位です。ペリカン州立大学は経済部門で 47 位と悪い順位にあります。ビジネスフレンドリー度、48位。そして生活の質は46位です。
48位はロードアイランド州です。オーシャンステートは経済では最下位、資本へのアクセスでは第 48 位、インフラストラクチャーでは第 46 位にランクされています。それでもなお、アメリカで5番目に生活費が高い州であることに変わりはない。
49位はアラスカです。最後のフロンティアは、教育と資本へのアクセスでは最下位、インフラストラクチャでは49位にランクされています。
今年の最下位州はハワイです。アロハ州はインフラストラクチャーとビジネスコストでは最下位、生活コストでは第 47 位となっています。他のどの州よりも保育料が高額なため、ハワイの伝説的なライフスタイルも 2026 年には打撃を受けることになる。これにより、ハワイは生活の質で第 6 位に落ちます。
会話に参加する
あなたの州について言及されていませんか？ 2026 年のアメリカのビジネストップ州完全ランキング ページで、全体および競争力の 10 カテゴリーすべてでの順位を確認できます。
いつものように、CNBC は皆様からのフィードバックをお待ちしております。ソーシャル メディアでは、ハッシュタグ #TopStates を使用してください。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/09/ohio-no-1-americas-top-states-for-business-rankings.html",
    publishedAt: "2026-07-09T14:06:29+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "meta-jumps-into-ai-coding-market-in-effo-cee83039",
    title: "Meta jumps into AI coding market in effort to chase Anthropic and OpenAI",
    titleJa: "Meta、Anthropic と OpenAI を追いかけて AI コーディング市場に参入",
    summaryJa: "AI 責任者の Alexandr Wang 氏のリーダーシップの下、最初の人工知能モデルを発表してから 3 か月後、Meta は市場の重要な分野で OpenAI や Anthropic と競合しようとして、主要なアップデートを展開しています。Meta が木曜日に導入した Muse Spark 1.1 は、同社の「エージェントおよびコーディング作業にとってこれまでで最も強力なモデル」であると Wang 氏は CNBC のインタビューで述べた。 4月にリリースされた初期のMuse Sparkモデルは、「プライベートAPIプレビュー」を通じてテクノロジーにアクセスできる「一部のパートナー」のみが利用できた。",
    bodyOriginal: `Three months after unveiling its first artificial intelligence model under the leadership of AI chief Alexandr Wang, Meta is rolling out a major update as it attempts to compete with OpenAI and Anthropic in critical areas of the market.
Muse Spark 1.1, which Meta introduced on Thursday, represents its "strongest model for agentic and coding work yet," Wang said in an interview with CNBC. The initial Muse Spark model released in April was only available to "select partners" who could access the technology via a "private API preview."
Meta is making the new model's API available through a developer portal as part of a public preview, where users will be able to sign up and see instructions for integration. A Meta spokesperson said some early partners can already access the API, and new users "will be able to add themselves to a waitlist and be added from there over time." For now, Meta said it's limiting API access to its own properties rather than making it available on third-party platforms like the popular OpenRouter marketplace.
"This is going to be served on top of the computer infrastructure that we've built," Wang said.
It's Meta's second notable rollout for the Muse family this week. On Tuesday, Meta released Muse Image, originally code-named Mango, a model for creating images, as the company seeks to attract creators and advertisers to its offerings.
Meta CEO Mark Zuckerberg is coming under pressure from Wall Street to show a return on the company's massive and growing investment in AI infrastructure and development. While it's spending at the rate of its hyperscaler peers, Meta doesn't have a cloud infrastructure business (though it plans to start one), and it's failed to keep up with OpenAI, Anthropic and Google in developing popular models and AI applications.
Wang characterized pricing of the Muse Spark update as "very aggressive and attractive" compared with similar offerings from labs like Anthropic and OpenAI. He said every new API account will start with $20 in free credits. From there, the company will charge $1.25 per million tokens in input, and $4.25 per million tokens of output, he said.
"The goal is to really have attractive pricing that scales with immense consumption usage," Wang said.
He said Muse Spark 1.1 outperformed rival models in certain tasks involving the ability to interact with various third-party coding products and services.
Wang's Meta Superintelligence Labs, or MSL, trained Muse Spark 1.1 to excel in coding-related tasks because that ultimately improves the capabilities of AI agents that can autonomously perform multiple tasks like a fleet of human interns, he said.
"You kind of have to build coding capabilities as part of that in service of overall agentic capabilities," Wang said.
The tech industry's excitement about AI agents took off in the first half of 2026, in part due to the sudden popularity of OpenClaw, which developers could use to manage AI models that power supercharged digital assistants. Wang said Meta trained Muse Spark 1.1 "to be able to work well with all of the most popular harnesses that developers use today, and we felt that was the best approach for this model given our goal to maximize adoption."
Although Meta's previous AI strategy emphasized releasing its earlier Llama family of models to the open-source community, the company is now focusing on selling access to proprietary AI models.
Wang said that Meta is still "committed to open source" and that his MSL unit has a "variant of Muse Spark that is in development that we do intend to open source." He declined to say when the company would release it.
Wang added that he's been "dog-fooding" the latest Muse Spark model, and is excited about the technology's ability to be used as tool for improving personal health via tasks like searching the web, reading academic papers and accessing personal health-related data.
"It's one of these use cases that I think really encapsulates the needs of these agentic systems," Wang said of his AI and health experiments.
Wang said Meta is currently training a more powerful AI model, code-named Watermelon, but didn't say when it would be released. Muse Spark's code name was Avocado.`,
    bodyJa: `AI 責任者の Alexandr Wang 氏のリーダーシップの下、最初の人工知能モデルを発表してから 3 か月後、Meta は市場の重要な分野で OpenAI や Anthropic と競合しようとして、主要なアップデートを展開しています。
Meta が木曜日に導入した Muse Spark 1.1 は、同社の「エージェントおよびコーディング作業にとってこれまでで最も強力なモデル」であると Wang 氏は CNBC のインタビューで述べた。 4月にリリースされた初期のMuse Sparkモデルは、「プライベートAPIプレビュー」を通じてテクノロジーにアクセスできる「一部のパートナー」のみが利用できた。
Meta は、パブリック プレビューの一環として、開発者ポータルを通じて新しいモデルの API を利用できるようにしています。ユーザーはそこでサインアップして、統合の手順を確認できます。 Metaの広報担当者は、一部の初期パートナーはすでにAPIにアクセスでき、新規ユーザーは「順番待ちリストに自分を追加し、時間の経過とともにそこから追加されるようになる」と述べた。 Metaは今のところ、人気のあるOpenRouterマーケットプレイスのようなサードパーティプラットフォームでAPIを利用できるようにするのではなく、自社のプロパティへのAPIアクセスを制限していると述べた。
「これは、私たちが構築したコンピューターインフラストラクチャの上で提供されることになる」とワン氏は語った。
今週の Meta の Muse ファミリー向けの 2 番目の注目すべき展開です。メタ社は火曜日、同社の製品にクリエイターや広告主を引き付けることを目指して、画像作成用のモデルであるMuse Image（当初のコード名はMango）をリリースした。
Metaの最高経営責任者（CEO）であるマーク・ザッカーバーグ氏は、AIインフラストラクチャと開発に対する同社の巨額かつ成長を続ける投資の見返りを示すようウォール街から圧力を受けている。同業のハイパースケーラーと同程度の支出を行っている一方で、Meta にはクラウド インフラストラクチャ ビジネスがなく（開始する予定はあるものの）、人気モデルや AI アプリケーションの開発において OpenAI、Anthropic、Google に追いつくことができていません。
Wang 氏は、Anthropic や OpenAI などのラボが提供する同様のサービスと比較して、Muse Spark アップデートの価格設定は「非常に積極的で魅力的」であると特徴付けました。同氏は、すべての新しい API アカウントは 20 ドルの無料クレジットから開始すると述べました。そこから同社は、入力トークン 100 万あたり 1.25 ドル、出力トークン 100 万あたり 4.25 ドルを請求する予定であると同氏は述べた。
「目標は、膨大な消費量に合わせて魅力的な価格設定を実現することです」とワン氏は語った。
同氏は、Muse Spark 1.1は、さまざまなサードパーティのコーディング製品やサービスと対話する機能を含む特定のタスクにおいて、ライバルモデルよりも優れたパフォーマンスを発揮したと述べた。
Wang 氏のメタ スーパーインテリジェンス ラボ (MSL) は、Muse Spark 1.1 をコーディング関連のタスクで優れた能力を発揮できるようにトレーニングしました。これにより、人間のインターンの集団のように複数のタスクを自律的に実行できる AI エージェントの能力が最終的に向上するからだと同氏は述べました。
「エージェント機能全体のサービスの一部としてコーディング機能を構築する必要があるのです」と Wang 氏は言います。
AI エージェントに対するテクノロジー業界の興奮は 2026 年上半期に高まりました。これは、開発者が強力なデジタル アシスタントを強化する AI モデルを管理するために使用できる OpenClaw が突然普及したことも一因です。 Wang 氏は、Meta が Muse Spark 1.1 を「現在開発者が使用している最も一般的なハーネスのすべてで適切に動作できるようにトレーニングしました。採用を最大化するという目標を考慮すると、それがこのモデルにとって最良のアプローチであると感じました」と述べました。
Meta の以前の AI 戦略では、初期の Llama ファミリのモデルをオープンソース コミュニティにリリースすることに重点を置いていましたが、同社は現在、独自の AI モデルへのアクセスを販売することに重点を置いています。
Wang 氏は、Meta 氏は依然として「オープンソースに取り組んでいる」と述べ、彼の MSL 部門には「オープンソース化するつもりで開発中の Muse Spark の亜種」があると述べた。同氏は同社がいつリリースするかについては明言を避けた。
ワン氏は、最新の Muse Spark モデルを「ドッグフーディング」していると付け加え、ウェブ検索、学術論文の閲覧、個人の健康関連データへのアクセスなどのタスクを通じて、個人の健康を改善するためのツールとしてこのテクノロジーが使用できることに興奮していると付け加えた。
「これは、これらのエージェント システムのニーズを本当に要約していると思うユースケースの 1 つです」と Wang 氏は AI と健康に関する実験について述べました。
ワン氏は、メタは現在、コード名「ウォーターメロン」というより強力なAIモデルをトレーニングしていると述べたが、いつリリースされるかについては明らかにしなかった。ミューズ・スパークのコードネームはアボカドだった。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/09/meta-jumps-into-ai-coding-market-to-chase-anthropic-and-openai.html",
    publishedAt: "2026-07-09T14:00:01+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 6,
  },
  {
    id: "tanker-traffic-through-strait-of-hormuz-636c4fea",
    title: "Tanker traffic through Strait of Hormuz slows after Iranian attacks trigger renewed fighting with U.S.",
    titleJa: "イランの攻撃で米国との戦闘が再開され、ホルムズ海峡を通るタンカーの往来が鈍化",
    summaryJa: "今週、イランによる商船３隻への攻撃によりペルシャ湾が新たな戦争の瀬戸際に追い込まれて以降、ホルムズ海峡を通る石油タンカーの交通量が鈍化している。貿易情報会社クプラーの商品調査ディレクター、マット・スミス氏によると、水曜日にはタンカー１３隻がホルムズを通過したが、前週は１日平均３３隻だった。スミス氏によると、船はイランが管理する航路をたどるか、追跡を避けるためにトランスポンダーのスイッチを切ったという。",
    bodyOriginal: `Oil tanker traffic through the Strait of Hormuz has slowed after Iranian attacks on three commercial ships this week pushed the Persian Gulf to the brink of a renewed war.
Thirteen tankers crossed Hormuz on Wednesday compared with an average of 33 per day over the previous week, said Matt Smith, director of commodity research at the trade intelligence firm Kpler. The ships either followed the route controlled by Iran or switched their transponders off to avoid tracking, Smith said.
Oil prices have rallied more than 6% this week as investors worry that crude exports through Hormuz could plunge again as the U.S. and Iran fight for control of the strategic sea lane.
President Donald Trump said Wednesday that he believed the ceasefire with Iran was over after Tehran attacked three tankers transiting Hormuz earlier this week. The U.S. has launched two rounds of airstrikes against Iran and reimposed oil sanctions in retaliation for the tanker attacks.
"The collapse of the ceasefire framework, the reimposition of Iranian oil sanctions, and the scale of U.S. kinetic action inside Iran represent the most significant escalation of the conflict since its opening phase," the maritime intelligence firm Windward told clients in a Wednesday note.
But the oil market is not pricing in a complete closure of the strait, said Andy Lipow, president of Lipow Oil Associates, in a note to clients Thursday.
"It appears to be pricing in a new normal where periods of conflict (perhaps we might call them missile skirmishes) occur between periods of relative calm (or unease) that permit the transit of tankers," Lipow said.
Oil exports through Hormuz had rebounded after the U.S. and Iran signed a memorandum of understanding on June 17 to reopen the strait. Tehran promised safe passage to ships and agreed to not charge a toll for 60 days under the interim deal with the U.S.
But Tehran has demanded that ships use a northern route under its control to enjoy safe passage. It has attacked vessels using a southern route along Oman's coast that is protected by the U.S. Navy.
"This is part of this sporadic targeted campaign by Iran to destabilize that southern corridor and send a message to Gulf State producers that are not sending their oil via that northern corridor," said Michelle Wiese Bockmann, a senior maritime intelligence analyst at Windward.
Iran basically shut down Hormuz by threatening commercial ships after the U.S. and Israel launched a massive wave of airstrikes on Feb. 28 that killed its head of state Ayatollah Ali Khamenei. The closure of the strait dragged on for months, triggering the biggest supply disruption in history.`,
    bodyJa: `今週、イランによる商船３隻への攻撃によりペルシャ湾が新たな戦争の瀬戸際に追い込まれて以降、ホルムズ海峡を通る石油タンカーの交通量が鈍化している。
貿易情報会社クプラーの商品調査ディレクター、マット・スミス氏によると、水曜日にはタンカー１３隻がホルムズを通過したが、前週は１日平均３３隻だった。スミス氏によると、船はイランが管理する航路をたどるか、追跡を避けるためにトランスポンダーのスイッチを切ったという。
米国とイランが戦略的シーレーンの主導権を争う中、ホルムズ経由の原油輸出が再び落ち込む可能性があると投資家が懸念する中、原油価格は今週６％以上上昇した。
ドナルド・トランプ大統領は水曜日、イランが今週初めにホルムズを航行中のタンカー３隻を攻撃したことを受けて、イランとの停戦は終わったと信じていると述べた。米国はタンカー攻撃への報復としてイランに対する２度の空爆を開始し、石油制裁を再発動した。
「停戦枠組みの崩壊、イラン石油制裁の再発動、そしてイラン国内での米国の運動的行動の規模は、紛争の初期段階以来最も顕著なエスカレーションを表している」と海事情報会社ウィンドワードは水曜日のメモで顧客に語った。
しかしリポウ・オイル・アソシエイツの社長、アンディ・リポウ氏は木曜日の顧客向けメモで、石油市場は海峡の完全閉鎖を織り込んでいないと述べた。
「タンカーの航行が許可される比較的平穏な（または不安な）期間の間に紛争期間（ミサイル小競り合いと呼んでもいいかもしれない）が発生する新たな常態を織り込んでいるようだ」とリポウ氏は述べた。
ホルムズ経由の石油輸出は、米国とイランが６月１７日に海峡再開の覚書に署名してから回復していた。テヘランは船舶の安全な航行を約束し、米国との暫定合意に基づき60日間通行料を請求しないことに同意した。
しかしイラン政府は、船舶が安全に航行できるよう、同国の管理下にある北方航路を使用するよう要求している。米海軍が保護するオマーン沿岸の南ルートを利用して船舶を攻撃した。
ウィンドワード社の上級海洋情報アナリスト、ミシェル・ヴィーゼ・ボックマン氏は、「これは、南回廊を不安定にし、北回廊経由で石油を送らない湾岸諸国の生産国にメッセージを送るための、イランによる散発的標的作戦の一環だ」と述べた。
イランは、米国とイスラエルが2月28日に大規模な空爆を開始し、国家元首ハメネイ師を殺害した後、商船を脅迫してホルムズ島を基本的に閉鎖した。海峡の閉鎖は何か月も続き、史上最大の供給途絶を引き起こした。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/09/iran-strait-hormuz-oil-tanker-traffic-gulf-trump.html",
    publishedAt: "2026-07-09T13:37:15+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "porn-site-company-fined-630-000-over-fai-89e4ff02",
    title: "Porn site company fined £630,000 over failed age checks",
    titleJa: "ポルノサイト会社、年齢確認不合格で63万ポンドの罰金",
    summaryJa: "ポルノサイト会社、年齢確認不合格で63万ポンドの罰金- 公開されました",
    bodyOriginal: `Porn site company fined £630,000 over failed age checks
- Published
Ofcom has fined the operator of a pornography site £630,000 for failing to properly check the ages of its users.
Sites allowing adult content, including porn, have had to use "highly effective" age assurance to make sure UK visitors are 18 or older since July 2025.
But Ofcom, which enforces these requirements, said the company behind porn site Fapello had not introduced any checks and did not reply to requests for information on time.
"Age checks are no longer optional for porn sites in the UK," said George Lusty, director of enforcement at Ofcom.
"They are a cornerstone of our laws to protect children from content they should not be seeing."
The regulator opened an investigation into the porn site operator in November.
On Thursday, Ofcom said it had fined the company £600,000 for not introducing methods to check the age of users.
After it did not respond to its requests for information on time, Ofcom handed down an additional £30,000 penalty.
"Providers also need to know that if they don't supply accurate information to us on time, when we request it, they should expect to face enforcement action, including fines," added Lusty.
While the site has since blocked UK visitors, the regulator says it will continue to monitor its compliance.
Broader scrutiny
The fine is one of many handed down by Ofcom in recent months over age check failings.
In May, the regulator fined porn company YoungTek Solutions £600,000 for not putting systems in place to make sure UK visitors were over the age of 18.
And prior to that, the regulator levied a £1.35m fine on another adult site operator for failing to introduce age checks.
But Ofcom has also faced ongoing scrutiny over the effectiveness of its enforcement of the UK's age check rules for porn sites.
It was revealed in December the regulator had never heard from a firm handed a £1m fine - prompting questions of whether monetary penalties were enough to secure action.
However, that same company later began complying with Ofcom's rules.
Meanwhile Ofcom is involved in an ongoing dispute with online message board 4chan over its refusal to pay a £520,000 fine.
A lawyer for the firm has repeatedly mocked the regulator's threats of further fines or enforcement action with AI-generated cartoon images of hamsters.
Ofcom has set out a number of ways websites can verify the age of users, including through credit card checks, photo ID matching and estimating age using a selfie.
Whatever format platforms choose, they must be "technically accurate, robust, reliable and fair", it says.
The regulator said on Thursday it had opened a new investigation into another porn provider, Bit Hive, to assess its compliance - citing concern one of its age check methods "may not be highly effective".
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.
Related topics
- Published27 May
- Published5 May`,
    bodyJa: `ポルノサイト会社、年齢確認不合格で63万ポンドの罰金
- 公開されました
Ofcomは、ユーザーの年齢確認を適切に怠ったとして、ポルノサイトの運営者に63万ポンドの罰金を科した。
ポルノを含むアダルトコンテンツを許可するサイトは、2025年7月以降、英国の訪問者が18歳以上であることを確認するために「非常に効果的な」年齢保証を使用する必要がある。
しかし、これらの要件を強制しているオフコムは、ポルノサイト「ファペロ」を運営する会社はいかなる検査も導入しておらず、情報提供の要請にも期限までに返答しなかったと述べた。
「英国のポルノサイトでは、年齢確認はもはやオプションではない」とオフコムの執行ディレクター、ジョージ・ラスティ氏は語った。
「これらは、子どもたちを見てはいけないコンテンツから守るための法律の基礎です。」
規制当局は11月にポルノサイト運営者に対する調査を開始した。
オフコムは木曜日、ユーザーの年齢を確認する方法を導入しなかったとして同社に60万ポンドの罰金を科したと発表した。
情報提供要請に期限までに応じなかったため、Ofcom は追加の 3 万ポンドの罰金を言い渡した。
「プロバイダーはまた、私たちが要求したときに正確な情報を期限までに提供しなかった場合、罰金を含む強制措置に直面することを覚悟する必要があることを知っておく必要があります」とラスティ氏は付け加えた。
その後、同サイトは英国からの訪問者をブロックしているが、規制当局は今後もその遵守状況を監視し続けるとしている。
より広範な調査
この罰金は、年齢確認の不合格を理由にここ数カ月間にオフコムが言い渡した多くの罰金のうちの1つである。
規制当局は5月、英国の訪問者が18歳以上であることを確認するシステムを導入しなかったとして、ポルノ会社ヤングテック・ソリューションズに60万ポンドの罰金を科した。
そしてそれに先立ち、規制当局は年齢チェックの導入を怠ったとして別のアダルトサイト運営者に135万ポンドの罰金を課した。
しかし、Ofcom はまた、ポルノ サイトに対する英国の年齢確認規則の施行の有効性を巡って継続的な監視にも直面している。
12月には、規制当局が100万ポンドの罰金を言い渡した企業から何も聞いていないことが明らかになり、制裁金が措置を確保するのに十分なのかという疑問が生じた。
しかし、その同じ会社はその後、Ofcom の規則に準拠し始めました。
一方、Ofcom は 52 万ポンドの罰金の支払いを拒否したことをめぐり、オンライン掲示板 4chan と係争中である。
同社の弁護士は、AIが生成したハムスターの漫画画像を使って、追加の罰金や強制執行を行うという規制当局の脅しを繰り返し嘲笑してきた。
Ofcom は、クレジット カードの確認、写真付き ID の照合、自撮り写真を使用した年齢推定など、Web サイトがユーザーの年齢を確認できるさまざまな方法を確立しました。
プラットフォームがどのような形式を選択するとしても、それらは「技術的に正確で、堅牢で、信頼性があり、公平である」必要があると述べています。
規制当局は木曜日、別のポルノプロバイダーであるビットハイブのコンプライアンスを評価するため、同社の年齢確認方法の1つが「あまり効果的ではない可能性がある」という懸念を理由に、新たな調査を開始したと発表した。
Tech Decoded ニュースレターに登録して、世界のトップのテクノロジー ストーリーやトレンドをフォローしてください。英国外ですか？ここからサインアップしてください。
関連トピック
- 5 月 27 日公開
- 5 月 5 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c07ylddnvmyo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-09T11:29:31+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/a15f/live/ee3faaa0-7b86-11f1-881d-8fcf7e2296a7.jpg",
    readTime: 4,
  },
  {
    id: "how-can-i-get-air-conditioning-in-my-hom-3ca927ec",
    title: "How can I get air conditioning in my home and how much does it cost?",
    titleJa: "家にエアコンを設置するにはどうすればよいですか?また、その費用はどれくらいかかりますか?",
    summaryJa: "家にエアコンを設置するにはどうすればよいですか?また、その費用はどれくらいかかりますか?- 公開されました",
    bodyOriginal: `How can I get air conditioning in my home and how much does it cost?
- Published
As the UK experiences hotter summers and more regular heatwaves, households have been grappling with how to keep sweltering homes as cool as possible.
Air conditioning has been in hot demand, with retailers seeing their stock fly off the shelves and units online sell out.
The technology already features in many modern cars, hotels and other public places, yet historically homes have been designed to cope with cold weather and keeping heat in them.
Is it time the technology became a feature in most British homes?
Types of air con and how they work
The main function of air conditioning is to cool the temperature inside a building.
There are three main types of air con systems designed for homes:
Portable air conditioners: The clue is in the name. They are portable, standalone units, which can be used to cool individual rooms. They are simply plugged into the nearest socket and work by drawing in warm air, cooling it, and venting heat outside through a window via a pipe or ducting.
Split systems: These involve two units, one inside and one outside, that are fixed to a wall and linked by a pipe. The one outside acts as a condenser, which expels the unwanted heat into the air outside. You can buy one for just one room or you can get multiple indoor units to work with a single outdoor condenser, according to LG, the household appliance and white goods retailer. British Gas says, external such "ductless systems" are one of the most common options for UK homes.
Ducted air con: These systems are designed to serve the entire home, with a central unit pushing cooled air through a network of ducting, with vents in each room. Unlike the other options, this would require invasive renovation work to an existing property.
How much do they cost?
Costs range widely depending on what is wanted and/or required.
Portable units are the cheapest form of air con, ranging from £350 to £650 on average, depending on the brand and performance, according to Checkatrade., external
However, as demand has soared in recent weeks some retailers began selling the cooling machines for £149, as Lidl did in its middle aisles.
Wall mounted or split air con units can cost between £750 and £1,100 each, Checkatrade says - but that is just the unit, and does not include the labour and other installation costs, such as hooking it up to the property's electricity fuse board. Installation company Heatable suggests, external a full cost is typically £2,000 to £3,500, but can go up to £6,000 if you want to have it in more than one room.
Ducted air con systems cost the most, between £990 and £1,750 without installation costs, according to Checkatrade. Fitting the ducting or remedial work to hide it inside properties means it is likely to be more expensive than any of the other systems given the level of work involved. Heatable estimates it to be between £5,000 and £10,000, depending on the property size, layout and how complex the ductwork needs to be.
The size of both split and ducted units are determined by what is known as the BTU (British Thermal Unit), Checkatrade says, to ensure it will cool the space it's required to. The larger the BTU number, the bigger the room to cool, and therefore the more expensive the unit.
Following installation, consumer group Which? suggests the running costs "vary wildly" and depend on the type of system.
"A typical portable air conditioner adds roughly 25p to 40p an hour to your electricity bill," it says.
The pros and cons
Stating the obvious, the main benefit of having air con in a home is that it can keep it cool during times of extreme heat, meaning people can sleep, work and generally live more comfortably.
However, air con units require electricity, the price of which remains much higher now than it was a few years ago, and so you can expect your overall energy bill to increase if you purchase and use one regularly.
Some environmental groups have also raised concerns over the impact of such technology on the environment, including the chemicals used in units to cool air.
Portable air con units are easy to set up, use and move around homes. They are cheaper to buy than the alternatives and do not require professional installation.
But they can be more expensive to run due to not being as energy efficient.
Checkatrade says portable or window units are a good short-term solution and are also ideal for renters or those who live in listed buildings who cannot make major changes to their property.
Split systems are much better at cooling rooms and are also cheaper to run, according to Checkatrade. They are also quieter than portable units, but they do entail larger upfront costs and need to be installed by a professional tradesperson.
Ducting air con is the least noticeable option due to the vents and can cool multiple rooms. But when it comes to retrofitting older homes it can be complex due to having to find space for the equipment, which adds to installation costs.
Do you need planning permission to install air con?
You don't for portable units.
The government says "in most cases", planning permission is not required to install air con "for a small home if it would not materially affect the appearance of the building from outside".
It adds there is no blanket rule and says people should speak to their local authority to check the rules, adding "councils should take a common-sense approach".
What about heat pumps?
There are some heat pumps that can also work as air conditioning systems, although Which? says this depends on the type and whether the model is reversible.
"Air-to-air heat pumps are specifically designed to provide both heating and cooling by reversing the way they transfer heat - taking heat from outside to warm your home in winter, and removing heat from inside to cool it in summer," Which? says.
How do I keep cool if I don't want or can't afford air con?
Let in cool air and encourage air flow. Open windows on opposite sides of the house to encourage air flow, but only do this when the air temperature outside is cooler than inside, which tends to be overnight or in the early morning.
Keep warmer air out during the day. In the heat of the day it is best to keep your windows shut and blinds or curtains closed.
Use a fan to enhance the breeze. Fans are a relatively cheap and energy-efficient way to keep air moving and can help you stay cool.
Stay hydrated, wear loose-fitting clothes and take tepid showers. Tepid showers can help to cool your body temperature. The NHS recommends six to eight glasses of water a day, but you may need more in the heat.`,
    bodyJa: `家にエアコンを設置するにはどうすればよいですか?また、その費用はどれくらいかかりますか?
- 公開されました
英国では夏がさらに暑くなり、熱波が定期的に発生するようになり、各家庭は暑い家をできるだけ涼しく保つ方法に頭を悩ませています。
エアコンの需要は非常に高く、小売業者では在庫が棚から消え、オンラインではエアコンが売り切れとなっています。
この技術はすでに多くの現代の自動車、ホテル、その他の公共の場所に搭載されていますが、歴史的に住宅は寒さに対処し、室内の熱を保つように設計されてきました。
このテクノロジーが英国のほとんどの家庭に普及する時期が来たのでしょうか?
エアコンの種類と仕組み
空調の主な機能は建物内の温度を下げることです。
家庭用に設計されたエアコン システムには主に 3 つのタイプがあります。
ポータブルエアコン：ヒントは名前にあります。これらは持ち運び可能な独立型ユニットであり、個々の部屋を冷却するために使用できます。最も近いコンセントに差し込むだけで、暖かい空気を吸い込んで冷却し、パイプやダクトを介して窓から熱を屋外に排出します。
分割システム: 内側と外側の 2 つのユニットが壁に固定され、パイプで接続されています。外側のものは凝縮器として機能し、不要な熱を屋外の空気中に排出します。家電製品および白物家電の小売業者である LG によると、1 つの部屋専用に購入することも、複数の室内ユニットを 1 つの室外コンデンサーで動作させることもできます。 British Gas によれば、このような外部の「ダクトレス システム」は、英国の家庭で最も一般的なオプションの 1 つです。
ダクトエアコン: これらのシステムは家全体にサービスを提供するように設計されており、中央ユニットが冷気をダクトネットワークに送り込み、各部屋に通気口を備えています。他のオプションとは異なり、これには既存の物件に対する侵襲的な改修工事が必要になります。
費用はいくらですか?
費用は、何が必要か、何が必要かによって大きく異なります。
Checkatrade によると、ポータブルユニットは最も安価なエアコンで、平均価格はブランドや性能に応じて 350 ポンドから 650 ポンドの範囲です。
しかし、ここ数週間で需要が急増したため、Lidlが中央通路で販売したように、一部の小売業者は冷却機を149ポンドで販売し始めた。
Checkatradeによると、壁に取り付けられたエアコンユニットや分割式エアコンユニットの価格はそれぞれ750ポンドから1,100ポンドの間であるが、それは単なるユニットの金額であり、人件費や、物件の電気ヒューズボードに接続するなどのその他の設置費用は含まれていない。設置会社Heatableによると、屋外の全額費用は通常2,000ポンドから3,500ポンドですが、複数の部屋に設置したい場合は最大6,000ポンドになる可能性があります。
Checkatrade によると、ダクト付きエアコン システムが最も高価で、設置費用を除くと 990 ポンドから 1,750 ポンドの間です。ダクトを設置したり補修工事を行って敷地内に隠すことは、作業のレベルを考慮すると、他のシステムよりも費用がかかる可能性が高いことを意味します。 Heatable は、物件の規模、レイアウト、ダクト工事の複雑さによって異なりますが、費用は 5,000 ポンドから 10,000 ポンドの間であると見積もっています。
Checkatradeによると、分割ユニットとダクトユニットの両方のサイズは、必要な空間を確実に冷却できるように、BTU（英国熱量ユニット）として知られるものによって決定されます。 BTU の数値が大きいほど、冷却する部屋が広くなり、したがってユニットの価格も高くなります。
設置後、消費者団体「どっち?」ランニングコストは「大きく異なり」、システムの種類によって異なると示唆しています。
「一般的なポータブルエアコンを使用すると、1 時間あたりおよそ 25 ペンスから 40 ペンスの電気代が追加されます」と書かれています。
長所と短所
当たり前のことですが、家にエアコンを設置することの主な利点は、猛暑のときに涼しく保つことができることであり、これは人々が睡眠、仕事、そして一般的な生活をより快適にできることを意味します。
ただし、エアコンには電気が必要であり、その価格は数年前に比べて依然として高いため、定期的に購入して使用すると、全体の光熱費が増加することが予想されます。
一部の環境保護団体も、空気を冷却するためのユニットに使用される化学薬品など、このような技術が環境に与える影響について懸念を表明している。
ポータブルエアコンユニットは、セットアップ、使用、家の中での移動が簡単です。代替品よりも安価に購入でき、専門家による取り付けは必要ありません。
ただし、エネルギー効率が低いため、ランニングコストが高くなる可能性があります。
Checkatradeによれば、ポータブルまたはウィンドウユニットは短期的な解決策として優れており、賃貸人や、物件に大きな変更を加えることができない指定建造物に住んでいる人にとっても理想的であるという。
Checkatradeによると、スプリットシステムは部屋を冷却する能力がはるかに優れており、ランニングコストも安価です。また、ポータブルユニットよりも静かですが、多額の初期費用がかかり、専門の業者が設置する必要があります。
ダクトエアコンは通気口があるため最も目立たないオプションであり、複数の部屋を冷却できます。しかし、古い住宅を改修する場合は、機器を設置するスペースを確保する必要があるため、作業が複雑になる可能性があり、設置コストが増加します。
エアコンを設置するには計画許可が必要ですか？
ポータブルユニットには必要ありません。
政府は、「小規模住宅の場合、建物の外からの外観に重大な影響を与えない場合には、ほとんどの場合」エアコン設置に計画許可は必要ないとしている。
同報告書は、包括的な規則はないと付け加え、人々は規則を確認するために地方自治体に相談するべきだとし、「議会は常識的なアプローチを取るべきだ」と付け加えた。
ヒートポンプについてはどうですか?
空調システムとしても機能するヒートポンプがいくつかありますが、どれでしょうか?これはタイプと、モデルが可逆的かどうかによって異なると述べています。
「空対空ヒートポンプは、熱の伝達方法を逆にすることで暖房と冷房の両方を提供できるように特別に設計されています。冬には屋外から熱を取り込んで家を温め、夏には屋内から熱を取り除いて涼しくします。」と言う。
エアコンを使いたくない場合、またはエアコンを買う余裕がない場合、どうやって涼しく保つことができますか?
冷たい空気を取り込み、空気の流れを促進します。家の反対側の窓を開けて空気の流れを促しますが、これを行うのは外の気温が室内よりも低い場合で、夜間または早朝に行う傾向があります。
日中暖かい空気を遮断します。日中の暑いときは、窓を閉め、ブラインドやカーテンを閉めておくのが最善です。
風を良くするには扇風機を使用してください。ファンは比較的安価でエネルギー効率が高く、空気を循環させ、涼しさを保つのに役立ちます。
水分を補給し、ゆったりとした服を着て、ぬるま湯のシャワーを浴びてください。ぬるま湯のシャワーは体温を下げるのに役立ちます。 NHS は 1 日にグラス 6 ～ 8 杯の水を推奨していますが、暑いときにはさらに多くの水を必要とする場合があります。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c2ey1p0jnmxo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-09T10:00:08+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/ea7d/live/da01c550-7479-11f1-9125-bd35be688627.jpg",
    readTime: 8,
  },
  {
    id: "u-s-iran-trade-fresh-strikes-as-trump-sa-c04ca1d7",
    title: "U.S., Iran trade fresh strikes as Trump says he's 'not sure' he wants deal",
    titleJa: "米国とイラン、新たな攻撃を交わす トランプ大統領、合意を望んでいるかは「分からない」",
    summaryJa: "セントコムは、イランの軍事インフラや小型船舶に対して数十件の攻撃を行ったと発表した。トランプ大統領は、米国は「今夜」さらなる軍事行動をとる可能性があると述べた。",
    bodyOriginal: `U.S. forces have completed another round of strikes against Iran, U.S. Central Command said Thursday, saying they were aimed at further degrading Iran's ability to attack shipping in the Strait of Hormuz.
What targets CENTCOM says were hit
The U.S. forces struck approximately 90 Iranian military targets, including air defense systems, coastal surveillance assets, missile and drone storage sites, naval capabilities, and military logistics infrastructure along Iran's coastline, the U.S. Central Command said in a statement.
The attacks followed another round of strikes on July 7 that hit about 80 targets, the CENTCOM said, including more than 60 Islamic Revolutionary Guard Corps small boats, in response to Tehran attacking three commercial vessels navigating the critical energy waterway.
The IRGC has retaliated to the strikes by targeting the U.S. bases in Kuwait's Arifjan and Ali Al Salem as well as Bahrain's Juffair and the Sheikh Isa bases.
What Trump said about the ceasefire
The latest salvo came hours after President Donald Trump said he may no longer be interested in even trying to reach a deal with Iran. Trump earlier Wednesday had declared the fledgling U.S. ceasefire agreement with Iran "over" in light of renewed hostilities in the strait, and said he may order more military attacks.
"I'm not sure I want to make a deal with them," Trump said of Tehran during a press conference in Ankara, Turkey, where he had traveled to attend a summit of the NATO military alliance.
"We can play games, but I'm not sure I want to make a deal," Trump said, adding, "Let's just finish the job."
The president had been asked why he has so rapidly soured on Iran's rulers — recently blasting them as "scum" and "sick people" — when just a month earlier he had praised them as "smart," "very rational" and "nice to deal with."
"I got to know 'em," Trump replied.
He added that he still believed them to be more rational than previous leaders whom the U.S. had killed earlier in the war that began Feb. 28.
"But based on their actions over the last week or two, they're not, they're not doing a service to the people, and I think more than anything else is, I got to know them," he said.
Earlier Wednesday, Trump said that the U.S. ceasefire with Iran is "over" following the latest outbreak of violence in the Middle East.
Tehran on Tuesday attacked three commercial vessels in or near the Strait of Hormuz, according to U.S. Central Command and the Joint Maritime Information Center, a U.S.-led naval group.
Following those attacks, the U.S. revoked its waiver of sanctions on Iranian oil sales, which was part of the temporary ceasefire deal that the two countries struck last month.
Then, the U.S. said it launched dozens of retaliatory strikes on Iranian military infrastructure and small boats.
The strait, a major throughway for the world's oil trade, has been the main flashpoint for tensions during the war. Iran's ability to block the waterway, and its intent to start charging tolls on ships that want to pass through it, has given it immense leverage to resist the larger U.S. military. Trump retaliated by ordering a naval blockade of Iranian ports in the area.
As part of the deal, the U.S. agreed to lift its blockade and Iran agreed to make its "best efforts for the safe passage of commercial vessels" in the Gulf region.
Esmaeil Baqaei, Iran's Foreign Affairs Ministry spokesman, in an X post Wednesday afternoon accused the U.S. of violating that clause of the deal, claiming it "emphasizes" that Iran is responsible for "determining arrangements" for ships transiting the strait.
The U.S. "has challenged this clause and, in practice, violated the agreement's structure through its unilateral actions and also aggressive attacks against Iran," Baqaei wrote. "The Islamic Republic of Iran will steadfastly pursue the protection of its national interests and the exercise of its sovereignty."
Trump on Wednesday said of Iran, "I don't want to deal with them anymore." Trying to deal with the Islamic republic was a "waste of time," he added.
"As far as I'm concerned, it's over," Trump said of the ceasefire.`,
    bodyJa: `米中央軍は木曜日、米軍がイランに対する追加攻撃を完了したと発表し、ホルムズ海峡におけるイランの船舶攻撃能力をさらに低下させることが目的だと述べた。
CENTCOM が攻撃を受けたと発表しているターゲット
米中央軍は声明で、米軍は防空システム、沿岸監視資産、ミサイルや無人機の保管場所、海軍能力、イラン海岸線に沿った軍事兵站インフラなど約90のイランの軍事目標を攻撃したと発表した。
この攻撃は、重要なエネルギー水路を航行する商船３隻に対するイラン政府の攻撃に対抗して、７月７日に約８０の標的を攻撃した次の攻撃に続き、中央通信によれば、その中にはイスラム革命防衛隊の小型ボート６０隻以上が含まれていた。
革命防衛隊はこの攻撃に報復し、クウェートのアリフィジャン基地とアリ・アル・サレムの米軍基地、さらにはバーレーンのジュファイア基地とシェイク・イサ基地を標的とした。
トランプ大統領が停戦について語った内容
今回の一斉射撃は、ドナルド・トランプ大統領がイランとの合意に達することにもはや興味がないかもしれないと述べた数時間後に行われた。トランプ大統領は水曜日初め、海峡での敵対関係の再燃を考慮して、イランとのまだ始まったばかりの停戦合意が「終わった」と宣言し、さらなる軍事攻撃を命令する可能性があると述べた。
トランプ大統領は、北大西洋条約機構（NATO）軍事同盟首脳会議に出席するため訪れたトルコのアンカラでの記者会見で、テヘランについて「彼らと合意を結びたいかどうかは分からない」と述べた。
トランプ大統領は「ゲームをすることはできるが、合意を結びたいかどうかは分からない」と述べ、「とにかく仕事を終わらせよう」と付け加えた。
大統領は、つい1カ月前にはイランの支配者たちを「賢い」「非常に理性的」「対応が良い」と称賛していたのに、最近ではイランの支配者たちを「クズ」「病人」などと激しく非難し、なぜこれほど急速に態度を悪くしているのかと尋ねられていた。
トランプ氏は「彼らと知り合うようになった」と答えた。
同氏は、2月28日に始まった戦争の初期に米国が殺害したこれまでの指導者たちよりも、彼らの方が合理的だと依然として信じていると付け加えた。
「しかし、ここ１～２週間の彼らの行動を見る限り、彼らはそうではなく、国民への奉仕を行っていない。何よりも彼らのことを知ることができたと思う」と同氏は語った。
トランプ大統領は水曜日初め、最近の中東での暴力行為の発生を受けて、米国とイランとの停戦は「終わった」と述べた。
米国中央軍と米国主導の海軍グループである統合海洋情報センターによると、イラン政府は火曜日、ホルムズ海峡またはその近くで商船3隻を攻撃した。
これらの攻撃を受けて、米国はイラン石油販売に対する制裁の免除を取り消したが、これは両国が先月結んだ一時停戦協定の一部だった。
その後、米国はイランの軍事インフラや小型船舶に対して数十回の報復攻撃を開始したと発表した。
この海峡は世界の石油貿易の主要な通過点であり、戦争中に緊張の主な発火点となった。イランが水路を封鎖する能力と、そこを通過しようとする船舶に通行料を課し始めるという意図は、大規模な米軍に抵抗するための計り知れない影響力をイランに与えている。トランプ大統領は報復として、この地域のイラン港の海上封鎖を命令した。
合意の一環として、米国は封鎖を解除することに同意し、イランは湾岸地域で「商船の安全な航行に最善の努力」を払うことに同意した。
イラン外務省報道官エスマイル・バカエイ氏は水曜午後のXポストで、米国が合意条項に違反していると非難し、イランが海峡を通過する船舶の「取り決めを決める」責任があることを「強調している」と主張した。
米国は「この条項に異議を唱え、実際にはイランに対する一方的な行動や積極的な攻撃を通じて協定の構造に違反した」とバクアイ氏は書いた。 「イラン・イスラム共和国は国益の保護と主権の行使を断固として追求する。」
トランプ大統領は水曜日、イランについて「もう彼らとは関わりたくない」と述べた。イスラム共和国に対処しようとするのは「時間の無駄」だと同氏は付け加えた。
トランプ大統領は停戦について「私に関する限り、それは終わった」と述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/08/trump-iran-war-deal-hormuz-strait-ceasefire.html",
    publishedAt: "2026-07-09T07:23:00+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "oil-prices-ease-after-spiking-following-68493156",
    title: "Oil prices ease after spiking following fresh U.S. strikes against Iran",
    titleJa: "米国のイランに対する新たな攻撃を受けて原油価格が急騰した後、下落",
    summaryJa: "米国によるイランへの新たな攻撃を受けて急騰した原油価格は、木曜日には下落に転じ、中東での供給混乱に対する懸念が再燃した。国際ベンチマークであるブレント原油先物（9月渡し）は欧州時間序盤に0.3％安の1バレル＝77.73ドルで取引され、これまでの上昇分を消し去った。前取引では5.4％上昇し、1日としては5月4日以来最大の上昇率を記録した。",
    bodyOriginal: `Oil prices turned lower on Thursday having spiked after the U.S. carried out fresh strikes on Iran, renewing concerns about supply disruptions in the Middle East.
International benchmark Brent crude futures with September delivery traded 0.3% lower at $77.73 per barrel during early European hours, erasing earlier gains. The contract settled up 5.4% in the previous session, notching its biggest daily gain since May 4.
U.S. West Texas Intermediate futures with August delivery, meanwhile, traded down 0.2% at $73.40. WTI advanced 4.4% on Wednesday, registering its biggest daily gain since June 1.
The U.S. Central Command said Wednesday that fresh strikes on Iran were launched in response to Tehran's attacks on commercial shipping in and around the Strait of Hormuz.
U.S. President Donald Trump also signaled earlier in the day that he was no longer interested in negotiating a deal with Iran. Prior to that, he also said that the ceasefire between Iran and the U.S. was "over," following another wave of attacks in the Middle East.
"The market is again being forced to price the risk that renewed attacks on shipping, or a broader breakdown in US-Iran relations, could slow the normalisation of flows through the Strait of Hormuz," according to Saxo.
As the Strait of Hormuz is one of the most important energy chokepoints in the world, "even limited disruption can have an outsized impact on prompt pricing, freight costs and market sentiment," it added.`,
    bodyJa: `米国によるイランへの新たな攻撃を受けて急騰した原油価格は、木曜日には下落に転じ、中東での供給混乱に対する懸念が再燃した。
国際ベンチマークであるブレント原油先物（9月渡し）は欧州時間序盤に0.3％安の1バレル＝77.73ドルで取引され、これまでの上昇分を消し去った。前取引では5.4％上昇し、1日としては5月4日以来最大の上昇率を記録した。
一方、米国ウエスト・テキサス・インターミディエート先物（８月渡し）は０．２％安の７３．４０ドルで取引された。 WTIは水曜日に4.4％上昇し、1日としては6月1日以来最大の上昇を記録した。
米中央軍は水曜日、ホルムズ海峡およびその周辺における商業船舶に対するイラン政府の攻撃に対抗して、イランに対する新たな攻撃が開始されたと発表した。
ドナルド・トランプ米大統領も同日、イランとの合意交渉にはもはや興味がないことを示唆した。これに先立ち、中東での新たな攻撃の波を受け、イランと米国の間の停戦は「終わった」とも述べた。
サクソ氏は、「海運への新たな攻撃や、米国・イラン関係の広範な破綻により、市場は再びホルムズ海峡の流れの正常化を遅らせる可能性があるリスクを織り込むことを迫られている」と述べた。
ホルムズ海峡は世界で最も重要なエネルギーのチョークポイントの一つであるため、「限定的な混乱であっても、迅速な価格設定、輸送コスト、市場心理に多大な影響を与える可能性がある」と付け加えた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/09/oil-rises-as-iran-us-tensions-raise-concerns-over-supply-disruptions-.html",
    publishedAt: "2026-07-09T06:51:07+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 2,
  },
  {
    id: "life-of-sizewell-b-extended-by-another-2-70eb947d",
    title: "Life of Sizewell B extended by another 20 years",
    titleJa: "サイズウェルBの寿命がさらに20年延長",
    summaryJa: "サイズウェルBの寿命がさらに20年延長- 公開されました",
    bodyOriginal: `Life of Sizewell B extended by another 20 years
- Published
A nuclear power plant on the East Coast will produce electricity for a further 20 years after a deal was reached between its owner EDF and the government.
Sizewell B, near Leiston, Suffolk, started operating in 1995 and was due to reach the end of its life in 2035, but will now continue operating until 2055.
Robert Gunn, station director of Sizewell B, said the deal would ensure hundreds of jobs were safeguarded.
But Chris Wilson, from the campaign group Together Against Sizewell C (TASC), said future generations would be left dealing with the financial and environmental impact.
EDF runs Sizewell B and employs 620 staff and about 300 contractors at the plant.
The agreement will enable about £800m of plant investment by EDF, with the agreement due to be finalised later in the year.
Sizewell B is the country's only pressurised water reactor and provides energy to more than two million homes, producing 3% of the UK's energy.
According to EDF, the extension to its life would generate enough electricity to meet the needs of every home in East Anglia for almost 45 years.
Gunn said "major plant modifications and upgrades" would be made.
"Securing another 20 years also safeguards existing jobs and allows us to continue to recruit another generation of Suffolk young people for the nation's nuclear renaissance," he added.
The government has described keeping the plant open until 2055 as "good news", while Sir Patrick Vallance, minister for science, innovation, research and nuclear, said extending the life of a nuclear plant was a " normal thing to do".
"It means we've got more clean electricity for that period," he said.
"That's two and a half million homes' worth of electricity and 900 jobs."
Wilson said TASC applauded the goal to phase out fossil fuels, but condemned "the government's continued reliance on dirty and dangerous nuclear power".
He said this created a "multi-generational financial and environmental liability", leaving our descendants with years of flood defence maintenance and the "insurmountable challenge of safe, millennia-long, highly radioactive nuclear waste isolation, amid a changing climate".
"Global instability and conflicts in Iran and Ukraine have highlighted that nuclear power plants and their waste facilities are highly vulnerable targets, undermining their promise of energy security," he added.
"Relying on Sizewell B and C for a combined output of 4.4 GW concentrates immense power generation in East Suffolk, making the area a prime target for malicious attacks with potentially catastrophic environmental consequences.
"Furthermore, TASC believes this centralization increases the national grid's exposure to massive blackouts caused by a single accident or technical failure."
A spokesperson for the Office for Nuclear Regulation (ONR), the country's independent statutory regulator for nuclear safety, said it worked "constructively with EDF on their plans to extend the life of the nuclear plants by reviewing technical and safety case considerations while ensuring it achieves the required standards of safety and security in the most practical way."
It added: "The ongoing safety and security of operations at any nuclear site must be fully demonstrated to us as part of ongoing regulation which will be informed by our extensive, proportionate and targeted inspection and assessment regime."
Do you have a story suggestion for Suffolk? Contact us below.
Get in touch
Your Voice
Follow Suffolk news on BBC Sounds, Facebook, external, Instagram, external and X, external.
Related topics
More on Sizewell B
- Published17 February 2025
- Published11 October 2024
- Published9 January 2024`,
    bodyJa: `サイズウェルBの寿命がさらに20年延長
- 公開されました
東海岸の原子力発電所は、所有者であるEDFと政府との間で合意に達した後、さらに20年間発電することになる。
サフォーク州レイストン近郊のサイズウェルBは1995年に操業を開始し、2035年に耐用年数を終える予定だったが、現在は2055年まで操業を続けることになっている。
サイズウェルB局のロバート・ガン所長は、この協定により数百人の雇用が確実に守られると述べた。
しかし、運動団体「トゥゲザー・アゲインスト・サイズウェルC（TASC）」のクリス・ウィルソン氏は、将来の世代が経済的・環境的影響に対処することになるだろうと述べた。
EDF は Sizewell B を運営しており、工場では 620 人のスタッフと約 300 人の請負業者を雇用しています。
この合意によりEDFは約8億ポンドの工場投資が可能となり、合意は今年後半に完了する予定だ。
サイズウェル B は国内唯一の加圧水型原子炉であり、200 万世帯以上にエネルギーを供給し、英国のエネルギーの 3% を生産しています。
EDF によると、その耐用年数が延長されれば、イースト・アングリアの全家庭の需要をほぼ 45 年間満たすのに十分な電力が生成されることになります。
ガン氏は「プラントの大規模な改修とアップグレード」が行われるだろうと述べた。
「あと20年の期間を確保することで、既存の雇用も保護され、国の原子力ルネッサンスのためにサフォークの次の世代の若者を引き続き採用することが可能になる」と同氏は付け加えた。
政府は原発を2055年まで稼働し続けることを「良いニュース」と表現する一方、科学・イノベーション・研究・原子力大臣のパトリック・ヴァランス卿は、原発の寿命を延ばすのは「普通のこと」だと述べた。
「それは、その期間により多くのクリーンな電力が得られることを意味します」と彼は言う。
「これは250万世帯に相当する電力と900の雇用に相当します。」
ウィルソン氏は、TASCは化石燃料を段階的に廃止するという目標を称賛したが、「汚くて危険な原子力への政府の依存継続」を非難したと述べた。
同氏は、このことが「何世代にもわたる経済的・環境的責任」を生み出し、私たちの子孫に何年にもわたる洪水防御維持と「気候変動の中で、数千年にわたって安全に高放射性核廃棄物を隔離するという乗り越えられない課題」を残すことになると述べた。
「世界的な不安定性とイランとウクライナの紛争は、原子力発電所とその廃棄物施設が非常に脆弱な標的であり、エネルギー安全保障の約束を損なうものであることを浮き彫りにした」と同氏は付け加えた。
「サイズウェルBとCの合計出力4.4GWに依存することで、東サフォーク州に膨大な発電量が集中し、この地域が環境に壊滅的な影響を与える可能性のある悪意のある攻撃の主な標的となっている。
「さらに、TASCは、この集中化により、単一の事故や技術的故障によって引き起こされる大規模な停電に全国送電網がさらされる可能性が高まると考えている。」
原子力安全に関する独立した法定規制機関である原子力規制局（ONR）の広報担当者は、「最も現実的な方法で必要な安全性とセキュリティの基準を確実に達成しながら、技術的および安全性に関する考慮事項を検討することで、原子力発電所の寿命を延ばすというEDFの計画に建設的に取り組んでいる」と述べた。
さらに、「あらゆる原子力施設における継続的な安全性と安全性は、我々の広範かつ比例的かつ的を絞った検査・評価体制によって知らされる継続的な規制の一環として、我々に対して十分に実証されなければならない。」と付け加えた。
サフォークに関するストーリーの提案はありますか?下記までお問い合わせください。
連絡する
あなたの声
BBC Sounds、Facebook（外部）、Instagram（外部）、および X（外部）でサフォークのニュースをフォローしてください。
関連トピック
サイズウェル B の詳細
- 2025 年 2 月 17 日公開
- 2024 年 10 月 11 日公開
- 2024 年 1 月 9 日公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c1dy1rdv17lo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-09T05:27:18+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/662f/live/b1f72150-7a0e-11f1-b151-87c0badc88c3.jpg",
    readTime: 4,
  },
  {
    id: "ukraine-s-drone-playbook-is-wreaking-hav-b7c06596",
    title: "Ukraine’s drone playbook is wreaking havoc in Russia — and upending where NATO wants to invest",
    titleJa: "ウクライナの無人機戦略はロシアに大混乱を引き起こし、NATOが投資したい先をひっくり返す",
    summaryJa: "ウクライナの無人機攻撃はロシアとの戦争に関する見出しを独占しており、NATOの投資理論を覆した。4年間の戦争でドローンの生産と能力を強化したウクライナは、ロシアのエネルギー収入を遮断する継続的な取り組みの一環として、主要都市の知名度の高い製油所を標的として、ロシアのエネルギーインフラと軍事資産への攻撃を強化している。",
    bodyOriginal: `Ukraine's drone attacks have been dominating headlines about its war with Russia — and upended NATO's investment thesis.
Having boosted drone production and capabilities in four years of war, Ukraine has stepped up its attacks on Russian energy infrastructure and military assets, targeting high-profile oil refineries in major cities as part of a sustained push to cut off Russia's energy revenues.
Defense experts and strategists have described its drone campaign as pivotal in helping to stall Russia's military momentum, while also warning that Kyiv's deep-strike successes have drastically raised the risk of escalation.
Earlier this week, Ukraine marked what appeared to be one of the country's deepest attacks on Russian territory in the war so far.
Plumes of black smoke were seen billowing from a key oil refinery in the city of Omsk on Tuesday, prompting Ukrainian President Volodymyr Zelenskyy to declare that the country's upgraded drone capabilities have put Siberia "within reach." The Omsk facility is situated nearly 2,500 kilometers (1,553 miles) from Ukrainian territory and close to Russia's border with Kazakhstan.
Ukraine's advances on the battlefield spotlight how the rapid adoption of drones is reshaping modern warfare, as combat is becoming more autonomous, connected and data-driven.
How drones are changing the Russia-Ukraine war
Two things have changed to allow Ukraine to accelerate its long-range drone strikes deep within Russian territory, according to Bob Tollast, a research fellow in land warfare at the Royal United Services Institute, a London-based defense and security think tank.
A concerted effort from Ukrainian forces to boost production and improve inertial navigation, software and machine vision had all helped to improve resilience when satellite navigation is jammed, Tollast said.
Foreign support for Ukraine had also likely played a role, he added, noting that oil refineries and terminals were vast targets.
"We'll see how Russia responds, they have had limited success with nets and drone interceptors of the kind Ukraine uses, and for some time have placed air defence systems on towers and recently even tall buildings," Tollast told CNBC by email.
"But with Ukraine's domestically made cruise missiles like Flamingo on the scene hitting industrial sites (including air defence production) the picture is pretty ugly for Moscow," he continued.
"Ukraine's counter refinery campaign is now a rain of blows, but it might be too early to say if Russia will suffer lasting damage because the sector has long had spare capacity," Tollast said.
Russia has responded by also scaling its own drone production and integrating them more into its overall military.
NATO building a 'drone-ready alliance'
Beyond the frontline, Ukraine's drone campaign also appears to have influenced NATO's defense spending plans.
NATO Secretary General Mark Rutte said Tuesday that drones have "fundamentally altered" the character of modern warfare and have become a "decisive factor" on the battlefield, citing the Russia-Ukraine war as one example.
Rutte's comments came as he announced the launch of the alliance's so-called NATO Drone Edge initiative, a plan in which allies are slated to invest more than $40 billion in counter-drone capabilities over the next five years.
"Together, we are building a drone-ready Alliance. We are leveraging the latest innovative technologies, investing in our transatlantic defence industries, and learning real-world lessons from the battlefield in Ukraine," Rutte said.
Alongside cutting off Russian energy revenues, Ukraine's drone attacks are designed to try to force Russian President Vladimir Putin to bring an end to the war.
Ukraine's success on the battlefield has prompted a shift in how the country is viewed and its relationship to NATO and the EU. Security analysts and world leaders alike have highlighted that Ukraine increasingly has something to offer allies and shouldn't be seen as a mere beneficiary of military support and donations.
Ukraine is winning because they have become good at drones and counter-drone systems — technologies that other NATO allies aren't very good at, Ulrike Franke, senior policy fellow at the European Council on Foreign Relations, told CNBC.
Ukraine is holding all the cards, she said, adding that they have "drones and counter-drone systems, and indeed data on how to fight the Russians."
It comes as warfare is undergoing a major shift where expensive, more traditional tech is being challenged by a more agile, decentralized model, often spearheaded by startups and informed by what happened in Ukraine.
Ukraine became the global leader in drone warfare out of necessity, Morningstar analyst Loredana Muharremi said. "Facing a larger and better-equipped military, it could not compete symmetrically, forcing it to innovate rapidly with low-cost, commercially available drones adapted for military use."
"Real innovation wasn't the technology itself, but the procurement model," she added in emailed comments to CNBC.
Throughout the four-and-a-half-year war, Ukraine has built a much faster innovation cycle than that of legacy defense companies, which often span years.
Cooperation between the military, domestic startups, and private industry has allowed new technologies to be deployed in just weeks and drones to evolve continuously based on battlefield feedback, Muharremi said.
"The largest [financial] impact is expected to come through higher order intake and backlog over the next two to three years, with the more meaningful contribution to revenue and earnings from 2028 onward," Muharremi said.
Finland's Stubb: Ukraine has new leverage
Finnish President Alexander Stubb said Ukraine's Zelenskyy now "has the cards" to carry out long-range drone strikes, something the Trump administration said it did not approve of in October last year.
"There are two separate issues here. He has the cards for the long-range attacks, so the drones and the missiles that are hitting, say Russian oil refineries, and reducing their capacity to produce and export by 40%," Stubb told CNBC on Tuesday.
"And he is actually turning the tide with the Russian population, which is now for the first time being against the war. So, this has to have an effect on Russia's strategic thinking."
Finland's president warned, however, that "we shouldn't be all smiles about it," saying Ukraine needs air defense to bolster its war effort.
U.S. President Donald Trump held separate calls with Russia's Putin and Ukraine's Zelenskyy over the weekend and said Monday that a resolution to the conflict is "getting closer than people realize."`,
    bodyJa: `ウクライナの無人機攻撃はロシアとの戦争に関する見出しを独占しており、NATOの投資理論を覆した。
4年間の戦争でドローンの生産と能力を強化したウクライナは、ロシアのエネルギー収入を遮断する継続的な取り組みの一環として、主要都市の知名度の高い製油所を標的として、ロシアのエネルギーインフラと軍事資産への攻撃を強化している。
国防専門家や戦略家らは、ロシアの無人機作戦がロシアの軍事的勢いを失速させる上で極めて重要であると説明する一方、キエフの集中攻撃の成功がエスカレーションのリスクを大幅に高めていると警告している。
今週初め、ウクライナはこれまでの戦争でロシア領土に対する最も激しい攻撃の一つと思われる攻撃を行った。
火曜日、オムスク市の主要な製油所から黒煙が立ち上るのが目撃され、ウクライナのウォロディミル・ゼレンスキー大統領は、同国の改良されたドローン能力はシベリアを「手の届くところ」に置いたと宣言した。オムスクの施設はウクライナ領土から約2,500キロメートル（1,553マイル）離れた位置にあり、ロシアとカザフスタンの国境にも近い。
戦場でのウクライナの進歩は、戦闘がより自律的で、接続され、データ主導型になるにつれて、ドローンの急速な導入が現代の戦争をどのように再構築しているかに焦点を当てています。
無人機はロシアとウクライナの戦争をどう変えるか
ロンドンに本拠を置く国防・安全保障シンクタンク、王立ユナイテッドサービス研究所の陸戦研究員ボブ・トーラスト氏によると、ウクライナがロシア領土奥深くまで長距離無人機攻撃を加速できるようにするために、2つのことが変わったという。
トーラスト氏は、生産量を増やし、慣性航法、ソフトウェア、マシンビジョンを改善するためのウクライナ軍の協調的な取り組みが、衛星航行が妨害された場合の回復力の向上に役立ったと述べた。
同氏は、ウクライナに対する外国の支援も役割を果たした可能性が高く、製油所やターミナルが巨大な標的になっていると指摘した。
「ロシアがどう反応するか見てみよう。ロシアはウクライナが使用しているような網や無人機迎撃機では限定的な成功を収めているが、しばらくの間は塔や最近では高層ビルに防空システムを設置している」とトーラスト氏は電子メールでCNBCに語った。
「しかし、フラミンゴのようなウクライナ国産の巡航ミサイルが現場で（防空生産を含む）産業施設を攻撃していることから、ロシアにとって状況はかなり醜いものだ」と同氏は続けた。
「ウクライナのカウンター製油所作戦は今や打撃の雨となっているが、同部門には長い間余力があったため、ロシアが永続的なダメージを受けるかどうかを判断するのは時期尚早かもしれない」とトラスト氏は述べた。
ロシアも自国の無人機生産を拡大し、それを軍全体にさらに統合することで対応した。
NATO、「無人機対応同盟」を構築
前線以外でも、ウクライナの無人機作戦はNATOの国防支出計画にも影響を与えているようだ。
NATOのマーク・ルッテ事務総長は火曜日、ロシア・ウクライナ戦争を一例に挙げ、無人機は現代戦争の性格を「根本的に変え」、戦場では「決定的な要素」になったと述べた。
ルッテ氏のコメントは、同盟諸国が今後5年間で対ドローン能力に400億ドル以上を投資する予定の計画である、同盟のいわゆるNATOドローンエッジ構想の立ち上げを発表した際に出された。
ルッテ氏は「我々は共にドローン対応の同盟を構築している。我々は最新の革新的な技術を活用し、大西洋を横断する防衛産業に投資し、ウクライナの戦場から現実世界の教訓を学んでいる」と述べた。
ウクライナの無人機攻撃は、ロシアのエネルギー収入を遮断することに加えて、ロシアのウラジーミル・プーチン大統領に戦争終結を強制することを目的としている。
戦場でのウクライナの成功は、ウクライナに対する見方やNATOやEUとの関係に変化をもたらした。安全保障アナリストや世界の指導者らは同様に、ウクライナには同盟国に提供できるものが増えており、単なる軍事支援や寄付の受益者として見るべきではないと強調している。
ウクライナが勝利しているのは、他のNATO同盟国があまり得意ではない技術であるドローンや対ドローンシステムに長けているからだ、と欧州外交問題評議会の上級政策研究員ウルリケ・フランケ氏はCNBCに語った。
同氏は、ウクライナがすべてのカードを握っていると述べ、「ドローンや対ドローンシステム、そして実際にロシアと戦う方法に関するデータ」を持っていると付け加えた。
それは、戦争が大きな変化を迎えている中で起こり、高価で伝統的な技術が、多くの場合スタートアップによって主導され、ウクライナで起こったことに影響を受けた、より機敏で分散型のモデルに挑戦されている。
モーニングスターのアナリスト、ロレダナ・ムハレミ氏は、ウクライナは必然的に無人機戦争の世界的リーダーになったと述べた。 「より大規模でより装備の整った軍隊に直面すると、対称的に競争することができず、軍事用途に適合した低コストの市販ドローンによる急速な革新を余儀なくされました。」
「本当のイノベーションはテクノロジーそのものではなく、調達モデルだった」と彼女はCNBCへのメールコメントで付け加えた。
4年半にわたる戦争を通じて、ウクライナは数年に及ぶことも多い従来の防衛企業よりもはるかに速いイノベーションサイクルを構築してきた。
ムハレミ氏は、軍、国内新興企業、民間産業の協力により、わずか数週間で新技術の導入が可能となり、戦場でのフィードバックに基づいてドローンが継続的に進化することが可能になったと述べた。
ムハレミ氏は、「（財務上の）最大の影響は、今後2～3年間の受注量と受注残の増加によってもたらされると予想され、2028年以降の収益と収益へのより大きな貢献が見込まれる」と述べた。
フィンランドのストゥッブ氏：ウクライナには新たな影響力がある
フィンランドのアレクサンダー・スタッブ大統領は、ウクライナのゼレンシキー大統領が長距離無人機攻撃を実行する「カードを持っている」と述べたが、トランプ政権は昨年10月にこれを承認していないと述べた。
「ここには2つの別々の問題がある。彼は長距離攻撃のカードを持っているので、ドローンとミサイルがロシアの製油所を攻撃し、生産と輸出の能力が40％減少すると言う」とスタッブ氏は火曜日にCNBCに語った。
「そして彼は実際、ロシア国民の流れを変え、初めて戦争に反対している。したがって、これはロシアの戦略的思考に影響を与えるに違いない。」
しかし、フィンランド大統領は、ウクライナは戦争努力を強化するために防空が必要であると述べ、「この件について笑っているべきではない」と警告した。
ドナルド・トランプ米大統領は先週末、ロシアのプーチン大統領とウクライナのゼレンシキー大統領と別々に電話会談し、月曜日、紛争の解決は「人々が思っているよりも近づいている」と述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/09/ukraine-drone-strikes-russia-nato.html",
    publishedAt: "2026-07-09T05:15:02+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 7,
  },
  {
    id: "jackdaw-boss-warns-of-winter-fuel-shorta-5a6564f5",
    title: "Jackdaw boss warns of winter fuel shortages if gas field not approved",
    titleJa: "ニシコクマルガラスのボス、ガス田が承認されなければ冬の燃料不足になると警告",
    summaryJa: "ニシコクマルガラスのボス、ガス田が承認されなければ冬の燃料不足になると警告- 公開されました",
    bodyOriginal: `Jackdaw boss warns of winter fuel shortages if gas field not approved
- Published
The owners of the Jackdaw gas platform in the North Sea say it is "hyper critical" that the UK government approves production to avoid the risk of domestic supply shortages this winter.
Speaking to BBC News at the field 150 miles east of Aberdeen, Adura chief executive Neil McCulloch said the project was in its final stages and could meet 6% of the UK's gas needs from 1 October.
The industry regulator is considering revised applications for production at Jackdaw, and Adura's Rosebank oil field west of Shetland, after a court ruled that both had been unlawfully approved.
Environmental campaigners say this summer's deadly and record-breaking heatwaves demonstrate the need to tackle climate change by rejecting both projects.
But McCulloch said with only about eight days of gas storage, the UK would have limited options in the event of "a gas supply emergency."
He said this could come in the form of a prolonged period of still, cloudy weather which impeded the generation of wind and solar power, or hostility from "foreign threat actors".
BBC News has been given exclusive access to Jackdaw which is undergoing final checks and tests to be ready for production in the event of government approval being granted.
The "business-as-usual" atmosphere is somewhat surreal given the uncertainty hanging over the project, which has so far cost around £1.5bn according to Aberdeen-based Adura, a joint venture between Shell and the Norwegian state energy firm Equinor.
McCulloch said: "If I were the secretary of state for energy security and net zero, I'd be looking closely at where's my next source of energy security, and you're standing on it.
"The wells are drilled, they're hooked up. We're just readying the systems. It will be ready for the 1st of October.
"Jackdaw will play a vital part of this winter's gas supply," he added, providing energy security, employment and taxation to the UK.
Environmentalists say Jackdaw will only produce 2% of the country's annual gas demand during the lifetime of the field.
"It would be a huge betrayal of the British public for the UK government to approve new oil and gas fields at a time when ordinary people are suffering so much as a result of these record-breaking heatwaves," said Tessa Khan, executive director of the campaign group, Uplift.
In response McCulloch said: "So we all watch the same news, and we see that.
"But what we're saying is that Jackdaw should not take that on its shoulders, or it should take a very small portion of that.
"It's a very, very small proportion of the total global emissions."
As Andy Burnham prepares for Downing Street, he is under pressure from within the Labour party to allow more oil exploration and to lower and stabilise taxation on investment and production.
Former prime minister Sir Tony Blair, trade union leaders, and Westminster's energy committee are among those echoing US President Donald Trump's call for the UK to "open up the North Sea."
That is a challenge. The most accessible and most lucrative fields have largely been drained.
Production in the basin peaked in 1999 at 4.5 million barrels of oil (or equivalent) per day (BOE). In 2024 it produced just over one million BOE.
The Energy Transition Institute, external at Robert Gordon University predicts that current policies will lead to some 1,600 offshore job losses per year for the coming decade.
"Oil and gas is declining faster than many of us were expecting, but the renewables industry is simply not ready to take all the jobs," the institute's director, Prof Paul de Leeuw, told me.
Jackdaw owner says gas field will 'not materially influence' climate change
- Published18 hours ago
The city caught in the middle of the big energy shift debate
- Published30 April
Rosebank contains an estimated 300 million to 500 million barrels of oil, making it the largest known untapped field in UK waters.
Adura says the gas from Jackdaw could supply 1.4m homes.
Decisions on oil and gas licensing are a matter for the UK government at Westminster but the Scottish government, run by the pro-independence Scottish National Party, also takes an interest, and it is split on the subject.
Oil was once central to the economic case for Scotland leaving the UK but, as first ministers, the SNP's Nicola Sturgeon and Humza Yousaf both opposed Rosebank and Jackdaw.
Current First Minister John Swinney has tried to fudge the matter, saying new developments should only go ahead if they are compatible with the UK's commitment to reducing greenhouse gas emissions.
Last year, the Court of Session in Edinburgh ruled that both fields had been unlawfully approved because the consenting process had failed to take into account the impact on the climate of burning the oil and gas extracted from them.
The judge Lord Ericht said the operators would have to submit revised environmental impact assessments to the regulator, the North Sea Transition Authority (NSTA).
On Tuesday, Adura said the updated assessment it had been required to produce suggested Jackdaw would account for less than 0.02% of annual global greenhouse gases during its lifetime.
That claim was dismissed as "self-serving" by Greenpeace, whose UK chief scientist Doug Parr said approving the field would be "reckless and indefensible" in the context of international commitments to slow down global warming.
If the NSTA gives its approval, the final decisions will fall to the current Energy Secretary, and Burnham's potential chancellor, Ed Miliband.
More than any other Labour politician, in opposition and in government, Miliband has crafted a policy which is positive about renewable energy such as wind, wave and solar and sceptical of new oil and gas developments.
While Miliband has said that oil and gas will be part of the UK's energy mix for decades to come, he has also been clear that he believes no new fields should be explored.
"Drilling every last drop will not take a penny off bills," he argued in a speech on 21 April, adding that it "cannot give us energy security" either.
Critics accuse Miliband and departing prime minister, Sir Keir Starmer, of fumbling the transition to renewables, and causing hardship in north east Scotland, which is home to an estimated one in three of the UK's 115,000 offshore oil and gas workers.
The Conservatives say this is why they stormed to victory three weeks ago in Westminster's Aberdeen South by-election when they gained the seat from the SNP and pushed Labour into fourth place.
The morning after her party's emphatic win, Tory leader Kemi Badenoch told me the vote had been a "referendum on oil and gas".
Badenoch said she supported the transition to greener energy but added: "Renewables aren't ready.
"Simply switching off oil and gas is madness, especially when we're then importing oil and gas from Russia, of all places."
In the light of global economic turmoil and disruption to oil and gas supplies driven by the wars in Ukraine and Iran, Labour has shifted position, pledging to reform the energy profits levy - also known as the windfall tax which amounts to a 78% levy on production - and to allow some new drilling if it is linked (or tied-back in industry jargon) to existing facilities.
There is much less talk these days of Labour's flagship 2024 election policy, the creation of a publicly owned green energy company called GB Energy based in Aberdeen.
In April, the head of the International Energy Agency, an intergovernmental organisation that advises on energy policy, appeared to validate Miliband's scepticism.
Fatih Birol said approving Jackdaw and Rosebank "would not make any significant difference" to the global energy crisis unleashed by the US and Israel's war on Iran.
"It is up to the government, but these fields would not change much for the UK's energy security, nor would they change the price of oil and gas," he told the Guardian.
Back on Jackdaw, the work of preparation continues regardless.
Four huge columns await the delivery of high pressure gas from 5km below the platform, all but 100m of which is under the seabed.
This is a complex engineering project involving very high pressure gas and very high temperatures.
A few steps away we saw the enormous pipe which has been tied back to the existing Shearwater field, where the gas would be processed before being piped ashore to the St Fergus terminal in Aberdeenshire.
It all hangs in the balance.
The weather was calm as we visited Jackdaw but it is clear the field is in the middle of a stormy debate about how to power the nation.
- Published3 September 2025
- Published30 January 2025
- Published27 September 2023`,
    bodyJa: `ニシコクマルガラスのボス、ガス田が承認されなければ冬の燃料不足になると警告
- 公開されました
北海のジャックドーガスプラットフォームの所有者らは、今冬の国内供給不足のリスクを回避するために英国政府が生産を承認することが「非常に重要」だと述べている。
Aduraのニール・マカロック最高経営責任者（CEO）は、アバディーン東150マイルの現場でBBCニュースのインタビューに応じ、プロジェクトは最終段階にあり、10月1日から英国のガス需要の6％を満たすことができると述べた。
裁判所が両油田が違法に承認されたとの判決を下したことを受け、業界規制当局はジャックドー油田とシェトランド諸島西側のアドゥラのローズバンク油田での生産申請の修正を検討している。
環境活動家らは、今夏の致命的かつ記録的な熱波は、両方のプロジェクトを拒否することで気候変動に取り組む必要性を示していると主張する。
しかしマカロック氏は、ガス貯蔵が約8日分しかなく、「ガス供給緊急事態」が発生した場合、英国の選択肢は限られていると述べた。
同氏は、これは風力や太陽光発電の発電を妨げる曇りの天気が長期間続くこと、あるいは「外国の脅威主体」からの敵意という形で起こる可能性があると述べた。
BBC ニュースは、Jackdaw への独占的なアクセスを許可されており、政府の承認が得られた場合の生産準備に向けて最終チェックとテストが行​​われています。
シェルとノルウェーの国営エネルギー会社エクイノールの合弁会社、アバディーンに本拠を置くアデュラによると、プロジェクトに不確実性が漂っていることを考えると、「いつも通り」の雰囲気はやや現実離れしている。
マカロック氏は、「もし私がエネルギー安全保障とネット・ゼロ担当の国務長官だったら、次のエネルギー安全保障の源がどこにあるのかを注意深く検討するだろうし、あなたはその上に立っているだろう。
「井戸は掘削され、接続されています。私たちはちょうどシステムの準備をしているところです。 10月1日には完成する予定です。
同氏はさらに、「ニシコクマルガラスは今冬のガス供給において重要な役割を果たし、英国にエネルギー安全保障、雇用、税制を提供するだろう」と付け加えた。
環境活動家らは、ニシコクマルガラスは田畑の存続期間中に国内の年間ガス需要の２％しか生産しないだろうと主張している。
運動団体「アップリフト」のエグゼクティブディレクター、テッサ・カーン氏は「記録的な熱波で一般の人々が大きな被害を受けている時に英国政府が新たな油田・ガス田を承認することは英国国民に対する大きな裏切りだ」と述べた。
これに対してマカロック氏は、「つまり、私たちは皆同じニュースを見ており、それが分かるのです。
「しかし、私たちが言いたいのは、ニシコクマルガラスはそれを背負うべきではない、あるいはそのごく一部を引き受けるべきだということです。
「これは地球全体の総排出量に占める割合は非常に小さいです。」
アンディ・バーナムがダウニング街の準備を進める中、労働党内から石油探査の拡大を許可し、投資と生産に対する課税を引き下げ安定化するよう圧力を受けている。
トニー・ブレア元首相、労働組合指導者、ウェストミンスターのエネルギー委員会は、英国に「北海の開放」を求めるドナルド・トランプ米大統領の呼びかけに同調する人々の一人である。
それは挑戦です。最もアクセスしやすく、最も収益性の高い畑はほとんど枯渇してしまった。
この流域の生産量は 1999 年にピークに達し、日量 450 万バレル (または同等の原油) でした (BOE)。 2024年には100万BOE強を生産した。
ロバート・ゴードン大学外部のエネルギー移行研究所は、現在の政策により今後10年間、オフショアで年間約1,600人の雇用が失われると予測している。
「石油とガスは私たちの多くが予想していたよりも早く減少していますが、再生可能エネルギー産業はすべての雇用を奪う準備ができていません」と同研究所所長のポール・デ・レーウ教授は私に語った。
ニシコクマルガラスの所有者、ガス田は気候変動に「重大な影響を与えない」と語る
- 18 時間前に公開
都市はエネルギー転換の大規模な議論の真っただ中にある
- 4 月 30 日発行
ローズバンクには推定 3 億から 5 億バレルの石油が埋蔵されており、英国海域で知られている最大の未開発油田となっています。
アドゥラ氏は、ニシコクマルガラスからのガスは140万世帯に供給できると述べている。
石油とガスのライセンスに関する決定はウェストミンスターの英国政府の問題であるが、独立支持派のスコットランド国民党が運営するスコットランド政府も関心を持っており、この件については意見が分かれている。
かつて石油はスコットランドの英国離脱の経済問題の中心だったが、初代大臣としてSNPのニコラ・スタージョン氏とハムザ・ユサフ氏はともにローズバンク氏とジャックドー氏に反対した。
ジョン・スウィニー現首相は、英国の温室効果ガス排出削減の公約と合致する場合にのみ新たな開発を進めるべきだと述べ、この問題をごまかそうとしている。
昨年、エディンバラの議会裁判所は、同意プロセスで、そこから抽出された石油とガスの燃焼による気候への影響が考慮されていなかったため、両油田は不法に承認されたとの判決を下した。
エリヒト卿判事は、事業者は環境影響評価の修正版を規制当局である北海移行局（NSTA）に提出する必要があると述べた。
アドゥラは火曜日、作成するよう求められていた最新の評価では、ニシコクマルガラスがその一生の間に世界の年間温室効果ガスの0.02％未満を占めることが示唆されたと述べた。
この主張はグリーンピースによって「利己的」として却下されたが、グリーンピースの英国主席科学者のダグ・パー氏は、この分野の承認は地球温暖化を遅らせるという国際的な公約を踏まえると「無謀で弁護の余地がない」と述べた。
NSTAが承認した場合、最終決定権は現エネルギー長官とバーナム首相候補のエド・ミリバンドに委ねられることになる。
ミリバンド氏は、野党や政権内の他の労働党政治家よりも、風力、波力、太陽光などの再生可能エネルギーに前向きで、新たな石油やガスの開発には懐疑的な政策を策定してきた。
ミリバンド氏は、今後数十年にわたって石油とガスが英国のエネルギーミックスの一部になると述べたが、新たな分野を開拓すべきではないと考えていることも明言した。
同氏は4月21日の講演で、「最後の一滴まで掘削しても請求書は一銭も安くならない」と主張し、「エネルギーの安全保障も得られない」と付け加えた。
批評家らはミリバンド氏と退陣するキア・スターマー首相が再生可能エネルギーへの移行を手探りしており、英国の海洋石油・ガス関連労働者11万5,000人のうち推定3人に1人が拠点を置くスコットランド北東部に困難をもたらしていると非難している。
保守党は、これが3週間前のウェストミンスターのアバディーン南部補欠選挙でSNPから議席を獲得し、労働党を4位に押し上げて勝利を収めた理由だと主張している。
保守党のケミ・バデノック党首は、同党の大勝利の翌朝、投票は「石油とガスに関する国民投票」だったと私に語った。
バデノック氏は、環境に優しいエネルギーへの移行を支持すると述べたが、「再生可能エネルギーはまだ準備ができていない。
「石油やガスをただ止めるのは狂気の沙汰だ。とりわけロシアから石油やガスを輸入している場合にはなおさらだ。」
世界経済の混乱と、ウクライナとイランの戦争による石油・ガス供給の混乱を踏まえ、労働党は立場を転換し、エネルギー利益課税（生産額の78％に相当する棚ぼた税としても知られる）を改革し、既存の施設と結びついている（業界用語で縛り付けている）場合には、新規掘削を一部認めると約束した。
最近では、労働党の2024年選挙の目玉政策であるアバディーンに拠点を置くGBエナジーという公営のグリーンエネルギー会社の創設について話題になることはかなり少ない。
4月には、エネルギー政策について助言する政府間機関である国際エネルギー機関の長官が、ミリバンド氏の懐疑論を正当化する姿勢を見せた。
ファティ・ビロル氏は、ジャックドーとローズバンクの承認は、米国とイスラエルの対イラン戦争によって引き起こされた世界的なエネルギー危機に「大きな変化はもたらさない」と述べた。
同氏はガーディアン紙に対し、「それは政府次第だが、これらの油田は英国のエネルギー安全保障に大きな変化はなく、石油やガスの価格も変わらないだろう」と語った。
ニシコクマルガラスに戻ると、関係なく準備作業が続きます。
4 本の巨大な柱がプラットフォームの下 5 km から高圧ガスの供給を待ちますが、そのうち 100 メートルを除くすべてが海底の下にあります。
これは、非常に高圧のガスと非常に高温を伴う複雑なエンジニアリング プロジェクトです。
数歩離れたところに、既存のシアウォーター油田に結び付けられた巨大なパイプが見えました。ガスはそこで処理されてからアバディーンシャーのセントファーガスターミナルに陸上に運ばれます。
すべてはバランスの上にあります。
私たちがジャックドーを訪れたときの天気は穏やかでしたが、この分野が国家に電力を供給する方法についての嵐のような議論の真っ最中であることは明らかです。
- 2025 年 9 月 3 日発行
- 2025 年 1 月 30 日発行
- 2023 年 9 月 27 日公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cdx78n4nkvyo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-09T05:04:17+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/1127/live/fbe04900-7b0c-11f1-bd97-bb877df31663.jpg",
    readTime: 10,
  },
  {
    id: "trump-loses-appeals-court-bid-to-delay-p-f44eee59",
    title: "Trump loses appeals court bid to delay paying E. Jean Carroll $5M in damages",
    titleJa: "トランプ大統領、E・ジャン・キャロル氏への損害賠償金500万ドルの支払い延期を求める控訴審で敗訴",
    summaryJa: "ニューヨーク連邦控訴裁判所は水曜夜、作家の性的虐待と名誉毀損で民事責任を問う陪審評決で、E・ジーン・キャロル氏が損害賠償として500万ドルと利息を徴収するのを阻止するというドナルド・トランプ大統領の請求を棄却した。この却下は、マンハッタン連邦地方裁判所のルイス・カプラン判事が、2023年5月の陪審員賞を満たすためにトランプ大統領が3年前に裁判所に預けた資金から580万ドル近くを受け取るというキャロル氏の要求を認めた数時間後に行われた。",
    bodyOriginal: `A New York federal appeals court on Wednesday night rejected a request by President Donald Trump to block E. Jean Carroll from collecting $5 million plus interest for damages from a jury verdict that held him civilly liable for sexually abusing and defaming the writer.
The denial came hours after Manhattan federal District Court Judge Lewis Kaplan granted Carroll's request to receive nearly $5.8 million from funds Trump deposited with the court three years ago to satisfy the May 2023 jury award.
Trump's lawyers quickly appealed Kaplan's order to the 2nd U.S. Circuit Court of Appeals, and asked that court to stay the release of the money to Carroll.
"It is hereby ordered that the motion for administrative stay is denied," the 2nd Circuit said in its order.
The ruling does not address the merits of Trump's appeal of Kaplan's order. It means the order can be executed now, and that the appeals court will later consider Trump's arguments for overturning Kaplan's order, which could potentially result in Carroll being ordered to return the money.
Trump could ask the Supreme Court to block the disbursement order.
CNBC has asked a spokesman for Trump's legal team if the president will make such a request.
Kaplan, in his earlier order releasing the money to Carroll, pointed to the language of an agreement between her and Trump that called for her to be given the damage award if the Supreme Court denied his request that it hear his appeal of the verdict in the sexual abuse and defamation case in her favor.
The Supreme Court rejected Trump's request on June 29.
Kaplan, in a memo explaining his decision, said, "disbursement of funds would not cause defendant irreparable harm" and said Trump had been seeking to delay the case since Carroll first sued him.
"In the highly unlikely event that the Supreme Court were to (i) grant defendant's petition for rehearing, (ii) reverse itself and grant his previously denied cert. petition, and (iii) reverse the judgment in this case, defendant could bring suit to recover any funds erroneously disbursed," Kaplan wrote.
"In the last analysis, defendant has been stalling this case for years," Kaplan wrote.
"A jury unanimously concluded that he sexually abused and defamed plaintiff and awarded her damages accordingly," Kaplan wrote. "The judgment on that verdict has been upheld on appeal. En banc rehearing has been denied. The Supreme Court has denied certiorari without dissent."
"It is time for him to 'do equity' and pay the judgment," the judge wrote.
Kaplan's order brushed aside arguments by Trump's attorneys that Carroll cannot be paid the money unless the Supreme Court rejects the president's new, long-shot bid for reconsideration of his petition that the high court take his appeal.
The Supreme Court very rarely grants such requests after having denied an initial petition.
A spokesman for Trump's legal team, in a statement on Kaplan's order, said, "The American People stand with President Trump as they demand an immediate end to all of the Witch Hunts, including the Democrat-funded travesty of the Carroll Hoaxes. President Trump will keep winning against Liberal Lawfare, as he continues to focus on his mission to Make America Great Again."
CNBC has requested comment from Carroll's lawyers.
Trump's lawyers, Josh Halpern and Michael Madaio, in a filing Tuesday that argued Kaplan should not release the money, said, "Collection cannot begin while proceedings remain pending before the Supreme Court, which is currently the case."
"Paragraph 8 [of the agreement] does not permit collection while the rehearing petition remains unresolved," the attorneys wrote.
Trump's attorneys also argued that another reason Carroll should not get any money yet is that the agreement includes language requiring Trump to be repaid the money he deposited if the verdict is reversed.
Carroll "has repeatedly stated that she intends to give away all funds that she collects from him, and once those funds are distributed to third parties, they likely cannot be recovered," Trump's attorneys wrote.
Trump's related new petition to the Supreme Court says a rehearing is warranted because Trump will soon ask the high court to hear arguments on whether he has immunity from another lawsuit by Carroll over statements he made about her while president.
Trump also lost that case in Manhattan federal court, where a jury in January 2024 ordered him to pay Carroll $83.3 million in damages for defaming her when he denied her 2019 allegation that he raped her in a New York department store in the mid-1990s.
And if he has immunity in that case, the lawyers said, it could undercut the verdict in the other case that led to the $5 million award, because Carroll's attorneys introduced evidence of those same statements at the other trial, in addition to statements he made in 2022, when he was not the president.
Trump listed both verdicts as liabilities in his 2025 financial disclosure report released June 30.
Carroll's lawyers in a court filing last week argued she is entitled to automatically receive that award, plus accrued interest, because the Supreme Court rejected Trump's petition for a writ of certiorari, which would have led to a hearing on his appeal.
The court, which includes three justices appointed by Trump, did not note any dissents to that denial, and did not explain its reasons for rejecting Trump's request.
"This is the end of the line," Carroll's lawyer Roberta Kaplan told Judge Kaplan, who is not related to her, in a June 30 filing asking him to release the money to the writer.
"It is time for him to pay Carroll," Roberta Kaplan wrote.
"A petition for rehearing is likely to fail," Kaplan wrote. "Requiring Carroll to endure further delay while Defendant seeks rehearing would both be profoundly unfair and undermine the public interest."
Kaplan on Tuesday had filed with the court a proposed order for the disbursement of the money from the court's registry.
Trump's lawyers, in their filing Tuesday night, said Carroll was jumping the gun in asking to be paid now.
They pointed to language in the agreement the parties signed in 2023 to have the court hold Trump's money pending his appeals.
"Paragraph 8 permits collection only "[a]fter the latest of" three specified appellate events," Trump's lawyers noted.
"One of those events is the final denial of a petition for certiorari," or granting a hearing of an appeal, by the Supreme Court, the lawyers wrote.
"And another is the Supreme Court's entry of an order after granting certiorari "in connection with the Appeal," Trump's lawyers said.
"Both provisions confirm that collection cannot begin while proceedings remain pending before the Supreme Court, which is currently the case."
Judge Kaplan dismissed that argument in his memorandum explaining the order.`,
    bodyJa: `ニューヨーク連邦控訴裁判所は水曜夜、作家の性的虐待と名誉毀損で民事責任を問う陪審評決で、E・ジーン・キャロル氏が損害賠償として500万ドルと利息を徴収するのを阻止するというドナルド・トランプ大統領の請求を棄却した。
この却下は、マンハッタン連邦地方裁判所のルイス・カプラン判事が、2023年5月の陪審員賞を満たすためにトランプ大統領が3年前に裁判所に預けた資金から580万ドル近くを受け取るというキャロル氏の要求を認めた数時間後に行われた。
トランプ氏の弁護士らはカプラン氏の命令に対し直ちに第２巡回控訴裁判所に控訴し、同裁判所に対しキャロル氏への資金の釈放を保留するよう求めた。
第2巡回裁判所は命令文の中で、「行政停止の申し立てを却下するよう命じる」と述べた。
この判決は、カプラン氏の命令に対するトランプ氏の上訴のメリットについては触れていない。これは、命令が今すぐ執行できることを意味し、控訴裁判所は後にカプラン命令を覆すためのトランプ氏の主張を検討することになり、その結果、キャロル氏に金の返還命令が下される可能性がある。
トランプ大統領は最高裁判所に支出命令の差し止めを要請する可能性がある。
CNBCはトランプ大統領の法務チームの報道官に対し、大統領がそのような要請をするかどうか尋ねた。
カプラン氏は、キャロル氏に資金を釈放する以前の命令の中で、性的虐待と名誉毀損事件での性的虐待と名誉毀損事件での評決に対する上訴を彼女に有利に審理するよう求めるキャロル氏の要請を最高裁判所が拒否した場合、彼女に損害賠償を与えるという内容の彼女とトランプ氏との合意の文言を指摘した。
最高裁判所は6月29日、トランプ大統領の請求を却下した。
カプラン氏は自身の決定を説明するメモの中で、「資金の支払いは被告に取り返しのつかない損害を与えることはない」と述べ、トランプ氏はキャロル氏が最初に訴訟を起こして以来、訴訟を遅らせようとしていたと述べた。
「極めて可能性は低いが、最高裁判所が(i)被告の再審理の申し立てを認め、(ii)取り消して以前に却下された証明書の申し立てを認め、(iii)本件の判決を破棄した場合、被告は誤って支出された資金の回収を求めて訴訟を起こす可能性がある」とカプラン氏は書いた。
「最終的には、被告は何年もこの訴訟を停滞させてきた」とカプラン氏は書いた。
「陪審は満場一致で、原告に対して性的虐待と名誉毀損を行ったと結論付け、それに応じて損害賠償を認めた」とカプラン氏は書いた。 「その評決に対する判決は控訴審で支持された。大法廷での再審理は拒否された。最高裁判所は異議なく裁定を却下した。」
「彼が『公平に行動』して判決を支払う時が来た」と判事は書いた。
カプラン氏の命令は、高等法院が上告を受け付けるよう求める大統領の新たな長期的見通しの再提案を最高裁判所が拒否しない限り、キャロル氏に金を支払うことはできないとするトランプ氏の弁護士らの主張を一蹴した。
最高裁判所が最初の申し立てを却下した後、そのような要求を認めることはほとんどありません。
トランプ大統領の弁護団の報道官は、カプラン氏の命令に関する声明で、「米国民は、民主党が資金提供したキャロルでっちあげの茶番劇を含む、あらゆる魔女狩りの即時停止を要求するトランプ大統領を支持する。トランプ大統領は、アメリカを再び偉大にするという使命に引き続き注力し、自由法制に対して勝ち続けるだろう」と述べた。
CNBCはキャロルさんの弁護士にコメントを求めた。
トランプ氏の弁護士、ジョシュ・ハルパーン氏とマイケル・マダイオ氏は火曜日の提出文書で、カプラン氏は資金を解放すべきではないと主張し、「現在、最高裁判所で手続きが係争中である間は、徴収を開始することはできない」と述べた。
「（合意の）第8項では、再審理申し立てが未解決のままの徴収は認められていない」と弁護士らは書いている。
トランプ氏の弁護士らはまた、キャロル氏がまだ金銭を受け取るべきではないもう一つの理由は、判決が覆された場合にトランプ氏に預けた金の返済を求める文言が合意に含まれていることだと主張した。
トランプ氏の弁護士らは、キャロル氏は「集めた資金はすべて寄付するつもりだと繰り返し述べており、その資金が第三者に分配されると回収できない可能性が高い」と書いている。
最高裁判所に対するトランプ氏の関連する新たな請願書では、トランプ氏が近く高等法院に対し、大統領時代のキャロル氏に関する発言を巡るキャロル氏の別の訴訟から免責されるかどうかの弁論聴取を求める予定であるため、再審理が正当化されるとしている。
トランプ氏はマンハッタン連邦裁判所でも敗訴し、陪審は2024年1月、1990年代半ばにニューヨークのデパートでキャロル氏を強姦したというキャロル氏の2019年の主張を否認した際に、キャロル氏を名誉毀損したとして、同氏に8,330万ドルの損害賠償を支払うよう命じた。
そして、もしこの事件でキャロル氏に免責が認められれば、キャロル氏の弁護士は、キャロル氏が大統領でなかった2022年に行った発言に加え、他の裁判でも同様の発言の証拠を提出したため、500万ドルの判決につながった他の訴訟の評決が無効になる可能性があると弁護士らは述べた。
トランプ大統領は6月30日に発表した2025年の財務情報開示報告書で、両方の判決を負債として挙げた。
キャロルさんの弁護士は先週裁判所に提出した文書で、最高裁判所がトランプ氏の上告審理につながる特定令状の申し立てを却下したため、キャロルさんにはその裁定と未払い利息を自動的に受け取る権利があると主張した。
トランプ大統領に任命された3人の判事が参加する裁判所は、この拒否に対する異議を述べておらず、トランプ大統領の要請を拒否した理由も説明しなかった。
キャロルさんの弁護士ロバータ・カプラン氏は6月30日の提出書類の中で、キャロルさんと無関係のカプラン判事に対し、「これで終わりだ」と、キャロルさんへの金の解放を求めた。
「彼がキャロルにお金を払う時が来た」とロバータ・カプランは書いた。
「再審理を求める請願は失敗する可能性が高い」とカプラン氏は書いた。 「被告が再審理を求めている間、キャロルにさらなる遅延に耐えるよう要求することは極めて不公平であり、公共の利益を損なうことになる。」
カプラン氏は火曜日、裁判所の登録簿からの資金の支出を求める命令案を裁判所に提出していた。
トランプ氏の弁護士らは火曜日の夜の提出書類の中で、キャロル氏が今すぐ報酬を要求するのは鉄砲を飛び越えていると述べた。
彼らは、両当事者が2023年に署名した合意書に、トランプ氏の上訴まで裁判所がトランプ氏の資金を差し押さえておくという文言があることを指摘した。
トランプ氏の弁護士らは、「第8項では、指定された3つの控訴事由の『最後』以降にのみ収集を許可している」と指摘した。
「それらの出来事の一つは、最高裁判所による上告審の申し立ての最終的な却下、つまり上訴審理の許可である」と弁護士らは書いている。
「そしてもう一つは、最高裁判所が「上訴に関連して」裁定を認めた後に命令を出したことだとトランプ氏の弁護士は述べた。
「両方の条項は、現在最高裁判所で手続きが係属中である間は徴収を開始できないことを確認している。」
カプラン判事は命令を説明する覚書でその主張を却下した。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/08/trump-e-jean-carroll-supreme-court-sex-abuse.html",
    publishedAt: "2026-07-09T02:47:58+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 8,
  },
  {
    id: "china-consumer-price-growth-weakens-in-j-08f54b34",
    title: "China consumer price growth weakens in June while producer inflation rises to near 4-year high",
    titleJa: "中国の6月の消費者物価上昇率は鈍化する一方、生産者インフレ率は4年ぶりの高水準近くに上昇",
    summaryJa: "6月の中国の消費者物価は予想よりも伸びが鈍かったが、エネルギーコストの高騰が内需を圧迫し続けたため、卸売インフレが加速した。国家統計局が木曜日に発表したデータによると、６月の消費者物価は前年比​​１％上昇し、ロイター調査によるエコノミスト予想の１．１％伸びを下回り、５月の１．２％から鈍化した。",
    bodyOriginal: `China's consumer prices grew slower than expected in June, while wholesale inflation accelerated, as elevated energy costs continued to sap domestic demand.
Consumer prices rose 1% in June from a year ago, missing economists' estimates of 1.1% growth in a Reuters poll, and slowing from 1.2% in May, according to data released by the National Bureau of Statistics on Thursday.
Core CPI, excluding volatile food and energy prices, also rose 1% in June from a year earlier, edging down from the 1.1% increase in May. Food prices declined 1.6% from a year earlier, easing from a fall of 1.7% in May.
The producer price index jumped 4.1% from a year earlier, in line with economists' forecast and outpacing May's 3.9%. That marked the strongest growth since July 2022, according to LSEG data. On a month-on-month basis, however, PPI declined 0.3%, official data showed.
"Oil prices are by and large on an easing course, and this will prevent PPI from going higher," said Tianchen Xu, senior economist at Economist Intelligence Unit, while attributing the year-on-year strength to the low-base effect. "Factories can't fully pass on cost increases to downstream clients," Xu added, highlighting the entrenched weakness in domestic demand.
The producer prices recorded its worst decline in almost two years in June last year, falling 3.6% from the prior year, as a deepening price war rippled through the economy.
They returned to growth in March with input costs rising on the back of the Middle East conflict, helping end one of China's longest deflationary streaks in decades. Besides higher commodity costs owed to war-led supply disruptions, wholesale prices have also been lifted by a growing demand for artificial intelligence computing power, pushing up prices for tech equipment and semiconductors.
China's manufacturing activity expanded faster than expected in June, with experts citing external demand including for AI-related tech as driving the momentum.
Many investors in China increasingly view the two-speed growth — marked by robust exports versus weak consumption and housing market — as a defining long-term feature of the Chinese economy, said Neo Wang, China strategist at Evercore ISI.
Consumer sentiment remains subdued as households continue to grapple with the negative wealth effect stemming from the prolonged housing downturn, Wang added.
The export and manufacturing-led economic resilience is expected to reinforce Beijing's reluctance to roll out stimulus to revive tepid consumer demand. "Policymakers are likely to refrain from major new stimulus unless the slowdown persists beyond the conflict," said Gabriel Wildau, managing director at Teneo.
Wildau points to a top policy meeting by the 24-member Politburo of the Communist Party in late July as "the next opportunity to escalate policy stimulus."
The International Monetary Fund on Wednesday forecast China's economy to outperform the global growth this year, raising their growth forecast for China to 4.6%, up from its previous projection of 4.4%, while trimming global economic expansion to a sluggish 3%. China has set a modest growth target of 4.5%-5% this year.
They attributed that optimistic view to China's robust high-tech manufacturing and export performance, as well as frontloaded public infrastructure investments.`,
    bodyJa: `6月の中国の消費者物価は予想よりも伸びが鈍かったが、エネルギーコストの高騰が内需を圧迫し続けたため、卸売インフレが加速した。
国家統計局が木曜日に発表したデータによると、６月の消費者物価は前年比​​１％上昇し、ロイター調査によるエコノミスト予想の１．１％伸びを下回り、５月の１．２％から鈍化した。
変動の激しい食品とエネルギー価格を除いたコアCPIも6月は前年同月比1％上昇と、5月の1.1％上昇から小幅鈍化した。食料品価格は前年比１．６％下落し、５月の１．７％下落から鈍化した。
生産者物価指数は前年比４．１％上昇し、エコノミスト予想と一致し、５月の３．９％を上回った。 LSEGのデータによると、これは2022年7月以来の大幅な伸びとなった。しかし、公式データによると、前月比ではPPIは0.3％低下した。
エコノミスト・インテリジェンス・ユニットのシニアエコノミスト、ティエンチェン・シュー氏は、前年比の強さは低ベース効果によるものだとしながらも、「原油価格は概して緩和傾向にあり、これがＰＰＩの上昇を妨げるだろう」と述べた。徐氏は「工場はコスト上昇を下流の顧客に完全に転嫁することができない」と付け加え、根深い内需の弱さを強調した。
価格競争の激化が経済全体に波及する中、生産者物価は昨年6月に前年比3.6％下落し、ほぼ2年ぶりの最悪の下落を記録した。
中東紛争を背景に投入コストが上昇する中、3月には成長に戻り、中国の数十年で最も長いデフレの一つに終止符を打った。戦争による供給途絶による商品価格の上昇に加え、人工知能の計算能力に対する需要の高まりによって卸売価格も上昇し、ハイテク機器や半導体の価格を押し上げている。
中国の製造業活動は6月に予想を上回るペースで拡大し、専門家らはAI関連技術などの外需が勢いを牽引していると指摘している。
エバーコアＩＳＩの中国ストラテジスト、ネオ・ワン氏によると、中国の多くの投資家は、堅調な輸出と低迷する消費と住宅市場を特徴とする２倍速の成長が、中国経済の長期的な特徴を決定づけるものだとの見方を強めているという。
王氏は、長引く住宅不況によるマイナス資産効果に家計が引き続き対処しており、消費者心理は依然低迷していると付け加えた。
輸出と製造業主導の経済回復力は、鈍い消費需要を回復するための刺激策の展開に対する中国政府の消極姿勢を強めると予想される。テネオのマネジングディレクター、ガブリエル・ワイルドー氏は「景気減速が紛争を超えて持続しない限り、政策当局者らは大規模な新たな景気刺激策を控える可能性が高い」と述べた。
ヴィルダウ氏は、「政策刺激を強化する次の機会」として、7月下旬に開催される共産党政治局員24人によるトップ政策会議を挙げた。
国際通貨基金は水曜日、中国経済が今年の世界成長を上回ると予想し、中国の成長率予想を従来予想の4.4％から4.6％に引き上げる一方で、世界経済の伸びは鈍化する3％に下方修正した。中国は今年、４．５─５％という緩やかな成長目標を設定している。
彼らは、その楽観的な見方は中国の堅調なハイテク製造業と輸出実績、そして前倒しされた公共インフラ投資のおかげであると考えた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/09/china-cpi-ppi-june-inflation-iran-war-.html",
    publishedAt: "2026-07-09T02:31:37+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "platner-quits-maine-senate-race-democrat-c31dda1a",
    title: "Platner quits Maine Senate race; Democrats set to pick new nominee",
    titleJa: "プラトナー氏はメイン州上院議員選挙から撤退。民主党は新たな候補者を選ぶ予定",
    summaryJa: "民主党のメイン州上院議員候補グラハム・プラトナー氏は、2021年に女性から性的暴行を受けたと告発され、最も近い同盟者らとの間に乗り越えられない亀裂が生じたことを受け、水曜日、選挙戦から撤退する意向を表明した。民主党が共和党から議会の主導権を奪い取り、ドナルド・トランプ大統領の権力掌握を弱めようとする中、プラットナー氏の失脚は2026年の中間選挙に大きな変化をもたらす。 ５期を務めた共和党上院議員スーザン・コリンズ氏が保持するメイン州の議席を逆転させることは、こうした野望にとって極めて重要であり、同州の民主党は投票日まで４カ月を切った今、新たな候補者を擁立しなければならない。",
    bodyOriginal: `Democratic Maine Senate nominee Graham Platner said he intends to exit the race on Wednesday after a woman accused him of sexually assaulting her in 2021, causing an insurmountable rupture with his closest allies.
Platner's fall is a seismic shift in the 2026 midterm elections, as Democrats try to wrest control of Congress from Republicans and weaken President Donald Trump's grip on power. Flipping the Maine seat held by five-term Republican Sen. Susan Collins is critical to those ambitions, and Democrats in the state must now field a new candidate with less than four months until Election Day.
Platner, an oysterman and military veteran, said on Wednesday that he is "suspending campaign operations" after his support dried up and national fundraisers threatened to direct money away from his campaign.
"We believe that for the movement to continue, it can't be me," Platner said. "I intend to file my paperwork to withdraw. The process needs to assure that what comes next is reflective of the Mainers who, on June 9, turned out and showed that they are desperate for a different kind of politics."
In a direct-to-camera video, Platner said that his decision to withdraw "most certainly is not" an admission of guilt, but a reflection of the reality he now faces. He has denied claims made by his Jenny Racicot, who dated Platner and told Politico he forced himself on her in 2021 while heavily intoxicated.
"We did it the right way, we built a campaign, we engaged in electoral politics, we motivated people, we banded together," he said. "We did it the way we are told we are supposed to make change, and we won, and now they are not going to let us have it. Not if it's me."
His fall from grace is a tremendous swing-and-miss by Democrats, who once hoped the gruff, progressive Mainer could help the party reconnect with disaffected blue-collar voters who gravitated toward Trump. And his campaign's implosion now puts Democrats' hopes for Senate control in jeopardy by pushing a must-win state into harder-to-reach territory.
Members of the Maine Democratic Party voted Wednesday night to hold a nominating convention to select a replacement for Platner. The party said it will provide more information on the convention in the coming days. Maine law stipulates that the party can replace him on the ballot by July 27.
Multiple candidates have already hopped into the race to replace him, though the process for nominating a new candidate remains largely unclear.
Dan Kleban, the founder of Maine Beer Company who ran for the seat in the Democratic primary earlier this year, said on Wednesday he will try again for the nomination.
"We're all sick and tired of a system that's been rigged by corporate interests, and we've had enough meddling from Washington establishment insiders and New York City consultants trying to dictate who represents us," Kleban said. "I'm ready to fight for Mainers and bring a new generation of leadership to Washington."
Maine Secretary of State Shenna Bellows, who recently lost the primary for the state's gubernatorial election, also said she would consider entering the contest. Bellows ran against Collins in 2014 and got blown out by more than 30 percentage points, but the ground is much more favorable for a Democrat this cycle.
Nirav Shah, a public health official and the runner-up for governor, has also expressed interest in entering the ring.
And Troy Jackson, a former Maine Senate leader from rural Aroostook County who was a close Platner ally until the latest allegations, has already created an exploratory bid to potentially replace him on the top of the ticket.
Jackson publicized a poll on Wednesday that showed him with a lead over Collins, and most readily fits the mold that Platner built with his candidacy.`,
    bodyJa: `民主党のメイン州上院議員候補グラハム・プラトナー氏は、2021年に女性から性的暴行を受けたと告発され、最も近い同盟者らとの間に乗り越えられない亀裂が生じたことを受け、水曜日、選挙戦から撤退する意向を表明した。
民主党が共和党から議会の主導権を奪い取り、ドナルド・トランプ大統領の権力掌握を弱めようとする中、プラットナー氏の失脚は2026年の中間選挙に大きな変化をもたらす。 ５期を務めた共和党上院議員スーザン・コリンズ氏が保持するメイン州の議席を逆転させることは、こうした野望にとって極めて重要であり、同州の民主党は投票日まで４カ月を切った今、新たな候補者を擁立しなければならない。
カキ職人で退役軍人のプラットナー氏は水曜日、支持が枯渇し、全国の募金活動団体が同氏の選挙運動から資金を流出させると脅迫したことを受けて、「選挙活動を一時停止する」と述べた。
「この運動を継続するには私以外の存在はあり得ないと私たちは信じています」とプラットナー氏は語った。 「私は撤回の書類を提出するつもりだ。このプロセスでは、次に何が起こるかが、6月9日に出馬し、異なる種類の政治を切望していることを示したメイン派を反映したものであることを保証する必要がある。」
プラトナー氏はカメラに直接映したビデオの中で、辞退の決断は「間違いなく」罪を認めたことではなく、現在直面している現実を反映したものであると述べた。彼は、プラトナーとデートし、2021年に深酒に酔った状態で彼女に無理強いをしたとポリティコに語ったジェニー・ラシコットの主張を否定した。
「私たちは正しい方法で行動し、キャンペーンを展開し、選挙政治に取り組み、人々を鼓舞し、団結した」と同氏は語った。 「私たちは変化を起こすよう言われた通りに行動し、勝ったのに、今では彼らは私たちにそれを許さないでしょう。それが私なら別です。」
同氏の失脚は民主党にとって、大失敗だ。民主党はかつて、無愛想で進歩的なマインナー氏が、トランプ氏に惹かれ不満を抱いているブルーカラー層の有権者と党を再び結びつけるのに役立つのではないかと期待していた。そして彼の選挙陣営の崩壊により、勝利が必須の州をより到達が困難な領域に追い込み、上院支配という民主党の望みを危うくしている。
メイン州民主党の議員らは水曜夜、プラットナー氏の後任を選ぶ指名大会の開催に投票した。同党は、大会に関するさらなる情報を数日以内に提供すると述べた。メイン州法は、党が７月２７日までに投票用紙で同氏を後任にできると規定している。
すでに複数の候補者が同氏の後任争いに名乗りを上げているが、新たな候補者を指名するプロセスは依然としてほとんど不透明なままだ。
今年初めの民主党予備選に立候補したメイン・ビール社の創設者ダン・クレバン氏は水曜日、再び指名争いに挑戦すると述べた。
「私たちは皆、企業の利益によって不正に操作されたシステムにうんざりしており、誰が私たちを代表するかを決定しようとするワシントンのエスタブリッシュメント内部関係者やニューヨーク市のコンサルタントからの干渉にはもううんざりしている」とクレバン氏は語った。 「私はメインーズのために戦い、ワシントンに新世代のリーダーシップをもたらす準備ができている。」
最近、州知事選挙の予備選で敗れたメイン州のシェナ・ベローズ国務長官も、選挙戦への参加を検討すると述べた。ベローズ氏は2014年にコリンズ氏と対戦し、30ポイント以上の差で大敗したが、今回の選挙戦では民主党にとって地盤ははるかに有利だ。
公衆衛生当局者で知事選次点のニラフ・シャー氏もリングに上がることに興味を示している。
そして、田舎のアルーストック郡出身で元メイン州上院院内総務であるトロイ・ジャクソン氏は、最近の疑惑が発覚するまでプラトナー氏と緊密な同盟関係にあったが、既に同氏の後任候補者としての有力候補を模索している。
ジャクソン氏は水曜日、コリンズ氏をリードしており、プラトナー氏が立候補で築いた型に最もよく適合する世論調査を公表した。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/08/platner-quits-maine-senate-race-midterm-elections.html",
    publishedAt: "2026-07-09T01:32:34+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
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
