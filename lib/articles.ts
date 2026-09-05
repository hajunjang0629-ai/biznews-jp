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
    id: "trump-signs-order-to-remove-endangered-s-4eca96e0",
    title: "Trump signs order to remove endangered species protection for grey wolves",
    titleJa: "トランプ大統領、ハイイロオオカミの絶滅危惧種保護を解除する命令に署名",
    summaryJa: "トランプ大統領、ハイイロオオカミの絶滅危惧種保護を解除する命令に署名- 公開されました",
    bodyOriginal: `Trump signs order to remove endangered species protection for grey wolves
- Published
Donald Trump has signed an executive order to remove endangered species protection for the grey wolf and a subspecies, the Mexican wolf.
The US president's decision could pave the way for pastoral farmers to kill the canines to protect their livestock. His order said ranchers played a "vital role" in the food supply chain and American cultural heritage.
But conservation groups have criticised the move, saying it could derail long-term efforts to recover the endangered wolf populations.
There were 319 Mexican wolves in the wild in the US in 2025, up from just four when they were reintroduced in 1998, US Fish and Wildlife Service (FWS) figures show.
Meanwhile, there are roughly 18,000 grey wolves across the US, though they are still considered endangered as most of their habitat has been destroyed by humans.
An attempt to de-list them at a federal level in 2022 became tied up in litigation, and some campaigners have indicated they intend to do the same of the US Department of Interior acts on Trump's order.
The executive order does not give ranchers immediate license to shoot wolves preying on livestock, but instead gives Interior Secretary Doug Burgum 90 days to determine whether the grey and Mexican wolf populations had recovered enough to warrant being taken off the endangered species list.
Noting that US livestock herds were at a 75-year low while demand for beef had risen by 10% in the past decade, the order added: "More can and should be done to support this critical industry."
However, environmental groups pointed to studies that suggested wolf attacks on livestock were rare and had little impact on ranchers' income.
"This is a huge distraction to placate a handful of ranchers and make them believe that wolves are a greater threat than President Trump's own policies," said Greta Anderson, deputy director of Western Watersheds Project, which works to conserve wildlife in western US states.
The Wolf Conservation Center noted that ranchers were entitled to up to 100% compensation for any livestock losses caused by wolves under the current system, with individual states providing funding for programmes to deter attacks.
"The Mexican grey wolf is not recovered simply because the population has grown," said Claire Musser, executive director of the Grand Canyon Wolf Recovery Project. "Weakening federal protections now would put decades of recovery work at risk."
The executive order comes as the Trump administration is seeking to lower record-high beef prices for consumers, driven by drought and an outbreak of parasites in US beef stocks.
Ranchers have been frustrated by Trump's decision to loosen restrictions on beef imports to address price rises, putting pressure on their already tight margins.
The US government launched a campaign to systematically exterminate wolves towards the end of the 19th Century. This, along with farmers and landowners trapping and killing wolves, pushed them to the brink of eradication.
Ranchers still view them as a nuisance, which tackling lethally constitutes a federal crime.`,
    bodyJa: `トランプ大統領、ハイイロオオカミの絶滅危惧種保護を解除する命令に署名
- 公開されました
ドナルド・トランプ大統領は、ハイイロオオカミとその亜種であるメキシコオオカミに対する絶滅危惧種の保護を解除する大統領令に署名した。
米国大統領の決定は、牧畜民が家畜を守るために犬を殺す道を開く可能性がある。同氏の命令では、牧場主は食料サプライチェーンと米国の文化遺産において「重要な役割」を果たしていると述べた。
しかし、保護団体はこの動きを批判し、絶滅の危機に瀕したオオカミの個体数を回復するための長期的な取り組みが頓挫する恐れがあると主張した。
米国魚類野生生物局（FWS）の統計によると、2025年の米国では野生のメキシコオオカミの数は319頭で、1998年に再導入されたときはわずか4頭だった。
一方、アメリカ全土には約18,000頭のハイイロオオカミが生息していますが、生息地のほとんどが人間によって破壊されているため、依然として絶滅の危機に瀕していると考えられています。
2022年に連邦レベルでこれらをリストから除外する試みは訴訟に巻き込まれ、一部の運動家はトランプ大統領の命令に基づいて米国内務省の法令と同様の措置を講じる意向を示している。
この大統領令は家畜を捕食するオオカミを射殺する即時許可を牧場主に与えるものではなく、代わりにダグ・バーガム内務長官に対し、ハイイロオオカミとメキシコオオカミの個体数が絶滅危惧種リストから外すのに十分なほど回復したかどうかを判断するための90日間の猶予を与えている。
同命令は、牛肉の需要が過去10年間で10％増加する一方で、米国の家畜群が75年ぶりの低水準にあることを指摘し、「この重要な産業を支援するためにさらに多くのことができるし、そうすべきだ」とも付け加えた。
しかし、環境保護団体は、オオカミによる家畜への攻撃はまれであり、牧場の収入にほとんど影響を及ぼさないことを示唆する研究を指摘した。
米国西部の州で野生生物の保護に取り組む西部流域プロジェクトの副所長、グレタ・アンダーソン氏は、「これは少数の牧場主をなだめ、オオカミがトランプ大統領自身の政策よりも大きな脅威であると彼らに信じ込ませるための大きな気晴らしだ」と述べた。
オオカミ保護センターは、各州が攻撃を阻止するプログラムに資金を提供する現行制度の下では、牧場主はオオカミによる家畜の損失に対して最大100％の補償を受ける権利があると指摘した。
グランドキャニオンオオカミ回復プロジェクトのエグゼクティブディレクター、クレア・マッサー氏は、「メキシコハイイロオオカミは、単に個体数が増えたからといって回復するわけではない」と語る。 「連邦政府の保護が今弱まれば、数十年にわたる復旧作業が危険にさらされることになる。」
この大統領令は、干ばつと米国の牛肉在庫における寄生虫の発生を理由に、トランプ政権が消費者向けに過去最高の牛肉価格を引き下げようとしている中で出された。
牧場主らは、価格上昇に対処するために牛肉の輸入制限を緩和するというトランプ大統領の決定に不満を抱いており、すでに厳しい利益率を圧迫している。
米国政府は 19 世紀末にオオカミを組織的に絶滅させるキャンペーンを開始しました。このことと、農民や地主がオオカミを罠に掛けて殺すことにより、オオカミは絶滅の危機に瀕しました。
牧場主らは依然として彼らを迷惑者とみなしており、致死的な取り組みは連邦犯罪に相当する。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c62k677d4lzo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-05T09:12:48+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/dcdf/live/8dedf210-a908-11f1-bddd-351282998660.jpg",
    readTime: 4,
  },
  {
    id: "from-trump-s-takeover-threats-to-a-north-a4ad9926",
    title: "From Trump’s takeover threats to a ‘northern neighborhood,’ why the EU chief is going to Greenland",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `European Commission President Ursula von der Leyen will travel to Greenland's capital on Sunday, seeking to shore up support for the Arctic island against a backdrop of repeated threats from U.S. President Donald Trump.
The EU chief is widely expected to announce fresh funding for the self-governing Danish territory, when she makes her second trip to Nuuk, in the company of Danish Prime Minister Mette Frederiksen.
It comes shortly after Icelanders voted to reject restarting EU membership negotiations and as Trump renews his push to acquire Greenland on national security grounds.
Greenlandic Prime Minister Jens-Frederik Nielsen made a thinly veiled reference to Trump's pursuit to acquire the island ahead of Von der Leyen's visit.
"The EU has made clear its support for us in the geopolitical situation, while responding to our desire for even greater partnership. I look very much forward to the coming days and to share more about the importance of the Joint Declaration for Greenland," Nielsen said in a statement shared with CNBC.
Analysts highlighted three key reasons for Von der Leyen's Greenland visit: Arctic security, economic and infrastructure investment and broader cooperation in the North Atlantic and wider Arctic theater.
The European Commission, the EU's executive arm, did not respond to a CNBC request for comment ahead of Von der Leyen's visit. A spokesperson for Denmark's Foreign Ministry declined to comment.
Arctic security
The EU chief's trip to Nuuk serves as a show of solidarity to both Greenland and Denmark at a time of heightened geopolitical tensions, according to Kristina Spohr, professor in the Department of International History at the London School of Economics.
"We must never lose sight with what's going on with Russia and China. By that, I don't just mean the sabotage activity and hybrid warfare that we see, and the focus has now been on Germany, but actually again we have question marks over Russian trawlers around Svalbard," Spohr told CNBC by video call.
"We also see that the Chinese and Russians are doing dual-use scientific action in the Chukchi Sea, through the Bering Strait further north. And, of course, America has said they must not enter American national waters."
These security concerns also extend to the so-called GIUK gap, Spohr said, referring to a strategic maritime passage between Greenland, Iceland and the U.K. that links the Arctic to the Atlantic Ocean.
"So, it's very, very volatile … when actually one of our most important allies in the global scheme of things, the United States, is making life incredibly difficult, especially when it comes to Greenland and Denmark," she added.
Trump has long advocated for control of Greenland, a vast, sparsely populated and largely frozen island, but the U.S. president's fixation on the territory became a major trans-Atlantic issue at the start of the year.
Trump, who had refused to rule out the use of military force to annex Greenland, abruptly announced in late January, however, that he and NATO Secretary General Mark Rutte had formed a "framework of a future deal" with respect to the territory.
A working group of representatives from the U.S., Denmark and Greenland have since been meeting to discuss the way forward.
Local investment
The EU's Greenland funding package for 2026 and 2027, which the Financial Times reported may amount to 200 million euros ($232.4 million), could target areas such as critical minerals, renewable energy and undersea cables, among other priorities.
Von der Leyen had previously opened the European Commission's office in Nuuk in March 2024, establishing a permanent European presence in the country. The EU chief also signed cooperation agreements worth close to 94 million euros at the time.
"There are several layers but the one layer we should never forget is the Greenland-Denmark relationship," Andreas Raspotnik, senior fellow at The Arctic Institute think tank, told CNBC by telephone.
Read more
"The approach now is very clear: What can we really do? We can invest, we can offer support on pre-agreed issues such as infrastructure, investments in education and increasing our presence there."
Jozef Síkela, the EU's commissioner for international partnerships, recently highlighted some of the EU's investments in Greenland during a gathering to discuss Arctic affairs in Brussels.
"The EU has invested in Arctic education, fisheries and sustainable tourism for decades. €372 million into Arctic research through Horizon, €273 million through Interreg," Síkela said Tuesday at the EU Arctic Forum. "We are not newcomers here. But today's environment demands more," he added.
'Northern neighborhood'
Von der Leyen's visit to Greenland is also seen as a prime opportunity for the EU to coordinate closely with regional leaders on issues such as defense and economic resilience, particularly given the bloc is in the process of updating its Arctic policy.
"I think that the strategic thinking is changing in Brussels as they consider how they can even better include Greenland into, maybe you want to call it the northern neighborhood," Raspotnik said.
"I hear that term as well now, you know, we have an eastern neighborhood, we have a southern neighborhood but how can we define the north? And by north, that means Iceland, it means Canada and it means the U.K.," he continued.
"How can we more strategically think about these partners, those states that are outside the EU in the north?"
Greenland is scheduled to host on Monday a biannual national meeting with Denmark's Frederiksen and Faroese Premier Beinir Johannesen.
"These times commit us to working closely together. Like being three people in the same boat, we must row together and ensure a common direction that is the way it is in the current system," Nielsen said.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.
Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/05/eu-greenland-von-der-leyen-trump-arctic.html",
    publishedAt: "2026-09-05T05:00:01+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "at-least-two-dead-in-blast-at-bolivia-mi-0c8962b1",
    title: "At least two dead in blast at Bolivia military barracks",
    titleJa: "ボリビア軍兵舎で爆発、少なくとも２人死亡",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `At least two dead in blast at Bolivia military barracks
- Published
At least two people have been killed after an explosion at a military barracks in Bolivia but authorities fear the toll could be higher.
Bolivian Defence Minister Ernesto Justiniano said at least 58 people had been injured when "pyrotechnic material" detonated at the barracks, where an artillery regiment is stationed, about 14:30 (18:30 GMT) on Friday.
Health official Rita Nebraska told local television between 10 and 15 people were believed to have died in the incident in Viacha, about 30km (19 miles) from La Paz, according to Reuters.
Police said dozens of homes had been damaged - largely windows shattered in the blast - and emergency workers are searching the rubble.
Nebraska said there was a risk of further explosion and urged people to stay at least 150m away from the military base.
Police spokesman Roger Roca told AFP news agency that fireworks had been stored at the barracks, and the cause of the blast remained under investigation.
Viacha's authorities have declared three days of mourning.`,
    bodyJa: `ボリビア軍兵舎で爆発、少なくとも２人死亡
- 公開されました
ボリビアの軍兵舎で爆発があり、少なくとも２人が死亡したが、当局は死者数がさらに増える可能性を懸念している。
ボリビアのエルネスト・フスティニアーノ国防大臣は、金曜日の14時30分（日本時間18時30分）頃に砲兵連隊が駐屯する兵舎で「発火物」が爆発し、少なくとも58人が負傷したと発表した。
ロイター通信によると、保健当局者のリタ・ネブラスカ氏は地元テレビに対し、ラパスから約３０キロ離れたヴィアチャでの事件で１０人から１５人が死亡したとみられると語った。
警察によると、数十軒の家屋が爆発で主に窓ガラスが割れ、被害が出ており、救急隊員ががれきの捜索を行っている。
ネブラスカ州はさらなる爆発の危険があるとし、人々に軍事基地から少なくとも１５０メートル離れるよう呼び掛けた。
警察報道官のロジャー・ロカ氏はAFP通信に対し、兵舎には花火が保管されており、爆発の原因は捜査中であると語った。
ヴィアチャ当局は３日間の服喪を宣言した。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c3v45xy67g5o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-05T02:59:40+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/38c6/live/2c42cd50-a8d2-11f1-a291-b542ee92de7c.jpg",
    readTime: 2,
  },
  {
    id: "un-votes-to-adopt-new-world-map-to-refle-20a0fc4d",
    title: "UN votes to adopt new world map to reflect Africa's true size",
    titleJa: "国連、アフリカの真の大きさを反映する新しい世界地図の採用を決議",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `UN votes to adopt new world map to reflect Africa's true size
