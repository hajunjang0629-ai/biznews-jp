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
    id: "sam-altman-to-meet-with-white-house-s-wi-91705eba",
    title: "Sam Altman to meet with White House's Wiles this week ahead of AI framework deadline",
    titleJa: "サム・アルトマン氏、今週AIフレームワークの期限に先立ってホワイトハウスのワイルズ氏と会談",
    summaryJa: "OpenAIのサム・アルトマン最高経営責任者（CEO）は水曜日、CNBCに対し、人工知能に関するドナルド・トランプ大統領の大統領令を実施するための枠組み案を確認し、今週ワシントン滞在中にスージー・ワイルズ大統領首席補佐官と会談する予定であると語った。ワイルズ氏はトランプ大統領に最も近い顧問の一人であり、AI政策に対する政権のアプローチの形成に貢献している主要当局者の一人である。アルトマン氏は今週、さまざまなトランプ政権高官、議員、経済学者と会談し、OpenAIの今後のモデル、サイバーセキュリティ、世界的なAI競争における米国の立場について話し合う予定だ。",
    bodyOriginal: `OpenAI CEO Sam Altman told CNBC on Wednesday that he has seen the proposed framework for implementing President Donald Trump's executive order on artificial intelligence, and that he will meet with Susie Wiles, the White House chief of staff, while in Washington this week.
Wiles is one of Trump's closest advisors and is one of the key officials helping to shape the administration's approach to AI policy. Altman is meeting with a range of senior Trump administration officials, lawmakers and economists this week to discuss OpenAI's upcoming models, cybersecurity and the U.S. position in the global AI race.
The Trump administration has taken a more active role in AI regulation since Trump signed a highly-anticipated executive order in June. The order asked AI companies to voluntarily provide models to the government to assess their capabilities ahead of a full release, but was light on specific details.
Trump gave federal agencies 60 days to develop a framework to carry out those evaluations in practice.
Altman's trip to D.C. coincides with that rapidly approaching Aug. 1 deadline, and he's not the only tech executive meeting with lawmakers this week. Nvidia CEO Jensen Huang is on Capitol Hill to discuss open models and "American leadership in AI," a spokesperson told CNBC.
Sen. Ted Cruz, R-Texas, and several Senate Democrats met with Altman on Wednesday. Altman told CNBC that he and Cruz talked about "what it's going to take for America to remain competitive with AI."
— CNBC's Emily Wilkins and Karen Sloan contributed to this report
WATCH: OpenAI and Google DeepMind make their case as Congress weighs an AI kill switch`,
    bodyJa: `OpenAIのサム・アルトマン最高経営責任者（CEO）は水曜日、CNBCに対し、人工知能に関するドナルド・トランプ大統領の大統領令を実施するための枠組み案を確認し、今週ワシントン滞在中にスージー・ワイルズ大統領首席補佐官と会談する予定であると語った。
ワイルズ氏はトランプ大統領に最も近い顧問の一人であり、AI政策に対する政権のアプローチの形成に貢献している主要当局者の一人である。アルトマン氏は今週、さまざまなトランプ政権高官、議員、経済学者と会談し、OpenAIの今後のモデル、サイバーセキュリティ、世界的なAI競争における米国の立場について話し合う予定だ。
トランプ大統領が6月に待望の大統領令に署名して以来、トランプ政権はAI規制においてより積極的な役割を果たしている。この命令では、AI企業に対し、完全リリースに先立ってその機能を評価するために自発的にモデルを政府に提供するよう求めたが、具体的な詳細については触れられていなかった。
トランプ大統領は連邦政府機関に対し、これらの評価を実際に実施するための枠組みを開発するための60日間の猶予を与えた。
アルトマン氏のワシントンD.C.訪問は、8月1日の期限が急速に近づいている時期と一致しており、今週テクノロジー業界の幹部が議員らと会合するのは彼だけではない。 Nvidia CEOのジェンセン・フアン氏はオープンモデルと「AIにおける米国のリーダーシップ」について話し合うため国会議事堂に来ていると広報担当者がCNBCに語った。
テッド・クルーズ上院議員（共和党、テキサス州）と数名の上院民主党議員が水曜日にアルトマン氏と会談した。アルトマン氏はCNBCに対し、クルーズ氏と「米国がAIとの競争力を維持するには何が必要か」について話し合ったと語った。
— CNBC のエミリー・ウィルキンスとカレン・スローンがこのレポートに寄稿しました
注目: 議会が AI キルスイッチを検討する中、OpenAI と Google DeepMind が主張する`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/29/altman-white-house-wiles-ai-framework.html",
    publishedAt: "2026-07-29T19:31:58+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "us-interest-rates-held-for-fifth-time-in-5c14e2ad",
    title: "US interest rates held for fifth time in a row",
    titleJa: "米国金利は5回連続据え置き",
    summaryJa: "米国金利は5回連続据え置き- 公開されました",
    bodyOriginal: `US interest rates held for fifth time in a row
- Published
US interest rates have been held for the fifth time in a row by the Federal Reserve.
The decision, which was broadly expected, means rates remain between 3.5% and 3.75%.
Higher interest rates make borrowing more expensive for people wanting to secure loans, mortgages and credit cards, but can lead to better returns on savings.
Policymakers decided to keep rates at the level they have been since December last year after inflation, the rate at which prices rise, slowed last month, but concerns remain that the dip could prove short-lived.
Despite inflation falling to 3.5% in the year to June, the rate prices are rising at remains above the Fed's 2% target, as it has been for more than five years. The lower rate of inflation last month does not mean prices are falling, but that they are rising at a slower rate.
There is also growing uncertainty over the impact of the ongoing conflict in the Middle East on global oil prices and subsequently general consumer prices in the coming months. On Wednesday, Brent crude, the global benchmark for oil prices rose by more than 6% to above $89 a barrel.
The Fed acknowledged that inflation remained "elevated" which it said was in part due to energy price increases.
But policymakers at the US central bank voted 9-3 in favour of keeping interest rates on hold. The three who voted against were pushing instead for a small hike, with speculation ahead of the decision that an increase in the rate was on the cards due to renewed hostilities between the US and Iran pushing up global oil prices.
Warsh said he had wanted to and succeeded in having a "family fight" with his fellow policymakers on the rates decision.
"Economic activity is expanding at a solid pace despite elevated uncertainty that owes, in part, to the conflict in the Middle East. Productivity growth and capital investment are strong," the Fed said in a statement following the decision.
Richard Flynn, managing director at Charles Schwab UK, said the "biggest smoke signal" for the US central bank was the energy market, with the ongoing conflict in Iran likely to influence future rate decisions.
"We expect the Fed to hold through year end even as futures markets flirt with pricing in a hike," he said.
Warsh, who was appointed by US President Donald Trump in May, has held interest rates twice since he took over as chairman.
He previously told Congress that the central bank had "no tolerance to persistently elevated inflation" and that he was committed to "restoring price stability".
President Trump pushed Warsh's predecessor, Jerome Powell, to cut interest rates, and has made it clear he expects Warsh to fulfil his demand for reductions in borrowing costs for Americans.
But the new Fed chairman has said his "goal" is "for there to be no politics" and has stressed the importance of the Fed's independence.
Richard Carter, head of fixed interest research at investment management firm Quilter Cheviot, said Trump would be watching the Fed's decision with interest, particularly with the US mid-term elections less than 100 days away,
"The president will want to deliver positive news on the economy," he added. "Inflation continuing to remain elevated and the looming potential for rate hikes certainly makes that narrative difficult to achieve."
Increasing interest rates is a way of tackling inflation by making borrowing more expensive, encouraging people to cut back on spending and in turn leading to lower demand and price rises easing.
But it is a balancing act, as high interest rates can lead businesses to hold off on investment, harming the economy. Meanwhile, lower interest rates can boost the economy by reducing borrowing costs and encouraging spending and investment.`,
    bodyJa: `米国金利は5回連続据え置き
- 公開されました
米国の金利はFRBによって5回連続で据え置かれている。
この決定は大方予想されていたもので、金利が3.5％から3.75％の間にとどまることを意味する。
金利の上昇により、ローン、住宅ローン、クレジットカードを確保したい人にとって借入はより高価になりますが、貯蓄による収益の向上につながる可能性があります。
物価上昇率であるインフレが先月鈍化したことを受け、政策当局者らは金利を昨年１２月以来の水準に維持することを決定したが、この下落が短期的なものとなる可能性があるとの懸念は依然として残っている。
6月までの1年間にインフレ率が3.5％に低下したにもかかわらず、金利価格は5年以上続いており、FRBの目標である2％を依然として上回っている。先月のインフレ率の低下は、物価が下落していることを意味するのではなく、物価の上昇率が鈍化していることを意味します。
また、中東で続いている紛争が世界の原油価格、ひいては今後数カ月間の一般消費者物価に与える影響についても不確実性が高まっている。水曜日、原油価格の世界的な指標であるブレント原油は6％以上上昇し、1バレルあたり89ドルを超えた。
FRBはインフレが依然として「高止まり」していることを認め、エネルギー価格の上昇が一因だと述べた。
しかし、米国中央銀行の政策担当者らは９対３で金利据え置きに賛成票を投じた。反対票を投じた3カ国は代わりに小幅利上げを主張しており、米国とイランの対立が再燃し世界の原油価格が上昇しているため、利上げが決定される前には憶測が広がっていた。
ウォーシュ氏は、金利決定に関して同僚の政策立案者らと「家族喧嘩」をしたいと思っており、それに成功したと述べた。
FRBは今回の決定後の声明で「中東紛争が一因で不確実性が高まっているにもかかわらず、経済活動は堅調なペースで拡大している。生産性の伸びと設備投資は堅調だ」と述べた。
チャールズ・シュワブUKのマネジング・ディレクター、リチャード・フリン氏は、米中銀にとって「最大の狼煙」はエネルギー市場であり、イランで続く紛争が今後の金利決定に影響を与える公算が大きいと述べた。
同氏は「先物市場が利上げを織り込んでいるにもかかわらず、FRBは年末まで政策を維持すると予想している」と述べた。
ウォーシュ氏は5月にドナルド・トランプ米大統領によって任命され、会長就任以来2度金利を維持してきた。
同氏は以前議会に対し、中銀は「持続的なインフレ高進を容認しない」とし、「物価安定の回復」に全力で取り組むと述べた。
トランプ大統領はウォーシュ氏の前任者ジェローム・パウエル氏に利下げを促し、米国人の借り入れコスト削減を求めるウォーシュ氏の要求を満たすことを期待していることを明らかにした。
しかし、新FRB議長は自身の「目標」は「政治が存在しないこと」だと述べ、FRBの独立性の重要性を強調した。
投資管理会社キルター・チェビオットの固定金利調査責任者リチャード・カーター氏は、特に米国中間選挙まで100日を切った今、トランプ大統領はFRBの決定を関心を持って注視しているだろうと述べた。
同氏は「大統領は経済に関する前向きなニュースを伝えたいだろう」と付け加えた。 「インフレ率は依然として高止まりしており、利上げの可能性が差し迫っているため、この物語の達成が確実に困難になっている。」
金利の引き上げは、借り入れをより高価にし、人々の支出削減を促し、ひいては需要の低下と物価上昇の緩和につながることでインフレに対処する方法です。
しかし、高金利は企業が投資を控え、経済に悪影響を与える可能性があるため、これはバランスを取る必要がある。一方、金利の低下は、借入コストを削減し、支出と投資を促進することで経済を押し上げることができます。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cy07wgqjv08o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-29T19:30:40+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/aa1f/live/9a5f9640-8b56-11f1-8322-5bf52455cf04.jpg",
    readTime: 4,
  },
  {
    id: "the-big-focus-now-is-on-the-potential-fo-69213b26",
    title: "The big focus now is on the potential for a September rate hike after the Fed stands pat",
    titleJa: "現在の最大の焦点は、FRBが態度を堅持した後の9月利上げの可能性である。",
    summaryJa: "市場は「特に戦争の雲が再びエネルギー価格を押し上げているため、9月の利上げに警戒する必要がある」とあるエコノミストは言う",
    bodyOriginal: `Markets should be ‘on alert for a hike in September, particularly with war clouds pushing up energy prices again,’ one economist says`,
    bodyJa: `市場は「特に戦争の雲が再びエネルギー価格を押し上げているため、9月の利上げに警戒する必要がある」とあるエコノミストは言う`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/the-big-focus-now-is-on-the-potential-for-a-september-rate-hike-after-the-fed-stands-pat-401c30d6?mod=mw_rss_topstories",
    publishedAt: "2026-07-29T19:11:00+00:00",
    category: "エネルギー",
    imageUrl: "https://images.mktw.net/im-42161453",
    readTime: 2,
  },
  {
    id: "divided-fed-holds-interest-rates-steady-d3ce0970",
    title: "Divided Fed holds interest rates steady, but three members voted to hike",
    titleJa: "分裂したFRBは金利を据え置くが、3人のメンバーが利上げに投票した",
    summaryJa: "ワシントン – 米連邦準備理事会（FRB）は水曜日、主要金利を据え置くことを決議したが、インフレに対する懸念を表明し利上げを望んでいる当局者3人の反対がなかったわけではない。一部当局者の間で利上げ支持が高まっているにもかかわらず、連邦公開市場委員会は９対３でフェデラルファンド金利を３．５─３．７５％の範囲に据え置くことを可決した。",
    bodyOriginal: `WASHINGTON – The Federal Reserve on Wednesday voted to hold its key interest rate steady but not without opposition from three officials who have expressed concern over inflation and wanted to hike.
Despite increasing support among some officials for a rate increase, the Federal Open Market Committee voted 9-3 to leave the federal funds rate in a range between 3.5% and 3.75%.
All of the "no" votes came from regional presidents – Beth Hammack of Cleveland, Neel Kashkari of Minneapolis and Lorie Logan of Dallas – who had been the most explicit about the need for higher rates to address inflation that has been above the Fed's 2% target for more than five years.
The post-meeting statement noted that the three dissenters "preferred to raise the target range for the federal funds rate by ¼ percentage point at this meeting."
An early challenge for Warsh
This is the first time since September 2016 that three policymakers dissented with a unified view of which direction rates should head.
"We're reading this as a Committee with vocal hawks," said Ian Lyngen, head of U.S. rates at BMO Capital Markets.
The no votes presented an early challenge for Chairman Kevin Warsh, whose refusal to provide clear road signs on where monetary policy is headed led to an unusually high level of uncertainty heading into the meeting.
Markets largely had expected the central bank policymakers to approve another hold on rates, though there had been some inclination – about a 1-in-3 chance, according to the CME Group's FedWatch tool – that a surprise rate hike was in the cards. Prediction markets had a higher level of certainty that the Fed would hold.
Warsh has argued that the Fed should spend less time trying to tell markets what it will do and instead emphasizing the conditions under which action would be taken. However, Wednesday's statement provided neither, even with markets largely expecting the Fed to hike in September.
The post-meeting statement was almost identical to the one following the June 17 decision and was in keeping with the Fed's actions all year, following three rate cuts in the latter part of 2025.
Officials again noted that "Economic activity is expanding at a solid pace despite elevated uncertainty that owes, in part, to the conflict in the Middle East." The statement further said that job growth has "kept pace with the workforce and the unemployment rate has changed little" even as the U.S. labor force has contracted.
As in June, the statement concluded with the simple declaratory, "The Committee will deliver price stability."
"The Fed appears to be running out of patience with above-target inflation, despite recent data coming in cold," said Kay Haigh, global head and chief investment officer of fixed income and liquidity solutions at Goldman Sachs Asset Management. "The committee's growing hawkish sentiment, shown by the three dissents against today's hold, has also likely been exacerbated by the recent flare up in hostilities in the Middle East."
Officials favoring tighter policy argued inflation has been a burden on households and is not showing clear signs of abating. Recent price pressures have reflected both tariffs imposed by President Donald Trump and higher energy costs tied to the Iran conflict.
The full committee in June penciled in one quarter-percentage-point increase by the end of 2026.
Disparate policy views
Governor Christopher Waller also voiced worries recently over inflation, saying higher rates could be necessary if more progress isn't made. However, he voted in favor of a hold at this meeting.
For his part, Warsh has called inflation "a choice," and he repeatedly stressed the importance of getting prices in check during recent hearings on Capitol Hill.
But from a policy perspective, Warsh has expressed disdain for the Fed's past practice of providing forward guidance on its expectations for rates.
Keeping with Warsh's first meeting, the statement was much shorter than what had become the norm. Warsh has stressed changing the way the Fed communicates, even dedicating one of five task forces he has created to address the issue.
In the weeks leading up to the meeting, his FOMC colleagues had expressed disparate policy views.
New York Fed Chair John Williams has said he sees current policy well positioned to bring inflation back to target. However, Logan countered that "modestly" higher rates would be needed. Hammack also has been an inflation hawk, citing the pressure households are facing from persistently higher prices across the board.
Earlier this week, Trump showed support for Warsh, calling him "fantastic" while noting other Fed officials had "bad intentions" and perhaps had political motivations.`,
    bodyJa: `ワシントン – 米連邦準備理事会（FRB）は水曜日、主要金利を据え置くことを決議したが、インフレに対する懸念を表明し利上げを望んでいる当局者3人の反対がなかったわけではない。
