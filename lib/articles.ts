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
    id: "alibaba-and-baidu-shares-jump-in-hong-ko-9f094a4f",
    title: "Alibaba and Baidu shares jump in Hong Kong on Apple AI partnership",
    titleJa: "Apple AI提携でアリババと百度の株価が香港で急上昇",
    summaryJa: "中国のハイテク大手アリババと百度の株価は木曜日、AIツール導入におけるアップルとの提携により上昇した。アリババの香港上場株は、アリババが同社のQwen AIモデルが中国のアップルのサービスに統合されることを確認したことを受けて5％上昇した。",
    bodyOriginal: `Shares of Chinese tech giants Alibaba and Baidu rose Thursday on their partnership with Apple for deploying their AI tools.
Hong-Kong listed shares of Alibaba rose 5% after the company confirmed that its Qwen AI model would be integrated into Apple services in China.
U.S.-listed shares of Alibaba had closed slightly higher overnight after an Alibaba spokesperson told CNBC that "Qwen will be integrated into Apple Intelligence experiences within iOS, iPadOS, macOS, and vision OS for users in China."
Baidu's Hong Kong-listed shares gained 4% as the company confirmed that it was working with Apple on Apple Intelligence features for iPhones in China.
This comes amid reports in late June that its artificial intelligence chip unit Kunlunxin is targeting an initial public offering in the city, which could value its affiliate at $50 billion.
The Cyberspace Administration of China in a notice on Wednesday included Apple Intelligence, along with six other smartphone-based AI services including Huawei Technologies, in a list of approved service providers.
The Apple-Qwen combination will allow users to access the model's capabilities, "like text and image understanding and generation, without needing to jump between tools," the Alibaba spokesperson added.
Apple did not immediately respond to CNBC's request for comments.
The technological rivalry between China and the U.S. has intensified, as they race for AI dominance. The U.S. has sought to curb China's ability to access high-end chips, while Beijing has tried to wall off U.S. investments into Chinese tech companies.
"AI leadership is becoming central to economic competitiveness, global standard-setting, and the maintenance of democratic governance," according to a report by research organization RAND.
— CNBC's Evelyn Cheng, Joseph Wilkins and Kai Nicol-Schwarz contributed to this report.`,
    bodyJa: `中国のハイテク大手アリババと百度の株価は木曜日、AIツール導入におけるアップルとの提携により上昇した。
アリババの香港上場株は、アリババが同社のQwen AIモデルが中国のアップルのサービスに統合されることを確認したことを受けて5％上昇した。
アリババの広報担当者がCNBCに対し「Qwenは中国のユーザー向けにiOS、iPadOS、macOS、ビジョンOS内のApple Intelligenceエクスペリエンスに統合される」と語った後、アリババの米国上場株は昨夜若干値上がりして取引を終えた。
百度の香港上場株は、同社が中国でのｉＰｈｏｎｅ向けアップルインテリジェンス機能についてアップルと協力していることを認めたことから４％上昇した。
これは、同社の人工知能チップ部門の崑崙新が同市での新規株式公開を目指しており、その関連会社の評価額が500億ドルになる可能性があるとの6月下旬の報道の中で発表された。
中国サイバースペース局は水曜日の通知で、承認されたサービスプロバイダーのリストに、ファーウェイ・テクノロジーズを含む他の6つのスマートフォンベースのAIサービスとともに、アップル・インテリジェンスを含めた。
AppleとQwenの組み合わせにより、ユーザーは「ツール間を移動することなく、テキストや画像の理解と生成など」モデルの機能にアクセスできるようになるとアリババの広報担当者は付け加えた。
アップルはCNBCのコメント要請にすぐには応じなかった。
AIの優位性を争う中国と米国の技術競争は激化している。米国はハイエンドチップへの中国のアクセスを制限しようとしており、一方中国政府は中国ハイテク企業への米国の投資を阻止しようとしている。
調査機関ランドランドの報告書によると、「AIのリーダーシップは、経済競争力、世界標準の設定、民主的統治の維持の中核となりつつある」という。
— CNBC の Evelyn Cheng、Joseph Wilkins、Kai Nicol-Schwarz がこのレポートに貢献しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/16/alibaba-baidu-shares-jump-apple-ai-partnership-.html",
    publishedAt: "2026-07-16T03:17:20+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "bank-of-korea-raises-rates-to-2-75-in-fi-fb537d2a",
    title: "Bank of Korea raises rates to 2.75% in first hike in over three years",
    titleJa: "韓国銀行、3年ぶりの利上げで金利を2.75%に引き上げ",
    summaryJa: "韓国のインフレ率が徐々に上昇する中、韓国中央銀行は木曜日、基準政策金利を引き上げ、2023年1月以来初めて引き上げた。韓国銀行が金利を２．７５％に引き上げる２５ベーシスポイントの利上げは、ロイターがまとめたエコノミストの予想中央値と一致した。",
    bodyOriginal: `South Korea's central bank hiked benchmark policy rates on Thursday, raising them for the first time since January 2023 as inflation in the country creeps up.
The Bank of Korea's 25 basis point hike that increased rates to 2.75% was in line with median estimates from economists polled by Reuters.
The move comes as inflation is expected to remain above the BOK's target of 2% "for a considerable time," the central bank said in its statement. "Inflation is projected to remain elevated for some time as the impact of the rise in energy prices feeds through with a time lag."
Headline inflation in South Korea in June rose to its highest since 2023, coming in at 3.2%.
The central bank flagged uncertainty in exchange rate, pace of domestic demand recovery, and increase in wages, while projecting headline inflation for 2026 at 2.7% and core inflation to be "somewhat higher" than its previous forecast of 2.4%.
The BOK last month had said that the payment of large performance bonuses recently seen at some major companies in the IT sector could lead to broader wage increases, translating to upward pressure on inflation
South Korea has also been affected by the steady depreciation of the won, which had touched a 17 year low of 1,561.5 on June 5. Earlier this month, the currency neared that milestone again, hitting 1,559 against the U.S. dollar.
The won has strengthened this month and was last trading at 1,484.86 against the dollar. BOK Governor Shin Hyun Song reportedly told Seoul's parliament last week that there was "ample room for the won to strengthen going forward," adding "we are currently accumulating a very large current account surplus."
Higher rates support currencies by attracting foreign inflows.
Providing room for a tighter monetary policy, South Korea's economy expanded by 3.8% in the first quarter, its strongest growth since the fourth quarter of 2021.
The rate hike, however, comes amid a tumultuous time in South Korea's markets, as swings in semiconductor stocks Samsung Electronics and SK Hynix, have led to heightened volatility in the benchmark Kospi index.
The Kospi tumbled over 6%, as chipmakers Samsung and SK Hynix plunged, tracking losses in U.S. chip stocks overnight.
Further tightening by the BOK seems to be on the table, according to Gareth Leather, senior Asia economist, at Capital Economics.
In a note following the release, Leather said that as inflation is likely to remain above target for the rest of the year and growth is expected to remain strong, further tightening is likely.
"Recent data suggest the economy is well placed to cope with higher interest rates," he said, pointing that the South Korean exports rose 71% in June year on year in dollar terms, their fastest pace since 1978.
Although retail sales are falling in real terms and is a concern, he still expects growth to reach an "above-consensus" 4.0% this year.`,
    bodyJa: `韓国のインフレ率が徐々に上昇する中、韓国中央銀行は木曜日、基準政策金利を引き上げ、2023年1月以来初めて引き上げた。
韓国銀行が金利を２．７５％に引き上げる２５ベーシスポイントの利上げは、ロイターがまとめたエコノミストの予想中央値と一致した。
中銀は声明で、インフレ率が韓国銀行の目標である２％を「かなりの期間」上回る水準で推移すると予想される中で、この措置が行われたと述べた。 「エネルギー価格上昇の影響が時間差で現れるため、インフレはしばらく高止まりすると予想される。」
6月の韓国の総合インフレ率は3.2％となり、2023年以来の高水準となった。
中銀は為替レート、内需回復ペース、賃金上昇の不確実性を指摘する一方、2026年の総合インフレ率は2.7％、コアインフレ率は前回予想の2.4％より「若干高くなる」と予想した。
韓国銀行は先月、IT分野の一部の大手企業で最近見られた高額な業績賞与の支払いが、より広範な賃金上昇につながり、インフレ上昇圧力につながる可能性があると述べていた。
韓国も着実なウォン安の影響を受けており、6月5日には17年ぶり安値となる1,561.5ウォンを記録した。今月初め、ウォンは再びその節目に近づき、対米ドルで1,559ウォンを記録した。
ウォンは今月上昇し、前回の取引価格は対ドルで１４８４．８６ウォンだった。伝えられるところによると、韓国銀行のシン・ヒョンソン総裁は先週、ソウル議会で「今後ウォン高の余地は十分にある」とし、「現在、非常に大きな経常黒字を積み上げている」と付け加えた。
金利の上昇は海外からの流入を呼び込むことで通貨を支えます。
金融引き締め政策の余地を与え、韓国経済は第１・四半期に３．８％拡大し、２０２１年第４・四半期以来の高い成長を記録した。
しかし、今回の利上げは、サムスン電子やSKハイニックスの半導体株の乱高下がベンチマークのコスピ指数のボラティリティを高めるなど、韓国市場が混乱している最中に行われた。
半導体メーカーのサムスンとSKハイニックスが昨夜米国の半導体株の下落に追随し、コスピは6％以上下落した。
キャピタル・エコノミクスのシニア・アジア・エコノミスト、ギャレス・レザー氏によると、韓国銀行によるさらなる引き締めが検討されているようだ。
レザー総裁は発表後のメモで、インフレ率は年内は引き続き目標を上回り、成長も堅調に推移すると予想されるため、さらなる引き締めの可能性が高いと述べた。
同氏は「最近のデータは、経済が金利上昇にうまく対処できる状況にあることを示唆している」と述べ、６月の韓国の輸出がドルベースで前年比７１％増加し、１９７８年以来の最速ペースとなったことを指摘した。
小売売上高は実質ベースで減少しており懸念材料だが、同氏は依然として今年の成長率が「コンセンサスを上回る」4.0％に達すると予想している。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/16/bok-interest-rate-monetary-policy-markets-kospi-skhynix.html",
    publishedAt: "2026-07-16T02:12:44+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "sk-hynix-shares-plunge-11-as-asia-sees-t-34ccd963",
    title: "SK Hynix shares plunge 11% as Asia sees tech rout, tracking U.S. chip losses",
    titleJa: "米国のチップ損失に追随してアジアでハイテク株の敗退が見られ、SKハイニックスの株価は11%下落",
    summaryJa: "米国の半導体メーカーの売りがアジア地域に波及し、先週の米国上場以来、SKハイニックスが引き続き大幅な変動を見せたため、アジアの半導体株は木曜日に下落した。SKハイニックスの株価はソウル市場で11％以上下落し、前取引の8％上昇から反転した。 AI支出に対する懸念が高まる中、投資家が利益を確定させたため、株価は月曜日に1日として最大の下落率を記録した。",
    bodyOriginal: `Asian semiconductor stocks tumbled Thursday, as a sell-off in U.S. chipmakers spilled into the region, with SK Hynix continuing to see massive volatility since its U.S. listing last week.
Shares of SK Hynix tumbled over 11% in Seoul, reversing the previous session's 8% rally. The stock had logged its steepest one-day decline on Monday, as investors locked in profits amid growing worries over AI spending.
Domestic rival Samsung Electronics dropped more than 7%. Seoul Semiconductor fell more than 5%, LG Innotek lost about 1%, and Samsung SDI was down over 2%.
The weakness spread across the region. In Japan, AI-linked equipment makers Advantest fell more than 6%, SoftBank Group slid nearly 7%, Tokyo Electron lost over 5%, while Renesas Electronics declined 4%.
The losses track a sell-off in U.S. semiconductor shares overnight. Micron Technology sank 8%, Intel lost more than 4%, while Lam Research and Advanced Micro Devices each fell about 3%.
"Today's decline is largely a follow-on to the US session overnight," said Rolf Bulk, Head of Semiconductor & Infrastructure Equity Research at Futurum Group.
He pointed to a proposed moratorium on data-center construction in New York and reports that CoreWeave was exploring hedges against future declines in memory prices as marginally negative signals.
New York Governor Kathy Hochul on Tuesday ordered a temporary halt to new large-scale data center projects while the state develops stricter standards governing their energy, water and environmental impacts.
Bulk told CNBC the latest weakness reflected profit-taking after a sharp rally rather than a deterioration in the industry's fundamentals, adding that structural demand for AI infrastructure and memory chips remains intact.
Demand for high-bandwidth memory chips continues to outstrip supply as cloud providers race to build AI infrastructure, allowing leading memory makers such as SK Hynix and Micron to maintain strong pricing power.
The chip sell-off also come despite strong results from ASML. The Dutch chip-equipment maker raised its full-year sales guidance for a second time this year, forecasting revenue of 43 billion euros to 45 billion euros, above analysts' expectations, while outlining plans to further ramp production of its extreme ultraviolet lithography machines.
Louis Kondratev, trader at XFUNDs, noted the recent pullback reflects how crowded semiconductor trades have become after a prolonged AI-driven rally.
"Semiconductors alone now make up roughly 20% of the S&P 500, which is incredibly difficult to sustain," he said. He noted that during the dot-com bubble of 2000, semiconductors were just over 8% of the index, and they have historically averaged between 2% and 5%.
While earnings momentum has remained robust, he also warned the pace of gains may become harder to sustain as investors reassess lofty valuations.
"Earnings momentum has been very strong, but it's mostly concentrated in semiconductors, and that momentum may begin to slow as valuations find their place," he said.`,
    bodyJa: `米国の半導体メーカーの売りがアジア地域に波及し、先週の米国上場以来、SKハイニックスが引き続き大幅な変動を見せたため、アジアの半導体株は木曜日に下落した。
SKハイニックスの株価はソウル市場で11％以上下落し、前取引の8％上昇から反転した。 AI支出に対する懸念が高まる中、投資家が利益を確定させたため、株価は月曜日に1日として最大の下落率を記録した。
国内ライバルのサムスン電子は７％以上下落した。ソウル半導体は5％以上下落し、LGイノテックは約1％下落し、サムスンSDIは2％以上下落した。
弱みは地域全​​体に広がった。日本では、AI関連機器メーカーのアドバンテストが6％以上下落し、ソフトバンクグループは7％近く下落し、東京エレクトロンは5％以上下落し、ルネサスエレクトロニクスは4％下落した。
この損失は、一晩の米国半導体株の下落を反映したものとなった。マイクロン・テクノロジーは８％下落し、インテルは４％以上下落したほか、ラム・リサーチとアドバンスト・マイクロ・デバイセズはそれぞれ約３％下落した。
フューチュラム・グループの半導体・インフラ株式リサーチ責任者、ロルフ・バルク氏は「今日の下落は主に昨晩の米国取引の続きだ」と述べた。
同氏は、ニューヨークでのデータセンター建設の一時停止案を指摘し、CoreWeaveがわずかにマイナスのシグナルとして将来のメモリ価格の下落に対するヘッジを検討していると報告した。
ニューヨーク州のキャシー・ホチョル知事は火曜日、同州がエネルギー、水、環境への影響を管理するより厳格な基準を策定している間、新たな大規模データセンタープロジェクトの一時停止を命令した。
バルク氏はCNBCに対し、最近の低迷は業界のファンダメンタルズの悪化ではなく、急騰後の利食いを反映していると述べ、AIインフラやメモリーチップに対する構造的な需要は依然として残っていると付け加えた。
クラウドプロバイダーが AI インフラストラクチャの構築を競う中、高帯域幅メモリチップの需要は供給を上回り続けており、SK Hynix や Micron などの大手メモリメーカーは強力な価格決定力を維持することができています。
ASMLの好調な業績にもかかわらず、チップの下落も起きた。オランダのチップ機器メーカーである同社は、今年2度目となる通期売上高見通しを引き上げ、アナリストの予想を上回る430億ユーロから450億ユーロの収益を予測するとともに、極紫外線リソグラフィー装置の生産をさらに拡大する計画を概説した。
ＸＦＵＮＤｓのトレーダー、ルイス・コンドラテフ氏は、最近の下落は、長期にわたるＡＩ主導の上昇相場の後に半導体取引がいかに混雑したかを反映していると指摘した。
同氏は、「現在、半導体だけでS&P500指数の約20％を占めており、これを維持するのは信じられないほど困難だ」と述べた。同氏は、2000年のドットコムバブルの際、半導体は指数に占める割合が8％強だったが、これまでの平均は2％から5％の間だったと指摘した。
同氏は、収益の勢いは引き続き堅調だが、投資家が高いバリュエーションを再評価するにつれ、上昇ペースを維持するのが難しくなる可能性があるとも警告した。
同氏は「収益の勢いは非常に強いが、その大半は半導体に集中しており、バリュエーションが定位置を見つけるにつれ、その勢いは鈍化し始める可能性がある」と述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/16/sk-hynix-falls-amid-asia-tech-rout-tracking-us-semiconductor-losses.html",
    publishedAt: "2026-07-16T01:50:46+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "ex-fed-advisor-gets-over-three-years-in-a29a4ecc",
    title: "Ex-Fed advisor gets over three years in prison for lying about China ties",
    titleJa: "元FRB顧問、中国との関係に関する虚偽の罪で懲役3年以上",
    summaryJa: "この事件は、トランプ大統領が外国経済スパイの追及を強化する中、中国情報機関が米国機関を標的にしていると主張する米国の検察の中で最も著名なものの一つとなっている。",
    bodyOriginal: `A former senior advisor to the Federal Reserve Board of Governors was sentenced to over three years in prison for lying to federal investigators about sharing restricted central-bank information with Chinese intelligence operatives, according to the Justice Department.
John Harold Rogers, 64, was found guilty in February of making false statements to investigators when he denied sharing restricted information on monetary policy, U.S. Attorney Jeanine Pirro said in a statement Wednesday. The same jury acquitted him of the more serious charge of conspiracy to commit economic espionage.
"John Rogers spent years secretly funneling sensitive Federal Reserve information to Chinese spies, then looked investigators in the eye and lied about it. And when that wasn't enough, he lied again under oath at trial," Pirro said.
The sentencing comes at a time when the Trump administration has intensified its pursuit of alleged economic espionage by Beijing.
U.S. District Judge Dabney Friedrich also ordered Rogers to serve additional 12 months of supervised release. Defense lawyers had asked for no additional jail time beyond the roughly 18 months he had already spent in custody, which will be credited toward his sentence.
Rogers, a U.S. citizen who holds a Ph.D in economics, worked as a senior advisor for the Federal Reserve Board's division of international finance from 2010 to 2021, with access to nonpublic material on monetary policy and Federal Open Market Committee deliberations.
Prosecutors argued that sharing advance knowledge of Fed interest-rate decisions could have allowed Beijing to generate "enormous profits" from trading its roughly $1.5 trillion in U.S. Treasurys, according to the Justice Department.
Rogers had allegedly begun a clandestine relationship in 2017 with Hummin Lee, a Chinese intelligence operative he met at a conference in China, and conveyed Fed information during meetings in Chinese hotel rooms held under the guise of teaching academic classes.
He printed restricted documents before traveling to China, emailing materials to his personal account after stripping classification markings, and forwarded sensitive information to a professor at Fudan University, the Justice department release said. In exchange, he received university professorships and financial benefits, prosecutors said.
Asked directly in a February 2020 inspector general interview whether he had ever shared restricted Fed information outside the board, Rogers answered "never," according to the Justice Department.
Chinese ministry of foreign affairs did not respond to CNBC's request for comments.`,
    bodyJa: `司法省によると、連邦準備制度理事会の元上級顧問が、制限された中央銀行情報を中国の諜報員と共有したことについて連邦捜査官に虚偽の罪で3年以上の懲役刑を言い渡された。
ジョン・ハロルド・ロジャース被告（64歳）は、金融政策に関する制限された情報の共有を否定し、捜査当局に虚偽の供述をした罪で2月に有罪判決を受けたと、ジャニーン・ピロ連邦検事が水曜日の声明で述べた。同じ陪審は、経済スパイ行為の共謀というより重大な罪については無罪判決を下した。
「ジョン・ロジャースは何年もかけて秘密裏に連邦準備理事会の機密情報を中国のスパイに流し、その後捜査官の目を見て嘘をついた。そしてそれだけでは十分ではないと、裁判で宣誓で再び嘘をついた」とピロ氏は語った。
今回の判決は、トランプ政権が中国政府による経済スパイ疑惑の追及を強化している中で行われた。
米国地方判事のダブニー・フリードリッヒも、ロジャースに対し、さらに12か月の監視付き釈放を命じた。弁護側は、同氏が既に拘留されていた約18カ月を超えて懲役刑を追加しないよう求めており、この期間は刑期に算入される。
米国国籍で経済学の博士号を取得したロジャーズ氏は、2010年から2021年まで連邦準備理事会の国際金融部門の上級顧問として勤務し、金融政策や連邦公開市場委員会の審議に関する非公開資料にアクセスできた。
司法省によると、検察当局は、FRBの金利決定に関する事前情報の共有により、中国政府が約1兆5000億ドルの米国債の取引から「莫大な利益」を生み出すことができた可能性があると主張した。
ロジャーズ氏は2017年に中国での会議で知り合った中国諜報員フミン・リー氏と秘密の関係を始め、学術授業を教えるという名目で中国のホテルの部屋で開かれた会議中にFRBに情報を伝えたとされる。
法務省のリリースによると、同氏は中国への渡航前に制限付き文書を印刷し、機密マークを剥がした後に個人アカウントに電子メールで送信し、機密情報を復丹大学の教授に転送したという。その見返りとして、彼は大学教授の職と経済的利益を受け取ったと検察官は述べた。
司法省によると、ロジャース氏は2020年2月の監察長官インタビューで、FRBの制限情報を理事会外に共有したことがあるかと直接尋ねられ、「一度もなかった」と答えた。
中国外務省はCNBCのコメント要請に応じなかった。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/16/ex-fed-adviser-gets-jailtime-lying-about-china-ties-economic-espionage-.html",
    publishedAt: "2026-07-16T01:47:30+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 2,
  },
  {
    id: "celebrity-influencers-paid-up-to-1m-to-a-15a5a623",
    title: "Celebrity influencers paid up to £1m to advertise deodorant on Instagram",
    titleJa: "有名人のインフルエンサーがInstagramで消臭剤を宣伝するために最大100万ポンドを支払った",
    summaryJa: "有名人のインフルエンサーがInstagramで消臭剤を宣伝するために最大100万ポンドを支払った- 公開されました",
    bodyOriginal: `Celebrity influencers paid up to £1m to advertise deodorant on Instagram
- Published
The #ad posts on your feed may look relaxed, personal and spontaneous but behind many of them is a carefully planned campaign, a detailed contract and, in some cases, a seven-figure fee.
For Charlie Bowes-Lyon, the co-founder of Wild, a refillable natural deodorant, influencer marketing has been a huge part of the company's success and he calls it his "secret sauce".
Wild, which was bought by Unilever last year, uses high-profile names including Stacey Solomon, Emma Raducanu and Molly-Mae Hague to promote its products on Instagram.
Bowes-Lyon says the brand has spent millions on its partnership with Raducanu and hundreds of thousands on campaigns with Solomon and Hague.
People buy from people
Hannah Campbell, founder of influencer marketing agency One Twelve Agency, says brands are using influencers over traditional adverts because "they do actually influence".
"They have built audiences and communities that trust them, and the old adage 'people buy from people' is true.
"Consumers, especially younger audiences, aren't engaging with traditional media but they do follow and engage with their favourite influencers daily."
Influencer marketing is now such a big part of Wild's business that it employs a team of more than 20 solely dedicated to working on this.
The company's yearly influencer marketing budget is just under £10m, "but next year that may double as we look for larger brand ambassadors", says Bowes-Lyon.
How much the company spends on influencer marketing "can vary from £100,000 through to millions if you want a top-tier celebrity", says Bowes-Lyon.
He says a lot of it also depends on the depth of the campaign as "if you want them to do a one-off post you wouldn't pay too much but typically what they and you want is to develop is a bit more of a relationship".
British tennis player Emma Raducanu is Wild's current brand ambassador and has been working with the brand for the past year.
"We've done tons with her like full day shoots in New York, lots of posts and stories on Instagram and she even came in to create her own deodorant scent," says Bowes-Lyon.
"These celebrities aren't strapped for cash so it's not really about the money for them, it's more about whether the brand is a right fit," he says.
"When I tell people influencers make £2,000 for a single post, they are shocked, never mind the fact some are making £50,000 for one post."
Can an advert ever feel genuine?
Katy Howell, director at marketing agency Rethink Social, says paid ads "don't necessarily corrupt a recommendation but it changes the context in which that recommendation should be understood, and audiences have a right to know that".
"The real test is whether the creator would plausibly use the product, whether they retain enough editorial freedom to express reservations, and whether the partnership fits the relationship they have built with their audience," she adds.
Bowes-Lyon accepts audiences have become more aware that influencer ads are paid for which makes authenticity even more important.
"People are getting a little bit more savvy and if for example a gaming influencer starts talking about a flower shop or something that is not linked to anything they do, people will see through that," he says.
He adds that someone like TV personality Stacey Solomon has built her influence by being selective about what she promotes.
"I would imagine Stacey probably rejects 98% of the pitches that come her way."
Wild's campaign with Solomon created more than 100 paid ad iterations for social media each with unique selling positionings to appeal to different audiences.
Recent ASA research, external found that influencer advertising remained considerably harder to identify than conventional brand advertising.
In its testing, 74% of participants were certain that a conventional brand post was an advert, compared with only 54% for influencer advertising.
Bowes-Lyon says the influencers they work with need to "believe in what they're saying, not just saying it because they're getting a cheque".
He points to a partnership with Molly-Mae Hague, who had used Wild's body wash in a video before the brand approached her.
"We'd never even spoken to her and she was using our body wash in it, so we then reached out."
Howell suspects that "many people understand that influencers are paid, but underestimate both the scale and complexity of the economics".
"The most prominent creators are no longer simply individuals posting from their bedrooms. Many operate as sophisticated media businesses, with managers, agents, production teams, legal advice, licensing arrangements and several income streams."
While adverts on social media must be clearly labelled, Howell says that #ad is "legally functional but informationally thin" so more needs to be done to make paid marketing clearer.
Do influencer ads actually sell products?
Bowes-Lyon says some celebrity partnerships are designed mainly to build awareness, meaning the impact may show up gradually through stronger retail sales or wider recognition.
In Molly-Mae's case, Wild created a "targeted campaign" where they gave her a discount code to share with her followers.
"In that case you see a big spike in sales which disappears after a few days when the Instagram story is no longer visible."
Wild also tries to run several campaigns over a longer period so the partnership feels less rushed.
That means the celebrity can explain why they like the product, rather than trying to sell everything in one short post.
"They can more authentically tell the story of why they like the brand," Bowes-Lyon says.
Related topics
- Published7 days ago
- Published25 June`,
    bodyJa: `有名人のインフルエンサーがInstagramで消臭剤を宣伝するために最大100万ポンドを支払った
