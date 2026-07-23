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
    id: "doj-withdraws-subpoenas-to-ny-times-repo-c2e83f8c",
    title: "DOJ withdraws subpoenas to NY Times reporters in Trump plane probe",
    titleJa: "司法省、トランプ大統領飛行機捜査でNYタイムズ記者らへの召喚状を撤回",
    summaryJa: "検察当局は木曜日、ニューヨークの連邦判事に対し、ドナルド・トランプ大統領の新型エアフォース・ワンに関する記事に関与したニューヨーク・タイムズ記者らに対し、司法省が入手した召喚状を取り下げると明らかにした。MS NOWによると、この動きはマンハッタンの連邦地方裁判所での公聴会で行われ、そこでアルン・スブラマニアン判事はタイムズ紙によるジャーナリストを対象とした召喚状を取り消す申し立てを検討していたという。",
    bodyOriginal: `The Department of Justice is withdrawing subpoenas it obtained for New York Times reporters involved in an article about President Donald Trump's new Air Force One jet, prosecutors told a federal judge in New York on Thursday.
The move came at a hearing in U.S. District Court in Manhattan, where Judge Arun Subramanian was considering a motion by the Times to quash the subpoenas targeting its journalists, according to MS NOW.
The Times has reported that the DOJ late last week informed the newspaper that "it had issued subpoenas to third-party phone service providers seeking several journalists' phone and text messaging records." On Monday, the paper reported
The DOJ also earlier had issued subpoenas on July 10 seeking to compel Times reporters to testify before a federal grand jury, the newspaper has reported. Several of the subpoenas were delivered by federal agents to reporters' homes.
The probe came after the Times reported security concerns about Trump's new Air Force One, which was donated by the nation of Qatar.
The subpoenas were issued by Manhattan U.S. Attorney Jay Clayton, whom Trump has nominated as director of national intelligence.
"The appearance of federal law enforcement agents on the doorstep of news reporters should shock the conscience of any American who believes in the Constitution and the press freedom it protects," said David McCraw, The Times' lawyer, in a statement on July 11.
"Our journalists report the facts and advance the American public's right to know how their government is operating and their taxpayer dollars are being used," McCraw said. "This brazen act should be seen as nothing more than an attempt to prevent the public from knowing what is happening in their country by intimidating journalists from doing their jobs."
This is breaking news. Please refresh for updates.`,
    bodyJa: `検察当局は木曜日、ニューヨークの連邦判事に対し、ドナルド・トランプ大統領の新型エアフォース・ワンに関する記事に関与したニューヨーク・タイムズ記者らに対し、司法省が入手した召喚状を取り下げると明らかにした。
MS NOWによると、この動きはマンハッタンの連邦地方裁判所での公聴会で行われ、そこでアルン・スブラマニアン判事はタイムズ紙によるジャーナリストを対象とした召喚状を取り消す申し立てを検討していたという。
タイムズ紙の報道によると、司法省は先週後半、「第三者の電話サービスプロバイダーに対し、複数のジャーナリストの電話とテキストメッセージの記録を求める召喚状を発行した」と同紙に通知したという。月曜日に同紙が報じた
同紙によると、司法省はこれに先立ち、タイムズ記者らに連邦大陪審での証言を強制するよう、7月10日に召喚状を発行していた。召喚状のいくつかは連邦職員によって記者の自宅に届けられた。
この調査は、カタール国から寄贈されたトランプ大統領の新型エアフォースワンに関する安全保障上の懸念をタイムズ紙が報じたことを受けて行われた。
召喚状はトランプ大統領が国家情報長官に指名したマンハッタン連邦検事のジェイ・クレイトン氏が発行した。
同紙の弁護士デービッド・マクロー氏は７月１１日の声明で、「連邦法執行官が報道記者の目の前に現れることは、憲法と憲法が守る報道の自由を信じる米国人の良心に衝撃を与えるはずだ」と述べた。
マクロー氏は「我が国のジャーナリストは事実を報道し、政府がどのように運営され、納税者の税金がどのように使われているかを知る米国民の権利を促進する」と述べた。 「この厚かましい行為は、ジャーナリストを脅迫し​​て仕事をさせないようにすることで、自国で何が起こっているのかを国民に知らせないようにする試みにほかならないと見るべきだ。」
これは速報です。更新を確認するには更新してください。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/23/doj-subpoenas-new-york-times-trump-plane.html",
    publishedAt: "2026-07-23T19:34:36+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    readTime: 2,
  },
  {
    id: "how-to-find-the-best-mortgage-rate-it-co-6e88a432",
    title: "How to find the best mortgage rate — it could save you $3,300 a year",
    titleJa: "最高の住宅ローン金利を見つける方法 — 年間 3,300 ドル節約できる可能性があります",
    summaryJa: "比較ショッピングをスキップした購入者は、住宅ローンをかなり払いすぎてしまうことがよくあります。",
    bodyOriginal: `Buyers who skip comparison shopping often end up considerably overpaying for their mortgage.`,
    bodyJa: `比較ショッピングをスキップした購入者は、住宅ローンをかなり払いすぎてしまうことがよくあります。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/how-to-find-the-best-mortgage-rate-it-could-save-you-3-300-a-year-e973e520?mod=mw_rss_topstories",
    publishedAt: "2026-07-23T19:20:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-89023780",
    readTime: 2,
  },
  {
    id: "cerebras-stock-gains-on-amd-partnership-beed7f4d",
    title: "Cerebras stock gains on AMD partnership",
    titleJa: "AMDとの提携でCerebras株が上昇",
    summaryJa: "同社がアドバンスト・マイクロ・デバイセズと人工知能システムで協力するという両チップメーカーの契約を結んだことを受け、木曜、セレブラス株は約４％上昇した。Cerebrasの最高経営責任者（CEO）Andrew Feldman氏は、サンフランシスコで開催されたAMDのAIカンファレンスで、同社のチップが今年後半からCerebrasのデータセンターに設置されるAMDのHelios AIシステムに使用されると述べた。サーバーの購入者は、同社の「ウェーハスケール」チップを使用してAMDシステムを構成することもできる。",
    bodyOriginal: `Cerebras shares gained about 4% on Thursday after the company forged an agreement with Advanced Micro Devices that involves the two chipmakers to work together on artificial intelligence systems.
Cerebras CEO Andrew Feldman said at AMD's AI conference in San Francisco that his company's chips will be used in AMD's Helios AI systems installed in Cerebras data centers starting later this year. Server buyers will be able to configure AMD systems with the company's "wafer-scale" chips as well.
At the event, AMD is detailing new chips and its Helios integrated system.
The partnership highlights how important "ultra-low latency" has become for AI firms. Chips like those made by Cerebras are configured to provide the first AI answers as quickly as possible, while making tradeoffs in terms of flexibility and total power. The companies claimed that their system would provide five times higher tokens per second per watt than competitors.
AMD rival Nvidia bought assets from Groq in December for $20 billion to integrate that company's low-latency technology into its systems.
"When something's a necessity, people want to use it, and they want to use it quickly," Feldman said.
Cerebras went public in May and has been a particularly volatile stock in its early days. After going public at $185, the stock shot up as high as $386.34 in its debut before falling below $161 in late June. With Thursday's pop, the shares are trading at $219.80.
In January, Cerebras announced a deal with OpenAI to deliver 750 megawatts of computing power through 2028, a deal worth over $10 billion.
WATCH: Open AI's chip will compete will compete with other GPUs`,
    bodyJa: `同社がアドバンスト・マイクロ・デバイセズと人工知能システムで協力するという両チップメーカーの契約を結んだことを受け、木曜、セレブラス株は約４％上昇した。
Cerebrasの最高経営責任者（CEO）Andrew Feldman氏は、サンフランシスコで開催されたAMDのAIカンファレンスで、同社のチップが今年後半からCerebrasのデータセンターに設置されるAMDのHelios AIシステムに使用されると述べた。サーバーの購入者は、同社の「ウェーハスケール」チップを使用してAMDシステムを構成することもできる。
AMDはイベントで、新しいチップとHelios統合システムについて詳しく説明している。
この提携は、AI企業にとって「超低遅延」がいかに重要になっているかを浮き彫りにしている。 Cerebras 製のようなチップは、柔軟性と総能力の点でトレードオフをしながら、AI の最初の答えをできるだけ早く提供するように構成されています。両社は、自社のシステムは競合他社よりも 1 秒あたりワットあたり 5 倍高いトークンを提供すると主張しました。
AMDのライバルであるNvidiaは、同社の低遅延技術を自社のシステムに統合するため、12月にGroqから資産を200億ドルで買収した。
「何かが必需品になると、人々はそれを使いたがりますし、すぐに使いたいと思うのです」とフェルドマン氏は言う。
セレブラスは5月に上場したが、初期の頃は特に値動きが激しい銘柄だった。株価は185ドルで公開された後、初公開時には386.34ドルまで急騰したが、6月下旬には161ドルを下回った。木曜日の株価上昇により、株価は219.80ドルで取引されている。
Cerebrasは1月、2028年まで750メガワットのコンピューティングパワーを提供するOpenAIとの契約を発表したが、これは100億ドル以上の価値がある。
注目: Open AI のチップは他の GPU と競合する`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/23/cerebras-stock-gains-on-amd-partnership.html",
    publishedAt: "2026-07-23T18:42:57+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "odds-of-federal-reserve-rate-hike-surge-36453f0a",
    title: "Odds of Federal Reserve rate hike surge as oil prices rip higher",
    titleJa: "原油価格の高騰でFRBの利上げ確率が上昇",
    summaryJa: "原油価格の上昇を受けて投資家は米連邦準備理事会（ＦＲＢ）の利上げに向けた準備を強めている。ＣＭＥのフェドウォッチツールによると、フェデラルファンド先物は中銀が９月の政策会合で借入コストを引き上げる可能性を約８２％織り込んでいる。 1週間前、その確率は53％未満にとどまっていた。",
    bodyOriginal: `Investors are increasingly preparing for the Federal Reserve to hike interest rates as oil prices climb.
Fed funds futures are pricing in a roughly 82% likelihood that the central bank lifts borrowing costs at its September policy meeting, according to CME's FedWatch tool. A week ago, those odds sat below 53%.
The central bank is still broadly expected to keep rates unchanged at the current 3.50% to 3.75% at its gathering next week. But even then, there's a growing minority planning for an increase: Fed funds futures trading indicates a nearly 38% probability of a quarter percentage point hike, up from less than 12% a week ago.
Brent, the global crude benchmark, hit $100 a barrel on Thursday for the first time since late May amid a new round of tit-for-tat attacks between the U.S. and Iran. The average price for a gallon of gasoline in the U.S. reached $4 per gallon this week — the highest in more than a month, according to AAA.
Thursday's employment data bolstered the view that the Fed can focus more on inflation — which could accelerate as energy prices climb — than the health of the labor market.
Initial jobless claims dropped to 187,000 in the week ended July 18, the Labor Department reported. That was the fewest claims since 1969, when the U.S. population was 60% of what it is today.
"At the moment, the outlook for economic growth is showing some signs of overheating if today's weekly jobless claims figures can be believed," said Christopher Rupkey, chief economist at FWDBONDS. "But for how long is the question if energy prices continue to spiral upward."
Rising expectations for a rate increase may be adding to the downward pressure on the stock market Thursday, according to Larry Tentarelli, chief technical strategist at the Blue Chip Daily Trend Report. That's on top of the breakout in oil prices and Treasury yields, and Alphabet's post-earnings swoon, he said.
The blue-chip Dow Jones Industrial Average tumbled more than 600 points in midday trading. The Nasdaq Composite — heavily weighted to technology stocks that can be sensitive to higher borrowing costs — shed nearly 3%.
"You really just have a perfect storm of headwinds right now," Tentarelli said.
"We've got a Fed meeting in six days, and I think investors should not be in a hurry to buy anything," he added. "There's times where you can just sit it out and be patient."
'A readthrough'
Market participants looking for insights into the Fed's outlook are closely monitoring the 2-year U.S. Treasury yield. The yield, which rose more than 6 basis points on Thursday, offers "a readthrough on what the Fed might do next," said Ross Mayfield, an investment strategist at Baird.
While Mayfield said investors don't need to worry about an interest rate move next week, September feels like a "live" meeting for the Fed.
Kalshi traders have similarly increased their bets of a September quarter point increase in recent days. Odds of such a move at that meeting rose to 48% midday on Thursday, up from about 30% a week ago.
To be sure, economists' interest rate outlook through 2026 doesn't signal an environment with tighter monetary policy.
The consensus forecast remains that the Fed won't hike rates this year, according to FactSet. In 2027, economists anticipate the central bank will lower borrowing costs by half a percentage point.
— With additional reporting by CNBC's Sean Conlon`,
    bodyJa: `原油価格の上昇を受けて投資家は米連邦準備理事会（ＦＲＢ）の利上げに向けた準備を強めている。
ＣＭＥのフェドウォッチツールによると、フェデラルファンド先物は中銀が９月の政策会合で借入コストを引き上げる可能性を約８２％織り込んでいる。 1週間前、その確率は53％未満にとどまっていた。
中銀は来週の会合で政策金利を現在の３．５０─３．７５％に据え置くと依然として大方予想されている。しかしそれでも、利上げを計画する少数派は増えている。フェデラル・ファンド先物取引によると、4分の1ポイント利上げの確率は38％近くと、1週間前の12％未満から上昇している。
米国とイランの新たな報復攻撃のさなか、世界の原油指標であるブレント原油価格は木曜日、5月下旬以来初めて1バレル＝100ドルに達した。 AAAによると、今週米国内のガソリン1ガロンの平均価格は1ガロン当たり4ドルに達し、ここ1カ月以上で最高値となった。
木曜日の雇用統計は、FRBが労働市場の健全性よりもインフレ（エネルギー価格の上昇で加速する可能性がある）に重点を置くことができるという見方を裏付けた。
労働省の報告によると、7月18日までの週の新規失業保険申請件数は18万7,000件に減少した。これは、米国の人口が現在の60％だった1969年以来、最も少ない申請件数だった。
ＦＷＤＢＯＮＤＳのチーフエコノミスト、クリストファー・ラプキー氏は「現時点では、この日の週間失業保険申請件数が信じられるとすれば、経済成長見通しは過熱の兆候を示している」と述べた。 「しかし、エネルギー価格がいつまで上昇し続けるかという問題はある。」
ブルーチップ・デイリー・トレンド・リポートのチーフテクニカルストラテジスト、ラリー・テンタレッリ氏によると、利上げ期待の高まりが木曜日の株式市場への下押し圧力を強めている可能性がある。これに原油価格と米国債利回りの急騰が加わり、アルファベットのその後の収益は急落したと同氏は述べた。
優良銘柄のダウ工業株30種平均は正午の取引で600ポイント以上下落した。ナスダック総合株価指数は、借入コストの上昇に敏感なハイテク株の比重が高く、3%近く下落した。
「今は本当に、完璧な逆風の嵐にさらされているんです」とテンタレッリ氏は語った。
同氏は「6日後にFRB理事会が予定されており、投資家は急いで何かを買うべきではないと思う」と付け加えた。 「ただ座って我慢できる場合もあります。」
「読み切り」
FRBの見通しについての洞察を求めている市場参加者は、2年米国債利回りを注意深く監視している。ベアードの投資ストラテジスト、ロス・メイフィールド氏は、木曜日に６ベーシスポイント（ｂｐ）以上上昇した利回りは「ＦＲＢが次に何をするかについての見通し」を提供すると述べた。
メイフィールド氏は、投資家は来週の金利動向を心配する必要はないと述べたが、9月はFRBにとって「ライブ」会合のような気がする。
カルシのトレーダーらもここ数日、同様に９月の四半期ポイント上昇への賭けを強めている。同会議でそうした動きが見られる確率は木曜正午には４８％に上昇し、１週間前の約３０％から上昇した。
確かに、エコノミストの2026年までの金利見通しは金融引き締め環境を示唆するものではない。
ファクトセットによると、FRBは今年利上げしないというのがコンセンサス予想に変わりはない。エコノミストらは２０２７年に中央銀行が借り入れコストを０．５％ポイント引き下げると予想している。
— CNBC のショーン・コンロン氏による追加レポートあり`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/23/fed-interest-rate-odds-oil-jobless-claims.html",
    publishedAt: "2026-07-23T18:42:20+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "congress-splits-on-war-powers-resolution-4f43fc7c",
    title: "Congress splits on war powers resolutions to force Trump to abandon Iran war",
    titleJa: "トランプ大統領にイラン戦争放棄を強制する戦争権限決議をめぐって議会が分裂",
    summaryJa: "紛争が危険な新たな段階にエスカレートし、原油価格が1バレルあたり100ドルを超える中、議会は木曜日、ドナルド・トランプ大統領にイランとの戦争放棄を強制することを目的とした2つの戦争権限決議の推進について意見が分かれた。この動きは、トランプ大統領が和平交渉決裂を受けてイランとの戦争を再開したと議会に通告して以来、初めての採決となった。数週間にわたる不安定な停戦を経て紛争が再燃したのは、米国の中間選挙の数カ月前だった。過半数の共和党が僅差の多数派を維持する計画を台無しにする恐れがある。",
    bodyOriginal: `Congress on Thursday split on advancing a pair of war powers resolutions aimed at forcing President Donald Trump to abandon his war with Iran, as the conflict escalates into a deadly new phase and oil tops $100 a barrel.
The moves were the first vote since Trump informed Congress that he restarted the war with Iran following the breakdown of peace negotiations. The conflict's revival after weeks of a shaky ceasefire comes just months before the U.S. midterm elections. It threatens to scramble the majority Republicans' plan to maintain their razor-thin majorities.
The Senate on Thursday voted 47-49 to kill a joint resolution under the War Powers Act to force Trump to end hostilities with Iran. That chamber's action follows a 214-208 House vote earlier in the day to approve a similar measure under the War Powers Act.
Even if Congress does try to force Trump to withdraw, he would be almost certain to veto anything that reaches his desk.
"There is no good way out of a bad war," said Sen. Chris Van Hollen, D-Md., who offered the resolution in the Senate. "This is an opportunity for this Congress to finally take responsibility."
Sen. Susan Collins, R-Maine, voted for the resolution. Collins is locked in a tough reelection bid in a state that is now reliably blue. Sen. John Fetterman of Pennsylvania was the lone Democrat to vote against the measure.
Republicans argued before the vote that cutting off the administration's ability to wage war now would tie their hands.
"If we vote now and Republicans voted to cut and run and force the president in the middle of this to withdraw, it would be a huge blow to American credibility," said Sen. John Kennedy, R-La.
Kennedy downplayed concerns among voters with the war, saying, "I don't think it's the main thing; I think this election will be about the cost of living."
The House's action was a concurrent resolution, which is not binding and so would never head to Trump's desk to be signed into law but does express the disapproval of Congress.
The war's recent escalation has spiked oil prices again, with international benchmark Brent crude topping $100 on Thursday and U.S. crude soaring over $91 per barrel. Gas prices have also surged to $4.09 per gallon on average in the U.S., according to AAA.`,
    bodyJa: `紛争が危険な新たな段階にエスカレートし、原油価格が1バレルあたり100ドルを超える中、議会は木曜日、ドナルド・トランプ大統領にイランとの戦争放棄を強制することを目的とした2つの戦争権限決議の推進について意見が分かれた。
この動きは、トランプ大統領が和平交渉決裂を受けてイランとの戦争を再開したと議会に通告して以来、初めての採決となった。数週間にわたる不安定な停戦を経て紛争が再燃したのは、米国の中間選挙の数カ月前だった。過半数の共和党が僅差の多数派を維持する計画を台無しにする恐れがある。
上院は木曜日、トランプ大統領にイランとの敵対行為の停止を強制する戦争権限法に基づく共同決議案を47対49で否決した。同院の行動は、その日早く行われた戦争権限法に基づく同様の措置を承認するための下院投票が214対208で行われたことに続くものである。
たとえ議会がトランプ氏に撤退を強制しようとしたとしても、トランプ氏は机上に届いたものにはほぼ確実に拒否権を発動するだろう。
「悪い戦争から抜け出す良い方法はない」と上院で決議案を提出したクリス・ヴァン・ホーレン上院議員（民主党、メリーランド州）は述べた。 「これは議会が最終的に責任を負う機会だ。」
スーザン・コリンズ上院議員（共和、メイン州）はこの決議に賛成票を投じた。コリンズ氏は現在確実に青色の州で再選を目指す厳しい戦いに巻き込まれている。ペンシルベニア州のジョン・フェッターマン上院議員は民主党員で唯一この法案に反対票を投じた。
共和党は採決前、政権の戦争遂行能力を今すぐ断つことは自らの手を縛ることになると主張した。
ジョン・ケネディ上院議員（共和党、ルイジアナ州）は、「もし私たちが今投票し、共和党が削減と出馬を決議し、この渦中にある大統領を撤退に追い込むことに票を投じれば、米国の信頼に大きな打撃となるだろう」と語った。
ケネディ大統領は、戦争に対する有権者の懸念を軽視し、「それが主要な問題だとは思わない。今回の選挙は生活費が争点になると思う」と語った。
下院の行動は同時決議であり、法的拘束力はないため、法案への署名を求めてトランプ大統領のデスクに向かうことは決してないが、議会の不承認を表明している。
最近の戦争の激化により原油価格は再び急騰し、木曜日には国際基準のブレント原油が100ドルを突破し、米国産原油は1バレル当たり91ドルを超えて急騰している。 AAAによると、ガソリン価格も米国で平均1ガロン当たり4.09ドルまで高騰している。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/23/congress-pushes-war-powers-resolutions-tells-trump-to-abandon-iran-war.html",
    publishedAt: "2026-07-23T18:39:06+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "as-honda-cr-v-leads-u-s-sales-automaker-e9e86b86",
    title: "As Honda CR-V leads U.S. sales, automaker teases new American-built pickup truck",
    titleJa: "ホンダCR-Vが米国販売をリードする中、自動車メーカーが米国製の新型ピックアップトラックを予告",
    summaryJa: "ホンダは木曜日、今年後半の一時的な生産停止を受けて、ピックアップトラック「リッジライン」の次世代モデルが米国で生産されることを確認した。中型ピックアップトラックがカリフォルニア州の排ガス規制を満たしていないため、生産が一時停止される可能性があるとの報道を受け、同車の将来は流動的となっている。",
    bodyOriginal: `Honda Motor on Thursday confirmed a next-generation model of its Ridgeline pickup truck will be produced in the U.S. following a temporary production stoppage later this year.
The future of the midsize pickup truck has been in flux amid reports that there could be a production pause coming due to the vehicle not meeting California emissions regulations.
The Japanese automaker on Thursday said there will be a temporary production stoppage for the pickup truck later this year at the Alabama plant that produces the vehicle, with assembly returning to the facility within two years, likely in 2028.
"The goal is to continue to serve those customers who've been loyal to the Ridgeline," Lance Woelfer, vice president of auto sales at American Honda Motor, told CNBC. "But one of the things that we want to bring forward in the future is increased ruggedness of that vehicle, even more capability."
Woelfer declined to comment on whether the more rugged capability will include the vehicle moving from a car-based production process to a more traditional truck assembly, known as "body-on-frame," which is how most trucks are built in the U.S.
"That's been an important part of its history. Whether or not it's part of its future, I won't get into that," Woelfer said. "This is a step forward for the Ridgeline that I think everybody will appreciate."
Expanding the capability of the Ridgeline, which is more known for smooth driving than ruggedness, could assist in expanding the vehicle's buyers.
Sales of the Ridgeline were down about 3% during the first half of the year. The company has sold between roughly 41,000 and 52,000 Ridgelines annually since 2021. That compares with more than 270,000 units sold of the segment-leading Toyota Tacoma in 2025.
Honda's confirmation of the new pickup comes as its CR-V compact crossover led U.S. auto sales through the first half of the year for the first time ever.
CR-V sales increased roughly 6% compared with last year as the Ford F-Series pickups and Toyota Rav4 crossover, which have led sales in recent years, dealt with production bottlenecks.`,
    bodyJa: `ホンダは木曜日、今年後半の一時的な生産停止を受けて、ピックアップトラック「リッジライン」の次世代モデルが米国で生産されることを確認した。
中型ピックアップトラックがカリフォルニア州の排ガス規制を満たしていないため、生産が一時停止される可能性があるとの報道を受け、同車の将来は流動的となっている。
日本の自動車メーカーは木曜日、ピックアップトラックを生産するアラバマ工場で今年後半にピックアップトラックの生産を一時的に停止し、組み立ては2年以内、おそらく2028年に施設に戻ると発表した。
アメリカン・ホンダ・モーターの自動車販売担当バイスプレジデント、ランス・ウルファー氏はCNBCに対し、「目標は、リッジラインを忠実に愛用してきた顧客にサービスを提供し続けることだ」と語った。 「しかし、私たちが将来推進したいことの1つは、車両の堅牢性を高め、さらに能力を高めることです。」
ウルファー氏は、より堅牢な機能に、自動車ベースの生産プロセスから、米国でほとんどのトラックが製造されている「ボディ・オン・フレーム」として知られる、より伝統的なトラック組立てへの移行が含まれるかどうかについてはコメントを避けた。
「それはその歴史の重要な部分でした。それが将来の一部であるかどうかに関係なく、私はそれには立ち入りません」とウルファー氏は語った。 「これはリッジラインにとっての前進であり、誰もが高く評価すると思います。」
頑丈さよりもスムーズな運転で知られるリッジラインの機能を拡張することは、同車の購入者の拡大に役立つ可能性がある。
リッジラインの販売は上半期に約３％減少した。同社は2021年以来、リッジラインを年間約4万1,000台から5万2,000台販売している。これと比較すると、セグメントをリードするトヨタ・タコマは2025年に27万台以上販売される。
ホンダの新型ピックアップの発表は、同社のコンパクトクロスオーバー「CR-V」が今年上半期を通じて初めて米国の自動車販売台数をリードしたことを受けて発表された。
CR-Vの販売は、近年販売を牽引してきたフォードFシリーズピックアップとトヨタRav4クロスオーバーが生産のボトルネックに対処したため、前年比約6％増加した。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/23/honda-american-built-pickup-truck.html",
    publishedAt: "2026-07-23T17:02:35+00:00",
    category: "自動車",
    imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    readTime: 2,
  },
  {
    id: "amazon-and-microsoft-pivot-cloud-gaming-81bb0d2b",
    title: "Amazon and Microsoft pivot cloud gaming strategies to target different players",
    titleJa: "Amazon と Microsoft はクラウド ゲーム戦略を転換し、さまざまなプレーヤーをターゲットにします",
    summaryJa: "AmazonはPrime VideoストリーミングサービスにLunaを導入し、Microsoftは人々が所有するタイトルの広告付きストリーミングをテストする予定だ。",
    bodyOriginal: `Amazon and Microsoft have devised new ways to get people playing video games in the cloud.
Microsoft's Xbox division said Thursday that it will test an advertising-supported way of letting people stream video games.
Amazon, meanwhile, announced plans to add the Luna cloud gaming service to its Prime Video streaming platform. Amazon includes Prime Video in Prime subscriptions, which cost $14.99 per month. Amazon's adjustment will give Luna more front-and-center promotion on its website. Previously, Luna was only accessible through a dedicated website.
The two companies have succeeded in cloud computing but have stumbled as they have tried to get people hooked on games over sometimes unreliable internet connections, which can result in latency.
"Our goal is simple. Give more people more affordable ways to play," Xbox wrote in a blog post.
Microsoft started selling its inaugural Xbox console in 2001. Today, Xbox trails Nintendo and Sony in console sales. The subsidiary is trying to return to growth and widen margins after spending $75.4 billion on Call of Duty publisher Activision Blizzard in 2023.
Since Meta executive Asha Sharma replaced Phil Spencer in February as Xbox CEO, she has appointed new leaders, touted a forthcoming console, pushed for exclusive games and dropped subscription prices. This month, she announced a 20% reduction in force and said Xbox will spin out four development studios.
Xbox has pursued advertising in the past, and customers haven't always been fans. In 2024, one person complained about a McDonald's ad appearing on a screen for selecting games. Publishers Electronic Arts and Take-Two Interactive have experimented with ads and quickly backpedaled in response to criticism.
"Advertising has existed in gaming for decades, from in-game placements to free-to-play models," Xbox said in the post. "But it hasn't always been built with the player in mind. When done well, advertising can help lower the cost of access."
Gamers participating in the Xbox Insider Program can join the test with a one-hour session limit. It applies to games that are already in a user's library.
Xbox has not created a tier of its Game Pass subscription service that contains advertising, but consumers have shown interest in such offerings. Netflix's ad-supported service tier has picked up tens of millions of users, CNBC reported in 2024.
Amazon entered the cloud gaming market during the Covid pandemic, as gaming was gaining popularity, with people spending more time at home. The digital commerce company debuted Luna in 2020, three years after Microsoft had introduced Game Pass, and one year after cloud challenger Google revealed its own cloud streaming option, Stadia.
Google discontinued Stadia in 2023. With Luna, users can play on smartphones and standard computers without purchasing consoles or dedicated gaming PCs.
By integrating Luna into Prime Video, the digital commerce company is doubling down on its push to attract casual players with party games and recognizable intellectual property like "Harry Potter" and "Tomb Raider." Amazon's gaming head, Jeff Gattis, told CNBC in an interview that the company doesn't aim to lure hardcore gamers or compete with console makers.
The unit, which Amazon recently reorganized to unify Luna and its game studios, has struggled to produce big hits, faced executive turnover and undergone several rounds of layoffs. Amazon has recently shut down or offloaded several of its titles, including its massively multiplayer online games "New World" and a planned "Lord of the Rings" project.
Luna has "millions" of users across the U.S. and 13 other countries, with the goal of reaching 10 million to 20 million "as quickly as we can," Gattis said.
In a market where PlayStation, Xbox, Epic Games and Steam are "fighting it out with each other," Gattis said gamers are "well-served, if not overserved." He said there's a robust segment of consumers who want to play games but don't want to invest in increasingly expensive hardware and software.
Amazon is working to fix an awareness gap among consumers who may not know about or understand its gaming strategy, Gattis said.
"I always say people don't have to like our strategy or agree with it, but it is important," he said. "Hopefully, they understand it."`,
    bodyJa: `Amazon と Microsoft は、人々にクラウドでビデオ ゲームをプレイしてもらうための新しい方法を考案しました。
MicrosoftのXbox部門は木曜日、人々がビデオゲームをストリーミングできるように広告を支援する方法をテストすると発表した。
一方、Amazonは、Prime VideoストリーミングプラットフォームにLunaクラウドゲームサービスを追加する計画を発表した。 Amazon の Prime サブスクリプションには Prime Video が含まれており、月額料金は 14.99 ドルです。 Amazonの調整により、Lunaはウェブサイト上でより前面に押し出されたプロモーションを行うことになる。以前は、Luna には専用 Web サイトからのみアクセスできました。
両社はクラウドコンピューティングで成功したが、遅延が発生する可能性のある信頼性の低いインターネット接続を介して人々をゲームに夢中にさせようとしてつまずいた。
「私たちの目標はシンプルです。より多くの人に、より手頃な価格でプレイできる方法を提供することです」とXboxはブログ投稿で書いた。
マイクロソフトは 2001 年に初代 Xbox コンソールの販売を開始しました。現在、Xbox はコンソールの売上高で任天堂やソニーの後塵を拝しています。同社は2023年に『コール オブ デューティ』パブリッシャーのアクティビジョン・ブリザードに754億ドルを投じた後、成長軌道に戻り利益率を拡大しようとしている。
メタ幹部のアシャ・シャルマ氏が2月にフィル・スペンサー氏に代わってXboxのCEOに就任して以来、彼女は新しいリーダーを任命し、今後のコンソールを宣伝し、限定ゲームを推進し、サブスクリプション価格を引き下げた。今月、彼女は人員の20％削減を発表し、Xboxが4つの開発スタジオをスピンアウトすると述べた。
Xbox はこれまで広告を追求してきましたが、顧客は必ずしもファンであるわけではありませんでした。 2024年、ゲームを選択する画面にマクドナルドの広告が表示されることに、ある人が苦情を申し立てた。パブリッシャーのエレクトロニック・アーツとテイクツー・インタラクティブは広告を実験したが、批判に応えてすぐに撤退した。
「広告は、ゲーム内での掲載から無料プレイモデルに至るまで、何十年にもわたってゲーム界に存在してきた」とXboxは投稿の中で述べた。 「しかし、常にプレイヤーのことを念頭に置いて構築されているわけではありません。広告はうまく行えば、アクセスコストの削減に役立ちます。」
Xbox Insider Program に参加しているゲーマーは、1 時間のセッション制限付きでテストに参加できます。これは、ユーザーのライブラリに既に存在するゲームに適用されます。
Xbox は広告を含む Game Pass サブスクリプション サービスの階層を作成していませんが、消費者はそのようなサービスに興味を示しています。 Netflixの広告付きサービス層は数千万人のユーザーを獲得したとCNBCが2024年に報じた。
アマゾンは新型コロナウイルスのパンデミック中に、人々が自宅で過ごす時間が増えてゲームの人気が高まっていたため、クラウドゲーム市場に参入した。デジタルコマース企業である同社は、MicrosoftがGame Passを導入してから3年後、クラウドの挑戦者であるGoogleが独自のクラウドストリーミングオプションであるStadiaを発表してから1年後の2020年にLunaをデビューさせた。
Google は 2023 年に Stadia を廃止しました。Luna を使用すると、ユーザーはゲーム機や専用のゲーミング PC を購入することなく、スマートフォンや標準的なコンピュータでプレイできます。
Luna を Prime Video に統合することで、このデジタル コマース会社は、パーティー ゲームや「ハリー ポッター」や「トゥーム レイダー」などの有名な知的財産でカジュアル プレーヤーを惹きつける取り組みをさらに強化しています。 Amazonのゲーム責任者ジェフ・ガティス氏はCNBCのインタビューで、同社はハードコアゲーマーを惹きつけたり、ゲーム機メーカーと競争したりすることを目的としていない、と語った。
この部門は、AmazonがLunaとそのゲームスタジオを統合するために最近再編したものだが、大ヒット作を生み出すことに苦戦し、幹部の交代に直面し、数回の人員削減を経験している。 Amazonは最近、大規模マルチプレイヤーオンラインゲーム「ニューワールド」や計画中の「ロード・オブ・ザ・リング」プロジェクトなど、いくつかのタイトルを閉鎖またはオフロードした。
Lunaには米国とその他13カ国に「数百万人」のユーザーがおり、「できるだけ早く」1000万～2000万人に到達することを目標にしているとガティス氏は語った。
PlayStation、Xbox、Epic Games、Steamが「互いに競い合っている」市場において、ゲーマーは「過剰とは言わないまでも、十分なサービスを受けている」とガティス氏は語った。同氏は、ゲームをプレイしたいが、ますます高価になるハードウェアやソフトウェアには投資したくない消費者層が根強いと述べた。
ガティス氏によると、アマゾンは同社のゲーム戦略について知らない、または理解していない可能性がある消費者の間での認識のギャップを解消するために取り組んでいるという。
「私はいつも、人々が我々の戦略を気に入ったり、それに同意したりする必要はないと言っていますが、それは重要です」と彼は語った。 「彼らがそれを理解してくれるといいのですが。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/23/amazon-microsoft-cloud-gaming.html",
    publishedAt: "2026-07-23T16:12:17+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 6,
  },
  {
    id: "pubs-cheer-business-rates-relief-while-o-86dc6f51",
    title: "Pubs cheer business rates relief while other firms 'left out in the cold'",
    titleJa: "他の企業が「厳しい状況に置かれている」中、パブは企業金利の引き下げを支持",
    summaryJa: "他の企業が「厳しい状況に置かれている」中、パブは企業金利の引き下げを支持- 公開されました",
    bodyOriginal: `Pubs cheer business rates relief while other firms 'left out in the cold'
- Published
Andy Burnham's decision to cut business rates for pubs, social clubs and live music venues in England raised a cheer among industry bosses.
It was his third big policy announcement in three days, and as industry body UK Hospitality put it, it showed his enthusiasm for the sector "survived his trip down the M1".
Tax experts said the 20% discount, which comes on top of emergency business rates relief rolled out in January, would save the average pub more than £1,000.
But other High Street businesses complained they would miss out on the support and called for the package to be extended.
'Good start, but tax system needs to be fairer for pubs'
Keith Bott, who runs the Titanic Brewery and nine pubs across the Midlands, said the government was "finally recognising the plight of the hospitality industry and trying to help".
He said pubs had been hit by a mix of employer National Insurance increases, the rising minimum wage, high inflation and the climbing cost of living.
Meanwhile, the sector is "heavily taxed", with around 35-40% of turnover going to the Treasury, he added.
"What I really liked in this announcement is they are recognising we need to look at a fairer tax system so we can all contribute to society," Bott told the BBC. He said online retailers that operate out of warehouses pay a "ridiculously low" amount of business rates in comparison, and "we need to make the system fair".
And Bott urged the government to go further in supporting the industry, cutting the duty on draft beer to target drinks sold in pubs.
'Why is our business being overlooked?'
Missing out on support in Burnham's plans is Ruth Dawson's HD3 Fitness Centre in Huddersfield. The local gym "does exactly the kind of work the government says it wants to support", she told the BBC, but has been "left out in the cold".
Dawson said her firm faces a "damaging" business rates bill, which is "one of the biggest threats to our ability to keep operating".
"If a pub can get support because it is the 'heart of the community', then so should we," she added.
"A community gym that keeps elderly residents mobile, active and connected is every bit as vital to a High Street as a pub or a club - arguably more so, given the pressure on the NHS and social care from an ageing population."
She urged the government to rethink the plans, extending support to community leisure centres and fitness facilities.
'I am not sure where this leaves me'
Nick Smith, who runs the Ludoquist board game cafe and bar in Croydon, London, said Burnham's announcement was reminiscent of "the trauma of Covid days".
"Where the government makes an announcement and you have to spend days trawling websites to try to find out what they mean," he told the BBC.
Ludoquist is a licenced premises, but Smith said it does not meet the government definition of a "pub", so he fears being missed by the business rates package.
"It is not inconceivable that I am in fact a pub. But I don't think I am. No-one would describe me as a pub. I'm a cafe/bar/restaurant.
"Cafes aren't being helped any more, nor are restaurants, so I don't understand the logic of that."
But Smith said business rates are not the main challenge for Ludoquist, calling instead on the government to reduce the current 20% rate of VAT for hospitality businesses in line with European countries such as Germany, France, Spain and Italy which charge less.
'VAT is the real problem'
Sam Lamiroy said Burnham's announcement is a step in the right direction and shows the government is trying to help, but agrees with Nick Smith that "VAT is the real problem".
He said the turnover of a typical pub or restaurant can easily be between £500,000 and £1m, meaning a £1,000 saving "won't make much difference".
"The 20% drop in business rates is really just lip service, it won't affect whether we survive or not, the real lever to pull is help with VAT, dropping the rate from 20% to 10% as it is in the rest of Europe," he told the BBC.
Lamiroy also said he fears his Penzance-based bar and restaurant, 45 Queen Street, will not be considered a "pub" and so be ineligible under the terms of the support package.
And, urging the government to do more to support hospitality businesses, he said: "These are the first jobs for a lot of young people, it is a springboard into work.
"When these places shut, it's not just my business and income that disappears, it is the entire team."
Get in touch
How will this cut affect you?`,
    bodyJa: `他の企業が「厳しい状況に置かれている」中、パブは企業金利の引き下げを支持
- 公開されました
英国のパブ、社交クラブ、ライブ音楽会場の営業料金を引き下げるというアンディ・バーナム氏の決定は、業界幹部らの間で歓声を上げた。
これは同氏にとってこの3日間で3度目の大きな政策発表であり、業界団体UKホスピタリティが表現したように、この分野に対する同氏の「M1を下る旅を生き延びた」熱意を示したものだった。
税務専門家らは、1月に展開された緊急ビジネス料金軽減に加えて20％割引が適用されれば、平均的なパブは1000ポンド以上節約できると述べた。
しかし、他のハイストリート企業は支援を受けられなくなると不満を抱き、支援策の延長を求めた。
「スタートは良いが、税制はパブにとってもっと公平になる必要がある」
タイタニック・ブルワリーとミッドランド全域で9軒のパブを経営するキース・ボット氏は、政府が「ようやくホスピタリティ業界の窮状を認識し、支援しようとしている」と語った。
同氏は、雇用主の国民保険の値上げ、最低賃金の上昇、高インフレ、生活費の上昇などが重なってパブは打撃を受けていると述べた。
一方、このセクターは「重税」であり、売上高の約35～40％が財務省に納められていると同氏は付け加えた。
「この発表で私が本当に気に入ったのは、私たち全員が社会に貢献できるように、より公平な税制を検討する必要があると彼らが認識していることです」とボット氏はBBCに語った。同氏は、倉庫を使わずに営業するオンライン小売業者は、それに比べて「馬鹿げたほど低い」営業料金を払っており、「システムを公平にする必要がある」と述べた。
そしてボット氏は政府に対し、パブで販売される飲料を対象に生ビールの関税を引き下げ、業界支援をさらに強化するよう求めた。
「なぜ私たちのビジネスが無視されているのでしょうか？」
バーナムの計画でサポートを逃しているのは、ハダースフィールドにあるルース・ドーソンのHD3フィットネスセンターだ。地元のジムは「政府が支援したいと言っている通りの仕事をしている」が、「冷遇されている」と彼女はBBCに語った。
ドーソン氏は、彼女の会社は「有害な」ビジネス料金法案に直面しており、これは「当社の事業継続能力に対する最大の脅威の一つ」であると述べた。
「パブが『コミュニティの中心』であるという理由で支援を得られるのであれば、私たちもそうすべきです」と彼女は付け加えた。
「高齢者住民の移動性、活動性、つながりを維持するコミュニティ ジムは、パブやクラブと同じくらいハイ ストリートにとって不可欠です。人口高齢化による NHS や社会的ケアへのプレッシャーを考慮すると、おそらくそれ以上に重要です。」
彼女は政府に対し計画を再考し、地域レジャーセンターやフィットネス施設への支援を拡大するよう求めた。
「これでどこに行くのかわかりません」
ロンドンのクロイドンでボードゲームカフェ＆バー「ルドクイスト」を経営するニック・スミス氏は、バーナム氏の発表は「コロナ時代のトラウマ」を思い出させるものだと述べた。
「政府が発表すると、その意味を知るために何日もかけてウェブサイトをたどらなければならない」と同氏はBBCに語った。
ルドクイストは認可された店だが、スミス氏は政府の「パブ」の定義を満たしていないため、ビジネス料金体系の対象外になるのではないかと懸念している。
「私が実際にパブであることは考えられないことではありません。しかし、私はそうではないと思います。私をパブとは誰も言いません。私はカフェ/バー/レストランです。
「カフェはもう助けられないし、レストランも助けられない。その論理が分からない。」
しかしスミス氏は、ルドクイスト氏にとってビジネス料金は主な課題ではないと述べ、代わりに政府に対し、ドイツ、フランス、スペイン、イタリアといった低税率の欧州諸国に合わせて、ホスピタリティ事業に対する現在の20％のVAT税率を引き下げるよう求めた。
「本当の問題は付加価値税だ」
サム・ラミロイ氏は、バーナム氏の発表は正しい方向への一歩であり、政府が支援しようとしていることを示していると述べたが、「付加価値税が本当の問題である」というニック・スミス氏の意見に同意した。
同氏は、典型的なパブやレストランの売上高はゆうに50万ポンドから100万ポンドの間になる可能性があり、1,000ポンドの節約では「大した違いはない」ことを意味すると述べた。
同氏はBBCに対し、「法人税率の20％引き下げは実際には単なるリップサービスであり、私たちが生き残れるかどうかには影響しない。本当のてこは付加価値税の支援であり、税率を他のヨーロッパ諸国と同様に20％から10％に下げることだ」と語った。
ラミロイ氏はまた、ペンザンスに拠点を置くバー兼レストラン「45 Queen Street」が「パブ」とみなされず、支援パッケージの条件から除外されるのではないかと懸念しているとも述べた。
そして政府に対し、ホスピタリティ産業への支援をさらに強化するよう求め、「これらは多くの若者にとって初めての仕事であり、仕事への出発点だ。
「これらの場所が閉鎖されると、私のビジネスと収入だけが失われるのではなく、チーム全体が失われます。」
連絡する
このカットはあなたにどのような影響を与えますか？`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/clyvnz4489wo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-23T14:27:37+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/f2f4/live/dbb6a5c0-8697-11f1-9e03-bdd14c1ce63a.jpg",
    readTime: 6,
  },
  {
    id: "oil-prices-hit-100-for-the-first-time-si-8f5c5a67",
    title: "Oil prices hit $100 for the first time since May",
    titleJa: "原油価格、5月以来初めて100ドルに到達",
    summaryJa: "原油価格、5月以来初めて100ドルに到達- 公開されました",
    bodyOriginal: `Oil prices hit $100 for the first time since May
- Published
Oil prices hit $100 a barrel for the first time since May as the escalating conflict in the Middle East reignited fears over global energy supplies.
Brent crude - the global benchmark for oil prices - rose more than 5% on Thursday after several days of increases as the US stepped up military strikes against Iran.
Prices spiked after Houthi militia attacked oil tankers in the Red Sea, threatening a key export route that Saudi Arabia has used to bypass the Strait of Hormuz.
Gas prices have also risen steadily over the past month, with the benchmark UK gas price currently at around 150 per therm, up from around 98p per therm on 26 June.
On Thursday, Iran's Islamic Revolutionary Guards Corps said three tankers had abandoned an attempt to pass through Hormuz after an explosion aboard one of them caused it to catch fire.
A temporary ceasefire between the US and Iran has failed and this week US Secretary of State Marco Rubio said the people in charge in Iran were "not ready to make a deal".`,
    bodyJa: `原油価格、5月以来初めて100ドルに到達
- 公開されました
中東紛争激化で世界のエネルギー供給に対する懸念が再燃し、原油価格は５月以来初めて１バレル＝１００ドルを記録した。
原油価格の世界的な指標であるブレント原油は、米国がイランに対する軍事攻撃を強化する中で数日間上昇した後、木曜日には５％以上上昇した。
フーシ派民兵組織が紅海で石油タンカーを攻撃し、サウジアラビアがホルムズ海峡を迂回するために利用してきた重要な輸出ルートを脅かした後、価格が急騰した。
ガス価格も過去 1 か月間着実に上昇しており、英国の基準となるガス価格は現在 1 サームあたり約 150 ペンスで、6 月 26 日のサームあたり約 98 ペンスから上昇しています。
イランイスラム革命防衛隊は木曜日、タンカー３隻がそのうち１隻の爆発で火災を引き起こし、ホルムズ通過を断念したと発表した。
米国とイラン間の一時停戦は失敗に終わり、マルコ・ルビオ米国務長官は今週、イラン担当者らは「合意を結ぶ準備ができていない」と述べた。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cx2djnzrqk2o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-23T13:55:56+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/d668/live/b41122b0-867a-11f1-8c77-df97511a6b05.jpg",
    readTime: 2,
  },
  {
    id: "american-airlines-stock-tumbles-8-as-fue-16e7a014",
    title: "American Airlines stock tumbles 8% as fuel spike further postpones turnaround",
    titleJa: "アメリカン航空の株価、燃料高騰で立て直しがさらに遅れ、8％下落",
    summaryJa: "アメリカン航空は木曜日、燃料費の高騰を理由に2026年の収益見通しをさらに下方修正したが、これは最も多くの便を運航している米国の航空会社にとって、運賃の値上げだけでは今年の燃料価格の高騰を完全に相殺するのに十分ではないことを示している。同社株は木曜序盤の取引で約８％下落した。同社の経営陣は、同社が競合他社との数十億ドル規模の利益差を改善できると投資家を説得しようと取り組んできた。",
    bodyOriginal: `American Airlines further cut its 2026 earnings outlook Thursday, citing higher fuel costs, a sign that a jump in fares isn't enough for the U.S. airline that flies the most to fully offset this year's spike in fuel prices.
Its shares were off roughly 8% in early trading Thursday. The carrier's executive team has been working to convince investors that the airline could improve its multibillion-dollar profit gap with rivals.
American said it could post an adjusted loss per share of as much as 65 cents up to earnings per share of 65 cents this year, below the range it estimated in April between a loss of 40 cents per share up to earnings of $1.10 a share, which was already reduced from the start of the year when it forecast $1.70 and $2.70 a share.
On a call after reporting results, American executives defended their decision to continue expanding flying, which would be up much as 5% in the current quarter.
Fuel prices have been volatile even in the few short weeks of the U.S. airline earnings season that kicked off in July, which has clouded the outlook for airlines this year. Carriers say strong demand and higher fares are helping offset some of the spike. Fuel is airlines' biggest expense after labor.
For the current quarter, American said it could report an adjusted loss of between 70 cents a share and 10 cents a share, below the 28 cents a share in earnings Wall Street expected, but it forecast revenue to rise between 16% to 19%, above the the 16.6% analysts project.
American CEO Robert Isom told CNBC in an interview last month that the carrier's "long-range" plan is to close the margin gap that has widened with profit leaders Delta Air Lines and United Airlines but he didn't give a timeframe for that goal. American is planning to order new wide-body aircraft this year and will add more high-yielding premium seats to older jets, Isom said.
"While there's still work ahead, the progress we're making is real," Isom said in a staff note on Thursday.
Here is what American reported in the second quarter compared with Wall Street estimates compiled by LSEG:
- Earnings per share: 15 cents adjusted vs. 3 cents expected
- Revenue: $16.74 billion vs. $16.71 billion expected
American's profit in the three months ended June 30 fell 88% from a year earlier, to $71 million, or 11 cents a share, down from $599 million, or 91 cents a share, a year earlier. Revenue rose 16.3% to $16.74 billion. Passenger revenue per available seat mile, a measure of airlines' pricing power, rose 10% from last year.
Adjusting for one-time items, American posted earnings of 15 cents a share.`,
    bodyJa: `アメリカン航空は木曜日、燃料費の高騰を理由に2026年の収益見通しをさらに下方修正したが、これは最も多くの便を運航している米国の航空会社にとって、運賃の値上げだけでは今年の燃料価格の高騰を完全に相殺するのに十分ではないことを示している。
同社株は木曜序盤の取引で約８％下落した。同社の経営陣は、同社が競合他社との数十億ドル規模の利益差を改善できると投資家を説得しようと取り組んできた。
アメリカン航空は、今年の調整後1株当たり利益が65セントになるまで最大65セントの損失を計上する可能性があると述べ、4月に予想した1株当たり損失40セントから1株当たり利益1.10ドルまでの範囲を下回ったが、この範囲は年初に1株当たり1.70ドルから2.70ドルと予想していたことからすでに縮小している。
米国の幹部らは決算報告後の電話会談で、航空便の拡大を継続するという決定を擁護し、今四半期には最大５％増加する見通しだと述べた。
7月に始まった米航空会社の決算シーズンの短い数週間でも燃料価格は不安定で、これが今年の航空会社の見通しを曇らせている。航空会社は、旺盛な需要と運賃の高騰が高騰の一部を相殺するのに役立っていると述べている。航空会社にとって人件費に次ぐ最大の出費は燃料だ。
アメリカン航空は、今四半期について、調整後1株あたり70セントから10セントの損失を報告する可能性があると述べ、ウォール街が予想する1株利益28セントを下回るものの、売上高は16％から19％増加すると予想しており、アナリスト予想の16.6％を上回っている。
アメリカン航空のロバート・アイソム最高経営責任者（ＣＥＯ）は先月ＣＮＢＣのインタビューで、同社の「長期的な」計画は収益リーダーであるデルタ航空やユナイテッド航空との拡大した利益差を埋めることだと語ったが、その目標の期限については明らかにしなかった。アイソム氏によると、アメリカン航空は今年、新しいワイドボディ機を発注する予定で、古いジェット機に高利回りのプレミアムシートを追加する予定だという。
「まだやるべきことはあるが、我々の進歩は本物だ」とイソム氏は木曜日のスタッフノートで述べた。
以下は、アメリカン紙が第2四半期に報告した内容と、LSEGがまとめたウォール街の推計値を比較したものである。
- 1 株当たり利益: 調整後 15 セント、予想 3 セント
- 収益: 167 億 4000 万ドル対予想 167 億 1000 万ドル
アメリカン航空の6月30日までの3カ月間の利益は前年同期比88％減の7100万ドル（1株当たり11セント）となり、前年同期の5億9900万ドル（1株当たり91セント）から減少した。売上高は16.3％増の167億4000万ドルとなった。航空会社の価格決定力の尺度である空席マイルあたりの旅客収入は、昨年より10％増加した。
一時項目を調整すると、アメリカン航空は 1 株あたり 15 セントの利益を計上しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/23/american-airlines-aal-2q-2026-earnings.html",
    publishedAt: "2026-07-23T13:45:27+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "albertsons-stock-plunges-as-it-says-weak-f44e4e84",
    title: "Albertsons stock plunges as it says weaker grocery spending will cut into sales and earnings",
    titleJa: "アルバートソンズの株価は、食料品支出の低迷で売上高と利益が減少すると発表し急落",
    summaryJa: "食料品店アルバートソンズの株価は木曜日、同社が需要の低迷と消費者の慎重化を理由に2026年度の見通しを引き下げたことを受けて15％近く下落した。同社は、それが成長軌道を改善すると信じているため、顧客体験への投資に「断固として取り組んでいる」と述べた。",
    bodyOriginal: `Shares of grocer Albertsons sank nearly 15% on Thursday after the company lowered its fiscal 2026 outlook, citing softer demand and a more cautious consumer.
The company said it is now "moving decisively" to invest in the customer experience because it believes that will improve its growth trajectory.
"In the first quarter, our digital and pharmacy businesses continued to deliver strong growth, while core grocery faced increasing pressure from softer industry unit trends and a more cautious consumer," CEO Susan Morris said in a statement.
The company's outlook cut comes amid broader signs that U.S. consumers have scaled back their grocery trips. Food inflation and tighter budgets due to high gas prices, among other factors, appear to be hurting spending.
For the full year, Albertsons said it now expects net income between $1.75 and $1.85 per share, down significantly from its previous expectation of between $2.22 and $2.32 per share.
It also lowered its adjusted EBITDA guidance to a range of between $3.55 billion and $3.625 billion, compared to a previous projection of between $3.85 billion and $3.925 billion. It also now expects identical sales, a metric similar to comparable sales, to be in a range of down 0.5% to 1.5%, compared to a previous expectation of flat to up 1%.
For the first fiscal quarter of the year, the company reported that identical sales fell 0.8%. Albertsons reported net income of $84.7 million, or 17 cents per share, compared to $236.4 million, or 41 cents per share, in the year-ago period.
Still, Morris said on a call with analysts that while the pressure on consumers is weighing on near-term earnings, the company aims to "improve traffic, units, loyalty and the overall trajectory of the business over time."`,
    bodyJa: `食料品店アルバートソンズの株価は木曜日、同社が需要の低迷と消費者の慎重化を理由に2026年度の見通しを引き下げたことを受けて15％近く下落した。
同社は、それが成長軌道を改善すると信じているため、顧客体験への投資に「断固として取り組んでいる」と述べた。
スーザン・モリス最高経営責任者（CEO）は声明で、「第1四半期、当社のデジタル事業と薬局事業は力強い成長を続けたが、中核となる食料品は業界部門の動向の鈍化と消費者の慎重化によるプレッシャーの増大に直面した」と述べた。
同社の見通し引き下げは、米国の消費者が食料品の買い物を控えているという幅広い兆候の中で行われた。食料のインフレやガソリン価格の高騰による予算の逼迫などが、支出に悪影響を及ぼしているようだ。
アルバートソンズは、通期については純利益が1株当たり1.75ドルから1.85ドルになると予想していると述べ、これは従来予想の1株当たり2.22ドルから2.32ドルを大幅に下回った。
また、調整後EBITDA見通しも38億5000万ドル～39億2500万ドルという従来予想から35億5000万ドル～36億2500万ドルの範囲に引き下げた。また、従来の予想では横ばいから1％増だったのに対し、同一売上高（比較可能な売上高と同様の指標）は0.5％から1.5％減の範囲になると予想している。
今年の第 1 会計四半期について、同社は同一売上高が 0.8% 減少したと報告しました。アルバートソンズの純利益は8,470万ドル（1株あたり17セント）で、前年同期は2億3,640万ドル（1株あたり41セント）でした。
それでもモリス氏はアナリストとの電話会議で、消費者へのプレッシャーが短期的な収益を圧迫しているものの、同社は「トラフィック、販売台数、ロイヤルティ、そして事業の全体的な軌道を長期的に改善する」ことを目指していると述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/23/albertsons-stock-plunges-on-lowered-outlook-softened-grocery-trends.html",
    publishedAt: "2026-07-23T13:41:16+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "brent-crude-tops-100-a-barrel-how-the-ne-9eb11057",
    title: "Brent crude tops $100 a barrel. How the next stop could be $120",
    titleJa: "ブレント原油は1バレルあたり100ドルを突破。次の停留所がどうして 120 ドルになるのか",
    summaryJa: "パワーポイントエネルギー関係者から聞いたこと",
    bodyOriginal: `POWER POINT
What I'm hearing from energy insiders
U.S. oil just topped $90 a barrel and Brent crude is passed $100 a barrel.
A number of new factors could mean this crude comeback has legs.
For example, what happens if all Iranian oil suddenly went offline?
It's an outlier thought. Maybe it's crazy. While we can't all agree on much, can we at least agree that maybe now is the exact right time for crazy, outlier thoughts?
Before I get to that, here's a quick synopsis of where we stand right now with the nearly hour-by-hour headlines around Hormuz and energy.
Angry militants in Iran continue to risk a wider war with the U.S., killing American servicemen in an attack on our ally Jordan. Trump again has warned the country, saying those responsible will "pay" for the attacks.
At the same time, one of Iran's proxy terror groups, called the Houthis, is trying to ratchet things up by imposing a Red Sea blockade.
As I've written often lately, it's an incredibly fluid, scary time where the news can change by the time you read this.
As I've been thinking about what's going on, the one thought that hasn't really played out is: what happens if all Iranian oil went offline? Right now Iran is still selling some oil on the global markets, either by avoiding the Strait blockade or by using the time under the peace MOU to increase sales and raise money. So what would happen if something were to happen to Iran's oil hub, Kharg Island? Or the employees of the National Iran Oil Co (NIOC) just walked off the job and crushed Iranian production?
Oil expert Eric Nuttall of Canada's Ninepoint Partners, a Toronto-based alternative asset management firm, said the risk to prices is higher, and he lays out the Iran scenario like this:
"With Middle Eastern production still down 7-8MM Bbl/d, global onshore inventories at near record low seasonal levels, an increasingly depleted US SPR, and significant tightness in refined product stocks, the world simply cannot afford to lose a further 2.6MM Bbl/d of Iranian production. The market up until now has been looking through or flat out ignoring the inevitable supply shock if the status quo persists, our base case expectation. Perhaps Iranian oil production going offline would be enough to finally act as a reality check. We think record high crack spreads are a leading indicator for what price action will look like for oil in the near future."
Kevin Book of Clearview Energy Partners, an independent energy policy research firm that produces must-read research and is interviewed in our Inside Line below, says the key is how long Iranian oil were to be offline, but the market would be looking at a $5 per barrel increase at the minimum.
And Rapidan Energy Group's Bob McNally is direct in his message, telling me that "all [Iran's] exports are offline pretty much," but if all their actual oil production closed, then "their refineries would shut down, and they'd have no more refined products after they drained storage. Transportation would grind to a halt. It would crush their economy."
So while it's a potentially crazy question about Iran and Hormuz, don't write off the "no Iran oil" as pure fantasy.
Speaking of Hormuz, these days you need to keep your Straits straight. The next geographic area to study up on is the Bab el-Mandeb Strait (BAM). The BAM is the narrow strait that runs between Yemen and Africa and is about as wide as Hormuz. The Strait is the only southern entry to the Red Sea, another waterway critical for oil and product flows.
RBI →"'Bab el-Mandeb" roughly translates to "gate of grief"
RBI #2→ Some believe that thousands of years ago the BAM was shallow enough that humans could walk across it, leading to increased migration.
The risk to BAM is real. And it may be a reason why brent crude is nearing $100 a barrel.
Tobin Marcus of Wolfe Research writes that the market continues to believe things will get better from here and both the U.S. and Iran will be forced to de-escalate. But Marcus also thinks we shouldn't automatically underestimate the risk of some kind of supply disruption around the Red Sea. With Saudi Arabia pumping more oil through its East-West pipeline into the port of Yanbu, any Houthi attacks risk about 4½ million barrels of oil per day.
Iranian strongmen may believe they have the upper hand right now, as the new attacks have led to a new drop in crude oil tanker traffic out of the SOH. An insurance industry source tells me that while a shipowner "can get cover" - the industry term for insurance - there isn't much demand because ship traffic has again slowed considerably.
Bottom line, here's my Power Point takeaway on oil, energy and the macro markets. This spring, we learned that stocks can keep going higher even if oil and gasoline go up. That's certainly surprised many, myself included. It's likely for a cornucopia of reasons, and the energy-specific would be that gasoline was more expensive in the summer of 2022 than it is now (we got used to it), cars get better fuel mileage than they used to, and many of you now have the ability to work from home. The bigger reason, however, is that the trillions in A.I.-related spending is helping power incomes and the economy more than gasoline can cut it down.
I'm actually writing some of these words from the Milwaukee, Wisconsin airport where I was stranded by a canceled flight. A flight, I might add, that was oversold both ways, despite air fares that few would call cheap. I fly more than most, and I can tell you that across America, people are spending money on travel this summer. Gasoline prices be darned ... at least for now.
Safe travels,
WALL STREET'S TAKE
The team at Goldman Sachs is back on the tape with a new oil note. Daan Struyven writes that Brent crude oil might rise back above $120 per barrel in the 4th quarter if Hormuz remains disrupted.
Struyven also warns that "recent inventory draws have left the market more vulnerable than in February" but that his "simulated price upside is less high than comparable estimates from that period, partly because we now assume greater demand elasticity - -especially in China -- where crude imports remain weak." In other words, China's falling oil demand may keep a lid on prices, at least relative to a few months ago.
Speaking of inventories, the U.S. continues to sell oil from our strategic reserve, and there are growing concerns that we're getting closer to what some call "tank bottoms," or the levels at which it's difficult to retrieve as much oil as wanted.
A story that really didn't get the attention it deserved was that American companies are going to invest $60 billion or more in Iraq. The list of companies investing not only comes from the energy world — Chevron, ConocoPhillips, Shell, BP, Halliburton and more — but also from finance (JPMorgan Chase), consumer products (PepsiCo), health care (Abbott and Thermo Fisher Scientific) and more. President Donald Trump and Iraq's Prime Minister spoke about the deal from the White House.
Chevron is involved in talks to rebuild a massive pipeline from Kirkuk in northern Iraq to the Syrian coast. The pipeline isn't new, but has been damaged since 2003. The company is also reportedly talking about investments in two big Iraqi oil fields. UBS is bullish on Chevron (CVX), with a $220 12-month price target. That's another 15% gain on a stock already up 25% this year. That UBS target is actually just about middle of the pack on Chevron, sandwiched between Melius Research's high of $243 per Chevron share, and TD Cowen's $197.
Another part of the Iraq news is that ConocoPhillips (COP) will invest alongside BP, buying a 42% stake in an oilfield. Evercore ISI likes the stock - it has a $145 price target - but says this Iraq move is "likely to raise some questions about how coherent the move is within a well-defined resource & [free cash flow] trajectory." Part of Evercore's bullish thesis is that COP's free cash flow is "de-risked" and "uniquely attractive" right now, and they are concerned some investors may want more clarity on the Iraq story before "crediting the addition."
It's not all about oil. Natural gas-focused Excelerate Energy (EE) is also involved in the Iraq investments. While that's not a key focus for Goldman Sachs, the firm still loves the stock. It just started coverage of EE with a buy rating and $49 target, a meaty 25% upside.
Excelerate's main business is regasification and storage. Simply put, the company has 12 giant ships that hold natural gas. Goldman notes that Excelerate Energy has about a 25% market share in global floating 're-gas' services and should benefit from lower LNG prices later this decade. Goldman also likes what it calls EE's "underappreciated vertical integration opportunities."
On a macro level, higher oil prices have meant higher oil and gas stock prices too. This month, seven large-cap names are up double digits, led by Marathon Petroleum (MPC). Marathon — helmed by New Jersey native CEO Maryann Mannen — is quietly hitting record highs and has popped 25% in July. Investors have realized energy investing isn't a sprint; it's a … well, you know.
TAKE A LOOK
Kpler's Matt Smith says there are still many risks with shipping and oil.
INSIDE LINE
This weeks Inside Line is with Kevin Book, Co-Founder and Head of Research at ClearView Energy Partners. Kevin is one of just a handful of go-to energy experts who is also a D.C. insider.
RANDOM, BUT INTERESTING
Don't lose sight of the Russia story. Ukraine continues to pound Putin's energy assets, taking some Russian oil refining offline. API and the Energy Institute highlight how about 2.7 million barrels per day of Russian refining aren't running, which means the country has to sell some of that oil on the open market as it can't process it. That excess oil hitting the export market may be keeping crude prices from rising even more than they already have.
THE GRID
Kpler's regular Market Insights are always a must-read for me.
The national average for gasoline is back above $4, according to AAA.
But that's unlikely to drive buyers to EVs: Why Isn't $4-Plus Gasoline Enough To Make Americans Switch To EVs?
Except in Germany, where nearly $9 per gallon gas has buyers going full electric: EVs Just Beat Gas And Diesel In Europe's Biggest Car Market For The First Time
Meantime in Russia, Ukraine keeps pounding Putin: Overnight Ukrainian Attacks Across Russia Kill At Least 4
I know we keep talking about the group... but they just keep signing multibillion dollar deals. Hut 8 is the latest.
And my song of the week … The Red Clay Strays' Demons In Your Choir
LOOKING FOR MORE?
Catch up with more on energy including interviews and video content from CNBC and Power Insider.
Read the last issue of Power Insider here: The best energy stocks right now as two major conflicts keep oil prices elevated`,
    bodyJa: `パワーポイント
エネルギー関係者から聞いたこと
米国産原油は1バレルあたり90ドルを突破したばかりで、ブレント原油は1バレルあたり100ドルを超えている。
多くの新たな要因が、この粗削りなカムバックに脚力があることを意味する可能性がある。
たとえば、イランの石油がすべて突然停止したらどうなるでしょうか?
それは異常な考えです。もしかしたら狂っているのかもしれない。私たち全員が多くのことに同意することはできませんが、おそらく今がクレイジーで異常な考えを抱くのに最適な時期であるということには少なくとも同意できますか?
本題に入る前に、ホルムズとエネルギーに関するほぼ時間ごとのヘッドラインについて、私たちが現在どのような状況にあるのかを簡単にまとめておきます。
イランの怒っている過激派は米国とのより広範な戦争の危険を冒し続けており、同盟国ヨルダンへの攻撃で米軍人を殺害している。トランプ大統領は再び同国に警告し、責任者は攻撃の「代償を払う」だろうと述べた。
同時に、イランの代理テロ組織の一つであるフーシ派は、紅海封鎖を課して事態をさらに加速させようとしている。
最近よく書いているように、今は信じられないほど流動的で、あなたがこれを読んでいる頃にはニュースが変わっているかもしれない恐ろしい時代です。
何が起こっているのかを考えてきましたが、実際には実現していない考えが 1 つあります。それは、イランの石油がすべて停止したらどうなるのかということです。イランは現在も、海峡封鎖を回避するか、和平覚書に基づく時間を利用して販売を増やし、資金を調達することで、世界市場で石油を販売している。では、イランの石油拠点であるカールグ島に何かが起こったらどうなるでしょうか？それともイラン国営石油会社（NIOC）の従業員が仕事を辞めてイランの生産を潰したのか？
トロントに本拠を置くオルタナティブ資産管理会社、カナダのナインポイント・パートナーズの石油専門家エリック・ナトール氏は、価格へのリスクはより高いと述べ、イランのシナリオを次のように説明する。
「中東の生産量は依然日量7～8百万バレル減少しており、世界の陸上在庫は記録的な低水準に近い季節水準にあり、米国のSPRはますます枯渇しており、精製品在庫は大幅に逼迫しているため、世界はイランの生産量をさらに日量260万バレル失うわけにはいかない。これまでの市場は、現状が続けば避けられない供給ショックをスルーするか、完全に無視してきた。我々の基本的な予想である。おそらく、イランの石油生産が停止するだけで十分だろう」最終的には、記録的なクラックスプレッドが近い将来の原油の価格動向を示す先行指標となると考えています。」
独立系エネルギー政策調査会社で、必読の調査結果を発表し、以下のインサイドラインでインタビューを受けているクリアビュー・エナジー・パートナーズのケビン・ブック氏は、鍵となるのはイラン産原油がどれだけの期間オフラインになるかだが、市場は最低でも1バレル当たり5ドルの値上がりを見ているだろうと述べている。
また、ラピダン・エナジー・グループのボブ・マクナリー氏は率直なメッセージで、「（イランの）すべての輸出品はほぼオフラインになっている」が、実際の石油生産がすべて閉鎖されれば、「製油所は閉鎖され、貯蔵庫が空になった後は精製製品がなくなるだろう。交通機関は停止し、経済は壊滅するだろう」と語った。
したがって、これはイランとホルムズに関する潜在的におかしな質問ではありますが、「イラン石油ゼロ」を単なる空想として片付けないでください。
ホルムズといえば、最近では海峡をまっすぐに保つ必要があります。次に研究すべき地理的領域は、バブ エル マンデブ海峡 (BAM) です。 BAMはイエメンとアフリカの間を走る狭い海峡で、幅はホルムズとほぼ同じです。この海峡は紅海への唯一の南入口であり、石油と製品の流れに重要なもう一つの水路です。
打点→「バブ・エル・マンデブ」とは、ざっくり訳すと「悲しみの門」
RBI #2→ 数千年前、BAM は人間が歩いて渡れるほど浅かったため、移住が増加したと考える人もいます。
BAM に対するリスクは現実のものです。そしてそれがブレント原油が1バレルあたり100ドルに近づいている理由かもしれない。
ウルフ・リサーチのトービン・マーカス氏は、市場は今後事態が好転し、米国とイラン双方が緊張緩和を余儀なくされると信じ続けていると書いている。しかしマーカス氏はまた、紅海周辺で何らかの供給混乱が起きるリスクを自動的に過小評価すべきではないとも考えている。サウジアラビアはヤンブー港への東西パイプラインを通じてさらに多くの石油を注入しているため、フーシ派の攻撃により、日量約450万バレルの石油が流出する危険がある。
新たな攻撃によりSOHからの原油タンカーの輸送量が新たに減少したため、イランの有力者らは現時点では自分たちが優位にあると信じているのかもしれない。保険業界関係者によると、船主は「保険」（保険の業界用語）を受けることができるが、船舶の交通量が再び大幅に減速しているため、需要はそれほど多くないという。
結論として、これが石油、エネルギー、マクロ市場に関する私のパワーポイントの要点です。私たちはこの春、石油やガソリンが上昇しても株価は上昇し続ける可能性があることを学びました。それは確かに、私も含めて多くの人を驚かせました。おそらく理由は山ほどありますが、エネルギーに特化したものとしては、2022 年の夏はガソリンが現在よりも高かったこと (私たちはそれに慣れてきました)、車の燃費が以前よりも良くなったこと、そして多くの人が在宅勤務できるようになったことが挙げられます。しかし、より大きな理由は、AI関連の何兆ドルもの支出が、ガソリンによる電力収入の削減以上に電力収入と経済を助けているということだ。
実は、私は欠航便で立ち往生したウィスコンシン州ミルウォーキーの空港からこの言葉の一部を書いています。付け加えれば、その航空券は、安いと言う人はほとんどいないにもかかわらず、往復とも売られ過ぎていた。私は他の人よりも飛行機に乗ることが多く、この夏、アメリカ全土で人々が旅行にお金を費やしていると言えます。ガソリン価格は恐ろしい…少なくとも今のところは。
安全な旅行、
ウォール街の見解
ゴールドマン・サックスのチームは、新たなオイルノートを携えてテープに戻ってきた。ダーン・ストルイベン氏は、ホルムズの混乱が続けば、ブレント原油価格は第4四半期に1バレル当たり120ドルを超える可能性があると書いている。
ストルイベン氏はまた、「最近の在庫の引き抜きにより、市場は2月よりも脆弱になっている」としながらも、「価格の上昇幅のシミュレーション値は、同時期の比較可能な推定値よりも低くなっている。その理由の一部は、現在、特に原油輸入が依然として低迷している中国において、より大きな需要弾力性を想定していることによる」と警告した。言い換えれば、中国の石油需要の減少により、少なくとも数カ月前と比べて価格は抑制され続ける可能性がある。
在庫といえば、米国は戦略備蓄からの石油の売却を続けており、いわゆる「タンク底」、つまり望むだけの量の石油を回収することが困難な水準に近づいているのではないかという懸念が高まっている。
本当に注目を集めなかったのは、アメリカ企業がイラクに600億ドル以上を投資する予定だという話だ。投資企業のリストには、シェブロン、コノコフィリップス、シェル、BP、ハリバートンなどのエネルギー業界だけでなく、金融 (JPモルガン・チェース)、消費者製品 (ペプシコ)、ヘルスケア (アボットおよびサーモ・フィッシャー・サイエンティフィック) などの企業も含まれています。ドナルド・トランプ大統領とイラク首相はホワイトハウスからの合意について語った。
シェブロンは、イラク北部のキルクークからシリア沿岸までの大規模なパイプラインを再建する交渉に参加している。このパイプラインは新しいものではないが、2003年以来損傷している。同社はまた、イラクの2つの大きな油田への投資についても話し合っていると伝えられている。 UBSはシェブロン（CVX）に対して強気で、12カ月の目標株価は220ドルとなっている。これは、今年すでに25％上昇している株価にさらに15％上昇したことになる。 UBSのその目標は実際にはシェブロン株のほぼ中間で、メリウス・リサーチのシェブロン株1株当たりの高値243ドルとTDコーウェンの197ドルの間に挟まれている。
イラクのニュースのもう一つの部分は、コノコフィリップス（COP）がBPと並んで投資し、油田の株式42％を購入するというものだ。エバーコアISIは同株を気に入っており、目標株価は145ドルとしているが、今回のイラクの動きは「明確に定義された資源と（フリーキャッシュフロー）軌道の中での動きの一貫性について疑問が生じる可能性が高い」と述べている。エバーコア社の強気の主張の一部は、現時点でCOPのフリーキャッシュフローは「リスクが軽減され」、「独特の魅力がある」ということであり、一部の投資家が「追加を評価する」前にイラクの話についてもっと明確にしたいと考えているのではないかと懸念している。
石油だけがすべてではありません。天然ガスに焦点を当てた Excelerate Energy (EE) もイラクへの投資に関与している。ゴールドマン・サックスにとってそれは重要な焦点ではないが、同社は依然としてこの株を愛している。 EEのカバレッジを買いのレーティングと49ドルの目標で開始したばかりで、25％の大幅な上値がある。
Excelerate の主な事業は再ガス化と貯蔵です。簡単に言うと、同社は天然ガスを積んだ巨大な船を 12 隻保有しています。ゴールドマンは、Excelerate Energy は世界の浮遊「再ガス」サービスで約 25% の市場シェアを持っており、この 10 年後半には LNG 価格の低下から恩恵を受けるはずだと指摘しています。ゴールドマンはまた、同社がEEの「過小評価されている垂直統合の機会」と呼ぶものを気に入っている。
マクロレベルで見ると、原油価格の上昇は石油とガスの株価の上昇も意味します。今月はマラソン・ペトロリアム（MPC）を筆頭に、大型株7銘柄が2桁上昇している。ニュージャージー州出身の最高経営責任者（CEO）マリアン・マネン氏が率いるマラソンは、静かに過去最高値を更新しており、7月には25％上昇した。投資家は、エネルギー投資はスプリントではないことに気づいています。それは…そうですね。
見てみましょう
Kpler社のマット・スミス氏は、海運と石油には依然として多くのリスクがあると語る。
インサイドライン
今週の Inside Line は、ClearView Energy Partners の共同創設者兼研究責任者である Kevin Book と対談します。ケビンは、DC の内部関係者でもある数少ない頼りになるエネルギー専門家の 1 人です。
ランダムだが興味深い
ロシアの物語を見失わないでください。ウクライナはプーチン大統領のエネルギー資産を圧迫し続け、ロシアの石油精製の一部を停止させている。 APIとエネルギー研究所は、ロシアの日量約270万バレルの精製がどのように稼働していないのかを強調している。つまり、同国はその石油の一部を処理できないため公開市場で売らなければならないことを意味する。過剰な石油が輸出市場に打撃を与えていることが、原油価格のさらなる上昇を妨げている可能性がある。
グリッド
Kpler の定期的な Market Insights は、私にとって常に必読です。
AAAによると、ガソリンの全国平均は4ドルを超えている。
しかし、それが購入者をEVに駆り立てる可能性は低い。なぜ米国人をEVに切り替えるのに4ドル以上のガソリンでは十分ではないのか?
ドイツを除くと、ガソリン1ガロン当たり9ドル近くのバイヤーが完全電気自動車に移行している：欧州最大の自動車市場で初めてEVがガソリンとディーゼルを上回る
一方、ロシアでは、ウクライナがプーチン大統領を攻撃し続けている：ロシア全土で一晩のウクライナ攻撃で少なくとも4人が死亡
私たちがグループについて話し続けていることはわかっています...しかし彼らは数十億ドルの契約に署名し続けています。 Hut 8 が最新です。
そして今週の私の曲…レッド・クレイ・ストレイズの『Demons In Your Choir』
さらにお探しですか?
CNBC や Power Insider のインタビューやビデオ コンテンツなど、エネルギーに関する詳細をご覧ください。
Power Insider の最終号はこちらからお読みください: 2 つの主要な紛争により原油価格が上昇する中、現時点で最も優れたエネルギー株`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/23/brent-crude-tops-100-a-barrel-how-the-next-stop-could-be-120.html",
    publishedAt: "2026-07-23T13:36:29+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "government-to-cut-business-rates-for-pub-d0c4c9fb",
    title: "Government to cut business rates for pubs, clubs and music venues",
    titleJa: "政府、パブ、クラブ、音楽会場の営業料金を引き下げへ",
    summaryJa: "政府、パブ、クラブ、音楽会場の営業料金を引き下げへ- 公開されました",
    bodyOriginal: `Government to cut business rates for pubs, clubs and music venues
- Published
Pubs, clubs and live music venues in England will be given a 20% cut to business rates from April, which the government estimates will save firms around £1,100 next year.
In his third policy announcement since becoming prime minister, Andy Burnham said: "For too long, governments have stood by while cherished venues have disappeared from our local high streets."
The cut will cost £100m and will be funded by a review of tax relief on firms such as vape shops which "do not make a positive contribution to local communities", the government said.
Hospitality bosses welcomed the support, but some pub owners said the package would not go far enough to offset the impact of cost increases elsewhere.
The 20% business rates discount will not apply to the "very largest" live music venues. Details about which businesses are eligible will be announced at Chancellor John Healey's first Budget in the autumn.
The cut is expected to benefit almost 32,000 venues, the government said.
Iain Hoskins, who owns Ma Pub Group in Liverpool, told the BBC the relief would help "chip away" at rising costs but questioned how many venues would benefit.
It could be "very meaningful", he said, but "as always, the devil is in the detail".
His pubs have previously missed out on government business rates support, and "the increases were so huge last year that now we're sort of chipping away at some of those increases".
Under previous chancellor Rachel Reeves, the government said last year it would scale back business rate discounts that had been in force since the pandemic and announced that there would be no discount at all from April this year.
That, combined with big upward adjustments to rateable values of pub premises, left landlords with the prospect of much higher rates bills.
Following criticism from the hospitality industry, the government cut business rates for pubs and music venues by 15% earlier in 2026.
The 20% discount will apply on top of the existing support.
Commenting on the cut which comes into effect next year, Steve Perez, founder of soft drinks company Global Brands and an owner of two hotels, said the announcement is "welcome… but this won't make any material difference to any pub".
UK Hospitality's chief executive, Allen Simpson, said Burham's plans are "a good start" which he said "suggests that his affection for hospitality has survived the trip down the M1".
But he added that it is "not for everybody in hospitality".
The change to business rates for some hospitality firms is the latest move in what Burnham hopes will provide "breathing space" for people and businesses.
Earlier this week, the new prime minister announced that the government would cut the 5% VAT charge on electricity bills and would cap bus fares at £2 in England outside London.
But on Thursday, Conservative leader Kemi Badenoch, said: "When I look at the plans that he has announced for the country I find myself asking 'is that it'?"
She said: "Andy Burnham's ambitions for Britain are too small."
As well as reviewing tax relief on firms such as vape shops in order to fund the rate cut, the government also said it will "crack down" on businesses selling through online marketplaces which "do not comply with their tax obligations".
The Night Time Industries Association's chief executive, Michael Kill, said the tax break could provide "meaningful relief to businesses facing sustained cost pressures".
But he said the sector is waiting for more details while questions remain about the exclusion of the largest live music venues.
The Federation of Small Businesses (FSB) said Thursday's announcement must be "a downpayment on action that reaches across the small business community".
FSB policy chief Tina McKenzie, said the plans were encouraging and fix the damage caused by past business rates decisions which are "holding back small business growth and jobs in every postcode".
Get in touch
How will this cut affect you?`,
    bodyJa: `政府、パブ、クラブ、音楽会場の営業料金を引き下げへ
- 公開されました
英国のパブ、クラブ、ライブ音楽会場には4月から営業料金が20％引き下げられ、政府はこれにより企業は来年約1100ポンド節約できると試算している。
アンディ・バーナム氏は首相就任後３度目の政策発表で、「地元の目抜き通りから大切な会場が消えていくのを、あまりにも長い間、各国政府が傍観してきた」と述べた。
政府によると、削減には１億ポンドの費用がかかり、その資金は電子タバコ店など「地域社会に積極的な貢献をしていない」企業に対する減税の見直しによって賄われる予定だという。
ホスピタリティ業界の責任者らはこの支援を歓迎したが、一部のパブオーナーらは、この支援策は他の地域でのコスト上昇の影響を相殺するには十分ではないと述べた。
ビジネス料金の 20% 割引は、「非常に大きな」ライブ ミュージック会場には適用されません。どの企業が対象となるかについての詳細は、秋のジョン・ヒーリー首相の最初の予算案で発表される予定だ。
政府によると、今回の削減は約３万２０００の会場に恩恵をもたらす見込みだという。
リバプールのマ・パブ・グループを所有するイアン・ホスキンス氏はBBCに対し、今回の救済はコスト上昇を「少しずつ削減」するのに役立つと述べたが、どれだけ多くの会場が恩恵を受けるか疑問を抱いた。
それは「非常に意味のあること」かもしれないが、「いつものように、悪魔は細部に宿る」と同氏は語った。
同氏のパブはこれまで政府のビジネス料金補助を逃しており、「昨年の値上げが非常に大きかったので、今はその値上げの一部を少しずつ削り取っているような状態だ」。
レイチェル・リーブス前首相の下で政府は昨年、パンデミック以来実施してきた企業向け料金割引を縮小すると発表し、今年4月からは割引を一切行わないと発表した。
これにパブ施設の評価額が大幅に上方修正されることと相まって、地主はさらに高額な料金請求が発生する見通しとなった。
ホスピタリティ業界からの批判を受け、政府は2026年初めにパブや音楽会場の営業料金を15％引き下げた。
20% 割引は既存のサポートに加えて適用されます。
清涼飲料会社グローバル・ブランズの創設者で2軒のホテルのオーナーでもあるスティーブ・ペレス氏は、来年発効するこの削減についてコメントし、この発表は「歓迎だ…しかし、これはどのパブにとっても重大な変化にはならないだろう」と述べた。
UKホスピタリティ社のアレン・シンプソン最高経営責任者（CEO）は、バーハム氏の計画は「良いスタート」だとし、「彼のおもてなしに対する愛情がM1を下る旅でも生き残ったことを示唆している」と述べた。
しかし、それは「接客業に携わるすべての人に当てはまるわけではない」とも付け加えた。
一部のホスピタリティ企業のビジネス料金の変更は、バーナムが人々と企業に「息抜きのスペース」を提供することを期待している最新の動きである。
今週初め、新首相は政府が電気料金の5％の付加価値税を引き下げ、ロンドン以外のイングランドではバス料金の上限を2ポンドにすると発表した。
しかし木曜日、保守党党首ケミ・バデノック氏は、「同氏が発表したこの国への計画を見ると、『本当にそうなのか』と疑問に思う」と述べた。
彼女は「アンディ・バーナムのイギリスに対する野心は小さすぎる」と語った。
政府は、利下げ資金を賄うために電子タバコ店などの企業に対する減税を検討するだけでなく、「納税義務を遵守しない」オンライン市場を通じて販売する企業を「取り締まる」とも述べた。
夜間産業協会のマイケル・キル最高経営責任者（CEO）は、減税は「持続的なコスト圧力に直面している企業に意味のある救済」をもたらす可能性があると述べた。
しかし同氏は、最大規模のライブ音楽会場の除外については疑問が残るものの、業界はさらなる詳細を待っていると述べた。
中小企業連盟（FSB）は、木曜日の発表は「中小企業コミュニティ全体に及ぶ行動に対する頭金」に違いないと述べた。
FSB政策責任者のティナ・マッケンジー氏は、この計画は「あらゆる郵便番号で中小企業の成長と雇用を妨げている」過去のビジネス金利決定によって引き起こされた損害を修正するものであり、励みになると述べた。
連絡する
このカットはあなたにどのような影響を与えますか？`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cq6dg816464o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-23T13:10:43+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/b99f/live/7df3be10-8669-11f1-93cb-95d7eb12ec49.jpg",
    readTime: 5,
  },
  {
    id: "trump-says-saudi-nuclear-deal-contingent-60d00197",
    title: "Trump says Saudi nuclear deal contingent on relations with Israel, does not include enrichment",
    titleJa: "トランプ大統領、サウジの核合意はイスラエルとの関係を条件とし濃縮は含まれていないと発言",
    summaryJa: "ドナルド・トランプ大統領は木曜日、米国と今週署名された画期的な核合意に基づき、サウジアラビアはウラン濃縮を行わないと述べた。トランプ大統領は、核合意はリヤドがアブラハム合意を通じてイスラエルと国交を樹立することを条件としていると述べた。",
    bodyOriginal: `President Donald Trump said Thursday that Saudi Arabia will not enrich uranium under the landmark nuclear deal signed with the U.S. this week.
Trump said the nuclear agreement is subject to Riyadh establishing diplomatic relations with Israel through the Abraham Accords.
"There will be no enrichment of material!" the president said in a Truth Social post. The deal "is totally subject to Saudi Arabia joining the very respected and successful Abraham Accords," he said.
U.S. Energy Secretary Chris Wright and Saudi Energy Minister Prince Abdulaziz bin Salman signed an agreement Wednesday on civilian nuclear cooperation. They also signed a bilateral agreement on nuclear safeguards. The White House has not released the text of the deal.
The Department of Energy said the deal would lay the foundation for a decades-long, multibillion nuclear partnership between the two countries.
The agreement will be sent to Congress for review, the department said. U.S. cooperation with foreign nations on civilian nuclear power requires such review under the Atomic Energy Act.
Democratic lawmakers have expressed concern about the impact of the deal on the Middle East. The U.S. and Israel have justified the current war against Iran in part as an effort to force Tehran to renounce its nuclear ambitions. They previously bombed Iranian nuclear sites in June 2025.
"This agreement will set off a nuclear race in the region, further disincentivizing Iran from limiting its own program," Senator Chris Murphy of Connecticut said in a social media post.`,
    bodyJa: `ドナルド・トランプ大統領は木曜日、米国と今週署名された画期的な核合意に基づき、サウジアラビアはウラン濃縮を行わないと述べた。
トランプ大統領は、核合意はリヤドがアブラハム合意を通じてイスラエルと国交を樹立することを条件としていると述べた。
素材の充実はありません！大統領は真実ソーシャルの投稿でこう語った。同氏は、この合意は「サウジアラビアが非常に尊敬され、成功を収めているアブラハム合意に参加することを完全に条件としている」と述べた。
米国のクリス・ライト・エネルギー長官とサウジのアブドゥルアズィズ・ビン・サルマン王子は水曜日、民生用原子力協力に関する協定に署名した。両国は核保障措置に関する二国間協定にも署名した。ホワイトハウスは合意内容を公表していない。
エネルギー省は、この協定は両国間の数十年にわたる数十億ドル規模の原子力パートナーシップの基礎を築くことになると述べた。
同省によると、合意内容は審査のため議会に送付される予定だという。民生用原子力発電に関する米国の諸外国との協力には、原子力法に基づくそのような見直しが必要である。
民主党議員らは合意が中東に与える影響について懸念を表明している。米国とイスラエルは、イランに対する現在の戦争を、イラン政府に核開発の野望を放棄させるための一環として正当化している。彼らは以前、2025年6月にイランの核施設を爆撃した。
コネチカット州のクリス・マーフィー上院議員はソーシャルメディアへの投稿で、「この合意はこの地域での核開発競争を引き起こし、イランが自らの計画を制限する意欲をさらに失わせるだろう」と述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/23/trump-saudi-arabia-nuclear-power.html",
    publishedAt: "2026-07-23T13:00:08+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "cyclospora-outbreak-tests-rfk-jr-s-promi-0eb9bea7",
    title: "Cyclospora outbreak tests RFK Jr.'s promise to overhaul food system, rebuild trust in CDC",
    titleJa: "シクロスポラの発生により、食料システムを徹底的に見直し、CDCへの信頼を再構築するというRFKジュニアの約束が試される",
    summaryJa: "シクロスポラは、食料システムを徹底的に見直し、それを監督する機関への信頼を回復するというロバート・F・ケネディ・ジュニア厚生労働省長官の公約にとって試練となる。",
    bodyOriginal: `Robert F. Kennedy Jr. took the helm of the U.S. Department of Health and Human Services last year promising to overhaul the U.S. food system and restore confidence in the agencies that oversee it.
The secretary of the Department of Health and Human Services now faces one of his biggest tests yet, as the country tries to contain an outbreak – or potentially multiple outbreaks – of foodborne illness. Two months and thousands of cases of cyclosporiasis later, it looks like the nation's already fragile system is faltering.
Experts have long said the U.S. is underprepared to rein in foodborne outbreaks. But after the Trump administration slashed key officials — from federal employees who investigate the source of illnesses to those who share information with the public — Kennedy appears to face an even more daunting task to contain the parasite and build trust in the administration's response.
"It is difficult to quantify precisely, but it is clear that the cuts to federal funding over the past year or so have reduced our capacity to respond to outbreaks like this," said Craig Hedberg, co-director of the Minnesota Integrated Food Safety Center of Excellence.
Kennedy earlier this week defended the handling of an outbreak of cyclosporiasis that has sickened at least 7,000 people in Michigan alone. (The official count from the Centers for Disease Control and Prevention, which has lagged behind state tallies, sits at nearly 4,200 cases). Kennedy said the ongoing outbreak of cyclosporiasis is "under control," contending criticisms that agency cuts have hampered the investigation are "invalid."
The U.S. Food and Drug Administration and the Centers for Disease Control and Prevention have narrowed their focus to shredded iceberg lettuce from Taylor Farms, a produce supplier for a range of restaurants and grocers. The FDA over the weekend said lettuce from the company tested positive for cyclospora, the parasite that causes the explosive diarrhea. The agency later walked that back, saying it was a false positive.
Donald Schaffner, chair of food science at Rutgers University, said he's never seen such a reversal before and called it a "pretty big screw up." Still, one former senior FDA food official said the agency was right to publicize the positive test because if it turned out to be a true positive, delaying the announcement could have caused more people to fall ill. And regardless of the test result, the agencies still see the lettuce as a likely culprit.
The about face, and the confusion it created over whether regulators still suspected the Taylor Farms lettuce was tied to the outbreak, underscored the difficulty Kennedy faces in trying to restore public confidence.
HHS spokesperson Emily Hilliard in a statement to CNBC said the FDA has been transparent with Taylor Farms throughout the investigation and the corrected lab result doesn't change the agency's findings.
Former federal health officials and independent food safety experts say they see the cyclospora response as a prime example of a system that's long been underfunded and overstrained, leaving the U.S. vulnerable to these kinds of outbreaks. And they fear budget cuts, policy delays and personnel turnover are exacerbating an already delicate situation.
In response, Hilliard said regulators have "mounted a robust, science-based response to this outbreak, working closely with health departments in all 50 states, rapidly identifying known sources, and ensuring Americans have the information they need to protect themselves."
She added, "FDA and CDC continue working together to use every available public health tool to identify additional sources of the outbreak and inform swift public health action."
The cyclospora challenge
Cyclospora is a parasite that's trickier to track than some other pathogens. Parasites don't grow outside the human body, making it harder to test for them and link cases to each other. Cyclospora tests are prone to false positives because the process for conducting them can sometimes make it look like there's a parasite in the sample when there's not, Schaffner said.
Some experts said the Trump administration funding cuts make that tall task even tougher.
Dr. Daniel Jernigan, former director of the CDC's National Center for Emerging and Zoonotic Infectious Diseases, pointed to the CDC's Division of Parasitic Diseases and Malaria losing $40 million in funds from the U.S. Agency for International Development after the Trump administration dismantled the organization. The agency anticipates recovering some funds, though it would represent one-quarter of the money it used to receive from USAID, according to Jernigan.
Jernigan estimates the group has lost about one-quarter of its staff because of the budget cuts. Some of those employees worked on other parasitic diseases like malaria, but would typically be tapped to help respond in an emergency situation like this one, he said. As a result of the cuts, CDC is trying to move the parasitic diseases groups to the Division of Foodborne, Water and Environmental Diseases, which Jernigan says is a good thing for optimizing foodborne disease investigation and control.
"At the beginning of this response, the cuts because of the USAID [funding] made that division less capable of responding fast, and that's not rocket science," Jernigan said. "Just fewer people, you don't have the reserve."
HHS' Hilliard said the funds were dedicated to international activities and were not used to support the CDC's domestic foodborne disease response. She added that Trump's proposed fiscal year 2027 budget proposes a $33 million increase for food safety activities.
Jernigan suggests increasing that budget would help improve the agency's ability to respond to such outbreaks. CDC funding for food safety hasn't seen a meaningful increase since 2014, according to an analysis from George Washington University's Institute for Food Safety and Nutrition Security.
This fiscal year, the CDC's budget for food safety is $74 million, up $2 million from last year, according to the agency's operating plan. That food safety sum represents about 10% of funds for the CDC's emerging and zoonotic infectious diseases work.
CDC's FoodNet, or the Foodborne Diseases Active Surveillance Network, stopped mandatory reporting for six of eight pathogens it previously monitored, including cyclospora, because there hasn't been enough money forthe work, something experts say is a result of chronic underfunding of food safety. That program tracks foodborne illness outbreaks over time rather than identifying new outbreaks.
Kennedy earlier this week said cuts in the FoodNet program were for "redundant surveillance."
At the FDA, the agency's budget for food has long been a fraction of centers that oversee regulation of drugs and devices. This year, the food center's $1.17 billion budget represents about 17% of the agency's roughly $7 billion in total program level spending.
Food funding has lagged other areas in part because it disproportionately comes from congressional appropriations, whereas money for other centers, including those that oversee prescription drugs and tobacco products, largely comes from fees the industry pays for reviews of applications.
The so-called Department of Government Efficiency, which oversaw massive federal layoffs last year, spared the FDA's foodborne illness outbreak personnel from sweeping cuts, according to the former senior FDA official. The FDA's main press office was gutted, stripping the agency of outbreak communications expertise.
Some contend the FDA's messaging around the false positive sowed confusion about the investigation and how consumers should respond.
Ellen Shumaker, director of outreach for Safe Plates at North Carolina State University, said the FDA's recall communications have needed modernization for some time. She said the agency needs to give clear communications to consumers, telling them in plain language what concrete steps they can take. She added that the agency needs to more quickly classify how severe a recall is.
In this case, the FDA said illnesses started on May 17, yet it didn't issue a public notice until July 16, a timeline that suggests the response was slower than expected, said Frank Yiannas, former deputy commissioner of food policy and response at the FDA. One measure that he and other food safety experts say could have helped accelerate the response was the FDA's Food Traceability Rule, which was supposed to go into effect this year but was delayed by two-and-a-half years. The policy was designed to help the FDA quickly see where a food came from to respond to foodborne illness outbreaks.
Kennedy has repeatedly promised to rebuild trust in the CDC following the Covid-19 pandemic and restore its focus on infectious disease, and the cyclospora response gives him a chance to display any improvements to the agency's handling of a crisis. So far, experts said they have not seen the response get much better.
The state ripple effects
State and local health departments are also feeling the effects of the Trump administration's cuts. A May analysis from the Congressional Research Service found the administration terminated $5.78 billion in CDC grants to states.
Sarah Sorscher, director of regulatory affairs at the Center for Science in the Public Interest, said states use the block grants to fund epidemiologists and other specialists involved in investigating outbreaks.
In Kentucky, the group that's primarily responsible for conducting case interviews for foodborne illnesses has experienced a 30% to 50% decrease in staffing due to a reduction in federal grant funds, according to a spokesperson for the state's department of public health. The state anticipates more staff reductions next year due to additional cuts to federal grants next year.
Even so, one state hit hard by the outbreak said it has received federal help. The Ohio Department of Health requested federal help for the cyclospora investigation and will host several of the CDC's Epidemic Intelligence Service officers this week to assist, a spokesman told CNBC. The state agency has requested help from the CDC in prior responses, including a measles outbreak in 2022 and the East Palestine train derailment in 2023.
In the meantime, more people are falling ill. The CDC has received reports of more than 4,000 laboratory confirmed cases and is aware of more than 7,400 additional cases, many of them in Michigan and Ohio, that haven't been confirmed by a lab test yet.
And on Wednesday, the FDA reported a new outbreak among dozens of people linked to a product that hasn't been identified yet, meaning the health agencies have even more leads to investigate.`,
    bodyJa: `ロバート・F・ケネディ・ジュニアは昨年、米国保健社会福祉省の指揮官に就任し、米国の食料システムを徹底的に見直し、それを監督する機関への信頼を回復すると約束した。
同国が食中毒の発生、あるいは複数の発生の可能性を封じ込めようとしている中、保健社会福祉省の長官は現在、これまでで最大の試練の一つに直面している。 2か月が経過し、数千件の嚢胞子症患者が発生した現在、この国のすでに脆弱なシステムは揺らぎつつあるようだ。
専門家らは長年、米国では食中毒の発生を抑制する準備が不十分だと指摘してきた。しかし、トランプ政権が病気の原因を調査する連邦職員から国民と情報を共有する職員に至るまで主要な役人を削減したことを受け、ケネディ大統領は寄生虫を封じ込め、政権の対応に対する信頼を築くというさらに困難な任務に直面しているようだ。
ミネソタ州統合食品安全センター・オブ・エクセレンスの共同所長、クレイグ・ヘドバーグ氏は、「正確に数値化するのは難しいが、過去1年ほどの連邦政府の資金削減により、このような大流行に対応する能力が低下したことは明らかだ」と述べた。
ケネディ大統領は今週初め、ミシガン州だけで少なくとも7000人が罹患している嚢胞子症の発生への対応を擁護した。 （疾病管理予防センターの公式集計では州の集計より遅れており、感染者数は約4,200人に達している）。ケネディ大統領は、進行中の嚢胞子症の発生は「制御下にある」と述べ、政府機関の人員削減が捜査を妨げているという批判は「無効」であると主張した。
米国食品医薬品局と疾病管理予防センターは、さまざまなレストランや食料品店に農産物を供給するテイラー・ファームズ社の細切りアイスバーグレタスに焦点を絞っている。 FDAは週末、同社のレタスが爆発性下痢を引き起こす寄生虫シクロスポラの検査で陽性反応を示したと発表した。その後、政府機関はそれを撤回して、それは誤検知だったと述べた。
ラトガース大学食品科学部長のドナルド・シャフナー氏は、これほどの逆転はこれまで見たことがないと述べ、「かなりの大失敗」だと述べた。それでも、ある元FDA食品高官は、FDAが陽性反応を公表したのは正しかったと述べた。なぜなら、もしそれが真の陽性であることが判明した場合、発表が遅れればさらに多くの人が発病する可能性があったからである。そして、検査結果に関係なく、当局は依然としてレタスが犯人である可能性が高いと見ている。
テイラー・ファームのレタスが感染拡大に関連していると規制当局が依然として疑っているかどうかを巡って生じた混乱と、この不機嫌な顔は、ケネディ大統領が国民の信頼を回復しようとする際に直面する困難を浮き彫りにした。
HHSのスポークスマン、エミリー・ヒリアード氏はCNBCへの声明で、FDAは調査を通じてテイラー・ファームズに対して透明性を保っており、修正された検査結果は当局の調査結果を変えるものではないと述べた。
元連邦保健当局者や独立した食品安全専門家らは、シクロスポラへの対応は、長年にわたり資金不足と過大な負担を抱えてきたシステムの典型的な例であり、米国がこの種のアウトブレイクに対して脆弱なままになっていると見ていると述べている。そして、予算削減、政策の遅れ、人事異動が、ただでさえデリケートな状況をさらに悪化させているのではないかと懸念している。
これに対しヒリアード氏は、規制当局は「この流行に対して科学に基づいた強力な対応を開始し、全50州の保健当局と緊密に連携し、既知の感染源を迅速に特定し、米国民が身を守るために必要な情報を確実に得られるようにしている」と述べた。
さらに、「FDAとCDCは、利用可能なあらゆる公衆衛生ツールを活用してさらなる発生源を特定し、迅速な公衆衛生対策を知らせるために協力し続けている」と付け加えた。
シクロスポラの挑戦
シクロスポラは、他の病原体よりも追跡が難しい寄生虫です。寄生虫は人体の外では増殖しないため、寄生虫の検査や症例間の関連付けが困難になります。シャフナー氏によると、シクロスポラ検査では偽陽性が発生しやすい。その理由は、検査を実施するプロセスによって、サンプル中に寄生虫が存在しないのに寄生虫が存在しているかのように見える場合があるためである。
一部の専門家は、トランプ政権の資金削減により、この困難な任務がさらに困難になっていると述べた。
CDCの国立新興・人獣共通感染症センターの元所長であるダニエル・ジャーニガン博士は、トランプ政権が同組織を解体した後、CDCの寄生虫病・マラリア部門が米国国際開発庁からの資金4,000万ドルを失ったと指摘した。ジャーニガン氏によると、同庁は一部の資金を回収できると予想しているが、その額はUSAIDから受け取っていた資金の4分の1に相当するという。
ジャーニガン氏は、予算削減により同グループはスタッフの約4分の1を失ったと推定している。これらの従業員の中にはマラリアなど他の寄生虫病の治療に従事する人もいたが、通常は今回のような緊急事態への対応を支援するために抜擢されるだろうと同氏は述べた。人員削減の結果、CDCは寄生虫病グループを食中毒・水・環境病部門に移そうとしているが、ジャーニガン氏は、食中毒の調査と制御を最適化するためにはこれが良いことだと述べている。
「この対応が始まった当初、USAID（資金）による人員削減により、同部門の迅速な対応能力が低下した。それはロケット科学ではない」とジャーニガン氏は語った。 「人が少ないだけで、余裕がないんです。」
HHSのヒリアード氏は、この資金は国際的な活動に充てられており、CDCの国内の食中毒への対応を支援するためには使用されていないと述べた。同氏は、トランプ大統領の2027会計年度予算案では、食品安全活動に3,300万ドルの増額が提案されていると付け加えた。
ジャーニガン氏は、予算を増額すれば、このような感染拡大に対する政府機関の対応能力を向上させることができると示唆している。ジョージ・ワシントン大学食品安全・栄養安全保障研究所の分析によると、食品安全に対するCDCの資金は2014年以来大幅な増加が見られないという。
CDCの運営計画によると、今年度の食品安全に関するCDCの予算は7,400万ドルで、昨年より200万ドル増加している。この食品安全性の総額は、CDC の新興感染症および人獣共通感染症対策の資金の約 10% に相当します。
CDCのフードネット（食中毒積極的監視ネットワーク）は、これまで監視していた8つの病原体のうち、シクロスポラを含む6つの報告義務を中止した。その理由は、その作業に十分な資金がなかったためであり、専門家らは、これは食品の安全に対する慢性的な資金不足の結果だと主張している。このプログラムは、新たな発生を特定するのではなく、食中毒の発生を長期にわたって追跡します。
ケネディ大統領は今週初め、フードネット計画の削減は「過剰な監視」のためだと述べた。
FDAでは長い間、同庁の食品予算は医薬品や医療機器の規制を監督するセンターのほんの一部にすぎなかった。今年、食品センターの予算 11 億 7,000 万ドルは、同庁のプログラムレベルの総支出約 70 億ドルの約 17% に相当します。
食糧資金が他の分野に遅れをとっているのは、その資金が議会の支出からのものであることが部分的に不均衡である一方、処方薬やタバコ製品を監督するセンターを含む他のセンターへの資金は主に、申請の審査のために業界が支払う手数料から来ている。
元FDA高官によると、昨年の大規模な連邦政府の人員削減を監督したいわゆる政府効率省は、FDAの食中毒発生担当職員の大幅削減を免れたという。 FDA の主要報道室は破壊され、FDA からアウトブレイクに関するコミュニケーションの専門知識が剥奪された。
調査と消費者がどのように対応すべきかについて、誤検知を引き起こした混乱をめぐるFDAのメッセージを主張する人もいる。
ノースカロライナ州立大学の安全プレートのアウトリーチ担当ディレクター、エレン・シューメーカー氏は、FDAのリコールに関するコミュニケーションはしばらくの間近代化が必要だったと述べた。彼女は、政府機関は消費者に明確なコミュニケーションを提供し、どのような具体的な措置を講じることができるかを平易な言葉で伝える必要があると述べた。同氏は、当局はリコールの深刻度をより迅速に分類する必要があると付け加えた。
この場合、FDAは病気が5月17日に始まったと述べたが、公告を出したのは7月16日であり、これは対応が予想よりも遅かったことを示唆しているとFDAの食品政策・対応担当副局長フランク・イアナス氏は述べた。同氏や他の食品安全専門家らは、対応を加速するのに役立った可能性があるとしている措置の1つがFDAの食品トレーサビリティ規則で、今年施行される予定だったが2年半延期された。このポリシーは、FDA が食中毒の発生に対応するために、食品がどこから来たのかを迅速に確認できるように設計されました。
ケネディ大統領は、新型コロナウイルス感染症のパンデミック後、CDCへの信頼を再構築し、感染症への重点を回復すると繰り返し約束しており、シクロスポラへの対応は同局の危機対応の改善を示す機会となっている。専門家らはこれまでのところ、反応が大幅に改善した例は見られないと述べた。
州の波及効果
州や地方の保健当局もトランプ政権の削減の影響を感じている。議会調査局の5月の分析では、政権が州に対するCDC補助金57億8000万ドルを打ち切ったことが判明した。
公益科学センターの規制担当ディレクター、サラ・ソーシャー氏は、各州は疫学者や流行調査に携わる他の専門家に資金を提供するために一括交付金を利用していると述べた。
ケンタッキー州公衆衛生局の広報担当者によると、ケンタッキー州では食中毒の症例面接の実施を主に担当している団体で、連邦補助金の削減により人員が30～50％減少したという。州は来年の連邦補助金の追加削減により、来年はさらに職員が削減されると予想している。
それでも、感染拡大で大きな打撃を受けたある州は連邦政府の支援を受けていると述べた。オハイオ州保健省はシクロスポラ調査への連邦支援を要請し、今週CDCの疫病情報局職員数名を派遣して支援する予定だと広報担当者がCNBCに語った。同州政府機関は、2022年の麻疹流行や2023年の東パレスチナ列車脱線事故など、これまでの対応でCDCに支援を要請してきた。
その一方で、病気になる人も増えています。 CDCはこれまでに4,000人以上の検査で確認された症例の報告を受けており、さらに7,400人以上の症例を把握しており、その多くはミシガン州とオハイオ州でまだ検査で確認されていない。
そして水曜日、FDAは、まだ特定されていない製品に関連して数十人の間で新たな感染が発生したと報告した。これは、保健当局が調査すべきさらに多くの手がかりがあることを意味する。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/23/cyclospora-outbreak-tests-rfk-jr-response-funding-cuts.html",
    publishedAt: "2026-07-23T12:32:10+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "gary-lineker-among-millionaires-asking-a-77284579",
    title: "Gary Lineker among millionaires asking Andy Burnham to tax them more",
    titleJa: "大富豪のゲイリー・リネカー氏、アンディ・バーナムに増税を求める",
    summaryJa: "大富豪のゲイリー・リネカー氏、アンディ・バーナムに増税を求める- 公開されました",
    bodyOriginal: `Gary Lineker among millionaires asking Andy Burnham to tax them more
- Published
Millionaires including former footballer Gary Lineker and music producer Brian Eno have written to new prime minister Andy Burnham asking to be taxed more.
In an open letter, 120 well-off Britons told Burnham: "We can afford it. We're not talking about higher taxes on those who get up and go to work for their income every day, but on the very richest whose income is derived from the wealth they hold."
Organised by Patriotic Millionaires, the letter said it would lead to a more equal society, and urged a "devolution of wealth and power from the very richest".
People can already give money or stocks voluntarily to the Treasury using a donation facility.
Conservative leader Kemi Badenoch said Lineker is "very welcome to pay more tax he can write a cheque to the Treasury, no one is stopping him."
Patriotic Millionaires support a 2% tax on wealth over £10m.
"Millionaires are a patriotic bunch," the letter states. "We love this country and we want it to succeed.
"But success requires investment and a primary source of untouched capital investment is sitting with us, in untaxed potential."
Other signatories include Richard Curtis, director of Notting Hill, and Ian Gregg, the former managing director of Greggs and son of the bakery chain's founder. Scottish crime writer Val McDermid and former financial trader-turned-equality campaigner Gary Stevenson also signed the letter.
Chief Secretary to the Treasury Emma Reynolds said she would welcome UK millionaires increasing the amount of tax they pay but said any major changes would be announced during a Budget.
"I welcome the fact that people of good means are saying that they want to pay more. They can pay more," she said and pointed to the Treasury's donation link.
The renewed call for higher tax on the wealthy follows a similar campaign in previous years.
Burnham did not rule out a wealth tax when asked about it by Lineker - formerly the BBC's highest paid presenter - a few days before he became prime minister.
He suggested he may have "to ask for a little more" tax at some point.
Lineker was paid around £1.3m a year before he left the BBC. He is worth a reported £30m.
The latest call from Patriotic Millionaires said there is a "need to embrace a new kind of devolution of wealth and power, from the very richest in order to reinvest back into our greatest asset in every region".
It added that in its own poll, the majority of millionaires wanted a higher tax on themselves.
"There are a few people left with outdated economic thinking and few others desperate to hold onto every penny they can... Those that can't see past the end of their own self interest have no place in designing a Britain for the future," the letter said.
Musician Brian Eno told BBC Radio Lincolnshire the tax system was "very generous to rich people".
"If you're wealthy you don't pay very much tax but hire a clever bunch of accountants who somehow get you off that," he said.
He also dismissed the idea that lots of millionaires would leave the UK if they were taxed too much.
"That is the story that has always been told by the rich to avoid this but in fact people don't leave that much.
"Of course a few people will," he said, but added that people don't necessarily leave other high-tax countries, such as those in Scandinavia.
He insisted most of his financial peers do want to see better roads and schools and that they don't like seeing people living in extreme poverty, and that many financially support community groups.
Related topics
- Published15 July
- Published21 May`,
    bodyJa: `大富豪のゲイリー・リネカー氏、アンディ・バーナムに増税を求める
- 公開されました
元サッカー選手のゲーリー・リネカー氏や音楽プロデューサーのブライアン・イーノ氏を含む大富豪らがアンディ・バーナム新首相に書簡を送り、増税を求める要望を出した。
裕福な英国人120人は公開書簡でバーナムに対し、「私たちには余裕がある。私たちが話しているのは、毎日収入のために起きて働きに行く人たちへの増税についてではなく、自分たちが保有する富から収入を得ている最も裕福な人たちへの増税についてだ」と語った。
愛国億万長者団体が主催したこの書簡は、より平等な社会につながると述べ、「最も裕福な者からの富と権力の分権」を促した。
人々はすでに寄付制度を利用して自発的に財務省に金銭や株式を寄付することができる。
保守党党首のケミ・バデノック氏は、リネカー氏が「財務省に小切手を書いて納税できるのは大歓迎だ。誰も彼を止める者はいない」と述べた。
愛国的な億万長者は、1,000万ポンドを超える富に対する2％の税金を支持しています。
「大富豪は愛国心の塊だ」と手紙には書かれている。 「私たちはこの国を愛しており、この国が成功することを望んでいます。
「しかし、成功には投資が必要であり、手付かずの資本投資の主要な源泉は、課税されない可能性の中に私たちの側にあります。」
他の署名者には、ノッティングヒル取締役のリチャード・カーティス氏や、グレッグスの元常務取締役でベーカリーチェーンの創設者の息子であるイアン・グレッグ氏も含まれる。スコットランドの犯罪作家ヴァル・マクダーミッド氏と元金融トレーダーから平等運動家に転身したゲイリー・スティーブンソン氏も書簡に署名した。
エマ・レイノルズ財務長官は、英国の大富豪が納税額を増やすことは歓迎すると述べたが、大きな変更は予算案中に発表されるだろうと述べた。
「裕福な人々がもっとお金を払いたいと言っているという事実を歓迎します。彼らはもっと支払うことができる」と彼女は言い、財務省の寄付とのつながりを指摘した。
富裕層への増税を求める新たな要求は、前年の同様のキャンペーンに続いて行われた。
バーナム氏は、首相就任の数日前に、かつてBBCで最も高額な報酬をもらっていた司会者だったリネカー氏から富裕税について質問された際、富裕税の可能性を排除しなかった。
同氏は、いつか税金を「もう少し要求する」必要があるかもしれないと示唆した。
リネカー氏はBBCを退社するまでに年間約130万ポンドを支払われていた。彼の価値は3000万ポンドと伝えられている。
愛国億万長者の最新の呼びかけでは、「あらゆる地域の最大の資産に再投資するために、最富裕層からの新たな種類の富と権力の委譲を受け入れる必要がある」と述べられている。
独自の世論調査では大多数の億万長者が自分自身への増税を望んでいると付け加えた。
「時代遅れの経済的考え方を持った人々が少数残っており、一銭も残そうと必死になっている人々もいる。私利私欲の終わりを見通せない人々には、英国の将来を設計する立場はない」と書簡は述べている。
ミュージシャンのブライアン・イーノはBBCラジオ・リンカンシャーに対し、税制は「富裕層に対して非常に寛大だ」と語った。
「裕福であれば、あまり税金を払わないが、賢い会計士を雇って、何とか税金を免れることができる」と彼は言う。
同氏はまた、税金が多すぎると多くの億万長者が英国を離れるだろうという考えを否定した。
「これは金持ちがこれを避けるために常に教えてきた話ですが、実際には人々はそれほど離れません。
「もちろんそうする人は少数だ」と同氏は述べたが、人々は必ずしもスカンジナビア諸国など他の高税率国から離れるわけではないと付け加えた。
同氏は、経済界の同業者のほとんどが道路や学校の改善を望んでおり、人々が極度の貧困の中で暮らしているのを見るのは好まないと主張し、多くが地域団体を経済的に支援していると主張した。
関連トピック
- 7 月 15 日発行
- 5 月 21 日公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cvgjp79m42go?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-23T12:18:36+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/8a6e/live/b0338440-8683-11f1-bee8-53ce494e1abc.jpg",
    readTime: 4,
  },
  {
    id: "texas-instruments-shares-are-sliding-and-370a52ae",
    title: "Texas Instruments shares are sliding, and its rival is doing even worse. What’s going on in the world of analog semiconductors.",
    titleJa: "テキサス・インスツルメンツの株価は下落しており、ライバル企業の業績はさらに悪化している。アナログ半導体の世界で何が起きているのか。",
    summaryJa: "アナログ半導体メーカーの両社が第2四半期に強い需要を報告したことを受けて高まる期待に応えようと苦戦したため、木曜日にはテキサス・インスツルメンツの株価が下落する一方、STマイクロエレクトロニクスの株価は急落した。",
    bodyOriginal: `Texas Instruments shares were falling while STMicroelectronics stock was diving on Thursday, after both makers of analog semiconductors struggled to meet heightened expectations after reporting strong demand in the second quarter.`,
    bodyJa: `アナログ半導体メーカーの両社が第2四半期に強い需要を報告したことを受けて高まる期待に応えようと苦戦したため、木曜日にはテキサス・インスツルメンツの株価が下落する一方、STマイクロエレクトロニクスの株価は急落した。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/texas-instruments-shares-are-sliding-and-its-rival-is-doing-even-worse-whats-going-on-in-the-world-of-analog-semiconductors-e999a8ac?mod=mw_rss_topstories",
    publishedAt: "2026-07-23T08:36:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-89037579",
    readTime: 2,
  },
  {
    id: "unicredit-ceo-tells-cnbc-acquisition-of-ab8f2cec",
    title: "UniCredit CEO tells CNBC acquisition of Commerzbank could happen in fourth quarter",
    titleJa: "ウニクレディトのCEO、CNBCによるコメルツ銀行の買収は第4四半期に起こる可能性があると語る",
    summaryJa: "ウニクレディトのアンドレア・オーセル最高経営責任者（ＣＥＯ）は木曜日、ＣＮＢＣに対し、イタリアの銀行が第４・四半期にコメルツ銀行を買収する「可能性がある」と語った。",
    bodyOriginal: `UniCredit is aiming to exercise control of Commerzbank in the fourth quarter, the CEO of the Italian bank told CNBC in an exclusive interview.
Speaking with CNBC's "Europe Early Edition," UniCredit CEO Andrea Orcel said the bank is happy with its position in Commerzbank, with the bank now closing in on full control of the German lender, having upped its stake to 48%.
Orcel said the Italian bank is firing on all cylinders, having raised its full-year guidance after posting its best-ever second-quarter and first-half results Thursday.
Asked when a full acquisition could take place, Orcel told CNBC's Carolin Roth that certain steps still need to happen.
"With respect to the normal regulatory environment and antitrust, and what would allow us to take ownership of tendered shares and therefore exercise control, we think now potentially in Q4, maybe later, and that would mark the moment when we go in."
"That would mark the moment when we go in," the CEO said, adding that they would not wait for the AGM in May.
He said that the two banks remain "very different," adding that a number of alignments need to occur before any full merger takes place.
CNBC has contacted Commerzbank for comment.
Takeover battle
UniCredit's swoop for Commerzbank has been one of Europe's most closely-watched takeover tussles in recent years.
The Italian bank took an initial 9% stake in 2024, before ramping it up to about 30% in March, fueling expectations of a full takeover. That prospect has been fiercely resisted by both Commerzbank management and the German government, which holds a 12% stake in the lender.
In its second-quarter results statement, UniCredit said the Commerzbank deal has evolved from "an attractive financial investment" to a "strategic transaction of substantial industrial value creation."
The Italian bank's net profit fell 13% to 2.9 billion euros ($3.3 billion) in the second quarter, or 3.1 billion euros when excluding one-off hedging and certain other funding costs relating to the increased stake in Commerzbank.
Its full-year net profit target has been upgraded to more than 11 billion euros.`,
    bodyJa: `ウニクレディトは第４・四半期にコメルツ銀行の支配権を行使することを目指しているとイタリアの銀行の最高経営責任者（ＣＥＯ）が独占インタビューでＣＮＢＣに語った。
ウニクレディトのアンドレア・オーセル最高経営責任者（ＣＥＯ）はＣＮＢＣの「ヨーロッパ・アーリー・エディション」とのインタビューで、同銀行がコメルツ銀行での立場に満足しており、同銀行は現在出資比率を４８％に引き上げ、ドイツの金融業者の完全な支配権に近づいていると述べた。
オルセル氏は、イタリアの銀行は木曜日に過去最高となる第2四半期と上半期の業績を発表したことを受けて通期見通しを引き上げ、すべてのシリンダーに注力していると述べた。
完全な買収がいつ行われるのかとの質問に対し、オーセル氏はCNBCのキャロリン・ロスに対し、まだ一定の措置を講じる必要があると語った。
「通常の規制環境と独占禁止法、そして当社が公開株の所有権を取得してコントロールを行使できるようになるものに関しては、現時点では潜在的に第4四半期かそれ以降になる可能性があると考えており、それが当社が参入する瞬間となるだろう。」
同最高経営責任者（ＣＥＯ）は「それがわれわれの入社の瞬間となるだろう」と述べ、５月の株主総会を待つつもりはないと付け加えた。
同氏は、両銀行は依然として「大きく異なっている」と述べ、完全な合併が行われる前に多くの調整を行う必要があると付け加えた。
CNBCはコメルツ銀行にコメントを求めた。
乗っ取り合戦
ウニクレディトによるコメルツ銀行への買収は、近年ヨーロッパで最も注目されている買収争いの一つとなっている。
イタリアの銀行は2024年に当初9％の株式を取得し、その後3月に約30％に引き上げ、完全買収への期待が高まった。この見通しには、コメルツ銀行の経営陣と、同銀行の株式の12％を保有するドイツ政府の両方が激しく抵抗している。
ウニクレディトは第２・四半期決算報告書で、コメルツ銀行との取引が「魅力的な金融投資」から「実質的な産業価値創造の戦略的取引」に進化したと述べた。
イタリア銀行の第２・四半期の純利益は１３％減の２９億ユーロ（３３億ドル）となった。これは、コメルツ銀行の株式増加に関連する一時的なヘッジやその他の特定の資金調達コストを除くと３１億ユーロとなる。
通期の純利益目標は１１０億ユーロ以上に引き上げられた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/23/unicredit-commerzbank-takeover-acquisition-2q-earnings.html",
    publishedAt: "2026-07-23T08:23:04+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 2,
  },
  {
    id: "houthis-claim-strikes-on-saudi-arabian-o-c88777d8",
    title: "Houthis claim strikes on Saudi Arabian oil tankers as Rubio says Iran not ready to make a deal",
    titleJa: "ルビオ氏がイランには合意の準備ができていないと発言、フーシ派がサウジアラビアのタンカー攻撃を主張",
    summaryJa: "テヘランが支援するフーシ派は、紅海でサウジアラビアの石油タンカー２隻を攻撃したと主張し、米国が１２夜連続の対イラン攻撃を完了する中、中東紛争に新たな前線を開く恐れがある。イエメンのフーシ派は水曜日、海上封鎖に違反した疑いで、サウジアラビアの石油タンカー「エンセリア」と「ライラ」２隻を無人機とミサイルで標的にしたと発表した。",
    bodyOriginal: `The Tehran-backed Houthis have claimed attacks on two Saudi Arabian oil tankers in the Red Sea, threatening to open up a new front in the Middle East conflict as the U.S. completed its 12th consecutive night of strikes on Iran.
Yemen's Houthis said Wednesday that they had targeted two Saudi Arabian oil tankers, named Encelia and Layla, with drones and missiles for allegedly violating their maritime blockade.
The attack, if confirmed, would mark the first since the militant group announced a naval blockade against Saudi Arabia.
The state-run Saudi Press Agency (SPA) confirmed the Encelia was targeted while transiting the Red Sea, resulting in a fire at the bow of the vessel. Citing an unnamed official from the Transport General Authority, the agency reported all crew were safe and described the attack as a violation of international law.
The SPA did not provide an update on the Layla tanker.
Separately, the United Kingdom Maritime Trade Operations (UKMTO) reported Wednesday that an "unknown projectile" struck a Saudi Arabian oil tanker about 130 kilometers from the coastal town of Al Shuqaiq in Saudi Arabia. UKMTO said the incident resulted in a fire onboard and reported no casualties.
The U.S. Central Command said overnight that American forces completed another round of strikes against Iran, hitting military targets including maritime capabilities, missile and drone storage facilities, and air defense assets.
"The strikes further degrade Iran's ability to attack civilian mariners and commercial vessels," Centcom said in a statement.
It added that U.S. forces have targeted dozens of Iranian military sites on land this month while resuming a blockade against the Islamic Republic at sea. As of Thursday evening, Centcom said it had redirected nine commercial vessels and disabled one to prevent ships from entering or departing Iranian ports.
U.S. Secretary of State Marco Rubio told reporters on Thursday that Iran is still not ready to make a deal — "at least not one they are willing to live by."
"They are going to continue to pay a price and every night the price gets higher and higher and higher," Rubio said.
Asked for his reaction to Houthi-claimed attacks on two Saudi Arabian oil tankers in the Red Sea, Rubio said: "I hope that they will stop. They shouldn't really do that. They got suckered into this by the Iranians."
Oil prices were higher on Thursday morning, extending recent gains, as the U.S. and Iran ratcheted up hostilities.
International benchmark Brent crude futures with September delivery were last seen trading up 3.6% at $97.46 per barrel. U.S. West Texas Intermediate futures with September delivery, meanwhile, stood 2.7% higher at $89.14.
Trump threatens Iran bridges and power plants
The Institute for the Study of War, a Washington-based think tank, said in its latest update that at least seven vessels had changed course to avoid transiting through the Bab el-Mandeb Strait in light of the Houthis blockade on Saudi Arabian ports. The Bab el-Mandeb Strait is a choke point for commercial ship traffic that connects the Red Sea to the Gulf of Aden and global markets.
The U.S. has also increasingly struck Iranian targets outside of southern Iran, including western and northwestern Iran, the ISW said.
President Donald Trump had warned the U.S. would destroy an Iranian bridge or power plant each time Iran attacks a ship in the strategically vital Strait of Hormuz, signaling a further fracturing of the interim peace agreement signed by both sides last month.
"From this point forward, any time the Islamic Republic of Iran shoots at a ship in the Strait of Hormuz, whether it be by Missile, Rocket, Drone, or any other device or weapon, the United States will bomb and destroy ONE BRIDGE OR POWER PLANT," Trump said Wednesday in a Truth Social post.
In response, Iran said it would retaliate to those strikes with attacks against U.S.-linked infrastructure and energy assets in the region.`,
    bodyJa: `テヘランが支援するフーシ派は、紅海でサウジアラビアの石油タンカー２隻を攻撃したと主張し、米国が１２夜連続の対イラン攻撃を完了する中、中東紛争に新たな前線を開く恐れがある。
イエメンのフーシ派は水曜日、海上封鎖に違反した疑いで、サウジアラビアの石油タンカー「エンセリア」と「ライラ」２隻を無人機とミサイルで標的にしたと発表した。
この攻撃が確認されれば、武装勢力がサウジアラビアに対する海上封鎖を発表して以来初めてとなる。
国営サウジ通信社（SPA）は、エンセリア号が紅海を航行中に標的にされ、船首部で火災が発生したことを確認した。運輸総局の匿名当局者の話として、同局は乗組員全員が無事であると報告し、この攻撃は国際法違反であると述べた。
SPAはタンカーLaylaに関する最新情報を提供しなかった。
これとは別に、英国海事貿易業務局（UKMTO）は水曜日、サウジアラビアの沿岸都市アル・シュカイクから約130キロメートル離れた場所で「未知の飛翔体」がサウジアラビアの石油タンカーに衝突したと報告した。 UKMTOは、この事故により船内で火災が発生したが、死傷者は出なかったと発表した。
米中央軍は夜通し、米軍が海上能力、ミサイルや無人機の保管施設、防空資産などの軍事目標を攻撃し、イランに対する追加攻撃を完了したと発表した。
セントコムは声明で「今回の攻撃により、民間船員や商船を攻撃するイランの能力がさらに低下する」と述べた。
さらに、米軍は今月、海上ではイランに対する封鎖を再開する一方、陸上では数十のイラン軍事拠点を標的にしていると付け加えた。セントコムは、木曜夕方の時点で、イラン港への船舶の出入りを阻止するため、9隻の商船の航路を変更し、1隻を航行不能にしたと発表した。
マルコ・ルビオ米国務長官は木曜日、記者団に対し、イランはまだ合意を結ぶ準備ができていないと述べ、「少なくともイランが従うつもりのある合意には至っていない」と述べた。
「彼らは今後も代償を払い続けることになるが、その代償は毎晩どんどん高くなっていく」とルビオ氏は語った。
フーシ派が主張する紅海でのサウジアラビア石油タンカー２隻への攻撃に対する反応を問われたルビオ氏は、「彼らがやめることを願っている。彼らは本当にそんなことをすべきではない。彼らはイラン人に騙されてこの事件に巻き込まれたのだ」と述べた。
米国とイランの対立が激化する中、木曜朝の原油価格は上昇し、最近の上昇幅を拡大した。
国際ベンチマークであるブレント原油先物（９月渡し）は直近で３．６％上昇し、１バレル＝９７．４６ドルで取引された。一方、米国ウエスト・テキサス・インターミディエイト先物（９月渡し）は２．７％高の８９．１４ドルとなった。
トランプ大統領、イランの橋と発電所を脅す
ワシントンに本拠を置くシンクタンク、戦争研究研究所は最新の更新情報で、フーシ派によるサウジアラビアの港湾封鎖を踏まえ、少なくとも７隻の船舶がバブ・エル・マンデブ海峡の通過を避けるために針路を変更したと発表した。バブ・エル・マンデブ海峡は、紅海とアデン湾および世界市場を結ぶ商船交通の要所です。
ＩＳＷによると、米国はイラン西部や北西部など、イラン南部以外のイラン目標への攻撃も増えている。
ドナルド・トランプ大統領は、イランが戦略上重要なホルムズ海峡で船舶を攻撃するたびに、米国はイランの橋や発電所を破壊すると警告し、先月両国が署名した暫定和平合意がさらに破棄される可能性を示唆していた。
トランプ大統領は水曜、トゥルース・ソーシャルへの投稿で、「今後、イラン・イスラム共和国がホルムズ海峡で船舶を銃撃するたび、それがミサイル、ロケット、ドローン、その他の装置や兵器によるものであれ、米国は橋か発電所の一つを爆撃し、破壊するだろう」と述べた。
これに対しイランは、地域内の米国関連のインフラやエネルギー資産に対する攻撃で報復すると述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/23/iran-war-us-trump-houthis-red-sea-oil.html",
    publishedAt: "2026-07-23T08:15:42+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "google-burning-through-cash-with-spirall-3af5f660",
    title: "Google burning through cash with spiralling AI costs",
    titleJa: "Google は AI コストの高騰で資金を使い果たしている",
    summaryJa: "Google は AI コストの高騰で資金を使い果たしている- 公開されました",
    bodyOriginal: `Google burning through cash with spiralling AI costs
- Published
Google parent Alphabet saw its business continue to grow in recent months, yet growing spending on artificial intelligence (AI) infrastructure put its leftover cash into negative territory.
The company's free cash flow, the cash it maintained after paying for operations and investments, came in at negative $5.9bn (£4.3bn) for the first time in at least a decade, according to its past financial records.
Alphabet's spending on AI is now expected to hit as much as $205bn this year, an increase from $190bn, as major tech companies race to build around a new wave of the technology.
Meanwhile, Alphabet's combined quarterly revenue hit $119.8bn, up 23% compared with the same time last year.
But the company's stock fell 4% in after-hours trading.
Anat Ashkanazi, Google's chief financial officer, noted on a call with financial analysts that the company had shown negative free cash flow due to growing capital expenditures, essentially all of which was related to AI spending.
She said the company spent $45bn in the second quarter, with 60% of the cost going towards servers and the remaining 40% going towards data centres.
Alphabet's capital spending was $36bn in the first quarter of this year.
Ashkanazi said on the call that when it comes to AI, "the demand still outpaces that investment".
"As long as we see these attractive opportunities to invest, we will continue to invest."
Sundar Pichai, Google's chief executive, said that the technological shift to AI tools and capabilities still "feels like early innings in a shift across multiple areas" and that the company's plans around generating financial returns on its spending were "disciplined".
"What I see with what you can do with frontier capabilities, there is still a lot of work left to do to translate that into experiences for our users. So that looks like extraordinary opportunities with extraordinary returns."
Rachel Winter, a partner at the wealth management firm Killik & Co, said there was a bit of surprise among investors about how much Google was spending.
"They said that this year the total they will spend will be between $195bn and $205bn. So these are huge numbers. And I think the fact that the shares dropped about 3.5% in after-hours trading when the results came out, that suggests there is a little bit of concern about those levels."
Tesla, the electric vehicle company controlled by Elon Musk, also reported negative free cash flow on Wednesday of $1.1bn for the second quarter due to its own increasing investment costs.
It was the company's first negative showing of leftover cash in two years, according to its financial records.
Vaibhav Taneja, Tesla's chief financial officer, said during a call with analysts that the company will spend as much as $25bn this year, more than double its capital spending in 2025.
He added that Tesla was in "a big investment cycle" and that its spending would probably increase further over the next three years.
Tesla's stock also dropped by 4% in after-hours trading.
Related topics
- Published6 February`,
    bodyJa: `Google は AI コストの高騰で資金を使い果たしている
- 公開されました
グーグルの親会社アルファベットはここ数カ月間、事業が成長を続けているものの、人工知能（AI）インフラへの支出が拡大し、手元資金がマイナス領域に陥っている。
過去の財務記録によると、同社のフリーキャッシュフロー、つまり営業や投資の支払い後に維持していた現金は、少なくとも10年ぶりにマイナス59億ドル（43億ポンド）となった。
大手ハイテク企業がテクノロジーの新たな波を中心に構築を競う中、アルファベットのAIへの支出は今年、1900億ドルから増加し、2050億ドルに達すると予想されている。
一方、アルファベットの四半期売上高は合わせて1198億ドルに達し、前年同時期と比べて23％増加した。
しかし同社株は時間外取引で４％下落した。
Googleの最高財務責任者であるアナト・アシュカナジ氏は、財務アナリストとの電話会議で、設備投資の増加により同社のフリーキャッシュフローがマイナスになっており、その実質的にすべてがAI支出に関連していると指摘した。
同氏によると、同社は第2四半期に450億ドルを費やし、コストの60％がサーバーに、残りの40％がデータセンターに充てられたという。
今年第1四半期のアルファベットの設備投資は360億ドルだった。
アシュカナジ氏は電話会議で、AIに関しては「需要が依然として投資を上回っている」と語った。
「こうした魅力的な投資機会がある限り、我々は投資を続けるだろう。」
グーグルのサンダー・ピチャイ最高経営責任者（ＣＥＯ）は、ＡＩツールや機能への技術的移行は依然として「複数の分野にわたる移行の初期段階のような気がする」とし、支出から財務的利益を生み出すという同社の計画は「規律正しい」と述べた。
「フロンティアの機能を使って何ができるかを見ると、それをユーザーのエクスペリエンスに変えるためには、やるべきことがまだたくさん残っています。したがって、それは並外れた利益をもたらす並外れた機会のように見えます。」
資産管理会社キリック・アンド・カンパニーのパートナー、レイチェル・ウィンター氏は、グーグルが投じた額について投資家の間で多少の驚きがあったと語った。
「彼らは、今年の支出総額は1950億ドルから2050億ドルになるだろうと述べた。つまり、これは膨大な数字だ。そして、決算発表時に株価が時間外取引で約3.5％下落したという事実は、その水準について若干の懸念があることを示唆していると思う。」
イーロン・マスク氏が経営する電気自動車会社テスラも水曜日、自社の投資コストの増加により、第2四半期のフリーキャッシュフローが11億ドルのマイナスになったと報告した。
財務記録によると、同社の現金残高がマイナスとなるのは過去２年間で初めてだった。
テスラのヴァイバブ・タネジャ最高財務責任者（ＣＦＯ）はアナリストとの電話会議で、同社は今年、２０２５年の設備投資の２倍以上となる２５０億ドルを支出すると述べた。
同氏は、テスラは「大きな投資サイクル」に入っており、おそらく今後３年間で支出はさらに増えるだろうと付け加えた。
テスラ株も時間外取引で４％下落した。
関連トピック
- 2 月 6 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c235n47g8g8o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-23T07:15:59+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/f610/live/9cc8bdc0-8616-11f1-8dd8-4d5cff7c66df.jpg",
    readTime: 3,
  },
  {
    id: "firm-hacked-by-rogue-openai-models-says-6fe47454",
    title: "Firm hacked by rogue OpenAI models says it is 'a wake-up call'",
    titleJa: "不正なOpenAIモデルによってハッキングされた企業、これは「警鐘」だと語る",
    summaryJa: "不正なOpenAIモデルによってハッキングされた企業、これは「警鐘」だと語る- 公開されました",
    bodyOriginal: `Firm hacked by rogue OpenAI models says it is 'a wake-up call'
- Published
The co-founder of Hugging Face, a technology start-up that was hacked after some of OpenAI's most advanced artificial intelligence (AI) models went rogue, said on Thursday that the incident is "a wake-up call" for the industry.
Thomas Wolf told BBC's Newsday radio programme that "this will be one of the most common types of cyber attacks we see", but that most firms are not aware that the "game has changed".
The BBC has contacted OpenAI for comment.
The ChatGPT-maker said on Tuesday that its AI models broke out of a secure test environment during a trial and launched a cyber attack. The firm said the incident was "unprecedented" and that it was conducting an investigation with Hugging Face.
AI agents are able to operate alone to accomplish tasks after human instruction.
Wolf said that Hugging Face initially had no idea where the attack originated when signs of it surfaced in mid-July but that the company was able to contain the breach.
Hugging Face is one of the world's largest open-source hubs for sharing AI models and is often used by tech developers and researchers.
Wolf said the breach was "very different" from the usual cyber attacks that Hugging Face often faces and that OpenAI quickly informed the company that its models were behind the hack.
In a "very short time" there were 17,000 attacks on Hugging Face's network from various IP (Internet Protocol) addresses, said Wolf, who is also the firm's chief science officer.
Wolf said it was a warning to other companies that they must strengthen their cybersecurity defences to counter such attacks.
The hack is "worrying" because it suggests OpenAI's models ignored the typical safeguards that would prevent an AI program from committing a cyber attack, said Nate Soares from the Machine Intelligence Research Institute.
"In some sense, it knew that this was not what the creators intended. It just didn't care," he added.
What is AI, how does it work and why are some people concerned about it?
- Published29 July 2025
Will your job be replaced by AI? Here are the roles most affected
- Published1 day ago
Other organisations have also taken note of the incident.
A UK government spokesperson said the country's AI Security Institute was studying how the AI system behaved in the incident and that it was continuing to work with OpenAI and other labs to strengthen safeguards.
They urged organisations to ramp up their cyber security measures by taking steps such as enrolling in the government-backed Cyber Essentials certification scheme.
The incident has come at a crucial time for the industry after the US government last month ordered American tech firm Anthropic to restrict access to its AI models over national security concerns. The Department of Commerce lifted the restrictions several weeks later.
People in the industry have also raised security concerns over the widespread use of open-source models in China, allowing anyone to install and customise AI tools released by major developers.
Chinese start-up Moonshot AI will release its Kimi K3 open-source model on 27 July. Since debuting last week, it has drawn industry attention, with many viewing it as a strong competitor to leading Western AI systems.
But on Wednesday a White House adviser accused Moonshot of a "large scale" effort to steal the capabilities of top US AI models.
- Published1 hour ago
- Published17 April`,
    bodyJa: `不正なOpenAIモデルによってハッキングされた企業、これは「警鐘」だと語る
- 公開されました
OpenAIの最先端の人工知能（AI）モデルの一部が不正行為を受けてハッキングされたテクノロジー新興企業ハギング・フェイスの共同創設者は木曜日、この事件は業界への「警鐘」だと述べた。
トーマス・ウルフ氏はBBCのニューズデイラジオ番組で、「これは我々が目にする最も一般的なタイプのサイバー攻撃の1つになるだろう」としながらも、ほとんどの企業は「状況が変わった」ことに気づいていない、と語った。
BBCはOpenAIにコメントを求めた。
ChatGPTメーカーは火曜日、同社のAIモデルが試験中に安全なテスト環境を突破し、サイバー攻撃を開始したと発表した。同社は今回の事件は「前例のない」もので、ハギングフェイス社とともに調査を進めていると述べた。
AI エージェントは、人間の指示に従って単独で動作してタスクを実行できます。
ウルフ氏は、7月中旬に攻撃の兆候が表面化したとき、ハギングフェイス社は当初、攻撃がどこから来たのか全く分からなかったが、同社は侵害を阻止することができたと述べた。
Hugging Face は、AI モデルを共有するための世界最大のオープンソース ハブの 1 つであり、技術開発者や研究者によってよく使用されています。
ウルフ氏は、この侵害はハギング・フェイスが頻繁に直面する通常のサイバー攻撃とは「非常に異なる」ものであり、OpenAIは同社のモデルがハッキングの背後にあることをすぐに同社に通知したと述べた。
同社の最高科学責任者でもあるウルフ氏によると、「非常に短期間に」ハギングフェイスのネットワークに対し、さまざまなIP（インターネットプロトコル）アドレスから1万7000件の攻撃があったという。
ウルフ氏は、このような攻撃に対抗するためにサイバーセキュリティ防御を強化する必要があるという他の企業への警告であると述べた。
マシンインテリジェンス研究所のネイト・ソアレス氏は、このハッキングは「憂慮すべき」もので、OpenAIのモデルがAIプログラムによるサイバー攻撃を防ぐ典型的な安全策を無視していたことを示唆していると述べた。
「ある意味、これが制作者が意図したものではないことは分かっていた。ただ気にしなかっただけだ」と同氏は付け加えた。
AI とは何ですか? AI はどのように機能しますか? なぜ一部の人々は AI について懸念しているのでしょうか?
- 2025 年 7 月 29 日公開
あなたの仕事はAIに取って代わられるでしょうか？最も影響を受ける役割は次のとおりです
- 1 日前に公開
他の組織もこの事件に注目しています。
英国政府報道官は、同国のAIセキュリティ研究所が今回の事件でAIシステムがどのように動作したかを研究しており、安全策を強化するためにOpenAIや他の研究所と協力し続けていると述べた。
彼らは組織に対し、政府支援のCyber​​ Essentials認定制度に登録するなどの措置を講じてサイバーセキュリティ対策を強化するよう求めた。
米国政府が先月、国家安全保障上の懸念を理由に米国ハイテク企業アンスロピックに対し、同社のAIモデルへのアクセスを制限するよう命令したことを受け、この事件は業界にとって極めて重要な時期に起きた。商務省は数週間後に制限を解除した。
業界関係者はまた、大手開発者がリリースした AI ツールを誰でもインストールしてカスタマイズできるオープンソース モデルが中国で広く使用されていることに対して、セキュリティ上の懸念を提起しています。
中国の新興企業Moonshot AIは、オープンソースモデルのKimi K3を7月27日にリリースする。先週のデビュー以来、業界の注目を集めており、多くの人が主要な西側 AI システムに対する強力な競争相手とみなしています。
しかし水曜日、ホワイトハウス顧問はムーンショットが米国のトップAIモデルの機能を盗む「大規模な」取り組みを行っていると非難した。
- 1 時間前に公開
- 4 月 17 日公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cdrvy3pn3r0o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-23T06:18:37+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/c57c/live/927f2eb0-8645-11f1-bb06-cd4aa2d50a91.jpg",
    readTime: 4,
  },
  {
    id: "big-bosses-reveal-the-secret-to-getting-95b7a520",
    title: "Big bosses reveal the secret to getting hired",
    titleJa: "偉い人たちが雇用の秘訣を明かす",
    summaryJa: "偉い人たちが雇用の秘訣を明かす関連トピック",
    bodyOriginal: `Big bosses reveal the secret to getting hired
Related topics
- EmploymentUpdates from your News topics will appear in My News and in a collection on the News homepage.
- CareersUpdates from your News topics will appear in My News and in a collection on the News homepage.`,
    bodyJa: `偉い人たちが雇用の秘訣を明かす
関連トピック
- ニュース トピックからの雇用最新情報は、マイ ニュースおよびニュース ホームページのコレクションに表示されます。
- ニュース トピックからのキャリア更新は、マイ ニュースおよびニュース ホームページのコレクションに表示されます。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/videos/cvgxelx3y78o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-23T05:22:34+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/fa14/live/ecd31450-85e4-11f1-b976-0b9c15b0ccfc.jpg",
    readTime: 2,
  },
  {
    id: "hedge-funds-circle-uk-stocks-as-new-pm-a-aab9a4b1",
    title: "Hedge funds circle UK stocks as new PM Andy Burnham pledges 'new economic model'",
    titleJa: "アンディ・バーナム新首相が「新たな経済モデル」を誓約、ヘッジファンドが英国株に注目",
    summaryJa: "ヘッジファンドの空売り派は今年、英国上場株への賭けを強化しており、公開ポジションは２０２６年上半期に５倍に急増している。現在、投資家は、アンディ・バーナム新首相の下での政策の電撃により、英国株全体のポートフォリオのロングサイドとショートサイドの両方でチャンスが広がる可能性があると考えている。",
    bodyOriginal: `Hedge fund short-sellers have ramped up bets against U.K.-listed stocks this year, with disclosed positions surging fivefold in the first half of 2026.
Now, investors believe a policy blitz under new Prime Minister Andy Burnham could widen the opportunity set across U.K. equities on both the long and short sides of their portfolios.
Burnham took office this week, promising to lead a "cost-of-living government" focused on tackling rising living expenses. In his inaugural speech on Monday, he pledged a "new economic model" for Britain, including a 10-year plan to reindustrialize the country, with housing costs and utilities affordability emerging as early key pillars of his agenda.
Hedge funds say a domestic policy shake-up could fuel a raft of long and short ideas across U.K. sectors. That includes conviction bets against squeezed sectors and companies, and relative value trades that involve buying companies expected to benefit from Burnham's policies while shorting weaker businesses in the same industry.
"Where we are today is that there are lots of winners and losers, which is good because we want that dispersion," said Alyx Wood, chief investment officer of Kernow Asset Management. "There's an explosive cocktail of really interesting things going on right now. It's pretty fast moving."
Utilities under pressure
Short-selling — a core component of many hedge fund strategies, in which investors bet against a stock or other security intending to profit from its drop in value — has returned with a vengeance to the U.K. market this year.
The number of U.K. companies with aggregate disclosed short positions of at least 5% of their shares surged to 27 in the first half of 2026, according to an analysis by law firm White & Case.
That's a sharp rise from just five in the same period last year.
"The U.K.'s leadership change is creating a degree of continued uncertainty and volatility about policy across key sectors including energy, utilities, transport and housebuilding," said Patrick Sarch, White & Case's head of U.K. public M&A.
"As a new policy platform coalesces following new governmental appointments, policies will be proposed, markets will react, and there will be a moderation and prioritization process to determine what is feasible and in what timeframe. We expect to see a relatively protracted period of increased uncertainty for price discovery, creating additional opportunities for short-selling."
Burnham on Tuesday announced plans to remove sales tax from household electricity to provide "breathing space" for customers facing cost-of-living pressures, putting energy costs and utility affordability into sharper political focus, investors say.
Wood said Kernow is bearish on U.K. utilities, highlighting high leverage at individual companies, regulatory, operational and licensing pressures, and the vast investment required in Britain's water and power infrastructure.
"Normally utilities, in dangerous times, are your safe bets. Utilities are probably where we are most negative," Wood told CNBC, citing substandard U.K. water infrastructure, unmet consumer expectations, and regulatory uncertainty that has intensified political scrutiny.
Housing policy creates winners and losers
Burnham also wants to build more public housing and pledged Monday to end "rough sleeping" — or unhoused people living on the street — in the U.K. Investors say a policy overhaul aimed at tackling Britain's housing affordability crisis could create winners and losers in the homebuilding sector.
Homebuilder Vistry Group and construction materials company Ibstock were among the most heavily shorted U.K. companies in the first half, White & Case research shows, with aggregate short positions of almost 16% and 13%, respectively.
Wood said Kernow is short Vistry, noting its debt accumulation, and long Berkeley Group, which he described as a winner because of its stronger balance sheet and better management of planning applications. Others, such as Galliford Try, could benefit from a pick-up in affordable housing construction, he added.
"Most U.K. housebuilders trade at absurd discounts to economic reality. Quite often, near-term profits comfortably exceed the market capitalization," Wood said in a recent note.
Investors have followed Burnham's path to 10 Downing Street with some consternation, amid fears of a leftward lurch by Labour and a more fiscally loose approach to public spending. But his surprise pick for finance minister, John Healey, has gone some way to calming markets, with the former defense secretary broadly regarded as a "safe pair of hands."
White & Case's Sarch said the evolving policy backdrop could sustain relative value opportunities across sectors.
"We expect investors to look beyond company-specific short positions and for there to be considerable portfolio-based long-short strategies, taking both long and short positions across sectors according to which they believe stand to benefit from, and be challenged by, the new policy agenda," he added.
Edgar Allen, founder and chief investment officer of High Ground Investment Management, said housebuilders — along with certain other sectors, such as banks — could face further taxes, although he added that this prospect was already reflected in lower valuations across those sectors.
Allen said Burnham — who replaces Labour Party leader Keir Starmer, who resigned last month — inherits record government spending, high debts, an "unsustainable" deficit and gilt yields "far above anything Liz Truss managed."
"It's easy to see why investor, consumer and business confidence are all at multi-year lows," Allen told CNBC via email.
Still, Allen pointed to signs of improvement, including economic growth and rising productivity, which underpin what he called "real value" in the U.K.
"We expect to see further takeover activity as foreign companies pay record premia for U.K. stocks while still getting bargains," he added.`,
    bodyJa: `ヘッジファンドの空売り派は今年、英国上場株への賭けを強化しており、公開ポジションは２０２６年上半期に５倍に急増している。
現在、投資家は、アンディ・バーナム新首相の下での政策の電撃により、英国株全体のポートフォリオのロングサイドとショートサイドの両方でチャンスが広がる可能性があると考えている。
バーナム氏は今週就任し、生活費の高騰への取り組みに重点を置いた「生活費政府」を率いることを約束した。同氏は月曜日の就任演説で、英国の再産業化に向けた10か年計画を含む英国の「新たな経済モデル」を約束し、住居費と光熱費の手頃な価格が初期の議題の主要な柱として浮上した。
ヘッジファンドらは、国内政策の再編が英国のセクター全体にわたって長短の数多くのアイデアを刺激する可能性があると述べている。これには、圧迫されたセクターや企業に対する確信を持った賭けや、同じ業界の弱い企業を空売りしながら、バーナムの政策から恩恵を受けると予想される企業を買うことを伴う相対価値取引が含まれる。
カーナウ・アセット・マネジメントの最高投資責任者、アリックス・ウッド氏は「われわれが今いるのは、勝者と敗者がたくさんいるということだ。われわれはその分散を望んでいるから、これは良いことだ」と語った。 「現在、非常に興味深いことが爆発的に起こっています。非常に速いスピードで進んでいます。」
プレッシャーにさらされている公益事業
多くのヘッジファンド戦略の中核を成す空売り（投資家が株やその他の証券の価値下落から利益を得るために賭ける）が、今年英国市場に猛威を振るって戻ってきた。
法律事務所ホワイト＆ケースの分析によると、自社株の少なくとも5％の空売りポジションを公表した英国企業の数は、2026年上半期に27社に急増した。
前年同期のわずか5件から大幅に増加した。
ホワイト・アンド・ケースの英国公開M&A責任者パトリック・サーチ氏は、「英国の指導部交代により、エネルギー、公益事業、運輸、住宅建設などの主要セクターにわたる政策について、ある程度の不確実性と不安定性が続いている」と述べた。
「新たな政府の任命を受けて新たな政策基盤が統合されるにつれ、政策が提案され、市場が反応し、何が実現可能でどのような期間で実現可能かを判断するための調整と優先順位付けのプロセスが行われることになる。価格発見の不確実性が高まり、空売りのさらなる機会が生まれる期間が比較的長期化すると予想される。」
バーナムは火曜日、生活費のプレッシャーに直面している顧客に「息抜きのスペース」を提供するため、家庭用電力から消費税を撤廃する計画を発表し、エネルギーコストと光熱費の手頃な価格をより政治的な焦点にする、と投資家らは言う。
ウッド氏は、カーナウ氏が英国の公益事業に対して弱気であり、個別企業の高いレバレッジ、規制、運営、ライセンスの圧力、英国の水道・電力インフラに必要な巨額投資を強調した。
ウッド氏はCNBCに対し、英国の水道インフラの水準以下、消費者の期待が満たされていないこと、政治的監視が強まった規制の不確実性を挙げ、「通常、危険な時には公益事業が安全策だ。公益事業はおそらく我々が最も消極的なところだ」と語った。
住宅政策は勝者と敗者を生み出す
バーナム首相はまた、より多くの公営住宅の建設を望んでおり、月曜日には英国における「粗眠」、つまり住宅のない路上生活者をなくすことを約束した。投資家らは、英国の住宅価格危機への対処を目的とした政策の見直しが住宅建設分野で勝者と敗者を生み出す可能性があると述べている。
ホワイト＆ケースの調査によると、住宅建設会社ヴィストリー・グループと建設資材会社イブストックは、上半期に最も多額の空売りを抱えた英国企業の一つで、合計空売りポジションはそれぞれ約16％と13％となっている。
ウッド氏は、カーナウは負債の累積を指摘してヴィストリーをショートし、より強固なバランスシートと計画申請の管理が優れているため勝者だと述べたバークレー・グループをロングだと述べた。ガリフォード・トライなど他の企業も、手頃な価格の住宅建設の増加から恩恵を受ける可能性があると同氏は付け加えた。
ウッド氏は最近のメモで、「英国の住宅建設業者の多くは、経済現実に比べて法外な割引価格で取引している。短期的な利益が時価総額を優に上回ることが非常に多い」と述べた。
投資家は、労働党の左傾化や公共支出に対する財政の緩和姿勢への懸念のなか、多少の驚きを持ちながらもバーナム氏のダウニング街10番地への道をたどってきた。しかし、財務大臣にジョン・ヒーリー氏を予想外に指名したことは、元国防長官が「安全なコンビ」と広くみなされており、市場の沈静化に一定の効果をもたらした。
ホワイト・アンド・ケースのサーチ氏は、進化する政策背景により、セクター全体で相対的な価値の機会が維持される可能性があると述べた。
同氏は「投資家は企業固有のショートポジションを超えて、ポートフォリオに基づいたロング・ショート戦略がかなり存在することを期待しており、新たな政策課題から利益を得られる、あるいは課題となると思われるセクターに応じてロングポジションとショートポジションの両方を取ることになるだろう」と付け加えた。
ハイ・グラウンド・インベストメント・マネジメントの創設者兼最高投資責任者であるエドガー・アレン氏は、住宅建設業者は銀行など他の特定セクターとともにさらなる課税に直面する可能性があると述べたが、この見通しはすでにこれらのセクター全体のバリュエーションの低下に反映されていると付け加えた。
アレン氏は、先月辞任したキア・スターマー労働党党首の後任であるバーナム氏は、記録的な政府支出、多額の債務、「持続不可能な」赤字、そして金利回りを「リズ・トラス氏が管理したものをはるかに上回る」ものを受け継いでいると述べた。
「投資家、消費者、企業の信頼感がここ数年で最低水準にある理由は簡単に理解できる」とアレン氏は電子メールでCNBCに語った。
それでもアレン氏は、英国の「本当の価値」を支える経済成長や生産性の向上など、改善の兆しを指摘した。
同氏はさらに「外国企業が英国株に史上最高額を払いながらもバーゲン品を手に入れているため、さらなる買収活動が見込まれる」と付け加えた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/23/andy-burnham-labour-hedge-funds-short-selling-uk.html",
    publishedAt: "2026-07-23T05:06:41+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 7,
  },
  {
    id: "inside-india-newsletter-skyroot-rocket-p-bcd5918c",
    title: "Inside India newsletter: Skyroot rocket puts India alongside U.S., China in private orbital launch",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "こんにちは、シンガポールからメッセージを書いているプリヤンカ・サルベです。「インサイド・インディア」の最新版へようこそ。世界で最も急速に成長している大経済国のストーリーや展開をワンストップでご覧いただけます。",
    bodyOriginal: `Hello, this is Priyanka Salve, writing to you from Singapore.
Welcome to the latest edition of "Inside India" — your one-stop destination for stories and developments from the world's fastest-growing large economy.
On Saturday, Indian space-tech startup Skyroot successfully test-launched a low-orbit rocket carrying a payload of 350 kilograms, marking its entry into the global satellite launch market dominated by American and Chinese companies. I caught up with the co-founder of Skyroot to unpack what's next for the country's first space tech unicorn.
Any thoughts on today's newsletter? Share them with the team.
The big story
The demand for satellite launches is rising globally, as there are just a handful of rocket companies with the capability to make space deliveries. Naga Bharath Daka, co-founder of Indian space tech startup Skyroot that recently joined the elite space club, is determined to capitalize on the opportunity.
Skyroot will start its commercial operations in 2027 and plans to launch "one flight every month," he told CNBC, adding that after one more test flight later this year, the launches will be commercialized.
"We will be the most cost-competitive launch vehicle in this space [small payload], even before the economies of scale come into play," Daka said.
Cost competitiveness has been a hallmark of India's space tech. In the past, state-agency Indian Space Research Organization has executed Mars and Moon missions at a fraction of the cost spent by countries in the West. Both founders of Sykroot, Daka and Pawan Kumar Chandana, are former employees of ISRO.
Referring to Elon Musk's SpaceX, Daka said the company follows a "fail smarter and grow faster" strategy, which leads to rapid technological progress but it "burns a lot of cash." "We had to be ultra cautious with money," and the focus was on getting "the first time right."
Entering the global space
On Saturday at 11:30 a.m. Indian Standard Time, Skyroot successfully launched a test rocket carrying a 350-kilogram payload into low orbit, making it the first Indian private company with orbital space launch capability, and joining the league of China and the U.S.
Skyroot will compete in the sub-1,000 kg market with U.S. based startups such as Rocket Lab, Firefly Aerospace, Astra Space, and Chinese private firms i-Space, Galactic Energy, CAS Space, as per data shared by market intelligence firm Analysys Mason.
Small launchers solve critical operational, strategic, and financial bottlenecks that large "bus lines" to space — think bigger payload carriers like SpaceX — cannot handle.
"A small rocket acts like an orbit-on-demand taxi," explains Ujjwal Chaudhry, a partner at Analysys Mason.
They deliver a single customer's payload directly to its precise location in space, unlike with big launchers that drop payloads in approximate positions from where satellite operators maneuver them into the exact position using internal fuel and time, he said.
These rockets offer a dedicated launch window, so small satellites do not have to wait for "ridesharing" with larger satellite launches.
Though the market size was just $5 billion in 2025, according to Analysys Mason, fewer companies operating in this space are leading to launch schedules being booked for a year or two ahead. In May, California-based Rocket Labs said its order backlog more than doubled from a year ago to $2.2 billion with launches booked through to 2029.
The company has a market cap of over $43 billion, as compared to Skyroot's $1.1 billion valuation during its $60 million fundraise in May.
Since its founding in 2018, the Indian space tech startup has raised just $150 million, and Daka told CNBC the company is "well-funded" to carry out commercial launches next year. The company will raise funds when it intensifies efforts to develop a reusable rocket, he said, adding that it is not an immediate plan.
While firms in the U.S. have a robust private market funding stream for space tech startups, Chinese companies are backed by the government, experts pointed out. Meanwhile, Indian companies in this sector struggle to raise funds.
"The patient capital pool for space tech in India is still shallow relative to the opportunity," said Natasha Malpani Oswal, founder and general partner, at venture capital firm Boundless Ventures.
Sovereign wealth funds and institutional investors such as BlackRock and GIC backing Skyroot is a signal that capital is finding its way in at scale at the later stages, she said, adding that it "is recent, and it is not yet a pattern."
Investors will likely be more open to putting their money in the space sector, if Skyroot's low-cost structure helps it deliver high profits, even as its global peers burn cash.
Need to know
India's largest asset management firm makes a muted market debut after a $1 billion IPO
Shares of India's largest asset manager, SBI Funds Management, listed at a premium of 7% to their IPO price on Tuesday, dashing hopes of a strong debut. Investors were keeping a close watch on this listing and a strong debut would have indicated appetite for new large-scale public issues such as Jio Platforms and the National Stock Exchange.
Foreign investors sweeten on Indian government bonds as equities see a sell-off
Foreign investors appear to have soured on Indian stocks, but they are turning increasingly positive on the country's bonds, ahead of a possible inclusion in the Bloomberg Global Aggregate Bond Index. India could get a weightage of about 0.7% in the index, and this is estimated to lead to flows of $25 to $27 billion.
India gets its second AI unicorn in a month
Vibe-coding startup Emergent on Wednesday became the second Indian artificial intelligence company, within a month, to be valued at more than a billion dollars, signaling that the South Asian country was finally entering the AI race.
Coming up
July 24: HSBC composite flash PMI for July.
July 28: Industrial output for June.`,
    bodyJa: `こんにちは、シンガポールからメッセージを書いているプリヤンカ・サルベです。
「インサイド・インディア」の最新版へようこそ。世界で最も急速に成長している大経済国のストーリーや展開をワンストップでご覧いただけます。
土曜日、インドの宇宙技術新興企業スカイルートはペイロード350キログラムを搭載した低軌道ロケットの打ち上げ試験に成功し、米国と中国の企業が独占する世界の衛星打ち上げ市場への参入を果たした。私は Skyroot の共同創設者に話を聞き、この国初の宇宙技術ユニコーンの次に何が起こるのかを明らかにしました。
今日のニュースレターについて何かご意見はありますか?それらをチームと共有します。
大きな話
宇宙への配達を行う能力を持つロケット会社はほんの一握りであるため、衛星打ち上げの需要は世界的に高まっています。最近エリート宇宙クラブに加わったインドの宇宙技術スタートアップ、スカイルートの共同創設者であるナガ・バラス・ダカ氏は、この機会を活用しようと決意している。
スカイルートは2027年に商業運航を開始し、「毎月1便」の打ち上げを計画していると同氏はCNBCに語り、今年後半にもう1回試験飛行を行った後、打ち上げは商業化されると付け加えた。
ダカ氏は「スケールメリットが発揮される前であっても、われわれはこの分野（ペイロードが小さい）において最もコスト競争力のある打ち上げロケットになるだろう」と述べた。
コスト競争力はインドの宇宙技術の特徴である。過去には、国家機関であるインド宇宙研究機関が、西側諸国が費やした費用の数分の一で火星と月のミッションを実行してきた。 Sykroot の創設者、Daka 氏と Pawan Kumar Chandana 氏は、ともに ISRO の元従業員です。
ダカ氏は、イーロン・マスク氏のスペースXに言及し、同社は「より賢く失敗し、より速く成長する」戦略に従っており、それが技術の急速な進歩につながるが、「多額の現金を消費する」と述べた。 「お金に関しては細心の注意を払う必要があり」、「初めてのことをうまくやる」ことに重点が置かれた。
グローバル空間への参入
インド標準時間の土曜午前11時30分、スカイルートは350キログラムのペイロードを搭載した試験ロケットの低軌道への打ち上げに成功し、軌道上宇宙打ち上げ能力を持つ初のインドの民間企業となり、中国と米国のリーグに加わった。
市場情報会社アナリシス・メイソンが共有したデータによると、スカイルートは、ロケット・ラボ、ファイアフライ・エアロスペース、アストラ・スペースなどの米国拠点の新興企業や、中国の民間企業であるi-Space、ギャラクティック・エナジー、CASスペースなどと1,000kg未満の市場で競合することになる。
小型打ち上げ機は、宇宙へ向かう大規模な「バスライン」（SpaceXのような大型ペイロードキャリアだと考えてください）では対処できない、運営上、戦略上、財務上の重要なボトルネックを解決します。
「小型ロケットは軌道上のオンデマンドタクシーのように機能します」とアナリシス・メイソン社のパートナー、ウジワル・チョードリー氏は説明する。
同氏によると、衛星オペレーターが内部の燃料と時間を使ってペイロードを正確な位置に操作し、そこからおよその位置にペイロードを投下する大型打ち上げ機とは異なり、単一の顧客のペイロードを宇宙の正確な位置に直接届けるという。
これらのロケットには専用の打ち上げウィンドウが用意されているため、小型衛星は大型衛星の打ち上げとの「相乗り」を待つ必要がありません。
アナリシス・メイソンによると、2025年の市場規模はわずか50億ドルだったが、この分野で事業を展開する企業が減少しているため、発売スケジュールは1～2年先まで埋まっているという。カリフォルニアに拠点を置くロケットラボは5月、受注残高が1年前の2倍以上の22億ドルに増加し、2029年までの打ち上げが予約されていると発表した。
5月の6000万ドルの資金調達時のスカイルートの評価額は11億ドルだったのに対し、同社の時価総額は430億ドルを超えている。
インドの宇宙技術スタートアップ企業は2018年の設立以来、わずか1億5000万ドルしか調達していないが、ダカ氏は同社が来年商業打ち上げを行うための「資金が豊富」であるとCNBCに語った。同氏は、同社は再利用可能なロケットの開発に向けた取り組みを強化する際に資金を調達すると述べ、それが当面の計画ではないと付け加えた。
米国の企業には宇宙技術スタートアップに対する民間市場からの強力な資金供給源がある一方、中国企業は政府の支援を受けていると専門家は指摘する。一方、この分野のインド企業は資金調達に苦戦している。
ベンチャーキャピタル会社バウンドレス・ベンチャーズの創設者兼ゼネラル・パートナーのナターシャ・マルパニ・オズワル氏は、「インドの宇宙技術に対する患者の資金プールは、機会に比べてまだ浅い」と述べた。
同氏は、政府系ファンドやブラックロックやGICなどの機関投資家がスカイルートを支援していることは、資本が後の段階で大規模に流入しつつあることを示していると述べ、「それは最近のことであり、まだパターン化したものではない」と付け加えた。
スカイルートの低コスト構造が世界的な同業他社が現金を浪費する中でも高い利益を実現できるのであれば、投資家は宇宙分野への資金投入にもっと前向きになるだろう。
知っておく必要がある
インド最大の資産管理会社、10億ドルのIPOの後、静かな市場デビューを果たした
インド最大の資産運用会社SBIファンズ・マネジメントの株式は火曜日、IPO価格に7％のプレミアムを付けて上場され、好調なデビューへの期待は打ち砕かれた。投資家はこの上場を注視しており、好調なデビューはJioプラットフォームやナショナル証券取引所などの新たな大規模上場銘柄への意欲を示していただろう。
株式相場が急落する中、外国人投資家はインド国債に甘くなっている
外国人投資家はインド株への好感度が下がっているようだが、ブルームバーグ世界総合債券指数への採用の可能性を前に、同国の債券にはますますポジティブな見方を示している。インドは同指数で約0.7％の比重を占める可能性があり、これにより250億～270億ドルの資金流入が生じると推定される。
インド、この 1 か月で 2 番目の AI ユニコーンを獲得
バイブコーディングの新興企業エマージェントは水曜日、インドの人工知能企業としては1カ月以内に2社目となり、評価額が10億ドルを超え、南アジアの国がついにAI競争に参入することを示した。
もうすぐ
7月24日：7月のHSBCコンポジットフラッシュPMI。
7月28日: 6月の鉱工業生産。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/23/india-skyroot-rocket-us-china-spacex.html",
    publishedAt: "2026-07-23T02:37:12+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 7,
  },
  {
    id: "china-s-moonshot-ai-stole-from-anthropic-8ba0f358",
    title: "China's Moonshot AI stole from Anthropic, Trump tech adviser says",
    titleJa: "中国のムーンショットAIはAnthropicから盗んだとトランプ技術顧問が語る",
    summaryJa: "中国のムーンショットAIはAnthropicから盗んだとトランプ技術顧問が語る- 公開されました",
    bodyOriginal: `China's Moonshot AI stole from Anthropic, Trump tech adviser says
- Published
A White House adviser has accused China's Moonshot AI of a "large scale" effort to steal the capabilities of top US artificial intelligence (AI) models.
US President Donald Trump's Science and Technology adviser Michael Kratsios said Moonshot AI carried out the campaign through what is known as distillation - when a weaker AI model extracts answers from a stronger one.
Moonshot also gained access to restricted cutting-edge Nvidia servers to train its models, Kratsios said in a social post, external on Wednesday.
The BBC has contacted Moonshot, the Chinese embassy in Washington, Anthropic, the White House, and Nvidia for comment.
Kratsios said on X that the US government has information that Moonshot AI "distilled" capabilities from Anthropic's Fable AI for the development of its K3 model.
Kimi K3 gained attention around the world after it was unveiled last week, with many believing it to have narrowed the gap between Western and Chinese AI models. Moonshot said its K3 model is able to rival top US technology.
Moonshot is likely to have also used servers powered by Nvidia's GB300 Grace Blackwell computing platform, Kratsios said.
Washington restricted the export of Nvidia's most advanced chips in 2022 over concerns that they could be used by the Chinese military.
Since then, government's around the world have cracked down on the smuggling of the chips.
Kratsios' allegations come just a day after Treasury Secretary Scott Bessent said on Tuesday the US would examine whether Chinese AI models have stolen the capabilities from American rivals.
On Wednesday, Bessent also said that sanctions "will be on the table" when Chinese companies "cross the line" into intellectual property (IP) theft by conducting "industrial-scale distillation attacks".
"We support open-source AI and the innovation it unlocks. But open source is not open season on American IP," Bessent said on social media.
The Chinese government has not yet issued a public statement in response to the latest allegations but has previously said that its country's development of AI was "the result of its own dedication and effort as well as international cooperation".
The increased scrutiny by the US of Chinese AI companies also comes as Trump is expected to meet his Chinese counterpart Xi Jinping in September.
Moonshot AI will release Kimi K3 as an open-source model on 27 July, making it the first of its scale that can be freely downloaded and customised by developers and members of the public.
In June, Anthropic accused Chinese e-commerce and tech giant Alibaba of "illicitly" extracting the capabilities of its Claude AI models using distillation attacks.
Anthropic urged Congress to penalise the companies behind the alleged attacks and heighten measures to prevent US technology from being stolen.
The White House said in April that it would work more closely with US AI companies to combat "industrial-scale campaigns" by foreign rivals to steal technology.
Kratsios said in a memo at the time that the campaigns were aimed to "systematically undermine American research and development and access proprietary information".
- Published15 hours ago
- Published5 days ago`,
    bodyJa: `中国のムーンショットAIはAnthropicから盗んだとトランプ技術顧問が語る
- 公開されました
ホワイトハウスの顧問は、中国のムーンショットAIが米国のトップ人工知能（AI）モデルの機能を盗む「大規模な」取り組みを行っていると非難した。
ドナルド・トランプ米大統領の科学技術顧問マイケル・クラツィオス氏は、ムーンショットAIは、弱いAIモデルがより強いAIモデルから答えを抽出する、いわゆる蒸留によってキャンペーンを実行したと述べた。
クラツィオス氏は水曜日、外部へのソーシャル投稿で、ムーンショットはモデルをトレーニングするために制限付きの最先端のNvidiaサーバーにもアクセスできるようになったと述べた。
BBCはムーンショット、ワシントンの中国大使館、アンスロピック、ホワイトハウス、エヌビディアにコメントを求めた。
Kratsios氏はXで、Moonshot AIがK3モデルの開発のためにAnthropicのFable AIから機能を「抽出」したという情報を米国政府が持っていると述べた。
キミ K3 は先週発表されてから世界中で注目を集め、多くの人がこれによって欧米と中国の AI モデルの差が縮まったと信じています。ムーンショットは、同社のK3モデルは米国のトップテクノロジーに匹敵できると述べた。
Moonshot は Nvidia の GB300 Grace Blackwell コンピューティング プラットフォームを搭載したサーバーも使用していた可能性が高いとクラツィオス氏は述べています。
米国政府は、中国軍に使用される可能性があるとの懸念から、2022年にエヌビディアの最先端チップの輸出を制限した。
それ以来、世界中の政府がチップの密輸を取り締まるようになった。
クラツィオス氏の主張は、スコット・ベッセント財務長官が火曜日、米国は中国のAIモデルが米国のライバル企業から機能を盗んでいるかどうかを調査すると述べた翌日に行われた。
ベッセント氏は水曜日、中国企業が「産業規模の蒸留攻撃」を行って知的財産（IP）窃盗に「一線を越えた」場合には、制裁が「検討の対象となる」とも述べた。
「私たちはオープンソースAIとそれが解き放つイノベーションを支持します。しかし、アメリカの知的財産においてオープンソースはオープンシーズンではありません」とベッセント氏はソーシャルメディアで述べた。
中国政府は今回の疑惑に対してまだ公式声明を発表していないが、同国のAI開発は「自国の献身と努力、そして国際協力の結果」であると以前述べていた。
米国による中国のAI企業に対する監視の強化は、トランプ大統領が9月に中国の習近平国家主席と会談するとみられることも背景にある。
Moonshot AI は、Kimi K3 をオープンソース モデルとして 7 月 27 日にリリースします。これは、開発者や一般の人々が自由にダウンロードしてカスタマイズできる初めての規模のモデルになります。
アンスロピックは6月、中国の電子商取引とハイテク大手アリババが蒸留攻撃を使用して自社のクロードAIモデルの機能を「不正に」抽出したと非難した。
アンスロピック氏は議会に対し、攻撃疑惑の背後にいる企業を罰し、米国の技術の盗難を防ぐ措置を強化するよう求めた。
ホワイトハウスは4月、外国のライバル企業による技術盗用の「産業規模のキャンペーン」に対抗するため、米国のAI企業とより緊密に連携すると発表した。
クラツィオス氏は当時のメモの中で、このキャンペーンは「米国の研究開発を組織的に侵害し、機密情報にアクセスする」ことを目的としていると述べた。
- 15 時間前に公開
- 5 日前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c5ye2gyz0x4o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-23T01:52:10+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/8b7e/live/ab7d6920-8629-11f1-8e14-33590a929431.jpg",
    readTime: 4,
  },
  {
    id: "alphabet-and-tesla-test-wall-street-s-pa-ba7454f1",
    title: "Alphabet and Tesla test Wall Street's patience as AI spending overshadows growth",
    titleJa: "AI支出が成長に影を落とす中、アルファベットとテスラはウォール街の忍耐力を試す",
    summaryJa: "When Alphabet and Tesla kicked off tech earnings season on Wednesday, one theme became immediately clear: AI spending is under a microscope.Both companies reported negative free cash flow for the latest quarter and told investors to prepare for higher capital expenditures.両社とも予想を上回る売上高を報告したが、市場終了後の下落を防ぐには十分ではなく、テスラ株は4％下落し、アルファベット株は3％以上下落した。",
    bodyOriginal: `When Alphabet and Tesla kicked off tech earnings season on Wednesday, one theme became immediately clear: AI spending is under a microscope.
Both companies reported negative free cash flow for the latest quarter and told investors to prepare for higher capital expenditures. They both also reported better-than-expected revenue, but that wasn't enough to prevent an after-market selloff, with Tesla shares sliding 4% and Alphabet down more than 3%.
It's a potentially ominous sign for the tech industry, particularly the other megacaps, which are mostly set to report quarterly results next week. Meta and Microsoft are scheduled to report next Wednesday, followed a day later by Amazon and Apple.
Much of the AI boom to date has been fueled by historic levels of infrastructure spending among a small crop of companies, including hefty investments into model developers OpenAI and Anthropic. But the recent emergence of cheaper open-source models, largely out of China, along with signs that corporate America is getting more frugal when it comes to spending on AI services, has raised concerns about the future returns on investment.
Heading into Wednesday's reports, Alphabet's stock was already on pace for its third straight monthly decline after surging in April, while Tesla shares were down 11% in July and 17% for the year. The tech-heavy Nasdaq has dropped about 5% since reaching a record in early June.
While Alphabet and Tesla are both spending at unprecedented levels, their numbers vary dramatically.
Google's parent company forecast capex for this year of $195 billion to $205 billion and warned of higher numbers in 2027. Prior guidance was for spending of $180 billion to $190 billion. At the top end of the new range, Alphabet could be the biggest spender in tech this year, as Amazon's latest guidance was for more than $200 billion, though that number may increase when the company reports results next week.
Google and its hyperscaler peers are building out data centers packed with advanced chips so they can provide the computing power necessary to build and run the leading AI models and the services they power.
Mizuho analysts wrote in a note that Google's capex increase was "broadly anticipated," and that the overall story is positive, largely due to the surge in cloud revenue, which jumped 82% from a year earlier, blowing past estimates. Cloud margins expanded and usage of Google's Gemini model accelerated.
"As such we are surprised the stock is trading off after hours and would expect it to recover in trading tomorrow," wrote the analysts, who recommend buying the stock.
'As fast as we can spend'
Tesla reiterated expectations for more than $25 billion in capex this year, which would represent about 200% year-over-year growth. In the second quarter, capex soared 142% to $5.79 billion. The company boosted spending on self-driving technology, AI and robotics initiatives that CEO Elon Musk has been touting for years.
Tesla is now retooling its factories to make the two-seater driverless Cybercab, and to manufacture Optimus humanoid robots, which are still being developed, while also preparing to start construction of a sprawling AI chip-manufacturing plant in Texas.
"We should be spending on capex as fast as we can spend, as fast as we can without it being too wasteful," Musk said on the earnings call. He added, "It's ok to be a little less capital efficient if we get things done sooner."
For both companies, the aggressive growth plans are resulting in a major hit to their cash holdings.
Free cash flow at Tesla turned negative in the quarter, with a deficit of $1.1 billion after the company generated $146 million in free cash flow a year ago and $1.44 billion in the first quarter of 2026.
"This is a massive capex year but we are confident that all the things that we are investing in will yield incredible returns," Musk said. He compared Tesla's spending and building in "many different arenas simultaneously," to that of Henry Ford with the Model T.
"I think probably this is the fastest industrial scale-up since World War II in America," Musk said.
The numbers at Alphabet were even more stark, with free cash flow sinking to negative $5.9 billion after the company, which is lauded for its fat margins from online ads, generated almost $25 billion in free cash flow a year ago.
"We expect the free cash flow will remain under pressure, driven by our investments in technical infrastructure, which enables us to capitalize on the AI opportunity and continue to drive attractive returns," CFO Anat Ashkenazi said on the earnings call.
Most of the company's $44.9 billion in capex in the second quarter went to infrastructure to support the AI buildout, Ashkenazi said.
In addition to building its own data centers, Google executives said they also plan to rely on capacity from third-party cloud providers to meet feverish computing demand, building on a recent compute deal with Musk's SpaceX, which now owns xAI and its Memphis data centers.
The results on Wednesday did nothing to squash the enthusiasm of bullish analysts and investors.
Keith Fitz-Gerald, principal at investment consulting firm Fitz-Gerald Group, said that at Tesla, "profitability is being sacrificed for infrastructure" just as it was previously at companies including Amazon and Netflix.
"I expect it to pay off in spades over the next 12-24, even 36 months," Fitz-Gerald wrote in a note after the report.
And Rebecca Wettemann, CEO of tech research firm Valoir, said in an email that Google's core business remains strong and that its AI investments are generating returns.
"Google's momentum should calm some market fears about AI overspending," she wrote. "Strong performance across its businesses show search isn't dead, advertising still matters, and cloud investment is still a good bet."`,
    bodyJa: `When Alphabet and Tesla kicked off tech earnings season on Wednesday, one theme became immediately clear: AI spending is under a microscope.
Both companies reported negative free cash flow for the latest quarter and told investors to prepare for higher capital expenditures.両社とも予想を上回る売上高を報告したが、市場終了後の下落を防ぐには十分ではなく、テスラ株は4％下落し、アルファベット株は3％以上下落した。
これはハイテク業界、特に来週四半期決算の発表が予定されている他の超大型株にとって潜在的に不吉な兆しだ。 Meta and Microsoft are scheduled to report next Wednesday, followed a day later by Amazon and Apple.
これまでの AI ブームの多くは、モデル開発会社 OpenAI や Anthropic への巨額投資など、少数の企業による歴史的なレベルのインフラ支出によって促進されてきました。しかし、主に中国からの安価なオープンソース モデルの最近の出現と、米国企業が AI サービスへの支出に関してより倹約している兆候により、将来の投資収益率に対する懸念が高まっています。
水曜日の報道に向けて、アルファベットの株価は4月に急騰した後、すでに3か月連続の下落ペースに達しており、一方テスラ株は7月に11％、年間では17％下落した。 The tech-heavy Nasdaq has dropped about 5% since reaching a record in early June.
While Alphabet and Tesla are both spending at unprecedented levels, their numbers vary dramatically.
Googleの親会社は、今年の設備投資を1,950億～2,050億ドルと予測し、2027年にはさらに数字が上がると警告した。以前のガイダンスでは支出は1,800億～1,900億ドルだった。アマゾンの最新のガイダンスは2,000億ドル以上だったため、新たなレンジの上限に位置するアルファベットは、今年ハイテク分野で最大の支出者となる可能性があるが、同社が来週決算を発表する際にはその数字はさらに増える可能性がある。
Google とそのハイパースケーラーの同業者は、先進的な AI モデルとそれを支えるサービスの構築と実行に必要なコンピューティング能力を提供できるよう、高度なチップを満載したデータセンターを構築しています。
みずほのアナリストらはメモの中で、グーグルの設備投資増加は「広く予想されていた」ことであり、前年比82％増と過去の予想を上回るクラウド収益の急増が主な要因で、全体的な話は前向きだと述べた。 Cloud margins expanded and usage of Google's Gemini model accelerated.
「そのため、株価が時間外取引で下落していることに我々は驚いており、明日の取引で回復すると期待している」とアナリストらは株式の購入を推奨していると書いている。
「できるだけ早く」
Tesla reiterated expectations for more than $25 billion in capex this year, which would represent about 200% year-over-year growth. In the second quarter, capex soared 142% to $5.79 billion. The company boosted spending on self-driving technology, AI and robotics initiatives that CEO Elon Musk has been touting for years.
テスラは現在、2人乗りの無人運転サイバーキャブの製造や、開発中の人型ロボット「オプティマス」の製造を行うため工場の設備を改修しており、同時にテキサス州に広大なAIチップ製造工場の建設開始の準備も進めている。
"We should be spending on capex as fast as we can spend, as fast as we can without it being too wasteful," Musk said on the earnings call. He added, "It's ok to be a little less capital efficient if we get things done sooner."
For both companies, the aggressive growth plans are resulting in a major hit to their cash holdings.
テスラのフリーキャッシュフローは、1年前に1億4,600万ドル、2026年第1四半期には14億4,000万ドルのフリーキャッシュフローを生み出した後、同四半期に11億ドルの赤字となり、マイナスに転じた。
"This is a massive capex year but we are confident that all the things that we are investing in will yield incredible returns," Musk said. He compared Tesla's spending and building in "many different arenas simultaneously," to that of Henry Ford with the Model T.
"I think probably this is the fastest industrial scale-up since World War II in America," Musk said.
アルファベットの数字はさらに厳しく、オンライン広告からの高い利益率で称賛される同社が1年前に約250億ドルのフリーキャッシュフローを生み出した後、フリーキャッシュフローはマイナス59億ドルに落ち込んだ。
アナト・アシュケナージ最高財務責任者（CFO）は決算会見で、「技術インフラストラクチャーへの投資により、フリーキャッシュフローは引き続き圧迫されると予想している。これにより当社はAIの機会を活用し、引き続き魅力的な利益を生み出すことができる」と述べた。
Most of the company's $44.9 billion in capex in the second quarter went to infrastructure to support the AI buildout, Ashkenazi said.
Google幹部らは、自社のデータセンターの構築に加えて、現在xAIと同社のメンフィスデータセンターを所有しているマスク氏のスペースXとの最近のコンピューティング契約に基づいて、熱狂的なコンピューティング需要に応えるためにサードパーティのクラウドプロバイダーの容量にも依存する計画だと述べた。
The results on Wednesday did nothing to squash the enthusiasm of bullish analysts and investors.
投資コンサルティング会社フィッツジェラルド・グループのプリンシパル、キース・フィッツジェラルド氏は、アマゾンやネットフリックスなどの企業と同様、テスラでも「インフラのために収益性が犠牲にされている」と述べた。
"I expect it to pay off in spades over the next 12-24, even 36 months," Fitz-Gerald wrote in a note after the report.
また、テクノロジー調査会社バロワールのレベッカ・ウェッテマン最高経営責任者（CEO）は電子メールで、グーグルの中核事業は引き続き好調で、AIへの投資が利益を生み出していると述べた。
"Google's momentum should calm some market fears about AI overspending," she wrote. "Strong performance across its businesses show search isn't dead, advertising still matters, and cloud investment is still a good bet."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/22/alphabet-tesla-test-investor-patience-ai-spending-overshadows-growth.html",
    publishedAt: "2026-07-23T01:48:22+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "oil-prices-climb-after-tanker-struck-off-0349d536",
    title: "Oil prices climb after tanker struck off Saudi Arabia, Trump escalates Iran threats",
    titleJa: "サウジアラビア沖タンカー沈没で原油価格上昇、トランプ大統領がイラン脅しをエスカレート",
    summaryJa: "木曜日、サウジアラビア沖でタンカーが未知の飛翔体による衝突を受け、原油価格が上昇し、ドナルド・トランプ米大統領がホルムズ海峡を通過する船舶への攻撃に対抗してイランのインフラを爆撃すると脅し、世界の原油供給の混乱に対する懸念が高まった。英国海事貿易業務局はアジア時間木曜、ソーシャルメディアプラットフォームXに、アル・シュカイクの南西約70海里付近でタンカーが未知の飛翔体に衝突されたとの報告を受けたと投稿した。",
    bodyOriginal: `Oil prices rose on Thursday after a tanker was struck by an unknown projectile off Saudi Arabia and U.S. President Donald Trump threatened to bomb Iranian infrastructure in response to any attacks on ships transiting the Strait of Hormuz, escalating concerns over disruptions to global crude supplies.
The United Kingdom Maritime Trade Operations on Thursday Asia time posted on its social media platform X that it had received a report that a tanker was hit by an unknown projectile around 70 nautical miles southwest of Al Shuqaiq.
The strike sparked a fire onboard that the crew was fighting, although there were no reported casualties.
Brent crude futures for September delivery gained 2% to $95.99 per barrel. U.S. West Texas Intermediate crude futures advanced around 1.7% to $88.27 per barrel.
The attack came hours after Trump warned the U.S. would destroy an Iranian bridge or power plant each time Tehran attacks a ship in the Strait of Hormuz, signaling a further escalation in tensions following the collapse of the U.S.-Iran ceasefire.
"From this point forward, any time the Islamic Republic of Iran shoots at a ship in the Strait of Hormuz, whether it be by Missile, Rocket, Drone, or any other device or weapon, the United States will bomb and destroy ONE BRIDGE OR POWER PLANT," Trump said.
Iran responded by warning it would retaliate against U.S.-linked infrastructure and energy assets across the region if Washington carried out those strikes.
"If the Americans target a bridge or a power plant in Iran, Iran will, in turn, strike infrastructure and bridges in the region, including energy facilities where the United States has interests," an unnamed Iranian military source told state-run Tasnim News Agency.
Earlier on Wednesday, Secretary of State Marco Rubio said Iran was not being "serious" about reaching an agreement with Washington, while maintaining that the U.S. remained "committed to diplomacy" in the Middle East.
The recent rally in oil reflects renewed concerns over the Strait of Hormuz after the breakdown of the U.S.-Iran ceasefire, HSBC said in a note late Wednesday, warning that the outlook now hinges on whether diplomacy can restore predictable shipping flows.
"Since 7-8 July, the ceasefire has frayed as Iranian attacks on vessels transiting the strait of Hormuz prompted U.S. retaliatory strikes," said Kim Fustier, the bank's senior global oil and gas analyst.
"The core issue remains unresolved: whether passage is administered, and by whom. In hindsight, the more traffic was rising through the US-managed Omani lane, the less this outcome suited Iran," added Fustier.`,
    bodyJa: `木曜日、サウジアラビア沖でタンカーが未知の飛翔体による衝突を受け、原油価格が上昇し、ドナルド・トランプ米大統領がホルムズ海峡を通過する船舶への攻撃に対抗してイランのインフラを爆撃すると脅し、世界の原油供給の混乱に対する懸念が高まった。
英国海事貿易業務局はアジア時間木曜、ソーシャルメディアプラットフォームXに、アル・シュカイクの南西約70海里付近でタンカーが未知の飛翔体に衝突されたとの報告を受けたと投稿した。
この攻撃により船内で火災が発生し、乗組員らが応戦していたものの、死傷者の報告はなかった。
ブレント原油先物９月渡しは２％上昇し、１バレル＝９５．９９ドルとなった。米国ウェスト・テキサス・インターミディエイト原油先物は約１．７％上昇し、１バレル＝８８．２７ドルとなった。
この攻撃は、トランプ大統領が、イラン政府がホルムズ海峡で船舶を攻撃するたびに、米国がイランの橋や発電所を破壊すると警告した数時間後に行われ、米国とイランの停戦崩壊後の緊張のさらなる高まりを示唆した。
トランプ大統領は「今後、イラン・イスラム共和国がホルムズ海峡で船舶を銃撃するたび、それがミサイル、ロケット、ドローン、その他の装置や兵器によるものであれ、米国は橋か発電所の１つを爆撃して破壊する」と述べた。
イランはこれに対し、米国がこうした攻撃を実行した場合、地域全体の米国関連のインフラやエネルギー資産に対して報復すると警告した。
匿名のイラン軍関係者は国営タスニム通信に対し、「米国がイランの橋や発電所を標的にすれば、イランは今度は米国が権益を有するエネルギー施設を含む地域のインフラや橋を攻撃するだろう」と語った。
これに先立ち、マルコ・ルビオ国務長官は、イランは米国との合意に向けて「真剣」ではないと述べた一方、米国は引き続き中東地域での「外交に取り組んでいる」と主張した。
最近の石油価格の上昇は、米国とイランの停戦決裂後のホルムズ海峡に対する新たな懸念を反映しているとHSBCは水曜遅くのメモで述べ、見通しは現在、外交が予測可能な海運を回復できるかどうかにかかっていると警告した。
同銀行の上級グローバル石油・ガスアナリスト、キム・ファスティエ氏は「７月７─８日以来、ホルムズ海峡を通過する船舶に対するイランの攻撃が米国の報復攻撃を促したため、停戦はほころびが生じている」と述べた。
「核心的な問題は未解決のままである。通行が管理されるのか、誰によって管理されるのかということだ。今にして思えば、米国が管理するオマーンの車線を通る交通量が増えれば増えるほど、この結果はイランにとって好ましくないものだった」とファスティエ氏は付け加えた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/23/oil-prices-today-wti-brent-trump-iran-hormuz.html",
    publishedAt: "2026-07-23T01:34:22+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "why-we-re-sticking-with-alphabet-despite-8734723e",
    title: "Why we're sticking with Alphabet despite an imperfect quarter and more AI spending",
    titleJa: "不完全な四半期とさらなる AI 支出にもかかわらず、当社が Alphabet にこだわり続ける理由",
    summaryJa: "Alphabet shares fell Wednesday evening after the Google parent reported good, but not great second-quarter results. While artificial intelligence adoption is boosting top-line growth, it's also driving higher levels of capital spending. And that doesn't seem to be changing any time soon. Revenue in the second quarter increased 24% year over year to $119.8 billion, well ahead of the $116.9 billion expected, according to LSEG data. Earnings per share came in at $9.11. That's way above the LSEG-com",
    bodyOriginal: `Alphabet shares fell Wednesday evening after the Google parent reported good, but not great second-quarter results. While artificial intelligence adoption is boosting top-line growth, it's also driving higher levels of capital spending. And that doesn't seem to be changing any time soon. Revenue in the second quarter increased 24% year over year to $119.8 billion, well ahead of the $116.9 billion expected, according to LSEG data. Earnings per share came in at $9.11. That's way above the LSEG-compiled consensus estimate of $2.89. However, the result included a massive ($99 billion) contribution from equity investment gains, driven by its SpaceX and Anthropic stakes. Excluding that gain, Alphabet's operational earnings appear to be closer to $2.85 per share. That's why the Street is likely considering this a miss on the bottom line. However, operating income came in better than expected at $40.77 billion, with operating margins expanding 1.6 percentage points from a year ago. Shares of Alphabet are down over 3% in the after-hours session. That continues a downward trend that began in mid-May, after the stock closed at a record high of $402.62 on May 13. It had ascended to those heights after strong first-quarter results in late April offered proof that its AI investments were paying off. But that post-earnings advance in the spring has now evaporated. In the intervening months, the market grew more skeptical of spiraling AI spending from the hyperscalers — and Alphabet's recent bond and equity offerings contributed to that attitude shift. Plus, a handful of AI researchers leaving for rivals in June and delays to its new flagship model added to the questions surrounding Alphabet entering the second-quarter print. GOOGL YTD mountain Alphabet's year-to-date stock performance. Bottom line Alphabet delivered a good quarter on the AI demand side of the equation. However, the full report came with enough shortfalls that the stock's slide in extended trading isn't surprising. The market isn't in a forgiving mood. For starters, Alphabet's underlying operating earnings came up short. Perhaps even more frustrating for investors already concerned about hefty data center spending, the team upped its capital expenditure outlook for the year. It now expects to spend between $195 billion and $205 billion on capex in 2026, up from the $180 billion to $190 billion range offered in April (which itself was an increase from its early February guidance). While this latest increase is to accelerate the delivery of capacity needed to meet demand for the company's AI offerings, it's still hard to hear at a time in which quarterly free cash flow has turned negative. Moreover, Alphabet executives reaffirmed that capex would "increase significantly in 2027." Another smudge on the numbers: Google Search revenue came up short versus expectations. Sure, that still represents robust year-over-year growth of nearly 17%, but a miss is a miss. Now consider that it's a miss in your most consequential segment, and it's going to be hard to get Wall Street excited about the results more broadly. This is especially true considering an ongoing debate about what AI infusions into Google Search results mean for the rate of monetization. That won't be settled by one quarter's numbers either way. But, on a more positive note, these new AI enhancements are driving an uptick in Google Search usage, according to CEO Sundar Pichai. The two main ones are AI Overviews, which are the generated responses that appear at the top of traditional search results, and AI Mode, a feature that users can toggle via the search bar. "Since expanding AI Mode globally last October, we have surpassed 1 billion monthly active users," Pichai said. "And just like AI Overviews, AI Mode is driving an incremental increase in search queries overall, and we are now sending billions of clicks to websites every week through AI features in Search." He added later, "This quarter, we reduced the cost of AI Mode responses to its lowest level since launch, even as we have brought more advanced AI capabilities further." Lastly, we still have the overhang of the $85 billion fund-raising effort announced in June. As part of that equity raise, Alphabet said it would initiate a $40 billion at-the-market (ATM) offering program in the third quarter, "primarily intended to be used to meet tax obligations associated with employee equity grants." On Wednesday's call, CFO Anat Ashkenazi said Alphabet was "not planning to go back to the equity markets," with the exception of those ATM sales. While that could be received positively, the fact that the ATM is only starting this month means there's still a good deal of stock supply waiting to hit the market. That puts something of a cap on upside. Despite these imperfections, Alphabet's second-quarter results point to traction when it comes to the adoption of its AI offerings — and accumulating this evidence over time is what's needed to justify all the spending. The most direct indicator of this traction is the performance at Google Cloud, which delivered a sizable beat on both revenue and operating income. Other positive signs include strong engagement trends both within the Gemini app and via application programming interface (API) usage on the part of enterprise customers. API tools are how enterprise organizations connect their software stacks to the Gemini model to leverage its capabilities. YouTube advertising was another bright spot, with the platform seeing an uptick in engagement thanks to the World Cup. Why we own it Alphabet has gotten its mojo back since the spring of 2025. It has the respected Gemini family of models and leading custom AI chips, known as tensor processing units (TPUs), to aid its Google Cloud business. Layer in the still-dominate Google Search, YouTube and Waymo, and Alphabet is a worthy tech play in any portfolio. Competitors : Amazon , Microsoft , and Meta Platforms Weight in our portfolio: 3.03% Most recent buy : April 6, 2026 Initiated : Dec. 29, 2025 We also liked what we heard from Pichai on Alphabet's AI model strategy, coming against the backdrop of its flagship model delays and last week's emergence of a highly regarded open-weight Chinese model, Kimi K3. Also on Tuesday, Alphabet released a trio of more specialized models , including one targeted for cybersecurity tasks. Pichai affirmed that Alphabet wants to play at every level, with every intention to drive innovation at the frontier level, while also acknowledging the broad-based attraction of "flash" tier models. During his prepared remarks, Pichai said, "We are seeing tons of demand for our workhorse Gemini Flash series because it hits the sweet spot of performance and cost." Asked about playing in the crowded, lower-cost end of the market, Pichai was quick to note that Alphabet wants to be able to offer the best model at various price points. We think this is the right strategy. Alphabet's major advantage in AI is its vertically integrated approach, from the model to the silicon with its custom tensor processing units (TPUs). Fellow Club name Broadcom co-designs the TPUs with Alphabet. For that reason, it would be wrong to give up on leading the way in frontier model innovation. At the same time, however, the company's broad reach and wide array of consumer-oriented offerings means that it has a major opportunity to monetize less-advanced models, where much of the research-and-development spend is likely already accounted for with the development of more advanced frontier models. Putting together both the results and commentary on the call, we are inclined to view the weakness as a long-term buying opportunity and therefore reiterate our 1 rating and $400 price target. However, given the multiple blemishes, including the overhang of Alphabet's ATM stock sales, we see no reason to rush in Thursday. Instead, we advise waiting for the stock to settle before stepping in. Highlights The Gemini app now has 950 million monthly active users, with daily actives tripling versus the year-ago period. The Gemini model APIs are now processing roughly 22 billion tokens per minute, up from over 16 billion in the prior quarter. A token is the basic unit of data for AI computing. The World Cup was a tailwind for YouTube engagement, with over 1.7 billion unique viewers on the platform to watch World Cup-related content Google Cloud growth accelerated to 82% year over year growth. That is up from the 63% annual growth seen in the first quarter, which itself was an acceleration from 48% growth in the fourth quarter of 2025. Better yet, Google Cloud's backlog now stands at $514 billion, up from the $460 billion we saw last quarter. Nearly 90% of Fortune 100 companies are now using Gemini Enterprise and 90% are also Google Cloud Security users. (Jim Cramer's Charitable Trust is long GOOGL. See here for a full list of the stocks.) As a subscriber to the CNBC Investing Club with Jim Cramer, you will receive a trade alert before Jim makes a trade. Jim waits 45 minutes after sending a trade alert before buying or selling a stock in his charitable trust's portfolio. If Jim has talked about a stock on CNBC TV, he waits 72 hours after issuing the trade alert before executing the trade. THE ABOVE INVESTING CLUB INFORMATION IS SUBJECT TO OUR TERMS AND CONDITIONS AND PRIVACY POLICY , TOGETHER WITH OUR DISCLAIMER . NO FIDUCIARY OBLIGATION OR DUTY EXISTS, OR IS CREATED, BY VIRTUE OF YOUR RECEIPT OF ANY INFORMATION PROVIDED IN CONNECTION WITH THE INVESTING CLUB. NO SPECIFIC OUTCOME OR PROFIT IS GUARANTEED.`,
    bodyJa: `Alphabet shares fell Wednesday evening after the Google parent reported good, but not great second-quarter results. While artificial intelligence adoption is boosting top-line growth, it's also driving higher levels of capital spending. And that doesn't seem to be changing any time soon. Revenue in the second quarter increased 24% year over year to $119.8 billion, well ahead of the $116.9 billion expected, according to LSEG data. Earnings per share came in at $9.11. That's way above the LSEG-compiled consensus estimate of $2.89. However, the result included a massive ($99 billion) contribution from equity investment gains, driven by its SpaceX and Anthropic stakes. Excluding that gain, Alphabet's operational earnings appear to be closer to $2.85 per share. That's why the Street is likely considering this a miss on the bottom line. However, operating income came in better than expected at $40.77 billion, with operating margins expanding 1.6 percentage points from a year ago. Shares of Alphabet are down over 3% in the after-hours session. That continues a downward trend that began in mid-May, after the stock closed at a record high of $402.62 on May 13. It had ascended to those heights after strong first-quarter results in late April offered proof that its AI investments were paying off. But that post-earnings advance in the spring has now evaporated. In the intervening months, the market grew more skeptical of spiraling AI spending from the hyperscalers — and Alphabet's recent bond and equity offerings contributed to that attitude shift. Plus, a handful of AI researchers leaving for rivals in June and delays to its new flagship model added to the questions surrounding Alphabet entering the second-quarter print. GOOGL YTD mountain Alphabet's year-to-date stock performance. Bottom line Alphabet delivered a good quarter on the AI demand side of the equation. However, the full report came with enough shortfalls that the stock's slide in extended trading isn't surprising. The market isn't in a forgiving mood. For starters, Alphabet's underlying operating earnings came up short. Perhaps even more frustrating for investors already concerned about hefty data center spending, the team upped its capital expenditure outlook for the year. It now expects to spend between $195 billion and $205 billion on capex in 2026, up from the $180 billion to $190 billion range offered in April (which itself was an increase from its early February guidance). While this latest increase is to accelerate the delivery of capacity needed to meet demand for the company's AI offerings, it's still hard to hear at a time in which quarterly free cash flow has turned negative. Moreover, Alphabet executives reaffirmed that capex would "increase significantly in 2027." Another smudge on the numbers: Google Search revenue came up short versus expectations. Sure, that still represents robust year-over-year growth of nearly 17%, but a miss is a miss. Now consider that it's a miss in your most consequential segment, and it's going to be hard to get Wall Street excited about the results more broadly. This is especially true considering an ongoing debate about what AI infusions into Google Search results mean for the rate of monetization. That won't be settled by one quarter's numbers either way. But, on a more positive note, these new AI enhancements are driving an uptick in Google Search usage, according to CEO Sundar Pichai. The two main ones are AI Overviews, which are the generated responses that appear at the top of traditional search results, and AI Mode, a feature that users can toggle via the search bar. "Since expanding AI Mode globally last October, we have surpassed 1 billion monthly active users," Pichai said. "And just like AI Overviews, AI Mode is driving an incremental increase in search queries overall, and we are now sending billions of clicks to websites every week through AI features in Search." He added later, "This quarter, we reduced the cost of AI Mode responses to its lowest level since launch, even as we have brought more advanced AI capabilities further." Lastly, we still have the overhang of the $85 billion fund-raising effort announced in June. As part of that equity raise, Alphabet said it would initiate a $40 billion at-the-market (ATM) offering program in the third quarter, "primarily intended to be used to meet tax obligations associated with employee equity grants." On Wednesday's call, CFO Anat Ashkenazi said Alphabet was "not planning to go back to the equity markets," with the exception of those ATM sales. While that could be received positively, the fact that the ATM is only starting this month means there's still a good deal of stock supply waiting to hit the market. That puts something of a cap on upside. Despite these imperfections, Alphabet's second-quarter results point to traction when it comes to the adoption of its AI offerings — and accumulating this evidence over time is what's needed to justify all the spending. The most direct indicator of this traction is the performance at Google Cloud, which delivered a sizable beat on both revenue and operating income. Other positive signs include strong engagement trends both within the Gemini app and via application programming interface (API) usage on the part of enterprise customers. API tools are how enterprise organizations connect their software stacks to the Gemini model to leverage its capabilities. YouTube advertising was another bright spot, with the platform seeing an uptick in engagement thanks to the World Cup. Why we own it Alphabet has gotten its mojo back since the spring of 2025. It has the respected Gemini family of models and leading custom AI chips, known as tensor processing units (TPUs), to aid its Google Cloud business. Layer in the still-dominate Google Search, YouTube and Waymo, and Alphabet is a worthy tech play in any portfolio. Competitors : Amazon , Microsoft , and Meta Platforms Weight in our portfolio: 3.03% Most recent buy : April 6, 2026 Initiated : Dec. 29, 2025 We also liked what we heard from Pichai on Alphabet's AI model strategy, coming against the backdrop of its flagship model delays and last week's emergence of a highly regarded open-weight Chinese model, Kimi K3. Also on Tuesday, Alphabet released a trio of more specialized models , including one targeted for cybersecurity tasks. Pichai affirmed that Alphabet wants to play at every level, with every intention to drive innovation at the frontier level, while also acknowledging the broad-based attraction of "flash" tier models. During his prepared remarks, Pichai said, "We are seeing tons of demand for our workhorse Gemini Flash series because it hits the sweet spot of performance and cost." Asked about playing in the crowded, lower-cost end of the market, Pichai was quick to note that Alphabet wants to be able to offer the best model at various price points. We think this is the right strategy. Alphabet's major advantage in AI is its vertically integrated approach, from the model to the silicon with its custom tensor processing units (TPUs). Fellow Club name Broadcom co-designs the TPUs with Alphabet. For that reason, it would be wrong to give up on leading the way in frontier model innovation. At the same time, however, the company's broad reach and wide array of consumer-oriented offerings means that it has a major opportunity to monetize less-advanced models, where much of the research-and-development spend is likely already accounted for with the development of more advanced frontier models. Putting together both the results and commentary on the call, we are inclined to view the weakness as a long-term buying opportunity and therefore reiterate our 1 rating and $400 price target. However, given the multiple blemishes, including the overhang of Alphabet's ATM stock sales, we see no reason to rush in Thursday. Instead, we advise waiting for the stock to settle before stepping in. Highlights The Gemini app now has 950 million monthly active users, with daily actives tripling versus the year-ago period. The Gemini model APIs are now processing roughly 22 billion tokens per minute, up from over 16 billion in the prior quarter. A token is the basic unit of data for AI computing. The World Cup was a tailwind for YouTube engagement, with over 1.7 billion unique viewers on the platform to watch World Cup-related content Google Cloud growth accelerated to 82% year over year growth. That is up from the 63% annual growth seen in the first quarter, which itself was an acceleration from 48% growth in the fourth quarter of 2025. Better yet, Google Cloud's backlog now stands at $514 billion, up from the $460 billion we saw last quarter. Nearly 90% of Fortune 100 companies are now using Gemini Enterprise and 90% are also Google Cloud Security users. (Jim Cramer's Charitable Trust is long GOOGL. See here for a full list of the stocks.) As a subscriber to the CNBC Investing Club with Jim Cramer, you will receive a trade alert before Jim makes a trade. Jim waits 45 minutes after sending a trade alert before buying or selling a stock in his charitable trust's portfolio. If Jim has talked about a stock on CNBC TV, he waits 72 hours after issuing the trade alert before executing the trade. THE ABOVE INVESTING CLUB INFORMATION IS SUBJECT TO OUR TERMS AND CONDITIONS AND PRIVACY POLICY , TOGETHER WITH OUR DISCLAIMER . NO FIDUCIARY OBLIGATION OR DUTY EXISTS, OR IS CREATED, BY VIRTUE OF YOUR RECEIPT OF ANY INFORMATION PROVIDED IN CONNECTION WITH THE INVESTING CLUB. NO SPECIFIC OUTCOME OR PROFIT IS GUARANTEED.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/22/why-were-sticking-with-alphabet-despite-an-imperfect-quarter-and-more-ai-spending.html",
    publishedAt: "2026-07-23T00:57:01+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "the-bull-market-faces-higher-likelihood-0a4935fb",
    title: "The bull market faces higher likelihood of a Fed rate hike as Iran crisis intensifies",
    titleJa: "イラン危機激化で強気相場はFRB利上げの可能性高まる",
    summaryJa: "原油価格の上昇を受け、米国債利回りは2月に始まったイラン戦争以来の最高水準に近づいている",
    bodyOriginal: `Treasury yields are approaching the highest levels seen since the Iran war started in February as oil prices rise`,
    bodyJa: `原油価格の上昇を受け、米国債利回りは2月に始まったイラン戦争以来の最高水準に近づいている`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/the-bull-market-faces-higher-likelihood-of-a-fed-rate-hike-as-iran-crisis-intensifies-58f268e8?mod=mw_rss_topstories",
    publishedAt: "2026-07-23T00:27:00+00:00",
    category: "エネルギー",
    imageUrl: "https://images.mktw.net/im-84665103",
    readTime: 2,
  },
  {
    id: "ibm-lowers-full-year-forecast-after-earn-c343de8c",
    title: "IBM lowers full-year forecast after earnings warning",
    titleJa: "IBM、業績警告を受けて通期予想を下方修正",
    summaryJa: "IBMは先週業績に関する警告を発表したにもかかわらず、水曜日に2026年の予想を下方修正し、アナリストの予測よりも弱い利益を発表した。 IBMは、生産性の向上を通じて通期の税引き前利益率を約1％ポイント拡大することを目指すと述べた。LSEGコンセンサスに対する同社の業績は次のとおりです。",
    bodyOriginal: `IBM lowered its 2026 forecast and delivered weaker earnings than analysts had projected on Wednesday, even after the company issued an earnings warning last week. IBM said it aims to widen its full-year pre-tax margin by about 1 percentage point through higher productivity.
