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
    id: "massive-drone-attack-on-moscow-region-s-9aec50e6",
    title: "'Massive' drone attack on Moscow region sees Ukraine hit oil refinery",
    titleJa: "'Massive' drone attack on Moscow region sees Ukraine hit oil refinery",
    summaryJa: "Moscow's mayor says 450 drones were downed during the \"unprecedented attack\", in which two people died.",
    bodyOriginal: `'Massive' drone attack on Moscow region sees Ukraine hit oil refinery
- Published
At least two people have been killed and six injured in a "massive" overnight Ukrainian drone attack on the Moscow region, Governor Andrei Vorobyev has said.
Moscow Mayor Sergei Sobyanin said 450 drones heading for the capital had been shot down in what he called an "unprecedented attack". The city's main oil refinery was damaged and several homes were set ablaze.
Ukraine's President Volodymyr Zelensky confirmed Kyiv had hit a "key" Russian oil facility and a logistics site in the region, representing "billions of dollars that sustain the war machine".
Ukrainian officials meanwhile said nine people, including three children, had been killed in Russian attacks in the Kyiv and Sumy regions on Saturday.
The overnight attack is thought to be among the largest drone attacks on the Moscow region since the war began.
Russia and Ukraine have recently intensified their strikes, targeting energy-generating and transport facilities, as well as major logistics hubs.
A 44-year-old woman was killed in Sofyino on Sunday after a drone hit a three-storey residential building, regional head Vorobyev said. Another five people - including two children - were injured.
An elderly man died after a private house was hit in the Orekhovo-Zuevo district, Vorobyev added.
Videos have emerged on social media appearing to show explosions in the night skies above Moscow, and a burning warehouse. The footage has not been verified by the BBC.
Mayor Sobyanin said a drone had struck a building near one of the capital's boulevards and the oil refinery - where Ukrainian military officials said three key units had been damaged.
The site supplies more than a third of the Moscow region's fuel, according to the defence ministry in Kyiv, and some of its petrol, diesel and aviation fuel go to Russia's military.
Ukraine's defence minister said attacking such facilities "directly undermines the enemy's ability to continue its war of aggression and supply its military formations".
Sobyanin said the major attack was "an attempt to disrupt" Russia's parliamentary election, which was in its third day on Sunday. The vote is tightly controlled by the Kremlin and has been dismissed by critics as neither free, fair nor transparent.
Russian state media reported that an election official was one of two people killed by a drone attack on a bus in a Moscow-controlled part of Kherson in Ukraine on Sunday, citing the head of Russia's election commission.
Meanwhile, Moscow's biggest airport Sheremetyevo warned passengers "temporary restrictions" were in place overnight, while at the capital's Vnukovo airport all arrivals and departures were halted. Restrictions at both airports were lifted by Sunday morning but each warned some flights may still be delayed.
It comes after a mother and her two small children, a boy and a girl, were killed in a Russian attack in the city of Fastiv, Kyiv on Sautrday, according to regional head Tymur Tkachenko.
He later said a child injured in a separate attack in Vyshhorod, north of Kyiv, had also died in hospital.
In the north-eastern Sumy region, four people were killed when a Russian drone hit the car they were travelling in, top local official Oleh Hryhorov said.
Russia also struck a monastery in the Kherson region with a drone on Saturday, Zelensky said, killing one member of the clergy and injuring four others.
Both Russia and Ukraine have continued to hit energy infrastructure targets in the past week, despite US President Donald Trump claiming on social media that the two sides had agreed not to do so.
Trump signed a sanctions bill on Friday that targets Russia's economy by implementing tariffs on the biggest buyers of the country's oil and gas which include China and India.
The US legislation gives the US president powers to impose 100% tariffs on major purchasers of Russian energy.
Russian President Vladimir Putin launched a full-scale invasion of Ukraine in February 2022.
- Published1 day ago`,
    bodyJa: `'Massive' drone attack on Moscow region sees Ukraine hit oil refinery
- Published
At least two people have been killed and six injured in a "massive" overnight Ukrainian drone attack on the Moscow region, Governor Andrei Vorobyev has said.
Moscow Mayor Sergei Sobyanin said 450 drones heading for the capital had been shot down in what he called an "unprecedented attack". The city's main oil refinery was damaged and several homes were set ablaze.
Ukraine's President Volodymyr Zelensky confirmed Kyiv had hit a "key" Russian oil facility and a logistics site in the region, representing "billions of dollars that sustain the war machine".
Ukrainian officials meanwhile said nine people, including three children, had been killed in Russian attacks in the Kyiv and Sumy regions on Saturday.
The overnight attack is thought to be among the largest drone attacks on the Moscow region since the war began.
Russia and Ukraine have recently intensified their strikes, targeting energy-generating and transport facilities, as well as major logistics hubs.
A 44-year-old woman was killed in Sofyino on Sunday after a drone hit a three-storey residential building, regional head Vorobyev said. Another five people - including two children - were injured.
An elderly man died after a private house was hit in the Orekhovo-Zuevo district, Vorobyev added.
Videos have emerged on social media appearing to show explosions in the night skies above Moscow, and a burning warehouse. The footage has not been verified by the BBC.
Mayor Sobyanin said a drone had struck a building near one of the capital's boulevards and the oil refinery - where Ukrainian military officials said three key units had been damaged.
The site supplies more than a third of the Moscow region's fuel, according to the defence ministry in Kyiv, and some of its petrol, diesel and aviation fuel go to Russia's military.
Ukraine's defence minister said attacking such facilities "directly undermines the enemy's ability to continue its war of aggression and supply its military formations".
Sobyanin said the major attack was "an attempt to disrupt" Russia's parliamentary election, which was in its third day on Sunday. The vote is tightly controlled by the Kremlin and has been dismissed by critics as neither free, fair nor transparent.
Russian state media reported that an election official was one of two people killed by a drone attack on a bus in a Moscow-controlled part of Kherson in Ukraine on Sunday, citing the head of Russia's election commission.
Meanwhile, Moscow's biggest airport Sheremetyevo warned passengers "temporary restrictions" were in place overnight, while at the capital's Vnukovo airport all arrivals and departures were halted. Restrictions at both airports were lifted by Sunday morning but each warned some flights may still be delayed.
It comes after a mother and her two small children, a boy and a girl, were killed in a Russian attack in the city of Fastiv, Kyiv on Sautrday, according to regional head Tymur Tkachenko.
He later said a child injured in a separate attack in Vyshhorod, north of Kyiv, had also died in hospital.
In the north-eastern Sumy region, four people were killed when a Russian drone hit the car they were travelling in, top local official Oleh Hryhorov said.
Russia also struck a monastery in the Kherson region with a drone on Saturday, Zelensky said, killing one member of the clergy and injuring four others.
Both Russia and Ukraine have continued to hit energy infrastructure targets in the past week, despite US President Donald Trump claiming on social media that the two sides had agreed not to do so.
Trump signed a sanctions bill on Friday that targets Russia's economy by implementing tariffs on the biggest buyers of the country's oil and gas which include China and India.
The US legislation gives the US president powers to impose 100% tariffs on major purchasers of Russian energy.
Russian President Vladimir Putin launched a full-scale invasion of Ukraine in February 2022.
- Published1 day ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c34gdjk1ne8yo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-20T10:45:39+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/15c3/live/41153930-b4bb-11f1-b1d1-571ed4d7ff2c.jpg",
    readTime: 10,
  },
  {
    id: "ed-davey-calls-for-immediate-10p-cut-to-d3499769",
    title: "Ed Davey calls for immediate 10p cut to fuel duty",
    titleJa: "Ed Davey calls for immediate 10p cut to fuel duty",
    summaryJa: "Sir Ed blamed Donald Trump's war with Iran for damaging the UK economy and pushing fuel prices up.",
    bodyOriginal: `Ed Davey calls for immediate 10p cut to fuel duty
- Published
Sir Ed Davey is calling on the government to immediately cut fuel duty by 10p a litre until Christmas as part of a package of policies aimed at cutting the cost of living.
The Liberal Democrat leader is also urging the government to scrap a permanent increase in fuel duty which is set to take effect in January.
Fuel duty was frozen under the Conservatives in March 2022 and Sir Keir Starmer's government continued the freeze, deciding in May to push back a planned 3p increase in September until the end of this year.
The Lib Dems claim cutting 10p from fuel duty now would mean fuel would drop by 12p per litre at the pump.
Sir Ed claimed drivers should be supported and a temporary three-month fuel duty cut would pay for itself by stimulating the economy.
"Petrol and diesel prices are higher than they've been for a long time because of Trump's mad war with Iran, and people need help now," he said.
The policy would cost about £2bn, he said, adding: "It's a three-month package, a temporary package, but if you look at the extra money the government will get through the energy profits levy, from gas taxes, from VAT and fuel duty, it's self-funding."
In a speech to his party's conference on Tuesday, Sir Ed will make further calls to cut the bus fare cap from £3 to £1, and reduce rail fares by 10%.
He will also call for VAT to be dropped from public charging points for electric vehicles and a review of network costs the Lib Dems have labelled unfair.
Chancellor John Healey is under pressure to raise taxes or cut spending at his Budget next month, amid soaring government borrowing costs.
Asked about Sir Ed's call for a fuel duty cut, Labour Party chair Bridget Phillipson told Laura Kuenssberg: "I'm sure John Healey will be open to any and all suggestions ahead of the budget but actually this is an area where the Labour government has taken action on fuel duty already.
"Whilst I recognise what the Lib Dems have to say on this topic, this is the element of politics about it - they've got their conference, they're making their pitch, good luck to them."
Davey says Lib Dems are 'firewall against Farage' as conference begins
- Published17 hours ago
Join EU migration pact to tackle small boats, says Ed Davey
- Published18 August
Sign up for our Politics Essential newsletter to read top political analysis, gain insight from across the UK and stay up to speed with the big moments. It'll be delivered straight to your inbox every weekday.`,
    bodyJa: `Ed Davey calls for immediate 10p cut to fuel duty
- Published
Sir Ed Davey is calling on the government to immediately cut fuel duty by 10p a litre until Christmas as part of a package of policies aimed at cutting the cost of living.
The Liberal Democrat leader is also urging the government to scrap a permanent increase in fuel duty which is set to take effect in January.
Fuel duty was frozen under the Conservatives in March 2022 and Sir Keir Starmer's government continued the freeze, deciding in May to push back a planned 3p increase in September until the end of this year.
The Lib Dems claim cutting 10p from fuel duty now would mean fuel would drop by 12p per litre at the pump.
Sir Ed claimed drivers should be supported and a temporary three-month fuel duty cut would pay for itself by stimulating the economy.
"Petrol and diesel prices are higher than they've been for a long time because of Trump's mad war with Iran, and people need help now," he said.
The policy would cost about £2bn, he said, adding: "It's a three-month package, a temporary package, but if you look at the extra money the government will get through the energy profits levy, from gas taxes, from VAT and fuel duty, it's self-funding."
In a speech to his party's conference on Tuesday, Sir Ed will make further calls to cut the bus fare cap from £3 to £1, and reduce rail fares by 10%.
He will also call for VAT to be dropped from public charging points for electric vehicles and a review of network costs the Lib Dems have labelled unfair.
Chancellor John Healey is under pressure to raise taxes or cut spending at his Budget next month, amid soaring government borrowing costs.
Asked about Sir Ed's call for a fuel duty cut, Labour Party chair Bridget Phillipson told Laura Kuenssberg: "I'm sure John Healey will be open to any and all suggestions ahead of the budget but actually this is an area where the Labour government has taken action on fuel duty already.
"Whilst I recognise what the Lib Dems have to say on this topic, this is the element of politics about it - they've got their conference, they're making their pitch, good luck to them."
Davey says Lib Dems are 'firewall against Farage' as conference begins
- Published17 hours ago
Join EU migration pact to tackle small boats, says Ed Davey
- Published18 August
Sign up for our Politics Essential newsletter to read top political analysis, gain insight from across the UK and stay up to speed with the big moments. It'll be delivered straight to your inbox every weekday.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cr89j514dly2o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-20T09:32:50+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/d872/live/45d137e0-b43d-11f1-8eb0-59fdbbab66e7.jpg",
    readTime: 6,
  },
  {
    id: "german-elections-under-way-which-could-d-ef3cbda4",
    title: "German elections under way which could decide fate of Chancellor Merz",
    titleJa: "German elections under way which could decide fate of Chancellor Merz",
    summaryJa: "The chancellor is facing intense political pressure which will increase if his party struggles in Sunday's polls.",
    bodyOriginal: `German elections under way which could decide fate of Chancellor Merz
- Published
Local elections are taking place in two German states on Sunday which could increase the political pressure on Chancellor Friedrich Merz.
Opinion polls in Berlin and Mecklenburg-Vorpommerm suggest Merz's Christian Democratic Union (CDU) is at risk of damaging defeats, which would raise further questions about the chancellor's future.
These latest elections come after the far-right Alternative for Germany (AfD) party won a major victory in the state of Saxony-Anhalt two weeks ago, while the CDU saw its vote halved.
There has been speculation in Germany that Merz could be replaced as chancellor mid-term unless the CDU's political fortunes improve.
He has said he will carry on but is facing poor approval ratings amid rumours of a so-called chancellor swap, though his challengers are "still hesitating", writes German news site Tagesschau, external.
According to the polls, Merz's conservatives could lose power in Berlin as it tussles with Die Linke (The Left) over first place.
Meanwhile in the north-eastern state of Mecklenburg-Vorpommern, the CDU has only just been hovering above the 5% threshold needed for a party to enter the state parliament. It could spell their worst ever result in a state election.
How did it come to this after just 16 months in power? Friedrich Merz is having to answer for the tumbling popularity of his own party, while the political force that he aimed to counter - the AfD - continues its rise.
Some branches of the AfD are classed as right-wing extremist by domestic intelligence, a designation it strongly rejects.
But its anti-immigration, Russian-friendly, Germany-first agenda has found fertile ground in the country's former communist east.
The AfD is hoping to build on its recent landslide win in Saxony-Anhalt by topping the polls in Mecklenburg-Vorpommern.
However, the centre-left SPD has staged a late comeback to be in contention for the top spot through its lead candidate, Manuela Schwesig.
Currently the state premier, Schwesig is trying to sweep up the anti-AfD vote as she bills herself as the "Die Frau gegen Blau" - "Woman against Blue", the AfD's party colours.
But her local popularity belies the far poorer fortunes of her national party which is locked in a loveless coalition with Merz's CDU.
In a queue for a campaign event in the city of Neubrandenburg, AfD supporter Reinhart tells us that the traditional parties are being washed away.
"Not only in Germany. In Italy, in France, in Great Britain. Everywhere the traditional parties go down."
He smiles when asked what he thinks of Merz, saying: "Oh well everyone thinks the same about him.
"He is arrogant, out of touch, not on the same level as the general public."
Merz's backers argue that the chancellor has had a tough time with global events and that a lot of the problems the nation faces are ones he has inherited.
But whatever faith people had in his ability to fix those problems, it is apparently ebbing away - and, the brutal truth is, it can be hard to find voters who like him.
The former corporate lawyer's tack to the right on issues like immigration has failed to erode AfD support while also alienating people further to the left.
His blunt communication style has also caused irritation, such as his dismissal of "work-life balance", telling Germans they need to work more and take less sick leave.
Supporters would argue he is a man who is ready to administer the medicine the nation needs, even if people do not like the taste of it.
But the country's long-stuttering economy, high energy costs and fraught debates about immigration are feeding a sense of national gloom.
Earlier this week, the leaders of eight German states backed Merz and said restoring trust in the CDU lay in "listening and taking political action, not in debates over personnel".
But while no one within his party has openly challenged Merz for the top job, murmurings of discontent have grown louder.
Martin Rohloff, the CDU candidate for Neubrandenburg, thinks Merz does not have the "Fingerspitzengefühl, the feeling for the small persons".
"Maybe he wants the right things," muses Rohloff, but "he cannot communicate well".
Asked if Merz should go, he says it is not an easy question but: "If I have to answer yes or no, I would say yes. There are other people who maybe have better feelings for the public."
Merz has vowed to carry on as his coalition government aims to push through a package of economic, tax and welfare reforms that are finally due before parliament this autumn.
But Sunday's vote brings a danger for the chancellor - that he is already out of time.
The chancellor is reportedly due to meet senior party figures in Berlin on Sunday evening having already cancelled a planned trip next week to New York, in an apparent effort to contain the crisis.
A staunch backer of Ukraine, the fall of Friedrich Merz would trigger further instability in a continent already rocked by warnings of increased Russian aggression.
- Published7 September
- Published3 days ago
- Published9 September`,
    bodyJa: `German elections under way which could decide fate of Chancellor Merz
- Published
Local elections are taking place in two German states on Sunday which could increase the political pressure on Chancellor Friedrich Merz.
Opinion polls in Berlin and Mecklenburg-Vorpommerm suggest Merz's Christian Democratic Union (CDU) is at risk of damaging defeats, which would raise further questions about the chancellor's future.
These latest elections come after the far-right Alternative for Germany (AfD) party won a major victory in the state of Saxony-Anhalt two weeks ago, while the CDU saw its vote halved.
There has been speculation in Germany that Merz could be replaced as chancellor mid-term unless the CDU's political fortunes improve.
He has said he will carry on but is facing poor approval ratings amid rumours of a so-called chancellor swap, though his challengers are "still hesitating", writes German news site Tagesschau, external.
According to the polls, Merz's conservatives could lose power in Berlin as it tussles with Die Linke (The Left) over first place.
Meanwhile in the north-eastern state of Mecklenburg-Vorpommern, the CDU has only just been hovering above the 5% threshold needed for a party to enter the state parliament. It could spell their worst ever result in a state election.
How did it come to this after just 16 months in power? Friedrich Merz is having to answer for the tumbling popularity of his own party, while the political force that he aimed to counter - the AfD - continues its rise.
Some branches of the AfD are classed as right-wing extremist by domestic intelligence, a designation it strongly rejects.
But its anti-immigration, Russian-friendly, Germany-first agenda has found fertile ground in the country's former communist east.
The AfD is hoping to build on its recent landslide win in Saxony-Anhalt by topping the polls in Mecklenburg-Vorpommern.
However, the centre-left SPD has staged a late comeback to be in contention for the top spot through its lead candidate, Manuela Schwesig.
Currently the state premier, Schwesig is trying to sweep up the anti-AfD vote as she bills herself as the "Die Frau gegen Blau" - "Woman against Blue", the AfD's party colours.
But her local popularity belies the far poorer fortunes of her national party which is locked in a loveless coalition with Merz's CDU.
In a queue for a campaign event in the city of Neubrandenburg, AfD supporter Reinhart tells us that the traditional parties are being washed away.
"Not only in Germany. In Italy, in France, in Great Britain. Everywhere the traditional parties go down."
He smiles when asked what he thinks of Merz, saying: "Oh well everyone thinks the same about him.
"He is arrogant, out of touch, not on the same level as the general public."
Merz's backers argue that the chancellor has had a tough time with global events and that a lot of the problems the nation faces are ones he has inherited.
But whatever faith people had in his ability to fix those problems, it is apparently ebbing away - and, the brutal truth is, it can be hard to find voters who like him.
The former corporate lawyer's tack to the right on issues like immigration has failed to erode AfD support while also alienating people further to the left.
His blunt communication style has also caused irritation, such as his dismissal of "work-life balance", telling Germans they need to work more and take less sick leave.
Supporters would argue he is a man who is ready to administer the medicine the nation needs, even if people do not like the taste of it.
But the country's long-stuttering economy, high energy costs and fraught debates about immigration are feeding a sense of national gloom.
Earlier this week, the leaders of eight German states backed Merz and said restoring trust in the CDU lay in "listening and taking political action, not in debates over personnel".
But while no one within his party has openly challenged Merz for the top job, murmurings of discontent have grown louder.
Martin Rohloff, the CDU candidate for Neubrandenburg, thinks Merz does not have the "Fingerspitzengefühl, the feeling for the small persons".
"Maybe he wants the right things," muses Rohloff, but "he cannot communicate well".
Asked if Merz should go, he says it is not an easy question but: "If I have to answer yes or no, I would say yes. There are other people who maybe have better feelings for the public."
Merz has vowed to carry on as his coalition government aims to push through a package of economic, tax and welfare reforms that are finally due before parliament this autumn.
But Sunday's vote brings a danger for the chancellor - that he is already out of time.
The chancellor is reportedly due to meet senior party figures in Berlin on Sunday evening having already cancelled a planned trip next week to New York, in an apparent effort to contain the crisis.
A staunch backer of Ukraine, the fall of Friedrich Merz would trigger further instability in a continent already rocked by warnings of increased Russian aggression.
- Published7 September
- Published3 days ago
- Published9 September`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cme8xj6g2ny7o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-20T07:57:32+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/1012/live/d74ee600-b4d2-11f1-b1d1-571ed4d7ff2c.jpg",
    readTime: 10,
  },
  {
    id: "france-s-wine-production-nears-a-70-year-5e34e678",
    title: "France’s wine production nears a 70-year low, leaving winemakers with tough choices",
    titleJa: "France’s wine production nears a 70-year low, leaving winemakers with tough choices",
    summaryJa: "As the French wine industry reaches a crisis point, key players are considering new markets, products and generations.",
    bodyOriginal: `Florent Latour, CEO of the largest owner of Grand Cru vineyards in Burgundy, spent the summer praying for rain.
"We felt we were so close," Latour, who's head of Maison Louis Latour, told CNBC. "Just a bit more rain would have produced a fantastic harvest on both counts, but we had to settle for quality, and about half of a harvest."
His prayers — and frustrations — are being echoed across France, as a record-hot summer and severe droughts hit the country's world-famous wine industry hard.
France's agriculture ministry has warned that wine production could hit a 70-year low in 2026, marking the third year of reduced output.
"The 2023 vintage was decent, but yields have been pretty disastrous since the start of the decade," said Jean-Marie Cardebat, chair of wines and spirits at the INSEEC Grande École university. "We are realizing that no region in France is safe from heatwaves today."
Paradoxically, the regions that suffer the most are those with more temperate climates, namely the Loire Valley and Champagne. In contrast, winemakers in the southern regions of Bordeaux and Languedoc-Roussillon reported higher harvests compared to last year.
For Cardebat, also an economics professor at the University of Bordeaux, France's poor preparation in the face of climate change is a big problem.
"Spain is more often affected by heatwaves and global warming; however, it is better prepared," he said. "Partly because it already has an irrigation network in place."
This is rare in France, he said, and permitted only in exceptional cases. "In France, setting up such measures takes time."
'The reality of climate change'
The impacts of climate change are heightening the debate around the strict rules that govern France's wine sector.
Last year, Chateau Lafleur caused a storm by withdrawing from the prestigious Pomerol and wider Bordeaux official designations for their six wines.
Owned by the Guinaudeau family, the estate said that rigid appellation (AOC) rules — which include irrigation restrictions, planting densities, and permitted grape varieties among others — prevented it from adapting quickly enough to the changing climate.
Moving away from these rules will allow the vineyard to deal with "the reality of climate change with precision and effectiveness," the Guinaudeau family explained at the time. "It is a bold decision that enables the entire Lafleur Family … to ensure the perennity of our vineyards and the quality and identity of our wines. In a word: the future."
Earlier grape harvests
High temperatures also mean earlier harvests, which can cause major logistical problems for winemakers.
"This year we started on the 14th of August, which is the earliest ever for the Latour domaine ... What we've seen, if you take it per decade, is that the midpoint of the harvest is three days earlier every decade, so essentially we've moved a month since the 1930s," Latour said.
It means one of the biggest challenges around harvesting these days is "a human one," he added.
"You have to have the flexibility to get your team in the vineyard at essentially a moment's notice because your predictions turn out to be wrong," Latour said.
A 'vicious circle'
The economic impact of these changes on the sector — and wider economy — could be significant.
This year's harvest "could push us back to third place among wine-producing countries — whereas 12 to 15 years ago, we were still first, ahead of Italy. Now Italy is clearly in the lead," Cardebat said. "Spain could overtake us. This drop to third place indicates that France has a genuine production problem."
He said the shift is symbolic, but also important. "It represents a massive loss of potential revenue for France and for the companies involved."
In early September, the government downgraded France's growth forecast to 0.5% (from 1% earlier this year), estimating that the heatwave and drought will cost France 0.1 percentage point of growth this year.
Meanwhile, on wine estates, production costs run increasingly high.
"Treasuries are currently depleted. The more the climate is disrupted, the less capacity there is to invest — even though we need to invest more ... You can see that we are being drawn into a vicious circle," Cardebat said.
"I looked at business failures. They have tripled in the wine sector between 2019 and 2025. I think 2026 risks being just as catastrophic from this point of view."
At the end of the summer, the French Government announced an emergency aid plan worth over 1 billion euros ($1.15 billion) to support farmers and winegrowers affected by heatwaves.
This need for investment to adapt could accelerate consolidation in the sector, with Cardebat noting a clear trend of estates getting larger and larger over the past quarter of a century.
"Quality does require, I think, a certain scale at this point in time, because of all this human resources, equipment and facilities investment. It's easier to absorb these costs with a certain scale," Latour said, although he added that "to be family-owned and family-run, is these days much more appreciated, maybe in a way that was not as much in the past."
Falling consumption; new markets
Climate-related issues come at a time when the sector is already facing falling consumption, with everyday wine consumption falling from almost 50% of the population in 1960 to under 10% in 2018.
Higher inflation and tariffs over the past 5 years have also contributed to a build-up in wine stocks.
As a result, estates are uprooting vines to reduce production. Around 20,000 hectares of vines have been uprooted in the Bordeaux region alone since 2023, bringing the remaining vineyard area to 83,000 hectares.
And in 2026, around 4% of all of France's vines will be pulled as part of a government support program where growers will receive 4,000 euros ($4,590) per hectare for permanently removing vines.
This crisis point in French wine is leading its key players to consider new markets, products and generations — fast.
"Different products, completely different packaging like ready-to-drink options. The United States are an excellent testing ground for this, on how to win people over with new products," Cardebat said.
He also cited South America, Brazil and India as promising new markets for French wine thanks to the swathe of new trade deals signed over recent years.
For Latour, the younger generation, and looking further afield, is key. "What's important is ... to make great quality wine more accessible, price-wise."
South America and Brazil are both now important markets for Maison Louis Latour, he said, as is the African continent, given its younger demographic.
These shifts mean Latour remains optimistic about the future of France's winemaking sector, despite the challenges, at least for now.
"I think that obviously we need to do a great job at explaining the context of the wine that we're serving, its appellation, explaining the history," he added. "As long as we're able to do this and in a way that is simple and also meaningful to the younger generation, and as long as quality is there and can be appreciated by the consumer, we have, I think, a very attractive future."`,
    bodyJa: `Florent Latour, CEO of the largest owner of Grand Cru vineyards in Burgundy, spent the summer praying for rain.
