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
    id: "the-national-debt-is-about-to-hit-40-tri-5626cf07",
    title: "The national debt is about to hit $40 trillion. Here’s how it can hurt Americans.",
    titleJa: "国の借金は40兆ドルに達しようとしています。それがアメリカ人にどのような害を及ぼす可能性があるかは次のとおりです。",
    summaryJa: "研究グループは、学生資金を提供する大学、住宅を購入する家族、社会保障受給者への影響を調査した。",
    bodyOriginal: `A research group looked at the consequences for a student financing college, a family buying a home and a Social Security recipient.`,
    bodyJa: `研究グループは、学生資金を提供する大学、住宅を購入する家族、社会保障受給者への影響を調査した。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/the-national-debt-is-about-to-hit-40-trillion-heres-how-it-can-hurt-americans-b4f252b9?mod=mw_rss_topstories",
    publishedAt: "2026-08-18T18:33:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-11536547",
    readTime: 2,
  },
  {
    id: "global-borrowing-costs-hit-fresh-highs-o-3d3d4ad6",
    title: "Global borrowing costs hit fresh highs on oil, AI and inflation",
    titleJa: "石油、AI、インフレにより世界の借入コストが最高値を更新",
    summaryJa: "石油、AI、インフレにより世界の借入コストが最高値を更新- 公開されました",
    bodyOriginal: `Global borrowing costs hit fresh highs on oil, AI and inflation
- Published
Long-term borrowing costs across some of the word's biggest economies hit fresh highs because of concerns over inflation, government debt levels and spending on Artificial Intelligence (AI).
The interest rate on US borrowing over 30 years hit 5.33% on Tuesday, the highest since June 2007, meanwhile UK long-term debt reached 5.85%. There were similar moves in Germany and Japan.
Interest rates on bonds - which are a type of debt - are known as yields and can directly affect the borrowing costs consumers pay on mortgages, car loans and credit cards.
Rising oil prices are the main driver behind this recent surge in bond yields, as investors fear inflation could spike again.
If that happens, central banks may choose to raise interest rates to cool inflation.
On Tuesday, a barrel of Brent crude, the global benchmark for oil prices, surpassed $90 following growing tensions over the conflict in the Middle East.
The recent surge came after President Donald Trump threatened to bomb Oman - a US ally - if it "gets in the way" of talks with Iran to reopen the Strait of Hormuz waterway.
The US and Oman have each been negotiating separately with the Iranian government to reopen the key passage which is vital for global oil supply and other trade.
The strait being largely closed for almost six months due to the US-Israel war with Iran has caused oil supply disruption, leading to higher prices.
As well as hiking the cost of motor fuel, elevated global oil prices can lead to price rises across the board as companies pass the higher expenses they face to consumers, pushing up inflation.
Oil is a key factor in business. More often than not goods are transported by lorry or van.
John Canavan, lead analyst at Oxford Economics, told the BBC the inflation risk from higher oil prices, along with high levels of government debt and uncertainty around the vast sums being invested into AI - and when that will pay off - were all playing a part in higher borrowing costs.
He said this could lead to higher mortgage rates and borrowing costs for car loans for consumers as a result.
Higher yields, he warned, would mean companies could have to pay more to borrow money and might pass that on to customers.
"It adds to the overall inflationary impact," he said, adding that in the longer-term the risk was higher inflation could slow economic growth.
Bond investors typically demand higher returns - or yields - if inflation is high or they expect it to be elevated in the future.
Governments and corporations sell bonds - essentially an IOU - to raise money for spending and in return they pay interest.
As well as inflation fears, Canavan said there had been a "push back" across the world from bond investors over the broad financial policies and spending plans of a number of governments.
The UK's financial position and levels of borrowing has led to Prime Minister Andy Burnham to assure the bond markets that he is committed to sticking to the government's existing borrowing limits, known as its fiscal rules.
Borrowing costs edged up when he took over the Labour leadership from Sir Keir Starmer this summer.
Prior to commitments on the fiscal rules, investors had considered that Burnham would be more likely to increase Britain's already high public borrowing, especially following his comments last year that the UK had to "get beyond this thing of being in hock to the bond markets".
Economists at Capital Economics said in a note that the largest rises in long-term borrowing costs were being seen in the "US, UK, France, Italy, and Japan where, to varying degrees, the fiscal outlook is most problematic".
They said the situation did not represent a "bond market crisis", but added: "There are rational reasons for investors to demand higher returns on long-term government debt: greater geopolitical and inflation uncertainty, questions over US monetary policy and unsustainable fiscal positions."
Canavan said in long-term borrowing costs in the US were also being driven by a "record pace" of corporate borrowing in recent weeks, mostly for the development and build-out of AI and data centres.
However, with uncertainty over the hundreds of billions of dollars being ploughed into AI as well as the potential risks, investors are demanding higher returns on lending.
"The yields are troubling people because it portends a tighter environment and it's going to be more expensive to borrow money," said Kim Forrest, chief investment officer at Bokeh Capital Partners.
"Especially in this whole AI thing where time to pay it back is uncertain. It makes for a nervous investor environment."`,
    bodyJa: `石油、AI、インフレにより世界の借入コストが最高値を更新
- 公開されました
インフレ、政府債務水準、人工知能（AI）への支出に対する懸念から、一部の主要経済国の長期借入コストが新たな最高値を記録した。
米国の３０年超借入金利は火曜日に５．３３％と２００７年６月以来の高水準に達し、一方英国の長期債務は５．８５％に達した。ドイツや日本でも同様の動きがあった。
借金の一種である債券の金利は利回りとして知られており、消費者が住宅ローン、自動車ローン、クレジットカードで支払う借入コストに直接影響を与える可能性があります。
投資家はインフレが再び急上昇する可能性を懸念しており、原油価格の上昇がこの最近の債券利回り上昇の主な要因となっている。
そうなれば、中央銀行はインフレを抑えるために利上げを選択する可能性がある。
中東紛争をめぐる緊張の高まりを受け、火曜日、原油価格の世界的な指標であるブレント原油１バレルが９０ドルを超えた。
最近の急騰は、ホルムズ海峡水路再開に向けたイランとの協議を「邪魔」する場合、米国の同盟国であるオマーンを爆撃するとドナルド・トランプ大統領が脅迫した後に起きた。
米国とオマーンはそれぞれ、世界の石油供給やその他の貿易にとって重要な重要な航路の再開に向けて、イラン政府と個別に交渉を行っている。
米国・イスラエルとイランの戦争により、この海峡はほぼ半年にわたって大部分が閉鎖されており、石油供給に混乱が生じ、価格の高騰につながっている。
世界的な石油価格の高騰は、自動車燃料のコストを上昇させるだけでなく、企業が直面する高額な経費を消費者に転嫁し、インフレを押し上げるため、全体的な価格上昇につながる可能性があります。
石油はビジネスにとって重要な要素です。多くの場合、商品はトラックやバンで輸送されます。
オックスフォード・エコノミクスの主任アナリスト、ジョン・カナバン氏はBBCに対し、原油価格の高騰によるインフレリスク、高水準の政府債務、AIへの巨額投資とそれがいつ報われるかに関する不確実性がすべて、借入コスト上昇の一因となっていると語った。
その結果、住宅ローン金利や消費者の自動車ローンの借り入れコストの上昇につながる可能性があると述べた。
同氏は、利回りが上昇すれば企業は借入により多くの費用を支払わなければならなくなり、それが顧客に転嫁される可能性があることを意味すると警告した。
同氏は「全体的なインフレへの影響がさらに高まる」と述べ、長期的にはインフレ上昇が経済成長を鈍化させるリスクがあると付け加えた。
債券投資家は通常、インフレ率が高い場合、またはインフレ率が将来上昇すると予想される場合、より高いリターン、つまり利回りを要求します。
政府や企業は支出資金を調達するために債券（本質的には借用書）を販売し、その見返りに利息を支払います。
カナバン氏は、インフレ懸念だけでなく、多くの政府の広範な金融政策や支出計画をめぐり、世界中で債券投資家からの「反発」があったと述べた。
英国の財政状況と借入水準を考慮して、アンディ・バーナム首相は債券市場に対し、財政ルールとして知られる政府の既存の​​借入制限を堅持する決意を表明した。
今夏、同氏がキア・スターマー卿から労働党指導部の職を引き継いだ際、借入コストが若干上昇した。
財政ルールに関するコミットメントに先立って、特に英国は「債券市場への依存を脱却しなければならない」との昨年の同氏のコメントを受けて、投資家らはバーナム氏が英国のすでに高額な公的借入を増やす可能性が高いと考えていた。
キャピタル・エコノミクスのエコノミストらはメモの中で、長期借入コストの最大の上昇が「程度の差こそあれ、財政見通しが最も問題となっている米国、英国、フランス、イタリア、日本」で見られていると述べた。
両氏は、この状況は「債券市場の危機」ではないとした上で、「投資家が長期国債に対してより高いリターンを要求する合理的な理由がある。地政学やインフレの不確実性の高まり、米国の金融政策を巡る疑問、持続不可能な財政状況だ」と付け加えた。
カナバン氏は、米国の長期借入コストも、ここ数週間の企業借入の「記録的なペース」によっても増加しており、主にAIやデータセンターの開発と増強を目的としていると述べた。
しかし、AIにつぎ込まれている数千億ドルと潜在的なリスクに対する不確実性を背景に、投資家はより高い融資収益を求めている。
ボケ・キャピタル・パートナーズの最高投資責任者、キム・フォレスト氏は「利回りは人々を悩ませている。なぜなら、利回りは環境の逼迫を予感させ、借入コストが高くなるからだ」と述べた。
「特にこのAI関連では返済時期が不確実であり、投資家にとっては神経質な環境となっている。」`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c1k1x1zdywdo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-18T18:20:08+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/c03c/live/2a921030-9b15-11f1-ae25-295c0447cea3.jpg",
    readTime: 5,
  },
  {
    id: "trump-carney-reportedly-in-talks-ahead-o-a281c4c4",
    title: "Trump, Carney reportedly in talks ahead of new 50% tariffs on Canadian goods",
    titleJa: "トランプ氏とカーニー氏、カナダ製品に対する新たな50％関税に向け協議中と伝えられる",
    summaryJa: "火曜日のさまざまな報道によると、ドナルド・トランプ大統領は、米国がホッケースティック、ワイン、その他カナダからの輸入品に50％の関税を課すまであと数時間で、カナダのマーク・カーニー首相と新たな貿易交渉を行っている。ブルームバーグによると、トランプ氏とカーニー氏は月曜日遅くに会談し、火曜日に再び会談する予定だという。フォックス・ビジネスは、月曜夜の首脳会談では、トランプ大統領に今後の報復関税を延期するよう説得できなかったと報じた。ホワイトハウスはCNBCのコメント要請にすぐには応じなかった。",
    bodyOriginal: `President Donald Trump is in renewed trade talks with Canadian Prime Minister Mark Carney, with just hours to go before the U.S. imposes 50% tariffs on hockey sticks, wine and an array of other Canadian imports, according to various news reports Tuesday.
Trump and Carney spoke late Monday and are set to speak again Tuesday, Bloomberg reported. The talks between the leaders on Monday night did not convince Trump to hold off on the forthcoming retaliatory tariffs, Fox Business reported. The White House did not immediately respond to CNBC's request for comment.
The new tariffs are set to take effect Wednesday, unless a deal is struck to postpone or cancel them. Business leaders warn that the threat alone has generated significant uncertainty and already affected sales.
If no deal emerges, they'll become the latest import duties that Trump, a megafan of using tariffs to protect domestic industries and raise government revenue, has slapped on Canada. The countries have long been close allies and top trading partners.
The 50% tariffs were unveiled last month in response to what the Trump administration called Canadian trade discrimination in the motor vehicle, alcohol and dairy industries.
They are being imposed under Section 338 of the Tariff Act of 1930, a Great Depression-era law that has rarely, if ever, been invoked and has been neglected for decades.
The new tariffs cover roughly $20 billion worth of Canadian imports, according to the Office of the U.S. Trade Representative.
While that's a fraction of the $382 billion that the U.S. imported from Canada last year, the high rate on targeted products could still pose major challenges to Canadian sellers.
"A 50% tariff essentially makes a product uneconomic to sell into a particular market," said Dan Kelly, president of the Canadian Federation of Independent Business, in an interview with CNBC.
Many of the group's 103,000 members said the new tariffs could "grind their U.S. sales to a halt" if implemented, Kelly said. Some businesses reported already seeing U.S. buyers hold off on future orders in anticipation of the new duties, he added.
Trump has already imposed a variety of tariffs on Canada and its specific exports, including metals, lumber and auto parts. Trump also imposed hefty tariffs on Canada over alleged drug-trafficking concerns, but the Supreme Court struck those down in February.
But the Section 338 tariffs "really strike at the heart of small business trade between Canada and the United States," because so many of the targeted products are consumer-oriented, said Kelly.
"It's deeply worrisome for a huge swath of Canadian businesses," he said.
Some of the Trump administration's tariffs on Canada include exemptions for goods compliant with the trilateral North American trade deal known as USMCA.
Last month, the Trump administration said it would not renew that trade agreement, triggering a series of annual reviews that raise questions about the treaty's future.
Neil Herrington, the U.S. Chamber of Commerce's senior vice president for the Americas, said in a statement Tuesday morning that new higher tariffs "would damage both economies, drive up costs for U.S. families, further disrupt critical supply chains, and risk the 13 million American jobs that depend on trade" under the USMCA.`,
    bodyJa: `火曜日のさまざまな報道によると、ドナルド・トランプ大統領は、米国がホッケースティック、ワイン、その他カナダからの輸入品に50％の関税を課すまであと数時間で、カナダのマーク・カーニー首相と新たな貿易交渉を行っている。
ブルームバーグによると、トランプ氏とカーニー氏は月曜日遅くに会談し、火曜日に再び会談する予定だという。フォックス・ビジネスは、月曜夜の首脳会談では、トランプ大統領に今後の報復関税を延期するよう説得できなかったと報じた。ホワイトハウスはCNBCのコメント要請にすぐには応じなかった。
新たな関税は延期または中止の合意が得られない限り、水曜日に発効する予定だ。ビジネスリーダーらは、この脅威だけでも大きな不確実性が生じ、すでに売上に影響を与えていると警告している。
合意が成立しなければ、国内産業を保護し、政府歳入を増やすために関税を利用することの大ファンであるトランプ大統領がカナダに課した最新の輸入関税となる。両国は長年にわたり緊密な同盟国であり、主要な貿易相手国であった。
50％関税は、トランプ政権が自動車、アルコール、乳製品産業におけるカナダの貿易差別と呼んだものに対抗して先月発表された。
これらは 1930 年の関税法第 338 条に基づいて課されているが、この法律は大恐慌時代の法律であり、発動されたことはあってもめったになく、何十年も無視されてきた。
米通商代表部によると、新たな関税はカナダからの輸入品約200億ドル相当が対象となる。
これは米国が昨年カナダから輸入した3,820億ドルの一部に過ぎないが、対象製品に対する高い税率は依然としてカナダの販売業者にとって大きな課題となる可能性がある。
カナダ独立ビジネス連盟のダン・ケリー会長は、CNBCのインタビューで、「50％の関税は本質的に、製品を特定の市場に販売するのが不経済になる」と語った。
ケリー氏によると、同団体の会員10万3000人の多くは、新たな関税が発動されれば「米国での販売が停止する」可能性があると述べた。一部の企業は、米国のバイヤーが新たな関税を期待して今後の注文を控えているとすでに報告していると同氏は付け加えた。
トランプ大統領はすでにカナダと、金属、木材、自動車部品などの特定輸出品にさまざまな関税を課している。トランプ大統領はまた、麻薬密売の疑いを理由にカナダに高額の関税を課したが、最高裁判所は2月にこれを取り消した。
しかし、対象となる製品の多くが消費者向けであるため、第338条の関税は「カナダと米国の間の中小企業貿易の中心をまさに打撃している」とケリー氏は述べた。
「カナダの広範な企業にとって、これは非常に憂慮すべきことだ」と同氏は語った。
トランプ政権の対カナダ関税の一部には、USMCAとして知られる北米3カ国貿易協定に準拠した商品に対する免除が含まれている。
トランプ政権は先月、同貿易協定を更新しないと発表し、同協定の将来について疑問を生じさせる一連の年次見直しを引き起こした。
米商工会議所の米州上級副会長ニール・ヘリントン氏は火曜朝の声明で、新たな関税引き上げはUSMCAに基づき「両国経済にダメージを与え、米国家庭のコストを押し上げ、重要なサプライチェーンをさらに混乱させ、貿易に依存する米国の1300万人の雇用を危険にさらす」と述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/18/trump-carney-canada-tariffs-dealine-talks.html",
    publishedAt: "2026-08-18T18:05:05+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 3,
  },
  {
    id: "u-s-government-debt-yields-are-surging-a-c892ef7d",
    title: "U.S. government debt yields are surging at a bad time. Here's what's behind the move",
    titleJa: "米国国債の利回りは悪いタイミングで急上昇している。この動きの背後にあるものは次のとおりです",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Treasury yields are continuing to climb, and at a particularly bad time as higher rates worsen the impact of the nearly $40 trillion government debt load.
Longer-dated debt has been hit particularly hard by the recent leg up, pushing the 30-year bond yield close to its highest level since the early part of the 21st century. Other maturities also have risen, owing to a number of factors conspiring to raise financing costs.
Fixed income strategists ascribe the run that began in June to a number of variables: Intensified concerns over a budget deficit that appears set to eclipse its 2025 level; inflation in an ominous holding pattern above the Federal Reserve's 2% target despite moderating data over the past two months; and a rash of corporate debt issuance competing with Treasurys for investors' favor.
Broadly, the move can also be attributed to a rising term premium, or the extra yield investors demand to hold U.S. debt.
Together, the various factors have combined to create a difficult environment for fixed income, though one that has yet to materially hit the stock market. Yields turned lower Tuesday, easing a trend that has seen the 30-year yield jump more than 40 basis points, or 0.4 percentage point, since the late-June low.
"These are not new forces, and the rise in long-term yields has been gradual rather than sudden," Anshul Pradhan, head of U.S. rates research at Barclays Capital, said in a Monday client note. "What is notable today is not the existence of these pressures, but that they appear strong enough to overwhelm individual soft-data releases. Three independent releases argued for lower yields this month; long end yields moved higher anyway."
Multiple causes
Indeed, recent inflation data has been at least moving in the right direction: Both consumer and producer prices were little changed in July, and the core measure that excludes food and energy stood at 2.5% —essentially where it was before the war against Iran began in late February.
But the recent moves appear to be about more than inflation.
For one, there's the debt and deficit situation.
The U.S. saw a budget shortfall of $432.3 billion in July, the widest single-month gain since March 2021 and likely locking in a $2 trillion deficit for the full year ending Sept. 30. Total government debt is a hair below $40 trillion, with the public portion of that soon to hit 100% of gross domestic product.
Debt financing costs have totaled $1.12 trillion through July and are expected to hit $1.37 trillion for the full fiscal year, or about $84 billion more than in 2025. On net, the government has spent more on debt financing this year than anything else outside of Social Security and Medicare.
Market veteran Ed Yardeni coined the term "bond vigilantes" in the early 1980s to describe fixed income investors who go on strike to protest poor fiscal conditions. In a CNBC interview, the head of Yardeni Associates, though generally constructive on both the debt and equity markets, said, "We're kind of testing the outer limits of where the bond vigilantes are really going to start protesting."
"They're concerned that maybe the Fed isn't being vigilant enough about inflation; they're concerned about the price of oil," he said. "But at the end of the day, the bond yield wouldn't be here if the economy wasn't doing well. So I view it as a vote of confidence in the strength of the economy."
AI issuance factor
Bonds are facing other tests as well.
The surge of investment in artificial intelligence has coincided with a rush of companies coming to market in search of capital.
So far this year, U.S. companies have issued nearly $1.7 trillion in bonds, up 27% from the same period a year ago and more than all of 2025 combined, according to Securities Industry and Financial Markets Association data. The trend is mirrored overseas, with government debt yields surging around the world.
Normally, U.S. Treasury debt is considered the deepest and most liquid market in the world. But that doesn't mean there's no competition.
"On top of concerns about the growth of government debt, a record pace of corporate bond issuance has added substantial duration supply to U.S. fixed income markets, with consequences for the outright level of yields as well as the shape of the yield curve and term premium," Ian Lyngen, head of U.S. rates strategy at BMO Capital Markets, said in a note.
"The path of least resistance will likely favor higher long-end rates in the near-term unless there is a slowdown in the market supply of duration, sharp tightening of financial conditions or dimming of the economic outlook," he added.
The Fed factor
Then there's the Fed itself.
New Chairman Kevin Warsh has been coy about where he sees rates headed, keeping with his disdain for forward guidance. A suddenly opaque central bank has added another layer of tension to a market already balancing multiple other risks, with yields rising even though the Fed has kept its benchmark steady in a range between 3.50%-3.75% all year.
Markets now are pricing in little chance the Fed will raise at its September meeting and, in fact, now doesn't foresee a high probability of an interest rate increase until December, according to the CME Group's FedWatch tool. In turn, that has caused markets to question whether the Fed is committed to its 2% inflation target as staunchly as official rhetoric suggests.
Still, Yardeni is encouraged to see a market less influenced by the Fed, and expects that higher yields will soon attract buyers.
"The bond market is actually finally working the way it should work. It's allocating capital efficiently," he said. "It wasn't doing that when the Fed was basically rigging the bond market by keeping the bond yield close to zero by dropping the federal funds rate down to zero. So this this is kind of back to market-driven interest rates."`,
    bodyJa: `国債利回りは上昇を続けており、金利上昇により40兆ドル近い政府債務負担の影響がさらに悪化するという特に悪い時期にある。
最近の上昇で長期債は特に大きな打撃を受けており、３０年債利回りは２１世紀初頭以来の最高水準付近に上昇している。資金調達コストを上昇させるさまざまな要因が重なって、他の年限も上昇しています。
債券ストラテジストらは、6月に始まった財政赤字の悪化には多くの変動要因があると考えている。2025年の水準を超えそうな財政赤字に対する懸念の高まり。過去 2 か月間データが緩やかであったにもかかわらず、インフレ率は連邦準備理事会の目標である 2% を上回る不気味なパターンで維持されている。そして投資家の好意を求めて財務省と競合する社債発行の急増。
大まかに言えば、この動きはタームプレミアム、つまり投資家が米国債を保有するために要求する追加利回りの上昇に起因しているとも考えられる。
さまざまな要因が重なり、債券市場には厳しい環境が生まれているが、株式市場にはまだ大きな打撃を与えていない。火曜日には利回りが低下に転じ、３０年債利回りが６月下旬の最低水準から４０ベーシスポイント（０．４％ポイント）以上上昇する傾向が緩和された。
バークレイズ・キャピタルの米国金利調査部門責任者、アンシュル・プラダン氏は月曜の顧客向けノートで、「これらは新たな勢力ではなく、長期利回りの上昇は突然ではなく徐々に起こっている」と述べた。 「今日注目すべきことは、こうした圧力の存在ではなく、その圧力が個々のソフトデータリリースを圧倒するほど強力であるように見えることだ。今月は３つの独立したリリースが利回り低下を主張したが、とにかく長期金利は上昇した。」
複数の原因
実際、最近のインフレデータは少なくとも正しい方向に進んでいる。7月の消費者物価と生産者物価はほとんど変化がなく、食料とエネルギーを除いたコア指標は2.5％で、実質的には2月下旬に対イラン戦争が始まる前の水準だった。
しかし、最近の動きはインフレ以上のものを目的としているようだ。
まず、債務と赤字の状況が挙げられます。
米国の7月の予算不足額は4,323億ドルで、単月としては2021年3月以来の大幅な増加となり、9月30日までの通年では2兆ドルの赤字に確定する可能性が高い。政府債務総額は40兆ドルをわずかに下回り、そのうち公的部分が国内総生産の100％に達する日も近い。
債務調達コストは7月までに合計1兆1200億ドルに達し、会計年度通年では1兆3700億ドルに達すると予想されており、これは2025年より約840億ドル増加する。純額では、政府は今年、社会保障とメディケア以外の支出よりも債務調達に多くを支出した。
市場のベテラン、エド・ヤルデニ氏は1980年代初頭に、劣悪な財政状況に抗議してストライキを起こす債券投資家を表す「債券自警団」という言葉を作った。 CNBCのインタビューで、ヤルデニ・アソシエーツのトップは、債券市場と株式市場の両方に対して概ね建設的ではあるものの、「債券自警団が実際にどこで抗議活動を始めるのか、我々は外側の限界を試しているようなものだ」と語った。
同氏は「彼らはFRBがインフレについて十分に警戒していないのではないかと懸念しており、原油価格を懸念している」と述べた。 「しかし、結局のところ、経済が好調でなければ、債券利回りはここには存在しなかったでしょう。ですから私は、これを経済の強さに対する信任投票だと考えています。」
AI発行要因
債券は他の試練にも直面している。
人工知能への投資の急増は、資本を求めて市場に参入する企業のラッシュと一致しています。
証券産業・金融市場協会のデータによると、今年これまでに米国企業は1兆7000億ドル近くの社債を発行しており、前年同期比27％増で、2025年の全期間を合わせた額を上回っている。この傾向は海外でも反映されており、世界中で国債利回りが急上昇している。
通常、米国財務省債券は世界で最も深く、最も流動性の高い市場と考えられています。しかし、それは競争が存在しないという意味ではありません。
ＢＭＯキャピタル・マーケッツの米金利戦略部門責任者イアン・リンゲン氏は「政府債務の増加に対する懸念に加え、記録的なペースでの社債発行により米国の債券市場へのデュレーション供給が大幅に増加し、その結果、利回りの完全な水準やイールドカーブの形状、期間プレミアムに影響が生じている」とノートで述べた。
同氏は「市場のデュレーション供給の減速、金融情勢の急激な引き締め、経済見通しの暗転がない限り、短期的には抵抗が最も少ない道筋で長期金利の上昇が有利になる可能性が高い」と付け加えた。
FRBの要因
次にFRB自体もある。
ケビン・ウォーシュ新議長は、フォワードガイダンスを軽視しつつ、金利がどこに向かうとの見通しについては口を閉ざしている。中央銀行が突然不透明になったことで、すでに他の複数のリスクのバランスを取っている市場にさらなる緊張が加わり、FRBが年間を通じて指標を3.50～3.75％の範囲で安定させてきたにもかかわらず、利回りは上昇している。
ＣＭＥグループのフェドウォッチツールによると、市場は現在、ＦＲＢが９月会合で利上げする可能性はほとんどないと織り込んでおり、実際、１２月まで利上げの可能性は高くないと予想している。その結果、市場ではFRBが公式のレトリックが示唆するほど断固として2％のインフレ目標に取り組んでいるのかどうか疑問が生じている。
それでもヤルデニ氏は、市場がFRBの影響を受けにくいことを期待しており、利回りの上昇によりすぐに買い手が集まるだろうと予想している。
同氏は「債券市場は実際、ようやく本来あるべき形で機能しつつある。資本を効率的に配分している」と述べた。 「FRBがフェデラル・ファンド金利をゼロに引き下げることで債券利回りをゼロ近くに維持するという基本的に債券市場を操作していたときには、そのようなことはしていなかった。つまり、これは一種の市場主導の金利に戻ったということだ。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/18/us-government-debt-yields-are-surging-at-a-bad-time-heres-whats-behind-the-move.html",
    publishedAt: "2026-08-18T17:35:17+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 6,
  },
  {
    id: "apple-overhauls-europe-app-store-fees-to-0f9f5721",
    title: "Apple overhauls Europe app store fees to resolve payments clash",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Apple on Tuesday announced that alternative, third-party app stores in the European Union will be charged a 5% commission on in-app purchases, which the iPhone maker said will "resolve" disagreements with regulators stemming from the implementation of Europe's Digital Markets Act.
Under the new rules, apps purchased through Apple's App Store using Apple's system will pay a commission of 26% on digital goods and services. Apps that use their own payment processing systems and take credit cards directly will pay Apple 20%. Apps that link out to a website to complete purchases will be charged 15%, and apps distributed through third-party app stores or the web will be charged 5%, which Apple calls a "Core Technology Commission." Some fees can be cut in half by participating in various Apple programs.
It's a replacement for a more complicated system that Apple proposed last year. The new fee tiers take effect on Oct. 1.
Historically, Apple charged either 30% or 15% on all iPhone in-app purchases, and required that all non-enterprise iPhone apps be installed through its App Store. But Apple's App Store model has been under attack around the world in the past decade from lawsuits and government regulators, as critics say it operates as a monopoly on iPhone software and squeezes developers and users with fees.
Apple has argued that its App Store and in-app purchase requirements are designed to increase trust and safety and enforce issues around security and inappropriate apps.
The European Commission passed the Digital Markets Act in 2022, requiring "gatekeepers" like Apple to open up its App Store — and other Apple services and products such as Siri — to third parties. But there has been friction between Apple and the EC over the company's App Store proposals, and Apple has faced large fines.
Only a handful of regions require Apple to enable third-party app stores that can sell iPhone apps and Europe is the only region where users can install iPhone software from the web. Japan and Brazil have also required third-party app stores.
In the U.S., Apple is fighting to restrict users from linking out to payments on the web as part of the lingering Epic Games litigation. It recently proposed a 15% commission on link-out payments in the U.S.
Apple said its proposal on Tuesday resolves its disagreements with the European Commission on the matter. It also said that it worked with the EC to implement child safety measures, including adding parental restrictions on some in-app purchases.
Apple generates significant revenue from its App Store, which is reported in its profitable Services division, but it didn't highlight the App Store as a top driver of services growth in the most recent quarter for the first time since 2023, according to a Morgan Stanley note. CFO Kevan Parekh noted slower mobile gaming and other factors affecting the performance of the App Store in a call with analysts in July.
"Keep in mind, we also made some changes to the App Store business model in certain countries," Parekh said.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/18/apple-eu-app-store-fees-iphone.html",
    publishedAt: "2026-08-18T17:16:49+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "bond-yields-are-climbing-here-s-what-tha-2f92acdb",
    title: "Bond yields are climbing. Here’s what that means for mortgages and other consumer borrowing",
    titleJa: "債券利回りは上昇している。これが住宅ローンやその他の消費者借り入れにとって何を意味するかは次のとおりです",
    summaryJa: "持続するインフレ圧力を背景に、長期債の利回りは上昇しており、専門家らは特に住宅ローンなどの長期固定金利ローンの借り入れコストが上昇し続ける可能性が高いと指摘している。米国の30年国債利回りは火曜日、19年ぶりの高水準となる5.323％に達したが、その後5.3％をわずかに下回る水準まで低下した。住宅ローンの固定金利やその他の長期ローンの主要なベンチマークである10年米国債利回りは4.7％を超えている。これに比べ、2月末のイラン戦争開始前は4%未満だった。",
    bodyOriginal: `Against a backdrop of persisting inflationary pressures, yields on longer-term bonds have been climbing, which experts say is likely to keep borrowing costs elevated — particularly for long-term fixed-rate loans such as mortgages.
