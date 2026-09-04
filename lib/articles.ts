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
    id: "will-a-data-center-hurt-your-home-s-valu-b548b3f3",
    title: "Will a data center hurt your home’s value? Research says no. Sellers disagree.",
    titleJa: "データセンターはあなたの家の価値を損ないますか?研究ではノーだと言われています。売り手はこれに同意しません。",
    summaryJa: "ここ数カ月、米国人はデータセンターとそれが住宅価値に与える影響についての懸念を声高に表明するようになった。",
    bodyOriginal: `In recent months, Americans have gotten more vocal about their concerns over data centers and the effects they could have on home values.`,
    bodyJa: `ここ数カ月、米国人はデータセンターとそれが住宅価値に与える影響についての懸念を声高に表明するようになった。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/will-a-data-center-hurt-your-homes-value-research-says-no-sellers-disagree-7017ace4?mod=mw_rss_topstories",
    publishedAt: "2026-09-04T11:00:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-54831986",
    readTime: 2,
  },
  {
    id: "us-diesel-prices-hit-an-all-time-high-bcdfd5c5",
    title: "US diesel prices hit an all-time-high",
    titleJa: "米国のディーゼル価格が史上最高値に",
    summaryJa: "米国のディーゼル価格が史上最高値に- 公開されました",
    bodyOriginal: `US diesel prices hit an all-time-high
- Published
Drivers in the US are paying more than ever for diesel at the pump as the US-Israel war with Iran continues to hit Americans' wallets.
In the US, diesel is mostly used by commercial vehicles, such as trucks, trains, boats, buses, farming vehicles and construction vehicles.
The average price for one gallon of diesel in the US has hit $5.85, compared to an average of $3.71 a year ago and above the previous high following Russia's full-scale invasion of Ukraine, according to the American Automobile Association (AAA).
Fuel prices have soared since the Iran conflict began at the end of February, reflecting the surge in wholesale oil prices.
In response to rising fuel costs, US President Donald Trump recently pledged to "substantially lower Gas Prices for all Americans" through an oil deal with Venezuela.
In January, the former leader of Venezuela, Nicolás Maduro, was seized by US special forces following a raid authorised by President Trump.
The latest agreement, announced on Saturday, calls for the development of 17 strategic oil fields with a proven potential of 65 billion barrels, as well as "an investment of more than $100bn (£73.9bn) and more than $209bn in taxes" for Venezuela, according to Interim Venuzuela President Delcy Rodríguez.
The US government will retain 55% control of a joint venture with an "experienced private operator in Venezuela", a US official told the BBC's US partner CBS News.
But some analysts have reacted with scepticism, including questioning whether the deal would address long-running obstacles that have deterred investment in Venezuela's oil industry.
Oil is a key ingredient in car fuel and supplies have been limited by Iran responding to the war by effectively closing the Strait of Hormuz, a narrow waterway south of the country through which a fifth of the world's oil is transported.
Rocketing pump prices have angered US voters ahead of the crucial midterm elections in November.
According to recent Reuters/Ipsos polling, Trump's approval rating has fallen to 33%, with just 31% of Americans approving of the conflict.
However, not all Americans face the same level of price rises. According to the AAA's data, those in the Western states pay much more than those elsewhere, due to tax differences and distance from US oil producers.
For example, in Washington, average diesel prices are $6.81 a gallon, compared to $5.03 a gallon a year ago.
As well as high diesel prices, Americans also face historically high petrol costs, with the average price per gallon reaching $4.15 compared to $3.20 a year ago.
Related topics
- Published5 hours ago`,
    bodyJa: `米国のディーゼル価格が史上最高値に
