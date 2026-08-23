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
    id: "the-estrangement-isn-t-about-politics-m-6afb6054",
    title: "‘The estrangement isn’t about politics’: My daughter hasn’t spoken to me for 4 years. Do I leave her a monthly annuity?",
    titleJa: "「疎遠の原因は政治ではありません」: 娘は 4 年間私と話をしていません。彼女に毎月の年金を残すべきでしょうか？",
    summaryJa: "「彼女には愛、サポート、そしてチャンスがあったと言ったら、信じてもらう必要があります。」",
    bodyOriginal: `“You’ll have to trust me when I tell you that she had love, support and opportunities.”`,
    bodyJa: `「彼女には愛、サポート、そしてチャンスがあったと言ったら、信じてもらう必要があります。」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/its-truly-a-tragedy-my-daughter-hasnt-spoken-to-me-for-4-years-but-it-has-nothing-to-do-with-politics-86c4bcf6?mod=mw_rss_topstories",
    publishedAt: "2026-08-22T20:45:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-15274705",
    readTime: 2,
  },
  {
    id: "paramount-california-ag-office-reportedl-266355b5",
    title: "Paramount, California AG office reportedly plan to meet Monday to discuss settling WBD lawsuit",
    titleJa: "カリフォルニア州パラマウントのAG事務所は月曜日に会合を開き、WBD訴訟の和解について話し合う予定だと伝えられている",
    summaryJa: "パラマウントとカリフォルニア州事務所は月曜日に会合を開き、パラマウントとワーナー・ブラザース・ディスカバリーの契約をめぐる独禁法訴訟の和解について話し合う予定だ。",
    bodyOriginal: `Paramount Skydance representatives are reportedly meeting on Monday with the California attorney general's office to discuss a path to a potential settlement of the antitrust lawsuit seeking to block Paramount's takeover of Warner Bros. Discovery, The New York Times reported Saturday.