The yield on the U.S. 30-year Treasury bond hit 5.323% on Tuesday, a 19-year high, before edging down to just below 5.3%. The 10-year Treasury yield — a key benchmark for fixed mortgage rates and other longer-term loans — is above 4.7%. That compares to below 4% before the start of the Iran War at the end of February.
"The higher bond yields on long-dated securities, like the 30-year Treasury, clearly indicate discomfort over persistently high inflation in the future," said Lawrence Yun, chief economist for the National Association of Realtors.
The annual rate of inflation was 3.4% in July as measured by the consumer price index, far above the Federal Reserve's target of 2%. Before the war, in January, the annual inflation rate was 2.4%.
What bond yields mean for mortgage rates
Since 15- and 30-year fixed-rate mortgages typically follow the lead of Treasury rates, higher yields have already been pushing up mortgage rates. The average rate for a 30-year, fixed-rate mortgage was 6.75% as of Tuesday, after finishing last week at 6.69%, according to Mortgage News Daily.
"The impact on mortgage rates is directly related to higher bond yields," Yun said. "Independent of the Federal Reserve policy, higher inflation and higher overall long-term borrowing costs will mean higher mortgage rates."
He said consumers should not expect any meaningful decline in mortgage rates.
Last week's "favorable economic data provided only temporary relief," said Jeff DerGurahian, LoanDepot's chief investment officer and head economist. Higher energy prices stemming from the Iran conflict remain "an important part of the inflation picture," he said.
"Longer-term bond investors may need more evidence that the post-pandemic inflation cycle is truly behind us and that the economy is returning to a slower-growth, slower-inflation environment before 10- and 30-year Treasury yields move meaningfully lower," DerGurahian said.
In the meantime, there are ways to offset today's higher rates, experts say.
"Some may want to consider shorter-term mortgage rates, like seven-year [adjustable-rate mortgages], which lock in fixed mortgage payments for the first seven years of the loan before readjusting," Yun said. "These shorter-duration loans are ideal for those who are more certain they will move to another home within that seven-year timeframe."
What bond yields mean for other consumer loans
Rates on car loans, credit cards and student debt are also directly or indirectly tied to bond yields, meaning those monthly payments could increase as well.
"It typically is an immediate pass-through to some consumer rates," said Brett House, an economics professor at Columbia Business School. "Variable and some fixed-rate borrowing will reset rates on a daily basis."
Renewed worries about the trajectory of Fed interest rate policy could weigh on variable credit card rates, which are closely pegged to the prime rate and influence inflation expectations.
Auto loan rates are also susceptible to broader economic factors.
"Auto loan rates don't move in a vacuum, but sustained pressure on Treasury yields inevitably pushes up borrowing costs across the financing spectrum," said Jessica Caldwell, head of insights at Edmunds.
"With average new-vehicle APRs already stuck around 7% and used vehicles at 10.6%, consumers are already paying heightened interest," she said. "If higher bond yields keep interest rates elevated, auto lenders will have little choice but to maintain or even bump up APRs, further stretching consumer budgets."
Although federal student loan rates are fixed for the life of the loan, rates rose for new borrowers in the year ahead based on the last 10-year Treasury note auction in May.
"Of course, higher borrowing costs are meant to fight inflation, but there's a potential double whammy for consumers," said Ted Rossman, a principal consumer finance analyst at Money Management International, a nonprofit credit counseling agency. "When prices are high, and borrowing costs are high — as they are now — you feel like you're getting squeezed from all sides."`,
    bodyJa: `持続するインフレ圧力を背景に、長期債の利回りは上昇しており、専門家らは特に住宅ローンなどの長期固定金利ローンの借り入れコストが上昇し続ける可能性が高いと指摘している。
