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
  {
    id: "levi-s-is-finding-new-ways-to-win-custom-442dfd5d",
    title: "Levi’s is finding new ways to win customers — by looking toward tops and ‘denim luxury’",
    titleJa: "リーバイスはトップスと「デニムの贅沢」に目を向けることで、顧客を獲得する新たな方法を模索している",
    summaryJa: "ジーンズメーカー、通期見通しを2年連続引き上げも株価は時間外下落",
    bodyOriginal: `Jeans maker raises its full-year outlook for the second straight time, but shares fall after hours`,
    bodyJa: `ジーンズメーカー、通期見通しを2年連続引き上げも株価は時間外下落`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/levis-is-finding-new-ways-to-win-customers-by-looking-toward-tops-and-denim-luxury-b6e0890a?mod=mw_rss_topstories",
    publishedAt: "2026-07-09T00:38:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-05758708",
    readTime: 2,
  },
  {
    id: "higher-gas-prices-aren-t-the-only-way-ri-a5e920f8",
    title: "Higher gas prices aren’t the only way rising tensions with Iran will hit home",
    titleJa: "イランとの緊張の高まりが国内に打撃を与えるのはガソリン価格の高騰だけではない",
    summaryJa: "ウォール街は、イラン停戦は終わったとのドナルド・トランプ大統領の呼びかけは、石油会社を助けるよりも航空会社や住宅建設会社に損害を与えるだろうと予想している。",
    bodyOriginal: `Wall Street expects President Donald Trump’s call that the Iran cease-fire is over will hurt airlines and home builders more than it will help oil companies.`,
    bodyJa: `ウォール街は、イラン停戦は終わったとのドナルド・トランプ大統領の呼びかけは、石油会社を助けるよりも航空会社や住宅建設会社に損害を与えるだろうと予想している。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/higher-gas-prices-arent-the-only-way-rising-tensions-with-iran-will-hit-home-0a995066?mod=mw_rss_topstories",
    publishedAt: "2026-07-09T00:07:00+00:00",
    category: "エネルギー",
    imageUrl: "https://images.mktw.net/im-32393894",
    readTime: 2,
  },
  {
    id: "wealthy-ai-workers-send-san-francisco-ho-d74c3a69",
    title: "Wealthy AI workers send San Francisco house prices soaring",
    titleJa: "裕福なAI労働者がサンフランシスコの住宅価格を高騰させる",
    summaryJa: "裕福なAI労働者がサンフランシスコの住宅価格を高騰させる- 公開されました",
    bodyOriginal: `Wealthy AI workers send San Francisco house prices soaring
- Published
On a tree-lined street in the affluent Duboce Triangle residential neighbourhood of San Francisco, the top half of a white, Edwardian-era, detached house was drawing visitors from prospective buyers.
The opulently renovated three-bedroom apartment was on the market for almost $3m (£2.3m). And it had been attracting increased attention due to an unusual payment possibility - the seller would consider shares in artificial intelligence companies OpenAI or Anthropic instead of cash.
"The value [of the property] is questionable, but I would like to buy," says a young OpenAI employee who has just viewed the flat with his partner.
The worker, who moved to the Californian city two years ago for a technical job with the San Francisco-based company, is currently renting. He plans, he says, to ask his bosses about the stock transfer possibility.
Welcome to San Francisco 2026, also home to fellow AI giant Anthropic. The city is ground zero for the AI revolution, and its property prices have risen dramatically this year.
"They are just astronomical," says Daryl Fairweather, chief economist at Redfin, a real estate company that tracks US home prices. "People are flush with cash and ready to buy."
In March, San Francisco regained its title as the most expensive city for homebuyers in the US, overtaking rival San Jose 50 miles to the south in the heart of traditional Silicon Valley.
That month, the median house price in San Francisco rose 19% on the year before, and that trend has continued, up 14.5% and 14.1% in April and May respectively, according to data provided by Redfin.
The median sale price in the city as of May 2026 is a record high of $1.76m, compared with nearly $400,000 for the US as a whole, where prices rose by just 1.4% in March, and 2% in both April and May.
The prevailing view of pretty much everyone is that AI money is the driver of the red-hot San Francisco property market. "We have come to that conclusion based on what we're seeing in the data, and what we've heard from our agents," says Fairweather.
She highlights the steep jump in prices, external in the wider San Francisco Bay Area's luxury zip codes – which includes Duboce Triangle – since OpenAI launched ChatGPT in late 2022, a trend absent in cities with less AI wealth.
It has halted the downturn that San Francisco saw during the Covid pandemic, when the population fell and house prices softened.
Today, the high salaries and signing bonuses being paid to top AI staff in the city can be extraordinary, even by Silicon Valley standards. Yet even more generous are the stock options that the employees have been allowed to partially cash in via limited share sales.
Last October, more than 600 current and former OpenAI employees sold combined shares worth $6.6bn, an average of $11m per participant, it was recently reported., external
At Anthropic, whose main product is Claude, workers were also recently said to have been allowed to sell shares, external totalling some $6bn.
And with both companies due to have full stock market flotations later this year or next, minting more multi-millionaire employees, many see no end in sight to San Francisco's real estate rises.
"Today's bidding wars are going to be seen as bargains, and they already are," says Rachel Swann, the listing agent for the Duboce Triangle property.
Enrico Moretti is a professor of economics at the University of California, Berkeley, who lives in the city.
He says it is still "very early" in the AI boom, and points out that while the city's population, external and employment levels, external are rising, they remain below what they were before the pandemic.
There are also opposing forces that may keep a lid on things. Big tech firms such as Meta have recently seen large layoffs.
And as the AI industry moves from its fast-growing innovation phase to one of established companies, it is likely to require less specialized workers who are less able to command the same pay.
Moretti also points out that the lion's share of the wealth from OpenAI and Anthropic's coming stock market flotations will go to investors rather than employees, and they are globally located.
But in the meantime, San Francisco estate agent Matthew Goulden says the current situation is "crazy".
Goulden, who has been doing the job for more than 20 years, says he first started noticing an uptick in prospective buyers – many from the world of AI – late last year.
The upward trend, he says, is not just confined to luxury properties but extends across the market, from single-family homes to one-bedroom flats, and while it is most pronounced in desirable neighbourhoods, it is being felt almost everywhere.
He says that bidding wars, external are now common, sometimes pushing sale prices millions above the asking level.
At the same time, he adds that homes are selling faster than ever, and the number of all-cash purchases seems to be surging, particularly at the upper end of the market.
Danielle Lazier, another experienced San Francisco realtor, describes similar, but adds some perspective. There has long been a tendency in San Francisco for homes to be listed below market value to get an auction effect going, she says.
And supply is chronically limited – San Francisco is small, there is a high proportion of renters and it has struggled to build new housing (even if the city's new pro-growth, recovery-focused mayor is seeking to change that).
"All of a sudden AI money can have an outsized effect," she says.
Meanwhile, as the new AI boom takes hold, the tale of who gets to stay in San Francisco and who doesn't is told by its residents.
Two San Francisco families with school-aged children, who both asked for anonymity to protect their privacy, recently succeeded in buying move-in-ready single-family homes to meet their desperate needs for more space – but only one was able to do so in the city.
That family was able to purchase in the desirable family-friendly neighbourhood where they had been long-term renters after one parent, who works at OpenAI, sold some company shares last October, giving the family the financial boost needed to buy in an all-cash offer.
The couple say they feel "conflicted and self-conscious" that it is AI money that has made it possible. "We're not ostentatious people," they add. "We've just done what we can with the opportunity."
In contrast, the other family, which doesn't derive its income from AI or the tech world, had to instead move to a more suburban Bay Area town to the north.
Their new home, bought in part with a mortgage, includes a pool and extra land.
It is a different kind of life, notes the mother, and they have mostly adapted now – though it involves a long commute for her husband, who has a senior government job in San Francisco, and they still have "what if" moments.
"We wouldn't have left if we could have afforded to stay," she reflects. "It kind of sucks and I do get a little salty seeing all this extra AI money squeeze everyone else out."
The Duboce Triangle flat, for the record, and according to its listing agent, sold for $3.2m – $200,000 over the asking price. Whether the deal included AI stock is confidential.`,
    bodyJa: `裕福なAI労働者がサンフランシスコの住宅価格を高騰させる
- 公開されました
サンフランシスコの裕福な住宅街デュボセ・トライアングルの並木通りにある、エドワード朝時代の白い一戸建て住宅の上半分に、購入希望者が訪れていた。
豪華に改装された3ベッドルームのアパートは、ほぼ300万ドル（230万ポンド）で売りに出された。そして、売り手は現金の代わりに人工知能企業OpenAIやAnthropicの株式を検討するという、異例の支払い可能性により注目を集めていた。
「（不動産の）価値には疑問がありますが、購入したいと思っています」と、パートナーと一緒にアパートを見たばかりの OpenAI の若い従業員は言います。
この従業員は、サンフランシスコに本拠を置く同社で技術職に就くために2年前にカリフォルニア市に移住し、現在は賃貸物件を借りている。同氏は、株式譲渡の可能性について上司に尋ねる予定だという。
2026 年のサンフランシスコへようこそ。ここは同じく AI 大手 Anthropic の本拠地でもあります。同市はAI革命の発祥地であり、今年その不動産価格が劇的に上昇した。
米国の住宅価格を追跡している不動産会社レッドフィンのチーフエコノミスト、ダリル・フェアウェザー氏は「まさに天文学的な数字だ」と語る。 「人々は現金に余裕があり、いつでも買い物をする準備ができています。」
3月にはサンフランシスコが、伝統的なシリコンバレーの中心部で80マイル南にあるライバルのサンノゼを追い抜き、米国で住宅購入者にとって最も高価な都市の座を取り戻した。
Redfinが提供したデータによると、同月のサンフランシスコの住宅価格の中央値は前年比19％上昇し、その傾向は続いており、4月と5月はそれぞれ14.5％、14.1％上昇した。
2026年5月時点での同市の販売価格の中央値は176万ドルで過去最高を記録しているが、これに対し米国全体では40万ドル近くとなっており、3月はわずか1.4％、4月と5月は2％の上昇にとどまった。
AI マネーが、熱狂するサンフランシスコの不動産市場を牽引しているというのが、ほぼすべての人に広まっている見方だ。フェアウェザー氏は「データで確認したことと代理店から聞いたことに基づいて、その結論に達した」と述べた。
彼女は、2022年後半にOpenAIがChatGPTを開始して以来、デュボセ・トライアングルを含む、より広いサンフランシスコ・ベイエリアの高級郵便番号の外側で価格が急騰していることを強調しており、AIの資産が少ない都市には見られない傾向である。
これにより、人口が減少し住宅価格が軟化した新型コロナウイルス感染症パンデミック（世界的大流行）中にサンフランシスコが経験した景気低迷に歯止めがかかった。
現在、市内のトップ AI スタッフに支払われる高額の給与と契約ボーナスは、シリコンバレーの基準から見ても異常なものと言えます。しかし、さらに寛大なのは、従業員が限定株式売却を通じて一部を現金化できるストックオプションだ。
昨年10月、OpenAIの現従業員と元従業員600人以上が合わせて66億ドル相当の株式を売却し、参加者1人当たり平均1100万ドルに相当すると最近報じられた。
クロードを主力製品とするアンスロピック社でも、最近では従業員が株式を売却することを許可されており、その総額は外部総額約60億ドルに上るという。
そして、両社は今年後半か来年後半に株式市場で完全な株式を発行し、さらに多くの億万長者従業員を雇用する予定であり、サンフランシスコの不動産高騰には終わりが見えないと多くの人が見ている。
「今日の入札合戦はバーゲン品として見られるだろうし、すでにそうなっている」とデュボセ・トライアングル物件の物件掲載エージェント、レイチェル・スワン氏は言う。
エンリコ・モレッティ氏はカリフォルニア大学バークレー校の経済学教授で、同市に住んでいる。
同氏は、AIブームはまだ「非常に初期段階」にあると述べ、市の人口、外部レベル、雇用レベル、外部レベルは上昇しているものの、依然としてパンデミック前の水準を下回っていると指摘した。
事態を隠蔽しようとする反対勢力も存在します。メタなどの大手ハイテク企業は最近、大規模な人員削減を行っている。
そして、AI 業界が急速に成長するイノベーション段階から確立された企業の 1 つへと移行するにつれて、必要とされる専門性が低くなり、同じ賃金を支払う能力が低下する可能性があります。
モレッティ氏はまた、OpenAIとAnthropicによる今後の株式市場の浮選によって得られる富の大部分は従業員ではなく投資家に与えられ、それらは世界中にあると指摘した。
しかし一方で、サンフランシスコの不動産業者マシュー・グールデン氏は、現在の状況は「クレイジー」だと語る。
20年以上この仕事に携わっているゴールデン氏は、昨年末に初めて購入希望者（その多くはAIの世界出身者）の増加に気づき始めたと語る。
同氏によると、上昇傾向は高級物件に限定されているわけではなく、一戸建て住宅からベッドルーム1室のアパートに至るまで市場全体に広がっており、人気の高い地域で最も顕著だが、ほぼどこでも感じられているという。
同氏によると、現在では外部の入札合戦が一般的であり、売却価格が提示額より数百万円も高くなる場合もあるという。
同時に、住宅がかつてないほど早く売れており、特に市場の上位層では全額現金購入の件数が急増しているようだと同氏は付け加えた。
サンフランシスコのもう一人の経験豊富な不動産業者、ダニエル・ラジアー氏も同様のことを説明していますが、いくつかの視点を加えています。サンフランシスコでは長い間、競売効果を得るために住宅が市場価格よりも安く出品される傾向があると彼女は言う。
そして、供給は慢性的に限られている – サンフランシスコは小さく、賃貸人の割合が高く、新しい住宅の建設に苦戦している（たとえ市の成長促進で復興に重点を置いた新しい市長が状況を変えようとしているとしても）。
「突然、AI マネーが莫大な影響を与える可能性があります」と彼女は言います。
一方、新たな AI ブームが定着するにつれ、誰がサンフランシスコに留まることができ、誰が残れないのかという物語が住民によって語られています。
学齢期の子供を持つサンフランシスコの2世帯は、どちらもプライバシーを守るために匿名を希望したが、最近、さらなるスペースに対する切実なニーズを満たすために、即入居可能な一戸建て住宅の購入に成功した。しかし、市内でそれを実現できたのは1世帯だけだった。
OpenAIで働く一方の親が昨年10月に一部の同社株を売却したため、その家族は全額現金オファーで購入するのに必要な経済的後押しを得て、長期賃貸者として暮らしていた家族に優しい地域で購入することができた。
夫婦は、それを可能にしたのがAIマネーであることに「矛盾と自意識」を感じていると言う。 「私たちはこれ見よがしな人間ではありません」と彼らは付け加えた。 「私たちはこの機会にできる限りのことをしただけです。」
対照的に、AI やテクノロジーの世界から収入を得ていないもう 1 つの家族は、代わりに北部のベイエリアの郊外の町に引っ越さなければなりませんでした。
住宅ローンの一部を使って購入した彼らの新しい家には、プールと追加の土地が含まれています。
これまでとは違う種類の生活で、今ではほとんど順応していると母親は言う。ただし、サンフランシスコで政府高官の仕事に就いている夫にとっては長い通勤が必要で、まだ「もしも」の瞬間があるという。
「もし滞在する余裕があったなら、私たちはここを離れなかったでしょう」と彼女は振り返る。 「これはひどいことですし、この追加の AI 資金が他の人たちを締め出すのを見ると、少し塩辛い気分になります。」
ちなみに、このデュボセ・トライアングルのアパートは、上場エージェントによると、提示価格を320万ドルから20万ドル上回る価格で落札されたという。取引にAI株が含まれているかどうかは機密だ。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c9q29j47v9ro?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-08T23:11:35+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/6c6c/live/84338380-79eb-11f1-b976-0b9c15b0ccfc.jpg",
    readTime: 8,
  },
  {
    id: "i-run-the-uk-s-biggest-bank-here-are-fiv-0edfd0e2",
    title: "I run the UK's biggest bank, here are five ways to manage your money",
    titleJa: "私は英国最大の銀行を経営しています。お金を管理する 5 つの方法を紹介します",
    summaryJa: "私は英国最大の銀行を経営しています。お金を管理する 5 つの方法を紹介します- 公開されました",
    bodyOriginal: `I run the UK's biggest bank, here are five ways to manage your money
- Published
Charlie Nunn is CEO of Lloyds Banking Group - the UK's biggest bank providing one in four current accounts - meaning he has a deep insight into customers' spending, saving and borrowing.
Here are his top tips on how to manage your money from saving to avoiding scams.
1. Automate your savings
Nunn says the key to building up savings is to automate putting money aside.
This means regular saving will stop being a decision or action you have to keep taking - and putting off.
"If you're able to carve out a little bit and put it somewhere else where you won't have access to it and be able to spend it, I think that's the easiest way to start having a saving mindset," he says.
That could mean setting up a standing order from your current account to a savings account, organising cash into different envelopes or using round-up tools that put spare change aside when you spend.
Nunn recommends "saving little, saving early and saving regularly".
He admits he "hates budgeting and always has" so he says he looks at his current account as soon as he gets paid and decides how much he wants to move into savings. "Do it as soon as you can," he adds.
As well as savings, he recommends having an emergency fund for surprise bills like a broken boiler or car repairs. How much you need in the fund depends on your circumstances but he advises having one to three months' salary set aside if you can.
2. Talk about money in relationships
Nunn and his wife use a joint account and have "complete transparency" over money, he says.
His red flag in a relationship is "someone who isn't careful with money" because he has always been "relatively prudent".
His attitude to money was shaped by childhood - his parents divorced and his mother raised four children which meant he grew up thinking carefully about spending.
"We were constantly worrying about what we were spending money on and managing money carefully which ranged from looking for cheap food in the supermarket to thinking carefully about holidays and what we did in our spare time".
3. Give children pocket money
Nunn says his children "take no advice from me because I'm their dad" but he's tried to make them understand the value of money.
"They have pocket money which helps them budget and they live within their means," he says.
He adds that two of his children are more comfortable spending, while others are more natural savers, which he says reflects what the bank sees among customers too.
He does not think younger people are generally financially irresponsible but is concerned about the bigger challenge of dealing with the amount of information, misinformation and pressure people now face online.
You can help to protect yourself from fraud by "being curious and asking questions" if you're unsure about a transaction or doing something that someone has asked you to do online.
4. Pause before you buy
Nunn's biggest concern is fraud as many people are targeted through social media platforms and online marketplaces.
"Young people are much more vulnerable to it than older people even though they tend to be pretty savvy with technology," he says.
His advice is to pause before sending money and question whether "you can trust the person on the other end".
"If you have any doubts, there are tools you can go and reference and get advice. You can also always call us to check".
Lloyds has launched a tool which allows people buying things online, such as tickets, to upload a picture and check whether it appears genuine.
"Just lean into those kinds of tools because they are available and they're there to protect people".
5. Beware of finfluencers
Social media can be useful for learning about money, but Nunn is "deeply concerned" about financial influencers pushing risky products.
"They are paid to promote a particular crypto coin, meme coin or investment product rather than helping people choose what is suitable for them," he says.
"Most people who haven't got much money shouldn't be taking the level of risk that means they could lose that money."
Instead, he says people starting out should think carefully about risk and cost, and consider simpler, diversified options.
Get in touch
Have you managed to save up for something or pay off debts - share your tips on how you did it.
Related topics
- Published25 June`,
    bodyJa: `私は英国最大の銀行を経営しています。お金を管理する 5 つの方法を紹介します
- 公開されました
チャーリー・ナンは、当座預金口座の 4 分の 1 を提供する英国最大の銀行、ロイズ バンキング グループの CEO です。つまり、顧客の支出、貯蓄、借り入れについて深い洞察力を持っています。
ここでは、節約から詐欺の回避まで、お金の管理方法に関する彼のトップのヒントを紹介します。
1. 節約を自動化する
ナン氏は、貯蓄を増やすための鍵は、お金を自動的に取っておくことだと言います。
これは、定期的な貯蓄が、決断や行動を継続し、先延ばしにしなければならないものではなくなることを意味します。
「少しだけお金を切り出し、アクセスできない別の場所に置いて使えるようになったら、それが節約の考え方を始める最も簡単な方法だと思います」と彼は言う。
それは、当座預金口座から普通預金口座への定期注文を設定したり、現金を別の封筒に整理したり、支出時に予備の小銭を保管するラウンドアップツールを使用したりすることを意味する可能性があります。
ナン氏は「少しずつ貯蓄し、早めに貯蓄し、定期的に貯蓄する」ことを推奨しています。
彼は「予算を立てるのが嫌いで、いつもそうしている」と認めているため、給料を受け取るとすぐに現在の口座を見て、どれだけ貯蓄に移すかを決めると述べています。 「できるだけ早くそれをしなさい」と彼は付け加えた。
同氏は、貯蓄だけでなく、ボイラーの故障や車の修理などの突発的な出費に備えて緊急資金も用意しておくことを勧めている。資金がどれくらい必要かは状況によって異なりますが、可能であれば給与の 1 ～ 3 か月分を積み立てておくことをお勧めします。
2. 人間関係におけるお金について話す
ナン氏と妻は共同口座を使用しており、お金に関しては「完全な透明性」を保っているという。
彼は常に「比較的慎重」なので、恋愛における彼の危険信号は「お金に注意しない人」です。
彼のお金に対する考え方は幼少期に形成されました。両親は離婚し、母親は 4 人の子供を育てました。そのため、彼は支出について慎重に考えて育ちました。
「私たちは何にお金を使っているかを常に心配していて、スーパーで安い食べ物を探したり、休日や余暇に何をするかについて注意深く考えたりするなど、お金を注意深く管理していました。」
3.子供たちにお小遣いをあげる
ナンさんは、子供たちは「私は父親なので、私のアドバイスを受け入れない」と述べているが、お金の価値を理解させるよう努めているという。
「彼らは小遣いを持っているので予算を立てるのに役立ち、収入の範囲内で生活しています」と彼は言う。
同氏は、彼の子供のうち2人はより快適にお金を使うことができ、他の子供たちはより自然に貯蓄をする傾向があると付け加え、これは銀行が顧客についてどのように見ているかを反映していると彼は言う。
彼は、若者が一般的に経済的に無責任であるとは考えていないが、人々が現在オンラインで直面している情報量、誤った情報、圧力に対処するというより大きな課題について懸念している。
取引やオンラインで誰かに頼まれたことについて確信が持てない場合は、「好奇心を持って質問する」ことで、詐欺から身を守ることができます。
4. 購入する前に一時停止してください
ナン氏の最大の懸念は、ソーシャルメディアプラットフォームやオンラインマーケットプレイスを通じて多くの人が標的にされる詐欺行為だ。
「若者はテクノロジーに精通している傾向があるにもかかわらず、高齢者よりもその影響を受けやすいです」と彼は言います。
彼のアドバイスは、送金する前に一度立ち止まって、「相手を信頼できるかどうか」を自問することだという。
「疑問がある場合は、参照してアドバイスを得ることができるツールがあります。また、いつでも電話で確認することもできます。」
ロイズは、オンラインでチケットなどの物を購入する人が写真をアップロードして、それが本物であるかどうかを確認できるツールを立ち上げた。
「そのようなツールに頼ればいいのです。なぜなら、それらは利用可能であり、人々を守るためにそこにあるからです。」
5. フィンフルエンサーに注意
ソーシャルメディアはお金について学ぶのに役立ちますが、ナン氏は金融界の影響力を持つ人物がリスクの高い商品を押し付けていることを「深く懸念」しています。
「彼らは、人々が自分たちに適したものを選択するのを助けるのではなく、特定の暗号通貨、ミームコイン、または投資商品を宣伝するために報酬をもらっています」と彼は言う。
「あまりお金を持っていない人のほとんどは、そのお金を失う可能性があるというレベルのリスクを取るべきではありません。」
むしろ、これから始める人はリスクとコストを慎重に考え、よりシンプルで多様な選択肢を検討すべきだと同氏は言う。
連絡する
何かのために貯金したり、借金を返済したりすることができましたか?その方法についてのヒントを共有してください。
関連トピック
- 6 月 25 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cd7wldr3prro?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-08T23:10:10+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/47dd/live/7709e540-7ae6-11f1-9a9c-53fd8f110370.jpg",
    readTime: 5,
  },
  {
    id: "why-electric-cars-cost-more-to-insure-an-0191bedb",
    title: "Why electric cars cost more to insure - and what's being done about it",
    titleJa: "電気自動車の保険料が高くなる理由 - そしてそれに対して何が行われているか",
    summaryJa: "電気自動車の保険料が高くなる理由 - そしてそれに対して何が行われているか- 公開されました",
    bodyOriginal: `Why electric cars cost more to insure - and what's being done about it
- Published
It's hot and bright beneath the high intensity lights in a cavernous crash and safety testing laboratory, hidden away in a business park outside Newbury.
A siren blares and a disembodied voice counts down: "Three, two, one." A small white car trundles into view, rolls across the floor, and bumps into a barrier set against the wall.
As crash tests go, this one is hardly spectacular. There is no torn metal or flying glass. At just 6mph, it replicates the kind of annoying prang you might well get in a car park or at a traffic light.
But raise the slightly bent bonnet to look underneath, and it's a different story. This is an electric vehicle (EV) – a Dacia Spring – and the hidden damage is significant.
As senior test engineer Sean Hoad points out, the high-voltage charging port, mounted at the front of the car is badly broken, as are components it's attached to.
"This is all one big unit, meaning we can't just replace the front charge port. We have to replace the charger itself, the inverter, and some of the cabling," he explains.
Repairing all of that, he says, would cost about £4,000, and there is other damage to consider as well, so the chances are an insurer would not bother getting it fixed.
"It's more than likely this car would be written off," he adds.
Thatcham Research, which works on behalf of the insurance industry, is carrying out tests like this to understand why EVs typically attract higher insurance premiums.
On average, it says, EVs cost 30% more to repair than petrol or diesel models, and it takes 14% longer to fix them.
This then feeds through to the insurance price. It can cost 10-25% more to insure an EV than a petrol or diesel car, depending on the make and model.
So, why is it so expensive? And what can be done about it?
According to the latest data from the Society of Motor Manufacturers and Traders (SMMT), EV sales have surged to the point that they made up almost one in every three new cars sold in the UK in June, external.
Ian Plummer, chief customer officer of car selling website Autotrader, says the rising EV demand is "driven by intensifying competition and rising consumer interest in plug-in cars".
However, he said "the wider context remains fragile, with ongoing uncertainty around policy, incentives, and wider external pressures".
The insurance cost is one of those niggling concerns that could put off would-be buyers.
"It's absolutely crucial electric vehicles become cheaper to insure," insists Steve Fowler, co-founder of the car review website Carblah.
"They are expensive – though not as expensive as some people might think – but by making them easier to repair and cheaper to insure, more people will buy them."
The issue, it seems, comes from the way many EVs are designed.
"There's a real focus on keeping weight down, because electric vehicles are heavy," says principal advanced technologies engineer Dan Harrowell.
"To save some weight, there's a lot of integration of components. They're glued together, rather than using fixings, which is great to reduce weight, but not great for repair, because you have to replace whole systems rather than individual components."
In a nearby workshop, a nearly-new model from a mainstream manufacturer is jacked up on a ramp.
This car was brought in following a relatively minor accident, and Harrowell points to a few scratches and scrapes on the protective casing of the battery underneath the car.
The core of the battery, containing the cells which provide power for the car, is unharmed. But because the whole assembly is supplied as a single unit, it would need to be replaced in its entirety for a full repair.
Given the battery makes up about 40% of the value of the whole car, replacing it would be too expensive.
"Damage to the battery is much less common, but the sheer value of it means any damage at all, if it involves a replacement, risks writing off the vehicle," he says.
Making batteries easier to repair might help solve this problem, although industry sources suggest insurers themselves have proved resistant to the idea.
The surge of Chinese EV makers coming into the UK market has also created a few headaches, Horrowell adds.
Labour rates in China are much lower, which means there is little incentive to minimise the amount of work needed to mend a car. In Europe, labour costs are much higher, so the process of repairing a car needs to be simpler.
"We've had to work with them to really help them to understand the difference in our market," he explains.
Stuart Masson, editor of The Car Expert, says EVs "have fewer components than petrol or diesel cars, but a lot of those components that they do have are quite expensive".
He says the other issue is a shortage of parts and technicians.
"So the cars have to wait longer in the workshop, which means the insurance company has to give you a loan car for longer, which drives up the cost of repairs, which drives up the cost of insurance and premiums for everybody."
However, he says things are improving, with overall costs of buying and running EVs falling even if insurance costs remain high.
Meanwhile, the work being carried out by Thatcham is intended to find ways in which EVs can be made easier and cheaper to repair.
This might mean, for example, changing the location of components like the charging port to make them less vulnerable.
It could also involve redesigning some parts, such as battery casings, to make them replaceable so that the battery itself does not need to be discarded after a minor accident.
The organisation has drawn up a blueprint for manufacturers, with a list of recommendations to keep repairs as simple and affordable as possible and to avoid unnecessary write-offs.
Renault, which owns Dacia and is a major manufacturer of EVs under its own brand, says it is looking at how fixing them can be made cheaper.
This includes "working on ways to make repairs to battery packs more technically feasible, while respecting safety protocols...as well as satisfying the requirements of insurers".
Progress has clearly been made across the sector. The most recent EV models have average repair costs that are just 18% higher than their conventional counterparts.
That should ultimately feed into more affordable insurance premiums - and could also help to boost electric car sales.
Related topics
- Published25 June
- Published14 June`,
    bodyJa: `電気自動車の保険料が高くなる理由 - そしてそれに対して何が行われているか
- 公開されました
ニューベリー郊外のビジネスパークにひっそりと佇む、洞窟のような衝突安全試験研究所の高輝度ライトの下は、暑くて明るい。
サイレンが鳴り響き、「3、2、1」と、実体のない声がカウントダウンする。小さな白い車が視界に入ってきて床を転がり、壁に設置された柵にぶつかりました。
衝突テストが進むにつれて、これは決して素晴らしいものではありません。金属の破れやガラスの飛散もありません。時速わずか 6 マイルで、駐車場や信号待ちで遭遇するような不快な衝撃を再現します。
しかし、少し曲がったボンネットを持ち上げて下を見ると、話は別です。これは電気自動車 (EV)、つまりダチア スプリングであり、隠れた損傷は重大です。
上級テストエンジニアのショーン・ホード氏が指摘しているように、車の前部に取り付けられた高電圧充電ポートは、取り付けられているコンポーネントと同様にひどく壊れています。
「これはすべて 1 つの大きなユニットです。つまり、前面の充電ポートを交換するだけでは済みません。充電器自体、インバーター、および一部のケーブルを交換する必要があります。」と彼は説明します。
これらすべてを修理するには約4,000ポンドの費用がかかり、他にも考慮すべき損傷があるため、保険会社はわざわざ修理しない可能性が高いと彼は言う。
「この車は廃車になる可能性が非常に高いです」と彼は付け加えた。
保険業界を代表して活動するサッチャム・リサーチは、EVが一般的に保険料が高くなる理由を理解するためにこのようなテストを実施している。
同報告書によると、平均してEVはガソリン車やディーゼル車に比べて修理費用が30％高く、修理には14％長くかかるという。
これが保険料に反映されます。メーカーやモデルにもよりますが、EV の保険料はガソリン車やディーゼル車よりも 10 ～ 25% 高くなります。
では、なぜそんなに高価なのでしょうか?そしてそれに対して何ができるでしょうか？
自動車製造業貿易協会（SMMT）の最新データによると、EVの販売は6月に英国で販売された新車3台のうちほぼ1台を国外で占めるまでに急増した。
自動車販売サイト「オートトレーダー」の最高顧客責任者イアン・プラマー氏は、ＥＶ需要の高まりは「競争の激化とプラグインカーに対する消費者の関心の高まりによってもたらされている」と述べた。
しかし同氏は、「政策やインセンティブ、より広範な外部圧力を巡る不確実性が続いており、より広範な状況は依然として脆弱である」と述べた。
保険費用は、購入希望者を躊躇させる可能性がある厄介な懸念事項の 1 つです。
「電気自動車の保険料が安くなることは絶対に重要だ」と自動車レビューサイト「カーブラー」の共同創設者スティーブ・ファウラー氏は主張する。
「それらは高価ですが、一部の人が考えるほど高価ではありませんが、修理が簡単になり、保険が安くなれば、より多くの人が購入するでしょう。」
この問題は、多くのEVの設計方法に起因しているようだ。
「電気自動車は重いので、重量を抑えることに重点が置かれています」と主任先端技術エンジニアのダン・ハロウェル氏は言う。
「重量を軽減するために、コンポーネントの統合が頻繁に行われます。部品は固定具を使用せずに接着されています。これは軽量化には最適ですが、個々のコンポーネントではなくシステム全体を交換する必要があるため、修理には向いていません。」
近くの作業場では、大手メーカーのほぼ新品のモデルがスロープにジャッキアップされています。
この車は比較的軽微な事故の後に持ち込まれたもので、ハロウェル氏は車の下にあるバッテリーの保護ケースにいくつかの傷や擦り傷があったと指摘している。
車に電力を供給するセルを含むバッテリーのコアは無傷です。ただし、アセンブリ全体が単一ユニットとして供給されるため、完全な修理にはアセンブリ全体を交換する必要があります。
バッテリーが車全体の価値の約40％を占めることを考えると、バッテリーを交換すると高額になりすぎます。
「バッテリーの損傷はそれほど一般的ではありませんが、バッテリーの価値は非常に高いため、交換が必要な場合は、いかなる損傷も車両を償却するリスクがあることを意味します」と彼は言います。
バッテリーの修理を容易にすることは、この問題の解決に役立つかもしれないが、業界関係者は、保険会社自体がこの考えに抵抗があることが判明したことを示唆している。
英国市場に参入する中国のEVメーカーの急増も、いくつかの頭痛の種を生み出しているとホロウェル氏は付け加えた。
中国の人件費ははるかに低いため、車の修理に必要な作業量を最小限に抑える動機がほとんどありません。ヨーロッパでは人件費がはるかに高いため、車の修理プロセスはより簡素化される必要があります。
「私たちは彼らと協力して、彼らが私たちの市場の違いを理解できるようにする必要がありました」と彼は説明します。
The Car Expert の編集者であるスチュアート・マッソン氏は、EV は「ガソリン車やディーゼル車よりも部品が少ないが、搭載されている部品の多くは非常に高価である」と述べています。
もう一つの問題は部品と技術者の不足だと彼は言います。
「そのため、車は工場でより長く待たなければなりません。つまり、保険会社はより長く代車を提供しなければならないことを意味します。そのため、修理費が上昇し、全員の保険料と保険料が上昇します。」
しかし、保険料は依然として高水準にあるものの、EVの購入と運用にかかる全体的なコストは低下しており、状況は改善していると同氏は言う。
一方、サッチャムが行っている研究は、EVの修理をより簡単かつ安価にする方法を見つけることを目的としている。
これは、たとえば、充電ポートなどのコンポーネントの位置を変更して、脆弱性を軽減することを意味する場合があります。
また、軽微な事故の後にバッテリー自体を廃棄する必要がないように、バッテリーケースなどの一部の部品を交換可能にするために再設計することも含まれる可能性があります。
同団体は、修理をできるだけ簡単かつ手頃な価格に保ち、不必要な償却を避けるための推奨事項のリストを記載したメーカー向けの青写真を作成した。
ダチアを所有し、自社ブランドのEVの大手メーカーであるルノーは、どうすれば修理費を安くできるかを検討していると述べた。
これには、「安全プロトコルを尊重しながら、保険会社の要件を満たすとともに、バッテリーパックの修理をより技術的に実行可能にする方法に取り組む」ことが含まれます。
セクター全体で明らかに進歩が見られます。最新の EV モデルの平均修理費用は、従来のモデルよりわずか 18% 高いだけです。
それは最終的にはより手頃な保険料に反映され、電気自動車の販売促進にもつながる可能性がある。
関連トピック
- 6 月 25 日発行
- 6 月 14 日公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cgk6606j6zeo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-08T23:09:55+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/bac1/live/0041f990-7959-11f1-b976-0b9c15b0ccfc.jpg",
    readTime: 7,
  },
  {
    id: "i-started-retirement-with-3-million-now-28ddfae6",
    title: "I started retirement with $3 million. Now I’m 89 and down to $2 million. What if I get sick?",
    titleJa: "私は300万ドルを持って退職を始めました。今私は89歳で、残り200万ドルです。病気になったらどうすればいいですか？",
    summaryJa: "通常の支出についてはもう心配していなくても、長期介護の必要性は、どの予算においても依然として問題となります。",
    bodyOriginal: `Even if you’re not worried about your normal spending anymore, a long-term-care need is still a problem for any budget.`,
    bodyJa: `通常の支出についてはもう心配していなくても、長期介護の必要性は、どの予算においても依然として問題となります。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/i-started-retirement-with-3-million-now-im-89-and-down-to-2-million-what-if-i-get-sick-7401056a?mod=mw_rss_topstories",
    publishedAt: "2026-07-08T22:48:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-21153853",
    readTime: 2,
  },
  {
    id: "oil-prices-extend-gains-after-hours-as-u-7f124136",
    title: "Oil prices extend gains after hours as U.S. forces conduct additional strikes on Iran",
    titleJa: "米軍がイランへの追加攻撃を実施する中、原油価格は時間外で上昇幅を拡大",
    summaryJa: "水曜日、原油価格は２週間以上ぶりの高値で落ち着いたが、米軍がイランへの追加攻撃を開始したと発表したことを受け、時間外取引で上昇幅を拡大した。",
    bodyOriginal: `Oil prices settled at their highest levels in more than two weeks on Wednesday, then extended their gains in after-hours trading after the U.S. military said it launched additional strikes on Iran.`,
    bodyJa: `水曜日、原油価格は２週間以上ぶりの高値で落ち着いたが、米軍がイランへの追加攻撃を開始したと発表したことを受け、時間外取引で上昇幅を拡大した。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/oil-prices-jump-by-the-most-in-two-months-after-trump-suggests-u-s-iran-cease-fire-is-over-9fa7caee?mod=mw_rss_topstories",
    publishedAt: "2026-07-08T21:16:00+00:00",
    category: "エネルギー",
    imageUrl: "https://images.mktw.net/im-02006560",
    readTime: 2,
  },
  {
    id: "virgin-media-fined-after-hanging-up-on-c-f4e903ad",
    title: "Virgin Media fined after hanging up on customers trying to cancel contracts",
    titleJa: "契約をキャンセルしようとする顧客に電話を切ったヴァージン・メディアに罰金",
    summaryJa: "契約をキャンセルしようとする顧客に電話を切ったヴァージン・メディアに罰金- 公開されました",
    bodyOriginal: `Virgin Media fined after hanging up on customers trying to cancel contracts
- Published
Virgin Media has been fined £28m for repeatedly preventing customers from cancelling contracts, Ofcom said.
The communications regulator said it uncovered tactics including agents deliberately hanging up calls, and customers being put on hold "for no reason".
It said millions of calls from customers were "likely mishandled" over a three-year period which prevented or delayed them from switching to a better broadband, landline or pay-TV deal.
The penalty was reduced by 30% as Virgin Media admitted its failing and agreed to settle, Ofcom added. Virgin Media apologised to the "small proportion who experienced an issue when contacting us to agree a new deal or cancel their service in the past".
Ofcom's investigation uncovered behaviour including: excessive and unnecessary call transfers, deliberately hanging up calls, repeated attempts to pressure customers to stay, and unnecessarily and repeatedly keeping customers on hold.
It said Virgin Media's commission scheme "effectively encouraged" and financially rewarded call centre agents for "behaving in this way".
Virgin Media said it had "resolved all formal customer complaints from this period providing redress where appropriate".
Ofcom said Virgin Media would need to check every affected customer who complained has received compensation or other remedies they were entitled to within six months.
It said its rules "are clear that the conditions or procedures telecoms providers have in place must not act as a disincentive for customers who wish to cancel their contract" - and that Virgin Media's failings likely acted as a disincentive for customers in million of calls.
The calls investigated were between 1 January 2022 and 11 September 2024 and were found to have likely been mishandled by call agents "in order to delay or prevent customers from cancelling and switching to a competitor".
Natalie Black, Ofcom's group director for infrastructure and connectivity, told the BBC's Today programme that Virgin Media's actions were "pretty shocking" and showed "poor behaviour".
"Right at the beginning of this problem, a number of years ago in 2022, we tried to resolve this informally. There wasn't the will to do that," she said.
She added in a statement: "The facts are clear. Virgin Media made it harder for customers to cancel their contracts and then did not fully cooperate with our investigation."
'I gave up'
Anthony, from Brighton, tried to cancel his TV package with Virgin last August, just before it was up for renewal.
The 58 year old said he has been a Virgin customer for a decade, but felt the company's prices "were going up astronomically for the last three or four years".
When he phoned, he said the call "dropped off" after playing a series of "garbled" automated messages.
"I never got to speak to a person," he said. "Basically I gave up."
He said his subscription was renewed without Virgin notifying him, but he is now paying £90 more per month than last year.
"I don't know why they do it," he said. "I can get Sky for about £80 a month."
Virgin Media fined £24m for leaving vulnerable customers 'at risk of harm'
- Published1 December 2025
Ofcom received complaints from 1,881 customers who reported difficulties cancelling.
It added that some customers resorted to having to cancel their direct debits, which led to further difficulties such as missed payments impacting their credit score.
Black said Ofcom had introduced "further safeguards to prevent this from happening again", including its "One Touch Switch" process launched in 2024, intended to make changing broadband or landline providers hassle-free.
The regulator found that Virgin Media had two-tier system of retention agents, and only agents in the second tier were able to process cancellations.
This resulted in over a million callers being made to repeat their request to at least one further agent, it said.
It said Virgin Media has made some important changes, including to improve its commission scheme, training and quality assurance and monitoring.
A Virgin Media spokesperson said it had "completely redesigned" its customer service in recent years and addressed the "historic shortfalls" through a number of improvements.
"Our customer service turnaround strategy, underpinned by significant investment, has been transformational.
"Ofcom's latest data shows that Virgin Media is now the least-complained-about broadband provider with complaints at record lows, and complaints specifically relating to 'difficulties leaving' were 89% lower last year than in 2023," the spokesperson added.
Virgin Media must pay the fine within two months and the money will be passed on to the Treasury.
The regulator said its fine was the largest it had issued under its consumer protection rules, and its third largest ever in general.
Its biggest fine of £50m was issued to Royal Mail in 2018 for breaking competition law, and its second biggest fine of £42m was for BT in 2017.
Virgin Media was fined £23.8m by Ofcom in 2025 for leaving thousands of customers without access to lifesaving telecare alarms during the digital switchover.
Additional reporting by Bernadette McCague.
Get in touch
Have you been affected by the issues in this story? Share your experiences
Related topics
- Published14 August 2018
- Published27 March 2017`,
    bodyJa: `契約をキャンセルしようとする顧客に電話を切ったヴァージン・メディアに罰金
- 公開されました
オフコムによると、ヴァージン・メディアは顧客の契約解除を繰り返し妨害したとして、2,800万ポンドの罰金を科されたという。
通信規制当局は、エージェントが意図的に電話を切ったり、顧客が「理由もなく」保留にされたりするなどの手口が判明したと述べた。
同報告書は、顧客からの数百万件の電話が3年間で「誤って処理された可能性が高く」、そのためにより良いブロードバンド、固定電話、有料テレビ契約への切り替えが妨げられたり遅れたりしたと述べた。
ヴァージン・メディアが失敗を認め和解に同意したため、違約金は30％減額されたとオフコムは付け加えた。 Virgin Mediaは「過去に新規契約の合意やサービスのキャンセルのために当社に連絡した際に問題が発生した少数の人々」に謝罪した。
Ofcom の調査により、過度かつ不必要な通話転送、意図的に電話を切る、顧客に滞在するよう圧力をかけようとする繰り返しの試み、不必要かつ繰り返し顧客を保留状態にするなどの行為が明らかになりました。
同紙は、ヴァージン・メディアの手数料体系がコールセンターのエージェントの「このような行動」を「効果的に奨励」し、金銭的に報酬を与えていると述べた。
ヴァージン・メディアは「この期間の顧客からの正式な苦情はすべて解決し、必要に応じて救済を行った」と述べた。
Ofcomは、Virgin Mediaは、苦情を申し立てた影響を受けたすべての顧客が、6か月以内に補償やその他の権利のある救済を受けているかどうかを確認する必要があると述べた。
同社の規則は「通信事業者が定めている条件や手続きが契約解除を希望する顧客の阻害要因となってはいけないことは明らか」であり、ヴァージン・メディアの失敗は数百万件の通話において顧客の阻害要因となった可能性が高いと述べた。
調査された通話は2022年1月1日から2024年9月11日までのもので、「顧客がキャンセルして競合他社に乗り換えるのを遅らせたり阻止したりする目的で」電話エージェントによって誤って処理された可能性が高いことが判明した。
Ofcomのインフラストラクチャおよび接続担当グループディレクターであるナタリー・ブラック氏はBBCのトゥデイ番組で、ヴァージン・メディアの行動は「かなり衝撃的」であり、「行状が悪い」と述べた。
「数年前の2022年、この問題が始まった当初、私たちは非公式にこの問題を解決しようとした。その意志はなかった」と彼女は語った。
同氏は声明で「事実は明らかだ。ヴァージン・メディアは顧客の契約解除を困難にし、その後われわれの調査に全面的に協力しなかった」と付け加えた。
「諦めた」
ブライトン出身のアンソニーさんは昨年8月、契約更新直前にヴァージンとのテレビパッケージをキャンセルしようとした。
この58歳の男性は、10年来のヴァージン顧客だが、同社の価格が「ここ3、4年で天文学的に上昇している」と感じていたと語った。
電話をかけると、一連の「文字化けした」自動メッセージが流れた後、通話が「途切れた」と述べた。
「人と話すことは一度もなかった」と彼は言った。 「基本的には諦めました。」
同氏は、ヴァージン社からの通知なしに定期購読が更新されたが、現在は昨年より月額90ポンド多く支払っていると語った。
「なぜ彼らがそんなことをするのか分からない」と彼は言った。 「Sky は月額約 £80 で利用できます。」
Virgin Media、脆弱な顧客を「危害の危険にさらした」として2,400万ポンドの罰金
- 2025 年 12 月 1 日発行
Ofcom は、キャンセルが難しいと報告した 1,881 人の顧客から苦情を受け取りました。
さらに、一部の顧客は口座振替をキャンセルしなければならなくなり、支払いが遅れて信用スコアに影響を与えるなど、さらなる困難につながったと付け加えた。
ブラック氏は、オフコムがブロードバンドや固定電話プロバイダーの変更を手間なく行うことを目的として、2024年に開始した「ワンタッチスイッチ」プロセスなど、「再発防止のためのさらなる安全策」を導入したと述べた。
規制当局は、Virgin Media には 2 層の保持エージェント システムがあり、2 層のエージェントのみがキャンセルを処理できることを発見しました。
その結果、100万人以上の発信者が少なくとも1人の別のエージェントにリクエストを繰り返すことになったという。
ヴァージン・メディアは手数料体系、トレーニング、品質保証とモニタリングの改善など、いくつかの重要な変更を行ったと同社は述べた。
ヴァージン・メディアの広報担当者は、近年顧客サービスを「完全に再設計」し、多くの改善を通じて「歴史的な不足」に対処したと述べた。
「当社の顧客サービス再生戦略は、多額の投資に支えられ、変革をもたらしてきました。
「Ofcomの最新データによると、ヴァージン・メディアは現在苦情が最も少ないブロードバンドプロバイダーであり、苦情は過去最低となっており、特に『退職の困難』に関連する苦情は、昨年は2023年より89％減少した」と広報担当者は付け加えた。
Virgin Media は 2 か月以内に罰金を支払う必要があり、その金は財務省に渡されます。
規制当局は、その罰金は消費者保護規則に基づいて発行された中で最大であり、一般的には過去3番目に大きいと述べた。
最も高額な罰金5,000万ポンドは2018年に競争法違反でロイヤル・メールに課され、2番目に高額な罰金4,200万ポンドは2017年にBTに課せられた。
Virgin Media は、デジタル切り替え中に数千人の顧客が救命テレケア アラームにアクセスできなかったとして、2025 年に Ofcom から 2,380 万ポンドの罰金を課されました。
Bernadette McCague による追加レポート。
連絡する
この物語の問題の影響を受けましたか?あなたの経験を共有してください
関連トピック
- 2018 年 8 月 14 日公開
- 2017 年 3 月 27 日公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c982vm2jzl1o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-08T11:24:05+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/6fac/live/fce6af60-7ab2-11f1-9510-1546718f668b.jpg",
    readTime: 6,
  },
  {
    id: "fed-rate-hold-2025",
    title: "Federal Reserve Holds Rates Steady, Signals One Cut Later This Year",
    titleJa: "米連邦準備制度理事会、金利据え置き──年内1回の利下げを示唆",
    summaryJa: "米連邦準備制度理事会（FRB）は政策金利を4.25〜4.50%の範囲で据え置きました。インフレが目標の2%に向かって緩やかに低下している一方、雇用市場は依然として堅調であると判断しています。パウエル議長は「データに依存した姿勢を維持する」と述べ、年内に1回の利下げの可能性を示唆しました。市場は9月の利下げを織り込み始めており、長期金利は小幅に下落しました。企業は資金調達コストの安定を歓迎する一方、住宅ローン金利の高止まりが不動産市場に引き続き圧力をかけています。",
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
    id: "amazon-ai-investment",
    title: "Amazon Plans $100 Billion AI Infrastructure Investment Over Five Years",
    titleJa: "アマゾン、5年間でAIインフラに1000億ドル投資へ",
    summaryJa: "アマゾンは今後5年間で人工知能インフラに1000億ドル（約15兆円）を投資する計画を発表しました。AWSのデータセンター拡張、カスタムAIチップ「Trainium」「Inferentia」の開発、生成AIサービスの強化が主な内容です。アンディ・ジャシーCEOは「AIはアマゾンにとってこれまでで最大の技術変革」と強調しました。マイクロソフトやグーグルも同様の大規模投資を発表しており、クラウド各社のAI軍拡競争が激化しています。投資家は短期の利益率低下を懸念する一方、長期的な競争力確保には不可欠と評価しています。AWSの市場シェアは32%で首位を維持していますが、マイクロソフトAzureの追い上げが続いています。",
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
    id: "china-stimulus-package",
    title: "China Unveils $140 Billion Stimulus Package to Boost Domestic Consumption",
    titleJa: "中国、国内消費刺激のため14兆円規模の景気対策を発表",
    summaryJa: "中国国務院は国内消費を刺激するため、約1400億ドル（約21兆円）規模の景気対策パッケージを発表しました。家電製品や自動車の買い替え補助、地方自治体向けのインフラ投資、住宅ローン金利の引き下げが含まれます。不動産市場の長期低迷と若年層の高失業率が経済の弱点となっており、当局は内需拡大に注力しています。上海総合指数は発表後2.1%上昇しました。ただし、経済学者の間では、この措置だけでは構造的な問題の解決には不十分ではないかとの見方もあります。日本企業にとっては、中国市場の消費回復が輸出にプラスに働く可能性がありますが、地政学リスクは依然として不透明感を残しています。",
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
  {
    id: "japan-boj-rate-decision",
    title: "Bank of Japan Raises Rates to 0.75%, Highest in 17 Years",
    titleJa: "日本銀行、政策金利を0.75%に引き上げ──17年ぶりの高水準",
    summaryJa: "日本銀行は金融政策決定会合で政策金利を0.5%から0.75%に引き上げ、1995年以来17年ぶりの高水準としました。春闘での賃上げ率の改善と物価の安定した上昇を背景に、金融正常化のペースを加速させています。植田総裁は「実質金利は依然としてマイナスであり、緩和的な金融環境は維持される」と説明しました。円相場は一時1ドル=155円台まで円高が進み、輸出企業の株価には押し下げ圧力がかかりました。一方、銀行株は金利上昇を歓迎し、三菱UFJフィナンシャル・グループなどが上昇しました。市場は年内にさらなる利上げの可能性を50%程度と見ています。",
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
    id: "nvidia-ai-chip-demand",
    title: "Nvidia Surpasses $4 Trillion Market Cap on AI Chip Demand",
    titleJa: "エヌビディア、AI半導体需要で時価総額4兆ドル突破",
    summaryJa: "エヌビディアの時価総額が4兆ドルを超え、世界初の非金融企業としてこの水準に到達しました。データセンター向けAI半導体の需要が引き続き急増しており、同社の四半期売上は前年比78%増の386億ドルに達しました。主要クラウドプロバイダーが次世代GPUの大量発注を続けており、供給制約が依然として課題です。競合のAMDやインテルもAIチップ市場への参入を加速していますが、エヌビディアのシェアは80%以上を維持しています。投資家はAI投資サイクルの持続性に注目しており、規制リスクや地政学的なサプライチェーン問題が今後の変数となります。",
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
    id: "tesla-robotaxi-launch",
    title: "Tesla Launches Robotaxi Service in Austin, Texas",
    titleJa: "テスラ、テキサス州オースティンでロボタクシーサービスを開始",
    summaryJa: "テスラはテキサス州オースティンで自動運転タクシーサービス「Robotaxi」の限定運用を開始しました。Model Yをベースにした車両が、安全運転員なしで市内の特定エリアを走行します。イーロン・マスクCEOは「交通の未来はここから始まる」と述べましたが、規制当局や競合からは安全性への懸念が示されています。ウェイモやクルーズなどの競合は既に他都市で商用サービスを展開しており、テスラは後発組です。初期は招待制の利用者のみが対象で、1回の乗車料金は推定5〜10ドルです。テスラの株価は発表後4%上昇しましたが、自動運転技術の実用化には依然としてハードルが残ります。",
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
    summaryJa: "OPEC+は8月から毎月22万バレルの段階的な原油増産に合意しました。サウジアラビア主導のこの決定は、高い原油価格による世界経済への影響を懸念する一方、市場シェアの回復も狙っています。ブレント原油はバレルあたり78ドル前後で推移しており、増産発表後は2%下落しました。エネルギーアナリストは、需要の季節的な強さと地政学リスクが価格の下支えになると分析しています。米国のシェールオイル生産も記録的高水準で、OPEC+の価格支配力は相対的に低下しています。日本や欧州の輸入国にとっては、エネルギーコストの安定化がインフレ抑制に寄与する可能性があります。",
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