Pressure to settle the suit has grown in recent weeks as California Gov. Gavin Newsom, Los Angeles Mayor Karen Bass, and the Directors' Guild of America, among others, have called for a settlement. However, there are no assurances that this latest set of talks will lead to meaningful negotiations toward a settlement, the Times reported, citing people briefed on the upcoming discussions.
On Thursday, California Attorney General Rob Bonta told CNBC's David Faber that the acquisition would require "robust structural remedies" to reach a settlement in the antitrust case.
″[Paramount] wanted to talk about everything except for what this case is about. They want to talk about the streaming market, which we don't allege in our complaint. They want to talk about CNN, which is not a focus of our complaint. They want to talk about the foreign regulators. We want to talk about the three markets that we set forth in our complaint, where we think there's antitrust violation," Bonta said on CNBC.
A group of 12 state attorneys general filed a lawsuit in July challenging the proposed $110 billion acquisition that would combine two of the most storied film studios in Paramount and Warner Bros., as well as streaming platforms Paramount+ and HBO Max. The potential deal would create the largest portfolio of TV networks in the U.S.
"The unlawful merger of these two entertainment behemoths would lead to higher prices, lower quality, and less content for film and television, harming movie theaters, basic cable distributors, and ultimately, audiences on every sofa and movie theater seat in the U.S.," Bonta said in a release at the time announcing the lawsuit.
Paramount had previously agreed to delay the acquisition to as late as June 2027 due to the legal challenge, and a trial is set for March. However, if the deal is delayed beyond Sept. 30, Paramount will owe Warner Bros. Discovery shareholders a "ticking fee" that could amount to roughly $650 million in cash value every quarter, according to previous CNBC reporting. Should the deal fall apart entirely, Paramount would owe WBD a $7 billion breakup fee.
In June, the antitrust division of the U.S. Department of Justice cleared the proposed merger. European antitrust regulators also granted their approval for the deal in July.
However, U.S. state officials, as well as the Writers Guild of America and several prominent Hollywood actors and actresses, have argued that the merger would not only reduce competition but result in job losses in the entertainment industry.
Read the complete New York Times article here.
— CNBC's Lillian Rizzo contributed to this report.`,
    bodyJa: `パラマウント・スカイダンスの代表者らは、パラマウントによるワーナー・ブラザース・ディスカバリー買収阻止を求める独占禁止法訴訟の和解に向けた道筋について話し合うため、月曜日にカリフォルニア州司法長官事務所と面会しているとニューヨーク・タイムズ紙が土曜日に報じた。
カリフォルニア州知事のギャビン・ニューサム氏、ロサンゼルス市長のカレン・バス氏、全米映画監督協会などが和解を求めており、訴訟の和解を求める圧力はここ数週間で高まっている。しかし、タイムズ紙は今後の協議について説明を受けた関係者の話として、今回の一連の協議が和解に向けた有意義な交渉につながるという保証はない、と報じた。
木曜日、カリフォルニア州司法長官ロブ・ボンタはCNBCのデビッド・フェーバーに対し、独占禁止法訴訟で和解に達するには買収には「強力な構造的救済策」が必要になると語った。
「[パラマウント]は、この訴訟の内容以外のすべてについて話したいと考えていました。彼らはストリーミング市場について話したいのですが、私たちは訴状ではそれを主張していません。彼らは CNN について話したいのですが、それは私たちの苦情の焦点では​​ありません。彼らは外国の規制当局について話したいのです。私たちは告訴状に記載した独占禁止法違反があると思われる3つの市場について話したい」とボンタ氏はCNBCで語った。
州司法長官12人からなるグループは7月、パラマウントとワーナー・ブラザースの最も歴史ある映画スタジオ2社とストリーミングプラットフォームのパラマウント+とHBOマックスを統合する1100億ドルの買収案に異議を唱え訴訟を起こした。この提携により、米国で最大のテレビネットワークのポートフォリオが構築される可能性がある。
ボンタ氏は訴訟を発表した当時のリリースで、「この二つの巨大エンターテインメント企業の不法合併は、映画やテレビの価格の高騰、品質の低下、コンテンツの減少につながり、映画館や基本的なケーブル配信会社、そして最終的には米国内のすべてのソファや映画館の座席に座る観客に損害を与えることになるだろう」と述べた。
パラマウントは以前、法的異議申し立てを理由に買収を2027年6月まで延期することに同意しており、裁判は3月に予定されている。しかし、CNBCの以前の報道によると、買収が9月30日を超えて延期された場合、パラマウントはワーナー・ブラザース・ディスカバリーの株主に対し、四半期ごとに現金換算で約6億5000万ドルに達する可能性がある「ティッキングフィー」を支払うことになる。契約が完全に決裂した場合、パラマウントはWBDに対し70億ドルの違約金を支払う義務がある。
6月に米国司法省の反トラスト部門は合併案を認可した。欧州の独占禁止規制当局も７月にこの取引を承認した。
しかし、米国の州当局者、全米脚本家組合、ハリウッドの著名な俳優や女優らは、合併は競争を減らすだけでなく、エンターテインメント業界の雇用喪失を招くと主張している。
ニューヨーク・タイムズの記事全文はこちらからお読みください。
— CNBC の Lillian Rizzo がこのレポートに寄稿しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/22/paramount-california-ag-said-to-plan-meeting-on-settling-wbd-suit-.html",
    publishedAt: "2026-08-22T20:34:13+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "canada-announces-retaliatory-tariffs-on-1619f937",
    title: "Canada announces retaliatory tariffs on U.S. goods after trade talks break down",
    titleJa: "カナダ、通商交渉決裂を受け米国製品に報復関税を発表",
    summaryJa: "カナダのマーク・カーニー首相は土曜日、同国が米国製品に「ドル対ドル」関税を課すことを発表した。これは両国間の貿易協議が決裂したことを受けての報復措置である。",
    bodyOriginal: `Canadian Prime Minister Mark Carney on Saturday announced his country would impose “dollar-for-dollar” tariffs on U.S. goods — a retaliatory measure after trade talks between the two nations broke down.`,
    bodyJa: `カナダのマーク・カーニー首相は土曜日、同国が米国製品に「ドル対ドル」関税を課すことを発表した。これは両国間の貿易協議が決裂したことを受けての報復措置である。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/canada-announces-retaliatory-tariffs-on-u-s-goods-after-trade-talks-break-down-45081c2f?mod=mw_rss_topstories",
    publishedAt: "2026-08-22T20:31:00+00:00",
    category: "貿易",
    imageUrl: "https://images.mktw.net/im-32140862",
    readTime: 2,
  },
  {
    id: "nvidia-customers-reportedly-warned-about-b4d26ac3",
    title: "Nvidia customers reportedly warned about AI-related price hikes",
    titleJa: "Nvidiaの顧客はAI関連の価格高騰について警告していると伝えられている",
    summaryJa: "Nvidia Corp.の最高経営責任者であるジェンセン・フアン氏は、2026年7月16日木曜日、日本の東京で開催された同社の「ジャパンAIエコシステム」レセプション後、メディア関係者に語った。太田 清 |ブルームバーグ |ゲッティイメージズ",
    bodyOriginal: `Jensen Huang, chief executive officer of Nvidia Corp., speaks to members of the media following the company's "Japan AI Ecosystem" reception in Tokyo, Japan, on Thursday, July 16, 2026.
Kiyoshi Ota | Bloomberg | Getty Images
Nvidia plans to hike prices for some of its largest customers, Bloomberg News reported Saturday.
The chipmaker is set to increase the cost of servers containing its artificial intelligence chips, including Vera Rubin and Grace Blackwell, by more than 15% in many cases, according to the outlet. The price gains will reportedly depend on the chip generation and memory configurations.
Customers can expect the price increase to take effect on systems shipped next year, Bloomberg said.
Nvidia has been facing the soaring costs of memory chips, which are essential for its GPUs and systems.`,
    bodyJa: `Nvidia Corp.の最高経営責任者であるジェンセン・フアン氏は、2026年7月16日木曜日、日本の東京で開催された同社の「ジャパンAIエコシステム」レセプション後、メディア関係者に語った。
太田 清 |ブルームバーグ |ゲッティイメージズ
Nvidiaは一部の大口顧客向けに価格を引き上げることを計画しているとブルームバーグニュースが土曜日に報じた。
同報道によると、同社はベラ・ルービン氏やグレース・ブラックウェル氏を含む人工知能チップを搭載したサーバーのコストを多くの場合15％以上値上げする予定だという。価格上昇はチップの世代とメモリ構成に依存すると伝えられている。
ブルームバーグによると、顧客は来年出荷されるシステムから値上げが実施されることが期待できるという。
Nvidiaは、自社のGPUやシステムに不可欠なメモリチップのコストの高騰に直面している。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/22/nvidia-customers-reportedly-warned-about-ai-related-price-hikes-.html",
    publishedAt: "2026-08-22T20:26:44+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "carney-calls-trump-s-fresh-tariffs-a-mis-5d3d5865",
    title: "Carney calls Trump's fresh tariffs a 'miscalculation' after trade talks collapse",
    titleJa: "カーニー氏、通商協議決裂後、トランプ大統領の新たな関税は「誤算」と発言",
    summaryJa: "カーニー氏、通商協議決裂後、トランプ大統領の新たな関税は「誤算」と発言- 公開されました",
    bodyOriginal: `Carney calls Trump's fresh tariffs a 'miscalculation' after trade talks collapse
- Published
Prime Minister Mark Carney has said a fresh wave of US tariffs on Canada is a "miscalculation" designed to "hurt and divide us", after trade talks collapsed late on Friday.
"They asked too much and they offered too little," Carney told Canadians on Saturday morning, adding the country was now in a trade "war" after being hit with punishing new US duties.
The prime minister confirmed he would match US tariffs "dollar-for-dollar" from 8 September, including levies on steel, dairy, appliances and electronics.
The collapse of the trade talks upends a deeply integrated trading relationship between two allies, with no clear path to resolution.
US President Donald Trump has yet to comment.
Both countries were optimistic of a deal earlier in the week, but talks fell apart after both sides accused the other of making last-minute changes.
Now that talks have broken down, Canada has been hit with new 50% US tariffs on a range of Canadian goods, in addition to existing US tariffs on Canadian steel, aluminium, automobiles and lumber.
The new tariffs are limited in scope, covering about $20bn (£15bn; C$28bn) of Canadian imports, or about 5% in total, including wine, dairy, cement, clothing and hockey equipment.
The prime minister said Canada was retaliating "reluctantly" to protect its interests. Details of the counter-measures will be released in the coming days, he said.
Leaders of other federal parties in Canada, including the Conservative opposition, voiced support for the prime minister, as have the leaders of some Canadian provinces.
Tariffs - a tax placed on imports from other countries - have been a key component of Trump's trade policy, with the US president arguing they will boost American manufacturing and create jobs at home.
Critics, however, say tariffs have raised prices for American consumers and have disrupted and damaged the global economy.
Carney faces crucial test after walking away from Trump's deal
- Published5 hours ago
Carney's speech on Saturday was his first address to Canadians after he announced late on Friday night that a deal would not be reached, accusing the Americans of making "last-minute changes" that were "unfair" and "uneconomic".
US negotiators, meanwhile, accused Canada of making "new demands and walk backs" on terms which had been previously agreed.
On Saturday, US trade representative Jamieson Greer told Fox News there were no plans to resume talks.
He added that the US had been prepared to cut some of its tariffs on Canada as part of the ill-fated deal.
Carney, however, said the US presented "unacceptable" terms that were too restrictive, including curbing Canada's ability to strike new trade deals with other countries.
He also rejected the assertion that Canada had made last-minute requests: "We clarified what was on offer and were continually disappointed by the answers."
Doug Ford, the leader of Canada's most populous province Ontario, backed Carney and said Trump "can't be trusted".
British Columbia Premier David Eby said the US demand for restrictions on Canada's ability to have other trade deals "would reduce us to the economic equivalent of the 51st state".
"It was never acceptable to Canadians," Eby said.
The Conservative opposition leader Pierre Poilievre also appeared to support Carney, calling the latest US levies "unjustified".
Quebec's premier, Christine Fréchette, warned jobs would likely be lost as a result of the new US tariffs.
"Behind these numbers are real people," she said, vowing to introduce measures to support impacted sectors.
Alberta Premier Danielle Smith, whose oil-rich province has worked to make inroads with the Trump administration, urged both sides to resume talks.
The collapse comes after more than a year of on-again, off-again trade talks, which intensified in recent weeks after a US-imposed deadline to strike a deal or face further tariffs.
The two countries were also engaged in a mandatory review of an existing North American free trade agreement, known as USMCA, with Mexico.
The pact was signed by Trump during his first term to replace the 1994 North American Free Trade Agreement. It underpins $1.6tn (£1.2tn) in annual trilateral trade across Canada, the US and Mexico.
Earlier this summer, Canada and Mexico had formally requested for USMCA to be renewed for another 16 years. The US, however, declined to renew it in its current form.
Asked how Friday's trade talk collapse would impact the North American free trade pact, Carney said it was "certainly not good news".
Related topics
- Published13 hours ago`,
    bodyJa: `カーニー氏、通商協議決裂後、トランプ大統領の新たな関税は「誤算」と発言
- 公開されました
マーク・カーニー首相は、金曜日遅くに通商協議が決裂したことを受け、米国の対カナダ関税の新たな波は「我々を傷つけ、分断する」ことを目的とした「誤算」だと述べた。
カーニー首相は土曜午前、カナダ国民に対し「彼らは要求が多すぎ、提供が少なすぎた」と語り、同国は現在、米国の新たな罰則に見舞われた後、貿易「戦争」に陥っていると付け加えた。
首相は、鉄鋼、乳製品、電化製品、エレクトロニクス製品への課税を含む米国の関税を9月8日から「1ドル単位」で適用することを確認した。
通商交渉の決裂は、同盟国間の深く統合された通商関係をひっくり返し、解決への明確な道筋はない。
ドナルド・トランプ米大統領はまだコメントしていない。
両国は週初めに合意に楽観的だったが、双方が相手が土壇場で変更を加えたと非難し、協議は決裂した。
交渉が決裂した今、カナダはカナダの鉄鋼、アルミニウム、自動車、木材に対する米国の既存関税に加え、カナダの幅広い製品に対して新たに50％の米国関税を課せられている。
新たな関税の範囲は限定されており、ワイン、乳製品、セメント、衣料品、ホッケー用具など、カナダからの輸入品の約200億ドル（150億ポンド、280億カナダドル）、または総額の約5％が対象となる。
首相は、カナダは自国の利益を守るために「仕方なく」報復していると述べた。対抗措置の詳細は数日以内に発表されるだろうと同氏は述べた。
野党保守党を含むカナダの他の連邦政党の指導者も、カナダの一部の州の指導者と同様に首相への支持を表明した。
関税（他国からの輸入品に課される税金）はトランプ大統領の通商政策の重要な要素であり、米国大統領は関税が米国の製造業を促進し、国内での雇用を創出すると主張している。
しかし、批評家たちは、関税が米国の消費者の価格を引き上げ、世界経済を混乱させ、損害を与えていると主張している。
カーニー氏、トランプ大統領との合意離脱で重大な試練に直面
- 5 時間前に公開
土曜日のカーニー氏の演説は、カーニー氏が金曜夜遅くに合意に達しないと発表し、米国人が「不公平」かつ「非経済的」な「土壇場での変更」を行ったと非難して以来、カナダ国民に向けた初めての演説となった。
一方、米国の交渉担当者らは、カナダが以前に合意された条件に対して「新たな要求とウォークバック」を行っていると非難した。
土曜日、ジェイミーソン・グリア米通商代表はFOXニュースに対し、協議を再開する計画はないと語った。
同氏は、米国は不運な合意の一環として対カナダ関税の一部を引き下げる用意があったと付け加えた。
しかしカーニー長官は、米国が他国と新たな通商協定を結ぶカナダの能力の抑制など、あまりにも限定的すぎる「受け入れられない」条件を提示したと述べた。
同氏はまた、カナダが土壇場になって要求を行ったという主張を否定し、「我々は提案内容を明確にしたものの、その回答には常に失望していた」と述べた。
カナダで最も人口の多いオンタリオ州のリーダー、ダグ・フォード氏はカーニー氏を支持し、トランプ氏は「信頼できない」と述べた。
ブリティッシュコロンビア州のデビッド・イービー首相は、カナダが他の貿易協定を結ぶ能力に対する制限を求める米国の要求は「カナダを51番目の州と経済的に同等に引き下げるだろう」と述べた。
「カナダ人には決して受け入れられなかった」とイービー氏は語った。
保守党野党党首ピエール・ポイエーブル氏もカーニー氏を支持する姿勢を示し、米国の最新の賦課金は「不当」だと主張した。
ケベック州のクリスティーヌ・フレシェット首相は、米国の新たな関税の結果、雇用が失われる可能性が高いと警告した。
「これらの数字の背後には実際の人々がいる」と彼女は述べ、影響を受けるセクターを支援する措置を導入することを誓った。
石油資源が豊富な州であるアルバータ州のダニエル・スミス首相は、トランプ政権への食い込みに努めてきたが、双方に協議再開を促した。
この決裂は、1年以上にわたって断続的な通商交渉を経て起きたもので、米国が合意を結ぶか追加関税を課す期限を設けたことを受けて、ここ数週間で交渉は激化した。
両国はまた、USMCAとして知られるメキシコとの既存の北米自由貿易協定の強制的な見直しにも取り組んでいた。
この協定は、1994年の北米自由貿易協定に代わるものとして、トランプ大統領の1期目に署名された。これは、カナダ、米国、メキシコにわたる年間1.6兆ドル（1.2兆ポンド）の三国間貿易を支えています。
今夏の初め、カナダとメキシコはUSMCAをさらに16年間更新するよう正式に要請していた。しかし、米国は現在の形で更新することを拒否した。
金曜日の通商協議決裂が北米自由貿易協定にどのような影響を与えるかとの質問に対し、カーニー総裁は「確かに良いニュースではない」と述べた。
関連トピック
- 13 時間前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cx272np7vgyo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-22T20:10:00+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/336c/live/7ee35600-9e56-11f1-92d9-fda6ee78d386.jpg",
    readTime: 5,
  },
  {
    id: "carney-faces-crucial-test-after-walking-93f6b58f",
    title: "Carney faces crucial test after walking away from Trump's deal",
    titleJa: "カーニー氏、トランプ大統領との合意離脱で重大な試練に直面",
    summaryJa: "カーニー氏、トランプ大統領との合意離脱で重大な試練に直面- 公開されました",
    bodyOriginal: `Carney faces crucial test after walking away from Trump's deal
- Published
The United States and Canada have entered into uncharted territory.
The longtime allies and economic partners, who have enjoyed free trade for decades, are now in an escalating trade war with no clear off ramp.
And for Prime Minister Mark Carney, the late night decision to suspend talks with President Donald Trump and to retaliate instead of agreeing to a deal that seemed in reach will be a significant political test.
He is one of the first world leaders to walk away from the negotiating table with the White House - and the outcome will be closely watched.
Both sides have blamed last-minute changes for torpedoing the tentative deal, with Carney saying the US "asked too much" and "offered too little".
Carney's decision will challenge the appetite among Canadians to accept some economic pain as Ottawa pushes for more US concessions.
After rejecting Trump's high pressure tactics, and in choosing to hit back against the latest duties, Carney will need to convince Canadians that the economic pain is worth the cost of standing up to the Trump administration in search of a better agreement in the long run.
In remarks on Saturday, he said "we take this step confident this is in the best interest of Canada" and accused the US of a "power play" by seeking eleventh-hour changes.
Asked by a reporter whether the US and Canada were locked in a trade war, he replied: "You're at war when you're attacked - we got attacked."
Switching to French, he said the spiralling trade dispute "wasn't our choice", adding: "Canada is strong, Canada is ready, Canada is united."
There is no doubt this will cause pain on both sides of the border, with business facing more pressure from US duties and Canadian counter-tariffs.
Canada sends about 70% of its exports to the US, and the country is the top trading partner for a number of US states, with Michigan, Kentucky, Indiana and Ohio among the most exposed.
Carney came to power with a call for "elbows up" - an ice-hockey term for an aggressive approach - vowing to fight for Canada in the face of a Trump administration keen to exert economic pressure for its America First agenda.
Many Canadians have told pollsters that they are willing to fight.
A recent survey by Abacus Data suggested that around 36% of Canadians would support retaliating to US tariffs, while a Leger poll indicated that 56% of Canadians want the federal government to take a hard line and make no more concessions.
Canadians frustrated with the US tariffs have already chosen to avoid travelling there. The boycott has meant a loss of about C$3.3bn ($2.35bn; £1.75bn) in travel revenue for the US last year.
A decision by most provinces to remove US alcohol from store shelves has hammered that sector.
Based on US government trade data, US wine exports to Canada fell 78% year over year, a $357m loss in export value. The US distillers association reported similar numbers - saying provincial bans have caused exports of American spirits to drop by more than 70%.
The ban quickly became a point of frustration for the Trump administration.
Canada’s prime minister will also need to convince the provinces who have been less affected by the US trade dispute so far that walking away is a risk worth taking.
He briefed them on Saturday on the current state of affairs, and for now, they are showing a united front.
British Columbia Premier David Eby said he was committed to the "national project we are on", while Ontario Premier Doug Ford said "we didn't start this fight but I can assure you. we're going to win this fight".
Canada says it will match US tariffs 'dollar for dollar' as trade talks break down
- Published13 hours ago
Carney calls Trump's fresh tariffs a 'miscalculation' after trade talks collapse
- Published5 hours ago
What went wrong?
For a week, it seemed that a deal between Washington and Ottawa was in reach.
It's still unclear exactly how the talks fell apart in the final hours, but by all accounts it came down to the wire.
Carney said that late US proposed terms "were unfair, uneconomic, and called into question the reliability of any deal".
He added on Saturday those terms included demands on the automobile sector and "unacceptable" restrictions on trade deals with other countries.
In one biting line, he said of the Trump administration: "We recognise sometimes its signature is written in pencil".
US trade representative Jamieson Greer, meanwhile, pointed to "new demands and walk backs of other commitments by Canada".
In a statement on Friday, the Distilled Spirits Council of the United States suggested "Canadian provinces' continued refusal to return US spirits products to store shelves has led to this outcome".
There were also reports by Canadian media, external that US Commerce Secretary Howard Lutnick, was unhappy with the deal. The BBC has contacted his office for comment.
And as details on an interim trade agreement with the US trickled out over last week, some provincial leaders, industry groups and political opponents raised concerns that the prime minister had not delivered on the fight he promised - though Carney denied that swayed his thinking.
Ford, usually one of the most vocal Canadian politicians on US tariffs, had been silent on the tentative deal all week. But in a letter sent to Carney, he raised concerns that an agreement under pressure would “embolden the United States to seek concession after concession".
The province, which has a large manufacturing and vehicle sector, has been among the hardest hit regions in this trade dispute.
Conservative opposition leader Pierre Poilievre said that any agreement that included "one-sided" tariffs on Canadian industry would be "a bad deal".
On Saturday, he backed Carney's decision to walk away for now, saying: "Canada cannot accept one-sided tariffs that will de-industrialise our country."
The collapse of this agreement calls into questions the future of such talks, including an ongoing review of the US-Mexico-Canada free trade pact.
Now Carney - and Canada - must wait to see how Trump responds.`,
    bodyJa: `カーニー氏、トランプ大統領との合意離脱で重大な試練に直面
- 公開されました
米国とカナダは未知の領域に足を踏み入れた。
何十年にもわたって自由貿易を享受してきた長年の同盟国と経済パートナーは現在、明確な出口の見えないまま激化する貿易戦争の中にある。
そしてマーク・カーニー首相にとって、ドナルド・トランプ大統領との会談を中止し、手が届きそうな合意に合意する代わりに報復するという深夜の決定は、重大な政治的試練となるだろう。
同氏はホワイトハウスとの交渉のテーブルから降りた最初の世界指導者の一人であり、その結果が注目される。
双方とも、土壇場の変更が暫定合意を台無しにしたと非難しており、カーニー氏は米国が「要求しすぎた」一方で「提供が少なすぎた」と述べた。
オタワが米国にさらなる譲歩を求めるなか、カーニー長官の決定は、ある程度の経済的苦痛を受け入れようとするカナダ国民の意欲に挑戦することになるだろう。
カーニー氏はトランプ大統領の高圧戦術を拒否し、最近の関税に反撃する選択をした上で、経済的苦痛は長期的にはより良い合意を求めてトランプ政権に立ち向かうコストに見合う価値があることをカナダ国民に納得させる必要があるだろう。
同氏は土曜日の発言で「われわれはこれがカナダにとって最善の利益になると確信してこの措置を講じている」と述べ、米国が11時間目の変更を求める「パワープレイ」を行っていると非難した。
米国とカナダは貿易戦争に巻き込まれているのかとの記者の質問に、同氏は「攻撃されたときは戦争状態だ。我々は攻撃されたのだ」と答えた。
同氏はフランス語に切り替え、激化する貿易摩擦は「われわれの選択ではなかった」と述べ、「カナダは強い、カナダは準備ができており、カナダは団結している」と付け加えた。
これが国境の両側に苦痛をもたらすことは疑いなく、企業は米国の関税とカナダの対抗関税によるさらなる圧力に直面している。
カナダは輸出の約70％を米国に送っており、同国は米国の多くの州にとって最大の貿易相手国であり、特にミシガン州、ケンタッキー州、インディアナ州、オハイオ州が最も影響を受けている。
カーニー氏は「肘を上げて」（アイスホッケー用語で攻撃的なアプローチを意味する）を呼びかけて政権に就き、アメリカ第一の政策のために経済的圧力をかけようとするトランプ政権に直面してカナダのために戦うことを誓った。
多くのカナダ人は世論調査員に対し、戦う意思があると答えている。
アバカス・データによる最近の調査では、カナダ人の約36％が米国の関税への報復を支持するとの回答が示された一方、レジェ世論調査では、カナダ人の56％が連邦政府が強硬姿勢を取り、これ以上譲歩しないことを望んでいることが示された。
米国の関税に不満を抱いているカナダ人はすでに渡航を避けることを選択している。ボイコットにより、昨年の米国の旅行収入は約33億カナダドル（23億5000万ドル、17億5000万ポンド）の損失となった。
ほとんどの州が米国産アルコールを店頭から撤去する決定を下したことで、この業界は打撃を受けた。
米国政府の貿易統計に基づくと、カナダへの米国ワイン輸出は前年比78%減少し、輸出額では3億5,700万ドルの損失となった。米国蒸留酒製造業者協会も同様の数字を報告しており、各州の禁酒令により米国産蒸留酒の輸出が70％以上減少したと述べている。
この禁止措置はすぐにトランプ政権の不満の種となった。
カナダ首相はまた、これまで米国の貿易紛争の影響をあまり受けていない州に対し、撤退はリスクを取る価値があることを説得する必要がある。
同氏は土曜日に彼らに現状について説明し、今のところ彼らは共同戦線を示している。
ブリティッシュコロンビア州のデービッド・イービー首相は「我々が取り組んでいる国家プロジェクト」に全力で取り組んでいると述べ、オンタリオ州のダグ・フォード首相は「この戦いは我々が始めたわけではないが、断言できる。我々はこの戦いに勝つつもりだ」と述べた。
カナダ、通商交渉決裂で米国の関税に「ドル対ドル」で匹敵すると表明
- 13 時間前に公開
カーニー氏、通商協議決裂後、トランプ大統領の新たな関税は「誤算」と発言
- 5 時間前に公開
何が間違っていたのでしょうか?
1週間にわたり、ワシントンとオタワの間で合意が得られるかに見えた。
交渉が最後の数時間でどのように決裂したかはまだ正確には不明だが、どう見ても決着はついた。
カーニー長官は、米国が後半に提案した条件は「不公平で非経済的であり、あらゆる合意の信頼性に疑問を投げかけている」と述べた。
同氏は土曜日、これらの条件には自動車セクターに対する要求や他国との貿易協定に対する「容認できない」制限が含まれていると付け加えた。
同氏は、トランプ政権について「その署名が鉛筆で書かれていることがあるのは認識している」と痛烈な一文で述べた。
一方、ジェイミーソン・グリア米通商代表は「カナダによる新たな要求と他の約束の撤回」を指摘した。
米国蒸留酒評議会は金曜日の声明で、「カナダの各州が米国の蒸留酒製品を店頭に戻すことを拒否し続けていることが、このような結果を招いた」と示唆した。
また、ハワード・ラトニック米商務長官がこの合意に不満を抱いているとのカナダ外メディアの報道もあった。 BBCは彼の事務所にコメントを求めた。
そして、米国との暫定貿易協定の詳細が先週から少しずつ明らかになるにつれ、一部の地方指導者、業界団体、政敵は首相が約束した戦いを果たさなかったのではないかと懸念を表明したが、カーニー氏はそれが首相の考えを揺さぶったことを否定した。
フォード氏は通常、米国の関税に関して最も声高に発言するカナダの政治家の一人だが、この暫定合意については今週ずっと沈黙を守っていた。しかしカーニー氏はカーニー氏に送った書簡の中で、圧力の下での合意は「米国が譲歩に次ぐ譲歩を求めるよう勇気づけられる」と懸念を表明した。
同州は大規模な製造業と自動車部門を擁し、今回の貿易紛争で最も大きな打撃を受けた地域の一つとなっている。
保守野党指導者のピエール・ポイエーブル氏は、カナダ産業に対する「一方的な」関税を含む合意は「悪い合意」になると述べた。
同氏は土曜日、「カナダは我が国の産業を空洞化させる一方的な関税を受け入れることはできない」と述べ、カーニー首相の当面の離脱決定を支持した。
この協定の崩壊は、米国・メキシコ・カナダの自由貿易協定の継続的な見直しを含め、こうした協議の将来に疑問を投げかけている。
現在、カーニーとカナダは、トランプ大統領がどう反応するか見守る必要がある。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c3040pn8lmmo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-22T20:02:46+00:00",
    category: "自動車",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/aa28/live/becb6d00-9e49-11f1-8871-ff7211da55c9.jpg",
    readTime: 7,
  },
  {
    id: "trump-reshuffled-his-portfolio-in-june-s-d956e1d3",
    title: "Trump reshuffled his portfolio in June, selling names like Meta and buying Berkshire Hathaway",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "ドナルド・トランプ大統領は、ポートフォリオの大規模な組み替えと思われる内容で、6月の1,000件強の金融移行を明らかにした。大統領は月を通して株、債券、上場投資信託に出入りした。 8月22日のトランプ大統領の最新の提出書類によると、取引総額は7,810万ドルから2億6,310万ドルの間であり、正確な数字ではなく、それぞれの売買の範囲が示されている。彼の証券購入額は4,900万ドルを超え、売上高は少なくとも2,850万ドルに達しました。",
    bodyOriginal: `President Donald Trump disclosed just over 1,000 financial transitions for the month of June in what appears to be broad reshuffling of his portfolio.
The president rotated in and out of stocks, bonds and exchange-traded funds throughout the month. The transactions totaled between $78.1 million and $263.1 million, according to Trump's latest filing on Aug. 22, which shows a range for each sale or purchase rather than an exact figure. His securities purchases topped $49 million, while his sales totaled at least $28.5 million.
While the filing gives a window into the investment moves made on behalf of Trump, it is not a clear picture of his total portfolio holdings. The amount bought or sold isn't specific, and there is no indication of how much Trump owns of any particular security.
Of the 1,051 transactions, the largest was the $5 million to $25 million sale of Vanguard Dividend Appreciation Index Fund ETF shares on June 22. That same day he bought between $1 million and $5 million of both Fidelity National Information Services and Home Depot. Those were the largest of several purchases of the stocks in June, although he also logged some sales of Fidelity as well.
Trump sold between $1 million and $5 million worth of shares of both Meta and Motorola on June 18, but snapped up the same range of shares in each of Berkshire Hathaway, Cintas, Visa and Mastercard that same day. Those moves came a day after the market sold off on concerns over the path of monetary policy. June 17 was the conclusion of Federal Reserve Chairman Kevin Warsh's first meeting. Stocks bounced back on June 18..
Other purchases in June include a number of ETFs, including the iShares U.S. Treasury Bond ETF, State Street Technology Select Sector SPDR ETF and the iShares GSCI Commodity Dynamic Roll Strategy ETF. Trump also purchased several municipal bonds.
The president's sales included the Vanguard Short-Term Bond Index Fund ETF, State Street Consumer Discretionary Select Sector SPDR ETF and the Vanguard FTSE Europe ETF.
Those ETF transitions spanned just over $1 million to $5 million. In total, there were 25 sales and purchases of stocks, bonds and ETFs in that range. The remaining transactions were broken down into different buckets $1 million and under. The filings only require Trump to disclose securities transactions over $1,000.
The president also moved in and out of defense contractor Palantir Technologies, buying between $1,001 and $15,000 on June 3. He sold between $15,001 and $50,000 on June 16 and another $500,001 and $1 million worth on June 18. The U.S. and Iran agreed to a peace deal on June 14. He bought a small amount again on June 23.
Two other defense companies, RTX and Northrop Grumman were also named in the president's disclosure. Trump bought between $100,001 and $250,000 worth of RTX shares on June 12, and sold between $1,001 and $15,000 of Northrop Grumman the same day. He then bought Northrop on June 23 and sold it again on June 24.
He also bought and sold Coinbase throughout the month amid Bitcoin's share decline. He offloaded between $116,003 and $315,000 worth of shares between June 12 and June 23, and then bought between $50,001 and $100,000 on June 24.
The White House did not immediately respond to a request for comment. In May, spokesman Davis Ingle told CNBC, after Trump's disclosure of his first-quarter transactions, that the president's assets are held in a trust managed by his children.
"There are no conflicts of interest," spokesman Davis Ingle said in the statement at the time. "President Trump only acts in the best interests of the American public — which is why they overwhelmingly re-elected him to this office, despite years of lies and false accusations against him and his businesses from the fake news media."
— CNBC's Kevin Breuninger and Dan Mangan contributed reporting.`,
    bodyJa: `ドナルド・トランプ大統領は、ポートフォリオの大規模な組み替えと思われる内容で、6月の1,000件強の金融移行を明らかにした。
大統領は月を通して株、債券、上場投資信託に出入りした。 8月22日のトランプ大統領の最新の提出書類によると、取引総額は7,810万ドルから2億6,310万ドルの間であり、正確な数字ではなく、それぞれの売買の範囲が示されている。彼の証券購入額は4,900万ドルを超え、売上高は少なくとも2,850万ドルに達しました。
この申請書はトランプ氏に代わって行われた投資の動きを知る手がかりとなるが、同氏のポートフォリオ保有総額の明確な把握はできていない。売買金額は具体的ではなく、トランプ氏が特定の証券をどれだけ保有しているかについては示されていない。
1,051件の取引のうち、最大のものは、6月22日に行われたバンガード配当高評価インデックス・ファンドETF株の500万～2,500万ドルの売却であった。同日、彼はフィデリティ・ナショナル・インフォメーション・サービスとホーム・デポの両方を100万～500万ドルで購入した。これは6月に行われた数回の株式購入の中で最大規模だったが、同氏はフィデリティの売却も記録した。
トランプ氏は6月18日にメタ社とモトローラ社の株式を100万ドルから500万ドル相当売却したが、同日にバークシャー・ハサウェイ、シンタス、ビザ、マスターカードの各株式も同範囲で買い取った。こうした動きは、金融政策の行方を巡る懸念から市場が売られた翌日に起きた。 6月17日、連邦準備制度理事会のケビン・ウォーシュ議長の最初の会合が閉幕した。株価は6月18日に反発した。
6月のその他の購入には、iシェアーズ米国国債ETF、ステート・ストリート・テクノロジー・セレクト・セクターSPDR ETF、iシェアーズGSCIコモディティ・ダイナミック・ロール・ストラテジーETFなど、多数のETFが含まれる。トランプ大統領はまた、いくつかの地方債も購入した。
大統領の売却対象には、バンガード短期債券インデックス・ファンドETF、ステート・ストリート・コンシューマー・裁量セレクト・セクターSPDR ETF、バンガードFTSEヨーロッパETFなどが含まれた。
これらのETFの移行額は100万ドル強から500万ドルに及んだ。同範囲の株式、債券、ETFの売買は合計25件あった。残りの取引は、100 万ドル以下のさまざまなバケットに分類されました。提出書類ではトランプ氏に1000ドルを超える証券取引の開示のみを求めている。
大統領はまた、防衛請負業者パランティア・テクノロジーズに出入りし、6月3日に1,001ドルから1万5千ドルを購入した。6月16日に1万5千ドルから5万ドル相当を売却し、6月18日にさらに50万ドルから100万ドル相当を売却した。米国とイランは6月14日に和平合意に合意した。6月23日に再び少額を購入した。
他の防衛企業2社、RTXとノースロップ・グラマンも大統領の開示に名前が挙がった。トランプ大統領は6月12日に10万1ドルから25万ドル相当のRTX株を購入し、同日にノースロップ・グラマン株を1001ドルから1万5000ドルで売却した。その後、6月23日にノースロップを買収し、6月24日に再び売却した。
同氏はまた、ビットコインの株価下落のさなか、今月を通じてコインベースを売買した。同氏は6月12日から6月23日までに11万6003ドルから31万5000ドル相当の株式を売却し、6月24日に5万1ドルから10万ドル相当を購入した。
ホワイトハウスはコメント要請に応じなかった。 5月、デービス・イングル報道官は、トランプ大統領の第1四半期の取引の暴露後、CNBCに対し、大統領の資産は子供たちが管理する信託に保管されていると語った。
「利益相反は存在しない」とデイビス・イングル広報担当は当時の声明で述べた。 「トランプ大統領はアメリカ国民の最善の利益のみを考えて行動する。だからこそ、フェイクニュースメディアによるトランプ大統領と彼のビジネスに対する長年の嘘と冤罪にも関わらず、トランプ大統領が圧倒的多数で大統領に再選されたのだ。」
— CNBC の Kevin Breuninger と Dan Mangan が報道に貢献しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/22/trump-reshuffled-his-portfolio-in-june-selling-names-like-meta-and-buying-berkshire-hathaway.html",
    publishedAt: "2026-08-22T17:33:53+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 5,
  },
  {
    id: "as-u-s-canada-trade-talks-collapse-carne-3149c98a",
    title: "As U.S.-Canada trade talks collapse, Carney says retaliatory tariffs will start Sept. 8",
    titleJa: "米・カナダ通商交渉決裂、カーニー長官、報復関税は9月8日に開始されると発言",
    summaryJa: "金曜日に両国間の通商交渉が決裂したことを受け、米国は土曜日、一部のカナダ製品に50％の関税を課した。これに対しカナダは9月8日から独自の報復関税を課すと発表した。",
    bodyOriginal: `The U.S. imposed 50% tariffs on some Canadian products on Saturday after trade talks between the two countries fell apart on Friday.
In response, Canada said it would impose its own retaliatory tariffs beginning on Sept. 8.
Negotiators for both sides had been working on a deal all week, at times signaling that an agreement was near. President Donald Trump had postponed the original deadline of Wednesday just hours ahead of it being imposed, saying that there was a soon-to-be finalized deal. Dominic LeBlanc, Canada's trade minister for the U.S., told reporters on Thursday that a deal was "very close."
However, both sides blamed the other for not reaching a deal as the tariffs, impacting roughly $20 billion in Canadian exports, including wine, furniture, dairy products, cement, clothing, fishing rods, hockey equipment, went into effect on Saturday morning.
U.S. Trade Representative Jamieson Greer, in a post on X early Saturday morning, that "Canada declined to finalize the trade deal under the terms agreed earlier this week."
Canadian Prime Minister Mark Carney said in a statement released on Friday that despite working toward a deal, "that progress has not been enough to meet our objectives for Canadians," saying that "last-minute changes in the U.S. proposed terms were unfair, uneconomic, and called into question the reliability of any deal."
In a Saturday press conference in Ottawa, Ontario, Carney said that the U.S. demands had gone too far.
"They asked too much and offered too little," he said, adding that Canada had been willing to drop its remaining retaliatory tariffs on steel, aluminum and autos if the United States lowered its own.
As a result, Carney said Canada would put its own retaliatory tariffs into effect on Sept. 8, and those duties will target sectors such as steel, dairy, agricultural equipment, and pulp and paper, among others. He said additional details on those new measures would be released in the coming days, previously noting that the retaliatory measures would be "dollar for dollar."
Carney also highlighted the energy relationship between the two countries: "Canada fuels American growth … I don't think they want us to stop sending any of that energy."
Senate Minority Leader Chuck Schumer, D-N.Y., criticized the retaliatory U.S. tariffs in a post on X.
"Trump just slapped another bill on hardworking American families — who are already crushed by his skyrocketing costs. This nonsense with Canada should have never gone into effect. It must end now," Schumer wrote.
Greer, in an appearance on Fox News on Saturday, said that there are no new planned talks with the Canadians. "They've always had the best deal, and they still would have an even better deal, but they didn't want that," he said.
The Trump administration signed three proclamations to impose the additional 50% tariffs on a range of Canadian goods in July, a response it said was due to trade discrimination against multiple U.S. products and industries such as motor vehicles, alcohol and dairy. The tariffs fell under Section 338 of the Tariff Act of 1930, which gives the president the power to impose tariffs of up to 50% on the goods of countries found to be discriminating against the U.S., and which had not been used since 1949.
The failure to reach a deal adds another complication to the increasingly tense relationship between the U.S. and Canada. The two sides had already been at the negotiating table regarding their trilateral trade pact with Mexico, known as USMCA, which was not renewed in July over concerns with U.S. trade deficits — a deal that Trump once called "the best agreement we've ever made."`,
    bodyJa: `金曜日に両国間の通商交渉が決裂したことを受け、米国は土曜日、一部のカナダ製品に50％の関税を課した。
これに対しカナダは9月8日から独自の報復関税を課すと発表した。
双方の交渉担当者は今週ずっと合意に向けて取り組んでおり、時には合意が近いことを示唆していた。ドナルド・トランプ大統領は、間もなく合意がまとまると述べ、当初の水曜日の期限を発動の数時間前に延期していた。カナダのドミニク・ルブラン駐米貿易相は木曜日、記者団に対し、合意は「非常に近づいている」と述べた。
しかし、ワイン、家具、乳製品、セメント、衣料品、釣り竿、ホッケー用具などカナダの輸出額約200億ドルに影響を与える関税が土曜朝に発効したため、双方は合意に達しなかったことで相手を非難した。
ジェイミーソン・グリア米通商代表部議員は土曜早朝、Xに投稿し、「カナダは今週初めに合意された条件に基づいて通商協定を最終決定することを拒否した」と述べた。
カナダのマーク・カーニー首相は金曜日に発表した声明で、合意に向けて努力しているにもかかわらず、「その進展はカナダ国民に対する我々の目標を達成するには十分ではない」とし、「米国が提案した条件の土壇場での変更は不公平で非経済的であり、いかなる合意の信頼性にも疑問を投げかけている」と述べた。
カーニー氏はオンタリオ州オタワでの土曜日の記者会見で、米国の要求は行き過ぎだと述べた。
同氏は「彼らは要求が多すぎ、提供が少なすぎた」と述べ、米国が自国の報復関税を引き下げれば、カナダは鉄鋼、アルミニウム、自動車に対する残りの報復関税を引き下げる用意があると付け加えた。
その結果、カーニー氏は、カナダは9月8日に独自の報復関税を発動する予定で、その関税の対象となるのは鉄鋼、乳製品、農業機械、紙パルプなどのセクターになると述べた。同氏は、これらの新たな措置に関する追加の詳細は数日以内に発表されると述べ、これまでに報復措置は「ドルにはドル」になると述べた。
カーニー氏はまた、両国間のエネルギー関係を強調し、「カナダは米国の成長を促進している…彼らは我々がそのエネルギーを送るのをやめることを望んでいないと思う」と語った。
チャック・シューマー上院院内総務（民主党、ニューヨーク州）はXに関する投稿で米国の報復関税を批判した。
「トランプ大統領は、勤勉なアメリカ人家庭に新たな法案を突き付けたばかりだが、彼らはすでにトランプ大統領の費用の高騰で押しつぶされている。カナダとのこのばかげた行為は絶対に施行されるべきではなかった。今すぐに終わらせなければならない」とシューマー氏は書いた。
グリア氏は土曜日のFOXニュースに出演し、カナダ側との新たな協議は予定されていないと述べた。 「彼らは常に最良の契約を結んできたし、今後もさらに良い契約を結ぶだろうが、彼らはそれを望んでいなかった」と同氏は語った。
トランプ政権は7月、カナダの幅広い製品に50％の追加関税を課す3つの宣言に署名したが、その対応は自動車、アルコール、乳製品など複数の米国製品や産業に対する貿易差別によるものだと主張した。この関税は1930年関税法第338条に基づくもので、同法は米国に対して差別的であると判明した国の商品に最大50％の関税を課す権限を大統領に与えており、この関税は1949年以来適用されていなかった。
合意に達しないことで、緊張が高まる米国とカナダの関係がさらに複雑になる。両国はすでに、USMCAとして知られるメキシコとの3か国貿易協定について交渉のテーブルに着いていたが、この協定は米国の貿易赤字への懸念を理由に7月に更新されなかった。トランプ大統領はかつてこの協定を「われわれがこれまでに結んだ最良の協定」と呼んだ。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/22/us-canada-trade-talks-collapse-ushering-in-wave-of-new-tariffs.html",
    publishedAt: "2026-08-22T17:01:18+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "38-year-old-runs-a-mobile-pizzeria-out-o-f6bdfd63",
    title: "38-year-old runs a mobile pizzeria out of his Smart car in New York City: It's 'like a circus or a magic act'",
    titleJa: "38歳、ニューヨーク市でスマートカーで移動ピザ屋を経営：「サーカスか魔法のようなもの」",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `I've been cooking professionally for most of my life. But if you'd told the teenager peeling potatoes after school that one day he'd have his own pizzeria —and operate it out of a Smart car, no less — I'm not sure he would have believed you.
As a sophomore in high school, I wasn't running a kitchen or thinking about owning a business. I was just a kid getting my first look at how a real restaurant worked.
There was pressure, noise, heat and constant movement. I'd leave exhausted at the end of the night, but I was always well fed, and for some reason I couldn't wait to go back. That environment taught me early that kitchens could be intense, but also incredibly alive. There was a rhythm to the chaos, and I fell in love with it.
I kept cooking, eventually graduating from the Culinary Institute of America and building a career in professional kitchens and corporate dining. I worked with organizations including the NFL and the New York Stock Exchange.
But somewhere along the way, cooking started to feel less personal. In corporate dining, you can prepare an incredible meal for some of the most powerful people in the world and never actually see them enjoy it.
I realized I missed that connection. I wanted to make the decisions myself, obsess over the product, create something people would remember and watch it all unfold before my eyes.
So I went small when I started Pizza Pod. Really small. I like to call it New York City's smallest pizzeria.
Serving pizza out of a Smart car
Pizza Pod started with a pretty ridiculous idea: What if I could turn a tiny Smart car into a mobile pizzeria?
The car gets people's attention immediately. It's a bright, shiny green, and it's just big enough to hold two pizza ovens that run on a generator.
When I park outside a coffee shop, wine bar, or brewery I'm partnering with, or pull up to a street fair or a private or corporate event, most of the pizzeria is already there. I set out a table, unpack balls of dough I made in a commercial kitchen off site and let ferment for 72 hours, and bring along other ingredients, all of which I'm very particular about.
Then, right in front of people, I make fresh 12-inch pies — like cheese, truffle and mushroom, creamy artichoke and garlic, ham and hot honey, and burrata — that sell for $16 to $20 each. One of the more unusual pizzas we make is a guava pepperoni pie. It's a small nod to my Puerto Rican heritage, with the sweetness of the guava playing beautifully against the saltiness of the pepperoni.
Sometimes I think the setup is a little bit like a circus or a magic act, where I get to be the magician pulling hot, fragrant pizzas out of a teeny tiny car. Ta da!
Connecting with the community
I never wanted Pizza Pod to succeed just because of the car. The pizza had to be good enough that customers came back, and they have.
People walk over and ask questions. Kids watch the pizzas go into the ovens. Customers talk to us while we're cooking. Someone comes once, then comes back the following week, and suddenly I know their name and order. People who originally stopped because they were intrigued by the sight of a guy pulling pizzas out of a Smart car have become regulars and bring friends.
That connection is probably my favorite part of the business.
Some of the best opportunities have come directly from those relationships, too. Companies invite Pizza Pod to pop up or cater events. People share videos online. Customers tell other people about this strange little Smart car pizzeria. These interactions have helped grow the business.
Pizza Pod has brought in about $24,000 in gross sales via card payments on Square since March, and I'd estimate cash sales typically make up 65% of our total. So, by my calculations, we're averaging about $12,000 in gross sales per month.
Finding purpose and happiness in pizza
Some days, I'm not only the chef, but also the delivery driver, dish washer, mechanic, salesperson, accountant and social media department, all before lunch. Other days, like when Pizza Pod has a big event, I have a small team working with me.
Running a business this tiny means there's no department to call when something goes wrong. The other day, for example, the generator stopped working while I had pizzas in the oven and hungry people waiting. I quickly hooked up one of the ovens to run through the car for long enough to finish those half-cooked pizzas.
Pizza Pod can be exhausting. But it's also mine. I spent years working inside systems other people created, helping them achieve their dreams. Now, even when the day is difficult, it's because I'm building my own business and cultivating that community around it. It makes me happy and gives me purpose in a way that corporate dining never did.
My son, Axel, who turns 3 soon, loves the car and has appointed himself my No. 1 taste tester, a job he takes pretty seriously.
I hope one day he learns the lessons I have by building this business: You won't be an expert at anything right away, but you'll learn more every day. And you don't need the perfect space or unlimited resources to begin. Sometimes you just have to use what you have and make it work. For me, that happened to be a Smart car and a pizza oven.
Bradley Alvelo is a Culinary Institute of America-trained chef and the founder of Pizza Pod. He serves handcrafted 12-inch pizzas made with slow-fermented dough from a customized Smart car while growing the business through pop-ups, private events, and partnerships. Follow Pizza Pod at @pizzapodnyc or visit pizzapodnyc.com.`,
    bodyJa: `私は人生のほとんどをプロとして料理してきました。しかし、放課後にジャガイモの皮をむいているティーンエイジャーに、いつか自分のピッツェリアを持ち、それもスマートカーで経営するだろうとあなたが言ったとしたら、彼があなたの言うことを信じたかどうかはわかりません。
高校2年生だった私は、キッチンを経営したり、ビジネスを経営しようとは考えていませんでした。私は実際のレストランがどのように機能するかを初めて見た子供でした。
圧力、騒音、熱、そして絶え間ない動きがありました。夜の終わりには疲れ果てて出発するのですが、いつもお腹は十分に満たされていたので、どういうわけか帰るのが待ちきれませんでした。その環境は、キッチンが激しいものであると同時に信じられないほど生き生きとしたものであることを私に早くから教えてくれました。カオスにはリズムがあり、私はそれに夢中になりました。
私は料理を続け、最終的にカリナリー・インスティテュート・オブ・アメリカを卒業し、プロのキッチンや企業のダイニングでキャリアを築きました。私は NFL やニューヨーク証券取引所などの組織と協力しました。
しかし、途中のどこかで、料理が個人的なものではなくなり始めました。企業内での食事では、世界で最も権力のある人々のために素晴らしい食事を用意しても、実際に彼らがそれを楽しんでいるのを見ることはできません。
そのつながりを見逃していたことに気づきました。私は自分で決定を下し、製品に執着し、人々の記憶に残るものを作成し、それがすべて私の目の前で展開されるのを見たかったのです。
それで、ピザポッドを始めたとき、私は小さくなりました。本当に小さいです。私はそれをニューヨーク市最小のピッツェリアと呼びたいと思います。
スマートカーからピザを提供する
Pizza Pod は、非常にばかばかしいアイデアから始まりました。小さなスマートカーを移動ピザ屋に変えることができたらどうなるでしょうか?
その車はすぐに人々の注目を集めます。それは明るく光沢のある緑色で、発電機で稼働するピザ窯を 2 台入れるのにちょうど十分な大きさです。
提携しているコーヒーショップ、ワインバー、醸造所の外に駐車したり、ストリートフェアや個人や企業のイベントに車を停めたりすると、ほとんどのピッツェリアがすでにそこにあります。テーブルを用意し、敷地外の業務用厨房で作った生地を開梱して72時間発酵させ、その他の材料も持参するなど、すべてがこだわりです。
それから私は人々の目の前で、チーズ、トリュフとマッシュルーム、クリーミーなアーティチョークとニンニク、ハムとホットハチミツ、ブッラータなどの新鮮な 12 インチのパイを作り、それぞれ 16 ～ 20 ドルで販売します。私たちが作る最も珍しいピザの 1 つは、グアバ ペパロニ パイです。グアバの甘みがペパロニの塩気と美しく調和しており、私のプエルトリコの伝統に少しだけ敬意を表しています。
時々、この設定はサーカスや手品の演技に少し似ていると思うことがあります。そこでは、私が小さな小さな車から熱くて香りの良いピザを取り出す手品師になります。タダ！
コミュニティとのつながり
車のせいでピザ ポッドが成功することを望んでいたわけではありません。顧客が戻ってくるにはピザが十分に良くなければなりませんでしたし、実際に戻ってきました。
人々は歩いてきて質問します。子どもたちはピザがオーブンに入れられる様子を眺めています。調理中にお客様から話しかけられます。誰かが一度来て、次の週に戻ってくると、突然その人の名前と順番がわかります。当初はスマートの車からピザを取り出している男性の姿に興味を持って立ち寄った人も、友人を連れて常連になるようになりました。
そのつながりがおそらく私がこのビジネスで最も好きな部分です。
最高のチャンスのいくつかは、そうした関係から直接もたらされました。企業は、イベントのポップアップやケータリングに Pizza Pod を招待します。人々はオンラインでビデオを共有します。顧客は、この奇妙な小さなスマート カー ピッツェリアについて他の人に伝えます。こうしたやり取りがビジネスの成長につながりました。
Pizza Pod は 3 月以来、Square でのカード決済を通じて約 24,000 ドルの総売上高をもたらしており、通常、現金売上高が総売上の 65% を占めると推測しています。私の計算によると、月平均総売上高は約 12,000 ドルになります。
ピザに目的と幸福を見つける
日によっては、私はシェフだけでなく、配達ドライバー、食器洗い機、整備士、販売員、会計士、ソーシャルメディア部門のすべてを昼食前に担当することもあります。また、Pizza Pod で大きなイベントがあるときなどは、小さなチームで一緒に仕事をします。
これほど小さなビジネスを運営しているということは、何か問題が発生したときに連絡できる部門がないことを意味します。たとえば先日、私がオーブンでピザを焼いてお腹を空かせた人々が待っている間に発電機が停止しました。私はすぐにオーブンの 1 つを接続し、これらの半分調理されたピザを完成させるのに十分な時間車の中を走り回りました。
ピザポッドは疲れるかもしれません。しかし、それは私のものでもあります。私は何年も他の人が作成したシステムの内部で働き、彼らの夢の実現を支援してきました。今、たとえその日が困難なときでも、それは私が自分のビジネスを立ち上げ、その周りのコミュニティを育てているからです。それは私を幸せにし、企業の食事では決して得られなかった方法で私に目的を与えてくれます。
もうすぐ 3 歳になる息子のアクセルは車が大好きで、自分を私のナンバー 1 味覚テスターに​​任命しており、彼はこの仕事をかなり真剣に取り組んでいます。
いつか彼がこのビジネスを立ち上げることで私が得た教訓を学んでくれることを願っています。すぐに何かの専門家になることはできませんが、毎日より多くのことを学ぶことになります。また、始めるのに完璧なスペースや無制限のリソースは必要ありません。時には、自分が持っているものを使ってそれを機能させる必要があります。私にとって、それはたまたまスマートカーとピザオーブンでした。
ブラッドリー・アルヴェロは、カリナリー・インスティテュート・オブ・アメリカで訓練を受けたシェフであり、ピザ・ポッドの創設者です。彼はカスタマイズされたスマートカーでゆっくりと発酵させた生地で作られた手作りの 12 インチのピザを提供しながら、ポップアップ、プライベート イベント、パートナーシップを通じてビジネスを成長させています。 @pizzapodnyc で Pizza Pod をフォローするか、pizzapodnyc.com にアクセスしてください。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/22/bradley-alvelo-runs-pizza-pod-mobile-pizzeria-smart-car-new-york-city.html",
    publishedAt: "2026-08-22T14:00:01+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 7,
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
    publishedAt: "2026-08-22T13:01:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-94025750",
    readTime: 2,
  },
  {
    id: "why-an-announcement-from-the-treasury-sp-5a508ccc",
    title: "Why an announcement from the Treasury sparked a rally in gold and bitcoin this week",
    titleJa: "なぜ財務省の発表が今週​​金とビットコインの上昇を引き起こしたのか",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Cryptocurrencies and precious metals shot higher, while the U.S. dollar weakened, after the Treasury Department said it planned to double its bond buybacks.`,
    bodyJa: `財務省が債券買い戻しを倍増させる計画を発表したことを受け、仮想通貨と貴金属は急騰する一方、米ドルは下落した。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/why-an-announcement-from-the-treasury-sparked-a-rally-in-gold-and-bitcoin-this-week-d9d5972b?mod=mw_rss_topstories",
    publishedAt: "2026-08-22T13:00:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-69034296",
    readTime: 2,
  },
  {
    id: "move-over-credit-cards-social-media-star-176d840a",
    title: "Move over, credit cards: Social-media stars are tapping magic wands to buy things",
    titleJa: "クレジットカードを使いましょう: ソーシャルメディアのスターたちは魔法の杖を使って物を購入しています",
    summaryJa: "買い物客がチェックアウトをパーソナライズされたアクセサリーに変えるにつれて、タップツーペイは TikTok に大変身しています。",
    bodyOriginal: `Tap-to-pay is getting a TikTok makeover as shoppers turn checking out into a personalized accessory.`,
    bodyJa: `買い物客がチェックアウトをパーソナライズされたアクセサリーに変えるにつれて、タップツーペイは TikTok に大変身しています。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/move-over-credit-cards-social-media-stars-are-tapping-magic-wands-to-buy-things-62e475d4?mod=mw_rss_topstories",
    publishedAt: "2026-08-22T12:30:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-17088577",
    readTime: 2,
  },
  {
    id: "meta-is-the-latest-tech-giant-to-land-in-0a5028de",
    title: "Meta is the latest tech giant to land in her courtroom. Meet Judge Yvonne Gonzalez Rogers",
    titleJa: "メタは法廷に現れた最新のテクノロジー巨人だ。イヴォンヌ・ゴンザレス・ロジャース判事に会う",
    summaryJa: "イヴォンヌ・ゴンザレス・ロジャースにとっては、クレイジーな4か月だった。カリフォルニア北部地区の裁判官は4月下旬から5月の大半をオークランドのダウンタウンの法廷で過ごし、イーロン・マスク氏とサム・アルトマン氏の間の注目を集めた戦いを監督した。",
    bodyOriginal: `It's been a crazy four months for Yvonne Gonzalez Rogers.
The judge in the Northern District of California spent late April and much of May in her downtown Oakland courtroom, overseeing the high-profile battle between Elon Musk and Sam Altman.
Now, the 61-year-old Gonzalez Rogers is gearing up for week two of a trial that could go a long way in determining the fate of Meta's advertising business, as California Attorney General Rob Bonta leads a coalition of state AGs in litigating what's being hailed as social media's "Big Tobacco moment."
In between the two trials, Gonzalez Rogers was named chief judge of the court, 15 years after being nominated to serve there by then-President Barack Obama. She replaced Judge Richard Seeborg, who held the role for five years, and takes over at a time when tech companies are bigger and more powerful than ever and artificial intelligence is driving more high-stakes fights into the courtroom.
The district includes San Francisco, where OpenAI is headquartered, as well as all of Silicon Valley, home to Meta and most of its technology peers. For Gonzalez Rogers, the job is the capstone of a 35-year legal career in California, where she began in private practice before being appointed to the Alameda County Superior Court in 2008 by then-Gov. Arnold Schwarzenegger.
Known to many as YGR, Gonzalez Rogers has developed a reputation for her no-nonsense attitude.
"I would describe her as a pistol," said Steve Berman, a managing partner at Hagens Berman who served as co-lead counsel against Big Tobacco in the 1990s and has litigated against Apple before Gonzalez Rogers in several cases. "If lawyers give her bulls---, she just goes after them."
A native of Houston, Gonzalez Rogers did her undergraduate work at Princeton and received her law degree from the University of Texas. She then joined law firm Cooley in 1991, becoming the firm's first Latina associate.
During her time as a state judge, she caught the attention of then-Sen. Dianne Feinstein, a California Democrat. Feinstein, who died in 2023, later recommended Gonzalez Rogers' nomination to the federal bench to President Obama.
History with Apple
Before the recent cases involving Meta and Musk, Gonzalez Rogers was well known by those who follow Apple.
In 2012, she inherited Pepper v. Apple, an early antitrust challenge to the App Store. IPhone owners alleged Apple forced them to buy apps through its store alone, allowing the company to charge a 30% commission and push prices higher. Gonzalez Rogers initially dismissed the case, though the Supreme Court later took it up and ruled that consumers could sue the company.
Around the same time, Gonzalez Rogers oversaw an antitrust case, involving allegations that Apple unfairly blocked users from playing music from sources other than iTunes and shut out competitors. Apple was victorious.
But her most notable Apple trial took place five years ago, in a case against Epic Games.
In 2020, Epic activated its own payment option inside Fortnite, bypassing Apple's payment system and its 30% commission. Epic sued Apple after the iPhone maker removed Fortnite from the App Store, accusing the company of illegally controlling the way apps were distributed and payments were processed on iPhones.
After a three-week bench trial in 2021, Gonzalez Rogers largely sided with Apple, finding that Epic had failed to prove Apple was an illegal monopolist. She also determined that Apple's "anti-steering" rules violated California competition law and ordered the company to allow developers to direct users to outside payment options.
But that wasn't the end of it.
Last year, Gonzalez Rogers said Apple willfully violated the injunction, writing in a court filing that the company's vice president of finance "outright lied" to the court about when the company had decided to levy a 27% fee on some purchases linked to its App Store.
"Neither Apple, nor its counsel, corrected the, now obvious, lies," Rogers wrote, saying that she considers Apple to "to have adopted the lies and misrepresentations to this Court."
Rogers referred the matter to U.S. attorneys to investigate whether to pursue criminal contempt proceedings, though a prosecution never emerged.
Musk v. Altman
Gonzalez Rogers was back in the spotlight earlier this year, as Musk and Altman took their long-standing feud to the courtroom.
In 2024, Musk sued Altman, OpenAI and fellow co-founder Greg Brockman for allegedly "stealing a charity." After a three-week trial, the advisory jury ruled that Musk, who helped start OpenAI as a nonprofit in 2015, hadn't filed his suit in time, ending the case without resolving Musk's allegations.
Musk called the verdict a "technicality" and vowed to appeal, but Gonzalez Rogers said, in wrapping up the trial, that there's "a substantial amount of evidence to support the jury's finding."
A spokesperson for Gonzalez Rogers told CNBC that the judge gives jurors a pocket constitution from the Supreme Court bookstore with a signed thank you note for their service.
Like in the Musk-Altman case, Gonzalez Rogers is presiding over a bench trial as the state AGs take on Meta. An advisory jury will hear the evidence and reach a verdict, but the decision isn't legally binding, and Gonzalez Rogers retains the final say.
Steven Baicker-McKee, a law professor at Duquesne University and an expert in civil procedure, told CNBC that an advisory jury amounts to an add-on to a bench trial.
"You only get an advisory jury where the parties do not have a right to a jury, and the judge could decide the matter on his or her own," said Baicker-McKee. "An advisory jury allows the judge to gauge how the community feels about a certain event or certain conduct."
Here's how Gonzalez Rogers described it in a court filing:
"The issues at play in this impact the daily lives of the public across the states involved," she wrote. "Thus, the Court deems it prudent to call an advisory jury to solicit the 'standard of the community.'"
As far as the potential impact of Gonzalez Rogers' ultimate decision, this could be her most important case yet.
Meta has estimated that potential penalties from the states' lawsuit could be as high as $1.4 trillion, though Bonta says the states are not demanding that much.
Money isn't Meta's biggest concern.
The states allege Meta deliberately used features including infinite scroll, autoplay, likes, push notifications and disappearing content to hook young users on its apps despite knowing of the vulnerabilities. They also accuse Meta of collecting information from children without parental consent and misleading the public about the risks of its platforms. Meta has denied the claims.
Bonta and AGs from Colorado, New Jersey and Kentucky are co-leading the trial and represent a bipartisan group of 29 AGs seeking algorithm alterations that could force Meta to change how it designs and operates features for young users on Facebook and Instagram. Meta is reliant on its algorithms to target advertising, which accounts for 98% of its revenue and is the key source of growth as the company heavily invests in AI.
Opening arguments began on Tuesday, and Bonta reminded reporters after the first day that the trial centers around "civil penalties, restitution and distortion," and is not primarily about money.
The trial in Gonzalez Rogers' courtroom is expected to last six to seven weeks. It's the centerpiece of a larger judicial assignment.
Gonzalez Rogers is overseeing the broader multidistrict litigation consolidating nearly 3,000 pending lawsuits against Meta, TikTok, Snap and YouTube over alleged harms to children and teens.
"She's super smart, and I think thrives on challenging cases," Berman said. "I haven't always agreed with her in cases I didn't win. But I know that she's smart."
— CNBC's Jonathan Vanian, Lora Kolodny and Kif Leswing contributed to this report.
WATCH: Meta is facing its biggest trial yet, and its future hangs in the balance`,
    bodyJa: `イヴォンヌ・ゴンザレス・ロジャースにとっては、クレイジーな4か月だった。
カリフォルニア北部地区の裁判官は4月下旬から5月の大半をオークランドのダウンタウンの法廷で過ごし、イーロン・マスク氏とサム・アルトマン氏の間の注目を集めた戦いを監督した。
現在、61歳のゴンザレス・ロジャース氏は、ソーシャルメディアの「ビッグ・タバコ・モーメント」ともてはやされている訴訟で、カリフォルニア州司法長官ロブ・ボンタ氏が州検事局の連合を率いて、メタ社の広告事業の運命を決定するのに大いに役立ちそうな裁判の第2週に向けて準備を進めている。
2つの裁判の間に、ゴンザレス・ロジャース氏が当時のバラク・オバマ大統領から裁判所の裁判長に指名されてから15年後に裁判長に任命された。彼女は、5年間その職を務めたリチャード・シーボーグ判事の後任となり、テクノロジー企業がこれまで以上に大きく強力になり、人工知能によって法廷での一か八かの争いが増えているこの時期に就任した。
この地区には、OpenAI が本社を置くサンフランシスコのほか、Meta とそのほとんどの同業他社の本拠地であるシリコン バレー全域が含まれます。ゴンザレス・ロジャースにとって、この仕事はカリフォルニア州での35年間の弁護士キャリアの頂点であり、2008年に当時のゴンザレス・ロジャース知事によってアラメダ郡高等裁判所に任命されるまでは個人開業からスタートした。アーノルド・シュワルツェネッガー。
YGR として多くの人に知られているゴンザレス ロジャースは、その真面目な態度で評判を高めています。
ハーゲンズ・バーマンのマネージング・パートナーで、1990年代にビッグ・タバコ社の共同主任弁護士を務め、ゴンザレス・ロジャース氏の前でアップルを相手にいくつかの訴訟を起こしたスティーブ・バーマン氏は、「私は彼女をピストルと形容するだろう」と語った。 「もし弁護士が彼女に雄牛を与えても、彼女はただ彼らを追いかけます。」
ヒューストン出身のゴンザレス・ロジャースは、プリンストン大学で学士課程を修了し、テキサス大学で法学の学位を取得しました。その後、1991 年に法律事務所クーリーに入社し、同事務所初のラテン系アソシエイトとなりました。
州判事時代に、彼女は当時の上院議員の目に留まった。ダイアン・ファインスタイン、カリフォルニア民主党員。 2023年に亡くなったファインスタイン氏は後にゴンザレス・ロジャースの連邦議会議員への指名をオバマ大統領に推薦した。
Appleとの歴史
メタ氏とマスク氏が関与した最近の事件が起きる前、ゴンザレス・ロジャース氏はアップルを支持する人々の間でよく知られていた。
2012 年に、彼女は App Store に対する初期の反トラスト訴訟である Pepper 対 Apple 事件を継承しました。 iPhoneの所有者らは、Appleが自社ストアのみでアプリを購入することを強制し、同社が30％の手数料を請求し、価格を押し上げることを可能にしていると主張した。ゴンザレス・ロジャース氏は当初この訴訟を却下したが、後に最高裁判所がこの件を取り上げ、消費者が同社を訴えることができるとの判決を下した。
同じ頃、ゴンザレス・ロジャース氏は、Apple がユーザーによる iTunes 以外のソースからの音楽再生を不当にブロックし、競合他社を締め出したという申し立てに関わる独占禁止法訴訟を監督しました。アップルが勝利した。
しかし、彼女の最も注目すべきApple裁判は5年前に行われ、Epic Gamesに対する訴訟であった。
2020年、エピックはフォートナイト内で独自の支払いオプションを有効にし、Appleの支払いシステムとその30％の手数料を回避しました。 iPhoneメーカーがApp Storeからフォートナイトを削除したことを受け、EpicはAppleがアプリの配布方法やiPhoneでの支払い処理方法を違法に管理しているとしてAppleを訴えた。
2021年の3週間の裁判員裁判の後、ゴンザレス・ロジャースは、エピックがアップルが違法独占者であることを証明できなかったと認定し、ほぼアップル側に立った。同氏はまた、Appleの「アンチステアリング」規則がカリフォルニア州競争法に違反していると判断し、開発者がユーザーを外部の支払いオプションに誘導することを許可するよう同社に命じた。
しかし、それで終わりではありませんでした。
ゴンザレス・ロジャース氏は昨年、アップルが意図的に差し止め命令に違反したと述べ、同社の財務担当副社長が、同社がアップストアに関連する一部の購入に27％の手数料を課すことを決定した時期について法廷で「あからさまに嘘をついた」と裁判所への提出書類に書いた。
ロジャーズ氏は、「アップルもその弁護士も、今や明らかな嘘を正さなかった」と書き、アップルが「この法廷で嘘と虚偽の陳述を採用した」と考えていると述べた。
ロジャーズ氏は、刑事侮辱訴訟を起こすかどうか調査するためにこの問題を米国の弁護士に付託したが、訴追は行われなかった。
マスク対アルトマン
今年初め、マスク氏とアルトマン氏が長年にわたる確執を法廷に持ち込んだため、ゴンザレス・ロジャース氏が再び注目を浴びた。
2024年、マスク氏はアルトマン氏、OpenAI氏、同じく共同創設者のグレッグ・ブロックマン氏を「慈善活動を盗んだ」として告訴した。 3週間の裁判の後、諮問陪審は、2015年に非営利団体としてOpenAIを設立するのに貢献したマスク氏の訴訟提起が間に合わなかったとの判決を下し、マスク氏の主張は解決されないまま訴訟は終了した。
マスク氏は評決を「技術的問題」と呼び、控訴すると明言したが、ゴンザレス・ロジャース氏は裁判を終えるにあたり、「陪審の判断を裏付ける相当量の証拠がある」と述べた。
ゴンザレス・ロジャース氏の広報担当者はＣＮＢＣに対し、判事が陪審員に対し、最高裁判所の書店から、その功績に対する署名入りの感謝状を添えたポケット憲法を陪審員に手渡した、と語った。
マスク対アルトマンの事件と同様に、州議会がメタと対戦する際、ゴンザレス・ロジャースが裁判員裁判を主宰している。諮問陪審は証拠を審理して評決を下すことになるが、決定には法的拘束力はなく、ゴンザレス・ロジャース氏が最終決定権を保持する。
デュケイン大学の法学教授で民事訴訟の専門家スティーブン・バイカー・マッキー氏はCNBCに対し、諮問陪審は法廷裁判の追加に相当すると語った。
「助言陪審が設置されるのは、当事者が陪審を受ける権利を持たない場合のみであり、裁判官は独自に問題を決定できる」とバイカーマッキー氏は述べた。 「諮問陪審は、裁判官が特定の出来事や特定の行為についてコミュニティがどのように感じているかを判断することを可能にします。」
ゴンザレス・ロジャースは裁判所への提出書類で次のように説明している。
「この問題で起こっている問題は、関係する州全体の国民の日常生活に影響を与えている」と彼女は書いた。 「したがって、裁判所は、『地域社会の基準』を求めるために諮問陪審を招集することが賢明であると判断する。」
ゴンザレス・ロジャースの最終的な決断が及ぼす潜在的な影響に関して言えば、これは彼女にとってこれまでで最も重要な事件になる可能性がある。
メタ社は、各州の訴訟による潜在的な罰金は1兆4000億ドルに達する可能性があると見積もっているが、ボンタ氏は各州はそれほど多くを要求していないとしている。
メタの最大の関心事はお金ではない。
各州は、メタ社が脆弱性を認識していたにもかかわらず、若いユーザーをアプリに引き付けるために、無限スクロール、自動再生、いいね、プッシュ通知、コンテンツの消失などの機能を意図的に使用したと主張している。彼らはまた、Metaが親の同意なしに子供から情報を収集し、そのプラットフォームのリスクについて一般大衆を誤解させたとして非難している。メタ氏はこの主張を否定した。
ボンタ氏とコロラド州、ニュージャージー州、ケンタッキー州のAGはこの試験を共同主導しており、メタ社にFacebookとInstagramの若いユーザー向け機能の設計と運用方法の変更を強いる可能性のあるアルゴリズムの変更を求めている29のAGからなる超党派のグループを代表している。 Meta は自社のアルゴリズムに依存してターゲティング広告を行っており、広告が収益の 98% を占め、同社が AI に多額の投資を行っているため、成長の重要な源泉となっています。
冒頭弁論は火曜日に始まり、ボンタ被告は初日後記者団に対し、裁判は「民事罰、賠償、歪曲」が中心であり、主に金銭が争点ではないことを思い出させた。
ゴンザレス・ロジャースの法廷での裁判は6〜7週間続くと予想されている。これは、より大きな司法任務の中心となるものである。
ゴンザレス・ロジャース氏は、子どもや十代の若者たちへの危害を巡るメタ、TikTok、Snap、YouTubeに対する係争中の約3,000件の訴訟を統合する、広範な多地区訴訟を監督している。
「彼女はとても賢いので、難しい事件でもうまくやっていけると思います」とバーマン氏は語った。 「勝てなかった訴訟で私はいつも彼女に同意するわけではありません。しかし、彼女が賢明であることは知っています。」
— CNBC の Jonathan Vanian、Lora Kolodny、Kif Leswing がこのレポートに貢献しました。
注目: メタはこれまでで最大の試練に直面しており、その将来は危機に瀕している`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/22/meet-yvonne-gonzalez-rogers-judge-taking-on-meta.html",
    publishedAt: "2026-08-22T12:12:03+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "warren-buffett-watch-it-s-buffett-not-ab-5624611f",
    title: "Warren Buffett Watch: It's Buffett, not Abel, who appears to be calling the shots on stocks",
    titleJa: "ウォーレン・バフェット・ウォッチ：株の決定権を握っているのはエイベルではなくバフェットだ",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `(This is the Warren Buffett Watch newsletter, news and analysis on all things Warren Buffett and Berkshire Hathaway. You can sign up here to receive it every Friday evening in your inbox.)
Buffett, not Abel, appears to still be calling the shots on stocks
Two weeks ago, Berkshire Hathaway reported its huge cash reserves declined by billions of dollars during the second quarter, the first significant drop since early 2022.
It appeared to many, including me, that Greg Abel was making his mark as the company's new CEO by putting a "big chunk of Berkshire's cash to work."
In the wake of last week's disclosure of exactly what it had in its equity portfolio as of June 30, it now looks like it's more complicated than that.
Barron's Andrew Bary makes the case that Abel hasn't been involved in stock calls at all and its Warren Buffett who "still likes making big investment decisions involving Berkshire's $350 billion-plus equity portfolio—and letting Berkshire holders know that he's still in the game" as he approaches his 96th birthday.
While Buffett was careful to note he often talks with Abel, and neither would do anything the other didn't approve of, he revealed in a CNBC interview last month he had "initiated" Berkshire's Alphabet investment.
That stock first appeared in the portfolio in last year's third quarter.
Bloomberg News reported that Berkshire's Q2 purchase of $10 billion in Alphabet shares directly from the company came after Abel gave a "rapid signoff" to the deal in response to a "stealthy weekend call" to Berkshire from Goldman Sachs, the firm putting together Alphabet's enormous equity offering.
Presumably, Buffett also gave his OK.
Bary believes the second largest purchase in Q2, Delta Air Lines, was the work of portfolio manager Ted Weschler.
He notes Abel has "no formal portfolio management experience and doesn't appear to be making any notable stock-picking decisions" while "he has his hands full" running Berkshire's many operating companies and looking for new ones to buy.
Abel has been spending some of Berkshire's cash with his $6.8 billion acquisition of Taylor Morrison Home, although it didn't close until after Q2 ended.
Close race for third place in Berkshire's portfolio
The roughly $17 billion increase in Berkshire Hathaway's Alphabet stake during the second quarter made Google's parent the third largest holding in the company's equity portfolio, displacing Coca-Cola in that slot.
As of June 30, the end of the quarter, the Alphabet shares had a market value of $37.77 billion, $5.26 billion ahead of Coca-Cola's $32.51 billion.
Since then, however, Alphabet shares have dropped by 3.5% while Coca-Cola has rallied by 12.1%.
As a result, as of Friday's close, Alphabet's lead is just a razor-thin $20 million.
On two days, July 30 and August 20, Coca-Cola topped Alphabet by slim margins at the close.
Appeals court rejects bid to toss real estate commissions settlement
A federal appeals court in St. Louis is upholding the 2024 settlement of a class action antitrust suit against Berkshire Hathaway subsidiary HomeServices of America and the National Association of Realtors, Reuters reports.
HomeServices agreed to pay $250 million of a more than $1 billion settlement to resolve claims that long-standing rules over the splitting of real estate commissions kept them artificially high.
As part of the settlement, the NAR agreed to revise those rules.
Some of the plaintiffs, however, think they were short-changed and went to court to block the deal.
This week's ruling by the 8th U.S. Circuit Court of Appeals backs a lower court's approval of the settlement.
A lawyer for some of the objectors tells Reuters they may ask the Supreme Court to review the case. "Everyone got next to nothing for the sake of settling. There's something just not right about that."
The settlement came after a 2023 jury trial found the defendants liable for $1.78 billion in damages. That award could have been tripled under U.S. antitrust law.
HomeServices CEO Chris Kelly is quoted as saying this week's court win provides "additional certainty" to the company, its agents, and its customers.
The unit's parent, Berkshire Hathaway Energy, still faces a separate proposed antitrust class action suit over real estate commissions after a judge ruled last April that it is not covered by the HomeServices settlement.
When BHE was targeted two years ago, a lawyer for plaintiffs told The New York Times, "Berkshire Hathaway is the leader of the pack. It's much bigger than N.A.R... If you want to bring about change in corporate America, hit them in the pocketbook. And that's exactly where this is aimed."
BUFFETT & BERKSHIRE AROUND THE INTERNET
Some links may require a subscription:
- Investor's Business Daily: Warren Buffett's Portfolio Is Looking Even More Like The Dow Jones Index. This Is Why.
- MarketWatch on Morningstar: Berkshire Hathaway bet big on the U.S. housing market. You probably shouldn't follow suit.
- Business Insider on MSN: Elon Musk finally has Warren Buffett as a shareholder — sort of
- Bloomberg's Masters in Business video podcast: Learning from Buffett and Munger
HIGHLIGHTS FROM CNBC'S BUFFETT ARCHIVE
'We look at what the market says is the utility' (1994)
Warren Buffett weighs in on how he judges a product's usefulness when he considers acquiring its maker.
AUDIENCE MEMBER: I'm wondering, when you are considering an acquisition, how you look at the usefulness of the product?
WARREN BUFFETT: Well, obviously we look at what the market says is the utility. And the market has voted very heavily for Dexter Shoe, just to be an example.
I don't know many how many pairs of shoes they were turning out back in 1958 or thereabouts, but year after year, people have essentially voted for the utility of that product.
There are 750 million or so 8-ounce servings of one product or another from the Coca-Cola Company consumed every day around the world. And there are those of us who think the utility is very high. I can't make it through the day without a few. But there are other people that might rate it differently.
But essentially, people are going to get thirsty and if this is the way they take care of their thirst better than — and they prefer that to other forms — then I would rate the utility high of the product. But, I think it's hard to argue with the market on that.
I mean, people — some people may think that, you know, listening to a rock concert is not something of high utility. Other people might think it's terrific.
And so, we would judge that — I don't think we would come to an independent decision that there was some great utility residing in some product that had been available to the public for a long time, but that the public and not endorsed in any way.
BERKSHIRE STOCK WATCH
Four weeks
Twelve months
BRK.A stock price: $743,500.00
BRK.B stock price: $495.82
BRK.B P/E (TTM): 12.47
Berkshire market capitalization: $1,061,294,568,527
Berkshire Cash as of June 30: $365.5 billion (Down 8.0% from March 31)
Excluding Rail Cash and Subtracting T-Bills Payable: $359.2 billion (Down 3.8% from March 31)
Berkshire repurchased $4.5 billion of its shares in Q2 2026.
(All figures are as of the date of publication, unless otherwise indicated)
BERKSHIRE'S TOP EQUITY HOLDINGS - Aug. 21, 2026
Berkshire's top holdings of disclosed publicly traded stocks in the U.S. and Japan, by market value, based on the latest closing prices.
Holdings are as of June 30, 2026, as reported in Berkshire Hathaway's 13F filing on August 14, 2026, except for:
- Mitsubishi, which is as of August 28, 2025
The full list of holdings and current market values is available from CNBC.com's Berkshire Hathaway Portfolio Tracker.
QUESTIONS OR COMMENTS
Please send any questions or comments about the newsletter to me at alex.crippen@nbcuni.com. (Sorry, but we don't forward questions or comments to Buffett himself.)
If you aren't already subscribed to this newsletter, you can sign up here.
Also, Buffett's annual letters to shareholders are highly recommended reading. There are collected here on Berkshire's website.
-- Alex Crippen, Editor, Warren Buffett Watch`,
    bodyJa: `(これはウォーレン・バフェット・ウォッチのニュースレター、ウォーレン・バフェットとバークシャー・ハサウェイに関するニュースと分析です。ここからサインアップすると、毎週金曜日の夜に受信箱で受け取ることができます。)
エイベルではなくバフェットが依然として株の決定権を握っているようだ
2週間前、バークシャー・ハサウェイは第2四半期に巨額の現金準備金が数十億ドル減少し、2022年初頭以来初めての大幅な減少となったと報告した。
私を含む多くの人々には、グレッグ・エイベル氏が「バークシャーの多額の資金」を投入して同社の新CEOとして名を上げているように見えた。
先週、6月30日時点での株式ポートフォリオの内容が正確に開示されたことを受けて、現在ではそれがさらに複雑になっているようだ。
本誌のアンドリュー・バリー氏は、エイベル氏は株式コールには全く関与しておらず、96歳の誕生日を迎える今でも「バークシャーの3,500億ドルを超える株式ポートフォリオに関わる大きな投資決定を下すこと、そしてバークシャーの保有者に自分がまだゲームに参加していることを知らせることを今でも好んでいる」ウォーレン・バフェット氏について主張している。
バフェット氏はエイベル氏と頻繁に話しており、お互いが認めないことは何もしないことに注意していたものの、先月のCNBCインタビューでバークシャーのアルファベットへの投資を「始めた」ことを明らかにした。
この銘柄がポートフォリオに初めて登場したのは昨年の第3四半期だった。
ブルームバーグ・ニュースは、バークシャーが第2四半期にアルファベット株100億ドルを同社から直接購入したのは、アルファベットの巨額株式の売り出しをまとめているゴールドマン・サックスからのバークシャーへの「週末の内密電話」に応じて、アベルが取引に「迅速な承認」を与えた後に行われたと報じた。
おそらくバフェット氏もOKを出したのだろう。
バリー氏は、第2四半期に2番目に大きな買収となったデルタ航空は、ポートフォリオマネージャーのテッド・ウェシュラー氏の仕業だと考えている。
同氏は、アーベル氏には「正式なポートフォリオ管理の経験がなく、特に注目すべき銘柄選択の意思決定もしていないようだ」一方、バークシャーの多くの事業会社を経営し、新たに買収する事業会社を探すことに「手一杯」だと指摘した。
アベル氏はテイラー・モリソン・ホームの68億ドルの買収にバークシャーの現金の一部を費やしてきたが、買収は第2四半期終了後まで完了しなかった。
バークシャーのポートフォリオにおける3位争いは接戦
第2四半期にバークシャー・ハサウェイのアルファベット株が約170億ドル増加したことにより、グーグルの親会社は同社の株式ポートフォリオにおいてコカ・コーラに代わって3番目に大きな保有株となった。
同四半期末の6月30日時点で、アルファベット株の時価総額は377億7000万ドルで、コカ・コーラの325億1000万ドルを52億6000万ドル上回っている。
しかしそれ以来、アルファベット株は3.5％下落し、コカ・コーラは12.1％上昇した。
その結果、金曜日の取引終了時点で、アルファベットとの差はわずか2,000万ドルとなった。
7月30日と8月20日の2日間、コカ・コーラは終値時点で僅差でアルファベットを上回った。
控訴裁判所、不動産仲介手数料和解案を却下
ロイター通信の報道によると、セントルイスの連邦控訴裁判所は、バークシャー・ハサウェイの子会社ホームサービス・オブ・アメリカと全米不動産業者協会に対する独占禁止法集団訴訟の2024年の和解を支持している。
ホームサービス社は、不動産手数料の分割に関する長年の規則により人為的に高額な手数料が維持されていたという主張を解決するため、10億ドルを超える和解金のうち2億5000万ドルを支払うことに同意した。
和解の一環として、NARはこれらの規則を改訂することに同意した。
しかし、原告の中には、自分たちが急遽変更したため、取引を阻止するために法廷に訴えたものと考えている人もいる。
第8連邦巡回控訴裁判所による今週の判決は、下級裁判所による和解承認を支持するものとなった。
一部の反対派の弁護士はロイターに対し、最高裁判所に事件の再検討を求める可能性があると語った。 「誰もが、落ち着くためにほとんど何も得られませんでした。そこには何かが間違っています。」
この和解は、2023年の陪審裁判で被告が17億8000万ドルの損害賠償責任を負っているとの判決を受けた後に行われた。米国の反トラスト法に基づき、その賞金は3倍になる可能性があった。
HomeServicesの最高経営責任者（CEO）クリス・ケリー氏は、今週の法廷勝利により同社、代理店、顧客に「さらなる確実性」がもたらされたと述べたと伝えられている。
同部門の親会社であるバークシャー・ハサウェイ・エナジーは、昨年4月に裁判官がホームサービス社との和解の対象外であるとの判決を下した後、不動産手数料を巡る別の独占禁止法集団訴訟案に依然として直面している。
2年前にBHEが標的となったとき、原告側の弁護士はニューヨーク・タイムズに対し、「バークシャー・ハサウェイは集団のリーダーだ。N.A.Rよりもはるかに大きい…アメリカの企業に変化をもたらしたいなら、彼らを叩きのめすべきだ。そしてまさにそれが今回の狙いだ」と語った。
インターネット上のバフェットとバークシャー
一部のリンクには購読が必要な場合があります。
- Investor's Business Daily: ウォーレン・バフェット氏のポートフォリオはダウ・ジョーンズ指数にさらに似てきています。これが理由です。
- モーニングスターのマーケットウォッチ：バークシャー・ハサウェイは米国の住宅市場に大きく賭けた。おそらく追従すべきではありません。
- MSN の Business Insider: イーロン・マスクはついにウォーレン・バフェットを株主として迎える - ある種のこと
- ブルームバーグのビジネス修士ビデオ ポッドキャスト: バフェットとマンガーから学ぶ
CNBC のバフェット アーカイブのハイライト
「私たちは市場が効用と言っているものに注目します」 (1994)
ウォーレン・バフェット氏は、メーカーの買収を検討する際に、製品の有用性をどのように判断するかについて意見を述べています。
聴衆: 買収を検討する際、製品の有用性をどのように検討するのかと思いますか?
ウォーレン・バフェット: そうですね、明らかに私たちは市場が言う効用を重視しています。そして、ほんの一例ですが、市場はデクスターシューに非常に多くの票を投じています。
1958 年頃、彼らが何足の靴を生産していたのかは知りませんが、毎年、人々は基本的にその製品の有用性に投票しています。
コカ・コーラ社のさまざまな製品の 8 オンス サービングが毎日、世界中で 7 億 5,000 万杯ほど消費されています。そして、その有用性は非常に高いと考える人もいます。いくつかないと一日を乗り切ることができません。しかし、別の評価をする人もいるかもしれません。
しかし本質的に、人は喉が渇くものであり、これが他の方法よりも喉の渇きをうまく処理する方法であるなら、そして他の方法よりもそれを好むのであれば、私はこの製品の有用性を高く評価するでしょう。しかし、それについて市場と議論するのは難しいと思います。
つまり、ロック コンサートを聴くことは、それほど有用なことではないと考える人もいるかもしれません。他の人はそれがすごいと思うかもしれない。
したがって、私たちは次のように判断します。長い間一般に公開されてきた製品には、何らかの大きな有用性が存在するものの、一般には決して支持されていないという独自の決定に達するとは思いません。
バークシャー株式時計
4週間
12ヶ月
BRK.A 株価: $743,500.00
BRK.Bの株価：495.82ドル
BRK.B PER (TTM): 12.47
バークシャーの時価総額: 1,061,294,568,527ドル
6月30日時点のバークシャーキャッシュ：3,655億ドル（3月31日比8.0％減）
鉄道現金と未払国庫短期証券を除く: 3,592 億ドル (3 月 31 日から 3.8% 減)
バークシャーは2026年第2四半期に45億ドルの自社株を買い戻した。
（特に断りのない限り、すべての数値は発行日現在のものです）
バークシャーのトップ株式保有 - 2026 年 8 月 21 日
最新の終値に基づいた、米国および日本の公開株式の時価ベースでのバークシャーの保有高上位。
保有資産は、2026年8月14日のバークシャー・ハサウェイの13F申請書で報告されているように、2026年6月30日現在である。ただし、以下の場合を除く。
- 三菱、2025 年 8 月 28 日現在
保有銘柄と現在の市場価値の完全なリストは、CNBC.com のバークシャー・ハサウェイ ポートフォリオ トラッカーから入手できます。
質問またはコメント
ニュースレターに関するご質問やご意見は、alex.crippen@nbcuni.com までお送りください。 (申し訳ありませんが、バフェット氏自身に質問やコメントを転送することはありません。)
このニュースレターをまだ購読していない場合は、ここから登録できます。
また、バフェット氏が株主に宛てた年次書簡も強くお勧めします。ここバークシャーのウェブサイトに集められています。
-- アレックス・クリッペン、ウォーレン・バフェット・ウォッチ編集者`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/22/warren-buffett-not-greg-abel-appears-to-still-be-calling-the-shots-on-stocks.html",
    publishedAt: "2026-08-22T12:06:37+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "inside-coca-cola-s-secretive-innovation-0138842e",
    title: "Inside Coca-Cola’s secretive innovation labs: How the beverage giant wants to automate dirty soda and refreshers",
    titleJa: "コカ・コーラ社の秘密のイノベーション研究所の内部: 大手飲料会社がどのようにして汚れたソーダと清涼飲料を自動化したいのか",
    summaryJa: "アトランタ — コカ・コーラは、消費者や外食サービス事業者がより多くの選択肢を求めるなか、新しいカスタマイズ可能なドリンクやトレンドを取り入れた機器に手を広げています。ここの世界本社からそれほど遠くない、匿名のオフィスパークにひっそりと佇むコーク社は、秘密の研究所で数多くのイノベーションに取り組んでいる。その中には、フリースタイルドリンクディスペンサーでポップ飲料とフレーバーシロップ、クリーム、その他の材料を組み合わせたダーティソーダを作る方法も含まれる。 AMC シアターと提携して、明るい色のリフレッシュ剤を作成できる Micro Matic ディスペンサーをテストしています。そして、コーラは、色や味でカスタマイズできるエナジードリンクなど、さらに多くのホワイトラベル飲料のオプションを準備中です。",
    bodyOriginal: `ATLANTA — Coca-Cola is branching out into new customizable drinks and trend-driven equipment as consumers — and food service operators — increasingly want more options.
Tucked away in an anonymous office park not far from its global headquarters here, Coke has been working on a flood of innovation at its secretive labs, including a way for its Freestyle drink dispensers to make dirty sodas, which combine pop with flavored syrups, cream or other ingredients. In partnership with AMC Theatres, it is testing a Micro Matic dispenser that can make brightly colored refreshers. And Coke has more white-label beverage options on the way, like an energy drink that can be customized by color and flavor.
For many restaurants, handcrafted drinks like refreshers or iced coffee have become an important way to drive traffic and sales, even as diners broadly cut their spending. In the second quarter of this year, beverage servings at restaurants outpaced both servings of food alone and food with beverages, according to Circana data. When consumers are away from home, a drink often represents more than hydration, particularly for Generation Z.
"Oftentimes these beverages are an opportunity to take a break, get some energy or protein, have a treat, at a lower price point," David Portalatin, Circana senior vice president and food service industry advisor, told CNBC.
From McDonald's to Wendy's, longtime Coke customers have been expanding their beverage offerings to meet the shift in consumer behavior and boost their profit margins. As operators seek to add more drinks to their menus, Coke must add more convenient beverage options — or risk losing sales to a competitor.
"It's our job to ensure that we're providing unique experiences and beverages because it's not a bonus now with consumers — it's the norm, they expect it," said Megan Tallman, Coke's vice president of dispensed equipment and innovation for its North American business. "When you think about Gen Z, they are okay paying $10 for a drink that is craveable and that they can show on their Instagram or on TikTok, which is helping our customers drive margin and also beverage attachment."
Beyond Freestyle
This July, Coca-Cola's Freestyle drink dispenser celebrated its 17th anniversary.
"Honestly, if you fast forward to today, Freestyle is more relevant today than probably it was over a decade ago," Tallman said, crediting the machine's dozens of flavors.
Even with the variety it offers, Coke is still trying to evolve to keep up.
In the time since the Freestyle was introduced, the number of specialty beverage chains has exploded, offering customers nearly unlimited ways to customize their drinks, from sugar content to toppings. Market research firm Technomic tracks more than 100 different chains, with more than 41,000 locations across the U.S. combined, selling everything from coffee to juice to boba.
Ever since Freestyle began popping up in restaurants and movie theaters, the dispensers have poured more than 67 billion 8-ounce servings of beverages; Coke has been able to track them all, thanks to the equipment's real-time data collection. That data is coming in handy now.
Inside its Equipment Innovation Center in Atlanta, a massive television screen displays real-time data showing what drinks dispensed by the Freestyle are trending, what time of day and where — from the region to the type of business. AHA sparkling water, for example, is trending up at office buildings and hospitals.
Insights from Freestyle dispensers also help the company discover new drinks that it can launch in grocery stores, like the limited-time Coca-Cola Orange Cream, which combines its namesake soda with vanilla and orange syrup.
"If we see that the flavors that we're offering to consumers in food service are actually resonating — it's the largest testing platform out there," Tallman said.
But Coke has more ideas in store.
First is the Freestyle Mini, which initially launched in Europe. Intended for bars and restaurants with limited space, the dispenser holds up to 16 drink options, more than double the choices available in a traditional soda gun. Coke unveiled the new smaller machine at the National Restaurant Association Show in Chicago this spring, but the company has not yet sold it to customers in the U.S.
And then there are other equipment ideas that aren't as far along, inspired by Coke's desire to branch out into dirty soda, refreshers and coffee.
To automate dirty soda, Coke has created a prototype that adds a dairy module to the classic Freestyle dispenser. Utah-based chain Swig takes credit for its invention of the dirty soda, although the trendy drink has now spread far and wide, from KFC restaurants to grocery store shelves.
The trend has helped to change soda's image from a tired, mass-market drink to a handcrafted beverage that can be a treat.
"Gen Z is the first generation raised to believe that nothing you consume is neutral, so everything is either helping you or costing you," said Matthew Greer, food, agribusiness and beverage analyst for Truist. "So, traditional soda does nothing for me, and it gives me 40 grams of sugar, so that fails the test."
The rise of a dirty soda is boon for Coke, because pop is still its number one category. Coke's sparkling soft drinks business, which houses soda brands like Sprite, Schweppes and Fanta, still accounts for 69% of the company's overall unit case volume, even as other ventures like coffee and dairy-based beverages have grown. Coke's namesake soda alone accounted for 47% of global unit case volume and 42% of U.S. unit case volume in 2025, according to a company filing.
Coke's prototypical dispensed dirty soda comes with a preprogrammed recipe, allowing for little customization but eliminating mess. The prototype, which took roughly three weeks to create, keeps the recognizable drip down the sides of the cup, giving the dirty soda its trademark visual appeal.
Refreshing its offerings
Beyond the Freestyle, Coke is also testing Micro Matic "mixology" dispensers to make refreshers and iced coffee drinks.
Starbucks created the refresher back in 2012 to appeal to non-coffee drinkers who wanted a boost, especially in the afternoon, when traffic to its cafes slowed. Customers can pick their bases, flavors and even caffeine level. Refreshers now represent about $2 billion in annual sales for Starbucks.
Other restaurant chains, such as Panera Bread to Dunkin', have taken note. Refreshers can be found on 8.1% of menus at national restaurant chains, according to Datassential.
"It's almost, I think, a compliment, the fact that our Refresher business is being imitated in so many places," Starbucks CEO Brian Niccol said on the company's earnings conference call in late April.
For its part, Coke is hoping to make its mark on the refresher category — whatever that means.
"There's no real definition for what a refresher is, so we're trying to take a stand on what that can be and what function that we believe it should deliver to the guest," said Sarah Kate Sims, director of dispensed innovation for Coca-Cola North America.
To Sims, a refresher is a "healthier" beverage that delivers some kind of pick-me-up without a traditional coffee caffeine base, instead using a green tea or a natural coffee extract as a base. And a refresher must look good, too, she said.
"So that's what I'm working on for next year," Sims said.
Inside 'The Vault'
Coke's innovation efforts aren't restricted to equipment either. Across the parking lot from its Global Equipment Platforms office is "The Vault," where the company tests new drinks.
"We bring a lot of our top customers here to showcase our innovation and mixology, but also to collaborate and problem-solve and tackle the biggest challenges in the business," said Caroline Zambataro, collaboration architect at Coke.
One of those customers is Whataburger. Coke worked with the Texas-based burger chain for about 18 months on its line of "Whatafreshers," which launched in July.
In some cases, consumers might not even realize that they are drinking a Coke product. For example, the company considers itself a "pioneer" of premium lemonade after launching a white-label version more than a decade ago.
More than 40,000 bubbler dispensers carry the drink, according to Tallman. That number includes Wendy's, which sells it under "Dave's Craft Lemonade," after founder Dave Thomas.
These days, lemonade is a popular base for a lot of refreshers and other brightly colored drinks. So, too, is Sprite, which ranked fifth among U.S. carbonated soft drink brands by 2025 sales volume, according to Beverage Digest.
But Coke is also working on a new blank slate for handcrafted beverages: a colorless, relatively unflavored energy drink that comes in frozen or liquid form. The company plans to launch the beverage with food service operators in the first half of 2027.
Energy drinks are a much smaller category than sparkling beverages, but the segment has the highest expected growth projections for the next 10 years, according to Tallman.
"We believe this solution really meets many consumers because more female consumers are interested in energy if it's a handcrafted solution," Tallman said.
Starting with Celsius, the conversation around energy drinks has changed, widening their audience and the number of occasions where they can be consumed, Truist's Greer said. Rather than a beverage that you buy at the gas station for a pick-me-up, now energy drinks can become a part of some consumers' workout routines.
Coke's take on energy drinks will be designed to be served by employees to "limit consumption," according to Tallman. A 12-ounce serving of Coke's version contains 106 milligrams of caffeine, roughly the same amount as the same size can of Red Bull and half of the caffeine content of a Celsius can. Excessive caffeine consumption has become a liability concern after Panera Bread's Charged Lemonade was named in at least two wrongful death lawsuits.
A golden opportunity
Broadly, Coke has been fielding more inquiries from food service partners these days about customizable drinks, according to Melinda Pritchett, director of innovation for Coke's North American business.
"If you're looking at what McDonald's is doing with the handcrafted beverages, all of our customers are saying, 'We should be in that as well,'" she said.
As the largest U.S. restaurant chain by system sales, McDonald's playbook is often replicated elsewhere. In May, the fast-food giant expanded its McCafe menu in the U.S. to include refreshers and crafted sodas, including Coke's Sprite and Hi-C, as part of its broader strategy to lean into beverages.
"In the U.S., [drink] sales are ahead of plan. Guest checks are higher, and we're seeing new occasions emerge throughout the day," McDonald's CEO Chris Kempczinski said on the company's earnings conference call earlier in August. "We've also seen strong food attachment rates on these orders."
But the drink launch arrived during what was otherwise a lackluster quarter for McDonald's U.S. business, which reported same-store sales growth of just 0.8%. The company has replaced its U.S. president in the hopes of accelerating its domestic division.
On Monday, McDonald's further expanded its beverage options with the Red Bull Dragonberry Energizer. Red Bull is privately owned, with no connection to Coke. The chain's choice to partner with a competitor rather than using an energy drink affiliated with Coke, like Monster, has sparked speculation about the state of the companies' more than 70-year-long relationship.
"We have a fantastic and very long-standing partnership with McDonald's, and that's intact, right? We continue to be very happy with that partnership," Coke CEO Henrique Braun said on the company's earnings conference call in late April, answering an analyst question about the partnership. "… We do respect the decisions on other choices about their relationships with other companies."
Ultimately, the most important part of any business relationship is the effect on sales.
When testing a new beverage with a food service partner, Coke tracks a couple of different performance metrics, like "incremental volume." In other words, would a customer buy one of the new refreshers even if they wouldn't otherwise buy a drink?
A survey of several dozen U.S. McDonald's franchisees conducted by Kalinowski Equity Research found that more than half of operators said the specialty drinks are performing in line with their expectations.
"They are selling great, but most of it is a trade-off from other beverages," one anonymous franchisee said in the survey. "Not many new transaction counts."`,
    bodyJa: `アトランタ — コカ・コーラは、消費者や外食サービス事業者がより多くの選択肢を求めるなか、新しいカスタマイズ可能なドリンクやトレンドを取り入れた機器に手を広げています。
ここの世界本社からそれほど遠くない、匿名のオフィスパークにひっそりと佇むコーク社は、秘密の研究所で数多くのイノベーションに取り組んでいる。その中には、フリースタイルドリンクディスペンサーでポップ飲料とフレーバーシロップ、クリーム、その他の材料を組み合わせたダーティソーダを作る方法も含まれる。 AMC シアターと提携して、明るい色のリフレッシュ剤を作成できる Micro Matic ディスペンサーをテストしています。そして、コーラは、色や味でカスタマイズできるエナジードリンクなど、さらに多くのホワイトラベル飲料のオプションを準備中です。
多くのレストランにとって、客が支出を大幅に削減しているにもかかわらず、清涼飲料やアイスコーヒーなどの手作りドリンクは、客足と売上を伸ばす重要な手段となっている。サーカナのデータによると、今年の第 2 四半期には、レストランでの飲み物の提供が、食事のみの提供と飲み物との食事の両方を上回りました。消費者が家を離れているとき、特に Z 世代にとって、飲み物は水分補給以上の意味を持つことがよくあります。
「これらの飲料は、休憩したり、エネルギーやタンパク質を摂取したり、低価格でご馳走を食べたりする機会となることがよくあります」と、Circana 上級副社長兼外食産業アドバイザーの David Portalatin 氏は CNBC に語った。
マクドナルドからウェンディーズまで、長年のコーラの顧客は、消費者行動の変化に対応して利益率を高めるために、飲料の品揃えを拡大してきました。事業者がメニューにさらに多くの飲み物を追加しようとしているため、コーラ社はより便利な飲み物のオプションを追加する必要があり、そうしないと競合他社に売上を奪われるリスクがあります。
「ユニークな体験と飲み物を確実に提供するのが私たちの仕事です。消費者にとってそれはボーナスではなく、それが標準であり、彼らがそれを期待しているからです」と、コーク社の北米事業の調剤機器およびイノベーション担当バイスプレジデント、ミーガン・トールマン氏は語った。 「Z世代のことを考えると、彼らはインスタグラムやTikTokに載せてインスタグラムやTikTokに載せられるような、欲しがる飲み物に10ドル払っても平気です。これにより、当社の顧客は利益率を高め、また飲み物への愛着を高めることができています。」
フリースタイルを超えて
今年7月、コカ・コーラのフリースタイルドリンクディスペンサーは発売17周年を迎えた。
「正直に言って、今日に早送りすると、Freestyle はおそらく 10 年以上前よりも今日のほうが関連性が高いです」とトールマン氏は述べ、このマシンの数十のフレーバーを評価しました。
さまざまな種類の製品が提供されているにもかかわらず、コカ・コーラは今もそれに追いつくために進化しようとしています。
フリースタイルが導入されて以来、特製飲料チェーンの数は爆発的に増加し、糖分の含有量からトッピングに至るまで、ほぼ無制限に飲み物をカスタマイズする方法を顧客に提供しています。市場調査会社 Technomic は、コーヒーからジュース、ボバまであらゆるものを販売する、全米の 41,000 以上の店舗を合わせた 100 以上の異なるチェーンを追跡しています。
フリースタイルがレストランや映画館に登場し始めて以来、ディスペンサーは 8 オンス 670 億杯以上の飲料を注ぎました。 Coke は、装置のリアルタイム データ収集のおかげで、それらすべてを追跡することができました。そのデータが今役に立ちます。
アトランタにある同社の機器イノベーション センター内の巨大なテレビ画面には、フリースタイルによって提供されるどのドリンクがトレンドになっているか、いつ、どこで、地域から業種までを示すリアルタイム データが表示されます。たとえば、AHA炭酸水はオフィスビルや病院で人気が高まっています。
フリースタイル ディスペンサーからの洞察は、同社が、その名の由来となったソーダとバニラとオレンジ シロップを組み合わせた期間限定のコカ・コーラ オレンジ クリームなど、食料品店で発売できる新しい飲み物を発見するのにも役立ちます。
「食品サービスで消費者に提供しているフレーバーが実際に反響を呼んでいるのであれば、それは最大のテストプラットフォームです」とトールマン氏は語った。
しかし、Coke にはさらに多くのアイデアが用意されています。
1 つ目は、最初にヨーロッパで発売された Freestyle Mini です。このディスペンサーは、スペースが限られているバーやレストラン向けで、最大 16 種類のドリンク オプションを保持できます。これは、従来のソーダ ガンで利用できる選択肢の 2 倍以上です。コーク社はこの春、シカゴで開催された全米レストラン協会ショーでこの小型の新型機械を発表したが、同社はまだ米国内の顧客には販売していない。
そして、ダーティソーダ、清涼飲料水、コーヒーに事業を拡大したいというコーク社の願望に触発された、それほど進んでいない他の機器のアイデアもあります。
ダーティソーダを自動化するために、Coke は古典的な Freestyle ディスペンサーに乳製品モジュールを追加するプロトタイプを作成しました。ユタ州に本拠を置くチェーン店スウィッグは、ダーティソーダの発明を自社の功績としているが、この流行の飲み物は現在、KFC レストランから食料品店の棚に至るまで、広範囲に広まっている。
この傾向は、ソーダのイメージを飽きた大衆向けの飲み物から、ご褒美になる手作りの飲み物へと変えるのに役立っています。
「Z世代は、自分が消費するものは何も中立であると信じて育てられた最初の世代です。したがって、すべてが自分を助けるか、犠牲を払うかのどちらかです」とトラスト社の食品・アグリビジネス・飲料アナリストのマシュー・グリア氏は言う。 「つまり、伝統的なソーダは私には何の役にも立たず、40グラムの砂糖が入ってしまうので、テストには不合格なのです。」
ダーティソーダの台頭はコーラにとって恩恵だ。なぜならポップスが依然としてコーラの最大のカテゴリーだからだ。スプライト、シュウェップス、ファンタなどのソーダブランドを擁するコーク社のスパークリングソフトドリンク事業は、コーヒーや乳製品ベースの飲料などの他の事業が成長しているにもかかわらず、依然として同社全体のユニットケース量の69％を占めている。同社の提出書類によると、コークの名を冠したソーダだけで、2025年には世界のユニットケース量の47％、米国のユニットケース量の42％を占めた。
コーラの典型的な分配ダーティソーダには、事前にプログラムされたレシピが付属しており、カスタマイズはほとんどできませんが、混乱はありません。作成に約 3 週間かかったこのプロトタイプは、カップの側面に目に見える滴りを残し、ダーティーソーダのトレードマークである視覚的な魅力を与えています。
提供内容を更新する
フリースタイル以外にも、コーク社は清涼飲料やアイスコーヒー飲料を作るためのマイクロマティック「ミクソロジー」ディスペンサーのテストも行っている。
スターバックスは2012年に、特にカフェへの客足が鈍くなる午後に、コーヒーを飲まない人に元気を与えたいとアピールするためにこのリフレッシュメニューを作成した。顧客はベース、フレーバー、さらにはカフェインレベルを選択できます。現在、スターバックスの年間売上高は約 20 億ドルに達しています。
パネラ・ブレッド・トゥ・ダンキンなどの他のレストランチェーンも注目している。 Datassential によると、全国的なレストラン チェーンのメニューの 8.1% にリフレッシュメントが掲載されています。
スターバックスのブライアン・ニコル最高経営責任者（CEO）は4月下旬の決算会見で、「当社のリフレッシャー事業が多くの場所で模倣されているという事実は、ほぼ褒め言葉だと思う」と語った。
コカ・コーラ社としては、それが何を意味するにせよ、リフレッシュメントのカテゴリーで名を残したいと考えている。
コカ・コーラ ノースアメリカの調剤イノベーション担当ディレクター、サラ・ケイト・シムズ氏は、「リフレッシュ剤が何なのかについての本当の定義はありません。そのため、リフレッシュ剤がどのようなものであり、ゲストにどのような機能を提供するべきであると考えられるのかについて、私たちは立場を確立しようとしています」と述べました。
シムズにとってリフレッシュとは、伝統的なコーヒーカフェインベースを使用せず、代わりに緑茶または天然コーヒー抽出物をベースとして使用し、ある種の元気を与える「より健康的な」飲み物です。そして、リフレッシュ剤は見栄えもよくなければならない、と彼女は言いました。
「だから、それが私が来年に向けて取り組んでいることだ」とシムズは語った。
「ザ・ボールト」の内部
コカ・コーラ社のイノベーションへの取り組みは機器に限定されません。 Global Equipment Platforms オフィスの駐車場の向かいには、同社が新しい飲み物をテストする「The Vault」があります。
「当社のイノベーションとミクソロジーを紹介するためだけでなく、協力して問題を解決し、ビジネスの最大の課題に取り組むために、多くのトップ顧客をここに連れてきます」とコーク社のコラボレーションアーキテクト、キャロライン・ザンバタロ氏は述べた。
その顧客の 1 つが Whataburger です。コカ・コーラは、テキサスに本拠を置くハンバーガーチェーンと約18か月間協力し、7月に発売した「ワッタフレッシャーズ」ラインを開発した。
場合によっては、消費者は自分がコーラ製品を飲んでいることにさえ気づかないかもしれません。たとえば、同社は10年以上前にホワイトラベルバージョンを発売して以来、プレミアムレモネードの「先駆者」であると自認している。
トールマン氏によると、4万台以上のバブラーディスペンサーがこのドリンクを扱っているという。この数には、創業者デイブ・トーマスの名をとって「デイブズ・クラフト・レモネード」として販売しているウェンディーズも含まれている。
最近、レモネードは、多くの清涼飲料水やその他の明るい色の飲み物のベースとして人気があります。ビバレッジ・ダイジェストによると、2025年の販売量で米国の炭酸飲料ブランドの中で5位にランクされているスプライトも同様だ。
しかし、コーラは手作り飲料の新たな白紙の状態にも取り組んでいる。それは、冷凍または液体の形で提供される、無色で比較的味のないエナジードリンクだ。同社は2027年上半期に外食事業者と共同でこの飲料を発売する予定だ。
トールマン氏によると、エナジードリンクはスパークリング飲料に比べてはるかに小さいカテゴリーだが、今後10年間の成長予測が最も高いセグメントだという。
「手作りのソリューションであれば、より多くの女性消費者がエネルギーに興味を持つため、このソリューションは多くの消費者に本当に満足していると私たちは信じています」とトールマン氏は述べた。
トラスト社のグリア氏によると、摂氏を皮切りに、エナジードリンクをめぐる会話が変わり、対象者やエナジードリンクを飲む機会が広がったという。エネルギードリンクは、元気を取り戻すためにガソリンスタンドで買う飲み物ではなく、一部の消費者のトレーニングルーチンの一部になり得るようになりました。
トールマン氏によると、コーラ社のエナジードリンクは「消費量を制限する」ために従業員が提供するように設計されるという。 12オンスのコーラバージョンには106ミリグラムのカフェインが含まれており、これは同じサイズのレッドブル缶とほぼ同量で、セルシウス缶のカフェイン含有量の半分である。パネラブレッド社のチャージドレモネードが少なくとも2件の不法死亡訴訟で名前を挙げられたことを受け、カフェインの過剰摂取が法的責任の懸念となっている。
絶好のチャンス
コーク社の北米事業イノベーション担当ディレクター、メリンダ・プリチェット氏によると、概して、コーク社は最近、カスタマイズ可能なドリンクについて外食サービスパートナーからの問い合わせが増えているという。
「マクドナルドが手作り飲料で何をしているかを見ると、顧客は皆、『私たちもそれに参加すべきだ』と言っています」と彼女は言う。
システム売上高で米国最大のレストラン チェーンであるマクドナルドの戦略は、他の場所でも模倣されることがよくあります。ファーストフード大手は5月、飲料に注力する広範な戦略の一環として、米国でのマックカフェのメニューを拡大し、コーラのスプライトやハイシーなどの清涼飲料水やクラフトソーダを含めた。
マクドナルドのクリス・ケンプチンスキー最高経営責任者（CEO）は8月初旬の決算会見で、「米国では（飲料の）売り上げが計画を上回っている。宿泊客のチェック額も高く、一日を通して新たな機会が生まれている」と語った。 「これらの注文では、食品の添付率が高いことも確認されています。」
しかし、この飲料の発売は、マクドナルドの米国事業にとって、既存店売上高の伸び率がわずか0.8％にとどまり、それ以外は精彩を欠いた四半期に到来した。同社は国内部門の加速を目指して米国社長を交代した。
月曜日、マクドナルドはレッドブル・ドラゴンベリー・エナジャイザーで飲料の選択肢をさらに拡大した。レッドブルは個人所有であり、コーラとは何の関係もありません。モンスターのようなコーラ系エナジードリンクを利用するのではなく、競合他社と提携するという同社の選択は、両社の70年以上にわたる関係の現状についての憶測を呼んでいる。
コーク社のエンリケ・ブラウン最高経営責任者（ＣＥＯ）は４月下旬の決算会見で、「マクドナルドとは非常に長く続く素晴らしいパートナーシップがあり、それはそのままだよね？われわれは今後もそのパートナーシップに非常に満足している」と述べ、提携に関するアナリストの質問に答えた。 「…当社は、他社との関係に関する他の選択に関する決定を尊重します。」
結局のところ、ビジネス関係において最も重要な部分は、売上への影響です。
食品サービスパートナーと新しい飲料をテストする際、Coke は「増分量」など、いくつかの異なるパフォーマンス指標を追跡します。言い換えれば、顧客は、たとえ他の飲み物を買わなかったとしても、新しいリフレッシュ剤の 1 つを購入するでしょうか?
カリノフスキー・エクイティ・リサーチが米国マクドナルドのフランチャイズ加盟数十社を対象に実施した調査では、半数以上の経営者が特製ドリンクの業績は期待通りだと回答したことが判明した。
ある匿名のフランチャイズ加盟者は調査で、「売り上げは好調だが、そのほとんどは他の飲料とのトレードオフだ」と述べた。 「新規取引数はそれほど多くありません。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/22/coca-cola-innovation-labs-dirty-sodas-refreshers.html",
    publishedAt: "2026-08-22T12:00:01+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "we-are-committed-christians-our-son-and-15c12426",
    title: "‘We are committed Christians’: Our son and daughter-in-law cut us out of their lives after a political argument. Should we change our $3 million will?",
    titleJa: "「私たちは献身的なクリスチャンです」: 私たちの息子と嫁は、政治的議論の後、私たちを人生から遠ざけました。 300万ドルの遺言書を変更すべきでしょうか？",
    summaryJa: "「私たちは傷つき、混乱していますが、彼らが定めた境界線を尊重しようとも努めてきました。」",
    bodyOriginal: `“We are hurt and confused, but we have also tried to respect the boundaries they have established.”`,
    bodyJa: `「私たちは傷つき、混乱していますが、彼らが定めた境界線を尊重しようとも努めてきました。」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/we-are-hurt-our-son-and-daughter-in-law-cut-off-contact-with-us-over-politics-should-we-change-our-3-million-will-f763b761?mod=mw_rss_topstories",
    publishedAt: "2026-08-22T12:00:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-01814240",
    readTime: 2,
  },
  {
    id: "there-is-considerable-tension-my-grandm-85f06665",
    title: "‘There is considerable tension’: My grandmother, 99, wants to cut my mother out of her will. Should I intervene?",
    titleJa: "「かなりの緊張感が漂っている」：99歳の祖母は、母を自分の意志から切り離したいと考えている。介入すべきでしょうか？",
    summaryJa: "「おばあちゃんは、母から 5 万ドルの HELOC を引き出すよう圧力をかけられたと感じています。」",
    bodyOriginal: `“Grandma feels that she was pressured by my mother into taking out a $50,000 HELOC.”`,
    bodyJa: `「おばあちゃんは、母から 5 万ドルの HELOC を引き出すよう圧力をかけられたと感じています。」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/there-is-considerable-tension-my-grandmother-99-wants-to-cut-my-mother-out-of-her-will-should-i-intervene-5e8f408e?mod=mw_rss_topstories",
    publishedAt: "2026-08-22T12:00:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-24501821",
    readTime: 2,
  },
  {
    id: "ahead-of-tough-new-u-s-sanctions-iran-cr-00388987",
    title: "Ahead of tough new U.S. sanctions, Iran criticizes 'extraterritorial sovereignty'",
    titleJa: "米国の新たな厳しい制裁を前に、イランは「治外法権」を批判",
    summaryJa: "イランは土曜日、米国に対して厳しい発言を続けた。」新たに厳しい制裁を課す計画だ。イラン外務省報道官エスマイル・バカエイ氏はＸへの投稿で、「米国のイランに対する新たな経済制裁宣言は、一国に対する違法な『経済戦争』の継続をはるかに超えたものである」と述べ、「これは独立した国連加盟国すべてに対する域外主権の主張である」と述べた。",
    bodyOriginal: `Iran maintained its harsh rhetoric Saturday against the U.S.' plans to impose tough new sanctions.
"The United States' declaration of new economic sanctions on Iran is far more than continued unlawful 'economic warfare' against a single country," Iranian Foreign Ministry spokesman Esmaeil Baqaei said in a post on X. "It is an assertion of extraterritorial sovereignty over every independent Member State of the United Nations."
U.S. Treasury Secretary Scott Bessent told CNBC on Thursday that the Trump administration's plan to crush Iran's economy will likely negate the need for major U.S. military operations against the Islamic Republic.
Bessent vowed that the U.S. will create "the greatest coordinated economic isolation in the history of the world" against Iran.
He said he will hold a news conference on Monday to "talk about exactly what we're going to do."
In a preview of the plan, he said that the U.S. will be telling all of its allies, "You are either with us or against us."
Vice President JD Vance said economic pressure is the United States' "most effective tool" against Iran.
Speaking on a podcast, Vance said that the move was "a delicate dance" as both sides apply pressure to each other, but added that "what has been true over the last couple of weeks is they felt a lot more pressure than we have."
Iran's parliament speaker Mohammad Baqer Qalibaf told an event in the Iraqi capital Baghdad on Friday that Muslim countries must make a plan to overcome "cruel" sanctions, according to a government summary of his comments.
'Crushing economic operation'
The comments came after U.S. President Donald Trump said the U.S. will launch what he called the "most crushing economic operation ever taken against any country" against Iran. Trump also threatened severe financial penalties on any nation that helps Tehran evade sanctions, and added that "this will be Economic Warfare and Isolation on an unprecedented scale."
While both sides have held off attacking one another's targets in recent days, shipping through the economically crucial Strait of Hormuz remains a fraction of its levels before the U.S. launched its war against Iran on Feb. 28. Negotiations to reopen the strait have stalled.
Recently observed ship traffic through Hormuz has remained low, with 10 crossings on Monday and two transits on Sunday, according to data provided by the trade intelligence firm Kpler.
Oil prices were little changed Friday after Iran's president indicated that Tehran wants the war with the U.S. to end sooner rather than later.
Brent crude futures added 61 cents to close at $94.39 per barrel. U.S. West Texas Intermediate futures rose 23 cents to $87.06. Oil prices finished the week more than 5% higher after Bessent's comments.
Iranian President Masoud Pezeshkian described his country's memorandum of understanding with the U.S. signed on June 17 as a victory for the Islamic Republic. Pezeshkian said "it is better to end the war today" when Iran is "in a position of power and dignity," according to the state news agency PressTV.
The MOU allowed Tehran to determine how the Strait of Hormuz would be administered through negotiations with Oman and the other Gulf states.
One analyst questioned the effectiveness of the new round of economic penalties.
Helima Croft, head of global commodity strategy at RBC Capital Markets said Iran is already one of the most sanctioned countries in the world. It is not clear whether the U.S. will go after China and Russia who are partners of Iran, Croft told CNBC's "Squawk on the Street."
The question is whether more sanctions will change Iran's behavior, Croft said. Tehran appears to believe that it can outlast the U.S., she said.`,
    bodyJa: `イランは土曜日、米国に対して厳しい発言を続けた。」新たに厳しい制裁を課す計画だ。
イラン外務省報道官エスマイル・バカエイ氏はＸへの投稿で、「米国のイランに対する新たな経済制裁宣言は、一国に対する違法な『経済戦争』の継続をはるかに超えたものである」と述べ、「これは独立した国連加盟国すべてに対する域外主権の主張である」と述べた。
スコット・ベッセント米財務長官は木曜日、CNBCに対し、イラン経済を破壊するというトランプ政権の計画により、イスラム共和国に対する米軍の大規模な軍事作戦の必要性がなくなる可能性が高いと語った。
ベッセント氏は、米国はイランに対して「世界史上最大の協調的な経済的孤立」を築くと誓った。
同氏は月曜日に記者会見を開き、「我々が何をしようとしているのか正確に話し合う」と述べた。
同氏は計画の下見の中で、米国がすべての同盟国に「あなた方は我々に味方するか、我々に敵対するかのどちらかだ」と伝えるだろうと述べた。
JD・バンス副大統領は、経済的圧力は米国のイランに対する「最も効果的な手段」であると述べた。
ヴァンス氏はポッドキャストで、双方が互いに圧力をかけているため、この動きは「デリケートな踊り」だったと述べたが、「ここ数週間で真実なのは、彼らが我々よりもはるかに大きなプレッシャーを感じていたということだ」と付け加えた。
イラン国会議長のモハマド・バケル・カリバフ氏は金曜日、イラクの首都バグダッドで行われたイベントで、イスラム諸国は「残酷な」制裁を克服する計画を立てる必要があると述べた、同氏の発言をまとめた政府の発表によると。
「経済運営の破壊」
このコメントは、ドナルド・トランプ米大統領が、米国はイランに対して「これまでどの国に対しても行われた中で最も壊滅的な経済作戦」と呼ぶものを開始すると述べた後に出された。トランプ大統領はまた、イラン政府の制裁回避に協力した国には厳しい経済制裁を科すと脅迫し、「これは前例のない規模の経済戦争と孤立になるだろう」と付け加えた。
両国はここ数日、互いの目標への攻撃を控えているが、経済的に重要なホルムズ海峡を通過する船舶の輸送量は、米国が2月28日に対イラン戦争を開始する前の水準にとどまっている。海峡再開に向けた交渉は行き詰まっている。
貿易情報会社Kplerが提供したデータによると、最近観察されたホルムズを通過する船舶の交通量は少ないままで、月曜日には10回の航行があり、日曜日には2回の通過であった。
金曜日、イラン大統領が米国との戦争の早期終了をイラン政府が望んでいることを示唆した後、原油価格はほとんど変化しなかった。
北海ブレント原油先物は61セント追加し、1バレル＝94.39ドルで取引を終えた。米国ウェスト・テキサス・インターミディエート先物は２３セント上昇し８７．０６ドル。ベッセント氏のコメントを受けて原油価格は５％超上昇して週を終えた。
イランのマスード・ペゼシキアン大統領は、6月17日に署名されたイランの米国との覚書はイスラム共和国の勝利であると述べた。国営通信社プレスTVによると、ペゼシキアン氏は、イランが「権力と尊厳の立場にある」ときは「今日、戦争を終わらせたほうが良い」と語った。
この覚書により、イラン政府はオマーンや他の湾岸諸国との交渉を通じてホルムズ海峡をどのように管理するかを決定することが可能となった。
あるアナリストは、新たな経済制裁の有効性に疑問を呈した。
ＲＢＣキャピタル・マーケッツの世界商品戦略責任者ヘリマ・クロフト氏は、イランはすでに世界で最も制裁を受けている国の一つだと述べた。クロフト氏はCNBCの番組「Squawk on the Street」で、米国がイランのパートナーである中国とロシアを追及するかどうかは不明だと語った。
クロフト氏は、さらなる制裁でイランの行動が変わるかどうかが問題だ、と述べた。イラン政府は米国よりも長く存続できると信じているようだ、と彼女は語った。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/22/iran-criticizes-us-sanctions-extraterritorial-sovereignty.html",
    publishedAt: "2026-08-22T10:34:23+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "search-for-survivors-after-16-killed-by-9ac521e6",
    title: "Search for survivors after 16 killed by Russian double-tap strike on Ukraine mall",
    titleJa: "ウクライナのショッピングモールでロシアによるダブルタップ攻撃で16人死亡、生存者捜索",
    summaryJa: "ウクライナのショッピングモールでロシアによるダブルタップ攻撃で16人死亡、生存者捜索- 公開されました",
    bodyOriginal: `Search for survivors after 16 killed by Russian double-tap strike on Ukraine mall
- Published
Rescuers in Ukraine worked through the night to search for survivors in the wreckage of a shopping centre hit by a deadly Russian double-tap drone strike.
Sixteen people were killed and 130 injured in the busy mall in Kryvyi Rih on Friday, local officials said. Nine people are reportedly still missing.
President Volodymyr Zelensky said the "cynical and despicable" attack was carried out in two waves, with the second strike targeting emergency workers at the scene.
Meanwhile, local officials said at least two people had been killed by further Russian strikes early on Saturday. The defence ministry in Moscow said it had targeted transport infrastructure and warehouses.
Twenty-three children are among those injured by Friday's attack on the shopping centre in the Dnipropetrovsk region, said regional military head Oleksandr Hanzha.
Hanzha said the death toll had reached 16 after another body was retrieved from the rubble overnight. He previously said 29 people were in a serious condition, prompting fears the toll could rise further.
Dramatic footage verified by the BBC showed the second drone hitting the already burning mall in Zelensky's hometown. Russia's military has not commented.
Rescue teams from four other Ukrainian regions were urgently deployed to help search for survivors.
Kryvyi Rih Mayor Oleksandr Vilkul said the Russian drones were flying at "extremely low altitudes", describing the attackers as "animals".
"There are missing people who are not responding to calls," the mayor added.
As rescue efforts continued overnight, local authorities in Kyiv said one person had been killed after a fire broke out in a warehouse following an alert for a ballistic missile.
In the southern city of Zaporizhzhia, a Russian drone strike killed at least one man and injured four people, according to Ivan Fedorov, the head of the regional military administration.
Four people - including three children - were killed in separate Russian attacks in Ukraine's southern Mykolaiv region on Friday, and another two in the north-eastern Kharkiv region, local officials said.
And on Thursday 17 people were killed and more than 40 injured in a major Russian missile and drone attack on Ukraine's capital Kyiv.
Earlier on Friday, Ukraine's military said it carried out strikes on an oil refinery and a military airfield deep inside Russia.
Ukraine has in recent months intensified attacks on Russian energy facilities, as well as on warehouses of the country's largest online retailer Wildberries.
Kyiv describes them as legitimate targets because they help finance Russia's war.
Russian President Vladimir Putin launched a full-scale invasion of Ukraine in February 2022, and currently Moscow controls about a fifth of Ukrainian territory in the south-east.
Related topics
- Published2 days ago
- Published3 days ago`,
    bodyJa: `ウクライナのショッピングモールでロシアによるダブルタップ攻撃で16人死亡、生存者捜索
- 公開されました
ウクライナの救助隊は、ロシアのダブルタップ無人機攻撃による致命的な攻撃を受けたショッピングセンターの残骸の中から生存者を捜索するために夜を徹して活動した。
地元当局者によると、金曜日、クリヴィ・リーの繁華街で16人が死亡、130人が負傷した。現在も9人が行方不明となっていると伝えられている。
ヴォロディミル・ゼレンスキー大統領は、「冷笑的かつ卑劣な」攻撃は2波に分けて行われ、2回目の攻撃は現場の救急隊員を標的にしたと述べた。
一方、地元当局者らは、土曜日早朝にロシアによるさらなる空爆により少なくとも２人が死亡したと発表した。モスクワの国防省は、輸送インフラと倉庫が標的になったと発表した。
ドニプロペトロウシク地域のショッピングセンターに対する金曜日の攻撃で負傷した人の中には23人の子供も含まれていると、地域軍のオレクサンドル・ハンザ長官は述べた。
ハンザ氏は、一夜にして瓦礫の中から別の遺体が発見された後、死者数は16人に達したと述べた。同氏は以前、29人が重篤な状態にあると発表しており、死者数がさらに増加する可能性があるとの懸念を引き起こしていた。
BBCが検証した劇的な映像には、ゼレンスキー氏の故郷にある既に燃えているショッピングモールに2機目のドローンが衝突する様子が映っていた。ロシア軍はコメントしていない。
ウクライナの他の4つの地域から救助チームが緊急派遣され、生存者の捜索を支援した。
クリヴィ・リフ市長のオレクサンドル・ヴィクルル氏は、ロシアの無人機が「極めて低空」で飛行していたと述べ、攻撃者を「動物」と表現した。
市長は「通報に応じない行方不明者もいる」と付け加えた。
救助活動は夜通し続いたが、キエフの地元当局は、弾道ミサイルの警報を受けて倉庫で火災が発生し、１人が死亡したと発表した。
地方軍事行政長官イワン・フェドロフ氏によると、南部ザポリージャ市でロシアの無人機攻撃により少なくとも１人が死亡、４人が負傷した。
地元当局者らによると、金曜日、ウクライナ南部ムィコラーイウ地域でロシアによる個別の攻撃で子供３人を含む４人が死亡し、ハリコフ北東部でも２人が死亡した。
そして木曜日には、ウクライナの首都キエフに対するロシアの大規模なミサイルとドローン攻撃で17人が死亡、40人以上が負傷した。
ウクライナ軍は金曜日初め、ロシア奥深くにある製油所と軍用飛行場を攻撃したと発表した。
ウクライナはここ数カ月、ロシアのエネルギー施設や同国最大のオンライン小売業者ワイルドベリーの倉庫への攻撃を強化している。
キエフは、彼らはロシアの戦争資金を援助しているため、正当な標的であると説明している。
ロシアのウラジーミル・プーチン大統領は2022年2月にウクライナへの本格的な侵攻を開始し、現在モスクワは南東部のウクライナ領土の約5分の1を支配している。
関連トピック
- 2 日前に公開
- 3 日前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c39egw7nmk2o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-22T06:40:30+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/da84/live/0b5a45c0-9d86-11f1-adf5-2dc21c9cc109.png",
    readTime: 3,
  },
  {
    id: "six-investors-reveal-the-biggest-market-37952803",
    title: "Six investors reveal the biggest market risks — and one strategy they agree on",
    titleJa: "6 人の投資家が最大の市場リスクを明らかに、そして彼らが同意する 1 つの戦略",
    summaryJa: "今年は世界市場にとって不安定な年となり、一部の取引が報われる一方、他の取引は罰せられることとなった。CNBCは6人の投資家に、彼らが認識している最大のリスクと、それに対応してポートフォリオをどのように位置付けているかについて質問した。市場への最大の脅威についての見解の違いにもかかわらず、投資家らは繰り返し同じ反応、つまり今年の最大の勝者以外にも多様化するという答えに戻った。",
    bodyOriginal: `It has been a volatile year for global markets, rewarding some trades while punishing others.
CNBC asked six investors about the biggest risks they see and how they are positioning portfolios in response. Despite differing views on the biggest threat to markets, the investors repeatedly returned to the same response: diversify beyond this year's biggest winners.
Fading U.S. exceptionalism
Chris Rush, investment manager at IBOSS, told CNBC the biggest risk investors were taking was being "too concentrated in the winners of the past and missing other opportunities around the world."
"It is easy to focus on the short-term noise," he said. "But with U.S. equities already making up such a large proportion of global portfolios, we think concentration is a bigger risk. U.S. exceptionalism has also started to fade from the levels seen before 2025, while rising debt levels among the Magnificent Seven add to the risks of continuing to chase the same companies."
Real estate investment trusts, which Rush said "have been out of favor for years but now look increasingly attractive" from a valuation perspective, were one asset his team are using to broaden portfolios, alongside U.K. equities, and stocks listed in Asia and emerging markets.
"Investors have understandably been focused on the AI winners in Korea and Taiwan, but China has performed particularly well during the most recent pullback and we think it remains well positioned," he said.
'Don't die trying to be a hero'
Ben Kumar, head of strategy for wealth, investment and public policy at British asset management firm 7IM, told CNBC the big challenge for investors this year "hasn't been managing overall volatility, it's been managing specific volatility."
"The winners and losers have kept chopping and changing," he explained. "Overall, the wins have been bigger than the losses … but being too exposed to any one theme, sector or style has been very tricky."
Kumar noted that energy stocks have been the best and worst performers twice this year, as have IT stocks.
"Everything has worked at some points, nothing has worked at all points," he said. "Diversification has helped hugely — across sectors and regions. And if, like us, you're prepared not to go all in on winners (and risk being a loser), it's been a pretty good year."
"You don't need to be a hero in this market — just let it work for you, and keep your exposures broad," he added. "Don't die trying to be a hero."
Complacency warning
London-based Ben Seager-Scott, chief investment officer at Forvis Mazars, told CNBC "two powerful forces" — the Iran war and strong U.S. corporate earnings — were pulling markets in opposite directions, and that markets risked becoming complacent around events in the Middle East, inflationary pressure and shifts in the AI trade.
"In terms of our portfolios, it has been more about finessing — we have cut back some of our equity risk overweight (whilst remaining marginally overweight) and have rotated more out of the mega-cap technology names into ordinary U.S. stocks, mostly by shifting from market cap weighted exposures to equal weight exposures," he said.
'Uncomfortable trade-off'
Charlie Ambler, co-chief investment officer and partner at Saltus, said the biggest risk to portfolios in his team's view is a policy bind around interest rates.
"Central banks are struggling to bring long-term rates under control at precisely the moment the economy is absorbing a massive AI infrastructure buildout, which is capital-hungry and inflationary at the margin," he said. "The problem is that the required tonic, raising short-term rates, has become harder to pull."
Policymakers have been left with "an uncomfortable trade-off" between controlling inflation and maintaining financial stability, he said — and portfolios "need to be positioned for the possibility that they don't get it cleanly right."
Ambler also said his team's response to the uncertainty was to "broaden out."
"Rather than concentrating risk in the areas that have driven recent returns, we're widening our exposures across equities, fixed income and alternatives," he told CNBC. "Within alternatives in particular, the focus is on assets whose returns don't simply move in line with equity and bond markets."
Steve Brice, global chief investment officer at Standard Chartered, said the biggest cyclical risk is that something disrupts the global AI boom, while the biggest structural risk is the outlook for fiscal policy and inflation.
Brice cautioned against taking a "barbell approach" to the current market of investing heavily in growth areas while holding excessive cash.
"While the former has been very profitable, the latter is sub-optimal in our opinion as this area is likely to see purchasing power being eroded," he told CNBC. "Therefore, we argue for investors to have a more diversified portfolio by increasing their allocation to other areas of equities — such as developed market financials and euro area industrials — and ensuring portfolios are buffered by allocations to both bonds, gold and other alternative asset classes where possible."
Why AI spending could force the next rotation
Billy Leung, an investment strategist at Global X ETFs, said markets are currently running "two live risk debates in parallel."
"On the acute side, the Strait of Hormuz situation remains unresolved … so the geopolitical premium in oil is not going away quickly," he told CNBC. "But the more durable risk sits with AI capex. The scale of financing now being committed to AI infrastructure build-out, well into the hundreds of billions, is reviving a genuine debate about circular financing structures and weak free cash flow conversion across parts of the AI ecosystem. That is the risk with the longer tail, because unlike a geopolitical shock, it does not resolve on a single headline."
Leung said positioning data showed equity investors were not taking a particularly defensive stance despite resurging bouts of volatility — and that "if anything it looks under-hedged."
"Implied volatility across major indices and ETFs has been drifting down toward one-year lows, and skew is sitting near the bottom of its range, which points to broad-based bullishness rather than fear," he said. "On sector rotation, the clearest beneficiaries have been data center-linked industrials, energy and travel, while healthcare, staples and real estate have lagged."
According to Leung, the trigger most likely to force a real repositioning is AI capital spending durability rather than macroeconomic data signals.
"There is a growing and legitimate debate about whether the sheer scale of AI-related investment is starting to crowd out other forms of capital expenditure in the economy, and separately whether the financing structures underpinning that build-out can support the free cash flow gap over time," he said. "If that debate starts showing up in guidance or financing costs rather than staying theoretical, that is what forces a rotation, not a broad AI selloff, but capital moving away from pure infrastructure plays toward names with nearer-term monetization."`,
    bodyJa: `今年は世界市場にとって不安定な年となり、一部の取引が報われる一方、他の取引は罰せられることとなった。
CNBCは6人の投資家に、彼らが認識している最大のリスクと、それに対応してポートフォリオをどのように位置付けているかについて質問した。市場への最大の脅威についての見解の違いにもかかわらず、投資家らは繰り返し同じ反応、つまり今年の最大の勝者以外にも多様化するという答えに戻った。
薄れつつある米国の例外主義
IBOSSの投資マネージャー、クリス・ラッシュ氏はCNBCに対し、投資家が負っている最大のリスクは「過去の勝者に集中しすぎて、世界中の他の機会を逃している」ことだと語った。
「短期的な騒音に注目してしまいがちです」と彼は言う。 「しかし、米国株がすでに世界のポートフォリオの大部分を占めていることから、集中はより大きなリスクであると考えている。米国の例外主義も2025年以前に見られた水準から薄れ始めている一方、マグニフィセント・セブンの債務水準の上昇により、同じ企業を追い続けるリスクが増大している。」
不動産投資信託は「何年も人気がなかったが、バリュエーションの観点から見るとますます魅力的になってきた」とラッシュ氏は述べ、同氏のチームがポートフォリオを拡大するために英国株やアジアや新興市場の上場株と並んで活用している資産の一つとなっている。
同氏は、「投資家がAIの勝者である韓国と台湾に注目しているのは当然だが、中国は最近の反動局面で特に好調なパフォーマンスを見せており、引き続き良好な位置にあると考えている」と述べた。
「英雄になろうとして死ぬな」
英国の資産管理会社7IMの富・投資・公共政策戦略責任者ベン・クマール氏はCNBCに対し、投資家にとって今年の大きな課題は「全体的なボラティリティの管理ではなく、特定のボラティリティの管理だ」と語った。
「勝者と敗者は刻々と変化し続けてきた」と彼は説明した。 「全体として、勝利は損失よりも大きかった…しかし、特定のテーマ、セクター、またはスタイルにあまりにもさらされるのは非常に困難でした。」
クマール氏は、今年に入ってエネルギー株のパフォーマンスが最高と最低の2回を記録しており、IT株も同様だと指摘した。
「ある時点ではすべてがうまくいったが、すべての時点では何もうまくいかなかった」と同氏は語った。 「セクターや地域を超えて、多様化が大きく貢献しました。そして、私たちと同じように、勝者に全力を注がない（そして敗者になるリスクを負う）覚悟があるのであれば、今年はかなり良い年になったでしょう。」
「この市場でヒーローになる必要はありません。ただ自分の都合に合わせて、幅広く露出を続けてください」と彼は付け加えた。 「英雄になろうとして死ぬなよ。」
自己満足への警告
ロンドンに本拠を置くフォービス・マザーズの最高投資責任者ベン・シーガー・スコット氏はCNBCに対し、イラン戦争と好調な米国企業収益という「2つの強力な力」が市場を反対方向に引っ張っており、中東での出来事やインフレ圧力、AI貿易の変化に関して市場が現状に満足してしまうリスクがあると語った。
同氏は、「当社のポートフォリオに関しては、どちらかというと細心の注意を払ってきた。（わずかにオーバーウェイトを維持しながら）株式リスクのオーバーウェイトの一部を削減し、時価総額加重エクスポージャーから等価ウェイトエクスポージャーに移行することによって、超大型テクノロジー株の銘柄を通常の米国株にローテーションさせた」と述べた。
「不快なトレードオフ」
サルタスの共同最高投資責任者兼パートナーであるチャーリー・アンブラー氏は、チームの見解ではポートフォリオに対する最大のリスクは金利を巡る政策の縛りであると述べた。
同氏は、「経済が大規模なAIインフラ整備を吸収しつつあるまさにその時期に、中央銀行は長期金利を制御下に置くのに苦戦している。これは資本を大量に消費し、ぎりぎりのところでインフレを引き起こしている」と述べた。 「問題は、短期金利の上昇という必要な強壮剤を引き出すのが難しくなっているということだ」
同氏は、政策立案者らはインフレ抑制と金融安定維持の間で「不快なトレードオフ」を迫られており、ポートフォリオは「完全に正しくない可能性を考慮して配置する必要がある」と述べた。
アンブラー氏はまた、不確実性に対するチームの対応は「範囲を広げる」ことだと述べた。
同氏はCNBCに対し、「最近のリターンをもたらした分野にリスクを集中させるのではなく、株式、債券、オルタナティブ商品にエクスポージャーを拡大している」と語った。 「特にオルタナティブでは、リターンが株式市場や債券市場に単純に連動しない資産に焦点が当てられています。」
スタンダード・チャータードのグローバル最高投資責任者スティーブ・ブライス氏は、最大の循環リスクは世界的なAIブームを何かが混乱させることであり、最大の構造リスクは財政政策とインフレの見通しであると述べた。
ブライス氏は、過剰な現金を保有しながら成長分野に多額の投資をする現在の市場に対して「バーベルアプローチ」を取ることに対して警告した。
同氏はCNBCに対し、「前者は非常に利益を上げているが、後者はこの分野で購買力が侵食される可能性が高いため、我々の意見では最適とは言えない」と語った。 「そのため、我々は投資家に対し、先進国市場金融やユーロ圏工業株など他の株式分野への配分を増やし、可能な限り債券、金、その他の代替資産クラスへの配分でポートフォリオを緩衝することで、より多様なポートフォリオを持つよう主張する。」
AI への支出が次のローテーションを強制する可能性がある理由
グローバルX ETFの投資ストラテジスト、ビリー・レオン氏は、市場では現在「2つのライブリスク議論が並行して行われている」と述べた。
同氏はCNBCに対し、「深刻な面では、ホルムズ海峡の状況は未解決のままだ…したがって、石油の地政学的プレミアムはすぐには消えないだろう」と語った。 「しかし、AIの設備投資には、より永続的なリスクが存在します。現在、AIインフラの構築に投入されている資金調達の規模は、数千億ドルに達しており、循環型の資金調達構造とAIエコシステムの各部分にわたる弱いフリーキャッシュフロー変換についての本格的な議論が再燃しています。地政学的なショックとは異なり、単一のヘッドラインで解決しないため、これはロングテールのリスクです。」
レオン氏は、ポジショニングデータは、ボラティリティーの再燃にもかかわらず株式投資家が特に防御的な姿勢をとっていないことを示しており、「どちらかといえばヘッジが不十分であるように見える」と述べた。
同氏は「主要指数やＥＴＦ全体のインプライド・ボラティリティは１年ぶりの安値に向けて下落しており、スキューはレンジの底値付近に位置しており、これは恐怖ではなく広範な強気の姿勢を示している」と述べた。 「セクターローテーションに関して、最も明らかな恩恵を受けているのはデータセンター関連産業、エネルギー、旅行であり、ヘルスケア、生活必需品、不動産は遅れをとっている。」
レオン氏によると、実際の配置転換を強いる引き金となる可能性が最も高いのは、マクロ経済データのシグナルではなく、AIの設備投資の耐久性だという。
同氏は、「AI関連投資の巨大な規模が経済における他の形態の設備投資を締め出し始めているかどうか、またそれとは別に、その増強を支える資金調達構造が長期にわたるフリーキャッシュフローのギャップを支えられるかどうかについて、正当な議論が高まっている」と述べた。 「その議論が理論に留まらず、ガイダンスや資金調達コストに現れ始めれば、それがローテーションを強制するものであり、AIの広範な売却ではなく、純粋なインフラストラクチャから資金が離れ、短期的に収益化できる名前に向かうことになる。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/22/investors-market-risks-diversification-stocks-kospi.html",
    publishedAt: "2026-08-22T05:00:01+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 8,
  },
  {
    id: "canada-says-it-will-match-us-tariffs-dol-a6f857f7",
    title: "Canada says it will match US tariffs 'dollar for dollar' as trade talks break down",
    titleJa: "カナダ、通商交渉決裂で米国の関税に「ドル対ドル」で匹敵すると表明",
    summaryJa: "カナダ、通商交渉決裂で米国の関税に「ドル対ドル」で匹敵すると表明- 公開されました",
    bodyOriginal: `Canada says it will match US tariffs 'dollar for dollar' as trade talks break down
- Published
A fresh wave of US tariffs on a wide array of Canadian goods came into effect on Saturday after a last-minute breakdown in trade talks.
Announcing the suspension of negotiations shortly before the Friday night deadline, Canadian Prime Minister Mark Carney said he would impose reciprocal tariffs on US goods "dollar for dollar".
Carney said "last-minute changes in the US proposed terms were unfair, uneconomic, and called into question the reliability of any deal".
Trade negotiators had been engaged in intense talks since July, after President Donald Trump threatened to impose a 50% levy on nearly $20bn (C$28bn) of Canadian imports by 19 August.
Trump had temporarily paused those tariffs earlier in the week, saying the two sides were close to signing a trade deal that was "very good" for both countries.
But minutes before the deadline for a deal, Carney said that while "important progress" had been made in the talks it was "not enough to meet our objectives for Canadians".
"As a result, this evening, I have decided to suspend trade negotiations with the US and have directed negotiators to return to Ottawa," he said.
"Last-minute changes in the US proposed terms were unfair, uneconomic, and called into question the reliability of any deal."
After Carney's announcement US trade representative Jamieson Greer said in a statement: "Tonight, Canada declined to finalise the trade deal under the terms agreed earlier this week.
"Despite the US offer to Canada to receive the best treatment of any major exporter to our market, new demands and walk backs of other commitments by Canada have upended the careful balance reached in the past days."
The breakdown in talks marks a significant shift in tone from earlier in the week, when both US and Canadian officials sounded optimistic that a trade deal beneficial for both countries was within reach.
Negotiators were reportedly discussing a deal that would reduce US tariffs on Canadian steel and aluminium from 50% to 25%, and on Canadian autos from 25% to 15%.
In exchange, Carney had asked Canadian provinces to restore US alcohol to store shelves.
Tensions between the two major trading partners have been simmering since Trump returned to office in January last year and unleashed a wide-ranging global programme of tariffs, upending decades of free trade between Canada and the US.
Now that talks have broken down, Canada will be hit with new 50% US tariffs imposed by Trump using a Depression-era law called the Tariff Act of 1930.
They will be applied on a range of goods, including wine, dairy, cement, clothing and hockey equipment.
They are in addition to existing tariffs the US had already imposed on Canadian steel and aluminium, autos and lumber.
Doug Ford, the traditionally outspoken premier of Canada's largest province Ontario, said "the prime minister has my full support for a strong response - tariff for tariff, dollar for dollar," following Carney's announcement.
Canada has been engaged in on-again, off-again trade negotiations with the US for over a year in pursuit of a deal that would see the US drop or reduce tariffs on these key sectors.
The US, meanwhile, has been asking for a number of concessions from Canada, including removing its remaining retaliatory tariffs on American autos and adjusting its dairy quotas to allow greater access for US cheese producers.
It has also asked that the ban on US alcohol sales, imposed last year by most Canadian provinces in retaliation to Trump's tariffs, be removed.
Businesses and stakeholders on both sides of the border had pushed for a deal to be reached, arguing that the new US tariffs on Canada will be harmful to both countries.
The US Chamber of Commerce said earlier in the week in a statement that "higher tariffs would damage both economies, drive up costs for US families, further disrupt critical supply chains, and risk the 13 million American jobs that depend on trade under the US-Mexico-Canada Trade Agreement".
A recent poll by Canadian firm Abacus Data suggested that around 36% of Canadians would support retaliating to US tariffs, while another 30% would want the Carney government to continue negotiating.
Retaliation risks upsetting the Trump administration, with trade representative Jamieson Greer saying the US is "not going to tolerate" counter-tariffs.
"We'll take action," he told reporters last week.`,
    bodyJa: `カナダ、通商交渉決裂で米国の関税に「ドル対ドル」で匹敵すると表明
- 公開されました
通商協議が土壇場で決裂したことを受け、土曜日、米国による幅広いカナダ製品に対する新たな追加関税が発効した。
カナダのマーク・カーニー首相は金曜夜の期限直前に交渉中止を発表し、米国製品に「1ドルずつ」相互関税を課すと述べた。
カーニー長官は「米国が提案した条件の土壇場での変更は不公平で非経済的であり、あらゆる合意の信頼性に疑問を投げかけた」と述べた。
ドナルド・トランプ大統領が8月19日までにカナダからの輸入品約200億ドル（約280億カナダドル）に50％の関税を課すと脅したことを受け、通商交渉担当者らは7月以来激しい交渉を続けてきた。
トランプ大統領は今週初め、両国にとって「非常に良い」貿易協定の署名に近づいていると述べ、これらの関税を一時停止していた。
しかし、合意期限の数分前にカーニー氏は、交渉では「重要な進展」が見られたものの、「カナダ国民に対する我々の目標を達成するには十分ではない」と述べた。
「その結果、今晩私は米国との通商交渉を中止することを決定し、交渉担当者にオタワに戻るよう指示した」と述べた。
「米国が提案した条件の直前の変更は不公平で非経済的であり、あらゆる合意の信頼性に疑問を投げかけた。」
カーニー長官の発表後、ジェイミソン・グリア米通商代表部代表は声明で「今夜、カナダは今週初めに合意した条件に基づいて通商協定を締結することを拒否した。
「米国がカナダに対し、わが国市場への主要輸出業者よりも最高の待遇を受けるよう申し出たにもかかわらず、カナダによる新たな要求と他の約束の撤回により、過去数日間に達成した慎重なバランスが崩れた。」
協議の決裂は、米国とカナダの当局者が両国にとって有益な通商合意が手の届くところにあると楽観的に聞こえた週初めからのトーンの大幅な変化を示す。
交渉関係者らは、カナダの鉄鋼とアルミニウムに対する米国の関税を50％から25％に、カナダの自動車に対する米国の関税を25％から15％に引き下げる合意について議論していると伝えられている。
その見返りとして、カーニー氏はカナダの各州に対し、米国産アルコールを店頭に戻すよう要請していた。
トランプ大統領が昨年1月に政権に復帰し、広範な世界規模の関税プログラムを発動して、カナダと米国間の数十年にわたる自由貿易を根底から覆して以来、2大貿易相手国間の緊張はくすぶっている。
交渉が決裂した今、カナダは1930年関税法と呼ばれる大恐慌時代の法律を用いてトランプ大統領が課した新たな50％の米国関税に見舞われることになる。
これらは、ワイン、乳製品、セメント、衣料品、ホッケー用具など、さまざまな商品に適用される予定です。
これらは米国がカナダの鉄鋼とアルミニウム、自動車、木材にすでに課していた既存の関税に追加されるものである。
カナダ最大の州オンタリオ州の伝統的に率直な首相であるダグ・フォード氏は、カーニー長官の発表を受けて「首相は関税には関税、ドルにはドルという強力な対応を全面的に支持している」と述べた。
カナダは、米国がこれらの主要分野に対する関税を引き下げまたは削減する合意を目指して、1年以上にわたって米国との通商交渉を断続的に行ってきた。
一方、米国はカナダに対し、米国製自動車に対する残りの報復関税の撤廃や、米国のチーズ生産者のアクセス拡大を可能にする乳製品割り当ての調整など、多くの譲歩を求めている。
また、トランプ大統領の関税への報復としてカナダのほとんどの州が昨年課した米国でのアルコール販売禁止措置の解除も求めた。
国境の両側の企業や利害関係者は、米国のカナダに対する新たな関税は両国にとって有害であると主張し、合意に達するよう求めていた。
米国商工会議所は今週初めに声明で、「関税の引き上げは両国経済にダメージを与え、米国家庭のコストを押し上げ、重要なサプライチェーンをさらに混乱させ、米国・メキシコ・カナダ貿易協定に基づく貿易に依存する米国の1300万人の雇用を危険にさらすことになる」と述べた。
カナダの企業アバカス・データによる最近の世論調査では、カナダ人の約36％が米国の関税への報復を支持し、さらに30％がカーニー政権の交渉継続を望んでいることが示唆された。
報復はトランプ政権を混乱させるリスクがあり、ジェイミソン・グリア通商代表は米国は対抗関税を「容認するつもりはない」と述べた。
同氏は先週記者団に対し、「我々は行動を起こすつもりだ」と語った。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cvgvyy4x2mvo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-22T04:46:33+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/ef5d/live/88423690-9ddd-11f1-b109-879e35c24276.jpg",
    readTime: 5,
  },
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
    id: "one-killed-in-sword-attack-at-swedish-sc-74797d78",
    title: "One killed in sword attack at Swedish school",
    titleJa: "スウェーデンの学校で剣による襲撃で1人死亡",
    summaryJa: "スウェーデンの学校で剣による襲撃で1人死亡- 公開されました",
    bodyOriginal: `One killed in sword attack at Swedish school
- Published
One person has been killed in a sword attack at a high school in central Sweden, authorities have said.
Police were called to the Brinell School in Fagersta shortly after 14:00 local time (13:00 BST) on Friday, where officers arrested an 18-year-old man.
In an update on Friday, police said officers fired at the suspect before arresting and detaining him. He has not been named.
Two teenage boys were seriously injured in the attack. Another person had minor injuries.
Eight other schools in the area were placed under lockdown measures - which have now been lifted - while a state of high alert was declared in the Västmanland region following the attack.
Sweden's public broadcaster reported that the suspect was wearing a helmet. Local media also said he was a former student.
Police said officers were now working to establish possible motives, adding that there was currently no danger to the public.
In a post on X, Sweden's Prime Minsiter Ulf Kristersson described the attack as a "serious incident," and said "we do not know what lies behind the act, but we know that police are working very intensively".
Sweden's King Carl XVI Gustaf said he received the news "with dismay and sadness".
In a statement, he said: "My thoughts are with those directly affected, as well as their families and loved ones."
Students at Brinell School had only just returned to the classroom following the summer break, with the new term beginning either on Monday or Wednesday this week, depending on the academic year.
The school has just under 500 students on its roster, according to SVT, and is located 170km (105 miles) north-west of the capital, Stockholm.
Sweden has experienced a number of attacks on educational institutions in recent years.
The country experienced its worst-ever mass shooting in 2025, where 11 people, including the gunman, died at an adult education centre in Örebro.
This led to the government tightening the country's gun laws after it was found that the suspect legally owned four rifles, three of which were found in the school where attack took place.
Two teachers were killed in a violent attack on a secondary school in Malmo in 2022 - an 18-year-old student later confessed to the attack.
In 2015, a teacher and a pupil were killed in a sword attack at a school in Trollhättan.`,
    bodyJa: `スウェーデンの学校で剣による襲撃で1人死亡
- 公開されました
スウェーデン中部の高校で剣による襲撃があり、１人が死亡したと当局が発表した。
金曜日の現地時間14時（BST13時）過ぎにファゲルスタのブリネル学校に警察が通報され、18歳の男が逮捕された。
金曜日の最新情報で警察は、警察官が容疑者を逮捕し拘留する前に容疑者に向けて発砲したと発表した。彼の名前は明かされていない。
この襲撃で10代の少年2人が重傷を負った。もう一人も軽傷を負った。
この地域の他の8校も封鎖措置下に置かれ、現在は解除されているが、攻撃を受けてヴェストマンランド地方では厳戒態勢が宣言された。
スウェーデンの公共放送は、容疑者がヘルメットを着用していたと報じた。地元メディアも同氏が元生徒だったと報じた。
警察は、警察官が現在考えられる動機の解明に取り組んでいると述べ、現時点で公衆に対する危険はないと付け加えた。
スウェーデンのウルフ・クリスターソン首相はXへの投稿で、今回の襲撃を「重大な事件」と表現し、「この行為の背後に何があるのか​​は分からないが、警察が非常に集中的に捜査していることは分かっている」と述べた。
スウェーデンのカール16世グスタフ国王は、この知らせを「落胆と悲しみとともに」受けたと述べた。
同氏は声明で「直接の被害を受けた人々とその家族、愛する人たちに思いを馳せている」と述べた。
ブリネルスクールの生徒たちは夏休みが明けて教室に戻ったばかりで、学年に応じて今週月曜日か水曜日に新学期が始まる。
SVTによると、この学校には500人弱の生徒が在籍しており、首都ストックホルムの北西170キロ（105マイル）に位置している。
スウェーデンでは近年、教育機関に対する攻撃が多数発生している。
同国は2025年に史上最悪の銃乱射事件を経験し、オレブロの成人教育センターで銃撃犯を含む11人が死亡した。
これにより、容疑者が4丁のライフル銃を合法的に所有しており、そのうち3丁が襲撃が行われた学校で発見されたことが判明し、政府は同国の銃規制を強化するに至った。
2022年にマルメの中等学校への暴力的襲撃で教師2人が殺害されたが、後に18歳の生徒が襲撃を自白した。
2015年、トロルヘッタンの学校で教師と生徒が剣による襲撃で死亡した。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c3r0g7gj2n3o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-21T21:03:24+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/ef32/live/454712a0-9d7b-11f1-b109-879e35c24276.jpg",
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
    id: "uk-canada-and-australia-condemn-israel-f-172fa98b",
    title: "UK, Canada and Australia condemn Israel for refusing criminal probe into aid worker killings in Gaza",
    titleJa: "英国、カナダ、オーストラリアがガザでの援助活動員殺害事件の刑事捜査を拒否したイスラエルを非難",
    summaryJa: "英国、カナダ、オーストラリアがガザでの援助活動員殺害事件の刑事捜査を拒否したイスラエルを非難- 公開されました",
    bodyOriginal: `UK, Canada and Australia condemn Israel for refusing criminal probe into aid worker killings in Gaza