Here's how the company did relative to LSEG consensus:
- Earnings per share: $2.93 adjusted vs. $2.97 expected
- Revenue: $17.16 billion vs. $17.58 billion expected
IBM's revenue grew 1% year over year in the quarter, according to a statement. Net income of $2.17 billion, or $2.30 per share, decreased from $2.19 billion, or $2.36 per share, a year ago. Adjusted earnings exclude acquisition-related adjustments.
Management called for 4% to 5% revenue growth in constant currency for 2026. As recently as April, IBM had been looking for over 5% growth at constant currency. The company reiterated expectations for $1 billion in higher free cash flow for the year.
Analysts cut their estimates after IBM announced preliminary second-quarter results. In a letter to investors, CEO Arvind Krishna cited worse-than-planned performance in sales of Z mainframe computers and transaction processing software as organizations rushed to buy hardware ahead of expected price increases. The stock dropped 25%, marking its sharpest single-day decline on record.
The revenue and adjusted earnings per share figures IBM disclosed on Wednesday were in line with the figures released a week ago.
As of Wednesday's close, IBM shares were down 30% so far in 2026, while the S&P 500 index was up about 10%.
IBM said its high-margin software segment produced $7.76 billion in second-quarter revenue, up 5%. Consulting revenue, at $5.33 billion, was flat. Revenue from infrastructure, at $3.84 billion, declined 7%, with Z mainframe revenue falling 42%.
During the quarter, IBM said it signed a letter of intent to build a U.S. quantum chip foundry. It also introduced the Bob artificial intelligence coding tool that relies on a mixture of generative models, with adoption from over 80,000 employees.
"IBM is accelerating productivity by scaling software development leveraging AI, increasing the effectiveness of its sales and marketing organization, and optimizing its supply chain," the company said in Wednesday's statement. "These efforts help enhance margin and free cash flow, and strengthen the company's ability to capture significant growth opportunities."`,
    bodyJa: `IBMは先週業績に関する警告を発表したにもかかわらず、水曜日に2026年の予想を下方修正し、アナリストの予測よりも弱い利益を発表した。 IBMは、生産性の向上を通じて通期の税引き前利益率を約1％ポイント拡大することを目指すと述べた。
LSEGコンセンサスに対する同社の業績は次のとおりです。
- 1 株当たり利益: 調整後 2.93 ドル、予想 2.97 ドル
- 収益: 171.6億ドル対予想175.8億ドル
声明によると、同四半期のIBMの売上高は前年同期比1％増加した。純利益は21億7000万ドル（1株当たり2.30ドル）で、前年同期の21億9000万ドル（1株当たり2.36ドル）から減少した。調整後の利益には買収関連の調整は含まれていません。
経営陣は、2026 年に為替変動の影響を除いて 4% から 5% の収益成長を要求しました。IBM は 4 月の時点では、為替変動の影響を除いて 5% 以上の成長を目指していました。同社は今年のフリーキャッシュフローが１０億ドル増加するとの見通しを繰り返した。
IBMが第2四半期の暫定決算を発表したことを受け、アナリストらは予想を引き下げた。 CEOのArvind Krishna氏は投資家に宛てた書簡の中で、予想される価格上昇を前に組織がハードウェアの購入を急いだため、Zメインフレームコンピュータとトランザクション処理ソフトウェアの販売実績が計画を下回ったことを挙げた。株価は２５％下落し、１日としては過去最大の大幅な下落となった。
IBMが水曜日に明らかにした売上高と調整後1株当たり利益の数字は、1週間前に発表された数字と一致していた。
水曜日の終値時点で、IBM株は2026年に入ってから30％下落したが、S＆P500指数は約10％上昇した。
IBMは、利益率の高いソフトウェア部門の第2四半期売上高が5％増の77億6000万ドルだったと発表した。コンサルティング収入は横ばいの53億3000万ドルだった。インフラストラクチャからの収益は 38 億 4000 万ドルで 7% 減少し、Z メインフレームの収益は 42% 減少しました。
IBMは同四半期中に、米国に量子チップのファウンドリを建設する意向表明書に署名したと発表した。また、生成モデルの混合に依存する Bob 人工知能コーディング ツールも導入され、80,000 人以上の従業員に採用されました。
同社は水曜日の声明で、「IBMはAIを活用したソフトウェア開発を拡大し、販売・マーケティング組織の有効性を高め、サプライチェーンを最適化することで生産性を加速している」と述べた。 「これらの取り組みは、マージンとフリーキャッシュフローを強化し、大きな成長機会を捉える同社の能力を強化するのに役立ちます。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/22/ibm-q2-earnings-report-2026.html",
    publishedAt: "2026-07-23T00:17:38+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "why-the-uk-is-dithering-over-what-to-do-f9482c8d",
    title: "Why the UK is dithering over what to do about e-scooters",
    titleJa: "英国が電動スクーターをどうするかで迷っている理由",
    summaryJa: "サウサンプトン中央駅を出ると、電動スクーターを見つけるのにほんの数秒かかります。この都市では、これらのデバイスは電動自転車とともに交通エコシステムの通常の一部となっています。ロンドン行きの電車に乗るために駅に到着したキース・リードさんは、「自宅から駅まで往復するのに最も便利な方法です」と話す。キースさんは、レンタル電動スクーターを週に 2 回利用していると語ります。彼の代わりの選択肢は自転車ですが、その場合、自転車をどこに置いておくか心配する必要があります。",
    bodyOriginal: `When I step out of Southampton Central railway station, it takes me just seconds to spot an e-scooter. In this city, these devices have become a normal part of the transport ecosystem, along with e-bikes.
