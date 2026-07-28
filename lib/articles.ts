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
    id: "kentucky-gov-beshear-calls-on-mitch-mcco-de89a131",
    title: "Kentucky Gov. Beshear calls on Mitch McConnell to prove he can serve or resign",
    titleJa: "ケンタッキー州のベッシャー知事、ミッチ・マコネル氏に就任か辞任かの証明を求める",
    summaryJa: "ケンタッキー州のアンディ・ベッシャー知事は、84歳の共和党上院議員が医学的にリハビリテーションから離脱する許可がまだ得られていないとマコーネル氏の事務所が発表した翌日、ミッチ・マコーネル上院議員に対し、まだ就任するか辞任する能力があることを公に証明するよう求めた。民主党のベッシャー氏は月曜、「あなたが務めている州の知事として、ケンタッキー州の人々に直接口頭で語りかけ、職務に就く能力の証明を提出するか、辞任するかを求めます」と書いた。",
    bodyOriginal: `Kentucky Gov. Andy Beshear called on Sen. Mitch McConnell to publicly demonstrate that he remains capable of serving or resign, a day after McConnell's office said the 84-year-old Republican senator was still not medically cleared to leave rehabilitation.
"As Governor of the state you serve, I am calling on you to directly and verbally address the people of Kentucky and provide proof of your capacity to serve, or resign," Beshear, a Democrat, wrote Monday.
Beshear said McConnell could do so by releasing a short video or calling a Kentucky radio or television station. McConnell on Monday released a still photo of himself with his wife, the second time doing so since he was hospitalized.
"All we're asking is just a little bit of proof," Beshear told reporters Monday. "When you run for these jobs, you know you're giving some of that privacy up."
Beshear also asked Senate Majority Leader John Thune, R-S.D., to investigate McConnell's condition if the senator does not show that he can continue serving.
McConnell's office declined to comment.
His absence leaves Republicans with one fewer vote in their narrow Senate majority and raises questions about Kentucky's untested process for filling a Senate vacancy.
Beshear cannot remove McConnell, who is not seeking reelection when his term ends in January. A vacancy would occur only if McConnell resigns, dies in office or is expelled by a two-thirds vote from the Republican-controlled Senate.
Kentucky's Republican-controlled legislature passed a law in 2024 barring the Democratic governor from appointing a temporary senator and requiring a special election. The law has never been tested, and the seat would remain vacant until a winner was certified.
Legal experts have said the law could face a challenge because the Kentucky Constitution says vacancies in statewide offices "shall be filled by appointment of the Governor." That language could give Beshear grounds to argue he retains authority to name a temporary replacement.
The timing is increasingly important because Sept. 1 is the practical deadline for holding a special election on Nov. 3, according to Kentucky law.
McConnell was hospitalized after a June 14 fall that briefly left him unconscious and later developed what his office called a mild case of pneumonia. His office said Monday that he was undergoing intensive physical therapy and released a new photo of him with his wife, former Transportation Secretary Elaine Chao.
Beshear said those updates did not establish whether McConnell could perform his duties.
"Even the attending physician's written statement does not discuss your actual condition, including whether you can speak, reason, or carry out your duties as a senator," he wrote.`,
    bodyJa: `ケンタッキー州のアンディ・ベッシャー知事は、84歳の共和党上院議員が医学的にリハビリテーションから離脱する許可がまだ得られていないとマコーネル氏の事務所が発表した翌日、ミッチ・マコーネル上院議員に対し、まだ就任するか辞任する能力があることを公に証明するよう求めた。
民主党のベッシャー氏は月曜、「あなたが務めている州の知事として、ケンタッキー州の人々に直接口頭で語りかけ、職務に就く能力の証明を提出するか、辞任するかを求めます」と書いた。
ベッシャー氏は、マコーネル氏は短いビデオを公開したり、ケンタッキー州のラジオ局やテレビ局に電話したりすることでそうすることができると述べた。マコーネル氏は月曜日、妻との静止写真を公開したが、これは入院後2度目となる。
「我々が求めているのはほんの少しの証拠だ」とベッシャー氏は月曜記者団に語った。 「これらの職に立候補すると、プライバシーの一部を放棄していることがわかります。」
ベッシャー氏はまた、ジョン・チューン上院多数党院内総務（共和党、SD）に対し、マコーネル上院議員が職務続行の可能性を示さない場合には同氏の状態を調査するよう要請した。
マコーネル氏の事務所はコメントを控えた。
同氏の欠席により、共和党は僅差の上院過半数で得票が1票少なくなり、ケンタッキー州の上院欠員補充の未検証のプロセスに疑問が生じている。
ベッシャー氏は任期が終わる１月に再選を目指していないマコネル氏を解任することはできない。空席が生じるのは、マコーネル氏が辞任するか、在任中に死亡するか、共和党が多数を占める上院で３分の２の賛成票で除名された場合のみとなる。
共和党が多数を占めるケンタッキー州議会は2024年、民主党知事による臨時上院議員の任命を禁止し、特別選挙を義務付ける法律を可決した。この法律は一度も検証されたことがなく、勝者が認定されるまで議席は空席のままとなる。
法律専門家らは、ケンタッキー州憲法で州全体の役職の欠員は「知事の任命によって補充される」と定めているため、この法律は困難に直面する可能性があると述べている。この文言は、ベッシャー氏が一時的な後任を指名する権限を保持していると主張する根拠を与える可能性がある。
ケンタッキー州法によれば、9月1日が11月3日に特別選挙を実施する実質的な期限となっているため、このタイミングはますます重要になっている。
マコーネル氏は6月14日に転倒して一​​時的に意識を失い、その後事務所が軽度の肺炎と呼ぶ症状を発症して入院した。同氏の事務所は月曜日、同氏が集中的な理学療法を受けていると発表し、妻のエレイン・チャオ元運輸長官との新しい写真を公開した。
ベッシャー氏は、これらの最新情報はマコネル氏が職務を遂行できるかどうかを証明するものではないと述べた。
「主治医の書面による陳述書ですら、あなたが上院議員としての発言や推論、職務遂行ができるかどうかなど、あなたの実際の状態については触れられていない」と同氏は書いた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/28/beshear-mcconnell-health-resign-senate-vacancy.html",
    publishedAt: "2026-07-28T19:03:40+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    readTime: 3,
  },
  {
    id: "elon-musk-stocks-take-1-5-trillion-hit-w-8e05fa79",
    title: "Elon Musk stocks take $1.5 trillion hit with fresh test in SpaceX lockup ahead",
    titleJa: "イーロン・マスク株、スペースXロックアップの新たなテストで1兆5000億ドルの打撃を受ける",
    summaryJa: "世界で最も裕福な人物にそんなことがあったとしても、イーロン・マスクにとっては大変な月だった。スペースXとテスラは、スペースXが高値以来50％近く下落し、先週の決算以来テスラが18％下落したことを受けて、6月中旬以来累計1兆5000億ドルの時価総額を消し去った。",
    bodyOriginal: `It's been a rough month for Elon Musk, if there is such a thing for the world's richest man.
SpaceX and Tesla have erased a cumulative $1.5 trillion in market cap since mid-June, after an almost 50% sell-off in SpaceX since its high and an 18% drop in Tesla since earnings last week.
It might get even crazier next week, based on options pricing around SpaceX's earnings report on Tuesday, and the end of the lockup period for SpaceX insiders two days after.
Options prices are implying a 15% swing in SpaceX after earnings, with implied volatility of 122 in the stock – higher than every company in the S&P 500 other than SanDisk, which dropped 16% on Tuesday. Earnings also trigger the company's unique lock-up period, which allows insiders to begin selling shares earlier than the typical 180-day period. That puts a total of more than 900 million shares, or 20% of their eligible locked-up stock, on the table for trading.
The early lockup two days after earnings presents a tricky setup for options traders, who can usually count on a stock's implied volatility falling after earnings. Earnings present predictable risk for stockholders who often have to hedge their positions, and once that risk passes — even if the stock crashes, volatility usually declines.
For SpaceX, traders must ask which presents more risk to the stock — its first earnings, or the lockup period? If the lockup period leads to insiders selling stock, it could mean volatility either stays elevated or goes up after earnings.
The implied volatility of SpaceX contracts expiring Aug. 7 is 160, according to data from thinkorswim, compared to 55 for Tesla, which currently trades with an implied vol of 52.
SpaceX traders have largely retained their optimism throughout the decline. More calls trade on a daily basis than puts, with traders buying almost 100,000 calls on Tuesday, compared to just 46,000 puts.
That said, the divide between small and big traders is growing, with the latter group erring more on the side of caution. The most popular contract by volume Tuesday was the 330-strike calls expiring Next Friday, of which traders bought $770,000-worth across 21,000 trades, according to SpotGamma.
Sorted by size of trader, and the picture is still bullish, but much less aggressive: the 130-strike call expiring in November, which traded just 5,400 times but for $8.7 million of premium.`,
    bodyJa: `世界で最も裕福な人物にそんなことがあったとしても、イーロン・マスクにとっては大変な月だった。