- 公開されました
フィード上の #ad 投稿は、リラックスしていて、個人的で自発的に見えるかもしれませんが、その多くの背後には、慎重に計画されたキャンペーン、詳細な契約、そして場合によっては 7 桁の料金が存在します。
詰め替え可能な天然消臭剤であるワイルド社の共同創設者であるチャーリー・ボウズ・ライアン氏にとって、インフルエンサー マーケティングは会社の成功の大きな部分を占めており、彼はそれを「秘伝のソース」と呼んでいます。
昨年ユニリーバに買収されたワイルドは、ステイシー・ソロモン、エマ・ラドゥカヌ、モリー・メイ・ハーグなどの著名人を起用してインスタグラムで製品を宣伝している。
ボウズ・ライアンによると、同ブランドはラドゥカヌとのパートナーシップに数百万ドル、ソロモンやハーグとのキャンペーンに数十万ドルを費やしたという。
人は人から買う
インフルエンサーマーケティング代理店ワン・トゥエルブ・エージェンシーの創設者ハンナ・キャンベル氏は、ブランドが従来の広告ではなくインフルエンサーを起用しているのは、「インフルエンサーが実際に影響を与えているから」だと語る。
「彼らは彼らを信頼する視聴者とコミュニティを構築しており、『人は人から買う』という古い格言は真実です。
「消費者、特に若い視聴者は従来のメディアに関与していませんが、お気に入りのインフルエンサーを毎日フォローし、関与しています。」
インフルエンサー マーケティングは現在、Wild のビジネスの大きな部分を占めており、これに専念する 20 人以上のチームを雇用しています。
同社のインフルエンサーマーケティング予算は年間1000万ポンド弱だが、「より大きなブランドアンバサダーを探すため、来年は2倍になるかもしれない」とボウズ・ライアン氏は言う。
同社がインフルエンサーマーケティングに費やす金額は、「一流の有名人が欲しい場合は、10万ポンドから数百万ポンドまでさまざまだ」とボウズ・ライアン氏は言う。
同氏は、その多くはキャンペーンの深さにも左右されると述べ、「もし彼らに一回限りの投稿をしてもらいたいなら、あまり高い金額は払わないだろうが、通常、彼らとあなたが望んでいることは、もう少し深い関係を築くことだ」と述べた。
英国のテニス選手エマ・ラドゥカヌはワイルドの現在のブランドアンバサダーであり、過去1年間このブランドと協力してきました。
「ニューヨークで丸一日撮影をしたり、インスタグラムにたくさんの投稿やストーリーを投稿したり、彼女と一緒にたくさんのことをしました。そして彼女は自分の消臭剤の香りを作るために来てくれたこともありました」とボウズ＝ライオンは言う。
「これらの有名人はお金に困っていないので、実際には彼らにとってお金の問題ではなく、ブランドが適切であるかどうかが重要です」と彼は言います。
「インフルエンサーは1つの投稿で2,000ポンド稼いでいると人々に話すと、彼らはショックを受けますが、1つの投稿で5万ポンドを稼ぐ人もいるという事実は気にしません。」
広告が本物だと感じられるでしょうか?
マーケティング会社リシンク・ソーシャルのディレクター、ケイティ・ハウエル氏は、有料広告は「必ずしも推奨を損なうわけではないが、その推奨が理解されるべき文脈を変えるものであり、視聴者にはそれを知る権利がある」と述べた。
「本当のテストは、クリエイターがその製品をもっともらしく使用するかどうか、留保を表明するのに十分な編集の自由を保持しているかどうか、そしてそのパートナーシップが視聴者と築いてきた関係に適合するかどうかです」と彼女は付け加えた。
ボウズ・ライアン氏は、視聴者がインフルエンサー広告には報酬が支払われており、信頼性がさらに重要になっているという認識を強めていることを認めている。
「人々は少しずつ知識を深めてきており、たとえばゲームのインフルエンサーが自分の活動とは関係のない花屋や何かについて話し始めたら、人々はそれを見破るでしょう」と彼は言う。
テレビパーソナリティのステイシー・ソロモンのような人は、自分が宣伝するものを厳選することで影響力を築いてきたと彼は付け加えた。
「ステイシーはおそらく、送られてくる提案の 98% を拒否すると思います。」
ソロモンとのワイルドのキャンペーンでは、ソーシャル メディア向けに 100 を超える有料広告が作成され、それぞれがさまざまな視聴者にアピールする独自の販売ポジショニングを備えていました。
ASA の最近の調査では、インフルエンサー広告は依然として従来のブランド広告よりも識別がかなり難しいことが外部から判明しました。
テストでは、参加者の 74% が従来のブランド投稿が広告であると確信していたのに対し、インフルエンサー広告の場合はわずか 54% でした。
ボウズ・ライアン氏は、協力しているインフルエンサーは「小切手をもらったからといってただ言うのではなく、彼らの言っていることを信じる」必要があると語る。
彼は、ブランドが彼女にアプローチする前に、ビデオでワイルドのボディウォッシュを使用していたモリー・メイ・ヘイグとのパートナーシップを指摘した。
「私たちは彼女と話したこともなかったのに、彼女は私たちのボディウォッシュを使っていたので、私たちは連絡を取りました。」
ハウエル氏は、「多くの人がインフルエンサーに報酬が支払われていることは理解しているが、経済の規模と複雑さの両方を過小評価している」のではないかと疑っている。
「最も著名なクリエイターは、もはや寝室から投稿する単なる個人ではありません。多くは、マネージャー、エージェント、制作チーム、法的アドバイス、ライセンス契約、およびいくつかの収入源を擁し、洗練されたメディアビジネスとして運営されています。」
ソーシャルメディア上の広告には明確なラベルを付ける必要があるが、ハウエル氏は、#adは「法的には機能するが、情報的には薄い」ため、有料マーケティングをより明確にするためにさらなる取り組みが必要だと述べた。
インフルエンサー広告は実際に商品を販売しますか?
ボウズ・ライアン氏は、一部の有名人のパートナーシップは主に認知度を高めることを目的としており、小売売上高の増加やより広い認知度を通じて効果が徐々に現れる可能性があると述べている。
モリー・メイの場合、ワイルドは「ターゲットを絞ったキャンペーン」を作成し、フォロワーと共有する割引コードを彼女に提供した。
「その場合、売上が大幅に急増しますが、数日後にインスタグラムのストーリーが表示されなくなると、売上は消えてしまいます。」
ワイルドはまた、パートナーシップをそれほど急ぐ必要がないように、長期間にわたっていくつかのキャンペーンを実施しようとしています。
つまり、有名人は、1 回の短い投稿ですべてを売り込もうとするのではなく、その製品が好きな理由を説明できるということです。
「ブランドが好きな理由をより忠実に伝えることができるのです」とボウズ・ライアン氏は言う。
関連トピック
- 7 日前に公開
- 6 月 25 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cvgegqrp656o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-15T23:00:42+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/aa6c/live/202769c0-8057-11f1-a10f-077d9cf2208e.jpg",
    readTime: 8,
  },
  {
    id: "buffett-calls-bill-gates-relationship-wi-2daec778",
    title: "Buffett calls Bill Gates relationship with Epstein 'distasteful'",
    titleJa: "バフェット氏、ビル・ゲイツとエプスタインの関係を「不快」と発言",
    summaryJa: "バフェット氏、ビル・ゲイツとエプスタインの関係を「不快」と発言- 公開されました",
    bodyOriginal: `Buffett calls Bill Gates relationship with Epstein 'distasteful'
- Published
Billionaire investor Warren Buffett has described Bill Gates' relationship with late sex offender Jeffery Epstein as "distasteful", but said he himself had made mistakes in life by being friends with people "who weren't great".
On Tuesday, Buffett's firm Berkshire Hathaway stopped giving donations to the Microsoft co-founder's charity for the first time in 20 years and instead handed his remaining stock to foundations linked to his family.
Buffett told CNBC he and Gates have had a "wonderful friendship" but confirmed his pivot over donations followed Gates' testimony to US Congress about Epstein.
Gates called Buffett "a dear friend", adding: "My gratitude to Warren is immeasurable."
Gates appeared before the US House Oversight Committee in June to answer questions about his relationship with Epstein, who died in a New York prison in 2019 while awaiting trial on sex trafficking charges.
In a transcript of his testimony, Gates said that he had been introduced to Epstein in 2011 as someone who could help raise billions of dollars for global health, which is a key focus of the Gates Foundation.
He said: "I recall being aware that Epstein had faced prior legal issues, but I did not fully understand the extent of the crimes he committed."
In 2008, Epstein had pleaded guilty to soliciting a minor for prostitution and procuring a person under age 18 for prostitution.
Gates told the committee: "I should never have met with Epstein in the first place. Based on what I know now, I understand that even if he had delivered the donors he promised, it would not have justified associating with him."
Buffett said on Wednesday he had read Gates' testimony.
He said: "While it's distasteful, while he made mistakes, I've made mistakes in hiring all kinds of people, choosing friends and finding out later that one way or another they weren't what I thought they were.
"So, I found nothing in there that was beyond what I could picture myself doing."
Buffett said the decision to stop donations to the foundation did not come as a surprise to Gates. The two met around three weeks ago for three hours.
The 95-year-old said: "At some point I had read what Congress had come up with, I'd read everything and all I can say is I don't know whether I've done dumber things but I've done many dumb things in life."
Buffett added that he and Gates have had an "enormous number of good times together" since they met in 1991. "It has been a wonderful friendship," he said.
Gates said: "I cherish the time we spend together. I hope we have much more of it ahead."
SInce 2006, when Buffett pledged to make annual donations to the Bill and Melinda Gates Foundation, as it was then known, "throughout my lifetime", he has given $47bn (£34.7bn) to the charity.
But even without his backing, the foundation still holds "very substantial resources", said Buffett.
In 2025 alone, the Gates Foundation gave away $8.5bn in charitable support.
While Buffett originally pledged a lifetime commitment two decades ago, he explained that his thinking has evolved over time.
When he first made the pledge, Buffett noted that he did not feel his three children were ready to manage such vast sums, but he now believes they are fully capable and deeply aligned with his goals.`,
    bodyJa: `バフェット氏、ビル・ゲイツとエプスタインの関係を「不快」と発言
- 公開されました
億万長者の投資家ウォーレン・バフェット氏は、ビル・ゲイツ氏と性犯罪者の故ジェフリー・エプスタイン氏との関係を「不快だった」と述べたが、自身も「良くない」人々と友達になったことで人生の間違いを犯したと語った。
火曜日、バフェット氏の会社バークシャー・ハサウェイは、マイクロソフト共同創設者の慈善団体への寄付を20年ぶりに中止し、代わりにバフェット氏の残りの株式を彼の家族に関連する財団に譲渡した。
バフェット氏はCNBCに対し、ゲイツ氏とは「素晴らしい友情」を築いてきたと語ったが、エプスタイン氏に関するゲイツ氏の米議会証言を受けて、寄付を重視する姿勢をとったことを認めた。
ゲイツ氏はバフェット氏を「親愛なる友人」と呼び、「ウォーレン氏への感謝の気持ちは計り知れない」と付け加えた。
ゲイツ氏は6月に米下院監視委員会に出廷し、2019年に性的人身売買容疑で裁判を待つ間にニューヨークの刑務所で死亡したエプスタイン氏との関係に関する質問に答えた。
ゲイツ氏は証言記録の中で、ゲイツ財団の重点である世界保健のため数十億ドルの資金調達に協力できる人物として2011年にエプスタイン氏に紹介されたと述べた。
同氏は「エプスタイン被告が過去に法的問題に直面していたことは覚えていたが、彼が犯した犯罪の程度は完全には理解していなかった」と述べた。
2008年、エプスタイン被告は未成年者を売春に勧誘し、18歳未満の者を売春に斡旋したとして有罪を認めた。
ゲイツ氏は委員会に対し、「そもそも私はエプスタイン氏と会うべきではなかった。今私が知っていることに基づくと、たとえ彼が約束した寄付金を提供していたとしても、彼と関わることは正当化されなかったであろうことを理解している」と語った。
バフェット氏は水曜日、ゲイツ氏の証言を読んだと述べた。
彼は、「不愉快なことではあるが、彼が間違いを犯した一方で、私もあらゆる種類の人を雇い、友人を選び、後で彼らが何らかの形で私が思っていたのと違っていたことに気づくという間違いを犯してきた。
「だから、そこには、自分がやっているイメージを超えたものは何も見つかりませんでした。」
バフェット氏は、ゲイツ氏にとって財団への寄付停止の決定は驚くべきことではなかったと述べた。 2人は約3週間前に3時間ほど会った。
95歳の彼は、「ある時点で議会の発表を読んでいたし、すべて読んでいたが、言えることは、自分がもっと愚かなことをしたかどうかは分からないが、人生で多くの愚かなことをしてきたということだけだ」と語った。
バフェット氏は、1991年にゲイツ氏と出会って以来、「非常に多くの楽しい時間を一緒に過ごしてきた」と付け加え、「素晴らしい友情だった」と述べた。
ゲイツ氏は「私は一緒に過ごす時間を大切にしている。今後さらに多くのことが起こることを願っています。」
バフェット氏は2006年にビル・アンド・メリンダ・ゲイツ財団（当時知られていた）に「生涯を通じて」毎年寄付することを約束して以来、同慈善団体に470億ドル（347億ポンド）を寄付してきた。
しかし、バフェット氏の支援がなくても、財団は依然として「非常に充実した資金」を保有していると述べた。
2025 年だけで、ゲイツ財団は慈善支援として 85 億ドルを寄付しました。
バフェット氏はもともと20年前に生涯のコミットメントを誓っていたが、時間の経過とともに自分の考えは進化したと説明した。
最初にこの誓約をしたとき、バフェット氏は、3人の子供たちにそのような巨額の資金を管理する準備ができているとは感じていないと述べたが、今では彼らには十分な能力があり、彼の目標と深く一致していると信じていると述べた。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cz97wx2zj78o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-15T22:25:35+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/40d0/live/4b8920c0-8090-11f1-bee8-53ce494e1abc.jpg",
    readTime: 4,
  },
  {
    id: "united-earnings-top-estimates-but-airlin-12cc0f22",
    title: "United earnings top estimates but airline expects $6 billion in added fuel costs",
    titleJa: "ユナイテッドの収益は予想最高だが、航空会社は追加の燃料費が60億ドルになると予想",
    summaryJa: "ユナイテッド航空は、プレミアム航空券、法人航空券、飾り気のないベーシックエコノミー航空券の売上高が増加し、国内旅行と海外旅行の両方で売上高が増加したと報告しました。",
    bodyOriginal: `United Airlines' second-quarter results came in ahead of Wall Street estimates, but billions of dollars in added fuel costs continue to weigh on earnings, the carrier said Wednesday.
Here is what United Airlines reported for the quarter that ended June 30 compared with what Wall Street was expecting, based on estimates compiled by LSEG:
- Earnings per share: $1.99 adjusted vs. $1.88 expected
- Revenue: $17.67 billion vs. $17.61 billion expected
United forecast third-quarter adjusted earnings per share of between $2.50 and $3.50, compared with analysts' estimates for $3.60 a share. It estimated full-year adjusted earnings per share of between $9 and $11, the higher end of the range of the adjusted $7 to $11 a share it forecast in April, when it cut its January forecast after the U.S. and Israel attacked Iran in late February.
According to Argus data published by industry group Airlines for America, jet fuel prices at major U.S. airports are up 34% in July alone through Tuesday amid a roller coaster of escalating and deescalating conflict between the U.S. and Iran. Jet fuel is the largest cost for airlines after labor.
United said the higher fuel prices could add nearly $6 billion to its expenses this year compared with what it expected at the start of 2026, and that its second-quarter fuel costs rose 84% from last year to $2.3 billion. Those estimates were made based on Tuesday's fuel prices. It said it would cover up to as much as 90% of its higher costs this quarter and all of it in the fourth quarter.
Rival Delta Air Lines also said it is passing on more of those higher costs to flyers. The airlines said demand has remained strong despite higher fares.
United said it is updating its forecast to include the most recent fuel prices because costs have been so volatile. Since the beginning of July, fuel prices have hit adjusted earnings for the third quarter by $1.12 per share, it said.
The carrier could further cut its capacity plans because of higher fuel costs this year, it said in a filing.
United expanded flying 3.5% second quarter. Its revenue rose 16% from a year earlier to $17.67 billion, with total unit revenue up 12.1% in the second quarter from last year. That was the highest unit revenue growth since early 2023, according to FactSet.
The airline reported higher revenue for premium, corporate and no-frills basic economy tickets, as well as rising unit revenue for both domestic and international trips.
Net income fell more than 17% to $805 million, or $2.46 a share. Adjusting for one-time items United reported $649 million, or $1.99 a share on an adjusted basis.
United executives will hold an earnings call Thursday at 10:30 a.m. ET.`,
    bodyJa: `ユナイテッド航空の第2四半期決算はウォール街の予想を上回ったが、数十億ドルの追加燃料費が引き続き収益を圧迫していると同社は水曜日に発表した。
以下は、LSEGがまとめた推計に基づいて、ユナイテッド航空が6月30日に終了した四半期に報告した内容とウォール街の予想を比較したものである。
- 1 株当たり利益: 調整後 1.99 ドル、予想 1.88 ドル
- 収益: 176 億 7000 万ドル対予想 176 億 1000 万ドル
ユナイテッド航空は第3四半期の調整後1株当たり利益を2.50ドルから3.50ドルと予想しているが、アナリスト予想は1株当たり3.60ドルとなっている。同社は通期の調整後1株当たり利益を9ドルから11ドルと見積もっており、米国とイスラエルによる2月下旬のイラン攻撃を受けて1月の予想を下方修正した4月時点の調整後1株当たり7ドルから11ドルの範囲の上限である。
業界団体エアラインズ・フォー・アメリカが発表したアーガスのデータによると、米国とイラン間の紛争が激化したり縮小したりするジェットコースターのさなか、米国の主要空港のジェット燃料価格は7月だけで火曜日までに34％上昇した。航空会社にとって、人件費に次ぐ最大のコストはジェット燃料です。
ユナイテッド航空は、燃料価格の高騰により、2026年初めの予想に比べて今年の出費が60億ドル近く増加する可能性があり、第2四半期の燃料費は前年比84％増の23億ドルになったと述べた。これらの推定は火曜日の燃料価格に基づいて行われた。今期はコスト高の最大９０％をカバーし、第４・四半期には全額をカバーすると述べた。
ライバルのデルタ航空も、その高額なコストの多くを旅行者に転嫁していると述べた。航空会社は、運賃の値上げにも関わらず需要は依然として堅調であると述べた。
ユナイテッド航空は、コストが非常に変動しているため、最新の燃料価格を含めて予測を更新すると述べた。 ７月初め以来、燃料価格が第３・四半期の調整後利益に１株当たり１．１２ドルの影響を与えているという。
同社は提出書類の中で、今年の燃料費高騰を理由に輸送能力計画をさらに削減する可能性があると述べた。
ユナイテッド航空は第 2 四半期に 3.5% 飛行を拡大しました。売上高は前年同期比 16% 増の 176 億 7000 万ドルとなり、第 2 四半期の総ユニット収益は前年比 12.1% 増加しました。ファクトセットによると、これは2023年初め以来最高の単位収益の伸びとなった。
同社は、プレミアム航空券、法人航空券、飾り気のないベーシックエコノミー航空券の収益が増加し、国内旅行と海外旅行の両方で単価が上昇したと報告しました。
純利益は17％以上減少し、8億500万ドル（1株あたり2.46ドル）となった。一時項目を調整すると、ユナイテッド航空は 6 億 4,900 万ドル、つまり調整後ベースで 1 株あたり 1.99 ドルを報告しました。
ユナイテッドの幹部らは木曜東部時間午前10時30分に決算会見を開催する。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/15/united-airlines-ual-2q-2026-earnings.html",
    publishedAt: "2026-07-15T21:00:11+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    readTime: 3,
  },
  {
    id: "trump-s-dni-pick-jay-clayton-won-t-tell-8ab8887a",
    title: "Trump's DNI pick Jay Clayton won't tell senators Biden won the 2020 election",
    titleJa: "トランプ大統領のDNI選出ジェイ・クレイトン氏は上院議員にバイデンが2020年選挙で勝ったことを伝えないと",
    summaryJa: "ドナルド・トランプ大統領が国家情報長官に指名したジェイ・クレイトン氏は、2020年の選挙でジョー・バイデン氏が勝利したとの発言を拒否し、前任者のトゥルシー・ギャバード氏が今年初めのジョージア州選挙事務所襲撃に参加していたことは知らなかったと主張し、水曜日の物議を醸した上院承認公聴会でニューヨーク・タイムズ紙の記者らを召喚したことを擁護した。元証券取引委員会委員長で現在ニューヨーク南部地区検事のクレイトン氏は、トランプ大統領の指名発表から1か月以上、そして6月に予定されていた承認公聴会を大統領が突然妨害してから数週間後に上院情報特別委員会に出廷した。",
    bodyOriginal: `Jay Clayton, President Donald Trump's pick for director of national intelligence, refused to say Joe Biden won the 2020 election, claimed not to know his predecessor Tulsi Gabbard took part in a raid of a Georgia election office earlier this year and defended subpoenaing New York Times journalists in a contentious Senate confirmation hearing Wednesday.
Clayton, the former Securities and Exchange Commission chair and current U.S. attorney for the Southern District of New York, appeared before the Senate Select Committee on Intelligence more than a month after Trump announced his nomination and weeks after the president then abruptly sabotaged a planned confirmation hearing in June.
While it appeared a month ago that Clayton would have a relatively smooth path to confirmation, Democrats challenged Clayton's election comments and time as U.S. attorney. He is still likely to be confirmed in the Republican-controlled Senate.
Sen. Jon Ossoff, D-Ga., who spoke with MS NOW on Tuesday ahead of a Thursday night speech Trump is scheduled to deliver on foreign attempts to subvert the 2020 election, grilled Clayton on whether he was aware of Gabbard's presence earlier this year at a raid of a Fulton County, Georgia, election office.
Clayton said he only learned of Gabbard's involvement, which was widely reported, from Ossoff during a private meeting earlier this week.
"Is it appropriate for the director of national intelligence to oversee the execution of domestic search warrants at sensitive election facilities? Yes or no?" Ossoff asked. Clayton did not answer.
"Your answers lack credibility. Your testimony lacks credibility," Ossoff said.
On multiple occasions during the roughly two-hour hearing, Clayton declined to answer who won the 2020 election, instead saying: "I am not an election denier. Joe Biden was certified."
Ossoff, at one point, called Clayton's responses "disqualifying."
The committee is expected to vote on Clayton's nomination next week. If advanced by the committee, the full Senate will weigh in.
The process of Clayton's nomination as DNI, a role that would grant him access to the country's most sensitive secrets and authority over 18 intelligence agencies, has been marred by controversy, thanks to Trump's actions and the interim appointment of Bill Pulte, a close Trump ally and director of the Federal Housing Finance Agency. Bipartisan lawmakers have questioned whether Pulte — who from his perch atop the FHFA launched mortgage-related inquiries into Trump opponents — was fit for the job.
"I can't think of any other instance in history of this committee where a president sends a nominee up, and then in a bipartisan way, we say we really want to move heaven and earth to get this nominee moving quickly because of the importance of the position, and then the president decided that the Senate was moving too fast on his own nominee, and holds that nominee," Senate Intelligence Committee Vice Chair Mark Warner, D-Va., said Wednesday at Clayton's hearing.
The DNI job opened up in May when then-Director Gabbard announced plans to step away. Pulte took the helm later that month and has carried out Trump's orders to fire dozens of high-ranking intelligence officials.
The morning of Clayton's original hearing, Trump took to TruthSocial and directed him not to appear, saying he was pausing the nomination. Trump said he balked in part because he wanted Congress to attach a controversial election bill — that would impose photo identification rules and proof of citizenship to register — to the renewal of an unrelated foreign surveillance law.
Subsequent to Trump's appointment of Pulte, negotiations over that foreign surveillance law, known as Section 702 of the Foreign Intelligence Surveillance Act, fell apart. The program lapsed in June, as Democrats protested Pulte's appointment to the position.
In the wake of Pulte's interim appointment, support for Clayton seemed widespread. But he was grilled on Wednesday by Democrats on the Senate panel.
Sen. Angus King, I-Maine, questioned Clayton about a statement he made on CNBC about California elections, in which he seemed to entertain the possibility of voter fraud.
"We had a problem, a deep problem with voting in America," Clayton said during a June appearance on "Squawk Box." "On the integrity side, we're doing an absolutely terrible job, and the American people are right to question it."
King requested clarification.
"That meant that the audit trail we have available for our elections in a number of places is not the kind of audit trail that you would expect in something that is this important," Clayton said.
Asked by King whether voter fraud was a problem in American elections, Clayton said, "I don't think we can say definitively whether there is, or is not, until we have better processes."
Sens. Michael Bennet, D-Colo., and Kirsten Gillibrand, D-N.Y., both pressed Clayton on subpoenas served to New York Times reporters last week on the heels of reporting on security concerns related to a new Air Force One that was gifted to Trump by Qatar.
Clayton issued the subpoenas, which The New York Times said were delivered Friday, in some cases to the homes of the reporters in question. Those reporters were ordered to appear before a grand jury on Wednesday to testify "in regard to an alleged violation of federal criminal law."
Clayton said he was not able to get into the specifics of the investigation.
"Let me say that I am confident that the procedures that we have in place to protect the First Amendment and protect the freedom of the press, and not result in intimidation of journalists," Clayton said.`,
    bodyJa: `ドナルド・トランプ大統領が国家情報長官に指名したジェイ・クレイトン氏は、2020年の選挙でジョー・バイデン氏が勝利したとの発言を拒否し、前任者のトゥルシー・ギャバード氏が今年初めのジョージア州選挙事務所襲撃に参加していたことは知らなかったと主張し、水曜日の物議を醸した上院承認公聴会でニューヨーク・タイムズ紙の記者らを召喚したことを擁護した。
元証券取引委員会委員長で現在ニューヨーク南部地区検事のクレイトン氏は、トランプ大統領の指名発表から1か月以上、そして6月に予定されていた承認公聴会を大統領が突然妨害してから数週間後に上院情報特別委員会に出廷した。
1か月前にはクレイトン氏の承認までは比較的スムーズに進むと思われていたが、民主党はクレイトン氏の選挙に関するコメントと米国弁護士としての期間に異議を唱えた。同氏は共和党が多数を占める上院で承認される可能性が依然として高い。
2020年選挙を転覆しようとする外国の試みについてトランプ大統領が予定している木曜夜の演説に先立って火曜MS NOWと対談した民主党ジョージア州のジョン・オソフ上院議員は、今年初めにジョージア州フルトン郡の選挙事務所を襲撃した際にガバード氏の存在を知っていたかどうかについてクレイトン氏を激しく非難した。
クレイトン氏は、広く報道されているガバード氏の関与について、今週初めの個人的な会合でオソフ氏から初めて知ったと述べた。
「国家情報長官が、機密性の高い選挙施設における国内捜索令状の執行を監督するのは適切か? はい、いいえ?」オソフは尋ねた。クレイトンは答えなかった。
オソフ氏は「あなたの答えは信頼性に欠ける。あなたの証言も信頼性に欠ける」と述べた。
約2時間の公聴会中、クレイトン氏は何度も2020年の選挙で誰が勝ったかについて答えることを避け、代わりに「私は選挙否定者ではない。ジョー・バイデンは認定された」と述べた。
オソフ氏はある時点で、クレイトン氏の対応を「失格」と呼んだ。
委員会は来週クレイトン氏の指名について投票を行う予定だ。委員会が提案した場合、上院全員が参加することになる。
クレイトン氏をDNIに指名するプロセスは、同氏に国の最も機密な秘密と18の諜報機関に対する権限へのアクセスを与える役割を与えるものだが、トランプ氏の行動と、トランプ氏の盟友で連邦住宅金融庁長官のビル・プルト氏の暫定任命のおかげで論争によって損なわれている。超党派の議員らは、FHFAのトップとしてトランプ大統領反対派に対する住宅ローン関連の調査を開始したプルテ氏がその職に適任なのかどうか疑問を呈している。
上院情報委員会のマーク・ワーナー副委員長（民主党、バージニア州）は水曜日、「この委員会の歴史の中で、大統領が候補者を送り出し、超党派でこの役職の重要性からこの候補者を迅速に動かすために天地を動かしたいと主張した例は他に思いつかない。その後、大統領は上院が自分の候補者に関してあまりにも急ぎすぎると判断し、その候補者を保留する」とクレイトンズで述べた。聴覚。
DNIの仕事は5月に当時のギャバード長官が辞任する計画を発表したときに開始された。プルト氏は同月下旬に指揮を執り、数十人の情報機関高官を解雇するというトランプ大統領の命令を実行した。
クレイトン氏の最初の公聴会の朝、トランプ氏はトゥルースソーシャルに対し、指名を一時停止していると述べ、出廷しないよう指示した。トランプ大統領が躊躇したのは、写真付き身分証明書の規定や登録時の市民権証明を義務付ける物議を醸す選挙法案を、無関係な外国監視法の更新に議会が添付することを望んでいたことが一因だと述べた。
トランプによるプルテ氏の任命後、外国情報監視法第702条として知られる外国監視法をめぐる交渉は決裂した。このプログラムは、民主党がプルト氏のポストへの任命に抗議したため、6月に失効した。
プルト氏の暫定任命を受けて、クレイトン氏への支持は広範囲に広がっているように見えた。しかし、彼は水曜日、上院委員会の民主党員によって非難された。
アンガス・キング上院議員、アイメイン氏は、カリフォルニア州選挙についてCNBCでクレイトン氏が行った発言についてクレイトン氏に質問したが、その中でクレイトン氏は不正投票の可能性を示唆しているようだった。
クレイトン氏は6月に「スコーク・ボックス」に出演し、「私たちは問題を抱えていた。アメリカでの投票には深刻な問題があった」と語った。 「誠実さの面では、我々はまったくひどい仕事をしているし、アメリカ国民が疑問を抱くのは当然だ。」
キング氏は説明を求めた。
「つまり、私たちが選挙のためにさまざまな場所で利用できる監査証跡は、これほど重要なものに期待される種類の監査証跡ではないということだ」とクレイトン氏は述べた。
キング牧師から米国の選挙で不正投票が問題になっているかとの質問に対し、クレイトン氏は「より良いプロセスが確立されるまで、不正投票が問題になっているかどうかを明確に言うことはできないと思う」と述べた。
マイケル・ベネット上院議員（コロラド州）とカーステン・ギリブランド下院議員（民主党、ニューヨーク州）は先週、カタールからトランプ大統領に贈られた新型エアフォース・ワンに関連した安全保障上の懸念を報じた直後、ニューヨーク・タイムズの記者らに召喚状を提出するようクレイトン氏に迫った。
クレイトン氏は召喚状を発行したが、ニューヨーク・タイムズ紙によれば、召喚状は金曜日に届けられ、場合によっては問題の記者の自宅に届けられたという。これらの記者らは水曜日、「連邦刑法違反の疑いに関して」証言するために大陪審に出廷するよう命じられた。
クレイトン氏は、捜査の詳細には踏み込めなかったと述べた。
「言っておきますが、合衆国憲法修正第1条を守り報道の自由を守るために私たちが定めた手続きがジャーナリストの脅迫につながるものではないと確信しています」とクレイトン氏は語った。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/15/trump-dni-jay-clayton-senate-2020-election.html",
    publishedAt: "2026-07-15T19:02:13+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 6,
  },
  {
    id: "salary-information-to-be-shown-on-job-ad-9ec2a8b9",
    title: "Salary information to be shown on job ads under new laws",
    titleJa: "新しい法律の下で求人広告に表示される給与情報",
    summaryJa: "新しい法律の下で求人広告に表示される給与情報- 公開されました",
    bodyOriginal: `Salary information to be shown on job ads under new laws
- Published
Employers will have to publish salary information in job adverts under government plans to rewrite anti-discrimination laws.
Details of other job conditions could also have to be disclosed to candidates, under the draft proposals.
Ministers argue greater transparency will help people navigate the jobs market and could prevent future pay discrimination claims.
However, details of exactly what salary information will have to be shared are yet to be hammered out.
Officials plan to consult on whether exact salaries will have to be displayed, or potentially a pay range or "benchmark rate" for open roles.
They also plan to ask industry groups whether information beyond basic salary, such as bonuses, should be made available.
Employers that do not publish a job advert for a role would have to give candidates the information in writing prior to a job interview.
In a policy document, the Cabinet Office said salary information would help jobseekers make informed application decisions, and improve the hiring process for companies by weeding out candidates with "misaligned pay expectations".
Citing various academic studies, it also said transparency would help prevent "unequal outcomes" when salaries are offered to successful applicants.
"When pay is opaque, salary decisions can be influenced by stereotypes – such as stereotypes of women, ethnic minorities, or disabled people," it added.
Salary ranges
Although pay transparency is not currently mandatory in the UK, there has been an increasing trend in recent years for employers to disclose information voluntarily.
Previous research by the CIPD, an industry body for human resources managers, has found the practice is much more widespread in public bodies and charities than the private sector, while pay ranges were more common than specific salaries.
But it has cautioned that employers disclosing information are not always "fully transparent", with ranges sometimes wider than £10,000.
The proposals echo pay transparency proposals being rolled out across the European Union.
Large employers in Europe of more than 100 workers will have to disclose the initial pay or range for new roles, which must either included in a published job advert or shared before an interview.
They will also be banned from asking candidates about their salary history - something that does not feature in the Cabinet Office consultation.
The Cabinet Office says it intends for its proposals to apply in England, Wales and Scotland, with the exact terms set out in legislation following a consultation with industry ending in October.
The rights watchdog for Northern Ireland has previously argued that the new EU pay transparency rules should apply in the province under the terms of the Windsor Framework deal signed under prime minister Rishi Sunak.
The Northern Ireland Executive has previously declined to say whether it planned to follow the EU rules. The BBC has asked whether it is planning new rules in Northern Ireland in light of the new proposals for Great Britain.
Related topics
- Published28 April 2022
- Published5 February 2024`,
    bodyJa: `新しい法律の下で求人広告に表示される給与情報
- 公開されました
政府の差別禁止法改正計画に基づき、雇用主は求人広告に給与情報を掲載することが義務付けられる。
提案草案では、他の職務条件の詳細も候補者に開示する必要がある可能性がある。
閣僚らは、透明性の向上は人々が雇用市場を乗り切るのに役立ち、将来の賃金差別の申し立てを防ぐことができると主張する。
ただし、正確にどのような給与情報を共有する必要があるかについては、まだ詳細が詰められていません。
当局者らは、正確な給与を表示する必要があるかどうか、あるいは潜在的に募集中の役職の給与範囲や「ベンチマークレート」を表示する必要があるかどうかについて協議する予定だ。
ボーナスなど基本給以外の情報も公開すべきかどうか業界団体に問い合わせる予定だ。
ある職種の求人広告を出さない雇用主は、面接前に候補者に書面で情報を提供する必要があります。
内閣府は政策文書の中で、給与情報は求職者が十分な情報に基づいて応募を決定するのに役立ち、「給与の期待にずれがある」候補者を排除することで企業の採用プロセスを改善すると述べた。
また、さまざまな学術研究を引用し、透明性が合格者に給与を提供する際の「不平等な結果」を防ぐのに役立つとも述べた。
「給与が不透明な場合、給与決定は女性、少数民族、障害者に対する固定観念などの固定観念に影響される可能性がある」と同紙は付け加えた。
給与範囲
英国では現在、給与の透明性は義務ではありませんが、近年、雇用主が自発的に情報を開示する傾向が高まっています。
人事管理者のための業界団体であるCIPDによるこれまでの調査では、この慣行は民間部門よりも公共団体や慈善団体ではるかに広く普及しており、給与範囲は特定の給与よりも一般的であることが判明した。
しかし、雇用主が情報を開示することは常に「完全に透明」であるわけではなく、その範囲は場合によっては1万ポンドを超える場合があると警告している。
この提案は、欧州連合全体で展開されている給与の透明性に関する提案を反映しています。
労働者100人以上を抱える欧州の大規模雇用主は、初任給や新たな役割の範囲を開示する必要があり、公表される求人広告に掲載するか、面接前に共有する必要がある。
また、候補者に給与履歴について質問することも禁止されるが、これは内閣府の協議では取り上げられていない。
内閣府は、業界との協議が10月に終了した後、正確な条件を法律で定め、提案をイングランド、ウェールズ、スコットランドに適用するつもりだと述べた。
北アイルランドの権利監視団体は以前、リシ・スナック首相の下で署名されたウィンザー枠組協定の条件に基づき、EUの新たな給与透明性規則が同州に適用されるべきだと主張していた。
北アイルランド行政府はこれまで、EUの規則に従うつもりかどうかについては明言を避けてきた。 BBCは、英国に対する新たな提案を踏まえて、北アイルランドでの新たな規則を計画しているかどうかを尋ねた。
関連トピック
- 2022 年 4 月 28 日公開
- 2024 年 2 月 5 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/ckg7gg2zdexo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-15T18:46:26+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/a965/live/a2688400-807a-11f1-b339-39b3d6faedee.jpg",
    readTime: 3,
  },
  {
    id: "spacex-share-price-drops-below-stock-mar-5e1aa1e5",
    title: "SpaceX share price drops below stock market debut",
    titleJa: "スペースXの株価が株式市場デビューを下回る",
    summaryJa: "スペースXの株価が株式市場デビューを下回る- 公開されました",
    bodyOriginal: `SpaceX share price drops below stock market debut
- Published
SpaceX's share price has dropped below its stock market debut just over a month ago, falling sharply from a post-float peak.
The price for a single share in Elon Musk's rocket, satellite and artificial intelligence (AI) company fell to $132.62 (£98.24) on Wednesday, below its initial listing of $135 in June.
SpaceX's initial public offering (IPO) made Musk the world's first trillionaire. Compared to its on-the-day high so far, the stock price is now down 41%.
If the price holds, or falls further, it will mean that those who purchased stock around the time of its flotation will stand to lose money on their investment.
Even amid a tumultuous few weeks for tech stocks, SpaceX has taken a particular hit.
Compared to a 0.2% fall on the wider Nasdaq index, where SpaceX's shares are listed, the company's stock price fell more than 2% on Wednesday.
SpaceX stock has been volatile since it began trading on the public stock market a little over one month ago.
After an initial investor frenzy that saw the company valued at more than Amazon and Microsoft, the price of its shares has drifted downward.
Initially, SpaceX was treated by investors as the first chance they had to invest in an AI company, according to what financial market analysts and experts recently told the BBC,
Earlier this year, SpaceX acquired Musk's AI start-up xAI, recently renamed SpaceXAI, marking it's first foray into an AI-focused business.
XAI is best known for the controversial chatbot Grok, but through that acquisition, SpaceX now leases data centre capacity to other tech companies.
The company's main business is the manufacture and launch of rockets and telecommunications satellites called Starlink.
When Starlink said it was cutting prices in the Memphis, Tennessee area amid local concerns over a massive data centre project, SpaceX shares fell by 8%.
Steve Sosnick, chief market analyst at Interactive Brokers, told Reuters: "There hasn't been anything that lately to remind people of some of the catalysts for why they bought SpaceX."
SpaceX is expected to release in August its first public earnings report.
Sosnick added: "The fact that a stock has fallen a couple of dollars below its IPO price in itself is not a tragedy, but SpaceX is heavily watched and has an important role in investor psyche."
SpaceX did not immediately respond to a request for comment.`,
    bodyJa: `スペースXの株価が株式市場デビューを下回る
- 公開されました
スペースXの株価はわずか1カ月前の株式市場デビューを下回り、浮上後の最高値から急落した。
イーロン・マスク氏のロケット・衛星・人工知能（AI）企業の1株価格は水曜日、132.62ドル（98.24ポンド）に下落し、6月の新規上場時の135ドルを下回った。
スペースXの新規株式公開（IPO）により、マスク氏は世界初の大富豪となった。これまでの当日の高値と比較すると、株価は現在41％下落している。
価格が維持されるか、さらに下落する場合、株式の浮上時に購入した人は投資で損失を被る可能性があることを意味します。
ハイテク株にとって激動の数週間が続いている中でも、スペースXは特に打撃を受けている。
スペースX株が上場されているナスダック指数の0.2％下落と比較すると、水曜日の同社株価は2％以上下落した。
スペースX株は1カ月余り前に公開株式市場で取引を開始して以来、不安定な状況が続いている。
同社の価値がアマゾンやマイクロソフトを上回ると投資家が当初熱狂した後、株価は下落した。
金融市場アナリストや専門家が最近BBCに語ったところによると、当初、スペースXは投資家たちからAI企業に投資する最初のチャンスとして扱われていたという。
今年初め、スペースXはマスク氏のAI新興企業xAI（最近スペースXAIに改名）を買収し、AI中心のビジネスへの初進出となった。
XAIは物議を醸したチャットボット「Grok」で最もよく知られているが、その買収によりSpaceXは現在、データセンターの容量を他のハイテク企業にリースしている。
同社の主な事業は、スターリンクと呼ばれるロケットや通信衛星の製造・打ち上げである。
大規模なデータセンタープロジェクトに対する地元の懸念を受けて、スターリンクがテネシー州メンフィス地域で価格を引き下げると発表したとき、スペースX株は8％下落した。
インタラクティブ・ブローカーズの首席市場アナリスト、スティーブ・ソスニック氏はロイターに対し、「最近、スペースＸ社を買収したきっかけの一部を人々に思い出させるような出来事は何もない」と語った。
スペースXは8月に初の公開収益報告書を発表する予定だ。
ソスニック氏はさらに、「株価が公開価格を数ドル下回ったという事実自体は悲劇ではないが、スペースXは非常に注目されており、投資家の心理に重要な役割を果たしている」と付け加えた。
スペースXはコメントの要請にすぐには応じなかった。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/clyl33q0yl0o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-15T18:11:57+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/18a1/live/2b8ede90-806d-11f1-bf5f-a7a6eeea7412.jpg",
    readTime: 3,
  },
  {
    id: "public-service-loan-forgiveness-has-new-f2c804d8",
    title: "Public Service Loan Forgiveness has new rules — 3 changes borrowers should know about",
    titleJa: "公共サービスローンの免除に新しい規則が追加されました — 借り手が知っておくべき 3 つの変更点",
    summaryJa: "連邦裁判所は公共サービスローン免除の資格を抑制しようとするトランプ政権の取り組みを阻止したが、その他の最近の変更は依然として借り手がプログラムの恩恵を受ける能力に影響を与えている。たとえば、新しい返済計画は PSLF の対象外となり、多くの親借り手がプログラムから完全に締め出される可能性があります。これらの変更は、国の連邦学生ローン制度を全面的に見直したドナルド・トランプ大統領の「One Big Beautiful Bill Act」によるもので、7月1日から施行される。",
    bodyOriginal: `While federal courts have blocked the Trump administration's efforts to curb eligibility for Public Service Loan Forgiveness, other recent changes still impact borrowers' ability to benefit from the program.
For example, a new repayment plan doesn't qualify for PSLF, and many parent borrowers may now be locked out of the program entirely. These shifts are due to President Donald Trump's One Big Beautiful Bill Act, which overhauled the country's federal student loan system, and are effective as of July 1.
PSLF, which President George W. Bush signed into law in 2007, allows certain not-for-profit and government employees to have their federal student loans canceled after 120 payments, or 10 years. More than 9 million borrowers may be eligible, according to a 2022 estimate from Protect Borrowers, a nonprofit.
Here are three recent updates to PSLF.
1. New repayment plan won't qualify
To qualify for PSLF, student loan borrowers need to be enrolled in certain repayment plans.
Any time spent in one of the new plans established by the OBBBA — the Tiered Standard Plan— will not count toward your 120 required PSLF payments, said Scott Buchanan, executive director of the Student Loan Servicing Alliance, a trade group for federal student loan servicers. The Tiered Standard Plan comes with fixed payments, spread over different timelines based on your total debt amount.
For new borrowers, or those who took out loans after July 1, your only repayment option to qualify for PSLF is the new Repayment Assistance Plan. RAP is the U.S. Department of Education's latest income-driven repayment plan, or IDR, meaning it sets borrowers' monthly bills at a share of their income. Under RAP, monthly payments typically range from 1% to 10% of your earnings; the more you make, the bigger your required payment.
"For anyone borrowing a new loan on or after July 1, 2026, this is especially important, because the Tiered Standard Plan is the default," said Rich Williams, a former deputy assistant secretary at the Education Department. "New borrowers who don't actively pick a plan get placed there automatically, quietly earning zero PSLF credit."
It's a 10-year path to forgiveness regardless of which plan you are enrolled in.Nancy Niermanassistant director at EDCAP
Existing student loan holders pursuing PSLF will have more repayment plans to choose from, including the Income-Based Repayment plan, or IBR, said Nancy Nierman, assistant director of the Education Debt Consumer Assistance Program in New York, a nonprofit that helps borrowers navigate repayment. As a result, they should compare their monthly bills under the available IDR plans and pick the cheapest option, she said.
If you hope to get your debt scrubbed from PSLF, you should generally ignore the forgiveness term on the IDR plan, Nierman added. For example, RAP concludes in debt cancellation only after 30 years.
But for PSLF borrowers, she said, "it's a 10-year path to forgiveness regardless of which plan you are enrolled in."
2. Parent PLUS borrowers may be locked out
Many parents who borrow student loans for their children's higher education no longer qualify for PSLF, due to the OBBBA's changes. That's because the law shut out Parent PLUS borrowers from IDR access.
"Parent PLUS loans no longer have a path into income-driven repayment or PSLF," said Williams.
Parent borrowers who took out loans after July 1 now qualify only for the Tiered Standard Repayment Plan, which doesn't count toward PSLF.
Meanwhile, existing Parent PLUS loan holders recently had a short window to consolidate their debt and potentially maintain a way to enroll in an IDR plan. Consolidating Parent PLUS loans leaves borrowers with a Direct federal loan — the kind most students carry.
But if you did not do so, you have lost access to IDR plans and therefore the benefit of PSLF, experts say.
3. Your employer shouldn't disqualify you
Student loan borrowers may no longer need to fret over whether their employer will remain eligible for PSLF. That's because two federal judges in June struck down the Trump administration's rule that would have changed the definition of a "qualifying employer" under PSLF to exclude organizations that "engage in unlawful activities."
Opponents of the policy said the vague language would have allowed the Trump administration to shut out nonprofits that it didn't like.
"The administration could appeal the decision, but they have not said anything since the rule was struck down," Nierman said. "And if they did appeal, there's no guarantee they would win."
The Education Department recently wrote on its website that it was working to update the PSLF form to comply with the court order, but that "language regarding an employer's certification that it has not engaged in illegal activities will have no effect."
The best way to find out if your job qualifies for PSLF is to fill out the so-called employer certification form. It's best to fill out this form at least once a year and keep records of your confirmed qualifying payments, experts say.`,
    bodyJa: `連邦裁判所は公共サービスローン免除の資格を抑制しようとするトランプ政権の取り組みを阻止したが、その他の最近の変更は依然として借り手がプログラムの恩恵を受ける能力に影響を与えている。
たとえば、新しい返済計画は PSLF の対象外となり、多くの親借り手がプログラムから完全に締め出される可能性があります。これらの変更は、国の連邦学生ローン制度を全面的に見直したドナルド・トランプ大統領の「One Big Beautiful Bill Act」によるもので、7月1日から施行される。
ジョージ・W・ブッシュ大統領が2007年に署名したPSLFは、特定の非営利団体および政府職員に対し、連邦学生ローンを120回または10年間の支払い後に取り消すことを認めている。非営利団体プロテクト・ボローワーズの2022年の推計によると、900万人以上の借り手が対象となる可能性がある。
PSLF に対する最近の 3 つのアップデートを以下に示します。
1. 新しい返済計画は対象外となります
PSLF の資格を得るには、学生ローンの借り手は特定の返済計画に登録する必要があります。
連邦学生ローンサービサーの業界団体である学生ローンサービシングアライアンスのエグゼクティブディレクター、スコット・ブキャナン氏は、OBBBAが確立した新しいプランの1つである段階的スタンダードプランに費やした時間は、必要な120回のPSLF支払いにはカウントされないと述べた。段階的スタンダード プランには固定支払いが含まれており、負債総額に基づいてさまざまなスケジュールに分割されます。
新規の借り手、または 7 月 1 日以降にローンを組んだ人の場合、PSLF の資格を得る唯一の返済オプションは、新しい返済支援プランです。 RAP は米国教育省の最新の収入主導型返済計画 (IDR) であり、借り手の毎月の請求額を収入の割合で設定することを意味します。 RAP では、月々の支払いは通常、収益の 1% から 10% の範囲です。稼げば稼ぐほど、必要な支払い額も大きくなります。
「2026年7月1日以降に新規ローンを借りる人にとって、これは特に重要です。段階的スタンダードプランがデフォルトだからです」と教育省の元次官補リッチ・ウィリアムズ氏は述べた。 「積極的にプランを選択しない新規借り手は自動的にそこに配置され、静かに PSLF クレジットを獲得することはありません。」
どのプランに登録しているかに関係なく、赦しまでは 10 年かかります。ナンシー ニアマン EDCAP アシスタント ディレクター
借り手の返済を支援する非営利団体、ニューヨークの教育債務消費者支援プログラムのアシスタントディレクター、ナンシー・ニアマン氏は、PSLFを利用する既存の学生ローン保有者は、所得に基づく返済計画（IBR）を含む、より多くの返済計画から選択できるようになるだろうと述べた。そのため、利用可能なIDRプランで月々の請求額を比較し、最も安いオプションを選択する必要があると彼女は述べた。
PSLFから債務を免除してもらいたいのであれば、通常はIDR計画の免除条項を無視すべきだとニアマン氏は付け加えた。たとえば、RAP は 30 年後にのみ債務免除を完了します。
しかし、PSLFの借り手にとっては、「どのプランに加入していても、免除までには10年かかる」と彼女は言う。
2.親PLUSの借り手はロックアウトされる可能性があります
OBBBA の変更により、子供の高等教育のために学生ローンを借りている多くの親は PSLF の資格を失いました。これは、法律により、Parent PLUS の借り手が IDR アクセスから締め出されたためです。
「親のPLUSローンには、収入に応じた返済やPSLFへの道はもうありません」とウィリアムズ氏は述べた。
7 月 1 日以降にローンを組んだ親の借り手は現在、段階的標準返済プランのみの資格があり、PSLF にはカウントされません。
一方、既存のParent PLUSローン保有者は最近、債務を整理してIDRプランに登録する方法を維持する可能性を維持するための短い期間を抱えていました。 Parent PLUS ローンを統合すると、借り手にはほとんどの学生が抱えているような直接連邦ローンが残されます。
しかし、そうしなかった場合、IDR プランへのアクセスが失われ、したがって PSLF の恩恵を受けることができなくなる、と専門家は言います。
3. 雇用主はあなたの資格を剥奪すべきではありません
学生ローンの借り手は、雇用主が PSLF の資格を維持できるかどうかを心配する必要がなくなりました。というのは、2人の連邦判事が6月、PSLFに基づく「適格雇用主」の定義を変更して「違法な活動に従事する」組織を排除するというトランプ政権の規則を無効にしたからだ。
この政策の反対派は、この曖昧な文言によりトランプ政権が気に入らない非営利団体を締め出すことを可能にしてしまうと述べた。
「政権はこの決定に対して控訴する可能性があるが、この規則が廃止されて以来何も言っていない」とニアマン氏は語った。 「もし彼らが控訴したとしても、勝てる保証はない。」
教育省は最近ウェブサイトで、裁判所命令に準拠するためにPSLFフォームの更新に取り組んでいるが、「違法行為に関与していないという雇用主の証明に関する文言は効果がない」と書いた。
あなたの仕事が PSLF の対象となるかどうかを確認する最良の方法は、いわゆる雇用主証明書フォームに記入することです。専門家によると、少なくとも年に一度はこのフォームに記入し、確認された対象となる支払いの記録を保管することが最善です。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/15/public-service-loan-forgiveness-pslf-changes.html",
    publishedAt: "2026-07-15T17:58:41+00:00",
    category: "貿易",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
    readTime: 6,
  },
  {
    id: "anthropic-moves-closer-to-mega-ipo-as-ba-2c86fedc",
    title: "Anthropic moves closer to mega-IPO as bankers line up investor meetings",
    titleJa: "銀行家が投資家との会合を準備する中、アンスロピックはメガIPOに近づく",
    summaryJa: "Anthropic は、ライバルの OpenAI を公開市場で打ち負かそうとしている AI スタートアップ企業として、早ければ 10 月にも IPO を行う可能性に先立ち、投資家との会合を準備している。",
    bodyOriginal: `Anthropic is lining up meetings with investors ahead of a potential initial public offering later this year, a person with knowledge of the plans told CNBC.
Bankers leading the offering are scheduling meetings between prospective investors and executives of the artificial intelligence firm behind the popular Claude models, said the person, who declined to be identified speaking about the process.
The meetings suggest Anthropic's IPO preparations are advancing, as bankers begin sounding out investor demand before a formal roadshow and eventual share sale. Anthropic confidentially filed its IPO prospectus with the Securities and Exchange Commission last month, but hasn't disclosed when it plans to debut.
The giant AI startup could hit the public markets as soon as October, though the timing could change, according to Bloomberg, which first reported the investor meetings. An Anthropic spokesperson declined to comment.
An Anthropic listing would build on momentum from June's massive SpaceX IPO and further open the public markets to companies at the center of the AI boom. It follows years in which the industry's biggest names remained private while raising hundreds of billions of dollars from investors.
Anthropic appears poised to beat rival OpenAI to the public markets, which could be an advantage for the startup if AI enthusiasm later wanes. OpenAI also confidentially filed for an IPO with the SEC in June, but it has not disclosed any additional details.
Anthropic was founded in 2021 by a group of executives and researchers who defected from OpenAI over concerns about the company's direction. Anthropic has found early success selling to enterprises, in large part due to its popular coding assistant, Claude Code.
The company closed a $65 billion funding round at a $965 billion valuation in May, pushing it above OpenAI's $852 billion valuation for the first time.
Goldman Sachs, Morgan Stanley and JPMorgan Chase, the three biggest Wall Street banks by revenue, are involved in the IPO planning.
The AI spending boom has fueled a resurgence in profit for Wall Street firms as they seek to satisfy investors clamoring for ways to fund the buildout and invest in or hedge aspects of the theme.
— CNBC's Kate Rooney contributed to this report.
WATCH: Anthropic says Trump administration has lifted export controls on Claude Fable 5 and Mythos 5`,
    bodyJa: `計画に詳しい関係者がCNBCに語ったところによると、アンスロピックは今年後半の新規株式公開に先立ち、投資家との会合を準備しているという。
プロセスについて匿名を条件に語ったこの関係者によると、この提案を主導する銀行家らは、将来の投資家と人気のクロードモデルの背後にある人工知能企業幹部との会合をスケジュールしているという。
会合は、アンスロピックのＩＰＯ準備が進んでいることを示唆しており、銀行家らは正式なロードショーと最終的な株式売却に先立って投資家の需要を聞き出し始めている。アンスロピックは先月、証券取引委員会にIPO目論見書を極秘に提出したが、いつデビューする予定なのかは明らかにしていない。
投資家会合の内容を最初に報じたブルームバーグによると、この巨大AI新興企業は早ければ10月にも公開市場に投入される可能性があるが、タイミングは変更される可能性があるという。 Anthropicの広報担当者はコメントを控えた。
Anthropicの上場は、6月のSpaceXの大規模なIPOの勢いをさらに強化し、AIブームの中心にいる企業に公開市場をさらに開放することになる。これは、業界最大手の企業が投資家から数千億ドルを調達しながら非公開のままだった数年間に続くものである。
Anthropic は公開市場でライバルの OpenAI に勝つ準備ができているようで、AI への熱意が後に衰えた場合、それはスタートアップにとって有利になる可能性がある。 OpenAIも6月に秘密裏にSECにIPOを申請したが、それ以上の詳細は明らかにしていない。
Anthropic は、会社の方向性への懸念を理由に OpenAI から離反した幹部や研究者のグループによって 2021 年に設立されました。 Anthropic は、主に人気のあるコーディング アシスタントである Claude Code のおかげで、企業向けの販売で初期の成功を収めました。
同社は5月に9,650億ドルの評価額で650億ドルの資金調達ラウンドを完了し、OpenAIの評価額8,520億ドルを初めて上回った。
売上高でウォール街の3大銀行であるゴールドマン・サックス、モルガン・スタンレー、JPモルガン・チェースがIPO計画に関与している。
AI支出ブームはウォール街企業の利益回復を加速させており、増強資金を調達し、テーマの側面に投資またはヘッジする方法を求めている投資家を満足させようとしている。
— CNBC の Kate Rooney がこのレポートに寄稿しました。
動画: Anthropic は、トランプ政権がクロード・ファブル 5 とミトス 5 の輸出規制を解除したと発表`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/15/anthropic-ipo-banks-investor-meetings.html",
    publishedAt: "2026-07-15T17:22:51+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "historic-ibm-stock-crash-sets-up-unique-76f6e12c",
    title: "Historic IBM stock crash sets up unique options strategy",
    titleJa: "歴史的なIBM株暴落で独自のオプション戦略が確立",
    summaryJa: "1789 年 7 月 14 日、パリの民衆はバスティーユを襲撃し、アンシャン レジームの絶対的権威の暴力的な終焉を告げました。今日、まさに同じ日に（237 年後ではありますが）株式市場は、テクノロジーのアンシャンレジーム、つまりインターナショナル・ビジネス・マシーンに対抗する独自の金融革命を起こしました。IBMの株価は73ドル強下落し、約217ドルとなった。これは、1日で25％という驚くべき下落額だ。これは私の生涯の中で最も急激な単一セッションの下落であり、私が生まれる前の1968年1月3日以来見られなかった破壊の規模に匹敵します。",
    bodyOriginal: `On July 14, 1789, the people of Paris stormed the Bastille, signaling a violent end to the absolute authority of the ancien régime. Today, on that very same date, (albeit 237 years later) the stock market staged its own financial revolution against the ancien régime of technology: International Business Machines.
IBM shares fell just over $73 to ~$217 — a jaw-dropping 25% single-day decapitation. It is the steepest single-session drop in my lifetime, matching a scale of destruction not seen since January 3, 1968, before I was born.
The catalyst for this sudden coup was a preliminary Q2 sales miss. IBM reported revenue of $17.2 billion, falling short of Wall Street's $17.9 billion expectations, driven by a 7% slide in its infrastructure division. According to CEO Arvind Krishna, enterprise customers shifted their spending away from IBM's traditional products, hoarding cash to buy hardware, servers, and storage to hedge against AI-fueled supply shortages and impending price hikes. While this may be Krishna's own convenient narrative rather than an independently verified trend, the market didn't wait for a trial. The verdict was absolute, and the execution was swift.
But where there is panic, there is premium. In the option pits, the crowd has gathered but hasn't dispersed. Typically, when bad news drops, implied volatility undergoes a rapid "vol crush." Instead, IBM's one-month implied volatility is trading at its 99.6%ile — dwarfing the premium expansion seen during the 2019 Taper Tantrum, the 2022 rate-hike bear market and the various tariff tantrums, exceeded only by the "Pandemic Plunge" in 2020.
With the market pricing in absolute chaos, it is time to adopt an "off with their heads" stance on high premiums. Since the stock has already endured a massive 25% structural re-rating, the majority of the downward momentum is likely exhausted. By selling the monthly August 21, 2026, 190/245 short strangle, we can collect a massive premium from terrified buyers, betting that the stock will quietly consolidate within its new post-revolutionary boundaries.
Premium Captured: ~$11.25 per strangle (as of the July 14, 2026, close). This represents a 5.18% standstill yield relative to the underlying stock price in just 38 days.
- Downside Breakeven: $178.75 (approx. 17.6% below current price)
- Upside Breakeven: $256.25 (approx. 18.1% above current price)
This trade relies on a wide, symmetrical margin of safety. To breach the lower barrier of $178.75 — a level not visited since early 2024 — IBM would need to drop an additional 18% from its already-shattered state. If forced to take assignment, you are establishing a long position at a steep historical discount. On the upside, reclaiming $256.25 would require IBM to recoup more than half of today's historic sell-off before August expiration, an unlikely feat given the sudden enterprise freeze on software and consulting budgets.
As the dust settles on this Bastille Day blowout, the market has left the gates wide open for option sellers. The news is out, but panic has kept options premiums elevated. For those willing to capture the fear, the short strangle offers a high-probability path to watch the remaining premium slowly bleed away.`,
    bodyJa: `1789 年 7 月 14 日、パリの民衆はバスティーユを襲撃し、アンシャン レジームの絶対的権威の暴力的な終焉を告げました。今日、まさに同じ日に（237 年後ではありますが）株式市場は、テクノロジーのアンシャンレジーム、つまりインターナショナル・ビジネス・マシーンに対抗する独自の金融革命を起こしました。
IBMの株価は73ドル強下落し、約217ドルとなった。これは、1日で25％という驚くべき下落額だ。これは私の生涯の中で最も急激な単一セッションの下落であり、私が生まれる前の1968年1月3日以来見られなかった破壊の規模に匹敵します。
この突然のクーデターのきっかけとなったのは、第 2 四半期の予備的な販売ミスでした。 IBMの売上高は172億ドルと報告したが、インフラ部門の7％減が影響し、ウォール街の予想179億ドルを下回った。 CEOのArvind Krishna氏によると、企業顧客は支出をIBMの従来製品から移し、AIによる供給不足や差し迫った価格上昇に備えてハードウェア、サーバー、ストレージを購入するために現金を貯め込んだという。これは独自に検証された傾向ではなく、クリシュナ自身の都合の良い話かもしれないが、市場は裁判を待ってくれなかった。判決は絶対的であり、死刑執行は迅速であった。
しかし、パニックがあるところにはプレミアムがあります。オプションピットには群衆が集まっているが分散していない。通常、悪いニュースが流れ込むと、インプライド・ボラティリティは急速な「株価暴落」を起こします。むしろ、IBMの1か月のインプライド・ボラティリティは99.6%で取引されており、2019年のテーパー・タントラム、2022年の利上げ弱気市場、さまざまな関税の癇癪の際に見られた保険料の拡大を矮小化しているが、これを超えたのは2020年の「パンデミック・プランジ」だけだった。
市場が完全な混乱を織り込んでいる今、高保険料に対して「頭を下げる」スタンスを採用する時期が来ています。同株はすでに25％という大規模な構造再格付けに耐えているため、下落の勢いの大部分は尽きた可能性が高い。 2026年8月21日の月次190/245ショートストラングルを売却することで、株式が革命後の新たな境界線内で静かに統合されることに賭けて、恐怖に駆られた買い手から巨額のプレミアムを集めることができる。
プレミアムキャプチャ: 絞めごとに ~$11.25 (2026 年 7 月 14 日の時点、終了時点)。これは、わずか 38 日間で原株価と比較した 5.18% の静止利回りを表します。
- 下値損益分岐点: $178.75 (現在の価格より約 17.6% 低い)
- 上方損益分岐点: $256.25 (現在価格より約 18.1% 上)
この取引は、広く対称的な安全マージンに依存しています。 178.75ドルという下限の壁（2024年初頭以来一度も訪れていない水準）を突破するには、IBMはすでに崩壊した状態からさらに18％下落する必要がある。割り当てを受けることを余儀なくされた場合、歴史的に大幅な割引でロングポジションを確立することになります。好材料としては、256.25ドルを取り戻すには、IBMが8月の期限までに今日の歴史的な下落の半分以上を取り戻す必要があるが、企業によるソフトウェアとコンサルティング予算の突然の凍結を考慮すると、ありそうもない偉業である。
今回のフランス革命記念日の暴落の騒ぎが収まる中、市場はオプション売り手に門戸を大きく開いたままにした。このニュースは発表されましたが、パニックによりオプションのプレミアムは上昇したままです。恐怖を味わいたい人にとって、短い首絞めは、残りのプレミアムがゆっくりと流れ出ていくのを高確率で見ることができる道を提供します。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/15/historic-ibm-stock-crash-sets-up-unique-options-strategy.html",
    publishedAt: "2026-07-15T17:17:38+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 4,
  },
  {
    id: "fed-chairman-warsh-says-he-meets-often-w-fa94587d",
    title: "Fed Chairman Warsh says he meets 'often' with Trump administration, defends independence",
    titleJa: "ウォーシュFRB議長、トランプ政権と「頻繁に」会うと独立を擁護",
    summaryJa: "米連邦準備制度理事会（FRB）のケビン・ウォーシュ議長は水曜日、議長就任以来ドナルド・トランプ大統領と会話したかどうかについては明言を避けたが、トランプ政権と定期的に連絡を取り合っていることを認めた。それは彼の独立性に影響を与えるものではないとウォーシュ氏は語った。",
    bodyOriginal: `Federal Reserve Chairman Kevin Warsh on Wednesday declined to say if he has spoken to President Donald Trump since becoming chair, but confirmed he is in regular communication with the Trump administration.
That doesn't affect his independence, Warsh said.
Warsh is in a delicate position seven weeks into his term as Fed chair. Investors are trying to suss out where the Fed will take interest rates, as Warsh pulls back on how the Fed talks about its plans. He was appointed by a president who said lower interest rates were a litmus test for his choice of chair and has continued to call for cuts since Warsh was confirmed. Any suggestion that Warsh didn't come by his views honestly could threaten his ability to bring a divided Federal Open Market Committee to consensus on interest rates.
The White House declined to comment on any conversations between the president and the Fed chairman, saying it doesn't discuss any of the president's private conversations that might or might not have occurred.
Spokespersons for Treasury Secretary Scott Bessent and the Fed declined to comment.
Warsh, in the hearing, repeatedly defended his independence and the credibility that flows from it during two days of appearances before Congress, starting with the House on Tuesday and moving to the Senate Wednesday.
"The independence of the Federal Reserve is sacrosanct," Warsh said Tuesday. "Part of the reason for the Fed's power comes not just from a printing press, though it can be useful from time to time. It comes from our credibility, credibility to make the best choices we can consistent with the law that you've written for us."
As Warsh noted in his testimony both days, inflation has remained above the Fed's 2% target for the past 63 months. Inflation fell in June, according to consumer and producer price index data released this week, but Warsh was careful not to take a victory lap.
"Any central bank would be happy to have the data going in the right direction. My view is these are all imperfect measures of the state of underlying inflation," he said.
That view of inflation is up for debate within the Fed. Warsh has created a task force to review how the Fed thinks about inflation. But it isn't a given that the Fed will accept the task force's — and Warsh's — views on the matter.
The FOMC appears divided on the course of interest rates. Governor Christopher Waller and New York Federal Reserve President John Williams have said in recent days it may be necessary to raise interest rates this year.
But if Warsh still needs allies on the Fed, he has one in the Trump administration. The White House has said the president defers to Warsh's views about how to manage the Fed, even though Trump still generally wants interest rates down.
The Fed chair and the Treasury secretary meet for a weekly breakfast by longstanding tradition.
Warsh has kept up that tradition with Bessent, and gone beyond it, he said Wednesday.
"I do meet with the Treasury Secretary weekly. I talk to him often between that." He added he will make his own decisions about interest rates.
Warsh and Bessent share a mentor in investor Stanley Druckenmiller, who employed Warsh for more than a decade until he became Fed chairman. Bessent worked for Druckenmiller earlier in his career as a hedge fund manager. Warsh and Bessent didn't overlap in working for Druckenmiller, but the two knew each other well before taking their current jobs.
Warsh said before becoming Fed chairman that he wanted to negotiate a new Treasury-Fed Accord, referring to the 1951 agreement that established the Fed's modern independence. Warsh said he wanted to hand some powers over the Fed's balance sheet to the Treasury secretary. He hasn't elaborated on those views since becoming Fed chair and has created a task force that will review the Fed's balance sheet policy.
Top Trump economic advisor Kevin Hassett said Wednesday on CNBC's "Squawk Box" that he also had recently spoken to Warsh. Hassett said he had praised Warsh's new task forces when the two spoke.
Warsh declined to say under direct questioning from the Senate Banking Committee whether he had spoken to the president since becoming chairman. But he indicated it shouldn't be seen as a problem if he had spoken to the president.
"I certainly don't feel uncomfortable receiving a call from the chairman of this committee or the president of the United States," Warsh said.
Public calendars released by the Fed show Powell met with or called Bessent only a handful of times outside of their regular breakfast meetings. There was only one such meeting in 2026, when Powell and Bessent discussed risks of artificial intelligence with bank CEOs in April.`,
    bodyJa: `米連邦準備制度理事会（FRB）のケビン・ウォーシュ議長は水曜日、議長就任以来ドナルド・トランプ大統領と会話したかどうかについては明言を避けたが、トランプ政権と定期的に連絡を取り合っていることを認めた。
それは彼の独立性に影響を与えるものではないとウォーシュ氏は語った。
ウォーシュ氏はFRB議長としての任期を終えて7週間が経過し、微妙な立場にある。ウォーシュ氏がFRBの計画についての発言を撤回する中、投資家はFRBがどのような金利政策を採用するのかを探ろうとしている。同氏は、金利低下が議長選択のリトマス試験紙であると述べた大統領によって任命されており、ウォーシュ氏が承認されて以来利下げを要求し続けている。ウォーシュ氏が自身の見解に正直に基づいていないことが示唆されると、分裂した連邦公開市場委員会に金利に関する合意をもたらす同氏の能力が脅かされる可能性がある。
ホワイトハウスは、大統領とFRB議長のいかなる会話についてもコメントを拒否し、行われたかもしれないし、行われなかったかもしれない大統領の個人的な会話については言及していないと述べた。
スコット・ベッセント財務長官とFRBの報道官はコメントを控えた。
ウォーシュ氏は公聴会で、火曜日の下院から水曜日の上院までの２日間の議会出廷中、自身の独立性とそこから得られる信頼性を繰り返し擁護した。
ウォーシュ氏は火曜日、「連邦準備制度の独立性は神聖なものだ」と述べた。 「FRBの力の理由の一部は、印刷機だけから来ているわけではありませんが、時には役に立つこともあります。それは私たちの信頼性、あなたが私たちのために書いてくれた法律に沿って可能な限り最善の選択をする信頼性から来ています。」
ウォーシュ氏が両日の証言で指摘したように、インフレ率は過去63カ月間、FRBの目標である2％を上回っている。今週発表された消費者物価指数と生産者物価指数のデータによると、６月のインフレ率は低下したが、ウォーシュ氏は勝利のラップをとらないよう注意した。
同氏は「どの中央銀行もデータが正しい方向に向かうことを喜んでいるだろう。私の見解では、これらはすべて基調的なインフレの状態を示す不完全な指標だ」と述べた。
インフレに対するこうした見方はFRB内で議論の余地がある。ウォーシュ氏はFRBがインフレについてどのように考えているかを検討するための特別委員会を設置した。しかし、FRBがこの問題に関する特別委員会、そしてウォーシュ氏の見解を受け入れるかどうかは明らかではない。
FOMCでは金利の行方について意見が分かれているようだ。クリストファー・ウォーラー知事とジョン・ウィリアムズニューヨーク連銀総裁はここ数日、今年利上げが必要になる可能性があると述べている。
しかし、ウォーシュ氏が依然としてFRBに同盟者を必要としているとすれば、トランプ政権には同氏の同盟者がいるだろう。ホワイトハウスは、トランプ大統領は依然として全般的に金利引き下げを望んでいるが、大統領はFRBの運営方法についてウォーシュ氏の見解を尊重していると述べた。
FRB議長と財務長官は長年の伝統に従って毎週朝食を共にする。
ウォーシュ氏はベッセント氏とともにその伝統を守り続け、さらにそれを超えてきたと水曜日に語った。
「財務長官とは毎週会っている。その合間によく話をしている。」同氏は金利については自ら決定するつもりだと付け加えた。
ウォーシュ氏とベッセント氏は、投資家のスタンレー・ドラッケンミラー氏を指導者としており、同氏はウォーシュ氏がFRB議長に就任するまで10年以上雇用していた。ベッセント氏は、ヘッジファンドマネージャーとしてのキャリアの初期にドラッケンミラーで働いていました。ウォーシュとベッセントはドラッケンミラーで働いていた時期が重なっていなかったが、二人は現在の仕事に就く前からお互いのことをよく知っていた。
ウォーシュ氏はFRB議長就任前、FRBの現代的独立性を確立した1951年の合意に言及し、新たな財務・FRB協定について交渉したいと述べていた。ウォーシュ氏は、FRBのバランスシートに関する権限の一部を財務長官に移譲したいと述べた。同氏はFRB議長就任以来こうした見解について詳しく述べておらず、FRBのバランスシート政策を見直す作業部会を設置した。
トランプ大統領のトップ経済顧問ケビン・ハセット氏も水曜日、CNBCの「スコーク・ボックス」で、最近ウォーシュ氏とも話したと語った。ハセット氏は、２人が会談した際にウォーシュ氏の新たな任務部隊を称賛したと述べた。
ウォーシュ氏は上院銀行委員会からの直接質問に対し、委員長就任以来大統領と話をしたかどうかについては明言を避けた。しかし、大統領と話し合ったとしても問題視されるべきではないとの考えを示した。
ウォーシュ氏は「この委員会の委員長や米国大統領から電話を受けるのは確かに不快ではない」と述べた。
FRBが公表した公開カレンダーによると、パウエル氏がベッセント氏と面会したり電話したりしたのは定例朝食会以外では数回のみだった。 2026年にそのような会合があったのは、パウエル氏とベッセント氏が4月に銀行CEOらと人工知能のリスクについて話し合ったときの1回だけだった。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/15/feds-warsh-says-he-meets-often-with-trump-administration.html",
    publishedAt: "2026-07-15T17:16:14+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 5,
  },
  {
    id: "burnham-faces-crucial-choice-for-chancel-b3cdeb9e",
    title: "Burnham faces crucial choice for chancellor as battle for No 11 continues",
    titleJa: "ナンバー11をめぐる争いが続く中、バーナム氏は首相の重要な選択に直面している",
    summaryJa: "ナンバー11をめぐる争いが続く中、バーナム氏は首相の重要な選択に直面している- 公開されました",
    bodyOriginal: `Burnham faces crucial choice for chancellor as battle for No 11 continues
- Published
The battle for Number 10 is over.
An overwhelming number of Labour MPs have nominated Andy Burnham. Under Labour's rules he needs trade union support too.
He crossed that threshold today. He is moving into Number 10 on Monday.
But the beneath-the-radar battle for Number 11 Downing St is continuing. Whoever Burnham appoints as chancellor - and next-door neighbour in Downing Street - will send a signal of his intent both to politicians and to the bond markets.
The official line from team Burnham is that no decision has been taken.
Announcements on cabinet posts are not expected to be made until Monday, when Burnham moves to Number 10.
Discussions have been taking place amongst a tight group of people - the next Number 10 chief of staff James Purnell, Louise Haigh and the former MP who stood aside for Burnham, Josh Simons.
When Burnham won the subsequent Makerfield by-election the widespread assumption was that the Energy Secretary Ed Miliband would move to the Treasury.
But there has been both noisy and more subtle attempts to influence Burnham's choice of chancellor - ranging from unions with workers in the oil and gas industry and who distrust Miliband's instincts, to Sir Keir Starmer's unpaid 'cost of living' tsar Lord Walker, the boss of Iceland.
He runs supermarkets but argues that it's the bond markets that would "freak out" if an "ideological" chancellor was installed in the Treasury.
In recent days, a number of MPs close to Burnham - who have no animus to the energy secretary - believe the likelihood of appointing Miliband has lessened significantly.
The caveat is that they are not making the decisions, but are discerning the mood.
Those close to Miliband believe that it's not only highly possible that he will still be appointed but highly desirable too.
They point to his credentials. He has an economics background, was an adviser in the Treasury under Gordon Brown and chaired the Council of Economic Advisers.
He has ministerial experience in the last Labour government and this one. He knows his way around. A colleague put it like this: "He can make the Treasury do what it doesn't want to do."
Miliband has offered advice to Burnham regularly and recently and would be in lock-step with Burnham in the task of spreading growth, in Burnham's words, "to every postcode".
As for the bond markets, one supporter has stressed his adherence to the fiscal rules on debt and borrowing, and another put it more colourfully: "He isn't Che Guevara."
Many in the parliamentary party would expect him to move to Number 11. If he isn't, some on the party's soft left will think that Burnham has refused the first fence in the race to change Britain.
Union backing to seal Labour crown for Burnham
- Published9 hours ago
But there are other factors at play here.
Lord Jim O'Neill was chief economist with Goldman Sachs, commercial secretary to the Treasury under David Cameron, a driving force behind the Northern Powerhouse, chairman of the Cities Growth Commission and has been advising Burnham.
So too has Andy Haldane, the former chief economist at the Bank of England.
O'Neill grew up in Greater Manchester, Haldane in north-east England. It's not known what roles, if any, they might be offered in government.
But if Burnham sees the Treasury as a brake on, rather than an accelerator of, regional growth then his Number 10 operation - both in Downing St and soon in Manchester too - might be given a stronger grip on economic policy.
Haigh has also called for a "beefed-up No 10" promoting growth. And in that scenario, if the likes of Haldane and O'Neill were on board, would Miliband's skills be quite so essential at the Treasury?
So Burnham's decision on personnel might be part of a bigger picture.
I've been told there are "live discussions" over installing Home Secretary Shabana Mahmood in Number 11.
She doesn't have an economics background but it may be felt that a senior minister from the party's right could reassure the markets and avoid a potentially bumpier transition for Burnham.
But one senior source insists the decision is not yet "clear cut". Foreign Secretary Yvette Cooper is also seen as a potential occupant of Number 11.
Nothing will be confirmed until next week and Burnham's camp are emphasising no decision has been taken.
But as Burnham's D-Day (Downing St day) approaches, decisions will have to be taken privately if not publicly very soon.
Sign up for our Politics Essential newsletter to read top political analysis, gain insight from across the UK and stay up to speed with the big moments. It'll be delivered straight to your inbox every weekday.`,
    bodyJa: `ナンバー11をめぐる争いが続く中、バーナム氏は首相の重要な選択に直面している
- 公開されました
10位争いは終わった。
圧倒的多数の労働党議員がアンディ・バーナムを指名した。労働党の規則の下では労働組合の支援も必要だ。
彼は今日その閾値を超えた。彼は月曜日には10位に上がることになる。
しかし、ダウニング街11番地をめぐる水面下の戦いは続いている。バーナムが誰を首相に任命するにせよ、そしてダウニング街の隣人にせよ、政治家と債券市場の両方に彼の意図のシグナルを送ることになるだろう。
チーム・バーナムの公式声明は、まだ決定は下されていないというものだ。
閣僚のポストに関する発表は、バーナム氏がナンバー10に異動する月曜日まで行われない見込みだ。
次期首席補佐官ジェームズ・パーネル氏、ルイーズ・ヘイ氏、そしてバーナム側に立った元国会議員ジョシュ・シモンズ氏という緊密な人物の間で議論が行われている。
その後のメイカーフィールド補欠選挙でバーナムが勝利したとき、エド・ミリバンド・エネルギー長官が財務省に異動するのではないかという予想が広まった。
しかし、バーナム首相の選択に影響を与えようとする騒々しい、そしてより巧妙な試みの両方が行われてきた。石油・ガス産業の労働者やミリバンドの直感を信用しない労働者との組合から、アイスランドのボスであるキア・スターマー卿の無給の「生活費」皇帝ウォーカー卿に至るまで、多岐にわたる。
同氏はスーパーマーケットを経営しているが、財務省に「イデオロギー的な」首相が就任した場合に「混乱する」のは債券市場だと主張する。
ここ数日、バーナム氏に近い多くの国会議員は、エネルギー長官に敵意を持っていないが、ミリバンド氏を任命する可能性は大幅に低下したと考えている。
注意しなければならないのは、彼らは決断を下しているのではなく、雰囲気を見極めているということです。
ミリバンド氏に近い関係者らは、ミリバンド氏が引き続き任命される可能性が高いだけでなく、非常に望ましいと考えている。
彼らは彼の資格情報を指摘します。彼は経済学の経歴があり、ゴードン・ブラウン政権下で財務顧問を務め、経済顧問評議会の議長を務めました。
彼は前回の労働党政権と今回の労働党政権で大臣を務めた経験がある。彼は自分のやり方を知っています。同僚はこう言った、「彼は財務省がやりたくないことをやらせることができる」。
ミリバンド氏は定期的かつ最近もバーナム氏にアドバイスを提供しており、バーナム氏の言葉を借りれば「あらゆる郵便番号に」成長を広めるという任務においてバーナム氏と足並みを揃えるつもりだ。
債券市場に関しては、ある支持者は同氏が債務と借入に関する財政規則を順守していることを強調し、別の支持者は「彼はチェ・ゲバラではない」ともっと派手に主張した。
議会党員の多くは彼がナンバー11に移ることを期待しているだろう。もし彼がそうでなければ、党の軟左派の一部はバーナムが英国を変えるための競争における最初の柵を拒否したと考えるだろう。
労働組合がバーナム氏の王冠獲得を後押し
- 9 時間前に公開
しかし、ここには別の要因が関係しています。
ジム・オニール卿は、ゴールドマン・サックスの首席エコノミストであり、北部強国の立役者であり都市成長委員会委員長であるデービッド・キャメロン政権下の財務省商務長官であり、バーナムに助言してきた。
イングランド銀行の元チーフエコノミスト、アンディ・ハルデーン氏も同様だ。
オニールはイングランド北東部ホールデーンのグレーター・マンチェスターで育ちました。政府内で彼らにどのような役割が与えられるかは不明である。
しかし、バーナム氏が財務省を地域成長の加速剤ではなくブレーキと見なしているのであれば、彼の10番作戦（ダウニング街と間もなくマンチェスターでも）が経済政策をより強力に掌握することになるかもしれない。
ヘイグ氏はまた、成長を促進する「強化されたナンバー10」を求めた。そして、そのシナリオで、ハルデン氏やオニール氏のような人物が参加していたとしたら、ミリバンド氏のスキルは財務省において非常に不可欠なものとなるでしょうか?
したがって、バーナムの人事決定は、より大きな全体像の一部である可能性がある。
シャバナ・マフムード内務大臣をナンバー11に据えることをめぐって「生の議論」が行われていると聞いた。
同氏には経済学のバックグラウンドはないが、党右派の上級大臣が市場を安心させ、バーナム氏にとって困難を伴う可能性のある政権移行を回避できると考えられるかもしれない。
しかし、ある上級情報筋は、決定はまだ「明確」ではないと主張する。イベット・クーパー外務大臣も11番に座る可能性があるとみられている。
来週まで何も確定しないが、バーナム陣営はまだ決定は下されていないと強調している。
しかし、バーナムのDデー（ダウニングストリートの日）が近づくにつれ、近いうちに公にではないにしても、非公開で決定を下す必要があるだろう。
Politics Essential ニュースレターに登録して、トップの政治分析を読み、英国全土からの洞察を得て、重要な瞬間を常に把握してください。平日は毎日あなたの受信箱に直接配信されます。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/ceqe55d0q9po?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-15T17:13:06+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/885c/live/2a9c0730-807a-11f1-b976-0b9c15b0ccfc.jpg",
    readTime: 5,
  },
  {
    id: "brewdog-co-founder-james-watt-launches-b-b860c87c",
    title: "Brewdog co-founder James Watt launches bid to buy back beer firm",
    titleJa: "ブリュードッグの共同創設者ジェームス・ワット氏、ビール会社の買い戻しに向けた入札を開始",
    summaryJa: "ブリュードッグの共同創設者ジェームス・ワット氏、ビール会社の買い戻しに向けた入札を開始- 公開されました",
    bodyOriginal: `Brewdog co-founder James Watt launches bid to buy back beer firm
- Published
Brewdog co-founder James Watt says he has made an offer to buy back the craft beer business months after it was sold to a US company.
At its peak, Brewdog had four breweries, about 100 pubs worldwide and was said to be worth more than $1bn.
However, it was bought over by beverage and medical cannabis company Tilray earlier this year after collapsing with debts of more than £500m, leading to hundreds of job losses.
Watt - who co‑founded the firm with Martin Dickie in Aberdeenshire almost 20 years ago - said investors in Brewdog's "Equity for Punks" scheme would receive shares "for free" if his takeover bid was successful.
I invested £12,000 in Brewdog - I think I've lost it all
- Published18 February
About 20,000 people invested in the scheme, typically spending about £500 on shares costing £20-30 each. They were left worthless as the firm collapsed.
Watt stood down as chief executive in 2024 and moved to a newly created position of "captain and co-founder". Dickie left the company last year, citing personal reasons.
Both had sold shares in the firm to a US private equity fund TSG in 2017, making £50m each.
After leaving Brewdog, Watt launched a new beer brand, Second Best, offering nearly 20% of shares to people who lost money after investing in Equity for Punks.
Former investors told the BBC that they were sceptical about those plans.
Watt's email to investors
In an email to those who signed up to the Second Best offer, seen by BBC Scotland News, Watt said he had made an official offer to buy back Brewdog.
He wrote: "If successful, everyone who has signed up to Second Best will own the same stake in Brewdog they once held. For free."
Watt added that the firm "should be owned by the equity punks and I will endeavour to ensure that happens".
The Aberdeenshire businessman was previously involved in a bid to buy back the firm following its collapse, but lost out to Tilray.
Disclosure: The Truth about Brewdog
Just how ‘punk’ is Brewdog? Mark Daly investigates the truth behind the beer company’s marketing and financial hype.
Watt recently apologised to staff and investors for the "many mistakes" made in the management of the company, admitting that it tried to diversify too quickly.
Brewdog's brash marketing style had regularly sparked controversy, but the firm also faced criticism for its treatment of investors and staff.
A 2022 a BBC Disclosure investigation uncovered claims of inappropriate behaviour by Watt towards female staff, and revealed that Brewdog violated import laws and fabricated many of its marketing stories.
In 2024, the firm faced a backlash after revealing it would no longer hire new staff on the real living wage, instead paying the lower legal minimum wage.
Watt denied any wrongdoing alleged in the film and threatened to sue the BBC. He later said he sometimes missed social cues because he has autism.
A complaint to broadcasting regulator Ofcom was rejected.
Brewdog said it was putting in a range of measures to improve workplace culture following the release of the programme.
Tilray and Second Best have been asked to comment on Watt's letter.`,
    bodyJa: `ブリュードッグの共同創設者ジェームス・ワット氏、ビール会社の買い戻しに向けた入札を開始
- 公開されました
ブリュードッグの共同創設者ジェームス・ワット氏は、クラフトビール事業が米国企業に売却されてから数カ月後に買い戻す提案を行ったと述べた。
最盛期には、ブリュードッグは世界中に 4 つの醸造所と約 100 のパブを持ち、その価値は 10 億ドル以上と言われていました。
しかし、同社は5億ポンド以上の負債を抱えて経営破綻し、数百人の雇用喪失につながった後、今年初めに飲料・医療用大麻会社ティルレイに買収された。
約20年前にマーティン・ディッキーとともにアバディーンシャーで同社を共同設立したワット氏は、ブリュードッグの「パンクのための株式」制度の投資家は、彼の買収提案が成功すれば株式を「無料」で受け取ることになると述べた。
Brewdog に 12,000 ポンド投資しました - すべて失ったと思います
- 2 月 18 日公開
約2万人がこの制度に投資し、通常は1株あたり20～30ポンドの株式に約500ポンドを費やした。会社が倒産したため、彼らは無価値になってしまいました。
ワット氏は2024年に最高経営責任者を退任し、新たに創設された「キャプテン兼共同創設者」の役職に移った。ディッキー氏は個人的な理由を理由に昨年会社を辞めた。
両氏は2017年に同社株を米国のプライベートエクイティファンドTSGに売却し、それぞれ5000万ポンドを稼いでいた。
ブリュードッグを辞めた後、ワットは新しいビールブランド「セカンド・ベスト」を立ち上げ、株式の20％近くをエクイティ・フォー・パンクスへの投資で損失を被った人々に提供した。
元投資家らはBBCに対し、こうした計画には懐疑的だと語った。
ワット氏から投資家へのメール
BBCスコットランドニュースが見たところ、ワット氏はセカンドベストオファーにサインアップした人たちに宛てた電子メールの中で、ブリュードッグ社を買い戻す正式オファーを出したと述べた。
同氏は、「成功すれば、セカンドベストにサインアップした全員が、かつて保有していたブリュードッグ株と同じ株を無料で所有することになる。」と書いている。
ワット氏は、同社は「株のパンクたちが所有するべきであり、私はそれが確実に実現するよう努力する」と付け加えた。
アバディーンシャーの実業家である同氏は以前、経営破綻後の同社の買い戻し入札に参加していたが、ティルレイに敗れた。
情報開示: ブリュードッグについての真実
Brewdog はどれほど「パンク」なのでしょうか?マーク・デイリーは、ビール会社のマーケティングと財務上の誇大広告の背後にある真実を調査します。
ワット氏は最近、同社の経営で犯した「多くの間違い」についてスタッフと投資家に謝罪し、多角化を急ぎすぎたことを認めた。
ブリュードッグの大胆なマーケティングスタイルは定期的に物議を醸してきたが、同社は投資家やスタッフの扱いについても批判にさらされていた。
2022年のBBCディスクロージャー調査では、ワットによる女性スタッフに対する不適切な行為の主張が明らかになり、ブリュードッグが輸入法に違反し、マーケティング記事の多くを捏造していたことが明らかになった。
同社は2024年、今後は実質生活賃金で新規スタッフを雇用せず、代わりに低い法定最低賃金を支払うと明らかにし、反発に直面した。
ワット氏は映画内での不正行為を否定し、BBCを訴えると脅した。彼は後に、自閉症のため社会的な合図を見逃すことがあると語った。
放送規制当局Ofcomへの申し立ては却下された。
ブリュードッグは、プログラムのリリース後、職場文化を改善するためにさまざまな措置を講じていると述べた。
ティルレイとセカンド・ベストはワットの書簡についてコメントを求められている。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c7vyv2v2vmzo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-15T15:14:39+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/b415/live/257ac930-8057-11f1-a142-eb8f669bef0c.jpg",
    readTime: 4,
  },
  {
    id: "warren-buffett-on-the-market-today-it-s-af33f899",
    title: "Warren Buffett on the market today: 'It's tough to find values when everybody is preferring gambling'",
    titleJa: "今日の市場でのウォーレン・バフェット氏：「誰もがギャンブルを好む中、価値観を見つけるのは難しい」",
    summaryJa: "ウォーレン・バフェット氏は株式市場が長期投資ではなく投機取引にますます動かされていると批判した。「誰もがギャンブルを好む中、価値観を見つけるのは難しい」とバフェット氏はCNBCのベッキー・クイックに語った。",
    bodyOriginal: `Warren Buffett was critical of a stock market that he said is increasingly driven by speculative trading, as opposed to investing for the long term.
"It's tough to find values when everybody is preferring gambling," Buffett told CNBC's Becky Quick.
The chairman of Berkshire Hathaway had sharp words on the stock market earlier this year. In May, he likened the stock market to "a church with a casino attached," specifically calling out the surge in one-day options trading as "gambling."
The stock market has rallied to all-time highs this year, climbing a wall of worry that included an energy shock from an ongoing war with Iran. Skeptics have said there's too much speculation in stocks tied to the artificial intelligence buildout, with vehicles such as options and leveraged exchange-traded funds adding fuel to the fire. Equities have increasingly attracted retail traders en masse, who are buying shares of memory chipmaker Micron and recent IPO SpaceX.
The billionaire investor, 95, known for his stout adherence to value investing expressed his belief that the most meaningful investment opportunities are fewer and far between, requiring a patient and disciplined approach.
"There are times when opportunities are just thrown at you so fast you can't, you know, it's unbelievable," the Berkshire chairman said. "And then there's other times when you're very, very lucky if you find one thing in a couple of years. And it should always be that the the latter is what prevails."
"But since humans love to gamble so much, there's more money in in actually cultivating gamblers than there are cultivating investors," he said.`,
    bodyJa: `ウォーレン・バフェット氏は株式市場が長期投資ではなく投機取引にますます動かされていると批判した。
「誰もがギャンブルを好む中、価値観を見つけるのは難しい」とバフェット氏はCNBCのベッキー・クイックに語った。
バークシャー・ハサウェイの会長は今年初め、株式市場に関して鋭い発言をした。 5月には株式市場を「カジノが併設された教会」に例え、特に1日オプション取引の急増を「ギャンブル」と呼んだ。
株式市場は今年、史上最高値まで上昇し、イランとの戦争継続によるエネルギーショックなどの不安の壁を乗り越えた。懐疑論者らは、オプションやレバレッジ型上場投資信託などの手段が火に油を注いでおり、人工知能の増強に関連した株式への投機が多すぎると指摘している。株式市場への個人トレーダーの関心はますます高まっており、メモリーチップメーカーのマイクロンや最近IPOしたスペースXの株を購入している。
バリュー投資を堅持することで知られる95歳の億万長者投資家は、最も有意義な投資機会は稀であり、忍耐強く規律あるアプローチが必要であるとの信念を表明した。
バークシャーの会長は、「チャンスがあまりにも早く与えられ、それができないときがある。信じられないことだ」と語った。 「また、数年のうちに何かを見つけたら、とてもとても幸運だということもあります。そして、常に後者が優先されるべきです。」
「しかし、人間はギャンブルが大好きなので、実際にギャンブラーを育成することには、投資家を育成するよりも多くの資金が投入されます」と彼は言う。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/15/warren-buffett-on-the-market-today-its-tough-to-find-values-when-everybody-is-preferring-gambling.html",
    publishedAt: "2026-07-15T13:48:15+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "watch-fed-chairman-kevin-warsh-testify-l-a6d6659d",
    title: "Watch Fed Chairman Kevin Warsh testify live before Senate banking committee",
    titleJa: "FRBのケビン・ウォーシュ議長が上院銀行委員会で生証言する様子をご覧ください",
    summaryJa: "[ストリームは東部時間午前 10 時に開始される予定です。イベント開始と同時に CNBC テレビがストリーミングを開始します。上にプレーヤーが表示されない場合は、ページを更新してください。]米連邦準備理事会（FRB）のケビン・ウォーシュ議長は水曜日、上院銀行委員会で証言し、経済とさまざまな要因が金利にどのような影響を与えるかについての質問に直面した。",
    bodyOriginal: `[The stream is slated to start at 10 a.m. ET. CNBC Television will start the stream when the event begins. Please refresh the page if you do not see a player above.]
Federal Reserve Chairman Kevin Warsh testifies Wednesday before the Senate Banking Committee, facing questions over the the economy and how various factors might impact interest rates.
Part of congressionally mandated Capitol Hill appearances for the central bank leader, Warsh spoke Tuesday to the House Financial Services Committee. During his remarks, he reaffirmed the Fed's commitment to fighting inflation though he gave few clues about the direction of monetary policy.
Legislators tried baiting Warsh into commenting on fiscal and political matters, but he largely avoided the topics, stressing the importance of the Fed staying focused on its assigned responsibilities.
Read more:
Warsh pledges Fed policy 'regime change' to rid inflation 'tax' on American people
Kevin Warsh names members of his Federal Reserve task forces, including Marc Andreessen, Doug McMillon
Fed meeting minutes to show 'family fight' over rates. The squabble could drag on for a while`,
    bodyJa: `[ストリームは東部時間午前 10 時に開始される予定です。イベント開始と同時に CNBC テレビがストリーミングを開始します。上にプレーヤーが表示されない場合は、ページを更新してください。]
米連邦準備理事会（FRB）のケビン・ウォーシュ議長は水曜日、上院銀行委員会で証言し、経済とさまざまな要因が金利にどのような影響を与えるかについての質問に直面した。
ウォーシュ氏は議会で義務付けられた中銀総裁の国会議事堂出席の一環として、火曜日に下院金融委員会で講演した。同氏は発言の中で、金融政策の方向性についてはほとんど手がかりを示さなかったものの、インフレとの戦いに対するFRBの取り組みを再確認した。
議員らはウォーシュ氏をだまして財政や政治問題についてコメントさせようとしたが、同氏はその話題をほとんど避け、FRBが与えられた責任に集中し続けることの重要性を強調した。
続きを読む:
ウォーシュ氏、アメリカ国民に対するインフレ「税」を取り除くためにFRBの政策「体制変更」を約束
ケビン・ウォーシュはマーク・アンドリーセン、ダグ・マクミロンらを連邦準備制度の特別委員会のメンバーに指名
金利をめぐる「家族間の争い」を示すFRB会議議事録。争いはしばらく長引く可能性がある`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/15/watch-fed-chairman-kevin-warsh-testify-live-before-senate-banking-committee.html",
    publishedAt: "2026-07-15T13:47:51+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 2,
  },
  {
    id: "arsenal-of-democracy-jamie-dimon-announ-6184d932",
    title: "‘Arsenal of democracy’: Jamie Dimon announces $24 million effort to boost American shipbuilding",
    titleJa: "「民主主義の武器庫」：ジェイミー・ダイモン氏、米国の造船促進に2400万ドルの取り組みを発表",
    summaryJa: "JPモルガン・チェースのジェイミー・ダイモン最高経営責任者（CEO）は、フィラデルフィア海軍工廠の新しい潜水艦施設に資金を提供し、米国の造船を強化するための2,400万ドルのパッケージを発表した。",
    bodyOriginal: `JPMorgan Chase CEO Jamie Dimon on Wednesday announced a $24 million effort to help revive American shipbuilding, his latest move under the bank's $1.5 trillion security project aimed at bolstering industries critical to U.S. economic and national security.
The figure includes $18 million in loans and $6 million in grants to finance a new submarine manufacturing facility at the Philadelphia Navy Yard being built by Rhoads Industries, expand lending to maritime-related small businesses and strengthen regional suppliers, JPMorgan said.
"The arsenal of democracy has been reignited," Dimon told CNBC's Andrew Ross Sorkin.
"People said it couldn't happen, but here you have Hanwha shipbuilding at the Philadelphia Navy Yard," Dimon said, naming a South Korean conglomerate with a U.S. vessel-making subsidiary.
The announcement comes as rising geopolitical tensions, including wars in the Middle East and Ukraine, spur governments to rearm and reinvest in domestic industrial capacity.
Last year, JPMorgan launched a $1.5 trillion initiative to finance sectors it considers critical to U.S. economic and national security, including shipbuilding. The firm announced an expansion of the program into Europe this year.`,
    bodyJa: `JPモルガン・チェースのジェイミー・ダイモン最高経営責任者（CEO）は水曜日、米国の造船業の復活を支援するために2400万ドルの取り組みを発表した。これは、米国の経済と国家安全保障にとって重要な産業の強化を目的とした同銀行の1兆5000億ドルの安全保障プロジェクトに基づく最新の措置である。
JPモルガンによると、この額にはローズ・インダストリーズが建設中のフィラデルフィア海軍工廠の新しい潜水艦製造施設への融資、海事関連中小企業への融資拡大、地域サプライヤー強化のための融資1,800万ドルと補助金600万ドルが含まれているという。
「民主主義の武器が再燃した」とダイモン氏はCNBCのアンドリュー・ロス・ソーキン氏に語った。
「人々はそんなことはありえないと言っていましたが、ここフィラデルフィア海軍工廠にはハンファ造船所があります」とダイモン氏は米国の造船子会社を持つ韓国の複合企業の名を挙げて語った。
この発表は、中東やウクライナでの戦争を含む地政学的な緊張の高まりが政府の再軍備や国内の産業能力への再投資に拍車をかけている中で行われた。
JPモルガンは昨年、造船など米国の経済と国家安全保障にとって重要と考えるセクターに資金を提供するため、1兆5000億ドル規模の取り組みを開始した。同社は今年、このプログラムをヨーロッパに拡大すると発表した。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/15/jamie-dimon-jpmorgan-chase-defense.html",
    publishedAt: "2026-07-15T13:45:27+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 2,
  },
  {
    id: "morgan-stanley-posts-record-quarterly-re-00435df2",
    title: "Morgan Stanley posts record quarterly revenue and profit as equities trading surges 69%",
    titleJa: "モルガン・スタンレー、株式取引が69%急増し、四半期売上高と利益の記録を更新",
    summaryJa: "モルガン・スタンレーは水曜日、株式トレーディング収益の69％急増により、第2四半期に記録的な売上高と利益を記録した。同社が報告した内容は次のとおりです。",
    bodyOriginal: `Morgan Stanley on Wednesday posted record revenue and profit for the second quarter, driven by a 69% surge in equities trading revenue.
Here's what the company reported:
- Earnings per share: $3.46 vs. $2.94 LSEG estimate
- Revenue: $21.35 billion vs. $19.64 billion estimate
The company said profit jumped 58% from a year earlier to $5.58 billion. Revenue climbed 27% to $21.35 billion.
Like at peers Goldman Sachs and JPMorgan Chase, a massive beat in equities trading drove the quarter's outsized results. Heightened activity fueled by the global artificial intelligence boom propelled JPMorgan and Goldman to beat estimates for equities trading by a combined $4.4 billion, while investment banking at the two firms topped estimates by a combined $1 billion.
Equities trading revenue at Morgan Stanley hit a record $6.3 billion, roughly $1.9 billion more than analysts surveyed by StreetAccount had expected. The firm cited strength across the equities franchise and "notable strength in Asia," another recurring Wall Street theme as the AI trade spreads globally.
Meanwhile, fixed income trading rose 13% to $2.46 billion, essentially matching the consensus estimate, on good results in credit trading.
"Active markets and consistent execution across all three regions drove exceptional results for our integrated firm," CEO Ted Pick said in the release.
Investment banking revenue surged 58% to $2.44 billion, about $270 million more than analysts had expected, on additional completed mergers, initial public offerings and related equities deals, and rising debt issuance.
Revenue in the firm's giant wealth management division climbed 14% to $8.86 billion, about $146 million more than expected, as asset levels were buoyed by the rising stock market and growth in deposits and lending.
Revenue in investment management, the firm's smallest division, rose about 6% to $1.65 billion thanks to rising asset values, essentially matching the estimate.`,
    bodyJa: `モルガン・スタンレーは水曜日、株式トレーディング収益の69％急増により、第2四半期に記録的な売上高と利益を記録した。
同社が報告した内容は次のとおりです。
- 1 株当たり利益: 3.46 ドル vs. LSEG 予想 2.94 ドル
- 収益: 推定 196 億 4000 万ドルに対して 213 億 5000 万ドル
同社によると、利益は前年比５８％増の５５億８０００万ドルとなった。売上高は２７％増の２１３億５０００万ドルとなった。
同業のゴールドマン・サックスやJPモルガン・チェースと同様、株式取引の大躍進が当四半期の大幅な業績を押し上げた。世界的な人工知能ブームに後押しされた活動の活発化により、JPモルガンとゴールドマンは株式取引の予想を合わせて44億ドル上回り、両社の投資銀行業務は合わせて10億ドル上回った。
モルガン・スタンレーの株式トレーディング収入は過去最高の63億ドルに達し、ストリートアカウントが調査したアナリストの予想を約19億ドル上回った。同社は、株式フランチャイズ全体の強さと、AI貿易が世界的に広がるにつれてウォール街で繰り返されるもう一つのテーマである「アジアにおける顕著な強さ」を挙げた。
一方、債券トレーディングはクレジットトレーディングの好調を受けて１３％増の２４億６０００万ドルとなり、コンセンサス予想とほぼ一致した。
CEOのテッド・ピック氏はリリースの中で「活発な市場と3つの地域すべてにわたる一貫した執行が、当社の統合会社に並外れた成果をもたらした」と述べた。
投資銀行部門の収益は58％増の24億4000万ドルとなり、追加の完了した合併、新規株式公開および関連株式取引、債券発行の増加により、アナリスト予想を約2億7000万ドル上回った。
株式市場の上昇と預金と融資の伸びによって資産水準が上昇したため、同社の巨大資産管理部門の売上高は14％増の88億6000万ドルとなり、予想を約1億4600万ドル上回った。
同社最小部門である投資管理部門の収益は資産価値の上昇により約6％増の16億5000万ドルとなり、ほぼ予想と一致した。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/15/morgan-stanley-ms-earnings-q2-2026-.html",
    publishedAt: "2026-07-15T13:44:44+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "wholesale-prices-unexpectedly-declined-0-98bd4b00",
    title: "Wholesale prices unexpectedly declined 0.3% in June on big drop in gasoline",
    titleJa: "ガソリンの大幅な下落により、6月の卸売価格は予想外に0.3％下落した",
    summaryJa: "労働統計局が水曜日に発表したところによると、エネルギーコストのスライドによりインフレ状況が明るくなり、6月の卸売価格は予想外に下落した。同月の農産物価格指数は季節調整済みで0.3％下落したが、ダウ・ジョーンズの最終需要コスト指標は変わらないとのコンセンサス予想と比較した。年間ベースでは、この指数は 5.5% のインフレ率を示しました。 ５月の統計は当初発表の１．１％増から０．６％増へと大幅に下方修正された。",
    bodyOriginal: `Wholesale prices unexpectedly fell in June as sliding energy costs helped brighten the inflation picture, the Bureau of Labor Statistics reported Wednesday.
The produce price index posted a seasonally adjusted 0.3% decline for the month, compared with the Dow Jones consensus estimate for the final demand cost measure to be unchanged. On an annual basis, the index indicated a 5.5% inflation rate. The May reading was revised sharply lower, from an initially reported increase of 1.1% to 0.6%.
Excluding food and energy, the core PPI rose 0.2%, against the outlook for a 0.3% increase. The core PPI less trade services rose 0.1% and was up 5.1% from a year ago.
As with consumer prices, the index benefited from easing energy costs, particularly as oil fell due to the brief pause in tensions between the U.S. and Iran. Goods prices posted a 1.4% monthly decline, the biggest drop since July 2022 as energy slumped 6.4% and final demand food prices were off 0.6%.
Within the goods category, gasoline tumbled 12%, accounting for about two-thirds of the monthly decrease.
At the same time, services prices rose 0.2%, boosted by a 0.4% increase in trade services.
The release comes the day after the BLS reported that the consumer price index, a broad measure of inflation at the cash register, posted an unexpectedly sharp decline of 0.4% in June, bringing the annual inflation rate down to 3.5%. That was the biggest monthly drop since April 2020, just after the Covid pandemic declaration.
Core consumer inflation slipped to 2.6% after prices were unchanged for the month.
While the inflation measures are still well above the Federal Reserve's 2% goal, they do represent progress in the central bank's five-year battle to get back to target.
"The Fed's war with inflation isn't over by any means," said Chris Rupkey, chief economist at Fwdbonds, "... but there is good news from the front and the odds of Fed rate hikes should continue to recede as inflation at the factory level is trending lower, and producers will not be passing on their higher costs to the consumer level as much as we previously thought."
The consumer and producer price indexes both feed heavily into the calculation of the Fed's preferred inflation gauge. Policymakers most closely follow the personal consumption expenditures price index, due to be released later this month from the Commerce Department. For May, the PCE index indicated headline inflation of 4.1% and core at 3.4%, both likely to come down following this week's releases.
Markets still expect the Fed to approve an interest rate hike this year, as soon as September. Fed Chairman Kevin Warsh on Tuesday told House lawmakers that the June decline in prices did not represent a "mission accomplished" moment for inflation.`,
    bodyJa: `労働統計局が水曜日に発表したところによると、エネルギーコストのスライドによりインフレ状況が明るくなり、6月の卸売価格は予想外に下落した。
同月の農産物価格指数は季節調整済みで0.3％下落したが、ダウ・ジョーンズの最終需要コスト指標は変わらないとのコンセンサス予想と比較した。年間ベースでは、この指数は 5.5% のインフレ率を示しました。 ５月の統計は当初発表の１．１％増から０．６％増へと大幅に下方修正された。
食品とエネルギーを除くコアＰＰＩは０．３％上昇の見通しに対し０．２％上昇した。貿易サービスを除いたコアPPIは0.1%上昇し、前年比では5.1%上昇した。
消費者物価と同様に、特に米国とイラン間の緊張の一時停止による原油安により、指数もエネルギーコストの緩和から恩恵を受けた。エネルギーが6.4％下落し、最終需要の食品価格が0.6％下落したため、商品価格は前月比1.4％下落し、2022年7月以来最大の下落となった。
商品カテゴリー内ではガソリンが12％下落し、月間の減少額の約3分の2を占めた。
同時に、サービス価格は貿易サービスの０．４％上昇に後押しされて０．２％上昇した。
この発表は、レジでのインフレの広範な指標である消費者物価指数が6月に0.4％という予想外の急激な低下を記録し、年間インフレ率が3.5％に低下したとBLSが報告した翌日に行われた。これは、新型コロナウイルスのパンデミック宣言直後の2020年4月以来、月間で最大の減少幅となった。
同月の価格は横ばいでしたが、コア消費者インフレ率は２．６％に低下しました。
インフレ対策は依然として連邦準備制度理事会の目標である２％を大幅に上回っているが、目標を取り戻すための中央銀行の５年間の戦いにおける進歩を示している。
Fwdbondsの首席エコノミスト、クリス・ラプキー氏は「FRBのインフレとの戦いは決して終わっていない。…だが、前線から良いニュースもあり、工場レベルのインフレは低下傾向にあり、生産者はこれまで考えていたほどコスト高を消費者レベルに転嫁しないため、FRBの利上げの可能性は今後も後退するはずだ」と述べた。
消費者物価指数と生産者物価指数はいずれも、FRBの優先インフレ指標の計算に大きく反映されます。政策当局者が最も注目しているのは、商務省が今月後半に発表する予定の個人消費支出価格指数だ。 5月のPCE指数は総合インフレ率4.1％、コアインフレ率3.4％を示しており、今週の発表を受けてどちらも低下する可能性が高い。
市場では依然としてFRBが早ければ9月にも年内利上げを承認すると予想されている。 FRBのケビン・ウォーシュ議長は火曜日、下院議員に対し、6月の物価下落はインフレにとって「使命が達成された」瞬間ではないと述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/15/wholesale-inflation-june-2026-.html",
    publishedAt: "2026-07-15T13:13:20+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "u-s-launches-fresh-wave-of-strikes-on-ir-c3f4d922",
    title: "U.S. launches fresh wave of strikes on Iran, as analysts warn conflict risks becoming 'forever war'",
    titleJa: "紛争が「永遠の戦争」になるリスクをアナリストが警告、米国がイランへの新たな攻撃を開始",
    summaryJa: "ドナルド・トランプ大統領が、イランが和平交渉に協力しなければ来週軍事攻撃が激化すると警告した数時間後、米国は水曜早朝、イランに対する新たな攻撃を開始した。米中央軍は水曜日のXへの投稿で、東部時間午前6時にイランに対する一連の攻撃を開始したと発表した。",
    bodyOriginal: `The U.S. launched a fresh round of strikes on Iran early Wednesday morning, hours after President Donald Trump warned military strikes would intensify next week if Tehran does not cooperate in peace talks.
U.S. Central Command said in a post on X on Wednesday that it had begun launching a wave of strikes against Iran at 6 a.m. ET.
"The strikes are designed to further degrade military capabilities Iranian forces have used to attack commercial shipping in the Strait of Hormuz," it said.
In a later update, Centcom said Wednesday's strikes were completed at 7:30 a.m. ET, adding that precision munitions had been launched against Iran's coastal defense systems, and cruise missile storage and launch sites on Greater Tunb Island.
The Tunb Islands are small islands located in the Persian Gulf, near the Strait of Hormuz.
Centcom had carried out more strikes against Iran on Tuesday. Tehran, meanwhile, has launched attacks on multiple Gulf countries.
In an interview with Fox News on Tuesday evening, Trump hinted that the conflict was more likely to intensify than de-escalate as a fragile ceasefire agreed last month continues to fracture.
"We're going to hit them very hard tonight," he said. "We're going to hit them hard tomorrow night. We're going to hit them really hard the night after."
He added that U.S. forces would go on to target key Iranian infrastructure next week without a diplomatic breakthrough.
"Next week it gets really bad for them because next week comes the power plants," he said. "Next week comes the bridges. We're going to knock out all their power plants. We're going to knock out all their bridges unless they get to the table and negotiate."
Trump threatened to impose a 20% levy on cargo shipped through the Strait of Hormuz earlier this week, before abandoning that demand on Tuesday. The president said the Gulf states would invest in the U.S. as repayment instead.
The escalation in fighting comes after the U.S. launched strikes on dozens of Iranian targets last week, in retaliation for commercial ships transiting the Strait of Hormuz coming under attack.
Trump subsequently said the ceasefire between Washington and Tehran was "over."
Oil prices edged higher on Wednesday morning, as concerns about safe transit through the Strait of Hormuz – a critical oil shipping route in the Middle East – lingered. Front-month global benchmark Brent crude futures held above the $85 per barrel mark.
Speaking to CNBC's "Squawk Box Europe" on Wednesday, Jakob Larsen, chief safety and security officer at international shipping body BIMCO, said the current situation is "not easy" for the industry to navigate.
"All these messages going back and forth and changing direction completely just adds to the confusion and the complexity of the whole situation," he said. "If you take a step away and look at it from above, then the overall environment we're looking at is increased uncertainty, increased risks, and with that comes higher prices."
Risk of 'forever war'
Mike Rosenberg, a management professor at IESE Business School, told CNBC over email on Wednesday morning that "it seems we are no closer to a settlement" to end the conflict.
"The current return to war makes it clear that the terms of the Islamabad Memorandum, signed by Trump on 14 June, were unrealistic at the time," he said. "As long as both sides seek an agreement that allows them to claim victory, I cannot see a positive outcome any time soon."
Rosenberg said that the best the U.S. can hope for now is "a new version of the joint plan of action that Obama and his team developed years ago," which he added will be difficult for Trump to accept.
"The Trump administration underestimated Iranian resolve and has no easy way out," he said. "The most likely outcome is some kind of permanent ceasefire negotiated by Pakistan without any nuclear guarantees, and it is likely that the administration will avoid making that agreement before the mid-term elections."
Andreas Böhm, a lecturer in international affairs at Switzerland's University of St Gallen, said the conflict was "tricky" to resolve and risked becoming a drawn-out, years-long war.
"Trump is stuck in a mess of his own (and Israel's) making and can't find a face-saving way out of it, while the Iranians assume they are still in conflict and are therefore trying to maximize their gains and risk overplaying their hand," he said in an email. "This might result in a long-time low-level conflict and therefore one of the forever-wars Trump pledged to end. Each side will try to raise the costs for the respective other until it will become prohibitive."
Böhm, a specialist in Middle East affairs, told CNBC Trump had "started the war without a goal," making it difficult to predict what might come next.
"Without a strategy, it is not clear what he aims to achieve," he said. "[Trump] can't open the Strait of Hormuz by force other than an operation of a scale that he will be unable sell to the American public. If he starts a broader war on infrastructure in Iran, the retribution will hit energy infrastructure in the Gulf."
The only way out of the conflict now was through diplomacy, said Böhm, but he added that this would now be "much more difficult."
"There might be some narrow runway where negotiations regarding Hormuz might land, but broader arrangements must come to terms with the fact that there is now a different reality," he said. "We can't go back to before to this war."`,
    bodyJa: `ドナルド・トランプ大統領が、イランが和平交渉に協力しなければ来週軍事攻撃が激化すると警告した数時間後、米国は水曜早朝、イランに対する新たな攻撃を開始した。
米中央軍は水曜日のXへの投稿で、東部時間午前6時にイランに対する一連の攻撃を開始したと発表した。
同報道官は、「今回の攻撃は、イラン軍がホルムズ海峡の商船を攻撃するために利用してきた軍事能力をさらに低下させることを目的としている」と述べた。
その後の最新情報でセントコムは、水曜日の攻撃は東部時間午前7時30分に完了したと発表し、イランの沿岸防衛システムとグレータートゥンブ島の巡航ミサイルの保管・発射場に対して精密弾が発射されたと付け加えた。
トゥンブ諸島は、ホルムズ海峡近くのペルシャ湾に位置する小さな島です。
セントコムは火曜日にもイランに対して追加攻撃を実施していた。一方、テヘランは複数の湾岸諸国への攻撃を開始した。
火曜日夜のFOXニュースとのインタビューで、トランプ大統領は、先月合意された脆弱な停戦が引き裂かれ続けているため、紛争は縮小するよりも激化する可能性が高いと示唆した。
「今夜は彼らを徹底的に攻撃するつもりだ」と彼は言った。 「我々は明日の夜、彼らを厳しく攻撃するつもりだ。明後日の夜も彼らを徹底的に攻撃するつもりだ。」
同氏は、外交上の突破口がなければ、米軍は来週もイランの主要インフラを攻撃し続けるだろうと付け加えた。
「来週は発電所が稼働するため、来週は彼らにとって本当にひどい状況になる」と彼は語った。 「来週は橋が来ます。私たちは彼らの発電所をすべて破壊するつもりです。彼らがテーブルに着いて交渉しない限り、私たちは彼らの橋をすべて破壊するつもりです。」
トランプ大統領は今週初め、ホルムズ海峡を通って出荷される貨物に20％の関税を課すと脅したが、火曜日にはその要求を放棄した。大統領は、湾岸諸国は返済の代わりに米国に投資すると述べた。
戦闘の激化は、ホルムズ海峡を通過する商船が攻撃を受けたことへの報復として、米国が先週、イランの数十の目標への攻撃を開始した後に起こった。
その後、トランプ大統領は、ワシントンとテヘランの間の停戦は「終わった」と述べた。
中東の重要な石油輸送ルートであるホルムズ海峡の安全な輸送に対する懸念が根強く、水曜日朝の原油価格は小幅上昇した。前月の世界的なベンチマークであるブレント原油先物は1バレル当たり85ドルを超えて推移した。
国際海運会社BIMCOの安全・セキュリティ最高責任者、ヤコブ・ラーセン氏は水曜日、CNBCの「スコーク・ボックス・ヨーロッパ」に出演し、現在の状況は業界にとって「乗り切るのは容易ではない」と語った。
「こうしたメッセージが行ったり来たり、完全に方向を変えたりすることは、状況全体の混乱と複雑さを増すだけだ」と同氏は述べた。 「一歩離れて上から眺めてみると、私たちが見ている全体的な環境は不確実性の増大とリスクの増大であり、それに伴い価格の上昇が伴うことになる。」
「永遠の戦争」のリスク
IESEビジネススクールの経営学教授マイク・ローゼンバーグ氏は水曜朝、電子メールでCNBCに対し、紛争終結に向けて「和解にはまだ近づいていないようだ」と語った。
「今回の戦争復帰は、トランプ大統領が6月14日に署名したイスラマバード覚書の条件が当時非現実的であったことを明らかにしている」と述べた。 「双方が勝利を主張できるような合意を求める限り、近いうちに前向きな結果が得られるとは考えられない」
ローゼンバーグ氏は、米国が現時点で期待できる最善のことは「オバマ氏と彼のチームが数年前に策定した共同行動計画の新バージョン」だと述べ、トランプ氏がこれを受け入れるのは難しいだろうと付け加えた。
「トランプ政権はイランの決意を過小評価しており、簡単な解決策はない」と述べた。 「最も可能性の高い結果は、核保証なしでパキスタンが交渉したある種の恒久的停戦であり、政権は中間選挙前にその合意を結ぶことを回避する可能性が高い。」
スイスのザンクトガレン大学で国際情勢を教えるアンドレアス・ベーム講師は、紛争の解決は「難しく」、長期にわたる戦争になる危険性があると述べた。
同氏は電子メールで、「トランプ氏は自ら（そしてイスラエル）が引き起こした混乱に陥っており、そこから抜け出す面子を保つ方法を見つけられない。一方、イラン人はまだ紛争が続いていると考えており、そのため自分たちの利益を最大限に高めようとしており、手を出しすぎるリスクを冒している」と述べた。 「これは長期にわたる低レベルの紛争を引き起こす可能性があり、したがってトランプ大統領が終結を約束した永遠の戦争の一つとなる可能性がある。双方は法外な額になるまで、互いの費用を増額しようとするだろう。」
中東問題の専門家であるベーム氏はCNBCに対し、トランプ大統領は「目標もなく戦争を始めた」ため、次に何が起こるかを予測するのは困難だと語った。
「戦略がなければ、彼が何を達成しようとしているのかは明らかではない」と彼は言う。 「（トランプ氏は）米国民に売り込むことができない規模の作戦以外、武力でホルムズ海峡を開くことはできない。イランのインフラに対する広範な戦争を始めれば、その報復は湾岸のエネルギーインフラに打撃を与えるだろう。」
ベーム氏は、現在の紛争を打開する唯一の方法は外交によるものだと述べたが、今後はこれが「はるかに困難」になるだろうと付け加えた。
同氏は「ホルムズ問題に関する交渉が決着する狭い滑走路はあるかもしれないが、現在は異なる現実があるという事実を踏まえ、より広範な取り決めが必要だ」と述べた。 「この戦争の前に戻ることはできない。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/15/trump-iran-hormuz-strikes-power-plants-targeted.html",
    publishedAt: "2026-07-15T12:07:12+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 6,
  },
  {
    id: "don-t-panic-five-ways-to-stop-your-kids-b993ea2f",
    title: "Don't panic - five ways to stop your kids' endless scrolling",
    titleJa: "パニックにならないでください - 子供の際限ないスクロールを止める 5 つの方法",
    summaryJa: "パニックにならないでください - 子供の際限ないスクロールを止める 5 つの方法- 公開されました",
    bodyOriginal: `Don't panic - five ways to stop your kids' endless scrolling
- Published
If you're a parent, you may have breathed a sigh of relief - or perhaps frustration - at the UK government's plans to implement an overnight social media curfew for 16 and 17-year-olds.
It would see apps such as Instagram, TikTok and YouTube made unavailable by default to the teenagers - though they will be able to opt out of the curfew if they want.
Features the government considers addictive such as auto-play videos and infinite scrolling will also be disabled under the plans, aimed at improving teenagers' focus, sleep quality and family life.
We asked some parenting experts for their tips on how to pry those phones away from their offspring's hands – even if only for a short while.
1. Start small and be realistic
Many parents who have already given their children tablets or smartphones might wonder if the best thing is to just get rid of them. But that might not be the most productive option, believes child psychologist Dr Jane Gilmour.
"Changing a habit is always going to be hard," she says. Instead, she recommends implementing changes at a neutral moment, not in the heat of an argument about screen time. "Calm brains communicate best."
A good first step to reducing screen time could be designating a set place in the home for devices, such as a particular cupboard.
"Have one place for chargers... so when the phones go away, they go on the charger and that's it."
2. Be collaborative
Older children and teenagers can benefit from being part of the conversation around screen time, rather than having rules imposed on them, says child psychologist Dr Maryhan Baker.
Acknowledging the peer pressure surrounding social media can help get teens onside, she says, such as telling them: "I understand that that's where you connect with your friends. I understand the social pressure if you're deemed not to be on this. I really get it.
"So let's have a conversation about how we can begin to create space within our day, and your day where you're not on that phone all of the time."
Parenting coach Olivia Edwards adds that building a strong connection with your child or teenager will make it easier to regulate screen use.
"We have to have a strong relationship with our child because that is what's going to get us towards co-operation [and] teamwork."
This could include taking a genuine interest in the content your child consumes online.
3. Turn screen time into learning opportunities
Many parents feel they're struggling to keep up with the rapidly changing fads and trends on social media. But there is an opportunity for both adults and children to learn from each other through frank discussions about screen time.
Olivia says: "You might say something like: 'How do you think social media works? How do you think that app works to keep people looking at it? Did you know they make money off the more time people spend on it?'"
Jane also says parents can teach their children digital literacy in a hands-on way. "There might be content that you can look at together and say, 'OK, do you think that that is true? How would I figure out if that's true or not?'"
4. Model good behaviour
It's no secret that children mimic their parents, so encouraging good screen habits in them might have to start with some self reflection.
Maryhan encourages a light-hearted approach to this. "Even if we just do a slightly self-deprecating conversation with our kids, like: 'We're all guilty of this, I'm not as great on my relationship with [my phone] as I could be.'"
Phones and tablets have provided people of all ages with an ever-present source of entertainment, but Jane says that both adults and children could benefit from embracing boredom a bit more.
"Being on the screen, it keeps us looking at the external world. When we go into our internal world and we sort of stare into space, into the middle distance, it allows us to think about the past, it allows us to visualise the future, it predicts creativity.
"So when your kids are protesting [that] there's nothing to do, they're just staring into space - that's OK. And actually that's a positive thing."
5. Don't panic
Parenting has never been easy, but raising children in a time where screens are everywhere, while we are still learning how they affect us, can be very worrying.
Dr Tony Sampson, a reader in digital communication at the University of Essex, says parents shouldn't fall into the trap of moral panic.
"There is a tendency for anxious parents to become caught up in a prevailing media panic and see all adolescent brains as simply hardwired for social media addiction," he says.
But children and teenagers have what's called neuroplasticity – their brains are better at adapting and bouncing back than adults' brains.
"We read a lot about the ways in which social media erodes attention," he says.
"[But] social media does not shorten or erode attention. It captures it and diverts it toward engagement with commercial content.
"Positive technological use can help boost neuroplasticity for creativity, exploration and learning."
Get in touch
Are you a parent who is concerned about screen time? Have you taken steps to address the issue with your children?
Related topics
- Published23 January`,
    bodyJa: `パニックにならないでください - 子供の際限ないスクロールを止める 5 つの方法
- 公開されました
あなたが親であれば、16歳と17歳に対して一晩のソーシャルメディア外出禁止令を導入するという英国政府の計画に安堵のため息をついたこと、あるいはおそらくイライラしたことがあるかもしれない。
Instagram、TikTok、YouTubeなどのアプリは、ティーンエイジャーにとってデフォルトで利用できなくなるが、希望すれば外出禁止令をオプトアウトできるようになる。
この計画では、青少年の集中力、睡眠の質、家庭生活の改善を目的として、動画の自動再生や無限スクロールなど中毒性があると政府がみなしている機能も無効化される。
私たちは子育ての専門家に、たとえ短時間であっても、子どもの手からスマートフォンを引き離す方法についてヒントを求めました。
1. 小さなことから始めて現実的になる
すでに子供にタブレットやスマートフォンを与えている親の多くは、それらを処分するのが最善の策ではないかと疑問に思うかもしれません。しかし、それは最も生産的な選択肢ではないかもしれない、と児童心理学者のジェーン・ギルモア博士は考えています。
「習慣を変えるのは常に難しいことです」と彼女は言います。代わりに、彼女は、スクリーンタイムについて議論が盛り上がっている最中ではなく、中立的な瞬間に変更を実装することを推奨しています。 「冷静な頭脳はコミュニケーションに最も優れています。」
スクリーンタイムを減らすための良い最初のステップは、特定の戸棚など、デバイスを置くための家の決まった場所を指定することです。
「充電器用の場所を 1 か所に確保してください。携帯電話がなくなったら、充電器に置いて終わりです。」
2. 協力的になる
児童心理学者のメアリーハン・ベイカー博士によると、年長の子供やティーンエイジャーは、ルールを課されるよりも、スクリーンタイムの会話に参加することで恩恵を受けることができるという。
ソーシャルメディアを取り巻く同調圧力を認識することは、十代の若者たちに「友達とつながるのはそこだということは理解しています。これに参加していないとみなされた場合の社会的圧力は理解しています。私は本当にそれを理解しています。
「それでは、私たちの 1 日の中で、常に電話を使っていない 1 日の中で、どのようにしてスペースを作り始めることができるかについて話し合いましょう。」
子育てコーチのオリビア・エドワーズ氏は、子どもやティーンエイジャーとの強いつながりを築くことで、画面の使用を規制しやすくなると付け加えた。
「私たちは子供と強い関係を築かなければなりません。それが私たちを協力やチームワークへと導くものだからです。」
これには、お子様がオンラインで消費するコンテンツに純粋に興味を持つことが含まれる場合があります。
3. スクリーンタイムを学習の機会に変える
多くの親は、急速に変化するソーシャル メディアの流行やトレンドについていくのに苦労していると感じています。しかし、大人も子どもも、スクリーンタイムについて率直に話し合うことでお互いから学び合う機会があります。
オリヴィアはこう言います。「次のようなことを言うかもしれません。『ソーシャルメディアはどのように機能すると思いますか？』そのアプリは人々に注目してもらうためにどのように機能すると思いますか?人々がそれに費やす時間が長ければ長いほど、お金が儲かると知っていましたか？」
ジェーン氏はまた、親が子供たちにデジタルリテラシーを実践的な方法で教えることができるとも述べています。 「一緒に見て『そうだね、それは本当だと思う？』と言えるコンテンツもあるかもしれない。それが本当かどうかはどうすればわかるでしょうか？」
4. 良い行動を模範とする
子供が親の真似をするのは周知の事実です。そのため、子供たちに適切なスクリーン習慣を奨励するには、少し内省することから始める必要があるかもしれません。
Maryhan 氏は、これに対して気楽なアプローチを推奨しています。 「たとえ、子供たちと少し自虐的な会話をするだけでも、『これに関しては私たち全員が罪を犯しているのに、私は（携帯電話との）関係がそれほどうまくいっていないのです。』といった感じです。」
携帯電話やタブレットは、あらゆる年齢層の人々に常に娯楽の源を提供してきましたが、ジェーン氏は、大人も子供も退屈をもう少し受け入れることで恩恵を受けることができると述べています。
「スクリーン上にいると、私たちは外の世界を見続けます。私たちが自分の内なる世界に入り、宇宙や中距離を見つめると、過去について考えたり、未来を想像したり、創造性を予測したりすることができます。
「だから、子供たちが何もすることがないと抗議しているとき、彼らはただ宇宙を見つめているだけです。それは問題ありません。そして実際、それは良いことなのです。」
5. パニックにならないでください
子育ては決して簡単なことではありませんが、スクリーンが私たちにどのような影響を与えるかを私たちがまだ学んでいない間に、どこにでもスクリーンがある時代に子供を育てるのは非常に心配なことです。
エセックス大学でデジタルコミュニケーションを専門に研究しているトニー・サンプソン博士は、親は道徳的パニックの罠に陥るべきではないと言う。
「不安を抱える親たちは、蔓延するメディアパニックに巻き込まれ、思春期の脳はすべてソーシャルメディア中毒に組み込まれているだけだと考える傾向があります」と彼は言う。
しかし、子供や十代の若者にはいわゆる神経可塑性があり、彼らの脳は大人の脳よりも適応して立ち直るのが得意です。
「ソーシャルメディアがどのように注目を奪うかについて、私たちはよく読んでいます」と彼は言います。
「[しかし]ソーシャルメディアは注目を短くしたり、弱めたりすることはありません。それは注目を捕らえ、商業コンテンツへの関与に向けさせます。
「テクノロジーを積極的に利用することで、創造性、探求、学習の神経可塑性を高めることができます。」
連絡する
あなたはスクリーンタイムを心配している親ですか?子どもたちとこの問題に対処するための措置を講じましたか?
関連トピック
- 1 月 23 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c86e3q5j992o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-15T11:13:40+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/5254/live/0894cae0-803f-11f1-8a74-43d9da26a654.jpg",
    readTime: 7,
  },
  {
    id: "several-flights-diverted-after-plane-blo-233016ba",
    title: "Several flights diverted after plane blocks Gatwick runway",
    titleJa: "飛行機がガトウィック空港の滑走路を遮断し、数便が目的地変更",
    summaryJa: "飛行機がガトウィック空港の滑走路を遮断し、数便が目的地変更- 公開されました",
    bodyOriginal: `Several flights diverted after plane blocks Gatwick runway
- Published
A number of flights were diverted from Gatwick Airport after a plane temporarily blocked one of its runways.
Emergency services met the British Airways plane as a precaution upon landing, following reports of a "technical fault" with the aircraft.
One of the diverted planes, an already-delayed EasyJet flight from Rome to Gatwick, had to land at Stansted airport instead - and subsequently became stuck there because it was unable to find fuel.
Passengers were left on that plane for over two hours in the middle of the night before disembarking.
The BA plane which temporarily blocked the runway at Gatwick Airport reportedly experienced a landing gear issue. BA said the plane landed safely and passengers disembarked normally.
A London Gatwick spokesperson said: "Earlier this morning, the runway was closed for a short period due to a technical issue with an aircraft.
"As a result, a small number of flights were diverted, with the majority later returning to London Gatwick. As always, safety and security is our number one priority."
There were a number of delays to arrivals and departures from Gatwick Airport on Wednesday, although it was not clear if these were connected to the earlier runway closure.
What are my rights if my flight is cancelled or delayed?
- Published5 hours ago
EasyJet apologised "for the inconvenience caused by the diversion and delay in disembarking" its flight which was diverted to Stansted.
"While we worked to make onward arrangements for customers, as no ground handling staff were available for the unscheduled arrival, the aircraft was unable to refuel and so customers disembarked in Stansted and were advised they would be reimbursed for their onward travel," it said.
Passengers were informed EasyJet was struggling to get any fuel to the plane at Stansted. The airline has no arrangement with Swissport which had provided some fuel to another BA plane.
People on the plane got off at Stansted and had to make their own onward travel arrangements and claim back costs later.
Can I claim extra compensation for disruption?
In circumstances when flight disruption is considered to be the airline's fault, you have a number of rights under UK law., external
These apply as long as you are flying from a UK airport on any airline, arriving at a UK airport on an EU or UK airline, or arriving at an airport in the EU on a UK airline.
What you are entitled to depends on what caused the cancellation and how much notice you are given.
If your flight is cancelled with less than two weeks' notice, you may be able to claim compensation based on the timings of the alternative flight you are offered.
The amount you are entitled to also depends on how far you were travelling:
for flights under 1,500km, such as Glasgow to Amsterdam, you can claim up to £220 per person
for flights of 1,500km to 3,500km, such as East Midlands to Marrakesh, you can claim up to £350 per person
for flights over 3,500km, such as London to New York, you can claim up to £520 per person`,
    bodyJa: `飛行機がガトウィック空港の滑走路を遮断し、数便が目的地変更
- 公開されました
ガトウィック空港の滑走路の1つを飛行機が一時的にふさいだため、多くの便が出発地を変更した。
ブリティッシュ・エアウェイズ機に「技術的欠陥」があるとの報告を受け、緊急サービスが着陸時の予防措置として同機に出迎えた。
目的地を変更した飛行機のうちの1機、ローマ発ガトウィック行きイージージェット便はすでに遅延していたが、代わりにスタンステッド空港に着陸する必要があり、その後燃料が見つからずそこで立ち往生した。
乗客は飛行機から降りるまで、真夜中に２時間以上も飛行機内に放置された。
ガトウィック空港で一時的に滑走路を封鎖したBA機は、着陸装置に問題が発生したと伝えられている。 BAは、飛行機は安全に着陸し、乗客は通常通りに降機したと発表した。
ロンドン・ガトウィック空港の広報担当者は「今朝早く、航空機の技術的問題のため滑走路が短期間閉鎖された。
「その結果、少数の便が目的地変更となり、大部分は後にロンドン・ガトウィック空港に戻りました。いつものように、安全とセキュリティは私たちの最優先事項です。」
水曜日にはガトウィック空港の発着に多数の遅延が発生したが、これが早期の滑走路閉鎖と関係があるかどうかは明らかではない。
私のフライトがキャンセルまたは遅延した場合、私の権利はどうなりますか?
- 5 時間前に公開
イージージェットはスタンステッド行きの便を目的地に変更し、「目的地変更と降機の遅れによりご迷惑をおかけしたこと」を謝罪した。
「我々は顧客のためにその後の手配をするよう努めたが、予定外の到着に対応できるグランドハンドリングスタッフがいなかったため、航空機に燃料を補給することができなかったため、顧客はスタンステッドで下機し、その後の渡航費は払い戻されると案内された」と述べた。
乗客らには、スタンステッド空港でイージージェットが航空機に燃料を供給するのに苦労していると知らされた。同航空は、別のBA機に燃料を供給していたスイスポート社との協定を結んでいない。
飛行機に乗っていた人々はスタンステッドで下車し、その後の旅行の手配を自分で行い、後で費用を請求しなければなりませんでした。
中断に対して追加の補償を請求できますか?
フライトの中断が航空会社の過失であるとみなされる状況では、お客様には英国の法律に基づく多くの権利があります。外部
これらは、英国の空港からいずれかの航空会社で出発する場合、EU または英国の航空会社で英国の空港に到着する場合、または英国の航空会社で EU 内の空港に到着する場合に適用されます。
あなたが受け取る権利があるものは、キャンセルの原因と通知がどれくらいの期間であったかによって異なります。
2 週間以内に通知せずにフライトがキャンセルされた場合、提供された代替フライトのタイミングに基づいて補償を請求できる場合があります。
受け取る権利のある金額は、旅行距離によっても異なります。
グラスゴーからアムステルダムなど、1,500km未満のフライトの場合、1人あたり最大220ポンドを請求できます
イーストミッドランズからマラケシュなど、1,500kmから3,500kmのフライトの場合、1人あたり最大350ポンドを請求できます
ロンドンからニューヨークなど、3,500kmを超えるフライトの場合、1人あたり最大520ポンドを請求できます`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c3ryr25gvjdo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-15T10:23:27+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/2d8f/live/9b8ebd00-8009-11f1-bb75-11c541dbc811.jpg",
    readTime: 4,
  },
  {
    id: "asml-rises-5-after-hiking-sales-forecast-8f2be40c",
    title: "ASML rises 5% after hiking sales forecast for second time this year on strong AI chip demand",
    titleJa: "ASML、強いAIチップ需要を受けて今年2度目の売上予測引き上げを受け5%上昇",
    summaryJa: "ASMLは水曜日、顧客がAIチップの生産を拡大し続ける中、今年2回目のガイダンスを引き上げ、予想を上回る四半期決算を報告した。オランダの半導体装置メーカーは、通年の売上高が430億ユーロ（490億ドル）から450億ユーロ、粗利益率が54％から56％になると予想していると述べた。従来は年間純売上高が360億～400億ユーロ、粗利益率が51～53％になると予想していた。",
    bodyOriginal: `ASML on Wednesday raised its guidance for the second time this year and reported stronger-than-expected quarterly results as its customers continue to ramp up production of AI chips.
The Dutch semiconductor-equipment maker said it now expects full-year sales to come in between 43 billion euros ($49 billion) and 45 billion euros, and a gross margin of between 54 and 56%. It previously predicted annual net sales of between 36 billion and 40 billion euros, and a gross margin between 51% and 53%.
The stock jumped over 7% at the market open before slightly paring gains to last trade 4.8% higher. Shares have surged 115% this year.
Here's how ASML did versus LSEG consensus estimates for the second quarter:
- Net sales: 9.3 billion euros versus 8.8 billion euros expected
- Net profit: 2.9 billion euros versus 2.6 billion euros expected
ASML — Europe's most valuable company — is the only company in the world that makes extreme ultraviolet (EUV) lithography machines used to produce the most advanced semiconductors.
CEO Christophe Fouquet said order intake remained "extremely strong" in the first half of the year. That momentum means the company will target adding 30% to its 2026 low NA EUV capacity and 30% to its 2026 Deep Ultraviolet (DUV) immersion capacity, he said.
Chip expansion push
ASML had already raised its guidance last quarter on the continued demand for its highest-end EUV machines. This is expected to remain high as chipmakers expand production capacity to meet the needs of the AI boom.
The company's customers continue to "accelerate their capacity expansion plans," CEO Fouquet said in a Wednesday statement. "This is translating into customer commitments across our product portfolio, providing ASML with increased visibility into longer-term demand."
"ASML is doing a great job in bringing that capacity in, and the firm has several levers to do that," Javier Correonero, senior equity analyst at Morningstar, told CNBC's Ritika Gupta. He said the company was increasing output by optimizing the "cleanroom" space they have in Veldhoven, where they produce the DUV and EUV machines, while also carrying out so-called "fast shipments."
Earlier this week, Taiwan Semiconductor Manufacturing Co (TSMC), one of ASML's largest customers, reported a 68% jump in June sales on the back of strong demand for its chips.
TSMC is planning to add two advanced chip packaging plants in the Chiayi Science Park in southern Taiwan, Reuters reported, citing remarks made by Taiwan's National Science and Technology Council Minister Wu Cheng-wen on Sunday.
UBS analysts said in a July 10 note that the buildout in semiconductor fabrication facilities, as well as AI-driven demand for leading-edge chip production, is expected to help ASML see a stronger second half of the year.
China sales
Despite robust demand, semiconductor stocks have come under pressure as investors question whether the huge AI-driven capital spending can be sustained. ASML also faces tightening restrictions on export controls of its advanced chip equipment.
The stock slumped 6% in April after a bipartisan group of U.S. lawmakers proposed a bill that would cut off ASML's sale of DUV machines to Chinese chip companies and impact its already shrinking sales there. That law still needs to work its way through the U.S. legislative process.
But restrictions can have a counterintuitive effect, Morningstar's Correonero said, and have previously led to a boom in demand as Chinese customers snapped up machines in anticipation of further restrictions. He noted that while ASML is a well-managed company, expectations are quite high.
"There's a lot priced in, and we see it slightly overvalued," the analyst said. "Just to give you an idea, ASML right now is trading roughly at a 50x forward PE, which is in line with the peaks that we saw during Covid times ... Our valuation for ASML implies more like a 35-40x forward PE, which we consider more recent."
Read more
ASML said Wednesday that it continues to expect China to make up around 20% of its total net sales for the year.
"The Chinese market is moving in sync with the overall behavior that we see globally," Chief Financial Officer Roger Dassen said in a transcript of a video interview.
The company said it will provide an update on its longer-term goals at a Capital Markets Day on June 10 next year.
— CNBC's Arjun Kharpal helped contribute to this story.`,
    bodyJa: `ASMLは水曜日、顧客がAIチップの生産を拡大し続ける中、今年2回目のガイダンスを引き上げ、予想を上回る四半期決算を報告した。
オランダの半導体装置メーカーは、通年の売上高が430億ユーロ（490億ドル）から450億ユーロ、粗利益率が54％から56％になると予想していると述べた。従来は年間純売上高が360億～400億ユーロ、粗利益率が51～53％になると予想していた。
株価は市場開始時に7％以上急騰した後、前回取引の4.8％高と比べて若干の上昇幅を保った。株価は今年115％上昇した。
第 2 四半期の ASML と LSEG コンセンサス予測の比較は次のとおりです。
- 純売上高: 予想88億ユーロに対し93億ユーロ
- 純利益: 予想26億ユーロに対し29億ユーロ
ASML — ヨーロッパで最も価値のある企業 — は、最先端の半導体の製造に使用される極端紫外線 (EUV) リソグラフィー装置を製造する世界で唯一の企業です。
CEOのクリストフ・フーケ氏は、今年上半期の受注は引き続き「非常に好調」だったと述べた。この勢いは、同社が2026年の低NA EUV容量を30％、2026年の深紫外線（DUV）浸漬容量を30％増やすことを目標にしていることを意味すると同氏は述べた。
チップ拡張プッシュ
ASMLは、最高級EUV装置に対する継続的な需要を受けて、すでに前四半期にガイダンスを引き上げていた。チップメーカーがAIブームのニーズに応えるために生産能力を拡大する中、この数字は引き続き高水準で推移すると予想される。
フーケ最高経営責任者（CEO）は水曜日の声明で、同社の顧客は引き続き「生産能力拡大計画を加速させている」と述べた。 「これは当社の製品ポートフォリオ全体にわたる顧客のコミットメントに反映されており、ASML は長期的な需要に対する可視性を高めています。」
モーニングスターのシニア株式アナリスト、ハビエル・コレオネロ氏はCNBCのリティカ・グプタに対し、「ASMLはその能力を導入する上で素晴らしい仕事をしており、同社はそれを実現するための手段をいくつか持っている」と語った。同氏は、同社はフェルドホーフェンにあるDUVおよびEUV装置を生産する「クリーンルーム」スペースを最適化することで生産量を増やしていると同時に、いわゆる「高速出荷」も行っていると述べた。
ASMLの最大顧客の1つである台湾積体電路製造（TSMC）は今週初め、同社のチップに対する強い需要を背景に6月の売上高が68％増加したと報告した。
台湾の国家科学技術委員会の呉承文大臣の日曜日の発言を引用してロイター通信が報じたところによると、TSMCは台湾南部の嘉義サイエンスパークに先進的なチップパッケージング工場を2つ追加する計画だという。
UBSのアナリストらは7月10日のメモで、半導体製造施設の増強と最先端チップ生産に対するAI主導の需要がASMLの今年下半期の好調を後押しすると予想していると述べた。
中国販売
堅調な需要にもかかわらず、投資家がAI主導の巨額の設備投資を維持できるかどうか疑問を抱き、半導体株は圧力にさらされている。 ASMLはまた、先端チップ機器の輸出規制の強化にも直面している。
米国の超党派議員グループがASMLによる中国チップ企業へのDUV装置の販売を打ち切り、すでに縮小している中国での売上高に影響を与える法案を提案したことを受け、株価は4月に6％下落した。この法律はまだ米国の立法プロセスを通過する必要がある。
しかし、モーニングスターのコレオネロ氏は、制限は直観に反する効果をもたらす可能性があり、以前はさらなる制限を見越して中国の顧客が機械を買い占めたため、需要が急増したと述べた。同氏は、ASML は適切に管理されている企業である一方で、期待は非常に高いと指摘しました。
同アナリストは「多くのことが織り込まれており、やや過大評価されていると見ている」と述べた。 「参考までに言っておきますが、ASMLは現在、およそ50倍の先物PERで取引されており、これは新型コロナウイルス感染症の時期に見られたピークと一致しています…ASMLに対する当社の評価は、35〜40倍の先物PEを示唆しており、これはより最近のものであると考えています。」
続きを読む
ASMLは水曜日、今年の総純売上高の約20％を中国が占めると引き続き予想していると述べた。
ロジャー・ダッセン最高財務責任者（ＣＦＯ）はビデオインタビューの記録で、「中国市場は世界的に見られる全体的な動きと同期して動いている」と述べた。
同社は、来年6月10日の資本市場デーで長期目標に関する最新情報を発表すると述べた。
— CNBC の Arjun Kharpal がこの記事の寄稿に協力しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/15/asml-2q-earnings-ai-chips-orders.html",
    publishedAt: "2026-07-15T08:11:54+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "midnight-social-media-curfew-proposed-fo-c197394e",
    title: "Midnight social media curfew proposed for UK teens aged 16 and 17",
    titleJa: "英国の16歳と17歳の十代の若者に深夜のソーシャルメディア外出禁止を提案",
    summaryJa: "英国の16歳と17歳の十代の若者に深夜のソーシャルメディア外出禁止を提案- 公開されました",
    bodyOriginal: `Midnight social media curfew proposed for UK teens aged 16 and 17
- Published
Older teenagers in the UK will face an overnight social media curfew, the government has announced - though they will be able to opt out of it by changing their account settings.
It would mean apps such as Instagram, TikTok and YouTube being set to be unavailable by default to 16 and 17-year-olds between midnight and 06:00.
The government also wants "addictive" features such as auto-play and infinite scroll to be set to be disabled, saying - combined with the curfew - the measures will improve teenagers' focus, sleep quality and family life.
However, campaigners such as Ellen Roome, who believes her 14-year-old son Jools Sweeney died in an online challenge gone wrong in 2022, does not think the plan goes far enough as teenagers can switch the setting off.
"I just think it's not good enough really just to have a product you can switch off, it's a bit like offering a 17-year-old a bottle of alcohol and then moving it slightly out of arms reach, they can just drag it back in, I really wish they could go stronger and harder on these things," she told BBC Radio 4's Today programme.
The new plans follow the announcement in June that under-16s in the UK would be banned entirely from a range of platforms.
Online safety minister Kanishka Narayan defended the policy on BBC One's Breakfast programme, saying the combination of the curfew and limiting auto-play features meant that "Britain is already going to be the most robust place in the world when it comes to regulating" tech companies.
Speaking on the Today programme, Alex, who is 17, said while there were questions about whether being able to opt out "defeated the point", he felt it could still help by reminding young people how long they are spending on social apps.
Meanwhile 17-year-old Confidence, who said she often spent up to six hours a day on social media, said she would prefer to opt out of the curfew - adding if people her age are trusted to make decisions about university, they should be able to control their own screen time.
In an earlier statement, Technology Secretary Liz Kendall said the measures would be "crucial in helping young people get the sleep they need, focus on school and college, and spend more quality time with family and friends, all of which are fundamental to building a happy, healthy and fulfilling adult life".
"We want young people to enjoy the benefits of technology while having the tools to make the online world a place where they can thrive."
Laura Trott, the Conservative shadow education secretary, described the plans as a "dog's dinner".
"Either they think 16 and 17-year-olds should be on social media or they don't, but curfews they can simply switch off won't achieve anything," she said.
The government said further measures would be aimed at helping children use AI chatbots safely - including by making providers introduce regular breaks for under-18s.
It says it will aim to lay its new proposed measures in front of Parliament by the end of 2026, with the aim that they take effect alongside its social media ban for under-16s next spring.
But some child safety charities and experts have cast doubt on the effectiveness or promise of a midnight curfew for older UK teens.
"While we welcome these measures for older teens, this latest move is yet another piecemeal set of announcements, not the comprehensive plan for children's safety that's required," said Andy Burrows, chief executive of the Molly Rose Foundation.
He added that Prime Minister Sir Keir Starmer "leaves office having announced a social media ban without a plan" - with his likely successor Andy Burnham to "inherit a series of missed opportunities".
Prof Sonia Livingstone, an expert in children's digital rights at the London School of Economics, said a curfew could harm vulnerable children by limiting their access to social media when they might need it most.
"If it's a curfew on companies using push notifications to wake someone up in the night, absolutely have a curfew," Prof Livingstone told the BBC.
"But if it's a curfew that prevents a child in need of support or help or comfort reaching out to trusted sources in the middle of the night, I think that's quite harmful potentially."
Dame Rachel de Souza, children's commissioner for England, said: "We have to listen to young people. They don't want a ban, but they do want to be protected from addictive, infinite scrolling."
She added: "I want to know more about how the policies, such as a curfew, will be delivered and will be watching closely to make sure they are effective – alongside pushing Ofcom to make full use of its powers to make the online world safer for children."
Which social media platforms will be banned for UK under-16s?
- Published16 June
'One part of the puzzle'
The government trialled a range of possible interventions, including overnight curfews, in the homes of some families across the UK.
It saw 300 teens have their social apps disabled entirely, blocked overnight from 21:00 and 07:00 or capped to one hour's use - with some also seeing no such changes at all - in order to compare their experiences over one month.
In a report published on Tuesday, the government cited its curfew trials as seeing the most sleep benefits, as well as more engaging and communicative family evenings, and a less burdensome set-up for parents.
It was also the most manageable option of the three to enforce, the report said.
"These findings show what parents have been telling us all along: when children spend less time on social media, the benefits are real," Kendall said of the findings.
But Pete Etchells, professor of science communication at Bath Spa University, cautioned against relying too much on them.
"This is a small study that is one part of the puzzle in trying to understand how children and parents will navigate technology restrictions in a practical way," he said.
VPN questions
The proposals outlined by the prime minister follow in Australia's footsteps by banning social media for under-16s in the UK.
Australia's restrictions, which took effect in December, saw a slew of social apps forced to close teens' accounts and prevent them from opening new ones.
But the curbs have been criticised as ineffective, with many teens saying they can still access supposedly banned sites.
This, and questions over the feasibility of age checks for under-16s, has prompted some concern about the UK following suit.
Another point of concern had been suggestions by the government it might consider potential curbs around virtual private networks (VPNs).
On Tuesday, the government - citing findings from research it commissioned, external - said there was little to show VPNs were being used by many children to get around age checks.
Online safety minister Narayan confirmed on Wednesday that at this stage the government would not be making changes to its VPNs policy.
"We have decided not to limit VPNs today and that's the primary conclusion for now but it is something we will continue to review," he said.
Additional reporting by Chris Vallance
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.
Related topics
- Published21 March
- Published15 June`,
    bodyJa: `英国の16歳と17歳の十代の若者に深夜のソーシャルメディア外出禁止を提案
- 公開されました
政府は、英国の年長のティーンエイジャーに対し、一晩中ソーシャルメディアの使用禁止を課すことになると発表したが、アカウント設定を変更することで禁止をオプトアウトすることも可能だという。
これは、Instagram、TikTok、YouTubeなどのアプリが、デフォルトで16歳と17歳に対して午前0時から午前6時まで利用できないように設定されることを意味する。
政府はまた、自動再生や無限スクロールなどの「中毒性」機能を無効に設定することを望んでおり、外出禁止令と組み合わせることで、この措置は十代の若者たちの集中力、睡眠の質、家庭生活を改善すると述べている。
しかし、エレン・ルームさんのような活動家たちは、2022年に14歳の息子ジュールズ・スウィーニーさんがオンラインチャレンジの失敗で死亡したと信じているが、10代の若者が設定をオフにできるため、この計画が十分に進んでいるとは考えていない。
「スイッチをオフにできる製品があるだけでは本当に十分ではないと思います。それは、17歳の子供にアルコールのボトルを勧めて、それを腕の届かないところに少し移動させて、引きずって元に戻すようなものです。私は彼らがこれらのことにもっと強く、より熱心に取り組むことができることを本当に願っています」と彼女はBBCラジオ4の番組「トゥデイ」で語った。
新しい計画は、英国の16歳未満のユーザーがさまざまなプラットフォームから完全に禁止されるという6月の発表に続くものだ。
オンライン安全大臣のカニシカ・ナラヤン氏は、BBC Oneの朝食番組に関する方針を擁護し、外出禁止令と自動再生機能の制限の組み合わせにより、ハイテク企業の規制に関して「英国はすでに世界で最も堅牢な国になるだろう」と述べた。
Todayの番組で、17歳のアレックスさんは、オプトアウトできるのは「的外れ」かどうかという疑問はあるものの、若者たちにソーシャルアプリにどれだけの時間を費やしているかを思い出させることで、それでも役立つ可能性はあると感じたと語った。
一方、ソーシャルメディアに1日最大6時間を費やすことが多かったという17歳のコンフィデンスさんは、外出禁止令を解除したいと述べ、もし同年齢の人々が大学に関する決定を下すのに信頼されているのであれば、彼らは自分のスクリーンタイムをコントロールできるはずだと付け加えた。
リズ・ケンドール技術長官は以前の声明で、今回の措置は「若者が必要な睡眠をとり、学校や大学に集中し、家族や友人と充実した時間を過ごすことを支援する上で極めて重要であり、これらはすべて幸せで健康で充実した成人生活を築く上での基礎となる」と述べた。
「私たちは若者たちにテクノロジーの恩恵を享受しながら、オンラインの世界を成長できる場所にするためのツールを手に入れてほしいと考えています。」
保守党の影の教育担当書記であるローラ・トロット氏は、この計画を「犬の夕食」と表現した。
「彼らは16歳と17歳がソーシャルメディアを利用すべきだと考えているか、そうでないかのどちらかですが、単にスイッチを切るだけの外出禁止令では何も達成できません」と彼女は言う。
政府は、プロバイダーに18歳未満に対する定期的な休憩の導入を義務付けるなど、子供たちがAIチャットボットを安全に使用できるようにすることを目的としたさらなる措置を講じると述べた。
来春の16歳未満に対するソーシャルメディア禁止と並行して発効することを目指し、2026年末までに新たな法案を議会に提出することを目指すとしている。
しかし、一部の児童安全慈善団体や専門家は、英国の年長の十代の若者に対する深夜外出禁止令の有効性や約束に疑問を投げかけている。
モリー・ローズ財団のアンディ・バローズ最高経営責任者（CEO）は、「10代以上の若者に対するこうした措置は歓迎するが、今回の措置はまたしても断片的な発表であり、子どもたちの安全のために必要とされる包括的な計画ではない」と述べた。
同氏は、サー・キア・スターマー首相が「無計画にソーシャルメディアの禁止を発表し辞任」し、後継者となる可能性が高いアンディ・バーナム氏が「逃した一連の機会を引き継ぐ」と付け加えた。
ロンドン・スクール・オブ・エコノミクスの子どものデジタル権利の専門家であるソニア・リビングストン教授は、外出禁止令は最も必要なときにソーシャルメディアへのアクセスを制限し、弱い立場にある子どもたちに悪影響を与える可能性があると述べた。
リヴィングストン教授はBBCに対し、「夜中に誰かを起こすためにプッシュ通知を使用している企業に外出禁止令を課すのであれば、絶対に外出禁止令を設けるべきだ」と語った。
「しかし、サポートや支援、慰めを必要としている子どもが真夜中に信頼できる情報源に連絡することを妨げる外出禁止令であれば、それは潜在的に非常に有害だと思います。」
イングランド児童委員のデイム・レイチェル・デ・ソウザ氏は、「若者の声に耳を傾けなければならない。彼らは禁止を望んでいるわけではないが、中毒性のある無限スクロールから守られることを望んでいる」と語った。
彼女はさらに、「外出禁止などの政策がどのように実現されるのかをもっと知りたいし、子供たちにとってオンラインの世界をより安全にするためにOfcomがその権限を最大限に活用するよう促すと同時に、それらの政策が効果的であることを注意深く監視するつもりだ」と付け加えた。
英国の 16 歳未満の人々に対して禁止されるソーシャル メディア プラットフォームはどれですか?
- 6 月 16 日公開
「パズルの一部」
政府は英国全土の一部の家庭で夜間の外出禁止など、考えられるさまざまな介入を試行した。
この調査では、1か月間の体験を比較するため、300人の10代の若者がソーシャルアプリを完全に無効にし、夜間21時から7時までブロックするか、使用時間を1時間に制限するなどの措置を講じた。中には全くそのような変化が見られなかった人もいた。
火曜日に発表された報告書の中で、政府は、外出禁止令の試験では、睡眠効果が最も高く、家族の夜がより魅力的でコミュニケーションが促進され、親の負担が軽減されたと述べた。
また、これは施行する3つの選択肢の中で最も管理しやすい選択肢でもあったと報告書は述べている。
「これらの調査結果は、親たちが私たちにずっと言い続けてきたことを示している。子どもたちがソーシャルメディアに費やす時間が減れば、その恩恵は本物だということだ」とケンダル氏は調査結果について語った。
しかし、バース・スパ大学のピート・エッチェルズ科学コミュニケーション教授は、それらに頼りすぎないよう警告する。
同氏は、「これは小規模な研究であり、子どもや親が実際的な方法でテクノロジーの制限をどのように乗り越えるかを理解しようとするパズルの一部である」と述べた。
VPN に関する質問
首相が概説した提案は、英国で16歳未満に対するソーシャルメディアを禁止するというオーストラリアの例に倣ったものだ。
オーストラリアの規制は12月に発効し、多数のソーシャルアプリが10代の若者のアカウントを閉鎖し、新たなアカウントを開設することができなくなった。
しかし、この縁石は効果がないと批判されており、多くの十代の若者たちは禁止されているはずのサイトにまだアクセスできると主張している。
このことと、16歳未満に対する年齢確認の実現可能性を巡る疑問により、英国も追随するのではないかとの懸念が生じている。
もう 1 つの懸念点は、仮想プライベート ネットワーク (VPN) に関する潜在的な制限を検討する可能性があるという政府の提案でした。
火曜日、政府は外部に委託した調査結果を引用し、多くの子供たちが年齢確認を回避するためにVPNを使用していることを示す証拠はほとんどないと述べた。
ナラヤン・オンライン安全大臣は水曜日、現段階では政府がVPNポリシーを変更するつもりはないことを認めた。
同氏は「われわれは本日、VPNを制限しないことを決定した。それが現時点での主要な結論だが、今後も検討していく」と述べた。
Chris Vallance による追加レポート
Tech Decoded ニュースレターに登録して、世界のトップのテクノロジー ストーリーやトレンドをフォローしてください。英国外ですか？ここからサインアップしてください。
関連トピック
- 3 月 21 日公開
- 6 月 15 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c982857nlrlo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-15T07:58:47+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/0303/live/654dede0-8024-11f1-bee8-53ce494e1abc.jpg",
    readTime: 9,
  },
  {
    id: "thames-water-returns-to-profit-after-rai-a6e4c57b",
    title: "Thames Water returns to profit after raising bills",
    titleJa: "テムズ・ウォーター、料金値上げ後に黒字に転換",
    summaryJa: "テムズ・ウォーター、料金値上げ後に黒字に転換- 公開されました",
    bodyOriginal: `Thames Water returns to profit after raising bills
- Published
Thames Water has returned to a full-year profit after hiking its customers bills by 40% last year.
The UK's largest water company reported post-tax income of £113m for the 12 months to the end of March, swinging from a £1.51bn post-tax loss the previous year.
However, the firm's net debt also swelled to £18.5bn from £16.8bn as it said it "continued to fund the business through... debt and internally generated cash flows".
Chief executive Chris Weston said: "The progress we have made in turning the company around has meant we are now performing better."
The publication of Thames Water's results comes after the government rejected a proposed rescue deal for the business in June.
Under the terms of the deal, Thames' lenders wanted leniency from future pollution fines in return for writing off £9.4bn of its debt pile and investing new money.
Thames Water said on Wednesday pollution incidents had fallen by 18%. It hit just over half of its performance targets.
The firm said it was below target when it came to customer complaints, which jumped by 77% in a year, with bill complaints making up over three quarters of the total.
The results also reveal how money from its customer bills is not enough to fund the massive upgrades needed to improve its aging and historically underinvested infrastructure, which means it needs to borrow more money.
It added that it has enough debt funding to keep the business going "through to Q4 2026".
Weston told investors on a call on Wednesday its investors "want to see what the new Burnham government thinks before providing more funding".
Labour MP Andy Burnham is expected to become Prime Minister on Monday. He has previously called for Thames Water to be nationalised.
Additional reporting by Simon Jack
Related topics
- Published16 June
- Published15 July 2025`,
    bodyJa: `テムズ・ウォーター、料金値上げ後に黒字に転換
- 公開されました
テムズ・ウォーターは昨年、顧客への請求額を40％値上げした後、通年で黒字に戻った。
英国最大の水道会社は、3月末までの12か月間で税引き後利益が1億1,300万ポンドと報告し、前年の15億1,000万ポンドの税引き後損失から大きく拡大した。
しかし、同社は「負債と内部で生み出されたキャッシュフローを通じて事業資金を供給し続けている」と述べ、純負債も168億ポンドから185億ポンドに膨らんだ。
クリス・ウェストン最高経営責任者（ＣＥＯ）は「会社の立て直しに向けた進歩により、業績も向上している」と述べた。
テムズ・ウォーターの決算発表は、政府が6月に同事業に対する救済協定提案を拒否した後に行われた。
取引条件に基づき、テムズ川の貸し手は94億ポンドの債務の山を帳消しにして新たな資金を投資する代わりに、将来の汚染罰金の減免を求めていた。
テムズ・ウォーターは水曜日、汚染事件が18％減少したと発表した。業績目標の半分強を達成しました。
同社は、顧客からの苦情に関しては目標を下回っており、苦情は1年で77％増加し、請求書に関する苦情が全体の4分の3以上を占めていると述べた。
この結果はまた、老朽化し​​歴史的に投資が不足していたインフラを改善するために必要な大規模なアップグレードの資金として、顧客請求からの資金だけでは十分ではなく、より多くの資金を借入する必要があることも明らかにしている。
また、「2026年第4四半期まで」事業を継続するのに十分な借入資金があると付け加えた。
ウェストン氏は水曜日の電話会議で投資家に対し、投資家は「追加資金を提供する前にバーナム新政権が何を考えているかを見たいと考えている」と語った。
労働党議員アンディ・バーナム氏が月曜日に首相に就任すると予想されている。同氏は以前、テムズ川の国有化を主張していた。
Simon Jack による追加レポート
関連トピック
- 6 月 16 日公開
- 2025 年 7 月 15 日公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c4gygy43103o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-15T07:35:29+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/0067/live/694e25f0-800f-11f1-855c-e18bf6105698.jpg",
    readTime: 2,
  },
  {
    id: "u-s-strikes-iranian-missile-sites-defens-1bfa8255",
    title: "U.S. strikes Iranian missile sites, defense systems and reinstates port blockade",
    titleJa: "米国、イランのミサイル基地と防衛システムを攻撃、港湾封鎖を再開",
    summaryJa: "ホルムズ海峡内およびその周辺のイラン港湾に対する海上封鎖を再開する命令が発効したことを受け、中央軍は火曜日遅く、米軍がイラン目標に対する新たな攻撃を完了したと発表した。午後３時に始まった７時間のストライキは、セントコムはXポストで、ETはホルムズ海峡とイラン沿岸地域付近の数十の軍事目標を攻撃したと述べた。",
    bodyOriginal: `U.S. forces completed another round of strikes against Iranian targets, the Central Command said late Tuesday, as the order to resume its naval blockade of Iranian ports in and around the Strait of Hormuz took effect.
The seven-hour strikes, which had started at 3 p.m. ET, hit dozens of military targets near the Strait of Hormuz and Iranian coastal areas, Centcom said in an X post.
American fighter aircraft, drones, and naval vessels launched precision munitions against Iranian missile and drone sites, naval facilities, and coastal defense systems, further devastating Iran's ability to threaten commercial shipping through the critical waterway, according to Centcom.
The strikes took place as the U.S. naval blockade in the Gulf of Oman resumed at 4 p.m. ET.
In a statement posted on social media later in the day, Brad Cooper, Centcom Commander, said that Iran had "intentionally" targeted civilians and attacked seven commercial ships over the past seven days, resulting in about a dozen crew members killed, missing or injured.
The warring countries have escalated military hostilities in recent days, with Tehran expanding attacks to several Gulf countries. Jordan's Army reportedly said that their air defense system had struck down three missiles from Iran earlier on Wednesday.
In an interview with Fox News that aired Tuesday, President Donald Trump renewed his threats to target Iranian power plants and bridges, unless the Iranians "get to the table and negotiate."
The American blockade of Iranian ports was lifted after the U.S. and Iran struck a temporary ceasefire deal as part of a 14-point memorandum of understanding signed last month. But Trump last week declared the ceasefire was "over" after multiple flare-ups of hostilities in the region and as each side accused the other of violating the terms of the deal.
Trump announced Monday that the U.S. would reimpose the blockade against Iran, as Tehran's efforts to forcefully take control of the strait appear to have ramped back up as the ceasefire falls to the wayside.
To increase pressure on the Iranian regime, the U.S. Treasury said on Tuesday it had imposed new sanctions to dismantle the "illicit shipping empire" of Mohammad Hossein Shamkhani, describing the network as "a major enabler behind Iran's oil exports."
Commercial shipping traffic through the waterway, which was far below prewar levels even as the ceasefire was in effect, sharply dropped in recent days, ship tracking firms found.
Before the U.S. and Israel launched the war against Iran in late February, the strait saw 20% of the world's oil pass through it.
"The Hormuz Strait is OPEN, and will remain OPEN, with or without Iran," Trump insisted in a Truth Social post announcing the blockade was back on.
In the same post, Trump said that the U.S. will start demanding reimbursement "at the rate of 20% on all cargo shipped" through the strait.
The policy proposal met with deep skepticism from energy experts and swift opposition from shipping industry groups, including the United Nations' International Maritime Organization. Critics quickly resurrected recent clips of Trump administration officials declaring that it would be illegal for a country to impose tolls in an international waterway.
One day after announcing the 20% fee plan, Trump reversed course. He claimed on Truth Social on Tuesday morning that he would "replace" the proposed toll with "Trade and Investment Deals that the various Gulf States will be making into the United States."
At the White House later Tuesday, Trump said that he had fielded calls from world leaders who told him "we'd love to do it a different way."
"I like that, actually, because I don't think anybody should be able to charge a fee for the strait," Trump said. "I don't think anybody should be really in that position, but we were doing it as a reimbursement."
He said that he spoke with Saudi Arabia, the United Arab Emirates, Qatar, Bahrain, Kuwait and others. None of those countries has yet revealed plans this week to boost investment in the U.S.`,
    bodyJa: `ホルムズ海峡内およびその周辺のイラン港湾に対する海上封鎖を再開する命令が発効したことを受け、中央軍は火曜日遅く、米軍がイラン目標に対する新たな攻撃を完了したと発表した。
午後３時に始まった７時間のストライキは、セントコムはXポストで、ETはホルムズ海峡とイラン沿岸地域付近の数十の軍事目標を攻撃したと述べた。
セントコムによると、アメリカの戦闘機、無人機、海軍艦艇がイランのミサイルや無人機の拠点、海軍施設、沿岸防衛システムに対して精密弾を発射し、重要な水路を通る商船を脅かすイランの能力をさらに壊滅させた。
攻撃はオマーン湾での米国の海上封鎖が午後4時に再開される中で行われた。 ET。
セントコムのブラッド・クーパー司令官は同日後半にソーシャルメディアに投稿した声明で、イランが「意図的に」民間人を標的にし、過去7日間に7隻の商船を攻撃し、その結果乗組員約12人が死亡、行方不明、負傷したと述べた。
紛争諸国はここ数日軍事的敵対行為を激化させており、イラン政府は湾岸諸国のいくつかへの攻撃を拡大している。ヨルダン軍は水曜日初め、防空システムがイランからのミサイル３発を撃墜したと発表した。
火曜日に放送されたFOXニュースとのインタビューで、ドナルド・トランプ大統領は、イランが「テーブルに着いて交渉」しない限り、イランの発電所や橋を標的にする、と改めて脅迫した。
米国によるイラン港湾封鎖は、先月署名された14項目の覚書の一環として米国とイランが一時停戦協定を結んだことを受けて解除された。しかし、トランプ大統領は先週、この地域で何度も敵対関係が激化し、双方が協定条件に違反していると相手を非難したことを受けて、停戦は「終わった」と宣言した。
トランプ大統領は月曜、停戦が暗礁に乗り上げる中、海峡を力で制圧しようとするイラン政府の取り組みが再び加速しているように見える中、米国がイランに対する封鎖を再び課すと発表した。
イラン政権への圧力を強化するため、米財務省は火曜日、モハマド・ホセイン・シャムハーニー氏の「違法海運帝国」を解体するために新たな制裁を課したと発表し、同ネットワークを「イランの石油輸出を支える主要な要因」であると述べた。
船舶追跡会社によると、この水路を通る商業船舶の交通量は、停戦が発効していたにもかかわらず戦前の水準をはるかに下回っていたが、ここ数日で急激に減少した。
米国とイスラエルが２月下旬に対イラン戦争を開始する前、この海峡は世界の石油の２０％が通過していた。
トランプ大統領は、封鎖再開を発表したトゥルース・ソーシャルへの投稿で、「ホルムズ海峡は開いており、イランの有無にかかわらず、今後も開いたままだ」と主張した。
トランプ大統領は同じ投稿で、米国は海峡を通って輸送される「全貨物の20％の割合」で償還を要求し始めると述べた。
この政策提案は、エネルギー専門家からは深い懐疑の声が上がり、国連の国際海事機関を含む海運業界団体からはすぐに反対された。批評家らは、トランプ政権当局者が国際水路で国が料金を課すことは違法であると宣言する最近の映像をすぐに復活させた。
20％の手数料計画を発表した翌日、トランプ大統領は方針を転換した。同氏は火曜日朝、トゥルース・ソーシャルで、提案されている通行料を「湾岸諸国が米国と締結する貿易・投資協定」に「置き換える」と主張した。
トランプ大統領は火曜日後半にホワイトハウスで、世界の指導者らからの電話に応じて「ぜひ別の方法でやりたい」との電話を受けたと述べた。
「実際、私はそれが気に入っている。誰も海峡の使用料を請求できるべきではないと思うからだ」とトランプ大統領は語った。 「誰も実際にそのような立場にあるべきではないと思いますが、私たちは償還としてそれを行っていました。」
サウジアラビア、アラブ首長国連邦、カタール、バーレーン、クウェートなどと協議したと述べた。これらの国はいずれも今週、米国への投資を拡大する計画をまだ明らかにしていない。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/14/iran-strikes-hormuz-strait-blockade-trump-tolls.html",
    publishedAt: "2026-07-15T05:54:52+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "why-europe-is-suddenly-betting-big-on-dr-8eadf9bc",
    title: "Why Europe is suddenly betting big on drones",
    titleJa: "なぜヨーロッパは突然ドローンに大きく賭け始めたのか",
    summaryJa: "欧州はロシアのウクライナ侵攻に対抗して何年もかけて軍の再建に取り組んできた。現在、投資は大陸の将来の安全保障の中心となると考えられる 1 つの技術、つまりドローンを中心にますます集中しています。過去 2 週間にわたる一連の発表は、その変化がいかに急速に加速しているかを示しています。 NATOは新たなドローン構想を発表し、英国はドローンと対ドローンシステムに数十億ポンドを割り当て、ドイツはウクライナ向けに5万機のドローン調達に動き、防衛技術スタートアップのヘルシングは180億ドルの評価額を確保した。",
    bodyOriginal: `Europe has spent years rebuilding its military in response to Russia's invasion of Ukraine. Now, investment is increasingly converging around one technology that is seen as central to the continent's future security: drones.
A flurry of announcements over the past two weeks shows just how quickly that shift is accelerating. NATO unveiled a new drone initiative, the U.K. earmarked billions of pounds for drones and counter-drone systems, Germany moved to procure 50,000 drones for Ukraine, and defense tech startup Helsing secured an $18 billion valuation.
The developments reflect a broader shift in military planning, with drones and autonomous systems moving from niche battlefield tools to a core part of modern warfare. The trend is creating opportunities not only for drone manufacturers but also for companies developing AI, software, electronic warfare and secure communications.
"Future defence is moving towards a layered battlefield, where, for example, a tank will not simply fire shells; it will also launch drones, receive live targeting data from satellites and [unmanned aerial vehicles], share information across the battlefield, and operate as part of a networked force," Morningstar analyst Loredana Muharremi told CNBC.
Battlefield lessons from Ukraine – alongside Iran's use of low-cost Shahed drones in the Middle East – have shown the importance of relatively inexpensive, AI-enabled drones that can gather intelligence, extend the reach of conventional weapons and increasingly operate autonomously.
How are drones being used in modern warfare?
Those battlefield lessons are now reshaping procurement decisions across Europe.
Last week, NATO Secretary General Mark Rutte said the military alliance would become "drone-ready," as he announced a drone initiative in which allies would invest more than $40 billion in counter-drone capabilities over the next five years.
Drones have "fundamentally altered" the character of modern warfare and have become a "decisive factor" on the battlefield, Rutte said, citing the Russia-Ukraine war as one example.
The U.K. is also investing heavily in autonomous systems. Under its Defence Investment Plan published in late June, the government committed £5 billion ($6.7 billion) to a "UK drone transformation" program aimed at strengthening the country's armed forces.
Germany, meanwhile, is expanding support for Ukraine. On Monday, defense software company Auterion and Ukrainian drone maker Skyfall announced a 90-million-euro order for 50,000 drones equipped with Auterion's operating system from a European NATO member. A source familiar with the matter confirmed to CNBC that the country was Germany.
"This is the first war happening at a time where drones were prevalent enough that they started to play a role," Auterion CEO Lorenz Meier told CNBC.
Software is increasingly defining the battlefield, according to Meier.
Auterion's operating system enables drones to continue striking targets despite electronic jamming, making them more effective in contested environments. "It allows them to dive into a target, even if the target has jammers, where previously they would have lost video signal and missed," Meier said.
It also allows them to strike a target that's below the radio horizon, for example, when a drone descends in a valley. The company plans to introduce software that allows operators to control coordinated swarms of drones rather than piloting each aircraft individually.
While the latest order is intended for Ukraine, Meier said the technology is already attracting interest from armed forces, including those of Germany, Norway, Britain, and France.
Low-cost drones are also increasingly being paired with high-end weapons to improve their effectiveness by distracting or overwhelming enemy air defenses.
Beyond drone makers
The growing use of drones and other autonomous systems is also boosting the demand for the technology needed to coordinate the drones in real time, according to Muharremi. That includes secure communications, battle management software, AI, and satellite-based intelligence, sensors and electronic warfare systems.
"As a result, companies with physical platform scale and exposure across autonomy, air defence, sensors, electronic warfare, software, and space are likely to capture a share of future defence spending," she said.
It comes as European core defense spending has doubled since 2019 and, under NATO's 3.5% target for 2035, could reach about 800 billion euros by 2030 – roughly 2.9 % of GDP – according to McKinsey.
Venture capital investment in defense technology also accelerated sharply in 2025 on both sides of the Atlantic. Deal volumes more than doubled year on year, according to McKinsey, and European defense tech funding rose from around 200 million euros in 2021 to 2.6 billion euros in 2025.
Among the biggest beneficiaries is Munich-based Helsing. On Monday, the company announced a funding round that valued it at $18 billion, cementing its position as one of Europe's best-funded defense technology startups.
Helsing makes drones and underwater surveillance weapons, and builds AI and autonomous software to power these military applications, highlighting how Europe's defense industry is increasingly betting that the future of warfare will depend as much on software and autonomy as on traditional military hardware.`,
    bodyJa: `欧州はロシアのウクライナ侵攻に対抗して何年もかけて軍の再建に取り組んできた。現在、投資は大陸の将来の安全保障の中心となると考えられる 1 つの技術、つまりドローンを中心にますます集中しています。
過去 2 週間にわたる一連の発表は、その変化がいかに急速に加速しているかを示しています。 NATOは新たなドローン構想を発表し、英国はドローンと対ドローンシステムに数十億ポンドを割り当て、ドイツはウクライナ向けに5万機のドローン調達に動き、防衛技術スタートアップのヘルシングは180億ドルの評価額を確保した。
この開発は軍事計画における広範な変化を反映しており、無人機と自律システムはニッチな戦場ツールから現代戦争の中核部分に移行しています。この傾向は、ドローンメーカーだけでなく、AI、ソフトウェア、電子戦、安全な通信を開発する企業にもチャンスをもたらしています。
モーニングスターのアナリスト、ロレダナ・ムハレミ氏はCNBCに対し、「将来の防衛は多層的な戦場に向かって進んでおり、例えば戦車は単に砲弾を発射するだけでなく、無人機を発射し、衛星や（無人航空機）からリアルタイムの照準データを受信し、戦場全体で情報を共有し、ネットワーク化された部隊の一部として活動することになる」と語った。
ウクライナが戦場で得た教訓は、イランが中東で低コストのシャヘド・ドローンを使用していることと並行して、情報を収集し、通常兵器の射程を延長し、ますます自律的に運用できる比較的安価なAI搭載ドローンの重要性を示している。
ドローンは現代の戦争でどのように使用されていますか?
こうした戦場での教訓は現在、ヨーロッパ全土で調達の決定を再構築しつつある。
先週、NATO事務総長のマーク・ルッテは、同盟国が今後5年間で対ドローン能力に400億ドル以上を投資するドローン構想を発表し、軍事同盟は「ドローン対応」になるだろうと述べた。
ルッテ氏は、無人機は現代の戦争の性格を「根本的に変え」、戦場では「決定的な要因」になったと述べ、一例としてロシア・ウクライナ戦争を挙げた。
英国も自動運転システムに多額の投資を行っている。政府は6月末に発表した国防投資計画に基づき、国軍の強化を目的とした「英国無人機変革」プログラムに50億ポンド（67億ドル）を投入した。
一方、ドイツはウクライナへの支援を拡大している。月曜日、防衛ソフトウェア会社オーテリオンとウクライナのドローンメーカースカイフォールは、欧州のNATO加盟国からオーテリオンのオペレーティングシステムを搭載したドローン5万機を9000万ユーロで発注したと発表した。関係筋はＣＮＢＣに対し、その国がドイツであることを認めた。
オーテリオンのロレンツ・マイヤー最高経営責任者（CEO）はCNBCに対し、「ドローンが十分に普及し、ドローンが役割を果たし始めた時期に起きた初めての戦争だ」と語った。
マイヤー氏によると、ソフトウェアは戦場をますます定義づけるようになっています。
オーテリオンのオペレーティング システムにより、ドローンは電子妨害にもかかわらず目標を攻撃し続けることができるため、紛争環境でのドローンの効果がさらに高まります。 「これにより、標的に妨害装置が設置されている場合でも、以前ならビデオ信号が失われて見逃していたであろう標的に飛び込むことが可能になる」とマイヤー氏は語った。
また、ドローンが谷に降下する場合など、電波の地平線の下にある目標を攻撃することも可能になります。同社は、オペレーターが各航空機を個別に操縦するのではなく、ドローンの群れを調整して制御できるソフトウェアを導入する予定だ。
今回の発注はウクライナを対象としているが、マイヤー氏は、この技術はすでにドイツ、ノルウェー、英国、フランスを含む軍隊からの関心を集めていると述べた。
低コストのドローンは、敵の防空を妨害したり圧倒したりすることで効果を高めるために、高性能兵器と組み合わせられることも増えています。
ドローンメーカーを超えて
ムハレミ氏によると、ドローンやその他の自律システムの利用が拡大していることにより、ドローンをリアルタイムで調整するために必要な技術の需要も高まっているという。これには、安全な通信、戦闘管理ソフトウェア、AI、衛星ベースのインテリジェンス、センサー、電子戦システムが含まれます。
「その結果、物理的なプラットフォームの規模と自治、防空、センサー、電子戦、ソフトウェア、宇宙にわたるエクスポージャーを持つ企業が、将来の国防支出のシェアを獲得する可能性が高い」と同氏は述べた。
マッキンゼーによると、欧州の中核的国防支出が2019年以来倍増しており、NATOの2035年までの3.5％目標の下では、2030年までに約8000億ユーロ（GDPの約2.9％）に達する可能性があるという。
防衛技術へのベンチャーキャピタルの投資も、2025 年には大西洋の両側で急激に加速しました。マッキンゼーによると、取引額は前年比で2倍以上に増加し、欧州の防衛技術資金は2021年の約2億ユーロから2025年には26億ユーロに増加した。
最大の恩恵を受けたのはミュンヘンに本拠を置くヘルシングだ。同社は月曜日、180億ドルと評価される資金調達ラウンドを発表し、ヨーロッパで最も資金を集めた防衛技術新興企業の1つとしての地位を固めた。
ヘルシングはドローンや水中監視兵器を製造し、これらの軍事用途を強化するAIや自律型ソフトウェアを構築しており、ヨーロッパの防衛産業が戦争の将来が従来の軍事ハードウェアだけでなくソフトウェアや自律性に依存することへの賭けをますます強めていることを浮き彫りにしている。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/15/drones-defense-europe-autonomous-weapons.html",
    publishedAt: "2026-07-15T05:05:26+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 6,
  },
  {
    id: "oil-rises-as-u-s-continues-to-strike-teh-e05aebf8",
    title: "Oil rises as U.S. continues to strike Tehran, reinstates blockade of Iranian ports",
    titleJa: "米国がテヘラン攻撃を続け、イランの港湾封鎖を再開する中、原油が上昇",
    summaryJa: "米軍がテヘランに対して再度攻撃を実施し、米国がホルムズ海峡近くのイラン港湾の海上封鎖を再開したため、水曜日の不安定な取引の中で原油価格が上昇した。米国ウエスト・テキサス・インターミディエイト先物８月限は１．０１％上昇し、１バレル＝８０．１４ドルとなった。国際ベンチマークであるブレントの９月先物は１．２３％上昇し、８５．７７ドルとなった。",
    bodyOriginal: `Oil prices rose in choppy trading Wednesday as U.S. forces carried out another round of strikes against Tehran and Washington reinstated its naval blockade of Iranian ports near the Strait of Hormuz.
U.S. West Texas Intermediate futures for August delivery rose 1.01% to $80.14 per barrel. September Futures for international benchmark Brent were up 1.23% at $85.77.
U.S. Central Command said late Tuesday stateside that it had carried out another wave of strikes against Iran late Tuesday, targeting dozens of military assets near the Strait of Hormuz and along Iran's coastline in a seven-hour operation.
The attacks, involving fighter aircraft, drones and naval vessels, struck missile and drone facilities, naval assets and coastal defense systems to further degrade Iran's ability to threaten commercial shipping, Centcom said.
The operation started as U.S. forces resumed a naval blockade on vessels traveling to and from Iranian ports earlier in the day.
In a subsequent social media statement, Centcom Commander Brad Cooper said Iran had "intentionally" targeted civilians and attacked seven commercial vessels over the previous week, leaving roughly a dozen crew members dead, missing or injured.
"The latest escalation shows how expectations of a rapid opening of then Strait were premature," said Saul Kavonic, senior energy analyst at Mst Marquee.
"The hostilities and reimposed blockade set the conflict back on an escalatory trajectory," he told CNBC in an email. "Oil could retest $100 if the current intensity of hostilities persist for a few weeks, or head higher still if regional oil infrastructure is targeted."`,
    bodyJa: `米軍がテヘランに対して再度攻撃を実施し、米国がホルムズ海峡近くのイラン港湾の海上封鎖を再開したため、水曜日の不安定な取引の中で原油価格が上昇した。
米国ウエスト・テキサス・インターミディエイト先物８月限は１．０１％上昇し、１バレル＝８０．１４ドルとなった。国際ベンチマークであるブレントの９月先物は１．２３％上昇し、８５．７７ドルとなった。
米中央軍は火曜日遅く、ホルムズ海峡付近とイランの海岸線に沿った数十の軍事施設を標的とし、７時間の作戦でイランに対する新たな攻撃を実施したと米国内で火曜日遅くに発表した。
セントコムによると、戦闘機、無人機、海軍艦艇を使った攻撃は、ミサイルや無人機の施設、海軍資産、沿岸防衛システムを攻撃し、商業船舶を脅かすイランの能力をさらに低下させた。
この作戦は、米軍が同日早朝にイラン港を出入りする船舶に対する海上封鎖を再開したことを受けて開始された。
その後のソーシャルメディア声明で、セントコム司令官のブラッド・クーパー氏は、イランが「意図的に」民間人を標的にし、前週に7隻の商船を攻撃し、乗組員約12人が死亡、行方不明、負傷したと述べた。
「最近の事態の拡大は、当時の海峡が急速に開通するという期待がいかに時期尚早だったかを示している」と、マスト・マーキーの上級エネルギーアナリスト、ソール・カボニック氏は述べた。
「敵対行為と封鎖の再発動により、紛争は再びエスカレートする軌道に戻った」と同氏は電子メールでCNBCに語った。 「現在の戦闘の激しさが数週間続く場合、石油価格は100ドルを再試行する可能性があるが、地域の石油インフラが標的にされる場合はさらに上昇する可能性がある。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/15/oil-prices-today-brent-wti-hormuz-blockade.html",
    publishedAt: "2026-07-15T02:58:47+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "china-posts-slowest-quarterly-growth-sin-23f5c3b4",
    title: "China posts slowest quarterly growth since 2022 as investment slumps, fanning stimulus calls",
    titleJa: "中国は投資低迷で景気刺激策を求める声が高まり、2022年以来最も低い四半期成長率を記録",
    summaryJa: "第２・四半期の中国経済は２０２２年第４・四半期以来の弱いペースで拡大し、消費の低迷が続く一方、投資の減少加速で成長へのひずみが深まる中、政策刺激策を求める声が強まった。国家統計局が水曜日に示した4～6月期の国内総生産（GDP）成長率は4.3％となり、ロイター調査によるエコノミスト予想の4.5％成長を下回り、第1四半期の5％から鈍化した。",
    bodyOriginal: `China's economy in the second quarter expanded at its weakest pace since the fourth quarter of 2022, reinforcing calls for policy stimulus as an accelerating slide in investments deepened the strain on growth, while consumption stayed subdued.
Gross domestic product growth came in at 4.3% in the April to June period, data from the National Statistics Bureau showed Wednesday, missing economists' forecast for 4.5% growth in a Reuters poll, and slowing from 5% in the first quarter.
That second-quarter growth came below Beijing's full-year growth target range of 4.5% to 5%, the least ambitious goal in decades, amid tensions with trade partners, including the U.S. and the European Union, and sluggish domestic demand.
Given the disappointing growth, Tianchen Xu, senior economist at Economist Intelligence Unit, expects stimulus measures to be ramped up in the third quarter, including a policy rate cut to stimulate investment demand.
Urban fixed-asset investment, including real estate development and infrastructure projects, declined 5.7% in the first six months from a year earlier, worse than expectations for a 4.9% drop in a Reuters poll, and steepening from a 4.1% contraction in the first five months.
Xu attributed the steepening investment slump to local governments channeling resources into debt restructuring and a shortage of eligible projects in the pipeline. "Boosting infrastructure investment will be a key focus for stabilizing growth."
In June, China's retail sales grew 1%, rebounding from a 0.6% drop in the prior month and exceeding economists' forecast for a 0.1% fall. Retail sales in May posted their first monthly decline since late 2022, dragged down by tepid demand and merchants' steep discounting.
Industrial output expanded 5.3% in June from a year ago, stronger than the forecast 4.7% growth, and gaining pace from 4.5% expansion in May.
Chinese economy has grappled with a deepening supply-demand imbalance. Robust industrial production and exports tied to the global AI investment boom continue to power headline growth, even as consumption and private investment weakens amid a prolonged property downturn and volatile energy prices.
The statistics bureau noted "acute" imbalance between excess supply and sluggish demand, urging policymakers to step up "counter- and cross-cyclical adjustments."
Urban investment slumped for the first time in decades last year, falling 3.8% from a year earlier, as a prolonged property downturn and tighter constraints on local governments' borrowing have hampered one of China's traditional growth drivers.
Chinese urban unemployment stood at 5% in June. The leadership is targeting an unemployment rate of less than 5.5% over the next five-year period.
— CNBC's Evelyn Cheng contributed to the report.`,
    bodyJa: `第２・四半期の中国経済は２０２２年第４・四半期以来の弱いペースで拡大し、消費の低迷が続く一方、投資の減少加速で成長へのひずみが深まる中、政策刺激策を求める声が強まった。
国家統計局が水曜日に示した4～6月期の国内総生産（GDP）成長率は4.3％となり、ロイター調査によるエコノミスト予想の4.5％成長を下回り、第1四半期の5％から鈍化した。
この第２・四半期の成長率は、米国や欧州連合（ＥＵ）を含む貿易相手国との緊張や内需の低迷を背景に、中国政府の通期成長率目標範囲である４．５─５％を下回り、ここ数十年で最も野心的ではない目標となった。
エコノミスト・インテリジェンス・ユニットのシニアエコノミスト、ティエンチェン・シュウ氏は、期待外れの成長を踏まえ、投資需要を刺激するための政策金利引き下げを含む景気刺激策が第３・四半期に強化されると予想している。
不動産開発やインフラプロジェクトを含む都市部の固定資産投資は１─６月に前年同期比５．７％減少し、ロイター調査の予想（４．９％減）よりも悪化し、１─６月の４．１％減から急減速した。
Xu氏は、投資不振の深刻化は地方政府が債務再編に資源を注ぎ込んでいることと、パイプラインにある適格プロジェクトの不足が原因であると指摘した。 「インフラ投資の促進が成長を安定させるための重要な焦点となるだろう。」
６月の中国の小売売上高は１％増加し、前月の０．６％減から回復し、エコノミスト予想の０．１％減を上回った。 5月の小売売上高は、需要の低迷と加盟店の大幅な値引きに引きずられ、2022年後半以来初めて月間減少を記録した。
6月の鉱工業生産は前年同月比5.3％増と、予想の4.7％増を上回り、5月の4.5％増から勢いを増した。
中国経済は深刻化する需給不均衡に直面している。長引く不動産不況と不安定なエネルギー価格の影響で消費と民間投資が低迷する中でも、世界的なAI投資ブームに伴う堅調な鉱工業生産と輸出が引き続き主要成長を牽引している。
統計局は過剰供給と需要低迷の間の「深刻な」不均衡を指摘し、政策当局者に「カウンターシクリカル調整」と「クロスシクリカル調整」を強化するよう促した。
長引く不動産不況と地方政府の借り入れ制限強化が中国の伝統的な成長原動力の一つを妨げたため、都市投資は昨年、数十年ぶりに前年比3.8％減と数十年ぶりに低迷した。
中国の都市部の失業率は6月に5％だった。指導部は今後５年間の失業率を５．５％未満にすることを目標としている。
— CNBC の Evelyn Cheng がこのレポートに貢献しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/15/china-gdp-retail-sales-investment-june-.html",
    publishedAt: "2026-07-15T02:47:52+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "china-economic-growth-falls-sharply-miss-92628fb4",
    title: "China economic growth falls sharply, missing target",
    titleJa: "中国の経済成長率は大幅に低下、目標未達成",
    summaryJa: "中国の経済成長率は大幅に低下、目標未達成- 公開されました",
    bodyOriginal: `China economic growth falls sharply, missing target
- Published
China's economic growth slowed sharply between the start of April and end of June as weak demand domestically and the impact of the Iran war on oil prices overshadowed the country's strong exports.
Official gross domestic product (GDP) figures showed that the world's second largest economy grew in the second quarter of the year by 4.3%, below Beijing's annual target.
The announcement comes a day after government data showed that China's exports jumped by 27% in June compared to a year earlier.
In March, China cut the target to a range of 4.5%-5%, its lowest economic expansion goal since 1991 - a move some analysts say gives officials more flexibility in managing the economy.
The figures mark the first full quarter of GDP data since the start of the Iran war on 28 February and comes after a rise of 5% in the first quarter.
Separate data released on Wednesday highlighted the economic challenges Beijing is facing at home - including a long-running property market slump and weak consumer spending.
New home prices contracted again, although the 0.1% fall in June was at a slightly slower pace than the previous month.
But retail sales rose by 1% in June, improving from a 0.6% decrease in May.
Customs data for June, which was released on Tuesday, showed that China's tech exports were boosted by soaring global demand for semiconductors to power artificial intelligence (AI) data centres.
Surging demand for Chinese electric vehicles (EVs) also gave a major boost to China's exports - with monthly car exports topping one million for the first time.`,
    bodyJa: `中国の経済成長率は大幅に低下、目標未達成
- 公開されました
中国の経済成長は、国内需要の低迷と原油価格へのイラン戦争の影響が同国の堅調な輸出に影を落としたため、4月初めから6月末にかけて急激に減速した。
公式の国内総生産（GDP）統計によると、世界第2位の経済大国の今年第2四半期の成長率は4.3％で、中国政府の年間目標を下回った。
この発表は、6月の中国の輸出が前年比27％増加したことが政府統計で示された翌日に行われた。
中国は3月に目標を4.5％から5％の範囲に引き下げ、これは1991年以来最低の景気拡大目標であるが、一部のアナリストはこの措置により当局が経済運営に柔軟性を与えると述べている。
この数字は、2月28日のイラン戦争開始以来、初めての四半期全体のGDP統計となり、第1四半期の5％上昇に続くものとなった。
水曜日に発表された別のデータは、長期にわたる不動産市場の低迷や個人消費の低迷など、中国政府が国内で直面している経済的課題を浮き彫りにした。
新築住宅価格は再び縮小したが、６月の０．１％下落ペースは前月より若干鈍化した。
しかし、６月の小売売上高は１％増加し、５月の０．６％減から改善した。
火曜日に発表された6月の税関統計は、人工知能（AI）データセンターの動力源となる半導体の世界的な需要の急増により、中国のハイテク輸出が増加したことを示した。
中国の電気自動車（EV）に対する需要の急増も中国の輸出を大きく押し上げ、月間自動車輸出台数が初めて100万台を突破した。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cd959x4edy8o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-15T02:22:23+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/c8de/live/7e6a3480-7f40-11f1-ba68-9b76167cb04b.jpg",
    readTime: 2,
  },
  {
    id: "brace-for-4-gas-again-how-u-s-iran-tensi-454411a2",
    title: "Brace for $4 gas again: How U.S.-Iran tensions are threatening to end the price break at the pump",
    titleJa: "4ドルのガソリンを再び用意せよ：米国とイランの緊張がどのようにして価格破壊を終わらせる恐れがあるのか",
    summaryJa: "米国人はここ数週間でガスポンプにある程度の安堵感を得ており、インフレを抑制するのに十分だった。米国とイランがホルムズ海峡の制海権を巡って争いを続ける中、この状況は長くは続かないかもしれない。",
    bodyOriginal: `Americans got some relief at the gas pump in recent weeks, enough to slow down inflation. That might not last long as the U.S. and Iran continue to vie for control of the Strait of Hormuz.`,
    bodyJa: `米国人はここ数週間でガスポンプにある程度の安堵感を得ており、インフレを抑制するのに十分だった。米国とイランがホルムズ海峡の制海権を巡って争いを続ける中、この状況は長くは続かないかもしれない。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/brace-for-4-gas-again-how-u-s-iran-tensions-are-threatening-to-end-the-price-break-at-the-pump-343a76e1?mod=mw_rss_topstories",
    publishedAt: "2026-07-15T00:28:00+00:00",
    category: "エネルギー",
    imageUrl: "https://images.mktw.net/im-94092618",
    readTime: 2,
  },
  {
    id: "i-changed-jobs-10-times-in-10-years-to-g-a789c642",
    title: "I changed jobs 10 times in 10 years to get the career I wanted",
    titleJa: "希望のキャリアを得るために10年間で10回転職しました",
    summaryJa: "希望のキャリアを得るために10年間で10回転職しました- 公開されました",
    bodyOriginal: `I changed jobs 10 times in 10 years to get the career I wanted
- Published
Brittany Harris-Nelson describes her career journey so far as being like "a frog moving across lily pads".
"Each step brought me closer to where I ultimately wanted to be, even if the path wasn't always linear," says the 32-year-old.
Today, Harris-Nelson works in a mid-level administrative position at Wake Forest University in Winston-Salem, North Carolina, a role she had long coveted.
She says that to get there, she leapt from one college job to another for close to a decade, using each new role to gain specialised skills that would help with her career advancement.
Overall, she has had 10 different jobs at six different universities over the past decade, starting with several positions when she was still a student, and then three full-time roles.
Harris-Nelson has been an office manager, an admissions counsellor and a student advisor, before reaching her current position as assistant director of student engagement.
While she does not wish to reveal how much she now earns, she says that as she changed jobs her salary didn't increase much. But she got more benefits, such as extra paid leave and bigger pension contributions from her employer.
"Each role helped me build skills and perspectives that I didn't yet have, and together those experiences prepared me for the work I do today," she says.
And she's not alone.
Gen Z job hop more
Industry professionals have identified the emergence of a new work trend among members of Gen Z (those born from 1997–2012), called "lily padding".
It refers to young adults hopping from job to job to try to improve their skills and chances of getting more senior roles and higher pay, rather than staying put in one role at one company. The idea is that they supercharge their employability.
The data seems to back up the phenomenon. The average tenure of a Gen Z employee in the first five years of their career is just 1.1 years, compared with 1.8 years for millennials (those born between 1981 and 1996), and almost three years for older generations. That is according to a 2024 global survey, external of 11,250 workers by recruitment agency Randstad.
This increased mobility in the job market leads to increased salaries, at least in the UK, one 2025 report found., external The study by financial company Wealthify said that people who changed jobs four or more times over the previous decade earned an average of £39,276 versus £30,088 for other workers - a 31% premium.
Those who describe their career strategies as "lily padding" are always on the lookout for the next opportunity.
That's the case of Adam Smiley Poswolsky, who is now a 42-year-old public speaker and author who talks and writes about how to improve workplace cultures.
Based in San Francisco, he says that the traditional career ladder mindset of staying at one company and working your way up didn't apply to him. Instead, he adds that he was looking for "meaning and purpose" in his work and life.
He says that to achieve this he moved between government, non-profit, creative and corporate work, and had a host of jobs in 15 years.
His gigs have included – project leader for Peace Corps, the US government agency that allows young Americans to do voluntary work overseas; and being an English teacher at Harvard University.
Poswolsky has also been a location scout for Warner Bros, a film producer in New York City, worked on Barack Obama's successful 2008 presidential election campaign, a public speaker at the youth-leadership programme, and the fellow of a think tank.
Throughout his career, he says he's sought interesting work and developed skills that helped him get to where he is now - writing books and being a well-paid public speaker.
"In each of my jumps, I was very clear on being ready for something new, but I also knew the skillset I was taking from one experience to the next," he says.
Poswolsky concludes that he's glad he's found flexibility and happiness through this career evolution rather than via a vertical corporate structure. He adds that he has also eventually managed to match the $70,000 (£52,000) he earned at the Peace Corps back when he was 28.
"The skills I learned in that government job helped me as a writer, which then led to me writing a book, which led to my current career as a professional keynote speaker."
'People want variety and pace'
Nicola Grant, chief people officer at UK insurance provider Hiscox, says she's noticed a broader shift in how people think about their careers.
Increasingly, individuals – particularly earlier in their careers, she says - want to build a breadth of experience faster, rather than follow a single, linear path. They are building a portfolio of skills.
She's also found there's a greater willingness among younger employees to move if they feel their development is slowing, or their options are limited.
"Expectations have changed; people want variety, pace and to build skills that will remain relevant," she says, "It's about a desire for growth."
"That ultimately benefits both the individual and the organisation," she adds.
Lucy Kemp, a strategic brand and communications leader at the IT company La Fosse and an employee experience specialist, agrees.
To her, lily padding is the future of work, not just a trend, as people who follow the tactic try to reach more senior roles and higher pay.
"Younger people have seen that loyalty doesn't pay off," says Kemp. "They want to shape their own careers, based on skills they value.
"There's a different sense of achievement compared to older generations, a completely different experience of work," she says.
Kemp also points out that learning in the office from peers isn't occurring as much since the pandemic, with people working from home and AI taking over basic tasks.
Instead, people are looking at skills that will be relevant in five years' time. And they'll get them by switching to a project on another team, a switch to another sector, or a job at another company, Kemp says. "People just want to learn something new and have a purpose."
That's how Harris-Nelson feels. "I see my career as an ongoing journey rather than a destination," she says. "I'm always learning and growing."
Related topics
- Published28 May
- Published30 June`,
    bodyJa: `希望のキャリアを得るために10年間で10回転職しました
- 公開されました
ブリタニー・ハリス・ネルソンは、これまでのキャリアの旅を「スイレンの葉の上を移動するカエル」のようだったと表現しています。
「たとえその道が必ずしも直線的ではなかったとしても、一歩一歩が私を最終的になりたかった場所に近づけてくれました。」と 32 歳の彼は言います。
現在、ハリス・ネルソンはノースカロライナ州ウィンストン・セーラムにあるウェイク・フォレスト大学で中級管理職に就いており、これは彼女が長年切望していた役職である。
彼女は、そこに到達するために、10 年近く大学での仕事を転々とし、新しい役割を担うたびに、キャリアアップに役立つ専門スキルを習得したと語ります。
全体として、彼女は過去 10 年間に 6 つの異なる大学で 10 の異なる仕事に就き、学生時代にいくつかの役職に就き、その後 3 つのフルタイムの役職に就きました。
ハリス・ネルソンは、学生エンゲージメント部門のアシスタントディレクターとしての現在の職に就く前に、オフィスマネージャー、入学カウンセラー、学生アドバイザーを務めてきました。
現在の収入は明かしたくないが、転職しても給料はあまり上がらなかったという。しかし、彼女は追加の有給休暇や雇用主からのより多くの年金拠出金など、より多くの恩恵を受けました。
「それぞれの役割は、私がまだ持っていなかったスキルや視点を構築するのに役立ち、それらの経験が合わさって、今日の仕事の準備を整えてくれました」と彼女は言います。
そして彼女は一人ではありません。
Z世代のジョブホップの増加
業界専門家らは、Z世代（1997年から2012年生まれ）の間で「リリー・パディング」と呼ばれる新たな働き方トレンドが台頭していることを確認した。
これは、1つの会社で1つの役割に留まるのではなく、自分のスキルを向上させ、より上級の役割やより高い給与に就くチャンスを得るために、職を転々とする若者を指します。そのアイデアは、彼らの雇用可能性を大幅に高めることです。
データはこの現象を裏付けているようだ。 Z世代の従業員のキャリア最初の5年間の平均在職期間はわずか1.1年であるのに対し、ミレニアル世代（1981年から1996年生まれ）の平均在職期間は1.8年、それより上の世代ではほぼ3年です。これは、人材紹介会社ランスタッドが従業員1万1,250人を対象とした2024年の世界的な調査によるものである。
金融会社ウェルシファイの調査によると、雇用市場における流動性の向上により、少なくとも英国では給与の増加が見込まれており、過去10年間に4回以上転職した人の平均収入は3万9,276ポンドであるのに対し、他の労働者の平均収入は3万9,276ポンドで、31％のプレミアムとなっている。
自分のキャリア戦略を「百合の詰め物」と表現する人は、常に次の機会を虎視眈々と狙っています。
それが、現在 42 歳の講演者であり、職場文化を改善する方法について講演したり執筆した作家であるアダム・スマイリー・ポズウォルスキーの場合です。
サンフランシスコに拠点を置く彼は、1 つの会社に留まり、昇進していくという従来のキャリアラダーの考え方は自分には当てはまらなかったと語ります。その代わりに、自分の仕事と人生に「意味と目的」を探していたと付け加えた。
これを達成するために、政府、非営利、クリエイティブ、企業の仕事を渡り歩き、15 年間で数多くの仕事を経験したと彼は言います。
彼の仕事には、アメリカの若者が海外でボランティア活動をすることを許可する米国政府機関である平和部隊のプロジェクトリーダーが含まれます。そしてハーバード大学で英語教師をしています。
ポズウォルスキー氏はまた、ワーナー・ブラザーズのロケスカウト、ニューヨーク市の映画プロデューサー、バラク・オバマの成功した2008年大統領選挙キャンペーンに取り組み、若者リーダーシップ・プログラムの講演者、そしてシンクタンクのフェローでもあった。
彼はキャリアを通して、面白い仕事を探し、スキルを磨いて、本を書いたり、高給取りの講演者として現在の地位に到達したと語ります。
「それぞれのジャンプで、何か新しいことへの準備ができていることは非常に明確でしたが、同時に、ある経験から次の経験に至るまでにどのようなスキルセットが必要かも知っていました」と彼は言います。
ポズウォルスキー氏は、垂直的な企業構造ではなく、このキャリアの進化を通じて柔軟性と幸福を見つけられてよかったと結論付けています。最終的には、28歳のときに平和部隊で稼いだ7万ドル（5万2000ポンド）に匹敵する金額に達することができたと付け加えた。
「政府の仕事で学んだスキルは作家としての私に役立ち、それが本を書くことにつながり、それがプロの基調講演者としての現在のキャリアにつながりました。」
「人々は多様性とペースを求めています」
英国の保険会社ヒスコックスの最高人事責任者であるニコラ・グラント氏は、人々のキャリアに対する考え方が広範囲に変化していることに気づいたと語る。
彼女によると、個人は、特にキャリアの初期段階では、単一の直線的な道をたどるのではなく、幅広い経験をより早く構築したいと考えています。彼らはスキルのポートフォリオを構築しています。
彼女はまた、若い従業員の間で、自分の成長が遅れている、または選択肢が限られていると感じた場合、異動する意欲がより高いことも発見しました。
「期待は変わりました。人々は多様性、ペース、そして時代に通用するスキルを身につけることを望んでいます。それは成長への欲求に関するものです。」と彼女は言います。
「それは最終的に個人と組織の両方に利益をもたらします」と彼女は付け加えた。
IT企業ラ・フォッセの戦略的ブランドおよびコミュニケーションリーダーであり、従業員エクスペリエンスのスペシャリストでもあるルーシー・ケンプ氏もこれに同意する。
彼女にとって、ユリの詰め物は単なるトレンドではなく、仕事の未来であり、この戦術に従う人々はより上級の役割とより高い給料を獲得しようとしているからです。
「若い人たちは、忠誠心が報われないことを知っています」とケンプ氏は言う。 「彼らは、自分が大切にしているスキルに基づいて、自分のキャリアを形成したいと考えています。
「上の世代とは異なる達成感があり、仕事の経験も全く異なります」と彼女は言う。
ケンプ氏はまた、パンデミック以降、人々が在宅勤務をし、AIが基本的なタスクを引き継いでいるため、オフィスで同僚から学ぶことはそれほど行われていないと指摘した。
代わりに、人々は 5 年後に役立つスキルに注目しています。そして、別のチームのプロジェクトに切り替えるか、別のセクターに切り替えるか、別の会社に就職することで、それらを獲得できるだろうとケンプ氏は言う。 「人々はただ何か新しいことを学び、目的を持ちたいだけなのです。」
それがハリス・ネルソンの気持ちです。 「私は自分のキャリアを目的地ではなく、進行中の旅だと考えています」と彼女は言います。 「私は常に学び、成長しています。」
関連トピック
- 5 月 28 日発行
- 6 月 30 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/ce8kxgpe3kdo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-14T23:04:15+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/b112/live/176aa4b0-7c32-11f1-b976-0b9c15b0ccfc.jpg",
    readTime: 8,
  },
  {
    id: "buy-now-pay-later-rules-to-bring-refunds-d5fa440f",
    title: "Buy Now Pay Later rules to bring refunds and rejections",
    titleJa: "今すぐ購入して後で払い戻しと拒否を行うためのルール",
    summaryJa: "今すぐ購入して後で払い戻しと拒否を行うためのルール- 公開されました",
    bodyOriginal: `Buy Now Pay Later rules to bring refunds and rejections
- Published
Shoppers using Buy Now Pay Later (BNPL) services have stronger rights but some will be refused loans, as new rules come into effect.
From Wednesday, BNPL lenders must have regulator approval to operate, giving shoppers more access to refunds and independent rulings on unresolved complaints if things go wrong.
Providers such as Klarna and Clearpay have become huge operators allowing consumers to pay in interest-free instalments, but campaigners have often described the wider sector as an unregulated Wild West.
But there are fears that new affordability checks on each BNPL transaction will leave some blocked for the first time, pushing them towards "thrilled" loan sharks instead.
"While regulation is clearly needed and welcomed, our recent research found that nearly half of those likely to be rejected have not missed a BNPL payment," said Kate Pender, chief executive of not-for-profit Fair4All Finance, which promotes fair and accessible financial services.
"The need for credit doesn't just disappear when you can't access it and people are often pushed towards more expensive or unregulated alternatives."
What's changing under new rules
Only lenders authorised by the Financial Conduct Authority (FCA) will now be able to offer BNPL services, bringing them more in line with credit card providers and banks offering loans.
It also means:
Customers can now refer new unresolved complaints about BNPL services to the Financial Ombudsman Service (FOS) for independent adjudication. The FOS expects to deal with about 2,000 cases by the end of March
Consumers can claim for refunds and compensation for faulty goods costing more than £100 from the BNPL provider (known as section 75), as is already the case with items bought on a credit card
Shoppers must pass an instant and automatic test that they can repay the loan, otherwise the purchase via BNPL will be blocked
Borrowers must get clear upfront information about the loan such as what happens if a payment is missed, and be directed to free debt advice if they are in financial difficulty
Regulators say stricter regulation will prevent people from splashing out on something unaffordable in a few clicks, taking on too much debt and being caught out by late payment fees.
But Pender estimated 10% to 30% of BNPL users would fail "conservative" affordability checks, which are designed by each lender. This could leave many unable to buy the essentials they needed.
Loan sharks would be "thrilled at the prospect", she told BBC News, with younger people or those who had repayment issues in the past among those more likely to be rejected.
BNPL has proved particularly popular with 18 to 24-year-olds, although it has widespread use among all age groups.
'It didn't feel like debt'
Many debt charities have welcomed the changes, which they say have come after years of delay. They are still urging people to pause before buying anything via BNPL, to consider whether they would have bought it even if it was not available on credit.
They point out that some retailers' in-house BNPL products will fall outside of the new regulation.
Advice service Money Wellness said its figures suggest people were increasingly spreading smaller purchases across multiple BNPL agreements rather than using the product for occasional high-value items.
"Our concern isn't Buy Now Pay Later itself. It's what can happen when people begin relying on multiple forms of credit simply to make ends meet," said Matthew Sheeran, its external relations manager.
Tim Riesner was among those who took out various loans, including BNPL, only to face problems when his life changed.
"It didn't feel like debt. It felt like convenience. You're buying something online and it says 'split it, pay later'. You think you're being sensible. But you can have multiple plans running at once," he said.
"Before you know it, it's thousands. Add in loans, credit cards, bits of finance here and there, and suddenly I owed £24,000."
His finances unravelled after having to give up well-paid work in construction after suffering problems with his eyesight.
"Nobody should have any sympathy for me at all. I'm an adult. I knew what I was doing. The responsibility lies with me. However, advertising is very seductive. It draws you in, because the society that we live in is the society that says you can have it, and you can have it right now," he told the BBC.
After a tough and dark period, he spoke to charity Business Debtline, where staff helped him to go through his debts, organise a Debt Relief Order, and he is now well on his way to being debt-free.
Jack Sporcic, debt adviser at National Debtline, said: "We are urging consumers to treat Buy Now Pay Later in exactly the same way as any other form of borrowing.
"We often see people using Buy Now Pay Later for everyday essentials such as food, energy bills and household basics."
Bill debt soars but many don't know help is available
- Published10 June
One million more UK homeowners set to face higher mortgages
- Published7 July
How to change bank, energy or broadband provider and save money
- Published2 days ago
Credit reference agency Experian, which already receives data voluntarily from some providers estimated that more than 100 million BNPL transactions were made by 8.5 million customers in 2025, worth more than £7bn in spending.
Of that spending, 98.5% of balances were repaid on time, it said.
Leading BNPL providers have supported regulation of the sector, albeit with calls to allow them to innovate.
"The FCA's rules largely formalise what we already do - we run affordability checks, show costs upfront and report to credit reference agencies," said a spokesman for Klarna, which says the average age of its customers is 38.
"Interest-free buy now pay later is a simpler, fairer, lower-cost alternative to revolving credit. Robust regulation that gives consumers added confidence and strengthens their access to protections is a good thing."`,
    bodyJa: `今すぐ購入して後で払い戻しと拒否を行うためのルール
- 公開されました
Buy Now Pay Later (BNPL) サービスを利用する買い物客にはより強力な権利が与えられますが、新しい規則が施行されると一部の買い物客はローンを拒否されます。
水曜日から、BNPLの貸し手は営業するには規制当局の承認が必要となり、買い物客は事態が悪化した場合に返金や未解決の苦情に対する独立した裁定を受けやすくなる。
KlarnaやClearpayなどのプロバイダーは、消費者が無利息の分割払いを行えるようにする巨大事業者となったが、活動家らは、この業界全体を規制のない未開拓の西部とよく表現する。
しかし、各BNPL取引に対する新たな手頃な価格チェックにより、一部の取引が初めてブロックされ、代わりに「興奮した」高利貸しに誘導されるのではないかとの懸念がある。
公平で利用しやすい金融サービスを推進する非営利団体フェア４オール・ファイナンスの最高経営責任者ケイト・ペンダー氏は、「規制は明らかに必要であり、歓迎されているが、最近の調査では、拒否される可能性が高い人の半数近くがＢＮＰＬの支払いを逃していないことが判明した」と述べた。
「クレジットにアクセスできなくなっても、クレジットの必要性は消えるわけではなく、人々はより高価な、または規制されていない代替手段に駆り立てられることがよくあります。」
新しいルールの下で何が変わるのか
金融行動監視機構（FCA）によって認可された貸し手のみがBNPLサービスを提供できるようになり、ローンを提供するクレジットカードプロバイダーや銀行とより連携することになる。
また、次のような意味もあります。
顧客は、BNPL サービスに関する新たな未解決の苦情を独立した裁定のために金融オンブズマン サービス (FOS) に照会できるようになりました。 FOS は 3 月末までに約 2,000 件の事件に対処すると予想している
クレジットカードで購入した商品の場合と同様に、消費者はBNPLプロバイダー（セクション75として知られる）に対して100ポンドを超える欠陥商品の返金と補償を請求できます。
買い物客はローンを返済できるかどうかの即時自動テストに合格する必要があります。合格しないと、BNPL 経由での購入がブロックされます。
借り手は、支払いが滞った場合に何が起こるかなど、ローンに関する明確な情報を事前に入手し、経済的に困難に陥った場合は無料の借金相談に案内される必要があります。
規制当局は、規制を強化することで、人々が数回クリックするだけで手の届かないものにお金をはねたり、多額の借金を抱えたり、延滞料を徴収されたりすることを防ぐことができると述べている。
しかし、ペンダー氏は、BNPL利用者の10～30％が、各金融機関が設計した「保守的な」手頃な価格チェックに合格しないと推定した。これにより、多くの人が必要な必需品を購入できなくなる可能性がある。
融資を断られる可能性が高いのは、若い人や過去に返済問題を抱えた人たちで、高利貸しは「その見通しに興奮している」だろうと彼女はBBCニュースに語った。
BNPL は、すべての年齢層に広く使用されていますが、特に 18 歳から 24 歳の間で人気があることがわかっています。
「借金という感じはしなかった」
多くの債務慈善団体はこの変化を歓迎しており、何年も遅れてようやく実現したとしている。彼らは依然として、BNPL経由で何かを購入する前に立ち止まり、たとえクレジットで購入できなかったとしても購入するかどうかを検討するよう人々に呼びかけている。
彼らは、一部の小売業者の自社BNPL製品は新たな規制の対象外になると指摘している。
アドバイスサービスのマネーウェルネスは、その数字は、人々が時々高額な商品のために製品を使用するのではなく、複数のBNPL契約にまたがって少額の購入をますます分散していることを示唆していると述べた。
同社の対外関係マネージャー、マシュー・シーラン氏は「われわれの懸念は、今すぐ購入して後で支払うということ自体ではない。人々が単に家計をやりくりするために複数の信用形態に依存し始めたときに起こり得ることだ」と述べた。
ティム・リースナー氏も、BNPL を含むさまざまなローンを組んだものの、人生が変わったときに問題に直面した人の一人でした。
「借金とは感じませんでした。便利だと感じました。オンラインで何かを購入すると、『分割して後で支払い』と表示されます。自分は賢明であると思われます。しかし、一度に複数のプランを実行することはできます」と彼は言いました。
「気づけば、その額は数千ポンドになっています。ローン、クレジット カード、あちこちの金融を加えると、突然 24,000 ポンドの借金を負うことになりました。」
視力の問題に悩まされ、建設業での高賃金の仕事を断念しなければならなくなった後、彼の経済は破綻した。
「誰も私に同情してはいけない。私は大人だ。自分が何をしていたかはわかっていた。責任は私にある。しかし、広告はとても魅惑的だ。広告は人を引き込む。なぜなら、私たちが住んでいる社会は、広告を手に入れることができ、今すぐ手に入れることができるという社会だからだ」と彼はBBCに語った。
厳しく暗い時期を経た後、彼は慈善団体ビジネス・デブトラインに相談し、そこでスタッフが彼の借金を整理し、債務救済命令を組織するのを手伝ってくれた。そして現在、彼は無借金生活への道を順調に進んでいる。
ナショナル・デットラインの債務アドバイザー、ジャック・スポーシック氏は、「消費者に対し、今すぐ購入して後で支払うサービスを他の借り入れとまったく同じように扱うよう促している。
「食料品、光熱費、家庭用品などの日用品に、今すぐ購入して後で支払うサービスを利用している人をよく見かけます。」
請求書の借金は急増するが、多くの人は助けが利用できることを知らない
- 6 月 10 日発行
さらに100万人の英国の住宅所有者が住宅ローンの高額化に直面する見通し
- 7 月 7 日に公開
銀行、電力会社、ブロードバンドプロバイダーを変更してお金を節約する方法
- 2 日前に公開
すでに一部のプロバイダーから自発的にデータを受け取っている信用照会機関エクスペリアンは、2025年には1億件を超えるBNPL取引が850万人の顧客によって行われ、支出額は70億ポンド以上に相当すると推定している。
この支出のうち残高の98.5％が期日通りに返済されたという。
主要なBNPLプロバイダーは、イノベーションを許可するよう求めながらも、この分野の規制を支持してきました。
顧客の平均年齢は38歳だというクラナ社の広報担当者は、「FCAの規則は、われわれがすでに行っていることをほぼ形式化したものである。われわれは手頃な価格の調査を実施し、費用を前もって提示し、信用調査機関に報告する」と述べた。
「無利子で今すぐ購入して後で支払うという方法は、リボ払いクレジットに代わる、よりシンプルで公平、低コストの代替手段です。消費者にさらなる自信を与え、保護へのアクセスを強化する強力な規制は良いことです。」`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c9q283r9px3o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-14T23:01:57+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/d55c/live/e2e009b0-7ec0-11f1-8439-ebc9c5f19300.jpg",
    readTime: 8,
  },
  {
    id: "heating-oil-customers-to-get-compensatio-73703af8",
    title: "Heating oil customers to get compensation after price hikes",
    titleJa: "灯油の顧客、値上げ後に補償金を受け取る",
    summaryJa: "灯油の顧客、値上げ後に補償金を受け取る- 公開されました",
    bodyOriginal: `Heating oil customers to get compensation after price hikes
- Published
Heating oil customers who had their orders cancelled and prices raised when the US-Israel war with Iran broke out will get compensation, the competition watchdog has said.
Some 1,700 households were forced to "re-order at significantly higher prices or go without fuel" costing them up to £350, the Competition Markets Authority (CMA) said.
Some suppliers have agreed to compensate customers and the regulator is planning legal action against those who have so far refused to do so, it added.
The UK and Ireland Fuel Distribution Association (UKIFDA), which represents heating oil suppliers, said "there were a small number of cases found which require redress".
Wholesale oil prices jumped from around $70 a barrel at the start of Iran war in February to almost $120 a barrel by the end of March as the conflict disrupted the transportation and production of energy in the region.
UK heating oil prices also jumped around this time. The CMA said on Wednesday that "average retail prices were, at their peak, 92% higher".
The CMA's investigation into the heating oil market found the price increases after the Iran war largely reflected rising wholesale costs and suppliers have not profited materially from the crisis.
However, it concluded heating oil customers are not as well protected as those connected to the energy grid.
It has recommended new regulations over how prices are quoted and cancellations are handled as well as "better support for vulnerable consumers".
Chancellor Rachel Reeves said: "It is reassuring to know it is a competitive market but the lack of protection for these households does concern me so we will look very seriously at what can be done."
UKIFDA chief executive Ken Cronin said: "We will work with all government bodies on the recommendations set out in this report."
Meanwhile, the CMA has not said how many suppliers have agreed to compensate customers for cancelled orders, how many customers will receive a pay out, or how much they will get.
"Those who paid more to replace their cancelled order will receive a payment covering the difference, while those who did not buy replacement oil will have their original orders honoured at the agreed price," it said.
"[We are] preparing to take court-based enforcement action against firms that fail to compensate customers voluntarily," it added.
The BBC understands more details will be provided once the scheme is up and running.
The CMA's report on the heating oil sector follows a four-month investigation launched in March.
Those who use heating oil often store it in a tank outside their property and are among the first to feel the impact of rising prices.
Some 1.5 million households depend on heating oil, but do not have the same consumer protections as electricity and gas customers, according to the CMA.
Most of those are in Northern Ireland, where the watchdog says 60% of households rely on it.
'Punished for doing the sensible thing'
Anthony Maines, 31, from Seaton Delaval in Northumberland, said he had paid £463.83 for 700 litres of heating oil on 28 February.
He placed the through a broker when he saw the US and Israel first attacked Iran, but says the order was cancelled a few days later.
He says he was then forced to reorder 500 litres of oil for around £700 through a different broker.
He says he decided to lock in the cheaper price at the start of the conflict because he predicted the war would cause prices to rise.
Anthony agrees with the CMA's approach, especially after his experience.
"It felt like I was being punished for doing the sensible thing," he says.
He received a partial resolution through his broker who agreed in May to honour the original price he paid at the end of February, but by then he had already paid elsewhere at a higher price for his oil.
- Published16 March
- Published10 March`,
    bodyJa: `灯油の顧客、値上げ後に補償金を受け取る
- 公開されました
米国・イスラエルとイランの戦争勃発時に注文がキャンセルされ、価格が値上げされた灯油の顧客は補償を受けることになると競争監視団体は発表した。
競争市場庁（CMA）によると、約1,700世帯が「大幅に高い価格で再注文するか、燃料なしで生活する」ことを余儀なくされ、最大350ポンドの費用がかかったという。
一部の供給業者は顧客への補償に同意しており、規制当局はこれまでに補償を拒否した業者に対する法的措置を計画していると付け加えた。
暖房油供給業者を代表する英国・アイルランド燃料流通協会（UKIFDA）は、「救済が必要な事例が少数ながら見つかった」と述べた。
紛争により地域内のエネルギー輸送と生産が混乱したため、卸売原油価格は2月のイラン戦争開始時には1バレルあたり約70ドルだったが、3月末には1バレルあたり120ドル近くまで上昇した。
英国の暖房油価格もこの時期に急騰した。 CMAは水曜日、「平均小売価格はピーク時に92％高かった」と発表した。
CMAによる暖房油市場の調査では、イラン戦争後の価格上昇は主に卸売コストの上昇を反映しており、供給業者は危機から大きな利益を得ていないことが判明した。
しかし、灯油の顧客はエネルギー網に接続されている顧客ほど十分に保護されていないと結論付けた。
価格の見積もりやキャンセルの処理方法に関する新たな規制のほか、「弱い立場にある消費者へのサポートの強化」を勧告した。
レイチェル・リーブス財務大臣は、「競争の激しい市場であることを知って心強いが、これらの世帯への保護が欠如していることは懸念しているので、何ができるかを非常に真剣に検討する」と述べた。
UKIFDAのケン・クローニン最高経営責任者（CEO）は「我々はこの報告書に記載された勧告に基づき、すべての政府機関と協力する」と述べた。
一方、CMAは、キャンセルされた注文に対する顧客への補償に同意したサプライヤーの数や、支払いを受ける顧客の数、あるいは報酬額については明らかにしていない。
「キャンセルされた注文を交換するためにより多くの金額を支払った人は、その差額をカバーする支払いを受け取るが、交換用オイルを購入しなかった人は、合意された価格で元の注文が尊重される」と同社は述べた。
「顧客への自主的な補償を怠った企業に対して、裁判所に基づく強制措置を講じる準備を進めている」と付け加えた。
BBC は、この計画が開始され、実行され次第、より詳細な情報が提供されることを理解しています。
暖房油セクターに関するCMAの報告書は、3月に開始された4か月にわたる調査を経て発表された。
灯油を使用する人は、自宅の敷地外にあるタンクに灯油を保管していることが多く、価格高騰の影響を最初に感じる人たちです。
CMAによると、約150万世帯が灯油に依存しているが、電気やガスの顧客と同様の消費者保護を受けていない。
そのほとんどは北アイルランドにあり、監視機関によると、世帯の60％が北アイルランドに依存しているという。
「良識あることをしたから罰せられる」
ノーサンバーランド州シートン・デラバル在住のアンソニー・メインズさん（31）は、2月28日に灯油700リットルの代金として463.83ポンドを支払ったと語った。
米国とイスラエルが最初にイランを攻撃したのを見て、ブローカーを通じて注文を出したが、数日後に注文はキャンセルされたという。
その後、別のブローカーを通じて500リットルの石油を約700ポンドで再注文することを強いられたという。
同氏は、戦争が価格の上昇を引き起こすと予測したため、紛争開始時に安い価格を固定することにしたと述べた。
アンソニーは、特に自身の経験を踏まえて、CMA のアプローチに同意します。
「分別あることをしたことで罰を受けているように感じました」と彼は言う。
同氏はブローカーを通じて部分的な解決策を受け取り、ブローカーは2月末に支払った元の価格を尊重することに5月に同意したが、その時までにすでに別の場所で原油のより高い価格を支払っていた。
- 3 月 16 日公開
- 3 月 10 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cy494yypnv3o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-14T23:00:41+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/6cb5/live/a97b22b0-7f95-11f1-ac71-510b51a60620.jpg",
    readTime: 4,
  },
  {
    id: "from-wimbledon-towels-to-scotch-what-ind-943a6cf0",
    title: "From Wimbledon towels to Scotch: What India-UK trade deal could mean for shoppers",
    titleJa: "ウィンブルドンのタオルからスコッチまで：インドと英国の貿易協定が買い物客に何を意味するか",
    summaryJa: "ウィンブルドンのタオルからスコッチまで：インドと英国の貿易協定が買い物客に何を意味するか- 公開されました",
    bodyOriginal: `From Wimbledon towels to Scotch: What India-UK trade deal could mean for shoppers
- Published
In the offices of Welspun Living, the Indian company that makes championship towels for Wimbledon, preparations have been gathering pace to take full benefit of the India-UK free trade agreement (FTA) that came into effect on Wednesday.
The home textile manufacturing giant, among India's largest, supplies bedsheets and towels to several major British high-street retailers like John Lewis and Tesco among others.
"Many of these brands have been in India in recent weeks to chart a business roadmap for the next few years. We typically did joint forward planning only for our US customers, but now, with the deal, it's happening with UK clients too," Dipali Goenka, CEO of Welspun Living, told the BBC.
"In fact, as we speak, our supply chain team in London is sitting in the John Lewis office."
The FTA between the world's fifth and sixth largest economies removes or reduces tariffs on 99% of Indian exports to the UK and 90% of UK imports into India.
The British government has called it "the UK's biggest and most economically significant bilateral trade pact" since leaving the EU, with its GDP estimated to increase by 0.13%, equivalent to £4.8bn ($6.4bn), and India's by 0.06%, or £5.1bn per year in the long run because of the deal.
Labour-heavy sectors like textiles, garments, footwear, cars and marine products are counting on the agreement's implementation to spur business growth
"I'm expecting our exports to the UK to now grow in double digits," Goenka said.
She adds that India was at a disadvantage to countries like Bangladesh and Pakistan because their exports entered the UK duty-free through the Developing Countries Trading Scheme (DCTS), while India paid 12% tariffs.
But that will now change.
"If you look at just home textiles, Pakistan's share of UK exports are at around 55%, whereas India's is just 6-7%. That's the gap we can finally cover."
The pact could also be a tipping point for British alcohol and spirits companies.
The reduction of customs duties on Scotch whisky from 150% to 75% immediately and then gradually to 40% over 10 years is a "real shift, not a small tweak", says Avneet Singh of Modern Drinks Pvt Ltd, an import house based in the capital Delhi.
How much this boosts imports will become clearer in the coming months, says Singh, though he sees momentum building ahead of the new terms of trade taking effect.
"The focus has been on getting the operational side ready. That means working closely with UK suppliers to ensure certificates of origin and other trade documentation are in place, reviewing customs and compliance requirements, and co-ordinating with logistics and clearing partners so shipments can benefit from the revised tariff structure from day one," Singh said.
So far, it's been a period of "careful preparation rather than rapid expansion", he says. Bigger changes will come once businesses see the actual savings on imported goods.
Beyond these few pockets of the industry though, the overall impact of the deal could be "incremental rather than transformational", according to trade experts.
Data from the Delhi-based Global Trade Research Initiative (GTRI) think-tank shows India exported $13.4bn worth of goods to the UK in the financial year 2025-2026, yet more than half of these exports entered the country duty-free under its most favoured nation regime.
On the import side, India imported $11.7bn from the UK, and over 45% consisted of silver, which remains on India's exclusion list and is outside the agreement.
"The real test is whether products that previously faced UK tariffs of 4-16% - such as textiles, garments, footwear, carpets, cars, seafood, grapes and mangoes - see higher export orders, larger export volumes and better profit margins. Those indicators will provide the clearest evidence of the agreement's success. The FTA's impact should become visible over the next one to three years," Ajay Srivastava of GTRI told the BBC.
But several unresolved challenges, such as the UK maintaining tariffs on steel imports above a specific quota to protect domestic producers, could prove to be impediments to utilising the full scope of the deal, according to Srivastava.
The UK's proposed carbon tax (called CBAM, external) could also reduce some of the FTA gains, he adds, because even if tariffs "fall to zero under the FTA, carbon-related border charges could increase the effective cost of Indian exports in sectors covered by the CBAM, creating new trade frictions".
There are also other non-tariff barriers that continue to pose challenges.
Historically India's utilisation of FTAs has been low because small businesses are often unaware of the new rules. As a result, only about 20-30% of India's eligible exports are estimated to use FTA preferences even though import-side utilisation rates are much higher.
For example, an Indian garment exporter must actively tell a UK buyer that the import duty on shirts has fallen from 12% to zero and renegotiate prices or contracts accordingly.
Many will need training to comply with origin requirements and documentation so they can claim preferential tariffs.
"The government and industry associations will have to be proactive in dealing with these issues because otherwise tariff reductions will not automatically translate into higher exports," says Srivastava.
Yet, for India this is an opportunity that comes at the right time, especially in certain industries such as ready-made garments (RMG), according to CareEdge Research.
China holds the largest market share in UK's RMG imports; however, it has continued to lose market share due to declining competitiveness and higher labour costs. Additionally, brands are also looking to diversify sourcing from countries like Bangladesh which was gripped by socio-political turmoil until recently.
"In such a scenario, India is expected to double its market share from 6% in 2024 to 12% in the UK's RMG import in the near to medium term," CareEdge said in a report.
Overall bilateral trade could also increase by 15% every year, higher than the current growth rate of 10-12%, according to CareEdge, with consumers from both sides broadly benefiting from improved product quality and broader choice.
Follow BBC News India on Instagram, external, YouTube,, external X, external and Facebook, external.`,
    bodyJa: `ウィンブルドンのタオルからスコッチまで：インドと英国の貿易協定が買い物客に何を意味するか
- 公開されました
ウィンブルドンの優勝タオルを製造するインド企業ウェルスパン・リビングのオフィスでは、水曜日に発効したインド・英国自由貿易協定（FTA）を最大限に活用するための準備が加速している。
インド最大手のホームテキスタイル製造大手である同社は、ジョン・ルイスやテスコなど英国の大手量販店数社にベッドシーツやタオルを供給している。
ウェルスパン・リビングのディパリ・ゴエンカ最高経営責任者（CEO）はBBCに対し、「これらのブランドの多くは、今後数年間の事業ロードマップを描くため、ここ数週間インドを訪れている。われわれは通常、米国の顧客に対してのみ共同将来計画を行っていたが、今回の契約により英国の顧客に対してもそれが行われるようになった」と語った。
「実際、私たちが話している間、ロンドンのサプライチェーンチームはジョン・ルイスのオフィスに座っています。」
世界第５位と第６位の経済大国間のＦＴＡにより、インドから英国への輸出の９９％と英国からのインドへの輸入の９０％に対する関税が撤廃または引き下げられる。
英国政府はこれをEU離脱以来「英国最大かつ最も経済的に重要な二国間貿易協定」と呼んでおり、この協定によりインドのGDPは長期的に0.13％、つまり48億ポンド（64億ドル）相当、インドは0.06％、つまり年間51億ポンド増加すると推定されている。
繊維、衣料品、履物、自動車、水産物などの労働力の多い部門は、事業の成長を促進するために協定の履行に期待している。
ゴエンカ氏は「英国への輸出は今後２桁成長すると予想している」と述べた。
同氏は、インドが12％の関税を支払っているのに対し、インドは発展途上国貿易制度（DCTS）を通じて英国に無税で輸出品が入ったため、バングラデシュやパキスタンのような国々にとって不利な立場にあったと付け加えた。
しかし、これからはそれが変わります。
「家庭用繊維製品に限って見ると、英国の輸出に占めるパキスタンのシェアは約55％であるのに対し、インドはわずか6～7％にすぎない。それがわれわれが最終的にカバーできるギャップだ。」
この協定は英国の酒類・蒸留酒会社にとって転換点となる可能性もある。
スコッチウイスキーの関税を即時に150％から75％に引き下げ、その後10年間で段階的に40％に引き下げることは「小さな調整ではなく、本当の変化」だと首都デリーに拠点を置く輸入会社モダンドリンク社のアヴニート・シン氏は言う。
これが輸入をどれだけ押し上げるかは今後数カ月のうちに明らかになるだろうとシン氏は言うが、新交易条件の発効に先立って勢いが増していると見ている。
「運用面の準備に重点が置かれている。つまり、英国のサプライヤーと緊密に連携して原産地証明書やその他の貿易文書が整備されていることを確認し、税関やコンプライアンス要件を見直し、物流や清算パートナーと連携して、貨物が初日から改定された関税構造の恩恵を受けることができるようにすることを意味する」とシン氏は述べた。
これまでのところ、「急速な拡大ではなく、慎重な準備」の時期だったと同氏は言う。企業が輸入品の実際の節約を確認できれば、さらに大きな変化が訪れるだろう。
しかし、貿易専門家らによると、業界のこれらの少数の領域を超えて、この協定の全体的な影響は「変革というよりむしろ漸進的」になる可能性がある。
デリーに本拠を置くシンクタンク、世界貿易研究イニシアチブ（GTRI）のデータによると、インドは2025年から2026年の会計年度に134億ドル相当の商品を英国に輸出したが、これらの輸出の半分以上は最恵国待遇制度の下で無税で入国した。
輸入面では、インドは英国から117億ドルを輸入したが、その45％以上が銀で構成されており、銀はインドの除外リストに残っており、協定の対象外となっている。
GTRIのアジェイ・スリバスタバ氏は、「本当の試練は、織物、衣料品、履物、カーペット、自動車、魚介類、ブドウ、マンゴーなど、これまで英国の関税にさらされていた製品の輸出受注が増加し、輸出量が増加し、利益率が向上するかどうかだ。これらの指標は協定の成功を示す最も明白な証拠となるだろう。FTAの影響は今後1～3年で明らかになるはずだ」とBBCに語った。
しかし、スリバスタバ氏によると、英国が国内生産者を保護するために特定の割当量を超えて鉄鋼輸入に関税を維持するなど、いくつかの未解決の課題が協定の全範囲を活用する際の障害となる可能性があるという。
英国が提案している炭素税（対外的にはCBAMと呼ばれる）も、FTAの恩恵の一部を削減する可能性があると同氏は付け加えた。なぜなら、たとえ関税が「FTAの下でゼロに下がったとしても、炭素関連の国境税がCBAMの対象分野におけるインドの輸出の実効コストを上昇させ、新たな貿易摩擦を引き起こす可能性がある」からである。
他にも引き続き課題を引き起こしている非関税障壁があります。
中小企業は新しいルールを知らないことが多いため、歴史的にインドのFTA利用率は低かった。その結果、輸入側の利用率がはるかに高いにもかかわらず、インドの適格輸出品のうちFTA優遇措置を利用しているのはわずか約20～30％と推定されている。
たとえば、インドの衣料品輸出業者は、シャツの輸入関税が 12% からゼロに下がったことを英国のバイヤーに積極的に伝え、それに応じて価格や契約を再交渉する必要があります。
多くの企業は、特恵関税を申請できるよう、原産地要件や書類を遵守するための訓練が必要となるでしょう。
「政府と業界団体はこれらの問題に積極的に対処する必要がある。そうしないと、関税引き下げが自動的に輸出の増加につながらないからだ」とスリバスタバ氏は言う。
しかし、CareEdge Researchによると、インドにとって、特に既製衣料品（RMG）などの特定の業界では、これは適切なタイミングで到来するチャンスだという。
中国は英国の RMG 輸入において最大の市場シェアを保持している。しかし、競争力の低下と人件費の高騰により、市場シェアは減少し続けています。さらに、ブランドは、最近まで社会政治的混乱に見舞われていたバングラデシュのような国からの調達を多様化することも検討している。
「そのようなシナリオでは、英国のRMG輸入におけるインドの市場シェアは近中期的に2024年の6％から12％に倍増すると予想される」とケアエッジは報告書で述べた。
CareEdgeによれば、二国間貿易全体も毎年15％増加する可能性があり、現在の成長率10～12％を上回っており、双方の消費者は製品品質の向上と幅広い選択肢から広く恩恵を受けている。
Instagram (外部)、YouTube、外部 X (外部)、および Facebook (外部) で BBC News India をフォローしてください。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c0kymrz0vkgo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-14T22:17:43+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/b761/live/c7a2b980-7e80-11f1-926f-c90d1bcfbc84.jpg",
    readTime: 7,
  },
  {
    id: "your-monthly-netflix-bill-is-up-29-in-ju-7bc80c3c",
    title: "Your monthly Netflix bill is up 29% in just over a year. It’s time for Washington to step in.",
    titleJa: "Netflix の月々の料金は 1 年余りで 29% 増加しました。ワシントンが介入する時が来た。",
    summaryJa: "Netflix は依然としてウォール街の人気者であり、政府規制当局の標的となっている",
    bodyOriginal: `Netflix is still a Wall Street favorite — and a target for government regulators`,
    bodyJa: `Netflix は依然としてウォール街の人気者であり、政府規制当局の標的となっている`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/your-monthly-netflix-bill-is-up-29-in-just-over-a-year-critics-say-washington-needs-to-fix-it-bcab6e5b?mod=mw_rss_topstories",
    publishedAt: "2026-07-14T22:11:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-95726777",
    readTime: 2,
  },
  {
    id: "three-powerful-forces-are-draining-famil-519a6b6f",
    title: "Three powerful forces are draining family wealth — and your estate plan is completely unprepared",
    titleJa: "3 つの強力な勢力が家族の財産を枯渇させています - そしてあなたの財産計画はまったく準備されていません",
    summaryJa: "メディケイドの削減から IRA の税金の罠まで、家族の相続に対する本当の脅威とその対処法をご紹介します。",
    bodyOriginal: `From Medicaid cuts to an IRA tax trap, here are the real threats to your family’s inheritance and what to do about them.`,
    bodyJa: `メディケイドの削減から IRA の税金の罠まで、家族の相続に対する本当の脅威とその対処法をご紹介します。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/the-great-wealth-transfer-is-real-but-the-irs-or-a-nursing-home-might-get-your-money-first-d0c46676?mod=mw_rss_topstories",
    publishedAt: "2026-07-14T21:38:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-88262128",
    readTime: 2,
  },
  {
    id: "the-ai-boom-just-found-two-new-winners-g-fde400c8",
    title: "The AI boom just found two new winners: Goldman Sachs and JPMorgan Chase",
    titleJa: "AI ブームでは、ゴールドマン サックスと JP モルガン チェースという 2 つの新たな勝者が誕生しました。",
    summaryJa: "米国のメガバンクは火曜日、世界的な人工知能ブームがハイテク大手や半導体メーカーだけに利益をもたらしているわけではないという証拠を示した。ゴールドマン・サックスとJPモルガン・チェースは、株式取引と投資銀行業務の大幅な増加に支えられ、それぞれ記録的な四半期売上高を記録した。",
    bodyOriginal: `American megabanks on Tuesday gave evidence that the global artificial intelligence boom isn't just benefiting tech giants and chip makers.
Goldman Sachs and JPMorgan Chase each posted record quarterly revenue hauls, fueled by massive gains in equities trading and investment banking.
Behind the surge in activity — Goldman revenue jumped 39% to $20.3 billion, while JPMorgan saw it rise 27% to $58 billion — is the fact that AI is "everywhere in financial markets," JPMorgan CFO Jeremy Barnum told reporters.
"These are booming environments with a ton of activity, big IPOs, big index rebalancing, a lot of activity in Asia," Barnum said Tuesday. "A lot of it is downstream of the AI theme, writ large on a global basis. It's just a very, very, very active environment."
The quarter showed that the AI boom is creating winners far beyond Silicon Valley. While Nvidia and hyperscalers including Alphabet have captured many of the headlines, Goldman, JPMorgan and other banks are profiting from the massive flows of capital into AI.
They are advising on AI-related deals, financing data centers and power infrastructure, underwriting debt and equity offerings, and facilitating the surge in trading that has accompanied the global race to deploy the technology.
That is creating "a ripple effect" across the American economy and giving banks a flood of new opportunities to provide financing and trading solutions across public and private markets, Goldman CEO David Solomon told analysts Tuesday.
"We are in the middle of an AI capex super cycle where there are demands on financing in every single financing instrument, in every region of the world and across every single industry," Solomon said. Capex is short for capital expenditures, or investments made by a business for physical assets like factories.
Goldman is preparing for a three-to-five year investment cycle that is still in its early stages, he told analysts.
Goldman shares jumped 8% in afternoon trading, while JPMorgan rose 2%.
AI 'tipping point'
While the AI buildout isn't new, what's changed is that it has broadened out beyond chips and software to include power providers and infrastructure players.
The top beneficiaries of this trend are the three biggest Wall Street firms: Goldman Sachs, JPMorgan and Morgan Stanley, according to Wells Fargo banking analyst Mike Mayo.
The AI investment boom "reached a tipping point" in the second quarter, Mayo said.
Mayo increased his price targets for Goldman and JPMorgan after Tuesday's blowout results. Morgan Stanley is scheduled to report earnings on Wednesday.
The clearest evidence of the AI impact appeared in equities trading, where global capital flows and blockbuster transactions helped produce some of the biggest revenue surprises of the quarter.
Revenue from equities trading rose 86% to $6 billion at JPMorgan and 72% to $7.42 billion at Goldman. Combined, that was a whopping $4.4 billon more than analysts had expected.
Other large banks also benefited. Bank of America, the second biggest U.S. lender by assets, saw equity trading revenue rise 70% to $3.6 billion.
Helping the quarter, investors broadened out their search for AI beneficiaries, pouring money into Asian markets, including South Korea, Taiwan and Japan, Soofian Zuberi, president and co-head of Global Markets at Bank of America, told CNBC.
"People looked at the AI trade and said, 'What are the best reflections of it outside the U.S?,'" Zuberi said. "You've got American clients who are diversifying and allocating more money to Asia, including foundations, the endowments, and family offices."
SpaceX, Alphabet
The AI impact also showed up in the banks' strong advisory banking revenue for the second quarter.
Investment banking revenue at Goldman jumped 55% to $3.4 billion, and climbed 30% to $3.3 billion at JPMorgan Chase. That is a combined $1 billion more than analysts had expected.
In the quarter, Goldman was lead advisor on the SpaceX IPO and Alphabet's $90 billion equity issuance and advised Dominion Energy on its sale to NextEra Energy, all moves driven by the AI cycle.
At Bank of America, investment banking fees jumped 50% to $2.1 billion.
At the same time as they reap record fees driven by AI, banks are starting to benefit from implementing the technology internally. That should help them increase revenue while keeping a lid on headcount and other expenses.
"AI is driving banking by helping streamline processes," Zubieri said. "And banking is driving AI, because without banking you can't have all these data centers financed."`,
    bodyJa: `米国のメガバンクは火曜日、世界的な人工知能ブームがハイテク大手や半導体メーカーだけに利益をもたらしているわけではないという証拠を示した。
ゴールドマン・サックスとJPモルガン・チェースは、株式取引と投資銀行業務の大幅な増加に支えられ、それぞれ記録的な四半期売上高を記録した。
JPモルガンのジェレミー・バーナム最高財務責任者（CFO）は記者団に対し、ゴールドマンの売上高が39％増の203億ドル、JPモルガンの売上高が27％増の580億ドルとなった背景には、AIが「金融市場のいたるところに存在している」という事実があると語った。
バーナム氏は火曜日、「これらは大量の活動、大規模なIPO、大規模な指数リバランス、アジアでの多くの活動を伴う活況な環境だ」と述べた。 「その多くは AI テーマの下流にあり、地球規模で大規模に行われています。まさに、非常に、非常に、非常に活発な環境です。」
この四半期は、AI ブームがシリコンバレーをはるかに超えた勝者を生み出していることを示しました。 Nvidia や Alphabet を含むハイパースケーラーが多くの見出しを飾っていますが、ゴールドマン、JP モルガン、その他の銀行は AI への膨大な資本の流れから利益を得ています。
彼らは、AI 関連の取引についてアドバイスし、データセンターや電力インフラへの資金調達、債券や株式の引受を引き受け、テクノロジー導入の世界的な競争に伴う取引の急増を促進しています。
それがアメリカ経済全体に「波及効果」を生み出し、銀行に公開市場と私設市場にわたって融資と取引ソリューションを提供する新たな機会を大量に与えている、とゴールドマンのデービッド・ソロモン最高経営責任者（CEO）は火曜日にアナリストに語った。
「私たちはAI設備投資のスーパーサイクルの真っ只中におり、世界のあらゆる地域、あらゆる業界にわたって、あらゆる融資手段で資金調達の需要が存在します」とソロモン氏は述べた。 Capex は資本支出の略で、企業が工場などの物理的資産に対して行う投資です。
同氏はアナリストに対し、ゴールドマンは３─５年の投資サイクルに向けて準備を進めているが、まだ初期段階にあると語った。
ゴールドマン株は午後の取引で８％上昇し、ＪＰモルガンは２％上昇した。
AIの「転換点」
AI の構築は新しいものではありませんが、変わったのは、AI の範囲がチップやソフトウェアを超えて、電力プロバイダーやインフラストラクチャー プレーヤーを含むようになったということです。
ウェルズ・ファーゴの銀行アナリスト、マイク・メイヨ氏によると、この傾向で最も恩恵を受けているのはウォール街の３大企業、ゴールドマン・サックス、ＪＰモルガン、モルガン・スタンレーだという。
メイヨー氏は、AI投資ブームは第2四半期に「転換点に達した」と述べた。
メイヨー氏は火曜日の大幅な決算を受けて、ゴールドマンとJPモルガンの目標株価を引き上げた。モルガン・スタンレーは水曜日に決算発表を予定している。
AI の影響を示す最も明確な証拠は株式取引に現れており、世界的な資本の流れと大規模な取引が、この四半期最大の予想外の収益を生み出しました。
株式トレーディングによる収益は、ＪＰモルガンが８６％増の６０億ドル、ゴールドマンが７２％増の７４億２０００万ドルとなった。合計すると、アナリストの予想を44億ドルも上回った。
他の大手銀行も恩恵を受けた。資産額で米国第２位の銀行であるバンク・オブ・アメリカの株式トレーディング収入は７０％増の３６億ドルとなった。
この四半期を支援して、投資家はAIの受益者探しの範囲を広げ、韓国、台湾、日本を含むアジア市場に資金を注ぎ込んだとバンク・オブ・アメリカの社長兼グローバル・マーケッツ共同責任者のスーフィアン・ズベリ氏がCNBCに語った。
「人々はAI貿易を見て、『米国以外ではAI貿易を最もよく反映しているのは何だろう』と言った」とズベリ氏は語った。 「財団、基金、ファミリーオフィスなど、アジアに資金を多角化し、より多くの資金を割り当てているアメリカ人の顧客がいます。」
スペースX、アルファベット
AI の影響は、第 2 四半期の銀行のアドバイザリー バンキング収益の好調にも表れました。
ゴールドマンの投資銀行収入は５５％増の３４億ドル、ＪＰモルガン・チェースは３０％増の３３億ドルだった。これはアナリストの予想を合計で10億ドル上回る額となる。
同四半期、ゴールドマンはスペースXのIPOとアルファベットの900億ドルの株式発行の主任顧問を務め、ドミニオン・エナジーのNextEra Energyへの売却について助言したが、これらすべての動きはAIサイクルによって推進された。
バンク・オブ・アメリカでは、投資銀行手数料が50％増の21億ドルとなった。
AI によって記録的な手数料を獲得すると同時に、銀行はそのテクノロジーを内部に導入することで恩恵を受け始めています。これにより、従業員数やその他の経費を抑えながら収益を増やすことができるはずです。
「AIはプロセスの合理化を支援することで銀行業務を推進している」とズビエリ氏は語った。 「そして、銀行業が AI を推進しています。銀行業がなければ、これらすべてのデータセンターに資金を提供することはできないからです。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/14/goldman-sachs-and-jpmorgan-chase-are-emerging-as-ai-winners.html",
    publishedAt: "2026-07-14T19:50:48+00:00",
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