"It's just the most convenient way to commute from home to the station and back," says Keith Reed, who I speak to as he arrives at the station to catch a train to London. Keith says uses rental e-scooters twice a week. His alternative option would be his bike, but he'd then have to worry about where to leave it.
Around the city, there are parking areas for bright orange rental devices everywhere - but they're not necessarily a permanent feature. Southampton hosts one of the numerous government-backed trials around England. This one has been going on since 2021.
It also doesn't take long to find e-scooters which aren't part of the trial, but instead are owned by individuals. I see a man riding one along the pavement outside a parade of shops. He doesn't want to stop and talk.
These privately owned e-scooters are illegal to ride on public roads across the UK, but they've proliferated regardless. One expert told me the situation was a "Wild West".
Among people I spoke to in Southampton, the same concerns came up time and time again: "They're a blinking nuisance," says elderly pedestrian Fred. Another shopper, Martin, says he's "very concerned" whenever he sees them racing through precincts: "An accident's almost inevitable."
The endgame of the trials is to reach a decision on whether to make permanent hired e-scooter schemes such as the one Keith uses - and whether to bring in legislation that would legalise and regulate privately owned e-scooters too.
But six years since the trials started around England, there's still no conclusion - and as the UK government has responsibility for road traffic legislation across Great Britain, officials in Scotland and Wales say they are waiting on Westminster to act.
So why is it taking so long for the government to decide what to do, and what are the consequences of delay? What does the evidence tell us about how safe these things are?
And why are people using them in the first place - are they here to stay as a useful part of the transport offer, or will they end up being viewed as a pest on our streets?
What are e-scooters - and who rides them?
You'd recognise an e-scooter if you saw one. The Department for Transport's (DfT's) definition of an e-scooter includes no pedals, two wheels and a maximum continuous power rating of 500W.
And so far, the trials around England appear to have proved popular. According to DfT research, fom January 2022 to May 2024, 36.9 million trips were made across 30 trial areas outside of London. On average, nearly 19,500 e-scooters were available to hire every day.
Dr Yasir Ali, a reader in Transport Modelling at Loughborough University, says e-scooters are "complementary" to other modes of transport, rather than replacing them. Due to factors such as range and being exposed to the elements, they are less suitable for longer trips, rural areas with less infrastructure or in bad weather. They work best as "a first- and last-mile solution" in urban areas, to reduce reliance on cars for short trips.
Shared mobility charity CoMoUK's 2025 report suggests that for more than half of the people using rental e-scooters, the most common use was travelling to work or school. Its analysis of DfT data suggests the majority of people using hired e-scooters are male and under 35.
"Sometimes it's a bit difficult to take the bus from dot to dot", says Yan Zhang, who works at Southampton university and doesn't drive, "so for shorter distances, I'll take the scooter."
Around half of respondents to CoMoUK's online survey used it in conjunction with another mode of transport - such as riding to a railway station, like Keith.
Earlier evidence from a national evaluation of the trials published in 2022 found that although some users would have driven instead had they not had access to an e-scooter, the biggest "modal shift" - meaning switch in ways of getting around - to e-scooters was from walking. Given walking is an active mode of travel, this has raised questions over how significant the public health impact of e-scooter use really is.
And the usage of privately owned e-scooters isn't reflected in this research. The DfT has said between 760,000 and 1.2 million people in England aged 16 and over own one - despite the fact that it remains illegal to ride them in public.
In the eyes of the law, e-scooters are classed as motor vehicles. Outside of the trials, they can't be insured, and thus can only legally be ridden on private land, with the owner's permission.
The trials themselves are bound by strict rules. The devices' top speed is limited. Businesses who operate the pilots must insure them. Users must have a full or provisional driving licence, and they must not ride on the pavement. Helmets are recommended but not mandatory.
Richard Dilks, CEO of CoMoUK says "mass-scale use of something that is inherently low-carbon, low-impact, low-cost" is a "good thing" but "we also don't have rules of engagement about how they should be ridden".
And as a result of the delays in introducing regulation, Loughborogh University's Yasir Ali says "we are increasingly in a situation where the law and reality have diverged", with "the disadvantages of e-scooter use without securing the full benefits of regulation".
Against the law
Back in Southampton, I meet a lady pushing a black e-scooter, who doesn't want to give her name. She says nobody told her when she bought it that it was illegal to ride on the streets.
The Driver and Vehicle Standards Agency has a unit that carries out surveillance of retailers to check they're complying with the law. But earlier this month, an investigation by the Press Association news agency discovered some retailers were advertising them for commuting purposes.
Police tell me they regularly see children illegally riding private e-scooters. Margaret Winchcomb, deputy executive director at the Parliamentary Advisory Council for Transport Safety (PACTS), says some are being specifically marketed at kids.
So what can police do? Forces regularly launch crackdowns where they seize illegally used devices, and often crush them. Each year, awareness campaigns run urging parents not to buy their kids an e-scooter for Christmas. But enforcement is a challenge.
Insp Matt Boiles from Avon and Somerset's road policing team says problems arise even with the legal trial devices - for example, people riding them after drinking alcohol, which counts as drink-driving. Riding with another person on the back is another common issue.
But officers see private e-scooters being illegally ridden in public places "all the time, every single day" and they can be really hard to catch - it isn't always safe for police in a car to pursue someone on an e-scooter, he says.
Insp Boiles despairs over parents buying them for children: "We do have parents attend a police station quite a lot, getting very, very upset that their child's £500 e-scooter has been seized." But "the legislation is really, really clear that you can't have it back".
How safe are they?
For many the biggest concern is safety.
There's a potential risk of fire if unregulated devices with lithium batteries are left to charge unattended. Most train operators have banned e-scooters on board for this reason.
But there's also the fact that riders are unprotected in the case of falling off or being hit by motorised vehicles. And - along with e-bikes - they can end up involved in collisions where pedestrians are hurt. Many trial e-scooters in the UK are restricted to 12.5mph, but privately owned scooters' speeds aren't.
Some coroners have even raised concerns. In 2022, a coroner in London called for action after the death of 14-year-old Fatima Abukah on a privately owned scooter.
According to the DfT, in 2024 - the most recent year for which figures are available - 1,390 casualties were recorded in collisions that involved e-scooter in England, Scotland and Wales, three more than in the previous 12 months. The vast majority, 1,096, were e-scooter users themselves.
Young boys and men appear to be over-represented in the stats. Of the casualties, 302 - the most of any age and sex category - were males aged 10-19.
Six deaths were recorded in 2024, unchanged from the previous year. Five of these were riders and one a pedestrian.
Although the numbers aren't conclusive, it is thought more accidents are happening on privately owned e-scooters. Winchcomb says police statistics "aren't reflective of the number of injuries".
Nonetheless, campaigners believe there is enough evidence to show that regulation is urgently needed.
Carly Calland's 14-year-old son Jacob died in March 2025 of a catastrophic head injury. He was a passenger on an e-scooter that was involved with a collision with a car.
If privately owned e-scooters are legalised for public use, Carly believes, there should be mandatory helmets, a ban on carrying passengers and penalties for parents that allow children to ride illegally.
"If Jacob was wearing a helmet that day, he would still be here," Carly, from Wythenshawe in Greater Manchester, says.
Carly is not against e-scooters. They "are really good for people to get to work, and they are eco-friendly", she tells me, but "they just need to be used in the correct way."
What happens if the current situation goes on? Her answer is emphatic: "More deaths."
What's behind the delay
Meanwhile a number of major European cities have ended their shared e-scooter schemes. Paris abolished them after a referendum in 2023. Brussels is the most recent, announcing theirs would end in 2027, following a rise in accidents.
The last evaluation of the trials in England was in 2022. New findings are expected by early next year.
In recent years, successive British transport secretaries have supported the idea of a new law to legalise and regulate the e-scooters available for sale. E-scooters were mentioned in the 2022 Queen's speech, but nothing materialised.
More from InDepth
The hidden cost of the night shift and how to sleep it off
- Published4 days ago
Winchcomb says some of the "dithering" may be because of the potential knock-on effect of any legislation for users of mobility scooters.
There is some frustration from devolved administrations around the UK about the delays in Whitehall. The Scottish Government "will continue to urge the UK government, which holds powers on registration and licensing over off-road vehicles, to take action in this area", a spokesperson says.
The Welsh Government says it will "monitor developments on legalisation plans and consider the implications for Wales".
Northern Ireland's Department for Infrastructure says it is also monitoring the trials in England, as well as the impact of recent law changes in the Republic of Ireland.
The DfT says it says the trials are "building the real-world evidence needed to get regulation right" and it will consult on longer-term rules, including registration and licensing requirements, within the next year.
"E-scooters have real potential to improve local connectivity and cut emissions, and we want to see that potential realised safely and responsibly across the UK," a spokesperson says.
But Ali says: "The current halfway house becomes harder to justify as usage grows."
Even if legislation and associated technical standards were introduced, Richard Dilks acknowledges enforcing them would remain difficult.
But, he adds: "That problem only gets bigger if you leave it."
BBC InDepth is the home on the website and app for the best analysis, with fresh perspectives that challenge assumptions and deep reporting on the biggest issues of the day. Emma Barnett and John Simpson bring their pick of the most thought-provoking deep reads and analysis, every Saturday. Sign up for the newsletter here
Get in touch
Are you personally affected by the issues raised in this story?`,
    bodyJa: `サウサンプトン中央駅を出ると、電動スクーターを見つけるのにほんの数秒かかります。この都市では、これらのデバイスは電動自転車とともに交通エコシステムの通常の一部となっています。
ロンドン行きの電車に乗るために駅に到着したキース・リードさんは、「自宅から駅まで往復するのに最も便利な方法です」と話す。キースさんは、レンタル電動スクーターを週に 2 回利用していると語ります。彼の代わりの選択肢は自転車ですが、その場合、自転車をどこに置いておくか心配する必要があります。
市内のいたるところに、明るいオレンジ色のレンタル機器用の駐車場がありますが、それらは必ずしも常設されているわけではありません。サウサンプトンは、イングランド全土で政府支援による多数の裁判が行われているうちの 1 つを主催している。これは2021年から続いています。
また、トライアルの対象ではなく、個人が所有している電動スクーターを見つけるのにも、それほど時間はかかりません。店が並ぶパレードの外の歩道で、男性が自転車に乗っているのが見えました。彼は立ち止まって話したくありません。
これらの個人所有の電動スクーターは英国全土で公道を走行することが違法だが、それにもかかわらず急増している。ある専門家は、状況は「西部開拓時代」だと私に語った。
サウサンプトンで私が話を聞いた人たちの間でも、同じ懸念が何度も出た。「彼らはまばたきする邪魔者だ」と年配の歩行者のフレッドは言う。別の買い物客マーティンさんは、彼らが境内を駆け巡るのを見るたびに「非常に心配」だと言い、「事故はほぼ避けられない」と語った。
裁判の最終目標は、キースが使用しているような電動スクーターの永久雇用計画を立てるかどうか、そして個人所有の電動スクーターも合法化し規制する法案を提出するかどうかについての決定に達することである。
しかし、イングランド各地で裁判が始まってから6年が経った今も結論は出ていない。英国政府には英国全土の道路交通法に責任があるため、スコットランドとウェールズの当局者らはウェストミンスターの行動を待っていると述べている。
では、なぜ政府が何をすべきかを決定するのにこれほど時間がかかるのでしょうか?また、遅れはどのような影響をもたらすのでしょうか?これらの物がどれほど安全であるかについて、証拠は何を示しているのでしょうか?
そして、そもそもなぜ人々はそれらを使用するのでしょうか？それらは交通手段の有用な一部としてここに留まり続けるのでしょうか、それともそれらは私たちの街路で害虫として見られることになるのでしょうか？
e-スクーターとは何ですか?誰が乗るのですか?
電動スクーターを見ればそれだとわかるでしょう。運輸省 (DfT) の e スクーターの定義には、ペダルがなく、2 つの車輪があり、最大連続電力定格が 500 W であることが含まれます。
そして今のところ、イングランド各地での裁判は好評を博しているようだ。 DfT の調査によると、2022 年 1 月から 2024 年 5 月までに、ロンドン郊外の 30 の試験地域で 3,690 万回の旅行が行われました。毎日平均して 19,500 台近くの電動スクーターがレンタル可能でした。
ラフバラー大学の交通モデリングの専門家であるヤシル・アリ博士は、電動スクーターは他の交通手段に取って代わるものではなく、それを「補完する」ものであると述べています。航続距離や風雨にさらされるなどの要因により、長距離旅行、インフラの整っていない田舎、悪天候にはあまり適していません。これらは都市部での「ファーストマイルとラストマイルのソリューション」として最適で、短距離の移動での車への依存を軽減します。
シェアモビリティ慈善団体 CoMoUK の 2025 年のレポートによると、レンタル電動スクーターを使用している人の半数以上にとって、最も一般的な用途は通勤または通学でした。 DfT データの分析によると、レンタル電動スクーターを使用している人の大多数は男性で 35 歳以下であることが示唆されています。
サウサンプトン大学に勤務し、車の運転はしないヤン・チャンさんは、「点から点へバスに乗るのはちょっと大変なこともあります。だから短い距離ならスクーターを使います」と言う。
CoMoUK のオンライン調査への回答者の約半数は、キースのように鉄道駅までの乗車など、別の交通手段と併用して利用していました。
2022年に発表された試験の全国評価による初期の証拠によると、一部のユーザーは電動スクーターを利用できなければ代わりに車を運転していたであろうが、電動スクーターへの最大の「モーダルシフト」、つまり移動手段の切り替えは徒歩からのものだった。ウォーキングがアクティブな移動手段であることを考えると、電動スクーターの使用が公衆衛生に及ぼす影響が実際にどれほど重大であるかについて疑問が生じています。
また、個人所有の電動スクーターの使用状況はこの調査には反映されていない。 DfTは、公の場で自転車に乗ることが依然として違法であるにもかかわらず、イギリスでは16歳以上の76万人から120万人が自転車を所有していると発表した。
法律の観点からは、電動スクーターは自動車として分類されます。トライアル以外では保険に加入できないため、所有者の許可を得て私有地でのみ合法的に乗車できる。
裁判自体は厳格なルールに縛られています。デバイスの最高速度には制限があります。パイロットを運行する企業はパイロットに保険をかけなければなりません。ユーザーは本運転免許証または仮運転免許証を持っている必要があり、歩道を走行してはなりません。ヘルメットの着用は推奨されていますが、必須ではありません。
CoMoUKのリチャード・ディルクス最高経営責任者（CEO）は、「本質的に低炭素、低影響、低コストのものを大量に使用する」ことは「良いこと」だが、「どのように乗るべきかについての関与規則もない」と述べた。
そしてラフボロー大学のヤシル・アリ氏は、規制導入の遅れの結果、「規制の恩恵を最大限に享受できないまま電動スクーターの使用には不利益が生じる」「法律と現実が乖離する状況にますます陥っている」と述べた。
法律に反する
サウサンプトンに戻ると、名前は明かしたがらない、黒い電動スクーターを押している女性に出会った。彼女は、それを購入したとき、路上で自転車に乗るのは違法であるとは誰も教えてくれなかったと言います。
運転者・車両基準庁には、小売業者が法律を遵守しているかどうかを監視する部門があります。しかし今月初め、新聞協会通信社の調査で、一部の小売店が通勤目的で広告を出していることが判明した。
警察は、子供たちが違法に自家用電動スクーターに乗っているのを定期的に目撃していると語った。運輸安全議会諮問委員会（PACTS）の副事務局長マーガレット・ウィンチコム氏は、一部は特に子供向けに販売されていると語る。
それで、警察は何ができるでしょうか？軍隊は定期的に取り締まりを開始し、違法に使用されたデバイスを押収し、しばしば破壊します。毎年、クリスマスに子供に電動スクーターを買わないよう親に呼びかける啓発キャンペーンが行われている。しかし、施行は課題です。
エイボンとサマセット州の道路警察チームのマット・ボイルズ警部は、法定試験用装置であっても問題が生じると述べている。たとえば、飲酒後に乗車した人は飲酒運転とみなされる。後ろに人を乗せて乗車することもよくある問題です。
しかし警官らは、公共の場で自家用電動スクーターが「毎日、いつでも」違法に走行しているのを目撃しており、捕まえるのは非常に難しい場合がある。警察が車に乗って電動スクーターに乗った人物を追跡するのは必ずしも安全ではない、と同氏は言う。
Insp Boiles さんは、親が子供に電動スクーターを買うことに絶望している。「子供の 500 ポンドの電動スクーターが押収されて非常に動揺している親が、よく警察署に来ています。」しかし、「法律は、それを取り戻すことができないことを本当に明確にしています。」
彼らはどれくらい安全ですか?
多くの人にとって最大の懸念は安全性です。
リチウム電池を搭載した規制されていない機器を充電したまま放置すると、火災が発生する可能性があります。このため、ほとんどの鉄道事業者は電動スクーターの車内での使用を禁止しています。
しかし、転落した場合や電動車両に衝突された場合、ライダーは保護されていないという事実もあります。そして、電動自転車と同様に、歩行者が負傷する衝突事故に巻き込まれる可能性もあります。英国で試用されている電動スクーターの多くは時速19.5マイルに制限されているが、個人所有のスクーターの速度は制限されていない。
検死官の中には懸念を表明する者もいる。 2022年、ロンドンの検死官は、個人所有のスクーターで14歳のファティマ・アブカさんが死亡したことを受け、措置を講じるよう求めた。
DfT によると、統計が入手可能な最新の 2024 年には、イングランド、スコットランド、ウェールズで電動スクーターが関与した衝突による死傷者数は 1,390 人で、過去 12 か月より 3 人増加しました。大多数の 1,096 人は電動スクーターのユーザー自身でした。
統計では若い少年と男性が過剰に代表されているようです。死傷者のうち、年齢と性別のカテゴリーの中で最も多い302人は10～19歳の男性だった。
2024年の死亡者数は前年と変わらず6人でした。このうち5人はライダー、1人は歩行者だった。
決定的な数字ではありませんが、個人所有の電動スクーターでの事故が増えていると考えられています。ウィンチコム氏は、警察の統計は「負傷者数を反映していない」と述べた。
それにもかかわらず、活動家らは、規制が緊急に必要であることを示す十分な証拠があると信じている。
カーリー・カランドさんの14歳の息子ジェイコブさんは、致命的な頭部外傷により2025年3月に亡くなった。彼は電動スクーターの同乗者で、車との衝突事故を起こした。
個人所有の電動スクーターが公共での使用を合法化されるのであれば、ヘルメットの着用を義務化し、乗客を乗せることを禁止し、子供が違法に乗ることを許可する親には罰則が設けられるべきだとカーリー氏は考えている。
「もしあの日、ジェイコブがヘルメットをかぶっていたなら、彼は今もここにいたでしょう」とグレーター・マンチェスターのウィゼンショー在住のカーリーは言う。
カーリーは電動スクーターに反対しているわけではない。これらは「人々が仕事に行くのに非常に役立ち、環境にも優しい」が、「正しい方法で使用する必要があるだけです」と彼女は言います。
今の状況が続けばどうなるのでしょうか？彼女の答えは「死者が増える」と力説した。
遅延の背後にあるものは何ですか
一方、欧州の多くの主要都市は電動スクーターのシェア制度を終了した。パリは2023年の住民投票後にこの制度を廃止した。最も最近ではブリュッセルが、事故の増加を受けて2027年に制度を廃止すると発表した。
英国での試験の最後の評価は2022年に行われた。来年初めまでに新たな発見が期待される。
近年、歴代の英国運輸長官は、販売可能な電動スクーターを合法化し規制するための新しい法律のアイデアを支持してきた。 2022年の女王の演説では電動スクーターについて言及されたが、何も実現しなかった。
InDepthのその他の作品
夜勤の隠れたコストとそれを睡眠で補う方法
- 4 日前に公開
ウィンチコム氏は、「ディザリング」の一部は、モビリティスクーターのユーザーに対するあらゆる法律の潜在的な波及効果によるものである可能性があると述べている。
英国各地の分権政府からは、ホワイトホールでの遅れについて不満の声が上がっている。スコットランド政府は「オフロード車の登録と認可の権限を持つ英国政府に対し、この分野で行動を起こすよう引き続き求めていく」と広報担当者は述べた。
ウェールズ政府は「合法化計画の進展を監視し、ウェールズへの影響を検討する」としている。
北アイルランドインフラ省は、英国での裁判やアイルランド共和国における最近の法改正の影響も監視していると述べた。
DfTは、今回の試験は「規制を正しくするために必要な現実世界の証拠を構築している」と述べており、登録やライセンス要件を含む長期的なルールについて来年以内に協議する予定だとしている。
「電動スクーターには地域の接続性を向上させ、排出ガスを削減する本当の可能性があり、私たちはその可能性が英国全土で安全かつ責任を持って実現されることを望んでいます」と広報担当者は言う。
しかしアリは、「利用が増えるにつれて、現在のハーフハウスを正当化するのは難しくなる」と言う。
たとえ法律と関連する技術基準が導入されたとしても、それらを施行するのは依然として困難であるとリチャード・ディルクス氏は認めています。
しかし、「放っておくと問題はさらに大きくなるばかりだ」とも付け加えた。
BBC InDepth は、思い込みに疑問を投げかける新鮮な視点と、その日の最大の問題についての深いレポートを提供する、最高の分析を提供する Web サイトとアプリです。エマ・バーネットとジョン・シンプソンが、毎週土曜日に、最も示唆に富んだ深い読み物と分析を厳選して紹介します。ここからニュースレターに登録してください
連絡する
この話で提起された問題によってあなたは個人的に影響を受けていますか?`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cn4nvn9w00no?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-22T23:51:24+00:00",
    category: "自動車",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/7db6/live/f8819640-8423-11f1-bee8-53ce494e1abc.jpg",
    readTime: 10,
  },
  {
    id: "airport-drop-off-fees-up-by-a-third-here-ac8d7b32",
    title: "Airport drop-off fees up by a third - here are the priciest",
    titleJa: "空港ドロップオフ料金が 3 分の 1 に値上げ - ここが最も高価です",
    summaryJa: "空港ドロップオフ料金が 3 分の 1 に値上げ - ここが最も高価です- 公開されました",
    bodyOriginal: `Airport drop-off fees up by a third - here are the priciest
- Published
Drop-off fees at the UK's major airports have risen by a third on average since last summer, new analysis has found.
The RAC looked at the cost of pulling up at the closest point to terminals at the 20 busiest airports - 16 had put up their fees since last year.
Two London airports, Gatwick and Stansted, topped the price table at £10.
Trade body Airports UK said free drop-offs were available and fees were part of airports' business models and climate change objectives.
London Gatwick's is the highest "farewell fee", charging £10 for 10 minutes on the forecourt outside either of its terminals. At Stansted, £10 buys a more generous 15 minutes, at "Express Set Down" outside departures.
London City Airport, which only started making people pay this year, is the most expensive on a per-minute basis. Its £8 charge for five minutes works out at £1.60 per minute.
In contrast, none of the top 10 airports in the EU charge for drop-offs, according to RAC research.
The RAC acknowledged UK airports generally offered other options for dropping people off at locations further from the terminal, sometimes with free shuttle buses.
But the motoring organisation's senior policy officer Rod Dennis said "having a captive audience should be no excuse for these 'farewell fees' – especially when they're completely at odds with how major airports around the world operate."
He said drivers needed to be especially careful of barrierless 'park now, pay later' drop-off zones, as they could face a parking charge notice if they failed to pay online or by phone within a certain period of time.
Gatwick's price hike comes as the airport tries to get more people arriving by trains and buses.
When the Transport Secretary approved the airport's plans for a second runway, one of the requirements was to have 54% of passengers using public transport.
Heathrow may also have to act to try and put people off driving to get a third runway.
A London Gatwick spokesperson said drop-off charges were aimed at disincentivising 'kiss and fly' trips and data indicated it was "influencing passengers to seek alternative options".
The airport links to 120 train stations across London and the South East, with eight local bus routes running 24/7, they said.
Passengers can still be dropped off for free at long-stay car parks, with a free shuttle bus to the terminal and Blue Badge holders are exempt from the charge, they said.
A spokesperson for Airports UK said where drop off fees are charged they are "necessary to manage congestion, and the traffic and air pollution concerns of our local communities, as well as our climate change objectives".
"These are issues that airports are mandated to manage by the government and local authorities," they said.
But Clive Wratten, CEO of the Business Travel Association, said fees were adding to businesses' costs.
"First it was environmental [reasons]. Then congestion management. Then funding new routes. Now apparently it is about offsetting tax rises," he said.
"The goalposts have moved so many times now that the credibility of any justification has long since gone."
How to avoid unexpected charges
Check fees and how to pay them before setting off. Blue Badge holders are sometimes exempt.
Look for cheaper or free alternatives, for example car parks slightly further away which have shuttle buses to the terminal.
Research possible public transport alternatives.
Keep an eye on the time; make your goodbyes quick to avoid over-staying the limit.
Check where a taxi will drop you and whether they include the fee in their fare.`,
    bodyJa: `空港ドロップオフ料金が 3 分の 1 に値上げ - ここが最も高価です
- 公開されました
英国の主要空港の乗り捨て料金が昨夏以来、平均して3分の1値上がりしていることが新たな分析で判明した。
RACは、最も混雑する20の空港のターミナルに最も近い地点での駐輪費用を調査したが、16空港は昨年から料金を徴収していた。
ロンドンの 2 つの空港、ガトウィック空港とスタンステッド空港が 10 ポンドでトップでした。
業界団体エアポートUKは、無料のドロップオフが利用可能であり、料金は空港のビジネスモデルと気候変動目標の一部であると述べた。
ロンドン・ガトウィック空港は「お別れ料金」が最も高く、どちらのターミナルの外の前庭でも10分間で10ポンドを請求する。スタンステッドでは、出発時間外の「Express Set Down」で 10 ポンドを支払うと、より寛大な 15 分が購入できます。
今年から有料化が始まったばかりのロンドン・シティ空港は、1分当たりの料金が最も高い。 5 分間 8 ポンドの料金は、1 分あたり 1.60 ポンドに相当します。
対照的に、RAC の調査によると、EU のトップ 10 の空港では、降車料金を徴収している空港はありません。
RACは、英国の空港は通常、ターミナルから離れた場所で人々を降ろすための他の選択肢を提供しており、場合によっては無料のシャトルバスを提供していることを認めた。
しかし、自動車業界団体の上級政策責任者であるロッド・デニス氏は、「聴衆を魅了することは、特に世界中の主要空港の運営方法と完全に矛盾する場合、こうした『別れの料金』の言い訳にはならない」と述べた。
同氏は、一定期間内にオンラインまたは電話で支払いを怠った場合、駐車料金の通知を受ける可能性があるため、ドライバーはバリアフリーの「今すぐ駐車し、後で支払う」降車ゾーンに特に注意する必要があると述べた。
ガトウィック空港の値上げは、空港が電車やバスで到着する人を増やそうとする中で行われた。
運輸長官が空港の第 2 滑走路計画を承認したとき、要件の 1 つは乗客の 54% が公共交通機関を利用することでした。
ヒースロー空港はまた、人々が第3滑走路の建設に向けた運転をやめるよう行動を起こさなければならないかもしれない。
ロンドン・ガトウィック空港の広報担当者は、ドロップオフ料金は「キス・アンド・フライ」旅行の意欲を削ぐことを目的としており、データは「乗客が別の選択肢を探すよう影響を与えている」ことを示していると述べた。
同空港はロンドンと南東部の 120 の鉄道駅と接続しており、8 つのローカルバス路線が年中無休で運行しているという。
長期滞在駐車場では引き続き乗客を無料で降ろすことができ、ターミナルまでの無料シャトルバスも利用でき、ブルーバッジ所有者は料金が免除されるという。
英国空港の広報担当者は、降車料金が課される場合は「渋滞、地元コミュニティの交通や大気汚染への懸念、そして気候変動の目標を管理するために必要」であると述べた。
「これらは空港が政府や地方自治体に管理を義務付けられている問題だ」と彼らは述べた。
しかし、ビジネス・トラベル・アソシエーションの最高経営責任者（CEO）であるクライブ・ラッテン氏は、手数料が企業のコストを増加させていると述べた。
「最初は環境問題だった。次に渋滞管理。そして新しい路線に資金を提供するためだ。今は明らかに増税を相殺するためだ」と同氏は語った。
「ゴールポストは何度も移動しており、いかなる正当化の信憑性もとうの昔に失われている。」
予期せぬ請求を避ける方法
出発前に料金と支払い方法を確認してください。ブルーバッジ保持者は免除される場合があります。
より安価または無料の代替駐車場を探してください。たとえば、少し離れた場所にあるターミナル行きのシャトルバスが運行している駐車場などです。
可能な代替公共交通機関を調査します。
時間に注意してください。制限を超えないように、さよならは早めに済ませてください。
タクシーがどこで降車するのか、料金に料金が含まれているかどうかを確認してください。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c2lqd72d4lqo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-22T23:21:40+00:00",
    category: "自動車",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/37bb/live/4f2cc100-85f9-11f1-bee8-53ce494e1abc.jpg",
    readTime: 4,
  },
  {
    id: "more-than-70-of-recent-home-buyers-were-1624bfd1",
    title: "More than 70% of recent home buyers were counting on mortgage rates to drop. Now they’re stuck.",
    titleJa: "最近の住宅購入者の 70% 以上が、住宅ローン金利の低下を期待していました。今、彼らは行き詰まっています。",
    summaryJa: "現在「経済的に持続不可能な」住宅ローンの支払いに直面している多くの住宅所有者にとって、より低い金利への借り換えは選択肢ではありません。",
    bodyOriginal: `Refinancing to a lower rate isn’t an option for many homeowners, who now face “financially unsustainable” mortgage payments.`,
    bodyJa: `現在「経済的に持続不可能な」住宅ローンの支払いに直面している多くの住宅所有者にとって、より低い金利への借り換えは選択肢ではありません。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/more-than-70-of-recent-home-buyers-were-counting-on-mortgage-rates-to-drop-now-theyre-stuck-1d0dab60?mod=mw_rss_topstories",
    publishedAt: "2026-07-22T19:36:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-83910737",
    readTime: 2,
  },
  {
    id: "analysis-iran-war-energy-shock-hits-the-e9882c55",
    title: "Analysis: Iran war energy shock hits the U.S. economy as gas and diesel prices climb",
    titleJa: "分析：ガソリンとディーゼル価格の上昇により、イラン戦争エネルギーショックが米国経済に打撃",
    summaryJa: "米国経済は、イラン戦争によって引き起こされたエネルギー市場の問題に対してこれまで以上に脆弱になっている。経済は著しく回復力を見せているが、以前の物価高騰からアメリカ国民を守っていた緩衝材は薄れてきている。結論：たとえ実際の戦闘が紛争の第一段階よりも抑制されたままであっても、戦争はこの夏アメリカ人の生活水準を侵食するだろう。",
    bodyOriginal: `The U.S. economy is more vulnerable than ever to the problems in energy markets caused by the Iran war. The economy has been remarkably resilient, but the buffers that protected Americans from earlier price spikes are wearing thin.
Bottom line: The war will erode Americans' standard of living this summer even if the actual fighting stays more contained than the first phase of the conflict.
From President Donald Trump's perspective, having kicked off a return to direct conflict with Iran, there is now little he can do to shield Americans from the economic fallout.
The White House says the president has been honest with the American people and that prices will fall soon. "As the U.S. military degrades the terrorist Iranian regime's ability to attack commercial vessels and disrupt the free flow of energy through the Strait of Hormuz, oil and gas prices will plummet back to pre-conflict levels," Taylor Rogers, a White House spokeswoman, said in an email.
Anyone who has filled up at the pump in recent days has already felt the pain. The national average price at the pump was $4.06 a gallon on Wednesday, up 4.4% from $3.89 a week ago, according to AAA.
That's painful. But for the full economic effect, watch diesel, "because of course that is the lifeblood of the U.S. economy," said Christian Lawrence, head of Americas and energy market strategy at Rabobank.
The U.S. Energy Information Administration's benchmark for diesel jumped nearly 34 cents last week to $5.13 a gallon, the biggest weekly climb since the the first week of the war in March. Those figures are used to determine fuel surcharges that airlines and other companies impose on customers, which can push price hikes out to the rest of the economy.
We've been here before, of course. The start of the war in March saw oil prices spike and gas and diesel prices follow, only to fall when the shooting paused a few weeks later. With periodic reports that the U.S. and Iran are trying to hash out a new pause in the fighting, it might seem like a return to lower prices is only a presidential Truth Social post away.
Unfortunately, that's where things have changed, particularly in economically vital diesel.
"There's a bit of an asymmetric relationship there in the sense that, if oil goes up, then diesel prices are going up," Lawrence said. "If oil goes down, diesel prices might come off a little bit, but they're still going to be much higher."
Problems have been accumulating in the refining sector that turns raw crude oil into the distilled products that actually get pumped into cars and trucks. U.S. refineries are maxed out at 96.1% of their capacity, the EIA said Wednesday.
If refineries could produce more at that level, they would. U.S. refineries kicked into overdrive when the war started to help produce jet fuel and other products for European markets that suddenly found themselves cut off from their suppliers in the Middle East.
Inventories that were run down early in the war are yet to be replenished amid summer demand. The EIA reported last week that storage at the crucial delivery point of Cushing, Oklahoma, has since early June been at so-called tank-bottom, the level at which remaining liquids can't physically be drawn out.
The Strategic Petroleum Reserve is down to 311 million barrels, its lowest level since March 1983, according to EIA data.
Iran isn't the only war still raging, either. Ukraine hit 24 out of Russia's 34 largest refineries in the past three months, analysts with BofA Global Research note. Russia has switched from a supplier of diesel and other products to an importer, just as China is trying to restock its own inventories.
More oil is getting through the Strait of Hormuz now than during the teeth of the crisis in March, according to the International Energy Agency even as ship attacks in the waterway continue to be a risk. But that oil doesn't help anyone until it's turned into something useful for the global economy. That makes benchmark prices like Brent crude, at $94 a barrel midday Wednesday, less important as an indicator than the retail prices consumers actually pay.
None of this amounts to an immediate economic crisis, but it adds to the affordability pressures that have been weighing on Americans for years. Inflation data delivered a happy surprise last week when the consumer price index came in at a better-than-expected 3.5% for June. But the reprieve is likely temporary. Higher fuel prices will eat into wage gains and force Americans to dip deeper into their savings.
The CNBC All-America Economic Survey released last week found 37% of U.S. voters said they are using credit cards more often to pay for things due to higher food and gas prices. That's a 6% increase since April as the war has dragged on.
The administration has tried to staunch the bleeding. It directed a massive release of oil from the SPR, eased restrictions on which ships can carry fuel and other commodities, and reduced sanctions on Russian and Iranian oil. All off these measures are arguably already priced into the market, however, and it isn't clear there are more levers the administration can pull in the short term.
A lasting end to the conflict would lower oil prices, but gas and diesel may be stuck high at least through Labor Day, when the end of summer has fewer people on the roads. The surge in demand will eventually prompt more refinery construction.
"But this takes time. There is no short-term solution," Lawrence said.`,
    bodyJa: `米国経済は、イラン戦争によって引き起こされたエネルギー市場の問題に対してこれまで以上に脆弱になっている。経済は著しく回復力を見せているが、以前の物価高騰からアメリカ国民を守っていた緩衝材は薄れてきている。
結論：たとえ実際の戦闘が紛争の第一段階よりも抑制されたままであっても、戦争はこの夏アメリカ人の生活水準を侵食するだろう。
ドナルド・トランプ大統領の観点から見ると、イランとの直接紛争への復帰を始めた今、経済的影響からアメリカ国民を守るために彼にできることはほとんどない。
ホワイトハウスは、大統領は米国民に対して誠実であり、価格はすぐに下がるだろうと述べている。ホワイトハウス報道官のテイラー・ロジャース氏は電子メールで、「米軍がテロリストのイラン政権の商船を攻撃し、ホルムズ海峡を通るエネルギーの自由な流れを妨害する能力を低下させると、石油とガスの価格は紛争前の水準にまで急落するだろう」と述べた。
ここ数日でポンプに水を入れた人なら誰でも、すでに痛みを感じているでしょう。 AAAによると、水曜日の全国平均ポンプ価格は1ガロン当たり4.06ドルで、1週間前の3.89ドルから4.4％上昇した。
それは痛いですね。しかし、完全な経済効果を得るには、ディーゼルに注目してください。「もちろん、ディーゼルは米国経済の生命線だからです」と、ラボバンクの南北アメリカ・エネルギー市場戦略責任者のクリスチャン・ローレンス氏は言う。
米国エネルギー情報局のディーゼル基準値は先週、34セント近く上昇して1ガロン当たり5.13ドルとなり、3月の戦争開始第1週以来最大の週間上昇となった。これらの数値は、航空会社やその他の企業が顧客に課す燃油特別付加運賃を決定するために使用され、価格上昇を経済全体に波及させる可能性があります。
もちろん、私たちは以前にもここに来たことがあります。 3月に戦争が始まると、石油価格が急騰し、それに続いてガソリンとディーゼル価格も高騰したが、数週間後に銃撃が止むと下落した。米国とイランが新たな戦闘の一時停止を急いでいるという定期的な報道を考えると、大統領のトゥルース・ソーシャルポストが届くまでに、価格の引き下げが実現するのではないかと思われるかもしれない。
残念ながら、特に経済的に重要なディーゼルにおいては、状況が変わってきています。
「原油が上昇するとディーゼル価格も上昇するという意味で、少し非対称な関係があります」とローレンス氏は語った。 「原油価格が下がれば、ディーゼル価格は少し下がるかもしれないが、それでもかなり高くなるだろう。」
未加工の原油を、実際に自動車やトラックに送り込まれる蒸留製品に変える精製部門で問題が積み重なっている。米国の製油所は生産能力の96.1％が限界に達しているとEIAが水曜日に発表した。
製油所がそのレベルでより多くの生産を行うことができれば、そうするでしょう。戦争が始まると、米国の製油所は、中東の供給業者から突然切り離された欧州市場向けのジェット燃料やその他の製品の生産を支援するために過剰稼働を始めた。
戦争初期に枯渇した在庫は、夏の需要にもかかわらずまだ補充されていない。 EIAは先週、オクラホマ州クッシングの重要な配送地点での保管が、6月初旬以降、いわゆるタンク底、つまり残りの液体を物理的に取り出すことができないレベルになっていると報告した。
EIAのデータによると、戦略石油備蓄は3億1,100万バレルまで減少し、1983年3月以来の最低水準となっている。
今も続く戦争はイランだけではない。 BofAグローバル・リサーチのアナリストらによると、ウクライナは過去3カ月でロシアの最大規模製油所34社のうち24社に打撃を与えた。中国が自国の在庫を補充しようとしているのと同じように、ロシアはディーゼルやその他の製品の供給国から輸入国に切り替えた。
国際エネルギー機関によると、水路での船舶攻撃が引き続き危険にさらされているにもかかわらず、3月の危機の最中よりも現在、ホルムズ海峡を通過する石油の量が増えているという。しかし、その石油は世界経済に役立つものに変えられるまでは誰の役にも立ちません。そのため、水曜日正午のブレント原油のようなベンチマーク価格（1バレル94ドル）は、消費者が実際に支払う小売価格よりも指標としての重要性が低くなっている。
これらはどれも直ちに経済危機につながるものではありませんが、長年アメリカ人に重くのしかかっている手頃な価格の圧力をさらに高めます。先週のインフレ統計は、6月の消費者物価指数が予想を上回る3.5%という嬉しい驚きをもたらした。しかし、その猶予はおそらく一時的なものでしょう。燃料価格の高騰は賃金上昇を食いつぶし、米国人は貯蓄をさらに取り崩すことを余儀なくされるだろう。
先週発表されたCNBC全米経済調査によると、米国の有権者の37％が、食品やガソリン価格の高騰により、買い物の支払いにクレジットカードを使用することが増えたと回答した。戦争が長引く中、４月以来６％増加した。
政府は出血を止めようとしている。 ＳＰＲからの石油の大量放出を指示し、燃料やその他の物資を輸送できる船舶の制限を緩和し、ロシアとイランの石油に対する制裁を軽減した。しかし、これらの措置はすべてすでに市場に織り込まれていると考えられ、短期的に政権がこれ以上の手段を講じることができるかどうかは明らかではない。
紛争が永続的に終結すれば原油価格は下がるだろうが、少なくとも夏の終わりで道路を走る人が少なくなるレイバーデーまではガソリンとディーゼルの価格が高止まりする可能性がある。需要の急増により、最終的には製油所の建設がさらに進むだろう。
「しかし、これには時間がかかります。短期的な解決策はありません」とローレンス氏は言う。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/22/iran-war-energy-markets-gas-diesel-prices-us-economy-analysis.html",
    publishedAt: "2026-07-22T18:59:33+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 6,
  },
  {
    id: "senate-crypto-bill-would-ban-federal-off-e818562c",
    title: "Senate crypto bill would ban federal officials — including presidents — from issuing digital assets",
    titleJa: "上院暗号法案は大統領を含む連邦職員によるデジタル資産の発行を禁止する",
    summaryJa: "上院が検討している新たな改正法案の下では、大統領やその他の連邦当局者は仮想通貨やその他のデジタル資産の発行や後援が禁止されることになる。共和党は水曜日、より広範なデジタル資産市場を管理するための重要な法案である「クラリティ法」として知られる措置を再発表した。この法案の筆頭提案者であるシンシア・ルミス上院議員（共和党、ワイオミング州）がCNBCに文書を提供したが、その内容には大統領が仮想通貨から利益を得る方法についての最初の制限が含まれている。",
    bodyOriginal: `Presidents and other federal officials would be banned from issuing or sponsoring cryptocurrency and other digital assets under newly updated legislation the Senate is considering.
Republicans on Wednesday re-released a measure — known as the Clarity Act, major legislation to govern the broader digital asset market. Sen. Cynthia Lummis, R-Wyo., the bill's lead sponsor, provided CNBC with its text, which now includes the first limits on how presidents may profit off of crypto.
The legislation would tap the Department of Justice to enforce the ban. The agency could levy a fine of up to $250,000 per day for violators.
President Donald Trump, signed off on the ethics section of the bill, Sen. Bernie Moreno, R-Ohio, one of the measure's supporters, told CNBC. Trump made about $1.2 billion in crypto-related income during his first year back in the White House, according to a recent disclosure.
Trump's 2025 crypto proceeds include about $580 million connected with World Liberty Financial, the company co-founded by members of Trump's family that issues the WLFI governance token and USD1 stablecoin. World Liberty launched USD1 in March 2025, after Trump began his nonconsecutive second term as president.
It's not clear whether the bill will be able to garner the Democratic support needed to get 60 votes to clear the Senate. Democrats, including Sen. Angela Alsobrooks, D-Md., have criticized proposals that would leave the DOJ in charge of enforcing ethics provisions.
Alsobrooks on Wednesday slammed having the DOJ rather than state attorneys general leading the oversight.
"Look at this Department of Justice," she told reporters Wednesday at the Capitol. "They're completely unserious, first of all, and it's just stone crazy to rely on them for anything. A lawless Department of Justice cannot oversee this. So, I think having the attorneys general as a backstop is going to be really important."
But Senate Majority Leader John Thune, R-S.D., said he expects the Senate will quickly consider the measure.
"It'll get a vote, not sure when yet but in the next couple weeks," Thune told reporters Wednesday at the Capitol.
Companies including Coinbase and Ripple have pressed for a national law to create a regulatory structure around crypto.
The banking industry has opposed certain aspects of the crypto industry, including issuing rewards that it considers similar to interest earned on bank accounts. A group of banking groups, including the American Bankers Association and Financial Services Forum, on Wednesday after the updated crypto bill was released said the measure "still puts at risk the local lending that drives economic activity in the U.S."
— Irit Skulnik and Karen James Sloan contributed to this report.`,
    bodyJa: `上院が検討している新たな改正法案の下では、大統領やその他の連邦当局者は仮想通貨やその他のデジタル資産の発行や後援が禁止されることになる。
共和党は水曜日、より広範なデジタル資産市場を管理するための重要な法案である「クラリティ法」として知られる措置を再発表した。この法案の筆頭提案者であるシンシア・ルミス上院議員（共和党、ワイオミング州）がCNBCに文書を提供したが、その内容には大統領が仮想通貨から利益を得る方法についての最初の制限が含まれている。
この法案は司法省に禁止令を執行させることになる。同庁は違反者に１日当たり最大２５万ドルの罰金を課す可能性がある。
ドナルド・トランプ大統領が法案の倫理条項に署名したと、法案支持者の一人であるバーニー・モレノ上院議員（共和党、オハイオ州）がCNBCに語った。最近の開示によると、トランプ氏はホワイトハウスに戻って最初の1年間に約12億ドルの仮想通貨関連収入を得た。
トランプ氏の2025年の暗号資産収益には、WLFIガバナンストークンと1米ドルのステーブルコインを発行するトランプ氏の家族のメンバーが共同設立した会社ワールド・リバティ・ファイナンシャルに関連した約5億8000万ドルが含まれている。ワールド・リバティは、トランプ氏が非連続の大統領として２期目を開始した後の２０２５年３月にＵＳＤ１を立ち上げた。
この法案が上院通過に必要な60票を獲得するのに必要な民主党の支持を獲得できるかどうかは不透明だ。メリーランド州民主党のアンジェラ・アルズブルックス上院議員を含む民主党は、倫理規定の執行を司法省に委ねる提案を批判している。
アルブルックス氏は水曜日、州司法長官ではなく司法省が監督を主導することを非難した。
「この司法省を見てください」と彼女は水曜日に国会議事堂で記者団に語った。 「第一に、彼らはまったく不真面目で、何かにつけて彼らに依存するのはまったくの狂人だ。無法な司法省がこれを監督することはできない。したがって、バックストップとして司法長官を置くことは非常に重要になると思う。」
しかし、ジョン・チューン上院多数党院内総務（共和党、SD）は、上院がこの法案を迅速に検討すると期待していると述べた。
トゥーン氏は水曜日、国会議事堂で記者団に対し、「いつになるかはまだ分からないが、数週間以内に投票が行われるだろう」と語った。
CoinbaseやRippleなどの企業は、暗号通貨に関する規制構造を構築するための国内法の制定を求めている。
銀行業界は、銀行口座で得られる利子と同様とみなされる報酬の発行など、仮想通貨業界の特定の側面に反対している。米国銀行協会や金融サービスフォーラムなどの銀行団体は、最新の仮想通貨法案の発表後の水曜日、この措置は「依然として米国の経済活動を推進する地元融資を危険にさらしている」と述べた。
— Irit Skulnik と Karen James Sloan がこのレポートに貢献しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/22/senate-crypto-bill-would-ban-federal-officials-from-issuing-digital-assets.html",
    publishedAt: "2026-07-22T18:59:05+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 3,
  },
  {
    id: "openai-cyber-models-broke-out-of-trainin-d8473d49",
    title: "OpenAI cyber models broke out of training environment to hack Hugging Face",
    titleJa: "OpenAI サイバー モデルがトレーニング環境から侵入し、Hugging Face をハッキングする",
    summaryJa: "OpenAIは、自社の人工知能モデルが、オープンソースの開発者プラットフォームHugging Faceに影響を与えた「前例のないサイバーインシデント」の背後にあると述べ、業界全体の研究者を動揺させた。同社の発表によると、同社のモデル GPT-5.6 Sol と、まだリリースされていないより高機能なモデルの組み合わせが、サンドボックス化されたテスト環境を抜け出し、インターネットにアクセスし、脆弱性を悪用して Hugging Face のシステムにアクセスしたという。",
    bodyOriginal: `OpenAI said that its artificial intelligence models were behind an "unprecedented cyber incident" that affected the open-source developer platform Hugging Face, rattling researchers across the industry.
The company said a combination of its models GPT‑5.6 Sol and a more capable model that has not yet been released escaped a sandboxed testing environment, accessed the internet and exploited a vulnerability to gain access to Hugging Face's systems.
The model was trying to find information that it could use to cheat on an evaluation, and it succeeded, OpenAI said in a blog post on Tuesday. Both companies are actively investigating the incident.
Hugging Face disclosed that it was looking into a security event last week, saying in a release at the time that the incident was unique because it was "driven, end to end, by an autonomous AI agent system."
"We've spent the past 24 hours working closely with the @OpenAI team (thanks!), and we strongly believe there was no malicious intent on their part," Hugging Face CEO Clément Delangue wrote in a post on X on Tuesday. "It's quite mind-blowing that all of this happened autonomously!"
Wall Street and the U.S. government have been fixated on AI models' rapidly advancing cyber capabilities since OpenAI's rival Anthropic released a powerful offering called Claude Mythos Preview in April. OpenAI introduced its own cyber offering in May, followed by GPT-5.6 Sol in June, which it described as the "strongest cybersecurity model yet."
Both companies have warned about the risks of advanced cyber models and have taken steps to limit their availability to select groups of companies and government agencies.
Walter Isaacson, advisory partner at the investment banking firm Perella Weinberg, said Wednesday that he thinks the Hugging Face incident is "really frightening," even though he considers himself an AI optimist.
"This is the first thing that just totally scares me," he told CNBC's "Squawk Box."
Yoshua Bengio, a leading AI researcher who earned the prestigious A.M. Turing Award in 2018, wrote in a post on X on Wednesday that the incident is "deeply concerning." He said agents have shown a willingness to cheat in controlled tests for months, but that "this real-world case should serve as a wake-up call."
"Continuing on the current trajectory of AI development will likely lead to an increase in concrete cases of autonomous cyberattacks as well as other high-risk incidents of misaligned and dangerous AI behaviour," Bengio said. "We urgently need to take action to prevent these situations, rather than attempting to clean up the damage after the fact.
OpenAI said Tuesday that AI is accelerating the discovery and exploitation of vulnerabilities, which means model security and safety need to keep up.
"We are strengthening the containment, monitoring, access controls, and evaluation practices used during model development," the company said.
WATCH: OpenAI chairman Bret Taylor on AI tokenomics, token efficiency`,
    bodyJa: `OpenAIは、自社の人工知能モデルが、オープンソースの開発者プラットフォームHugging Faceに影響を与えた「前例のないサイバーインシデント」の背後にあると述べ、業界全体の研究者を動揺させた。
同社の発表によると、同社のモデル GPT-5.6 Sol と、まだリリースされていないより高機能なモデルの組み合わせが、サンドボックス化されたテスト環境を抜け出し、インターネットにアクセスし、脆弱性を悪用して Hugging Face のシステムにアクセスしたという。
OpenAIは火曜日のブログ投稿で、このモデルは評価を不正にするために使用できる情報を見つけようとしていたが、成功したと述べた。両社はこの事件について積極的に調査を行っている。
ハグ・フェイスは先週、セキュリティ事件を調査していることを明らかにし、当時のリリースで、この事件は「エンドツーエンドで自律型AIエージェント・システムによって引き起こされた」ため特異なものだと述べた。
「私たちは過去 24 時間、@OpenAI チームと緊密に協力してきました（ありがとう！）。彼らに悪意はなかったと強く信じています」と、ハギング フェイス CEO のクレマン・ドゥラング氏は火曜日の X への投稿で述べた。 「これらすべてが自律的に起こったというのは、まったく驚くべきことです！」
OpenAIのライバルであるAnthropicが4月にClaude Mythos Previewと呼ばれる強力な製品をリリースして以来、ウォール街と米国政府はAIモデルの急速に進歩するサイバー能力に注目している。 OpenAIは5月に独自のサイバー製品を導入し、続いて6月には「これまでで最強のサイバーセキュリティモデル」と称するGPT-5.6 Solを導入した。
両社は高度なサイバーモデルのリスクについて警告しており、一部の企業グループや政府機関のみが利用できるように制限する措置を講じている。
投資銀行会社ペレラ・ワインバーグの顧問パートナー、ウォルター・アイザックソン氏は水曜日、自身はAI楽観主義者だと考えているが、ハグ・フェイス事件は「本当に恐ろしい」と考えていると語った。
「これが私にとって本当に怖いことの第一です」と彼はCNBCの「Squawk Box」で語った。
Yoshua Bengio 氏は、権威ある A.M. 賞を受賞した一流の AI 研究者です。 2018年のチューリング賞受賞者は水曜日のXへの投稿で、この事件は「非常に懸念される」と書いた。同氏は、捜査員らは数カ月間、管理された検査で不正行為をする姿勢を示してきたが、「この現実世界の事件は警鐘として機能するはずだ」と述べた。
「AI開発の現在の軌道を継続すると、自律型サイバー攻撃の具体的な事例や、AIの誤った危険な動作によるその他の高リスクの事件が増加する可能性が高い」とベンジオ氏は述べた。 「私たちは、事後的に被害を解決しようとするのではなく、こうした状況を防ぐための措置を早急に講じる必要があります。
OpenAIは火曜日、AIによって脆弱性の発見と悪用が加速しているため、モデルのセキュリティと安全性もそれに追いつく必要があると述べた。
同社は「モデル開発中に使用される封じ込め、監視、アクセス制御、評価手法を強化している」と述べた。
注目: OpenAI 会長のブレット・テイラーが AI トークンノミクス、トークン効率について語る`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/22/open-ai-cyber-models-hack-hugging-face.html",
    publishedAt: "2026-07-22T18:37:37+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "u-s-secret-service-official-threat-envir-928cf75f",
    title: "U.S. Secret Service official: 'Threat environment is the highest we've ever seen'",
    titleJa: "米国シークレットサービス当局者「脅威環境はこれまで見た中で最も高い」",
    summaryJa: "米国シークレットサービス高官は水曜日、ドナルド・トランプ大統領を含むシークレットサービスの保護対象者に対する「脅威環境」は「これまで見た中で最も高い」と述べた。「私たちが今見ているのは、これまで見たことのないものだ」と高官は、公開会見前に名前を明かさないことを条件に背景説明会で記者団に語った。",
    bodyOriginal: `A senior U.S. Secret Service official said Wednesday that the "threat environment" for the agency's protectees, who include President Donald Trump, "is the highest we've ever seen."
"What we're seeing now is something I've never seen before," said the senior official, who spoke to reporters at a background briefing on the condition that they not be identified by name before a public briefing.
There have been about 10,000 cases involving threats to government officials, including Supreme Court justices, so far in 2026, the official said, according to a pool report of the briefing by MS NOW. That represents a 40% increase in such cases over the same period last year.
"They're increasing in volume and complexity," the official said, a week after Supreme Court Justice Amy Coney Barrett told a House subcommittee that the threat level to her and other federal judges "is really high."
The Secret Service has seen the number of mental health committals of people suspected of making threats to protectees spike by a factor of 10, according to the official.
The briefing came ahead of Friday's rescheduled annual dinner for the White House Correspondents' Association at the Waldorf Astoria in Washington. Trump is set to attend the event.
The WHCA's originally scheduled dinner was abruptly suspended in April when a man armed with multiple weapons tried to storm past a security checkpoint inside the Washington Hilton Hotel as Trump was attending the dinner.
The man, Cole Tomas Allen of California, was tackled by Secret Service officers before he could get into the ballroom where Trump and other top administration officials were. Allen has been charged with trying to assassinate Trump.
Matthew Quinn, the Secret Service's deputy director, when asked by a reporter at the public part of the briefing how concerned the agency is about the threat of drones being used to attack protectees, said, "Very."
"Look, the threat's real," Quinn said. "Look at Ukraine ... It's just a matter of time before it comes to the United States."
But Quinn also said that the White House is "very safe from attack."
"The technology that we're deploying, and not just at the White House, at all protected sites, is cutting edge right now," he said.
"The threat continues to get tougher and tougher, you know," Quinn said. "You're talking fiber optic controlled drones now, dark drones. So it's a constant chase to keep up with it. But we're doing a tremendous job to stay ahead of the threat, especially at the White House."
On Tuesday, Trump was asked by a reporter at the White House if he feels safe, considering what have been several attempts on his life.
"I feel safe," the president replied. "Why wouldn't I feel safe?"
Trump narrowly escaped being killed at a campaign rally on July 13, 2024, in Butler, Pennsylvania, when gunman Thomas Crooks opened fire at Trump. An audience member, Corey Comperatore, was killed in the attack, and two other people were seriously injured.
Two months later, a Secret Service officer shot at another gunman who was hiding in shrubs on the perimeter of the Trump International Golf Club in West Palm Beach, Florida.
That gunman, Ryan Routh, was convicted in Florida federal court last September of trying to assassinate Trump, and of other charges.
Routh is serving a life sentence in prison.`,
    bodyJa: `米国シークレットサービス高官は水曜日、ドナルド・トランプ大統領を含むシークレットサービスの保護対象者に対する「脅威環境」は「これまで見た中で最も高い」と述べた。
「私たちが今見ているのは、これまで見たことのないものだ」と高官は、公開会見前に名前を明かさないことを条件に背景説明会で記者団に語った。
MS NOWの会見の総合報告書によると、最高裁判事など政府関係者に対する脅迫事件は2026年現在までに約1万件発生していると当局者は述べた。これは、そのようなケースが前年同期と比べて 40% 増加したことを意味します。
最高裁判事のエイミー・コニー・バレット氏が下院小委員会で、同氏や他の連邦判事に対する脅威のレベルは「非常に高い」と述べてから1週間後、同当局者は「事件の量と複雑さは増大している」と述べた。
同当局者によると、シークレットサービスは、被保護者に対して脅迫を行った疑いのある人々のメンタルヘルスに関する告発件数が10倍に急増しているという。
この会見は、金曜日にワシントンのウォルドーフ・アストリアで予定されていたホワイトハウス特派員協会の年次夕食会に先立って行われた。トランプ氏はイベントに出席する予定だ。
WHCAが当初予定していた夕食会は4月、トランプ大統領が夕食会に出席していた際、複数の武器を持った男がワシントン・ヒルトン・ホテル内の保安検査場を通過しようとしたため、突然中止された。
この男性はカリフォルニア州のコール・トーマス・アレンさんで、トランプ氏や他の政府高官がいる宴会場に入る前にシークレットサービス職員らにタックルされた。アレンはトランプ大統領暗殺未遂の罪で起訴された。
シークレットサービスのマシュー・クイン副長官は、会見の公開部分で記者から、被保護者への攻撃にドローンが使用される脅威について当局がどの程度懸念しているかと問われ、「非常に」と答えた。
「ほら、脅威は現実だ」とクインは言った。 「ウクライナを見てください...それが米国に来るのは時間の問題です。」
しかしクイン氏は、ホワイトハウスは「攻撃から非常に安全」だとも述べた。
「ホワイトハウスだけでなく、すべての保護施設に私たちが導入している技術は現在最先端だ」と同氏は語った。
「脅威はますます厳しくなり続けています」とクイン氏は語った。 「今は光ファイバーで制御されるドローン、つまりダークドローンのことを話している。だから、それに追いつくためには絶え間ない追跡が必要だ。しかし、私たちは、特にホワイトハウスにおいて、脅威の先を行くために多大な仕事をしている。」
火曜日、トランプ大統領はホワイトハウスで記者に、これまで何度か人生を脅かされてきたことを考えると安全だと思うかと質問された。
大統領は「安心している」と答えた。 「どうして私は安心できないのでしょう？」
トランプ氏は2024年7月13日、ペンシルベニア州バトラーで行われた選挙集会で銃撃犯のトーマス・クルックス氏がトランプ氏に向けて発砲し、九死に一生を得た。聴衆のコーリー・コンペラトーレさんがこの襲撃で死亡し、他の2人が重傷を負った。
2か月後、フロリダ州ウェストパームビーチにあるトランプ・インターナショナル・ゴルフクラブの周囲の低木に隠れていた別の銃撃者をシークレットサービス職員が発砲した。
そのガンマン、ライアン・ラウスは、フロリダ州連邦裁判所で昨年9月、トランプ暗殺未遂などの罪で有罪判決を受けた。
ラウスは終身刑で服役中だ。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/22/secret-service-threat-trump-white-house-drones.html",
    publishedAt: "2026-07-22T18:11:36+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "aston-martin-secures-550m-loan-deal-e264d4a9",
    title: "Aston Martin secures £550m loan deal",
    titleJa: "アストンマーティン、5億5000万ポンドのローン契約を締結",
    summaryJa: "アストンマーティン、5億5000万ポンドのローン契約を締結- 公開されました",
    bodyOriginal: `Aston Martin secures £550m loan deal
- Published
Aston Martin has secured £550m in loans as it attempts to boost its finances.
The luxury car maker has been struggling in recent years and in March announced it would cut about 600 jobs, as last year's net losses leapt by a little over 50% to £493.2m.
The firm has blamed the effects of US tariffs and weak demand in China.
Its half-year results are set to be published on 29 July, but on Wednesday the firm announced loans that it said would bolster its balance sheet and fund future product plans.
Headquartered in Gaydon, Warwickshire, most of the job cuts were thought to affect sites in the UK, where the majority of its staff are based.
The company has been burning through cash and at the time it announced the job cuts, Aston Martin said the move would mean annual savings of about £40m.
The funding announced on Wednesday, managed by HPS Investment, includes a £450m senior secured-term loan, which means it is repayable ahead of other creditors and is backed by specific assets.
In addition there is a £100m delayed draw term loan, meaning the funding will be available at specific points, rather than payable upfront.
Experts have said Aston Martin has been operating in an increasingly competitive global market in recent years and was particularly susceptible to reduced demand.
Chief financial officer Doug Lafferty said in a statement: "This new £550m debt financing significantly strengthens our liquidity, providing us with both additional resilience and further flexibility to execute our current and future product plans."
Get in touch
Tell us which stories we should cover in Warwickshire
Follow BBC Coventry & Warwickshire on BBC Sounds, Facebook, external, X, external and Instagram, external.
Related topics
- Published1 March
- Published25 February
- Published6 October 2025`,
    bodyJa: `アストンマーティン、5億5000万ポンドのローン契約を締結
- 公開されました
アストンマーティンは財務強化を図るため、5億5000万ポンドの融資を確保した。
この高級車メーカーは近年苦戦しており、昨年の純損失が50％強増の4億9,320万ポンドに達したため、3月には約600人の人員削減を発表した。
同社は米国の関税の影響と中国の需要低迷が原因だと主張している。
上半期決算は7月29日に発表される予定だが、同社は水曜日、バランスシートを強化し将来の製品計画に資金を提供する融資を発表した。
ウォリックシャー州ゲイドンに本社を置く同社は、人員削減のほとんどが従業員の大半が拠点を置く英国の拠点に影響を及ぼすと考えられている。
同社は資金を使い果たしており、人員削減を発表した時点でアストンマーティンは、この措置により年間約4,000万ポンドの節約になると述べていた。
水曜日に発表されたHPSインベストメントが管理する資金調達には4億5000万ポンドの優先有担保タームローンが含まれており、これは他の債権者に先駆けて返済可能であり、特定の資産に裏付けられていることを意味する。
さらに、1億ポンドの遅延ドロータームローンがあり、これは資金が前払いではなく特定の時点で利用可能になることを意味します。
専門家らは、アストンマーティンは近年、競争が激化する世界市場で事業を展開しており、特に需要減少の影響を受けやすいと述べている。
ダグ・ラファティ最高財務責任者（ＣＦＯ）は声明で「この新たな５億５０００万ポンドの借入により当社の流動性は大幅に強化され、現在および将来の製品計画を実行するための更なる回復力とさらなる柔軟性が得られる」と述べた。
連絡する
ウォリックシャーで取り上げるべきストーリーを教えてください
BBC コベントリーとウォリックシャーを BBC Sounds、Facebook (外部)、X (外部)、Instagram (外部) でフォローしてください。
関連トピック
- 3 月 1 日に公開
- 2 月 25 日発行
- 2025 年 10 月 6 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cjejx083jkeo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-22T18:02:05+00:00",
    category: "自動車",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/67d9/live/56b2dbc0-85f5-11f1-b976-0b9c15b0ccfc.png",
    readTime: 2,
  },
  {
    id: "former-lloyd-s-of-london-boss-s-relation-cd4dec8f",
    title: "Former Lloyd's of London boss's relationship breached rules, firm says",
    titleJa: "ロイズ・オブ・ロンドンの元社長との関係は規則違反だった、と会社が発表",
    summaryJa: "ロイズ・オブ・ロンドンの元社長との関係は規則違反だった、と会社が発表- 公開されました",
    bodyOriginal: `Former Lloyd's of London boss's relationship breached rules, firm says
- Published
Lloyd's of London's former boss's close relationship with another director breached compliance rules, the insurance market has said after an internal investigation.
Former chief executive John Neal and former corporate affairs director Rebekah Clement's relationship was "sufficiently close... that it could be viewed as creating a perceived conflict of interest", the firm said.
Lloyd's said the pair breached compliance rules by not disclosing their relationship but found no conclusive evidence they had a romantic relationship while at Lloyd's.
Neal said all parties can now move on. Clement's lawyer said she is considering legal action.
"Rebekah is hugely disappointed with Lloyd's conduct over the course of this investigation, the nature and length of which have caused her unnecessary stress and significant reputational damage relative to its 'findings'," Clement's lawyer added.
"She is not surprised that Lloyd's found no evidence of an inappropriate relationship with John Neal, nor any evidence of any failings in her promotion. She also co-operated with the investigation throughout.
"Yet, Lloyd's has still chosen to find against Rebekah, on the pretext of 'perception', the source of which was rumour, gossip and innuendo."
Neal said: "I am pleased, but not at all surprised, that the investigation found there was no inappropriate relationship.
"I would have hoped less time and resource had been spent in reaching a conclusion on the central question that was, in truth, never in doubt.
"I am disappointed with the other findings and do not accept them."
Lloyd's said on Wednesday that it first received "certain whistleblowing reports" in November 2023 but that it didn't act on them.
It said its chairman Sir Charles Roxburgh judged this to be a governance failure and informed the Financial Conduct Authority (FCA) about it in October 2025.
Lloyd's said it could not share the nature of these allegations or the identities of the people involved.
In November 2025, Lloyd's said Sir Charles became aware of "new information related to an alleged personal relationship" between Neal and Clement and "immediately launched an expanded investigation into the matter".
Lloyd's said its investigation was hampered by the fact that Neal and Clement had both left the company and refused to answer questions, but Lloyd's said it interviewed nearly 40 witnesses in its probe.
It added that it has kept the FCA informed throughout the process.
Sir Charles said on Wednesday: "Based on the findings of this investigation, we have concluded that the conduct of the former chief executive fell significantly below the standards expected of him."
He added the investigation "established serious failings in the governance standards and in following processes, most worryingly in the handling of whistleblowing reports. These were serious failures that should never have been allowed to happen."
Lloyd's history as a City institution stretches back well over 300 years, with its first recorded mention appearing in 1688.
Related topics
- Published8 November 2023`,
    bodyJa: `ロイズ・オブ・ロンドンの元社長との関係は規則違反だった、と会社が発表
- 公開されました
ロイズ・オブ・ロンドンの元社長と別の取締役との親密な関係がコンプライアンス規定に違反していたと保険市場が内部調査の結果発表した。
同社は、元最高経営責任者ジョン・ニール氏と元企業業務部長レベッカ・クレメント氏の関係は「利益相反を生じさせているとみなされるほど十分に緊密だった」と述べた。
ロイズは、二人が関係を公表しなかったことはコンプライアンス規則に違反したが、ロイズ在籍中にロマンチックな関係があった決定的な証拠は見つからなかったと述べた。
ニール氏は、これですべての当事者が先に進むことができると述べた。クレメントさんの弁護士は、法的措置を検討していると述べた。
「レベッカは、この捜査の過程におけるロイドの行為に非常に失望している。捜査の性質と長さが、彼女に不必要なストレスを与え、その『調査結果』に関連して重大な評判を傷つけた」とクレメントの弁護士は付け加えた。
「彼女は、ロイズ社がジョン・ニールとの不適切な関係の証拠も、彼女の昇進に何らかの失敗があったという証拠も見つけられなかったことには驚かなかった。また、彼女は捜査にも全面的に協力した。
「それでもロイド社は、噂、ゴシップ、ほのめかしを源とした『思い込み』を口実に、レベッカを告発することを選んだのです。」
ニールさんは「調査の結果、不適切な関係がなかったことが判明したことには満足しているが、まったく驚いてはいない」と述べた。
「実のところ、決して疑いの余地のない中心的な問題について結論を出すのに、もっと短い時間とリソースが費やされていればよかったと思う。
「他の調査結果には失望しており、受け入れられません。」
ロイズは水曜日、2023年11月に初めて「特定の内部告発報告」を受け取ったが、それに基づいて行動しなかったと述べた。
同会長のチャールズ・ロクスバーグ卿はこれをガバナンスの失敗と判断し、2025年10月に金融行動監視機構（FCA）に通知したと述べた。
ロイズは、これらの申し立ての内容や関係者の身元については共有できないと述べた。
ロイズ社は、2025年11月にチャールズ卿がニールとクレメントの「個人的関係の疑いに関する新たな情報」に気づき、「ただちにこの件について拡大調査を開始した」と述べた。
ロイズは、ニール氏とクレメント氏がともに退職し、質問に答えることを拒否したという事実により捜査が妨げられたと述べたが、ロイズは捜査の過程で４０人近くの証人に聞き取りを行ったと述べた。
プロセス全体を通してFCAに情報を提供し続けたと付け加えた。
チャールズ卿は水曜日、「今回の調査結果に基づき、元最高経営責任者の行為は期待される基準を大幅に下回っていたと結論付けた」と述べた。
同氏はさらに、今回の調査で「ガバナンス基準とその後のプロセスに重大な欠陥があったことが明らかになり、最も憂慮すべきは内部告発の扱いにある」と付け加えた。これらは決して許されるべきではなかった重大な失敗でした。」
市の施設としてのロイドの歴史は 300 年以上に遡り、記録に初めて記載されたのは 1688 年です。
関連トピック
- 2023 年 11 月 8 日公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cre48d34ewzo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-22T17:08:53+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/4fb1/live/cb44b810-85d6-11f1-a532-1906bca6e773.jpg",
    readTime: 3,
  },
  {
    id: "tesla-set-to-report-second-quarter-resul-e4c997a2",
    title: "Tesla set to report second-quarter results after the bell",
    titleJa: "テスラ、鐘の後に第2四半期決算を発表予定",
    summaryJa: "テスラは、車両納入台数が前年比25％増加したと報告してから3週間後、水曜日の鐘の後に第2四半期決算を発表する予定だ。LSEGが調査したアナリストの推計によると、ウォール街は次のように予想している。",
    bodyOriginal: `Tesla is set to announce second-quarter results after the bell on Wednesday, three weeks after reporting a 25% year-over-year increase in vehicle deliveries.
Here's what Wall Street expects, according to estimates from analysts polled by LSEG:
- Earnings per share: 51 cents expected
- Revenue: $25.71 billion expected
Tesla's earnings report lands in the midst of a steep decline in its stock price, which is down about 10% this month and 16% for the year. That slide has coincided with a drop in SpaceX, Elon Musk's other trillion-dollar company, which held a record market debut in June and has lost almost 40% of its value since its peak close.
For Tesla, the dip has come despite signs of a rebound in its core auto business. In early July, the company reported vehicle deliveries that topped 480,000, exceeding exceeding analysts' expectations.
Tesla is trying to recover from consecutive years of declining deliveries, largely due to competition from Chinese automakers, including BYD, Nio and Xiaomi, that are offering affordable but high-tech EVs in markets beyond the U.S. Some car buyers have boycotted Tesla in response to Musk's incendiary political rhetoric and work with the Trump administration.
Soaring gas prices resulting from the U.S. war in Iran boosted Tesla sales in the first half of the year, with European car buyers purchasing more EVs.
In the second-quarter, Tesla started selling lower-cost versions of its Model 3 and Model Y vehicles, and made its premium driver assistance system, marketed as Full Self-Driving (Supervised) in the U.S., available in some European markets.
But Musk has shifted the focus of the company away from vehicle sales and toward its driverless Robotaxi service, ramping production of the company's driverless Cybercab, and remaking older factory lines in Fremont, California, to start manufacturing Optimus humanoid robots. He's promised shareholders and fans an AI-powered robot that will be able to step in as a babysitter, factory worker or world-class surgeon.
"I think Optimus will be our biggest product, not just Tesla's biggest product ever, but probably the biggest product ever," Musk said on the company's last earnings call in April.
Paul Miller, an analyst at Forrester, told CNBC in an email that Tesla leadership has made "plenty of big claims about autonomous mobility and physical AI over the years," but missed on some "bolder bets."
Musk told investors in 2019 that there would be 1 million Tesla robotaxis on the road by 2020. Last year, he said the company's autonomous ride-hailing services would cover "probably half the population of the U.S." by the end of 2025. And at the World Economic Forum in Davos earlier this year, Musk said Tesla Robotaxis would be "very, very widespread" domestically by the end of this year, a target that remains far off.
In robotaxis, Tesla is way behind Alphabet's Waymo in the U.S. and Baidu's Apollo Go in China. And in the humanoid robot market, where Tesla is still developing its product, the company faces competition from companies including China's Unitree, Boston Dynamics, Agility Robotics, Apptronik and London-based startup Humanoid.
On Wednesday's conference call, investors will be looking for updates on robotics and driverless technology, and how Musk expects Tesla and SpaceX to work together, including on Terafab, a massive chip factory the companies plan to jointly build and run with Intel in Texas.`,
    bodyJa: `テスラは、車両納入台数が前年比25％増加したと報告してから3週間後、水曜日の鐘の後に第2四半期決算を発表する予定だ。
LSEGが調査したアナリストの推計によると、ウォール街は次のように予想している。
- 1 株当たり利益: 51 セントの予想
- 収益: 257 億 1,000 万ドルの見込み
テスラの決算報告は株価の急落の真っただ中にあり、今月は約10％、年間では約16％下落した。この下落はイーロン・マスク氏のもう一つの兆ドル企業であるスペースXの下落と同時に起きた。スペースXは6月に記録的な市場デビューを果たし、最高値終値以来その価値の約40％を失った。
テスラにとっては、中核の自動車事業に回復の兆しがあるにもかかわらず、落ち込みが生じた。同社は7月上旬、納車台数が48万台を超え、アナリストの予想を上回ったと報告した。
テスラは、長年にわたる納車台数の減少から回復しようとしているが、これは主に、米国外の市場で手頃な価格ながらハイテクなEVを提供しているBYD、ニオ、シャオミなどの中国自動車メーカーとの競争によるものである。一部の自動車購入者は、マスク氏の扇動的な政治的発言やトランプ政権への協力に反発して、テスラをボイコットしている。
米国のイラン戦争によるガソリン価格の高騰により、欧州の自動車購入者がより多くのEVを購入し、今年上半期のテスラの販売が増加した。
第2四半期にテスラは、モデル3とモデルYの低価格バージョンの販売を開始し、米国では完全自動運転（監視付き）として販売されているプレミアム運転支援システムを一部の欧州市場でも利用できるようにした。
しかしマスク氏は同社の焦点を車両販売から無人ロボタクシーサービスに移し、無人サイバーキャブの生産を増やし、カリフォルニア州フリーモントの古い工場ラインを作り直してオプティマス人型ロボットの製造を開始した。彼は株主やファンに対し、ベビーシッター、工場労働者、あるいは世界クラスの外科医として活躍できるAI搭載ロボットを約束した。
「オプティマスは当社の最大の製品になると思う。テスラ史上最大の製品というだけでなく、おそらく史上最大の製品になるだろう」とマスク氏は4月の最後の決算会見で語った。
フォレスター社のアナリスト、ポール・ミラー氏はCNBCに電子メールで、テスラの経営陣は「長年にわたって自動運転モビリティと物理的AIについて多くの大きな主張」をしてきたが、いくつかの「大胆な賭け」を逃してきたと語った。
マスク氏は2019年に投資家に対し、2020年までに100万台のテスラロボタクシーが走行するようになると語った。昨年、同社の自動運転配車サービスは「おそらく米国の人口の半分」をカバーすると述べた。そして今年初めにダボスで開催された世界経済フォーラムでマスク氏は、テスラ・ロボタクシーが今年末までに国内で「非常に普及する」だろうと述べたが、その目標は依然として遠い。
ロボタクシーの分野では、テスラは米国のアルファベットのウェイモや中国の百度のアポロゴーに大きく遅れをとっている。そして、テスラが製品開発を続けている人型ロボット市場では、同社は中国のユニツリー、ボストン・ダイナミクス、アジリティ・ロボティクス、アプトロニック、ロンドンを拠点とする新興企業ヒューマノイドなどの企業との競争に直面している。
水曜日の電話会議で、投資家らはロボット工学や無人運転技術に関する最新情報や、テスラとスペースXがテキサス州でインテルと共同で建設・運営する予定の巨大チップ工場「テラファブ」など、テスラとスペースXがどのように協力することをマスク氏が期待しているかについての最新情報を求めているだろう。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/22/tesla-tsla-q2-2026-earnings-report.html",
    publishedAt: "2026-07-22T16:00:01+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
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