スペースXとテスラは、スペースXが高値以来50％近く下落し、先週の決算以来テスラが18％下落したことを受けて、6月中旬以来累計1兆5000億ドルの時価総額を消し去った。
火曜日のスペースXの収益報告とその2日後のスペースX内部関係者に対するロックアップ期間の終了を巡るオプションの価格設定に基づくと、来週はさらにクレイジーになるかもしれない。
オプション価格は、決算後のスペースXの株価変動が15％あることを示唆しており、株価のインプライド・ボラティリティは122で、これは火曜日に16％下落したサンディスクを除くS&P500の全企業よりも高い。また、収益によっては同社独自のロックアップ期間が発動され、内部関係者は通常の180日よりも早く株式の売却を開始できるようになる。これにより、対象となるロックアップ株式の20％に相当する合計9億株以上が取引の対象となる。
通常、決算後に株価のインプライド・ボラティリティが低下することを期待できるオプショントレーダーにとって、決算の2日後の早期ロックアップは難しい設定となる。ポジションをヘッジしなければならない株主にとって、収益は予測可能なリスクをもたらしますが、そのリスクが去れば、たとえ株価が暴落したとしても、ボラティリティは通常低下します。
スペースX社の場合、トレーダーは、最初の収益とロックアップ期間のうち、どちらが株価に大きなリスクをもたらすかを問う必要がある。ロックアップ期間によりインサイダーによる株式の売却が生じた場合、ボラティリティは高止まりするか、決算後に上昇する可能性がある。
thinkorswimのデータによると、8月7日に期限が切れるSpaceX契約のインプライド・ボラティリティは160であるのに対し、現在52のインプライド・ボラティリティで取引されているテスラの場合は55である。
スペースXのトレーダーらは、下落局面でもおおむね楽観的な見方を維持している。日々の取引ではプットよりもコールの方が多く、火曜日にはプットがわずか4万6000件だったのに対し、トレーダーらはほぼ10万件のコールを購入した。
そうは言っても、小規模トレーダーと大規模トレーダーの間の溝は拡大しており、後者のグループは慎重な側でより多くの間違いを犯しています。スポットガンマによると、火曜日の出来高ベースで最も人気のある契約は来週金曜日に期限が切れる330ストライクコールで、そのうちトレーダーは2万1000件の取引で77万ドル相当を購入した。
トレーダーの規模別に分類すると、状況は依然として強気だが、それほど積極的ではない。11月に期限が切れる130回のストライキコールは、わずか5,400回の取引で、870万ドルのプレミアムで取引された。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/28/elon-musk-stocks-take-1point5-trillion-hit-with-fresh-test-in-spacex-lockup-ahead.html",
    publishedAt: "2026-07-28T18:56:34+00:00",
    category: "自動車",
    imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    readTime: 3,
  },
  {
    id: "u-s-strategic-petroleum-reserve-faces-st-53fedc3b",
    title: "U.S. Strategic Petroleum Reserve faces stress as emergency releases strain old infrastructure",
    titleJa: "緊急放出により古いインフラに負担がかかり、米国の戦略石油備蓄がストレスに直面",
    summaryJa: "中東や欧州での戦争に対応した大量の備蓄放出により、老朽化し​​たインフラが修復の必要に迫られ、米国の戦略石油備蓄が逼迫している。米国がイランとの戦争とロシアのウクライナ侵攻による供給混乱を緩和するために４年間で３億５２００万バレルの原油を撤収したことを受け、ＳＰＲは今週、１９８３年３月以来の低水準に下落した。",
    bodyOriginal: `The U.S. Strategic Petroleum Reserve is under strain as massive stockpile releases in response to wars in the Middle East and Europe have stressed old infrastructure in need of repair.
The SPR this week fell to its lowest level since March 1983 after the U.S. withdrew 352 million barrels of crude oil in four years to ease supply disruptions triggered by its war with Iran and Russia's invasion of Ukraine.
Federal auditors have found that the SPR's ability to respond to future emergencies is at risk. A May report quoted Department of Energy officials telling auditors that the reserve's web of pipelines, caverns and storage tanks is held together "with 'Band-Aids,' and that it is uncertain how long they will hold."
"The SPR’s drawdown, distribution and fill capabilities are currently limited and are at risk going forward due to longstanding issues with aging infrastructure compounded with ongoing major construction intended to address them," the Government Accountability Office warned in the report.
Established by Congress in 1975 after the 1973 Arab oil embargo, SPR infrastructure is reaching the end of its life at a time when inventory releases are larger and more frequent, the auditors said in the report. The Energy Department is implementing a $1.4 billion plan to repair the SPR but had to narrow the scope of the project to stay within budget.
President Donald Trump in March ordered the release of 172 million barrels from the SPR as Iran choked off oil exports through the Strait of Hormuz, triggering the largest supply disruption in history. Government inventories fell last week by 3.7 million barrels to a total of about 308 million barrels, according to the Energy Department.
The SPR will fall to about 243 million barrels when Trump's release is fully executed, according to data from the Energy Information Administration. The emergency stockpile has an authorized storage capacity of 714 million barrels, according to the Department of Energy.
The federal auditors found that more than a quarter of the SPR "was not available for drawdown due to a combination of construction outages and cavern outages." This implies that a minimum of 103 million barrels in the SPR today are not deployable, according to a July analysis by Rapidan Energy.
The SPR has enough inventory left right now to address another crisis, said David Goldwyn, who served as a State Department special envoy for international energy affairs under President Barack Obama. "I'm not worried about the stability of the reserve or our ability to do another drawdown," Goldwyn said.
Federal law does not mandate a minimum operating level for the SPR, a Department of Energy spokesperson told CNBC. The operational minimum needed "to safely manage the caverns, is around ten percent of capacity – about 70 million barrels," the spokesperson said.
The crude oil in the SPR is stored at 60 salt caverns thousands of feet underground at four major sites on the Gulf Coast. Water is pumped into the bottom of the caverns to displace the oil to the surface and pump it through wells into pipelines.
The drawdown this year came as inventories were slowly recovering from Russia's invasion of Ukraine. President Joe Biden ordered 180 million barrels released in response to the war in Europe, the largest release in SPR history. The massive drawdown served as an "unplanned stress test of the SPR's operational capabilities," the federal auditors said.
"Every time when you do a drawdown, you accelerate the degradation of the wells themselves and some of the equipment," Goldwyn said. "It's like anything else — you use it a lot, you've got to maintain it."
The Energy Department executed Biden's release "without major equipment failures or crude oil spills," but "doing so was operationally challenging," the auditors said. The drawdown did require the "triaging of emergency repairs" due to leaking water pumps or pipes, they said.
Energy officials told the auditors that the earlier release "also highlighted risks to the SPR's capability to repeat a drawdown of similar speed and scale to the 2022 drawdown if directed to do so in the near future."`,
    bodyJa: `中東や欧州での戦争に対応した大量の備蓄放出により、老朽化し​​たインフラが修復の必要に迫られ、米国の戦略石油備蓄が逼迫している。
米国がイランとの戦争とロシアのウクライナ侵攻による供給混乱を緩和するために４年間で３億５２００万バレルの原油を撤収したことを受け、ＳＰＲは今週、１９８３年３月以来の低水準に下落した。
連邦会計監査人は、SPR が将来の緊急事態に対応する能力が危険にさらされていると判断した。 5月の報告書は、エネルギー省当局者が監査役に対し、保護区のパイプライン、洞窟、貯蔵タンクは「絆創膏」でつなぎ止められており、どれくらいの期間保持できるかは不明だと述べたと伝えている。
「SPRのドローダウン、分配、充填能力は現在限られており、老朽化し​​たインフラに関する長年の問題と、それらに対処するための進行中の大規模な建設が複雑化しているため、今後もリスクにさらされる」と政府会計検査院は報告書の中で警告した。
1973年のアラブ石油禁輸後の1975年に議会によって設立されたSPRインフラは、在庫放出がより大規模かつ頻繁に行われる現在、寿命を迎えつつあると監査人らは報告書で述べた。エネルギー省はSPRを修復するために14億ドルの計画を実行しているが、予算内に収めるためにプロジェクトの範囲を狭める必要があった。
イランがホルムズ海峡を通じた石油輸出を阻止し、史上最大の供給混乱を引き起こしたため、ドナルド・トランプ大統領は3月、SPRから1億7,200万バレルの放出を命令した。エネルギー省によると、先週の政府在庫は３７０万バレル減少し、合計約３億８００万バレルとなった。
エネルギー情報局のデータによると、トランプ大統領の釈放が完全に実行されると、SPRは約2億4,300万バレルまで減少する。エネルギー省によると、緊急備蓄品には7億1,400万バレルの貯蔵容量が認可されている。
連邦監査人は、SPRの4分の1以上が「建設の停止と洞窟の停止の組み合わせにより取り崩しに利用できなかった」ことを発見した。これは、ラピダン・エナジー社の7月の分析によると、今日のSPRには少なくとも1億300万バレルが配備不可能であることを意味している。
バラク・オバマ大統領の下で国務省の国際エネルギー問題担当特使を務めたデービッド・ゴールドウィン氏は、SPRには現時点で新たな危機に対処するのに十分な在庫が残っていると述べた。 「準備金の安定性や、さらなる取り崩しを行う能力については心配していない」とゴールドウィン氏は語った。
連邦法はSPRの最低動作レベルを義務付けていないとエネルギー省報道官はCNBCに語った。 「洞窟を安全に管理するために必要な運用上の最低量は、容量の約10％、つまり約7000万バレルだ」と広報担当者は述べた。
SPR の原油は、メキシコ湾岸の 4 つの主要な場所にある、地下数千フィートの 60 か所の塩の洞窟に保管されています。水は洞窟の底にポンプで汲み上げられ、石油を地表に移動させ、井戸を通ってパイプラインに送り込まれます。
今年の下落は、ロシアのウクライナ侵攻から在庫が徐々に回復しつつあった中で発生した。ジョー・バイデン大統領は、ヨーロッパでの戦争に応じて1億8000万バレルの放出を命じたが、これはSPR史上最大の放出である。連邦監査役らは、この巨額の資金損失は「SPRの運用能力に対する計画外のストレステスト」となったと述べた。
「ドローダウンを行うたびに、井戸自体や一部の設備の劣化が加速します」とゴールドウィン氏は言う。 「それは他のものと同じです。頻繁に使用するものは維持する必要があります。」
エネルギー省はバイデン氏の釈放を「重大な設備の故障や原油流出を起こすことなく」実行したが、「それは運営上困難だった」と会計監査人らは述べた。給水ポンプやパイプの漏れにより、この水位低下には「応急修理の優先順位付け」が必要だったと彼らは述べた。
エネルギー当局者らは監査人に対し、以前の発表は「近い将来に指示されれば、2022年のドローダウンと同程度の速度と規模のドローダウンを繰り返すSPRの能力に対するリスクも浮き彫りにした」と述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/28/us-strategic-petroleum-reserve-spr-iran-oil-strait-hormuz.html",
    publishedAt: "2026-07-28T18:49:34+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "44-states-are-aligned-on-one-thing-in-th-7c5c4602",
    title: "44 states are aligned on one thing in their fight against prediction markets. It's about sports wagering",
    titleJa: "44 の州が予測市場との戦いにおいて 1 つの点で一致しています。スポーツ賭博に関するものです",
    summaryJa: "44の州司法長官からなる連合は月曜日、商品先物取引委員会に宛てた書簡の中で、同委員会には予測市場プラットフォーム上のスポーツ関連イベント契約を規制する権限はないと述べた。この書簡は、予測市場規制に関するCFTCの最初の規則案に対するパブリックコメント期間が月曜夜に終了したことを受けて送付された。この措置は主に取引所のスポーツ提供に焦点を当てている。",
    bodyOriginal: `A coalition of 44 state attorneys general wrote in a letter to the Commodity Futures Trading Commission on Monday that the agency doesn't have the power to regulate sports-related event contracts on prediction market platforms.
The letter was sent as the public comment period for the CFTC's first proposed rule on prediction market regulation expired Monday evening. The measure primarily focuses on exchanges' sports offerings.
"The Proposed Rule goes beyond the CFTC's statutory powers, is in tension with the Constitution, and would otherwise be arbitrary and capricious in its current form," wrote the coalition of states attorneys general, led by Ohio Attorney General Andy Wilson. "The CFTC should start afresh with its rulemaking and clarify that sports bets and gambling cannot be traded on [designated contract markets], but are instead subject to state law."
Attorneys general representing Florida, Georgia, New Hampshire, Missouri and Texas did not sign the letter.
States and the CFTC have been locked in a jurisdictional battle ever since prediction market exchanges' volumes exploded last year, primarily driven by the popularity of their sports-related contracts. The 2026 FIFA World Cup sent platform volumes to new heights.
The CFTC — and prediction market platforms — argue that all event contracts are swaps, a derivative that is regulated by the commission. However, states across the country believe that the sports-related contracts look too much like sports betting, which is in their jurisdictional wheelhouse.
In June, the commission released a first draft of its proposed rule on regulating prediction markets. The draft focused heavily on the controversial sports-related event contracts, including describing which ones may end up prohibited.
It also crafted a definition for "gaming," which the commission in the rule said is something done for recreation or to entertain, is governed by rules and is based on measurable outcomes determined by skilled activity during the activity. In its own letter to the CFTC, derivatives marketplace CME Group disagreed with this definition.
"By defining 'gaming' as the sport itself rather than the financial wagering on the sport, the CFTC's definition suggests the [Commodity Exchange Act] is preempting state sports regulations, which is a striking overreach," wrote CME general counsel Jonathan Marcus in the letter.
The CFTC has used federal preemption as an argument in court proceedings across the U.S. against states to defend what it sees as its exclusive jurisdiction to regulate prediction markets. The commission is in litigation with nine states across the country to defend that belief.
While the CME is concerned about the federal government regulating sports-related event contracts, the exchange acts as sportsbook FanDuel's CFTC-regulated exchange for its sports prediction markets.
Meanwhile, prediction market platform Rothera — which launched in June — argued that the commission should adopt the "gaming" definition precisely because it makes it about the activity itself.
"A definition keyed to wagering, or to 'risking something of value' would, as the Commission recognizes, sweep in every event contract," Rothera CEO Thomas Chippas wrote in a letter to the commission. "Rothera agrees that a definition keyed to 'wagering' should be rejected."
Observers of prediction markets widely agree the Supreme Court will likely have the final say in who gets to regulate sports-related event contracts. Until then, a flurry of other court decisions are deciding the status of prediction markets' offerings.
Those decisions are often yielding diverging results. A Michigan judge in late June blocked platform Kalshi from offering sports bets in the state, while a federal judge in Minnesota on Monday temporarily blocked a statewide ban on prediction markets from taking effect Saturday.
Disclosure: CNBC and Kalshi have a commercial relationship that includes customer acquisition and a minority investment.`,
    bodyJa: `44の州司法長官からなる連合は月曜日、商品先物取引委員会に宛てた書簡の中で、同委員会には予測市場プラットフォーム上のスポーツ関連イベント契約を規制する権限はないと述べた。
この書簡は、予測市場規制に関するCFTCの最初の規則案に対するパブリックコメント期間が月曜夜に終了したことを受けて送付された。この措置は主に取引所のスポーツ提供に焦点を当てている。
オハイオ州のアンディ・ウィルソン司法長官率いる州司法長官連合は、「規則案はCFTCの法定権限を超えており、憲法と矛盾しており、そうでなければ現在の形では恣意的かつ気まぐれなものとなるだろう」と述べた。 「CFTCはルール作りを新たに始め、スポーツ賭博とギャンブルは[指定された契約市場]で取引することはできず、代わりに州法の規制を受けることを明確にするべきだ。」
フロリダ、ジョージア、ニューハンプシャー、ミズーリ、テキサスの各州を代表する司法長官は書簡に署名しなかった。
昨年、主にスポーツ関連の契約の人気に牽引されて予測市場取引所の取引量が爆発的に増加して以来、州とCFTCは管轄権をめぐる争いに巻き込まれてきた。 2026 FIFA ワールドカップでは、プラットフォームのボリュームが新たな高みに達しました。
CFTCと予測市場プラットフォームは、すべてのイベント契約はスワップであり、委員会によって規制されているデリバティブであると主張している。しかし、全国の州は、スポーツ関連の契約がスポーツ賭博に酷似しており、管轄区域内にあると考えている。
同委員会は6月、予測市場の規制に関する規則案の初案を発表した。この草案は、物議を醸しているスポーツ関連のイベント契約に重点を置き、どの契約が最終的に禁止される可能性があるのか​​についても記述している。
同委員会は規則の中で「ゲーム」の定義も作成し、同委員会は「ゲーム」とはレクリエーションまたは娯楽のために行われるものであり、規則によって管理され、その活動中の熟練した活動によって決定される測定可能な成果に基づいていると述べた。デリバティブ市場のCMEグループはCFTCに宛てた書簡の中で、この定義に同意しなかった。
CMEの法務顧問ジョナサン・マーカス氏は書簡の中で、「CFTCの定義は『ゲーム』をスポーツに対する金銭的賭けではなく、スポーツそのものと定義することで、[商品取引法]が州のスポーツ規制を先取りしていることを示唆しており、これは著しい行き過ぎである」と述べた。
CFTCは、予測市場を規制する独占的管轄権と見なしているものを擁護するために、全米各地で州に対する訴訟手続きの論拠として連邦の先制権を利用してきた。同委員会はその信念を擁護するために全米の9つの州と訴訟を起こしている。
CMEは連邦政府がスポーツ関連のイベント契約を規制していることを懸念しているが、同取引所はスポーツブック・ファンデュエルのスポーツ予測市場においてCFTC規制の取引所として機能している。
一方、6月に立ち上げられた予測市場プラットフォーム「ロセラ」は、委員会がまさに「ゲーム」の定義を採用すべきだと主張した。なぜなら、それは活動そのものに関するものだからだ。
ロセラの最高経営責任者（CEO）トーマス・チパス氏は、「委員会が認識しているように、賭博、あるいは『価値のあるものを危険にさらす』ことに重点を置いた定義は、あらゆるイベント契約に全面的に浸透するだろう」と委員会への書簡で書いた。 「ロセラ氏は、『賭け』に焦点を当てた定義は拒否されるべきであることに同意する。」
予測市場の観察者らは、スポーツ関連のイベント契約を誰が規制するかについて最高裁判所が最終決定権を持つ可能性が高いことに広く同意している。それまでは、他の裁判所の相次ぐ判決が予測市場の提供状況を決定することになる。
こうした決定は、多くの場合、異なる結果をもたらします。ミシガン州の判事は6月下旬、プラットフォーム「カルシ」による同州内でのスポーツ賭博の提供を差し止め、一方ミネソタ州の連邦判事は月曜日、州全体での予想市場の土曜日の禁止措置の発効を一時的に差し止めた。
開示: CNBC とカルシには、顧客の獲得と少数出資を含む商業関係があります。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/28/44-states-say-cftc-has-no-authority-over-sports-prediction-markets.html",
    publishedAt: "2026-07-28T18:27:43+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "senate-to-set-up-key-vote-on-russia-sanc-402cde1b",
    title: "Senate to set up key vote on Russia sanctions",
    titleJa: "上院、ロシア制裁に関する主要投票を設定へ",
    summaryJa: "上院は火曜日、ウクライナにおけるロシアの戦争努力を阻害することを目的とした待望の制裁法案の採決を開始すると予想されている。この法案はサウスカロライナ州の故リンジー・グラハム上院議員にちなんで命名されたもので、ロシアの石油販売を対象とした制裁と関税当局のパッケージである。支持者らは、石油はモスクワが戦争機構の資金調達に使用する最大の物資であり、今それを標的にすることがキエフが戦場で流れを変えるのに役立つだろうと主張する。",
    bodyOriginal: `The Senate on Tuesday is expected to begin setting up votes on a long-awaited sanctions bill aimed at hobbling Russia's war effort in Ukraine.
The bill, named for the late Sen. Lindsey Graham of South Carolina, is a package of sanctions and tariff authority targeting Russian oil sales. Proponents say oil is the top commodity Moscow uses to fund its war machine, and targeting it now will help Kyiv turn the tide on the battlefield.
Sen. Richard Blumenthal, D-Conn, along with Sens. Darline Graham, R-S.C., Katie Britt, R-Ala., Jeanne Shaheen, D-N.H, Roger Wicker, R-Miss., and Jim Risch, R-Idaho, announced on Tuesday they had reached a deal to combine the Russia sanctions package with sanctions on Iran. That move allows a first vote to be expected on Tuesday night, while Ukrainian President Volodymyr Zelensky is in Washington for Graham's funeral services.
"We are proud to announce an agreement on legislation to stop purchasers of Russian oil and gas from fueling Putin's war machine and to continue restricting the Iranian regime's ability to support terrorism and build its nuclear program," the lawmakers said in a joint statement, referring to Russian President Vladimir Putin. "There is no greater way to honor Senator Graham's legacy than to move forward with this bipartisan agreement, and we look forward to today's vote."
Graham had just returned to Washington from Ukraine when he died.
The bill includes sweeping sets of sanctions aimed at Russia and the enablers of its war effort.
The sanctions target Russian officials, oligarchs, their family members, foreign persons, Russian banks and financial institutions and the Russian shadow fleet.
The legislation also aims to use one of President Donald Trump's favorite tools by including a new authority for the president to impose tariffs on imported goods from countries that buy Russian oil or enable Russian sanctions evasion. The tariffs would be limited to the top five importers of Russian oil or gas and the top five enablers of energy sanctions evasion.
The bill would also extend sanctions authority that restricts funding for Iran's energy and weapons sectors, a crucial component of getting an agreement while the U.S. continues to wage a war with Iran.`,
    bodyJa: `上院は火曜日、ウクライナにおけるロシアの戦争努力を阻害することを目的とした待望の制裁法案の採決を開始すると予想されている。
この法案はサウスカロライナ州の故リンジー・グラハム上院議員にちなんで命名されたもので、ロシアの石油販売を対象とした制裁と関税当局のパッケージである。支持者らは、石油はモスクワが戦争機構の資金調達に使用する最大の物資であり、今それを標的にすることがキエフが戦場で流れを変えるのに役立つだろうと主張する。
リチャード・ブルーメンソール上院議員（民主党、コンネン州）は、ダーリン・グラハム上院議員（共和党、サウスカロライナ州）、ケイティ・ブリット上院議員（アラバマ州）、ジーン・シャヒーン上院議員（民主党、ニューハンプシャー州）、ロジャー・ウィッカー上院議員（共和党、ミシシッピ州）、ジム・リッシュ上院議員（共和党、アイダホ州）とともに火曜日、ロシア制裁パッケージと対イラン制裁を組み合わせることで合意に達したと発表した。この動きにより、ウクライナのウォロディミル・ゼレンスキー大統領がグラハム氏の葬儀のためワシントンを訪れている火曜日の夜に最初の投票が行われることが予想される。
議員らは共同声明で、ロシアのウラジーミル・プーチン大統領に言及し、「ロシアの石油とガスの購入者がプーチン大統領の戦争機構に燃料を供給することを阻止し、テロ支援と核開発計画を構築するイラン政権の能力を制限し続けるための法案に関する合意を発表できることを誇りに思う」と述べた。 「グラハム上院議員の功績を称えるには、この超党派の合意を前進させること以上に素晴らしい方法はありません。私たちは今日の投票を楽しみにしています。」
グラハム氏が亡くなったのは、ウクライナからワシントンに戻ったばかりだった。
この法案には、ロシアとその戦争遂行を可能にする者を対象とした一連の広範な制裁が含まれている。
制裁の対象は、ロシア当局者、寡頭政治家、その家族、外国人、ロシアの銀行や金融機関、ロシアの影の艦隊である。
この法案はまた、ロシアの石油を購入したり、ロシアの制裁回避を可能にしたりする国からの輸入品に関税を課す権限を大統領に新たに盛り込むことで、ドナルド・トランプ大統領のお気に入りの手段の一つを利用することを目的としている。関税の対象となるのは、ロシアの石油・ガス輸入国上位５社と、エネルギー制裁回避を可能にした上位５社に限定される。
この法案はまた、米国がイランとの戦争を続ける中で合意を得るために重要な要素である、イランのエネルギー・兵器部門への資金提供を制限する制裁権限を拡大することになる。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/28/russia-sanctions-congress-key-vote-lindsey-graham-ukraine.html",
    publishedAt: "2026-07-28T18:17:55+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "some-parents-on-benefits-to-get-up-to-4-31ecc0e3",
    title: "Some parents on benefits to get up to £4,500 for child starting apprenticeship",
    titleJa: "見習いを始める子供に最大4,500ポンドを受け取る手当を受給している親もいる",
    summaryJa: "見習いを始める子供に最大4,500ポンドを受け取る手当を受給している親もいる- 公開されました",
    bodyOriginal: `Some parents on benefits to get up to £4,500 for child starting apprenticeship
- Published
Some parents on benefits will be given up to £4,500 a year to encourage their children to start apprenticeships, the government has said.
Under plans to encourage young people into work, families will be offered a bursary to replace Universal Credit payments lost by starting jobs.
The payment is expected to benefit an estimated few thousand households, who currently face losing between £17 and £330 a week if their children start apprenticeships.
The Conservatives welcomed Prime Minister Andy Burnham's support for apprenticeships, but criticised his plans to fund the bursaries.
The bursary will be paid for from a £30m pot, funded through the growth and skills levy, a tax on employers with annual wage bills over £3m.
It followed the publication of a Social Security Advisory Committee report, external which warned of the "perverse effects" of the benefits system on young people's employment choices.
It said, for example, single parents with a disabled child could lose up to £340 per week in benefits if their child started an apprenticeship, exceeding the expected apprenticeship salary of £258 per week.
Because they are classed as paid employment, benefit payments are reduced to households where young people take on apprenticeships.
The committee said the system was hampering government efforts to reduce the number of young people not in education, employment or training (Neet).
In a recent report, former Health Secretary Alan Milburn warned that one in six young people could be Neet in the next five years unless urgent action is taken.
Official figures show more than a million people aged 16 to 24 are currently Neet.
The government said its new bursary would remove a barrier to young people taking on apprenticeships, allowing them to "earn and learn".
Work and Pensions Secretary Pat McFadden said: "By providing bursaries to those who need them most and fully funding apprenticeship training, we are making sure cost is not the reason someone misses out."
It is part of a wider package of support for apprenticeships, including funding for apprenticeship training for under-25s and additional support for employers taking on apprentices.
Helen Whately, the Shadow Work and Pensions Secretary, said: "I'm glad Burnham agrees: apprenticeships are a good thing, and we need more of them."
But she said the plan was "uncosted".
"It is spending money already committed elsewhere. So, either it is another unfunded announcement, or Andy Burnham is not being straight with us about his plans."
Burnham has said he is "on a mission" to reduce the number of Neets.
"The trend is rising at the moment, so the first thing I've got to do is to stop that rise," he said.
As he continues a flurry of early policy announcements, Burnham on Tuesday set out plans to strike a balance in the education system between prioritising academic and technical skills.`,
    bodyJa: `見習いを始める子供に最大4,500ポンドを受け取る手当を受給している親もいる
- 公開されました
政府は、子供たちが実習を始めるよう奨励するために、給付金を受けている一部の親に年間最大4,500ポンドを与えると発表した。
若者の就労を奨励する計画に基づき、就職によって失われたユニバーサルクレジットの支払いに代わる奨学金が家族に提供される。
この支払いは、子供たちが実習を始めた場合、現在週に17ポンドから330ポンドの損失に直面している推定数千世帯に恩恵をもたらすことが期待されている。
保守党はアンディ・バーナム首相の実習支援を歓迎したが、奨学金に資金を提供する同首相の計画を批判した。
この奨学金は、年間賃金が 300 万ポンドを超える雇用主に課される税金である成長・技能税を通じて 3,000 万ポンドから支払われます。
これは、若者の雇用選択に対する給付金制度の「悪影響」を警告する社会保障諮問委員会の外部報告書の公表を受けたものである。
例えば、障害のある子どもを持つひとり親は、子どもが見習いを始めた場合、週あたり最大340ポンドの給付金を失う可能性があり、見習いとしての週給258ポンドを超えると予想されている。
若者は有給雇用に分類されるため、若者が見習いに就く世帯への給付金の支払いは減額される。
同委員会は、この制度が教育、雇用、訓練を受けていない若者（ニート）の数を減らす政府の取り組みを妨げていると述べた。
元保健長官アラン・ミルバーンは最近の報告書で、緊急の措置を講じなければ今後5年間で若者の6人に1人がニートになる可能性があると警告した。
公式統計によると、16歳から24歳までの100万人以上が現在ニートとなっている。
政府は、新たな奨学金は若者が実習を受ける際の障壁を取り除き、若者が「稼ぎ、学ぶ」ことができるようにすると述べた。
パット・マクファーデン労働年金長官は、「最も必要とする人たちに奨学金を支給し、見習い訓練に全額資金を提供することで、費用のせいで誰かが逃すことがないようにする」と述べた。
これは、25歳未満の見習い訓練への資金提供や、見習いを受け入れる雇用主への追加支援など、見習いに対する広範な支援パッケージの一部である。
シャドーワーク・年金長官のヘレン・ウェイトリー氏は、「バーナム氏が同意してくれてうれしい。見習いは良いことであり、もっと必要だ」と語った。
しかし彼女は、この計画には「費用がかからない」と述べた。
「すでに他の場所で投入されている資金を使っている。つまり、資金提供されていない新たな発表か、アンディ・バーナムが自分の計画について我々に率直に答えていないかのどちらかだ」
バーナム氏はニートの数を減らすという「使命を担っている」と述べた。
同氏は「現時点では上昇傾向にあるので、まずやらなければならないのは上昇を止めることだ」と述べた。
早期の政策発表を相次ぐ中、バーナム氏は火曜日、学力と技術的スキルの優先の間で教育制度のバランスを取る計画を打ち出した。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cwy4v6e9d2go?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-28T17:32:56+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/c6ce/live/12757a60-8aa2-11f1-951f-a70d41b77a63.jpg",
    readTime: 3,
  },
  {
    id: "blurred-front-lines-trump-meets-zelensky-0fc0acf5",
    title: "Blurred front lines: Trump meets Zelenskyy as Ukraine, Iran wars collide",
    titleJa: "曖昧な前線：ウクライナとイランの戦争が衝突する中、トランプ氏がゼレンスキー氏と会談",
    summaryJa: "ウクライナのウォロディミル・ゼレンスキー大統領は火曜日、ドナルド・トランプ大統領と会談するためホワイトハウスを訪れ、ロシアとイランの紛争が収束の兆しを見せている中、キエフへの支持を強化しようとしている。この会談は、米国の対イラン戦争とロシアのウクライナへの全面侵攻が重大な局面を迎えている中で行われた。トランプ大統領は外交にもう一度チャンスを与える取り組みの一環としてイランへの空爆を一時停止したが、ゼレンシキー大統領はロシア領土での一連の集中攻撃の成功に元気づけられた。",
    bodyOriginal: `Ukrainian President Volodymyr Zelenskyy is at the White House on Tuesday for talks with President Donald Trump, as he looks to shore up support for Kyiv at a time when the Russia and Iran conflicts have shown signs of converging.
The meeting comes as the U.S war against Iran and Russia's full-scale invasion of Ukraine reach critical junctures. Trump has paused airstrikes against Iran as part of a push to give diplomacy another chance, while Zelenskyy has been galvanized by a flurry of deep-strike successes on Russian territory.
The meeting represents a chance for Zelenskyy to further improve his relationship with Trump, roughly 17 months on from an Oval Office meeting that unraveled into an extraordinary shouting match.
The visit also coincides with a renewed congressional push to tighten sanctions on Moscow. The Senate is scheduled to hold a procedural vote Tuesday evening on legislation championed by the late Sen. Lindsey Graham that would target Russia and countries that continue buying its energy exports.
The bipartisan measure would impose tariffs on goods from some of the largest buyers of Russian oil and natural gas, including China and India. It would also sanction Russian President Vladimir Putin, senior political and military officials, financial institutions and major energy projects.
Zelenskyy is expected to meet with senators Tuesday evening after Graham's funeral, the reason Zelenskyy traveled to Washington.
Despite the action on Capitol Hill, there appears to be no immediate end in sight to the global conflicts. In fact, the sprawling Middle East war has threatened to overlap with the Russia-Ukraine conflict in recent days.
Kyiv on Saturday launched an attack on an Iranian commercial vessel in the Caspian Sea, an incident which Tehran said left one sailor dead and injured several others. The Islamic Republic has threatened retaliation over the strike, with Foreign Minister Abbas Araghchi saying via social media that it "CANNOT GO UNANSWERED."
In a post on X on Saturday, Zelenskyy said Ukraine had "achieved very strong results with long‑range strikes in the Caspian Sea – including vessels used in military cargo shipments involving Iran, as well as a warship."
Christopher Granville, managing director at TS Lombard, described Ukraine's attack on an Iranian vessel in the Caspian Sea as a "very significant" development.
"The Ukrainian President Volodymyr Zelenskyy has himself spoken of these strikes with satisfaction and justified them on the grounds that Ukrainian intelligence has evidence that Russian intelligence is helping Iran with targeting U.S. military sites in neighboring Middle Eastern countries," Granville told CNBC's "Europe Early Edition" on Monday.
"It's a collision of these wars. It's a merger. I think fundamentally this is very significant. Militarily how significant it is remains, of course, to be seen, but Iran has said in its public statement that it will hit back and that Ukraine has made a mistake which it will regret," he added.
Ukrainian authorities may be calculating that Iran has its hands full with its war with the U.S., Granville said, "but as it happens, the military exchanges between [the] U.S. and Iran have died down in the last two or three days. So, yeah, it's a big deal."
Wars becoming 'increasingly intertwined'
Ukraine's foreign minister, Andrii Sybiha, on Monday described Iran's threats of retaliation as "unjustified and groundless."
The regime in Tehran "is a direct accomplice to Russian aggression against Ukraine, fuelling Moscow's criminal war with weapons that have killed Ukrainians since 2022," Sybiha said via X, referring to the start of Russia's war against Ukraine.
Russia has long used Iranian-designed Shahed drones in its war on Ukraine, a weapon that analysts sometimes refer to as "the poor man's cruise missile."
Hamidreza Azizi, an expert on Iranian security and visiting fellow at Berlin-based think tank SWP, said that at the political level, Iran could respond to Ukraine's attack by recognizing Crimea and the Donbas as parts of Russian territory, areas occupied by Russia that Tehran has so far refused to endorse.
"In any case, what is clear is that Iran's war is becoming increasingly intertwined with two other conflicts: the Saudi-Houthi confrontation and the Russia-Ukraine war," Azizi said Sunday in a social media post.
"With each passing day, the war is evolving into an increasingly complex, multidimensional, and international conflict, he added.
— CNBC's Azhar Sukri contributed to this report.`,
    bodyJa: `ウクライナのウォロディミル・ゼレンスキー大統領は火曜日、ドナルド・トランプ大統領と会談するためホワイトハウスを訪れ、ロシアとイランの紛争が収束の兆しを見せている中、キエフへの支持を強化しようとしている。
この会談は、米国の対イラン戦争とロシアのウクライナへの全面侵攻が重大な局面を迎えている中で行われた。トランプ大統領は外交にもう一度チャンスを与える取り組みの一環としてイランへの空爆を一時停止したが、ゼレンシキー大統領はロシア領土での一連の集中攻撃の成功に元気づけられた。
異例の怒鳴り合いに発展した大統領執務室での会談から約17カ月後、今回の会談はゼレンスキー氏にとってトランプ大統領との関係をさらに改善するチャンスとなる。
この訪問はまた、モスクワに対する制裁強化を求める議会の新たな動きと同時に行われる。上院は火曜日の夜、故リンジー・グラハム上院議員が提唱した、ロシアとそのエネルギー輸出を継続的に購入している国々を対象とする法案の手続き採決を行う予定である。
超党派のこの措置は、中国やインドを含むロシアの石油と天然ガスの最大の購入国からの製品に関税を課すことになる。ロシアのウラジーミル・プーチン大統領、政治・軍事高官、金融機関、主要エネルギープロジェクトも制裁対象となる。
ゼレンスキー氏はグラハム氏の葬儀後、火曜日の夜に上院議員らと会談する予定で、これがゼレンスキー氏のワシントン訪問の理由となっている。
国会議事堂での行動にもかかわらず、世界的な紛争の即時終結の見通しはないようだ。実際、広範囲に及ぶ中東戦争は、ここ数日のロシアとウクライナの紛争と重なる恐れがある。
キエフは土曜日、カスピ海でイラン商船への攻撃を開始し、イラン政府はこの事件により船員1名が死亡、数名が負傷したと発表した。イスラム共和国は今回の攻撃を巡り報復すると脅しており、アッバス・アラグチ外相はソーシャルメディアを通じて「無回答ではいられない」と述べた。
ゼレンシキー大統領は土曜日のＸへの投稿で、ウクライナが「軍艦だけでなくイランが関係する軍事貨物輸送に使用された船舶も含めたカスピ海での長距離攻撃で非常に強力な成果を上げた」と述べた。
TSロンバードのマネージング・ディレクター、クリストファー・グランビル氏は、カスピ海におけるウクライナによるイラン船舶攻撃について「非常に重要な」進展であると述べた。
「ウクライナのウォロディミル・ゼレンシキー大統領自身がこれらの攻撃について満足げに語り、近隣の中東諸国にある米軍施設を標的とするイランをロシア諜報機関が支援しているという証拠をウクライナ諜報機関が掴んでいるという理由で攻撃を正当化した」とグランビル氏は月曜日、CNBCの「欧州早期版」に語った。
「これはこれらの戦争の衝突であり、合併だ。基本的にこれは非常に重要だと思う。軍事的にどの程度重要かはもちろん分からないが、イランは公式声明で反撃すると述べ、ウクライナは後悔する間違いを犯したと述べた」と付け加えた。
グランビル氏は、ウクライナ当局はイランが米国との戦争で手一杯だと計算しているのかもしれない、「しかし、たまたま、米国とイランの間の軍事交流はここ２、３日で消滅した。だから、そうだ、これは大したことだ」と語った。
戦争は「ますます複雑に絡み合う」
ウクライナのアンドリー・シビハ外相は月曜日、イランの報復脅迫は「不当で根拠がない」と述べた。
テヘラン政権は「ロシアの対ウクライナ侵略の直接の共犯者であり、2022年以来ウクライナ人を殺害している兵器によるモスクワの犯罪戦争を煽っている」とシビハ氏はX経由で、ロシアの対ウクライナ戦争の開始に言及して述べた。
ロシアは長年、イランが設計したシャヒド無人機を対ウクライナ戦争で使用しており、アナリストはこの兵器を「貧乏人の巡航ミサイル」と呼ぶこともある。
イランの安全保障の専門家で、ベルリンに本拠を置くシンクタンクSWPの客員研究員であるハミドレザ・アジジ氏は、イランは政治レベルで、クリミアとドンバスをロシア領土の一部と認めることでウクライナの攻撃に対応する可能性があると述べた。
「いずれにせよ、明らかなことは、イランの戦争が、サウジとフーシ派の対立とロシアとウクライナの戦争という他の2つの紛争とますます絡み合っているということだ」とアジジ氏は日曜、ソーシャルメディアへの投稿で述べた。
「日を追うごとに、戦争はますます複雑で多次元的な国際紛争へと発展している」と彼は付け加えた。
— CNBC の Azhar Sukri がこのレポートに寄稿しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/28/trump-zelenskyy-ukraine-russia-iran-war.html",
    publishedAt: "2026-07-28T15:59:04+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 5,
  },
  {
    id: "micron-s-stock-sinks-toward-worst-monthl-923b573e",
    title: "Micron’s stock sinks toward worst monthly drop in 11 years as China fears escalate",
    titleJa: "中国の懸念激化でマイクロン株、月間下落率は11年ぶり最悪に",
    summaryJa: "アナリストらは、投資家は中国国内のチップや製造ツールの供給に懸念を抱いていると指摘した。",
    bodyOriginal: `Investors are worried about China’s domestic supply of chips and manufacturing tools, analysts noted.`,
    bodyJa: `アナリストらは、投資家は中国国内のチップや製造ツールの供給に懸念を抱いていると指摘した。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/microns-stock-sinks-toward-worst-monthly-drop-in-11-years-as-china-fears-escalate-3c956a67?mod=mw_rss_topstories",
    publishedAt: "2026-07-28T14:25:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-00348993",
    readTime: 2,
  },
  {
    id: "the-10-busiest-commuter-trains-in-englan-c9582efb",
    title: "The 10 busiest commuter trains in England and Wales revealed",
    titleJa: "イングランドとウェールズで最も混雑する通勤電車トップ10が明らかに",
    summaryJa: "イングランドとウェールズで最も混雑する通勤電車トップ10が明らかに- 公開されました",
    bodyOriginal: `The 10 busiest commuter trains in England and Wales revealed
- Published
The most overcrowded train service in England and Wales last autumn was a Thameslink morning rush hour service between Bedford and Three Bridges in West Sussex, according to the Department for Transport (DfT).
Second on the list was a West Midlands service from London Euston to Crewe, Cheshire, departing at 17:46, the government figures reveal.
Overall, they show overcrowding on commuter trains serving major English and Welsh cities fell slightly, for the first time since 2020, due to an increase in capacity.
Only 1.1% of peak-time travellers were on an overcrowded train, the DfT said. More than 1.2 million of the average 1.9 million journeys on a typical autumn day were in London.
The DfT says work is under way to improve capacity where there are pinch points during peak hours.
The Thameslink service which topped the list had a "load factor" – meaning how full the train was – of 176% at London St Pancras shortly after 08:00.
The West Midlands service to Crewe had a load factor of 170%. It was busiest when it departed Euston.
The third most crowded train was a Transport for Wales service from Bridgend to Rhymney, with a load factor of 161%. It was busiest at Llanishen.
Four of the top ten services were operated by South Western, and Thameslink appeared twice more.
The 10 most jam-packed services (load factor and busiest time)
Thameslink: Bedford to Three Bridges via London St Pancras (176% at 08:09)
West Midlands: London Euston to Crewe (170% at 17:46)
Transport for Wales: Bridgend to Rhymney via Llanishen (161% at 16:45)
South Western: Alton to London Waterloo (159% at 08:22)
Thameslink: Bedford to Three Bridges via London St Pancras (155% at 08:24)
South Western: Fareham to London Waterloo via Vauxhall (151% at 08:19)
Thameslink: Epsom to London Bridge (150% at 08:28)
South Western: Portsmouth Harbour to London Waterloo via Vauxhall (149% at 08:27)
South Western: London Waterloo to Basingstoke via Vauxhall (147% at 17:50)
West Midlands: London Euston to Birmingham New Street (146% at 17:56)
The DfT figures were based on passenger counts taken on Tuesdays, Wednesdays and Thursdays between September and December 2025, and represent travel on a typical autumn weekday.
Overcrowding fell slightly overall compared with autumn 2024, with an average of 16,800 (1%) passengers a day travelling in excess of capacity.
The DfT said seating capacity has grown 4% in the past year.
A spokesperson said: "The vast majority of passengers – 98.9% – typically travel on services that are not overcrowded.
"Where there are pinch points during peak hours, work is under way to improve capacity. GTR has added carriages to its busiest commuter services, while South Western Railway has boosted capacity by nearly 30% in the last year with new trains.
"Bringing track and train together under Great British Railways will support further improvements, helping create a joined-up service that puts passengers first."
A quarter of passengers travelling in and out of London at peak times had to stand. But in other cities, only 5% of passengers could not get a seat.
A Thameslink spokesperson said its trains were designed to have ample standing room on board its busiest commuter routes.
"We are always monitoring how busy our services are and continually make changes to provide more space.
"In the last few years alone, we've lengthened trains on some of our busiest Bedford to London services and introduced an additional peak-time service to provide more choice and extra space."
Related topics
- Published6 days ago
- Published30 June`,
    bodyJa: `イングランドとウェールズで最も混雑する通勤電車トップ10が明らかに
- 公開されました
運輸省（DfT）によると、昨秋イングランドとウェールズで最も混雑した鉄道サービスは、ベッドフォードとウェストサセックス州スリーブリッジ間のテムズリンク朝のラッシュアワーサービスだった。
リストの2番目は、17時46分出発のロンドン・ユーストン発チェシャー州クルー行きのウエスト・ミッドランズ便だったことが政府統計で明らかになった。
全体として、イギリスとウェールズの主要都市を結ぶ通勤電車の過密状態が、定員増加により2020年以来初めて若干減少したことが示されている。
DfTによると、ピーク時の旅行者のうち満員電車に乗っていたのはわずか1.1％だった。典型的な秋の日の平均 190 万人の旅行のうち 120 万人以上がロンドンでした。
DfT は、ピーク時間帯にピンチポイントが存在する場所の容量を改善する作業が進行中であると述べています。
リストのトップとなったテムズリンク便は、ロンドン・セント・パンクラス駅で午前8時過ぎに「乗車率」（列車の満員率を意味する）が176％となった。
クルー行きのウエスト・ミッドランズ便の搭乗率は 170% でした。ユーストンを出発するときが最も混雑していました。
3 番目に混雑した列車はブリジェンドからリムニーまでのウェールズ交通サービスで、乗車率は 161% でした。ラニシェンが一番賑わっていました。
上位 10 サービスのうち 4 つはサウス ウェスタン社が運営しており、テムズリンクはさらに 2 回登場しました。
最も混雑している 10 のサービス (負荷率と最も混雑する時間帯)
テムズリンク: ベッドフォードからロンドン セント パンクラス経由スリー ブリッジ (08:09 で 176%)
ウェスト・ミッドランズ: ロンドン・ユーストン～クルー (17:46 で 170%)
ウェールズへの交通機関: ブリジェンドからラニシェン経由リムニー (16:45 で 161%)
南西部: オールトンからロンドン ウォータールー (08:22 で 159%)
テムズリンク: ベッドフォードからロンドン セント パンクラス経由スリー ブリッジ (08:24 で 155%)
南西部: フェアラムからボクソール経由ロンドン ウォータールー (08:19 で 151%)
テムズリンク: エプソムからロンドン ブリッジ (08:28 で 150%)
南西部: ポーツマス港からボクソール経由ロンドン ウォータールー (08:27 で 149%)
南西部: ロンドン ウォータールーからボクソール経由ベイジングストーク (17:50 で 147%)
ウェスト・ミッドランズ: ロンドン・ユーストンからバーミンガム・ニュー・ストリートまで(17:56で146%)
DfT の数値は、2025 年 9 月から 12 月までの火曜日、水曜日、木曜日に測定された乗客数に基づいており、典型的な秋の平日の旅行を表しています。
2024 年秋と比較して全体的に過密状態はわずかに減少し、1 日平均 16,800 人 (1%) の乗客が定員を超えて移動しました。
DfTによると、座席数は過去1年間で4％増加したという。
広報担当者は「乗客の大多数（98.9％）は通常、混雑していないサービスを利用している。
「ピーク時間帯にピンチポイントがある場合は、処理能力を向上させるための作業が進行中です。 GTR は最も混雑する通勤サービスに車両を追加し、サウス ウェスタン鉄道は昨年、新しい列車により輸送力を 30% 近く増強しました。
「グレートブリティッシュ鉄道の下で線路と列車を統合することはさらなる改善をサポートし、乗客を第一に考えた統合サービスの構築に役立ちます。」
ピーク時にロンドンを出入りする乗客の4分の1は立っていなければならなかった。しかし、他の都市では、座席に座ることができなかった乗客はわずか 5% でした。
テムズリンクの広報担当者は、同社の列車は最も混雑する通勤路線で十分な立席スペースを確保できるように設計されていると述べた。
「私たちはサービスの混雑状況を常に監視しており、より多くのスペースを提供するために継続的に変更を加えています。
「過去数年だけでも、当社は最も混雑するベッドフォードからロンドンへのサービスの一部で列車を延長し、より多くの選択肢とスペースを提供するために追加のピークタイムサービスを導入しました。」
関連トピック
- 6 日前に公開
- 6 月 30 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c20dxevjlvxo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-28T14:17:57+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/7a89/live/72a40b80-8a7b-11f1-82f1-411b076ec7a9.jpg",
    readTime: 5,
  },
  {
    id: "coca-cola-tops-earnings-estimates-hikes-e0ffcfc3",
    title: "Coca-Cola tops earnings estimates, hikes full-year outlook as demand for drinks climbs",
    titleJa: "コカ・コーラ、利益予想を上回り、飲料需要の高まりで通年見通しを引き上げ",
    summaryJa: "コカ・コーラは火曜日、飲料の需要の高まりに支えられ、ウォール街の予想を上回る四半期利益と売上高を報告した。同社は通期予想も引き上げた。コカ・コーラは現在、同等の一株当たり利益の伸びを９％から１０％と予想しており、従来予想の８％から９％から引き上げている。また、本業収益も約5％増加すると予想しており、従来の4～5％の範囲の上限となる。",
    bodyOriginal: `Coca-Cola on Tuesday reported quarterly earnings and revenue that topped Wall Street's estimates, fueled by higher demand for its drinks.
The company also hiked its full-year forecast. Coke is now projecting comparable earnings per share growth of 9% to 10%, up from its prior forecast of 8% to 9%. It also expects organic revenue to increase about 5%, on the high end of its earlier range of 4% to 5%.
Shares of Coke rose more than 6% in morning trading.
Here's what the company reported compared with what Wall Street analysts surveyed by LSEG were expecting:
- Adjusted earnings per share: 97 cents, vs. expected 93 cents
- Revenue: $13.38 billion, vs. $13.16 billion expected
Coke reported second-quarter net income of $4.43 billion, or $1.03 per share, up from $3.81 billion, or 89 cents per share, a year earlier.
Excluding asset impairments, restructuring costs and other items, the company earned 97 cents per share.
Net sales rose 7% to $13.38 billion. Coke's organic revenue, which excludes acquisitions, divestitures and currency fluctuations, jumped 6% in the quarter.
Tune in at 10:15 a.m. ET as Coca-Cola CEO Henrique Braun joins CNBC TV to discuss the company's earnings. Watch in real time on CNBC+ or the CNBC Pro stream.
The company's global unit case volume increased 5%, and every one of its reporting segments saw volume growth. The metric strips out pricing to reflect demand more accurately.
The consumer environment is "dynamic," CEO Henrique Braun said in a statement. The comment followed rival PepsiCo saying that shoppers' budgets tightened in the second quarter, leading to weaker sales in the U.S. for its snacks and drinks.
Global oil prices have swung dramatically due to the U.S. war with Iran, leading many consumers to temper their spending. In Coke's home market, the national average gas price hit a four-year high of $4.56 per gallon in late May.
"The economy is strong in many places, yet many consumers face inflationary pressures, geopolitical uncertainty and economic challenges," Braun said on the company's earnings conference call. "They are evaluating how they shop, what they value and what they want to put in their basket."
But Coke's results do not show consumers cutting back. Even in North America, volume grew 3% in the quarter.
The company credited its global World Cup campaign with driving higher demand. Two drinks in particular, its namesake soda and Powerade, saw higher volumes that the company attributed, in part, to the tournament's marketing. Coke volume increased 5% — the drink's biggest quarterly jump in 17 years, excluding the pandemic — and Powerade volume climbed 8% in the quarter.
Coke's water, sports, coffee and tea segment was the top performer this quarter, with volume growth of 6%. Out of those four categories, all but coffee saw their volume increase during the quarter.
Coke's sparkling soft drinks segment reported volume growth of 4%, helped in part by the lift in demand for its namesake soda and its line extensions. Coca-Cola Zero Sugar saw volume climbed 16%, while Diet Coke, or Coca-Cola Light as it is known in some markets, reported volume growth of 7%. Additionally, the relaunch of Mr. Pibb, with 30% more caffeine, led the drink brand's volume to climb 20% in the quarter, according to Braun.
Coke's juice, value-added dairy and plant-based beverage division saw volume growth of 2%.`,
    bodyJa: `コカ・コーラは火曜日、飲料の需要の高まりに支えられ、ウォール街の予想を上回る四半期利益と売上高を報告した。
同社は通期予想も引き上げた。コカ・コーラは現在、同等の一株当たり利益の伸びを９％から１０％と予想しており、従来予想の８％から９％から引き上げている。また、本業収益も約5％増加すると予想しており、従来の4～5％の範囲の上限となる。
コカ・コーラの株価は午前の取引で６％超上昇した。
LSEGが調査したウォール街アナリストの予想と比較した同社の報告は次のとおりだ。
- 調整後一株当たり利益: 97 セント、予想 93 セント
- 収益: 133.8億ドル、予想131.6億ドル
コカ・コーラの第２・四半期純利益は４４億３０００万ドル（１株当たり１．０３ドル）と、前年同期の３８億１０００万ドル（１株当たり８９セント）から増加したと報告した。
資産の減損やリストラ費用などを除くと、同社は1株当たり97セントの利益を上げた。
純売上高は7%増の133億8000万ドルとなった。買収、売却、為替変動を除いたコーラの本業収益は同四半期に６％増加した。
コカ・コーラ CEO のエンリケ・ブラウン氏が CNBC TV に出演し、会社の収益について語る東部時間午前 10 時 15 分をお楽しみください。 CNBC+ または CNBC Pro ストリームでリアルタイムで視聴できます。
同社の世界的なユニットケース量は 5% 増加し、報告セグメントのすべてで量が増加しました。この指標では、需要をより正確に反映するために価格設定が取り除かれます。
消費者環境は「ダイナミック」であると最高経営責任者（CEO）のエンリケ・ブラウン氏は声明で述べた。このコメントは、ライバルのペプシコが、第2四半期に買い物客の予算が厳しくなり、米国でのスナックや飲料の売上減少につながったと述べたことを受けたものである。
米国とイランの戦争により世界の原油価格は劇的に変動し、多くの消費者が支出を控えるようになった。コカ・コーラの本拠地市場では、全米平均ガソリン価格が５月下旬、１ガロン当たり４．５６ドルと４年ぶりの高値を記録した。
ブラウン氏は決算会見で「経済は多くの地域で好調だが、多くの消費者がインフレ圧力や地政学的な不確実性、経済的課題に直面している」と述べた。 「彼らは自分がどのように買い物をするか、何を大切にし、何をカゴに入れたいかを評価しています。」
しかし、コカ・コーラの業績は、消費者が手を引いていることを示していない。北米でも、この四半期の販売量は 3% 増加しました。
同社は、ワールドカップの世界的なキャンペーンが需要の増加を促進したと考えています。特に、その名を冠したソーダとパワーエイドの 2 つのドリンクの販売量が増加し、同社はこれをトーナメントのマーケティングのせいだと考えています。コーラの販売量は 5% 増加し、パンデミックを除けば、この飲料の四半期としては過去 17 年間で最大の増加でした。また、パワーエイドの販売量は同四半期に 8% 増加しました。
コーラの水、スポーツ、コーヒー、紅茶部門が今四半期最高の業績を上げ、販売量は 6% 増加しました。これら 4 つのカテゴリーのうち、コーヒーを除くすべてのカテゴリーで、当四半期中に販売量が増加しました。
コーラのスパークリングソフトドリンク部門は、同名のソーダの需要の高まりとラインの拡張が一因となり、販売量が4%増加したと報告した。コカ・コーラ ゼロシュガーの販売量は 16% 増加し、ダイエット コーク、または一部の市場でコカ・コーラ ライトとして知られている商品は 7% の販売量増加を報告しました。さらにブラウン氏によると、カフェインを30％増量してミスター・ピブを再発売したことにより、同飲料ブランドの同四半期の販売量は20％増加したという。
コーラのジュース、付加価値乳製品、植物ベースの飲料部門は販売量が2%増加した。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/28/coca-cola-ko-q2-2026-earnings.html",
    publishedAt: "2026-07-28T14:15:23+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "roth-conversions-as-early-as-your-20s-an-db2e4948",
    title: "Roth conversions as early as your 20s and 30s? It’s not a crazy idea.",
    titleJa: "20代や30代の早い段階でロスに改宗したのですか？それはおかしなアイデアではありません。",
    summaryJa: "ほとんどの人は退職するまで税率が引き下げられませんが、もっと早い段階で税率が引き下げられる可能性があります",
    bodyOriginal: `Most people don’t get a break in their tax rate until they retire, but there could be earlier opportunities`,
    bodyJa: `ほとんどの人は退職するまで税率が引き下げられませんが、もっと早い段階で税率が引き下げられる可能性があります`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/roth-conversions-as-early-as-your-20s-and-30s-its-not-a-crazy-idea-1f028e24?mod=mw_rss_topstories",
    publishedAt: "2026-07-28T14:15:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-46845033",
    readTime: 2,
  },
  {
    id: "ups-raises-full-year-guidance-but-says-i-ffb543dc",
    title: "UPS raises full-year guidance but says it expects domestic third-quarter revenue to be flat",
    titleJa: "UPS、通期見通しを引き上げるも、国内第3四半期の売上高は横ばいと予想すると発表",
    summaryJa: "ユナイテッド・パーセル・サービスは火曜日、ウォール街の予想を上回る第2四半期決算を発表し、通年の見通しを引き上げたが、国内の第3四半期の売上高は横ばいと予想していると述べた。宅配大手の株価は序盤の取引で約８％下落した。",
    bodyOriginal: `United Parcel Service on Tuesday posted second-quarter earnings results that beat Wall Street expectations and raised its full-year outlook, but said it expects domestic third-quarter revenue to be flat.
Shares of the delivery giant fell roughly 8% in early trading.
Here's how the company performed in its second quarter, compared with what Wall Street was expecting, based on a survey of analysts by LSEG:
- Earnings per share: $1.76 adjusted vs. $1.66 expected
- Revenue: $22.8 billion vs. $21.81 billion expected
For the quarter ended June 30, UPS reported net income of $604 million, or 71 cents per share, down significantly from $1.28 billion, or $1.51 per share, in the year-ago period. Adjusting for one-time items, the company reported a profit of $1.5 billion, or $1.76 per share.
Tune in at 10:30 a.m. ET as UPS CEO Carol Tomé joins CNBC TV to discuss earnings. Watch in real time on CNBC+ or the CNBC Pro stream.
The company also raised its full-year 2026 guidance, now expecting consolidated revenue of $91.2 billion and adjusted diluted EPS of roughly $7.22 per share.
CEO Carol Tomé said on a call with analysts on Tuesday that it was the "fourth straight quarter of delivering results that exceeded our expectations."
"Going forward, our No. 1 priority remains moving the right packages and the right mix of volume through our network," she added.
Company executives said on the call that they expect the third quarter to see domestic average daily volume fall in the mid-single digits, due to a seasonal decline and the impact of the company gliding down its operations with Amazon. UPS also expects revenue to be flat year over year.
"If you ignore Amazon and the volume that we intentionally made available to the market, we actually grew our volume in the second quarter," Tomé said.
UPS is in the midst of a turnaround strategy aimed at positioning the company for long-term and sustainable growth. The company is focused on enhancing automation in its networks and tapping into growing markets, including healthcare logistics.
Tomé said on the call with analysts that healthcare generated more than $3 billion in revenue for the second consecutive quarter.
"We are the only carrier that provides end-to-end solutions for complex healthcare with our own assets, ensuring complete control, visibility and best-in-class service," she said.
For the second quarter, UPS reported a 6% rise in domestic revenue, driven by an increase in revenue per piece, and a 12.5% jump in international revenue. Supply chain solutions revenue rose 7.8%, in part due to growth in healthcare logistics.
The company added that it has achieved roughly $1.2 billion of program benefits from its network reconfiguration program, expecting to reach $3 billion by the end of the year.
On the call with analysts, Tomé said the company has successfully completed its glide-down with Amazon, eliminating about 2 million pieces per day of "lower-quality Amazon volume" and removing roughly $4.5 billion of related expenses so far.
"We now have a leaner, more automated, more agile network that will deliver operating leverage as volume grows," she said.
The company is also investing in radio-frequency identification and artificial intelligence to enhance its tracking capabilities, she added, which she said is "the most significant package visibility advancement in a decade."
Tomé said UPS is "seeing momentum" on the China to U.S. lane, which she said returned to year-over-year growth beginning in May.
"As we enter the second half of the year, we've got momentum, even in the face of external factors that could influence our results, like war and fuel price volatility," she said.`,
    bodyJa: `ユナイテッド・パーセル・サービスは火曜日、ウォール街の予想を上回る第2四半期決算を発表し、通年の見通しを引き上げたが、国内の第3四半期の売上高は横ばいと予想していると述べた。
宅配大手の株価は序盤の取引で約８％下落した。
LSEGによるアナリスト調査に基づいた、ウォール街の予想と比較した同社の第2四半期の業績は次のとおりだ。
- 1 株当たり利益: 調整後 1.76 ドル、予想 1.66 ドル
- 収益: 228 億ドル対予想 218 億 1,000 万ドル
UPSは6月30日に終了した四半期の純利益が6億400万ドル（1株あたり71セント）と、前年同期の12億8000万ドル（1株あたり1.51ドル）から大幅に減少したと報告した。一時項目を調整すると、同社は15億ドル（1株当たり1.76ドル）の利益を報告した。
UPS CEO のキャロル・トメ氏が CNBC TV に出演し、収益について語る様子を東部時間午前 10 時 30 分に放送しますので、ぜひお楽しみください。 CNBC+ または CNBC Pro ストリームでリアルタイムで視聴できます。
同社はまた、2026年通期の見通しを引き上げ、連結売上高は912億ドル、調整後の希薄化後EPSは1株当たり約7.22ドルになると予想している。
キャロル・トメ最高経営責任者（ＣＥＯ）は火曜日、アナリストとの電話会議で「４四半期連続で当社の予想を上回る業績を達成した」と述べた。
「今後も、当社のネットワークを通じて適切なパッケージと適切な量の組み合わせを移動させることが当社の最優先事項であり続ける」と彼女は付け加えた。
同社幹部らは電話会議で、季節的な減少とアマゾンとの事業縮小の影響により、第３・四半期の国内の１日平均取扱高は１桁台半ばに減少すると予想していると述べた。 UPS はまた、売上高が前年比横ばいになると予想しています。
「Amazon と私たちが意図的に市場に提供した量を無視すれば、実際には第 2 四半期に販売量が増加しました」とトメ氏は言いました。
UPS は、長期的かつ持続可能な成長を目指した再建戦略の真っ最中です。同社は、ネットワークの自動化を強化し、医療物流などの成長市場を開拓することに重点を置いています。
トメ氏はアナリストとの電話会議で、ヘルスケアが２四半期連続で３０億ドル以上の収益を生み出したと述べた。
「当社は、自社の資産を活用して複雑なヘルスケアに対するエンドツーエンドのソリューションを提供し、完全な制御、可視性、クラス最高のサービスを保証する唯一の通信事業者です」と彼女は述べた。
第 2 四半期について UPS は、1 個あたりの収益の増加により国内収益が 6% 増加し、海外収益が 12.5% 増加したと報告しました。サプライチェーンソリューションの収益は、ヘルスケア物流の成長などにより7.8%増加した。
同社は、ネットワーク再構成プログラムにより約12億ドルのプログラム利益を達成し、年末までに30億ドルに達すると予想していると付け加えた。
トメ氏はアナリストとの電話会議で、同社はアマゾンとのグライドダウンを成功裡に完了し、1日あたり約200万個の「低品質のアマゾンのボリューム」を排除し、これまでに約45億ドルの関連経費を削減したと述べた。
「私たちは現在、より無駄がなく、より自動化され、より機敏なネットワークを手に入れており、ボリュームの増加に応じて運用レバレッジを提供します」と彼女は言いました。
同社はまた、追跡機能を強化するために無線周波数識別と人工知能にも投資していると彼女は付け加え、これは「この10年間で最も重要な荷物の可視性の進歩」であると述べた。
トメ氏は、UPSの中国から米国への路線に「勢いが見られる」と述べ、5月から前年比の伸びに戻ったと述べた。
同氏は「今年下半期に入り、戦争や燃料価格の変動など当社の業績に影響を及ぼす可能性のある外部要因に直面しても、当社には勢いがある」と述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/28/ups-ups-q2-2026-earnings.html",
    publishedAt: "2026-07-28T14:06:28+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "horror-maestro-mike-flanagan-joins-henry-9de4ca27",
    title: "Horror maestro Mike Flanagan joins Henry Cavill on Warhammer adaptations",
    titleJa: "ホラーの巨匠マイク・フラナガンがヘンリー・カヴィルとウォーハンマーの映画化に参加",
    summaryJa: "ホラーの巨匠マイク・フラナガンがヘンリー・カヴィルとウォーハンマーの映画化に参加- 公開されました",
    bodyOriginal: `Horror maestro Mike Flanagan joins Henry Cavill on Warhammer adaptations
- Published
Games Workshop has revealed acclaimed horror director Mike Flanagan has been recruited to work on its upcoming Warhammer 40,000 adaptations.
Flanagan, who is known for his work on Netflix series such as Midnight Mass and The Haunting of Hill House, is due to begin work on scripts soon, the company said.
UK-based Games Workshop previously announced Warhammer superfan Henry Cavill would produce and star in TV and film projects based on the miniature tabletop wargame.
In its latest update, it confirmed the former Superman actor remains involved, after fans had expressed worries about the lack of new information on the collaboration.
The company did not reveal whether Flanagan would work on a film or series, but added that production company United Artists had also been brought on board.
Games Workshop, which struck a licensing deal with Amazon in 2024, said it had "almost completed" work on a new Warhammer-inspired episode of Secret Level, the Prime Video anthology series based on popular video games.
It also said work had begun on an full animated series based on its Space Marine Deathwatch characters.
The company said it had seen a drop in revenue from licensing video games, against a "challenging" backdrop for the industry, and two previous partners had ended their deals to make Warhammer-inspired titles.
Despite this, it has announced four new video game tie-ins this year, and said blockbuster 2024 release Space Marine 2 "continues to generate income long after the initial launch".
The news about Games Workshop's screen adaptations came in its annual financial report, external, where it announced record-high results.
It said pre-tax profit was up 4.9% to a record £275.7m for the fiscal year.
Last year, there had been concerns the company's models, which are manufactured at its headquarters in Nottingham, would be hit by US president Donald Trump's tariffs.
Chief executive Kevin Rountree said the company had paid about £12m in tariffs, but was able to reclaim £7.8m following a US Supreme Court ruling.
Following changes to US rules, Rountree said, the company expected to pay about £13m in tariffs in the next business year, and would continue trying to boost efficiency to save money.
"Unlike some companies, we do not consider tariffs as an exceptional item, but rather part of the uncertainty of operating globally," he said.
Rountree also doubled down on Games Workshop's stance on Gen AI.
He said the company does not use it in "our product design nor on the creation of our IP, this will protect the integrity and ownership of our IP".
However, he said it was "difficult for us to say we are not using AI outside of the Warhammer studio" because tools appear to be "automatically included in third party software whether we like it or not".
It was "something we are just going to have to potentially live with and monitor carefully," he added.
Related topics
- Published19 January 2025
- Published19 December 2023`,
    bodyJa: `ホラーの巨匠マイク・フラナガンがヘンリー・カヴィルとウォーハンマーの映画化に参加
- 公開されました
ゲームワークショップは、高く評価されているホラー監督のマイク・フラナガンが、今後の『ウォーハンマー 40,000』の適応に取り組むために採用されたことを明らかにしました。
『ミッドナイト・ミサ』や『ザ・ホーンティング・オブ・ヒルハウス』などのNetflixシリーズの仕事で知られるフラナガン氏は、間もなく脚本の作業に着手する予定だと同社は述べた。
英国に本拠を置くゲームズワークショップは以前、『ウォーハンマー』のスーパーファンであるヘンリー・カヴィルが、ミニチュア卓上ウォーゲームをベースにしたテレビや映画プロジェクトのプロデュースと主演を務めることを発表した。
コラボに関する新たな情報がないことについてファンが懸念を表明していたが、最新のアップデートでは元スーパーマン俳優が引き続き関与していることを認めた。
同社はフラナガン氏が映画やシリーズに取り組むかどうかは明らかにしなかったが、制作会社ユナイテッド・アーティスツも参加したと付け加えた。
2024年にアマゾンとライセンス契約を結んだゲームズワークショップは、人気ビデオゲームを題材にしたプライムビデオのアンソロジーシリーズ「シークレットレベル」のウォーハンマーにインスピレーションを得た新しいエピソードの制作が「ほぼ完了」したと発表した。
また、同社のスペースマリーン・デスウォッチのキャラクターをベースにした完全なアニメーションシリーズの制作が開始されたと述べた。
同社は、業界の「厳しい」背景を背景にビデオゲームのライセンス収入が減少しており、以前のパートナー2社がウォーハンマーにインスパイアされたタイトルを作る契約を終了したと述べた。
それにもかかわらず、同社は今年4つの新たなビデオゲームのタイアップを発表しており、2024年にリリースされる大ヒット作『スペースマリン2』は「最初の発売後もずっと収入を生み出し続ける」と述べた。
Games Workshop のスクリーン対応に関するニュースは、社外向けの年次財務報告書で発表され、そこで過去最高の業績を発表しました。
同会計年度の税引前利益は4.9％増の2億7570万ポンドとなり、過去最高を記録したと発表した。
昨年、ノッティンガムの本社で製造される同社のモデルがドナルド・トランプ米大統領の関税の影響を受けるのではないかとの懸念があった。
ケビン・ラウントリー最高経営責任者（CEO）は、同社は関税として約1200万ポンドを支払ったが、米国最高裁判所の判決を受けて780万ポンドを取り戻すことができたと述べた。
ラウンツリー氏は、米国の規則変更を受けて、同社は次の営業年度に約1,300万ポンドの関税を支払う予定であり、経費節減のため引き続き効率を高める努力を続けると述べた。
「一部の企業とは異なり、当社は関税を例外的な項目とは考えておらず、むしろ世界的な事業運営の不確実性の一部であると考えている」と同氏は述べた。
ラウンツリー氏はまた、Gen AIに対するGames Workshopの姿勢をさらに強調した。
同氏は、同社は「当社の製品設計や知的財産の作成にはこの情報を使用していません。これにより、当社の知的財産の完全性と所有権が保護されます」と述べた。
しかし同氏は、ツールは「好むと好まざるにかかわらず、サードパーティのソフトウェアに自動的に組み込まれる」ようであるため、「ウォーハンマースタジオ以外ではAIを使用していないと言うのは難しい」と述べた。
それは「私たちが潜在的に共存し、注意深く監視しなければならないものである」と彼は付け加えた。
関連トピック
- 2025 年 1 月 19 日公開
- 2023 年 12 月 19 日公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c62v8exggjeo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-28T13:59:24+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/ccfc/live/ea50eb00-8a7e-11f1-83c5-cf36fe4b083e.jpg",
    readTime: 4,
  },
  {
    id: "boeing-posts-wider-loss-than-expected-as-a9e77b08",
    title: "Boeing posts wider loss than expected as Air Force One costs weigh on results",
    titleJa: "エアフォースワンのコストが業績を圧迫し、ボーイングは予想を上回る損失を計上",
    summaryJa: "ボーイングは、航空機メーカーのエアフォースワン計画が長らく遅れていたことが業績を圧迫し、第２・四半期に予想を上回る損失を報告した。ボーイングは、次世代エアフォースワン航空機となる747型機2機を米政府に納入するプログラムで2億8000万ドルの損失を被り、同機への投資を強化したと発表した。最初の納入は依然として2028年になると予想していると述べた。",
    bodyOriginal: `Boeing reported a wider-than-expected loss for the second quarter as the aircraft manufacturer's long-delayed Air Force One program weighed down results.
Boeing took a $280 million loss on the program to deliver two 747s that will serve as the next-generation Air Force One aircraft to the U.S. government as it said it ramped up investment for that plane. It said it still expects the first delivery in 2028.
"While we're making progress on our development programs, you're never done until you're done," CEO Kelly Ortberg said in a note to staff.
Ortberg told CNBC's "Squawk on the Street" that the Air Force One program is through the design phase.
"It's very important to our customer that we deliver that airplane on time," he said. "We're gonna put more resources on to make sure that we do that."
President Donald Trump this month took his first flight on a luxury Boeing 747 gifted by Qatar that was meant to serve as the new Air Force One while Boeing works on the upcoming jets. That jet's security was reportedly called into question after he took a trip to Turkey and left the country on the old Air Force One.
Here's what the company reported for the second quarter compared with what Wall Street analysts surveyed by LSEG were expecting:
- Loss per share: 76 cents adjusted vs. a loss of 30 cents a share expected
- Revenue: $24.56 billion vs. $24.25 billion expected
The aircraft manufacturer, a top U.S. exporter, increased revenue 8% in the second quarter to $24.56 billion from a year earlier with gains across its businesses, including increased deliveries of commercial aircraft. Boeing has been ramping up production of its bestselling 737 Max airplanes to 47 a month, with further increases planned.
Boeing's commercial aircraft deliveries in the second quarter rose 14% from a year earlier to 171 planes from 150 a year earlier.
Free cash flow of $631 million came in well above the $177 million cash burn analysts expected, and compares with a $200 million burn in the second quarter a year ago.
Boeing reported a net loss of $428 million, or 67 cents a share, compared with a net loss last year of $612 million, or 92 cents a share a year earlier. Adjusting for one-time items, Boeing reported a loss of 76 cents a share.
"While two quarters don't make a year, if we work together and stay focused on safety, quality and on-time performance — we'll improve our competitiveness and set ourselves up for a big second half," Ortberg said in the staff note.
Upcoming milestones include the certification of other delayed aircraft programs. First will likely be the Boeing 737 Max 7, the smallest aircraft in the family of planes.
Boeing executives will hold a call with analysts at 10:30 a.m. ET, where they'll likely face questions about certification of the 737 Max 10 and the 777X, its new wide-body aircraft.`,
    bodyJa: `ボーイングは、航空機メーカーのエアフォースワン計画が長らく遅れていたことが業績を圧迫し、第２・四半期に予想を上回る損失を報告した。
ボーイングは、次世代エアフォースワン航空機となる747型機2機を米政府に納入するプログラムで2億8000万ドルの損失を被り、同機への投資を強化したと発表した。最初の納入は依然として2028年になると予想していると述べた。
CEOのケリー・オルトバーグ氏はスタッフに宛てたメモの中で、「開発プログラムは進んでいるが、終わるまでは決して終わりではない」と述べた。
オルトバーグ氏はCNBCの番組「Squawk on the Street」で、エア フォース ワン プログラムは設計段階を終えていると語った。
「私たちが飛行機を時間通りに配達することは、顧客にとって非常に重要です」と彼は言いました。 「それを確実に実現するために、私たちはより多くのリソースを投入するつもりです。」
ドナルド・トランプ大統領は今月、ボーイング社が次期ジェット機の開発に取り組む間、新型エアフォース・ワンとして使用される予定だったカタールから贈られた高級ボーイング747で初飛行した。同氏が古いエアフォース・ワンでトルコに旅行し出国した後、そのジェット機の安全性が疑問視されたと伝えられている。
以下は、同社が第2四半期に報告した内容と、LSEGが調査したウォール街アナリストの予想を比較したものである。
- 1 株あたりの損失: 調整後 76 セント、予想される 1 株あたり 30 セントの損失
- 収益: 245.6億ドル対予想242.5億ドル
米国のトップ輸出企業である航空機メーカーである同社は、民間航空機の納入増加など事業全体で利益を上げ、第2四半期の売上高は前年同期比8％増の245億6000万ドルとなった。ボーイングはベストセラーの737 Max航空機の生産を月産47機に増やしており、さらなる増加も計画している。
第２・四半期のボーイングの民間航空機納入機は１７１機と、前年同期の１５０機から１４％増加した。
フリーキャッシュフローは6億3,100万ドルで、アナリスト予想の1億7,700万ドルを大きく上回り、前年同期の2億ドルのキャッシュバーンと比較した。
ボーイングは、昨年の純損失が6億1,200万ドル（1株あたり92セント）だったのに対し、4億2,800万ドル（1株あたり67セント）の純損失を報告した。一時項目を調整すると、ボーイングは 1 株あたり 76 セントの損失を報告しました。
「2四半期では1年は成り立たないが、私たちが協力して安全、品質、納期厳守に集中し続ければ、競争力が向上し、大きな下半期に向けて準備が整うだろう」とオルトバーグ氏はスタッフノートで述べた。
今後のマイルストーンには、遅延している他の航空機プログラムの認定も含まれます。最初に登場するのは、このシリーズの中で最小の航空機であるボーイング 737 Max 7 になる可能性が高いです。
ボーイングの幹部らは東部時間午前10時30分にアナリストと電話会談を行う予定で、737 Max 10と同社の新型ワイドボディ機777Xの認証について質問される可能性が高い。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/28/boeing-ba-2q-2026-earnings.html",
    publishedAt: "2026-07-28T13:56:52+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "apple-plans-to-lease-iphones-for-17-99-a-747d9729",
    title: "Apple plans to lease iPhones for $17.99 a month through partnership with Klarna",
    titleJa: "AppleはKlarnaとの提携を通じてiPhoneを月額17.99ドルでリースする予定",
    summaryJa: "米国のアップル顧客はまもなく月額17.99ドルからの価格で最長2年間iPhoneをリースできるようになる、と同社は火曜日に発表した。Upgradeと呼ばれるこのプログラムは、今すぐ購入して後払いのローンを提供するKlarnaとの提携で、Appleの実店舗とオンラインストアで提供される。ソフト信用調査に合格すると、顧客には iPhone の 1 年または 2 年のリースが提供されます。 Apple Watchにも同様のオプションが用意されるほか、MacやiPadには2年または3年のリースが用意される予定だ。",
    bodyOriginal: `Apple customers in the U.S. will soon be able to lease an iPhone for up to two years at a price starting at $17.99 per month, the company announced on Tuesday.
The program, called Upgrade, is a partnership with Klarna, a provider of buy now, pay later loans, that will be offered at Apple's physical retail stores as well as its online store. After passing a soft credit check, customers will be offered a one- or two-year lease on an iPhone. There will be a similar option for an Apple Watch, or a two- or three-year lease available for Macs and iPads.
The announcement comes a month after Apple, citing the global memory crunch, raised starting iPad and Mac prices by at least $100, with some models increasing by more than $1,000. Analysts expect iPhone price hikes this year and say that leasing lets Apple shift the focus from a higher up-front sticker price to a lower monthly payment.
"Most of Apple's consumers, especially in the U.S. and other developed markets, are buying devices on installment plans or trade-ins, so we can expect to see much more aggressive offers," Nabila Popal, senior research director at IDC, told CNBC in an interview after the company signaled price increases in June.
Apple is looking for new ways to offer iPhones through installment payments, a strategy that investors have long thought can help smooth the seasonality of the business and reduce the company's reliance on hit device cycles for growth. The new program could also encourage customers to replace their devices sooner, with the average iPhone replacement cycle having stretched to nearly four years, according to Bernstein estimates.
As a lease, devices will have to be returned at the end of 24 months. Users can also purchase their phone at that time with an additional payment, or upgrade to a new device. No security deposit is required and, while Klarna won't charge late fees, it will terminate leases after three months of missed payments.
Prices will vary dramatically, and customers will have to pay more for premium devices. An unlocked iPhone 17 Pro, for example, will cost $31.99 a month for two years, or $45.99 for one year. Some of the company's entry-level devices, such as the iPhone 16 and MacBook Neo, aren't included in the program.
Since the announced hikes in June, analysts have been speculating about higher iPhone prices. Morgan Stanley estimates Apple may need to raise the price of the iPhone 18 Pro by roughly $200 to preserve its gross margin. According to TechInsights, higher memory and other component costs could add as much as $300 to an iPhone's bill of materials, based on a component-level teardown.
Meanwhile, Apple is pushing its product mix further upmarket. Analysts expect a foldable phone to debut alongside the iPhone 18 Pro lineup in September, with some estimates putting its price at around $2,500.
For prospective customers, the new offering with Klarna offers a much cheaper leasing option than what has been available. Through the iPhone Upgrade Program, which includes the AppleCare warranty, users currently pay more than $42 per month in 24 installments, with financing from Citizens Bank. Apple said on Tuesday it discontinued the iPhone Upgrade Program in the U.S. and would transition customers to Apple Upgrade.
With the new plan, Apple will be competing more directly with carriers, which have traditionally used device financing and trade-in subsidies to attract customers and lock them into multiyear wireless plans. AT&T, Verizon and T-Mobile all offer installment plans.
Apple also offers zero-interest financing for its products through a program called Apple Card Monthly Installments. And for users of Apple Pay, short-term loans are currently available from Klarna or rival Affirm.
Apple is scheduled to report third-quarter earnings Thursday. It will be CEO Tim Cook's final earnings report before he transitions to executive chairman of the board.
WATCH: Apple's China win strengthens the case for a $5 trillion valuation`,
    bodyJa: `米国のアップル顧客はまもなく月額17.99ドルからの価格で最長2年間iPhoneをリースできるようになる、と同社は火曜日に発表した。
Upgradeと呼ばれるこのプログラムは、今すぐ購入して後払いのローンを提供するKlarnaとの提携で、Appleの実店舗とオンラインストアで提供される。ソフト信用調査に合格すると、顧客には iPhone の 1 年または 2 年のリースが提供されます。 Apple Watchにも同様のオプションが用意されるほか、MacやiPadには2年または3年のリースが用意される予定だ。
この発表は、Appleが世界的なメモリ不足を理由に、iPadとMacの初期価格を少なくとも100ドル値上げし、一部のモデルでは1,000ドル以上値上げしてから1か月後に行われた。アナリストらはiPhoneの価格が今年値上げされると予想しており、リースによりAppleは高額な前払いステッカー価格から、より低い月々の支払額に焦点を移すことができると述べている。
IDCのシニア・リサーチ・ディレクター、ナビラ・ポパール氏は、同社が6月に値上げを示唆した後のインタビューでCNBCのインタビューで、「特に米国や他の先進国市場におけるAppleの消費者のほとんどは、割賦プランや下取りでデバイスを購入しているため、より積極的なオファーが期待できる」と語った。
Appleは分割払いでiPhoneを提供する新たな方法を模索しているが、この戦略は事業の季節性を平滑化し、同社の成長のためのヒットデバイスサイクルへの依存を減らすのに役立つと投資家は長い間考えていた。バーンスタイン氏の推定によると、iPhoneの平均買い替えサイクルは4年近くに伸びており、新しいプログラムは顧客にデバイスの早期買い替えを促す可能性もある。
リースの場合、デバイスは 24 か月の終了時に返却する必要があります。ユーザーは、その時点で追加の支払いを行って携帯電話を購入したり、新しいデバイスにアップグレードしたりすることもできます。保証金は必要なく、Klarna は延滞料金を請求しませんが、3 か月の支払いが滞るとリースを終了します。
価格は大幅に変化し、顧客はプレミアムデバイスに対してより多くの料金を支払わなければなりません。たとえば、ロックが解除された iPhone 17 Pro の料金は、2 年間で月額 31.99 ドル、1 年間で 45.99 ドルになります。 iPhone 16やMacBook Neoなど、同社のエントリーレベルのデバイスの一部はこのプログラムには含まれていない。
6月に値上げが発表されて以来、アナリストらはiPhoneの価格上昇を推測してきた。モルガン・スタンレーは、アップルが粗利を維持するにはiPhone 18 Proの価格を約200ドル値上げする必要があるかもしれないと推定している。 TechInsights によると、コンポーネントレベルの分解に基づくと、メモリやその他のコンポーネントのコストが高くなると、iPhone の部品表が最大 300 ドル増加する可能性があります。
一方、Appleは製品構成をさらに高級市場に押し上げている。アナリストらは9月にiPhone 18 Proのラインナップとともに折りたたみ式携帯電話が登場すると予想しており、価格は約2500ドルとの試算もある。
Klarna の新しいサービスは、見込み顧客に対して、これまでよりもはるかに安価なリース オプションを提供します。 AppleCare 保証を含む iPhone アップグレード プログラムを通じて、ユーザーは現在、Citizens Bank からの融資を受けて、月額 42 ドル以上を 24 回の分割払いで支払っています。 Appleは火曜日、米国でのiPhoneアップグレードプログラムを中止し、顧客をApple Upgradeに移行すると発表した。
この新プランにより、アップルは通信事業者とより直接的に競争することになる。通信事業者は従来、端末融資や下取り補助金を利用して顧客を引きつけ、複数年の無線プランに囲い込んできた。 AT&T、Verizon、T-Mobile はすべて分割払いプランを提供しています。
Apple は、Apple Card Monthly Localments と呼ばれるプログラムを通じて、自社製品に対する無金利融資も提供しています。また、Apple Pay ユーザー向けには、現在、Klarna またはライバルの Affirm から短期ローンが利用可能です。
Appleは木曜日に第3四半期決算を発表する予定だ。これはティム・クック最高経営責任者（CEO）が取締役会長に就任する前の最後の決算報告となる。
注目：Appleの中国での勝利は評価額5兆ドルの根拠を強める`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/28/apple-plans-to-lease-iphones-for-17point99-a-month-through-klarna-deal.html",
    publishedAt: "2026-07-28T12:38:50+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 5,
  },
  {
    id: "spacex-stock-purchasing-by-congress-memb-fc567997",
    title: "SpaceX stock-purchasing by Congress members fuels conflict concerns",
    titleJa: "議会議員によるスペースX株購入で紛争懸念が高まる",
    summaryJa: "スペースXの大ヒット公開デ​​ビューから3日後、ウィリアム・ティモンズ下院議員はロケット会社の株式を10万ドルも購入した。サウスカロライナ州の共和党議員は、軍事と外交問題に関する下院監視委員会の委員長を務めており、イーロン・マスクの新たな公共帝国の中心となる2つの部門である人工知能を扱う金融サービス小委員会のメンバーでもある。",
    bodyOriginal: `Three days after SpaceX’s blockbuster public debut, Rep. William Timmons bought as much as $100,000 of the rocket company's stock.
The South Carolina Republican chairs a House oversight panel on military and foreign affairs and sits on a financial services subcommittee covering artificial intelligence — two sectors central to Elon Musk's newly public empire.
He was not the only member of Congress to buy in.
Within six days of the June 12 initial public offering, at least six House members or their immediate families purchased a total of between roughly $83,000 and $245,000 in SpaceX shares, according to a CNBC tally of the amounts reported in House financial disclosures, where transactions are reported in ranges. Joining Timmons were Reps. John McGuire, R-Va., Dan Meuser, R-Pa., Gil Cisneros, D-Calif., John James, R-Mich., and Jared Moskowitz, D-Fla.
That total reflects the combined minimum and maximum values reported for the six transactions: $50,001 to $100,000 for Timmons; $1,001 to $15,000 for McGuire, Moskowitz and Cisneros; and $15,001 to $50,000 for James and Meuser.
That count could rise. House members must report stock trades over $1,000 within 30 days of learning of them and no later than 45 days after the transaction. Monday was the deadline for reporting IPO-day purchases; trades in the following six days are due by Aug. 2.
Five of those members serve on committees overseeing aspects of SpaceX's business — including defense, satellite communications and AI — and securities markets. The company relies heavily on federal approvals and receives billions in government contracts — spending directed by the very lawmakers buying its stock.
There is no evidence the lawmakers traded on nonpublic information, violated congressional trading rules or used their offices to benefit SpaceX. The trades are legal; three were made by a spouse or child, and some lawmakers say outside advisors manage their portfolios. While there have been efforts to limit the practice, Congress members are allowed to own and buy individual stocks provided they disclose their purchases and holdings.
Still, an ethics expert and even some members of Congress say the holdings can create the appearance that lawmakers' official duties overlap with their households' financial interests. And they could be a sign of things to come, with other highly anticipated IPOs such as those of OpenAI and Anthropic on the horizon.
"Members are making decisions, buying and selling as if they're on Wall Street. And they're not doing it in the interest of their constituents," Rep. Pramila Jayapal, D-Wash., told CNBC when asked about the SpaceX trades. "They're doing it in the interest of their pockets."
Kedric Payne, ethics director at the nonprofit, nonpartisan Campaign Legal Center, said the SpaceX purchases show congressional stock trading opens the door to ethical conflicts that are "much bigger than insider trading."
"The potential conflict of interest exists when the committee assignment may overlap with this company as a government contractor," Payne said.
The congressional traders
Besides Timmons, Cisneros is the only other member CNBC identified who bought the stock in his own name. He purchased between $1,001 and $15,000 in shares on June 18, according to a disclosure he filed with the U.S. House on July 2 that also showed dozens of other share acquisitions.
Cisneros sits on the House Armed Services Committee, which oversees Pentagon and Space Force contracts.
In a statement to CNBC earlier this month, Cisneros said he does not manage the "day-to-day trading" of his investment portfolio. His office did not respond to a subsequent request for comment on potential conflicts of interest.
Other purchases identified by CNBC involved spouses or dependent children, including the wives of Reps. McGuire and James. Congress members are required to report stock holdings and purchases by their spouses and dependent children as well as themselves.
James sits on the House Energy and Commerce Committee, which plays a major regulatory role over the energy grid and the development of AI data centers. SpaceXAI, a SpaceX subsidiary, has been a major player in building data centers nationwide.
According to a financial disclosure filed this month, James' wife purchased between $15,001 and $50,000 in SpaceX stock on June 12.
"The James children are excited about space exploration and Liz purchased stock for them through a brokerage firm, like other members of the public were welcome to do," a spokesperson for James said in an emailed statement.
McGuire, who sits on the House Armed Services Committee and subpanels of the House Oversight and Government Reform Committee dealing with military and foreign affairs and financial services, disclosed that his wife invested between $1,001 and $15,000 in the company on June 15.
Meuser, meanwhile, sits on the House Financial Services Committee, with jurisdiction over securities and exchanges. A dependent child of Meuser's bought between $15,001 and $50,000 of SpaceX stock on June 15.
Spokespeople for Timmons, McGuire and Meuser did not respond to a request for comment.
Payne said the fact that a spouse or dependent child made the purchase in some instances does not alleviate potential concerns about conflicts of interest.
"The core principle of financial disclosure forms since the very beginning, decades ago, is that the financial interest of the spouse and a dependent child are exactly the same as the financial interest of the member," Payne said. "That’s because of the close proximity and the control in common ownership [of the asset] that the member can have with a spouse and dependent child."
Moskowitz, who purchased the stock on June 12, is a member of the House judiciary and foreign affairs committees, neither of which has direct authority over SpaceX. But members of Congress, regardless of their committee assignments, regularly vote on legislation, such as defense budgets, that could benefit the company and its subsidiaries.
While Moskowitz is not on a committee of jurisdiction, Payne said the trade could still draw concern from voters worried about conflicts of interest.
"The public isn't going to parse committee portfolios or the specifics of SpaceX's business," he said. "Voters likely see a company that is a government contractor and they know Congress can influence contracts and act on confidential market-moving information. The standard has never been whether a conflict can be proven, but whether a reasonable perception of a conflict exists."
A spokesperson for Moskowitz did not respond to a request for comment.
The six IPO buyers join another prominent lawmaker whose family already had exposure to SpaceX.
Rep. Lisa McClain, R-Mich., the No. 4 House Republican, disclosed in January that her husband had purchased between $100,001 and $250,000 in privately held xAI stock on Dec. 15. The investment became tied to SpaceX in February, when Musk folded xAI into the rocket company.
There is no evidence McClain or her husband traded on nonpublic information. A spokesperson for the House Republican Conference said in June that McClain's investments were a matter of public record and had been made in line with House rules and applicable laws.
SpaceX's growing political reach
According to SpaceX's IPO prospectus, federal agencies generated about one-fifth of the company's 2025 revenue. The company also described itself as the government's primary launch provider, launching satellites, cargo and crews. The prospectus disclosed contracts with NASA, the Pentagon, and intelligence agencies, warning investors that shifts in federal funding could materially affect its business.
SpaceX did not respond to multiple requests for comment.
Lawmakers bought in during a volatile first month. After pricing at $135 and opening at $150, the stock hit a June closing high of $201.80 before falling to $113.46 at Monday's close — about 16% below the IPO price and nearly 44% below the peak.
Because congressional disclosures report value ranges rather than exact share counts or purchase prices, it is impossible to calculate lawmakers' precise gains or losses.
"We won't know the full extent to which members of Congress did or did not profit until years from now," said Dan Weiskopf of Tidal Financial, who manages ETFs based on lawmakers' trades. "Members may hold the stock and ride it out, but it becomes a gray area when they can influence its value."
SpaceX's clout on Capitol Hill extends to its employee-funded PAC, which poured $1.9 million into federal races from January 2025 through June 2026, according to a CNBC analysis of Federal Election Commission records.
In June alone, the PAC gave $127,500, with 94% going to Republican candidates or GOP-aligned committees, according to the PAC's monthly disclosures. This marks a sharp shift toward the GOP compared with the 2024 election cycle, when contributions were more evenly split.
The PAC is funded by SpaceX employees and executives, not the company's treasury, and is separate from Musk's personal political operation.
Congress considers limits
The SpaceX disclosures coincide with House passage of legislation restricting stock trading by lawmakers and their families.
Sponsored by House Administration Chairman Bryan Steil, R-Wisc., the Stop Insider Trading Act would ban new purchases of individual stocks. However, it would allow members to retain existing holdings, reinvest dividends and sell shares with advance public notice. The House approved the measure on a 232-198 vote on Wednesday and it now moves to the Senate, where its fate is uncertain.
Supporters frame the bill as a pragmatic first step after years of legislative gridlock, arguing it prevents lawmakers from day-trading without forcing a fire sale of preexisting assets.
Democratic critics argued the bill would preserve the exact conflicts highlighted by the SpaceX trades. By allowing lawmakers to hold and eventually sell their shares, they say, members can still craft policy that could benefit their portfolios.
"I'll get behind a stock-trading ban, but that's not what he's proposing," Rep. Joe Morelle, D-N.Y., the ranking Democrat on the House Administration Committee, told CNBC. The bill is "so filled with holes, it would make Swiss cheese blush."`,
    bodyJa: `スペースXの大ヒット公開デ​​ビューから3日後、ウィリアム・ティモンズ下院議員はロケット会社の株式を10万ドルも購入した。
サウスカロライナ州の共和党議員は、軍事と外交問題に関する下院監視委員会の委員長を務めており、イーロン・マスクの新たな公共帝国の中心となる2つの部門である人工知能を扱う金融サービス小委員会のメンバーでもある。
賛同した議員は彼だけではなかった。
下院財務情報開示で報告された金額のCNBCの集計によると、6月12日の新規株式公開から6日以内に、少なくとも6人の下院議員またはその近親者がスペースX株を総額約8万3000ドルから24万5000ドル購入した（取引は範囲内で報告されている）。ティモンズ議員に加わったのは、ジョン・マクガイア議員（バージニア州）、ダン・ミューザー議員（共和党、ペンシルバニア州）、ギル・シスネロス議員（カリフォルニア州）、ジョン・ジェームズ議員（共和党、ミシガン州）、ジャレッド・モスコウィッツ議員（フロリダ州）だった。
この合計額は、6 件の取引について報告された最小値と最大値の合計を反映しています。ティモンズの場合は 50,001 ドルから 100,000 ドルです。マクガイア、モスコウィッツ、シスネロスは1,001ドルから15,000ドル。ジェームズとミューザーは15,001ドルから50,000ドル。
その数はさらに増える可能性がある。下院議員は1,000ドルを超える株式取引を知ってから30日以内、取引後45日以内に報告しなければならない。月曜日はIPO当日の購入報告の締め切りだった。今後６日間の取引は８月２日までに行われる。
これらのメンバーのうち5人は、スペースXの事業（防衛、衛星通信、AIなど）と証券市場の側面を監督する委員会の委員を務めている。同社は連邦政府の承認に大きく依存しており、数十億ドル規模の政府契約を受け取っているが、その支出は同社株を購入する議員そのものが指示しているものだ。
議員らが非公開情報を取引したり、議会取引規則に違反したり、スペースXに利益をもたらすために事務所を利用したりしたという証拠はない。取引は合法です。うち3件は配偶者や子供が作成したもので、一部の議員は外部アドバイザーがポートフォリオを管理していると主張している。この慣行を制限する取り組みが行われてきたが、議会議員は購入と保有を開示することを条件に、個別の株式を所有および購入することが認められている。
それでも、倫理専門家や一部の議員らは、保有資産が議員の公務と家計の経済的利益が重なっているかのような印象を与える可能性があると述べている。そして、OpenAI や Anthropic のような他の非常に期待されている IPO が目前に迫っていることから、それらは今後の出来事の兆しである可能性があります。
ワシントン州民主党のプラミラ・ジャヤパル下院議員は、スペースXとの取引について質問された際、CNBCに対し、「加盟国はあたかもウォール街にいるかのように意思決定をし、売買している。そして彼らは有権者の利益のためにそれを行っているわけではない」と語った。 「彼らは私腹を肥やすためにやっているのです。」
超党派の非営利団体キャンペーン・リーガル・センターの倫理ディレクター、ケドリック・ペイン氏は、スペースX社の買収は、議会株取引が「インサイダー取引よりもはるかに大きな」倫理的対立への扉を開いたことを示していると述べた。
「委員会の任務が政府請負業者である同社と重複する可能性がある場合、潜在的な利益相反が存在する」とペイン氏は述べた。
議会のトレーダーたち
シスネロス氏は、ティモンズ氏のほかに、CNBCが確認した唯一のメンバーで、自分の名前で株を購入した人物である。同氏が7月2日に米下院に提出した開示書によると、同氏は6月18日に1001ドルから1万5000ドルの株式を購入しており、他にも数十件の株式取得があったことが示されている。
シスネロス氏は国防総省と宇宙軍の契約を監督する下院軍事委員会の委員を務めている。
シスネロス氏は今月初めのCNBCへの声明で、自身の投資ポートフォリオの「日々の取引」は管理していないと述べた。同氏の事務所はその後、利益相反の可能性についてのコメント要請に応じなかった。
CNBCが特定した他の購入には、マクガイア下院議員とジェームズ下院議員の妻を含む配偶者や扶養している子供が関与していた。議会議員は自分自身だけでなく、配偶者や扶養している子供による株式の保有や購入についても報告する必要がある。
ジェームズ氏は下院エネルギー・商業委員会の委員を務めており、エネルギー網とAIデータセンターの開発に関して規制上の主要な役割を果たしている。 SpaceX の子会社である SpaceXAI は、全国のデータセンター建設の主要企業です。
今月提出された財務情報開示によると、ジェームズ氏の妻は6月12日にスペースX株を1万5001ドルから5万ドルで購入した。
ジェームズさんの広報担当者は電子メールでの声明で、「ジェームズさんの子供たちは宇宙探査に興奮しており、リズさんは他の一般人が歓迎するのと同じように、証券会社を通じて彼らのために株を購入した」と述べた。
マクガイア氏は下院軍事委員会のほか、軍事・外交・金融サービスを担当する下院監視・政府改革委員会の分科委員を務めており、6月15日に妻が同社に1001ドルから1万5000ドルを投資したことを明らかにした。
一方、ミューザー氏は証券と取引所を管轄する下院金融サービス委員会の委員を務めている。ミューザーさんの扶養家族の子供は、6月15日にスペースX株を1万5001ドルから5万ドルで購入した。
ティモンズ氏、マクガイア氏、ミューザー氏の広報担当者はコメントの要請に応じなかった。
ペイン氏は、場合によっては配偶者や扶養している子供が購入したという事実は、利益相反に関する潜在的な懸念を軽減するものではないと述べた。
「数十年前の当初からの財務開示フォームの中核原則は、配偶者と扶養子の経済的利益が会員の経済的利益とまったく同じであるということだ」とペイン氏は述べた。 「それは、メンバーが配偶者や扶養している子供と非常に近い距離にあり、（資産の）共有所有権を管理できるためです。」
6月12日に株式を購入したモスコウィッツ氏は下院司法委員会と外交委員会の委員を務めているが、どちらの委員会もスペースXに対する直接の権限はない。しかし、議会議員は、委員会の任務に関係なく、国防予算など、同社とその子会社に利益をもたらす可能性のある法案に定期的に投票している。
モスコウィッツ氏は管轄委員会の委員ではないが、ペイン氏は、この取引は依然として利益相反を懸念する有権者の懸念を招く可能性があると述べた。
同氏は、「国民は委員会のポートフォリオやスペースXの事業の詳細を解析するつもりはない」と述べた。 「有権者は政府の請負業者である企業を目にする可能性が高く、議会が契約に影響を与え、市場を動かす機密情報に基づいて行動できることを知っている。基準はこれまで紛争が証明できるかどうかではなく、紛争に対する合理的な認識が存在するかどうかだった。」
モスコウィッツ氏の広報担当者はコメントの要請に応じなかった。
IPO購入者6名には、家族がすでにスペースX社に関与していた別の著名な議員も含まれる。
下院共和党第4位のリサ・マクレーン下院議員（共和党、ミシガン州）は1月、夫が12月15日にxAIの未公開株を10万1ドルから25万ドル購入したことを明らかにした。マスク氏がxAIをロケット会社に合併した2月に、この投資はスペースXと結びついた。
マクレーンまたは彼女の夫が非公開情報を利用して取引したという証拠はない。下院共和党会議の報道官は６月、マクレーン氏の投資は公記録であり、下院規則と適用法に従って行われたと述べた。
スペースXの政治的影響力の拡大
スペースXのIPO目論見書によると、2025年の同社収益の約5分の1は連邦政府機関が生み出した。同社はまた、自らを政府の主要な打ち上げプロバイダーとして、衛星、貨物、乗組員を打ち上げていると説明した。目論見書ではNASA、国防総省、諜報機関との契約を明らかにし、連邦資金の変化が同社の事業に重大な影響を与える可能性があると投資家に警告した。
SpaceXは複数のコメント要請に応じなかった。
不安定な最初の月に議員らは賛同した。株価は135ドル、初値は150ドルだったが、6月終値では201.80ドルの高値を付けたが、月曜終値では113.46ドルまで下落した。これはIPO価格を約16％下回り、最高値を約44％下回っている。
議会開示では正確な株数や買収価格ではなく価値の範囲が報告されているため、議員の正確な損得を計算することは不可能である。
議員の取引に基づいてＥＴＦを運用するタイダル・ファイナンシャルのダン・ワイスコフ氏は、「議員がどの程度利益を得たか、あるいは利益を出さなかったのか、その全容は何年も経ってから分からないだろう」と述べた。 「会員は株を保有してそれを乗り切ることはできるが、その価値に影響を与えることができるかどうかはグレーゾーンになる。」
連邦選挙委員会の記録をCNBCが分析したところによると、国会議事堂に対するスペースXの影響力は従業員が資金提供するPACにまで及び、PACは2025年1月から2026年6月まで連邦選挙に190万ドルを注ぎ込んだ。
PACの月例開示情報によると、PACは6月だけで12万7500ドルを寄付し、その94％が共和党候補者または共和党と連携した委員会に寄付された。これは、寄付金がより均等に分割されていた2024年の選挙サイクルと比較して、共和党への急激なシフトを示している。
PACはスペースX社の財務ではなく従業員と幹部によって資金提供されており、マスク氏の個人的な政治活動とは別のものである。
議会は限界を検討
スペースX社の情報開示は、議員とその家族による株式取引を制限する法案の下院通過と同時に行われた。
ブライアン・スティル下院行政委員長（共和党、ウィスコンシン州）の提唱による「インサイダー取引停止法」は、個別株の新規購入を禁止するものである。ただし、会員は既存の保有株を保持し、配当金を再投資し、事前の公知で株式を売却することができるようになる。下院は水曜日にこの法案を232対198の投票で承認し、現在上院に移されているが、その運命は不透明である。
支持者らはこの法案を長年の立法行き詰まりを経た現実的な第一歩と位置づけ、議員らに既存資産の投げ売りを強いることなくデイトレードを阻止できると主張している。
民主党の批判者らは、この法案はスペースX社との取引で浮き彫りになったまさに矛盾を温存するものだと主張した。議員が自社株を保有し、最終的には売却することを認めることで、議員は自身のポートフォリオに利益をもたらす可能性のある政策を策定できると彼らは言う。
下院管理委員会の民主党有力議員であるジョー・モレル下院議員（ニューヨーク州民主党）はCNBCに対し、「私は株取引禁止を支持するつもりだが、それは彼が提案していることではない」と語った。この法案は「スイスチーズが赤面してしまうほど穴だらけだ」。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/28/spacex-stock-congress-lawmakers-ipo-conflict-of-interest.html",
    publishedAt: "2026-07-28T10:30:01+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "chip-stocks-slide-in-us-and-asia-as-ai-j-64fafd4d",
    title: "Chip stocks slide in US and Asia as AI jitters rattle investors",
    titleJa: "AIの不安で投資家が動揺し、米国とアジアでチップ株が下落",
    summaryJa: "AIの不安で投資家が動揺し、米国とアジアでチップ株が下落- 公開されました",
    bodyOriginal: `Chip stocks slide in US and Asia as AI jitters rattle investors
- Published
Shares in major chip firms have fallen sharply in the US and Asia as a sell-off in artificial intelligence-related stocks deepened.
Trading on South Korea's benchmark Kospi index was paused temporarily on Tuesday morning after sliding by 8%. It fell further after the 20-minute halt was lifted, closing 10.8% lower.
The slump was led by technology firms, with Samsung Electronics and SK Hynix both falling by more than 13%.
It comes after AI chip giant Nvidia fell by 5% in New York on Monday, meaning it lost its position as the world's most valuable listed company to Apple.
The tech-heavy Kospi has been halted multiple times so far this year under a stock market mechanism known as a circuit breaker, which is designed to calm panic selling.
The index had more than doubled from the start of the year to mid-June but has since lost around a third of its value.
In recent months stock market trading has been particularly volatile in South Korea as it has attracted large numbers of retail investors.
On Monday, US-listed shares in SK Hynix fell by 7.5% to well below the $149 (£112.11) offer price when it made a record-breaking debut on the Nasdaq on 9 July.
Japan's Nikkei 225, which is also dominated by tech companies, closed almost 4% lower.
Nvidia shares fell on Monday after the Wall Street Journal reported that it is in talks to provide around $250bn for OpenAI as part of a massive data-centre project.
The BBC has contacted Nvidia and OpenAI for comment.
The decline allowed Apple to overtake Nvidia as the world's most valuable company after the iPhone maker rose by about 25% this year.
Jun Bei Liu, the founder of investment firm Ten Cap, told the BBC that there are concerns about the amount of money being poured into AI development as well as increasing competition from China.
Against that backdrop, investors are "taking some profit off the table" but are likely to reinvest in these stocks after the US holiday season, she said.
Shares in China's biggest memory chip maker, ChangXin Memory Technologies (CXMT), soared by nearly 470% as they made their debut in Shanghai on Monday.
The company said said it plans to use most of the proceeds from the initial public offering (IPO) to boost production and carry out more research and development.
CXMT manufactures dynamic random-access memory (Dram) chips that power AI data centres, mobile phones, PCs, tablets and other devices.`,
    bodyJa: `AIの不安で投資家が動揺し、米国とアジアでチップ株が下落
- 公開されました
人工知能関連株の売りが深まる中、米国やアジアでは大手半導体企業の株価が急落した。
韓国の指標コスピ指数は８％下落した後、火曜朝に取引が一時停止された。 ２０分間の取引停止解除後はさらに下落し、１０．８％安で取引を終えた。
落ち込みを主導したのはテクノロジー企業で、サムスン電子とSKハイニックスはともに13％以上下落した。
これは、AIチップ大手エヌビディアが月曜ニューヨーク市場で5％下落し、世界で最も価値のある上場企業としての地位をアップルに奪われたことを受けてのことだった。
ハイテク株を中心としたコスピは、パニック売りを鎮めることを目的としたサーキットブレーカーと呼ばれる株式市場の仕組みにより、今年これまでに何度も停止されている。
同指数は年初から6月中旬までに2倍以上上昇したが、その後はその値の約3分の1を失った。
韓国では多くの個人投資家が集まっているため、ここ数カ月の株式市場取引は特に不安定だった。
月曜日、SKハイニックスの米国上場株は7.5％下落し、7月9日にナスダックに記録的な上場を果たしたときの売り出し価格149ドル（112.11ポンド）を大幅に下回った。
同じくハイテク企業が多数を占める日本の日経平均株価も4％近く下落して取引を終えた。
ウォール・ストリート・ジャーナルが大規模データセンタープロジェクトの一環としてOpenAIに約2500億ドルを提供する交渉を行っていると報じたことを受け、月曜日のNVIDIA株は下落した。
BBCはNvidiaとOpenAIにコメントを求めた。
iPhoneメーカーが今年約25％上昇した後、Appleはこの下落により、世界で最も価値のある企業としてNvidiaを追い越すことができた。
投資会社テン・キャップの創設者ジュン・ベイ・リュー氏はBBCに対し、AI開発に投じられる資金の多さと中国との競争激化に懸念があると語った。
こうした状況を背景に、投資家は「利益を一部取り除いている」ものの、米国のホリデーシーズン後にはこれらの銘柄に再投資する可能性が高いと同氏は述べた。
中国最大のメモリチップメーカー、長信記憶科技（CXMT）の株価は、月曜日に上海でデビューしたため、470％近く急騰した。
同社は新規株式公開（ＩＰＯ）で得た収益の大半を生産拡大とさらなる研究開発の実施に充てる計画だと述べた。
CXMT は、AI データセンター、携帯電話、PC、タブレット、その他のデバイスに電力を供給するダイナミック ランダム アクセス メモリ (Dram) チップを製造しています。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cly8zng43npo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-28T07:33:12+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/e056/live/347f61f0-8a31-11f1-949c-5b05e00ab03c.jpg",
    readTime: 3,
  },
  {
    id: "oil-extends-losses-as-a-pause-in-u-s-ira-01a51c15",
    title: "Oil extends losses as a pause in U.S.-Iran hostilities raises de-escalation hopes",
    titleJa: "米国とイランの敵対行為一時停止で緊張緩和への期待が高まり、石油損失が拡大",
    summaryJa: "米国とイランの間の戦闘が一時停止したことを受け、火曜日の原油価格は下落幅を拡大し、エネルギー供給に混乱をもたらしている中東紛争の激化が沈静化するのではないかとの期待が高まった。国際指標となるブレント原油先物９月渡しは２．０７％下落し、１バレル＝８６．５３ドルとなった。米国ウェスト・テキサス・インターミディエイト原油先物９月渡しは１．７２％下落し、１バレル＝８２．１９ドルとなった。",
    bodyOriginal: `Oil prices extended their losses Tuesday after a pause in fighting between the U.S. and Iran held, raising hopes for a de-escalation in the Middle East conflict that has upended energy supplies.
International benchmark Brent crude futures for September delivery fell by 2.07% to $86.53 a barrel. U.S. West Texas Intermediate crude futures for September delivery dropped 1.72% to $82.19 a barrel.
While Tehran has rejected reports that it has agreed to a 10-day ceasefire with the U.S., there has been a temporary pause in hostilities.
That follows reports of diminished U.S. munitions. President Donald Trump, who on Friday told Axios that he was considering a "massive attack" on Iran, later set those plans aside amid arms stockpile concerns, The New York Times reported.
Speaking to reporters aboard Air Force One on Monday en route to Michigan, Trump dismissed suggestions that the U.S. was running short on weapons, saying the military had "plenty" of ordnance.
The Commonwealth Bank of Australia said on Tuesday that recent decline in oil prices reflects easing concerns over an immediate escalation between the U.S. and Iran, but cautioned that risks to global energy supplies remain elevated.
While "a pause in US Iran hostilities appears to have weakened expectations that the conflict will escalate to include significant attacks on civilian and energy infrastructure," the bank said in a note, warning that disagreements over the vital Strait of Hormuz shipping lane "could see hostilities reignite."
Analysts at Goldman Sachs said in a Tuesday note that Brent crude should moderate to $80 a barrel by year-end "if Hormuz fully reopens" by the final three months of the year.
"But Red Sea disruptions and attacks on Saudi oil infrastructure may pose a new source of upside risk for crude and refined products prices," the analysts added.`,
    bodyJa: `米国とイランの間の戦闘が一時停止したことを受け、火曜日の原油価格は下落幅を拡大し、エネルギー供給に混乱をもたらしている中東紛争の激化が沈静化するのではないかとの期待が高まった。
国際指標となるブレント原油先物９月渡しは２．０７％下落し、１バレル＝８６．５３ドルとなった。米国ウェスト・テキサス・インターミディエイト原油先物９月渡しは１．７２％下落し、１バレル＝８２．１９ドルとなった。
イラン政府は米国との10日間の停戦に合意したとの報道を拒否しているが、戦闘は一時的に停止している。
これは米国の軍需品が減少したとの報告を受けてのことだ。ドナルド・トランプ大統領は金曜日、アクシオスに対し、イランへの「大規模攻撃」を検討していると語ったが、後に武器備蓄への懸念からその計画を棚上げしたとニューヨーク・タイムズ紙が報じた。
トランプ大統領は月曜、ミシガン州に向かう途中のエアフォースワンで記者団に対し、米国が武器を不足しているという指摘を否定し、軍には「十分な」兵器があると述べた。
オーストラリア・コモンウェルス銀行は火曜日、最近の原油価格の下落は米国とイラン間の当面の緊迫化に対する懸念の緩和を反映していると述べたが、世界のエネルギー供給に対するリスクは依然高まっていると警告した。
同銀行はメモの中で「米国によるイラン敵対行為の一時停止により、紛争がエスカレートして民間インフラやエネルギーインフラへの重大な攻撃が含まれるとの予想が弱まったようだ」とし、重要なホルムズ海峡航路をめぐる意見の相違により「敵対関係が再燃する可能性がある」と警告した。
ゴールドマン・サックスのアナリストらは火曜日のメモで、「ホルムズ島が完全に再開した場合」年末までにブレント原油価格は年末までに１バレル＝８０ドルに落ち着くはずだと述べた。
「しかし、紅海の混乱とサウジの石油インフラへの攻撃は、原油および精製製品価格の新たな上昇リスク源となる可能性がある」とアナリストらは付け加えた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/28/oil-price-today-wti-brent-us-iran-hormuz.html",
    publishedAt: "2026-07-28T07:23:55+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "iran-hosts-hormuz-calls-with-saudi-arabi-a3367d15",
    title: "Iran hosts Hormuz calls with Saudi Arabia, Oman as Trump hails ‘good talks’",
    titleJa: "トランプ大統領「良い会談」を称賛、イランがサウジアラビア、オマーンとのホルムズ会談を主催",
    summaryJa: "ホルムズ海峡の将来をめぐる議論は火曜日も継続しており、イラン外務省はサウジアラビアとオマーンの相手国と戦略的に重要な海路について協議を行ったと発表した。グーグルが翻訳したテレグラムの声明によると、イランのセイエド・アッバス・アラクチ外務大臣は、「最近の二国間および地域の動向」に関して、サウジアラビアのファイサル・ビン・ファルハーン氏およびオマーンのバドル・アルブサイディ氏と個別に電話会談を行った。",
    bodyOriginal: `Discussions over the future of the Strait of Hormuz continued on Tuesday as Iran's Foreign Ministry said it had held talks on the strategically vital maritime passage with Saudi and Omani counterparts.
Iranian Foreign Minister Seyyed Abbas Araqchi held separate phone calls with Saudi Arabia's Faisal bin Farhan and Oman's Badr Al-Busaidi regarding "the latest bilateral and regional developments," according to a Telegram statement translated by Google.
The ministry said the calls "emphasized the need to strengthen cooperation and advance joint diplomatic efforts to establish stability in the region and eliminate the insecurity imposed on the Strait of Hormuz caused by the aggressive actions of the United States."
It came as a pause in U.S.-Iran hostilities appeared to hold after two weeks of strikes between the adversaries came to a temporary halt on Friday.
Markets have broadly responded positively to the pause, with stocks rallying and oil prices falling on Monday, with sentiment buoyed by the potential for a lasting peace agreement.
But other Middle East actors have continued military action in recent days, with Saudi Arabia reporting overnight that it had intercepted a "number of drones" allegedly launched by Iran-backed militias in Iraq targeting the kingdom's oil facilities.
But the Iraqi militias have not claimed responsibility for the attempted strikes, while Yemen's Houthis have said they had attacked Saudi oil facilities, according to Reuters – leaving the culprits unclear at the time of writing.
The Jordanian army also said it had downed a drone in its airspace overnight.
U.S. President Donald Trump hailed "good talks" with Iran late on Monday. The Iranian foreign ministry continued to deny that any direct negotiations with the U.S. were taking place, but suggested messages are being exchanged via intermediaries.
Nevertheless, Trump told reporters on Air Force One that U.S. strikes will resume if talks fail to deliver progress.
Regarding talks with Iran, the president separately told a campaign rally in Michigan: "You can't bribe them. You've got to beat them, and we'll beat the hell out of them. But we'll see how it turns out. Right now, there are very friendly negotiations going on."`,
    bodyJa: `ホルムズ海峡の将来をめぐる議論は火曜日も継続しており、イラン外務省はサウジアラビアとオマーンの相手国と戦略的に重要な海路について協議を行ったと発表した。
グーグルが翻訳したテレグラムの声明によると、イランのセイエド・アッバス・アラクチ外務大臣は、「最近の二国間および地域の動向」に関して、サウジアラビアのファイサル・ビン・ファルハーン氏およびオマーンのバドル・アルブサイディ氏と個別に電話会談を行った。
同省は、この電話会議は「地域の安定を確立し、米国の攻撃的な行動によって生じたホルムズ海峡に課せられた不安を解消するための協力を強化し、共同外交努力を進める必要性を強調した」と述べた。
これは、金曜日に敵対者間の2週間にわたる攻撃が一時的に停止された後、米国とイランの敵対行為が小休止し続けているように見える中で起こった。
月曜日には株価が上昇し、原油価格が下落するなど、市場はこの一時停止に対しておおむね前向きに反応しており、恒久的な和平合意の可能性によってセンチメントが高揚している。
しかし、他の中東関係者もここ数日軍事行動を続けており、サウジアラビアは一夜にして、イラン支援の民兵組織がイラクでサウジの石油施設を狙って発射したとされる「多数のドローン」を迎撃したと報告した。
しかし、ロイター通信によると、イラク民兵組織は攻撃未遂に対する犯行声明を出しておらず、一方イエメンのフーシ派はサウジアラビアの石油施設を攻撃したと述べており、本稿執筆時点では犯人は不明のままだ。
ヨルダン軍はまた、一夜にして領空内で無人機を撃墜したと発表した。
ドナルド・トランプ米大統領は月曜日遅く、イランとの「良好な対話」を称賛した。イラン外務省は米国との直接交渉が行われていることを否定し続けたが、仲介者を通じてメッセージが交換されていると示唆した。
それにもかかわらず、トランプ大統領はエアフォースワンで記者団に対し、協議で進展がなければ米国の攻撃は再開されると語った。
イランとの交渉に関して、大統領はミシガン州での選挙集会で別途、「イランに賄賂を渡すことはできない。彼らを打ち負かさなければならない。我々は彼らを徹底的に叩きのめすだろう。しかし、結果がどうなるか見てみよう。現在、非常に友好的な交渉が行われている。」と語った。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/28/us-iran-war-trump-hormuz.html",
    publishedAt: "2026-07-28T06:59:36+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "the-way-you-look-can-help-you-get-a-job-60bdea06",
    title: "The way you look can help you get a job - here's how",
    titleJa: "見た目は仕事を見つけるのに役立ちます - その方法は次のとおりです",
    summaryJa: "見た目は仕事を見つけるのに役立ちます - その方法は次のとおりです- 公開されました",
    bodyOriginal: `The way you look can help you get a job - here's how
- Published
Trying to secure her "dream job" with a fashion company, Taya Reed was highly aware she had to make a good first impression in the interviews. And how she dressed was going to be a key component.
A London-based science graduate from two top universities in the UK capital, the 23-year-old had applied for a marketing job at womenswear brand Tala. She had done her homework, and devised a promotional campaign for the business.
But Reed also put a great deal of thought into what she would wear for the interviews, the first online and another in person.
"I find outfits can be a good conversation starter," she says, adding she showed up to her main interview wearing an all-white ensemble with ballet flats, a long maxi skirt, and a white vest, all "girly and summery".
"I wanted to show I fit in with the company's culture."
It worked, and Reed got the job last month.
With youth unemployment stubbornly high on both sides of the Atlantic, young adults need to think of every possible way they can positively stand out in interviews.
And while substance matters, research suggests a person's appearance is also important. In a 2020 UK study, 51% of employers admitted turning down a candidate because of the way they looked, with managers indicating they had been influenced by scruffy clothes or poorly dyed hair.
Min-Hsuan Tu, a professor of human resources at the University of Buffalo, warns that job interviews can be unfair from the moment a candidate walks in.
The main author of a 2021 paper, external on the topic, she says good-looking people get hired more often because people associate attractiveness with positive traits such as trustworthiness and intelligence.
Individuals seen as attractive are likely to have received more positive attention and preferential treatment since childhood, helping them better learn non-verbal communication skills from an early age, Tu says. As a result, they can be more confident.
"Studies show that attractive people tend to have better communication skills and networks. They also have a higher sense of power," she says.
However, physical attractiveness is not limited to one's face or body shape but includes clothing and make-up. Making an effort to present well is important, says Tu.
I wore a shirt and trimmed my beard
Matt Cohen, a 31-year-old American who moved to London two years ago, aimed for a confident demeanour in his recent job interviews.
The holder of a master's degree in marketing, this month he landed his first post-graduation job after spending almost a year looking for work.
Despite a slow start, having sent out more than 100 cover letters, Cohen finally got an opportunity to shine with a few rounds of interviews that landed him an entry-level executive role at a media company.
Cohen wore a long sleeve buttoned-down shirt for interview, even though people in the company wore T-shirts.
"It's important that I appear professional, especially because I want to show I'm prepared if we have meetings with clients," he says.
He trimmed and groomed his beard, and made sure his short hair was neatly cut.
Besides appearances, Cohen also mastered non-verbal cues. "I try to give good eye contact, nod to what they're saying and show them I'm engaged," he says.
One interview technique helps him lower his stress levels and make a personal connection.
"I pretend they're already my friends and already offered me the job, and this interview is just about figuring out the details," he says. "I try to go into a zone - it usually works. I try to seem in control."
Caroline Hickey, a London-based career coach who advised both Reed and Cohen on how to interview, agrees that appearances matter, especially in such a competitive job market.
"Showing that you have taken care of your appearance and have presented yourself in a professional manner is an unconscious signal to the interviewer that you are taking the opportunity seriously," she says.
It also makes it easier for the interviewer to picture you in their office, or perhaps in front of a client, adds Hickey.
She argues that "knowing that you look good makes you more confident".
Madeline Drucker, 21, from Short Hills, New Jersey, agrees. She recently secured two internships through video interviews.
"I definitely prepared the same way I would for an in-person interview," she says. "I would do my hair, put on make-up, wear a nice sweater, and make sure my video background is clear and blurred so [the interviewers] are focused on me.
"When I feel like I look good, I feel more confident and perform better," she says, adding it is especially important on video calls where it can be harder to connect with people.
She wore green, her favourite colour, with a ring and bracelet to play with off-screen and calm herself. "I'm a fidgeter and that's distracting. The bracelet helps," she says.
As for Taya Reed back in London, part of her process was to do some deep breathing in a nearby park before the in-person interview.
"I tried my best to be super-relaxed, even if I was stressed inside," she says. "I'm so glad it worked out."
Related topics
Read more personal finance stories
- Published20 July
- Published28 May
- Published30 June
- Published15 July`,
    bodyJa: `見た目は仕事を見つけるのに役立ちます - その方法は次のとおりです
- 公開されました
ファッション会社での「夢の仕事」を確保しようとして、タヤ・リードさんは面接で良い第一印象を与えなければならないと強く意識していました。そして、彼女がどのように服を着たかが重要な要素になるでしょう。
A London-based science graduate from two top universities in the UK capital, the 23-year-old had applied for a marketing job at womenswear brand Tala.彼女は下調べをして、ビジネスの宣伝キャンペーンを考案しました。
しかし、リードさんはまた、最初のオンライン面接と次の対面での面接で何を着るかについても非常に考えました。
"I find outfits can be a good conversation starter," she says, adding she showed up to her main interview wearing an all-white ensemble with ballet flats, a long maxi skirt, and a white vest, all "girly and summery".
「私が会社の文化に適合していることを示したかったのです。」
それが功を奏し、リードさんは先月その仕事に就いた。
With youth unemployment stubbornly high on both sides of the Atlantic, young adults need to think of every possible way they can positively stand out in interviews.
そして、中身も重要ですが、研究では人の外見も重要であることが示唆されています。 In a 2020 UK study, 51% of employers admitted turning down a candidate because of the way they looked, with managers indicating they had been influenced by scruffy clothes or poorly dyed hair.
Min-Hsuan Tu, a professor of human resources at the University of Buffalo, warns that job interviews can be unfair from the moment a candidate walks in.
The main author of a 2021 paper, external on the topic, she says good-looking people get hired more often because people associate attractiveness with positive traits such as trustworthiness and intelligence.
Individuals seen as attractive are likely to have received more positive attention and preferential treatment since childhood, helping them better learn non-verbal communication skills from an early age, Tu says.その結果、彼らはより自信を持つことができます。
「研究によると、魅力的な人はより優れたコミュニケーション スキルとネットワークを持っている傾向にあります。また、権力に対する意識も高いのです」と彼女は言います。
しかし、身体的魅力は顔や体型に限定されるものではなく、服装やメイクなども含みます。良いプレゼンテーションをするために努力することが重要だと、Tu 氏は言います。
シャツを着てひげを剃った
2年前にロンドンに移住した31歳のアメリカ人マット・コーエンさんは、最近の就職面接では自信に満ちた態度を心がけた。
マーケティングの修士号を取得している彼は、仕事探しにほぼ1年を費やした後、今月、卒業後の最初の仕事を見つけた。
Despite a slow start, having sent out more than 100 cover letters, Cohen finally got an opportunity to shine with a few rounds of interviews that landed him an entry-level executive role at a media company.
社内の人々はTシャツを着ていたにもかかわらず、コーエン氏は面接の際、ボタンダウンの長袖シャツを着た。
「プロフェッショナルであるように見せることが重要です。特に、クライアントとのミーティングに備えて準備ができていることを示したいからです」と彼は言います。
彼はひげを整えて手入れをし、短い髪もきれいにカットしたことを確認した。
外見に加えて、コーエンは非言語的な手がかりも習得しました。 「私はアイコンタクトをよくし、相手の話にうなずき、自分が婚約していることを示すように努めています」と彼は言う。
ある面接テクニックは、彼のストレス レベルを下げ、個人的なつながりを築くのに役立ちます。
「彼らはすでに私の友人で、すでに私に仕事を提供してくれたふりをしています。そして、この面接は詳細を把握するためのものです」と彼は言います。 「私はゾーンに入ろうと努めていますが、たいていはうまくいきます。自分がコントロールできているように見えるように努めています。」
Caroline Hickey, a London-based career coach who advised both Reed and Cohen on how to interview, agrees that appearances matter, especially in such a competitive job market.
"Showing that you have taken care of your appearance and have presented yourself in a professional manner is an unconscious signal to the interviewer that you are taking the opportunity seriously," she says.
また、面接官は、あなたがオフィスにいるとき、あるいはクライアントの前にいるときの姿をイメージしやすくなるとヒッキー氏は付け加えます。
彼女は、「自分が見栄えが良いと知ることで、より自信が持てる」と主張しています。
ニュージャージー州ショートヒルズ在住のマデリーン・ドラッカーさん（21）もこれに同意する。彼女は最近、ビデオ面接を通じて 2 つのインターンシップを確保しました。
「対面面接の場合と同じように準備しました」と彼女は言います。 「髪を整え、化粧をし、素敵なセーターを着て、（面接官が）私に集中できるようにビデオの背景が鮮明でぼかされていることを確認します。
「自分の見た目が良いと感じると、自信がつき、パフォーマンスも向上します」と彼女は言い、それは人々とつながりにくいビデオ通話では特に重要であると付け加えた。
彼女はお気に入りの色である緑を身に着け、画面外で遊んで自分を落ち着かせるために指輪とブレスレットをつけていました。 「私はそわそわしてしまうので、気が散ってしまいます。ブレスレットは役に立ちます」と彼女は言います。
ロンドンに戻ったタヤ・リードに関しては、直接インタビューの前に近くの公園で深呼吸をすることが彼女のプロセスの一部だった。
「たとえ内心ストレスを感じていたとしても、とてもリラックスできるように最善を尽くしました」と彼女は言います。 「うまくいってとてもうれしいです。」
関連トピック
パーソナルファイナンスのストーリーをもっと読む
- Published20 July
- Published28 May
- Published30 June
- Published15 July`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c80neg5rd81o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-28T06:53:59+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/f9ac/live/ec73fcb0-89bb-11f1-a7ab-8b30adf0800a.jpg",
    readTime: 9,
  },
  {
    id: "burnham-says-pupils-in-england-need-clea-1182b338",
    title: "Burnham says pupils in England need clearer pathway into work",
    titleJa: "バーナム氏、イギリスの生徒には就職へのより明確な道筋が必要だと語る",
    summaryJa: "バーナム氏、イギリスの生徒には就職へのより明確な道筋が必要だと語る- 公開されました",
    bodyOriginal: `Burnham says pupils in England need clearer pathway into work
- Published
Children should be given a clearer pathway into work from the age of 14, Prime Minister Andy Burnham has said as he unveils reforms that will allow pupils in England to study subjects like manufacturing and AI alongside core academic learning.
The government said the courses, available from Year 10, would be linked to local jobs and industries.
Data published earlier this year showed more than one million young people across the UK were not in education, employment or training, or "Neet" - the highest level in more than 12 years.
While the government is describing it as a "fundamental change to the education system", there are few details behind the broad political vision.
The Association of School and College Leaders, which speaks for many secondary headteachers, said they welcomed the ambition of preventing young people falling out of education or work at 16.
With schools already asked to manage on tight budgets and support radical reforms to special educational needs, the union also said there was an issue of capacity.
Burnham said that "for too long" students had been told to take academic subjects to "do well and be respected".
"My message to young people is this - whether you choose construction, coding or classics, or maths, manufacturing or mechanics, you'll get the skills you need and be given the respect you deserve," he said.
The government, he added, was delivering the "major shake-up" required to fix the youth unemployment crisis in Britain, starting with improving the availability and quality of technical education.
Pupils, the government said, would be able to combine subjects such as English and maths with high-quality technical education linked to the jobs available in their area.
"They will be able to spend time with employers and gain real-world experience," it said.
In an Op Ed piece for the Times, external, Burnham wrote: "In the age of AI, practical and technical skills haven't become less valuable - they've become more valuable than ever. Britain will need brilliant engineers, electricians and cybersecurity experts more than ever before."
The reforms, he wrote, were about helping young people "build successful working lives from the start".
The BBC understands that the government expects the new pathways into work to be up and running in some areas by 2028.
Along with the changes to learning, Ofsted will change the way it measures performance and will inspect for technical education. It is not clear how this will fit alongside national measures designed to hold schools to account for the number of pupils taking core academic GCSEs.
The changes announced on Tuesday will only impact England, as education is a devolved policy area.
But improving access to technical and vocational education has been a common focus for governments in Wales, Scotland and Northern Ireland too in recent years.
The reforms are about aligning political ambitions for education with plans to devolve powers to local areas.
They will build on local initiatives like the MBacc, or Greater Manchester Baccalaureate, which was launched in September 2024 by Burnham when he was the city's mayor.
It has provided a framework for pupils to pick GCSE subjects in both academic and technical subjects which align with growing local industries, like green energy or digital.
Teenagers under this programme have also been promised more careers advice and work experience that links to seven sectors of work.
Education Secretary Lucy Powell said the announcement marked the "start of a real shared effort with employers, businesses, mayors and councils to design an education system that connects young people to jobs and careers in their local area".
"The technological revolution we are living through should mean young people become the fresh lifeblood our economy needs to adapt and grow," she said.
In an interim report published in May, into why so many across the UK fall into the Neet category, former minister Alan Milburn had said young people risked becoming part of a "lost generation".
That report was published the same day as figures from the Office for National Statistics showed more than one in eight of UK 16- to 24-year-olds were Neet at the start of this year.
Milburn said the changes announced for England on Tuesday were "very welcome".
"They are a big step in the right direction and consistent with the findings of my review," he said.
But Laura Trott, the shadow education secretary, said the announcements "don't come anywhere close to undoing the damage Labour has already done to the job market".
"The focus should be on the knowledge-rich curriculum that has helped the most deprived children."
Liberal Democrat education spokesperson Munira Wilson said there had to be provisions to allow pupils flexibility to "change direction and move between 'academic' and 'technical'".
"We must not allow these changes to predetermine children's futures at just 14, baking in disadvantage," she added.
Paul Whiteman, general secretary of the National Association of Head Teachers, said school leaders supported the move.
"However, this announcement sets out a direction of travel rather than detailed proposals, and schools will need much greater clarity about what it means in practice and over funding," he added.
Additional reporting by Education Editor Branwen Jeffreys`,
    bodyJa: `バーナム氏、イギリスの生徒には就職へのより明確な道筋が必要だと語る
- 公開されました
アンディ・バーナム首相は、英国の生徒が主要な学業と並行して製造やAIなどの科目を学べるようにする改革を発表する際、子どもたちには14歳から働くためのより明確な道筋を与えられるべきだと述べた。
政府は、10年生から受講可能なコースは地元の雇用や産業に結びつくと述べた。
今年初めに発表されたデータによると、英国全土で100万人以上の若者が教育、雇用、訓練を受けておらず、「ニート」状態にあり、過去12年以上で最高水準となった。
政府はこれを「教育制度の根本的な変化」と説明しているが、広範な政治的ビジョンの背後にある詳細はほとんどない。
多くの中等教育長の代弁者である学校大学指導者協会は、若者が16歳で教育や仕事から脱落するのを防ぐという野心を歓迎すると述べた。
学校はすでに厳しい予算の中で運営し、特殊教育ニーズに対する抜本的な改革を支援するよう求められており、組合はまた、収容力の問題があるとも述べた。
バーナム氏は、「あまりにも長い間」学生たちは「良い成績を収め、尊敬される」ために学問を履修するように言われてきたと語った。
「若い人たちへの私のメッセージはこれです。建設、コーディング、古典、あるいは数学、製造、機械のいずれを選択しても、必要なスキルを身につけ、ふさわしい尊敬を得ることができるのです」と彼は語った。
同氏は、政府は技術教育の利用可能性と質の向上から始めて、英国の若者の失業危機を解決するために必要な「大規模な改革」を行っていると付け加えた。
政府は、生徒たちは英語や数学などの科目と、その地域で可能な仕事に関連した質の高い技術教育を組み合わせることができると述べた。
「彼らは雇用主と時間を過ごし、現実世界での経験を積むことができるだろう」と述べた。
バーナム氏はタイムズ社外の論説記事で、「AIの時代になっても、実践的かつ技術的なスキルの価値が下がったわけではなく、これまで以上に価値が高まっている。英国は優秀なエンジニア、電気技師、サイバーセキュリティの専門家をこれまで以上に必要とするだろう」と書いた。
同氏は、この改革は若者が「最初から成功した職業生活を築く」ことを支援することを目的としていると書いた。
BBC は、政府が 2028 年までに一部の地域で就労への新たな道が整備されることを期待していることを理解しています。
学習の変化に伴い、Ofsted はパフォーマンスの測定方法を変更し、技術教育の検査を行う予定です。これが、主要な学術的 GCSE を受講する生徒の数を学校に課すことを目的とした国の措置とどのように適合するかは不明です。
教育は権限を与えられた政策分野であるため、火曜日に発表された変更はイングランドにのみ影響する。
しかし、技術教育や職業教育へのアクセスを改善することは、近年ウェールズ、スコットランド、北アイルランドの政府にとっても共通の焦点となっている。
この改革は、教育に対する政治的野望と地方への権限移譲計画を整合させることを目的としている。
これらは、バーナム氏が市長だった2024年9月に創設されたMBacc（グレーター・マンチェスター・バカロレア）のような地元の取り組みを基礎にしていく予定だ。
これにより、生徒がグリーン エネルギーやデジタルなどの成長する地元産業に合わせた学術科目と技術科目の両方で GCSE 科目を選択できる枠組みが提供されました。
このプログラムの対象となるティーンエイジャーには、より多くのキャリアに関するアドバイスと、7 つの分野の仕事に関連した実務経験も約束されています。
ルーシー・パウエル教育長官は、この発表は「若者を地元の仕事やキャリアに結びつける教育制度を設計するための、雇用主、企業、市長、議会との真の共同努力の始まり」を示すものであると述べた。
「私たちが経験している技術革命は、若者が経済の適応と成長に必要な新鮮な生命線になることを意味するはずです」と彼女は述べた。
元大臣アラン・ミルバーン氏は、英国全土でこれほど多くの人がニートに該当する理由について５月に発表した中間報告書の中で、若者は「失われた世代」の一員になる危険があると述べた。
この報告書は、今年初めにイギリスの16歳から24歳の8人に1人以上がニートであることを国家統計局の統計が示したのと同じ日に発表された。
ミルバーン氏は、火曜日にイングランドに対して発表された変更は「非常に歓迎される」と述べた。
「それらは正しい方向への大きな一歩であり、私の調査結果と一致している」と同氏は述べた。
しかし、影の教育長官のローラ・トロット氏は、今回の発表は「労働党がすでに労働市場に与えたダメージを元に戻すには程遠い」と述べた。
「最も恵まれない子供たちを助けてきた知識豊富なカリキュラムに焦点を当てるべきです。」
自由民主党の教育担当広報官ムニラ・ウィルソン氏は、生徒が「方向を変え、『学問』と『技術』の間を行き来できる」柔軟性を与える規定が必要だと述べた。
「このような変更によって、わずか14歳の子どもたちの将来があらかじめ決定され、不利益が増大することを許してはなりません」と彼女は付け加えた。
全米校長協会の書記長ポール・ホワイトマン氏は、学校指導者らがこの動きを支持していると述べた。
「しかし、この発表は詳細な提案ではなく方向性を示すものであり、学校はそれが実際に何を意味するのか、そして過剰な資金を提供するのかについてより明確にする必要があるだろう」と同氏は付け加えた。
教育編集者ブランウェン・ジェフリーズによる追加レポート`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cj4k2djd5qpo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-28T02:56:21+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/cb38/live/76a92500-89f7-11f1-ad85-33848ec6bcfe.jpg",
    readTime: 6,
  },
  {
    id: "shares-of-sk-hynix-plunge-10-in-seoul-as-0bc764fc",
    title: "Shares of SK Hynix plunge 10% in Seoul as semiconductor sell-off deepens",
    titleJa: "半導体暴落が深刻化、ソウル市場でSKハイニックスの株価が10％下落",
    summaryJa: "韓国の半導体株は火曜日に急落し、ウォール街での取引が再び低迷したことを受けて、半導体メーカーの暴落が拡大した。ＳＫハイニックスは１０％以上下落し、サムスン電子は８％以上下落した。他のAI関連銘柄も大きく売られ、サムスンSDIは7％以上下落、LGイノテックは14％近く下落、ソウル半導体は約6％下落、LG化学は4％以上下落した。",
    bodyOriginal: `South Korean semiconductor shares tumbled on Tuesday, extending a rout in chipmakers after another weak session on Wall Street.
SK Hynix plunged more than 10%, while Samsung Electronics fell over 8%. Other AI-linked names also came under heavy selling, with Samsung SDI dropping over 7%, LG Innotek sliding nearly 14%, Seoul Semiconductor falling about 6% and LG Chem losing more than 4%.
Japan's semiconductor sector also traded lower. Tokyo Electron dropped more than 9%, Advantest slid over 8%, while SoftBank Group, a major AI investment proxy through its stake in Arm, fell nearly 5%. Shares of Japan computer memory manufacturer Kioxia plunged more than 15%. Taiwan's TSMC was down over 2%.
The sell-off followed another weak session for U.S. semiconductor stocks on Monday. The VanEck Semiconductor ETF (SMH) lost more than 2%, adding to its Friday losses. AMD and Teradyne dropped 5% and 4%, respectively. Micron Technology shed about 2%.
The weakness underscores how closely Asian technology shares and the U.S. AI trade have become intertwined.
Samsung Electronics and SK Hynix are among the world's largest suppliers of high-bandwidth memory chips used in AI servers, making their shares particularly sensitive to shifts in expectations for spending by U.S. hyperscalers.
Sharp swings in SK Hynix shares underscore the uncertainty surrounding the AI investment cycle, said Acadian Asset Management's senior vice president Owen Lamont, arguing that investors still have little visibility into how the technology will ultimately affect the economy.
"Right now we're facing an incredible uncertainty," he told CNBC. "No one has any idea how this AI process is going to affect our economy, and so I think it's going to be rocky no matter what."
Lamont also added that leveraged exchange-traded products could be adding to market swings, even if they are not solely responsible for SK Hynix's recent volatility.
"More generally, the entire ecosystem of levered ETFs in Korea, also in Hong Kong and in the United States, are possibly adding volatility and magnifying market fluctuations."`,
    bodyJa: `韓国の半導体株は火曜日に急落し、ウォール街での取引が再び低迷したことを受けて、半導体メーカーの暴落が拡大した。
ＳＫハイニックスは１０％以上下落し、サムスン電子は８％以上下落した。他のAI関連銘柄も大きく売られ、サムスンSDIは7％以上下落、LGイノテックは14％近く下落、ソウル半導体は約6％下落、LG化学は4％以上下落した。
日本の半導体セクターも下落した。東京エレクトロンは9％以上下落し、アドバンテストは8％以上下落し、アーム株を通じてAI投資代理店大手のソフトバンクグループは5％近く下落した。日本のコンピュータメモリメーカーキオクシアの株価は15％以上急落した。台湾のTSMCは2％超下落した。
月曜日に米国の半導体株が再び軟調に推移したことを受けて下落した。バンエック・セミコンダクターETF（SMH）は2％以上下落し、金曜日の損失にさらに加わった。 AMDとテラダインはそれぞれ5％、4％下落した。マイクロン・テクノロジーは約２％下落した。
この弱さは、アジアのテクノロジー株と米国のAI貿易がいかに緊密に絡み合っているかを浮き彫りにしている。
サムスン電子とSKハイニックスは、AIサーバーに使用される高帯域幅メモリチップの世界最大のサプライヤーの1つであり、同社の株価は米国のハイパースケーラーによる支出期待の変化に特に敏感になっている。
アカディアン・アセット・マネジメントの上級副社長オーウェン・ラモント氏は、SKハイニックス株の急騰はAI投資サイクルをめぐる不確実性を浮き彫りにしており、AI技術が最終的に経済にどのような影響を与えるかについて投資家はまだほとんど見通しがついていないと主張した。
「現在、私たちは信じられないほどの不確実性に直面している」と同氏はCNBCに語った。 「このAIプロセスが私たちの経済にどのような影響を与えるかは誰にもわかりません。ですから、何が起こっても大変なことになると思います。」
ラモント氏はまた、たとえそれがSKハイニックスの最近のボラティリティの単独の原因ではないとしても、レバレッジ取引された上場商品が市場の変動に拍車をかけている可能性があるとも付け加えた。
「より一般的には、韓国、香港、米国のレバレッジETFのエコシステム全体がボラティリティを高め、市場変動を拡大している可能性がある。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/28/sk-hynix-plunges-semiconductor-selloff-deepens-samsung-softbank.html",
    publishedAt: "2026-07-28T02:41:03+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "johnson-johnson-offers-up-to-5-5bn-to-se-6111518e",
    title: "Johnson & Johnson offers up to $5.5bn to settle baby powder lawsuits",
    titleJa: "ジョンソン・エンド・ジョンソン、ベビーパウダー訴訟の和解に最大55億ドルを提示",
    summaryJa: "ジョンソン・エンド・ジョンソン、ベビーパウダー訴訟の和解に最大55億ドルを提示- 公開されました",
    bodyOriginal: `Johnson & Johnson offers up to $5.5bn to settle baby powder lawsuits
- Published
Johnson & Johnson (J&J) has offered to pay as much as $5.5bn (£4.14bn) to resolve tens of thousands of lawsuits in the US alleging that its baby powder and other products containing talcum cause ovarian cancer.
The proposed landmark settlement aims to close a long-running legal battle that has weighed on the New Jersey-based healthcare giant for years.
J&J has denied that its talc-based products caused cancer and has changed the formula of its widely-used baby powder.
Erik Haas, the firm's vice president of litigation said on Monday, external that the allegations are "meritless" and that J&J was willing to settle in order to finally resolve the matter.
J&J said the settlement would cover about 69,000 cases, totalling most of the remaining talc-related claims. The firm will offer up to $3bn next year, with no additional payments due before 2028, it said.
The proposal must be accepted by legal firms representing 95% of the ovarian cancer claims in state and federal courts before it can be finalised, the J&J said.
Haas said in a statement that the company is confident that it would have "ultimately prevailed with further litigation" just as it has in the majority of cases heard in court to date.
He added that the proposed resolution "allows the company to put this matter behind it" and enable J&J to "remain focused on its mission to develop medicines and devices that save lives".
J&J's former consumer health business, Kenvue, holds liability for Johnson's baby powder outside North America.
Kenvue - which owns well-known brands including Band-Aid, Listerine, and Calpol - was spun off from J&J in 2022.
Lawsuits against J&J over its talc-based baby powder started as early as 2009.
Earlier in July, a federal court handed the firm a victory by questioning individual plaintiffs' ability to show that talc was the direct cause of their ovarian cancer.
Talc is a natural mineral made of magnesium, silicon, oxygen and hydrogen, known for its soapy feel and is often used in baby powder.
The company has faced lawsuits from consumers and their survivors who claim J&J's talc products caused cancer due to contamination with asbestos.
Talc is mined from the earth and is found in seams close to that of asbestos, which is a material known to cause cancer.
J&J has repeatedly denied the allegations and in its latest announcement said: "Studies show talc is safe, does not contain asbestos and does not cause cancer."
In 2022, J&J said it would stop making and selling its talc-based baby powder around the world.
The announcement came more than two years after it had ended sales of the product in the US.
"As part of a worldwide portfolio assessment, we have made the commercial decision to transition to an all cornstarch-based baby powder portfolio," J&J said at the time.`,
    bodyJa: `ジョンソン・エンド・ジョンソン、ベビーパウダー訴訟の和解に最大55億ドルを提示
- 公開されました
ジョンソン・エンド・ジョンソン（J&J）は、同社のベビーパウダーやタルカムを含むその他の製品が卵巣がんの原因であると主張する米国内での数万件の訴訟の解決に、最大55億ドル（41億4000万ポンド）を支払うと申し出た。
この画期的な和解案は、ニュージャージーに本拠を置く医療大手企業に長年のしかかってきた長期にわたる法廷闘争に終止符を打つことを目的としている。
Ｊ＆Ｊはタルクベースの製品が発がん性を引き起こしたことを否定し、広く使われているベビーパウダーの配合を変更した。
同社の訴訟担当副社長エリック・ハース氏は月曜日、外部に対し、申し立ては「理由がない」ものであり、最終的に問題を解決するためにJ&Jは和解する用意があると述べた。
Ｊ＆Ｊは、今回の和解は約６万９０００件の訴訟をカバーし、残りのタルク関連請求のほとんどをカバーすると述べた。同社は来年最大30億ドルを提示する予定だが、2028年までは追加の支払いは予定されていないという。
J&Jによると、この提案は最終決定される前に、州および連邦裁判所での卵巣がん訴訟の95％を代表する法律事務所によって受け入れられる必要があるという。
ハースは声明で、これまで法廷で審理された訴訟の大部分と同様に、同社は「さらに訴訟を起こせば最終的には勝訴する」と確信していると述べた。
同氏は、提案された決議により、同社は「この問題を棚上げ」することができ、J&Jは「命を救う医薬品や機器を開発するという使命に集中し続ける」ことが可能になると付け加えた。
Ｊ＆Ｊの元消費者向け健康事業会社ケンビューは、北米以外でのジョンソンのベビーパウダーに対する責任を負っている。
Band-Aid、Listerine、Calpol などの有名ブランドを所有する Kenvue は、2022 年に J&J から分離されました。
タルクベースのベビーパウダーをめぐるJ&Jに対する訴訟は、2009年にはすでに始まっていた。
7月初旬、連邦裁判所は、タルクが卵巣がんの直接の原因であることを個々の原告が証明する能力を疑問視し、同社に勝訴を言い渡した。
タルクは、マグネシウム、ケイ素、酸素、水素で構成される天然鉱物で、石鹸のような感触で知られ、ベビーパウダーによく使用されます。
同社は、J&Jのタルク製品がアスベストの汚染により発がん性を引き起こしたと主張する消費者とその生存者からの訴訟に直面している。
タルクは地球から採掘され、発がん性物質として知られるアスベストの継ぎ目に近い場所で発見されます。
Ｊ＆Ｊは疑惑を繰り返し否定しており、最新の発表では「タルクは安全で、アスベストを含まず、発がん性がないことが研究で示されている」と述べた。
J&Jは2022年にタルクベースのベビーパウダーの製造と世界中での販売を中止すると発表した。
この発表は米国での製品販売終了から2年以上経ってから行われた。
「世界的なポートフォリオ評価の一環として、当社はすべてコーンスターチベースのベビーパウダーポートフォリオに移行する商業的決定を下した」とJ&Jは当時述べた。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/clyqnz52rp6o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-28T01:53:58+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/988d/live/89834e70-8a1b-11f1-8e1d-ab6aa2cf2cd1.jpg",
    readTime: 3,
  },
  {
    id: "u-s-and-korean-tech-stocks-are-now-tight-938619cf",
    title: "U.S. and Korean tech stocks are now tightly linked — and that could be a worry for investors",
    titleJa: "米国と韓国のハイテク株は現在緊密に結びついており、それが投資家にとって懸念材料となる可能性がある",
    summaryJa: "人工知能への支出が米国の巨大テクノロジー企業と韓国のメモリチップメーカーの運命を結びつけているため、ウォール街のテクノロジーの動きと韓国の株式市場はますます絡み合っている。レイリアントが提供したデータによると、コスピとナスダック100の60日間相関は最近約0.50まで上昇し、2021年以来の最高水準となった。",
    bodyOriginal: `Wall Street tech moves and South Korea's stock market are becoming increasingly intertwined as artificial intelligence spending binds together the fortunes of U.S. technology giants and Korean memory chipmakers.
The 60-day correlation between the Kospi and Nasdaq 100 recently climbed to about 0.50, its highest level since 2021, according to data provided by Rayliant.
The growing relationship reflects the increasing dominance of Samsung Electronics and SK Hynix, which together account for more than half of the Kospi index. Both companies sit at the center of the AI hardware supply chain, providing the memory chips needed for data centres operated by U.S. technology giants.
"The correlation has increased because the KOSPI has become a semiconductor index," Rolf Bulk, analyst at Futurum Group, told CNBC via email.
Samsung and SK Hynix increasingly depend on the same hyperscaler spending that drives earnings at U.S. semiconductor and technology companies. Data-center demand rose from around 40% of global DRAM demand last year to more than half this year, according to Bulk, who expects that share to increase further. DRAM, or dynamic random-access memory, is used in AI servers.
That gives investors in Asia an early read on the strength of the global AI trade before Wall Street opens.
"Samsung and SK Hynix provide the first liquid market reaction to overnight developments affecting global AI demand," said Jung In Yun, founder of Fibonacci Asset Management. "SK Hynix in particular has become an important barometer because of its exposure to high-bandwidth memory, which is one of the most critical components in the AI supply chain."
Recent trading illustrates that dynamic. On July 13, the Kospi fell more than 8%, dragged by SK Hynix's 15% plunge and record fall. The Nasdaq 100 followed suit to end 1.88% lower that day. Shares of big technology names declined that day. Micron Technology closed 4% lower, Sandisk shed 12%, Intel pulled back 6%.
Peter Kim, head of global investment strategy at KB Financial Group, said the Korean memory-chip rally began later than the Nasdaq's advance because U.S. investors initially focused more heavily on hyperscalers. The scale and volatility of the recent rally, however, have prompted global investors to treat Korea as a bellwether for broader AI trades.
Samsung's earnings guidance can also provide one of the first concrete signals each quarter on the state of AI demand. The company typically reports earnings about two weeks before major U.S. semiconductor companies.
Analysts cautioned, however, that Korean and U.S. technology shares are moving in tandem, rather than one consistently leading the other.
"The fortunes of U.S. tech stocks and Korean tech stocks are increasingly being driven by a common underlying factor, which is sentiment toward the AI hardware trade," said Phillip Wool, head of research at Rayliant Global Advisors.
When AI-related news breaks while U.S. markets are closed, Samsung and SK Hynix can act as proxies for how investors may respond when Wall Street reopens. When developments occur during U.S. trading, the Nasdaq similarly offers a preview of the next Korean session.
The closer relationship also carries risks. The rising correlation erodes the diversification benefits investors traditionally sought by holding U.S. and Korean equities, echoed the industry veterans.
"Korea no longer provides diversification against U.S. tech. With half the index tied to one cyclical theme, a slowdown in hyperscaler capex would hit the Korean market harder than most other markets," Bulk said.
He added that Korean memory stocks are also inherently more volatile than many U.S. chipmakers, with swings amplified by leveraged exchange-traded fund flows.
Wool similarly highlighted that as the AI theme increasingly becomes the dominant driver of both Korean and U.S. technology stocks, investors are losing one of the main reasons for holding both markets: geographic diversification.
"When all of these markets are essentially being driven by this one big risk factor, you find that you've lost the very benefit — the international diversification — that led you to seek exposure to geographically disparate markets like the US and Korea in the first place."
That said, there could also be greater divergence over time. Micron, Samsung and SK Hynix currently benefit from the same rise in DRAM prices, but differences in capital expenditure, product mix and U.S. support for domestic chip production may eventually separate their performance, said Kim.
China's expansion into memory chips is also another emerging risk, he added. While Chinese producers remain technologically behind their global rivals, their progress has frequently exceeded investor expectations. Shares of chipmaker Changxin Technology Group soared 466% Monday in their debut on Shanghai's tech-heavy STAR Market, making CXMT the most valuable China-listed company.`,
    bodyJa: `人工知能への支出が米国の巨大テクノロジー企業と韓国のメモリチップメーカーの運命を結びつけているため、ウォール街のテクノロジーの動きと韓国の株式市場はますます絡み合っている。
レイリアントが提供したデータによると、コスピとナスダック100の60日間相関は最近約0.50まで上昇し、2021年以来の最高水準となった。
この関係の拡大は、コスピ指数の半分以上を占めるサムスン電子とSKハイニックスの優位性が高まっていることを反映している。両社はAIハードウェアのサプライチェーンの中心に位置し、米国のテクノロジー大手が運営するデータセンターに必要なメモリチップを提供している。
フツラム・グループのアナリスト、ロルフ・バルク氏は電子メールでＣＮＢＣに対し、「ＫＯＳＰＩが半導体指数になったため、相関関係が高まった」と語った。
サムスンとSKハイニックスは、米国の半導体企業やテクノロジー企業の収益を押し上げる同じハイパースケーラーへの支出への依存を強めている。バルク氏によると、データセンターの需要は世界のDRAM需要の約40％であった昨年から今年は半分以上に増加し、そのシェアはさらに増加すると予想している。 DRAM (ダイナミック ランダム アクセス メモリ) は AI サーバーで使用されます。
これにより、アジアの投資家はウォール街が開く前に世界のAI貿易の強さをいち早く知ることができる。
「サムスンとSKハイニックスは、世界のAI需要に影響を与える一夜にしての展開に対して、初めて市場の流動的な反応を示した」とフィボナッチ・アセット・マネジメントの創設者チョン・インユン氏は述べた。 「特にSK Hynixは、AIサプライチェーンで最も重要なコンポーネントの1つである高帯域幅メモリにさらされているため、重要なバロメーターとなっています。」
最近の取引はその力学を示しています。 7月13日、SKハイニックスの15％急落と記録的な下落に引きずられ、コスピは8％以上下落した。ナスダック100もこれに追随し、その日は1.88％安で終了した。この日はテクノロジー大手の株価が下落した。マイクロン・テクノロジーは４％安、サンディスクは１２％安、インテルは６％値を下げて取引を終えた。
KBフィナンシャル・グループのグローバル投資戦略責任者、ピーター・キム氏は、米国の投資家が当初ハイパースケーラーに重点を置いていたため、韓国のメモリチップの上昇はナスダックの上昇よりも遅れて始まったと述べた。しかし、最近の株価上昇の規模とボラティリティの高さから、世界の投資家は韓国をより広範なAI取引の先導者として扱うようになった。
サムスンの収益見通しは、AI需要の状況に関する四半期ごとの最初の具体的なシグナルの1つを提供することもできる。同社は通常、米国の大手半導体企業より約２週間前に決算を発表する。
しかしアナリストらは、韓国と米国のテクノロジー株は、一方が常に他方をリードしているのではなく、連動して推移していると警告した。
レイリアント・グローバル・アドバイザーズの調査責任者、フィリップ・ウール氏は「米国のハイテク株と韓国のハイテク株の運命は、AIハードウェア取引に対するセンチメントという共通の基礎的要因によってますます左右されるようになっている」と述べた。
米国市場が閉まっている間にAI関連のニュースが流れた場合、サムスンとSKハイニックスは、ウォール街が再開した際に投資家がどのように反応するかを代理する役割を果たすことができる。米国の取引中に展開が起こると、ナスダックは同様に次の韓国セッションのプレビューを提供します。
緊密な関係にはリスクも伴います。相関関係の上昇は、投資家が伝統的に米国株や韓国株を保有することで求めていた分散効果を損なうと、業界のベテランらも同様の意見を述べた。
「韓国はもはや米国のテクノロジーに対する分散を提供していない。指数の半分が一つの循環テーマに結びついているため、ハイパースケーラーの設備投資の減速は、他のほとんどの市場よりも韓国市場に大きな打撃を与えるだろう」とバルク氏は述べた。
同氏はまた、韓国のメモリ株は本質的に多くの米国の半導体メーカーよりも不安定であり、レバレッジをかけた上場投資信託のフローによって変動が増幅されると付け加えた。
ウール氏は同様に、AIのテーマが韓国と米国のテクノロジー株の主要な原動力となるにつれ、投資家は両市場を保有する主な理由の1つである地理的分散を失いつつあることを強調した。
「これらすべての市場が本質的にこの 1 つの大きなリスク要因によって動かされている場合、そもそも米国や韓国のような地理的に異なる市場へのエクスポージャーを求めるきっかけとなった国際分散というまさに利益を失っていることに気づくでしょう。」
とはいえ、時間の経過とともに大きな乖離が生じる可能性もあります。マイクロン、サムスン、SKハイニックスは現在、同様のDRAM価格上昇の恩恵を受けているが、設備投資や製品構成、国内チップ生産に対する米国の支援の違いにより、最終的には業績が分かれる可能性があるとキム氏は述べた。
中国によるメモリーチップへの進出も新たなリスクとなっていると同氏は付け加えた。中国の生産者は依然として世界のライバルに技術的に遅れをとっているが、その進歩はしばしば投資家の期待を上回っている。半導体メーカー長新科技集団の株価は月曜日、上海のハイテク産業が多いSTAR市場への上場で466％急騰し、CXMTは中国で最も価値のある上場企業となった。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/28/nasdaq-kospi-wall-street-korea-markets-skhynox-samsung.html",
    publishedAt: "2026-07-28T01:34:28+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 6,
  },
  {
    id: "nvidia-s-potential-new-deal-with-openai-7416d2ba",
    title: "Nvidia’s potential new deal with OpenAI would revive a spooky tech-bubble habit, analyst warns",
    titleJa: "NvidiaとOpenAIとの新たな契約の可能性は、不気味なテクノロジーバブルの習慣を復活させるだろうとアナリストが警告",
    summaryJa: "投資家は、NVIDIA が OpenAI データセンターのリースをバックストップする可能性があるとの報道に不安を感じている。このような取り決めとしては過去最大規模となる。",
    bodyOriginal: `Investors are fretting over a report that Nvidia could backstop an OpenAI data-center lease, in what would be the largest such arrangement yet.`,
    bodyJa: `投資家は、NVIDIA が OpenAI データセンターのリースをバックストップする可能性があるとの報道に不安を感じている。このような取り決めとしては過去最大規模となる。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/nvidias-potential-new-deal-with-openai-would-revive-a-spooky-tech-bubble-habit-analyst-warns-ae34ed64?mod=mw_rss_topstories",
    publishedAt: "2026-07-28T01:19:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-69899727",
    readTime: 2,
  },
  {
    id: "is-it-time-to-stop-using-glue-and-labels-97d4fc1a",
    title: "Is it time to stop using glue and labels on paper?",
    titleJa: "紙に糊やラベルを使うのをやめる時期が来たのでしょうか?",
    summaryJa: "紙に糊やラベルを使うのをやめる時期が来たのでしょうか?- 公開されました",
    bodyOriginal: `Is it time to stop using glue and labels on paper?
- Published
It's quite literally a sticking point.
While paper or cardboard packaging might on its own be recyclable, the presence of a label, a seal or a coating can negate that.
That's because non-recyclable adhesives, or "stickies" as they are known as in the industry, can cause damage to recycling machinery, make the resulting batch of recycled paper inferior, or even cause a batch of paper to be recycled to be rejected, according to scientists, external at NC State University.
And that's a shame as paper is one of the most recycled materials in Europe - with around 74% of paper and board consumed in 2024 being recycled.
And European authorities are spurring firms to do better.
In August, a new Europe-wide packaging, external and packaging waste regulation (PPWR) kicks in ordering that all packaging should be minimum 70% recyclable by 2030, rising to 80% from 2038. In addition, German law will also, external require stricter reporting and licensing fees.
So, tackling stickies would be helpful. One solution has been to develop water soluble adhesives, external.
But what if you could skip the adhesive altogether?
That's the idea that three firms from Germany - Fraunhofer, Hermann Ultraschall, and Henkel - have come up with.
It's no coincidence they are all German, as the country is known for its Packaging Valley, external, a hub for the packaging industry.
Their efforts to innovate are partly a bid to satisfy ever tightening regulation around commercial recycling, and rising fines for those who fall foul.
With that in mind, German research organisation Fraunhofer established the PAPURE project in 2023 to develop a laser-based heating process that can seal paper packaging without an adhesive at all.
From September, when the project is set to officially close, Fraunhofer hopes to find an industry partner to take the technology to market. Fraunhofer researchers exhibited their work at the Interpack packaging trade show in Dusseldorf in May, and are hopeful that the interest they attracted will come to fruition.
"There are not really many paper sealing technologies without any foreign materials, so it's a great technology and we feel it's likely that we can bring it to market," says researcher group leader Fabian Kayatz.
"If we are optimistic, we will have the first solution out in two years."
Also in 2023, engineering firm Hermann Ultraschall bought the rights to develop a patented ultrasonic paper sealing technology, a process which it likens to welding.
"We are really actively at the moment in discussion with several really big players in the market with the focus of bringing this technology into mass production," says Michael Baumann, the company's head of business development packaging.
"One customer told me this is an innovation they have never seen before."
Yet these seemingly simple solutions stem from complex technology, so naturally, there are challenges.
Firstly, it's not as simple as simply getting product manufacturers and packaging companies to swap out their old packaging for these new options. It requires updating, and in some cases, completely replacing, existing machinery, which can be costly and time consuming.
"The packaging industry has existing machines which are all designed for glue materials. Some kind of redesign is probably necessary, and this is our biggest challenge," says Hermann Ultraschall's Baumann.
Yet Volker Franke, also a research group leader at Fraunhofer, is confident that those existing machines can be modified by integrating the laser module that PAPURE has been developing.
They both acknowledge that the production rate is also currently much slower than that for paper packaging that uses adhesives, but Franke says a key benefit PAPURE is selling is fully automated production, which he believes can continue to be developed for speed.
The other issue is that the technologies don't work on all types of paper.
"It's not possible to bond every paper material," Baumann confirms. "But we are actively in discussion with paper manufacturers about how they can produce a raw material in a way that makes it easy to bond."
PAPURE has also yet to find a way to apply their laser sealing technology to food-grade packaging, which needs a coating to protect the item. This tends to be why plastic is often favoured for packaging food.
But this is something Henkel, with both a consumer brand division, and adhesive technologies division, has cracked.
In February, Henkel announced the launch of the first cold seal solution that works with barrier coated paper, which is both recyclable and suitable for food products.
Barrier paper can be a difficult surface to bond, and using heat isn't suitable for heat sensitive food products like ice cream or chocolate. Hence the cold seal solution, in which enough pressure is applied for the barrier coated paper to be bonded against itself.
Henkel's cold seal solution is already available for packaging manufacturers to apply to barrier coated paper. It is already being used in snack and confectionery products, but Henkel could not say which ones.
Henkel had previously developed a heat seal solution for paper that is fully recyclable. This has enabled Italian brand Regina, for example, to switch from plastic to paper packaging for its hygiene products like toilet roll, kitchen paper and napkins.
"Since paper is already very established in the recycling infrastructure, it's a very obvious solution when we think about how we can improve the sustainability and recyclability of our packaging," explains Dr Arianna Savini. She's the market strategy manager for paper packaging Europe at Henkel's adhesive technologies division.
"This is really a system shift. You need to engage with all the players in the supply chain to enable this change. But there is good momentum in the industry now because of the PPWR deadline, so everyone is very active at the moment, trying to make this change."
Improving the recyclability of paper is also more straightforward than trying to do the same with plastic, she adds.
Jamie Stone is a packaging expert at global innovation consultancy PA Consulting. He explains that there's a lot that can go wrong when trying to marry recyclable paper packaging with a compatible sealant.
"For example, take a yoghurt pot made from folded paper fibre. You need a barrier layer between the paper fibre and the yoghurt to protect the shelf life, and you also need a secure lid. So, you're immediately dealing with multiple surfaces that all have to work together," says London-based Stone.
"If the barrier layer is a liner, which is best for recycling, it needs to be very thin. It also needs to bond really well to the paper fibre part. If it doesn't stick well enough, you risk pulling out the lining with the lid still attached – leaving a messy, partially sealed pot of yoghurt, which is clearly not a good consumer experience."
But there's also a bigger problem at play than a little glue. When paper doesn't get recycled it's more likely to be because of poor collection and sorting methods, argues Ambarish Mitra, co-founder of Greyparrot, a waste analytics platform used by big waste collection companies, as well as local authorities.
"A lot of paper and card doesn't get recycled because it gets dirty or mixed in with other rubbish before it even reaches a recycling plant, not because of the glue holding it together," says Mitra.
PA Consulting's Stone agrees, though, that new paper sealing technologies are "a smart place to start".
"We'll see the real sustainability benefits start to scale as technologies like these mature and begin to handle more complex, high-barrier paper-based packaging, while matching the speed and cost of plastic packaging lines," he concludes.
More Technology of Business
- Published3 July
- Published12 June
- Published26 June`,
    bodyJa: `紙に糊やラベルを使うのをやめる時期が来たのでしょうか?
- 公開されました
それはまさに文字通りの行き詰まりです。
紙やボール紙のパッケージ自体はリサイクル可能ですが、ラベル、シール、またはコーティングが施されているとリサイクルできなくなる可能性があります。
ノースカロライナ州立大学の外部の科学者らによると、リサイクル不可能な接着剤、つまり業界では「スティッキー」として知られているものは、リサイクル機械に損傷を与えたり、結果として得られる再生紙のバッチの品質を低下させたり、リサイクルされる紙のバッチが不合格になる可能性さえあるからだという。
紙はヨーロッパで最もリサイクルされた材料の一つであり、2024 年に消費される紙と板紙の約 74% がリサイクルされているため、これは残念なことです。
そして欧州当局は企業に対し、改善を促すよう促している。
8月には、欧州全土で新たな包装・外装・包装廃棄物規制（PPWR）が施行され、2030年までにすべての梱包材の最低70％がリサイクル可能でなければならず、2038年からは80％に引き上げられることになっている。さらに、ドイツの法律も対外的にはより厳格な報告とライセンス料を要求することになる。
したがって、付箋に取り組むと効果的です。解決策の 1 つは、水溶性の外部接着剤を開発することです。
しかし、接着剤を完全に省略できたらどうなるでしょうか?
これは、フラウンホーファー、ヘルマン ウルトラシャール、ヘンケルというドイツの 3 社が考案したアイデアです。
この国は包装産業の中心地であるパッケージングバレーで知られているため、彼らが全員ドイツ人であることは偶然ではありません。
革新に向けた彼らの取り組みは、商業リサイクルに関するますます強化される規制や、違反者に対する罰金の増加に対処するための取り組みの一部でもある。
これを念頭に置いて、ドイツの研究機関フラウンホーファーは、接着剤をまったく使用せずに紙パッケージをシールできるレーザーベースの加熱プロセスを開発するための PAPURE プロジェクトを 2023 年に設立しました。
プロジェクトが正式に終了する9月以降、フラウンホーファーはこの技術を市場に投入するための業界パートナーを見つけたいと考えている。フラウンホーファーの研究者らは、5月にデュッセルドルフで開催されたインターパック包装見本市で研究成果を展示し、彼らが集めた関心が実を結ぶことを期待している。
研究グループのリーダー、ファビアン・カヤツ氏は「異物を一切含まずに紙をシールする技術はあまりないので、これは素晴らしい技術であり、市場に投入できる可能性があると感じている」と語る。
「楽観的であれば、2年以内に最初の解決策が得られるでしょう。」
また2023年、エンジニアリング会社ヘルマン・ウルトラシャルは、特許を取得した超音波紙シール技術を開発する権利を購入した。この技術は溶接に例えられる。
同社のビジネス開発パッケージング責任者、マイケル・バウマン氏は「われわれは現在、この技術を量産化することに焦点を当てて、市場の大手数社と積極的に協議しているところだ」と述べた。
「ある顧客は、これは今まで見たことのないイノベーションだと言いました。」
しかし、これらの一見シンプルなソリューションは複雑なテクノロジーから生まれたものであるため、当然のことながら課題もあります。
まず、製品メーカーや包装会社に古いパッケージをこれらの新しいオプションに交換してもらうだけというほど単純ではありません。既存の機械を更新したり、場合によっては完全に交換したりする必要があり、費用と時間がかかる可能性があります。
「包装業界には、接着剤材料用に設計された既存の機械があります。何らかの再設計がおそらく必要であり、これが私たちの最大の課題です。」とヘルマン・ウルトラシャールのバウマン氏は言います。
しかし、フラウンホーファーの研究グループリーダーでもあるフォルカー・フランケ氏は、PAPUREが開発しているレーザーモジュールを統合することで、これらの既存の機械を改造できると確信している。
両氏とも、現在生産速度が接着剤を使用する紙包装の速度よりもはるかに遅いことを認めているが、フランケ氏は、PAPURE が売りにしている主な利点は完全に自動化された生産であり、速度向上のために開発を続けることができると信じていると述べた。
もう 1 つの問題は、このテクノロジーがすべての種類の紙で機能するとは限らないことです。
「すべての紙素材を接着することは不可能です」とバウマン氏は認めます。 「しかし、私たちは製紙メーカーと、接着を容易にする原料を製造する方法について積極的に話し合っています。」
また、PAPURE は、商品を保護するためにコーティングが必要な食品グレードの包装に自社のレーザー シーリング技術を適用する方法をまだ見つけていません。これが、食品の包装にプラスチックが好まれる理由です。
しかし、消費者向けブランド部門と接着技術部門の両方を持つヘンケルは、これを打ち破りました。
2月、ヘンケルは、リサイクル可能で食品に適したバリアコート紙を使用する初のコールドシールソリューションの発売を発表しました。
バリア紙は表面が接着しにくい場合があり、アイスクリームやチョコレートなどの熱に弱い食品には熱の使用は適していません。したがって、コールドシールソリューションでは、バリアコート紙がそれ自体に接着するのに十分な圧力が加えられます。
ヘンケルのコールドシール ソリューションは、包装メーカーがバリアコート紙に適用するためにすでに利用可能です。すでにスナックや菓子製品に使用されているが、ヘンケルはどの製品かは明らかにできなかった。
ヘンケルは以前、完全にリサイクル可能な紙用のヒートシール ソリューションを開発していました。これにより、たとえばイタリアのブランド、レジーナは、トイレットペーパー、キッチンペーパー、ナプキンなどの衛生用品のパッケージをプラスチックから紙に切り替えることが可能になりました。
「紙はすでにリサイクルインフラとして確立されているため、包装の持続可能性とリサイクル可能性をどのように改善できるかを考えるとき、これは非常に明白な解決策です」とアリアナ・サヴィーニ博士は説明します。彼女はヘンケルの接着技術部門で紙包装ヨーロッパの市場戦略マネージャーを務めています。
「これはまさにシステムの変化です。この変化を実現するには、サプライチェーン内のすべての関係者と協力する必要があります。しかし、PPWRの期限のせいで現在業界には良い勢いがあり、現時点では誰もがこの変化を起こそうと非常に積極的に取り組んでいます。」
紙のリサイクル性を改善することは、プラスチックで同じことを試みるよりも簡単である、と彼女は付け加えた。
ジェイミー ストーンは、世界的なイノベーション コンサルティング会社 PA Consulting のパッケージング専門家です。同氏は、リサイクル可能な紙製パッケージと互換性のあるシーラントを組み合わせようとすると、うまくいかないことがたくさんあると説明します。
「たとえば、折り畳まれた紙繊維で作られたヨーグルトポットを考えてみましょう。賞味期限を守るために紙繊維とヨーグルトの間にバリア層が必要で、安全な蓋も必要です。したがって、すぐに複数の表面を扱うことになり、すべてが連携して機能する必要があります」とロンドンを拠点とするストーン氏は言います。
「バリア層がリサイクルに最適なライナーの場合、それは非常に薄い必要があります。また、紙の繊維部分にしっかりと接着する必要があります。十分に接着しないと、蓋がついたまま裏地を引き抜く危険があり、汚れた、部分的に密閉されたヨーグルトのポットが残ります。これは明らかに消費者にとって良い体験ではありません。」
しかし、ちょっとした接着剤よりも大きな問題も潜んでいます。紙がリサイクルされない場合、その原因は不適切な収集と分別方法にある可能性が高いと、大手廃棄物収集会社や地方自治体が使用する廃棄物分析プラットフォームであるGreyparrotの共同創設者であるアンバリッシュ・ミトラ氏は主張する。
「多くの紙やカードがリサイクルされないのは、リサイクル工場に届く前に汚れたり、他のゴミと混ざったりするためであり、接着剤でくっついているためではありません」とミトラ氏は言う。
しかし、PA Consulting の Stone 氏は、新しい紙封緘技術は「賢明なスタート地点」であることに同意します。
「このような技術が成熟し、プラスチック包装ラインの速度とコストに匹敵しながら、より複雑で高バリア性の紙ベースの包装を処理し始めるにつれて、本当の持続可能性の利点が拡大し始めることがわかります」と彼は結論づけています。
ビジネスのさらなるテクノロジー
- 7 月 3 日発行
- 6 月 12 日発行
- 6 月 26 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c872nj1n4xyo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-27T23:00:06+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/fe81/live/c5a82ce0-7aad-11f1-b976-0b9c15b0ccfc.jpg",
    readTime: 9,
  },
  {
    id: "time-will-tell-whether-that-was-a-good-e7619560",
    title: "‘Time will tell whether that was a good bet’: My adviser got me a full SpaceX IPO allocation. Was I lucky?",
    titleJa: "「それが良い賭けだったかどうかは時間が経てば分かるだろう」：私のアドバイザーは私にSpaceXのIPO割り当てを全額与えてくれました。私は幸運でしたか？",
    summaryJa: "「投資家は、たとえ受け取ったとしても、要求した株式のほんの一部しか受け取らないことがよくあります。」",
    bodyOriginal: `“Investors frequently receive only a small fraction of the shares they request — if they receive any at all.”`,
    bodyJa: `「投資家は、たとえ受け取ったとしても、要求した株式のほんの一部しか受け取らないことがよくあります。」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/time-will-tell-whether-that-was-a-good-bet-my-adviser-got-me-a-full-spacex-ipo-allocation-was-i-lucky-7f319645?mod=mw_rss_topstories",
    publishedAt: "2026-07-27T22:30:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-88578279",
    readTime: 2,
  },
  {
    id: "trump-administration-asks-supreme-court-e9ed38a7",
    title: "Trump administration asks Supreme Court to intervene to allow mail-in voting restrictions",
    titleJa: "トランプ政権、最高裁に郵便投票制限の許可への介入を要請",
    summaryJa: "トランプ政権は月曜日、最高裁判所に対し、郵便投票を制限するドナルド・トランプ大統領の大統領令をめぐる法廷闘争への介入を要請し、11月の中間選挙の99日前に争いが激化した。この緊急要請は、連邦控訴裁判所が土曜日の2対1の判決で、連邦政府機関に有権者資格リストを作成し、そのリストに紐付けられていない投票用紙の米郵便公社の配達を制限するよう指示する3月に発令されたトランプ大統領令の主要部分を阻止する命令を据え置いたことを受けて出された。",
    bodyOriginal: `The Trump administration on Monday asked the Supreme Court to intervene in a legal fight over President Donald Trump's executive order restricting mail-in voting, escalating the dispute 99 days before the November midterm elections.
The emergency request came after a federal appeals court, in a 2-1 decision Saturday, left in place an order blocking key parts of Trump's executive order issued in March that directs federal agencies to create voter eligibility lists and restrict U.S. Postal Service delivery of ballots not tied to those lists.
A coalition of 23 states argue Trump lacks authority to impose federal rules on elections administered by state and local officials.
The Department of Justice argued that the challenge was premature because agencies had not finalized the policies needed to carry out Trump's order. But the 1st U.S. Circuit Court of Appeals said states were already being forced to prepare for changes that could affect upcoming elections.
The majority said the order would impose "unprecedented levels of involvement by federal officials in how states administer elections" and risk confusion and voter disenfranchisement.
"We look forward to filing our response to the government's application in the U.S. Supreme Court by the deadline set by Justice Jackson," Walter Garcia, a spokesperson for California Attorney General Rob Bonta, said in a statement. California was one of the states that co-led the coalition.
The ruling applies only to the states covered by the lawsuit. A separate federal appeals court in Washington, D.C., recently lifted a broader injunction against the Postal Service rule, leaving open the possibility that the Postal Service could implement the restrictions elsewhere.
Trump and his allies have promoted the changes as safeguards against illegal voting. Democrats and voting-rights groups say the order could prevent eligible voters from receiving or returning mail ballots.
The change is one component of the effort Trump is leading in the months leading up to the Nov. 3 election to make sweeping changes to how elections are conducted in the U.S. He has also been pressing Congress to pass legislation to impose a national voter-ID requirement to vote and proof of citizenship to register to vote.
The Constitution directs states, rather than the federal government, to administer most election oversight.
The White House and Justice Department did not immediately respond to requests for comment.`,
    bodyJa: `トランプ政権は月曜日、最高裁判所に対し、郵便投票を制限するドナルド・トランプ大統領の大統領令をめぐる法廷闘争への介入を要請し、11月の中間選挙の99日前に争いが激化した。
この緊急要請は、連邦控訴裁判所が土曜日の2対1の判決で、連邦政府機関に有権者資格リストを作成し、そのリストに紐付けられていない投票用紙の米郵便公社の配達を制限するよう指示する3月に発令されたトランプ大統領令の主要部分を阻止する命令を据え置いたことを受けて出された。
２３州の連合は、トランプ氏には州・地方当局が管理する選挙に連邦規則を課す権限がないと主張している。
司法省は、政府機関がトランプ大統領の命令を遂行するために必要な政策を最終決定していないため、異議申し立ては時期尚早だと主張した。しかし、米国第1巡回控訴裁判所は、各州はすでに今後の選挙に影響を与える可能性のある変更への準備を迫られていると述べた。
多数派は、この命令により「州の選挙管理方法に対する連邦当局による前例のないレベルの関与」が課せられ、混乱と有権者の権利剥奪の危険があると述べた。
カリフォルニア州司法長官ロブ・ボンタの報道官ウォルター・ガルシア氏は声明で、「政府の申請に対する回答をジャクソン判事が定めた期限までに連邦最高裁判所に提出することを楽しみにしている」と述べた。カリフォルニア州は連立政権を共同主導した州の一つだった。
この判決は訴訟の対象となっている州にのみ適用される。ワシントンD.C.の別の連邦控訴裁判所は最近、郵政公社規則に対する広範な差し止め命令を取り消し、郵政公社が他の場所でも制限を実施する可能性が残った。
トランプ大統領とその同盟者らは、違法投票に対する保護策としてこの変更を推進してきた。民主党と投票権団体は、この命令により有権者が郵便投票用紙を受け取ったり返送したりできなくなる可能性があると主張している。
この変更は、11月3日の選挙に向けてトランプ大統領が主導し、米国での選挙の実施方法に抜本的な変更を加える取り組みの一環である。トランプ大統領はまた、投票する際に国民の有権者IDを義務付け、有権者登録する際に市民権の証明を義務付ける法案を可決するよう議会に求めている。
憲法は、選挙監視のほとんどを連邦政府ではなく州に行うよう指示している。
ホワイトハウスと司法省はコメント要請に応じていない。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/27/trump-supreme-court-mail-in-voting-restrictions.html",
    publishedAt: "2026-07-27T22:23:50+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "some-people-s-chats-with-claude-ai-found-557e0f6f",
    title: "Some people's chats with Claude AI found publicly available online",
    titleJa: "クロード AI との一部の人々のチャットがオンラインで公開されていることが判明",
    summaryJa: "クロード AI との一部の人々のチャットがオンラインで公開されていることが判明- 公開されました",
    bodyOriginal: `Some people's chats with Claude AI found publicly available online
- Published
Hundreds of user conversations with Anthropic's popular artificial intelligence (AI) chatbot Claude were found to have been available to essentially anyone using Google or other web browsers.
Links to the chats, some of which included personal and work information, would show up if a user of a search engine like Google used a site-specific search term.
The searches showed Claude chats for which a user had decided to "share" a link had been saved by search engines like Google, leaving them accessible to the broader public.
The search availability of the chat logs was removed over the weekend, but many were saved and shared widely online.
A spokeswoman for Anthropic said that Claude users maintained control over if and when to share conversations they had with the chatbot.
She said links to conversations were "not guessable or discoverable unless people choose to share them themselves".
"When someone shares a conversation, they are making that content publicly accessible, and like other public web content, it may be archived by third-party services," the spokeswoman added.
The share option within Claude tells a user that "anyone with the link" may view the contents of that link, but does not explicitly state that the link may end up in Google and search results.
Users on Reddit initially discovered, external the publicly available chats, which covered more than 200 conversations with Claude across at least 25 pages of search results - some taking place just weeks ago.
In the conversations, users prompted the chatbot to respond to a wide array of topics.
Chat logs include a user asking Claude last year whether it wanted "to help me or do you want to help anthropic more?". The chatbot responded in part, saying "I experience something like wanting to help you".
In one conversation from April, a user prompted Claude to draft an unpublished blog post about cloud security involving details of a corporate project. In another from last month, a user asked Claude how to "become become Nine-tailed fox?", before clarifying they wanted to literally transform from human to the creature.
Claude first tried to show the user an AI-generated image claiming they had been given "fully functional fox powers!".
Other conversations with Claude included users seeking help with their resumes, including their names, contact information and work history. Some users even conducted what appeared to be proprietary research for their work, such as in healthcare, including transcripts of private conversations.
When OpenAI last year experienced an almost identical issue with ChatGPT chat logs being made publicly accessible, external, the company ultimately changed, external the ease with which such logs were accessible.
Grok, the AI chatbot within X, the social platform owned by Elon Musk, also last year saw hundreds of thousands of chat logs made publicly available though online search.
A spokesman for Google made clear to the BBC that the company does not control "what pages are made public on the web," saying instead that action comes from websites.
"We give site owners clear controls to decide whether pages can be crawled or indexed, and we always respect those directives."
As the search indexing of the chat logs is no longer occurring, it is likely Anthropic used available tools to quickly block the chat log links from search results. Google's process for a website owner to block a link, external is straightforward, but must be initiated by a website owner.
Other search engines like Bing, Brave and Duck Duck Go, through which the Claude chat logs also appeared, were approached for comment.`,
    bodyJa: `クロード AI との一部の人々のチャットがオンラインで公開されていることが判明
- 公開されました
Anthropic の人気の人工知能 (AI) チャットボットである Claude との数百件のユーザー会話は、Google またはその他の Web ブラウザーを使用している実質的に誰でも利用できたことが判明しました。
Google などの検索エンジンのユーザーがサイト固有の検索用語を使用すると、チャットへのリンクが表示されます。その中には個人情報や仕事上の情報も含まれていました。
検索の結果、ユーザーがリンクを「共有」することにしたクロードのチャットが Google などの検索エンジンによって保存され、広く一般の人々がアクセスできる状態になっていたことが判明した。
チャット ログの検索機能は週末に削除されましたが、多くは保存され、オンラインで広く共有されました。
Anthropic の広報担当者は、Claude のユーザーは、チャットボットとの会話を共有するかどうか、いつ共有するかについて制御を維持していると述べました。
彼女は、会話へのリンクは「人々が自ら共有することを選択しない限り、推測したり発見したりすることはできない」と述べた。
「誰かが会話を共有すると、そのコンテンツは一般にアクセスできるようになり、他の公開ウェブコンテンツと同様に、サードパーティのサービスによってアーカイブされる可能性がある」と広報担当者は付け加えた。
Claude 内の共有オプションは、「リンクを知っている人なら誰でも」そのリンクのコンテンツを閲覧できることをユーザーに伝えますが、そのリンクが Google や検索結果に表示される可能性があるとは明示的には述べていません。
Reddit のユーザーは当初、公開されているチャットの外部で、検索結果の少なくとも 25 ページにわたってクロードとの 200 以上の会話をカバーしていることを発見しました。その一部はほんの数週間前に行われたものでした。
会話の中で、ユーザーはチャットボットにさまざまなトピックに応答するよう促しました。
チャットログには、昨年クロードに「私を助けたいですか？それとも人類をもっと助けたいですか？」と尋ねたユーザーが含まれている。チャットボットは「あなたを助けたいという気持ちに似たものを感じます」と部分的に反応しました。
4 月のある会話で、ユーザーはクロードに対し、企業プロジェクトの詳細を含むクラウド セキュリティに関する未公開のブログ投稿の下書きをするよう促しました。先月の別の記事では、ユーザーがクロードに「九尾の狐になる方法は？」と質問し、文字通り人間から生き物に変身したいと明らかにした。
クロードはまず、ユーザーに「完全に機能するキツネの力」を与えられたと主張する AI 生成の画像を見せようとしました。
クロードとのその他の会話には、名前、連絡先、職歴を含む履歴書についてのサポートを求めているユーザーも含まれていました。一部のユーザーは、プライベートな会話の記録など、医療分野などの仕事のために独自の研究と思われる調査を行っていました。
OpenAI が昨年、ChatGPT チャット ログが外部から公開されているというほぼ同様の問題を経験したとき、同社は最終的に、そのようなログへのアクセスの容易さを外部から変えました。
イーロン・マスク氏が所有するソーシャルプラットフォームであるX内のAIチャットボットであるGrokも昨年、数十万件のチャットログがオンライン検索を通じて公開された。
Googleの広報担当者はBBCに対し、同社は「ウェブ上でどのページを公開するか」を管理していないと明言し、その代わりに行動はウェブサイトから来ると述べた。
「私たちはサイト所有者に、ページをクロールまたはインデックス登録できるかどうかを決定するための明確な制御を提供しており、それらの指示を常に尊重します。」
チャット ログの検索インデックス作成が行われなくなったため、Anthropic は利用可能なツールを使用してチャット ログのリンクを検索結果から迅速にブロックした可能性があります。ウェブサイト所有者が外部リンクをブロックする Google のプロセスは簡単ですが、ウェブサイト所有者が開始する必要があります。
Bing、Brave、Duck Duck Go などの他の検索エンジンにも、クロードのチャット ログが表示され、コメントを求められました。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cly5qgjk5ywo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-27T22:14:04+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/98ad/live/107ee220-8a00-11f1-bf17-1d06aa0f4f93.jpg",
    readTime: 5,
  },
  {
    id: "it-s-a-high-price-to-pay-my-adviser-say-61480baf",
    title: "‘It’s a high price to pay’: My adviser says I don’t need a withdrawal plan for my $2.3 million portfolio. Is he right?",
    titleJa: "「支払うのは高い代償だ」: 私のアドバイザーは、私の 230 万ドルのポートフォリオには引き出し計画は必要ないと言いました。彼は正しいですか？",
    summaryJa: "「彼の提案には、私の資産70万ドルを管理するための独自の株式ヘッジ戦略が含まれています。」",
    bodyOriginal: `“His proposal involves a proprietary equity hedge strategy to manage $700,000 of my assets.”`,
    bodyJa: `「彼の提案には、私の資産70万ドルを管理するための独自の株式ヘッジ戦略が含まれています。」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/its-a-high-price-to-pay-my-adviser-says-i-dont-need-a-withdrawal-plan-for-my-2-3-million-portfolio-is-he-right-06cb1eb2?mod=mw_rss_topstories",
    publishedAt: "2026-07-27T22:00:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-22873977",
    readTime: 2,
  },
  {
    id: "more-cracks-emerge-in-ai-related-bonds-a-ebe62d37",
    title: "More cracks emerge in AI-related bonds as Meta, Microsoft earnings loom",
    titleJa: "メタとマイクロソフトの収益が迫る中、AI関連債券にさらなる亀裂が浮上",
    summaryJa: "「資金はどこかから来なければならない」とシットのブライス・ドティ氏は、AIによる債券供給とその他の債券市場への重圧について語る。",
    bodyOriginal: `‘The money has to come from somewhere,’ says Bryce Doty at Sit, of pressure heavy AI-debt supply and the rest of the bond market`,
    bodyJa: `「資金はどこかから来なければならない」とシットのブライス・ドティ氏は、AIによる債券供給とその他の債券市場への重圧について語る。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/more-cracks-emerge-in-ai-related-bonds-as-meta-microsoft-earnings-loom-04275db2?mod=mw_rss_topstories",
    publishedAt: "2026-07-27T21:35:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-62652088",
    readTime: 2,
  },
  {
    id: "apple-ends-day-as-world-s-most-valuable-db2613a1",
    title: "Apple ends day as world's most valuable company, passing Nvidia",
    titleJa: "Apple、Nvidiaを抜いて世界で最も価値のある企業として一日を終える",
    summaryJa: "Appleは月曜日、世界で最も価値のある企業の称号でNvidiaを抜き、iPhoneメーカーが2025年4月以来初めて市場終値で人工知能チップ企業のトップに立った。投資家がAI構築に関連する多額の費用に懸念を示し、AIチップ株全体が下落したため、エヌビディアの株価は月曜日に5%下落し、チップメーカーの評価額は4兆7700億ドルとなった。",
    bodyOriginal: `Apple passed Nvidia on Monday for the title of world's most valuable company, with the iPhone maker topping the artificial intelligence chip firm at market close for the first time since April 2025.
Shares of Nvidia fell 5% on Monday, giving the chipmaker a valuation of $4.77 trillion, as AI chip stocks in general declined as investors fret about large costs related to the AI buildout.
Meanwhile, Apple shares rose 1%, giving it a market cap of $4.95 trillion, ahead of the company's highly-anticipated earnings on Thursday.
Nvidia had held the top spot as the most valuable company since June 2025, when it took the crown from Microsoft, and it briefly held a $5 trillion capitalization in October.
So far in 2026, Nvidia's shares have only climbed 4% while Apple's are up 24%. Apple has outperformed the market as investors have rewarded its reluctance to spend heavily on capital expenditures for AI, preferring to rent capacity instead of building its own.
While Nvidia's sales are now in the third year of massive AI-driven growth, many investors have switched their focus from AI chips called graphics processing units to memory chips and other data center infrastructure that benefit from the AI boom, such as Micron Technology, SK Hynix, and Sandisk.
Apple will report fiscal third-quarter earnings on Thursday, in which the iPhone maker is expected to reveal for the first time some of the financial impacts from the AI-driven global memory chip shortage, which forced the company to raise Mac and iPad prices in June.`,
    bodyJa: `Appleは月曜日、世界で最も価値のある企業の称号でNvidiaを抜き、iPhoneメーカーが2025年4月以来初めて市場終値で人工知能チップ企業のトップに立った。
投資家がAI構築に関連する多額の費用に懸念を示し、AIチップ株全体が下落したため、エヌビディアの株価は月曜日に5%下落し、チップメーカーの評価額は4兆7700億ドルとなった。
一方、アップル株は１％上昇し、時価総額は４兆９５００億ドルとなり、木曜日の同社の期待されていた決算を上回った。
Nvidiaは2025年6月にMicrosoftから王座を奪って以来、最も価値のある企業としてトップの座を維持しており、10月には一時的に資本金5兆ドルを維持した。
2026年のこれまでのところ、Nvidiaの株価は4%しか上昇していないのに対し、Appleの株価は24%上昇している。 Appleは、投資家がAI向けの設備投資に多額の投資を渋り、自社で容量を構築する代わりに容量を借りることを好んだことが報われ、市場のパフォーマンスを上回っている。
Nvidiaの売上高はAI主導で大幅に成長して3年目に入っているが、多くの投資家はグラフィックス・プロセッシング・ユニットと呼ばれるAIチップから、マイクロン・テクノロジー、SKハイニックス、サンディスクなど、AIブームの恩恵を受けるメモリーチップやその他のデータセンター・インフラストラクチャに焦点を切り替えている。
Appleは木曜日に第3四半期決算を報告する予定で、その中でiPhoneメーカーは、同社が6月にMacとiPadの価格引き上げを余儀なくされたAI主導の世界的なメモリチップ不足による財務への影響の一部を初めて明らかにすると予想されている。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/27/apple-most-valuable-company-nvidia.html",
    publishedAt: "2026-07-27T21:12:26+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "trump-says-u-s-has-sold-more-than-13-bil-aba95831",
    title: "Trump says U.S. has sold more than $13 billion of Venezuela oil",
    titleJa: "トランプ大統領、米国は130億ドル以上のベネズエラ原油を売却したと発言",
    summaryJa: "ドナルド・トランプ大統領は月曜日、米国は今年130億ドル以上のベネズエラ産原油を販売したと述べた。米国は1月3日の軍事襲撃でニコラス・マドゥロ前大統領を拘束した後、ベネズエラ石油輸出の管理を掌握した。トランプ大統領は、政権が売却から集めた金額を見積もったフィナンシャル・タイムズ紙の報道に関する質問に答えていた。",
    bodyOriginal: `President Donald Trump said Monday that the U.S. has sold more than $13 billion of Venezuelan oil this year.
The U.S. seized control of Venezuela's oil exports after capturing former President Nicolas Maduro in a military raid on January 3. Trump was responding to a question about a Financial Times' report that estimated how much money his administration had collected from the sales.
"$13 billion from Venezuela? I think even more than that," the president told reporters aboard Air Force One as he traveled to Michigan to tour a General Motors' facility. "We've paid for that war many times over."
Democrats in Congress have pressed the Trump administration to disclose how much money it has collected from the sales, how the funds are spent, and how the program is monitored.
Energy Secretary Chris Wright told Semafor in an April interview that the U.S. had sold around 150 million barrels of Venezuelan oil since January.
This is a developing story. Please check back for updates.`,
    bodyJa: `ドナルド・トランプ大統領は月曜日、米国は今年130億ドル以上のベネズエラ産原油を販売したと述べた。
米国は1月3日の軍事襲撃でニコラス・マドゥロ前大統領を拘束した後、ベネズエラ石油輸出の管理を掌握した。トランプ大統領は、政権が売却から集めた金額を見積もったフィナンシャル・タイムズ紙の報道に関する質問に答えていた。
「ベネズエラから130億ドル？私はそれよりも多いと思う」と大統領は、ゼネラル・モーターズの施設を視察するためミシガン州を訪れた際、エアフォース・ワンの機内で記者団に語った。 「私たちはその戦争の代償を何倍にもわたって支払ってきました。」
議会民主党はトランプ政権に対し、販売で集めた金額、資金の使途、プログラムの監視方法などを明らかにするよう求めている。
クリス・ライト・エネルギー長官は4月のセマフォーとのインタビューで、米国は1月以来約1億5000万バレルのベネズエラ産原油を販売したと語った。
これは発展途上の物語です。最新情報を再度ご確認ください。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/27/trump-says-us-has-sold-more-than-13-billion-of-venezuela-oil-.html",
    publishedAt: "2026-07-27T19:39:37+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "crypto-stocks-rally-thanks-to-rotation-f-36df18ff",
    title: "Crypto stocks rally thanks to rotation from AI infrastructure; bitcoin miners lag",
    titleJa: "AIインフラによるローテーションのおかげで仮想通貨株は上昇。ビットコインマイナーの遅れ",
    summaryJa: "市場全体が売られ、資本がチップやAIインフラストラクチャーの名前から離れていく中、月曜日の上昇率上位には仮想通貨株の一部が含まれた。月曜の最新情報によると、ビットマイン・イマージョンがグループをリードし、イーサ・アキュムレーターが現在の価格で約1940万ドル相当の仮想通貨の保有を1万コイン近く増やした後、11％急騰した。同じETH財務会社シャープリンク・ゲーミングは6％上昇した。",
    bodyOriginal: `Crypto stocks were some of the top gainers Monday as the broader market sold off and capital rotated away from chip and AI infrastructure names.
Bitmine Immersion led the group, surging 11% after the ether accumulator increased its holdings of the cryptocurrency by nearly 10,000 coins worth about $19.4 million at current prices, according to a Monday update. Fellow ETH treasury firm Sharplink Gaming jumped 6%.
Bitcoin treasury pioneer Strategy was up 7% after it added to its cash buffer for a fifth straight week rather than buy bitcoin.
Coinbase Global, BitGo and Figure Technology were all up between 4% and 6%.
Stablecoin issuer Circle Internet Group gained 2% after announcing it has acquired IBM's portfolio of more than 1,000 blockchain-related patents worldwide. It did not disclose details of the acquisition.
The sector-wide move came amid a sharp sell-off in oil prices, lower Treasury yields and continued risk-off approach to memory chip stocks and other, direct AI plays.
"Today's weakness partly reflects concern around capex requirements and whether companies across the miner-to-AI group may need to raise incremental capital at higher costs to fund their development pipelines," Donovan told CNBC.
Chip and AI infrastructure stocks were under pressure as concern over circular financing spread, along with intensifying competition from Chinese semiconductor companies. The resulting risk repricing accelerated capital rotation into alternative themes, including crypto, said Owen Lau, analyst at ClearStreet.
AI-exposed bitcoin miners were uniformly in the red.
Cipher Mining led the group with an 8% decline. Hut 8 and Terawulf fell 6% and 4%, respectively. The weakness even extended to pure play bitcoin miners. Riot Platforms lost 5%, Mara Holdings sank 3% and CleanSpark was lower by 4%. Core Scientific, which has mostly pivoted away from bitcoin mining, was down 9%.
Nvidia's reported discussions to provide financial support for OpenAI's plan to lease a new AI data center in Ohio underscored the growing role of credit in enabling the AI investment, said Michael Donovan, senior research analyst at Compass Point.
Most publicly traded bitcoin miners are increasingly valued by investors as owners of digital infrastructure rather than merely producers of bitcoin, given their power capacity, data center assets and energy contracts.
As a result, even pure-play bitcoin miners like Mara Holdings and Riot Platforms can sell off alongside AI-exposed miners. These names often trade together, through thematic baskets, sector ETFs and algorithmic positioning that creates broad moves across the whole mining sector.
"Some investors are questioning whether credit appetite for these projects is approaching its limits and which developers can fund their pipelines without meaningful dilution, expensive debt or additional support from customers and strategic partners," Donovan added. "That may create a near-term overhang for the group, even though we continue to view the base compute infrastructure segment of AI as attractive and structurally supply-constrained."
Bitcoin itself was little changed, standing below the $65,000 level. Ether was higher by more than 1% at about $1,900.`,
    bodyJa: `市場全体が売られ、資本がチップやAIインフラストラクチャーの名前から離れていく中、月曜日の上昇率上位には仮想通貨株の一部が含まれた。
月曜の最新情報によると、ビットマイン・イマージョンがグループをリードし、イーサ・アキュムレーターが現在の価格で約1940万ドル相当の仮想通貨の保有を1万コイン近く増やした後、11％急騰した。同じETH財務会社シャープリンク・ゲーミングは6％上昇した。
ビットコイントレジャリーのパイオニアであるストラテジーは、ビットコインを購入するのではなく、5週連続でキャッシュバッファーを増やした後、7％上昇した。
コインベース・グローバル、ビットゴー、フィギュア・テクノロジーはいずれも４─６％上昇した。
ステーブルコイン発行会社サークル・インターネット・グループは、世界中で1,000以上のブロックチェーン関連特許を保有するIBMのポートフォリオを取得したと発表し、2％上昇した。買収の詳細については明らかにしていない。
このセクター全体の動きは、原油価格の急落、米国債利回りの低下、メモリーチップ株やその他のAIへの直接的な取り組みに対するリスクオフアプローチの継続の中で起こった。
ドノバン氏はCNBCに対し、「今日の低迷は、設備投資要件や、マイナーからAIまでのグループ全体の企業が開発パイプラインに資金を提供するために、より高いコストで追加資本を調達する必要があるのではないかという懸念を部分的に反映している」と語った。
中国の半導体企業との競争激化に加え、循環型資金調達への懸念が広がり、チップやＡＩインフラ株が圧迫された。クリアストリートのアナリスト、オーウェン・ラウ氏は、その結果生じたリスク価格の再設定により、仮想通貨を含む代替テーマへの資金回転が加速したと述べた。
AIにさらされたビットコインマイナーは一様に赤字となった。
サイファー・マイニングが8％下落しグループをリードした。ハット８とテラウルフはそれぞれ６％、４％下落した。この脆弱性は純粋なビットコインマイナーにも及んでいました。ライオット・プラットフォームズは５％下落、マラ・ホールディングスは３％下落、クリーンスパークは４％下落した。ビットコインマイニングからほぼ撤退したコア・サイエンティフィックは9％下落した。
コンパス・ポイントのシニア・リサーチ・アナリスト、マイケル・ドノバン氏は、オハイオ州に新たなAIデータセンターをリースするというOpenAIの計画に資金面で支援を提供するためのNVIDIAの協議の報告は、AI投資を可能にする上で信用の役割が増大していることを浮き彫りにしていると述べた。
上場しているビットコインマイナーのほとんどは、電力容量、データセンター資産、エネルギー契約を考慮すると、単なるビットコインの生産者ではなく、デジタルインフラストラクチャの所有者として投資家からの評価が高まっています。
その結果、Mara Holdings や Riot Platforms のような純粋なビットコインマイナーも、AI にさらされたマイナーと並行して売却される可能性があります。これらの銘柄は、テーマ別バスケット、セクターETF、鉱業セクター全体に広範な動きを生み出すアルゴリズムによるポジショニングを通じて、一緒に取引されることがよくあります。
「一部の投資家は、これらのプロジェクトに対する信用需要が限界に近づいているのではないか、また、重大な希薄化や高額な負債、あるいは顧客や戦略的パートナーからの追加支援なしにどの開発者がパイプラインに資金を提供できるのか疑問に思っている」とドノバン氏は付け加えた。 「当社はAIのベースコンピューティングインフラストラクチャセグメントが魅力的であり、構造的に供給が制約されていると引き続き見ているにもかかわらず、このことがグループに短期的なオーバーハングをもたらす可能性があります。」
ビットコイン自体はほとんど変わらず、65,000ドルの水準を下回った。イーサは１％超上昇し約１９００ドルとなった。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/27/crypto-stocks-rally-thanks-to-rotation-from-ai-infrastructure-bitcoin-miners-lag.html",
    publishedAt: "2026-07-27T19:14:30+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "i-know-what-he-wants-to-do-trump-says-o-1a6ae690",
    title: "‘I know what he wants to do,’ Trump says of Fed’s Warsh, as president presses for rate cuts",
    titleJa: "大統領が利下げを迫るなか、トランプ大統領はFRBのウォーシュ氏について「彼が何をしたいのかはわかっている」と語る",
    summaryJa: "ケビン・ウォーシュ新FRB議長は「正しいことをしたい」が、FRB理事会が反対する可能性があると大統領は述べた。",
    bodyOriginal: `New Federal Reserve Chair Kevin Warsh “wants to do the right thing” but is facing a Fed board that might oppose him, the president said.`,
    bodyJa: `ケビン・ウォーシュ新FRB議長は「正しいことをしたい」が、FRB理事会が反対する可能性があると大統領は述べた。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/i-know-what-he-wants-to-do-trump-says-of-feds-warsh-as-president-presses-for-rate-cuts-edaa115e?mod=mw_rss_topstories",
    publishedAt: "2026-07-27T19:06:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-76860654",
    readTime: 2,
  },
  {
    id: "cracker-barrel-chief-executive-steps-dow-802c9533",
    title: "Cracker Barrel chief executive steps down a year after rebrand chaos",
    titleJa: "クラッカー・バレルの最高経営責任者、ブランド変更の混乱から1年で辞任",
    summaryJa: "クラッカー・バレルの最高経営責任者、ブランド変更の混乱から1年で辞任- 公開されました",
    bodyOriginal: `Cracker Barrel chief executive steps down a year after rebrand chaos
- Published
Cracker Barrel's chief executive is quitting a year after the company faced a widespread backlash over its controversial rebrand.
The restaurant chain said on Monday Julie Masino will leave in August, with the former boss of Bloomin' Brands, David Deno, taking over.
Its rebrand sparked a national controversy, with critics including President Trump, who urged the chain to restore its original logo after critics accused it of abandoning its heritage.
Masino did not issue a statement about her resignation, but Cracker Barrel's management thanked her for her tenure.
Masino will be paid an estimated $4.6m as part of a departure package, according to the company's 8-K filing, external. Cracker Barrel declined to comment, referring the BBC instead to the filing.
The leadership change comes after a turbulent period for the business, which runs nearly 660 country-themed store and restaurants sites across 44 US states.
Plans to simplify the classic logo and modernise store interiors sparked fierce resistance from loyal diners who argued the changes stripped away the brand's nostalgic Southern charm.
It follows a similar uproar in 2022 when Cracker Barrel faced online backlash from some customers after adding plant-based sausages to its breakfast menu.
Such controversies highlight the delicate balance facing brands hoping to attract younger audiences without alienating their core, longstanding customer base. Critics described the latest rebrand as "soulless" and "generic".
Jo-Ellen Pozner, an associate professor at Santa Clara University's Leavey School of Business, said the leadership swap "seems to reflect the polarization many Americans feel today".
She added that doubling down on conservative values may help win back vocal loyalists but "paints the company into a corner".
"Changing anything about the menu, decor, or branding at this point is dangerous, so there are few levers to attract new customers," Pozner said.
President Trump later congratulated the chain on its reversal, external.
In his own statement on the transition, Deno paid tribute to Cracker Barrel's "deep connection with guests across generations".
In addition to public scrutiny, Cracker Barrel has struggled financially.
Shares of the Tennessee-based chain fell by more than 2% after Monday's announcement and are still around a fifth lower than this time last year.
Cracker Barrel's shares have struggled because sales are falling and customer traffic is slowing, all while restaurants grapple with soaring costs.
The transition comes as Cracker Barrel faces fierce competition from chains like Denny's and IHOP, which have been fighting to take market share among budget-conscious diners seeking classic American comfort food.
Masino will stay at the company until October to help Deno through the transition.`,
    bodyJa: `クラッカー・バレルの最高経営責任者、ブランド変更の混乱から1年で辞任
- 公開されました
クラッカー・バレルの最高経営責任者（CEO）は、同社が物議を醸したブランド変更に対する広範な反発に直面してから1年後に辞任する。
レストランチェーンは月曜日、ジュリー・マシノ氏が8月に退社し、ブルーミン・ブランズの元社長デビッド・デノ氏が後任に就任すると発表した。
ブランド変更は全国的な論争を引き起こし、トランプ大統領を含む批評家は、批評家らが伝統を放棄したと非難した後、同チェーンに元のロゴを復元するよう求めた。
マシノ氏は辞任について声明を発表しなかったが、クラッカーバレルの経営陣は彼女の在職期間に感謝の意を表した。
同社の8-K提出書類によると、マシノ氏には退社パッケージの一部として推定460万ドルが支払われる予定だという。クラッカー・バレル氏はコメントを拒否し、代わりにBBCにこの申請について言及した。
この経営陣の交代は、米国44州で国をテーマにした約660の店舗とレストランのサイトを運営する同社にとって激動の時期を経て行われた。
古典的なロゴを簡素化し、店舗の内装を近代化する計画は、この変更がブランドのノスタルジックな南部の魅力を奪うと主張し、忠実なダイナーからの激しい抵抗を引き起こした。
これは、2022年にクラッカーバレルが植物由来のソーセージを朝食メニューに加えた後、一部の顧客からネット上で反発に直面した同様の騒動に続くものだ。
このような論争は、中核となる長年の顧客ベースを遠ざけることなく、若い視聴者を引きつけたいと願うブランドが直面する微妙なバランスを浮き彫りにしている。批評家たちは、最新のブランド変更を「魂のない」「ありきたりなもの」と評した。
サンタクララ大学リービー経営大学院のジョーエレン・ポズナー准教授は、今回の指導者の交代は「多くの米国人が今日感じている二極化を反映しているようだ」と述べた。
同氏は、保守的な価値観を倍増させることは声高な支持者を取り戻すのには役立つかもしれないが、「会社を追い詰める」と付け加えた。
ポズナー氏は、「現時点でメニュー、装飾、ブランディングなどを変更するのは危険なので、新規顧客を引きつける手段はほとんどない」と語った。
トランプ大統領はその後、対外的に同チェーンの反転を祝福した。
デノ氏は移行に関する自身の声明の中で、クラッカー・バレルの「世代を超えたゲストとの深いつながり」に敬意を表した。
世間の注目に加えて、クラッカーバレルは財政的にも苦戦している。
テネシー州に本拠を置くこのチェーン店の株価は月曜日の発表後２％以上下落したが、依然として昨年のこの時期と比べて約５分の１低い水準にある。
クラッカーバレルの株価は、レストランがコストの高騰に直面する中、売上高が減少し、客足が鈍化しているため苦戦している。
この移行は、クラッカーバレルが、伝統的なアメリカのホッとする料理を求める予算重視のダイナーの間で市場シェアを獲得しようと戦ってきたデニーズやIHOPなどのチェーンとの熾烈な競争に直面している中で行われた。
マシノ氏はデノ氏の移行を支援するため、10月まで同社に残る予定だ。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cr49z0r54nko?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-27T18:49:54+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/0c4d/live/c0977d80-89dc-11f1-9273-213dd08ab6f9.jpg",
    readTime: 3,
  },
  {
    id: "should-you-get-paid-to-care-for-a-family-240ed6be",
    title: "Should you get paid to care for a family member?",
    titleJa: "家族の介護のために給料を受け取るべきですか?",
    summaryJa: "家族の介護者としての仕事は、疲れるだけではありません。経済的にも壊滅的な打撃を受ける可能性があります。",
    bodyOriginal: `Serving as a family caregiver isn’t just exhausting. It can be financially devastating, as well.`,
    bodyJa: `家族の介護者としての仕事は、疲れるだけではありません。経済的にも壊滅的な打撃を受ける可能性があります。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/should-you-get-paid-to-care-for-a-family-member-70958828?mod=mw_rss_topstories",
    publishedAt: "2026-07-27T17:56:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-59428583",
    readTime: 2,
  },
  {
    id: "netflix-woes-setting-up-for-a-hollywood-62c29f91",
    title: "Netflix woes setting up for a Hollywood ending, says trader Mike Khouw",
    titleJa: "トレーダーのマイク・クー氏が語る、ハリウッド映画のエンディングに向けたNetflixの苦境",
    summaryJa: "Netflixの株価はプロットを失ったかもしれないが、その基本的な物語はそのまま残っている。予想PERは18.9倍で取引されており、2022年の弱気相場の底値（15倍未満）近くに下がっているが、基礎となる事業が改善する一方、株価は安くなっている。ハイライト",
    bodyOriginal: `Netflix's stock price may have lost the plot, but its fundamental narrative remains intact. Trading at 18.9x forward earnings — down near its 2022 bear-market trough (<15x) — the stock has gotten cheaper while the underlying business has gotten better.
The Highlights
- Valuation: 18.9x forward earnings vs. <15x at the 2022 trough.
- Ad Growth: ~$3 billion expected this year, scaling toward a potential $10 billion by 2030.
- Option Setup: >1.5% standstill return over 25 days (>20% annualized) via a defined-risk covered strangle.
The Investment Case
When Netflix stopped highlighting subscriber adds to focus on revenue, margins, and free cash flow, growth investors departed — and value investors haven't fully arrived because legacy media like Disney (<13x) looks cheaper on paper. However, Netflix is a far superior business:
- Monetization Engine: With ~325 million paying members, Netflix offers connected TV advertisers the cleanest audience at scale. The default ad tier creates a line of sight to $10 billion in ad revenue by 2030.
- Capital Discipline & AI: Management is aggressively buying back stock rather than overpaying for legacy studio assets. Meanwhile, generative AI is a net positive: it reduces production, dubbing, and localization costs — a direct boost to margins for a company whose biggest expense is content amortization.
- Engagement: Live sports, spectacles, and AI-driven personalization directly target flatlining view times to protect pricing power.
Paying 18.9x for today's higher-margin, cash-generative Netflix is only four turns above the worst moment in its public history. That makes selling volatility far more attractive than buying shares outright.
The Trade: August 65/78/88 "Covered Strangle"
With Netflix around $70 and 25 calendar days to August expiration:
- Sell the August 65 Put and August 78 Call.
- Buy the August 88 Call (upside tail hedge).
- Net Credit: $1.10 (~1.5% yield in 25 days, or >20% annualized).
Risk Profile:
- Profitable Range: $63.90 to $79.10 (brackets ~9% downside and ~13% upside).
- Upside Risk: Capped at 10 points by the August 88 call.
- Downside Risk: If assigned below $65, your effective entry is $63.90 (~17x forward earnings)—a compelling entry price near 2022 valuation lows.`,
    bodyJa: `Netflixの株価はプロットを失ったかもしれないが、その基本的な物語はそのまま残っている。予想PERは18.9倍で取引されており、2022年の弱気相場の底値（15倍未満）近くに下がっているが、基礎となる事業が改善する一方、株価は安くなっている。
ハイライト
- バリュエーション: 予想利益は 18.9 倍、2022 年の底値は 15 倍未満。
- 広告の成長: 今年は約 30 億ドルと予想され、2030 年までに 100 億ドルに拡大する可能性があります。
- オプション設定: 定義されたリスクでカバーされた絞殺により、25 日間で >1.5% のスタンスチル リターン (年率 >20%)。
投資事例
Netflix が収益、マージン、フリー キャッシュ フローを重視するために加入者数の強調をやめたとき、グロース投資家は離れました。そして、ディズニー (13 倍未満) のようなレガシー メディアが紙の上では安く見えるため、バリュー投資家は完全に到着していません。しかし、Netflix ははるかに優れたビジネスです。
- 収益化エンジン: 約 3 億 2,500 万人の有料会員を擁する Netflix は、コネクテッド TV 広告主に大規模で最もクリーンな視聴者を提供しています。デフォルトの広告層により、2030 年までに 100 億ドルの広告収益が見込まれます。
- 資本規律と AI: 経営陣は、従来のスタジオ資産に過剰な支払いをするのではなく、積極的に株式を買い戻しています。一方、生成 AI は正味のプラスです。制作、吹き替え、ローカリゼーションのコストが削減され、コンテンツの償却が最大の出費である企業にとっては利益が直接増加します。
- エンゲージメント: ライブ スポーツ、メガネ、AI 主導のパーソナライゼーションは、価格決定力を保護するために視聴時間の平坦化を直接ターゲットにしています。
今日の利益率が高く、現金を生み出すネットフリックスの料金は 18.9 倍で、公開史上最悪の瞬間をわずか 4 ターン上回っています。そのため、株式を完全に購入するよりも、ボラティリティを売りにする方がはるかに魅力的になります。
ザ・トレード: 65/78/88 年 8 月「覆われた絞殺」
Netflix が約 70 ドルで、8 月の有効期限まで 25 暦日あります。
- 8 月 65 日のプットと 8 月 78 日のコールを売ります。
- 88 年コールを購入します (上向きテールヘッジ)。
- 純クレジット: 1.10 ドル (25 日間で最大 1.5% の利回り、または年換算で 20% 以上)。
リスクプロファイル:
- 収益範囲: $63.90 ～ $79.10 (括弧内は下値 ~9%、上値 ~13%)。
- 上方リスク: 88 年 8 月のコールまでに 10 ポイントに制限。
- 下振れリスク: 65 ドル未満に割り当てられた場合、実質エントリーは 63.90 ドル (予想利益の約 17 倍) となり、2022 年の評価額の安値に近い魅力的なエントリー価格となります。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/27/netflix-woes-setting-up-for-a-hollywood-ending-says-trader-mike-khouw.html",
    publishedAt: "2026-07-27T17:25:45+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "consolidated-food-supply-may-be-worsenin-ed98d1f1",
    title: "Consolidated food supply may be worsening cyclospora outbreaks, experts say",
    titleJa: "食糧供給の統合がシクロスポラの発生を悪化させている可能性があると専門家が指摘",
    summaryJa: "米国で数千人を罹患させたシクロスポラの発生により、生鮮食品が国内を移動する方法の数十年にわたる変化に新たな注目が集まっている。捜査当局が元の汚染源の特定に取り組んでいる一方で、一部の食品安全専門家は、統合の波を経た業界の一元的な調達・流通ネットワークは、かつては孤立した汚染事象であった可能性のあるものを複数の州での発生に変えるのに役立つ可能性があると述べている。",
    bodyOriginal: `The cyclospora outbreak that has sickened thousands in the U.S. is drawing renewed attention to a decades-long shift in how fresh food moves through the country.
While investigators work to identify the original source of contamination, some food safety experts say the industry's centralized sourcing and distribution networks after a wave of consolidation can help turn what once may have been an isolated contamination event into a multistate outbreak.
"The general trends that have taken place in the food industry, the way in which food has been sourced and then distributed has played some role here," said Dr. David Relman, a professor of microbiology and immunology at Stanford University.
The cyclospora parasite's long incubation period, the difficulty in tracking its path and what some experts have criticized as a bumpy federal response have all played a role in the widening outbreak. Some experts say the structure of the food system has also contributed.
"It's possible that as food sourcing and distribution becomes consolidated you get pooling and then redistribution of what might have been a very local contamination problem, so that it now becomes a widely distributed contamination problem," Relman said.
Marion Nestle, professor emerita of nutrition, food studies and public health at New York University, said the shrinking of the industry has amplified the consequences when contamination occurs.
"Consolidation means that if something goes wrong, it goes wrong big time," Nestle said.
Centralized processing can further expand the reach of an outbreak, she said.
The current FDA investigation around cyclosporiasis has focused on shredded iceberg lettuce distributed through Taylor Farms' foodservice business, an ingredient that reached Taco Bell restaurants and other foodservice customers across multiple states.
Relman referenced bagged lettuce as one example of how changes in distribution could spread a foodborne illness.
"Think of the difference between one head of lettuce and a bag of chopped lettuce that may have come from many, many heads," he said. "These bags are now being produced in huge numbers and distributed in far-flung distribution networks."
Consolidation in the supply chain
The industry's evolution toward fewer distributors has been driven in part by a push for efficiency. Nestle said those improvements for businesses come with trade-offs for food safety.
"Big is not necessarily better," she said. "The bigger the supplier, the greater the opportunity for contamination."
Over the past several decades, U.S. agriculture and food distribution have steadily consolidated as companies pursue greater efficiency and national scale, according to the USDA.
For example, Taylor Farms, the salad producer under scrutiny for the recent cyclospora outbreak, has seen significant expansion through a series of acquisitions over the past decade — including Earthbound Farm in 2019, Curation Foods in 2021 and most recently Equinox Growers in March.
Meanwhile, restaurant supply has become increasingly concentrated too, with broadline distributors like Sysco, US Foods and Performance Food Group serving hundreds of thousands of restaurants and institutional kitchens nationwide.
While federal regulators blocked Sysco's proposed $8.2 billion acquisition of US Foods in 2015 on antitrust grounds, both companies have continued growing through smaller acquisitions of regional distributors and fresh produce processors.
Sysco, the nation's largest foodservice distributor, has spent the past decade expanding its fresh produce business by acquiring regional distributors including Paragon Foods in Pennsylvania, The Coastal Companies in the mid-Atlantic and Greco and Sons, a specialty food distributor with 10 distribution centers across the country.
Those deals expanded Sysco's reach in fresh-cut produce and value-added processing, allowing a larger share of restaurants to source ingredients through the same distribution network.
In 2016, US Foods acquired Freshway Foods, a fresh fruit and vegetable processor, repacker and distributor in the eastern half of the United States.
Some experts on food distribution believe having a smaller number of companies in the industry compounds issues when they arise.
But not everyone agrees that consolidation is the enemy.
Timothy Lytton, a health and safety regulation expert at Georgia State University, said larger produce growers and processors often operate with more sophisticated food safety systems than smaller farms because they have the financial resources to invest in testing, traceability, audits and quality control.
"It's not entirely clear that larger operations have more food safety problems than smaller operations," said Lytton.
In California, he added, there have been studies at farmers markets that have found fresh produce grown by small farmers have had contamination with E. coli.
"While you may have a farmer who's very concerned about the quality of the product, you also have in an organic model a more holistic idea about farming that often involves animals near crops," Lytton said. "That combination of animals and crops can create food safety problems."
Even so, Lytton acknowledged that when contamination does occur within large handler networks, the resulting recalls at the distribution level are much broader and harder to manage.
CNBC has reached out to the group of major food suppliers about safety precautions and tracing procedures. Sysco pointed CNBC to the International Foodservice Distribution Association.
"The foodservice supply chain that feeds our communities is intricate and foodservice distributors are highly skilled in tracking and tracing the food they distribute," said a spokesperson for the IFDA. "They maintain robust records, identifying the source, internal movement, and recipient of all products they handle, and they have a proven track record of providing FDA with critical traceback information within 24-48 hours to support foodborne illness outbreak investigations and swiftly remove products from commerce."
Relman stressed that while consolidation itself doesn't create contamination, it does change the consequences when contamination occurs.
"We often don't appreciate a system like the food inspection system, or the public health system in large until it fails," said Relman. "We can't keep doing that."`,
    bodyJa: `米国で数千人を罹患させたシクロスポラの発生により、生鮮食品が国内を移動する方法の数十年にわたる変化に新たな注目が集まっている。
捜査当局が元の汚染源の特定に取り組んでいる一方で、一部の食品安全専門家は、統合の波を経た業界の一元的な調達・流通ネットワークは、かつては孤立した汚染事象であった可能性のあるものを複数の州での発生に変えるのに役立つ可能性があると述べている。
スタンフォード大学の微生物学と免疫学の教授、デビッド・レルマン博士は、「食品業界で起こっている一般的な傾向、つまり食品の調達と流通方法がここで何らかの役割を果たしている」と述べた。
シクロスポラ原虫の長い潜伏期間、その経路追跡の難しさ、一部の専門家が政府の対応が不安定であると批判していることなどが、感染拡大の拡大に一因となっている。一部の専門家は、食料システムの構造も影響していると指摘する。
「食品の調達と流通が統合されると、非常に局地的な汚染問題だったものがプールされて再配分され、現在では広範囲に分散した汚染問題になっている可能性がある」とレルマン氏は述べた。
ニューヨーク大学の栄養学、食品研究、公衆衛生の名誉教授マリオン・ネスレ氏は、業界の縮小により汚染が発生した場合の影響が増幅されていると述べた。
「統合とは、何か問題が起こった場合、大きな問題が起こることを意味する」とネスレは語った。
集中処理により、アウトブレイクの範囲がさらに拡大する可能性があると彼女は述べた。
嚢胞子症に関する現在のFDAの調査は、テイラー・ファームズの食品サービス事業を通じて流通した細切りアイスバーグレタスに焦点を当てており、この食材は複数の州のタコベル・レストランやその他の食品サービスの顧客に届けられていた。
レルマン氏は、流通の変化がどのように食中毒を広める可能性があるかを示す一例として、袋詰めレタスを挙げた。
「レタス1玉と、何本も収穫されたであろう刻んだレタス1袋の違いを考えてみてください」と彼は言う。 「これらのバッグは現在、大量に生産され、遠く離れた流通ネットワークで流通しています。」
サプライチェーンの統合
流通業者の減少に向けた業界の進化は、効率化の推進によってもたらされています。ネスレは、企業にとってのこうした改善には食品の安全性とのトレードオフが伴うと述べた。
「大きいことが必ずしも良いというわけではありません」と彼女は言う。 「サプライヤーが大きければ大きいほど、汚染の可能性は高くなります。」
米国農務省によると、企業が効率性と国家規模の向上を追求する中、過去数十年にわたって米国の農業と食品流通は着実に統合されてきた。
例えば、最近のシクロスポラ発生で厳しい監視下にあるサラダ生産会社テイラー・ファームズは、2019年のアースバウンド・ファーム、2021年のキュレーション・フーズ、そして最近では3月のエクイノックス・グロワーズなど、過去10年間に一連の買収を通じて大幅な拡大を遂げてきた。
一方、レストランへの供給もますます集中しており、シスコ、USフーズ、パフォーマンス・フード・グループなどのブロードライン販売会社が全国の数十万のレストランや施設の厨房にサービスを提供している。
2015年に連邦規制当局がシスコによる82億ドルでのUSフーズ買収提案を反トラスト法を理由に阻止したが、両社は地域の流通業者や生鮮食品加工業者の小規模な買収を通じて成長を続けてきた。
米国最大の食品サービス流通業者であるシスコは、過去10年間、ペンシルベニア州のパラゴン・フーズ、大西洋中部のザ・コースタル・カンパニーズ、全米に10の流通センターを持つ特殊食品流通業者グレコ・アンド・サンズなどの地域流通業者を買収することで、生鮮食品事業を拡大してきた。
これらの取引により、シスコの生鮮農産物や付加価値加工の範囲が拡大し、より多くのレストランが同じ流通ネットワークを通じて食材を調達できるようになった。
2016 年、US Foods は、米国東半分の生鮮果物と野菜の加工、再包装、販売を行う Freshway Foods を買収しました。
食品流通の専門家の中には、業界に参加する企業の数が少ないと、問題が発生したときにさらに複雑になると考える人もいます。
しかし、統合が敵であるということに誰もが同意しているわけではない。
ジョージア州立大学の健康と安全規制の専門家ティモシー・リットン氏は、大規模な農産物生産者や加工業者は、検査、トレーサビリティ、監査、品質管理に投資する財源があるため、小規模農場よりも洗練された食品安全システムを運用していることが多いと述べた。
「大規模な事業所が小規模な事業所よりも食品安全上の問題を抱えているかどうかは完全には明らかではない」とリットン氏は述べた。
同氏はさらに、カリフォルニアでは、小規模農家が栽培した生鮮食品が大腸菌に汚染されていることがファーマーズマーケットで調査されていると付け加えた。
「製品の品質を非常に心配している農家がいるかもしれませんが、有機モデルでは、作物の近くに動物が関与することが多い農業について、より総合的な考えも持っています」とリットン氏は言う。 「動物と作物の組み合わせは、食品の安全性の問題を引き起こす可能性があります。」
それでもリットン氏は、大規模なハンドラーネットワーク内で汚染が発生した場合、その結果として流通レベルでのリコールがより広範囲に及び、管理が困難になることを認めた。
CNBCは安全上の予防措置と追跡手順について大手食品供給業者のグループと連絡を取った。 Sysco は CNBC に International Foodservice Distribution Association を指摘した。
IFDAの広報担当者は、「私たちの地域社会に食料を供給する食品サービスのサプライチェーンは複雑で、食品サービスの流通業者は、流通する食品を追跡・追跡することに高度な技術を持っている」と述べた。 「彼らは、取り扱うすべての製品の出所、内部移動、受領者を特定する堅牢な記録を維持しており、食中毒の発生調査をサポートし、商品を商業から迅速に削除するために、重要なトレースバック情報を24～48時間以内にFDAに提供した実績があります。」
レルマン氏は、統合自体は汚染を引き起こさないが、汚染が発生した場合の結果は変わると強調した。
「食品検査システムや公衆衛生システム全般のようなシステムは、破綻するまでは評価されないことが多い」とレルマン氏は語った。 「それを続けることはできません。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/27/cyclospora-outbreak-food-industry-consolidation.html",
    publishedAt: "2026-07-27T17:19:29+00:00",
    category: "貿易",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
    readTime: 7,
  },
  {
    id: "cash-recovered-from-ex-nasa-scientist-tu-143bab59",
    title: "Cash recovered from ex-Nasa scientist turned scammer",
    titleJa: "NASAの元科学者から詐欺師に転身した現金を回収",
    summaryJa: "NASAの元科学者から詐欺師に転身した現金を回収- 公開されました",
    bodyOriginal: `Cash recovered from ex-Nasa scientist turned scammer
- Published
Investors who were defrauded out of more than £1m by a former Nasa scientist will get most of their money back.
John Burford, from Mansfield in Nottinghamshire, admitted defrauding 100 investors and was sentenced to two years in prison in 2025.
Despite not being authorised to, Burford had offered trade alerts and investment opportunities in "managed funds" through his firm Financial Trading Strategies between 2016 and 2021.
At a hearing at Southwark Crown Court on Monday, the 86-year-old was ordered to pay £655,951.40 after the Financial Conduct Authority (FCA) obtained a confiscation order against him.
Burford has a PhD in physics from the University of Toronto and worked for Nasa in its manned Mars exploration team based in Washington D.C. before moving into finance, according to his author biography on a publisher's website.
The FCA said Westminster Magistrates' Court heard he had generated more than £1m through his illegal investment schemes but only traded £760,000, most of which was lost.
Substantial amounts of money investors sent him were actually used to buy a house, a court heard in June 2025.
The FCA said he repeatedly misled investors about fund performance, concealed losses and used their money for personal gain.
The regulator said the payout ordered against Burford is the total value of assets the court found could still be recovered and returned directly to his victims.
It said the payments, together with previous payments from Burford to investors, means an estimated 99% of the money originally invested by the roughly 70 known victims will have been returned.
Steve Smart, executive director of enforcement and market oversight at the FCA, said: "Mr Burford scammed investors to fund his own lavish lifestyle.
"Clawing back stolen money from fraudsters and returning it to victims sends a clear message that crime doesn't pay."
Get in touch
Tell us which stories we should cover in Nottingham
Listen to BBC Radio Nottingham on Sounds and follow BBC Nottingham on Facebook, external, on X, external, or on Instagram, external. Send your story ideas to eastmidsnews@bbc.co.uk, external or via WhatsApp, external on 0808 100 2210.
Related topics
- Published8 September 2025
- Published27 June 2025`,
    bodyJa: `NASAの元科学者から詐欺師に転身した現金を回収
- 公開されました
元NASAの科学者に100万ポンド以上を騙し取られた投資家は、資金の大半を取り戻すことになる。
ノッティンガムシャーのマンスフィールド出身のジョン・バーフォードは、100人の投資家を騙したことを認め、2025年に懲役2年の判決を受けた。
バーフォード氏は権限がなかったにもかかわらず、2016年から2021年にかけて自身の会社ファイナンシャル・トレーディング・ストラテジーズを通じて取引警告や「管理ファンド」への投資機会を提供していた。
月曜日にサザーククラウン裁判所で行われた公聴会では、金融行為監視機構（FCA）が同氏に対する没収命令を取得したことを受け、86歳の同氏に65万5,951.40ポンドの支払いを命じられた。
出版社のウェブサイトに掲載された著者略歴によると、バーフォード氏はトロント大学で物理学の博士号を取得し、金融業界に移る前はワシントンD.C.に拠点を置くNASAの有人火星探査チームで働いていた。
FCAによると、ウェストミンスター治安判事裁判所は、同氏が違法投資スキームを通じて100万ポンド以上を稼いだが、取引額は76万ポンドのみで、そのほとんどが失われたとの審理を行ったと述べた。
投資家が彼に送った多額の資金は実際に住宅の購入に使用されたと、2025年6月に裁判所が審理した。
FCAは、同氏がファンドのパフォーマンスについて繰り返し投資家に誤解を与え、損失を隠し、個人的な利益のために資金を使用したと主張した。
規制当局は、バーフォード氏に対して命じられた支払い額は、裁判所がまだ回収でき、被害者に直接返還できると判断した資産の総額であると述べた。
この支払いは、バーフォードから投資家への以前の支払いと合わせて、判明している約70人の被害者が当初投資した資金の推定99％が返還されることを意味すると述べた。
FCAの執行・市場監督担当エグゼクティブディレクター、スティーブ・スマート氏は「バーフォード氏は自分の贅沢なライフスタイルに資金を提供するために投資家をだましていた。
「詐欺師から盗まれた金を取り戻し、被害者に返すことは、犯罪は報われないという明確なメッセージを送ることになる。」
連絡する
ノッティンガムで取り上げるべきストーリーを教えてください
サウンドで BBC ラジオ ノッティンガムを聴き、Facebook (外部)、X (外部)、または Instagram (外部) で BBC ノッティンガムをフォローしてください。ストーリーのアイデアを eastmidsnews@bbc.co.uk (外部) または WhatsApp (外部 (0808 100 2210) 経由) に送信してください。
関連トピック
- 2025 年 9 月 8 日公開
- 2025 年 6 月 27 日公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cj4k2x2qprwo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-27T16:00:49+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/ef94/live/4fb9c1a0-89d1-11f1-8d60-2d725522f827.jpg",
    readTime: 3,
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