米国の30年国債利回りは火曜日、19年ぶりの高水準となる5.323％に達したが、その後5.3％をわずかに下回る水準まで低下した。住宅ローンの固定金利やその他の長期ローンの主要なベンチマークである10年米国債利回りは4.7％を超えている。これに比べ、2月末のイラン戦争開始前は4%未満だった。
全米不動産業者協会の首席エコノミスト、ローレンス・ユン氏は「３０年米国債のような長期債の債券利回りの上昇は、将来のインフレ高止まりに対する不快感を明確に示している」と述べた。
消費者物価指数で測定した７月の年率インフレ率は３．４％で、米連邦準備理事会（ＦＲＢ）の目標である２％を大幅に上回った。戦前の1月の年間インフレ率は2.4％でした。
債券利回りが住宅ローン金利に与える影響
15年と30年の固定金利住宅ローンは通常、財務省金利に追随するため、利回りの上昇によりすでに住宅ローン金利が上昇している。モーゲージ・ニュース・デイリーによると、30年固定金利住宅ローンの平均金利は、先週6.69％で終了したが、火曜日時点では6.75％となった。
ユン氏は「住宅ローン金利への影響は債券利回りの上昇に直接関係している」と述べた。 「FRBの政策とは関係なく、インフレ率の上昇と全体的な長期借入コストの上昇は住宅ローン金利の上昇を意味する。」
同氏は、消費者は住宅ローン金利の大幅な低下を期待すべきではないと述べた。
ローンデポの最高投資責任者兼首席エコノミスト、ジェフ・ダーグラヒアン氏は、先週の「良好な経済指標は一時的な安心感をもたらしただけだ」と述べた。同氏は、イラン紛争に起因するエネルギー価格の高騰が依然として「インフレ状況の重要な部分を占めている」と述べた。
デアグラヒアン氏は「長期債券投資家は、パンデミック後のインフレサイクルが真に終わりを迎え、10年債と30年債の利回りが大幅に低下する前に、経済が低成長、低インフレの環境に戻りつつあることを示すさらなる証拠が必要かもしれない」と述べた。
それまでの間、今日の金利上昇を相殺する方法はある、と専門家らは言う。
ユン氏は「一部の人々は、再調整前にローンの最初の7年間固定住宅ローンの支払いを固定する7年（金利調整可能住宅ローン）のような、より短期の住宅ローン金利を検討したいと考えるかもしれない」と述べた。 「これらの期間の短いローンは、7 年の期限内に別の家に引っ越すことがより確実である人にとって理想的です。」
債券利回りが他の消費者ローンに与える影響
自動車ローン、クレジットカード、学生ローンの金利も債券利回りに直接的または間接的に結びついており、これらの月々の支払額も増加する可能性があることを意味します。
コロンビア・ビジネス・スクールの経済学教授ブレット・ハウス氏は、「通常、一部の消費者金利への即時転嫁である」と述べた。 「変動金利および一部の固定金利の借入では、金利が毎日リセットされます。」
FRBの金利政策の軌道をめぐる懸念が再燃し、プライムレートと密接に連動しインフレ期待に影響を与えるクレジットカードの変動金利に重しがかかる可能性がある。
自動車ローン金利は、より広範な経済要因にも影響されます。
エドマンズのインサイト責任者、ジェシカ・コールドウェル氏は「自動車ローン金利は単独で変動するわけではないが、米国債利回りへの持続的な圧力により、資金調達全般にわたる借入コストが必然的に上昇する」と述べた。
同氏は「新車の平均年利率はすでに7％前後、中古車は10.6％にとどまっており、消費者はすでに高い関心を払っている」と述べた。 「債券利回りの上昇で金利が上昇したままであれば、自動車金融業者には年利を維持するか、さらには引き上げる以外に選択肢はほとんどなく、消費者の予算はさらに膨らむことになる。」
連邦学生ローン金利はローン期間中固定されているが、5月に行われた前回10年国債入札に基づいて、今後1年間の新規借り手の金利は上昇した。
非営利信用カウンセリング機関マネー・マネジメント・インターナショナルの首席消費者金融アナリスト、テッド・ロスマン氏は「もちろん、借り入れコストの上昇はインフレに対抗するためだが、消費者にとっては二重の打撃となる可能性がある」と述べた。 「現在のように物価が高く、借入コストが高いときは、あらゆる面から圧迫されているように感じます。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/18/mortgage-rates-treasury-bond-yields-consumer-loans.html",
    publishedAt: "2026-08-18T16:58:29+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 5,
  },
  {
    id: "disney-owned-abc-files-first-amendment-l-3f7b5c06",
    title: "Disney-owned ABC files First Amendment lawsuit against FCC",
    titleJa: "ディズニー傘下のABCがFCCに対して憲法修正第1条の訴訟を起こす",
    summaryJa: "ディズニー傘下のABCは、ドナルド・トランプ大統領を批判してきた番組の性質上、同社に対する政府機関の最近の調査を「報復キャンペーン」であるとして、連邦通信委員会に対して憲法修正第1条に基づく訴訟を起こした。放送ネットワークは火曜日、コロンビア特別区連邦地方裁判所に訴訟を起こした。",
    bodyOriginal: `Disney's ABC has filed a First Amendment lawsuit against the Federal Communications Commission, calling the government agency's recent investigation into the company a "retaliatory campaign" due to the nature of its programming, which has been critical of President Donald Trump.
The broadcast network filed the lawsuit on Tuesday in U.S. District Court for the District of Columbia.
It comes months after the FCC launched an early renewal of a set of ABC's broadcast station licenses, citing concerns around the company's diversity, equity and inclusion efforts.
However, that early review process came shortly after renewed political backlash against ABC following comments made by TV host Jimmy Kimmel on his late-night show, which airs on the broadcast network. ABC has also faced criticism from the government around its daytime talk show, "The View."
ABC's lawsuit calls for the FCC to halt its early broadcast renewal proceedings.
An FCC spokesperson said in a statement Tuesday the government entity was working in the public interest.
"Disney is obviously very concerned about the FCC's proceeding, as evidenced by their ongoing campaign of disinformation as well as their decision to ask a court to stop the FCC from further pursuing matters. The FCC will continue to follow the facts and law wherever they lead," the statement said.
The agency launched its review of ABC licenses in April, years ahead of their scheduled expiration. ABC shot back in May, saying in filings that it was submitting the applications "under protest in response to an unlawful, arbitrary, and unconstitutional order" from the FCC.
FCC Chairman Brendan Carr told CNBC at the time that the agency's focus was on Disney's DEI practices and that the early license renewal was not tied to First Amendment matters.
Carr was appointed by Trump to lead the federal entity meant to regulate the media and telecommunications industry. It began its investigation into Disney's stations last year for possible violations of the Communications Act of 1934 and the FCC's rules regarding its prohibition on unlawful discrimination.
On Tuesday, ABC said it "continues to face irreparable harm" from the administration, which "has been acting" through the FCC.
Last week, Disney CEO Josh D'Amaro doubled down on the company's position in a CNBC interview.
"I think you saw in our FCC filings our position on this is clear," D'Amaro told CNBC's Julia Boorstin at the time. "We're very principled on this. We're going to stand up to what we believe is journalistic and integrity, and we're not going to be told how to run that side of our business."
D'Amaro took over as CEO in March from longtime Disney chief Bob Iger.
Last week, Iger agreed to purchase a majority stake in the NBA's Los Angeles Lakers alongside Joshua Kushner, founder of Thrive Capital and brother of Jared Kushner, who is married to Trump's daughter Ivanka.
FCC Commissioner Anna Gomez — the sole Democrat on the commission and who has opposed its actions against ABC thus far — issued a statement on Tuesday in support of ABC's move to sue the FCC.
"For months, the FCC has waged a campaign of censorship and control against Disney's ABC stations, using the threat of broadcast license revocations to punish a company for speech this administration doesn't like," Gomez said. "I have long called on companies to push back against this kind of government intimidation, and I'm glad Disney has shown courage and stepped up. This should be a welcome sign for every broadcaster who has felt the weight of this overreaching government pressure in silence."`,
    bodyJa: `ディズニー傘下のABCは、ドナルド・トランプ大統領を批判してきた番組の性質上、同社に対する政府機関の最近の調査を「報復キャンペーン」であるとして、連邦通信委員会に対して憲法修正第1条に基づく訴訟を起こした。
放送ネットワークは火曜日、コロンビア特別区連邦地方裁判所に訴訟を起こした。
これは、同社の多様性、公平性、包括性への取り組みに対する懸念を理由に、FCCがABCの一連の放送局ライセンスの早期更新を開始してから数か月後に行われた。
しかし、この初期審査プロセスは、テレビ司会者のジミー・キンメル氏が放送ネットワークで放送している深夜番組での発言を受けて、ABCに対する政治的反発が再び高まった直後に行われた。 ABCは昼のトーク番組「ザ・ビュー」を巡って政府からの批判にも直面している。
ABCの訴訟では、FCCに対し放送更新手続きの早期中止を求めている。
FCCの広報担当者は火曜日の声明で、政府機関は公益のために活動していると述べた。
「ディズニーは明らかに、FCCの訴訟手続きを非常に懸念している。これは、継続的な偽情報キャンペーンや、FCCによるさらなる追及の停止を裁判所に求める決定から分かるように、FCCは今後も、どこまでも事実と法律に従い続ける」と声明で述べた。
同庁は予定されていた有効期限の数年前となる4月にABCライセンスの見直しを開始した。 ABCは5月に反撃し、申請書類はFCCからの「違法かつ恣意的かつ憲法違反の命令に応じた抗議の下」に提出していると述べた。
FCC委員長のブレンダン・カー氏は当時CNBCに対し、FCCはディズニーのDEI慣行に焦点を当てており、ライセンスの早期更新は合衆国憲法修正第1条の問題とは関係ないと語った。
カー氏はトランプ大統領により、メディアと通信業界を規制する連邦機関のトップに任命された。同局は昨年、1934年通信法と不法差別の禁止に関するFCC規則に違反した疑いでディズニーの放送局に対する調査を開始した。
火曜日、ABCは、FCCを通じて「行動している」政権から「取り返しのつかない損害に直面し続けている」と述べた。
先週、ディズニーのジョシュ・ダマロ最高経営責任者（CEO）はCNBCのインタビューで同社の立場をさらに強調した。
「私たちのFCC提出書類を見れば、この件に関する私たちの立場は明らかだ」とダマロ氏は当時CNBCのジュリア・ブールスティンに語った。 「私たちはこれに関して非常に原則を持っています。私たちはジャーナリズムと誠実であると信じているものに立ち向かうつもりであり、私たちのビジネスのその側面をどのように運営するかを指示されるつもりはありません。」
ダマロは3月にディズニーのCEOを長年務めたボブ・アイガー氏からCEOに就任した。
アイガー氏は先週、スライヴ・キャピタルの創設者でトランプ氏の娘イヴァンカ氏と結婚しているジャレッド・クシュナー氏の弟であるジョシュア・クシュナー氏とともに、NBAのロサンゼルス・レイカーズの過半数の株式を購入することに合意した。
FCC委員のアンナ・ゴメス委員（委員会唯一の民主党員で、これまでABCに対する行動に反対してきた人物）は火曜日、FCCを提訴するというABCの動きを支持する声明を発表した。
「FCCは何か月もの間、ディズニー傘下のABC局に対する検閲と統制のキャンペーンを展開し、放送ライセンス取り消しの脅しを利用して、政権が気に入らない言論を行った企業を罰してきた」とゴメス氏は述べた。 「私は長い間、この種の政府の脅迫に対抗するよう企業に呼びかけてきたが、ディズニーが勇気を示し、一歩踏み出したことをうれしく思う。これは、この行き過ぎた政府の圧力の重みを沈黙で感じてきたすべての放送局にとって歓迎すべき兆候であるはずだ。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/18/disney-abc-first-amendment-lawsuit-fcc.html",
    publishedAt: "2026-08-18T16:57:08+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "disney-sues-fcc-over-broadcast-license-t-d2f5a50a",
    title: "Disney sues FCC over broadcast-license threat",
    titleJa: "ディズニー、放送ライセンス脅迫でFCCを提訴",
    summaryJa: "ディズニーは、トランプ政権が「ABCの演説、つまりジャーナリストが報じる記事やABC番組が放送する視点を攻撃した」と述べた。",
    bodyOriginal: `Disney says the Trump administration “has attacked ABC’s speech — the stories its journalists report and the viewpoints its network programs air.”`,
    bodyJa: `ディズニーは、トランプ政権が「ABCの演説、つまりジャーナリストが報じる記事やABC番組が放送する視点を攻撃した」と述べた。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/disney-sues-fcc-over-broadcast-license-threat-9fb4745d?mod=mw_rss_topstories",
    publishedAt: "2026-08-18T12:58:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-53280046",
    readTime: 2,
  },
  {
    id: "ferguson-shipyard-to-cut-a-quarter-of-it-670f2463",
    title: "Ferguson shipyard to cut a quarter of its workforce",
    titleJa: "ファーガソン造船所、従業員の4分の1を削減へ",
    summaryJa: "ファーガソン造船所、従業員の4分の1を削減へ- 公開されました",
    bodyOriginal: `Ferguson shipyard to cut a quarter of its workforce
- Published
Scotland's state-owned shipyard is to cut nearly a quarter of its total workforce while it waits for confirmation of promised new orders.
Workers at Ferguson Marine have been invited to apply for voluntary redundancy as construction draws to a close on the second of two long-delayed CalMac ferries.
The Port Glasgow firm currently employs 247 core staff, 31 agency staff and 32 apprentices - but says it expects to shed 70 posts through a voluntary redundancy process.
The Scottish government has promised to directly award the yard new orders for four smaller ships, but ministers say they are still conducting "due diligence" on the plan.
Ferguson Marine said the job losses would protect the long-term viability of the yard - but unions described the move as "a betrayal of a blameless workforce".
BBC Scotland News understands those who choose to leave the firm will receive £1,000 per completed year of service, up to £10,000, on top of their statutory entitlements.
Ferguson Marine is the last commercial shipyard on the Clyde.
It was nationalised in 2019 after a long dispute between its former owner and government-owned ferries agency Caledonian Maritime Assets Ltd (CMAL) over claims for extra costs for two dual-fuel CalMac ferries.
The first, MV Glen Sannox, was finally delivered in November 2024, while MV Glen Rosa is due for completion by the end of this year.
The shipyard recently completed sub-contracting work for BAE Systems for new Type 26 frigates and currently has no confirmed future orders.
Ferguson Marine CEO Graeme Thomson said the yard's immediate focus was the handover of Glen Rosa before the end of this year.
"However, as the vessel nears completion, we face an inevitable gap in workload while we work with the Scottish government to make the relevant preparations to enable us to proceed with contract negotiations," he said.
"Shipbuilding capability relies on continuity and while changes of this nature are difficult, taking proactive action now ensures we protect the long-term viability of the yard and remain lean, modern, and ready to cut steel on the new fleet as quickly as possible."
In March, before the Holyrood election, the Scottish government announced plans to directly award the shipyard contracts for four future vessels.
It said the vessels - two small CalMac ferries, a fisheries research ship and a marine protection vessel - would provide a "bridge to the future" for the yard.
The then Economy Secretary Kate Forbes said the government had "done a lot of the upfront work in terms of scoping out, securing some of the legal advice about what is possible".
But she added that engagement with the Competition and Markets Authority (CMA) would be required.
Since then none of the contracts have been confirmed, with ministers saying "due diligence" is still being carried out.
BBC Scotland understands the Scottish government has not yet contacted the CMA for guidance on the legality of its proposals.
Economy, Tourism and Transport Secretary Stephen Flynn said the redundancy scheme was part of efforts to modernise the shipyard and put it on a more competitive footing.
"The action that the leadership team at Ferguson Marine is taking today is necessary to help secure a viable future for the yard, and that of commercial shipbuilding on the Clyde," he said.
Flynn said he had been assured that the reduced workforce would not affect the building of the MV Glen Rosa.
And he added: "Our intention to directly award four vessels continues to undergo full due diligence further to next steps which will be announced to parliament in due course."
'Shipbuilders need ships to build'
Louise Gilmour, Scotland secretary of the GMB union, said ministers had failed to deliver new contracts while sending work around the world.
"Fergusons was once Scotland's ferry factory with a worldwide reputation for excellence and should be again," she said.
"Instead, skilled and experienced shipbuilders are being encouraged to leave as those in charge send contracts everywhere but here."
She said the "hubris and incompetence" of those in charge of Scotland's ferry network had "failed a blameless workforce that deserves the chance to turn the page".
On the delays in delivering the new contracts she commented: "Shipbuilders needs ships to build so where are those promised to Ferguson Marine? If they ever come, who will build them?"
SNP backbencher Stuart MacMillan, who is the local MSP, said it was a "wake up call" for management but he also called on the Scottish government to speed up the promised new orders.
"My challenge to the Scottish government is to expedite the direct award process with the Competition and Markets Authority," he said.
Local Labour MP Martin McCluskey said the news was "deeply concerning" and part of a "jobs crisis" in Inverclyde which has lost 1,500 jobs in recent years.
"The Scottish government needs to step up, move faster and do everything within its power to secure the future of Ferguson Marine and the skilled jobs that depend on it," he said.
How can the Ferguson shipyard have a future?
- Published14 September 2025
Why was Glen Sannox so hard to build?
- Published13 January 2025
The Ferguson ships nobody talks about
- Published26 November 2023
Even if a new contract was awarded imminently, at least a year of design work would be required before the yard would be in a position to start cutting steel.
While the promised new orders have yet to be confirmed, they have allowed the firm to update its business plan, potentially unlocking the £14.2m of modernisation money first announced by ministers more than two years ago.
Ground investigation work is taking place with a view to installing new equipment and software which is hoped to raise productivity.
The shipyard's apprentice programme is also unaffected by the redundancies in the short term, with 34 young workers already in training and a new intake of 10 trainees about to start their first year in college.
Why is the shipyard struggling for orders?
Ferguson's has successfully built more than 360 ships since it was founded by four brothers in 1903, but its reputation has been harmed by the controversy over the long-delayed and over-budget ferries MV Glen Sannox and MV Glen Rosa.
Construction of the first liquefied natural gas (LNG) vessels of their kind ever built in the UK was blighted by design challenges and disputes over claims for extra costs.
While there is wide agreement the workforce were not to blame, the controversy may have left potential customers nervous about placing new orders.
The shipyard also faces wider challenges, in common with all UK shipbuilders, of having to compete on cost with overseas firms, particularly in eastern Europe and the Far East.
The Society of Maritime Industries says foreign yards are typically able to undercut UK-based shipbuilders by 10-20% due to a mix of cheaper labour and better state support.
Two years ago Ferguson's missed out on an order for seven small CalMac ships which was widely regarded as an ideal contract to help rebuild the firm's reputation.
While its bid was praised for its quality, CMAL awarded the deal to a Polish firm because it could build the ships more cheaply.
Ferguson's management has repeatedly called for "social value" to be factored into such evaluations, which would recognise the wider economic benefits of building ships in Scotland rather than focusing on the headline price.
But CMAL claims it is restricted in its ability to score bids for social value because Scotland's pre-Brexit procurement rules mean it must treat all bidders equally.
Last summer Ferguson's boss Graeme Thomson called for the direct award of another CalMac ship, a replacement for MV Lord of the Isles.
He described it as a "target contract" and warned it would be "very difficult" to sustain workforce numbers if the yard did not secure the work.
But his appeal was rejected by ministers, and the contract went out to tender earlier this year.
Ferguson's was unable to bid for the work because CMAL set pre-qualification criteria which, according to Ferguson's management, no UK-based commercial shipbuilder was capable of fulfilling
A shortlist of bidders has now been drawn up, but CMAL has declined to reveal which firms are on it or where they are based, on grounds that this would harm competition. The winning bidder will be announced early next year.`,
    bodyJa: `ファーガソン造船所、従業員の4分の1を削減へ
- 公開されました
スコットランドの国営造船所は、約束された新規受注の確認を待つ間、総従業員の4分の1近くを削減する予定だ。
長らく遅延していたカルマック社のフェリー2隻のうち2隻目の建設が終わりに近づく中、ファーガソン・マリーンの労働者らは自主解雇を申請するよう呼び掛けられている。
ポート・グラスゴーの同社は現在、中核スタッフ247名、代理店スタッフ31名、見習い32名を雇用しているが、自主退職手続きを通じて70ポストを削減する予定だとしている。
スコットランド政府は造船所に小型船4隻の新規発注を直接与えると約束しているが、閣僚らは計画に関してまだ「デューデリジェンス」を行っていると述べている。
ファーガソン・マリーンは、雇用の喪失は造船所の長期的な存続を守るだろうと述べたが、労働組合はこの動きを「非難の余地のない労働力に対する裏切り」だと述べた。
BBCスコットランドニュースは、会社を辞めることを選択した人は、法定の資格に加えて、勤続年数ごとに1,000ポンド、最大10,000ポンドを受け取ることになると理解している。
ファーガソン マリーンはクライド川にある最後の商業造船所です。
2隻の二元燃料カルマックフェリーに対する追加費用の請求をめぐって、前所有者と政府所有のフェリー代理店カレドニアン・マリタイム・アセット社（CMAL）との間で長い紛争が続いた後、2019年に国有化された。
最初の MV Glen Sannox は 2024 年 11 月にようやく引き渡され、MV Glen Rosa は今年末までに完成する予定です。
同造船所は最近、BAE Systems による新型 26 型フリゲート艦の下請け作業を完了したが、現在、今後の受注は確認されていない。
ファーガソン・マリーンのグレアム・トムソン最高経営責任者（CEO）は、造船所の当面の焦点は今年末までのグレン・ローザの引き渡しであると語った。
「しかし、船が完成に近づくにつれ、スコットランド政府と協力して契約交渉を進めるための関連準備を進める間に、避けられない作業量のギャップに直面している」と同氏は述べた。
「造船能力は継続性に依存しており、このような性質の変更は困難ではありますが、積極的な行動をとることで、造船所の長期的な存続可能性を守り、無駄のない最新の状態を維持し、新しい船隊でできるだけ早く鋼材を切断できるようになります。」
ホーリールード選挙前の3月、スコットランド政府は将来の船舶4隻について造船所と直接契約を結ぶ計画を発表した。
同船は、カルマック小型フェリー2隻、漁業調査船1隻、海洋保護船1隻が造船所の「未来への架け橋」となるだろうと述べた。
当時のケイト・フォーブス経済長官は、政府が「何が可能なのかについての法的アドバイスを確保し、精査という点で多くの事前作業を行った」と述べた。
しかし、競争・市場庁（CMA）との関与が必要になるだろうとも付け加えた。
それ以来、どの契約も確認されておらず、閣僚らは依然として「デューデリジェンス」が行われていると述べている。
BBCスコットランドは、スコットランド政府が提案の合法性についての指導を求めてまだCMAに連絡していないことを理解している。
スティーブン・フリン経済・観光・運輸大臣は、人員削減計画は造船所を近代化し、競争力を高める取り組みの一環であると述べた。
「ファーガソン・マリーンの経営陣が今日とっている行動は、造船所とクライド川での商業造船の実行可能な未来を確保するために必要である」と同氏は述べた。
フリン氏は、従業員の削減がMVグレンローザの建設に影響を与えないと確信していると述べた。
さらに、「4隻の船舶に直接授与するという我々の意図は、今後議会に発表される次のステップに向けて引き続き十分なデューデリジェンスを継続する」と付け加えた。
「造船所には建造する船が必要だ」
スコットランドのGMB組合書記長ルイーズ・ギルモア氏は、閣僚らが世界中に仕事を送りながら新たな契約を締結できなかったと述べた。
「ファーガソンズはかつてスコットランドのフェリー工場であり、その優秀さは世界的に知られていたが、再びそうなるべきだ」と彼女は語った。
「代わりに、責任者がここ以外のあらゆる場所に契約書を送るため、熟練した経験豊富な造船所は退職するよう奨励されている。」
彼女は、スコットランドのフェリーネットワークの責任者らの「傲慢さと無能さ」が「ページをめくる機会に値する責任のない労働力を失墜させた」と述べた。
新しい契約の引き渡しが遅れていることについて彼女は、「造船所は建造する船を必要としているが、ファーガソン海兵隊に約束した船はどこにあるのか？もし来たら誰が建造するのか？」とコメントした。
地元MSPのSNPバックベンチャー、スチュアート・マクミラン氏は、これは経営陣への「警鐘」だとしながらも、スコットランド政府に対し、約束された新規発注を加速するよう求めた。
同氏は、「スコットランド政府に対する私の課題は、競争市場庁との直接授与プロセスを迅速化することだ」と述べた。
地方労働党のマーティン・マクラスキー議員は、このニュースは「非常に憂慮すべき」もので、近年1,500人の雇用を失ったインバークライドの「雇用危機」の一部であると述べた。
同氏は、「スコットランド政府は、ファーガソン海兵隊の将来とそれに依存する熟練の雇用を確保するために、さらに強化し、より迅速に行動し、できる限りのあらゆることを行う必要がある」と述べた。
ファーガソン造船所に未来はありますか?
- 2025 年 9 月 14 日公開
グレン・サノックスの建設はなぜそれほど困難だったのでしょうか?
- 2025 年 1 月 13 日発行
誰も語らないファーガソンの船
- 2023 年 11 月 26 日公開
たとえ新しい契約がすぐに締結されたとしても、ヤードが鋼材の切断を開始できる状態になるまでに、少なくとも 1 年の設計作業が必要になります。
約束された新たな受注はまだ確認されていないが、同社は事業計画を更新することができ、2年以上前に閣僚が初めて発表した1420万ポンドの近代化資金が解放される可能性がある。
生産性の向上が期待される新しい機器やソフトウェアの導入を目的とした地盤調査作業が行われています。
同造船所の見習いプログラムも短期的な人員削減の影響を受けておらず、34人の若手労働者がすでに訓練を受けており、新たに10人の訓練生が大学1年目を迎えようとしている。
なぜ造船所は受注に苦戦しているのでしょうか?
ファーガソン社は 1903 年に 4 人の兄弟によって設立されて以来、360 隻以上の船の建造に成功してきましたが、その評判は、長期遅延と予算超過のフェリー MV グレン・サノックスと MV グレン・ローザをめぐる論争によって傷つけられました。
英国で初めて建造されたこの種の液化天然ガス（LNG）船の建造は、設計上の課題と追加費用の請求をめぐる紛争によって難航した。
従業員に責任がないということでは広く合意が得られているが、この論争により潜在顧客は新たな注文に不安を感じている可能性がある。
造船所はまた、英国のすべての造船所に共通して、海外企業、特に東ヨーロッパや極東の企業とコストで競争しなければならないという広範な課題にも直面している。
海事産業協会は、外国の造船所は、労働力の安さと国の支援の充実により、英国に本拠を置く造船所を通常10～20％下回る可能性があると述べている。
2年前、ファーガソン社は、同社の評判を再構築するのに理想的な契約であると広く考えられていた7隻の小型CalMac船の注文を逃した。
その入札は品質が高く評価されたが、CMALはより安価に船を建造できるという理由でポーランドの企業に取引を与えた。
ファーガソンの経営陣は、最高価格に焦点を当てるのではなく、スコットランドで造船することのより広範な経済的利益を認識する「社会的価値」をそのような評価に織り込むよう繰り返し求めてきた。
しかしCMALは、スコットランドのEU離脱前の調達規則により、すべての入札者を平等に扱わなければならないことを意味しているため、社会的価値に基づいて入札を採点する能力には制限があると主張している。
昨年の夏、ファーガソンの上司グレアム・トムソンは、MVロード・オブ・ザ・アイルズに代わる別のCalMac船を直接授与するよう求めた。
同氏はこれを「目標を絞った契約」と表現し、造船所が仕事を確保しなければ従業員数を維持するのは「非常に困難」になると警告した。
しかし、彼の訴えは閣僚によって拒否され、契約は今年初めに入札にかけられた。
ファーガソンの経営陣によれば、ファーガソンの経営陣によれば、CMALが事前資格基準を設定しており、英国に本拠を置く商業造船所はこの基準を満たすことができないため、ファーガソンはこの工事に入札できなかった。
現在、入札者の最終候補リストが作成されているが、CMALは競争を阻害するという理由で、どの企業が参加しているのか、またどこに拠点を置いているのかを明らかにすることを拒否している。落札者は来年初めに発表される予定だ。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c20e2qe1lqpo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-18T12:56:34+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/7127/live/f9c38180-9adf-11f1-b792-a710e56a11dc.jpg",
    readTime: 10,
  },
  {
    id: "30-year-treasury-yield-tops-5-33-new-19-b6249d12",
    title: "30-year Treasury yield tops 5.33%, new 19-year high on inflation, spending concerns",
    titleJa: "30年米国債利回りは5.33％を突破、インフレ、支出懸念で19年ぶりの高水準を更新",
    summaryJa: "米国の財政状況の悪化とインフレ率の高止まりを背景に、長期債券が約２０年ぶりの高水準に達し、火曜日には国債利回りが上昇した。米３０年国債利回りは１ベーシスポイント以上上昇し、５．３２３％で取引された。 １９年ぶりの高値を更新し、２００２年以来の高水準に近づいている。",
    bodyOriginal: `Treasury yields rose on Tuesday, with long-dated fixed income hitting their highest level in almost two decades amid a worsening U.S. fiscal situation and persistently higher inflation.
The yield on the U.S. 30-year Treasury bond added more than 1 basis point to trade at 5.323%. It hit a new 19-year high and is nearing its highest level since 2002.
The 10-year Treasury note yield — the main benchmark for mortgages, auto loans and credit card debt — was less than 1 basis point higher at 4.732%.
The yield on the 2-year Treasury note, which typically reacts in line with short-term Federal Reserve interest rate decisions, edged up less than a basis point to 4.186%.
One basis point equals 0.01%, and yields and prices move inversely to one another.
The moves follow news that the U.S. fiscal deficit jumped to $432.3 billion in July, its highest monthly total since March 2021, pushing the year-to-date shortfall to nearly $1.8 trillion. Interest paid to finance the nearly $40 trillion national debt has cost the government about $1.2 trillion this year.
On the inflation side, recent readings have shown low levels of overall price increases in June and July, but the annual rate remains well above the Fed's 2% target.
Government debt also felt the effects of the ongoing Middle East tensions.
Oil prices rose as the 60-day deadline for the U.S. and Iran to secure a peace deal expired Monday, with Iran ruling out the possibility of an extension, according to state media. A senior Iranian official also told Reuters that Tehran would take an offensive stance if diplomacy with the U.S. fails.
"Markets have seen growing weakness over the last 24 hours, with bonds and equities slipping thanks to negative geopolitical headlines from the Middle East," Deutsche Bank's Jim Rid wrote in a note on Tuesday. "There wasn't a single catalyst for the declines, but with few signs of the US and Iran coming to any sort of a deal, that meant investors priced in a more extended closure of the Strait of Hormuz."
Resurging fears around inflation are sending government borrowing costs higher across the globe, with many longer-maturity bond yields hovering near multi-decade highs.
The yield on Japan's long-dated government bonds hovered near levels reached in May, when yields hit 40-year highs. Germany's 30-year bond yield was last seen at its highest since 2011, while their British counterparts approached a multi-decade high. French 30-year government bond yields also ticked upward to a post-2008 high.
On the economic data front, investors will look to import and export pricing figures for July, along with housing starts and pending home sales on Tuesday.
— CNBC's Jeff Cox and Chloe Taylor also contributed to this report.`,
    bodyJa: `米国の財政状況の悪化とインフレ率の高止まりを背景に、長期債券が約２０年ぶりの高水準に達し、火曜日には国債利回りが上昇した。
米３０年国債利回りは１ベーシスポイント以上上昇し、５．３２３％で取引された。 １９年ぶりの高値を更新し、２００２年以来の高水準に近づいている。
住宅ローン、自動車ローン、クレジットカード債務の主な指標である10年国債利回りは4.732%と1ベーシスポイント未満上昇した。
通常、米連邦準備理事会（ＦＲＢ）の短期金利決定に合わせて反応する２年債利回りは、１ベーシスポイント未満上昇し４．１８６％となった。
1 ベーシス ポイントは 0.01% に相当し、利回りと価格は相互に反比例します。
この動きは、7月の米国の財政赤字が4,323億ドルに急増し、月間総額としては2021年3月以来最高となり、年初からの財政赤字が1兆8,000億ドル近くに達したというニュースを受けたものである。約40兆ドルの国債をファイナンスするために支払われた利息は、今年政府に約1兆2000億ドルの損失をもたらした。
インフレ面では、最近の統計では6月と7月の全体的な物価上昇率が低い水準にあることが示されているが、年率は依然としてFRBの目標である2％を大きく上回っている。
政府債務も、現在進行中の中東情勢の緊張の影響を受けている。
国営メディアによると、米国とイランが和平協定を締結するための60日間の期限が月曜日に期限切れとなり、イランが延長の可能性を否定したため、原油価格が上昇した。イラン高官もロイターに対し、米国との外交が失敗すればイランは攻撃的な姿勢を取るだろうと語った。
ドイツ銀行のジム・リッド氏は火曜日のメモで「中東からの地政学的なネガティブな見出しのおかげで債券と株式が下落し、過去２４時間で市場の弱さが増している」と述べた。 「下落のきっかけは一つもなかったが、米国とイランが何らかの合意に達する兆候がほとんどなかったため、投資家はホルムズ海峡閉鎖の長期化を織り込んだことになる。」
インフレをめぐる懸念が再燃し、世界中で政府の借入コストが上昇しており、多くの長期債利回りは数十年ぶりの高値付近で推移している。
日本の長期国債利回りは、利回りが40年ぶりの高水準となった5月の水準付近で推移している。ドイツの３０年債利回りは２０１１年以来の高水準となったが、英国の３０年債利回りは数十年ぶりの高水準に近づいた。フランス30年国債利回りも2008年以降の高水準まで上昇した。
経済指標に関しては、投資家は火曜日の住宅着工件数や住宅販売保留件数とともに、7月の輸出入価格の数字に注目するだろう。
— CNBCのジェフ・コックス氏とクロエ・テイラー氏もこのレポートに貢献しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/18/treasury-yields-.html",
    publishedAt: "2026-08-18T12:39:04+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "worrisome-ai-is-driving-a-looming-marke-1a0113d3",
    title: "'Worrisome': AI is driving a looming market correction, central bank economists warn",
    titleJa: "「憂慮すべきこと」：AIが差し迫った市場調整を引き起こしていると中央銀行のエコノミストが警告",
    summaryJa: "投資家がAIブームに乗り出す中、米国と欧州の株価は過去最高値を更新しているが、欧州中央銀行のエコノミストらは歴史が今後の急激な景気後退を示していると警告している。「過去の技術革命に関する経済研究は、現在の株式市場の評価が修正される可能性が高いという憂慮すべき結論を示している」とエコノミストらは月曜のブログで、2つの潜在的なシナリオを挙げた。",
    bodyOriginal: `U.S. and European stocks are scaling record highs as investors pile into the AI boom, but economists at the European Central Bank warn that history points to a sharp downturn ahead.
"Economic research on past technological revolutions points to a worrisome conclusion: a correction of current stock market valuations is likely," the economists wrote in a Monday blog, citing two potential scenarios.
A correction could occur because "overconfident, overoptimistic investors" push prices up beyond their fundamental worth, leading to a crash when that exuberance fades, they said.
But a fall in prices should be expected, even if current valuations are an accurate reflection of AI's capacity to reshape the global economy and boost corporate profits, they add.
The economists cite parallels with the 19th century railway boom, the expansion of electricity and radio in the 1920s, and the rise of the internet in the 1990s — not the first time the current AI wave has been compared to the dotcom bubble of the early 2000s.
In each case, investor nerves about the success of a technology-linked transition spilled over into the wider economy.
"As adoption spreads...uncertainty becomes economy-wide. If something then goes wrong with that technology, the whole economy suffers," the economists wrote.
This drives investors to demand a higher risk premium, which their analysis found is likely to eventually drive stock prices down, even if profit growth remains robust.
"Both views imply a boom followed by a correction, or a pullback from wherever valuations have risen, at some point in the future," they said, noting that this could in turn be followed by a recovery and further climb in stocks.
"The exact timing is unknowable in advance. These boom-bust patterns are only identifiable with hindsight."
The blog goes on to warn of the fallout of such a pullback and urged investors to prepare for it.
European retail investors are highly exposed, potentially without knowing it, because of the prevalence of "Magnificent 7" stocks in global index funds and pension funds, the economists said.
There is a further risk that a sharp correction triggers knock-on effects through fund-based structures that eventually threatens euro area stability, they continued.
"Unlike in the dot-com episode, today's starting point leaves markedly less room to cut interest rates or use fiscal policy to cushion the fallout."`,
    bodyJa: `投資家がAIブームに乗り出す中、米国と欧州の株価は過去最高値を更新しているが、欧州中央銀行のエコノミストらは歴史が今後の急激な景気後退を示していると警告している。
「過去の技術革命に関する経済研究は、現在の株式市場の評価が修正される可能性が高いという憂慮すべき結論を示している」とエコノミストらは月曜のブログで、2つの潜在的なシナリオを挙げた。
「自信過剰で楽観的すぎる投資家」が基礎的価値を超えて価格を押し上げ、その熱気が冷めたときに暴落につながるために調整が起こる可能性がある、と彼らは述べた。
しかし、現在の評価額が世界経済を再構築し、企業利益を押し上げるAIの能力を正確に反映しているとしても、価格の下落は予想されるべきだと彼らは付け加えた。
経済学者らは、19世紀の鉄道ブーム、1920年代の電力とラジオの拡大、1990年代のインターネットの台頭との類似点を挙げているが、現在のAIの波が2000年代初頭のドットコムバブルと比較されるのは今回が初めてではない。
いずれの場合も、テクノロジーに関連した移行の成功に対する投資家の神経質は経済全体に波及した。
「導入が広がるにつれて…不確実性が経済全体に広がっている。その技術に何か問題が起きれば、経済全体が打撃を受ける」とエコノミストらは書いている。
このため、投資家はより高いリスクプレミアムを要求するようになり、たとえ利益の伸びが堅調であったとしても、最終的には株価が下落する可能性が高いことが分析で判明した。
「どちらの見方も、将来のある時点で好景気の後に調整が起こるか、あるいはバリュエーションが上昇したところからの反動が起こることを示唆している」と述べ、その後に株価の回復とさらなる上昇が起こる可能性があると指摘した。
「正確なタイミングは事前にはわかりません。好景気と不況のパターンは後から考えないとわかりません。」
同ブログは続けて、こうした反落の影響について警告し、投資家にそれに備えるよう促した。
エコノミストらによると、世界のインデックスファンドや年金基金には「マグニフィセント７」銘柄が蔓延しているため、欧州の個人投資家は潜在的に知らないうちに高いリスクにさらされているという。
さらに、急激な調整が基金ベースの構造を通じて波及効果を引き起こし、最終的にはユーロ圏の安定を脅かすリスクがあると彼らは続けた。
「ドットコムのエピソードとは異なり、今日の出発点では、金利引き下げや財政政策を利用して影響を緩和する余地は著しく少ない。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/18/ai-tech-rally-correction-economists.html",
    publishedAt: "2026-08-18T12:07:05+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 3,
  },
  {
    id: "sea-ray-parent-brunswick-bets-on-ai-navi-44b37eef",
    title: "Sea Ray parent Brunswick bets on AI navigation and new revenue streams to help stalling boat sales",
    titleJa: "Sea Rayの親会社ブランズウィックは、停滞しているボートの販売を助けるためにAIナビゲーションと新たな収入源に賭けている",
    summaryJa: "ブランズウィック社のデビッド・フォルクス最高経営責任者（CEO）はCNBCに対し、プレミアムボートの販売は好調を維持しているが、バリューオプションの伸びが遅れていると語った。",
    bodyOriginal: `Brunswick Corp., a global leader in boat manufacturing and recreation on the water, is counting on advanced technology to help with stalling sales.
The parent company of Sea Ray, Boston Whaler and other boat brands, says advanced navigation technology and autonomous docking can take some of the complexity out of maneuvering a vessel around a crowded marina.
The bet is twofold: convince would-be buyers to dive into a market that's been sluggish — with retail sales of new vessels expected to remain subdued through 2026 — and increase aftermarket and recurring revenue through technology and software sales.
Brunswick's portfolio extends well beyond the boat brands. Its Navico Group sells marine electronics and technology, while its Mercury Marine supplies engines and maintains a parts and accessories business.
Roughly 60% of Brunswick's earnings now come from aftermarket or recurring revenue, and Roth Capital Partners analyst Scott Stember says that mix gives the company meaningful exposure beyond new boat sales.
Brunswick told investors it anticipates annual sales of 145,000 to 160,000 units by 2030. Roth characterizes that as modest recovery in demand from estimated U.S. retail sales this year of fewer than 135,000 vessels.
The sluggish demand is being felt most in Brunswick's least expensive models.
"We're seeing premium boats and what we call our core portfolio being very resilient," CEO David Foulkes told CNBC. "What we're seeing is value boats, which are more typically financed or more subject to interest rate pressures ... they're not doing badly, but they're just not doing as well as some of our more premium products."
But Brunswick could increase the amount of electronics and technology onboard, even if the number of boats sold doesn't rise dramatically.
For instance, 55% of Navico's original-equipment customers have increased their Navico content since 2023, according to the company. And Navico has launched more than 30 new products since 2025.
One of those is Simrad AutoCaptain, which helps navigate and dock boats. The business strategy makes sense: Make it easy to take the boat out, and more importantly back in, and you just might sell a bigger, more expensive boat. The company generates more business around the boat, too.
Another piece of the strategy is Freedom Boat Club — a kind of country club for boaters, with locations around the globe. Members pay a fee and monthly dues for access to vessels to take out on the water at any of the locations.
Brunswick reported during its August investor day that the club has more than tripled its membership since 2019 to more than 63,000 members. Trips and reservations have grown fourfold, while the network has expanded to more than 450 locations and a fleet of roughly 5,000 boats.
And unlike the cyclical sales of a new boat, Freedom Boat Club lands squarely inside Brunswick's recurring-revenue profile, with about 90% of the club's sales recurring and trips running 10% higher than a year ago, one indication that consumers are continuing to take to the seas even as new-boat sales remain weak.
That approach is becoming more important as Brunswick lays out ambitious financial targets without assuming a return to the industry's boom years.
The company is targeting $7 billion to $8 billion in revenue by 2030, operating margins of 10% to 13% and earnings of between $8 and $12 per share.
KeyBanc, which has a sector-weight rating on Brunswick stock, said management expects pricing, a richer premium-product mix, market-share gains and new-product innovation to help drive growth.
Roth, which rates the shares buy with a $94 price target, is more bullish. Stember wrote that Brunswick is "uniquely positioned" within recreation and leisure to produce meaningful earnings growth even with only a "modest/non-heroic" recovery in new-boat demand.
Shares of Brunswick currently trade at roughly $82 apiece.
Brunswick is also trying to remove supply chain risk by reducing its China-sourced parts by as much as 75% and cutting tariff exposure by 70%.
Foulkes said that gives Brunswick an advantage over competitors based overseas.
Investors, of course, will weigh whether the sum total of advanced technology, more efficient engines and recurring revenue from Freedom Boat Club can keep profits afloat, even if unit growth remains challenging.`,
    bodyJa: `ボート製造と水上レクリエーションの世界的リーダーであるブランズウィック社は、販売の停滞を防ぐために先進技術に期待しています。
Sea Ray、Boston Whaler、その他のボートブランドの親会社は、高度なナビゲーション技術と自動ドッキングにより、混雑したマリーナ周辺で船舶を操縦する際の複雑さをある程度軽減できると述べている。
賭けは 2 つあります。1 つは、新造船の小売売上高が 2026 年まで低迷が続くと予想されているため、低迷している市場に参入するよう購入希望者を説得すること、そしてテクノロジーとソフトウェアの販売を通じてアフターマーケット収益と経常収益を増やすことです。
ブランズウィックのポートフォリオはボート ブランドをはるかに超えています。同社の Navico グループは海洋エレクトロニクスと技術を販売し、Mercury Marine はエンジンを供給し、部品と付属品のビジネスを維持しています。
ブランズウィックの収益の約60％は現在、アフターマーケット収益または経常収益によるもので、ロス・キャピタル・パートナーズのアナリスト、スコット・ステンバー氏は、この組み合わせにより新艇販売以外にも同社に有意義なエクスポージャが与えられていると述べている。
ブランズウィック社は投資家に対し、2030年までに年間販売台数が14万5,000台から16万台になると予想していると語った。ロス氏は、今年の米国小売販売台数が13万5,000隻未満と見積もられていることから、需要が緩やかに回復したことだと特徴付けている。
需要の低迷はブランズウィックの最も安価なモデルに最も顕著に表れている。
CEOのデビッド・フォークス氏はCNBCに対し、「プレミアムボートと私たちがコアポートフォリオと呼ぶものは非常に回復力があると見ている」と語った。 「我々が目にしているのはバリューボートで、通常は資金調達が行われているか、金利圧力の影響を受けやすい。彼らの業績は悪くはないが、当社の一部のよりプレミアムな商品ほど業績が良くないだけだ。」
しかし、ブランズウィック社は、たとえボートの販売数が劇的に増加しなくても、搭載される電子機器や技術の量を増やす可能性がある。
たとえば、同社によれば、Navico の純正機器顧客の 55% が 2023 年以降、Navico コンテンツを増やしています。そして、Navico は 2025 年以降、30 以上の新製品を発売してきました。
そのうちの 1 つは、ボートの航行とドッキングを支援する Simrad AutoCaptain です。ビジネス戦略は理にかなっています。ボートを簡単に出すことができ、さらに重要なことに、元に戻すことも簡単にできます。そうすれば、より大きくて高価なボートが売れるかもしれません。同社はボート関連でもさらなるビジネスを生み出しています。
戦略のもう 1 つの要素は、フリーダム ボート クラブです。フリーダム ボート クラブは、世界中に拠点を置く、ボート乗りのための一種のカントリー クラブです。会員は、いずれかの場所で水上に出るための船にアクセスするために料金と月会費を支払います。
ブランズウィックは8月の投資家向けデーで、同クラブの会員数が2019年以来3倍以上の6万3000人以上になったと報告した。旅行と予約は 4 倍に増加し、ネットワークは 450 以上の場所と約 5,000 隻の船団に拡大しました。
そして、新造船の循環的な販売とは異なり、フリーダム ボート クラブはブランズウィックの経常収益プロファイルの中にしっかりと入っており、クラブの売上高の約 90% が定期購入であり、旅行件数は 1 年前より 10% 増加しています。これは、新造船の販売が依然として低迷しているにもかかわらず、消費者が海へ行き続けていることを示しています。
ブランズウィックが業界の好況期への回帰を想定せずに野心的な財務目標を掲げるなか、このアプローチはますます重要になっている。
同社は、2030年までに売上高70億～80億ドル、営業利益率10～13％、1株利益8～12ドルを目標としている。
ブランズウィック株のセクターウェイト格付けを行っているキーバンクは、経営陣が価格設定、プレミアム製品ミックスの充実、市場シェアの拡大、新製品のイノベーションが成長促進につながると期待していると述べた。
ロス氏は自社株買いの目標株価を94ドルと評価しており、より強気だ。ステンバー氏は、ブランズウィックはレクリエーションとレジャーの中で「独特の位置にあり」、新造船の需要が「緩やか/非英雄的」に回復したとしても、意味のある収益成長を生み出すことができると書いた。
ブランズウィック株は現在、1株あたり約82ドルで取引されている。
ブランズウィックはまた、中国調達部品を最大75％削減し、関税負担を70％削減することで、サプライチェーンのリスクを排除しようとしている。
これによりブランズウィックは海外に拠点を置く競合他社よりも有利になるとフォルクス氏は語った。
もちろん、投資家は、たとえユニットの成長が依然として困難であっても、先進技術、より効率的なエンジン、およびフリーダムボートクラブからの経常収益の合計が利益を維持できるかどうかを検討するでしょう。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/18/sea-ray-parent-brunswick-ai-recurring-revenue-boat-sales.html",
    publishedAt: "2026-08-18T11:59:01+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 6,
  },
  {
    id: "nvidia-s-ai-moat-is-shifting-from-chips-de2de7e4",
    title: "Nvidia's AI moat is shifting from chips to capital",
    titleJa: "Nvidia の AI の堀はチップから資本へと移行している",
    summaryJa: "Nvidia は人工知能分野で大幅に有利なスタートを切り、チップメーカーを世界で最も価値のある企業に変えました。生成 AI ブームが始まってからほぼ 4 年が経過した現在、Advanced Micro Devices や Google などの競合他社が Nvidia の技術的リードを少しずつ削り取っており、同社はもう 1 つの大きな資産である資本を活用するよう促されています。Nvidiaのグラフィックス処理装置に5,000億ドル相当の資金調達を求めるという先週のウォール街企業との協定に続き、Nvidiaは月曜日、オハイオ州の巨大なOpenAIデータセンターに最大1,050億ドルを提供し、ChatGPTの開発者が運命の好転を見た場合の一種のバックストップを提供すると発表した。",
    bodyOriginal: `Nvidia's massive head start in artificial intelligence turned the chipmaker into the world's most valuable company. Now, almost four years into the generative AI boom, competitors like Advanced Micro Devices and Google have chipped away at Nvidia's technology lead, pushing the company to take advantage of its other great asset: capital.
Following last week's pact with Wall Street firms to pursue $500 billion worth of financing for Nvidia's graphics processing units, Nvidia said on Monday that it's providing up to $105 billion for a giant OpenAI data center in Ohio, offering a backstop of sorts should the ChatGPT creator see its fortunes turn.
For Nvidia, the strategy involves fueling the AI boom by whatever means necessary, recognizing that demand for critical infrastructure is seemingly insatiable but that a handful of companies — the hyperscalers — account for an outsized amount of purchases. With its quarterly free cash flow up 18-fold over the past three years to $48.5 billion in the latest period, Nvidia is using the strength of its balance sheet and credit rating to ensure there's no dramatic slowdown following 12 straight quarters of revenue growth above 55%.
"They remain dominant, but they're very paranoid about making sure they don't lose ground," said Ram Bala, associate professor of AI and analytics at Santa Clara University's Leavey School of Business.
Nvidia declined to comment.
In a note to clients on Monday, analysts at Cantor brushed off concerns that Nvidia is effectively buying revenue through its financial maneuvering. They reiterated their buy rating and said the latest agreement is a "clear signal that the current AI investment cycle will be elongated and durable."
"We view this less as circular and more facilitating the coming AI buildout while at the same time creating additional competitive moats that will continue to enable NVDA to remain THE AI leader," the analysts wrote.
Nvidia is swimming in money. Its cash generation is so great that the company said in May that it was increasing its quarterly dividend to 25 cents a share from a penny, and announced a new $80 billion stock buyback plan. The company pledged "to return roughly 50% of free cash flow to shareholders this year."
One way the company has been putting its cash pile to work is through equity investments in companies across the AI ecosystem, including some businesses — like model developers and neoclouds — that spend heavily on Nvidia's chips and systems. Nvidia held $30.2 billion in marketable equity securities as of the most recent quarter, up from $12.9 billion a year earlier.
In February, Nvidia invested $30 billion in OpenAI, which relies on training capacity from Vera Rubin, the chip giant's most advanced system. Monday's agreement included a $1.5 billion investment in SB Energy, a SoftBank affiliate that's building and managing the data center at the PORTS-Pike Technology Campus in Pike County, Ohio, through a 20-year lease to OpenAI.
In addition to the SB Energy investment, Nvidia said it's putting its financial support behind about 4 gigawatts of development at the Ohio site for portions of lease and power and "a specified residual-value commitment," as data centers open between 2028 and 2030.
Expanding access
Nvidia CEO Jensen Huang acknowledged the significance of the company's financial prowess in a post on X about the agreement.
"Frontier AI labs have extraordinary demand for training and inference compute, but many are growing faster than their balance sheets and long-term credit profiles can support," Huang wrote. "They may have strong customer demand and rapidly growing revenue yet still lack the decades-long infrastructure contracts and investment-grade financing capacity needed to secure the AI factory infrastructure independently."
A week prior, Huang was on set at CNBC surrounded by six of Wall Street's leading financiers to announce the arrival of Nvidia graphics processing units as a new asset class. In signing a memorandum of understanding with firms including Goldman Sachs, Apollo Global Management, Blackstone and BlackRock, Huang indicated that the next phase of the AI buildout will be funded in part by third-party backers, who can start investing in GPUs the way they do real estate.
"These are revenue-generating assets now," Huang told CNBC. "They're productive, they're long-lived, they're fungible, they're flexible."
Key to obtaining financing for prospective borrowers will be a dedication to Huang's systems, with Nvidia obtaining the option of backstopping 25% of every loan. It's another way to get more of Nvidia's technology into the market, as competition builds from Google and AMD, as well as from specialized chipmakers like Cerebras.
In the second quarter, Google began recognizing revenue from TPU system sales, contributing to the cloud unit's 82% growth. AMD, meanwhile, reported more than 100% growth in its data center business, and the company expects its first rack-scale system, called Helios, to ship later this year.
Paul Meeks, head of technology research at Freedom Capital Markets, said the stepped-up competition eats into Nvidia's ability to yield "outrageous margins," and incentives the company to diversify its strategy.
"Part of their thinking is let's broaden our reach," Meeks said. "We just can't ride this one horse, which is GPUs."
AI bulls say that Nvidia is just responding to demand, and point out that the shortage in the market today is on the capacity side. There are plenty of numbers to back that up, as Anthropic told investors over the weekend that its annualized revenue run rate hit $65 billion in July, up sevenfold from a year earlier. OpenAI's run rate recently reached $40 billion.
Matthew Vegari, head of research at Clearwater Analytics, said in an email that, based on the market dynamics, the "narrative around the AI trade's circuitous, 'house of cards' structure strikes us as somewhat misguided."
"We might one day be at overcapacity," he wrote. "But that day isn't today."
— CNBC's Samantha Subin and Jonathan Vanian contributed to this report
WATCH: AI is not a new asset class, it's the entire market, says Clockwise Capital CIO`,
    bodyJa: `Nvidia は人工知能分野で大幅に有利なスタートを切り、チップメーカーを世界で最も価値のある企業に変えました。生成 AI ブームが始まってからほぼ 4 年が経過した現在、Advanced Micro Devices や Google などの競合他社が Nvidia の技術的リードを少しずつ削り取っており、同社はもう 1 つの大きな資産である資本を活用するよう促されています。
Nvidiaのグラフィックス処理装置に5,000億ドル相当の資金調達を求めるという先週のウォール街企業との協定に続き、Nvidiaは月曜日、オハイオ州の巨大なOpenAIデータセンターに最大1,050億ドルを提供し、ChatGPTの開発者が運命の好転を見た場合の一種のバックストップを提供すると発表した。
Nvidia の戦略には、重要なインフラストラクチャに対する需要が一見飽くことのないように見えるが、少数の企業、つまりハイパースケーラーが莫大な額の購入を占めていることを認識し、必要なあらゆる手段を講じて AI ブームを促進することが含まれています。過去 3 年間で四半期のフリー キャッシュ フローが 18 倍に増加し、直近の期間では 485 億ドルとなった Nvidia は、バランスシートと信用格付けの強みを利用して、12 四半期連続で収益が 55% を超える成長を続けているにもかかわらず、劇的な減速が起こらないように努めています。
サンタクララ大学リービー経営大学院のAI・分析准教授ラム・バラ氏は、「彼らは依然として優勢だが、劣勢に陥らないよう非常に偏執的だ」と語る。
エヌビディアはコメントを控えた。
カンターのアナリストらは月曜日の顧客向けメモの中で、エヌビディアが財務戦略を通じて効果的に収益を買収しているという懸念を一蹴した。両社は買いの評価を繰り返し、今回の合意は「現在のAI投資サイクルが長期化して耐久性があることを示す明らかな兆候」だと述べた。
「私たちはこれを循環的ではなく、今後の AI の構築を促進すると同時に、NVDA が AI のリーダーであり続けることを可能にするさらなる競争の堀を生み出すものであると考えています」とアナリストは書いています。
Nvidia は金で泳いでいます。同社のキャッシュ創出は非常に大きいため、同社は5月に四半期配当を1株あたり1ペニーから25セントに増額すると発表し、新たに800億ドルの自社株買い計画を発表した。同社は「今年はフリーキャッシュフローの約50％を株主に還元する」と約束した。
同社が山積した現金を有効に活用している方法の 1 つは、モデル開発者やネオクラウドなど、Nvidia のチップやシステムに多額の費用を費やしている一部の企業を含む、AI エコシステム全体の企業への株式投資です。 Nvidiaは直近四半期時点で市場性のある株式を302億ドル保有しており、前年同期の129億ドルから増加した。
Nvidia は 2 月に、OpenAI に 300 億ドルを投資しました。OpenAI は、チップ大手の最先端システムである Vera Rubin のトレーニング能力に依存しています。月曜日の契約には、OpenAIへの20年間のリースを通じて、オハイオ州パイク郡のPORTS-Pike Technology Campusにデータセンターを建設・管理しているソフトバンク関連会社のSB Energyへの15億ドルの投資が含まれていた。
Nvidiaは、SB Energyへの投資に加えて、2028年から2030年の間にデータセンターがオープンするため、リースと電力の一部と「特定の残価保証」のためにオハイオ州サイトでの約4ギガワットの開発に資金援助を提供すると述べた。
アクセスの拡大
Nvidia CEOのジェンセン・ファン氏は、この契約に関するXへの投稿で同社の財務力の重要性を認めた。
「フロンティア AI ラボにはトレーニングと推論計算に対する並外れた需要がありますが、その多くはバランスシートと長期信用プロファイルがサポートできるよりも速いスピードで成長しています」と Huang 氏は書いています。 「彼らは強い顧客需要と急速に成長する収益を持っているかもしれませんが、AI工場インフラストラクチャを独自に確保するために必要な数十年にわたるインフラストラクチャ契約と投資適格の資金調達能力がまだ不足しています。」
1週間前、フアン氏はCNBCの撮影現場にいて、ウォール街の有力金融家6人に囲まれ、新しい資産クラスとしてNVIDIAグラフィックス処理装置の登場を発表した。ゴールドマン・サックス、アポロ・グローバル・マネジメント、ブラックストーン、ブラックロックなどの企業との覚書に署名する際、フアン氏は、AI構築の次の段階は不動産と同じようにGPUへの投資を開始できるサードパーティの支援者によって部分的に資金提供されることを示唆した。
「これらは今や収益を生み出す資産だ」とフアン氏はCNBCに語った。 「生産性が高く、長寿命で、代替可能で、柔軟性があります。」
将来の借り手への融資獲得の鍵となるのは、Huang のシステムへの献身的な取り組みであり、NVIDIA はすべての融資の 25% をバックストップするオプションを取得します。 GoogleやAMD、そしてCerebrasのような専門チップメーカーとの競争が激化する中、これはNvidiaのテクノロジーをより多く市場に投入するもう1つの方法だ。
第 2 四半期に、Google は TPU システムの販売による収益を認識し始め、クラウド部門の 82% の成長に貢献しました。一方、AMDはデータセンター事業の100％以上の成長を報告しており、同社初のラックスケールシステム「Helios」が今年後半に出荷される予定だ。
フリーダム・キャピタル・マーケッツの技術調査責任者、ポール・ミークス氏は、競争の激化によりエヌビディアの「法外な利益」を生み出す能力が損なわれ、同社が戦略を多様化する動機になっていると述べた。
「彼らの考えの一部は、私たちの活動範囲を広げようということです」とミークス氏は語った。 「私たちは、GPU という 1 つの馬に乗ることができません。」
AI強気派は、エヌビディアは需要に応えているだけだとし、今日の市場の不足は容量側にあると指摘する。それを裏付ける数字はたくさんある。アンスロピックは先週末、投資家に対し、7月の年間収益ランレートが650億ドルに達し、前年比7倍に達したと語った。 OpenAI の稼働率は最近 400 億ドルに達しました。
クリアウォーター・アナリティクスの調査責任者マシュー・ベガリ氏は電子メールで、市場動向を踏まえると、「AI業界の回りくどい『砂上の楼閣』構造に関する物語は、いくぶん見当違いであるように思われる」と述べた。
「いつか私たちは生産能力を超えてしまうかもしれない」と彼は書いた。 「しかし、その日は今日ではありません。」
— CNBC のサマンサ・スビンとジョナサン・バニアンがこのレポートに寄稿しました
注目: AI は新しい資産クラスではなく、市場全体である、とクロックワイズ キャピタル CIO は語る`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/18/nvidias-ai-moat-is-shifting-from-chips-to-capital.html",
    publishedAt: "2026-08-18T11:55:33+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 8,
  },
  {
    id: "home-depot-reaffirms-guidance-amid-froze-5d1f2c53",
    title: "Home Depot reaffirms guidance amid 'frozen housing market conditions'",
    titleJa: "ホーム・デポ、「住宅市場の凍結」の中で指針を再確認",
    summaryJa: "ホーム・デポは火曜日、売上高、最終利益ともにウォール街の予想を上回る会計年度第2四半期決算を報告し、通期の見通しを再確認した。「当社は、私が『凍結した住宅市場』と呼ぶ状況で事業を続けているが、シェアを獲得し、顧客へのサービスを日々向上させていることも分かっている」とCFOのリチャード・マクファイル氏はCNBCに語った。 「これは私たちが行ってきた継続的な投資と戦略の実行への集中の反映です。」",
    bodyOriginal: `Home Depot on Tuesday reported fiscal second-quarter results that beat Wall Street expectations on the top and bottom lines and reaffirmed its full fiscal-year guidance.
"We continue to operate in what I call 'frozen housing market' conditions, but we also know that we're taking share and that we're serving our customers better every day," CFO Richard McPhail told CNBC. "It's a reflection of the continued investment we've made and the focus on executing our strategy."
McPhail said Home Depot saw "broad engagement" across its categories, including in both its pro and do-it-yourself businesses, but the greater uncertainty in the market led the company to reaffirm rather than raise its guidance.
He added that Home Depot's customer is "a healthy cohort," though he said the company has still not seen consumers return to big projects.
"They've told us they have the means to spend, they're just hesitant," he told CNBC. "While we're happy with their level of engagement in the first half, they do tell us they're worried about inflation, about fuel costs and about, about general uncertainty, and so there is a little bit of hesitancy there as the project gets bigger."
Here's how Home Depot performed in its fiscal second quarter compared with what Wall Street was expecting, based on a survey of analysts by LSEG:
- Earnings per share: $4.92 adjusted vs. $4.73 expected
- Revenue: $47.86 billion vs. $47.27 billion expected
The home improvement retailer reported net income of $4.77 billion, or $4.79 per share, compared with $4.55 billion, or $4.58 per share, the year prior. Excluding one-time items, Home Depot reported adjusted earnings per share of $4.92. Revenue rose 5.7% to $47.86 billion.
Home Depot saw comparable sales rise 1.7%, beating expectations that they would be up 0.9%, according to StreetAccount. McPhail said it is the highest comparable sales number the company has posted since the fiscal third quarter of 2022.
Home Depot also reaffirmed its fiscal 2026 guidance, which it said includes tariff refunds that are "expected to partially offset unplanned fuel, energy, and other product input costs." McPhail added that the tariff refunds allow the retailer to "maintain value" despite cost pressures in other areas.
The company expects total sales growth for the year to be between 2.5% and 4.5% and operating margin between 12.4% and 12.6%.
"The story of the quarter is a story of share gain with the pro and the consumer, and we're confident that our investments are working to allow us to win in the market," McPhail said.
Home Depot has been pressured by lower housing turnover, higher mortgage rates and economic uncertainty as customers have put off projects that come with buying a new home. Still, the company has been trying to attract more pro shoppers, a cohort that executives have previously said is largely unaffected by the macroeconomic conditions.
"We're focused on controlling what we can control," McPhail said. "We have been consistent through the years that in spite of a frozen housing environment, we're going to keep leaning into investment because we know that over the long run, conditions for home improvement demand are strong."
The company also announced last week that CEO Ted Decker is taking a "temporary medical leave of absence" for a few months. Ann-Marie Campbell, Home Depot's senior executive vice president of U.S. stores and operations, will oversee the day-to-day operations while McPhail will head the financial management and pro business, according to the company.`,
    bodyJa: `ホーム・デポは火曜日、売上高、最終利益ともにウォール街の予想を上回る会計年度第2四半期決算を報告し、通期の見通しを再確認した。
「当社は、私が『凍結した住宅市場』と呼ぶ状況で事業を続けているが、シェアを獲得し、顧客へのサービスを日々向上させていることも分かっている」とCFOのリチャード・マクファイル氏はCNBCに語った。 「これは私たちが行ってきた継続的な投資と戦略の実行への集中の反映です。」
マクファイル氏は、ホーム・デポはプロ向け事業と日曜大工事業の両方を含むカテゴリー全体で「幅広い取り組み」をみているが、市場の不確実性が高まったため、同社はガイダンスを引き上げるのではなく、再確認することにしたと述べた。
同氏は、ホーム・デポの顧客は「健全な層」だと付け加えたが、消費者が大規模プロジェクトに戻ってくるのはまだ見ていないと述べた。
同氏はCNBCに対し、「彼らは支出する資力はあると我々に話しているが、ただ躊躇しているだけだ」と語った。 「前半の彼らの関与のレベルには満足していますが、彼らはインフレや燃料費、その他一般的な不確実性について心配していると言っています。そのため、プロジェクトが大きくなるにつれ、少し躊躇するところもあります。」
LSEGによるアナリスト調査に基づいた、ホーム・デポの会計年度第2四半期の業績とウォール街の予想との比較は次のとおりだ。
- 1 株当たり利益: 調整後 4.92 ドル、予想 4.73 ドル
- 収益: 478.6億ドル対予想472.7億ドル
ホームセンター小売業者の純利益は、前年同期の 45 億 5,000 万ドル (1 株あたり 4.58 ドル) に対し、47 億 7,000 万ドル (1 株あたり 4.79 ドル) と報告されました。ホーム・デポは、一時項目を除いた調整後の一株当たり利益が 4.92 ドルであると報告しました。売上高は5.7％増の478億6000万ドルとなった。
ストリートアカウントによると、ホーム・デポの既存店売上高は１．７％増加し、予想の０．９％増を上回った。マクファイル氏は、これは同社が2022年度第3四半期以降に記録した比較可能な売上高としては最高額だと述べた。
ホーム・デポはまた、2026年度のガイダンスを再確認し、そのガイダンスには「計画外の燃料、エネルギー、その他の製品投入コストを部分的に相殺することが期待される」関税の払い戻しが含まれていると述べた。マクファイル氏は、関税の払い戻しにより、小売業者は他の分野でのコスト圧力にもかかわらず「価値を維持」できると付け加えた。
同社は、今年の総売上高の伸び率が2.5％から4.5％、営業利益率が12.4％から12.6％になると予想している。
「この四半期の物語は、プロとコンシューマーのシェア獲得の物語であり、私たちの投資が市場での勝利に貢献していると確信しています」とマクファイル氏は語った。
ホーム・デポは、顧客が新築住宅の購入に伴うプロジェクトを先送りしているため、住宅回転率の低下、住宅ローン金利の上昇、経済的不確実性によって圧迫されている。それでも、同社はより多くのプロ買い物客を引きつけようと努めており、幹部らはこの層はマクロ経済状況の影響をほとんど受けないと以前から述べていた。
「私たちはコントロールできるものをコントロールすることに重点を置いています」とマクファイル氏は語った。 「住宅環境が冷え込んでいるにもかかわらず、長期的には住宅改修需要の状況が強いことを知っているため、当社は投資に傾き続けると長年にわたって一貫してきました。」
同社は先週、テッド・デッカー最高経営責任者（CEO）が数カ月間「一時的な病気休暇」を取ることも発表した。同社によると、ホーム・デポの米国店舗・運営担当上級副社長アンマリー・キャンベル氏が日常業務を監督し、マクファイル氏が財務管理とプロビジネスの責任者となるという。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/18/home-depot-hd-q2-2026-earnings.html",
    publishedAt: "2026-08-18T11:48:01+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "from-jumpers-to-slug-pellets-how-british-33c44f47",
    title: "From jumpers to slug pellets - how British wool is back in demand",
    titleJa: "ジャンパーからナメクジのペレットまで - 英国羊毛の需要がどのように戻ってきたか",
    summaryJa: "ジャンパーからナメクジのペレットまで - 英国羊毛の需要がどのように戻ってきたか- 公開されました",
    bodyOriginal: `From jumpers to slug pellets - how British wool is back in demand
- Published
The price of wool has increased more than 70% in the last year, helped in part by a smaller British flock of sheep and a dwindling of the global stockpile produced during the Covid-19 pandemic.
Prices reached a 10-year high earlier this year, and comes after some farmers burnt fleeces in protest against how little they were being paid.
On average, a kilogram of clean shorn wool sold for £2.54 in the most recent sale, compared with less than £1.50 a year ago.
The rising cost may not be welcomed by shoppers seeking woolly socks and jumpers this winter, but it does mean farmers are more likely to cover the cost of shearing.
And while most people associate the versatile fibre with jumpers and blankets, it is also used in products ranging from flood protection systems to slug pellets, further helping fuel demand.
Wyn Williams keeps a flock of 700 sheep on the hills above Llanfair Caereinion in Powys and said it could be an expensive business.
He said the demand and subsequent increase in price "helps cover costs".
"We've got professional shearers coming, it's not everybody who can shear," Williams said.
"You've also got your helpers, the wool wrappers and everything else so it assists with the costs."
Like most sheep farmers, Williams primarily rears them for meat and breeding rather than for their wool, but it still has to be taken care of.
"Most importantly we have to shear from an animal welfare and health perspective.
"Who would want a big, strong winter coat still on with the excessive heat we're having at the moment?"
Sheep are disappearing from our hills - and our dinner plates
- Published6 March
The fleeces from Williams's farm are taken to a local wool depot in Newtown, where manager Barry Bellis sorts through them by hand.
It is an industry that has survived centuries, with wool being spun back in the Bronze Age.
Bellis said he could spot 68 different grades of wool as he had worked through the fleeces, with the best destined for formal wear while others ended up as slug pellets.
"If you've got a nice white fleece, you're able to dye it pink, green, blue, whatever colour you want," he said
"The blue face Leicester fleece, which is our closest to the merino, that will go into knitwear like men's suits."
Wool from Welsh mules is more likely to be walked on than worn.
"This type of fleece, which contains kemp," Bellis explains, "that will tend to go into a carpet blend because of the colour."
Gareth Jones, from British Wool said the price boom came down to supply and demand.
"There are less sheep in Wales, less sheep in the UK, producing less wool and if we look at a comparable market like New Zealand, there are less sheep there.
"They also had a carry-over of wool since Covid – that's cleared in the last two years," he added.
Despite less wool being available global interest in using the product has seen a resurgence.
"It is in demand worldwide," Jones said.
"China is an important market for us, we also have a bedding manufacturer in South Korea, and we have some licensees in Japan."
As the rising costs in fuel and fertiliser continues to be a challenge for many farmers, making money back from wool comes as a welcome relief to some.
More top stories
- Published1 day ago
- Published1 day ago
- Published1 day ago`,
    bodyJa: `ジャンパーからナメクジのペレットまで - 英国羊毛の需要がどのように戻ってきたか
- 公開されました
羊毛の価格は昨年、英国の羊の群れの減少と、新型コロナウイルス感染症のパンデミックで生産される世界的な備蓄量の減少が一因となって、70％以上上昇した。
価格は今年初めに10年ぶりの高値に達したが、これは一部の農家が賃金の少なさに抗議してフリースを燃やしたことがきっかけとなった。
平均して、きれいに刈り取られた羊毛 1 キログラムは、直近のセールでは 2.54 ポンドで販売されましたが、1 年前は 1.50 ポンド未満でした。
この冬、羊毛の靴下やジャンパーを求める買い物客にとってコストの上昇は歓迎されないかもしれないが、農家が毛刈りのコストを負担する可能性が高まることを意味する。
そして、ほとんどの人はこの多用途繊維をジャンパーやブランケットと連想しますが、洪水防御システムからナメクジペレットに至るまでの製品にも使用されており、燃料需要をさらに助けています。
ウィン・ウィリアムズさんはポーウィスのランフェア・カエレニオンの上の丘で700頭の羊の群れを飼っているが、これは高額なビジネスになる可能性があると語った。
同氏は、需要とその後の価格上昇が「コストをカバーするのに役立つ」と述べた。
「プロの毛刈り師が来ていますが、誰もが毛刈りできるわけではありません」とウィリアムズさんは語った。
「ヘルパーや羊毛の包み紙などもすべて揃っているので、費用も助かります。」
ほとんどの羊農家と同様、ウィリアムズさんも毛を育てるよりも主に食肉と繁殖のために羊を飼育しているが、それでも世話は必要だ。
「最も重要なことは、動物福祉と健康の観点から毛を刈らなければならないことです。
「今の異常な暑さの中で、大きくて丈夫な冬用のコートをまだ着ている人がいるでしょうか？」
羊が私たちの丘から、そして私たちの夕食の皿から消えつつあります
- 3 月 6 日発行
ウィリアムズの農場からのフリースはニュータウンにある地元の羊毛倉庫に運ばれ、そこでマネージャーのバリー・ベリスが手作業で選別します。
これは青銅器時代に羊毛が紡績されており、何世紀にもわたって生き残ってきた産業です。
ベリス氏は、フリースを調べた結果、68種類の異なるグレードのウールを見つけることができ、最高のものはフォーマルウェアに使用されるが、他のものはナメクジペレットとして終わったと述べた。
「素敵な白いフリースがあれば、ピンク、緑、青など、好きな色に染めることができます」と彼は言いました。
「メリノに最も近いブルーフェイスのレスターフリースは、メンズスーツのようなニットウェアに使用されます。」
ウェールズミュールのウールは、着用されるよりも歩く可能性が高くなります。
「このタイプのフリースにはケンプが含まれており、その色のせいでカーペットに混ざってしまう傾向があります」とベリス氏は説明する。
ブリティッシュ・ウールのギャレス・ジョーンズ氏は、価格ブームは需要と供給によるものだと語った。
「ウェールズでも羊の数が減り、英国でも羊の数が減り、羊毛の生産量も減り、ニュージーランドのような同等の市場に目を向けると、羊の数も減ります。
「新型コロナウイルス以来、羊毛の持ち越しもあったが、それは過去2年間で解消された」と彼は付け加えた。
入手可能なウールが減少しているにもかかわらず、製品の使用に対する世界的な関心が再び高まっています。
「世界中で需要がある」とジョーンズ氏は語った。
「中国は当社にとって重要な市場です。韓国にも寝具メーカーがあり、日本にもライセンシーがいくつかあります。」
燃料と肥料のコスト上昇が多くの農家にとって引き続き課題となっている中、羊毛から収益を得ることが一部の農家にとっては歓迎すべき救いとなっている。
その他のトップ記事
- 1 日前に公開
- 1 日前に公開
- 1 日前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c8xnkjwdn5wo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-18T11:18:39+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/78b5/live/3df8bb70-9ae7-11f1-930b-57cfba7235f9.jpg",
    readTime: 4,
  },
  {
    id: "wetherspoons-bans-customers-playing-musi-8559be4f",
    title: "Wetherspoons bans customers playing music from phones in pubs",
    titleJa: "ウェザースプーンズ、客がパブで携帯電話から音楽を流すことを禁止",
    summaryJa: "ウェザースプーンズ、客がパブで携帯電話から音楽を流すことを禁止- 公開されました",
    bodyOriginal: `Wetherspoons bans customers playing music from phones in pubs
- Published
Wetherspoons has banned its customers from playing music out loud or taking calls on speaker, saying the noise from phones and tablets was an increasing problem driving people "nuts".
The company – which runs 792 pubs and bars across the UK – said that following complaints it has asked customers to switch their devices to silent or to use earphones.
Polling in recent years by various organisations suggests people are largely opposed to others playing music or taking calls on speaker in public spaces.
Wetherspoons told the BBC that staff would be asked to use "common sense" when enforcing the ban.
"We are not looking to ask anyone to leave a pub if they go against the ruling, but it is an option for managers if they refuse to do so," the company said.
The British Beer and Pub Association, which represents Wetherspoons and several other pub companies in the UK, said that "having a clear policy helps staff enforce rules and customers know what they can and can't do".
The group added: "We're yet to hear of anyone who relishes having a pint against the backdrop of a speakerphone call or someone loudly playing a video, so we expect this move will be greatly welcomed."
Studies suggest the majority of Britons are annoyed by hearing people take calls on speakerphone or playing videos or music on their phones without headphones.
A Transport for London survey of 1,000 people last year found 70% of respondents found loud music and phone calls without headphones a nuisance.
However, the evidence also suggests there is a clear generational gap. In an Ofcom survey of 1,010 people in August 2022, of the 13-to-17-year-olds questioned, 69% said it was acceptable to make video calls, 73% to listen to music and 83% to watch videos without headphones.
'Oasis of tranquility'
The decision by Wetherspoons follows a stricter, longstanding policy from rival pub chain Sam Smiths, which has a ban against phone or tech use of any kind, in addition to a ban on swearing.
Wetherspoons does not play music in any of its pubs, with chief executive Sir Tim Martin describing them as "an oasis of tranquillity and contemplation... in a world dominated by other people's music and amplified sound".
"In order to avoid customers being driven chicken jalfrezi by a cacophony of sound, we are kindly asking phone users to pipe down," he added.
The chain does play music in the evening at its 44 Lloyds' bars. It confirmed that the ban on customers playing music and taking calls on speaker would also apply to those venues.
The number of Wetherspoons pubs has steadily fallen over the last decade from a peak of 955 in late 2015.
The firm has faced a financial challenges during those 10 years from the Covid pandemic and inflation.
Last month, it told investors that profit for the year would be lower than expected because of higher costs for food, labour, repairs, energy and business rates.
Get in touch
Have you experienced this issue in a pub? Share your experiences.
Related topics
- Published6 August
- Published18 February`,
    bodyJa: `ウェザースプーンズ、客がパブで携帯電話から音楽を流すことを禁止
- 公開されました
ウェザースプーンズは、携帯電話やタブレットからの騒音が人々を「正気」に陥らせる問題が増大しているとして、顧客が大声で音楽を再生したり、スピーカーで通話したりすることを禁止した。
英国全土で792のパブやバーを経営する同社は、苦情を受けて顧客にデバイスをサイレントモードに切り替えるか、イヤホンを使用するよう求めたと述べた。
さまざまな団体による近年の世論調査によると、人々は公共の場で他人が音楽を演奏したり、スピーカーで通話したりすることにおおむね反対していることがわかっています。
ウェザースプーンズ氏はBBCに対し、禁止令を施行する際にはスタッフは「常識」に従うよう求められると語った。
同社は「判決に反した場合、パブから退店するよう求めるつもりはないが、経営者が拒否する場合はそれも選択肢だ」と述べた。
ウェザースプーンと英国の他のパブ会社数社を代表する英国ビール・パブ協会は、「明確なポリシーがあることでスタッフは規則を遵守し、顧客は何ができて何ができないのかを知ることができる」と述べた。
同団体はさらに、「スピーカーフォン通話を背景にビールを飲んだり、大音量でビデオを再生したりするのを楽しんだという人はまだ聞いていないので、この動きは大いに歓迎されると期待している」と付け加えた。
研究によると、英国人の大多数は、人々がスピーカーフォンで電話に出たり、ヘッドフォンなしで携帯電話でビデオや音楽を再生したりするのを聞くことにイライラしていると示唆されています。
ロンドン交通局が昨年1,000人を対象に行った調査では、回答者の70％が大音量の音楽やヘッドフォンなしでの通話が迷惑だと感じていることがわかった。
しかし、証拠はまた、明らかな世代ギャップがあることを示唆しています。 2022年8月に1,010人を対象にOfcomが実施した調査では、質問を受けた13歳から17歳のうち69％がビデオ通話をすることは許容され、73％が音楽を聴くこと、83％がヘッドフォンなしでビデオを視聴することは許容されると回答した。
「静寂のオアシス」
ウェザースプーンズ氏の決定は、悪口行為の禁止に加え、あらゆる種類の電話やテクノロジーの使用を禁止するライバルのパブチェーン、サム・スミスの長年にわたるより厳格な方針に従ったものだ。
ウェザースプーンズはどのパブでも音楽を流しておらず、最高経営責任者サー・ティム・マーティン氏は、ウェザースプーンズを「他人の音楽と増幅されたサウンドが支配する世界における、静けさと思索のオアシス」と表現している。
「不協和音によって顧客がチキン・ジャルフレジーに陥るのを避けるため、電話ユーザーには小声で話すようお願いしている」と同氏は付け加えた。
このチェーン店では、44 軒のロイズ バーで夜に音楽を演奏しています。顧客による音楽の再生やスピーカーでの通話の禁止は、これらの会場にも適用されることを確認した。
ウェザースプーンのパブの数は、2015年末の955軒のピークからここ10年間で着実に減少している。
同社はこの10年間、新型コロナウイルスのパンデミックとインフレによる財務上の課題に直面してきた。
同社は先月投資家に対し、食料、人件費、修理費、エネルギー費、営業料金の上昇により、今年の利益が予想よりも低くなるだろうと述べた。
連絡する
パブでこの問題を経験したことがありますか?あなたの経験を共有してください。
関連トピック
- 8 月 6 日発行
- 2 月 18 日公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cnvnl8gy22lo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-18T10:53:52+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/dbde/live/1b00c8d0-9af4-11f1-930b-57cfba7235f9.jpg",
    readTime: 4,
  },
  {
    id: "job-vacancies-at-five-year-low-as-smalle-4d76ff99",
    title: "Job vacancies at five-year low as smaller firms scale back recruitment",
    titleJa: "中小企業の採用縮小で求人数は5年ぶりの低さ",
    summaryJa: "中小企業の採用縮小で求人数は5年ぶりの低さ- 公開されました",
    bodyOriginal: `Job vacancies at five-year low as smaller firms scale back recruitment
- Published
The number of job vacancies has fallen to its lowest level in more than five years as smaller businesses cut back on recruitment, the latest official figures indicate.
Vacancy numbers dipped slightly over the May-to-July period to 707,000, according to the Office for National Statistics (ONS), which said small firms were citing labour and operating costs as reasons for scaling back hiring.
The ONS said the labour market was "little changed overall", with the unemployment rate remaining at 4.9%.
Growth in regular earnings - which excludes bonuses - picked up slightly, rising at an annual pace of 3.5% in the three months to June.
"The UK labour market remains stuck in a low-churn limbo, with employers reluctant to hire, fire or offer bigger pay rises as they grapple with rising costs, intensifying global headwinds and heightened policy uncertainty," said Suren Thiru, chief economist at the Institute of Chartered Accountants in England and Wales.
"The persistent slide in vacancies is a red flag for the jobs market, suggesting labour demand is shrinking amid soaring employment and energy costs, while greater automation is also squeezing some entry-level roles."
Yael Selfin, chief economist at KPMG, noted that while pay growth picked up, this was "driven by a rise in public sector wages".
Private sector pay growth, which she said gave more accurate picture of underlying conditions in the labour market, slowed to 2.8%.
- Published4 days ago`,
    bodyJa: `中小企業の採用縮小で求人数は5年ぶりの低さ
- 公開されました
最新の公式統計によると、中小企業が採用を削減しているため、求人数は過去5年以上で最低水準にまで落ち込んでいる。
国家統計局（ONS）によると、欠員数は5月から7月にかけてわずかに減少し、70万7,000人となった。小規模企業は雇用削減の理由として人件費と営業コストを挙げているという。
ＯＮＳは、労働市場は「全体的にはほとんど変化がなく」、失業率は４．９％にとどまっていると述べた。
ボーナスを除いた定期利益の伸びは若干加速し、６月までの３カ月間で年率３．５％のペースで増加した。
イングランド・ウェールズ公認会計士協会の首席エコノミスト、スレン・ティルー氏は「コスト上昇、世界的な逆風激化、政策の不確実性の高まりに対処するため、雇用主は雇用や解雇、あるいは大幅な昇給に消極的で、英国の労働市場は依然として低離職の行き詰まりに陥っている」と述べた。
「欠員の継続的な減少は雇用市場にとって危険信号であり、雇用とエネルギーコストの高騰で労働需要が縮小していることを示唆している一方、自動化の推進により一部の初級レベルの役割も圧迫されている。」
ＫＰＭＧのチーフエコノミスト、ヤエル・セルフィン氏は、賃金の伸びは加速したが、これは「公共部門の賃金上昇に牽引された」と指摘した。
同氏は、労働市場の根本的な状況をより正確に把握できる民間部門の賃金上昇率は2.8％に鈍化したと述べた。
- 4 日前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cn9nwx090v9o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-18T06:36:40+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/1774/live/6a464c30-9a27-11f1-90d9-9d833c0912f2.jpg",
    readTime: 2,
  },
  {
    id: "the-30-year-treasury-yield-just-hit-a-19-85dc833c",
    title: "The 30-year Treasury yield just hit a 19-year high. Three things could drive it even higher",
    titleJa: "30年米国債利回りは19年ぶりの高水準に達したばかりだ。 3 つの要素がそれをさらに高める可能性がある",
    summaryJa: "30年米国債利回りは約20年ぶりの高水準に上昇しており、一部のストラテジストは長期国債の下落余地はさらに広がるとみている。通常、地政学的な出来事に敏感な30年米国債利回りは月曜日には4ベーシスポイント以上上昇して5.311％となり、2007年6月以来の高水準に達した。6月の海外国債保有は減少し、上位保有国である英国、中国、日本はいずれも保有を減らしたと財務省が月曜日に報告した。",
    bodyOriginal: `The yield on the 30-year U.S. Treasury has surged to its highest level in nearly two decades, and some strategists see scope for the selloff in long-dated government bonds to go further.
The 30-year Treasury yield, which is typically sensitive to geopolitical events, advanced more than 4 basis points to 5.311% on Monday, reaching its highest level since June 2007. Foreign holdings of Treasurys fell in June, the Treasury Department reported on Monday, with top holders U.K., China and Japan all reducing their holdings.
"Long-term yields look likely to push up to 5.60%-5.70% and likely move up at a quicker pace than normal given the recent resolution of this three-year triangle pattern," said Fundstrat technical strategist Mark Newton.
That comes despite recent U.S. economic data that might normally be expected to push yields lower. July retail sales were the weakest since May 2025, while recent labor-market data has also pointed toward cooling conditions.
So what could send yields even higher?
1. Global participation
The latest jump in Treasury yields did not originate entirely in the U.S.
Fundstrat's Newton pointed to Japan, where weaker-than-expected economic growth was accompanied by a hotter GDP deflator.
"Ten-year and twenty-year JGB yields pushed higher, and it spilled right over into U.S. markets, driving the long bond to new multi-year highs," Newton said.
If yields in other major developed markets continue climbing, investors may demand higher returns to hold U.S. government debt as well, said industry veterans.
BMO strategists also flagged fiscal concerns across the U.S., Japan, U.K. and Europe as one possible factor behind recent weakness in long-dated bonds. Even if U.S. economic data softens, a global repricing of long-term borrowing costs could keep upward pressure on Treasury yields, they said.
2. More Fed hikes
Another risk is that the U.S. economy simply remains too strong for interest rates to fall much.
Markets are currently pricing an unusually benign combination: resilient growth and record-high equities, Deutsche Bank said in a note late Monday, only limited by additional central-bank tightening, and contained commodity supply shocks. The bank argued that combination may prove difficult to sustain.
"By definition, strong growth and buoyant risk assets mean that financial conditions will remain accommodative, raising demand and pushing central banks into faster rate hikes," Deutsche Bank macro strategist Henry Allen wrote.
If growth stays robust and financial conditions remain loose, demand could stay strong enough to keep inflation elevated and force the Federal Reserve to raise rates more than investors currently expect.
Deutsche Bank noted that inflation remains above target and that, historically, current inflation levels have been associated with multiple rate hikes. Its analysis suggests a CPI rate above 3% has historically corresponded with more than 100 basis points of tightening during the first year of Fed hiking cycles.
There is precedent for a sharp bond-market repricing even without a recession. In early 2024, stronger growth and inflation pushed the 10-year Treasury yield from 3.88% at the end of 2023 to a peak of 4.70% by late April as expectations for rapid Fed cuts were unwound.
3. Supply, inflation and the term premium
The third risk is specific to longer-dated bonds: investors may demand greater compensation to lend to the U.S. government for decades.
Heavy Treasury issuance is one pressure point. BMO noted that the latest 30-year auction cleared at its highest yield since 2001, while five of the previous seven 20-year auctions had tailed, suggesting demand for long-duration debt has been less than robust.
Inflation could add another layer of pressure. BMO said energy remains a potential bearish trigger for Treasurys, particularly because yields have shown little willingness to fall despite softer economic data.
A renewed commodity shock would make the picture even harder. Deutsche Bank warned that "the combination of a negative hit to both growth and inflation could hit equities and bonds simultaneously."
For now, that leaves long-dated Treasurys vulnerable from several directions at once: rising global yields, an economy that could prove stronger than expected, and persistent concerns around inflation and debt supply.
As Deutsche Bank put it, "current market pricing is leaving almost no margin for error."`,
    bodyJa: `30年米国債利回りは約20年ぶりの高水準に上昇しており、一部のストラテジストは長期国債の下落余地はさらに広がるとみている。
通常、地政学的な出来事に敏感な30年米国債利回りは月曜日には4ベーシスポイント以上上昇して5.311％となり、2007年6月以来の高水準に達した。6月の海外国債保有は減少し、上位保有国である英国、中国、日本はいずれも保有を減らしたと財務省が月曜日に報告した。
ファンドストラットのテクニカルストラテジスト、マーク・ニュートン氏は「長期利回りは５．６０─５．７０％まで上昇する可能性が高く、この３年三角パターンが最近解消されたことを踏まえると、通常よりも速いペースで上昇する可能性が高い」と述べた。
通常なら利回り低下が予想される最近の米経済指標にもかかわらず、このような結果となった。 ７月の小売売上高は２０２５年５月以来の低水準となったが、最近の労働市場データも状況の冷え込みを示している。
では、何が利回りをさらに高める可能性があるのでしょうか?
1. グローバルな参加
最近の米国債利回りの急上昇は、完全に米国に起因するものではない。
ファンドストラットのニュートン氏は、予想を下回る経済成長に伴いGDPデフレーターが上昇している日本を指摘した。
ニュートン氏は「１０年債と２０年債の利回りが上昇し、それが米国市場に波及し、長期国債が数年ぶりの高値を更新した」と述べた。
業界のベテランらによると、他の主要先進市場の利回りが上昇し続ければ、投資家は米国債も保有するためにより高いリターンを求める可能性がある。
BMOのストラテジストらはまた、米国、日本、英国、欧州の財政懸念が最近の長期債安の要因の一つである可能性があると指摘した。たとえ米国の経済指標が軟化したとしても、長期借入コストの世界的な再価格設定により、米国債利回りには上昇圧力が続く可能性がある、と彼らは述べた。
2. FRBの追加利上げ
もう一つのリスクは、金利が大幅に低下するには米国経済が依然として強すぎることだ。
ドイツ銀行は月曜遅くのメモで、市場は現在、回復力のある成長と過去最高水準の株価という、異例に良好な組み合わせを織り込んでおり、その制限は中央銀行の追加引き締めによってのみであり、商品供給ショックは抑制されていると述べた。同行は、この統合を維持するのは難しい可能性があると主張した。
ドイツ銀行のマクロストラテジスト、ヘンリー・アレン氏は「定義上、力強い成長と活発なリスク資産は金融環境が緩和的な状態を維持することを意味し、需要を高め、中央銀行をより迅速な利上げに駆り立てる」と述べた。
成長が堅調に推移し、金融環境が緩和したままであれば、需要が十分に強い状態を維持してインフレ率の上昇を維持し、米連邦準備理事会（FRB）が投資家が現在予想している以上の利上げを余儀なくされる可能性がある。
ドイツ銀行は、インフレは依然として目標を上回っており、歴史的に現在のインフレ水準は複数回の利上げと関連していると指摘した。その分析によれば、CPI率が3%を超えると、これまでFRBの利上げサイクルの初年度における100ベーシスポイント以上の引き締めに相当していたことが示唆される。
景気後退がなくても、債券市場の価格が急上昇した前例がある。 2024年初頭、FRBの急速な利下げ期待が巻き戻される中、成長とインフレの加速により10年米国債利回りは2023年末の3.88％から4月下旬までに最高の4.70％に上昇した。
3. 供給、インフレ、期間プレミアム
3 番目のリスクは長期債に特有のものです。投資家は数十年にわたって米国政府に融資するために、より大きな補償を要求する可能性があります。
多額の国債発行が一つのプレッシャーポイントとなる。 ＢＭＯは、直近の３０年債入札は２００１年以来の最高利回りで落札された一方、過去７回の２０年債入札のうち５回は尾行となっており、長期債への需要がそれほど旺盛ではないことを示唆していると指摘した。
インフレはさらなる圧力を加える可能性がある。 ＢＭＯは、特に軟調な経済指標にもかかわらず利回りが低下する意欲をほとんど示さないため、エネルギーは依然として米国債にとって潜在的な弱気要因であると述べた。
新たな商品ショックがあれば、事態はさらに困難になるだろう。ドイツ銀行は「成長とインフレの両方に悪影響が重なると、株式と債券が同時に打撃を受ける可能性がある」と警告した。
今のところ、長期国債は、世界的な利回りの上昇、予想より強い経済成長、そしてインフレと債券供給をめぐる根強い懸念など、さまざまな方向から同時に脆弱なままになっている。
ドイツ銀行が言うように、「現在の市場価格には誤差の余地がほとんどない」。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/18/30-year-treasury-yield-three-things-that-could-drive-it-even-higher.html",
    publishedAt: "2026-08-18T06:11:52+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 5,
  },
  {
    id: "disabled-people-in-england-to-get-24-hou-a3fb9b3c",
    title: "Disabled people in England to get 24-hour free bus travel",
    titleJa: "英国の障害者に24時間無料のバス旅行を提供",
    summaryJa: "英国の障害者に24時間無料のバス旅行を提供- 公開されました",
    bodyOriginal: `Disabled people in England to get 24-hour free bus travel
- Published
Disabled people in England will be able to travel by bus for free at any time of day from April, the government has announced.
Currently, disabled bus passes are only eligible for use between the hours of 09:30 and 23:00 on weekdays, making it difficult for people to get to work or attend later evening events. They can be used at any time of day at the weekend and on bank holidays.
It is believed about one million people could benefit from the change, which forms part of the government's focus on reducing the cost of living and encouraging people into work.
The disability charity Scope said the move would "remove barriers to everyday life".
According to the government, bus travel is the most popular mode of transport in England and a "lifeline for so many".
Prime Minister Andy Burnham said it was "simply not right that many disabled people cannot travel using their pass during certain times of the day".
He said the government would change that, as he had done previously in his role as mayor of Greater Manchester.
Earlier this year, Burnham removed time-restricted travel for those with disabled passes in Manchester so they could use the city's bus system, known as the Bee Network, at any time of day.
"I'm proud to do it now for the whole country," he added.
Tom Gordon, Liberal Democrat MP for Harrogate and Knaresborough and prominent advocate for the policy, called it a "huge win for the disabled community" and a "culmination of two years of campaigning".
But a Conservative Party spokesman asked the prime minister to "come clean" on how he was going to fund "this growing list of policies".
"This is simply the shuffling around of existing departmental budgets," they added.
James Barber, from the disabled-led charity Transport for All, called it a "real win for disabled people" and "very welcome news".
He said it would also help to put an end to "the confusing and unjust postcode lottery caused by different rules in different areas".
Kurtis Crossthorn from Sheffield, who is registered blind, said the change would be "very welcome" and would make many disabled people feel "relieved" and "heard".
"Disabled people need to get to work and need to live their life as well," he added, describing buses as a "lifeline" particularly for those in community who cannot drive.
The new changes will come into force on 1 April.
The £60m scheme will be funded from the budgets of the Department for Transport and Department for Work and Pensions, the government said.
Work and Pensions minister Lilian Greenwood MP said the change was an "indefinite commitment" rather than a short-term policy, and that the government would look at how to fund this in following years during spending reviews.
As part of its focus on reducing the cost of living, the government has already introduced free bus travel for under-16s during August, as well as a £2 bus fare cap for single tickets, which bus companies have been encouraged to opt into.
It has also cut business rates for pubs and axed VAT from electricity bills.
Around the UK, disabled people in Scotland and Wales are already entitled to free bus travel, while in Northern Ireland, blind people and disabled war veterans are able to travel for free, while it is a half-fare for everyone else who holds a disabled bus pass.
Get in touch
Are you affected by the proposed changes? Do you have a related story to share?
Get our flagship newsletter with all the headlines you need to start the day. Sign up here.`,
    bodyJa: `英国の障害者に24時間無料のバス旅行を提供
- 公開されました
イギリス政府は、4月から障害者がいつでも無料でバスに乗れるようになると発表した。
現在、障害者バスパスは平日の09:30から23:00までの時間帯のみ利用可能であるため、人々が通勤したり、夕方以降のイベントに参加したりすることが困難になっています。週末や祝日であればいつでもご利用いただけます。
約100万人がこの変化から恩恵を受ける可能性があると考えられており、これは生活費の削減と人々の就労促進に重点を置く政府の一環となっている。
障害者慈善団体スコープは、この措置により「日常生活への障壁が取り除かれる」と述べた。
政府によると、バス旅行はイギリスで最も人気のある交通手段であり、「非常に多くの人にとってのライフライン」だという。
アンディ・バーナム首相は「多くの障害者が一日の特定の時間帯にパスを使って旅行できないのはまったく正しくない」と述べた。
同氏は、以前グレーター・マンチェスター市長として務めていたときと同様に、政府がこの状況を変えるだろうと述べた。
今年初め、バーナム市はマンチェスター市内の障害者パスを持つ人々の時間制限付き移動を撤廃し、ビー・ネットワークとして知られる市のバスシステムを一日中いつでも利用できるようにした。
「国全体のために今それを行うことを誇りに思う」と彼は付け加えた。
ハロゲートとナレスボロー選出の自由民主党議員であり、この政策の著名な支持者であるトム・ゴードンは、これを「障害者コミュニティにとって大きな勝利」であり、「2年間の運動の集大成」であると述べた。
しかし、保守党の報道官は首相に対し、「増え続ける政策リスト」にどのように資金を提供するつもりなのかについて「白状する」よう求めた。
「これは既存の部門の予算を単に入れ替えただけだ」と彼らは付け加えた。
障害者主導の慈善団体「トランスポート・フォー・オール」のジェームズ・バーバー氏は、これを「障害者にとって真の勝利」であり「非常に歓迎すべきニュース」だと述べた。
同氏は、これは「地域ごとに異なるルールによって引き起こされる混乱を招く不当な郵便番号抽選」に終止符を打つことにも役立つだろうと述べた。
視覚障害者として登録されているシェフィールド出身のカーティス・クロスソーンさんは、この変更は「非常に歓迎」であり、多くの障害者が「安心」し「声が聞こえる」と感じるだろうと述べた。
同氏はさらに、「障害者は仕事に行く必要があり、同様に自分の生活を送る必要がある」と付け加え、バスは特に運転できない地域住民にとっての「ライフライン」であると述べた。
新しい変更は 4 月 1 日に発効します。
政府によると、この計画には6000万ポンドが運輸省と労働年金省の予算から賄われるという。
労働・年金大臣のリリアン・グリーンウッド議員は、この変更は短期的な政策ではなく「無期限の約束」であり、政府は今後数年間の支出見直しの際にこの資金の捻出方法を検討すると述べた。
生活費削減への重点の一環として、政府はすでに8月中に16歳未満のバス旅行の無料化を導入しており、またバス会社にはこれを選択するよう奨励されている1回分のチケットのバス運賃の上限を2ポンドに設定している。
パブの営業料金も引き下げ、電気代からの付加価値税も廃止した。
英国全土では、スコットランドとウェールズの障害者はすでに無料でバスに乗車できる権利が与えられているが、北アイルランドでは視覚障害者と障害のある退役軍人は無料で乗車できる一方、障害者バスパスを持っている他の人は半額となる。
連絡する
提案された変更の影響を受けますか?関連する話はありますか?
一日の始まりに必要な見出しをすべて掲載した、当社の主力ニュースレターを入手してください。ここからサインアップしてください。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cjwx5vx21y2o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-18T06:11:30+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/9b0d/live/40b808b0-9aca-11f1-a74b-2f66a3b83590.jpg",
    readTime: 4,
  },
  {
    id: "south-korea-must-brace-for-worst-case-sc-293ae3cf",
    title: "South Korea must brace for ‘worst-case scenario,’ President Lee says, as Trump cuts military drills",
    titleJa: "トランプ大統領が軍事演習を削減、韓国は「最悪のシナリオ」に備える必要があると李大統領",
    summaryJa: "韓国の李在明大統領は火曜日、平和を維持することがこの国にとって「最も重要」だが、「最悪のシナリオ」に備える必要があると述べた。同氏のコメントは、ドナルド・トランプ米大統領がピート・ヘグセス国防長官に対し、北朝鮮に「まったく不適切で敵対的な信号を送らないように」韓国との共同訓練を「大幅に縮小する」よう命令したことを受けたものである。",
    bodyOriginal: `South Korean President Lee Jae Myung said Tuesday that maintaining peace was "most important" for the country, but it needs to prepare for the "worst case scenario."
His comments come after U.S. President Donald Trump ordered Defense Secretary Pete Hegseth to "substantially reduce" joint drills with Seoul so as to not "send a signal that is totally inappropriate and hostile" to North Korea.
In a Truth Social post Sunday stateside, Trump cited his "very good" relationship with North Korean leader Kim Jong Un, and described the country as "unthreatening and respectful."
Lee on Tuesday said that the annual exercises, known as Ulchi Freedom Shield, are defensive and not intended to attack North Korea or raise tensions on the peninsula, according to a CNBC translation of the Korean release.
The joint military exercises that started Monday are scheduled to run until Aug. 27, with about 18,000 South Korean military personnel participating.
Pyongyang has long denounced the joint drills, calling them a rehearsal for invading the North.
The country's foreign affairs ministry said in a statement last week that "By doing so, [the U.S.] did not conceal its aim to complete preparations for the substantial military confrontation" with North Korea.
"This is tantamount to an admission that the exercises, which the U.S. and the ROK describe as 'annual' and 'defensive' ones, are a rehearsal for an aggressive war," it added.
Trump's comments also come as he accused Seoul of not helping the U.S. in the conflict with Iran, saying on Monday that "We have 39,000 soldiers over there guarding you from Kim Jong Un, your next door neighbor, and you're not going to help us on a very easy military operation in Iran."
U.S. Forces Korea, the command authority for Washington's forces in South Korea, consists of about 28,500 personnel.
Officials from South Korea's presidential office said that "We are closely discussing practical and military contribution measures with the U.S. side, taking into account various factors such as readiness on the Korean Peninsula and domestic legal procedures," South Korean media reported Monday.
Trump, using his rhetoric and timing around the exercises, is trying to entice North Korea's Kim into meeting with him, according to Victor Cha, Korea chair at the Center for Strategic and International Studies.
Speaking on a podcast by CSIS, Cha added that "this is not something that is unusual. We have seen the president use military exercises as a tool in the past."
Back in 2018, Trump had suspended exercises with South Korea as negotiations were going on between Pyongyang and Washington.
Cha also said that part of the reason we are seeing this now is because to Trump, the timing of the exercises are a useful instrument to send a concrete message, and to get headlines off Iran.
"Trump's tired of Iran ... so he's shifting to something else."
— CNBC's Jenny Lee contributed to this report.`,
    bodyJa: `韓国の李在明大統領は火曜日、平和を維持することがこの国にとって「最も重要」だが、「最悪のシナリオ」に備える必要があると述べた。
同氏のコメントは、ドナルド・トランプ米大統領がピート・ヘグセス国防長官に対し、北朝鮮に「まったく不適切で敵対的な信号を送らないように」韓国との共同訓練を「大幅に縮小する」よう命令したことを受けたものである。
トランプ大統領は、日曜の米紙トゥルース・ソーシャルへの投稿で、北朝鮮指導者金正恩氏との「非常に良好な」関係に言及し、同国を「脅威がなく、敬意を持っている」と評した。
CNBCの韓国側の発表の翻訳によると、李氏は火曜日、乙支フリーダムシールドとして知られる年次演習は防衛的なものであり、北朝鮮を攻撃したり、半島の緊張を高めることを目的としたものではないと述べた。
月曜日に始まった合同軍事演習は8月27日まで行われる予定で、韓国軍関係者約1万8000人が参加する。
北朝鮮は長年、合同演習を北朝鮮侵略の予行演習だと非難してきた。
同国の外務省は先週の声明で、「そうすることで（米国は）北朝鮮との実質的な軍事衝突への準備を完了させるという目的を隠さなかった」と述べた。
さらに、「これは、米国と韓国が『毎年恒例』で『防衛的』演習と称している演習が侵略戦争の予行演習であることを認めたに等しい」と付け加えた。
トランプ大統領のコメントはまた、韓国がイランとの紛争で米国を助けていないとして韓国を非難した際にも出たもので、月曜日には「我々は向こうに3万9000人の兵士があなた方を隣の金正恩氏から守っているのに、あなた方はイランでの非常に簡単な軍事作戦に我々を協力するつもりはない」と述べた。
在韓米軍はワシントン軍の指揮機関であり、約2万8500人の隊員で構成されている。
韓国メディアは月曜、韓国大統領府関係者らは「朝鮮半島での備えや国内の法的手続きなど様々な要素を考慮し、米国側と現実的・軍事的貢献策について緊密に協議している」と述べたと報じた。
戦略国際​​問題研究所の韓国担当議長、ビクター・チャ氏によると、トランプ大統領は演習中のレトリックとタイミングを利用して、北朝鮮の金氏を会談に誘導しようとしているという。
チャ氏はCSISのポッドキャストで、「これは珍しいことではない。大統領が軍事演習を手段として利用するのを過去にも見てきた」と付け加えた。
2018年に遡ると、北朝鮮と米国の間で交渉が行われていたため、トランプ大統領は韓国との演習を中止していた。
チャ氏はまた、私たちが今このような状況に陥っている理由の一部は、トランプ氏にとって演習のタイミングが具体的なメッセージを送り、イランに関するニュースの見出しを得るのに有益な手段だからであると述べた。
「トランプ氏はイランにうんざりしており、別のものに乗り換えようとしている。」
— CNBC の Jenny Lee がこのレポートに寄稿しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/18/trump-south-korea-military-exercises-iran-north-korea.html",
    publishedAt: "2026-08-18T05:16:51+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "ship-attacked-in-hormuz-strait-as-u-s-ir-5140a081",
    title: "Ship attacked in Hormuz Strait as U.S.-Iran ceasefire expiry risks prolonged conflict",
    titleJa: "米国とイランの停戦期限切れで紛争長期化の恐れ、ホルムズ海峡で船舶攻撃",
    summaryJa: "英国海運貿易局は火曜日、ホルムズ海峡を航行中に貨物船に飛翔体が衝突したと発表し、米国とイランが立場を強化する中、同水路での航行リスクが継続していることを示唆した。この攻撃により機関室が損傷し、乗組員が負傷したと海事機関は発表し、残りの乗組員はオマーン沿岸警備隊の支援を受けていると付け加えた。",
    bodyOriginal: `A cargo vessel was struck by a projectile while transiting the Strait of Hormuz, the U.K. Maritime Trade Operations agency said Tuesday, signaling persisting navigation risks in the waterway as Washington and Tehran harden their positions.
The attack caused damage to the engine room and resulted in a crew casualty, the maritime agency said, adding that the remaining crew were being assisted by the Omani Coast Guard.
The incident came after an Iranian military official repeated threats that the Islamic state won't back down over the Strait of Hormuz. Fox News reported Tuesday that Ebrahim Zolfaghari, Iranian military spokesperson, said vessels attempting passage through the strait will "find several beautiful holes in their hulls."
Washington and Tehran have rejected further talks after the 60-day negotiating ceasefire deal, reached in mid-June aimed at opening space for diplomatic engagement, expired on Monday without a formal follow-on agreement.
"Both sides will dig in for a longer standoff," a team of analysts at Eurasia Group said in a note Monday, as neither side sees an urgent need to make concessions.
Earlier on Monday, U.S. President Donald Trump ruled out extending the ceasefire, saying that Tehran won't accept the terms he considers necessary to end their war. "They're not going to make the kind of deal that I feel is necessary," Trump said in the Oval Office.
Iran's hardline leadership, for its part, has no intention of winding down the conflict, but instead widening the war to raise the costs for the U.S. and its regional allies, Wall Street Journal reported on Sunday, citing intelligence obtained from unnamed Iranian and Arab officials.
Eurasia Group no longer expects a peace deal by September, pushing back its timeline for de-escalation to year-end as the standoff drags on. The most likely outcome is "a limited deal" that allows Hormuz traffic to partially recover, the risk consultancy said, adding that pressure on Washington to push for an imminent reopening of the strait has eased.
Success in routing oil around the Strait of Hormuz has kept prices from spiking past $100 a barrel, while the global economy has adapted to the closure, giving the U.S. room to "afford to wait," Eurasia Group said.
The Strait of Hormuz, which handled about a fifth of the world's crude oil and gas before the war, has become the central flashpoint between the U.S. and Iran since February. Shipping remains near a standstill amid sporadic attacks on oil tankers. Just three vessels transited the Strait of Hormuz on Sunday, according to shiptracking data from Kpler.
The Bab el-Mandeb strait, where Yemen Houthis declared a naval blockade on Saudi Arabia in mid-July, also saw just 49 weekend transits by commodity vessels, according to Reuters, down from 55 in the prior week.
Iranian Foreign Minister Abbas Araghchi said in a Telegram post on Saturday that Iran's negotiations with Oman remained ongoing to determine a new maritime route in the Strait of Hormuz, while Trump on Monday threatened to bomb Oman if the Gulf state "gets in the way" of U.S. efforts to reopen the strait.
"Any recovery in Hormuz flows will be partial," said analysts at Eurasia, as the U.S. and Iran remain in a state of simmering hostilities, with heightened risks of renewed flare-up that disrupts traffic.
Oil prices climbed after the 60-day window for negotiated settlement closed without a breakthrough. U.S. crude oil futures ticked up 0.25% to $84.7 a barrel on Tuesday, after a 2.6% rise on Monday.
Brent crude, the international benchmark, was little changed on Tuesday after rising above $90 on Monday, last trading at $90.86 a barrel.`,
    bodyJa: `英国海運貿易局は火曜日、ホルムズ海峡を航行中に貨物船に飛翔体が衝突したと発表し、米国とイランが立場を強化する中、同水路での航行リスクが継続していることを示唆した。
この攻撃により機関室が損傷し、乗組員が負傷したと海事機関は発表し、残りの乗組員はオマーン沿岸警備隊の支援を受けていると付け加えた。
この事件は、イラン軍当局者がイスラム国がホルムズ海峡を越えて撤退しないと繰り返し脅迫した後に起きた。フォックスニュースは火曜日、イラン軍報道官エブラヒム・ゾルファガリ氏が、海峡を通過しようとする船舶は「船体にいくつかの美しい穴を見つけるだろう」と述べたと報じた。
外交関与の余地を広げることを目的として6月中旬に合意された60日間の交渉停戦合意が、正式な後続合意がないまま月曜日に期限切れとなったことを受け、米国とイラン政府はさらなる協議を拒否した。
ユーラシア・グループのアナリストチームは月曜のメモで、双方とも譲歩する緊急の必要性を認識していないため、「双方とも長期にわたる膠着状態に向けて粘り込むだろう」と述べた。
月曜日初め、ドナルド・トランプ米大統領は停戦延長の可能性を否定し、イランは戦争を終わらせるために必要と考える条件を受け入れないと述べた。トランプ大統領は大統領執務室で「彼らは私が必要だと思うような合意を結ぶつもりはない」と語った。
一方、イランの強硬派指導部には紛争を縮小させるつもりはなく、代わりに米国とその地域同盟国の費用を捻出するために戦争を拡大するつもりだと、ウォール・ストリート・ジャーナルが匿名のイランとアラブ当局者から得た情報を引用して日曜日に報じた。
ユーラシア・グループはもはや9月までの和平合意を期待しておらず、対立が長引く中、緊張緩和のスケジュールは年末に延期される。リスクコンサルタント会社は、最も可能性の高い結果は、ホルムズの交通量の一部回復を可能にする「限定的な合意」であると述べ、差し迫った海峡再開を求める米国への圧力は弱まったと付け加えた。
ユーラシア・グループは、ホルムズ海峡を迂回する原油輸送の成功により、価格が1バレル＝100ドルを超える高騰を抑えている一方、世界経済は閉鎖に適応しており、米国には「待つ余裕」が与えられていると述べた。
ホルムズ海峡は戦前、世界の原油とガスの約５分の１を扱っていたが、２月以降、米国とイランの間の中心的な引火点となっている。石油タンカーに対する散発的な攻撃により、輸送は依然として停止状態に近い。 Kplerの船舶追跡データによると、日曜日にホルムズ海峡を通過した船舶はわずか3隻だった。
ロイター通信によると、イエメンのフーシ派が7月中旬にサウジアラビアに対する海上封鎖を宣言したバブ・エル・マンデブ海峡でも、物資船による週末の通航は49隻にとどまり、前週の55隻から減少した。
イランのアッバス・アラグチ外務大臣は土曜日の電報で、ホルムズ海峡の新たな海上ルートを決定するためイランとオマーンの交渉は継続中であると述べたが、トランプ大統領は月曜日、湾岸諸国が米国の海峡再開への取り組みを「邪魔する」場合にはオマーンを爆撃すると脅した。
ユーラシアのアナリストらは、米国とイランの対立が依然としてくすぶる状況にあり、交通を混乱させる再燃のリスクが高まる中、「ホルムズ川の流れの回復は部分的なものになるだろう」と述べた。
60日間の交渉解決期限が打開策なく終了したことを受け、原油価格は上昇した。米国の原油先物相場は月曜日に２．６％上昇した後、火曜日には０．２５％上昇して１バレル＝８４．７ドルとなった。
国際ベンチマークであるブレント原油は、月曜日に90ドルを超えて上昇した後、火曜日もほとんど変化せず、最終取引価格は1バレル当たり90.86ドルであった。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/18/us-iran-war-trump-hormuz-trump-ceasefire-expires-extension-.html",
    publishedAt: "2026-08-18T04:34:22+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "us-canada-trade-talks-intense-as-new-tar-acc51424",
    title: "US-Canada trade talks 'intense' as new tariff deadline looms",
    titleJa: "新たな関税期限が迫る中、米国とカナダの通商交渉は「激化」",
    summaryJa: "交渉担当者がトランプ大統領の最新の関税を回避するために合意に達しようと躍起になる中、マーク・カーニー首相は米国に対するあらゆる譲歩をカナダ人に売り込む必要があるだろう。",
    bodyOriginal: `US-Canada trade talks 'intense' as new tariff deadline looms
- Published
"Intense" trade talks are going down to the wire as Canada seeks to avoid a fresh round of tariffs from the Trump administration due to come into effect in less than 48 hours.
Canadian negotiators have been camped out in Washington for a week, trying to pin down some agreement before new 50% tariffs on some $20bn (C$28bn) worth of Canadian imports come into effect on Wednesday.
Prime Minister Mark Carney kept details of the talks close to his chest when pressed by reporters on Monday, saying that given the "very delicate and intense" negotiations, it is "not the time to negotiate in public".
While he said Canada was negotiating from "a position of strength", the stakes are high for the prime minister and his team to reach a deal before the Trump administration's latest financial squeeze, on about 5% of all Canadian imports, takes hold.
Despite a flurry of meetings between Canadian negotiators and US Trade Representative Jamieson Greer in recent days, the two sides have yet to reach a final agreement.
"Our job is not yet done," US-Canada Trade Minister Dominic LeBlanc said on Monday as he left Greer's office.
Both sides have been clear the talks have been tough. Trump has described Canada as "nasty" on trade - a characterisation of negotiations that Carney did not entirely dispute., external
He has also warned that "the time to get tougher" will be if the countries fail to reach a deal.
Even if one is reached, Carney will need to sell any concessions made to a public frustrated with - and skeptical of - the administration south of the border.
He will also need the buy-in from the provinces on any compromises.
The US has been asking for a number of concessions from Canada, including removing its remaining retaliatory tariffs on American autos and adjusting its dairy quotas.
It has also asked for the ban on US alcohol sales, imposed early last year by most Canadian provinces in retaliation for Trump's tariffs, be removed.
That concession would depend on the agreement of the provinces, which are in control of the alcohol in their respective jurisdictions.
Ontario Premier Doug Ford, who makes a point of being tough on the US, said last week that an agreement on booze is conditional.
Canada has been in pursuit of a deal that would see the US drop or reduce tariffs on its steel, aluminium, automobile and lumber sectors, all of which have been damaging to the country's economy.
"If we get a fair deal that will protect our steel sector, our auto sector, our forestry sector, our agriculture sector, our manufacturing sector, then we'd be happy to bring booze back on the shelves," Ford said.
Carney could also face pushback on any concessions on dairy, especially in Quebec, where the premier, Christine Fréchette, has said supply management is non-negotiable.
Trump argues the system, which has production quotas, set pricing, and import quotas on dairy, eggs, and poultry, is "unreasonable" to American farmers who want to sell their products north of the border.
Canadians are also not in the mood to offer many concessions to the US, even as they want more stability.
A new poll from Abacus Data indicates that 74% feel the trade dispute has had an impact on their household, and 36% want to see Canada respond with new counter-tariffs, even if it risks more domestic economic pain.
Just 18% favour concessions like ending provincial bans on American alcohol, in order to remove or reduce US tariffs.
Reports in Canadian media also suggested that Canada's chief negotiator, Janice Charette, warned her US counterparts, external that the new tariffs could put further trade negotiations at risk if they are enacted on Wednesday.
Carney has said he would not sign a deal unless it's a good one for Canada, though he has not been clear on what such a deal would look like.
On Monday, he only said: "We'll have opportunities over the next 48 hours to discuss in more detail as the negotiations go forward."
He said he planned to speak with Trump before the Wednesday deadline.
He also said that he has "plans for any situation that may arise" should the talks fail.
Conservative trade critic Shuvaloy Majumdar said in a statement that it's time for "a measure of relief" from economic anxiety.
"We have grown tired of seeing our country used as a punching bag," he said.
"Yet we share a common hope that Prime Minister Carney will deliver a genuine win at the negotiating table."`,
    bodyJa: `新たな関税期限が迫る中、米国とカナダの通商交渉は「激化」
- 公開されました
カナダが48時間以内に発効予定のトランプ政権による新たな追加関税を回避しようとする中、「激しい」通商交渉が難航している。
カナダの交渉担当者らは、約200億ドル（280億カナダドル）相当のカナダからの輸入品に対する新たな50％関税が水曜日に発効する前に、何らかの合意を確定させようと、1週間にわたりワシントンでキャンプを張っている。
マーク・カーニー首相は月曜日、記者団の取材に対し交渉の詳細は胸に秘め、「非常にデリケートかつ激しい」交渉を考慮すると「公の場で交渉する時期ではない」と述べた。
同氏は、カナダは「強い立場」で交渉していると述べたが、カナダ全輸入品の約5％を対象とするトランプ政権による最近の財政圧迫が本格化する前に、首相とそのチームが合意に達するかどうかは賭けが大きい。
ここ数日、カナダの交渉担当者とジェイミソン・グリア米通商代表部との間で相次ぎ会談が行われたにもかかわらず、両国はまだ最終合意に至っていない。
米国・カナダ貿易相のドミニク・ルブラン氏は月曜日、グリア氏の執務室を去り際に「我々の仕事はまだ終わっていない」と述べた。
双方とも交渉が難航していたことは明らかだ。トランプ大統領はカナダを貿易に関して「意地悪」と表現したが、これについてカーニー長官は全面的に異議を唱えなかった。
同氏はまた、各国が合意に達しなかった場合には「より厳しくなる時が来る」と警告した。
たとえ合意に達したとしても、カーニー氏は国境以南の政権に不満を抱き、懐疑的な国民に譲歩を売り込む必要があるだろう。
また、いかなる妥協についても州からの同意が必要となるだろう。
米国はカナダに対し、米国製自動車に対する残りの報復関税の撤廃や乳製品割り当ての調整など、多くの譲歩を求めている。
また、トランプ大統領の関税への報復としてカナダのほとんどの州が昨年初めに課した米国でのアルコール販売禁止措置の解除も求めた。
その譲歩は、それぞれの管轄区域でアルコールを管理している州の合意に依存することになる。
米国に対して厳しい姿勢を貫くオンタリオ州のダグ・フォード首相は先週、酒類に関する協定には条件があると述べた。
カナダは米国が自国経済に悪影響を及ぼしている鉄鋼、アルミニウム、自動車、木材部門に対する関税を引き下げまたは引き下げる合意を求めている。
フォードは「鉄鋼セクター、自動車セクター、林業セクター、農業セクター、製造セクターを守る公正な合意が得られれば、喜んで酒類を店頭に戻すだろう」と語った。
カーニー首相は乳製品分野でのいかなる譲歩にも反発に直面する可能性があり、特にケベック州では供給管理は交渉の余地がないと首相のクリスティーヌ・フレシェット氏が述べている。
トランプ大統領は、この制度は乳製品、卵、家禽肉の生産割当、価格設定、輸入割当を定めており、国境以北で農産物を販売したい米国の農家にとって「不合理」だと主張。
カナダ人も、さらなる安定を望んでいるとはいえ、米国に多くの譲歩をする気にはなっていない。
アバカス・データの最新世論調査によると、74％が貿易紛争が家計に影響を与えていると感じており、36％が国内経済にさらなる打撃を与えるリスクがあるとしても、カナダが新たな対抗関税で対応することを望んでいる。
米国の関税を撤廃または削減するために、州による米国産アルコールの禁止令を廃止するなどの譲歩を支持する人はわずか18％だった。
カナダメディアの報道によると、カナダの首席交渉官ジャニス・シャレット氏は、水曜日に新たな関税が発動されればさらなる通商交渉が危険にさらされる可能性があると対外的に米国の交渉相手に警告したという。
カーニー首相は、カナダにとって良い協定でない限り協定には署名しないと述べているが、そのような協定がどのようなものになるかについては明確になっていない。
同氏は月曜日には「交渉が進むにつれて、今後48時間にわたってより詳細に話し合う機会がある」とだけ述べた。
同氏は水曜日の期限までにトランプ大統領と会談する予定だと述べた。
同氏はまた、協議が決裂した場合に「起こり得るあらゆる状況に備える計画」があるとも述べた。
保守派通商評論家のシュヴァロイ・マジュムダル氏は声明で、経済不安から「ある程度の救済」をすべき時期が来たと述べた。
「我が国がサンドバッグとして利用されるのを見るのにはもう飽き飽きしている」と彼は語った。
「しかし我々は、カーニー首相が交渉の場で真の勝利をもたらすという共通の希望を共有している。」`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/crl7600rpnko?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-18T00:02:31+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/1962/live/397b2430-9a87-11f1-b792-a710e56a11dc.jpg",
    readTime: 5,
  },
  {
    id: "lakers-governor-jeanie-buss-says-sibling-e12b1644",
    title: "Lakers governor Jeanie Buss says siblings cannot sell family’s stake to Bob Iger, Joshua Kushner",
    titleJa: "レイカーズのジーニー・バス知事は、兄弟姉妹が家族の株式をボブ・アイガーやジョシュア・クシュナーに売却することはできないと述べた",
    summaryJa: "ロサンゼルス・レイカーズのジーニー・バス知事は、家族がNBAチームの株式を売却する可能性に反対しており、ボブ・アイガーとジョシュア・クシュナーへの家族の売却決定に関するESPNの以前の報道と矛盾している。CNBCが入手したジーニー・バスの兄弟（ジム、ジョニー、ジャニー、ジョーイ、ジェシー）を代理する法律事務所に宛てた書簡の中で、彼女の弁護士アダム・ストライサンド氏は、ジーニー・バスはチーム売却に同意しておらず、バス一家が売却することを示唆する投票は「無効となるだろうし、無効である」と述べた。",
    bodyOriginal: `Los Angeles Lakers governor Jeanie Buss is opposing the potential sale of her family's stake in the NBA team, contradicting an earlier ESPN report about the family's decision to sell to Bob Iger and Joshua Kushner.
In a letter obtained by CNBC addressed to law firms representing Jeanie Buss's siblings — Jim, Johnny, Janie, Joey and Jesse — her lawyer Adam Streisand says Jeanie Buss has not agreed to sell the team and that any vote suggesting the Buss family is selling "would be and is void."
Streisand argues in the letter that Jeanie Buss remains the controlling shareholder of the Lakers, pursuant to a 2017 court order, and that no sale can take place without her consent.
"No sale of the JAB Trust's 17.8% ownership interest in the Los Angeles Lakers, Inc. can be effectuated without approval by the current co-trustees, i.e., Jeanie, Janie and Joey Buss. Pursuant to the JAB Trust and the attached Court Order, the co-trustees are bound to vote the Los Angeles Lakers, Inc. shares to ensure that the minimum 15% ownership requirement is maintained in order to ensure that Jeanie Buss may remain Controlling Owner," Streisand says in the letter.
"Any attempt by the co-trustees to do otherwise, and any attempt to aid or abet the co-trustees as such, would constitute a breach of trust, breach of fiduciary duty and be in contempt of court," he says.
Last week, Iger and Kushner agreed to buy Mark Walter's majority stake in the Lakers. That deal valued the team at $12.5 billion, CNBC reported at the time. The Buss family stake would have meant an overall team ownership share of approximately 83% for the former Disney CEO and Thrive Capital founder, ESPN reported.
But Jeanie Buss doesn't want to sell the family's stake in the team at this time, according to a person familiar with the matter, who spoke on the condition of anonymity about confidential matters. She wants to hold onto the team stake for value reasons as well as to maintain her role as governor, the person said.
Read the full letter from Jeanie Buss's attorney:
This story is developing. Please check back for updates.
Correction: A previous headline on this article misidentified one of the potential buyers of the Buss family stake in the Los Angeles Lakers.`,
    bodyJa: `ロサンゼルス・レイカーズのジーニー・バス知事は、家族がNBAチームの株式を売却する可能性に反対しており、ボブ・アイガーとジョシュア・クシュナーへの家族の売却決定に関するESPNの以前の報道と矛盾している。
CNBCが入手したジーニー・バスの兄弟（ジム、ジョニー、ジャニー、ジョーイ、ジェシー）を代理する法律事務所に宛てた書簡の中で、彼女の弁護士アダム・ストライサンド氏は、ジーニー・バスはチーム売却に同意しておらず、バス一家が売却することを示唆する投票は「無効となるだろうし、無効である」と述べた。
ストライサンド氏は書簡の中で、2017年の裁判所命令に従い、ジーニー・バス氏が引き続きレイカーズの支配株主であり、彼女の同意なしに売却はできないと主張している。
「JABトラストのロサンゼルス・レイカーズ・インクに対する17.8％の所有権の売却は、現在の共同受託者、すなわちジーニー・バス、ジャニー・バス、ジョーイ・バスの承認なしには実現できない。JABトラストおよび添付の裁判所命令に従い、共同受託者はジーニー・バスが確実に残るために最低15％の所有権要件が維持されることを保証するためにロサンゼルス・レイカーズ・インクの投票を行う義務がある。支配的な所有者だ」とストライサンド氏は書簡の中で述べている。
「共同受託者がそれ以外のことをしようとしたり、共同受託者を幇助したり教唆しようとしたりする試みは、背任、受託者義務違反となり、法廷侮辱罪となる」と同氏は言う。
アイガー氏とクシュナー氏は先週、マーク・ウォルター氏のレイカーズの過半数株を購入することで合意した。当時CNBCは、この契約によりチームの価値は125億ドルになったと報じた。 ESPNの報道によると、バス家の株式は、ディズニーの元CEOでスライブ・キャピタルの創設者にとって、チーム全体の所有権の割合が約83％になることを意味していたという。
しかし、機密事項について匿名を条件に語った関係者によると、ジーニー・バス氏は現時点で家族のチーム株を売却するつもりはないという。同関係者によると、彼女は知事としての役割を維持するだけでなく、価値上の理由からチームの株式を保持したいと考えているという。
ジーニー・バスの弁護士からの手紙全文をお読みください。
この物語は発展中です。最新情報を再度ご確認ください。
訂正: この記事の前の見出しでは、ロサンゼルス・レイカーズのバス家の株式の潜在的な買い手の一人を誤って特定していました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/17/jeanie-buss-opposes-sale-family-stake.html",
    publishedAt: "2026-08-17T23:47:54+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "absolutely-crazy-here-s-what-south-kore-f02fd1ee",
    title: "'Absolutely crazy': Here's what South Korean stock investors are doing in U.S. markets",
    titleJa: "「絶対にクレイジー」：韓国の株式投資家が米国市場で何をしているのか",
    summaryJa: "世界の投資家が押し寄せる中でも、国内の調整を避けるために韓国の投資家の波が米国市場に殺到している。韓国取引所のデータによると、ベンチマーク指数が強気相場の領域に入ったにもかかわらず、韓国の個人投資家は先週の大半で国内株を売り越した。海外投資家は一転して買い越しとなった。",
    bodyOriginal: `A wave of South Korean investors is flocking to U.S. markets to avoid a correction at home, even as global investors pile in.
Korean retail investors net sold domestic stocks for most of last week, even as the benchmark index entered bull market territory, according to Korea Exchange data. Overseas investors reversed course to become net buyers.
Here are five things related to those investors:
Buying ADRs
Of the $4.5 billion in U.S. stocks Korean investors net bought in July, around $840 million went into the chipmaker's U.S.-listed depositary receipts, according to Korea Securities Depository data. SK Hynix's ADRs were the second most net-purchased U.S. securities, even though Korean investors can buy the same company directly at home.
The U.S. receipts have traded at a premium to the Korean shares, which Owen Lamont, senior vice president of Acadian Asset Management, said was about 10% recently. They're also exhibiting greater volatility.
"That's absolutely crazy," Lamont said of Korean investors buying SK Hynix's U.S.-listed shares. "There's no reason for a Korean investor to buy ADRs of Korean stocks in the U.S."
Such price discrepancies are unusual and can be a warning sign of speculative excess, Lamont said. "They're a symptom of the bubble," he said, pointing to similar dislocations involving Taiwanese and Indian companies around the dot-com boom.
Leveraged bets
One of the 10 most popular U.S. stocks among investors this month was a leveraged product -- ProShares Ultra QQQ ETF -- which ranked No. 7.
In July, four of the 10 most net purchased U.S. stocks were leveraged products, according to data from Korea Securities Depository.
The most popular was the Direxion Daily Semiconductor Bull 3X Shares ETF, or SOXL, which aims to deliver three times the daily performance of a semiconductor index, data show. The leveraged ProShares UltraPro QQQ and ProShares Ultra QQQ ranked fourth and sixth.
Same strategy
Investors may be changing markets without necessarily changing the bet.
"The irony is that if you parse the data and look at what they're buying, it's largely shares tied up in the same AI hardware theme that's been selling off in the local market," Phillip Wool, head of research at Rayliant Global Advisors, said.
Jung In Yun, founder of Fibonacci Asset Management, said some traders hurt by losses in Korean semiconductor shares or leveraged ETFs may be shifting to U.S. AI stocks they perceive as higher-quality or more liquid.
"They are not necessarily reducing their exposure to the AI theme," Yun said. "They may simply be changing the geographical vehicle through which they express the same view."
Reversal from July
Korean retail investors net bought around $4.5 billion in U.S. stocks last month, according to Korea Securities Depository data. That was a sharp pickup from June and near the net purchases of $5 billion in January.
At the same time, the country's shares saw a massive selloff, following a spectacular rally that drew retail investors into semiconductor stocks and leveraged products, before staging a rebound this month.
Margin loan balances in the Korean stock market stood at about 37 trillion won ($26 billion) at the end of June, before tumbling to 27 trillion won earlier this month, the lowest level this year, according to the Korea Financial Investment Association.
While July's purchases were "strong" but not unprecedented, Lamont said, "it is still pretty interesting that they increased their U.S. buying even as the Korean market was plunging," he added.
Effect on market
Whether the influx of Korean money can meaningfully increase volatility across the much larger U.S. market is another question.
Wool sees little risk of that. While retail investors can have an outsized influence in Korea, U.S. markets are dominated by professional and institutional investors, making even large Korean flows small relative to overall turnover.
Lamont sees greater potential for distortions in individual names and corners of the market favored by retail traders. He pointed to Korean investors' rush into U.S. "quantum" stocks in late 2024, and said the proliferation of leveraged ETFs across Korea, Hong Kong and the U.S. is "possibly adding volatility and magnifying market fluctuations."`,
    bodyJa: `世界の投資家が押し寄せる中でも、国内の調整を避けるために韓国の投資家の波が米国市場に殺到している。
韓国取引所のデータによると、ベンチマーク指数が強気相場の領域に入ったにもかかわらず、韓国の個人投資家は先週の大半で国内株を売り越した。海外投資家は一転して買い越しとなった。
これらの投資家に関連する 5 つの事柄は次のとおりです。
ADRの購入
韓国証券保管振替庁のデータによると、韓国の投資家が7月に買い越しした米国株45億ドルのうち、約8億4000万ドルがこの半導体メーカーの米国上場預託証券に入金された。韓国の投資家は同じ会社を国内で直接買うことができるにもかかわらず、SKハイニックスのADRは米国証券で2番目に多く買い越された銘柄となった。
米国の受領金は韓国株に比べて割高に取引されており、アカディアン・アセット・マネジメントの上級副社長オーウェン・ラモント氏によると、最近の株高は約１０％だという。また、ボラティリティも大きくなっています。
ラモント氏は韓国投資家がSKハイニックスの米国上場株を購入していることについて「まったくクレイジーだ」と述べた。 「韓国の投資家が米国で韓国株のADRを買う理由はない」
ラモント氏は、このような価格差は異例であり、投機過剰の警告サインである可能性があると述べた。同氏は、ドットコムブームの周囲で台湾やインドの企業が巻き込まれた同様の混乱を指摘し、「それらはバブルの症状だ」と述べた。
レバレッジをかけた賭け
今月、投資家の間で最も人気のある米国株トップ１０の１つは、レバレッジ商品であるプロシェアーズ・ウルトラＱＱＱＥＴＦで、７位にランクインした。
韓国証券保管振替庁のデータによると、7月に最も多く買い越された米国株10銘柄のうち4銘柄がレバレッジ商品だった。
データによると、最も人気があったのはディレクシオン・デイリー・セミコンダクター・ブル3X株ETF（SOXL）で、半導体指数の1日あたりのパフォーマンスを3倍にすることを目指している。レバレッジを活用した ProShares UltraPro QQQ と ProShares Ultra QQQ は 4 位と 6 位にランクされました。
同じ戦略
投資家は必ずしも賭け金を変更せずに市場を変更する可能性があります。
レイリアント・グローバル・アドバイザーズの調査責任者フィリップ・ウール氏は、「皮肉なことに、データを解析して彼らが何を買っているかを見ると、主に同じAIハードウェアのテーマに関連した株が地元市場で売られていることが分かる」と述べた。
フィボナッチ・アセット・マネジメントの創設者チョン・インユン氏は、韓国の半導体株やレバレッジETFの損失で傷ついた一部のトレーダーが、より質が高く流動性が高いと判断した米国のAI株にシフトしている可能性があると述べた。
「彼らは必ずしもAIというテーマへの接触を減らしているわけではない」とユン氏は語った。 「彼らは単に、同じ見解を表現する地理的手段を変えているだけかもしれない。」
7月から反転
韓国証券保管振替庁のデータによると、韓国の個人投資家は先月米国株を約45億ドル買い越した。これは6月から急激に増加し、1月の純購入額50億ドルに近かった。
同時に、同国の株価は、個人投資家を半導体株やレバレッジ製品に引き寄せた目覚ましい上昇を受けて大幅に下落したが、今月反発を見せた。
韓国金融投資協会によると、韓国株式市場の信用貸付残高は６月末時点で約３７兆ウォン（２６０億ドル）だったが、今月初めには今年最低水準の２７兆ウォンにまで落ち込んだ。
ラモント氏は、7月の購入額は「強かった」ものの前例がないわけではないとし、「韓国市場が急落しているにもかかわらず、米国での購入額が増加したことは依然として非常に興味深い」と付け加えた。
市場への影響
韓国マネーの流入が、はるかに規模の大きい米国市場全体のボラティリティーを有意に高めることができるかどうかは別の問題だ。
ウールではそのリスクはほとんどないと考えています。韓国では個人投資家が大きな影響力を持つ可能性があるが、米国市場はプロと機関投資家が大半を占めており、韓国からの大きな資金流入であっても全体の出来高に比べれば小さい。
ラモント氏は、小売トレーダーが好む市場の個人名やコーナーが歪められる可能性がさらに高まると見ている。同氏は、2024年後半に韓国の投資家が米国の「クオンタム」株に殺到していることを指摘し、韓国、香港、米国におけるレバレッジETFの普及が「ボラティリティを高め、市場変動を拡大させている可能性がある」と述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/18/korean-stock-investors-flee-bruising-home-market-pile-into-us.html",
    publishedAt: "2026-08-17T23:39:54+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "to-joke-or-not-to-joke-how-to-write-a-go-c1175a03",
    title: "To joke or not to joke?: How to write a good out-of-office message",
    titleJa: "冗談を言うべきか、冗談を言わないべきか?: 優れた社外メッセージの書き方",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `To joke or not to joke?: How to write a good out-of-office message
- Published
You're finally about to head off on a well-earned break, but there's one more task to tick off your to-do list: composing an out-of-office reply.
Many will be all too familiar with debating how much information to include and how available you will be - and whether to inject some personality into your message, or even risk cracking a joke.
Experts say there are clear dos and don'ts when it comes to writing an out-of-office message (OOO) - and getting it wrong can have more serious consequences than you might think. Here are their rules to penning the perfect out-of-office reply.
'Avoid oversharing or boasting'
Debretts, an etiquette consultancy, says a good automatic reply should be polite and concise, give a specific return date, and provide another point of contact if appropriate.
But you should avoid oversharing, for instance including the specifics of your holiday plans, or boasting about things like second homes or expensive hobbies.
"Virtue signalling" about why you are taking time off is another no-no. It could seem "smug" or like you are "trying too hard", says director Rupert Wesson.
"Some people will be delighted you are spending 'quality time with your family', but given that they are the ones emailing you and are hard at work, you could risk rubbing their noses in it."
That said, a bare message that simply states, "I'm out of office" with no details of a return date or alternative emails to try, can raise more questions than it answers.
The danger of 'under-communication'
"People don't know when to expect a reply or who else can help, and that uncertainty is what leads to the 'just-in-case' follow-ups," says Charlotte Davies, a career expert at Linkedin.
She believes a good OOO does two things: shares your dates and points people to a backup contact.
She also thinks it's worth briefing the person covering you about anything important before you go: "It helps whoever's emailing you, and it protects your break too."
Should you crack jokes?
While the personal touch may work in OOOs if your team culture is informal, beware that humour doesn't always land well over email.
Overly glib or sarcastic messages can get you into trouble, even if they are funny, reckons Paul Fitzsimmons, head of sales and marketing at law firm Wilford Smith.
"'I'm currently out of the office pretending this company doesn't exist'... 'If it's urgent, call someone who cares'... 'Emails received while I'm away will be deleted unread,'" he gives as examples.
Adam Murfet, 41, a senior sales executive, says a former colleague lost a deal after a joke in an OOO angered a client.
But he thinks humour can help some people stand out at a time when communication is increasingly AI-driven.
"Always ask, would you put the same thing in an email?" he says, as a rule of thumb.
"Anything you send will be read and people will judge you on it."
'I won't be checking emails'
Commentators often complain about the sender saying they will have "limited access to email" while they are away.
The risk is it invites people to keep contacting you as if you were still at work.
Wesson says that if you really need to check emails on holiday, then it's better to say, "I will be periodically checking emails," as it manages expectations.
Davies adds that if you want a proper break, "say so clearly - something like 'I won't be checking emails during this time'."
"Remember, in the UK you have a legal right to uninterrupted annual leave unless your contract says otherwise."
Tips on writing a good out-of-office reply
1. Be polite: Don't just launch in with "I'm on annual leave". Preface your message with a greeting, such as "Thank you for your email".
2. Give a specific return date and back-up contact if appropriate. Ensure all the contact details are correct
4. Be clear about your availability: Manage expectations and if you would prefer not to be contacted, say so
5. Don't promise instant replies on your return: A backlog is completely normal, so "within a few days" is a better promise to make
6. Tick both internal and external contacts if you use Outlook. It's an easy one to miss
7. Switch off your out of office when you return: A stale OOO can look disorganised.
Sources: Debretts, Linkedin`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c934xy32919o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-17T23:00:41+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/2af9/live/1948b440-9a12-11f1-a05c-fdd5e0ed226e.jpg",
    readTime: 2,
  },
  {
    id: "l3harris-ousts-ceo-chris-kubasik-over-un-abbcb12c",
    title: "L3Harris ousts CEO Chris Kubasik over unspecified 'conduct,' stock drops 4%",
    titleJa: "L3ハリス、不特定の「行為」を理由に最高経営責任者（CEO）クリス・クバシク氏を解任、株価は4％下落",
    summaryJa: "防衛請負大手L3ハリス・テクノロジーズは、クリス・クバシク最高経営責任者（CEO）が「会社の価値観と一致しないある行為」を行っていたことを知り、日曜日に同氏を解任したと同社は月曜日の声明文で述べた。L3ハリスの取締役会はサム・メータをCEO兼社長に任命したと同社は発表した。メータ氏は最近、同社の宇宙・ミッションシステム部門と通信・スペクトル・ドミナンス部門の社長を務めていた。",
    bodyOriginal: `Defense contracting giant L3Harris Technologies ousted CEO Chris Kubasik on Sunday after learning he engaged in "certain conduct ... that was not consistent with the values of the Company," the company said in a statement on Monday.
L3Harris's board appointed Sam Mehta as CEO and president, the company said. Mehta most recently was the company's president of the Space & Mission Systems and Communications & Spectrum Dominance segments.
Shares of L3Harris fell by more than 4% on the heels of the news of Kubasik's ouster, which "was unrelated to the Company's financial reporting, controls, customer relationships or operational performance," the company's statement said.
"Following its investigation of these matters with the assistance of independent counsel, the Board determined that it would be in the best interests of the Company to enter into a separation agreement with Kubasik," the statement said.
Kubasik's ouster comes seven months after the Defense Department committed to a $1 billion convertible preferred equity investment in L3Harris' missile solutions business, which will become a separate company as part of the deal. An initial public offering for the missile business has been postponed from the latter half of 2026 until mid-2027.
L3Harris was responsible for modifying a 747 jumbo jet controversially gifted by Qatar to the United States to serve as a new Air Force One for President Donald Trump.
Kubasik, 65, in addition to being CEO, had been L3Harris' chairman of the board. He had been CEO since 2021. L3Harris on Monday said that Lewis Hay III, the company's lead independent director, was named independent chairman of the board.
CNBC has reached out to Kubasik for comment.
The news outlet Semafor, citing two people briefed on the investigation, reported that Kubasik was ousted "after an independent probe found he had engaged in an inappropriate relationship with an employee."
CNBC has asked L3Harris whether that report is accurate.
In 2012, the board of the major defense contractor Lockheed Martin asked for and received Kubasik's resignation as president and chief operating officer, weeks before he was scheduled to become CEO, after "an ethics investigation confirmed that he had a close personal relationship with a subordinate employee," Lockheed said in a statement at the time.
In a filing with the Securities and Exchange Commission that details Kubasik's separation agreement, L3Harris said that Kubasik "does not admit, and expressly disclaims, any violation of Company policy or basis for termination for 'cause,' but has determined to resolve all matters relating to the Executive's separation from employment on the terms set forth in this Agreement."
Under the separation agreement, Kubasik will not receive any bonus under the company's 2026 incentive plan but will keep nearly 384,000 stock options.
Kubasik and his wife, Jane Kubasik, are longtime supporters of the athletics program at their alma mater, the University of Maryland. The Kubasik First Impact Program helps a select cohort of Maryland student-athletes each academic year prepare for life beyond their sport.
Hay, in a statement about Mehta's elevation to CEO, said, "Sam is a proven executive who brings deep knowledge of our business, priorities and culture, making him ideally suited to become President and CEO of L3Harris at this important time in our company's and our nation's history."
"Sam's readiness to lead L3Harris reflects the Board's robust succession planning and our focus on cultivating talent," Hay said.
Mehta, in a statement, said, "I am honored by the opportunity to serve as President and CEO of
L3Harris. I look forward to working even more closely with my fellow senior leaders and my talented colleagues across the Company to support the needs of our country and our allies."
"Today, L3Harris has a portfolio purpose-built for the future of warfare, and we are well-positioned to continue executing our focused growth strategy as The Trusted Disruptor," he said.`,
    bodyJa: `防衛請負大手L3ハリス・テクノロジーズは、クリス・クバシク最高経営責任者（CEO）が「会社の価値観と一致しないある行為」を行っていたことを知り、日曜日に同氏を解任したと同社は月曜日の声明文で述べた。
L3ハリスの取締役会はサム・メータをCEO兼社長に任命したと同社は発表した。メータ氏は最近、同社の宇宙・ミッションシステム部門と通信・スペクトル・ドミナンス部門の社長を務めていた。
同社の声明によると、クバシク氏解任のニュースを受けてＬ３ハリスの株価は４％以上下落したが、この解任は「当社の財務報告、管理、顧客関係、経営成績とは無関係だった」という。
「独立した弁護士の支援を受けてこれらの問題を調査した結果、取締役会はクバシク氏と分離契約を結ぶことが当社にとって最大の利益になると判断した」と声明で述べた。
クバシク氏の解任は、国防総省がL3ハリスのミサイルソリューション事業に10億ドルの転換型優先株投資を約束してから7カ月後に行われたが、この取引の一環として同事業は別会社となる。ミサイル事業の新規株式公開（ＩＰＯ）は２０２６年後半から２０２７年半ばに延期された。
L3ハリスは、ドナルド・トランプ大統領の新しいエアフォース・ワンとして使用するために、カタールから米国に贈られた物議を醸した747ジャンボジェット機の改造を担当した。
65歳のクバシク氏はCEOであることに加えて、L3ハリスの取締役会会長も務めていた。同氏は2021年からCEOを務めていた。L3ハリス氏は月曜日、同社の首席独立取締役であるルイス・ヘイ3世が独立取締役会長に任命されたと発表した。
CNBCはクバシク氏にコメントを求めた。
報道機関セマフォーは、捜査について説明を受けた２人の関係者の話として、クバシク氏が「独立した調査で従業員と不適切な関係にあったことが判明したため」解任されたと報じた。
CNBCはL3Harrisにその報道が正確かどうか尋ねた。
2012年、大手防衛請負業者ロッキード・マーティンの取締役会は、クバシク氏がCEOに就任する予定の数週間前に、「倫理調査の結果、部下の従業員と親密な個人的関係があったことが確認された」として、クバシク氏の社長兼最高執行責任者としての辞任を要請し、受け入れられたと当時の声明文で述べた。
クバシク氏の離職合意の詳細を記載した証券取引委員会への提出書類の中で、L3ハリス氏は、クバシク氏が「会社方針への違反や『理由』による解雇の根拠を認めず、明示的に否認するが、幹部の離職に関するすべての問題を本契約に定められた条件で解決することを決意した」と述べた。
分離合意に基づき、クバシク氏は同社の2026年のインセンティブプランに基づくボーナスは受け取らないが、約38万4,000株のストックオプションを保有することになる。
クバシクと妻のジェーン・クバシクは、母校であるメリーランド大学の陸上競技プログラムを長年サポートしています。クバシック ファースト インパクト プログラムは、毎年メリーランド州の選ばれた学生アスリートがスポーツ以外の人生に備えるのを支援します。
ヘイ氏はメータ氏のCEO昇格に関する声明で、「サム氏は当社の事業、優先事項、文化について深い知識をもたらしてくれる実績ある経営幹部であり、当社と我が国の歴史におけるこの重要な時期にL3ハリスの社長兼最高経営責任者（CEO）に就任するのに理想的な人物である」と述べた。
「サムがL3ハリスを率いる準備ができているのは、取締役会の強力な後継者計画と人材育成への当社の注力を反映している」とヘイ氏は述べた。
メータ氏は声明で「当社の社長兼最高経営責任者（CEO）を務める機会を光栄に思う」と述べた。
L3ハリス。私たちの国と同盟国のニーズをサポートするために、会社全体の上級リーダーや才能ある同僚とさらに緊密に協力することを楽しみにしています。」
「現在、L3ハリスは将来の戦争のために構築されたポートフォリオを持っており、信頼できる破壊者として焦点を当てた成長戦略を実行し続ける有利な立場にあります」と同氏は述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/17/l3harris-ceo-chris-kubasik-lhx-defense-mehta.html",
    publishedAt: "2026-08-17T22:52:11+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    readTime: 4,
  },
  {
    id: "why-this-popular-treasury-bond-etf-is-tr-9eebfe24",
    title: "Why this popular Treasury-bond ETF is trading at its lowest since 2004",
    titleJa: "この人気の国債ETFが2004年以来の安値で取引されている理由",
    summaryJa: "米国債市場で最も取引量の多いETFの一つが、過去20年以上で最低水準に落ち込んだばかりだ。",
    bodyOriginal: `One of the most heavily-traded ETFs tracking performance in the U.S. Treasury market has just fallen to its lowest level in over 20 years.`,
    bodyJa: `米国債市場で最も取引量の多いETFの一つが、過去20年以上で最低水準に落ち込んだばかりだ。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/why-this-popular-treasury-bond-etf-is-trading-at-its-lowest-since-2004-27de9a77?mod=mw_rss_topstories",
    publishedAt: "2026-08-17T22:33:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-17927995",
    readTime: 2,
  },
  {
    id: "the-number-of-negative-beta-stocks-in-th-fb203faa",
    title: "The number of ‘negative-beta’ stocks in the S&P 500 just hit a new record high. What that means for investors.",
    titleJa: "S&P 500 の「ネガティブベータ」銘柄の数は、過去最高を記録しました。それが投資家にとって何を意味するのか。",
    summaryJa: "AI 弱気派を興奮させるもう 1 つの事実は次のとおりです。S&P 500 の株価は、特定の日に逆方向に取引されることが増えています。これは、指数のパフォーマンスよりもボラティリティが高いと信じられることを意味します。",
    bodyOriginal: `Here’s another factoid that should get the AI bears excited: Stocks in the S&amp;P 500 are increasingly trading in opposite directions on a given day. That means higher volatility than the performance of the index would lead one to believe.`,
    bodyJa: `AI 弱気派を興奮させるもう 1 つの事実は次のとおりです。S&P 500 の株価は、特定の日に逆方向に取引されることが増えています。これは、指数のパフォーマンスよりもボラティリティが高いと信じられることを意味します。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/the-number-of-negative-beta-stocks-in-the-s-p-500-just-hit-a-new-record-high-what-that-means-for-investors-992ca307?mod=mw_rss_topstories",
    publishedAt: "2026-08-17T21:15:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-12639396",
    readTime: 2,
  },
  {
    id: "fifa-official-sacked-after-infantino-pla-7811bdc1",
    title: "Fifa official sacked after Infantino plan criticism",
    titleJa: "インファンティーノのプラン批判を受けてFIFA関係者が解任",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Fifa official sacked after Infantino plan criticism
- Published
Fifa's chief operating officer Kevin Lamour has been sacked by the governing body, less than three weeks after he strongly criticised its president Gianni Infantino's aborted plan to sell stakes in competitions to private investors, BBC Sport has been told.
In a statement, a Fifa spokesperson would only confirm that "the working relationship between Fifa and Kevin Lamour as Chief Operating Officer has ended on 17 August 2026.
"Fifa thanks Kevin for his two years of service and wishes him the best of luck for the future."
Fifa's staff were informed of the news in an email by its secretary general Mattias Grafstrom on Monday evening, who told them the organisation and Lamour had "agreed to part ways".
Last month, Lamour described the controversial Fifa Forward Enterprise (FFE) plans as "the project of one person", and said "the time has now come for football political leaders to ask themselves the right questions and make the right decisions".
He added Fifa's own administration was "deceived" about the now abandoned project.
"Our mission - the mission of the hundreds of passionate, dedicated, and exemplary Fifa employees - is to serve football", he added.
"A president must bring people together, unite them, and inspire them. Today, we are experiencing the opposite."
Lamour acknowledged he had a duty of loyalty to his employer but also to "certain values" and supporting his colleagues.
"If that means I lose my job, then so be it," he added. "I will understand and respect that decision. At least I'll sleep well tonight."
Lamour joined Fifa in November 2024, having previously served as deputy general secretary at Uefa, and was two layers of management below Infantino.
Earlier this month, Infantino received the backing of senior executives in a meeting in Morocco, but BBC Sport was told Lamour was not invited.
Lamour has been approached for comment.
In a letter sent to members of Fifa's Council, and seen by BBC Sport, Grafstrom wrote: "I would like to provide you with an important update regarding a change within the Fifa Administration.
"Following recent discussions, Fifa and our Chief Operating Officer, Kevin Lamour have agreed to part ways. This decision was made after careful consideration and with great respect for Kevin, both personally and professionally… I felt it was important that I personally provide you this update and I would like to express my gratitude to Kevin for these contributions and for his work and commitment on behalf of Fifa on a daily basis. I wish Kevin all the best for the future."
How did we get to this point?
Infantino is under increasing pressure following his proposal to create a new company - FFE - to manage the commercial and ticketing rights of all Fifa competitions, including World Cups.
FFE was aborted after Infantino's plan to sell 21% of the company to private investment companies received widespread criticism.
Uefa, Concacaf - who govern football in North and Central America and the Caribbean - and the Asian Football Confederation publicly opposed the plan, while Uefa threatened to boycott the World Cup if the plan went ahead.
Lamour criticised Infantino, while a senior adviser to Infantino, Carlos Cordeiro, resigned.
After the proposal was aborted, Uefa and Concacaf withdrew their support for Infantino when he stands for a fourth presidential term at the Fifa Congress in March next year.
Several Concacaf members including Mexico broke ranks with their confederation to offer their support for Infantino, while the confederations of Africa, South America and Oceania have backed Infantino.
On Monday the Scottish FA became the latest body to withdraw its support for Infantino, following England, Wales, Northern Ireland and the Republic of Ireland.
Football governance charity FairSquare said it had written to Fifa demanding Infantino not be allowed to stand for re-election.
Related topics
- Published12 hours ago
- Published6 days ago
- Published10 August`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/sport/football/articles/cn7n4d6vy03o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-17T20:46:08+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/6644/live/a810eee0-9a71-11f1-b68f-817a5a696299.jpg",
    readTime: 2,
  },
  {
    id: "micron-sandisk-and-other-chip-stocks-cli-4b7a9419",
    title: "Micron, Sandisk and other chip stocks climb as investors get more confident about AI spending",
    titleJa: "投資家がAI支出に自信を深めているため、マイクロン、サンディスク、その他の半導体株が上昇",
    summaryJa: "報道によると、AI企業の財務成績は改善しており、メモリーチップ企業は米国当局の支援を受けて中国の競争をうまくかわすことができるかもしれない。",
    bodyOriginal: `AI companies are seeing improved financial performance, according to reports, and memory-chip companies may be able to better fend off Chinese competition with the help of U.S. officials.`,
    bodyJa: `報道によると、AI企業の財務成績は改善しており、メモリーチップ企業は米国当局の支援を受けて中国の競争をうまくかわすことができるかもしれない。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/micron-sandisk-and-other-chip-stocks-climb-as-investors-are-more-confident-about-ai-spending-128374fa?mod=mw_rss_topstories",
    publishedAt: "2026-08-17T20:43:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-54177591",
    readTime: 2,
  },
  {
    id: "30-year-treasury-yield-tops-5-31-the-hig-662fde49",
    title: "30-year Treasury yield tops 5.31%, the highest in 19 years",
    titleJa: "30年米国債利回りが5.31％を超え、19年ぶりの高水準に",
    summaryJa: "原油価格の上昇を受けて月曜日の米国債利回りは上昇し、インフレの持続と政府借り入れに対する投資家の間で懸念が高まった。通常地政学的な出来事に敏感な３０年米国債利回りは４ベーシスポイント以上上昇して５．３１１％となった。 ２００７年６月以来の高水準となった。",
    bodyOriginal: `Treasury yields were higher on Monday as oil prices rose, with worries growing among investors about persistent inflation and government borrowing.
The 30-year Treasury yield, which is typically sensitive to geopolitical events, advanced more than 4 basis points to 5.311%. It reached its highest level since June 2007.
The 10-year Treasury note yield — the main benchmark for mortgages, auto loans and credit card debt — was more than 2 basis points higher at 4.724%.
The yield on the 2-year Treasury note, which typically reacts in line with short-term Federal Reserve interest rate decisions, rose more than 1 basis point to 4.182%.
One basis point equals 0.01%, or 1/100th of 1%, and yields and prices move inversely to one another.
Oil prices rose as the 60-day deadline for the U.S. and Iran to secure a peace deal is expiring Monday, with Iran ruling out the possibility of an extension. A senior Iranian official also told Reuters Monday that Tehran would take an offensive stance if diplomacy with the U.S. fails.
West Texas Intermediate futures gained 2% to trade above $84 per barrel. Global benchmark Brent crude advanced 2% to above $90 a barrel.
Elevated energy prices in the wake of the Middle East conflict breaking out months ago have raised concerns about inflationary pressures, though the latest batch of mild inflation data has offered some reassurance to investors.
Bond yields rose during Friday's session after retail sales fell by a surprise 0.6% last month, which came after a flat producer price index print month-on-month in July.
Last week, the Treasury Department reported that the U.S. budget deficit reached its highest monthly level in more than five years, with rising Medicare costs and interest on the federal debt serving as contributors. The year-to-date total for the federal government's fiscal year has exceeded the amount seen during the same period last year.
"We believe investors are increasingly evaluating Treasury securities through the lens of longer-term fiscal sustainability and less through the lens of inflation, monetary policy, and growth, at least for the longer end of the Treasury curve," wrote Anthony Saglimbene, Ameriprise chief market strategist, in a Monday note.
Investors are now awaiting July's FOMC meeting minutes, due Wednesday, for further insights into the Federal Reserve's latest monetary policy decisions and potential future rates trajectory.
The Fed voted 9-3 to hold rates steady at between 3.50% and 3.75% for the fifth consecutive meeting on July 29. The three dissenting committee members — Beth Hammack of Cleveland, Neel Kashkari of Minneapolis and Lorie Logan of Dallas — instead called for a 25 basis point hike.`,
    bodyJa: `原油価格の上昇を受けて月曜日の米国債利回りは上昇し、インフレの持続と政府借り入れに対する投資家の間で懸念が高まった。
通常地政学的な出来事に敏感な３０年米国債利回りは４ベーシスポイント以上上昇して５．３１１％となった。 ２００７年６月以来の高水準となった。
住宅ローン、自動車ローン、クレジットカード債務の主な指標である10年国債利回りは4.724%と2ベーシスポイント以上上昇した。
通常、米連邦準備理事会（ＦＲＢ）の短期金利決定に合わせて反応する２年物国債利回りは１ベーシスポイント以上上昇し４．１８２％となった。
1 ベーシス ポイントは 0.01%、つまり 1% の 100 分の 1 に相当し、利回りと価格は相互に反比例します。
米国とイランが和平協定を締結するための60日間の期限が月曜日に期限切れとなり、イランが延長の可能性を否定しているため、原油価格は上昇した。イラン高官も月曜日、ロイターに対し、米国との外交が失敗すればイランは攻撃的な姿勢を取るだろうと述べた。
ウェスト・テキサス・インターミディエイト先物は２％上昇し、１バレル＝８４ドルを超えて取引された。世界のベンチマークであるブレント原油は２％上昇し、１バレル＝９０ドルを超えた。
数カ月前に勃発した中東紛争を受けてエネルギー価格が高騰し、インフレ圧力に対する懸念が高まっているが、最新の穏やかなインフレ統計は投資家に一定の安心感を与えている。
7月の生産者物価指数の前月比横ばいを受けて、先月の小売売上高が予想外の0.6％減となったことを受け、金曜日の取引中に債券利回りは上昇した。
財務省は先週、メディケア費用と連邦債務の金利の上昇が寄与し、米国の財政赤字が月次で過去５年以上で最高水準に達したと報告した。連邦政府の会計年度の年初から現在までの総額は、前年同期の金額を上回った。
アメリプライズの首席市場ストラテジスト、アンソニー・サグリンベネ氏は月曜のメモで「投資家はインフレ、金融政策、成長というレンズではなく、長期的な財政持続可能性というレンズを通して米国債をますます評価するようになっていると考えている」と述べた。
投資家は現在、連邦準備制度理事会の最新の金融政策決定と潜在的な将来の金利軌道に関するさらなる洞察を得るために、水曜日に発表される7月のFOMC議事録を待っている。
FRBは7月29日、5回連続の会合で政策金利を3.50％から3.75％の間で据え置くことを9対3で投票し、反対した3人の委員（クリーブランドのベス・ハンマック氏、ミネアポリスのニール・カシュカリ氏、ダラスのローリー・ローガン氏）は代わりに25ベーシスポイントの利上げを要求した。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/17/treasury-yields-federal-reserve-fomc-minutes.html",
    publishedAt: "2026-08-17T18:43:33+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "paramount-seeks-1-88-billion-bond-from-s-46fe9380",
    title: "Paramount seeks $1.88 billion bond from state AGs to cover costs of WBD merger delay",
    titleJa: "パラマウント、WBD合併遅延の費用をカバーするため州AGに18億8000万ドルの保釈金を請求",
    summaryJa: "月曜の独占禁止法訴訟の新たな提出文書によると、パラマウント・スカイダンスはワーナー・ブラザース・ディスカバリーとの合併を保留している州に対し、遅延に伴う手数料と経費の支払いを強制するよう求めている。パラマウントは、訴訟の背後にある州が支払うことになる18億8000万ドルの保釈金を要求している。 7月、カリフォルニア州のロブ・ボンタ氏率いる10数人の州司法長官が、パラマウントとWBDの1100億ドル規模の合併案に異議を申し立てた。",
    bodyOriginal: `Paramount Skydance will seek to force the states holding up its merger with Warner Bros. Discovery to pay for the fees and costs associated with the delay, according to a new filing in the antitrust case Monday.
Paramount is requesting a $1.88 billion bond that would be paid by the states behind the lawsuit. In July, a dozen state attorneys general led by California's Rob Bonta filed to challenge the proposed $110 billion merger between Paramount and WBD.
The proposed deal would combine two storied film studios — Paramount and Warner Bros. — as well as put together a sprawling portfolio of pay TV networks in the U.S. and streaming platforms HBO Max and Paramount+.
Paramount has received regulatory approvals from the Antitrust Division of the U.S. Department of Justice, as well as all other global jurisdictions needed to move forward with the merger. But last month, Paramount agreed to delay the proposed acquisition to as late as June 2027 while the state AGs' case heads to trial.
Paramount long planned to have the deal closed by the end of September. The delay could prove costly for Paramount.
Paramount agreed to a so-called ticking fee under the terms of the merger agreement, meaning that beginning Sept. 30 it would pay WBD shareholders an additional 25 cents per share, per quarter, until the deal closes. The amount could add up to roughly $650 million in cash value per quarter.
"By the time trial concludes and the parties submit their final briefs, Paramount will have paid Warner Bros. shareholders an unrecoverable $1.3 billion in ticking fees alone," Paramount said in the filing. "Delay also threatens to nullify the regulatory approvals that Defendants have already spent months securing."
"Absent security, even a complete victory on the merits would not restore a dollar of those extraordinary losses. That is precisely why federal law requires plaintiffs to provide security as a condition for receiving preliminary relief such as the court-approved order," the filing says.
If the deal were to fall apart due to regulatory concerns Paramount would owe WBD a $7 billion breakup fee.
This story is developing. Please check back for updates.`,
    bodyJa: `月曜の独占禁止法訴訟の新たな提出文書によると、パラマウント・スカイダンスはワーナー・ブラザース・ディスカバリーとの合併を保留している州に対し、遅延に伴う手数料と経費の支払いを強制するよう求めている。
パラマウントは、訴訟の背後にある州が支払うことになる18億8000万ドルの保釈金を要求している。 7月、カリフォルニア州のロブ・ボンタ氏率いる10数人の州司法長官が、パラマウントとWBDの1100億ドル規模の合併案に異議を申し立てた。
提案されている契約では、パラマウントとワーナー・ブラザースの2つの有名な映画スタジオが統合され、米国の有料テレビネットワークとストリーミングプラットフォームのHBO MaxとParamount+の広大なポートフォリオが統合されることになる。
パラマウントは米国司法省反トラスト局のほか、合併を進めるために必要な他のすべての世界管轄区域から規制当局の承認も得ている。しかし先月、パラマウントは、州政府の訴訟が裁判に向かう間、買収案を最長2027年6月まで延期することに同意した。
パラマウントは長年、9月末までに取引を完了させる計画を立てていた。遅延はパラマウントにとって代償を伴う可能性がある。
パラマウントは合併契約の条件に基づくいわゆるティッキングフィーに同意し、9月30日から取引が完了するまでWBD株主に1株当たり四半期ごとに追加で25セントを支払うことになる。この金額は、四半期あたりの現金価値として最大約 6 億 5,000 万ドルに上る可能性があります。
パラマウントは提出書類の中で、「裁判が終了し、両当事者が最終準備書面を提出するまでに、パラマウントはワーナー・ブラザースの株主に対し、ティッキング手数料だけで回収不可能な13億ドルを支払っていることになる」と述べた。 「遅延はまた、被告らがすでに数カ月を費やして確保してきた規制当局の承認を無効にする恐れがある。」
「担保がなければ、たとえ本案で完全に勝利したとしても、こうした異常な損失は一ドルも回復しないだろう。だからこそ連邦法は、裁判所が承認した命令などの予備的救済を受けるための条件として、原告に担保の提供を求めているのだ」と申請書には記されている。
規制上の懸念により契約が決裂した場合、パラマウントはWBDに対し70億ドルの違約金を支払う義務がある。
この物語は発展中です。最新情報を再度ご確認ください。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/17/paramount-bond-merger-delay-costs.html",
    publishedAt: "2026-08-17T18:36:08+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "brent-oil-rises-to-91-as-iran-rules-out-765fbc55",
    title: "Brent oil rises to $91 as Iran rules out interim deal extension, threatens to escalate conflict",
    titleJa: "イランが暫定合意延長を拒否、紛争激化の恐れでブレント原油が91ドルに上昇",
    summaryJa: "イランが米国との覚書延長交渉を排除したため、月曜日の原油価格は上昇した。一方、イラン高官はロイターに対し、米国との外交が失敗した場合、イランは防衛に頼るのではなく攻撃に転じるだろうと語った。",
    bodyOriginal: `Crude oil prices rose Monday as Iran ruled out talks to extend the memorandum of understanding with the U.S.
A senior Iranian official told Reuters, meawhile, that Tehran would shift to offense rather than relying on defense if diplomacy with the U.S. fails.
U.S. crude oil futures rose 2.8% to $84.70 per barrel. Brent crude, the international benchmark, was likewise up 2.8% at $91.03 per barrel.
"Iranian entities must be prepared to escalate tensions in the Strait of Hormuz and wider region, as Iran will be ready to make decisions and take action on difficult decisions," the Iranian official told Reuters.
The U.S. and Iran agreed to a memorandum of understanding on June 17 that was supposed to open the Strait of Hormuz while they negotiated a final deal on Tehran's nuclear program within 60 days. The two-month deadline to reach a deal expires Monday.
Iran's Foreign Ministry spokesman, Esmail Baghaei, ruled out talks to extend the MOU, according to the state news agency Tasnim.
"We did not start any negotiations at all, and the U.S. violated the understanding from the very beginning; therefore, the 60-day issue is not relevant," Baghaei said, according to Tasnim.
President Donald Trump, meanwhile, demanded Iran "put up the white flag of surrender" in an interview with Fox News. Trump threatened to bomb Oman, a U.S. ally, for negotiating with Tehran over how to manage traffic through Hormuz.
"If Oman gets in the way, we'll bomb the sh--- out of them," Trump told Fox.
Ship traffic through Hormuz was at a near standstill on Sunday, with just three vessels crossing the strait, according to data provided by Kpler.
Brent prices will likely rise back toward $100 per barrel as China increases its imports, said Bob McNally, president of Rapidan Energy.
China has slashed its imports by 4 million barrels per day to 5 million barrels per day, which has played a key role in keeping crude prices from surging higher during the Iran war, McNally told CNBC.
But Beijing will likely allow its refiners to import more so they can benefit from high refined product prices, he said.
"China coming off of its crash diet is is not consistent with Brent prices being stable," the analyst said.`,
    bodyJa: `イランが米国との覚書延長交渉を排除したため、月曜日の原油価格は上昇した。
一方、イラン高官はロイターに対し、米国との外交が失敗した場合、イランは防衛に頼るのではなく攻撃に転じるだろうと語った。
米原油先物は２．８％上昇し１バレル＝８４．７０ドルとなった。国際ベンチマークであるブレント原油も同様に2.8%上昇し、1バレルあたり91.03ドルとなった。
同イラン当局者はロイターに対し、「イランは困難な決断に対して決断を下し、行動を起こす用意があるため、イラン関係者はホルムズ海峡とその広範囲の地域で緊張が高まる準備をしておく必要がある」と述べた。
米国とイランは6月17日、テヘランの核開発計画に関する最終合意を60日以内に交渉する間にホルムズ海峡を開放することを内容とする覚書に合意した。合意に達するための２カ月の期限は月曜日に期限切れとなる。
国営通信社タスニム通信によると、イラン外務省報道官エスマイル・バガエイ氏は覚書延長交渉の可能性を否定した。
タスニム通信によると、バガイ氏は「われわれは交渉をまったく始めておらず、米国は最初から合意に違反した。したがって、60日の問題は関係ない」と述べた。
一方、ドナルド・トランプ大統領はFOXニュースとのインタビューでイランに「降伏の白旗を上げる」よう要求した。トランプ大統領は、ホルムズ経由の交通管理方法を巡ってイラン政府と交渉しているとして、米国の同盟国であるオマーンを爆撃すると脅した。
「オマーンが邪魔をするなら、我々は彼らを爆撃するだろう」とトランプ大統領はFOXに語った。
クプラーが提供したデータによると、ホルムズを通る船舶交通は日曜、ほぼ停止状態にあり、海峡を渡った船舶はわずか３隻だった。
ラピダン・エナジーのボブ・マクナリー社長は、中国の輸入増加に伴いブレント価格は１バレル＝１００ドルに向けて再び上昇する可能性が高いと述べた。
中国は輸入量を日量400万バレル削減し、日量500万バレルとしたが、これがイラン戦争中の原油価格の高騰を防ぐ上で重要な役割を果たしたとマクナリー氏はCNBCに語った。
しかし、中国政府は精製業者が高い精製製品価格から恩恵を受けることができるよう、輸入拡大を許可する可能性が高いと同氏は述べた。
同アナリストは、「中国が暴落ダイエットから脱却することは、ブレント価格の安定と一致しない」と述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/17/oil-prices-iran-war-strait-hormuz.html",
    publishedAt: "2026-08-17T18:25:01+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "film-commission-backs-amazon-mgm-expansi-a5ec30ae",
    title: "Film commission backs Amazon MGM expansion of studios",
    titleJa: "フィルムコミッション、アマゾンMGMのスタジオ拡張を支持",
    summaryJa: "フィルムコミッション、アマゾンMGMのスタジオ拡張を支持- 公開されました",
    bodyOriginal: `Film commission backs Amazon MGM expansion of studios
- Published
Amazon MGM Studios' planned expansion of a Berkshire-based complex would be a "considerable boost" for filmmaking, a government-funded industry body said.
Bray Film Studios, in Water Oakley, near Windsor, was previously used by the Hammer Films company.
The previous owner of the studios got planning permission to expand them in 2022 and Amazon MGM bought the site in 2024.
The British Film Commission (BFC) said it "recognises that the studio benefits from Amazon MGM's commitment" and welcomed its "ambition to support employment opportunities for both the local community and more widely across the UK sector".
The company has been using the site since 2022 and a public consultation regarding the expansion project closed in May.
Amazon MGM said its current proposals, which include building a multi-storey car park and six new sound stages, would help "realise the site's full potential".
The expansion is expected to create 470 jobs as it is built and 920 in Berkshire more widely.
Samantha Perahia, the BFC's head of production, told the Royal Borough of Windsor and Maidenhead that it supports the plan.
"The enhancements proposed for Bray Studios will not only allow the region to build on its already established and impressive reputation amongst international clients," she said.
She added that it "would also provide a considerable boost to the combined efforts of the BFC and our public and commercial partners in marketing the region, and the wider UK."
The planning application will be decided later.
Get in touch
Your Voice
- Published16 July
- Published9 May`,
    bodyJa: `フィルムコミッション、アマゾンMGMのスタジオ拡張を支持
- 公開されました
アマゾンＭＧＭスタジオが計画しているバークシャーに本拠を置く複合施設の拡張は、映画製作にとって「かなりの促進」になるだろうと、政府出資の業界団体は述べた。
ウィンザー近郊のウォーター オークレーにあるブレイ フィルム スタジオは、以前はハマー フィルム社によって使用されていました。
スタジオの前の所有者は 2022 年に拡張の計画許可を取得し、Amazon MGM が 2024 年にこの場所を購入しました。
英国映画委員会（BFC）は、「スタジオがAmazon MGMの取り組みから恩恵を受けていることを認識している」と述べ、「地域社会と英国全体のより広範な雇用機会を支援するという同社の意欲」を歓迎したと述べた。
同社は2022年からこの場所を使用しており、拡張プロジェクトに関する公開協議は5月に終了した。
アマゾンＭＧＭは、立体駐車場や６つの新たなサウンドステージの建設を含む現在の提案は「敷地の可能性を最大限に引き出す」のに役立つと述べた。
この拡張により、建設中に470人の雇用が創出され、バークシャーのより広範囲では920人の雇用が創出されることが見込まれている。
BFCの制作責任者であるサマンサ・ペライア氏は、ウィンザー・メイデンヘッド王立特別区に対し、BFCがこの計画を支持していると語った。
「ブレイ・スタジオに提案されている機能強化は、この地域が国際的な顧客の間ですでに確立されている印象的な評判をさらに高めることを可能にするだけではありません」と彼女は述べた。
同氏はさらに、「この地域や英国全体のマーケティングにおいて、BFCと公共・商業パートナーの共同努力も大幅に促進されるだろう」と付け加えた。
企画応募については後日決定いたします。
連絡する
あなたの声
- 7 月 16 日発行
- 5 月 9 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c9d8wjvd2q4o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-17T18:03:39+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/67d7/live/29b71560-9a58-11f1-ba0a-a16da249d30e.png",
    readTime: 2,
  },
  {
    id: "here-s-how-amazon-s-stock-could-nearly-d-5ffdec72",
    title: "Here’s how Amazon’s stock could nearly double by the end of next year, according to Morgan Stanley",
    titleJa: "モルガン・スタンレーによると、アマゾンの株価が来年末までにほぼ2倍になる可能性がある理由は次のとおりです",
    summaryJa: "Amazonはクラウド収益1兆ドルの達成という目標には程遠いが、その目標を追求することで投資家にかなりの利益をもたらす可能性がある、とアナリストは指摘する。",
    bodyOriginal: `Amazon is very far from its goal of achieving $1 trillion in cloud revenue, but it could deliver handsome returns for investors as it pursues that target, an analyst notes.`,
    bodyJa: `Amazonはクラウド収益1兆ドルの達成という目標には程遠いが、その目標を追求することで投資家にかなりの利益をもたらす可能性がある、とアナリストは指摘する。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/heres-how-amazons-stock-could-nearly-double-by-the-end-of-next-year-according-to-morgan-stanley-91b97520?mod=mw_rss_topstories",
    publishedAt: "2026-08-17T17:57:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-452290",
    readTime: 2,
  },
  {
    id: "investor-dubbed-the-ai-stock-god-had-56-4a34ca90",
    title: "Investor dubbed the ‘AI stock god’ had 56% of his hedge fund invested in these two stocks before the July blow-up",
    titleJa: "「AI株の神様」と呼ばれる投資家は、7月の爆発前にはヘッジファンドの56％をこれら2銘柄に投資していた",
    summaryJa: "2026年上半期の終わり、このセクターの大きな調整の直前に、状況認識ファンドの4分の3以上がわずか5銘柄に賭けていたが、そのすべてが本質的にAIへの大きな賭けだった。",
    bodyOriginal: `At the end of the first half of 2026, on the cusp of a major correction in the sector, more than three quarters of the Situational Awareness fund was betting on just five stocks, all of which were, in essence, one big bet on AI.`,
    bodyJa: `2026年上半期の終わり、このセクターの大きな調整の直前に、状況認識ファンドの4分の3以上がわずか5銘柄に賭けていたが、そのすべてが本質的にAIへの大きな賭けだった。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/investor-dubbed-ai-stock-god-had-56-of-his-funds-in-these-two-stocks-before-it-blew-up-07472f46?mod=mw_rss_topstories",
    publishedAt: "2026-08-17T16:31:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-53423967",
    readTime: 2,
  },
  {
    id: "apple-s-stock-could-rise-30-if-it-strike-cef72deb",
    title: "Apple’s stock could rise 30% if it strikes an Nvidia deal for AI, this analyst says",
    titleJa: "AppleがAIに関してNvidiaと契約を結べば、株価は30%上昇する可能性がある、とこのアナリストは言う",
    summaryJa: "ロスチャイルドのアナリストは、Apple が Nvidia のオープンソース モデルを導入することで、「標準以下」の AI への取り組みを改善できる可能性があると示唆しています。",
    bodyOriginal: `A Rothschild analyst suggests Apple could improve upon its ‘subpar’ AI efforts by deploying Nvidia’s open-source models.`,
    bodyJa: `ロスチャイルドのアナリストは、Apple が Nvidia のオープンソース モデルを導入することで、「標準以下」の AI への取り組みを改善できる可能性があると示唆しています。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/apples-stock-could-rise-30-if-it-strikes-an-nvidia-deal-for-ai-this-analyst-says-f5f5c861?mod=mw_rss_topstories",
    publishedAt: "2026-08-17T16:00:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-99723537",
    readTime: 2,
  },
  {
    id: "nvidia-backing-105-billion-in-financing-e925d0d0",
    title: "Nvidia backing $105 billion in financing for OpenAI data center in Ohio",
    titleJa: "Nvidia、オハイオ州の OpenAI データセンターへの 1,050 億ドルの資金調達を支援",
    summaryJa: "Nvidiaは、オハイオ州にあるOpenAIの新しい人工知能データセンターに最大1,050億ドルの融資を提供すると、月曜日の有価証券報告書で明らかになった。このクレジットは、最初の 4.25 ギガワットのコンピューティング容量をサポートし、オプションで 3.75 ギガワットを追加できます。 Nvidia がコンピューティングを提供し、その容量は 2028 年に段階的にオンラインになる予定です。",
    bodyOriginal: `Nvidia will provide up to $105 billion in financing for a new artificial intelligence data center for OpenAI in Ohio, a securities filing revealed on Monday.
The credit will support an initial 4.25 gigawatts of computing capacity with the option for an additional 3.75 gigawatts. Nvidia will provide the compute, with capacity expected to come online in phases in 2028.
SB Energy will build and manage the datacenter at the PORTS-Pike Technology Campus in Pike City, Ohio, through a 20-year lease to OpenAI. The frontier lab has a stake in the company, and OpenAI CEO Sam Altman was also an early investor in SB Energy.
"We are securing long-lived infrastructure for NVIDIA compute so OpenAI can deploy the most productive AI factories that can be upgraded repeatedly with each new generation delivering more intelligence and better economics," said Nvidia CEO Jensen Huang in a release.
CNBC previously reported that Nvidia was in discussions with OpenAI to provide a backstop of up to $250 billion that would let the model maker raise debt for a 10-gigawatt data center at the Ohio location.
The Wall Street Journal reported last week that Nvidia was set to cut that guarantee to less than $120 billion for the buildout.
The deal is Nvidia's latest in a string of financing maneuvers to support the sprawling AI data center buildout, which has raised concerns about circular financing in the AI trade. Last week, Nvidia joined forces with six large asset managers to build financing platforms to deploy $500 billion in third-party capital for datacenter projects.
As part of the Ohio deal, SB Energy and SoftBank will build power sources supporting 10 gigawatts of energy and invest at least $4.2 billion into regional grid infrastructure. Nvidia will invest $1.5 billion in SB Energy.
OpenAI said the new data center will support 35,000 new construction jobs through 2032 and 2,500 long-term positions.
The new data center will give OpenAI more access to the high-end chips and compute power that underlay the entire AI architecture.
OpenAI President Greg Brockman told CNBC's "Squawk Box" on Monday that compute is a "fundamental resource" for the industry.
"Compute is really becoming the new oil, the new limited resource of the AI age," he said.`,
    bodyJa: `Nvidiaは、オハイオ州にあるOpenAIの新しい人工知能データセンターに最大1,050億ドルの融資を提供すると、月曜日の有価証券報告書で明らかになった。
このクレジットは、最初の 4.25 ギガワットのコンピューティング容量をサポートし、オプションで 3.75 ギガワットを追加できます。 Nvidia がコンピューティングを提供し、その容量は 2028 年に段階的にオンラインになる予定です。
SB Energy は、OpenAI への 20 年間のリースを通じて、オハイオ州パイクシティの PORTS-Pike Technology Campus にデータセンターを構築および管理します。フロンティアラボは同社に出資しており、OpenAI CEOのサム・アルトマン氏もSBエナジーの初期投資家だった。
「私たちは、NVIDIA コンピューティングのための長寿命インフラストラクチャを確保しています。これにより、OpenAI は、より多くのインテリジェンスと優れた経済性を提供する新世代ごとに繰り返しアップグレードできる最も生産性の高い AI ファクトリーを展開できるようになります」と、NVIDIA CEO のジェンセン・ファンはリリースで述べています。
CNBCは以前、NVIDIAがOpenAIと、モデルメーカーがオハイオ州にある10ギガワットのデータセンターの負債を調達できるよう、最大2500億ドルのバックストップを提供する協議を行っていると報じた。
ウォール・ストリート・ジャーナルは先週、エヌビディアが増強のための保証を1200億ドル未満に削減する予定だと報じた。
この取引は、AI貿易における循環型資金調達に対する懸念を引き起こしている、AIデータセンターの無秩序な拡張を支援するためのNvidiaの一連の資金調達策の最新のものである。先週、Nvidia は大手資産運用会社 6 社と提携して、データセンター プロジェクトに 5,000 億ドルのサードパーティ資本を投入するための資金調達プラットフォームを構築しました。
オハイオ州との契約の一環として、SBエナジーとソフトバンクは10ギガワットのエネルギーをサポートする電源を建設し、地域の送電網インフラに少なくとも42億ドルを投資する。 NvidiaはSB Energyに15億ドルを投資する。
OpenAIによると、新しいデータセンターは2032年までに3万5000人の新規建設雇用と2500人の長期雇用を支援する予定だという。
新しいデータセンターにより、OpenAI は AI アーキテクチャ全体の基盤となるハイエンド チップと計算能力にさらにアクセスできるようになります。
OpenAIの社長グレッグ・ブロックマン氏は月曜日、CNBCの「Squawk Box」に対し、コンピューティングは業界にとって「基本的なリソース」であると語った。
「コンピューティングはまさに新しい石油、AI時代の新たな限られたリソースになりつつある」と同氏は語った。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/17/nvidia-financing-open-ai-data-center-ohio.html",
    publishedAt: "2026-08-17T15:26:52+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "openai-s-brockman-brushes-off-concerns-a-4247d874",
    title: "OpenAI's Brockman brushes off concerns about leadership changes in CNBC exclusive",
    titleJa: "OpenAIのブロックマン氏、CNBC独占番組でリーダー交代に関する懸念を一蹴",
    summaryJa: "OpenAIのグレッグ・ブロックマン社長は月曜日、人工知能企業の役員交代に関する懸念を一蹴し、撤退の波が「実際にはそれほど異常」だとは思わないと述べた。「実際、OpenAI と他の組織の違いは、私たちが注目を集めているため、あらゆる出発が他の組織とは異なる方法で精査されることだと思います」とブロックマン氏は CNBC の「Squawk Box」の独占インタビューで語った。",
    bodyOriginal: `OpenAI President Greg Brockman on Monday brushed off concerns about executive turnover at the artificial intelligence company, stating that he doesn't think the wave of exits are "actually that atypical."
"I actually think that the difference between OpenAI and other organizations is that we are so much in the spotlight, so every departure gets scrutinized in a way that it doesn't otherwise," Brockman told CNBC's "Squawk Box" in an exclusive interview.
Last week, OpenAI's revenue chief Denise Dresser suddenly left her role after just eight months at the company. She was tasked with growing OpenAI's enterprise unit, a high-margin part of the business that aims to directly take on the company's chief rival, Anthropic.
Dresser's departure came just two days after another longtime executive, Brad Lightcap, said he was ending an eight-year stint at the ChatGPT creator to "start something new." Dresser took over many of Lightcap's responsibilities in April, when OpenAI said he was transitioning his position as operating chief to a new role focused on "special projects."
OpenAI named Dali Rajic, former COO of cybersecurity company Wiz, which Google acquired for $32 billion earlier this year, as its new chief revenue officer.
During a meeting with investors on Friday, Brockman thanked Dresser for her contributions and for building out the company's enterprise foundation, as CNBC previously reported. He also expressed excitement about Dresser's replacement.
"There have been different eras where we have different sets of of leaders in place," Brockman said Monday. "I'm a constant, Sam [Altman] is a constant, and that I think that we are stronger because of that resilience and diversity."
This is breaking news. Please refresh for updates.`,
    bodyJa: `OpenAIのグレッグ・ブロックマン社長は月曜日、人工知能企業の役員交代に関する懸念を一蹴し、撤退の波が「実際にはそれほど異常」だとは思わないと述べた。
「実際、OpenAI と他の組織の違いは、私たちが注目を集めているため、あらゆる出発が他の組織とは異なる方法で精査されることだと思います」とブロックマン氏は CNBC の「Squawk Box」の独占インタビューで語った。
先週、OpenAIの収益責任者デニス・ドレッサー氏は、入社わずか8カ月後に突然その職を辞した。彼女は、OpenAI のエンタープライズ部門を成長させる任務を負っていました。この部門は、同社の最大のライバルである Anthropic に直接対抗することを目的とした、ビジネスの中でも利益率の高い部門です。
ドレッサー氏の退職は、同じく長年幹部を務めたブラッド・ライトキャップ氏が「何か新しいことを始める」ため、ChatGPT開発者としての8年間の任期を終えると述べたわずか2日後のことだった。ドレッサー氏は4月にライトキャップの責任の多くを引き継ぎ、オープンAIはドレッサー氏が執行責任者としての地位を「特別プロジェクト」に重点を置いた新しい役割に移行すると発表した。
OpenAIは、Googleが今年初めに320億ドルで買収したサイバーセキュリティ企業Wizの元COO、ダリ・ラジク氏を新たな最高収益責任者に任命した。
CNBCが以前報じたように、金曜日の投資家との会合の中で、ブロックマン氏はドレッサー氏の貢献と会社の企業基盤の構築に感謝した。同氏はまた、ドレッサーの後任について興奮を表明した。
「さまざまな時代に、さまざまなリーダーが配置されてきた」とブロックマン氏は月曜日に語った。 「私は不変であり、サム（アルトマン）は不変であり、その回復力と多様性のおかげで私たちはより強くなっていると思います。」
これは速報です。更新を確認するには更新してください。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/17/openai-brockman-leadership-changes.html",
    publishedAt: "2026-08-17T12:55:48+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "virgin-takes-step-towards-running-channe-dacf872b",
    title: "Virgin takes step towards running Channel Tunnel rail services",
    titleJa: "ヴァージン、英仏海峡トンネル鉄道サービスの運営に向けて一歩を踏み出す",
    summaryJa: "ヴァージン、英仏海峡トンネル鉄道サービスの運営に向けて一歩を踏み出す- 公開されました",
    bodyOriginal: `Virgin takes step towards running Channel Tunnel rail services
- Published
Virgin's plan to run a rival rail service to Eurostar through the Channel Tunnel has moved closer after it was granted track access by the regulator.
The company has been given approval to run up to 20 daily return services between London and Paris, Brussels and Amsterdam by the Office of Rail and Road (ORR), with the agreement running from 1 October 2030 to 31 December 2040.
The ORR said, external it was "a significant step forward" in introducing competition on the route, where Eurostar has held a monopoly on passenger services since the tunnel opened in 1994.
However, the regulator said Virgin still had to secure rolling stock for the services and get safety approval from UK and EU authorities.
The approval from the ORR only covers the HS1 route from London St Pancras to the Channel Tunnel at Dover and the regulator said Virgin also needed to secure access to rail networks in mainland Europe.
The ORR's deputy director of access and international, Martin Jones, said: "This is an important next step in bringing competition and growth to the market for international rail services.
"While there is still more work to do, we are supporting Virgin and the wider industry to grow international services."
The ORR said increasing competition on the route would provide "significant benefits" for passengers.
As well as Virgin, Italy's FS Italiane Group is also planning to run services through the Channel Tunnel from 2029 using its subsidiary Trenitalia France.
Last week, Trenitalia France signed an agreement for 19 new high-speed trains from Hitachi Rail, which it plans to use on the service.
Virgin is planning to buy 12 high-speed trains from Alstom to operate on the route.
A Virgin Group spokesperson said: "Our plans for a new London-Europe rail service from 2030 are moving at pace.
"We welcome the ORR's pre-approval of our track access agreement and the opportunity to bring competition and Virgin's award-winning customer experience to the Channel Tunnel."
The ORR said the extra services into London St Pancras international station would "demand more robust operational working" but said that should not be a barrier to expansion.
It also said the HS1 network should be able to support the "substantial additional services" provided that "operational, contractual, and co-ordination risks are properly controlled".
Responding to the ORR's statement, Eurostar said it confirmed "the huge potential for growth in international rail and the ambition across the industry to bring more passengers to Europe by train".
"Eurostar will play a full part in that growth, and our focus remains on delivering our own ambitious plans, investing in our fleet and carrying 30 million passengers a year," it said.
Last year, Eurostar said it planned to launch direct train services from London to Germany and Switzerland by the early 2030s.
Last year, Virgin's plans to launch international services received a boost after the ORR approved its application to share a key rail depot with Eurostar.
Temple Mills railway storehouse in east London is the only depot in the UK able to accommodate the larger trains used in continental Europe and which is already linked to the cross-Channel line.
Related topics
- Published30 October 2025
- Published22 October 2025`,
    bodyJa: `ヴァージン、英仏海峡トンネル鉄道サービスの運営に向けて一歩を踏み出す
- 公開されました
英仏海峡トンネルを通ってユーロスターまでライバル鉄道を運行するというヴァージンの計画は、規制当局から線路へのアクセスが認められたことで、さらに近づいた。
同社は鉄道道路局（ORR）からロンドンとパリ、ブリュッセル、アムステルダムの間で1日最大20往復の運行を認可されており、契約期間は2030年10月1日から2040年12月31日までとなっている。
ORRは対外的には、1994年のトンネル開通以来ユーロスターが旅客サービスを独占してきたこの路線に競争を導入する上で「重要な前進」であると述べた。
しかし、規制当局は、ヴァージンは依然としてサービス用の車両を確保し、英国とEU当局から安全性の承認を得る必要があると述べた。
ORRの承認はロンドン・セント・パンクラス駅からドーバー海峡トンネルまでのHS1ルートのみを対象としており、規制当局はヴァージンが欧州本土の鉄道網へのアクセスを確保する必要もあると述べた。
ORRのアクセス・国際担当副局長マーティン・ジョーンズ氏は、「これは国際鉄道サービス市場に競争と成長をもたらす重要な次のステップだ」と述べた。
「やるべきことはまだたくさんありますが、私たちはヴァージンと幅広い業界が国際サービスを成長できるよう支援しています。」
ORRは、この路線での競争激化は乗客に「重大な利益」をもたらすだろうと述べた。
ヴァージンと同様にイタリアのFSイタリアーネ・グループも、子会社のトレニタリア・フランスを利用して2029年から英仏海峡トンネルを通るサービスを実施する予定だ。
先週、トレニタリア・フランスは、日立鉄道から19両の新しい高速列車の契約を締結し、同サービスで使用する予定である。
ヴァージンはアルストムから高速鉄道12両を購入してこの路線を運行する計画だ。
ヴァージン・グループの広報担当者は「2030年からロンドンとヨーロッパを結ぶ新たな鉄道サービスの計画は順調に進んでいる。
「私たちは、ORRによる線路アクセス契約の事前承認と、競争とヴァージンの受賞歴のある顧客体験を海峡トンネルにもたらす機会を歓迎します。」
ＯＲＲは、ロンドン・セント・パンクラス国際駅への増便には「より堅実な運営が求められる」としながらも、それが拡張の障壁になるべきではないと述べた。
また、「運用上、契約上、調整上のリスクが適切に管理されている」という条件で、HS1ネットワークは「実質的な追加サービス」をサポートできるはずだとも述べた。
ORRの声明に対し、ユーロスターは「国際鉄道の大きな成長の可能性と、鉄道でより多くの乗客をヨーロッパに連れて行きたいという業界全体の野心」を確認したと述べた。
「ユーロスターはその成長に全面的に貢献し、当社は引き続き自社の野心的な計画を実現し、保有車両に投資し、年間3,000万人の乗客を運ぶことに注力する」と述べた。
ユーロスターは昨年、2030年代初頭までにロンドンからドイツとスイスへの直通列車サービスを開始する計画を発表した。
昨年、主要な鉄道車両基地をユーロスターと共有する申請をORRが承認したことで、ヴァージンの国際線サービス開始計画が加速した。
ロンドン東部にあるテンプル ミルズ鉄道倉庫は、ヨーロッパ大陸で使用される大型列車を収容できる英国で唯一の車両基地であり、すでに海峡横断線に接続されています。
関連トピック
- 2025 年 10 月 30 日発行
- 2025 年 10 月 22 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cjrvx4yye81o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-17T12:46:25+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/0d0e/live/a809a810-9a12-11f1-a05c-fdd5e0ed226e.jpg",
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