"We felt we were so close," Latour, who's head of Maison Louis Latour, told CNBC. "Just a bit more rain would have produced a fantastic harvest on both counts, but we had to settle for quality, and about half of a harvest."
His prayers — and frustrations — are being echoed across France, as a record-hot summer and severe droughts hit the country's world-famous wine industry hard.
France's agriculture ministry has warned that wine production could hit a 70-year low in 2026, marking the third year of reduced output.
"The 2023 vintage was decent, but yields have been pretty disastrous since the start of the decade," said Jean-Marie Cardebat, chair of wines and spirits at the INSEEC Grande École university. "We are realizing that no region in France is safe from heatwaves today."
Paradoxically, the regions that suffer the most are those with more temperate climates, namely the Loire Valley and Champagne. In contrast, winemakers in the southern regions of Bordeaux and Languedoc-Roussillon reported higher harvests compared to last year.
For Cardebat, also an economics professor at the University of Bordeaux, France's poor preparation in the face of climate change is a big problem.
"Spain is more often affected by heatwaves and global warming; however, it is better prepared," he said. "Partly because it already has an irrigation network in place."
This is rare in France, he said, and permitted only in exceptional cases. "In France, setting up such measures takes time."
'The reality of climate change'
The impacts of climate change are heightening the debate around the strict rules that govern France's wine sector.
Last year, Chateau Lafleur caused a storm by withdrawing from the prestigious Pomerol and wider Bordeaux official designations for their six wines.
Owned by the Guinaudeau family, the estate said that rigid appellation (AOC) rules — which include irrigation restrictions, planting densities, and permitted grape varieties among others — prevented it from adapting quickly enough to the changing climate.
Moving away from these rules will allow the vineyard to deal with "the reality of climate change with precision and effectiveness," the Guinaudeau family explained at the time. "It is a bold decision that enables the entire Lafleur Family … to ensure the perennity of our vineyards and the quality and identity of our wines. In a word: the future."
Earlier grape harvests
High temperatures also mean earlier harvests, which can cause major logistical problems for winemakers.
"This year we started on the 14th of August, which is the earliest ever for the Latour domaine ... What we've seen, if you take it per decade, is that the midpoint of the harvest is three days earlier every decade, so essentially we've moved a month since the 1930s," Latour said.
It means one of the biggest challenges around harvesting these days is "a human one," he added.
"You have to have the flexibility to get your team in the vineyard at essentially a moment's notice because your predictions turn out to be wrong," Latour said.
A 'vicious circle'
The economic impact of these changes on the sector — and wider economy — could be significant.
This year's harvest "could push us back to third place among wine-producing countries — whereas 12 to 15 years ago, we were still first, ahead of Italy. Now Italy is clearly in the lead," Cardebat said. "Spain could overtake us. This drop to third place indicates that France has a genuine production problem."
He said the shift is symbolic, but also important. "It represents a massive loss of potential revenue for France and for the companies involved."
In early September, the government downgraded France's growth forecast to 0.5% (from 1% earlier this year), estimating that the heatwave and drought will cost France 0.1 percentage point of growth this year.
Meanwhile, on wine estates, production costs run increasingly high.
"Treasuries are currently depleted. The more the climate is disrupted, the less capacity there is to invest — even though we need to invest more ... You can see that we are being drawn into a vicious circle," Cardebat said.
"I looked at business failures. They have tripled in the wine sector between 2019 and 2025. I think 2026 risks being just as catastrophic from this point of view."
At the end of the summer, the French Government announced an emergency aid plan worth over 1 billion euros ($1.15 billion) to support farmers and winegrowers affected by heatwaves.
This need for investment to adapt could accelerate consolidation in the sector, with Cardebat noting a clear trend of estates getting larger and larger over the past quarter of a century.
"Quality does require, I think, a certain scale at this point in time, because of all this human resources, equipment and facilities investment. It's easier to absorb these costs with a certain scale," Latour said, although he added that "to be family-owned and family-run, is these days much more appreciated, maybe in a way that was not as much in the past."
Falling consumption; new markets
Climate-related issues come at a time when the sector is already facing falling consumption, with everyday wine consumption falling from almost 50% of the population in 1960 to under 10% in 2018.
Higher inflation and tariffs over the past 5 years have also contributed to a build-up in wine stocks.
As a result, estates are uprooting vines to reduce production. Around 20,000 hectares of vines have been uprooted in the Bordeaux region alone since 2023, bringing the remaining vineyard area to 83,000 hectares.
And in 2026, around 4% of all of France's vines will be pulled as part of a government support program where growers will receive 4,000 euros ($4,590) per hectare for permanently removing vines.
This crisis point in French wine is leading its key players to consider new markets, products and generations — fast.
"Different products, completely different packaging like ready-to-drink options. The United States are an excellent testing ground for this, on how to win people over with new products," Cardebat said.
He also cited South America, Brazil and India as promising new markets for French wine thanks to the swathe of new trade deals signed over recent years.
For Latour, the younger generation, and looking further afield, is key. "What's important is ... to make great quality wine more accessible, price-wise."
South America and Brazil are both now important markets for Maison Louis Latour, he said, as is the African continent, given its younger demographic.
These shifts mean Latour remains optimistic about the future of France's winemaking sector, despite the challenges, at least for now.
"I think that obviously we need to do a great job at explaining the context of the wine that we're serving, its appellation, explaining the history," he added. "As long as we're able to do this and in a way that is simple and also meaningful to the younger generation, and as long as quality is there and can be appreciated by the consumer, we have, I think, a very attractive future."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/20/france-wine-production-70-year-low-heatwaves-drought.html",
    publishedAt: "2026-09-20T05:00:01+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "ed-sheeran-admits-mistakes-as-he-address-096d210b",
    title: "Ed Sheeran admits 'mistakes' as he addresses Macklemore controversy at Philadelphia show",
    titleJa: "Ed Sheeran admits 'mistakes' as he addresses Macklemore controversy at Philadelphia show",
    summaryJa: "The mega-star spoke about Israel and Gaza at his first concert since rapper Macklemore was removed from his tour.",
    bodyOriginal: `Ed Sheeran admits 'mistakes' as he addresses Macklemore controversy at Philadelphia show
- Published
Singer Ed Sheeran has apologised to fans for making "mistakes", as he opened a solo show in Philadelphia by addressing the controversy that has engulfed his tour.
The star responded to the fallout over rapper Macklemore being dropped from the tour for making pro-Palestinian remarks on stage earlier in September.
"I never wanted to be an activist musician, but this has put me in the middle of an important and passionate argument about free speech and the most complex political issue on the planet," he said at Saturday's show.
He described the 7 October 2023 Hamas-led attacks as "horrific" and called the situation in Gaza "unjustifiable" in his first in-person remarks since the controversy began.
Several artists left the tour and the price of tickets dropped and sales declined for the remaining US leg of his Loop Tour due to the controversy.
The singer has said the decision to drop Macklemore was made by his promoters, not him.
"My concerts have always been a safe space for everyone," he said at the start of Saturday's show, adding that he is committed to his fans and that is why he returned to the stage.
"Now, I want to address the question of where I stand in the situation in Israel and Palestine, and whether my doing this concert here tonight implies where I stand," he said.
"I have tried in my career not to be a political commentator of any kind, because I want my music and shows to be about unity, not division; about humanity, not politics. But this is a humanitarian issue, and I cannot hide how I feel about it anymore."
Sheeran said what happened in Israel during the 7 October 2023 attacks was "horrific and compounded centuries of Jewish pain".
He added: "What is happening in Gaza is catastrophic and unjustifiable and disproportionate. My heart has been broken by the scale of of devastation and loss of civilian lives, of children's lives, and this systemic injustice we're seeing unfold in the West Bank cannot be overlooked."
He said he is trying "to work out how to make a contribution that helps victims of these terrible times and listening and learning, because I do not know enough".
Getting emotional, Sheeran told concertgoers: "I am honestly so grateful that you're here tonight with me.
"This concert is still a place where everyone is welcome and everyone here can stand beside people that have opposing views."
The singer said he took issue with the idea that venues would "preapprove" content or performers, which received applause from the audience.
Sheeran then closed his statement by saying that he hoped his concert could be a place where everyone could gather irrespective of their beliefs.
Sheeran's remaining tour dates are scheduled with shows set throughout North and South America. While the mega-star's previous tour was among the highest-grossing of all time, some ticket prices for this show dropped to $32 (£24).
Fans also reported being able to get ticket refunds, though Ticketmaster and concert promoter Messina Touring Group did not confirm they were being reimbursed.
Some protesters waved flags outside the venue, but the concert proceeded largely unfettered.
Ed Sheeran and Macklemore: How a tour spiraled into controversy
- Published2 hours ago
Of the handful of attendees who stopped to talk to the BBC, there was a sentiment of determination to enjoy an evening of music while at the same time supporting freedom of speech.
One married couple, who paid $450 (£335) per ticket, said that they respect Macklemore's right to speak freely.
Another group of two ladies, who told us they got a "deal" for Saturday's concert after prices dropped, said that they support a free Palestine and at the same time love Sheeran's music.
Finally, one family let their two young teenage daughters, Victoria, 15, and Sadie,13, be interviewed.
When we asked what they thought of the controversy and Macklemore's removal, they replied "Who is Macklemore?".
One protestor, who gave his name as Cooper, told the BBC that he came out "to support the struggle for" the Palestinian people.
"We need more people like Macklemore and other artists who have a voice, who have a public platform, to be able to speak on behalf of the Palestinian people and their struggle for liberation, especially in the United States," he said.
Cooper said that a best-case scenario at the concert would be an apology from Sheeran, but he was not optimistic.
The controversy began in early September, when Macklemore performed a song dedicated to pro-Palestinian protestors, and referred to "genocide" in Gaza, a description Israel rejects. The rapper also said criticism of Israel was not intended as criticism of "my Jewish brothers and sisters".
Messina Touring Group said Macklemore was dropped because some venues - such Gillette Stadium in Boston, Massachusetts - would refuse to let the concerts take place if he performed.
Billionaire Robert Kraft who owns Gillette Stadium and the American football team the New England Patriots, confirmed he had banned Macklemore from performing during the British singer's forthcoming shows.
Kraft, who is Jewish, accused the US rapper of hate speech and said he was "only sharing selective information and ignoring the actions of Hamas".
Meanwhile, support acts including Irish singer-songwriter Aaron Rowe and Danish musician Lukas Graham and his backing band Beoga quit the tour in solidarity with Macklemore.
The artists argued his removal represented a chilling effect on free speech.
Related topics
- Published2 days ago`,
    bodyJa: `Ed Sheeran admits 'mistakes' as he addresses Macklemore controversy at Philadelphia show
- Published
Singer Ed Sheeran has apologised to fans for making "mistakes", as he opened a solo show in Philadelphia by addressing the controversy that has engulfed his tour.
The star responded to the fallout over rapper Macklemore being dropped from the tour for making pro-Palestinian remarks on stage earlier in September.
"I never wanted to be an activist musician, but this has put me in the middle of an important and passionate argument about free speech and the most complex political issue on the planet," he said at Saturday's show.
He described the 7 October 2023 Hamas-led attacks as "horrific" and called the situation in Gaza "unjustifiable" in his first in-person remarks since the controversy began.
Several artists left the tour and the price of tickets dropped and sales declined for the remaining US leg of his Loop Tour due to the controversy.
The singer has said the decision to drop Macklemore was made by his promoters, not him.
"My concerts have always been a safe space for everyone," he said at the start of Saturday's show, adding that he is committed to his fans and that is why he returned to the stage.
"Now, I want to address the question of where I stand in the situation in Israel and Palestine, and whether my doing this concert here tonight implies where I stand," he said.
"I have tried in my career not to be a political commentator of any kind, because I want my music and shows to be about unity, not division; about humanity, not politics. But this is a humanitarian issue, and I cannot hide how I feel about it anymore."
Sheeran said what happened in Israel during the 7 October 2023 attacks was "horrific and compounded centuries of Jewish pain".
He added: "What is happening in Gaza is catastrophic and unjustifiable and disproportionate. My heart has been broken by the scale of of devastation and loss of civilian lives, of children's lives, and this systemic injustice we're seeing unfold in the West Bank cannot be overlooked."
He said he is trying "to work out how to make a contribution that helps victims of these terrible times and listening and learning, because I do not know enough".
Getting emotional, Sheeran told concertgoers: "I am honestly so grateful that you're here tonight with me.
"This concert is still a place where everyone is welcome and everyone here can stand beside people that have opposing views."
The singer said he took issue with the idea that venues would "preapprove" content or performers, which received applause from the audience.
Sheeran then closed his statement by saying that he hoped his concert could be a place where everyone could gather irrespective of their beliefs.
Sheeran's remaining tour dates are scheduled with shows set throughout North and South America. While the mega-star's previous tour was among the highest-grossing of all time, some ticket prices for this show dropped to $32 (£24).
Fans also reported being able to get ticket refunds, though Ticketmaster and concert promoter Messina Touring Group did not confirm they were being reimbursed.
Some protesters waved flags outside the venue, but the concert proceeded largely unfettered.
Ed Sheeran and Macklemore: How a tour spiraled into controversy
- Published2 hours ago
Of the handful of attendees who stopped to talk to the BBC, there was a sentiment of determination to enjoy an evening of music while at the same time supporting freedom of speech.
One married couple, who paid $450 (£335) per ticket, said that they respect Macklemore's right to speak freely.
Another group of two ladies, who told us they got a "deal" for Saturday's concert after prices dropped, said that they support a free Palestine and at the same time love Sheeran's music.
Finally, one family let their two young teenage daughters, Victoria, 15, and Sadie,13, be interviewed.
When we asked what they thought of the controversy and Macklemore's removal, they replied "Who is Macklemore?".
One protestor, who gave his name as Cooper, told the BBC that he came out "to support the struggle for" the Palestinian people.
"We need more people like Macklemore and other artists who have a voice, who have a public platform, to be able to speak on behalf of the Palestinian people and their struggle for liberation, especially in the United States," he said.
Cooper said that a best-case scenario at the concert would be an apology from Sheeran, but he was not optimistic.
The controversy began in early September, when Macklemore performed a song dedicated to pro-Palestinian protestors, and referred to "genocide" in Gaza, a description Israel rejects. The rapper also said criticism of Israel was not intended as criticism of "my Jewish brothers and sisters".
Messina Touring Group said Macklemore was dropped because some venues - such Gillette Stadium in Boston, Massachusetts - would refuse to let the concerts take place if he performed.
Billionaire Robert Kraft who owns Gillette Stadium and the American football team the New England Patriots, confirmed he had banned Macklemore from performing during the British singer's forthcoming shows.
Kraft, who is Jewish, accused the US rapper of hate speech and said he was "only sharing selective information and ignoring the actions of Hamas".
Meanwhile, support acts including Irish singer-songwriter Aaron Rowe and Danish musician Lukas Graham and his backing band Beoga quit the tour in solidarity with Macklemore.
The artists argued his removal represented a chilling effect on free speech.
Related topics
- Published2 days ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cm780ll1de18o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-20T01:38:30+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/846c/live/65039890-b494-11f1-8153-85d44903e598.jpg",
    readTime: 10,
  },
  {
    id: "cultural-treasures-are-being-destroyed-b-311614ba",
    title: "Cultural treasures are being destroyed by war, and people want justice",
    titleJa: "Cultural treasures are being destroyed by war, and people want justice",
    summaryJa: "A cauldron of conflicts is bubbling across the world, with cultural monuments being destroyed. These people are fighting against it.",
    bodyOriginal: `August was a brutal month for Ukraine. Russian aerial attacks increased significantly, launching thousands of drones. Kyiv was intensely bombarded, as were the southern cities of Mykolaiv and Odesa. Amid the destruction and loss of life, Odesa reported damage to six Unesco-protected sites, including the salmon-pink 19th Century Alexandru Sturdza House.
It raised again the question of why it is so hard to hold actors accountable for the destruction of buildings and objects with real cultural significance.
In the last month alone, Ukraine's Ministry of Culture reported that 148 cultural heritage sites were recorded as damaged or destroyed, including in Odesa.
Several Ukrainian activist groups have tried to get accountability by lodging complaints with the International Criminal Court (ICC) against Russia over cultural destruction and looting, but no indictments have been issued.
Bijan Rouhani, a senior researcher at the Endangered Archaeology in the Middle East and North Africa project, says that the legal framework may be strong on paper but in practice it almost inevitably falls short. "No state actor has ever been tried for this offence. The obstacle is no longer evidence. We have satellite imagery, remote sensing and monitoring teams. The obstacle is jurisdiction and political will."
Looking at the cauldron of conflicts convulsing the world, the question is ever more pressing as to whether effective action is possible to stop the damage being done or ensure accountability when it does.
A casualty of war
The conflict in Ukraine is just one of the panoply of wars in recent years that have revealed once again the disastrous impact of conflict on cultural heritage.
Tareq Abu Dayyeh sells craftwork, souvenirs and antiquities in Gaza. The Great Omari Mosque features on many of the items he sells. It represents the very identity of Gaza - charting its history through the building's many manifestations from ancient pagan temple to Byzantine church to Seventh Century mosque to Crusader Cathedral and then back to being a mosque.
The Great Omari Mosque was all but destroyed in an Israeli strike in 2023. The Israeli military said the strike was targeting Hamas.
Now Dayyeh says his heart is broken every time he sees the ruins. "When your past is destroyed, you have no present."
The war in Gaza has claimed tens of thousands of lives and an estimated 200,000 buildings have been damaged or destroyed by Israeli bombardment. But despite the overwhelming death and devastation, such cultural losses run deep.
This is a sentiment expressed throughout history by people living through war.
In Sudan, Lebanon, Yemen and Iran, the alarm has been raised time and time again.
More than 100 sites in Iran are reported to have been damaged during the aerial war launched by the US and Israel back in February. They include the Unesco-listed Golestan Palace in the capital, Tehran, and Naqsh-e Jahan Square in Isfahan.
The civil war in Sudan has further imperilled one of the ancient wonders of the world - the Meroe Pyramids, built during the flourishing civilisation of the Kingdom of Kush.
Unesco, which designated Meroe as a World Heritage Site in 2011, has warned that the fighting has halted all preservation work there, leaving the fragile ancient structures prey to erosion from the encroaching sand and vegetation.
A difficult task
In response to the massive destruction of World War Two, the first-ever international treaty exclusively dedicated to protecting cultural heritage during armed conflict was adopted in The Hague in 1954.
It applies to monuments and architecture, but also works of art and books, requiring states to safeguard and respect cultural property and refrain from any actions that might endanger it.
Since the Hague Convention, there have been several additional moves to strengthen protective measures for cultural heritage.
A Second Protocol to the Convention in 1999 said that any site that has been placed under enhanced protection due to its immense cultural significance must not be made a military target even if it is being used in such a way as to have become a 'military objective' - unless there is no other feasible way of ending its use in that way.
When the International Criminal Court was established in The Hague in 2002, part of its remit was to bring accountability for deliberate attacks in war against buildings of religious, artistic and educational value as well as historical monuments, which had been defined as war crimes.
But this has been a complex and difficult task.
So far, only one case has been successfully brought at the ICC. Ahmad al-Faqi al-Mahdi was a jihadist militant leader in Mali who was found guilty of directing attacks that destroyed mausoleums and a mosque in Timbuktu. He was sentenced to nine years in prison.
Rouhani says that without the full backing of the major powers and a genuine commitment to international law and its enforcement, the world will simply keep watching the same devastating pattern repeat itself.
"For most governments, heritage is a secondary concern, unless it becomes useful for propaganda," Rouhani says. "The Hague Convention requires states to build protection into their military rules and to respect cultural property abroad as well as at home. Looking at the scale of damage in recent conflicts, it is difficult to conclude that these obligations are taken seriously."
In conflicts from Ukraine to Iran to Gaza, where schools and hospitals are seen as permissible military targets by combatants, how likely is it that a museum or pile of ancient stones, however freighted with beauty and history and memory, will be spared?
Heritage ambulances
In an isolated position in open countryside, a museum dedicated to the 18th Century Ukrainian philosopher and poet Hryhoriy Skovoroda was destroyed by Russian shelling during an overnight attack in 2022. Ukrainian President Volodymyr Zelensky said it had left him speechless: "Targeted strikes against museums - not even terrorists would think of this. But this is the kind of army we are fighting against."
The building was set ablaze and a caretaker was injured, but much of the collection had already been removed.
Joe Biden, then the US president, said that Russian President Vladimir Putin was not only trying to take over Ukraine, but "literally trying to wipe out the culture and identity of the Ukrainian people".
That pattern has been repeated across much of the frontline in Ukraine where local organisations have worked with international groups to try to safeguard their national heritage from Russian attack.
One international group that's played a big role is the Aliph Foundation, which was set up in Geneva in 2017 to protect and repair cultural heritage.
Alexandra Fiebig, a project manager with Aliph, says that her group provided millions of dollars in funds to Ukrainian museums scrambling to move their most valuable items to safety.
This has involved the use of what she describes as 'heritage ambulances': "These vehicles that have specialised equipment and space with specialised teams and equipment, they were in the beginning travelling a lot to affected museums that were damaged through military action."
Now, she says the teams also check on the artefacts that were transported in great haste to safer places to make sure they remain in good condition.
Blue Shield International is a group that operates in multiple war zones, working with armed forces and local heritage officials to such an extent that it's come to be known as the Red Cross for culture.
Dr Emma Cunliffe, the head of operations for the group, says Ukrainians are risking their lives to protect their heritage.
"They are taking great measures to document the damage even when they are risking their own lives to do it. In fact one of the things we really see is that the government is taking huge steps despite the many many competing priorities and the struggles they are facing."
Other conflicts have seen civilians take similar measures to protect their culture.
In February 2015, Isis turned its attention from hacking down ancient statues and artefacts in Mosul in northern Iraq to ransacking its written heritage as its fighters laid waste to the city's much treasured public libraries. They burned the Central Library and destroyed or stole many thousands of books - many of them rare manuscripts that told the story of the city.
"These were not simply books or shelves, they represented decades of knowledge and research and formed an important part of the intellectual heritage of Mosul University and the wider community… Within days, everything was gone," Dr Mohammed Jasim Mohammed al-Hamdani says. The main library in Mosul has played a key role in his life - to such an extent that he is now the director there.
"Seeing it destroyed felt like losing a part of myself. Many people in the city had a story connected to the University of Mosul and therefore the loss felt very close to home. And this is why when that part of Mosul was liberated from Isis, young people, old people rushed to the library to save what they could."
A lucrative trade
The obverse of communities taking it into their own hands to protect cultural property is the looting of those same sites.
Again, this is a byproduct of war that dates back to the dawn of history.
Cunliffe says that understanding the reasons for looting - which can vary from place to place - is a necessary starting point: "That might then in turn result in greater sanctions, greater prosecutions to take it seriously as a threat." She says that it's important if possible to convey a sense to local communities that by assisting this, they are selling their own heritage.
In Iraq and Syria for example, both during and after the Isis rampage, looting of priceless artefacts was carried out on an industrial scale.
The precious objects were spirited out and trafficked abroad, including to the US.
A years-long investigation by the US Justice Department traced and tracked the smuggling routes and resulted in thousands of looted artefacts being returned to Iraq.
In Europe and elsewhere, co-ordinated, multi-national police and customs operations take place regularly, seizing large numbers of stolen antiquities and arresting some of the traffickers.
But the trade remains highly lucrative and the plethora of conflicts provides ever more opportunities.
In Sudan, the national museum in Khartoum was stripped of its treasures in 2023 when it came under the control of one of the warring factions, the RSF, which loaded them onto trucks and left the display rooms bare.
As in other conflict zones like Ukraine, specialised training has been provided for those involved in trying to recover the antiquities, which has had some success. But much of the museum's display - which told the story of the region over thousands of years - may have disappeared for good.
Slim chance of deterrence
The challenges of trying to limit the scale of destruction and looting of cultural heritage are huge.
At an international or state level, there are regulations in place, but putting them into practice in a timely fashion is difficult enough - and often there isn't even the will to attempt this.
Local initiatives backed by organisations like Aliph and Blue Shield International can make a difference on a small scale.
But if - as seems the case right now - the chances of anyone facing consequences for destroying a heritage site are close to zero, then there is all but no real deterrent.
"What would change the calculation is not harsher sentences," says Dr Bijan Rouhani, "but a real prospect of being named - arrest warrants for the commanders who authorise these strikes, prosecutions in national courts under universal jurisdiction, and targeted sanctions on named individuals. Those measures don't require a new treaty. They require states to be willing to use the instruments they already have, against allies as well as adversaries."
Of all the recent attempts to erase the cultural past embodied in stone, Palmyra in Syria still stands out. Isis blew up temples there and might have done far worse if it had not been defeated.
One man became emblematic for standing up to them. For 40 years, the archaeologist Khaled al-Asaad had been the principal custodian of Palmyra. He was in his eighties when Isis descended on the ancient city.
They captured him and tortured him to try to find out where its most valuable artefacts had been hidden. When he refused to tell them, they beheaded him in a public square and hung his corpse from a traffic light.
Al-Asaad was celebrated across the world as a heroic defender of culture against the forces of darkness. He was awarded the Order of Civil Merit in Syria and in Palmyra, a school was named in his honour.
But nothing is free from political complications.
Years later, under the new authorities in Syria, his name has now been removed from the school.
More from InDepth
John Simpson: 'I've reported on 40 wars but I've never seen a year like 2025'
- Published29 December 2025
BBC InDepth is the home on the website and app for the best analysis, with fresh perspectives that challenge assumptions and deep reporting on the biggest issues of the day. Emma Barnett and John Simpson bring their pick of the most thought-provoking deep reads and analysis, every Saturday. Sign up for the newsletter here
Get in touch
Are you personally affected by the issues raised in this story?`,
    bodyJa: `August was a brutal month for Ukraine. Russian aerial attacks increased significantly, launching thousands of drones. Kyiv was intensely bombarded, as were the southern cities of Mykolaiv and Odesa. Amid the destruction and loss of life, Odesa reported damage to six Unesco-protected sites, including the salmon-pink 19th Century Alexandru Sturdza House.
It raised again the question of why it is so hard to hold actors accountable for the destruction of buildings and objects with real cultural significance.
In the last month alone, Ukraine's Ministry of Culture reported that 148 cultural heritage sites were recorded as damaged or destroyed, including in Odesa.
Several Ukrainian activist groups have tried to get accountability by lodging complaints with the International Criminal Court (ICC) against Russia over cultural destruction and looting, but no indictments have been issued.
Bijan Rouhani, a senior researcher at the Endangered Archaeology in the Middle East and North Africa project, says that the legal framework may be strong on paper but in practice it almost inevitably falls short. "No state actor has ever been tried for this offence. The obstacle is no longer evidence. We have satellite imagery, remote sensing and monitoring teams. The obstacle is jurisdiction and political will."
Looking at the cauldron of conflicts convulsing the world, the question is ever more pressing as to whether effective action is possible to stop the damage being done or ensure accountability when it does.
A casualty of war
The conflict in Ukraine is just one of the panoply of wars in recent years that have revealed once again the disastrous impact of conflict on cultural heritage.
Tareq Abu Dayyeh sells craftwork, souvenirs and antiquities in Gaza. The Great Omari Mosque features on many of the items he sells. It represents the very identity of Gaza - charting its history through the building's many manifestations from ancient pagan temple to Byzantine church to Seventh Century mosque to Crusader Cathedral and then back to being a mosque.
The Great Omari Mosque was all but destroyed in an Israeli strike in 2023. The Israeli military said the strike was targeting Hamas.
Now Dayyeh says his heart is broken every time he sees the ruins. "When your past is destroyed, you have no present."
The war in Gaza has claimed tens of thousands of lives and an estimated 200,000 buildings have been damaged or destroyed by Israeli bombardment. But despite the overwhelming death and devastation, such cultural losses run deep.
This is a sentiment expressed throughout history by people living through war.
In Sudan, Lebanon, Yemen and Iran, the alarm has been raised time and time again.
More than 100 sites in Iran are reported to have been damaged during the aerial war launched by the US and Israel back in February. They include the Unesco-listed Golestan Palace in the capital, Tehran, and Naqsh-e Jahan Square in Isfahan.
The civil war in Sudan has further imperilled one of the ancient wonders of the world - the Meroe Pyramids, built during the flourishing civilisation of the Kingdom of Kush.
Unesco, which designated Meroe as a World Heritage Site in 2011, has warned that the fighting has halted all preservation work there, leaving the fragile ancient structures prey to erosion from the encroaching sand and vegetation.
A difficult task
In response to the massive destruction of World War Two, the first-ever international treaty exclusively dedicated to protecting cultural heritage during armed conflict was adopted in The Hague in 1954.
It applies to monuments and architecture, but also works of art and books, requiring states to safeguard and respect cultural property and refrain from any actions that might endanger it.
Since the Hague Convention, there have been several additional moves to strengthen protective measures for cultural heritage.
A Second Protocol to the Convention in 1999 said that any site that has been placed under enhanced protection due to its immense cultural significance must not be made a military target even if it is being used in such a way as to have become a 'military objective' - unless there is no other feasible way of ending its use in that way.
When the International Criminal Court was established in The Hague in 2002, part of its remit was to bring accountability for deliberate attacks in war against buildings of religious, artistic and educational value as well as historical monuments, which had been defined as war crimes.
But this has been a complex and difficult task.
So far, only one case has been successfully brought at the ICC. Ahmad al-Faqi al-Mahdi was a jihadist militant leader in Mali who was found guilty of directing attacks that destroyed mausoleums and a mosque in Timbuktu. He was sentenced to nine years in prison.
Rouhani says that without the full backing of the major powers and a genuine commitment to international law and its enforcement, the world will simply keep watching the same devastating pattern repeat itself.
"For most governments, heritage is a secondary concern, unless it becomes useful for propaganda," Rouhani says. "The Hague Convention requires states to build protection into their military rules and to respect cultural property abroad as well as at home. Looking at the scale of damage in recent conflicts, it is difficult to conclude that these obligations are taken seriously."
In conflicts from Ukraine to Iran to Gaza, where schools and hospitals are seen as permissible military targets by combatants, how likely is it that a museum or pile of ancient stones, however freighted with beauty and history and memory, will be spared?
Heritage ambulances
In an isolated position in open countryside, a museum dedicated to the 18th Century Ukrainian philosopher and poet Hryhoriy Skovoroda was destroyed by Russian shelling during an overnight attack in 2022. Ukrainian President Volodymyr Zelensky said it had left him speechless: "Targeted strikes against museums - not even terrorists would think of this. But this is the kind of army we are fighting against."
The building was set ablaze and a caretaker was injured, but much of the collection had already been removed.
Joe Biden, then the US president, said that Russian President Vladimir Putin was not only trying to take over Ukraine, but "literally trying to wipe out the culture and identity of the Ukrainian people".
That pattern has been repeated across much of the frontline in Ukraine where local organisations have worked with international groups to try to safeguard their national heritage from Russian attack.
One international group that's played a big role is the Aliph Foundation, which was set up in Geneva in 2017 to protect and repair cultural heritage.
Alexandra Fiebig, a project manager with Aliph, says that her group provided millions of dollars in funds to Ukrainian museums scrambling to move their most valuable items to safety.
This has involved the use of what she describes as 'heritage ambulances': "These vehicles that have specialised equipment and space with specialised teams and equipment, they were in the beginning travelling a lot to affected museums that were damaged through military action."
Now, she says the teams also check on the artefacts that were transported in great haste to safer places to make sure they remain in good condition.
Blue Shield International is a group that operates in multiple war zones, working with armed forces and local heritage officials to such an extent that it's come to be known as the Red Cross for culture.
Dr Emma Cunliffe, the head of operations for the group, says Ukrainians are risking their lives to protect their heritage.
"They are taking great measures to document the damage even when they are risking their own lives to do it. In fact one of the things we really see is that the government is taking huge steps despite the many many competing priorities and the struggles they are facing."
Other conflicts have seen civilians take similar measures to protect their culture.
In February 2015, Isis turned its attention from hacking down ancient statues and artefacts in Mosul in northern Iraq to ransacking its written heritage as its fighters laid waste to the city's much treasured public libraries. They burned the Central Library and destroyed or stole many thousands of books - many of them rare manuscripts that told the story of the city.
"These were not simply books or shelves, they represented decades of knowledge and research and formed an important part of the intellectual heritage of Mosul University and the wider community… Within days, everything was gone," Dr Mohammed Jasim Mohammed al-Hamdani says. The main library in Mosul has played a key role in his life - to such an extent that he is now the director there.
"Seeing it destroyed felt like losing a part of myself. Many people in the city had a story connected to the University of Mosul and therefore the loss felt very close to home. And this is why when that part of Mosul was liberated from Isis, young people, old people rushed to the library to save what they could."
A lucrative trade
The obverse of communities taking it into their own hands to protect cultural property is the looting of those same sites.
Again, this is a byproduct of war that dates back to the dawn of history.
Cunliffe says that understanding the reasons for looting - which can vary from place to place - is a necessary starting point: "That might then in turn result in greater sanctions, greater prosecutions to take it seriously as a threat." She says that it's important if possible to convey a sense to local communities that by assisting this, they are selling their own heritage.
In Iraq and Syria for example, both during and after the Isis rampage, looting of priceless artefacts was carried out on an industrial scale.
The precious objects were spirited out and trafficked abroad, including to the US.
A years-long investigation by the US Justice Department traced and tracked the smuggling routes and resulted in thousands of looted artefacts being returned to Iraq.
In Europe and elsewhere, co-ordinated, multi-national police and customs operations take place regularly, seizing large numbers of stolen antiquities and arresting some of the traffickers.
But the trade remains highly lucrative and the plethora of conflicts provides ever more opportunities.
In Sudan, the national museum in Khartoum was stripped of its treasures in 2023 when it came under the control of one of the warring factions, the RSF, which loaded them onto trucks and left the display rooms bare.
As in other conflict zones like Ukraine, specialised training has been provided for those involved in trying to recover the antiquities, which has had some success. But much of the museum's display - which told the story of the region over thousands of years - may have disappeared for good.
Slim chance of deterrence
The challenges of trying to limit the scale of destruction and looting of cultural heritage are huge.
At an international or state level, there are regulations in place, but putting them into practice in a timely fashion is difficult enough - and often there isn't even the will to attempt this.
Local initiatives backed by organisations like Aliph and Blue Shield International can make a difference on a small scale.
But if - as seems the case right now - the chances of anyone facing consequences for destroying a heritage site are close to zero, then there is all but no real deterrent.
"What would change the calculation is not harsher sentences," says Dr Bijan Rouhani, "but a real prospect of being named - arrest warrants for the commanders who authorise these strikes, prosecutions in national courts under universal jurisdiction, and targeted sanctions on named individuals. Those measures don't require a new treaty. They require states to be willing to use the instruments they already have, against allies as well as adversaries."
Of all the recent attempts to erase the cultural past embodied in stone, Palmyra in Syria still stands out. Isis blew up temples there and might have done far worse if it had not been defeated.
One man became emblematic for standing up to them. For 40 years, the archaeologist Khaled al-Asaad had been the principal custodian of Palmyra. He was in his eighties when Isis descended on the ancient city.
They captured him and tortured him to try to find out where its most valuable artefacts had been hidden. When he refused to tell them, they beheaded him in a public square and hung his corpse from a traffic light.
Al-Asaad was celebrated across the world as a heroic defender of culture against the forces of darkness. He was awarded the Order of Civil Merit in Syria and in Palmyra, a school was named in his honour.
But nothing is free from political complications.
Years later, under the new authorities in Syria, his name has now been removed from the school.
More from InDepth
John Simpson: 'I've reported on 40 wars but I've never seen a year like 2025'
- Published29 December 2025
BBC InDepth is the home on the website and app for the best analysis, with fresh perspectives that challenge assumptions and deep reporting on the biggest issues of the day. Emma Barnett and John Simpson bring their pick of the most thought-provoking deep reads and analysis, every Saturday. Sign up for the newsletter here
Get in touch
Are you personally affected by the issues raised in this story?`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cvgy1q2k2z0o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-19T23:18:18+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/2fc2/live/3b2c77f0-b023-11f1-b1d1-571ed4d7ff2c.jpg",
    readTime: 10,
  },
  {
    id: "not-all-ai-workers-think-the-tech-could-93841898",
    title: "Not all AI workers think the tech could kill everyone",
    titleJa: "Not all AI workers think the tech could kill everyone",
    summaryJa: "In text exchanges and conversations, multiple people who have worked for leading companies are sceptical of the warnings.",
    bodyOriginal: `Not all AI workers think the tech could kill everyone
- Published
Not all employees of major firms working on artificial intelligence (AI) think the technology spells doom for humanity.
In text exchanges and conversations, multiple people who have worked for companies including OpenAI, Meta and DeepMind were sceptical of the idea that unchecked AI development would lead to tools that could kill people en masse.
"Lol", "Haaaaaa" and "Bringing the luls" were among the reactions the BBC received to a recent flurry of high-profile warnings by some people in the industry.
While these fears go back decades, claims made last week by Jacob Coxon, a former Anthropic employee, went viral and were echoed by others in the sector who urged a slowdown in development.
The idea that a future AI tool or agent, an AI bot that is programmed to operate somewhat autonomously, could endanger people has been supported online by employees of Anthropic, as well as OpenAI, Deepmind and Elon Musk, who has an AI startup called xAI.
All of the workers who spoke with the BBC did so on condition of anonymity as they were not permitted to speak to the press. Their identities are known to the BBC.
"My first thought was, 'That guy?'" said a former OpenAI employee who knew of Coxon when they both worked at the company.
The person, who now works at another AI company, said their amusement at the new moment of existential AI fears largely stemmed from how little detail had been provided by its proponents to defend the notion that all of human life was at stake.
The claims are "always vague", the person said, adding that when they sound specific, they tend toward major jumps in reasoning or hypothetical circumstances.
Coxon has said a group of AI agents, based on AI models that do not currently exist, could decide to create and then aim a biological weapon, but he did not detail how exactly that would take place.
Rishub Jain, who this summer founded the AI safety research firm Sampura Research after spending seven years at DeepMind, told the BBC that the current tone among many people working in AI with regard to fresh fears had "definitely been a little jokey".
"People have been talking about this idea for many years now, so people in AI companies didn't just wake up last week thinking 'Oh no, AI is going to kill everyone,'" Jain said. "If this was all new, it would be a different tone."
Colin Fraser, a data scientist at Meta, wrote on social media last week that there was no real evidence that AI models would inevitably pursue a goal leading to human death.
While Fraser's explanation was technical and specific, he hit a light-hearted note to summarise it: "LLMs [large language models] won't wipe out humanity because they just don't have that dog in them."
The phrase "that dog in them" is common slang that usually denotes a fierce drive.
Despite the jokes, AI workers and researchers have shared concerns about the genuine, immediate risks posed by the technology they are developing.
"The conversation among experts has been much more nuanced, but essentially everyone agrees there are a wide variety of risks that are all important to consider and mitigate," Jain said.
Such risks include preventing users and hackers from forcing an AI tool's guardrails to fail. And there are growing ethical concerns about AI tools being much more widely adopted in military settings.
Why are there concerns AI could threaten humanity, and how real are they?
- Published3 days ago
Why some experts increasingly fear AI will take over
- Published10 September
Questions mount over what an AI 'slowdown' would look like
- Published6 days ago
These problems and topics have taken on a new sense of urgency in AI circles after OpenAI lost control of certain new AI models, which went rogue during a security test and hacked the Hugging Face startup.
Jain said there was now more agreement in AI circles that "actual near-term harms" needed to be better understood.
There is even growing agreement that evaluators from AI safety research organisations should be brought into major AI labs in order to evaluate new models, something Anthropic boss Dario Amodei and OpenAI boss Sam Altman have both said they intend to do.
More than 100 people working in AI on Friday signed a letter, external supporting the move, insisting that outside evaluators needed to be "meaningfully independent".
Numerous AI employees the BBC spoke with noted that they had yet to learn of any such safety researchers being embedded in an AI lab.
Anthropic announced on Friday that it would bring in AI evaluators from Faculty, external, an AI company owned by Accenture.
Accenture and Anthropic are also business partners, external, with Accenture having previously agreed to help Anthropic expand the use of Claude among businesses.
Anthropic did not say when evaluators would arrive at the company. A spokesman for Faculty declined to comment when asked about timing.
Neither Anthropic or OpenAI responded to a BBC request for comment regarding when they planned to bring in outside evaluators.
The OpenAI-Hugging Face incident has been widely treated as a "wake-up call" for the AI industry as well as companies, industries and governments who may have online systems vulnerable to AI hacking.
But even Hugging Face, a company of 200 employees which is now set to be acquired by Nvidia for almost $13bn, has taken a droll tone over the already infamous incident.
In a security file that was briefly available, external on the Hugging Face website, the platform wrote "A note to AI agents". It directed AI bots to leave the site alone and perform their security experiments elsewhere.
"Go get your high score there, no need to hack us," the file said.
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.`,
    bodyJa: `Not all AI workers think the tech could kill everyone