一部当局者の間で利上げ支持が高まっているにもかかわらず、連邦公開市場委員会は９対３でフェデラルファンド金利を３．５─３．７５％の範囲に据え置くことを可決した。
「反対」票のすべては、5年以上FRBの目標である2%を上回っているインフレに対処するための利上げの必要性を最も明言していた、クリーブランドのベス・ハンマック氏、ミネアポリスのニール・カシュカリ氏、ダラスのロリー・ローガン氏の各地域大統領らによるものだった。
会合後の声明では、反対者３人が「今回の会合でフェデラル・ファンド金利の目標レンジを１／４％ポイント引き上げることを希望した」と指摘した。
ウォーシュにとって初期の課題
政策当局者３人が金利の方向性について統一見解に反対したのは２０１６年９月以来初めて。
ＢＭＯキャピタル・マーケッツの米国金利部門責任者イアン・リンゲン氏は「われわれはこれをタカ派の委員会として読んでいる」と述べた。
無投票はケビン・ウォーシュ議長にとって初期の課題となったが、同議長は金融政策の方向性について明確な道しるべを提示することを拒否したため、会合に向けて異常に高い不確実性が生じた。
市場では中銀政策当局者が追加金利据え置きを承認するとおおむね予想されていたが、ＣＭＥグループのフェドウォッチツールによると約３分の１の確率で、予想外の利上げが実現するとの見方もあった。市場の予測ではFRBが確信する水準が高かった。
ウォーシュ氏は、FRBは市場に今後の行動を伝えることに時間を費やすのではなく、代わりに行動がとられる条件を強調すべきだと主張した。しかし、市場ではFRBが9月に利上げすると大方予想していたにもかかわらず、水曜日の声明ではそのどちらも示されなかった。
会合後の声明は6月17日の決定後の声明とほぼ同じで、2025年後半に3回の利下げを実施した後のFRBの年間を通じての行動に沿ったものだった。
当局者らは「中東紛争の影響もあって不確実性が高まっているにもかかわらず、経済活動は堅調なペースで拡大している」と改めて指摘した。声明はさらに、米国の労働力が縮小しているにもかかわらず、雇用の伸びは「労働力の伸びに追いついていて、失業率はほとんど変わっていない」と述べた。
声明は6月と同様、「委員会は物価の安定を実現する」というシンプルな宣言で締めくくられた。
ゴールドマン・サックス・アセット・マネジメントの債券および流動性ソリューションのグローバル責任者兼最高投資責任者であるケイ・ヘイグ氏は、「最近の統計は冷え込んでいるにもかかわらず、FRBは目標を上回るインフレに対して忍耐が限界に来ているようだ」と述べた。 「今日の保留に対する３人の反対意見に示される委員会のタカ派感情の高まりは、最近の中東での敵対行為の激化によっても悪化した可能性が高い。」
引き締め政策を支持する当局者らは、インフレは家計の負担となっており、明確な緩和の兆候は見られないと主張した。最近の価格圧力は、ドナルド・トランプ大統領が課した関税とイラン紛争に関連したエネルギーコストの上昇を反映している。
6月の全委員会は、2026年末までに4分の1ポイントの引き上げを決定した。
異なる政策見解
クリストファー・ウォーラー総裁も最近、インフレをめぐる懸念を表明し、さらなる進展がなければ利上げが必要になる可能性があると述べた。しかし、彼はこの会議での保留に賛成票を投じた。
ウォーシュ氏としては、インフレは「選択」であると述べ、国会議事堂での最近の公聴会でも物価を抑制することの重要性を繰り返し強調した。
しかし、政策の観点からウォーシュ総裁は、金利予想についてフォワードガイダンスを提供するというFRBの過去の慣行に軽蔑を表明している。
ウォーシュ氏の最初の会談と同様に、声明は標準となっていたものよりもはるかに短かった。ウォーシュ氏はFRBのコミュニケーション方法を変えることを強調し、同氏が立ち上げた5つのタスクフォースのうちの1つをこの問題に対処するために専念させさえした。
会合までの数週間、同氏のFOMC同僚らは異なる政策見解を表明していた。
ニューヨーク連銀のウィリアムズ議長は、現在の政策がインフレ率を目標に戻すのに十分な位置にあるとの見方を示した。しかし、ローガン氏は「適度に」高い金利が必要になると反論した。ハマック氏はインフレタカ派でもあり、家計が軒並み高止まりする物価上昇の圧力にさらされていると指摘した。
今週初め、トランプ大統領はウォーシュ氏を「素晴らしい」と呼び、他のFRB当局者には「悪意」があり、おそらく政治的動機があると指摘し、ウォーシュ氏への支持を示した。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/29/fed-rate-decision-july-2026.html",
    publishedAt: "2026-07-29T18:58:16+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 5,
  },
  {
    id: "ford-s-big-truck-bet-is-paying-off-and-w-2622b63b",
    title: "Ford’s big-truck bet is paying off — and Wall Street is taking notice",
    titleJa: "フォードの大型トラックへの賭けが功を奏し、ウォール街も注目",
    summaryJa: "ウォール街ではGMほど愛されていないフォードでも、再建の物語が進行中である可能性がある。",
    bodyOriginal: `A turnaround story could be in the works at Ford, which gets less love than GM on Wall Street.`,
    bodyJa: `ウォール街ではGMほど愛されていないフォードでも、再建の物語が進行中である可能性がある。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/fords-big-truck-bet-is-paying-off-and-wall-street-is-taking-notice-6a1de0fb?mod=mw_rss_topstories",
    publishedAt: "2026-07-29T18:32:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-63854577",
    readTime: 2,
  },
  {
    id: "hims-and-hers-shares-fall-10-as-ftc-sues-d03e8bc8",
    title: "Hims and Hers shares fall 10% as FTC sues company over data, billing practices",
    titleJa: "FTCがデータと請求慣行をめぐり同社を告訴、ヒムズ・アンド・ハーズの株価は10％下落",
    summaryJa: "水曜日、遠隔医療会社ヒムズ・アンド・ハーズ・ヘルスの株価は、連邦取引委員会がプライバシー保護、請求慣行、定期購読のキャンセルについて消費者に誤解を与えたとして同社を告訴した後、急落した。FTCは、ロサンゼルス郡とユタ州も参加し、ヒムズ＆ハーズがウェブサイトに組み込まれた追跡技術を通じて、ユーザーの機密健康情報をメタプラットフォームやスナップ社などのオンライン広告プラットフォームと共有したと主張した。同庁は、同社の行為はユーザーの健康データを保護するという約束と矛盾していると述べた。",
    bodyOriginal: `Shares of telehealth company Hims & Hers Health fell sharply Wednesday after the Federal Trade Commission sued the company, alleging it misled consumers about privacy protections, billing practices and subscription cancellations.
The FTC, joined by Los Angeles County and Utah, alleged Hims & Hers shared users' sensitive health information with online advertising platforms including Meta Platforms and Snap Inc. through tracking technologies embedded on its website. The agency said the company's practices were inconsistent with promises it made to protect users' health data.
The FTC also accused Hims & Hers of charging customers for prescriptions before they have spoken with a healthcare provider. The agency alleges many customers are billed after completing an intake form rather than after a consultation with a medical professional.
The regulator further alleges the company made it difficult for users to cancel subscriptions.
Hims & Hers denied the allegation in a post on X, saying the lawsuit "disregards substantial evidence" provided during the FTC's nearly three-year investigation into the company and "contorts the law to try to manufacture claims."
The company said it is confident in its position and will "vigorously defend" itself.
The lawsuit comes as Hims & Hers has emerged as one of the largest telehealth providers in the fast-growing market for weight loss medications. The company offers virtual appointments and prescriptions for treatments including weight loss drugs, erectile dysfunction, hair loss and mental health medications, which are shipped directly to consumers.
The investigation by the FTC dates back to October 2023. CNBC has reported on several probes into Hims & Hers' business practices, including its Super Bowl ad and compounded weight loss drugs.
In April, the FTC formally communicated the findings of its probe started in 2023 to the company and settlement discussions began. In May, Hims & Hers disclosed a $15 million probable-loss accrual related to the matter, warning the final cost could be materially higher. The company said it made a settlement offer without admitting wrongdoing.
Wednesday's lawsuit escalates that dispute, with regulators pushing new claims.`,
    bodyJa: `水曜日、遠隔医療会社ヒムズ・アンド・ハーズ・ヘルスの株価は、連邦取引委員会がプライバシー保護、請求慣行、定期購読のキャンセルについて消費者に誤解を与えたとして同社を告訴した後、急落した。
FTCは、ロサンゼルス郡とユタ州も参加し、ヒムズ＆ハーズがウェブサイトに組み込まれた追跡技術を通じて、ユーザーの機密健康情報をメタプラットフォームやスナップ社などのオンライン広告プラットフォームと共有したと主張した。同庁は、同社の行為はユーザーの健康データを保護するという約束と矛盾していると述べた。
FTCはまた、ヒムズ＆ハーズが医療提供者と相談する前に顧客に処方箋の代金を請求したと非難した。同代理店は、多くの顧客が医療専門家との相談後ではなく、問診フォームに記入した後に料金を請求されていると主張している。
規制当局はさらに、同社がユーザーの定期購入のキャンセルを困難にしたと主張している。
Hims & HersはXへの投稿でこの疑惑を否定し、この訴訟はFTCによる同社に対する約3年間の調査中に提供された「重要な証拠を無視」し、「主張をでっち上げようと法律を歪曲している」と述べた。
同社は自社の立場に自信を持っており、「断固として弁護する」と述べた。
この訴訟は、ヒムズ＆ハーズが、急成長する減量薬市場において最大の遠隔医療プロバイダーの1つとして浮上した中で起こった。同社は、減量薬、勃起不全、脱毛薬、メンタルヘルス薬などの治療薬のバーチャル予約と処方箋を提供しており、それらは消費者に直接配送されます。
FTCによる調査は2023年10月に遡る。CNBCは、スーパーボウルの広告や配合された減量薬など、ヒムズ＆ハーズの商慣行に関するいくつかの調査について報じた。
4月にFTCは2023年に開始した調査結果を同社に正式に伝え、和解協議が始まった。ヒムズ・アンド・ハーズは5月、この問題に関連して1500万ドルの見込み損失が発生していることを明らかにし、最終的な費用は大幅に高くなる可能性があると警告した。同社は不正行為を認めずに和解案を提示したと述べた。
水曜日の訴訟はその論争をさらにエスカレートさせ、規制当局は新たな主張を押し進めている。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/29/hims-and-hers-ftc-lawsuit-stock.html",
    publishedAt: "2026-07-29T18:24:09+00:00",
    category: "貿易",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
    readTime: 2,
  },
  {
    id: "charities-unable-to-pay-staff-after-frau-9a7379f2",
    title: "Charities unable to pay staff after fraud alert",
    titleJa: "慈善団体、詐欺警告を受けて職員に給料を支払えない",
    summaryJa: "慈善団体、詐欺警告を受けて職員に給料を支払えない- 公開されました",
    bodyOriginal: `Charities unable to pay staff after fraud alert
- Published
Charities across the South East are worried they will not be able to pay staff and suppliers after being cut off from their online bank accounts.
CAF Bank, which is based in West Malling in Kent and serves more than 14,000 non-profit causes UK-wide, said its online services had been suspended since 24 July following reports of suspected cyber fraud.
As a result, the ability of some charities to manage essential operations like payroll has been impacted, such as Maidstone-based 21 Together, which helps people with Down's syndrome.
Its chief executive Kevan Hodges, who has a 13-strong team of education specialists and part-time staff, described the situation as "appalling".
"People are concerned that wages won't get paid because of this, and that's just stressful when they have bills to pay," he said.
"My team have wasted days trying to get through to (CAF Bank), but all in vain."
He added that when they finally did get hold of someone at the bank, which is owned by the Charities Aid Foundation, they were told to fill out an online form which "would be looked at tomorrow".
Others have also voiced their frustrations, such as Bali Rodgers, who is chief executive of Safer Communities Alliance.
"It's just not good enough," she said.
"Many of the grassroots organisations I represent - churches, YMCAs, vets - have CAF as their bank, but they are slowly losing trust in it."
Rodgers added that she had received "no reassurance" about the current situation from the bank, while any information had been "very inconsistent".
"It's especially sad that this has happened in the summer when lots of extra projects are up and running," she said.
"People are unable to access their own money and have been left feeling powerless - it makes me really angry."
In a statement, chief executive Alison Taylor said: "I am very sorry for the disruption this has caused for our customers.
"On Monday we informed them that the online banking service will be unavailable until further notice.
"We are working with external experts to fix an issue we identified with third-party software related to our online banking portal. Importantly, the core bank is not affected."
Taylor added: "We appreciate how difficult this is for our customers and want this to be resolved as quickly as possible, but we cannot restore access until we are assured the issue is safely resolved.
"We are still able to support as extra teams are available on the phone, and we are prioritising time-sensitive payments such as payroll."
Follow BBC Kent on Facebook, external, X, external, and on Instagram, external and listen to BBC Radio Kent on Sounds. Send your story ideas to southeasttoday@bbc.co.uk, external or WhatsApp us on 08081 002250.
Related topics
More stories like this
- Published7 July
- Published28 January`,
    bodyJa: `慈善団体、詐欺警告を受けて職員に給料を支払えない
- 公開されました
南東部各地の慈善団体は、オンライン銀行口座の利用が停止されたことで、スタッフやサプライヤーへの支払いができなくなるのではないかと懸念している。
ケント州ウェスト・マリングに拠点を置き、英国全土で1万4000以上の非営利活動を行っているCAF銀行は、サイバー詐欺の疑いがあるとの報告を受けて7月24日からオンラインサービスを停止していると発表した。
その結果、メードストンに本拠を置き、ダウン症の人々を支援する「21 Together」など、一部の慈善団体の給与計算などの重要な業務を管理する能力に影響が出ている。
教育専門家と非常勤スタッフからなる13人の強力なチームを擁する同社の最高経営責任者ケバン・ホッジス氏は、状況を「恐ろしい」と述べた。
「人々はこのせいで賃金が支払われないのではないかと心配しているが、支払わなければならない請求書があるとストレスになるだけだ」と彼は言う。
「私のチームは（CAF銀行に）連絡するために何日も無駄にしましたが、すべて無駄でした。」
同氏は、慈善援助財団が所有する銀行で最終的に誰かを捕まえたとき、「明日調べることになる」オンラインフォームに記入するように言われたと付け加えた。
セーファー・コミュニティー・アライアンスの最高責任者であるバリ・ロジャース氏など、他の人々も不満を表明している。
「それだけでは十分ではありません」と彼女は言いました。
「教会、YMCA、退役軍人など、私が代表を務める草の根団体の多くはCAFを銀行として持っていますが、CAFに対する信頼を徐々に失いつつあります。」
ロジャーズ氏は、現在の状況について銀行から「何の安心感も得ていない」一方、どの情報も「非常に一貫性がない」と付け加えた。
「多くの追加プロジェクトが立ち上がっている夏にこのようなことが起こったのは特に悲しいことです」と彼女は語った。
「人々は自分のお金にアクセスできず、無力感を感じさせられています。私は本当に腹が立ちます。」
アリソン・テイラー最高経営責任者（ＣＥＯ）は声明で「これにより当社の顧客に混乱を引き起こしたことを大変遺憾に思う。
「月曜日に、私たちはオンラインバンキングサービスが追って通知があるまで利用できなくなることを彼らに伝えました。
「当社は外部の専門家と協力して、当社のオンライン バンキング ポータルに関連するサードパーティ ソフトウェアで特定した問題の修正に取り組んでいます。重要なのは、中核となる銀行は影響を受けないことです。」
テイラー氏はさらに、「お客様にとってこれがどれほど困難であるかを認識しており、できるだけ早く解決したいと考えていますが、問題が安全に解決されたことが確認されるまでアクセスを復元することはできません。」
「追加のチームが電話で対応できるため、引き続きサポートが可能です。また、給与計算など時間に制約のある支払いを優先しています。」
Facebook (外部)、X (外部) で BBC Kent をフォローし、外部の Instagram で BBC Kent をフォローし、BBC Radio Kent on Sounds を聞いてください。ストーリーのアイデアを、southeasttoday@bbc.co.uk、社外、または WhatsApp (08081 002250) に送信してください。
関連トピック
このようなストーリーをもっと見る
- 7 月 7 日に公開
- 1 月 28 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cz7dlelz711o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-29T18:17:23+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/1c4a/live/13985170-1f8b-11f0-a007-45ee4cc6069d.jpg",
    readTime: 4,
  },
  {
    id: "todd-blanche-attorney-general-nomination-8664ff65",
    title: "Todd Blanche attorney general nomination on edge as Cornyn questions Trump-IRS settlement",
    titleJa: "トッド・ブランシュ司法長官指名が危うい、コーニン氏がトランプと国税庁の和解に疑問を呈",
    summaryJa: "水曜日、物議を醸しているドナルド・トランプ大統領による国税庁に対する訴訟の和解に関する懸念に対処することを目的としたブランチ氏との会談を、共和党の主要上院議員が二度目に中止したため、司法長官へのトッド・ブランチ氏の指名が危うくなった。テキサス州のジョン・コーニン上院議員は、トランプ氏らを和解前に提出された納税申告書に対する国税庁の監査から守る和解条項を明確にするという同氏の要求に司法省が応じなかったため、ブランシュ司法長官代理との座談を中止したと述べた。",
    bodyOriginal: `The nomination of Todd Blanche for attorney general was at risk on Wednesday as a key Republican senator, for the second time, called off a meeting with Blanche that was meant to address concerns about the controversial settlement of President Donald Trump's lawsuit against the IRS.
Sen. John Cornyn of Texas said he canceled the sit-down with the acting Attorney General Blanche because the Department of Justice has not met his demands to clarify provisions of the settlement that shield Trump and others from IRS audits for tax returns filed before the settlement.
Cornyn, whose vote Blanche needs for his nomination to advance out of the Senate Judiciary Committee, told reporters "beats me" when asked why the DOJ has not satisfied his concerns.
"Maybe they think I'm just going to give up or, you know, go along," Cornyn said, MS NOW reported. "But they're mistaken."
Cornyn also said he believed another Republican on the Judiciary Committee, Sen. Thom Tillis of North Carolina, "is pretty much on the same page as I am."
"So they better get real, and there's not much time left," Cornyn said.
Tillis, like Cornyn, has expressed concerns about another provision in the settlement, the creation of a $1.8 billion fund by the DOJ to compensate people who were purportedly victims of prosecutorial overreach by the department. Blanche said he canceled that fund after members of Congress harshly criticized it, but Tillis, Cornyn and others have asked for a written guarantee that the fund cannot be revived.
Blanche's nomination, to get a vote by the full Senate, needs to be advanced by a majority of the Judiciary Committee, which is set to vote Thursday. The committee has 12 Republican members and 10 Democrats. Every Democrat is expected to vote against Blanche.
If Cornyn or Tillis were to vote against Blanche, it would prevent his nomination from moving to the full Senate.
Cornyn said Judiciary Committee Chairman Sen. Chuck Grassley, R-Iowa, told him he needed to know by 4 p.m. ET on Wednesday whether the panel's vote on Blanche's nomination could proceed as planned Thursday.
"So, we still got a little time, and hopefully they now recognize the seriousness of this," Cornyn said.
Asked if he would vote "no" on advancing Blanche's nomination to the full Senate, Cornyn replied: "Well, I'm not prepared to vote 'yes.' Let me put it that way."
The settlement that Cornyn wants amended resolved a lawsuit Trump filed against the IRS over the illegal leaking of his tax records by an agency contractor.
Cornyn wants, in writing from the DOJ, assurances that Blanche gave in his confirmation hearing about provisions of the settlement that shielded Trump, family members and business entities from IRS audits and enforcement actions related to tax returns filed by the date of the settlement.
Blanche had testified that the settlement is not intended to protect people who were not parties to the lawsuit, that it is not intended to provide prospective immunity from tax audits, and that it does not apply to any government agency other than the IRS and Treasury Department.
"To me, it's pretty simple. They can state that in a modified release form, and that would be responsive to my request," Cornyn said. "But for some reason, I don't know whether it's the staff of the DOJ or who it is, but they simply ... know what they need to do, but they simply refuse to do it."
A DOJ official, in a statement to CNBC when asked about Cornyn's claim, said, "The DOJ provided a written proposal to Senator Cornyn's staff yesterday following ongoing discussion with both the Committee and the Senator's office."
"We look forward to further discussion around any outstanding concerns," the official said.
Cornyn said earlier, "I haven't seen a single piece of writing that is responsive to what I've requested."
Cornyn is set to leave the Senate in January, having lost a Republican primary runoff to Texas Attorney General Ken Paxton in May. Trump had endorsed Paxton. Tillis is retiring from the Senate at the end of his term in January, leaving both senators in a position to take political positions without concern for winning reelection.`,
    bodyJa: `水曜日、物議を醸しているドナルド・トランプ大統領による国税庁に対する訴訟の和解に関する懸念に対処することを目的としたブランチ氏との会談を、共和党の主要上院議員が二度目に中止したため、司法長官へのトッド・ブランチ氏の指名が危うくなった。
テキサス州のジョン・コーニン上院議員は、トランプ氏らを和解前に提出された納税申告書に対する国税庁の監査から守る和解条項を明確にするという同氏の要求に司法省が応じなかったため、ブランシュ司法長官代理との座談を中止したと述べた。
コーニン氏はブランシュ氏が上院司法委員会からの脱退に指名獲得に必要な票を獲得しているが、司法省が自身の懸念を満たさない理由を問われ、記者団に対し「勝てる」と語った。
「たぶん彼らは、私が諦めるか、それとも従うつもりだと思っているのかもしれない」とコーニンさんは語った、とMS NOWは報じた。 「しかし、彼らは間違っています。」
コーニン氏はまた、司法委員会のもう一人の共和党議員、トム・ティリス上院議員（ノースカロライナ州）も「私とほぼ同じ考えを持っている」と信じていると述べた。
「だから、本気になったほうがいい。もう時間はあまり残っていない」とコーニン氏は語った。
ティリス氏はコーニン氏と同様、和解条項の別の条項、つまり司法省による検察の行き過ぎの被害者とされる人々に補償するため司法省が18億ドルの基金を創設することについて懸念を表明している。ブランシュ氏は、議会議員らが同基金を厳しく批判したため同基金を中止したと述べたが、ティリス氏やコーニン氏らは基金を復活させることができないという書面による保証を求めている。
ブランシュ氏の指名が上院全会一致で投票するには、木曜日に投票が予定されている司法委員会の過半数が賛成する必要がある。同委員会には共和党員12名、民主党員10名が所属している。すべての民主党員はブランシュに反対票を投じることが期待されている。
コーニン氏かティリス氏がブランチ氏に反対票を投じれば、同氏の指名が上院本会議に移るのが妨げられるだろう。
コーニン氏は、司法委員会委員長のチャック・グラスリー上院議員（共和党、アイオワ州）から午後４時までに知らせる必要があると言われたと述べた。 ETは水曜日、ブランシュ氏の指名に関する委員会の投票が木曜日に計画通りに行われるかどうかを判断する。
「だから、私たちにはまだ少し時間がある。彼らがこのことの深刻さを認識してくれることを願っている」とコーニン氏は語った。
コーニン氏は、ブランシュ氏の指名を上院本会議に進めることに「ノー」に投票するかとの質問に、「そうですね、『イエス』に投票する用意はありません」と答えた。そう言わせてください。」
コーニン氏が修正を望んでいる和解案は、代理店契約業者による納税記録の違法漏洩を巡りトランプ氏が国税庁に対して起こした訴訟を解決したものである。
コーニン氏は司法省からの書面で、トランプ氏とその家族、事業体をIRSの監査や和解日までに提出された納税申告書に関連した強制措置から守る和解条項についてブランチ氏が承認公聴会で述べた保証を求めている。
ブランシュ氏は、和解案は訴訟の当事者ではない人々を保護することを目的としたものではなく、税務調査からの将来的な免除を目的とするものではなく、IRSと財務省以外の政府機関には適用されないと証言した。
「私にとって、それは非常に簡単です。彼らは修正されたリリースフォームでそれを述べることができます、そしてそれは私の要求に応えるでしょう」とコーニン氏は言いました。 「しかし、どういうわけか、それが司法省の職員なのか、それとも誰なのかはわかりませんが、彼らはただ…何をしなければならないのか分かっているのに、それをすることを単に拒否しているのです。」
司法省当局者はCNBCへの声明の中で、コーニン氏の主張について問われ、「司法省は委員会と上院議員事務所の双方との継続的な議論を経て、昨日コーニン上院議員のスタッフに書面による提案を提出した」と述べた。
同当局者は「未解決の懸念事項についてさらなる議論を期待している」と述べた。
コーニン氏は以前、「私の要求に応えた文章は一つも見たことがない」と語った。
コーニン氏は５月の共和党予備選決選投票でテキサス州司法長官ケン・パクストン氏に敗れたため、１月に上院を辞職する予定だ。トランプ氏はパクストン氏を支持していた。ティリス氏は1月の任期満了で上院議員を引退するため、両上院議員は再選を気にすることなく政治的立場に就くことができる立場にある。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/29/todd-blanche-attorney-general-trump-irs-audit-cornyn.html",
    publishedAt: "2026-07-29T17:42:03+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 5,
  },
  {
    id: "procter-gamble-revenue-misses-estimates-9698e08c",
    title: "Procter & Gamble revenue misses estimates as volume stays unchanged",
    titleJa: "プロクター・アンド・ギャンブルの売上高は予想を下回る、売上高は変わらない",
    summaryJa: "プロクター・アンド・ギャンブルは水曜日、同社製品に対する圧倒的な需要により売上高が予想を下回ったため、まちまちの四半期決算を報告した。同社株は午前の取引で約３％下落した。",
    bodyOriginal: `Procter & Gamble on Wednesday reported mixed quarterly results, as underwhelming demand for its products resulted in weaker-than-expected sales.
Shares of the company fell roughly 3% in morning trading.
Here's what Procter & Gamble reported compared with what Wall Street was expecting, based on a survey of analysts by LSEG:
- Earnings per share: $1.43 adjusted vs. $1.41 expected
- Revenue: $21.2 billion vs. $21.38 billion expected
P&G reported fiscal fourth-quarter net income attributable to the company of $3.04 billion, or $1.26 per share, down from $3.62 billion, or $1.48 per share, a year earlier.
Excluding restructuring costs, transaction gains and other items, the company earned $1.43 per share.
Net sales rose 2% to $21.2 billion. The company's organic revenue, which excludes acquisitions, divestitures and currency fluctuations, was unchanged for the quarter, thanks to flat volume across P&G's portfolio.
During P&G's full fiscal year 2026, the company has reported volume growth in just one quarter. Like many consumer companies, it has seen demand for its products weaken as shoppers have grown more value conscious, opting for value packs or stretching their products' lifespan longer.
"For the fourth quarter, we saw improving global share trends versus prior period, but headline results were impacted by trade dynamics in the U.S. and the spike in input costs," CFO Andre Schulten said on the company's earnings conference call.
He later said that P&G plans to return to growing its sales through a mix of both price and higher volume.
"In a broader sense, we've had in the post-Covid period, 100% of growth driven by price," Schulten said. "We will return ... to a more balanced model."
The company has been focusing on innovation and strengthening its core brands, like Tide, to win back shoppers.
Schulten said that P&G plans to spend more on media, which has grown increasingly fragmented, making it more difficult to connect with consumers. The company is also navigating the changing world of digital commerce, which now includes shopping agents and artificial intelligence-powered search.
Which segments are selling
For the fiscal fourth quarter, P&G's beauty division was the top performer, posting 3% volume growth. The segment includes Pantene shampoo and Olay and SK-II skincare products.
Fabric and home care was the only other reporting segment to see volume growth. The division, which includes Tide detergent and Swiffer, reported that its volume rose 1% in the quarter.
P&G's baby, feminine and family care division as well as its grooming business both reported that volume fell 1%.
Health care was the worst performer for P&G this quarter. The division, which houses Oral-B and Vicks, saw its volume shrink 3%, fueled by declining sales of its oral care products.
Looking ahead to the next fiscal year, the company is not projecting a significant upswing in demand for its products.
For fiscal 2027, P&G expects core earnings per share in a range of $6.89 to $7.11. The company is also projecting all-in sales growth in the range of 1% to 3% compared with the prior year.
"The low end of the range protects for additional softness in underlying market growth rates," Schulten said. "The high end would require acceleration in underlying market growth rates and market shares."
Wall Street was anticipating earnings per share of $7.04 and revenue growth of 2.7% for fiscal 2027.
P&G is currently estimating a $1 billion headwind after taxes from higher costs for raw materials, energy and transportation. Combined with its projections for a higher net interest expense, lower non-operating income and unfavorable exchange rates, P&G anticipates an 8% — or 56 cent — drag on its earnings per share for fiscal 2027.
P&G also announced Wednesday that CEO Shailesh Jejurikar will become chair of the board, effective Aug. 1, in addition to his current role. He replaces former chief executive Jon Moeller.`,
    bodyJa: `プロクター・アンド・ギャンブルは水曜日、同社製品に対する圧倒的な需要により売上高が予想を下回ったため、まちまちの四半期決算を報告した。
同社株は午前の取引で約３％下落した。
以下は、LSEGによるアナリスト調査に基づいて、プロクター・アンド・ギャンブルが報告した内容とウォール街の予想を比較したものである。
- 1 株当たり利益: 調整後 1.43 ドル、予想 1.41 ドル
- 収益: 212 億ドル対予想 213 億 8,000 万ドル
P&Gは、同社に帰属する会計年度第4四半期の純利益が30億4000万ドル（1株当たり1.26ドル）と、前年同期の36億2000万ドル（1株当たり1.48ドル）から減少したと報告した。
リストラ費用や取引益などを除くと、同社は１株当たり１．４３ドルの利益を上げた。
純売上高は２％増の２１２億ドルとなった。買収、売却、為替変動を除いた同社の本業収益は、P&Gのポートフォリオ全体で売上高が横ばいだったため、当四半期を通じて変化はありませんでした。
P&G の 2026 年度通期中、同社はわずか 1 四半期で販売量の増加を報告しました。多くの消費者企業と同様に、買い物客がバリューパックを選択したり、製品の寿命を延ばしたりするなど、価値に対する意識が高まるにつれ、同社製品の需要が弱まっていくのを目の当たりにしている。
アンドレ・シュルテン最高財務責任者（ＣＦＯ）は決算会見で、「第４・四半期については、世界シェアの傾向が前期に比べて改善したが、主要業績は米国の貿易動向と投入コストの高騰の影響を受けた」と述べた。
同氏は後に、P&Gは価格と販売量の増加の両方を組み合わせて売上を伸ばす計画に戻るつもりだと語った。
シュルテン氏は「広い意味で、新型コロナウイルス感染症以降の成長は100％価格主導だった」と述べた。 「私たちは…よりバランスの取れたモデルに戻ります。」
同社は、買い物客を取り戻すためにイノベーションに注力し、Tideなどの中核ブランドを強化している。
シュルテン氏は、P&Gはますます断片化が進み、消費者とのつながりがより困難になっているメディアへの支出を増やす計画だと述べた。同社はまた、現在ではショッピング エージェントや人工知能を利用した検索を含むデジタル コマースの変化する世界にも対応しています。
どのセグメントが売れているのか
会計年度第 4 四半期では、P&G の美容部門が 3% の販売量増加を記録し、最高の業績を上げました。このセグメントには、パンテーン シャンプー、オーレイおよび SK-II スキンケア製品が含まれます。
ファブリックおよびホームケアは、他の報告セグメントで唯一販売量が増加しました。 Tide洗剤とSwifferを含む同部門は、同四半期の取扱量が1%増加したと報告した。
Ｐ＆Ｇのベビー、フェミニン、ファミリーケア部門とグルーミング事業はいずれも販売量が１％減少したと報告した。
P&Gにとって今四半期の業績が最も悪かったのはヘルスケアだった。オーラルBとヴィックスを擁する同部門は、オーラルケア製品の売上減少により、売上高が3％縮小した。
来年度に向けて、同社は製品の需要が大幅に増加するとは予想していません。
P&Gは2027年度の1株あたりの中核利益が6.89ドルから7.11ドルの範囲になると予想している。同社はまた、総売上高が前年比 1% ～ 3% の範囲で増加すると予測しています。
シュルテン氏は「レンジの下限は基調的な市場成長率のさらなる軟化を防ぐ」と述べた。 「ハイエンドでは、基礎的な市場成長率と市場シェアの加速が必要となるだろう。」
ウォール街は2027年度の1株利益が7.04ドル、売上高が2.7％増加すると予想していた。
Ｐ＆Ｇは現在、原材料、エネルギー、輸送コストの上昇により税引き後１０億ドルの逆風が生じると試算している。純支払利息の増加、営業外収益の減少、不利な為替レートの予測と組み合わせると、P&G は 2027 会計年度の 1 株当たり利益を 8% (56 セント) 押し下げると予想しています。
Ｐ＆Ｇは水曜日、シャイレシュ・ジェジュリカール最高経営責任者（ＣＥＯ）が現在の職に加え、８月１日付けで取締役会長に就任すると発表した。同氏は前最高経営責任者ジョン・モラー氏の後任となる。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/29/procter-gamble-pg-q4-2026-earnings.html",
    publishedAt: "2026-07-29T14:07:21+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 5,
  },
  {
    id: "jpmorgan-schwab-and-ubs-manage-millions-3db497d6",
    title: "JPMorgan, Schwab and UBS manage millions in Trump's $858 million investment portfolio",
    titleJa: "JPモルガン、シュワブ、UBSはトランプ氏の8億5,800万ドルの投資ポートフォリオの数百万ドルを管理している",
    summaryJa: "CNBCの分析によると、トランプ氏の資産を少なくとも8億5,800万ドル相当の口座で管理している企業には、JPモルガン、シュワブ、UBS、スティーブンス社などが含まれる。",
    bodyOriginal: `For years, the financial institutions handling President Donald Trump's sprawling investment portfolio have remained one of the most mysterious parts of his personal finances.
A CNBC analysis of Trump's 2025 annual financial disclosure filed with the Office of Government Ethics has linked JPMorgan Chase, Charles Schwab, UBS and Stephens Inc. to at least four of his eight numbered investment accounts: Account Nos. 3, 5, 6 and 8.
CNBC traced the connections through firm-specific investment funds, deposit programs and credit arrangements embedded in the portfolios. Separate analyses by three financial-industry experts, who asked not to be named because of the sensitivity of the president's holdings, corroborated CNBC's findings.
The disclosure does not always specify whether or to what extent each institution served as an investment manager, broker, custodian or in another capacity. The Wall Street Journal reported that a fifth account, Account No. 7, is managed by Schwab, though CNBC has not independently verified that relationship. Schwab declined to comment on whether Trump is a client.
Across all eight accounts, Trump disclosed at least $858 million in assets in 2025 — up from at least $237 million a year earlier — and more than 21,000 trades during the year.
The findings offer the clearest picture yet of who is handling Trump's portfolio and shed new light on the ties between hundreds of millions of dollars of the president's personal fortune and financial institutions.
CNBC found no evidence that the financial relationships influenced any government action or that Trump directed any specific transaction.
The Trump Organization told CNBC that outside financial institutions, not Trump, controlled the individual investment decisions. A spokesperson said the president's assets were placed in fully discretionary accounts that rely heavily on automated strategies to reduce potential conflicts of interest.
"There are no conflicts of interest," White House spokesperson Anna Kelly told CNBC when asked about Trump's banking.
Nevertheless, financial experts who spoke with CNBC said the arrangements put the firms in a sensitive position because they are tied to the wealth of a sitting president who can shape banking policy and regulation and who retains extensive domestic and foreign financial interests.
Ross Delston, a former FDIC banking regulator and lawyer who specializes in anti-money-laundering laws, said Trump's expansive global business interests, past legal and financial troubles and broad authority over the economy create "extraordinary" compliance and reputational risks for institutions — but also bring the prospect of substantial fees and potential access to the sitting president.
"It's quite remarkable to me that banks do seem to be interested in doing business with our president, given his history," Delston told CNBC. "They get access — access to the president of the United States. And that is known in my business as priceless."
Delston said, "The only way to view the president would be as an ultra-high-risk client from virtually every standpoint."
JPMorgan Chase did not respond to multiple detailed requests for comment about CNBC's findings and methodology. Stephens declined to comment.
A UBS spokesperson told CNBC in a statement that the bank had "no comment on this."
"As you know, we can't comment on client matters, regardless of whether a relationship exist or has ever existed," the spokesperson said.
Inside the trading
During Trump's entire first term, he made roughly 500 trades, according to his earlier disclosures. In 2025, that figure exceeded 21,000, driven at least in part by the automated investment strategy the Trump Organization says the president uses.
The bulk of those trades were linked to Schwab, UBS and JPMorgan, according to a CNBC analysis comparing the volume and value of transactions associated with each account in the financial disclosure.
Of the firms identified, Schwab appears to have the most extensive involvement with Trump's money, based on value and trading volume.
CNBC linked the firm to Account No. 6, which held at least $163 million. The Wall Street Journal reported that Schwab manages a second account, Account No. 7.
According to the Journal, Account No. 7 held about $302 million and the disclosure shows it generated about 10,500 transactions in 2025 — nearly half of Trump's disclosed trades. It was far the busiest and included major positions in Apple, Microsoft and Nvidia.
"We have strict policies governed by regulation regarding client privacy and do not comment on any current or former clients," Schwab spokesperson Mayura Hooper said in a statement to CNBC. She declined to comment on accounts 6 and 7. "Schwab serves 46 million client accounts, across different backgrounds, political affiliations, professions and viewpoints — and we apply the same standards to every client relationship."
The size and activity of both accounts associated with Schwab would not necessarily be unusual for an ultrawealthy investor, said Larry Harris, a former chief economist at the Securities and Exchange Commission. Nor would Schwab be an unusual choice for such a portfolio, Harris told CNBC.
"This is typical for people with large portfolios, and Schwab can be cheaper and provide greater control over tax timing," said Harris, now a finance professor at the University of Southern California Marshall School of Business.
Trump's disclosure also showed that Schwab extended a pledged-asset line of credit of more than $50 million to his trust, allowing the trust to borrow against securities without selling them. The proceeds generally cannot be used to purchase additional securities.
Unlike other major banks such as JPMorgan and Capital One, Schwab was not among the institutions the Trump family accused of cutting ties with them after the Jan. 6 insurrection.
The JPMorgan-linked Account No. 8 was active around the same time Trump accused the bank of "debanking" him for political reasons.
Account No. 8 disclosed 336 trades worth up to roughly $5.5 million on Aug. 4, 2025, the day before Trump's complaints. It reported another 50 trades worth up to $785,000 on Aug. 7, when Trump signed an executive order on debanking, and continued reporting transactions through December.
CNBC calculated the totals via the reported value ranges of each transaction.
Trump later sued JPMorgan and CEO Jamie Dimon for $5 billion, alleging the bank closed accounts belonging to him and his businesses for political reasons and placed them on a banking "blacklist." JPMorgan did not respond to requests for comment but has previously denied the allegations and said the lawsuit has no merit.
The case remains pending, with no hearing or trial date scheduled as the court weighs whether to return it to Florida state court or transfer it to federal court in New York.
Other firms in addition to JPMorgan, Schwab and UBS appeared in narrower roles.
A Stephens-linked account, Account No. 5, held $1 million to $5 million in a bank-sweep program. The same account also held up to $66,001 in Stifel's FDIC-insured bank deposit program, which experts consulted by CNBC said was consistent with a residual balance left behind as the account moved from Stifel's program to the program at Stephens program.
Stifel did not respond to requests for comment.
Two of Trump's disclosed accounts, Nos. 4 and 8, also held Fidelity-branded mutual funds within broader portfolios that included large-cap stocks and municipal bonds.
"Based on the publicly disclosed materials, the president's accounts appear to include two Fidelity mutual funds," said a person with knowledge of the funds who asked not to be named because they were not authorized to speak publicly on the matter.
Who controls the trades
Trump has said his family oversees a trust while outside financial institutions control the investment decisions. But he hasn't named the firms.
"My kids run it," Trump said in a July 2 CNBC interview. "I've made a tremendous amount of money, more than I would have ever thought I would have made, and I let people invest it I don't even speak to."
Eric Trump wrote on X in May that the financial firms have "sole and exclusive authority over all investment decisions, including asset allocation, trading, rebalancing, and portfolio management."
A Trump Organization spokesperson told CNBC that, to reduce potential conflicts of interest, Trump's portfolio relies heavily on direct indexing, an automated investment strategy increasingly used by wealthy investors.
Rather than buying an index fund, a direct-indexing account holds individual stocks selected to track a benchmark such as the S&P 500. Software continually buys, sells and rebalances the holdings to keep the portfolio aligned with the index.
"This is computer-driven trading," said Harris, the former SEC chief economist.
The approach can produce large bursts of transactions during volatile markets, when price swings create more opportunities to rebalance holdings or sell depreciated stocks to reduce an investor's tax bill.
For example, Trump's disclosures show a wave of purchases around major tariff news. On April 2, 2025, Trump announced sweeping tariffs that sent stocks tumbling. He paused most of them a week later, sending markets sharply higher, though he imposed a sweeping new tariff regime last week.
CNBC found no evidence that Trump or his family directed the individual transactions, including anything in anticipation of the tariff decision.
"Given that you have trustworthy fiduciaries who are involved in the process," Harris said, "it's really unlikely that any game playing is in those organizations. It's almost impossible to imagine it."
Direct indexing can also lower an investor's tax bill through tax-loss harvesting. When one stock declines, the software can sell it to capture the loss and buy another security that preserves the portfolio's broader market exposure. Those losses can then offset capital gains elsewhere in the portfolio.
Rules and regulations
Federal ethics rules require that if a president is using a blind trust to manage holdings while in office, it be controlled by an independent trustee and sharply restrict communications with the beneficiary about the holdings.
By contrast, much of Trump's wealth remains in a revocable trust of which he is the sole beneficiary, according to SEC filings. Donald Trump Jr. serves as trustee and holds sole voting power over certain assets, according to an SEC filing. A revocable trust can generally be amended — such as by replacing the trustee or changing beneficiaries — or dissolved by the person who established it.
Every president from Jimmy Carter through Joe Biden, except Trump, either established blind trusts or limited their investments to assets generally considered unlikely to create conflicts, such as diversified mutual funds, according to the Office of Government Ethics. Biden's disclosures showed no individual stock holdings.
The public records do not show whether Trump has exercised any power to amend or revoke the trust.
That gap between control over individual trades and ultimate ownership also creates compliance and reputational risks for the financial institutions managing Trump's money, Delston said.
"Banks that take him on have made a calculus that all of the truckloads of baggage that he brings is still worthwhile, whether because of the fees they can collect or other benefits of the relationship," he said.
Banks would almost always treat a sitting president as a "politically exposed person," or PEP, under their internal risk frameworks because the office can carry heightened corruption and money laundering exposure, Delston said.
"PEPs are expected to be given enhanced scrutiny, both at the onboarding stage and periodically through monitoring of their activities," Delston said.
Under federal anti-money-laundering rules, banks must understand the purpose of the relationship, know what activity should normally be expected, develop a risk profile and monitor for suspicious transactions.
For a client such as Trump, Delston said, that can mean contemporaneous review of wire transfers, checks, securities trades and other transactions to determine whether they raise suspicious-activity concerns.
"It isn't just determining whether there is suspicious activity involved," Delston said. "His accounts at any financial institution would require real-time monitoring."
That level of scrutiny can require additional spending on compliance personnel, technology, lawyers and outside advisors. Banks serving a sitting president also face reputational and political risks, including public scrutiny over whether the relationship could affect their dealings with the administration.
CNBC could not determine how much the firms earned from Trump's accounts.
"Banks charge people like the president high fees in whatever they do, in order to make up for some of the risk," Delston said. "Whether the fees are ever high enough is unknowable."`,
    bodyJa: `長年にわたり、ドナルド・トランプ大統領の広大な投資ポートフォリオを扱う金融機関は、同大統領の個人資産の中でも最も謎に包まれた部分の一つであった。
政府倫理局に提出されたトランプ大統領の2025年の年次財務情報開示に関するCNBCの分析では、JPモルガン・チェース、チャールズ・シュワブ、UBS、スティーブンズ社が同氏の8つの番号付き投資口座のうち少なくとも4つ（口座番号3、5、6、8）に関連付けられていることが判明した。
CNBCは、企業固有の投資ファンド、預金プログラム、ポートフォリオに組み込まれた信用協定を通じたつながりを追跡した。金融業界の専門家３人による個別の分析（大統領の保有資産は機密性が高いため匿名を希望）は、ＣＮＢＣの調査結果を裏付けた。
この開示は、各機関が投資マネージャー、ブローカー、カストディアン、あるいはその他の立場での役割を果たしたかどうか、あるいはどの程度の役割を果たしたかを常に特定しているわけではありません。ウォール・ストリート・ジャーナルは、5番目の口座である口座番号7がシュワブによって管理されていると報じたが、CNBCはその関係を独自に検証していない。シュワブ氏はトランプ氏が顧客かどうかについてコメントを控えた。
トランプ氏は8つの口座すべてで、2025年の資産総額が少なくとも8億5,800万ドル（前年の少なくとも2億3,700万ドルから増加）と、年間2万1,000件以上の取引を明らかにした。
この調査結果は、トランプ大統領のポートフォリオを誰が管理しているのかについてこれまでで最も明確な実態を明らかにし、大統領の数億ドルもの個人財産と金融機関との関係に新たな光を当てている。
CNBCは、金融関係が政府の行動に影響を与えた、あるいはトランプが特定の取引を指示したという証拠は見つからなかった。
トランプ・オーガナイゼーションはＣＮＢＣに対し、トランプ氏ではなく外部の金融機関が個々の投資決定を管理していると語った。報道官は、大統領の資産は潜在的な利益相反を減らすための自動戦略に大きく依存する完全裁量口座に置かれていると述べた。
ホワイトハウスのアンナ・ケリー報道官はトランプ大統領の銀行業務について問われ、「利益相反はない」とCNBCに語った。
それにもかかわらず、CNBCの取材に応じた金融専門家らは、両社は銀行政策や規制を形成でき、国内外の広範な金融利益を保持している現職大統領の富と結びついているため、今回の取り決めはデリケートな立場にあると述べた。
元FDIC銀行規制当局者でマネーロンダリング防止法を専門とする弁護士のロス・デルストン氏は、トランプ大統領の世界的な事業利益の拡大、過去の法的・財政的トラブル、経済に対する広範な権限が各機関に「並外れた」コンプライアンスと評判のリスクを生み出しているが、同時に多額の手数料や現職大統領へのアクセスの可能性の可能性ももたらしていると述べた。
デルストン氏はCNBCに対し、「大統領の経歴を考慮すると、銀行が大統領との取引に関心を示しているようであることは非常に注目に値する」と語った。 「彼らはアクセス権、つまり米国大統領へのアクセス権を得るのです。そしてそれは私のビジネスでは貴重なものとして知られています。」
デルストン氏は、「事実上あらゆる立場から大統領を超高リスクの顧客とみなす唯一の方法だろう」と語った。
JPモルガン・チェースはCNBCの調査結果と方法論に関する複数の詳細なコメント要請に応じなかった。スティーブンス氏はコメントを控えた。
ＵＢＳの広報担当者はＣＮＢＣに対し、同行は「この件についてコメントはない」と声明で述べた。
広報担当者は「ご存知のとおり、関係が存在するか、過去に存在したかに関係なく、顧客の問題についてコメントすることはできない」と述べた。
取引の内部
以前の暴露によれば、トランプ大統領の最初の任期全体で約500件の取引を行った。 2025年には、その数字は2万1000件を超えたが、これは少なくとも一部はトランプ・オーガナイゼーションによる大統領の自動投資戦略によるものだという。
財務開示の各口座に関連する取引量と取引額を比較したCNBCの分析によると、これらの取引の大部分はシュワブ、UBS、JPモルガンに関連していた。
金額や取引量から判断すると、特定された企業の中でシュワブがトランプ氏の資金に最も広範囲に関与しているとみられる。
CNBCは同社を少なくとも1億6,300万ドルを保有する口座番号6に関連付けた。ウォール・ストリート・ジャーナルは、シュワブ氏が2番目の口座である口座番号7を管理していると報じた。
同紙によると、口座番号7には約3億200万ドルが保管されており、その開示によれば、2025年には約1万500件の取引が発生しており、これはトランプ大統領が開示した取引のほぼ半分に相当する。それは最も多忙で、Apple、Microsoft、Nvidia の主要なポジションが含まれていました。
シュワブの広報担当マユラ・フーパー氏はCNBCへの声明で、「当社は顧客のプライバシーに関する規制に基づいた厳格なポリシーを持っており、現在または元の顧客についてはコメントしない」と述べた。彼女はアカウント6と7についてはコメントを控えた。「シュワブは、さまざまな背景、所属政党、専門職、立場を超えて4,600万の顧客アカウントにサービスを提供しており、すべての顧客との関係に同じ基準を適用している。」
証券取引委員会の元チーフエコノミスト、ラリー・ハリス氏は、シュワブに関連する両口座の規模と活動は、超富裕層の投資家にとって必ずしも珍しいことではない、と述べた。ハリス氏はCNBCに対し、シュワブがそのようなポートフォリオにとって珍しい選択ではないと語った。
現在、南カリフォルニア大学マーシャル・スクールで金融教授を務めるハリス氏は、「これは大規模なポートフォリオを持つ人々に典型的なことであり、シュワブの方がより安価で、納税時期をより細かく制御できる可能性がある」と述べた。
トランプ大統領の開示はまた、シュワブ氏が自身の信託に5,000万ドルを超える質権資産の融資枠を延長し、信託が有価証券を売却せずに借り入れできるようにしたことも示した。通常、収益を追加の有価証券の購入に使用することはできません。
JPモルガンやキャピタル・ワンなどの他の大手銀行とは異なり、シュワブは1月6日の暴動後にトランプ一家が銀行との関係を断ったとして非難した金融機関には含まれていなかった。
JPモルガンに関連する口座番号8は、トランプ大統領が政治的理由で同銀行を「銀行から切り離した」と非難したのとほぼ同時期に活動していた。
口座番号8は、トランプ大統領の告訴の前日である2025年8月4日に、最大約550万ドル相当の336件の取引を明らかにした。同紙は、トランプ大統領が銀行取引廃止に関する大統領令に署名した8月7日にさらに50件の最大78万5000ドル相当の取引を報告し、12月まで取引の報告を続けた。
CNBC は、各取引の報告された値の範囲に基づいて合計を計算しました。
トランプ氏はその後、JPモルガンとジェイミー・ダイモン最高経営責任者（CEO）に対し、同銀行が政治的理由で同氏と同氏の事業に属する口座を閉鎖し、銀行の「ブラックリスト」に載せたとして、50億ドルを求める訴訟を起こした。 ＪＰモルガンはコメントの要請に応じていないが、これまでに疑惑を否定し、訴訟にはメリットがないと述べた。
この訴訟は係争中であり、裁判所は訴訟をフロリダ州裁判所に差し戻すか、ニューヨークの連邦裁判所に移送するかを検討しているため、公聴会や公判の日程は予定されていない。
JPモルガン、シュワブ、UBS以外の企業も、より狭い役割を担っているようだ。
スティーブンスに関連する口座である口座番号 5 は、銀行掃討プログラムで 100 万ドルから 500 万ドルを保有していた。同じ口座には、スティフェルのFDIC保険付き銀行預金プログラムにも最大6万6001ドルが保管されており、CNBCが相談した専門家らは、この口座がスティフェルのプログラムからスティーブンズ・プログラムのプログラムに移行した際に残された残高と一致すると述べた。
シュティフェル氏はコメントの要請に応じなかった。
トランプ氏が開示した口座のうち4番と8番の2つも、大型株や地方債を含む広範なポートフォリオ内でフィデリティ・ブランドの投資信託を保有していた。
「公開された資料によると、大統領の口座には2つのフィデリティ・ミューチュアルファンドが含まれているようだ」と、この問題について公に話す権限がないため匿名を求めたファンド関係者は述べた。
誰が取引を管理するのか
トランプ大統領は、外部の金融機関が投資決定をコントロールする一方で、家族が信託を監督していると述べた。しかし、同氏は企業名を明らかにしていない。
トランプ大統領は7月2日のCNBCインタビューで「私の子供たちが経営している」と語った。 「私は自分が稼ぐだろうと思っていた以上に莫大な金を稼いだのに、口もきけない人々にその金を投資させている。」
エリック・トランプ氏は5月にXに、金融会社は「資産配分、取引、リバランス、ポートフォリオ管理を含むすべての投資決定に関して唯一かつ独占的な権限」を持っていると書いた。
トランプ・オーガニゼーションの広報担当者はＣＮＢＣに対し、潜在的な利益相反を減らすため、トランプ氏のポートフォリオは富裕層投資家の間で利用が増えている自動投資戦略であるダイレクト・インデックスに大きく依存していると語った。
インデックス ファンドを購入するのではなく、直接インデックス口座には、S&P 500 などのベンチマークを追跡するために選択された個別の株式が保持されます。ソフトウェアは継続的に保有株を売買し、リバランスして、ポートフォリオをインデックスと一致させます。
元SECチーフエコノミストのハリス氏は、「これはコンピューター主導の取引だ」と述べた。
このアプローチでは、価格変動により保有株のバランスを調整したり、投資家の税金を減らすために減価した株式を売却したりする機会が増えるため、市場が不安定なときに大量の取引が発生する可能性があります。
例えば、トランプ大統領の情報開示は、主要な関税ニュースを中心に購入の波が起きていることを示している。 2025年4月2日、トランプ大統領は大幅な関税を発表し、株価は急落した。同氏は先週、大幅な新たな関税制度を導入したものの、1週間後にその大半を停止し、市場を急騰させた。
CNBCは、関税決定を見越したものも含め、トランプ大統領またはその家族が個別の取引を指示したという証拠は見つからなかった。
「プロセスに関与する信頼できる受託者がいることを考えると、そのような組織でゲームが行われる可能性は非常に低い。想像するのはほとんど不可能だ」とハリス氏は語った。
直接インデックスは、税損失の回収を通じて投資家の税額を下げることもできます。ある銘柄が下落した場合、ソフトウェアはその銘柄を売却して損失を補い、ポートフォリオのより広範な市場エクスポージャーを維持する別の銘柄を購入することができます。これらの損失は、ポートフォリオ内の他の場所でのキャピタルゲインを相殺することができます。
規則と規制
連邦倫理規則は、大統領が在任中にブラインドトラストを利用して保有株を管理する場合、独立した受託者によって管理され、保有株に関する受益者とのコミュニケーションを厳しく制限することを義務付けている。
対照的に、SECへの提出書類によると、トランプ氏の富の多くは取り消し可能な信託に残されており、その唯一の受益者がトランプ氏である。 SECへの提出書類によると、ドナルド・トランプ・ジュニアは管財人を務めており、特定の資産について単独の議決権を保有している。取消可能な信託は通常、受託者の交代や受益者の変更などにより修正したり、設立者によって解散したりすることができます。
政府倫理局によると、トランプ氏を除くジミー・カーター氏からジョー・バイデン氏までのすべての大統領は、ブラインドトラストを設立するか、分散投資信託など一般に紛争を引き起こす可能性が低いと考えられる資産に投資を限定していた。バイデン氏の開示では個別株の保有は示されていない。
公的記録には、トランプ大統領が信託を修正または取り消す権限を行使したかどうかは示されていない。
デルストン氏は、個人取引の管理と最終的な所有権との間にあるギャップが、トランプ氏の資金を管理する金融機関のコンプライアンスと評判のリスクも生み出していると述べた。
同氏は、「同氏を取引している銀行は、徴収できる手数料や関係上のその他の利点の理由から、同氏が運んでくるトラック一杯分の荷物はすべてまだ価値があると計算している」と述べた。
デルストン氏によると、銀行はほとんどの場合、現職大統領を内部リスク枠組みの下で「政治的に暴露された人物」（PEP）として扱う。なぜなら、大統領職は汚職やマネーロンダリングの危険が高まる可能性があるからである。
「PEP には、新人研修段階と活動の監視を通じて定期的に監視が強化されることが期待されています」とデルストン氏は述べた。
連邦マネーロンダリング防止規則に基づき、銀行は関係の目的を理解し、通常どのような活動が予想されるべきかを理解し、リスクプロファイルを作成し、不審な取引を監視する必要がある。
デルストン氏によると、トランプ大統領のような顧客にとって、それは電信送金、小切手、証券取引、その他の取引を同時に審査して、不審行為の懸念を引き起こすかどうかを判断することを意味する可能性があるという。
「疑わしい活動が関与しているかどうかを判断するだけではない」とデルストン氏は語った。 「彼の口座はどの金融機関でもリアルタイムで監視する必要があるでしょう。」
このレベルの精査には、コンプライアンス担当者、テクノロジー、弁護士、外部アドバイザーへの追加支出が必要になる可能性があります。現職大統領に仕える銀行は、その関係が政権との取引に影響を与える可能性があるかどうかをめぐる国民の監視など、評判や政治的なリスクにも直面している。
CNBCは、企業がトランプ氏の口座からどれだけ稼いだのかを特定できなかった。
「銀行はリスクの一部を補うために、大統領のような人物に何をするにも高額な手数料を請求する」とデルストン氏は語った。 「手数料がこれまでに十分に高いかどうかは不明です。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/29/trump-banking-investments-jpmorgan-schwab-ubs-financial-disclosure.html",
    publishedAt: "2026-07-29T14:03:23+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "is-ai-facing-a-big-financial-reckoning-f0f610c7",
    title: "Is AI facing a big financial reckoning?",
    titleJa: "AI は大きな財政的清算に直面しているでしょうか?",
    summaryJa: "AI は大きな財政的清算に直面しているでしょうか?- 公開されました",
    bodyOriginal: `Is AI facing a big financial reckoning?
- Published
Sharp falls in the value of chip makers have stoked investor concerns that the euphoria around AI related companies is fading.
Shares in Korean chip makers SK Hynix and Samsung are down 46% and 35% respectively over the last month as investors worry the recent boom in demand for the chips that power AI is unsustainable.
The South Korean stock market is notoriously volatile, but concerns have spilled over into the big US companies with Micron and Intel which have seen falls of 28% and 35% since last month.
"The AI bubble hasn't burst but it's letting out air," leading tech investor Eileen Burbidge told the BBC, as a number of factors in different parts of the AI ecosystem are darkening the mood.
China breakthrough
One of the triggers for the recent falls was a reported breakthrough in the chip manufacturing process by a Chinese company, potentially making China more self-sufficient in chip design and production.
That has added to lingering concerns that the big AI companies – Meta, Alphabet, Open AI, Anthropic – will find it hard to charge end users enough to justify the hundreds of billions being spent on buying the chips and building the data centres that power the technology.
While increased spending on AI has historically been welcomed by investors in the so called hyperscalers, dialling up the spending has recently not been met with the former enthusiasm.
Meta shares are down 15% over the last month, while SpaceX – which is predominantly an AI company - has seen its shares fall 14% from its much-hyped IPO debut and nearly 50% from its peak in June.
Meanwhile Apple – which has largely sat out the AI arms race – has seen its shares rise 21% over the last month to reclaim its title as the world's most valuable company from chip maker Nvidia.
London's benchmark FTSE 100 index, which does not contain any major tech companies, also briefly touched a record high on Wednesday morning - one of the few periods where it has benefited from not being tech-heavy.
Growing concerns about AI
Some have likened the transformative potential of AI to the introduction of electricity or the railways. While it is true that the railroads transformed economies – particularly of the US – plenty of people lost money along the way. Unlike rail tracks – which once built are good for decades – data centres are likely to need upgrading frequently to include the latest and fastest processors.
Add to that lot, concerns that some of the big AI companies have taken big stakes or lent money to each other leading to circular funding that means that any potential failures could have a damaging impact on the fortunes of others.
There is also increasing cultural opposition to the build out and adoption of AI.
A growing number of national, state or local governments are pausing, banning or restricting new data centre construction on environmental grounds thanks to their vast water and energy needs.
Meanwhile, high profile AI advocates have found themselves booed by students who fear that AI will replace many graduate level jobs.
Despite all of that, Eileen Burbidge is still positive. "I see the glass half full - if you bought shares in chip makers a year ago you are feeling pretty good right now."
Shares in Samsung and SK Hynix are up threefold and fivefold respectively over the last year, leading many to conclude that caution and profit taking after such massive gains was inevitable – and indeed healthy.
But there is no doubt that investors are watching companies plans for spending and their projections for when they get paid back with post euphoric scrutiny.
Related topics
- Published1 day ago
- Published2 days ago`,
    bodyJa: `AI は大きな財政的清算に直面しているでしょうか?
- 公開されました
チップメーカーの株価急落で、AI関連企業をめぐる高揚感が薄れつつあるのではないかと投資家の懸念が高まっている。
AIを駆動するチップに対する最近の需要ブームが持続不可能であると投資家が懸念しているため、韓国のチップメーカーSKハイニックスとサムスンの株価は先月でそれぞれ46％と35％下落した。
韓国の株式市場は不安定なことで有名だが、その懸念はマイクロンやインテルなどの米国大手企業にも波及し、先月以来２８％と３５％下落した。
AIエコシステムのさまざまな部分にある多くの要因が雰囲気を暗くしているとして、有力ハイテク投資家のアイリーン・バービッジ氏はBBCに対し、「AIバブルは崩壊していないが、空気が漏れてきている」と語った。
中国の躍進
最近の下落の引き金の一つは、中国企業によるチップ製造プロセスの画期的な進歩が報告されており、これにより中国のチップ設計と生産の自給自足がさらに進む可能性がある。
このため、メタ、アルファベット、オープンAI、アンスロピックなどの大手AI企業は、チップの購入とテクノロジーを動かすデータセンターの建設に費やした数千億ドルを正当化できるほどの料金をエンドユーザーに請求するのが難しいのではないかという懸念が根強く残っている。
AIへの支出の増加は歴史的に、いわゆるハイパースケーラーの投資家に歓迎されてきたが、最近では支出の増加は以前のような熱意を持って迎えられていない。
メタ株は先月で15％下落し、主にAI企業であるスペースXの株価は、大々的に宣伝されたIPOデビューから14％下落し、6月のピークからは50％近く下落した。
一方、AI軍拡競争からほぼ撤退してきたAppleは、先月株価が21%上昇し、チップメーカーのNvidiaから世界で最も価値のある企業の座を取り戻した。
大手ハイテク企業が含まれていないロンドンのベンチマークFTSE100指数も水曜朝に一時過去最高値を更新したが、これはハイテク株に偏っていないことで恩恵を受けた数少ない期間の一つだ。
AIに対する懸念の高まり
AI の変革の可能性を電気や鉄道の導入に喩える人もいます。鉄道が経済、特に米国の経済を変えたのは事実ですが、その過程で多くの人がお金を失いました。一度建設されれば何十年も使用できる鉄道線路とは異なり、データセンターは最新かつ最速のプロセッサを搭載するために頻繁にアップグレードする必要がある可能性があります。
それに加えて、一部の大手 AI 企業が多額の株式を取得したり、相互に資金を貸し付けたりして循環資金調達につながっているのではないかという懸念もある。これは、潜在的な失敗が他の企業の運命に悪影響を与える可能性があることを意味している。
AI の構築と導入に対する文化的な反対も増えています。
膨大な水とエネルギーの需要のため、環境上の理由から新しいデータセンターの建設を一時停止、禁止、または制限する国、州、地方自治体が増えています。
一方、知名度の高いAI支持者らは、大学院レベルの仕事の多くがAIに取って代わられるのではないかと懸念する学生らからブーイングを受けていることに気づいた。
それにもかかわらず、アイリーン・バービッジは依然として前向きです。 「ガラスが半分も埋まっているのがわかります。1年前にチップメーカーの株を買った人なら、今はかなり良い気分だと思います。」
サムスンとSKハイニックスの株価は昨年、それぞれ3倍と5倍に上昇しており、このような大幅な上昇後の警戒と利益確定は避けられず、実際に健全であると多くの人が結論づけている。
しかし、投資家が企業の支出計画と、陶酔後の精査を受けていつ返済されるかという予測に注目していることは間違いない。
関連トピック
- 1 日前に公開
- 2 日前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cevm09wkgz0o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-29T13:49:55+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/3471/live/5f73f4d0-8b52-11f1-8139-b39d1c7486b2.jpg",
    readTime: 4,
  },
  {
    id: "humana-tops-quarterly-estimates-maintain-6d567fff",
    title: "Humana tops quarterly estimates, maintains profit outlook as medical costs stay in line",
    titleJa: "ヒューマナは四半期予想を上回り、医療費が横ばいのため利益見通しを維持",
    summaryJa: "ヒューマナは水曜日、医療保険会社の医療サービスへの支出が予想と一致したため、予想を上回る第2四半期の結果を報告した。同社はまた、2026年の調整後利益見通しを1株当たり9ドル以上と据え置いた。",
    bodyOriginal: `Humana on Wednesday reported second-quarter results that topped estimates, as the health insurer's spending on medical services came in line with expectations.
The company also maintained its 2026 adjusted profit outlook of at least $9 per share.
The earnings beat was driven by strength across Humana's insurance business and CenterWell healthcare services unit, Humana CFO Celeste Mellet said in an interview. She said medical and pharmacy cost trends tracked in line with Humana's expectations across new and existing members. The company saw "slight favorability" in medical costs in the inpatient space, particularly among members receiving care from value-based providers, she added.
Still, in a Wednesday note, Cantor Fitzgerald analysts called the unchanged profit outlook a "disappointment" after recent earnings beats and guidance raises seen by other insurers overseeing privately run Medicare Advantage plans. Investors have been ratcheting up their expectations for the industry as some companies hike their outlooks and get a better handle on rising medical costs in those plans – an issue that has been dogging the broader sector for more than two years.
Shares of Humana fell more than 4% in premarket trading despite the solid quarter. The company is one of the largest Medicare Advantage providers serving people aged 65 and older as well as people with disabilities.
Here's what the company reported for the second quarter compared with what Wall Street was expecting, based on a survey of analysts by LSEG:
- Earnings per share: $7.61 adjusted vs. $7.22 expected
- Revenue: $40.87 billion vs. $40.61 billion expected
The company posted second-quarter net income of $694 million, or $5.73 per share, compared with $545 million, or $4.51 per share, in the same period a year ago. Excluding items like amortization and impairment charges, Humana earned $7.61 per share.
Revenue climbed to $40.87 billion from $32.39 billion in the prior-year quarter. The company's insurer and Centerwell unit both topped analysts' sales estimates for the quarter, according to StreetAccount.
Insurers, particularly those that run Medicare Advantage plans, have been pinched by an influx of people seeking care they delayed post-pandemic and high-cost specialty drugs like GLP-1s, among other factors.
But Humana's medical benefit ratio — a measure of total medical expenses paid relative to premiums collected — came in at 91.2% for the second quarter, which is in line with what analysts were expecting. Mellet said the ratio also matched the company's expectations for the quarter across both new and current members.
"I think that it's a combination of just [medical cost] trend stabilizing and then our actions as well to help drive better health outcomes for our members and our patients," Mellet said.
Still, the ratio is slightly higher than the 89.9% reported in the year-earlier period. A lower ratio typically indicates that the company collected more in premiums than it paid out in benefits, resulting in higher profitability.
Mellet said medical cost expectations for next year are "fairly consistent." The company is watching to see if services such as inpatient admissions will continue to decline this year, but she said "at this point, we call medical costs more stable."
Meanwhile, pharmacy medical cost trends remain "very elevated," driven by drug prices and the launch of new medicines, Mellet noted. She said those costs will be slightly higher next year compared to 2026, but added that it's a broader drug cost issue, not a question of member demand.
Mellet said Humana expects changes to its 2027 Medicare Advantage plans to help improve profitability and put the company on track to reach a sustainable pretax margin of at least 3% by 2028. She said the insurer also remains confident in its ability to boost earnings by expanding membership, improving the quality ratings of its Medicare Advantage plans, maintaining pricing discipline and controlling costs.`,
    bodyJa: `ヒューマナは水曜日、医療保険会社の医療サービスへの支出が予想と一致したため、予想を上回る第2四半期の結果を報告した。
同社はまた、2026年の調整後利益見通しを1株当たり9ドル以上と据え置いた。
ヒューマナの最高財務責任者セレステ・メレット氏はインタビューで、利益の伸びはヒューマナの保険事業とセンターウェル・ヘルスケア・サービス部門全体の好調によってもたらされたと述べた。同氏は、医療費と薬局費の傾向は、新規および既存の会員全体にわたってヒューマナの期待に沿って推移していると述べた。同社は、特に価値ベースの医療提供者から治療を受けている会員の間で、入院患者分野の医療費が「若干有利」であると見ていると同氏は付け加えた。
それでも、キャンター・フィッツジェラルドのアナリストらは水曜日のメモで、最近の利益が上回ったり、民営のメディケア・アドバンテージプランを監督する他の保険会社が見込んだガイダンスの引き上げを受けて、利益見通しの据え置きは「失望」であると述べた。一部の企業が見通しを上方修正し、その計画で医療費の増加にうまく対処できるようになる中、投資家は業界に対する期待を徐々に高めているが、この問題は業界全体を2年以上悩ませている。
ヒューマナの株価は好調な四半期にもかかわらず、市場前の取引で４％以上下落した。同社は、65 歳以上の人々や障害のある人々にサービスを提供する最大のメディケア アドバンテージ プロバイダーの 1 つです。
LSEGによるアナリスト調査に基づく、同社の第2四半期の報告とウォール街の予想を比較したものは以下の通りだ。
- 1 株当たり利益: 調整後 7.61 ドル、予想 7.22 ドル
- 収益: 408.7億ドル対予想406.1億ドル
同社の第2四半期純利益は6億9,400万ドル（1株あたり5.73ドル）で、前年同期は5億4,500万ドル（1株あたり4.51ドル）でした。償却費や減損費用などの項目を除くと、ヒューマナは1株あたり7.61ドルの利益を上げた。
売上高は前年同期の323億9000万ドルから408億7000万ドルに増加した。ストリートアカウントによると、同社の保険会社とセンターウェル部門はいずれもアナリストの同四半期売上高予想を上回った。
保険会社、特にメディケア・アドバンテージプランを運営する保険会社は、パンデミック後に遅れた治療を求める人々の殺到や、GLP-1などの高額な専門薬などの影響で窮地に陥っている。
しかし、第2四半期のヒューマナの医療給付率（徴収した保険料に対して支払われた医療費の総額を示す指標）は91.2％となり、アナリストの予想と一致した。メレット氏は、この比率は新規会員と既存会員の両方について、同社の同四半期の予想と一致していると述べた。
「これは、（医療費の）傾向の安定化と、会員と患者の健康状態の向上を促進するための私たちの行動の組み合わせだと思います」とメレット氏は語った。
それでも、この比率は前年同期の 89.9% よりわずかに高くなります。通常、比率が低いということは、企業が給付金として支払った額よりも多くの保険料を徴収しており、その結果、収益性が高いことを示しています。
メレット氏は、来年の医療費予想は「かなり一貫している」と述べた。同社は今年も入院などのサービスが減少し続けるかどうかに注目しているが、「現時点では医療費はより安定していると言える」と述べた。
一方、薬局の医療費傾向は、薬価と新薬の発売によって依然として「非常に上昇している」とメレット氏は指摘した。同氏は、来年のこれらの費用は2026年と比較して若干高くなるだろうと述べたが、これはより広範な薬剤費の問題であり、会員の需要の問題ではないと付け加えた。
メレット氏は、ヒューマナは2027年のメディケア・アドバンテージ計画の変更により収益性が向上し、2028年までに持続可能な税引き前利益率少なくとも3％に達する軌道に乗せられると期待していると述べた。同保険会社はまた、会員拡大、メディケア・アドバンテージ計画の品質評価の向上、価格設定規律の維持、コスト管理によって収益を押し上げる能力にも引き続き自信を持っていると述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/29/humana-hum-earnings-q2-2026.html",
    publishedAt: "2026-07-29T13:23:20+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "nike-was-once-china-s-sneaker-king-here-9d61b297",
    title: "Nike was once China's sneaker king. Here's why its sales have fallen 30%",
    titleJa: "ナイキはかつて中国のスニーカー王でした。売上が30%減少した理由はここにある",
    summaryJa: "どう考えても、ナイキの中国事業は全力で取り組んでいるはずだ。スポーツ関連製品は中国で最も急速に成長している消費者カテゴリーであり、スポーツや運動への参加はここ数十年で最高レベルにあります。 GlobalData によると、スポーツウェア市場全体は、健康的な生活への新たな注目により、過去 5 年間で 51% 急成長しました。",
    bodyOriginal: `By all accounts, Nike's business in China should be firing on all cylinders.
Sports-related products are the fastest growing consumer category in China and participation in sports and exercise is at its highest level in decades. The overall sportswear market has ballooned 51% in the past five years, fueled by a new focus on healthy living, according to GlobalData.
But instead of thriving during China's sports renaissance, Nike's business in the region is languishing. Sales have fallen from the prior year eight quarters in a row, and the overall business has shrunk 30% since 2021, with annual revenue hitting its lowest level in eight years at the end of May.
China was once Nike's fastest-growing region, beloved by investors for its high margins and potential for sustained growth. Now, it's the company's smallest market and has become a drain on a global turnaround that some on Wall Street believe is taking too long.
Some U.S. analysts expect Nike's China business to recover once its North America operations stabilize, but experts on the ground told CNBC its challenges in the region are deeper, and far different, from what it faces at home. Young Chinese shoppers are increasingly choosing domestic brands over expensive foreign names as part of a larger "China Chic" movement, and consumers are hungry for a localized assortment — not the same product that's being replicated from Utah to Shanghai. Nike is also working to overhaul its distribution model in China, which critics say has become messy, overly complex and driven by discounts.
"In a way, Nike has just become irrelevant," said Yaling Jiang, the founder of consumer research firm ApertureChina and an expert on the Chinese consumer. "I don't think young people can remember what's the last new thing they've done. But if you mention Adidas to them, they will tell you about … their pet clothes, pet jerseys, or their China jackets."
During its most recent earnings call, Nike's outgoing finance chief Matt Friend couldn't say when the China business would return to growth, telling analysts that revenue trends in the near term "will be in line" with recent performance and "profitability will bottom before sales."
In January, Nike CEO Elliott Hill announced Cathy Sparks, a 25-year Nike veteran, would become the next vice president and general manager of Greater China, reporting directly to him.
In an interview with CNBC, she said Nike is taking the steps it needs to reconnect with Chinese consumers.
"The one thing that I have certainly learned over the last six months is that the Chinese consumer has changed and they have high standards for what they want through product connections, engagement with the brand," said Sparks. "We know that if we can design footwear and apparel, lifestyle or performance, that's specifically targeted towards the unique needs of Chinese consumers, we'll drive full price revenue."
A Nike spokesperson pushed back on the idea that the company has lost relevance in the region and said what's changed is younger shoppers are looking for "hyperlocal connections," including through events and broader cultural moments.
"Nike has been in China for more than 40 years, and from day one, our approach has been to start with local consumer insight and turn that insight into inspiration, innovation and storytelling that can spark movement," the spokesperson said.
How 'China Chic' changed the sneaker market
When Nike turned to China as its next major growth market in the mid-2000s, it won by largely replicating its global strategy and betting that popular clothes and shoes in the Western world would also land with Chinese shoppers.
For a time, the bet was right.
"The premium brand at the time that was available was Nike. Nike was just clearly better. They had cooler designs. They were more expensive. There was more brand cache," said a retail consultant based in Shanghai who advises domestic and international brands, including Deckers and Adidas, and asked not to be named to protect client relationships.
"If you go back to the early 2000s, if consumers had some money to spend, they were really quite image conscious. They wanted to show that they had whatever the nice thing was and at the time, Nike was it."
By the end of fiscal 2021, Nike's annual revenue in China hit an all time high of $8.29 billion. But in the backdrop, the tide was starting to shift against Western brands.
In March 2021, a previous statement Nike made saying it was "concerned" about reports of forced labor in the Xinjiang region resurfaced, leading some Chinese consumers to call for a nationwide boycott and post videos online of them burning their sneakers. Popular Chinese actor Wang Yibo terminated his contract as a representative for Nike as domestic competitors Anta and Li-Ning doubled down on their use of Xinjiang cotton, using the conflict as a nationalistic marketing opportunity.
The controversy, which also impacted other Western brands that put out similar messaging, helped supercharge a political campaign that Chinese President Xi Jinping started years earlier called Guochao, or "China Chic" in English. It was designed to drum up pride in Chinese made and designed products and promote domestic brands over international ones.
"In line with the period of 2010 to just before Covid, people did feel like maybe they were inferior if they wear Chinese brands … but the elevating cultural confidence campaign really shifted that mindset," Jiang said. "What this political campaign does is it also encouraged a lot of e-commerce platforms, including Alibaba's Taobao, Tmall and JD.com, to have a separate section just for the China Chic brands and … people started adopting this China Chic mindset and started feeling like owning something from your own culture is cooler than owning foreign brand."
Now, many younger consumers feel more connected to domestic brands like Anta and Li-Ning over premium, foreign brands like Nike, said Tracy Dai, the director of operations at consulting firm China Skinny, which helps overseas companies enter China or expand there.
"Years ago when you're talking to a high school boy asking which sports shoes you may want, they probably say Nike or Adidas, but right now if you ask them, they say Anta or Li-Ning," Dai said. "[Nike] probably is not that cool to them anymore."
A Nike spokesperson said all brands in China are facing intense competition and a "more demanding consumer environment" and it believes its efforts to reset the region "put us on the right path to win back consumers."
Beyond nationalism, Nike's decline in China is also about value.
In the 20 years since Nike started supercharging its expansion in China, domestic brands have gotten better at production, marketing and brand building.
At the same time, Chinese consumers have become more practical and selective, prioritizing value and innovation over branding, said Wei Kan, who spent around 15 years at Nike and Converse in China and Taiwan before starting his own brand consultancy firm Conduit Asia. As shoppers become more involved with sports and niche fitness activities, highly technical products are becoming more popular than Nike's assortment.
"Nike is still more like a global, generalist brand at this moment. At the same time, a lot of products, the innovation pipeline is actually slower than the local brands and also the competitors," said Kan. "Chinese consumers are very sophisticated compared with like five or 10 years ago ... it all goes back to how the consumer perceives what kind of value they want to get from a shoe."
Nanjing styles via Portland, Oregon
While domestic brands have become major market leaders in China, some international brands are still winning, too. Lululemon's comparable sales, which exclude new store openings, grew 20% in China in fiscal 2025, while Adidas brand revenue grew 13% in the region during the same period.
Similar to Nike, Adidas had seen its business dramatically slow in China, but it's now growing again after the company shifted its focus to local product creation, decentralized decision-making and empowered local teams.
For example, Adidas's local team designed and released its mega-viral Chinese Track Top jacket earlier this year in celebration of the Chinese New Year. The jacket sold out within 27 minutes and became a global phenomenon, with some on social media saying they flew to China specifically to buy the item or spent hundreds to snag one through reseller sites like StockX.
It's also nailing local marketing. Recently, Adidas botched a translation on its website in the product description for a jacket and ended up becoming a viral meme. Rather than ignoring the meme, it created a T-shirt with the mistranslation on the front, Jiang said.
Meanwhile, experts said Nike has struggled to create the same kind of localized products and marketing. During the World Cup, its marketing campaigns came off as similar to what it was doing a decade ago, said Jiang.
Part of the issue is that the Greater China team gets limited autonomy to release products and campaigns quickly without oversight from the corporate office in Portland, analysts said.
"So everything, especially in terms of design, everything is actually coming from global," said Kan, who worked in marketing and branding for Nike and Converse in the region before leaving the company in November 2024. "There are very limited room for the local teams to build and also design the locally relevant products to the consumers. I think that is actually the biggest issue for the Chinese consumers here."
When asked about Nike's decision-making being concentrated at its headquarters, Sparks said the characterization was "not unfair" but added there is "nobody checking any of this work telling us yes or no."
"I have felt from the moment I've landed in China that our local team has full autonomy to do what we need. Of course, working within the guardrails that are brand right," said Sparks. "I'm seeing that come to action with the marketing that we've put out. We are localizing retail concepts. The product design that you're gonna see from this team is really authentically Chinese, very relevant."
Last week, Sparks announced the company had hired its first-ever Greater China vice president of local product creation, who will be focused on building an assortment that's designed, developed and made in China for Chinese shoppers.
The company plans to start with two lifestyle capsules — one for Nike sportswear and one for Jordan streetwear — that'll be ready in time for the holidays, followed later by performance apparel and footwear.
"We'll be doing this over the next 18 months, bringing all these new capabilities on board so that we can complement global innovation with local innovation needs, styling needs, fit needs, even color, which can be unique in China," said Sparks.
Why Nike is resetting China distribution
Marketing and localization aside, Nike's China distribution model has become a complex web that Sparks is now working to unwind after the company allowed its brick-and-mortar distributors to start selling online during the Covid-19 pandemic even though their distribution agreements didn't include digital.
"What we didn't do was reset that coming out of Covid as consumers returned to brick and mortar," said Sparks. "And because of that, it just created this incredibly fragmented marketplace where the consumer journey became really messy. Our ability to tell clear innovation stories, nearly impossible."
Sparks said the decision to shut down those online storefronts is necessary to repair Nike's China business, but BNP Paribas equity analyst Laurent Vasilescu estimates the change could reduce the company's revenue by as much as $1 billion annually, representing about 17% of total sales in the region.
In response, Sparks said the change means some distribution will inevitably go away but "we believe we'll be able to replace total value with full-price sales and a more premium experience."
"We actually believe it is critical. If we don't reset is where the long-term impact will continue to slide in a direction that we don't want to see," said Sparks. "We don't actually believe that we will have a long-term negative impact. We think it'll be stronger."`,
    bodyJa: `どう考えても、ナイキの中国事業は全力で取り組んでいるはずだ。
スポーツ関連製品は中国で最も急速に成長している消費者カテゴリーであり、スポーツや運動への参加はここ数十年で最高レベルにあります。 GlobalData によると、スポーツウェア市場全体は、健康的な生活への新たな注目により、過去 5 年間で 51% 急成長しました。
しかし、中国のスポーツルネッサンス期に繁栄するどころか、この地域におけるナイキのビジネスは低迷している。売上高は8四半期連続で前年比で減少し、事業全体は2021年以降30％縮小し、5月末には年間売上高が8年ぶりの最低水準に達した。
中国はかつてナイキにとって最も急成長している地域であり、その高い利益率と持続的な成長の可能性が投資家に愛されていた。現在、それは同社にとって最小の市場であり、ウォール街の一部の人たちは、時間がかかりすぎると信じている世界的な再生の消耗品となっている。
一部の米国アナリストは、北米事業が安定すればナイキの中国事業は回復すると予想しているが、現地の専門家らはCNBCに対し、この地域における課題はより深く、国内で直面しているものとは大きく異なると語った。より大規模な「チャイナ・シック」運動の一環として、中国の若い買い物客は高価な外国ブランドではなく国内ブランドを選ぶことが増えており、消費者はユタ州から上海まで複製されている同じ商品ではなく、地域に合わせた品揃えを求めている。ナイキはまた、中国での流通モデルの見直しにも取り組んでいるが、批評家らは、この流通モデルは乱雑で過度に複雑になり、値引きに押されていると指摘している。
消費者調査会社アパチュアチャイナの創設者で中国消費者専門家のヤリン・ジャン氏は、「ある意味、ナイキは無関係になってしまった」と語る。 「若い人たちは、最後にやった新しいことは何だったのか思い出せないと思います。しかし、もしあなたがアディダスについて話すと、彼らはペットの服、ペットのジャージ、またはチャイナジャケットについて話すでしょう。」
ナイキの退任財務責任者マット・フレンド氏は最近の決算会見で、中国事業がいつ成長に戻るかについては明言できず、アナリストに対し、短期的な収益傾向は最近の業績と「一致するだろう」とし、「売上高の前に収益性は底を打つだろう」と語った。
1月、ナイキの最高経営責任者（CEO）エリオット・ヒルは、ナイキに25年間勤務したベテランのキャシー・スパークス氏が次期副社長兼中華圏ゼネラルマネージャーに就任し、自身の直属となることを発表した。
CNBCとのインタビューで彼女は、ナイキが中国の消費者と再びつながるために必要な措置を講じていると述べた。
「この半年で私が確かに学んだことの一つは、中国の消費者は変化しており、彼らは製品とのつながりやブランドとの関わりを通じて、求めるものに対して高い基準を持っているということです」とスパークス氏は語った。 「中国の消費者の固有のニーズを特にターゲットにした履物やアパレル、ライフスタイルやパフォーマンスをデザインできれば、フルプライスでの収益を促進できることを私たちは知っています。」
ナイキの広報担当者は、同社がこの地域での関連性を失っているという考えを否定し、変化したのは若い買い物客がイベントやより広範な文化的瞬間を含む「超ローカルなつながり」を求めていることだと述べた。
「ナイキは中国に40年以上進出しており、設立当初から私たちのアプローチは地元の消費者の洞察から始まり、その洞察をインスピレーション、イノベーション、そして運動を引き起こすストーリーテリングに変えることでした」と広報担当者は述べた。
「チャイナシック」はスニーカー市場をどう変えたのか
2000年代半ばにナイキが次の主要な成長市場として中国に目を向けたとき、ナイキはその世界戦略をほぼ再現し、西側世界で人気の衣類や靴が中国人の買い物客にも届くと賭けて勝利した。
しばらくの間、その賭けは正しかった。
「当時販売されていた高級ブランドはナイキだった。ナイキの方が明らかに優れていた。デザインもクールで、価格も高かった。ブランドのキャッシュが多かった」と上海を拠点にデッカーズやアディダスなど国内外のブランドにアドバイスをしている小売コンサルタントは述べ、顧客との関係を守るため匿名を求めた。
「2000年代初頭に戻ると、消費者はお金に余裕があれば、本当にイメージに敏感でした。彼らは良いものは何でも持っているということを示したかったのですが、当時はそれがナイキでした。」
2021年度末までに、ナイキの中国における年間収益は82億9000万ドルと過去最高を記録した。しかしその背景では、欧米ブランドに対する風向きが変わり始めていた。
2021年3月、ナイキが新疆ウイグル自治区での強制労働に関する報道を「懸念している」と述べた以前の声明が再浮上し、一部の中国消費者が全国的なボイコットを呼びかけ、スニーカーを燃やす動画をネットに投稿する事態につながった。中国の人気俳優、王一博は、国内競合企業の安踏と李寧が紛争を民族主義的なマーケティングの機会として新疆綿の使用を倍増させる中、ナイキの代表者としての契約を解除した。
この論争は、同様のメッセージを発信する他の西側ブランドにも影響を与え、中国の習近平国家主席が数年前に始めた「国超」（英語で「チャイナ・シック」）と呼ばれる政治キャンペーンを激化させるのに一役買った。これは、中国で製造および設計された製品に対する誇りを高め、国際ブランドではなく国内ブランドを宣伝することを目的として設計されました。
「2010年から新型コロナウイルス感染症の直前までの時期と同様に、人々は中国のブランドを着ていると自分が劣っているのではないかと感じていました…しかし、文化的信頼の高まりにより、その考え方は大きく変わりました」とジャン氏は語った。 「この政治キャンペーンの効果は、アリババのタオバオ、天猫、京東商事（JD.com）を含む多くの電子商取引プラットフォームに、チャイナシックブランド専用の別個のセクションを設けるよう奨励したことでもある。人々はこのチャイナシックの考え方を採用し始め、外国のブランドを所有するよりも自分の文化からのものを所有する方がクールであると感じ始めた。」
海外企業の中国進出や中国進出を支援するコンサルティング会社チャイナ・スキニーのオペレーションディレクター、トレイシー・ダイ氏によると、現在、多くの若い消費者はナイキなどのプレミアムな海外ブランドよりも、安踏や李寧などの国内ブランドに親近感を抱いているという。
「数年前、男子高校生にどのスポーツシューズが欲しいかと尋ねると、おそらくナイキかアディダスと答えるでしょうが、今では、尋ねると安踏か李寧と答えるでしょう」とダイ氏は語った。 「彼らにとって（ナイキは）もうそれほどクールではないのでしょう。」
ナイキの広報担当者は、中国のすべてのブランドが熾烈な競争と「より厳しい消費者環境」に直面しており、この地域をリセットする取り組みが「消費者を取り戻すための正しい道に進む」と信じていると述べた。
ナショナリズムを超えて、中国におけるナイキの凋落は価値観にも関係している。
ナイキが中国での拡大を強化し始めてから 20 年間で、国内ブランドは生産、マーケティング、ブランド構築においてより優れたものになりました。
同時に、中国の消費者はより現実的かつ選択的になり、ブランディングよりも価値とイノベーションを優先するようになった、とウェイ・カン氏は語る。彼は自身のブランドコンサルティング会社コンデュイット・アジアを立ち上げるまで、中国と台湾のナイキとコンバースで約15年間勤務していた。買い物客がスポーツやニッチなフィットネス活動に関心を持つようになるにつれ、ナイキの品揃えよりも高度な技術を備えた製品の人気が高まっています。
「現時点では、ナイキは依然としてグローバルでゼネラリストのブランドに近い。同時に、多くの製品、イノベーションのパイプラインは地元ブランドや競合他社よりも実際に遅れている」とカン氏は述べ、「中国の消費者は5年、10年前と比べて非常に洗練されている…すべては、消費者が靴からどのような価値を求めているかをどのように認識しているかに遡る。」と語った。
オレゴン州ポートランド経由の南京スタイル
国内ブランドが中国市場の主要なリーダーとなっている一方で、一部の国際ブランドも依然として勝利を収めています。新規出店を除いたルルレモンの比較売上高は、2025年度に中国で20％増加し、同地域のアディダスブランドの収益は同期間に13％増加した。
ナイキと同様に、アディダスも中国での事業が劇的に減速していたが、同社が現地での製品づくり、分散型の意思決定、現地チームの権限強化に焦点を移したことで、現在は再び成長しつつある。
たとえば、アディダスの地元チームは、今年初めに中国の旧正月を祝って、大ヒットしたチャイニーズ トラック トップ ジャケットをデザインし、発売しました。このジャケットは27分以内に完売し、世界的な現象となり、ソーシャルメディアでは、この商品を買うためにわざわざ中国に飛んだ人や、StockXなどの再販サイトで購入するのに数百ドルを費やした人もいたという。
ローカルマーケティングにも効果を発揮します。最近、アディダスはウェブサイト上のジャケットの製品説明文の翻訳に失敗し、最終的にバイラルミームとなった。このミームを無視するのではなく、誤訳を前面に描いたTシャツを作成したとジャン氏は語った。
一方、専門家らは、ナイキも同様のローカライズされた製品やマーケティングを生み出すのに苦労していると述べた。ワールドカップ期間中、同社のマーケティングキャンペーンは10年前と同じような結果になったとジャン氏は語った。
アナリストらによると、問題の一部は、ポートランドにある本社の監督なしに製品やキャンペーンを迅速にリリースするための中華圏チームの自主性が限られていることだという。
2024年11月に同社を退職するまで、この地域でナイキとコンバースのマーケティングとブランディングに携わっていたカン氏は、「つまり、すべて、特にデザインの点で、実際にはすべてが世界から来ている」と述べ、「地元のチームが地元に関連した製品を作り、消費者向けにデザインする余地は非常に限られている。それが実際、中国の消費者にとって最大の問題だと思う」と語った。
ナイキの意思決定が本社に集中していることについて質問されたスパークス氏は、この評価は「不公平ではない」としながらも、「この取り組みをチェックしている人は誰もイエスかノーかを教えてくれない」と付け加えた。
「中国に到着した瞬間から、私たちの現地チームには必要なことを行うための完全な自主性があると感じました。もちろん、ブランドにふさわしいガードレールの範囲内で作業します」とスパークス氏は語った。 「私たちが打ち出してきたマーケティングがそれを現実にしているのを目の当たりにしています。私たちは小売店のコンセプトをローカライズしています。このチームの製品デザインは本当に本物の中国のもので、非常に関連性があります。」
先週、スパークスは、同社初の大中華圏地域商品創造担当副社長を雇用したと発表し、同副社長は中国人の買い物客向けに中国でデザイン、開発、製造された品揃えの構築に注力することになる。
同社はまず、ホリデーシーズンに間に合うよう、ナイキ スポーツウェア用とジョーダン ストリートウェア用の 2 つのライフスタイル カプセルを発売し、その後、パフォーマンス アパレルとシューズを発売する予定です。
「われわれは今後18カ月かけてこれを進め、これらすべての新機能を導入して、世界的なイノベーションを現地のイノベーションのニーズ、スタイリングのニーズ、フィット感のニーズ、さらには中国独自のカラーで補完できるようにする」とスパークス氏は語った。
ナイキが中国での流通をリセットする理由
マーケティングとローカリゼーションはさておき、ナイキの中国流通モデルは複雑な網の目になっており、販売契約にデジタルが含まれていなかったにもかかわらず、同社が新型コロナウイルス感染症のパンデミック中に実店舗の販売代理店にオンライン販売を開始することを許可した後、スパークス氏は現在、その緩和に取り組んでいる。
「私たちがしなかったことは、消費者が実店舗に戻ってきたことで、コロナ禍からの影響をリセットすることだった」とスパークス氏は語った。 「そのせいで、信じられないほど細分化された市場が生み出され、消費者の行動が非常に混乱してしまいました。明確なイノベーションストーリーを伝える私たちの能力は、ほぼ不可能です。」
スパークス氏は、これらのオンライン店舗閉鎖の決定はナイキの中国事業を立て直すために必要だと述べたが、BNPパリバの株式アナリスト、ローラン・ヴァシレスク氏は、この変更により同社の収益が年間最大10億ドル減少する可能性があり、これは同地域の総売上高の約17％に相当すると推定している。
これに対しスパークス氏は、この変更は一部の流通が必然的になくなることを意味するが、「我々は総額を正規価格販売とよりプレミアムな体験に置き換えることができると信じている」と述べた。
「実際、私たちはそれが重要だと信じています。リセットしなければ、長期的な影響は私たちが見たくない方向に滑り続けることになります」とスパークス氏は述べた。 「私たちは実際に長期的な悪影響があるとは考えていません。悪影響はさらに大きくなると考えています。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/29/nike-china-sales-decline.html",
    publishedAt: "2026-07-29T11:46:44+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    readTime: 10,
  },
  {
    id: "data-centres-could-pay-hundreds-of-milli-474e766e",
    title: "Data centres could pay hundreds of millions in deposits for power demands",
    titleJa: "データセンターは電力需要に対して数億ドルの保証金を支払う可能性がある",
    summaryJa: "データセンターは電力需要に対して数億ドルの保証金を支払う可能性がある- 公開されました",
    bodyOriginal: `Data centres could pay hundreds of millions in deposits for power demands
- Published
Ofgem has proposed new measures which could see developers of data centres made to pay hundreds of millions of pounds up front.
The British energy regulator said a refundable fee should be charged for projects that want to connect to the network, amid mounting demand for connections to the electricity grid.
It is proposing developers pay a deposit between £237,500 to £712,500 per megawatt - meaning data centres seeking 1 gigawatt (GW) of power would have to pay hundreds of millions up front, paid back if the project was completed.
The proposal follows growing opposition in parts of the country to plans for new data centres, which are needed to power the artificial intelligence boom.
Data centres are large buildings which house computer servers used to store and process data and run the digital services which power the internet.
Ofgem has started a consultation on its proposals, which will run until 16 September.
It said the amount of electricity capacity being requested by projects seeking to connect to the grid had risen from 41 GW to 125 GW in the past year, reflecting a sharp increase in demand.
This is significantly more than double 2025's peak electricity demand in Britain of around 46 GW.
The regulator said the projects would have to hit key milestones to keep their place in the grid connection queue, which has seen a surge in demand.
An increasing number of centres have been built around the world in recent years to provide the computing power needed to train and run AI systems.
But they are controversial, especially for people who live near them.
Residents have raised concerns about noise, electricity demand and the large amounts of water sometimes used to cool the high-performance chips that generate vast amounts of heat.
There are currently 564 data centres listed in the UK, according to the data centre map, external.
Scotland in particular is seen as a good location for future projects due to its supply of renewable energy to power the centres, with 24 currently in the planning process.
Ofgem said the plans were aimed at tackling "speculative projects from securing scarce network capacity without any firm intention to connect".
Eleanor Warburton, the regulator's director for energy system design and development, said: "Britain's electricity demand connections queue has more than tripled in size in less than a year, and consumers should not bear the risks created by speculative projects taking up space in the system."
Energy minister Michael Shanks from the Department for Energy Security and Net Zero said he believed Ofgem's actions would "help ensure that viable connection-ready projects can get going and not be held up by speculative applications".
"Britain needs a grid connections system that works for the 21st century and allows businesses to invest and grow, creating jobs across the country," he said.
'I can't drink the water' - life next to a US data centre
- Published10 July 2025
Why are thousands of people opposing a new data centre?
- Published9 July
Data centres to be expanded across UK as concerns mount
- Published15 August 2025
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.`,
    bodyJa: `データセンターは電力需要に対して数億ドルの保証金を支払う可能性がある
- 公開されました
Ofgemは、データセンターの開発者が前払いで数億ポンドを支払わされる可能性のある新たな措置を提案している。
英国のエネルギー規制当局は、電力網への接続需要が高まる中、ネットワークへの接続を希望するプロジェクトには返金可能な料金を請求すべきだと述べた。
同社は開発者に対し、メガワット当たり23万7500ポンドから71万2500ポンドの保証金を支払うことを提案している。つまり、1ギガワット（GW）の電力を求めるデータセンターは数億ドルを前払いしなければならず、プロジェクトが完了すれば返済されることになる。
この提案は、人工知能ブームを促進するために必要な新しいデータセンターの計画に対する国内の一部での反対の高まりを受けてのものである。
データ センターは、データを保存および処理し、インターネットに電力を供給するデジタル サービスを実行するために使用されるコンピューター サーバーを収容する大規模な建物です。
Ofgemは提案に関する協議を開始しており、協議は9月16日まで続く。
同報告書によると、送電網への接続を目指すプロジェクトが要求する電力容量は、需要の急激な増加を反映して、過去1年間で41GWから125GWに増加したという。
これは英国の2025年のピーク電力需要である約46GWの2倍を大幅に上回る。
規制当局は、需要が急増している送電網接続の待機列に位置を維持するには、プロジェクトが重要なマイルストーンを達成する必要があると述べた。
近年、AI システムのトレーニングと実行に必要なコンピューティング能力を提供するために、世界中で建設されるセンターの数が増えています。
しかし、特に近くに住んでいる人々にとって、それらは物議を醸しています。
住民らは、騒音、電力需要、そして大量の熱を発生する高性能チップを冷却するために時々使用される大量の水について懸念を表明している。
外部のデータセンターマップによると、現在英国には 564 のデータセンターがリストされています。
特にスコットランドは、センターに電力を供給するための再生可能エネルギーの供給により、将来のプロジェクトに適した場所とみなされており、現在 24 のセンターが計画中です。
Ofgem氏は、この計画は「接続する確固たる意図のない、希少なネットワーク容量の確保による投機的プロジェクト」に取り組むことを目的としていると述べた。
規制当局のエネルギーシステム設計・開発担当ディレクター、エレノア・ウォーバートン氏は、「英国の電力需要接続待ち行列の規模は1年足らずで3倍以上に増加しており、消費者はシステム内のスペースを占める投機的プロジェクトによって生じるリスクを負担すべきではない」と述べた。
エネルギー安全保障・ネットゼロ省のマイケル・シャンクス・エネルギー大臣は、Ofgemの行動が「実行可能な接続対応プロジェクトを確実に開始し、投機的なアプリケーションによって妨げられないようにするのに役立つ」と信じていると述べた。
「英国は21世紀に機能し、企業の投資と成長を可能にし、国全体で雇用を創出できる送電網システムを必要としている」と同氏は述べた。
「水は飲めない」 - 米国のデータセンターの隣での生活
- 2025 年 7 月 10 日公開
なぜ何千人もの人々が新しいデータセンターに反対しているのでしょうか?
- 7 月 9 日に公開
懸念が高まる中、データセンターを英国全土に拡大へ
- 2025 年 8 月 15 日公開
Tech Decoded ニュースレターに登録して、世界のトップのテクノロジー ストーリーやトレンドをフォローしてください。英国外ですか？ここからサインアップしてください。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c9q90q9qnn2o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-29T11:35:35+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/4e2f/live/8ed23800-8b42-11f1-a7ab-8b30adf0800a.jpg",
    readTime: 4,
  },
  {
    id: "andy-burnham-wants-to-fix-social-care-wh-b9996e26",
    title: "Andy Burnham wants to fix social care - what are the options?",
    titleJa: "アンディ・バーナムは社会的養護を改善したいと考えています - 選択肢は何ですか?",
    summaryJa: "アンディ・バーナムは社会的養護を改善したいと考えています - 選択肢は何ですか?- 公開されました",
    bodyOriginal: `Andy Burnham wants to fix social care - what are the options?
- Published
Prime Minister Andy Burnham has said he wants major reform of the social care system in England, calling the current situation "bad for everybody".
In a speech at a care home on Wednesday he announced that cross-party talks involving the Conservatives and Liberal Democrats would start later.
Burnham also said he had asked Baroness Casey - who is carrying out a review of social care - to bring forward her report by a year. She will now set out her recommendations in 2027.
He confirmed that her review will also look at the question of how to pay for any reforms.
BBC Verify has looked at four options for approaching reform and how much they could cost.
1. Cap on lifetime care costs
Some people face extremely high costs for care at the end of their life.
It has been estimated that around one in seven people aged 65 and over face lifetime care costs of more than £100,000.
One proposal is to cap these costs with the government picking up the bill above a certain cash threshold.
In 2011 a commission headed by the economist Andrew Dilnot proposed a lifetime cap of £35,000.
Dilnot estimated his proposed reforms would cost between £1.3bn and £2.2bn a year. The cost today would be higher due to inflation and the ageing population.
The Conservative-Liberal Democrat coalition government, led by David Cameron, accepted Dilnot's recommendations.
But after the 2015 general election, which delivered a Conservative majority, Cameron delayed the implementation of the cap to 2020 over what he said were pressures on the public finances.
In 2017, when Theresa May was in No 10, the Conservatives' general election manifesto proposed a different way to reform social care.
This would have included the value of an individual's home in the means test used to decide what state funding they could get for care in their own homes.
It did not, initially, include any cap on lifetime care costs, with the manifesto saying this was more "equitable" than the Dilnot plan.
The May plan was branded a "dementia tax" by opponents and eventually dropped.
2. A more generous means test
In England people can currently qualify for local authority financial support in a residential care home if all their assets - including their home - are worth less than £23,250.
This is known as a means test - where the level of financial support a person gets is based on the value of their assets and savings.
Some have suggested this threshold should be raised significantly so that many more people would qualify for means-tested support.
Boris Johnson's Conservative government in 2021 planned to raise the means test threshold to £100,000.
The annual cost of Johnson's reforms would have been £1.8bn a year over three years - although this was expected to rise over time as more people qualified.
The Johnson government planned a new Health and Social Care levy to pay for the package, but this was eventually scrapped by his Conservative successors as prime minister, because they wanted to keep taxes down.
3. Free personal care
An alternative approach is to ensure that everyone who is eligible, based on their needs, should get state-funded personal care that is free at the point of use.
This would be provided free regardless of an individual's means and whether it was received by an elderly person in their own house or a residential care home.
Scotland has implemented such a system.
However, it's important to note that personal care takes in things like helping frail elderly people wash and dress and go to the toilet.
But it does not include accommodation, food and everyday living costs which are subject to means testing.
The Health Foundation think tank estimates that implementing a Scottish-style system in England would cost £7.5bn a year by 2036.
Like Scotland, Japan and Germany have systems which base entitlement to personal social care mainly on people's care needs rather than their ability to pay.
Japan and Germany though have a mandatory long-term care insurance system which is funded through contributions from workers and employers.
Both countries also do not usually cover the full cost of personal care so individuals are responsible for some of the expenses.
4. National care service
Some have suggested that the government should set up a national care service in England, similar in ambition to the NHS.
This would mean all personal care would be free at the point of use while establishing national standards and care entitlement criteria.
The Health Foundation has estimated the cost of creating a universal and comprehensive social care system in England would be around £19bn a year extra by 2036.
When Andy Burnham was health secretary in Gordon Brown's Labour government in 2010 he produced a plan for a national care service.
It was suggested this would be paid for through a compulsory contribution from people's estates after they'd died.
But the idea was branded a "death tax" by Labour's opponents. The party lost the 2010 general election and its proposals went no further.
In the 2024 general election Labour again proposed a "national care service" without providing details or how it would be funded.
And after the election then-Prime Minister Keir Starmer effectively kicked the issue into the long grass by commissioning Louise Casey to investigate social care reform and report back in 2028.
It's worth bearing in mind that these four approaches above are not mutually exclusive.
Previous reform proposals have often combined more than one of them - such as a cap on lifetime costs and a more generous means test.`,
    bodyJa: `アンディ・バーナムは社会的養護を改善したいと考えています - 選択肢は何ですか?
- 公開されました
アンディ・バーナム首相は、現在の状況は「誰にとっても悪い」とし、英国の社会保障制度の大規模な改革を望んでいると述べた。
同氏は水曜日に介護施設で行った演説で、保守党と自由民主党が参加する超党派協議が今後開始されると発表した。
バーナム氏はまた、社会的養護の見直しを行っているケイシー男爵夫人に対し、報告書を１年前倒しするよう要請したと述べた。彼女は今後、2027年に向けた提言を発表する予定だ。
同氏は、彼女の検討では、改革費用の支払い方法の問題も検討することを認めた。
BBC Verifyは、改革に取り組むための4つの選択肢と、それにどれくらいの費用がかかるかを検討した。
1. 生涯介護費用の上限
人生の終わりに、非常に高額な介護費用に直面する人もいます。
65歳以上の約7人に1人が生涯で10万ポンド以上の介護費用に直面していると推定されている。
提案の 1 つは、一定の現金基準を超える金額を政府が回収することで、これらの費用に上限を設けるというものです。
2011年、経済学者のアンドリュー・ディルノット氏が委員長を務める委員会は、生涯の上限を3万5000ポンドにすることを提案した。
ディルノット氏は、自身が提案する改革には年間13億ポンドから22億ポンドの費用がかかると見積もった。現在のコストはインフレと高齢化によりさらに高くなるだろう。
デビッド・キャメロン率いる保守党と自由民主党の連立政権はディルノット氏の勧告を受け入れた。
しかし、2015年の総選挙で保守党が過半数を獲得した後、キャメロン首相は財政への圧力を理由に上限の導入を2020年に延期した。
テリーザ・メイが10位だった2017年、保守党の総選挙マニフェストでは社会的養護を改革する別の方法が提案されていた。
これには、自宅でのケアに対してどのような州の資金が得られるかを決定するために使用される資力調査に、個人の家の価値が含まれていたはずです。
当初、生涯介護費用の上限は盛り込まれておらず、マニフェストにはディルノット計画よりも「公平」であると書かれていた。
5月の計画は反対派によって「認知症税」の烙印を押され、最終的には撤回された。
2. より寛大な資力調査
イングランドでは現在、住宅を含むすべての資産の価値が23,250ポンド未満であれば、住宅型介護施設で地方自治体の財政支援を受ける資格が得られる。
これは資力調査として知られており、個人が得られる経済的支援のレベルは資産や貯蓄の価値に基づいて決まります。
より多くの人が資力調査による支援を受ける資格を得られるよう、この基準を大幅に引き上げるべきだと主張する人もいる。
ボリス・ジョンソン首相の保守党政権は2021年に資力調査の基準値を10万ポンドに引き上げることを計画していた。
ジョンソン政権の改革にかかる年間費用は3年間で年間18億ポンドになるはずだが、適任者が増えれば時間の経過とともにこの費用は増加すると予想されていた。
ジョンソン政権は、そのパッケージの費用を支払うために新たな医療・社会保障税を計画していたが、これは結局、税金を抑えたいという理由から、首相としての彼の後継者である保守党によって廃止された。
3. 無料のパーソナルケア
別のアプローチは、資格のあるすべての人が、ニーズに基づいて、利用時点で無料の州資金によるパーソナルケアを受けられるようにすることです。
これは、個人の資力に関係なく、また、自宅の高齢者が受けたのか、住宅型介護施設で受けたのかに関係なく、無料で提供されることになる。
スコットランドはそのようなシステムを導入しました。
ただし、身体的ケアには、虚弱な高齢者の洗濯や着替え、トイレへの援助などが含まれることに注意することが重要です。
ただし、資力調査の対象となる宿泊費、食費、日常生活費は含まれません。
ヘルス財団シンクタンクは、イングランドでスコットランド式システムを導入するには、2036年までに年間75億ポンドの費用がかかると見積もっている。
スコットランドと同様、日本とドイツには、個人の社会的ケアの権利を、主に人々の支払い能力ではなくケアのニーズに基づいて決定する制度があります。
ただし、日本とドイツには、労働者と雇用主からの拠出金によって賄われる強制的な介護保険制度があります。
また、両国とも通常、身の回りの費用を全額負担するわけではないため、費用の一部は個人が負担します。
4. 国民介護サービス
政府は英国にNHSと同様の国民的ケアサービスを設立すべきだと提案する人もいる。
これは、国の基準と介護資格基準を確立しながら、すべてのパーソナルケアが使用時点で無料になることを意味します。
保健財団は、イギリスで国民皆保険制度を構築するための費用は、2036年までに年間約190億ポンド追加されると見積もっている。
アンディ・バーナムは2010年にゴードン・ブラウン労働党政権で保健長官を務めていたとき、国民医療サービスの計画を作成した。
この費用は、人々の死後、財産からの強制拠出によって支払われることが示唆されていた。
しかし、このアイデアは労働党の反対派によって「死の税金」であると非難された。同党は2010年の総選挙で敗北し、その提案は前進しなかった。
2024年の総選挙で、労働党は詳細や資金調達方法を明らかにせずに、再び「国民介護サービス」を提案した。
そして選挙後、当時のキア・スターマー首相は社会保障改革を調査し、2028年に報告するようルイーズ・ケイシーに依頼し、事実上この問題を闇に葬った。
上記の 4 つのアプローチは相互に排他的ではないことに留意する価値があります。
これまでの改革案では、生涯費用の上限やより寛大な資力調査など、複数の提案が組み合わされていることが多かった。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cj4k54g0ldjo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-29T10:47:08+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/1825/live/a24448b0-89c6-11f1-b8ee-9b3c26ad07bb.png",
    readTime: 6,
  },
  {
    id: "matcha-and-protein-pivot-pays-off-for-gr-3892a2a1",
    title: "Matcha and protein pivot pays off for Greggs as profits rise",
    titleJa: "抹茶とプロテインのピボットが利益を上げ、グレッグス社に利益をもたらす",
    summaryJa: "抹茶とプロテインのピボットが利益を上げ、グレッグス社に利益をもたらす- 公開されました",
    bodyOriginal: `Matcha and protein pivot pays off for Greggs as profits rise
- Published
Greggs's pivot towards healthier products and trending drinks has helped it boost sales, with the bakery chain reporting a 20% rise in profit over the first half of the year.
Greggs, the UK's largest fast-food chain, has launched a range of new products this year, many of which latch onto trends such as high-protein salads and matcha.
Greggs's chief executive Roisin Currie previously told BBC News the rise of weight-loss drugs has led customers to to look for "smaller portions", which could affect its bottom line.
Total sales for the bakery topped £1.1 billion for the 26 weeks to the end of June - 7.2% higher than the same period a year ago.
Pre-tax profit for the first half of the year was £76.0m - up from £63.5m for the first six months of 2025.
Currie said the company was "broadening and innovating our menu in line with changing tastes and trends".
The company relaunched its salad range in May, "adding protein and increased choice for customers".
It is also trying to appeal to "new and younger customers" through its new iced matcha lattes, and to health-conscious consumers by making nutritional information on its labels clearer.
Greggs, which has more UK outlets than McDonald's, opened 34 stores in the first half of 2026. That brings the total to 2,773, taking into account 31 store closures.
More than half of the new openings were in areas with no Greggs stores within a mile. A similar proportion opened away from the High Street in locations including petrol forecourts, supermarkets, retail parks, hospitals and university campuses, it said.
Currie said Greggs is monitoring customer behaviour to ensure new stores boost visits "without cannibalising existing shop sales".
She also said Greggs had no price rises planned after its breakfast, lunch and "big" deals went up in May, following multiple hikes last year.
"Our prices are in a good place and we will now be working hard to protect the consumer and making sure that we can offer that value throughout the rest of the year," she said.
Weight loss jabs affecting Greggs, boss says
- Published8 January
Susannah Streeter, chief investment strategist at Wealth Club, said the results showed that "there's still healthy appetite for affordable treats" even as many consumers become more health-conscious.
"It's also proving nimble at keeping pace with the latest food trends, showing it can compete with far more premium cafes.
"The iced matcha latte has emerged as one of the hits of its latest menu revamp, demonstrating that the bakery chain can blend social media-inspired tastes with its trademark value offering."
She added, however, that the company is warning investment in expanding its supply chain will weigh on profits for the rest of 2026 unless customer confidence improves.
Julie Palmer, managing partner at BTG Consulting, said Greggs has proved resilient against "weight-loss drugs, low spending and confidence, and rising employment and business costs".
"After a summer of sport, beer gardens and heatwaves, Greggs will be banking on autumn and winter seeing demand for its hot pastries and convenient on-the-go products returning.
"Keeping prices low and continuing to expand product ranges to meet changing food trends will be key to luring people back into its vast number of stores to achieve this."
Last year Currie addressed questions about whether "peak Greggs" had been reached after its rapid expansion, saying "we have gone out...to demonstrate that this is not the case".
The group is targeting around 100 to 110 net new shops in 2026 and trialling a "bitesize" format and a self-service "Greggs Express" format. Its store numbers could go as high as 3,500.
Greggs said its expectations for the full year outcome were unchanged - 2026 underlying pre-tax profit at a similar level to 2025's £172m.
The chain had already flagged that higher costs from investment in new stores was expected to result in second half profit reducing year-on-year.
It added 6.9% of its sales now come from home delivery. It called this an "opportunity" for growth and noted customers tend to spend three times as much on home deliveries as they do in store.
- Published30 August 2025
- Published26 June
- Published1 October 2025`,
    bodyJa: `抹茶とプロテインのピボットが利益を上げ、グレッグス社に利益をもたらす
- 公開されました
グレッグス社はより健康的な製品やトレンドの飲み物に軸足を移したことで売上が伸び、このベーカリー チェーンは今年上半期で利益が 20% 増加したと報告しています。
英国最大のファストフードチェーンであるグレッグスは今年、さまざまな新商品を発売したが、その多くは高たんぱく質のサラダや抹茶などのトレンドを取り入れたものだ。
グレッグスの最高経営責任者ロイシン・カリー氏は以前、BBCニュースに対し、減量薬の台頭により顧客は「少量」を求めるようになり、収益に影響を与える可能性があると語った。
このベーカリーの総売上高は、6 月末までの 26 週間で 11 億ポンドを超え、前年同期比 7.2% 増加しました。
今年上半期の税引前利益は7,600万ポンドで、2025年上半期の6,350万ポンドから増加しました。
カリー氏は、同社は「嗜好やトレンドの変化に合わせてメニューを拡大し、革新している」と述べた。
同社は5月にサラダシリーズを再発売し、「タンパク質を追加し、顧客の選択肢を増やした」。
また、新商品のアイス抹茶ラテを通じて「新規顧客」や「若年層」への訴求を図り、ラベルの栄養成分表示をわかりやすくすることで健康志向の消費者へのアピールも図っている。
英国でマクドナルドより店舗数の多いグレッグスは、2026年上半期に34店舗をオープンした。31店舗の閉鎖を考慮すると、合計は2,773店舗となる。
新規出店の半分以上は、1マイル以内にグレッグスの店舗が存在しない地域にあった。同報告書によると、同様の割合で、ハイストリートから離れたガソリンスタンド、スーパーマーケット、小売公園、病院、大学キャンパスなどの場所にオープンしたという。
カリー氏によると、グレッグス氏は顧客の行動を監視し、「既存店の売上を共食いすることなく」新店舗の来店数が増加するよう努めているという。
同氏はまた、グレッグス社では、昨年複数回の値上げに続き、5月に朝食、昼食、「大型」取引が値上げされた後、値上げの計画はないと述べた。
「当社の価格は良好な位置にあり、今後は消費者を保護するために懸命に取り組み、年内を通じてその価値を確実に提供できるよう努める」と同氏は述べた。
減量ジャブがグレッグスに影響を与えると監督が語る
- 1 月 8 日に公開
ウェルス・クラブの首席投資ストラテジスト、スザンナ・ストリーター氏は、多くの消費者が健康志向を強めているにもかかわらず、「手頃な価格のお菓子に対する健全な欲求が依然としてある」ことをこの結果が示していると述べた。
「また、最新の食のトレンドに機敏に対応していることも証明されており、はるかに多くの高級カフェと競合できることが示されています。
「アイス抹茶ラテは、最新のメニューリニューアルのヒット商品の1つとして浮上しており、ベーカリーチェーンがソーシャルメディアからインスピレーションを得た味とその商標価値のある商品を融合できることを示しています。」
しかし、同社は顧客の信頼が改善しない限り、サプライチェーン拡大への投資が2026年残りの利益を圧迫することになると警告していると付け加えた。
ＢＴＧコンサルティングのマネジングパートナー、ジュリー・パーマー氏は、グレッグス氏が「減量薬、支出と信頼の低さ、雇用と事業コストの上昇」に対して強いことが証明されたと述べた。
「スポーツ、ビアガーデン、熱波で賑わった夏の後、グレッグスは、温かいペストリーや持ち運びに便利な商品の需要が戻ってくるのを見て、秋から冬に期待します。
「これを達成するには、価格を低く抑え、変化する食のトレンドに合わせて製品範囲を拡大し続けることが、膨大な数の店舗に人々を呼び戻す鍵となるでしょう。」
カリー氏は昨年、急速な拡大後に「グレッグスのピーク」に達したかどうかに関する質問に答え、「我々は、そうではないことを証明するために出かけてきた」と述べた。
同グループは2026年に約100～110の純新規店舗を目標としており、「一口サイズ」形式とセルフサービスの「グレッグス・エクスプレス」形式を試験的に導入している。店舗数は3,500に達する可能性がある。
グレッグス氏は、通期業績予想に変更はなく、2026年の実質的な税引き前利益は2025年の1億7,200万ポンドと同水準になると述べた。
同チェーンは、新店舗への投資によるコスト増加により、下半期の利益が前年同期比で減少すると予想されることをすでに警告していた。
同社は現在、売上の6.9％が宅配によるものだと付け加えた。同社はこれを成長の「機会」と呼び、顧客は店頭の3倍を宅配に費やす傾向があると指摘した。
- 2025 年 8 月 30 日発行
- 6 月 26 日発行
- 2025 年 10 月 1 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cx2r0nyx99yo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-29T10:37:33+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/d65a/live/f1815bb0-8b2a-11f1-841c-ef08db9db338.jpg",
    readTime: 5,
  },
  {
    id: "ticket-prices-set-to-rise-by-15p-as-heat-34a9799f",
    title: "Ticket prices set to rise by 15p as Heathrow able to recover runway project money",
    titleJa: "ヒースロー空港が滑走路プロジェクトの資金を回収できるため、航空券の価格が15ペンス上昇する予定",
    summaryJa: "ヒースロー空港が滑走路プロジェクトの資金を回収できるため、航空券の価格が15ペンス上昇する予定- 公開されました",
    bodyOriginal: `Ticket prices set to rise by 15p as Heathrow able to recover runway project money
- Published
Heathrow Airport will be allowed to charge airlines more for its services to recover money spent on the early stages of its third runway project.
The aviation regulator is permitting the airport to claw back up to £320m through higher airport charges to airlines for each passenger. This is likely to end up adding 15p to ticket prices in 2028, rising to 30p in later years.
A bidder which unsuccessfully put forward a rival design involving a shorter runway, Arora Group's Heathrow West, will also be allowed to recover £4.1m pounds in costs.
The Civil Aviation Authority (CAA) and Heathrow said safeguards would be put in place to protect consumers from unjustified costs.
At this stage, the costs being recovered are only for the early planning and design of the runway during 2025 and 2026.
How much the cost of actually building the runway will add to ticket prices won't be clear for some time.
Tim Johnson, the CAA's director of consumers and markets, told the BBC: "We've announced that the first tranche of costs, which is to help with the planning of this, can be recovered from passengers. That's up to a maximum of £320m."
Heathrow airport will also be able to collect Heathrow West's costs up to November last year by adding to its airport charges.
The CAA said allowing these costs to be recouped will result in the maximum airport charge per passenger increasing by around 15 pence in 2028, rising to an estimated 30 pence in the following years.
A Heathrow spokesperson said: "This project is about making travel more affordable and giving passengers more choice, while providing a real economic boost to every region and nation of the country."
"We are carefully considering the CAA proposals and will make investment decisions accordingly," the spokesperson added.
In November, the government announced it preferred the £33bn scheme put forward by the airport over Arora's alternative plan.
At the time, the Department for Transport said Heathrow's own proposal offered the most deliverable option, and the "greatest likelihood" of getting a decision on planning approval within this parliament.
The CAA's director of consumers and markets, Tim Johnson, said today's decision "strikes a balance between supporting the delivery of benefits to consumers through timely progress on Heathrow expansion, whilst also protecting them from undue increases in costs".
The regulator said "safeguards" designed to monitor cost efficiency would include transparency and cost reporting requirements, and assurance by independent experts.
Airlines often complain that Heathrow is the world's most most expensive hub airport, and have repeatedly voiced concern that the airport's expansion plans will make it pricier.
The government hopes for a planning decision by 2029.
Plans for a third runway stretch back decades, with the government backing the plans in 2003.
However, the idea has also long faced opposition from climate campaigners, many local residents, and several politicians.
They worry an additional runway will increase air pollution, noise pollution, and breach the government's legally binding climate commitments.
Get in touch
Do you have any views, comments or questions about this story?
Related topics
- Published18 June
- Published25 November 2025`,
    bodyJa: `ヒースロー空港が滑走路プロジェクトの資金を回収できるため、航空券の価格が15ペンス上昇する予定
- 公開されました
ヒースロー空港は、3本目の滑走路プロジェクトの初期段階で費やした資金を回収するため、航空会社にサービスの追加料金を請求することが認められる。
航空規制当局は、空港が乗客1人当たりの航空会社への空港使用料を引き上げることで最大3億2000万ポンドを取り戻すことを認めている。これにより、2028 年にはチケット価格に 15 ペンスが追加され、後年には 30 ペンスに上昇する可能性があります。
より短い滑走路を伴うライバルの設計を提案して失敗した入札者であるアローラ・グループのヒースロー・ウェストも、費用として410万ポンドを回収することが認められる。
民間航空局（CAA）とヒースロー空港は、消費者を不当な費用から守るために安全策が講じられると述べた。
現段階で回収される費用は、2025年から2026年にかけての滑走路の初期計画と設計にのみかかる。
実際に滑走路を建設する費用が航空券の価格にどれだけ加算されるかは、当分は明らかではない。
CAAの消費者・市場担当ディレクター、ティム・ジョンソン氏はBBCに対し、「計画を支援するための費用の最初の部分は乗客から回収できると発表した。その額は最大3億2000万ポンドだ」と語った。
ヒースロー空港も昨年11月までのヒースロー・ウェストの費用を空港使用料に上乗せして徴収できるようになる。
CAAは、これらの費用の回収を認めれば、2028年には乗客1人当たりの最大空港使用料が約15ペンス増加し、その後数年には推定30ペンスに上昇すると述べた。
ヒースロー空港の広報担当者は、「このプロジェクトは旅行をより手頃な価格にし、乗客により多くの選択肢を与えるとともに、国内のすべての地域と国に実質的な経済刺激を提供することを目的としている」と述べた。
同広報担当者は「われわれはＣＡＡの提案を慎重に検討しており、それに応じて投資決定を下す」と付け加えた。
11月、政府はアローラの代替案よりも空港が提示した330億ポンドの計画を優先すると発表した。
当時運輸省は、ヒースロー空港独自の提案が最も実現可能な選択肢であり、議会内で計画承認の決定を得る「可能性が最も高い」と述べた。
CAAの消費者・市場担当ディレクター、ティム・ジョンソン氏は、本日の決定は「ヒースロー空港拡張のタイムリーな進展を通じて消費者への利益の提供を支援すると同時に、不当なコストの増加から消費者を保護することのバランスを取るものである」と述べた。
規制当局は、コスト効率を監視するために設計された「安全策」には、透明性とコスト報告の要件、独立した専門家による保証が含まれると述べた。
航空会社はヒースロー空港が世界で最も高価なハブ空港であるとしばしば不満を漏らしており、空港の拡張計画により空港の価格がさらに高くなるのではないかとの懸念を繰り返し表明している。
政府は2029年までに計画を決定したいと考えている。
3本目の滑走路の計画は数十年前に遡り、政府は2003年に計画を支持した。
しかし、このアイデアは気候変動運動家、多くの地元住民、数人の政治家からの反対にも長い間直面してきた。
彼らは、滑走路の追加によって大気汚染や騒音公害が増大し、政府の法的拘束力のある気候変動に関する公約に違反するのではないかと懸念している。
連絡する
この話に関して何かご意見、ご意見、ご質問はありますか？
関連トピック
- 6 月 18 日公開
- 2025 年 11 月 25 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cdx8ke9gpnko?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-29T08:22:53+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/182d/live/7af18c50-8b24-11f1-a7ab-8b30adf0800a.jpg",
    readTime: 4,
  },
  {
    id: "bts-concerts-have-been-so-successful-it-f3c9c507",
    title: "BTS' concerts have been so successful, it’s now bad for its own agency’s shares",
    titleJa: "BTSのコンサートは大成功を収め、現在は所属事務所の株価に悪影響を及ぼしている",
    summaryJa: "BTS の成功により、韓国最大の K-POP 代理店 Hybe は第 2 四半期で素晴らしい業績を達成したにもかかわらず、同代理店は 24 時間以内に 2 兆 8,450 億ウォン (19 億 6,000 万ドル) もの時価総額が消え去った。ハイブの株価は火曜日に16.09％急落し、2022年6月以来の最悪の日となった。その後、水曜日には損失が拡大し、2024年9月以来の最低水準となる16.31％まで下落した。",
    bodyOriginal: `Despite the success of BTS powering South Korea's largest K-pop agency Hybe to a stellar set of second quarter results, the agency saw as much as 2.845 trillion won ($1.96 billion) wiped from its market cap in less than 24 hours.
Shares of Hybe tanked 16.09% on Tuesday, marking its worst day since June 2022. It then extended losses to tumble as much as 16.31% on Wednesday to its lowest since September 2024.
The stock move was triggered by a miss in profit-margin expectations despite revenue and operating profit reaching record highs, according to analysts.
While concert revenue was the main driver of the record results, analysts said that concerts see more of their revenue paid out to the artists than the company, resulting in lower margins.
Concert revenue spiked 243.3% year on year and a whopping 630% compared to the previous quarter. This was mainly powered by BTS' Arirang tour, which started on April 9 in South Korea.
Hybe's operating margin for its second quarter stood at 11.8%, below SK Securities expectations of 12.7% and also falling short of the 12.2% expected by Eugene Securities.
In a July 29 note, SK analyst Park Jun-hyung said the higher proportion of tour revenue brought higher artist-settlement costs, which caused profitability to fall short of expectations.
Park's assessment is echoed by IM Securities analyst Hwang Ji-won, who described mature-artist concert revenue — like BTS — as relatively low-margin, adding that the higher concert mix increased cost pressure.
The market had expected that revenue figures would be led by merchandise sales, which carry a higher profit margin, according to Kiwoom Securities analyst Lim Soo-jin. Margins for merchandise can go up to 50%, analysts previously told CNBC.
Hybe said in its earnings release that more than 200 more concerts from all its artists are expected in the second half of 2026, in addition to 119 concerts in the first half, which together would be the most for the company since 2021.
'Incomprehensible'
All five brokerages reviewed by CNBC still struck a positive note on the company, with Kiwoom's Lim saying that additional merchandise production in the second half, as well as an expansion of tours from new groups Cortis and Katseye are likely to support future earnings.
IM Securities also pointed to promising growth by rookie groups, as well as the return of girl group NewJeans to help Hybe's earnings.
NewJeans had been one of Hybe's most successful rookie groups until it was involved in a long running contract dispute with Hybe starting from 2024.
In December, a South Korean court ruled that NewJeans' contract with Hybe subsidary ADOR remains valid, which means that NewJeans are still contractually bound with ADOR until 2029.
— CNBC's Jenny Lee contributed to this report.`,
    bodyJa: `BTS の成功により、韓国最大の K-POP 代理店 Hybe は第 2 四半期で素晴らしい業績を達成したにもかかわらず、同代理店は 24 時間以内に 2 兆 8,450 億ウォン (19 億 6,000 万ドル) もの時価総額が消え去った。
ハイブの株価は火曜日に16.09％急落し、2022年6月以来の最悪の日となった。その後、水曜日には損失が拡大し、2024年9月以来の最低水準となる16.31％まで下落した。
アナリストらによると、売上高と営業利益が過去最高に達したにも関わらず、株価の変動は利益率の期待外れによって引き起こされたという。
アナリストらは、コンサート収益が記録的業績の主な原動力となっているが、コンサートでは収益の多くが会社よりもアーティストに支払われるため、利益率が低下すると述べた。
コンサート収益は前年同期比で 243.3% 増加し、前四半期と比較すると 630% もの大幅な増加となりました。これは主に、4月9日に韓国で始まったBTSのアリランツアーによって推進された。
ハイブの第２・四半期の営業利益率は１１．８％で、ＳＫ証券の予想１２．７％を下回り、ユージン証券の予想１２．２％も下回った。
SKのアナリスト、パク・ジュンヒョン氏は7月29日のメモで、ツアー収益の割合が高くなったことでアーティストの決済コストが増加し、それが収益性が予想を下回ったと述べた。
IM Securitiesのアナリスト、ファン・ジウォン氏もパク氏の評価に同調しており、BTSのような成熟したアーティストのコンサート収益は比較的利益率が低いと述べ、コンサートの構成が増えることでコスト圧力が高まったと付け加えた。
キウム証券のアナリスト、イム・スジン氏によると、市場は売上高が利益率の高い商品販売によって牽引されると予想していた。アナリストらは以前CNBCに対し、商品のマージンは最大50％に達する可能性があると語った。
ハイブは決算発表の中で、2026年上半期の119回のコンサートに加え、全アーティストによる2026年下半期にはさらに200回以上のコンサートが予定されており、合わせて2021年以降、同社にとって最多となると述べた。
「理解できない」
CNBCが調査した証券会社5社はいずれも依然として同社に好意的な評価を示しており、キウムのリム氏は、下半期の追加商品生産や、新グループのコーティスとカッツェアイによるツアーの拡大が将来の収益を下支えする可能性が高いと述べた。
IM Securitiesはまた、新人グループの有望な成長と、ガールズグループNewJeansの復帰がHybeの収益を支援すると指摘した。
NewJeansは、2024年から始まるHybeとの長期にわたる契約紛争に巻き込まれるまで、Hybeで最も成功した新人グループの1つであった。
12月、韓国の裁判所は、NewJeansとHybe子会社ADORとの契約は引き続き有効であるとの判決を下し、これはNewJeansが2029年までADORとの契約上の拘束力を維持することを意味する。
— CNBC の Jenny Lee がこのレポートに寄稿しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/29/bts-concerts-hybe-record-results-shares-crash.html",
    publishedAt: "2026-07-29T07:26:43+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    readTime: 3,
  },
  {
    id: "minister-apologizes-as-korean-leveraged-92604e25",
    title: "Minister apologizes as Korean leveraged ETF investors nurse heavy losses amid chip stock rout",
    titleJa: "半導体株暴落で韓国のレバレッジETF投資家が巨額損失を懸念、大臣が謝罪",
    summaryJa: "今年初めの規則変更を受けて、個人投資家が株式へのレバレッジをかけた賭けで多額の損失を積み上げたことを受け、韓国の財務大臣は水曜日に謝罪した。KBフィナンシャルグループによると、5月27日の単一株レバレッジ型上場投資信託（ETF）の導入により、韓国の個人投資家は14兆ウォン（97億ドル）の買い越しを記録したのに対し、外国人投資家は約2兆ウォンだった。",
    bodyOriginal: `South Korea's finance minister apologized on Wednesday after retail investors racked up heavy losses from leveraged bets on stocks, following rule changes earlier this year.
The May 27 introduction of single-stock leveraged Exchange Traded Funds has seen Korean retail investors pile in with net purchases of 14 trillion won ($9.7 billion), compared with roughly 2 trillion won by foreign investors, according to KB Financial Group.
But the speculative trading boom that helped fuel one of the world's hottest equity markets has resulted in those investors nursing heavy losses as Korea's Kospi index has experienced a sharp correction, led by a downturn in chip stocks.
The pain has been especially acute for holders of single-stock leveraged ETFs tied to chip giants Samsung Electronics and SK Hynix, which had surged alongside the AI-driven semiconductor rally.
The KODEX SK Hynix Single Stock Leverage ETF — a product designed to deliver twice the daily move in SK Hynix shares — has fallen more than 80% since its June 23 peak, according to LSEG data.
The equivalent product tracking Samsung has fallen almost 75% from its peak on June 3.
It comes after a blistering rally in the Kospi has come to an abrupt halt, with jitters over chip stocks seeing the value of the index plunging almost 35% over the last month.
South Korea's finance minister Koo Yun-cheol accepted lawmakers' demand for an apology in a parliamentary session on Wednesday after single-stock leveraged ETFs were introduced without careful consideration, according to Reuters.
The country's Financial Services Commission Lee Eog-weon also said on Wednesday that the regulator is considering cutting off access to the products to all but professional investors.
Lee told the National Assembly's Political Affairs Committee in Seoul that "if necessary, there is a way to raise [the investment requirements] up to professional investors," according to the Seoul Economic Daily.
He added that regulators could lower the leverage multiple of single-stock leverage products if the necessary legislation is prepared by lawmakers.
Lee said: "Since [the tracking multiple of] two times is too large, lowering it would likely have an effect in terms of easing volatility." He added, "We will look into how to take investors into account, such as through beneficiary general meetings, together during the process of considering the bill."
— CNBC's Lee Ying Shan and Blair Baek helped contribute to this report.`,
    bodyJa: `今年初めの規則変更を受けて、個人投資家が株式へのレバレッジをかけた賭けで多額の損失を積み上げたことを受け、韓国の財務大臣は水曜日に謝罪した。
KBフィナンシャルグループによると、5月27日の単一株レバレッジ型上場投資信託（ETF）の導入により、韓国の個人投資家は14兆ウォン（97億ドル）の買い越しを記録したのに対し、外国人投資家は約2兆ウォンだった。
しかし、世界で最も熱い株式市場の一つを支えた投機取引ブームにより、韓国のコスピ指数は半導体株の下落に導かれて急激な調整を経験し、投資家は多額の損失を抱えている。
AI主導の半導体相場上昇とともに急騰した半導体大手サムスン電子とSKハイニックスに関連する単一株レバレッジETFの保有者にとって、この痛みは特に深刻だった。
LSEGのデータによると、KODEX SKハイニックス単一株レバレッジETF（SKハイニックス株の1日の動きの2倍を実現するように設計された商品）は、6月23日のピークから80％以上下落した。
サムスンを追跡する同等の製品は、6月3日のピークからほぼ75％下落した。
これは、コスピの激しい上昇が突然停止し、チップ株を巡る不安で同指数の価値が先月で約35％下落したことを受けてのことだ。
ロイター通信によると、韓国の具允哲（ク・ユンチョル）財政相は、単一株レバレッジ型ＥＴＦが慎重な検討なしに導入されたことを受け、水曜日の国会で謝罪を求める議員らの要求を受け入れたという。
同国の金融サービス委員会のイ・オグウェン氏も水曜日、規制当局がプロの投資家以外のすべての商品へのアクセスを遮断することを検討していると述べた。
ソウル経済新聞によると、李氏はソウルの国会政務委員会で、「必要に応じて（投資要件を）プロの投資家に引き上げる方法がある」と述べた。
同氏は、議員が必要な法案を準備すれば、規制当局は単一銘柄レバレッジ商品のレバレッジ倍率を下げる可能性があると付け加えた。
リー氏は「（追跡倍率の）２倍は大きすぎるため、引き下げはボラティリティ緩和の点で効果があるだろう」と述べた。その上で「受益者総会など投資家への配慮については法案の検討過程で一緒に検討していきたい」と述べた。
— CNBC の Lee Ying Shan と Blair Baek がこのレポートに貢献しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/29/korea-leveraged-etf-kodex-sk-hynix.html",
    publishedAt: "2026-07-29T07:01:28+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "oil-jumps-as-u-s-iran-resume-strikes-aft-3f5462f8",
    title: "Oil jumps as U.S.-Iran resume strikes after a brief pause",
    titleJa: "米国とイランが一時停止後に攻撃再開で原油急騰",
    summaryJa: "イランが米軍への攻撃を開始したことを受けて中東での緊張が再燃し、米国がサウジアラビアとともにイラクのイラン支援施設を攻撃したことを受け、アジアの取引で原油価格が急騰した。国際ベンチマークであるブレント原油先物９月渡しは３．４２％上昇し、１バレル＝８６．９７ドルとなった。米国ウェスト・テキサス・インターミディエート先物は３．５８％上昇し、１バレル＝８２．０９ドルとなった。",
    bodyOriginal: `Oil rose sharply in Asia trading, following renewed tensions in the Middle East after Iran launched an attack on American forces, while the U.S. along with the Saudis struck Tehran-backed sites in Iraq.
Futures for international benchmark Brent crude for September delivery gained 3.42% to $86.97 a barrel. U.S. West Texas Intermediate futures advanced 3.58% to $82.09 per barrel.
"Islamic Revolutionary Guard Corps forces launched multiple ballistic missiles from Iran in an attempted surprise attack on U.S. forces based in the Middle East," according to a post on X by the U.S. Central Command.
U.S. and Saudi forces also struck "multiple terrorist logistics and weapons sites" in eastern Iraq on Tuesday stateside, retaliating against more than 30 drone attacks in the past three days by "Iran-aligned terrorists," Centcom said.
Separately, the U.K. Maritime Trade Operations Centre reported "suspicious activity," in the Red Sea early in a post on X. Without giving more details, the agency said that the master of a tanker heard an explosion whilst transiting in the southern Red Sea. The advisory was issued on Tuesday, while the incident was reported on Monday.
Houthi attacks targeting Saudi oil facilities have also raised supply concerns. Houthi strikes on oil production, storage and port infrastructure could disrupt supply across the region, Bjorn Vang Jensen, Executive Industry Advisor at Xeneta said on CNBC's "Access Middle East" on Tuesday.
"The spike in oil prices has been compounded by Chairman Kevin Warsh's somewhat hawkish tone at his first FOMC meeting as Fed chair, and traders remain split on the central bank's decision due Wednesday," according to Kitco.
—CNBC's Lim Hui Jie contributed to the report.
Correction: This story was updated to fix delivery month for futures.`,
    bodyJa: `イランが米軍への攻撃を開始したことを受けて中東での緊張が再燃し、米国がサウジアラビアとともにイラクのイラン支援施設を攻撃したことを受け、アジアの取引で原油価格が急騰した。
国際ベンチマークであるブレント原油先物９月渡しは３．４２％上昇し、１バレル＝８６．９７ドルとなった。米国ウェスト・テキサス・インターミディエート先物は３．５８％上昇し、１バレル＝８２．０９ドルとなった。
米中央軍のXへの投稿によると、「イスラム革命防衛隊部隊は中東に拠点を置く米軍への奇襲攻撃を試み、イランから複数の弾道ミサイルを発射した」としている。
セントコム通信によると、米国軍とサウジアラビア軍は火曜日、イラク東部にある「複数のテロリストの兵站と兵器の拠点」も攻撃し、「イランと連携したテロリスト」による過去３日間で３０件以上のドローン攻撃に報復した。
これとは別に、英国海事貿易業務センターは、Xへの投稿の早い段階で紅海での「不審な活動」を報告した。詳細は明らかにしなかったが、同機関は、タンカーの船長が紅海南部を航行中に爆発音を聞いたと述べた。この勧告は火曜日に出され、事件は月曜日に報告された。
サウジアラビアの石油施設を標的としたフーシ派の攻撃も供給懸念を引き起こしている。ゼネタ社エグゼクティブ産業アドバイザーのビョルン・ヴァン・ジェンセン氏は火曜日、CNBCの「アクセス中東」で、フーシ派による石油生産、貯蔵、港湾インフラへの攻撃により、地域全体の供給が混乱する可能性があると述べた。
キトコ氏によると、「原油価格の高騰は、FRB議長として初のFOMC会合でのケビン・ウォーシュ議長のいくぶんタカ派的な口調によってさらに悪化しており、水曜に予定されている中央銀行の決定についてトレーダーの意見は依然分かれている」とのこと。
—CNBCのLim Hui Jie氏がこのレポートに寄稿しました。
訂正: この記事は、先物の受渡し月を修正するために更新されました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/29/oil-prices-today-brent-wti-iran-us-hormuz.html",
    publishedAt: "2026-07-29T06:15:59+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "why-america-s-super-rich-have-embraced-t-e990e6d3",
    title: "Why America's super rich have embraced the appeal of British soccer teams",
    titleJa: "なぜアメリカの超富裕層はイギリスのサッカーチームの魅力を受け入れたのか",
    summaryJa: "FIFAワールドカップが終わり、騒ぎが静まるにつれ、サッカーファンの注目はヨーロッパの国内リーグシーズンの開幕に移る。世界で最も人気のあるサッカーリーグであるイングランド・プレミアリーグは、8月21日に再び開幕し、王者アーセナルがタイトル防衛に乗り出す。リーグに対するアメリカ人の関心の高まりは、放送の視聴者数やソーシャルメディアの誇大宣伝だけでなく、役員会でもますます高まっていることが明らかです。英国のサッカークラブ、またはこのスポーツのより一般的な世界的名称によると、長年にわたって超富裕層や機関投資家の人気商品となってきました。 2005年のグレイザー家によるマンチェスター・ユナイテッド買収から始まった事は、現在のプレミアリーグ20チームのうち11チームをアメリカが支配するまでに拡大した。",
    bodyOriginal: `As the dust settles after the FIFA World Cup, soccer fans' attention turns to the start of Europe's domestic league seasons. The English Premier League — by some distance the most popular soccer league in the world — kicks off once again on August 21 with champions Arsenal launching their title defense.
Growing American interest in the league is evident not just in broadcast viewing figures and social media hype — but increasingly in boardrooms, too. English soccer clubs, or football clubs, per the sport's more common global name, have become hot commodities for ultra-rich and institutional ownership over the years. What began with the Glazer family's takeover of Manchester United in 2005 has proliferated to American control of 11 of the 20 current Premier League sides.
Further down the pyramid league system, smaller clubs have also attracted the interest of American celebrities. From Ryan Reynolds and Rob McElhenney's fairy tale acquisition of a fifth-tier Welsh team captured by the "Welcome to Wrexham" TV series in 2020, to Snoop Dogg's investment in second-division side Swansea City this year, the appetite for collaborations with U.S. pop culture figures is only growing.
Inefficiencies
In October 2010, John W Henry's Fenway Sports Group saw an opportunity. They could rescue Liverpool Football Club from the brink of administration for a cut-price fee of £300 million.
Almost 16 years later, the Boston-based group is poised to net an enormous return on investment after FSG confirmed it is in talks with a syndicate of investors, led by British-Indian entrepreneur Amit Bhatia, to offload a significant minority stake in the club.
The deal is believed to value Liverpool at $6 billion and is the culmination of a remarkable turnaround effort that saw the club restored to its former glory, winning two Premier League trophies and one European Champions League title under FSG's tenure as its financial backer.
It is the inefficiencies of British and European football clubs' day-to-day operations that particularly excite American businesspeople, sports finance analysts told CNBC.
Clubs are traditionally run with fans in mind, and typically, most are loss-making entities. Revenue maximization has rarely been the priority of British teams. Just eight Premier League clubs reported an operating profit in the 2024/25 season, with the league racking up combined pre-tax losses of £948 million ($1.26 billion), according to Deloitte.
Losses are partially driven by an inefficient system of income channels that new owners can optimize. But owners must be careful not to take commercialization too far, or risk alienating supporters, Deloitte warns.
"Frustrations among this group at the top-end of the game are building and in future many more may decide to vote with their feet, and step away from the live game," the researchers wrote in its 2026 football finance review.
Growing revenues do not necessarily translate into stellar returns for public shareholders, however, as the share prices of listed clubs Manchester United and Juventus highlight. Manchester United shares are up just 30% over the past five years and are yet to surpass 2018 highs. Juventus shares are down almost 70% over the same period.
Scarcity
Scarcity creates value, and there are only a few dozen elite football clubs in the world, many of which date their foundations back to the late 1800s.
"Football clubs are a rare asset, and arguably the ones in the UK are the rarest with the oldest histories attached to them," Amber Pinto, partner at sports investment agency Pinto Capital, told CNBC. "Live sport is also one of the only things that can't really be replaced by artificial intelligence. There is simply no way to replicate it online."
That's not to mention just how lucrative the rewards for success in the English Premier League can be.
TV revenues have traditionally been a critical source of funding for all clubs competing in the top division.
In the U.K., broadcast rights are sold to several providers, including Sky Sports, TNT Sports and, more recently, streaming competitors such as Amazon Prime.
The proceeds are then divided between the 20 Premier League teams, with 50% split equally between them, 25% divided up depending on final league position, and 25% split based on the eventual number of televised matches each team plays.
In the 2024-25 season, Premier League clubs pocketed over £3.3 billion in TV revenues, according to Deloitte – 50% of their total income.
Soccer's 'deal cycle'
As with any asset class, valuations are key. In the case of Liverpool, its global reach and strong brand are the reasons behind the club commanding such a price, according to Kieran Maguire, associate professor in football finance at the University of Liverpool.
"The $6 billion figure is not overly frothy in today's market, rather it is indicative of the scarcity of elite football clubs and the willingness of multi-billionaires to invest in them," he told CNBC on Wednesday.
For Pinto Capital, the deals cycle is "maturing" after a red-hot market in previous years. Ryan Reynolds' Wrexham story – the poster example of American ownership of a smaller U.K. club – has proved one of several catalysts for the sport to become an asset class of its own.
"The deal cycle has become slightly longer and more complex," Pinto added. "There is a football regulator for the first time, significant institutional players involved from finance and media, and football is now seen as an exportable, global product, for example Wrexham."
"This is supported by a wider asset exposure across wealth. Years ago, ultra-high-net-worths, family offices and fund managers wouldn't have looked at a specific sport allocation, but now it is very much on the agenda."`,
    bodyJa: `FIFAワールドカップが終わり、騒ぎが静まるにつれ、サッカーファンの注目はヨーロッパの国内リーグシーズンの開幕に移る。世界で最も人気のあるサッカーリーグであるイングランド・プレミアリーグは、8月21日に再び開幕し、王者アーセナルがタイトル防衛に乗り出す。
リーグに対するアメリカ人の関心の高まりは、放送の視聴者数やソーシャルメディアの誇大宣伝だけでなく、役員会でもますます高まっていることが明らかです。英国のサッカークラブ、またはこのスポーツのより一般的な世界的名称によると、長年にわたって超富裕層や機関投資家の人気商品となってきました。 2005年のグレイザー家によるマンチェスター・ユナイテッド買収から始まった事は、現在のプレミアリーグ20チームのうち11チームをアメリカが支配するまでに拡大した。
ピラミッド リーグ システムのさらに下位にある小規模クラブも、アメリカの有名人の関心を集めています。 2020年にライアン・レイノルズとロブ・マケルヘニーがTVシリーズ「ウェルカム・トゥ・レクサム」で獲得したウェールズ5部チームのおとぎ話のような買収から、今年のスヌープ・ドッグによる2部リーグのスウォンジー・シティへの投資に至るまで、米国のポップカルチャー界の人物とのコラボレーションへの意欲は高まるばかりだ。
非効率性
2010 年 10 月、ジョン W ヘンリーのフェンウェイ スポーツ グループはチャンスを見つけました。彼らは、3億ポンドの減額料金でリバプール・フットボール・クラブを経営危機の危機から救い出すことができるだろう。
それから約16年が経ち、ボストンに本拠を置くこのグループは、英国系インド人の起業家アミット・バティア率いる投資家シンジケートとクラブの重要な少数株を売却する交渉を行っていることをFSGが確認したことを受けて、巨額の投資利益を得る準備ができている。
この契約はリヴァプールの価値を60億ドルと評価しており、FSGの財政的支援者としての任期中にプレミアリーグのトロフィーを2回、欧州チャンピオンズリーグのタイトルを1回獲得するなど、クラブがかつての栄光を取り戻すという目覚ましい再建努力の集大成である。
スポーツ金融アナリストらはCNBCに対し、特に米国のビジネスマンを興奮させているのは、英国と欧州のサッカークラブの日常業務の非効率性だと語った。
クラブは伝統的にファンを念頭に置いて運営されており、通常、ほとんどのクラブは赤字の組織です。収益の最大化が英国チームの優先事項となることはほとんどない。デロイトによると、2024/25シーズンに営業利益を報告したプレミアリーグのクラブはわずか8クラブで、リーグ全体の税引前損失は9億4,800万ポンド（12億6,000万ドル）に上るという。
損失の一部は、新しい所有者が最適化できる非効率な収入経路システムによって引き起こされます。しかし、オーナーは商業化を行き過ぎないよう注意しなければならず、支持者を遠ざける危険を冒さないようにする必要があるとデロイトは警告する。
研究者らは2026年のサッカー財務レビューで、「ゲームのトップエンドにいるこのグループの間で不満が高まっており、将来的にはさらに多くの人が自らの足で投票し、生の試合から離れることを決意するかもしれない」と書いている。
しかし、上場クラブのマンチェスター・ユナイテッドやユベントスの株価が浮き彫りにしているように、収益の増加は必ずしも一般株主への素晴らしい利益につながるわけではない。マンチェスター・ユナイテッドの株価は過去5年間でわずか30％上昇しており、まだ2018年の高値を超えていない。ユベントスの株価は同期間で約70％下落した。
希少性
希少性が価値を生み出すため、エリートサッカークラブは世界に数十しかなく、その多くは設立を1800年代後半に遡ります。
スポーツ投資会社ピント・キャピタルのパートナー、アンバー・ピント氏はＣＮＢＣに対し、「サッカークラブは貴重な資産であり、おそらく英国のクラブが最も古い歴史を持つ最も希少な存在だ」と語った。 「ライブスポーツは、人工知能に置き換えることができない唯一のものでもあります。それをオンラインで再現する方法はまったくありません。」
イングランドのプレミアリーグでの成功に対する報酬がどれほど高額であるかは言うまでもありません。
テレビ収入は伝統的に、トップディビジョンで戦うすべてのクラブにとって重要な資金源でした。
英国では、放映権はスカイ スポーツ、TNT スポーツ、そして最近では Amazon プライムなどのストリーミング競合他社を含むいくつかのプロバイダーに販売されています。
その後、収益はプレミアリーグの20チームに分配され、50%が均等に分配され、25%が最終リーグ順位に応じて分配され、25%は各チームが最終的にテレビで放映される試合数に基づいて分配される。
デロイトによれば、2024-25シーズン、プレミアリーグのクラブは総収入の50％にあたる33億ポンド以上のテレビ収入を獲得したという。
サッカーの「取引サイクル」
他の資産クラスと同様に、評価が重要です。リバプール大学のフットボールファイナンス准教授、キーラン・マグワイア氏によると、リバプールの場合、その世界的な展開と強力なブランドが、クラブがこれほどの価格を設定した背後にある理由だという。
同氏は水曜日、CNBCに対し、「60億ドルという数字は、今日の市場において過度に泡立っているわけではなく、むしろエリートサッカークラブの不足と、そこに投資する億万長者たちの意欲を示している」と語った。
ピント キャピタルにとって、取引サイクルは、過去数年間の激化した市場を経て「成熟」しつつあります。ライアン・レイノルズのレクサムの物語は、英国の小規模クラブを米国が所有する典型的な例であり、このスポーツが独自の資産クラスになるためのいくつかのきっかけのうちの 1 つであることが証明されました。
ピント氏は「取引サイクルは若干長くなり、より複雑になった」と付け加えた。 「初めてサッカー規制当局が存在し、金融やメディアから重要な機関関係者が関与しており、レクサムなどサッカーは今や輸出可能な世界的な商品とみなされている。」
「これは、富裕層全体の資産エクスポージャーの拡大によって裏付けられています。何年も前であれば、超富裕層、ファミリーオフィス、ファンドマネージャーは特定のスポーツへの配分に注目していなかったでしょうが、今ではそれが非常に重要な議題となっています。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/29/why-america-super-rich-love-football-clubs-british.html",
    publishedAt: "2026-07-29T05:00:02+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 7,
  },
  {
    id: "asian-technology-stocks-extend-sell-off-1c0d47ee",
    title: "Asian technology stocks extend sell-off with SoftBank down 7% as AI plays take a hit",
    titleJa: "AIの活躍が打撃を受け、アジアのハイテク株は下落幅を拡大、ソフトバンクは7%下落",
    summaryJa: "アジアのハイテク株は水曜日、米国市場が再び軟調だったことを受けて半導体銘柄が下落を主導し、下落幅を拡大した。韓国では、SKハイニックスが過去最高の四半期利益と売上高を記録したにもかかわらず、アナリストの予想を下回ったため、半導体大手のSKハイニックスが10％以上下落した。サムスン電子は４％以上下落し、ＬＧイノテックは９％、ソウル半導体は６％以上下落した。",
    bodyOriginal: `Asian technology stocks extended their sell-off on Wednesday, with semiconductor names leading declines after another weak session in the U.S.
In South Korea, SK Hynix slid more than 10% after the chip giant missed analysts' estimates despite posting record quarterly profit and revenue. Samsung Electronics lost over 4%, while LG Innotek fell 9% and Seoul Semiconductor dropped over 6%.
The latest weakness in Asian chip stocks reflects "the ongoing deleveraging process in Korea and softer sentiment towards global technology stocks," said Kieron Poon, investment director of Asian equities at Aberdeen Investments, in a Tuesday note. However, he added that the recent volatility "has not changed our long-term positive view."
Japan's chip names also declined. Japan's computer memory manufacturer Kioxia was down 10%. Tokyo Electron fell 8.5%, while SoftBank Group, a major AI investment proxy through its stake in Arm, lost more than 7%.
Taiwan's TSMC, the world's largest contract chip manufacturer, was 1.32% lower.
Mainland China's tech-heavy ChiNext 300 index lost 1.83%, while the Hang Seng China Semiconductor Chips Index fell more than 5%.
The declines in Asia came on the heels of another weak session for U.S. semiconductor stocks overnight.
Nvidia sank at the open but closed the session flat. Intel dropped nearly 6% and AMD lost 8%. Memory space names Micron and Seagate lost more than 8%, Western Digital sank nearly 7% and Sandisk shed 14%. SK Hynix U.S. shares dropped 9%.
Despite the sharp pullback, Aberdeen sees the sell-off as an opportunity rather than a deterioration in fundamentals. "The recent market pullback has brought valuations to more attractive levels, creating opportunities for us to add exposure to high quality businesses at more reasonable prices," Poon said.
The recent pullback in AI-related chip stocks reflects investors "giving back a little bit of the froth that was in the AI market," David Riedel, founder and president of Riedel Research Group, told CNBC's "Squawk Box Asia" on Wednesday.
While concerns over AI financing and rising Chinese competition have weighed on sentiment, "the market is healthy," he said, adding that memory chipmakers "will be fine" but "just have to give back some of those sudden gains."
Chinese internet stocks listed in Hong Kong bucked the broader regional weakness with Tencent and Meituan up 3.6% and 2.7%, respectively. Alibaba, Baidu and Kuaishou all traded higher.`,
    bodyJa: `アジアのハイテク株は水曜日、米国市場が再び軟調だったことを受けて半導体銘柄が下落を主導し、下落幅を拡大した。
韓国では、SKハイニックスが過去最高の四半期利益と売上高を記録したにもかかわらず、アナリストの予想を下回ったため、半導体大手のSKハイニックスが10％以上下落した。サムスン電子は４％以上下落し、ＬＧイノテックは９％、ソウル半導体は６％以上下落した。
アバディーン・インベストメンツのアジア株投資ディレクター、キエロン・プーン氏は火曜日のメモで、アジアの半導体株の最近の低迷は「韓国で進行中のレバレッジ解消プロセスと世界のハイテク株に対するセンチメントの軟化」を反映していると述べた。ただ、最近のボラティリティは「当社の長期的な前向きな見方は変わっていない」とも付け加えた。
日本のチップ名も減少した。日本のコンピュータ用メモリメーカー、キオクシアは10％下落した。東京エレクトロンは8.5％下落し、アーム株を通じて大手AI投資代理店を務めるソフトバンクグループは7％以上下落した。
世界最大の半導体受託製造会社である台湾のTSMCは1.32％安。
中国本土のハイテク株の比率が高いチャイネクスト３００指数は１．８３％下落し、ハンセン中国半導体チップ指数は５％以上下落した。
アジア市場の下落は、昨夜米国の半導体株が再び下落したことを受けて起きた。
Nvidiaはオープンでは沈んだものの、セッションは横ばいで終了した。 Intelは6％近く下落し、AMDは8％下落した。メモリ分野の大手MicronとSeagateは8％以上下落し、Western Digitalは7％近く下落し、Sandiskは14％下落した。 SKハイニックスの米国株は9％下落した。
急激な反落にもかかわらず、アバディーンは今回の下落をファンダメンタルズの悪化ではなく機会と見ている。 「最近の市場の下落により、バリュエーションはより魅力的な水準に達し、よりリーズナブルな価格で高品質のビジネスへのエクスポージャーを追加する機会が生まれました」とプーン氏は述べた。
最近のAI関連チップ株の下落は、投資家が「AI市場にあった泡を少しだけ取り戻している」ことを反映していると、リーデル・リサーチ・グループの創設者兼社長のデビッド・リーデル氏は水曜日、CNBCの「スコーク・ボックス・アジア」で語った。
AI資金調達や中国の競争激化を巡る懸念が地合いを圧迫しているものの、同氏は「市場は健全だ」と述べ、メモリーチップメーカーは「大丈夫」だが「突然の利益の一部を返還する必要があるだけだ」と付け加えた。
香港に上場されている中国のインターネット株は、テンセントと美団がそれぞれ3.6％、2.7％上昇するなど、地域全体の低迷を跳ね返した。アリババ、百度、快手はいずれも値上がりした。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/29/chip-selloff-sk-hynix-samsung-softbank.html",
    publishedAt: "2026-07-29T03:02:57+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "trump-administration-bans-new-chinese-hu-d71e922d",
    title: "Trump administration bans new Chinese humanoid robots",
    titleJa: "トランプ政権、中国製の新型人型ロボットを禁止",
    summaryJa: "トランプ政権、中国製の新型人型ロボットを禁止- 公開されました",
    bodyOriginal: `Trump administration bans new Chinese humanoid robots
- Published
The Trump administration on Tuesday announced a ban on new foreign-made humanoid robot imports to the US over "unacceptable risks" to America's national security.
The move applies to advanced robots - including humanoid and four-legged machines. Many of them are made in China, which is competing with the US to develop robotics and artificial intelligence (AI).
The Federal Communications Commission (FCC) also banned imports of power inverters - devices used in data centres and solar panels - which it said could also pose a risk to the US economy.
The Chinese embassy in Washington said Beijing has long opposed the US' "politicising" of trade issues and sanctions based on "groundless pretexts".
FCC chairman Brendan Carr said the agency was doing its part "to secure America's critical supply chains".
The FCC has added the items to its Covered List - a register of goods and services that are deemed a risk to US national security.
The ban applies to new foreign-produced advanced robotic devices and power inverters and does not prevent the sale or import of any existing models that had been previously authorised by the FCC.
The FCC cited concerns that the use of foreign-made inverters could allow overseas firms to turn them off, steal data, facilitate remote access and surveillance by "foreign government actors, or be otherwise exploited through a cyberattack."
It added that the use of robots made outside the US could allow "malign actors to surveil Americans, enhance the capabilities of foreign intelligence services, or to remotely commandeer the robots."
The Chinese embassy in Washington also said Beijing will "take all necessary measures" in response to any moves that harm its interests, urging all countries to work together to develop AI "for the positive and for good".
It called on the US to "abandon its hegemonic mindset, and stop smearing Chinese companies and threatening them with sanctions."
The BBC has contacted major Chinese robot manufacturers Unitree, UBTech and AgiBot for comment.
Could humanoid robots be heading for the battlefield?
- Published9 June
Robots available for rent: But what can they do?
- Published7 July
China's exports have come under intense scrutiny by the US as the Trump administration attempts to address trade imbalances with the world's second largest economy.
Despite being the world's biggest exporter of electric vehicles, China has been effectively shut out of the American market by a steep tariff.
Washington has also blocked the sale of cutting-edge US semiconductors to China in a bid to protect national security, slow Beijing's military modernisation and maintain America's lead in AI.
US Treasury Secretary Scott Bessent has also warned that Chinese AI firms could face sanctions over allegations that they have stolen American intellectual property.
In response the Chinese government has said its country's development of AI was "the result of its own dedication and effort as well as international cooperation".
The US will be keen to avoid a repeat of the squeeze on supply chains that was triggered last year when China tightened export controls on rare earths - critical for electronics.
Chinese technology firms have rapidly developed humanoid robots to be used in settings including factories and homes.
Companies have also been quick to market their machines to businesses and the public ahead of US humanoid robot rivals like Elon Musk's Tesla and Boston Dynamics.`,
    bodyJa: `トランプ政権、中国製の新型人型ロボットを禁止
- 公開されました
トランプ政権は火曜日、米国の国家安全保障に対する「容認できないリスク」を理由に、新たな外国製の人型ロボットの米国への輸入を禁止すると発表した。
この動きは、人型ロボットや四足歩行機械を含む高度なロボットに適用されます。その多くはロボット工学や人工知能（AI）の開発で米国と競争している中国製だ。
米連邦通信委員会（FCC）はまた、データセンターや太陽光パネルで使用される電力変換装置（パワーインバーター）の輸入も禁止しており、これも米国経済にリスクをもたらす可能性があるとしている。
ワシントンの中国大使館は、中国政府は米国による通商問題の「政治利用」と「根拠のない口実」に基づく制裁に長年反対していると述べた。
FCCのブレンダン・カー委員長は、FCCは「米国の重要なサプライチェーンを確保する」ためにその役割を果たしていると述べた。
FCCはこれらの品目を対象リスト（米国の国家安全保障に対するリスクとみなされる商品やサービスの登録リスト）に追加した。
この禁止は、外国で生産された新しい先進的なロボット装置およびパワーインバーターに適用され、以前に FCC によって認可されていた既存モデルの販売または輸入を妨げるものではありません。
FCCは、外国製インバーターの使用により、海外企業がインバーターの電源をオフにしたり、データを盗んだり、「外国政府関係者」によるリモートアクセスや監視を容易にしたり、あるいはサイバー攻撃を通じて悪用されたりする可能性があるとの懸念を示した。
さらに、米国外で製造されたロボットの使用により、「悪意のある者が米国人を監視したり、外国情報機関の能力を強化したり、ロボットを遠隔操作したりする」可能性があると付け加えた。
ワシントンの中国大使館もまた、中国は自国の利益を損なうあらゆる動きに対して「必要なあらゆる措置を講じる」と述べ、「前向きかつ善のため」AIの開発に協力するよう各国に呼び掛けた。
同声明は米国に対し、「覇権主義的な考え方を放棄し、中国企業を中傷したり、制裁で脅したりするのをやめる」よう求めた。
BBCは中国の大手ロボットメーカーUnitree、UBTech、AgiBotにコメントを求めた。
人型ロボットが戦場に向かう可能性はあるだろうか？
- 6 月 9 日発行
レンタル可能なロボット: しかし、何ができるのでしょうか?
- 7 月 7 日に公開
トランプ政権が世界第2位の経済大国との貿易不均衡に対処しようとする中、中国の輸出は米国の厳しい監視にさらされている。
中国は世界最大の電気自動車輸出国であるにもかかわらず、高額な関税により事実上米国市場から締め出されている。
米国政府はまた、国家安全保障を守り、中国政府の軍事近代化を遅らせ、AI分野での米国のリードを維持する目的で、米国の最先端半導体の中国への販売を阻止している。
スコット・ベッセント米財務長官も、中国のAI企業が米国の知的財産を盗んだ疑いで制裁を受ける可能性があると警告した。
これに対し中国政府は、同国のAI開発は「自国の献身と努力、そして国際協力の結果」であると述べた。
米国は、昨年中国がエレクトロニクスにとって重要なレアアースの輸出規制を強化したことで引き起こされたサプライチェーンの逼迫の再発を避けたいと考えている。
中国のテクノロジー企業は、工場や家庭などで使用される人型ロボットを急速に開発している。
企業はまた、イーロン・マスク氏のテスラやボストン・ダイナミクスといった米国の人型ロボットのライバルに先駆けて、自社の機械を企業や一般向けにいち早く売り込んでいる。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cp9e2ex3ekyo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-29T02:30:50+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/3b8e/live/23eaf6d0-8ade-11f1-b889-f97dd2fdd738.jpg",
    readTime: 4,
  },
  {
    id: "iran-launches-surprise-ballistic-missile-6633dff1",
    title: "Iran launches surprise ballistic missile attack on U.S. forces in the Middle East",
    titleJa: "イラン、中東の米軍に弾道ミサイル奇襲攻撃",
    summaryJa: "米中央軍は、イランが火曜日遅く、イランが中東の米軍を弾道ミサイルで標的にし、交戦側が一時的に戦闘を停止した後、地域の緊張を再び高めたと発表した。セントコムはXへの投稿で、攻撃はイランからのものだったが、ミサイルはすべて迎撃されたと述べた。 「イスラム革命防衛隊は中東に拠点を置く米軍への奇襲攻撃を試み、イランから複数の弾道ミサイルを発射した。」",
    bodyOriginal: `Iran targeted American forces in the Middle East with ballistic missiles late Tuesday stateside, U.S. Central Command said, raising tensions in the region again after the warring sides had briefly halted hostilities.
Centcom in a post on X said that the attack originated from Iran, but all missiles were intercepted. "Islamic Revolutionary Guard Corps forces launched multiple ballistic missiles from Iran in an attempted surprise attack on U.S. forces based in the Middle East."
While the U.S. military command did not specify where the attacks were aimed at, Axios reported the attack was directed at a U.S. base in Jordan, citing U.S. officials.
In a subsequent statement posted on X, Centcom said U.S. and Saudi forces struck "multiple terrorist logistics and weapons sites" in eastern Iraq Tuesday stateside, retaliating against more than 30 drone attacks in the past three days by "Iran-aligned terrorists."
Saudi Arabia's defence ministry said the strikes were carried out in coordination with U.S. Central Command, and added the kingdom does not seek escalation, but will respond to any aggression it faces.
Riyadh said earlier that drones launched from Iraq by "Iran-affiliated terrorist militias" attempted to target petroleum facilities in Saudi Arabia.
Tensions have escalated after a two-day pause in a hostilities between Washington and Tehran, sending oil surging, after prices declined for three straight days.
U.S. President Donald Trump had set aside plans to escalate the war against Iran amid worries over diminishing stockpiles of Patriot interceptors and other air defense munitions in the Middle East, The New York Times had reported. Trump had dismissed concerns over stockpile depletion.
Iran had indicated it would stop carrying out attacks as long as the U.S. refrained from striking, Reuters had reported on Sunday, citing a senior Iranian official.
Separately, the U.K. Maritime Trade Operations Centre reported "suspicious activity," in the Red Sea in a post on X.
The agency said the master of a tanker reported hearing an explosion whilst transiting in the southern Red Sea, without giving more details. The incident was reported on Monday, while the advisory was issued on Tuesday.
While it is not confirmed if the reported incident was perpetrated by Houthi rebels in the Red Sea, it is known that the rebels had claimed to have attacked two Saudi oil tankers in the area last week, with Saudi Arabia retaliating against the rebels.
The Bab-el Mandeb strait in the Red Sea is a critical export channel for Saudi Arabian oil diverted from the Strait of Hormuz and a chokepoint for commercial shipping traffic.
Experts have warned that a closure of Bab el-Mandeb would block in those barrels, exacerbating the oil disruption triggered by Iran's attacks on tankers in Hormuz.`,
    bodyJa: `米中央軍は、イランが火曜日遅く、イランが中東の米軍を弾道ミサイルで標的にし、交戦側が一時的に戦闘を停止した後、地域の緊張を再び高めたと発表した。
セントコムはXへの投稿で、攻撃はイランからのものだったが、ミサイルはすべて迎撃されたと述べた。 「イスラム革命防衛隊は中東に拠点を置く米軍への奇襲攻撃を試み、イランから複数の弾道ミサイルを発射した。」
米軍司令部は攻撃の標的がどこにあったかは明らかにしていないが、アクシオス通信は米当局者の話として、攻撃はヨルダンの米軍基地に向けられたものだと報じた。
セントコムはXに掲載されたその後の声明で、米国とサウジアラビア軍が火曜日、イラク東部のイラク国内にある「複数のテロリストの兵站と兵器の拠点」を攻撃し、「イランと連携したテロリスト」による過去3日間で30件以上の無人機攻撃への報復を行ったと述べた。
サウジアラビア国防省は、今回の攻撃は米中央軍と連携して行われたと述べ、サウジはエスカレーションを求めていないが、直面するあらゆる侵略には対応するだろうと付け加えた。
リヤドはこれに先立ち、「イラン系テロ民兵組織」がイラクから発射した無人機がサウジアラビアの石油施設を標的にしようとしたと発表した。
ワシントンとテヘランの間の戦闘が2日間停止したことを受けて緊張が高まり、価格が3日連続で下落した後、原油価格が急騰している。
ニューヨーク・タイムズ紙は、中東におけるパトリオット迎撃機やその他の防空兵器の備蓄が減少することへの懸念を背景に、ドナルド・トランプ米大統領が対イラン戦争激化計画を保留したと報じた。トランプ大統領は備蓄枯渇に対する懸念を否定していた。
ロイター通信が日曜、イラン高官の話として報じたところによると、イランは米国が攻撃を控える限り攻撃をやめる意向を示していたという。
これとは別に、英国海事貿易業務センターはXへの投稿で、紅海での「不審な活動」を報告した。
同庁はタンカーの船長が紅海南部を航行中に爆発音を聞いたと報告したが、詳細は明らかにしなかった。この事件は月曜日に報告され、勧告は火曜日に出された。
報告された事件が紅海でフーシ派反政府勢力によって犯されたかどうかは確認されていないが、反政府派が先週同地域でサウジアラビアの石油タンカー２隻を攻撃したと主張していたことが知られており、サウジアラビアが反政府派に報復している。
紅海のバブ・エル・マンデブ海峡は、ホルムズ海峡から迂回されたサウジアラビア石油の重要な輸出路であり、商業船舶交通のチョークポイントである。
専門家らは、バブ・エル・マンデブ港が閉鎖されればこれらの樽が詰まり、ホルムズのタンカーに対するイランの攻撃によって引き起こされた石油の混乱がさらに悪化するだろうと警告している。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/29/us-iran-war-hormuz-centcom.html",
    publishedAt: "2026-07-29T02:06:49+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "saudi-arabia-has-a-new-and-pricier-worka-a38d69f2",
    title: "Saudi Arabia has a new, and pricier, workaround to export its oil",
    titleJa: "サウジアラビアは石油を輸出するための、より高価な新たな回避策を用意した",
    summaryJa: "サウジアラビアが、より長く、より高価なバックドアを通じて買い手に石油を提供しようと競い合う中、地中海の港での積み込み量が増加している。",
    bodyOriginal: `Loadings at a Mediterranean port have picked up as Saudi Arabia races to offer its oil to buyers through a lengthier — and more expensive — backdoor.`,
    bodyJa: `サウジアラビアが、より長く、より高価なバックドアを通じて買い手に石油を提供しようと競い合う中、地中海の港での積み込み量が増加している。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/saudi-arabia-has-a-new-and-pricier-workaround-to-export-its-oil-fb5085a5?mod=mw_rss_topstories",
    publishedAt: "2026-07-29T01:28:00+00:00",
    category: "エネルギー",
    imageUrl: "https://images.mktw.net/im-67079616",
    readTime: 2,
  },
  {
    id: "seagate-s-earnings-are-welcome-news-for-f69ed8f2",
    title: "Seagate’s earnings are welcome news for the battered AI trade",
    titleJa: "Seagateの収益は、打撃を受けたAI業界にとって歓迎すべきニュースだ",
    summaryJa: "ストレージメーカーの6月四半期決算はウォール街の予想を上回り、時間外株価は上昇",
    bodyOriginal: `The storage maker’s June-quarter results come in ahead of Wall Street’s expectations, and the stock rallies after hours`,
    bodyJa: `ストレージメーカーの6月四半期決算はウォール街の予想を上回り、時間外株価は上昇`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/seagates-earnings-are-welcome-news-for-the-battered-ai-trade-92dfc30f?mod=mw_rss_topstories",
    publishedAt: "2026-07-29T00:21:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-47691818",
    readTime: 2,
  },
  {
    id: "the-evidence-that-shows-today-s-20-somet-6be5809e",
    title: "The evidence that shows today's 20-somethings really do have it worse",
    titleJa: "今日の20代の状況が本当に悪化していることを示す証拠",
    summaryJa: "今日の20代の状況が本当に悪化していることを示す証拠- 公開されました",
    bodyOriginal: `The evidence that shows today's 20-somethings really do have it worse
- Published
Young people in their 20s are facing a tougher start to adulthood than any generation in almost half a century, according to analysis of UK data on housing, employment and wealth, carried out for the BBC.
More than 40% of 25-year-olds are now living with their parents, their wages have stagnated and employment has fallen, show the figures which compare key metrics for different generations at age 25 stretching back to the early 1980s.
The findings are underscored by the experiences of young people themselves who, along with parents, have contacted BBC Your Voice about their circumstances, with many saying they were frustrated about being accused by older generations of not trying hard enough.
We asked the Institute for Fiscal Studies (IFS) to gather and analyse government data, external, for the first time, to see if this generation really does have it worse.
The biggest change it found was where those in their 20s are living.
Home ownership rate down by two-thirds in 30 years
The number of 25-year-olds owning their own home has plummeted from 43% in the mid 1980s to just 15%. There is a simple reason for that: it is too expensive.
The data shows that housing costs for renters or people with a mortgage in their 20s are the highest they have ever been for them at this age, and they now take up a higher share of income than for their parents or grandparents.
And that's not even factoring in the rising cost of affording to run a home, where bills have spiraled rapidly, hitting Gen Z hardest as its wages are lower on average than other age groups facing the same rising prices. The result is the number of 25-year-olds living with their parents has risen from 25% in the 1990s to 42% today.
It is a hurdle that Gen Z is experiencing on a unique scale, but the impact is being felt by their parents too as their lifestyles and futures are being clipped by having young adults still living at home.
Adam Daytona, 26, moved back home this year to live with his parents. He says: "I think there's no world where it's normal to be 26-years-old still living at home. It's unfair on me, it's unfair on my parents.
"To state the obvious, I'm not going to bring a girl back to my parents' house. So it would have 100% affected that part of my life, which does get me low, obviously.
"People say your 20s are the best years of your life and these are the worst years of my life, by far."
Adam's parents Jane, 57, and Neville, 64, say: "I think it's very difficult for them. They're not able to buy houses like we were able to.
"We were more than happy for him to to come home but obviously, you know, we're getting older and it would be nice to have a place to ourselves."
First drop in female employment since the 1980s
There's been a dip in employment rates for Gen Z compared with the generations that came before.
The jobs squeeze has been felt especially among young women who had seen decades of growing opportunity as more entered the workplace.
But this current generation of 25-year-olds is the first to see a drop in employment rates, down from 77% 10 years ago to 71%.
For men, the fall is almost as stark. Men aged 25 are seeing a lower rate of employment than their age-equivalents in the 1970s, 1980s and 1990s, with employment rates dropping from 84% to 76%.
The number of applications before a success, the frequency of job losses, and the unknown challenge of AI in the workplace mean that the entry into working life is getting off to a much rockier start for this generation.
Daisy Edwards, 25, is back home with her parents in Guildford after losing her job in London. She says: "When I lost that job, I immediately started job searching and that was when it became clear quite how fleeting that London lifestyle was. I think it was pretty instant that I ran out of money.
"I'd had a few job interviews but I really committed to job searching. I was applying for maybe five or six jobs a day sometimes.
"I think it can really get you down and the longer you are unemployed the more you worry about things, like you don't want to pay to go out."
Dave, Daisy's dad, says: "That's a big difference to me having worked in the same company for 32 years. I've only ever had one job interview and I'm still there.
"The amount of job applications [Daisy] did was crazy. You had that spreadsheet. And often people don't get back to you. I would not like that."
Wages not grown much beyond £28,000
It's clear from the data that 25-year-olds who are in work are likely to be earning more than their parents were at that age, and a lot more than their grandparents received. But after big wage growth for 25-year-olds from the 1980s through to the early 2000s, hitting an average of £28,526, all of that stopped.
"The big picture is stagnation," says Jonathan Cribb, deputy director of the IFS. "It's not that these people are worse off than those that came before them, but it's that they're no better off and that progress has stalled."
Those born between 1987 and 1991 were entering the workforce just after the financial crash and saw a big fall in earnings. They are, in fact, the group who received the lowest average wages of any 25-year-olds over the last three decades. Since then, wages for 25-year-olds have crawled back up, almost to the point they were 20 years ago. Those waves of economic shocks, the pandemic and cost of living crisis mean that wages for 25-year-olds are only just above £28,000 now, after adjusting for inflation - and that stagnation hits people at the start of their careers hardest.
Society also has an expectation in that each generation will do better than the next, and when reality and expectations don't match there's inevitable disappointment.
Rachel Diamond, 23, moved from her family home in Oldham to Portsmouth to follow her dream job as a graduate engineer. She earns in the early £30,000s and says: "I was quite lucky when I got my job straight after uni. So I've kind of done everything right, but still I'm not saving any money from my paycheck, like months and months, just because it's so expensive with renting and bills. I don't think people realise how expensive it is to rent.
"That's the thing, like council tax, you only get 25% discount, so that's expensive on my own. Again, that's a choice, living on my own, but still."
Rachel's dad Paddy says: "When I started out in work I was in a similar situation to Rachel. I moved away from home and I lived on my own because I didn't know anybody where I was moving to, and certainly it was hard for me, and it seems to be, equally as hard, if not, well, probably harder for Rachel.
"I bought my first flat when I was in my early 20s. I was earning £20,000 a year and my first flat was £36,000."
... but there is some hope on the horizon
The hope is that Gen Z will still achieve these milestones, potentially just a little later on, and that salaries and employment rates will recover as this group progress into their 30s.
For this generation, recognising the new terrain they are facing means comparison is impossible. Plenty have adopted a new mind-set, holding society's goals more loosely, and learning to thrive on shifting sands.
That's something Shahida, 22, has adopted through her job hunt process. Before landing her dream gig in the Ministry of Justice, she says the search to find work "took a lot of resilience".
"It did result in a lot of tears and a lot of self-doubt at the beginning and I think that's completely normal and it's part of the process."
While Shahida says she hopes she doesn't take her job for granted, she says she's "happy to say that I work in a place that I really enjoy".
Get in touch
Have you been affected by the issues raised in this story?
Related topics
- Published1 July
- Published21 April`,
    bodyJa: `今日の20代の状況が本当に悪化していることを示す証拠
- 公開されました
BBCのために実施された英国の住宅、雇用、富に関するデータの分析によると、20代の若者は、ここ半世紀近くのどの世代よりも、成人への厳しいスタートに直面しているという。
25歳の40％以上が現在両親と同居しており、彼らの賃金は停滞し、雇用は減少している。この数字は、1980年代初頭まで遡って25歳時点でのさまざまな世代の主要な指標を比較したものである。
この調査結果は、親とともにBBC Your Voiceに自分たちの状況について問い合わせた若者自身の経験によって強調されており、多くは努力が足りないとして年上の世代から非難されることに不満を抱いていると述べた。
私たちは財政研究所（IFS）に対し、この世代が本当に状況が悪化しているかどうかを確認するために、初めて外部の政府データを収集・分析するよう依頼した。
その結果、最も大きな変化が見られたのは、20代の居住地だった。
住宅所有率は30年間で3分の2に低下
マイホームを所有する 25 歳の数は、1980 年代半ばの 43% からわずか 15% まで激減しました。その理由は単純で、価格が高すぎるからです。
データによると、20代の賃貸人や住宅ローンを抱えている人の住居費は、この年齢ではこれまでで最も高く、収入に占める割合が親や祖父母よりも高くなっている。
そしてこれには、同じ物価上昇に直面している他の年齢層に比べて平均賃金が低いため、請求額が急速に高騰し、Z世代が最も大きな打撃を受けている住宅維持費の上昇も考慮されていない。その結果、両親と同居する 25 歳の数は 1990 年代の 25% から現在では 42% に増加しました。
これはZ世代が経験している独特の規模のハードルだが、若者が依然として自宅で生活することでライフスタイルや将来が狭められており、その影響は彼らの親たちも感じている。
26歳のアダム・デイトナさんは、両親と暮らすために今年故郷に戻った。 「26歳でまだ家に住んでいるのが普通の世界なんてないと思います。それは私にとっても不公平ですし、両親にとっても不公平です。
「当たり前のことですが、私は女の子を実家に連れて帰るつもりはありません。つまり、それは私の人生のその部分に100％影響を及ぼし、明らかに私を落ち込ませます。
「20代は人生で最高の年だと人々は言いますが、私にとってはこれまでで最悪の年です。」
アダムさんの両親、ジェーンさん（57）とネビルさん（64）は、「彼らにとってはとても難しいことだと思う。彼らは私たちができたように家を買うことができない。
「私たちは彼が家に帰ってくるのをとてもうれしく思いましたが、当然のことながら、私たちは年をとってきているので、自分たちだけの場所があればいいのにと思います。」
1980年代以来初めて女性の雇用が減少
Z世代の就業率は以前の世代と比べて低下している。
雇用の逼迫は、何十年にもわたって、より多くの人々が職場に参入するにつれて成長の機会があったと見てきた若い女性の間で特に感じられている。
しかし、この現在の25歳の世代は、就業率の低下を初めて経験しており、10年前の77％から71％にまで低下している。
男性の場合も同様に、その落ち込みは激しい。 25 歳の男性の就業率は、1970 年代、1980 年代、1990 年代の同年齢の男性と比べて低くなり、就業率は 84% から 76% に低下しました。
成功するまでの応募数、失職の頻度、職場における AI の未知の課題などを考慮すると、この世代の社会人生活への入り口が非常に困難なスタートを切っていることがわかります。
デイジー・エドワーズさん（25）は、ロンドンで職を失い、ギルフォードの両親とともに実家に戻っている。彼女はこう言います。「仕事を失ったとき、すぐに仕事探しを始めたのですが、そのときロンドンでの生活がいかに儚いものであるかがはっきりと分かりました。あっという間にお金がなくなってしまったと思います。
「就職面接は何回か受けましたが、仕事探しには真剣に取り組んでいました。多い時は1日に5、6件の仕事に応募していました。
「本当に落ち込むこともあると思います。失業期間が長ければ長いほど、外出にお金を払いたくないなど、心配事が増えます。」
デイジーの父親であるデイブは、「32年間同じ会社で働いてきた私にとって、それは大きな違いです。私はこれまでに一度だけ面接を受けましたが、今も面接を受けています。
「[デイジー] の仕事への応募の量は異常でした。あなたはそのスプレッドシートを持っていました。そして、人々はあなたに返事をしないことがよくあります。私はそれが好きではありません。」
賃金は28,000ポンドを超えるとあまり伸びない
データから明らかなように、働いている25歳はその年齢の両親よりも収入が多く、祖父母が受け取っていた収入よりもはるかに多く稼いでいる可能性が高い。しかし、1980年代から2000年代初頭にかけて25歳の賃金が大幅に上昇し、平均賃金が2万8526ポンドに達した後、そのすべてが止まった。
「全体像は停滞だ」とIFS副所長のジョナサン・クリブ氏は言う。 「これらの人々の状況が以前の人々よりも悪化しているというわけではありませんが、彼らの状況が良くなっておらず、進歩が停滞しているということです。」
1987年から1991年の間に生まれた人々は金融危機直後に就職したが、収入は大幅に減少した。実際、彼らは過去30年間で25歳の中で最も平均賃金が低いグループだ。それ以来、25歳の賃金はほぼ20年前の水準まで回復した。こうした経済ショック、パンデミック、生活費危機の波により、25歳の賃金はインフレ調整後でも現在2万8000ポンドをわずかに上回る水準にとどまっており、停滞はキャリアのスタート時に最も大きな打撃を与える。
社会はまた、各世代が次の世代よりもうまくいくだろうという期待を持っており、現実と期待が一致しない場合、必然的に失望が生じます。
レイチェル・ダイアモンドさん（23 歳）は、大学院エンジニアとしての夢の仕事に就くため、オールダムの実家からポーツマスに引っ越しました。彼女の収入は3万ポンド前半で、「大学を卒業してすぐに仕事に就けたのはとても幸運でした。だから、すべてを正しくやってきたのですが、それでも家賃や諸費用がとても高いので、給料からお金を何ヶ月も貯めていません。家賃がどれだけ高いか、人々は気づいていないと思います。」
「それは、市議会税と同様に、25% の割引しか受けられないので、それは私自身にとっては高価です。繰り返しますが、それは自分で生きるという選択ですが、それでもです。」
レイチェルの父親パディは、「私が仕事を始めたとき、私もレイチェルと同じような状況にありました。私は家を出て一人暮らしをしていました。引っ越し先には誰も知り合いがいなかったからです。確かにそれは私にとって大変でした。レイチェルにとっても、同じくらい、いや、まあ、おそらくもっと大変だったようです。
「20代前半のときに最初のアパートを購入しました。年収は2万ポンドで、最初のアパートは3万6千ポンドでした。」
...しかし、地平線には希望が見えてきます
期待されているのは、Z世代がこれらのマイルストーンを達成するのはまだ少し先になる可能性があり、このグループが30代に進むにつれて給与と雇用率が回復することだ。
この世代にとって、自分たちが直面している新たな領域を認識することは、比較が不可能であることを意味します。多くの人が新しい考え方を採用し、社会の目標をより緩やかに保持し、変化する砂の上で繁栄する方法を学んでいます。
それは、22歳のシャヒーダさんが就職活動の過程で取り入れてきたことだ。法務省で夢の仕事に就くまで、仕事を探すのに「かなりの回復力が必要だった」と彼女は言う。
「最初はたくさんの涙を流したり、自信をなくしたりする結果になりましたが、それは全く普通のことであり、プロセスの一部だと思います。」
シャヒダさんは、自分の仕事を当たり前のことだと思わないでほしいとしながらも、「本当に楽しい場所で働いていると言えるのが嬉しい」とも言う。
連絡する
この話で提起された問題の影響を受けましたか?
関連トピック
- 7 月 1 日発行
- 4 月 21 日公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cy8mnvk4r48o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-28T23:52:23+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/aff6/live/4463fc90-8b1a-11f1-b2ab-0dd01740f9f6.png",
    readTime: 9,
  },
  {
    id: "brits-urged-to-avoid-dangerous-plug-adap-d4c66c12",
    title: "Brits urged to avoid dangerous plug adaptors this summer - what to watch out for",
    titleJa: "英国人はこの夏、危険なプラグアダプターの使用を避けるよう呼びかけ – 気をつけるべきこと",
    summaryJa: "英国人はこの夏、危険なプラグアダプターの使用を避けるよう呼びかけ – 気をつけるべきこと- 公開されました",
    bodyOriginal: `Brits urged to avoid dangerous plug adaptors this summer - what to watch out for
- Published
Brits going on holiday abroad this summer have been warned to watch out for dangerous travel adaptors, after an investigation suggested thousands may be for sale online.
Consumer safety group Electrical Safety First (ESF) tested 14 products from AliExpress, Amazon Marketplace, eBay and TikTok Shop - and found they all failed to meet UK safety requirements.
It said in some instances the devices could expose users to risk of serious electric shock or electrocution.
AliExpress, Amazon, eBay and TikTok all said they had removed the products ESF flagged from sale, and that they treated product safety as a top priority.
But Giuseppe Capanna, ESF product safety engineer, urged those "heading abroad this summer to think before they buy".
"What looks like a bargain could come at a much higher cost," he warned.
Capanna also said shoppers should buy travel adaptors from trusted retailers "so they can travel with confidence".
ESF tested six regular travel adaptors and eight universal adaptors it suspected could pose safety concerns.
To be sold in the UK, adaptors must not have accessible live parts and only one set of pins should come out at a time.
But the charity found multiple sets could be exposed simultaneously in six out of eight of the universal adaptors it tested.
None of the eight met the required dimensions and mechanical strength, while some pins snapped off under force during tests.
ESF said anyone who tried to remove a broken pin from a socket would be at risk of electric shock.
The six basic travel adaptors also presented fire safety concerns in tests.
These included missing safety shutters - which protect people from coming into contact with a plug's live internal parts - missing fuses and oversized pin holes.
The Office for Product Safety and Standards has noted such concerns when issuing alerts for travel adaptors.
For instance, it recently ordered the recall of one product, external it said lacked safety shutters and rejected the import of another, external, saying it presented a serious risk of fire because it did not meet UK plug dimension requirements.
Online reviews seen by ESF also sparked concerns about how widely the devices it tested may have been purchased and used.
In one review on Amazon Marketplace, a user claimed the device "fell apart in their hands" and they "could have been electrocuted" if this had happened during use.
"We require all products offered in our store to comply with applicable laws, regulations and our own policies," said an Amazon spokesperson.
"The products identified have been removed from sale."
They added: "If we discover a product was undetected by our automated checks, we address the issue immediately and refine our controls."
Meanwhile a review of a universal travel adaptor on AliExpress claimed it exploded while in use.
An AliExpress spokesperson told the BBC it had removed the products flagged by ESF and was contacting affected customers to initiate a recall.
"We have also launched a wider review of universal travel adapter listings where all plug pins are shown extended at the same time," they said, adding AliExpress would restrict listings with this "unsafe characteristic" until corrected by the seller.
An eBay spokesperson said they "combine technology, AI-supported monitoring and specialist teams to help maintain a safe and trusted marketplace," adding its efforts have "prevented millions of potentially unsafe items from being listed every year".
TikTok said it "robustly" enforced it policies, "with 99.5% of the violative products we remove taken down before they are listed".
But ESF believes the government should do more to hold online sellers to account.
"Shopping in the UK is currently far too dangerous," said Capanna.
"These platforms claim customer safety is a priority, yet our investigations show that, in reality, they perpetually fail to prevent dangerous goods being made freely available to the public."
It has called for online marketplaces to be made legally responsible for products sold on their sites, saying this would help protect consumers from dangerous electrical goods.
Consumer group Which? recently said it discovered phone chargers for sale online that posed similar dangers to users, external.
"Badly designed electricals can have life-altering - even fatal - consequences," said head of consumer protection Sue Davies.
"It's appalling that online marketplaces continue to fail to prevent dangerous products from reaching consumers, despite countless warnings."
How do I know I am safe? Three things to watch out for
1. Multiple pins retractable
Capanna said a universal travel adaptor that lets multiple pins extend at once is "the most immediate sign it is dangerous", posing real risks of electric shock or electrocution.
2. Seeing internal parts
Being able to see the internal parts through its socket holes can be a sign it is unsafe - they should have safety shutters instead.
3. Spelling and grammar
Spelling and grammar mistakes can be "a sign that the manufacturer has not taken care in producing their product," Capanna said.
Allow YouTube content?
This article contains content provided by Google YouTube. We ask for your permission before anything is loaded, as they may be using cookies and other technologies. You may want to read Google’s cookie policy, external and privacy policy, external before accepting. To view this content choose ‘accept and continue’.
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.
Related topics
- Published29 November 2021`,
    bodyJa: `英国人はこの夏、危険なプラグアダプターの使用を避けるよう呼びかけ – 気をつけるべきこと
- 公開されました
調査により、何千もの旅行用アダプターがオンラインで販売されている可能性があることが示唆され、この夏に海外旅行に行く英国人に危険な旅行用アダプターに注意するよう警告された。
消費者安全団体 Electrical Safety First (ESF) は、AliExpress、Amazon Marketplace、eBay、TikTok Shop の 14 製品をテストし、それらがすべて英国の安全要件を満たしていないことを発見しました。
場合によっては、この機器がユーザーを重篤な感電や感電死の危険にさらす可能性があるとしている。
AliExpress、Amazon、eBay、TikTokはいずれも、ESFがフラグを立てた製品を販売から削除し、製品の安全性を最優先に扱っていると述べた。
しかし、ESF製品安全エンジニアのジュゼッペ・カパンナ氏は、「この夏海外に行く人たちには、購入する前によく考えてほしい」と呼び掛けた。
「お買い得に見えるものでも、はるかに高いコストがかかる可能性がある」と同氏は警告した。
カパンナ氏はまた、買い物客は「安心して旅行できるように」信頼できる小売店からトラベルアダプターを購入すべきだと述べた。
ESF は、安全上の懸念を引き起こす可能性があると考えられる 6 つの通常のトラベル アダプターと 8 つのユニバーサル アダプターをテストしました。
英国で販売するには、アダプターにアクセス可能な通電部分があってはならず、一度に 1 セットのピンのみが取り出される必要があります。
しかし、慈善団体は、テストしたユニバーサル アダプター 8 個のうち 6 個で、複数のセットが同時に危険にさらされる可能性があることを発見しました。
8 つのピンはいずれも必要な寸法と機械的強度を満たしておらず、テスト中に力が加わると一部のピンが折れました。
ESFは、壊れたピンをソケットから引き抜こうとする人は感電する危険があると述べた。
6 つの基本的なトラベル アダプターもテストで火災安全上の懸念を示しました。
これらには、人がプラグの通電している内部部品に接触するのを防ぐ安全シャッターの欠落、ヒューズの欠落、特大のピンホールが含まれます。
製品安全基準局は、トラベルアダプターに関する警告を発する際に、そのような懸念があることを指摘しています。
例えば、同社は最近、安全シャッターが欠如しているとして社外品のリコールを命令し、英国のプラグ寸法要件を満たしていないため発火の重大な危険性があるとして別の社外品の輸入を拒否した。
ESF が確認したオンライン レビューも、テストしたデバイスがどの程度広く購入され使用されているのかについての懸念を引き起こしました。
Amazonマーケットプレイスのあるレビューでは、ユーザーはデバイスが「手の中でバラバラになった」ため、使用中にこれが起こったら「感電死した可能性がある」と主張した。
アマゾンの広報担当者は、「当店で提供するすべての商品は、適用される法律、規制、および当社独自のポリシーに従うことを求めている」と述べた。
「特定された製品は販売から削除されました。」
さらに、「当社の自動チェックで製品が検出されなかったことが判明した場合は、直ちに問題に対処し、管理を改善します。」と付け加えた。
一方、AliExpress でのユニバーサルトラベルアダプターのレビューでは、使用中に爆発したと報告されていました。
AliExpressの広報担当者はBBCに対し、ESFの報告を受けた製品を削除し、リコールを開始するよう影響を受けた顧客に連絡していると語った。
「我々はまた、すべてのプラグピンが同時に伸びた状態で表示されるユニバーサルトラベルアダプターの出品の広範な見直しを開始した」と彼らは述べ、売り手が修正するまで、この「危険な特性」を持つ出品を制限すると付け加えた。
eBayの広報担当者は、eBayは「テクノロジー、AI支援の監視、専門家チームを組み合わせて、安全で信頼できる市場の維持を支援している」と述べ、その取り組みが「毎年、数百万もの潜在的に危険な商品の出品を防止している」と付け加えた。
TikTokはポリシーを「強力に」執行し、「削除した違反商品の99.5％は上場前に削除する」と述べた。
しかしESFは、政府はオンライン販売者の責任を追及するためにもっと行動すべきだと考えている。
「英国での買い物は現在、あまりにも危険だ」とカパンナ氏は語った。
「これらのプラットフォームは顧客の安全が最優先であると主張していますが、実際には危険物の一般公開を常に阻止できていないことが私たちの調査でわかっています。」
同団体は、危険な電気製品から消費者を守るのに役立つとして、オンライン市場にそのサイトで販売される製品に対する法的責任を課すよう求めている。
消費者団体 どっち？は最近、外部のユーザーに同様の危険をもたらす携帯電話の充電器がオンラインで販売されているのを発見したと発表した。
消費者保護部門責任者のスー・デイビス氏は、「不適切に設計された電気機器は、人生を変える、さらには致命的な結果をもたらす可能性がある」と述べた。
「数えきれないほどの警告にもかかわらず、オンライン市場が危険な製品が消費者に届くのを阻止できていないのは恐ろしいことだ。」
自分が安全であることをどうやって確認できますか?気をつけるべき3つのこと
1. 複数のピンが格納可能
カパンナ氏は、複数のピンを一度に延長できるユニバーサルトラベルアダプターは「危険であることの最も直接的な兆候」であり、感電や感電死の実際の危険を引き起こすと述べた。
2. 内部部品を見る
ソケットの穴から内部部品が見えるということは、安全でないことを示している可能性があります。代わりに安全シャッターを設置する必要があります。
3. スペルと文法
スペルや文法の間違いは「メーカーが製品の製造に注意を払っていないことの表れ」になる可能性があるとカパンナ氏は言う。
YouTube コンテンツを許可しますか?
この記事には Google YouTube が提供するコンテンツが含まれています。 Cookie やその他のテクノロジーが使用されている可能性があるため、何かを読み込む前に許可を求めます。同意する前に、Google の Cookie ポリシー (外部) およびプライバシー ポリシー (外部) をお読みください。このコンテンツを表示するには、「同意して続行」を選択してください。
Tech Decoded ニュースレターに登録して、世界のトップのテクノロジー ストーリーやトレンドをフォローしてください。英国外ですか？ここからサインアップしてください。
関連トピック
- 2021 年 11 月 29 日公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c5yeg1wegpno?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-28T23:00:15+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/bcb4/live/f740c5a0-8a75-11f1-a7ab-8b30adf0800a.jpg",
    readTime: 7,
  },
  {
    id: "burnham-has-no-scope-to-increase-borrowi-fba1ab45",
    title: "Burnham has no scope to increase borrowing, think tank warns",
    titleJa: "バーナムには借入を増やす余地はない、シンクタンクが警告",
    summaryJa: "バーナムには借入を増やす余地はない、シンクタンクが警告- 公開されました",
    bodyOriginal: `Burnham has no scope to increase borrowing, think tank warns
- Published
Prime Minister Andy Burnham will have to raise taxes or cut spending to meet his pledges on defence and the cost of living, a major think tank has said.
Burnham has announced a series of new measures since assuming office last week, including cuts to electricity bills and bringing the bus fare cap in most parts of England back down to £2.
But the National Institute of Economic and Social Research (Niesr) warned the public finances will continue to be squeezed by more persistent inflation as a result of the Iran war.
It questioned whether Burnham had "fully thought through" how his promises would be paid for, but said the prime minister will have to raise taxes or cut spending elsewhere.
Stephen Millard, Niesr's deputy director for macroeconomics, said: "There's clearly no scope for increasing borrowing, so it is about choices."
Labour's manifesto pledge was to not increase taxes for working people - including income tax, VAT and national insurance contributions - which Burnham has said he will uphold.
Millard said Niesr was advocating for cost-of-living measures to be funded through higher taxes – "which could involve tax reform rather than higher marginal rates" – or spending cuts.
He said: "People have talked a lot about the welfare bill – that is an obvious place to look.
"The triple lock on pensions, that is very, very expensive, and will get more expensive as we age."
He also pointed to potentially reforming council tax to move towards a land value tax system, or scrapping some VAT exemptions.
"Once you've done all of that, then I'm afraid I would break the manifesto promise and would be looking at the income tax rate."
Niesr also said on Wednesday it expects inflation to keep rising until February 2027, peaking at 3.8% before falling back to the Bank of England's 2% target.
The think tank said in its latest economic outlook that it does not believe the central bank will cut interest rates until 2028.
Its Director David Aikman said that "treading water is not enough" to prevent the national debt from rising.
"Every major shock this century has ratcheted the debt ratio higher, and none of that increase has been reversed," he said.
The Treasury said the government will stick to its fiscal rules while investing in "the public services people rely on".
"Fiscal discipline is the bedrock of economic stability and national security," a spokesperson said.`,
    bodyJa: `バーナムには借入を増やす余地はない、シンクタンクが警告
- 公開されました
大手シンクタンクによると、アンディ・バーナム首相は国防と生活費に関する公約を達成するために増税か歳出削減を迫られるだろう。
バーナム氏は先週の就任以来、電気代の値下げやイングランドの大半の地域でのバス料金の上限を２ポンドに戻すなど、一連の新たな措置を発表した。
しかし、国立経済社会研究所（ニーサー）は、イラン戦争の結果として続くインフレのさらなる圧迫により、財政は今後も圧迫されるだろうと警告した。
同紙は、バーナム首相が公約の対価をどのように支払うかを「十分に検討」したかどうかを疑問視する一方、首相は増税か他の分野での歳出削減が必要になるだろうと述べた。
ニーサー社のマクロ経済担当副局長スティーブン・ミラード氏は、「明らかに借入を増やす余地はないので、選択の問題だ」と述べた。
労働党のマニフェスト公約は、所得税、付加価値税、国民保険料を含む勤労者の増税を行わないことであり、バーナム氏はこれを守ると表明した。
ミラード氏は、ニースル氏が生活費対策の財源を増税（限界税率の引き上げではなく税制改革を伴う可能性がある）や歳出削減で賄うことを主張していると述べた。
同氏は、「人々は福祉法案について多くのことを話し合っているが、それは当然注目すべき点だ。
「年金の三重ロックは非常に高額で、年齢を重ねるにつれてさらに高額になるでしょう。」
同氏はまた、地方税を改革して地価税制に移行するか、付加価値税免除の一部を廃止する可能性があると指摘した。
「それをすべて実行したら、私はマニフェストの約束を破ることになり、所得税率を検討することになると思います。」
ニーサー総裁は水曜日、インフレ率は２０２７年２月まで上昇を続け、３．８％でピークに達し、その後イングランド銀行の目標である２％に戻るとの見通しを示した。
同シンクタンクは最新の経済見通しの中で、中銀が２０２８年まで利下げするとは考えていないと述べた。
同センターのデイビッド・エイクマン所長は、国家債務の増加を防ぐには「立ち泳ぎだけでは十分ではない」と述べた。
同氏は「今世紀に入って大きなショックが起きるたびに債務比率は徐々に上昇しており、その増加はどれも逆転していない」と述べた。
財務省は、政府は財政規則を堅持しつつ「国民が依存する公共サービス」に投資すると述べた。
報道官は「財政規律は経済安定と国家安全保障の基盤だ」と述べた。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c62ev62381mo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-28T23:00:12+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/cc77/live/c4407fe0-8aae-11f1-951f-a70d41b77a63.jpg",
    readTime: 3,
  },
  {
    id: "sloppy-and-clumsy-but-overwhelming-insid-bfb87dcd",
    title: "Sloppy and clumsy but overwhelming - inside the rogue ChatGPT hack",
    titleJa: "ずさんで不器用だが圧倒的 - 不正な ChatGPT ハックの内部",
    summaryJa: "ずさんで不器用だが圧倒的 - 不正な ChatGPT ハックの内部- 公開されました",
    bodyOriginal: `Sloppy and clumsy but overwhelming - inside the rogue ChatGPT hack
- Published
The company that got hacked by a rogue version of ChatGPT has revealed what it was like to be on the receiving end of the world's first fully-autonomous AI hack.
In an emergency video call with hundreds of cyber-security professionals, the firm described how the AI worked at superhuman speed but also made strange decisions and mistakes that no human hacker would have made.
Hugging Face, which is like an app store for AI tools, said the hacking agents worked relentlessly with thousands of different methods trialled simultaneously.
The company first revealed that it had been hacked, external by someone using powerful autonomous AI on 16 July and reported it to police.
Nearly a week later, OpenAI admitted it was its AI that had escaped a closed environment and attacked Hugging Face on its own during a test.
It was trying to find the answers to a hacking exam it had been set by OpenAI, and targeted Hugging Face.
The industry body the Cloud Security Alliance (CSA) wrote-up a report , externalbased on the emergency meeting with Hugging Face on Friday - which Hugging Face itself has reviewed.
"The agents followed inefficient routes and exhibited clumsy behaviours that no human would choose", the CSA wrote.
The agents repeated actions that they had already completed - a sign of an agentic AI losing its thread and context.
Jurassic Park
The agents also hallucinated reams of incoherent commands and text and were sloppy and did not cover their tracks well.
But among the errors and strange behaviour, Hugging Face warned the AI agents made brilliant technical moves and were able to rapidly adapt to new scenarios in the days-long hack.
It took three days for them to be discovered inside the Hugging Face IT network and it took the company's AI and cyber-security experts many hours to contain and eject the AI agents - something standard companies might struggle with.
The company would not say how much the hack cost it but said staff worked for many hours to rebuild about a third of their infrastructure.
Hugging Face has been praised for its transparency in telling the AI and cyber industry what happened.
The CSA warned the incident shows that AI "agents... find a way" - a reference to the film Jurassic Park, where dinosaurs escape their enclosures.
"They are objective-driven, set their own sub-goals, adapt in real time to bypass defences, and operate with a machine-speed persistence that can overwhelm manual operations," the paper reads.
Cyber security officer Ritesh Patel was on the Hugging Face call with around 450 others and says the industry is working hard to address the new threat of rogue AI agents.
"This is the reality of autonomous agents powered by frontier models: they are relentlessly persistent, sometimes highly noisy, and will try every possible path to achieve their goal, which can easily overwhelm traditional defences," he said.
This is not the first time AI agents have been shown to go "rogue".
In the CSA's report it references previous examples like in September 2024 when an earlier model of ChatGPT escaped its container to get an answer it needed for another test.
That event was contained in OpenAI's own IT systems and "largely celebrated at the time", the CSA noted.
But "rogue" behaviour "is the standard, not the exception," the paper claimed.
It warned cyber-security professionals around the world they needed to adapt to the new normal of swarms of AI agents working at speed in strange and clumsy ways that might lead to more breaches.
The paper also urged people who use or develop AI agents to be responsible in how they control them, calling for some way for cyber-security defenders to find out who is the ultimate owner of agents to increase transparency.
Previous reports suggest it took OpenAI four days , externalto realise its AI had hacked Hugging Face.
OpenAI said it would release the findings of its own investigation soon to help people learn from the event.
OpenAI says its AI went rogue and launched 'unprecedented' cyber-attack
- Published6 days ago
Firm hacked by rogue OpenAI models says it is 'a wake-up call'
- Published5 days ago
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.`,
    bodyJa: `ずさんで不器用だが圧倒的 - 不正な ChatGPT ハックの内部
- 公開されました
ChatGPT の不正バージョンによってハッキングされた企業は、世界初の完全自律型 AI ハッキングの被害に遭ったときの状況を明らかにしました。
数百人のサイバーセキュリティ専門家との緊急ビデオ通話で同社は、AIがいかに超人的なスピードで動作する一方で、人間のハッカーなら犯さないような奇妙な判断やミスを犯したことについて説明した。
AIツールのアプリストアのようなハギング・フェイスによると、ハッキング工作員は何千もの異なる手法を同時に試行し、執拗に働いたという。
同社は7月16日に、強力な自律型AIを使用する何者かによって外部からハッキングされたことを初めて明らかにし、警察に通報した。
ほぼ1週間後、OpenAIは、自社のAIが閉鎖環境から脱出し、テスト中に単独でHugging Faceを攻撃したことを認めた。
それは OpenAI によって設定されたハッキン​​グ試験の答えを見つけようとしており、Hugging Face をターゲットにしていました。
業界団体のクラウドセキュリティアライアンス（CSA）は、金曜日のハギングフェイス社との緊急会議に基づいて外部報告書を作成し、ハギングフェイス社自身がこの報告書を検討した。
CSAは「工作員らは非効率なルートをたどり、人間なら選択できないような不器用な行動を示した」と述べた。
エージェントは、すでに完了したアクションを繰り返しました。これは、エージェント AI がそのスレッドとコンテキストを失ったことの兆候です。
ジュラシック・パーク
エージェントらはまた、支離滅裂なコマンドやテキストを大量に幻覚で見せ、ずさんで足跡をうまく隠蔽しなかった。
しかし、ハギング・フェイス氏は、エラーや奇妙な動作の中でも、AIエージェントが数日間にわたるハッキングの中で見事な技術的動きを見せ、新たなシナリオに迅速に適応することができたと警告した。
Hugging Face IT ネットワーク内でこれらのエージェントが発見されるまでに 3 日かかり、同社の AI およびサイバーセキュリティの専門家が AI エージェントを封じ込めて排除するのに何時間もかかりましたが、これは標準的な企業が苦労する可能性のある作業です。
同社はハッキングの被害額については明らかにしなかったが、インフラストラクチャの約3分の1を再構築するためにスタッフが長時間働いたと述べた。
ハグ・フェイスは、AIやサイバー業界に何が起こったのかを伝える透明性が高く評価されている。
CSAは、この事件はAIが「エージェントが…方法を見つけている」ことを示していると警告した。これは、恐竜が囲いから脱出する映画「ジュラシック・パーク」にちなんでいる。
「彼らは目的を重視し、独自のサブ目標を設定し、防御を回避するためにリアルタイムで適応し、手動操作を圧倒するマシンスピードの粘り強さで操作します」と論文には書かれています。
サイバーセキュリティ担当者のリテシュ・パテル氏は、他の約450人とともにハギングフェイスコールに参加し、業界は不正なAIエージェントの新たな脅威に対処するために懸命に取り組んでいると語った。
「これがフロンティアモデルを活用した自律型エージェントの現実だ。彼らは容赦なく執拗で、時には非常に騒々しく、目標を達成するためにあらゆる手段を試みるため、従来の防御を簡単に圧倒してしまう可能性がある」と同氏は述べた。
AIエージェントが「不正行為」をすることが示されたのはこれが初めてではない。
CSAの報告書では、2024年9月にChatGPTの初期モデルが別のテストに必要な回答を得るためにコンテナをエスケープしたなど、以前の例に言及している。
この出来事はOpenAI自身のITシステムに含まれており、「当時は大いに祝われた」とCSAは指摘した。
しかし、「不正な」行為は「例外ではなく標準である」と同紙は主張した。
同報告書は、世界中のサイバーセキュリティ専門家に対し、AIエージェントの群れが奇妙かつ不器用な方法で高速で動作し、さらなる侵害につながる可能性があるという新たな常態に適応する必要があると警告した。
同紙はまた、AIエージェントを使用または開発する人々にAIエージェントの制御方法に責任を持たせるよう求め、透明性を高めるためにサイバーセキュリティ防御者がエージェントの最終的な所有者が誰であるかを特定する何らかの方法を求めた。
以前の報告では、OpenAI がその AI が Hugging Face をハッキングしたことに外部から気づくまでに 4 日かかったことが示唆されています。
OpenAIは、人々がこの出来事から学ぶのを助けるために、独自の調査結果を近く発表すると述べた。
OpenAI、自社のAIが不正行為を行い「前例のない」サイバー攻撃を開始したと発表
- 6 日前に公開
不正なOpenAIモデルによってハッキングされた企業、これは「警鐘」だと語る
- 5 日前に公開
Tech Decoded ニュースレターに登録して、世界のトップのテクノロジー ストーリーやトレンドをフォローしてください。英国外ですか？ここからサインアップしてください。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c2el319vzr3o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-28T23:00:10+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/52e9/live/3c2ddae0-8a9e-11f1-bdb4-61a481e25caf.jpg",
    readTime: 6,
  },
  {
    id: "don-t-wait-until-you-want-revenge-why-p-ae1ae76e",
    title: "'Don't wait until you want revenge' - why prenups are on the rise",
    titleJa: "「復讐したくなるまで待ってはいけません」 - 婚前交渉が増加している理由",
    summaryJa: "「復讐したくなるまで待ってはいけません」 - 婚前交渉が増加している理由- 公開されました",
    bodyOriginal: `'Don't wait until you want revenge' - why prenups are on the rise
- Published
Celine Tsoi and Charles Mock met two years ago in Goleta, California when she was just 23 and he was 27. Eight months later they were engaged.
Friends immediately asked: "Oh, are you getting a prenup?"
"A lot of things could happen in a marriage and you want to discuss them when you still love each other rather than when things go bad and you want to take revenge," says Celine.
These days its not just the rich and famous; more of us are deciding it makes sense to have a legal agreement that sets out what happens to the money if the marriage ends, with younger couples particularly likely to sign one, even when there aren't great wealth differences to consider.
Charles, a nurse, earns more than Celine does as a PhD student, but she had a bit more saved, so the disparities weren't big, but they wanted to face up to important financial questions from the start.
She was particularly touched that Charles wanted the prenup to say if they split up, she should have the house.
Just having the conversation "can show you what the person you're going to marry is like", she says.
There are no official figures, but in the US, where divorce courts have always tended to uphold prenups, nearly half of married millennials and more than one in three Gen Z report that they have a prenup. Overall in the US around one in five married couples has a prenup.
In the UK research suggests around one in ten couples now has a prenup, following a legal shift in England towards greater recognition.
Here too it is younger couples leading the way, with around one in three married under-35-year-olds having signed one, according to surveys.
'It's fair'
London lawyer Mark Gilmartin at JMW Solicitors says in the past 18 months he has seen a big increase in demand for prenups, with the billionaire-and-barmaid stereotype fast giving way to demand from "start-up professionals" including entrepreneurs and influencers.
"It's the attempts to protect the fruits of what's going to be, rather than what is," he says.
But beyond the would-be TikTok stars, he sees a significant trend towards "every-day you and I" couples wanting them, often in order to protect inherited wealth.
Among them is Becca Gibson from West Sussex. In a few days time when she walks down the aisle to marry Dave Howells, they'll be focused on their future not whether the marriage might fail. But they do have a plan just in case.
Dave earns £130,000 from his job in finance - more than three times what Becca earns from her business offering eyelash extensions.
"I was very open to the idea [of a prenup]," says 33-year-old Becca, especially after her first marriage "didn't end very well".
She knows a court-determined settlement might produce a better outcome for her, as she has three children from her first marriage, and Dave has only one from his.
"It's not an advantage for me... but it's a fair situation," she says.
Becca expects to inherit a significant amount of property from her parents, which she wants to protect, so in the event of a split, each will walk away with what they started with.
"It's nice knowing that if anything were to happen, I would just go back to how life was before," she says.
Dave, 45, admits it's unromantic but says, given the statistics around divorce, he wants to be pragmatic.
"A court of law could potentially say, hang on, this guy's earning a lot more than her, he needs to pay her.
"I built a home for myself. I've built a future for myself, including pensions.
The 'great wealth transfer'
"Park the emotional side of me loving both her and the kids, I'm no different now to when I met her, and yet she was independent. Why on earth would I have to pay something towards her life in the event of us splitting up?"
Lawyers say a desire to avoid repeating the pain of a previous separation, or the messy splits that they saw their parents go through, is a prime motivation for many couples.
But prenups have also become much more accessible with the rise of online platforms that make it faster and cheaper.
Dave started down the traditional route using a local law firm, expecting to pay around £5,000. But later switched to Wenup, a semi-automated service which charged him a fixed fee of £1,600 instead.
Couples are also getting married later, points out Julia Rodgers, cofounder of US prenup platform HelloPrenup.
"You may have some [university] debt, maybe started a business or purchased a home. So you have a lot to protect and to lose by the age of 34," she says.
What's become known as "the Great Wealth Transfer" means some members of the younger generation are receiving huge assets to manage. It is often their parents who are the driving force behind ring-fencing those inheritances.
And while in the past prenups have been criticised for limiting women's rights, Rodgers argues they have evolved and now benefit women like her by giving them the chance to clarify their rights from the start.
"We want to make sure we have the honest, open, transparent conversations about life goals, about finances, about roles and responsibilities in the home, so that we can have a long, happy marriage and not end up in that position that we saw our parents in," she says.
Celine says most of her friends think prenups are a good idea.
It only cost her a few hundred dollars online, but even if she had had to pay lawyers it would have been a worthwhile "investment" in the marriage she says, and less expensive, but probably more important than the wedding itself.
Best of all she and Charles have got the "hard conversations" out of the way.
"We haven't had a single argument about finances," she says.`,
    bodyJa: `「復讐したくなるまで待ってはいけません」 - 婚前交渉が増加している理由
- 公開されました
セリーヌ・ツォイとチャールズ・モックは2年前、彼女が23歳、彼が27歳のときにカリフォルニア州ゴレタで出会った。8か月後に婚約した。
友人たちはすぐに「婚前交渉を受けているの？」と尋ねました。
「結婚生活ではさまざまなことが起こる可能性がありますが、物事が悪くなって復讐したいときではなく、まだお互いを愛しているときに話し合いたいものです」とセリーヌは言います。
最近では、お金持ちや有名人だけではありません。私たちの多くは、結婚生活が終了した場合にお金がどうなるかを定めた法的協定を結ぶことが合理的だと判断しており、考慮すべき大きな貧富の差がない場合でも、特に若いカップルが協定に署名する可能性が高い。
看護師であるチャールズは、博士課程の学生であるセリーヌよりも収入が多いですが、セリーヌのほうが貯蓄があったため、その差は大きくありませんでしたが、彼らは最初から財政上の重要な問題に直面したいと考えていました。
彼女は、チャールズが結婚前に別れるなら家を手に入れるべきだと言ってほしかったことに特に感動した。
会話するだけで「結婚相手がどんな人なのかがわかる」と彼女は言う。
公式な数字はないが、離婚裁判所が常に婚前交渉を支持する傾向にある米国では、既婚ミレニアル世代のほぼ半数とZ世代の3人に1人以上が婚前交渉を行っていると報告している。米国全体では、約5組に1組の夫婦が婚前交渉を行っています。
英国では、認知度の向上に向けた法的変化を受けて、約10組に1組のカップルが婚前交渉を行っていることが調査で示唆されている。
ここでも若いカップルが主導しており、調査によると、35歳未満の既婚者の約3人に1人が契約を結んでいるという。
「公平だ」
JMWソリシターズのロンドン弁護士マーク・ギルマーティン氏は、億万長者でバーテンダーという固定概念が急速に起業家やインフルエンサーを含む「スタートアップ専門家」からの需要に取って代わられ、過去1年半で婚前交渉の需要が大幅に増加しているのを目の当たりにしたと述べた。
「それは、今あるものではなく、これから起こるものの成果を守ろうとする試みなのです」と彼は言う。
しかし、TikTokスター志望者以外にも、相続財産を守るために、「毎日あなたと私」のカップルが彼らを望んでいるという大きな傾向があると同氏は見ている。
その中にはウエストサセックス出身のベッカ・ギブソンもいる。数日後、彼女がデイブ・ハウエルズと結婚するために通路を歩くとき、彼らは結婚が失敗するかどうかではなく、自分たちの将来に集中するでしょう。しかし、彼らには万が一に備えた計画がある。
デイブは金融の仕事で 13 万ポンド稼いでいます。これはベッカがまつげエクステを提供するビジネスで稼いでいる額の 3 倍以上です。
33歳のベッカさんは、特に最初の結婚が「あまり良い結果にならなかった」後は、「（婚前婚の）考えにはとてもオープンだった」と語る。
彼女には最初の結婚からの子供が 3 人いるのに対し、デイブには彼の結婚からの子供が 1 人しかいないため、裁判所が決定した和解が彼女にとってより良い結果をもたらす可能性があることを彼女は知っています。
「それは私にとって有利ではありません...しかし、それは公平な状況です」と彼女は言います。
ベッカは両親から多額の財産を相続する予定であり、それを守りたいと考えているため、離婚の場合は、それぞれが最初の財産を手放すことになるだろう。
「もし何か起こっても、前の生活に戻れば済むと分かっているのは良かったです」と彼女は言います。
45歳のデイブは、それがロマンチックではないことを認めているが、離婚に関する統計を考慮すると、現実的でありたいと述べています。
「裁判所は、『ちょっと待って、この男性は彼女よりもはるかに稼いでいる、彼女に支払う必要がある』と言う可能性があります。
「私は自分のために家を建てました。年金も含めて自分の将来を築いてきました。
「莫大な富の移転」
「彼女と子供たちの両方を愛している私の感情的な側面は置いといてください。私は彼女に会ったときと今も変わりませんが、それでも彼女は独立していました。私たちが別れる場合、一体なぜ私が彼女の人生に何かを支払わなければならないのでしょうか？」
弁護士らは、以前の別居の痛みや、両親が経験した厄介な別れを繰り返したくないという願望が、多くのカップルにとって主な動機となっていると述べている。
しかし、オンライン プラットフォームの台頭により、婚前交渉をより迅速かつ安価に行うことができるようになり、さらに利用しやすくなりました。
デイブは、約 5,000 ポンドの支払いを期待して、地元の法律事務所を利用する従来のルートを歩み始めました。しかしその後、代わりに 1,600 ポンドの固定料金を請求する半自動サービスである Wenup に切り替えました。
米国のプレナッププラットフォームHelloPrenupの共同創設者ジュリア・ロジャース氏は、カップルの結婚も遅くなっていると指摘する。
「（大学で）借金があるかもしれないし、起業したり、住宅を購入したりするかもしれません。ですから、34歳までに守るべきもの、失うものがたくさんあるのです」と彼女は言う。
「大富裕層移転」として知られるようになったこれは、若い世代の一部が管理のために巨額の資産を受け取っていることを意味する。多くの場合、それらの遺産を囲い込む原動力となっているのは両親です。
また、これまで婚前交渉は女性の権利を制限するものとして批判されてきたが、ロジャーズ氏は、婚前交渉は進化し、今では最初から自分の権利を明確にする機会を与えることで彼女のような女性に利益をもたらしていると主張する。
「私たちは、人生の目標、お金のこと、家庭内での役割と責任について、正直でオープンで透明性の高い会話をするようにしたいと思っています。そうすれば、長く幸せな結婚生活を送り、両親が見ていたような立場に陥ることはありません」と彼女は言います。
セリーヌさんは、ほとんどの友人がプレナップは良いアイデアだと考えていると語った。
費用はオンラインで数百ドルしかかからなかったが、たとえ弁護士に支払わなければならなかったとしても、それは結婚への価値のある「投資」になっただろうし、費用はかからなかったが、おそらく結婚式そのものよりも重要だったと彼女は言う。
何よりも、彼女とチャールズは「難しい会話」を邪魔にならなかった。
「私たちは財政について一度も口論したことはありません」と彼女は言います。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cgmkgvy3lv4o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-28T23:00:07+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/8625/live/297e27a0-84fa-11f1-8b9b-a724b687bb3b.jpg",
    readTime: 7,
  },
  {
    id: "ebay-agrees-56m-settlement-with-bloggers-2bb121d9",
    title: "eBay agrees $56m settlement with bloggers over harassment case",
    titleJa: "eBay、ハラスメント訴訟でブロガーと5,600万ドルの和解に合意",
    summaryJa: "eBay、ハラスメント訴訟でブロガーと5,600万ドルの和解に合意- 公開されました",
    bodyOriginal: `eBay agrees $56m settlement with bloggers over harassment case
- Published
eBay and some former executives have agreed to pay a couple $56m (£42m) after a campaign of harassment in retaliation for their online criticism of the firm.
In a statement on Tuesday, David and Ina Steiner, said they and eBay had reached a settlement stemming from the 2019 harassment they faced from several of the company's executives, as well as internal communications by eBay's then chief executive.
The Steiners ran a website and newsletter EcommerceBytes that was at times critical of eBay.
A group of now former company executives ultimately pleaded guilty to sending the couple a costume mask covered in pigs blood, a book on surviving the death of a spouse, among other threatening actions.
Other actions, external perpetrated against the Steiners included eBay executives sending them a funeral wreath and harassing messages on Twitter (the social media platform now known as X). Some even paid visits to the couple's Massachusetts home in a bid to install a tracking device on their car.
Seven former eBay executives pleaded guilty, external to the criminal charges between 2022 and 2024, according to the U.S. Department of Justice.
An FBI agent involved in the investigation said in 2024 that the former executives' actions were an "unprecedented, relentless, and over-the-top harassment campaign".
eBay was also criminally charged and entered into a deferred prosecution agreement with the DOJ and agreed to pay a fine of $3m.
While eBay is paying the couple the bulk of the settlement, including $6m to "various non-profit organizations", Wenig is personally paying $1m toward the settlement.
Wenig left eBay in 2019. The same year, he had sent eBay's top communications executive a text message regarding Ina Steiner which said: "Take her down."
A representative of Wenig on Tuesday said earlier proceedings in the Steiners' lawsuit explained that his text was referring to a public relations strategy to combat purported errors in Ina Steiner's writing.
Wenig added: "No one should ever have been subjected to what the Steiners endured in 2019, and I'm saddened by it, especially because it occurred during my time as CEO of eBay. The harassment was deliberately done in secret."
His contribution is set to go to an unnamed charity that is "dedicated to protecting First Amendment rights" and will be gifted in the name of Ina Steiner, according to the couple's lawyers.
The First Amendment of the U.S. Constitution protects the right to freedom of speech.
Christopher Murphy of Scalli Murphy Law PC, which represented the Steiners in the case, said on Tuesday: "We believe this resolution sends a clear message that corporations and their executives cannot engage in this type of misconduct without facing significant consequences."
eBay said: "What the Steiners were subjected to by former eBay employees in 2019 was wrong, reprehensible and should never have happened."
The company condemned the former employees who ended up pleading guilty to criminal charges that led to the civil lawsuit, and admitted to an "unprofessional tone in internal communications" by Wenig and other former executives.
"This agreement is consistent with our commitment to fairly compensate the Steiners and fulfills our efforts to make things right," eBay said on Tuesday.`,
    bodyJa: `eBay、ハラスメント訴訟でブロガーと5,600万ドルの和解に合意
- 公開されました
eBayと一部の元幹部は、オンラインで同社を批判したことへの報復として嫌がらせキャンペーンを行ったことを受け、5,600万ドル（4,200万ポンド）を支払うことに同意した。
デビッド・シュタイナー氏とイナ・シュタイナー氏は火曜日の声明で、2019年に同社幹部数名から受けた嫌がらせと、当時のeBay最高経営責任者による内部通報を原因として、イーベイとの間で和解に達したと述べた。
シュタイナー夫妻はウェブサイトとニュースレター「EcommerceBytes」を運営しており、時には eBay を批判していました。
元会社幹部らのグループは最終的に、夫婦に豚の血がついた仮装マスクや配偶者の死を生き抜くための本などを送ったとして有罪を認めた。
シュタイナー氏に対して外部から行われたその他の行為には、eBay 幹部がシュタイナー氏に葬儀の花輪を送ったり、Twitter (現在は X として知られるソーシャル メディア プラットフォーム) で嫌がらせメッセージを送ったりする行為が含まれていました。車に追跡装置を取り付けようと、マサチューセッツ州にある夫妻の自宅を訪れる人もいた。
米国司法省によると、eBayの元幹部7人が2022年から2024年にかけて刑事告訴とは別に有罪を認めた。
捜査に携わったFBI捜査官は2024年、元幹部らの行為は「前例のない、執拗で行き過ぎた嫌がらせ行為」だったと述べた。
eBayも刑事告訴され、司法省と訴追延期協定を締結し、300万ドルの罰金を支払うことに同意した。
eBayは「さまざまな非営利団体」への600万ドルを含む和解金の大部分を夫妻に支払っているが、ウェニグさんは個人的に和解金として100万ドルを支払っている。
ウェニヒ氏は2019年にeBayを去った。同年、彼はeBayの広報担当責任者にイナ・シュタイナーに関するテキストメッセージを送っており、その内容は「彼女を失脚させろ」というものだった。
ウェニヒ氏の代理人は火曜日、シュタイナー氏の訴訟の初期の手続きで、彼の文章はイナ・シュタイナー氏の著作における誤りとされるものに対抗するための広報戦略に言及していると説明されたと述べた。
ヴェニヒ氏はさらに、「2019年にシュタイナー夫妻が受けたような目に遭うべき人は誰もいなかった。特に私がeBayのCEOを務めていた間に起きたことなので、とても残念に思う。嫌がらせは意図的に秘密裏に行われたものだ」と付け加えた。
夫妻の弁護士によると、彼の寄付金は「憲法修正第1条の権利を守ることに特化した」匿名の慈善団体に寄付される予定で、イナ・シュタイナーの名前で贈られる予定だという。
米国憲法修正第 1 条は、言論の自由の権利を保護しています。
この訴訟でシュタイナー夫妻の代理人を務めたスカリー・マーフィー法律事務所のクリストファー・マーフィー氏は火曜日、「この決議案は、企業とその幹部が重大な結果を招くことなくこの種の不正行為を行うことはできないという明確なメッセージを送っていると我々は信じている」と述べた。
eBayは「2019年にシュタイナー夫妻が元eBay従業員らから受けた行為は間違っており、非難すべきことであり、決してあってはならないことだった」と述べた。
同社は民事訴訟につながった刑事告発で有罪を認めた元従業員を非難し、ヴェニヒ氏と他の元幹部らによる「社内コミュニケーションにおける専門家に反する口調」を認めた。
eBayは火曜日、「この合意はシュタイナー夫妻に公正に補償するというわれわれの約束と一致しており、事態を正しくするためのわれわれの努力を果たすものである」と述べた。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cj039p238r5o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-28T21:49:16+00:00",
    category: "自動車",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/f9c0/live/dd3d7670-8ac1-11f1-9997-a1a12b7801e6.jpg",
    readTime: 4,
  },
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
