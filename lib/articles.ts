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
    id: "trump-1-coin-makes-him-first-living-pres-a5b95db7",
    title: "Trump $1 coin makes him first living president on US currency in a century",
    titleJa: "トランプ大統領は1ドル硬貨で100年ぶりに米国通貨での存命大統領となる",
    summaryJa: "トランプ大統領は1ドル硬貨で100年ぶりに米国通貨での存命大統領となる- 公開されました",
    bodyOriginal: `Trump $1 coin makes him first living president on US currency in a century
- Published
Donald Trump's portrait has made its way on to a US coin - the first time a living president has appeared on American currency in a century.
On Wednesday, the US Mint launched the commemorative $1 coin with a portrait of Trump alongside the words "In God we trust", to celebrate America's 250th anniversary.
The special-edition coin captures "the spirit, pride, and legacy of a nation approaching its landmark anniversary", the US Mint said.
The coins - priced at $61 (£45) for a roll of 25 and a bag of 100 for $154.50 - were "not currently in stock" on the US Mint's website within hours of going on sale. The BBC has contacted the US Mint, the Treasury and the White House for further details.
The coin has been "created to celebrate this historic national milestone" with a "once-in-a-generation anniversary design destined to become a standout addition to modern collections", the US Mint said.
They are also being sold in vending machines at the US Mint store in Washington DC.
While the coins have a golden colour they do not contain any actual gold. According to the US Mint, they are 88.5% copper with the balance being made up of zinc, manganese and nickel.
Back in May, Treasury Secretary Scott Bessent said his department was planning to issue a new $250 bill bearing a portrait of President Trump.
Federal law bars the printing of US money with the image of a living person. Trump allies in Congress have introduced legislation that would make an exception, although the proposal is currently stalled.
At the time, Bessent highlighted that another living US president has previously appeared on the country's currency.
A half-dollar that was issued to commemorate America's 150th anniversary in 1926 featured then-President Calvin Coolidge.
The Trump administration has also cited the Circulating Collectible Coin Redesign Act of 2020, from Trump's first term.
While this statute prohibits portraits of living people on the reverse (tails side) of coins, it does not explicitly cover the obverse (heads side), where Trump's likeness appears on the new $1 coins.
The Thayer Amendment of 1866 bans the portrait of any living person on US notes, although this traditionally does not apply to coins.
Related topics
- Published20 March`,
    bodyJa: `トランプ大統領は1ドル硬貨で100年ぶりに米国通貨での存命大統領となる
- 公開されました
ドナルド・トランプ氏の肖像画が米国の硬貨に採用された。存命の大統領が米国の紙幣に登場するのは100年ぶりとなる。
水曜日、米国造幣局は米国建国250周年を記念して、トランプ大統領の肖像と「我々は神を信頼する」という言葉が描かれた記念の1ドル硬貨を発売した。
米国造幣局は、特別版のコインには「建国記念日を迎える国家の精神、誇り、遺産」が込められていると述べた。
このコインの価格は25枚入りで61ドル（45ポンド）、100枚入りで154.50ドルで、販売開始から数時間以内に米国造幣局のウェブサイトでは「現在在庫がない」と表示された。 BBCは詳細について米国造幣局、財務省、ホワイトハウスに問い合わせた。
米国造幣局によると、このコインは「この歴史的な国家の節目を祝うために作成」され、「現代のコレクションに傑出した追加となることを運命づけられた、一世代に一度の記念デザイン」が施されているという。
ワシントン DC の造幣局の自動販売機でも販売されています。
コインは黄金色をしていますが、実際の金は含まれていません。米国造幣局によると、銅は 88.5% で、残りは亜鉛、マンガン、ニッケルで構成されています。
5月に遡ると、スコット・ベッセント財務長官は、財務省がトランプ大統領の肖像を入れた新しい250ドル紙幣の発行を計画していると述べた。
連邦法は、存命人物の画像を使った米国の紙幣の印刷を禁止している。トランプ氏の同盟者である議会は例外を設ける法案を提出しているが、その提案は現在行き詰まっている。
その際、ベッセント氏は、別の存命米国大統領が過去に同国の通貨に登場したことを強調した。
1926年にアメリカ建国150周年を記念して発行されたハーフダラー紙には、当時のカルビン・クーリッジ大統領が描かれていた。
トランプ政権はまた、トランプ政権1期目の2020年流通収集コイン再設計法にも言及している。
この法律は、硬貨の裏面（裏）に存命人物の肖像画を掲載することを禁止しているが、新1ドル硬貨にトランプ大統領の肖像が描かれている表面（表）については明確に規定していない。
1866 年のセイヤー修正条項は、米国紙幣への存命人物の肖像を禁止していますが、これは伝統的に硬貨には適用されません。
関連トピック
- 3 月 20 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c7507g9v992o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-03T03:39:53+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/cb6a/live/cc827800-a72f-11f1-b970-fbb8e613a3a7.jpg",
    readTime: 3,
  },
  {
    id: "google-starts-september-with-ai-momentum-a7d17aa7",
    title: "Google starts September with AI momentum after longest monthly losing streak in over a decade",
    titleJa: "Google、10年以上で最長の月間連敗後もAIの勢いで9月スタート",
    summaryJa: "ウォール街で過去10年以上で最長の月次連敗を終えた後、グーグルは投資家に楽観視できるいくつかの理由を提示して9月をスタートさせた。同社は水曜日、信頼できる政府および企業顧客を対象とした新しいサイバーセキュリティ モデルと並んで、6 週間で 3 番目のフラッシュ モデルとなる Gemini 3.8 フラッシュを発売しました。バークシャー・ハサウェイのグレッグ・アベル最高経営責任者（CEO）も、アルファベットのAIの立場に対する国民の信任投票を申し出た。",
    bodyOriginal: `After wrapping up its longest monthly losing streak on Wall Street in more than a decade, Google has started September by giving investors several reasons for optimism.