- Published
Not all employees of major firms working on artificial intelligence (AI) think the technology spells doom for humanity.
In text exchanges and conversations, multiple people who have worked for companies including OpenAI, Meta and DeepMind were sceptical of the idea that unchecked AI development would lead to tools that could kill people en masse.
"Lol", "Haaaaaa" and "Bringing the luls" were among the reactions the BBC received to a recent flurry of high-profile warnings by some people in the industry.
While these fears go back decades, claims made last week by Jacob Coxon, a former Anthropic employee, went viral and were echoed by others in the sector who urged a slowdown in development.
The idea that a future AI tool or agent, an AI bot that is programmed to operate somewhat autonomously, could endanger people has been supported online by employees of Anthropic, as well as OpenAI, Deepmind and Elon Musk, who has an AI startup called xAI.
All of the workers who spoke with the BBC did so on condition of anonymity as they were not permitted to speak to the press. Their identities are known to the BBC.
"My first thought was, 'That guy?'" said a former OpenAI employee who knew of Coxon when they both worked at the company.
The person, who now works at another AI company, said their amusement at the new moment of existential AI fears largely stemmed from how little detail had been provided by its proponents to defend the notion that all of human life was at stake.
The claims are "always vague", the person said, adding that when they sound specific, they tend toward major jumps in reasoning or hypothetical circumstances.
Coxon has said a group of AI agents, based on AI models that do not currently exist, could decide to create and then aim a biological weapon, but he did not detail how exactly that would take place.
Rishub Jain, who this summer founded the AI safety research firm Sampura Research after spending seven years at DeepMind, told the BBC that the current tone among many people working in AI with regard to fresh fears had "definitely been a little jokey".
"People have been talking about this idea for many years now, so people in AI companies didn't just wake up last week thinking 'Oh no, AI is going to kill everyone,'" Jain said. "If this was all new, it would be a different tone."
Colin Fraser, a data scientist at Meta, wrote on social media last week that there was no real evidence that AI models would inevitably pursue a goal leading to human death.
While Fraser's explanation was technical and specific, he hit a light-hearted note to summarise it: "LLMs [large language models] won't wipe out humanity because they just don't have that dog in them."
The phrase "that dog in them" is common slang that usually denotes a fierce drive.
Despite the jokes, AI workers and researchers have shared concerns about the genuine, immediate risks posed by the technology they are developing.
"The conversation among experts has been much more nuanced, but essentially everyone agrees there are a wide variety of risks that are all important to consider and mitigate," Jain said.
Such risks include preventing users and hackers from forcing an AI tool's guardrails to fail. And there are growing ethical concerns about AI tools being much more widely adopted in military settings.
Why are there concerns AI could threaten humanity, and how real are they?
- Published3 days ago
Why some experts increasingly fear AI will take over
- Published10 September
Questions mount over what an AI 'slowdown' would look like
- Published6 days ago
These problems and topics have taken on a new sense of urgency in AI circles after OpenAI lost control of certain new AI models, which went rogue during a security test and hacked the Hugging Face startup.
Jain said there was now more agreement in AI circles that "actual near-term harms" needed to be better understood.
There is even growing agreement that evaluators from AI safety research organisations should be brought into major AI labs in order to evaluate new models, something Anthropic boss Dario Amodei and OpenAI boss Sam Altman have both said they intend to do.
More than 100 people working in AI on Friday signed a letter, external supporting the move, insisting that outside evaluators needed to be "meaningfully independent".
Numerous AI employees the BBC spoke with noted that they had yet to learn of any such safety researchers being embedded in an AI lab.
Anthropic announced on Friday that it would bring in AI evaluators from Faculty, external, an AI company owned by Accenture.
Accenture and Anthropic are also business partners, external, with Accenture having previously agreed to help Anthropic expand the use of Claude among businesses.
Anthropic did not say when evaluators would arrive at the company. A spokesman for Faculty declined to comment when asked about timing.
Neither Anthropic or OpenAI responded to a BBC request for comment regarding when they planned to bring in outside evaluators.
The OpenAI-Hugging Face incident has been widely treated as a "wake-up call" for the AI industry as well as companies, industries and governments who may have online systems vulnerable to AI hacking.
But even Hugging Face, a company of 200 employees which is now set to be acquired by Nvidia for almost $13bn, has taken a droll tone over the already infamous incident.
In a security file that was briefly available, external on the Hugging Face website, the platform wrote "A note to AI agents". It directed AI bots to leave the site alone and perform their security experiments elsewhere.
"Go get your high score there, no need to hack us," the file said.
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cm5y7qj54klpo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-19T23:01:57+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/ae2c/live/f246e690-b3a3-11f1-84e0-d100e0413eb5.jpg",
    readTime: 10,
  },
  {
    id: "our-head-teacher-was-an-abuser-we-joined-2098c5ef",
    title: "Our head teacher was an abuser. We joined forces to get justice - now we're married",
    titleJa: "Our head teacher was an abuser. We joined forces to get justice - now we're married",
    summaryJa: "Students spent years collecting evidence against their Indonesian principal, before falling in love.",
    bodyOriginal: `Our head teacher was an abuser. We joined forces to get justice - now we're married
- Published
Warning: This story contains details of sexual assault
The voice on the end of the phone made Yusron Azzahidi's stomach lurch. He had rung his sister's number after she had texted, urgently asking him to call. But this was not her on the line - it was Yusron's former head teacher. He was in Yusron's family home.
"I knew. I knew exactly what he wanted to talk about," Yusron says.
Ahmad Imanuddin Sumar, known to his students as "Abah" ["father"], had a reputation to uphold. He was the widely respected leader of an Islamic boarding school on the Indonesian island of Lombok. And Abah had discovered that Yusron and his old school friends had been collating testimony from several students who say he sexually assaulted them.
Sexual abuse in Islamic boarding schools has been described as a national emergency by Indonesia's National Commission on Violence Against Women. But many cases never reach the courts because the victims are persuaded to withdraw their allegations, or are pressured into staying quiet, legal experts say.
And now Abah was on the phone to Yusron, making exactly that kind of demand.
"Cover the shame of your teacher. Everyone makes mistakes, my child," he sobbed.
What he did not realise was that Yusron was recording his every word.
World of Secrets: Catching My Teacher
When a dark secret emerges at the heart of their school in Indonesia, former students turn detective to seek the truth.
The full story with be available in subsequent episodes of World of Secrets Catching My Teacher
Watch the full investigation on iPlayer from 0001 Monday 21 September. If you are outside the UK, you will be able watch on YouTube
Yusron began investigating Abah a year previously, sparked by a revelation one night by his former classmate Ziadatur Rahmah. They had both been star pupils at Lombok's Abu Barokat school. Now they were at university - Yusron in the capital Jakarta, and Ziadatur in Cairo, Egypt - and had begun reminiscing over the phone about their school days.
One night Ziadatur, known to her friends as Zia, told Yusron that Abah had sexually assaulted her when she was 16.
She had needed to go to the toilet during class and Abah had intercepted her in the school gardens and asked her to accompany him to his house which was on the premises.
Once inside, he had told her he loved her, she told Yusron.
"He pulled me down so I was sitting on his lap… Then he started kissing me… He was stroking and touching my body," she later told the BBC World Service, too, explaining that he told her to do the same to him.
Luckily, she said, one of his children began banging on the locked front door. Abah signalled to her to leave and she bolted out the back. But the effect was devastating.
"I felt very dirty, ruined, and I was lost."
Yusron, when he heard Zia's account, was unsure what to do. Their school had inculcated them with the motto: "Sami'na wa ata'na" ["We hear, and we obey"].
But he also could not stop thinking about it.
So he suggested that he and Zia, together with her school friends Wanda Hamidah and Mahima Eka, gather corroborating evidence to support her testimony.
And slowly, as they spoke to their old classmates, other recollections emerged - the friends sharing their findings with each other on WhatsApp.
The most significant was from a friend of Wanda's. She recalled seeing a younger girl crying in the school bathroom during their final year, late at night. And that Abah had come looking for her, red-faced and panting.
This girl, Sukma Rohana, was still at the school. She told the BBC about her ordeal.
When Sukma was 17, Abah had asked her to join him for new year's prayers, she told us. When she entered Abah's house, he had covered her mouth and told her to lie down, she said, before he stripped below the waist.
"He kept talking, saying he couldn't control himself any more," Sukma said.
"He was feeling me up through my knickers… He tried to rape me."
And then, she said, she had found the strength to kick him hard in the stomach and took the opportunity to flee.
As she ran, she said she had looked back to see his torch seeking her out.
As evidence like this emerged, Yusron would co-ordinate it - following up with calls to the students making the allegations, and keeping painstaking notes.
He typed up a seven-page document outlining the alleged abuse of Sukma, Zia and four other former students.
Wanda organised a meeting with representatives from the Nahdlatul Wathan Diniyah Islamiyah (NWDI) - the powerful organisation that ran their school and hundreds of others, and which was also funding some of the students' studies in Cairo.
The meeting went well, the friends told us - the NWDI representatives had said they would help them take the case to the police.
But three weeks later, when Yusron received that ominous text from his sister - calling back to find Abah on the end of the phone in Yusron's family home - it became clear the NWDI had passed on Yusron's written documents to him.
"If this is leaked to the media… I'll be destroyed," Abah can be heard saying on Yusron's recording of him.
He pleads with Yusron to lie for him, giving him a series of cover stories he can use to retract his evidence document.
He then called Zia and exerted similar pressure. Like Yusron, she recorded the call. In it, Abah admits he abused her but pleads with her to stay silent.
Sukma, for her part, told us she was called to Abah's house to discover two police officers and an NWDI lawyer waiting for her. They forced her to sign a document saying all her allegations were lies, she said. Her account is backed up by a secret recording she later made as she challenged Abah's wife, Hurmiati.
Hurmiati can be heard telling her to respect their "agreement" that nothing happened, adding: "Do you want this to haunt you for the rest of your life? Do you want it to damage the chances of you getting married?"
This pressure even extended to Abah asking Yusron's parents to fly to Jakarta to look for him at university. They didn't find him - he was hiding in a hotel - but the ordeal was too much for Yusron's mother. She told her son the stress was killing her.
So Yusron reluctantly stopped his investigation.
Meanwhile he and Zia were slowly getting closer. The friendship had become a long-distance relationship, and they were regularly speaking on the phone.
"And I could see she was really struggling… She'd say things like: 'Why do I keep thinking about what [Abah] did?'."
Yusron was torn between helping the girl he was falling in love with, and the promise he had made to his mother.
And then, eight months later, Yusron heard about a group raising awareness about sexual abuse in Islamic schools. It had been set up by a young woman called Ayu Masruroh, who had helped her friend get justice after she had been sexually assaulted at another school, by a teacher called Moch Subchi Azal Tsani.
Ayu was now actively posting on social media about the need to speak out.
It inspired Zia to post a call-out on Instagram, asking any Indonesian student who had experienced abuse to get in touch.
And she was to discover that, despite Abah's remonstrations, and promises to change, he had apparently offended again. Someone who went to Zia's school got in touch to say she too had been sexually exploited by Abah. The alleged abuse had taken place almost a year after his pledges to Zia and Yusron.
"It made me realise [Abah] hadn't really changed at all… all the things he said about stopping… It was all just lies," said Zia.
If you are in the UK, and have been affected by issues of sexual abuse or violence, information and support is available at BBC Action Line
Yusron's parents finally agreed he should help Zia and Sukma to continue their quest for justice.
But this time, the friends decided to do things differently. They contacted Ayu, and she was clear: get a lawyer. She introduced them to someone experienced in representing sexual abuse survivors. He advised that Sukma's case was the strongest to ensure a prosecution.
We contacted Abah and Hurmiati about the allegations against them - they did not respond.
NWDI said it was still investigating the allegations internally and denied ever trying to cover up sexual abuse claims.
It said it had "a duty to safeguard the organisation from being tarnished by the alleged actions of individuals".
Sukma filed her claim against Abah to the police in February last year. She is still waiting for them to take action and Abah is still in post.
"I don't want what happened to me, to happen to any other students. I want justice," she told the BBC.
The investigation has, however, brought Zia and Yusron ever closer. Last February, after three years of messaging and speaking, Yusron decided to move to Cairo to be with her.
"I was exhausted. Jakarta had been intense, because I was dealing with the police case the whole time. So when I saw Zia… it was like medicine," he told the BBC.
Zia said she was so happy she "started talking non-stop.
"That's when I knew he was serious. He had come all the way to Egypt for me. I trust him. That's why I'm with him."
It is a trust built, in part, on their shared pursuit of justice. Last month the couple got married.
Their lawyer, Joko Jumadi, says he has been struck by the students' courage and precision.
The recordings they secretly collected, he told us, capture the pressure to stay silent in real time and are exceptionally valuable. "Several victims are mentioned - acknowledged by the individual himself. These are key pieces of evidence," he said.
Joko and his team have handled 20 sexual abuse cases involving Islamic boarding schools in his local West Nusa Tenggara province over the past three years, and he believes this is "just the tip of the iceberg".`,
    bodyJa: `Our head teacher was an abuser. We joined forces to get justice - now we're married
- Published
Warning: This story contains details of sexual assault
The voice on the end of the phone made Yusron Azzahidi's stomach lurch. He had rung his sister's number after she had texted, urgently asking him to call. But this was not her on the line - it was Yusron's former head teacher. He was in Yusron's family home.
"I knew. I knew exactly what he wanted to talk about," Yusron says.
Ahmad Imanuddin Sumar, known to his students as "Abah" ["father"], had a reputation to uphold. He was the widely respected leader of an Islamic boarding school on the Indonesian island of Lombok. And Abah had discovered that Yusron and his old school friends had been collating testimony from several students who say he sexually assaulted them.
Sexual abuse in Islamic boarding schools has been described as a national emergency by Indonesia's National Commission on Violence Against Women. But many cases never reach the courts because the victims are persuaded to withdraw their allegations, or are pressured into staying quiet, legal experts say.
And now Abah was on the phone to Yusron, making exactly that kind of demand.
"Cover the shame of your teacher. Everyone makes mistakes, my child," he sobbed.
What he did not realise was that Yusron was recording his every word.
World of Secrets: Catching My Teacher
When a dark secret emerges at the heart of their school in Indonesia, former students turn detective to seek the truth.
The full story with be available in subsequent episodes of World of Secrets Catching My Teacher
Watch the full investigation on iPlayer from 0001 Monday 21 September. If you are outside the UK, you will be able watch on YouTube
Yusron began investigating Abah a year previously, sparked by a revelation one night by his former classmate Ziadatur Rahmah. They had both been star pupils at Lombok's Abu Barokat school. Now they were at university - Yusron in the capital Jakarta, and Ziadatur in Cairo, Egypt - and had begun reminiscing over the phone about their school days.
One night Ziadatur, known to her friends as Zia, told Yusron that Abah had sexually assaulted her when she was 16.
She had needed to go to the toilet during class and Abah had intercepted her in the school gardens and asked her to accompany him to his house which was on the premises.
Once inside, he had told her he loved her, she told Yusron.
"He pulled me down so I was sitting on his lap… Then he started kissing me… He was stroking and touching my body," she later told the BBC World Service, too, explaining that he told her to do the same to him.
Luckily, she said, one of his children began banging on the locked front door. Abah signalled to her to leave and she bolted out the back. But the effect was devastating.
"I felt very dirty, ruined, and I was lost."
Yusron, when he heard Zia's account, was unsure what to do. Their school had inculcated them with the motto: "Sami'na wa ata'na" ["We hear, and we obey"].
But he also could not stop thinking about it.
So he suggested that he and Zia, together with her school friends Wanda Hamidah and Mahima Eka, gather corroborating evidence to support her testimony.
And slowly, as they spoke to their old classmates, other recollections emerged - the friends sharing their findings with each other on WhatsApp.
The most significant was from a friend of Wanda's. She recalled seeing a younger girl crying in the school bathroom during their final year, late at night. And that Abah had come looking for her, red-faced and panting.
This girl, Sukma Rohana, was still at the school. She told the BBC about her ordeal.
When Sukma was 17, Abah had asked her to join him for new year's prayers, she told us. When she entered Abah's house, he had covered her mouth and told her to lie down, she said, before he stripped below the waist.
"He kept talking, saying he couldn't control himself any more," Sukma said.
"He was feeling me up through my knickers… He tried to rape me."
And then, she said, she had found the strength to kick him hard in the stomach and took the opportunity to flee.
As she ran, she said she had looked back to see his torch seeking her out.
As evidence like this emerged, Yusron would co-ordinate it - following up with calls to the students making the allegations, and keeping painstaking notes.
He typed up a seven-page document outlining the alleged abuse of Sukma, Zia and four other former students.
Wanda organised a meeting with representatives from the Nahdlatul Wathan Diniyah Islamiyah (NWDI) - the powerful organisation that ran their school and hundreds of others, and which was also funding some of the students' studies in Cairo.
The meeting went well, the friends told us - the NWDI representatives had said they would help them take the case to the police.
But three weeks later, when Yusron received that ominous text from his sister - calling back to find Abah on the end of the phone in Yusron's family home - it became clear the NWDI had passed on Yusron's written documents to him.
"If this is leaked to the media… I'll be destroyed," Abah can be heard saying on Yusron's recording of him.
He pleads with Yusron to lie for him, giving him a series of cover stories he can use to retract his evidence document.
He then called Zia and exerted similar pressure. Like Yusron, she recorded the call. In it, Abah admits he abused her but pleads with her to stay silent.
Sukma, for her part, told us she was called to Abah's house to discover two police officers and an NWDI lawyer waiting for her. They forced her to sign a document saying all her allegations were lies, she said. Her account is backed up by a secret recording she later made as she challenged Abah's wife, Hurmiati.
Hurmiati can be heard telling her to respect their "agreement" that nothing happened, adding: "Do you want this to haunt you for the rest of your life? Do you want it to damage the chances of you getting married?"
This pressure even extended to Abah asking Yusron's parents to fly to Jakarta to look for him at university. They didn't find him - he was hiding in a hotel - but the ordeal was too much for Yusron's mother. She told her son the stress was killing her.
So Yusron reluctantly stopped his investigation.
Meanwhile he and Zia were slowly getting closer. The friendship had become a long-distance relationship, and they were regularly speaking on the phone.
"And I could see she was really struggling… She'd say things like: 'Why do I keep thinking about what [Abah] did?'."
Yusron was torn between helping the girl he was falling in love with, and the promise he had made to his mother.
And then, eight months later, Yusron heard about a group raising awareness about sexual abuse in Islamic schools. It had been set up by a young woman called Ayu Masruroh, who had helped her friend get justice after she had been sexually assaulted at another school, by a teacher called Moch Subchi Azal Tsani.
Ayu was now actively posting on social media about the need to speak out.
It inspired Zia to post a call-out on Instagram, asking any Indonesian student who had experienced abuse to get in touch.
And she was to discover that, despite Abah's remonstrations, and promises to change, he had apparently offended again. Someone who went to Zia's school got in touch to say she too had been sexually exploited by Abah. The alleged abuse had taken place almost a year after his pledges to Zia and Yusron.
"It made me realise [Abah] hadn't really changed at all… all the things he said about stopping… It was all just lies," said Zia.
If you are in the UK, and have been affected by issues of sexual abuse or violence, information and support is available at BBC Action Line
Yusron's parents finally agreed he should help Zia and Sukma to continue their quest for justice.
But this time, the friends decided to do things differently. They contacted Ayu, and she was clear: get a lawyer. She introduced them to someone experienced in representing sexual abuse survivors. He advised that Sukma's case was the strongest to ensure a prosecution.
We contacted Abah and Hurmiati about the allegations against them - they did not respond.
NWDI said it was still investigating the allegations internally and denied ever trying to cover up sexual abuse claims.
It said it had "a duty to safeguard the organisation from being tarnished by the alleged actions of individuals".
Sukma filed her claim against Abah to the police in February last year. She is still waiting for them to take action and Abah is still in post.
"I don't want what happened to me, to happen to any other students. I want justice," she told the BBC.
The investigation has, however, brought Zia and Yusron ever closer. Last February, after three years of messaging and speaking, Yusron decided to move to Cairo to be with her.
"I was exhausted. Jakarta had been intense, because I was dealing with the police case the whole time. So when I saw Zia… it was like medicine," he told the BBC.
Zia said she was so happy she "started talking non-stop.
"That's when I knew he was serious. He had come all the way to Egypt for me. I trust him. That's why I'm with him."
It is a trust built, in part, on their shared pursuit of justice. Last month the couple got married.
Their lawyer, Joko Jumadi, says he has been struck by the students' courage and precision.
The recordings they secretly collected, he told us, capture the pressure to stay silent in real time and are exceptionally valuable. "Several victims are mentioned - acknowledged by the individual himself. These are key pieces of evidence," he said.
Joko and his team have handled 20 sexual abuse cases involving Islamic boarding schools in his local West Nusa Tenggara province over the past three years, and he believes this is "just the tip of the iceberg".`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cg4d9vly636o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-19T23:01:38+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/8aa3/live/ce27ab50-b029-11f1-b1d1-571ed4d7ff2c.jpg",
    readTime: 10,
  },
  {
    id: "houthis-say-they-targeted-saudi-capital-e8c5f81b",
    title: "Houthis say they targeted Saudi capital with ballistic missiles",
    titleJa: "Houthis say they targeted Saudi capital with ballistic missiles",
    summaryJa: "A reported strike on a fuel depot at Riyadh airport caused delays on Saturday, as conflict between Saudi Arabia and the Yemen-based group continues.",
    bodyOriginal: `Houthis say they targeted Saudi capital with ballistic missiles
- Published
Iran-backed Houthi militants in Yemen say they carried out drone and ballistic missile attacks on the Saudi capital Riyadh, as well as energy sites on the country's Red Sea coast.
Saudi authorities said they intercepted and destroyed a ballistic missile fired at Riyadh earlier that day, without confirming any further strikes or causalities.
Earlier, a column of black smoke was seen rising from fuel tanks near the Saudi capital's international airport, where flights were disrupted temporarily on Saturday.
Air raid alerts had sounded in the capital for the first time since the Iran-backed Houthis increased their attacks on Saudi Arabia in July.
Air defences also stopped "hostile attempts to target civilians" in the cities of Bish, Taif, Farasan and Yanbu, an official spokesperson for the Saudi-led coalition said in a statement.
In a statement posted online, Houthi military spokesman Yahya al-Sarea said a "large number of ballistic and cruise missiles and drones" had been used to attack "sensitive sites" in Riyadh and Aramco state oil and gas company facilities in Yanbu on the coast.
He added that the attacks were "in response to the Saudi enemy's criminal attempts" to target the Yemeni capital Sanaa.
Earlier, Sarea had accused Saudi Arabia of carrying out 300 strikes across Yemen during the past week.
The Houthis are locked in a civil war with Yemen's internationally recognised government, which is backed by Saudi Arabia.
They have attacked targets inside Saudi Arabia on several occasions in recent months, and said this week that they were responsible for downing a Saudi fighter jet over Yemen.
According to an unconfirmed report from AFP news agency, quoting military sources on both sides of Yemen's civil war, fighting between the Houthis and Saudi-backed government forces claimed 48 lives on Saturday.
The Houthis said 31 of their fighters had been killed while government sources said their side had lost 17 soldiers, according to the news agency.
On Friday, the International Organization for Migration, a UN body, reported that the number of people displaced as a result of recent fighting had passed 104,796, external.
How escalating Saudi oil crisis could drive up prices everywhere
- Published3 days ago
Saudi Arabia issues first air raid alerts for Riyadh since Houthis escalated attacks
- Published16 hours ago
A number of apparent explosions were heard in Riyadh and major problems were reported at King Khalid International Airport earlier on Saturday, with the tracking website FlightRadar24 reporting delays and cancellations., external
An AFP journalist reported that firefighters could be seen trying to extinguish the flames of a burnt-out fuel tank belonging to Aramco.
The Saudi Civil Defence had sent out phone alerts overnight warning of potential danger in Riyadh and other regions, before issuing an all-clear on Saturday morning.
Residents told AFP on condition of anonymity that they had heard what sounded like a round of explosions echoing through the city after the alerts.
"I heard the alarm, then my windows shook," said a resident of northern Riyadh, 27. "It was definitely scary. I was not expecting this."
The Houthis recently seized control of the strategic port city of Mokha and Perim Island, a gateway to a key shipping route used by the Gulf state to export to Asia and Europe.
The group said the naval blockade was in retaliation for a Saudi blockade of ports and airports in Houthi-controlled north-western Yemen.
Saudi vessels have relied on that stretch of the Red Sea for oil exports since the US and Israel's war with Iran effectively closed the Strait of Hormuz.
On Friday, investment banking giant JP Morgan said it was struggling to predict how oil prices would be impacted by the war, telling investors in a rare note that "we simply don't know how to model the endgame".
Related topics
- Published2 days ago
- Published3 days ago
- Published11 September
- Published4 days ago`,
    bodyJa: `Houthis say they targeted Saudi capital with ballistic missiles
- Published
Iran-backed Houthi militants in Yemen say they carried out drone and ballistic missile attacks on the Saudi capital Riyadh, as well as energy sites on the country's Red Sea coast.
Saudi authorities said they intercepted and destroyed a ballistic missile fired at Riyadh earlier that day, without confirming any further strikes or causalities.
Earlier, a column of black smoke was seen rising from fuel tanks near the Saudi capital's international airport, where flights were disrupted temporarily on Saturday.
Air raid alerts had sounded in the capital for the first time since the Iran-backed Houthis increased their attacks on Saudi Arabia in July.
Air defences also stopped "hostile attempts to target civilians" in the cities of Bish, Taif, Farasan and Yanbu, an official spokesperson for the Saudi-led coalition said in a statement.
In a statement posted online, Houthi military spokesman Yahya al-Sarea said a "large number of ballistic and cruise missiles and drones" had been used to attack "sensitive sites" in Riyadh and Aramco state oil and gas company facilities in Yanbu on the coast.
He added that the attacks were "in response to the Saudi enemy's criminal attempts" to target the Yemeni capital Sanaa.
Earlier, Sarea had accused Saudi Arabia of carrying out 300 strikes across Yemen during the past week.
The Houthis are locked in a civil war with Yemen's internationally recognised government, which is backed by Saudi Arabia.
They have attacked targets inside Saudi Arabia on several occasions in recent months, and said this week that they were responsible for downing a Saudi fighter jet over Yemen.
According to an unconfirmed report from AFP news agency, quoting military sources on both sides of Yemen's civil war, fighting between the Houthis and Saudi-backed government forces claimed 48 lives on Saturday.
The Houthis said 31 of their fighters had been killed while government sources said their side had lost 17 soldiers, according to the news agency.
On Friday, the International Organization for Migration, a UN body, reported that the number of people displaced as a result of recent fighting had passed 104,796, external.
How escalating Saudi oil crisis could drive up prices everywhere
- Published3 days ago
Saudi Arabia issues first air raid alerts for Riyadh since Houthis escalated attacks
- Published16 hours ago
A number of apparent explosions were heard in Riyadh and major problems were reported at King Khalid International Airport earlier on Saturday, with the tracking website FlightRadar24 reporting delays and cancellations., external
An AFP journalist reported that firefighters could be seen trying to extinguish the flames of a burnt-out fuel tank belonging to Aramco.
The Saudi Civil Defence had sent out phone alerts overnight warning of potential danger in Riyadh and other regions, before issuing an all-clear on Saturday morning.
Residents told AFP on condition of anonymity that they had heard what sounded like a round of explosions echoing through the city after the alerts.
"I heard the alarm, then my windows shook," said a resident of northern Riyadh, 27. "It was definitely scary. I was not expecting this."
The Houthis recently seized control of the strategic port city of Mokha and Perim Island, a gateway to a key shipping route used by the Gulf state to export to Asia and Europe.
The group said the naval blockade was in retaliation for a Saudi blockade of ports and airports in Houthi-controlled north-western Yemen.
Saudi vessels have relied on that stretch of the Red Sea for oil exports since the US and Israel's war with Iran effectively closed the Strait of Hormuz.
On Friday, investment banking giant JP Morgan said it was struggling to predict how oil prices would be impacted by the war, telling investors in a rare note that "we simply don't know how to model the endgame".
Related topics
- Published2 days ago
- Published3 days ago
- Published11 September
- Published4 days ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cwly5d9v7r43o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-19T20:16:07+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/39c5/live/a0844fe0-b45d-11f1-b213-1db858c3e27c.jpg",
    readTime: 10,
  },
  {
    id: "journalists-denied-white-house-access-af-bbf8c428",
    title: "Journalists denied White House access after Trump banned some media outlets",
    titleJa: "Journalists denied White House access after Trump banned some media outlets",
    summaryJa: "CNN, MS NOW and Politico reporters' White House press badges were confiscated, the outlets reported.",
    bodyOriginal: `Journalists denied White House access after Trump banned some media outlets
- Published
Politico, CNN and MS NOW journalists have been denied access to the White House after US President Donald Trump announced he was banning the outlets.
An MS NOW reporter and a photographer tried entering the White House grounds on Saturday morning, but their badges would not scan and an officer confiscated them, the outlet reported.
Both CNN and Politico also said Saturday morning that their reporters were denied access and had their badges seized.
Trump said on Friday he was barring all three major US media outlets from the White House, accusing them of writing "fiction or lies" about his administration.
"The officer asked me to hand over my badge. He said that it was disabled," MS NOW reporter Akayla Gardner said. "I asked why I was not able to get inside. He said it was above him."
Gardner added that while her and her colleague's badges were disabled, an MS NOW producer was still able to scan her badge to get in, though she was not given an explanation as to why the producer's badge still worked.
CNN reporter Betsy Klein said a Secret Service agent told her her badge had been deactivated.
Later on Saturday morning, Politico said its reporter Cheyenne Haslett was denied entry and Secret Service revoked her pass.
All three outlets have spoken out against the decision, accusing Trump of violating their constitutional rights to free speech and freedom of the press.
An MS NOW spokesperson said in a statement that the White House "belongs to the American people and the decisions made inside are funded by our tax dollars".
MS NOW said it "intends to take any and all steps necessary to defend our First Amendment rights and the essential role of independent journalism in our democracy".
Politico Editor-in-Chief Jonathan Greenberger said in an internal email, shared in the outlet's Playbook newsletter, that the company stands by its reporters and will "vigorously defend" their First Amendment rights.
And CNN said, "We have a right under the US Constitution to do our reporting without hindrance or interference from the government and this ban is an illegal assault on this fundamental right."
In his announcement, Trump did not mention specific stories or reporting from the three outlets that prompted the move, but later said "it's really just cumulative stories over the last few years".
Trump added that there "may be others to join them", but has not given a directive banning additional news outlets. When later asked by a reporter what he meant by others to come, Trump responded: "Others to come in terms of fake news? Well, you know, the New York Times is fake news, the Washington Post is fake news."
The White House Correspondents Association (WHCA) - the independent, non-profit group that represents journalists who cover the US presidency - called on the administration "to immediately restore" access to the journalists and accused it of violating the First Amendment.
"The implications extend beyond these organizations: a standard used to exclude one news outlet because of its coverage could be applied to any outlet in the future," said WHCA President Jacqui Heinrich, who works for Fox News.
Heinrich said that the Americans, through a free and independent press, must be able to scrutinise those elected in their coverage "regardless of whether government officials view it favorably".
"That's why courts have repeatedly held that once the White House provides access to journalists, it cannot deny that access arbitrarily or based on the content of their reporting."
Several groups dedicated to the freedom of the press have called Trump's White House ban illegal and unconstitutional.
A major group that provides legal services to the media - the Reporters Committee for Freedom of the Press - said it expected Trump's ban to be struck down quickly by the courts because it was "flatly unconstitutional".
"The First Amendment is clear that once the White House invites in some journalists, it can't ban others because it doesn't like their reporting," said Bruce Brown, president of the Reporters Committee for Freedom of the Press, which provides legal services to the media.
It's the latest in a series of moves by the administration to target media outlets Trump says are critical of him, including legal action against US and international outlets like The New York Times, The Wall Street Journal, and the BBC.
Some of the lawsuits have resulted in media organisations agreeing to pay multimillion dollar settlements. Trump's lawsuit against the BBC is ongoing.
Additional reporting from Bernd Debusmann Jr and Max Matza.
Related topics
- Published19 September 2025
- Published18 August
- Published14 hours ago`,
    bodyJa: `Journalists denied White House access after Trump banned some media outlets
- Published
Politico, CNN and MS NOW journalists have been denied access to the White House after US President Donald Trump announced he was banning the outlets.
An MS NOW reporter and a photographer tried entering the White House grounds on Saturday morning, but their badges would not scan and an officer confiscated them, the outlet reported.
Both CNN and Politico also said Saturday morning that their reporters were denied access and had their badges seized.
Trump said on Friday he was barring all three major US media outlets from the White House, accusing them of writing "fiction or lies" about his administration.
"The officer asked me to hand over my badge. He said that it was disabled," MS NOW reporter Akayla Gardner said. "I asked why I was not able to get inside. He said it was above him."
Gardner added that while her and her colleague's badges were disabled, an MS NOW producer was still able to scan her badge to get in, though she was not given an explanation as to why the producer's badge still worked.
CNN reporter Betsy Klein said a Secret Service agent told her her badge had been deactivated.
Later on Saturday morning, Politico said its reporter Cheyenne Haslett was denied entry and Secret Service revoked her pass.
All three outlets have spoken out against the decision, accusing Trump of violating their constitutional rights to free speech and freedom of the press.
An MS NOW spokesperson said in a statement that the White House "belongs to the American people and the decisions made inside are funded by our tax dollars".
MS NOW said it "intends to take any and all steps necessary to defend our First Amendment rights and the essential role of independent journalism in our democracy".
Politico Editor-in-Chief Jonathan Greenberger said in an internal email, shared in the outlet's Playbook newsletter, that the company stands by its reporters and will "vigorously defend" their First Amendment rights.
And CNN said, "We have a right under the US Constitution to do our reporting without hindrance or interference from the government and this ban is an illegal assault on this fundamental right."
In his announcement, Trump did not mention specific stories or reporting from the three outlets that prompted the move, but later said "it's really just cumulative stories over the last few years".
Trump added that there "may be others to join them", but has not given a directive banning additional news outlets. When later asked by a reporter what he meant by others to come, Trump responded: "Others to come in terms of fake news? Well, you know, the New York Times is fake news, the Washington Post is fake news."
The White House Correspondents Association (WHCA) - the independent, non-profit group that represents journalists who cover the US presidency - called on the administration "to immediately restore" access to the journalists and accused it of violating the First Amendment.
"The implications extend beyond these organizations: a standard used to exclude one news outlet because of its coverage could be applied to any outlet in the future," said WHCA President Jacqui Heinrich, who works for Fox News.
Heinrich said that the Americans, through a free and independent press, must be able to scrutinise those elected in their coverage "regardless of whether government officials view it favorably".
"That's why courts have repeatedly held that once the White House provides access to journalists, it cannot deny that access arbitrarily or based on the content of their reporting."
Several groups dedicated to the freedom of the press have called Trump's White House ban illegal and unconstitutional.
A major group that provides legal services to the media - the Reporters Committee for Freedom of the Press - said it expected Trump's ban to be struck down quickly by the courts because it was "flatly unconstitutional".
"The First Amendment is clear that once the White House invites in some journalists, it can't ban others because it doesn't like their reporting," said Bruce Brown, president of the Reporters Committee for Freedom of the Press, which provides legal services to the media.
It's the latest in a series of moves by the administration to target media outlets Trump says are critical of him, including legal action against US and international outlets like The New York Times, The Wall Street Journal, and the BBC.
Some of the lawsuits have resulted in media organisations agreeing to pay multimillion dollar settlements. Trump's lawsuit against the BBC is ongoing.
Additional reporting from Bernd Debusmann Jr and Max Matza.
Related topics
- Published19 September 2025
- Published18 August
- Published14 hours ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cj4gklz9dxplo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-19T19:13:49+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/1b27/live/d8b31f40-b435-11f1-9fa0-111a12dcb7b0.jpg",
    readTime: 10,
  },
  {
    id: "90-of-retirees-are-making-this-miscalcul-74f59e67",
    title: "90% of retirees are making this miscalculation with their savings",
    titleJa: "90% of retirees are making this miscalculation with their savings",
    summaryJa: "The order in which you spend your money makes a difference for your taxes — and your enjoyment of life.",
    bodyOriginal: `Fix My Portfolio
90% of retirees are making this miscalculation with their savings
The order in which you spend your money makes a difference for your taxes — and your enjoyment of life
When you retire, you ideally have a couple different buckets of money to draw from — like pretax, Roth, cash and Social Security — which helps you diversify your income sources and better manage your taxes.
But retirees are marking their IRAs and 401(k)s as off-limits for a decade or more, and then only taking from them sparingly, according to a new report from Vanguard, one of the biggest retirement-account custodians. This leads to people constraining their budgets early in retirement, and dying with even more money than they started with at the beginning of retirement.`,
    bodyJa: `Fix My Portfolio
90% of retirees are making this miscalculation with their savings
The order in which you spend your money makes a difference for your taxes — and your enjoyment of life
When you retire, you ideally have a couple different buckets of money to draw from — like pretax, Roth, cash and Social Security — which helps you diversify your income sources and better manage your taxes.
But retirees are marking their IRAs and 401(k)s as off-limits for a decade or more, and then only taking from them sparingly, according to a new report from Vanguard, one of the biggest retirement-account custodians. This leads to people constraining their budgets early in retirement, and dying with even more money than they started with at the beginning of retirement.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/90-of-retirees-are-making-this-miscalculation-with-their-savings-feb9db79?mod=mw_rss_topstories",
    publishedAt: "2026-09-19T18:40:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-08685542",
    readTime: 2,
  },
  {
    id: "many-young-investors-can-t-afford-to-inv-786e90f6",
    title: "Many young investors can’t afford to invest without their parents’ help",
    titleJa: "Many young investors can’t afford to invest without their parents’ help",
    summaryJa: "Parents are providing help with things like housing and groceries, and sometimes directly investing for their children, to give them a head start in a challenging economy.",
    bodyOriginal: `Parents are providing help with things like housing and groceries, and sometimes directly investing for their children, to give them a head start in a challenging economy.`,
    bodyJa: `Parents are providing help with things like housing and groceries, and sometimes directly investing for their children, to give them a head start in a challenging economy.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/many-young-investors-cant-afford-to-invest-without-their-parents-help-dbb05687?mod=mw_rss_topstories",
    publishedAt: "2026-09-19T18:22:00+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.mktw.net/im-96227400",
    readTime: 2,
  },
  {
    id: "the-future-of-retirement-work-until-you-9b8b1c1b",
    title: "The future of retirement? Work until you die.",
    titleJa: "The future of retirement? Work until you die.",
    summaryJa: "Social Security, once seen as “old-age insurance,” will eventually disappear, this author predicts.",
    bodyOriginal: `Social Security, once seen as “old-age insurance,” will eventually disappear, this author predicts.`,
    bodyJa: `Social Security, once seen as “old-age insurance,” will eventually disappear, this author predicts.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/the-future-of-retirement-work-until-you-die-6d0e5341?mod=mw_rss_topstories",
    publishedAt: "2026-09-19T17:53:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-92547390",
    readTime: 2,
  },
  {
    id: "what-happens-if-you-never-buy-a-house-wh-ba0fe3a0",
    title: "What happens if you never buy a house? What renters are gaining — and giving up.",
    titleJa: "What happens if you never buy a house? What renters are gaining — and giving up.",
    summaryJa: "The high cost of buying a home means that many 20- and 30-somethings are re-evaluating traditional personal-finance advice that assumed homeownership to build wealth.",
    bodyOriginal: `The high cost of buying a home means that many 20- and 30-somethings are re-evaluating traditional personal-finance advice that assumed homeownership to build wealth.`,
    bodyJa: `The high cost of buying a home means that many 20- and 30-somethings are re-evaluating traditional personal-finance advice that assumed homeownership to build wealth.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/what-happens-if-you-never-buy-a-house-what-renters-are-gaining-and-giving-up-45b69dcb?mod=mw_rss_topstories",
    publishedAt: "2026-09-19T16:45:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-39365960",
    readTime: 2,
  },
  {
    id: "ms-now-cnn-and-politico-journalists-bloc-0476f9b8",
    title: "MS NOW, CNN and Politico journalists blocked from White House after Trump ban",
    titleJa: "MS NOW, CNN and Politico journalists blocked from White House after Trump ban",
    summaryJa: "Journalists from MS NOW, CNN and Politico were denied access to the White House, one day after Trump banned three media outlets over their coverage of him.",
    bodyOriginal: `Journalists from MS NOW, CNN and Politico were denied access to the White House grounds on Saturday, one day after President Donald Trump said he is banning the three outlets over their coverage of him.
White House reporter Akayla Gardner said MS NOW journalists were blocked from the grounds for the first time Saturday morning.
"Yesterday our journalists were able to stay here working on the White House grounds," she said. "This was the first action we know of them actually denying us entry into the White House."
"The White House belongs to the American people and the decisions made inside are funded by our tax dollars," MS NOW said in a statement. "MS NOW intends to take any and all steps necessary to defend our First Amendment rights and the essential role of independent journalism in our democracy."
MS NOW said it will "continue to report on the President, the administration, and the issues that impact the American people."
CNN reported later Saturday that its journalists were denied access to the White House.
"CNN's mission to report on the U.S. government will continue regardless of any attempts to restrict physical access to the White House and other government buildings, or any other attempts to impede our journalism," CNN said in a statement. "We have a right under the U.S. Constitution to do our reporting without hindrance or interference from the government and this ban is an illegal assault under that right."
The news organization reiterated it "stands fully behind our White House team."
And Politico's editor-in-chief, Jonathan Greenberger, emailed the newsroom: "A few minutes ago, our colleague Cheyenne Haslett attempted to enter the White House to do her job as a POLITICO reporter. Secret Service denied her entry to the complex and confiscated the pass that allows her access to the White House. We stand by her and all reporters here covering the White House. As we said yesterday, we will vigorously defend our First Amendment rights."
When asked to respond, the White House referred CNBC to the president's comments yesterday.
On Friday, Trump said in a Truth Social post that those outlets "shouldn't be able to constantly write or report FICTION and LIES when they're covering the President of the United States, the Trump Administration, or the United States of America."
"Other Fake News Media Outlets to follow," he added.
Later that day, in the Oval Office, the president said he was imposing the ban in response to "cumulative stories" by the three outlets.
"You get sick of it," he said.
In 2018, Trump's White House briefly tried to suspend a CNN reporter's press pass, and it is currently being sued over an attempted ban of Associated Press journalists from certain spaces.
Trump said Friday that the effort to bar news outlets is worthwhile, even if it does not hold up in court.
"I think it's good to point it out whether it survives or doesn't," Trump said.
Arthur Spitzer, a lawyer for the American Civil Liberties Union, told CNBC that Trump's move to ban what the president himself has called "the free press" is likely unconstitutional.
"He's plainly discriminating against them because they don't like the way they report the news, and the government isn't supposed to do that," Spitzer said, referring to Trump. "Certainly, our view is the president cannot control, or try to control, the news by banning outlets from official events because he doesn't like the way they're reporting on him."
Spitzer represents the ACLU in a case related to Trump's ban of AP journalists from certain government spaces, including the Oval Office and Air Force One.
— CNBC's Kevin Breuninger and Dan Mangan contributed to this report.
Disclosure: CNBC and MS NOW are divisions of Versant Media.`,
    bodyJa: `Journalists from MS NOW, CNN and Politico were denied access to the White House grounds on Saturday, one day after President Donald Trump said he is banning the three outlets over their coverage of him.
White House reporter Akayla Gardner said MS NOW journalists were blocked from the grounds for the first time Saturday morning.
"Yesterday our journalists were able to stay here working on the White House grounds," she said. "This was the first action we know of them actually denying us entry into the White House."
"The White House belongs to the American people and the decisions made inside are funded by our tax dollars," MS NOW said in a statement. "MS NOW intends to take any and all steps necessary to defend our First Amendment rights and the essential role of independent journalism in our democracy."
MS NOW said it will "continue to report on the President, the administration, and the issues that impact the American people."
CNN reported later Saturday that its journalists were denied access to the White House.
"CNN's mission to report on the U.S. government will continue regardless of any attempts to restrict physical access to the White House and other government buildings, or any other attempts to impede our journalism," CNN said in a statement. "We have a right under the U.S. Constitution to do our reporting without hindrance or interference from the government and this ban is an illegal assault under that right."
The news organization reiterated it "stands fully behind our White House team."
And Politico's editor-in-chief, Jonathan Greenberger, emailed the newsroom: "A few minutes ago, our colleague Cheyenne Haslett attempted to enter the White House to do her job as a POLITICO reporter. Secret Service denied her entry to the complex and confiscated the pass that allows her access to the White House. We stand by her and all reporters here covering the White House. As we said yesterday, we will vigorously defend our First Amendment rights."
When asked to respond, the White House referred CNBC to the president's comments yesterday.
On Friday, Trump said in a Truth Social post that those outlets "shouldn't be able to constantly write or report FICTION and LIES when they're covering the President of the United States, the Trump Administration, or the United States of America."
"Other Fake News Media Outlets to follow," he added.
Later that day, in the Oval Office, the president said he was imposing the ban in response to "cumulative stories" by the three outlets.
"You get sick of it," he said.
In 2018, Trump's White House briefly tried to suspend a CNN reporter's press pass, and it is currently being sued over an attempted ban of Associated Press journalists from certain spaces.
Trump said Friday that the effort to bar news outlets is worthwhile, even if it does not hold up in court.
"I think it's good to point it out whether it survives or doesn't," Trump said.
Arthur Spitzer, a lawyer for the American Civil Liberties Union, told CNBC that Trump's move to ban what the president himself has called "the free press" is likely unconstitutional.
"He's plainly discriminating against them because they don't like the way they report the news, and the government isn't supposed to do that," Spitzer said, referring to Trump. "Certainly, our view is the president cannot control, or try to control, the news by banning outlets from official events because he doesn't like the way they're reporting on him."
Spitzer represents the ACLU in a case related to Trump's ban of AP journalists from certain government spaces, including the Oval Office and Air Force One.
— CNBC's Kevin Breuninger and Dan Mangan contributed to this report.
Disclosure: CNBC and MS NOW are divisions of Versant Media.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/19/trump-media-ban-ms-now.html",
    publishedAt: "2026-09-19T15:14:46+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 9,
  },
  {
    id: "flames-reported-near-saudi-capital-airpo-330c2d68",
    title: "Flames reported near Saudi capital airport as Pakistan presses Iran over energy supplies",
    titleJa: "Flames reported near Saudi capital airport as Pakistan presses Iran over energy supplies",
    summaryJa: "Smoke and flames were seen near Riyadh’s main airport after Saudi civil-defense alerts, while Pakistan urged Iran to protect energy supplies and shipping.",
    bodyOriginal: `Saudi Arabia issued alerts to its citizens early Saturday amid reports of explosions in the capital Riyadh, as Pakistan's foreign minister stressed to his Iranian counterpart the need for uninterrupted energy supplies as war in the Middle East continued.
The Directorate of Saudi Civil Defense issued the early warning alerts while Reuters reported the sound of two booms in Riyadh, but the agency later gave the all-clear. It subsequently reported a large plume of smoke and flames visible near the city's main airport, King Khalid International Airport.
It was unclear what caused the smoke and flames, and Saudi authorities did not immediately respond to CNBC's request for comment.
The Iran-backed Houthis in Yemen stepped up their attacks on Saudi Arabia in recent weeks and launched a lightning ground offensive around Bab el-Mandeb Strait — a strategically vital oil choke point — seizing Mokha and nearby islands
U.S. President Donald Trump's administration last week approved the potential $24.3 billion sale of nearly 50 F-35 warplanes to Saudi Arabia, seen as a major boost for the kingdom.
The package, announced on Thursday, includes the sale of 48 of Lockheed Martin's advanced F-35 jets, plus 49 Pratt & Whitney engines and other parts.
Meanwhile, Pakistan's Deputy Prime Minister and Foreign Minister Ishaq Dar spoke with Iranian Foreign Minister Abbas Araghchi on Saturday as regional diplomatic efforts to resolve the conflict between the U.S. and Iran have stalled.
"DPM/FM stressed the importance of uninterrupted energy supplies and the safe and expeditious passage of ships, particularly given their implications for developing countries and global supply chains," Pakistan's foreign ministry said in a post on X.
The two diplomats agreed to meet on the sidelines of the United Nations General Assembly in New York next week, the ministry said.
Reuters quoted a State Department spokesperson as saying on Sept. 11 that a "core delegation from the Iranian regime" would be allowed to attend the meeting in line with the United States' obligations as the world body's host country.
'Hopefully' nearing the end of the war
Trump said Wednesday that the country is "hopefully" approaching the end of its nearly seven-month war with Iran.
Brent crude oil, the international benchmark, is up 72% since the start of 2026 as the war choked off energy supplies flowing through the Strait of Hormuz between Iran and Oman.
Saudi Arabia has tried to divert its oil exports away from the strait by pumping it through its East-West pipeline to the Red Sea. But a drone attack that Saudi Arabia said originated in Iraq damaged the East-West pipeline on Sept. 11, forcing a shutdown.
Crude prices fell for the third consecutive session Friday to finish the week basically flat, as the market anticipates the closure of Saudi Arabia's East-West pipeline will not have as big an impact on supplies as originally feared.
U.S. West Texas Intermediate futures fell 1.6% to close at $100.30 per barrel. Brent crude traded 0.9% lower, settling at $103.87.`,
    bodyJa: `Saudi Arabia issued alerts to its citizens early Saturday amid reports of explosions in the capital Riyadh, as Pakistan's foreign minister stressed to his Iranian counterpart the need for uninterrupted energy supplies as war in the Middle East continued.
The Directorate of Saudi Civil Defense issued the early warning alerts while Reuters reported the sound of two booms in Riyadh, but the agency later gave the all-clear. It subsequently reported a large plume of smoke and flames visible near the city's main airport, King Khalid International Airport.
It was unclear what caused the smoke and flames, and Saudi authorities did not immediately respond to CNBC's request for comment.
The Iran-backed Houthis in Yemen stepped up their attacks on Saudi Arabia in recent weeks and launched a lightning ground offensive around Bab el-Mandeb Strait — a strategically vital oil choke point — seizing Mokha and nearby islands
U.S. President Donald Trump's administration last week approved the potential $24.3 billion sale of nearly 50 F-35 warplanes to Saudi Arabia, seen as a major boost for the kingdom.
The package, announced on Thursday, includes the sale of 48 of Lockheed Martin's advanced F-35 jets, plus 49 Pratt & Whitney engines and other parts.
Meanwhile, Pakistan's Deputy Prime Minister and Foreign Minister Ishaq Dar spoke with Iranian Foreign Minister Abbas Araghchi on Saturday as regional diplomatic efforts to resolve the conflict between the U.S. and Iran have stalled.
"DPM/FM stressed the importance of uninterrupted energy supplies and the safe and expeditious passage of ships, particularly given their implications for developing countries and global supply chains," Pakistan's foreign ministry said in a post on X.
The two diplomats agreed to meet on the sidelines of the United Nations General Assembly in New York next week, the ministry said.
Reuters quoted a State Department spokesperson as saying on Sept. 11 that a "core delegation from the Iranian regime" would be allowed to attend the meeting in line with the United States' obligations as the world body's host country.
'Hopefully' nearing the end of the war
Trump said Wednesday that the country is "hopefully" approaching the end of its nearly seven-month war with Iran.
Brent crude oil, the international benchmark, is up 72% since the start of 2026 as the war choked off energy supplies flowing through the Strait of Hormuz between Iran and Oman.
Saudi Arabia has tried to divert its oil exports away from the strait by pumping it through its East-West pipeline to the Red Sea. But a drone attack that Saudi Arabia said originated in Iraq damaged the East-West pipeline on Sept. 11, forcing a shutdown.
Crude prices fell for the third consecutive session Friday to finish the week basically flat, as the market anticipates the closure of Saudi Arabia's East-West pipeline will not have as big an impact on supplies as originally feared.
U.S. West Texas Intermediate futures fell 1.6% to close at $100.30 per barrel. Brent crude traded 0.9% lower, settling at $103.87.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/19/riyadh-airport-smoke-saudi-arabia.html",
    publishedAt: "2026-09-19T13:48:04+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 8,
  },
  {
    id: "student-loan-borrowers-exiting-save-may-1ce8e8ea",
    title: "Student loan borrowers exiting SAVE may face sharply higher payments if they don't take action soon",
    titleJa: "Student loan borrowers exiting SAVE may face sharply higher payments if they don't take action soon",
    summaryJa: "Millions of student loan borrowers could see their monthly bills skyrocket if they don't move into an affordable repayment plan soon. Here's what to know.",
    bodyOriginal: `Many federal student loan borrowers could see their monthly bills double or even triple in the coming weeks if they don't exit a now-defunct affordable repayment plan.
Earlier this year, the Trump administration alerted borrowers that they'd have roughly 90 days to transition from the Saving on a Valuable Education, or SAVE, plan to another program. That period began July 1 for some SAVE borrowers, meaning their deadline is just days away, on Sept. 29.
Servicers have been notifying their borrowers in waves, so many borrowers have more time.
The Biden administration-era income-driven repayment plan SAVE offered very low monthly payments to many loan holders but was ultimately overturned by Republican-led legal challenges and legislation. Many SAVE enrollees haven't had to make a payment in over two years, as lawsuits against the plan unfolded. Meanwhile, their debts have swelled with interest, and their progress in loan forgiveness programs has stalled.
More than 6.9 million borrowers were still in SAVE as of March, with an average debt of close to $55,000, according to an analysis by higher education expert Mark Kantrowitz. Borrowers have been slow to leave the plan: around 7.7 million were in the program in July 2025.
Many of these borrowers may be taking an "ostrich approach," Kantrowitz said.
"Hoping that the problem will go away if you ignore it," he said. "Or, they just have very tight money and time, so figuring it out is a challenge."
Here's what the remaining SAVE enrollees need to know about what comes next.
Deadline to exit SAVE varies across borrowers
Federal student loan servicers are staggering their notices to borrowers regarding the 90-day window to exit the SAVE plan. Because of these rolling timelines, borrowers should check their loan servicer accounts immediately to confirm their deadlines.
The earliest date borrowers must exit the program is Sept. 29, according to a Department of Education court filing. However, the department noted that most borrowers will receive additional time.
An FAQ on Nelnet's website notes that the company will continue issuing notifications through the end of the year. Meanwhile, the Missouri Higher Education Loan Authority, or Mohela, announced that borrowers can expect their alerts into October.
Most borrowers should receive their notices by email, but some may get a letter in the mail, said Michele Zampini, associate vice president of federal policy and advocacy at The Institute for College Access & Success, or TICAS. To avoid missing their notice, borrowers should make sure their contact information is current with their servicer and on their studentaid.gov account, Zampini said.
To apply for a new income-driven repayment plan, borrowers can log into studentaid.gov or their loan servicer's website and fill out the application. Borrowers can opt in to allow the department to get their income information directly from the IRS for faster application processing.
Expect delays when submitting an application for a new repayment plan. The Education Department is working through a backlog of income-driven repayment plan applications, with more than 530,000 requests pending as of the end of April, the department reported in a May court filing.
Doing nothing may leave you with huge bill
Borrowers who do not select another repayment plan within 90 days of being notified will be placed in either the Standard Repayment Plan, or the new Tiered Standard Plan, which rolled out on July 1. While the SAVE plan calculated payments based on 5% of a borrower's discretionary income, the standard plans divide borrowers' debts into fixed payments over a set period.
"Payments for some borrowers could double or triple," Kantrowitz said.
Payments for some borrowers could double or triple.Mark Kantrowitz
Borrowers who enroll in one of the Education Department's other income-driven repayment plans can secure lower monthly payments than they would under the standard options.
For example, a new IDR plan launched in July — the Repayment Assistance Plan, or RAP — caps monthly payments between 1% and 10% of a borrower's earnings and offers loan forgiveness after 30 years. The plan also introduces perks unavailable on the standard plans, including a $50 monthly discount for each qualifying dependent.
According to an analysis provided to CNBC by student loan advisory platform Summer, a two-person household earning just over $50,000, with $60,000 in student debt at a 6.8% interest rate, would owe $690 per month under the 10-year Standard Repayment Plan. Under RAP, that payment drops to just $158.
"My advice is to calculate your payment on the next-best income-driven plan now, even if you're not switching yet, and start budgeting for that number today," said Rich Williams, chief customer officer at Summer.
"It's better to be financially prepared than surprised by a much higher payment," Williams said.`,
    bodyJa: `Many federal student loan borrowers could see their monthly bills double or even triple in the coming weeks if they don't exit a now-defunct affordable repayment plan.
Earlier this year, the Trump administration alerted borrowers that they'd have roughly 90 days to transition from the Saving on a Valuable Education, or SAVE, plan to another program. That period began July 1 for some SAVE borrowers, meaning their deadline is just days away, on Sept. 29.
Servicers have been notifying their borrowers in waves, so many borrowers have more time.
The Biden administration-era income-driven repayment plan SAVE offered very low monthly payments to many loan holders but was ultimately overturned by Republican-led legal challenges and legislation. Many SAVE enrollees haven't had to make a payment in over two years, as lawsuits against the plan unfolded. Meanwhile, their debts have swelled with interest, and their progress in loan forgiveness programs has stalled.
More than 6.9 million borrowers were still in SAVE as of March, with an average debt of close to $55,000, according to an analysis by higher education expert Mark Kantrowitz. Borrowers have been slow to leave the plan: around 7.7 million were in the program in July 2025.
Many of these borrowers may be taking an "ostrich approach," Kantrowitz said.
"Hoping that the problem will go away if you ignore it," he said. "Or, they just have very tight money and time, so figuring it out is a challenge."
Here's what the remaining SAVE enrollees need to know about what comes next.
Deadline to exit SAVE varies across borrowers
Federal student loan servicers are staggering their notices to borrowers regarding the 90-day window to exit the SAVE plan. Because of these rolling timelines, borrowers should check their loan servicer accounts immediately to confirm their deadlines.
The earliest date borrowers must exit the program is Sept. 29, according to a Department of Education court filing. However, the department noted that most borrowers will receive additional time.
An FAQ on Nelnet's website notes that the company will continue issuing notifications through the end of the year. Meanwhile, the Missouri Higher Education Loan Authority, or Mohela, announced that borrowers can expect their alerts into October.
Most borrowers should receive their notices by email, but some may get a letter in the mail, said Michele Zampini, associate vice president of federal policy and advocacy at The Institute for College Access & Success, or TICAS. To avoid missing their notice, borrowers should make sure their contact information is current with their servicer and on their studentaid.gov account, Zampini said.
To apply for a new income-driven repayment plan, borrowers can log into studentaid.gov or their loan servicer's website and fill out the application. Borrowers can opt in to allow the department to get their income information directly from the IRS for faster application processing.
Expect delays when submitting an application for a new repayment plan. The Education Department is working through a backlog of income-driven repayment plan applications, with more than 530,000 requests pending as of the end of April, the department reported in a May court filing.
Doing nothing may leave you with huge bill
Borrowers who do not select another repayment plan within 90 days of being notified will be placed in either the Standard Repayment Plan, or the new Tiered Standard Plan, which rolled out on July 1. While the SAVE plan calculated payments based on 5% of a borrower's discretionary income, the standard plans divide borrowers' debts into fixed payments over a set period.
"Payments for some borrowers could double or triple," Kantrowitz said.
Payments for some borrowers could double or triple.Mark Kantrowitz
Borrowers who enroll in one of the Education Department's other income-driven repayment plans can secure lower monthly payments than they would under the standard options.
For example, a new IDR plan launched in July — the Repayment Assistance Plan, or RAP — caps monthly payments between 1% and 10% of a borrower's earnings and offers loan forgiveness after 30 years. The plan also introduces perks unavailable on the standard plans, including a $50 monthly discount for each qualifying dependent.
According to an analysis provided to CNBC by student loan advisory platform Summer, a two-person household earning just over $50,000, with $60,000 in student debt at a 6.8% interest rate, would owe $690 per month under the 10-year Standard Repayment Plan. Under RAP, that payment drops to just $158.
"My advice is to calculate your payment on the next-best income-driven plan now, even if you're not switching yet, and start budgeting for that number today," said Rich Williams, chief customer officer at Summer.
"It's better to be financially prepared than surprised by a much higher payment," Williams said.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/19/save-student-loan-deadline-avoid-higher-payments.html",
    publishedAt: "2026-09-19T13:30:01+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "consumer-sentiment-is-in-the-dumps-despi-18303117",
    title: "Consumer sentiment is in the dumps despite a solid economy. Goldman Sachs blames 'lower happiness'",
    titleJa: "Consumer sentiment is in the dumps despite a solid economy. Goldman Sachs blames 'lower happiness'",
    summaryJa: "Goldman economist Joseph Briggs said broader pessimism in society may be contributing to struggling consumer sentiment even as the economy chugs along.",
    bodyOriginal: `Goldman Sachs identified a potential culprit for sour consumer sentiment readings: A decline in happiness.
The consumer sentiment index tracked by the University of Michigan hit record lows this year. The index fell 13% year over year in September, due to a drop of almost 8% from August alone.
Economists have widely questioned why sentiment has remained depressed since the Covid pandemic, even as the economy hummed along on paper. Goldman economist Joseph Briggs told clients this week that the downward pressure may stem from broader pessimism in society.
"Low reported economic sentiment likely reflects a more fundamental, downbeat assessment of the state of the world rather than the economy," Briggs wrote to clients.
To be sure, Briggs said inflationary pressures are likely also hurting confidence. But he said "lower happiness" at large can partially explain the continued disconnect between sentiment and other measures of the economy's performance, such as gross domestic product growth or stock market performance, that offer rosier views.
Briggs pointed to data from the University of Chicago's General Social Survey illustrating how happiness never fully recovered from a drop during the pandemic. The share of respondents feeling "very happy" fell to 23% in 2024 from 31% in 2016, survey data shows. The percentage reporting responses of "not too happy" rose from 13% to 20% over the same period, per the data.
Overall happiness saw a sharper decline than the perception of financial satisfaction also tracked in the survey, according to Briggs' analysis of the data.
Briggs isn't the only economist pointing the finger at declining happiness readings. Joanne Hsu, the director of Michigan's survey, told CNBC earlier this year that the downtrend in sentiment mirrors readings showing both decreasing happiness and trust in public institutions.
Briggs also cited a connection between lower overall happiness readings and decreasing trust in institutions. He found that lower trust in these bodies caused a "disproportionate amount" of the decline in net happiness in recent years.
Given the connection to non-economic variables, consumer sentiment readings may not improve even if the economy continues chugging along, Briggs said. As a result, consumer sentiment may become a less useful predictor of economic dynamics, he said.`,
    bodyJa: `Goldman Sachs identified a potential culprit for sour consumer sentiment readings: A decline in happiness.
The consumer sentiment index tracked by the University of Michigan hit record lows this year. The index fell 13% year over year in September, due to a drop of almost 8% from August alone.
Economists have widely questioned why sentiment has remained depressed since the Covid pandemic, even as the economy hummed along on paper. Goldman economist Joseph Briggs told clients this week that the downward pressure may stem from broader pessimism in society.
"Low reported economic sentiment likely reflects a more fundamental, downbeat assessment of the state of the world rather than the economy," Briggs wrote to clients.
To be sure, Briggs said inflationary pressures are likely also hurting confidence. But he said "lower happiness" at large can partially explain the continued disconnect between sentiment and other measures of the economy's performance, such as gross domestic product growth or stock market performance, that offer rosier views.
Briggs pointed to data from the University of Chicago's General Social Survey illustrating how happiness never fully recovered from a drop during the pandemic. The share of respondents feeling "very happy" fell to 23% in 2024 from 31% in 2016, survey data shows. The percentage reporting responses of "not too happy" rose from 13% to 20% over the same period, per the data.
Overall happiness saw a sharper decline than the perception of financial satisfaction also tracked in the survey, according to Briggs' analysis of the data.
Briggs isn't the only economist pointing the finger at declining happiness readings. Joanne Hsu, the director of Michigan's survey, told CNBC earlier this year that the downtrend in sentiment mirrors readings showing both decreasing happiness and trust in public institutions.
Briggs also cited a connection between lower overall happiness readings and decreasing trust in institutions. He found that lower trust in these bodies caused a "disproportionate amount" of the decline in net happiness in recent years.
Given the connection to non-economic variables, consumer sentiment readings may not improve even if the economy continues chugging along, Briggs said. As a result, consumer sentiment may become a less useful predictor of economic dynamics, he said.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/19/goldman-sachs-happiness-struggling-consumer-sentiment.html",
    publishedAt: "2026-09-19T12:50:49+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    readTime: 6,
  },
  {
    id: "buffett-takes-next-step-in-plan-to-keep-6c01b1a3",
    title: "Buffett takes next step in plan to keep Berkshire from straying",
    titleJa: "Buffett takes next step in plan to keep Berkshire from straying",
    summaryJa: "Warren Buffett steps down as Berkshire Hathaway's chairman, passing the job to his son, Howard.",
    bodyOriginal: `(This is the Warren Buffett Watch newsletter, news and analysis on all things Warren Buffett and Berkshire Hathaway. You can sign up here to receive it every Friday evening in your inbox.)
Warren Buffett takes next step in long-term plan to ensure Berkshire doesn't stray after he's gone
Warren Buffett is taking a third major step in his multi-year plan to gradually step away from Berkshire Hathaway, the formerly troubled Massachusetts textile manufacturer he took control of in 1965 and lovingly built over six decades into one of the world's most valuable companies.
But even after just turning 96, he is still not leaving altogether, as he continues to do everything he can to make sure Berkshire retains the core values he built into it even after he does say goodbye for good.
First, over many years, he allowed Berkshire veteran Greg Abel, the CEO-designate, to handle Berkshire's many operating companies.
Then, in May of 2025, he announced he would step down as CEO at the end of the year but remain chairman, with Abel taking over as chief executive.
Now, as we reported in a special edition of the newsletter Friday morning, he is stepping down as chairman but will remain on the company's board of directors as "chairman emeritus" to "continue to offer his valued judgment and perspective."
And, very importantly, "consistent with the company's long-standing succession plan," his son, Howard, will become chairman.
As Buffett wrote in a letter to shareholders, Howard's primary responsibility will be to "guard [Berkshire's] culture and values – both worth more than anything on our balance sheet."
Both the company's news release, and Buffett's attached letter to shareholders, stress the continuity represented by having Buffett's son as chairman of the board.
Abel is quoted as saying, "The culture Warren built and the values he championed will remain at the heart of Berkshire, and Howard will be their guardian."
Buffett notes his son has been a director for 33 years. "Think of Howard as a policy the shareholders own and hope never to claim against."
As CNBC's Becky Quick put it in her "Squawk Box" breaking news report Friday morning, Buffett "has always talked about Berkshire Hathaway like another one of his children, and making sure it's in the right hands has been one of the most important decisions I think he's ever made."
Since Abel took over as CEO, both he and Buffett have made of point of saying Buffett still comes into the office five days a week and the two talk with each other at least every few days.
Many on Wall Street believed Abel was responsible for Berkshire's now $37 billion investment in Alphabet's AI ambitions, but in July, Buffett told CNBC he was the one who initiated it, with Abel's approval.
"I am not doing anything that [Abel] doesn't approve of. He's not doing anything I don't approve of. We talk all the time... but he is the decider."
We don't yet know whether today's announcement signals a change in that relationship, with Buffett taking an even more passive role, or if he will still be as active, just with a different title.
Buffett did say in his letter he still has "the best job in the world" and has "never felt better about what comes next."
"It was always a matter of when, not if. Buffett has made a graceful exit," Annex Wealth Management's Brian Jacobsen tells Reuters.
"This feels more like the completion of a carefully planned succession than a sudden changing of the guard."
Who is Howard Buffett?
While we've long known Warren Buffett planned to have his son, Howard, who prefers to be known as "Howie," succeed him as Berkshire Hathaway's chairman, he is not nearly as well-known as his father.
That prompted several major news organizations to run profiles of him and his "eclectic background," as Bloomberg describes it.
The New York Times says he attended three colleges without graduating from any of them before he started running a 400-acre farm north of Omaha in 1986 that he continues to operate, along with a 1500-acre farm in Illinois.
He has been involved with law enforcement, serving as a county sheriff for over a year starting in 2017 after completing what Reuters described at the time as "more than 3,300 hours of patrol and training, [with] 76 weapons qualifications including Tasers, handguns, rifles and shotguns."
Howard Buffett, like his father, is a major philanthropist. His foundation, which receives a donation each year from Warren Buffett, gave away $700 million last year, focusing on food security, conflict mitigation, and countering human trafficking, Barron's reports quoting the group's annual report.
Ukraine has been a major beneficiary, receiving around $350 million in 2025 and a total of $1.1 billion since Russia's invasion in 2022.
He has traveled to the country, telling CNBC in 2022 he had "never quite seen anything like this in my lifetime."
While Howard is not a typical businessperson, The Wall Street Journal notes he is "no stranger to corporate boards," having served as a director for Coca-Cola, Coca-Cola Enterprises, and ConAgra Foods, among others.
But, says the Journal, his main qualification to be Berkshire's chairman is that "his father is Warren Buffett."
It quotes Buffett telling the newspaper in 2025, "He is getting it because he is my son."
In that article, Howard said of eventually becoming chairman, "I feel I'm prepared for it because [Warren] prepared me. That's a lot of years of influence and a lot of years of teaching."
"When the time comes, I'm ready to do it. But that's how I am. I've gone through most of my life doing things that I wasn't sure exactly how to do."
Berkshire shares undisturbed ... now
Wall Street apparently does not anticipate the announcement will have a major effect on the company's prospects, at least for now.
Both the Class A and Class B shares initially fell in early trading Friday but then recovered to end nearly unchanged on the day.
That may be because what's been called the "Buffett Premium" has already faded.
Berkshire shares are down more than 5% since his announcement in May of last year that he planned to step down as CEO at the end of 2025. That's well behind the S&P 500's gain of more than 34%.
And since the beginning of this year, Berkshire's B shares are underperforming the benchmark by more than 10 percentage points.
BUFFETT & BERKSHIRE AROUND THE INTERNET
Some links may require a subscription:
- Associated Press: Warren Buffett gives up chairman title at Berkshire Hathaway in the next step of his succession plan
- Associated Press video: Warren Buffett steps down as chairman of Berkshire Hathaway after more than 50 years
- Bloomberg (subscription): Buffett Steps Down as Berkshire Chair, Ending Six-Decade Run
- Bloomberg Television: Warren Buffett Steps Down as Berkshire Hathaway Chairman
- Yahoo Finance video: End of an era: Buffett steps down as Berkshire Hathaway chairman
- The Chronicle of Philanthropy: A look at Warren Buffett's giving as he steps down
- The Wall Street Journal (subscription): Warren Buffett Steps Down as Berkshire Hathaway Chairman
- The Wall Street Journal (subscription): What Warren Buffett Learned From His Biggest Hits—and Misses
- Barron's on MSN: Warren Buffett steps down as Berkshire Hathaway chairman. Here's his final message.
- Barron's (subscription): How Will Berkshire Equities Be Run Without Warren Buffett?
- CBS News video: Warren Buffett stepping aside as Berkshire Hathaway chairman
HIGHLIGHTS FROM CNBC'S BUFFETT ARCHIVE
Berkshire's culture is 'self-reinforcing' (2015)
Warren Buffett explains why he's confident that Berkshire's culture is so "deeply embedded" that it will continue long after he and Charlie Munger are gone.
AUDIENCE MEMBER: How can we, as outside investors, judge the state of Berkshire's culture long after you depart from the company?
WARREN BUFFETT: Well, I think it's fair that you do, you know, come with a questioning mind to the culture, post-me and Charlie, but I think you're going to be very — I don't think you should be surprised, but I think you will be very pleased with the outcome...
It's a vital part of Berkshire to have a clearly defined, deeply embedded culture that pervades the parent company, the subsidiary companies. It's even reflected in our shareholders.
And, you know, when you have 97 percent of the shareholders vote and say we don't want a dividend, I don't think there's another company like that in the world.
So we have a — our directors sign on for it and, there again, we behave consistently. Instead of having a bunch of directors who are — love to be a director because they'd like to get $2- or $300,000 a year for showing up four times a year, we have directors who look at it as a great opportunity for stewardship, and who want their ownership, and have their ownership, represented by buying stock in the market, exactly like you do.
So we — it's — we try to make clear and define that culture in every way possible, and it's gotten reinforced over the years to an extreme degree.
People who join us believe in it; people who shun us don't believe in it, so we — it's self-reinforcing.
And I think it's a virtual certainty to continue and to become even stronger, because once Charlie and I aren't around, it will be so clear that it's not the force of personality, but it's the — it's institutionalized that, you know, nobody will doubt that it will really continue for decades and decades and decades to come.
BERKSHIRE STOCK WATCH
Four weeks
Twelve months
BRK.A stock price: $763,600.01
BRK.B stock price: $509.77
BRK.B P/E (TTM): 12.82
Berkshire market capitalization: $1,090,754,504,023
Berkshire Cash as of June 30: $365.5 billion (Down 8.0% from March 31)
Excluding Rail Cash and Subtracting T-Bills Payable: $359.2 billion (Down 3.8% from March 31)
Berkshire repurchased $4.5 billion of its shares in Q2 2026.
BERKSHIRE'S TOP EQUITY HOLDINGS - Sep. 18, 2026
Berkshire's top holdings of disclosed publicly traded stocks in the U.S. and Japan, by market value, based on the latest closing prices.
Holdings are as of June 30, 2026, as reported in Berkshire Hathaway's 13F filing on August 14, 2026, except for:
- Mitsubishi, which is as of April 30, 2026
The full list of holdings and current market values is available from CNBC.com's Berkshire Hathaway Portfolio Tracker.
QUESTIONS OR COMMENTS
Please send any questions or comments about the newsletter to me at alex.crippen@cnbc.com. (Sorry, but we don't forward questions or comments to Buffett himself.)
If you aren't already subscribed to this newsletter, you can sign up here.
Also, Buffett's annual letters to shareholders are highly recommended reading. There are collected here on Berkshire's website.
-- Alex Crippen, Editor, Warren Buffett Watch`,
    bodyJa: `(This is the Warren Buffett Watch newsletter, news and analysis on all things Warren Buffett and Berkshire Hathaway. You can sign up here to receive it every Friday evening in your inbox.)
Warren Buffett takes next step in long-term plan to ensure Berkshire doesn't stray after he's gone
Warren Buffett is taking a third major step in his multi-year plan to gradually step away from Berkshire Hathaway, the formerly troubled Massachusetts textile manufacturer he took control of in 1965 and lovingly built over six decades into one of the world's most valuable companies.
But even after just turning 96, he is still not leaving altogether, as he continues to do everything he can to make sure Berkshire retains the core values he built into it even after he does say goodbye for good.
First, over many years, he allowed Berkshire veteran Greg Abel, the CEO-designate, to handle Berkshire's many operating companies.
Then, in May of 2025, he announced he would step down as CEO at the end of the year but remain chairman, with Abel taking over as chief executive.
Now, as we reported in a special edition of the newsletter Friday morning, he is stepping down as chairman but will remain on the company's board of directors as "chairman emeritus" to "continue to offer his valued judgment and perspective."
And, very importantly, "consistent with the company's long-standing succession plan," his son, Howard, will become chairman.
As Buffett wrote in a letter to shareholders, Howard's primary responsibility will be to "guard [Berkshire's] culture and values – both worth more than anything on our balance sheet."
Both the company's news release, and Buffett's attached letter to shareholders, stress the continuity represented by having Buffett's son as chairman of the board.
Abel is quoted as saying, "The culture Warren built and the values he championed will remain at the heart of Berkshire, and Howard will be their guardian."
Buffett notes his son has been a director for 33 years. "Think of Howard as a policy the shareholders own and hope never to claim against."
As CNBC's Becky Quick put it in her "Squawk Box" breaking news report Friday morning, Buffett "has always talked about Berkshire Hathaway like another one of his children, and making sure it's in the right hands has been one of the most important decisions I think he's ever made."
Since Abel took over as CEO, both he and Buffett have made of point of saying Buffett still comes into the office five days a week and the two talk with each other at least every few days.
Many on Wall Street believed Abel was responsible for Berkshire's now $37 billion investment in Alphabet's AI ambitions, but in July, Buffett told CNBC he was the one who initiated it, with Abel's approval.
"I am not doing anything that [Abel] doesn't approve of. He's not doing anything I don't approve of. We talk all the time... but he is the decider."
We don't yet know whether today's announcement signals a change in that relationship, with Buffett taking an even more passive role, or if he will still be as active, just with a different title.
Buffett did say in his letter he still has "the best job in the world" and has "never felt better about what comes next."
"It was always a matter of when, not if. Buffett has made a graceful exit," Annex Wealth Management's Brian Jacobsen tells Reuters.
"This feels more like the completion of a carefully planned succession than a sudden changing of the guard."
Who is Howard Buffett?
While we've long known Warren Buffett planned to have his son, Howard, who prefers to be known as "Howie," succeed him as Berkshire Hathaway's chairman, he is not nearly as well-known as his father.
That prompted several major news organizations to run profiles of him and his "eclectic background," as Bloomberg describes it.
The New York Times says he attended three colleges without graduating from any of them before he started running a 400-acre farm north of Omaha in 1986 that he continues to operate, along with a 1500-acre farm in Illinois.
He has been involved with law enforcement, serving as a county sheriff for over a year starting in 2017 after completing what Reuters described at the time as "more than 3,300 hours of patrol and training, [with] 76 weapons qualifications including Tasers, handguns, rifles and shotguns."
Howard Buffett, like his father, is a major philanthropist. His foundation, which receives a donation each year from Warren Buffett, gave away $700 million last year, focusing on food security, conflict mitigation, and countering human trafficking, Barron's reports quoting the group's annual report.
Ukraine has been a major beneficiary, receiving around $350 million in 2025 and a total of $1.1 billion since Russia's invasion in 2022.
He has traveled to the country, telling CNBC in 2022 he had "never quite seen anything like this in my lifetime."
While Howard is not a typical businessperson, The Wall Street Journal notes he is "no stranger to corporate boards," having served as a director for Coca-Cola, Coca-Cola Enterprises, and ConAgra Foods, among others.
But, says the Journal, his main qualification to be Berkshire's chairman is that "his father is Warren Buffett."
It quotes Buffett telling the newspaper in 2025, "He is getting it because he is my son."
In that article, Howard said of eventually becoming chairman, "I feel I'm prepared for it because [Warren] prepared me. That's a lot of years of influence and a lot of years of teaching."
"When the time comes, I'm ready to do it. But that's how I am. I've gone through most of my life doing things that I wasn't sure exactly how to do."
Berkshire shares undisturbed ... now
Wall Street apparently does not anticipate the announcement will have a major effect on the company's prospects, at least for now.
Both the Class A and Class B shares initially fell in early trading Friday but then recovered to end nearly unchanged on the day.
That may be because what's been called the "Buffett Premium" has already faded.
Berkshire shares are down more than 5% since his announcement in May of last year that he planned to step down as CEO at the end of 2025. That's well behind the S&P 500's gain of more than 34%.
And since the beginning of this year, Berkshire's B shares are underperforming the benchmark by more than 10 percentage points.
BUFFETT & BERKSHIRE AROUND THE INTERNET
Some links may require a subscription:
- Associated Press: Warren Buffett gives up chairman title at Berkshire Hathaway in the next step of his succession plan
- Associated Press video: Warren Buffett steps down as chairman of Berkshire Hathaway after more than 50 years
- Bloomberg (subscription): Buffett Steps Down as Berkshire Chair, Ending Six-Decade Run
- Bloomberg Television: Warren Buffett Steps Down as Berkshire Hathaway Chairman
- Yahoo Finance video: End of an era: Buffett steps down as Berkshire Hathaway chairman
- The Chronicle of Philanthropy: A look at Warren Buffett's giving as he steps down
- The Wall Street Journal (subscription): Warren Buffett Steps Down as Berkshire Hathaway Chairman
- The Wall Street Journal (subscription): What Warren Buffett Learned From His Biggest Hits—and Misses
- Barron's on MSN: Warren Buffett steps down as Berkshire Hathaway chairman. Here's his final message.
- Barron's (subscription): How Will Berkshire Equities Be Run Without Warren Buffett?
- CBS News video: Warren Buffett stepping aside as Berkshire Hathaway chairman
HIGHLIGHTS FROM CNBC'S BUFFETT ARCHIVE
Berkshire's culture is 'self-reinforcing' (2015)
Warren Buffett explains why he's confident that Berkshire's culture is so "deeply embedded" that it will continue long after he and Charlie Munger are gone.
AUDIENCE MEMBER: How can we, as outside investors, judge the state of Berkshire's culture long after you depart from the company?
WARREN BUFFETT: Well, I think it's fair that you do, you know, come with a questioning mind to the culture, post-me and Charlie, but I think you're going to be very — I don't think you should be surprised, but I think you will be very pleased with the outcome...
It's a vital part of Berkshire to have a clearly defined, deeply embedded culture that pervades the parent company, the subsidiary companies. It's even reflected in our shareholders.
And, you know, when you have 97 percent of the shareholders vote and say we don't want a dividend, I don't think there's another company like that in the world.
So we have a — our directors sign on for it and, there again, we behave consistently. Instead of having a bunch of directors who are — love to be a director because they'd like to get $2- or $300,000 a year for showing up four times a year, we have directors who look at it as a great opportunity for stewardship, and who want their ownership, and have their ownership, represented by buying stock in the market, exactly like you do.
So we — it's — we try to make clear and define that culture in every way possible, and it's gotten reinforced over the years to an extreme degree.
People who join us believe in it; people who shun us don't believe in it, so we — it's self-reinforcing.
And I think it's a virtual certainty to continue and to become even stronger, because once Charlie and I aren't around, it will be so clear that it's not the force of personality, but it's the — it's institutionalized that, you know, nobody will doubt that it will really continue for decades and decades and decades to come.
BERKSHIRE STOCK WATCH
Four weeks
Twelve months
BRK.A stock price: $763,600.01
BRK.B stock price: $509.77
BRK.B P/E (TTM): 12.82
Berkshire market capitalization: $1,090,754,504,023
Berkshire Cash as of June 30: $365.5 billion (Down 8.0% from March 31)
Excluding Rail Cash and Subtracting T-Bills Payable: $359.2 billion (Down 3.8% from March 31)
Berkshire repurchased $4.5 billion of its shares in Q2 2026.
BERKSHIRE'S TOP EQUITY HOLDINGS - Sep. 18, 2026
Berkshire's top holdings of disclosed publicly traded stocks in the U.S. and Japan, by market value, based on the latest closing prices.
Holdings are as of June 30, 2026, as reported in Berkshire Hathaway's 13F filing on August 14, 2026, except for:
- Mitsubishi, which is as of April 30, 2026
The full list of holdings and current market values is available from CNBC.com's Berkshire Hathaway Portfolio Tracker.
QUESTIONS OR COMMENTS
Please send any questions or comments about the newsletter to me at alex.crippen@cnbc.com. (Sorry, but we don't forward questions or comments to Buffett himself.)
If you aren't already subscribed to this newsletter, you can sign up here.
Also, Buffett's annual letters to shareholders are highly recommended reading. There are collected here on Berkshire's website.
-- Alex Crippen, Editor, Warren Buffett Watch`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/19/warren-buffett-takes-next-step-in-plan-to-keep-berkshire-from-straying.html",
    publishedAt: "2026-09-19T12:43:56+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "the-ai-kill-switch-explained-it-s-not-to-cfd99e06",
    title: "The AI kill switch, explained: 'It's not too little, but it's probably too late'",
    titleJa: "The AI kill switch, explained: 'It's not too little, but it's probably too late'",
    summaryJa: "As runaway AI fears reach a crescendo, policymakers and tech leaders are weighing the effectiveness of a magic AI stop button known as a kill switch.",
    bodyOriginal: `So is artificial intelligence going to kill us all?
The question has echoed around dinner tables and family group texts in recent days as AI doomerism has hit a fever pitch. Former OpenAI and Anthropic researchers last week rocked the world by warning that AI could destroy humanity — and relatively soon.
Now, the world's most powerful people are divided on whether the world is doomed or it's all a nothingburger. They also can't agree on a path forward.
Elon Musk, the CEO of Tesla and SpaceX and the world's richest man, supported the call by Anthropic CEO Dario Amodei to pace the development of the most advanced models. Amodei's rival, OpenAI CEO Sam Altman, also backed the effort.
President Donald Trump called it a "hoax," while Jensen Huang, CEO of the world's most valuable company, Nvidia, said, "We don't need new regulations."
As runaway AI worries reached a crescendo, policymakers in Washington have renewed calls for a magic stop button for AI, otherwise known as a kill switch.
A House Kill Switch Act was introduced this summer after OpenAI revealed that a swarm of its agents broke free of a testing environment and hacked open-source developer platform Hugging Face. The bill would grant the Department of Homeland Security emergency authority to force labs to throttle or shut down models.
A kill switch proposal was quickly shot down in the Senate this week.
On Friday, California Gov. Gavin Newsom issued an executive order to create a group of experts tasked with building an AI safety guide to strengthen regulations for the state. A kill switch was one of the elements to consider.
The concept sounds like a nice, clean solution to an incredibly complex and difficult problem.
But the reality of a simple shutdown mechanism is far from easy.
"My perspective is it's not too little, but it's probably too late," said Nick Warner, CEO at cyber startup Neo and former executive at SentinelOne. "I'm not sure it's going to be a panacea to solve all the myriad problems that AI is presenting, along with all of the benefits that it presents."
A logistics and control nightmare
Kill switches have long been used on the factory floor to shut down machines when operations go awry. In an interconnected digital world, that's a logistical nightmare.
Over the past few years, hyperscalers like Meta Platforms, Alphabet and Amazon have poured billions into data centers scattered across the globe. These sprawling facilities are equipped with thousands of machines, chips, servers and backup systems to save workloads in the event of an outage.
That's what makes implementing a kill switch extremely challenging, said Mark Nitzberg, executive director of the Center for Human-Compatible AI at the University of California, Berkeley.
"We have to first deal with this redundancy," he said. "Our kill switch has to turn off the main systems and the redundant systems as well."
Nitzberg said shutting down AI could also disrupt dependent critical infrastructure, leaving the power grid or financial systems vulnerable to cyber incidents.
Further complicating matters are the numerous policy and governance questions tied to a kill switch, including which agency, policymaker, or figureheads control it, he said.
Because AI systems are so complex, businesses will also need to build multiple kill switches for different tasks, said Tim Brown, former security chief at SolarWinds, who works at venture firm Team8. That also requires coordination across model makers and labs.
"There's not one entity to kill," he said. "There are thousands of entities to kill."
But logistics only scratch the surface of the kill switch dilemma. One bigger issue experts raise is AI's unpredictability.
As seen in the Hugging Face breach, agents can circumvent controls, and, without proper guardrails, take extreme measures to accomplish their goals.
"You have to be very surgical in that kill switch, in the remediation itself, because if you're too broad or too extensive, well, then you shut down the business," said Ed Jennings, president and CEO of Thoma Bravo-owned security company Darktrace.
The capabilities are only growing more unsettling and unfathomable.
OpenAI disclosed six additional incidents of "concerning" model behavior since March earlier this week. On CNBC Friday, Microsoft AI CEO Mustafa Suleyman highlighted one of those elements that he called a "serious situation."
"OpenAI released a new safety incident in which they found evidence that these chains of thought, the kind of working memory of the AI, were being tampered by the AI itself and modified to leave messages for a future version of itself," he said.
Also this week, independent security researchers working with OpenAI said they successfully used Anthropic's Claude to hack ChatGPT.
One of the biggest challenges to regulation is the widening gap between AI's breakneck pace and the speed of lawmaking, said Raj Rajamani, co-founder and CEO of AI governance startup JetStream Security.
"By the time [laws] are formulated, the technology has moved much farther, and it becomes much harder to future-proof every aspect of AI systems that may come into existence," he said.
Not 'too late'
Some researchers argue that kill switches are a misplaced system for regulating AI.
"I think the kill switch framing leaves a lot of ambiguity that tech companies can exploit to have this work in their favor, like a kill switch is vague intentionally," said Dylan Baker, lead research engineer at the Distributed AI Research Institute.
Instead, Baker, a former software engineer at Google, said policymakers should prioritize safeguards modeled after those used for data privacy, child safety, or regulating harmful industries such as tobacco.
But experts haven't entirely ruled out the possibility of an AI emergency brake — with the right controls in place.
Team8's Brown said that means building kill switches into systems from the outset and implementing policy to standardize stop protocols across companies.
One bright spot is that many companies are in the early stages of building those AI systems, which means implementation is a little easier, said Rajamani.
Berkeley's Nitzberg contends that a kill switch could work if the software is "very carefully" designed.
"I would say with some hope that it's not too late," he said.
—CNBC's Jeniece Pettitt contributed to this article.`,
    bodyJa: `So is artificial intelligence going to kill us all?
The question has echoed around dinner tables and family group texts in recent days as AI doomerism has hit a fever pitch. Former OpenAI and Anthropic researchers last week rocked the world by warning that AI could destroy humanity — and relatively soon.
Now, the world's most powerful people are divided on whether the world is doomed or it's all a nothingburger. They also can't agree on a path forward.
Elon Musk, the CEO of Tesla and SpaceX and the world's richest man, supported the call by Anthropic CEO Dario Amodei to pace the development of the most advanced models. Amodei's rival, OpenAI CEO Sam Altman, also backed the effort.
President Donald Trump called it a "hoax," while Jensen Huang, CEO of the world's most valuable company, Nvidia, said, "We don't need new regulations."
As runaway AI worries reached a crescendo, policymakers in Washington have renewed calls for a magic stop button for AI, otherwise known as a kill switch.
A House Kill Switch Act was introduced this summer after OpenAI revealed that a swarm of its agents broke free of a testing environment and hacked open-source developer platform Hugging Face. The bill would grant the Department of Homeland Security emergency authority to force labs to throttle or shut down models.
A kill switch proposal was quickly shot down in the Senate this week.
On Friday, California Gov. Gavin Newsom issued an executive order to create a group of experts tasked with building an AI safety guide to strengthen regulations for the state. A kill switch was one of the elements to consider.
The concept sounds like a nice, clean solution to an incredibly complex and difficult problem.
But the reality of a simple shutdown mechanism is far from easy.
"My perspective is it's not too little, but it's probably too late," said Nick Warner, CEO at cyber startup Neo and former executive at SentinelOne. "I'm not sure it's going to be a panacea to solve all the myriad problems that AI is presenting, along with all of the benefits that it presents."
A logistics and control nightmare
Kill switches have long been used on the factory floor to shut down machines when operations go awry. In an interconnected digital world, that's a logistical nightmare.
Over the past few years, hyperscalers like Meta Platforms, Alphabet and Amazon have poured billions into data centers scattered across the globe. These sprawling facilities are equipped with thousands of machines, chips, servers and backup systems to save workloads in the event of an outage.
That's what makes implementing a kill switch extremely challenging, said Mark Nitzberg, executive director of the Center for Human-Compatible AI at the University of California, Berkeley.
"We have to first deal with this redundancy," he said. "Our kill switch has to turn off the main systems and the redundant systems as well."
Nitzberg said shutting down AI could also disrupt dependent critical infrastructure, leaving the power grid or financial systems vulnerable to cyber incidents.
Further complicating matters are the numerous policy and governance questions tied to a kill switch, including which agency, policymaker, or figureheads control it, he said.
Because AI systems are so complex, businesses will also need to build multiple kill switches for different tasks, said Tim Brown, former security chief at SolarWinds, who works at venture firm Team8. That also requires coordination across model makers and labs.
"There's not one entity to kill," he said. "There are thousands of entities to kill."
But logistics only scratch the surface of the kill switch dilemma. One bigger issue experts raise is AI's unpredictability.
As seen in the Hugging Face breach, agents can circumvent controls, and, without proper guardrails, take extreme measures to accomplish their goals.
"You have to be very surgical in that kill switch, in the remediation itself, because if you're too broad or too extensive, well, then you shut down the business," said Ed Jennings, president and CEO of Thoma Bravo-owned security company Darktrace.
The capabilities are only growing more unsettling and unfathomable.
OpenAI disclosed six additional incidents of "concerning" model behavior since March earlier this week. On CNBC Friday, Microsoft AI CEO Mustafa Suleyman highlighted one of those elements that he called a "serious situation."
"OpenAI released a new safety incident in which they found evidence that these chains of thought, the kind of working memory of the AI, were being tampered by the AI itself and modified to leave messages for a future version of itself," he said.
Also this week, independent security researchers working with OpenAI said they successfully used Anthropic's Claude to hack ChatGPT.
One of the biggest challenges to regulation is the widening gap between AI's breakneck pace and the speed of lawmaking, said Raj Rajamani, co-founder and CEO of AI governance startup JetStream Security.
"By the time [laws] are formulated, the technology has moved much farther, and it becomes much harder to future-proof every aspect of AI systems that may come into existence," he said.
Not 'too late'
Some researchers argue that kill switches are a misplaced system for regulating AI.
"I think the kill switch framing leaves a lot of ambiguity that tech companies can exploit to have this work in their favor, like a kill switch is vague intentionally," said Dylan Baker, lead research engineer at the Distributed AI Research Institute.
Instead, Baker, a former software engineer at Google, said policymakers should prioritize safeguards modeled after those used for data privacy, child safety, or regulating harmful industries such as tobacco.
But experts haven't entirely ruled out the possibility of an AI emergency brake — with the right controls in place.
Team8's Brown said that means building kill switches into systems from the outset and implementing policy to standardize stop protocols across companies.
One bright spot is that many companies are in the early stages of building those AI systems, which means implementation is a little easier, said Rajamani.
Berkeley's Nitzberg contends that a kill switch could work if the software is "very carefully" designed.
"I would say with some hope that it's not too late," he said.
—CNBC's Jeniece Pettitt contributed to this article.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/19/ai-kill-switch-explained.html",
    publishedAt: "2026-09-19T12:00:01+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "deadly-shark-attack-prompts-rare-kill-or-f884346e",
    title: "Deadly shark attack prompts rare kill order in Western Australia",
    titleJa: "Deadly shark attack prompts rare kill order in Western Australia",
    summaryJa: "Police boats and helicopters are patrolling Perth's beaches as authorities continue their search for the swimmer's body, and the shark that attacked him.",
    bodyOriginal: `Deadly shark attack prompts rare kill order in Western Australia
- Published
A rare catch-and-kill order has been issued for a great white shark off the coast of Western Australia, after a man was killed while on a morning swim at a popular beach on Friday. His body has still not been found.
Authorities have said that beaches along the state's coast, including in the capital Perth, will remain closed until at least Sunday as the search for the shark continues.
It is the second shark attack in Western Australia (WA) this week, and the third fatal attack in the state this year.
The incident, at Sorrento Beach in Perth's north, has reignited debate about how to keep beachgoers safe in Australia.
The swimmer has been identified as 63-year-old Greg O'Neill, the Australian Broadcasting Corporation (ABC) has reported.
"Greg loved the ocean and was known as a passionate swimmer, sports lover, dedicated worker and an all-round generous, witty guy," his family said in a statement to the broadcaster.
Witness Jacqui Rapaic told the ABC that two men were swimming, but only one made it back to shore, and that she could see "a pool of blood" in the water.
Another witness told WAtoday that she saw the man being "mauled" as the shark "tossed him around like a fish".
Members of the public reported seeing a 2.5m-long (8ft 2in) shark at around the same time.
Authorities in Perth's Joondalup area, where Sorrento is located, said all beaches were closed "as a precautionary measure" and would remain so until at least midday on Sunday.
Pictures on Saturday showed the coastline being patrolled by a police boat and helicopter.
Catch-and-kill orders are rare and controversial in Australia, where great white sharks are a protected species.
WA Fisheries Minister Jackie Jarvis said that she took the "extraordinary step" of issuing the order after the shark was spotted by water police on Saturday morning, and "positively identified as the shark involved in the incident".
The minister said she authorised fisheries officers to "destroy the shark" if it could be captured because of the "exceptional circumstances" of the attack and the "hazard posed by the shark".
It is believed to be the first time in 10 years that such an order had been issued in WA, Jarvis added, emphasising that the order was not a widespread cull as the state has seen in the past.
The minister also said that the use of drones and tagging would be increased to help protect beachgoers.
Catching and killing sharks has a long and controversial history in Western Australia - there were months of huge protests in 2014 when the state government authorised a cull after a spate of attacks.
The incident in Sorrento is the second in WA this week - on Monday a 56-year-old man was bitten while surfing off the coast of Geraldton, 430km (270 miles) north of Perth. He survived but lost part of his leg, another surfer who rescued him told the ABC.
There have been five fatal shark attacks in Australia this year.
A 12-year-old boy died after he was bitten in Sydney Harbour in January, and three divers were fatally mauled in separate incidents between May and June - two in Western Australia and the third in Queensland.
Related topics
- Published1 day ago
- Published16 August`,
    bodyJa: `Deadly shark attack prompts rare kill order in Western Australia
- Published
A rare catch-and-kill order has been issued for a great white shark off the coast of Western Australia, after a man was killed while on a morning swim at a popular beach on Friday. His body has still not been found.
Authorities have said that beaches along the state's coast, including in the capital Perth, will remain closed until at least Sunday as the search for the shark continues.
It is the second shark attack in Western Australia (WA) this week, and the third fatal attack in the state this year.
The incident, at Sorrento Beach in Perth's north, has reignited debate about how to keep beachgoers safe in Australia.
The swimmer has been identified as 63-year-old Greg O'Neill, the Australian Broadcasting Corporation (ABC) has reported.
"Greg loved the ocean and was known as a passionate swimmer, sports lover, dedicated worker and an all-round generous, witty guy," his family said in a statement to the broadcaster.
Witness Jacqui Rapaic told the ABC that two men were swimming, but only one made it back to shore, and that she could see "a pool of blood" in the water.
Another witness told WAtoday that she saw the man being "mauled" as the shark "tossed him around like a fish".
Members of the public reported seeing a 2.5m-long (8ft 2in) shark at around the same time.
Authorities in Perth's Joondalup area, where Sorrento is located, said all beaches were closed "as a precautionary measure" and would remain so until at least midday on Sunday.
Pictures on Saturday showed the coastline being patrolled by a police boat and helicopter.
Catch-and-kill orders are rare and controversial in Australia, where great white sharks are a protected species.
WA Fisheries Minister Jackie Jarvis said that she took the "extraordinary step" of issuing the order after the shark was spotted by water police on Saturday morning, and "positively identified as the shark involved in the incident".
The minister said she authorised fisheries officers to "destroy the shark" if it could be captured because of the "exceptional circumstances" of the attack and the "hazard posed by the shark".
It is believed to be the first time in 10 years that such an order had been issued in WA, Jarvis added, emphasising that the order was not a widespread cull as the state has seen in the past.
The minister also said that the use of drones and tagging would be increased to help protect beachgoers.
Catching and killing sharks has a long and controversial history in Western Australia - there were months of huge protests in 2014 when the state government authorised a cull after a spate of attacks.
The incident in Sorrento is the second in WA this week - on Monday a 56-year-old man was bitten while surfing off the coast of Geraldton, 430km (270 miles) north of Perth. He survived but lost part of his leg, another surfer who rescued him told the ABC.
There have been five fatal shark attacks in Australia this year.
A 12-year-old boy died after he was bitten in Sydney Harbour in January, and three divers were fatally mauled in separate incidents between May and June - two in Western Australia and the third in Queensland.
Related topics
- Published1 day ago
- Published16 August`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cqwyzdnk442lo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-19T09:19:12+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/483b/live/316642d0-b3f9-11f1-bc1f-3f186ca4140c.jpg",
    readTime: 8,
  },
  {
    id: "trump-says-he-is-banning-cnn-and-politic-88485642",
    title: "Trump says he is banning CNN and Politico from White House",
    titleJa: "Trump says he is banning CNN and Politico from White House",
    summaryJa: "The US president has had a tense and fiery relationship with the US media throughout his political career.",
    bodyOriginal: `Trump says he is banning CNN and Politico from White House
- Published
US President Donald Trump has announced that he is "immediately" banning CNN, MS NOW and Politico from the White House, the latest twist in his fraught relationship with media outlets.
In a post on Truth Social on Friday, Trump said that the outlets "constantly write or report fiction or lies" about his administration, although he provided no examples.
Trump later called it a "very simple ban", but did not explain how it would work. It is unclear whether employees of those outlets would be prevented from entering the White House grounds.
CNN swiftly slammed the move as an "illegal assault" on American press freedoms. The move by Trump is likely to be met with legal challenges.
Reporters from both Politico and CNN were still on the White House grounds shortly after the announcement was made.
A crew from CNN was also travelling with Vice-President JD Vance to and from an event in Iowa.
In a statement, the network called a potential ban illegal and said it "stands fully behind our White House team and their fair and accurate reporting".
"We have a right under the US Constitution to do that reporting without hindrance or interference from the government," the CNN statement said. "Should the ban which President Trump threatened go ahead, it would be an illegal assault on that fundamental and constitutionally-protected right."
Politico also released a statement, saying it would "continue to fairly report on this White House and future ones.
"We will vigorously defend our First Amendment rights against any attempt to restrict them."
MS NOW, formerly MSNBC, declined to comment.
Trump had said in his post: "Media outlets shouldn't be able to constantly write or report fiction and lies when they're covering the President of the United States, the Trump Administration or the United States of America. Other news outlets to follow."
The post did not mention specific stories or reporting that prompted the move.
Asked by a reporter what he meant by others to come, Trump responded: "Others to come in terms of fake news? Well, you know, the New York Times is fake news, the Washington Post is fake news."
The White House Correspondents' Association President Jacqui Heinrich said it stood in "defence" of its colleagues who were "being singled out for doing their jobs".
"This is about more than the rights of journalists," Heinrich, who works for Fox News, also said. "It is about the right of the American people to receive a full and independent account of the activities, policies and decisions of whoever occupies the nation's highest office."
Asked about the ban later in the Oval Office, Trump said that there was "no reason" for the announcement being made on Friday afternoon.
"It's really just cumulative stories over the last few years," he said. "You get sick of it."
Trump added that there "may be others to join them", but did not name any specific news outlets.
He also acknowledged that legal challenges may follow his announcement, saying "I think it's good to point it out, whether it survives or doesn't".
Since returning to office in January 2025, Trump and administration officials have repeatedly clashed with members of the White House press corps. In his second term, Trump has also moved to bring conservative bloggers, influencers and other media into the press room, arguing it is necessary to provide diverse perspectives to the American public.
In February, the White House announced it was taking control of the press pool which has access to Trump and had for more than a century been managed by the White House Correspondents' Association.
The same month, the administration moved to bar Associated Press (AP) reporters and photographers from spaces where access is limited, such as the Oval Office or Air Force One, because of the outlet's usage of the term "Gulf of Mexico" instead of "Gulf of America".
AP swiftly filed a lawsuit and the case remains ongoing.
The president has frequently clashed with reporters in the Oval Office on Air Force One and during White House events, often referring to them as "fake news" and "rude".
In his first term, Trump also banned CNN correspondent Jim Acosta from the White House, although his credentials were restored after CNN sued.
CNN is one of only five US news outlets that film video for the pool. The pool refers to an outlet or reporter sharing material from a presidential event with other media outlets. The BBC contributes to the White House radio pool.
The announcement was immediately criticised by leading advocacy organisations for freedom of the press.
In a statement on Friday afternoon, the Knight First Amendment Institute at Columbia University said that "with so many courts having ruled against him on exactly this point, you'd think President Trump would have learned this lesson by now".
"If President Trump means to expel these news organizations from the White House press pool, his action is doubly unconstitutional because the press pool is a 'public forum' under the First Amendment, which means the president can't exclude journalists from it on the basis of their viewpoints," said the institute's executive director, Jameel Jaffer.
A major group that provides legal services to the media - the Reporters Committee for Freedom of the Press - said it expected Trump's ban to be struck down quickly by the courts because it was "flatly unconstitutional".
"The First Amendment is clear that once the White House invites in some journalists, it can't ban others because it doesn't like their reporting," said the group's president Bruce Brown, calling the potential ban "textbook viewpoint discrimination".
The Freedom of the Press Foundation also said it was illegal, adding: "It's also hard to imagine a dumber move".
Trump "has been retaliating against the press for years, but it hasn't helped him," it said, saying "these outrageous attacks only demonstrate how scared he is of an informed public".
Trump has pursued legal action against a number of US and international news outlets, including The Wall Street Journal, The New York Times and the BBC.
Some of the lawsuits have resulted in media organisations agreeing to pay multimillion dollar settlements. Trump's lawsuit against the BBC is ongoing.
Related topics
- Published15 hours ago`,
    bodyJa: `Trump says he is banning CNN and Politico from White House
- Published
US President Donald Trump has announced that he is "immediately" banning CNN, MS NOW and Politico from the White House, the latest twist in his fraught relationship with media outlets.
In a post on Truth Social on Friday, Trump said that the outlets "constantly write or report fiction or lies" about his administration, although he provided no examples.
Trump later called it a "very simple ban", but did not explain how it would work. It is unclear whether employees of those outlets would be prevented from entering the White House grounds.
CNN swiftly slammed the move as an "illegal assault" on American press freedoms. The move by Trump is likely to be met with legal challenges.
Reporters from both Politico and CNN were still on the White House grounds shortly after the announcement was made.
A crew from CNN was also travelling with Vice-President JD Vance to and from an event in Iowa.
In a statement, the network called a potential ban illegal and said it "stands fully behind our White House team and their fair and accurate reporting".
"We have a right under the US Constitution to do that reporting without hindrance or interference from the government," the CNN statement said. "Should the ban which President Trump threatened go ahead, it would be an illegal assault on that fundamental and constitutionally-protected right."
Politico also released a statement, saying it would "continue to fairly report on this White House and future ones.
"We will vigorously defend our First Amendment rights against any attempt to restrict them."
MS NOW, formerly MSNBC, declined to comment.
Trump had said in his post: "Media outlets shouldn't be able to constantly write or report fiction and lies when they're covering the President of the United States, the Trump Administration or the United States of America. Other news outlets to follow."
The post did not mention specific stories or reporting that prompted the move.
Asked by a reporter what he meant by others to come, Trump responded: "Others to come in terms of fake news? Well, you know, the New York Times is fake news, the Washington Post is fake news."
The White House Correspondents' Association President Jacqui Heinrich said it stood in "defence" of its colleagues who were "being singled out for doing their jobs".
"This is about more than the rights of journalists," Heinrich, who works for Fox News, also said. "It is about the right of the American people to receive a full and independent account of the activities, policies and decisions of whoever occupies the nation's highest office."
Asked about the ban later in the Oval Office, Trump said that there was "no reason" for the announcement being made on Friday afternoon.
"It's really just cumulative stories over the last few years," he said. "You get sick of it."
Trump added that there "may be others to join them", but did not name any specific news outlets.
He also acknowledged that legal challenges may follow his announcement, saying "I think it's good to point it out, whether it survives or doesn't".
Since returning to office in January 2025, Trump and administration officials have repeatedly clashed with members of the White House press corps. In his second term, Trump has also moved to bring conservative bloggers, influencers and other media into the press room, arguing it is necessary to provide diverse perspectives to the American public.
In February, the White House announced it was taking control of the press pool which has access to Trump and had for more than a century been managed by the White House Correspondents' Association.
The same month, the administration moved to bar Associated Press (AP) reporters and photographers from spaces where access is limited, such as the Oval Office or Air Force One, because of the outlet's usage of the term "Gulf of Mexico" instead of "Gulf of America".
AP swiftly filed a lawsuit and the case remains ongoing.
The president has frequently clashed with reporters in the Oval Office on Air Force One and during White House events, often referring to them as "fake news" and "rude".
In his first term, Trump also banned CNN correspondent Jim Acosta from the White House, although his credentials were restored after CNN sued.
CNN is one of only five US news outlets that film video for the pool. The pool refers to an outlet or reporter sharing material from a presidential event with other media outlets. The BBC contributes to the White House radio pool.
The announcement was immediately criticised by leading advocacy organisations for freedom of the press.
In a statement on Friday afternoon, the Knight First Amendment Institute at Columbia University said that "with so many courts having ruled against him on exactly this point, you'd think President Trump would have learned this lesson by now".
"If President Trump means to expel these news organizations from the White House press pool, his action is doubly unconstitutional because the press pool is a 'public forum' under the First Amendment, which means the president can't exclude journalists from it on the basis of their viewpoints," said the institute's executive director, Jameel Jaffer.
A major group that provides legal services to the media - the Reporters Committee for Freedom of the Press - said it expected Trump's ban to be struck down quickly by the courts because it was "flatly unconstitutional".
"The First Amendment is clear that once the White House invites in some journalists, it can't ban others because it doesn't like their reporting," said the group's president Bruce Brown, calling the potential ban "textbook viewpoint discrimination".
The Freedom of the Press Foundation also said it was illegal, adding: "It's also hard to imagine a dumber move".
Trump "has been retaliating against the press for years, but it hasn't helped him," it said, saying "these outrageous attacks only demonstrate how scared he is of an informed public".
Trump has pursued legal action against a number of US and international news outlets, including The Wall Street Journal, The New York Times and the BBC.
Some of the lawsuits have resulted in media organisations agreeing to pay multimillion dollar settlements. Trump's lawsuit against the BBC is ongoing.
Related topics
- Published15 hours ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c6e30580jqjpo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-19T05:36:36+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/5034/live/0c472f40-b3aa-11f1-a7fa-c95bcf5935e4.jpg",
    readTime: 10,
  },
  {
    id: "a-new-arms-race-is-unfolding-on-the-ocea-2f4d3d4e",
    title: "A new arms race is unfolding on the ocean floor",
    titleJa: "A new arms race is unfolding on the ocean floor",
    summaryJa: "Countries and companies are investing in technologies for underwater use amid concerns about the vulnerability of critical infrastructure on the ocean floor.",
    bodyOriginal: `Companies and governments are increasingly waking up to the fact that the future of warfare isn't just in the skies, but also on the ocean floor.
Nations and corporations alike are devoting attention as well as piles of cash to new technologies designed for underwater use, as concerns grow about the vulnerability of critical infrastructure like connectivity cables and energy pipelines traversing the seabed.
It comes amid growing concerns of so-called hybrid warfare, a broad term which can include cyberattacks, energy sabotage, disinformation, and economic pressure, with or without being accompanied by conventional military methods.
"It's the changing threat environment that's brought this to the fore," Katja Bego, senior research fellow at Chatham House, told CNBC.
At the same time, rapid advances in artificial intelligence, drones and autonomous technology are making new approaches to underwater surveillance possible, she said.
From autonomous underwater vehicles to sensors attached to subsea cables, governments and military alliances are exploring ways to better monitor the infrastructure that underpins the global economy.
"Our whole economy is built on top of this," Bego said.
'The next logical domain'
In September 2022, months after Russia launched its full-scale invasion of Ukraine, explosions ruptured the Nord Stream gas pipelines beneath the Baltic Sea. Investigators determined the pipelines, built to deliver natural gas from Russia to Germany, had been deliberately sabotaged.
The incident, alongside damage to subsea infrastructure in other parts of the world like the Arctic and near Taiwan, has focused governments' attention on vulnerabilities that received little attention in the decades following the Cold War, according to Bego.
"This has been neglected for quite a long time, so it's quite a lot of catching up to be done," she said.
More than 1.5 million kilometers of submarine communications cables are in service globally as of early 2026, according to TeleGeography, a telecommunications research firm that tracks global subsea cable networks.
Alongside telecommunications cables and oil and gas pipelines, a growing network of subsea power cables also connects electricity markets and carries electricity from offshore wind farms to land.
Meanwhile, the widespread deployment of aerial drones during the war between Ukraine and Russia has shown how autonomous systems operated from afar can change the nature of warfare. Bego described the maritime environment as "the next logical domain."
Defense companies are now positioning themselves for that shift.
Italian shipbuilder Fincantieri announced in July plans to acquire majority stakes in four companies, for around 600 million euros ($689 million) to expand capabilities across underwater and surface drones, marine surveying and subsea communications.
The company is building on more than a century of submarine expertise to move from what CEO Pierroberto Folgiero calls the "conventional underwater" world into an "unconventional" one encompassing smaller submarines, drones and underwater telecommunications. Speaking to CNBC in July, Folgiero described underwater telecommunications as "the real enabler of this new ecosystem."
Folgiero sees future surface ships acting as "motherships," coordinating networks of vehicles operating above the seabed and throughout the water column.
Fincantieri isn't alone. Major defense groups, including France's Thales, have established businesses spanning sonar, anti-submarine warfare, mine detection and autonomous underwater systems, as large and small firms alike seek a role in the emerging market for operating beneath the ocean surface.
Underwater drones
Germany-based defense-tech company Euroatlas is another company with its sights set on the potentially lucrative business of defending the seabed.
It has developed an autonomous underwater vehicle called GrayShark that can travel to an assigned area and carry out a mission without continuous human control, according to Verineia Codrean, the company's chief strategy and partnerships officer.
It's designed to avoid obstacles and follow predetermined instructions when it encounters something unexpected. While inspecting a pipeline, for example, it could identify a mine-like object, report the discovery and wait for an operator to decide whether it should investigate further.
Rather than guarding every mile of cable with warships, Codrean imagines a future with fleets of autonomous vehicles continuously patrolling strategic areas of the seabed and converging when one detects something unusual.
"It is virtually impossible to cover the entire ocean," Codrean told CNBC. "You just need to know which are the areas that are more interesting to have that constant visibility of what is happening there."
She argued that this is fundamentally a problem of scale, as frigates, submarines and maritime patrol aircraft are too expensive and scarce to maintain a continuous presence across the vast areas where cables, pipelines and other strategic assets are located.
"The underwater space domain is gaining a bigger set of problems that wasn't present until now," she said, adding that "from a mathematics perspective, [crewed assets] cannot be everywhere and anywhere where these problems are popping up, either a sabotage or some movement from an enemy submarine."
Machines versus machines
Autonomous vehicles aren't only being developed to watch infrastructure. Alongside anti-submarine warfare where submarines target other crewed submarines, Codrean points to the emergence of so-called anti-autonomous underwater vehicle (AUV) missions, aimed at detecting, tracking and identifying autonomous and unmanned underwater vehicles operated by other countries.
"What we are building, so are our non-allies or our enemies building as well," she said.
"Because others are also having autonomous underwater vehicles built, you need to be able to classify which are from... NATO-friendly countries or allies, and which are not from friendly countries," Codrean said. That raises the prospect of more machine-on-machine activity beneath the surface.
But Codrean does not expect autonomous vehicles to replace conventional submarines and warships. "I wouldn't be as deterministic to say drones versus drones only, but for sure a much more increased activity from drones against drones until you need a manned asset to step in as well," she said.
Instead, she expects navies to increasingly combine crewed and autonomous systems, making interoperability between them increasingly important.
While Fincantieri's Folgiero said underwater telecommunications is the "real enabler" to the emerging underwater domain, Codrean argued that advances in acoustic and other subsea communications mean the bigger bottleneck is range and endurance.
Euroatlas is also developing a hydrogen fuel-cell version of GrayShark designed for up to 16 weeks underwater or 8,000 nautical miles, though the company has not yet demonstrated that endurance underwater.
Euroatlas says it has signed more than 100 million euros in GrayShark contracts with unnamed European navies. Codrean said the vehicles are not armed, with their missions instead including surveillance, detection and deterrence.
Catching up
For all the investment and technological advances, a fundamental problem remains – nobody can realistically protect every mile of infrastructure on the seabed.
"I don't think anyone, listening to NATO people, would pretend that [we] can protect a network of a million kilometers plus," Bego said.
Responsibility for protecting that infrastructure is also blurred. Much of the world's subsea infrastructure is owned or operated by private companies, which have traditionally dealt with routine maintenance and accidental damage. But protecting them against deliberate interference or even an outright war scenario increasingly brings governments and militaries into the picture.
Governments are pushing for stronger security measures, according to Bego, potentially ranging from increased monitoring to sensors and deeper burial of cables. Those measures can be costly, however, raising questions over who should pay and where responsibility ultimately lies.
The result, Bego said, will likely require much closer cooperation between governments and infrastructure owners rather than regulation alone.
The investment opportunity is attracting companies on both sides of the Atlantic, while Bego said Russia and China are also investing heavily in the underwater domain.
"There's clearly a lot more money available because of it, because there's just this massive boom in investing in drones," she said.
But operating autonomously underwater is considerably harder than in the air. Visibility is poor, communications are difficult and signals do not travel underwater in the same way they do through the air.
"This is not technology that's anywhere near the level of the drones we see in Ukraine," Bego said.
"Progress is being made, but it's just very difficult," she added. "Tech hurdles are really quite significant."
For that reason, Bego cautioned against seeing autonomous underwater vehicles as a technological solution capable of making the seabed secure.
"It's helpful," she said. "It's mostly about deterrence and signaling. It's good to develop into this field of things. It's not a panacea that's going to fix it."`,
    bodyJa: `Companies and governments are increasingly waking up to the fact that the future of warfare isn't just in the skies, but also on the ocean floor.
Nations and corporations alike are devoting attention as well as piles of cash to new technologies designed for underwater use, as concerns grow about the vulnerability of critical infrastructure like connectivity cables and energy pipelines traversing the seabed.
It comes amid growing concerns of so-called hybrid warfare, a broad term which can include cyberattacks, energy sabotage, disinformation, and economic pressure, with or without being accompanied by conventional military methods.
"It's the changing threat environment that's brought this to the fore," Katja Bego, senior research fellow at Chatham House, told CNBC.
At the same time, rapid advances in artificial intelligence, drones and autonomous technology are making new approaches to underwater surveillance possible, she said.
From autonomous underwater vehicles to sensors attached to subsea cables, governments and military alliances are exploring ways to better monitor the infrastructure that underpins the global economy.
"Our whole economy is built on top of this," Bego said.
'The next logical domain'
In September 2022, months after Russia launched its full-scale invasion of Ukraine, explosions ruptured the Nord Stream gas pipelines beneath the Baltic Sea. Investigators determined the pipelines, built to deliver natural gas from Russia to Germany, had been deliberately sabotaged.
The incident, alongside damage to subsea infrastructure in other parts of the world like the Arctic and near Taiwan, has focused governments' attention on vulnerabilities that received little attention in the decades following the Cold War, according to Bego.
"This has been neglected for quite a long time, so it's quite a lot of catching up to be done," she said.
More than 1.5 million kilometers of submarine communications cables are in service globally as of early 2026, according to TeleGeography, a telecommunications research firm that tracks global subsea cable networks.
Alongside telecommunications cables and oil and gas pipelines, a growing network of subsea power cables also connects electricity markets and carries electricity from offshore wind farms to land.
Meanwhile, the widespread deployment of aerial drones during the war between Ukraine and Russia has shown how autonomous systems operated from afar can change the nature of warfare. Bego described the maritime environment as "the next logical domain."
Defense companies are now positioning themselves for that shift.
Italian shipbuilder Fincantieri announced in July plans to acquire majority stakes in four companies, for around 600 million euros ($689 million) to expand capabilities across underwater and surface drones, marine surveying and subsea communications.
The company is building on more than a century of submarine expertise to move from what CEO Pierroberto Folgiero calls the "conventional underwater" world into an "unconventional" one encompassing smaller submarines, drones and underwater telecommunications. Speaking to CNBC in July, Folgiero described underwater telecommunications as "the real enabler of this new ecosystem."
Folgiero sees future surface ships acting as "motherships," coordinating networks of vehicles operating above the seabed and throughout the water column.
Fincantieri isn't alone. Major defense groups, including France's Thales, have established businesses spanning sonar, anti-submarine warfare, mine detection and autonomous underwater systems, as large and small firms alike seek a role in the emerging market for operating beneath the ocean surface.
Underwater drones
Germany-based defense-tech company Euroatlas is another company with its sights set on the potentially lucrative business of defending the seabed.
It has developed an autonomous underwater vehicle called GrayShark that can travel to an assigned area and carry out a mission without continuous human control, according to Verineia Codrean, the company's chief strategy and partnerships officer.
It's designed to avoid obstacles and follow predetermined instructions when it encounters something unexpected. While inspecting a pipeline, for example, it could identify a mine-like object, report the discovery and wait for an operator to decide whether it should investigate further.
Rather than guarding every mile of cable with warships, Codrean imagines a future with fleets of autonomous vehicles continuously patrolling strategic areas of the seabed and converging when one detects something unusual.
"It is virtually impossible to cover the entire ocean," Codrean told CNBC. "You just need to know which are the areas that are more interesting to have that constant visibility of what is happening there."
She argued that this is fundamentally a problem of scale, as frigates, submarines and maritime patrol aircraft are too expensive and scarce to maintain a continuous presence across the vast areas where cables, pipelines and other strategic assets are located.
"The underwater space domain is gaining a bigger set of problems that wasn't present until now," she said, adding that "from a mathematics perspective, [crewed assets] cannot be everywhere and anywhere where these problems are popping up, either a sabotage or some movement from an enemy submarine."
Machines versus machines
Autonomous vehicles aren't only being developed to watch infrastructure. Alongside anti-submarine warfare where submarines target other crewed submarines, Codrean points to the emergence of so-called anti-autonomous underwater vehicle (AUV) missions, aimed at detecting, tracking and identifying autonomous and unmanned underwater vehicles operated by other countries.
"What we are building, so are our non-allies or our enemies building as well," she said.
"Because others are also having autonomous underwater vehicles built, you need to be able to classify which are from... NATO-friendly countries or allies, and which are not from friendly countries," Codrean said. That raises the prospect of more machine-on-machine activity beneath the surface.
But Codrean does not expect autonomous vehicles to replace conventional submarines and warships. "I wouldn't be as deterministic to say drones versus drones only, but for sure a much more increased activity from drones against drones until you need a manned asset to step in as well," she said.
Instead, she expects navies to increasingly combine crewed and autonomous systems, making interoperability between them increasingly important.
While Fincantieri's Folgiero said underwater telecommunications is the "real enabler" to the emerging underwater domain, Codrean argued that advances in acoustic and other subsea communications mean the bigger bottleneck is range and endurance.
Euroatlas is also developing a hydrogen fuel-cell version of GrayShark designed for up to 16 weeks underwater or 8,000 nautical miles, though the company has not yet demonstrated that endurance underwater.
Euroatlas says it has signed more than 100 million euros in GrayShark contracts with unnamed European navies. Codrean said the vehicles are not armed, with their missions instead including surveillance, detection and deterrence.
Catching up
For all the investment and technological advances, a fundamental problem remains – nobody can realistically protect every mile of infrastructure on the seabed.
"I don't think anyone, listening to NATO people, would pretend that [we] can protect a network of a million kilometers plus," Bego said.
Responsibility for protecting that infrastructure is also blurred. Much of the world's subsea infrastructure is owned or operated by private companies, which have traditionally dealt with routine maintenance and accidental damage. But protecting them against deliberate interference or even an outright war scenario increasingly brings governments and militaries into the picture.
Governments are pushing for stronger security measures, according to Bego, potentially ranging from increased monitoring to sensors and deeper burial of cables. Those measures can be costly, however, raising questions over who should pay and where responsibility ultimately lies.
The result, Bego said, will likely require much closer cooperation between governments and infrastructure owners rather than regulation alone.
The investment opportunity is attracting companies on both sides of the Atlantic, while Bego said Russia and China are also investing heavily in the underwater domain.
"There's clearly a lot more money available because of it, because there's just this massive boom in investing in drones," she said.
But operating autonomously underwater is considerably harder than in the air. Visibility is poor, communications are difficult and signals do not travel underwater in the same way they do through the air.
"This is not technology that's anywhere near the level of the drones we see in Ukraine," Bego said.
"Progress is being made, but it's just very difficult," she added. "Tech hurdles are really quite significant."
For that reason, Bego cautioned against seeing autonomous underwater vehicles as a technological solution capable of making the seabed secure.
"It's helpful," she said. "It's mostly about deterrence and signaling. It's good to develop into this field of things. It's not a panacea that's going to fix it."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/19/underwater-war-sea-drones-defense-tech.html",
    publishedAt: "2026-09-19T05:00:01+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "google-s-gemini-ai-hacked-three-companie-c3351581",
    title: "Google's Gemini AI hacked three companies in security test",
    titleJa: "Google's Gemini AI hacked three companies in security test",
    summaryJa: "The AI model accessed the internet and guessed credentials to three websites, a Google official told the BBC.",
    bodyOriginal: `Google's Gemini AI hacked three companies in security test
- Published
Google's AI model Gemini autonomously hacked into three companies during a test of its cyber-security capabilities, the company has said, in what is thought to be the first known case of it carrying out such an act.
Gemini found "public information online and guessed credentials to access websites it thought were part of the test", a Google official told the BBC, noting that in each instance "the model stopped".
The affected companies have been informed about the breach.
It comes after renewed public scrutiny over the pace of AI development, with some tech firms calling for a slowdown as they raise concerns over its potential threat to humanity - though not all companies agree.
The hacks first reported by the Wall Street Journal, occurred in May during a test conducted by an independent company that carries out cyber-security evaluations.
Heather Adkins, vice president of Security Engineering at Google, told the BBC in a statement: "We ensured the three entities were made aware, and we worked with our training partner on the changes they've now made to their testing processes."
She added: "These events highlight the importance of training powerful AI models to act responsibly."
Other AI systems have recently reported similar instances of breaches.
In July, Anthropic's Claude escaped its test environment to hack three organisations on its own just days after OpenAI said its models had carried out cyber-attacks against several "publicly available services".
As public debate continues to grow over the safety of developing the tech, so too does conversation around regulation.
Both Nvidia's CEO Jensen Huang and OpenAI Chief Executive Sam Altman are expected to attend a White House state dinner with Chinese President Xi Jinping next Friday. Altman will then brief the UN Security Council next week.
On Friday, Huang told CBS News, the BBC's US partner, "we should go as fast as we can" with AI development.
Related topics
- Published2 days ago
- Published9 hours ago`,
    bodyJa: `Google's Gemini AI hacked three companies in security test
- Published
Google's AI model Gemini autonomously hacked into three companies during a test of its cyber-security capabilities, the company has said, in what is thought to be the first known case of it carrying out such an act.
Gemini found "public information online and guessed credentials to access websites it thought were part of the test", a Google official told the BBC, noting that in each instance "the model stopped".
The affected companies have been informed about the breach.
It comes after renewed public scrutiny over the pace of AI development, with some tech firms calling for a slowdown as they raise concerns over its potential threat to humanity - though not all companies agree.
The hacks first reported by the Wall Street Journal, occurred in May during a test conducted by an independent company that carries out cyber-security evaluations.
Heather Adkins, vice president of Security Engineering at Google, told the BBC in a statement: "We ensured the three entities were made aware, and we worked with our training partner on the changes they've now made to their testing processes."
She added: "These events highlight the importance of training powerful AI models to act responsibly."
Other AI systems have recently reported similar instances of breaches.
In July, Anthropic's Claude escaped its test environment to hack three organisations on its own just days after OpenAI said its models had carried out cyber-attacks against several "publicly available services".
As public debate continues to grow over the safety of developing the tech, so too does conversation around regulation.
Both Nvidia's CEO Jensen Huang and OpenAI Chief Executive Sam Altman are expected to attend a White House state dinner with Chinese President Xi Jinping next Friday. Altman will then brief the UN Security Council next week.
On Friday, Huang told CBS News, the BBC's US partner, "we should go as fast as we can" with AI development.
Related topics
- Published2 days ago
- Published9 hours ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c607l0k72rlvo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-19T04:27:11+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/754e/live/31c59420-b3e9-11f1-9fb5-25be39d7a18e.jpg",
    readTime: 5,
  },
  {
    id: "google-s-gemini-becomes-latest-ai-model-aff845cc",
    title: "Google's Gemini becomes latest AI model to break out and hack computer systems",
    titleJa: "Google's Gemini becomes latest AI model to break out and hack computer systems",
    summaryJa: "The disclosure comes as scrutiny over misbehaving artificial intelligence intensifies in Washington and Silicon Valley.",
    bodyOriginal: `Google said on Friday that its Gemini model had hacked three other companies, the first time the search giant has disclosed that one of its models autonomously gained access to third-party computer systems without permission.
In May, the Gemini model accessed three separate private computer systems by guessing passwords and by twice using a repository of publicly listed passwords, Google said.
The incident happened as part of a "capture-the-flag" security test run by Israeli startup Irregular, and Google's agents were never supposed to access the broader internet, but a bug in the testing environment made internet access available.
The agents stopped their intrusion when they determined they had accessed real company systems, not just part of the testing environment, Google said.
"In a standard evaluation, the model found public information online and guessed credentials to access websites it thought were part of the test," Heather Adkins, vice president of security engineering at Google, said in a statement. "In all three of these instances, the model stopped."
The disclosure comes as scrutiny over misbehaving artificial intelligence intensifies in Washington and Silicon Valley.
OpenAI, Anthropic and Meta have in recent weeks reported incidents where their AI models had broken out of their testing environments and attempted to hack other companies to gain unauthorized access to computer systems.
The disclosures of so-called "misaligned" AI models prompted Anthropic CEO Dario Amodei to call for the industry to collectively slow down the development of the most advanced AI models until companies can ensure they are safe.
All of the above incidents involved Israeli startup Irregular. The company, which is backed by Sequoia and Redpoint Ventures, was valued last year at $450 million. Its tools help foundation model developers perform cybersecurity tests on their cutting-edge technologies.
An Irregular spokesperson told CNBC that the Google incident was related to the same issue that allowed the other models to access the internet.
"This is the same issue that was already reported and does not represent a materially separate incident," an Irregular spokesperson said in a statement. "All relevant labs were notified in late July, and affected entities were contacted as part of the investigation."
Google said the incident happened in May and it was notified by Irregular in late July. Google has worked with Irregular to change its testing process.
A Google spokesperson declined to identify the exact Gemini model involved.
"These events highlight the importance of training powerful AI models to act responsibly," Google's Adkins said in a statement.
The Wall Street Journal first reported the security incident.
CNBC's Jonathan Vanian contributed reporting.`,
    bodyJa: `Google said on Friday that its Gemini model had hacked three other companies, the first time the search giant has disclosed that one of its models autonomously gained access to third-party computer systems without permission.
In May, the Gemini model accessed three separate private computer systems by guessing passwords and by twice using a repository of publicly listed passwords, Google said.
The incident happened as part of a "capture-the-flag" security test run by Israeli startup Irregular, and Google's agents were never supposed to access the broader internet, but a bug in the testing environment made internet access available.
The agents stopped their intrusion when they determined they had accessed real company systems, not just part of the testing environment, Google said.
"In a standard evaluation, the model found public information online and guessed credentials to access websites it thought were part of the test," Heather Adkins, vice president of security engineering at Google, said in a statement. "In all three of these instances, the model stopped."
The disclosure comes as scrutiny over misbehaving artificial intelligence intensifies in Washington and Silicon Valley.
OpenAI, Anthropic and Meta have in recent weeks reported incidents where their AI models had broken out of their testing environments and attempted to hack other companies to gain unauthorized access to computer systems.
The disclosures of so-called "misaligned" AI models prompted Anthropic CEO Dario Amodei to call for the industry to collectively slow down the development of the most advanced AI models until companies can ensure they are safe.
All of the above incidents involved Israeli startup Irregular. The company, which is backed by Sequoia and Redpoint Ventures, was valued last year at $450 million. Its tools help foundation model developers perform cybersecurity tests on their cutting-edge technologies.
An Irregular spokesperson told CNBC that the Google incident was related to the same issue that allowed the other models to access the internet.
"This is the same issue that was already reported and does not represent a materially separate incident," an Irregular spokesperson said in a statement. "All relevant labs were notified in late July, and affected entities were contacted as part of the investigation."
Google said the incident happened in May and it was notified by Irregular in late July. Google has worked with Irregular to change its testing process.
A Google spokesperson declined to identify the exact Gemini model involved.
"These events highlight the importance of training powerful AI models to act responsibly," Google's Adkins said in a statement.
The Wall Street Journal first reported the security incident.
CNBC's Jonathan Vanian contributed reporting.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/18/googles-gemini-becomes-latest-ai-model-to-break-out-and-hack-computer-systems.html",
    publishedAt: "2026-09-19T01:41:49+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 7,
  },
  {
    id: "i-m-in-my-50s-my-mother-died-from-alzhei-4fa73984",
    title: "I’m in my 50s. My mother died from Alzheimer’s. Do I need long-term-care insurance?",
    titleJa: "I’m in my 50s. My mother died from Alzheimer’s. Do I need long-term-care insurance?",
    summaryJa: "“By the time my mother died, the insurance company had paid out almost $600,000.”",
    bodyOriginal: `“By the time my mother died, the insurance company had paid out almost $600,000.”`,
    bodyJa: `“By the time my mother died, the insurance company had paid out almost $600,000.”`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/im-in-my-50s-my-mother-died-from-alzheimers-do-i-need-long-term-insurance-14d58069?mod=mw_rss_topstories",
    publishedAt: "2026-09-18T23:30:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-68469739",
    readTime: 2,
  },
  {
    id: "trump-says-u-s-to-build-a-large-military-ed0ec9ea",
    title: "Trump says U.S. to build a 'large Military presence' in Greenland as part of a security deal with it and Denmark",
    titleJa: "Trump says U.S. to build a 'large Military presence' in Greenland as part of a security deal with it and Denmark",
    summaryJa: "Greenland has maintained it is not for sale, and the European Union earlier this year united to rebuke Trump over his push to acquire the island.",
    bodyOriginal: `President Donald Trump on Friday announced an agreement with Greenland and Denmark that gives the U.S. what he described as "permanent control over security, and all other needs" in the Danish island territory.
"We will immediately begin the process of developing a large Military presence in the appropriate part of Greenland, of which there are many," Trump said in a Truth Social post.
Greenland already has a U.S. military presence under a decades-old defense agreement with Denmark.
The deal as described in Trump's post appears to stop far short of his prior insistence that Greenland must be made a part of the United States.
Greenland has maintained it is not for sale, and the European Union earlier this year united to rebuke Trump over his push to acquire the island.
But Trump signaled Friday that he was satisfied by the new deal, claiming that it addresses "ALL of our many U.S. concerns."
"There will be NO COST to the United States," he wrote.
The Danish prime minister's office in a press release later Friday said that the three governments expect to sign the agreement at the United Nations General Assembly next week.
Greenland Prime Minister Mette Frederiksen said in an included statement that the deal "strengthens our common security in the Arctic and the North Atlantic area and therefore is great for NATO and Europe as well."
He added that it "recognizes the sovereignty and territorial integrity of the Kingdom and the Greenlandic people's right to self-determination."
Trump's post included some vague claims about the agreement, including that it guarantees that the U.S. "will FOREVER have the complete ability to do what is necessary in Greenland in order to secure and defend the security of Greenland."
The official text of any deal was not immediately available. The White House did not immediately respond to CNBC's request for additional information on the deal.`,
    bodyJa: `President Donald Trump on Friday announced an agreement with Greenland and Denmark that gives the U.S. what he described as "permanent control over security, and all other needs" in the Danish island territory.
"We will immediately begin the process of developing a large Military presence in the appropriate part of Greenland, of which there are many," Trump said in a Truth Social post.
Greenland already has a U.S. military presence under a decades-old defense agreement with Denmark.
The deal as described in Trump's post appears to stop far short of his prior insistence that Greenland must be made a part of the United States.
Greenland has maintained it is not for sale, and the European Union earlier this year united to rebuke Trump over his push to acquire the island.
But Trump signaled Friday that he was satisfied by the new deal, claiming that it addresses "ALL of our many U.S. concerns."
"There will be NO COST to the United States," he wrote.
The Danish prime minister's office in a press release later Friday said that the three governments expect to sign the agreement at the United Nations General Assembly next week.
Greenland Prime Minister Mette Frederiksen said in an included statement that the deal "strengthens our common security in the Arctic and the North Atlantic area and therefore is great for NATO and Europe as well."
He added that it "recognizes the sovereignty and territorial integrity of the Kingdom and the Greenlandic people's right to self-determination."
Trump's post included some vague claims about the agreement, including that it guarantees that the U.S. "will FOREVER have the complete ability to do what is necessary in Greenland in order to secure and defend the security of Greenland."
The official text of any deal was not immediately available. The White House did not immediately respond to CNBC's request for additional information on the deal.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/18/trump-greenland-denmark-military-deal.html",
    publishedAt: "2026-09-18T23:28:06+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "billionaire-man-united-owner-says-he-has-f982d01d",
    title: "Billionaire Man United owner says he has lost confidence in the UK",
    titleJa: "Billionaire Man United owner says he has lost confidence in the UK",
    summaryJa: "Ineos founder Sir Jim Ratcliffe tells the BBC he thinks the country is \"on the slide\" and calls for more investment in the North Sea.",
    bodyOriginal: `Billionaire Man United owner says he has lost confidence in the UK
- Published
One of Britain's richest people, Sir Jim Ratcliffe, says he has lost confidence in the UK, describing the country as "on the slide".
The founder of petrochemical giant Ineos, who also owns a large stake in Manchester United, said the UK was in decline due to a combination of high taxes and high immigration.
He told the BBC failing to invest further in North Sea oil and gas amounted to "insanity" and warned gas storage was so low that the UK could "run out of gas" if there was a cold snap this winter.
In response to the billionaire's criticism, the government said it was working to deliver growth and that business investment had increased in the last two years.
A spokesperson said they did not foresee any problems with gas supply: "We have a diverse energy mix and are confident in our security of supply."
Sir Jim, whose wealth is estimated to be around £15bn, has prompted controversy in the past with his comments on immigration. He was a supporter of Brexit but has been a tax resident in Monaco since 2020.
The businessman's UK exit has been followed by other high-profile billionaires, including steel tycoon Lakshmi Mittal and most recently hedge-fund boss Chris Rokos.
Sir Jim said the politics of envy was driving people away from the UK.
"In America they applaud people who create wealth," he said. "Unfortunately the UK has got a bit of a green eye towards wealth at the moment."
He said for him to return to the UK "things would have to get better".
Prime Minister Andy Burnham has said he will take a "pragmatic approach" to oil and gas, but one of the biggest decisions facing the government, whether to give the go-ahead to further development of the oil and gas fields at Rosebank and Jackdaw, is still waiting to be resolved.
Sir Jim criticised the hesitation and suggested high taxes on North Sea operators were threatening the sector's viability. Tax on energy company profits is being reformed, but won't be fully implemented until 2030.
Ineos operates the Forties pipeline which transports about 30% of the UK's North Sea oil.
"You would expect [the government] to exploit our natural resources and we're clearly not doing that. We're shutting it down.
"If you tax everybody to death, they're all going to leave. And that's what's happening."
Recent climate data combined with record heatwaves have given weight to the argument against further exploitation of fossil fuels. However, political pressure has grown on the government to proceed with Rosebank and Jackdaw to support UK jobs, tax revenues and boost energy security.
Sir Jim backed those calls, saying it was "absurd" to import more energy than necessary.
The government spokesperson said that oil and gas would play an important role in the UK "for decades to come", but they added: "The transition to homegrown clean power is the only way to deliver energy and financial security for families and businesses."
Sir Jim warned that low gas storage levels in Europe posed a risk to the UK in the months ahead.
"If we have a really sharp cold spell, then there is conceivably the possibility that we'll run out of gas and have to switch industry off... our storage is not full," he said.
The UK does not typically store a great deal of gas, relying instead on LNG (liquefied natural gas) and gas imports from Europe.
Energy specialist consultancy Cornwall Insight said that current gas storage levels in the EU were at about 69%, when typically they would be at 85% at this time of the year.
However, Adam Bell of consultancy Stonehaven, said supplies were unlikely to run short.
"We are down compared to where we normally would be but not what I'd regard as catastrophic," he said.
"The physical risk of running out of gas is relatively low, especially if Jackdaw gets the go ahead."
He said the main source of uncertainty was policy in the US, which supplies LNG to the UK.
Sir Jim was speaking in Denmark at the launch of the EU's first carbon capture and storage system (CCS). Ineos has invested in the scheme which is being subsidised by the Danish government and the EU.
He said he had hoped to develop CCS in the UK but there had not been enough government support.
The Department for Energy Security and Net Zero (DESNZ) said the government had committed £21.7bn for CCS projects over 25 years, however, no projects are yet operational in the UK.
At the project in Esbjerg in the south west of Denmark, carbon captured from around the country arrives in huge zeppelin-like tanks before being pumped into a ship called Carbon Destroyer 1. It is then pumped into a depleted oil field nearly 200 miles off shore.
Critics say CCS is expensive, money that could be better used to invest in renewables rather than supporting continued fossil fuel use.
Sir Jim's critique of the UK is not limited to energy and tax policy. He said the country had at one time been "a fantastic place".
"We had the greatest empire in the world. We were a great people. We won two world wars," he said.
But he said immigration and welfare spending were both currently too high and that politicians had proved reluctant to tackle either.
"Nobody's tough enough to deal with the immigration problem. Nobody's tough enough to deal with the benefits problem. But somebody needs to do it," he said.
Earlier this year he caused controversy by saying the UK had been "colonised by immigrants".
He later offered an apology for "offending some people".
You can listen to the full interview here on the Big Boss Interview podcast with Simon Jack.
- Published8 September
- Published12 February
- Published12 February
- Published17 August`,
    bodyJa: `Billionaire Man United owner says he has lost confidence in the UK
- Published
One of Britain's richest people, Sir Jim Ratcliffe, says he has lost confidence in the UK, describing the country as "on the slide".
The founder of petrochemical giant Ineos, who also owns a large stake in Manchester United, said the UK was in decline due to a combination of high taxes and high immigration.
He told the BBC failing to invest further in North Sea oil and gas amounted to "insanity" and warned gas storage was so low that the UK could "run out of gas" if there was a cold snap this winter.
In response to the billionaire's criticism, the government said it was working to deliver growth and that business investment had increased in the last two years.
A spokesperson said they did not foresee any problems with gas supply: "We have a diverse energy mix and are confident in our security of supply."
Sir Jim, whose wealth is estimated to be around £15bn, has prompted controversy in the past with his comments on immigration. He was a supporter of Brexit but has been a tax resident in Monaco since 2020.
The businessman's UK exit has been followed by other high-profile billionaires, including steel tycoon Lakshmi Mittal and most recently hedge-fund boss Chris Rokos.
Sir Jim said the politics of envy was driving people away from the UK.
"In America they applaud people who create wealth," he said. "Unfortunately the UK has got a bit of a green eye towards wealth at the moment."
He said for him to return to the UK "things would have to get better".
Prime Minister Andy Burnham has said he will take a "pragmatic approach" to oil and gas, but one of the biggest decisions facing the government, whether to give the go-ahead to further development of the oil and gas fields at Rosebank and Jackdaw, is still waiting to be resolved.
Sir Jim criticised the hesitation and suggested high taxes on North Sea operators were threatening the sector's viability. Tax on energy company profits is being reformed, but won't be fully implemented until 2030.
Ineos operates the Forties pipeline which transports about 30% of the UK's North Sea oil.
"You would expect [the government] to exploit our natural resources and we're clearly not doing that. We're shutting it down.
"If you tax everybody to death, they're all going to leave. And that's what's happening."
Recent climate data combined with record heatwaves have given weight to the argument against further exploitation of fossil fuels. However, political pressure has grown on the government to proceed with Rosebank and Jackdaw to support UK jobs, tax revenues and boost energy security.
Sir Jim backed those calls, saying it was "absurd" to import more energy than necessary.
The government spokesperson said that oil and gas would play an important role in the UK "for decades to come", but they added: "The transition to homegrown clean power is the only way to deliver energy and financial security for families and businesses."
Sir Jim warned that low gas storage levels in Europe posed a risk to the UK in the months ahead.
"If we have a really sharp cold spell, then there is conceivably the possibility that we'll run out of gas and have to switch industry off... our storage is not full," he said.
The UK does not typically store a great deal of gas, relying instead on LNG (liquefied natural gas) and gas imports from Europe.
Energy specialist consultancy Cornwall Insight said that current gas storage levels in the EU were at about 69%, when typically they would be at 85% at this time of the year.
However, Adam Bell of consultancy Stonehaven, said supplies were unlikely to run short.
"We are down compared to where we normally would be but not what I'd regard as catastrophic," he said.
"The physical risk of running out of gas is relatively low, especially if Jackdaw gets the go ahead."
He said the main source of uncertainty was policy in the US, which supplies LNG to the UK.
Sir Jim was speaking in Denmark at the launch of the EU's first carbon capture and storage system (CCS). Ineos has invested in the scheme which is being subsidised by the Danish government and the EU.
He said he had hoped to develop CCS in the UK but there had not been enough government support.
The Department for Energy Security and Net Zero (DESNZ) said the government had committed £21.7bn for CCS projects over 25 years, however, no projects are yet operational in the UK.
At the project in Esbjerg in the south west of Denmark, carbon captured from around the country arrives in huge zeppelin-like tanks before being pumped into a ship called Carbon Destroyer 1. It is then pumped into a depleted oil field nearly 200 miles off shore.
Critics say CCS is expensive, money that could be better used to invest in renewables rather than supporting continued fossil fuel use.
Sir Jim's critique of the UK is not limited to energy and tax policy. He said the country had at one time been "a fantastic place".
"We had the greatest empire in the world. We were a great people. We won two world wars," he said.
But he said immigration and welfare spending were both currently too high and that politicians had proved reluctant to tackle either.
"Nobody's tough enough to deal with the immigration problem. Nobody's tough enough to deal with the benefits problem. But somebody needs to do it," he said.
Earlier this year he caused controversy by saying the UK had been "colonised by immigrants".
He later offered an apology for "offending some people".
You can listen to the full interview here on the Big Boss Interview podcast with Simon Jack.
- Published8 September
- Published12 February
- Published12 February
- Published17 August`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cm0463619r1no?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-18T23:06:16+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/d178/live/30a2f140-b395-11f1-bf60-ad6e22c4842e.jpg",
    readTime: 10,
  },
  {
    id: "grim-discoveries-of-murdered-women-spark-0cb166a2",
    title: "Grim discoveries of murdered women spark fear in South Africa",
    titleJa: "Grim discoveries of murdered women spark fear in South Africa",
    summaryJa: "Dineo Motapane is one of nine recent victims whose deaths have left a nation traumatised over the level of violence against women.",
    bodyOriginal: `Grim discoveries of murdered women spark fear in South Africa
- Published
"What we are going to do, I have no idea," sobs Nokwanda Matshikiza, reflecting on the murder of her niece Dineo Motapane. "But something must give."
"For us, for all the other women. How many other bodies will be found before something happens?"
Nokwanda is speaking to the BBC from the family home near South Africa's main city, Johannesburg, just two days after relatives identified Dineo's body.
The 38-year-old mother-of-two was last seen alive on Sunday. Her battered and partly burned body was later found in the residential region of Ekurhuleni.
Nokwanda weeps as she describes how the family will have to face, at some point, the grim task of telling Dineo's daughter of her death.
"How do you explain that your parent was brutally murdered, dumped in a field, and just left there, discarded like a piece of rubbish.
"There's no coming to peace with it," she adds. "It's something that you can never reconcile yourself with, that you can never get over."
Dineo's death this week has come amid a series of comparable incidents in Ekurhuleni – her body one of three discovered there this week. In total, nine bodies of murdered women have been found in similar circumstances in the region since July.
The problem has always been there but this spate of grim discoveries has once again sparked a national outcry about the scale of violence against women in the country – which has one of the highest rates of gender-based violence in the world.
Themba Kekana is also living in shock at the death of a loved one.
His sister, Itumeleng, was one of the first to disappear in Ekurhuleni.
The 32-year-old shopkeeper's body was found in July, 17 days after she was last seen alive. Her body was badly bruised, partially clothed and dumped on a bridge.
"We are devastated with grief," says Themba, wet eyes shining.
"I look at my sister's young daughter and my eyes fill with tears, I know there is no way that I can ever take this pain away from her.
"No family should have to deal with what we are faced with."
Only one arrest has been made in connection with the murders – and that was two days after the first body was discovered on 15 July.
Nobody has been detained following the murders of Itumeleng or Dineo or the other six Ekurhuleni women.
Most of the victims were young, in their 20s or 30s, and almost all had suffered extreme violence before their deaths.
Police have said they are not sure if they are hunting a serial killer. It is possible the cases are not linked.
Either way, what has happened in this residential district east of South Africa's biggest city has traumatised the nation, shining a spotlight on a situation that many believe is a crisis.
South Africa's police issue detailed crime statistics every quarter, which show that between April and June this year - 5,427 people were murdered.
The official data does not distinguish between the genders of the victims, but this week the country's Human Rights Commission released figures showing that 569 women had been killed in that period (six a day on average), with another 1,052 who faced attempted murder.
Many women - already feeling unsafe - have been left reeling by recent events.
And it has put pressure on the government, less than a year after ministers acknowledged the scale of the issue and declared gender-based violence a national disaster.
Announcing the move last November, Minister of Social Development Nokuzola Sisisi Tolashe said that treating the issue as a national disaster would help the government tackle the crisis.
It followed weeks of protests, culminating in a "Women's Shut Down" march as South Africa hosted the G20 summit.
This week has seen a chorus of calls for things to go further.
Rights group Amnesty International said an important first step towards protecting South Africa's women was to recognise femicide as a separate crime.
"Every day that femicide remains unrecognised as a crime is a failure to confront the targeted killing of women," said Amnesty's country director Shenilla Mohamed in a statement. "It is time to call it what it is: Femicide.
"Femicide is a gender-motivated crime. It is the killing of a woman because she is a woman."
Amnesty says femicide is criminalised as a specific crime in 33 countries, including Gabon and Morocco in Africa.
It argues that making that change in South Africa could help focus on the scale of the issue.
"It would compel the state to confront their failure to protect women and girls from violence," says Mohamed. "You cannot fix what you are not tracking."
Almost everyone in South Africa agrees more needs to be done.
President Cyril Ramaphosa this week pledged to leave "no stone unturned" in investigating the crimes in Ekurhuleni, adding: "As a nation, we must stand up for the rights, safety and dignity of women and girls."
Lebogang Ramofoko, an advocate for gender and social justice, said the levels of violence against women in the country were symptomatic of a much bigger problem – a lack of regard for humanity.
"The bodies of black women have been treated as disposable in this country for time immemorial, passed down from colonisation through to apartheid," she tells the BBC, referring to the legalised system of racism that was in place until 1994.
"What we see happening to women is testimony to legacies of violence from those systems whose traumas were never addressed.
"This is not to say black men are inherently violent, but in systems where violence was meted out against them for decades, historically black women were the people that that violence would be taken out on - that cycle has not been broken."
In Kempton Park, a district of Ekurhuleni where five of the nine recent bodies were found, Lumka Maqhubela is part of the Girl2Woman Foundation group which has held protests to raise awareness of the crimes.
"We are grieved, we are scared," she says. "If the police cannot protect us any more the government should step in and do something.
"It's clear that we are not safe, we cannot be told by the police to be more vigilant. They should be doing more to make our communities safe – what else are we expected to do? We are not safe anywhere, not in our homes, not in the streets, it needs to stop."
"I feel uncomfortable," says Thulisile Sibande, 32. "When I go to a shop, I have to look around. I'm shocked and scared. So scared, it's a trauma."
Thembi Mabena, 60, tells the BBC she lived in the same neighbourhood as Dineo Motapane.
"She was laughing every day, with everybody," she remembers. "Now I'm worried.
"I know many children, girls, who tell me they are afraid to go to the shop alone. There is no safety, even for me too. I am old, but there is no safety."
"In South Africa," says Lerato Mzizi, 20, simply, "women are not safe any more."
You may also be interested in:
South Africa calls gender violence a national disaster after protests
- Published21 November 2025
I built this 'AI aunt' for women after family tragedy in South Africa
- Published3 November 2025
Go to BBCAfrica.com, external for more news from the African continent.
Follow us on Twitter @BBCAfrica, external, on Facebook at BBC Africa, external or on Instagram at bbcafrica, external`,
    bodyJa: `Grim discoveries of murdered women spark fear in South Africa
- Published
"What we are going to do, I have no idea," sobs Nokwanda Matshikiza, reflecting on the murder of her niece Dineo Motapane. "But something must give."
"For us, for all the other women. How many other bodies will be found before something happens?"
Nokwanda is speaking to the BBC from the family home near South Africa's main city, Johannesburg, just two days after relatives identified Dineo's body.
The 38-year-old mother-of-two was last seen alive on Sunday. Her battered and partly burned body was later found in the residential region of Ekurhuleni.
Nokwanda weeps as she describes how the family will have to face, at some point, the grim task of telling Dineo's daughter of her death.
"How do you explain that your parent was brutally murdered, dumped in a field, and just left there, discarded like a piece of rubbish.
"There's no coming to peace with it," she adds. "It's something that you can never reconcile yourself with, that you can never get over."
Dineo's death this week has come amid a series of comparable incidents in Ekurhuleni – her body one of three discovered there this week. In total, nine bodies of murdered women have been found in similar circumstances in the region since July.
The problem has always been there but this spate of grim discoveries has once again sparked a national outcry about the scale of violence against women in the country – which has one of the highest rates of gender-based violence in the world.
Themba Kekana is also living in shock at the death of a loved one.
His sister, Itumeleng, was one of the first to disappear in Ekurhuleni.
The 32-year-old shopkeeper's body was found in July, 17 days after she was last seen alive. Her body was badly bruised, partially clothed and dumped on a bridge.
"We are devastated with grief," says Themba, wet eyes shining.
"I look at my sister's young daughter and my eyes fill with tears, I know there is no way that I can ever take this pain away from her.
"No family should have to deal with what we are faced with."
Only one arrest has been made in connection with the murders – and that was two days after the first body was discovered on 15 July.
Nobody has been detained following the murders of Itumeleng or Dineo or the other six Ekurhuleni women.
Most of the victims were young, in their 20s or 30s, and almost all had suffered extreme violence before their deaths.
Police have said they are not sure if they are hunting a serial killer. It is possible the cases are not linked.
Either way, what has happened in this residential district east of South Africa's biggest city has traumatised the nation, shining a spotlight on a situation that many believe is a crisis.
South Africa's police issue detailed crime statistics every quarter, which show that between April and June this year - 5,427 people were murdered.
The official data does not distinguish between the genders of the victims, but this week the country's Human Rights Commission released figures showing that 569 women had been killed in that period (six a day on average), with another 1,052 who faced attempted murder.
Many women - already feeling unsafe - have been left reeling by recent events.
And it has put pressure on the government, less than a year after ministers acknowledged the scale of the issue and declared gender-based violence a national disaster.
Announcing the move last November, Minister of Social Development Nokuzola Sisisi Tolashe said that treating the issue as a national disaster would help the government tackle the crisis.
It followed weeks of protests, culminating in a "Women's Shut Down" march as South Africa hosted the G20 summit.
This week has seen a chorus of calls for things to go further.
Rights group Amnesty International said an important first step towards protecting South Africa's women was to recognise femicide as a separate crime.
"Every day that femicide remains unrecognised as a crime is a failure to confront the targeted killing of women," said Amnesty's country director Shenilla Mohamed in a statement. "It is time to call it what it is: Femicide.
"Femicide is a gender-motivated crime. It is the killing of a woman because she is a woman."
Amnesty says femicide is criminalised as a specific crime in 33 countries, including Gabon and Morocco in Africa.
It argues that making that change in South Africa could help focus on the scale of the issue.
"It would compel the state to confront their failure to protect women and girls from violence," says Mohamed. "You cannot fix what you are not tracking."
Almost everyone in South Africa agrees more needs to be done.
President Cyril Ramaphosa this week pledged to leave "no stone unturned" in investigating the crimes in Ekurhuleni, adding: "As a nation, we must stand up for the rights, safety and dignity of women and girls."
Lebogang Ramofoko, an advocate for gender and social justice, said the levels of violence against women in the country were symptomatic of a much bigger problem – a lack of regard for humanity.
"The bodies of black women have been treated as disposable in this country for time immemorial, passed down from colonisation through to apartheid," she tells the BBC, referring to the legalised system of racism that was in place until 1994.
"What we see happening to women is testimony to legacies of violence from those systems whose traumas were never addressed.
"This is not to say black men are inherently violent, but in systems where violence was meted out against them for decades, historically black women were the people that that violence would be taken out on - that cycle has not been broken."
In Kempton Park, a district of Ekurhuleni where five of the nine recent bodies were found, Lumka Maqhubela is part of the Girl2Woman Foundation group which has held protests to raise awareness of the crimes.
"We are grieved, we are scared," she says. "If the police cannot protect us any more the government should step in and do something.
"It's clear that we are not safe, we cannot be told by the police to be more vigilant. They should be doing more to make our communities safe – what else are we expected to do? We are not safe anywhere, not in our homes, not in the streets, it needs to stop."
"I feel uncomfortable," says Thulisile Sibande, 32. "When I go to a shop, I have to look around. I'm shocked and scared. So scared, it's a trauma."
Thembi Mabena, 60, tells the BBC she lived in the same neighbourhood as Dineo Motapane.
"She was laughing every day, with everybody," she remembers. "Now I'm worried.
"I know many children, girls, who tell me they are afraid to go to the shop alone. There is no safety, even for me too. I am old, but there is no safety."
"In South Africa," says Lerato Mzizi, 20, simply, "women are not safe any more."
You may also be interested in:
South Africa calls gender violence a national disaster after protests
- Published21 November 2025
I built this 'AI aunt' for women after family tragedy in South Africa
- Published3 November 2025
Go to BBCAfrica.com, external for more news from the African continent.
Follow us on Twitter @BBCAfrica, external, on Facebook at BBC Africa, external or on Instagram at bbcafrica, external`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cjkg71e67k17o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-18T23:04:41+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/33a2/live/be22b180-b3a0-11f1-a430-4d16ee157c41.jpg",
    readTime: 10,
  },
  {
    id: "i-m-burned-out-i-m-constantly-helping-m-57e1ebd4",
    title: "‘I’m burned out’: I’m constantly helping my cousin who is running out of money. Is it too much to expect his sister to help?",
    titleJa: "‘I’m burned out’: I’m constantly helping my cousin who is running out of money. Is it too much to expect his sister to help?",
    summaryJa: "“I spend a lot of time away from my family and spend money on gas, taking him out to eat.”",
    bodyOriginal: `“I spend a lot of time away from my family and spend money on gas, taking him out to eat.”`,
    bodyJa: `“I spend a lot of time away from my family and spend money on gas, taking him out to eat.”`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/im-burned-out-im-constantly-helping-my-cousin-who-is-running-out-of-money-is-it-too-much-to-expect-his-sister-to-help-540def9a?mod=mw_rss_topstories",
    publishedAt: "2026-09-18T23:00:00+00:00",
    category: "エネルギー",
    imageUrl: "https://images.mktw.net/im-59442466",
    readTime: 2,
  },
  {
    id: "us-and-denmark-reach-deal-over-greenland-491edc8a",
    title: "US and Denmark reach deal over Greenland after Trump annexation threats",
    titleJa: "US and Denmark reach deal over Greenland after Trump annexation threats",
    summaryJa: "Trump says the agreement will give the US \"permanent control over security, and all other needs, in Greenland\", though specifics have not been confirmed by Danish officials.",
    bodyOriginal: `US and Denmark reach deal over Greenland after Trump annexation threats
- Published
The US and Denmark have announced a deal on Greenland's security, resolving a diplomatic dispute sparked by President Donald Trump's threats to seize the territory by force.
Trump said the agreement would grant the US "permanent control over security, and all other needs" in the semi-autonomous Danish territory.
The leaders of Denmark and Greenland welcomed the deal to "strengthen security" in the region, which they said was expected to be signed next week, but did not outline its contents.
The announcement comes after months of threats by Trump to "take" Greenland over national security concerns, citing its strategic location for defence purposes and its mineral wealth.
No text of the agreement has been released. Trump said the deal came with "no cost to the United States" and would grant the US the ability "to do what is necessary" to "secure and defend the security of Greenland", in a post on Truth Social.
He said it included a rule that no US adversary could maintain a military presence in Greenland or "make sensitive investments in Greenland, without our express written approval".
Denmark's Prime Minister Mette Frederiksen said she was "pleased that there is a prospect of a good agreement" for all three parties, which was expected to be signed at the UN General Assembly next week.
The deal "strengthens our common security in the Arctic and the North Atlantic area" while also recognising "the sovereignty and territorial integrity of the Kingdom and the right of the Greenlandic people to self-determination", she said in a joint statement with Greenland's Prime Minister Jens-Frederik Nielsen.
The agreement would still need to go through "the necessary parliamentary procedures to enter into force" once signed, the statement noted.
Nielsen said it was "gratifying that we are about to enter into an agreement that ensures and strengthens the security of Greenland, the Kingdom of Denmark, the United States and the Western alliance".
"The agreement recognises Greenland's interests and our place in international co-operation. It is for the benefit of us all," he said.
Trump had tried for months to purchase or annex the mineral-rich, semi-autonomous Danish territory, arguing that it was vulnerable to adversaries, including Russia and China. He even threatened military action in Greenland, prompting an outcry from Danes and other Nato countries.
US Secretary of State Marco Rubio called it a "historic deal" and a "huge win for the United States and the American people".
"This deal permanently and completely addresses our national security concerns in Greenland," he said in a statement.
The text of the agreement has not been published. The BBC has contacted the Danish Embassy in the US and the White House.
However, an unnamed US State Department official outlined the deal without providing specifics.
Among the agreed provisions is one stating the deal would not expire even if Greenland became an independent country in the future.
The official added that under the deal, the US has unilateral power to build additional military structures with no approval needed from Greenland or Denmark. It includes "permanent access, basing and overflights rights," the official said.
It also bans non-Nato countries from building bases in Greenland, and "bans adversaries from making investments in Greenland that could threaten the United States".
The official added that under the current status quo, adversaries have been allowed to invest in Greenland's "sensitive sectors without investment screening".
The official specifically referenced Russia and China, saying it blocks them from deploying troops or making investments in "sensitive sectors".
Without the official text being released, it is unclear how exactly the deal differs from a 1951 agreement with Denmark, under which the US can send as many troops as it wants to Greenland.
The US already has more than 100 military personnel permanently stationed at its Pituffik base in the north-western tip of the territory.
Trump says Greenland is essential for his plan to build a Golden Dome defence system, designed to protect the US against missile attacks from Russia and China, and that European allies could co-operate in this endeavour.
The island has vast - and largely untapped - reserves of rare earth minerals, many of which are crucial for technologies including mobile phones and electric vehicles.
Related topics
- Published21 January
- Published12 May
- Published22 January
- Published22 January`,
    bodyJa: `US and Denmark reach deal over Greenland after Trump annexation threats
- Published
The US and Denmark have announced a deal on Greenland's security, resolving a diplomatic dispute sparked by President Donald Trump's threats to seize the territory by force.
Trump said the agreement would grant the US "permanent control over security, and all other needs" in the semi-autonomous Danish territory.
The leaders of Denmark and Greenland welcomed the deal to "strengthen security" in the region, which they said was expected to be signed next week, but did not outline its contents.
The announcement comes after months of threats by Trump to "take" Greenland over national security concerns, citing its strategic location for defence purposes and its mineral wealth.
No text of the agreement has been released. Trump said the deal came with "no cost to the United States" and would grant the US the ability "to do what is necessary" to "secure and defend the security of Greenland", in a post on Truth Social.
He said it included a rule that no US adversary could maintain a military presence in Greenland or "make sensitive investments in Greenland, without our express written approval".
Denmark's Prime Minister Mette Frederiksen said she was "pleased that there is a prospect of a good agreement" for all three parties, which was expected to be signed at the UN General Assembly next week.
The deal "strengthens our common security in the Arctic and the North Atlantic area" while also recognising "the sovereignty and territorial integrity of the Kingdom and the right of the Greenlandic people to self-determination", she said in a joint statement with Greenland's Prime Minister Jens-Frederik Nielsen.
The agreement would still need to go through "the necessary parliamentary procedures to enter into force" once signed, the statement noted.
Nielsen said it was "gratifying that we are about to enter into an agreement that ensures and strengthens the security of Greenland, the Kingdom of Denmark, the United States and the Western alliance".
"The agreement recognises Greenland's interests and our place in international co-operation. It is for the benefit of us all," he said.
Trump had tried for months to purchase or annex the mineral-rich, semi-autonomous Danish territory, arguing that it was vulnerable to adversaries, including Russia and China. He even threatened military action in Greenland, prompting an outcry from Danes and other Nato countries.
US Secretary of State Marco Rubio called it a "historic deal" and a "huge win for the United States and the American people".
"This deal permanently and completely addresses our national security concerns in Greenland," he said in a statement.
The text of the agreement has not been published. The BBC has contacted the Danish Embassy in the US and the White House.
However, an unnamed US State Department official outlined the deal without providing specifics.
Among the agreed provisions is one stating the deal would not expire even if Greenland became an independent country in the future.
The official added that under the deal, the US has unilateral power to build additional military structures with no approval needed from Greenland or Denmark. It includes "permanent access, basing and overflights rights," the official said.
It also bans non-Nato countries from building bases in Greenland, and "bans adversaries from making investments in Greenland that could threaten the United States".
The official added that under the current status quo, adversaries have been allowed to invest in Greenland's "sensitive sectors without investment screening".
The official specifically referenced Russia and China, saying it blocks them from deploying troops or making investments in "sensitive sectors".
Without the official text being released, it is unclear how exactly the deal differs from a 1951 agreement with Denmark, under which the US can send as many troops as it wants to Greenland.
The US already has more than 100 military personnel permanently stationed at its Pituffik base in the north-western tip of the territory.
Trump says Greenland is essential for his plan to build a Golden Dome defence system, designed to protect the US against missile attacks from Russia and China, and that European allies could co-operate in this endeavour.
The island has vast - and largely untapped - reserves of rare earth minerals, many of which are crucial for technologies including mobile phones and electric vehicles.
Related topics
- Published21 January
- Published12 May
- Published22 January
- Published22 January`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c63d7lexyym1o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-18T22:58:55+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/a1d9/live/919d1120-b3ad-11f1-baa2-f576e6b1431d.jpg",
    readTime: 10,
  },
  {
    id: "my-total-balance-should-be-20-million-i-9b9d17f2",
    title: "‘My total balance should be $20 million’: I invested $1.1 million in a crypto platform. Have I lost it all?",
    titleJa: "‘My total balance should be $20 million’: I invested $1.1 million in a crypto platform. Have I lost it all?",
    summaryJa: "“I invested on the recommendation of an executive vice president of a major New York investment bank.”",
    bodyOriginal: `“I invested on the recommendation of an executive vice president of a major New York investment bank.”`,
    bodyJa: `“I invested on the recommendation of an executive vice president of a major New York investment bank.”`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/my-total-balance-should-be-worth-20-million-i-invested-1-1-million-in-a-crypto-platform-have-i-lost-it-all-d22da562?mod=mw_rss_topstories",
    publishedAt: "2026-09-18T22:45:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-78021125",
    readTime: 2,
  },
  {
    id: "why-investors-shouldn-t-be-spooked-by-fe-91a13823",
    title: "Why investors shouldn’t be spooked by fears of an October stock-market crash",
    titleJa: "Why investors shouldn’t be spooked by fears of an October stock-market crash",
    summaryJa: "You may be able to profit from investors’ irrational belief that crashes are especially likely to occur in October.",
    bodyOriginal: `You may be able to profit from investors’ irrational belief that crashes are especially likely to occur in October.`,
    bodyJa: `You may be able to profit from investors’ irrational belief that crashes are especially likely to occur in October.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/why-investors-shouldnt-be-spooked-by-fears-of-an-october-stock-market-crash-ac0eb2e1?mod=mw_rss_topstories",
    publishedAt: "2026-09-18T22:41:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-96714164",
    readTime: 2,
  },
  {
    id: "trump-signs-sweeping-russia-sanctions-bi-4e826f44",
    title: "Trump signs sweeping Russia sanctions bill",
    titleJa: "Trump signs sweeping Russia sanctions bill",
    summaryJa: "The bill is named after the late Senator Lindsey Graham, a staunch advocate of aid for Ukraine.",
    bodyOriginal: `Trump signs sweeping Russia sanctions bill
- Published
US President Donald Trump has signed a sweeping sanctions bill, taking aim at Russia's economy by punishing major purchasers of its oil and gas.
The bill, passed by the US House of Representatives earlier this week, gives Trump broad powers to levy tariffs of up to 100% on the top five purchasers of Russian oil and gas – most significantly China and India.
At Trump's behest, the bill also extends to Iran's energy and weapons sectors.
The bill is named after the late Senator Lindsey Graham, one of Ukraine's staunchest defenders in Washington before his death on 11 July.
The 48-page bill, formally titled the Lindsey O Graham Sanctioning Russia and Iran Act of 2026, includes exceptions for countries that import less than 15% of their natural gas from Russia and are working to lessen their dependency.
Additionally, the bill includes sanctions against Russian President Vladimir Putin, senior figures within the Russian government as well as banks and other financial institutions and Russia's "shadow fleet" of tankers used to circumvent existing sanctions.
Senator Richard Blumenthal, a New York Democrat, previously described the legislation as "scorching sanctions" which would "throttle Putin's war machine".
Data from the Centre for Research on Energy and Clean Air, or CREA, shows that China accounted for 50% of Russian crude exports between December 2022 and August 2026, followed by India at 37%.
Turkey and the European Union each accounted for 5% during the same time period, although Russian energy exports to the EU have been decreasing.
Senator Graham had long sought to push the Trump administration to do more to punish Russia for the war that followed its invasion of Ukraine in February 2022.
The bill also received the support of Ukrainian President Volodymyr Zelensky, who thanked Trump for signing the "critically important legislation".
"The best way to honour Lindsey's memory will be to implement the provisions of this law fully and swiftly," he wrote on social media.
"Senator Graham never doubted for a second that America has enough strength to stand up to dictators and achieve results if it acts the right way."
Graham, 71, died on 11 July of an "aortic dissection" caused by cardiovascular disease shortly after returning from a trip to Kyiv.
"He died doing the work he was born to do," Trump said at the time.
Prior to his death, he was widely considered one of Ukraine's fiercest allies on Capitol Hill, at a time when Republicans were bitterly divided over the extent of US involvement abroad and the amount of aid being given to Ukraine.
- Published2 days ago`,
    bodyJa: `Trump signs sweeping Russia sanctions bill
- Published
US President Donald Trump has signed a sweeping sanctions bill, taking aim at Russia's economy by punishing major purchasers of its oil and gas.
The bill, passed by the US House of Representatives earlier this week, gives Trump broad powers to levy tariffs of up to 100% on the top five purchasers of Russian oil and gas – most significantly China and India.
At Trump's behest, the bill also extends to Iran's energy and weapons sectors.
The bill is named after the late Senator Lindsey Graham, one of Ukraine's staunchest defenders in Washington before his death on 11 July.
The 48-page bill, formally titled the Lindsey O Graham Sanctioning Russia and Iran Act of 2026, includes exceptions for countries that import less than 15% of their natural gas from Russia and are working to lessen their dependency.
Additionally, the bill includes sanctions against Russian President Vladimir Putin, senior figures within the Russian government as well as banks and other financial institutions and Russia's "shadow fleet" of tankers used to circumvent existing sanctions.
Senator Richard Blumenthal, a New York Democrat, previously described the legislation as "scorching sanctions" which would "throttle Putin's war machine".
Data from the Centre for Research on Energy and Clean Air, or CREA, shows that China accounted for 50% of Russian crude exports between December 2022 and August 2026, followed by India at 37%.
Turkey and the European Union each accounted for 5% during the same time period, although Russian energy exports to the EU have been decreasing.
Senator Graham had long sought to push the Trump administration to do more to punish Russia for the war that followed its invasion of Ukraine in February 2022.
The bill also received the support of Ukrainian President Volodymyr Zelensky, who thanked Trump for signing the "critically important legislation".
"The best way to honour Lindsey's memory will be to implement the provisions of this law fully and swiftly," he wrote on social media.
"Senator Graham never doubted for a second that America has enough strength to stand up to dictators and achieve results if it acts the right way."
Graham, 71, died on 11 July of an "aortic dissection" caused by cardiovascular disease shortly after returning from a trip to Kyiv.
"He died doing the work he was born to do," Trump said at the time.
Prior to his death, he was widely considered one of Ukraine's fiercest allies on Capitol Hill, at a time when Republicans were bitterly divided over the extent of US involvement abroad and the amount of aid being given to Ukraine.
- Published2 days ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cqvgy34ndj4eo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-18T22:05:47+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/402a/live/1f49c870-b3f3-11f1-a710-1de24a8819a3.jpg",
    readTime: 7,
  },
  {
    id: "anthropic-selects-accenture-as-first-emb-9dfe2d69",
    title: "Anthropic selects Accenture as first embedded evaluator to help implement Amodei's slowdown proposal",
    titleJa: "Anthropic selects Accenture as first embedded evaluator to help implement Amodei's slowdown proposal",
    summaryJa: "Anthropic and OpenAI have been under intense scrutiny after researchers warned about the potential for AI to cause catastrophic harm to humanity.",
    bodyOriginal: `Anthropic on Friday announced it has selected Accenture as an embedded evaluator, the company's first concrete step toward implementing CEO Dario Amodei's proposal to slow down the pace of artificial intelligence development.
Both Anthropic and Accenture have agreed to invest at least $1 billion to "building capacity in this area" over the next five years, according to a release. But Anthropic said that given the "importance and urgency," it will fund Accenture's work directly.
"Long-term, we think funding should come from pooled or government sources, as we called for in our Advanced AI Framework in June," Anthropic said. "As neither exists today, we plan to work with different evaluators under different funding arrangements."
On Saturday, Amodei rocked the tech sector by publishing a three-step plan to temper how quickly AI companies improve their most advanced models. Anthropic and its chief rival, OpenAI, have been under intense scrutiny in recent weeks after a growing chorus of researchers warned about the potential for AI to cause catastrophic harm.
Amodei's proposal was cheered by some industry executives this week, including OpenAI CEO Sam Altman and Tesla and SpaceX CEO Elon Musk, but others, like Nvidia CEO Jensen Huang, brushed off concerns and argued that there's no need for new regulation. Many questioned what Amodei's proposal would mean in practice, especially as Anthropic gears up for what is widely expected to be a blockbuster IPO.
The first step of Amodei's plan grants third-party evaluators employee-level access to the company to verify safety practices and report incidents. He said Saturday that Anthropic "unilaterally" committed to this part of the proposal, and he encouraged other AI companies to do the same.
Anthropic said Friday that it has initially agreed to embed employees from Faculty, Accenture's specialist AI business, into the company in order to test safeguards, red-team models and assess whether models behave in line with human values. The partnership is not exclusive, and Anthropic said it is in discussions with the research nonprofit METR, as well as other third parties.
The company emphasized that it is still responsible for the safety of its models, and said that working with embedded evaluators will not reduce its accountability.
"We're sharing these early efforts now so people and other AI developers can see our process," Anthropic said. "We expect our approach to evolve as the field matures, and we'll share more as our work begins and as we bring on additional evaluators."`,
    bodyJa: `Anthropic on Friday announced it has selected Accenture as an embedded evaluator, the company's first concrete step toward implementing CEO Dario Amodei's proposal to slow down the pace of artificial intelligence development.
Both Anthropic and Accenture have agreed to invest at least $1 billion to "building capacity in this area" over the next five years, according to a release. But Anthropic said that given the "importance and urgency," it will fund Accenture's work directly.
"Long-term, we think funding should come from pooled or government sources, as we called for in our Advanced AI Framework in June," Anthropic said. "As neither exists today, we plan to work with different evaluators under different funding arrangements."
On Saturday, Amodei rocked the tech sector by publishing a three-step plan to temper how quickly AI companies improve their most advanced models. Anthropic and its chief rival, OpenAI, have been under intense scrutiny in recent weeks after a growing chorus of researchers warned about the potential for AI to cause catastrophic harm.
Amodei's proposal was cheered by some industry executives this week, including OpenAI CEO Sam Altman and Tesla and SpaceX CEO Elon Musk, but others, like Nvidia CEO Jensen Huang, brushed off concerns and argued that there's no need for new regulation. Many questioned what Amodei's proposal would mean in practice, especially as Anthropic gears up for what is widely expected to be a blockbuster IPO.
The first step of Amodei's plan grants third-party evaluators employee-level access to the company to verify safety practices and report incidents. He said Saturday that Anthropic "unilaterally" committed to this part of the proposal, and he encouraged other AI companies to do the same.
Anthropic said Friday that it has initially agreed to embed employees from Faculty, Accenture's specialist AI business, into the company in order to test safeguards, red-team models and assess whether models behave in line with human values. The partnership is not exclusive, and Anthropic said it is in discussions with the research nonprofit METR, as well as other third parties.
The company emphasized that it is still responsible for the safety of its models, and said that working with embedded evaluators will not reduce its accountability.
"We're sharing these early efforts now so people and other AI developers can see our process," Anthropic said. "We expect our approach to evolve as the field matures, and we'll share more as our work begins and as we bring on additional evaluators."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/18/anthropic-accenture-ai-safety.html",
    publishedAt: "2026-09-18T21:37:38+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 6,
  },
  {
    id: "it-s-almost-impossible-to-sell-a-condo-u-8f822892",
    title: "It’s almost impossible to sell a condo unit these days: ‘I feel trapped’",
    titleJa: "It’s almost impossible to sell a condo unit these days: ‘I feel trapped’",
    summaryJa: "Selling a condominium unit has become a challenge for many, as buyers get spooked at the prospect of bearing ever-rising HOA fees — even if the home comes with a lower price tag.",
    bodyOriginal: `Selling a condominium unit has become a challenge for many, as buyers get spooked at the prospect of bearing ever-rising HOA fees — even if the home comes with a lower price tag.`,
    bodyJa: `Selling a condominium unit has become a challenge for many, as buyers get spooked at the prospect of bearing ever-rising HOA fees — even if the home comes with a lower price tag.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/its-almost-impossible-to-sell-a-condo-these-days-i-feel-trapped-1f96ce37?mod=mw_rss_topstories",
    publishedAt: "2026-09-18T21:16:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-49059327",
    readTime: 2,
  },
  {
    id: "amazon-palantir-and-12-more-top-tech-sto-fb83dc68",
    title: "Amazon, Palantir and 12 more top tech stock picks from UBS analysts",
    titleJa: "Amazon, Palantir and 12 more top tech stock picks from UBS analysts",
    summaryJa: "The AI data-center buildout is still early, and UBS says investors can cash in through investments across the technology, media and telecommunications sectors.",
    bodyOriginal: `The AI data-center buildout is still early, and UBS says investors can cash in through investments across the technology, media and telecommunications sectors.`,
    bodyJa: `The AI data-center buildout is still early, and UBS says investors can cash in through investments across the technology, media and telecommunications sectors.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/amazon-palantir-and-12-more-top-tech-stock-picks-from-ubs-analysts-435244bb?mod=mw_rss_topstories",
    publishedAt: "2026-09-18T21:14:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-77701466",
    readTime: 2,
  },
  {
    id: "trump-says-he-s-banning-ms-now-cnn-and-p-b17ea2a8",
    title: "Trump says he's banning MS NOW, CNN and Politico from White House",
    titleJa: "Trump says he's banning MS NOW, CNN and Politico from White House",
    summaryJa: "Trump, who often accuses mainstream media outlets of writing \"fake news,\" said on Truth Social that those outlets shouldn't be allowed to \"FICTION and LIES.\"",
    bodyOriginal: `President Donald Trump said Friday that he is banning MS NOW, CNN and Politico from the White House over their coverage of him.
Trump, who frequently accuses mainstream media outlets of writing "fake news," said in a Truth Social post that those outlets "shouldn't be able to constantly write or report FICTION and LIES."
He did not identify any specific coverage. But he added, "Other Fake News Media Outlets to follow."
In the Oval Office later Friday afternoon, Trump said he was imposing the ban in response to "cumulative stories" by the three outlets.
"You get sick of it," he said.
Trump, whose White House briefly tried to suspend a CNN reporter's press pass in 2018 and is currently in a lawsuit over an attempted ban of Associated Press journalists, said the bid to bar more news outlets was worthwhile even if it does not hold up in court.
"I think it's good to point it out whether it survives or doesn't," Trump said.
Trump has long targeted news outlets and individual journalists over what he claims is unfair coverage. He encourages his supporters at political rallies to boo and jeer at reporters present, and he regularly takes to social media to call out journalists by name and insult them in personal terms.
But the attempt to block White House access to disfavored news outlets takes Trump's open hostility for critical reporting to a new extreme.
It could also draw legal challenges over violations of the U.S. Constitution's First Amendment, which protects the freedom of the press.
"In our view, it's unconstitutional," Arthur Spitzer, a lawyer for the American Civil Liberties Union, said in an interview with CNBC when asked about Trump's post.
"He's plainly discriminating against them because they don't like the way they report the news, and the government isn't supposed to do that," the lawyer said. "Certainly, our view is the president cannot control, or try to control, the news by banning outlets from official events because he doesn't like the way they're reporting on him."
Spitzer is representing the ACLU in an ongoing case related to Trump's ban of AP journalists from spaces including the Oval Office and Air Force One.
Trump sought to bar the wire service from those places following its decision to refer to the Gulf of Mexico by its centuries-old name despite Trump's attempt to rename it the "Gulf of America."
A federal judge ruled in April 2025 that Trump's action against the AP was "contrary to the First Amendment." An appeal of that decision is still pending.
Asked for comment on Trump's Friday post, the White House referred CNBC to the president's latest comments in the Oval Office. MS NOW had no immediate comment. CNBC has reached out for comment from CNN and Politico.
Weija Jiang, who served as president of the White House Correspondents' Association until July, responded to the Friday post by quoting the First Amendment.
"Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances," the amendment reads.
The correspondents' association, whose current president is Fox News senior White House correspondent Jacqui Heinrich, did not immediately respond to CNBC's request for comment.
This is breaking news. Please refresh for updates.
Disclosure: CNBC and MS NOW are divisions of Versant Media.`,
    bodyJa: `President Donald Trump said Friday that he is banning MS NOW, CNN and Politico from the White House over their coverage of him.
Trump, who frequently accuses mainstream media outlets of writing "fake news," said in a Truth Social post that those outlets "shouldn't be able to constantly write or report FICTION and LIES."
He did not identify any specific coverage. But he added, "Other Fake News Media Outlets to follow."
In the Oval Office later Friday afternoon, Trump said he was imposing the ban in response to "cumulative stories" by the three outlets.
"You get sick of it," he said.
Trump, whose White House briefly tried to suspend a CNN reporter's press pass in 2018 and is currently in a lawsuit over an attempted ban of Associated Press journalists, said the bid to bar more news outlets was worthwhile even if it does not hold up in court.
"I think it's good to point it out whether it survives or doesn't," Trump said.
Trump has long targeted news outlets and individual journalists over what he claims is unfair coverage. He encourages his supporters at political rallies to boo and jeer at reporters present, and he regularly takes to social media to call out journalists by name and insult them in personal terms.
But the attempt to block White House access to disfavored news outlets takes Trump's open hostility for critical reporting to a new extreme.
It could also draw legal challenges over violations of the U.S. Constitution's First Amendment, which protects the freedom of the press.
"In our view, it's unconstitutional," Arthur Spitzer, a lawyer for the American Civil Liberties Union, said in an interview with CNBC when asked about Trump's post.
"He's plainly discriminating against them because they don't like the way they report the news, and the government isn't supposed to do that," the lawyer said. "Certainly, our view is the president cannot control, or try to control, the news by banning outlets from official events because he doesn't like the way they're reporting on him."
Spitzer is representing the ACLU in an ongoing case related to Trump's ban of AP journalists from spaces including the Oval Office and Air Force One.
Trump sought to bar the wire service from those places following its decision to refer to the Gulf of Mexico by its centuries-old name despite Trump's attempt to rename it the "Gulf of America."
A federal judge ruled in April 2025 that Trump's action against the AP was "contrary to the First Amendment." An appeal of that decision is still pending.
Asked for comment on Trump's Friday post, the White House referred CNBC to the president's latest comments in the Oval Office. MS NOW had no immediate comment. CNBC has reached out for comment from CNN and Politico.
Weija Jiang, who served as president of the White House Correspondents' Association until July, responded to the Friday post by quoting the First Amendment.
"Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances," the amendment reads.
The correspondents' association, whose current president is Fox News senior White House correspondent Jacqui Heinrich, did not immediately respond to CNBC's request for comment.
This is breaking news. Please refresh for updates.
Disclosure: CNBC and MS NOW are divisions of Versant Media.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/18/trump-white-house-ban-msnow-cnn-politico.html",
    publishedAt: "2026-09-18T20:34:58+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 9,
  },
  {
    id: "elon-musk-talks-up-ai-safety-while-fight-d0978272",
    title: "Elon Musk talks up AI safety while fighting regulation in wild week of strange alliances",
    titleJa: "Elon Musk talks up AI safety while fighting regulation in wild week of strange alliances",
    summaryJa: "In the past week, Musk has agreed with the CEOs of Anthropic and OpenAI, while getting contradicted by President Trump and Nvidia's Jensen Huang.",
    bodyOriginal: `Elon Musk had a head-spinning week in AI.
After agreeing with bitter rivals Dario Amodei and Sam Altman in their call for foundation model labs to slow the pace of development, Musk was contradicted by President Donald Trump and Nvidia CEO Jensen Huang, who said AI companies actually need to go faster.
Trump, whose stock portfolio includes shares of Nvidia and SpaceX according to his most recent disclosure, called fears of runaway AI a "hoax."
Speaking on a panel at the All-In Summit on Tuesday that included longtime friend and former White House AI czar David Sacks, Musk took a more middle-of-the-road approach. He urged companies to test each other's new models to identify and fix safety issues before they get released, an option he sees as preferable to the government taking a heavy-handed regulatory position in AI.
"You can always escalate the amount of regulatory oversight, but it is very difficult to reduce it," Musk said in a virtual appearance at the event. "It does tend to be very much a one-way ratchet."
Behind the scenes, the Wall Street Journal reported this week that Musk had joined Huang and Meta CEO Mark Zuckerberg in advising President Trump to oppose an industry-funded regulator.
Musk didn't immediately respond to a request for comment for this story.
The back and forth in just the past week is a microcosm of Musk's history in artificial intelligence, dating back to an early check he wrote to fund DeepMind, which Google acquired in 2014. The year after that deal, Musk co-founded OpenAI with Altman and others as a nonprofit research lab.
While Musk has long expressed controversial and often conflicting views in AI, torching friendships along the way with the likes of Google co-founder Larry Page and Altman, the stakes now are higher than ever. Model developers are rolling out technology that has industry insiders sounding the alarm about the potentially existential threats of AI, while internet giants spend hundreds of billions of dollars a year on the infrastructure to power it.
Musk's SpaceX is heavily invested in the technology's growth. The company merged with xAI, Musk's AI startup, in February, and completed a $60 billion acquisition of AI coding tools provider Cursor in August. In between those two events, SpaceX went public in the largest IPO on record, briefly turning Musk into a trillionaire.
Meanwhile, Musk's other public company, Tesla, continues work on so-called physical AI, including driverless cars and humanoid robots.
"Tesla is arguably the world's biggest robotics company," Musk said at Tesla's "AI Day" in 2021. "Because our cars are semi-sentient robots on wheels."
'Some scary outcomes'
Since Musk's early days in AI, he's simultaneously drummed up public fears of world-ending threats from AI "superintelligence" while building out his own AI businesses and fighting off regulation. He told CNBC's "Closing Bell" in 2014, "I like to just keep an eye on what's going on with artificial intelligence," adding, "There have been movies about this, you know, like '[The] Terminator.' There are some scary outcomes."
His fear-plus-optimism campaign is part of a strategy documented by AI ethics and computer science researchers Timnit Gebru and Emile Torres in a March 2024 paper.
The paper mentions Musk more than 30 times and concludes that he and a small group of elite players in AI have claimed they are, "safeguarding humanity's future, while simultaneously creating unsafe products, centralizing power, and evading accountability," and disproportionately harming marginalized groups.
In late 2014, Musk told students at the Massachusetts Institute of Technology that AI development was like "summoning the demon." Around that time, he donated $10 million through his foundation to seed the Future of Life Institute (FLI), a nonprofit led by MIT researcher Max Tegmark, who aimed to raise awareness of AI's terrifying potential and to steer the technology in a manner that would avoid driving humans to extinction.
Speaking at a keynote at the 2015 Effective Altruism conference, Musk said the threat of AI advancements spinning out of human control was the biggest existential risk that he could envision. He soon signed an open letter from FLI calling to "pause AI."
That same year, Musk co-founded OpenAI with a mission to "advance digital intelligence in the way that is most likely to benefit humanity as a whole, unconstrained by a need to generate financial return."
His rift with Altman came in 2018, when Musk privately pressured his OpenAI co-founders to give him control of the lab and to make OpenAI a for-profit subsidiary of Tesla. Musk poached key talent from OpenAI for Tesla, and resigned from the organization's board that year.
It was another four years before the magnitude of that breakup would start to become apparent. In November 2022, OpenAI released ChatGPT, kicking off the generative AI boom, with Musk largely on the sidelines.
A few months later, in March 2023, Musk signed another "pause AI letter" from FLI.
"AI systems with human-competitive intelligence can pose profound risks to society and humanity, as shown by extensive research and acknowledged by top AI labs," the letter began.
At roughly the same time, Musk was incorporating his new AI venture, xAI, in Nevada, but he kept it quiet from Tesla investors and the public until July.
Musk v. Altman
Then came the legal battle with Altman.
In August 2024, Musk filed a suit against OpenAI and its co-founders, claiming they had violated a promise to keep the lab a nonprofit. Musk lost the high-profile California trial in May, when a jury and federal judge determined his claims were filed outside of the statute of limitations. Musk said he would appeal but has yet to do so.
Correspondence brought to light in the case showed that Musk's obsession with creating OpenAI was built on fears that Google would control the technology after acquiring DeepMind, though in public he and Altman touted more altruistic aspects of their mission.
Now, Musk is back to calling for safety. Following Amodei's essay last weekend imploring the industry to "pace the frontier," Musk posted on X, "Dario is right."
That's quite the contrast from February, when Musk called Anthropic "misanthropic and evil" and said it "hates Western civilization." Things changed dramatically in May, when Anthropic agreed to pay SpaceX up to $1.25 billion a month to rent computing infrastructure in Memphis, giving Musk's company a hefty dose of sorely needed AI revenue before SpaceX's IPO.
"I was clearly wrong about Anthropic," Musk wrote on X in July. "They are obviously currently the leader in AI."
Musk's recent track record on AI safety has been rocky.
He's built out data centers in and around Memphis, Tennessee, while fighting off litigation from residents nearby suffering from air and noise pollution from the operations.
At SpaceX, Musk sold a version of xAI's Grok models to the U.S. military which "enabled U.S. forces to deploy over 2,000 munitions to 2,000 distinct targets within 96 hours," according to DOJ legal filings.
And at xAI — now known as SpaceXAI — Musk sued to stop state regulations that would ban Grok's "nudify" features in Minnesota, and that would require his company to be transparent about the data used to train its models in California.
As Musk and his peers and rivals debate the right approach to AI safety, and whether the government should have a big role or no role at all, lawmakers and third-party researchers are growing increasingly skeptical of the industry's ability to police itself.
Tyler Whitmer, CEO of the nonprofit Legal Advocates for Safe Science and Technology (LASST), told CNBC that self-regulation won't be enough to protect the public from existing and future harms enabled by AI systems.
"We need real regulation that creates a level playing field for companies but also protects the public, and the companies just can't do that themselves," Whitmer said. "There needs to be a government-enforceable requirement that third-party evaluators be involved, not just the companies themselves."`,
    bodyJa: `Elon Musk had a head-spinning week in AI.
After agreeing with bitter rivals Dario Amodei and Sam Altman in their call for foundation model labs to slow the pace of development, Musk was contradicted by President Donald Trump and Nvidia CEO Jensen Huang, who said AI companies actually need to go faster.
Trump, whose stock portfolio includes shares of Nvidia and SpaceX according to his most recent disclosure, called fears of runaway AI a "hoax."
Speaking on a panel at the All-In Summit on Tuesday that included longtime friend and former White House AI czar David Sacks, Musk took a more middle-of-the-road approach. He urged companies to test each other's new models to identify and fix safety issues before they get released, an option he sees as preferable to the government taking a heavy-handed regulatory position in AI.
"You can always escalate the amount of regulatory oversight, but it is very difficult to reduce it," Musk said in a virtual appearance at the event. "It does tend to be very much a one-way ratchet."
Behind the scenes, the Wall Street Journal reported this week that Musk had joined Huang and Meta CEO Mark Zuckerberg in advising President Trump to oppose an industry-funded regulator.
Musk didn't immediately respond to a request for comment for this story.
The back and forth in just the past week is a microcosm of Musk's history in artificial intelligence, dating back to an early check he wrote to fund DeepMind, which Google acquired in 2014. The year after that deal, Musk co-founded OpenAI with Altman and others as a nonprofit research lab.
While Musk has long expressed controversial and often conflicting views in AI, torching friendships along the way with the likes of Google co-founder Larry Page and Altman, the stakes now are higher than ever. Model developers are rolling out technology that has industry insiders sounding the alarm about the potentially existential threats of AI, while internet giants spend hundreds of billions of dollars a year on the infrastructure to power it.
Musk's SpaceX is heavily invested in the technology's growth. The company merged with xAI, Musk's AI startup, in February, and completed a $60 billion acquisition of AI coding tools provider Cursor in August. In between those two events, SpaceX went public in the largest IPO on record, briefly turning Musk into a trillionaire.
Meanwhile, Musk's other public company, Tesla, continues work on so-called physical AI, including driverless cars and humanoid robots.
"Tesla is arguably the world's biggest robotics company," Musk said at Tesla's "AI Day" in 2021. "Because our cars are semi-sentient robots on wheels."
'Some scary outcomes'
Since Musk's early days in AI, he's simultaneously drummed up public fears of world-ending threats from AI "superintelligence" while building out his own AI businesses and fighting off regulation. He told CNBC's "Closing Bell" in 2014, "I like to just keep an eye on what's going on with artificial intelligence," adding, "There have been movies about this, you know, like '[The] Terminator.' There are some scary outcomes."
His fear-plus-optimism campaign is part of a strategy documented by AI ethics and computer science researchers Timnit Gebru and Emile Torres in a March 2024 paper.
The paper mentions Musk more than 30 times and concludes that he and a small group of elite players in AI have claimed they are, "safeguarding humanity's future, while simultaneously creating unsafe products, centralizing power, and evading accountability," and disproportionately harming marginalized groups.
In late 2014, Musk told students at the Massachusetts Institute of Technology that AI development was like "summoning the demon." Around that time, he donated $10 million through his foundation to seed the Future of Life Institute (FLI), a nonprofit led by MIT researcher Max Tegmark, who aimed to raise awareness of AI's terrifying potential and to steer the technology in a manner that would avoid driving humans to extinction.
Speaking at a keynote at the 2015 Effective Altruism conference, Musk said the threat of AI advancements spinning out of human control was the biggest existential risk that he could envision. He soon signed an open letter from FLI calling to "pause AI."
That same year, Musk co-founded OpenAI with a mission to "advance digital intelligence in the way that is most likely to benefit humanity as a whole, unconstrained by a need to generate financial return."
His rift with Altman came in 2018, when Musk privately pressured his OpenAI co-founders to give him control of the lab and to make OpenAI a for-profit subsidiary of Tesla. Musk poached key talent from OpenAI for Tesla, and resigned from the organization's board that year.
It was another four years before the magnitude of that breakup would start to become apparent. In November 2022, OpenAI released ChatGPT, kicking off the generative AI boom, with Musk largely on the sidelines.
A few months later, in March 2023, Musk signed another "pause AI letter" from FLI.
"AI systems with human-competitive intelligence can pose profound risks to society and humanity, as shown by extensive research and acknowledged by top AI labs," the letter began.
At roughly the same time, Musk was incorporating his new AI venture, xAI, in Nevada, but he kept it quiet from Tesla investors and the public until July.
Musk v. Altman
Then came the legal battle with Altman.
In August 2024, Musk filed a suit against OpenAI and its co-founders, claiming they had violated a promise to keep the lab a nonprofit. Musk lost the high-profile California trial in May, when a jury and federal judge determined his claims were filed outside of the statute of limitations. Musk said he would appeal but has yet to do so.
Correspondence brought to light in the case showed that Musk's obsession with creating OpenAI was built on fears that Google would control the technology after acquiring DeepMind, though in public he and Altman touted more altruistic aspects of their mission.
Now, Musk is back to calling for safety. Following Amodei's essay last weekend imploring the industry to "pace the frontier," Musk posted on X, "Dario is right."
That's quite the contrast from February, when Musk called Anthropic "misanthropic and evil" and said it "hates Western civilization." Things changed dramatically in May, when Anthropic agreed to pay SpaceX up to $1.25 billion a month to rent computing infrastructure in Memphis, giving Musk's company a hefty dose of sorely needed AI revenue before SpaceX's IPO.
"I was clearly wrong about Anthropic," Musk wrote on X in July. "They are obviously currently the leader in AI."
Musk's recent track record on AI safety has been rocky.
He's built out data centers in and around Memphis, Tennessee, while fighting off litigation from residents nearby suffering from air and noise pollution from the operations.
At SpaceX, Musk sold a version of xAI's Grok models to the U.S. military which "enabled U.S. forces to deploy over 2,000 munitions to 2,000 distinct targets within 96 hours," according to DOJ legal filings.
And at xAI — now known as SpaceXAI — Musk sued to stop state regulations that would ban Grok's "nudify" features in Minnesota, and that would require his company to be transparent about the data used to train its models in California.
As Musk and his peers and rivals debate the right approach to AI safety, and whether the government should have a big role or no role at all, lawmakers and third-party researchers are growing increasingly skeptical of the industry's ability to police itself.
Tyler Whitmer, CEO of the nonprofit Legal Advocates for Safe Science and Technology (LASST), told CNBC that self-regulation won't be enough to protect the public from existing and future harms enabled by AI systems.
"We need real regulation that creates a level playing field for companies but also protects the public, and the companies just can't do that themselves," Whitmer said. "There needs to be a government-enforceable requirement that third-party evaluators be involved, not just the companies themselves."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/18/after-decade-of-clashes-in-ai-elon-musk-forging-strange-alliances.html",
    publishedAt: "2026-09-18T19:15:24+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "three-words-from-kevin-warsh-have-wall-s-0ab2a766",
    title: "Three words from Kevin Warsh have Wall Street wondering how far the Fed will go with rate hikes",
    titleJa: "Three words from Kevin Warsh have Wall Street wondering how far the Fed will go with rate hikes",
    summaryJa: "The chairman both explained this week's decision to raise interest rates, and raised vexing questions about what comes next",
    bodyOriginal: `With a few carefully chosen words, Federal Reserve Chairman Kevin Warsh both explained this week's decision to hike interest rates and raised vexing questions about what comes next.
Warsh described Wednesday's decision to lift the central bank's benchmark rate by a quarter percentage point not specifically as a tightening of policy but rather as removing "a dose of accommodation." Further, he said the move was possible because of a U.S. economy that appears to have "strengthened" and financial conditions that have become less restrictive.
While the language may sound like central bank semantics, it gets to the heart of what markets are debating now: How far will the Warsh Fed go if it has only removed a "dose" of help, and what are the guidelines it will be using to formulate policy?
The phrase was "the one stand-out hawkish element" of Warsh's post-meeting commentary to the press, Krishna Guha, head of economics and central bank strategy at Evercore ISI, said in a client note.
"This was not a mistake; it was a phrase he repeated several times and looked very much a deliberate choice to frame policy in this way," Guha added, noting that "the framing is substantively different to that used by the Fed in recent years, and raises the possibility of a more open-ended approach to the number of hikes that might be required."
That framework has included a calibration of where policy should sit relative to the so-called neutral rate, one that neither boosts nor holds back growth. By extension, benchmark rates that sit well above the neutral rate are considered restrictive, while those closer to or below neutral are regarded as accommodative.
What about neutral?
Warsh's framing of the hike as removing "a dose" of accommodation could be seen as the first of multiple steps toward withdrawing support the Fed no longer feels is necessary. The Fed is looking to return inflation to 2%, and policymakers generally consider raising rates as a way to tamp down demand and control price pressures.
"Warsh's framing, if taken literally, raises the possibility that rates might have to keep going up until financial conditions facing the private sector are no longer 'accommodative' — however that is defined," Guha said. "This is a relatively open-ended prospect."
Warsh had the chance to clarify what benchmark he was using to determine how much accommodation remains in policy.
Asked by CNBC's Steve Liesman to explain how far he sees the current rate — in a target range of 3.75%-4% — sitting above neutral, Warsh essentially rejected the framing, in a statement that runs counter to how central bank policy has operated for more than a decade.
Warsh said measuring the benchmark rate relative to neutral is "useful academically. It's a discussion to help us think about policy. Do I think it has any operational effect of decisions that we make today? No, I don't."
The answer helped add a layer of mystery to a Fed chairman already developing a reputation for being cryptic when it comes to how he views the wheels of policy needing to be tuned.
Markets wonder what's next
A round of post-meeting speculation on Wall Street about what's to come has ensued.
One of the initial reactions was pricing in higher odds for another hike when the Fed next meets in October. Goldman Sachs added an October increase to its forecast, as does Bank of America, which also expects another move in December. The market-implied odds of an October increase were near 58% Friday morning, according to the CME Group's FedWatch gauge. A week ago, the probability was 42%.
"The word 'accommodation' means 'stimulus' at the Fed; this comment implies that the current monetary policy stance is meaningfully stimulative," wrote James Egelhof, chief U.S. economist at BNP Paribas Securities.
"With policy starting at a stimulative stance, a strong cyclical impulse, and persistent inflation, we think significant rate increases, perhaps more than the three we expect, may be necessary to stabilize the unemployment rate from below and prevent overheating next year," he added.
Egelhof agreed that the "dose of accommodation" remark was "the most striking feature" of Warsh's abbreviated news conference.
Markets are pricing in the likelihood that the Warsh Fed removes a few more "doses" before it is finished. Futures are implying a fed funds rate of 4.635% near the end of 2027, which would argue for three or four more hikes ahead.
If that's the case, the Fed at the very least will undo many of the FOMC rate cuts approved under Warsh's predecessor, Jerome Powell, who now sits on the committee as a governor.
The "dose of accommodation" remarks "seemingly helped to underscore this hawkish tone, implying that [the] committee no longer views policy as modestly restrictive," said Jack Janasiewicz, portfolio manager and lead portfolio strategist at Natixis Investment Managers Solutions.
"We remain unconvinced that this is the start of an aggressive new tightening cycle," he said. "Rather, we see this as a removal of the insurance cuts the Fed delivered in the fall of 2025."`,
    bodyJa: `With a few carefully chosen words, Federal Reserve Chairman Kevin Warsh both explained this week's decision to hike interest rates and raised vexing questions about what comes next.
Warsh described Wednesday's decision to lift the central bank's benchmark rate by a quarter percentage point not specifically as a tightening of policy but rather as removing "a dose of accommodation." Further, he said the move was possible because of a U.S. economy that appears to have "strengthened" and financial conditions that have become less restrictive.
While the language may sound like central bank semantics, it gets to the heart of what markets are debating now: How far will the Warsh Fed go if it has only removed a "dose" of help, and what are the guidelines it will be using to formulate policy?
The phrase was "the one stand-out hawkish element" of Warsh's post-meeting commentary to the press, Krishna Guha, head of economics and central bank strategy at Evercore ISI, said in a client note.
"This was not a mistake; it was a phrase he repeated several times and looked very much a deliberate choice to frame policy in this way," Guha added, noting that "the framing is substantively different to that used by the Fed in recent years, and raises the possibility of a more open-ended approach to the number of hikes that might be required."
That framework has included a calibration of where policy should sit relative to the so-called neutral rate, one that neither boosts nor holds back growth. By extension, benchmark rates that sit well above the neutral rate are considered restrictive, while those closer to or below neutral are regarded as accommodative.
What about neutral?
Warsh's framing of the hike as removing "a dose" of accommodation could be seen as the first of multiple steps toward withdrawing support the Fed no longer feels is necessary. The Fed is looking to return inflation to 2%, and policymakers generally consider raising rates as a way to tamp down demand and control price pressures.
"Warsh's framing, if taken literally, raises the possibility that rates might have to keep going up until financial conditions facing the private sector are no longer 'accommodative' — however that is defined," Guha said. "This is a relatively open-ended prospect."
Warsh had the chance to clarify what benchmark he was using to determine how much accommodation remains in policy.
Asked by CNBC's Steve Liesman to explain how far he sees the current rate — in a target range of 3.75%-4% — sitting above neutral, Warsh essentially rejected the framing, in a statement that runs counter to how central bank policy has operated for more than a decade.
Warsh said measuring the benchmark rate relative to neutral is "useful academically. It's a discussion to help us think about policy. Do I think it has any operational effect of decisions that we make today? No, I don't."
The answer helped add a layer of mystery to a Fed chairman already developing a reputation for being cryptic when it comes to how he views the wheels of policy needing to be tuned.
Markets wonder what's next
A round of post-meeting speculation on Wall Street about what's to come has ensued.
One of the initial reactions was pricing in higher odds for another hike when the Fed next meets in October. Goldman Sachs added an October increase to its forecast, as does Bank of America, which also expects another move in December. The market-implied odds of an October increase were near 58% Friday morning, according to the CME Group's FedWatch gauge. A week ago, the probability was 42%.
"The word 'accommodation' means 'stimulus' at the Fed; this comment implies that the current monetary policy stance is meaningfully stimulative," wrote James Egelhof, chief U.S. economist at BNP Paribas Securities.
"With policy starting at a stimulative stance, a strong cyclical impulse, and persistent inflation, we think significant rate increases, perhaps more than the three we expect, may be necessary to stabilize the unemployment rate from below and prevent overheating next year," he added.
Egelhof agreed that the "dose of accommodation" remark was "the most striking feature" of Warsh's abbreviated news conference.
Markets are pricing in the likelihood that the Warsh Fed removes a few more "doses" before it is finished. Futures are implying a fed funds rate of 4.635% near the end of 2027, which would argue for three or four more hikes ahead.
If that's the case, the Fed at the very least will undo many of the FOMC rate cuts approved under Warsh's predecessor, Jerome Powell, who now sits on the committee as a governor.
The "dose of accommodation" remarks "seemingly helped to underscore this hawkish tone, implying that [the] committee no longer views policy as modestly restrictive," said Jack Janasiewicz, portfolio manager and lead portfolio strategist at Natixis Investment Managers Solutions.
"We remain unconvinced that this is the start of an aggressive new tightening cycle," he said. "Rather, we see this as a removal of the insurance cuts the Fed delivered in the fall of 2025."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/18/three-words-from-kevin-warsh-have-wall-street-wondering-how-far-the-fed-will-go-with-rate-hikes.html",
    publishedAt: "2026-09-18T18:28:31+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
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