- Published
The UN General Assembly has voted to replace the traditional world map with one that more accurately reflects the size of Africa.
The "Correct the Map" resolution, sponsored by Togo and backed by African Union (AU) members, passed with the support of 164 nations, including France and the UK. The United States was the only nation to vote against it - and there were six abstentions.
The UN vote is non-binding but will see changes to the maps used by institutions around the world.
The Mercator map, which has been in common use since the 16th Century, has come in for criticism as it shows Africa as similar in size to Greenland, even though it is 14 times larger.
Critics say this leads to the development needs and potential for countries near the equator to be minimised.
The Mercator map was designed in 1569 by the Flemish cartographer Gerardus Mercator to help European explorers navigate across the world.
The distortion of his map is a result of the fact that it is impossible to accurately represent the surface of a globe on a two-dimensional chart.
Whenever a map of the world is drawn, compromises need to be made.
The Mercator map shows the curvature of the Earth by making countries near the equator seem smaller than they are, with countries nearer the poles appearing bigger.
In an effort to correct this, a team of cartographers in 2018 created an equal area map they called the Equal Earth projection.
In February, the AU's 54 member states adopted it, and said it "more accurately represents the sizes of all continents, particularly Africa".
Online campaign group #CorrectTheMap said: "You could fit the United States, China, India, Japan, Mexico and much of Europe into Africa and still have land to spare."
Ahead of Friday's vote, Togolese Foreign Minister Robert Dussey told the Reuters news agency: "A fair world begins with a fair map."
Earlier he had told a UN briefing: "A map is never neutral. It shapes perceptions, influences how the place of peoples and continents in the world is understood."
He had the backing of the French Foreign Minister Jean-Noël Barrot, who said his ministry was going to stop using the Mercator map, external.
"Changing the map obviously doesn't change the world. But correcting a representation that distorts it is already an act of truth," he said.
But Yaryna Ferencevych, a US representative at the UN, said the resolution mocked the work and purpose of the UN General Assembly, external.
"Instead of focusing on genuine problems of international peace, prosperity, or good relations, this body is debating map projects from the 16th Century, and their role in promoting reparations and 'cognitive justice'," she said.
In March, the US was also critical when a resolution was adopted declaring the transatlantic slave trade "the gravest crime against humanity".
"Africa's misrepresentation on world maps is not just a cartographic error - it's a narrative issue," Lerato Mogoatlhe from Africa No Filter, one of the groups behind the campaign to ditch the Mercator map, told the BBC.
It was part of efforts to stop the "world's longest misinformation and disinformation" about Africa, she said.
For Kenyan geographer Kioko Muendo, the Mercator map has implicitly downplayed the African continent's vast resources, population and investment opportunities.
"Maps are more than just guides for travellers - they shape how regions are perceived politically and economically," he told the BBC.
More BBC news from Africa:
What is Ebola and why is stopping the latest outbreak so difficult?
- Published25 August
Go to BBCAfrica.com, external for more news from the African continent.
Follow us on Twitter @BBCAfrica, external, on Facebook at BBC Africa, external or on Instagram at bbcafrica, external`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/ce30vp55dnlo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-05T00:53:11+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/1f88/live/bff197b0-a874-11f1-b109-879e35c24276.png",
    readTime: 2,
  },
  {
    id: "germany-s-far-right-afd-bids-for-first-t-6c93631b",
    title: "Germany's far-right AfD bids for first taste of power in eastern vote",
    titleJa: "ドイツの極右政党AfD、東部投票で初の権力体験を目指す",
    summaryJa: "ドイツの極右政党AfD、東部投票で初の権力体験を目指す- 公開されました",
    bodyOriginal: `Germany's far-right AfD bids for first taste of power in eastern vote
- Published
Germany is holding its breath this weekend as there is a seismic election in the country's east.
The Alternative für Deutschland party is aiming to secure a majority in the regional parliament of Saxony-Anhalt.
An outright win would mark the first time a far-right party has held state-level power in the nation's post-war era.
For the AfD's opponents, this is a point of serious peril. But the party sees it as a stepping stone towards its dreams of nationwide power.
This is an election that could change German history.
The result could also spell fresh trouble for embattled conservative (CDU) Chancellor Friedrich Merz, as rumours persist about whether he can see out his term in office.
Booed during recent public appearances, Merz is hardly seen as an electoral asset.
Perhaps the chancellor regrets a pledge to halt the rise of the far right, given that the exact opposite has happened.
By contrast, the charismatic AfD lead candidate in the state - Ulrich Siegmund - appears to have enjoyed dominating discussion and media coverage.
Dubbed "Germany's Most Dangerous Man" by Der Spiegel magazine, he has brushed off reports that people previously in the neo-Nazi scene are among those to hold influential roles around him.
The 35-year-old can often be seen, including in his own many social media posts, amongst adoring crowds or happily riding a retro East German scooter.
A lingering nostalgia for the past, alongside an acute dissatisfaction with the present, has fed the party's popularity in its eastern strongholds.
Voters voice frustration with immigration, public safety, Germany's struggling economy, high energy costs and aid being sent abroad to countries like Ukraine.
Some people I have spoken to passionately believe that the AfD is offering a real chance for radical change - and say Ulrich Siegmund has given them hope.
Other supporters are less certain, but say they have lost faith with mainstream parties that have dominated politics for decades.
An AfD lawmaker once told me that if they got a shot at regional government, then people would see the "sky won't fall in".
Some of the movement's detractors may disagree. Its plans, for Saxony-Anhalt, are highly controversial within Germany.
The party wants to segregate child refugees into special classes: "The refugee children should be given the message that their stay in Germany is only temporary."
The manifesto claims that "sexual deviations and non-reproductive lifestyles" have been aggressively promoted over "normal family" structures.
LGBT rainbow flags should be banned from being flown at schools, the party argues, while children should be taught less about the Nazis and more about positive aspects of German history.
On immigration, a task-force would be set up as part of plans to detain and deport migrants who no longer have the right to be in the state, while the party also calls for an end to "illegal, culturally alien" mass migration.
The AfD's pro-Russia sympathies have also sparked claims that it cannot be trusted with sensitive intelligence. When a Russian army mug was spotted in the office of leading AfD figure Hans-Thomas Tillschneider in Saxony-Anhalt, he said it was just a souvenir, and "it's not our war".
That was as Berlin, this week, publicly blamed Moscow for a failed drone attack on Leipzig/Halle Airport. The Kremlin has denied involvement.
Meanwhile, German security sources have warned that Russian-backed disinformation campaigns, often against AfD rivals, have been escalating - something Moscow's representatives describe as "anti-Russian hysteria".
State-level governments hold significant powers over areas including local education, policing and culture, while their delegates sit in the federal government's second chamber – the Bundesrat.
An AfD government in Saxony-Anhalt would be able to implement changes locally and gain a louder voice on the national stage.
The party remains strongest in the former communist east Germany but it is also leading the polls nationwide.
That is despite warnings that it has morphed from a Eurosceptic party, founded in 2013, into one that flirts with, or attracts, extremist support.
At one AfD rally, we saw a man wearing a T-shirt that read Arisch - the German word for Aryan that the Nazis used to promote their false theories of a master race.
We do not know whether the man was a party supporter, a member or merely an attendee. He would not talk to us.
Saxony-Anhalt is one of several states where the party is officially classed as right-wing extremist.
Domestic intelligence charges the local branch with being infused by a "racist ideology" and anti-constitutional aims.
The AfD, which says it is a conservative, libertarian movement, dismisses these designations as politicised smears and rejects any comparisons with National Socialism.
Ulrich Siegmund has not ruled out getting rid of domestic intelligence (BfV) in the state if the AfD wins a majority.
Other parties won't go into coalition with the AfD, as part of what is known as the Brandmauer or firewall that keeps the far right from government.
That is why it must seek a parliamentary majority in order to be sure of securing power.
In Saxony-Anhalt, it is no longer about creating cracks in the firewall but rather trying to bypass it altogether.
Pulling that off will likely depend on whether other, smaller parties get enough votes in order to pass a 5% threshold that allows them to enter parliament.
Politics is maths and Germany is no different, even if the maths can be quite convoluted.
But if the AfD does score a decisive victory, then a party that uses anti-establishment rhetoric to grow its support will face a test it has never faced before.
Grievances could still be laid at the door of the federal government in Berlin, but the AfD would no longer solely be able to rail against those in office because it would be in office itself.
Saxony-Anhalt may be a relatively small state, by population, but it is about to host one hell of an election.`,
    bodyJa: `ドイツの極右政党AfD、東部投票で初の権力体験を目指す