The company on Wednesday launched Gemini 3.8 Flash, its third Flash model in six weeks, alongside a new cybersecurity model aimed at trusted government and enterprise customers. Berkshire Hathaway CEO Greg Abel also offered a public vote of confidence for Alphabet's AI position.
Meanwhile, a federal judge on Wednesday rejected the Justice Department's push to force Google to sell its ad exchange, another victory for the company against the government's antitrust efforts.
Taken together, the developments offer a more constructive setup for Alphabet after a difficult summer, when Google lost some of its momentum in the AI model race, saw high-profile talent departures, and underwent a major restructuring inside DeepMind.
The stock hasn't yet shown much of a rebound. It rose 0.6% on Wednesday after dropping more than 1% Tuesday to start the month, so it's still down slightly as September gets going.
But Google is enthusiastic about Gemini 3.8 Flash, which is focused heavily on coding and agentic tasks — two of the areas where AI companies are increasingly trying to turn technological advances into enterprise revenue. Google calls it Gemini's best reasoning and coding model yet, with significant improvements over 3.7 Flash in software engineering and multi-step tasks.
Tulsee Doshi, senior director of product management at Google DeepMind, told CNBC the recent Flash models have "really surprised us in positive ways in their performance," adding that they "give us opportunities to lean into them."
Smaller Flash models are cheaper to run and faster to iterate than the company's largest frontier systems, while increasingly approaching them on some tasks. But it's not enough to get the company close to Anthropic or OpenAI, said Gil Luria, an analyst at D.A. Davidson, in an interview.
"From a product perspective this model seems to keep Google in the race, but probably won't change the fact they are a distant third in the enterprise market," said Luria, who recommends holding the stock.
Competing on price
Price is key to Google's pitch.
Gemini 3.8 Flash costs 75 cents per million input tokens and $3.75 per million output tokens — the same introductory price as its last Flash model, even with the new one offering improvements in coding, agentic tasks and reasoning.
Gemini Enterprise is adding pay-as-you-go pricing, token discounts of up to 20%, monthly caps on agent spending and a zero-dollar base subscription option. According to materials provided to CNBC, Google has also directly targeted Microsoft and Anthropic, claiming their recurring seat fees and separate product licenses make their offerings more expensive and less flexible.
Google also has the benefit of scale. Nearly three-quarters of Google Cloud customers are already using its AI products, and Google Cloud CEO Thomas Kurian told CNBC that those customers are spending about 50% more than their original commitments.
DeepMind's Demis Hassabis has similarly described a future that plays to that strategy. Hassabis told the G20 Innovation meeting on Wednesday that Gemini could increasingly serve as a general-purpose layer coordinating cheaper, specialized models, and agents. In that world, breadth could matter as much as having the best model.
It was the first time to hear Hassabis speak publicly since DeepMind's reorganization last month. As part of that announcement, Hassabis moved from CEO of DeepMind to chairman of the unit.
Google is also touting costs in cybersecurity. The company says Gemini 3.8 Flash Cyber can detect and patch software vulnerabilities at frontier-level performance while running substantially faster and more affordably than larger models.
"We're really excited about being able to provide an offering to defenders that is a fraction of the cost, much faster, while still showcasing that frontier-level performance," Doshi said.
Because those capabilities could also be misused, Google is initially limiting access to a small group of trusted government and enterprise defenders through its new Fairwind Program.
There's a tradeoff for investors. Alphabet is spending enormous sums on AI infrastructure, so it's counting on growth and market share gains to deliver returns over the longer term.
Berkshire's Abel told CNBC's Becky Quick on Wednesday that it sees Alphabet as a winner in AI, a view partly based on how its portfolio companies use its technology.
"We have a lot of visibility from within our companies as to how we're using AI, what type of benefits it's delivering, so that brought incremental interest, and then we saw Google as a significant player," Abel said.
While Google's position in AI is viewed as tenuous by some market experts, the ad business keeps on humming along, growing 14% in the latest quarter.
That cash engine received another boost on Wednesday.
A federal judge overseeing the Justice Department's ad-tech antitrust case ruled that Google will not have to sell its AdX exchange, opting for behavioral remedies rather than the structural breakup regulators had sought. The decision follows a separate antitrust ruling last year, when a judge rejected calls to force Google to divest Chrome.
Antitrust attorney Wyatt Fore, a partner at Schinder Cantor Lerner, told CNBC it's a "big deal" that courts in both cases opted against breaking up the company, adding that Google is heading into the AI race with "no hands tied behind its back."
WATCH: Google's Pixel 11 puts Gemini Intelligence at the center of the smartphone`,
    bodyJa: `ウォール街で過去10年以上で最長の月次連敗を終えた後、グーグルは投資家に楽観視できるいくつかの理由を提示して9月をスタートさせた。
同社は水曜日、信頼できる政府および企業顧客を対象とした新しいサイバーセキュリティ モデルと並んで、6 週間で 3 番目のフラッシュ モデルとなる Gemini 3.8 フラッシュを発売しました。バークシャー・ハサウェイのグレッグ・アベル最高経営責任者（CEO）も、アルファベットのAIの立場に対する国民の信任投票を申し出た。
一方、連邦判事は水曜日、グーグルにアドエクスチェンジ売却を強制するという司法省の圧力を却下し、政府の反トラスト法に対する同社の新たな勝利となった。
総合すると、これらの開発は、GoogleがAIモデル競争で勢いを失い、著名な人材が退職し、DeepMind社内で大規模な組織再編が行われた困難な夏を経て、Alphabetにとってより建設的な体制を整えることになる。
株価はまだ大きな反発を示していない。月初めの火曜日に1％以上下落した後、水曜日には0.6％上昇したため、9月に入ってもまだわずかに下落している。
しかし、Google は Gemini 3.8 Flash に熱心であり、コーディングとエージェント タスクに重点を置いています。この 2 つの分野は、AI 企業が技術進歩を企業収益につなげようとますます努力している分野です。 Google は、これを Gemini のこれまでで最高の推論およびコーディング モデルと呼んでおり、ソフトウェア エンジニアリングと複数ステップのタスクにおいて 3.7 Flash よりも大幅に改善されています。
Google DeepMind の製品管理シニア ディレクターである Tulsee Doshi 氏は CNBC に対し、最近の Flash モデルは「パフォーマンスにおいて良い意味で本当に驚かされている」と語り、「Flash モデルに頼る機会を与えてくれた」と付け加えた。
小規模な Flash モデルは、同社最大のフロンティア システムよりも実行コストが低く、反復処理も高速ですが、一部のタスクではますますそれに近づいています。しかし、同社をAnthropicやOpenAIに近づけるにはそれだけでは十分ではないと、DA社のアナリスト、ギル・ルリア氏は語る。デビッドソン氏はインタビューで語った。
「製品の観点から見ると、このモデルはグーグルを競争に留めるようだが、エンタープライズ市場でグーグルが大きく離れた3位であるという事実はおそらく変わらないだろう」と株の保有を推奨するルリア氏は語った。
価格で勝負する
Google の売り込みの鍵となるのは価格だ。
Gemini 3.8 Flash のコストは、100 万入力トークンあたり 75 セント、100 万出力トークンあたり 3.75 ドルです。これは、コーディング、エージェント タスク、および推論の改善を提供する新しいモデルであっても、最後の Flash モデルと同じ導入価格です。
Gemini Enterprise には、従量課金制の料金設定、最大 20% のトークン割引、エージェント支出の月次上限、およびゼロドルの基本サブスクリプション オプションが追加されます。 CNBCに提供された資料によると、GoogleはMicrosoftとAnthropicも直接ターゲットにしており、定期的なシート料金と個別の製品ライセンスにより、製品の価格が高くなり、柔軟性が低下すると主張している。
Google には規模のメリットもあります。 Google Cloudの顧客の4分の3近くがすでに同社のAI製品を利用しており、Google Cloudの最高経営責任者（CEO）トーマス・クリアン氏はCNBCに対し、これらの顧客は当初の契約額よりも約50％多く支出していると語った。
DeepMind の Demis Hassabis 氏も同様に、その戦略が影響する未来について述べています。ハサビス氏は水曜日のG20イノベーション会議で、ジェミニはより安価な専門モデルやエージェントを調整する汎用層としての役割をますます高める可能性があると語った。その世界では、最高のモデルを持つことと同じくらい、幅広さが重要になる可能性があります。
先月のディープマインドの組織再編以来、ハサビス氏が公の場で話すのを聞くのは初めてだ。この発表の一環として、ハサビス氏はディープマインドのCEOから同部門の会長に異動した。
Googleはサイバーセキュリティのコストも宣伝している。同社によれば、Gemini 3.8 Flash Cyber​​ は、フロンティアレベルのパフォーマンスでソフトウェアの脆弱性を検出してパッチを適用できると同時に、大型モデルよりも大幅に高速かつ手頃な価格で実行できます。
「私たちは、フロンティアレベルのパフォーマンスを発揮しながら、数分の一のコストではるかに速くディフェンダーにサービスを提供できることに本当に興奮しています」とドーシ氏は語った。
これらの機能が悪用される可能性もあるため、Google は当初、新しい Fairwind プログラムを通じて、信頼できる政府および企業の防御者からなる少数のグループへのアクセスを制限しています。
投資家にとってはトレードオフがあります。アルファベットは AI インフラストラクチャに巨額の資金を費やしているため、長期的な利益をもたらすために成長と市場シェアの拡大に期待しています。
バークシャーのアベル氏は水曜日、CNBCのベッキー・クイックに対し、アルファベットはAI分野での勝者とみていると語ったが、その見方の一部は、同社の投資先企業が同社のテクノロジーをどのように利用しているかに基づいている。
「AI をどのように利用しているか、AI がどのようなメリットをもたらしているかについて社内から多くの情報が得られるようになりました。そのため、関心が高まり、Google が重要なプレーヤーであると認識しました」とアベル氏は述べています。
AIにおけるGoogleの立場は一部の市場専門家からは微妙とみられているが、広告ビジネスは好調を維持しており、最新四半期では14％成長した。
この現金エンジンは水曜日にさらに勢いを増した。
司法省のアドテク独占禁止法訴訟を管轄する連邦判事は、GoogleはAdXエクスチェンジを売却する必要はなく、規制当局が求めていた構造的解体ではなく行動的救済を選択するとの判決を下した。この決定は、GoogleにChromeの売却を強制するという要求を裁判官が拒否した昨年の別の独占禁止法判決に続くものである。
シンダー・カンター・ラーナー社のパートナーである独禁法弁護士のワイアット・フォア氏はCNBCに対し、どちらの訴訟でも裁判所が会社分割に反対したことは「重大な出来事」であると語り、グーグルは「後ろ手に縛られることなく」AI競争に臨んでいると付け加えた。
注目: Google の Pixel 11 はスマートフォンの中心に Gemini Intelligence を搭載`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/02/google-starts-september-with-ai-momentum-after-long-losing-streak.html",
    publishedAt: "2026-09-03T03:28:07+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 7,
  },
  {
    id: "iran-attacks-kuwait-as-trump-says-renewe-38caf0e6",
    title: "Iran attacks Kuwait as Trump says renewed Mideast hostilities will not last 'too long'",
    titleJa: "トランプ大統領、中東での新たな敵対関係は「長くは続かない」と発言、イランがクウェートを攻撃",
    summaryJa: "ドナルド・トランプ大統領が米国とイランの新たな敵対関係は「長くは」続かないと述べた翌日、クウェート軍は木曜日、イランからの敵対的なミサイルと無人機攻撃に直面していると発表した。クウェートは住民に対し、治安と安全に関する指示に従うよう勧告し、国内で聞こえた爆発は敵対目標を迎撃する防空システムによるものだと付け加えた。イラン国営メディアＩＲＩＢ通信によると、空爆はクウェートの米軍基地が標的となった。",
    bodyOriginal: `Kuwait's army on Thursday said it was confronting hostile missile and drone attacks from Iran, a day after President Donald Trump said that renewed hostilities between the U.S. and Iran would not last "too long."
Kuwait advised residents to follow security and safety instructions, adding that that any explosions heard in the country were due to air defense systems intercepting hostile targets. The strikes were targeted at U.S. bases in Kuwait, Iranian state media outlet IRIB said.
"I don't think it will [war] be very much longer ... I don't know how much more they [Iran] can take," Trump told reporters on Wednesday, describing the American strikes against Iran on Tuesday as a "very heavy attack," adding that the U.S. was prepared for further military operations "any time we want."
Iran had retaliated after the Tuesday strikes, targeting U.S. regional allies Jordan and Bahrain.
Reuters reported that top aides to Trump were pushing to keep the Iran war from escalating before November's midterm elections. Vice President JD Vance and Secretary of State Marco Rubio are trying to keep the Iran conflict relatively "quiet" until the midterm elections are over.
Citing four people familiar with the discussions, Reuters said this was so as to limit Republican losses due to the conflict, which is proving increasingly unpopular with Americans.
A University of Massachusetts Amherst poll of 1,000 respondents in August found broad disapproval for Trump's handling of the Iran war.
"More than two-thirds of the survey's 1,000 respondents disapprove of the way Trump has handled the war, and nearly as many now express disapproval in how he is handling his job overall," the university said.
Trump also said Wednesday while he was not affected by the midterm elections, but he is going to help the Republican party, which he said "respects the fact that we're not allowing Iran to have a nuclear weapon."
"We're doing that not for any other reason, or at least 99%, we're doing it to help the Middle East, we're doing it to help Israel, and we're doing it to help ourselves," Trump said at a later event in the Rose Garden, referring to the Iran conflict.
— CNBC's Kevin Breuninger contributed to this report.`,
    bodyJa: `ドナルド・トランプ大統領が米国とイランの新たな敵対関係は「長くは」続かないと述べた翌日、クウェート軍は木曜日、イランからの敵対的なミサイルと無人機攻撃に直面していると発表した。
クウェートは住民に対し、治安と安全に関する指示に従うよう勧告し、国内で聞こえた爆発は敵対目標を迎撃する防空システムによるものだと付け加えた。イラン国営メディアＩＲＩＢ通信によると、空爆はクウェートの米軍基地が標的となった。
トランプ大統領は水曜日、記者団に対し、「（戦争が）それほど長くなるとは思わない…彼ら（イラン）がどれだけ耐えられるか分からない」と述べ、火曜日のアメリカの対イラン攻撃を「非常に激しい攻撃」と表現し、アメリカは「いつでも」さらなる軍事作戦を行う準備ができていると付け加えた。
イランは火曜日の攻撃後、米国の地域同盟国であるヨルダンとバーレーンを標的として報復していた。
ロイター通信は、トランプ大統領の側近らが１１月の中間選挙を前にイラン戦争の激化を阻止するよう求めていると報じた。 JD・バンス副大統領とマルコ・ルビオ国務長官は、中間選挙が終わるまでイラン紛争を比較的「静か」に保とうとしている。
ロイター通信は、この議論に詳しい４人の関係者の話として、これは米国民の間で不人気が高まっている紛争による共和党の損失を抑えるためだと述べた。
マサチューセッツ大学アマースト校が8月に1,000人を対象に実施した世論調査では、トランプ大統領のイラン戦争への対応に不支持が広がっていることが判明した。
同大学は、「調査回答者1,000人のうち3分の2以上がトランプ氏の戦争対処法を不支持とし、ほぼ同数が現在、トランプ氏の仕事全般の進め方について不支持を表明している」と述べた。
トランプ大統領も水曜日、中間選挙の影響は受けていないものの、「イランの核兵器保有を認めていないという事実を尊重する」として共和党を支援するつもりだと述べた。
トランプ大統領はその後ローズガーデンで行われたイベントで、イラン紛争について触れ、「われわれは他の理由でそうしたわけではなく、少なくとも99％は中東を助けるためにやっている、イスラエルを助けるためにやっている、そして自分自身を助けるためにやっている」と語った。
— CNBC の Kevin Breuninger がこのレポートに貢献しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/03/us-iran-war-trump-hormuz-israel-middle-east-europe-kuwait.html",
    publishedAt: "2026-09-03T03:21:50+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "almost-half-of-households-do-not-see-ben-f5a7e53c",
    title: "Almost half of households do not see benefits of economic growth, report says",
    titleJa: "報告書によると、世帯のほぼ半数が経済成長の恩恵を感じていない",
    summaryJa: "報告書によると、世帯のほぼ半数が経済成長の恩恵を感じていない- 公開されました",
    bodyOriginal: `Almost half of households do not see benefits of economic growth, report says
- Published
Almost half of people in Britain live in areas where economic growth does not translate into a better quality of life with a "stark" North-South divide in the spending power of households, a new report finds.
Researchers at consultancy firm PwC said every region the north of England, midlands and Wales had a lower spending power than the country's average, with London and the South East comfortably above.
The findings come as Prime Minister Andy Burnham has pledged to tackle the cost of living and regional inequalities in order to boost living standards.
But questions remain over the new PM's economic policies with surges in UK government borrowing costs set to impact public spending choices.
The report released on Thursday said the equivalent of 12.5 million households - 46% - lived in parts of the country where economic growth, often seen through increased business investment and job opportunities, were not leading to better living standards.
It said households in the north east of England had a spending power 6.6% below the national average, equivalent to £1,542 less a year. The north west was £1,493 less, while Yorkshire and the Humber were worst off with spending power down £1,917 comparatively.
Meanwhile, households in the South East were found to have spending power 9% above the national average, worth an additional £2,154 a year, followed by London.
Household spending power is seen as a good measure of whether economic growth is improving living standards.
PwC says it measures this by looking at income after taxes and housing costs, and takes into account the size and makeup of a household - which is aimed at giving a better idea of the money available to meet other expenses.
The UK has seen years of weak growth, although the economy expanded by 1.2% in the first six months of this year, according to official figures.
Most countries want economic growth because it usually means people spend more, extra jobs are created, more tax is paid to the government and workers get better pay rises.
All this together, in theory, leaves people better off - but it takes time for the benefits to be felt, and it does not necessarily benefit everyone. According to PwC, "only a fraction" of a rise in GDP - which a measures economic growth - leads to increased spending power.
Researchers said while there was a clear North-South divide in the spending power of households, there were also such examples of spending power differences within areas deemed better off, such as London and the south east.
For example, Richmond's average annual disposable income was the highest in London at £35,448 - almost double the £18,384 recorded in neighbouring Hammersmith and Fulham.
"The research shows just how differently prosperity is experienced across the UK, with stark variations not only between regions but on each other's doorstep," said Rachel Taylor, government and health industries leader at PwC.
Though spending power in the south of England is impacted by higher housing costs compared to the north, the hit to households on average is softened by higher incomes and the divide remains, researchers said.
Scotland and the south west of England were exceptions to the trend, the report added, because lower housing costs and smaller households meant spending power was slightly above the national average.
The report argued that the next phase of transfering power from central government to local authorities - known as devolution - "must allow local areas to retain more of the revenues generated by local growth alongside more freedom on how best to use resources".
But it said success "should be judged not simply by whether local economies grow, but by whether that growth leads to greater prosperity, wider opportunity and better lives for the people and communities within them".
Devolution has been a central part of Burham's leadership vision so far, with pledges of creating "the conditions for good growth in every postcode".
A government spokesperson said the creation of No10 North was part of its growth mission in order to reshape "how the country is run".
"We have already announced unprecedented financial powers to English mayors so they can receive a share of income tax revenues to boost local economies and improve public services," they added.
However, Conservative leader Kemi Badenoch has said that Burnham's "diagnosis" and "theory of growth is completely wrong".
"He thinks that if government spends more money, we will all get richer - that is not how this works," she said. She has also called the establishment of No10 North a "gimmick".`,
    bodyJa: `報告書によると、世帯のほぼ半数が経済成長の恩恵を感じていない
- 公開されました
英国の人口のほぼ半数が、世帯の消費力における南北の「明らかな」格差があり、経済成長が生活の質の向上につながらない地域に住んでいることが、新たな報告書で明らかになった。
コンサルティング会社PwCの研究者らは、イングランド北部、ミッドランド、ウェールズのどの地域でも購買力が国の平均より低く、ロンドンと南東部は余裕で上回っていると述べた。
この調査結果は、アンディ・バーナム首相が生活水準を向上させるために生活費と地域の不平等に取り組むと約束した中で発表された。
しかし、英国政府の借入コストの高騰が公共支出の選択に影響を与えることが予想されており、新首相の経済政策には疑問が残っている。
木曜日に発表された報告書によると、その46％に相当する1,250万世帯が、企業投資や雇用機会の増加を通じて見られる経済成長が生活水準の向上につながっていない地域に住んでいるという。
同報告書によると、イングランド北東部の世帯の購買力は全国平均より6.6％低く、これは年間1542ポンド少ないことに相当する。北西部は 1,493 ポンド減少し、一方ヨークシャーとハンバーは消費力が 1,917 ポンド減少し、最悪の状況でした。
一方、南東部の世帯の購買力は全国平均を9%上回っており、年間2,154ポンドの追加に相当することが判明し、次にロンドンが続いた。
家計の購買力は、経済成長が生活水準を向上させているかどうかを示す良い尺度とみなされている。
PwCは、税引後の収入と住居費を調べることによってこれを測定し、世帯の規模と構成を考慮していると述べている。これは、他の支出を賄うために利用できるお金をよりよく理解することを目的としている。
公式統計によると、英国は今年上半期に経済が１．２％拡大したものの、ここ数年は低成長が続いている。
ほとんどの国が経済成長を望んでいるのは、通常、人々がより多くの支出をし、追加の雇用が創出され、より多くの税金が政府に支払われ、労働者がより良い昇給を得ることを意味するからです。
これらすべてを総合すると、理論的には人々の生活が良くなりますが、その恩恵が感じられるまでには時間がかかり、必ずしもすべての人に恩恵をもたらすわけではありません。 PwCによると、経済成長の指標となるGDPの上昇の「ほんの一部」が購買力の増加につながるという。
研究者らは、世帯の購買力には明らかな南北格差がある一方、ロンドンや南東部など、より裕福と考えられる地域内でも購買力の差が見られる例があると述べた。
たとえば、リッチモンドの平均年間可処分所得はロンドンで最高の 35,448 ポンドで、隣接するハマースミスやフラムで記録された 18,384 ポンドのほぼ 2 倍です。
PwCの政府・医療業界リーダー、レイチェル・テイラー氏は「今回の調査は、英国全体で繁栄の体験がいかに異なっているかを示している。地域間だけでなく、地域間でも顕著な違いがある」と述べた。
研究者らによると、イングランド南部の購買力は北部に比べて住宅費の高騰の影響を受けているが、平均すると世帯への打撃は収入の増加によって緩和されており、格差は依然として残っているという。
スコットランドとイングランド南西部はこの傾向の例外であり、住宅費の低下と世帯の規模の縮小により消費力が全国平均をわずかに上回ったと報告書は付け加えた。
報告書は、地方分権として知られる中央政府から地方自治体への権力移譲の次の段階では、「資源の最適な利用方法についてより自由な自由とともに、地方の成長によって生み出された歳入を地方がより多く保持できるようにする必要がある」と主張した。
しかし同報告書は、成功は「単に地域経済が成長するかどうかによって判断されるべきではなく、その成長が地域の人々や地域社会のより大きな繁栄、より幅広い機会、より良い生活につながるかどうかによって判断されるべきである」と述べた。
地方分権はこれまでバーハム氏のリーダーシップビジョンの中心部分であり、「あらゆる郵便番号で良好な成長のための条件」を作り出すと約束していた。
政府報道官は、No10 Northの創設は「国の運営方法」を再構築するための成長使命の一部であると述べた。
「われわれはすでに英国の市長に対し、地方経済の活性化と公共サービスの向上に向けて所得税収入の一部を受け取ることができるよう、前例のない財政権限を発表した」と付け加えた。
しかし、保守党指導者のケミ・バデノック氏は、バーナム氏の「診断」と「成長理論は完全に間違っている」と述べた。
「政府がもっとお金を出せば、私たち全員がもっと豊かになれると彼は考えているが、現実はそうではない」と彼女は言う。彼女はまた、No10 Northの設立を「からくり」と呼んだ。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/crerw510gdzo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-02T23:26:58+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/6d15/live/ed462620-a6cd-11f1-b0c9-07afcdd8053c.jpg",
    readTime: 5,
  },
  {
    id: "i-don-t-even-like-them-how-much-should-4d0457dc",
    title: "'I don't even like them': How much should you give to office gift collections?",
    titleJa: "「好きでもない」: オフィスギフトのコレクションにはいくらあげるべきですか?",
    summaryJa: "「好きでもない」: オフィスギフトのコレクションにはいくらあげるべきですか?- 公開されました",
    bodyOriginal: `'I don't even like them': How much should you give to office gift collections?
- Published
Love them, hate them or barely know them, it's a colleague's birthday, wedding or leaving do and there's a collection to mark the occasion.
So how much should you give? And if you're the person organising the collection, how do you chase without feeling like a loan shark or exposing unspoken team dynamics?
'It depends if I like you'
The politics of the office whip-round are so sensitive that everyone the BBC spoke to asked us not to use their real name.
For those on a tight budget, the rule is simple: only give to colleagues you've worked with directly.
Lucy, a senior therapist in healthcare, says: "If we haven't worked together, my purse is staying shut."
There's a blunter unspoken truth beneath the surface. "It also depends on if I like you," she admits.
"One colleague's whole demeanor annoyed me, so when she moved roles, I wanted to celebrate with my own drink - not give her money."
Former music journalist Layla is similar, only contributing if she "really likes" the person.
Yet she often avoids office collections on principle, not personality, disliking how impersonal they can feel.
"I'd rather buy my own gift for someone I care about. I hate having to be forced to contribute to a joint collection out of some rubbish sense of obligation," she says.
How much to give?
The decision to give also comes with a question of how much.
Barker has a decade's worth of experience organising and contributing to various collections at a large multi-national company, where he works in research and production.
He says it's normally the same half a dozen people that contribute generously, irrespective of the person or the occasion.
The average a worker gave to a collection was £11.65 in the first three months of the year, according to analysis of over 5,000 contributions by website GiftRound.
Junior workers can often face the biggest dilemma. Felicity, now mid-career, remembers one horror story from her first job as a teenager.
Working at a car garage aged 17, she was suddenly thrust an envelope to give money for a mechanic who was retiring. The team was small and tight-knit, so everyone was expected to contribute.
"Not only did I not really know anyone at that stage, but I also had no money to give - I was still living at home and being paid hardly anything.
"As it was after lunch, I'd used my notes. In a panic I threw in all the spare change I had left, basically a load of coppers."
She says: "I thought I'd got away with it until the person collecting shouted 'who on earth put in all this change'. Everyone laughed and I couldn't ever admit it was me."
Today, Felicity usually gives between £5 and £10 but goes up to £20 for a close work friend or long-time colleague.
Office politics
Barker says it tends to be rank-and-file workers who contribute most often.
"Surprisingly – to me – they're not some of the best paid people in the department," he explains. "Often those in senior positions don't give".
Those on big wages not paying their way may seem stingy. But the reality from the top can look very different, as former senior civil service veteran Darren explains.
In a leadership position managing over 200 people, many of them contractors, office collections were common as staff churn was frequent.
Darren found the implicit expectation to give as director became overwhelming.
"Eventually I found I just couldn't keep up and would be spending hundreds, often on people I didn't know at all," he says.
As a middle ground, he decided to sign cards and only give money if he'd had direct contact. This stopped him feeling disingenuous and giving resentfully.
But the card-not-cash compromise has become harder as collections move online, with amounts often shown alongside the names of individuals by default.
Of course, these days, alongside emails, there's always the ever-present work WhatsApp group.
Healthcare worker Jeffrey says he's still reeling from seeing staff donations toward the family of a deceased patient being openly listed in the agency chat, individual donation amounts included.
Whether to chase colleagues
Should you chase contributions - and note who's given and who has not?
Lucy believes so.
"I send one email to those who haven't paid, making clear that those who have contributed are not included in the email. You'd be surprised how quickly people reply," she says.
She then gets a more junior colleague to send another, final, chaser on her behalf.
"And yes, I keep a list on paper, too. I don't forget," she adds.
Barker doesn't agree with this stance.
"I don't like to nag," he says. Instead he prefers a single reminder to all that preserves team unity.
Pssst... try these expert tips
Thomas Roubert, professor of organisational psychology and leadership at Oxford University, says:
Prioritise direct colleagues and close relationships: It's generally socially acceptable to limit giving toward wider team members
Do not chase people individually: And do not chase them collectively more than once. Some may be financially struggling
Include a card as an alternative: It costs the contributor nothing and feels like a souvenir for the recipient
The gift should be symbolic: Choose a gift for its individual significance rather than monetary value.`,
    bodyJa: `「好きでもない」: オフィスギフトのコレクションにはいくらあげるべきですか?
- 公開されました
好きでも嫌いでも、ほとんど知らない人でも、同僚の誕生日、結婚式、退職など、その機会を記念するコレクションがあります。
では、どれくらい与えればよいのでしょうか？そして、あなたがコレクションを整理している人なら、高利貸しのような気分になったり、暗黙のチーム力関係を暴露したりせずに、どのようにして追跡することができますか?
「あなたが好きかどうかはそれ次第です」
社内の駆け引きは非常にデリケートなので、BBCが取材した人全員が実名を出さないようにと私たちに頼んだ。
予算が限られている人にとって、ルールは簡単です。直接一緒に仕事をした同僚にのみ贈るのです。
ヘルスケアの上級セラピストであるルーシーは、「私たちが協力しなかったら、私の財布は閉ざされたままです」と言いました。
表面の下には、もっと率直な暗黙の真実が存在します。 「私があなたを好きかどうかにもよります」と彼女は認めます。
「ある同僚の態度全体が私をイライラさせたので、彼女が役割を異動したとき、私は彼女にお金を渡すのではなく、自分の飲み物でお祝いをしたかったのです。」
元音楽ジャーナリストのレイラも同様で、その人が「本当に好き」な場合にのみ投稿します。
しかし、彼女は性格ではなく原則としてオフィスコレクションを避けることが多く、それがいかに非人間的であるかを嫌っています。
「大切な人への贈り物は自分で買うほうがいいのです。くだらない義務感から共同コレクションへの寄付を強制されるのは嫌いです」と彼女は言う。
どれくらいあげますか？
与えるという決定には、どれくらい与えるかという問題も伴います。
Barker は、大規模な多国籍企業で研究と生産に携わり、さまざまなコレクションを組織し、貢献してきた 10 年にわたる経験を持っています。
彼によると、人や機会に関係なく、寛大に寄付してくれるのは通常、同じ6人の人々です。
ウェブサイト GiftRound による 5,000 件以上の寄付の分析によると、今年の最初の 3 か月間で労働者がコレクションに寄付した平均額は 11.65 ポンドでした。
若手社員は多くの場合、最大のジレンマに直面することがあります。現在キャリア半ばのフェリシティは、10代の頃の最初の仕事での恐ろしい話を思い出します。
17 歳で自動車整備工場で働いていた彼女は、退職する整備士にお金を渡すよう突然封筒を突きつけられました。チームは小規模で結束力が強かったため、全員が貢献することが期待されていました。
「その段階では誰も知り合いがいなかっただけでなく、渡すお金もありませんでした。まだ家に住んでいて、ほとんど給料ももらっていませんでした。
「昼食後だったので、メモをとっていました。パニックになって、私は残っていた小銭を全部、要するに銅貨一杯を投げ込みました。」
彼女はこう言います。「回収者が『いったい誰がこんな小銭を入れたんだ』と叫ぶまでは、なんとかなるだろうと思っていました。誰もが笑ったので、それが自分であることを認めることができませんでした。」
現在、フェリシティは通常 5 ポンドから 10 ポンドの間で寄付をしていますが、親しい仕事上の友人や長年の同僚には最大 20 ポンドまで寄付します。
社内政治
バーカー氏は、最も頻繁に貢献するのは一般労働者である傾向があると言う。
「驚いたことに、私にとっては彼らは部門内で最も高給取りの人材ではありませんでした」と彼は説明する。 「上級職にある人は寄付しないことが多い」。
高額な給料をもらっていて自分の給料を支払っていない人は、ケチに見えるかもしれません。しかし、元上級公務員退役軍人のダレン氏が説明するように、上層部から見た現実は大きく異なる可能性がある。
200 人以上の従業員 (その多くは請負業者) を管理する指導的立場にあるため、スタッフの離職が頻繁であったため、オフィスでの徴収が一般的でした。
ダレンは、監督としての暗黙の期待が圧倒的になっていることに気づきました。
「最終的には、ついていけなくなって、まったく知らない人に何百ドルも費やすことになることがわかりました」と彼は言う。
中間案として、彼はカードにサインし、直接接触した場合にのみお金を渡すことにした。これにより、彼は不誠実であると感じたり、憤慨して寄付をしたりするのをやめました。
しかし、コレクションがオンラインに移行するにつれ、デフォルトで個人名の横に金額が表示されるようになり、現金ではなくカードで妥協することはさらに困難になっています。
もちろん、最近では電子メールと並んで、WhatsApp グループが常に存在しています。
医療従事者のジェフリーさんは、亡くなった患者の家族に対するスタッフの寄付が、個人の寄付金額も含めて公然と当局のチャットに掲載されているのを見て、今でも動揺していると語る。
同僚を追いかけるかどうか
寄付を追跡し、誰が寄付し、誰が寄付しなかったかを記録する必要がありますか?
ルーシーはそう信じています。
「私は未払いの人にメールを 1 通送り、寄付した人はメールに含まれていないことを明確にしています。人々がどれほど早く返信するかに驚くでしょう」と彼女は言います。
その後、彼女は年下の同僚に、彼女に代わって別の最後の追跡者を派遣してもらいます。
「はい、私もリストを紙に書いています。忘れません」と彼女は付け加えた。
バーカー氏はこの立場に同意していない。
「私は小言を言うのは好きではありません」と彼は言います。代わりに、彼はチームの団結を保つためのすべてのリマインダーよりも 1 つのリマインダーを好みます。
うーん...これらの専門家のヒントをお試しください
オックスフォード大学の組織心理学とリーダーシップの教授であるトーマス・ルーバート氏は次のように述べています。
直接の同僚と親密な関係を優先する: より幅広いチームメンバーへの寄付を制限することは、一般的に社会的に許容されています
人を個別に追いかけないでください。また、複数回集団で追いかけないでください。経済的に苦しい人もいるかもしれない
代替案としてカードを含めます。投稿者には費用がかからず、受信者へのお土産のように感じられます。
贈り物は象徴的なものであるべきです。金銭的な価値ではなく、その個々の重要性を考慮して贈り物を選びます。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c2el0v48v0xo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-02T23:25:50+00:00",
    category: "自動車",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/cbb4/live/9bba9250-a6f5-11f1-b109-879e35c24276.jpg",
    readTime: 7,
  },
  {
    id: "how-victoria-beckham-turned-her-fashion-c3f57034",
    title: "How Victoria Beckham turned her fashion firm around and made it profitable",
    titleJa: "ヴィクトリア・ベッカムがどのようにしてファッション会社を立て直し、利益を上げたのか",
    summaryJa: "ヴィクトリア・ベッカムがどのようにしてファッション会社を立て直し、利益を上げたのか- 公開されました",
    bodyOriginal: `How Victoria Beckham turned her fashion firm around and made it profitable
- Published
For almost two decades, Lady Victoria Beckham has been trying to prove that she is more than simply Posh Spice. Now, her fashion and beauty business has reached a milestone many doubted it would achieve: profitability.
Victoria Beckham Holdings announced an operating profit of £7.3m for 2025 on sales up 15% to £129.8m.
The company described it as "a significant milestone", adding that growth has continued into this year with another double-digit rise in revenues.
The long road to profit
It has taken Lady Beckham 18 years to shift her business - where she is creative director - into the black.
The former popstar admitted in a Netflix documentary that the company had once been "tens of millions into the red", with "mind-blowing" waste including a flower budget of £70,000 a year.
Lady Beckham spoke of her "panic" as the debt piled-up.
"It's been a hell of a journey. I almost lost everything and that was a dark, dark time," she said. "I used to cry before I went to work every day, because I just felt like a firefighter."
David Belhassen, founder of private equity firm Neo Investment Partners, recalled having to deliver some hard truths when he decided in 2017 to get involved with the business.
"I said 'we have to change everything, restructure the business and that's going to be painful'."
Fashion brands can be notoriously slow to turn a profit. Stacia Bedford, a course leader at the London College of Fashion, said establishing a label can take between three and five years.
"Launching a 'typical' fashion brand is enormously expensive," she said.
"Brands that do make money follow the lean startup method and keep their collections minimal. You need a lot of traction to get the attention of an investor."
The question of investment is a thorny one.
Unlike many new designers, Lady Beckham entered the industry with an international profile and substantial personal resources.
She has spoken publicly about asking husband, David Beckham, for financial help as the label struggled.
But Bedford said that just injecting money is not enough.
"Launching and maintaining a brand takes tremendous tenacity. Even if you can afford to weather the tough years, you need to be resilient enough to withstand everything else that's part of owning a business."
Expanding the brand
From high-end clothing, shoes and handbags, Lady Beckham has diversifed.
In 2019, she launched a beauty range that has become central to the business. It is thought that Victoria Beckham Beauty sales account for around two-thirds of the brand's total revenue.
It is common for cosmetics to be a source of stability for luxury brands, providing higher profit margins and an accessible entry point for consumers.
Famous faces wearing designs from Victoria Beckham's label
1 of 6
In Lady Beckham's case, the range also allowed her to demonstrate an enthusiasm which has become part of the brand's selling point.
During a recent interview with the magazine Women's Wear Daily, she revealed she wear tests all of the products herself and often creates items she wishes she already had in her make-up bag.
It is a strategy that's worked; according to Lady Beckham, the company sells one of its Satin Kajal eyeliners every 30 seconds.
In June, her Foundation Drops product reportedly had a waiting list of 20,000 people.
The woman behind the label
There is another, less tangible ingredient: Lady Beckham herself.
The woman who once seemed almost comically aloof has become increasingly willing to show the person behind the brand. She's been known to post videos demonstrating her beauty products – often with wet hair, seemingly filmed in her bathroom.
Lisa Maynard-Atem, a business strategy adviser, said this has been crucial.
"She hasn't abandoned the polish or aspiration that you expect from a luxury brand, but she has added personality," she said. "That creates connection and people buy into brands emotionally as well as commercially."
Maynard-Atem added that Lady Beckham's openness about the firm's struggles has also helped.
"By acknowledging the losses and some of the mistakes that were made, she makes the eventual turnaround more credible. The failure hasn't been edited out of the story. It has become part of the story," she said.
Luxury fashion remains a competitive business, and one profitable year is no guarantee of future success.
The key is to keep innovating, according to Bedford.
"Success changes with the trends and probably the biggest factor is the creative director," she said.
"Fashion is not an easy industry to enter and certainly not for the faint of heart. The founders who last are the ones who treat setbacks as information to learn and then build from, rather than something to hide."
- Published2 days ago`,
    bodyJa: `ヴィクトリア・ベッカムがどのようにしてファッション会社を立て直し、利益を上げたのか
- 公開されました
約20年にわたり、ヴィクトリア・ベッカム夫人は、自分が単なる高級スパイス以上のものであることを証明しようとしてきました。現在、彼女のファッションと美容のビジネスは、多くの人が達成できるか疑問に思っていたマイルストーン、つまり収益性を達成しました。
ヴィクトリア・ベッカム・ホールディングスは、売上高が15%増の1億2,980万ポンドとなり、2025年の営業利益が730万ポンドになると発表した。
同社はこれを「重要なマイルストーン」と表現し、収益がさらに2桁増加し、今年も成長が続いたと付け加えた。
利益を得るまでの長い道のり
ベッカム夫人は、クリエイティブディレクターを務める自身のビジネスを黒字化するまでに18年かかった。
元ポップスターの彼は、Netflixのドキュメンタリーで、同社がかつては「数千万ドルの赤字」に陥り、年間7万ポンドの花の予算など「驚くべき」無駄遣いをしていたことを認めた。
ベッカム夫人は借金がかさんで「パニック」になったと語った。
「地獄の旅だった。ほとんどすべてを失い、暗い、暗い時期だった」と彼女は語った。 「消防士になったような気分で、毎日仕事に行く前に泣いていました。」
プライベート・エクイティ会社ネオ・インベストメント・パートナーズの創設者デビッド・ベルハッセン氏は、2017年にこの事業に関与することを決意した際、いくつかの厳しい真実を伝えなければならなかったと回想した。
「私は『すべてを変え、事業を再構築しなければならないが、それは苦痛になるだろう』と言いました。」
ファッション ブランドは、利益を上げるのが遅いことで有名です。ロンドン・カレッジ・オブ・ファッションのコースリーダー、ステイシア・ベッドフォード氏は、ブランドの設立には3年から5年かかる可能性があると語った。
「『典型的な』ファッションブランドを立ち上げるには莫大な費用がかかる」と彼女は言う。
「実際に利益を上げているブランドは、リーンスタートアップ手法に従い、コレクションを最小限に抑えています。投資家の注意を引くには、多くの牽引力が必要です。」
投資の問題は厄介です。
多くの新人デザイナーとは異なり、レディ ベッカムは国際的な知名度と豊富な個人リソースを持って業界に参入しました。
彼女はレーベルが苦戦しているため、夫のデヴィッド・ベッカムに経済的援助を求めたことを公に語っている。
しかしベッドフォード氏は、資金を注入するだけでは十分ではないと述べた。
「ブランドを立ち上げて維持するには、途方もない粘り強さが必要です。たとえ厳しい年月を乗り切る余裕があったとしても、ビジネスを所有することに伴う他のすべてのことに耐えられるだけの回復力が必要です。」
ブランドの拡大
高級衣類、靴、ハンドバッグに至るまで、レディ・ベッカムは多様化しています。
2019年に彼女は、ビジネスの中心となった美容製品シリーズを立ち上げた。ヴィクトリア ベッカム ビューティーの売上は、ブランドの総収益の約 3 分の 2 を占めると考えられています。
化粧品が高級ブランドにとって安定の源となるのは一般的であり、より高い利益率と消費者にとってアクセスしやすい入り口を提供します。
ヴィクトリア・ベッカムのレーベルのデザインを着た著名人たち
6 件中 1 件
レディ・ベッカムの場合、この品揃えにより、彼女はブランドのセールスポイントの一部となった熱意を示すことができました。
雑誌『ウィメンズ ウェア デイリー』の最近のインタビューで、彼女はすべての製品を自分で着用テストし、化粧ポーチに入れておきたいと思うアイテムを頻繁に作成していることを明らかにしました。
それはうまくいった戦略です。ベッカム夫人によると、同社はサテン カジャール アイライナーを 30 秒ごとに 1 本販売しているそうです。
6月には、彼女のFoundation Drops製品には2万人の待機リストがあったと伝えられている。
レーベルの背後にある女性
もう一つ、それほど具体的ではない要素があります。それはベッカム夫人自身です。
かつては滑稽なほどよそよそしいように見えたこの女性は、ブランドの背後にある人物を示すことにますます意欲的になりました。彼女は美容製品をデモするビデオを投稿することで知られており、その多くは濡れた髪で、自宅のバスルームで撮影されたものと思われる。
ビジネス戦略アドバイザーのリサ・メイナード・アテム氏は、これは非常に重要だと語った。
「彼女は高級ブランドに期待される洗練さや願望を捨ててはいませんが、個性を加えています」と彼女は語った。 「それによってつながりが生まれ、人々は感情的にも商業的にもブランドを購入するようになります。」
メイナード・アテム氏は、ベッカム夫人が会社の苦境について率直に話してくれたことも助けになったと付け加えた。
「損失と犯したいくつかの間違いを認めることで、彼女は最終的な好転をより信頼できるものにしている。失敗は編集されて物語から除外されていない。それは物語の一部になっている」と彼女は語った。
高級ファッションは依然として競争の激しいビジネスであり、1 年間利益を上げたからといって、将来の成功が保証されるわけではありません。
ベッドフォード氏によれば、鍵となるのは革新を続けることだという。
「成功はトレンドによって変わりますが、おそらく最大の要因はクリエイティブディレクターです」と彼女は言う。
「ファッションは簡単に参入できる業界ではありませんし、気の弱い人には決して向いていません。生き残る創業者は、挫折を隠すものではなく、学び、そこから構築するための情報として扱う人たちです。」
- 2 日前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/articles/cj647xd596xo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-02T23:24:06+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/7a24/live/c8818d00-a6de-11f1-b109-879e35c24276.jpg",
    readTime: 6,
  },
  {
    id: "why-wait-business-grads-buying-firms-to-c0915bac",
    title: "Why wait? Business grads buying firms to install themselves as CEO",
    titleJa: "なぜ待つのですか？経営学部卒業生がCEOに就任するために企業を買収",
    summaryJa: "なぜ待つのですか？経営学部卒業生がCEOに就任するために企業を買収- 公開されました",
    bodyOriginal: `Why wait? Business grads buying firms to install themselves as CEO
- Published
Confined to her hospital bed as she waited for her baby to be induced, Ania Aliev was attempting to finalise a deal to buy a company and put herself in the top job.
"I was answering investors and emailing people, and the investors were yelling at me 'you need to focus on having your child right now!'," says Aliev, who was 27-years-old at the time in late 2023.
A recent MBA (Master of Business Administration) graduate from the prestigious Tuck School of Business at Dartmouth College in New Hampshire, she gave birth to a boy. Just three months later she was owner and CEO of Massachusetts-based medical equipment business Life Support Systems.
It used to be the case that US business course graduates would leave university and typically either join a corporate giant to try to work their way to the top, or else form their own start-up.
But some, impatient to be the boss of an established firm, are instead now borrowing hundreds of thousands of dollars to buy such a business and install themselves as the boss.
Is such entrepreneurial go-getting to be applauded, or is it excessive youthful chutzpah? And how do the employees react when a 20-something with little experience suddenly turns up to order them about?
Aliev, who had worked in finance before doing her MBA, was wary of first impressions at the firm.
"If you judge a book by its cover, it's very easy to be like 'oh, young girl, Wall Street background, coming in here and telling me what to do'… I was really conscious about that," she says. "And I really didn't want to come off that way to my team."
Aliev says her approach was initially to just observe and learn. "Not coming in and telling them 'this is how things are going to be'."
The practice of a young entrepreneur borrowing money to buy a company and become its boss is known as entrepreneurship by acquisition or "search-fund investing".
The would-be business owner sets up a fund, called a search fund, and aims to attract money from both institutional investors and wealthy individuals.
At the last count, in 2023, a record 94 search funds, external were found to have been launched that year in the US, with $682m (£505m) said to have been invested in funds and the companies they bought across 2022 and 2023.
In turn, there are now investment companies in the US that specialise in backing young entrepreneurs and their search funds, such as Search Fund Partners, Aspect Investors and Anacapa Partners.
They are attracted by reported high rates of return. For while some people may question the wisdom of putting a 20-something in charge of an established business, a report by Yale School of Management found that "juicy returns by any standard", external are available, and funds generally "remained relatively stable".
For existing business owners, selling to a younger entrepreneur is a chance to move on and perhaps retire. For would-be company leaders the aim is to grow the business for perhaps five to 10 years, before selling at a profit.
Now more than two years since taking over at Life Support Systems, and 30-years-old, Aliev has led the takeover of a competitor, which she says has doubled the size of the business.
She says that this focus on growth has been welcomed by most employees. One, Meaghan Richardson, says: "It can be a little bit challenging sometimes for those of us who have been here a long time... but it's been really great since she's come in because she's just turned a lot of stuff around, which is really exciting."
But not everyone has been happy with Aliev's new approach. Some workers have left and she has made others redundant as "they just didn't want to work in a growth company".
Elsewhere, entrepreneurship by acquisition can end in failure.
Scott Duncan, who gained his MBA from Harvard Business School, was back in 2018 seeking an established business to acquire and run. He secured investment to buy F&M Tool and Die, a company in Massachusetts that makes industrial parts.
It looked great on paper, and seemed to be a strong fit given his previous work in engineering.
Aged 31 when he took over the company, he said his first day was "terrifying". "All of the employees had been doing this for decades. I was this newcomer and I had really no idea what was going on. So, they were really perplexed by me as well."
Very quickly, things started to unravel in what would be a seven-year struggle to keep the business afloat.
Skilled employees left the business, including one who started a low-cost competitor and took an important customer with him. Others proved resistant to change, and Duncan realised it would be impossible to fill the previous owner's shoes.
"This whole organisation had built up around him, his personality," he says. "I bought a business that was very difficult for anyone except for that guy to run."
After this difficult start, the Covid pandemic, the rise of cheaper Chinese competition and even a flooded workshop were among challenges in a battle for survival that lasted until 2025. Duncan describes it as "death by a thousand cuts".
In February last year, he was left with little choice but to shut the business down. "I brought everybody into the conference room. I had to grab a chair and sit down in it because I was physically unable to stand. I thought I was going to pass out, but all the employees came in and I said, 'we're shutting the doors'."
Duncan, now a 39-year-old husband and father of two daughters, also had to file for personal bankruptcy. "I was a shell of a human being," he says.
Despite his experiences, Duncan – who has since found work as a consultant – isn't against the idea of young people raising money to take on firms from older owners.
But he does urge caution for "starry-eyed MBAs" who think they're immune from the risks of failure. "It's really, really hard, even when things are going well," he says.
Leadership coach and business psychologist Jacqueline Ackerman says that workforces generally don't object to a young person taking over because of their age.
"I don't think people actually resist youth. I think they resist uncertainty," says Ackerman, who is managing partner of Chicago-based Vantage Leadership Consulting. "A lot of times people would associate younger leaders with a lot of change."
Back at Life Support Systems, Aliev says that working life is much better than if she had remained in finance. "I knew I didn't want to do banking… I just was so unfulfilled by it."
Read more global business stories
- Published6 August
- Published6 days ago`,
    bodyJa: `なぜ待つのですか？経営学部卒業生がCEOに就任するために企業を買収
- 公開されました
アニア・アリエフさんは、病院のベッドに座って出産を待ち、会社を買収してトップの職に就く契約をまとめようとしていた。
「私は投資家に答えたり、人々にメールを送ったりしていましたが、投資家たちは私に『今は子供を産むことに集中しなければならない！』と怒鳴っていました」と、2023年末、当時27歳だったアリエフさんは語る。
ニューハンプシャー州ダートマス大学の名門タック・スクール・オブ・ビジネスを最近MBA（経営管理修士）を取得した彼女は、男の子を出産した。わずか 3 か月後、彼女はマサチューセッツ州に本拠を置く医療機器ビジネス Life Support Systems のオーナー兼 CEO になりました。
以前は、米国のビジネスコースの卒業生は大学を卒業し、トップに上り詰めるために巨大企業に入社するか、あるいは自分で起業するかのどちらかが一般的でした。
しかし、一部の人々は、確立された企業の社長になりたくて、代わりに数十万ドルを借りてそのような企業を買収し、自分自身を社長に据えようとしています。
このような起業家精神にあふれた行動は称賛されるべきものなのでしょうか、それとも若気の至りの行き過ぎなのでしょうか？そして、経験の浅い20代の人が突然現れて命令をしてきたとき、従業員はどう反応するのでしょうか？
MBAを取得する前は金融業界で働いていたアリエフ氏は、会社での第一印象には慎重だった。
「本を表紙で判断すると、『ああ、ウォール街出身の若い子がここに来て、私に何をすべきか教えてくれる』という気持ちになりがちです…私はそれを本当に意識していました」と彼女は言う。 「そして、私はチームにそのような形で別れたくありませんでした。」
アリエフさんは、最初はただ観察して学ぶというアプローチだったと言います。 「現場に入ってきて、『物事はこうなる』と伝えることはありません。」
若い起業家がお金を借りて会社を買収し、その社長になる行為は、買収による起業家精神または「サーチファンド投資」として知られています。
経営者志望者はサーチファンドと呼ばれる基金を設立し、機関投資家と富裕層の両方から資金を呼び込むことを目指している。
2023年の最後の集計では、同年米国で過去最高となる94の外部探索ファンドが立ち上げられたことが判明し、2022年から2023年にかけてファンドと買収した企業に6億8,200万ドル（5億500万ポンド）が投資されたと言われている。
一方、米国には現在、サーチ・ファンド・パートナーズ、アスペクト・インベスターズ、アナカパ・パートナーズなど、若い起業家とそのサーチ・ファンドの支援を専門とする投資会社が存在している。
彼らは報告されている高い収益率に惹かれています。なぜなら、20代の若者に確立されたビジネスの責任者を任すことの賢明さに疑問を抱く人もいるかもしれないが、イェール大学経営大学院の報告書によると、「どの基準から見ても素晴らしい利益」が得られ、外部からの資金も利用可能であり、資金は概して「比較的安定している」という。
既存の事業主にとって、若い起業家に売却することは、次のステップに進むチャンスであり、場合によっては引退するチャンスでもあります。企業のリーダー志望者にとっての目標は、利益を出して売却する前に、おそらく 5 ～ 10 年間ビジネスを成長させることです。
Life Support Systems を引き継いでから 2 年以上が経過し、30 歳になった Aliev 氏は競合他社の買収を主導し、これによりビジネスの規模が 2 倍になったと彼女は述べています。
成長を重視するこの姿勢は、ほとんどの従業員に歓迎されていると彼女は言います。その一人、メーガン・リチャードソンはこう語る。「ここに長くいる私たちにとっては、時々少し難しいこともあるかもしれない…でも、彼女が来てからは本当に素晴らしいことだ。だって、彼女はたくさんのことを好転させてくれたばかりだから、本当にエキサイティングだよ。」
しかし、誰もがアリエフの新しいアプローチに満足しているわけではない。退職する従業員もおり、彼女は「成長企業で働きたくないだけ」という理由で他の従業員を解雇した。
他の地域では、買収による起業家精神が失敗に終わる可能性があります。
ハーバード ビジネス スクールで MBA を取得したスコット ダンカン氏は、2018 年に戻って、買収して運営する確立されたビジネスを探していました。彼はマサチューセッツ州にある工業用部品を製造する会社、F&M Tool and Die を買収するための投資を確保した。
紙の上では素晴らしく見え、エンジニアリングにおける彼のこれまでの仕事を考慮すると、非常に適しているように思えました。
31歳で会社を引き継いだ彼は、初日は「恐ろしかった」と語った。 「従業員は全員、何十年もこの仕事をしていました。私は新参者で、何が起こっているのか全く分かりませんでした。ですから、従業員も私に本当に当惑していました。」
事業を存続させるための7年間にわたる闘いの中で、非常に急速に事態が解決し始めました。
熟練した従業員は事業を去り、その中には低価格の競合他社を立ち上げ、重要な顧客を連れて行った従業員も含まれていました。他の人は変化に抵抗することが判明し、ダンカンは前の所有者の地位を埋めるのは不可能であることに気づきました。
「この組織全体が彼と彼の個性を中心に構築されてきました」と彼は言う。 「私が買収したビジネスは、その男以外には経営が非常に困難でした。」
この困難なスタートを経て、新型コロナウイルスのパンデミック、安価な中国製競合の台頭、さらには浸水した工場さえも、2025年まで続く生き残りを賭けた戦いの課題となった。ダンカン氏はそれを「千の斬りによる死」と表現する。
昨年2月、彼は事業を閉鎖する以外に選択肢がほとんどなくなった。 「私は全員を会議室に連れて行きました。身体的に立っていられなかったので、椅子をつかんで座らなければなりませんでした。気を失うかと思いましたが、従業員全員が入ってきたので、私は『ドアを閉めます』と言いました。」
現在39歳の夫で2人の娘の父親でもあるダンカンさんも自己破産を申請しなければならなかった。 「私は人間の抜け殻だった」と彼は言う。
その経験にもかかわらず、ダンカン氏（その後コンサルタントとしての仕事を見つけた）は、若者が資金を集めて年配のオーナーから会社を引き継ぐという考えに反対していない。
しかし同氏は、自分には失敗のリスクがないと考えている「目の覚めるようなMBA」に注意を促している。 「たとえ物事がうまくいっているときでも、それは本当に本当に難しいことです」と彼は言います。
リーダーシップコーチでビジネス心理学者のジャクリーン・アッカーマン氏は、一般的に従業員は年齢を理由に若者が引き継ぐことに反対しないと語る。
シカゴに本拠を置くヴァンテージ・リーダーシップ・コンサルティングのマネージング・パートナーであるアッカーマン氏は、「人々は実際に若さに抵抗しているとは思わない。彼らは不確実性に抵抗しているのだと思う」と語る。 「多くの場合、人々は若いリーダーというと多くの変化を連想します。」
Life Support Systems に戻った Aliev さんは、金融業界に留まっていた場合よりも、労働生活がはるかに良くなったと語ります。 「銀行業務はやりたくないのは分かっていました…ただ、銀行業務にとても満足していませんでした。」
グローバル ビジネス ストーリーをもっと読む
- 8 月 6 日発行
- 6 日前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/czxqpqrzq01o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-02T23:13:44+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/5f4f/live/a480d880-a520-11f1-960d-bf7772625996.png",
    readTime: 8,
  },
  {
    id: "b-q-and-five-guys-among-firms-that-paid-0bf8ccd5",
    title: "B&Q and Five Guys among firms that paid staff below minimum wage",
    titleJa: "従業員に最低賃金以下の賃金を支払った企業としては、B&Q と Five Guys が挙げられる",
    summaryJa: "従業員に最低賃金以下の賃金を支払った企業としては、B&Q と Five Guys が挙げられる- 公開されました",
    bodyOriginal: `B&Q and Five Guys among firms that paid staff below minimum wage
- Published
DIY store B&Q and the fast food chain Five Guys are among hundreds of UK businesses named by the government for paying staff below the minimum wage.
More than 600 employers were ordered to pay affected workers the outstanding wages, with £4m returned to workers, according to the Department for Business and Trade.
The firms have also been issued penalties worth £7m.
B&Q said the underpayments were unintentional and the result of calculations involving geographical allowances, while Five Guys blamed "technical differences in how payroll regulations were applied".
The list of 658 businesses includes shops, restaurants, nurseries, social care providers and a handful of NHS trusts. The government did not say over what time period the underpayments spanned.
Minimum wage is £12.71 for staff aged 21 and over. For 18 to 20 year olds the rate is £10.85, and for under 18s and apprentices it is £8.
B&Q underpaid 4,530 workers a total of more than £456,000, according to the government.
B&Q said in response: "The shortfalls in payments were unintentional. They relate to calculations involving geographical allowances which are paid in addition to minimum hourly rates. All affected colleagues were quickly paid in full in July 2025."
Five Guys, named in the list as owing over £54,000 to 3,699 staff, said "technical differences in how payroll regulations were applied" led to its underpayments, which were identified in a review by the HMRC, the UK's revenue and tax authority.
"We worked closely and transparently with HMRC throughout the process and have made all required payments to affected current and former employees," the company said.
St George's, Epsom and St Helier Hospital Group failed to pay over £123,000 to 75 workers, according to the list, which also says St George's University Hospitals in Wandsworth, London, underpaid 55 workers.
A spokesman for the two hospital trusts said that "no colleagues were underpaid".
"This relates to a technical compliance issue where part of their salary for a non tax-deductable 'salary sacrifice' (for example, towards childcare) was not counted towards the national minimum wage, even though their gross salary was above the national minimum wage," he said.
A spokesperson said apprentices at Norfolk Community Health and Care NHS Trust were inadvertently underpaid between 2019 and 2023.
They said while their pay met the requirements for their contracted hours, meetings, handovers and time spent changing into uniform hadn't been accounted for, adding the trust has since changed policies and practices.
The other trust named has been contacted for comment.
There were also several nursing homes on the list, and multiple childcare providers.
Business Secretary Jonathan Reynolds said the government was determined to stamp out the practice of "short-changing your staff".
"The best businesses know that looking after your workers isn't just the right thing to do, it's the smart thing to do," he said.
Kate Dearden, minister for the future of work, said: "Underpaying your staff is illegal, and we will not let workers foot the bill for their boss failing to follow the rules."
"Every employer should check their payroll now and reach out to Acas if they need further support," she added.
The first 10 employers on the government's list, which was sorted by the amount of wages not paid, are:
1. B&Q Ltd, failed to pay £456,934.72 to 4,530 workers.
2. Elysium Healthcare Holdings 3 Ltd, Borehamwood, failed to pay £330,048.81 to 1,095 workers.
3. St George's, Epsom and St Helier Hospital Group, failed to pay £123,331.97 to 75 workers.
4. Support Staff Services Limited, Slough, failed to pay £119,715.13 to 323 workers.
5. Forest Holidays Ltd, Moira, failed to pay £100,308.68 to 598 workers.
6. St George's University Hospitals NHS Foundation Trust, London (Wandsworth), failed to pay £77,498.91 to 55 workers.
7. Lanes Group Limited, Leeds, failed to pay £67,893.34 to 297 workers.
8. UK Care Team Ltd, Leicester, LE19, failed to pay £67,082.76 to 99 workers.
9. Five Guys JV Limited, London (Royal Borough of Kensington and Chelsea), failed to pay £54,642.47 to 3,699 workers.
10. Merlin Cinemas Limited, Redruth, failed to pay £50,198.75 to 181 workers.
The list marks the first "naming round" since the Fair Work Agency was set up in April under the Employment Rights Act.
As well as enforcing the minimum wage, the agency also will soon tackle practices of denying workers holiday and sick pay.
Chair of the agency's advisory board, Matthew Taylor, said naming employers which underpay staff was an important reminder that "paying the minimum wage is not optional - it is the law".
He said: "Most employers want to do the right thing, and we will support them to comply, but those who fall short should expect robust enforcement to protect workers and maintain a fair playing field for responsible businesses."`,
    bodyJa: `従業員に最低賃金以下の賃金を支払った企業としては、B&Q と Five Guys が挙げられる
- 公開されました
DIY ストアの B&Q とファストフード チェーンのファイブ ガイズは、スタッフに最低賃金を下回る賃金を支払っているとして政府によって指名された英国の数百の企業の 1 つです。
商工省によると、600社以上の雇用主が影響を受けた労働者に未払いの賃金を支払うよう命じられ、400万ポンドが労働者に返還されたという。
両企業には700万ポンド相当の罰金も科せられた。
B&Q社は過少支給は意図的ではなく、地理的手当を考慮した計算の結果であると述べたが、ファイブ・ガイズ社は「給与規制の適用方法における技術的な違い」を非難した。
658 の企業のリストには、店舗、レストラン、保育園、社会福祉提供者、少数の NHS トラストが含まれています。政府は、不足額がどのくらいの期間にわたって発生したかについては明らかにしていない。
21 歳以上のスタッフの最低賃金は £12.71 です。 18 歳から 20 歳までの料金は £10.85、18 歳未満および見習いの場合は £8 です。
政府によると、B&Qは4,530人の労働者に総額45万6,000ポンド以上の賃金を下回っていた。
B&Qはこれに対し、「支払い不足は意図的ではなかった。これらは最低時給に加えて支払われる地理的手当を含む計算に関連している。影響を受けた同僚全員には、2025年7月に速やかに全額が支払われた」と述べた。
リストに名を連ねたファイブ・ガイズは、従業員3,699人に対して5万4,000ポンド以上の借金をしており、「給与規定の適用方法における技術的な違い」が過小支給の原因となり、英国の歳入・税務当局であるHMRCの調査でそれが判明したと述べた。
同社は「当社はプロセス全体を通じてHMRCと緊密かつ透明性を持って協力し、影響を受けた現従業員と元従業員に必要な支払いをすべて行った」と述べた。
リストによると、セントジョージズ、エプソム、セントヘリア病院グループは75人の職員に12万3000ポンド以上の支払いを怠っており、ロンドンのワンズワースにあるセントジョージズ大学病院も55人の職員に賃金が不足しているとしている。
２つの病院トラストの広報担当者は、「同僚に低賃金の者はいなかった」と述べた。
同氏は、「これは、彼らの総給与が全国最低賃金を上回っていたにもかかわらず、税控除の対象外の『給与犠牲』（例えば育児など）の給与の一部が全国最低賃金にカウントされなかったという技術的コンプライアンスの問題に関連している」と述べた。
広報担当者は、ノーフォーク・コミュニティ・ヘルス・アンド・ケアNHSトラストの実習生は、2019年から2023年にかけて不注意で低賃金を受けていたと述べた。
彼らは、給与は契約時間の要件を満たしているものの、会議や引き継ぎ、制服に着替えるのに費やした時間が考慮されていなかったと述べ、その後、信託は方針や慣行を変更したと付け加えた。
名前が挙がったもう一方の信託にはコメントを求められている。
リストにはいくつかの老人ホームと複数の保育士も含まれていた。
ジョナサン・レイノルズ商務長官は、政府は「人材不足」の慣行を根絶する決意であると述べた。
「優秀な企業は、従業員の世話をすることが正しいことであるだけでなく、賢明なことであることを知っています。」と彼は言いました。
未来労働大臣のケイト・ディアデン氏は、「従業員の賃金を下回るのは違法であり、ルールを守らなかった上司のツケを労働者に負わせるつもりはない」と述べた。
「すべての雇用主は今すぐ給与明細を確認し、さらなるサポートが必要な場合はAcasに連絡すべきです」と彼女は付け加えた。
未払い賃金の額順に分類された政府のリストの最初の10社は以下の通り。
1. B&Q Ltd、従業員 4,530 人に 456,934.72 ポンドを支払わなかった。
2. ボアハムウッドの Elysium Healthcare Holdings 3 Ltd は、従業員 1,095 人に 330,048.81 ポンドを支払わなかった。
3. セントジョージズ、エプソム、セントヘリア病院グループは、75人の従業員に123,331.97ポンドを支払わなかった。
4. スラウのサポート・スタッフ・サービス・リミテッドは、従業員 323 人に 119,715.13 ポンドを支払わなかった。
5. モイラの Forest Holidays Ltd は、598 人の労働者に 100,308.68 ポンドを支払わなかった。
6. ロンドン（ワンズワース）のセントジョージ大学病院NHS財団トラストは、55人の従業員に77,498.91ポンドを支払わなかった。
7. リーズのレーンズ・グループ・リミテッドは、297 人の労働者に 67,893.34 ポンドを支払わなかった。
8. LE19、レスターの UK Care Team Ltd は、99 人の労働者に £67,082.76 を支払わなかった。
9. ロンドンのファイブ・ガイズJVリミテッド（ケンジントン・チェルシー王立特別区）は、3,699人の労働者に54,642.47ポンドを支払わなかった。
10. レッドラスのマーリン・シネマズ・リミテッドは、従業員181人に5万198.75ポンドを支払わなかった。
このリストは、雇用権法に基づいてフェアワーク庁が4月に設立されて以来、初の「指名ラウンド」となる。
同庁は最低賃金を強制するだけでなく、労働者の休暇や傷病手当の支給を拒否する慣行にも間もなく取り組む予定だ。
同庁の諮問委員会のマシュー・テイラー委員長は、従業員に賃金を下回る雇用主を名指しすることは「最低賃金の支払いは任意ではなく、法律である」ことを思い出させる重要なものだと述べた。
同氏は、「ほとんどの雇用主は正しいことを望んでおり、我々は彼らが遵守するよう支援するが、それに従わない企業は労働者を保護し、責任ある企業の公正な競争条件を維持するための強力な執行を期待すべきだ」と述べた。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c39mv4vm7exo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-02T23:08:05+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/1d32/live/de8a8700-a6e8-11f1-b109-879e35c24276.png",
    readTime: 6,
  },
  {
    id: "nba-suspends-clippers-owner-ballmer-for-fc93b56a",
    title: "NBA suspends Clippers owner Ballmer for one year in Kawhi Leonard salary cap probe",
    titleJa: "NBA、カワイ・レナードのサラリーキャップ疑惑でクリッパーズのオーナー・バルマー氏に1年間の出場停止処分",
    summaryJa: "NBAはまた、ロサンゼルス・クリッパーズに3,000万ドルの罰金を科し、チームは2029年からのドラフトで毎年1つずつ、計5つの1巡目指名権を剥奪されると発表した。",
    bodyOriginal: `The NBA on Wednesday said it had suspended Los Angeles Clippers owner Steve Ballmer for one year as part of a broad array of sanctions on the basketball team and its executives for violating the league's salary cap circumvention rules related to star player Kawhi Leonard.
The NBA said that Leonard "violated the circumvention rules by pressuring the Clippers to assist him in obtaining off-court income opportunities, successfully obtaining those opportunities, and failing to reimburse payments by the Clippers for personal expenses." Leonard was ordered to pay the league $700,000 in connection with his violations.
Ballmer "knowingly" sought to help Leonard obtain off-court income opportunities, and approved a business deal that "that he knew was a precondition for Aspiration to enter into an endorsement agreement with Mr. Leonard, and for his failure to create conditions under which his organization abided by the NBA's circumvention rules," the NBA said.
As part of the sanctions issued Wednesday, the Clippers were fined $30 million and "shall forfeit five first-round draft picks, one in each of the 2029, 2030, 2031, 2032, and 2033 NBA Drafts," the league said.
In addition to Ballmer's suspension, "Clippers President of Business Operations Gillian Zucker is suspended without pay for one year for being primarily and directly culpable for the impermissible endorsement arrangements and for providing false and misleading statements to investigators," the league said.
Clippers President of Basketball Operations Lawrence Frank was suspended without pay for six months for his involvement with "impermissible endorsement arrangements and for approving impermissible expenses incurred by Mr. Leonard and his family," the NBA said.
This is breaking news. Please refresh for updates.`,
    bodyJa: `NBAは水曜日、スター選手カワイ・レナードに関連したリーグのサラリーキャップ回避規定に違反したバスケットボールチームとその幹部に対する広範な制裁の一環として、ロサンゼルス・クリッパーズのオーナー、スティーブ・バルマー氏を1年間の出場停止処分にしたと発表した。
NBAは、レナードが「クリッパーズに対しコート外での収入機会の獲得を支援するよう圧力をかけ、それらの機会を首尾よく獲得し、クリッパーズによる個人的費用の支払いを返済しなかったことにより、回避規則に違反した」と述べた。レナードは違反行為に関連してリーグに70万ドルの支払いを命じられた。
バルマー氏は「承知の上で」レナード氏がコート外で収入を得られるよう支援しようとし、「アスピレーション社がレナード氏との推薦契約を結ぶための前提条件であること、そしてバルマー氏がNBAの回避規則を遵守する条件をバルマー氏が作り出すことができなかったことを認識していた」商取引を承認したとNBAは発表した。
水曜日に出された制裁の一環として、クリッパーズには3,000万ドルの罰金が科せられ、「2029年、2030年、2031年、2032年、2033年のNBAドラフトでそれぞれ1つずつ、計5つのドラフト1巡目指名権を剥奪される」とリーグは発表した。
バルマー氏の出場停止処分に加え、「クリッパーズの事業運営部門社長のジリアン・ザッカー氏は、許容されない承認取り決めと捜査官に虚偽で誤解を招く供述を行ったことに主として直接の責任があるとして、１年間の無給出場停止処分を受ける」とリーグは発表した。
NBAは、クリッパーズのバスケットボール運営部門のローレンス・フランク社長が、「容認できないスポンサー契約への関与と、レナード氏とその家族が負担した容認できない出費を承認したこと」により、6か月の無給停職処分を受けたと発表した。
これは速報です。更新を確認するには更新してください。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/02/nba-suspends-clippers-ballmer-kawhi-leonard-salary-cap.html",
    publishedAt: "2026-09-02T20:54:39+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "ustr-s-greer-huddles-with-house-republic-f7721694",
    title: "USTR's Greer huddles with House Republicans amid Trump trade spats",
    titleJa: "USTRのグリア氏、トランプ大統領の貿易摩擦のさなか、下院共和党議員と密会",
    summaryJa: "ドナルド・トランプ大統領によるカナダとの貿易戦争や牛肉輸入計画に議員らが動揺するなか、ジェイミソン・グリア通商代表は水曜日、下院共和党議員らと集まりました。ラルフ・ノーマン下院議員（共和党、サウスカロライナ州）は会議を終えた後、「良い議論、活発な議論だった」と述べ、議員らは「関税やカナダに対する懸念を表明していた」と述べた。",
    bodyOriginal: `U.S. Trade Representative Jamieson Greer huddled with House Republicans on Wednesday as lawmakers reel from President Donald Trump's trade war with Canada and plans to import beef.
"It was a good discussion, a lively discussion," Rep. Ralph Norman, R-S.C., said after exiting the meeting, saying lawmakers were "expressing their concerns about the tariffs, about Canada."
"It's not good, but I think they'll come to a conclusion on it. I think it'll be a meaningful result on this, and it may take some time; everybody's aware about the midterms, everybody knows about the timeline," he said, asked about potential escalation in the trade war with Canada.
Greer's visit to Capitol Hill comes as Trump's whipsawing tariff agenda creates new vulnerabilities for Republicans on the campaign trail. An escalating tit-for-tat tariff battle with Canada could harm businesses and consumers in northern border states. Meanwhile, Trump's plan to lower tariffs on 300,000 metric tons of imported beef caused an uproar among cattle ranchers, who have long been allies of the president.
Republicans are trying to defend their narrow majorities in the House and Senate while voters register discontent with the cost of living, according to public polling.
"Most of the questions were regional," said Rep. Tim Burchett, R-Tenn. "I'm confident this administration is working towards resolving a lot of the problems we have, but everybody knows it's affordability."
Asked whether there are any talks ongoing with Canada, Burchett said: "It doesn't sound like there are any right now."
Most Republicans who attended the meeting sought to put the ball in Canada's court to de-escalate the trade war, consistent with the White House's messaging.
Commerce Secretary Howard Lutnick said on CNBC on Wednesday that Ottawa is "trying to blow it up for these political reasons."
"You're watching them play politics in Canada, and they're just using us, and it's really embarrassing," Lutnick said.
Canadian Prime Minister Mark Carney on Tuesday blamed the Trump administration for the talks breaking down, saying the White House has been "doing memes" and "throwing shade" against his nation amid the growing trade war.
The U.S. slapped 50% tariffs on a bevy of goods in late August after trade talks broke down. Canada has since retaliated with its own tariffs. The Canadians accused the U.S. of making unreasonable demands, and the U.S. said Canada asked for changes at the last minute before the deal was to take effect.
"The United States of America gave them the best possible deal," Rep. Brian Mast, R-Fla., chair of the House Foreign Affairs Committee, said of Canada after the Greer meeting. "The opportunity sits for them to come to the table."`,
    bodyJa: `ドナルド・トランプ大統領によるカナダとの貿易戦争や牛肉輸入計画に議員らが動揺するなか、ジェイミソン・グリア通商代表は水曜日、下院共和党議員らと集まりました。
ラルフ・ノーマン下院議員（共和党、サウスカロライナ州）は会議を終えた後、「良い議論、活発な議論だった」と述べ、議員らは「関税やカナダに対する懸念を表明していた」と述べた。
同氏はカナダとの貿易戦争激化の可能性について質問し、「良くはないが、彼らはこの件について結論を出すだろう。この件に関しては有意義な結果になると思うが、時間がかかるかもしれない。中間選挙については誰もが知っており、タイムラインについては誰もが知っている」と述べた。
グリア氏の国会議事堂訪問は、トランプ氏の鞭打ち関税政策が選挙活動中の共和党員に新たな脆弱性を生み出している中で行われた。カナダとの報復関税合戦が激化すれば、北部国境州の企業や消費者に損害を与える可能性がある。一方、30万トンの輸入牛肉に対する関税を引き下げるというトランプ大統領の計画は、大統領の長年の同盟国である畜産農家の間で騒動を引き起こした。
世論調査によると、有権者が生活費に不満を示す中、共和党は上下両院で僅差の多数派を守ろうとしている。
「質問のほとんどは地域に関するものだった」とティム・バーチェット下院議員（共和党、テネシー州）は語った。 「現政権が我々が抱えている多くの問題の解決に取り組んでいると確信しているが、それが手頃な価格であることは誰もが知っている。」
バーチェット氏は、カナダと何らかの協議が進行しているかとの質問に対し、「現時点では協議が行われていないように見える」と述べた。
会合に出席した共和党議員の大半は、ホワイトハウスのメッセージと一致して、貿易戦争の沈静化に向けてカナダの法廷にボールを置こうとした。
ハワード・ラトニック商務長官は水曜日、CNBCで、オタワは「政治的理由でそれを爆破しようとしている」と述べた。
「カナダで彼らが政治活動をしているのを見ていると、彼らはただ私たちを利用しているだけだ。それは本当に恥ずかしいことだ」とラトニック氏は語った。
カナダのマーク・カーニー首相は火曜日、貿易戦争が激化する中、ホワイトハウスが自国に対して「ミームを行って」「日陰を投げかけている」と述べ、交渉決裂の責任はトランプ政権にあると非難した。
米国は通商交渉決裂後、8月下旬に一連の製品に50％の関税を課した。その後、カナダは独自の関税で報復した。カナダ側は米国が不当な要求をしたと非難し、米国はカナダが合意発効直前になって変更を求めたと述べた。
下院外交委員会委員長のブライアン・マスト下院議員（共和党、フロリダ州）はグリア会談後、カナダについて「米国は可能な限り最善の合意を提示した」と述べた。 「彼らがテーブルに着くチャンスが到来している。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/02/greer-trade-house-republicans-trump.html",
    publishedAt: "2026-09-02T20:50:51+00:00",
    category: "貿易",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
    readTime: 3,
  },
  {
    id: "microsoft-to-start-disclosing-azure-quar-0c8b29bc",
    title: "Microsoft to start disclosing Azure quarterly revenue as company consolidates business units",
    titleJa: "Microsoft、事業部門の統合に伴いAzureの四半期収益の開示を開始",
    summaryJa: "Microsoftは、Azureクラウド事業の四半期収益の開示を初めて開始し、アマゾン ウェブ サービスやグーグルのクラウドプラットフォームと競合する同社の事業のより明確な全体像を投資家に提供する。水曜日のプレゼンテーションで発表されたこの変更は、Microsoftの営業セグメントを3つから2つに削減することによる、報告構造の広範な変更の一環である。以前の体制は 2015 年から実施されていました。",
    bodyOriginal: `Microsoft will start disclosing quarterly revenue for its Azure cloud business for the first time, providing investors with a clearer picture of its business that competes with Amazon Web Services and Google's cloud platform.
The change, announced in a presentation on Wednesday, is part of a broader shift in Microsoft's reporting structure, as the company trims its operating segments from three to two. The prior structure had been in place since 2015.
Microsoft's Azure unit has been a major beneficiary of the artificial intelligence boom, as customers turn to major cloud infrastructure platforms for access to the AI models needed to develop new agents and other tools. Analysts at Stifel estimated in July that about half of Azure's revenue growth in the 2026 fiscal year came from OpenAI, while Anthropic has also become more reliant on Microsoft's cloud.
"There's no question Al represents a profound shift in both technology and business," CEO Satya Nadella wrote in the presentation. "It is changing what we build and how we operate, and it is blurring the boundaries between our products and reshaping our business models."
Amazon began disclosing revenue from AWS, the market leader, in 2015. Alphabet, which ranks third in cloud, started providing total revenue from Google Cloud Platform and Workspace productivity subscriptions in 2020.
Microsoft, by contrast, has only been providing the year-over-year growth rate for Azure, and started offering actual sales on an annual basis dating back to last year.
Another big change to Azure is that it will exclude GitHub cloud services, developer cloud services, the Security Copilot assistant and healthcare and life sciences cloud products, according to the presentation. In 2021, the company started announcing growth from Azure and other cloud services, later lumping in some revenue from the GitHub and Nuance Communications acquisitions.
"Under this reporting structure, Azure becomes more purely our consumption-based platform and infrastructure business," Nadella wrote in the deck.
Going forward, Microsoft's two segments will be Agents and Infra, and Devices and Consumer.
The first will include Azure and Microsoft 365 cloud products, as well as productivity and server licensing, industry solutions and frontier and support services. The latter will comprise search and advertising, Xbox, and revenue from sales of devices and Windows operating system licenses to device makers.
Inside Agents and Infra, Microsoft will be able to showcase momentum from a series of AI assistants, including the Microsoft 365 Copilot for commercial customers and the GitHub Copilot coding agent. Microsoft said in July that it had over 30 million paid seats for the 365 Copilot, up from more than 20 million as of April.
Microsoft is also providing two years of recast financial results and adjusted guidance, but will stop showing costs and operating margins for the three old segments.
With the new structure, Azure revenue grew 42% to $29.42 billion in the June quarter, compared with 43% using the old Azure and other cloud services metric. That means Azure represented almost 33% of Microsoft's total revenue in the latest period.
Management said fiscal first-quarter Azure revenue should grow 44% to 45% at constant currency. In July the company called for 45% growth at constant currency for Azure and other cloud services.
Microsoft is targeting $75.15 billion to $75.75 billion in Agents and Infra revenue, with $14.7 billion to $15.2 billion in Devices and Consumer revenue. There are no changes to the outlook for overall revenue, cost of revenue or operating expenses.
WATCH: BofA's Liani on Microsoft upgrade: Investors are underestimating how it is differentiating in AI`,
    bodyJa: `Microsoftは、Azureクラウド事業の四半期収益の開示を初めて開始し、アマゾン ウェブ サービスやグーグルのクラウドプラットフォームと競合する同社の事業のより明確な全体像を投資家に提供する。
水曜日のプレゼンテーションで発表されたこの変更は、Microsoftの営業セグメントを3つから2つに削減することによる、報告構造の広範な変更の一環である。以前の体制は 2015 年から実施されていました。
顧客が新しいエージェントやその他のツールの開発に必要な AI モデルにアクセスするために主要なクラウド インフラストラクチャ プラットフォームに目を向けているため、Microsoft の Azure 部門は人工知能ブームの大きな恩恵を受けてきました。 Stifelのアナリストらは7月、2026会計年度のAzureの収益増加の約半分はOpenAIによるもので、AnthropicもMicrosoftのクラウドへの依存度を高めていると推定した。
CEOのサティア・ナデラ氏はプレゼンテーションの中で、「アルがテクノロジーとビジネスの両方に大きな変化をもたらすことに疑問の余地はない」と述べた。 「私たちが何を構築し、どのように運営するかが変化し、製品間の境界があいまいになり、ビジネスモデルが再構築されています。」
Amazon は、2015 年に市場リーダーである AWS からの収益の開示を開始しました。クラウドで 3 位にランクされている Alphabet は、2020 年に Google Cloud Platform と Workspace の生産性サブスクリプションからの総収益の提供を開始しました。
対照的に、Microsoft は Azure の前年比成長率のみを提供しており、昨年から実際の売上高を年間ベースで提供し始めました。
プレゼンテーションによると、Azure に対するもう 1 つの大きな変更は、GitHub クラウド サービス、開発者向けクラウド サービス、Security Copilot アシスタント、ヘルスケアおよびライフ サイエンスのクラウド製品が除外されることです。 2021年、同社はAzureやその他のクラウドサービスによる成長を発表し始め、後にGitHubとNuance Communicationsの買収による収益の一部を一括計上した。
「この報告構造の下では、Azure はより純粋に消費ベースのプラットフォームおよびインフラストラクチャ ビジネスになります」と Nadella 氏は資料の中で述べています。
今後、Microsoft の 2 つのセグメントは、エージェントとインフラ、デバイスとコンシューマになります。
1 つ目には、Azure と Microsoft 365 のクラウド製品に加え、生産性とサーバーのライセンス、業界ソリューション、フロンティアおよびサポート サービスが含まれます。後者には、検索と広告、Xbox、デバイス メーカーへのデバイスと Windows オペレーティング システムのライセンスの販売からの収益が含まれます。
エージェントとインフラ内で、Microsoft は、商用顧客向けの Microsoft 365 Copilot や GitHub Copilot コーディング エージェントを含む一連の AI アシスタントの勢いを示すことができます。 Microsoftは7月、365 Copilotの有料シート数は3000万以上で、4月時点の2000万以上から増加したと発表した。
Microsoftはまた、2年間の修正された財務結果と調整後のガイダンスを提供しているが、3つの古いセグメントのコストと営業利益率の表示を中止する。
新しい構造により、6 月四半期の Azure の収益は 42% 増加して 294 億 2000 万ドルとなりました。これに対し、古い Azure およびその他のクラウド サービスの指標を使用した場合は 43% 増加しました。これは、Azure が最新期間における Microsoft の総収益のほぼ 33% を占めたことを意味します。
経営陣は、会計年度第 1 四半期の Azure 収益は為替変動の影響を除いて 44% ～ 45% 増加するはずだと述べています。同社は7月に、Azureやその他のクラウドサービスの固定通貨ベースで45％の成長を要求した。
Microsoftは、エージェントとインフラの売上高が751億5000万ドルから757億5000万ドル、デバイスとコンシューマの売上高が147億ドルから152億ドルになることを目標としている。全体の収益、収益原価、営業費用の見通しに変更はありません。
注目: Microsoft アップグレードに関する BofA のリアニ氏: 投資家は AI での差別化を過小評価している`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/02/microsoft-to-disclose-azure-revenue-as-part-of-segment-changes.html",
    publishedAt: "2026-09-02T20:46:42+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 5,
  },
  {
    id: "snowflake-spikes-22-on-healthy-results-a-c6e97b4f",
    title: "Snowflake spikes 22% on healthy results and AI coding momentum",
    titleJa: "Snowflake は健全な結果と AI コーディングの勢いで 22% 急上昇",
    summaryJa: "データ分析ソフトウェアメーカーが予想を上回る業績とガイダンスを発表したことを受け、スノーフレーク株は水曜日の時間外取引で22％上昇した。LSEGコンセンサスと比較した同社のパフォーマンスは次のとおりです。",
    bodyOriginal: `Snowflake shares rose 22% in extended trading on Wednesday after the data analytics software maker reported results and guidance that surpassed expectations.
Here's how the company performed relative to LSEG consensus:
- Earnings per share: 62 cents adjusted vs. 45 cents expected
- Revenue: $1.55 billion vs. $1.48 billion expected
Snowflake's revenue jumped 35% year over year in the fiscal second quarter, which ended on July 31, according to a statement. The company recorded a net loss of $191.7 million, or 55 cents per share, smaller than the net loss of $297.9 million, or 89 cents per share, one year ago.
The company pointed to gains from the CoCo artificial intelligence coding agent, which now has 9,100 accounts, an increase of over 2,000 during the quarter.
For the fiscal third quarter, Snowflake said it sees $1.59 billion in product revenue, above the $1.50 billion consensus among analysts polled by StreetAccount. Management pushed up its product revenue forecast for the fiscal year, calling for $6.07 billion, compared with $5.84 billion in May. It's now forecasting a 14.5% adjusted operating margin, wider than the 13.5% figure it had projected in May.
As of Wednesday's close, Snowflake shares were up 39%, while the S&P 500 index had gained about 12% in the same period. If the stock moves as high on Thursday as it did after hours on Wednesday, it would represent the fourth highest jump since Snowflake went public in 2020.
Executives will discuss the results with analysts on a conference call starting at 5 p.m. ET.`,
    bodyJa: `データ分析ソフトウェアメーカーが予想を上回る業績とガイダンスを発表したことを受け、スノーフレーク株は水曜日の時間外取引で22％上昇した。
LSEGコンセンサスと比較した同社のパフォーマンスは次のとおりです。
- 1 株当たり利益: 調整後 62 セント、予想 45 セント
- 収益: 15 億 5,000 万ドル対予想 14 億 8,000 万ドル
声明によると、スノーフレークの売上高は、7月31日に終了した会計年度第2四半期に前年同期比35％増加した。同社の純損失は1億9,170万ドル（1株あたり55セント）で、1年前の純損失2億9,790万ドル（1株あたり89セント）よりも縮小した。
同社は、CoCo 人工知能コーディング エージェントによる利益を指摘し、現在アカウント数は 9,100 であり、当四半期中に 2,000 以上増加しました。
スノーフレークは、会計年度第3四半期の製品売上高が15億9000万ドルになると予想しており、StreetAccountが調査したアナリストのコンセンサスである15億9000万ドルを上回っていると述べた。経営陣は会計年度の製品売上高予想を5月の58億4000万ドルから60億7000万ドルに上方修正した。同社は現在、調整後営業利益率が14.5％と予想しており、5月に予想していた13.5％を上回っている。
水曜日の終値時点で、スノーフレークの株価は39％上昇し、S&P500指数は同期間に約12％上昇した。もし木曜日の株価が水曜の時間外株価と同じくらい高くなれば、スノーフレークが2020年に上場して以来4番目に高い値上がりとなる。
幹部らは午後５時からの電話会議でアナリストらと結果について話し合う予定だ。 ET。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/02/snowflake-snow-q2-earnings-report-2027.html",
    publishedAt: "2026-09-02T20:28:39+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "the-los-angeles-angels-are-being-sold-fo-8cadf703",
    title: "The Los Angeles Angels are being sold for a record $4 billion. Here's what every MLB team is now worth",
    titleJa: "ロサンゼルス・エンゼルスが史上最高額の40億ドルで売却されることになった。 MLB チームの現在の価値は次のとおりです",
    summaryJa: "スタン・クロエンケ監督は、MLBチームとその地域スポーツネットワークであるエンジェルス・ブロードキャスト・テレビジョンを40億ドルで評価する契約で、モレノ家からロサンゼルス・エンゼルスを買収することに同意した。今年初めに発表されたCNBCのMLB評価額によると、エンゼルスのMLB評価額の記録は2025年の球団収入の10倍に相当する。比較すると、先月MLBが承認したホセ・フェリシアーノとクワンザ・ジョーンズへのサンディエゴ・パドレスの39億ドルの売却は、収益が8倍の倍数となった。",
    bodyOriginal: `Stan Kroenke has agreed to buy the Los Angeles Angels from the Moreno family in a deal that values the MLB team and its regional sports network, Angels Broadcast Television, at $4 billion.
The record MLB valuation for the Angels is equivalent to 10 times the team's 2025 revenue, according to CNBC's MLB valuations published earlier this year. In comparison, the $3.9 billion sale of the San Diego Padres to José Feliciano and Kwanza Jones, approved by the MLB last month, had a multiple of eight times revenue.
CNBC has updated its MLB valuations based on the Angels deal, focusing on valuation-to-revenue multiples, market and stadium economics.
The average MLB team is now worth $4.04 billion, 37% more than our MLB valuations in March. The New York Yankees top the list with a value of $12 billion, 28% more than in March. The least valuable MLB team is still the Miami Marlins, but we now value the team at $2.2 billion, a 57% increase from March. The New York Mets, now worth $5.4 billion, jumped to fifth on our list, leapfrogging the San Francisco Giants and Philadelphia Phillies.
Bankers CNBC spoke with regarding the Angels deal stressed that location is a big factor in the trophy appeal of owning a sports team. To wit: The recent announcement that Josh Kushner and Bob Iger have agreed to buy the NBA's Los Angeles Lakers at a $12.5 billion valuation.
We did not adjust the value of the Los Angeles Dodgers from our March rankings, keeping it at $8 billion, due to the controversy surrounding the team's owner, Mark Walter.`,
    bodyJa: `スタン・クロエンケ監督は、MLBチームとその地域スポーツネットワークであるエンジェルス・ブロードキャスト・テレビジョンを40億ドルで評価する契約で、モレノ家からロサンゼルス・エンゼルスを買収することに同意した。
今年初めに発表されたCNBCのMLB評価額によると、エンゼルスのMLB評価額の記録は2025年の球団収入の10倍に相当する。比較すると、先月MLBが承認したホセ・フェリシアーノとクワンザ・ジョーンズへのサンディエゴ・パドレスの39億ドルの売却は、収益が8倍の倍数となった。
CNBCは、エンゼルスとの契約に基づいて、評価額対収益倍率、市場およびスタジアムの経済性に焦点を当てて、MLBの評価額を更新した。
現在、平均的な MLB チームの資産価値は 40 億 4,000 万ドルで、3 月時点の MLB 評価額より 37% 増加しています。ニューヨーク・ヤンキースが120億ドルでトップとなり、3月より28％増加した。 MLB チームの価値が最も低いチームは依然としてマイアミ マーリンズですが、現在チームの価値は 22 億ドルと評価されており、3 月から 57% 増加しています。現在54億ドルの資産を持つニューヨーク・メッツは、サンフランシスコ・ジャイアンツとフィラデルフィア・フィリーズを抜き去り、リストの5位に躍り出た。
エンゼルスとの契約に関してCNBCが取材した銀行関係者は、スポーツチームを所有するトロフィーの魅力には立地が大きな要素であると強調した。つまり、ジョシュ・クシュナーとボブ・アイガーがNBAのロサンゼルス・レイカーズを125億ドルの評価額で買収することに合意したという最近の発表だ。
チームのオーナー、マーク・ウォルター氏をめぐる論争のため、ロサンゼルス・ドジャースの価値は3月のランキングから調整せず、80億ドルに据え置いた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/02/the-los-angeles-angels-are-being-sold-for-a-record-4-billion-heres-what-every-mlb-team-is-now-worth.html",
    publishedAt: "2026-09-02T19:23:41+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "states-now-must-report-undocumented-immi-ccb1c87d",
    title: "States now must report undocumented immigrants to DHS or risk federal funding, DOJ says",
    titleJa: "司法省は今後、各州は不法移民をDHSに報告しなければならない、さもなければ連邦資金の危険にさらされると述べた",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `All states going forward must report undocumented immigrants known to be in a state to the U.S. Department of Homeland Security or risk losing federal funding for programs meant to aid low-income individuals, the Department of Justice said in a new legal opinion.
The DOJ, in issuing the opinion, revised the Office of Legal Counsel's prior opinion from 1998, which found that only specific state agencies that administered the Temporary Assistance for Needy Families and the Supplemental Security Income programs needed to provide information to federal immigration authorities.
"Congress wrote this requirement plainly," Assistant Attorney General T. Elliot Gaiser of the DOJ's Office of Legal Counsel, said in a statement.
"When a state chooses to participate in TANF, it accepts the obligation to report illegal aliens in the United States," Gaiser said. "Tax dollars intended to help vulnerable Americans should not perversely encourage illegal entry into the United States, but rather should reinforce our laws and our borders."
The DOJ in a statement Wednesday said the Office of Legal Counsel's Sept. 1 opinion "explains that Congress defined 'State' broadly in the Personal Responsibility and Work Opportunity Reconciliation Act of 1996."
"As a result, when a state accepts federal TANF or SSI funds, the entire state government — including all component agencies — is bound by federal law to share information with DHS about individuals the state knows to be not lawfully present," the DOJ said.
The new opinion only applies proactively, not to past enrollments in TANF and SSI.
All 50 states, the District of Columbia and several U.S. territories participate in both programs. Federal TANF funding grants top $16.4 billion annually, according to the DOJ.
"Our clarification does not impose new obligations on states," said Deputy Assistant Attorney General Joshua Craddock, the Office of Legal Counsel official who wrote the new opinion.
"It simply restores the original meaning of the statute Congress enacted and ensures that DHS receives the information it is legally entitled to," Craddock said.
"States that accept TANF funding must abide by federal law, and failure to comply may lead to serious consequences, including loss of program funding."
CNBC has requested comment on the new opinion from the attorneys general of more than a dozen of the largest U.S. states, and asked if they will challenge its guidance.
This is developing news. Please check back for details.`,
    bodyJa: `司法省は新たな法的見解の中で、今後すべての州は、州内にいることが判明している不法移民を国土安全保障省に報告する必要があり、報告しなければ、低所得者支援プログラムへの連邦予算を失う危険があると述べた。
司法省はこの意見を発表するにあたり、1998年の法律顧問局の以前の意見を修正し、その意見では、困窮家族に対する一時的援助と補足保障収入プログラムを管理する特定の州機関のみが連邦移民当局に情報を提供する必要があるとした。
「議会はこの要件を明確に書いた」と司法省法律顧問局のT・エリオット・ガイザー司法次官補は声明で述べた。
「州がTANFへの参加を選択した場合、その州は米国内の不法滞在者を報告する義務を受け入れることになる」とガイザー氏は述べた。 「弱い立場にあるアメリカ人を助けるための税金は、アメリカへの不法入国を邪悪に奨励すべきではなく、むしろ我が国の法律と国境を強化すべきである。」
司法省は水曜日の声明で、法律顧問局の9月1日の意見は「議会が1996年の個人責任と労働機会調整法で『国家』を広範に定義したことを説明している」と述べた。
「その結果、州が連邦TANFまたはSSI基金を受け入れる場合、すべての構成機関を含む州政府全体は、連邦法により、州が合法的に存在していないことがわかっている個人に関する情報をDHSと共有する義務がある」と司法省は述べた。
新しい意見は積極的にのみ適用され、TANF および SSI への過去の登録には適用されません。
50 州すべて、コロンビア特別区、およびいくつかの米国準州が両方のプログラムに参加しています。司法省によると、連邦TANF資金助成金は年間164億ドルを超える。
「われわれの明確化は州に新たな義務を課すものではない」と新たな意見書を書いた法律顧問局職員のジョシュア・クラドック司法次官補は述べた。
「これは単に議会が制定した法令の本来の意味を復元し、DHSが法的に受け取る権利のある情報を確実に受け取ることを保証するものである」とクラドック氏は述べた。
「TANFの資金提供を受け入れる州は連邦法を遵守しなければならず、従わない場合はプログラム資金の損失を含む深刻な結果につながる可能性がある。」
CNBCは、米国の主要な12以上の州の司法長官に新たな意見についてコメントを求め、その指針に異議を唱えるつもりか尋ねた。
これは発展途上のニュースです。詳細については改めてご確認ください。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/02/doj-states-undocumented-immigrants-dhs-funds.html",
    publishedAt: "2026-09-02T18:25:42+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "netherlands-moves-billions-in-gold-to-lo-a631e022",
    title: "Netherlands moves billions in gold to London in 'crisis preparedness' move",
    titleJa: "オランダ、「危機への備え」として数十億ドルの金をロンドンに移動",
    summaryJa: "オランダ、「危機への備え」として数十億ドルの金をロンドンに移動- 公開されました",
    bodyOriginal: `Netherlands moves billions in gold to London in 'crisis preparedness' move
- Published
The Dutch central bank (DNB) has confirmed that billions of dollars in gold has been taken out of north America and relocated to London, citing "increasing geopolitical unrest".
DNB said on Wednesday that 86 tonnes of gold had been removed from the US and Canada in a complex operation that took several months. It is now being held by the Bank of England, where the precious metal can be traded more easily "in a crisis situation".
Bank president Olaf Sleijpen said the move was "necessary to strengthen our resilience and preparedness".
The decision comes amid an ongoing trade dispute between the US and Canada, with both countries announcing fresh tariffs on each other after failed trade talks.
DNB said the transfer, which took place between March and August, saw 27 tonnes of gold bars moved from New York and Ottawa to Zeist in the Netherlands.
A similar quantity and quality was then moved to London, with no need to melt the bars down.
Exactly how so much gold was transported across the Atlantic Ocean has not been revealed.
The rest of the transfer was carried out by selling the gold in New York, and repurchasing it in London, the bank said, external.
"Combining the processes of buying and selling and physical transport has allowed DNB to spread the risks associated with such a complex physical gold relocation," the statement said.
DNB did not confirm what it was referring to with its mention of "geopolitical unrest" but the US economy remains in an uncertain position due to the country's ongoing war with Iran, which has impacted global trade.
Canada, meanwhile, has been hit hard by US tariffs on its key sectors of steel, aluminium, lumber and automobiles as well as an additional 50% levy on about C$28bn ($20bn; £15bn) of Canadian goods announced in August.
DNB said that gold that is held with the Bank of England "is regarded as the world's most easily tradable gold," and therefore more readily available in a crisis than if it was still in the US or Canada.
Prior to Wednesday's announcement, the DNB held 31.3% of its gold in New York and 19.7% in Ottawa. This has now fallen to 18.5% in both countries.
The total Dutch gold stock was 612.4 tonnes at the end of 2025 and has been valued at €72.2 billion, DNB said.
The bank's share of gold in London has increased from 18.1% to 32.1% after the move, while it still holds 30.8% of its reserves in the Netherlands.
Related topics
- Published2 days ago
- Published7 days ago`,
    bodyJa: `オランダ、「危機への備え」として数十億ドルの金をロンドンに移動
- 公開されました
オランダ中央銀行（DNB）は、「地政学的不安の増大」を理由に、数十億ドルの金が北米から持ち出され、ロンドンに移されたことを確認した。
DNBは水曜日、数カ月かかった複雑な作業により86トンの金が米国とカナダから持ち出されたと発表した。現在はイングランド銀行が保有しており、「危機的状況において」貴金属をより容易に取引できるようになっている。
同行のオラフ・スライペン頭取は、今回の措置は「われわれの回復力と備えを強化するために必要だった」と述べた。
この決定は、米国とカナダの間で進行中の貿易紛争のさなか行われ、貿易交渉の失敗を受けて両国は相互に新たな関税を発表した。
DNBによると、この移送は3月から8月にかけて行われ、27トンの金塊がニューヨークとオタワからオランダのザイストに移送されたという。
その後、バーを溶かす必要がなく、同様の量と品質がロンドンに移されました。
いったいどのようにしてこれほどの金が大西洋を越えて運ばれたのかは明らかになっていない。
同銀行によると、残りの送金はニューヨークで金を売却し、ロンドンで買い戻す形で外部で行われたという。
「DNBは、売買と物理的な輸送のプロセスを組み合わせることで、このような複雑な物理的な金の移転に伴うリスクを分散することができた」と声明では述べている。
DNBは「地政学的不安」という言及が何を指しているかは確認していないが、世界貿易に影響を与えているイランとの戦争が続いているため、米国経済は依然として不確実な立場にある。
一方、カナダは、鉄鋼、アルミニウム、木材、自動車といった主要分野に対する米国の関税と、8月に発表されたカナダ製品約280億カナダドル（200億ドル、150億ポンド）に対する50％の追加関税によって大きな打撃を受けている。
DNBは、イングランド銀行が保有する金は「世界で最も簡単に取引できる金とみなされている」ため、米国やカナダに保管されている場合よりも危機時に容易に入手できると述べた。
水曜日の発表前、DNBは金の31.3％をニューヨークに、19.7％をオタワに保有していた。これは現在、両国とも 18.5% に低下しています。
DNBによると、オランダの金の総在庫は2025年末時点で612.4トンで、その価値は722億ユーロに上るという。
移転後、ロンドンにおける同銀行の金のシェアは18.1％から32.1％に増加したが、オランダでは依然として準備金の30.8％を保有している。
関連トピック
- 2 日前に公開
- 7 日前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cvgy51xlz39o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-02T17:21:00+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/14d7/live/19860b20-a6e6-11f1-b109-879e35c24276.jpg",
    readTime: 3,
  },
  {
    id: "uber-to-cut-over-3-000-jobs-in-major-glo-67af94b0",
    title: "Uber to cut over 3,000 jobs in major global restructuring",
    titleJa: "ウーバー、世界規模の大規模なリストラで3000人以上の人員削減へ",
    summaryJa: "ウーバー、世界規模の大規模なリストラで3000人以上の人員削減へ- 公開されました",
    bodyOriginal: `Uber to cut over 3,000 jobs in major global restructuring
- Published
Uber is cutting more than 3,000 jobs worldwide as part of a major overhaul designed to shrink management layers and refocus spending on its core business.
The cuts amount to roughly 10% of its global workforce, bringing staffing back to levels last seen in 2021.
Chief executive Dara Khosrowshahi told staff in a company email that the taxi and delivery firm had expanded quickly but accumulated too many layers and small teams that slowed decision‑making.
He said the reductions would put Uber, which has its global head office in San Francisco, US, in a better position for its "biggest opportunities ahead of us".
The move marks one of Uber's largest restructurings in years and signals a shift towards a leaner operating model.
Shares rose nearly 2% after the announcement, with investors appearing to welcome the proposals.
Cuts affect both managers and non-managers, and Uber said it plans to fold many of its smallest teams into larger groups, however, the firm has not confirmed the locations most affected by job cuts.
Such changes are intended to make Uber "simpler" and "faster," while freeing up money to reinvest in areas it considers central to its future, Khosrowshahi said.
The restructuring comes as Uber steps up investment in autonomous vehicle partnerships and expands its ride‑hailing, delivery, and robotaxi operations.
Uber is also tightening up its office strategy, asking nearly all employees to work in person at designated hubs and limiting remote roles to about 1%.
Analysts said the layoffs could generate up to $2bn in annual savings.
Unlike many large technology companies that have cut jobs amid heavy spending on artificial intelligence (AI), Uber had avoided major reductions since the pandemic.
The latest changes bring its workforce back to just under 30,000 people, roughly where it stood before its most recent period of expansion.
Related topics
- Published8 June`,
    bodyJa: `ウーバー、世界規模の大規模なリストラで3000人以上の人員削減へ
- 公開されました
ウーバーは、経営層を縮小し、中核事業への支出を再集中させることを目的とした大規模な見直しの一環として、世界中で3,000人以上の人員削減を行っている。
この削減は世界の従業員の約10％に相当し、人員配置は2021年に最後に見られた水準に戻る。
最高経営責任者（CEO）のダラ・コスロシャヒ氏は社内メールでスタッフに対し、タクシー・配送会社は急速に拡大したが、層が多すぎて小規模なチームが蓄積しすぎて意思決定が遅れたと語った。
同氏は、今回の削減により、米国サンフランシスコに世界本社を置くウーバーは「目の前にある最大のチャンス」に向けて有利な立場に立つことができると述べた。
この動きはウーバーにとってここ数年で最大規模の組織再編の一つであり、よりスリムな運営モデルへの移行を示唆するものだ。
発表後株価は２％近く上昇し、投資家はこの提案を歓迎しているようだ。
人員削減はマネージャーと非マネージャーの両方に影響を及ぼし、ウーバーは最も小規模なチームの多くをより大きなグループに分割する計画だと述べたが、同社は人員削減によって最も影響を受ける拠点を確認していない。
コスロシャヒ氏は、こうした変更はウーバーを「よりシンプル」で「より速く」すると同時に、将来の中心となると考える分野への再投資に資金を解放することを目的としていると述べた。
この再編は、ウーバーが自動運転車パートナーシップへの投資を強化し、配車、配達、ロボタクシー事業を拡大する中で行われた。
ウーバーはまた、オフィス戦略を強化し、ほぼすべての従業員に指定されたハブで直接勤務するよう求め、リモートでの役割を約1％に制限している。
アナリストらは、人員削減により年間最大２０億ドルの節約が生まれる可能性があると述べた。
人工知能（AI）への多額の支出を背景に人員削減を行っている多くの大手テクノロジー企業とは異なり、ウーバーはパンデミック以来、大幅な人員削減を避けてきた。
最新の変更により、従業員数は 30,000 人弱に戻り、ほぼ最近の拡大期前の水準に戻りました。
関連トピック
- 6 月 8 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cp3ky2w4y9no?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-02T16:51:49+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/4149/live/2053ede0-a6ec-11f1-9e4c-79c1c0e340c6.jpg",
    readTime: 2,
  },
  {
    id: "trump-floats-renaming-strait-of-hormuz-t-fc58b756",
    title: "Trump floats renaming Strait of Hormuz the 'Trump Strait'",
    titleJa: "トランプ大統領、ホルムズ海峡の名称を「トランプ海峡」に変更",
    summaryJa: "ドナルド・トランプ大統領は水曜日、米国とイスラエルが開始した対イラン戦争の中心的争点であるホルムズ海峡の名称を自身の名にちなんで変更することを示唆した。この提案は、トゥルース・ソーシャルの投稿を通じて行われたもので、カナダとの確執激化に陥っているトランプ大統領が、オンタリオ湖の名前を「アメリカ湖」に変更する大統領令に署名してから1週間も経たないうちに発表された。",
    bodyOriginal: `President Donald Trump on Wednesday floated renaming the Strait of Hormuz — the central point of contention in the ongoing war against Iran that the U.S. and Israel started — after himself.
The proposal via a Truth Social post came less than a week after Trump, who is locked in an intensifying feud with Canada, signed an executive order to change the name of Lake Ontario to "Lake America."
"Now that we have it under U.S.A. control, should we change the name Hormuz Strait to TRUMP STRAIT???" Trump wrote in the post Wednesday morning.
"Like America itself, it would be 'hotter' than ever before! Thank you for your attention to this matter. President DONALD J. TRUMP," he wrote.
It was not immediately clear how the president would attempt to implement a name change in the strait, which is not near the U.S. The order renaming Lake Ontario directed Interior Secretary Doug Burgum and his department to update the Geographic Names Information System with the new name. Canada rejected the change, though Google and Apple have recently updated their maps. Early in his second presidential term, Trump also declared he was renaming the Gulf of Mexico as the Gulf of America, a change also rejected by Mexico and other international counterparts. The U.S. borders Lake Ontario and the Gulf of Mexico, both of which have had their names for centuries.
Trump and his administration have repeatedly insisted that Iran has lost control over the strait, which carried one-fifth of the world's oil trade before the war began in late February.
But transits through the waterway remain far below prewar levels, and ship-trackers say they have dropped further in recent days, as military strikes in the region have resumed following a weekslong hiatus.
The Trump administration asserts that total oil exports from the region are now higher than they were before the war began, if the tally includes Saudi Arabia's and the United Arab Emirate's pipelines that bypass Hormuz.
U.S. Energy Secretary Chris Wright told CNBC on Wednesday that more than 17 million barrels of oil transited the strait on Monday, a new wartime record. Around 20 million barrels per day of crude and products passed through the strait before the war started on Feb. 28.`,
    bodyJa: `ドナルド・トランプ大統領は水曜日、米国とイスラエルが開始した対イラン戦争の中心的争点であるホルムズ海峡の名称を自身の名にちなんで変更することを示唆した。
この提案は、トゥルース・ソーシャルの投稿を通じて行われたもので、カナダとの確執激化に陥っているトランプ大統領が、オンタリオ湖の名前を「アメリカ湖」に変更する大統領令に署名してから1週間も経たないうちに発表された。
「アメリカの管理下に入った以上、ホルムズ海峡の名前をトランプ海峡に変更すべきでしょうか？？」トランプ氏は水曜朝の投稿にこう書いた。
「アメリカそのものと同じように、これまで以上に『暑く』なるでしょう！この問題にご関心を持っていただきありがとうございます。ドナルド・J・トランプ大統領」と彼は書いた。
米国の近くではないこの海峡で大統領がどのように名前変更を実行しようとするかはすぐには明らかではなかった。オンタリオ湖の名前を変更する命令は、ダグ・バーガム内務長官とその省に対し、地理名情報システムを新しい名前で更新するよう指示した。カナダは変更を拒否したが、グーグルとアップルは最近地図を更新した。トランプ大統領は2期目の大統領任期の初めに、メキシコ湾をアメリカ湾に改名すると宣言したが、これもメキシコや他の国際諸国が拒否した。米国はオンタリオ湖とメキシコ湾に面しており、どちらも何世紀にもわたってその名前が付けられています。
トランプ大統領とその政権は、2月末に戦争が始まる前に世界の石油貿易の5分の1を運んでいたこの海峡の支配権をイランが失ったと繰り返し主張してきた。
しかし、この水路の通過量は依然として戦前の水準をはるかに下回っており、船舶追跡関係者によると、この地域での軍事攻撃が数週間の中断を経て再開されたため、ここ数日さらに減少しているという。
トランプ政権は、ホルムズを迂回するサウジアラビアとアラブ首長国連邦のパイプラインを集計に含めれば、この地域からの石油輸出総額は現在、戦争開始前よりも増加していると主張している。
クリス・ライト米国エネルギー長官は水曜日、CNBCに対し、月曜日には1,700万バレル以上の石油が海峡を通過したが、これは戦時中の新記録であると語った。 ２月２８日に戦争が始まる前に、日量約２０００万バレルの原油と製品が海峡を通過した。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/02/trump-hormuz-strait-ontario-iran.html",
    publishedAt: "2026-09-02T16:04:10+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "energy-secretary-chris-wright-tells-cnbc-275e9540",
    title: "Energy Secretary Chris Wright tells CNBC more than 17 million barrels of oil transited Hormuz on Monday",
    titleJa: "クリス・ライト・エネルギー長官は、月曜日に1,700万バレル以上の石油がホルムズを通過したとCNBCに語った。",
    summaryJa: "クリス・ライト米国エネルギー長官は水曜日のインタビューでCNBCのインタビューで、月曜日には1,700万バレル以上の石油が船でホルムズ海峡を通過したが、これは2月下旬にイラン戦争が始まって以来の記録であると語った。ライト氏によると、月曜日のこの地域からの石油輸出は、ホルムズを迂回するサウジアラビアとアラブ首長国連邦のパイプラインを含めると、戦前の水準を上回ったという。 ２月２８日に戦争が始まる前に、日量約２０００万バレルの原油と製品が海峡を通過した。",
    bodyOriginal: `More than 17 million barrels of oil transited the Strait of Hormuz by ship on Monday, a record since the Iran war began in late February, U.S. Energy Secretary Chris Wright told CNBC in an interview Wednesday.
Oil exports from the region on Monday were higher than prewar levels when Saudi Arabia's and the United Arab Emirate's pipelines that bypass Hormuz are included, Wright said. Around 20 million barrels per day of crude and products passed through the strait before the war started on Feb. 28.
Iran is losing its ability to "hold the world economic hostage" as the U.S. military helps oil tankers sail through Hormuz, Wright said. Tehran is "causing some disruption but they are losing that card," he said.
The Energy secretary spoke to CNBC's Brian Sullivan in Venezuela on Wednesday, five days after President Donald Trump announced a massive oil deal with the interim government in Caracas.
The U.S. government has provided data on oil exports through Hormuz that are higher than those reported by independent ship-tracking firms. Wright has said the U.S. military and Department of Energy have the best data as private companies often miss covert transits.
U.S. crude oil was down about 1% on Wednesday, though the futures contract hovered around $90 per barrel earlier in the session as Washington and Tehran traded military strikes, breaking a period of relative calm.
The U.S. military has established a shipping corridor along Oman's coast that tankers from its Gulf allies use to transit Hormuz, often at night with their transponders turned off to reduce the risk of attack.
"With or without Iran, oil and gas will flow out of the Arabian Gulf region and it's happening," Wright told CNBC on Wednesday.
Iran has repeatedly attacked tankers using that U.S.-protected route, demanding commercial ships take a northern corridor through its waters. At least two tankers have come under attack in the strait this week, according to incident reports from the United Kingdom Maritime Trade Operations Centre.`,
    bodyJa: `クリス・ライト米国エネルギー長官は水曜日のインタビューでCNBCのインタビューで、月曜日には1,700万バレル以上の石油が船でホルムズ海峡を通過したが、これは2月下旬にイラン戦争が始まって以来の記録であると語った。
ライト氏によると、月曜日のこの地域からの石油輸出は、ホルムズを迂回するサウジアラビアとアラブ首長国連邦のパイプラインを含めると、戦前の水準を上回ったという。 ２月２８日に戦争が始まる前に、日量約２０００万バレルの原油と製品が海峡を通過した。
ライト氏は、米軍が石油タンカーのホルムズ航行を支援する中、イランは「世界経済を人質に取る」能力を失いつつあると述べた。イラン政府は「ある程度の混乱を引き起こしているが、そのカードを失いつつある」と同氏は述べた。
ドナルド・トランプ大統領がカラカス暫定政府との大規模な石油取引を発表した5日後の水曜日、エネルギー長官はベネズエラでCNBCのブライアン・サリバン氏と対談した。
米国政府が提供したホルムズ経由の石油輸出に関するデータは、独立船舶追跡会社が報告したデータよりも多い。ライト氏は、民間企業は秘密輸送を見逃すことが多いため、米軍とエネルギー省が最良のデータを持っていると述べた。
米国原油価格は水曜日に約1％下落したが、ワシントンとイラン政府が軍事攻撃を行ったため、先物契約は取引序盤に1バレル当たり90ドル付近で推移し、比較的平静な時期が崩れた。
米軍はオマーン沿岸に輸送回廊を確立し、湾岸同盟国のタンカーがホルムズを通過する際に利用するが、攻撃のリスクを軽減するために夜間はトランスポンダーをオフにすることが多い。
ライト氏は水曜日、CNBCに対し、「イランの有無にかかわらず、石油とガスはアラビア湾岸地域から流出するだろうし、それは現実に起きている」と語った。
イランは米国が保護するこの航路を利用するタンカーを繰り返し攻撃し、商船にイラン海域の北回廊を通過するよう要求している。英国海事貿易業務センターからの事件報告によると、今週少なくとも２隻のタンカーがこの海峡で攻撃を受けた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/02/energy-secretary-chris-wright-tells-cnbc-that-more-than-17-million-barrels-of-oil-transited-hormuz-on-monday.html",
    publishedAt: "2026-09-02T15:57:08+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "new-york-fed-s-williams-says-yield-surge-3b2f90ff",
    title: "New York Fed's Williams says yield surge due to strong economic prospects",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "ニューヨーク連銀のウィリアムズ総裁は水曜日、最近の米国債利回りの上昇は好調な経済の産物であり、市場の機能不全ではないと述べた。中銀の政策担当者はＣＮＢＣのインタビューで、経済指標をまだ収集中であると付け加え、利上げが必要だと考えるかどうかについては明言しなかった。",
    bodyOriginal: `New York Federal Reserve President John Williams said Wednesday that the recent surge in Treasury yields is the product of a strong economy, not market dysfunction.
The central bank policymaker added in a CNBC interview that he's still absorbing economic data, and did not commit on whether he thinks an interest rate hike is necessary.
"I think that we have to wait and see," Williams told CNBC's Steve Liesman during a "Squawk Box" interview from the New York bank's headquarters in lower Manhattan. "There's no clear signs right now whether monetary policy currently is sufficient to make sure we bring inflation back to target in the next year or two, or whether you need to see further action to do that."
"The [inflation] data recently have been encouraging towards that, but again we can't just look a month or two. We've got to get a full picture and and look at all the ... different pieces of information we have," he added.
In financial markets, the biggest story recently has been a jump in Treasury yields to multiyear highs, particularly at the long end where investors price in expectations for inflation and economic growth.
While that has been going on, traders have raised expectations for a Fed rate hike at the Sept. 15-16 meeting, putting odds Wednesday morning around 66%, according to the CME Group's gauge.
Though investors are worried about inflation, Williams said he sees the Treasury market action as a result of solid economic prospects.
"What's driving it, in large part, is ... really a strong U.S. economy and a strong economic outlook fueled by big investments in AI and data centers and technology in general," he said. "So, I think it's not really about financial conditions affecting the economy. It's more about the economy affecting financial conditions."
Williams added that he sees inflation expectations as "well anchored" despite the run-up this year in prices linked to tariffs and the Iran war.
As New York Fed president, Williams is a permanent voter on the rate-setting Federal Open Market Committee.`,
    bodyJa: `ニューヨーク連銀のウィリアムズ総裁は水曜日、最近の米国債利回りの上昇は好調な経済の産物であり、市場の機能不全ではないと述べた。
中銀の政策担当者はＣＮＢＣのインタビューで、経済指標をまだ収集中であると付け加え、利上げが必要だと考えるかどうかについては明言しなかった。
ウィリアムズ氏はロウアー・マンハッタンのニューヨーク銀行本店からの「スコーク・ボックス」のインタビューで、CNBCのスティーブ・リースマンに対し、「様子見する必要があると思う」と語った。 「今後１、２年でインフレ率を確実に目標に戻すのに現在の金融政策が十分なのか、あるいはそのためにはさらなる措置が必要かどうか、現時点で明確な兆候はない」と述べた。
「最近の（インフレ）データはこの点に向けて心強いものとなっているが、やはり1、2カ月だけを見ることはできない。全体像を把握し、我々が持っているさまざまな情報をすべて検討する必要がある」と同氏は付け加えた。
金融市場における最近の最大の話題は、特に投資家がインフレと経済成長への期待を織り込む長期金利で、米国債利回りが数年ぶりの高水準に上昇したことだ。
こうした状況が続く中、トレーダーらは9月15～16日の会合でFRBが利上げするとの期待を高めており、CMEグループの指標によると水曜日午前の確率は約66％となっている。
投資家はインフレを懸念しているが、ウィリアムズ氏は米国債市場の動きは堅調な経済見通しの結果とみていると述べた。
「これを推進しているのは、主に…本当に強い米国経済と、AIやデータセンター、テクノロジー全般への巨額投資に支えられた堅調な経済見通しだ」と同氏は述べた。 「ですから、実際には金融状況が経済に影響を与えるということではなく、むしろ経済が金融状況に影響を与えるということだと思います。」
ウィリアムズ氏は、今年は関税やイラン戦争に関連して物価が上昇しているにもかかわらず、インフレ期待は「しっかりと安定している」と見ていると付け加えた。
ウィリアムズ氏はニューヨーク連銀総裁として、金利設定を行う連邦公開市場委員会の常任投票者である。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/02/new-york-feds-williams-says-yield-surge-due-to-strong-economic-prospects.html",
    publishedAt: "2026-09-02T15:56:13+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 2,
  },
  {
    id: "trump-to-meet-with-travel-industry-ceos-6c5dd140",
    title: "Trump to meet with travel industry CEOs as White House touts World Cup tourism boost",
    titleJa: "ホワイトハウスがワールドカップ観光促進を宣伝中、トランプ大統領が旅行業界のCEOらと会談",
    summaryJa: "ホワイトハウスが男子FIFAワールドカップの影響もあって夏の観光促進を強化しようとしている中、ドナルド・トランプ大統領は水曜日、国内最大手の航空会社、ホテルチェーン、旅行会社の幹部らと会談する予定だ。ホワイトハウス当局者によると、会合にはアメリカン航空、ブッキング・ホールディングス、シーザーズ・エンターテインメント、カーニバル、ハードロック・インターナショナル、ヒルトン、IHGホテルズ＆リゾーツ、マリオット・インターナショナル、MGMリゾーツ・インターナショナル、ラッフルズ＆フェアモント、ベネチアンの代表者が参加する予定だという。",
    bodyOriginal: `President Donald Trump will meet Wednesday with executives from some of the country’s largest airlines, hotel chains and travel companies as the White House looks to build on a summer tourism boost fueled in part by the men's FIFA World Cup.
The meeting will include representatives from American Airlines, Booking Holdings, Caesars Entertainment, Carnival, Hard Rock International, Hilton, IHG Hotels & Resorts, Marriott International, MGM Resorts International, Raffles & Fairmont and the Venetian, according to a White House official.
Transportation Secretary Sean Duffy, U.S. Travel Association President and CEO Geoff Freeman, White House FIFA World Cup task force Executive Director Andrew Giuliani and sports and entertainment executive Casey Wasserman, who is chairing the Los Angeles Olympics for 2028, are also expected to attend.
The meeting comes as the travel industry tries to sustain a World Cup-driven spending boost despite weaker international visitation and new barriers for some foreign travelers.
It also follows a World Cup that put Trump prominently alongside FIFA President Gianni Infantino, with whom the president has developed an unusually close relationship with Trump leading up to and during the tournament. Trump joined Infantino on stage after the World Cup final in New Jersey to present the championship trophy to Spain.
Infantino is now facing mounting criticism over an aborted plan involving FIFA's commercial rights.
“President Trump will meet with members of the U.S. Travel Association to celebrate the accomplishments that produced a historic summer travel season and delivered a strong boost to our local economies and small businesses,” White House spokeswoman Taylor Rogers said in a statement.
Spending on U.S. travel rose 6.2% from a year earlier in June to $122.1 billion, its strongest monthly reading in a year, according to the U.S. Travel Association. The group attributed the increase in part to peak summer demand and higher hotel rates in cities hosting World Cup matches.
But other indicators paint a more mixed picture of the summer travel economy. Travel prices rose 8.1% from a year earlier in June, outpacing the increase in overall spending, while air passenger volumes declined 1.3%, according to U.S. Travel. Overseas arrivals fell 1.8% in June and remained 4.3% lower for the year to date.
More recent data released Wednesday showed overseas arrivals fell 7% in July from a year earlier and were down 4.7% for the year to date. That outpaced the overall air passenger volume decline of 2.1% in July.
International travel to the U.S. has been a particular challenge for the industry. International arrivals to the U.S. fell 5.5% in 2025, Trump's first year back in the White House, with travel officials pointing to long visa interview waits, tighter immigration policies and concerns among some foreign travelers about entering the country.
The White House is expected to highlight steps it says helped accommodate World Cup visitors and improve the broader travel system, including faster visa processing, additional Customs and Border Protection staffing and changes to airport screening.
Ahead of the World Cup, the administration launched FIFA PASS, which allowed ticket holders who needed U.S. visas to obtain priority interview appointments.
The administration has also begun deploying $12.5 billion approved by Congress for a long-anticipated project to modernize the nation’s aging air traffic control system, replacing radar, telecommunications and other equipment at thousands of FAA sites.
Trump and the industry executives are also expected to discuss how to sustain travel demand after the World Cup and America’s 250th anniversary celebrations.
That effort comes as the U.S. Travel Association presses Washington to make the U.S. easier and less expensive for international tourists to visit. The group has opposed a new $250 Visa Integrity Fee and expanded social-media screening requirements for some foreign visitors, warning that higher costs and additional entry hurdles could undermine international travel growth. Trump, earlier this year, also more than tripled the price for international visitors to major U.S. national parks.
— Eamon Javers contributed to this report.`,
    bodyJa: `ホワイトハウスが男子FIFAワールドカップの影響もあって夏の観光促進を強化しようとしている中、ドナルド・トランプ大統領は水曜日、国内最大手の航空会社、ホテルチェーン、旅行会社の幹部らと会談する予定だ。
ホワイトハウス当局者によると、会合にはアメリカン航空、ブッキング・ホールディングス、シーザーズ・エンターテインメント、カーニバル、ハードロック・インターナショナル、ヒルトン、IHGホテルズ＆リゾーツ、マリオット・インターナショナル、MGMリゾーツ・インターナショナル、ラッフルズ＆フェアモント、ベネチアンの代表者が参加する予定だという。
ショーン・ダフィー運輸長官、米国旅行協会会長兼最高経営責任者（CEO）のジェフ・フリーマン氏、ホワイトハウスFIFAワールドカップ対策委員会事務局長のアンドリュー・ジュリアーニ氏、2028年ロサンゼルス五輪の委員長を務めるスポーツ・エンターテイメント部門幹部のケーシー・ワッサーマン氏も出席する予定だ。
この会合は、海外からの訪問者数が減少し、一部の外国人旅行者にとって新たな障壁となっているにもかかわらず、旅行業界がワールドカップによる支出増加を維持しようとしている中で行われた。
また、このワールドカップでは、トランプ大統領とFIFA会長のジャンニ・インファンティーノが目立つようになり、大会前から大会期間中にかけてトランプ大統領と異常に緊密な関係を築いてきた。ニュージャージー州でのワールドカップ決勝後、トランプ大統領はインファンティーノ選手とともにステージに上がり、スペイン代表に優勝トロフィーを授与した。
インファンティーノ氏は現在、FIFAの商業権に関わる計画が中止されたことで批判が高まっている。
ホワイトハウスのテイラー・ロジャース報道官は声明で、「トランプ大統領は米国旅行協会の会員と会談し、歴史的な夏の旅行シーズンを生み出し、地元経済と中小企業に力強い後押しをもたらした功績を祝う予定だ」と述べた。
米国旅行協会によると、6月の米国旅行支出は前年同月比6.2％増の1221億ドルとなり、月間としては1年ぶりの高水準となった。同グループは、この増加の一因として、夏のピーク時の需要と、ワールドカップの試合が開催される都市でのホテル料金の上昇を挙げている。
しかし、他の指標は夏の旅行経済のより複雑な状況を描いています。 USトラベルによると、6月の旅行価格は前年同月比8.1％上昇し、支出全体の増加を上回った一方、航空旅客数は1.3％減少した。海外からの到着者数は6月に1.8％減少し、年初から現在まで4.3％減少が続いている。
水曜日に発表されたより最近のデータによると、7月の海外入国者数は前年同月比7%減少し、年初からは4.7%減少した。これは７月の航空旅客数全体の２．１％減少を上回った。
米国への海外旅行は業界にとって特に課題となっています。トランプ大統領がホワイトハウスに復帰して1年目の2025年に米国への海外からの入国者数は5.5％減少したが、旅行関係者らはビザ面接の待ち時間が長く、入国管理政策の厳格化、一部の外国人旅行者の入国に対する懸念を指摘した。
ホワイトハウスは、ビザ処理の迅速化、税関・国境警備局の人員増員、空港検査の変更など、ワールドカップ来場者の受け入れと広範な旅行システムの改善に貢献したとしている措置を強調することが期待されている。
ワールドカップに先立ち、政府はFIFA PASSを開始し、米国ビザが必要なチケット所有者が優先的に面接の予約を取得できるようにした。
同政権はまた、国内の老朽化した航空交通管制システムを近代化し、数千のFAA拠点でレーダー、通信、その他の機器を置き換える長年待望のプロジェクトに議会が承認した125億ドルの投入を開始した。
トランプ大統領と業界幹部らは、ワールドカップやアメリカ建国250周年記念式典後の旅行需要をどのように維持するかについても話し合う予定だ。
この取り組みは、米国旅行協会がワシントンに対し、海外からの観光客が米国を訪問しやすく、より安価になるよう圧力をかけている中で行われた。同団体は、新たに250ドルのビザ完全性手数料を導入することや、一部の外国人旅行者に対するソーシャルメディア審査要件の拡大に反対しており、コストの上昇と入国ハードルの追加が海外旅行の成長を阻害する可能性があると警告している。トランプ大統領も今年初め、米国の主要国立公園への外国人観光客の料金を3倍以上に値上げした。
— Eamon Javers がこのレポートに貢献しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/02/trump-travel-industry-world-cup-tourism-airlines-hotels.html",
    publishedAt: "2026-09-02T15:16:25+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    readTime: 5,
  },
  {
    id: "uber-to-cut-10-of-workforce-in-bid-to-mo-d89cefab",
    title: "Uber to cut 10% of workforce in bid to move 'simpler and faster'",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Uber on Wednesday announced plans to slash 10% of its workforce in a move to consolidate management layers and trim costs.
"The changes we're making today are designed to do two things: make Uber simpler and faster, and create more capacity to invest in our future," CEO Dara Khosrowshahi wrote in an email to employees. That includes its previous plans to commit more than $10 billion to autonomous vehicles in the coming years.
The ride-hailing company's shares rose nearly 2% in morning trading.
Uber declined to comment on the number of jobs cut. The company had around 34,000 employees at the end of 2025, according to an annual filing.
Uber is the latest company to flatten management structures to speed up decision-making and improve efficiency. Tech giants like Google have made similar moves in recent years.
Khosrowshahi did not attribute the cuts to artificial intelligence, which has been responsible for a recent wave of tech layoffs.
The changes include cutting small teams consisting of one to two reports by nearly half and trimming employees seven steps away from the CEO by 20%. Khosrowshahi said Uber has outgrown many of these structures at its current size.
Uber is also combining more teams and concentrating more employees in hubs like New York and San Francisco. The company will allow about 1% to continue working remotely, Khosrowshahi said.
"A leaner organization will mean clearer ownership, faster decisions, and more time spent building rather than coordinating," he said.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/02/uber-to-cut-10percent-of-workforce-in-bid-to-move-simpler-and-faster.html",
    publishedAt: "2026-09-02T14:47:58+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "lords-call-for-ai-kill-switch-powers-in-e476eb54",
    title: "Lords call for AI 'kill switch' powers in UK",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Lords call for AI 'kill switch' powers in UK
- Published
A group of peers is calling for the British government to be able to deactivate powerful AI systems and switch off the country's data centres in the event of the tech posing a threat to national security.
It is led by the Liberal Democrats' Lord Tim Clement-Jones, who has proposed the measure as an amendment to the Cyber Security and Resilience Bill which is currently making its way through Parliament.
He said it would enable the building of a "vital safety net" and provide a democratically accountable means to "halt a runaway system before it can compromise our critical national infrastructure".
He added the tool would only ever be used as a last resort.
It is one of 65 amendments to the same bill that was debated this week.
Separately, on 8 September Labour MP Alex Sobel plans to introduce a AI Security Bill in Parliament, with the support of a campaign group called ControlAI.
If successful, the bill would make the UK the first G7 country to bring in legislation which would effectively halt the development of superintelligent AI.
Ultimately both proposals would require government approval in order to progress.
There is also an AI Kill Switch Act under consideration by lawmakers in the US.
There has been increased scrutiny of the impact of AI on cyber-security in recent weeks.
In July, a group of AI agents being tested by OpenAI were able to escape their test space, communicate together using a hidden message board and hack into another tech firm.
And Anthropic has restricted access to its cyber tool Mythos on the grounds that it is too powerful to fall into the wrong hands.
Last week, 100 US tech companies signed a joint open letter warning governments and organisations worldwide about the growing cyber threat posed by AI, saying "the window is closing" to improve.
A report from the UK's Centre for Long Term Resilience, external, published last week, identified hundreds of incidents of AI tools ignoring instructions, evading safeguards and deceiving humans, including AI agents deleting files without consent.
It said "loss of control" incidents had increased since its previous report in March and called for the government to introduce emergency powers to manage such incidents.
Lawmakers push for AI 'kill switch' after OpenAI models go rogue
- Published23 July
Time is running out for cyber security, warn top tech firms
- Published5 days ago
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cn9wv80j9w9o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-02T14:41:52+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/b07b/live/7b001b20-a6d7-11f1-acae-21b536d72e0e.jpg",
    readTime: 2,
  },
  {
    id: "faisal-islam-why-bond-market-wildfire-is-a7b0ebd7",
    title: "Faisal Islam: Why bond market wildfire is keeping world leaders up at night",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Faisal Islam: Why bond market wildfire is keeping world leaders up at night
- Published
It is not just the wildfire burning in the bond markets, with many countries facing interest rates at multi-decade highs.
The markets lending money to governments appear to be changing more fundamentally too.
Over summer, the message has been made clear: countries will have to pay more to borrow cash.
The immediate reason is the ongoing closure of the Strait of Hormuz and renewed hostilities between the US and Iran, which has pushed up inflation and, in turn, raised expectations of higher interest rates in the world's major economies.
Markets had assumed tensions would subside, and so too would oil and gas prices, ahead of the US midterm elections in November.
It was wishful thinking, based on the hope that US President Donald Trump would want the conflict in the Middle East resolved well before Americans go to the polls.
But that has not happened, leaving markets pricing in higher energy prices, a chronic Gulf crisis, higher inflation for longer - and so higher interest rates.
But that is only part of the story.
The bigger picture is rising demand for borrowing across the world - and not just from governments. Big tech companies are turning to the same bond markets to raise hundreds of billions of dollars for investments in AI data centres.
Over $219bn (£162bn) of debt has already been issued this year by the US "hyperscalers" such as Google, Amazon and Meta, nearly a third of it in currencies other than the dollar, including sterling.
The total issued last year was $93bn, while before that it averaged less than $40bn a year. Some expect the tech giants to raise $400-$500bn from the bond markets this year. These are staggering sums, raising competition in the market and pushing up the price for governments.
Looking east, there is another major borrower: Japan.
It has the highest debt burden, relative to its GDP, of the major economies and is the biggest single lender to the US government. Until recently its central bank's interest rate was zero, but that has crept up to help combat rising inflation.
As a result, its government bond yields have been pushed to 30-year highs. The declining value of the yen complicates things, but the bottom line is that there is a change afoot in the global flow of money.
Why are UK borrowing costs rising and what does it mean for me?
- Published5 hours ago
The biggest factor pushing up rates is the credibility of the borrowing plans set out by major countries. The increase is not based on fears about countries "going bankrupt".
But it is based on the brutal market equation that if a country wants to borrow more, and to do so without a credible plan, especially if there are doubts over the stability of a given government, it should expect to pay a higher rate.
Influential economists lean on different factors. Mohamed el-Erian told me the AI competition in bond markets was the biggest new factor.
Lord Jim O'Neill, says the recent action has been caused by uncertainty about US policy, and in particular efforts by the US Government to try to manage down surging yields.
This brings us to the UK. The profound and rolling instability of multiple prime ministers, chancellors, policy U-turns and the seeming inability to push through major structural change in this country over the past decades, has attracted a premium.
It was part of Sir Keir Starmer's strategy to try to take on boring reforms and offer markets stability in a bid to lower borrowing costs.
It was a shock to many in the markets that despite a landslide majority, Labour could not push through plans to cut Britain's welfare bill. This added to the ups and downs in the gilt markets - the trade in British government debt.
Actually, there are signs of green shoots in the underlying economy. Economic growth has been faster than peers so far in 2026, despite the energy price spike.
Measures of consumer confidence have ticked back up again. The PM is hoping to build on these signs to help rebuild the economy.
But the ongoing rout in global bond markets raises serious questions about the coherence and detail of Burnham's broader plans.
"More public control" and more support for those struggling with the cost of living sounds like a plan for more spending, while the former could turn off potential investors looking at the country.
Burnham's former economic adviser, Lord O'Neill, told me yesterday that the PM's 10-year plan, expected in November, needs to set out how he will tackle "excessive spending".
Lord O'Neill believes showing investors he can be decisive on the state pension or the welfare bill will give him breathing room to focus on his favoured infrastructure investments.
As interest rates tick up, the trade offs facing the prime minister only get more difficult.
Related topics
- Published14 February 2025
- Published15 hours ago`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.
Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c0rez9zegj5o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-02T13:20:11+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/47b0/live/d36b9110-a6cb-11f1-a291-b542ee92de7c.jpg",
    readTime: 2,
  },
  {
    id: "why-are-uk-borrowing-costs-rising-and-wh-d8a75d77",
    title: "Why are UK borrowing costs rising and what does it mean for me?",
    titleJa: "英国の借入コストが上昇しているのはなぜですか?それは私にとって何を意味しますか?",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Why are UK borrowing costs rising and what does it mean for me?
- Published
UK government borrowing costs have been rising, with some now at their highest level since 1998 as investors around the world worry about inflation.
Why is this happening and how does it affect you?
What's happening in the bond markets?
A bond is a bit like an IOU that can be traded in the financial markets.
Governments generally spend more than they raise in tax so they borrow money to fill the gap, usually by selling bonds to investors.
As well as eventually paying back the value of the bond, governments pay interest at regular intervals so investors receive a stream of future payments.
UK government bonds - known as "gilts" - are normally considered very safe, with little risk the money will not be repaid. They are mainly bought by financial institutions, such as pension funds.
Interest rates - known as the yield - on government bonds have been going up, with the yield on a 10-year bond at its highest level since 2008, while the yield on a 30-year bond is at its highest since 1998, meaning it costs the government more to borrow over the long term.
This comes at a sensitive time for new PM Andy Burnham and Chancellor John Healey as they prepare for their first budget on 28 October.
How does it affect me?
The government's ability to play with the public finances is limited by the so-called fiscal rules it has set for itself.
So, if it needs more money to pay back higher borrowing costs, it has less to spend on other things (under its self-imposed rules).
The possibility now looms of less support for households struggling with the cost of living, or of tax rises to pay for any support.
Importantly, these are choices – not certainties – so the chancellor might free up some money by spending less elsewhere.
Some may be wondering about the impact of higher gilt yields on the mortgage market, particularly after what followed Liz Truss's mini-Budget in September 2022.
Analysts believe that mortgage rates could go up on new fixed deals, as funding costs for lenders rise. But this is very different to 2022, when they shot up over a couple of days.
That speedy rise led to lenders quickly pulling deals while they tried to work out what interest rate to charge.
However, the market could be more favourable to anyone currently buying an annuity - a product from an insurance company that gives a retirement income for the rest of their life, bought only once.
Why are bond yields rising?
Yields are rising not just in the UK. Borrowing costs have also been going up in the US, Japan and Europe
Investors worry that events in the Middle East mean high oil prices, and rising inflation in general, will persist.
If inflation is high, then the purchasing power of fixed payments is diluted. So, investors demand a higher yield as compensation, and sell off their bonds.
Investors are also increasingly concerned about high levels of government borrowing, while there has been greater demand for loans from big tech companies hoping to fund investment in AI - driving up competition and increasing the interest rate lenders demand.`,
    bodyJa: `英国の借入コストが上昇しているのはなぜですか?それは私にとって何を意味しますか?
- 公開されました
英国政府の借入コストは上昇しており、世界中の投資家がインフレを懸念しているため、一部は現在1998年以来の高水準となっている。
なぜこのようなことが起こっているのでしょうか?また、それはあなたにどのような影響を与えますか?
債券市場で何が起こっているのでしょうか?
債券は、金融市場で取引できる借用書に似ています。
政府は通常、増税よりも支出の方が多いため、その不足分を埋めるために、通常は投資家に債券を販売することで借金をします。
最終的に債券の価値を返済するだけでなく、政府は一定の間隔で利息を支払うため、投資家は将来の支払いを次々と受け取ることができます。
「ギルト」として知られる英国国債は通常、返済不能になるリスクはほとんどなく、非常に安全であると考えられている。主に年金基金などの金融機関が購入している。
国債の金利（利回りとして知られる）は上昇しており、10年債の利回りは2008年以来の最高水準にある一方、30年債の利回りは1998年以来の最高となっており、長期的には政府の借り入れコストが増加していることを意味している。
これは、10月28日の最初の予算案の準備をしているアンディ・バーナム新首相とジョン・ヒーリー首相にとって、デリケートな時期に到来した。
それは私にどのような影響を与えますか?
政府が財政をいじる能力は、自ら定めたいわゆる財政ルールによって制限されている。
そのため、より高い借入コストを返済するためにより多くの資金が必要な場合、（自主ルールに基づいて）他のことに費やす必要が少なくなります。
生活費に苦しむ世帯への支援が減らされる可能性、あるいは支援のための増税が行われる可能性が目前に迫っている。
重要なのは、これらは確実なことではなく選択であるため、首相は他の支出を減らすことで資金を解放できるかもしれないということだ。
特に2022年9月のリズ・トラスのミニ予算案以降、金利回りの上昇が住宅ローン市場に与える影響について疑問に思っている人もいるかもしれない。
アナリストらは、貸し手の資金調達コストが上昇するため、新規の定期取引では住宅ローン金利が上昇する可能性があると考えている。しかし、これは数日間で急増した2022年とは大きく異なります。
この急速な上昇により、貸し手はどのくらいの金利を課すかを検討している間に、すぐに取引を中止することになりました。
しかし、市場は現在、一度だけ購入するだけで残りの生涯にわたって退職金が得られる保険会社の商品である年金を購入している人にとって、より有利な状況になる可能性があります。
なぜ債券利回りが上昇しているのでしょうか？
利回りが上昇しているのは英国だけではない。米国、日本、欧州でも借入コストが上昇している
投資家は、中東での出来事により原油価格の高騰やインフレ全般の上昇が続くのではないかと懸念している。
インフレ率が高い場合、定額支払いの購買力は希薄化します。そのため、投資家はその代償としてより高い利回りを要求し、債券を売り払います。
投資家は高水準の政府借入にも懸念を強めている一方、AIへの投資資金を期待する大手ハイテク企業からの融資需要が高まっており、競争が激化し、金利貸付業者の需要も高まっている。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cwyxydr7gv9o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-02T11:05:22+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/4da1/live/e95debf0-ce8a-11ef-87df-d575b9a434a4.jpg",
    readTime: 4,
  },
  {
    id: "berkshire-ceo-abel-says-alphabet-a-signi-f9d8ff06",
    title: "Berkshire CEO Abel says Alphabet a 'significant player' in AI after growing stake in Q2",
    titleJa: "バークシャーのアベル最高経営責任者（CEO）、アルファベットは第2四半期に出資を拡大した後、AI分野で「重要なプレーヤー」であると発言",
    summaryJa: "2026年5月2日にネブラスカ州オマハで開催されたバークシャー・ハサウェイ年次株主総会で講演するバークシャー・ハサウェイCEOのグレッグ・エイベル氏。CNBC",
    bodyOriginal: `Greg Abel, CEO of Berkshire Hathaway, speaks during the Berkshire Hathaway Annual Shareholders Meeting in Omaha, NE on May 2, 2026.
CNBC
Berkshire Hathaway CEO Greg Abel discussed with CNBC's Becky Quick on Wednesday the conglomerate's massive investment in Google-parent Alphabet, calling the tech giant a "significant player" in artificial intelligence.`,
    bodyJa: `2026年5月2日にネブラスカ州オマハで開催されたバークシャー・ハサウェイ年次株主総会で講演するバークシャー・ハサウェイCEOのグレッグ・エイベル氏。
CNBC
バークシャー・ハサウェイのグレッグ・エイベル最高経営責任者（CEO）は水曜日、CNBCのベッキー・クイックと、グーグルの親会社であるアルファベットへの複合企業の巨額投資について話し合い、テクノロジー大手を人工知能の「重要なプレーヤー」と呼んだ。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/02/berkshire-ceo-abel-says-alphabet-a-significant-player-in-ai-after-growing-stake-in-q2.html",
    publishedAt: "2026-09-02T11:00:51+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "mongodb-shares-tumble-despite-strong-ear-b378a9e6",
    title: "MongoDB shares tumble despite strong earnings on ‘disappointing’ news for investors",
    titleJa: "MongoDB株、好決算にもかかわらず投資家にとって「残念な」ニュースで下落",
    summaryJa: "投資家は、同社の Atlas マルチクラウド データベースが 5 四半期連続で同様の収益増加を示したことに失望した可能性が高いです。",
    bodyOriginal: `Investors were most likely disappointed by the company’s Atlas multi-cloud database seeing the same revenue growth for the fifth quarter in a row.`,
    bodyJa: `投資家は、同社の Atlas マルチクラウド データベースが 5 四半期連続で同様の収益増加を示したことに失望した可能性が高いです。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/mongodb-shares-tumble-despite-strong-earnings-on-disappointing-news-for-investors-5ee13c7b?mod=mw_rss_topstories",
    publishedAt: "2026-09-02T10:58:00+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.mktw.net/im-507834",
    readTime: 2,
  },
  {
    id: "stocks-that-rise-when-the-s-p-500-falls-cb9da115",
    title: "Stocks that rise when the S&P 500 falls are weirdly keeping up with the rest of Wall Street",
    titleJa: "S&P 500 が下落しても上昇する銘柄は、奇妙にもウォール街の残りの市場に追いついている",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `So-called ‘negative-beta’ stocks are thriving and offer a way to ride out volatility events, says one strategist.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/stocks-that-rise-when-the-s-p-500-falls-are-weirdly-keeping-up-with-the-rest-of-wall-street-0cf76f31?mod=mw_rss_topstories",
    publishedAt: "2026-09-02T10:55:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-77808724",
    readTime: 2,
  },
  {
    id: "chevron-will-expand-venezuela-operations-0b35e6dc",
    title: "Chevron will expand Venezuela operations, more than doubling production through $7 billion investment",
    titleJa: "シェブロン、ベネズエラ事業を拡大、70億ドルの投資で生産量を2倍以上に拡大",
    summaryJa: "シェブロンは水曜日、南米の国での地位を拡大する70億ドルの投資を通じて、今後5年間でベネズエラの石油生産を2倍以上に増やす計画を発表した。この石油メジャーは、ベネズエラの膨大な超重質原油埋蔵量のほとんどを含む地域であるオリノコベルトにさらに2つの油田を割り当てられた。シェブロンは、同国での生産量を現在の日量約28万バレルから60万バレルに増やす計画だ。",
    bodyOriginal: `Chevron announced plans Wednesday to more than double its oil production in Venezuela over the next five years through a $7 billion investment that expands its position in the South American nation.
The oil major has been assigned two additional oilfields in the Orinoco Belt, the region that contains most of Venezuela's vast extrea heavy crude reserves. Chevron plans to increase its production in the country to 600,000 barrels per day compared to around 280,000 bpd currently.
Chevron is the only U.S. oil major active in Venezuela through joint ventures with state-owned oil company PDVSA.
"With improved terms and additional acreage, we are strengthening a portfolio that we believe can deliver attractive low-cost oil growth, support energy supply and create differentiated long-term value," Chevron CEO Mike Wirth said in a statement.
This is breaking news. Please refresh for updates.`,
    bodyJa: `シェブロンは水曜日、南米の国での地位を拡大する70億ドルの投資を通じて、今後5年間でベネズエラの石油生産を2倍以上に増やす計画を発表した。
この石油メジャーは、ベネズエラの膨大な超重質原油埋蔵量のほとんどを含む地域であるオリノコベルトにさらに2つの油田を割り当てられた。シェブロンは、同国での生産量を現在の日量約28万バレルから60万バレルに増やす計画だ。
シェブロンは、国有石油会社PDVSAとの合弁事業を通じてベネズエラで活動している唯一の米国石油メジャーである。
シェブロンのマイク・ワース最高経営責任者（CEO）は声明で、「条件の改善と作付面積の増加により、魅力的な低コストの石油成長を実現し、エネルギー供給を支援し、差別化された長期的価値を生み出すことができると確信するポートフォリオを強化している」と述べた。
これは速報です。更新を確認するには更新してください。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/02/chevron-venezuela-operations.html",
    publishedAt: "2026-09-02T10:48:21+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "bank-of-canada-mulls-trump-tariff-shock-91e5f920",
    title: "Bank of Canada mulls Trump tariff shock as it readies interest rates decision",
    titleJa: "カナダ銀行、金利決定の準備中、トランプ大統領の関税ショックを検討",
    summaryJa: "米国との通商交渉決裂に伴う報復関税の猛攻のおかげで、成長鈍化とインフレ高進の見通しにより、カナダ銀行の仕事は複雑になっている。この影響は中銀にも影響を与えると予想されており、中銀は水曜東部時間午前９時４５分にカナダ金利に関する最新の決定を発表する予定だ。",
    bodyOriginal: `The Bank of Canada's job has been complicated by the prospect of weaker growth and higher inflation, thanks to the retaliatory tariff blitz that followed the collapse of trade talks with the U.S.
The impact is also expected to guide the BoC, which will publish its latest decision on Canadian interest rates at 9:45 a.m. ET on Wednesday.
U.S. President Donald Trump's new trade war against the U.S.' second-biggest trading partner includes 50% tariffs on a wide range of Canadian goods. Canada has announced retaliatory tariffs, due to take effect on Sept. 8 and impacting more than $20 billion in goods.
"We expect the BoC to keep a cautious tone, reiterating that uncertainty is high and that it will 'continue to assess the strength of the Canadian economy and the outlook for inflation, and is prepared to adjust monetary policy as needed'," Bank of America economist Carlos Capistran wrote in a Tuesday note, citing previous BoC guidance.
"Trade uncertainty has risen as the trade war with the US has just escalated, which will likely weigh on growth, and core inflation is at the 2% target. We expect only a direct impact from tariffs on inflation, without second-round effects."
The BoC left its benchmark interest rate unchanged at 2.25% for a sixth consecutive decision in July, down from a recent peak of 5%. The Canadian economy grew by 0.8% in the second quarter, strengthening from 0.1% in the first three months of the year.
Meanwhile, the most recent figures show headline consumer inflation accelerated to 3% year-on-year in July, up from 2.8% in June, prompting traders to price three BoC rate hikes over the coming 12 months. But BoA expects the BoC to keep rates on hold over the coming months.
"A firmer 2Q and above-target headline inflation argue for caution, but the escalation of the trade war with the US is the more consequential development for monetary policy, in our view," said Capistran.
Goldman Sachs forecasts a 0.3 percentage point headwind to GDP growth and 0.3 percentage point boost to inflation in Canada as a result of Trump's tariffs.
"These downside growth concerns and continued volatility in trade tensions will likely keep the BoC on hold for the foreseeable future," the bank wrote in an Aug. 28 note.`,
    bodyJa: `米国との通商交渉決裂に伴う報復関税の猛攻のおかげで、成長鈍化とインフレ高進の見通しにより、カナダ銀行の仕事は複雑になっている。
この影響は中銀にも影響を与えると予想されており、中銀は水曜東部時間午前９時４５分にカナダ金利に関する最新の決定を発表する予定だ。
ドナルド・トランプ米大統領による米国に対する新たな貿易戦争」 2番目に大きな貿易相手国には、幅広いカナダ製品に50％の関税が課されている。カナダは9月8日に発効予定で200億ドル以上の商品に影響を与える報復関税を発表した。
バンク・オブ・アメリカのエコノミスト、カルロス・カピストラン氏は火曜日のメモで、「中銀は不確実性が高く、『引き続きカナダ経済の強さとインフレ見通しを評価し、必要に応じて金融政策を調整する用意がある』と繰り返し、慎重なトーンを維持すると予想している」と述べ、これまでの中銀のガイダンスを引用した。
「米国との貿易戦争が激化したばかりで貿易の不確実性が高まっており、成長の重しとなる可能性が高く、コアインフレ率は２％の目標に達している。関税によるインフレへの直接的な影響のみが予想され、二次的な影響はないと予想している。」
中銀は7月に6回連続で政策金利を2.25％に据え置き、最近の最高値である5％から引き下げた。カナダ経済は第２・四半期に０．８％成長し、今年最初の３カ月間の０．１％から成長した。
一方、最新の統計によると、7月の総合消費者インフレ率は6月の2.8％から前年同月比3％に加速しており、トレーダーらは今後12カ月間に中銀の利上げを3回実施する可能性を織り込んでいる。しかし中銀は、中銀が今後数カ月間金利を据え置くと予想している。
キャピストラン氏は「第２四半期の堅調さや総合インフレ率が目標を上回っていることは警戒を要するが、われわれの見解では、米国との貿易戦争の激化の方が金融政策にとってより重大な展開だ」と述べた。
ゴールドマン・サックスは、トランプ大統領の関税の結果、カナダの国内総生産（ＧＤＰ）成長率には０．３％ポイントの逆風があり、インフレ率は０．３％ポイント押し上げられると予想している。
同銀行は8月28日のメモで「こうした成長の下振れ懸念と貿易摩擦の不安定性の継続により、中銀は当面、政策を保留する可能性が高い」と述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/02/bank-canada-rate-decision-trump-tariffs.html",
    publishedAt: "2026-09-02T10:29:51+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 2,
  },
  {
    id: "10-year-u-s-treasury-yield-hits-highest-4b92243d",
    title: "10-year U.S. Treasury yield hits highest level since November 2023 as global bond sell-off continues",
    titleJa: "世界的な債券下落が続く中、10年米国債利回りが2023年11月以来の高水準に",
    summaryJa: "インフレと債務懸念が世界の政府借入コストを圧迫する中、水曜日の米国債利回りは全般的に上昇した。住宅ローン、自動車ローン、クレジットカード債務の主な指標である10年物財務省証券の利回りは1ベーシスポイント上昇し4.81%となった。上昇率も４．８１４％と２０２３年１１月以来の高水準となった。",
    bodyOriginal: `U.S. Treasury yields were broadly higher on Wednesday as inflation and debt concerns pressured global government borrowing costs.
The yield on the 10-year Treasury note — the main benchmark for mortgages, auto loans and credit card debt — was 1 basis point higher at 4.81%. It also reached 4.814%, its highest level since November 2023.
The 30-year Treasury yield was 2 basis points higher at 5.286%, while the yield on the 2-year Treasury note was near flat at 4.4%.
One basis point equals 0.01%, and yields and prices move inversely.
Yields were also higher globally as investors continued to demand a greater premium to take on medium- and long-term government debt.
Thee latest escalation in tensions in the Middle East has renewed fears about inflation proving entrenched, while traders increasingly expect interest rate hikes this month in the U.S. and beyond.
"Investors are now staring directly into the eyes of an inflation monster that threatens to become stronger unless action is taken. Central banks typically raise interest rates to fight inflation, and market expectations for the scale of rate hikes continues to evolve," Dan Coatsworth, head of markets at AJ Bell, said in a Wednesday note.
"Bonds are reaching the point where certain investors may seek to lock in high yields caused by the latest market volatility. What might be holding them back is an expectation that yields could get even higher if rates go up fast and hard, meaning certain bond investors could be playing a waiting game before piling in."`,
    bodyJa: `インフレと債務懸念が世界の政府借入コストを圧迫する中、水曜日の米国債利回りは全般的に上昇した。
住宅ローン、自動車ローン、クレジットカード債務の主な指標である10年物財務省証券の利回りは1ベーシスポイント上昇し4.81%となった。上昇率も４．８１４％と２０２３年１１月以来の高水準となった。
30年国債利回りは5.286％と2ベーシスポイント上昇したが、2年国債利回りは4.4％でほぼ横ばいとなった。
1ベーシスポイントは0.01%に相当し、利回りと価格は反比例します。
投資家が中長期国債の引き受けに対してより高いプレミアムを要求し続けたため、利回りも世界的に上昇した。
最近の中東情勢の緊張激化により、インフレが定着するのではないかとの懸念が再燃する一方、トレーダーらは米国内外で今月利上げが行われるとの期待を強めている。
ＡＪベルの市場責任者、ダン・コーツワース氏は水曜日のノートで「投資家は今、行動を起こさなければさらに強まる恐れがあるインフレという怪物の目を真っ直ぐに見つめている。中央銀行は通常、インフレに対抗するために金利を引き上げるが、利上げ規模に対する市場の予想は変わり続けている」と述べた。
「債券市場は、最近の市場のボラティリティーによって一部の投資家が高利回りを確保しようとする段階に達しつつある。債券投資を阻んでいる可能性があるのは、金利が急速かつ大幅に上昇すれば利回りがさらに高くなる可能性があるという期待だ。つまり、一部の債券投資家は積み重なる前に待ちのゲームをしている可能性がある。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/02/bond-yields-treasurys-inflation.html",
    publishedAt: "2026-09-02T10:01:31+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 2,
  },
  {
    id: "zelenskyy-says-airlines-should-avoid-rus-1d5a8fdb",
    title: "Zelenskyy says airlines should avoid Russian airspace as Ukraine expands drone operations",
    titleJa: "ゼレンスキー大統領、ウクライナがドローン運用を拡大する中、航空会社はロシアの領空を避ける必要があると発言",
    summaryJa: "ウクライナのウォロディミル・ゼレンスキー大統領は、キエフがドローン運用を拡大する中、航空会社に対しロシア領空を避けるよう要請した。ゼレンスキー大統領は火曜日の夜の演説で、「ロシアの空域を使用するすべての航空会社、すべての保険会社、そしてロシアの主要空港を依然として使用しているすべての人に警告したい。ロシアの空域は完全に安全ではなくなりつつある」と語った。",
    bodyOriginal: `Ukrainian President Volodymyr Zelenskyy has urged airlines to avoid Russian airspace as Kyiv expands its drone operations.
"We want to warn every airline that uses Russian airspace, every insurer, and everyone who still uses Russia's key airports: Russian airspace is becoming completely unsafe," Zelenskyy said Tuesday in his evening address.
His warning follows Ukraine stepping up its long-range drone strikes on Russian oil refineries and logistics hubs, as it seeks to raise the cost of the war for Moscow.
Ukraine's president said it is important that airlines currently flying into airports in Moscow, St. Petersburg and other key destinations in Russia take note of the elevated airspace risk.
Zelenskyy insisted that civilian aviation would not be in danger, before adding: "There will simply be drones in Russia's skies on a scale that has to be taken into account."
Most Western commercial airlines do not fly into Russian airspace due to Moscow's full-scale invasion of Ukraine in February 2022.
Some Chinese and Gulf state carriers, including Qatar and the United Arab Emirates, continue to use Russian airspace, however.
In response to Zelenskyy's comments, Russian President Vladimir Putin said the threat amounted to a declaration of "state terrorism." He added that the Kremlin would continue intensifying its own attacks on Ukraine.
Speaking to reporters at the Shanghai Cooperation Organisation summit in Kyrgyzstan on Tuesday, Putin also dismissed the idea of resuming negotiations, saying: "You don't negotiate with terrorists."
'Massive strikes'
Ukraine closed its airspace to civilian aircraft after Russia launched its full-scale invasion.
"The Ministry of Foreign Affairs of Ukraine and our other institutions will provide international organizations with full information about the dangers in Russian airspace. Drone-infested skies are no place for civilian aviation," Zelenskyy said.
Earlier in the week, Russia's Defense Ministry said it is planning "massive strikes" on Ukraine's energy infrastructure, amplifying fears of another winter assault.
Russian forces have ramped up missile strikes on Ukrainian cities as Kyiv faces a shortage of air defense equipment.`,
    bodyJa: `ウクライナのウォロディミル・ゼレンスキー大統領は、キエフがドローン運用を拡大する中、航空会社に対しロシア領空を避けるよう要請した。
ゼレンスキー大統領は火曜日の夜の演説で、「ロシアの空域を使用するすべての航空会社、すべての保険会社、そしてロシアの主要空港を依然として使用しているすべての人に警告したい。ロシアの空域は完全に安全ではなくなりつつある」と語った。
同氏の警告は、ウクライナがモスクワの戦費を増額しようとして、ロシアの製油所や物流拠点への長距離無人機攻撃を強化していることを受けてのことだ。
ウクライナ大統領は、現在モスクワ、サンクトペテルブルク、その他ロシアの主要目的地の空港に就航している航空会社が空域リスクの高まりに留意することが重要だと述べた。
ゼレンスキー大統領は、民間航空は危険にさらされないと主張した上で、「ロシアの空には考慮すべき規模の無人機が飛来するだけだ」と付け加えた。
2022年2月にモスクワがウクライナに本格侵攻するため、ほとんどの西側民間航空会社はロシア領空に就航していない。
しかし、カタールやアラブ首長国連邦を含む一部の中国および湾岸国営航空会社はロシアの空域を使用し続けている。
ゼレンシキー氏の発言に対し、ロシアのウラジーミル・プーチン大統領は、この脅威は「国家テロ」の宣言に等しいと述べた。同氏は、クレムリンは引き続きウクライナへの攻撃を強化すると付け加えた。
火曜日にキルギスで開催された上海協力機構首脳会議で記者団に対し、プーチン大統領はまた、「テロリストとは交渉しない」と述べ、交渉再開の考えを否定した。
「大規模なストライキ」
ロシアが本格的な侵攻を開始した後、ウクライナは民間航空機の通行を禁止した。
ゼレンシキー大統領は「ウクライナ外務省と他の機関は、ロシア領空の危険性に関する完全な情報を国際機関に提供するつもりだ。ドローンが蔓延する空は民間航空の居場所ではない」と述べた。
今週初め、ロシア国防省はウクライナのエネルギーインフラへの「大規模な攻撃」を計画していると発表し、再び冬季攻撃への懸念が増幅した。
キエフが防空装備の不足に直面しているため、ロシア軍はウクライナの都市へのミサイル攻撃を強化している。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/02/ukraine-zelenskyy-airlines-russia-drone-war.html",
    publishedAt: "2026-09-02T09:56:26+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "europe-s-largest-airline-warns-of-jet-fu-5bba80ee",
    title: "Europe’s largest airline warns of jet-fuel prices at $140 this winter as it cuts capacity",
    titleJa: "ヨーロッパ最大の航空会社、供給削減で今冬のジェット燃料価格が140ドルになると警告",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Ryanair on Wednesday reduced its winter capacity to mitigate its exposure to unhedged jet fuel prices of $140 per barrel, illustrating the real-economy impact of the energy crisis.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/europes-largest-airline-warns-of-jet-fuel-prices-at-140-this-winter-as-it-cuts-capacity-ba7821a9?mod=mw_rss_topstories",
    publishedAt: "2026-09-02T09:36:00+00:00",
    category: "エネルギー",
    imageUrl: "https://images.mktw.net/im-253188",
    readTime: 2,
  },
  {
    id: "australia-posts-second-quarter-growth-of-b6371247",
    title: "Australia posts second-quarter growth of 2.1%, beating expectations",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Australia's economic growth beat expectations in the second quarter, expanding 2.1% year on year, data released Wednesday showed.
Economists polled by Reuters had estimated growth at 1.8%, while the economy had expanded by 2.5% in the prior quarter.
On a quarter-on-quarter basis, GDP rose 0.4%, also marginally surpassing expectations of 0.3%. The slight growth was driven by private demand and mining exports.
The Australian Bureau of Statistics said in its statement that households continued to behave cautiously, with spending remaining subdued and rising just 0.4%. Households reduced fuel consumption due to elevated prices owed to the Middle East conflict, and cut domestic and international travel.
The stronger-than-expected GDP print will allow the Reserve Bank of Australia room to go ahead with its policy tightening as it seeks to curb inflation.
At its last meeting, some RBA board members had considered the case for additional tightening, saying that inflation in the country was still too high.
Australia's July inflation reading surpassed expectations, coming in at 3.5% compared to the 3.3% forecast.
The RBA forecast that inflation would decline only gradually, returning to around the midpoint of its 2%-3% target range by late 2027.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/02/australia-gdp-q2-middle-east-rba.html",
    publishedAt: "2026-09-02T03:05:14+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 2,
  },
  {
    id: "trump-says-u-s-is-not-forcing-iran-to-ne-1a884c6e",
    title: "Trump says U.S. is not forcing Iran to negotiate after fresh round of strikes",
    titleJa: "トランプ大統領、新たな攻撃後も米国はイランに交渉を強制していないと発言",
    summaryJa: "米軍が火曜日にイランに対する新たな攻撃を完了したことを受け、ドナルド・トランプ大統領は「イランを交渉のテーブルにつかせるつもりはない」と述べた。トランプ大統領は真実ソーシャルへの投稿で、米国がホルムズ海峡を「ほぼ完全に支配」していると繰り返し述べ、イラン経済は崩壊しつつあると付け加えた。",
    bodyOriginal: `President Donald Trump said he was "not trying to force Iran to the bargaining table," as U.S. forces completed a fresh round of strikes against the Middle Eastern country on Tuesday stateside.
In a Truth Social post, Trump reiterated that the U.S. has "almost total control" over the Strait of Hormuz, while adding that Tehran's economy was collapsing.
He said that Iran was just "playing out the inevitable" and asked "When are the Iranian people going to rise up and fight?"
In a post on X, the U.S. Central Command said that it struck air defense and communications sites, and radar systems in Iran, in retaliation against the "recent attempted attacks" by the country against commercial shipping in the Strait of Hormuz and against American service members.
Tehran has responded to American strikes, targeting U.S. ally Jordan. The country's armed forces said that it was targeted by a missile attack that originated from Iranian territory.
A spokesperson for Jordan's armed forces said on X that 10 of 13 missiles were intercepted by the country's air defense systems, with the three fell in remote areas. No injuries or deaths were reported.
Bahrain's interior ministry also announced "an alert of potential threat" early Wednesday local time, urging citizens to head to the nearest safe location. The nature of the threat was not immediately clear.
Oil prices continued to rise in Asia trading Wednesday following the strikes, after international benchmark Brent rose 4.5% to $94.52 a barrel on Tuesday, while U.S. West Texas Intermediate futures added about 5% to $90.03 per barrel, hitting levels not seen since July 24.
Trump earlier called the latest U.S. strikes "large and powerful," and threatened further military action if Tehran retaliated against what he called a "very justified attack."
Iranian forces on Monday stateside had hit a U.S. base in Jordan after American forces attacked rocket launchers on Iran's Larak Island the day before. Washington claimed that the launchers were preparing to fire rockets carrying sea mines into the strait.
The Sunday strikes were the first time that the U.S. and Iran traded attacks in about a month, and after the Trump administration said it was launching an "economic D-Day" on Tehran's backers.`,
    bodyJa: `米軍が火曜日にイランに対する新たな攻撃を完了したことを受け、ドナルド・トランプ大統領は「イランを交渉のテーブルにつかせるつもりはない」と述べた。
トランプ大統領は真実ソーシャルへの投稿で、米国がホルムズ海峡を「ほぼ完全に支配」していると繰り返し述べ、イラン経済は崩壊しつつあると付け加えた。
同氏は、イランは「避けられない事態を演じている」だけだと述べ、「イラン国民はいつ立ち上がって戦うのか」と尋ねた。
米中央軍はＸへの投稿で、ホルムズ海峡の商船や米軍人に対する同国による「最近の攻撃未遂」への報復として、イランの防空・通信施設やレーダーシステムを攻撃したと述べた。
イラン政府は米国の同盟国ヨルダンを標的とした米国の攻撃に応じた。同国軍は、イラン領土からのミサイル攻撃の標的となったと発表した。
ヨルダン国軍の報道官はＸに対し、ミサイル１３発のうち１０発が同国の防空システムに迎撃され、３発は遠隔地に落下したと述べた。負傷者や死亡者は報告されていない。
バーレーン内務省も現地時間水曜早朝に「潜在的な脅威に関する警報」を発表し、国民に最寄りの安全な場所に向かうよう呼び掛けた。脅威の性質はすぐには明らかになっていません。
国際指標であるブレント原油先物が火曜日に4.5％上昇して1バレル当たり94.52ドルとなったことを受け、ストライキ後の水曜日のアジア取引では原油価格が上昇を続け、一方米国ウェスト・テキサス・インターミディエイト先物は約5％上昇して1バレル当たり90.03ドルとなり、7月24日以来の水準に達した。
トランプ大統領はこれに先立ち、米国による最近の攻撃は「大規模で強力」だとし、イラン政府が「非常に正当な攻撃」と呼んだものに報復した場合にはさらなる軍事行動を起こすと脅した。
前日に米軍がイランのララック島でロケットランチャーを攻撃したことを受け、イラン軍は月曜日、ヨルダン国内の米軍基地を攻撃した。米国政府は、発射装置が海峡に機雷を搭載したロケット弾を発射する準備をしていたと主張した。
日曜の空爆は、米国とイランが攻撃を交換するのは約１カ月ぶりで、トランプ政権がイラン支援者に対して「経済的Ｄデー」を開始すると発表したことを受けてのものだった。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/02/us-iran-war-trump-hormuz-irgc-jordan-bahrain.html",
    publishedAt: "2026-09-02T01:34:27+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "apple-maps-renames-lake-ontario-as-lake-97c41feb",
    title: "Apple Maps renames Lake Ontario as Lake America after Trump order",
    titleJa: "トランプ大統領の命令を受け、アップルマップがオンタリオ湖の名前をアメリカ湖に変更",
    summaryJa: "トランプ大統領の命令を受け、アップルマップがオンタリオ湖の名前をアメリカ湖に変更- 公開されました",
    bodyOriginal: `Apple Maps renames Lake Ontario as Lake America after Trump order
- Published
Apple has renamed Lake Ontario as Lake America on its maps service app, after an order from US President Donald Trump as part of Washington's trade spat with Canada.
The change was made for US-based users, while those in Canada will continue to see Lake Ontario displayed. The BBC has contacted Apple for comment.
The iPhone maker's move follows Trump's executive order to change the lake's name after trade talks between the neighbouring countries collapsed late last month, with Washington imposing new 50% tariffs on $20bn (£14.8bn; C$28bn) worth of Canadian goods.
Rival technology giant Google made a similar switch for its users in the US in recent days, leading to backlash on social media.
Canada has responded to Washington's levies, saying it will implement "dollar for dollar" counter-tariffs.
Prime Minister Mark Carney's administration had walked away from the trade negotiations, due to what his office has called unacceptable demands.
Carney told the Trump administration to "start being serious" and stop trying to be tough before discussions between the sides can restart.
Trump's executive order gives the US Department of the Interior 30 days to update the change with the Geographic Names Information Service - the official database of what places are called in the country.
Apple was specifically urged by Trump to rename Lake Ontario on its Maps platform to comply with the executive order signed, according to US Interior Secretary Doug Burgum
The president has also posted several AI-generated videos on social media, including a clip of him kicking over a Lake Ontario sign and replacing it with another that says "Welcome to Lake America".
At the lake itself, Canada has installed a new sign with the words "Lake Ontario. Now and Always".
"Just in case President Trump or anyone else forgets, we've set up this sign to remind them, it's Lake Ontario, now and forever," Ontario Premier Doug Ford said.
The names of four of the five Great Lakes - Ontario, Huron, Michigan and Erie - come from indigenous words.
Lake Superior was named after an anglicised French word.
Lake Ontario, the smallest of the Great Lakes, sits between the Canadian province and the US state of New York.
Not all map providers have adopted the new name.
MapQuest, a free web mapping service, said "we're not changing it" in a short Facebook post on Friday.
The platform rose to the top of the most-downloaded free applications earlier this week on the Canadian Apple App Store.
Last week, Google said in a blog post that it had changed the name on its Maps service for US-based users.
The Maps app is updated to "reflect name changes in official government sources", meaning that users in the US will see Lake America while those in Canada will see Lake Ontario, Google said.
The company made a similar decision in 2025 to re-designate the Gulf of Mexico after Trump declared it would be called the Gulf of America.
Google was sued by Mexico over allegedly ignoring the country's requests not to rename the Gulf for US users.
Apple also changed the name of the Gulf of Mexico to the Gulf of America on its maps service for US users.
Related topics
- Published2 days ago
- Published11 February 2025`,
    bodyJa: `トランプ大統領の命令を受け、アップルマップがオンタリオ湖の名前をアメリカ湖に変更
- 公開されました
アップルは、ワシントンとカナダの貿易紛争の一環としてのドナルド・トランプ米大統領の命令を受けて、自社の地図サービスアプリ上でオンタリオ湖の名前をレイク・アメリカに変更した。
この変更は米国に拠点を置くユーザー向けに行われましたが、カナダのユーザーには引き続きオンタリオ湖が表示されます。 BBCはAppleにコメントを求めた。
iPhoneメーカーのこの動きは、近隣諸国間の通商交渉が先月末決裂し、ワシントンが200億ドル（148億ポンド、280億カナダドル）相当のカナダ製品に新たに50％の関税を課したことを受けて、湖の名前を変更するというトランプ大統領の大統領令に続くものである。
ライバルのテクノロジー大手グーグルもここ数日、米国のユーザー向けに同様の方針転換を行い、ソーシャルメディアで反発を招いた。
カナダは米国の課税に応じ、「ドルにはドル」の対抗関税を導入すると述べた。
マーク・カーニー首相の政権は、同政権が受け入れがたい要求と呼んでいる内容を理由に通商交渉から撤退していた。
カーニー氏はトランプ政権に対し、双方の協議が再開される前に「真剣になり始め」、強硬姿勢をやめるよう求めた。
トランプ大統領の大統領令は、米国内務省に対し、国内の地名を示す公式データベースである地名情報サービスに変更を更新するための30日間の猶予を与えている。
ダグ・バーガム米国内務長官によると、Appleはトランプ大統領から、署名された大統領令に従うため、マッププラットフォーム上でオンタリオ湖の名前を変更するよう特に促されたという。
大統領はまた、AIが生成したいくつかの動画をソーシャルメディアに投稿しており、その中にはオンタリオ湖の標識を蹴り倒し、「アメリカ湖へようこそ」と書かれた標識に差し替える映像も含まれている。
カナダは湖自体に「オンタリオ湖。今もこれからも」と書かれた新しい標識を設置した。
オンタリオ州のダグ・フォード首相は、「トランプ大統領や他の誰かが忘れた場合に備えて、彼らに思い出してもらうためにこの看板を設置した。今も永遠もオンタリオ湖だ」と語った。
五大湖のうちオンタリオ、ヒューロン、ミシガン、エリーの 4 つの湖の名前は、先住民の言葉に由来しています。
スペリオル湖の名前は、英語化されたフランス語にちなんで付けられました。
五大湖の中で最小のオンタリオ湖は、カナダの州と米国のニューヨーク州の間にあります。
すべての地図プロバ​​イダーが新しい名前を採用しているわけではありません。
無料のウェブ地図サービスであるマップクエストは金曜日、フェイスブックへの短い投稿で「サービスを変更するつもりはない」と述べた。
このプラットフォームは今週初め、カナダの Apple App Store で最もダウンロードされた無料アプリケーションのトップに躍り出ました。
Googleは先週ブログ投稿で、米国を拠点とするユーザー向けのマップサービスの名前を変更したと発表した。
Googleによると、地図アプリは「政府の公式情報源における名前の変更を反映」するために更新され、米国のユーザーにはアメリカ湖が表示され、カナダのユーザーにはオンタリオ湖が表示されることになるという。
同社はトランプ大統領がメキシコ湾をアメリカ湾と呼ぶと宣言したことを受け、2025年にもメキシコ湾を再指定するという同様の決定を下した。
Googleは、米国ユーザー向けにGulfの名前を変更しないよう求める同国の要請を無視したとして、メキシコから訴訟を起こされた。
アップルはまた、米国ユーザー向けの地図サービスでメキシコ湾の名前をアメリカ湾に変更した。
関連トピック
- 2 日前に公開
- 2025 年 2 月 11 日公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cddvyyz0e47o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-02T01:32:24+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/b1d7/live/cd35b7f0-a66a-11f1-b883-c157b282021f.jpg",
    readTime: 4,
  },
  {
    id: "fake-10-downing-street-listing-exposes-u-d6ba4995",
    title: "Fake 10 Downing Street listing exposes 'unfit' Booking.com, says consumer group",
    titleJa: "ダウニング街10番街の偽リストでBooking.comが「不適当」であることが暴露されると消費者団体が指摘",
    summaryJa: "ダウニング街10番街の偽リストでBooking.comが「不適当」であることが暴露されると消費者団体が指摘- 公開されました",
    bodyOriginal: `Fake 10 Downing Street listing exposes 'unfit' Booking.com, says consumer group
- Published
Consumer group Which? says it was able to create a fake listing for 10 Downing Street on travel giant Booking.com.
The UK watchdog said its researchers were able to book a bogus stay at the prime minister's address - as well as leave a fake review noting "hanging out" with resident mouser Larry the cat as a highlight.
It said despite clear signs it was fake, Booking.com did not remove the listing until two months after it was uploaded.
"This limited test is not a true reflection of the experience of millions of listings or reviews published on our platform," a Booking.com spokesperson told the BBC.
They said because Which?'s listing was not "live" on its site across the two months it was present, "some of our automatic fraud controls were not triggered to completely remove the closed listing".
People could only see the listing and request to book the property during a 20-minute window opened by Which? so its researchers could try to book it.
Booking.com's spokesperson added "a range of checks and verification measures" help secure the site, and technologies such as AI "help us detect and remove the majority of fraudulent listings within 24 hours".
But Which? Travel editor Rory Boland said its checks had been shown to be "unfit for purpose".
"If Booking.com's so-called sophisticated AI systems can't spot that 10 Downing Street is not a holiday rental, then it's no wonder scammers can exploit the platform so easily," he said.
"It would be laughable that we were able to list the UK's most famous address for rent, if the consequences weren't so devastating for holidaymakers, who risk losing thousands of pounds to bogus listings and phishing links."
It is not the first time the site has faced criticism over its security efforts and customer service.
'Prime city centre location'
Which?'s listing, uploaded to Booking.com on 18 June, advertised a "1 bedroom apartment in the heart of London".
It used images of the iconic 10 Downing Street front door, listed at its address - with a description referring to the one bedroom space as "a prime city centre location".
In the 20 minutes that Which? permitted customers to request a stay at its fake 10 Downing Street property, it said 14 people asked to do so.
Only the booking request from a person known to be a Which? researcher was accepted.
The watchdog's team also sent the researcher a message within Booking.com's system asking them to click an external link to confirm their payment details - something booking sites typically block to prevent customers being scammed.
But Which? said that in this instance, Booking.com did not flag or remove the external link it sent.
Booking.com said it had "visible reminders to not click on links customers are not confident about, and booking confirmations also provide further guidance, including details of the agreed payment schedule".
The fake review left by Which? also seemingly passed the site's checks, despite bearing all the hallmarks of a joke.
"It was unbelievable that Booking.com let us stay at 10 Downing Street - the home of the UK PM!" it said.
The listing itself was removed by the platform on 27 August.
Some customers have previously accused the firm of failing to protect them from falling victim to cyber-criminals.
"Fraud affects many industries, and 80% of UK adults believe scams are becoming more sophisticated," said Booking.com's spokesperson - adding it was continuing to strengthen its defences in the face of this challenge.
Which?, meanwhile, said more should be done to force booking sites to swiftly remove false listings under the Online Safety Act (OSA).
The Act requires firms which have identified illegal content, including fraudulent material, on their sites to show they are committed to removing it.
Boland said Ofcom, which enforces the OSA, should be encouraged use it to "crack down on irresponsible online platforms that leave consumers wide open to fraud".
"For illegal content generated by users, platforms have existing legal duties that mean they must take it down swiftly once they become aware of it," an Ofcom spokesperson told Which?.
Booking.com customers warned of 'reservation hijacking' after hack
- Published15 April
Holidaymaker loses €1,800 in phishing scam
- Published14 October 2025
Tourists descend on private home in Booking.com scam
- Published3 August 2022
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.`,
    bodyJa: `ダウニング街10番街の偽リストでBooking.comが「不適当」であることが暴露されると消費者団体が指摘
- 公開されました
消費者団体 どっち？旅行大手ブッキング・ドットコムでダウニング街10番地の偽リストを作成することができたと発表した。
英国の監視機関は、研究者らは首相の演説会場での偽の宿泊を予約することができ、また、ここに住むネズミ捕りの猫ラリーと「ぶらぶらしている」ことをハイライトとして指摘する偽のレビューを残すことができたと述べた。
ブッキング・ドットコムは、明らかに偽物である兆候にもかかわらず、掲載から2カ月後まで掲載を削除しなかったと述べた。
Booking.comの広報担当者はBBCに対し、「この限定的なテストは、当社のプラットフォーム上で公開された何百万ものリスティングやレビューの経験を正確に反映したものではない」と語った。
彼らは、Which?のリスティングが存在していた2か月間、サイト上で「公開」されていなかったため、「当社の自動不正行為制御の一部が作動せず、クローズされたリスティングを完全に削除できなかった」と述べた。
ユーザーは、Which? によって開かれた 20 分間のウィンドウ内でのみ、リスティングを確認して宿泊施設の予約をリクエストできます。研究者がそれを予約できるようにするためです。
Booking.comの広報担当者は、「さまざまなチェックと検証手段」がサイトの安全を確保するのに役立ち、AIなどのテクノロジーは「不正なリスティングの大部分を24時間以内に検出して削除するのに役立つ」と付け加えた。
でもどっち？旅行編集者のロリー・ボーランド氏は、その小切手が「目的に適さない」ことが判明したと述べた。
同氏は、「Booking.comのいわゆる高度なAIシステムがダウニング街10番地が貸別荘ではないことを認識できないのであれば、詐欺師がこのプラットフォームをいとも簡単に悪用できるのも不思議ではない」と述べた。
「偽の物件情報やフィッシングリンクによって数千ポンドを失うリスクを負う行楽客にとって、それほど壊滅的な影響がなければ、英国で最も有名な住所を賃貸物件として掲載できたのは滑稽だろう。」
同サイトがセキュリティへの取り組みや顧客サービスに関して批判にさらされたのはこれが初めてではない。
「市内中心部の一等地」
6月18日にBooking.comにアップロードされたWhich?の物件情報には、「ロンドン中心部の1ベッドルームアパートメント」と宣伝されていた。
住所に記載されている象徴的なダウニング街 10 番地の正面玄関の画像が使用されており、説明文では 1 ベッドルームのスペースを「市内中心部の一等地」と呼んでいます。
20分以内にどっち？ダウニング街10番地にある偽の物件への宿泊リクエストを顧客に許可したところ、14人が宿泊をリクエストしたという。
どちらであることが知られている人物からの予約リクエストのみ。研究者が受理されました。
監視団体のチームはまた、Booking.comのシステム内で研究者に、支払い詳細を確認するために外部リンクをクリックするよう求めるメッセージを送信したが、このリンクは顧客が詐欺に遭わないように予約サイトが通常ブロックしているものだ。
でもどっち？この場合、Booking.com は送信した外部リンクにフラグを立てたり、削除したりしなかったと述べています。
ブッキング・ドットコムは、「顧客が自信を持っていないリンクをクリックしないよう、目に見える注意喚起を行っており、予約確認書には、合意された支払いスケジュールの詳細を含むさらなるガイダンスも提供されている」と述べた。
どっちが残した偽レビュー？また、ジョークの特徴がすべて含まれているにもかかわらず、サイトのチェックを通過したようです。
「Booking.com が英国首相の本拠地であるダウニング街 10 番地に宿泊させてくれたのは信じられませんでした。」と言いました。
このリスト自体は8月27日にプラットフォームによって削除された。
一部の顧客はこれまでに、サイバー犯罪の被害者から顧客を守ることができなかったとして同社を非難していた。
ブッキング・ドットコムの広報担当者は「詐欺は多くの業界に影響を与えており、英国の成人の80％は詐欺がより巧妙化していると考えている」と述べ、この課題に直面して防御を強化し続けていると付け加えた。
一方、Which?は、オンライン安全法（OSA）に基づいて予約サイトに虚偽のリスティングを迅速に削除するようさらに措置を講じるべきだと述べた。
同法は、サイト上で詐欺的なコンテンツを含む違法なコンテンツを特定した企業に対し、そのコンテンツを削除する決意を示すことを義務付けている。
ボーランド氏は、OSAを執行するOfcomに対し、「消費者を詐欺にさらしたままにする無責任なオンラインプラットフォームを取り締まる」ためにOSAを活用するよう奨励されるべきだと述べた。
「ユーザーが生成した違法なコンテンツについては、プラットフォームには既存の法的義務があり、それを認識したら速やかに削除しなければならない」とOfcomの広報担当者はWhich?に語った。
Booking.comの顧客はハッキングを受けて「予約ハイジャック」について警告
- 4 月 15 日公開
行楽客、フィッシング詐欺で 1,800 ユーロを失う
- 2025 年 10 月 14 日公開
Booking.com詐欺で観光客が民家に押し寄せる
- 2022 年 8 月 3 日発行
Tech Decoded ニュースレターに登録して、世界のトップのテクノロジー ストーリーやトレンドをフォローしてください。英国外ですか？ここからサインアップしてください。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cly4e0wn452o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-02T01:27:34+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/6f10/live/ff12f590-a5f1-11f1-8348-fb0cb1cd9761.jpg",
    readTime: 6,
  },
  {
    id: "china-dissented-from-g20-statement-oppos-5c454739",
    title: "China dissented from G20 statement opposing 'cheap exports' flooding market, Bessent says",
    titleJa: "中国は市場の氾濫する「安い輸出品」に反対するG20声明に反対したとベッセント氏は語る",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `China was the only Group of 20 member to dissent from a joint statement that "non-market based economies pushing out a never-ending stream of cheap exports is not sustainable," Treasury Secretary Scott Bessent said Tuesday.
The other G20 members will take action in the coming "days, weeks or months" to "reach a resolution on this unsustainable equilibrium," Bessent said at a press conference following days of meetings with finance ministers and central bankers in Asheville, North Carolina.
The statement, released later Tuesday by the Treasury Department, includes a footnote specifying that China objected to a paragraph in which the 19 members agreed "that countries should take steps to eliminate non-market policies and practices that exacerbate imbalances."
"In particular, countries with excessive and persistent external surpluses should remove distortions that constrain domestic consumption and that result in an overreliance on exports for growth," that paragraph reads.
Treasury said China also objected to a paragraph expressing concern about continuing shipping disruptions in the Strait of Hormuz, a vital oil-shipping route that Iran has effectively blocked amid its war with the U.S.
China further opposed paragraphs praising the International Monetary Fund's "surveillance of global imbalances," and singling out "countries where a meaningful share of external debt is owed to G20 members."
China's U.S. embassy did not immediately respond to CNBC's request for comment on Bessent's remarks about the joint statement.
"I'd hoped to be able to announce a unanimous joint communiqué today," Bessent said at the presser, while stressing that the agreement from the 19 other members "shows the sheer the enormity of the problem."
The remarks came as Bessent spearheads the Trump administration's plan to choke off Iran's economy by threatening its business partners with secondary sanctions, dubbed "Operation Economic Outcast."
The effort has raised questions about whether the U.S. would target China, Iran's top trading partner and its top oil buyer by far. The U.S. is in long-term trade talks with Beijing, and Chinese President Xi Jinping is slated to visit the U.S. in late September.
"With China on Iran, we have more in common than we have differences," Bessent said Tuesday.
"China agrees Iran cannot have a nuclear weapon. China agrees that there has to be free maritime trade in the Strait of Hormuz. China gets 50% of its energy from the Gulf," he said.
"So I believe it's up to China, or incumbent upon China, to work toward a solution," Bessent added. "We will see how they follow through."`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/01/bessent-china-g20-trade-exports-trump-xi.html",
    publishedAt: "2026-09-01T23:52:21+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "range-rover-launches-first-fully-electri-fd78b9dd",
    title: "Range Rover launches first fully electric model",
    titleJa: "レンジローバー、初の完全電気モデルを発売",
    summaryJa: "レンジローバー、初の完全電気モデルを発売- 公開されました",
    bodyOriginal: `Range Rover launches first fully electric model
- Published
Range Rover has unveiled its first fully electric model, after a year‑long delay to its planned launch.
The Range Rover Electric, to be built in Solihull, marks a major shift in its electrification programme, backed by large‑scale upgrades across its West Midlands sites.
Parent company JLR said it had up-skilled 10,500 workers for electric production as it pushes ahead with modernisation despite recent financial pressures and planned job cuts.
The launch comes as the Coventry‑based carmaker faces falling profits, supply chain disruption and restructuring following a cyber attack last year.
The company said the launch was being supported by new battery and electric drive unit production lines as well as training around 9,000 employees in Solihull for electrification and a further 1,500 trained across the region.
JLR's Electric Propulsion Manufacturing Centre in Wolverhampton is now producing battery packs and electric drive units alongside internal combustion engines.
Martin Limpert, managing director of Range Rover, called the new model the result of a decade of "considered engineering".
JLR's electric roll-out comes after a turbulent year with profits dropping to £66m in the first quarter after a fire at a key Norwegian supplier.
The business is also undergoing restructuring, confirming that fewer than 300 roles will go less than a year after a cyber attack halted production for more than a month.
At the time of the results, the firm said new product launches would leave "JLR in good shape whilst acknowledging the continuing geopolitical, inflationary and regulatory challenges the industry faces".
Get in touch
Tell us which stories we should cover in Birmingham and the Black Country
Follow BBC Birmingham on BBC Sounds, Facebook, external, X, external and Instagram, external.
- Published13 August
- Published30 July
- Published1 August`,
    bodyJa: `レンジローバー、初の完全電気モデルを発売
- 公開されました
レンジローバーは、発売予定から1年遅れた後、初の完全電気モデルを発表した。
ソリハルで建設されるレンジローバー エレクトリックは、ウェスト・ミッドランズの拠点全体にわたる大規模なアップグレードに裏打ちされた、電動化プログラムの大きな転換を示すものです。
親会社のJLRは、最近の財政圧力や計画されている人員削減にもかかわらず近代化を進める中で、電力生産に携わる1万500人の労働者のスキルアップを図ったと発表した。
この発表は、コベントリーに本拠を置く自動車メーカーが昨年のサイバー攻撃を受けて利益の減少、サプライチェーンの混乱、リストラに直面している中で行われた。
同社は、今回の立ち上げは、新しいバッテリーと電気駆動ユニットの生産ラインのほか、ソリハルで約9,000人の従業員に電動化のための訓練を実施し、さらに地域全体でさらに1,500人が訓練を受けたことによって支援されたと述べた。
ウルヴァーハンプトンにある JLR の電気推進製造センターは現在、内燃エンジンと並行してバッテリー パックと電気駆動ユニットを生産しています。
レンジローバーのマネージングディレクター、マーティン・リンパート氏は、この新型モデルは10年間にわたる「熟慮されたエンジニアリング」の成果であると述べた。
JLRの電気事業の展開は、ノルウェーの主要サプライヤーの火災により第1四半期の利益が6,600万ポンドに減少するという激動の年の後に行われた。
同事業は再編も進められており、サイバー攻撃により生産が1カ月以上停止されてから1年以内に300人未満の役割がなくなることが確認されている。
決算発表の際、同社は新製品の発売により「業界が直面する地政学的、インフレ、規制上の課題が継続していることを認識しながらも、JLRは良好な状態に保たれる」と述べた。
連絡する
バーミンガムと黒人国家で取り上げるべきストーリーを教えてください
BBC バーミンガムを BBC Sounds、Facebook (外部)、X (外部)、Instagram (外部) でフォローしてください。
- 8 月 13 日発行
- 7 月 30 日発行
- 8月1日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/clyk5016mpyo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-01T23:43:47+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/9615/live/00a52b50-a613-11f1-9a0e-e95c171695e2.jpg",
    readTime: 2,
  },
  {
    id: "will-self-flying-planes-transform-the-sk-3f329115",
    title: "Will self-flying planes transform the skies?",
    titleJa: "自動飛行する飛行機は空を変えるでしょうか?",
    summaryJa: "自動飛行する飛行機は空を変えるでしょうか?- 公開されました",
    bodyOriginal: `Will self-flying planes transform the skies?
- Published
Over an alfalfa field in California's San Joaquin Valley, a small crop-spraying plane is flying scarily low to the ground. There's little risk to humans though, as the plane is pilot-free.
"We can actually go lower than a human pilot can," says Russ Marotzke, as the aircraft skims over the crop.
Flying lower means less spray drift and therefore less chemicals are needed than in conventional manned crop-dusting, he says.
The pilotless plane belongs to Pyka, where Marotzke works as a flight test engineer.
Based in a converted Second World War hangar overlooking San Francisco Bay, the start-up makes self-flying aircraft without cockpits, designed either to spray crops or deliver cargo.
It is among a small group of companies racing to bring autonomous fixed-wing aircraft into commercial service.
Flying urban air taxis, so called electric vertical take-off and landing (eVTOL) aircraft, have captured much of the attention around autonomous aviation.
But a quieter race is also under way to deploy self-flying planes, first for jobs like crop spraying and cargo delivery – and eventually, many of their makers hope, carrying passengers too.
"A fully scaled, ubiquitous passenger operation is the holy grail," says Michael Norcia, Pyka's co-founder and CEO, who envisions a large fleet of minibus-capacity Pyka planes ferrying passengers up and down the US east and west coasts.
"There's a decent chance we'll get to that point before the eVTOL industry."
I've come to one of Pyka's crop-sprayer test sites, about 80km (50 miles) east of the company's factory and reached by a bumpy dirt road.
Today, Marotzke and a colleague are trying out a software update on a demonstration aircraft.
About a dozen Pyka aircraft are already in Brazil where they are used to spray crops such as cotton and soybeans, work previously carried out by human pilots.
The crop-spraying plane is fully electric, with its battery in the nose. It can fly for about 35 minutes and carries up to 300L of spray in a tank in its middle.
Pyka's planes are sometimes called large drones, but it seems an understatement: they all have 11.5m wingspans.
Inside a shipping container beside the field, the engineers highlight on a computer the area they want the aircraft to spray. The software then plans the route, taking account of obstacles such as nearby power lines that have already been mapped.
The take-off, down a runway beside the field, is seamless. About 15 minutes later, after sensing that it is running low on spray – water for today's purposes – the aircraft lands itself for a manual refill and demonstration battery swap. It then takes to the air again to resume spraying precisely where it left off.
Autonomous flight is different from autopilot.
Autopilot assists, much like cruise control and lane-keeping functions in a car.
Autonomous systems aim to handle the entire flight, including take-off and landing, with little or no human intervention, using algorithms to process sensor data and control the aircraft.
Self-flying planes have been slower to emerge than self-driving cars, despite operating in what is generally considered a more structured and predictable environment.
That is partly because big tech companies "doubled down" on cars, pouring vast sums into the technology, says Mykel Kochenderfer, an expert in safe aviation autonomy at Stanford University.
But it is also because aircraft are held to stricter safety standards than cars, creating a much higher bar for deployment.
"The consequences for air accidents can just be so severe," says Kochenderfer.
Military interest has been helping propel the technology. Many of the companies have defence contracts to demonstrate and trial their systems, often with fewer regulatory hurdles than on the civilian side, and some are even already supplying military customers, external.
In the US, the largest autonomous fixed-wing aircraft approved for commercial civilian use so far is Pyka's crop sprayer, which won authorization last year.
Though operations are limited to a tightly defined agricultural setting and require a ground operator and visual observer. It earlier secured similar approval in Brazil, where rules are more permissive.
Pyka aims to scale up production from around two dozen planes a year currently to 1000 by 2030. Each sells for $550,000, with customers trained to operate them.
The UK has yet to approve any such longer-term operations, though British firm Windracers is seeking permission to launch an autonomous cargo service in Shetland and Orkney. Its aircraft, designed to carry goods to remote areas, are also flying missions in Ukraine.
"It would be the first heavy-lift air cargo service by drone certainly in the UK and probably anywhere," says Stephen Wright, Windracers founder and chairman.
Supporters say autonomous aircraft could address pilot shortages, remove people from dangerous work such as crop spraying, improve efficiency – for example, by allowing aircraft to carry more cargo – and cut costs if one operator can oversee many planes.
They also argue automation could make flying safer, pointing to past declines in accidents as more automated systems have been introduced.
Pilots' groups remain wary.
The US Air Line Pilots Association (ALPA) calls removing pilots "a serious gamble with safety and a step too far".
The US National Agricultural Aviation Association, which represents crop dusting pilots, says small uncrewed aircraft can be hard for its aviators to see. Piloted planes, it adds, can spray a much larger area faster.
Pyka and Windracers are building aircraft from scratch, arguing this allows autonomy to be designed in from the outset and the aircraft tailored to the job.
Others are retrofitting existing larger planes.
Backed by Boeing's investment arm, US-based Reliable Robotics is currently testing its system on the Cessna 208B Grand Caravan, a single-pilot cargo plane that can carry about 1360kg of payload over hundreds of kilometers.
Retrofitting on certified aircraft lets the company focus exclusively on proving the autonomous system's safety rather than also having to seek approval for a new aircraft, says Robert Rose, its co-founder and CEO.
Merlin Labs, also US-based, has been working its way up through progressively larger military aircraft and is now applying its system to the two-pilot Lockheed Martin C-130J military transport plane, with commercial multi-crew cargo planes next.
"It is a common autonomy brain that can transition between different aircraft," explains Matt George, Merlin's founder and CEO.
The companies also differ in their approach to AI.
Reliable is avoiding it altogether, arguing it would complicate certification.
Merlin, meanwhile, is taking a far more AI-centric approach.
The divide is evident in so-called detect and avoid systems.
One of autonomous flight's biggest challenges is replicating a pilot's ability to spot and maneuver safely around other aircraft and obstacles, and there is virtually no margin for error.
With no perfect solution yet, companies are adding different sensor systems as well as duplicating those that already come as standard to provide extra back-up.
Reliable has added forward-looking air-to-air radar to detect other aircraft more than eight kilometers ahead, with software that follows fixed rules to decide how the plane should respond.
It is "better than a pilot's eyeballs" says Rose.
Merlin, meanwhile, is using AI-powered cameras to detect and classify objects.
Pyka has used lidar from the outset to detect trees, vehicles, large birds and terrain. But it's short range, so the company also plans to add AI-powered cameras, its first real use of AI onboard.
"For a lot of things there's no need to use AI…but for figuring out that six pixels in the distance are an airplane versus some other smudge, it is perfect territory," says Norcia.
The AI dilemma also extends to communicating with air traffic control.
In shared airspace, aircraft must be able to receive, interpret and respond to radio instructions, typically from air traffic control.
Reliable's solution is to have a remote pilot on the ground, initially fully trained, to handle communications and make safety-critical decisions.
Merlin plans to use generative AI, trained on thousands of hours of recorded exchanges, to interpret instructions and respond itself.
"Our problem is harder… but we want to move beyond remote piloting," says George.
Merlin plans to reduce pilots in stages, from two to one and eventually none.
Pyka, says Norcia, is content to let others "blaze the trail" in finding the best way to operate in shared airspace.
Meanwhile, even if fully autonomous passenger flight remains elusive, many expect the technology being pioneered will inch into commercial aviation, potentially making piloted flying safer.
That, notes ALPA, the US pilots' association, would be a welcome development.`,
    bodyJa: `自動飛行する飛行機は空を変えるでしょうか?
- 公開されました
カリフォルニア州サンホアキンバレーにあるアルファルファ畑の上空で、農薬散布用の小型飛行機が恐ろしいほどの低空飛行をしている。ただし、飛行機にはパイロットがいないため、人間への危険はほとんどありません。
「人間のパイロットが操縦できるよりも実際には、より低いところまで飛行することができます」と、航空機が作物の上をかすめながらラス・マロツケ氏は言う。
より低く飛行するということは、スプレーのドリフトが少なくなるため、従来の有人農薬散布よりも必要な化学薬品の量が少なくなるということです。
このパイロットのいない飛行機は、マロツケ氏が飛行試験技師として働いているパイカ社のものである。
サンフランシスコ湾を見下ろす第二次世界大戦時の格納庫を改装したこの新興企業は、作物に散布したり貨物を配達したりするために設計された、コックピットのない自動飛行航空機を製造している。
同社は、自律型固定翼航空機の商業運航を目指して競う少数の企業グループの1つである。
空飛ぶ都市型エアタクシー、いわゆる電動垂直離着陸 (eVTOL) 航空機は、自律飛行に関して多くの注目を集めています。
しかし、自動飛行飛行機を配備するための静かな競争も進行中である。まずは農薬散布や貨物配達などの仕事に、そして最終的には乗客も運ぶことを多くのメーカーが望んでいる。
Pyka の共同創設者兼 CEO である Michael Norcia 氏は、「本格的な規模のユビキタスな旅客運行は聖杯です」と述べ、ミニバスを収容できる Pyka 飛行機の大規模なフリートで米国の東海岸と西海岸を往復して乗客を運ぶことを構想しています。
「eVTOL業界よりも先にその段階に到達する可能性は十分にあります。」
私は、同社の工場から東に約 80 km (50 マイル) 離れた、デコボコの未舗装の道路を通って到着する、Pyka の農薬散布機のテスト サイトの 1 つに来ました。
今日、マロツケ氏と同僚はデモ機でソフトウェアのアップデートを試しています。
約12機のPyka航空機がすでにブラジルに配備されており、綿や大豆などの作物に散布するために使用されており、以前は人間のパイロットによって行われていた作業である。
農薬散布機は完全に電動で、機首にバッテリーが搭載されています。約35分間飛行でき、中央のタンクに最大300リットルのスプレーを積める。
パイカの飛行機は大型ドローンと呼ばれることもありますが、それは控えめな表現のようです。翼幅はすべて 11.5 メートルです。
現場の横にある輸送用コンテナ内で、エンジニアたちは航空機にスプレーしたいエリアをコンピューター上で強調表示します。次に、ソフトウェアは、すでにマッピングされている近くの送電線などの障害物を考慮してルートを計画します。
フィールドの横の滑走路を滑走する離陸はスムーズです。約 15 分後、スプレー (今日の用途では水) が不足していることを感知した後、航空機は手動で補充し、デモンストレーション用のバッテリー交換を行うために着陸しました。その後、再び空中に飛び立ち、中断したところから正確にスプレーを再開します。
自律飛行は自動操縦とは異なります。
オートパイロットは、車のクルーズコントロールや車線維持機能と同じような機能をサポートします。
自律システムは、アルゴリズムを使用してセンサーデータを処理し、航空機を制御し、離陸と着陸を含む飛行全体を人間の介入をほとんどまたはまったく行わずに処理することを目的としています。
自動飛行飛行機は、一般的により構造化され予測可能な環境と考えられている環境で運用されているにもかかわらず、自動運転車よりも登場が遅れています。
スタンフォード大学の安全な航空自律の専門家ミケル・コッヘンダーファー氏は、大手ハイテク企業が自動車の開発に「倍増」し、その技術に巨額の資金をつぎ込んだことがその一因だと語る。
しかし、航空機には自動車よりも厳しい安全基準が課されており、配備のハードルがはるかに高いためでもあります。
「航空事故の影響は非常に深刻なものになる可能性があります」とコッヘンデルファー氏は言う。
軍事的関心がこの技術の推進に役立っています。多くの企業は自社システムの実証と試験を行うための防衛契約を結んでいるが、その多くは民間側よりも規制上のハードルが低く、すでに社外の軍事顧客に製品を供給している企業もある。
米国でこれまでに商業民間使用が承認された最大の自律型固定翼航空機は、昨年認可を獲得したパイカ社の農薬散布機である。
ただし、作業は厳密に定義された農業環境に限定されており、地上オペレーターと目視観察者が必要です。規則がより寛容なブラジルでも同様の承認を先に確保した。
Pyka は、現在の年間約 20 機の飛行機の生産を、2030 年までに 1000 機に拡大することを目指しています。1 台の販売価格は 55 万ドルで、顧客には操作の訓練を受けています。
英国はそのような長期運航をまだ承認していないが、英国企業ウィンドレーサーズはシェトランド諸島とオークニー諸島で自動運転貨物サービスを開始する許可を求めている。遠隔地に物資を運ぶために設計された同社の航空機は、ウクライナでも飛行している。
ウィンドレーサーズの創設者で会長のスティーブン・ライト氏は、「これは間違いなく英国でもおそらくどこでも、ドローンによる初の重量物航空貨物サービスとなるだろう」と語る。
支持者らは、自律型航空機はパイロット不足に対処し、農薬散布などの危険な作業から人々を解放し、例えば航空機により多くの貨物を輸送できるようにすることで効率を改善し、1人のオペレーターが多数の航空機を監督できればコストを削減できると主張している。
彼らはまた、自動化システムの導入により過去の事故が減少したことを指摘し、自動化によって飛行がより安全になる可能性があると主張している。
パイロットのグループは引き続き警戒している。
米国航空パイロット協会（ALPA）は、パイロットの解任は「安全を賭けた重大な賭けであり、行き過ぎ」としている。
農薬散布パイロットを代表する米国農業航空協会は、無人の小型航空機は飛行士にとって見えにくい場合があると述べている。操縦可能な飛行機は、はるかに広い範囲に迅速にスプレーできると付け加えた。
Pyka と Windracers は航空機をゼロから構築しており、これにより最初から自律性を設計し、航空機を任務に合わせて調整できると主張しています。
既存の大型機を改修しているところもある。
ボーイング社の投資部門の支援を受け、米国に本拠を置くリライアブル・ロボティクス社は現在、約1360kgのペイロードを数百キロメートルにわたって運ぶことができるシングルパイロットの貨物機であるセスナ208Bグランドキャラバンでそのシステムをテストしている。
同社の共同創設者兼最高経営責任者（CEO）のロバート・ローズ氏は、認定航空機を改修することで、同社は新しい航空機の承認を求める必要がなくなり、自律システムの安全性を証明することに専念できると述べた。
同じく米国に本拠を置くマーリン研究所は、軍用機の大型化に向けた取り組みを進めており、現在そのシステムをパイロット2名のロッキード・マーチンC-130J軍用輸送機に適用し、次に民間の多人乗員貨物機にも適用している。
「これは、異なる航空機間を移動できる共通の自律性の脳です」とマーリンの創設者兼 CEO のマット・ジョージは説明します。
両社は AI に対するアプローチも異なります。
リライアブル社は、認定が複雑になるとして、それを完全に避けている。
一方、マーリンは、はるかに AI 中心のアプローチを採用しています。
この違いは、いわゆる検出および回避システムにおいて明らかです。
自律飛行の最大の課題の 1 つは、他の航空機や障害物を見つけて安全に操縦するパイロットの能力を再現することであり、誤差は事実上許容されません。
完璧なソリューションはまだ存在しないため、企業はさまざまなセンサー システムを追加したり、追加のバックアップを提供するためにすでに標準装備されているセンサー システムを複製したりしています。
リライアブル社は、8キロメートル以上先の他の航空機を検知する前方空対空レーダーを追加し、固定ルールに従って航空機がどのように反応すべきかを決定するソフトウェアを備えている。
それは「パイロットの目玉よりも優れている」とローズ氏は言います。
一方、マーリンは AI 搭載カメラを使用して物体の検出と分類を行っています。
Pyka は当初から LIDAR を使用して、樹木、車両、大きな鳥、地形を検出してきました。しかし、航続距離が短いため、同社はAIを搭載したカメラを追加することも計画しており、これは同社にとって初めてのAIの本格的な搭載である。
「多くの場合、AI を使用する必要はありません。しかし、遠くにある 6 ピクセルが飛行機であるか、他の汚れであるかを判断するには、完璧な領域です」と Norcia 氏は言います。
AI のジレンマは航空管制との通信にも及びます。
共有空域では、航空機は、通常は航空交通管制からの無線指示を受信、解釈し、応答できなければなりません。
リライアブル社の解決策は、最初は十分に訓練された遠隔パイロットを地上に配置し、通信を処理し、安全性が重要な決定を下すことです。
マーリンは、数千時間の記録されたやりとりで訓練された生成 AI を使用して、指示を解釈し、自ら応答することを計画しています。
「私たちの問題はさらに困難です…しかし、私たちは遠隔操縦を超えて進みたいと思っています」とジョージは言います。
マーリンは段階的にパイロットを2人から1人に減らし、最終的にはゼロにする計画だ。
パイカ氏は、共有空域で運用する最善の方法を見つける上で他人に「道を切り開く」ことに満足している、とノルシア氏は言う。
一方、完全自律型の旅客飛行は依然として実現が難しいとしても、多くの人は、開発中の技術が民間航空機に少しずつ導入され、有人飛行がより安全になる可能性があると期待している。
米国パイロット協会であるALPAは、それは歓迎すべき展開であると指摘している。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c1l123mmrg7o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-01T23:27:35+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/0db2/live/a6fc85a0-9724-11f1-870d-5d08c49babb2.jpg",
    readTime: 10,
  },
  {
    id: "soft-launches-and-late-sittings-six-ways-70e2ea80",
    title: "Soft launches and late sittings - six ways to get cheaper meals out",
    titleJa: "ソフトローンチと遅い時間の食事 – より安く外食を得る 6 つの方法",
    summaryJa: "ソフトローンチと遅い時間の食事 – より安く外食を得る 6 つの方法- 公開されました",
    bodyOriginal: `Soft launches and late sittings - six ways to get cheaper meals out
- Published
The price of eating out can be hard to swallow while the cost of living remains high, with more than a third of Brits cutting back on going to restaurants, according to YouGov's latest Dining Out report., external
Restaurateurs say the rising cost of food, energy, wage and tax bills mean they've had to put up prices, with some top chefs campaigning for government help.
Many eateries are offering incentives to get diners through the doors. Here are some ways to save money on meals out.
1. Eat and repeat
Many restaurants offer points, freebies, discounts and birthday treats to keep customers coming back.
One of the most well-known is the Pizza Express Club. Regular diners can progress through a bronze, silver and gold system unlocking perks from free dough balls to hot and soft drinks on the house.
Nando's uses a chilli system for its loyalty programme, while other schemes such as Tastecard offer discounts at hundreds of eat-in and takeaway venues in exchange for an annual fee.
2. Go early - or late
Restaurants often want to fill seats outside of peak lunch and dinner hours so opting for earlier or later sittings can be rewarded by a cheaper bill.
Apps such as First Table, which operates across 21 UK cities, as well as Ireland, New Zealand and Australia, give diners 50% off food when they book a participating restaurant's first or last dining slot. In exchange, diners pay a small booking fee.
EatClub is another, giving walk-ins up to 50% off the whole bill at thousands of venues when they redeem an offer within its app. The biggest discounts are at off-peak times.
Shokofeh Hejazi, director of foresight and innovation at global trends agency The Food People, says earlier dining appeals because it tends to be quieter and calmer, people drink less and it allows them to get home sooner.
Meeting up for breakfast also tends to be a bit more wallet-friendly as it's usually just one course and diners get the same catch-up time with friends and family, she adds.
3. Kids eat free
In the school holidays, many places will entice families through their doors by offering free or £1 meals for kids eating with paying adults.
These range from big chains such as TGI Fridays, cafes at supermarkets including Morrisons and Asda, and even garden centres like Dobbies.
While some tie-in with school holidays, other deals are all year round.
4. Hit up soft launches
Many new restaurants will offer discounts in a bid to encourage diners to try them out and spread the word that they've opened for business.
These are known as "soft launches" and can run for several weeks. They're a cost-effective way of trying a higher-end restaurant without such a hit to the wallet.
Keep track by signing up to newsletters that list upcoming openings in the local area.
Hejazi says some restaurants are extending the period before they fully open to garner more buzz, while others are making their soft launch pricing permanent for quieter days such as Mondays.
People shouldn't assume they're priced out of fine dining-type venues because "there's access points for everybody in a lot of these places", she says.
5. Make your supermarket points work harder
Supermarket loyalty points from those weekly shops add up over time so why not put them toward a meal out?
For example, each 50p earned in Tesco Clubcard points can be exchanged £1.50 in vouchers to spend at participating Prezzo Italian venues. The chain is just one of Tesco's restaurant partners.
6. Surplus food apps
Finally, there are plenty of options to take away food for free or at a fraction of the usual price.
Surplus food apps such as Too Good To Go, or Olio, allow customers to bag goodies that would otherwise go to waste.
It's a bit of a gamble - you don't always know precisely what you'll be getting.
But there's money to be saved on items needed to buy anyway, that's more cash left over for when you do decide to dine out.
Related topics
- Published13 March`,
    bodyJa: `ソフトローンチと遅い時間の食事 – より安く外食を得る 6 つの方法
- 公開されました
YouGov の最新の外食レポートによると、英国人の 3 分の 1 以上がレストランに行くことを減らしており、生活費が依然として高い一方で、外食の価格は受け入れがたいものです。外部
レストラン経営者らは、食品、エネルギー、賃金、税金のコストが上昇しているため、価格を設定しなければならなくなったと述べており、一部のトップシェフは政府の援助を求めて運動している。
多くの飲食店は、客を来店させるためのインセンティブを提供しています。ここでは外食代を節約する方法をいくつか紹介します。
1. 食べて繰り返す
多くのレストランでは、顧客のリピートを維持するために、ポイント、景品、割引、誕生日の特典などを提供しています。
最も有名なものの 1 つは、ピザ エクスプレス クラブです。通常のダイナーは、ブロンズ、シルバー、ゴールドのシステムを経て、無料の生地ボールからハウスのホットドリンクやソフトドリンクまでの特典をアンロックすることができます。
Nando's はロイヤルティ プログラムにチリ システムを使用していますが、Tastecard などの他のスキームでは、年会費と引き換えに数百のイートインおよびテイクアウト会場で割引を提供しています。
2. 早めに行くか遅くするか
レストランは多くの場合、ランチとディナーのピーク時間外に席を埋めたいと考えているため、早めまたは遅めの席を選択すると、請求額が安くなることがあります。
英国の 21 都市とアイルランド、ニュージーランド、オーストラリアで運営されている First Table などのアプリでは、参加レストランの最初または最後の食事枠を予約すると、食事が 50% オフになります。その代わりに、ダイナーは少額の予約手数料を支払います。
EatClub もその 1 つで、アプリ内でオファーを引き換えると、何千もの会場で予約総額の最大 50% が割引になります。最大の割引はオフピーク時に発生します。
世界的トレンドエージェンシー、ザ・フード・ピープルの先見性とイノベーション担当ディレクター、ショコフェ・ヘジャジ氏は、早めの食事の方が静かで落ち着いている傾向があり、飲酒量も減り、早く帰宅できるためだと話す。
また、朝食を一緒に食べる場合は、通常 1 コースのみで、友人や家族と同じ時間を過ごすことができるため、お財布に優しい傾向があると付け加えました。
3. お子様の食事は無料です
学校の休暇期間には、料金を支払った大人と一緒に食事をする子供たちに無料または 1 ポンドの食事を提供し、家族連れを魅了するところが多くあります。
これらは、TGI Fridays などの大手チェーンから、Morrisons や Asda などのスーパーマーケットのカフェ、さらには Dobbies のような園芸センターまで多岐にわたります。
学校の休暇と連動したセールもありますが、一年中開催されるセールもあります。
4. ソフトローンチを開始する
多くの新しいレストランは、客に試してもらい、営業を開始したという情報を広めるために割引を提供します。
これらは「ソフトローンチ」として知られており、数週間実行される場合があります。財布に負担をかけずに高級レストランを試すことができる、費用対効果の高い方法です。
地元エリアで今後オープン予定の求人情報を掲載するニュースレターに登録して、情報を入手してください。
ヘジャジ氏によると、一部のレストランは話題を集めるために完全オープンまでの期間を延長している一方、月曜日などの静かな日にソフトローンチ価格を恒久的にしているレストランもあるという。
高級レストランのような場所では、「誰でも利用できるアクセス ポイントが多くの場所に用意されている」ため、人々はそのような価格で利用できると考えるべきではないと彼女は言います。
5. スーパーマーケットのポイントをさらに有効活用する
週ごとに得られるスーパーマーケットのロイヤルティ ポイントは時間の経過とともに加算されるため、外食に充ててみてはいかがでしょうか。
たとえば、Tesco Clubcard ポイントで獲得した 50 ペンスごとに、参加している Prezzo Italian 会場で使える 1.50 ポンドのバウチャーと交換できます。このチェーンは、テスコのレストランパートナーの 1 つにすぎません。
6. 余った食べ物アプリ
最後に、無料または通常の数分の一の価格で食べ物を持ち帰るオプションがたくさんあります。
Too Good To Go や Olio などの余剰食品アプリを使用すると、顧客は、本来なら無駄になってしまう食品を袋に詰めることができます。
これはちょっとしたギャンブルです。何が得られるか常に正確にわかるわけではありません。
しかし、いずれにせよ、購入に必要な品物を買うために節約できるお金はあります。それは、外食することに決めたときのために、より多くの現金を残せることです。
関連トピック
- 3 月 13 日公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c2dy8kz867go?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-01T23:26:38+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/a9ca/live/ec63ff60-9017-11f1-b783-f784376ffc11.jpg",
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
