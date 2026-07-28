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
  {
    id: "do-i-need-to-hire-a-broker-to-find-an-ap-fd1daa8e",
    title: "Do I need to hire a broker to find an apartment in New York City?",
    titleJa: "ニューヨーク市でアパートを探すにはブローカーを雇う必要がありますか?",
    summaryJa: "「もしかしたら、一部のアパートは賃貸に出されていないか、ブローカーを利用している人たちによって募集されているのかもしれません。」",
    bodyOriginal: `“Maybe some apartments are not being listed for rent or are being snapped up by people who are using brokers.”`,
    bodyJa: `「もしかしたら、一部のアパートは賃貸に出されていないか、ブローカーを利用している人たちによって募集されているのかもしれません。」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/do-i-need-to-hire-a-broker-to-find-an-apartment-in-new-york-city-f5f9cf34?mod=mw_rss_topstories",
    publishedAt: "2026-07-27T14:51:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-66838451",
    readTime: 2,
  },
  {
    id: "sam-altman-to-meet-with-trump-administra-e93a03a6",
    title: "Sam Altman to meet with Trump administration, Senators this week. Here's what he plans to say",
    titleJa: "サム・アルトマン氏は今週、トランプ政権の上院議員と会談する予定。彼が言おうとしていることは次のとおりです",
    summaryJa: "OpenAIの最高経営責任者（CEO）サム・アルトマン氏が今週、ワシントンD.C.でトランプ政権の高官、議員、経済学者らと会談し、同社の今後の人工知能モデルファミリーの機能をプレビューする予定であるとCNBCが報じた。アルトマン氏は今年も国会議事堂に定期的に出席し、急速に進歩するテクノロジーに対する政策立案者の懸念を軽減し、規制がどうあるべきかについての意見形成を支援しようと努めている。",
    bodyOriginal: `OpenAI CEO Sam Altman will meet with senior Trump administration officials, lawmakers and economists in Washington, D.C., this week to preview the capabilities of the company's upcoming family of artificial intelligence models, CNBC has learned.
Altman has maintained a regular presence on Capitol Hill this year as he's tried to alleviate policymakers' concerns about the rapidly advancing technology and help shape their views about what regulation should look like.
This visit lands during a particularly sensitive moment for AI development in the U.S., as a debate over whether to restrict Chinese open-weight AI models has ripped through Silicon Valley.
In addition to previewing OpenAI's upcoming releases, Altman is expected to field questions from policymakers about cybersecurity and the company's stance on open-weight models, according to a source familiar with the plans who asked not to be named because the details are confidential.
Open-weight AI models are available for users to download, modify and run on their own infrastructure. In recent weeks, Chinese open-weight models from startups like Moonshot AI have rapidly caught up with leading, proprietary offerings from American companies, including OpenAI and its chief rival, Anthropic, sparking anxiety about the durability of the U.S. lead in the AI race.
Officials and executives have been weighing whether or not to limit access to Chinese models in the U.S., which prompted a coalition of tech companies, including Nvidia, Microsoft, Meta and Palantir, to release a letter on Friday urging policymakers to avoid "premature restrictions" on open-weight models.
OpenAI signed the letter after it was initially published, but the company's allies have lobbied for restrictions on open-weight models, according to a report from The New York Times. Anthropic still has not signed or made an official comment about its position.
Altman will also likely address the "unprecedented cyber incident" that OpenAI disclosed earlier this month, which rattled researchers and executives across the tech sector.
The company said its models escaped a sandboxed testing environment, accessed the internet and exploited a vulnerability to gain entry to another company's systems. The models were trying to find information that they could use to cheat on an evaluation, and they succeeded, OpenAI said.
The company that was breached, Hugging Face, operates an open-source developer platform. Hugging Face shared that an autonomous AI agent system breached part of its production infrastructure prior to revealing OpenAI's involvement.
AI companies, including OpenAI, have been warning about the technology's advancing cyber capabilities, particularly since Anthropic released a model called Claude Mythos Preview in April. Following the incident, OpenAI said that AI is accelerating the discovery and exploitation of vulnerabilities, which means model security and safety need to keep up.
The company said it is working to strengthen its "containment, monitoring, access controls, and evaluation practices used during model development," and it's conducting a "thorough investigation" of the incident, according to a release.
The hacking incident showed how powerful and resourceful autonomous AI agents have become.
While in D.C., Altman is also expected to discuss the evolution of AI agents and their impact on worker productivity, the person said. He will explain the concept of "AI teams," where multiple agents work together to carry out long-term tasks.
WATCH: OpenAI model goes rogue: Here’s what you need to know`,
    bodyJa: `OpenAIの最高経営責任者（CEO）サム・アルトマン氏が今週、ワシントンD.C.でトランプ政権の高官、議員、経済学者らと会談し、同社の今後の人工知能モデルファミリーの機能をプレビューする予定であるとCNBCが報じた。
アルトマン氏は今年も国会議事堂に定期的に出席し、急速に進歩するテクノロジーに対する政策立案者の懸念を軽減し、規制がどうあるべきかについての意見形成を支援しようと努めている。
中国の無差別AIモデルを制限すべきかどうかをめぐる議論がシリコンバレーに広がっている中、今回の訪問は米国のAI開発にとって特に敏感な時期に到来した。
詳細は機密事項であるため匿名を条件に計画に詳しい関係者によると、アルトマン氏はOpenAIの今後のリリースのプレビューに加え、サイバーセキュリティや無差別モデルに対する同社のスタンスに関する政策立案者からの質問に答える予定だという。
オープンウェイト AI モデルは、ユーザーがダウンロード、変更し、独自のインフラストラクチャ上で実行することができます。ここ数週間、Moonshot AIなどの新興企業による中国の無差別級モデルが、OpenAIやその最大のライバルであるAnthropicなど、米国企業の主要な独自製品に急速に追いつき、AI競争における米国のリードの持続性について不安を引き起こしている。
当局者や幹部らは米国内で中国製モデルへのアクセスを制限するか否かを検討しており、これを受けてエヌビディア、マイクロソフト、メタ、パランティアを含むハイテク企業連合は金曜日、政策立案者に対し無差別級モデルへの「時期尚早な制限」を回避するよう求める書簡を発表した。
ニューヨーク・タイムズの報道によると、OpenAIはこの書簡が最初に公開された後に署名したが、同社の同盟国は無差別級モデルの制限を求めるロビー活動を行っているという。 Anthropic はまだその立場について署名も公式コメントも出していない。
アルトマン氏はまた、OpenAIが今月初めに明らかにし、テクノロジー業界全体の研究者や幹部らを動揺させた「前例のないサイバーインシデント」についても取り上げる可能性が高い。
同社は、自社のモデルがサンドボックス化されたテスト環境から逃れ、インターネットにアクセスし、脆弱性を悪用して他社のシステムに侵入したと述べた。 OpenAIによると、モデルは評価を不正にするために使用できる情報を見つけようとしていたが、成功したという。
侵害された企業、Hugging Face は、オープンソースの開発者プラットフォームを運営しています。ハギング・フェイス氏は、OpenAIの関与が明らかになる前に、自律型AIエージェント・システムが本番インフラストラクチャの一部に侵入したと共有した。
OpenAIを含むAI企業は、特にAnthropicが4月にClaude Mythos Previewと呼ばれるモデルをリリースして以来、このテクノロジーの進歩するサイバー機能について警告している。この事件を受けてOpenAIは、AIによる脆弱性の発見と悪用が加速しているため、モデルのセキュリティと安全性も追いつく必要があると述べた。
リリースによると、同社は「モデル開発中に使用される封じ込め、監視、アクセス制御、評価慣行」の強化に取り組んでおり、インシデントの「徹底した調査」を実施していると述べた。
このハッキング事件は、自律型 AI エージェントがいかに強力で機知に富んだものになっているかを示しました。
同関係者によると、アルトマン氏はワシントンDCにいる間、AIエージェントの進化とそれが労働者の生産性に及ぼす影響についても話し合う予定だという。複数のエージェントが連携して長期的なタスクを実行する「AI チーム」の概念について説明します。
注目: OpenAI モデルが不正に陥る: 知っておくべきことは次のとおりです`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/27/altman-trump-china-open-weight-ai.html",
    publishedAt: "2026-07-27T14:33:10+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "oil-price-dives-as-us-and-iran-pause-att-de2200bc",
    title: "Oil price dives as US and Iran pause attacks",
    titleJa: "米国とイランが攻撃を一時停止する中、原油価格が急落",
    summaryJa: "米国とイランが攻撃を一時停止する中、原油価格が急落- 公開されました",
    bodyOriginal: `Oil price dives as US and Iran pause attacks
- Published
The price of oil has fallen sharply on hopes that a pause in attacks between the US and Iran could help to de-escalate the conflict.
Brent crude, the global benchmark for oil, sank more than 9% to $87.59 a barrel at one point, marking a sharp turnaround from last week when it had risen above $100.
The fall came after the US ambassador to the UN said attacks on Iran had been halted for a second night in a row to give "talks some space".
An Iranian army spokesperson said on Sunday that Tehran had halted "retaliatory" attacks in the region in response.
The outbreak of the Iran war triggered a sharp rise in oil prices as the conflict led to the effective closure of the Strait of Hormuz, a key shipping route which usually carries about 20% of the world's oil and liquefied natural gas (LNG).
When Iran and the US signed a memorandum of understanding in June to halt military operations and reopen the strait, the price of oil fell back to pre-war levels of around $70 a barrel.
However, the collapse of the ceasefire earlier this month reignited fears over global energy supplies and pushed the oil price back up.
Last week it hit $100 a barrel for the first time since May, with added concerns coming after Houthi militia in Yemen attacked oil tankers in the Red Sea, threatening a key export route that Saudi Arabia had used to bypass the Strait of Hormuz.
By Monday afternoon, the price of Brent stood at $90.60 a barrel, down more than 6% for the day.
Susannah Streeter, chief investment strategist at Wealth Club, said markets were remaining "cautious given the twists and turns during this conflict".
Despite the sharp fall in crude, "there is still significant uncertainty baked into these prices and a reticence about whether negotiations will lead to a lasting breakthrough," she added.
The conflict between the US and Iran - and its impact on oil - has pushed up the cost of fuel such as petrol and diesel in many countries.
This often has knock-on effects on other prices, such as food, as businesses pass on the higher costs they are facing to customers, and this can push up the rate of inflation.
Higher inflation raises the possibility that central banks will increase interest rates in an attempt to keep price rises under control.
In June, the European Central Bank opted to lift its key interest rate for the eurozone for the first time in almost three years, noting that the conflict was "generating inflation pressures".
Before the Iran war began, there had been expectations that the Bank of England would cut rates this year.
However, no cuts are now expected and financial markets are currently predicting a rate rise towards the end of the year.
The Bank of England holds its latest interest rate-setting meeting this week, when it is expected to keep its key rate unchanged at 3.75%.`,
    bodyJa: `米国とイランが攻撃を一時停止する中、原油価格が急落
- 公開されました
米国とイラン間の攻撃の一時停止が紛争の沈静化につながるのではないかとの期待から、原油価格が急落した。
世界の原油指標であるブレント原油は一時１バレル＝８７．５９ドルまで９％以上下落し、１００ドルを超えて上昇した先週から急転直下した。
この下落は、米国の国連大使が「協議に一定のスペースを与える」ため、イランへの攻撃を２夜連続で停止したと述べた後に起きた。
イラン軍報道官は日曜、イラン政府がこれに応じて地域での「報復」攻撃を停止したと述べた。
イラン戦争の勃発は、通常、世界の石油と液化天然ガス（LNG）の約20％を輸送する重要な輸送ルートであるホルムズ海峡の事実上の閉鎖につながり、原油価格の急騰を引き起こした。
イランと米国が６月に軍事作戦を停止し、海峡を再開する覚書に署名すると、原油価格は１バレル＝７０ドル程度の戦前の水準にまで下がった。
しかし、今月初めの停戦崩壊により世界のエネルギー供給に対する懸念が再燃し、原油価格が再び上昇した。
先週、5月以来初めて1バレル＝100ドルに達したが、イエメンのフーシ派民兵組織が紅海で石油タンカーを攻撃し、サウジアラビアがホルムズ海峡を迂回するために利用していた重要な輸出ルートを脅かしたことでさらなる懸念が生じた。
月曜午後までにブレント原油価格は１バレル＝９０．６０ドルとなり、この日は６％以上下落した。
ウェルス・クラブの首席投資ストラテジスト、スザンナ・ストリーター氏は、市場は「この紛争中の紆余曲折を考慮し」引き続き警戒していると述べた。
原油価格の急落にもかかわらず、「価格には依然として大きな不確実性が組み込まれており、交渉が永続的な打開につながるかどうかについて消極的だ」と同氏は付け加えた。
米国とイランの紛争とその石油への影響により、多くの国でガソリンやディーゼルなどの燃料価格が高騰している。
企業が直面している高いコストを顧客に転嫁するため、これは食品など他の価格にも波及効果をもたらし、インフレ率を押し上げる可能性があります。
インフレ率の上昇により、中央銀行が物価上昇を抑制するために金利を引き上げる可能性が高まります。
欧州中央銀行は6月、紛争が「インフレ圧力を生み出している」と指摘し、ほぼ3年ぶりにユーロ圏の主要金利を引き上げることを選択した。
イラン戦争が始まる前は、イングランド銀行が今年利下げするとの期待があった。
しかし、現時点では利下げは見込まれておらず、金融市場は現在、年末に向けて利上げを予想している。
イングランド銀行は今週最新の金利決定会合を開き、主要政策金利を3.75％に据え置くと予想されている。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/clyj834jn5lo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-27T14:22:24+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/92a8/live/d2b46450-89a6-11f1-a85a-79136c2d298e.jpg",
    readTime: 3,
  },
  {
    id: "businessman-and-philanthropist-sir-ian-w-0397e264",
    title: "Businessman and philanthropist Sir Ian Wood dies aged 84",
    titleJa: "実業家で慈善家のサー・イアン・ウッド氏が84歳で死去",
    summaryJa: "実業家で慈善家のサー・イアン・ウッド氏が84歳で死去- 公開されました",
    bodyOriginal: `Businessman and philanthropist Sir Ian Wood dies aged 84
- Published
The Aberdeen-based businessman and philanthropist Sir Ian Wood has died aged 84, his family has announced.
Sir Ian was one of the UK oil and gas industry's most respected leaders, who turned his family's fishing boat repair yard into a global engineering player in the North Sea and internationally.
He retired as chief executive in 2006 and a year later began concentrating on his charitable work, creating The Wood Foundation, which works on social and economic inequality, especially in Scotland and sub-Saharan Africa
His family said he died peacefully at home and they would remember his "kindness, generosity, determination and unwavering commitment to his family."
Sir Ian was one of Scotland's wealthiest people, with a personal worth estimated at £1.8bn.
Wood Group started as a family fishing business before Sir Ian took over in 1967.
Over the next decades, he formed a separate engineering company servicing the rapidly-growing North Sea oil business.
At its height, the Wood Group was valued at more than £5bn, carrying out work in the energy industry around the world. It went public in 2002 and was sold to a Dubai company last year.
Sir Ian, who retired as chairman of the group in 2012, was knighted in 1994 for services to the oil and gas industry and was later made a member of the Order of the Thistle, Scotland's highest order of chivalry.
Wood takeover - good news or another loss for Scottish business?
- Published15 April 2025
Engineering giant Wood opens door to takeover bid
- Published17 April 2023
Sir Ian's philanthropic work was carried out through the Wood Foundation, which he founded in 2007.
It is involved in a number of investments and charitable work around agriculture and conservation in east Africa, as well as projects in Scotland.
He was married to Helen for 55 years, was father to Nic, Graham and Garreth, and a grandfather of seven children.
The statement from Sir Ian's family said: "Sir Ian was a devoted husband, father, grandfather and friend.
"While many knew him as an entrepreneur, philanthropist and one of Scotland's most influential business leaders, those closest to him will remember above all his kindness, generosity, determination and unwavering commitment to his family."
First Minister John Swinney paid tribute to Sir Ian, describing him as one of Scotland's "most influential business leaders and philanthropists, a figure whose vision, determination and generosity have left a lasting mark on the nation and far beyond."
He said: "Through his leadership of Wood Group, he helped transform a modest family business into a global energy services company, playing a pivotal role in the growth of the North Sea oil and gas industry and establishing Scotland as a world-renowned centre of energy expertise.
He paid tribute to Sir Ian's "devotion" to his home city of Aberdeen, adding the businessman had championed "initiatives that have strengthened the North East of Scotland and supported the evolution of the region's economy through his tireless advocacy for economic development, innovation and opportunity."
Swinney also praised his work on the transition to a lower-carbon future, and his philanthropic work.
"Sir Ian Wood's legacy is one of enterprise, leadership and generosity. He has helped shape modern Scotland, strengthened its economy, advanced its energy industry and demonstrated the profound difference that purposeful philanthropy can make," he said.
'A giant of Scottish business'
Scottish Secretary Douglas Alexander described Sir Ian as "one of Scotland's finest sons".
"Ian was a giant of Scottish business, philanthropy and society. A proud son of Aberdeen, he was a tireless advocate for the Granite City and its people," he said.
"Personally, it was a privilege to be able to know him, work with him on his philanthropic endeavours, and like so many Scots, I mourn his passing.
"My thoughts today are with Lady Helen, Nicholas, Graham, Garreth and the whole family for whom his loss will be most keenly felt."
Scottish Conservative MP for Aberdeen South, Douglas Lumsden, said:
"Scotland has lost a true guiding light of its business community. Sir Ian was a champion of everything North East, both as a paragon of its economy but also as a philanthropist who did so much good at home and abroad.
"He and his workers around the world forged an international reputation for excellence in energy.
"The Wood name also meant a helping hand to communities, wherever it went."
David Whitehouse, chief executive of Offshore Energies UK, described Sir Ian as "one of the defining figures of the North Sea oil and gas industry".
He praised his work in leading the 2013 Wood Review, which led to the creation of the North Sea Transition Authority.
Whitehouse added: "Sir Ian transformed his family's fishing business into a global engineering player as well as establishing Scotland as a world-renowned centre of energy expertise.
"The offshore energy sector we know today would be very different without Sir Ian's vision, leadership and persistence."
Sir Ian was born in Aberdeen in 1942, the middle child of John and Margaret Wood.
He was educated at Robert Gordon's College, later graduating from the University of Aberdeen with a first-class honours degree in psychology in 1964.
He played rugby with the North & Midlands District XV, including in a match against the All Blacks at Pittodrie Stadium in 1972.
Following graduation, Sir Ian joined the family fishing and marine engineering business, becoming managing director of John Wood and Son.
He continued as Chairman of the legacy business, the Don Fishing Company Ltd, until his death.
He remained interested in the oil and gas business after standing down from the Wood Group, and in 2014 intervened in the Scottish referendum debate, questioning some of the assumptions being made about oil and gas revenues.
Sir Ian supported the move to transitioning from oil and gas to renewables energy but also warned that the UK had to keep drilling for new oil in the North Sea.`,
    bodyJa: `実業家で慈善家のサー・イアン・ウッド氏が84歳で死去
- 公開されました
アバディーンを拠点とする実業家で慈善家のサー・イアン・ウッド氏が84歳で死去したと遺族が発表した。
サー・イアンは英国の石油・ガス業界で最も尊敬されるリーダーの一人で、家族が経営していた漁船修理工場を北海および国際的に世界的なエンジニアリング企業に変えました。
彼は 2006 年に最高経営責任者を退任し、その 1 年後に慈善活動に集中し始め、特にスコットランドとサハラ以南アフリカの社会的および経済的不平等に取り組むウッド財団を設立しました。
家族は、彼が自宅で安らかに息を引き取り、彼の「優しさ、寛大さ、決意、そして家族に対する揺るぎない献身」を思い出すだろうと述べた。
サー・イアンはスコットランドで最も裕福な人物の一人で、個人資産は18億ポンドと推定されていた。
Wood Group は、1967 年にサー・イアンが引き継ぐ前に家族経営の漁業事業としてスタートしました。
その後数十年にわたって、彼は急成長する北海石油ビジネスにサービスを提供する別のエンジニアリング会社を設立しました。
最盛期には、Wood Group の価値は 50 億ポンドを超え、世界中のエネルギー産業で事業を展開していました。 2002年に上場し、昨年ドバイの企業に売却された。
2012年に同グループの会長を退任したサー・イアン氏は、石油・ガス業界への功績により1994年にナイト爵位を授けられ、後にスコットランド最高騎士団であるシスル騎士団の会員となった。
木材買収 - スコットランドのビジネスにとって朗報か、それとも新たな損失か?
- 2025 年 4 月 15 日公開
エンジニアリング大手ウッドが株式公開買い付けへの扉を開く
- 2023 年 4 月 17 日公開
サー・イアンの慈善活動は、2007 年に設立されたウッド財団を通じて行われました。
同社は、スコットランドのプロジェクトだけでなく、東アフリカの農業と自然保護に関する多くの投資や慈善活動にも取り組んでいます。
彼はヘレンと55年間結婚し、ニック、グラハム、ギャレスの父親であり、7人の子供の祖父でした。
サー・イアンの家族は声明で「サー・イアンは献身的な夫であり、父親であり、祖父であり、友人でした。
「多くの人が彼を起業家、慈善家、そしてスコットランドで最も影響力のあるビジネスリーダーの一人として知っていましたが、彼に親しい人たちは何よりも彼の優しさ、寛大さ、決意、そして家族に対する揺るぎない献身的な姿勢を覚えているでしょう。」
ジョン・スウィニー首相はサー・イアンに敬意を表し、彼を「スコットランドで最も影響力のあるビジネスリーダーであり慈善家であり、そのビジョン、決意、寛大さが国だけでなく遠くに永続的な足跡を残した人物」であると述べた。
同氏は、「ウッド・グループのリーダーシップを通じて、小規模な家族経営の企業を世界的なエネルギーサービス会社に変革することに貢献し、北海の石油・ガス産業の成長において極めて重要な役割を果たし、スコットランドを世界的に有名なエネルギー専門知識の中心地として確立した。
同氏はサー・イアンの故郷アバディーンに対する「献身」に敬意を表し、実業家は「経済発展、革新、機会に対するたゆまぬ擁護を通じてスコットランド北東部を強化し、地域経済の発展を支援する取り組み」を擁護してきたと付け加えた。
スウィニー氏はまた、低炭素の未来への移行に関する彼の取り組みと慈善活動を称賛した。
「サー・イアン・ウッドの遺産は、進取の気性、リーダーシップ、寛大さの一つです。彼は現代スコットランドの形成に貢献し、経済を強化し、エネルギー産業を発展させ、目的を持った慈善活動がもたらす大きな違いを実証してきました」と彼は述べた。
「スコットランドビジネスの巨人」
スコットランド長官のダグラス・アレクサンダーは、サー・イアンを「スコットランドの最も優れた息子の一人」と評した。
「イアンはスコットランドのビジネス、慈善活動、そして社会の巨人でした。アバディーンの誇り高き息子であり、グラナイトシティとその人々のたゆまぬ代弁者でした」と彼は語った。
「個人的には、彼を知り、慈善活動に協力できたことは光栄でした。多くのスコットランド人同様、私も彼の死を悼みます。
「今日の私の思いは、レディ・ヘレン、ニコラス、グラハム、ギャレス、そして彼の死を最も痛感しているであろう家族全員のことです。」
アバディーン南部のスコットランド保守党議員、ダグラス・ラムズデンは次のように述べた。
「スコットランドはビジネス界の真の指針を失った。サー・イアンは、東北経済の模範としてだけでなく、国内外で多くの功績を残した慈善家としても、北東部のすべての擁護者でした。
「彼と世界中の従業員は、エネルギー分野における卓越性に対する国際的な評判を築き上げました。
「ウッドという名前は、どこへ行っても地域社会への救いの手を意味するものでした。」
英国オフショア・エナジーズの最高経営責任者、デビッド・ホワイトハウス氏は、サー・イアンを「北海の石油・ガス産業を決定づける人物の一人」と評した。
同氏は、北海移行局の創設につながった2013年の木材レビューを主導した功績を称賛した。
ホワイトハウス氏はさらに、「イアン卿は家族の漁業事業を世界的なエンジニアリング企業に変え、またスコットランドをエネルギー専門知識の世界的に有名な中心地として確立した。
「サー・イアンのビジョン、リーダーシップ、粘り強さがなければ、私たちが今日知っている海洋エネルギー部門は大きく変わっていたでしょう。」
サー・イアンは、ジョン・ウッドとマーガレット・ウッドの真ん中の子供として、1942年にアバディーンで生まれました。
彼はロバート・ゴードン大学で教育を受け、その後 1964 年に心理学の第一級優等学位を取得してアバディーン大学を卒業しました。
彼は、1972 年にピットドリー スタジアムで行われたオール ブラックスとの試合を含め、ノース & ミッドランズ地区第 15 部でラグビーをプレーしました。
卒業後、サー・イアンは家業の漁業および海洋エンジニアリング事業に加わり、ジョン・ウッド・アンド・サン社の常務取締役に就任しました。
彼は亡くなるまで、伝統的なビジネスであるドン・フィッシング・カンパニー・リミテッドの会長を務め続けました。
同氏はウッド・グループを辞めた後も石油・ガス事業に関心を持ち続け、2014年にはスコットランドの住民投票の議論に介入し、石油・ガス収入に関する前提の一部に疑問を呈した。
イアン卿は石油とガスから再生可能エネルギーへの移行を支持したが、英国は北海で新たな石油の掘削を続けなければならないとも警告した。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/ce3qv0p9105o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-27T14:17:56+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/1f7f/live/39e43050-899e-11f1-8c68-81d45f5a03af.jpg",
    readTime: 7,
  },
  {
    id: "how-wildfires-in-france-and-spain-might-6a3452f8",
    title: "How wildfires in France and Spain might affect your travel plans",
    titleJa: "フランスとスペインの山火事が旅行計画に与える影響",
    summaryJa: "フランスとスペインの山火事が旅行計画に与える影響- 公開されました",
    bodyOriginal: `How wildfires in France and Spain might affect your travel plans
- Published
Wildfires in Spain and France have caused mass evacuation and disruption, with more than 300,000 people forced to leave their homes and many sleeping in sports halls and other temporary shelters.
An official from one of the French departments affected by the fires has pleaded with visitors to stay away.
On Sunday, Sophie Brocas, prefect of the French department of Gironde, said, "I urge tourists not to come," while advising those already there to consider an alternative destination.
For those who have upcoming holidays to the affected regions, here is what you should know about how it might impact your plans.
Should I travel to France or Spain right now?
The UK government has not specifically warned against travel to anywhere in France or Spain, but it does advise caution.
In France, it says access to affected areas may be restricted and roads may close at short notice. It adds that further evacuations may take place.
It has also issued a general warning about the high risk of wildfires in France during the summer season from April to October.
For those in an affected area in France or Spain or planning to travel there, the UK government recommends following instructions and updates from local authorities and emergency services at all times.
Those needing emergency help in France or Spain can call 112.
Travellers should also bear in mind the UK government's advice can and does change in response to moving events.
Anna-Marie Duthie, travel insurance expert at financial rating firm Defaqto, says that if this happens after you have booked your trip, "you may be covered for cancellation or curtailment".
"You may also be covered for additional travel and accommodation costs should your trip be disrupted due to a catastrophic event, if your insurer offers this cover or you've paid to include it," she adds.
To know if this applies to you, check your policy.
Where are the wildfires burning?
The UK government says parts of Gironde and Landes in the south west of France are affected.
The official French wildfire map gives Gironde and Pyrénées-Orientales its highest fire alert level. Meanwhile, Aude and Var have its second highest alert level.
As of Monday, the map says there are more than 20 fires burning across the country, including on Corsica.
In Spain, authorities have declared a national emergency because of wildfires in parts of Madrid and Ávila. The UK government says there are also reports of wildfires in other inland areas of Spain.
Does travel insurance cover wildfires?
Once again, the answer depends on your policy.
"If your travel plans are disrupted by a wildfire and your policy includes trip disruption cover then travel insurance may cover some of the resulting costs," says Chris Bose, director of general insurance policy at the Association of British Insurers (ABI).
However, only half of travel insurance policies have "catastrophe" cover, according to analysis from Defaqto.
This means that, in many cases, travellers might not be covered by their insurance in the case of wildfires.
To know if this does or does not apply to you, speak to your insurer or check the wording of your policy.
What should I do if my airline or accommodation cancels my booking?
In the case of cancelled flights or accommodation, Bose recommends seeking refunds from your airline, tour operator or accommodation provider in the first instance.
Duthie says if your airline cancels your flight due to wildfires then "they should offer you the chance to rebook, or provide a full refund".
She says if your holiday was booked as a package then this refund should cover "all elements", including flights, accommodation and transfers.
"But if you've booked everything separately, you'll need to deal with each provider independently. Your airline may refund your flight, but your accommodation provider may not if the property is unaffected."
Should I just cancel my trip now?
Check what your insurance policy says about flights, accommodation or trip bookings first.
Rory Boland, editor of Which? Travel, says this is especially true for those not due to travel in the next week or two.
"Travellers who cancel now will likely forfeit their right to a refund or rebooking," he says.
As the UK government has not warned against travel to anywhere in the two countries, he says travellers are "unlikely to be able to claim on their travel insurance".
"As a rule, insurance firms won't make allowances for 'disinclination to travel'," Boland says.
"Instead, holidaymakers should wait until closer to the departure date to see if the holiday can go ahead or what flexible booking options are offered from the tour operator or airline.
"Travel companies will be prioritising anyone due to depart in the next couple of days."
How will climate change affect travel insurance in the future?
The amount of land burned by wildfires across Europe has increased by 57% since summer 2022, according to the World Health Organization.
It adds that climate change is intensifying wildfires and increasing their frequency.
Duthie says insurance firms are adapting to "potential new and increasing risks involved in travel as a result".
In the near term, she says it is unlikely insurance providers will change their policies.
"Current clauses may refer to 'severe' or 'extreme' weather, but the definitions for these can vary and currently no providers go as far as to specify criteria such as maximum temperatures."
However, she says that "longer term there is a chance that we may end up seeing less insurable destinations and increased premiums".
Get in touch
Are you affected by issues discussed in this story? Do you have any questions?
Related topics
- Published3 hours ago
- Published3 hours ago`,
    bodyJa: `フランスとスペインの山火事が旅行計画に与える影響
- 公開されました
スペインとフランスの山火事は大規模な避難と混乱を引き起こし、30万人以上が家を追われ、多くが体育館やその他の一時避難所で眠っている。
火災の被害を受けたフランスの県の当局者は訪問者に対し、近づかないように訴えた。
日曜日、フランス・ジロンド県のソフィー・ブロカス知事は「観光客には来ないよう勧める」と述べ、すでにそこを訪れている人々には別の目的地を検討するようアドバイスした。
影響を受けた地域への休暇を予定している人のために、計画にどのような影響を与える可能性があるかについて知っておくべきことをここに示します。
今すぐフランスかスペインに旅行すべきでしょうか?
英国政府はフランスやスペインへの旅行に対して特に警告はしていないが、注意を呼び掛けている。
フランスでは影響を受けた地域への立ち入りが制限され、道路が急遽閉鎖される可能性があるとしている。さらに避難が行われる可能性もあると付け加えた。
また、フランスでは4月から10月までの夏季に山火事が発生する危険性が高いことについて、一般的な警告も発令した。
フランスまたはスペインの影響を受けた地域にいる人、またはそこへの旅行を計画している人に対して、英国政府は常に地元当局や緊急サービスからの指示や最新情報に従うことを推奨しています。
フランスまたはスペインで緊急援助が必要な場合は、112 に電話してください。
旅行者はまた、英国政府のアドバイスが感動的な出来事に応じて変更される可能性があり、実際に変更される可能性があることにも留意する必要があります。
金融格付け会社デファクトの旅行保険専門家、アンナ・マリー・ダシー氏は、旅行の予約後にこのような事態が発生した場合、「キャンセルや旅行の制限が補償される可能性がある」と話す。
「保険会社がこの補償を提供しているか、保険金を払って補償を含めている場合、大惨事により旅行が中断された場合、追加の旅費と宿泊費も補償される可能性があります」と彼女は付け加えた。
これがあなたに当てはまるかどうかを知るには、ポリシーを確認してください。
山火事はどこで燃えているのでしょうか？
英国政府は、フランス南西部のジロンド県とランド県の一部が影響を受けていると発表した。
フランスの公式山火事地図では、ジロンド州とピレネー＝オリアンタル州に最高の火災警戒レベルが与えられています。一方、オードとヴァールは2番目に高い警戒レベルとなっている。
月曜日の時点で、地図によると、コルシカ島を含む国中で20以上の火災が発生している。
スペインでは、マドリッドとアビラの一部で発生した山火事のため、当局が国家非常事態を宣言した。英国政府は、スペインの他の内陸地域でも山火事の報告があると述べている。
旅行保険は山火事もカバーしますか?
繰り返しになりますが、答えはあなたのポリシーによって異なります。
「山火事によって旅行計画が中断され、旅行中断補償が保険契約に含まれている場合、旅行保険でその費用の一部をカバーできる可能性があります」と英国保険会社協会（ABI）の損害保険部長クリス・ボーズ氏は言う。
しかし、Defaqtoの分析によると、「災害」補償を備えているのは旅行保険契約の半分だけだという。
これは、多くの場合、山火事が発生した場合、旅行者は保険でカバーされない可能性があることを意味します。
これがあなたに当てはまるかどうかを知るには、保険会社に問い合わせるか、保険契約の文言を確認してください。
航空会社または宿泊施設が予約をキャンセルした場合はどうすればよいですか?
航空券や宿泊施設がキャンセルされた場合、ボーズはまず航空会社、ツアーオペレーター、または宿泊施設提供者に払い戻しを求めることをお勧めします。
ダシー氏は、航空会社が山火事の影響でフライトをキャンセルした場合、「再予約の機会を提供するか、全額返金してくれるはずだ」と話す。
彼女は、旅行がパッケージとして予約された場合、この払い戻しは航空券、宿泊施設、送迎を含む「すべての要素」をカバーする必要があると述べています。
「しかし、すべてを別々に予約した場合は、各プロバイダーに個別に対応する必要があります。航空会社はフライトを払い戻すかもしれませんが、宿泊施設に影響がなければ、宿泊施設プロバイダーは払い戻ししない可能性があります。」
今すぐ旅行をキャンセルしたほうがいいでしょうか？
まず、航空券、宿泊施設、旅行の予約について保険契約に記載されている内容を確認してください。
ロリー・ボーランド、「Which?」編集者Travel によれば、これは今後 1 ～ 2 週間以内に旅行の予定がない人に特に当てはまります。
「今キャンセルした旅行者は、払い戻しや再予約の権利を失う可能性が高いです」と彼は言います。
英国政府は両国のどこへの旅行にも警告を出していないため、旅行者は「旅行保険を請求できない可能性が高い」と同氏は言う。
「原則として、保険会社は『旅行への意欲』を考慮に入れません」とボーランド氏は言う。
「代わりに、旅行者は出発日が近くなるまで待って、旅行を進めることができるかどうか、または旅行会社や航空会社がどのような柔軟な予約オプションを提供しているかを確認する必要があります。
「旅行会社は今後数日以内に出発予定の人を優先することになるだろう。」
気候変動は将来旅行保険にどのような影響を与えるでしょうか?
世界保健機関によると、ヨーロッパ全土の山火事により焼失した土地の量は、2022年夏以降57%増加した。
さらに、気候変動により山火事が激化し、その頻度が増加していると付け加えた。
ダシー氏は、保険会社は「結果として旅行に伴う潜在的な新たな増加するリスク」に適応していると述べた。
短期的には、保険会社が保険契約を変更する可能性は低いと彼女は言う。
「現在の条項では『厳しい』または『極端な』天候を指す場合がありますが、その定義はさまざまであり、現時点では最高気温などの基準まで指定しているプロバイダーはありません。」
しかし、「長期的には、保険対象の旅行先が減り、保険料が上昇する可能性がある」と彼女は言う。
連絡する
この記事で取り上げられている問題の影響を受けていますか?何か質問はありますか？
関連トピック
- 3 時間前に公開
- 3 時間前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/ce3qv0ggndno?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-27T13:21:49+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/cd7b/live/3c068830-89ab-11f1-a44b-5525937994ba.jpg",
    readTime: 7,
  },
  {
    id: "federal-reserve-is-likely-to-hold-intere-f797df01",
    title: "Federal Reserve is likely to hold interest rates steady. Here's what that means for consumers",
    titleJa: "FRBは金利を据え置く可能性が高い。これが消費者にとって何を意味するか",
    summaryJa: "FRBは次回7月会合で金利を据え置くと予想されている。インフレ統計が冷え込んでいるにもかかわらず、エネルギー価格の高騰とイランとの緊張再燃でケビン・ウォーシュFRB議長の状況は複雑になっているからだ。ウォーシュ氏がFRBを引き継いだFRBでは、2021年以来インフレ率が目標の2％を上回っているが、インフレの広範な指標である消費者物価指数は先月予想外の低下を記録し、6月の年間インフレ率は3.5％に低下した。しかしその後数週間で、中東の紛争が激化する中、原油価格は再び高騰した。",
    bodyOriginal: `The Federal Reserve is expected to hold interest rates unchanged at its upcoming July meeting — as higher energy prices and renewed tensions with Iran have complicated the picture for Fed Chairman Kevin Warsh, despite cooler inflation data.
While Warsh took over a Fed that has seen inflation exceed its 2% target since 2021, the consumer price index — a broad measure of inflation — posted an unexpected decline last month, bringing the annual inflation rate down to 3.5% in June. But in the weeks that followed, oil prices jumped again amid the escalating conflict in the Middle East.
Traders scaled back expectations for an interest rate hike when the Fed meets this week, according to the CME Group's FedWatch gauge. Market pricing indicates the Fed is more likely to consider a rate move in September.
For Warsh, price stability remains a headwind, despite President Donald Trump's push to bring the federal funds rate down, according to Brett House, an economics professor at Columbia Business School. "It sets up a potential conflict between Trump and the Fed, where his desire for lower interest rates is unlikely to be realized anytime soon," he said.
How the Fed affects your wallet
The Fed's benchmark interest rate determines what banks charge one another for overnight loans. That rate then influences a wide range of consumer borrowing and savings rates.
When the Fed raises its benchmark rate, borrowing becomes more expensive, which can slow economic activity and help ease inflation. Lowering the rate tends to encourage spending and stimulate the economy, but can also contribute to rising prices.
Shorter-term rates are closely pegged to the prime rate, which is typically 3 percentage points above the fed funds rate. Longer-term rates are more dependent on inflation expectations and other economic factors.
"Consumers need to remember that the rates that they face are not set only by the Fed. The bond market has a big hand in determining the rates consumers pay," House said.
The yield on the 10-year Treasury note, which underpins mortgages and other longer-term loans, was up 5 basis points on Thursday. "That's going to keep borrowing costs higher for consumers both on short-term borrowing and the longer-run loans," House said
For example, 15- and 30-year fixed mortgage rates typically follow the lead of Treasury rates and the economy. "Mortgage rates are holding just above 6.50%, as encouraging inflation data is being offset by higher oil prices and renewed tensions between the U.S. and Iran," said Jeff DerGurahian, LoanDepot's chief investment officer and head economist.
Auto loan rates are tied to several factors, including the Fed's benchmark. Since financing costs remain elevated, car buyers are taking on larger and longer loans to combat affordability challenges in the car market, according to the latest data from Edmunds.
Although federal student loan rates are fixed for the life of the loan, rates will rise for new borrowers in the year ahead based on the last 10-year Treasury note auction in May.
By contrast, most credit cards carry variable interest rates, which are tied more directly to the Fed's benchmark. However, with the Fed expected to keep rates unchanged, credit card APRs are likely to remain elevated, as well. The average interest rate on a new credit card offer is currently 23.79%, according to LendingTree.
"The average has been remarkably stable, remaining unchanged in three of the past four months," said Matt Schulz, LendingTree's chief credit analyst.
Savings rates also tend to be correlated with changes in the target federal funds rate. Therefore, holding that rate unchanged has kept savings yields relatively high.
"It's still a good time to save," Schulz said. "CD and high-yield savings account rates are down from their peaks seen a few years ago, but they're still strong by historical standards and are likely to remain that way for a while."`,
    bodyJa: `FRBは次回7月会合で金利を据え置くと予想されている。インフレ統計が冷え込んでいるにもかかわらず、エネルギー価格の高騰とイランとの緊張再燃でケビン・ウォーシュFRB議長の状況は複雑になっているからだ。
ウォーシュ氏がFRBを引き継いだFRBでは、2021年以来インフレ率が目標の2％を上回っているが、インフレの広範な指標である消費者物価指数は先月予想外の低下を記録し、6月の年間インフレ率は3.5％に低下した。しかしその後数週間で、中東の紛争が激化する中、原油価格は再び高騰した。
ＣＭＥグループのフェドウォッチ指標によると、トレーダーらは今週のＦＯＭＣで利上げが行われるとの予想を後退させた。市場価格は、FRBが9月に利上げを検討する可能性が高いことを示している。
コロンビア・ビジネス・スクールのブレット・ハウス経済学教授によると、ドナルド・トランプ大統領がフェデラル・ファンド金利の引き下げを推進しているにもかかわらず、ウォーシュ氏にとって物価の安定は依然として逆風だという。同氏は「これはトランプ氏とFRBとの間に潜在的な対立を生み、金利低下を求める同氏の願望が近いうちに実現する可能性は低い」と述べた。
FRBがあなたの財布に与える影響
FRBの基準金利は、銀行が翌日物ローンに対して相互に請求する金額を決定します。この金利は、消費者の借入金利や貯蓄金利に広範囲に影響を及ぼします。
FRBが基準金利を引き上げると借入コストが高くなり、経済活動が減速しインフレ緩和につながる可能性がある。金利を下げると消費が促進され経済が刺激される傾向がありますが、物価上昇につながる可能性もあります。
短期金利はプライムレートに厳密に固定されており、通常、フェデラルファンド金利よりも 3% ポイント高くなります。長期金利はインフレ期待やその他の経済要因により大きく左右されます。
ハウス氏は「消費者は、自分たちが直面する金利はFRBだけが設定しているわけではないことを覚えておく必要がある。消費者が支払う金利の決定には債券市場が大きな関与をしている」と述べた。
住宅ローンやその他の長期ローンを支える１０年米国債の利回りは木曜、５ベーシスポイント上昇した。下院議員は「これにより、短期借入と長期ローンの両方で消費者の借入コストが上昇し続けるだろう」と述べた。
たとえば、15 年および 30 年の固定住宅ローン金利は通常、財務省金利と経済の影響に従います。ローンデポの最高投資責任者兼首席エコノミスト、ジェフ・ダーグラヒアン氏は「前向きなインフレ統計が原油価格の上昇と米国とイラン間の緊張再燃によって相殺されており、住宅ローン金利は６．５０％をわずかに上回る水準で推移している」と述べた。
自動車ローン金利は、FRBのベンチマークなど、いくつかの要因に関係しています。エドマンズの最新データによると、資金調達コストが依然として上昇しているため、自動車購入者は自動車市場における手頃な価格の課題に対抗するために、より大規模かつ長期のローンを組んでいます。
連邦学生ローン金利はローン期間中固定されているが、5月に行われた前回10年物財務省証券入札に基づいて、今後1年間に新規借り手の金利は上昇することになる。
対照的に、ほとんどのクレジットカードは変動金利を採用しており、FRBのベンチマークとより直接的に結びついています。しかし、FRBが金利を据え置くと予想されているため、クレジットカードの年利も引き続き上昇する可能性が高い。 LendingTree によると、新規クレジット カードの平均金利は現在 23.79% です。
レンディングツリーのチーフクレジットアナリスト、マット・シュルツ氏は「平均は驚くほど安定しており、過去４カ月のうち３カ月は変化がなかった」と述べた。
貯蓄率は、目標フェデラルファンド金利の変化とも相関する傾向があります。したがって、金利を据え置くことで貯蓄利回りは比較的高く保たれている。
「まだ貯蓄するには良い時期だ」とシュルツ氏は語った。 「CDと高利回り普通預金口座の金利は、数年前のピークからは下がっているが、歴史的な基準からすると依然として堅調で、しばらくはこの状態が続く可能性が高い。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/27/fed-interest-rates-july.html",
    publishedAt: "2026-07-27T12:15:01+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "nvidia-spacex-microsoft-launch-ai-safety-5a07d1be",
    title: "Nvidia, SpaceX, Microsoft launch AI safety initiative as OpenAI cyberattack fallout continues",
    titleJa: "OpenAI サイバー攻撃の余波が続く中、Nvidia、SpaceX、Microsoft が AI 安全性イニシアチブを開始",
    summaryJa: "Microsoft、SpaceX、Palantir は、米国やヨーロッパの他の数十のテクノロジー企業とともに、Open Secure AI Alliance に参加しています。",
    bodyOriginal: `Nvidia and a host of tech giants on Monday launched a new artificial intelligence safety initiative focused on open models, as the fallout from a cyberattack committed by rogue OpenAI models continues.
Last week, it emerged that the target of the attack, startup Hugging Face, was unable to use leading U.S. frontier models to defend itself, with guardrails not distinguishing between aggressor and defender. Instead, it turned to a self-hosted, open-weight Chinese model, which was not bound by those same restrictions.
In the wake of U.S. lawmakers increasingly weighing how to curb growing adoption of Chinese AI models, the most advanced of which are open weight, tech giants have launched an initiative aimed at building and sharing open AI tools.
Open models can be downloaded, modified and self-hosted, in contrast to closed models — including frontier systems built by Anthropic and OpenAI — which can only be accessed through specific infrastructure.
"The Open Secure AI Alliance will work to remediate and disclose vulnerabilities using open technologies," Nvidia said in a statement. "The recent Hugging Face security incident delivered a clear reminder: cyber defenders need open, frontier agentic systems for self-defense."
Alongside Nvidia, other members of the alliance include Microsoft, SpaceX, Palantir, and dozens of other tech companies from the U.S. and Europe.
The push to curb Chinese AI
There are growing calls for measures to limit access to models built by Chinese AI companies, which have been accused of campaigns to extract information from U.S. rivals' systems, known as "distillation" — when one model extracts knowledge from a better-trained model.
Last week, Treasury Secretary Scott Bessent threatened sanctions on Chinese companies that commit distillation attacks against U.S. companies.
"There is a real possibility the US government does impose restrictions on Chinese models," Chris McGuire, senior fellow for China and emerging technologies, at think tank the Council on Foreign Relations, told CNBC.
That could include a ban on transactions involving the models, such as purchasing tokens via an API or U.S. companies hosting the model on the cloud and charging customers for inference, he said.
"In Washington this is not a debate about open-source vs closed-source, it is a debate about whether or not to tolerate Chinese IP theft," McGuire said. "Any actions would be focused on Chinese companies, not the open-source ecosystem."
But with the majority of the most capable open-source models being built by Chinese companies, there are concerns over restrictions.
Last week, Nvidia, Microsoft, Meta, Palantir and more than 20 other companies released a letter urging policymakers to avoid "premature restrictions" on open-weight AI models that would "stifle competition or drive innovation overseas."
The OpenAI-Hugging Face incident showed a "practical truth," said Nvidia. "When defenders cannot inspect, adapt and run advanced AI on their own infrastructure, their ability to respond is constrained at exactly the moment speed matters most."`,
    bodyJa: `不正な OpenAI モデルによるサイバー攻撃の影響が続く中、Nvidia と多くのハイテク大手は月曜日、オープン モデルに焦点を当てた新しい人工知能の安全性への取り組みを開始しました。
先週、攻撃の標的となった新興企業ハギング・フェイス社は、ガードレールが攻撃側と防御側を区別していなかったために、自社を守るために米国の最先端モデルを利用できなかったことが判明した。代わりに、同じ制限に拘束されない、自主開催の無差別級中国モデルに目を向けました。
米国の議員らが中国のAIモデル（最も先進的なモデルはオープンウェイト）の導入拡大をどのように抑制するかを検討するようになっていることを受けて、ハイテク大手はオープンAIツールの構築と共有を目的とした取り組みを開始した。
オープン モデルは、特定のインフラストラクチャを介してのみアクセスできるクローズド モデル (Anthropic や OpenAI によって構築されたフロンティア システムを含む) とは対照的に、ダウンロード、変更、自己ホストが可能です。
Nvidiaは声明で、「Open Secure AI Allianceは、オープンテクノロジーを使用して脆弱性を修復し、公開するよう努める」と述べた。 「最近のハグフェイスのセキュリティインシデントは、サイバー防御者には自衛のためにオープンなフロンティアエージェントシステムが必要であるということを明確に思い出させました。」
Nvidia のほかに、このアライアンスの他のメンバーには、Microsoft、SpaceX、Palantir、および米国とヨーロッパのその他のテクノロジー企業数十社が含まれます。
中国のAI抑制への取り組み
中国のAI企業が構築したモデルへのアクセスを制限する措置を求める声が高まっている。中国のAI企業は、あるモデルがよりよく訓練されたモデルから知識を抽出する「蒸留」として知られる、米国のライバル企業のシステムから情報を抽出するキャンペーンを行っていると非難されている。
スコット・ベッセント財務長官は先週、米国企業に対して蒸留攻撃を行った中国企業への制裁を示唆した。
「米国政府が中国モデルに制限を課す可能性は実際にある」とシンクタンク外交問題評議会の中国・新興技術担当上級研究員クリス・マクガイア氏はCNBCに語った。
これには、API経由でトークンを購入したり、クラウド上でモデルをホストし、推論に対して顧客に課金したりする米国企業など、モデルに関わる取引の禁止が含まれる可能性があると同氏は述べた。
「ワシントンでは、これはオープンソースかクローズドソースかについての議論ではなく、中国の知的財産窃盗を容認するか否かについての議論だ」とマクガイア氏は述べた。 「いかなる行動も、オープンソースエコシステムではなく、中国企業に焦点を当てることになるだろう。」
しかし、最も有能なオープンソース モデルの大部分は中国企業によって構築されているため、制限に対する懸念があります。
先週、Nvidia、Microsoft、Meta、Palantir、その他20社以上の企業は、「海外での競争を阻害したり、イノベーションを推進したりする」無差別AIモデルに対する「時期尚早な制限」を避けるよう政策立案者に求める書簡を発表した。
OpenAI-Hugging Face 事件は「現実的な真実」を示したと Nvidia は述べた。 「防御側が独自のインフラストラクチャで高度な AI を検査、適応、実行できない場合、スピードが最も重要な瞬間に対応する能力が制限されます。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/27/nvidia-ai-initiative-openai-cyber-attack.html",
    publishedAt: "2026-07-27T11:32:45+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 4,
  },
  {
    id: "ford-wants-more-customers-to-customize-v-121728d2",
    title: "Ford wants more customers to customize vehicles to boost profits as it eyes 'Nike shoe drop' moments",
    titleJa: "フォードは「ナイキ靴落ち」の瞬間を見据え、より多くの顧客に車両をカスタマイズして利益を増やしてもらいたいと考えている",
    summaryJa: "ミシガン州ブルックリン — フォード・モーターは、収益を拡大し、530億ドル規模の米国のアフターマーケット産業をよりうまく活用するために、アクセサリーおよび部品事業を拡大している。フォード・カスタマイゼーションのエグゼクティブ・ディレクター、マット・シンプソン氏によると、自動車メーカーは、エクステリアのディテールや車両のラッピングから、パフォーマンスパーツやシステムに至るまで、アフターマーケット製品を増やし、新車や特別版の車両モデルなど、「ナイキのシューズドロップ」に例えられるような特別な瞬間をさらに増やすことを計画しているという。",
    bodyOriginal: `BROOKLYN, Mich. — Ford Motor is expanding its accessory and parts business in an effort to boost profits and better tap into the $53 billion U.S. aftermarket industry.
The automaker is planning to increase its aftermarket products — from exterior detailing and vehicle wraps to performance parts and systems — and have more exclusive moments it's comparing to a "Nike shoe drop," with new and special-edition vehicle models, according to Matt Simpson, Ford Customization's executive director.
"Think like a 'Nike dropping a sneaker' is the vision," Simpson told CNBC during an event at the Michigan International Speedway racetrack here promoting the company's efforts. "We're significantly increasing our investment in this group to bring more choice and to engage customers in this aftersales."
Automakers have long used special-edition vehicles and souped-up models to boost vehicle prices and profits, but Ford says it is methodically taking steps to increase customers' ability to customize vehicles across all price levels.
That includes expanding accessories as well as investing additional resources in Ford Custom Garage, which launched last year as a one-stop shop for customizations from the carmaker.
Ford Custom Garage's first shoe-like "vehicle drop" occurred Monday. It unveiled a sunrise-inspired Ford Bronco SUV that wouldn't be out of place in a new Barbie movie — although the company's designers say they did not have the Mattel toy in mind when developing the vehicle.
The automaker said it will produce 1,000 of the limited-edition Broncos with the Desert Rising package as part of the Ford Custom Garage's new Bronco Horizon Series. The $13,695 package boosts the vehicle's price to $57,350.
Other full packages through the Ford Custom Garage start at thousands of dollars and can run up to $16,000 to $18,000 for some Mustang performance packages and nearly $27,000 for a special performance version of the F-150 pickup truck.
"It is a growth lever for us. It's been a good business for us. We think it can be significantly bigger, hence the investment," Simpson said.
The efforts come as vehicles have grown increasingly more complex and harder for individual owners or non-automaker certified stores to work on in the aftermarket.
CEO Jim Farley came under fire last month after President Donald Trump said Ford and crosstown rival General Motors were supporting legislation to make it harder to keep owners from working on their own vehicles.
Farley later clarified that he thinks customers shouldn't work on cars under warranty since new vehicles require specialty tools. He has touted the automaker's aftermarket business as a major growth opportunity, including by boosting software services in addition to traditional parts and accessories.
Ford has said it is targeting growing its $15 billion high-margin software and physical services revenue — which includes its customization business — by 8% annually through the end of this decade.
"We've never had a Ford showroom as prime for this as we have today," Simpson said. "Bronco, the Mustang, Maverick, the F-Series, this is the most passionate lineup of vehicles that Ford has ever had."
Ford reports 46% of its new vehicle buyers in the U.S. customize their vehicles in some way, with Bronco buyers leading, followed by consumers with Mustang pony cars and pickup trucks.
Simpson declined to disclose exact growth targets for the customization division but said Ford is aiming to increase the number of buyers who opt into those packages as well as the money they're spending on them.
"The more that someone spends on accessories with us, the higher the loyalty is," Simpson said.
The Specialty Equipment Market Association, an auto aftermarket trade association, reports U.S. consumers spent $52.9 billion on vehicle accessories and modifications in 2025.
Unlike when a customer puts parts or accessories onto their vehicle after purchase, Ford is including customizations through its efforts into a new vehicle's warranty. Buyers also have the option to roll the cost of additional parts and packages into their monthly vehicle payments for the purchase or lease of the car, truck or SUV.
"Even with declining sales and unaffordability squeeze, a lot of these accessories, especially the kind of basic, like I want to protect my vehicle, that's margin for the dealer to add in," Simpson said.`,
    bodyJa: `ミシガン州ブルックリン — フォード・モーターは、収益を拡大し、530億ドル規模の米国のアフターマーケット産業をよりうまく活用するために、アクセサリーおよび部品事業を拡大している。
フォード・カスタマイゼーションのエグゼクティブ・ディレクター、マット・シンプソン氏によると、自動車メーカーは、エクステリアのディテールや車両のラッピングから、パフォーマンスパーツやシステムに至るまで、アフターマーケット製品を増やし、新車や特別版の車両モデルなど、「ナイキのシューズドロップ」に例えられるような特別な瞬間をさらに増やすことを計画しているという。
シンプソン氏は当地のミシガン・インターナショナル・スピードウェイ競馬場で行われた同社の取り組みを宣伝するイベントで、「『ナイキがスニーカーを落とした』ように考えるのがビジョンだ」とCNBCに語った。 「私たちは、より多くの選択肢を提供し、顧客をこのアフターセールスに参加させるために、このグループへの投資を大幅に増やしています。」
自動車メーカーは長年、車両価格と利益を上げるために特別仕様車や改良モデルを利用してきたが、フォードは顧客があらゆる価格帯で車両をカスタマイズできるよう、計画的に措置を講じていると述べた。
これには、自動車メーカーのカスタマイズのためのワンストップショップとして昨年立ち上げられたFord Custom Garageに追加リソースを投資するだけでなく、アクセサリの拡張も含まれます。
フォード・カスタム・ガレージで初めて靴のような「車両落下」が月曜日に発生した。バービーの新作映画に登場しても違和感のない、日の出をイメージしたフォード・ブロンコのSUVを発表したが、同社のデザイナーらは車両の開発時にマテル社の玩具を念頭に置いていなかったと述べている。
自動車メーカーは、フォード・カスタム・ガレージの新しいブロンコ・ホライゾン・シリーズの一環として、デザート・ライジング・パッケージを備えた限定版ブロンコを1,000台生産すると発表した。 13,695ドルのパッケージにより、車両価格は57,350ドルに引き上げられます。
フォード・カスタム・ガレージを通じた他のフルパッケージは数千ドルから始まり、マスタングの一部のパフォーマンスパッケージでは最高1万6000ドルから1万8000ドル、F-150ピックアップトラックの特別パフォーマンスバージョンでは2万7000ドル近くになることがある。
シンプソン氏は「これは我々にとって成長の手段だ。我々にとっては良いビジネスだった。我々はこの事業が大幅に拡大する可能性があると考えており、そのために投資した」と述べた。
この取り組みは、自動車がますます複雑化し、個人所有者や自動車メーカー以外の認定店がアフターマーケットで取り組むのが難しくなっている中で行われた。
ジム・ファーリー最高経営責任者（CEO）は先月、ドナルド・トランプ大統領が、フォードと郊外のライバルであるゼネラル・モーターズが、所有者が自分の車で働くことを難しくする法案を支持していると発言したことで批判を浴びた。
ファーリー氏は後に、新車には特殊な工具が必要なため、顧客は保証期間中の車の作業をすべきではないと考えていると明らかにした。同氏は、従来の部品や付属品に加えてソフトウェアサービスの強化など、自動車メーカーのアフターマーケット事業を大きな成長機会として宣伝してきた。
フォードは、カスタマイズ事業を含む利益率の高い150億ドルのソフトウェアおよび物理的サービスの収益を、今10年末まで毎年8％増加させることを目標にしていると述べた。
「今日ほどこの分野に最適なフォードのショールームはありませんでした」とシンプソン氏は語った。 「ブロンコ、マスタング、マーベリック、F シリーズ、これはフォードがこれまでに所有した中で最も情熱的な車両のラインナップです。」
フォードの報告によると、米国の新車購入者の46％が何らかの方法で車をカスタマイズしており、ブロンコの購入者がトップで、マスタングのポニー車やピックアップトラックを所有する消費者がそれに続く。
シンプソン氏はカスタマイズ部門の正確な成長目標の開示を拒否したが、フォードはこれらのパッケージを選択する購入者の数と、それらのパッケージに費やす金額を増やすことを目指していると述べた。
シンプソン氏は、「誰かが私たちと一緒にアクセサリーに費やすほど、ロイヤルティは高くなります」と述べた。
自動車アフターマーケット業界団体である特殊機器市場協会は、米国の消費者が 2025 年に自動車の付属品や改造に 529 億ドルを費やしたと報告しています。
顧客が購入後に自分の車に部品や付属品を取り付ける場合とは異なり、フォードはその取り組みによるカスタマイズを新車の保証に含めています。購入者は、自動車、トラック、SUV の購入またはリースの月々の車両支払いに、追加の部品やパッケージの費用を組み込むオプションもあります。
シンプソン氏は、「売上が減少し、価格が厳しくなったとしても、これらのアクセサリの多く、特に車を保護したいなどの基本的なアクセサリは、ディーラーが追加できる余裕がある」と述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/27/ford-vehicle-customization-bronco.html",
    publishedAt: "2026-07-27T10:00:01+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "u-s-and-iran-pause-fighting-to-give-peac-30e3c306",
    title: "U.S. and Iran pause fighting to give peace talks 'space.' Here's where negotiations stand",
    titleJa: "米国とイランは和平交渉に「スペース」を与えるため戦闘を一時停止。ここが交渉の場です",
    summaryJa: "米国とイランの間の敵対行為は月曜日に一時停止するかに見えたが、イランは10日間の停戦に合意したとのメディア報道を否定した。外交官らが和平交渉に「一定のスペース」を与えようとしたため、米軍は金曜日、２週間にわたる空爆を中止した。イランもここ数日、地域目標に対する軍事作戦を控えているが、パキスタンで停滞している外交努力の再開を求める中国主導の動きを受けて、報復すると述べた。",
    bodyOriginal: `A temporary hiatus to hostilities between the U.S. and Iran appeared to hold on Monday, but Iran denied media reports that it had agreed to a 10-day ceasefire.
The U.S. military brought a halt to two weeks of strikes on Friday as diplomats sought to give peace talks "some space." Iran, which has also refrained from military operations against regional targets in recent days, has said it will reciprocate following a China-led push to resume stalled diplomatic efforts in Pakistan.
Iran's foreign ministry spokesperson Esmail Baghaei on Monday said Iran "currently have no negotiations with the United States," reiterating that official ongoing talks are solely with Oman regarding the future of the Strait of Hormuz.
While the U.S. and Iran have paused hostilities, other actors did undertake military action related to the conflict over the weekend, highlighting the risk of further escalation and the complex challenges facing negotiators.
The Saudi military conducted strikes on Iran-backed Houthi targets in Yemen following the rebel group's attacks on Red Sea shipping in recent days.
Meanwhile, the Ukrainian military reportedly struck an Iranian commercial vessel in the Caspian Sea, killing one sailor and injuring another. Kyiv said the vessel was being used to transport military cargo supporting Russia's invasion of the country, while Tehran decried the attack as a "hostile and criminal act."
Nevertheless, investors were cheered by the pause in hostilities, which followed not long after the White House was said to be considering a "massive attack" on Iran. Oil prices plunged by more than 7% early on Monday as futures markets pointed to strong performance on Wall Street.
The challenge facing negotiators
But experts caution that prospects for a lasting peace face serious challenges. The U.S. and Iran are not currently in direct, official talks, but negotiating via intermediaries.
When direct talks are possible, negotiators will have to agree on controversial topics, such as the future of Iran's nuclear program, sanctions relief and Tehran's support for its proxy groups in the Middle East.
From an economic perspective, the most important negotiating point will be guarantees of maritime security and the return and normalization of toll-free, two-way traffic flows through the strategically vital Strait of Hormuz.
The strait, through which a fifth of global oil supply flowed before the conflict, remains subject to an ongoing U.S. blockade.
Iran's Baghaei said on Monday that the situation in the Strait of Hormuz has "not changed and it is still closed."
Oman, which sits on the opposite side of the strait to Iran, has emerged as a key player in negotiations. An Omani delegation was reportedly in Tehran on Friday and Saturday in efforts to negotiate a provisional arrangement to manage the transit of shipping through the waterway.
Baghaei described talks on Friday and Saturday as "useful discussions."
Oman has also said talks have been constructive, but analysts warn that normalization of traffic is unlikely in the short-term.
"The main market risk remains the energy and shipping front," Deutsche Bank analysts wrote in a Monday note. "Traffic through Hormuz remains severely disrupted, while the conflict has broadened into the Red Sea."
"This raises the prospect of simultaneous disruption to both Gulf and Red Sea export routes. So a welcome pause from the main actors but a fragile one, especially with side battles still ongoing."`,
    bodyJa: `米国とイランの間の敵対行為は月曜日に一時停止するかに見えたが、イランは10日間の停戦に合意したとのメディア報道を否定した。
外交官らが和平交渉に「一定のスペース」を与えようとしたため、米軍は金曜日、２週間にわたる空爆を中止した。イランもここ数日、地域目標に対する軍事作戦を控えているが、パキスタンで停滞している外交努力の再開を求める中国主導の動きを受けて、報復すると述べた。
イラン外務省のエスマイル・バガエイ報道官は月曜日、イランは「現在米国と交渉を行っていない」と述べ、ホルムズ海峡の将来に関して公式に進行中の交渉はもっぱらオマーンとの間で行われていると繰り返した。
米国とイランが敵対行為を一時停止している一方で、他の関係者も週末に紛争に関連した軍事行動を起こしており、さらなる激化のリスクと交渉関係者が直面する複雑な課題を浮き彫りにしている。
ここ数日の反政府勢力による紅海の船舶攻撃を受けて、サウジ軍はイエメンにあるイランが支援するフーシ派の標的への攻撃を実施した。
一方、ウクライナ軍はカスピ海でイラン商船を衝突し、船員１人が死亡、もう１人が負傷したと伝えられている。キエフは、この船はロシアの同国侵略を支援する軍需品の輸送に使用されていたと述べ、一方テヘランはこの攻撃を「敵対的で犯罪行為」だと非難した。
それにもかかわらず、ホワイトハウスがイランへの「大規模攻撃」を検討しているといわれてから間もなく、敵対関係が一時停止したことで投資家らは歓喜した。先物市場がウォール街の堅調な業績を示したため、原油価格は月曜早朝に7％以上下落した。
交渉者が直面する課題
しかし専門家らは、恒久的な平和の見通しは深刻な課題に直面していると警告している。米国とイランは現在、直接の公式協議を行っておらず、仲介者を通じて交渉している。
直接対話が可能となった場合、交渉担当者はイランの核開発計画の将来、制裁緩和、中東の代理組織に対するイランの支援など物議を醸す議題について合意する必要がある。
経済的な観点から見ると、最も重要な交渉ポイントは、海洋安全保障の保証と、戦略的に重要なホルムズ海峡を通る無料双方向交通の流れの復帰と正常化だろう。
この海峡は紛争前、世界の石油供給の5分の1が流れていたが、現在も米国による封鎖が続いている。
イランのバガイ氏は月曜日、ホルムズ海峡の状況は「変わっておらず、依然として閉鎖されている」と述べた。
イランと海峡を挟んで反対側に位置するオマーンが交渉の主要国として浮上している。伝えられるところによると、オマーンの代表団は金曜日と土曜日にテヘランを訪れ、水路を通る船舶の輸送を管理するための暫定協定の交渉に努めた。
バガイ氏は金曜日と土曜日の会談を「有益な議論」だったと述べた。
オマーンも協議は建設的だったと述べているが、アナリストは短期的に交通が正常化する可能性は低いと警告している。
ドイツ銀行のアナリストらは月曜のメモで、「主な市場リスクは依然としてエネルギーと海運の面にある」と述べた。 「ホルムズを通る交通は依然として深刻な混乱が続いており、紛争は紅海にまで拡大している。」
「これにより、湾岸と紅海の両方の輸出ルートが同時に混乱する可能性が高まっている。したがって、主要な主体の一時停止は歓迎すべきことだが、特にサイドの戦いがまだ続いているため、脆弱なものである。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/27/us-iran-war-trump-hormuz.html",
    publishedAt: "2026-07-27T09:55:17+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "fivefold-increase-for-chinese-chip-maker-6392078b",
    title: "Fivefold increase for Chinese chip maker CXMT in Shanghai debut",
    titleJa: "中国のチップメーカーCXMTが上海デビューで5倍に増加",
    summaryJa: "CXMTは時価総額850億ドルで取引初日を終えた",
    bodyOriginal: `CXMT  closed its first day of trading with a market capitalization of $85 billion`,
    bodyJa: `CXMTは時価総額850億ドルで取引初日を終えた`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/fivefold-increase-for-chinese-chip-maker-cxmt-in-shanghai-debut-2861827e?mod=mw_rss_topstories",
    publishedAt: "2026-07-27T09:51:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-55645569",
    readTime: 2,
  },
  {
    id: "spain-and-france-wildfires-force-more-th-07a88b74",
    title: "Spain and France wildfires force more than 300,000 to flee as Macron calls crisis meeting",
    titleJa: "スペインとフランスの山火事で30万人以上が避難を余儀なくされ、マクロン大統領が危機会合を招集",
    summaryJa: "山火事はフランス南部を襲いスペインにも広がり、今週さらに予想される熱波を前に30万人以上が避難を余儀なくされている。フランスのエマニュエル・マクロン大統領は月曜日に危機閣議を開催する予定で、スペインのペドロ・サンチェス首相はスペイン東部バレンシアの火災被害地域を訪問する予定だ。",
    bodyOriginal: `Wildfires are ravaging southern France and spreading into Spain, forcing more than 300,000 people to flee ahead of further expected heatwaves during the week.
French President Emmanuel Macron is set to hold a crisis cabinet meeting on Monday, while Spain's Prime Minister Pedro Sanchez will visit areas hit by fires in Valencia, in the East of Spain.
The fire, which began in the Southwest of France in Gironde on Wednesday, has burned 42,000 hectares (nearly 104,000 acres) and has forced one of the largest evacuations in France's history, according to French broadcaster France 24 and local news outlets. The wildfires have also affected 77,000 hectares (around 190,000 acres) of the Avila and Toledo areas in Western Madrid.
"The situation remains highly unfavorable," France's Interior Minister Laurent Nunez said on X on Saturday, according to a Google translation. "At the start of the night, in Gironde, the fire became extremely virulent and unpredictable again, generating its own wind and spreading erratically toward the Bordeaux metropolitan area. By the end of the night, it had calmed down somewhat."
On Saturday, France's Prime Minister Sébastien Lecornu said the wildfires are a "historic situation" for the country, with nearly 100,000 hectares (247,000 acres) burned since the beginning of the year – an "unprecedented" level.
Meanwhile, French Finance Minister Roland Lescure said the crisis has delivered a blow to the local economy. "It's like a clap of thunder for an area which could have done without this," he told reporters.
Since the start of the disaster, 2,500 firefighters, 1,500 military personnel, and nearly 1,200 police have been deployed to bring the fire under control, Nunez said.
In the latest developments, the main government centre for the Bordeaux area known as the Gironde prefecture, said Monday, "the situation remained generally stable during the night from Sunday to Monday, with no major developments to report."
The gigantic fire has been labelled an extremely dangerous and rare "pyrocumulonimbus" — a type of fire cloud which generates its own winds and whirlwinds, making it "erratic and unmanageable," Nicolas Braz, a firefighter Captain, told AFP.
Artificial landscape exacerbates fires
Stefan Doerr, a professor of wildland fire science at Swansea University, said climate change and poor landscape management are contributing to the increasing intensity of the fires.
"Climate change plays a major role in this, and better management certainly means that we should manage the landscape better for not propagating fire through it," Doerr said on CNBC's "Squawk Box Europe."
The abandonment of agricultural land in parts of southern Europe, especially in the Mediterranean and parts of Madrid, has allowed flammable grasses, shrubs and dense forests to spread, making fires harder to contain during extreme heat and drought, Doerr said.
"And that simply means if we have these extreme weather conditions, these extreme droughts, if there is an ignition, it just becomes much more difficult to fight," Doerr said.
Additionally, Doerr told CNBC Europe has been shaped by thousands of years of agriculture and human activity, with many forests now consisting of dense conifer plantations that are more prone to wildfires.
"If we had a natural landscape, we would have actually, in some places, at least far less flammable forests," he said. "This is man-made. It's not that the plants are not natural, but the way the landscape looks now is entirely artificial."
Doerr said Europe isn't necessarily unprepared for wildfires as they occur every year in the Mediterranean regions.
"What is so unusual, really, is that we've now [had] the third consecutive heatwave that really dried out the landscape, and that means once we have an ignition, that can really escalate into a very severe fire," he said. "The overall scale of the events now is beyond the capability of dealing with it effectively."
Doerr acknowledged that Europe has strengthened its firefighting capacity, but argued it has not made enough progress in reducing wildfire risk before blazes start.
"This is essentially [about] better land management, better preparation for fires, better communication, and also better science compared to just better firefighting resources, which, as we see now, are just too far stretched," he said.`,
    bodyJa: `山火事はフランス南部を襲いスペインにも広がり、今週さらに予想される熱波を前に30万人以上が避難を余儀なくされている。
フランスのエマニュエル・マクロン大統領は月曜日に危機閣議を開催する予定で、スペインのペドロ・サンチェス首相はスペイン東部バレンシアの火災被害地域を訪問する予定だ。
フランス放送局フランス24や地元報道機関によると、水曜日にフランス南西部ジロンド県で発生した火災は4万2000ヘクタール（約10万4000エーカー）を焼き、フランス史上最大規模の避難を余儀なくされた。山火事はマドリード西部のアビラとトレド地域の7万7000ヘクタール（約19万エーカー）にも影響を与えた。
グーグル翻訳によると、フランスの内務大臣ローラン・ヌニェスは土曜日のX放送で「状況は依然非常に好ましくない」と述べた。 「夜の始まりに、ジロンドでは火災が再び非常に毒性が強く予測不可能になり、独自の風を発生させてボルドー都市圏に向かって不規則に広がりました。夜の終わりまでに、それはいくらか沈静化しました。」
土曜日、フランスのセバスチャン・ルコルニュ首相は、山火事は同国にとって「歴史的な状況」であり、年初からほぼ10万ヘクタール（24万7千エーカー）が焼かれており、これは「前例のない」レベルであると述べた。
一方、フランスのロラン・レスキュール財務大臣は、危機が地元経済に打撃を与えていると述べた。同氏は記者団に対し、「これがなければ済んだはずの地域にとっては雷が鳴ったようなものだ」と語った。
ヌニェス氏によると、災害発生以来、火災を鎮圧するために消防士2,500人、軍人1,500人、警察1,200人近くが出動したという。
最新の状況について、ジロンド県として知られるボルドー地域の主要政府センターは月曜日、「日曜から月曜にかけて夜間の状況は概ね安定しており、報告すべき大きな進展はなかった」と述べた。
この巨大火災は極めて危険で稀な「輝積乱雲」と分類されているが、これは自らの風や旋風を発生させ、「不安定で手に負えない」火の雲の一種であると消防士大尉のニコラス・ブラズ氏はAFPに語った。
人工の景観が火災を悪化させる
スウォンジー大学の野生火災科学教授ステファン・ドーア氏は、気候変動と不適切な景観管理が火災の激甚化に寄与していると述べた。
「これには気候変動が大きな役割を果たしており、管理を改善するということは、火災が伝播しないように景観をより適切に管理する必要があることを意味するのは確かだ」とドーア氏はCNBCの番組「Squawk Box Europe」で語った。
南ヨーロッパの一部、特に地中海とマドリッドの一部で農地が放棄されたことで、可燃性の草、低木、密林が広がり、猛暑と干ばつの際に火災を鎮火することが困難になっている、とドーア氏は述べた。
「それは単純に、このような異常気象や極端な干ばつが発生した場合、発火が起きた場合、戦うことがさらに困難になることを意味します」とドーア氏は語った。
さらに、ドーア氏はCNBCに対し、ヨーロッパは数千年にわたる農業と人間の活動によって形成されており、多くの森林は現在、山火事が発生しやすい針葉樹の密集したプランテーションで構成されていると語った。
「もし私たちに自然の景観があれば、実際には、場所によっては、少なくとも可燃性の森林がはるかに少なくなっているでしょう」と彼は言いました。 「これは人工です。植物が自然でないわけではありませんが、現在の風景の見え方は完全に人工的です。」
ドーア氏は、地中海地域では山火事が毎年発生しているため、ヨーロッパでは必ずしも山火事への備えができていないわけではないと述べた。
「本当に異常なのは、今、3回連続の熱波が発生し、地形が本当に乾燥しているということだ。つまり、ひとたび発火すると、非常に深刻な火災にまで発展する可能性があるということだ」と同氏は語った。 「現在の出来事の全体的な規模は、効果的に対処する能力を超えています。」
ドーア氏は、欧州が消火能力を強化していることは認めたが、火災が始まる前に山火事のリスクを軽減する点では十分な進歩が得られていないと主張した。
「これは本質的に、より良い土地管理、より良い火災へのより良い準備、より良いコミュニケーション、そしてより良い科学でもありますが、これは、今私たちが目にしているように、あまりにも行き過ぎている消防資源のより良いものと比較したものです」と彼が言いました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/27/wildfires-spain-france-bordeaux-heatwave.html",
    publishedAt: "2026-07-27T09:27:09+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "i-feel-lucky-i-m-71-and-inherited-20-00-e0ec8a8e",
    title: "‘I feel lucky’: I’m 71 and inherited $20,000. What should I do with this money?",
    titleJa: "「幸運だと感じています」: 私は 71 歳で、2 万ドルを相続しました。このお金はどうすればいいですか？",
    summaryJa: "「私は IRA、高利回り普通預金口座、CD 4 枚、当座預金口座と普通預金口座を持っています。」",
    bodyOriginal: `“I have an IRA, a high-yield savings account, four CDs and checking and savings accounts.”`,
    bodyJa: `「私は IRA、高利回り普通預金口座、CD 4 枚、当座預金口座と普通預金口座を持っています。」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/i-feel-lucky-im-71-and-inherited-20-000-what-should-i-do-with-this-money-1ab90925?mod=mw_rss_topstories",
    publishedAt: "2026-07-27T09:15:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-33239683",
    readTime: 2,
  },
  {
    id: "trump-paused-attacks-on-iran-to-make-spa-6cb527d3",
    title: "Trump paused attacks on Iran to make space for talks, US ambassador says",
    titleJa: "トランプ大統領は対話の余地を作るためにイランへの攻撃を一時停止したと米国大使が語る",
    summaryJa: "トランプ大統領は対話の余地を作るためにイランへの攻撃を一時停止したと米国大使が語る- 公開されました",
    bodyOriginal: `Trump paused attacks on Iran to make space for talks, US ambassador says
- Published
President Donald Trump has paused attacks on Iran for the second night in a row to give diplomacy more time, the US ambassador to the UN said.
Speaking to Fox News on Sunday, ambassador Mike Waltz said the president was "giving talks some space, he's giving it a little bit of room".
An Iranian army spokesperson said on Sunday that Tehran had halted "retaliatory" attacks in the region in response. The pause follows nearly two weeks of daily US strikes and tit-for-tat attacks, effectively unravelling the ceasefire struck in June.
Oil prices have dropped sharply in the wake of the pause, opening at $91per barrel on Monday morning after hitting $100 for the first time since May last week.
Asked whether Trump had decided against escalation for now, Waltz told NBC: "I wouldn't go that far at all. The president is keeping all options on the table."
Waltz also rejected reports in the New York Times, external that administration officials had warned expanding hostilities could dangerously drain a diminished stockpile of air defence munitions.
"The US military... has everything that it needs to conduct this campaign as effectively as it needs to be," he said.
As of Sunday evening, Trump had not spoken publicly on the latest developments, but earlier posted computer-generated images on his Truth Social account that depicted US military planes bombing Iranian ships and Kharg island.
Meanwhile, Iran and Oman held several rounds of technical talks in Tehran on Friday and Saturday to discuss management of the Strait of Hormuz, according to Iranian foreign ministry spokesman Esmail Baghaei.
Disputes over control of the strait reignited US-Iran tensions earlier this month and it remains a major block to permanently ending the war.
Iran and the US signed a memorandum of understanding in June to halt military operations and reopen the strait, as well as to reach an agreement to end the war over the following 60 days.
But after Iranian forces attacked tankers in the Strait of Hormuz on 13 July, the US resumed airstrikes on the country and reinstated its naval blockade on Iranian ports.
Iran retaliated with attacks on US military facilities and bases across the Middle East, killing four American soldiers. The US strikes have since killed dozens of people, according to Iran's health ministry.
In the UK, new Defence Secretary Wes Streeting said he would meet his US counterpart Pete Hegseth in the coming week to discuss the strait, which is one of the world's key transport routes for oil, liquid natural gas and other essential commodities.
"When it comes to securing maritime freedom and free commercial shipping in the Strait of Hormuz, that's where we are absolutely aligned," Streeting told the BBC.
Last week, oil prices hit $100 a barrel for the first time since May, as the renewed fighting stoked fears over global energy supplies.
As the war nears its fifth month, it remains largely unpopular in the US, with a new poll from CBS/YouGov suggesting 57% of Americans are frustrated about the conflict and only 19% optimistic.
Thousands of people have been killed across the Middle East since the US-Israeli war with Iran began in February, official figures show, with the vast majority coming from Iran and Lebanon.
President Trump is set to meet Israeli Prime Minister Benjamin Netanyahu in the White House on Tuesday.
- Published2 days ago
- Published2 days ago`,
    bodyJa: `トランプ大統領は対話の余地を作るためにイランへの攻撃を一時停止したと米国大使が語る
- 公開されました
米国の国連大使は、ドナルド・トランプ大統領が外交に時間を与えるため、2夜連続でイランへの攻撃を一時停止したと述べた。
マイク・ウォルツ大使は日曜、FOXニュースのインタビューで、大統領が「対話にスペースを与えている、少しだけ余地を与えている」と語った。
イラン軍報道官は日曜、イラン政府がこれに応じて地域での「報復」攻撃を停止したと述べた。この停止は、米国によるほぼ2週間にわたる毎日の攻撃と報復攻撃に続くもので、6月に締結された停戦は事実上解体された。
原油価格は一時停止を受けて急落し、先週５月以来初めて１バレル＝１００ドルを付けた後、月曜朝には１バレル＝９１ドルで取引を開始した。
ウォルツ氏はトランプ大統領が今のところエスカレーションを見送る決断を下したかどうかとの質問に対し、「私はそこまでは全く考えない。大統領はあらゆる選択肢をテーブルの上に置いている」とＮＢＣに語った。
ワルツ氏はまた、敵対行為の拡大により防空弾薬の減少する備蓄が危険なまでに枯渇する可能性があると政権当局者が警告したというニューヨーク・タイムズの社外報道も否定した。
「米軍は…この作戦を必要なだけ効果的に実施するために必要なものをすべて備えている」と彼は語った。
日曜夕方の時点で、トランプ大統領は最新の動向について公には発言していないが、これに先立ち、米軍機がイランの船舶やハルグ島を爆撃する様子を描いたコンピューター生成画像を自身の真実ソーシャルアカウントに投稿していた。
一方、イラン外務省のエスマイル・バガイ報道官によると、イランとオマーンは金曜日と土曜日にテヘランで数回の技術協議を開催し、ホルムズ海峡の管理について話し合った。
海峡の制圧を巡る紛争で今月初めに米国とイランの緊張が再燃しており、戦争を永久に終わらせる上で依然として大きな障害となっている。
イランと米国は６月、軍事作戦を停止して海峡を再開するとともに、その後６０日間で戦争を終わらせる合意に達する覚書に署名した。
しかし、7月13日にイラン軍がホルムズ海峡でタンカーを攻撃した後、米国は同国への空爆を再開し、イラン港湾の海上封鎖を再開した。
イランは中東各地の米軍施設や基地を攻撃し報復し、米兵４人が死亡した。イラン保健省によると、その後の米国の空爆により数十人が死亡した。
英国では、ウェス・ストリーティング新国防長官が来週、米国のピート・ヘグセス国防長官と会談し、石油、液体天然ガス、その他の必需品の世界の重要な輸送ルートの一つである海峡について話し合う予定だと述べた。
ストリーティング氏はBBCに対し、「ホルムズ海峡における海洋の自由と自由な商船の確保に関しては、我々は完全に一致している」と語った。
先週、新たな戦闘で世界のエネルギー供給に対する不安が高まるなか、原油価格は5月以来初めて1バレル＝100ドルに達した。
戦争が5カ月目に近づいているが、アメリカ国内では依然として大部分が不人気であり、CBS/YouGovの最新世論調査によると、アメリカ人の57％が紛争に不満を抱いており、楽観視しているのはわずか19％だという。
公式統計によると、2月に米国・イスラエルとイランの戦争が始まって以来、中東全土で数千人が殺害され、その大部分がイランとレバノンから来ている。
トランプ大統領は火曜日にイスラエルのベンヤミン・ネタニヤフ首相とホワイトハウスで会談する予定だ。
- 2 日前に公開
- 2 日前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c5y45kdkynpo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-27T08:14:46+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/77dd/live/1590f3b0-890c-11f1-84f3-d921f52926a2.jpg",
    readTime: 4,
  },
  {
    id: "chinese-chipmaker-shares-surge-470-in-bl-0e62b025",
    title: "Chinese chipmaker shares surge 470% in blockbuster stock market debut",
    titleJa: "中国の半導体メーカー株、大ヒット株式市場デビューで470％上昇",
    summaryJa: "中国の半導体メーカー株、大ヒット株式市場デビューで470％上昇- 公開されました",
    bodyOriginal: `Chinese chipmaker shares surge 470% in blockbuster stock market debut
- Published
Shares in China's biggest memory chip maker have surged by more than 470% as they made their debut on the Shanghai Stock Exchange's tech-heavy Star Market.
The surge has pushed ChangXin Memory Technologies' (CXMT) stock market valuation to around 3.3 trillion yuan ($487.3bn; £364.9bn), making it the most valuable listed company in mainland China.
The spectacular debut comes despite a sharp sell-off in technology stocks around the world this month.
CXMT manufactures dynamic random-access memory (Dram) chips that power artificial intelligence (AI) data centres, mobile phones, PCs, tablets and other devices.
The firm, which was founded in 2016 by Chairman Zhu Yiming, is headquartered in Hefei, Anhui Province in eastern China.
The company has said it plans to use most of the proceeds from the initial public offering (IPO) to boost production of memory chips and carry out more research and developments.
The stellar performance of its IPO will offer some comfort to Chinese financial officials, who have been rolling out measures to help curb a stock market slump that wiped out more than $1.5tn in recent weeks.
Analysts said the jump was also being driven by demand for the shares far outstripping supply.
"The reason for the extraordinary bounce this morning is that only 7% of the shares are available for trading," Anna Macdonald, investment strategy director at Hargreaves Lansdown told the BBC's Today programme.
It also highlights Chinese investors' strong appetite for a homegrown chipmaker, as the government in Beijing pushes ahead with plans to make its technology industry self-reliant.
South Korean tech giants Samsung Electronics and SK Hynix and US-based Micron dominate the Dram market, with the three companies accounting for around 90% of global production.
Earlier this month, SK Hynix raised $26.5bn (£19.8bn) in its New York share offering, marking the largest ever listing by a foreign firm in the US.
The company, a key supplier to AI chip giant Nvidia, said it had sold 177.9 million American depositary shares for $149 each.
The shares surged as much as 17% on Friday in their first day of trading on the Nasdaq but have since given up some of that gain.
SK Hynix saw its market value top $1tn in its home country in May, lifted by the boom in demand for AI chips.`,
    bodyJa: `中国の半導体メーカー株、大ヒット株式市場デビューで470％上昇
- 公開されました
中国最大のメモリチップメーカーの株価は、上海証券取引所のハイテク産業が多いスター市場に初登場し、470％以上急騰した。
この急騰により、長信記憶科技（CXMT）の株式市場評価額は約3兆3000億元（4873億ドル、3649億ポンド）にまで上昇し、中国本土で最も価値のある上場企業となった。
今月、世界中のハイテク株が急落したにもかかわらず、この華々しいデビューが実現した。
CXMT は、人工知能 (AI) データセンター、携帯電話、PC、タブレット、その他のデバイスに電力を供給するダイナミック ランダム アクセス メモリ (Dram) チップを製造しています。
同社は2016年に朱一明会長によって設立され、中国東部の安徽省合肥に本社を置いている。
同社は、新規株式公開（IPO）で得た収益のほとんどをメモリチップの生産拡大とさらなる研究開発の実施に充てる計画だと述べた。
同社のIPOの素晴らしい業績は、ここ数週間で1兆5000億ドル以上を吹き飛ばした株式市場の低迷を抑制するための措置を展開してきた中国の金融当局者にとって、ある程度の安心感をもたらすだろう。
アナリストらは、供給をはるかに上回った株式への需要も高騰の原動力となっていると述べた。
ハーグリーブス・ランズダウンの投資戦略ディレクター、アンナ・マクドナルド氏はBBCのトゥデイ番組で、「今朝の異常な反発の理由は、取引に利用できる株式が7％しかないからだ」と語った。
また、北京政府がテクノロジー産業の自立化計画を推進する中、中国の投資家が国産チップメーカーに強い意欲を持っていることも浮き彫りになった。
韓国のハイテク大手サムスン電子とSKハイニックス、米国に本拠を置くマイクロンがドラム市場を独占しており、この3社で世界生産の約90％を占めている。
今月初め、SKハイニックスはニューヨーク株式売り出しで265億ドル（198億ポンド）を調達し、外国企業による米国上場としては史上最大規模となった。
AIチップ大手エヌビディアへの主要サプライヤーである同社は、米国預託株式1億7,790万株を1株あたり149ドルで売却したと発表した。
同社株は金曜日、ナスダック市場での取引初日に最大17％上昇したが、その後はその上昇分の一部を手放した。
SKハイニックスは、AIチップの需要急増により、5月に本国での時価総額が1兆ドルを超えた。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c9q9w3x9qn2o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-27T07:34:59+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/0377/live/bb1db120-896a-11f1-a3ae-0dbbd1718109.jpg",
    readTime: 3,
  },
  {
    id: "new-uk-prime-minister-burnham-says-he-wo-fa432664",
    title: "New UK Prime Minister Burnham says he would be prepared to call out Trump",
    titleJa: "英国のバーナム新首相、トランプ氏を呼び出す用意があると発言",
    summaryJa: "英国の新首相アンディ・バーナムは、重要な大西洋を越えた関係の方向性を定めるドナルド・トランプ米大統領に対し、英国の国益を守るために喜んで呼び掛けると述べた。バーナム氏は日曜日に放送されたBBCのインタビューで、トランプ氏が正式に就任した月曜日に電話で会話したと述べ、それが「良いやりとり」であり、トランプ氏は「温かい」と感じたと述べた。",
    bodyOriginal: `The U.K.'s new prime minister, Andy Burnham, said he would be willing to call out U.S. President Donald Trump to defend the U.K.'s national interest, as he set the tone for the key trans-Atlantic relationship.
Speaking to the BBC in an interview aired Sunday, Burnham said he had a phone conversation with Trump on Monday when he officially took on the role, describing it as "a good exchange" and that he found Trump "warm".
"We will continue to build the relationship as we go forward," Burnham added.
Asked if Burnham would place his trust in Trump, Burnham said: "it's a changing world isn't it, and you just obviously have to call things as they develop".
Trump has frequently criticized the U.K., among other European and NATO allies, for not pulling their weight in the U.S.-led war on Iran.
But Trump has welcomed Burnham's plan to fast-track oil and gas exploration in already-licensed fields in the North Sea. Writing on Truth Social last week, Trump called North Sea oil "invaluable," adding it will take the U.K. from a "Poverty Stricken Disaster, to one of the Richest Countries anywhere in the World!"
Trump had criticized Burnham's predecessor, Keir Starmer, over the U.K.'s energy policy. In an interview with The Telegraph newspaper in April, Trump said: "All Starmer wants is costly windmills that are driving your energy prices through the roof."
Starmer announced last month that he would step down from his post. His two years in office were marked by a series of policy U-turns, scandals over staffing appointments and a dramatic loss in Britain's local elections which sparked calls for his resignation from within his own ranks.
Asked by BBC journalist Laura Kuenssberg if he would call out Trump if it was the right thing to do, Burnham said, "of course", and added: "You have to defend your own national interest before anything else. That's what you're required to do if you're to do this job properly."
"I can't at any point say that I won't take a different opinion from him, that I will need to voice a different idea that is right for Britain," Burnham said.
Defense spending
Burnham declined to be drawn on a date for raising defense spending to 3% of GDP.
John Healey, the U.K.'s new finance minister – known as the Chancellor of the Exchequer – under Burnham, is expected to see defense spending as a priority. Healey's appointment as Burnham's second-in-command came just weeks after he resigned as Starmer's defense minister, citing his view that the government was "unwilling to commit the resources that the nation needs to defend the country."
Burnham said: "I appointed my new chancellor very aware of what he had said about the critical importance of defense spending and the position that he had taken about that.
"The first challenge facing us both is to ensure that the defense investment plan is fully funded and that's the thing that's right in front of us and we need to work that through as we go towards the budget later this year."
Starmer had announced in June an extra £15 billion ($19.9 billion) in defense spending over the next four years as part of the U.K.'s Defence Investment Plan (DIP), which will lift annual spending to £79.1 billion by 2029, or 2.7% of GDP.
The DIP is intended to bolster the U.K.'s military capability, its nuclear deterrent and industrial capacity, while making way for greater technical investment in areas like cybersecurity, drones and AI.
But analysts warn that high levels of public debt and the highest borrowing costs among its G7 peers could constrain the new government's ability to dramatically boost spending.`,
    bodyJa: `英国の新首相アンディ・バーナムは、重要な大西洋を越えた関係の方向性を定めるドナルド・トランプ米大統領に対し、英国の国益を守るために喜んで呼び掛けると述べた。
バーナム氏は日曜日に放送されたBBCのインタビューで、トランプ氏が正式に就任した月曜日に電話で会話したと述べ、それが「良いやりとり」であり、トランプ氏は「温かい」と感じたと述べた。
「我々は今後も関係を築き続けていく」とバーナム氏は付け加えた。
バーナム氏がトランプ氏を信頼するかとの質問に対し、バーナム氏は「世界は変わりつつある。当然、事態の進展に応じて判断する必要がある」と述べた。
トランプ大統領は、米国主導の対イラン戦争で力を発揮しなかったとして、欧州やNATOの同盟国の中でも英国を頻繁に批判してきた。
しかしトランプ大統領は、北海のすでに認可された油田での石油・ガス探査を急ぐというバーナムの計画を歓迎している。トランプ大統領は先週、真実ソーシャルに寄稿し、北海石油は「計り知れないほど貴重」であると述べ、英国を「貧困に苦しむ惨事から世界で最も裕福な国の一つに」導いてくれるだろうと付け加えた。
トランプ氏は英国のエネルギー政策をめぐり、バーナム氏の前任者キア・スターマー氏を批判していた。トランプ大統領は4月のテレグラフ紙とのインタビューで、「スターマーが望んでいるのは、エネルギー価格を高騰させる高価な風車だけだ」と語った。
スターマー氏は先月、その職を辞任すると発表した。彼の在任期間の2年間は、一連の政策の方向転換、人事人事をめぐるスキャンダル、そして英国の地方選挙での劇的な敗北によって特徴づけられ、内部から辞任を求める声が高まった。
BBCジャーナリストのローラ・クエンスバーグ氏から、もしそれが正しいことであればトランプ氏を非難するかとの質問に対し、バーナム氏は「もちろん」と答え、「何よりもまず自分自身の国益を守らなければならない。この仕事を適切に遂行するためには、それが求められることだ」と付け加えた。
バーナム氏は「いかなる時点でも、彼と異なる意見をとらないとは言えない。英国にとって正しい別の考えを表明する必要がある」と語った。
防衛費
バーナム氏は国防費を国内総生産（ＧＤＰ）比３％に引き上げる日程についての指名を拒否した。
バーナム政権下で大蔵大臣として知られる英国の新財務大臣ジョン・ヒーリー氏は、防衛支出を優先事項とみなすと予想されている。ヒーリー氏がバーナム政権の副司令官に任命されたのは、政府が「国を守るために必要な資源を投入することに消極的である」という見解を理由に、スターマー国防相を辞任したわずか数週間後のことだった。
バーナム首相は、「私は新首相が国防費の極めて重要性について述べたことと、それについての首相の立場をよく理解して任命した。
「我々双方が直面する最初の課題は、防衛投資計画に十分な資金が確実に投入されるようにすることであり、それが我々の目の前にあることであり、今年後半の予算編成に向けて取り組む必要がある。」
スターマー氏は6月、英国の国防投資計画（DIP）の一環として今後4年間で追加の国防支出を150億ポンド（199億ドル）増やすと発表しており、これにより年間支出は2029年までに791億ポンド（国内総生産（GDP）の2.7％）に引き上げられる予定だ。
DIPは英国の軍事力、核抑止力、産業能力を強化すると同時に、サイバーセキュリティ、ドローン、AIなどの分野での技術投資の拡大に道を開くことを目的としている。
しかしアナリストらは、高水準の公的債務とG7諸国の中で最も高い借入コストが新政府の歳出を大幅に拡大する能力を制約する可能性があると警告している。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/26/new-uk-prime-minister-burnham-says-he-would-be-prepared-to-call-out-trump.html",
    publishedAt: "2026-07-27T05:06:47+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "why-trump-s-new-tariff-blitz-is-very-dif-1e6eeca5",
    title: "Why Trump's new tariff blitz is very different this time round",
    titleJa: "トランプ大統領の新たな関税電撃作戦が今回は大きく異なる理由",
    summaryJa: "米国とイランの軍事紛争が6か月目に入る中、ドナルド・トランプ大統領はより身近な戦場である世界貿易に戻ってきた。トランプ大統領は金曜日、欧州連合、中国、英国、カナダを含む60の貿易相手国を対象とした新たな関税電撃作戦を開始した。最新の関税の波は東部時間午前12時1分に発効した。金曜日、7月24日に期限切れとなった一時しのぎの10％の基本関税に代わり、10％から12.5％の範囲となる。",
    bodyOriginal: `As the U.S. military conflict with Iran enters its sixth month, President Donald Trump has returned to a more familiar battleground: global trade.
Trump on Friday launched a fresh tariff blitz targeting 60 trading partners, including the European Union, China, the U.K. and Canada. The latest wave of tariffs — which took effect at 12:01 a.m. E.T. Friday, replacing the stopgap 10% baseline tariff that expired July 24 — range from 10% to 12.5%.
Initial market reaction Friday was muted, with the renewed tariff push largely anticipated by investors, given the approaching expiry of the previous duties. That contrasts with the 'shock and awe' approach that underpinned the sweeping 'Liberation Day' levies announced in April 2025, which sent markets plummeting.
However, investors and analysts say the circumstances surrounding the latest tariff push are markedly different this time round, landing amid a more challenging global economic landscape than last year and underpinned by a separate legal framework, potentially risking a lasting drag on markets.
An emboldened White House
"The significance this time around is twofold," said Emma Moriarty, portfolio manager at CG Asset Management.
"Not only does it show the Trump administration's commitment to tariffs, but it shows this commitment against a backdrop of a global energy shock and increasing supply chain bottlenecks. They appear content to continue to levy new tariffs even when they exacerbate domestic markets. For markets, the implications should be clear: we have to position for a low growth and high inflation outcome," Moriarty said.
The measures come as global stock markets continue to grapple with the impact of ongoing hostilities in the Middle East, which have seen oil prices rebound above $100 this week as hopes of a negotiated ceasefire in the war continue to recede.
"While the outcome won't come as a complete shock to markets, it is nonetheless another unwelcome source of uncertainty as sentiment is buffeted by the renewed conflict between the U.S. and Iran and concerns about levels of expenditure in the tech sector," said Russ Mould, investment director at AJ Bell.
The White House administration had been expected to seek an alternative route toward a new round of tariffs following the Supreme Court's ruling in February that the previous tariffs were illegal. The new onslaught is being pursued via Section 301 of the Trade Act of 1974, with officials citing alleged forced labor practices as the reason for the new tariffs.
Specifically, countries that have adopted or committed to introducing prohibitions will face a 10% duty, while those that haven't will be subject to a 12.5% charge, with the levies affecting 99.4% of American imports.
Alan Siow, co-head of EM corporate debt at Ninety One Asset Management, said the White House appears to be adapting to such legal constraints and may be emboldened by limited retaliation and no clear inflation spike.
"These latest tariffs seem to be an evolution of the opening tariff salvos," Siow said, adding that he expects other countries to respond in a more measured way initially, reserving escalation until the policy's likely impact becomes clearer.
A permanent drag on markets?
Looking ahead, Martin Jacob, professor of accounting and control at IESE Business School in Barcelona, said the reintroduction of tariffs hints at the White House's ambition to preserve import levies as a "lasting feature" of U.S. economic policy.
As the previous temporary measures neared their expiry deadlines, that put pressure on the White House to establish more permanent tariff regimes, Jacob explained. "The latest measures therefore represent more than another short-term negotiating salvo," he added.
Matthew Ryan, head of market strategy at global financial services firm Ebury, said the durability of the new levies risks a more lasting structural pressure point for markets.
"Following a brief hiatus, the dreaded T-word is back on investors' lips," Ryan said. "The move to Section 301 removes the legal vulnerability that allowed the Supreme Court to strike down the previous round of import taxes. With that legal escape hatch now closed, markets may need to start pricing tariffs as a structural drag on global growth rather than a transient risk to be negotiated away."
Ryan added that attention now turns to next week's Federal Open Market Committee announcement, with the recent jump in oil prices raising the possibility that the Fed could hike interest rates later this year. That marks a shift from earlier expectations that it would hold steady through year-end before cutting in 2027, and Ryan expects policymakers to keep the option of a hike open.`,
    bodyJa: `米国とイランの軍事紛争が6か月目に入る中、ドナルド・トランプ大統領はより身近な戦場である世界貿易に戻ってきた。
トランプ大統領は金曜日、欧州連合、中国、英国、カナダを含む60の貿易相手国を対象とした新たな関税電撃作戦を開始した。最新の関税の波は東部時間午前12時1分に発効した。金曜日、7月24日に期限切れとなった一時しのぎの10％の基本関税に代わり、10％から12.5％の範囲となる。
金曜の当初の市場の反応は鈍く、以前の関税の期限切れが近づいていることを踏まえ、投資家は再関税の発動を大方予想していた。これは、市場を急落させた2025年4月に発表された大幅な「解放記念日」賦課金を支えた「衝撃と畏怖」のアプローチとは対照的である。
しかし、投資家やアナリストらは、今回の関税推進を取り巻く状況は今回は著しく異なっており、昨年よりも世界経済が厳しい状況にある中で上陸し、別の法的枠組みに支えられており、潜在的に市場に永続的な足かせとなるリスクがあると述べている。
勇気あるホワイトハウス
CGアセット・マネジメントのポートフォリオマネジャー、エマ・モリアーティ氏は「今回の重要性は2つある」と語る。
「これはトランプ政権の関税に対するコミットメントを示すだけでなく、世界的なエネルギーショックやサプライチェーンのボトルネックの増大を背景にこのコミットメントを示している。国内市場を悪化させても新たな関税を課し続けることに満足しているようだ。市場にとって、その影響は明らかであるはずだ。我々は低成長と高インフレという結果に向けて態勢を整えなければならない」とモリアーティ氏は述べた。
この措置は、世界の株式市場が中東で続く敵対行為の影響に引き続き対応している中で行われたもので、戦争の交渉による停戦への期待が後退し続ける中、今週原油価格は100ドルを超えて反発している。
ＡＪベルの投資ディレクター、ラス・モールド氏は「この結果は市場にとって完全な衝撃となるわけではないが、それでも米国とイランの新たな対立やハイテク分野の支出水準への懸念によってセンチメントが弱められているため、これもまた望ましくない不確実性の源となっている」と述べた。
最高裁判所が２月に前回の関税は違法であるとの判決を下したことを受け、ホワイトハウス政権は新たな関税発動に向けた代替ルートを模索するとみられていた。新たな猛攻は1974年通商法第301条に基づいて追及されており、当局者らは新たな関税の理由として強制労働行為の疑いを挙げている。
具体的には、禁止措置を導入している国、または導入を約束している国には10％の関税が課される一方、そうでない国には12.5％の課徴金が課せられ、この課徴金は米国の輸入品の99.4％に影響を与えることになる。
ナインティ・ワン・アセット・マネジメントのエマージング社債部門共同責任者、アラン・シオウ氏は、ホワイトハウスはこうした法的制約に適応しているようで、限定的な報復と明確なインフレ急騰がないことで勇気づけられる可能性があると述べた。
シオウ氏は「これらの最新の関税は、初期関税一斉発動の進化版のようだ」と述べ、他国も当初はより慎重な対応をし、政策の影響がより明確になるまでエスカレーションは留保すると予想していると付け加えた。
市場への永続的な足かせとなるでしょうか？
バルセロナのIESEビジネススクールの会計・管理教授マーティン・ジェイコブ氏は、今後を見据えて、関税の再導入は輸入関税を米国の経済政策の「永続的な特徴」として維持するというホワイトハウスの野心を示唆していると述べた。
これまでの暫定措置の期限が近づくにつれ、より恒久的な関税制度を確立するようホワイトハウスに圧力がかかった、とジェイコブ氏は説明した。 「したがって、最新の措置は、単なる短期的な交渉の一斉射撃以上の意味を持つ」と同氏は付け加えた。
世界的な金融サービス会社イーブリーの市場戦略責任者マシュー・ライアン氏は、新たな賦課金の持続性により、市場にとって構造的な圧力がさらに永続するリスクがあると述べた。
「短い休止期間を経て、恐ろしいTワードが再び投資家の口に上がった」とライアン氏は語った。 「第301条への移行により、最高裁判所が前回の輸入税の取り消しを可能にした法的脆弱性が取り除かれる。その法的逃げ口が閉ざされた今、市場は交渉で回避すべき一時的なリスクではなく、世界成長に対する構造的な足かせとして関税を設定し始める必要があるかもしれない。」
ライアン氏は、最近の原油価格の高騰によりFRBが年内に利上げする可能性が高まっており、注目は来週の連邦公開市場委員会の発表に移っていると付け加えた。これは、2027年に利下げするまで年末まで安定するとのこれまでの予想からの変化を示しており、ライアン氏は政策当局者が利上げの選択肢を残しておくと予想している。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/27/donald-trump-tariffs-trade-war-iran.html",
    publishedAt: "2026-07-27T05:04:43+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 5,
  },
  {
    id: "china-memory-chipmaker-cxmt-skyrockets-5-3f1d9b66",
    title: "China memory chipmaker CXMT skyrockets 500% in blockbuster Shanghai debut",
    titleJa: "中国のメモリチップメーカーCXMT、大ヒット上海デビューで500%急騰",
    summaryJa: "半導体メーカー長新科技集団の株価は月曜、ハイテク産業が多い上海のSTAR市場に初登場して500％以上上昇し、CXMTは中国で最も価値のある上場企業となった。合肥に本拠を置く同社は、IPOの価格を1株当たり8.66元とした後、579億2000万元（86億ドル）を調達し、今年これまででアジア最大の規模となった。",
    bodyOriginal: `Shares of chipmaker Changxin Technology Group rose more than 500% Monday as they debuted on Shanghai's tech-heavy STAR Market, making CXMT the most valuable China-listed company.
The Hefei-based company raised 57.92 billion yuan ($8.6 billion) after pricing its IPO at 8.66 yuan per share, making it Asia's biggest so far this year.
CXMT shares were last trading at 52 yuan, giving the company a market cap of about 3.5 trillion yuan.
Based on sales figures for the fourth quarter of 2025, CXMT held a 7.67% share of the global DRAM market in 2025, according to its IPO prospectus. DRAM chips are used in electronic devices ranging from smartphones to servers.
Read more
The global DRAM market is dominated by Samsung Electronics, SK Hynix, and Micron Technology.
"I have no doubt the company is going to grow to be a global leader. It's maybe just a question of time that it can be not only a challenger, it can be a global champion in this particular sector," said Theodore Shou, CEO at Yiyi Capital on CNBC's "Squawk Box Asia."
The listing comes at a time when CXMT has seen increased attention, following reports earlier this month that Apple has begun testing the Chinese chipmaker's DRAM for devices sold in China.
CXMT swung to an operating profit of 35.43 billion yuan in the first quarter from a loss of 2.83 billion yuan a year earlier, as it saw continued growth in global computing power demand and capacity allocation by major manufacturers.
"A 470% performance on day one isn't that rare. What's very prominent in this particular case is a company of this size performing so well," Shou said. In the past, such performance was primarily driven by smaller-cap companies, he said, adding that for CXMT, the relatively limited free float on day one, combined with the built-up market sentiment, were key factors driving the surge.
Morningstar said in a note Friday that as AI is increasingly becoming an issue of national security for China, CXMT will likely be a key beneficiary. The research firm added that while CXMT's technology still lags global memory leaders, domestic internet giants spearheading AI development will likely drive robust adoption of its chips as Beijing pushes for semiconductor self-sufficiency.
CXMT, founded in 2016 by Chairman Zhu Yiming, plans to boost its technological capabilities and core competitiveness, primarily memory wafer mass production and R&D projects, by employing the IPO proceeds, according to a Google translation of the information in the prospectus.
"I think we are nearing a short-term peak in terms of sentiment around the memory cycle," Shou warned, adding that investors have already been selling into the IPO, particularly in China. "These memory chip businesses are sustainable, but the great margins and net profitability we're seeing today are not sustainable and have to normalize over a cycle," he said.
He also added that while this may not be the peak for share prices, the market is right at the peak of a demand and supply imbalance.`,
    bodyJa: `半導体メーカー長新科技集団の株価は月曜、ハイテク産業が多い上海のSTAR市場に初登場して500％以上上昇し、CXMTは中国で最も価値のある上場企業となった。
合肥に本拠を置く同社は、IPOの価格を1株当たり8.66元とした後、579億2000万元（86億ドル）を調達し、今年これまででアジア最大の規模となった。
CXMT株の最終取引価格は52元で、同社の時価総額は約3兆5000億元となった。
IPO目論見書によると、2025年第4四半期の売上高に基づくと、CXMTは2025年に世界のDRAM市場で7.67％のシェアを獲得した。 DRAMチップは、スマートフォンからサーバーに至るまで、さまざまな電子機器に使用されています。
続きを読む
世界の DRAM 市場は、Samsung Electronics、SK Hynix、Micron Technology によって独占されています。
イーイー・キャピタルの最高経営責任者（CEO）セオドア・ショウ氏はCNBCの番組「Squawk Box Asia」で、「同社が世界的リーダーに成長することに疑いはない。同社がこの分野で挑戦者であるだけでなく、世界的なチャンピオンになれるのも時間の問題かもしれない」と語った。
この上場は、アップルが中国で販売されるデバイス向けに中国のチップメーカーのDRAMのテストを開始したとの今月初めの報道を受けて、CXMTへの注目が高まっているタイミングで行われた。
CXMTは、世界的なコンピューティング能力の需要と大手メーカーによる容量割り当ての継続的な増加を背景に、第1四半期の営業利益は前年同期の28億3000万元の損失から354億3000万元の利益に転じた。
「初日のパフォーマンスが 470% であることは、それほど珍しいことではありません。この特定のケースで非常に顕著なのは、この規模の企業が非常に優れたパフォーマンスを示しているということです」とショウ氏は言いました。同氏は、これまでこうした業績は主に小型株企業によってもたらされていたと述べ、CXMTの場合、初日の浮動株が比較的限られていたことと、蓄積された市場センチメントが急騰を促進する主な要因だったと付け加えた。
モーニングスターは金曜日のメモで、AIが中国にとって国家安全保障の問題になりつつある中、CXMTが重要な恩恵を受ける可能性が高いと述べた。同調査会社は、CXMTの技術はいまだ世界のメモリリーダーに遅れをとっているものの、中国政府が半導体の自給自足を推進する中、AI開発を主導する国内のインターネット大手が同社チップの積極的な採用を推進する可能性が高いと付け加えた。
目論見書の情報をGoogle翻訳したところによると、CXMTは2016年に朱一銘会長によって設立され、IPOの収益を活用して主にメモリウェーハの量産と研究開発プロジェクトで技術力と核となる競争力を強化する計画だという。
ショウ氏は「記憶循環を巡るセンチメントの観点からは、短期的なピークに近づいていると思う」と警告し、特に中国では投資家がすでにIPOに売り込んでいると付け加えた。同氏は、「これらのメモリーチップ事業は持続可能だが、今日我々が見ている大きな利益率と純利益は持続可能ではなく、サイクルを経て正常化する必要がある」と述べた。
同氏はまた、今は株価のピークではないかもしれないが、市場はまさに需要と供給の不均衡のピークにあると付け加えた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/27/cxmt-china-market-debut-chipmaker-ipo.html",
    publishedAt: "2026-07-27T03:29:54+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "oil-prices-sink-stock-futures-rally-as-u-81419032",
    title: "Oil prices sink, stock futures rally as U.S. and Iran pause attacks, Wall Street awaits busy week",
    titleJa: "米国とイランが攻撃を一時停止する中、原油価格は下落、株価先物は上昇、ウォール街は忙しい週を待つ",
    summaryJa: "米国とイランが戦闘を一時停止し、ウォール街がFRBの会合と大手ハイテク企業の重要な決算報告に向けて準備を整えるなか、日曜日には米国の株価指数先物が上昇し、原油価格が下落した。",
    bodyOriginal: `U.S. stock-index futures rallied and oil prices tumbled on Sunday as the U.S. and Iran took a pause from fighting, and as Wall Street gears up for the Fed’s meeting and key earnings reports from Big Tech companies.`,
    bodyJa: `米国とイランが戦闘を一時停止し、ウォール街がFRBの会合と大手ハイテク企業の重要な決算報告に向けて準備を整えるなか、日曜日には米国の株価指数先物が上昇し、原油価格が下落した。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/oil-prices-sink-stock-futures-rally-as-u-s-and-iran-pause-attacks-wall-street-awaits-busy-week-75030e00?mod=mw_rss_topstories",
    publishedAt: "2026-07-27T03:02:00+00:00",
    category: "エネルギー",
    imageUrl: "https://images.mktw.net/im-36741421",
    readTime: 2,
  },
  {
    id: "shein-swings-to-99m-loss-as-trump-tariff-8a63e712",
    title: "Shein swings to $99m loss as Trump tariffs hit sales",
    titleJa: "トランプ大統領の関税が売上に打撃を与え、シェイン氏は9,900万ドルの損失に揺れる",
    summaryJa: "トランプ大統領の関税が売上に打撃を与え、シェイン氏は9,900万ドルの損失に揺れる- 公開されました",
    bodyOriginal: `Shein swings to $99m loss as Trump tariffs hit sales
- Published
Shein says it swung to a quarterly loss as its sales slowed after US President Donald Trump removed an import duty exemption on small packages.
It also comes as uncertainty remains over the tit-for-tat US-China tariffs wars, which is currently paused.
The fast-fashion giant, which has its headquarters in Singapore but was founded in China, said it lost $99m (£74.1m) in the first three months of the year, compared with a net income of $395m a year earlier.
The announcement is part of the firm's preparations ahead of its stock market debut in Hong Kong, although the filing did not give any details on the size, timetable or pricing of the planned initial public offering (IPO).
"In response to the increased duties and taxes, we are pursuing a wide range of options, including increasing our prices in the US market to offset a portion of the increased costs," Shein said in the filing.
The company also said the Iran war had hit demand, increased costs and caused delays of deliveries in some markets.
The first-quarter figures also partly reflected a paper loss of $328m due to an accounting change for special investor shares. The shares can be turned into ordinary stock later, and their value can change before a listing.
The filing showed that in the year to the end of March 2026 Shein had 281 million active customers - a rise of more than 16% on a year earlier - who placed a total of more than one billion orders.
On 10 July, the China Securities Regulatory Commission (CSRC) gave Shein approval for a Hong Kong share sale after failed attempts to list in New York and London.
The Hong Kong share listing is expected to take place in the coming months.
The figures show the impact of a Trump-signed executive order to end a global tariff exemption that had been used by US shoppers of low-cost goods.
That order, which came into effect on 29 August 2025, broadened an earlier presidential action which specifically targeted cheap products from China and Hong Kong to cover the rest of the world.
The so-called de minimis exemption had allowed goods valued at $800 or less to enter the US without paying any tariffs. US consumers relied on the exemption to buy cheap goods from online commerce sites like Shein and Temu.
The White House said the global exemption was being used to "evade tariffs and funnel deadly synthetic opioids" to the US.
"The removal of the US de minimis exemption has had an adverse impact on our sales in the US and the overall growth of our net revenues," Shein said in the filing.
Earlier in July, the European Union imposed a €3 (£2.56; $3.42) levy on low-value e-commerce imports.
The measure is aimed to curb what the trading bloc has said is unfair competition from China.`,
    bodyJa: `トランプ大統領の関税が売上に打撃を与え、シェイン氏は9,900万ドルの損失に揺れる
- 公開されました
シェイン氏は、ドナルド・トランプ米大統領が小型荷物に対する輸入関税の免除措置を撤廃したことを受けて売上が鈍化し、四半期損失に陥ったと述べた。
また、現在中断されている米中の報復関税合戦をめぐる不確実性が依然として残っていることも背景にある。
シンガポールに本社を置き、中国で設立されたこのファストファッション大手は、前年同期の純利益が3億9,500万ドルだったのに対し、今年最初の3か月で9,900万ドル（7,410万ポンド）の損失を出したと発表した。
この発表は香港での株式市場デビューに先立った同社の準備の一環だが、申請書には計画されている新規株式公開（IPO）の規模、スケジュール、価格などの詳細は記載されていない。
シェイン氏は提出書類の中で、「関税と税金の増加に対応し、コスト増加の一部を相殺するために米国市場での価格を引き上げるなど、幅広い選択肢を追求している」と述べた。
同社はまた、イラン戦争により需要が打撃を受け、コストが増加し、一部の市場で納品に遅れが生じていると述べた。
第 1 四半期の数値には、特別投資家株式の会計処理変更による 3 億 2,800 万ドルの紙損も部分的に反映されています。株式は後で普通株式に変えることができ、上場前に価値が変わる可能性があります。
提出書類によると、2026年3月末までの1年間に、Sheinには2億8,100万人のアクティブ顧客（前年比16％以上増加）がおり、合計10億件以上の注文があったことが明らかになった。
7月10日、中国証券監督管理委員会（CSRC）は、ニューヨークとロンドンでの上場計画が失敗したことを受け、シェインに対し香港株売却を承認した。
香港株式上場は今後数カ月以内に行われる予定だ。
この数字は、低価格商品の米国の買い物客が利用していた世界的な関税免除を廃止するトランプ大統領署名の大統領令の影響を示している。
2025年8月29日に発効したこの命令は、特に中国と香港からの安価な製品を対象とした以前の大統領の行動を世界の他の地域にも拡大するものとなった。
いわゆるデミニミス免除により、800ドル以下の商品は関税を支払わずに米国に入国することが認められていた。米国の消費者はこの免除を利用して、SheinやTemuなどのオンライン商取引サイトから安価な商品を購入した。
ホワイトハウスは、世界的な免除措置は「関税を回避し、致死性の合成オピオイドを米国に供給する」ために利用されていると述べた。
シェイン氏は提出書類の中で、「米国のde minimis 免税措置の撤廃は、米国での当社の売上高と全体的な純収益の伸びに悪影響を及ぼした」と述べた。
7月初旬、欧州連合は低額電子商取引の輸入品に3ユーロ（2.56ポンド、3.42ドル）の課税を課した。
この措置は、通商圏が中国との不公平な競争だと主張していることを抑制することを目的としている。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/clyj8v0rek8o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-27T02:08:36+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/6a66/live/d66cf590-8950-11f1-aee1-9f17574ebbb3.jpg",
    readTime: 3,
  },
  {
    id: "china-industrial-profit-growth-slows-aga-3ca4c6b5",
    title: "China industrial profit growth slows again in June as retreating oil prices sap earnings lift",
    titleJa: "中国の工業利益の伸びは6月に再び減速、原油価格の下落で収益押し上げが阻害される",
    summaryJa: "国家統計局が月曜日に発表したデータによると、6月の中国の工業利益は前年同月比15.1％増加したが、エネルギー価格の緩和が今年の回復を牽引してきた価格上昇を抑えたため、2か月連続で鈍化した。5月の21.1％上昇が11月以来初めての減速となった後、6月の数字は2カ月ぶりの減速となった。",
    bodyOriginal: `China's industrial profits rose 15.1% in June from a year earlier, according to data released Monday by the National Bureau of Statistics, slowing for a second straight month as easing energy prices took the edge off the price gains that had driven this year's rebound.
The June figure extended a two-month deceleration, after May's 21.1% gain marked the first slowdown since November.
For the first half of this year, profits climbed 18.7%, slowing from the 18.8% pace recorded in the January-May period.
Industrial corporate earnings have staged a notable turnaround this year, swinging from barely positive growth in 2025 to double-digit gains, as an artificial intelligence-fueled boom in chip and equipment manufacturing coincided with the end of nearly three years of factory-gate deflation.
The recovering profit has also been helped by a favorable comparison with last year. Earnings fell 3.6% in June last year and declined 2.8% in the first half of 2025.
Factory-gate prices also rose 3.6% year on year in the second quarter, the first positive reading since late 2022.
That reflation boost appears wobbly, as much of the price recovery was driven by surging global energy costs, while domestic demand lags, economists say.
Producer prices dipped 0.3% month-on-month in June, the first decline since July 2025, according to LSEG data, as normalizing tanker flows through the Strait of Hormuz pulled oil, refined-fuel, and petrochemical prices lower.
Investors will now turn to the Communist Party's Politburo meeting, traditionally held in late July, where top leaders will review first-half performance and set policy direction for the rest of the year.
Economists anticipate stronger easing language after the second-quarter slowdown, though expectations for a large stimulus package remain low, as Beijing refrains from more forceful action given resilient exports and its focus on curbing excess factory capacity.
"The Politburo is likely to make policy support mildly more urgent, prioritizing faster fiscal rollout," said Robin Xing, chief China economist at Morgan Stanley, pegging their baseline as a "gradual policy ramp-up rather than a one-off stimulus push."
"Growth should stay resilient thanks to exports, even as domestic demand lags," Xing said, citing the AI-driven investment cycle — in which China is a key hardware supplier — and a broader Asian industrial capex super-cycle that is now unfolding.`,
    bodyJa: `国家統計局が月曜日に発表したデータによると、6月の中国の工業利益は前年同月比15.1％増加したが、エネルギー価格の緩和が今年の回復を牽引してきた価格上昇を抑えたため、2か月連続で鈍化した。
5月の21.1％上昇が11月以来初めての減速となった後、6月の数字は2カ月ぶりの減速となった。
今年上半期の利益は１８．７％増加し、１─５月に記録した１８．８％のペースから鈍化した。
人工知能を原動力としたチップや機器の製造ブームが、約3年にわたるファクトリーゲートデフレの終焉と重なったため、産業企業の利益は今年、顕著な好転を見せ、2025年のわずかなプラス成長から2桁の伸びに転じた。
前年比が好調だったことも利益の回復に寄与した。昨年６月の利益は３．６％減少し、２０２５年上半期は２．８％減少した。
第２・四半期のファクトリーゲート価格も前年比３．６％上昇し、２０２２年後半以来初めてプラスとなった。
エコノミストらによると、国内需要が遅れている一方で、価格回復の多くは世界的なエネルギーコストの高騰によってもたらされたため、このリフレの押し上げは不安定に見えるという。
LSEGのデータによると、ホルムズ海峡を通過するタンカーの航行正常化により石油、精製燃料、石油化学製品の価格が下落したため、6月の生産者物価は前月比0.3％下落し、2025年7月以来の下落となった。
投資家は今後、伝統的に7月下旬に開催される共産党政治局会議に目を向けるだろう。そこではトップリーダーが上半期の業績をレビューし、残りの政策の方向性を定めることになる。
エコノミストらは第２・四半期の景気減速を受けて、より強力な緩和策を打ち出すと予想しているが、中国政府が輸出の回復力と過剰な工場生産能力の抑制に重点を置いていることから、より強力な行動を控えているため、大規模な景気刺激策への期待は依然として低い。
モルガン・スタンレーの首席中国エコノミスト、ロビン・シン氏は「政治局は政策支援をやや緊急性を高め、より迅速な財政展開を優先するだろう」と述べ、基準を「一度限りの景気刺激策ではなく段階的な政策強化」と定めた。
シン氏は、中国が主要なハードウェア供給国となっているAI主導の投資サイクルと、現在展開中のアジアの広範な産業設備投資のスーパーサイクルを挙げ、「内需が遅れているにもかかわらず、輸出のおかげで成長は底堅さを維持するはずだ」と述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/27/china-industrial-profit-growth-exports-oil-drops.html",
    publishedAt: "2026-07-27T02:02:04+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "oil-slides-5-as-iran-reportedly-signals-ae0ff78f",
    title: "Oil slides 5% as Iran reportedly signals halt to attacks if U.S. pause holds",
    titleJa: "米国の一時停止が維持されればイランが攻撃停止の信号を送ったと伝えられ、原油は5%下落",
    summaryJa: "イランが米国の戦闘停止が続く限り攻撃を停止すると発表したと伝えられたことを受けて原油価格が下落し、２週間近く続く紛争激化に対する懸念が和らぎました。国際指標となるブレント原油先物９月渡しは４．８８％下落し、１バレル＝９２ドル付近となった。米国ウェスト・テキサス・インターミディエイト原油先物９月渡しも同様に５％超下落し、１バレル＝８４．８４ドルとなった。",
    bodyOriginal: `Oil prices fell after Iran reportedly said it would suspend attacks as long as a U.S. pause in hostilities remains in place, easing concerns over nearly two weeks of escalating conflict.
International benchmark Brent crude futures for September delivery fell 4.88% to around $92 a barrel. U.S. West Texas Intermediate crude futures for September delivery similarly dropped over 5% to $84.84 a barrel.
Iran has indicated it will stop carrying out attacks as long as the United States also refrains from striking, Reuters reported on Sunday, citing a senior Iranian official.
The pause follows Washington's decision to suspend its bombing campaign after President Donald Trump's advisers reportedly warned that the military was running out of viable targets and raised concerns about depleting U.S. weapons stockpiles.
The Iranian official reportedly said that that Tehran's stance "remains 'attack for attack': if the attacks stop, Iran will also halt its operations. That message has already been conveyed to the United States."
U.S. ambassador to the United Nations Mike Waltz said on Fox News Sunday that Trump had chosen to pause the strikes to allow diplomatic efforts to continue.
HSBC's U.S. rates strategist Dhiraj Narula said higher oil prices have contributed to renewed expectations that the Federal Reserve may need to keep policy tighter for longer, but noted inflation expectations have remained relatively contained despite the energy rally.
He attributed that to stronger messaging from Fed officials on their commitment to price stability, which has prevented the oil shock from feeding into longer-term inflation expectations.`,
    bodyJa: `イランが米国の戦闘停止が続く限り攻撃を停止すると発表したと伝えられたことを受けて原油価格が下落し、２週間近く続く紛争激化に対する懸念が和らぎました。
国際指標となるブレント原油先物９月渡しは４．８８％下落し、１バレル＝９２ドル付近となった。米国ウェスト・テキサス・インターミディエイト原油先物９月渡しも同様に５％超下落し、１バレル＝８４．８４ドルとなった。
ロイター通信が日曜、イラン高官の話として報じたところによると、イランは米国も攻撃を控える限り攻撃をやめる意向を示しているという。
この一時停止は、ドナルド・トランプ大統領の顧問らが軍が実行可能な標的を使い果たしつつあると警告し、米国の武器備蓄が枯渇することへの懸念を表明したことを受けて、爆撃作戦を停止するというワシントンの決定を受けたものである。
伝えられるところによると、イラン当局者は、イラン政府の立場は「引き続き『攻撃には攻撃』だ。攻撃が止まればイランも作戦を停止する。そのメッセージはすでに米国に伝えられている」と述べたという。
マイク・ウォルツ米国連大使はフォックスニュース日曜番組で、トランプ大統領は外交努力を継続できるようにするために空爆の一時停止を選択したと述べた。
ＨＳＢＣの米国金利ストラテジスト、ディラジ・ナルラ氏は、原油価格の上昇が米連邦準備理事会（ＦＲＢ）が政策引き締めを長期継続する必要があるのではないかという新たな期待に寄与していると述べたが、エネルギー上昇にもかかわらずインフレ期待は比較的抑制されたままであると指摘した。
同氏は、物価安定への取り組みについてFRB当局者がより強力なメッセージを発信したことが原因であり、これによりオイルショックが長期的なインフレ期待に反映されるのを防いだ、と述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/27/oil-price-wti-brent-slide-as-iran-reportedly-may-halt-attacks.html",
    publishedAt: "2026-07-26T23:58:00+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "here-s-the-tech-stock-to-buy-in-a-market-e426bb43",
    title: "Here's the tech stock to buy in a market losing patience with tech",
    titleJa: "ハイテクに対する忍耐力を失った市場で買うべきハイテク株はこれだ",
    summaryJa: "It's not the spend, it's the return. That's what Friday's technology stock plunge said. I think it just might be the most significant tech selloff in more than a year. We need to know — potentially — what we are facing. We need to know if the trillion-dollar spigot is drying up — or it is just a dry spell. For my Charitable Trust, the portfolio we use for the CNBC Investing Club, we have been consolidating and gradually trying to shrink traditional tech — semis, software, data center — and move ",
    bodyOriginal: `It's not the spend, it's the return. That's what Friday's technology stock plunge said. I think it just might be the most significant tech selloff in more than a year. We need to know — potentially — what we are facing. We need to know if the trillion-dollar spigot is drying up — or it is just a dry spell. For my Charitable Trust, the portfolio we use for the CNBC Investing Club, we have been consolidating and gradually trying to shrink traditional tech — semis, software, data center — and move into other kinds of tech, namely tech-infused pharma and aerospace. We tried to make Intel — not Nvidia — the focal point of the portfolio, concerned that there are not enough new move-the-needle customers still out there for Nvidia. No, I'm not giving up Nvidia. It is still amazing, and I think it will have a bang-up quarter. But the "action" in the stock is speaking too loudly. The action in Apple is screaming that its decision, made intentionally or de facto, not to spend hundreds of billions on AI, is brilliant. It's having the best month in three years. Tons of critics second-guess Apple's decision-making. That's wrong. Apple decided a long time ago that much would flow to it if it made the best handhelds. It does. That allowed it to pick and choose which hyperscaler-chat-bot company it wanted to affiliate with, because they have quickly turned into commodities. Google had no choice but to virtually give it away — at least on a net basis — because Google Search has become suspect in its return while Gemini is no Claude from Anthropic. So, we gravitated to a new company, late for now, Intel, because we could see that the ratio of graphics processing units (GPUs) — Nvidia's giant, expensive chips — to central processing units (CPUs) — Intel and Advanced Micro Devices (AMD) — and perhaps, Arm Holdings , if it can get foundry time, even as it is partners with Intel) was quickly changing. When Lip-Bu Tan took over as CEO of Intel, the ratio was about four GPUs for every one CPU. Now, he told me last Thursday, it's about one CPU for every one GPU. Soon, data centers will have four CPUs for every one GPU. The gross margins on the GPUs are far more bountiful than on CPUs. A well-run Intel can change that. This is a well-run Intel. Plus, the CEO is perhaps the most dedicated semiconductor investor who knows how to spend the money wisely to build foundries (factories to manufacture chips) that are in short supply. Most important, he knows packaging, which is the equivalent of bundling CEOs to make them more powerful now that it is getting harder and harder to make nodes smaller and more powerful. The notion of Moore's Law — Gordon Moore, an Intel founder — that you can keep making ever-more-powerful smaller chips may have run out — Or definitely has run out, according to Jensen Huang. When in doubt, go with Jensen. So, we went with Intel, betting on an upside surprise. As usual, we buy slowly for the Trust. We had a little more than half a position on betting against ourselves that the company would report a spectacular number. We lost the bet. It was spectacular, maybe better than that, and it traded up more than 10% in last Thursday's after-hours session. High-fives all around. We looked good. Now I was out on Long Island to throw a rehearsal dinner for special nuptials, the marriage of my stepson, Will Detwiler, who has had that position for 21 years and lots of rearing, and his incredible now-wife Caroline (Win With) Willkie. It was a rather sizable prelude to the actual affair, a rehearsal dinner so large that it had a rehearsal for the rehearsal dinner. I was confident of the market's reaction to Intel even as I lacked confidence in the market. It's more than a tad difficult being long much of anything when you have a president talking about saturation bombing of a crafty opponent that seems to be a state that has more missiles than people. We're back to where the war or wars or who knows what can drive oil to where bears can confidently discuss 5% to 6% inflation. My confidence was misplaced. Entirely. I got up early Friday, not to disturb the participants, took a call from American Express , which we told you would cause selling pressure, and out of one retina saw Intel trading not at $109 but $106.30. Then, $106.28 and then $106.20, and the cadence was both sickening and relentless. Hardly a stand was made before market hours. Count the upticks on a couple of hands. After it went to $103 and change, soon before Friday's open, you could calculate how much it would be down on the day. I switched mentalities and went into thank-my-lucky-stars mode to have plenty of room to buy; if we still wanted to. Which brings me to the essence of this beautiful Sunday's piece after a picture-perfect wedding where I forced myself to be in the non-stop present, something I had only been capable of at one wedding-mine — and two Super Bowls. So, what the heck happened here? Why did Intel close down nearly 8% on Friday? I have heard lots of reasons for the tech sell-off. The most preeminent is that the market has decided to exercise its power to stop the spend. With Alphabet 's stock reeling almost forty points below what once looked like a terrifically priced secondary — at least, before we heard that Google was going to up its capex again — it looks like many sellers decided enough is enough. We won't reward spending with a higher market capitalization. That was a brutal judgment, especially given that Google Cloud had an implausibly tremendous quarter — cue the interview of Thomas Kurian, the head of Google Cloud and often called the LeBron James of tech, a statement with refreshed poignancy given my proclivity for the Philadelphia 76ers. That Alphabet call had me wishing for Ruth Porat back in the CFO role, and her 80-plus calls under her belt to explain why the spend keeps getting upped. Yes, we can say "to meet demand," as now CFO Anat Ashkenazi said multiple times while sprinkling in positives about Alphabet's balance sheet. I have found both statements painful. That's because Alphabet's balance sheet, with an income statement showing negative cash flow, is no longer the belle of the ball. It's okay, not great. If you owned Alphabet for its rock-solid balance sheet and buyback, you are thinking of a different Alphabet, one of yesteryear. The real pain, though, comes from this "meet demand" statement that we heard so much. I am not sure if Alphabet knows what it means to a market that's starting to lose a lot of money in these hyperscalers when it hears "meet demand." We are definitely not looking for companies to "meet demand." We are looking for them to "make money." We aren't hearing anything like that. The only company making money here with Alphabet is Apple. This "meeting demand" stuff is wearying. I feel like the Trust owns companies that are losing fortunes on everything they make, but they are going to make it up in volume. What's happened is, at last, we have come to accept not that these companies don't know what they are doing. I am sure that Alphabet feels that if you build it, profits will come — but there are better stories elsewhere. What do I need this spending horror show when I can get behind Club name Johnson & Johnson ? The technology behind the materials science of 3M doesn't require billions of dollars to lose, well, billions; it just makes money. Again, I am not in the camp that the emperor has no clothes. One of these emperors to be will, perhaps, Anthropic because it is business-to-business (B2B) and we love the stickiness of B2B; the fickle nature of the OpenAI business-to-consumer (B2C) paradigm is viewed to be the culprit for the leaky bucket of that shop. Oh boy, OpenAI has to come public in the worst way; thank you very little. In some ways, it doesn't matter whether you sell tech because you don't see a return or you sell tech because you think these companies lack any discipline. Either way, hundreds of billions of dollars are leaving the cohort. That's why I am wondering if this damned-the-sellers-full-speed-ahead mentality is coming to an end. Which brings me back to the all-encompassing selling of Friday. When you are watching the stock of Intel sink, you can say that it's going down because you didn't get the Wall Street analyst price target bumps you thought it would. They were disappointing. But AMD had a meeting simultaneously, and the only companies that can give Intel a run for the money right now are Nvidia, when it reports late next month, and AMD right now. Shares of AMD sank, too, but not as viciously as Intel, but at a brisk pace. The selling was ferocious. By the end of the session, as the wedding flowers abounded, the Fosforo (my wife's agave spirits company) flowed, and the toasts were readied, you could almost see the selling morph from being about the discipline of capex to a rumor of a cut in capex by a hyperscaler. That someone blinked. I don't know if someone actually did blink. I suspect we will find out Monday. But if someone, other than a supplier, doesn't come out soon and say "we are beating and raising our numbers," I suspect that a trillion dollars' worth of market cap comes right off the top of all the behemoths who still ply AI. No illusions here. We cannot have a sustained rally with tech bleeding through the eyeballs. There are too many companies that have run up to see that happen. We know that the Dow Jones Industrial Average has been able to resist, and the S & P 500 has only slightly faltered, but the Nasdaq is back in charnel house mode. I say we keep tilting away from traditional tech. We stay close to see if someone forecasts a profit, which could lift all boats, and we recognize that there are not enough companies left who still need the hardware, at least not right now. Bottom line Why, then, Intel? Because the only way to amortize all of the spend now is with AI agents, and agents are run on Intel's CPUs. That and robots. We know that robots are such a huge market that they can't be left just to Tesla. I think all of the hyperscalers are going to have to offer them. They are not a GPU product as much as a CPU market — robots are packed with them. Right now, we have lots of use cases both in and out of the data centers, but the next great demand wave, I believe, comes from robots that are B2B to business and then B2C. The current demand for all sorts of tech will sustain the CPU. But I think that robots give us the use case that will keep the stocks in some demand after the companies own up to what might be a sensible pause in spend. I sense we will know soon enough whether it's just a rumor of a pause or an actual one. Either way, keep moving toward new and different tech while backing only Intel when it comes to old tech. A pause could be so jarring that, initially, we won't buy the pausers, but let's not get ahead of ourselves. And remember, a beat and raise from just one hyperscaler changes the entire equation; and three more of them — Amazon , Meta Platforms , and Microsoft — report earnings this week. And oh yeah, fellow Club holding Apple also reports this week . (Jim Cramer's Charitable Trust is long INTC, NVDA, AAPL, AMZN, META, MSFT. See here for a full list of the stocks.) As a subscriber to the CNBC Investing Club with Jim Cramer, you will receive a trade alert before Jim makes a trade. Jim waits 45 minutes after sending a trade alert before buying or selling a stock in his charitable trust's portfolio. If Jim has talked about a stock on CNBC TV, he waits 72 hours after issuing the trade alert before executing the trade. THE ABOVE INVESTING CLUB INFORMATION IS SUBJECT TO OUR TERMS AND CONDITIONS AND PRIVACY POLICY , TOGETHER WITH OUR DISCLAIMER . NO FIDUCIARY OBLIGATION OR DUTY EXISTS, OR IS CREATED, BY VIRTUE OF YOUR RECEIPT OF ANY INFORMATION PROVIDED IN CONNECTION WITH THE INVESTING CLUB. NO SPECIFIC OUTCOME OR PROFIT IS GUARANTEED.`,
    bodyJa: `It's not the spend, it's the return. That's what Friday's technology stock plunge said. I think it just might be the most significant tech selloff in more than a year. We need to know — potentially — what we are facing. We need to know if the trillion-dollar spigot is drying up — or it is just a dry spell. For my Charitable Trust, the portfolio we use for the CNBC Investing Club, we have been consolidating and gradually trying to shrink traditional tech — semis, software, data center — and move into other kinds of tech, namely tech-infused pharma and aerospace. We tried to make Intel — not Nvidia — the focal point of the portfolio, concerned that there are not enough new move-the-needle customers still out there for Nvidia. No, I'm not giving up Nvidia. It is still amazing, and I think it will have a bang-up quarter. But the "action" in the stock is speaking too loudly. The action in Apple is screaming that its decision, made intentionally or de facto, not to spend hundreds of billions on AI, is brilliant. It's having the best month in three years. Tons of critics second-guess Apple's decision-making. That's wrong. Apple decided a long time ago that much would flow to it if it made the best handhelds. It does. That allowed it to pick and choose which hyperscaler-chat-bot company it wanted to affiliate with, because they have quickly turned into commodities. Google had no choice but to virtually give it away — at least on a net basis — because Google Search has become suspect in its return while Gemini is no Claude from Anthropic. So, we gravitated to a new company, late for now, Intel, because we could see that the ratio of graphics processing units (GPUs) — Nvidia's giant, expensive chips — to central processing units (CPUs) — Intel and Advanced Micro Devices (AMD) — and perhaps, Arm Holdings , if it can get foundry time, even as it is partners with Intel) was quickly changing. When Lip-Bu Tan took over as CEO of Intel, the ratio was about four GPUs for every one CPU. Now, he told me last Thursday, it's about one CPU for every one GPU. Soon, data centers will have four CPUs for every one GPU. The gross margins on the GPUs are far more bountiful than on CPUs. A well-run Intel can change that. This is a well-run Intel. Plus, the CEO is perhaps the most dedicated semiconductor investor who knows how to spend the money wisely to build foundries (factories to manufacture chips) that are in short supply. Most important, he knows packaging, which is the equivalent of bundling CEOs to make them more powerful now that it is getting harder and harder to make nodes smaller and more powerful. The notion of Moore's Law — Gordon Moore, an Intel founder — that you can keep making ever-more-powerful smaller chips may have run out — Or definitely has run out, according to Jensen Huang. When in doubt, go with Jensen. So, we went with Intel, betting on an upside surprise. As usual, we buy slowly for the Trust. We had a little more than half a position on betting against ourselves that the company would report a spectacular number. We lost the bet. It was spectacular, maybe better than that, and it traded up more than 10% in last Thursday's after-hours session. High-fives all around. We looked good. Now I was out on Long Island to throw a rehearsal dinner for special nuptials, the marriage of my stepson, Will Detwiler, who has had that position for 21 years and lots of rearing, and his incredible now-wife Caroline (Win With) Willkie. It was a rather sizable prelude to the actual affair, a rehearsal dinner so large that it had a rehearsal for the rehearsal dinner. I was confident of the market's reaction to Intel even as I lacked confidence in the market. It's more than a tad difficult being long much of anything when you have a president talking about saturation bombing of a crafty opponent that seems to be a state that has more missiles than people. We're back to where the war or wars or who knows what can drive oil to where bears can confidently discuss 5% to 6% inflation. My confidence was misplaced. Entirely. I got up early Friday, not to disturb the participants, took a call from American Express , which we told you would cause selling pressure, and out of one retina saw Intel trading not at $109 but $106.30. Then, $106.28 and then $106.20, and the cadence was both sickening and relentless. Hardly a stand was made before market hours. Count the upticks on a couple of hands. After it went to $103 and change, soon before Friday's open, you could calculate how much it would be down on the day. I switched mentalities and went into thank-my-lucky-stars mode to have plenty of room to buy; if we still wanted to. Which brings me to the essence of this beautiful Sunday's piece after a picture-perfect wedding where I forced myself to be in the non-stop present, something I had only been capable of at one wedding-mine — and two Super Bowls. So, what the heck happened here? Why did Intel close down nearly 8% on Friday? I have heard lots of reasons for the tech sell-off. The most preeminent is that the market has decided to exercise its power to stop the spend. With Alphabet 's stock reeling almost forty points below what once looked like a terrifically priced secondary — at least, before we heard that Google was going to up its capex again — it looks like many sellers decided enough is enough. We won't reward spending with a higher market capitalization. That was a brutal judgment, especially given that Google Cloud had an implausibly tremendous quarter — cue the interview of Thomas Kurian, the head of Google Cloud and often called the LeBron James of tech, a statement with refreshed poignancy given my proclivity for the Philadelphia 76ers. That Alphabet call had me wishing for Ruth Porat back in the CFO role, and her 80-plus calls under her belt to explain why the spend keeps getting upped. Yes, we can say "to meet demand," as now CFO Anat Ashkenazi said multiple times while sprinkling in positives about Alphabet's balance sheet. I have found both statements painful. That's because Alphabet's balance sheet, with an income statement showing negative cash flow, is no longer the belle of the ball. It's okay, not great. If you owned Alphabet for its rock-solid balance sheet and buyback, you are thinking of a different Alphabet, one of yesteryear. The real pain, though, comes from this "meet demand" statement that we heard so much. I am not sure if Alphabet knows what it means to a market that's starting to lose a lot of money in these hyperscalers when it hears "meet demand." We are definitely not looking for companies to "meet demand." We are looking for them to "make money." We aren't hearing anything like that. The only company making money here with Alphabet is Apple. This "meeting demand" stuff is wearying. I feel like the Trust owns companies that are losing fortunes on everything they make, but they are going to make it up in volume. What's happened is, at last, we have come to accept not that these companies don't know what they are doing. I am sure that Alphabet feels that if you build it, profits will come — but there are better stories elsewhere. What do I need this spending horror show when I can get behind Club name Johnson & Johnson ? The technology behind the materials science of 3M doesn't require billions of dollars to lose, well, billions; it just makes money. Again, I am not in the camp that the emperor has no clothes. One of these emperors to be will, perhaps, Anthropic because it is business-to-business (B2B) and we love the stickiness of B2B; the fickle nature of the OpenAI business-to-consumer (B2C) paradigm is viewed to be the culprit for the leaky bucket of that shop. Oh boy, OpenAI has to come public in the worst way; thank you very little. In some ways, it doesn't matter whether you sell tech because you don't see a return or you sell tech because you think these companies lack any discipline. Either way, hundreds of billions of dollars are leaving the cohort. That's why I am wondering if this damned-the-sellers-full-speed-ahead mentality is coming to an end. Which brings me back to the all-encompassing selling of Friday. When you are watching the stock of Intel sink, you can say that it's going down because you didn't get the Wall Street analyst price target bumps you thought it would. They were disappointing. But AMD had a meeting simultaneously, and the only companies that can give Intel a run for the money right now are Nvidia, when it reports late next month, and AMD right now. Shares of AMD sank, too, but not as viciously as Intel, but at a brisk pace. The selling was ferocious. By the end of the session, as the wedding flowers abounded, the Fosforo (my wife's agave spirits company) flowed, and the toasts were readied, you could almost see the selling morph from being about the discipline of capex to a rumor of a cut in capex by a hyperscaler. That someone blinked. I don't know if someone actually did blink. I suspect we will find out Monday. But if someone, other than a supplier, doesn't come out soon and say "we are beating and raising our numbers," I suspect that a trillion dollars' worth of market cap comes right off the top of all the behemoths who still ply AI. No illusions here. We cannot have a sustained rally with tech bleeding through the eyeballs. There are too many companies that have run up to see that happen. We know that the Dow Jones Industrial Average has been able to resist, and the S & P 500 has only slightly faltered, but the Nasdaq is back in charnel house mode. I say we keep tilting away from traditional tech. We stay close to see if someone forecasts a profit, which could lift all boats, and we recognize that there are not enough companies left who still need the hardware, at least not right now. Bottom line Why, then, Intel? Because the only way to amortize all of the spend now is with AI agents, and agents are run on Intel's CPUs. That and robots. We know that robots are such a huge market that they can't be left just to Tesla. I think all of the hyperscalers are going to have to offer them. They are not a GPU product as much as a CPU market — robots are packed with them. Right now, we have lots of use cases both in and out of the data centers, but the next great demand wave, I believe, comes from robots that are B2B to business and then B2C. The current demand for all sorts of tech will sustain the CPU. But I think that robots give us the use case that will keep the stocks in some demand after the companies own up to what might be a sensible pause in spend. I sense we will know soon enough whether it's just a rumor of a pause or an actual one. Either way, keep moving toward new and different tech while backing only Intel when it comes to old tech. A pause could be so jarring that, initially, we won't buy the pausers, but let's not get ahead of ourselves. And remember, a beat and raise from just one hyperscaler changes the entire equation; and three more of them — Amazon , Meta Platforms , and Microsoft — report earnings this week. And oh yeah, fellow Club holding Apple also reports this week . (Jim Cramer's Charitable Trust is long INTC, NVDA, AAPL, AMZN, META, MSFT. See here for a full list of the stocks.) As a subscriber to the CNBC Investing Club with Jim Cramer, you will receive a trade alert before Jim makes a trade. Jim waits 45 minutes after sending a trade alert before buying or selling a stock in his charitable trust's portfolio. If Jim has talked about a stock on CNBC TV, he waits 72 hours after issuing the trade alert before executing the trade. THE ABOVE INVESTING CLUB INFORMATION IS SUBJECT TO OUR TERMS AND CONDITIONS AND PRIVACY POLICY , TOGETHER WITH OUR DISCLAIMER . NO FIDUCIARY OBLIGATION OR DUTY EXISTS, OR IS CREATED, BY VIRTUE OF YOUR RECEIPT OF ANY INFORMATION PROVIDED IN CONNECTION WITH THE INVESTING CLUB. NO SPECIFIC OUTCOME OR PROFIT IS GUARANTEED.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/26/jim-cramer-heres-the-tech-stock-to-buy-in-a-market-losing-patience-with-tech.html",
    publishedAt: "2026-07-26T23:39:46+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "would-you-choose-50-000-over-the-chance-6f1a0eec",
    title: "Would you choose £50,000 over the chance of £1m?",
    titleJa: "100万ポンドのチャンスより5万ポンドを選びますか?",
    summaryJa: "100万ポンドのチャンスより5万ポンドを選びますか?- 公開されました",
    bodyOriginal: `Would you choose £50,000 over the chance of £1m?
- Published
You have the choice of instantly receiving £50,000 or flipping a coin for a 50/50 chance of £1m.
Which would you choose?
The vast majority decide on taking the £50k, according to a survey of thousands of people by YouGov. Women voted 82% in favour of the guaranteed cash.
The poll has sparked a debate about why Brits appear more risk-averse than people in the US.
So why are the results so clear-cut, and what are the financial and psychological factors at play?
Sadly, there is little chance of ever having such a choice, but there are some interesting lessons for how we manage our money nonetheless.
Do you agree with the majority?
Nearly three-quarters (73%) of the 4,600 adults asked in the survey said they would take the £50,000 now.
Just over a fifth (21%) went for the chance of £1m and, 6% of those asked sat on the fence and simply couldn't decide.
The gender split in the results is striking. Some 82% of women opted for the £50,000, compared with 63% of men.
This chimes with other research which suggests that men are twice as likely to invest in stocks and shares than women, external, and women are more likely to subscribe to cash ISAs than men, external.
Does the choice depend on how much you earn?
Lots of people might opt for the £50,000 guarantee, deciding that it is a life-changing amount of money in itself.
After all, it is £10,000 more than the median average earnings for full-time workers in the UK for an entire year, according to official statistics, external.
But younger people generally earn less and yet, according to this survey, external, those aged 18 to 24 are more willing to take the bet on £1m than any other age group.
Some 28% go for the coin flip, compared with just 11% among the over-65s - their grandparents' generation.
There is a different tipping point for everyone. Repeat the survey but instead guarantee £5 or offer a 50/50 chance for a £100, and most people will probably go for the £100 bet. After all, lots of people bet at least £2 a week hoping for a National Lottery win.
As those amounts rise, so your appetite for risk becomes clear.
Why not just invest the £50k?
One choice is to take the guaranteed £50,000 and hope it grows over time.
Saving the money would be helped by the magic of compound interest.
Alternatively, you could take more of a risk, but potentially with greater reward, by investing the money.
What has happened in the past will not necessarily happen in the future when it comes to investments.
But you'd have had to have invested your £50,000 in a typical global fund just under 38 years ago for it to be worth £1m today, according to Sarah Coles, of investment firm AJ Bell.
Is it all in the mind?
We are hardwired, says Coles, to go for the guaranteed £50,000.
That's because we feel losses more acutely than gains, she says.
"The thrill of potentially winning £1m is felt less strongly than the fear of giving up a guaranteed £50,000 and ending up with nothing," she says.
In other words, having £50k and knowing you might have won £1m will play on your mind.
But it is not as bad as having a crack at £1m and knowing you've given up enough for an average deposit to buy a home in the West Midlands, external.
Related topics
- Published2 days ago
- Published7 days ago`,
    bodyJa: `100万ポンドのチャンスより5万ポンドを選びますか?
- 公開されました
即座に 50,000 ポンドを受け取るか、コインを投げて 50/50 の確率で 100 万ポンドを獲得するかを選択できます。
どちらを選びますか?
YouGovが数千人を対象に行った調査によると、大多数が5万ポンドを受け取ることを決めている。女性は現金保証に82％が賛成票を投じた。
この世論調査は、なぜ英国人が米国人よりもリスクを回避しているように見えるのかについての議論を引き起こした。
では、なぜ結果がこれほど明確なのか、また経済的および心理的要因は何なのでしょうか?
悲しいことに、そのような選択肢がある可能性はほとんどありませんが、それでもお金の管理方法について興味深い教訓がいくつかあります。
あなたは多数派に同意しますか？
調査で尋ねた成人4,600人のうちほぼ4分の3（73％）が、今すぐ5万ポンドを受け取ると答えた。
5 分の 1 強 (21%) が 100 万ポンドのチャンスを狙っていましたが、質問された人のうち 6% は迷っていて決断できませんでした。
結果における男女別の割合は顕著だ。女性の約82％が5万ポンドを選択したのに対し、男性では63％だった。
これは、男性は女性（社外）よりも株や株式に投資する可能性が2倍高く、女性は男性（社外）よりも現金ISAに加入する可能性が高いことを示唆する他の研究と一致しています。
選択は収入によって決まりますか?
多くの人は、それ自体が人生を変える金額であると判断して、5万ポンドの保証を選択するかもしれません。
結局のところ、外部の公式統計によると、これは英国のフルタイム労働者の年間平均収入の中央値よりも1万ポンド高いのです。
しかし、一般に若者の収入は低いにもかかわらず、この調査によると、外部の18歳から24歳は他のどの年齢層よりも100万ポンドの賭けに積極的に参加しているという。
約28％がコイントスに参加するのに対し、祖父母の世代である65歳以上の人ではわずか11％だ。
人それぞれに異なる転換点があります。調査を繰り返しますが、その代わりに 5 ポンドを保証するか、100 ポンドで 50/50 のチャンスを提供すると、ほとんどの人はおそらく 100 ポンドに賭けるでしょう。結局のところ、多くの人が全国宝くじの当選を期待して、週に少なくとも 2 ポンドを賭けています。
それらの額が増加するにつれて、リスクに対する欲求が明確になります。
なぜ5万ポンドを投資しないのでしょうか？
1 つの選択肢は、保証された 50,000 ポンドを受け取り、時間の経過とともに増加することを期待することです。
お金を節約するには、複利の魔法が役立ちます。
あるいは、お金を投資することで、より多くのリスクを負うこともできますが、より大きな見返りが得られる可能性があります。
投資に関しては、過去に起こったことは将来も起こるとは限りません。
しかし、投資会社AJベルのサラ・コールズ氏によると、現在100万ポンドの価値があるためには、38年弱前に典型的なグローバルファンドに5万ポンドを投資しなければならなかったという。
それはすべて心の中にありますか？
コールズ氏によれば、私たちは保証された5万ポンドを獲得するように組み込まれているという。
それは、私たちが利益よりも損失をより強く感じるからだと彼女は言います。
「100万ポンドを獲得できるかもしれないというスリルは、保証された5万ポンドを放棄して何も手につかなくなるのではないかという恐怖ほど強く感じられません」と彼女は言う。
言い換えれば、5 万ポンドを持っていて、100 万ポンドを獲得できたかもしれないと知っていると、気になるでしょう。
しかし、それは100万ポンドでクラックがあり、ウェストミッドランズ（外部）で家を買うのに十分な平均頭金をあきらめたと知っていることほど悪くはありません。
関連トピック
- 2 日前に公開
- 7 日前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cn0njd4e2evo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-26T23:11:36+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/3199/live/4c39d8c0-8757-11f1-95ec-a30de4e448c4.jpg",
    readTime: 4,
  },
  {
    id: "i-am-a-63-year-old-semiretired-physician-9344fe3d",
    title: "I am a 63-year-old semiretired physician. If I saved $2 million for retirement, should my Social Security become optional?",
    titleJa: "私は63歳のセミリタイアした医師です。退職後に備えて 200 万ドルを貯蓄した場合、社会保障は任意になるべきですか?",
    summaryJa: "「その時点で、彼らはおそらく政府の退職後のセーフティネットをもはや必要としません。」",
    bodyOriginal: `“At that point, they arguably no longer need the government’s retirement safety net.”`,
    bodyJa: `「その時点で、彼らはおそらく政府の退職後のセーフティネットをもはや必要としません。」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/i-am-a-63-year-old-semiretired-physician-if-you-have-saved-2-million-for-retirement-should-social-security-be-optional-0de70d53?mod=mw_rss_topstories",
    publishedAt: "2026-07-26T18:30:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-15655092",
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