- 公開されました
ドイツは今週末、同国東部で衝撃的な選挙が行われるため固唾を飲んでいる。
「ドイツのための選択肢」党は、ザクセン・アンハルト州議会で過半数の獲得を目指している。
完勝すれば、戦後初めて極右政党が国家レベルの権力を掌握したことになる。
AfDの反対派にとって、これは重大な危険点だ。しかし、党はこれを全国的な権力の夢への足がかりとみなしている。
これはドイツの歴史を変える可能性のある選挙です。
また、この結果は、任期を最後までやり遂げられるかどうかについての噂が根強いため、苦境に立たされている保守党（CDU）首相フリードリヒ・メルツにとって新たな困難を引き起こす可能性もある。
最近の公の場でブーイングを浴びたメルツ氏は、選挙の有力者とはほとんど見られていない。
おそらく首相は、極右の台頭を阻止するという公約を後悔しているだろう。それは、全く逆のことが起こったことを考えるとだろう。
対照的に、同州のカリスマ的なAfD筆頭候補であるウルリッヒ・ジークムント氏は、圧倒的な議論とメディア報道を楽しんでいるように見える。
デア・シュピーゲル誌から「ドイツで最も危険な男」と称された同氏は、かつてネオナチの現場にいた人々が彼の周囲で影響力のある役割を担う人物の一人であるという報道を一蹴した。
35歳の彼は、自身の多くのソーシャルメディア投稿を含め、熱狂的な群衆の中で、またはレトロな東ドイツのスクーターに楽しそうに乗っている姿がよく見られる。
現在への強い不満とともに残る過去への郷愁が、東部の本拠地での党の人気を高めている。
有権者は移民、治安、ドイツ経済の低迷、エネルギーコストの高さ、ウクライナなどの国外への援助物資への不満の声を上げている。
私が話をした人の中には、AfDが根本的な変化をもたらす真のチャンスを提供していると熱烈に信じており、ウルリッヒ・ジークムントが彼らに希望を与えてくれたと言う人もいる。
他の支持者らは確信が持てないが、何十年も政治を支配してきた主流政党への信頼を失ったと主張する。
AfD議員はかつて私に、もし地方政府に挑戦できれば、人々は「空は落ちてこない」と思うだろうと語った。
この運動を批判する人の中には、これに同意しない人もいるかもしれない。ザクセン・アンハルト州に対するその計画は、ドイツ国内で非常に物議を醸している。
同党は、難民の子どもたちを特別なクラスに隔離することを望んでおり、「難民の子どもたちには、ドイツでの滞在は一時的なものにすぎないというメッセージを与えられるべきである」としている。
マニフェストは、「通常の家族」構造よりも「性的逸脱と非生殖ライフスタイル」が積極的に推進されてきたと主張している。
同党は、LGBTの虹色の旗を学校で掲揚することを禁止すべきであり、その一方で子供たちにはナチスについてよりもドイツの歴史の肯定的な側面についてもっと教えるべきだと主張している。
移民問題では、州に滞在する権利を失った移民を拘束し国外追放する計画の一環として特別委員会が設置される予定だが、同党はまた、「違法で文化的に異質な」大量移民の停止も求めている。
AfDの親ロシア的な姿勢は、機密情報を持ったAfDは信頼できないという主張も引き起こしている。ザクセン・アンハルト州のAfD指導者のハンス・トーマス・ティルシュナイダー氏のオフィスでロシア軍のマグカップが発見されたとき、同氏はそれは単なる記念品であり、「これは私たちの戦争ではない」と述べた。
それはベルリンが今週、ライプツィヒ・ハレ空港への無人機攻撃が失敗したとしてモスクワを公に非難したときのことだった。クレムリンは関与を否定している。
一方、ドイツの治安筋は、ロシアが支援する偽情報キャンペーンがエスカレートしており、ロシア政府の代表者らはこれを「反ロシア・ヒステリー」と表現していると警告した。
州レベルの政府は地方の教育、警察、文化などの分野で大きな権限を持っており、その代議員は連邦政府の第二院である連邦参議院に座している。
ザクセン・アンハルト州のAfD政権は地元で変革を実行し、国家舞台でより大きな声を得ることができるだろう。
同党は旧共産主義国の東ドイツで依然として最強だが、全国の世論調査でもリードしている。
2013年に設立された欧州懐疑派の政党から、過激派に媚びたり、過激派の支持を集めたりする政党に変貌したとの警告があったにもかかわらずだ。
あるAfD集会で、ナチスが支配民族に関する誤った理論を宣伝するために使用したアーリア人を意味するドイツ語「アーリッシュ」と書かれたTシャツを着た男性を見た。
その男性が党の支持者だったのか、党員だったのか、それとも単なる出席者だったのかは不明だ。彼は私たちに話しかけようとしませんでした。
ザクセン アンハルト州は、同党が公式に右翼過激派に分類されているいくつかの州のうちの 1 つである。
国内諜報機関は、地元支部が「人種差別的イデオロギー」と反憲法的目的を注入されていると非難している。
AfDは保守的で自由主義的な運動であると主張し、これらの呼称を政治化された中傷として却下し、国家社会主義とのいかなる比較も拒否している。
ウルリッヒ・ジークムント氏は、AfDが過半数を獲得した場合、州内の国内情報機関（BfV）を排除する可能性を排除していない。
他の政党は、極右を政府から遠ざけるブランドマウアー、またはファイアウォールとして知られるものの一環として、AfDと連立を組むつもりはない。
だからこそ、確実に権力を確保するには議会の過半数を獲得する必要がある。
ザクセン アンハルト州では、もはやファイアウォールに亀裂を入れるのではなく、ファイアウォールを完全に回避しようとしています。
それを達成できるかどうかは、他の小規模政党が議会への参入を許可する5％の基準を通過するのに十分な票を獲得できるかどうかにかかっています。
政治は数学であり、たとえ数学が非常に複雑であるとしても、ドイツも例外ではありません。
しかし、AfDが決定的な勝利を収めた場合、反体制のレトリックを利用して支持を拡大している政党は、これまでに経験したことのない試練に直面することになる。
不満は依然としてベルリンの連邦政府の門前に提出される可能性があるが、AfD 自体が政権を握ることになるため、もはや単に政権の人々を非難することはできないだろう。
ザクセン・アンハルト州は人口的には比較的小さい州かもしれないが、これからとんでもない選挙が開催されることになる。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cvgypkzgy4wo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-04T23:07:23+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/80f2/live/23835360-a882-11f1-824a-0fc4c5d895ae.jpg",
    readTime: 7,
  },
  {
    id: "mistrial-declared-in-lindsay-clancy-murd-c2ea84b6",
    title: "Mistrial declared in Lindsay Clancy murder case, after jury deadlocks",
    titleJa: "リンゼイ・クランシー殺害事件、陪審が行き詰まりの末に有罪宣告",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Mistrial declared in Lindsay Clancy murder case, after jury deadlocks
- Published
Warning: This story contains distressing details and discussion of attempted suicide
A Massachusetts judge has declared a mistrial in the murder case against Lindsay Clancy after jurors, who deliberated for about a week, conceded they would not be able to unanimously decide whether she should be held criminally liable for killing her three young children.
The case against Clancy has both captivated and heavily divided the American public, even spurring remarks from the US president.
There was a sense of disbelief in the courtroom as the case - and Clancy's future - are now left in limbo.
Clancy's lawyer led a dramatic last-ditch attempt to halt the mistrial and force a verdict, which was unsuccessful. A hearing later this month could establish what happens next in the case.
What happens next after Lindsay Clancy's murder case ends in a mistrial?
- Published43 minutes ago
Key moments from Lindsay Clancy's trial over children's killings
- Published7 hours ago
"At this point, I'm going to declare that the jury is deadlocked, and I'm going to declare a mistrial," Judge Sullivan told the jury on Friday, dismissing them after weeks of testimony, nearly a week mulling Clancy's fate and the panel signalling three times that they were deadlocked.
The deadlock - known as a hung jury - does not mean prosecutors have proven their case, nor does it mean the defendant is not guilty.
A hearing was scheduled for 29 September, where prosecutors could outline their next steps in the case.
Meanwhile, the 36-year-old former nurse will remain held on the same murder charges and maintain staying in the mental health facility where she is housed now.
Prosecutors could decide from a host of options on what happens next, including holding another trial or coming to a plea agreement with Clancy over the strangulation of her children, Cora, 5, Dawson, 3, and Callan, eight months - in their Massachusetts home.
After killing the children, Clancy cut herself with a knife and jumped from a second-story window in an attempt to take her own life, which has left her paralysed.
Clancy does not deny killing the children in 2023 but pleaded not guilty to the three first-degree murder charges, with her lawyers arguing she was suffering from postpartum psychosis and should not be held criminally responsible.
The grim case led to a series of dramatic twists and turns as the jury deliberated Clancy's fate.
On Friday, court began with Clancy's attorney Kevin Reddington pushing for a juror on the panel to be removed, after the jury indicated a day prior in a note that a member of the panel was not following instructions on reasonable doubt.
Under US law, a jury must unanimously believe "beyond a reasonable doubt" that someone is guilty in order to convict them of a crime.
The designation is the strictest standard in the US legal system. It places the burden on the government to prove that the accused is guilty, and not the accused to prove their innocence.
Judge Sullivan denied the request and sent jurors back to deliberate. About an hour later, the panel came back to say they still could not reach a verdict.
It was then that Judge Sullivan said he had no choice but to declare a mistrial. Reddington immediately pleaded for a temporary pause so they could file an emergency appeal with the Massachusetts Supreme Judicial Court.
In the filing, Reddington asked the state's highest court to order the judge to force the jury to continue deliberation and for the judge to question the panel over the alleged holdout juror that led to the deadlock.
The state's high court denied the request, paving the way for the mistrial.
Clancy appeared downcast as the judge made the ruling official. It was surprisingly silent in courtroom.
She remained expressionless but her lawyer looked visibly upset by the decision. He continued to push back, insisting the judge had the power to dismiss the one holdout juror.
"Unfortunately, they're not holding out based on a good-faith issue," he said.
Reddington said he intended to file another motion, which essentially requests for the mistrial to be reconsidered. This could come up at the next hearing later this month.
The mistrial came after six weeks of court proceedings and after jurors deliberated for more than 40 hours over seven days.
"There will be no decisions made today," Plymouth County District Attorney Timothy Cruz said on Friday on what could happen next in the case.
He said he would meet with the rest of their legal team to decide whether they will pursue a new trial.
"The facts are Lindsay Clancy killed her three children and the evidence suggested to us that she was in control of her actions when she committed those homicides," he said.
Outside the court on Friday, Reddington said he believed 11 of the 12 jurors would have delivered a verdict that favoured Clancy, had it not been for the one holdout.
But it remains unclear what position any member of the jury took or what talks looked like in the deliberation room.
For weeks the case gripped the country and sparked debate over the topic of postpartum psychosis. Many followed along with livestreams of the trial, as family members and experts testified. Each day, more than 200 members of the media crowded the court and groups of supporters in varying sizes often gathered outside.
The widespread attention even spurred comments on Friday from US President Donald Trump, who called the case a "horrible tragedy".
"She did a horrible, horrible thing. Can't be worse," he said at the White House. "I assume there's going to be another trial."
"But you'll find out what the price to pay is," Trump added. "There'll be a price."
If you are suffering distress or despair and need support, you could speak to a health professional, or an organisation that offers support. Details of help available in many countries can be found at Befrienders Worldwide. www.befrienders.org.
In the UK a list of organisations that can help is available at bbc.co.uk/actionline.
Related topics
- Published19 August`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.
Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cpwlrj2je1po?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-04T22:48:38+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/bb8c/live/47cc3ed0-a7ab-11f1-b78b-6b70b0a83270.jpg",
    readTime: 2,
  },
  {
    id: "bloom-energy-was-just-named-to-the-s-p-5-ef311095",
    title: "Bloom Energy was just named to the S&P 500. These other stocks are joining the index as well.",
    titleJa: "ブルーム・エナジーはS&P 500に選ばれたばかりです。これらの他の銘柄も同様に指数に加わります。",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Molson Coors Beverage, Builders FirstSource and Trade Desk will be getting the boot from the benchmark index.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/s-p-500-changes-are-coming-soon-these-stocks-could-be-named-to-the-index-today-2d0d7c14?mod=mw_rss_topstories",
    publishedAt: "2026-09-04T21:46:00+00:00",
    category: "エネルギー",
    imageUrl: "https://images.mktw.net/im-48239036",
    readTime: 2,
  },
  {
    id: "judge-weighs-how-to-dismiss-reflecting-p-34ab88e2",
    title: "Judge weighs how to dismiss Reflecting Pool vandalism charge against Olympian",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `A Washington judge on Friday said he will rule quickly on whether to dismiss a now-discredited indictment charging former U.S. Olympic canoeist David Hearn with vandalizing the Lincoln Memorial Reflecting Pool with prejudice, which would bar prosecutors from refiling charges against Hearn for the same alleged conduct in a case that has drawn intense focus from President Donald Trump.
Prosecutors, who admit there are no current grounds to sustain a criminal case against Hearn, urged Judge Todd Edelman at a hearing to dismiss the indictment in D.C. Superior Court without prejudice.
That would let prosecutors ask a grand jury to charge Hearn again if new evidence were discovered implicating him in vandalizing the pool.
"I do think there is a public interest in allowing a grand jury at a future date" to issue an indictment if new information comes to light, Assistant U.S. Attorney Michael Spence told Edelman, according to reporting by MS NOW.
But Hearn's lawyer, Steve Levin, argued, "There is nothing that can save the case that was dismissed."
"There is no valid reason to keep it alive, to hold it over Mr. Hearn's head for the next five years," Levin told Edelman.
At the end of the nearly hour-long hearing, Edelman said, "I'm going to take this under advisement."
"Won't take long to issue a ruling," the judge added.
Hearn, speaking to reporters after the hearing, said, "I just want to thank everyone who's out here supporting me and everyone across the country."
"I want to thank my lawyers for making sure that this case is represented well, and I just want to say it's not about me," Hearn said. "This is about defending democracy."
During the hearing, Edelman questioned the speed with which prosecutors obtained their indictment against Hearn while knowing they had not yet received all of the information from the Department of the Interior about the installation of a new pool liner.
Hearn, 67, was indicted in early July on a charge of destruction of property for what U.S. Attorney Jeanine Pirro said was intentionally and "violently" damaging of a two-square-foot piece of liner from the Reflecting Pool on June 19. The three-time Olympian faced a possible maximum sentence of 10 years in prison if convicted.
Hearn, after his arrest on an initial misdemeanor charge in the case in June, told The Washington Post that he had stopped at the Reflecting Pool after a long bicycle ride to look at it and reached into the water to feel a partially detached piece of blue liner.
"I didn't vandalize anything," Hearn told The Post. "I didn't destroy or break or peel anything. By the time I realized what was going on, I was being put in handcuffs."
In late July, Pirro asked Edelman to dismiss the indictment without prejudice.
Pirro said then that, despite her prior allegations against Hearn, her office had learned from the Department of Interior that damage to the pool's sealant resulted from a "flawed installation," not Hearn pulling it up.
Trump at the time reacted angrily to Pirro's move, writing in a Truth Social post, "I disagree 100% with Jeanine Pirro, the U.S. Attorney for the District of Columbia, on the Reflecting Pool."
"I don't know what she was thinking?" the president wrote. "To me, it was a pure case of VANDALISM."
Trump has made the renovation of the Reflecting Pool, along with the building of a White House ballroom, a triumphal arch overlooking Washington, and other construction projects a focal point of his second term as president.
At Friday's hearing, Hearn's lawyer Levin argued to Edelman that a dismissal with prejudice was required to protect Hearn from being indicted again on baseless charges.
"I think it's clear why they moved to dismiss the case, because they had no case," Levin said.
"The court has the obligation to ensure that the government doesn't abuse its prosecutorial discretion," Levin said. "The question is: why are they reserving [the right] to reindict a case they acknowledge should have never been indicted?"
Levin accused Pirro's office of acting in bad faith.
Spence, the prosecutor, told Edelman that prosecutors had acted in good faith and argued that "I do think there is a public interest in allowing a grand jury at a future date" to bring new information if it comes to light.
Spence confirmed, when questioned by the judge, that whatever Hearn might have done at the pool had no economic impact on the Reflecting Pool's liner and as a result did not constitute destruction of property.
Edelman then asked Spence whether, given that fact, there could ever be an economic loss that could lead to a renewed prosecution of Hearn.
"I don't know what the future will bring. None of us do," Spence replied. He added that if more evidence was found, prosecutors wanted to be able to lodge charges again.
"There's no reason this court should tie the hands of a future grand jury," Spence said.
Edelman then brought up Trump's public comments about Hearn, blaming the canoeist, not contractor error, for the damage to the Reflecting Pool's liner despite Pirro's statement to the contrary and evidence from the Interior Department.
Edelman asked Spence how the judge could look at Trump's statements as anything other than the president telling prosecutors to "pursue a prosecution that you told me is meritless?"
The prosecutor replied: "I think the president's statements speak for themselves. At the end of the day, the president can remove the U.S. Attorney … he can remove me if he so chooses."`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.
Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/04/reflecting-pool-hearn-doj-trump-pirro.html",
    publishedAt: "2026-09-04T20:22:09+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "longtime-fox-news-host-maria-bartiromo-d-ade8760b",
    title: "Longtime Fox News host Maria Bartiromo disputes reports of termination",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Maria Bartiromo is disputing reports that she was terminated from her longtime gig as a host of various segments for cable TV networks Fox News and Fox Business.
"The irresponsible reports that have been published stating that Maria Bartiromo was fired or is no longer an employee of Fox are absolutely and unequivocally false," her attorney said in a Friday statement. "Make no mistake, we have the receipts and witnesses and they will come out whether through the courthouse or otherwise. Those reporting her firing or the incredulous facts supporting that fiction have exhibited a complete and utter reckless disregard for the truth."
Fox News, in response to Bartiromo's comments Friday, said its brief statement from a day earlier "speaks for itself."
On Thursday, Fox Corp.'s Fox News Media announced Bartiromo had parted ways with its networks.
"We thank Maria for her work over the last 12 ½ years and wish her all the best on her next chapter," Fox News said in Thursday's statement, without providing reasoning or cause for her departure.
Various media outlets have since reported that Bartiromo was fired for violating company policy.
A former CNBC anchor, Bartiromo led the daily show "Mornings with Maria," as well as the Friday program "Maria Bartiromo's Wall Street," on Fox Business Network. She also led Fox News' "Sunday Morning Futures." The conservative network Fox News is the top-rated cable TV news channel in the U.S.
Bartiromo was one of the Fox News anchors named in the Dominion Voting Systems defamation case in which the company accused Fox of making false on-air allegations that Dominion had helped rig the 2020 presidential election when Donald Trump lost to Joe Biden.
While Bartiromo was scheduled to testify as a witness if the lawsuit went to trial, Fox agreed to pay $787.5 million to settle the lawsuit in 2023. Fox faces a similar ongoing defamation lawsuit with Smartmatic USA, in which Bartiromo is also a defendant.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/04/maria-bartiromo-fox-news-termination.html",
    publishedAt: "2026-09-04T20:17:13+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "micron-is-doubling-down-on-ai-memory-chi-3be14263",
    title: "Micron is doubling down on AI memory chips. That could pay off big time for investors.",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Micron is reportedly increasing production capacity of a more profitable memory offering that’s in high demand due to AI.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/micron-is-doubling-down-on-ai-memory-chips-that-could-pay-off-big-time-for-investors-da9e7f5e?mod=mw_rss_topstories",
    publishedAt: "2026-09-04T20:12:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-319090",
    readTime: 2,
  },
  {
    id: "tesla-s-stock-drops-6-as-cybercab-update-c9b3993a",
    title: "Tesla's stock drops 6% as Cybercab update 'underwhelms' Wall Street",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Tesla shares slid 6% on Friday after the electric vehicle maker's long-awaited Cybercab update failed to impress investors who are betting the company can become a major player in the U.S. robotaxi market currently dominated by Alphabet's Waymo.
The Cybercab, which Tesla first showed off almost two years ago, has been in production since April. It's a bronze-colored, two-seat robotaxi with scissor, or butterfly, doors and no steering wheel or pedals.
Tesla held an event Thursday in Austin, Texas, but it was invite-only, wasn't streamed and CEO Elon Musk never made an appearance. The company said users of its Tesla Robotaxi ride-hailing app could now catch a driverless trip in a Cybercab within a "geofenced" area around Austin.
Analysts at RBC Capital Markets wrote in a note on Friday that Tesla had only "offered limited new incremental disclosure relative to prior announcements, with key outstanding questions around pricing, production cadence, and regulatory approvals remaining open."
"The event lacked a public livestream — a notable departure from Tesla's traditionally theatrical product reveals," wrote the analysts, who recommend buying Tesla shares.
Also on Thursday, the National Highway Traffic Safety Administration initiated an "audit query" to determine if Tesla had properly self-certified the Cybercab as safe for use on public roads, and in compliance with applicable federal safety standards.
The stock's drop on Friday follows a 5.4% gain on Thursday ahead of the event.
Wells Fargo analysts published a note with the headline "TSLA Cybercab Launch Event Underwhelms" and noted that the company's Austin robotaxi service is "facing early execution issues." Users have shared videos and complaints about Tesla Robotaxi routing errors, missed destinations and excessive wait or ride times.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/04/teslas-stock-drops-as-cybercab-update-underwhelms-nhtsa-probe.html",
    publishedAt: "2026-09-04T20:06:13+00:00",
    category: "自動車",
    imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    readTime: 2,
  },
  {
    id: "trump-s-peace-envoys-to-visit-moscow-and-40215e7d",
    title: "Trump's peace envoys to visit Moscow and Kyiv over weekend",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Trump's peace envoys to visit Moscow and Kyiv over weekend
- Published
US negotiators Steve Witkoff and Jared Kushner will visit Russia and Ukraine this weekend, as efforts to end the war appear to be gathering pace.
Ukraine's Volodymyr Zelensky confirmed he will meet the envoys on Sunday, after they visit Moscow on Saturday to hold talks with Russian President Vladimir Putin.
Witkoff and Kushner have led US President Donald Trump's efforts to broker a peace deal, but a gulf remains between the two warring sides.
"They are bringing with them a proposal to end the war," Trump told reporters when asked about the visits.
Earlier on Friday, Zelensky said a Russian drone hit the office of Ukraine's security chief Oleksandr Poklad in Kyiv. Poklad appears to be unharmed.
In a post on social media, Zelensky said he had ordered Poklad, who head the SBU security service, to respond "adequately" to the attack.
Witkoff and Kushner, Trump's son-in-law, have visited Russia multiple times, but the purported talks will be the first in Ukraine.
Zelensky said he would guarantee the safety of Russian airspace during the envoys' visit and called for Russia to do the same for Ukraine.
Russia's state news agency Tass said Witkoff and Kushner were "expected to arrive in Moscow and then to Kyiv... on 5-6 September", quoting a source.
Kremlin spokesman Dmitry Peskov later told reporters: "I wouldn't announce anything, but when these contacts take place, we will inform you."
Meanwhile, Putin told an international economic forum on Thursday that "there are chances" a peace deal could be reached.
"First of all, Moscow and Kyiv must agree between themselves," he said.
But he showed no sign of backing down from his maximalist demands, which included more territorial concessions from Ukraine.
Kyiv and its European allies have repeatedly rejected Putin's terms saying they are tantamount to capitulation.
Russia launched a full-scale invasion of Ukraine in February 2022, and currently controls about 20% of its territory.
- Published3 days ago`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c23x0z48x0no?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-04T20:03:52+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/0e39/live/bcf0df00-a86d-11f1-bbad-43eaf67b94b6.jpg",
    readTime: 2,
  },
  {
    id: "here-s-what-s-worth-streaming-in-septemb-54a61281",
    title: "Here’s what’s worth streaming in September 2026 on Netflix, Hulu, HBO Max and more",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Prices are rising again, but a slew of fan-favorite shows — including Apple’s ‘Slow Horses,’ Netflix’s ‘The Gentlemen’ and Paramount’s ‘MobLand’ — are returning for new seasons`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/heres-whats-worth-streaming-in-september-2026-on-netflix-hulu-hbo-max-and-more-a702e7dd?mod=mw_rss_topstories",
    publishedAt: "2026-09-04T20:00:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-62390842",
    readTime: 2,
  },
  {
    id: "why-oracle-s-stock-looks-like-a-compelli-19750b74",
    title: "Why Oracle’s stock looks like a compelling buy ahead of earnings",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `While there are long-term debates around Oracle’s stock, analysts say the company looks poised to benefit from upbeat pricing trends and more when it reports results next week.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/why-oracles-stock-looks-like-a-compelling-buy-ahead-of-earnings-12a04d7b?mod=mw_rss_topstories",
    publishedAt: "2026-09-04T19:59:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-38729129",
    readTime: 2,
  },
  {
    id: "trump-says-he-will-spend-up-to-500-milli-35f70a4b",
    title: "Trump says he will spend up to $500 million of 'my money' to help Republicans in midterms",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `President Donald Trump said Friday that he plans to spend as much as $500 million from his political operation to help Republicans with about two months to go before the November midterm elections.
"I think I have like close to a billion dollars in the super PAC, and I'm allocating probably four or $500 million," Trump told reporters in the Oval Office. "We're going to spend a lot of money because we don't want to lose our country."
Republicans in competitive House and Senate races have been waiting for Trump's political action committee, MAGA Inc., to ramp up spending. Some GOP officials and strategists had reportedly grown concerned that massive war chest would remain on the sidelines.
MAGA Inc. reported $403.45 million in cash on hand as of July 31, according to its latest Federal Election Commission filing, less than half of the "close to a billion dollars" Trump said was available. The group has spent sparingly, about $21 million, since the beginning of 2025, including $1.7 million on independent expenditures.
Still the MAGA Inc. PAC's funding is larger than the cash reserves of any of the major party committees, according to the Associated Press. The group has begun some battleground-state activity, including paying for an event headlined by Vice President JD Vance in Michigan this week, but has yet to deploy anything close to the amount Trump outlined Friday with the election less than two months away.
Moving into November, Trump said he would personally weigh where to direct support, including toward Republican candidates he believes can win competitive races.
"I'm going to spend whatever amount of money necessary to try and help us," Trump said. "This is my money that I control."
The money is not Trump's personal money. The FEC lists MAGA Inc. as an "unauthorized" hybrid PAC, meaning it doesn't solicit donations on behalf of a specific candidate. Its "non-contribution account" can accept unlimited donations and finance independent spending supporting or opposing candidates, but those funds cannot be contributed directly to candidates.
Trump also said he expects money to remain after November and he could use it in 2028. Federal rules do not require MAGA Inc. to spend down its balance this cycle, allowing the group to retain funds for political activity in future elections or other authorized uses.
Friday's spending pledge builds on Trump's stated plans to become more involved in the closing stretch of the midterms. He said Wednesday that he would make "a lot of stops" campaigning for Republican House and Senate candidates and pledged to travel to Alaska to support Sen. Dan Sullivan.
"I'm going to help a lot of the congressmen and senators that need help," Trump said Friday.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/04/trump-maga-inc-500-million-republicans-midterm-elections.html",
    publishedAt: "2026-09-04T19:57:35+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "there-s-a-new-record-number-of-401-k-mil-01e9a36d",
    title: "There’s a new record number of 401(k) millionaires as retirement savings hold at all-time highs",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Retirement savings hovered at record highs in the second quarter, pushing the number of 401(k) millionaires to a record as investors focused on their long-term goals despite persistent anxiety about the broader economy, Fidelity Investments said Thursday.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/theres-a-new-record-number-of-401-k-millionaires-as-retirement-savings-hold-at-all-time-highs-94f2c520?mod=mw_rss_topstories",
    publishedAt: "2026-09-04T19:52:00+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.mktw.net/im-91155215",
    readTime: 2,
  },
  {
    id: "europe-targeted-by-spiralling-campaign-o-202bc5be",
    title: "Europe targeted by spiralling campaign of sabotage - and Russia is the chief suspect",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Europe targeted by spiralling campaign of sabotage - and Russia is the chief suspect
- Published
As summer temperatures in Europe smashed records and many politicians shifted to holiday mode, Russia remained focused on its war.
Not only did its military attacks across Ukraine intensify last month, becoming ever more deadly for civilians, Russia also appears to have escalated its sabotage campaign across Europe.
This time, military and defence sector sites were the prime target.
A full month after drones packed with explosives were found at Leipzig's airport, used by Ukraine to transport military goods, Germany's interior minister has declared that "Russia is responsible".
Russia's President Vladimir Putin is demanding proof, as always, and his officials call the accusation "absurd".
But the drones were just a dramatic start. August then brought a series of suspicious fires at defence facilities from Italy to Estonia.
Some of the affected countries have already blamed Russia; others are still investigating and some fires may eventually be ruled accidental, exactly as such attacks are designed to seem.
Poland's interior minister is clear.
"There are many, many signals that Russia is changing its strategy and intensifying its activities, including terrorist and sabotage activities," Marcin Kierwiński said, warning people to be on their guard.
Germany says Russia behind Leipzig airport drone attack
- Published3 days ago
August campaign across Europe
4 August Germany: The first drone at Leipzig airport is discovered.
10 August Bulgaria: A major fire breaks out at a warehouse of defence firm EMCO in Tryavna. In a statement, the company recalled previous blasts at its facilities which were investigated for links to Russia. "Human error is excluded," it said.
13 August Italy: A fire at KNDS Ammo Italy outside Rome triggers a large explosion.
The local prosecutor is looking into possible outside interference, La Repubblica newspaper reports. Publicly, his office will only confirm that a case has been opened for negligent disaster against "unknown persons".
15 August Estonia: The Milrem Robotics factory in Tallinn, which the Kyiv Post says supplies drones to Ukraine, goes up in flames. Two suspects are arrested.
Estonian Prime Minister Kristen Michal says the possibility of Russian sabotage is being "taking seriously" by investigators.
25 August Slovakia: Police announce they have averted an arson attack on a Ukrainian-owned drone manufacturer and seized a "large amount of incendiary mixture". The firm itself blames Russia and police arrest three suspects who they say were "following orders". Slovakia is Russia's close ally in Europe.
30 August Poland: A country which is heavily targeted for sabotage reports two more fires.
One is in Lublin at a company which produces helicopter components. Prime Minister Donald Tusk said arson "cannot be ruled out".
An attack on the drone producer, WB Group, is clearer cut. A masked man is caught on CCTV throwing incendiary devices. Tusk calls it a "continuation of Russia's escalatory activities".
The pattern has continued into September with two Bulgarians arrested in Munich, Germany, for suspected arson after throwing incendiary devices from a car at defence firm Rhode & Schwartz.
Separately, police say they are hunting a climate extremist suspected of sabotage attacks this week on power substations in western Germany.
Why is this happening now?
Attacks on military and defence targets are not new, although previous acts of sabotage linked to Russia include more puzzling targets - such as an Ikea store and a Polish paint store.
The novelty now is the concentration of cases.
"The intensity of military sites being attacked we've seen over the past couple of weeks is unusual," Daniela Richterova of the Department of War Studies at King's College says.
She links the spike to developments in Russia's invasion of Ukraine.
"We've basically seen Ukraine take the war to Russia and strike deep inside Russian territory…They [Moscow] are under pressure, they have to do something."
Whilst some sabotage is staged to sow chaos or fear, Richterova believes the Kremlin's aim right now is "coercive signalling": pressuring countries to stop supporting Kyiv by raising the stakes.
After a slow start, Germany is Ukraine's biggest supplier of military aid.
There are other theories.
To some, Russia is less concerned about "turning off the taps" of supplies to Ukraine and more about testing Nato for weaknesses.
"Russia is probing the boundaries of what's acceptable and collecting information on the results. They find out what works, and what's vulnerable," argues Keir Giles from the Chatham House think tank.
He sees the sabotage campaign as preparation for the "next phase", as he puts it, of Russia's aggression in Europe.
"They're assessing the willingness of the victim country to actually do something about it."
The International Institute for Strategic Studies (IISS), which tracks sabotage cases, points to a previous surge in 2024 when Ukraine's allies began allowing it to use Western-supplied weapons deeper inside Russia.
2024 was the year of the parcel bomb plot, when Russia was accused of sending packages containing liquid explosive to the UK and Poland.
One ignited shortly before it was loaded on to a DHL cargo plane. It is thought this was a test run for something significantly bigger.
"That was a marked high in terms of their willingness to inflict mass casualties," Giles adds.
It was a step so serious, the White House contacted the Kremlin to tell it to stop. Russia had probed and found the limit.
But the attacks have continued. German media on Friday quoted a federal police report that lists more than 165 suspected sabotage cases nationwide this year, though they don't say who is responsible.
Who are the suspected saboteurs?
Reports from Germany suggest the men who loaded and launched the drones at Leipzig's airport were Russian, and at least one may have entered the country specially for this job.
That would be unusual.
The vast majority of sabotage attacks in Europe have been carried out by Russian proxies: its so-called "gig economy saboteurs".
They are usually Russian-speakers from former Soviet states, recruited online and driven by the cash, not political conviction.
In one case the BBC reported from Poland, the saboteurs-for-hire had previously fought for Ukraine as volunteers.
The "handlers" are generally thought to remain in Russia, co-ordinating operations online.
The IISS likened the proxies they used to kamikaze drones: cheap and easy to launch in large numbers, but disposable.
The amateurs can be sloppy or reckless, though. In the parcel plot, one man failed to find a pick-up point and the whole mission had to be aborted.
So if Moscow did send professionals for the Leipzig drone launch, it suggests it wanted precision - and success.
In fact, the devices appear to have malfunctioned.
Nato faced with Soviet-style campaign
Russia's sabotage operations seem to come from the Cold War playbook. Daniela Richterova's research shows very similar targets on Soviet sabotage lists, and agents-saboteurs were used in much the same way.
The idea, she says, was to have small, deniable attacks in peace-time that would escalate in times of war.
"I think we are still in the grey zone between the two, but the kind of attacks we've seen in the past weeks shrink that zone," she says. "And I think that increases the risk of what happens next."
As Nato scrambles to respond, questions like how many small, individual attacks add up to a sustained Russian assault - and demand action - remain unanswered.
Perhaps riskier than all is the potential for escalation by accident.
What if the exploding parcel had gone off mid-air and caused a crash? What if the Leipzig drone had brought down a plane?
"I think it could result in a big attack," Richterova says. "Then Nato, in this heightened security environment, would not be able to ignore that, and have to react."`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.
Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c5y4g6meekro?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-04T16:49:15+00:00",
    category: "自動車",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/f3a3/live/c697e520-a841-11f1-aed2-8d6da8d75094.jpg",
    readTime: 2,
  },
  {
    id: "trump-tells-fed-to-slash-rates-or-he-ll-2750c77b",
    title: "Trump tells Fed to slash rates or he'll end trade with countries with U.S. surpluses",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `President Donald Trump on Friday demanded that the Federal Reserve slash interest rates or else he will cut off trade with countries with which the U.S. maintains trade deficits.
Trump issued the sweeping ultimatum in a Truth Social post reacting to a much-stronger-than-expected monthly jobs report by urging the central bank and its chairman, Kevin Warsh, to "get smart" and cut rates.
Read Trump's full post:
Great jobs number just announced, breaking all estimates (except mine!) by double and triple - And you haven't seen anything yet! EMPLOYERS ADDED 162,000 JOB IN AUGUST. Lower the interest rates because the U.S.A. is a much stronger credit than it was just a short time ago! A STRONG COUNTRY MEANS A LOWER INTEREST RATE - IT'S A BETTER CREDIT…Very simple! We should have the LOWEST RATE of any country in the World, like "the old days." Without the United States agreeing to allow them their big surpluses, and we could stop that immediately, they would no longer be considered financially ELITE! LOWER THE RATE OR I'LL STOP TRADING WITH COUNTRIES WITH WHICH WE HAVE A DEFICIT, which the U.S. Supreme Court, in its ridiculous and very costly Tariff decision, strongly acknowledged "the President" has an absolute right to do. IT'S BETTER THAN TARIFFS! The Fed Board, with its great new leader, must get smart - BE PATRIOTS for a change. High interest rates put the U.S.A. at a very unfair disadvantage, and I won't allow that to happen! President DONALD J. TRUMP
The Fed declined to comment on Trump's post.
Taken at face value, the threat to end trade with deficit-harboring countries is extreme: The U.S. has large deficits with dozens of countries, including its top trading partners. The White House did not immediately respond to CNBC's request for additional information on the post.
The message nevertheless shows Trump resuming his pressure campaign against the Fed, which had eased since the appointment of Warsh, his handpicked successor to Jerome Powell.
The post comes two months before the midterm elections, where Americans' unhappiness with persistent high inflation has been a dominant theme.
Trump has long sought lower interest rates and frequently complains about U.S. deficits with other countries.
A week earlier, however, Warsh suggested in a speech that rate hikes could soon be on the table. The Fed chair said he is committed to bringing the inflation rate back down to the central bank's 2% target, "Short-term interest rates are the predominant tool to achieve the dual mandate."
On Thursday, Vice President JD Vance called for lower rates, arguing it would be the "proper and responsible" response to recent U.S. inflation data.
National Economic Council Director Kevin Hassett, asked about interest rates on CNBC on Friday morning, said, "the Fed will do what it wants to do. We respect their independence, but I think the argument for holding steady would be pretty strong."`,
    bodyJa: `ドナルド・トランプ大統領は金曜日、連邦準備理事会（FRB）に対し利下げを要求、さもなければ米国が貿易赤字を維持している国々との貿易を断つと述べた。
トランプ大統領は、予想をはるかに上回った月次雇用統計を受けて、トゥルース・ソーシャルへの投稿で徹底的な最後通告を発し、中央銀行とケビン・ウォーシュ議長に対し「賢明になって」利下げするよう求めた。
トランプ氏の投稿全文を読む:
すばらしい求人数が発表され、すべての見積もり (私のものを除く!) を 2 倍、3 倍も上回っています。そして、まだ何も見ていません。雇用主は 8 月に 162,000 件の雇用を追加しました。米国の信用は少し前に比べてはるかに強くなっていますので、金利を下げてください。強い国は金利が低いことを意味します - それはより良い信用です…非常に簡単です! 「昔」のように、世界のどの国よりも低いレートでなければなりません。米国が彼らの巨額の黒字を認めることに同意しなければ、そして我々がそれを直ちに中止することができなければ、彼らはもはや経済的にエリートとはみなされないでしょう！金利を下げるか、そうでなければ赤字を抱えている国との貿易をやめる。米国最高裁判所は、ばかげた非常に費用のかかる関税判決で、「大統領」には絶対的な権利があると強く認めた。関税よりもお得です!素晴らしい新しい指導者を迎えたFRB理事会は賢明にならなければならず、変化のために愛国者にならなければなりません。高金利により米国は非常に不当な不利な状況に置かれていますが、私はそのようなことが起こることを許しません。ドナルド・J・トランプ大統領
FRBはトランプ氏の投稿についてコメントを控えた。
額面どおりに受け取れば、赤字国との貿易を停止するという脅威は極めて深刻です。米国は、主要な貿易相手国を含む数十カ国と多額の赤字を抱えています。ホワイトハウスは、この投稿に関する追加情報を求めるCNBCの要請にすぐには応じなかった。
それにもかかわらず、このメッセージは、トランプ大統領が、ジェローム・パウエル氏の後継者として厳選したウォーシュ氏の任命以来緩和していたFRBに対する圧力キャンペーンを再開したことを示している。
この投稿は、高インフレの持続に対するアメリカ国民の不満が主要なテーマとなっている中間選挙の2か月前に投稿された。
トランプ大統領は長年金利引き下げを求めており、米国の対他国赤字について頻繁に不満を述べている。
しかしその１週間前、ウォーシュ氏は講演で利上げが間もなくテーブルに上る可能性があると示唆した。 FRB議長はインフレ率を中銀の目標である2％に戻すことに尽力していると述べ、「短期金利は二重の責務を達成するための主要な手段だ」と語った。
木曜日、JD・バンス副大統領は、最近の米国のインフレ統計に対する「適切かつ責任ある」対応となると主張し、金利引き下げを求めた。
国家経済会議のケビン・ハセット委員長は金曜午前、ＣＮＢＣで金利について質問され、「ＦＲＢはやりたいことをやるだろう。われわれはＦＲＢの独立性を尊重するが、据え置きを求める主張はかなり強いだろう」と述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/04/trump-fed-rates-jobs-trade.html",
    publishedAt: "2026-09-04T16:08:11+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 3,
  },
  {
    id: "here-s-how-people-are-building-their-nes-d68e808f",
    title: "Here’s how people are building their nest eggs using ‘rent and invest’ strategies",
    titleJa: "人々が「賃貸と投資」戦略を使用して巣の卵をどのように構築しているかは次のとおりです",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Also in Weekend Reads: The disrupted bond market, a warning for traders who borrow money, and advice from the Moneyist.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/heres-how-people-are-building-their-nest-eggs-using-rent-and-invest-strategies-253b069e?mod=mw_rss_topstories",
    publishedAt: "2026-09-04T15:57:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-53528010",
    readTime: 2,
  },
  {
    id: "wbna-commissioner-cathy-engelbert-to-ret-e3a3decc",
    title: "WBNA Commissioner Cathy Engelbert to retire at the end of 2026",
    titleJa: "WBNAコミッショナーのキャシー・エンゲルバート氏、2026年末に退任へ",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `WNBA Commissioner Cathy Engelbert will retire at the end of 2026, the league announced on Friday.
The decision comes as the league has experienced unprecedented growth, but Engelbert has faced criticism from some players over her leadership.
A successor has not yet been named.
"In 2019, I had the privilege of being appointed the league's first commissioner and to lead a league with enormous potential yet untapped awareness and significant undervaluation. Over the years, it has been amazing to watch WNBA players thrive and lead the massive cultural surge around women's sports," Engelbert said in a statement.
During her tenure, the league has seen huge spikes in television viewership, game attendance, corporate sponsorship and franchise valuations. Viewership has jumped roughly 454% and attendance has climbed about 70% since 2019, according to the WNBA.
"Cathy has presided over the WNBA through the most significant period of growth in the league's 30-year history," said NBA Commissioner Adam Silver. "We are grateful for Cathy's leadership and unwavering commitment to the advancement of women's basketball."
The average WNBA team is now worth $460 million, according to CNBC's Official WNBA Team valuations for 2026. The Golden State Valkyries, which joined the league in 2025, were the first women's team in any sport to be valued at $1 billion.
Engelbert oversaw the league's expansion from 12 to 18 teams by 2030. She also helped negotiate a landmark collective bargaining agreement earlier this year, leading to the biggest pay increases in the WNBA's history.
"Being able to have your worth tied mostly in your salary is all that we've been fighting for, and it's what we were able to achieve," WNBPA President Nneka Ogwumike told CNBC Sport in an interview.
Yet Engelbert's time as commissioner was often overshadowed by her rocky relationship with some players over compensation, officiating issues, and her response to racism and online harassment. Many WNBA players have argued the benefits the league offers and its protections for its players have failed to keep pace with the boom in attention on the WNBA.
"We have the best players in the world. We have the best fans in the world. But, right now, we have the worst leadership in the world," Minnesota Lynx player Napheesa Collier famously said about Engelbert last year.
Most recently, concerns have grown that Engelbert failed to respond appropriately to political protests over transgender women playing sports, which began to overshadow the league's season in recent weeks. There are no known trans players in the WNBA.
In her statement, Engelbert said she is grateful to WNBA and NBA team owners, staff, players, investors and fans who believed in what the league could become.
"I retire knowing we have built something bigger, stronger and more enduring than we could have imagined, she said. "I retire with immense gratitude and tremendous optimism for the future of the WNBA, with the best yet to come," she added.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/04/wbna-commissioner-cathy-engelbert-to-retire-at-the-end-of-2026-.html",
    publishedAt: "2026-09-04T15:56:07+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    readTime: 2,
  },
  {
    id: "labor-day-marks-the-start-of-fallcations-4887d030",
    title: "Labor Day marks the start of 'fallcations' as wealthy travelers avoid summer crowds",
    titleJa: "裕福な旅行者が夏の混雑を避けるため、レイバーデーは「フォールケーション」の始まりを示す",
    summaryJa: "新しい調査によると、富裕層は夏の混雑を避けるために休暇を9月と10月に移し続けており、秋が贅沢旅行の新たなピークシーズンとなっている。世界的な高級旅行ネットワークの Virtuoso によると、秋の高級旅行や体験の予約は前年比 59% 増加し、売上は 69% 急増しました。 9月は現在ピーク月であり、売上高は77%増加しています。 10 月と 11 月の売上はそれぞれ 54% と 71% 増加しました。",
    bodyOriginal: `Fall is the new peak season for luxury travel, as the wealthy continue to shift their holidays to September and October to avoid the summer crowds, according to a new study.
Fall bookings for luxury travel and experiences are up 59% compared with last year, while sales surged 69%, according to Virtuoso, the global luxury travel network. September is now a peak month, with sales up 77%. October and November sales are up 54% and 71%, respectively.
Virtuoso calls it the "fallcation," with the wealthy moving their typical summer getaways to autumn.
"Especially for the high-net-worth and ultra-high-net-worth group, we're seeing huge gains for fall this year," said Misty Belles, vice president at Virtuoso. "September is really eclipsing August. That shoulder season is no longer really a shoulder season. It's becoming a peak season unto itself."
While the shift to fall has been happening for years, it accelerated in 2025 and 2026, travel experts said.
Summer heat waves in Europe have made travel in July or August increasingly unpleasant. Growing wealth and the shift in spending from goods to experiences have fueled more luxury travel and ever-growing crowds in popular destinations like southern Italy and France. Top hotels and restaurants are often fully booked and charging ever higher prices, making a summer trip to Europe often an exercise in disappointment.
Demographics also play a role. Most wealth is now held by baby boomers, who are often retired and enjoying global travel. Gen Xers are joining them, since their kids are often grown and are no longer tied to the school calendar. Add in the millennial and Gen Z digital nomads, who aren't tied to the office, and the population of wealthy travelers who can ditch the traditional summer months in favor of fall is growing.
"Wealthy travelers have more experience. They have experienced destinations in the summer," Belles said. "They know it's hot. They know it's crowded. They know it's not often the best time to see a destination, so they're shifting over to fall because the lines are going to be shorter, less crowded and the temperatures are more moderate."
The most popular destinations for wealthy Americans this fall are largely in Europe, according to Virtuoso. Paris is the top destination, followed by the Amalfi Coast, the French Riviera, Tuscany and then New York. London, Lake Como, Maui and Rome are also popular.
There are signs, however, that the fallcation is recreating some of same problems travelers are trying to avoid in the summer. Hotel rates in Europe for September are now close to summer rates, with some charging even more, travel experts said. Average daily hotel rates are up 131% in the Greek Isles, 78% in Puglia and 179% in the French Riviera, according to Virtuoso.
Crowds in Southern Europe could start to rival July and August, especially in wealthier resorts.
"I don't think they're expecting no crowds," Belles said. "But they are expecting a better experience than they would see in the summer and I think that's going to continue for a while."
Belles recommended traveling in November to avoid the September and October crowds, although November bookings are also up 70%.
More broadly, demand for luxury travel is pushing up high-end hotel rates around the world. Bookings at hotels charging $1,500 or more per night are up 37% compared with last year. Luxury international hotels now average $1,653 a night, up from $985 in 2019, according to Virtuoso.
"Rates are growing at a faster clip [for luxury] than the lower-rate hotels, so that tells us there is a premium placed on the experience," Belles said. "The demand is certainly strong."`,
    bodyJa: `新しい調査によると、富裕層は夏の混雑を避けるために休暇を9月と10月に移し続けており、秋が贅沢旅行の新たなピークシーズンとなっている。
世界的な高級旅行ネットワークの Virtuoso によると、秋の高級旅行や体験の予約は前年比 59% 増加し、売上は 69% 急増しました。 9月は現在ピーク月であり、売上高は77%増加しています。 10 月と 11 月の売上はそれぞれ 54% と 71% 増加しました。
ヴィルトゥオーゾ氏は、富裕層が典型的な夏の休暇を秋に移すことを「フォールケーション」と呼んでいる。
「特に富裕層と超富裕層のグループにとって、今年の秋は大きな利益が見られる」と、バートゥオーソの副社長、ミスティ・ベルズ氏は語った。 「9月は本当に8月を覆い尽くしています。あの肩の季節はもはや本当の肩の季節ではありません。それ自体がピークシーズンになりつつあります。」
旅行専門家らによると、秋への移行は何年も続いていたが、2025年と2026年には加速したという。
ヨーロッパの夏の熱波により、7月または8月の旅行はますます不快なものになっています。富の増大とモノからコトへの支出の変化により、贅沢な旅行が増加し、南イタリアやフランスなどの人気の目的地での観光客が増え続けています。人気のホテルやレストランは満室であることが多く、さらに高い料金を請求されているため、ヨーロッパへの夏の旅行は失望することがよくあります。
人口動態も影響します。現在、富のほとんどは団塊の世代が保有しており、彼らは退職して世界旅行を楽しむことが多い。彼らの子供たちは成長し、学校のカレンダーに縛られなくなっていることが多いため、X 世代も彼らに加わっています。オフィスに縛られないミレニアル世代やZ世代のデジタル遊牧民を加えると、伝統的な夏を避けて秋を迎えることができる裕福な旅行者の人口が増加している。
「裕福な旅行者はより多くの経験を持っています。彼らは夏に旅行先を経験しているのです」とベルズ氏は言う。 「彼らは暑いことを知っています。混雑していることを知っています。目的地を訪れるのに最適な時期はあまりないことを知っているので、列が短くなり、混雑も減り、気温も穏やかになるため、秋にシフトしているのです。」
ヴィルトゥオーゾ氏によると、この秋、米国の富裕層に最も人気のある目的地は主にヨーロッパだという。旅行先のトップはパリ、次いでアマルフィ海岸、コート・ダジュール、トスカーナ、そしてニューヨークとなっています。ロンドン、コモ湖、マウイ、ローマも人気です。
しかし、旅行者が夏に避けようとしているのと同じ問題のいくつかが秋の休暇によって再現されている兆候があります。旅行専門家らによると、ヨーロッパの9月のホテル料金は現在、夏の料金に近く、一部のホテルではさらに高い料金を請求しているという。 Virtuoso によると、1 日あたりのホテルの平均宿泊料金は、ギリシャ諸島で 131%、プーリア州で 78%、フレンチ リビエラで 179% 上昇しています。
南ヨーロッパの群衆、特に裕福なリゾートでは、7月と8月に匹敵し始める可能性がある。
「彼らは観客が集まらないとは予想していないと思う」とベルズ氏は語った。 「しかし、彼らは夏よりも良い経験を期待しており、それはしばらく続くと思います。」
ベルズ氏は9月と10月の混雑を避けるために11月の旅行を推奨したが、11月の予約も70％増加した。
さらに広く言えば、贅沢な旅行への需要が世界中で高級ホテルの宿泊料金を押し上げています。 1泊あたり1,500ドル以上のホテルの予約は昨年と比べて37％増加した。 Virtuosoによると、国際的な高級ホテルの平均宿泊料金は現在1,653ドルで、2019年の985ドルから上昇している。
「（高級ホテルの）料金は低料金のホテルに比べて急速に上昇している。このことは、体験が重視されていることを物語っている」とベルズ氏は語った。 「需要は確かに強いです。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/04/fall-travel-wealthy-europe.html",
    publishedAt: "2026-09-04T14:42:14+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 4,
  },
  {
    id: "surprisingly-strong-us-jobs-figures-fuel-8e0ff0cd",
    title: "Surprisingly strong US jobs figures fuel rate rise bets",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Surprisingly strong US jobs figures fuel rate rise bets
- Published
A boost in hospitality and education employment drove the US economy to create tens of thousands more jobs than expected last month, latest figures suggest.
The number of roles added to the world's biggest economy increased by 162,000 in August, almost triple the 56,000 forecast by analysts.
The stronger jobs figures are likely to add to growing expectations that the Federal Reserve will increase interest rates later this month.
But President Donald Trump urged the Fed to cut rates saying the US should have the "LOWEST RATE of any country in the World".
"The Fed Board, with its great new leader, must get smart - BE PATRIOTS for a change. High interest rates put the U.S.A. at a very unfair disadvantage, and I won't allow that to happen!", Trump said in a post on social media, external.
Last week, Kevin Warsh, chairman of the US central bank, signalled that rates could be hiked if policymakers were not confident price rises were easing for Americans.
Inflation, which measures price increases over time, remains above the Fed's 2% annual target, with prices up 3.4% in the past 12 months, according to the latest data.
The next interest rate decision will be made on 15-16 September. Rates were left unchanged between 3.5% and 3.75% in July for the fifth time in a row, but concerns over inflation remain due to the ongoing conflict between the US and Iran, which has caused as surge in global oil prices.
On Friday, US diesel prices hit an all-time high of $5.85 a gallon on average, compared to $3.71 a year ago.
But despite the cost of living rising, wages also appear to be increasing. In August, average hourly earnings for all employees were $37.75 on average, having increased 3.1%.
"Even the most committed dove would struggle to find anything in the August employment report to justify keeping interest rates unchanged," said Stephen Brown, chief North America economist at Capital Economics.
He added that the strength in the jobs market meant that the latest inflation figures released next week would only need to be moderately above the Fed's target to fuel expectations of a September hike.
"A hike in rates just became a bit more likely," said Neil Birrell, chief investment office of investment firm Premier Miton.
Just over 60% of traders were betting on an interest rate hike in September, according to CME Group's "FedWatch" data.
An increase in employment during the final month of the summer in restaurants and bars, as well as in local government education ahead of the new school year, was behind August's labour market rebound.
Weaker job figures released earlier in the summer were revised up by the US Bureau of Labor Statistics, revealing a stronger labour market than previously thought. Instead of the economy being deemed to have shed 23,000 jobs in July, some 44,000 were found to have been created in subsequent estimates.
While many more jobs were added, the US unemployment rate remained unchanged at 4.1% last month, with seven million out of work. Both measures have changed little over the year.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cy0zx2pkpx9o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-04T14:38:19+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/2654/live/080d87e0-a85f-11f1-ae45-e9984fc27c77.jpg",
    readTime: 2,
  },
  {
    id: "u-s-payrolls-rose-162-000-in-august-much-ad9aa852",
    title: "U.S. payrolls rose 162,000 in August, much more than expected; unemployment rate at 4.1%",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "米国経済は8月に速いペースで雇用を追加し、夏の雇用低迷を反転させた一方、失業率は横ばいでした。同月の非農業部門雇用者数は季節調整済みで16万2,000人増加し、失業率は予想通り4.1％で安定したと労働統計局が金曜日に発表した。ダウ・ジョーンズが調査したエコノミストは５万３０００人の給与増加を期待していた。",
    bodyOriginal: `The U.S. economy added jobs at a brisk pace in August, reversing a summer slowdown in hiring, while the unemployment rate held steady.
Nonfarm payrolls rose a seasonally adjusted 162,000 for the month while the unemployment rate, as expected, held steady at 4.1%, the Bureau of Labor Statistics reported Friday. Economists surveyed by Dow Jones had been looking for a payrolls increase of 53,000.
August's total was the strongest monthly gain since March.
"Net, net, the labor market is alive and well and generating thousands of new jobs to help keep economic growth squarely in the plus column," said Chris Rupkey, chief economist at Fwdbonds.
The report was consistent with what Federal Reserve officials have called a stable labor market, and likely turns the central bank's focus to next week's reports on consumer and producer prices as the final determinant heading into the interest rate decision in less than two weeks.
Stock market futures moved mostly lower after the release while Treasury yields, particularly at the short end where Fed policy has its greatest impact, rose sharply.
Following the consensus beat on the report, markets edged toward the possibility of a rate hike for the Fed. Traders were still pricing in about 60% odds of a quarter percentage point increase at the central bank's policy meeting Sept. 15-16, according to the CME Group's FedWatch tool.
"An upside surprise in payrolls will likely ramp up concerns about a rate hike, but that outcome is in the hands of next week's inflation numbers," said Ellen Zentner, chief economic strategist at Morgan Stanley Wealth Management. "If those come in cooler than expected, the Fed will likely feel comfortable discounting potentially inflationary signals coming out of the labor market."
President Donald Trump called the August report a "great jobs number" and said the Fed should lower rates, not hike.
"The Fed Board, with its great new leader, must get smart - BE PATRIOTS for a change," Trump said in a social media post. "High interest rates put the U.S.A. at a very unfair disadvantage, and I won't allow that to happen!"
The president further threatened to cut off trading with countries with which the U.S. has a deficit unless the Fed cuts. The U.S. has a deficit with more than 90 nations.
"LOWER THE RATE OR I'LL STOP TRADING WITH COUNTRIES WITH WHICH WE HAVE A DEFICIT, which the U.S. Supreme Court, in its ridiculous and very costly Tariff decision, strongly acknowledged 'the President' has an absolute right to do," Trump wrote.
Policymakers generally watch the unemployment rate more closely for the health of the labor market, and that has held consistent for the past several years and is actually down 0.2 percentage point from a year ago. There was good news on that front as well, as the jobless level held steady even with a 0.2 percentage point increase in the labor force participation rate, a measure of those either employed or looking for jobs.
The household survey, which is used to calculate the unemployment rate, showed an increase of employment totaling 569,000 and a surge of 683,000 into the labor force.
An alternative measure of unemployment that counts discouraged workers and those holding part-time jobs for economic reasons fell to 7.7%, down 0.2 percentage point to its lowest level since June 2025.
In addition to the solid August gain, prior months saw upward revisions: July showed a gain of 21,000 jobs, swinging positive from a loss of 23,000, while June was revised up to a gain of 31,000, or an increase of 11,000.
Unlike previous months, job gains were fairly broad-based.
Restaurants and bars led with 59,000 new jobs, while government education rose by 42,000 and manufacturing contributed 16,000. Health care, the primary engine of job growth, saw a gain of just 13,000, compared with the monthly average of 32,000 over the prior 12 months.
There was some evidence of artificial intelligence hitting employment rolls: Information-related industries reported a loss of 23,000, putting the 12-month average at a loss of 8,000.
Average hourly earnings rose 0.3%, in line with the consensus, while the annual increase of 3.1% was 0.1 percentage point ahead of expectations.
Market expectations for where rates are headed have swung in recent days.
Following remarks last week by Fed Chairman Kevin Warsh, traders priced in a strong expectation that the Federal Open Market Committee would hike its benchmark rate by a quarter percentage point when it meets Sept. 15-16.
However, remarks this week from Governor Christopher Waller, as well as other officials, have made the outlook less certain. The FOMC has not adjusted the federal funds rate since three cuts in the latter part of 2025.
Policymakers have expressed a far greater concern with inflation, which has run above the Fed's 2% target for the past 5½ years.
The jobs report sets the stage for the BLS readings on producer and consumer prices, scheduled for Thursday and Friday, respectively.
Waller said he would be in favor of staying on hold as long as the reports show inflation moderating on a monthly basis. New York Fed President John Williams earlier this week told CNBC that he is in "wait-and-see" mode on the data, while Governor Michael Barr also indicated that as long as inflation is "moderating," he would be content to stay on hold.
However, both Barr and Waller said they'd be ready to raise if the data doesn't cooperate.`,
    bodyJa: `米国経済は8月に速いペースで雇用を追加し、夏の雇用低迷を反転させた一方、失業率は横ばいでした。
同月の非農業部門雇用者数は季節調整済みで16万2,000人増加し、失業率は予想通り4.1％で安定したと労働統計局が金曜日に発表した。ダウ・ジョーンズが調査したエコノミストは５万３０００人の給与増加を期待していた。
８月の合計は３月以来の月間上昇率として最大だった。
フォワードボンズの首席エコノミスト、クリス・ラプキー氏は「労働市場は純然たる活況を呈しており、何千人もの新規雇用を生み出しており、経済成長をプラス圏に維持するのに貢献している」と述べた。
この報告書は、FRB当局者が労働市場の安定と呼んでいるものと一致しており、おそらく中銀の焦点は、2週間以内に迫った金利決定に向けた最終決定要因として、消費者物価と生産者物価に関する来週の報告書に移る可能性が高い。
この発表後、株式市場先物はほぼ下落したが、米国債利回りは、特にFRBの政策が最も大きな影響を与える短期金利で急上昇した。
この報告書に対するコンセンサスビートを受けて、市場はFRBの利上げの可能性に少しずつ傾いた。 ＣＭＥグループのフェドウォッチツールによると、トレーダーらは９月１５─１６日の中銀政策会合で４０％ポイント利上げが行われる確率を依然として約６０％織り込んでいる。
モルガン・スタンレー・ウェルス・マネジメントの首席経済ストラテジスト、エレン・ゼントナー氏は「雇用統計の上振れで利上げへの懸念が高まる可能性が高いが、その結果は来週のインフレ統計次第だ」と述べた。 「予想よりも低調な結果であれば、FRBは労働市場から発せられる潜在的なインフレシグナルを安心して割り引くだろう。」
ドナルド・トランプ大統領は8月の報告書を「素晴らしい雇用統計」と呼び、FRBは利上げではなく利下げをすべきだと述べた。
トランプ大統領はソーシャルメディアへの投稿で「偉大な新指導者を迎えたFRB理事会は賢明にならなければならない。変化のために愛国者にならなければならない」と述べた。 「高金利により米国は非常に不当な不利な状況に置かれており、私はそんなことは許さない！」
大統領はさらに、FRBが削減しない限り、米国が赤字を抱えている国との貿易を打ち切ると脅した。米国は90カ国以上と赤字を抱えている。
トランプ大統領は「利下げをしなければ、赤字国との貿易をやめる。米国最高裁判所は、ばかばかしく非常に費用のかかる関税判決で、『大統領』にはその絶対的な権利があると強く認めた」と書いた。
政策立案者は一般に、労働市場の健全性のために失業率をより注意深く監視しており、その失業率は過去数年間一貫して維持されており、実際には1年前に比べて0.2パーセントポイント低下している。この面でも朗報があり、就業者または求職者の指標である労働参加率が0.2パーセントポイント上昇したにもかかわらず、失業率は安定していた。
失業率の計算に使用される家計調査では、合計56万9,000人の雇用が増加し、労働人口として68万3,000人が急増したことが示された。
意欲を失った労働者や経済的理由でパートタイムの仕事をしている労働者をカウントする代替失業率は7.7％に低下し、0.2ポイント低下して2025年6月以来の最低水準となった。
8月の堅調な増加に加えて、それまでの月も上方修正が見られました。7月は21,000人の雇用増と、23,000人の減少からプラスに転じましたが、6月は31,000人の増加、つまり11,000人の増加に上方修正されました。
前月とは異なり、雇用の増加はかなり広範囲に及んだ。
レストランとバーが5万9,000人の新規雇用をもたらし最も多く、政府教育が4万2,000人増加し、製造業が1万6,000人増加した。雇用増加の主な原動力であるヘルスケア部門は、過去12カ月間の月平均3万2,000人に対し、わずか1万3,000人の増加にとどまった。
人工知能が雇用者数に打撃を与えているという証拠がいくつかあり、情報関連産業は 23,000 人の損失を報告し、12 か月平均では 8,000 人の損失となった。
平均時給は０．３％増とコンセンサスと一致し、年間３．１％増は予想を０．１ポイント上回った。
金利の先行きに関する市場の予想はここ数日変動している。
FRBのケビン・ウォーシュ議長の先週の発言を受けて、トレーダーらは連邦公開市場委員会が9月15、16日の会合で基準金利を0.5％引き上げるとの強い期待を織り込んでいる。
Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/04/jobs-report-august-2026.html",
    publishedAt: "2026-09-04T14:19:02+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 5,
  },
  {
    id: "analysis-lower-treasury-yields-could-req-3ad6d71d",
    title: "Analysis: Lower Treasury yields could require a weaker economy. Trump won't fix them",
    titleJa: "分析: 国債利回りの低下は経済の低迷を必要とする可能性がある。トランプは問題を解決しないだろう",
    summaryJa: "ホワイトハウス自身が債券利回りを引き下げようとしているにもかかわらず、ドナルド・トランプ大統領の政権の政策が債券利回りを高く維持するのに役立っている。 80歳の大統領が地位を変える可能性は低いため、米国人は金利緩和に必要な政策を好まないかもしれない。つまり、経済の低迷により借入コストは下がるが、米国の成長は阻害されるというものだ。中央銀行や準備預金保有者が一部の民間部門に比べて買い手としての立場を退いており、米国債の投資家層はここ数年で価格に敏感になっている。そうした世界的な投資家の中には、トランプ政権下の政策変更が経済状況を悪化させる影響を及ぼしているため、米国債を敬遠し始めている人もいる。これは、赤字支出の洪水と人工知能の構築に資金を提供する国債発行の急増との間で資本を巡る競争の兆候がすでに見えている市場にとって、これは不快な展開だ。",
    bodyOriginal: `President Donald Trump's administration's policies are helping keep bond yields higher despite the White House's own attempts to lower them. With the 80-year-old president unlikely to change his spots, Americans may not like what it could take to provide interest-rate relief: a weaker economy that cools borrowing costs but undercuts U.S. growth.
The investor base for U.S. debt has become more price-sensitive over the years as central banks and reserve holders have stepped back as buyers relative to parts of the private sector. Some of those global investors are starting to shun U.S. debt because policy changes under Trump have had the effect of worsening the economics for them. That is an uncomfortable turn for markets that are already seeing signs of a competition for capital between the flood of deficit spending and the surge of debt issuance funding the buildout of artificial intelligence.
The yield on the 10-year U.S. Treasury note has risen by roughly three quarters of a percentage point in the past six months. Lately it has hovered near 4.8%, the highest yield of the second Trump administration, despite efforts to bring it down. The Treasury Department will start next week to increase its buybacks of some long-term U.S. debt, an effort designed to improve liquidity in the market. Investors have also raised interest rates as they try to infer how new Federal Reserve Chairman Kevin Warsh will react to inflation that remains above the Fed's 2% target.
"Of course, everybody wants to ask for a bit more price to lend money to the U.S.," Ludovic Subran, chief investment officer and chief economist for Allianz, a European insurer and asset manager, said in an interview.
That judgment isn't political — it's "pure economics," Subran said.
Subran ticked off a set of factors he says have come to add something resembling credit risk to U.S. debt: "soaring [federal budget and trade] deficits, Fed unfazed by inflation, Treasury tampering with markets." He doesn't necessarily believe the U.S. will default on its debts, but he said Allianz — like many other global investors — has had to pay more to hedge its bets in the U.S.
The U.S. is projected to hit its $41.1 trillion debt limit between late-winter and mid-summer 2027.
This year, "we also have decided not to find duration in the U.S. fixed-income market like before, because it's not interesting," Subran said.
After accounting for inflation and hedging, "we were not making money," he said.
The rise in yields is a source of aggravation for Americans already frustrated by affordability problems. Mortgage rates have risen to nearly 6.8%. Mortgage rates move with the 10-year Treasury yield. So do auto loans and other forms of consumer debt.
Political risks to yields persist
There is little sign of easing in the political factors pushing up yields. A fall in oil prices might bring some relief, but an end to the Iran war remains elusive. There is no appetite in Washington to make the political compromises that would ease deficit spending. A meeting of global finance ministers and central bankers in North Carolina this week produced political shots at Canada. Coordinated action to ease borrowing costs wasn't on the agenda.
Meanwhile, some large holders are looking to move out of Treasurys into higher-yielding debt. Norway's massive sovereign wealth fund is considering shifting roughly $80 billion of its portfolio now in government debt into other parts of the bond market such as mortgage-backed securities.
Meanwhile U.S. government borrowing continues to rise. The Congressional Budget Office recently had to revise up its expectations for the deficit this fiscal year to $2.1 trillion, a figure that is likely to exceed 6% of gross domestic product. That is an enormous volume of borrowing outside crisis times.
AI is driving major new corporate borrowing, too. JP Morgan estimates that five major tech firms, Nvidia, and special-purposes vehicles those companies use to backstop data-center leases have issued about $320 billion in debt so far this year.
"Hyperscalers are issuing so much debt that they may be causing a supply-demand issue at the long end of the yield curve," Michael Cembalest, chairman of market and investment strategy for J.P. Morgan Asset Management, wrote to clients this week.
That isn't necessarily a bad thing. AI is a bright spot in a U.S. economy hurting for sources of growth. GDP grew by 1.5% in the second quarter, a weaker-than-expected figure that is likely being dragged down by the sharp slowdown in immigration into the U.S. after Trump's crackdown. The labor market has also showed unusual moves lately. Friday's report that payrolls grew by 162,000 comes against a longer-term environment where firms are reluctant to hire or fire.
Competition in the debt market could drive an innovation boom as firms vie for the market's favor. It's too early to make a definitive judgment, but the possibility of that kind of growth and productivity boom is one explanation for the rise in real yields, which adjust for inflation.
The 10-year TIPS yield — a Treasury instrument that accounts for inflation — has risen by 67 basis points over just the past six months, to 2.43% on Thursday, according to FactSet data. Breakevens, which measure inflation, have been flat over the same period.
The rise in real yields is "more of a reflection of the strength of the economy," New York Federal Reserve President John Williams told CNBC Wednesday. Some people want to read the rise in yields as dragging on the economy, but that logic is backward, he said.
"It's not really about financial conditions affecting the economy. It's more about the economy affecting financial conditions," Williams said.
The flip side of Williams' analysis is that it may take an economic slowdown for borrowing costs to cool. But that isn't a solution anyone would want to root for.`,
    bodyJa: `ホワイトハウス自身が債券利回りを引き下げようとしているにもかかわらず、ドナルド・トランプ大統領の政権の政策が債券利回りを高く維持するのに役立っている。 80歳の大統領が地位を変える可能性は低いため、米国人は金利緩和に必要な政策を好まないかもしれない。つまり、経済の低迷により借入コストは下がるが、米国の成長は阻害されるというものだ。
中央銀行や準備預金保有者が一部の民間部門に比べて買い手としての立場を退いており、米国債の投資家層はここ数年で価格に敏感になっている。そうした世界的な投資家の中には、トランプ政権下の政策変更が経済状況を悪化させる影響を及ぼしているため、米国債を敬遠し始めている人もいる。これは、赤字支出の洪水と人工知能の構築に資金を提供する国債発行の急増との間で資本を巡る競争の兆候がすでに見えている市場にとって、これは不快な展開だ。
１０年米国債利回りは過去６カ月間で約４分の３％ポイント上昇した。金利引き下げ努力にもかかわらず、最近では第２次トランプ政権時代の最高利回りである４．８％付近で推移している。財務省は来週、市場の流動性向上を目的とした一部長期米国債の買い戻し拡大に着手する。投資家らはまた、連邦準備制度理事会のケビン・ウォーシュ新議長がFRBの目標である2％を依然として上回るインフレにどのように反応するかを推測しようとして金利を引き上げている。
欧州の保険会社兼資産運用会社アリアンツの最高投資責任者兼チーフエコノミスト、ルドヴィク・スブラン氏はインタビューで「当然、誰もが米国への融資にもう少し高い価格を求めたいと考えている」と語った。
その判断は政治的なものではなく、「純粋な経済学」によるものだとサブラン氏は語った。
サブラン氏は、米国債務に信用リスクのようなものを加えるようになった一連の要因、すなわち「（連邦予算と貿易）赤字の急増、インフレに動じないFRB、財務省の市場操作」を挙げた。同氏は米国が債務不履行に陥るとは必ずしも信じていないが、他の多くの世界的投資家と同様、アリアンツは米国への賭けをヘッジするためにさらに多くの金を支払わなければならなかったと述べた。
米国は2027年の冬の終わりから夏の半ばまでに41兆1000億ドルの債務上限に達すると予想されている。
今年は「米国の債券市場にこれまでのようにデュレーションを見出さないことも決定した。面白くないからだ」とサブラン氏は語った。
インフレとヘッジを考慮した後、「私たちは利益を上げていなかった」と同氏は語った。
利回りの上昇は、すでに手頃な価格の問題に不満を抱いているアメリカ人にとって、さらなる悪化の原因となっている。住宅ローン金利は6.8％近くまで上昇した。住宅ローン金利は10年国債利回りに連動して変動します。自動車ローンやその他の形態の消費者負債も同様です。
利回りに対する政治リスクは依然として残る
利回りを押し上げる政治的要因が緩和する兆しはほとんどない。原油価格の下落はいくらか安心をもたらすかもしれないが、イラン戦争の終結は依然として見えていない。ワシントンには赤字支出を緩和する政治的妥協をする意欲はない。今週ノースカロライナ州で開催された世界財務大臣と中央銀行総裁の会合では、カナダに対する政治的な銃撃が巻き起こった。借り入れコストを緩和するための協調的な行動は議題にはならなかった。
一方、大口保有者の一部は米国債から高利回りの債券への移行を検討している。ノルウェーの巨大政府系ファンドは、現在政府債として運用されているポートフォリオのうち約800億ドルを住宅ローン担保証券など債券市場の他の部分に移すことを検討している。
一方、米国政府の借入は増加し続けている。議会予算局は最近、今年度の赤字予想を２兆１０００億ドルに上方修正する必要があり、この数字は国内総生産（ＧＤＰ）の６％を超える可能性が高い。これは危機時以外での膨大な借入額である。
AI は企業の新たな大規模な借入も促進しています。 JPモルガンの推計によると、大手ハイテク企業5社とエヌビディア、およびそれらの企業がデータセンターリースのバックストップに使用する特殊用途車両が、今年これまでに約3,200億ドルの負債を発行している。
JPモルガン・アセット・マネジメントの市場・投資戦略部門会長マイケル・センバレスト氏は今週、顧客に宛てた書簡で「ハイパースケーラーはあまりにも多額の債券を発行しているため、イールドカーブの長期端で需給問題を引き起こしている可能性がある」と述べた。
それは必ずしも悪いことではありません。 AIは、成長の源泉に打撃を与えている米国経済において明るい材料だ。第２・四半期の国内総生産（ＧＤＰ）成長率は１．５％で、予想を下回る数字となったが、これはトランプ大統領の弾圧後の米国への移民の急激な減速が影響している可能性が高い。労働市場も最近、異常な動きを見せている。金曜日の雇用者数が16万2,000人増加したという報道は、企業が雇用や解雇に消極的であるという長期的な環境に逆らったものだ。
企業が市場の支持を争う中、債券市場での競争がイノベーションブームを促進する可能性がある。最終的な判断を下すのは時期尚早だが、この種の成長と生産性ブームの可能性は、インフレを調整する実質利回りの上昇の説明の一つとなる。
ファクトセットのデータによると、インフレを考慮した米国債の10年物TIPS利回りは、木曜日には過去6カ月間で67ベーシスポイント上昇し、2.43％となった。インフレを示す損益分岐点は同期間横ばいとなっている。
ニューヨーク連銀のジョン・ウィリアムズ総裁は水曜日、実質利回りの上昇は「むしろ経済の力強さを反映している」とCNBCに語った。利回りの上昇が景気の足を引っ張ると解釈したい人もいるが、その論理は逆だ、と同氏は述べた。
ウィリアムズ氏は「これは金融状況が経済に影響を与えるということではなく、むしろ経済が金融状況に影響を与えるということだ」と述べた。
ウィリアムズ氏の分析の裏を返せば、借り入れコストが落ち着くには景気の減速が必要になる可能性があるということだ。しかし、それは誰もが支持したい解決策ではありません。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/04/treasury-bonds-yield-trump-ai-mortgage-rates-analysis.html",
    publishedAt: "2026-09-04T14:07:24+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 6,
  },
  {
    id: "uk-petrol-prices-hit-highest-level-since-8fc7b7c0",
    title: "UK petrol prices hit highest level since Iran war began",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `UK petrol prices hit highest level since Iran war began
- Published
UK petrol prices have risen to their highest level since the beginning of the Iran war as the conflict continues to hit drivers' finances.
The average cost of petrol has reached more than 163p per litre, according to motoring group the RAC, which warned prices could climb higher yet.
The price of fuel tends to track the wholesale price of oil, which surged when the Iran conflict began on 28 February. The fighting has severely disrupted oil supplies across the Middle East.
Prices then nosedived when US and Iran agreed to a framework deal to end the conflict in June, but they have risen again since the collapse of peace talks.
How do wholesale oil prices affect the cost of petrol and diesel at the pump?
Crude oil is a key ingredient in petrol and diesel, which means that higher wholesale costs make filling up a car more expensive. The price of petrol and diesel is also heavily influenced by demand and refining capacity.
Analysts say every $10 (£7.44) per barrel increase in the oil price pushes up pump prices by roughly 7p a litre.
Since the war began, the price of a barrel of Brent crude – the global benchmark for wholesale oil prices – has been very volatile.
Generally speaking, news of further conflict drives the price up while hopes of an end to the war pushes the price down.
Before the conflict, Brent was about $70 a barrel, but the fighting saw it peak at above $120.
In early July, after the framework deal was signed, prices fell back to near the $70 a barrel mark.
When the peace talks collapsed, the price climbed back up again to above $100 a barrel, but are now around $94.
What has happened to petrol and diesel prices in the UK?
While petrol has hit its highest price since the Iran war began, according to the RAC, diesel remains below the peak of 191.54p a litre it reached on 15 April.
In early July, the RAC said the average price of petrol sank to a low of 150.59p per litre and 164.52p per litre for diesel.
Since then the prices have risen, with petrol now at 163.6p a litre while diesel costs 184.99p a litre.
RAC's head of policy Simon Williams said that, with oil prices remaining elevated, drivers will "almost certainly start paying noticeably more at the pumps in the coming weeks".
Despite the conflict, petrol and diesel prices remain below the levels reached in the summer of 2022 following Russia's invasion of Ukraine, when petrol reached 191.5p a litre and diesel hit 199p.
Because transporting oil is a slow process, price movements in the wholesale markets take about a fortnight to show at the pump.
Fuel retailers have denied accusations of price gouging during the conflict. The official markets regulator said it had "not seen evidence of retailers actively changing their pricing strategies to take advantage of the crisis".
A government scheme called Fuel Finder, external lets drivers compare the cost of fuel offered by petrol stations across the UK.
Luke Bosdet, the head of policy at the AA, said the group had been surprised at the speed that prices had fallen and put it down to the scheme.
In May, the then Prime Minister Sir Keir Starmer said a planned 5p increase in fuel duty due in September would be postponed until the end of December because of the conflict.
Why has the Iran war had a big impact on oil prices?
The Middle East conflict sent global oil prices soaring as it effectively closed the Strait of Hormuz — one of the world's key water transport routes for oil, liquid natural gas and other essential commodities — limiting global supplies.
About 20% of the world's oil and liquefied natural gas normally passes through the waterway.
Even if a deal is agreed to reopen the strait, experts warn it will take time before normal levels of shipping through the Strait of Hormuz resume, and the impact of the war will continue to affect the global economy for potentially months to come.
Why and how is US blockading Iranian ports in Strait of Hormuz?
- Published30 April
Oil price predicted to remain above $100 for rest of year
- Published11 May
Where does the UK get its oil and gas?
The UK is heavily reliant on oil and gas imports, with the majority coming from the US and Norway.
The price of oil on the global market determines how much the UK pays for it.
Although the UK does get some oil from the North Sea, most of that is exported for refining elsewhere.
You can also send us your questions by following this link
Reporting by Faarea Masud, Jemma Crew, Alex Daniel, Michael Race, Mitchell Labiak, and Miguel Roca-Terry
Get in touch
How have you been affected by the price rises? Share your experiences
Get our flagship newsletter with all the headlines you need to start the day. Sign up here.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.
Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c20zgjzz0e4o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-04T13:05:52+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/8143/live/f8d0c8b0-7572-11f1-b976-0b9c15b0ccfc.jpg",
    readTime: 2,
  },
  {
    id: "nepal-rescuers-try-to-reach-dozens-trapp-8eb3a789",
    title: "Nepal rescuers try to reach dozens trapped in tunnel after two found alive",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Nepal rescuers try to reach dozens trapped in tunnel after two found alive
- Published
Rescuers in Nepal are stepping up efforts to find scores of workers believed to be trapped in tunnels, nine days after the devastating flash floods which hit the area on the border with Tibet in China.
Hopes have risen after two people were pulled out alive on Friday. The body of a third person was also found in one of the tunnels used to supply hydropower stations.
The massive flash flood, believed to have been triggered by a glacial collapse, swept through a Himalayan valley last Wednesday, wiping out entire villages.
There are now 1,311 confirmed dead and 5,330 still missing in Nepal and Tibet. Hundreds of foreign citizens are believed to be among those missing, from at least 34 countries.
The full impact of the flood in Tibet is unclear. China has released information through state media outlets showing the devastation around the border, but has given few details about the victims or the impact on local villagers.
In Nepal, however, rescue operations are taking place at seven hydropower tunnels in which more than 150 people are feared trapped - as well as in 19 other areas.
In the early hours of Friday morning, rescuers heard what they thought could be voices at the Trishuli 3A hydropower site.
According to local reports, they called out "don't worry, we're here to rescue you" - and heard back a faint "okay".
Crews clambered in to find Sanjaya Shah and Kabir Maharjan - both had injuries on their hands and legs, "possibly" from crawling through the tunnel. Both were airlifted to the Army Hospital in the capital, Kathmandu.
Maharjan, who was rescued second, is in a critical condition, the prime minister's office said. Shah was also undergoing medical tests.
The body of a third person was found in the same tunnel later. A local official said it was swollen and could not be immediately identified.
Officials believe another 39 people are in the Trishuli 3A tunnel, although it is not clear if all are alive.
Col Jhabindra Reshmi said that his teams had rescued more than 400 Nepali nationals and 270 foreign citizens following the flash flooding on 26 August.
He has said mud and rocks have made entering tunnels difficult and rescuers were having to dig access holes to get underground.
Engineers have been pumping air into the tunnels.
Last week's floodwaters washed away a lot of heavy machinery, making it harder for rescuers to unblock tunnels, says a representative for Nepalese power companies.
Uttam Bhlon Lama, vice president at Independent Power Producers of Nepal, told the BBC's Newsday programme that the rescue of the two men on Friday would "motivate the rescuers to do more".
"The flood level is still very high," Lama added.
Nepalese authorities have warned that rainfall may cause additional flooding in the region.
At least 1,287 people are known to have died in Nepal, with 5,083 still missing.
On the Tibetan side, the death toll reported by Chinese media on Friday was 31, with 531 people unaccounted for.
Emergency teams in Tibet appear to be focusing on helping the living rather than holding out hope for more survivors.
Scientists are still studying the exact cause, but it is believed to have been caused by a glacial collapse and climate change may have been a factor.
Moments after the seismic event, which was initially thought to have been an earthquake, a massive wall of water and debris crashed downstream, taking buildings, roads and vehicles with it.
Experts from the Asian Mountain Academic Alliance, the Stimson Centre and China's Institute of Mountain Hazards and Environment said there was evidence of growing instability around the glacier in the days before the collapse and better early-warning systems could have saved lives.
- Published4 days ago`,
    bodyJa: `ネパールの救助隊、トンネルに閉じ込められた数十人に救出を試みる 2人生存発見
- 公開されました
中国のチベットとの国境地帯を襲った壊滅的な鉄砲水から9日後、ネパールの救助隊はトンネルに閉じ込められたとみられる多数の作業員の捜索活動を強化している。
金曜日に２人が生きて救出されたことで期待が高まった。水力発電所への供給に使用されるトンネルの1つで、第三者の遺体も発見された。
氷河の崩壊によって引き起こされたと考えられている大規模な鉄砲水が先週の水曜日にヒマラヤ渓谷を襲い、村全体を壊滅させた。
ネパールとチベットでは現在、1,311人の死亡が確認され、5,330人が行方不明となっている。行方不明者の中には少なくとも34カ国の外国人数百人が含まれているとみられる。
チベットにおける洪水の全影響は不明である。中国は国営メディアを通じて国境付近の惨状を示す情報を公表しているが、犠牲者や地元の村民への影響についてはほとんど明らかにしていない。
しかしネパールでは、150人以上が閉じ込められる恐れがある7つの水力発電トンネルと他の19の地域で救助活動が行われている。
金曜日の早朝、救助隊はトリシュリ3A水力発電所で声と思われる音を聞いた。
地元の報道によると、彼らは「心配しないでください、私たちが助けに来ました」と呼びかけると、かすかに「大丈夫」という声が聞こえたという。
乗組員がよじ登ってサンジャヤ・シャーさんとカビール・マハルジャンさんを発見した。二人とも手と足に傷を負っており、「おそらく」トンネルを這っていたせいだろう。二人は首都カトマンズの陸軍病院に空輸された。
首相府によると、２番目に救出されたマハルジャン氏は重篤な状態だという。シャーさんも健康診断を受けていた。
その後、同じトンネル内で3人目の遺体が発見された。地元当局者によると、腫れていてすぐには特定できなかったという。
当局はさらに39人がトリシュリ3Aトンネルにいるとみているが、全員が生存しているかどうかは明らかではない。
ジャビンドラ・レシュミ大佐は、8月26日の鉄砲水の後、彼のチームがネパール人400人以上と外国人270人以上を救出したと述べた。
同氏は、泥と岩によってトンネルに入るのが困難で、救助隊員は地下に入るためにアクセス穴を掘らなければならなかったと述べた。
技術者たちはトンネルに空気を送り込んでいる。
ネパールの電力会社の代表者によると、先週の洪水で多くの重機が流され、救助隊がトンネルの封鎖を解除することが困難になったという。
ネパール独立発電事業者の副社長、ウッタム・ブロン・ラマ氏はBBCのニュースデイ番組で、金曜の2人の救出は「救助隊員らのさらなる活動への動機付けになる」と語った。
「洪水レベルは依然として非常に高い」とラマ氏は付け加えた。
ネパール当局は、降雨によりこの地域にさらなる洪水が発生する可能性があると警告した。
ネパールでは少なくとも1,287人が死亡したことが確認されており、5,083人が依然として行方不明となっている。
チベット側では、金曜日に中国メディアが報じた死者数は31人、うち531人が行方不明となっている。
チベットの緊急チームは、より多くの生存者に希望を持ち続けることよりも、生きている人々を助けることに重点を置いているようだ。
科学者たちは正確な原因をまだ研究中ですが、氷河の崩壊によって引き起こされたと考えられており、気候変動が要因である可能性があります。
当初は地震であると考えられていた地震発生の直後、巨大な水の壁と瓦礫が下流で崩壊し、建物、道路、車両を巻き込みました。
アジア山岳学術同盟、スティムソンセンター、中国山岳災害環境研究所の専門家らは、崩壊の数日前から氷河周辺で不安定性が高まっている証拠があり、より優れた早期警報システムがあれば命を救えた可能性があると述べた。
- 4 日前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c7903j1vpe5o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-04T12:30:56+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/4c65/live/034c61b0-a830-11f1-b808-43cdd10f38ce.jpg",
    readTime: 4,
  },
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