- 公開されました
米国・イスラエルとイランの戦争が米国人の財布に打撃を与え続けているため、米国のドライバーはポンプのディーゼルにこれまで以上に高いお金を払っている。
米国では、ディーゼルは主にトラック、電車、ボート、バス、農業車両、建設車両などの商用車両で使用されています。
米国自動車協会（AAA）によると、米国における1ガロンのディーゼルの平均価格は5.85ドルに達し、1年前の平均は3.71ドルで、ロシアの本格的なウクライナ侵攻を受けて過去最高値を上回った。
2月末にイラン紛争が始まって以来、原油卸売価格の高騰を反映して燃料価格が高騰している。
燃料費の高騰に対応して、ドナルド・トランプ米大統領は最近、ベネズエラとの石油協定を通じて「全国民のガソリン価格を大幅に引き下げる」と約束した。
1月、ベネズエラの元指導者ニコラス・マドゥロ氏が、トランプ大統領の許可を受けた襲撃を受けて米軍特殊部隊に拘束された。
土曜日に発表された最新の合意では、ベネズエラ暫定大統領デルシー・ロドリゲスによると、ベネズエラに対して「1,000億ドル（739億ポンド）以上の投資と2,090億ドル以上の税金」だけでなく、650億バレルの潜在力が証明されている17の戦略的油田の開発が求められている。
米政府は「ベネズエラの経験豊富な民間事業者」との合弁事業の55％の支配権を維持すると、米当局者がBBCの米国パートナーであるCBSニュースに語った。
しかし一部のアナリストは、今回の合意がベネズエラ石油産業への投資を妨げてきた長年の障害に対処するものかどうか疑問視するなど、懐疑的な反応を示している。
石油は自動車燃料の重要な成分であり、イランが戦争に対抗して世界の石油の5分の1が輸送される国の南にある狭い水路であるホルムズ海峡を事実上封鎖したことにより、供給が制限されている。
11月の重要な中間選挙を前に、ポンプ価格の高騰が米国の有権者を怒らせている。
最近のロイター／イプソスの世論調査によると、トランプ大統領の支持率は３３％に低下し、紛争を支持している米国民はわずか３１％だった。
しかし、すべてのアメリカ人が同じレベルの物価上昇に直面しているわけではありません。 AAAのデータによると、税金の違いや米国産油国からの距離のせいで、西部の州に住む人々は他の州に比べてはるかに多くの税金を支払っている。
たとえば、ワシントンでは、ディーゼルの平均価格は 1 ガロンあたり 6.81 ドルですが、1 年前は 1 ガロンあたり 5.03 ドルでした。
ディーゼル価格の高さに加えて、米国人は歴史的に高いガソリン代にも直面しており、1ガロン当たりの平均価格は1年前の3.20ドルから4.15ドルに達している。
関連トピック
- 5 時間前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c7903r0grx0o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-04T10:52:56+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/f9ea/live/aaff4f90-a843-11f1-b3a7-d5de760fef6e.jpg",
    readTime: 3,
  },
  {
    id: "stock-up-on-food-to-prepare-for-extreme-10a0b280",
    title: "Stock up on food to prepare for extreme weather, minister warns",
    titleJa: "異常気象に備えて食料を備蓄しておこうと大臣が警告",
    summaryJa: "異常気象に備えて食料を備蓄しておこうと大臣が警告- 公開されました",
    bodyOriginal: `Stock up on food to prepare for extreme weather, minister warns
- Published
Households should stock up on food to prepare for extreme weather as the strongest El Niño event in a generation develops over the Pacific Ocean, a government minister has warned.
Environment Secretary Dame Angela Eagle told the Guardian the powerful natural climate phenomenon will lead to "more extreme storms in this country".
Her comments came as the National Audit Office (NAO) warned Britain's food supply chain is at risk given the growing threat of cyber-attacks and the climate crisis.
The NAO said the government was too reliant on the private sector to deal with food supply disruption. The government is due to unveil a strategy about preparing for national emergencies later this year.
Dame Angela said, external: "We're about to experience probably the largest El Niño that has ever been seen, and that will lead to drier summers, wetter winters, with more extreme storms in this country.
"It will do a lot more damage in Asia with flooding, and therefore I think that we need to take it seriously.
"If you've got a store of a bit of food that can keep you going for a while before the emergency services can get to you, you're going to be a lot better off than if you haven't.
"So some of it is that kind of preparation for just being a bit more resilient."
Her comments came as an NAO report warned Britain's food supply chain is vulnerable to plant or human disease outbreaks, cyber-attacks and extreme weather.
It also cited climate change as a longer-term chronic risk which could leave Britain's food supply at risk.
The disruptions could push up prices and leave vulnerable people struggling to buy food, it said.
The NAO said the Department for Food, the Environment and Rural Affairs (Defra) was too reliant on private companies to handle disruptions to food supply.
It added the department had not done enough in recent years to improve supply chain resilience.
UK households are less prepared for emergencies than those in several other countries such as Finland, Sweden and European Union nations, the NAO added.
It said ministers should encourage households to prepare for supply chain disruptions and learn from the approaches taken by other countries.
El Niño set to be 'strongest in living memory', says Met Office
- Published21 August
Defra said the report showed food supply risks were becoming more complex and the government was working with farmers and industry to strengthen the UK's resilience.
"While our food businesses and supermarkets have continued to feed the nation through significant disruption, we will carefully consider the report's findings and recommendations as part of our ongoing work to build a more resilient, productive and sustainable food system," a spokesperson said.
In July, the government announced plans to set out the "small but important steps" households can take to prepare for food and water shortages in the event of extreme weather or cyber-attacks.
These will form a strategy to be unveiled by the end of 2026 aimed at bringing the UK closer into line with European countries in terms of emergency preparedness.
Phil Pluck, chief executive of the Cold Chain Federation, the body which represents firms transporting temperature-controlled foods, said Britain was "pretty close to crisis".
He told the BBC's Wake Up to Money programme that the country was being targeted by Russian cyber-hackers who "know that there are pinch points in the food supply system".
He added that El Niño, as well as global shipping disruption and the threat of pandemics, mean you cannot "just rely on the private sector coming through every single time".
Asked whether people should be stocking up in case of disruptions, Pluck added: "Yes, we should.
"There should be some sensible stocking in each household. And the government in the autumn will be telling all of us to do that."`,
    bodyJa: `異常気象に備えて食料を備蓄しておこうと大臣が警告
- 公開されました
太平洋上で一世代で最も強いエルニーニョ現象が発生しているため、各家庭は異常気象に備えて食料を備蓄する必要があると政府大臣が警告した。
環境大臣デイム・アンジェラ・イーグルは、強力な自然気象現象が「この国でさらに極端な嵐」を引き起こすだろうとガーディアン紙に語った。
彼女のコメントは、国家会計検査院（NAO）が、サイバー攻撃と気候危機の脅威の増大を考慮すると、英国の食品サプライチェーンが危険にさらされていると警告した中で出された。
NAOは、政府は食糧供給の混乱に対処するには民間部門に依存しすぎていると述べた。政府は今年後半に国家非常事態への備えに関する戦略を発表する予定だ。
アンジェラ夫人は外部で、「私たちはおそらくこれまでに観測された中で最大規模のエルニーニョを経験しようとしている。それにより、この国では夏はより乾燥し、冬はより湿り、さらに極端な嵐が起こるだろう。」
「アジアでは洪水によりさらに多くの被害が発生するため、真剣に受け止める必要があると思います。
「救急隊が駆けつける前にしばらく生きていけるちょっとした食料の備蓄があれば、そうでない場合よりもはるかに生活は楽になるでしょう。
「つまり、その一部は、もう少し回復力を高めるための、そのような準備なのです。」
彼女のコメントは、英国の食料サプライチェーンが植物や人間の病気の発生、サイバー攻撃、異常気象に対して脆弱であるとNAOの報告書が警告した中で出された。
また、英国の食糧供給を危険にさらす可能性がある長期的な慢性リスクとして気候変動を挙げた。
混乱により価格が上昇し、弱い立場にある人々が食料を買うのに苦労する可能性があると同紙は述べた。
NAOは、食糧・環境・農村省（Defra）は食糧供給の混乱に対処するには民間企業に依存しすぎていると述べた。
同省は近年、サプライチェーンの回復力を向上させるための取り組みが十分ではなかったと付け加えた。
NAOは、英国の家庭はフィンランド、スウェーデン、欧州連合諸国など他のいくつかの国に比べて緊急事態への備えが不十分だと付け加えた。
同報告書は、各大臣がサプライチェーンの混乱に備え、他国のアプローチから学ぶよう各家庭に奨励すべきだと述べた。
エルニーニョ現象は「記憶の中で最も強い」可能性があると気象庁が発表
- 8 月 21 日発行
デフラ氏は、報告書は食料供給リスクがより複雑化しており、英国の回復力を強化するために政府が農家や産業界と協力していることを示していると述べた。
「わが国の食品企業とスーパーマーケットは、重大な混乱を乗り越えながらも国民に食料を供給し続けているが、より強靱で生産的で持続可能な食料システムを構築するための継続的な取り組みの一環として、報告書の調査結果と勧告を慎重に検討する」と広報担当者は述べた。
政府は7月、異常気象やサイバー攻撃が発生した場合に食料と水の不足に備えるために各家庭が講じることができる「小さいながらも重要な措置」を定める計画を発表した。
これらは、英国を緊急事態への備えの点で欧州諸国と歩調を合わせることが目的で、2026年末までに発表される戦略となる。
温度管理された食品を輸送する企業を代表する団体、コールドチェーン連盟の最高責任者フィル・プラック氏は、英国は「かなり危機に近づいている」と述べた。
同氏はBBCの「ウェイク・アップ・トゥ・マネー」番組で、同国が「食糧供給システムにピンチポイントがあることを知っている」ロシアのサイバーハッカーの標的にされていると語った。
同氏は、エルニーニョや世界的な輸送の混乱、パンデミックの脅威により、「毎回民間セクターの対応に頼ることはできない」と付け加えた。
混乱に備えて人々は備蓄をすべきかとの質問に、プルック氏は「はい、そうすべきです。
「各家庭に賢明な備蓄があるべきです。そして秋には政府が私たち全員にそうするよう指示するでしょう。」`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cp931m8n3p5o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-04T10:40:23+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/aa83/live/066833c0-a848-11f1-b3a7-d5de760fef6e.jpg",
    readTime: 4,
  },
  {
    id: "i-didn-t-know-what-i-didn-t-know-i-thou-6f6dcab9",
    title: "‘I didn’t know what I didn’t know’: I thought I’d have to depend on Social Security. Then I taught myself how to invest.",
    titleJa: "「何が分からないのか分からなかった」: 社会保障に頼らなければならないと思っていました。それから私は独学で投資を学びました。",
    summaryJa: "「一部の人々がどのようにして巨額の資産を持って退職することができたのか、私はいつも困惑していました。」",
    bodyOriginal: `“It always baffled me how some people managed to retire with significant wealth.”`,
    bodyJa: `「一部の人々がどのようにして巨額の資産を持って退職することができたのか、私はいつも困惑していました。」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/i-didnt-know-what-i-didnt-know-i-thought-id-have-to-depend-on-social-security-then-i-taught-myself-how-to-invest-0129870b?mod=mw_rss_topstories",
    publishedAt: "2026-09-04T09:45:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-10854269",
    readTime: 2,
  },
  {
    id: "global-bond-sell-off-likely-not-over-yet-843f5cf0",
    title: "Global bond sell-off likely not over yet, Mohamed El-Erian tells CNBC",
    titleJa: "世界的な債券下落はまだ終わっていない可能性が高いとモハメド・エラリアン氏がCNBCに語る",
    summaryJa: "著名な経済学者モハメド・エラリアン氏は金曜日、CNBCに対し、投資家は世界的な国債の下落が続くことを予想すべきだと語った。同氏はイタリアのチェルノッビオで開催されたアンブロセッティ・フォーラムでＣＮＢＣのキャロリン・ロスに対し、「米国に当面の財政健全化に対する意欲は見られない。そのため、今後も利回り上昇圧力は続くのではないか」と語った。",
    bodyOriginal: `Investors should expect the sell-off of global government bonds to continue, renowned economist Mohamed El-Erian told CNBC on Friday.
"I don't see any appetite in the U.S. for immediate fiscal consolidation. So I suspect we will continue to see upward pressures on yields," he told CNBC's Carolin Roth at the Ambrosetti Forum in Cernobbio, Italy.
Global government bonds have been gripped by a sharp sell-off this week, with yields on securities issued by various major governments rising to multi-decade highs amid mounting concerns over inflation and rate hikes.
Bond yields and prices move inversely to one another.
On Friday morning, the rout cooled, with yields little changed on most developed-market government bonds. U.S. Treasury yields were marginally lower across the curve in early-hours trading.
El-Erian, the Rene M. Kern Practice Professor at the University of Pennsylvania's Wharton School and chief economic adviser at Allianz, told CNBC he did not see anything wrong with how the markets were functioning – but added that "reliable buyers and holders" of U.S. Treasurys were coming under pressure.
"China, for geopolitical purposes, is no longer as willing," he said. "Japan and the Gulf countries have domestic issues."
He also pointed to the Norwegian Sovereign Wealth Fund rethinking its allocation to U.S. government bonds.
"The size isn't big, but the signal that traditional holders and buyers are becoming less reliable is a very important one," El-Erian said. "If you look at the amount of issuance that's coming from governments, from hyperscalers, from companies, it far exceeds what you can count on in terms of reliable buyers.
"And that's why there's been pressure on interest rates. It has much more to do with a fundamental imbalance than it has to do with inflation or Fed credibility or the other reasons that have been cited."
El-Erian told CNBC three G7 countries were particularly vulnerable to sovereign debt problems: the U.K., Japan and France.
"Those by numbers, by everything else, and the U.K. in particular is what I call a high-beta country," he said. "That every time rates move by a bit in the U.S., they move by a lot more in the U.K."
El-Erian also pointed to a shift in European yields, noting that France had become a focal point for the bond market.
"In the old days you would worry about Italy. Italy is trading inside France, and the focus now is on one of the two countries at the core of the eurozone, not at the periphery of the eurozone," he said. "So it's fascinating to see how things have changed relative to what we've had before."
U.S. Treasury department's 'step too far'
El-Erian also told CNBC on Friday that the Trump administration had gone "too far" with its attempts to intervene in market outcomes and monetary policy.
Last month, the U.S. Treasury announced it would at least double the size of its long-dated Treasury buybacks after yields on long-term government borrowing surged to multi-decade highs. On Thursday, U.S. Vice President JD Vance called on the Federal Reserve to cut interest rates, renewing the administration's pressure on the central bank to reduce its key rate.
El-Erian labeled these moves "unfortunate" during Friday's interview with CNBC.
"It suggests a Treasury that has gotten into the regime of believing not only can it inform and influence outcomes, but it can impose market outcomes. I think that's a step too far," he said. "And the question now is, how do you step back from this? I think the results are clear. It's a massive market. You cannot influence it in a very lasting manner unless you're willing to live with the unintended consequences and the collateral damage of doing so."
CNBC reached out to the U.S. Treasury Department for comment.
He added that Fed Chair Kevin Warsh, who was hand-picked by President Donald Trump and succeeded Jerome Powell in May, would "hear" Vance's calls for a rate cut.
"It just gives you a sense that affordability has become so important politically that there will be pressure, and I think the main question here is not what 'does it mean for the Fed' [but] 'what does it mean for the Treasury' that he wants lower rates because of the mortgage market," El-Erian said.
Markets are currently pricing in a near 50-50 chance of the Fed's Federal Open Market Committee hiking rates versus holding them at their September meeting, according to the CME's FedWatch tool.
Warsh gets 'three things right' at Jackson Hole
El-Erian told CNBC that in his view, Warsh had already done "three things right" during his address at the Jackson Hole symposium last week.
"First, he addressed the concerns about his reaction function," he said. "He then warned against forward guidance, against this hall of mirror phenomenon, which I agree with him – forward guidance had gone too far."
"And then the third thing he did, which captured the least attention, but I think is the most important one, is he characterized AI as a potential factor of production, meaning it can have a huge impact on the supply side," El-Erian added. "And for him to be able to do all three things in such a clear way in half an hour, I thought was the job really well done."`,
    bodyJa: `著名な経済学者モハメド・エラリアン氏は金曜日、CNBCに対し、投資家は世界的な国債の下落が続くことを予想すべきだと語った。
同氏はイタリアのチェルノッビオで開催されたアンブロセッティ・フォーラムでＣＮＢＣのキャロリン・ロスに対し、「米国に当面の財政健全化に対する意欲は見られない。そのため、今後も利回り上昇圧力は続くのではないか」と語った。
今週は世界の国債が急激な下落に見舞われており、インフレや利上げに対する懸念が高まるなか、さまざまな主要政府が発行する証券の利回りは数十年ぶりの高水準に上昇している。
債券の利回りと価格は互いに反比例します。
金曜朝には暴落は落ち着き、ほとんどの先進国国債の利回りはほとんど変わらなかった。米国債利回りは序盤の取引でカーブ全体で小幅低下した。
ペンシルベニア大学ウォートン校のレネ・M・カーン実践教授でアリアンツの首席経済顧問であるエラリアン氏はCNBCに対し、市場の機能に何の問題も見当たらないと語ったが、米国債の「信頼できる買い手と保有者」が圧力にさらされていると付け加えた。
同氏は「中国は地政学的目的から、もはやこれほどの意欲はない」と述べた。 「日本と湾岸諸国は国内問題を抱えている。」
同氏はまた、ノルウェー政府系ファンドが米国債への配分を見直していると指摘した。
「規模は大きくないが、従来の保有者や買い手の信頼性が低下しているというシグナルは非常に重要だ」とエラリアン氏は語った。 「政府、ハイパースケーラー、企業からの発行額を見ると、信頼できる買い手という点で当てにできる額をはるかに超えています。
「それが金利に圧力がかかっている理由だ。それはインフレやFRBの信頼性、あるいは挙げられている他の理由と関係があるというよりは、根本的な不均衡とはるかに関係がある。」
エラリアン氏はCNBCに対し、G7諸国のうち英国、日本、フランスの3か国は特にソブリン債務問題に対して脆弱であると語った。
「数字やその他すべての点から見て、特に英国は私がハイベータ国と呼ぶ国です」と彼は語った。 「米国で金利が少し動くたびに、英国ではさらに大きく動くということだ。」
エラリアン氏はまた、フランスが債券市場の焦点となっていると指摘し、欧州利回りの変化を指摘した。
「昔はイタリアのことを心配していました。イタリアはフランス国内で取引しており、現在焦点はユーロ圏周縁部ではなく、ユーロ圏の中心にある２カ国のうちの１カ国にある」とし、「そのため、これまでと比べて状況がどのように変わったかを見るのは興味深い」と述べた。
米財務省の「行き過ぎ」
エラリアン氏は金曜日、CNBCに対し、トランプ政権が市場の結果や金融政策に介入しようとする試みは「行き過ぎた」とも語った。
長期政府借入利回りが数十年ぶりの高水準に上昇したことを受け、米財務省は先月、長期にわたる国債の買い戻し規模を少なくとも２倍に増やすと発表した。木曜日、JD・バンス米副大統領は連邦準備理事会に利下げを要請し、中央銀行に対して政策金利の引き下げを求める政権の圧力を改めて強めた。
エラリアン氏は金曜日のCNBCとのインタビューで、これらの動きを「不幸」と評価した。
「これは、財務省が情報を提供し、結果に影響を与えることができるだけでなく、市場の結果を押し付けることができると信じる体制に陥っていることを示唆している。それは行き過ぎだと思う」と彼は語った。結果は明らかだと思います。それは巨大な市場です。意図せぬ結果や巻き添え被害を覚悟しない限り、永続的な影響を与えることはできません。」
CNBCは米財務省にコメントを求めた。
同氏は、ドナルド・トランプ大統領が厳選し、5月にジェローム・パウエル氏の後任となったケビン・ウォーシュFRB議長がバンス氏の利下げ要求に「耳を傾ける」だろうと付け加えた。
「これは、手頃な価格が政治的に非常に重要になっており、圧力がかかるだろうという感覚を与えているだけだ。ここでの主な問題は、住宅ローン市場を理由に金利引き下げを望むことが『FRBにとって何を意味するのか』ではなく、『財務省にとって何を意味するのか』だと思う」とエラリアン氏は語った。
ＣＭＥのフェドウォッチツールによると、市場は現在、ＦＲＢの連邦公開市場委員会が利上げするか、９月会合で利上げを据え置くか、ほぼ五分五分の確率を織り込んでいる。
ウォーシュ、ジャクソンホールで「3つの正しいこと」を達成
エラリアン氏はCNBCに対し、ウォーシュ氏の見解では、先週のジャクソンホールのシンポジウムでの演説ですでに「3つの正しいこと」を行ったと語った。
「まず、彼は自分の反応機能に関する懸念に言及した」と彼は語った。 「その後、彼はフォワード・ガイダンス、この鏡の間の現象に対して警告した。私も彼に同意する。フォワード・ガイダンスは行き過ぎだった。」
「そして、彼のやった3番目のことは、最も注目を集めなかったが、私が最も重要なことだと思う。彼はAIを潜在的な生産要素として特徴づけたことだ。つまり、AIが供給側に多大な影響を与える可能性があることを意味している」とエラリアン氏は付け加えた。 「そして、彼が 30 分で 3 つのことすべてをこれほど明確に行うことができたということは、本当によくやった仕事だと思いました。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/04/el-erian-government-bond-selloff.html",
    publishedAt: "2026-09-04T07:41:48+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 6,
  },
  {
    id: "world-s-biggest-sovereign-wealth-fund-pl-1e050600",
    title: "World's biggest sovereign wealth fund plans to cut U.S. Treasury holdings",
    titleJa: "世界最大の政府系ファンドが米国債保有を削減する計画",
    summaryJa: "ノルウェーの政府系ファンドは、リスクエクスポージャーの分散とリターンの向上を目指し、2兆3000億ドルの投資ポートフォリオにおける国債の配分を削減することを提案しており、主に保有する米国債に影響を与えることになる。ノルゲス銀行投資管理の責任者らは、金曜に公開された同国の財務省に宛てた書簡の中で、国債保有の政府サブインデックスを70％から50％に引き下げることを勧告したと述べた。この水準は、市場の混乱時に十分な流動性を提供しつつ、他の分野でより大きな利益を追求できる水準だとしている。",
    bodyOriginal: `Norway's sovereign wealth fund has proposed cutting the allocation of government bonds in its $2.3 trillion investment portfolio, chiefly affecting its holdings of U.S. Treasurys, as it seeks to diversify its risk exposure and boost returns.
The heads of Norges Bank Investment Management wrote in a letter to the country's finance ministry, made public Friday, that it recommended reducing the government subindex of its bond holdings from 70% to 50% — a level it said would provide sufficient liquidity during market turbulence while allowing it to seek greater returns elsewhere.
The proposed reallocation would gradually cut NBIM's Treasury holdings from 34.1% to 21.9%, reduce its euro area holdings from 16.8% to 14.1%, and increase its share of Japanese government bonds to 7.4% from 4.6%.
NBIM also wants to begin weighting its government bond holdings by market value instead of GDP because of the high debt loads of almost all developed economies,
Treasurys under pressure
The potential shift would come at a sensitive time for the Treasury market, with long-dated yields pushed to decade-highs as investors fret over the U.S. fiscal trajectory and increasingly heavy debt load.
"Reliable buyers and holders of U.S. Treasurys are under pressure," economist Mohamed El-Erian told CNBC's Carolin Roth in a Friday interview, citing Japan, China and Gulf countries.
Addressing NBIM's proposal to reduce its own share of Treasurys, El-Erian said: "The size isn't big, but the signal that traditional holders and buyers are becoming less reliable is a very important one."
NBIM plans to increase its holdings of non-government U.S. fixed income, such as corporate bonds, to 27.6% from 16.2%.
CEO Nicolai Tangen and Norway's central bank chief Ida Wolden Bache said the fund could earn higher premiums by diversifying into riskier assets, such as mortgage-backed securities, which they judge as well-positioned to weather as a long-term investor.
Tangen and Wolden Bache said mortgage-backed securities, made infamous during the 2008 Financial Crisis, tend to move in the opposite direction to equities during crises and so could provide an "additional reduction of volatility" more similar to government bonds than corporate bonds.
NBIM currently holds around $1.65 trillion in equities — with ownership of almost 1.5% of all shares in the world's listed companies — and $592 billion in fixed income.
The fund, established in 1998 to invest revenues from Norwegian oil with strict guardrails to preserve its longevity, has made record profits in recent quarters from its huge investments in U.S. and Asian tech firms and beneficiaries of the AI boom, such as semiconductor stocks.
However, Tangen has warned that those levels of returns will not be sustainable in the case of a market downturn. In the first quarter of 2025, it swung to a $40 billion loss as investors turned risk-off.
A recent stress test by NBIM found that an AI correction could wipe $740 billion, or 35%, off its value.`,
    bodyJa: `ノルウェーの政府系ファンドは、リスクエクスポージャーの分散とリターンの向上を目指し、2兆3000億ドルの投資ポートフォリオにおける国債の配分を削減することを提案しており、主に保有する米国債に影響を与えることになる。
ノルゲス銀行投資管理の責任者らは、金曜に公開された同国の財務省に宛てた書簡の中で、国債保有の政府サブインデックスを70％から50％に引き下げることを勧告したと述べた。この水準は、市場の混乱時に十分な流動性を提供しつつ、他の分野でより大きな利益を追求できる水準だとしている。
提案された再配分では、NBIMの財務省保有は34.1％から21.9％に段階的に削減され、ユーロ圏保有は16.8％から14.1％に減少し、日本国債に占める割合は4.6％から7.4％に増加する。
NBIMはまた、ほぼすべての先進国で多額の債務を抱えているため、保有する国債をGDPではなく市場価値で重み付けし始めたいと考えている。
圧迫される財務省
この潜在的な変化は、投資家が米国の財政軌道とますます重くなる債務負担を懸念する中、長期利回りが10年ぶりの高水準に押し上げられており、米国債市場にとって敏感な時期に起こるだろう。
エコノミストのモハメド・エラリアン氏は金曜のCNBC番組キャロリン・ロスのインタビューで、日本、中国、湾岸諸国を例に挙げ、「米国債の信頼できる買い手と保有者はプレッシャーにさらされている」と語った。
エラリアン氏は、NBIMによる米国債の保有割合を削減するという提案について、「規模は大きくないが、従来の保有者や買い手の信頼性が低下しているというシグナルは非常に重要だ」と述べた。
ＮＢＩＭは社債など非政府の米国債券の保有比率を１６．２％から２７．６％に増やす計画だ。
ニコライ・タンゲン最高経営責任者（CEO）とノルウェー中央銀行総裁のアイダ・ウォルデン・バチェ氏は、同ファンドが長期投資家として乗り切るのに有利な立場にあると判断した住宅ローン担保証券など、よりリスクの高い資産に分散することで、より高いプレミアムを獲得できる可能性があると述べた。
タンゲン氏とウォルデン・バッチェ氏は、２００８年の金融危機で悪名を轟かせた住宅ローン担保証券は危機時には株式とは逆の方向に動く傾向があり、そのため社債よりも国債に近い「さらなるボラティリティの低下」をもたらす可能性があると述べた。
NBIMは現在、約1兆6500億ドルの株式を保有しており、世界の上場企業の全株式のほぼ1.5％を所有しており、債券は5920億ドルとなっている。
この基金は、ノルウェー石油の寿命を維持するために厳格なガードレールを備えたノルウェー石油からの収入を投資するために1998年に設立され、米国やアジアのハイテク企業や半導体株などAIブームの受益者への巨額投資により、ここ数四半期で記録的な利益を上げている。
しかし、タンゲン氏は、市場が低迷した場合にはその水準の利益は持続可能ではないと警告している。投資家がリスクオフになったため、2025年第1四半期には400億ドルの損失にまで膨らんだ。
NBIMによる最近のストレステストでは、AIによる修正によりその価値が7,400億ドル、または35％消失する可能性があることが判明した。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/04/worlds-biggest-sovereign-wealth-fund-plans-to-cut-treasury-holdings.html",
    publishedAt: "2026-09-04T06:46:35+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "from-dog-fruit-to-darling-india-s-avocad-4a3d2a3f",
    title: "From 'dog fruit' to darling: India's avocado boom",
    titleJa: "「ドッグフルーツ」から最愛の人へ：インドのアボカドブーム",
    summaryJa: "「ドッグフルーツ」から最愛の人へ：インドのアボカドブーム- 公開されました",
    bodyOriginal: `From 'dog fruit' to darling: India's avocado boom
- Published
Fifteen years ago there was almost no market for avocados in India, remembers Sunil Bopaiah.
Ripe fruit would fall off trees and be eaten by dogs, earning avocados the unappetising name dog fruit, he says.
Bopaiah has been working in India's plantation industry for 26 years, he's currently group manager at Cottanad Plantations, which grows cocoa, rubber, coffee, spices and fruits, including avocado, in the hills of Wayanad in the southern Indian state of Kerala.
"We never planted avocado as our main crop. We introduced it as a shade tree for coffee plantations, and only later realised it could become a profitable business," he says.
He says the turning point was around 2011 when Bollywood star Shilpa Shetty said she used avocado for skincare.
"Overnight, prices doubled and then kept rising," he says.
Cottanad has responded to that demand by planting avocado trees on 40 acres. Last year they harvested between 10 and 15 tonnes of fruit. In three of four years time they hope to raise that to 40 to 50 tonnes.
There's been a lot to learn.
"We completely changed the way we grow avocados after learning from South African experts. Today we use raised beds, wider spacing and different planting methods because avocado roots are highly vulnerable to diseases," Bopaiah says.
There's plenty of scope for Indian farmers to step-up production.
"When we studied the market, we found a huge gap between demand and supply. India imports around 15,000 tonnes of avocados every year, while domestic production is only about 8,000–9,000 tonnes," says Manilal Palliyath who helps promote India's avocado industry.
He sees a big opportunity for farmers, particularly as traditional crops have suffered.
"Coffee and pepper have suffered because of changing climatic conditions, making diversification essential for farmers."
While demand is growing in India, it's not always for locally grown fruit.
"Indian-grown avocados are improving and there are some great farmers working with local varieties, but the quality and availability can vary significantly depending on the season and region," says Hussain Shahzad, the executive chef at Hunger Inc. Hospitality.
The group owns four restaurants in Mumbai, including Veronica's and The Bombay Canteen.
"We have explored different varieties of avocados available in India, but the imported ones currently offer the consistency we need in terms of flavour, texture, size, and ripening," he says
But like many in the catering industry, he would like to source ingredients locally.
"We are always interested in exploring better local produce as it evolves. Supporting Indian agriculture and working with indigenous ingredients is central to how we approach food."
Matching the quality and consistency of imported fruit is the goal of some Indian entrepreneurs.
Harshit Godha is the founder of Indo-Israel Avocado Nursery in Bhopal, in the central Indian state of Madhya Pradesh.
He founded the nursery business in 2021, after spending a month in Israel learning about the industry.
Since then, business has been brisk. Over the last five years Godha has supplied around 18,000 avocado plants to farmers across India.
All of the saplings are international varieties like Hass and Pinkerton.
"Israel grows avocados on approximately 13,000 hectares - a small country with almost no rainfall for eight months of the year. This is precisely why Israeli avocado technology is the most advanced in the world," Godha says.
Getting a commercial orchard up and running is not easy. It is a very different operation from the traditional way of cultivating avocados in India, where they were planted among other crops for shade.
For a start, you can't just grow a tree from seed. A commercial tree comprises a rootstock, chosen for its tolerance to local conditions, grafted to the upper half which determines what sort of fruit is produced.
Once that's done the trees need a lot of attention.
"When you put in a professional orchard, you have to know the techniques of pruning. A tree can grow up to 25 feet within six to seven years, and harvesting at 25 feet is next to impossible," Godha says.
"Aggressive" pruning is needed to keep the harvest at a height that's convenient for workers.
On top of that an avocado tree cannot easily pollinate itself. To get fruit two different varieties of avocado trees have to be planted right next to each other. One variety needs to be open as a female at the exact same time the other variety is releasing pollen as a male."
"If a farmer gets this planting ratio wrong, the trees will fail to produce fruit, no matter how advanced the irrigation tech is. This single botanical detail is what separates a highly profitable, high-yielding orchard from one that looks great on paper but fails in reality," says Godha.
Using popular foreign varieties is one way of modernising India's avocado industry. Another is improving trees that have in India for generations.
"The biggest issue with the avocado trees in India are that every backyard tree is genetically different," says Dr Ganeshan Karunakaran, the principal scientist at the ICAR-Indian Institute of Horticultural Research (IIHR), Bengaluru.
"That is why Indian markets are flooded with mixed fruit of varying quality. Standard varieties are essential if we want a reliable commercial market."
For 25 years he has been working on a breeding project which has released two varieties, based on local trees.
"Our objective is to provide farmers with uniform, high-yielding, good-quality planting material rather than thousands of different unnamed trees," Karunakaran says.
He is also concerned about unregulated nurseries selling unidentified, or diseased plants.
"Farmers may unknowingly buy diseased plants. The trees may look healthy initially, but after five or seven years they can suddenly die, causing huge financial losses," he says.
Despite the challenges, farmers see the potential in switching to avocado cultivation.
Shiju Sebastian was an early adopter. Eight years ago he dedicated two acres of his farm in Wayanad Kerala, to the crop.
"Farmers are willing to grow avocados, but they need proper guidance and assured markets," he says.
This year he's harvesting 3,500kg of the fruit, all of which is sold in the city of Bengalaru.
"Avocado will never fail you. It's such a loving and lovable fruit. I have fallen in love with this fruit now. I'm planning to plant another three acres — only avocado."
- Published3 July
- Published30 July
- Published28 July`,
    bodyJa: `「ドッグフルーツ」から最愛の人へ：インドのアボカドブーム
- 公開されました
15 年前、インドにはアボカドの市場がほとんどありませんでした、とスニール・ボパイア氏は思い出します。
熟した果実は木から落ちて犬に食べられるため、アボカドは「ドッグフルーツ」という不味い名前が付けられたという。
ボパイア氏はインドのプランテーション産業で 26 年間働いており、現在はインド南部ケーララ州ワヤナードの丘陵でカカオ、ゴム、コーヒー、スパイス、アボカドなどの果物を栽培するコタナード プランテーションのグループ マネージャーを務めています。
「私たちはアボカドを主要作物として植えたことはありません。コーヒー農園の日よけの木としてアボカドを導入しましたが、それが収益性の高いビジネスになり得ることに後になって初めて気づきました」と彼は言います。
彼によると、ターニングポイントは2011年頃で、ボリウッドスターのシルパ・シェティがスキンケアにアボカドを使っていると発言したときだという。
「一夜にして価格は2倍になり、その後も上昇を続けた」と彼は言う。
コッタナードはその需要に応え、40エーカーの敷地にアボカドの木を植えました。昨年、彼らは10トンから15トンの間の果物を収穫しました。 4年のうち3年以内には、その量を40トンから50トンに増やしたいと考えている。
学ぶべきことがたくさんありました。
「南アフリカの専門家から学んだ後、私たちはアボカドの栽培方法を完全に変えました。アボカドの根は病気に非常に弱いため、現在では上げ床、広い間隔、異なる植え付け方法を使用しています」とボパイア氏は言います。
インドの農家には生産を拡大する余地が十分にある。
「市場を調査したところ、需要と供給の間に大きなギャップがあることがわかりました。インドは毎年約15,000トンのアボカドを輸入していますが、国内生産はわずか約8,000～9,000トンです」と、インドのアボカド産業の促進に貢献しているマニラル・パリヤット氏は言う。
特に伝統的な作物が打撃を受けているため、同氏は農家にとって大きなチャンスがあると考えている。
「気候条件の変化によりコーヒーとコショウは苦境に立たされており、農家にとって多様化が不可欠となっている。」
インドでは需要が高まっていますが、必ずしも地元産の果物に需要があるわけではありません。
ハンガー・インク・ホスピタリティのエグゼクティブシェフ、フセイン・シャザド氏は、「インド産のアボカドは改良されており、地元の品種を扱う素晴らしい農家もいくつかあるが、品質と入手可能性は季節や地域によって大きく異なる可能性がある」と語る。
このグループはムンバイに Veronica's や The Bombay Canteen など 4 つのレストランを所有しています。
「私たちはインドで入手できるさまざまな品種のアボカドを調べてきましたが、現在輸入されているアボカドは、風味、食感、大きさ、熟成の点で私たちが必要とする一貫性を提供しています」と彼は言います。
しかし、ケータリング業界の多くの人々と同じように、彼も食材を地元で調達したいと考えています。
「私たちは、進化するより良い地元の農産物を探求することに常に興味を持っています。インドの農業を支援し、先住民の食材を扱うことは、私たちが食に取り組む方法の中心です。」
輸入果物の品質と一貫性を一致させることが、一部のインドの起業家の目標です。
ハルシット・ゴダは、インド中部のマディヤ・プラデーシュ州ボパールにあるインド・イスラエル・アボカド保育園の創設者です。
彼はイスラエルで1か月間業界について学んだ後、2021年に保育事業を設立した。
それ以来、ビジネスは順調に進んでいます。過去 5 年間にわたり、ゴダはインド全土の農家に約 18,000 本のアボカドの苗木を供給してきました。
苗木はすべてハスやピンカートンなどの国際品種です。
「イスラエルは約13,000ヘクタールでアボカドを栽培しています。この小さな国では、1年のうち8か月はほとんど雨が降りません。まさにこれが、イスラエルのアボカド技術が世界で最も進んでいる理由です」とゴダ氏は言う。
商業果樹園を立ち上げて運営するのは簡単ではありません。これは、日陰のために他の作物の中にアボカドを植えるインドの伝統的なアボカド栽培方法とは大きく異なります。
まず、種から木を育てることはできません。市販の木は、地域の条件に対する耐性を考慮して選ばれた台木を上半分に接ぎ木して構成されており、これによってどのような種類の果物が生産されるかが決まります。
それが完了したら、木には十分な注意が必要になります。
「専門の果樹園を設置する場合、剪定の技術を知らなければなりません。木は6～7年以内に最大25フィートまで成長しますが、25フィートの高さで収穫するのはほぼ不可能です」とゴダ氏は言う。
作業員にとって都合の良い高さに収穫を維持するには、「積極的な」剪定が必要です。
その上、アボカドの木は自ら受粉することが容易ではありません。実を結ぶには、2種類の異なるアボカドの木を隣り合って植える必要があります。一方の品種が雌として開花するのと同じタイミングで、もう一方の品種が雄として花粉を放出する必要があります。」
「農家がこの植える割合を間違えると、どんなに灌漑技術が進歩しても、木は実を結ぶことができなくなります。この植物の細部が、高収益で高収量の果樹園と、紙の上では素晴らしく見えても実際には失敗する果樹園を分けるのです」とゴダ氏は言います。
人気の外国品種を使用することは、インドのアボカド産業を近代化する方法の 1 つです。もう一つは、インドに何世代にもわたって存在してきた木の改良です。
「インドのアボカドの木の最大の問題は、裏庭の木がそれぞれ遺伝的に異なることです」と、バンガロールにある ICAR インド園芸研究所 (IIHR) の主任科学者であるガネーシャン・カルナカラン博士は言います。
「インドの市場にはさまざまな品質のさまざまな果物が溢れているのはそのためです。信頼できる商業市場を望むなら、標準品種が不可欠です。」
彼は 25 年間にわたり、地元の木をベースにした 2 つの品種をリリースする育種プロジェクトに取り組んできました。
「私たちの目的は、何千もの異なる名前のない木ではなく、均一で収量が多く、高品質の植栽資材を農家に提供することです」とカルナカラン氏は言います。
同氏はまた、未確認の植物や病気の植物を販売する規制されていない苗床についても懸念している。
「農家は知らずに病気の植物を購入する可能性があります。木は最初は健康そうに見えますが、5、7年後に突然枯れてしまい、多大な経済的損失を引き起こす可能性があります」と彼は言います。
課題はあるものの、農家はアボカド栽培への切り替えに可能性を感じています。
Shiju Sebastian は早期採用者でした。 8年前、彼はワヤナード・ケララ州にある農場の2エーカーをこの作物のために捧げた。
「農家はアボカドの栽培に意欲を持っていますが、適切な指導と確実な市場が必要です」と彼は言います。
今年は3,500kgの果実を収穫しており、そのすべてがベンガララル市で販売されている。
「アボカドは決してあなたを裏切らないでしょう。とても愛らしくて愛らしい果物です。今ではこの果物の虜になってしまいました。さらに3エーカーの土地にアボカドだけを植えるつもりです。」
- 7 月 3 日発行
- 7 月 30 日発行
- 7 月 28 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/clyjzpgv29do?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-04T05:09:02+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/985c/live/f13cd3e0-96f7-11f1-870d-5d08c49babb2.jpg",
    readTime: 8,
  },
  {
    id: "argentina-to-sanction-oil-firms-as-falkl-4431aba8",
    title: "Argentina to sanction oil firms as Falklands dispute with UK heats up",
    titleJa: "英国とフォークランド紛争激化、アルゼンチンが石油会社に制裁へ",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Argentina to sanction oil firms as Falklands dispute with UK heats up
- Published
Argentina's President, Javier Milei, has heightened tensions with the UK over the Falklands, warning he will impose economic sanctions on firms which exploit oil close to the British overseas territory.
In a national address, Milei said the "winds of change" favoured Argentina's claim to the islands, emboldened by signs the US might reconsider its stance of neutrality on the issue.
Milei said the Sea Lion oilfield, where a British and an Israeli firm are due to begin exploration work, was a "clear and present danger".
More than 40 years after the war over the territory, sovereignty of the archipelago in the south-west Atlantic Ocean remains hotly disputed between Britain and Argentina.
BBC News is seeking comment from the UK government on Milei's statement. It reiterated this week that Falkland islanders "are British with a right to determine their own future".
Milei announced his sanctions plan surrounded by his cabinet at the presidential palace, reiterating that the Falklands were "historically and legally" Argentinean.
The crux was a proposal to introduce a bill to parliament to impose sanctions on energy firms planning to begin oil exploration off the Falklands.
The Sea Lion oilfield, around 130 miles from the islands, contains an estimated 1.7 billion barrels of oil.
Two oil companies – Britain's Rockhopper Exploration and Israel's Navitas Petroleum – are due to begin extracting oil in the Sea Lion oilfield off the Falklands coast within two years, something Milei said Argentina could not allow.
Rockhopper has described the field as containing "highly marketable crude".
In a video posted earlier this year, Navitas highlighted the work it is already carrying out in the Falklands including building a dock, a heliport and accommodation for oil workers.
The BBC has contacted the two companies for responses to Milei's latest comments.
"If we do not act swiftly in a few months, they will have the material capacity to access the oil that lies underneath our sea – something that has never happened before," Milei said.
It is not yet clear how or to what extent the sanctions will be imposed or tightened. In Argentina, a current law already allows for restrictions of activities of oil companies participating in projects considered unauthorised on the islands.
In a 2013 referendum, residents of the islands voted overwhelmingly to remain a British overseas territory - with 99.8% voting in favour and just three voting against.
When asked in an interview with GB News earlier on Thursday if the US would "come to the UK's aid" during a potential territorial dispute, Trump replied that Britain had "not been there to help me" with his country's war with Iran.
Trump's latest remarks come after he previously said the US could revise its neutral position on the islands' sovereignty if the UK failed to increase defence spending.
Milei also announced plans for a naval base in Tierra del Fuego in the south of Argentina, saying Trump and the US were "assessing their historical position in regard to the Falklands", which Argentina refers to as Las Malvinas.
"That is not empty words as they understand that Argentina is a reliable partner and a valuable ally for decades to come," he said, describing the UK as a nation "in decline".
"There are winds of change in the world that are favourable to our claim," Milei added.
Hours before Milei's speech, Sarah Rogers, a senior official in the US state department, posted a photo of herself with Milei alongside the caption: "Exciting things are happening in the Western Hemisphere."
Argentine forces landed on the Falklands to stake a territorial claim in 1982, sparking a 74-day war over the territory as a British military task force ejected them.
The conflict led to the deaths of 255 British military personnel, three islanders and 649 Argentine military personnel.
In a sign of the ongoing tensions between the two countries over the issue, Argentina players celebrated their victory over England in the World Cup by waving a banner in support of their country's territorial claim.
Related topics
- Published24 April
- Published30 April`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/clyk18g1l8ko?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-04T04:04:42+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/60ba/live/95a27d40-a7fb-11f1-aed2-8d6da8d75094.jpg",
    readTime: 2,
  },
  {
    id: "eu-joins-u-s-sanctions-push-on-iran-as-s-71a9e77d",
    title: "EU joins U.S. sanctions push on Iran as South Korea weighs Hormuz deployment",
    titleJa: "韓国がホルムズ配備を検討中、EUも米国の対イラン制裁に参加",
    summaryJa: "欧州連合は米国主導の対イラン制裁キャンペーンに正式に参加したが、米国が財政面と軍事面の両面で対テヘラン戦争を支持するよう同盟国に圧力をかけている中、韓国はホルムズ海峡の再開を支援する軍事的役割を検討していると述べた。スコット・ベッセント米財務長官は、テヘランを世界の金融システムから切り離すことを目的とした米国主導の制裁キャンペーン「経済的追放作戦」にEUが署名したことを称賛した。",
    bodyOriginal: `The European Union has formally joined the U.S.-led sanctions campaign against Iran, while South Korea said it's weighing a military role to help reopen the Strait of Hormuz, as Washington presses allies to back its war against Tehran on both the financial and military fronts.
U.S. Treasury Secretary Scott Bessent praised the EU for signing on to "Operation Economic Outcast," the U.S.-led sanctions campaign aimed at severing Tehran from the global financial system.
"We appreciate their strong and early stance," Bessent said in a social media post Thursday evening stateside. "The world is sending a clear message to the Iranian regime: We will not stop until every remaining financial lifeline has been severed," he added.
The comments came after Brussels, in a statement on Aug. 31, said it supported efforts aimed at stopping the "destabilizing activities" by Tehran and resuming peace talks, including through Operation Economic Outcast, to apply additional economic pressure against the Islamic regime.
The bloc's endorsement came as the Group of 20 finance ministers and central bank governors gathered in Asheville, North Carolina, earlier this week.
"The United States stands firm with our allies in ensuring the murderous Iranian regime cannot exploit the global financial system to fund its nuclear ambitions, weapons programs, and terror proxies," Bessent said in the Thursday post.
The Trump administration launched the "Operation Economic Outcast" campaign in late August, targeting Iran's access to digital assets, advanced technology procurement, gold reserves, commercial aviation and shipping.
Iran's foreign ministry spokesperson Esmail Baghaei pushed back against the EU's move to endorse what he called Washington's "economic terrorism." Baghaei blasted in a post on Sept. 1 that the bloc had "surrendered its sovereignty, its laws and regulations, values and ethics to U.S. coercion."
Bessent cast the campaign as an "economic onslaught" against Iran's global financial connections, warning that countries aiding Tehran should "expect to share in the isolation of a withering regime." China was the largest trading partner for Iran, buying around 90% of Iran's sanctioned crude exports before the war.
The EU has separately maintained its own sanctions regime targeting Iran's nuclear and ballistic missile programs and its military support for Russia.
Bessent had signaled ahead of the summit that he intended to press G20 counterparts to cut financial ties with Tehran, or face secondary sanctions. He also indicated new secondary sanctions each week with an initial focus on banks, warning to cut off institutions that facilitate Iran-related transactions entirely from the dollar-based financial system.
Seoul weighs Hormuz role
Separately, South Korea is weighing options including military assistance to support the U.S. bid to reopen the Strait of Hormuz to commercial shipping, Reuters reported Friday, citing the presidential office.
The government, however, denied local media reports that a decision has already been made, saying "details related to the issue have yet to be decided," in a statement to reporters, according to Yonhap News.
Several South Korean media outlets reported Thursday that Seoul was preparing to send troops to the Gulf region before year-end, and could seek parliamentary approval as soon as this month.
The consideration came as Washington has expressed dissatisfaction with Seoul's reluctance to offer military assistance in its war against Iran, including by scaling back an annual joint military drill last month and canceling a landing drill scheduled for September.
Standoff
Military hostilities in the region intensified in recent days, reviving fears of a return to broader war.
The U.S. military carried out a new wave of strikes earlier this week, hitting military targets in Iran in retaliation for attacks on ships and American forces in the region. Iran has retaliated, launching missiles on U.S. military bases across the Middle East.
Shipping through the Strait of Hormuz — a chokepoint for roughly a fifth of global oil flows before the war — remained subdued, with Iran launching periodic strikes on vessels using the southern shipping lane near the Omani coast.
The U.S. has maintained a naval blockade in the strait, blocking vessels entering or leaving Iranian ports to stall the country's crude oil shipments. U.S. Central Command said on Friday that it has redirected 87 commercial vessels, disabled three and boarded two to ensure total compliance.`,
    bodyJa: `欧州連合は米国主導の対イラン制裁キャンペーンに正式に参加したが、米国が財政面と軍事面の両面で対テヘラン戦争を支持するよう同盟国に圧力をかけている中、韓国はホルムズ海峡の再開を支援する軍事的役割を検討していると述べた。
スコット・ベッセント米財務長官は、テヘランを世界の金融システムから切り離すことを目的とした米国主導の制裁キャンペーン「経済的追放作戦」にEUが署名したことを称賛した。
「我々は彼らの強力かつ早期の姿勢に感謝する」とベッセント氏は木曜夕方、米国内でソーシャルメディアへの投稿で述べた。同氏はさらに、「世界はイラン政権に対し、残されたすべての金融ライフラインが断たれるまで我々は止まらないという明確なメッセージを送っている」と付け加えた。
このコメントは、ブリュッセルが8月31日の声明で、イラン政府による「不安定化活動」を停止し、イスラム政権に対して追加の経済圧力をかけるための経済的追放作戦などを通じた和平交渉の再開を目指す取り組みを支持すると発表した後に出された。
今週初めにノースカロライナ州アッシュビルに20カ国・地域（G20）財務相と中央銀行総裁が集まった際に、このブロックの支持が表明された。
ベセント氏は木曜日の投稿で、「米国は、残忍なイラン政権が核開発計画、兵器開発計画、テロ代理の資金提供のために世界金融システムを悪用できないよう、同盟国と断固とした立場で臨む」と述べた。
トランプ政権は8月下旬、イランのデジタル資産へのアクセス、先端技術調達、金埋蔵量、民間航空、海運を標的とした「経済的追放作戦」キャンペーンを開始した。
イラン外務省のエスマイル・バガエイ報道官は、同氏がワシントンの「経済テロ」と呼ぶものを支持するEUの動きに反発した。バガイ氏は9月1日の投稿で、EUが「主権、法律、規制、価値観、倫理を米国の強制に引き渡した」と激しく非難した。
ベッセント氏は、このキャンペーンをイランの世界的な金融関係に対する「経済的猛攻撃」と位置づけ、イランを支援している国々は「衰退しつつある政権の孤立に加わることを期待する」べきだと警告した。中国はイランにとって最大の貿易相手国であり、戦前はイランの制裁原油輸出量の約９０％を購入していた。
EUはこれとは別に、イランの核・弾道ミサイル計画とロシアへの軍事支援を対象とした独自の制裁体制を維持している。
ベッセント氏はサミットに先立ち、G20諸国に対しイランとの財政関係を断つよう圧力をかけ、さもなければ二次制裁に直面するつもりであることを示唆していた。同氏はまた、当初は銀行に焦点を当てた新たな二次制裁を毎週実施することを示唆し、イラン関連取引を促進する機関をドルベースの金融システムから完全に遮断すると警告した。
ソウル、ホルムズの役割を検討
これとは別に、韓国はホルムズ海峡の民間船舶運航再開を目指す米国の計画を支援するため、軍事援助を含む選択肢を検討しているとロイター通信が金曜日、大統領府の話として報じた。
しかし、聯合ニュースによると、政府は記者団への声明で「この問題に関する詳細はまだ決まっていない」と述べ、すでに決定が下されたとする地元メディアの報道を否定した。
複数の韓国メディアは木曜日、韓国政府が年末までに湾岸地域に軍隊を派兵する準備を進めており、今月中にも議会の承認を求める可能性があると報じた。
この検討は、先月の年次合同軍事演習の規模縮小や9月に予定されていた上陸訓練の中止など、対イラン戦争への軍事支援に韓国政府が消極的であることに米国政府が不満を表明している中で行われた。
スタンドオフ
この地域での軍事的敵対行為はここ数日激化し、より広範な戦争に戻るのではないかとの懸念が再び高まっている。
米軍は今週初め、地域の船舶や米軍への攻撃への報復としてイランの軍事目標を攻撃する新たな波状攻撃を実施した。イランは報復し、中東各地の米軍基地にミサイルを発射した。
戦前の世界の石油の流れのおよそ5分の1が通過する関所だったホルムズ海峡を通る輸送は依然として抑制されており、イランはオマーン沿岸近くの南航路を使用する船舶に対して定期的な攻撃を開始した。
米国は同海峡の海上封鎖を維持し、イランの原油輸送を滞らせるためにイランの港に出入りする船舶を阻止している。米中央軍は金曜日、完全な遵守を徹底するため、87隻の商船の航路を変更し、3隻を無効化し、2隻に乗船したと発表した。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/04/us-iran-war-trump-hormuz-operation-economic-outcast-sanctions-campaign.html",
    publishedAt: "2026-09-04T04:02:13+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 5,
  },
  {
    id: "volkswagen-board-approves-plan-to-cut-an-9000a273",
    title: "Volkswagen board approves plan to cut another 50,000 jobs",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Volkswagen board approves plan to cut another 50,000 jobs
- Published
The board of German car giant Volkswagen has approved a plan to cut another 50,000 jobs as part of a sweeping turnaround programme. It brings the total number of roles the company plans to shed by 2030 to 100,000.
The group - which includes Audi, Porsche, Skoda as well as the VW brand - said in March that it would cut 50,000 roles by the end of the decade.
The move is a "strong signal" for the future of the firm, which is "taking responsibility for our entire workforce", VW's chief executive Oliver Blume said in a statement on Thursday.
Blume said in July that the firm was looking to make the additional cuts.
The Beetle-maker has been hit by a drop in profits due to falling sales and fierce competition, especially from Chinese brands.
VW will also prioritise the "most compelling vehicles" and make more of each model, which will help lower costs, it said.
A "fundamental adjustment of the global workforce capability is necessary" to safeguard the competitiveness of the company, which faces shifting demand and technological change.
It added "a Group-wide workforce adjustment of approximately 50,000 positions - including management roles - will be necessary."
The company is also considering the future of its Emden, Zwickau, Hanover and Neckarsulm plants, where it has said production capacity exceeds demand.
"Alternative uses for these plants are being assessed," it said.
The restructuring marks the biggest in VW's almost nine-decade history.
As of 2025, VW employed more than 660,000 people worldwide. Its brands also include Seat, Bentley and Lamborghini.
Christianne Benner - the president of Europe's largest industrial union IG Metall and deputy chair of VW's Supervisory Board - said the carmaker had "fought hard for good solutions" to address a "crisis situation".
VW's profits have fallen sharply in recent years, hit by falling sales in China, which was once one of its biggest markets.
Sales have also fallen in the US, partly due to the impact of tariffs on car imports that were introduced by President Donald Trump's administration.
Chinese carmakers have been expanding aggressively as they roll out new technologies while benefiting from lower production costs than their rivals.
In recent years, firms like BYD have seen their sales rise sharply in markets including the UK, European Union and South East Asia.
Related topics
- Published12 February 2025
- Published27 May`,
    bodyJa: `フォルクスワーゲン取締役会、さらに5万人の人員削減計画を承認
- 公開されました
ドイツの自動車大手フォルクスワーゲンの取締役会は、抜本的な再建プログラムの一環としてさらに5万人を削減する計画を承認した。これにより、同社が2030年までに削減する予定の役割の総数は10万人になる。
アウディ、ポルシェ、シュコダ、そしてVWブランドを含むこのグループは3月、2010年末までに5万人の役割を削減すると発表した。
VWのオリバー・ブルーム最高経営責任者（CEO）は木曜日の声明で、この動きは「全従業員に責任を負う」という同社の将来に対する「強いシグナル」であると述べた。
ブルーメ氏は7月、同社は追加削減を検討していると述べた。
ビートルメーカーである同社は、売上高の減少と、特に中国ブランドとの熾烈な競争により利益の減少に見舞われている。
また、VWは「最も魅力的な車」を優先し、各モデルの生産量を増やすことでコスト削減につなげるとしている。
需要の変化と技術変化に直面する同社の競争力を守るためには、「世界的な労働力能力の根本的な調整が必要」だ。
さらに「管理職を含むグループ全体で約５万人の人員調整が必要となる」と付け加えた。
同社はエムデン、ツヴィッカウ、ハノーバー、ネッカースウルムの各工場の将来についても検討しており、生産能力が需要を上回っているとしている。
「これらの植物の代替用途が評価されている」と同省は述べた。
今回の組織再編は、ＶＷの約９０年の歴史の中で最大規模となる。
2025 年の時点で、VW は世界中で 660,000 人以上の従業員を雇用しています。同社のブランドには、セアト、ベントレー、ランボルギーニも含まれます。
欧州最大の産業組合IGメタルの会長であり、VW監査役会の副委員長でもあるクリスティアン・ベナー氏は、同社が「危機的状況」に対処するための「良い解決策を求めて懸命に戦ってきた」と述べた。
ＶＷの利益は近年、かつて同社最大の市場の一つであった中国での販売減少の影響を受けて大幅に減少している。
ドナルド・トランプ政権が導入した自動車輸入関税の影響もあり、米国でも販売が減少した。
中国の自動車メーカーは、ライバルよりも低い生産コストの恩恵を受けながら、新技術を展開して積極的に事業を拡大している。
近年、BYDのような企業は英国、欧州連合、東南アジアなどの市場で売上高が急増している。
関連トピック
- 2025 年 2 月 12 日公開
- 5 月 27 日公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cx2z0kvy4n4o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-04T01:20:32+00:00",
    category: "自動車",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/b1a3/live/90a60580-a7fd-11f1-b109-879e35c24276.jpg",
    readTime: 3,
  },
  {
    id: "adobe-just-announced-its-next-ceo-here-s-3b54331f",
    title: "Adobe just announced its next CEO. Here’s why its stock is dropping.",
    titleJa: "Adobe は次期 CEO を発表しました。同社の株価が下落している理由はここにある。",
    summaryJa: "次期 CEO の Anil Chakravarthy は同社のベテランです。しかし、もう一人長年経営責任者を務めたアドビ社を離れることになり、今後の経営陣の交代が予想される可能性がある。",
    bodyOriginal: `Incoming CEO Anil Chakravarthy is a company veteran. But another longtime business head will be departing Adobe, potentially foreshadowing further turnover in leadership.`,
    bodyJa: `次期 CEO の Anil Chakravarthy は同社のベテランです。しかし、もう一人長年経営責任者を務めたアドビ社を離れることになり、今後の経営陣の交代が予想される可能性がある。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/adobe-just-announced-its-next-ceo-heres-why-its-stock-is-dropping-bad9ed8a?mod=mw_rss_topstories",
    publishedAt: "2026-09-04T00:25:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-38050642",
    readTime: 2,
  },
  {
    id: "i-lost-my-savings-after-a-job-interview-c1b0bd78",
    title: "'I lost my savings after a job interview scam'",
    titleJa: "「就職面接詐欺に遭って貯金を失った」",
    summaryJa: "「就職面接詐欺に遭って貯金を失った」- 公開されました",
    bodyOriginal: `'I lost my savings after a job interview scam'
- Published
Jobseekers are being warned to be vigilant as scammers are targeting people on job listings websites to trick them into downloading bogus interview tools.
One victim was invited on LinkedIn by a fake recruiter to take part in a job interview process and downloaded a normal-looking document which turned out to be malicious software.
Within hours the hackers had drained his cryptocurrency accounts of £18,000 of savings and disappeared.
"It's a horrible feeling to be out a substantial amount - something I wouldn't wish on my worst enemy," the victim, who wanted to stay anonymous, said.
Crowded and competitive job market
Professional recruitment platforms LinkedIn and Indeed have warned of growing numbers of job scams in recent months.
LinkedIn released data highlighting what it called The Gen Z "Scam Gap", external - "Younger professionals face the highest exposure to scams (32%), yet nearly a third (32%) admit to ignoring red flags due to a competitive job market."
When approached by the BBC, the company said in a crowded and competitive job market, "many young people feel they can't afford to be skeptical... because they feel opportunities are so scarce".
The platform pointed to advice on its website, external about how to spot recruitment scams by, for example, verifying that the company and job was real and doing thorough research before engaging in talks.
The victim who lost their savings after being hacked had handed his notice in and had made it clear on LinkedIn that they were looking for a new job.
A fake recruiter sent them a potential job offer and held a video call about the job before asking them to carry out a standard technical assessment with instructions on the Google Sheet document.
But the document was laced with malicious software.
After completing the task, the candidate went to bed and woke up to find their online wallets emptied of their savings.
"I wiped my computer and changed all my passwords and was exhausted emotionally and mentally drained," they said.
"I felt a mixture of disbelief and anger - at the hackers and at myself. I was also confused until I figured out how they had got me."
Fake recruiters and malicious apps
Cyber-security researcher Charlie Kelly from Have I Been Squatted carried out an analysis of how the attack worked and said the new wave of recruitment scams were hard to spot.
"This wasn't a badly written email with a suspicious attachment - this person was walked through what looked like a real job interview, on real Google pages, behind a real Google login, and the software they were asked to install was digitally signed like any legitimate app."
The case comes as others have reported similar attacks through the job listing platform Indeed, which put out advice in July about avoiding scams, external.
Criminals are using the pressure and excitement of job interviews to lure people into downloading booby-trapped mobile applications like a fake Indeed Interview app or one called MyInterview.
According to cyber-security company Malwarebytes, the fake recruiters use lures such as: "Complete your interview by installing the Indeed app" or "salary agreement available after app installation".
Once downloaded the malicious apps allow hackers to access private data for extortion or to use in financial attacks.
"Interviewing through Indeed's platform happens entirely in a browser and never requires downloading a special app," the company recently posted online.
"Any message asking a job seeker to download an app to participate in an interview is not legitimate."
Seven job seekers scammed out of £200,000
- Published19 June 2025
Criminals publish data of 8.7m people after airports hack
- Published1 day ago
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.`,
    bodyJa: `「就職面接詐欺に遭って貯金を失った」
- 公開されました
詐欺師が求人サイトの利用者をターゲットにして偽の面接ツールをダウンロードさせるよう仕向けているため、求職者は警戒するよう警告されている。
被害者の 1 人は、偽の採用担当者によって LinkedIn で就職面接プロセスに招待され、一見正常に見えるドキュメントをダウンロードしましたが、そのドキュメントは悪意のあるソフトウェアであることが判明しました。
数時間以内に、ハッカーは彼の仮想通貨口座から 18,000 ポンドの貯蓄を使い果たし、姿を消しました。
「かなりの量の外出をするのは恐ろしい気分だ。最悪の敵には望んでいないことだ」と被害者は匿名を希望して語った。
混雑し競争が激しい雇用市場
専門の人材採用プラットフォームである LinkedIn と Indeed は、ここ数カ月で求人詐欺の件数が増加していると警告している。
LinkedInは、Z世代の「詐欺ギャップ」と呼ばれるものを浮き彫りにしたデータを社外向けに発表した。「若い専門家が詐欺に最も多くさらされている（32％）が、3分の1近く（32％）が、競争の激しい雇用市場のために危険信号を無視していることを認めている」。
BBCから取材を受けた同社は、混雑し競争が激しい就職市場において「多くの若者は、懐疑的になる余裕がないと感じている…なぜなら機会が非常に少ないと感じているからだ」と述べた。
同プラットフォームは、企業や求人が本物であることを確認し、交渉に臨む前に徹底的な調査を行うなど、採用詐欺を見分ける方法について外部のウェブサイト上でアドバイスを提供していると指摘した。
ハッキングを受けて貯金を失った被害者は通知書を提出し、LinkedInで新しい仕事を探していることを明らかにしていた。
偽の採用担当者は彼らに求人のオファーを送り、その仕事についてビデオ通話を行った後、Google シートのドキュメントに記載された指示に従って標準的な技術評価を実施するよう依頼しました。
しかし、その文書には悪意のあるソフトウェアが混入されていました。
タスクを完了した後、候補者は就寝して目が覚めると、オンライン ウォレットの貯金が空になっていることに気づきました。
「コンピューターを拭き、パスワードをすべて変更し、精神的にも精神的にも疲れ果てた」と彼らは語った。
「私はハッカーたちに対して、そして自分自身に対して、信じられないと怒りが入り混じった感情を抱きました。また、ハッカーがどうやって私を捕まえたのか理解するまでは混乱していました。」
偽のリクルーターと悪意のあるアプリ
Have I Been Squatted のサイバーセキュリティ研究者チャーリー・ケリー氏は、攻撃の仕組みを分析し、求人詐欺の新たな波を発見するのは難しいと述べた。
「これは、不審な添付ファイルが付いたひどい書き方のメールではありませんでした。この人物は、実際の G​​oogle ページで、実際の G​​oogle ログインの背後で、実際の就職面接のように見せかけられたものでした。インストールを求められたソフトウェアには、正規のアプリと同様にデジタル署名が施されていました。」
この事件は、求人情報プラットフォーム Indeed を通じた同様の攻撃が他の人からも報告されている中で発生した。Indeed は 7 月に詐欺を回避するためのアドバイスを社外向けに発表した。
犯罪者は、就職面接のプレッシャーと興奮を利用して、偽の Indeed Interview アプリや MyInterview と呼ばれるアプリなど、仕掛けられたモバイル アプリケーションをダウンロードするよう人々を誘導しています。
サイバーセキュリティ会社 Malwarebytes によると、偽の採用担当者は「Indeed アプリをインストールして面接を完了する」や「アプリのインストール後に給与契約を利用できる」などの誘い文句を使います。
悪意のあるアプリをダウンロードすると、ハッカーが個人データにアクセスして恐喝や金融攻撃に使用できるようになります。
「Indeedのプラットフォームを通じた面接は完全にブラウザ上で行われ、特別なアプリをダウンロードする必要はない」と同社は最近オンラインで投稿した。
「面接に参加するために求職者にアプリをダウンロードするよう求めるメッセージは正当なものではありません。」
求職者7人が20万ポンドを騙し取られる
- 2025 年 6 月 19 日公開
空港ハッキング後、犯罪者が870万人のデータを公開
- 1 日前に公開
Tech Decoded ニュースレターに登録して、世界のトップテクノロジーのストーリーやトレンドをフォローしてください。英国外ですか？ここからサインアップしてください。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/crk3xd8j3k5o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-03T23:41:49+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/f931/live/69fc7270-a78f-11f1-9bb7-af8e8fd3d806.jpg",
    readTime: 5,
  },
  {
    id: "from-cake-to-pizza-how-to-get-the-best-b-06ae3346",
    title: "From cake to pizza: How to get the best birthday freebies (and why there's a catch)",
    titleJa: "ケーキからピザまで: 誕生日に最高の景品をもらう方法 (そして落とし穴がある理由)",
    summaryJa: "ケーキからピザまで: 誕生日に最高の景品をもらう方法 (そして落とし穴がある理由)- 公開されました",
    bodyOriginal: `From cake to pizza: How to get the best birthday freebies (and why there's a catch)
- Published
"It's your birthday!" Cue the influx of emails offering you all sorts of freebies.
Sign up to the right apps and loyalty schemes and you could spend the day enjoying free cake, meals out, beauty treats and even cinema snacks.
Here are some of the things you can get on or around your birthday - and why they may not all be as free as they seem.
Cakes, cookies and chocolates
Most chain coffee shops and bakeries offer a birthday treat through their loyalty apps. You can get a free sweet treat, usually a cake, cookie, muffin or doughnut, from Greggs, Costa, Caffè Nero, Krispy Kreme, Gail's, Subway and Ole & Steen if you have registered your date of birth in advance.
Lidl Plus members can claim a free bakery doughnut within seven days of their birthday, while M&S Sparks members can choose two gifts on their birthday from a range of 15 which includes cookies and chocolates.
Hotel Chocolat gives members a £5 birthday reward with a minimum spend of £5.50 and Lindt offers a free box of truffles when you meet its minimum spend requirement.
Burgers, pizza and noodles
Some fast-food chains offer a free birthday meal or snack - Burger King members can claim a free Whopper or Plant-Based Whopper, while Chopstix offers a free small noodle box.
However, most restaurant birthday offers are buy-one-get-one-free deals rather than completely free meals.
At Harvester and Zizzi's it's a free main when buying another full-price main. At Frankie & Benny's you get a free main when purchasing two or more main meals.
Byron offers a free burger with a £5 minimum spend, while Wagamama offers free gyoza when you spend £12 and have earned at least one stamp on your loyalty card in the last six months.
Some chains give money off instead. Turtle Bay offers members a £20 birthday credit with no minimum spend, while Bella Italia gives you £15 off your total bill when you spend a minimum of £30. Las Iguanas offers a free main when two other meals are purchased or a 20% off voucher.
Pizza Express birthday rewards depend on your loyalty level. Bronze members may get a free dessert with a £10 spend, while higher tiers can get a free pizza or drinks with a £15 minimum spend.
At Prezzo, members receive drinks or desserts when they spend at least £25, while Bill's offers a bottle of prosecco or pancakes when qualifying meals are ordered and the booking is made in advance.
Fashion & beauty
Fashion brands generally offer birthday discounts rather than freebies.
Members of schemes run by brands such as Nike, Asos, River Island, Levi's, Timberland and H&M may receive money off, but some offers are personalised and not guaranteed for every customer.
Beauty birthday gifts are often linked to your purchase history or require you to buy something.
Space NK members can receive a free set of three beauty minis, provided they have shopped with the retailer during the previous year. The Body Shop offers a £5 birthday voucher to members.
At Rituals, a birthday gift of a full-sized product or deluxe mini comes with another purchase, while Sephora rewards vary depending on membership tier. Boots usually offers double points during your birthday month rather than a free product.
Entertainment and hobbies
Odeon Extras members can claim a free large popcorn, even without buying a cinema ticket, while Hobbycraft Club members receive £5 of birthday credit with no minimum spend.
You can get 20% off at the Disney Store during your birthday month and £5 off with a minimum of £20 spend at Smiggle.
Birthday freebie tips
Sign up to mailing lists using a second email account so your main inbox won't get clogged up with offers.
Always check the small print as some freebies have exclusions and can't be redeemed with other discounts.
Weigh up if it is really a freebie if you have to spend a certain amount to qualify.
What's the catch?
Many of these freebies require you to join a loyalty scheme, enter your date of birth and opt into marketing several weeks before your birthday.
Consumer finance expert Sue Hayward says the most generous freebies don't last particularly long and have to be redeemed on your birthday, within the week or sometimes within the month.
Some only unlock after a qualifying purchase or once you have reached a particular membership tier so it can encourage you to spend money you had not intended to.
Emma Richards, operations manager at Data Privacy Advisory Service, says businesses can collect more than just your date of birth when you sign up for a freebie.
"People like something for nothing without considering the implications," she says.
"So always read the small print and check to see whether your personal data will be used purely for generic marketing, or whether this will be used to build a profile of spending habits."
Related topics
- Published24 July`,
    bodyJa: `ケーキからピザまで: 誕生日に最高の景品をもらう方法 (そして落とし穴がある理由)
- 公開されました
「あなたの誕生日ですよ！」あらゆる種類の景品を提供する電子メールが殺到しています。
適切なアプリやロイヤルティ スキームにサインアップすれば、無料のケーキ、外食、美容のおやつ、映画の軽食などを楽しみながら 1 日を過ごすことができます。
ここでは、誕生日やその前後に入手できるものの一部と、それらすべてが見かけほど無料ではない理由を紹介します。
ケーキ、クッキー、チョコレート
ほとんどのチェーンのコーヒー ショップやベーカリーは、ロイヤルティ アプリを通じて誕生日のおもてなしを提供しています。事前に生年月日を登録している場合は、Greggs、Costa、Caffè Nero、Krispy Kreme、Gail's、Subway、Ole & Steen から、通常はケーキ、クッキー、マフィン、またはドーナツなどの甘いおやつを無料で受け取ることができます。
Lidl Plus 会員は誕生日から 7 日以内に無料のベーカリー ドーナツを受け取ることができ、M&S Sparks 会員は誕生日にクッキーやチョコレートを含む 15 種類のギフトの中から 2 つを選ぶことができます。
ホテル ショコラでは、最低利用額 5.50 ポンドの会員に 5 ポンドの誕生日特典を提供し、リンツでは最低利用額要件を満たした場合にトリュフ 1 箱を無料で提供します。
ハンバーガー、ピザ、ヌードル
一部のファストフード チェーンでは、誕生日の食事や軽食を無料で提供しています。バーガー キング会員はワッパーまたはプラントベース ワッパーを無料で受け取ることができ、チョップスティックスでは無料の小さなヌードル ボックスを提供しています。
ただし、ほとんどのレストランの誕生日オファーは、完全に無料の食事ではなく、1 つ買うともう 1 つ無料になるというものです。
Harvester と Zizzi's では、定価のメインをもう 1 つ購入すると、メインが無料になります。 Frankie & Benny's では、メイン料理を 2 つ以上購入すると、メイン料理が 1 つ無料になります。
Byron では最低 5 ポンドの支払いで無料のハンバーガーを提供します。一方、Wagamama では 12 ポンドの支払いで、過去 6 か月以内にポイント カードに少なくとも 1 つのスタンプを獲得すると、無料の餃子を提供します。
チェーンによっては代わりにお金をくれるところもあります。 Turtle Bay では会員に最低利用額なしで 20 ポンドの誕生日クレジットを提供していますが、Bella Italia では最低 30 ポンド以上の利用で合計請求額から 15 ポンド割引されます。 Las Iguanas では、他の食事を 2 品購入するとメインが無料になるか、20% オフのクーポンが提供されます。
Pizza Express の誕生日特典はロイヤルティ レベルによって異なります。ブロンズ会員は 10 ポンド以上の支払いで無料のデザートを得ることができ、上位レベルの会員は 15 ポンド以上の支払いで無料のピザまたはドリンクを得ることができます。
Prezzoでは、会員は少なくとも25ポンドを支払うとドリンクまたはデザートを提供し、Bill'sでは対象となる食事を注文し、事前に予約するとプロセッコのボトルまたはパンケーキを提供します。
ファッション＆ビューティー
ファッション ブランドは通常、景品ではなく誕生日割引を提供します。
Nike、Asos、River Island、Levi's、Timberland、H&M などのブランドが運営する制度の会員は割引を受けられる場合がありますが、一部の特典は個別のものであり、すべての顧客に保証されるわけではありません。
美容の誕生日プレゼントは、多くの場合、購入履歴にリンクされているか、何かを購入する必要があります。
Space NK 会員は、前年中にこの小売店で買い物をした場合に限り、ビューティー ミニ 3 個セットを無料で受け取ることができます。ザ・ボディショップではメンバーに5ポンドの誕生日クーポンを提供しています。
Rituals では、別の商品を購入するとフルサイズの製品またはデラックス ミニの誕生日プレゼントが付いてきますが、Sephora の特典は会員レベルに応じて異なります。ブーツは通常、誕生日月には無料の商品ではなく、ポイントが 2 倍になります。
娯楽と趣味
Odeon Extras 会員は、映画のチケットを購入しなくても、大きなポップコーンを無料で受け取ることができます。一方、Hobbycraft Club 会員は、最低利用額なしで 5 ポンドの誕生日クレジットを受け取ります。
誕生日月にはディズニー ストアで 20% 割引、Smiggle で 20 ポンド以上のお買い物で 5 ポンド割引が受けられます。
誕生日の景品のヒント
メインの受信トレイがオファーでいっぱいにならないように、2 つ目の電子メール アカウントを使用してメーリング リストにサインアップします。
一部の景品には除外品があり、他の割引と併用できないため、必ず小さな部分を確認してください。
資格を得るために一定の金額を費やす必要がある場合、それが本当に無料なのかどうかを検討してください。
何が問題ですか?
これらの景品の多くは、ロイヤルティ スキームに参加し、生年月日を入力し、誕生日の数週間前にマーケティングをオプトインする必要があります。
消費者金融の専門家、スー・ヘイワード氏は、最も寛大な景品はそれほど長くは続かず、誕生日、または1週間以内、場合によっては1か月以内に引き換える必要があると述べています。
対象となる購入後、または特定のメンバーシップレベルに達した場合にのみロックが解除されるものもあります。そのため、意図していなかったお金の支出を促す可能性があります。
Data Privacy Advisory Service の運用マネージャー、Emma Richards 氏は、企業は景品にサインアップするときに、生年月日だけではない情報を収集できると述べています。
「人々は、その影響を考慮せずに、ただで何かを好むのです」と彼女は言います。
「そのため、常に小さな活字を読んで、個人データが純粋に一般的なマーケティングに使用されるのか、それとも消費習慣のプロファイルを構築するために使用されるのかを確認してください。」
関連トピック
- 7 月 24 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c5y4jr4yr2eo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-03T23:25:45+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/c97d/live/d61d4260-90b8-11f1-b8f3-bf6a2c059a9b.jpg",
    readTime: 7,
  },
  {
    id: "controversial-jackdaw-gas-field-set-to-b-0d2120c5",
    title: "Controversial Jackdaw gas field set to be approved in weeks, sources say",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Controversial Jackdaw gas field set to be approved in weeks, sources say
- Published
The UK government is set to give the go-ahead for a controversial new gas field off the coast of Aberdeen, the BBC understands.
Approval for the Jackdaw project could come as soon as mid-September, just before Parliament breaks for party conference season, according to government and industry sources.
The gas field was approved by the former Conservative government in 2022 but was delayed by a legal ruling from a Scottish court, after environmental groups successfully argued that consent was given without fully considering the climate impact.
Jackdaw's owner says it will provide gas to supply up to 6% of the UK's demand at peak production, but environmental groups say it will only supply 2%.
Campaigners launched legal challenges after Jackdaw was approved in 2022 and when the Rosebank oil field off Shetland was given the green light in 2023.
The Court of Session in Edinburgh ruled last year that Rosebank and Jackdaw had been unlawfully approved because the government had failed to take into account the climate impact of burning extracted oil and gas from the sites.
A judge ruled that more detailed climate assessments had to be published, and these updated estimates were put out for consultation in July.
Both Jackdaw and Rosebank are operated by Adura, a joint venture between energy giants Shell and Norway's Equinor. Aberdeen-based firm Ithaca also owns 20% of Rosebank.
Adura has estimated that Jackdaw could produce 35.8m tonnes of carbon over its 11-year lifetime, the equivalent of 90% of Scotland's emissions for 2023. But it said a more likely estimate was about 23.6m tonnes - equivalent to 60% of the 2023 figure.
Environmentalists insist that more drilling would be unconscionable, hampering efforts to cut planet-warming carbon emissions as deadly heatwaves and extreme weather affect billions across the globe.
They also say starting production would not protect energy security and that transitioning sooner to greener technologies would be better for supporting jobs.
What is happening with the Rosebank and Jackdaw oil and gas fields?
- Published17 August
Scottish Labour leadership contenders back North Sea drilling approval
- Published4 days ago
But industry bodies argue that starting production at the sites would provide much-needed jobs and improve the UK's energy security as overseas conflicts threaten supply.
Advocates of the project also told the BBC that Jackdaw's output is critical to extending the life of other North Sea infrastructure including Shearwater - a large offshore oil and gas production hub that processes hydrocarbons before piping them to coastal refineries and terminals.
Adura said that if approval comes in September, the field could start delivering gas to UK homes by this winter as the construction is "99% complete".
A public consultation on the future of Jackdaw and another new oil field, Rosebank, closed in August and the decision now rests with Energy Secretary Miatta Fahnbulleh.
Speaking in the House of Commons on Thursday, Energy Minister Kate White said that the energy secretary would make separate decisions on the two sites, but gave no indication of the timings of an announcement.
"The process ended in August, and the Secretary of State will be taking those decisions in due course," she told MPs.
Prime Minister Andy Burnham recently said there needs to be a "pragmatic approach" towards domestic oil and gas.
"We won't be able to stop using oil and gas for some time. That's just a fact," he said.
"The question is whether we can accelerate use of it so that we pay for the transition."
Unlike North Sea oil, most of which is exported and then reimported in various refined forms, almost all North Sea gas is used domestically in the UK.
The UK is heavily reliant on gas imports with over 60% imported from Norway and the United States.
Wholesale natural gas prices have surged this year as a result of the Iran war and are currently at a three-year high, prompting concerns over energy security.
Gas storage levels in Europe are significantly lower than usual for this time of year after countries delayed stockpiling in the summer in the hope that the conflict would end before winter and prices would in turn fall.
They face the prospect of rushing to buy gas now or paying potentially higher prices when the winter comes.
Prices are set internationally and a green light to Jackdaw would not lower the cost of gas for domestic consumers.
But extracting gas domestically creates lower greenhouse gas emissions than liquefying, shipping and regasifying liquid natural gas (LNG) imported from other countries.
Tessa Khan, executive director of environmental group Uplift which brought the legal challenge, said more North Sea drilling would not cut energy bills and would "make no meaningful difference" to UK energy supply.
"The science is clear that the world already has far more oil and gas than can ever be safely burned if we are to limit warming," she added.
"When it comes to these decisions, the prime minister needs to listen to scientists warnings and think back to those families who lost their homes to this summer's wildfires, the UK farmers struggling to grow our food in the drought, and the lives lost in the floods in Nepal – and not the self-interested demands of the oil companies."
The Department for Energy Security and Net Zero said it does not comment on speculation.
A spokesman added: "The North Sea remains a vital national asset and oil and gas will continue to play an important role in our energy system for decades to come - alongside transitioning to clean power to protect jobs and tackle the climate crisis.
"Any decision will take into account all relevant evidence, including environmental assessments and public representations received during the consultation process."
Related topics
- Published30 April`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.
Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cj9xe09jz4eo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-03T23:00:15+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/4ab0/live/294bf5d0-a7b1-11f1-b78b-6b70b0a83270.jpg",
    readTime: 2,
  },
  {
    id: "revenge-of-the-magnificent-seven-jim-cra-820dbe08",
    title: "Revenge of the 'Magnificent Seven' — Jim Cramer says it’s time to buy",
    titleJa: "「マグニフィセント・セブン」の復讐 — ジム・クレイマー、今が買い時だと語る",
    summaryJa: "CNBCのジム・クレイマー氏は木曜日、「マグニフィセント・セブン」を再考する時期が来たと述べ、数カ月間のパフォーマンス不振により、これら元市場リーダーの多くが無視できないほど割安になったと断言した。「私たちはマグニフィセント・セブンの復讐を目撃しているが、ほとんどの人はそれを知らないようだ」と「マッドマネー」の司会者は語った。 「今が買い時だと思います。」",
    bodyOriginal: `CNBC's Jim Cramer said Thursday it's time to revisit the "Magnificent Seven," declaring that months of underperformance have made many of these former market leaders too cheap to ignore.
"We're witnessing the revenge of the Magnificent Seven and most people don't even seem to know it," the "Mad Money" host said. "I think it's time to buy."
Stocks like Dell and Snowflake have surged this year, while many of the Mag 7 have fallen behind — even trailing the overall market as measured by the S&P 500's year-to-date gain of 13%.
With the exception of Apple, Cramer said Amazon, Alphabet, Meta, Microsoft and Tesla have become relative laggards as investors gravitated toward newer winners. Nvidia, like Apple, is beating the market, year to date, but its price-to-earnings multiple is so cheap that Cramer lumped it in with the rest.
"We have to go back and pick at this market's old leadership, the forgotten Mag Seven, because a lot of them have gotten real cheap," he explained. "On a price-to-earnings basis, they've fallen way behind and that's just plain wrong."
Here's a rundown of the catalysts Cramer sees across six of the seven Mag 7.
- Shares of Amazon are up just 12% this year despite strength across Amazon Web Services, advertising and international operations. While investors have worried about the enormous sums Amazon is spending on AI infrastructure, Cramer said those investments are approaching the point where they can generate substantial returns. "We've all kind of forgotten that there's a reason why a smart executive like Andy Jassy is willing to wreck Amazon's balance sheet like the old days," Cramer said. "It's because they're going to make fortunes with this spend. ... And that's why it's a screaming buy."
- Alphabet has similarly been left behind, he said, up more than 9% despite continued growth at Google Cloud and valuable businesses including YouTube and Waymo. For Cramer, the stock has simply gotten too cheap given the strength of the underlying businesses.
- Meta shares, meanwhile, are down roughly 7% this year even after the company resolved a major lawsuit brought by state attorneys general for $18 billion, removing what Cramer viewed as a potentially much larger financial risk. He also sees an opportunity for Meta to eventually monetize its excess AI computing capacity.
- Microsoft, which is up about 5% year to date, is providing investors greater visibility into its Azure cloud business while working to secure more power for its data centers, according to Cramer.
- Nvidia, despite gaining roughly 22% this year, trades at just 14 times next year's expected earnings, which Cramer said remains too cheap given its growth. He said if the chipmaker announced a larger buyback, that could further help the stock.
- Tesla is the most speculative of the group, according to Cramer. Shares have fallen roughly 16% this year, and Cramer said a potential combination with SpaceX could provide a catalyst for the stock.
Ultimately, Cramer said investors have turned away from the Magnificent Seven just as the companies could begin reaping the rewards of their massive AI investments. Years of data center spending have weighed on their balance sheets, but he expects that infrastructure to increasingly generate returns. "If the rest of the market was doing nothing, then it would be fine that the Magnificent Seven are doing nothing," Cramer said. "That's not the case."
Cramer's Charitable Trust, the portfolio run by CNBC's Investing Club, owns shares of Alphabet, Amazon, Apple, Meta, Microsoft, and Nvidia.
Sign up now for the CNBC Investing Club to follow Jim Cramer's every move in the market.
Questions for Cramer?
Call Cramer: 1-800-743-CNBC
Want to take a deep dive into Cramer's world? Hit him up!
Mad Money Twitter - Jim Cramer Twitter - Facebook - Instagram
Questions, comments, suggestions for the "Mad Money" website? madcap@cnbc.com`,
    bodyJa: `CNBCのジム・クレイマー氏は木曜日、「マグニフィセント・セブン」を再考する時期が来たと述べ、数カ月間のパフォーマンス不振により、これら元市場リーダーの多くが無視できないほど割安になったと断言した。
「私たちはマグニフィセント・セブンの復讐を目撃しているが、ほとんどの人はそれを知らないようだ」と「マッドマネー」の司会者は語った。 「今が買い時だと思います。」
デルやスノーフレークなどの銘柄は今年急騰した一方、マグ7銘柄の多くは後れを取っており、S&P500の年初来上昇率13%で測ると市場全体にも後れを取っている。
クレイマー氏は、投資家が新たな勝者に引き寄せられる中、アップルを除いてアマゾン、アルファベット、メタ、マイクロソフト、テスラは相対的に出遅れていると述べた。 NvidiaはAppleと同様、年初来で市場を上回っているが、株価収益率が非常に低いため、Cramer氏はNVIDIAを残りの企業と一括りにしていた。
「私たちはこの市場のかつてのリーダー、忘れ去られたマグセブンに立ち返って選ばなければなりません。なぜなら、それらの多くが本当に安くなっているからです」と彼は説明した。 「株価収益率で見ると、彼らは大きく遅れをとっており、それは明らかに間違っています。」
以下は、Cramer が 7 つのマグ 7 のうち 6 つにわたって観察している触媒の概要です。
- アマゾン ウェブ サービス、広告、国際事業全体で好調であるにもかかわらず、今年のアマゾンの株価はわずか 12% 上昇しています。投資家はアマゾンがAIインフラに巨額の資金を投じていることを懸念しているが、クレイマー氏は、こうした投資は相当な利益を生み出せる段階に近づいていると述べた。 「アンディ・ジャシーのような賢明な経営者が昔のようにアマゾンのバランスシートを破壊しようとするのには理由があるということを、私たちは皆忘れかけている」とクレイマー氏は語った。 「それは、彼らがこの支出で巨万の富を築くつもりだからです。...そしてそれが、これが爆買いである理由です。」
- アルファベットも同様に取り残されており、Google CloudやYouTube、Waymoなどの貴重な事業が継続的に成長しているにもかかわらず、9％以上増加していると同氏は述べた。クレイマー氏にとって、基礎となる事業の強さを考えると、単に株価が安すぎただけだという。
- 一方、メタ株は、同社が州司法長官から180億ドルで起こされた大規模な訴訟を解決し、クレイマー氏が潜在的により大きな財務リスクとみなしたものを取り除いた後でも、今年約7％下落している。同氏はまた、メタ社が最終的に余剰のAIコンピューティング能力を収益化する機会があるとも考えている。
- Cramer氏によると、年初から現在まで約5%上昇しているMicrosoftは、データセンターの電力確保に努める一方で、投資家に自社のAzureクラウドビジネスに対するより大きな可視性を提供しているという。
- エヌビディアは今年約22％上昇しているにもかかわらず、来年の予想利益のわずか14倍で取引されており、成長を考えると依然として割安すぎるとクレイマー氏は述べた。同氏は、チップメーカーがより大規模な自社株買いを発表すれば、株価はさらに押し上げられる可能性があると述べた。
- Cramer氏によると、Teslaはグループの中で最も投機的だという。株価は今年に入って約16％下落しており、クレイマー氏はスペースXとの統合の可能性が株価上昇のきっかけとなる可能性があると述べた。
最終的に、企業が大規模なAI投資の成果を享受し始める可能性があるのに、投資家はマグニフィセント・セブンから離れてしまったとクレイマー氏は述べた。長年にわたるデータセンターへの支出がバランスシートに重くのしかかっているが、同氏はインフラストラクチャーがますます収益を生み出すだろうと予想している。 「市場の残りの企業が何もしていないのなら、マグニフィセント・セブンも何もしていなくても大丈夫だろう」とクレイマー氏は語った。 「そんなことはないよ。」
CNBC の投資クラブが運営するポートフォリオである Cramer's Charitable Trust は、Alphabet、Amazon、Apple、Meta、Microsoft、Nvidia の株式を所有しています。
今すぐ CNBC Investing Club に登録して、市場におけるジム・クレイマーのあらゆる動きをフォローしてください。
クレイマーさんに質問ですか？
クレイマーに電話する: 1-800-743-CNBC
Cramer の世界を深く掘り下げてみませんか?彼を殴ってください！
マッドマネー Twitter - ジム・クレイマー Twitter - Facebook - Instagram
「Mad Money」Web サイトに関する質問、コメント、提案がありますか? madcap@cnbc.com`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/03/magnificent-seven-jim-cramer-says-time-to-buy.html",
    publishedAt: "2026-09-03T22:31:01+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "adobe-names-anil-chakravarthy-as-ceo-rep-ee08a2e7",
    title: "Adobe names Anil Chakravarthy as CEO, replacing Shantanu Narayen",
    titleJa: "アドビ、シャンタヌ・ナラヤンの後任としてアニル・チャクラヴァルシーをCEOに任命",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Adobe on Thursday named Anil Chakravarthy as its next president and CEO, succeeding Shantanu Narayen, who announced he would step down earlier this year.
Chakravarthy, who most recently served as president of Adobe's customer experience orchestration and worldwide field operations, will take the helm Dec. 1, the company said. He will also join Adobe's board.
Narayen will become executive chair and "work closely" with Chakravarthy during the transition, Adobe said. Narayen said last March he would leave his role after joining the company in 1998 and serving as the head of Adobe for 18 years.
"Adobe's opportunity ahead is limitless with our track record in creating new market vategories and world-class products," Narayen said in a statement. "Anil is an experienced transformational leader who leads with values, integrity and a deep knowledge of our business."
Adobe is tapping a new CEO as the company's stock has been pummeled due to investor concerns that artificial intelligence will disrupt software makers. After a boom in 2023, Adobe shares have slid since, losing 25% in 2024 and another 21% in 2025. The stock is down 18% so far in 2026.
Shares of Adobe fell about 2% in extended trading.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/03/adobe-anil-chakravarthy-ceo.html",
    publishedAt: "2026-09-03T20:52:23+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "lululemon-stock-plunges-15-on-disappoint-e74305d2",
    title: "Lululemon stock plunges 15% on disappointing earnings and outlook",
    titleJa: "ルルレモンの株価、期待外れの業績と見通しで15％急落",
    summaryJa: "ルルレモンの株価は木曜日、同小売業者がさらに期待外れの決算を発表し、今年の見通しを下方修正したことを受けて１５％急落した。同社は、第 2 会計四半期の収益が 4% 減少し、同様の売上高が 9% 減少したと報告しました。前四半期に見通しを引き下げたため、アパレル小売業者にとっては、これは直近の厳しい四半期にすぎなかった。",
    bodyOriginal: `Shares of Lululemon plunged 15% on Thursday after the retailer reported another quarter of disappointing results and cut its outlook for the year.
The company reported a 4% decline in revenue and a comparable sales decrease of 9% for the second fiscal quarter. It was only the latest rough quarter for the apparel retailer, after it reduced its guidance in the previous quarter.
Interim CEO Meghan Frank said on a call with analysts that the company experienced "negative commentary" on social media that affected its performance in the second quarter. The company also experienced a "greater-than-expected" slowdown in some of its core categories, including leggings.
"While we are seeing good guest reaction to our activations and some of our newer styles, the overall response to our product launches remains inconsistent, and we've continued to see pressure on the brand in both of our largest markets," Frank said.
For the third fiscal quarter, Lululemon said it expects revenue to be between $2.29 billion and $2.32 billion, a decline of roughly 10% to 11% from the prior year. It anticipates earnings of 93 cents to 98 cents per share for the period.
For the full year, Lululemon said it expects net revenue between $10.35 billion and $10.5 billion, representing a 5% to 7% decline, and down from its previous guidance of $11 billion to $11.15 billion. It anticipates earnings will be between $9.48 and $9.73 per share, compared to previous guidance of $10.95 to $11.15 per share. That new outlook includes a boost from tariff refunds, Lululemon added.
Here's how Lululemon performed in its second fiscal quarter compared with what Wall Street was expecting, based on a survey of analysts by LSEG:
- Earnings per share: $2.92, it was not immediately clear if that was comparable to the $1.79 expected
- Revenue: $2.42 billion vs. $2.46 billion expected
For the quarter, Lululemon reported net income of $329.2 million, or $2.92 per share, compared to $370.9 million, or $3.10 per share, the year prior.
The company said its gross profit decreased 1% to $1.5 billion while its gross margin grew 5.6%, boosted by a tariff refund of $134.5 million.
Frank said on the Thursday call that Lululemon management is focusing on introducing new styles and tightening inventory to return to sales growth.
"We know there is much more work to be done," Frank said. "Our management team leaders and employees are focused on serving our guests and executing initiatives to drive an inflection in our business."
Lululemon has been struggling to regain strength and relevancy among its customers even as it faces criticism from founder Chip Wilson. The company's new CEO, Heidi O'Neill, will take the reins of the retailer next week.`,
    bodyJa: `ルルレモンの株価は木曜日、同小売業者がさらに期待外れの決算を発表し、今年の見通しを下方修正したことを受けて１５％急落した。
同社は、第 2 会計四半期の収益が 4% 減少し、同様の売上高が 9% 減少したと報告しました。前四半期に見通しを引き下げたため、アパレル小売業者にとっては、これは直近の厳しい四半期にすぎなかった。
暫定最高経営責任者（CEO）のメーガン・フランク氏はアナリストとの電話会議で、同社がソーシャルメディア上で「否定的なコメント」を経験し、第2四半期の業績に影響を与えたと述べた。同社はまた、レギンスなどの中核カテゴリーの一部で「予想を上回る」減速を経験した。
「私たちのアクティベーションやいくつかの新しいスタイルに対するゲストの反応は良好ですが、製品の発売に対する全体的な反応は依然として一貫性がなく、私たちの最大の市場の両方でブランドに対する圧力が続いています」とフランク氏は述べた。
ルルレモンは、第3四半期の売上高が22億9000万ドルから23億2000万ドルになると予想しており、前年比約10％から11％減少すると述べた。同期の利益は1株当たり93セントから98セントになると予想している。
ルルレモンは、通期の純収益が103億5000万ドルから105億ドルになると予想していると述べ、これは5％から7％の減少に相当し、従来の見通しである110億ドルから111億5000万ドルから下方修正された。従来の見通しは1株当たり10.95～11.15ドルだったが、利益は1株当たり9.48～9.73ドルになると予想している。この新たな見通しには関税還付による後押しも含まれているとルルレモン氏は付け加えた。
LSEGによるアナリストへの調査に基づいた、ルルレモンの第2会計四半期の業績とウォール街の予想との比較は次のとおりです。
- 1株当たり利益: 2.92ドル、これが予想の1.79ドルに匹敵するかどうかはすぐには明らかではなかった
- 収益: 24 億 2,000 万ドル対予想 24 億 6,000 万ドル
この四半期、ルルレモンは純利益が 3 億 2,920 万ドル (1 株あたり 2.92 ドル) と報告しました。これに対し、前年同期は 3 億 7,090 万ドル (1 株あたり 3.10 ドル) でした。
同社は、売上総利益が１％減の１５億ドルとなった一方で、１億３４５０万ドルの関税還付により粗利益率が５．６％増加したと発表した。
フランク氏は木曜日の電話会議で、ルルレモンの経営陣は売上成長を取り戻すために新しいスタイルの導入と在庫の圧縮に注力していると述べた。
「私たちは、やるべきことがまだたくさんあることを知っています」とフランク氏は語った。 「当社の経営チームのリーダーと従業員は、お客様にサービスを提供し、ビジネスの変革を推進するための取り組みを実行することに重点を置いています。」
ルルレモンは、創業者チップ・ウィルソン氏からの批判に直面しながらも、顧客の間で強さと関連性を取り戻すのに苦労している。同社の新CEOハイディ・オニール氏が来週小売店の実権を引き継ぐことになる。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/03/lululemon-lulu-q2-2026-earnings.html",
    publishedAt: "2026-09-03T20:52:03+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "lululemon-s-sales-drop-raises-deeper-con-d1477f74",
    title: "Lululemon’s sales drop raises deeper concerns about the company’s turnaround",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `The stock is down as analysts question the yoga-wear maker’s fashion assortment.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/lululemons-sales-drop-raises-deeper-concerns-about-the-companys-turnaround-ddf9256a?mod=mw_rss_topstories",
    publishedAt: "2026-09-03T20:43:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-88079580",
    readTime: 2,
  },
  {
    id: "zscaler-stock-rises-on-earnings-beat-upb-f6501ab7",
    title: "Zscaler stock rises on earnings beat, upbeat guidance",
    titleJa: "ゼットスケーラー株、好業績と明るい見通しで上昇",
    summaryJa: "人工知能リスクの高まりがサイバーツールへの緊急需要を刺激する中、クラウドセキュリティ会社がウォール街の第4四半期決算予想を上回ったことを受け、木曜、ゼットスケーラー株は急騰した。LSEGの見積もりと比較した同社の業績は次のとおりです。",
    bodyOriginal: `Zscaler stock soared on Thursday after the cloud security company beat Wall Street's fiscal fourth-quarter estimates as rising artificial intelligence risk spurred urgent demand for cyber tools.
Here's how the company performed compared to LSEG estimates:
- Earnings per share: $1.19 adjusted vs. $1.09 expected
- Revenue: $898 million vs. $877 million expected
Revenue jumped 25% from about $719 million last year. Zscaler reported a net loss of $3.4million, a loss of 2 cents per share, up from a net loss of $17.6 million, a loss of 11 cents per share, a year ago.
CEO Jay Chaudhry highlighted the adoption of the company's Zero Trust cloud security architecture and innovative technology as driving forces behind the quarterly beat.
He told CNBC he's "very bullish" on the recently launched Zero Trust iteration for AI agents, which is gaining early momentum and is expected to accelerate rapidly into fiscal years 2028 and 2029.
"It's a longer-term opportunity, but I think it's a fantastic opportunity with significant barriers to entry," Chaudhry said.
Annual recurring revenue rose 25% from a year ago to $3.77 billion, beating a $3.75 billion estimate from StreetAccount.
Cybersecurity stocks have skyrocketed this year as increasingly sophisticated cyber models and the rise of agent-led attacks force businesses to adopt new security tools.
While competitors have notched new highs this year, Zscaler shares have plummeted 20%. Last quarter, the stock recorded its worst day ever after management adopted a "prudent approach" to guidance following two sales leader departures.
But Chaudhry says the market is missing the point on Zscaler's differentiation play.
"The core competency we bring to the table is pretty unique, and as the adoption of AI agents happens, the market will recognize more and more that Zscaler is a critical player," he said.
Like other cyber executives, Chaudhry views security for AI as one of the biggest opportunities. Over the last year, bookings totaled $100 million and grew more than 50% this quarter, sequentially.
Zscaler's guidance also beat estimates. For the fiscal first quarter, the company called for $935 million to $939 million in revenue and adjusted EPS of $1.15 to $1.16. That beat a revenue estimate of $927 million and adjusted EPS of $1.08 per share.
For the full year, the company anticipates revenue in the range of $3.91 billion and $3.94 billion, above the $3.90 billion estimate. Adjusted EPS is expected to range between $4.86 and $4.90, beating a $4.60 per-share estimate.`,
    bodyJa: `人工知能リスクの高まりがサイバーツールへの緊急需要を刺激する中、クラウドセキュリティ会社がウォール街の第4四半期決算予想を上回ったことを受け、木曜、ゼットスケーラー株は急騰した。
LSEGの見積もりと比較した同社の業績は次のとおりです。
- 1 株当たり利益: 調整後 1.19 ドル、予想 1.09 ドル
- 収益: 8 億 9,800 万ドル対予想 8 億 7,700 万ドル
売上高は昨年の約７億１９００万ドルから２５％増加した。ゼットスケーラーは、純損失が340万ドル（1株当たり2セントの損失）となり、1年前の純損失1,760万ドル（1株当たり11セントの損失）から拡大したと報告した。
CEO の Jay Chaudhry 氏は、同社のゼロトラスト クラウド セキュリティ アーキテクチャと革新的なテクノロジの採用が、四半期ごとのビートの原動力となっていると強調しました。
同氏はCNBCに対し、最近立ち上げられたAIエージェント向けのゼロトラスト導入について「非常に強気」だと語った。これは初期段階で勢いを増しており、2028年度と2029年度に向けて急速に加速すると予想されている。
「これは長期的な機会だが、参入障壁が大きい素晴らしい機会だと思う」とチョードリー氏は語った。
年間経常収益は前年比25％増の37億7000万ドルとなり、StreetAccountの予想37億5000万ドルを上回った。
サイバーモデルがますます洗練され、エージェント主導の攻撃が増加しているため、企業は新しいセキュリティツールの導入を余儀なくされており、今年サイバーセキュリティ株は急騰している。
競合他社が今年最高値を更新する一方、ゼットスケーラー株は20％急落した。前四半期には、2人の営業リーダーの辞任を受けて経営陣がガイダンスに対して「慎重なアプローチ」を採用したことを受けて、株価は史上最悪の日を記録した。
しかしチョードリー氏は、市場はズスケーラーの差別化戦略の要点を見逃していると言う。
「私たちが提供するコアコンピテンシーは非常にユニークであり、AIエージェントの採用が進むにつれて、市場はZscalerが重要なプレーヤーであることをますます認識するでしょう」と彼は言いました。
他のサイバー幹部と同様、チョードリー氏も AI のセキュリティが最大のチャンスの 1 つであると考えています。昨年の予約総額は 1 億ドルに達し、今四半期は引き続き 50% 以上増加しました。
ゼットスケーラーのガイダンスも予想を上回った。会計年度第 1 四半期について、同社は売上高 9 億 3,500 万ドルから 9 億 3,900 万ドル、調整後の EPS は 1.15 ドルから 1.16 ドルと予想しました。これは売上高予想の9億2,700万ドル、調整後1株当たりEPSの1.08ドルを上回った。
通期では売上高が予想の39億ドルを上回る39億1000万ドルから39億4000万ドルの範囲になると予想している。調整後のEPSは4.86ドルから4.90ドルの範囲になると予想されており、1株当たり予想の4.60ドルを上回っている。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/03/zscaler-zs-q4-earnings-2026.html",
    publishedAt: "2026-09-03T20:41:47+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "this-subtle-microsoft-change-could-be-a-d380927f",
    title: "This subtle Microsoft change could be a big win for investors",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `The tech giant is altering how it reports the performance of different business categories in a way that analysts say will make it easier to gauge AI and Azure momentum.`,
    bodyJa: `テクノロジー大手は、AIとAzureの勢いを測りやすくするために、さまざまなビジネスカテゴリーの業績報告方法を変更しているとアナリストらは言う。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/this-subtle-microsoft-change-could-be-a-big-win-for-investors-bfacfb17?mod=mw_rss_topstories",
    publishedAt: "2026-09-03T20:37:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-99465391",
    readTime: 2,
  },
  {
    id: "the-big-august-jobs-report-is-due-out-fr-5221d21d",
    title: "The big August jobs report is due out Friday. Here's what to expect for what has been a jobless summer",
    titleJa: "8月の主要な雇用統計は金曜日に発表される予定だ。仕事のない夏に何が起こるのか",
    summaryJa: "金曜日に発表される8月の雇用統計は、比較的失業率が高かった夏に最終仕上げを行うと予想されている。ダウ・ジョーンズのコンセンサス予想によると、予想が維持されれば、労働統計局の非農業部門雇用者数の伸びはわずか5万3000人にとどまるだろう。貧血の成長率を考慮しても、失業率を4.1％に維持するには十分だと予想される。",
    bodyOriginal: `The August jobs report set to be released Friday is expected to put the final touches on what has been a relatively jobless summer.
If expectations hold, the Bureau of Labor Statistics count will show growth of just 53,000 in nonfarm payrolls, according to the Dow Jones consensus estimate. Even with the anemic growth rate, that is expected to be enough to keep the unemployment rate at 4.1%.
More broadly, though, the report would follow counts for June and July that together showed a net loss of 3,000 jobs. Also, the initial August numbers have been revised lower for the past four years in a row.
Together, the data suggest a labor market in neither boom nor bust mode — one that is increasingly becoming an afterthought for Federal Reserve officials looking to plot their next monetary policy action.
The current state of the jobs picture is "stable but unexciting," said Dan North, senior economist for Allianz Trade North America.
"I don't see a whole lot of really robust growth, which is understandable because if you're an employer, you're sitting here and you've got a war going on, energy prices going up and down, tariffs, and the administration changing everything overnight from day to day," he added. "So you've got a lot of uncertainties out there."
Indeed, geopolitical uncertainty and the impact of artificial intelligence are two dominant labor market themes, along with a shrinking labor force that has helped keep the unemployment rate in check.
Despite the various pressures, companies have avoided widespread layoffs. Weekly jobless claims have been in check, and the total layoff pace in 2026 is the slowest in four years, according to outplacement consultants Challenger, Gray & Christmas.
Fed officials in recent days have said they consider the labor market far less of a concern than inflation. Governor Michael Barr earlier this week characterized the situation as "stable" and Governor Christopher Waller said Thursday the jobs picture is in "satisfactory shape" — hardly ringing endorsements, but enough to allow the Fed to consider raising rates without disturbing the labor market if inflation doesn't ease further.
"Monthly payrolls readings have been softer in recent months, but low jobless claims and a steady unemployment rate have kept Fed officials unconcerned about the labor market," Citigroup economist Andrew Hollenhorst said in a note.
Citi sees the August count at just 20,000 new jobs, following a loss of 23,000 in July, and a potential tick up in the unemployment rate to 4.2%. But Hollenhorst expects the Fed will see those numbers as "stable" and not cause for broader concern.
Still, Citi thinks the Fed's next move will be a cut. Comments from Waller on inflation pushed traders to price in the likelihood the Fed would hold at its meeting in less than two weeks.
August's report will be influenced by several factors outside the usual seasonal issues.
The government in July canceled its Temporary Protected Status for thousands of Haitians, possibly lowering the employment rolls. The move has been projected to impact 350,000 Haitians.
At the same time, Vanguard said its proprietary data on 401(k) accounts indicates a gain of just 8,000 jobs for the month, owing in some part to a "noticeable decline" in hiring in the 21-to-24 age bracket.`,
    bodyJa: `金曜日に発表される8月の雇用統計は、比較的失業率が高かった夏に最終仕上げを行うと予想されている。
ダウ・ジョーンズのコンセンサス予想によると、予想が維持されれば、労働統計局の非農業部門雇用者数の伸びはわずか5万3000人にとどまるだろう。貧血の成長率を考慮しても、失業率を4.1％に維持するには十分だと予想される。
しかし、より広範には、報告書は6月と7月の統計を追跡し、合計で3,000人の雇用の純損失が示されることになる。また、8月当初の数字は過去4年連続で下方修正されている。
これらのデータを総合すると、労働市場が好況でも不況でもないことを示唆しているが、次の金融政策措置を計画しようとしている連邦準備理事会当局者らにとって、こうした状況はますます後回しになりつつある。
アリアンツ・トレード・ノース・アメリカのシニアエコノミスト、ダン・ノース氏は、雇用情勢の現状は「安定しているが、刺激的ではない」と述べた。
「本当に堅調な成長はあまり見られない。それは当然だ。なぜなら、あなたが雇用主なら、ここに座っていても戦争が続いていて、エネルギー価格が上下し、関税がかかり、政権が一夜にして日々すべてを変えているからだ」と同氏は付け加えた。 「つまり、そこには多くの不確実性があるのです。」
実際、地政学的不確実性と人工知能の影響は、失業率の抑制に貢献してきた労働力人口の減少とともに、労働市場の2つの主要なテーマである。
さまざまな圧力にもかかわらず、企業は大規模な人員削減を回避してきた。再就職コンサルタント会社チャレンジャー・グレイ・アンド・クリスマスによると、毎週の失業保険申請件数は抑制されており、2026年の解雇総額は過去4年間で最も遅いペースとなっている。
FRB当局者らはここ数日、労働市場はインフレよりもはるかに懸念事項ではないと考えていると述べている。マイケル・バー総裁は今週初めに状況を「安定している」と特徴付け、クリストファー・ウォーラー総裁は木曜日、雇用情勢は「満足のいく形」にあると述べた。大々的に支持するほどではないが、インフレが一段と緩和しない場合にFRBが労働市場を混乱させることなく利上げを検討できる程度には十分だという。
シティグループのエコノミスト、アンドリュー・ホレンホースト氏はノートで「毎月の雇用統計はここ数カ月軟調だが、失業保険申請件数の低さと失業率の安定により、連銀当局者は労働市場について無関心なままだ」と述べた。
シティは、7月に2万3000人減少したのに続き、8月の新規雇用数はわずか2万人にとどまり、失業率は4.2％に上昇する可能性があるとみている。しかしホレンホルスト氏は、FRBはこれらの数字を「安定」しており、より広範な懸念を引き起こすものではないとみなしていると予想している。
それでもシティはFRBの次の一手は利下げになると考えている。ウォーラー氏のインフレに関するコメントを受けて、トレーダーらはFRBが2週間以内に会合を開催する可能性を織り込むようになった。
8月の報告書は、通常の季節問題以外のいくつかの要因の影響を受けるだろう。
政府は7月、数千人のハイチ人に対する一時的保護ステータスを取り消し、これにより雇用者数が減少する可能性がある。この動きは35万人のハイチ人に影響を与えると予測されている。
同時にバンガードは、401(k)口座に関する独自のデータによると、21歳から24歳の年齢層における雇用の「顕著な減少」が一因で、同月の雇用の増加はわずか8,000人であると述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/03/august-2026-jobs-report-payrolls.html",
    publishedAt: "2026-09-03T19:38:09+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "vance-says-fed-should-lower-interest-rat-87120bb0",
    title: "Vance says Fed should lower interest rates: 'Would be nice to have some help'",
    titleJa: "バンス氏、FRBは利下げすべきと発言「何らかの支援があれば嬉しい」",
    summaryJa: "JDバンス副大統領は木曜日、住宅をより手頃な価格にするために連邦準備制度は金利を引き下げるべきだと述べ、ドナルド・トランプ大統領が中央銀行に対して借入コスト削減の圧力を強めていると述べた。この発言は、トランプ大統領が厳選してFRB議長に選んだケビン・ウォーシュ氏が、利上げによって高止まりするインフレに対処するという逆の行動の可能性をほのめかした数日後に行われた。",
    bodyOriginal: `The Federal Reserve should cut interest rates to make homes more affordable, Vice President JD Vance said Thursday, adding to the pressure President Donald Trump has placed on the central bank to cut borrowing costs.
The remarks came days after Trump's handpicked Fed chair, Kevin Warsh, hinted at the possibility of doing the opposite: addressing persistently high inflation by hiking rates.
"Obviously the president cares a lot about interest rates," Vance said at a White House press briefing when asked by CNBC's Eamon Javers for the Trump administration's view on the volatile U.S. bond market.
"One of the main reasons he cares a lot about interest rates is because he wants Americans to be able to afford a home," Vance said, referencing Trump. "When interest rates go higher, that means that borrowing costs are higher."
"We believe that the Fed should be lowering interest rates," he said, calling it the "proper and responsible" response to recent U.S. inflation data.
Vance added, "We're doing a lot of things to try to keep those interest rates down, but it would be nice to have some help from the Federal Reserve."
Vance's remarks may add to concerns about the erosion of the Fed's independence under Trump, who aggressively pushed Warsh's predecessor to slash rates and is trying to fire Governor Lisa Cook.
Less than a week earlier, Warsh said he is committed to bringing the inflation rate back down to the Fed's 2% target, and sees interest rates as the key tool to rein it in.
"Short-term interest rates are the predominant tool to achieve the dual mandate," he said at a speech in Jackson Hole, Wyoming.
Vance's remarks came less than two weeks before the Federal Open Market Committee is set to convene and decide whether or not to adjust rates.
The outcome of that meeting is far from certain: Traders are about evenly split on the odds of a rate hike at the Sept. 15-16 meeting, according to CME Group's FedWatch gauge.
On Tuesday, Fed Governor Michael Barr said he would be prepared to back a rate increase if inflation stays elevated.
But on Thursday morning, Governor Christopher Waller said he is more likely to keep rates steady.`,
    bodyJa: `JDバンス副大統領は木曜日、住宅をより手頃な価格にするために連邦準備制度は金利を引き下げるべきだと述べ、ドナルド・トランプ大統領が中央銀行に対して借入コスト削減の圧力を強めていると述べた。
この発言は、トランプ大統領が厳選してFRB議長に選んだケビン・ウォーシュ氏が、利上げによって高止まりするインフレに対処するという逆の行動の可能性をほのめかした数日後に行われた。
バンス氏はホワイトハウスの記者会見で、ＣＮＢＣのイーモン・ジャバース氏から不安定な米債券市場に対するトランプ政権の見解を問われ、「大統領が金利を非常に気にしているのは明らかだ」と述べた。
バンス氏はトランプ氏について言及し、「彼が金利を非常に気にする主な理由の一つは、米国人に住宅を購入できるようにしたいからだ」と語った。 「金利が上昇すると、借入コストが上昇することを意味します。」
同氏は「われわれはFRBが金利を引き下げるべきだと考えている」と述べ、これが最近の米インフレ統計に対する「適切かつ責任ある」対応だと述べた。
バンス氏は「われわれは金利を引き下げるために多くのことを行っているが、連邦準備理事会から何らかの支援が得られるとうれしい」と付け加えた。
ヴァンス氏の発言は、ウォーシュ前任者に利下げを積極的に推進し、リサ・クック総裁の解任を画策しているトランプ政権下でFRBの独立性が損なわれるのではないかとの懸念を高める可能性がある。
それから1週間も経たないうちにウォーシュ氏は、インフレ率をFRBの目標である2％に戻すことに全力で取り組んでおり、金利を抑制するための重要なツールであると考えていると述べた。
同氏はワイオミング州ジャクソンホールでの講演で「短期金利は二重の責務を達成するための主要な手段だ」と述べた。
バンス氏の発言は、連邦公開市場委員会が開催され、金利を調整するかどうか決定するまで２週間を切った。
会合の結果は確実とは程遠い。CMEグループのフェドウォッチ指標によると、9月15日と16日の会合で利上げが行われる可能性について、トレーダーの意見はほぼ均等だという。
マイケル・バーFRB理事は火曜日、インフレ率が高止まりすれば利上げを支持する用意があると述べた。
しかし木曜日朝、クリストファー・ウォーラー総裁は金利を据え置く可能性が高いと述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/03/vance-fed-interest-rates-trump-bond-yields.html",
    publishedAt: "2026-09-03T19:18:59+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 2,
  },
  {
    id: "wall-street-is-betting-on-fed-chair-kevi-141803f4",
    title: "Wall Street is betting on Fed Chair Kevin Warsh to keep a manic bond market from unraveling",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `The market “needs stability and trust” as a deluge of corporate bond supply is expected in the coming months.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/wall-street-is-betting-on-fed-chair-kevin-warsh-to-keep-a-manic-bond-market-from-unraveling-03bbd093?mod=mw_rss_topstories",
    publishedAt: "2026-09-03T19:09:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-06729967",
    readTime: 2,
  },
  {
    id: "openai-begins-rolling-out-astra-model-af-28f7d1af",
    title: "OpenAI begins rolling out Astra model after warning of its advanced cyber capabilities",
    titleJa: "OpenAIは、その高度なサイバー能力について警告を受け、Astraモデルの展開を開始",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `OpenAI on Thursday announced it will begin rolling out its latest artificial intelligence model, GPT-6 Astra, which the company said is the product of "years of research and big bets."
The model is launching in phases, and OpenAI said a limited group of companies participating in its application-based cybersecurity program Daybreak will be the first to get access. OpenAI disclosed earlier this week that Astra is its first model to reach its "Critical" internal cybersecurity threshold, and said it planned to limit access to those advanced capabilities.
OpenAI has been under pressure to shore up its security and safety protections after two of its models escaped containment, accessed the open web and breached Hugging Face's systems last month.
The company temporarily paused some of its research and training efforts following the incident, including for Astra, even though it was not one of the models involved.
"AI can only benefit people when safety is a core part of it, and so we're putting more compute and effort towards safety, security, alignment than ever before," OpenAI President Greg Brockman said during a briefing with reporters on Thursday.
The company added additional safeguards to Astra following the Hugging Face breach, and it said Tuesday that it believes those safeguards "sufficiently minimize the risk of severe harm for release."
Astra will roll out to users across OpenAI's ChatGPT Plus, Pro, Business, Enterprise plans, as well as through the OpenAI API and Amazon Web Services in "the coming days," OpenAI said.
In addition to its advanced cybersecurity capabilities, Astra is state-of-the-art across functions like computer use, software engineering, professional work and science OpenAI said. The model is also better at staying oriented, respecting task boundaries, understanding user intent, completing tedious tasks and carrying out multi-step workflows, according to a release.
"There's still more to do, I think that there's still lots of improvements to be made, but there is something significant here that I think is qualitatively improved, and that that to me is, is what is significant and a real shift in what kind of work people can delegate to AI and how it can empower them," Brockman said.
OpenAI has spent much of the last year courting business customers in the fiercely competitive enterprise market, where it is racing against rivals including Anthropic and Google.
CFO Sarah Friar told employees last month that its enterprise unit now accounts for more revenue than its consumer business, as CNBC previously reported, which makes it a crucial revenue engine as it gears up for what is widely expected to be a blockbuster IPO.
The company confidentially filed its prospectus with the Securities and Exchange Commission in June, but it has not officially disclosed when it plans to debut. Friar recently told employees that OpenAI "will be a public company in 2027," but said the company could go out sooner if "our business continues to inflect."
WATCH: OpenAI implements stronger safeguards for new Astra Model`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/03/open-ai-astra-gpt-6-cyber.html",
    publishedAt: "2026-09-03T18:00:02+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "chargepoint-ceo-says-50-stock-surge-is-t-bbb4a633",
    title: "ChargePoint CEO says 50% stock surge 'is the beginning of the momentum'",
    titleJa: "ChargePoint CEO、株価50％上昇は「勢いの始まり」と語る",
    summaryJa: "ChargePoint Holdings CEOのリック・ウィルマー氏は、木曜日の電気自動車充電会社の株価急騰は「勢いの始まり」に過ぎないと考えているとCNBCに語った。ChargePointの株価は、同社がウォール街の2027会計年度第2四半期予想を大幅に上回り、業績の継続的な改善に導かれた後、序盤の取引で50％以上上昇した。",
    bodyOriginal: `ChargePoint Holdings CEO Rick Wilmer believes a surge in the electric vehicle charging company's stock Thursday is just "the beginning of the momentum," he told CNBC.
Shares of ChargePoint increased more than 50% during early trading after the company significantly beat Wall Street's second-quarter expectations for its 2027 fiscal year and guided toward continued improvements in its performance.
It's the most notable increase since it underwent a reverse stock split last year to raise its share price and maintain compliance with the New York Stock Exchange's minimum trading price requirement of $1 per share.
"The growth is starting to accelerate," Wilmer told CNBC during an interview Thursday morning. "It'll be driven substantially by the new products and technology we're putting into the market."
ChargePoint, unlike some EV charging companies, does not actually own and operate its chargers. It provides hardware, software and services to customers, such as businesses, that want to offer chargers to their employees or customers.
The company after markets closed Wednesday reported revenue of $116.1 million and a loss per share of 35 cents during the quarter. That compared with analyst expectations of $105.2 million in revenue and a loss of 85 cents, according to average estimates compiled by LSEG.
Its performance was assisted by a one-time tariff refund of approximately $4.2 million in the quarter, but the company said its normalized gross margin would have still set a new record without the benefit.
"We've now had our fourth consecutive quarter of year-over-year growth, and this quarter we just reported yesterday was obviously another good growth quarter," Wilmer said. "And now [we're] expecting that to accelerate, especially as we move into next year."
As part of its growth plan, the company has been introducing faster high-performance chargers, known as "Level 3," in Europe, as well as next-generation products for the U.S., including Level 2 and Level 3 chargers.
The company also is using artificial intelligence to improve charging times for its customers, reduce how long it takes to develop software and improve efficiency across its business, Wilmer said.
Wilmer's optimism comes despite a slowdown in all-electric vehicle sales during the past year, following the elimination of federal support for the industry in the U.S., including the end of an up to $7,500 consumer benefit for purchasing an EV.
"I think, altogether, the down cycle, or the doom and gloom, has been a bit overstated. I think there's a lot more positivity at the ground level," Wilmer said. "I just think in the end, better products can win."
U.S. automakers are continuing to sell EVs, and demand in the used vehicle market is strong amid high gas prices, but the move to non-gas-powered vehicles has been significantly lower than many companies and analysts previously expected.
ChargePoint is toward the end of a three-year business plan spearheaded by Wilmer that focused on reducing cash burn and profits, including cutting net losses from $125.3 million three years ago to $35.6 million during its most recent quarter.
The company has not disclosed when it plans to be profitable, but Wilmer said the company is on its way to achieve a profit on an earnings before interest, taxes, depreciation and amortization basis.
"We're approaching that quickly, and we want to get there ASAP," he said Thursday.
ChargePoint's third-quarter guidance for its 2027 fiscal year included revenue between $105 million and $115 million, which would be a mid-point increase of roughly 4% year-over-year.`,
    bodyJa: `ChargePoint Holdings CEOのリック・ウィルマー氏は、木曜日の電気自動車充電会社の株価急騰は「勢いの始まり」に過ぎないと考えているとCNBCに語った。
ChargePointの株価は、同社がウォール街の2027会計年度第2四半期予想を大幅に上回り、業績の継続的な改善に導かれた後、序盤の取引で50％以上上昇した。
これは、株価を引き上げ、1株あたり1ドルというニューヨーク証券取引所の最低取引価格要件の遵守を維持するために昨年株式併合を行って以来、最も注目すべき値上がりとなった。
「成長は加速し始めている」とウィルマー氏は木曜朝のインタビューでCNBCに語った。 「それは、私たちが市場に投入する新製品と技術によって大きく左右されるでしょう。」
ChargePoint は、一部の EV 充電会社とは異なり、実際に充電器を所有および運営していません。従業員や顧客に充電器を提供したい企業などの顧客に、ハードウェア、ソフトウェア、およびサービスを提供します。
水曜日の市場閉場後の同社は、同四半期の収益が1億1,610万ドル、1株当たり損失が35セントだったと報告した。これは、LSEGがまとめた平均予想によると、アナリスト予想の売上高1億520万ドル、損失85セントと比較した。
同社の業績は、同四半期に約420万ドルの一時関税還付によって支援されたが、この恩恵がなければ正規化された粗利益率は依然として新記録を樹立していただろうと同社は述べた。
「当社は4四半期連続で前年同期比成長を記録しており、昨日報告し​​たばかりのこの四半期も明らかに好調な成長四半期となった」とウィルマー氏は語った。 「そして現在、特に来年に向けてそれが加速すると予想しています。」
成長計画の一環として、同社は「レベル3」として知られるより高速な高性能充電器を欧州に導入するとともに、米国向けにもレベル2およびレベル3充電器を含む次世代製品を導入している。
同社はまた、人工知能を利用して顧客の充電時間を短縮し、ソフトウェア開発にかかる時間を短縮し、事業全体の効率を向上させているとウィルマー氏は述べた。
ウィルマー氏の楽観的な見方は、EV購入に対する最大7,500ドルの消費者給付金の打ち切りなど、米国における電気自動車業界に対する連邦政府の支援の廃止を受けて、過去1年間に完全電気自動車の販売が低迷したにもかかわらず来ている。
「総合的に見て、景気の低迷、あるいは絶望と憂鬱は少し誇張されていると思います。地上レベルではもっと前向きな雰囲気があると思います」とウィルマー氏は語った。 「最終的には、より優れた製品が勝つことができると私は考えています。」
米国の自動車メーカーはEVの販売を続けており、ガソリン価格の高騰を受けて中古車市場の需要は堅調だが、非ガソリン車への移行は多くの企業やアナリストがこれまで予想していたよりも大幅に低かった。
ChargePoint はウィルマー氏が主導する 3 か年事業計画の終わりに近づいており、純損失を 3 年前の 1 億 2,530 万ドルから直近四半期には 3,560 万ドルに削減するなど、キャッシュバーンと利益の削減に重点を置いています。
同社は黒字化の計画を明らかにしていないが、ウィルマー氏は、利払い前、税引き前、減価償却費ベースで利益を達成する方向に進んでいると語った。
同氏は木曜日、「我々は急速にそれに近づいており、できるだけ早くそこに到達したいと考えている」と語った。
ChargePoint の 2027 会計年度の第 3 四半期のガイダンスには、売上高が 1 億 500 万ドルから 1 億 1,500 万ドルと含まれており、これは前年比で約 4% 増加する中間点となります。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/03/chargepoint-ceo-50percent-stock-surge-is-the-beginning-of-the-momentum.html",
    publishedAt: "2026-09-03T16:08:18+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "carney-claps-back-at-lutnick-says-canada-e38fa952",
    title: "Carney claps back at Lutnick, says Canada will resume trade talks 'when the Americans are ready'",
    titleJa: "カーニー首相、ラトニック氏に拍手を送り、カナダは「アメリカ側の準備ができたら」通商交渉を再開すると語る",
    summaryJa: "カナダのマーク・カーニー首相は木曜日、トランプ政権のハワード・ラトニック商務長官がオタワが米国との貿易交渉を政治的目的で妨害したと主張したことを受けて反撃した。カーニー氏はオンタリオ州北西部サンダーベイでの記者会見で、「敬意を表しても、米国の任命された非選出閣僚がカナダ政治の専門家だとは思えない」と述べた。",
    bodyOriginal: `Canadian Prime Minister Mark Carney on Thursday returned fire after Trump administration Commerce Secretary Howard Lutnick claimed Ottawa tanked trade talks with the U.S. for political purposes.
"I don't think, with all respect, appointed, unelected cabinet members in the United States are experts on Canadian politics," Carney said during a press conference in Thunder Bay in northwest Ontario.
"We are always going to stand up for what's in the best interest of Canada," Carney said, after accusing the U.S. of making different claims about their red lines for a trade deal now that negotiations have been scrapped.
But the prime minister maintained that a deal benefiting both Canada and the U.S. is possible. "We're ready to sit down and strike that deal when the Americans are ready," he said.
President Donald Trump later Thursday morning appeared less open to rekindling the U.S. and Canada's chilly relations, however.
"It is very good for Canadian Politicians like Prime Minister Carney to make President Donald J. Trump 'the enemy,' until their Economy collapses," Trump wrote in a Truth Social post. "Then it will prove to be very bad for Politics — Worse than anything that has ever happened to a Canadian Politician. Just watch!"
Carney was responding to Lutnick's claim on CNBC's "Squawk Box" a day earlier that the Canadians "blew up" a nearly complete trade deal with the U.S. "for political reasons only."
Canada treated President Donald Trump "disrespectfully," but they will change their tune after mid-October "because their elections will be behind them," Lutnick asserted.
Canada has upcoming special elections, or byelections, in a handful of ridings, or parliamentary districts.
Negotiators walked away from trade talks last month after failing to clinch a deal before Trump's Aug. 22 deadline for new 50% tariffs on some $20 billion worth of Canadian imports.
Canada has retaliated with "dollar for dollar" tariffs on U.S. goods, which are set to take effect next week.
Each side has accused the other of making unreasonable last-minute demands. Lutnick said Wednesday that Canada tried to add tariff relief on medium- and heavy-duty trucks just hours before Trump's tariff deadline. U.S. Trade Representative Jamieson Greer has previously denied Carney's claim that Canadian French-language requirements were a sticking point in the trade talks.
Carney in Thursday's remarks pushed back. "There are a few issues that the United States was arguing right up to the last hour. Red lines weren't going to change ... 'our way or the highway, take it or leave it,' you know, attitude."
"All of a sudden they don't care about Canadian language or culture and those elements," Carney said, adding, "Good. We welcome that. We care about those issues."
On the dispute over trucks, Carney accused the U.S. of backtracking on its demands.
"They're like, 'Of course, we weren't going to keep them out.' Well, they were going to keep them out," he said. "Some of what they're saying now is different than what they were were drawing the line on."`,
    bodyJa: `カナダのマーク・カーニー首相は木曜日、トランプ政権のハワード・ラトニック商務長官がオタワが米国との貿易交渉を政治的目的で妨害したと主張したことを受けて反撃した。
カーニー氏はオンタリオ州北西部サンダーベイでの記者会見で、「敬意を表しても、米国の任命された非選出閣僚がカナダ政治の専門家だとは思えない」と述べた。
カーニー氏は、交渉が破棄された今、貿易協定の越えてはならない一線について米国が異なる主張をしていると非難した後、「われわれは常にカナダにとって最善の利益のために立ち上がるつもりだ」と述べた。
しかし首相は、カナダと米国の双方に利益をもたらす合意は可能だと主張した。同氏は「米国側の準備が整ったら、われわれは腰を据えて協定を締結する用意がある」と述べた。
しかし、木曜朝遅くにドナルド・トランプ大統領は、米国とカナダの冷え切った関係を再燃させることにあまり積極的ではないようだ。
トランプ氏はトゥルース・ソーシャルへの投稿で、「カーニー首相のようなカナダの政治家が、経済が崩壊するまでドナルド・Ｊ・トランプ大統領を『敵』にするのは非常に良いことだ」と述べた。 「そうなれば、それは政治にとって非常に悪いことになるだろう――これまでカナダの政治家に起こったどんな出来事よりも悪いことだ。ただ見てください！」
カーニー氏は前日、CNBCの「スコーク・ボックス」で、カナダ側が米国とのほぼ完全な貿易協定を「政治的理由だけで」「破棄」したとするラトニック氏の主張に反応していた。
カナダはドナルド・トランプ大統領を「無礼に」扱ったが、「選挙が控えているため」10月中旬以降は態度を変えるだろうとラトニック氏は主張した。
カナダでは今後、いくつかの選挙区または議会選挙区で特別選挙または補欠選挙が予定されています。
交渉担当者らは先月、約200億ドル相当のカナダからの輸入品に新たに50％の関税を課すトランプ大統領の期限である8月22日までに合意をまとめることができなかったため、通商交渉から離脱した。
カナダは来週発効する予定の米国製品に対する「ドル対ドル」関税で報復した。
双方とも、土壇場で不当な要求をしたとして相手を非難している。ラトニック氏は水曜日、カナダがトランプ大統領の関税期限の数時間前に中型および大型トラックに対する関税緩和を追加しようとしたと述べた。ジェイミソン・グリア米通商代表は以前、カナダのフランス語要件が通商協議のネックになっているとするカーニー長官の主張を否定していた。
カーニー氏は木曜日の発言でこれを押し返した。 「米国が最後の1時間まで議論していた問題がいくつかある。レッドラインは変わるつもりはなかった…『我々の道か高速道路か、進むか離れるか』という態度だ。」
カーニー氏は「突然、彼らはカナダの言語や文化、それらの要素を気にしなくなった」と述べ、「それは良いことだ。我々はそれを歓迎する。我々はそれらの問題を気にしている」と付け加えた。
トラックをめぐる紛争に関してカーニー長官は、米国が要求を後退させていると非難した。
「彼らは『もちろん、彼らを締め出すつもりはなかった』という感じです。まあ、彼らは彼らを締め出すつもりだった」と彼は言った。 「彼らが今言っていることの一部は、彼らが線を引いていたことと異なっている。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/03/carney-lutnick-trump-trade-canada.html",
    publishedAt: "2026-09-03T16:06:13+00:00",
    category: "貿易",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
    readTime: 3,
  },
  {
    id: "nvidia-strikes-12-9bn-deal-to-buy-ai-pla-9721e161",
    title: "Nvidia strikes $12.9bn deal to buy AI platform Hugging Face",
    titleJa: "Nvidia、AIプラットフォームHugging Faceを買収するために129億ドルの契約を締結",
    summaryJa: "Nvidia、AIプラットフォームHugging Faceを買収するために129億ドルの契約を締結- 公開されました",
    bodyOriginal: `Nvidia strikes $12.9bn deal to buy AI platform Hugging Face
- Published
Nvidia has agreed to buy artificial intelligence platform Hugging Face in a deal valued at about $12.9bn (£9.5bn), one of the AI chipmaker's biggest acquisitions as it expands into software.
Hugging Face, founded in 2016, has become a popular online platform where developers and researchers can find, share and test AI models and tools.
It recently made headlines after rogue AI agents that escaped a testing environment appeared on its platform, raising questions about AI safety and oversight.
The deal would bring one of the world's largest AI developer communities into Nvidia and give it control of a leading open-source platform - an alternative to systems offered by OpenAI and Anthropic.
Nvidia is best known for making the advanced chips used to train and run AI systems. Demand for those chips has surged as companies race to build AI products.
The companies already work together to help developers use Nvidia's computing services through the platform.
According to the companies, Hugging Face is used by more than 18 million developers and hosts more than three million AI models. More than 200,000 companies use the platform, they said.
Nvidia said Hugging Face would remain open to developers and that users would not be required to use its chips or services.
Under the agreement, Nvidia will pay about $11.9bn to Hugging Face investors and offer up to $1bn in stock-based incentives to employees who join the company.
The deal could also help Nvidia expand its presence in AI software as some of its biggest customers, including Microsoft, Meta and OpenAI, develop their own chips.
Open-source AI models can be downloaded and adapted by users, unlike many AI systems that are controlled by a single company.
Supporters say the approach can make the technology more accessible to businesses, researchers and developers.
Yaël Ossowski, deputy director of advocacy group Consumer Choice Center, said the acquisition was "a vote of confidence in open AI" and suggested it could encourage competition by making AI tools more widely available to start ups and smaller companies.
The deal will be a "major victory for innovators and consumers worldwide" if Nvidia keeps Hugging Face open and accessible, he added.
The deal would also give Nvidia access to one of the world's largest AI developer communities as competition in the sector intensifies.
Founded by French entrepreneurs Clément Delangue, Julien Chaumond and Thomas Wolf, Hugging Face also provides datasets, software tools and cloud services used to build AI applications.
Hugging Face is backed by investors including Amazon, AMD and Intel.
Related topics
- Published26 August
- Published26 August`,
    bodyJa: `Nvidia、AIプラットフォームHugging Faceを買収するために129億ドルの契約を締結
- 公開されました
Nvidiaは、人工知能プラットフォームHugging Faceを約129億ドル（95億ポンド）相当の取引で買収することに同意した。これは、ソフトウェア分野への拡大におけるAIチップメーカーの最大の買収の1つである。
2016 年に設立された Hugging Face は、開発者や研究者が AI モデルやツールを検索、共有、テストできる人気のオンライン プラットフォームになりました。
最近では、テスト環境から逃げ出した不正な AI エージェントがプラットフォームに出現し、AI の安全性と監視に関する疑問が生じたことが話題になりました。
この契約により、世界最大の AI 開発者コミュニティの 1 つが Nvidia に加わり、OpenAI と Anthropic が提供するシステムの代替となる、主要なオープンソース プラットフォームの管理が Nvidia に与えられることになります。
Nvidia は、AI システムのトレーニングと実行に使用される高度なチップを製造していることで最もよく知られています。企業がAI製品の開発を競う中、これらのチップの需要が急増している。
両社はすでに、開発者がプラットフォームを通じて Nvidia のコンピューティング サービスを利用できるよう協力しています。
両社によると、Hugging Face は 1,800 万人以上の開発者によって使用されており、300 万以上の AI モデルをホストしています。 20万社以上の企業がこのプラットフォームを利用しているという。
Nvidiaは、Hugging Faceは引き続き開発者にオープンであり、ユーザーは同社のチップやサービスを使用する必要はないと述べた。
この契約に基づき、NVIDIA は Hugging Face の投資家に約 119 億ドルを支払い、入社する従業員には最大 10 億ドルの株式ベースのインセンティブを提供します。
また、Microsoft、Meta、OpenAIなどの最大顧客の一部が独自のチップを開発しているため、この提携はNvidiaがAIソフトウェア分野での存在感を拡大するのにも役立つ可能性がある。
単一企業によって管理される多くの AI システムとは異なり、オープンソース AI モデルはユーザーがダウンロードして適応させることができます。
支持者らは、このアプローチにより企業、研究者、開発者がこの技術をより利用しやすくできると主張している。
権利擁護団体コンシューマー・チョイス・センターの副所長ヤエル・オソウスキー氏は、この買収は「オープンAIに対する信任投票」であると述べ、新興企業や中小企業がAIツールをより広く利用できるようにすることで競争を促す可能性があると示唆した。
NvidiaがHugging Faceをオープンでアクセスし続ければ、この契約は「世界中のイノベーターと消費者にとって大きな勝利」になるだろうと同氏は付け加えた。
この提携により、この分野での競争が激化する中、Nvidiaは世界最大規模のAI開発者コミュニティへのアクセスも得られることになる。
フランスの起業家 Clément Delangue、Julien Chaumond、Thomas Wolf によって設立された Hugging Face は、AI アプリケーションの構築に使用されるデータセット、ソフトウェア ツール、クラウド サービスも提供しています。
Hugging Face は、Amazon、AMD、Intel などの投資家によって支援されています。
関連トピック
- 8 月 26 日発行
- 8 月 26 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cr4vnr5g1k7o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-03T16:01:39+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/d9a5/live/f7099cf0-a7a9-11f1-aed2-8d6da8d75094.jpg",
    readTime: 4,
  },
  {
    id: "elon-musk-starts-spending-his-midterm-el-5adcd179",
    title: "Elon Musk starts spending his midterm election millions, revealing his key Senate targets",
    titleJa: "イーロン・マスク氏、中間選挙で数百万ドルを使い始め、上院の主要目標を明らかに",
    summaryJa: "イーロン・マスク率いるスーパーPACは、共和党の最も重要な選挙激戦区の一部に最初の中間資金をつぎ込み、上院7選挙区と激戦の少数の下院選挙区に80万ドル以上を費やしていると、連邦選挙委員会が新たに明らかにした。アメリカPACによる支出は、テスラとスペースXの最高経営責任者（CEO）が政治活動をどこに向けているのかをこれまでで最も明確に示している。かつて民主党を支持していた富豪が今年11月、共和党の選出を支援する取り組みに同グループに最大1億2000万ドルの支出を許可したと伝えられている。",
    bodyOriginal: `Elon Musk's super PAC is putting its first midterm money behind some of the GOP's most important election battlegrounds, spending more than $800,000 across seven Senate races and a handful of competitive House districts, according to a new Federal Election Commission disclosure.
The spending by America PAC offers the clearest look yet at where the Tesla and SpaceX CEO is directing his political operation, after the billionaire who previously supported Democrats reportedly authorized the group to spend as much as $120 million on an effort to help elect Republicans this November.
Nearly 90% of the $800,475 disclosed Wednesday night went toward Senate races, with the largest share — more than $247,000 — spent in Texas to support Republican Attorney General Ken Paxton and oppose Democrat James Talarico in an increasingly competitive contest.
Paxton has struggled to keep pace with Talarico's spending. As of Aug. 20, Talarico's campaign had spent more than $25 million on advertising since the general election began in late May, compared with just $119,000 by Paxton's campaign, according to AdImpact data cited by the Texas Tribune.
America PAC had been increasingly targeting Talarico on social media before the newly disclosed expenditures.
The group also spent about $170,000 in Maine, where Republican Sen. Susan Collins is seeking reelection, and nearly $106,000 in Ohio to support Republican Sen. Jon Husted. The PAC disclosed another $91,459 in New Hampshire, $54,600 in Iowa, $25,605 in Michigan and $17,235 in Alaska.
The expenditures were made between Aug. 18 and Aug. 31, with the disclosure also listing two expenditures scheduled for Sept. 10. All were categorized as printing expenses, indicating the money was being used for mail advertising.
America PAC spent much less on House races, which are usually cheaper than statewide races, directing nearly $90,000 across eight contests. The spending benefited Republican Reps. Derrick Van Orden of Wisconsin, Mike Lawler of New York, Jen Kiggans of Virginia, Tom Kean Jr. of New Jersey, and Scott Perry, Rob Bresnahan and Ryan Mackenzie of Pennsylvania, as well as Republican Scott Singer, who is challenging Democratic Rep. Jared Moskowitz in Florida.
The spending was disclosed days after House Speaker Mike Johnson, R-La., reportedly met with Musk in Texas while campaigning for Republicans in competitive congressional races. Johnson later told House Republican leaders about the meeting but did not say whether Musk had made any commitments about midterm spending.
"He's made public a lot of what he's doing," Johnson said to CBS News when asked about Musk's plans. "I'm not going to talk about our conversation on that point, but we're going to win the midterms."
Johnson did not immediately respond to a request for comment from CNBC.
Musk spent hundreds of millions of dollars supporting President Donald Trump and other Republican candidates in 2024, including more than $239 million given to America PAC. But he later appeared ready to retreat from that level of political involvement after joining the Trump administration to lead the Department of Government Efficiency, then having a public falling out with the president.
Asked last year whether he intended to continue spending at the same pace, Musk said he planned to spend "a lot less" on politics.
"I think I've done enough," Musk said.
But Musk has since repaired his relationship with Trump and Republican leaders. The New York Times reported in July that Musk had authorized America PAC to spend up to $120 million on a field program aimed at electing Republicans this November.
The latest expenditures are still just a fraction of that potential commitment.
They also come before America PAC has disclosed the latest influx of money financing its midterm push. FEC data covering the 2025-26 election cycle through June 30 show America PAC had raised $50.3 million and spent $52.3 million, leaving it with about $274,000 in cash on hand.`,
    bodyJa: `イーロン・マスク率いるスーパーPACは、共和党の最も重要な選挙激戦区の一部に最初の中間資金をつぎ込み、上院7選挙区と激戦の少数の下院選挙区に80万ドル以上を費やしていると、連邦選挙委員会が新たに明らかにした。
アメリカPACによる支出は、テスラとスペースXの最高経営責任者（CEO）が政治活動をどこに向けているのかをこれまでで最も明確に示している。かつて民主党を支持していた富豪が今年11月、共和党の選出を支援する取り組みに同グループに最大1億2000万ドルの支出を許可したと伝えられている。
水曜日の夜に明らかにされた80万475ドルのほぼ90％は上院選挙に充てられ、最大の24万7000ドル以上がテキサス州で共和党のケン・パクストン司法長官を支援し、激化する選挙戦で民主党のジェームズ・タラリコ氏に対抗するために使われた。
パクストンはタラリコの支出に追いつくのに苦労している。テキサス・トリビューンが引用したアドインパクトのデータによると、総選挙が始まった5月下旬以来、タラリコ陣営は8月20日の時点で2500万ドル以上を広告費に費やしているのに対し、パクストン陣営はわずか11万9000ドルだった。
アメリカPACは、新たに明らかになった支出の前から、ソーシャルメディア上でタラリコを標的にする動きが増えていた。
同グループはまた、共和党のスーザン・コリンズ上院議員が再選を目指しているメイン州で約17万ドル、オハイオ州で共和党のジョン・ハステッド上院議員を支援するために約10万6,000ドルを支出した。 PACは、ニューハンプシャー州でさらに9万1,459ドル、アイオワ州で5万4,605ドル、ミシガン州で2万5,605ドル、アラスカ州で1万7,235ドルを明らかにした。
支出は8月18日から8月31日の間に行われ、開示には9月10日に予定されている2件の支出も記載されている。いずれも印刷費に分類されており、その資金が郵便広告に使われていたことが示されている。
アメリカPACは、通常は州全体のレースよりも安価な下院レースへの支出を大幅に抑え、8つのコンテストで9万ドル近くを支出した。この支出は、ウィスコンシン州のデリック・ヴァン・オーデン議員、ニューヨーク州のマイク・ローラー議員、バージニア州のジェン・キガンズ議員、ニュージャージー州のトム・キーン・ジュニア議員、ペンシルベニア州のスコット・ペリー議員、ロブ・ブレスナハン議員、ライアン・マッケンジー議員に加え、フロリダ州で民主党のジャレッド・モスコウィッツ議員に対抗している共和党のスコット・シンガー議員にも恩恵をもたらした。
この支出は、マイク・ジョンソン下院議長（共和党、ルイジアナ州）が、議会選挙で共和党の選挙運動を行っていた際にテキサス州でマスク氏と会談したと報じられた数日後に明らかになった。ジョンソン氏はその後、下院共和党指導部らに会談について伝えたが、マスク氏が中期支出について何らかの約束をしたかどうかについては言及しなかった。
マスク氏の計画について尋ねられたジョンソン氏はCBSニュースに対し、「彼は自分のやっていることの多くを公表している」と語った。 「その点に関する私たちの会話について話すつもりはありませんが、私たちは中間選挙で勝つつもりです。」
ジョンソン氏はCNBCからのコメント要請にすぐには応じなかった。
マスク氏は2024年にドナルド・トランプ大統領と他の共和党候補者を支援するために数億ドルを費やし、その中にはアメリカPACに寄付された2億3,900万ドル以上が含まれている。しかしその後、トランプ政権に加わって政府効率省を率い、その後大統領と国民の間で不和が生じた後、同氏はそのレベルの政治的関与から撤退する用意ができているように見えた。
マスク氏は昨年、同じペースで支出を続けるつもりかとの質問に対し、政治への支出を「大幅に減らす」つもりだと答えた。
「十分なことをやったと思う」とマスク氏は語った。
しかしマスク氏はその後、トランプ氏や共和党指導部との関係を修復した。ニューヨーク・タイムズは7月、マスク氏がアメリカPACに今年11月の共和党議員選出を目的とした野外プログラムに最大1億2000万ドルを支出する権限を与えたと報じた。
最近の支出は、その潜在的な約束のほんの一部にすぎません。
これらはまた、アメリカPACが中期的な推進に資金を提供する最新の資金流入を明らかにする前に行われた。 6月30日までの2025～26年の選挙サイクルを対象としたFECデータによると、アメリカPACは5,030万ドルを調達し、5,230万ドルを支出し、手元現金は約27万4,000ドルとなっている。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/03/elon-musk-america-pac-election-senate-races.html",
    publishedAt: "2026-09-03T15:46:23+00:00",
    category: "自動車",
    imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    readTime: 5,
  },
  {
    id: "leon-black-sues-house-oversight-over-eps-639fc999",
    title: "Leon Black sues House Oversight over Epstein probe subpoenas, won't appear Thursday",
    titleJa: "レオン・ブラック氏、エプスタイン捜査の召喚状をめぐって下院監視を訴える、木曜には出廷しない",
    summaryJa: "アポロ・グローバル・マネジメントの元最高経営責任者（CEO）レオン・ブラック氏は木曜日、下院監視・政府改革委員会に対し、悪名高い性犯罪者ジェフリー・エプスタインとの関係捜査の一環として、自身が締結していた複数の機密保持契約に対する召喚状の差し止めと、同氏からの更なる証言の差し止めを求めて訴訟を起こした。ブラック氏は召喚状に従って木曜午前に監視委員会に出頭する予定だったが、これを拒否した。",
    bodyOriginal: `Former Apollo Global Management CEO Leon Black sued the House Oversight and Government Reform Committee on Thursday, seeking to block subpoenas for multiple nondisclosure agreements he was a party to and for further testimony from him as part of a probe of his and others' ties to notorious sex offender Jeffrey Epstein.
Black was due to appear before the Oversight committee on Thursday morning pursuant to a subpoena but refused to do so.
The committee instead held a closed-door session with an empty chair set aside for the missing billionaire.
Democrats on the panel called on it to formally hold Black in contempt "immediately."
One of the Democrats, Rep. Robert Garcia of California, said that "Black made women sign strict non-disclosure agreements ... to keep them quiet."
Committee Chairman Rep. James Comer, R-Ky., said if it were up to him, "I would hold him in contempt right now." But Comer added that he wanted to discuss the issue with the panel's lawyers to avoid harming its chances of obtaining the NDAs.
"I'm very disappointed," Comer said. "This is unacceptable."
"We need those non-disclosure agreements."
Black's attorneys say the NDAs sought by the committee have nothing to do with his dealings with Epstein, and that Black had no knowledge of crimes that led to the financial advisor's arrest on federal child sex trafficking charges in 2019.
The panel issued the subpoenas on June 26, right after Black refused to answer questions about the NDAs and walked out of an interview when he appeared for a closed-door session.
"The Committee is on a fishing expedition that oversteps its authority," one of the lawyers, Susan Estrich, said in a statement. "This is no longer about finding the truth about Epstein. It is about trying to destroy Mr. Black."
Estrich noted that Black had previously voluntarily appeared before the committee and said he also gave the panel "the only confidentiality agreement that Jeffrey Epstein knew about as part of Mr. Black's cooperation with the Committee's efforts to ferret out the truth about Epstein."
"Mr. Black never abused a woman," Estrich said. "He never was with an underage woman. He never engaged in sex trafficking. He never paid Epstein for access to women. He was never blackmailed by Epstein."
Black's lawsuit in U.S. District Court in Washington claims the two subpoenas issued to Black are "invalid to the extent they exceed" the committee's "delegated authority in seeking private information that bears no legitimate connection to OGR's legislative purpose."
"Additionally, the subpoenas would also expose women who value their privacy, who have no known or public connection to Epstein, who bargained for confidentiality and have refused to release it, and who have no ability to protect themselves and their privacy before the Committee," the suit says.
Black stepped down as Apollo CEO in March 2021, months earlier than originally planned, two months after the firm revealed he had paid Epstein $158 million for tax and estate planning advice from 2012 through 2017 despite knowing that the financial advisor had pleaded guilty in 2008 to soliciting prostitution from an underage girl in Florida.
Black testified to the House committee in June that, "The tax work was responsible for billions of dollars in savings."
Black also said then that Epstein duped him out of more than $60 million in financial advisory fees by falsely claiming that they were tax-deductible.
Epstein, 66, killed himself in a federal jail in New York in August 2019, weeks after his arrest on federal charges.
Comer, in a statement Thursday, said, "It's a shame Leon Black is hiding behind litigation rather than provide answers to the American people."
"Our investigation is examining how the federal government for decades failed survivors of Jeffery Epstein and Ghislaine Maxwell's crimes and how Mr. Epstein sought to curry favor with influential individuals to avoid scrutiny," Comer said.
"Mr. Black's testimony is crucial to our investigation as he was one of Mr. Epstein's fee paying clients and has several nondisclosure agreements."
Garcia, the ranking Democrat on the panel, said in a statement, "By refusing to testify today, Leon Black is now defying two Congressional subpoenas."
Garcia said Black had paid millions of dollars to women he had sexual relationships with, "some of whom were also connected to Epstein."
"He also paid $62.5 million to the U.S. Virgin Islands to avoid Epstein-related claims against him. Black's name is mentioned hundreds of times in the Epstein files."
"He funded Epstein's abuse and trafficking of women. Multiple women have also accused Black of sexual assault," Garcia said. "His connections to Epstein and his unwillingness to cooperate are unacceptable. We must hold him in contempt immediately."`,
    bodyJa: `アポロ・グローバル・マネジメントの元最高経営責任者（CEO）レオン・ブラック氏は木曜日、下院監視・政府改革委員会に対し、悪名高い性犯罪者ジェフリー・エプスタインとの関係捜査の一環として、自身が締結していた複数の機密保持契約に対する召喚状の差し止めと、同氏からの更なる証言の差し止めを求めて訴訟を起こした。
ブラック氏は召喚状に従って木曜午前に監視委員会に出頭する予定だったが、これを拒否した。
委員会は代わりに、行方不明の億万長者のために空の椅子を用意して非公開で会議を開催した。
委員会の民主党議員らは、黒人を「直ちに」正式に侮辱罪に定めるよう委員会に求めた。
民主党員の一人、カリフォルニア州選出のロバート・ガルシア下院議員は、「黒人は女性たちに口を閉ざすため、厳格な機密保持契約に署名させた」と述べた。
委員長のジェームズ・カマー下院議員（共和党、ケンタッキー州）は、もし自分次第なら「今すぐ彼を軽蔑するだろう」と述べた。しかしカマー氏は、NDAを取得するチャンスを損なうことを避けるために、この問題についてパネルの弁護士と話し合っていきたいと付け加えた。
カマーさんは「とても残念だ」と語った。 「これは容認できません。」
「私たちには機密保持契約が必要です。」
ブラック氏の弁護士は、同委員会が求めた秘密保持契約はエプスタイン氏との取引とは何の関係もなく、ブラック氏は2019年に連邦児童性的人身売買容疑で財務顧問が逮捕された原因となった犯罪について知識がなかったと主張している。
委員会は6月26日に召喚状を発行したが、それはブラック氏が秘密保持契約に関する質問に答えることを拒否し、非公開セッションに出廷した際にインタビューから立ち去った直後だった。
弁護士の一人、スーザン・エストリッチ氏は声明で「委員会は権限を超えた漁業遠征を行っている」と述べた。 「これはもはやエプスタインに関する真実を見つけることではありません。それはブラック氏を潰そうとすることです。」
エストリッチ氏は、ブラック氏が以前に自発的に委員会に出頭したことを指摘し、「エプスタイン氏に関する真実を探る委員会の取り組みに対するブラック氏の協力の一環として、ジェフリー・エプスタイン氏が知っていた唯一の秘密保持契約」も委員会に渡したと述べた。
「ブラック氏は女性を虐待したことは一度もなかった」とエストリッチ氏は語った。 「彼は未成年の女性と付き合ったことは一度もなかった。性的人身売買に関わったこともなかった。女性との接触のためにエプスタインにお金を払ったこともなかった。エプスタインから脅迫されたこともなかった。」
ワシントン連邦地方裁判所でのブラック氏の訴訟では、ブラック氏に発行された2件の召喚状は、委員会の「OGRの立法目的と正当な関連性のない個人情報を求める委任された権限」を「超える限り無効」であると主張している。
「さらに、召喚状はプライバシーを重視する女性、エプスタインとの公知の関係も公的関係も持た​​ない女性、機密保持を求めて秘密の公開を拒否した女性、そして委員会の前で自分自身とプライバシーを守る能力のない女性も摘発することになる」と訴状は述べている。
ブラック氏は当初の計画より数カ月早く、2021年3月にアポロのCEOを辞任した。その2カ月後、エプスタイン氏は2008年にフロリダ州で未成年の少女に売春を斡旋した罪で有罪を認めていたことを知っていたにもかかわらず、2012年から2017年にかけて税金と財産計画のアドバイスとしてエプスタイン氏に1億5,800万ドルを支払ったと同社が明らかにした。
ブラック氏は６月、下院委員会で「税務業務のおかげで数十億ドルの節約ができた」と証言した。
ブラックはまた、エプスタインが6000万ドル以上の金融顧問料を税金控除の対象であると偽って騙し取ったと当時も述べた。
66歳のエプスタイン被告は、連邦容疑で逮捕されてから数週間後の2019年8月、ニューヨークの連邦刑務所で自殺した。
カマー氏は木曜の声明で、「レオン・ブラック氏が米国民に答えを示さず、訴訟の陰に隠れているのは残念だ」と述べた。
「我々の捜査は、連邦政府がジェフリー・エプスタイン氏とギスレーヌ・マクスウェル氏の犯罪の生存者たちを何十年にもわたってどのように失敗させてきたのか、そしてエプスタイン氏が監視を避けるためにどのように影響力のある人物の好意を集めようとしたのかを調査している」とカマー氏は述べた。
「ブラック氏の証言は我々の捜査にとって極めて重要である。なぜなら彼はエプスタイン氏の報酬を支払っている顧客の一人であり、いくつかの機密保持契約を結んでいるからである。」
委員会の民主党有力議員ガルシア氏は声明で、「レオン・ブラック氏はきょう証言を拒否することで、議会からの２件の召喚状に反抗していることになる」と述べた。
ガルシア氏は、ブラック氏が性的関係を持った女性たちに数百万ドルを支払ったと述べ、「その中にはエプスタイン氏と関係のある女性もいた」と述べた。
「彼はまた、エプスタイン関連の自分に対する請求を避けるために、米領バージン諸島に6,250万ドルを支払った。ブラックの名前はエプスタインのファイルの中で何百回も言及されている。」
ガルシア氏は「エプスタイン氏の虐待と女性の人身売買に資金を提供していた。複数の女性もブラック氏を性的暴行で告発している」と述べた。 「彼のエプスタインとの関係や協力への消極性は容認できない。我々は直ちに彼を軽蔑しなければならない。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/03/leon-black-sues-house-oversight-epstein-probe-subpoenas.html",
    publishedAt: "2026-09-03T15:12:24+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 6,
  },
  {
    id: "how-to-invest-in-a-booming-stock-market-f6669583",
    title: "How to invest in a booming stock market that’s way cheaper than the S&P 500",
    titleJa: "S&P 500よりもはるかに安い急成長する株式市場に投資する方法",
    summaryJa: "ポーランドが新興市場から先進国に再分類されたことで、より多くの投資家による投資が可能になりました。",
    bodyOriginal: `Poland’s reclassification as a developed economy from an emerging market opens it up for investment by many more investors.`,
    bodyJa: `ポーランドが新興市場から先進国に再分類されたことで、より多くの投資家による投資が可能になりました。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/how-to-invest-in-a-booming-stock-market-thats-way-cheaper-than-the-s-p-500-b2f5ef5d?mod=mw_rss_topstories",
    publishedAt: "2026-09-03T14:57:00+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.mktw.net/im-36862352",
    readTime: 2,
  },
  {
    id: "hugging-face-approached-nvidia-s-huang-w-b83b7bfb",
    title: "Hugging Face approached Nvidia’s Huang weeks ahead of $12.9B acquisition, CEO tells CNBC",
    titleJa: "ハグ・フェイスは129億ドルの買収に先立ってNvidiaのフアン氏にアプローチしたとCEOがCNBCに語る",
    summaryJa: "Nvidia は、チップメーカーがハードウェアを超えて AI スタックのさらに上位に進む中、オープンソースの人工知能プラットフォーム Hugging Face を 129 億ドルで買収することに正式に同意しました。The Informationが先週報じて以来予想されていたこの提携により、Hugging Faceは「AIエコシステム全体のオープンプラットフォームであり続ける」とNVIDIAのCEO、ジェンセン・ファン氏は木曜日のブログ投稿で述べた。",
    bodyOriginal: `Nvidia has officially agreed to buy open-source artificial intelligence platform Hugging Face for $12.9 billion, as the chipmaker moves beyond hardware and further up the AI stack.
With the deal, which has been expected since The Information reported on it last week, Hugging Face will "remain an open platform for the entire AI ecosystem," Nvidia CEO Jensen Huang wrote in a blog post on Thursday.
"Together, we will scale Hugging Face's platform, strengthen its infrastructure and expand access to AI for developers and institutions worldwide," Huang wrote.
Hugging Face CEO Clément Delangue told CNBC on Thursday that the company approached Huang over the summer about a deal, "and a few weeks later, here we are."
"During the summer, I think we realized that Hugging Face and open source AI in general was at the turning point, and that it needed more, more resources, more scale, more visibility," he told CNBC's Becky Quick on "Squawk Box."
Delangue said he approached first because Nvidia was "a perfect home" for his company, adding that discussions went quite fast to get a deal done.
The acquisition marks Nvidia's second biggest on record, following the $20 billion purchase of assets from chipmaker Groq in December. Prior to that, its largest deal was the purchase of Israeli chipmaker Mellanox for almost $7 billion in 2019.
Nvidia has become the world's most valuable company due to the insatiable demand for its graphics processing units, which have powered the generative AI boom. Hugging Face marks a big bet on a popular AI platform, as Nvidia continues to show that it's more than just a chip company.
Hugging Face was recently at the center of a hacking incident that raised concerns about the rapid evolution of powerful AI and cybersecurity tools.
Delangue, a proponent of open-source models, blamed engineering mistakes for the recent attack on Hugging Face and said his company used an Nvidia version of a Chinese open model to resolve it.
Clement told CNBC on Thursday that the breach proved the importance of open models and the need for his company to "double down" on the proliferation of open source AI.
Huang said that the open source environment can give defenders an "asymmetric advantage" over attackers.
"When I say asymmetric capability, there are way more people who are protecting than there are people who are attacking," he explained. "And so, the benefit of having the community come together with open models, so that they can collaborate all transparently with each other, gives the defenders an asymmetric advantage."
WATCH: Huang says 'We're at the beginning of an industrial revolution'`,
    bodyJa: `Nvidia は、チップメーカーがハードウェアを超えて AI スタックのさらに上位に進む中、オープンソースの人工知能プラットフォーム Hugging Face を 129 億ドルで買収することに正式に同意しました。
The Informationが先週報じて以来予想されていたこの提携により、Hugging Faceは「AIエコシステム全体のオープンプラットフォームであり続ける」とNVIDIAのCEO、ジェンセン・ファン氏は木曜日のブログ投稿で述べた。
「我々は共にHugging Faceのプラットフォームを拡大し、そのインフラストラクチャを強化し、世界中の開発者や機関のAIへのアクセスを拡大していきます」とHuang氏は書いている。
ハギング・フェイスの最高経営責任者（CEO）クレマン・ドゥラング氏は木曜日、CNBCに対し、同社は夏の間にフアン氏に取引について打診し、「そして数週間後、ここに至った」と語った。
同氏はCNBCのベッキー・クイック番組「Squawk Box」で、「夏の間、私たちはHugging FaceとオープンソースAI全般が転換点にあり、より多くのリソース、より多くの規模、より多くの可視性が必要であることに気づいたと思う」と語った。
デラング氏は、NVIDIA が彼の会社にとって「完璧な本拠地」だったため、最初にアプローチしたと述べ、取引成立までの交渉は非常に迅速に進んだと付け加えた。
この買収は、12月にチップメーカーGroqから200億ドルで資産を買収したことに続く、NVIDIAにとって史上2番目に大きい買収となる。それ以前の最大の取引は、2019年にイスラエルのチップメーカーMellanoxを約70億ドルで買収したことだった。
Nvidia は、生成 AI ブームの原動力となったグラフィックス プロセッシング ユニットに対する飽くなき需要により、世界で最も価値のある企業になりました。 Nvidia が単なるチップ会社ではないことを示し続ける中、Hugging Face は人気の AI プラットフォームへの大きな賭けを意味します。
ハグ・フェイスは最近、強力なAIおよびサイバーセキュリティ・ツールの急速な進化に対する懸念を引き起こしたハッキン​​グ事件の中心人物となった。
オープンソース モデルの支持者であるデラング氏は、Hugging Face に対する最近の攻撃についてエンジニアリング上のミスを非難し、彼の会社はそれを解決するために中国のオープン モデルの Nvidia バージョンを使用したと述べた。
クレメント氏は木曜日、CNBCに対し、今回の侵害はオープンモデルの重要性と、同社がオープンソースAIの普及に「倍増」する必要性を証明したと語った。
Huang氏は、オープンソース環境により、防御側が攻撃側に対して「非対称的な優位性」を得ることができると述べた。
「非対称的な能力と言うとき、攻撃している人よりも守っている人の方がはるかに多いのです」と彼は説明した。 「そのため、コミュニティがオープン モデルで連携することで、相互に透過的に連携できるため、防御側に非対称的な利点がもたらされます。」
注目：フアン氏は「私たちは産業革命の始まりにいる」と語る`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/03/nvidia-agrees-to-buy-hugging-face-for-almost-13-billion-ai-expansion.html",
    publishedAt: "2026-09-03T14:38:25+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "households-warned-gas-price-spike-could-35cb7ae3",
    title: "Households warned gas price spike could pile fresh pressure on energy bills",
    titleJa: "家庭は、ガス価格の高騰により光熱費に新たな圧力がかかる可能性があると警告した",
    summaryJa: "家庭は、ガス価格の高騰により光熱費に新たな圧力がかかる可能性があると警告した- 公開されました",
    bodyOriginal: `Households warned gas price spike could pile fresh pressure on energy bills
- Published
Households across the UK are being warned to brace for higher energy bills this winter as European countries scramble to replenish their natural gas stores before the weather dips.
Wholesale natural gas prices are already at three-year highs, which could lead to increased energy bills for businesses and consumers.
Europe, which delayed its summer stockpiling due to high wholesale costs sparked by the Iran war, had been gambling the conflict would end before winter and prices would in turn fall.
Storage levels are significantly lower than usual for this time of year, with countries facing the prospect of rushing to buy gas now or paying potentially higher prices when the winter comes.
The European benchmark natural gas price topped €75/MWh on Wednesday, its highest level since late 2022, the tail end of a spike caused by Russia's invasion of Ukraine. Natural gas prices in the UK this week topped 185p per therm, also the highest since late 2022.
The price has jumped in the past week amid a return to hostilities between the US and Iran, with analysts fearing the renewed fighting will keep the key Strait of Hormuz closed even longer. Typically, around a fifth of the world's oil and liquefied natural gas (LNG) is transported through the waterway.
Hamad Hussain, senior climate and commodities economist at Capital Economics, said he did not expect the waterway to begin reopening until early 2027.
Even then, there will be a lag before energy is flowing freely through the strait and pressure on energy prices are eased.
"The risks to gas prices are definitely tilted towards the upside," Hussain told the BBC, warning that the gas price would top €80 by the end of this year.
Hussain recalled interviews with gas storage operators at the outbreak of the US-Israeli war in Iran saying they would wait three to four months for the crisis to ease before stocking up.
"We are about six months into the strait being effectively closed and that obviously has not happened," he added.
Higher wholesale gas prices feed through to household energy bills by helping determine regulator Ofgem's price cap.
The energy price cap rose in July, and will increase by 4% in October, leaving a typical household paying £1,723. But analysts at the energy consultancy Cornwall Insight have forecast domestic energy prices could rise a further 9% in the new year, bringing renewed concern to households during the coldest months.
Dr Craig Lowrey, principal consultant at Cornwall Insight, told the BBC on Thursday a fresh increase in wholesale prices would "increase pressure on our January price cap forecast".
However, he cautioned that there was "plenty of time to go" and a fall in wholesale prices could ease the pressure.
The Department for Energy Security and Net Zero (DESNZ) said gas prices are determined on international markets, dismissing criticism of the UK's own low levels of storage.
The boss of British Gas owner Centrica, Chris O'Shea, has repeatedly called for support from the government to expand its Rough storage facility in the North Sea, warning it has been unviable to fill it up and that it will close next year without a deal.
"We have almost no gas in storage in the UK for the coming winter and this is a huge concern as energy security is national security," he said on LinkedIn, external last week.
A DESNZ spokesman said: "We remain open to discussing proposals on all gas storage sites, as long as it provides value for money for taxpayers."
The department also pointed to Prime Minister Andy Burnham's pledge to cut VAT from energy bills from October, as well as government action to reduce Britain's reliance on natural gas altogether.
Ángel Talavera, chief European economist at Oxford Economics, said there is a "glass half full, and a glass half empty" picture unfolding.
On one hand, wholesale gas prices are significantly lower than during the crisis which followed Russia's full-scale invasion of Ukraine.
On the other, households and businesses will still face significantly higher energy bills than usual over the coming months.
"It's serious, but not catastrophic," he told the BBC, adding "something would have to dramatically change to lower prices".
He pointed to a reduction in demand for natural gas in general as a result of the shift towards renewables, but said the overall picture depends hugely on the winter weather.
"If you have a warmer winter than average, that will be great for demand," he said. But he warned a colder than average winter would have the opposite effect, driving up demand for energy and pushing up prices.
It is not known how the developing El Niño over the Pacific Ocean will impact Britain's winter. The so-called Big Freeze of winter 2009-10 was, at the time, the coldest in three decades - and this coincided with an El Niño.
However, 2006-07 was also an El Niño winter and that was unseasonably warm.
Talavera said gas prices could come down if the weather helps reduce demand and the Strait of Hormuz reopens sooner than expected.
But, at the moment, "the weather machine remains our main hope".
It comes as a recent spike in the UK government's borrowing costs eased. After a sharp uptick on Tuesday, which took the yield on a 10-year bond - or gilt - to the highest level since 2008, it fell back slightly on Thursday.
Yields are hovering around 5.15%, however, which would still represent a post-2008 peak were it not for Tuesday's jump.
Related topics
- Published26 August
- Published14 July`,
    bodyJa: `家庭は、ガス価格の高騰により光熱費に新たな圧力がかかる可能性があると警告した
- 公開されました
ヨーロッパ諸国が天候が悪化する前に天然ガス貯蔵量を補充しようと躍起になっているため、英国全土の家庭はこの冬の光熱費の高騰に備えるよう警告されている。
天然ガスの卸売価格はすでに3年ぶりの高値にあり、企業や消費者のエネルギー料金の増加につながる可能性がある。
欧州諸国は、イラン戦争に端を発した卸売コストの高騰を理由に夏の備蓄を遅らせたが、冬までに紛争が終結し、価格が下落することに賭けていた。
この時期の貯蔵レベルは例年よりも大幅に低く、各国は今すぐにガソリンの購入を急ぐか、冬が来ると潜在的に高い価格を支払う可能性があるという見通しに直面している。
欧州の基準となる天然ガス価格は水曜日、1MWhあたり75ユーロを突破し、ロシアのウクライナ侵攻による高騰の末期である2022年後半以来の高水準となった。英国の天然ガス価格は今週、１サーム当たり１８５ペンスを突破し、これも２０２２年後半以来の高値となった。
米国とイランの間の敵対行為の再開を背景に、価格は過去1週間で急騰しており、アナリストらは戦闘の再開により重要なホルムズ海峡の閉鎖がさらに長引くのではないかと懸念している。通常、世界の石油と液化天然ガス (LNG) の約 5 分の 1 は水路を通って輸送されます。
キャピタル・エコノミクスのシニア気候・商品エコノミスト、ハマド・フセイン氏は、水路の再開は２０２７年初頭までは開始されないとの見通しを示した。
それでも、エネルギーが海峡を自由に流れ、エネルギー価格への圧力が緩和されるまでには時間がかかるだろう。
フセイン氏はBBCに対し、「ガソリン価格に対するリスクは間違いなく上値に傾いている」と語り、ガソリン価格は今年末までに80ユーロを超えるだろうと警告した。
フセイン氏は、イランで米・イスラエル戦争が勃発した際のガス貯蔵業者らへのインタビューで、危機が緩和するまで3～4カ月待ってから備蓄すると述べたことを思い出した。
「海峡が事実上閉鎖されてから約半年が経つが、明らかにそれは起こっていない」と同氏は付け加えた。
ガス卸売価格の高騰は、規制当局のOfgemの価格上限の決定に寄与することで、家庭の光熱費に反映される。
エネルギー価格の上限は7月に上昇し、10月には4%上昇し、一般家庭の支払い額は1,723ポンドとなる。しかし、エネルギーコンサルタント会社コーンウォール・インサイトのアナリストらは、国内のエネルギー価格は新年にさらに９％上昇する可能性があり、最も寒い時期に家計に新たな懸念をもたらす可能性があると予想している。
コーンウォール・インサイトの主席コンサルタント、クレイグ・ローリー博士は木曜日、BBCに対し、卸売価格の新たな上昇は「1月の価格上限予測への圧力が高まる」と語った。
ただ、「まだ時間は十分にある」とし、卸売物価の下落により圧力が緩和される可能性があると警告した。
エネルギー安全保障・ネットゼロ省（DESNZ）は、ガス価格は国際市場で決定されると述べ、英国自身の貯蔵レベルの低さへの批判を一蹴した。
英国ガス所有者セントリカのボス、クリス・オシェア氏は、北海のラフ貯蔵施設を拡張するための政府の支援を繰り返し求め、同施設を満杯にするのは不可能であり、合意なく来年閉鎖すると警告した。
同氏は先週、外部リンクトインで「来冬に備えて英国の貯蔵ガスはほとんどない。エネルギー安全保障は国家安全保障であるため、これは大きな懸念だ」と語った。
DESNZの広報担当者は、「納税者にとってコストに見合った価値がある限り、すべてのガス貯蔵施設に関する提案について議論する用意がある」と述べた。
同省はまた、アンディ・バーナム首相が10月から光熱費から付加価値税を削減するとの公約や、英国の天然ガスへの依存を完全に削減する政府の措置を指摘した。
オックスフォード・エコノミクスの首席欧州エコノミスト、アンヘル・タラベラ氏は、「グラスに半分が入っていて、半分が空」の状況が展開していると述べた。
一方で、ガスの卸売価格は、ロシアによるウクライナへの全面侵攻に伴う危機時よりも大幅に下がっている。
一方で、家庭や企業は今後数カ月間、通常よりも大幅に高い光熱費に直面することになるだろう。
同氏はBBCに対し「深刻ではあるが、壊滅的なものではない」と述べ、「価格を下げるためには何かを劇的に変える必要があるだろう」と付け加えた。
同氏は、再生可能エネルギーへの移行の結果として天然ガス需要が全般的に減少していると指摘したが、全体像は冬の天候に大きく左右されると述べた。
同氏は「冬が例年より暖かければ、需要にとっては素晴らしいことになるだろう」と述べた。しかし同氏は、例年より寒い冬は逆効果となり、エネルギー需要が高まり、価格が上昇すると警告した。
太平洋上で進行中のエルニーニョが英国の冬にどのような影響を与えるかは不明だ。 2009 年から 2010 年の冬のいわゆる大凍結は、当時、ここ 30 年間で最も寒かったが、これはエルニーニョと重なった。
しかし、2006 年から 2007 年にかけてはエルニーニョの冬でもあり、季節外れの暖かさでした。
タラベラ氏は、天候により需要が減り、ホルムズ海峡が予想よりも早く再開すれば、ガソリン価格は下落する可能性があると述べた。
しかし、現時点では「気象観測機械が依然として我々の主な希望である」。
最近の英国政府の借り入れコストの高騰が緩和されたことを受けてのことだ。火曜日に10年債利回りが急上昇し、2008年以来の高水準となったが、木曜日には若干下落した。
しかし、利回りは５．１５％付近で推移しているが、火曜日の上昇がなければ依然として２００８年以降のピークを示していただろう。
関連トピック
- 8 月 26 日発行
- 7 月 14 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cm274mwxy1vo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-03T13:26:54+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/e55d/live/76f88ba0-a792-11f1-b64a-71b1e45ff5c7.jpg",
    readTime: 6,
  },
  {
    id: "putin-floats-chance-at-peace-with-ukrain-c47fb794",
    title: "Putin floats 'chance' at peace with Ukraine as NATO chief warns Russia is becoming 'increasingly reckless'",
    titleJa: "NATO長官、ロシアが「ますます無謀」になりつつあると警告、プーチン大統領はウクライナとの和平「チャンス」をほのめかす",
    summaryJa: "プーチン大統領は、北大西洋条約機構（NATO）が新たなリスクを警告している中、ロシア領空に対するキエフの警告を「国家テロ」と呼びながら、ウクライナとの和平は依然として可能だと述べた。",
    bodyOriginal: `Russian President Vladimir Putin suggested Thursday that there is a "chance" at "peace" with Ukraine, but repeated that Kyiv's warnings to airlines to avoid Russian airspace amounted to "state terrorism."
"Ultimately...the problem must be resolved by the countries involved in the conflict – Russia and Ukraine," he said in translated remarks at the Eastern Economic Forum in Vladivostok, a city in Eastern Russia. "Is there a chance [at peace]? In my view, yes, there is."
Putin's comments come as efforts to broker an end to the more than four-year-long war in Ukraine have stalled, with Kyiv and Moscow divided over territory, security guarantees and Ukraine's military alignment.
Ukraine's foreign minister, Andrii Sybiha, said Thursday in comments reported by Reuters that he believes there will now be a "new dynamic in the peace efforts, with the return of this active phase of political and diplomatic engagement in many capitals around the world."
U.S. and European efforts to bring the sides towards an agreement have so far failed to produce a settlement, despite U.S. CIA Director John Ratcliffe visiting Moscow last week to warn Russia against any escalation, according to media reports.
Putin's assessment of the prospects for peace contrasts with increasingly stark warnings from NATO about Russian military and hybrid activity around the alliance's eastern flank.
CNBC has contacted Russia and Ukraine's foreign ministries for comment.
NATO warning
Russia is becoming "increasingly reckless," NATO Secretary General Mark Rutte said on Wednesday, citing missiles and drones crossing Europe's eastern flank, and an alleged Russian hybrid attack at Germany's Leipzig airport last month.
"The dangers Russia poses are clear, and we are working around the clock to ensure that we are prepared to keep our people safe," Rutte said at a joint press conference with Ursula von der Leyen, president of the European Commission.
"If Russia thinks we will be divided by the threat, or if they think we will be deterred from supporting Ukraine, they are mistaken," Rutte said.
Ukrainian President Volodymyr Zelenskyy on Tuesday urged airlines to avoid Russian airspace as Kyiv ramps up its long-range drone operations inside Russia, including strikes on energy and military infrastructure.
Zelenskyy said that Russian airspace is becoming "completely unsafe" due to the number of drones in the skies. Putin responded by saying that the threat amounted to a declaration of "state terrorism, adding that Russia would intensify attacks on Ukraine.
Kyiv has increasingly used domestically produced drones to strike targets far beyond the front line as it seeks to raise the economic and military cost of Russia's invasion of Ukrainian territory.
Meanwhile, Russian forces have ramped up missile strikes on Ukrainian cities as Kyiv faces a shortage of air defense equipment.
— CNBC's Sam Meredith contributed to this report`,
    bodyJa: `ロシアのウラジーミル・プーチン大統領は木曜日、ウクライナと「和平」の「チャンス」があると示唆したが、航空会社に対するロシア領空を避けるようキエフが警告したことは「国家テロ」に当たると繰り返した。
同氏はロシア東部の都市ウラジオストクで開かれた東方経済フォーラムで、「最終的には…問題は紛争に関与している国、ロシアとウクライナによって解決されなければならない」と翻訳発言で述べた。 「（平和に）チャンスはありますか？私の考えでは、はい、あります。」
プーチン大統領のコメントは、領土、安全保障、ウクライナの軍事的連携をめぐってキエフとモスクワが分裂し、４年以上にわたるウクライナ戦争の終結を仲介する取り組みが行き詰まっている中で出された。
ウクライナのアンドリー・シビハ外相は木曜日、ロイター通信が報じたコメントの中で、「世界中の多くの首都で政治的・外交的関与が活発な段階に戻り、和平努力に新たな力関係が生まれる」と信じていると述べた。
メディア報道によると、米国のジョン・ラトクリフ米国中央情報局長官ジョン・ラトクリフ氏が先週モスクワを訪問し、ロシアにいかなるエスカレーションも起こさないように警告したにもかかわらず、双方を合意に近づけようとする米国と欧州の努力はこれまでのところ和解には至っていない。
和平の見通しに関するプーチン大統領の評価は、同盟の東側面周辺でのロシアの軍事活動とハイブリッド活動に関するNATOのますます厳しい警告とは対照的である。
CNBCはロシアとウクライナの外務省にコメントを求めた。
NATOの警告
NATOのマルク・ルッテ事務総長は水曜日、欧州の東側面を通過するミサイルや無人機、そして先月ドイツのライプツィヒ空港に対するロシアによるハイブリッド攻撃の疑いを引き合いに出し、ロシアは「ますます無謀」になっていると述べた。
ルッテ首相は欧州委員会のウルズラ・フォンデアライエン委員長との共同記者会見で、「ロシアがもたらす危険は明白で、国民の安全を守るための準備を整えるために我々は24時間体制で取り組んでいる」と述べた。
ルッテ氏は「もしロシアが、この脅威によって我々が分断されると考えているなら、あるいは我々がウクライナ支援を思いとどまると考えているなら、彼らは間違っている」と述べた。
ウクライナのウォロディミル・ゼレンスキー大統領は火曜日、キエフがエネルギーや軍事インフラへの攻撃を含むロシア国内での長距離無人機作戦を強化する中、航空会社に対しロシア領空を避けるよう要請した。
ゼレンスキー大統領は、空を飛ぶ無人機の数のせいで、ロシアの空域は「完全に安全ではなくなっている」と述べた。プーチン大統領は、この脅威は「国家テロ宣言に等しい」と応じ、ロシアはウクライナへの攻撃を強化すると付け加えた。
キエフは、ロシアのウクライナ領土侵攻による経済的・軍事的コストを増大させるため、最前線をはるかに越えた目標を攻撃するために国産無人機の使用を増やしている。
一方、キエフは防空装備の不足に直面しているため、ロシア軍はウクライナの都市へのミサイル攻撃を強化している。
— CNBC の Sam Meredith がこのレポートに寄稿しました`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/03/putin-peace-russia-ukraine-nato-defense.html",
    publishedAt: "2026-09-03T11:00:18+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "no-steering-wheel-no-pedals-tesla-tease-b6ed4e86",
    title: "'No steering wheel, no pedals.' Tesla teases fans ahead of long-awaited Cybercab update",
    titleJa: "「ハンドルもペダルもありません。」テスラ、待望のサイバーキャブアップデートを前にファンをからかう",
    summaryJa: "テスラの駆け出しのロボタクシー事業は、Xに「ハンドルもペダルもない」と同社の今後発売予定の無人運転車サイバーキャブにちなんだ投稿をしてファンをからかった。別の投稿はライダーたちにテキサス州オースティンで「試してみる」よう促した。そしてCEOのイーロン・マスク氏は、Xの自分のアカウントに「サイバータクシーの嵐」という投稿を固定した。水曜日のこれらのコメントは、オースティンで予定されているイベントに先立って発表されたもので、テスラは木曜日にサイバーキャブの詳細をさらに発表すると予想されている。同社はほぼ2年前にこの車両のデザインを発表した。",
    bodyOriginal: `Tesla's fledgling Robotaxi business teased fans with a post on X saying, "no steering wheel, no pedals," a reference to the company's forthcoming Cybercab driverless vehicles. Another post prompted riders to "try it out" in Austin, Texas. And CEO Elon Musk pinned a post to his account on X saying, "A storm of Cybercabs."
Those comments on Wednesday came ahead of a planned event in Austin, where Tesla is expected to share more Cybercab details on Thursday. The company debuted the design of the vehicle almost two years ago.
Musk's automaker designed the Cybercab as a driverless two-seater with butterfly doors that it said will have no steering wheel or pedals. The company has been testing a version of the "purpose-built" robotaxi with human drivers and traditional controls in multiple markets across the U.S.
New Street Research analyst Pierre Ferragu and Tesla fans also shared video clips on X on Wednesday showing Cybercab vehicles circulating on public streets in Austin, with no steering wheel or driver on board.
Bullish investors are betting the company will soon unleash a torrent of robotaxis in a number of U.S. cities, as Tesla tries to eat into Waymo's big early lead.
Since at least 2016, Musk has told fans and investors that a Tesla vehicle capable of driving itself across the country without any human intervention was near. That still hasn't happened.
Tesla currently sells cars with a system called FSD — short for Full Self-Driving (Supervised). They require a human driver to remain at the wheel, ready to steer or brake at any time.
One Tesla Robotaxi tracker estimates that Tesla had just over 200 vehicles in its U.S. fleet that are registered as "unsupervised," capable of operating without a human driver on board, at least in geofenced areas of certain cities where they are allowed.
Tesla's "unsupervised" vehicles have logged trips in cities including Austin, Dallas, Houston, Miami, Orlando and Tampa, Florida, the tracker says.
Tesla also runs a chartered car service in the San Francisco area dubbed the FSD (Supervised) Rideshare service. The cars in that fleet are newer Model Y vehicles driven by Tesla employees, who use a version of the company's FSD (Supervised) which is not yet publicly available, according to Tesla terms of service. Passengers can hail the vehicles using the Tesla Robotaxi-branded app.
Meanwhile, Google's Waymo is operating a commercial robotaxi service in 14 U.S. cities, with a fleet of about 4,000 driverless vehicles on U.S. roads, and testing in additional markets.
In a note ahead of the expected Cybercab update, Morgan Stanley analysts said if the event "includes a meaningful rollout of unsupervised" vehicles, they expect Tesla's stock to "regain momentum." Tesla shares are down about 21% this year as of Wednesday's close.
However, if the event underwhelms, the analysts said, the market reaction would be muted or negative. Morgan Stanley has a $400 price target on Tesla and the equivalent of a hold rating.
"Continued growth in the unsupervised fleet (Cybercab or Model Y) is key for the stock to outperform through year-end," the analysts wrote.
Tesla had 45 Cybercab vehicles authorized for driverless operations in the state of Texas, out of a total 420 vehicles registered in the state, for driverless operations as of Wednesday night, according to public records on the Texas Department of Motor Vehicles website.
The National Highway Traffic Safety Administration is investigating Tesla in at least two ongoing probes concerning possible safety defects with its partially automated driving systems. Tesla has also been criticized for asking the NHTSA to redact far more information from its crash reports than other AV companies, effectively hiding safety data from public view.
WATCH: Anticipating Tesla to scale up Cybercab production in 2026`,
    bodyJa: `テスラの駆け出しのロボタクシー事業は、Xに「ハンドルもペダルもない」と同社の今後発売予定の無人運転車サイバーキャブにちなんだ投稿をしてファンをからかった。別の投稿はライダーたちにテキサス州オースティンで「試してみる」よう促した。そしてCEOのイーロン・マスク氏は、Xの自分のアカウントに「サイバータクシーの嵐」という投稿を固定した。
水曜日のこれらのコメントは、オースティンで予定されているイベントに先立って発表されたもので、テスラは木曜日にサイバーキャブの詳細をさらに発表すると予想されている。同社はほぼ2年前にこの車両のデザインを発表した。
マスク氏の自動車メーカーはサイバーキャブをバタフライドアを備えた無人２人乗りとして設計しており、ハンドルもペダルも無いという。同社は、人間の運転手と従来の制御を備えた「専用」ロボタクシーのバージョンを米国内の複数の市場でテストしている。
ニュー・ストリート・リサーチのアナリスト、ピエール・フェラグ氏とテスラファンも水曜日、オースティンの公道をハンドルも運転手も乗せていないサイバーキャブ車両を映したビデオクリップをXで共有した。
テスラがウェイモの初期の大きなリードを食いつぶそうとする中、強気の投資家らは同社が近いうちに米国の多くの都市でロボタクシーの奔流を解き放つだろうと予想している。
少なくとも2016年以来、マスク氏はファンや投資家に対し、人間の介入なしに国中を自動運転できるテスラ車の実現が近いと語ってきた。それはまだ起こっていません。
テスラは現在、FSD (Full Self-Driving (Supervised) の略) と呼ばれるシステムを搭載した車を販売しています。人間のドライバーが常にハンドルを握り、いつでもハンドルやブレーキができるようにする必要があります。
あるテスラ・ロボタクシー追跡者の推定によると、テスラは米国の自社車両に200台強の車両を保有しており、少なくとも特定の都市のジオフェンスで囲まれたエリアでは運転が許可されている場合には、人間のドライバーが乗車しなくても運行できる「監視なし」車両として登録されている。
追跡者によると、テスラの「監視されていない」車両は、オースティン、ダラス、ヒューストン、マイアミ、オーランド、フロリダ州タンパなどの都市での走行を記録しているという。
テスラはまた、FSD (Supervised) Rideshare サービスと呼ばれるチャーターカー サービスをサンフランシスコ地域で運営しています。テスラの利用規約によれば、その車両に含まれる車両はテスラ従業員が運転する新しいモデル Y 車両で、従業員はまだ一般には公開されていない同社の FSD (監視付き) バージョンを使用しています。乗客は Tesla Robotaxi ブランドのアプリを使用して車両を呼び止めることができます。
一方、Google の Waymo は、米国の 14 都市で商用ロボタクシー サービスを運営しており、約 4,000 台の無人車両が米国の道路を走行し、他の市場でもテストを行っています。
モルガン・スタンレーのアナリストらは、予想されるサイバーキャブのアップデートに先立つメモの中で、イベントが「監視されていない車両の有意義な展開を含む」場合、テスラ株は「勢いを取り戻す」と予想していると述べた。テスラ株は水曜日終値時点で年初から約２１％下落している。
しかしアナリストらは、イベントの盛り上がりが弱ければ、市場の反応は鈍いか否定的なものになるだろうと述べた。モルガン・スタンレーはテスラの目標株価を400ドルとし、ホールド格付けに相当する。
「監視されていない車両（サイバーキャブまたはモデルY）の継続的な成長が、株価が年末までアウトパフォームするための鍵となる」とアナリストは書いている。
テキサス州陸運局のウェブサイトに掲載された公的記録によると、水曜夜の時点で、テスラはテキサス州内で自動運転用に登録されている車両計420台のうち、テキサス州内で無人運転が許可されたサイバーキャブ車45台を保有している。
米国道路交通安全局は、部分自動運転システムの安全上の欠陥の可能性に関して、少なくとも2件の進行中の調査でテスラを調査している。テスラはまた、NHTSAに対し、他のAV企業よりもはるかに多くの情報を衝突報告書から編集し、事実上安全性データを公の場から隠すよう求めたことでも批判されている。
注目: テスラが 2026 年にサイバーキャブの生産を拡大すると予想`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/03/tesla-teases-no-steering-wheel-no-pedals-ahead-of-cybercab-update.html",
    publishedAt: "2026-09-03T11:00:02+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "the-ai-cloud-math-is-broken-and-it-s-cre-d8d82cc6",
    title: "The AI cloud math is broken, and it’s creating a power shift within Big Tech",
    titleJa: "AI クラウドの数学は壊れており、ビッグテック内でパワーシフトを引き起こしています",
    summaryJa: "AI ハードウェアを完全に購入する方が、クラウドを通じて AI パワーをレンタルするよりも経済的になりつつあります。",
    bodyOriginal: `Buying AI hardware outright is becoming more economical than renting AI power through the cloud.`,
    bodyJa: `AI ハードウェアを完全に購入する方が、クラウドを通じて AI パワーをレンタルするよりも経済的になりつつあります。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/the-ai-cloud-math-is-broken-and-its-creating-a-power-shift-within-big-tech-5652da0f?mod=mw_rss_topstories",
    publishedAt: "2026-09-03T11:00:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-90412107",
    readTime: 2,
  },
  {
    id: "people-under-21-can-t-use-most-sportsboo-04cd8368",
    title: "People under 21 can’t use most sportsbooks — so they’ve wagered over $5 billion on Kalshi instead",
    titleJa: "21 歳未満の人はほとんどのスポーツブックを利用できないため、代わりにカルシに 50 億ドル以上を賭けています",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `A new American Gaming Association analysis finds underage sports betting is flourishing on prediction markets.`,
    bodyJa: `米国ゲーム協会の新たな分析によると、予想市場では未成年のスポーツ賭博が盛んに行われていることが判明した。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/people-under-21-cant-use-most-sportsbooks-so-theyve-wagered-over-5-billion-on-kalshi-instead-03730919?mod=mw_rss_topstories",
    publishedAt: "2026-09-03T11:00:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-63376292",
    readTime: 2,
  },
  {
    id: "shares-in-snowflake-are-surging-here-s-w-8a7c5938",
    title: "Shares in Snowflake are surging.  Here’s what Wall Street analysts are saying.",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Analysts see the software company continuing to benefit from the artificial-intelligence revolution.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/shares-in-snowflake-are-surging-heres-what-wall-street-analysts-are-saying-0b6343c0?mod=mw_rss_topstories",
    publishedAt: "2026-09-03T10:37:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-27494962",
    readTime: 2,
  },
  {
    id: "dutch-central-bank-moves-gold-bars-out-o-ce5475f7",
    title: "Dutch central bank moves gold bars out of U.S. and Canada, citing ‘crisis preparedness’",
    titleJa: "オランダ中央銀行、「危機への備え」を理由に米国とカナダから金塊を移送",
    summaryJa: "オランダ中央銀行（DNB）は、「地政学的不安の増大」を考慮して緊急時対応計画を強化するため、約86トンの金を米国とカナダから英国に移送した。DNBは水曜日、ニューヨークとオタワに保有されている中銀の金準備の4分の1強が3月から8月の間にロンドンに移されたと発表した。",
    bodyOriginal: `The Dutch central bank (DNB) has transferred approximately 86 metric tons of gold out of the U.S. and Canada to the U.K., seeking to shore up its contingency planning in view of "increasing geopolitical unrest."
Just over one-quarter of the central bank's gold reserves held in New York and Ottawa had been shifted to London between March and August, DNB said Wednesday.
The transferred gold is now stored with the Bank of England because gold stored there must meet international trade standards and is recognized as "the world's most easily tradable gold," DNB said, adding that the move strengthens its "crisis preparedness."
By contrast, DNB said the gold bars held in the U.S. and Canada could not be utilized as quickly and directly in a crisis situation.
"With this relocation, we have improved the tradability of our gold reserves. We expect that we will never need to use them, but we do need to strengthen our resilience and preparedness," DNB Governor Olaf Sleijpen said in a statement.
The move comes amid a blockbuster rally in gold prices and continued U.S.-Iran geopolitical tensions over the strategically vital Strait of Hormuz, with a comprehensive settlement agreement far from certain.
The price of gold, which is typically considered a safe-haven asset at times of financial uncertainty, has jumped nearly 25% over the past 12 months. The yellow metal is currently trading at $4,429.61 per ounce, up nearly 1% for the session.
The move from the Dutch central bank comes after the French central bank replaced 129 metric tons of gold held at the New York Federal Reserve between July 2025 and January 2026.
Bank of France Governor Francois Villeroy de Galhau said at the time that the move was not politically motivated.
In light of the latest transfer, DNB said the geographical spread of its gold reserves was "more balanced," with London now holding 32.1%, the central bank's cash center in Zeist in the Netherlands holding 30.8% and New York and Ottawa holding 18.5%, respectively.
Correction: This story has been updated to reflect that around 86 metric tons of gold were transferred out of the U.S. and Canada to the U.K.`,
    bodyJa: `オランダ中央銀行（DNB）は、「地政学的不安の増大」を考慮して緊急時対応計画を強化するため、約86トンの金を米国とカナダから英国に移送した。
DNBは水曜日、ニューヨークとオタワに保有されている中銀の金準備の4分の1強が3月から8月の間にロンドンに移されたと発表した。
DNBは、同銀行に保管されている金は国際貿易基準を満たしている必要があり、「世界で最も取引しやすい金」として認められているため、移送された金は現在イングランド銀行に保管されていると述べ、この動きは「危機への備え」を強化すると付け加えた。
対照的にDNBは、米国とカナダに保有されている金塊は、危機的状況においてはこれほど迅速かつ直接的に利用できないと述べた。
DNBのオラフ・スライペン総裁は声明で「今回の移転により、金準備の取引可能性は向上した。金準備を使用する必要がなくなると予想しているが、回復力と備えを強化する必要がある」と述べた。
この動きは、金価格の大規模な上昇と、戦略的に重要なホルムズ海峡を巡る米国とイランの地政学的な緊張が続いており、包括的な和解合意の成立が確実ではない中で行われた。
通常、金融不安時の安全資産と考えられている金の価格は、過去12カ月で25％近く上昇した。イエローメタルは現在、1オンス当たり4,429.61ドルで取引されており、セッション中に1％近く上昇した。
オランダ中央銀行の動きは、フランス中央銀行が2025年7月から2026年1月の間にニューヨーク連邦準備制度に保有されていた129トンの金を交換した後に行われた。
フランス銀行総裁フランソワ・ヴィルロワ・ド・ガロー氏は当時、この動きは政治的動機によるものではないと述べた。
今回の移管を踏まえ、DNBは金準備の地理的広がりが「よりバランスが取れた」と述べ、現在ロンドンが32.1％、オランダのザイストにある中銀現金センターが30.8％、ニューヨークとオタワが18.5％をそれぞれ保有していると述べた。
訂正：この記事は、約86トンの金が米国とカナダから英国に移送されたことを反映して更新されました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/03/netherlands-gold-transfer-us-canada-uk.html",
    publishedAt: "2026-09-03T09:38:05+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 2,
  },
  {
    id: "un-warns-of-supersized-el-ni-o-as-countr-8aad1405",
    title: "UN warns of 'supersized' El Niño as countries prepare for impact",
    titleJa: "各国が影響に備える中、国連が「超大規模」エルニーニョに警告",
    summaryJa: "各国が影響に備える中、国連が「超大規模」エルニーニョに警告- 公開されました",
    bodyOriginal: `UN warns of 'supersized' El Niño as countries prepare for impact
- Published
The world has entered a "danger zone of extreme weather" as the impacts of El Niño start to be felt globally, UN head António Guterres has warned.
The World Meteorological Organization (WMO) has released the latest data on the natural weather phenomenon showing it could be the strongest for more than 70 years and last until at least February 2027.
El Niño changes weather patterns around the world, pushing some regions into drought whilst others experience stronger typhoons and flooding.
Forecasters also say El Niño will boost temperatures in some places, coming on top of rising heat globally from human-induced climate change.
"El Niño is being supersized before our eyes. The science leaves no room for doubt: the planet is in uncharted waters, and those waters are heating up," Guterres said.
The BBC spoke with governments and scientists about the measures being taken globally to reduce the risk of deaths, displacement and environmental damage. Early warning systems have been strengthened and deployment of pre-emptive medical assistance, but the strength of this particular event has raised serious concerns particularly for vulnerable groups.
The WMO - a UN agency - said it has undertaken a "major mobilisation" to try to circulate its forecasts of potential extreme weather events, linked to El Niño, to as many communities as possible.
WMO Secretary-General Celeste Saulo warned: "El Niño has the potential to deliver a massive blow to communities and economies across the world."
El Niño is a natural weather phenomenon that develops in the Pacific Ocean and is linked to a change in wind patterns. It allows warm water to spread eastwards and releases heat into the atmosphere.
Sea temperatures in the central and eastern tropical Pacific have risen sharply in recent months - a clear sign of a strengthening El Niño.
In the Pacific's key monitoring region, surface temperatures have been well over 2C above average in recent weeks, putting it on track to be declared a "very strong" event.
But it is expected to surpass even that marker. Monthly sea surface temperatures could get close to 4C above average, forecasts suggest.
This would make it the strongest El Niño since at least 1950, by potentially a large margin.
Temperatures are even more exceptional below the surface of the Pacific - in places more than 8C above average.
Above-normal sea temperatures are also expected in other parts of the world including the Indian Ocean, tropical Atlantic and around parts of the Australian coast.
With its rich marine life, changes in ocean heat are of particular concern to Australia.
It has been plagued by marine heatwaves in recent years - driven by climate change - leading to widespread coral bleaching and algae blooms, causing "unprecedented damage".
El Niño is a natural phenomenon, but it tends to bring the kind of extreme heat which also drives those disasters, Dr Alistair Hobday, chief researcher at Australia's science agency, told the BBC.
This year, marine heatwave forecasts indicate the Great Barrier Reef will be spared the worst of the conditions, giving coral there more time to recover.
"[But] Southern Australia is getting slammed. It had an algal bloom last year, it's got bird flu now, and it looks like marine heatwaves will be stronger there this summer," said Hobday.
Last time a marine heatwave hit South Australia and Tasmania, there were starving penguins, fish kills, suffocating algae outbreaks, and jellyfish invasions.
Australia has recently introduced early warning systems for marine crises - this gives time for financial relief for fisheries to be established, relocation of crucial species and increased coral monitoring.
But this event is shaping up to be unprecedented - and Hobday admits he is quite worried.
Reduced rainfall brings drought and trade disruption
While the impacts on global weather are likely to be felt well into 2027, the WMO expects significant changes in rainfall patterns over the next few months.
Drier-than-usual conditions are forecast across large areas of South East Asia, Central America and northern parts of South America, increasing the risk of droughts and wildfires.
On Thursday, the number of vessels passing through the Panama Canal will be reduced by more than 10% in anticipation of lower rainfall.
About 14,000 ships per year use the artificial waterway - as well as being a crucial route for global trade, it is also a key source of income for Panama, bringing in about $3bn (£2.2bn) a year.
Indonesia is racing to contain wildfires that have burned more than 107,000 hectares of land nationwide this dry season. Like some other parts of South East Asia, it is facing a longer season this year.
A resident in Central Kalimantan told BBC News Indonesia he had been experiencing wildfires "for more than a month".
"The smoke has become quite thick. When we step outside, our eyes start to sting. The smell of the smoke is also quite strong," said Darwin Romy.
Authorities have said they are deploying cloud-seeding aircraft to trigger rains to extinguish these fires, and its government has promised resources to contain the fire and arrested dozens over allegations of using it to clear land.
Stronger typhoons and landslide risk
Thousands of miles away, China is expecting seven typhoons to make landfall in this year alone – something the country's experts have said is linked to the effects of a super El Niño.
In July alone, China experienced three typhoons - Bavi, Noul and Maysak - which left dozens dead.
And in August, more than 1m people were forced to evacuate their homes as Typhoon Dolphin hit – bringing heavy rains and strong winds.
Similarly, wetter-than-average weather is expected in parts of eastern Africa, southern Brazil and the southern US, raising the chances of flooding.
"We are already seeing disruption and devastation from droughts and floods and we expect these impacts to increase as El Niño intensifies," said Prof Celeste Saulo, secretary general of the WMO.
This is all happening on top of long-term human-caused warming, making the impacts potentially more intense. Some scientists believe climate change could even be making El Niño events stronger, but this is not yet certain.
Peru is particularly vulnerable to El Niño, as its coastline borders the eastern Pacific.
Parts of the country, along with Ecuador and parts of Brazil, have previously experienced increased rainfall, resulting in flash flooding and landslides, particularly in urban centres where the water is less able to drain away.
Miguel Aréstegui, climate resilience lead at Practical Action, which helps countries prepare for extreme weather, said "we are significantly concerned, but that concern needs to translate into preparedness rather than alarm."
He said Practical Action had been working with partners over recent years to make sure the public had better access to early warning systems, including sharing information on river levels, flood risks and weather forecasts.
At the end of last month, the US announced it was deploying the vessel USNS Comfort to the Peruvian coast to provide additional medical assistance and technical equipment for when El Niño reaches its peak.
However, Aréstegui said El Niño "does not arrive in a vacuum". There are bigger, structural issues that make these events worse and which take much longer to resolve such as "housing in exposed areas, fragile water and sanitation systems, and a weak healthcare system", he said.
Get in touch
What questions or concerns do you have about El Niño?
World's oceans hit highest temperature on record as El Niño grows
- Published24 August
Watch: How does El Niño affect world weather?
- Published21 August
Sign up for our Future Earth newsletter to keep up with the latest climate and environment stories with the BBC's Justin Rowlatt. Outside the UK? Sign up to our international newsletter here.`,
    bodyJa: `各国が影響に備える中、国連が「超大規模」エルニーニョに警告
- 公開されました
エルニーニョの影響が世界中で感じられ始めており、世界は「異常気象の危険地帯」に入っていると国連事務総長のアントニオ・グテーレス氏は警告した。
世界気象機関（WMO）は、70年以上にわたって最も強い気象現象が少なくとも2027年2月まで続く可能性を示す自然気象現象に関する最新データを発表した。
エルニーニョは世界中で気象パターンを変化させ、一部の地域では干ばつに見舞われる一方、他の地域ではより強力な台風や洪水が発生します。
気象予報士らはまた、人為的な気候変動による世界的な暑さの上昇に加え、エルニーニョによって一部の地域で気温が上昇すると予想している。
「エルニーニョは私たちの目の前で超巨大化しつつある。科学的には疑いの余地はない。地球は未知の海域にあり、その水域は加熱している」とグテレス氏は語った。
BBCは、死亡、避難、環境破壊のリスクを軽減するために世界的に取られている対策について政府や科学者に話を聞いた。早期警戒システムが強化され、先制医療支援が展開されていますが、今回の特別な出来事の強さは、特に弱い立場にある人々にとって深刻な懸念を引き起こしています。
国連機関であるWMOは、エルニーニョに関連する潜在的な異常気象の予測をできるだけ多くの地域社会に広めようと「大規模な動員」を行ったと発表した。
WMOのセレステ・サウロ事務総長は「エルニーニョは世界中の地域社会や経済に大打撃を与える可能性がある」と警告した。
エルニーニョは太平洋で発生する自然気象現象で、風のパターンの変化に関連しています。温水が東に広がり、熱が大気中に放出されます。
中部および東部の熱帯太平洋の海水温はここ数カ月で急激に上昇しており、エルニーニョ現象が強まっていることを示す明らかな兆候だ。
太平洋の主要な監視地域では、ここ数週間、地表温度が平均より2℃をはるかに上回っており、「非常に強い」気象現象と宣言される軌道に乗っている。
しかし、その指標さえも超えると予想されています。予報によれば、毎月の海面水温は平均より4度近く高くなる可能性がある。
これにより、少なくとも1950年以降で最も強いエルニーニョとなる可能性があり、これを大幅に上回る可能性がある。
太平洋の表面下の気温はさらに異常で、平均より 8℃ 以上高い場所もあります。
インド洋、熱帯大西洋、オーストラリア沿岸の一部など、世界の他の地域でも海水温が平年を上回ることが予想されます。
海洋生物が豊富なオーストラリアでは、海洋熱の変化が特に懸念されています。
近年、気候変動による海洋熱波に悩まされており、広範なサンゴの白化と藻類の繁殖を引き起こし、「前例のない被害」を引き起こしている。
エルニーニョは自然現象だが、こうした災害を引き起こすような極度の暑さをもたらす傾向があり、オーストラリア科学庁の主任研究員であるアリスター・ホブデイ博士はBBCに語った。
今年の海洋熱波予測は、グレートバリアリーフが最悪の状況を免れることを示しており、サンゴが回復するまでの時間が長くなります。
「（しかし）オーストラリア南部は大打撃を受けている。昨年は藻類が大発生し、現在は鳥インフルエンザが発生しており、今年の夏は海洋熱波がさらに強くなりそうだ」とホブデイ氏は語った。
前回海洋熱波が南オーストラリア州とタスマニア州を襲ったときは、ペンギンが餓死し、魚が死滅し、窒息する藻類が発生し、クラゲが侵入するという事態が起きた。
オーストラリアは最近、海洋危機に対する早期警報システムを導入しました。これにより、漁業を確立するための財政的救済、重要な種の移転、サンゴの監視の強化に時間を割くことができます。
しかし、この出来事は前例のないものになりつつあり、ホブデイ氏はかなり心配していることを認めている。
降雨量の減少は干ばつと貿易の混乱をもたらす
世界の気象への影響は2027年までずっと感じられる可能性が高いが、WMOは今後数カ月で降雨パターンに大きな変化が生じると予想している。
東南アジア、中米、南米北部の広い地域で通常より乾燥した状況が予想されており、干ばつや山火事のリスクが高まる。
木曜には降雨量の減少を見込んでパナマ運河を通過する船舶の数が１０％以上削減される。
この人工水路は年間約 14,000 隻の船舶が利用しており、世界貿易にとって重要な航路であるだけでなく、パナマにとって年間約 30 億ドル (約 22 億ポンド) の収入をもたらす重要な収入源でもあります。
インドネシアは、この乾季に全国で10万7000ヘクタール以上の土地を焼いた山火事の鎮圧に懸命に取り組んでいる。東南アジアの他の地域と同様、今年はより長いシーズンを迎えることになる。
中部カリマンタンの住民はBBCニュース・インドネシアに対し、「1か月以上」山火事に見舞われていると語った。
ダーウィン・ロミーさんは「煙がかなり濃くなった。外に出ると目が痛くなり始める。煙の匂いもかなり強い」と語った。
当局は、これらの火災を消すために雨を降らせるために雲散布航空機を配備していると発表し、政府は火災を抑えるための資源を約束し、土地を開墾するためにそれを使用した疑いで数十人を逮捕した。
台風の強まりと土砂崩れの危険性
数千マイル離れた中国では、今年だけで7つの台風が上陸すると予想されており、同国の専門家らはこれがスーパーエルニーニョの影響と関連していると述べている。
7月だけでも中国はバビ、ノウル、メイサークという3つの台風に見舞われ、数十人の死者が出た。
そして8月には、大雨と強風をもたらした台風ドルフィンの襲来により、100万人以上が自宅避難を余儀なくされました。
同様に、アフリカ東部、ブラジル南部、米国南部の一部地域でも平年より降水量が多く、洪水の可能性が高まると予想されている。
「私たちはすでに干ばつや洪水による混乱や破壊を目の当たりにしており、エルニーニョ現象が激化するにつれ、こうした影響はさらに増大すると予想している」とWMO事務局長セレステ・サウロ教授は述べた。
これらはすべて、長期にわたる人為的温暖化の上に起こっており、その影響は潜在的にさらに深刻なものとなっています。一部の科学者は、気候変動がエルニーニョ現象をさらに激化させている可能性があると考えていますが、それはまだ確実ではありません。
ペルーは海岸線が東太平洋に接しているため、特にエルニーニョの影響を受けやすい。
エクアドルやブラジルの一部と同様、同国の一部ではこれまでに降雨量が増加し、特に水の排出が困難な都市中心部で鉄砲水や土砂崩れが発生している。
各国の異常気象への備えを支援するプラクティカル・アクションの気候回復力リーダー、ミゲル・アレステギ氏は、「われわれは非常に懸念しているが、その懸念は警戒ではなく備えに変える必要がある」と述べた。
同氏は、プラクティカル・アクションは近年、川の水位、洪水の危険性、天気予報に関する情報の共有など、早期警報システムへの国民のアクセスを改善するためにパートナーと協力してきたと述べた。
先月末、米国はエルニーニョ現象がピークに達した際に追加の医療支援と技術機器を提供するため、船「USNS Comfort」をペルー沿岸に配備すると発表した。
しかしアレステギ氏は、エルニーニョは「何もせずに到来するわけではない」と述べた。同氏は、「露出地域の住宅、脆弱な水と衛生システム、脆弱な医療システム」など、こうした事態を悪化させ、解決にはるかに長い時間を要する、より大きな構造的な問題があると述べた。
連絡する
エルニーニョについて何か質問や懸念がありますか?
エルニーニョ現象の拡大で世界の海水温が過去最高に達
- 8 月 24 日発行
動画: エルニーニョは世界の天気にどのような影響を与えるのでしょうか?
- 8 月 21 日発行
Future Earth ニュースレターに登録して、BBC のジャスティン ロウラットによる気候と環境に関する最新の話題を入手してください。英国外ですか？こちらから国際ニュースレターにご登録ください。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c17jqp0xzpzo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-03T06:01:54+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/067c/live/99ebc3c0-a70b-11f1-b109-879e35c24276.jpg",
    readTime: 8,
  },
  {
    id: "the-world-appears-to-be-entering-a-highe-52c96412",
    title: "The world appears to be entering a higher-rate era. Here’s who will pay the price",
    titleJa: "世界はより高金利の時代に入りつつあるようです。ここで誰が代金を支払うのか",
    summaryJa: "世界的な債券の暴落により経済全体の借り入れコストが上昇し、政府、企業、消費者は高額な借金が今後も残る可能性と直面することを余儀なくされている。世界の債券利回りは数年ぶりの高水準に上昇しており、ドイツの１０年債利回りは２０１１年以来の高水準に達し、日本は３％超を維持、米国の１０年国債利回りは２０２３年１１月以来の高水準に達し、英国の金国債利回りはここ数日で２００８年以降の最高値に達している。",
    bodyOriginal: `The global bond rout is raising borrowing costs across the economy and forcing governments, companies and consumers to confront the possibility that expensive debt is here to stay.
Global bond yields have been climbing to multiyear highs, with Germany's 10-year yield reaching its highest since 2011, Japan's holding above 3%, U.S. 10-year Treasury yields touching their highest since November 2023 and UK gilt yields hitting a post-2008 peak in recent days.
The latest leg of the sell-off is a reflection of a mix of high government debt issuance, an oil-price shock that has reignited inflation concerns and expectations that central banks may keep monetary policy tighter for longer.
The move may mark more than another bout of bond-market volatility, with consequences stretching across economies and financial markets.
“This is the continuation of a medium-term trend that’ll keep going for many years,” said Robin Brooks, senior fellow at the Brookings Institution.
Natalia Lojevsky, managing director at CIFC Asset Management, also sees scope for yields to rise further, with heavy debt issuance now colliding with renewed inflation risks.
Governments: growing interest bill
Governments are among those highly exposed to the rise in yields, said analysts whom CNBC spoke to. Sovereign debt loads are already elevated across much of the world, and refinancing maturing debt at higher rates will progressively increase interest costs and strain public finances.
“The most vulnerable sovereigns are those combining large fiscal deficits, elevated debt burdens and reliance on external capital. France stands out among developed markets,” said Masahiko Loo, senior fixed income strategist at State Street Investment Management, citing the country’s fiscal slippage, limited political appetite for fiscal consolidation and electoral uncertainty.
Loading chart...
Across emerging markets, countries running twin deficits remain particularly exposed because higher global yields raise both borrowing costs and funding risks, he added.
“When debt, deficits and external financing needs collide, markets tend to become far less forgiving,” he added.
Authorities can attempt to contain yields through bond buybacks or changes to the amount and maturity of debt they issue. But such measures do not resolve the underlying imbalance between heavy borrowing and investor demand.
“The higher yields move, the more uncomfortable the long-term fiscal trajectory looks for many countries,” Deutsche Bank wrote in a recent note.
Japan illustrates the pressure particularly clearly. Government debt makes up more than 200% of its gross domestic product, leaving its finances highly sensitive to rising borrowing costs. National debt service is estimated to account for more than 25% of government expenses for fiscal year 2026.
Companies: hitting growth plans
Businesses will have to pay more to refinance debt or raise funds for expansion. Companies with large borrowing needs, weaker balance sheets or floating-rate debt are especially vulnerable.
Small-cap companies tend to hold more floating-rate debt than their larger peers, meaning their interest expenses can rise relatively quickly as rates climb, according to Thomas Browne, portfolio manager at Keeley Teton Advisors.
“The pressure points are the most leveraged ones that are accustomed to free money,” said Loo. In a similar vein, he highlighted that commercial real estate, private-equity-backed companies, direct-lending portfolios and lower-quality software businesses are among the most exposed. Many were financed on assumptions that capital would remain plentiful and inexpensive.
The artificial-intelligence investment boom is adding another wrinkle. Technology companies are issuing enormous amounts of debt to build data centers and related infrastructure, putting them in competition with governments and other corporate borrowers for investors’ capital.
“You have an enormous amount of debt being issued to fund different AI projects, and the issuers of that debt are fairly price insensitive,” said Larry Holzenthaler, senior portfolio manager at Catalyst Funds.
Higher benchmark yields can lift financing costs even for healthy companies, potentially making some factories, data centers, acquisitions and other investments less economically viable.
Consumers: K-shaped squeeze
Higher long-term yields flow through to mortgages, car loans and other forms of household credit. The burden will not be shared evenly.
“That long end of the curve is really important because it drives the cost of capital, not just for companies, but people with mortgages, the housing market,” said Holzenthaler.
Lower-income consumers, who spend a larger proportion of their earnings servicing debt and buying essentials, are likely to feel the squeeze first, said market watchers. Wealthier households may benefit from higher returns on savings and are generally better able to absorb larger monthly payments.
“Have this K-shaped dynamic with respect to consumers. The folks that are going to feel that the most in terms of what's the percentage of my paycheck that gets spent on a car payment, a mortgage payment, a student loan - lower-income folks are going to feel that a lot more versus a wealthy person,” Holzenthaler added.
The effect may emerge gradually as fixed-rate loans mature and households refinance. But if pressure on lower-income consumers causes spending to weaken, the impact could spread across the economy.
Stock investors: pressured by yields
Equity markets have shown resilience, supported by strong earnings and optimism over AI-led productivity gains. But rising bond yields make safer government debt more attractive relative to stocks, while also reducing the present value investors assign to companies’ future earnings.
“At some point, higher yields are a painful experience for equities,” Lojevsky said.
“The equity market has been remarkable in the way that it's been able to look through or look past these rising yields … But eventually, it starts to catch up, and I think that's what's happening.”
Still, higher yields bring one notable winner: new bond buyers. Larger coupon payments now provide a cushion against further price declines, unlike the low-yield environment earlier this decade.
Deutsche Bank estimates that 10-year Treasury yields could climb to roughly 5.5% over the next year, before the capital loss from falling bond prices outweighs the coupon income investors receive. Over a two-year horizon, yields would need to rise to around 6.4% for total returns to turn negative.
The calculation refers to nominal total returns, combining coupon income and changes in the bond's market price.`,
    bodyJa: `世界的な債券の暴落により経済全体の借り入れコストが上昇し、政府、企業、消費者は高額な借金が今後も残る可能性と直面することを余儀なくされている。
世界の債券利回りは数年ぶりの高水準に上昇しており、ドイツの１０年債利回りは２０１１年以来の高水準に達し、日本は３％超を維持、米国の１０年国債利回りは２０２３年１１月以来の高水準に達し、英国の金国債利回りはここ数日で２００８年以降の最高値に達している。
最近の下落は、多額の国債発行、インフレ懸念が再燃した原油価格ショック、中央銀行が金融政策を長期にわたって引き締める可能性があるとの期待などが重なったことを反映している。
この動きは債券市場のボラティリティのさらなる変動を示すものであり、その影響は経済と金融市場全体に及ぶ可能性がある。
ブルッキングス研究所の上級研究員、ロビン・ブルックス氏は「これは何年も続く中期的な傾向の継続だ」と述べた。
CIFCアセット・マネジメントのマネージング・ディレクター、ナタリア・ロジェフスキー氏も、多額の債券発行が新たなインフレリスクと衝突しているため、利回りはさらに上昇する余地があると見ている。
政府: 増加する利息請求額
CNBCが取材したアナリストらによると、政府は利回り上昇の影響を大きく受けている国の一つだという。ソブリン債務の負担はすでに世界の多くの地域で増加しており、満期を迎えた債務をより高い金利で借り換えると、金利コストが徐々に増加し、財政が圧迫されることになる。
ステート・ストリート・インベストメント・マネジメントのシニア債券ストラテジスト、マサヒコ・ルー氏は「最も脆弱なソブリンは、巨額の財政赤字、債務負担の増大、外部資本への依存を組み合わせた国家だ。フランスは先進国の中でも際立っている」と述べ、同国の財政の低迷、財政健全化に対する政治的意欲の限界、選挙の不確実性を挙げた。
グラフを読み込んでいます...
同氏は、世界的な利回り上昇により借入コストと資金調達リスクの両方が上昇するため、新興市場全体で双子の赤字を抱えている国が依然として特にリスクにさらされていると付け加えた。
「債務、赤字、対外資金需要が衝突すると、市場は容赦がなくなる傾向がある」と同氏は付け加えた。
当局は債券の買い戻しや、発行する債券の金額や満期の変更を通じて利回りの抑制を試みることができる。しかし、こうした措置は多額の借入と投資家の需要との間の根本的な不均衡を解決するものではない。
ドイツ銀行は最近のメモで「利回りが上昇すればするほど、多くの国にとって長期的な財政軌道はより不安定になる」と述べた。
日本はその圧力を特に明確に示している。政府債務は国内総生産の200％以上を占めており、財政は借入コストの上昇に非常に敏感になっている。国債費は２０２６年度の政府支出の２５％以上を占めると推計されている。
企業: 成長計画に到達
企業は債務の借り換えや事業拡大のための資金調達にさらに多くの費用を支払わなければならないだろう。多額の借入ニーズ、脆弱なバランスシート、または変動金利債務を抱える企業は特に脆弱です。
キーリー・ティートン・アドバイザーズのポートフォリオマネジャー、トーマス・ブラウン氏によると、小型株は大手同業他社に比べて変動金利債務を多く保有する傾向があり、金利上昇に伴って支払利息が比較的早く上昇する可能性があるという。
「プレッシャーポイントは、無料のお金に慣れている人にとって最も活用されるポイントです」とルー氏は言う。同様に、商業用不動産、プライベートエクイティ支援企業、直接融資ポートフォリオ、および低品質のソフトウェア事業が最も危険にさらされているものの一つであると同氏は強調した。多くは、資本が潤沢で安価なままであるという仮定に基づいて資金調達されました。
人工知能への投資ブームがさらなるしわを加えている。テクノロジー企業はデータセンターや関連インフラを建設するために巨額の借金を発行しており、投資家の資金をめぐって政府や他の企業借り手と競争している。
カタリスト・ファンズのシニア・ポートフォリオ・マネージャー、ラリー・ホルゼンターラー氏は、「さまざまなAIプロジェクトに資金を提供するために膨大な額の債券が発行されているが、その債券の発行者は価格にかなり鈍感だ」と述べた。
ベンチマーク利回りが高くなると、健全な企業であっても資金調達コストが上昇する可能性があり、一部の工場、データセンター、買収、その他の投資の経済性が低下する可能性があります。
消費者: K 字型スクイーズ
より高い長期利回りは、住宅ローン、自動車ローン、その他の家計信用に反映されます。負担は均等に分担されません。
「この長いカーブの端は、企業だけでなく、住宅ローンを抱えている人々や住宅市場の資本コストを押し上げるため、非常に重要です」とホルツェンターラー氏は述べた。
市場関係者らによると、収入の大部分を借金返済や生活必需品の購入に費やす低所得の消費者が最初に圧迫感を感じる可能性が高いという。裕福な世帯は、より高い貯蓄収益から恩恵を受ける可能性があり、一般に、より多額の月々の支払いをよりよく吸収することができます。
「消費者に関してこのK字型のダイナミックスを持ってください。車の支払い、住宅ローンの支払い、学生ローンに費やされる私の給料の割合という点で、それを最も感じることになるのは、富裕層よりも低所得層の人々です。」とホルゼンターラー氏は付け加えた。
固定金利ローンの満期や家計の借り換えに伴い、その影響が徐々に現れる可能性がある。しかし、低所得者への圧力で支出が低迷すれば、その影響は経済全体に広がる可能性がある。
株式投資家: 利回りに圧迫される
株式市場は好調な収益とAI主導の生産性向上に対する楽観的な見方に支えられ、回復力を示している。しかし、債券利回りの上昇により、より安全な政府債務が株式に比べて魅力的になる一方で、投資家が企業の将来の収益に割り当てる現在価値も低下する。
ロジェフスキー氏は「利回りの上昇はある時点で株式にとって苦痛となる」と述べた。
「株式市場は、こうした利回りの上昇を乗り越え、あるいは回避することができたという点で注目に値するものでした…しかし、最終的には追いつき始めます。それが今起こっていることだと思います。」
それでも、利回りの上昇は注目に値する勝者をもたらします。それは、新たな債券購入者です。 10年初めの低利回り環境とは異なり、現在ではクーポン支払いの拡大がさらなる価格下落に対する緩衝材となっている。
ドイツ銀行は、債券価格下落によるキャピタルロスが投資家が受け取るクーポン収入を上回る前に、10年米国債利回りは今後1年間で約5.5％まで上昇する可能性があると予想している。トータルリターンがマイナスに転じるには、2年間で利回りが約6.4％まで上昇する必要がある。
この計算は、クーポン収入と債券市場価格の変化を組み合わせた名目トータルリターンを指します。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/03/global-bond-yields-rising-treasuries-jgb-bunds.html",
    publishedAt: "2026-09-03T04:20:20+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 7,
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