- Published
The UK, Canada and Australia have described as "shameful" Israel's decision not to launch a criminal investigation into strikes on a World Central Kitchen (WCK) convoy in Gaza in 2024, which killed seven humanitarian workers.
The victims were three British nationals, a Pole, an Australian, a Canadian and a dual US-Canadian citizen.
A joint statement by the three foreign ministries said: "The victims of this incident and their families deserve justice and accountability, and we will continue to seek answers on their behalf."
Earlier, Israel's ambassador to Australia, Hillel Newman, defended the decision, saying "there was no criminal intention" and therefore "no criminal responsibility".
The statement said that on 1 April 2024, the Israel Defense Forces (IDF) fired on the WCK convoy as it was delivering food to civilians in Gaza.
"In the more than two years since, we have been pressing for Israel to swiftly and thoroughly consider the case and hold those responsible to account," it said.
The three countries said the fact that Israel's announcement came on World Humanitarian Day, "while the world honoured the courage and sacrifice of humanitarians, was particularly egregious".
It also said the WCK attack was only "one of countless incidents in Gaza where there has been no accountability", as Gaza remains "the deadliest place to deliver aid", with 186 humanitarian workers killed in 2025.
It urged Israel to comply with its obligations under international humanitarian law and do more to ensure that humanitarian staff can carry out their work safely.
'Serious failures'
In its statement on Wednesday, the IDF said the presence of an armed guard with the convoy had not been flagged to it before the convoy set off, and that he was falsely identified as a Hamas fighter. It also accused the convoy of deviating from the route co-ordinated with the military.
Notwithstanding "serious failures" in the process that led to the killings, "the decisions of the commanders did not raise reasonable suspicion of criminal misconduct," the IDF said.
Prior to the statement by the three countries, Australia summoned Hillel Newman. Australian Foreign Minister Penny Wong said her country was "outraged" by the Israeli government's decision.
She also said there were still many "unanswered questions" about the strikes, including why, if the first strike on the convoy was "a catastrophic error", two further strikes followed just minutes apart.
Poland's foreign ministry also said on Thursday that it was "very disappointed" and had summoned Israel's ambassador in Warsaw.
The founder of World Central Kitchen, Jose Andres, described the decision as "wrong" and "painful for all of us", demanding an independent commission to investigate.
Israeli Prime Minister Benjamin Netanyahu has not publicly responded to the latest statement from the UK, Australia and Canada, but he previously said that the military had "unintentionally" killed the volunteers.
The statement came after a harsh exchange of words between UK Foreign Secretary Ed Miliband and Israeli Foreign Minister Gideon Saar over Israel's plans to open tenders for the construction of about 1,200 settlement homes in a strategically important part of the occupied West Bank.
Israeli settlements are illegal under international law and plans to build in the so-called E1 area - east of Jerusalem - have long been internationally condemned.
Miliband condemned the publication of the tender as "an unacceptable and destructive act", and called on Israel to "halt E1 plans immediately, retract the tender and stop all settlement expansion".
In response, Saar said on social media that he rejected "outright" Miliband's statement.
"The Jewish people have the right to live throughout the Land of Israel, just as the British have the right to live in London and throughout the United Kingdom," he wrote.
While the IDF had decided not to launch a criminal investigation into the strikes on the WCK convoy, it announced in the same statement that it would carry out a criminal investigation into the killing by Israeli forces of five-year-old Palestinian girl Hind Rajab and six of her relatives in Gaza in 2024.
It also said it would similarly investigate the killing of 15 Palestinians, including medics and a UN worker, in March 2025. Their bodies were found buried in shallow graves a week later next to crushed vehicles.
Related topics
- Published1 day ago
- Published3 April 2024`,
    bodyJa: `英国、カナダ、オーストラリアがガザでの援助活動員殺害事件の刑事捜査を拒否したイスラエルを非難
