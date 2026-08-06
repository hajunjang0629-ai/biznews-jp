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
    id: "easyjet-agrees-to-5-7bn-takeover-by-us-f-8a9f6739",
    title: "EasyJet agrees to £5.7bn takeover by US firm",
    titleJa: "イージージェット、米国企業による57億ポンドの買収に合意",
    summaryJa: "イージージェット、米国企業による57億ポンドの買収に合意- 公開されました",
    bodyOriginal: `EasyJet agrees to £5.7bn takeover by US firm
- Published
EasyJet has agreed to be taken over in a £5.7bn deal by US firm Apollo.
The deal was announced after rival suitor Castlelake said it was dropping out of the bid battle for the no-frills airline.
EasyJet is one of Europe's largest airlines. It employs more than 19,000 people, and flies around 1,200 routes across 35 European countries.
It was founded by Sir Stelios Haji-Ioannou in 1995 to offer cheap air fares to Europe from the UK.`,
    bodyJa: `イージージェット、米国企業による57億ポンドの買収に合意
- 公開されました
イージージェットは、米国企業アポロに57億ポンドの契約で買収されることに合意した。
この買収は、ライバルの求婚者であるキャッスルレイクが、この飾り気のない航空会社の入札合戦から撤退すると発表した後に発表された。
EasyJet はヨーロッパ最大の航空会社の 1 つです。従業員は 19,000 名を超え、ヨーロッパ 35 か国の約 1,200 路線を運航しています。
英国からヨーロッパへの格安航空運賃を提供するために、ステリオス・ハジ・イオアノウ卿によって 1995 年に設立されました。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cjejzjpy98wo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-06T14:21:07+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/9e13/live/dcb0ea20-91a1-11f1-964d-6f76397ea067.jpg",
    readTime: 2,
  },
  {
    id: "missouri-voters-just-rejected-a-bid-to-d-04731925",
    title: "Missouri voters just rejected a bid to ditch income tax, while other tax votes loom in Florida and California this fall",
    titleJa: "ミズーリ州の有権者は所得税廃止の提案を拒否したばかりだが、フロリダ州とカリフォルニア州では今秋、他の税に関する投票が迫っている",
    summaryJa: "ミズーリ州の有権者は火曜日、州の所得税を廃止する提案を拒否したが、フロリダ州とカリフォルニア州では今秋の大票田が迫っている。",
    bodyOriginal: `Missouri voters rejected a bid to ditch the state’s income tax Tuesday, while big votes loom in Florida and California this fall.`,
    bodyJa: `ミズーリ州の有権者は火曜日、州の所得税を廃止する提案を拒否したが、フロリダ州とカリフォルニア州では今秋の大票田が迫っている。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/taxes-are-on-the-ballot-this-fall-as-republicans-and-democrats-grow-further-apart-on-whether-to-raise-them-c7990380?mod=mw_rss_topstories",
    publishedAt: "2026-08-06T14:07:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-27008048",
    readTime: 2,
  },
  {
    id: "fox-won-t-renegotiate-nfl-media-rights-b-b47ae2cd",
    title: "Fox won't renegotiate NFL media rights before current deal expires, CEO Lachlan Murdoch says",
    titleJa: "フォックスは現在の契約が期限切れになるまでNFLメディアの権利について再交渉しないとCEOのラクラン・マードック氏が語る",
    summaryJa: "ラクラン・マードック最高経営責任者（CEO）は木曜日の決算会見で、フォックスはリーグとの現行契約がオプトアウト条項により期限切れとなる2030年までに新たなNFLメディア権契約について交渉するつもりはないと語った。NFLは、リーグのオプトアウト条項を撤廃し、ライブ権の費用を引き上げるための契約の見直しについて、フォックスとCBSの親会社パラマウント・スカイダンスの両社と予備協議を行ったとCNBCが以前報じた。 Fox と CBS は、NFL の日曜午後のライブ試合放映権のパッケージを所有しています。",
    bodyOriginal: `Fox won't negotiate a new NFL media rights deal before 2030, when its current contract with the league expires via an opt-out clause, Chief Executive Officer Lachlan Murdoch said during a Thursday earnings conference call.
The NFL has held preliminary discussions with both Fox and CBS-parent Paramount Skydance about reworking the deals to eliminate the league's opt-out clause and raise the cost of the live rights, CNBC previously reported. Fox and CBS own the NFL's Sunday afternoon packages of live game rights.
Without the opt out, Fox and Paramount's deals with the league extend until the end of the 2033-34 season.
Murdoch said Thursday that those preliminary discussions led Fox to decide it won't strike a new deal.
"In advance of the season, we've had a recent thorough and productive discussions with the league, and as a result, we will not be making any amendments to our existing contractual relationship, which extends to the completion of the 2029 season," Murdoch said. "We'll be ready to engage with the NFL on the opt-out seasons and beyond at a date closer to the 2030 season, which has been the customary timetable."
The NFL maintains flexibility to renew deals early with its other media partners, including adding new partners as it has in recent years with YouTube and Netflix. An NFL spokesperson declined to comment on Murdoch's remarks.
NFL Commissioner Roger Goodell told CNBC last year he felt the league's rights were relatively undervalued compared to other sports. The NBA nearly tripled its media rights revenue with an 11-year, $77 billion deal struck in 2024.
The NFL signed its most recent media rights deal, worth more than $100 billion, in 2021.
"I think our partners would want to sit down and talk to us at any time, and we continue to dialogue with them. I like that opportunity," Goodell said in September. "Obviously it's not going to happen this year. But it could happen as early as next year. That could happen."
NFL programming is consistently the most watched on television. Murdoch said Fox's relationship with the NFL "is an incredibly positive one."
The NFL had discussed an increase of nearly $1 billion per year in rights costs in early talks with Paramount, CNBC reported earlier this year. In return, the league would guarantee carriage on CBS until 2034. Under the terms of the current contract, the NFL can walk away from the deal with all of its partners except Disney at the end of the 2029-30 season. Disney has one extra year.
Disney Chief Financial Officer Hugh Johnston told CNBC earlier this week that the NFL hasn't yet engaged Disney on a new deal.
"We really have pretty much all the sports rights that we need locked up into the 2030s. The NFL, you've seen they have commented a few times on reopening that, but they have not talked to us about that. So we'll see how that plays out," Johnston said in an interview.`,
    bodyJa: `ラクラン・マードック最高経営責任者（CEO）は木曜日の決算会見で、フォックスはリーグとの現行契約がオプトアウト条項により期限切れとなる2030年までに新たなNFLメディア権契約について交渉するつもりはないと語った。
NFLは、リーグのオプトアウト条項を撤廃し、ライブ権の費用を引き上げるための契約の見直しについて、フォックスとCBSの親会社パラマウント・スカイダンスの両社と予備協議を行ったとCNBCが以前報じた。 Fox と CBS は、NFL の日曜午後のライブ試合放映権のパッケージを所有しています。
オプトアウトがなければ、フォックスとパラマウントのリーグとの契約は2033－34シーズン終了まで延長される。
マードック氏は木曜日、こうした事前協議によりフォックスは新たな契約を結ばないことを決定したと述べた。
マードック氏は「シーズンに先立ち、最近リーグと綿密かつ生産的な話し合いを行ってきた。その結果、2029年シーズン終了までの既存の契約関係に修正は加えない」と述べた。 「我々はオプトアウトシーズン以降についても、慣習的なスケジュールとなっている2030年シーズンに近い日程でNFLと連携する準備を整えるつもりだ」
NFL は、近年の YouTube や Netflix と同様に、新しいパートナーを追加するなど、他のメディア パートナーとの契約を早期に更新する柔軟性を維持しています。 ＮＦＬの広報担当者はマードック氏の発言についてコメントを控えた。
NFLコミッショナーのロジャー・グッデル氏は昨年CNBCに対し、リーグの権利が他のスポーツに比べて相対的に過小評価されていると感じていると語った。 NBAは2024年に11年間、770億ドルの契約を締結し、メディア権利収入をほぼ3倍に増やした。
NFLは2021年に1000億ドル以上相当の最新のメディア権契約に署名した。
グッデル氏は9月、「われわれのパートナーはいつでも座って話をしたいと思っているだろうし、われわれは彼らとの対話を続けている。その機会が気に入っている」と述べた。 「もちろん今年は起こらない。だが、早ければ来年には起こるかもしれない。それは起こるかもしれない。」
NFL 番組は常にテレビで最も視聴されています。マードック氏は、フォックスとNFLの関係は「信じられないほど前向きなものだ」と述べた。
CNBCが今年初めに報じたところによると、NFLはパラマウントとの初期の交渉で、放映権料を年間10億ドル近く増やすことについて話し合っていたという。その見返りとして、リーグはCBSでの放送を2034年まで保証することになっている。現在の契約条件に基づき、NFLは2029-30シーズン終了後にディズニーを除くすべてのパートナーとの契約を解消することができる。ディズニーにはあと1年あります。
ディズニーの最高財務責任者ヒュー・ジョンストン氏は今週初め、CNBCに対し、NFLはまだディズニーと新たな契約を締結していないと語った。
「我々は実際、2030年代までロックしておく必要があるほぼすべてのスポーツの権利を持っている。NFLは、それを再開することについて何度かコメントしているのを見たことがあるだろうが、彼らはそれについて我々に話していない。だから、それがどうなるか見てみるつもりだ」とジョンストン氏はインタビューで語った。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/06/fox-nfl-media-rights-renegotiations-opt-out.html",
    publishedAt: "2026-08-06T13:57:20+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "the-divide-between-eli-lilly-and-novo-no-c9640f85",
    title: "The divide between Eli Lilly and Novo Nordisk is widening after their latest earnings",
    titleJa: "イーライリリーとノボ ノルディスクの最新決算を受けて格差が拡大",
    summaryJa: "今週は、GLP-1製薬会社2社の分岐点が全面的に明らかになった。イーライリリーとノボ ノルディスクは両社とも第2四半期の予想を上回り、通年の見通しを引き上げた。しかし、投資家はリリーの決算を歓迎し水曜日の株価を上昇させたが、その前日にはノボを懲罰しており、肥満治療薬のリーダー2社に対するウォール街の信頼の溝が広がっていることを浮き彫りにした。",
    bodyOriginal: `The diverging paths of two GLP-1 drugmakers were on full display this week.
Both Eli Lilly and Novo Nordisk beat second-quarter estimates and raised their full-year outlooks. But while investors cheered Lilly's results, sending shares higher on Wednesday, they punished Novo a day earlier – underscoring a growing divide in Wall Street's confidence in the two obesity drug leaders.
As Lilly continues to exceed expectations and widen its edge in the obesity drug space, Novo is still racing to win back market share, restore investor confidence in its pipeline and chart a clear path toward long-term growth.
"While Novo raised guidance (as expected), the pipeline and path to sustainable growth remain less clear," BMO Capital Markets analyst Evan Seigerman said in a research note on Wednesday.
At stake is a global market that some analysts expect to be worth more than $100 billion by the 2030s. In the U.S., Lilly held a 60.9% share of the obesity and diabetes drug market in the second quarter, compared with Novo's 38.8%, according to Lilly's earnings presentation Wednesday.
Lilly reported another quarter of blistering growth, with resilient demand for its blockbuster diabetes treatment Mounjaro and obesity drug Zepbound pushing revenue up 48% from a year ago. The company also hiked its full-year revenue guidance, reinforcing investor confidence that its treatments can sustain their sales momentum despite lower prices in the U.S. – an issue that Novo is also facing.
"The print reinforces our view that Lilly remains best positioned to capture the majority of global incretin market growth," Bernstein analyst Courtney Breen said in a note on Wednesday, referring to the obesity and diabetes drug space.
Novo also topped Wall Street's expectations and lifted its full-year outlook Tuesday, citing "increased expectations" for GLP-1 product sales.
Analysts said Novo benefited from rebate adjustments and other temporary factors during the quarter. Sales of the company's diabetes drug Ozempic and overall obesity portfolio exceeded analyst estimates for the quarter, according to StreetAccount.
But investors appeared less focused on what Novo delivered this quarter and more on concerns about what comes next.
"All in all this leaves many questions open for 2027," said Jefferies analyst Michael Leuchten in a research note on Tuesday.
Revenue of Novo's closely watched Wegovy pill came in slightly below analyst expectations. That disappointed some investors and raised questions about whether it can become a big enough growth driver for the company.
"Wegovy Pill launch has shown promise, but 2Q results in the US highlight that more needs to be done to satisfy investors and truly beat expectations," Seigerman said.
He acknowledged that part of the miss was due to the company reducing inventory of the pill, but said "a massive beat would have sated many" investors. The pill's miss and share reaction "highlight a broader need for further pipeline diversification," Seigerman added.
Despite that, Novo said the pill has reached more than 5 million patients since its U.S. launch in January, and the industry still bills it as one of the most successful drug launches in history. The drug has also shown higher efficacy than a rival obesity pill from Lilly, which launched a few months later than Novo's treatment. That early entry to the market gave the Danish drugmaker an edge in the oral drug space.
Novo CEO Mike Doustdar also defended the pill's strategy and launch following the company's results. Regional expansions of the drug in the United Arab Emirates and the UK, among others, this year could offer momentum, he said.
"We would not be able to ... show a positive growth on the top and the bottom if items like the pill were not doing well and were not profitable," Doustdar told CNBC's Carolin Roth on Wednesday.
The company also gave more good news for its global prospects on Wednesday, when it said the Wegovy pill would launch in Germany in September, the product's first entry into a European Union country.
Still, Novo's updated outlook implies the company could post a sales decline this year, a contrast to Lilly's expectation of ballooning revenue.
Novo on Tuesday also reported mixed trial results on a key experimental obesity drug, CagriSema, reigniting investor questions about whether the company's drug pipeline can generate long-term growth. CagriSema couldn't deliver as much blood sugar control as Zepbound in a large trial – the second time this year the new drug has failed to match Lilly's blockbuster weight loss treatment.
That comes just days after Novo said a late-stage heart drug failed to reduce major cardiovascular events compared to placebo in a trial. Analysts viewed that experimental medicine, ziltivekimab, as a key opportunity for Novo to expand its cardiovascular portfolio and reduce reliance on its obesity and diabetes medicines.
"As pricing in the obesity market faces continuous headwinds, a clear strategy underpinned by franchise diversity is critical" for the company, Seigerman said.
For investors, the contrast is increasingly clear: Lilly is being viewed as the market's momentum story, while Novo remains in a show-me phase as Wall Street waits for evidence that its turnaround efforts are taking hold.
"Overall nothing to inspire," Citi research analysts said in a note on Tuesday about Novo.`,
    bodyJa: `今週は、GLP-1製薬会社2社の分岐点が全面的に明らかになった。
イーライリリーとノボ ノルディスクは両社とも第2四半期の予想を上回り、通年の見通しを引き上げた。しかし、投資家はリリーの決算を歓迎し水曜日の株価を上昇させたが、その前日にはノボを懲罰しており、肥満治療薬のリーダー2社に対するウォール街の信頼の溝が広がっていることを浮き彫りにした。
リリー社が期待を上回り、肥満治療薬分野での優位性を広げ続ける中、ノボ社は市場シェアを取り戻し、自社パイプラインに対する投資家の信頼を回復し、長期的な成長に向けた明確な道筋を描こうと今も競争している。
BMOキャピタル・マーケッツのアナリスト、エヴァン・セイガーマン氏は水曜日のリサーチノートで、「ノボは（予想通り）ガイダンスを引き上げたが、持続可能な成長に向けたパイプラインと道筋は依然として不透明だ」と述べた。
危機に瀕しているのは世界市場であり、一部のアナリストは2030年代までに1000億ドル以上の価値があると予想している。リリーの水曜日の決算発表によると、第2四半期の米国の肥満・糖尿病治療薬市場でリリーは60.9％のシェアを占め、ノボは38.8％だった。
リリーは、大ヒット糖尿病治療薬「ムンジャロ」と肥満治療薬「ゼップバウンド」の需要が堅調で、売上高が前年同期比48％増加し、四半期も大幅な成長を記録したと報告した。同社はまた、通年の収益見通しを引き上げ、米国での価格低下にもかかわらず、同社の治療薬が売上の勢いを維持できるという投資家の信頼を強化した。これはノボも直面している問題である。
バーンスタインのアナリスト、コートニー・ブリーン氏は水曜日のメモで、肥満と糖尿病の治療薬分野に言及し、「この印刷物は、リリーが依然として世界のインクレチン市場の成長の大部分を獲得するのに最適な立場にあるというわれわれの見解を裏付けるものである」と述べた。
ノボはまた、火曜日にウォール街の予想を上回り、GLP-1製品の売上に対する「期待の高まり」を理由に通年の見通しを引き上げた。
アナリストらは、ノボはリベート調整やその他の一時的な要因から同四半期に恩恵を受けたと述べた。ストリートアカウントによると、同社の糖尿病薬オゼンピックの売上高と肥満ポートフォリオ全体が同四半期のアナリスト予想を上回った。
しかし、投資家はNovoが今四半期に何を提供したかよりも、次に何が起こるかについての懸念に焦点を当てているようだ。
ジェフリーズのアナリスト、マイケル・ロイヒテン氏は火曜日のリサーチノートで、「全体的に見て、2027年には多くの疑問が残されている」と述べた。
注目されていたノボの錠剤「ウィゴビー」の売上高はアナリストの予想をわずかに下回った。このことは一部の投資家を失望させ、それが同社にとって十分大きな成長原動力となり得るかどうかについて疑問を生じさせた。
「Wegovy Pillの発売は期待を示しているが、米国の第2四半期決算は、投資家を満足させ、真に期待を上回るためにはさらなる取り組みが必要であることを浮き彫りにしている」とセイガーマン氏は述べた。
同氏は、失敗の一部が同社が錠剤の在庫を減らしたことによるものであることを認めたが、「大規模なビートは多くの投資家を満足させただろう」と述べた。セイガーマン氏は、錠剤のミスとシェアの反応は「パイプラインのさらなる多様化に対する広範なニーズを浮き彫りにしている」と付け加えた。
それにもかかわらず、ノボ社は、この薬は1月に米国で発売されて以来、500万人以上の患者に投与されており、業界は依然としてこの薬を史上最も成功した新薬の1つであると主張していると述べた。この薬は、ノボ社の治療薬より数カ月遅れて発売されたリリー社のライバルの肥満治療薬よりも高い有効性も示している。この市場への早期参入により、デンマークの製薬会社は経口薬分野で優位性を得ることができました。
Novo CEOのMike Doustdar氏も、同社の業績を受けて、この錠剤の戦略と発売を擁護した。今年はとりわけアラブ首長国連邦と英国でのこの薬の地域拡大が勢いをもたらす可能性があると同氏は述べた。
「もし錠剤のような商品の業績が悪く、利益が出なかったら、我々は…上向きも下向きもプラスの成長を示すことはできなかったでしょう」とドゥスダール氏は水曜日、CNBCのキャロリン・ロスに語った。
同社は水曜日、Wegovy 錠剤がドイツで 9 月に発売され、同製品が欧州連合加盟国に初めて導入されると発表し、世界的な見通しにとってさらに良いニュースを提供した。
それでも、ノボの最新の見通しは、同社が今年売上高の減少を記録する可能性があることを示唆しており、収益が膨らむというリリーの予想とは対照的である。
ノボは火曜日に、主要な肥満治療薬の実験薬であるカグリセマに関するさまざまな試験結果も報告しており、同社の医薬品パイプラインが長期的な成長を生み出すことができるかどうかについて投資家の疑問が再燃している。カグリセマは、大規模試験ではゼップバウンドほどの血糖コントロールを実現できなかった。新薬がリリーの大ヒット減量治療薬に匹敵しなかったのは今年二回目だ。
これは、ノボ社が試験で後期心臓治療薬がプラセボと比較して重大な心血管イベントを軽減できなかったと発表した数日後のことだった。アナリストらは、その実験薬であるジルチベキマブが、ノボにとって循環器ポートフォリオを拡大し、肥満や糖尿病の治療薬への依存を減らすための重要な機会となるとみなした。
「肥満市場の価格設定は継続的な逆風に直面しているため、フランチャイズの多様性に裏付けられた明確な戦略が同社にとって重要である」とセイガーマン氏は述べた。
投資家にとって、そのコントラストはますます明確になっている。リリーは市場の勢いを左右するストーリーとして見られている一方、ウォール街は再生努力が定着している証拠を待っているため、ノボは依然としてショーミーの段階にある。
シティのリサーチアナリストらは火曜日のノートでノボについて「全体的には刺激となるものは何もない」と述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/06/eli-lilly-novo-nordisk-earnings-glp1-market.html",
    publishedAt: "2026-08-06T13:45:29+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    readTime: 6,
  },
  {
    id: "versant-shares-surge-13-after-company-ra-064bdead",
    title: "Versant shares surge 13% after company raises 2026 outlook on platforms, advertising momentum",
    titleJa: "同社がプラットフォームと広告の勢いに関する2026年の見通しを引き上げたことを受け、Versant株は13%上昇",
    summaryJa: "Versant は、Fandango や GolfNow を含むプラットフォーム ビジネス、そして最近の Full Swing の買収による収益の増加を指摘しました。",
    bodyOriginal: `Versant Media Group raised its full-year guidance on Thursday, boosted by momentum in its digital brands like Fandango and GolfNow, as well as what executives referred to as "strength" in its overall business model.
The company now expects total revenue for 2026 of $6.2 billion to $6.45 billion and adjusted earnings before interest, taxes, depreciation and amortization of $1.9 billion to $2.05 billion.
This marks Versant's third earnings report since it was spun out from Comcast's NBCUniversal at the start of the year. The company, which includes a portfolio of pay TV networks including CNBC, MS Now and The Golf Channel began trading as a public company in January.
Versant's earnings once again showcased that live sports and news grab the most viewers and advertising dollars for traditional TV, despite ongoing pressure on the bundle as it loses customers to streaming alternatives.
The company beat Wall Street expectations on the top and bottom lines. Versant shares gained more than 13% in early trading Thursday.
Here's how Versant performed for its second quarter, ended June 30, compared to Wall Street's estimates, according to LSEG:
- Earnings per share: $1.49 vs. $1.35 expected
- Revenue: $1.64 billion vs. $1.62 billion expected
Revenue for linear TV, which also includes channels USA Network, Syfy, Oxygen and E!, was down 6.3% during the quarter to $954 million, due to subscriber declines.
CEO Mark Lazarus said in a release on Thursday the company completed carriage agreements "with two large distribution partners, one in the U.S. and one in Canada." Many of Versant's distribution deals were locked up when it was still under NBCUniversal's ownership.
Versant executives have said they aim to diversify the company's revenue base — with an eye toward achieving a revenue mix of 50% from its digital, platform, subscription, ad supported and transactional businesses. The aim is to be less reliant on the linear TV model. Currently more than 80% of Versant's revenue stems from the pay TV business.
Versant leadership has also said it would explore acquisitions of nontraditional media businesses to broaden its revenue streams and add growth.
This week the company closed its acquisition of golf simulation company Full Swing. Versant already owns digital media platform GolfPass and tee-time reservation company GolfNow. Earlier this year Versant bought StockStory, an AI-powered tech platform that provides financial analysis, market insights and stock recommendations for CNBC.
Advertising revenue for the quarter was down 0.6% to $423 million, an improvement compared to the rate of decline during the same period last year due to higher ratings for its networks, which are heavily centered on news and sports.
Revenue for the platforms segment — which includes Fandango and GolfNow — was up 0.8% to $225 million for the quarter. Excluding the company's divestiture of SportsEngine, platforms revenue was up 9.3%.
The company attributed that increase in part to higher revenue at Fandango from movie ticket purchases and video on demand transactions, as well as higher bookings, payments and subscription revenue for GolfNow.
Versant has launched a free, ad-supported Fandango streaming platform in a bid to increase its advertising and users for the platform. Versant's USA Sports also recently announced a media rights deal with German soccer league Bundesliga, which brings live matches to USA Network and Fandango beginning in August.
Overall, Versant revenue declined 3.8% year over year to $1.64 billion.
Net income attributable to Versant declined 30% to $211 million, or $1.49 per share, from $302 million, or $2.09 per share a year earlier. The company attributed that decline to lower revenue, public company costs, interest expense related to the Comcast separation and an increased tax expense largely due to the divestiture of SportsEngine.
Adjusted EBITDA decreased 8.9% to $624 million. However, when compared with stand-alone adjusted EBITDA, a metric to more directly compare performance of the pre-spin portfolio companies to current results, adjusted EBITDA was up 3% year over year. Versant said the increase reflected lower programming expenses and reduced costs that offset revenue declines.
The company also declared a quarterly cash dividend for the third quarter in a row, again at 37.5 cents a share. The latest dividend is payable on Oct. 22 to shareholders of record as of the close of business on Oct. 1.
Versant said it completed a previously announced $100 million accelerated share repurchase agreement. The company repurchased nearly 2.4 million shares of class A common stock with a remaining authorization of roughly $800 million as of June 30.
The company said it plans to enter into a similar stock repurchase agreement on Aug. 7 to repurchase $100 million of class A stock, which it anticipates will close during the third quarter.
Disclosure: Versant Media Group is the parent company of CNBC.`,
    bodyJa: `バーサント・メディア・グループは木曜日、ファンダンゴやゴルフナウなどのデジタルブランドの勢いと、経営陣がビジネスモデル全体の「強さ」と呼んだものに後押しされて、通期業績見通しを引き上げた。
同社は現在、2026年の総売上高が62億ドルから64億5000万ドル、利息、税金、減価償却費前の調整後利益が19億ドルから20億5000万ドルになると予想している。
これは、Versant が今年初めに Comcast の NBCUniversal からスピンアウトして以来、3 回目の収益報告となります。 CNBC、MS Now、The Golf Channelなどの有料テレビネットワークのポートフォリオを含む同社は、1月に上場企業として取引を開始した。
Versant の収益は、ストリーミングの代替手段に顧客を奪われ、バンドルに対する圧力が続いているにもかかわらず、生のスポーツとニュースが従来のテレビの最も多くの視聴者と広告費を獲得していることを改めて示しました。
同社は売上高と最終利益においてウォール街の期待を上回った。バーサント株は木曜序盤の取引で１３％以上上昇した。
LSEG によると、Versant の第 2 四半期 (6 月 30 日終了) の業績をウォール街の推定と比較して以下に示します。
- 1 株当たり利益: 予想 1.35 ドルに対し 1.49 ドル
- 収益: 16 億 4,000 万ドル対予想 16 億 2,000 万ドル
USA Network、Syfy、Oxygen、E! チャンネルも含むリニア TV の収益は、加入者の減少により、同四半期に 6.3% 減の 9 億 5,400 万ドルとなりました。
CEOのマーク・ラザラス氏は木曜日のリリースで、同社が「米国とカナダの2社の大手流通パートナー」との運送契約を完了したと述べた。 Versant の配給契約の多くは、Versant がまだ NBCUniversal の所有下にあったときに凍結されていました。
Versant の幹部らは、デジタル、プラットフォーム、サブスクリプション、広告サポート、トランザクション ビジネスからの収益構成 50% を達成することを目指して、同社の収益基盤を多様化することを目指していると述べた。目的は、リニア TV モデルへの依存度を下げることです。現在、Versant の収益の 80% 以上は有料テレビ事業によるものです。
バーサントの経営陣は、収益源を拡大し、さらなる成長を図るために、非伝統的なメディア事業の買収を検討するとも述べた。
同社は今週、ゴルフシミュレーション会社フルスイングの買収を完了した。 Versant はすでにデジタル メディア プラットフォーム GolfPass とティータイム予約会社 GolfNow を所有しています。今年初め、Versant は CNBC に財務分析、市場洞察、銘柄推奨を提供する AI を活用した技術プラットフォームである StockStory を買収しました。
同四半期の広告収入は0.6%減の4億2,300万ドルで、ニュースとスポーツを中心としたネットワークの視聴率が高かったため、前年同期の減少率と比べて改善した。
Fandango と GolfNow を含むプラットフォーム部門の同四半期の収益は 0.8% 増の 2 億 2,500 万ドルでした。スポーツエンジンの売却を除くと、プラットフォームの収益は 9.3% 増加しました。
同社は、この増加の一因として、映画チケットの購入やビデオ・オン・デマンド取引によるファンダンゴでの収益の増加、およびゴルフナウの予約、支払い、サブスクリプション収益の増加を挙げています。
Versant は、広告とプラットフォームのユーザーを増やすために、無料の広告付き Fandango ストリーミング プラットフォームを立ち上げました。 Versant の USA Sports も最近、ドイツのサッカー リーグ ブンデスリーガとのメディア権契約を発表し、8 月から USA Network と Fandango にライブ試合が提供されるようになります。
全体として、Versant の収益は前年比 3.8% 減の 16 億 4000 万ドルとなりました。
Versant に帰属する純利益は、前年同期の 3 億 200 万ドル (1 株あたり 2.09 ドル) から 2 億 1,100 万ドル (1 株あたり 1.49 ドル) と 30% 減少しました。同社は、この減少の原因として、収入の減少、公開会社のコスト、コムキャストの分離に関連する支払利息、および主にスポーツエンジンの売却による税金費用の増加が挙げられています。
調整後EBITDAは8.9%減の6億2,400万ドルとなりました。しかし、スピン前のポートフォリオ企業の業績と現在の業績をより直接的に比較するための指標である単独の調整後EBITDAと比較すると、調整後EBITDAは前年同期比3%増加しました。バーサント氏は、この増加は番組制作費の減少と、収益の減少を相殺するコストの削減を反映していると述べた。
同社はまた、3四半期連続の四半期現金配当を発表し、これも1株当たり37.5セントとした。最新の配当は、10月1日の営業終了時点で記録上の株主に10月22日に支払われる。
ヴァーサントは、以前に発表した1億ドルの早期自社株買い契約を完了したと発表した。同社はクラスA普通株式約240万株を買い戻し、6月30日時点で約8億ドルの権限が残っている。
同社は、クラスA株を1億ドル買い戻すため、8月7日に同様の株式買い戻し契約を結ぶ予定で、第3四半期中に取引が完了すると予想していると述べた。
開示情報: Versant Media Group は CNBC の親会社です。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/06/versant-vsnt-earnings-q2-2026.html",
    publishedAt: "2026-08-06T13:36:33+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 6,
  },
  {
    id: "ford-s-new-fathom-electric-pickup-truck-d077e4da",
    title: "Ford's new 'Fathom' electric pickup truck will start at $28,000",
    titleJa: "フォードの新型電気ピックアップトラック「ファゾム」の価格は2万8000ドルから",
    summaryJa: "フォードモーターは木曜日、同社の新しい中型電気トラックの開始価格が2万8350ドルで「ファゾム」と呼ばれると発表し、自動車メーカーは高価なEVトラック市場に手頃な価格の選択肢を提供したいと考えている。目的地および配送料1,595ドルを加えると価格は29,945ドルとなり、自動車メーカーが今後の電気自動車の宣伝で長年約束していた3万ドルの水準に達する。",
    bodyOriginal: `Ford Motor announced Thursday that its new midsize electric truck will have a starting price of $28,350 and be called the "Fathom," as the automaker looks to offer an affordable option in the pricey EV truck market.
Destination and delivery charges of $1,595 will bring the price to $29,945, coming in at the $30,000 mark the automaker had long promised in touting its upcoming electric vehicles.
Ford said preorders for the five-passenger truck will begin in early 2027. Customer deliveries are expected to begin later in 2027. Ford has yet to reveal what the new truck will look like.
The Fathom is the first vehicle to be built on Ford's new "Universal Electric Vehicle," or UEV, platform, which the company has said is key to bring its Model e business unit from billions of dollars in annual losses to breakeven by 2029.
"We are confident that we have the best cost platform and are focused on the right market," a Ford spokesperson said in an email. "We believe the UEV platform will be a strategic advantage -- and we have the best chance to make it work."
Ford has said the goal for the UEV platform is for each vehicle built on the system to be profitable within a year of launching and cost-competitive with global EV leaders from China and Tesla. Ford has had a secret unit working on the platform to make the vehicles comparable in price to gas-powered vehicles through new technologies and efficiencies.
Ford's push with the UEV platform comes despite a massive slowdown in EV adoption and the elimination of U.S. consumer incentives to buy EVs. The company last year reported $19.5 billion in restructuring charges related to its electric vehicles.
The Ford Fathom will be built using the company's new assembly tree manufacturing process at its Louisville Assembly Plant.`,
    bodyJa: `フォードモーターは木曜日、同社の新しい中型電気トラックの開始価格が2万8350ドルで「ファゾム」と呼ばれると発表し、自動車メーカーは高価なEVトラック市場に手頃な価格の選択肢を提供したいと考えている。
目的地および配送料1,595ドルを加えると価格は29,945ドルとなり、自動車メーカーが今後の電気自動車の宣伝で長年約束していた3万ドルの水準に達する。
フォードは、5人乗りトラックの予約注文は2027年初めに開始されると述べた。顧客への納車は2027年後半に開始される予定である。フォードは、新しいトラックがどのようなものであるかをまだ明らかにしていない。
ファゾムは、フォードの新しい「ユニバーサル電気自動車」（UEV）プラットフォームに基づいて製造された最初の車両で、同社はモデルe事業部門を年間数十億ドルの赤字から2029年までに損益分岐点に引き上げる鍵となると述べている。
フォードの広報担当者は電子メールで、「当社は最高のコストプラットフォームを有し、適切な市場に注力していると自信を持っている」と述べた。 「私たちはUEVプラットフォームが戦略的利点になると信じています。そして私たちはそれを機能させる最高のチャンスを持っています。」
フォードは、UEVプラットフォームの目標は、このシステムで構築された各車両が発売から1年以内に利益を上げ、中国やテスラなどの世界的なEVリーダーとコスト競争力を発揮できるようにすることだと述べた。フォードは、新技術と効率によって車両の価格をガソリン車と同等にするために、プラットフォームの開発に取り組む秘密部隊を置いた。
フォードは、EV導入が大幅に減速し、米国の消費者がEVを購入するインセンティブがなくなっているにもかかわらず、UEVプラットフォームを推進している。同社は昨年、電気自動車関連のリストラ費用として195億ドルを報告した。
フォード ファゾムは、ルイビル組立工場で同社の新しい組立ツリー製造プロセスを使用して製造されます。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/06/ford-fathom-pickup-truck-price.html",
    publishedAt: "2026-08-06T13:29:39+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "spacex-stock-could-face-further-pressure-3a3cf98b",
    title: "SpaceX stock could face further pressure as first batch of shares unlock since IPO",
    titleJa: "IPO以来、最初の株式がロック解除されるため、SpaceX株はさらなる圧力に直面する可能性がある",
    summaryJa: "初期のスペースX投資家は、初期ロックアップ制限が期限切れとなる木曜日に保有株の一部を現金化する最初のチャンスを迎えることになり、すでに6月中旬からの高値から50％以上下落している株価に圧力がかかる可能性がある。9億1,100万株強のSpaceX株が取引可能となり、これは発行済み株式の約7％に相当する。これは同社の記録的なIPOで販売された6億3900万株を上回る。",
    bodyOriginal: `Early SpaceX investors will have their first chance to cash out a portion of their holdings on Thursday as initial lockup restrictions expire, potentially putting pressure on a stock that's already more than 50% off its high from mid-June.
Just over 911 million SpaceX shares will be available for trading, representing about 7% of shares outstanding. It's more than the 639 million shares that were sold in the company's record IPO.
Elon Musk's reusable rocket maker initially saw its stock price shoot up to $150 as it hit the Nasdaq in June before surpassing $225 days later. But it's been a rocky eight weeks since then, with the shares closing on Wednesday at a low of $108.27. The stock plunged after SpaceX said in its first earnings report late Tuesday that capital expenditures were more than twice as high as revenue.
Greg Martin, co-founder of Rainmaker Securities, told CNBC in an email that the stock's "near-term path" may be more affected by the lockup lifting than any fundamentals or strategy.
And more float is coming. On Aug. 20, another 319 million shares could unlock, according to the prospectus, followed by roughly 700 million in September and close to that number in October.
Musk, the world's richest person, is by far the biggest holder of SpaceX stock with more than 6 billion shares. His holdings are locked up until June 2027.
Regarding the first batch of unlocked shares, analysts at Mizuho noted in a report on Wednesday that, "While the step-up in potential supply is meaningful, we think investors should understand that shares becoming eligible for sale does not mean the full tranche will be offered into the market."
One investor looking to sell is Jessie Bates III, a safety for the Atlanta Falcons.
Bates, 29, said he paid about $150,000 in 2022 for shares at a valuation of $127 billion. SpaceX is currently valued at $1.43 trillion, potentially making Bates' stake worth over $1.5 million. In an emailed statement sent by his publicist, Bates said he plans to sell all of his shares to "lock in gains."
Michael Ledo manages Bates' investments as CEO of the RISE Family Office. Ledo said Bates' portfolio has also included stakes in pre-IPO companies OpenAI, Anthropic, Databricks, Cart.com and Turo. RISE says it focuses on "helping athletes build lasting wealth, become business leaders and build strong families."
Bates said via his publicist that if anything could convince him to buy again, it may be more strategic acquisitions that could open up growth opportunities. In February, SpaceX merged with Musk's xAI in a deal that valued the combined entity at $1.25 trillion. And prior to the IPO, SpaceX agreed to buy Cursor for $60 billion in a transaction expected to close this quarter.`,
    bodyJa: `初期のスペースX投資家は、初期ロックアップ制限が期限切れとなる木曜日に保有株の一部を現金化する最初のチャンスを迎えることになり、すでに6月中旬からの高値から50％以上下落している株価に圧力がかかる可能性がある。
9億1,100万株強のSpaceX株が取引可能となり、これは発行済み株式の約7％に相当する。これは同社の記録的なIPOで販売された6億3900万株を上回る。
イーロン・マスク氏の再利用ロケットメーカーである同社の株価は、6月にナスダックに上場した際に当初150ドルまで急騰し、その後数日後には225ドルを超えた。しかしそれ以来8週間は波乱万丈で、水曜日の株価は108.27ドルの安値で取引を終えた。スペースXが火曜遅くの最初の決算報告で、設備投資が収益の2倍以上だったと発表したことを受け、株価は急落した。
レインメーカー・セキュリティーズの共同創設者グレッグ・マーティン氏は電子メールでＣＮＢＣに対し、株価の「短期的な進路」はいかなるファンダメンタルズや戦略よりもロックアップ解除の影響を受ける可能性があると語った。
そしてさらに浮きが来ます。目論見書によれば、8月20日にさらに3億1,900万株がロック解除される可能性があり、9月には約7億株がロック解除され、10月にはその数に近づく可能性がある。
世界で最も裕福なマスク氏は、60億株以上を保有するスペースX株の群を抜いて最大の保有者である。彼の保有資産は2027年6月までロックアップされている。
みずほのアナリストらは水曜のリポートで、ロック解除株式の第１弾について、「潜在的な供給量の増加は意味があるが、株式が売却適格になったからといって全トランシェが市場に売り出されることを意味するものではないことを投資家は理解すべきだと考えている」と水曜日のリポートで指摘した。
売却を検討している投資家の一人は、アトランタ・ファルコンズのセーフティであるジェシー・ベイツ三世だ。
29歳のベイツ氏は、評価額1,270億ドルの株式に2022年に約15万ドルを支払ったと語った。スペースXの現在価値は1兆4300億ドルで、ベイツ氏の株式の価値は150万ドルを超える可能性がある。広報担当者が電子メールで送った声明の中で、ベイツ氏は「利益を確定させる」ために全株を売却するつもりだと述べた。
Michael Ledo は、RISE Family Office の CEO として Bates の投資を管理しています。レド氏によると、ベイツ氏のポートフォリオにはIPO前の企業であるOpenAI、Anthropic、Databricks、Cart.com、Turoの株式も含まれているという。 RISEは、「アスリートが永続的な富を築き、ビジネスリーダーになり、強い家族を築くのを支援する」ことに焦点を当てていると述べている。
ベイツ氏は広報担当者を通じて、もし何か再購入を説得できるとしたら、それは成長の機会を開く可能性のある、より戦略的な買収かもしれないと述べた。 2月、スペースXはマスク氏のxAIと合併し、合併後の企業価値は1兆2500億ドルとなった。そしてIPOに先立って、SpaceXは今四半期に完了すると予想される取引でCursorを600億ドルで買収することに同意した。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/06/spacex-faces-test-as-shares-unlock-allowing-early-investors-cash-out.html",
    publishedAt: "2026-08-06T13:20:54+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    readTime: 3,
  },
  {
    id: "car-washes-and-vape-shops-can-still-spon-8a4fbd63",
    title: "Car washes and vape shops can still sponsor skilled foreign workers despite visa changes",
    titleJa: "洗車店や電子タバコ店はビザ変更後も熟練外国人労働者のスポンサーになれる",
    summaryJa: "洗車店や電子タバコ店はビザ変更後も熟練外国人労働者のスポンサーになれる- 公開されました",
    bodyOriginal: `Car washes and vape shops can still sponsor skilled foreign workers despite visa changes
- Published
More than 1,900 small high street businesses including mini-marts, vape shops and car washes are licensed to sponsor foreign workers under a specialist scheme intended for high-earning individuals despite visa rules being tightened, BBC Verify has found.
The Home Office scheme allows registered employers to recruit workers from overseas who meet a certain skill level. The rules were tightened in July 2025 to restrict the scheme mostly to graduate-level employees who would be earning at least £41,700.
But a year on from the rule change, BBC Verify has found more than 1,500 grocery and convenience stores, 150 taxi operators, 100 barber shops, and dozens of car washes and vape shops are still on the register and able to sponsor people to apply for visas.
More than 100 of those businesses were added to the skilled worker sponsorship list after the rules were tightened. Being on the register does not mean applications for individual visas would be approved.
Health Secretary Yvette Cooper said on Thursday the government will "make sure that the rules are being properly enforced because we cannot have employers getting round the rules or finding different ways to deviate".
Home Secretary Shabana Mahmood ordered an urgent review into the presence of vape shops, barbers and car washes on the skilled worker sponsor register two months ago, following concerns over the "potential misuse of the system". The Home Office said at the time that any businesses seeking to abuse the system would have their licences revoked.
A Home Office spokesperson said: "We have raised the skilled worker threshold and over 100 occupations are now ineligible for new skilled worker visas."
It is understood some of the companies that joined the register after the rules changed may have applied before they took effect. Some companies may have also remained on the register because they were approved before July 2025 or are sponsoring workers who were already in the UK.
There are more than 120,000 businesses with licences to sponsor skilled workers. The skilled worker scheme was introduced after Brexit for employers to recruit workers after EU free movement ended. Smaller firms must pay a £611 fee to apply to join the register while larger businesses, such as those with more than 50 staff, pay a fee of £1,682. Anyone can be visited by the UK Visas and Immigration service during the application process.
Until July last year, someone being hired from abroad could qualify for sponsorship if their qualifications met an A-Level or equivalent standard, as long as they were paid at least £38,700 in most cases. Since the rule change, non-graduate professions, such as shop managers, are no longer eligible to apply. There are also higher English-language skill requirements that were introduced in January this year.
The Home Office said there were 68,067 skilled worker visas granted in the 12 months to March this year - 29,745 to main applicants and 38,322 to their dependants - which is 30% lower than the year before. IT professionals were the most common type of people to be granted the visas, followed by those people working in finance, while the fall in approvals was mostly attributed to those in food preparation and hospitality trades no longer qualifying for the scheme.
Jobs including sales and retail assistants, taxi drivers and chauffeurs are currently listed by the government as ineligible for skilled worker visas, but there are some exemptions, such as bricklayers, carpenters or nursing assistants and other occupations where there is a shortage in the UK.
The Home Office revoked 3,299 licences in 2025 compared with 347 in 2023. Its register does not state how many certificates of sponsorship or visas have been issued for each business or what type of role it has hired for, but Home Office guidance states firms must offer genuine jobs that meet skill and salary rules, and only sponsor workers for eligible roles.
As businesses are only listed by name, it is not always clear what industry a company operates within. BBC Verify identified the more than 1,900 small high-street businesses that had retained a sponsorship licence by matching their names and locations to Companies House records and Google business listings to identify whether the mini marts, car washes and other small operations were on the list, and by analysing company names.
Around 1,700 of those were in England, more than 140 were in Scotland, over 80 were in Wales and just two were in Northern Ireland.
Separately, BBC Verify found 60 businesses on the register that had been fined for employing illegal workers between April 2024 and December 2025. They had been fined a combined £2.5m.
A Home Office spokesperson said: "Illegal working will not be accepted, and businesses who face two or more illegal working penalties of up to £60,000, or fail to pay a penalty the first time, will have their license to hire workers revoked."
Speaking about the visa rule change, Dr Madeleine Sumption, director of the University of Oxford's Migration Observatory, said that if businesses were on the register before the rules changed, they can continue to employ people they had already sponsored. "But they can't now bring in a new person to do those jobs."
Toby Way, a lawyer at WestBridge Business Immigration which helps businesses apply to be sponsors, told BBC Verify that while most sponsorship approvals are legitimate, "We come across a lot of exaggeration and some downright lying about sponsored roles".
"Hotels and restaurants have been hit massively by the rule changes. They're now unable to sponsor a chef or a manager, but they might claim they need someone for marketing or book-keeping, because those roles are on the temporary shortage list," he said.
"We know the Home Office looks at the finances of the businesses now and whether their revenue or profit means they can pay the required salary."
Immigration lawyer Joanna Hunt of DAC Beachcroft said that it would be difficult for a high street shop to justify sponsorship at the degree level.
"Subject to a few exceptions, a job needs to be skilled to 'degree level' to allow a business to sponsor a worker to fill it and the Home Office will consider if the role fits with the type of business the sponsor operates. A high street shop may find this requirement difficult to demonstrate."
Additional reporting by Rob England and Libby Rogers
Get in touch
Do you have any views, comments or questions about this story?`,
    bodyJa: `洗車店や電子タバコ店はビザ変更後も熟練外国人労働者のスポンサーになれる
- 公開されました
BBCベリファイの調査によると、ビザ規則が厳格化されているにもかかわらず、ミニマート、電子タバコ店、洗車場などの小規模な大通り店1,900社以上が、高所得者向けの専門制度に基づいて外国人労働者のスポンサーとして認可されている。
内務省制度により、登録された雇用主は一定のスキルレベルを満たす海外からの労働者を採用することができます。 2025年7月に規則が強化され、この制度の対象者は主に少なくとも4万1700ポンド以上を稼ぐ大学院レベルの従業員に限定された。
しかし、規則変更から1年が経ち、BBCベリファイは、1,500以上の食料品店とコンビニエンスストア、150のタクシー会社、100の理髪店、数十の洗車店と電子タバコ店が依然として登録されており、人々のビザ申請を後援できることを発見した。
規則が強化された後、これらの企業のうち100社以上が熟練労働者スポンサーリストに追加された。登録されているからといって、個人のビザ申請が承認されるわけではありません。
イベット・クーパー保健長官は木曜日、「雇用主が規則を回避したり、別の逸脱方法を見つけたりすることは許されないため、政府は規則が適切に執行されていることを確認する」と述べた。
シャバナ・マフムード内務大臣は、「システムの悪用の可能性」に対する懸念を受け、2か月前に熟練労働者のスポンサー登録に登録されている電子タバコ店、理髪店、洗車店の存在を緊急に調査するよう命じた。内務省は当時、このシステムを悪用しようとする企業はライセンスを取り消されるだろうと述べていた。
内務省の報道官は「熟練労働者の基準を引き上げたため、現在100以上の職業が新たな熟練労働者ビザの資格を失っている」と述べた。
規則変更後に登録した企業の中には、規則が発効する前に申請していた可能性があると考えられている。一部の企業は、2025 年 7 月より前に承認されていたため、またはすでに英国に滞在していた労働者のスポンサーとなっているため、登録を続けている可能性があります。
熟練労働者をスポンサーするライセンスを持つ企業は 120,000 社以上あります。熟練労働者制度は、EUの自由な移動が終了した後に雇用主が労働者を採用するために、Brexit後に導入された。小規模企業は登録申請に £611 の手数料を支払わなければなりませんが、50 人以上のスタッフを抱える企業などの大規模企業は £1,682 の手数料を支払わなければなりません。申請手続き中に誰でも英国ビザ・移民局を訪問することができます。
昨年7月までは、海外から雇用された人でも、資格がAレベルまたは同等の基準を満たしていれば、ほとんどの場合少なくとも3万8700ポンド以上の報酬が支払われていれば、スポンサーシップを受ける資格を得ることができた。ルール変更以降、ショップマネージャーなどの新卒以外の職種は応募資格がなくなった。今年1月に導入された、より高度な英語スキル要件もあります。
内務省は、今年3月までの12か月間で6万8,067件の熟練労働者ビザが発給され、その内訳は主な申請者に2万9,745件、その扶養家族に3万8,322件で、前年より30％減少したと発表した。ビザを取得する最も一般的なタイプの人々はIT専門家で、次に金融関係の人々が続いたが、承認の減少は主に、この制度の資格を失った食品調理や接客業に従事する人々に起因していた。
政府は現在、販売員や小売店アシスタント、タクシー運転手、運転手などの職種を熟練労働者ビザの対象外としているが、レンガ職人、大工や看護助手、その他英国で人材が不足している職種などは例外とする。
内務省は、2023年には347件だったのに対し、2025年には3,299件のライセンスを取り消した。登録簿には、企業ごとにスポンサーシップやビザの証明書が何枚発行されたか、またどのような職種に雇用したかは記載されていないが、内務省のガイダンスでは、企業はスキルと給与の規定を満たす本物の仕事を提供し、適格な職種の労働者のみをスポンサーしなければならないと規定されている。
企業は名前のみでリストされているため、企業がどのような業界で事業を展開しているかは必ずしも明らかではありません。 BBC Verifyは、スポンサーライセンスを保持していた1,900社以上の小規模大規模ビジネスを特定した。その名前と所在地を企業庁の記録やGoogleのビジネスリストと照合し、ミニマート、洗車場、その他の小規模事業がリストに載っているかどうかを特定し、企業名を分析した。
そのうち約1,700人がイングランド、140人以上がスコットランド、80人以上がウェールズ、北アイルランドはわずか2人だった。
これとは別に、BBC Verifyは、2024年4月から2025年12月までの間に不法労働者を雇用したとして罰金を科された企業60社を登録簿上で発見し、合わせて250万ポンドの罰金を科せられた。
内務省の報道官は、「不法労働は認められず、最大6万ポンドの不法労働の罰金を2回以上課せられる企業、または最初の罰金を支払わなかった企業は労働者雇用許可を取り消される」と述べた。
オックスフォード大学移民観測所所長のマデリーン・サンプション博士は、ビザ規則変更について、規則変更前に企業が登録されていた場合、すでにスポンサーとなっていた人材を雇用し続けることができると述べた。 「しかし、彼らは今、それらの仕事をするために新しい人を雇うことはできません。」
企業のスポンサー申請を支援するウェストブリッジ・ビジネス・イミグレーションの弁護士、トビー・ウェイ氏はBBCベリファイに対し、スポンサーシップの承認のほとんどは正当なものだが、「スポンサーの役割については誇張が多く、中には全くの嘘をついているものに遭遇する」と語った。
「ホテルやレストランは規則変更で大打撃を受けている。現在、シェフやマネージャーのスポンサーとなることはできないが、マーケティングや簿記の人材が必要だと主張するかもしれない。なぜなら、それらの役割は一時的な不足リストに載っているからだ」と同氏は語った。
「内務省が現在企業の財務状況を調査し、その収益や利益が必要な給与を支払うことができるかどうかを調べていることは承知しています。」
DACビーチクロフトの移民弁護士ジョアンナ・ハント氏は、大通りの店が学位レベルでスポンサーシップを正当化するのは難しいだろうと述べた。
「いくつかの例外はあるものの、企業がスポンサーとなる労働者をその職に就かせるためには、その仕事が『学位レベル』まで熟練している必要があり、内務省はその役割がスポンサーが運営するビジネスの種類に適合するかどうかを検討することになる。大通りの店では、この要件を証明するのが難しいと感じるかもしれない。」
ロブ・イングランドとリビー・ロジャースによる追加レポート
連絡する
この話に関して何かご意見、ご意見、ご質問はありますか？`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cj639rx147eo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-06T11:06:26+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/2dba/live/96af7fb0-916e-11f1-b8ee-9b3c26ad07bb.jpg",
    readTime: 7,
  },
  {
    id: "softbank-gets-8-2-billion-boost-from-int-348bb36f",
    title: "SoftBank gets $8.2 billion boost from Intel as OpenAI takes a backseat",
    titleJa: "OpenAIが後手に回り、ソフトバンクはインテルから82億ドルの支援を受ける",
    summaryJa: "ソフトバンクは木曜日、インテル株の大幅な上昇により市場予想を上回る会計年度第1四半期の利益を報告したほか、バイトダンスの価値上昇が同社のビジョン・ファンド部門を支援した。日本の大手企業は、6月四半期の純利益が総額3,473億円（22億ドル）になったと発表した。 ＬＳＥＧの推計によると、アナリスト予想の１２０２億３０００万件を上回った。ただし、前年比では 18% 近く減少しました。",
    bodyOriginal: `SoftBank on Thursday reported profit for its fiscal first quarter that beat market expectations, driven by a huge gain on its stake in Intel, while a rise in ByteDance's value helped its Vision Fund division.
The Japanese giant said net profit for the June quarter totaled 347.3 billion Japanese yen ($2.2 billion). That beat the 120.23 billion expected by analysts, according to LSEG estimates. However, that was a nearly 18% year-on-year decline.
SoftBank saw a 1.3 trillion yen gain on the shares it owns of U.S. chipmaker Intel. SoftBank had announced a roughly $2 billion investment in Intel last year. This helped its investment division, which is separate from the Vision Fund, book segment profit of 1.05 trillion yen. Intel shares have surged nearly 400% over the last 12 months.
The Vision Funds, which house investments spanning OpenAI to TikTok-owner ByteDance, saw a gain of $1.7 billion in value in the first quarter. That was primarily driven by a $2.2 billion increase in the value of SoftBank's stake in Chinese firm ByteDance, which offset declines in companies like PayPay.
SoftBank's Vision Funds segment posted a 5.4 billion yen profit compared to 451.4 billion a year ago. The company said that it saw no gain or loss from its investment in OpenAI.
This is in contrast to the previous quarter, where the company's Vision Funds posted a nearly $20 billion gain, nearly all driven by OpenAI.
OpenAI takes a backseat
SoftBank has committed to invest more than $60 billion in OpenAI, which would give it around 13% ownership of the company, the company said in February. SoftBank said $55 billion of that has already been invested.
However, the company said it did not record any investment gain or loss related to OpenAI.
SoftBank has looked to position itself at the center of the artificial intelligence boom through investments spanning companies like OpenAI and semiconductor companies like Arm.
But investors are heavily scrutinizing AI spending by tech companies and are looking for tangible returns on investments. SoftBank's share price has fallen around 34% from its record high in June as investors grow concerned about how it will continue to fund its bets and the company portfolio's heavy concentration in Arm and OpenAI.
SoftBank posted a 200.8 billion yen loss at its AI computing segment, which was wider than the 32.4 billion yen loss posted in the same quarter last year. This segment includes chip companies that it owns, such as Arm, Graphcore and Ampere. SoftBank said profit deteriorated due to higher research and development costs at the companies.
In June, SoftBank CEO Masayoshi Son told CNBC that he doesn't think the company is overexposed to OpenAI, which makes up around 20% of the Japanese giant's net asset value.
Son also described the AI revolution as being 50 times bigger than the dot-com boom.
"This is the biggest revolution of technology and realization that mankind ever experienced, so this is just like the beginning of the internet," Son added.`,
    bodyJa: `ソフトバンクは木曜日、インテル株の大幅な上昇により市場予想を上回る会計年度第1四半期の利益を報告したほか、バイトダンスの価値上昇が同社のビジョン・ファンド部門を支援した。
日本の大手企業は、6月四半期の純利益が総額3,473億円（22億ドル）になったと発表した。 ＬＳＥＧの推計によると、アナリスト予想の１２０２億３０００万件を上回った。ただし、前年比では 18% 近く減少しました。
ソフトバンクは保有する米半導体大手インテルの株式で１兆３０００億円の利益を得た。ソフトバンクは昨年、インテルへの約20億ドルの投資を発表していた。これにより、ビジョン・ファンドとは別の投資部門のセグメント利益は１兆０５００億円となった。インテル株は過去１２カ月間で４００％近く上昇した。
OpenAIからTikTokオーナーのバイトダンスまで投資を行っているビジョン・ファンドは、第1四半期に17億ドルの価値増加を記録した。これは主に、ソフトバンクの中国企業バイトダンス株の価値が22億ドル増加したことによるもので、ペイペイなどの企業の下落を相殺した。
ソフトバンクのビジョン・ファンド部門は、前年同期の4,514億円に対し、54億円の利益を計上した。同社は、OpenAIへの投資から利益も損失も見られないと述べた。
これは、同社のビジョン ファンドが 200 億ドル近くの利益を記録した前四半期とは対照的であり、そのほとんどすべてが OpenAI によるものでした。
OpenAI は後回しにされる
ソフトバンクはOpenAIに600億ドル以上を投資することを約束しており、これにより同社の約13％の所有権が得られることになると同社は2月に発表した。ソフトバンクは、そのうち550億ドルがすでに投資されていると述べた。
ただし同社は、OpenAIに関連した投資損益は計上していないと述べた。
ソフトバンクは、OpenAIなどの企業やArmなどの半導体企業にまたがる投資を通じて、人工知能ブームの中心に自らを位置づけようとしている。
しかし投資家はハイテク企業によるAI支出を厳しく監視しており、目に見える投資利益を求めている。ソフトバンクの株価は、同社が今後も資金をどのように調達し続けるのか、また同社のポートフォリオがArmとOpenAIに集中していることに投資家が懸念を強める中、6月の過去最高値から約34％下落した。
ソフトバンクはAIコンピューティング部門で2008億円の損失を計上したが、前年同期の324億円の損失より拡大した。このセグメントには、Arm、Graphcore、Ampere など、同社が所有するチップ企業が含まれます。ソフトバンクは、企業の研究開発費の増加により利益が悪化したと述べた。
6月、ソフトバンクの孫正義最高経営責任者（CEO）はCNBCに対し、同社が日本の巨人の純資産価値の約20％を占めるOpenAIに過剰にエクスポージャされているとは思わないと語った。
孫氏はまた、AI革命はドットコムブームの50倍の大きさであると述べた。
「これは人類がこれまで経験した中で最大のテクノロジーと実現の革命であり、まさにインターネットの始まりに似ています」と孫氏は付け加えた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/06/softbank-q1-earnings-intel-bytedance-stakes.html",
    publishedAt: "2026-08-06T07:59:41+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "nintendo-s-fiscal-first-quarter-profit-a-c3606983",
    title: "Nintendo's fiscal first-quarter profit and revenue beat estimates, despite Switch 2 sales slump",
    titleJa: "Switch 2の販売不振にもかかわらず、任天堂の会計年度第1四半期利益と売上高は予想を上回った",
    summaryJa: "任天堂は木曜日に第1四半期決算を報告し、Switch 2コンソールの売上が大幅に減少したにもかかわらず、アナリストの売上高と利益の予想を上回った。LSEGの推定中央値と比較した任天堂の第1四半期（6月30日終了）会計年度の業績は次のとおりだ。",
    bodyOriginal: `Nintendo reported fiscal first-quarter earnings on Thursday, beating analysts' revenue and profit estimates, even as its Switch 2 console sales saw a sharp decline.
Here's how Nintendo did in its fiscal first quarter ended June 30, compared with LSEG median estimates:
- Revenue: 517.8 billion Japanese yen ($3.28 billion) versus 444.96 billion yen expected.
- Net profit: 147.4 billion yen versus 78.30 billion yen expected.
Shares of the Japanese gaming giant closed 2.87% higher ahead of its earnings release.
The company maintained its forecast for the year ending March 2027 announced in May, keeping its net sales outlook unchanged at 2.05 trillion yen.
Nintendo Switch 2 hardware sales fell 34.4% from a year earlier to 3.82 million units, while sales of the original Nintendo Switch dropped 31.8% to 0.66 million units. The company said consumers continued to adopt the Switch 2 despite lower hardware sales than the year-ago period, supported by the release of new titles and other factors.
Nintendo said it has factored nearly a 100 billion yen impact from higher component prices, particularly for memory, and tariffs into its cost of sales.
Nintendo's flagship Switch 2, launched last June, uses memory chips whose prices have risen sharply against a backdrop of robust AI demand.
Nintendo game sales were driven by the solid performance of Tomodachi Life: Living the Dream, which sold 7.94 million units, and Pokémon Pokopia, which sold 1.27 million units.
The company said releasing new titles at regular intervals is crucial to expanding the Switch 2's installed base, adding that a steady pipeline of new games helps broaden the console's appeal to a wider range of consumers.
In the Japanese market, where Nintendo raised Switch 2 prices on May 25, hardware sell-through has remained solid, the company said.
Nintendo earlier announced a $50 price increase for the console in the United States, raising its retail price to $499.99 from $449.99 effective Sept. 1.
Beyond games, Nintendo said "The Super Mario Galaxy Movie" has generated more than $1 billion in global box office revenue since its worldwide release on April 1, making it the second highest-grossing film ever based on a video game.`,
    bodyJa: `任天堂は木曜日に第1四半期決算を報告し、Switch 2コンソールの売上が大幅に減少したにもかかわらず、アナリストの売上高と利益の予想を上回った。
LSEGの推定中央値と比較した任天堂の第1四半期（6月30日終了）会計年度の業績は次のとおりだ。
- 収益: 予想4,449億6,000万円に対し、5,178億円(32億8,000万ドル)。
・純利益：予想783億円に対し1,474億円。
日本のゲーム大手の同社株は決算発表を前に2.87%高で終了した。
同社は５月に発表した２０２７年３月期業績予想を据え置き、売上高見通しは２兆０５００億円で据え置いた。
Nintendo Switch 2 ハードウェアの販売は前年比 34.4% 減の 382 万台となり、初代 Nintendo Switch の販売は 31.8% 減の 66 万台となりました。同社は、ハードウェア売上高が前年同期を下回ったにもかかわらず、新作タイトルのリリースやその他の要因に支えられ、消費者は引き続きSwitch 2を採用したと述べた。
任天堂は、特にメモリなどの部品価格の上昇と関税による1000億円近い影響を売上原価に織り込んでいると述べた。
昨年6月に発売された任天堂の主力機種「Switch 2」には、旺盛なAI需要を背景に価格が急騰したメモリチップが使われている。
任天堂のゲーム売上は、794 万本を販売した『トモダチ ライフ: Living the Dream』と 127 万本を販売した『ポケットモンスター ポコピア』の堅調な業績によって牽引されました。
同社は、定期的に新しいタイトルをリリースすることがSwitch 2のインストールベースを拡大するために重要であると述べ、新しいゲームの安定したパイプラインがコンソールの魅力をより幅広い消費者に広げるのに役立つと付け加えた。
任天堂が5月25日にSwitch 2の価格を引き上げた日本市場では、ハードウェアの売れ行きは堅調に推移していると同社は述べた。
任天堂は以前、米国で同ゲーム機の50ドルの値上げを発表し、9月1日より小売価格を449.99ドルから499.99ドルに引き上げた。
任天堂は、ゲーム以外にも、「スーパーマリオギャラクシームービー」は4月1日の全世界公開以来、全世界で10億ドル以上の興行収入を生み出し、ビデオゲームを原作とした映画としては史上2番目に高い興行収入を記録したと発表した。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/06/nintendo-first-quarter-earnings-switch2.html",
    publishedAt: "2026-08-06T07:43:19+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "google-is-expanding-its-ai-empire-and-lo-b86070c5",
    title: "Google is expanding its AI empire — and losing the people who built it",
    titleJa: "Google は AI 帝国を拡大し、それを築いた人々を失いつつある",
    summaryJa: "どこに座るかに応じて、Google は人工知能の分野で最もうらやましい地位を占めているか、あるいはイノベーションの最前線に立つ主要な AI ラボやその他の新興企業に優秀な人材を流出させているかのどちらかです。これは過去 2 週間で顕著に表れた対照的で、同社がクラウド部門で 82% の収益増加を報告したことに始まり、水曜日には Google の AI 組織に大改革が起こり、チーフサイエンティストのジェフ・ディーン氏が 27 年間勤務した退任を発表した。",
    bodyOriginal: `Depending on where you sit, Google either has the most enviable position in artificial intelligence or is bleeding top talent to leading AI labs and other startups on the frontline of innovation.
It's a contrast that's been on full display over the past two weeks, beginning with the company reporting 82% revenue growth in its cloud division, followed by a shakeup on Wednesday in Google's AI organization, as chief scientist Jeff Dean announced his departure after 27 years.
For Google, home to the famous 2017 transformer paper that paved the way for the generative AI boom, the recent events underscore a central challenge facing the $4 trillion company: where to invest. Building frontier models requires huge upfront costs for compute and research with no guarantee of future returns, while the cloud business is proving to be highly efficient and is growing much faster than rival offerings at Amazon and Microsoft.
Alphabet CEO Sundar Pichai said on last month's earnings call that 90% of Fortune 100 companies are using Gemini Enterprise, underscoring the company's ability to sell AI services to cloud customers.
Tomasz Tunguz, founder of Theory ventures, said it's becoming clear that top-of-the-line models aren't required when it comes to meeting most enterprise demand.
"I think we are at that place with AI, particularly for a lot of white-collar work, where many of the models that are reasonable are good enough," Tunguz said. "The next evolution of models are likely to be helpful in domains where you have really fancy computers."
Google's full-stack approach to AI is a big reason the stock is up 16% this year after jumping 65% in 2025, when it outpaced all of its megacap peers.
It's been a bumpier road of late. Alphabet shares fell after the latest earnings report due to concerns about capital expenditures, and dipped further on Wednesday following the announcement that Dean is departing and Demis Hassabis is stepping down as CEO of Google DeepMind to become chairman of the unit.
While the tone on Wall Street has been generally favorable, not everyone is celebrating inside of Google.
Some researchers have grown frustrated over access to the computing capacity they need to pursue ambitious projects while watching Google Cloud sell TPUs to outside customers, including Anthropic, according to people familiar with the matter who asked not to be named due to confidentiality. Tensor processing units, or TPUs, are the the company's homegrown AI chips that compete with Nvidia's graphics processing units.
Google's bureaucracy is a common source of frustration, with layers of approval required to move research into products. That can make emerging companies like OpenAI, Anthropic or even younger startups more appealing, especially for AI researchers and developers who prefer lab work to balance sheets.
Dean is leaving along with Google stars Sanjay Ghemawat, Oriol Vinyals, and Quoc Le to start Discovery Loop. On X, Dean said the startup, backed by Google, will be a public benefit corporation "whose mission is to automate machine learning, science, and engineering to accelerate discoveries and progress."
Their exit follows the departures of other prominent researchers, including Noam Shazeer, one of the authors of the landmark 2017 paper "Attention Is All You Need," which provided the foundation for generative AI. All eight authors have now left Google. Shazeer left for OpenAI in June, less than two years after Google paid nearly $3 billion to bring him back through an acquihire. His exit came shortly before Nobel laureate John Jumper left DeepMind for Anthropic.
'Part of history'
Gil Luria, an analyst at D.A. Davidson, said there's a clear trend when looking at the exodus of top talent.
"They're not interested in commercializing AI," said Luria, who recommends holding Alphabet stock. "They're interested in being part of history, and so they look at Anthropic, OpenAI or another startup as being the place where they can pursue history."
At Google, Dean was one of the very few high-profile voices willing to criticize the Trump administration, and earlier this year he was vocal in opposing the Pentagon's decision to designate Anthropic as a supply-chain risk, warning that the move could damage the broader U.S. AI industry.
More importantly, from a technical perspective, he helped build the computing infrastructure and neural network systems that established the company as an early leader in modern AI.
Hassabis, who co-founded DeepMind in 2010 and sold it to Google four years later, is becoming chairman of the division and will assume the newly created role of chief scientist at Alphabet, focusing on longer-term research and the societal implications of artificial general intelligence, or AGI. He also plans to devote more time to Isomorphic Labs, the AI drug-discovery company that grew out of DeepMind.
Koray Kavukcuoglu, DeepMind's technology chief and Alphabet's chief AI architect, will take over daily management of the division and development of the next Gemini model. According to a person close to the DeepMind team, Kavukcuoglu had been taking on a broader set of responsibilities from Hassabis over the past year, including directing model development and presenting major Gemini releases. Hassabis, meanwhile, has been spending more time away from the lab, focusing on regulation and the longer-term implications of advanced AI.
One of the biggest points of friction inside Google is compute.
Google is investing more than almost any company in the world in data centers, chips and related infrastructure. But capacity remains scarce. Every TPU assigned to training a model, serving a Google product, or fulfilling a contract with a cloud customer reflects a choice among competing priorities.
Frustrations over access to compute can be especially acute when Google announces large infrastructure commitments to competing labs like Anthropic, whose models compete directly with Gemini, sources with knowledge of the matter said.
One of the people said Google has projections for demand in different areas, including research and model training, serving products such as search and Gemini, and working with cloud customers. Those requirements are modeled years in advance, the person said, though capacity may shift over shorter periods if a product grows faster than expected or if priorities change.
Pichai has said on the past two earnings calls that Google continues to prioritize DeepMind's compute needs even as demand from cloud customers grows. Asked in July about TPU allocation, he said Google's "first priority" is securing the compute needed to compete at the frontier in AGI development, calling that work "the foundation for everything we do."
Pichai went on to say that Google balances that need against the capacity required to run its consumer products and AI models, while increasingly placing TPUs directly in third-party data centers to help satisfy external demand.
Dan Niles, founder of Niles Investment Management and a Google shareholder, said access to compute is a natural source of tension.
"Google has all of these other businesses, and they've got to figure out who they're going to give some of these resources to," Niles said. "Somebody's always going to be unhappy in that situation."
Bringing DeepMind closer to Cloud
In January, at the World Economic Forum in Davos, Hassabis and Kurian appeared onstage together to discuss enterprise products and use cases.
It was a striking sight considering how separately the two organizations have historically operated and how far removed Hassabis was from much of the company, according to a person familiar with Google Cloud's operations who asked not to be named in order to speak candidly on the matter.
The person viewed the joint appearance as a sign that Hassabis was becoming more engaged with enterprise use cases of Google's AI, particularly in areas such as coding and customer service, and reflected a broader effort to bring the company's research and commercial operations closer together as it competes with OpenAI and Anthropic.
In the months that followed, Google ran into a number of snags with its models, most notably delaying the launch of its newest flagship model, Gemini 3.5 Pro. At the same time, Kurian's business has seen its most explosive growth on record.
Kurian, a former top Oracle executive, has led Google Cloud since 2019, building a bustling enterprise sales organization at a company known for its dominance in consumer internet. Google Cloud designs its own AI chips, operates a global data center network, and sells models, databases, security software, and tools for building AI agents.
The strategy gives Google multiple ways to profit from AI demand. It can sell infrastructure to OpenAI, Anthropic, and other labs, while offering Gemini to enterprises and integrating AI across Search, YouTube, Workspace and its other products.
The emerging question, almost four years into the generative AI craze, is whether Google needs to develop the best AI models or if it's better off letting other companies foot the bill.
Kavukcuoglu told CNBC at the company's developer conference in May that Google aims to push the frontier while also improving efficiency. He said the company's Flash model delivers frontier-level capabilities while running four times faster and more efficiently than comparable models, allowing Google to extend advanced AI across enterprise and consumer services.
Like Tunguz, Niles said the most powerful model is unnecessary for many commercial applications.
"The models are good enough for 90% of what needs to get done," he said. "You don't need a Ferrari for this stuff. A Ford will work for 90% of the use cases."
But for the scientists and researchers trying to produce the next transformer-scale breakthrough, being good enough isn't always good enough.`,
    bodyJa: `どこに座るかに応じて、Google は人工知能の分野で最もうらやましい地位を占めているか、あるいはイノベーションの最前線に立つ主要な AI ラボやその他の新興企業に優秀な人材を流出させているかのどちらかです。
これは過去 2 週間で顕著に表れた対照的で、同社がクラウド部門で 82% の収益増加を報告したことに始まり、水曜日には Google の AI 組織に大改革が起こり、チーフサイエンティストのジェフ・ディーン氏が 27 年間勤務した退任を発表した。
生成型 AI ブームへの道を開いた有名な 2017 年の変圧器論文の本拠地である Google にとって、最近の出来事は、4 兆ドル規模の企業が直面する中心的な課題、つまりどこに投資するかを浮き彫りにしています。フロンティア モデルの構築には、将来の収益の保証がないコンピューティングと研究に莫大な初期費用が必要ですが、クラウド ビジネスは効率性が高いことが証明されており、Amazon や Microsoft の競合製品よりもはるかに速いスピードで成長しています。
アルファベットのサンダー・ピチャイ最高経営責任者（CEO）は先月の決算会見で、フォーチュン100企業の90％がGemini Enterpriseを利用していると述べ、クラウド顧客にAIサービスを販売する同社の能力を強調した。
Theory Ventures の創設者である Tomasz Tunguz 氏は、企業の需要のほとんどを満たすには最上位モデルは必要ないことが明らかになりつつあると述べました。
「特に多くのホワイトカラーの仕事において、私たちは AI に関してその段階に達していると思います。そこでは合理的なモデルの多くが十分に適しています」とトゥングス氏は言いました。 「モデルの次の進化は、非常に高級なコンピューターを使用している分野で役立つ可能性があります。」
GoogleのAIに対するフルスタックアプローチは、同社の株価が2025年に65％上昇し、すべてのメガキャップ同業他社を上回った後、今年16％上昇した大きな理由である。
最近はでこぼこした道が続いています。アルファベット株は設備投資への懸念から最新の決算発表後に下落し、ディーン氏が退任し、デミス・ハサビス氏がグーグル・ディープマインドのCEOを辞任して同部門の会長に就任するという発表を受けて水曜日にはさらに下落した。
ウォール街の論調は概して好意的だが、Google社内では誰もが祝福しているわけではない。
機密保持のため匿名を希望した関係者によると、一部の研究者は、Google CloudがAnthropicを含む外部顧客にTPUを販売するのを見ながら、野心的なプロジェクトを推進するために必要なコンピューティング能力へのアクセスに不満を募らせているという。テンソル プロセッシング ユニット (TPU) は、Nvidia のグラフィックス プロセッシング ユニットと競合する同社の自社製 AI チップです。
Google の官僚主義は、研究を製品に移すために何層もの承認が必要となるため、フラストレーションの一般的な原因となっています。これにより、特にバランスシートよりも実験室での作業を好む AI 研究者や開発者にとって、OpenAI、Anthropic、さらには若い新興企業のような新興企業がより魅力的なものになる可能性があります。
ディーンは、Google スターのサンジェイ・ゲマワット、オリオル・ヴィニャルズ、クオック・リーとともに退社し、Discovery Loop を開始します。 Xについてディーン氏は、Googleの支援を受けるこのスタートアップは「機械学習、科学、エンジニアリングを自動化し、発見と進歩を加速することを使命とする」公益法人になると述べた。
彼らの退任は、生成型 AI の基礎を提供した 2017 年の画期的な論文「Attending Is All You Need」の著者の 1 人であるノーム・シャジーアを含む他の著名な研究者の退任に続くものです。著者8人全員が現在Googleを退職している。シャジーア氏は、Googleが買収を通じて彼を呼び戻すために約30億ドルを支払ってから2年も経たないうちに、6月にOpenAIに退職した。彼の退社は、ノーベル賞受賞者のジョン・ジャンパー氏がディープマインドを離れアンスロピック社に移る直前に行われた。
「歴史の一部」
DAのアナリスト、ギル・ルリア氏はこう語る。デビッドソン氏は、優秀な人材の流出を見ると明らかな傾向があると述べた。
「彼らはAIの商業化には興味がない」とアルファベット株の保有を推奨するルリア氏は言う。 「彼らは歴史の一部になることに興味があるので、歴史を追求できる場所としてAnthropic、OpenAI、またはその他のスタートアップを検討しています。」
グーグルでは、ディーン氏はトランプ政権を積極的に批判する数少ない著名な発言者の一人であり、今年初めにはアンスロピックをサプライチェーンリスクに指定するという国防総省の決定に声高に反対し、この動きが広範な米国のAI産業に損害を与える可能性があると警告した。
さらに重要なのは、技術的な観点から見て、彼はコンピューティング インフラストラクチャとニューラル ネットワーク システムの構築に貢献し、同社を現代 AI の初期のリーダーとして確立しました。
2010年にディープマインドを共同設立し、4年後にグーグルに売却したハサビス氏は同部門の会長に就任し、アルファベットで新たに創設された主席研究員の役割を引き継ぎ、汎用人工知能（AGI）の長期研究と社会的影響に重点を置く。彼はまた、DeepMind から発展した AI 創薬会社である Isomorphic Labs にもっと多くの時間を費やす予定です。
DeepMind のテクノロジー責任者であり、Alphabet のチーフ AI アーキテクトである Koray Kavukcuoglu 氏が、次期 Gemini モデルの部門と開発の日常管理を引き継ぎます。 DeepMind チームに近い関係者によると、Kavukcuoglu 氏はこの 1 年間、モデル開発の指揮や Gemini の主要リリースの発表など、より幅広い責任を Hassabis から引き受けていました。一方、ハサビス氏は研究室から離れて多くの時間を費やし、規制と高度なAIの長期的な影響に焦点を当てている。
Google 社内での最大の摩擦点の 1 つはコンピューティングです。
Google は、データセンター、チップ、および関連インフラストラクチャに対して、世界中のほぼどの企業よりも多くの投資を行っています。しかし、容量は依然として不足しています。モデルのトレーニング、Google 製品の提供、クラウド顧客との契約履行に割り当てられたすべての TPU は、競合する優先事項の中からの選択を反映しています。
コンピューティングへのアクセスをめぐる不満は、GoogleがAnthropicのような競合研究所への大規模なインフラストラクチャ契約を発表したときに特に深刻になる可能性があり、そのモデルはGeminiと直接競合する、と事情に詳しい関係者らは述べた。
関係者の1人は、Googleは研究やモデルのトレーニング、検索やGeminiなどの製品の提供、クラウド顧客との連携など、さまざまな分野での需要を予測していると語った。同関係者によると、こうした要件は何年も前からモデル化されているが、製品が予想よりも早く成長したり、優先順位が変わったりした場合には、生産能力が短期間で変化する可能性があるという。
ピチャイ氏は過去2回の決算会見で、クラウド顧客からの需要が高まっているにもかかわらず、Googleは引き続きDeepMindのコンピューティングニーズを優先していると述べた。 7月にTPUの割り当てについて尋ねられた同氏は、Googleの「最優先事項」はAGI開発の最前線で競争するために必要なコンピューティングを確保することであり、その取り組みが「私たちが行うすべての基盤」であると述べた。
ピチャイ氏は続けて、Googleは外部需要を満たすためにTPUをサードパーティのデータセンターに直接配置することを増やしながら、その需要と自社の消費者向け製品やAIモデルの実行に必要な容量のバランスを取っていると述べた。
Niles Investment Management の創設者で Google の株主でもある Dan Niles 氏は、コンピューティングへのアクセスは当然の緊張の源であると述べました。
「Googleは他にもさまざまな事業を展開しており、これらのリソースの一部を誰に提供するかを考えなければならない」とナイルズ氏は語った。 「そのような状況では、必ず誰かが不幸になります。」
DeepMind をクラウドに近づける
1月にダボスで開催された世界経済フォーラムで、ハサビス氏とクリアン氏は一緒にステージに登場し、エンタープライズ製品とユースケースについて議論した。
この件について率直に話すため匿名を希望した Google Cloud の運営に詳しい関係者によると、この 2 つの組織が歴史的にどれほど別々に運営されてきたか、そして Hassabis が会社の大部分からどれほど離れていたかを考えると、これは驚くべき光景だったという。
同関係者は、今回の共同出演を、ハサビス社が特にコーディングや顧客サービスなどの分野でグーグルのAIのエンタープライズユースケースにもっと関与しつつあることの表れであり、OpenAIやAnthropicと競合する同社の研究と商業事業を緊密に連携させる広範な取り組みを反映していると見ていた。
その後の数か月間、Google は自社モデルで多くの障害に遭遇し、最も注目に値するのは最新の主力モデルである Gemini 3.5 Pro の発売が遅れたことです。同時に、クリアンのビジネスは記録上最も爆発的な成長を遂げました。
Oracle の元トップ幹部であるクリアン氏は、2019 年から Google Cloud を率いており、消費者向けインターネットでの優位性で知られる同社で、活気のあるエンタープライズ販売組織を構築しています。 Google Cloud は独自の AI チップを設計し、グローバル データセンター ネットワークを運営し、AI エージェントを構築するためのモデル、データベース、セキュリティ ソフトウェア、ツールを販売しています。
この戦略により、Google は AI 需要から利益を得る複数の方法を得ることができます。 OpenAI、Anthropic、その他の研究機関にインフラストラクチャを販売すると同時に、Gemini を企業に提供し、検索、YouTube、Workspace、その他の製品全体に AI を統合できます。
生成型 AI のブームが始まってからほぼ 4 年が経ち、新たな問題は、Google が最高の AI モデルを開発する必要があるのか​​、それとも他の企業に費用を負担してもらう方が良いのかということです。
カブククオグル氏は5月に開催された同社の開発者カンファレンスでCNBCに対し、Googleは効率を向上させながら新境地を開拓することを目指していると語った。同氏は、同社のFlashモデルはフロンティアレベルの機能を提供しながら、同等のモデルに比べて4倍高速かつ効率的に実行できるため、Googleは高度なAIをエンタープライズサービスとコンシューマーサービス全体に拡張できると述べた。
ナイルズ氏もツングス氏と同様、最も強力なモデルは多くの商用アプリケーションには不要だと述べた。
「モデルは、実行する必要のあることの 90% を達成するのに十分です」と彼は言いました。 「この用途にはフェラーリは必要ありません。ユースケースの 90% にはフォードで機能します。」
しかし、次の変圧器規模のブレークスルーを生み出そうとしている科学者や研究者にとって、十分に優れているだけでは必ずしも十分とは限りません。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/05/google-is-expanding-its-ai-empire-and-losing-the-people-who-built-it.html",
    publishedAt: "2026-08-06T06:06:18+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "winemakers-prosper-but-veg-farms-wilt-in-941b9fd0",
    title: "Winemakers prosper but veg farms wilt in the drought",
    titleJa: "ワインメーカーは繁栄するが、野菜農場は干ばつで衰退する",
    summaryJa: "ワインメーカーは繁栄するが、野菜農場は干ばつで衰退する- 公開されました",
    bodyOriginal: `Winemakers prosper but veg farms wilt in the drought
- Published
Until this year, Phil Collins, a Wiltshire vegetable farmer, had never had an overdraft. Six weeks without rain has scorched his cauliflowers, shrivelled his spuds, and shrunk his bank balance.
"Six thousand cauliflowers at £1.25 each," he said ruefully. "You do the maths."
Veg farmers across the country are warning of a shortage of produce after the driest July for 190 years. But there are winners, notably winemakers.
"The vines love the warm, dry days," said Somerset winemaker Sandy Luck.
So as the heatwaves and drought persist, who is thriving, who is struggling, and will farmers have to change what they grow in a warming climate?
Walking between the vines in Sandy Luck's Aldwick Estate vineyard, just south of Bristol, you could be in Southern France, not North Somerset. The sun is out, again, and the grapes are plump and plentiful.
"We're getting nice ''veraison' here, look at that," she says, showing me a bunch where some of the young green fruit are turning purple, tinged with grey.
"We're ahead of the game this year."
Winemakers love this summer. The long hot dry days have helped ripen the fruit and "keep disease at bay", as Luck puts it. There is a subtle shift too.
More sun means more sugar in the grapes, which will mean higher alcohol content.
This allows English winemakers to produce still red wines, where traditionally the cool climate had limited them to drier sparkling varieties.
A hot dry summer in 2025 meant Aldwick produced some "very good looking still reds" from the Pinot Noir grapes, instead of using them for fizz.
"It makes a more rounded wine," Luck explained. "The quality is higher, and we have more variety we can make," she explained.
Simply put, the South and South West of England are now frequently getting the kind of summers found in central France 20 years ago. So making French style wine is now possible, and Aldwick frequently win awards for their Somerset vintages.
Hot summers also mean more wine. In 2025, English wine production was 55% up on the previous year.
So could French weather mean French wine prices? English wine has always been more expensive than continental competition.
"Sadly not," Luck smiled. "We are a small team, our vineyard is just over 12 acres, and we are going for quality not quantity."
Just 50 miles from the thriving Somerset grapevines, in a field near Devizes, Phil Collins shows me a much sadder sight.
"Six and a half thousand cauliflowers here, which have just basically cooked," he explained.
The leaves are brown and crispy. Inside there are tiny cauliflowers, brown and dried up. We walk on, through a field of potatoes, the plants shrivelled to nothing and lying brown on the soil.
"This is Marfona, which is meant to be a drought resistant variety," Collins said.
"But this year has just been so dry, it couldn't cope with it. The plants should be two foot high and green - there's nothing left there."
He and his team sell veg through farmers' markets, but still compete with supermarket prices. If he was to irrigate all his crops to keep them alive, the costs would be so high his cauliflowers, spuds and carrots would be far pricier than supermarket alternatives.
He picks runner beans each morning, and is getting "about a third of the normal crop".
"I've never had an overdraft in thirty years," he said. "This year has been so bad, we've no choice. We will get over it, but it'll take a while."
Met Office climate scientists are clear: the heatwaves of 2026 are exacerbated by climate change, and the UK will see more hot dry summers more often.
"We are seeing the emergence of new warmer climates," explained Mike Kendon, climate scientist at the Met Office.
Farmers like Sandy Luck and Phil Collins know this, and are trying to plan.
For vineyards, it is mostly good news. Well-tended vines sink deep roots, and the heat stress "is actually good for them, making them go deeper, and put out more grapes," explained Luck.
But Phil Collins is wondering what plants to grow next year. "Pumpkins are a mediterranean crop, they should do OK, but even they have struggled this year with the dry," he said.
He looked out across his fields of brown, scorched plants.
"I really just don't know what to grow if it carries on like this."
Get in touch
Tell us which stories we should cover in Somerset
Follow BBC Somerset on Facebook, external and X, external. Send your story ideas to us on email or via WhatsApp on 0800 313 4630.
Related topics
- Published1 day ago
- Published29 July
- Published2 days ago
- Published15 July`,
    bodyJa: `ワインメーカーは繁栄するが、野菜農場は干ばつで衰退する
- 公開されました
ウィルトシャー州の野菜農家であるフィル・コリンズさんは、今年になるまで当座貸越をしたことがなかった。 6週間雨が降らなかったため、カリフラワーは焦げ、スパッドはしなび、銀行残高は減少した。
「6,000個のカリフラワーが1本1.25ポンドだ」と彼は残念そうに言った。 「あなたは計算をします。」
全国の野菜農家は、190年ぶりに最も乾燥した7月以降、農作物が不足すると警告している。しかし、勝者、特にワインメーカーもいます。
「ブドウの木は暖かく乾燥した日を好みます」とサマセット州のワインメーカー、サンディ・ラック氏は言う。
それでは、熱波と干ばつが続く中、誰が繁栄し、誰が苦境に立たされているのでしょうか?そして、農家は温暖化気候で栽培するものを変えなければならないのでしょうか?
ブリストルのすぐ南にあるサンディ ラックのアルドウィック エステートのブドウ園のブドウ畑の間を歩いていると、そこは北サマセットではなく南フランスかもしれません。太陽が再び出て、ブドウはふっくらと豊かに実ります。
「ここでは素敵な『ベレゾン』ができていますよ、見てください」と彼女は言い、若い緑色の果実のいくつかが紫色に変わり、灰色がかっている一房を私に見せた。
「今年は我々が先を行っている。」
ワインメーカーはこの夏を愛しています。長く暑くて乾燥した日が果物を成熟させ、幸運の言葉を借りれば「病気を寄せ付けない」のに役立っている。微妙なズレもあります。
太陽の光が多ければブドウの糖分も多くなり、アルコール度数も高くなります。
これにより、英国のワインメーカーは伝統的に冷涼な気候のせいで辛口のスパークリング品種しか生産できなかったが、スティル赤ワインの生産が可能になった。
2025年の暑くて乾燥した夏により、アルドウィックはピノ・ノワールのブドウをフィズ用に使用する代わりに、「非常に見栄えの良いスティル・レッド」を生産しました。
「それにより、よりまろやかなワインが生まれます」とラック氏は説明した。 「品質はより高く、より多くの種類を作ることができます」と彼女は説明しました。
簡単に言うと、イングランド南部と南西部は現在、20年前にフランス中部で見られたような夏が頻繁に訪れるようになっている。そのため、フランススタイルのワインを作ることが可能になり、アルドウィックはサマセットのヴィンテージで頻繁に賞を受賞しています。
暑い夏にはワインも必要になります。 2025 年のイギリスのワイン生産量は前年比 55% 増加しました。
それでは、フランスの天気はフランスワインの価格を意味するのでしょうか？イギリスのワインは常に大陸のワインよりも高価でした。
「残念ながらそうではありません」とラックは微笑んだ。 「私たちは小規模なチームで、ブドウ畑の面積は 12 エーカー強で、量ではなく質を重視しています。」
生い茂るサマセットブドウ畑からわずか80マイル離れたデバイズ近くの畑で、フィル・コリンズはもっと悲しい光景を私に見せた。
「ここには65000個のカリフラワーがあり、ほぼ調理済みです」と彼は説明した。
葉は茶色でシャキシャキしています。中には茶色く枯れた小さなカリフラワーが入っています。私たちはジャガイモ畑の中を歩き続けましたが、ジャガイモはしなびて土の上に茶色く横たわっていました。
「これはマルフォナです。乾燥に強い品種です」とコリンズ氏は言う。
「しかし、今年は非常に乾燥していたので、それに対処できませんでした。植物は高さ2フィートで緑でなければなりません。そこには何も残っていないのです。」
彼と彼のチームはファーマーズ マーケットを通じて野菜を販売していますが、依然としてスーパーマーケットの価格と競合しています。もし彼がすべての作物を生かし続けるために灌漑をしたとしたら、そのコストは非常に高くなり、彼のカリフラワー、スパッド、ニンジンはスーパーマーケットの代替品よりもはるかに高価になるでしょう。
彼は毎朝ランナー豆を収穫し、「通常の収穫量の約3分の1」を収穫している。
「30年間一度も当座貸越をしたことがない」と彼は言った。 「今年は本当にひどい年だったので、私たちには選択の余地がありません。必ず乗り越えますが、時間がかかります。」
気象庁の気候科学者らは、2026年の熱波は気候変動によってさらに悪化し、英国では乾燥した暑さの夏がより頻繁に起こるだろうと明言している。
「新たな温暖な気候の出現が見られます」と気象庁の気候科学者マイク・ケンドン氏は説明する。
サンディ・ラック氏やフィル・コリンズ氏のような農家はこのことを知っており、計画を立てようとしている。
ブドウ園にとって、これはほとんど良いニュースだ。よく手入れされたブドウの木は根が深く沈み、暑さのストレスが「実はブドウの木に良い影響を与え、より深く根を張り、より多くのブドウを実らせるのです」とラック氏は説明した。
しかしフィル・コリンズさんは、来年どんな植物を育てようか迷っている。 「カボチャは地中海産の作物なので大丈夫なはずだが、それでも今年は乾燥に苦戦している」と同氏は語った。
彼は茶色く焦げた植物の畑を見渡しました。
「このままだと何を育てればいいのか全く分かりません。」
連絡する
サマセットで取り上げるべきストーリーを教えてください
Facebook (外部) および X (外部) で BBC Somerset をフォローしてください。ストーリーのアイデアを電子メールまたは WhatsApp (0800 313 4630) でお送りください。
関連トピック
- 1 日前に公開
- 7 月 29 日発行
- 2 日前に公開
- 7 月 15 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c141vjlyjgko?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-06T05:19:40+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/81de/live/87127c20-90d7-11f1-a5b9-331adf7bef90.jpg",
    readTime: 6,
  },
  {
    id: "cashing-in-on-spacex-every-chance-i-get-237a000b",
    title: "Cashing in on SpaceX: 'Every chance I get, I'll sell a little more'",
    titleJa: "SpaceXで儲ける：「チャンスがあれば、もう少し売ろう」",
    summaryJa: "SpaceXで儲ける：「チャンスがあれば、もう少し売ろう」- 公開されました",
    bodyOriginal: `Cashing in on SpaceX: 'Every chance I get, I'll sell a little more'
- Published
Andre Lavoie joined SpaceX in 2009 as an engineer, designing the pressure tanks that help power its rocket. He was paid partly in stock - a common trade-off at start-ups as a hiring incentive.
Some 17 years on, those 200,000 shares he was given are worth about $23m (£17m) - and the 63-year-old says he's ready to start cashing them as soon as he can.
"Every chance I get going forward, I'll sell a little bit more," he tells the BBC.
"The shares have been going up so radically it keeps messing up my life plans - you really can't know the future, so it's better to sell early and in intervals."
Lavoie is far from being the only one who has seen the value of his stake in SpaceX rocket over the years.
The company's founder, Elon Musk, said on Fox News that SpaceX's listing on the stock market in June had likely made "several thousand" employees millionaires - including staff "who were working on the production line".
According to reports, there are estimated to be 4,400 new millionaires created by the listing.
Unlike most newly-listed firms, SpaceX shares are set to be released in stages: the first 20% on 6 August, with more due in batches through the rest of the year.
Whether or not shareholders decide to sell their stake at the first opportunity is a matter for individuals. Unlike Lavoie, some may choose to hold onto their shares altogether in the hope of bigger gains later.
SpaceX listed on the Nasdaq in June, in the biggest initial public offering (IPO) in history, valuing the rocket and satellite firm at more than $2 trillion.
It briefly made Elon Musk the world's first trillionaire, before the stock cooled and his fortune slipped back below the milestone within weeks.
In its first results as a public company this week, the firm's quarterly revenue was shown to have nearly doubled to $7.8bn (£5.8bn) from a year earlier, while its spending ballooned to $18.3bn - more than six times what it was a year ago.
Overall, SpaceX made a net loss of $143m in the three months to June, and a loss of $2bn during the first six months of the year.
Musk pushed back against sceptics on an earnings call: "I think people are really underestimating Starlink". He predicted the satellite internet service - the one part of the company that is currently making a profit - could one day deliver a majority of the world's internet.
But shares in the company tumbled on the back of the earnings report, with investors generally spooked by the huge amounts of money being spent on AI.
Lavoie plans to use his money from selling some of his shares to fund a hotel he is renovating in Pontebba, Italy's northeastern Friuli region, plus a small brewery.
He says is priority for the future is raising awareness of air pollution in the area, in partnership with a local environmental group.
Before he was hired, Lavoie was interviewed by Musk himself.
"He's a very charming person when he wants something," Lavoie says.
He wouldn't be drawn on Musk's politics - "that's his business" - but is unreserved about the company: "I've always been happily supportive and impressed, and would work hard with those incredible people again."
Some analysts value SpaceX at less than half its current stock market price, warning its ties to xAI carry real financial risk - part of a broader worry on Wall Street that sky-high valuations for AI-linked firms, including SpaceX, OpenAI and Anthropic, could prove overdone.
Sinead O'Sullivan, an economist who has previously worked for Nasa, told the BBC in June she thinks SpaceX is an "Elon Musk ego project".
"You're buying a share of the Elon Musk brand more than any kind of space industry," she said.
But Ron Epstein, an aerospace analyst at Bank of America Securities, says the recent share price swings say more about the market than the company.
"A lot of it has to do with macro trends," he says. "None of it really has anything to do with what's going on fundamentally at the company."
He says investors judging SpaceX purely as an AI bet are missing the point: "They're not just a compute provider. They're not just an AI company. It's a far more complicated picture than that."
SpaceX, he adds, has cut the cost of reaching orbit from around $10,000-$20,000 a kilogram to about $2,000 with its Falcon 9 rocket - "they have built a railroad to space."
Lavoie, for his part, isn't rattled. He says: "The solid business model of SpaceX will prove itself to be worth the investment,"even as he takes some of his own winnings off the table.
- Published18 hours ago`,
    bodyJa: `SpaceXで儲ける：「チャンスがあれば、もう少し売ろう」
- 公開されました
アンドレ・ラヴォワ氏は、2009 年にエンジニアとしてスペース X に入社し、ロケットに動力を供給する圧力タンクを設計しました。彼は給与の一部を株式で受け取ったが、これは雇用インセンティブとしてスタートアップ企業ではよくあるトレードオフだった。
それから約17年が経ち、彼に与えられた20万株の価値は約2,300万ドル（約1,700万ポンド）に達し、63歳の彼はできるだけ早く現金化を始めるつもりだと語った。
「今後機会があれば、もう少し売ろうと思います」と彼はBBCに語った。
「株価があまりにも急激に上昇しており、私の人生計画が狂い続けています。未来は本当にわかりません。ですから、早めに、間隔をあけて売却したほうが良いのです。」
長年にわたってスペースXロケットへの出資の価値を認識してきたのはラボワ氏だけではない。
同社の創設者イーロン・マスク氏はFOXニュースで、スペースXが6月に株式市場に上場したことで、「生産ラインで働いていた」スタッフを含む「数千人」の従業員が億万長者になった可能性が高いと語った。
報道によると、この上場により新たに億万長者が4,400人誕生すると推定されている。
ほとんどの新規上場企業とは異なり、スペースX株は段階的に放出される予定で、8月6日に最初の20％が放出され、残りの期間を通じてさらに多くの放出が予定されている。
株主が最初の機会に株式を売却するかどうかは個人の問題です。ラヴォワとは異なり、後でさらに大きな利益を期待して株式を完全に保持することを選択する人もいるかもしれません。
スペースXは6月、史上最大の新規株式公開（IPO）でナスダックに上場し、ロケット・衛星企業の評価額​​は2兆ドルを超えた。
これによりイーロン・マスク氏は一時的に世界初の大富豪となったが、数週間以内に株は冷え込み、彼の資産は節目を下回った。
今週公開企業として初めて発表された決算では、同社の四半期売上高が前年同期比ほぼ2倍の78億ドル（58億ポンド）となった一方、支出は183億ドルに膨れ上がり、前年の6倍以上となった。
全体として、SpaceX は 6 月までの 3 か月で 1 億 4,300 万ドルの純損失を出し、今年最初の 6 か月では 20 億ドルの損失を出しました。
マスク氏は決算会見で懐疑論者に対し「人々はスターリンクを本当に過小評価していると思う」と反論した。同氏は、現在利益を上げている同社の一部である衛星インターネット サービスが、いつか世界のインターネットの大部分にサービスを提供できるようになるだろうと予測した。
しかし、投資家はAIに巨額の資金が費やされることに一般的に恐怖を感じており、同社の株価は決算報告を受けて急落した。
ラヴォワ氏は、保有株の一部を売却して得た資金を、イタリア北東部フリウリ地方ポンテッバにある改装中のホテルと小さな醸造所の資金に充てることを計画している。
今後の優先事項は、地元の環境団体と協力して、その地域の大気汚染に対する意識を高めることだと彼は言う。
雇用される前に、ラヴォワ氏はマスク氏自身から面接を受けた。
「何かを望むとき、彼はとても魅力的な人です」とラヴォワさんは言う。
同氏はマスク氏の政治には関心を示さないが、「それは彼の仕事だ」と述べたが、同社については遠慮がない。「私はいつも喜んでサポートし、感銘を受けてきたし、またあの素晴らしい人々と一緒に一生懸命働くつもりだ」と語った。
アナリストの中には、スペースXの株価を現在の株価の半分以下と評価し、xAIとの関係には実質的な財務リスクがあると警告する人もいる。これは、スペースX、オープンAI、アンスロピックなどのAI関連企業の高騰する評価が行き過ぎであることが判明する可能性があるというウォール街での広範な懸念の一環だ。
以前NASAで働いていた経済学者シニード・オサリバン氏は6月にBBCに対し、スペースXは「イーロン・マスクのエゴプロジェクト」だと考えていると語った。
「あなたはどんな宇宙産業よりもイーロン・マスク・ブランドの株を買っているのです」と彼女は言った。
しかし、バンク・オブ・アメリカ証券の航空宇宙アナリスト、ロン・エプスタイン氏は、最近の株価の変動は同社のことよりも市場のことを物語っていると語る。
「その多くはマクロトレンドに関係しています」と彼は言う。 「そのどれも、会社で根本的に起こっていることとはまったく関係がありません。」
同氏は、スペースXを純粋にAIへの投資として判断している投資家は要点を見逃していると述べ、「彼らは単なるコンピューティングプロバイダーではない。単なるAI企業でもない。事態はそれよりもはるかに複雑だ」と述べた。
同氏は、スペースX社はファルコン9ロケットにより、軌道に到達するコストを1キログラム当たり約1万ドルから2万ドルから約2千ドルに削減したと付け加えた。「彼らは宇宙への鉄道を建設したのだ」と付け加えた。
ラヴォワ氏は動揺していない。彼は、自分の賞金の一部を差し引いても、「スペースXの堅実なビジネスモデルは、投資に値するものであることが証明されるだろう」と述べている。
- 18 時間前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cm2g0j3y339o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-06T05:00:54+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/59e8/live/c0b97ce0-910d-11f1-b61e-4f9456542bbf.png",
    readTime: 5,
  },
  {
    id: "u-s-ready-to-return-to-commitments-iran-210ce061",
    title: "U.S. ready to return to 'commitments,' Iran says, after Trump signals deal is near",
    titleJa: "トランプ大統領が合意が近いと示唆した後、米国は「約束」に戻る用意があるとイランが表明",
    summaryJa: "イランは、ドナルド・トランプ大統領が合意形成中であることを示唆したことを受けて、米国には「約束に戻る」用意があると述べたが、米国との交渉が進行中であることは否定した。イランのカゼム・ガリバダディ外務副大臣は水曜日、国営放送IRNAとのインタビューで、当該約束について詳しくは述べずにこうしたコメントを述べ、おそらく6月に達した暫定合意に言及したものと思われる。",
    bodyOriginal: `Iran said the U.S. was ready to "return to commitments," while denying that negotiations were ongoing with Washington, after President Donald Trump signaled a deal was in the making.
Iran Deputy Foreign Minister Kazem Gharibadadi made those comments in an interview with state broadcaster IRNA on Wednesday, without elaborating on the said commitments, likely referring to the interim understanding reached in June.
Under the memorandum of understanding signed on June 17 between the U.S. and Iran, Tehran was supposed to allow commercial vessels to transit the Strait of Hormuz with no charge for 60 days. In return, Washington had committed to lifting its naval blockade of Iranian ships, among other things.
Trump had accused the Islamic republic's leaders on Monday stateside of being "duplicitous" about peace talks, saying they were underway "whether Iran wants to admit it or not."
Gharibadadi said that, "The path of understanding is between Iran and Oman, and no negotiations with the US have taken place during this period."
The White House did not immediately respond to CNBC's request for comments.
Before Gharibadadi's statements, Iran's foreign ministry spokesperson Esmail Bagahei said a joint statement from Iran and Oman regarding the Strait of Hormuz, was in the "final review and drafting stage," provided that "some third parties do not obstruct work in this regard."
On Tuesday night stateside, Axios reported that the U.S., Iran and Oman were closing in on an interim agreement to reopen the Strait of Hormuz, with Washington aiming for a Wednesday announcement.
Treasury Secretary Scott Bessent also told CNBC that a deal to unlock the waterway could be reached this by Wednesday.
U.S. Central Command insisted in an X post Tuesday that the "southern route through the Strait of Hormuz remains free and open for all commercial vessels seeking to transit the international waterway." The southern route passes through Omani territorial waters, rather than the part closer to Iran.
Separately, UK's Maritime Trade Organisation said on Thursday it had received reports of explosions near tankers off Yemen and Oman on Wednesday.
— CNBC's Kevin Breuninger contributed to this report.`,
    bodyJa: `イランは、ドナルド・トランプ大統領が合意形成中であることを示唆したことを受けて、米国には「約束に戻る」用意があると述べたが、米国との交渉が進行中であることは否定した。
イランのカゼム・ガリバダディ外務副大臣は水曜日、国営放送IRNAとのインタビューで、当該約束について詳しくは述べずにこうしたコメントを述べ、おそらく6月に達した暫定合意に言及したものと思われる。
6月17日に米国とイランの間で署名された覚書に基づき、イラン政府は商船のホルムズ海峡通過を60日間無料で許可することになっていた。その見返りとして、ワシントンはイラン船舶に対する海上封鎖を解除することなどを約束していた。
トランプ大統領は月曜日、イスラム共和国の指導者らが和平交渉について「二枚舌」だと非難し、和平交渉は「イランが認めるか否かに関係なく」進行中であると述べた。
ガリバダディ氏は、「理解の道はイランとオマーンの間であり、この期間中米国との交渉は行われていない」と述べた。
ホワイトハウスはCNBCのコメント要請にすぐには応じなかった。
ガリバダディ氏の発言に先立ち、イラン外務省のエスマイル・バガヘイ報道官は、ホルムズ海峡に関するイランとオマーンの共同声明は、「一部の第三者がこの点で作業を妨害しない」という条件で「最終検討と草案段階」にあると述べた。
アクシオス通信は火曜日夜、米国、イラン、オマーンがホルムズ海峡再開に向けた暫定合意に近づいており、米国政府は水曜日の発表を目指していると報じた。
スコット・ベッセント財務長官もCNBCに対し、水曜日までに水路のロックを解除する合意に達する可能性があると語った。
米中央軍は火曜日のXポストで、「ホルムズ海峡を通る南航路は引き続き自由であり、国際水路を通過しようとするすべての商船に開かれている」と主張した。南側ルートはイランに近い部分ではなく、オマーンの領海を通過する。
これとは別に、英国海事貿易機関は木曜日、水曜日にイエメンとオマーン沖でタンカー付近で爆発があったとの報告を受けたと発表した。
— CNBC の Kevin Breuninger がこのレポートに貢献しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/06/us-iran-war-hormuz-trump-bessent-deal.html",
    publishedAt: "2026-08-06T03:00:05+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 2,
  },
  {
    id: "meta-says-ai-model-accessed-the-internet-bd3e01aa",
    title: "Meta says AI model accessed the internet and hacked another firm",
    titleJa: "メタ氏はAIモデルがインターネットにアクセスし、別の企業をハッキングしたと主張",
    summaryJa: "メタ氏はAIモデルがインターネットにアクセスし、別の企業をハッキングしたと主張- 公開されました",
    bodyOriginal: `Meta says AI model accessed the internet and hacked another firm
- Published
Facebook owner Meta says an issue during an evaluation by an independent testing company allowed one of its artificial intelligence (AI) models to connect to the internet and hack another organisation's system.
The announcement follows recent incidents across the AI industry, including breaches by OpenAI and Anthropic models, that have raised cyber-security concerns.
A Meta spokesperson told the BBC that it was investigating the hack that was caused by a "misconfiguration", which it described as similar to previously reported incidents at other firms.
The incidents have prompted researchers and governments to call for tougher safeguards and more rigorous testing.
Meta said the security trials were conducted by Irregular, the same AI security vendor that carried out tests for Anthropic's AI model that had gained access to three other companies' systems.
An Irregular spokesperson said the Meta incident "is the exact same evaluation-environment issue that was already disclosed by Anthropic last week."
Irregular is working on a report on how to securely run cyber-security tests involving AI agents, the firm's spokesperson told the BBC.
Meta also said it will publish more information on the incident "once we have all the facts."
In the past two weeks, AI leaders OpenAI and Anthropic have also reported incidents in which their models hacked into other organisation's systems during testing.
ChatGPT-maker OpenAI said in a series of announcements that its agents attacked several publicly available services, including AI tools hub Hugging Face.
OpenAI's disclosure prompted rival Anthropic to conduct its own checks, leading to the discovery that its Claude AI model had carried out similar attacks on several firms after a "misconfiguration" gave it access to the internet.
Some commentators have questioned the timing of disclosures about the incidents as tech firms wrestle for dominance in AI development.
OpenAI and Anthropic are preparing blockbuster stock market listings that are expected to value each firm at around $1tn (£740bn).
This week, the UK's AI Security Institute (AISI) said that its testing had found that some models tried to carry out cyber-attacks by creating fake human profiles to try and trick people.
In the most serious case, the AISI said Anthropic's Mythos AI tried to gain access to a service by sending private messages using fake accounts mimicking real people.
Anthropic said AISI's tests were not "representative of any of our production models". OpenAI, whose models were also tested, said AISI's evaluations did not reflect ordinary use.`,
    bodyJa: `メタ氏はAIモデルがインターネットにアクセスし、別の企業をハッキングしたと主張
- 公開されました
フェイスブックのオーナー、メタ氏は、独立系テスト会社による評価中に問題が発生し、同社の人工知能（AI）モデルの1つがインターネットに接続し、別の組織のシステムをハッキングする可能性があったと述べた。
この発表は、OpenAI や Anthropic モデルによる侵害など、サイバーセキュリティの懸念を引き起こした AI 業界全体の最近の事件を受けてのものです。
Metaの広報担当者はBBCに対し、「設定ミス」によって引き起こされたハッキン​​グを調査していると述べ、以前に報告された他の企業での事件と同様だと説明した。
この事件を受けて研究者や政府は、より厳しい安全対策とより厳格な検査を求めるようになった。
メタ氏によると、このセキュリティ試験は、他の3社のシステムにアクセスしたAnthropicのAIモデルのテストを実施したのと同じAIセキュリティベンダーであるイレギュラー社によって実施されたという。
イレギュラー社の広報担当者は、メタ事件は「アンスロピック社が先週明らかにしたものと全く同じ評価環境の問題だ」と述べた。
イレギュラー社は、AIエージェントが関与するサイバーセキュリティテストを安全に実行する方法に関する報告書を作成中であると同社の広報担当者がBBCに語った。
メタ社はまた、「すべての事実が判明次第」、この事件に関するさらなる情報を公表すると述べた。
過去 2 週間で、AI のリーダーである OpenAI と Anthropic も、テスト中に自社のモデルが他の組織のシステムをハッキングした事件を報告しました。
ChatGPTの作成者であるOpenAIは一連の発表の中で、同社のエージェントがAIツールハブのHugging Faceを含むいくつかの公的サービスを攻撃したと述べた。
OpenAIの開示を受けて、ライバルのAnthropicは独自の検査を実施し、同社のClaude AIモデルが「設定ミス」によりインターネットにアクセスできた後、複数の企業に対して同様の攻撃を行っていたことが判明した。
ハイテク企業がAI開発での優位性を争う中、一部の評論家は事件の公表のタイミングに疑問を呈している。
OpenAIとAnthropicは、各企業の評価額​​が約1兆ドル（7,400億ポンド）になると予想される大規模株式市場への上場を準備している。
英国のAIセキュリティ研究所（AISI）は今週、一部のモデルが人々をだますために偽の人間のプロフィールを作成し、サイバー攻撃を実行しようとしたことがテストで判明したと発表した。
AISIによると、最も深刻なケースでは、AnthropicのMythos AIが、本物の人間を模倣した偽のアカウントを使用してプライベートメッセージを送信し、サービスへのアクセスを試みたという。
アンスロピック氏は、AISIのテストは「当社の量産モデルを代表するものではない」と述べた。モデルもテストされたOpenAIは、AISIの評価は通常の使用を反映していないと述べた。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cx2kgdnyk2po?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-06T02:33:33+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/f468/live/5910e320-9131-11f1-b387-374684edd409.jpg",
    readTime: 3,
  },
  {
    id: "jpmorgan-s-jamie-dimon-warns-of-high-lev-6f4fe779",
    title: "JPMorgan's Jamie Dimon warns of high leverage: 'Somebody will disrupt the market'",
    titleJa: "JPモルガンのジェイミー・ダイモン氏、ハイレバレッジに警告「誰かが市場を混乱させるだろう」",
    summaryJa: "ＪＰモルガンのジェイミー・ダイモン最高経営責任者（ＣＥＯ）は、金融市場全体のレバレッジが依然として高水準にあると警告し、隠れた借り入れが市場の混乱を増幅させる可能性があることに投資家は留意すべきだと付け加えた。",
    bodyOriginal: `JPMorgan Chief Executive Officer Jamie Dimon has warned that leverage across financial markets remained elevated, adding that investors should be mindful that hidden borrowing could amplify market disruptions.
"Margin debt is the highest it has ever been," he said in an interview with CNBC's Leslie Picker. "There's a lot of margin debt you don't see because it's not called margin debt. It's called other things. It's that kind of leverage, some hidden, some public."
He pointed to borrowing through prime brokerages, hedge funds, exchange-traded funds and Treasury arbitrage strategies. "The market leverage is pretty high."
The remarks come amid renewed scrutiny of leverage in financial markets, as elevated equity valuations, near-record hedge-fund leverage and large Treasury basis trades have fueled concerns that vulnerabilities may be building in parts of the financial system.
Dimon said that heavy leverage increases the risk that a single investor or fund could trigger broader volatility. "When you have that, you do have a higher chance that somebody will disrupt the market in a quick way, and people get rattled over it."
AI-focused hedge fund Situational Awareness suffered heavy losses recently after leveraged technology bets turned against it, triggering margin calls and forcing it to liquidate much of its public-equity portfolio.
When asked about the recent collapse of Situational Awareness, for which JPMorgan was one of the prime brokers, Dimon said the episode demonstrated that markets can absorb its failure without broader disruption.
He also stopped short of describing the high leverage as a systemic threat, noting that markets have generally been able to absorb isolated failures.
"I'm not going to say it's systemic high, it's going to cause a disaster, but it's high," he said.
Dimon distinguished today's environment from the 2008 financial crisis, arguing that leverage alone does not necessarily cause systemic stress.
"The worst thing is if you have actual losses in the marketplace," he said. "It wasn't the leverage. It was the amount of losses that were going to be realized on mortgages."
The JPMorgan top boss highlighted that banks would continue adjusting collateral requirements in response to changing market conditions.
"When volatility goes up, clearing houses and banks generally ask for more collateral," he said. "So you'll probably see a little bit of that."
Dimon also warned that structural demand for capital could reignite inflationary pressures, pointing to government deficits, infrastructure investment and global rearmament as forces supporting higher long-term interest rates.
"The remilitarization of the world would be inflationary," he said, reiterating his statement earlier this year that those dynamics "could be the skunk of the party," if they lead investors to seek greater compensation for holding long-dated bonds.`,
    bodyJa: `ＪＰモルガンのジェイミー・ダイモン最高経営責任者（ＣＥＯ）は、金融市場全体のレバレッジが依然として高止まりしていると警告し、隠れた借り入れが市場の混乱を増幅させる可能性があることに投資家は留意すべきだと付け加えた。
同氏はCNBCのレスリー・ピッカーとのインタビューで、「証拠金負債は過去最高だ」と述べた。 「マージン・デットと呼ばれるものではないので、目に見えないマージン・デットがたくさんあります。別の名前で呼ばれています。それはその種のレバレッジであり、一部は隠されており、一部は公開されています。」
同氏はプライム・ブローカレッジ、ヘッジファンド、上場投資信託（ETF）、財務省の裁定取引戦略を通じた借り入れを指摘した。 「市場レバレッジはかなり高いです。」
この発言は、株式バリュエーションの高騰、記録に近いヘッジファンドのレバレッジ、大規模な米国債ベースの取引により、金融システムの一部に脆弱性が構築されているのではないかとの懸念が高まっており、金融市場のレバレッジに改めて厳しい目が向けられている中で行われた。
ダイモン氏は、レバレッジが大きいと、単一の投資家やファンドがより広範なボラティリティを引き起こすリスクが高まると述べた。 「それを持っていると、誰かがすぐに市場を混乱させる可能性が高く、人々はそれに対して動揺します。」
AIに焦点を当てたヘッジファンド、シチュエーショナル・アウェアネスは最近、レバレッジを利かせたテクノロジーへの賭けが不利になり、マージンコールを引き起こし、公開株式ポートフォリオの多くを清算せざるを得なくなったため、多額の損失を被った。
ダイモン氏は、JPモルガンがプライムブローカーの一つだったシチュエーショナル・アウェアネスの最近の破綻について問われ、今回の出来事は、市場が広範な混乱を招くことなく破綻を吸収できることを証明したと述べた。
同氏はまた、市場は概して個別の失敗を吸収することができていると指摘し、高いレバレッジをシステム全体の脅威として説明することはなかった。
「全体的に高水準であるとは言わない。災害を引き起こすだろうが、高水準である」と同氏は語った。
ダイモン氏は、今日の環境を2008年の金融危機と区別し、レバレッジだけが必ずしもシステム的なストレスを引き起こすわけではないと主張した。
「最悪なのは、市場で実際に損失が出た場合だ」と同氏は語った。 「それはレバレッジではありませんでした。住宅ローンで実現されるであろう損失の額でした。」
JPモルガンのトップは、銀行が市況の変化に応じて担保要件の調整を続けると強調した。
同氏は「ボラティリティが高まると、清算機関や銀行は通常、より多くの担保を要求する」と述べた。 「それで、おそらくそれが少しわかるでしょう。」
ダイモン氏はまた、長期金利の上昇を支える要因として政府赤字、インフラ投資、世界的な再軍備を挙げ、構造的な資本需要がインフレ圧力を再燃させる可能性があると警告した。
同氏は「世界の再軍備化はインフレを招くだろう」と述べ、投資家が長期債保有に対するより大きな補償を求めるようになれば、そうした力学が「党の悪者になる可能性がある」と今年初めに述べた発言を繰り返した。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/06/jpmorgan-jamie-dimon-leverage-market-disruption.html",
    publishedAt: "2026-08-06T02:02:39+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 3,
  },
  {
    id: "iran-says-deal-with-oman-on-strait-of-ho-955dda53",
    title: "Iran says deal with Oman on Strait of Hormuz is in final stages",
    titleJa: "イラン、ホルムズ海峡をめぐるオマーンとの合意は最終段階にあると発表",
    summaryJa: "イラン、ホルムズ海峡をめぐるオマーンとの合意は最終段階にあると発表- 公開されました",
    bodyOriginal: `Iran says deal with Oman on Strait of Hormuz is in final stages
- Published
Iran says it has reached an agreement with Oman on a route for shipping through the Strait of Hormuz.
Foreign ministry spokesman Esmaeil Baqaei did not give any further details on the agreement, which he said was "in the final stages".
Baqaei warned, however, that a deal with Oman would not guarantee safe navigation through the strait, arguing security remained impacted by the US blockade of Iran's ports. The US and Oman have not commented on the proposal.
Since the US and Israel attacked Iran in February, Tehran has largely blocked the Strait of Hormuz through which about a fifth of the world's oil and liquefied natural gas usually passes.
On Tuesday, US President Donald Trump warned that Iran would be "hit very hard" if the strait did not open "very soon".
His comments came after senior US officials said talks had progressed to allow shipments to potentially resume later this week, though Iran has maintained that it is not negotiating with the US and has no plans to do so.
Reopening the strait has been a key point in discussions between the two countries and mediators.
In his statement, the Iranian foreign ministry spokesman said the "geographical coordinates of the route" had been agreed with Oman.
"The factors making the Strait of Hormuz insecure still exist on the part of the United States, particularly the naval blockade and other aggressive and threatening actions against Iran and its interests," he said, according to Iran's official Irna news agency.
Iran's Deputy Foreign Minister Kazem Gharibabadi later told Irna the new route would be temporary and could stay open from two to four months. He did not give further details.
Oil prices edged lower on Thursday, with global benchmark Brent crude down by 0.3% at $79.24 (£58.84) in morning Asian trade.
Energy prices have fluctuated wildly during the conflict as shipments through the key route for around 20% of the world's oil and liquefied natural gas (LNG) have been severely disrupted.
Since the beginning of the war, traffic through the strait has dwindled. Iran has said all passage needs to be cleared beforehand - and it has attacked vessels which have ignored the order.
One of the main points of disagreement between Tehran and Washington has been Iran's threat to impose a fee on vessels wishing to cross the strait.
Iran is seeking fees of between 5% and 7% of the price of cargoes from ships using the strait, according to a senior Iranian official cited by Reuters. Oman is discussing fees of around 3%, while Washington wants no fees at all.
The proposed deal would also give Tehran control over ships entering the Gulf through the Strait of Hormuz, Reuters reported.
The BBC has contacted the White House for comment.
In June, Iran and the US signed a Memorandum of Understanding (MoU), aiming to stop fighting, reopen the Strait of Hormuz, and reach agreement to end the war within 60 days.
The deal quickly fell through, as did diplomatic talks, with tit-for-tat attacks resuming just days after the MoU was signed.
The US has maintained a naval blockade of Iranian ports in the region, while another blockade is in place on Saudi Arabia's ports in the Red Sea, imposed by Yemen's Iran-backed Houthis since 20 July.
The US and Israel launched wide-ranging strikes on Iran on 28 February, with Iran responding by attacking Israel and US-allied states in the Gulf, and effectively closing the Strait of Hormuz.
Iran's then Supreme Leader, Ayatollah Ali Khamenei, was killed in that first attack, after which he was succeeded by his son Mojtaba Khamenei.
The younger Khamenei was wounded in the same strikes that launched the war and has not appeared in public since.
Iran's President Masoud Pezeshkian said on Wednesday that communication with Khamenei was very "difficult at the moment".
"In any case, his presence is a very great source of strength for us so that we can continue," Pezeshkian said, according to state media.
The younger Khamenei, who did not appear at his father's funeral ceremonies last month, has communicated through written statements but his low profile has led to speculation about his relations with other top officials.
Pezeshkian insisted he had been able to hold productive meetings with him and been met with "kindness and very sound logic".
"Unfortunately, the current situation allows some malicious people to describe him differently and to present a different image of him," he said.`,
    bodyJa: `イラン、ホルムズ海峡をめぐるオマーンとの合意は最終段階にあると発表
- 公開されました
イランは、ホルムズ海峡を通る航路についてオマーンと合意に達したと発表した。
外務省報道官エスマイル・バカエイ氏は、合意内容については「最終段階にある」とし、詳細については明らかにしなかった。
しかしバクアイ氏は、米国によるイラン港湾封鎖によって安全保障が依然として影響を受けていると主張し、オマーンとの合意は海峡の安全な航行を保証するものではないと警告した。米国とオマーンはこの提案についてコメントしていない。
米国とイスラエルが2月にイランを攻撃して以来、イラン政府は通常、世界の石油と液化天然ガスの約5分の1が通過するホルムズ海峡を大部分封鎖した。
火曜日、ドナルド・トランプ米大統領は、海峡が「すぐに」開かなければイランは「非常に大きな打撃を受ける」だろうと警告した。
同氏のコメントは、米国高官が、今週後半に輸送を再開できる可能性を目指して協議が進んでいると述べたことを受けてのものだが、イランは米国と交渉しておらず、交渉する予定もないと主張している。
海峡の再開は両国と調停者との間の協議の重要なポイントとなっている。
イラン外務省報道官は声明の中で、「ルートの地理的座標」はオマーンと合意されたと述べた。
イラン国営イルナー通信によりますと、同氏は、「ホルムズ海峡を不安定にする要因は依然として米国側に存在しており、特に海上封鎖やイランとその権益に対するその他の攻撃的かつ脅威的な行動である」と述べた。
イランのカゼム・ガリババディ外務次官はその後イルナーに対し、新ルートは一時的なものであり、開設期間は２～４カ月かかる可能性があると語った。詳細については明らかにしなかった。
木曜日の原油価格は小幅に下落し、アジア午前の取引では世界のベンチマークであるブレント原油が0.3％安の79.24ドル（58.84ポンド）となった。
世界の石油と液化天然ガス（LNG）の約20％の主要ルートを通じた輸送が大幅に中断され、紛争中にエネルギー価格が大きく変動した。
戦争が始まって以来、海峡を通る交通は減少した。イランは、すべての航行は事前に撤去する必要があると述べ、命令を無視した船舶を攻撃した。
イランと米国の間の主な意見の相違点の一つは、海峡横断を希望する船舶に料金を課すというイランの脅迫だった。
ロイター通信が引用したイラン高官の話によると、イランは海峡を利用する船舶に対し貨物価格の５─７％の手数料を求めている。オマーンは約３％の手数料について議論しているが、ワシントンは手数料ゼロを望んでいる。
ロイター通信によると、提案された協定では、ホルムズ海峡を通って湾岸に入る船舶に対するイランの管理も認められることになる。
BBCはホワイトハウスにコメントを求めた。
イランと米国は６月、戦闘を停止しホルムズ海峡を再開し、６０日以内に戦争を終わらせる合意に達することを目指す覚書（ＭｏＵ）に署名した。
この合意は外交交渉と同様にすぐに決裂し、覚書締結からわずか数日後にしっぺ返し攻撃が再開された。
米国は同地域のイラン港の海上封鎖を維持しているが、7月20日以来、イエメンのイランが支援するフーシ派によって、紅海にあるサウジアラビアの港でも封鎖が実施されている。
米国とイスラエルは2月28日にイランに対する広範な攻撃を開始し、イランは湾岸のイスラエルと米国の同盟国を攻撃し、ホルムズ海峡を事実上封鎖することで応じた。
当時のイラン最高指導者アヤトラ・アリ・ハメネイ師は最初の攻撃で殺害され、その後息子のモジタバ・ハメネイ師が後継者となった。
若きハメネイ師は戦争開始と同じ空爆で負傷し、それ以来公の場に姿を現していない。
イランのマスード・ペゼシキアン大統領は水曜日、ハメネイ師との意思疎通は「現時点では非常に困難」であると述べた。
国営メディアによると、ペゼシキアン氏は「いずれにしても、彼の存在はわれわれにとって非常に大きな力の源であり、われわれが継続していくことができる」と語った。
先月の父親の葬儀には姿を現さなかった若きハメネイ師は書面で意思疎通を図ってきたが、彼の知名度の低さから他の政府高官との関係について憶測が広がっている。
ペゼシキアン氏は、彼と生産的な会談を行うことができ、「親切で非常に健全な論理」で対応してもらったと主張した。
「残念なことに、現在の状況では、一部の悪意のある人々が彼を別の言い方をし、別のイメージを与えることを許してしまっている」と彼は述べた。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/ckg9d3eyeggo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-06T01:19:59+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/b45d/live/e272ff40-9104-11f1-a7ab-8b30adf0800a.jpg",
    readTime: 5,
  },
  {
    id: "inside-india-newsletter-what-s-behind-in-c579bb72",
    title: "Inside India newsletter: What's behind India’s rush to sell shares in state-owned firms",
    titleJa: "Inside India ニュースレター: インドが国有企業の株式売却を急ぐ背後にあるもの",
    summaryJa: "こんにちは、シンガポールからメッセージを書いているプリヤンカ・サルベです。「インサイド・インディア」の最新版へようこそ。世界で最も急速に成長している大経済国のストーリーや展開をワンストップでご覧いただけます。",
    bodyOriginal: `Hello, this is Priyanka Salve, writing to you from Singapore.
Welcome to the latest edition of "Inside India" — your one-stop destination for stories and developments from the world's fastest-growing large economy.
The Indian government has been rushing to sell stakes in state-owned companies this year. So far, it has pared its stake in 10 public sector companies, raising more than 620 billion rupees ($6.5 billion) this year. This week, I unpack what's driving India to meet its often-missed disinvestment target.
Any thoughts on today's newsletter? Share them with the team.
The big story
It can be difficult to be the world's fastest-growing large economy when inflationary pressures and fiscal constraints threaten to put the brakes on government spending.
But India cannot afford to lose its growth edge as it competes for the attention of global investors who have already put the country on the back burner as they focus on artificial intelligence-driven plays — something the South Asian country's growth story has been missing.
So, to keep its growth engine running amid a widening fiscal deficit, the country is ramping up stake sales in state-owned companies, with the government offloading shares in 10 firms since the start of the year, despite dull market conditions.
The government has sold shares in several companies including Cochin Shipyard, Indian Railways Finance Corp, NHPC, and Coal India this year and, on Wednesday, it completed one of its biggest stake sale.
It raked in $3.3 billion by selling a 6.5% stake in the country's top life insurer, Life Insurance Corporation of India. The share sale was priced at a 10% discount to attract buyers — unsurprisingly, it was oversubscribed.
While the government does have an obligation to reduce its stake in these businesses to comply with listing regulations, there has been a sudden and sharp rise in transactions this year.
The last time the Indian government met its disinvestment goal — target for stake sales in state-owned firms — was in the financial year ending March 2019.
The disinvestment rush
Excluding LIC, India has sold stakes in 9 state-owned firms in 2026 and raised nearly 270 billion rupees ($2.8 billion), its highest in more than 10 years, according to Indian market intelligence provider Prime Database.
And LIC alone surpasses that number by a good margin, signaling the state's increasing proclivity toward raising funds without widening the fiscal deficit.
The government is well on its way to achieving its annual target of raising 800 billion rupees ($8.4 billion) through stake sales in state-owned enterprises, experts said, adding that these funds will be crucial for India as it faces deepening macroeconomic headwinds. The country has now met over 65% of its annual disinvestment target.
"Tapping into the divestment proceeds is a very good strategy," Anubhuti Sahay, head of India economic research at Standard Chartered Bank, told CNBC, adding that the government is facing a downside revenue risk and an upside expenditure risk due to a higher subsidy burden.
India did not meet its disinvestment targets for years as it was in a "comfortable fiscal situation," she said, adding that right now the stake sale is akin to tapping into "family silver" in times of need.
For the quarter ending June, the country's goods and services trade deficit was $37.4 billion. Its fiscal deficit at the end of June was 3.1 trillion rupees, or 18.2% of the budget estimate for the financial year ending March 2027.
While this is not unusual for India, the country has also seen strong capital outflows from foreign investors, which limits its ability to cover the rising import expenses. The capital outflows have led to currency weakness and tighter domestic financial conditions, experts said.
The acceleration of government stake sales reflects "greater fiscal pressure," Alexandra Hermann Prasad, lead economist at Oxford Economics, told CNBC, adding that these funds will "provide useful non-debt revenue as strong expenditure growth makes the deficit target harder to achieve."
Non-debt revenue is the income earned by a government that does not have future repayment liabilities.
Global brokerage Citi, in a report on Monday, called it a "favorable" trend, adding that during the quarter ended June, India's fuel, food and fertilizer subsidies had increased 37% on year but the South Asian country has not scaled back its capex spending.
Higher-than-expected proceeds from disinvestment are likely to ease the fiscal pressures arising from GST rationalization in September 2025, as well as costs associated with the policy response to the Middle East shock, Christian de Guzman, SVP, Sovereign Risk Group at Moody's Ratings, told CNBC.
Need to know
An exam leak in India exposed a Gen Z jobs crisis that goes much deeper
India's youth unemployment crisis has become one of the biggest vulnerabilities for Prime Minister Narendra Modi's government, exposing the gap between the country's economic ambitions and the reality facing millions of young graduates.
J.P. Morgan expects India IPO activity to pick up in the second half of 2026
India's IPO market is entering a stronger second half of 2026, supported by improving market conditions, lower volatility and a more stable macroeconomic backdrop, J.P. Morgan's Abhinav Bharti told CNBC's Inside India on Tuesday.
Coming up
Aug. 10: IPO of Bain Capital-backed Dhoot Transmission opens.
Aug. 12: CPI Inflation data for July.`,
    bodyJa: `こんにちは、シンガポールからメッセージを書いているプリヤンカ・サルベです。
「インサイド・インディア」の最新版へようこそ。世界で最も急速に成長している大経済国のストーリーや展開をワンストップでご覧いただけます。
インド政府は今年、国有企業株の売却を急いでいる。これまでのところ公共部門企業10社への出資を削減し、今年は6200億ルピー（65億ドル）以上を調達した。今週は、インドがしばしば達成できない投資削減目標を達成する原動力となっているものを解き明かします。
今日のニュースレターについて何かご意見はありますか?それらをチームと共有します。
大きな話
インフレ圧力と財政制約により政府支出にブレーキがかかる恐れがある場合、世界で最も急成長する大経済国になることは困難になる可能性があります。
しかし、インドは、人工知能主導の事業に注力するあまりインドを後回しにしてきた世界的な投資家の注目を集めるために競争しているため、その成長の優位性を失うわけにはいかない――この南アジアの国の成長物語には欠けているものがある。
そのため、財政赤字が拡大する中で成長エンジンを動かし続けるため、同国は国有企業の株式売却を強化しており、市場環境が低迷しているにもかかわらず、年初から政府が10社の株式を売却している。
政府は今年、コーチン造船所、インド鉄道金融公社、NHPC、コール・インディアなど複数の企業の株式を売却しており、水曜日には最大規模の株式売却の一つを完了した。
同国のトップ生命保険会社であるインド生命保険公社の株式6.5％を売却し、33億ドルを集めた。株式売却は買い手を引き付けるために 10% 割引の価格で行われましたが、当然のことながら、申し込みが殺到しました。
政府には上場規制を遵守するためにこれらの企業への出資比率を減らす義務があるが、今年になって取引が突然急増した。
インド政府が最後に投資撤退目標（国有企業の株式売却目標）を達成したのは2019年3月終了の会計年度だった。
投資撤退ラッシュ
インド市場情報プロバイダーのプライム・データベースによると、LICを除くインドは2026年に国有企業9社の株式を売却し、過去10年以上で最高となる約2700億ルピー（28億ドル）を調達した。
そしてLICだけでもこの数字を大きく上回っており、財政赤字を拡大させずに資金調達をするという州の傾向が高まっていることを示している。
専門家らは、政府は国有企業の株式売却を通じて8000億ルピー（84億ドル）を調達するという年間目標の達成に向けて順調に進んでいると述べ、マクロ経済の逆風が深刻化するインドにとってこれらの資金は極めて重要であると付け加えた。同国は現在、年間投資削減目標の65％以上を達成している。
スタンダードチャータード銀行のインド経済調査責任者、アヌブティ・サハイ氏はＣＮＢＣに対し、「ダイベストメントの収益を活用することは非常に良い戦略だ」と述べ、政府は補助金負担の増加による歳入の下振れリスクと支出の上振れリスクに直面していると付け加えた。
同氏は、インドは「快適な財政状況」にあったため、何年も投資削減目標を達成できなかったと述べ、現時点での株式売却は、必要なときに「家族の銀」を利用するようなものだと付け加えた。
６月までの四半期の同国の物品・サービス貿易赤字は３７４億ドルだった。 ６月末時点の財政赤字は３兆１０００億ルピーで、２０２７年３月終了会計年度の予算見込みの１８．２％に相当した。
インドにとってこれは珍しいことではないが、同国では海外投資家からの資本流出も激しく、輸入費用の上昇をカバーする能力が制限されている。専門家らは、資本流出が通貨安と国内金融情勢の逼迫を招いていると指摘した。
オックスフォード・エコノミクスの首席エコノミスト、アレクサンドラ・ヘルマン・プラサド氏は、政府株売却の加速は「財政圧力の増大」を反映しているとCNBCに語り、これらの基金は「支出の大幅な伸びで財政赤字目標の達成が困難になる中、債務以外の有用な収入をもたらす」と付け加えた。
非債務収入とは、将来の返済義務がない政府が得る収入です。
世界的な証券会社シティは月曜のリポートでこれを「好ましい」傾向と呼び、6月までの四半期中、インドの燃料、食料、肥料補助金は前年比37％増加したが、南アジアの国は設備投資を削減していないと付け加えた。
ムーディーズ・レーティングスのソブリン・リスク・グループSVP、クリスチャン・デ・グスマン氏はCNBCに対し、投資回収による収益が予想を上回れば、2025年9月のGST合理化から生じる財政圧力や、中東ショックへの政策対応に関連するコストが緩和される可能性が高いと語った。
知っておく必要がある
インドでの試験漏洩により、Z世代の雇用危機がさらに深刻化していることが明らかになった
インドの若者の失業危機はナレンドラ・モディ首相の政府にとって最大の脆弱性の一つとなっており、国の経済的野心と何百万もの若い卒業生が直面している現実とのギャップを浮き彫りにしている。
JPモルガン、インドのIPO活動は2026年下半期に活発化すると予想
JPモルガンのアビナブ・バルティ氏は火曜日、CNBCのインサイド・インディアに対し、市場環境の改善、ボラティリティの低下、より安定したマクロ経済背景に支えられ、インドのIPO市場はより好調な2026年下半期を迎えると語った。
もうすぐ
8月10日: Bain Capitalが支援するDhoot TransmissionのIPOが開始される。
8月12日: 7月のCPIインフレデータ。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/06/india-lic-shares-economy-disinvestment-.html",
    publishedAt: "2026-08-06T00:11:08+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 6,
  },
  {
    id: "what-s-causing-record-high-us-beef-price-bf5d41df",
    title: "What's causing record high US beef prices?",
    titleJa: "米国産牛肉の価格が記録的に高くなる原因は何でしょうか？",
    summaryJa: "米国産牛肉の価格が記録的に高くなる原因は何でしょうか？- 公開されました",
    bodyOriginal: `What's causing record high US beef prices?
- Published
With US beef prices soaring to record highs, you might think that South Dakota cattle rancher Eric Gropper would be celebrating.
Yet while the cost of the meat in US supermarkets is now 12% higher, external than it was a year ago, a rise more than three times the rate of general inflation, Gropper says that he and all the other beef farmers aren't making any more profit than usual.
The BBC World Service's Follow the Money series spent a week tracing the American beef supply chain to find out what has caused the price jump and discover where all the cash is going.
The rancher
Eric Gropper has about 350 breeding cows on around 8,000 acres of grassland in south-west South Dakota. Most of it he leases from the Pine Ridge Indian Reservation.
He is seven miles from the nearest paved road, and two and a half hours' drive from the closest town of any size.
Gropper doesn't set the price for his calves. Instead once a year he takes them to a livestock auction where buyers place bids and the hammer decides.
Right now the bids are the highest he has ever seen - around $2,500 (£1,883) for a 600lb (272kg) calf, up from $2,000 two years ago.
These record prices are driven by a simple fact – there are not enough cattle. Due to a combination of drought in many states, and disease pressure, at the start of this year the US had fewer cattle than at any point since 1951., external
Gropper is experiencing drought first hand, as the 13 natural wells across his land that provide ground water for his cattle have run dry. He has to use a water tanker instead.
Due to the national shortage of cattle, Gropper is getting record prices for his. But unfortunately his costs have equally climbed to new highs.
A new pick-up truck that once cost $40,000 now runs to $100,000. A wooden fence post has gone from about $6 to as much as $19. A quarter-mile roll of barbed wire has doubled, from $60 to $130. Everything he uses day to day, he says, has jumped in price since the Covid pandemic.
And with little grass on parched fields – well over 60% of US cattle are now grazing on drought-hit land - farms like his are having to buy in hay, silage and other fodder for their cattle.
"I'm able to pay my bills, but my input costs are so drastically high that if we didn't have these record prices we'd all be broke. I sit down to do my taxes, and it feels like I made a lot of money. But in the end I really didn't make any more."
The feedlot
Gropper's calves don't go straight to slaughter. At around six-months-old they are bought by companies that run feedlots – large yards where the animals are fattened on corn and other grains for the final three to six months of their lives.
The biggest yards hold well over 100,000 cattle at a time. Around 95% of US cattle are finished this way.
Brenda Boetel, professor of agricultural economics at the University of Wisconsin–River Falls, watches this part of the chain closely.
She says that while the feedlot companies are currently selling cattle at record prices, they are having to buy them at all-time highs in the first place. So they are not making bigger profits.
The meatpacker
A meatpacker is the plant that slaughters the animal and breaks the carcass down into the cuts that reach shops or restaurants.
Four companies - Tyson, JBS, Cargill and National Beef - control around 85% of American beef processing.
That high level of market concentration has drawn accusations of price-fixing, even from President Trump.
So you might expect that those four firms are currently making huge profits from high beef prices. Yet the opposite is happening.
Tyson, the biggest of the four, reported in May that it had lost more than $500m, external on beef in the first half of its financial year.
Again, it might be selling its beef for record highs, but it is also buying the cattle at all-time peaks.
Jamie Crumley owns one of the remaining smaller meatpackers - Harpley's Meatpacking in central North Carolina. She says the price companies like hers have to pay for the live animals has gone up by as much as 60% over the past three years.
And while meatpacking companies have increased the prices they charge for their beef, there is a limit. This is because supermarkets, restaurants – and US consumers – can, and will, simply switch to buying chicken or cheaper imported beef instead.
Then there is the inefficiency of running the meatpacking plants at much less than full capacity. For example, Harpley's is built to handle 425 to 450 cattle a day. But it is currently running at just 350 because it cannot get the additional animals.
The building, the line and the staff cost the same either way, so those fixed costs now spread across fewer animals. On any given day Crumley says she can lose anywhere from $100 to $400 on a single head of cattle. This helps to explain Tyson's giant losses.
The restaurant
At the end of one beef supply chain is Paul and Jessica Urban, who own Block 16, a burger restaurant in Omaha, Nebraska. They go through about 300lb (136kg) of ground beef a week, making 2,800 burgers a month.
When Block 16 opened back in 2010, a burger cost $8.95. Today it's $11.95, but profits are limited due to the much higher price of mince.
"To maximise our profit, maybe we'd have to charge $13 for a burger," says Paul. "Well, we don't feel comfortable doing that. I wouldn't want to walk in here and have to pay $13 for a cheeseburger.
"So we don't make the profit that we'd like — but you're still getting people through the door, and it's not always about the money."
So where did the money go?
The rancher is selling calves for record sums, but is not better off because he has higher costs. The feedlot company is selling for all-time high prices, but it also has to pay them in the first place.
Then the packers are losing money because there is a limit to what they can charge. Restaurants and supermarkets also can only increase prices by so much.
Everyone is turning over more money than they used to, but not keeping any of the extra. It's a situation that won't change until significantly more US cattle come to market.
Yet as Eric Gropper puts it, you can't conjure a cow overnight. Instead a heifer, a young female cow, needs two years before she is able to produce a calf. And that calf needs another year to reach slaughter weight, so the extra beef takes three years to arrive.`,
    bodyJa: `米国産牛肉の価格が記録的に高くなる原因は何でしょうか？
- 公開されました
米国産牛肉の価格が記録的な高値まで高騰しているため、サウスダコタ州の牧場経営者エリック・グロッパー氏も祝っているのではないかと思うかもしれない。
しかし、米国のスーパーマーケットでの肉の価格は現在、外部では1年前に比べて12％上昇しており、一般的なインフレ率の3倍以上の上昇であるにもかかわらず、グロッパー氏と他のすべての肉農家は通常よりも利益を上げているわけではないと言う。
BBC ワールド サービスのフォロー ザ マネー シリーズは、価格高騰の原因を突き止め、すべての現金がどこに流れているのかを明らかにするために、1 週間かけてアメリカ産牛肉のサプライチェーンを追跡しました。
牧場主
エリック・グロッパーさんは、サウスダコタ州南西部の約8,000エーカーの草原で約350頭の繁殖牛を飼っている。彼はその大部分をパインリッジ・インディアン居留地から借りている。
彼は最寄りの舗装道路からは 11 マイル離れており、規模を問わず最も近い町からは車で 2 時間半かかります。
グロッパー氏は自分の子牛の値段を決めません。その代わりに、年に一度、家畜オークションに家畜を連れて行き、そこで買い手が入札し、ハンマーが決定する。
現在の入札価格は、彼がこれまで見た中で最高額となっており、600ポンド（272kg）の子牛に約2,500ドル（1,883ポンド）と、2年前の2,000ドルから値上がりしている。
これらの記録的な価格は、牛の数が足りないという単純な事実によって引き起こされています。多くの州での干ばつと病気の圧力が重なったため、今年初めの米国の牛の頭数は、1951 年以降のどの時点よりも減少しました。
グロッパーさんは、牛に地下水を供給する土地全体の 13 か所の天然井戸が枯渇し、干ばつを直接経験しています。代わりに給水車を使わなければなりません。
全国的な牛不足のため、グロッパーの牛には記録的な価格が付けられている。しかし残念なことに、彼の費用も同様に新たな高値に上昇しました。
かつては4万ドルだった新しいピックアップトラックの価格は、今では10万ドルになっています。木製フェンスの支柱は約6ドルから最大19ドルまで値上がりした。有刺鉄線の1/4マイルロールは60ドルから130ドルへと倍増した。新型コロナウイルスのパンデミック以降、日常的に使うものはすべて価格が高騰したと彼は言う。
そして、乾いた野原にはほとんど草が生えておらず、米国の牛の60％を優に超える現在、干ばつに見舞われた土地で放牧されているため、彼のような農場は牛のために干し草、サイレージ、その他の飼料を購入しなければならない。
「私は請求書を支払うことができますが、投入コストが非常に高額なので、この記録的な価格がなかったら、私たちは皆一文無しになっていたでしょう。私は座って納税をしており、たくさんのお金を稼いだように感じます。しかし、結局はそれ以上は稼げませんでした。」
肥育場
グロッパーの子牛は、すぐに屠殺されるわけではありません。生後約6か月のときに、動物は飼養場（動物が人生の最後の3〜6か月間トウモロコシやその他の穀物で肥育される大きな庭）を運営する会社に購入されます。
最大のヤードには一度に 10 万頭以上の牛が飼育されています。米国の牛の約 95% がこの方法で仕上げられています。
ウィスコンシン大学リバーフォールズ校の農業経済学教授ブレンダ・ボーテル氏は、この連鎖のこの部分を注意深く観察している。
彼女は、肥育場会社は現在記録的な価格で牛を販売しているが、そもそも牛を史上最高値で買わなければならないと言う。したがって、彼らは大きな利益を上げていません。
肉詰め業者
ミートパッカーは、動物を屠殺し、その死骸を店やレストランに届けるための切り口に分解する工場です。
タイソン、JBS、カーギル、ナショナル・ビーフの 4 社が、米国産牛肉加工の約 85% を管理しています。
この高いレベルの市場集中は、トランプ大統領からも価格操作の非難を招いています。
したがって、これら 4 社は現在、牛肉価格の高騰によって莫大な利益を得ていると予想されるかもしれません。しかし、その逆のことが起こっています。
4社のうち最大手のタイソンは5月、会計年度上半期に牛肉関連で外部損失が5億ドル以上あったと報告した。
繰り返しになりますが、同社は牛肉を過去最高値で販売しているかもしれませんが、同時に牛を史上最高値で購入しているのです。
ジェイミー・クラムリーは、ノースカロライナ州中央部に残る小規模な食肉包装業者の​​ 1 つ、ハープリーズ・ミートパッキングを所有しています。彼女のような会社が生きた動物に対して支払わなければならない価格は、過去 3 年間で 60% も上昇したと彼女は言います。
食肉包装会社は牛肉の価格を値上げしているが、限界がある。なぜなら、スーパーマーケット、レストラン、そして米国の消費者は、代わりに鶏肉やより安価な輸入牛肉の購入に簡単に切り替えることができるし、今後もそうするからです。
さらに、食肉包装工場をフル稼働よりもはるかに少ない稼働率で稼働させるという非効率性もあります。たとえば、Harpley's は 1 日に 425 ～ 450 頭の牛を処理できるように作られています。しかし、追加の動物を入手できないため、現在はわずか 350 頭で実行されています。
どちらの方法でも、建物、ライン、スタッフにかかる費用は同じなので、これらの固定費がより少ない動物に分散されるようになりました。クラムリーさんは、どの日でも牛 1 頭で 100 ドルから 400 ドルの損失を被る可能性があると述べています。これはタイソンの巨大な損失を説明するのに役立ちます。
レストラン
牛肉のサプライチェーンの末端に位置するのは、ネブラスカ州オマハのハンバーガーレストラン、ブロック16を所有するポールとジェシカのアーバン夫妻だ。彼らは週に約 300 ポンド (136 kg) の牛ひき肉を使い、月に 2,800 個のハンバーガーを作ります。
2010 年にブロック 16 がオープンしたとき、ハンバーガーの価格は 8.95 ドルでした。現在の価格は 11.95 ドルですが、ミンチの価格がはるかに高いため、利益は限られています。
「利益を最大化するには、ハンバーガー 1 個に 13 ドルを請求する必要があるかもしれません」と Paul 氏は言います。 「そうですね、そんなことをするのは気が進みません。チーズバーガーに 13 ドルも支払わなければならないのに、ここに入りたくないです。
「そのため、私たちは望むような利益を上げていません。しかし、それでも人々をドアから招き入れています。それは必ずしもお金のためではありません。」
それで、お金はどこに消えたのでしょうか？
牧場主は子牛を記録的な金額で販売しているが、コストが高いため、より良いとは言えない。フィードロット会社は史上最高価格で販売しているが、そもそもその代金を支払わなければならない。
そうなると、請求できる金額には制限があるため、梱包業者は損失を被ることになります。レストランやスーパーマーケットも大幅な値上げしかできない。
誰もが以前よりも多くのお金を回すようになりましたが、余分なものはまったく手元に残していません。この状況は、大幅に多くの米国牛が市場に出回るまで変わらないだろう。
しかし、エリック・グロッパーが言うように、一夜にして牛を生み出すことはできません。その代わり、未経産牛、つまり若い雌牛が子牛を産むことができるようになるまでに 2 年かかります。そして、その子牛が屠殺体重に達するまでにさらに1年かかるため、追加の牛肉が到着するまでに3年かかります。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cdrv0k0j662o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-05T23:23:05+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/56e1/live/48c00f90-8c1e-11f1-94b2-05bc97107049.jpg",
    readTime: 8,
  },
  {
    id: "shorts-strappy-tops-and-sandals-can-my-b-79892747",
    title: "Shorts, strappy tops and sandals: Can my boss tell me what to wear in summer?",
    titleJa: "ショートパンツ、ストラップ付きトップス、サンダル: 夏に何を着るべきか上司に教えてもらえますか?",
    summaryJa: "ショートパンツ、ストラップ付きトップス、サンダル: 夏に何を着るべきか上司に教えてもらえますか?- 公開されました",
    bodyOriginal: `Shorts, strappy tops and sandals: Can my boss tell me what to wear in summer?
- Published
Yet another summer heatwave could be on the way to make your commute sweaty and your workplace stuffy.
What to wear to work in the summer can be a surprisingly difficult decision. Shorts, strappy tops and sandals may keep you cool - but will they be judged too casual, revealing or unprofessional?
There's a bare-legged backlash in Tokyo where officials encouraged men to swap suits for shorts at work, prompting complaints about hairy legs in the office.
So what is acceptable to wear to work, how can you successfully style your summer wardrobe and can your boss tell you what you can and can't wear?
Shorts
Conor, who works in media, has regularly worn shorts to the office during the recent hot weather. "Who gives a monkey's what you wear?" he says.
"If you're able to do your job safely, professionally and appropriately, there's a lot to be said for letting people be comfortable."
And many seem to agree - a recent poll by market research firm Ipsos found 62% of adults thought it was acceptable for men to wear shorts to work in hot weather, while 63% said the same for women.
But we aren't talking short-shorts or denim hot pants fashion designer Amanda Wakeley points out: "If you're asking yourself whether they're too short, they probably are".
She says shorts are "the trickiest item to get right in a professional environment" and recommends tailored, longer shorts paired with a crisp shirt or lightweight blazer for both men and women.
Stylist Clare Chambers agrees shorts should sit around the kneecap for both men and women. For men, she recommends tailored chino-style shorts with an untucked T-shirt or shirt.
Sandals
Wakeley describes flip-flops as one of the few definite "no" items in most offices. "They instantly signal leisure rather than professionalism and can make even the most polished outfit feel underdressed," she says.
Chambers agrees, and says even during the hottest weather, woven flats are a better option because they are breathable while still covering the foot.
Almost two-thirds of people questioned by Ipsos said they were unacceptable for men in the workplace, while 58% said the same for women.
Sandals, however, are a slightly different matter as Wakeley says refined leather sandals can be entirely acceptable in many offices, provided they are clean and well maintained.
The difference, she says, is whether they look like part of a considered outfit or something that would normally be worn around a swimming pool.
She adds that while socks and sandals have become a viral fashion trend "it's important to consider whether a trend aligns with the image you want to communicate professionally".
"This combination can read as highly casual and youthful, which may unintentionally detract from giving you a credible and authoritative presence."
Strappy tops
Some 40% of adults considered tank tops or vest tops acceptable for women at work, compared with only 24% who said the same for men, according to Ipsos.
Natasia, a teacher in London, says at a previous school she and other staff had been summoned "regularly in the summer months to tell us off about our outfits."
She says she was also told to cover up her tattoos. "It should be OK to have your arms out at work especially when it's hot," she says.
Wakeley says a well-cut camisole or strappy top can work when worn beneath a linen overshirt, lightweight jacket or tailored co-ord. On its own, however, it may feel too informal.
Chambers says if you're wearing a strappy top "you must wear a strapless bra as it utterly kills an outfit when you can see bra straps".
She explains that thicker straps are a safer option where the dress code is unclear and recommends satin camisoles as a more polished alternative to basic cotton vests.
She adds that while bandeau tops are "such an on-trend look this summer, they are a no-go for work".
"The constant need to keep fiddling to pull them up displays an uncomfortable and unconfident demeanour," she says.
How to style summer clothes at work
Wakeley and Chambers both say that you don't need to lose your personal style when dressing for the office and you can still inject plenty of personality while following a dress code. Here are their top tips on how to style summer clothes for the office.
Can your employer tell you what to wear?
Climate change is expected to bring more severe, frequent and longer-lasting heatwaves in UK summers in the coming years.
Employers are allowed to set standards around clothing and appearance, particularly where there are legitimate reasons such as safety, branding or maintaining a professional image.
But employment lawyer Sarah Tahamtani says dress codes should be "reasonable, proportionate and capable of justification".
"During extreme heat, employers should consider whether existing requirements remain practical and whether greater flexibility can be introduced."
They must also consider employees with disabilities, medical conditions or other vulnerabilities that may be worsened by high temperatures.
An employee who believes a request is unreasonable or inconsistently applied should first raise the issue with a manager or HR and explain how the rule is affecting their comfort or ability to work safely.`,
    bodyJa: `ショートパンツ、ストラップ付きトップス、サンダル: 夏に何を着るべきか上司に教えてもらえますか?
- 公開されました
さらに夏の熱波が到来し、通勤で汗ばみ、職場が蒸れる可能性があります。
夏に何を着て仕事に行くかは、驚くほど難しい決断です。ショートパンツ、ストラップ付きのトップス、サンダルは涼しさを保つかもしれませんが、カジュアルすぎる、露出が多い、またはプロフェッショナルではないと判断されるでしょうか?
東京では、当局が男性に職場でスーツをショートパンツに交換するよう奨励し、オフィスでの毛むくじゃらの脚に対する苦情を引き起こしたことに対して、東京で裸足に対する反発が起きている。
では、何を着て仕事に行くのが許容されるのでしょうか。どうすれば夏のワードローブをうまくスタイリングできますか。また、上司は何を着てよいのか、何を着てはいけないのか教えてくれるでしょうか?
ショーツ
メディア関係で働くコナーさんは、最近の暑い季節には定期的にショートパンツを履いてオフィスに通っている。 「誰があなたの着ているものを猿にあげるのですか？」彼は言い​​ます。
「仕事を安全に、専門的に、適切に行うことができれば、人々を快適にさせるために言うべきことはたくさんあります。」
市場調査会社イプソスによる最近の世論調査では、成人の 62% が、男性が暑い日にショートパンツを履いて仕事をするのは容認できると考えており、女性も 63% が同様であると考えていることがわかりました。
しかし、私たちはショートパンツやデニムのホットパンツのことを話しているのではありません。ファッションデザイナーのアマンダ・ウェイクリー氏は、「短すぎるかどうか自問するなら、おそらく短すぎるでしょう」と指摘します。
彼女は、ショートパンツは「プロの環境で正しく着こなすのが最も難しいアイテム」だと言い、男女ともに、テーラードの丈の長いショートパンツと、シャリシャリとしたシャツや軽量のブレザーとの組み合わせを推奨している。
スタイリストのクレア・チェンバース氏は、男性も女性もショーツは膝蓋骨のあたりに位置するべきであることに同意しています。男性の場合は、タックを入れていない T シャツやシャツと合わせたテーラード チノ スタイルのショートパンツをおすすめします。
サンダル
ウェイクリー氏は、ビーチサンダルは、ほとんどのオフィスで数少ない明確な「禁止」アイテムの 1 つであると説明します。 「プロフェッショナリズムではなく、レジャーであることを即座に示し、最も洗練された服装でも着飾っていないように感じさせます」と彼女は言います。
チェンバース氏もこれに同意し、たとえ最も暑い天候であっても、足をカバーしながら通気性があるため、ウーブンフラットシューズの方が良い選択肢であると述べています。
イプソスが質問した人のほぼ3分の2は、男性は職場で受け入れられないと回答し、58％は女性についても同様と回答した。
しかし、サンダルとなると少し話が異なり、ウェイクリー氏によれば、洗練されたレザーのサンダルは、清潔で手入れが行き届いていれば、多くのオフィスで全く問題なく受け入れられるという。
違いは、それが考えられた衣装の一部のように見えるか、それとも通常プールの周りで着られる何かのように見えるかどうかである、と彼女は言います。
彼女は、靴下とサンダルが急速なファッショントレンドになっている一方で、「そのトレンドが専門的に伝えたいイメージと一致するかどうかを考慮することが重要です」と付け加えました。
「この組み合わせは非常にカジュアルで若々しいと思われる可能性があり、信頼できる権威ある存在感を意図せず損なう可能性があります。」
ストラップトップス
イプソスによると、成人の約40％が職場の女性にタンクトップやベストトップを着用してもよいと考えているのに対し、男性でも同じだと答えたのはわずか24％だった。
ロンドンで教師をしているナターシアさんは、以前の学校で彼女と他のスタッフが「夏になると定期的に呼び出されて、服装について教えてもらっていた」と話す。
彼女はタトゥーを隠すように言われたとも言う。 「特に暑いときは、仕事中に腕を伸ばしても大丈夫です」と彼女は言います。
ウェイクリー氏によると、カットの良いキャミソールやストラップ付きのトップスは、リネンのオーバーシャ​​ツや薄手のジャケット、テーラードコーデの下に着ると効果的だという。ただし、それだけではカジュアルすぎると感じるかもしれません。
チェンバース氏は、ストラップ付きのトップを着ている場合は、「ブラジャーのストラップが見えると服装が完全に台無しになるため、ストラップレスのブラジャーを着用する必要があります」と述べています。
彼女は、ドレスコードが明確でない場合には、より太いストラップの方が安全な選択肢であると説明し、基本的な綿のベストのより洗練された代替品としてサテンのキャミソールを推奨しています。
彼女は、バンドゥトップは「この夏とてもトレンドのルックだが、仕事には使えない」とも付け加えた。
「引き上げるために常にいじり続ける必要があるため、不快で自信のない態度が表れます」と彼女は言います。
職場での夏服のスタイリング方法
ウェイクリー氏とチェンバース氏は、オフィスでの服装の際に自分のスタイルを失う必要はなく、ドレスコードを守りながらも個性をたっぷり取り入れることができると述べています。ここでは、オフィス向けの夏服のスタイリング方法についてのヒントをご紹介します。
雇用主は何を着るべきか教えてくれますか?
気候変動により、今後数年間で英国の夏には、より深刻で頻繁かつ長期にわたる熱波が発生すると予想されています。
雇用主は、特に安全性、ブランディング、プロとしてのイメージの維持などの正当な理由がある場合、服装や外見に関する基準を設定することが認められています。
しかし、雇用弁護士のサラ・タハムタニ氏は、服装規定は「合理的で、相応で、正当化できるもの」であるべきだと述べている。
「猛暑の中、雇用主は既存の要件が現実的であり続けるかどうか、より大きな柔軟性を導入できるかどうかを検討する必要がある。」
また、障害、病状、または高温によって悪化する可能性のあるその他の脆弱性を抱えた従業員についても考慮する必要があります。
要求が不合理である、または適用に一貫性がないと考える従業員は、まずマネージャーまたは人事部に問題を提起し、その規則が従業員の快適さや安全に働く能力にどのような影響を与えているかを説明する必要があります。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cre49389g1qo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-05T23:22:17+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/3041/live/a08095f0-90e8-11f1-a7ab-8b30adf0800a.jpg",
    readTime: 7,
  },
  {
    id: "sandisk-s-stock-falls-as-the-company-s-f-2010d1ab",
    title: "Sandisk’s stock falls as the company’s forecast doesn’t live up to high expectations",
    titleJa: "会社の予想が高い期待に応えられず、サンディスクの株価が下落",
    summaryJa: "同社の収益予測の中間点は、アナリストがモデル化していたものを下回っていた。",
    bodyOriginal: `The midpoint of the company’s revenue forecast was below what analysts had been modeling.`,
    bodyJa: `同社の収益予測の中間点は、アナリストがモデル化していたものを下回っていた。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/sandisks-stock-falls-as-the-companys-forecast-doesnt-live-up-to-high-expectations-8fd13d9b?mod=mw_rss_topstories",
    publishedAt: "2026-08-05T22:25:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-57413903",
    readTime: 2,
  },
  {
    id: "block-slashed-40-of-its-workforce-for-ai-6321934f",
    title: "Block slashed 40% of its workforce for AI — and its earnings suggest that’s paying off",
    titleJa: "Block は AI のために従業員の 40% を削減しました - そしてその収益は、その成果が現れていることを示唆しています",
    summaryJa: "予想を上回る同社の収益報告を受けて、ある幹部は「高品質の製品をずっと、ずっと早く出荷できるようになった」と語った。",
    bodyOriginal: `“We can ship higher-quality products much, much more quickly,” an executive said in the wake of the company’s better-than-expected earnings report`,
    bodyJa: `予想を上回る同社の収益報告を受けて、ある幹部は「高品質の製品をずっと、ずっと早く出荷できるようになった」と語った。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/block-slashed-40-of-its-workforce-for-ai-and-earnings-suggest-thats-paying-off-852b7c54?mod=mw_rss_topstories",
    publishedAt: "2026-08-05T22:19:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-60833731",
    readTime: 2,
  },
  {
    id: "infantino-sorry-for-errors-but-stays-fif-048fe76a",
    title: "Infantino sorry for errors but stays Fifa president",
    titleJa: "インファンティーノ、間違いは申し訳ないがFIFA会長に留まる",
    summaryJa: "インファンティーノ、間違いは申し訳ないがFIFA会長に留まる- 公開されました",
    bodyOriginal: `Infantino sorry for errors but stays Fifa president
- Published
Gianni Infantino has apologised for "errors" he made in controversial plans to sell off stakes in competitions to private investors, but will remain Fifa president after receiving the backing of senior executives in a meeting in Morocco.
Infantino summoned members of the management board to Fifa's Africa office in Rabat on Wednesday following mounting criticism of his aborted proposals, with world football's governing body releasing a statement of support four hours after the meeting ended.
European football's governing body Uefa said at the weekend that it has lost confidence in Infantino, calling the Fifa Forward Enterprise (FFE) proposal a "shabby, back room, opaque deal".
Much criticism has come from within Fifa, including secretary general Mattias Grafstrom, who was at Wednesday's meeting. In an internal memo sent to Fifa staff on Tuesday, he wrote that the situation is "a sad and reproachable series of events".
However, in a statement following the meeting, Grafstrom and the managament board "reaffirmed their full support" for Infantino as president.
Infantino and Grafstrom also sent a signed letter - seen by the BBC - to Fifa's vice-presidents, council and 211 member associations saying they "sincerely apologise" for their errors and "commit to them not happening again".
The two were pictured attending a Women's Africa Cup of Nations match together in Rabat after the meeting.
Infantino had offered all associations $40m (£30m) if they backed a proposal for private investment in its tournaments, including the men's and women's World Cups, through a new subsidiary, FFE.
Fifa said that during Wednesday's meeting "mistakes" regarding FFE were "acknowledged", saying it was "not the intention" for the Fifa council and members association to "feel excluded from the process and that the process should have been handled differently".
The governing body added it "acknowledged that errors were also made after the proposal was leaked to media" - with the Times breaking the story of Infantino's plan on 28 July.
However, the statement also said the organisation "will no longer tolerate any attacks on its integrity, good governance and due process and will take all necessary measures to protect and safeguard its name and reputation".
Earlier, Fifa denied a story in the Times that Infantino had promised Morocco it will host the 2030 World Cup final in exchange for its support.
Fifa said it was a "false and misleading" claim and that a decision on where to hold the final, with the tournament also hosted by Spain and Portugal, will be made "in due course".
Infantino calls executive meeting as criticism mounts
- Published1 day ago
Infantino opponents threaten 'non co-operation' with Fifa
- Published2 days ago
Internal support after more criticism
Infantino will hope that this begins to draw a line under the latest, and perhaps biggest, controversy that has beset his 10-year tenure.
However, this show of support from Fifa executives followed yet more stinging criticism of the Swiss.
Canadian Prime Minister Mark Carney, whose country hosted the recent World Cup with the United States and Mexico, said he no longer had confidence in Infantino.
Former Barcelona, Real Madrid and Portugal winger Luis Figo, who ran for the Fifa presidency against Infantino's predecessor Sepp Blatter in 2015 before withdrawing, called on him to immediately resign.
Figo said: "Infantino has debased the office that he promised to elevate.
"It is too late to save his dignity but it is not too late to save football."
But Infantino, 56, looks set to fight for re-election for a fourth term.
Rivals have until 18 November to put their names forward to stand against him, with the election to be held at the Fifa Congress in Morocco in March 2027.
A candidate requires 106 votes from Fifa's 211 members to win.
Uefa, however, may well have other ideas.
At the weekend, European football's governing body said it had lost confidence in Infantino's leadership and threatened legal action against Fifa.
Earlier this week several member associations - including Wales, with England set to follow suit - withdrew support for his re-election.
Fifa also said that although "mistakes were made, everything that was done was done in full compliance with the Fifa regulatory framework". It added it felt the outcomes of the meeting will "strengthen Fifa's governance" and "restore confidence in the organisation".
It is unlikely that such statements and the approval of a group of executives will dampen Uefa's anger.
How could Uefa react?
Uefa has been quick to react to every twist and turn ever since Infantino's FFE plan emerged.
From the initial rejection of FFE, to the seismic moment when all 55 member associations threatened to boycott Fifa's competitions, through to the effective vote of no confidence.
But Uefa has a problem, and it is not an insignificant hurdle to overcome.
Since Infantino performed his U-turn, only Concacaf as a confederation has criticised the Fifa president. But, unlike Uefa, it did not go as far as to say it had lost confidence in him.
While the Asian confederation did reject the plan, there has been no blanket statement since Infantino aborted it.
Uefa has a great deal of power, but it cannot realistically overthrow Infantino on its own. It needs more global support.
Outside of Europe, so far only Jordan - one of a handful of the 211 member associations not to have signed a letter of support for Infantino's re-election before this controversy - have publicly called for him to go.
The list of countries who have underscored their support is much longer - admittedly from within Infantino's firm power base in Asia and Africa.
In recent days Egypt, Morocco, Niger, Mauritania, DR Congo and the Philippines have all backed Infantino.
Such countries have benefited from funding via Infantino's Fifa Forward programme, the forerunner to FFE, to the tune of $8m (£5.94m) in each three-year cycle.
Uefa has to find a way to persuade such countries that another presidential candidate can offer the same financial programmes, but with greater transparency and reform.
Infantino, however, already has their loyalty.
How can Infantino turn things around?
All the other recent controversies could not touch Infantino - from the way Saudi Arabia won the hosting rights to the 2034 World Cup, to US President Donald Trump's Fifa Peace Prize, to Folarin Balogun's escape from suspension at the World Cup.
This time, an attempt to sell off a slice of the commercial and ticketing rights of Fifa's competitions was a step too far for many.
Not simply because of the optics of such a move, but also that it was kept secret from other senior members of the Fifa hierarchy and that the beneficiary of the deal would have been Joshua Kushner - the brother of Jared Kushner, Trump's son-in-law.
So Infantino had bridges to build with those closest to him, not just with the 211 national associations.
Carlos Cordeiro, Infantino's senior adviser on global strategy and governance, quit over the plan.
Others who were critical opted not to tender their resignations, such as Grafstrom, chief of global football development Arsene Wenger and chief operating officer Kevin Lamour.
It is likely there will be others within the corridors of power at Fifa who kept their counsel.
On top of this, Infantino may also have to map out - or could offer - a route for reform.
This may involve putting additional checks and balances in place that would make it impossible for such a plan to be devised and presented in this way again.
Perhaps he could shelve his plans for a 64-team World Cup? Or offer to open up Fifa's cash reserves?
Related topics
- Published7 hours ago
- Published8 June`,
    bodyJa: `インファンティーノ、間違いは申し訳ないがFIFA会長に留まる
- 公開されました
ジャンニ・インファンティーノ氏は、競技会の株式を個人投資家に売却するという物議を醸した計画で犯した「誤り」について謝罪したが、モロッコでの会議で上級幹部らの支持を得た後はFIFA会長に留任する。
インファンティーノ氏は、中止された提案への批判の高まりを受けて水曜日、経営委員会のメンバーをラバトのFIFAアフリカ事務所に召喚し、世界サッカー統括団体は会議終了の4時間後に支持声明を発表した。
欧州サッカー統括団体のUEFAは週末、FIFAフォワードエンタープライズ（FFE）の提案を「粗末で密室で不透明な取引」と呼び、インファンティーノ監督の信頼を失ったと発表した。
水曜日の会議に出席したマティアス・グラフストロム事務総長を含め、FIFA内部からも多くの批判が上がっている。同氏は火曜日にFIFAスタッフに送った内部メモの中で、今回の状況は「悲しくて非難すべき一連の出来事」だと記した。
しかし、会議後の声明でグラフストロム氏と経営委員会は、インファンティーノ氏を会長として「全面的に支持することを再確認した」と述べた。
インファンティーノ氏とグラフストロム氏はまた、FIFAの副会長、評議会、211の加盟協会に署名入りの書簡を送り、自らの誤りを「心から謝罪」し、「二度と同じことが起こらないよう約束する」と述べた。
会談後、二人はラバトで行われた女子アフリカネイションズカップの試合を一緒に観戦しているところを写真に撮られた。
インファンティーノ氏は、新子会社FFEを通じて男女ワールドカップを含む同大会への民間投資の提案を支持する場合、全協会に対し4000万ドル（3000万ポンド）を提供すると提案していた。
FIFAは水曜日の会議でFFEに関する「間違い」が「認められた」と述べ、FIFA評議会と加盟協会が「プロセスから排除されていると感じ、プロセスは別の方法で処理されるべきだった」と感じるのは「意図したものではない」と述べた。
管理団体は、タイムズ紙が7月28日にインファンティーノ氏の計画の記事を報道し、「提案がメディアにリークされた後にも誤りがあったことを認めた」と付け加えた。
しかし声明では、同団体が「その誠実さ、優れた統治、適正手続きに対するいかなる攻撃ももはや容認せず、その名前と評判を守り守るために必要なあらゆる措置を講じる」とも述べた。
これに先立ち、FIFAはインファンティーノ氏が支援と引き換えに2030年ワールドカップ決勝の開催地をモロッコに約束したとするタイムズ紙の記事を否定した。
FIFAは、この主張は「虚偽で誤解を招く」ものであり、スペインとポルトガルも主催する決勝戦の開催地については「やがて」決定されると述べた。
批判が高まる中、インファンティーノ監督が幹部会議を招集
- 1 日前に公開
インファンティーノ反対派、FIFAと「非協力」を脅す
- 2 日前に公開
さらなる批判を受けた後の内部支持
インファンティーノ氏は、これが彼の任期10年間を悩ませてきた最新、そしておそらく最大の論争に一線を画し始めることを期待しているだろう。
しかし、FIFA幹部によるこの支持表明は、スイスに対するさらに痛烈な批判に続いた。
最近のワールドカップで米国、メキシコとともに開催されたカナダのマーク・カーニー首相は、インファンティーノ氏にはもはや信頼を置いていないと語った。
2015年にインファンティーノ氏の前任者ゼップ・ブラッター氏とのFIFA会長選に立候補し、辞退した元バルセロナ、レアル・マドリード、ポルトガル代表ウィンガーのルイス・フィーゴ氏は、インファンティーノ氏に即時辞任するよう求めた。
フィーゴ氏は「インファンティーノ氏は昇格すると約束していた職位を貶めた。
「彼の尊厳を守るには遅すぎるが、サッカーを救うには遅すぎることはない。」
しかし、56歳のインファンティーノ氏は4期目の再選を目指して戦うことになりそうだ。
ライバルたちは11月18日までに彼に対抗する名乗りを上げなければならず、選挙は2027年3月にモロッコで開催されるFIFA総会で行われる予定だ。
候補者が当選するには、FIFA会員211人から106票が必要となる。
しかし、UEFAには別の考えがあるかもしれない。
欧州サッカー統括団体は週末、インファンティーノ氏の指導力に対する信頼を失ったと発表し、ＦＩＦＡに対して訴訟を起こすと脅した。
今週初め、ウェールズを含むいくつかの加盟団体が同氏の再選への支持を撤回し、イングランドもこれに追随する予定だ。
FIFAはまた、「ミスはあったものの、行われたことはすべてFIFAの規制枠組みに完全に従って行われた」と述べた。さらに、会議の成果は「FIFAのガバナンスを強化」し、「組織への信頼を回復」すると感じていると付け加えた。
このような発言や幹部らの承認がUEFAの怒りを静める可能性は低い。
ウエファはどう反応するでしょうか？
インファンティーノ氏のFFE計画が浮上して以来、UEFAはあらゆる紆余曲折に迅速に対応してきた。
最初のFFEの拒否から、55の加盟協会すべてがFIFAの大会をボイコットすると脅した激震の瞬間、そして事実上の不信任投票に至るまで。
しかし、UEFA には問題があり、それは克服すべき小さなハードルではありません。
インファンティーノ氏がＵターンして以来、連盟としてＦＩＦＡ会長を批判したのはコンカフ氏だけとなった。しかし、UEFAとは異なり、信頼を失ったとまでは言えなかった。
アジア連盟はこの計画を拒否したが、インファンティーノ監督が計画を中止して以来、包括的な声明は出ていない。
UEFAは大きな力を持っているが、現実的に単独でインファンティーノを倒すことはできない。もっと世界的なサポートが必要です。
ヨーロッパ以外では、これまでのところ、ヨルダンだけが、この論争の前にインファンティーノの再選を支持する書簡に署名していない211の加盟団体のうちの一つであるが、公に同氏の辞任を求めている。
彼らの支持を強調した国のリストは、明らかに、アジアとアフリカにおけるインファンティーノの強固な権力基盤の中からのものであり、はるかに長い。
ここ数日、エジプト、モロッコ、ニジェール、モーリタニア、コンゴ民主共和国、フィリピンがすべてインファンティーノを支持している。
そうした国々は、FFEの前身であるインファンティーノのFIFAフォワードプログラムを通じた資金提供の恩恵を受けており、3年サイクルごとに800万ドル（594万ポンド）に上る。
ＵＥＦＡは、こうした国々に対し、別の大統領候補が同じ財政プログラムをより透明性と改革を提供できるよう説得する方法を見つけなければならない。
しかし、インファンティーノにはすでに彼らの忠誠心があります。
インファンティーノはどうすれば状況を好転させることができるでしょうか？
サウジアラビアが2034年ワールドカップの開催権を獲得した経緯から、ドナルド・トランプ米大統領のFIFA平和賞受賞、ワールドカップでのフォラリン・バログンの出場停止からの脱出まで、その他の最近の論争はすべてインファンティーノに触れることはできなかった。
今回、FIFAの大会の商業権とチケット販売権の一部を売却するという試みは、多くの人にとって行き過ぎた措置だった。
その理由は単にそのような動きの見た目のためだけではなく、それがFIFA幹部の他の幹部には秘密にされていたこと、そしてこの取引の受益者はトランプ氏の義理の息子ジャレッド・クシュナー氏の弟であるジョシュア・クシュナー氏だったことも理由である。
そのため、インファンティーノには 211 の国内協会だけでなく、彼に最も近い人々との間に橋を築く必要がありました。
インファンティーノの世界戦略とガバナンス担当シニアアドバイザー、カルロス・コルデイロ氏はこの計画を理由に辞任した。
世界サッカー開発責任者のグラフストロム氏やアーセン・ベンゲル氏、最高執行責任者のケビン・ラムール氏など、批判的な人々は辞表を提出しないことを選択した。
おそらく、FIFAの権力内部には、彼らの助言を守った人物が他にもいるだろう。
これに加えて、インファンティーノ氏は改革への道筋を描く必要があるか、あるいは提示する可能性もある。
これには、そのような計画が再びこのように考案され提示されることを不可能にする追加の抑制と均衡の導入が含まれる場合があります。
おそらく彼は、64チームによるワールドカップの計画を棚上げすることができるだろうか？それともFIFAの資金を開放することを提案しますか？
関連トピック
- 7 時間前に公開
- 6 月 8 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/sport/football/articles/clyq3el5gkqo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-05T21:37:08+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/ff53/live/5bb2a070-90cb-11f1-822b-5340fee140e1.jpg",
    readTime: 9,
  },
  {
    id: "trump-s-liberation-day-tariff-refunds-hi-0bcab0dc",
    title: "Trump's 'Liberation Day' tariff refunds hit $100bn",
    titleJa: "トランプ大統領の「解放記念日」関税還付額は1000億ドルに達する",
    summaryJa: "トランプ大統領の「解放記念日」関税還付額は1000億ドルに達する- 公開されました",
    bodyOriginal: `Trump's 'Liberation Day' tariff refunds hit $100bn
- Published
Donald Trump's administration has paid back $100bn (£78bn) in "Liberation Day" tariff refunds to businesses through US customs officials.
This represents roughly 60% of all tariff revenue collected by the government under the policy, according to a recent court filing, external from US Customs and Border Protection.
However, a significant chunk of money remains unpaid. Nearly $29bn in potential refunds is undergoing review by trade authorities, while another $1.6bn remains stuck because importers have not yet supplied their banking details.
The repayments follow a major Supreme Court decision in February, in which judges ruled that broad import tariffs introduced under economic powers were unlawful.
The White House had cited a 1977 law, the International Emergency Economic Powers Act (IEEPA), which gives the president power to "regulate" trade in response to an emergency.
But the measures sparked outcry at home and abroad from firms facing an abrupt rise in taxes on shipments entering the US, and fuelled worries that the levies would lead to higher prices.
Since the Supreme Court decision, several major American corporations have already claimed large sums back.
Amazon received approximately $600m in refunds during the second quarter, according to finance chief Brian Olsavsky.
Olsavsky said on the company's second quarter earnings call that Amazon would pass some money back to customers where specific charges were applied, and the remaining funds would be used to support lower store prices.
The overall tariffs payout is expected to rise further as US Customs continue to review pending claims and importers update their banking details.
Related topics
- Published21 February
- Published1 day ago`,
    bodyJa: `トランプ大統領の「解放記念日」関税還付額は1000億ドルに達する
- 公開されました
ドナルド・トランプ政権は、「解放記念日」の関税還付金1,000億ドル（780億ポンド）を米国税関当局を通じて企業に返済した。
米国税関国境警備局以外の最近の裁判所提出書類によると、これはこの政策に基づいて政府が徴収した全関税収入の約60％に相当する。
しかし、かなりの金額が未払いのままです。還付の可能性のある290億ドル近くが通商当局による審査を受けている一方、輸入業者が銀行口座の詳細をまだ提供していないため、さらに16億ドルが滞ったままとなっている。
この返済は、経済権力のもとで導入された広範な輸入関税は違法であるとの判事らの判決を下した2月の重要な最高裁判所判決に続くものである。
ホワイトハウスは、緊急事態に対応して大統領に貿易を「規制」する権限を与える国際緊急経済権限法（IEEPA）という1977年の法律を引用していた。
しかしこの措置は、米国に入国する貨物に対する税金の突然の引き上げに直面している企業から国内外で反発を引き起こし、課税が価格上昇につながるのではないかとの懸念を煽った。
最高裁判所の判決以来、いくつかのアメリカの大手企業はすでに多額の返還を請求している。
財務責任者のブライアン・オルサブスキー氏によると、アマゾンは第２・四半期に約６億ドルの返金を受けた。
オルサブスキー氏は同社の第2四半期決算会見で、アマゾンは特定の料金が適用された顧客に一部の資金を還元し、残りの資金は店舗価格の引き下げをサポートするために使用すると述べた。
米国税関が保留中の請求の審査を続け、輸入業者が銀行取引の詳細を更新するため、関税支払い全体はさらに増加すると予想されます。
関連トピック
- 2 月 21 日発行
- 1 日前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cwyewn5wexvo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-05T19:39:48+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/15b1/live/c8099ce0-90f0-11f1-a7ab-8b30adf0800a.jpg",
    readTime: 2,
  },
  {
    id: "trump-admin-refunds-100-billion-in-liber-4061d265",
    title: "Trump admin refunds $100 billion in 'liberation day' tariffs",
    titleJa: "トランプ政権、「解放記念日」関税1000億ドルを返還",
    summaryJa: "トランプ政権は、ドナルド・トランプ大統領の「解放記念日」の義務が最高裁判所によって無効になる前に徴収された関税収入のうち約1000億ドルを返還したと発表した。この数字は米国際貿易裁判所への提出書類で火曜日に報告されたもので、トランプ大統領が国際緊急経済権限法（IEEPA）を利用して2025年に課した大幅な関税から政府が集めたとしている約1660億ドルの約60％に相当する。",
    bodyOriginal: `The Trump administration said it has refunded about $100 billion of the tariff revenue that was collected before President Donald Trump's "liberation day" duties were struck down by the Supreme Court.
The figure, reported Tuesday in a filing in the U.S. Court of International Trade, represents about 60% of the roughly $166 billion the government says it raked in from the sweeping tariffs Trump imposed in 2025 using the International Emergency Economic Powers Act, or IEEPA.
Those tariffs were scrapped in late February after the high court ruled IEEPA did not authorize them. About two weeks later, federal Judge Richard Eaton ordered that tariffs collected under IEEPA must be refunded to the importers.
Trump, who placed heavy-handed tariffs at the center of his economic and foreign policy agendas, has vented his rage over the court rulings, and his administration has recently taken a series of steps to effectively re-create the IEEPA tariff regime using other legal authorities.
"Tariffs have been incredible. We've taken in hundreds of billions of dollars," Trump said Tuesday in a Fox News interview. "Supreme Court gave us a little shot, but we're allowed to do it in a different manner."
Those different tariff methods are already facing their own court challenges. In the meantime, the Trump administration has been doling out refunds to the defunct IEEPA regime.
U.S. Customs and Border Protection in late April implemented a system called Consolidated Administration and Processing of Entries, or CAPE, to track and deliver tariff refunds.
As of July 31, CAPE has received 252,496 tariff refund declarations covering more than 25 million import entries, CBP official Brandon Lord said in Tuesday's filing, a court-ordered update on the administration's progress delivering the refunds.
Nearly $129 billion in "both potential and certified refunds" have been accepted for processing through the CAPE system, Lord said. Of that total, approximately $100 billion has been completed, certified and sent to the Treasury Department for disbursement, he wrote.
The filing came in a lawsuit filed by Freestyle World, a California-based importer that seeks to mount a class action on behalf of smaller businesses that paid IEEPA tariffs and say they face barriers getting refunds through CAPE. The government maintains that the request for class certification came too late and is invalid anyway.
Either way, the Trump administration's refund operation still has a long way to go: more than 330,000 importers paid IEEPA tariffs on over 53 million entries.`,
    bodyJa: `トランプ政権は、ドナルド・トランプ大統領の「解放記念日」の義務が最高裁判所によって無効になる前に徴収された関税収入のうち約1000億ドルを返還したと発表した。
この数字は米国際貿易裁判所への提出書類で火曜日に報告されたもので、トランプ大統領が国際緊急経済権限法（IEEPA）を利用して2025年に課した大幅な関税から政府が集めたとしている約1660億ドルの約60％に相当する。
これらの関税は、高等裁判所がIEEPAが認可していないとの判決を下した後、2月下旬に廃止された。約２週間後、リチャード・イートン連邦判事は、ＩＥＥＰＡに基づいて徴収された関税を輸入業者に返還しなければならないと命じた。
強権関税を経済・外交政策の課題の中心に据えたトランプ大統領は、裁判所の判決に対する怒りをぶちまけており、同政権は最近、他の法的当局を利用してIEEPA関税制度を効果的に再構築するための一連の措置を講じている。
トランプ大統領は火曜日、FOXニュースのインタビューで「関税は信じられないほどだった。我々は何千億ドルも取り入れた」と語った。 「最高裁判所は私たちに少しのチャンスを与えましたが、私たちは別の方法でそれを行うことを許可されています。」
これらのさまざまな関税方法は、すでに法廷での異議申し立てに直面している。その間、トランプ政権は消滅したIEEPA体制に返金を行っている。
米国税関・国境警備局は4月下旬、関税還付を追跡し発送するための統合管理・入国処理（CAPE）と呼ばれるシステムを導入した。
7月31日の時点で、CAPEは2,500万件以上の輸入品を対象とする25万2,496件の関税還付申告を受領したとCBP当局者のブランドン・ロード氏が火曜日の提出書類で述べ、還付を実現する政府の進捗状況に関する裁判所命令の最新情報となった。
ロード氏によると、「潜在的な返金と認定された返金の両方」のうち1,290億ドル近くがCAPEシステムを通じて処理のために受け入れられたという。この総額のうち、約1000億ドルが完了し、認証され、支出のために財務省に送られたと同氏は書いた。
この申し立ては、カリフォルニアに本拠を置く輸入業者フリースタイル・ワールドが起こした訴訟の一環として行われたもので、同団体は、IEEPA関税を支払った中小企業がCAPEを通じて返金を受ける障壁に直面しているとして、集団訴訟を起こそうとしている。政府は、クラス認定の要求は遅すぎたし、とにかく無効であると主張している。
いずれにせよ、トランプ政権の返金作戦にはまだ長い道のりがあり、33万社以上の輸入業者が5,300万件以上の輸入品に対してIEEPA関税を支払っている。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/05/trump-tariffs-refunds-ieepa-lawsuit.html",
    publishedAt: "2026-08-05T19:31:26+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 3,
  },
  {
    id: "senate-vote-on-the-protect-college-sport-0a251cea",
    title: "Senate vote on the Protect College Sports Act could come this week: What it means for transfers and salary caps",
    titleJa: "大学スポーツ保護法に関する上院採決は今週行われる可能性がある：移籍とサラリーキャップは何を意味するのか",
    summaryJa: "大学スポーツ保護法が大学スポーツの経済にどのような影響を与える可能性があるかを見てみましょう。",
    bodyOriginal: `Here’s how the Protect College Sports Act could impact the economics of college sports.`,
    bodyJa: `大学スポーツ保護法が大学スポーツの経済にどのような影響を与える可能性があるかを見てみましょう。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/senate-vote-on-the-protect-college-sports-act-could-come-this-week-what-it-means-for-transfers-and-salary-caps-58088560?mod=mw_rss_topstories",
    publishedAt: "2026-08-05T19:10:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-80172973",
    readTime: 2,
  },
  {
    id: "why-at-t-verizon-and-t-mobile-shares-are-78b39464",
    title: "Why AT&T, Verizon and T-Mobile shares are down after SpaceX’s earnings",
    titleJa: "SpaceXの収益後にAT&T、Verizon、T-Mobileの株価が下落した理由",
    summaryJa: "SpaceXは、大規模なネットワーク投資なしで無線機能を構築できると考えている。",
    bodyOriginal: `SpaceX thinks it will be able to build wireless capabilities without massive network investments.`,
    bodyJa: `SpaceXは、大規模なネットワーク投資なしで無線機能を構築できると考えている。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/why-at-t-verizon-and-t-mobile-shares-are-down-after-spacexs-earnings-033a07ce?mod=mw_rss_topstories",
    publishedAt: "2026-08-05T18:57:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-80028774",
    readTime: 2,
  },
  {
    id: "google-s-ai-reshuffle-chief-scientist-je-532edf1c",
    title: "Google's AI reshuffle: Chief scientist Jeff Dean exits and Demis Hassabis steps down as DeepMind CEO",
    titleJa: "GoogleのAI再編：チーフサイエンティストのジェフ・ディーン氏が退任、デミス・ハサビス氏がディープマインドCEOを辞任",
    summaryJa: "GoogleのAI部門が再編され、主任科学者のジェフ・ディーン氏が27年間勤務した同社を去ると、検索大手が水曜日に発表した。Googleのブログに投稿されたCEOサンダー・ピチャイのメモによると、Google DeepMindのCEOであるDemis Hassabis氏は同部門の会長職に異動し、親会社Alphabetのチーフサイエンティストという肩書きにも就任するという。",
    bodyOriginal: `Google's AI divisions are getting reshuffled, the search giant announced on Wednesday, with chief scientist Jeff Dean leaving the company after 27 years.
Demis Hassabis, the CEO of Google DeepMind, is moving into a chairman role of that unit and also assuming the title chief scientist of parent company Alphabet, according to a memo from CEO Sundar Pichai that was posted to Google's blog.
Alphabet shares fell about 4% after the announcement.
Dean, a pioneer in artificial intelligence who's been credited with some of Google's most important technical breakthroughs, is starting his own company along with Google senior fellow Sanjay Ghemawat, the post said. The departure is on friendly terms, and Google will invest in his startup, a representative said.
"After an incredible 27-year run, Jeff Dean is at a moment where he wants to try something new, and we're excited to support him in that," Pichai said in the post. He added that Dean and Ghemawat will be working to "accelerate discoveries" in machine learning, science and engineering.
The shake-up, which includes promoting DeepMind technology chief Koray Kavukcuoglu to head of the AI division, comes as Google navigates a rapidly evolving AI industry, with the company trying to compete against OpenAI and Anthropic in developing the most cutting-edge frontier models while also pouring money into infrastructure so that its cloud division can serve customers as well as its own workloads.
In the latest quarter, Google turned cash flow negative for the first time on record due to its capital expenditures, while forecasting full-year capex of up to $205 billion. Kavukcuoglu will lead the development of Gemini 4, the company's next major AI model, and will report to Pichai.
Hassabis co-founded DeepMind and joined Google when the search giant purchased the lab in 2014. In recent years, he's been leading nearly all of Alphabet's foundational AI work.
"I've decided that now is the right time for me to hand over my day-to-day operational responsibilities at GDM, so that I have the time and space to focus on the big picture and help influence what is to come to the best of my ability," Hassabis said in a note to employees.
He added he would work with Pichai on "strategic and global" matters related to AI.
In a follow-up post on X, Dean said his new startup will be called Discovery Loop, and that it will be organized as a public benefit corporation focused on AI for science and engineering.
From a growth perspective, Google has been doing just fine on AI. The company's cloud division, run by Thomas Kurian, is expanding at a much faster clip than larger rivals Amazon Web Services and Microsoft Azure.
Cloud revenue at Google soared 82% in the second quarter to $24.8 billion. AWS reported revenue growth of 37% in the quarter, while Azure sales climbed 43%.
Pichai said on the earnings call that cloud expansion was driven by AI infrastructure and AI solutions, noting that was helped by demand for the company's homegrown tensor processing units, or TPUs.
The report came a day after Google announced three new Gemini models, including its clearest answer yet to Anthropic's lead in cybersecurity, though the company still hasn't released Gemini 3.5 Pro, which has been delayed.
"Demand for our models is translating to strong token usage across developers and enterprise customers," Pichai said on the earnings call. "And we continue to be supply constrained, a sign of momentum and rapid adoption."
WATCH: Hassabis on state of AI race`,
    bodyJa: `GoogleのAI部門が再編され、主任科学者のジェフ・ディーン氏が27年間勤務した同社を去ると、検索大手が水曜日に発表した。
Googleのブログに投稿されたCEOサンダー・ピチャイのメモによると、Google DeepMindのCEOであるDemis Hassabis氏は同部門の会長職に異動し、親会社Alphabetのチーフサイエンティストという肩書きにも就任するという。
発表を受けてアルファベット株は約４％下落した。
ディーン氏は人工知能のパイオニアであり、グーグルの最も重要な技術的躍進の功績が認められており、グーグルのシニアフェロー、サンジェイ・ゲマワット氏とともに自身の会社を立ち上げていると投稿では述べた。退社は友好的な条件で行われ、グーグルは同氏のスタートアップに投資する予定だと代表者は述べた。
ピチャイ氏は投稿の中で「驚くべき27年間のキャリアを経て、ジェフ・ディーンは何か新しいことに挑戦したいと考えているところだ。我々はそれをサポートできることに興奮している」と述べた。同氏は、ディーン氏とゲマワット氏が機械学習、科学、工学における「発見の加速」に取り組むと付け加えた。
DeepMindの技術責任者であるKoray Kavukcuoglu氏をAI部門の責任者に昇進させることを含むこの刷新は、Googleが急速に進化するAI業界を舵取りする中で行われ、同社は最先端のフロンティアモデルの開発でOpenAIやAnthropicと競争すると同時に、クラウド部門が自社のワークロードだけでなく顧客にもサービスを提供できるようインフラストラクチャにも資金を注ぎ込もうとしている。
最新の四半期、Googleは設備投資により史上初めてキャッシュフローがマイナスに転じたが、年間の設備投資は最大2,050億ドルになると予想している。カブククオグル氏は、同社の次期主要AIモデルであるジェミニ4の開発を指揮し、ピチャイ氏の直属となる。
ハサビス氏は DeepMind を共同設立し、2014 年に検索大手が研究所を買収したときに Google に入社しました。近年、彼は Alphabet の基礎的な AI 作業のほぼすべてを指揮しています。
ハサビス氏は従業員に宛てたメモの中で、「今がGDMでの日々の運営上の責任を引き継ぐのに適切な時期であると判断した。そうすることで、全体像に集中し、今後のことに影響を与えることに全力を尽くすための時間とスペースを確保できる」と述べた。
同氏は、AIに関連する「戦略的かつ世界的な」問題についてピチャイ氏と協力すると付け加えた。
Xに関するフォローアップ投稿で、ディーン氏は、彼の新しいスタートアップはDiscovery Loopと呼ばれ、科学と工学向けのAIに焦点を当てた公益法人として組織されると述べた。
成長という観点から見ると、Google は AI に関しては順調に成長しています。 Thomas Kuran 氏が率いる同社のクラウド部門は、大手ライバルである Amazon Web Services や Microsoft Azure よりもはるかに速いスピードで拡大しています。
Google のクラウド収益は第 2 四半期に 82% 増加し、248 億ドルになりました。 AWS は同四半期の売上高が 37% 増加したと報告し、一方、Azure の売上高は 43% 増加しました。
ピチャイ氏は決算会見で、クラウドの拡大はAIインフラストラクチャとAIソリューションによって推進されたと述べ、自社製のテンソルプロセッシングユニット（TPU）の需要によって支援されたと指摘した。
このレポートは、Googleがサイバーセキュリティ分野でリードするAnthropicに対するこれまでで最も明確な回答を含む3つの新しいGeminiモデルを発表した翌日に発表されたが、同社はまだGemini 3.5 Proをリリースしておらず、遅れている。
「当社のモデルに対する需要は、開発者や企業顧客全体での強力なトークン使用につながっている」とピチャイ氏は決算会見で述べた。 「そして供給には引き続き制約があり、これは勢いと急速な普及の兆しです。」
注目：ハサビス氏がAI競争の現状について語る`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/05/google-chief-scientist-jeff-dean-leaving-company-after-27-years.html",
    publishedAt: "2026-08-05T18:51:53+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "retail-investors-are-buying-the-dip-on-s-17d0db71",
    title: "Retail investors are buying the dip on SpaceX’s stock before more shares flood the market",
    titleJa: "個人投資家は、さらに多くの株が市場にあふれる前に、スペースX株の押し目買いを始めている",
    summaryJa: "個人投資家は水曜日、スペースX株が最初の決算報告を発表した後に株価が下落したにもかかわらず、積極的に株価の押し目買いを行った。",
    bodyOriginal: `Retail investors were doing what they do best on Wednesday: Buying the dip in SpaceX shares aggressively, even as the company’s stock sank after it released its first earnings report.`,
    bodyJa: `個人投資家は水曜日、スペースX株が最初の決算報告を発表した後に株価が下落したにもかかわらず、積極的に株価の押し目買いを行った。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/retail-investors-are-buying-the-dip-on-spacexs-stock-before-more-shares-flood-the-market-9f83e00f?mod=mw_rss_topstories",
    publishedAt: "2026-08-05T18:51:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-00481430",
    readTime: 2,
  },
  {
    id: "solaredge-s-stock-is-shedding-a-quarter-56df4467",
    title: "SolarEdge’s stock is shedding a quarter of its value as sales woes trump AI progress",
    titleJa: "売上不振がAIの進歩を上回るため、ソーラーエッジの株価はその価値の4分の1を下落している",
    summaryJa: "同社は欧州で課題に直面しており、これが予想を下回る収益予測につながった。",
    bodyOriginal: `The company faces challenges in Europe, which led to a weaker-than-expected revenue forecast.`,
    bodyJa: `同社は欧州で課題に直面しており、これが予想を下回る収益予測につながった。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/solaredges-stock-is-shedding-a-quarter-of-its-value-as-sales-woes-trump-ai-progress-8ce8159d?mod=mw_rss_topstories",
    publishedAt: "2026-08-05T18:31:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-40258056",
    readTime: 2,
  },
  {
    id: "lisa-su-brushes-off-musk-s-nvidia-commit-63af3819",
    title: "Lisa Su brushes off Musk's Nvidia commitment as AMD stock sinks after earnings",
    titleJa: "AMD株が決算後に下落する中、リサ・スー氏はマスク氏のNVIDIAへのコミットメントを無視",
    summaryJa: "アドバンスト・マイクロ・デバイセズの最高経営責任者（CEO）リサ・スー氏は水曜日、スペースXがエヌビディアの人工知能チップを独占的に使用することを約束しているというイーロン・マスク氏のコメントを一蹴した。スー氏はCNBCの番組「スコーク・オン・ザ・ストリート」で、「私はイーロンと彼が成し遂げたことすべてに多大な敬意を抱いている。だから今後も長期的に提携し続けることを楽しみにしている」と語った。",
    bodyOriginal: `Advanced Micro Devices CEO Lisa Su on Wednesday brushed off comments from Elon Musk that SpaceX was committing to exclusively use Nvidia artificial intelligence chips.
"I have tremendous respect for Elon and everything that he has done, and so we look forward to continuing to partner over the longer term," Su told CNBC's "Squawk on the Street."
Musk said Tuesday on the company's earnings call that AMD's AI chip rival had "the best architecture" and touted the close cooperation and partnership with Nvidia. In May 2025, Musk told CNBC's David Faber that his AI company would buy chips from both companies, and possibly others.
Nvidia shares climbed about 3% on Wednesday.
Su called SpaceX "an incredibly important technology company" and said she's proud of the work AMD has done with them in several areas. She noted the company still has business with many tech companies, including those in the space market.
AMD's stock sank 7% on Wednesday despite posting strong second-quarter earnings and guiding for Data Center segment growth "well over 100%."
Su reinforced that outlook to CNBC on Wednesday, and explained how the company is planning into 2027 and beyond.
"We have much, much stronger customer visibility in this time frame," Su said. "And what customers are telling us is, you know, they want a lot more compute."
AMD revenue climbed 50% to $11.54 billion in the second quarter, ahead of analyst expectations of $11.28 billion, in a sign of the company's central position in the market for AI chips.
Data center sales drove much of the company's growth, up 107% on an annual basis to $6.7 billion, which the company attributed to central processing unit and graphics processing unit sales.
Su told analysts on the earnings call Tuesday that the company expects server revenue to grow 80% year-over-year in the second half of 2026 and more than 70% for 2027.
Su told CNBC on Wednesday that its customers are giving the company "much more opportunity to plan" with server supply.
"As a result, we're making investments across the supply chain," she said. "We're working with our partners. We're making backend investments. We're making the investments in the entire ecosystem, such that we'll be able to supply at the much higher rate that our customers are asking for."
But while second-quarter earnings came in "slightly ahead" of consensus, they fell below "more optimistic estimates," Deutsche Bank analysts said in a Wednesday note.
AMD has been a big beneficiary of the AI boom, with the stock trading up 132% so far this year. Confidence has been buoyed by the company's GPU and CPU products.
"AI is driving a significant expansion in demand for compute across all of our markets," Su said in a Tuesday statement. "Our leadership portfolio and growing customer visibility position us exceptionally well to capture this expanding opportunity and deliver substantial revenue and earnings growth in the years ahead."
Earnings failed to impress investors who've consistently been skittish this year of some AI stocks.
In July, AMD raised its expectations for the size of the semiconductor industry, saying it could be worth $2 trillion per year by 2028. The chipmaker sees $1.4 trillion of that coming from AI accelerators, or GPUs, up from a previous estimate of $500 billion by 2028.
"It's simply a case of market expectations being too high," Michael Field, chief equity strategist at Morningstar, told CNBC.
"The stock has trebled in the last 12 months and now trades on a P/E multiple of 170, meaning expectations are commensurately high," he added. "We view the dip as a potential buying opportunity, and investors may take a similar view in the coming weeks."
— CNBC's Kif Leswing helped contribute to this report.`,
    bodyJa: `アドバンスト・マイクロ・デバイセズの最高経営責任者（CEO）リサ・スー氏は水曜日、スペースXがエヌビディアの人工知能チップを独占的に使用することを約束しているというイーロン・マスク氏のコメントを一蹴した。
スー氏はCNBCの番組「スコーク・オン・ザ・ストリート」で、「私はイーロンと彼が成し遂げたことすべてに多大な敬意を抱いている。だから今後も長期的に提携し続けることを楽しみにしている」と語った。
マスク氏は火曜日、同社の決算会見で、AMDのAIチップのライバルである同社が「最高のアーキテクチャ」を持っていると述べ、NVIDIAとの緊密な協力とパートナーシップを強調した。 2025年5月、マスク氏はCNBCのデビッド・フェイバーに対し、彼のAI会社が両社、そしておそらくは他の企業からもチップを購入するだろうと語った。
エヌビディア株は水曜日に約３％上昇した。
Su氏はSpaceXを「信じられないほど重要なテクノロジー企業」と呼び、AMDがいくつかの分野で同社と行った取り組みを誇りに思っていると語った。同氏は、同社が宇宙市場の企業を含む多くのテクノロジー企業と依然として取引を行っていると指摘した。
AMDの株価は水曜日、第2四半期に好調な利益を記録し、データセンター部門の成長を「100％を大きく超える」方向に導いたにもかかわらず、7％下落した。
スー氏は水曜日、CNBCに対してその見通しを強調し、同社が2027年以降に向けてどのように計画しているかを説明した。
「この期間では、顧客の可視性が非常に強化されます」と Su 氏は述べています。 「そして、お客様が私たちに言っていることは、ご存知のとおり、より多くのコンピューティングを望んでいるということです。」
AMDの第2四半期の売上高は50％増の115億4000万ドルとなり、アナリスト予想の112億8000万ドルを上回り、AIチップ市場における同社の中心的地位の表れとなった。
データセンターの売上高が同社の成長の多くを牽引し、年間ベースで107%増の67億ドルとなり、同社はこれを中央処理装置とグラフィックス処理装置の売上によるものと考えている。
スー氏は火曜日の決算会見でアナリストに対し、同社のサーバー収益は2026年下半期には前年比80％増、2027年には70％以上増加すると予想していると語った。
スー氏は水曜日、CNBCに対し、顧客が同社にサーバー供給に関して「計画を立てる機会を大幅に与えてくれている」と語った。
「その結果、私たちはサプライチェーン全体に投資を行っています」と彼女は語った。 「私たちはパートナーと協力しています。バックエンドへの投資を行っています。顧客が求めるより高いレートで供給できるよう、エコシステム全体に投資を行っています。」
しかしドイツ銀行のアナリストらは水曜のメモで、第２・四半期利益はコンセンサスを「わずかに上回った」ものの、「より楽観的な予想」を下回ったと述べた。
AMDはAIブームの恩恵を大きく受けており、今年に入ってから株価は132％上昇した。同社の GPU および CPU 製品によって自信が高まっています。
スー氏は火曜日の声明で、「AIは私たちの市場全体でコンピューティング需要の大幅な拡大を推進している」と述べた。 「当社のリーダーシップポートフォリオと顧客認知度の向上により、この拡大する機会を捉え、今後数年間で大幅な収益と利益の成長を実現するのに非常に有利な立場にあります。」
一部のAI株に対して今年一貫して慎重だった投資家は、決算は好印象を与えることができなかった。
AMDは7月、半導体産業の規模についての予想を引き上げ、2028年までに年間2兆ドルの価値に達する可能性があると述べた。このチップメーカーは、そのうち1兆4000億ドルがAIアクセラレーター（GPU）によるものとみており、2028年までに5000億ドルという従来の予想から増加する。
モーニングスターの首席株式ストラテジスト、マイケル・フィールド氏はＣＮＢＣに対し、「これは単に市場の期待が高すぎるということだ」と語った。
同氏は「株価は過去12カ月で3倍に上昇し、現在PERは170倍となっており、期待も相応に高いことを意味している」と付け加えた。 「私たちはこの下落を潜在的な買いの機会と見ており、投資家も今後数週間で同様の見方をするかもしれない。」
— CNBC の Kif Leswing がこのレポートへの貢献に協力しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/05/amd-stock-today-earnings-q2.html",
    publishedAt: "2026-08-05T16:00:55+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 5,
  },
  {
    id: "situational-awareness-hedge-fund-meltdow-87681154",
    title: "Situational Awareness hedge fund meltdown was a warning shot for leveraged markets, BofA CEO says",
    titleJa: "状況認識ヘッジファンドのメルトダウンはレバレッジ市場への警告だった、BofA CEOが語る",
    summaryJa: "バンク・オブ・アメリカのブライアン・モイニハン最高経営責任者（CEO）は水曜日、急成長を遂げているAIヘッジファンド、シチュエーショナル・アウェアネスの最近の破綻寸前は、バリュエーションの高騰と借り入れによって支えられている金融市場への警鐘であると述べた。レオポルド・アッシェンブレナー氏率いるシチュエーショナル・アウェアネスは、人工知能への賭けが悪化したため先週、投げ売りで公開株の大部分をシタデルに売却することを余儀なくされた。バンク・オブ・アメリカは、ゴールドマン・サックスやJPモルガン・チェースとともに、同社の主要ブローカーの1社として取引を実行し、ファンドにレバレッジを提供していた。",
    bodyOriginal: `Bank of America CEO Brian Moynihan on Wednesday called the recent near-collapse of high-flying AI hedge fund Situational Awareness a warning shot for financial markets that are being fueled by elevated valuations and borrowed money.
Situational Awareness, led by Leopold Aschenbrenner, was forced to offload most of its public equities to Citadel last week in a fire sale as its bets on artificial intelligence soured. Bank of America was among the firm's prime brokers, executing trades and providing leverage to the fund, along with Goldman Sachs and JPMorgan Chase.
"These are all warning shots," Moynihan told CNBC's Andrew Ross Sorkin. "Valuations get out, leverage in the system gets there. You have to be careful."
Moynihan's comments suggest Wall Street's largest prime brokers are reexamining exposure to highly leveraged investment firms after the AI trade has fueled surging markets over the last several years, even as they continue competing aggressively to finance hedge funds.
"You always look and say, 'OK, what happened? Should we learn from it? Should it change?'" Moynihan said. "And so the tendency is to tighten the underwriting standards, just a hair, to adjust — especially with big run-ups in stocks."
Still, Bank of America would've been "fine" even absent the Citadel deal, which provided capital for Situational Awareness to pay off its banks, Moynihan said.`,
    bodyJa: `バンク・オブ・アメリカのブライアン・モイニハン最高経営責任者（CEO）は水曜日、急成長を遂げているAIヘッジファンド、シチュエーショナル・アウェアネスの最近の破綻寸前は、バリュエーションの高騰と借り入れによって支えられている金融市場への警鐘であると述べた。
レオポルド・アッシェンブレナー氏率いるシチュエーショナル・アウェアネスは、人工知能への賭けが悪化したため先週、投げ売りで公開株の大部分をシタデルに売却することを余儀なくされた。バンク・オブ・アメリカは、ゴールドマン・サックスやJPモルガン・チェースとともに、同社の主要ブローカーの1社として取引を実行し、ファンドにレバレッジを提供していた。
「これらはすべて警告射撃だ」とモイニハン氏はCNBCのアンドリュー・ロス・ソーキン氏に語った。 「バリュエーションが低下し、システム内のレバレッジがそこに影響を及ぼします。注意が必要です。」
モイニハン氏のコメントは、ウォール街最大手のプライムブローカーが、ヘッジファンドへの融資を巡って激しい競争を続けているにもかかわらず、AI取引が過去数年間市場の急騰をあおったことを受けて、レバレッジの高い投資会社へのエクスポージャーを再検討していることを示唆している。
「あなたはいつも、『何が起こったのか？ そこから学ぶべきなのか？ 変えるべきなのか？』を見て言うんだ」とモイニハン氏は語った。 「そのため、特に株価が大幅に上昇した場合には、調整のために引受基準をほんの少しだけ厳格化する傾向にある。」
それでもモイニハン氏は、シチュエーションアウェアネスが銀行返済のための資金を提供したシタデル取引がなくても、バンク・オブ・アメリカは「大丈夫」だっただろうと述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/05/bofa-brian-moynihan-situational-awareness-meltdown-was-a-warning-shot.html",
    publishedAt: "2026-08-05T14:25:31+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 2,
  },
  {
    id: "abdul-el-sayed-wins-michigan-democratic-25a5f186",
    title: "Abdul El-Sayed wins Michigan Democratic Senate primary as voters pivot to the left",
    titleJa: "有権者が左傾化する中、アブドゥル・エルサイード氏がミシガン州民主党上院予備選で勝利",
    summaryJa: "ミシガン州上院選に立候補している進歩的で反体制派の民主党アブドゥル・エルサイード氏は、2026年中間選挙で最も注目され影響力のある予備選挙の一つでヘイリー・スティーブンス下院議員を破った。AP通信が水曜朝、開票率99%でレースを招集すると、エルサイード氏がスティーブンス氏を1ポイント差で破った。エルサイード氏の得票率は48.5％、スティーブンス氏の47.5％だった。予備選の１カ月前に選挙運動を停止していたマロリー・マクモロー氏は得票率４％だった。",
    bodyOriginal: `Abdul El-Sayed, the progressive, anti-establishment Democrat running for Senate in Michigan, defeated Rep. Haley Stevens in one of the most closely watched and impactful primary elections of the 2026 midterms.
El-Sayed beat Stevens by 1 percentage point as The Associated Press called the race Wednesday morning with 99% of votes counted. El-Sayed had captured 48.5% of the votes to Stevens' 47.5%. Mallory McMorrow, who had suspended her campaign a month before the primary, received 4% of the votes.
The results set up El-Sayed to face former Republican Rep. Mike Rogers in the general election this November.
El-Sayed, a former public health official, and Stevens, a more moderate Democrat, were vying for the seat Democratic Sen. Gary Peters will vacate at the end of this Congress. The result could help decide control of the Senate for the next Congress and influence the direction of the Democratic Party in the coming years.
El-Sayed's win is a boon for the left flank of the Democratic Party, which has recently scored upsets in New York and Colorado. He had notched endorsements from progressive heavyweights like Sen. Bernie Sanders, I-Vt., and Rep. Alexandria Ocasio-Cortez, D-N.Y., and came into Tuesday with a polling edge, though the race was much closer than projections indicated it would be.
Stevens' campaign told voters she had the best chance to beat Rogers in November. Michigan is seen as a must-win for Democrats if they want to retake a Senate majority. It's also a crucial seat for Republicans if they are to retain control of the chamber. Her supporters included Michigan Gov. Gretchen Whitmer and former Michigan Sen. Debbie Stabenow, both Democratic heavyweights in the state.
Investment firm Piper Sandler in a note to clients called El-Sayed's victory "a major setback for Democratic hopes of winning back the Senate by choosing the more liberal candidate.
"Overall, the election environment looks very challenging for Republicans, but Democratic primary voters, especially in critical Senate races in Maine and Michigan, may have saved the Republican majority in the Senate," the firm wrote. On the heels of El-Sayed's likely victory, the firm raised the odds of Republicans keeping a Senate majority from 55% to 60%.
Michigan is a bellwether state in national elections. President Donald Trump won there by 1.4 percentage points in 2024 after losing to Joe Biden by 2.8 percentage points in 2020. In 2016, Trump won Michigan by less than a third of a percentage point. The results of Tuesday's Senate primary will provide a window into how voters are feeling nationally two years before the next presidential election.
"When she got elected to the Congress, she flipped a seat from a Republican to a Democrat. She knows how to beat Republicans" Peters said of Stevens, who came to the House in 2019, at a campaign event on Monday. "We have to win in November. We have to keep Michigan blue. Haley Stevens is the person to do that."
What started as a three-way race winnowed to two in July when McMorrow, a state senator who tried to stake out a middle ground between Stevens and El-Sayed, dropped out. McMorrow, in an attempt at fostering unity within the party, endorsed El-Sayed after he took a commanding lead in the results.
"Take it from me — this was a brutal primary. But whatever differences there were between the candidates in this race, those differences are nothing compared to the contrast in November," McMorrow said in a statement. "Donald Trump and Mike Rogers are banking on all of us being too bruised, too proud, and too hurt to come back together to beat them. Let's prove them wrong."
The contest between El-Sayed and Stevens has been tense at times, as the two candidates split over issues like AI data centers and U.S. foreign policy, especially aid to Israel.
"If you believe like me that rather than fund the genocide perpetrated by a foreign government, we better build schools right here in Grand Rapids, then we better put ourselves in democracy," El-Sayed said at a recent campaign stop.
Stevens, meanwhile, cast El-Sayed as an extremist and as the GOP's preferred candidate this November.
"You see the Republicans, they're propping up my Democratic opponent. The Republican in this race, he said … my opponent is going to make it easier for him to win. Well, I don't plan on making anything easier for these guys," Stevens said on MS NOW.
Downballot in Michigan, incumbent Democratic Rep. Shri Thanedar lost his primary to Donavan McKinney, a member of the Michigan House of Representatives. McKinney will face Republican Taras Nykoriak in the general election in the 13th congressional district in the Detroit area that is considered a safe Democratic seat.
The Michigan primary came as Republicans, including Trump, are increasingly calling their Democratic adversaries communists and raising alarms about the extreme policies of the Democratic Socialists of America.
Neither Stevens nor El-Sayed are members of DSA. El-Sayed, while running to the left of Stevens, rejects the socialist label. Still, Trump in the Oval Office on Monday characterized the race as a battle between far-left ideologies.
"Well, you have a very interesting group. Who I'm really voting for is Mike Rogers, because I think he's going to be a great senator," Trump told reporters after being asked who he is voting for in Michigan, a state where he doesn't vote. "You have a communist versus a socialist. That's the way I look at it … it looks like the communist is leading. We're talking about the Democrat primary. But for the Republican you have a very good man, and he should be able to win."
—Garrett Downs contributed to this report.`,
    bodyJa: `ミシガン州上院選に立候補している進歩的で反体制派の民主党アブドゥル・エルサイード氏は、2026年中間選挙で最も注目され影響力のある予備選挙の一つでヘイリー・スティーブンス下院議員を破った。
AP通信が水曜朝、開票率99%でレースを招集すると、エルサイード氏がスティーブンス氏を1ポイント差で破った。エルサイード氏の得票率は48.5％、スティーブンス氏の47.5％だった。予備選の１カ月前に選挙運動を停止していたマロリー・マクモロー氏は得票率４％だった。
この結果により、エルサイード氏は今年11月の総選挙で元共和党議員マイク・ロジャース氏と対戦することになった。
元公衆衛生当局者のエルサイード氏と、民主党穏健派のスティーブンス氏は、今議会の終わりに空席となる民主党上院議員ゲーリー・ピーターズの議席を争っていた。この結果は次の議会の上院の主導権を決定するのに役立ち、今後数年間の民主党の方向性に影響を与える可能性がある。
エルサイード氏の勝利は、最近ニューヨーク州とコロラド州で番狂わせを起こしている民主党左翼にとって恩恵だ。同氏はバーニー・サンダース上院議員（バーモント州）やアレクサンドリア・オカシオコルテス下院議員（民主党）といった進歩派の重鎮からの支持も得ており、投票数で有利な状態で火曜日を迎えたが、予想よりも接戦となった。
スティーブンス氏の陣営は有権者に対し、11月にロジャーズ氏を破る最大のチャンスがあると語った。民主党が上院過半数を奪還するにはミシガン州が必勝とみられている。共和党が議院の主導権を維持するには重要な議席でもある。彼女の支持者には、ミシガン州知事のグレッチェン・ホイットマー氏と元ミシガン州上院議員デビー・スタベナウ氏（どちらも州民主党の重鎮）が含まれていた。
投資会社パイパー・サンドラー氏は顧客向けメモの中で、エルサイード氏の勝利は「よりリベラルな候補者を選んで上院を取り戻したいという民主党の望みにとって大きな挫折だ」と述べた。
「全体的に選挙環境は共和党にとって非常に厳しいものに見えるが、特に重要なメイン州とミシガン州の上院選で民主党の予備選挙有権者が上院の共和党過半数を救った可能性がある」と同社は書いている。エルサイード氏の勝利が確実視されたことを受け、同社は共和党が上院過半数を維持する確率を55％から60％に引き上げた。
ミシガン州は国政選挙の先導州である。ドナルド・トランプ大統領は、2020年にジョー・バイデンに2.8パーセントポイントの差で敗れた後、2024年に同州で1.4パーセントポイントの差で勝利した。2016年、トランプは3分の1パーセントポイント未満の差でミシガン州に勝利した。火曜日の上院予備選の結果は、次期大統領選挙の２年前に有権者が全国的にどのように感じているかを知る手がかりとなるだろう。
「彼女は議会議員に選出されたとき、共和党から民主党に議席をひっくり返した。 「彼女は共和党に勝つ方法を知っている」とピーターズ氏は月曜日の選挙イベントで、2019年に下院に来たスティーブンス氏について語った。「我々は11月に勝たなければならない。私たちはミシガンブルーを維持しなければなりません。ヘイリー・スティーブンスはそれを実現できる人物だ。」
当初は三つ巴の争いであったが、スティーブンス氏とエルサイード氏の間で中間を争おうとしたマクモロー州上院議員が脱落し、７月に二つに分かれた。マクモロー氏は党内の結束を促進する試みとして、エルサイード氏が結果で圧倒的なリードをとった後、同氏を支持した。
「やめてください。これは残酷な予備選挙でした。しかし、今回の選挙戦で両候補の間にどんな違いがあったにせよ、その違いは11月の対照的なものに比べれば大したことはない」とマクモロー氏は声明で述べ、「ドナルド・トランプ氏とマイク・ロジャース氏は、私たち皆があまりにも傷つき、プライドが高く、傷つきすぎているため、彼らを倒すために再び団結することはできないと期待している」と述べた。彼らが間違っていることを証明しましょう。」
エル・サイード氏とスティーブンス氏の争いは、AIデータセンターや米国の外交政策、特にイスラエル支援などの問題をめぐって両候補が意見が分かれ、時として緊迫した状況となっている。
「もしあなたが私と同じように、外国政府による大量虐殺に資金を提供するよりも、ここグランドラピッズに学校を建てたほうが良いと信じるなら、民主主義の中に身を置いたほうが良い」とエルサイード氏は最近の選挙活動停止で述べた。
一方、スティーブンス氏は今年11月、エルサイード氏を過激派として共和党の優先候補者に指名した。
「共和党が私の民主党の敵対者を支えているのがわかります。この選挙戦の共和党員、彼はこう言った…私の対戦相手は彼が勝ちやすくするだろう。まあ、私は彼らのために何かを簡単にするつもりはありません」とスティーブンスはMS NOWで語った。
ミシガン州では反対投票が行われ、現職の民主党下院議員シュリ・サネダー氏が予備選でミシガン州下院議員ドナバン・マッキニー氏に敗れた。マッキニー氏は民主党の安全な議席とみなされているデトロイト地区の第13下院選挙区で本選挙で共和党のタラス・ニコリアク氏と対戦する。
ミシガン州の予備選は、トランプ氏を含む共和党が民主党の敵対者を共産主義者と呼び、アメリカ民主社会主義者の極端な政策に警鐘を鳴らしている中で行われた。
スティーブンス氏もエルサイード氏も DSA のメンバーではありません。エルサイードはスティーブンスの左側を走りながら、社会主義者のレッテルを拒否した。それでも、月曜日に大統領執務室でトランプ大統領は、今回の選挙戦を極左イデオロギー間の争いと特徴づけた。
トランプ大統領は、投票権のないミシガン州で誰に投票するかを問われ、記者団に対し「そうですね、非常に興味深いグループですね。私が本当に投票しているのはマイク・ロジャースです。彼は素晴らしい上院議員になると思うからです」と語った。 「共産主義者対社会主義者という構図だ。それが私の見方だ…共産主義者がリードしているように見える。我々は民主党の予備選について話している。だが共和党にとっては非常に優れた人物であり、彼は勝つことができるはずだ。」
—ギャレット・ダウンズがこのレポートに寄稿しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/04/abdul-el-sayed-haley-stevens-michigan-primary.html",
    publishedAt: "2026-08-05T14:21:50+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 7,
  },
  {
    id: "u-s-economy-keeps-up-the-momentum-but-ri-669aa9e6",
    title: "U.S. economy keeps up the momentum, but rising costs put a cap on new hiring",
    titleJa: "米国経済は勢いを維持しているが、コスト上昇により新規雇用に上限が生じている",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `The largest part of the economy grew in July at a robust pace, but scattered shortages of key supplies and dogged inflation raised the cost of business and companies responded by keeping a lid on hiring.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/u-s-economy-keeps-up-the-momentum-but-rising-costs-put-a-cap-on-new-hiring-028d481b?mod=mw_rss_topstories",
    publishedAt: "2026-08-05T14:18:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-81297767",
    readTime: 2,
  },
  {
    id: "disney-agrees-deal-to-let-tiktokers-use-b7c24cad",
    title: "Disney agrees deal to let TikTokers use its films and TV shows in videos",
    titleJa: "ディズニー、TikTokerに自社の映画やテレビ番組を動画内で使用させる契約に合意",
    summaryJa: "ディズニー、TikTokerに自社の映画やテレビ番組を動画内で使用させる契約に合意- 公開されました",
    bodyOriginal: `Disney agrees deal to let TikTokers use its films and TV shows in videos
- Published
Disney and TikTok have agreed a deal which will allow creators to use clips from Disney films, including its subsidiaries, in their videos.
It means clips from hit franchises like Star Wars, Toy Story and the Marvel Cinematic Universe will soon start popping up in videos - which will also be shared on Disney's short-form video platform, Verts.
The scheme will be launched in the US before being rolled out to other countries.
Neither company shared financial details of the agreement, although it follows the collapse of a $1bn (£745m) deal between Disney and OpenAI which would have let people use its characters in AI-generated videos.
That agreement was cancelled in March when OpenAI shut down its AI video generation tool Sora, citing a decision to focus on other parts of its business.
"Today, fans are celebrating our stories in entirely new ways," said Disney's chief marketing and brand officer Asad Ayaz, following the TikTok deal being announced.
"Disney owns some of the world's biggest franchises but ownership of attention is shifting towards creators," social media expert Matt Navarra told BBC News.
"Hollywood used to market at fans - now it needs to give fans the raw materials to market with it, and that is quite a profound shift."
TikTok said its platform saw an average of 6.5 million posts relating to film and TV per day last year.
Fans like to use clips from films and TV shows in their videos, but without express permission, they would often be taken down due to copyright claims.
This makes it harder for a wide audience to engage with fan-created content around a big release.
TikTok would also benefit from the "credibility of becoming a formal distribution partner to one of Hollywood's biggest studios," Navarra said.
He added that TikTok's recommendation algorithm gives it the power to "influence which character or scene or forgotten franchise suddenly becomes very valuable again".
Disney and TikTok said a jointly-run programme would boost some creators' videos and give them access to exclusive events.
"This is a deal that repositions and recovers Disney in the UGC [user-generated content] space following the content gap left by the sudden collapse of Sora," Gareth Sutcliffe from Enders Analysis said.
But he said it was not without risk.
"There is an ongoing safety debate around TikTok under European online rules," he said.
"At a minimum, Disney will need to employ significant guardrails to curate the creator content that is selected."
Online creators and influencers are becoming more important to brands' marketing strategies.
Last year, a report from Oxford Economics said YouTube content creators contributed £2.2bn to the UK economy in 2024 and supported 45,000 jobs.
There is also a recognition that even very small influencers, who focus on niche topics, might have lower follower counts but come with a hyper-engaged audience.
Disney launched its short form video platform Verts in the US in March, with plans to expand that further around the world.
TikTok faces Ofcom investigation over child age checks
- Published16 July
Snapchat joins other popular platforms in fight against 'AI slop'
- Published5 days ago
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.`,
    bodyJa: `ディズニー、TikTokerに自社の映画やテレビ番組を動画内で使用させる契約に合意
- 公開されました
ディズニーとTikTokは、クリエイターが子会社を含むディズニー映画のクリップを動画内で使用できるようにする契約に合意した。
これは、スター・ウォーズ、トイ・ストーリー、マーベル・シネマティック・ユニバースなどのヒットシリーズのクリップが間もなくビデオに登場し始めることを意味しており、ディズニーの短編ビデオプラットフォーム「Verts」でも共有される予定だ。
この制度は米国で開始されてから、他の国にも展開される予定です。
両社とも契約の財務詳細については明らかにしていないが、これはAIが生成したビデオで人々に同社のキャラクターを使用させるというディズニーとOpenAIの間の10億ドル（7億4,500万ポンド）の契約が破綻したことを受けてのことだ。
この契約は、OpenAIが事業の他の部分に注力する決定を理由に、AIビデオ生成ツールSoraを閉鎖した3月に破棄された。
TikTokとの提携発表を受け、ディズニーの最高マーケティング兼ブランド責任者のアサド・アヤズ氏は「今日、ファンは全く新しい方法で私たちのストーリーを祝っている」と語った。
「ディズニーは世界最大のフランチャイズのいくつかを所有しているが、注目の所有権はクリエイターに移りつつある」とソーシャルメディア専門家のマット・ナバラ氏はBBCニュースに語った。
「ハリウッドはかつてファンに向けてマーケティングを行っていたが、今ではファンにマーケティングのための原材料を提供する必要があり、これはかなり大きな変化だ。」
TikTokによると、同社のプラットフォームでは昨年、映画やテレビに関連した投稿が1日あたり平均650万件あったという。
ファンは映画やテレビ番組のクリップを自分のビデオに使用することを好みますが、明示的な許可がなければ、著作権侵害の申し立てにより削除されることがよくあります。
これにより、大規模なリリースに合わせて幅広い視聴者がファンが作成したコンテンツに参加することが難しくなります。
TikTokはまた、「ハリウッド最大のスタジオの1つの正式な配信パートナーになるという信頼性」からも恩恵を受けるだろうとナバラ氏は語った。
同氏は、TikTokの推奨アルゴリズムは「どのキャラクターやシーン、忘れられていたシリーズが突然再び非常に価値のあるものになるかに影響を与える」力を与えていると付け加えた。
ディズニーとTikTokは、共同運営するプログラムにより一部のクリエイターの動画が強化され、独占イベントにアクセスできるようになるだろうと述べた。
エンダーズ・アナリシスのギャレス・サトクリフ氏は、「これは、ソラの突然の崩壊によって生じたコンテンツのギャップを受けて、UGC（ユーザー生成コンテンツ）分野でディズニーを再配置し、回復させる契約だ」と述べた。
しかし、リスクがないわけではないと彼は語った。
「欧州のオンライン規則の下で、TikTokをめぐる安全性に関する議論が続いている」と同氏は述べた。
「少なくとも、ディズニーは選ばれたクリエイターのコンテンツを厳選するために重要なガードレールを導入する必要があるだろう。」
オンラインのクリエイターやインフルエンサーは、ブランドのマーケティング戦略にとってますます重要になってきています。
オックスフォード・エコノミクスの昨年の報告書によると、YouTubeのコンテンツクリエイターは2024年に英国経済に22億ポンド貢献し、4万5000人の雇用を支えたという。
また、ニッチなトピックに焦点を当てている非常に小規模なインフルエンサーであっても、フォロワー数は少ないかもしれないが、非常に熱心な視聴者を抱えているという認識もあります。
ディズニーは3月に米国で短編動画プラットフォーム「Verts」を立ち上げ、これをさらに世界中に拡大する計画を立てている。
TikTok、児童の年齢確認を巡りOfcomの捜査に直面
- 7 月 16 日発行
Snapchatが他の人気プラットフォームに加わり「AIのスロップ」と戦う
- 5 日前に公開
Tech Decoded ニュースレターに登録して、世界のトップのテクノロジー ストーリーやトレンドをフォローしてください。英国外ですか？ここからサインアップしてください。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c235ev9knm4o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-05T13:06:43+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/c53a/live/5121a5c0-90c6-11f1-b8f3-bf6a2c059a9b.jpg",
    readTime: 5,
  },
  {
    id: "fed-s-kashkari-says-now-is-the-time-to-s-5238ea25",
    title: "Fed's Kashkari says 'now is the time to start slowly moving' rates up",
    titleJa: "FRBのカシュカリ氏、利上げについて「今はゆっくりと動き始める時期だ」",
    summaryJa: "ミネアポリス地区連銀のニール・カシュカリ総裁は水曜日、インフレを抑制し、その後のさらなる大幅な利上げを避けるためには今すぐ利上げが必要だと考えていると述べた。同中銀当局者はＣＮＢＣのインタビューで、日程については明言しなかったものの、９月から開始できる段階的なアプローチを求めた。",
    bodyOriginal: `Minneapolis Federal Reserve President Neel Kashkari said Wednesday that he thinks higher interest rates are needed now to bring down inflation and avoid more drastic increases later.
In a CNBC interview, the central bank official called for a gradual approach that could start in September, though he did not commit to a timetable.
Kashkari was one of three dissenters at last week's Federal Open Market Committee meeting who wanted a quarter percentage point rate hike. However, the other nine voters disagreed, voting to hold the benchmark funds rate in a range between 3.5%-3.75%.
"Corporate earnings are through the roof. They're doing great. The consumer is hanging in there. The labor market is hanging in there. I look at this constellation and I say, what evidence do I have that monetary policy is particularly restrictive right now?" he told CNBC's Andrew Ross Sorkin in a live "Squawk Box" interview from the Aspen Ideas Festival in Colorado.
"So, I argued now is the time to start slowly moving up as we get more data in," he said.
The FOMC has been on hold all year as officials deliberate over the proper approach to policy with the labor market stabilizing but inflation holding well above the Fed's 2% target.
Inflation data in June showed some improvement as tensions temporarily eased in the Middle East and oil prices pulled back.
However, Kashkari said he remains uneasy about the situation and thinks the Fed needs to address what he called a series of supply shocks pressuring consumers. He added that he's not sure what the committee will do at its Sept. 15-16 meeting and said coming data points will be key. Markets pricing is titled slightly toward a rate hike next month, with a better chance coming in October.
"I'm not calling for a dramatic increase in interest rates," he said. "I'm simply saying I don't see evidence of monetary policy [being] marginally restrictive right now, and I think we have more work to do to get inflation back down. And I would rather get going now in small steps than wait till later, then we have a really entrenched inflation problem and have to raise rates aggressively."
The remarks come a day after Philadelphia Fed President Anna Paulson, who like Kashkari gets a vote this year on the FOMC, offered a differing view.
Paulson told CNBC that she thinks there is evidence that the current interest rate level is "mildly restrictive" on economic conditions and favors holding steady as officials continue to evaluate the data. In addition, Paulson said voting to hold was "not a close call" for her at the meeting.
The three "no" votes were the first during Chairman Kevin Warsh's tenure. Kashkari, though, said Warsh, who in the past has expressed a preference for lower rates, did not pressure him.
"He said to me, 'Do what you think is the right thing to do for the economy.' And I said, 'I really appreciate that.'" Kashkari said.`,
    bodyJa: `ミネアポリス地区連銀のニール・カシュカリ総裁は水曜日、インフレを抑制し、その後のさらなる大幅な利上げを避けるためには今すぐ利上げが必要だと考えていると述べた。
同中銀当局者はＣＮＢＣのインタビューで、日程については明言しなかったものの、９月から開始できる段階的なアプローチを求めた。
カシュカリ氏は先週の連邦公開市場委員会で４分の１ポイントの利上げを求めた反対派３人のうちの１人だった。しかし、残りの９人の有権者はこれに反対し、ベンチマークファンド金利を３．５─３．７５％の範囲に維持することに投票した。
「企業収益は天井知らずだ。業績は好調だ。消費者は頑張っている。労働市場も頑張っている。この星座を見て、金融政策が現在特に制限的であるという証拠は何だろうか、と私は言う。」同氏はコロラド州アスペン・アイデア・フェスティバルの生中継「スコーク・ボックス」インタビューでCNBCのアンドリュー・ロス・ソーキンに語った。
「だから、私は今こそ、より多くのデータが入ってくるにつれてゆっくりと前進を始める時期だと主張した」と同氏は語った。
労働市場は安定しつつあるものの、インフレ率はFRBの目標である2％を大きく上回っているため、当局者らが政策への適切なアプローチを審議するため、FOMCは年間を通じて保留されている。
中東情勢の緊張が一時的に緩和され、原油価格が下落したことを受けて、６月のインフレ統計はある程度の改善を示した。
しかし、カシュカリ総裁は、依然として状況に不安があり、FRBは消費者に圧力をかけている一連の供給ショックと呼ばれるものに対処する必要があると考えていると述べた。同氏は、委員会が9月15、16日の会合で何をするかは分からないと付け加え、今後のデータポイントが鍵になると述べた。市場の織り込みは来月の利上げに若干向けられており、10月には利上げの可能性が高まるとみられている。
同氏は「私は金利の劇的な引き上げを求めているわけではない」と述べた。 「私が言いたいのは、現時点で金融政策がわずかに制限的であるという証拠は見当たらないということだ。インフレ率を元に戻すためには、やるべきことがまだあると思う。そして、後になってからインフレ問題が深刻化し、積極的な利上げが必要になるよりも、今から少しずつ取り組み始めたいと思う。」
この発言は、カシュカリ氏と同じく今年のFOMCで投票権を持っているフィラデルフィア連銀のアンナ・ポールソン総裁が異なる見解を示した翌日に行われた。
ポールソン氏はCNBCに対し、当局がデータの評価を続ける中、現在の金利水準が経済状況を「やや制限的」であり、据え置きを支持しているという証拠があると考えていると述べた。さらにポールソン氏は、会合で投票保留は「危機一髪ではない」と述べた。
３回の「反対」票はケビン・ウォーシュ会長の在任中で初めてだった。しかしカシュカリ氏は、ウォーシュ氏は過去に低金利を好む姿勢を示しており、圧力はかけられなかったと述べた。
「彼は私に『経済にとって正しいと思うことをしなさい』と言った。そして私はこう言いました、『本当に感謝しています』」とカシュカリさんは語った。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/05/feds-kashkari-says-now-is-the-time-to-start-slowly-moving-rates-up.html",
    publishedAt: "2026-08-05T13:06:35+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "saudi-wealth-fund-and-jared-kushner-s-af-7b6309f7",
    title: "Saudi wealth fund and Jared Kushner's Affinity finalize $55 billion EA Sports deal",
    titleJa: "サウジのウェルスファンドとジャレッド・クシュナー氏のアフィニティが550億ドルのEAスポーツ契約を締結",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `A consortium led by the Public Investment Fund of Saudi Arabia has announced the completion of the $55 billion acquisition of video games maker Electronic Arts.
The deal was also financed by private equity firm Silver Lake and Affinity Partners, which is led by President Donald Trump's son-in-law Jared Kushner.
EA, which confirmed the deal late on Tuesday, said its stock has ceased trading and will be delisted from the Nasdaq. Its shareholders will receive $210 in cash per share.
The deal represents further Saudi expansion into the world of sports and gaming. PIF's head of international investments Turqi Alnowaiser said in a statement that "entertainment and sports are key areas of strategic focus" for the fund.
Analysts have previously highlighted the high level of debt EA is taking on as part of the deal, while questioning the future of its intellectual property.
PIF is reportedly borrowing $20 billion from the deal's advisor JPMorgan to finalize proceedings, which is thought to be the largest leveraged buyout in history.
Analysts told CNBC last year that the debt burden will see EA consolidate around its safest franchises, such as The Sims, Battlefield, and sports titles, rather than experiment with new IPs.
"The debt hanging over their head isn't likely to create a shift in strategy," Michael Futter, F-Squared founder, told CNBC.
"Instead, it will likely see leadership entrench themselves in the titles they think have the largest revenue potential, even if those also carry the largest risk."
"I don't know how EA is going to service this debt without significant layoffs, studio closures, and possibly IP sell-off," he added.
— CNBC's Lim Hui Jie also contributed to this report.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/05/saudi-wealth-fund-jared-kushner-ea-sports-deal.html",
    publishedAt: "2026-08-05T12:08:58+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "anthropic-s-mythos-created-fake-identiti-92d99ea5",
    title: "Anthropic's Mythos created fake identities to fool humans in new cyber incident",
    titleJa: "Anthropic の Mythos は新たなサイバー事件で人間を欺くために偽の ID を作成した",
    summaryJa: "Anthropic の Mythos モデルは、人間にオープンソース プロジェクトへの悪意のあるコードの更新を承認するよう圧力をかけようとして、偽のオンライン ID を作成し、フロンティア AI システムによって実行された新たなサイバー インシデントをマークしました。この事件は、英国に本拠を置く研究機関である AI セキュリティ研究所 (AISI) が安全装置を削除し、一部の安全フィルターを無効にし、モデルに意図的にインターネット アクセスを与えたサイバー評価中に発生しました。",
    bodyOriginal: `Anthropic's Mythos model created fake online identities as it looked to pressure humans into approving malicious code updates to an open source project, marking yet another cyber incident carried out by a frontier AI system.
The incident happened during a cyber evaluation where the U.K.-based AI Security Institute (AISI), a research body, had removed safeguards, disabled some safety filters, and deliberately given the models Internet access.
OpenAI's GPT-5.6-Sol was also involved in other cybersecurity incidents during the evaluation.
It comes after a series of cyber breaches carried out by models developed by Anthropic and OpenAI in recent weeks.
They've prompted a wave of fears around the sophistication of AI systems and their potential to cause harm.
During the routine cyber evaluation, the AISI identified AI agents powered by Anthropic and OpenAI models had engaged "in sustained, potentially harmful activity directed at real people and organisations."
"Almost all of this behaviour (17 actions) came from a single model, Anthropic's Mythos 5, with 2 actions involving OpenAI's GPT-5.6-Sol with cyber classifiers (mechanisms to prevent misuse) disabled," the AISI said in a blog.
It added that the attempts were unsuccessful and didn't result in any real-world harm.
The models "were tested under 'deliberately permissive conditions' that are not representative of any of our production models," Anthropic said in a post on X. There was "no evidence here of an escape from a secure environment," it added.
OpenAI told CNBC that "these incidents occurred during cyber evaluations conducted by evaluation partners in testing environments with reduced safeguards, under conditions that do not reflect ordinary use."
Rising cybersecurity incidents
The AISI tested the models under deliberately permissive conditions in order to assess their capability, including whether they could be used for cyberattacks,
An agent powered by Anthropic's Mythos "researched the project's human maintainers, created multiple fake identities, and used the fake identities to socially engineer a real maintainer into approving the code."
"When the agent's pull request was challenged in public, it edited its earlier activity to appear harmless and considered adopting a fresh identity to continue," the AISI said.
The research body also found that as part of the same effort, the agent tried to contact real people directly, sending messages and files to persuade them to run malicious code.
"Some messages carried harmful payloads, and some were attempts at social engineering; targeted at real people – something we've never previously observed."
It's the latest in a string of cyber incidents that have thrown up big questions around the safety of frontier AI systems.
Last week, Anthropic said it had uncovered three instances of models gaining unauthorized access to the production infrastructure of three different organizations.
That followed OpenAI admitting its AI models went rogue and initiated what it called an "unprecedented" cyber attack against the company Hugging Face.
In OpenAI's case, the model broke out of its testing environment by exploiting a previously unknown vulnerability to complete a task it was assigned.
Anthropic's security incidents were in part caused by operational error. In the three incidents that the AI lab detected, its models accessed the Internet while interacting with a testing environment from one of its third-party evaluation partners called Irregular.
The company said it prompted Claude that it was in a simulation with no internet access, but due to a "misunderstanding between us and our evaluation partner, this was not the case, and internet access was available."
Lawmakers in the U.S. are already responding. Following the OpenAI-Hugging Face incident, the "AI Kill Switch Act" bill was introduced into Congress, which would require AI companies to maintain the ability to shut down, throttle or suspend their models.`,
    bodyJa: `Anthropic の Mythos モデルは、人間にオープンソース プロジェクトへの悪意のあるコードの更新を承認するよう圧力をかけようとして、偽のオンライン ID を作成し、フロンティア AI システムによって実行された新たなサイバー インシデントをマークしました。
この事件は、英国に本拠を置く研究機関である AI セキュリティ研究所 (AISI) が安全装置を削除し、一部の安全フィルターを無効にし、モデルに意図的にインターネット アクセスを与えたサイバー評価中に発生しました。
OpenAI の GPT-5.6-Sol は、評価中に他のサイバーセキュリティ インシデントにも関与しました。
これは、ここ数週間で Anthropic と OpenAI が開発したモデルによって実行された一連のサイバー侵害を受けてのことです。
これらは、AI システムの高度化とその危害を引き起こす可能性に関する不安の波を引き起こしました。
AISIは定期的なサイバー評価中に、AnthropicモデルとOpenAIモデルを利用したAIエージェントが「現実の人々や組織を対象とした持続的で潜在的に有害な活動」に従事していたことを特定した。
AISIはブログで、「この行為（17件の行為）のほぼすべては、AnthropicのMythos 5という単一モデルによるものだった。そのうち2件の行為は、サイバー分類子（悪用を防ぐメカニズム）が無効になったOpenAIのGPT-5.6-Solに関係していた」と述べた。
その試みは失敗に終わり、現実世界に損害を与えることはなかったと付け加えた。
Anthropic は X への投稿で、これらのモデルは「当社の量産モデルを代表するものではない『意図的に許容された条件』の下でテストされた」と述べ、「安全な環境から脱出したという証拠はここにはなかった」と付け加えた。
OpenAIはCNBCに対し、「これらのインシデントは、通常の使用を反映しない条件下で、安全対策が削減されたテスト環境で評価パートナーによって実施されたサイバー評価中に発生した」と語った。
増加するサイバーセキュリティインシデント
AISI は、サイバー攻撃に使用できるかどうかなどの機能を評価するために、意図的に許容された条件下でモデルをテストしました。
Anthropic の Mythos を利用したエージェントは、「プロジェクトの人間のメンテナーを調査し、複数の偽の ID を作成し、その偽の ID を使用して本物のメンテナーにコードを承認させるソーシャル エンジニアリングを行いました。」
「エージェントのプルリクエストが公の場で異議を申し立てられたとき、エージェントは以前のアクティビティを無害に見えるように編集し、継続するために新しいアイデンティティを採用することを検討した」とAISIは述べた。
調査機関は、同じ取り組みの一環として、エージェントが実際の人々に直接連絡を取り、メッセージやファイルを送信して悪意のあるコードを実行するよう説得しようとしたことも発見した。
「一部のメッセージには有害なペイロードが含まれており、一部のメッセージはソーシャル エンジニアリングの試みであり、現実の人々を標的としており、これまで私たちが観察したことのないものでした。」
これは、最先端の AI システムの安全性に関して大きな疑問を投げかけている一連のサイバー事件の最新のものです。
Anthropic は先週、モデルが 3 つの異なる組織の運用インフラストラクチャに不正アクセスした 3 つの事例を発見したと発表しました。
これに続き、OpenAIは自社のAIモデルに不正があり、Hugging Face社に対して「前例のない」サイバー攻撃を開始したことを認めた。
OpenAI の場合、モデルは、割り当てられたタスクを完了するために、これまで知られていなかった脆弱性を悪用してテスト環境から脱出しました。
Anthropic のセキュリティ インシデントは、部分的には操作ミスによって引き起こされました。 AI ラボが検出した 3 件のインシデントでは、そのモデルが、サードパーティの評価パートナーの 1 つである Irregular のテスト環境と通信中に、インターネットにアクセスしていました。
同社は、クロード氏に、インターネットにアクセスできない状態でシミュレーションを行っていたと伝えたが、「当社と評価パートナーとの間の誤解により、実際にはそうではなく、インターネットにアクセスできた」と述べた。
米国の議員らはすでに反応を示している。 OpenAI-Hugging Face 事件を受けて、AI 企業にモデルのシャットダウン、スロットル、一時停止の機能を維持することを義務付ける「AI キルスイッチ法」法案が議会に提出されました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/05/anthropic-mythos-openai-security-breaches.html",
    publishedAt: "2026-08-05T10:18:07+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "prioritise-new-jobs-over-green-targets-t-4415203b",
    title: "Prioritise new jobs over green targets to win public contracts, firms told",
    titleJa: "公共契約を獲得するためには、環境に優しい目標よりも新規雇用を優先するよう企業が語った",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Prioritise new jobs over green targets to win public contracts, firms told
- Published
Andy Burnham will tell firms bidding for public contracts to prove they are creating jobs rather than meeting green and social targets in a bid to get more people into work.
The prime minister will overhaul the £90bn public procurement system so bidders have to show they are supporting young people into work and addressing local skills shortages.
It comes as the government seeks to tackle the youth unemployment crisis, with Burnham saying he wants to create "growth in every postcode".
But green groups criticised the plans, arguing supporting young people into work should not come at the expense of the environment.
Companies bidding for government contracts are judged on a range of measures, including value for money and the extent to which they bring benefits to the local community.
Under the changes, the weighting given to the benefits brought by companies will be doubled, from 10% to 20% for contracts worth £5m or more, the Cabinet Office said.
Previously, this accounted for how companies created social value through measures such as equality and diversity, net zero and the post-Covid recovery.
The new 20% measure will instead be based on job creation. Bidders will be given extra credit for creating local jobs paying above the minimum wage, plugging local skills gaps by offering training and particularly by offering 45-day work experience placements for young people.
Office for National Statistics (ONS) figures show more than a million people aged 16 to 24 are currently not in education, employment or training (Neet).
Burnham used a similar initiative to oversee a rise in the latter during his time as mayor of Greater Manchester.
First Secretary of State Louise Haigh — who is effectively Burnham's deputy prime minister — said the procurement process in its current form was a "tick-box exercise".
"Every pound of taxpayer money should be spent in a way that benefits local communities — creating good jobs and giving young people the skills they need for the future," she said.
The new model will apply to both British and international firms bidding for public contracts.
Haigh said: "These new rules will ensure the £90 billion that is spent each year through government contracts supports British jobs, skills and people in every postcode."
Cabinet Office Minister Mark Ferguson said that businesses who secure government contracts "have a responsibility to give back".
"Businesses that benefit from the billions of taxpayer pounds spent by government, will have to create more local jobs and opportunities for young people in their area," he said.
But Greenpeace UK's head of politics Ami McCarthy said protecting the environment and helping young people into work are "mutually beneficial and one shouldn't come at a cost to the other".
"Companies should be held to account with environmental targets to help achieve a better future without leaving young workers behind," she added.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/ckgdmv7elg8o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-05T10:10:02+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/a83a/live/7e71ea20-90ae-11f1-b35a-3be58eca94a8.jpg",
    readTime: 2,
  },
  {
    id: "vegetables-to-get-smaller-and-more-expen-d259c709",
    title: "Vegetables to get smaller and more expensive due to hot weather, farmers warn",
    titleJa: "暑い気候のせいで野菜が小さくなり、価格が高くなる、と農家が警告",
    summaryJa: "暑い気候のせいで野菜が小さくなり、価格が高くなる、と農家が警告- 公開されました",
    bodyOriginal: `Vegetables to get smaller and more expensive due to hot weather, farmers warn
- Published
This year's harvest could be the worst on record as farmers warn the exceptionally dry spring and summer could lead to "shrinkflation" in UK supermarkets.
England and Wales saw their driest July since records began 190 years ago, according to the Met Office, and a drought has been declared across large parts of the country.
The Energy and Climate Intelligence Unit (ECIU) thinktank said the UK's cereals and oilseed harvest could be 2.5 million tonnes less than earlier forecasts.
Tim O'Malley, the chairman of Nationwide produce, said it was "as bad as its ever been" and that shoppers will likely see higher prices or smaller vegetables in supermarkets.
The harvest of barley, oats and rapeseed, which are used in beer, breakfast cereals and vegetable oil, is estimated to drop to just 19.5 million tonnes, the worst since records began in 1984.
That is compared with a previous low of 19.8 million tonnes in 2020, and would cost farmers £390m in lost revenue, the ECIU estimated.
The crops are also used for feeding livestock, making them crucial across most of the food chain.
O'Malley said consumers could feel the impact in the vegetable aisle too, where grocers are likely to swap in smaller produce at the same price, which is known as shrinkflation.
"I think we're going to see shrinkflation," he told Radio 5 Live's Wake Up to Money.
How cow showers and fans help farmers keep cattle cool
- Published7 days ago
"The problem we're going to have this year is a massive reduction in yield and major quality issues," O'Malley said.
He said that will mean smaller sizes for fresh produce.
"We've got crop with stress or we've got quality issues. So you will see a smaller crop," O'Malley said.
He said supermarkets will "do everything" to keep prices where they are, but added: "eventually they will probably have to come to the party and increase the price, particularly if they start importing."
Grocers are already bringing in more products from abroad because of the poor conditions at home.
"We're importing broccoli and iceberg [lettuce] from Spain at this time of year, which in August [is] unheard of. I think we're going to see more of that, unfortunately," O'Malley said.
He added: "Loud and clear, it's grim out there. I think it's as bad as it's ever been … Every record is being broken.
"The difference in this year and last year, last year we had four heat waves. But in between them we had a bit of rain."
Could heatwaves make your food shop more expensive?
- Published1 day ago
Farmers and millers adapting to early harvest
- Published6 days ago
Farmers source additional water for their crops and livestock over summer from a combination of stored winter rainfall on site, and by extracting it from natural sources - a process called abstraction.
This can be from groundwater or from surface water, like rivers and streams.
This summer has seen significant low rainfall affecting the amount of water available to draw from.
Half of England and all of Wales have been declared to be in drought conditions by the Environment Agency.
Wales has received just 8% of its average rainfall so far this month. England has received 7% of its average, with that figure as low as 1% across southern England.
The high temperatures and repeated heatwaves have also increased evaporation rates which have particularly hit rivers.
Climate change is expected to bring more severe, frequent and longer-lasting heatwaves in UK summers in the coming years - which could bring more water shortages for farmers.
Tom Lancaster, land, food and farming analyst at the ECIU said: "At the start of spring farmers were hopeful of a better year, but the dry April and July and record-breaking heat have left farmers facing down the barrel of a third awful harvest in a row.
"Farming is now the sector most exposed to climate change and the risks and damage that it brings."
Martin Lines, head of the Nature Friendly Farming Network and a farmer from Cambridgeshire, said this year's harvest "has been a real kick in the teeth".
"After two terrible harvests in a row, the crops this year were looking good and full of potential coming out of spring, only for months of drought and heatwaves to destroy any prospect of a decent harvest," he said.
"I've never known it this dry and hot on our farm.
"Even farmers I know who were sceptical of climate change are now saying they're really worried about the future of their businesses and production, it's just been completely brutal for our industry."
Get in touch
Has your farm or business been affected by the extreme weather?
Related topics
- Published6 days ago
- Published1 day ago`,
    bodyJa: `暑い気候のせいで野菜が小さくなり、価格が高くなる、と農家が警告
- 公開されました
農家らは異常に乾燥した春と夏の影響で英国のスーパーマーケットで「シュリンクフレーション」が起きる可能性があると警告しており、今年の収穫量は過去最悪となる可能性がある。
気象庁によると、イングランドとウェールズは190年前に記録が始まって以来最も乾燥した7月を記録し、国の大部分で干ばつが宣言された。
シンクタンクのエネルギー・気候情報局（ECIU）は、英国の穀物と油糧種子の収穫量が以前の予測より250万トン減少する可能性があると述べた。
ネーションワイド・プロデュース社のティム・オマリー会長は、状況は「かつてないほどひどい」とし、買い物客はスーパーマーケットでより高い価格や小さな野菜を目にする可能性が高いと述べた。
ビール、朝食用シリアル、植物油に使用される大麦、オート麦、菜種の収穫量はわずか1,950万トンに減少すると推定されており、1984年の記録開始以来最悪となる。
これは、過去最低だった2020年の1,980万トンと比較すると、農家は3億9,000万ポンドの収入損失を被ることになるとECIUは試算している。
作物は家畜の餌としても使用され、食物連鎖のほとんどにおいて重要なものとなっています。
オマリー氏は、消費者は野菜売り場でも影響を感じる可能性があり、食料品店はシュリンクフレーションとして知られる、より小さな農産物を同じ価格で交換する可能性が高いと述べた。
同氏はラジオ５ライブのウェイク・アップ・トゥ・マネーで、「シュリンクフレーションが起こると思う」と語った。
カウシャワーとファンが農家の牛を涼しく保つのにどのように役立つか
- 7 日前に公開
「今年我々が直面するであろう問題は、収量の大幅な減少と重大な品質問題だ」とオマリー氏は語った。
それは生鮮食品のサイズが小さくなることを意味すると彼は語った。
「作物にストレスがかかっているか、品質に問題がある。そのため、作物は少なくなるだろう」とオマリー氏は語った。
同氏は、スーパーマーケットは価格を現状維持するために「あらゆる努力をする」と述べたが、「最終的には、特に輸入を開始した場合、おそらくパーティーに参加して価格を引き上げなければならないだろう」と付け加えた。
国内の状況が悪いため、食料品店はすでに海外からさらに多くの商品を持ち込んでいる。
「我々はこの時期にスペインからブロッコリーとアイスバーグ（レタス）を輸入しているが、8月にそんなことは前代未聞だ。残念ながら、今後もそのようなことは増えるだろう」とオマリー氏は語った。
さらに、「大声ではっきりと、外は厳しい状況だ。これまでで最もひどい状況だと思う…あらゆる記録が破られつつある」と付け加えた。
「今年と昨年の違いは、昨年は4回の熱波があったことです。でもその間に少し雨が降りました。」
熱波により食料品店の価格が上がる可能性はありますか?
- 1 日前に公開
早期収穫に適応する農家と製粉業者
- 6 日前に公開
農家は、夏の間、敷地内に蓄えられた冬の降雨を組み合わせて、自然源から水を抽出することによって、作物や家畜に必要な追加の水を調達します。これは「抽出」と呼ばれるプロセスです。
これは、地下水からのものである場合もあれば、川や小川などの地表水からのものである場合もあります。
今年の夏は降水量が大幅に減少し、利用可能な水の量に影響を与えました。
環境庁はイングランドの半分とウェールズの全土が干ばつ状態にあると宣言した。
ウェールズでは今月これまでの平均降水量のわずか8％にとどまっている。イングランドは平均の7％を受け取っているが、イングランド南部ではその数字が1％にとどまっている。
高温と度重なる熱波により蒸発速度も増加し、特に河川に大きな影響を与えています。
気候変動により、英国の夏は今後数年間でより深刻で頻繁、そして長期にわたる熱波が発生すると予想されており、農家にとってはさらに水不足が生じる可能性がある。
ECIUの土地・食料・農業アナリストのトム・ランカスター氏は、「春の初めには農家は今年がより良い年になることを期待していたが、4月と7月の乾燥と記録的な暑さにより、農家は3年連続のひどい収穫に直面している」と語った。
「農業は現在、気候変動とそれがもたらすリスクと被害に最もさらされている部門となっている。」
自然に優しい農業ネットワークの代表でケンブリッジシャーの農家マーティン・ラインズ氏は、今年の収穫は「本当に衝撃的だった」と語った。
同氏は、「２年連続でひどい収穫があった後、今年の作物は順調に見え、春からの可能性に満ちていたが、数カ月間の干ばつと熱波でまともな収穫の見通しが台無しになっただけだ」と述べた。
「私たちの農場がこれほど乾燥していて暑いとは今まで知りませんでした。
「気候変動に懐疑的だった私の知り合いの農家でさえ、今では自分たちのビジネスと生産の将来を本当に心配していると言っています。気候変動は私たちの業界にとってまったく残酷なことなのです。」
連絡する
あなたの農場やビジネスは異常気象の影響を受けていますか?
関連トピック
- 6 日前に公開
- 1 日前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c4gwv9590xeo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-05T08:53:01+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/1b52/live/461213f0-90bb-11f1-b8ee-9b3c26ad07bb.jpg",
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