- 公開されました
英国、カナダ、オーストラリアは、２０２４年にガザ地区で人道支援活動家７人が死亡したワールド・セントラル・キッチン（ＷＣＫ）の護送船団への攻撃について、犯罪捜査を開始しないというイスラエルの決定を「恥ずべき」と批判した。
犠牲者は英国人3人、ポーランド人、オーストラリア人、カナダ人、米国とカナダの二重国籍者だった。
３外務省は共同声明で「この事件の被害者とその家族は正義と責任を負うべきであり、我々は彼らに代わって答えを求め続ける」と述べた。
これに先立ち、ヒレル・ニューマン駐オーストラリアイスラエル大使は「犯罪的な意図はなかった」、したがって「刑事責任はない」とこの決定を擁護した。
声明によると、2024年4月1日、イスラエル国防軍（IDF）はガザ地区で民間人に食料を届けていたWCKの車列に発砲した。
「それ以来２年以上にわたり、我々はイスラエルに対し、この件を迅速かつ徹底的に検討し、責任者の責任を問うよう求めてきた」と同省は述べた。
３カ国は、イスラエルの発表が世界人道デーに行われたという事実は、「世界は人道主義者の勇気と犠牲を称える一方で、特にひどい」と述べた。
また、ガザは依然として「援助物資を届けるのに最も危険な場所」であり、２０２５年には人道支援活動家１８６人が殺害されており、ＷＣＫ攻撃は「説明責任が果たされていないガザでの無数の事件の１つ」に過ぎないとも述べた。
イスラエルに対し、国際人道法に基づく義務を遵守し、人道支援スタッフが安全に業務を遂行できるようさらに努力するよう求めた。
「重大な失敗」
イスラエル国防軍は水曜の声明で、護送隊の出発前に護送隊に武装警備員がいることは知らされておらず、武装警備員がハマスの戦闘員であると誤認されたと述べた。また、車列が軍と調整したルートを逸脱したとして非難した。
殺害に至った過程での「重大な失敗」にもかかわらず、「指揮官らの決定は犯罪行為の合理的な疑いを生じさせるものではなかった」とイスラエル国防軍は述べた。
３カ国の声明に先立ち、オーストラリアはヒレル・ニューマン氏を召喚した。オーストラリアのペニー・ウォン外相は、同国はイスラエル政府の決定に「激怒している」と述べた。
同氏はまた、輸送船団への最初の攻撃が「致命的なミス」だったとしたら、なぜわずか数分の間隔でさらに２回の攻撃が続いたのかなど、空爆についてはまだ多くの「未解決の疑問」が残っていると述べた。
ポーランド外務省も木曜日、「非常に残念だ」と述べ、ワルシャワのイスラエル大使を召喚したと発表した。
ワールド・セントラル・キッチンの創設者ホセ・アンドレス氏は、この決定は「間違っている」「我々全員にとって苦痛だ」と述べ、独立した委員会の調査を要求した。
イスラエルのベンヤミン・ネタニヤフ首相は英国、オーストラリア、カナダの最新の声明に公式には反応していないが、軍が「意図せずに」ボランティアを殺害したと以前述べた。
この声明は、占領下のヨルダン川西岸地区の戦略的に重要な地域で約1,200戸の入植地建設の入札を開始するというイスラエルの計画をめぐり、英国のエド・ミリバンド外相とイスラエルのギデオン・サール外相の間で厳しい言葉のやりとりがあった後に発表された。
イスラエルの入植地は国際法上違法であり、エルサレム東のいわゆるE1地域に建設する計画は長い間国際的に非難されてきた。
ミリバンド氏は入札の公表を「容認できない破壊的な行為」と非難し、イスラエルに対し「E1計画を直ちに中止し、入札を撤回し、すべての入植地拡大を中止する」よう求めた。
これに対し、サール氏はミリバンド氏の声明を「完全に」拒否したとソーシャルメディアで述べた。
「英国人がロンドンと英国全土に住む権利があるのと同じように、ユダヤ人はイスラエル全土に住む権利がある」と彼は書いた。
IDFは、WCKの車列への攻撃について刑事捜査を開始しないことを決定したが、同じ声明の中で、2024年にガザで5歳のパレスチナ人の少女ハインド・ラジャブ君とその親族6人がイスラエル軍によって殺害されたことについて刑事捜査を行うと発表した。
また、2025年3月に衛生兵や国連職員を含むパレスチナ人15人の殺害についても同様に捜査すると発表した。彼らの遺体は1週間後、押しつぶされた車両の隣の浅い墓に埋葬されているのが発見された。
関連トピック
- 1 日前に公開
- 2024 年 4 月 3 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cvgl2pe09eno?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-21T15:58:57+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/44aa/live/1a046dd0-9d6d-11f1-b109-879e35c24276.jpg",
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
