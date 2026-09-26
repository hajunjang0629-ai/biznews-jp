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
    id: "apple-faces-5-7-billion-patent-infringem-4273a6aa",
    title: "Apple faces $5.7 billion patent infringement verdict over iPhone and Apple Watch haptics",
    titleJa: "Apple faces $5.7 billion patent infringement verdict over iPhone and Apple Watch haptics",
    summaryJa: "A federal jury awarded Taction Technology more than $5.7 billion after finding Apple infringed claims from two haptics patents. Apple plans to appeal.",
    bodyOriginal: `A federal jury in San Diego awarded Taction Technology more than $5.7 billion in damages Friday after finding that Apple infringed claims from two haptics patents.
Taction sued Apple in 2021 in the U.S. District Court for the Southern District of California. The company alleged that Apple was improperly "capitalizing on Taction's innovation and success" by selling devices that infringed on its vibration technology, according to the complaint. Apple initially won dismissal in 2023, and the Federal Circuit later revived the case.
"While we thank the jury for their consideration, we strongly disagree with today's verdict and the damages awarded, which are entirely unsupported by the facts," Apple told CNBC in a statement. "Apple's Taptic Engine is fundamentally different from Taction's technology, which Taction's own testing of Apple's products confirmed during trial. Apple does not use Taction's technology, and we will appeal."
Taction did not immediately respond to CNBC's request for comment.
The lawsuit centered around U.S. Patent Nos. 10,659,885 and 10,820,117, which both involve vibration-based, tactile transducer technology that helps users feel a device responding to their input. Taction argued that Apple's "Taptic Engine," which is embedded in its Apple Watches and iPhones, uses its inventions without proper license or authority.
The jury trial began Sept. 14, and the seven jurors deliberated for two days after proceedings concluded. They returned at 1:15 p.m. PT on Friday and delivered the verdict in favor of Taction.
The jury did not find Apple's infringement willful.
WATCH: Apple’s three-part iPhone rollout complicates the demand read`,
    bodyJa: `A federal jury in San Diego awarded Taction Technology more than $5.7 billion in damages Friday after finding that Apple infringed claims from two haptics patents.
Taction sued Apple in 2021 in the U.S. District Court for the Southern District of California. The company alleged that Apple was improperly "capitalizing on Taction's innovation and success" by selling devices that infringed on its vibration technology, according to the complaint. Apple initially won dismissal in 2023, and the Federal Circuit later revived the case.
"While we thank the jury for their consideration, we strongly disagree with today's verdict and the damages awarded, which are entirely unsupported by the facts," Apple told CNBC in a statement. "Apple's Taptic Engine is fundamentally different from Taction's technology, which Taction's own testing of Apple's products confirmed during trial. Apple does not use Taction's technology, and we will appeal."
Taction did not immediately respond to CNBC's request for comment.
The lawsuit centered around U.S. Patent Nos. 10,659,885 and 10,820,117, which both involve vibration-based, tactile transducer technology that helps users feel a device responding to their input. Taction argued that Apple's "Taptic Engine," which is embedded in its Apple Watches and iPhones, uses its inventions without proper license or authority.
The jury trial began Sept. 14, and the seven jurors deliberated for two days after proceedings concluded. They returned at 1:15 p.m. PT on Friday and delivered the verdict in favor of Taction.
The jury did not find Apple's infringement willful.
WATCH: Apple’s three-part iPhone rollout complicates the demand read`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/26/apple-taction-technology-patent-infringement-verdict.html",
    publishedAt: "2026-09-26T16:08:24+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "tax-free-bond-yields-are-in-a-sweet-spot-27b72f47",
    title: "Tax-free bond yields are in a sweet spot. Get in before it’s too late.",
    titleJa: "Tax-free bond yields are in a sweet spot. Get in before it’s too late.",
    summaryJa: "Yields on municipal bonds — adjusted for taxable-equivalent comparisons — have widened dramatically over those of corporate bonds over the past two months.",
    bodyOriginal: `Yields on municipal bonds — adjusted for taxable-equivalent comparisons — have widened dramatically over those of corporate bonds over the past two months.`,
    bodyJa: `Yields on municipal bonds — adjusted for taxable-equivalent comparisons — have widened dramatically over those of corporate bonds over the past two months.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/tax-free-bond-yields-are-in-a-sweet-spot-get-in-before-its-too-late-94b8adac?mod=mw_rss_topstories",
    publishedAt: "2026-09-26T15:48:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-30557006",
    readTime: 2,
  },
  {
    id: "millions-will-lose-medicaid-once-new-wor-84359e21",
    title: "Millions will lose Medicaid once new work rules kick in. These groups will be hit the hardest.",
    titleJa: "Millions will lose Medicaid once new work rules kick in. These groups will be hit the hardest.",
    summaryJa: "The changes will cut about $1 trillion from federal Medicaid spending over 10 years.",
    bodyOriginal: `The changes will cut about $1 trillion from federal Medicaid spending over 10 years.`,
    bodyJa: `The changes will cut about $1 trillion from federal Medicaid spending over 10 years.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/millions-will-lose-medicaid-once-new-work-rules-kick-in-these-groups-will-be-hit-the-hardest-507694d3?mod=mw_rss_topstories",
    publishedAt: "2026-09-26T15:30:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-25328252",
    readTime: 2,
  },
  {
    id: "trump-rejects-iran-s-conditional-ceasefi-39063776",
    title: "Trump rejects Iran's conditional ceasefire proposal, WSJ reports, as Saudi coalition intercepts projectiles",
    titleJa: "Trump rejects Iran's conditional ceasefire proposal, WSJ reports, as Saudi coalition intercepts projectiles",
    summaryJa: "Trump expects renewed U.S. bombing of Iran after the midterm elections, The Wall Street Journal reports, as Saudi-backed forces intercept projectiles.",
    bodyOriginal: `President Donald Trump has rejected Iran's conditional proposal for reopening the Strait of Hormuz, telling aides he expects to resume bombing the country after November's midterm elections, The Wall Street Journal reported Saturday, quoting unnamed U.S. officials.
In a gaggle with reporters later on Saturday, Trump confirmed he had rejected Iran's latest offer: "They made a proposal but I rejected it."
Meanwhile, Yemen's Saudi-led coalition forces said they intercepted projectiles fired by Iran-backed Houthi rebels.
Iranian Foreign Minister Abbas Araghchi on Friday proposed reopening the strategically vital strait and resuming nuclear talks with the U.S. within seven days if the Trump administration accepts its conditions.
"If certain conditions are met, the Strait of Hormuz will be open at the end of seven days, and talks will be restarted," Araghchi told reporters on the sidelines of the United Nations General Assembly in New York.
Tehran's conditions include a halt to what it calls U.S. "acts of aggression," an end to the naval blockade and economic warfare, and the release of Iranian assets, Iranian foreign ministry spokesman Esmaeil Baghaei said this week.
Trump said earlier this month that he expects the war, which began on Feb. 28 with U.S. and Israeli airstrikes on Iran, to end shortly after the midterms and for oil prices to fall afterward.
But privately, Trump is skeptical Iran would meet his demands and has told his staff that he sees a renewed bombing campaign as likely, the WSJ quoted officials as saying.
CNBC could not immediately confirm the report.
The Journal quoted a U.S. official as saying Washington and Tehran were still negotiating through mediators, including over U.S. demands intended to prevent Iran from developing a nuclear weapon.
'Intercepted and destroyed'
Though direct fighting between U.S. and Iranian forces has been greatly reduced in recent weeks, Iran-backed Houthi rebels in Yemen have stepped up their attacks on their neighbor and U.S. ally Saudi Arabia.
The Saudi-backed Coalition to Support Legitimacy in Yemen "intercepted and destroyed" two drones launched by Houthi militia towards the Saudi capital Riyadh, and two ballistic missiles aimed at the Khamis Mushait region near the city of Abha in the country's southwest, Colonel Turki Al-Maliki, the coalition's official spokesman, said in a series of posts on X.
The Houthis said last Saturday that they had attacked "sensitive" sites in Riyadh shortly after flames and smoke were seen near the city's main airport. Saudi Arabia said earlier this month that its air defenses destroyed a Houthi drone headed for the holy city of Mecca, a claim the group denied.
The war has severely restricted energy shipments out of the Middle East, sending oil prices soaring and raising concerns about accelerating inflation globally.
But crude prices posted a sharp drop for the week as Tehran and Washington held discussions on the sidelines of the U.N. General Assembly.
West Texas Intermediate dropped 2.3% to close at $92.41 per barrel. Brent, the international benchmark, declined 2.1% to settle at $104.32. U.S. crude finished the week 7.9% lower while Brent was flat.
WTI is up nearly 61% year to date, while Brent crude is more than 71% higher over the same period.`,
    bodyJa: `President Donald Trump has rejected Iran's conditional proposal for reopening the Strait of Hormuz, telling aides he expects to resume bombing the country after November's midterm elections, The Wall Street Journal reported Saturday, quoting unnamed U.S. officials.
In a gaggle with reporters later on Saturday, Trump confirmed he had rejected Iran's latest offer: "They made a proposal but I rejected it."
Meanwhile, Yemen's Saudi-led coalition forces said they intercepted projectiles fired by Iran-backed Houthi rebels.
Iranian Foreign Minister Abbas Araghchi on Friday proposed reopening the strategically vital strait and resuming nuclear talks with the U.S. within seven days if the Trump administration accepts its conditions.
"If certain conditions are met, the Strait of Hormuz will be open at the end of seven days, and talks will be restarted," Araghchi told reporters on the sidelines of the United Nations General Assembly in New York.
Tehran's conditions include a halt to what it calls U.S. "acts of aggression," an end to the naval blockade and economic warfare, and the release of Iranian assets, Iranian foreign ministry spokesman Esmaeil Baghaei said this week.
Trump said earlier this month that he expects the war, which began on Feb. 28 with U.S. and Israeli airstrikes on Iran, to end shortly after the midterms and for oil prices to fall afterward.
But privately, Trump is skeptical Iran would meet his demands and has told his staff that he sees a renewed bombing campaign as likely, the WSJ quoted officials as saying.
CNBC could not immediately confirm the report.
The Journal quoted a U.S. official as saying Washington and Tehran were still negotiating through mediators, including over U.S. demands intended to prevent Iran from developing a nuclear weapon.
'Intercepted and destroyed'
Though direct fighting between U.S. and Iranian forces has been greatly reduced in recent weeks, Iran-backed Houthi rebels in Yemen have stepped up their attacks on their neighbor and U.S. ally Saudi Arabia.
The Saudi-backed Coalition to Support Legitimacy in Yemen "intercepted and destroyed" two drones launched by Houthi militia towards the Saudi capital Riyadh, and two ballistic missiles aimed at the Khamis Mushait region near the city of Abha in the country's southwest, Colonel Turki Al-Maliki, the coalition's official spokesman, said in a series of posts on X.
The Houthis said last Saturday that they had attacked "sensitive" sites in Riyadh shortly after flames and smoke were seen near the city's main airport. Saudi Arabia said earlier this month that its air defenses destroyed a Houthi drone headed for the holy city of Mecca, a claim the group denied.
The war has severely restricted energy shipments out of the Middle East, sending oil prices soaring and raising concerns about accelerating inflation globally.
But crude prices posted a sharp drop for the week as Tehran and Washington held discussions on the sidelines of the U.N. General Assembly.
West Texas Intermediate dropped 2.3% to close at $92.41 per barrel. Brent, the international benchmark, declined 2.1% to settle at $104.32. U.S. crude finished the week 7.9% lower while Brent was flat.
WTI is up nearly 61% year to date, while Brent crude is more than 71% higher over the same period.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/26/trump-rejects-irans-conditional-ceasefire-proposal-wsj-reports.html",
    publishedAt: "2026-09-26T15:05:38+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 8,
  },
  {
    id: "do-this-one-thing-to-help-prevent-your-p-70e16bc3",
    title: "Do this one thing to help prevent your parents from being scammed",
    titleJa: "Do this one thing to help prevent your parents from being scammed",
    summaryJa: "“I felt like I was talking to a robot,” said one adviser about a client who was ensnared in a romance scam.",
    bodyOriginal: `“I felt like I was talking to a robot,” said one adviser about a client who was ensnared in a romance scam.`,
    bodyJa: `“I felt like I was talking to a robot,” said one adviser about a client who was ensnared in a romance scam.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/do-this-one-thing-to-help-prevent-your-parents-from-being-scammed-27a0ca4b?mod=mw_rss_topstories",
    publishedAt: "2026-09-26T15:04:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-93049114",
    readTime: 2,
  },
  {
    id: "the-10-year-treasury-yield-is-at-its-hig-34ada08d",
    title: "The 10-year Treasury yield is at its highest in nearly two decades. How we got here",
    titleJa: "The 10-year Treasury yield is at its highest in nearly two decades. How we got here",
    summaryJa: "The benchmark yield has climbed to a 19-year high, fueled by sticky inflation, heavy bond issuance and an AI-fueled investment boom.",
    bodyOriginal: `Investors were rattled this week as the benchmark 10-year Treasury yield soared to its highest level since 2007, but sticky inflation is just one of the factors behind this latest surge.
The key 10-year Treasury yield, which influences mortgages, leapt to 5.23% on Friday for its highest level since 2007. It was the latest leg higher for the benchmark yield, which earlier this month was trading just below 4.8%. Bond yields and prices move inversely to one another.
The 10-year yield's rapid climb above 5% shows how quickly investors' expectations have shifted toward additional tightening from the Federal Reserve in light of stubborn inflation. Fed funds futures trading shows a 64% likelihood of a rate hike in October, according to the CME FedWatch tool.
Indeed, the University of Michigan's consumer sentiment index showed that year-ahead inflation expectations leapt to 4.6% in September, rising from 4% in August and marking the highest reading since June.
When it comes to the runup in yields, stubborn inflation and the market's growing anticipation for more rate hikes only tell part of the story, according to Thierry Wizman, global FX and rates strategist at Macquarie Group.
"I think this year it has more to do with the bond issuance than the inflation story," he told CNBC.
Wizman said yields at these levels are not themselves unusual, particularly because they are not being accompanied by extreme inflation expectations or an aggressively tightening Fed.
"We don't have a Federal Reserve that's tightening aggressively, so a lot of things look pretty normal. The thing that's abnormal is that we're in the midst of a very strong investment cycle," he said.
Heavy bond issuance
The federal government is issuing debt to finance a large deficit, while companies are borrowing heavily to fund artificial intelligence infrastructure.
Wizman said it is that combination that has increased bond supply enough to put upward pressure on yields.
The AI spending boom is adding another source of bond supply to compete with Treasuries.
Vanguard estimates that Alphabet, Amazon, Meta Platforms, Microsoft and Oracle issued about $132 billion of debt through July, up sharply from the roughly $35 billion annual average between 2020 and 2024. Broader AI-related debt issuance could reach $300 billion to $570 billion this year as companies across the data-center, semiconductor and utility ecosystem borrow to finance the buildout.
At the same time, higher yields can weigh down stocks by raising borrowing costs for companies and making bonds seem more attractive to income-seeking investors.
Wizman said the capital-spending plans of hyperscalers and their suppliers are likely to keep bond issuance elevated through this year and into next year.
"So these yields could go higher," he said.`,
    bodyJa: `Investors were rattled this week as the benchmark 10-year Treasury yield soared to its highest level since 2007, but sticky inflation is just one of the factors behind this latest surge.
The key 10-year Treasury yield, which influences mortgages, leapt to 5.23% on Friday for its highest level since 2007. It was the latest leg higher for the benchmark yield, which earlier this month was trading just below 4.8%. Bond yields and prices move inversely to one another.
The 10-year yield's rapid climb above 5% shows how quickly investors' expectations have shifted toward additional tightening from the Federal Reserve in light of stubborn inflation. Fed funds futures trading shows a 64% likelihood of a rate hike in October, according to the CME FedWatch tool.
Indeed, the University of Michigan's consumer sentiment index showed that year-ahead inflation expectations leapt to 4.6% in September, rising from 4% in August and marking the highest reading since June.
When it comes to the runup in yields, stubborn inflation and the market's growing anticipation for more rate hikes only tell part of the story, according to Thierry Wizman, global FX and rates strategist at Macquarie Group.
"I think this year it has more to do with the bond issuance than the inflation story," he told CNBC.
Wizman said yields at these levels are not themselves unusual, particularly because they are not being accompanied by extreme inflation expectations or an aggressively tightening Fed.
"We don't have a Federal Reserve that's tightening aggressively, so a lot of things look pretty normal. The thing that's abnormal is that we're in the midst of a very strong investment cycle," he said.
Heavy bond issuance
The federal government is issuing debt to finance a large deficit, while companies are borrowing heavily to fund artificial intelligence infrastructure.
Wizman said it is that combination that has increased bond supply enough to put upward pressure on yields.
The AI spending boom is adding another source of bond supply to compete with Treasuries.
Vanguard estimates that Alphabet, Amazon, Meta Platforms, Microsoft and Oracle issued about $132 billion of debt through July, up sharply from the roughly $35 billion annual average between 2020 and 2024. Broader AI-related debt issuance could reach $300 billion to $570 billion this year as companies across the data-center, semiconductor and utility ecosystem borrow to finance the buildout.
At the same time, higher yields can weigh down stocks by raising borrowing costs for companies and making bonds seem more attractive to income-seeking investors.
Wizman said the capital-spending plans of hyperscalers and their suppliers are likely to keep bond issuance elevated through this year and into next year.
"So these yields could go higher," he said.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/26/10-year-treasury-yield-is-at-its-highest-in-19-years-how-we-got-here.html",
    publishedAt: "2026-09-26T13:30:06+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 7,
  },
  {
    id: "huge-crowds-greet-pope-in-paris-for-open-a0297857",
    title: "Huge crowds greet Pope in Paris for open-air Mass",
    titleJa: "Huge crowds greet Pope in Paris for open-air Mass",
    summaryJa: "More than half a million people are expected to attend the event in the heart of the French capital.",
    bodyOriginal: `Huge crowds greet Pope in Paris for open-air Mass
- Published
Hundreds of thousands of people have greeted Pope Leo XIV in the centre of Paris for a giant open-air Mass.
Crowds cheered as the pontiff moved down the Champs-Élysées Avenue beneath the Arc de Triomphe, waving to crowds from his popemobile.
The head of the Catholic Church blessed several babies as he stopped at different stages along the avenue as chants of "Leo, Leo" rang out.
More than half a million people are expected to attend the event in the heart of the French capital on Saturday and a special altar has been built on the Place de la Concorde for the ceremony.
French President Emmanuel Macron, who met Leo for an hour of talks on Friday, will not be at any of the Pope's Masses during his four-day visit to France, largely to avoid breaching France's strict separation of state and religion.
But the Champs-Élysées Mass will be attended by Macron's wife Brigitte and Prime Minister Sébastien Lecornu.
Several candidates for next year's presidential election are also expected to attend.
Marine Le Pen of the hard-right National Rally party and conservative Bruno Retailleau were both pictured at the Place de la Concorde ahead of the event, while centrists Edouard Philippe and Gabriel Attal are also due to be there.
Mayor of Le Havre and former French Prime Minister Edouard Philippe and former Prime Minister Francois Fillon were both also seen at the Place de la Concorde.
Earlier on Saturday, the Pope met migrants as he visited the Maison Bakhita centre, an association supporting refugees, and praised the organisation for inviting "us to see those who are invisible".
During the visit Leo said it was "possible to encounter one another and to live together in dignity and peace".
He also stressed the "the fundamental role of women in building a civilisation of love".
The Pope also issued a warning about the dangers of artificial intelligence (AI) at the start of his visit to France on Friday.
Leo cautioned against "losing our humanity amid a paradise of machines" in wide-ranging remarks to Church and state officials at the Élysée Palace.
Large crowds are expected throughout the pontiff's trip, which the Church believes reflects a growing spirituality among the French and other Europeans.
On Sunday, 150,000 have signed up to attend mass in the Pyrenean sanctuary of Lourdes.
The Pope will be in Metz, in northeast France, on Monday where he will pay tribute to Robert Schuman (1886-1963), a founding father of the European Union and a fervent Catholic who is today a candidate for beatification.
Born in Chicago in 1955, Pope Leo XIV was originally called Robert Prevost – a French name.
His paternal grandmother was born in Le Havre in Normandy in 1894. When she married in the US many years later, she and her Italian husband took the name Prevost, which had been her mother's maiden name.`,
    bodyJa: `Huge crowds greet Pope in Paris for open-air Mass
- Published
Hundreds of thousands of people have greeted Pope Leo XIV in the centre of Paris for a giant open-air Mass.
Crowds cheered as the pontiff moved down the Champs-Élysées Avenue beneath the Arc de Triomphe, waving to crowds from his popemobile.
The head of the Catholic Church blessed several babies as he stopped at different stages along the avenue as chants of "Leo, Leo" rang out.
More than half a million people are expected to attend the event in the heart of the French capital on Saturday and a special altar has been built on the Place de la Concorde for the ceremony.
French President Emmanuel Macron, who met Leo for an hour of talks on Friday, will not be at any of the Pope's Masses during his four-day visit to France, largely to avoid breaching France's strict separation of state and religion.
But the Champs-Élysées Mass will be attended by Macron's wife Brigitte and Prime Minister Sébastien Lecornu.
Several candidates for next year's presidential election are also expected to attend.
Marine Le Pen of the hard-right National Rally party and conservative Bruno Retailleau were both pictured at the Place de la Concorde ahead of the event, while centrists Edouard Philippe and Gabriel Attal are also due to be there.
Mayor of Le Havre and former French Prime Minister Edouard Philippe and former Prime Minister Francois Fillon were both also seen at the Place de la Concorde.
Earlier on Saturday, the Pope met migrants as he visited the Maison Bakhita centre, an association supporting refugees, and praised the organisation for inviting "us to see those who are invisible".
During the visit Leo said it was "possible to encounter one another and to live together in dignity and peace".
He also stressed the "the fundamental role of women in building a civilisation of love".
The Pope also issued a warning about the dangers of artificial intelligence (AI) at the start of his visit to France on Friday.
Leo cautioned against "losing our humanity amid a paradise of machines" in wide-ranging remarks to Church and state officials at the Élysée Palace.
Large crowds are expected throughout the pontiff's trip, which the Church believes reflects a growing spirituality among the French and other Europeans.
On Sunday, 150,000 have signed up to attend mass in the Pyrenean sanctuary of Lourdes.
The Pope will be in Metz, in northeast France, on Monday where he will pay tribute to Robert Schuman (1886-1963), a founding father of the European Union and a fervent Catholic who is today a candidate for beatification.
Born in Chicago in 1955, Pope Leo XIV was originally called Robert Prevost – a French name.
His paternal grandmother was born in Le Havre in Normandy in 1894. When she married in the US many years later, she and her Italian husband took the name Prevost, which had been her mother's maiden name.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cm4gjjwvvlzro?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-26T13:23:59+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/217d/live/4be6b6f0-b9b0-11f1-a430-4d16ee157c41.jpg",
    readTime: 7,
  },
  {
    id: "meta-turned-muse-into-a-viral-hit-now-co-ed0d20c9",
    title: "Meta turned Muse into a viral hit. Now comes the hard part.",
    titleJa: "Meta turned Muse into a viral hit. Now comes the hard part.",
    summaryJa: "Meta is quickly racking up downloads for its Muse AI assistant, but the next step for Mark Zuckerberg is getting users to make the agent part of their everyday routines.",
    bodyOriginal: `Meta is quickly racking up downloads for its Muse AI assistant, but the next step for Mark Zuckerberg is getting users to make the agent part of their everyday routines.`,
    bodyJa: `Meta is quickly racking up downloads for its Muse AI assistant, but the next step for Mark Zuckerberg is getting users to make the agent part of their everyday routines.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/meta-turned-muse-into-a-viral-hit-now-comes-the-hard-part-fb3177a8?mod=mw_rss_topstories",
    publishedAt: "2026-09-26T11:00:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-77085715",
    readTime: 2,
  },
  {
    id: "at-least-two-dead-after-explosion-destro-600dfd6f",
    title: "At least two dead after explosion destroys building close to Acropolis in Athens",
    titleJa: "At least two dead after explosion destroys building close to Acropolis in Athens",
    summaryJa: "Local media report the property included a holiday rental, with US tourists and a UK national among the missing.",
    bodyOriginal: `At least two dead after explosion destroys building close to Acropolis in Athens
- Published
At least two people have died and four more are missing after an explosion destroyed a building housing a holiday rental property in the historic centre of Athens.
The blast happened in the Plaka area of the Greek capital, a neighbourhood close to tourist sites such as the Acropolis, with local media reporting the building housed a holiday rental.
An American man and woman have died, with two more US tourists missing, AFP news agency reported citing local officials. A Greek national and UK national who lived in the building are also said to be missing.
Pictures from the scene showed emergency service workers searching through rubble, with a gas leak the suspected cause of the blast.
The body of a woman was found on Saturday morning, with a Greek fire official later telling reporters the body of a man had also been found.
The tourists were confirmed to be missing when they did not arrive for their flight at Athens airport, Reuters news agency reported citing local police.
Athens Mayor Haris Doukas said: "We are talking about an incredible disaster."
The three-storey building completely collapsed due to the force of the blast, with neighbouring buildings damaged and debris scattered across the road.
Local media reported people were injured by material scattered across nearby streets and some buildings needed to be evacuated.
Excavators and thermal imaging cameras have been used at the scene to search for survivors.
The explosion happened on a small road situated between two of Athens' most visited sites - the Acropolis and the Temple of Olympian Zeus.
BBC News has contacted the UK Foreign Office.`,
    bodyJa: `At least two dead after explosion destroys building close to Acropolis in Athens
- Published
At least two people have died and four more are missing after an explosion destroyed a building housing a holiday rental property in the historic centre of Athens.
The blast happened in the Plaka area of the Greek capital, a neighbourhood close to tourist sites such as the Acropolis, with local media reporting the building housed a holiday rental.
An American man and woman have died, with two more US tourists missing, AFP news agency reported citing local officials. A Greek national and UK national who lived in the building are also said to be missing.
Pictures from the scene showed emergency service workers searching through rubble, with a gas leak the suspected cause of the blast.
The body of a woman was found on Saturday morning, with a Greek fire official later telling reporters the body of a man had also been found.
The tourists were confirmed to be missing when they did not arrive for their flight at Athens airport, Reuters news agency reported citing local police.
Athens Mayor Haris Doukas said: "We are talking about an incredible disaster."
The three-storey building completely collapsed due to the force of the blast, with neighbouring buildings damaged and debris scattered across the road.
Local media reported people were injured by material scattered across nearby streets and some buildings needed to be evacuated.
Excavators and thermal imaging cameras have been used at the scene to search for survivors.
The explosion happened on a small road situated between two of Athens' most visited sites - the Acropolis and the Temple of Olympian Zeus.
BBC News has contacted the UK Foreign Office.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c6p3kk78l4l1o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-26T10:18:51+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/7057/live/b65e6fe0-b984-11f1-a8ed-73305fe15fa1.jpg",
    readTime: 4,
  },
  {
    id: "could-an-iced-coffee-freeze-you-out-of-t-dd075903",
    title: "Could an iced coffee freeze you out of the job market?",
    titleJa: "Could an iced coffee freeze you out of the job market?",
    summaryJa: "Employees and recruiters weigh into the online debate around interview etiquette.",
    bodyOriginal: `Could an iced coffee freeze you out of the job market?
- Published
Would you bring an iced coffee to a job interview?
The question on the internet's lips this week started life, as many do, in a TikTok video.
"Don't waltz into your interview all casual with an iced coffee, it just looks like you didn't have time to finish your coffee beforehand," said US recruiter Caitlin Wehniainen.
It's what her Gen Z job candidates are doing, she said, warning it makes it look like the interview is "just a stop on your list of errands for the day".
The post has started what Wehniainen calls the Great Iced Coffee Debate of 2026.
Some believe turning up with an iced matcha latte in hand is a cardinal sin. They say it's unprofessional, too informal, and a distraction.
Others feel this is an overreaction - distracting from how difficult it is to secure a job - or even just get an interview in the first place.
In a subsequent LinkedIn post, Wehniainen says she "was never saying that bringing coffee makes someone a bad candidate.
"My point was simply about avoiding distractions."
Hanad, 28, works for an energy supplier in London. He likes iced coffee but wouldn't bring one to an interview.
"A job interview is all about first impressions," he says. "Anything can deter the employer from employing you.
"Iced coffee is something a lot of teens drink… it would look immature and too informal."
He would never bring along an energy drink for the same reasons. But he says water or a hot coffee would be okay.
His colleague Tsvetina, 24, thinks a potential employee shouldn't be judged by what they bring to the interview, nor their dress code.
"I think we should be moving away from these traditional corporate stigmas. What matters is what the person is actually communicating during the interview."
Aisha, 28, says she would take along an iced coffee. "I think it shows that I have come early enough to get iced coffee."
She wouldn't bring a fizzy drink, however.
In general, she thinks a lot of employers like to see personality in a candidate. "It makes you stand out from other people who are coming [applying] for the job."
Katy, 25, a personal assistant in events, says she personally wouldn't turn up to a job interview with an iced coffee.
But she sees the controversy around Wehniainen's post as "a bit sexist, because it's usually girls who drink iced coffee".
"If it was a hot coffee, which is more masculine, there wouldn't be a discourse about that."
Young people trying to land their first job are facing multiple challenges.
The number of graduate vacancies in the UK has almost halved in the past year, as employers cut entry-level roles in favour of AI and battle rising costs.
Around one in eight people aged 16-24 are not in education, employment or training - so called Neets.
Young workers in the US are also struggling with a tight jobs market, external as hiring slows.
'A little bit flippant'
Lucy Cooper is the founder of Spark, a design and branding recruitment company in London.
She says her industry - marketing - is really tough right now, and she doesn't know of any Gen Z candidates who would risk turning up to an interview with an iced coffee.
You could "seem too relaxed and a little bit flippant, like you're not taking it seriously enough, or you are interviewing the employer rather than the other way round".
"I think people at junior level are very conscious about not doing anything that could jeopardise their chances," she says.
She adds that it would be fine to accept a coffee offered by the employer, however, or drink one on a video interview.
Dan Craddock, director at Hays, says employers shouldn't rely on "snap judgements".
"It's important not to read too much into a single item a candidate brings to an interview.
"Whether that's an iced coffee, a bottle of water or a notebook, employers are ultimately assessing the skills, experience and behaviours that will make someone successful in the role."
Chris Mason, co-founder of Intelligent People - a specialist recruitment agency for the tech industry, says focusing on ice coffees alone "does seem to be an overreaction on the US recruiter's part".
He advises candidates to "try to do everything possible to project the right image and attitude".
He warns bringing snacks or specialist drinks may undermine the impression candidates will want to give - that they're "serious and focused on the interview".
He says the main issue they see with some younger candidates is a lack of preparation, not being punctual, and not researching the role, organisation or interviewer.
- Published4 September
- Published15 July
- Published24 August
- Published25 June`,
    bodyJa: `Could an iced coffee freeze you out of the job market?
- Published
Would you bring an iced coffee to a job interview?
The question on the internet's lips this week started life, as many do, in a TikTok video.
"Don't waltz into your interview all casual with an iced coffee, it just looks like you didn't have time to finish your coffee beforehand," said US recruiter Caitlin Wehniainen.
It's what her Gen Z job candidates are doing, she said, warning it makes it look like the interview is "just a stop on your list of errands for the day".
The post has started what Wehniainen calls the Great Iced Coffee Debate of 2026.
Some believe turning up with an iced matcha latte in hand is a cardinal sin. They say it's unprofessional, too informal, and a distraction.
Others feel this is an overreaction - distracting from how difficult it is to secure a job - or even just get an interview in the first place.
In a subsequent LinkedIn post, Wehniainen says she "was never saying that bringing coffee makes someone a bad candidate.
"My point was simply about avoiding distractions."
Hanad, 28, works for an energy supplier in London. He likes iced coffee but wouldn't bring one to an interview.
"A job interview is all about first impressions," he says. "Anything can deter the employer from employing you.
"Iced coffee is something a lot of teens drink… it would look immature and too informal."
He would never bring along an energy drink for the same reasons. But he says water or a hot coffee would be okay.
His colleague Tsvetina, 24, thinks a potential employee shouldn't be judged by what they bring to the interview, nor their dress code.
"I think we should be moving away from these traditional corporate stigmas. What matters is what the person is actually communicating during the interview."
Aisha, 28, says she would take along an iced coffee. "I think it shows that I have come early enough to get iced coffee."
She wouldn't bring a fizzy drink, however.
In general, she thinks a lot of employers like to see personality in a candidate. "It makes you stand out from other people who are coming [applying] for the job."
Katy, 25, a personal assistant in events, says she personally wouldn't turn up to a job interview with an iced coffee.
But she sees the controversy around Wehniainen's post as "a bit sexist, because it's usually girls who drink iced coffee".
"If it was a hot coffee, which is more masculine, there wouldn't be a discourse about that."
Young people trying to land their first job are facing multiple challenges.
The number of graduate vacancies in the UK has almost halved in the past year, as employers cut entry-level roles in favour of AI and battle rising costs.
Around one in eight people aged 16-24 are not in education, employment or training - so called Neets.
Young workers in the US are also struggling with a tight jobs market, external as hiring slows.
'A little bit flippant'
Lucy Cooper is the founder of Spark, a design and branding recruitment company in London.
She says her industry - marketing - is really tough right now, and she doesn't know of any Gen Z candidates who would risk turning up to an interview with an iced coffee.
You could "seem too relaxed and a little bit flippant, like you're not taking it seriously enough, or you are interviewing the employer rather than the other way round".
"I think people at junior level are very conscious about not doing anything that could jeopardise their chances," she says.
She adds that it would be fine to accept a coffee offered by the employer, however, or drink one on a video interview.
Dan Craddock, director at Hays, says employers shouldn't rely on "snap judgements".
"It's important not to read too much into a single item a candidate brings to an interview.
"Whether that's an iced coffee, a bottle of water or a notebook, employers are ultimately assessing the skills, experience and behaviours that will make someone successful in the role."
Chris Mason, co-founder of Intelligent People - a specialist recruitment agency for the tech industry, says focusing on ice coffees alone "does seem to be an overreaction on the US recruiter's part".
He advises candidates to "try to do everything possible to project the right image and attitude".
He warns bringing snacks or specialist drinks may undermine the impression candidates will want to give - that they're "serious and focused on the interview".
He says the main issue they see with some younger candidates is a lack of preparation, not being punctual, and not researching the role, organisation or interviewer.
- Published4 September
- Published15 July
- Published24 August
- Published25 June`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cv62k9p1rz4do?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-26T10:05:36+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/2add/live/03c9d510-b905-11f1-bc1f-3f186ca4140c.png",
    readTime: 10,
  },
  {
    id: "audemars-piguet-says-its-royal-pop-colla-4b95770a",
    title: "Audemars Piguet says its Royal Pop collaboration with Swatch is breaking sales records, despite luxury watch slump and tariffs",
    titleJa: "Audemars Piguet says its Royal Pop collaboration with Swatch is breaking sales records, despite luxury watch slump and tariffs",
    summaryJa: "Swiss luxury watchmaker Audemars Piguet says its sales and engagement are breaking records after its risky, eye-catching Royal Pop collaboration with Swatch.",
    bodyOriginal: `Luxury watchmaker Audemars Piguet says its sales and engagement are breaking records after its risky, eye-catching Royal Pop collaboration with Swatch earlier this year, according to the company's CEO.
Audemars Piguet in May teamed up with Swatch to launch a line of brightly colored timepieces attached to lanyards and priced at $400 apiece. The Royal Pop collaboration set off a frenzy of interest on social media, with Swatch posting a request on Instagram for customers "not to rush to our stores." The furor sparked a debate in the luxury industry about whether Audemars Piguet, whose ultra-rare watches sell for more than $30,000, had cheapened the brand and debased a revered member of the "Holy Trinity" of Swiss watchmakers, which includes Patek Philippe and Vacheron Constantin.
Yet Ilaria Resta, CEO of Audemars Piguet, said sales and interest in the brand have skyrocketed. The launch generated more than 20 billion mentions and conversations on social media, she said. Millions of young consumers were suddenly diving into the workings of mechanical watches and horology. Even Audemars Piguet's top collectors were calling to request their own Royal Pop.
"We've had a record month every month since the launch of the Royal Pop," Resta said. "Our website crashed. We have nonstop visits in our boutiques. Simply by putting the spotlight on an object and a mechanical movement, all of a sudden you discover the world of Audemars Piguet."
The company's success has become a case study for the ailing $50 billion Swiss watch industry and the broader luxury economy. While the ultra-high end of the Swiss watch industry is thriving, business and profits in the broader industry are on the decline.
The number of Swiss watches exported globally has fallen by more than half since 2011, and total sales fell 1.7% last year, according to a report from Morgan Stanley and LuxeConsult. While there are about 450 Swiss watch brands, the top four — Rolex, Patek Philippe, Audemars Piguet and Richard Mille — now account for about half of industry sales and about 76% of profits, the report found.
The top of the market has become so rarified that it's become inaccessible even to wealthy watch fans. Audemars Piguet makes only 53,000 watches a year, compared with more than 1 million produced by Rolex, according to Morgan Stanley. Audemars Piguet's coveted Royal Oak models typically start at $30,000, with the most complicated models selling for over $200,000. Waitlists are long, for those lucky enough to buy them. Preowned APs typically sell for 30% or more above retail price since supply is so scarce.
Resta said that Swiss watch brands that follow the old playbook — relying on their history, older clientele and elitist marketing — face extinction.
"Either you dare or you die," she said.
She calls her new strategy "radical openness." The goal is to open the elite world of Swiss watchmaking to a broader, younger audience. Along with the Royal Pop collection, Audemars Piguet is also rolling out AP Labs – pop-up experiences that immerse visitors in the world of mechanical watchmaking. Visitors can play watch-themed games, learn about movements and complications, see watchmakers at work and even try their hand at fastening tiny watch components.
No watches are sold at AP Labs, Resta said. The purpose is solely education, along with recruiting new watchmakers for an industry that is perpetually short on skilled craftspeople.
"This is a category that is born and fueled by love, passion and understanding," Resta said. "If you do not understand watchmaking, you will never appreciate a mechanical watch. You will always default to the easiest and cheapest way to tell the time. Telling time is the last reason you buy a mechanical watch. You buy it because you understand the mechanical invention behind it, you appreciate the movement, you appreciate the aesthetics and the meaning of an object that is meant to last forever."
As one of the few remaining luxury watchmakers that's still private and family-owned, Audemars Piguet doesn't report revenue or profits. Resta said the company recorded organic sales growth of 10% in 2025, mainly driven by more-complicated, higher-priced watches. She said 2026 "will beat that record even further."
Audemars Piguet is donating all of its proceeds from the Royal Pop collaboration to fund a dedicated initiative to train and educate watchmakers.
Along with its successes, however, Audemars Piguet also faces new industry pressures. The U.S. has imposed a series of tariffs on Swiss goods over the past year, leading to the current tariff rate of up to 12.5%. Expensive Swiss watches have been hit especially hard. Exports of Swiss watches to the U.S. fell 19% in August, despite growing 9% worldwide, according to the Federation of the Swiss Watch Industry.
While wealthy watch buyers can easily afford the extra tax, some are preferring to hold off on purchases or deliveries until the tariff is lifted or lowered, industry analysts say. Prices for luxury watch materials, especially gold, have also skyrocketed, adding to production costs. The Swiss franc has strengthened against many currencies over the past year, especially the U.S. dollar, reducing revenue for Swiss companies that sell abroad.
The combination of tariffs, material prices and currencies have squeezed margins for Swiss watchmakers. Some companies are passing along the higher costs to customers through double-digit price increases. Resta said AP has chosen not to pass along the tariff costs and only impose small price increases to partially offset higher material prices.
"All of these headwinds I manage in a way that is not punishing to our clients," Resta said. "What I'm after is not the yearly profit results. I am lucky enough to be at the helm of a privately owned company that has a very long time horizon. You want to preserve the relationship with the client, but you also want to preserve the right value of the product you offer."
Resta said challenging times are exactly when companies need to innovate most. AP is creating a new state-of-the-art service center in Raleigh, North Carolina, to repair and service watches, even as other watchmakers reduce their footprints.
"I always say, if you change your strategy because you are going through a crisis, it meant you did a lazy job working on your strategy," Resta said. "Strategies should be bulletproof in any crisis."
A bright spot for demand is tech wealth, with many of the new AI millionaires and billionaires starting to collect luxury watches. Executives and founders in Silicon Valley are searching for hobbies and experiences that are decidedly anti-tech, whether it's wilderness hikes and remote flyfishing, or buying classic cars and mechanical watches.
"These are two worlds that theoretically should be opposed," Resta said. "The worlds of analog and digital, the hyperconnected and the disconnected, are blending together."`,
    bodyJa: `Luxury watchmaker Audemars Piguet says its sales and engagement are breaking records after its risky, eye-catching Royal Pop collaboration with Swatch earlier this year, according to the company's CEO.
Audemars Piguet in May teamed up with Swatch to launch a line of brightly colored timepieces attached to lanyards and priced at $400 apiece. The Royal Pop collaboration set off a frenzy of interest on social media, with Swatch posting a request on Instagram for customers "not to rush to our stores." The furor sparked a debate in the luxury industry about whether Audemars Piguet, whose ultra-rare watches sell for more than $30,000, had cheapened the brand and debased a revered member of the "Holy Trinity" of Swiss watchmakers, which includes Patek Philippe and Vacheron Constantin.
Yet Ilaria Resta, CEO of Audemars Piguet, said sales and interest in the brand have skyrocketed. The launch generated more than 20 billion mentions and conversations on social media, she said. Millions of young consumers were suddenly diving into the workings of mechanical watches and horology. Even Audemars Piguet's top collectors were calling to request their own Royal Pop.
"We've had a record month every month since the launch of the Royal Pop," Resta said. "Our website crashed. We have nonstop visits in our boutiques. Simply by putting the spotlight on an object and a mechanical movement, all of a sudden you discover the world of Audemars Piguet."
The company's success has become a case study for the ailing $50 billion Swiss watch industry and the broader luxury economy. While the ultra-high end of the Swiss watch industry is thriving, business and profits in the broader industry are on the decline.
The number of Swiss watches exported globally has fallen by more than half since 2011, and total sales fell 1.7% last year, according to a report from Morgan Stanley and LuxeConsult. While there are about 450 Swiss watch brands, the top four — Rolex, Patek Philippe, Audemars Piguet and Richard Mille — now account for about half of industry sales and about 76% of profits, the report found.
The top of the market has become so rarified that it's become inaccessible even to wealthy watch fans. Audemars Piguet makes only 53,000 watches a year, compared with more than 1 million produced by Rolex, according to Morgan Stanley. Audemars Piguet's coveted Royal Oak models typically start at $30,000, with the most complicated models selling for over $200,000. Waitlists are long, for those lucky enough to buy them. Preowned APs typically sell for 30% or more above retail price since supply is so scarce.
Resta said that Swiss watch brands that follow the old playbook — relying on their history, older clientele and elitist marketing — face extinction.
"Either you dare or you die," she said.
She calls her new strategy "radical openness." The goal is to open the elite world of Swiss watchmaking to a broader, younger audience. Along with the Royal Pop collection, Audemars Piguet is also rolling out AP Labs – pop-up experiences that immerse visitors in the world of mechanical watchmaking. Visitors can play watch-themed games, learn about movements and complications, see watchmakers at work and even try their hand at fastening tiny watch components.
No watches are sold at AP Labs, Resta said. The purpose is solely education, along with recruiting new watchmakers for an industry that is perpetually short on skilled craftspeople.
"This is a category that is born and fueled by love, passion and understanding," Resta said. "If you do not understand watchmaking, you will never appreciate a mechanical watch. You will always default to the easiest and cheapest way to tell the time. Telling time is the last reason you buy a mechanical watch. You buy it because you understand the mechanical invention behind it, you appreciate the movement, you appreciate the aesthetics and the meaning of an object that is meant to last forever."
As one of the few remaining luxury watchmakers that's still private and family-owned, Audemars Piguet doesn't report revenue or profits. Resta said the company recorded organic sales growth of 10% in 2025, mainly driven by more-complicated, higher-priced watches. She said 2026 "will beat that record even further."
Audemars Piguet is donating all of its proceeds from the Royal Pop collaboration to fund a dedicated initiative to train and educate watchmakers.
Along with its successes, however, Audemars Piguet also faces new industry pressures. The U.S. has imposed a series of tariffs on Swiss goods over the past year, leading to the current tariff rate of up to 12.5%. Expensive Swiss watches have been hit especially hard. Exports of Swiss watches to the U.S. fell 19% in August, despite growing 9% worldwide, according to the Federation of the Swiss Watch Industry.
While wealthy watch buyers can easily afford the extra tax, some are preferring to hold off on purchases or deliveries until the tariff is lifted or lowered, industry analysts say. Prices for luxury watch materials, especially gold, have also skyrocketed, adding to production costs. The Swiss franc has strengthened against many currencies over the past year, especially the U.S. dollar, reducing revenue for Swiss companies that sell abroad.
The combination of tariffs, material prices and currencies have squeezed margins for Swiss watchmakers. Some companies are passing along the higher costs to customers through double-digit price increases. Resta said AP has chosen not to pass along the tariff costs and only impose small price increases to partially offset higher material prices.
"All of these headwinds I manage in a way that is not punishing to our clients," Resta said. "What I'm after is not the yearly profit results. I am lucky enough to be at the helm of a privately owned company that has a very long time horizon. You want to preserve the relationship with the client, but you also want to preserve the right value of the product you offer."
Resta said challenging times are exactly when companies need to innovate most. AP is creating a new state-of-the-art service center in Raleigh, North Carolina, to repair and service watches, even as other watchmakers reduce their footprints.
"I always say, if you change your strategy because you are going through a crisis, it meant you did a lazy job working on your strategy," Resta said. "Strategies should be bulletproof in any crisis."
A bright spot for demand is tech wealth, with many of the new AI millionaires and billionaires starting to collect luxury watches. Executives and founders in Silicon Valley are searching for hobbies and experiences that are decidedly anti-tech, whether it's wilderness hikes and remote flyfishing, or buying classic cars and mechanical watches.
"These are two worlds that theoretically should be opposed," Resta said. "The worlds of analog and digital, the hyperconnected and the disconnected, are blending together."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/26/audemars-piguet-and-royal-pop-defy-luxury-watch-slump-and-tariffs.html",
    publishedAt: "2026-09-26T10:00:01+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "bangkok-roads-submerged-as-flood-disaste-c79291de",
    title: "Bangkok roads submerged as flood disaster declared",
    titleJa: "Bangkok roads submerged as flood disaster declared",
    summaryJa: "An emergency has been declared across the capital of Thailand as days of heavy rain leave the city inundated.",
    bodyOriginal: `Bangkok roads submerged as flood disaster declared
- Published
A flood emergency disaster has been declared across Bangkok after 48 hours of heavy rain left roads in the Thai capital submerged.
People have been urged to stay at home and those living close to the city's network of canals have been advised to move their belongings to upper floors.
Thunderstorms are common in Thailand at this time of year but extreme weather in recent days has inundated Bangkok's drainage system, causing traffic chaos on roads that are already famously congested.
The rain is expected to continue into Sunday, raising fears that more canals could burst their banks.
Somkid Pheuk-ngam, a 67-year-old who lives near a canal just north of central Bangkok, told the AFP news agency: "The water keeps coming in. It's hard to go out now. It's like at my waist level now.
"I cannot go anywhere. I have been closing my shop for two days now."
She said water levels in the city appeared to be worse than in 2011, when Bangkok was impacted by nationwide flooding.
Hundreds were killed across Thailand then in an extreme weather event that lasted for three months. So far, no casualties have been reported in Bangkok from this latest flooding.
The Thai Meteorological Service has forecast more heavy rain through the week, though the area of low pressure causing the downpours of recent days is expected to move towards central Thailand.
All 50 of Bangkok's districts have been declared emergency zones.
Chadchart Sittipunt, the city's governor, said the east of the city had been hardest hit, AFP reported.
He continued: "The rain keeps falling and we are doing our best. We are trying to pump the water out, but the water in canals are full... The risk areas are those who live near canals. Every canal is now filled."
Related topics
- Published4 hours ago
- Published2 days ago`,
    bodyJa: `Bangkok roads submerged as flood disaster declared
- Published
A flood emergency disaster has been declared across Bangkok after 48 hours of heavy rain left roads in the Thai capital submerged.
People have been urged to stay at home and those living close to the city's network of canals have been advised to move their belongings to upper floors.
Thunderstorms are common in Thailand at this time of year but extreme weather in recent days has inundated Bangkok's drainage system, causing traffic chaos on roads that are already famously congested.
The rain is expected to continue into Sunday, raising fears that more canals could burst their banks.
Somkid Pheuk-ngam, a 67-year-old who lives near a canal just north of central Bangkok, told the AFP news agency: "The water keeps coming in. It's hard to go out now. It's like at my waist level now.
"I cannot go anywhere. I have been closing my shop for two days now."
She said water levels in the city appeared to be worse than in 2011, when Bangkok was impacted by nationwide flooding.
Hundreds were killed across Thailand then in an extreme weather event that lasted for three months. So far, no casualties have been reported in Bangkok from this latest flooding.
The Thai Meteorological Service has forecast more heavy rain through the week, though the area of low pressure causing the downpours of recent days is expected to move towards central Thailand.
All 50 of Bangkok's districts have been declared emergency zones.
Chadchart Sittipunt, the city's governor, said the east of the city had been hardest hit, AFP reported.
He continued: "The rain keeps falling and we are doing our best. We are trying to pump the water out, but the water in canals are full... The risk areas are those who live near canals. Every canal is now filled."
Related topics
- Published4 hours ago
- Published2 days ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/ck1wxx8n2x3zo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-26T07:21:30+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/2b19/live/342eea60-b978-11f1-97d9-a9cee45390c5.jpg",
    readTime: 5,
  },
  {
    id: "chinese-ai-models-surge-in-global-popula-567dca23",
    title: "Chinese AI models surge in global popularity — and Washington is worried",
    titleJa: "Chinese AI models surge in global popularity — and Washington is worried",
    summaryJa: "Usage of Chinese AI models by businesses across the globe has increased substantially in 2026.",
    bodyOriginal: `AI was a major focus as U.S. President Donald Trump and Chinese President Xi Jinping met this week.
The most advanced U.S. models lead most benchmarks, but Chinese companies like DeepSeek, Z.ai and Alibaba have released new models with major performance gains in tasks such as coding.
According to usage data shared with CNBC, the global adoption of Chinese models by companies has increased substantially in 2026.
Chinese AI models have gone from a relatively small share of usage to a majority on two major developer platforms that provide gateways for companies to access models from different providers. On OpenRouter, they accounted for 57%-67% of tokens used in the week of Sept. 14, up from 6%-13% in February. On Vercel, their share rose to 55% in August from 11% in January.
OpenRouter's data related to companies in the U.S., Europe and what it defines as the "Global South" — 82 countries across Central and South America, Africa, and Asia. Vercel did not specify its data's geographical breakdown.
Concern is growing in Washington, where two U.S. House Committees are investigating the impact of rising adoption of Chinese models.
The U.S. has sought to preserve its AI lead by restricting Chinese AI companies from buying the most advanced chips through export controls.
Washington is concerned about them accessing Nvidia chips remotely, via overseas data centers, and gaining ground by using "distillation" where new models mimic older, more established ones.
Chinese AI represents "real economic and security risks for the United States," said Daniel Remler, a senior fellow in the technology and national security program at the Center for a New American Security (CNAS), a think tank.
"The ultimate concern is that the integration of Chinese AI models pulls countries into a Chinese technology sphere of influence that hardens into geopolitical alignment," he told CNBC.
Peter Walker, head of insights at OpenRouter, told CNBC, Chinese open source models released this year "can credibly perform in advanced agentic use cases, especially in regards to coding, in a way that was just not true in late 2025."
They're also "incredibly cost-effective compared to most models from American labs," he added.
Earlier this week, OpenAI and Anthropic both announced new, cheaper models. Dianne Penn, head of product management, research and labs at Anthropic, told CNBC that the company was trying to make its models answers "more efficient, so it uses less tokens depending on your effort setting."
Price is key in rising adoption of Chinese models, Harpreet Arora, head of agentic infrastructure at Vercel, told CNBC. "Chinese models are becoming capable enough for more tasks at a much lower cost. Once a model meets the quality bar for the job, that price difference becomes compelling."
But he added that companies still want to use frontier U.S. models for some more complicated tasks.
Businesses in what OpenRouter defines as "Global South" have been the biggest users of Chinese AI models on the company's system in recent weeks.
More than two-thirds — 67% — of the tokens these companies use are on Chinese models. About half the tokens on OpenRouter are used by companies in the U.S.
"Southeast Asia in particular may see significant uptake of Chinese AI models given the close economic and cultural linkages [with China] plus growing digital infrastructure," said CNAS' Remler.
"Anywhere from Lagos to São Paulo to Jakarta where entrepreneurs and governments are looking for cheap, open models, will look first to Chinese AI."`,
    bodyJa: `AI was a major focus as U.S. President Donald Trump and Chinese President Xi Jinping met this week.
The most advanced U.S. models lead most benchmarks, but Chinese companies like DeepSeek, Z.ai and Alibaba have released new models with major performance gains in tasks such as coding.
According to usage data shared with CNBC, the global adoption of Chinese models by companies has increased substantially in 2026.
Chinese AI models have gone from a relatively small share of usage to a majority on two major developer platforms that provide gateways for companies to access models from different providers. On OpenRouter, they accounted for 57%-67% of tokens used in the week of Sept. 14, up from 6%-13% in February. On Vercel, their share rose to 55% in August from 11% in January.
OpenRouter's data related to companies in the U.S., Europe and what it defines as the "Global South" — 82 countries across Central and South America, Africa, and Asia. Vercel did not specify its data's geographical breakdown.
Concern is growing in Washington, where two U.S. House Committees are investigating the impact of rising adoption of Chinese models.
The U.S. has sought to preserve its AI lead by restricting Chinese AI companies from buying the most advanced chips through export controls.
Washington is concerned about them accessing Nvidia chips remotely, via overseas data centers, and gaining ground by using "distillation" where new models mimic older, more established ones.
Chinese AI represents "real economic and security risks for the United States," said Daniel Remler, a senior fellow in the technology and national security program at the Center for a New American Security (CNAS), a think tank.
"The ultimate concern is that the integration of Chinese AI models pulls countries into a Chinese technology sphere of influence that hardens into geopolitical alignment," he told CNBC.
Peter Walker, head of insights at OpenRouter, told CNBC, Chinese open source models released this year "can credibly perform in advanced agentic use cases, especially in regards to coding, in a way that was just not true in late 2025."
They're also "incredibly cost-effective compared to most models from American labs," he added.
Earlier this week, OpenAI and Anthropic both announced new, cheaper models. Dianne Penn, head of product management, research and labs at Anthropic, told CNBC that the company was trying to make its models answers "more efficient, so it uses less tokens depending on your effort setting."
Price is key in rising adoption of Chinese models, Harpreet Arora, head of agentic infrastructure at Vercel, told CNBC. "Chinese models are becoming capable enough for more tasks at a much lower cost. Once a model meets the quality bar for the job, that price difference becomes compelling."
But he added that companies still want to use frontier U.S. models for some more complicated tasks.
Businesses in what OpenRouter defines as "Global South" have been the biggest users of Chinese AI models on the company's system in recent weeks.
More than two-thirds — 67% — of the tokens these companies use are on Chinese models. About half the tokens on OpenRouter are used by companies in the U.S.
"Southeast Asia in particular may see significant uptake of Chinese AI models given the close economic and cultural linkages [with China] plus growing digital infrastructure," said CNAS' Remler.
"Anywhere from Lagos to São Paulo to Jakarta where entrepreneurs and governments are looking for cheap, open models, will look first to Chinese AI."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/26/china-ai-global-adoption.html",
    publishedAt: "2026-09-26T05:00:01+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 9,
  },
  {
    id: "iran-offers-us-deal-to-reopen-strait-of-cce10c63",
    title: "Iran offers US deal to reopen Strait of Hormuz in seven days",
    titleJa: "Iran offers US deal to reopen Strait of Hormuz in seven days",
    summaryJa: "Asked about the Iranian proposal, a US official told the BBC \"constructive discussions\" were taking place through mediators.",
    bodyOriginal: `Iran offers US deal to reopen Strait of Hormuz in seven days
- Published
Iranian Foreign Minister Abbas Araghchi says his country has proposed a deal to the US that would see the Strait of Hormuz reopened within a week.
Araghchi told reporters at the UN in New York that this could be done "if the necessary conditions are met" and said these were contained within the memorandum of understanding (MOU) signed in June.
"The choice now rests with the United States," he said, adding the plan was delivered to the US via Qatar.
Asked about the Iranian offer, a US official told the BBC positive discussions were taking place through mediators, including about nuclear issues. Earlier this week, US President Donald Trump threatened to "annihilate the Islamic Republic".
The US and Israel launched air strikes on Iran on 28 February. Iran responded by attacking Israel and US bases in the Gulf and Arab Gulf allies of the US - as well as blocking the Strait of Hormuz.
Some 20% of the world's oil and liquefied natural gas used to pass through the strait before the war and its closure has caused wild fluctuations of energy prices.
It has also increased pressure on Trump to find a way of ending the conflict - particularly as the US heads to Congressional elections in November.
"If the necessary conditions are met, the strait can be reopened, a normal maritime passage restored within seven days," Araghchi told reporters.
He did not specify what steps Iran wanted the US to take but added that "the actions that the United States should take are not new. They are all already in the MOU".
"I can tell you if there is seriousness in the US side to come to a deal and reopen the Strait of Hormuz, everything is now prepared," he added.
A US official told the BBC that the US was "in a very strong position with control of the Strait of Hormuz, so we are not in a rush".
In an interview with CBS News, the BBC's US partner, Iranian President Masoud Pezeshkian said that the ceasefire process "will begin from the very day they accept it".
"We had previously reached an agreement based on the MOU that was signed in Pakistan... if the United States agrees to proceed in that way, everything will return to the way it was before," he added.
Pezeshkian also said Iran would now allow UN nuclear inspectors into the country.
Rejecting claims that Iran is trying to develop a nuclear weapon, the Iranian president said: "If they wish to come in and have inspections, we can reach accords and agreements vis-à-vis that specific topic within the negotiations."
The MOU between the US and Iran, signed on 18 June, was designed to bring about a ceasefire and at least partly reopen the Strait of Hormuz.
The 14-point agreement said Iran would never have a nuclear weapon. It noted that the US, Iran and their allies would end military operations on "all fronts" and contained provisions including the end of a US naval blockade and sanctions relief.
It also said Iran would "make arrangements using its best efforts for the safe passage of commercial vessels" through the strait and hold talks with Oman over future shipping arrangements.
But it fell apart a short time later when both sides resumed strikes.
Iran has attacked vessels it says have attempted to cross the Strait of Hormuz without authorisation.
The US has attacked Iranian sites in the strait - as well as Iranian tankers off the country's coast. It has also maintained a blockade of Iranian ports, causing huge disruption to the Iranian economy.
Trump since has claimed the US has been successful in getting oil out through the Strait of Hormuz.
Shipping data shows a recent 10-day average of about 18 transits per day, with daily numbers dropping as low as nine vessels on certain days, according to Kpler, a commodities data and analytics firm cited by Reuters.
However, Yemen's Houthis - allied to Iran - have recently intensified attacks aimed at disrupting oil exports from Saudi Arabia via the Red Sea on the other side of the Arabian peninsula.
The group seized large strategically important stretches of the Red Sea coast in a rapid offensive this month, including the port of Mokha, which overlooks the Bab al-Mandab Strait, another chokepoint for global shipping.
The situation has been exacerbated by Houthi attacks on Saudi oil installations. US media has reported that Saudi Crown Prince Mohammed bin Salman has requested military support from Trump.
On Saturday, the Saudi-led coalition in Yemen said it had intercepted two ballistic missiles and drones launched by the Houthis towards Saudi Arabia.
During his speech at the UN General Assembly this week, Trump said he believed an Iran deal, which has so far eluded him, would come right after November's elections.
"Will a deal be made with Iran that lets them rebuild and create a far greater country than it ever was before?" he said.
"Or do I annihilate the Islamic Republic and do it quickly, never giving them a chance to kill and destroy people and countries again? Do I drive them into hell?"
On Friday, Araghchi said Iran did not accept "coercion, threats or intimidation" and added that "peace cannot be built through threats of annihilation".
- Published11 September
- Published2 days ago
- Published18 June`,
    bodyJa: `Iran offers US deal to reopen Strait of Hormuz in seven days
- Published
Iranian Foreign Minister Abbas Araghchi says his country has proposed a deal to the US that would see the Strait of Hormuz reopened within a week.
Araghchi told reporters at the UN in New York that this could be done "if the necessary conditions are met" and said these were contained within the memorandum of understanding (MOU) signed in June.
"The choice now rests with the United States," he said, adding the plan was delivered to the US via Qatar.
Asked about the Iranian offer, a US official told the BBC positive discussions were taking place through mediators, including about nuclear issues. Earlier this week, US President Donald Trump threatened to "annihilate the Islamic Republic".
The US and Israel launched air strikes on Iran on 28 February. Iran responded by attacking Israel and US bases in the Gulf and Arab Gulf allies of the US - as well as blocking the Strait of Hormuz.
Some 20% of the world's oil and liquefied natural gas used to pass through the strait before the war and its closure has caused wild fluctuations of energy prices.
It has also increased pressure on Trump to find a way of ending the conflict - particularly as the US heads to Congressional elections in November.
"If the necessary conditions are met, the strait can be reopened, a normal maritime passage restored within seven days," Araghchi told reporters.
He did not specify what steps Iran wanted the US to take but added that "the actions that the United States should take are not new. They are all already in the MOU".
"I can tell you if there is seriousness in the US side to come to a deal and reopen the Strait of Hormuz, everything is now prepared," he added.
A US official told the BBC that the US was "in a very strong position with control of the Strait of Hormuz, so we are not in a rush".
In an interview with CBS News, the BBC's US partner, Iranian President Masoud Pezeshkian said that the ceasefire process "will begin from the very day they accept it".
"We had previously reached an agreement based on the MOU that was signed in Pakistan... if the United States agrees to proceed in that way, everything will return to the way it was before," he added.
Pezeshkian also said Iran would now allow UN nuclear inspectors into the country.
Rejecting claims that Iran is trying to develop a nuclear weapon, the Iranian president said: "If they wish to come in and have inspections, we can reach accords and agreements vis-à-vis that specific topic within the negotiations."
The MOU between the US and Iran, signed on 18 June, was designed to bring about a ceasefire and at least partly reopen the Strait of Hormuz.
The 14-point agreement said Iran would never have a nuclear weapon. It noted that the US, Iran and their allies would end military operations on "all fronts" and contained provisions including the end of a US naval blockade and sanctions relief.
It also said Iran would "make arrangements using its best efforts for the safe passage of commercial vessels" through the strait and hold talks with Oman over future shipping arrangements.
But it fell apart a short time later when both sides resumed strikes.
Iran has attacked vessels it says have attempted to cross the Strait of Hormuz without authorisation.
The US has attacked Iranian sites in the strait - as well as Iranian tankers off the country's coast. It has also maintained a blockade of Iranian ports, causing huge disruption to the Iranian economy.
Trump since has claimed the US has been successful in getting oil out through the Strait of Hormuz.
Shipping data shows a recent 10-day average of about 18 transits per day, with daily numbers dropping as low as nine vessels on certain days, according to Kpler, a commodities data and analytics firm cited by Reuters.
However, Yemen's Houthis - allied to Iran - have recently intensified attacks aimed at disrupting oil exports from Saudi Arabia via the Red Sea on the other side of the Arabian peninsula.
The group seized large strategically important stretches of the Red Sea coast in a rapid offensive this month, including the port of Mokha, which overlooks the Bab al-Mandab Strait, another chokepoint for global shipping.
The situation has been exacerbated by Houthi attacks on Saudi oil installations. US media has reported that Saudi Crown Prince Mohammed bin Salman has requested military support from Trump.
On Saturday, the Saudi-led coalition in Yemen said it had intercepted two ballistic missiles and drones launched by the Houthis towards Saudi Arabia.
During his speech at the UN General Assembly this week, Trump said he believed an Iran deal, which has so far eluded him, would come right after November's elections.
"Will a deal be made with Iran that lets them rebuild and create a far greater country than it ever was before?" he said.
"Or do I annihilate the Islamic Republic and do it quickly, never giving them a chance to kill and destroy people and countries again? Do I drive them into hell?"
On Friday, Araghchi said Iran did not accept "coercion, threats or intimidation" and added that "peace cannot be built through threats of annihilation".
- Published11 September
- Published2 days ago
- Published18 June`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cqgmrr9ekr7ko?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-26T04:14:30+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/5316/live/c3211510-b930-11f1-902b-af1a6d672907.jpg",
    readTime: 10,
  },
  {
    id: "openai-bots-meddled-with-multiple-us-gov-ed9ef96f",
    title: "OpenAI bots meddled with multiple US government agency sites",
    titleJa: "OpenAI bots meddled with multiple US government agency sites",
    summaryJa: "OpenAI said its bots accessed public data from the US Census and the Securities and Exchange Commission, which regulates US stock markets.",
    bodyOriginal: `OpenAI bots meddled with multiple US government agency sites
- Published
OpenAI has acknowledged that it alerted "dozens" of global institutions that their websites may have been meddled with by its AI bots acting improperly.
AI agents attempted to get information from "governments, universities, public agencies, and other institutions", including the SEC, Census Bureau and Education Department, the company said.
The disclosures come just days after Australian Prime Minister Anthony Albanese announced that OpenAI agents had breached non-public files on the website of its government-run health care scheme, Medicare.
Since August, public fears have grown around the potentially serious, even life-threatening, impacts of AI tools falling outside of human control.
OpenAI said that some of the data was accessed by AI agents, essentially bots that are designed and trained to operate somewhat autonomously, which were working to find "authoritative sources of public information".
But the company noted that some of the bots went beyond that and worked to bypass security measures on websites.
When attempting to get information from the Census Bureau, for instance, AI agents used tools reserved for software developers to access it, the company said.
OpenAI said all of the government data accessed by bots was public.
However, it noted that information that its bots accessed from the SEC, which regulates the US stock market and protects investors, was later published by AI agents on another website. OpenAI says this action was not intended.
In other instances that OpenAI disclosed on Friday, its AI agents transferred data when it should not have.
Such activity resulted in at least 53 incidents where an OpenAI agent took an image from ChatGPT user activity and transferred it elsewhere.
The company said that in each instance of a user image being used and transferred by an AI agent, the user had opted in to allow OpenAI to train models using their data.
Nevertheless, OpenAI admitted: "This is not an appropriate use of this data".
It added that the leak of user images occurred before it had put in place new safeguards on AI training, and it was working to get all the user images transferred to any third-party removed.
Reuters first reported the expanded investigations. OpenAI also published details to its public blog.
In certain instances of the agent activity, OpenAI said the tools "bypassed" security controls of some websites.
In other instances, the AI agents showed "misalignment" in attempts to get at information from websites. Misalignment is a term used by AI companies and researchers to describe instances where an AI tool did something that it was not trained to do or was otherwise unintended.
OpenAI said that it was limiting identifying what entities were impacted because many had asked the company to not disclose details.
"Our goal is to give each organization the facts and defer to them on if and when to make the incident public," it said.
Not all of the instances involved in this incident were being considered a significant security breach, the company noted.
"Some organizations may review what we share and conclude that the information was intentionally public or that the model's interaction was not concerning," it explained. "Others may identify a design issue or security weakness they want to address."
Why are there concerns AI could threaten humanity, and how real are they?
- Published17 September
Could AI wipe out humans and how might it do it?
- Published7 days ago
The company said many of the incidents are being referred to as "agent spam", which it described as "unexpected or concerning" AI agent activity, like posting information to the internet.
OpenAI began taking such incidents more seriously after an incident in July where a group, or "swarm," of its AI agents hacked the AI developer platform Hugging Face without being prompted to do so.
Hugging Face was first to go public with the incident, with OpenAI publicly taking responsibility for it later.
Clement Delangue, the head of Hugging Face, said Wednesday during a United Nations Security Council session on AI: "I often wonder what would have happened had I decided not to disclose this attack publicly."
"Especially now that we know similar incidents had been happening months earlier in secret at a handful of frontier labs without monitoring," Delangue added.
During that same UN meeting, OpenAI CEO Sam Altman and Dario Amodei, the head of rival firm Anthropic, asked for international leaders to form global standards for AI safety and ways to monitor and report such incidents.
While OpenAI and Anthropic have both said in recent weeks that they will bring third-party evaluators inside their companies to do real-time safety evaluations of AI tools and models, such evaluators have not yet arrived, as the BBC has reported.
OpenAI said on Friday that it is currently reviewing training activity by its AI agents and going back on a "month by month" basis from when the Hugging Face hack occurred.
"Most cases identified so far have been low severity, with limited or no evidence of meaningful impact," the company said. "Given the scale of the review required, and the need to verify each case, this work will take months to complete."
David Krueger, a professor of machine learning at University of Montreal and the founder of AI safety group Evitable, said on Friday that he was "deeply troubled" by the increasing number of AI-related safety incidents.
He called for "an immediate, indefinite, international moratorium" on AI development.
"We have yet to understand the extent of existing incidents, and future rogue AI scenarios could be catastrophic," Krueger said.
Related topics
- Published1 day ago
- Published10 September
- Published6 days ago`,
    bodyJa: `OpenAI bots meddled with multiple US government agency sites
- Published
OpenAI has acknowledged that it alerted "dozens" of global institutions that their websites may have been meddled with by its AI bots acting improperly.
AI agents attempted to get information from "governments, universities, public agencies, and other institutions", including the SEC, Census Bureau and Education Department, the company said.
The disclosures come just days after Australian Prime Minister Anthony Albanese announced that OpenAI agents had breached non-public files on the website of its government-run health care scheme, Medicare.
Since August, public fears have grown around the potentially serious, even life-threatening, impacts of AI tools falling outside of human control.
OpenAI said that some of the data was accessed by AI agents, essentially bots that are designed and trained to operate somewhat autonomously, which were working to find "authoritative sources of public information".
But the company noted that some of the bots went beyond that and worked to bypass security measures on websites.
When attempting to get information from the Census Bureau, for instance, AI agents used tools reserved for software developers to access it, the company said.
OpenAI said all of the government data accessed by bots was public.
However, it noted that information that its bots accessed from the SEC, which regulates the US stock market and protects investors, was later published by AI agents on another website. OpenAI says this action was not intended.
In other instances that OpenAI disclosed on Friday, its AI agents transferred data when it should not have.
Such activity resulted in at least 53 incidents where an OpenAI agent took an image from ChatGPT user activity and transferred it elsewhere.
The company said that in each instance of a user image being used and transferred by an AI agent, the user had opted in to allow OpenAI to train models using their data.
Nevertheless, OpenAI admitted: "This is not an appropriate use of this data".
It added that the leak of user images occurred before it had put in place new safeguards on AI training, and it was working to get all the user images transferred to any third-party removed.
Reuters first reported the expanded investigations. OpenAI also published details to its public blog.
In certain instances of the agent activity, OpenAI said the tools "bypassed" security controls of some websites.
In other instances, the AI agents showed "misalignment" in attempts to get at information from websites. Misalignment is a term used by AI companies and researchers to describe instances where an AI tool did something that it was not trained to do or was otherwise unintended.
OpenAI said that it was limiting identifying what entities were impacted because many had asked the company to not disclose details.
"Our goal is to give each organization the facts and defer to them on if and when to make the incident public," it said.
Not all of the instances involved in this incident were being considered a significant security breach, the company noted.
"Some organizations may review what we share and conclude that the information was intentionally public or that the model's interaction was not concerning," it explained. "Others may identify a design issue or security weakness they want to address."
Why are there concerns AI could threaten humanity, and how real are they?
- Published17 September
Could AI wipe out humans and how might it do it?
- Published7 days ago
The company said many of the incidents are being referred to as "agent spam", which it described as "unexpected or concerning" AI agent activity, like posting information to the internet.
OpenAI began taking such incidents more seriously after an incident in July where a group, or "swarm," of its AI agents hacked the AI developer platform Hugging Face without being prompted to do so.
Hugging Face was first to go public with the incident, with OpenAI publicly taking responsibility for it later.
Clement Delangue, the head of Hugging Face, said Wednesday during a United Nations Security Council session on AI: "I often wonder what would have happened had I decided not to disclose this attack publicly."
"Especially now that we know similar incidents had been happening months earlier in secret at a handful of frontier labs without monitoring," Delangue added.
During that same UN meeting, OpenAI CEO Sam Altman and Dario Amodei, the head of rival firm Anthropic, asked for international leaders to form global standards for AI safety and ways to monitor and report such incidents.
While OpenAI and Anthropic have both said in recent weeks that they will bring third-party evaluators inside their companies to do real-time safety evaluations of AI tools and models, such evaluators have not yet arrived, as the BBC has reported.
OpenAI said on Friday that it is currently reviewing training activity by its AI agents and going back on a "month by month" basis from when the Hugging Face hack occurred.
"Most cases identified so far have been low severity, with limited or no evidence of meaningful impact," the company said. "Given the scale of the review required, and the need to verify each case, this work will take months to complete."
David Krueger, a professor of machine learning at University of Montreal and the founder of AI safety group Evitable, said on Friday that he was "deeply troubled" by the increasing number of AI-related safety incidents.
He called for "an immediate, indefinite, international moratorium" on AI development.
"We have yet to understand the extent of existing incidents, and future rogue AI scenarios could be catastrophic," Krueger said.
Related topics
- Published1 day ago
- Published10 September
- Published6 days ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cw62jje658dlo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-26T02:50:56+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/fe1e/live/6ddbd170-b954-11f1-96dc-f7c10dbde38b.jpg",
    readTime: 10,
  },
  {
    id: "south-african-white-genocide-does-not-ex-e330f042",
    title: "South African white genocide does not exist, new ambassador to US tells BBC",
    titleJa: "South African white genocide does not exist, new ambassador to US tells BBC",
    summaryJa: "Roelf Meyer tells the BBC that being a white Afrikaner gives him legitimacy to challenge Trump's claim of a genocide.",
    bodyOriginal: `South African white genocide does not exist, new ambassador to US tells BBC
- Published
South Africa's new ambassador to Washington has a personal reason to challenge Donald Trump's assertion that there is a genocide against white Afrikaners - he is "a born Afrikaner" himself.
"Is he talking about us?", Roelf Meyer remembers thinking, when he first heard President Trump say it.
His response to the US president's claim is blunt.
The notion of a mass attack on the white Afrikaner minority in South Africa does not exist, he told the BBC, adding that his identity gave him the legitimacy to say so.
Meyer was one of the chief mediators to end white-minority rule known as apartheid in South Africa in the 1990s. He was appointed ambassador to the US in April, after diplomatic relations between the US and South Africa plummeted.
In an interview with the BBC, Meyer said the facts about violence in South Africa had been misrepresented and he never got a clear answer about where this "misdirection of information" was coming from.
Last year, Trump accused South Africa of white genocide in a meeting with President Cyril Ramaphosa at the White House and launched a US refugee pathway for Afrikaners.
Since last year, nearly 13,000 refugees were admitted to the United States and all but three were South African.
Among them was Lielie, the name she uses publicly, who moved with her family to Texas from South Africa, where they had lived on her stepfather's farm, growing macadamia nuts and bananas.
Despite walls around the house, an electric fence, and eight bull terriers, she said she felt "fear the whole time" and that on three occasions she saw people entering her property.
"Nothing was stolen, we weren't harmed, but there are friends of my husband, people that lived around us, they were brutally attacked," she said.
She said since moving to the US under the Trump administration's refugee pathway her life had changed, she felt safer walking around, and "my kids can actually play outside".
The Trump administration is planning to admit up to 17,500 additional white Afrikaners as refugees over the next 12 months, according to a notice sent to Congress on Tuesday.
In a statement to the BBC, a White House spokeswoman said: "President Trump has provided a lifeline for Afrikaners, who are being raped, maimed, killed and driven off their property across South Africa.
"While the South African government and many in the media have brushed off the horrific lived experiences of this community, the Trump administration continues to process applications for refugee status because the president has a humanitarian heart."
SJ Du Venage, who lives on South Africa's west coast, has been trying to move to the US under the new scheme.
Du Venage is a council member of the Freedom Front Plus, a right-wing Afrikaner party, and argues that there is a "political drive towards killing white people, and killing the farmers on the farms".
"There's absolutely an agenda to wipe us out here," he says.
Race policies or Israel - what's really driving Trump's fury with South Africa?
- Published23 February 2025
Is there a genocide of white South Africans as Trump claims?
- Published2 June 2025
Do Afrikaners want to take Trump up on his South African refugee offer?
- Published15 May 2025
An Afrikaner lobby group is holding a vigil on Saturday with thousands of white crosses on Washington's National Mall to commemorate what it says are victims of "farm attacks".
Claims of genocide against white South Africans have been discredited by every political party in the country, including by those representing Afrikaners.
"I'm an Afrikaner from South Africa myself," Ambassador Meyer said, "and I can say that I've never experienced something of that kind."
Meyer said he would like to have a conversation with Trump about the reality of the situation, saying that as a "born Afrikaner", he has the "legitimacy" to speak about the subject.
The ambassador helped negotiate an end to apartheid on behalf of the National Party, which was responsible for it, with now-president Cyril Ramaphosa also a key negotiator for the African National Congress party.
He said the "trust" between the two men was one reason President Ramaphosa appointed him to help mend US-South Africa relations, as well as "the fact he also saw the value of me being an Afrikaner".
"But I'm not here to represent the Afrikaner only," Meyer says.
Last week, the Trump administration announced visa restrictions for those South Africans who it said were responsible for "race-based discrimination" against white people. It also warned of further punitive actions if South African leaders did not address the issue.
Police data shows the majority of victims of crime in South Africa, including on farms, are black. Farm violence, often motivated by robberies, is an issue but represents a smaller number of homicides in the country.
While no politician disputes that crime is a problem in South Africa, many experts say this does not qualify as "persecution".
Larry Bartlett, the former director of the US Refugee Assistance Programme, said it could even be "unlawful" to appropriate a programme defined in law for people who "really have no chance to go home".
He said white people who were unlikely to qualify as refugee in law were taking scarce opportunities meant for those fleeing war or ethnic cleansing.
The programme has its critics among Afrikaners in South Africa too.
"Why single out the white Afrikaner to say this group qualifies to flee to the US? This country suffers gender-based violence. Why not single out women?" Rudi Swanepoel, a pastor from Johannesburg told the BBC.
Swanepoel thinks it is not persecution but a "loss of privilege" that is causing some Afrikaners to feel aggrieved.
"To use the metaphor of a cake, 30, 40 years ago the white people of South Africa controlled the cake," he says. "Since democracy came, the obvious reality was we had to now start sharing that cake and those privileges."
Alongside "rural safety", the Trump administration has raised other concerns about South Africa, including targets for companies to increase non-white employment and a law allowing the state, in exceptional circumstances, to expropriate land without compensation. These are aimed at redressing historic racial inequality.
Meyer wants Trump's executive order against South Africa, which underpins the refugee pathway, revoked.
He said South Africa had never prevented people from leaving and had addressed all the US concerns, stressing that the land expropriation law is awaiting a court judgement.
"South Africa has challenges with the prevention of crime and with the combatting of crime," he said.
But he added: "It's a problem all around. It's not rural. It's not farm attacks only. If you look at the total picture, the huge levels of crime in the black townships of South Africa are the biggest concern, proportionally, far more than anything else."
He said he would encourage the US to help South Africa with resources on combatting crime, including by providing equipment to speed up reaction times.
Meyer also has a message for Afrikaners protesting against "farm attacks" by laying white crosses in Washington.
"It doesn't help us to raise a voice outside, if we are not committed to doing something inside the country," he says.`,
    bodyJa: `South African white genocide does not exist, new ambassador to US tells BBC
- Published
South Africa's new ambassador to Washington has a personal reason to challenge Donald Trump's assertion that there is a genocide against white Afrikaners - he is "a born Afrikaner" himself.
"Is he talking about us?", Roelf Meyer remembers thinking, when he first heard President Trump say it.
His response to the US president's claim is blunt.
The notion of a mass attack on the white Afrikaner minority in South Africa does not exist, he told the BBC, adding that his identity gave him the legitimacy to say so.
Meyer was one of the chief mediators to end white-minority rule known as apartheid in South Africa in the 1990s. He was appointed ambassador to the US in April, after diplomatic relations between the US and South Africa plummeted.
In an interview with the BBC, Meyer said the facts about violence in South Africa had been misrepresented and he never got a clear answer about where this "misdirection of information" was coming from.
Last year, Trump accused South Africa of white genocide in a meeting with President Cyril Ramaphosa at the White House and launched a US refugee pathway for Afrikaners.
Since last year, nearly 13,000 refugees were admitted to the United States and all but three were South African.
Among them was Lielie, the name she uses publicly, who moved with her family to Texas from South Africa, where they had lived on her stepfather's farm, growing macadamia nuts and bananas.
Despite walls around the house, an electric fence, and eight bull terriers, she said she felt "fear the whole time" and that on three occasions she saw people entering her property.
"Nothing was stolen, we weren't harmed, but there are friends of my husband, people that lived around us, they were brutally attacked," she said.
She said since moving to the US under the Trump administration's refugee pathway her life had changed, she felt safer walking around, and "my kids can actually play outside".
The Trump administration is planning to admit up to 17,500 additional white Afrikaners as refugees over the next 12 months, according to a notice sent to Congress on Tuesday.
In a statement to the BBC, a White House spokeswoman said: "President Trump has provided a lifeline for Afrikaners, who are being raped, maimed, killed and driven off their property across South Africa.
"While the South African government and many in the media have brushed off the horrific lived experiences of this community, the Trump administration continues to process applications for refugee status because the president has a humanitarian heart."
SJ Du Venage, who lives on South Africa's west coast, has been trying to move to the US under the new scheme.
Du Venage is a council member of the Freedom Front Plus, a right-wing Afrikaner party, and argues that there is a "political drive towards killing white people, and killing the farmers on the farms".
"There's absolutely an agenda to wipe us out here," he says.
Race policies or Israel - what's really driving Trump's fury with South Africa?
- Published23 February 2025
Is there a genocide of white South Africans as Trump claims?
- Published2 June 2025
Do Afrikaners want to take Trump up on his South African refugee offer?
- Published15 May 2025
An Afrikaner lobby group is holding a vigil on Saturday with thousands of white crosses on Washington's National Mall to commemorate what it says are victims of "farm attacks".
Claims of genocide against white South Africans have been discredited by every political party in the country, including by those representing Afrikaners.
"I'm an Afrikaner from South Africa myself," Ambassador Meyer said, "and I can say that I've never experienced something of that kind."
Meyer said he would like to have a conversation with Trump about the reality of the situation, saying that as a "born Afrikaner", he has the "legitimacy" to speak about the subject.
The ambassador helped negotiate an end to apartheid on behalf of the National Party, which was responsible for it, with now-president Cyril Ramaphosa also a key negotiator for the African National Congress party.
He said the "trust" between the two men was one reason President Ramaphosa appointed him to help mend US-South Africa relations, as well as "the fact he also saw the value of me being an Afrikaner".
"But I'm not here to represent the Afrikaner only," Meyer says.
Last week, the Trump administration announced visa restrictions for those South Africans who it said were responsible for "race-based discrimination" against white people. It also warned of further punitive actions if South African leaders did not address the issue.
Police data shows the majority of victims of crime in South Africa, including on farms, are black. Farm violence, often motivated by robberies, is an issue but represents a smaller number of homicides in the country.
While no politician disputes that crime is a problem in South Africa, many experts say this does not qualify as "persecution".
Larry Bartlett, the former director of the US Refugee Assistance Programme, said it could even be "unlawful" to appropriate a programme defined in law for people who "really have no chance to go home".
He said white people who were unlikely to qualify as refugee in law were taking scarce opportunities meant for those fleeing war or ethnic cleansing.
The programme has its critics among Afrikaners in South Africa too.
"Why single out the white Afrikaner to say this group qualifies to flee to the US? This country suffers gender-based violence. Why not single out women?" Rudi Swanepoel, a pastor from Johannesburg told the BBC.
Swanepoel thinks it is not persecution but a "loss of privilege" that is causing some Afrikaners to feel aggrieved.
"To use the metaphor of a cake, 30, 40 years ago the white people of South Africa controlled the cake," he says. "Since democracy came, the obvious reality was we had to now start sharing that cake and those privileges."
Alongside "rural safety", the Trump administration has raised other concerns about South Africa, including targets for companies to increase non-white employment and a law allowing the state, in exceptional circumstances, to expropriate land without compensation. These are aimed at redressing historic racial inequality.
Meyer wants Trump's executive order against South Africa, which underpins the refugee pathway, revoked.
He said South Africa had never prevented people from leaving and had addressed all the US concerns, stressing that the land expropriation law is awaiting a court judgement.
"South Africa has challenges with the prevention of crime and with the combatting of crime," he said.
But he added: "It's a problem all around. It's not rural. It's not farm attacks only. If you look at the total picture, the huge levels of crime in the black townships of South Africa are the biggest concern, proportionally, far more than anything else."
He said he would encourage the US to help South Africa with resources on combatting crime, including by providing equipment to speed up reaction times.
Meyer also has a message for Afrikaners protesting against "farm attacks" by laying white crosses in Washington.
"It doesn't help us to raise a voice outside, if we are not committed to doing something inside the country," he says.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cm2l8qv7zppko?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-25T23:20:48+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/1747/live/dc2a8ea0-b85a-11f1-a8b8-8b929801ec51.jpg",
    readTime: 10,
  },
  {
    id: "inside-the-fbi-hack-agents-fearful-and-a-00a6f3df",
    title: "Inside the FBI hack: Agents fearful and angry after 'dangerous' data breach",
    titleJa: "Inside the FBI hack: Agents fearful and angry after 'dangerous' data breach",
    summaryJa: "Current and former agents speak to the BBC about the devastating impact of the FBI hack.",
    bodyOriginal: `Inside the FBI hack: Agents fearful and angry after 'dangerous' data breach
- Published
Current and former FBI agents have spoken to BBC News of their shock, fear and anger following a hack that appears to have exposed the private and personal information of the agency's entire workforce.
"This is really bad for our undercover agents," says one former FBI agent, who fears for the safety of his colleagues.
The former cyber investigator is in a group chat with current agents who are worried their personal information could soon be freely available online to criminals and hostile nation-state hackers.
He says staff fear they could be targeted, or that criminals could use the data to create highly convincing phishing attempts, scams or demands for bribes.
The hacking group ShinyHunters is threatening to publish the stolen databases and documents within four days unless its demands are met.
Some agents are also concerned about the risk of physical attacks from cyber criminals they have investigated.
"One of the things we are discussing in the group chat is 'violence-as-a-service' attacks from young online gangs," says the former worker.
"They could use this information to harass an FBI agent who has worked on their cases."
Personal concerns
Groups similar to ShinyHunters - believed to be an English-speaking gang - have in the past been linked to swatting incidents, and even petrol bomb attacks against law enforcement officers and rivals.
The group claims it breached FBI systems on Monday and later posted details of the attack on its darknet site.
The FBI has not responded to requests for comment.
However, on Wednesday the agency acknowledged the breach - saying it was "aggressively investigating" how it occurred.
For Michael McPherson, a former FBI agent who is now senior vice president of security operations at cyber firm ReliaQuest, the hack presents "a security threat which cuts to the core of agent safety, particularly their families".
He says agents understand the "inherent risks" that come with the job.
"But this incident reportedly includes personal data such as home addresses and contact information, which could expose family members who are normally insulated from the threats associated with such a career," McPherson says.
ShinyHunters shared samples of the alleged stolen data with reporters, along with an extortion demand.
The samples appear genuine and include names, addresses, phone numbers, badge numbers, job titles and information about spouses.
The records appear to relate to thousands of agents, including senior officials such as deputy directors.
The criminals also appear to possess highly sensitive medical information relating to thousands of special agents.
BBC News has seen samples of stolen "fitness-for-work" medical examinations containing information such as blood and urine test results, along with doctors' notes mentioning conditions including a "shellfish and banana allergy".
Agents' full names and addresses, as well as references to medical issues including "blood in the urine" and "high cholesterol" are now in the criminals' hands.
Cynthia Kaiser, who was the Deputy Director of Cyber at the FBI and now leads the Research Centre at Halcyon says ShinyHunters appear to already have lost control of some of the data which is circulating in various online groups of cyber researchers and could lead to harm even before the main tranche is published.
"A lot of the damage may already be done, and as we have seen in past FBI data breaches, that information continues to circulate the dark web years later," she said.
There are also concerns about the breach's national security implications, such as staff becoming targets for recruitment efforts by hostile foreign intelligence services.
Fallout fears
Alongside fear, many of those who spoke to the BBC expressed anger at the FBI for allowing the data to be stolen.
The hack is particularly embarrassing from a technical perspective because ShinyHunters is not generally regarded as a highly sophisticated hacking group.
One former cyber agent said FBI staff were furious about the "sloppy and lazy security failures" that allegedly enabled the breach.
There is also confusion about how to handle any fallout if data is published next week, as threatened.
The FBI appears unlikely to comply with the extortion demands, and the hackers have indicated they intend to post the information on their darknet site.
Unusually, the group is not demanding money. Instead, it wants the FBI to retract an advisory published in May, which it claims "offended" them.
"The agency leadership is lost," the former cyber investigator tells me.
He says staff have been advised to sign up to a service called DeleteMe, which helps remove personal information from data broker websites - a response he feels is inadequate.
According to another former agent, there is widespread shock that such a breach could happen at one of the world's best-resourced law enforcement agencies.
"You would think this information would not be internet-exposed. It's disturbing, actually," he says.
'Kicked a sleeping lion'
There is also embarrassment that a prolific group of young cyber criminals has repeatedly managed to evade law enforcement while carrying out a string of high-profile hacks.
ShinyHunters has been linked to numerous extortion attacks, including on Rockstar Games and the education platform Canvas.
The group regularly communicates with reporters via Telegram, where members often boast about their activities.
"The bureau doesn't know what to do with teenage cyber criminals," one former agent says.
McPherson says there is no doubt the FBI is taking the incident extremely seriously.
He expects the agency to draw on its extensive network of partners and resources "to make this group suffer the consequences for this brazen and taunting attack".
Kaiser added that the hackers have been "reckless and foolish" and warned them to expect "a significant effort by the FBI to quickly bring them to justice."
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.
Related topics
- Published13 April
- Published16 July`,
    bodyJa: `Inside the FBI hack: Agents fearful and angry after 'dangerous' data breach
- Published
Current and former FBI agents have spoken to BBC News of their shock, fear and anger following a hack that appears to have exposed the private and personal information of the agency's entire workforce.
"This is really bad for our undercover agents," says one former FBI agent, who fears for the safety of his colleagues.
The former cyber investigator is in a group chat with current agents who are worried their personal information could soon be freely available online to criminals and hostile nation-state hackers.
He says staff fear they could be targeted, or that criminals could use the data to create highly convincing phishing attempts, scams or demands for bribes.
The hacking group ShinyHunters is threatening to publish the stolen databases and documents within four days unless its demands are met.
Some agents are also concerned about the risk of physical attacks from cyber criminals they have investigated.
"One of the things we are discussing in the group chat is 'violence-as-a-service' attacks from young online gangs," says the former worker.
"They could use this information to harass an FBI agent who has worked on their cases."
Personal concerns
Groups similar to ShinyHunters - believed to be an English-speaking gang - have in the past been linked to swatting incidents, and even petrol bomb attacks against law enforcement officers and rivals.
The group claims it breached FBI systems on Monday and later posted details of the attack on its darknet site.
The FBI has not responded to requests for comment.
However, on Wednesday the agency acknowledged the breach - saying it was "aggressively investigating" how it occurred.
For Michael McPherson, a former FBI agent who is now senior vice president of security operations at cyber firm ReliaQuest, the hack presents "a security threat which cuts to the core of agent safety, particularly their families".
He says agents understand the "inherent risks" that come with the job.
"But this incident reportedly includes personal data such as home addresses and contact information, which could expose family members who are normally insulated from the threats associated with such a career," McPherson says.
ShinyHunters shared samples of the alleged stolen data with reporters, along with an extortion demand.
The samples appear genuine and include names, addresses, phone numbers, badge numbers, job titles and information about spouses.
The records appear to relate to thousands of agents, including senior officials such as deputy directors.
The criminals also appear to possess highly sensitive medical information relating to thousands of special agents.
BBC News has seen samples of stolen "fitness-for-work" medical examinations containing information such as blood and urine test results, along with doctors' notes mentioning conditions including a "shellfish and banana allergy".
Agents' full names and addresses, as well as references to medical issues including "blood in the urine" and "high cholesterol" are now in the criminals' hands.
Cynthia Kaiser, who was the Deputy Director of Cyber at the FBI and now leads the Research Centre at Halcyon says ShinyHunters appear to already have lost control of some of the data which is circulating in various online groups of cyber researchers and could lead to harm even before the main tranche is published.
"A lot of the damage may already be done, and as we have seen in past FBI data breaches, that information continues to circulate the dark web years later," she said.
There are also concerns about the breach's national security implications, such as staff becoming targets for recruitment efforts by hostile foreign intelligence services.
Fallout fears
Alongside fear, many of those who spoke to the BBC expressed anger at the FBI for allowing the data to be stolen.
The hack is particularly embarrassing from a technical perspective because ShinyHunters is not generally regarded as a highly sophisticated hacking group.
One former cyber agent said FBI staff were furious about the "sloppy and lazy security failures" that allegedly enabled the breach.
There is also confusion about how to handle any fallout if data is published next week, as threatened.
The FBI appears unlikely to comply with the extortion demands, and the hackers have indicated they intend to post the information on their darknet site.
Unusually, the group is not demanding money. Instead, it wants the FBI to retract an advisory published in May, which it claims "offended" them.
"The agency leadership is lost," the former cyber investigator tells me.
He says staff have been advised to sign up to a service called DeleteMe, which helps remove personal information from data broker websites - a response he feels is inadequate.
According to another former agent, there is widespread shock that such a breach could happen at one of the world's best-resourced law enforcement agencies.
"You would think this information would not be internet-exposed. It's disturbing, actually," he says.
'Kicked a sleeping lion'
There is also embarrassment that a prolific group of young cyber criminals has repeatedly managed to evade law enforcement while carrying out a string of high-profile hacks.
ShinyHunters has been linked to numerous extortion attacks, including on Rockstar Games and the education platform Canvas.
The group regularly communicates with reporters via Telegram, where members often boast about their activities.
"The bureau doesn't know what to do with teenage cyber criminals," one former agent says.
McPherson says there is no doubt the FBI is taking the incident extremely seriously.
He expects the agency to draw on its extensive network of partners and resources "to make this group suffer the consequences for this brazen and taunting attack".
Kaiser added that the hackers have been "reckless and foolish" and warned them to expect "a significant effort by the FBI to quickly bring them to justice."
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.
Related topics
- Published13 April
- Published16 July`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cm4gjjlgzdjgo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-25T23:05:40+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/d538/live/369f0e30-b903-11f1-83cd-2998f68d9572.jpg",
    readTime: 10,
  },
  {
    id: "here-s-exactly-what-paramount-promised-h-73b458f4",
    title: "Here's exactly what Paramount promised Hollywood to land WBD — and why some are still skeptical",
    titleJa: "Here's exactly what Paramount promised Hollywood to land WBD — and why some are still skeptical",
    summaryJa: "Paramount CEO David Ellison's antitrust settlement eased some theatrical concerns, but questions remain about what happens when the five-year agreement ends.",
    bodyOriginal: `A new movie every 11 days? That's what Paramount's David Ellison is promising after clearing a path this week for his company's acquisition of Warner Bros. Discovery, combining two storied Hollywood studios.
The CEO's settlement with a group of state attorneys general over antitrust concerns stipulates that the newly minted company will release at least 30 films into theaters in 2027 and 2028 and at least 32 films in 2029, 2030 and 2031.
Currently, the combined entity has 35 films scheduled to be released next year, according to data from Rentrak.
But questions remain about what caliber of releases the industry can expect — and what happens after the five-year agreement expires.
"This is much more complicated than simply asking whether 30 movies is enough," Paul Dergarabedian, head of marketplace trends at Rentrak, told CNBC. "Thirty wide releases would represent a meaningful commitment to theatrical, and I think everyone in exhibition would welcome a robust pipeline of films.
"But ultimately the proof will be in how those movies perform, how varied the slate is, how consistently they reach theaters and how the combined company executes on those commitments," he said.
Hollywood has been clamoring for more theatrical titles since the Covid pandemic shuttered theaters and clogged the production pipeline. Ellison's theatrical commitment, which he touted as early as April at the industry's annual CinemaCon event, had garnered approval from the CEOs of the "Big Three" cinema operators — AMC's Adam Aron, Cinemark's Sean Gamble and Regal's Eduardo Acuna — even before Paramount's settlement.
Cinema United, the lobbying group that represents theater owners, had been staunchly against the merger, but gave its seal of approval this week, saying the agreement with the states "accomplishes many of exhibition's objectives."
However, not all exhibitors are on board. A number of theater executives, who requested anonymity to speak candidly, told CNBC they remain skeptical.
Consolidation concerns
Paramount's settlement includes stipulations about the number of theatrical releases the company must distribute over the next five years, how many of those releases need to be distributed widely and how many need to have a budget of more than $50 million. Paramount agreed to face steep penalties if it fails to meet the thresholds.
Consolidation among movie studios has traditionally led to fewer film releases, which, in turn, results in lower revenue, particularly for smaller theater chains and independent operators.
Overall industry dynamics have shifted drastically since Covid disrupted the theatrical space, leading to fewer screens and fewer moviegoers. Some of these woes have been masked by higher movie ticket prices — which are expected to help boost the domestic box office above $10 billion for the first time since the pandemic — but the moviegoing industry is still adapting to new economics.
Several theater operators told CNBC they were concerned the merger between Paramount and Warner Bros. would not only decrease the number of studios contributing films to the ecosystem, but also decrease competition and give the combined company a more powerful bargaining position when it comes to windowing terms and rental fees.
While larger exhibitors, which operate hundreds of locations, can weather consolidation, the smaller players have far less leverage.
Some theater owners also said they fear that Paramount will not be able to sustain its 30-plus theatrical output after the five-year deal, especially as production and marketing costs continue to rise and as Paramount contends with around $79 billion in debt once the merger closes.
"Of course, I worry about what happens in year six," Rob Lehman, president and chief operating officer at Santikos Theaters, told CNBC. "You know, after the five years is up, does it then drop down to 18 movies a year?"
Still, Lehman called Paramount's guaranteed number of films "a win for the industry."
Under the terms of its settlement agreement, if Paramount falls short of its annual quotas, it'll be fined $30 million per film, 90% of which will be paid out to film workers and 10% to the National Association of Attorneys General.
Though $30 million per film could prove to be a material penalty if Paramount significantly misses the mark, it pales in comparison to the cost of actually making and marketing a film.
And, "quantity by itself is not enough," Dergarabedian said. "You could say you are going to release 30 movies, or even 100 movies, but those movies still have to connect with audiences. If you had half as many films and every one of them became a major hit, which scenario would you rather have? So ultimately, it is not simply about how many movies are released. It is about having enough movies, released at the right cadence, that audiences actually want to see."
Next year, the combined Paramount-Warner Bros. slate includes new entries in popular franchises like Sonic, Godzilla, Minecraft, A Quiet Place, Teenage Mutant Ninja Turtles, Lord of the Rings, The Conjuring and the DC superhero universe.
A packed calendar
There are also simple logistical questions around 30 films released from one company in a year.
With 52 weeks on the calendar, that's less than 2 weeks between new releases — not accounting for marquee weekends when the industry typically stacks big premieres.
A merged Paramount-Warner Bros. could easily cannibalize its own ticket sales if major releases are placed too close to one another.
Combine that with growing competition for coveted premium large format screens like Imax and Dolby and the schedule looks even trickier.
At present, the combined slate of Paramount and Warner Bros. for 2027 contains six dates where both studios have a theatrical release planned. There are also pockets on the calendar that have three to five releases stacked up on a weekly basis.
"From a pure strategy standpoint, it's reasonable to expect release date shifts among the two studios' planned slates," Dergarabedian said. "In some cases, it'll be to avoid overlapping audiences while, in others, it may be to diversify their cadence of box office."
For example, the combined company currently has nine horror films slated for 2027 and could look to shift dates to allow these features to have longer playability without competing.
"Hopefully, they put together some great movies and counterprogramming," Lehman said. "Show us the kids' movies, show us the horror movies, show us the high-end action movies."
The fine print
Paramount's settlement with the state AGs mandates that at least 20 of the films released by the combined company in each of the first two years after closing have a wide release in more than 2,000 theaters. For the following three years, that increases to at least 21 films.
"The agreement very specifically stipulates that it only has to be 20 wide releases, which is nothing," said industry analyst David Poland.
Currently, Paramount is on track to have 14 wide releases in 2026 and Warner Bros. is set for 13, for a total of 27 wide releases between them, according to Rentrak data.
"The importance of wide releases cannot be overstated," Dergarabedian said. "These are the films that generate the biggest theatrical impact, fill auditoriums, drive concession sales and create the kind of cultural conversation that benefits the entire moviegoing ecosystem."
Then there is the definition of "tentpole."
In Hollywood, a tentpole film is one with a high budget that makes enough money between ticket sales and merchandise tie-ins that a studio can fund smaller-budget projects that may not be as profitable.
For many in the industry, a tentpole feature is one that costs more than $100 million to produce, often exceeding $200 million or $250 million, and that drives significant traffic to movie theaters. Think, the Marvel Cinematic Universe, Universal's recent hit "The Odyssey" or Sony's "Spider-Man: Brand New Day."
The Paramount settlement, which mandates that at least 20% of the company's annual releases be tentpole films, defines that category as a film with a budget of at least $50 million.
"A $50 million production budget feels like a relatively low threshold for what we traditionally think of as a tentpole movie," Dergarabedian said. "But at the same time, a $50 million movie can absolutely become a tentpole if it breaks out and becomes a cultural and box office phenomenon."`,
    bodyJa: `A new movie every 11 days? That's what Paramount's David Ellison is promising after clearing a path this week for his company's acquisition of Warner Bros. Discovery, combining two storied Hollywood studios.
The CEO's settlement with a group of state attorneys general over antitrust concerns stipulates that the newly minted company will release at least 30 films into theaters in 2027 and 2028 and at least 32 films in 2029, 2030 and 2031.
Currently, the combined entity has 35 films scheduled to be released next year, according to data from Rentrak.
But questions remain about what caliber of releases the industry can expect — and what happens after the five-year agreement expires.
"This is much more complicated than simply asking whether 30 movies is enough," Paul Dergarabedian, head of marketplace trends at Rentrak, told CNBC. "Thirty wide releases would represent a meaningful commitment to theatrical, and I think everyone in exhibition would welcome a robust pipeline of films.
"But ultimately the proof will be in how those movies perform, how varied the slate is, how consistently they reach theaters and how the combined company executes on those commitments," he said.
Hollywood has been clamoring for more theatrical titles since the Covid pandemic shuttered theaters and clogged the production pipeline. Ellison's theatrical commitment, which he touted as early as April at the industry's annual CinemaCon event, had garnered approval from the CEOs of the "Big Three" cinema operators — AMC's Adam Aron, Cinemark's Sean Gamble and Regal's Eduardo Acuna — even before Paramount's settlement.
Cinema United, the lobbying group that represents theater owners, had been staunchly against the merger, but gave its seal of approval this week, saying the agreement with the states "accomplishes many of exhibition's objectives."
However, not all exhibitors are on board. A number of theater executives, who requested anonymity to speak candidly, told CNBC they remain skeptical.
Consolidation concerns
Paramount's settlement includes stipulations about the number of theatrical releases the company must distribute over the next five years, how many of those releases need to be distributed widely and how many need to have a budget of more than $50 million. Paramount agreed to face steep penalties if it fails to meet the thresholds.
Consolidation among movie studios has traditionally led to fewer film releases, which, in turn, results in lower revenue, particularly for smaller theater chains and independent operators.
Overall industry dynamics have shifted drastically since Covid disrupted the theatrical space, leading to fewer screens and fewer moviegoers. Some of these woes have been masked by higher movie ticket prices — which are expected to help boost the domestic box office above $10 billion for the first time since the pandemic — but the moviegoing industry is still adapting to new economics.
Several theater operators told CNBC they were concerned the merger between Paramount and Warner Bros. would not only decrease the number of studios contributing films to the ecosystem, but also decrease competition and give the combined company a more powerful bargaining position when it comes to windowing terms and rental fees.
While larger exhibitors, which operate hundreds of locations, can weather consolidation, the smaller players have far less leverage.
Some theater owners also said they fear that Paramount will not be able to sustain its 30-plus theatrical output after the five-year deal, especially as production and marketing costs continue to rise and as Paramount contends with around $79 billion in debt once the merger closes.
"Of course, I worry about what happens in year six," Rob Lehman, president and chief operating officer at Santikos Theaters, told CNBC. "You know, after the five years is up, does it then drop down to 18 movies a year?"
Still, Lehman called Paramount's guaranteed number of films "a win for the industry."
Under the terms of its settlement agreement, if Paramount falls short of its annual quotas, it'll be fined $30 million per film, 90% of which will be paid out to film workers and 10% to the National Association of Attorneys General.
Though $30 million per film could prove to be a material penalty if Paramount significantly misses the mark, it pales in comparison to the cost of actually making and marketing a film.
And, "quantity by itself is not enough," Dergarabedian said. "You could say you are going to release 30 movies, or even 100 movies, but those movies still have to connect with audiences. If you had half as many films and every one of them became a major hit, which scenario would you rather have? So ultimately, it is not simply about how many movies are released. It is about having enough movies, released at the right cadence, that audiences actually want to see."
Next year, the combined Paramount-Warner Bros. slate includes new entries in popular franchises like Sonic, Godzilla, Minecraft, A Quiet Place, Teenage Mutant Ninja Turtles, Lord of the Rings, The Conjuring and the DC superhero universe.
A packed calendar
There are also simple logistical questions around 30 films released from one company in a year.
With 52 weeks on the calendar, that's less than 2 weeks between new releases — not accounting for marquee weekends when the industry typically stacks big premieres.
A merged Paramount-Warner Bros. could easily cannibalize its own ticket sales if major releases are placed too close to one another.
Combine that with growing competition for coveted premium large format screens like Imax and Dolby and the schedule looks even trickier.
At present, the combined slate of Paramount and Warner Bros. for 2027 contains six dates where both studios have a theatrical release planned. There are also pockets on the calendar that have three to five releases stacked up on a weekly basis.
"From a pure strategy standpoint, it's reasonable to expect release date shifts among the two studios' planned slates," Dergarabedian said. "In some cases, it'll be to avoid overlapping audiences while, in others, it may be to diversify their cadence of box office."
For example, the combined company currently has nine horror films slated for 2027 and could look to shift dates to allow these features to have longer playability without competing.
"Hopefully, they put together some great movies and counterprogramming," Lehman said. "Show us the kids' movies, show us the horror movies, show us the high-end action movies."
The fine print
Paramount's settlement with the state AGs mandates that at least 20 of the films released by the combined company in each of the first two years after closing have a wide release in more than 2,000 theaters. For the following three years, that increases to at least 21 films.
"The agreement very specifically stipulates that it only has to be 20 wide releases, which is nothing," said industry analyst David Poland.
Currently, Paramount is on track to have 14 wide releases in 2026 and Warner Bros. is set for 13, for a total of 27 wide releases between them, according to Rentrak data.
"The importance of wide releases cannot be overstated," Dergarabedian said. "These are the films that generate the biggest theatrical impact, fill auditoriums, drive concession sales and create the kind of cultural conversation that benefits the entire moviegoing ecosystem."
Then there is the definition of "tentpole."
In Hollywood, a tentpole film is one with a high budget that makes enough money between ticket sales and merchandise tie-ins that a studio can fund smaller-budget projects that may not be as profitable.
For many in the industry, a tentpole feature is one that costs more than $100 million to produce, often exceeding $200 million or $250 million, and that drives significant traffic to movie theaters. Think, the Marvel Cinematic Universe, Universal's recent hit "The Odyssey" or Sony's "Spider-Man: Brand New Day."
The Paramount settlement, which mandates that at least 20% of the company's annual releases be tentpole films, defines that category as a film with a budget of at least $50 million.
"A $50 million production budget feels like a relatively low threshold for what we traditionally think of as a tentpole movie," Dergarabedian said. "But at the same time, a $50 million movie can absolutely become a tentpole if it breaks out and becomes a cultural and box office phenomenon."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/25/paramount-hollywood-promises.html",
    publishedAt: "2026-09-25T22:53:52+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "a-death-cross-is-coming-for-the-dollar-w-431c683a",
    title: "A ‘death cross’ is coming for the dollar. Why Trump will be happy.",
    titleJa: "A ‘death cross’ is coming for the dollar. Why Trump will be happy.",
    summaryJa: "Don’t look now, but there are some technical reasons to believe that U.S. Treasury Secretary Scott Bessent was right when he declared to the financial markets that “I am the house now.”",
    bodyOriginal: `Don’t look now, but there are some technical reasons to believe that U.S. Treasury Secretary Scott Bessent was right when he declared to the financial markets that “I am the house now.”`,
    bodyJa: `Don’t look now, but there are some technical reasons to believe that U.S. Treasury Secretary Scott Bessent was right when he declared to the financial markets that “I am the house now.”`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/a-death-cross-is-coming-for-the-dollar-why-trump-will-be-happy-0766303d?mod=mw_rss_topstories",
    publishedAt: "2026-09-25T21:57:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-01060620",
    readTime: 2,
  },
  {
    id: "my-husband-and-i-are-in-our-50s-and-have-eda0d7ac",
    title: "My husband and I are in our 50s and have no kids. We have $2 million in IRAs and 401(k)s. Do we really need a will?",
    titleJa: "My husband and I are in our 50s and have no kids. We have $2 million in IRAs and 401(k)s. Do we really need a will?",
    summaryJa: "“We have no debt and own our primary home, a vacation home, as well as my mother’s home in another state.”",
    bodyOriginal: `“We have no debt and own our primary home, a vacation home, as well as my mother’s home in another state.”`,
    bodyJa: `“We have no debt and own our primary home, a vacation home, as well as my mother’s home in another state.”`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/my-husband-and-i-are-in-our-50s-and-have-no-kids-we-have-2-million-do-we-need-a-will-62fb422f?mod=mw_rss_topstories",
    publishedAt: "2026-09-25T21:45:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-79889315",
    readTime: 2,
  },
  {
    id: "appeals-court-rules-that-states-can-regu-6d20f3b8",
    title: "Appeals court rules that states can regulate Kalshi’s sports prediction markets, dealing another legal blow to platforms",
    titleJa: "Appeals court rules that states can regulate Kalshi’s sports prediction markets, dealing another legal blow to platforms",
    summaryJa: "The decision is the second in less than a month by an appeals court that states have a role in regulating sports-related event contracts.",
    bodyOriginal: `The 6th U.S. Circuit Court of Appeals ruled on Friday that states have a right to regulate sports-related event contracts on prediction market platforms, marking a second major legal defeat for the industry as a fight at the U.S. Supreme Court looms.
In a unanimous decision, the three judge panel said that Ohio and Tennessee are permitted to apply their state gambling laws to Kalshi's sports-related event contracts.
"We hold that Kalshi has not shown that its sports-event contracts satisfy the statutory definition of a 'swap' so as to fall within the scope of the CFTC's 'exclusive jurisdiction,'" the opinion said.
Kalshi and other prediction market platforms argue all event contracts are swaps, a type of financial derivative that is regulated by the Commodity Futures Trading Commission. However, states assert that platforms' sports-related offerings amount to gambling, and thus should be regulated by their laws related to sports betting.
This disagreement has spawned a legal battle across the country as states sue platforms for operating what they often claim are illegal gambling operations, while exchanges also sue states to block them from enforcing local laws on what they argue should be federally-regulated financial exchanges.
The CFTC has sued nine states to defend what it believes is its exclusive right to regulate event contracts, given to it by the Commodity Exchange Act. But the 6th Circuit panel rejected that notion.
"Even assuming that Kalshi's sports-event contracts are swaps, we alternatively hold that the CEA neither expressly nor impliedly preempts Ohio's or Tennessee's gambling laws," the opinion said. The decision overturns a Tennessee federal district court ruling that sided with Kalshi, and reaffirms a decision by a federal district court in Ohio that sided with the states' argument.
Kalshi nor the CFTC immediately responded to requests for comment. CNBC has also reached out to the Ohio and Tennessee attorneys general offices for comments.
The latest ruling now means prediction market platforms have notched two losses in legal fights at the appeals court level. The 9th U.S. Circuit Court of Appeals ruled last month that Nevada has a right to regulate sports-related event contracts, stating that they were sports bets and not swaps. Meanwhile, the 3rd U.S. Circuit Court of Appeals ruled against New Jersey in April and said the CFTC has the exclusive right to regulate all swaps, no matter the contract type.
New Jersey appealed that decision in a petition to the Supreme Court earlier this month. It is not clear whether the Supreme Court will take up the case now, or wait until further decisions from circuit courts on the issue of sports-related event contracts are delivered.
Disclosure: CNBC and Kalshi have a commercial relationship that includes customer acquisition and a minority investment.`,
    bodyJa: `The 6th U.S. Circuit Court of Appeals ruled on Friday that states have a right to regulate sports-related event contracts on prediction market platforms, marking a second major legal defeat for the industry as a fight at the U.S. Supreme Court looms.
In a unanimous decision, the three judge panel said that Ohio and Tennessee are permitted to apply their state gambling laws to Kalshi's sports-related event contracts.
"We hold that Kalshi has not shown that its sports-event contracts satisfy the statutory definition of a 'swap' so as to fall within the scope of the CFTC's 'exclusive jurisdiction,'" the opinion said.
Kalshi and other prediction market platforms argue all event contracts are swaps, a type of financial derivative that is regulated by the Commodity Futures Trading Commission. However, states assert that platforms' sports-related offerings amount to gambling, and thus should be regulated by their laws related to sports betting.
This disagreement has spawned a legal battle across the country as states sue platforms for operating what they often claim are illegal gambling operations, while exchanges also sue states to block them from enforcing local laws on what they argue should be federally-regulated financial exchanges.
The CFTC has sued nine states to defend what it believes is its exclusive right to regulate event contracts, given to it by the Commodity Exchange Act. But the 6th Circuit panel rejected that notion.
"Even assuming that Kalshi's sports-event contracts are swaps, we alternatively hold that the CEA neither expressly nor impliedly preempts Ohio's or Tennessee's gambling laws," the opinion said. The decision overturns a Tennessee federal district court ruling that sided with Kalshi, and reaffirms a decision by a federal district court in Ohio that sided with the states' argument.
Kalshi nor the CFTC immediately responded to requests for comment. CNBC has also reached out to the Ohio and Tennessee attorneys general offices for comments.
The latest ruling now means prediction market platforms have notched two losses in legal fights at the appeals court level. The 9th U.S. Circuit Court of Appeals ruled last month that Nevada has a right to regulate sports-related event contracts, stating that they were sports bets and not swaps. Meanwhile, the 3rd U.S. Circuit Court of Appeals ruled against New Jersey in April and said the CFTC has the exclusive right to regulate all swaps, no matter the contract type.
New Jersey appealed that decision in a petition to the Supreme Court earlier this month. It is not clear whether the Supreme Court will take up the case now, or wait until further decisions from circuit courts on the issue of sports-related event contracts are delivered.
Disclosure: CNBC and Kalshi have a commercial relationship that includes customer acquisition and a minority investment.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/25/appeals-court-rules-states-can-regulate-sports-prediction-markets.html",
    publishedAt: "2026-09-25T21:06:24+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 7,
  },
  {
    id: "microsoft-s-stock-has-roared-back-to-lif-a72b278f",
    title: "Microsoft’s stock has roared back to life, closing at its highest level of the year",
    titleJa: "Microsoft’s stock has roared back to life, closing at its highest level of the year",
    summaryJa: "Microsoft shares got off to a rough start this year, but investors have warmed to the company’s AI narrative over the last few months.",
    bodyOriginal: `Microsoft shares got off to a rough start this year, but investors have warmed to the company’s AI narrative over the last few months.`,
    bodyJa: `Microsoft shares got off to a rough start this year, but investors have warmed to the company’s AI narrative over the last few months.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/microsofts-stock-has-roared-back-to-life-and-is-now-headed-for-its-highest-close-of-the-year-89e4d596?mod=mw_rss_topstories",
    publishedAt: "2026-09-25T21:04:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-28113577",
    readTime: 2,
  },
  {
    id: "coca-cola-hires-rob-gehring-from-monster-cd7c9407",
    title: "Coca-Cola hires Rob Gehring from Monster Energy to run its North American operations",
    titleJa: "Coca-Cola hires Rob Gehring from Monster Energy to run its North American operations",
    summaryJa: "Coca-Cola is trying to maintain growth as consumers face higher gas and grocery prices.",
    bodyOriginal: `Rob Gehring, the head of Monster Energy's Americas business, will leave to run Coca-Cola's North America unit, the companies said Friday.
He will take over the position on Dec. 1.
The move comes as Coke tries to maintain growth while U.S. consumers cut back on spending in the face of higher gas and grocery prices. Despite those dynamics, the beverage giant posted net sales growth of 7% in the second quarter, as volume — a key measure of demand — rose 3% in North America.
Though Monster Energy parent Monster Beverage is considerably smaller than Coke, its sales have soared in part due to innovation in the energy drink space. The company reported net sales growth of 20% in its second quarter.
Coke is also investing in developing new beverages beyond its core soda offerings, including refreshers and dirty sodas.
Gehring, 59, took on his previous role at Monster in February after serving as chief growth officer since 2024. In a press release, Coke said he was "part of the leadership team that drove the company's growth agenda and modernized commercial capabilities."
Before joining Monster, Gehring was CEO of Swire Coca-Cola USA, a major bottler of Coke products in the western U.S.
Coke shares have climbed more than 25% this year, while Monster's stock has risen more than 12%.`,
    bodyJa: `Rob Gehring, the head of Monster Energy's Americas business, will leave to run Coca-Cola's North America unit, the companies said Friday.
He will take over the position on Dec. 1.
The move comes as Coke tries to maintain growth while U.S. consumers cut back on spending in the face of higher gas and grocery prices. Despite those dynamics, the beverage giant posted net sales growth of 7% in the second quarter, as volume — a key measure of demand — rose 3% in North America.
Though Monster Energy parent Monster Beverage is considerably smaller than Coke, its sales have soared in part due to innovation in the energy drink space. The company reported net sales growth of 20% in its second quarter.
Coke is also investing in developing new beverages beyond its core soda offerings, including refreshers and dirty sodas.
Gehring, 59, took on his previous role at Monster in February after serving as chief growth officer since 2024. In a press release, Coke said he was "part of the leadership team that drove the company's growth agenda and modernized commercial capabilities."
Before joining Monster, Gehring was CEO of Swire Coca-Cola USA, a major bottler of Coke products in the western U.S.
Coke shares have climbed more than 25% this year, while Monster's stock has risen more than 12%.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/25/monster-coca-cola-rob-gehring.html",
    publishedAt: "2026-09-25T21:02:20+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "how-recent-grads-and-college-students-sh-fc12883c",
    title: "How recent grads and college students should be thinking about AI, the CV, and the job market",
    titleJa: "How recent grads and college students should be thinking about AI, the CV, and the job market",
    summaryJa: "It is getting harder for college students and recent graduates to be seen in the job market as AI is used as a hiring tool and demanded by employers as a skill.",
    bodyOriginal: `Artificial intelligence is transforming the hiring process, leaving many college students and recent graduates searching for ways to stand out in an increasingly competitive job market. As employers adopt AI-powered screening tools, young job seekers say landing an interview can feel more challenging than ever.
Michela DiLorenzo, a student at Seton Hall and student editor at The Setonian who has covered the careers sentiment on campus, recently wrote that post-graduation plans for many of her peers have changed as they enter an uncertain job market. Rather than immediately pursuing graduate degrees, some are taking summer jobs or other work to save money as they consider their next steps.
"AI is really changing the motivation that students have going into the job market. It's changing the hiring process, how people are formatting their resumes and just overall, how students are approaching life post-grad," DiLorenzo said in an interview with CNBC's Jon Fortt on Friday.
According to the Federal Reserve Bank of New York, college graduates in the 22- to 27-year-old age bracket had an unemployment rate of 5.7% as of June 2026, significantly above the national average and a full percentage point higher than it was two years ago for their cohort. The unemployment rate for all young workers as of June was 7.2%. Meanwhile, the underemployment rate — college graduates working in jobs that do not require a bachelor's degree — has reached 42% for graduates of recent years, compared to 33.7% for all college graduates.
For students, the challenge is not only finding an opportunity but getting noticed. Employers are using AI to screen and review applications, while students are trying to figure out how to incorporate it into their job hunt.
Sixty-six percent of recruiters said at the beginning of 2026 that they were planning to increase their use of AI for pre-screening interviews, according to LinkedIn research, while 81% of job seekers said they had used or planned to use AI in their job search. That puts more of the earliest stages of the job search into automated systems.
There are also concerns that AI is eliminating jobs that are at the entry level of organizations, but the research remains preliminary in nature. The Federal Reserve Bank of New York has found an overall slowdown in hiring in recent years, but not specifically concentrated in entry-level jobs with higher AI exposure.
Based on its study of job postings, the NY Fed wrote, "while AI may be contributing to recent labor market developments, it is not the main driver of the slowdown in hiring."
Its survey work with employers found that they "mostly intend to incorporate AI mainly via retraining, with limited effects on hiring."
Students are trying to understand how their materials may be evaluated before reaching a hiring manager. Students are tailoring resumes to specific job descriptions, emphasizing relevant skills and using language that aligns with the position.
Handshake, an early-career platform for students and job seekers which has worked with OpenAI on tools to increase student tech skills, says graduating seniors in 2026 mentioned AI skills on their resumes at twice the rate of the class of 2022. Its analysis found that 74% of those mentions were tied to real-world projects rather than coursework, an indication students are trying to demonstrate their applied experience.
"Early talent is already starting to answer this shift by sharing real projects directly on their Handshake profiles, turning AI from a claimed skill into demonstrated capability," Handshake wrote in a blog post. "The data tells us that early talent isn't being displaced by AI—they're being amplified by it. ... in an AI-driven workforce, resumes alone aren't enough."
The National Association of Colleges + Employers says its recent research shows more employers expecting AI skills in new hires, with the requirement cited in 16.5% of job descriptions in the spring versus 10.5% last fall. Overall, 28% of employers say they are seeking early career talent who can use AI in their work, according to NACE.
NACE is concerned about what it calls a "striking disconnect" between some members of Gen Z and the labor market. "Employers are increasingly asking graduates to be ready for AI, while a significant portion of students are asking whether AI deserves a place in their work at all," Shawn VanDerziel, NACE president and CEO, stated in the research release.
In NACE's 2026 Student Survey, close to one-third of graduating seniors said AI skills would be "of little or no importance to their future career."
Over half said they were not building AI skills for the future and were not using AI in their job search.
"Right now, it is too early to tell what the long-term impact of AI will be on early career talent, but it is obvious that students have mixed expectations and views on the ways AI will impact their careers," VanDerziel stated.
DiLorenzo's reporting showed how uncertainty is affecting students at Seton Hall. One student said she had received only two interviews after submitting 50 applications. Another said he had applied for as many as 150 jobs, describing the process as impersonal and discouraging.
While AI can help employers manage a high number of applications, students say they still want meaningful feedback and a clearer path to being seen by a person.
At a broader labor market level, being seen as a person is becoming a significant problem for the youngest workers. The companies that are adopting AI faster are also hiring faster than peers, according to Evan Sohn, founder and CEO of labor market research firm Revelio Labs. But that may not be of much help to recent college grads, he told CNBC's Kelly Evans in a recent interview, because these firms are also prioritizing senior-level roles over junior-level positions. "AI is really making it difficult for the entry-level people to get in there. ... The 22- to 25-year-olds are really getting lost in the shuffle," he said.
Nevertheless, Sohn's advice for all job seekers is to "be AI-forward."
"Be ahead of everybody else when it comes to AI," he said.`,
    bodyJa: `Artificial intelligence is transforming the hiring process, leaving many college students and recent graduates searching for ways to stand out in an increasingly competitive job market. As employers adopt AI-powered screening tools, young job seekers say landing an interview can feel more challenging than ever.
Michela DiLorenzo, a student at Seton Hall and student editor at The Setonian who has covered the careers sentiment on campus, recently wrote that post-graduation plans for many of her peers have changed as they enter an uncertain job market. Rather than immediately pursuing graduate degrees, some are taking summer jobs or other work to save money as they consider their next steps.
"AI is really changing the motivation that students have going into the job market. It's changing the hiring process, how people are formatting their resumes and just overall, how students are approaching life post-grad," DiLorenzo said in an interview with CNBC's Jon Fortt on Friday.
According to the Federal Reserve Bank of New York, college graduates in the 22- to 27-year-old age bracket had an unemployment rate of 5.7% as of June 2026, significantly above the national average and a full percentage point higher than it was two years ago for their cohort. The unemployment rate for all young workers as of June was 7.2%. Meanwhile, the underemployment rate — college graduates working in jobs that do not require a bachelor's degree — has reached 42% for graduates of recent years, compared to 33.7% for all college graduates.
For students, the challenge is not only finding an opportunity but getting noticed. Employers are using AI to screen and review applications, while students are trying to figure out how to incorporate it into their job hunt.
Sixty-six percent of recruiters said at the beginning of 2026 that they were planning to increase their use of AI for pre-screening interviews, according to LinkedIn research, while 81% of job seekers said they had used or planned to use AI in their job search. That puts more of the earliest stages of the job search into automated systems.
There are also concerns that AI is eliminating jobs that are at the entry level of organizations, but the research remains preliminary in nature. The Federal Reserve Bank of New York has found an overall slowdown in hiring in recent years, but not specifically concentrated in entry-level jobs with higher AI exposure.
Based on its study of job postings, the NY Fed wrote, "while AI may be contributing to recent labor market developments, it is not the main driver of the slowdown in hiring."
Its survey work with employers found that they "mostly intend to incorporate AI mainly via retraining, with limited effects on hiring."
Students are trying to understand how their materials may be evaluated before reaching a hiring manager. Students are tailoring resumes to specific job descriptions, emphasizing relevant skills and using language that aligns with the position.
Handshake, an early-career platform for students and job seekers which has worked with OpenAI on tools to increase student tech skills, says graduating seniors in 2026 mentioned AI skills on their resumes at twice the rate of the class of 2022. Its analysis found that 74% of those mentions were tied to real-world projects rather than coursework, an indication students are trying to demonstrate their applied experience.
"Early talent is already starting to answer this shift by sharing real projects directly on their Handshake profiles, turning AI from a claimed skill into demonstrated capability," Handshake wrote in a blog post. "The data tells us that early talent isn't being displaced by AI—they're being amplified by it. ... in an AI-driven workforce, resumes alone aren't enough."
The National Association of Colleges + Employers says its recent research shows more employers expecting AI skills in new hires, with the requirement cited in 16.5% of job descriptions in the spring versus 10.5% last fall. Overall, 28% of employers say they are seeking early career talent who can use AI in their work, according to NACE.
NACE is concerned about what it calls a "striking disconnect" between some members of Gen Z and the labor market. "Employers are increasingly asking graduates to be ready for AI, while a significant portion of students are asking whether AI deserves a place in their work at all," Shawn VanDerziel, NACE president and CEO, stated in the research release.
In NACE's 2026 Student Survey, close to one-third of graduating seniors said AI skills would be "of little or no importance to their future career."
Over half said they were not building AI skills for the future and were not using AI in their job search.
"Right now, it is too early to tell what the long-term impact of AI will be on early career talent, but it is obvious that students have mixed expectations and views on the ways AI will impact their careers," VanDerziel stated.
DiLorenzo's reporting showed how uncertainty is affecting students at Seton Hall. One student said she had received only two interviews after submitting 50 applications. Another said he had applied for as many as 150 jobs, describing the process as impersonal and discouraging.
While AI can help employers manage a high number of applications, students say they still want meaningful feedback and a clearer path to being seen by a person.
At a broader labor market level, being seen as a person is becoming a significant problem for the youngest workers. The companies that are adopting AI faster are also hiring faster than peers, according to Evan Sohn, founder and CEO of labor market research firm Revelio Labs. But that may not be of much help to recent college grads, he told CNBC's Kelly Evans in a recent interview, because these firms are also prioritizing senior-level roles over junior-level positions. "AI is really making it difficult for the entry-level people to get in there. ... The 22- to 25-year-olds are really getting lost in the shuffle," he said.
Nevertheless, Sohn's advice for all job seekers is to "be AI-forward."
"Be ahead of everybody else when it comes to AI," he said.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/25/ai-jobs-recent-graduates-college-degrees.html",
    publishedAt: "2026-09-25T20:52:09+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "russia-targeting-ordinary-life-with-atta-69d97f27",
    title: "Russia targeting 'ordinary life' with attacks on Ukraine's data centres, Zelensky says",
    titleJa: "Russia targeting 'ordinary life' with attacks on Ukraine's data centres, Zelensky says",
    summaryJa: "Such strikes aim to disrupt \"people's ability to stay connected, study, work\", says Ukraine's president.",
    bodyOriginal: `Russia targeting 'ordinary life' with attacks on Ukraine's data centres, Zelensky says
- Published
President Volodymyr Zelensky says Russia has widened its attacks to target Ukraine's data centres and internet providers, seeking to cause maximum disruption for ordinary people.
"All this affects people's ability to stay connected, study, work," he said.
On Friday a Russian drone hit a business centre in the capital Kyiv, killing four people and damaging a data centre. A separate attack killed a 14-year-old boy. Israel's foreign ministry said he was an Israeli citizen.
Russia confirmed it had targeted a data centre site, saying it was being used by Ukrainian military intelligence.
About 100,000 households in Kyiv and the region suffered internet outages on Wednesday due to strikes.
Some firms have already begun moving data from damaged servers to facilities abroad.
In the north-western city of Lutsk, electronic information boards at public transport stops were not working on Friday, officials said. The city council said this was "due to damage caused by a Russian attack on data centres in Kyiv".
In Friday's social media post, Zelensky wrote: "The Russians are constantly expanding their escalation operation: American and other businesses, data centres, internet providers – for Russia, all ordinary life is simply a target.
"It is important that the world responds to all of this and that Russia feels the response to its terror."
Late on Friday, Zelensky said "additional decisions" had been made at his meeting with Ukraine's top defence and security officials to protect the country's data centres and other critical communications facilities to ensure their continuous operation.
Ukraine's Foreign Minister Andrii Sybiha has said that Russia was seeking to disrupt the flow of "life-saving information" by targeting data centres.
"Rapid alerts about missile and drone threats are essential - they save lives. This is critical civilian infrastructure... It is not a military target. It is essential to keeping everyday life functioning," Sybiha said.
Zelensky's top adviser on defence technologies on Thursday admitted that "there may be local disruptions" following Russian attacks an the cost of internet services could increase to cover the costs of repairs.
But Serhii Beskrestnov stressed that Ukraine's internet network was highly decentralised, so the country "will not be left without internet access".
The data centre hit by Russia on Friday was run by Datagroup. The company said its specialists were assessing the damage after the daytime attack but all services "continue to operate from backup sites".
Kyiv Mayor Vitaliy Klitschko said on Friday evening that seven people had been killed and 59 injured after Russian overnight attacks.
Russia's defence ministry later confirmed it had hit the Datagroup site, which it said was being used by the Ukrainian military's intelligence.
Footage showing the damaged Inkom business centre that housed Datagroup has since been verified by the BBC.
The Russian defence ministry also said that over the past few days its forces have targeted a number of data processing and telecommunications centres in Ukraine, including New-Telco, United DC, Kyivstar and Parkovyi.
In recent weeks, Moscow has also intensified its strikes on Ukraine's energy and railway infrastructure – seeking to cause maximum damage as winter approaches.
Ukraine's military has been hitting Russian oil refineries and logistics hubs, saying they help finance Russia's ongoing war effort.
Russian President Vladimir Putin launched a full-scale invasion of Ukraine in 2022, and Moscow currently controls about 20% of Ukrainian territory.
Speaking to reporters late on Friday, Putin said Moscow would "give careful thought" to the idea of resuming direct peace negotiations with Kyiv, citing last week's "massive" Ukrainian attack on the capital Moscow and other recent strikes.
"It's all possible," he said, but stressed that Ukraine "must feel our retaliatory strikes", and that all decisions would be taken "based on the Russian Federation's interests".
Zelensky had earlier said he was ready for trilateral talks that would also involve the US.
Kyiv and its European allies have repeatedly accused Putin of rejecting any peace negotiations, saying he was seeking to seize more Ukrainian territory.
Speaking to the media, Putin also restated his position that Moscow had "no plans" and "no reason" to attack Europe. He had made similar statements about Ukraine, before launching his full-scale invasion almost five years ago.
In a separate development on Friday, the European Union agreed to release €6.6bn for Ukraine, the bloc's top diplomat Kaja Kallas said, describing this as "good news for Ukraine and bad news for Russia".
This includes €900 million for the EU's Military Assistance Mission for Ukraine, and a €1 billion fund for joint procurement of equipment, she said on X.
"Moscow's hybrid attacks try to intimidate Europe into scaling back its support for Ukraine. Europe is doing the opposite."
Meanwhile, Poland's prosecutors opened an investigation in what they said was an arson attack on a Starlink satellite station in Wola Krobowska on Wednesday.
In a statement, the national prosecutor's office said "there is a reasonable suspicion... that the perpetrators acted on the orders of the Russian special services". Moscow has not commented.
The station transmits internet traffic through Poland to countries including Ukraine, and uses SpaceX systems that provide connectivity via Starlink terminals.
In recent weeks a number of European Nato members have warned Russia may be preparing hybrid attacks to test their commitment to supporting Ukraine, which Moscow denies.
Earlier this month, Germany blamed Russia for an attempted drone attack on Leipzig/Halle Airport, while France has ordered a plan to protect critical infrastructure and defence industry sites.`,
    bodyJa: `Russia targeting 'ordinary life' with attacks on Ukraine's data centres, Zelensky says
- Published
President Volodymyr Zelensky says Russia has widened its attacks to target Ukraine's data centres and internet providers, seeking to cause maximum disruption for ordinary people.
"All this affects people's ability to stay connected, study, work," he said.
On Friday a Russian drone hit a business centre in the capital Kyiv, killing four people and damaging a data centre. A separate attack killed a 14-year-old boy. Israel's foreign ministry said he was an Israeli citizen.
Russia confirmed it had targeted a data centre site, saying it was being used by Ukrainian military intelligence.
About 100,000 households in Kyiv and the region suffered internet outages on Wednesday due to strikes.
Some firms have already begun moving data from damaged servers to facilities abroad.
In the north-western city of Lutsk, electronic information boards at public transport stops were not working on Friday, officials said. The city council said this was "due to damage caused by a Russian attack on data centres in Kyiv".
In Friday's social media post, Zelensky wrote: "The Russians are constantly expanding their escalation operation: American and other businesses, data centres, internet providers – for Russia, all ordinary life is simply a target.
"It is important that the world responds to all of this and that Russia feels the response to its terror."
Late on Friday, Zelensky said "additional decisions" had been made at his meeting with Ukraine's top defence and security officials to protect the country's data centres and other critical communications facilities to ensure their continuous operation.
Ukraine's Foreign Minister Andrii Sybiha has said that Russia was seeking to disrupt the flow of "life-saving information" by targeting data centres.
"Rapid alerts about missile and drone threats are essential - they save lives. This is critical civilian infrastructure... It is not a military target. It is essential to keeping everyday life functioning," Sybiha said.
Zelensky's top adviser on defence technologies on Thursday admitted that "there may be local disruptions" following Russian attacks an the cost of internet services could increase to cover the costs of repairs.
But Serhii Beskrestnov stressed that Ukraine's internet network was highly decentralised, so the country "will not be left without internet access".
The data centre hit by Russia on Friday was run by Datagroup. The company said its specialists were assessing the damage after the daytime attack but all services "continue to operate from backup sites".
Kyiv Mayor Vitaliy Klitschko said on Friday evening that seven people had been killed and 59 injured after Russian overnight attacks.
Russia's defence ministry later confirmed it had hit the Datagroup site, which it said was being used by the Ukrainian military's intelligence.
Footage showing the damaged Inkom business centre that housed Datagroup has since been verified by the BBC.
The Russian defence ministry also said that over the past few days its forces have targeted a number of data processing and telecommunications centres in Ukraine, including New-Telco, United DC, Kyivstar and Parkovyi.
In recent weeks, Moscow has also intensified its strikes on Ukraine's energy and railway infrastructure – seeking to cause maximum damage as winter approaches.
Ukraine's military has been hitting Russian oil refineries and logistics hubs, saying they help finance Russia's ongoing war effort.
Russian President Vladimir Putin launched a full-scale invasion of Ukraine in 2022, and Moscow currently controls about 20% of Ukrainian territory.
Speaking to reporters late on Friday, Putin said Moscow would "give careful thought" to the idea of resuming direct peace negotiations with Kyiv, citing last week's "massive" Ukrainian attack on the capital Moscow and other recent strikes.
"It's all possible," he said, but stressed that Ukraine "must feel our retaliatory strikes", and that all decisions would be taken "based on the Russian Federation's interests".
Zelensky had earlier said he was ready for trilateral talks that would also involve the US.
Kyiv and its European allies have repeatedly accused Putin of rejecting any peace negotiations, saying he was seeking to seize more Ukrainian territory.
Speaking to the media, Putin also restated his position that Moscow had "no plans" and "no reason" to attack Europe. He had made similar statements about Ukraine, before launching his full-scale invasion almost five years ago.
In a separate development on Friday, the European Union agreed to release €6.6bn for Ukraine, the bloc's top diplomat Kaja Kallas said, describing this as "good news for Ukraine and bad news for Russia".
This includes €900 million for the EU's Military Assistance Mission for Ukraine, and a €1 billion fund for joint procurement of equipment, she said on X.
"Moscow's hybrid attacks try to intimidate Europe into scaling back its support for Ukraine. Europe is doing the opposite."
Meanwhile, Poland's prosecutors opened an investigation in what they said was an arson attack on a Starlink satellite station in Wola Krobowska on Wednesday.
In a statement, the national prosecutor's office said "there is a reasonable suspicion... that the perpetrators acted on the orders of the Russian special services". Moscow has not commented.
The station transmits internet traffic through Poland to countries including Ukraine, and uses SpaceX systems that provide connectivity via Starlink terminals.
In recent weeks a number of European Nato members have warned Russia may be preparing hybrid attacks to test their commitment to supporting Ukraine, which Moscow denies.
Earlier this month, Germany blamed Russia for an attempted drone attack on Leipzig/Halle Airport, while France has ordered a plan to protect critical infrastructure and defence industry sites.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c84gkwgk7d06o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-25T20:47:49+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/7588/live/6c3865d0-b900-11f1-83cd-2998f68d9572.png",
    readTime: 10,
  },
  {
    id: "a-10-risk-free-yield-for-some-yes-7f6de0e5",
    title: "A 10% risk-free yield? For some, yes.",
    titleJa: "A 10% risk-free yield? For some, yes.",
    summaryJa: "This could be a bargain, especially for very high earners and those in high-tax locations.",
    bodyOriginal: `This could be a bargain, especially for very high earners and those in high-tax locations.`,
    bodyJa: `This could be a bargain, especially for very high earners and those in high-tax locations.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/a-10-risk-free-yield-for-some-yes-0d1fa51a?mod=mw_rss_topstories",
    publishedAt: "2026-09-25T20:32:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-11433023",
    readTime: 2,
  },
  {
    id: "these-under-the-radar-risk-factors-may-e-8e4aff68",
    title: "These under-the-radar risk factors may explain why some older people are more vulnerable to scams",
    titleJa: "These under-the-radar risk factors may explain why some older people are more vulnerable to scams",
    summaryJa: "Criminals use sophisticated techniques to form deep emotional attachments to their victims",
    bodyOriginal: `Criminals use sophisticated techniques to form deep emotional attachments to their victims`,
    bodyJa: `Criminals use sophisticated techniques to form deep emotional attachments to their victims`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/these-under-the-radar-risk-factors-may-explain-why-some-older-people-are-more-vulnerable-to-scams-865182dc?mod=mw_rss_topstories",
    publishedAt: "2026-09-25T20:19:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-78794591",
    readTime: 2,
  },
  {
    id: "clubs-seek-legal-advice-over-man-city-ch-3fecdd4b",
    title: "Clubs seek legal advice over Man City charges compensation",
    titleJa: "Clubs seek legal advice over Man City charges compensation",
    summaryJa: "Premier League clubs are seeking legal advice as to whether they would have a compensation claim over the Manchester City 115 charges case.",
    bodyOriginal: `Clubs seek legal advice over Man City charges compensation
- Published
Premier League clubs are seeking legal advice about compensation after Manchester City were found guilty of the vast majority of 115 breaches of financial rules they had been accused of by the Premier League.
Sanctions on the club are yet to be announced, but repercussions could include a points deduction, expulsion from the Premier League or a huge fine. BBC Sport has been told that the club will appeal.
The news that City had been found guilty was broken by the Athletic,, external which reported that 114 of the 115 counts were upheld.
It came 1,327 days after City were charged by the Premier League in February 2023 following a four-year investigation, and 22 months since a hearing by an independent commission concluded.
No official announcement has been made by the Premier League, which has declined to comment.
BBC Sport has been told the independent panel has ruled, and the majority of the charges have been upheld.
Manchester City were accused of a wide-range of rule breaches which centred around claims that they inflated sponsorship revenue from connected companies and made other "off the books" payments to circumvent football's financial rules.
The seismic decisions have left a huge number of questions about what will happen next, what City's punishment might be and how the current season will be affected.
And one possibility emerging is that rival Premier League sides may take legal action for compensation, claiming they have been impacted by City's actions.
A number of sides, prior to Friday's news, had already started seeking advice over whether they would have a case for financial compensation.
One source, who held a senior executive position at one Premier League club before moving to another, said they expected clubs to submit individual compensation claims against Manchester City.
However, another leading lawyer told the BBC that process could even be centralised by the league.
Such a move is not unprecedented. In June, Everton were told they must pay Burnley £35m after they broke profit and sustainability regulations (PSR) over a three-year period.
Burnley argued the breach impacted their chances of staying in the Premier League, and sought compensation for the losses associated with being relegated.
Everton have appealed, with sources saying they would "robustly and thoroughly" contest the ruling, but it provides an interesting backdrop to the Manchester City case.
Meanwhile, it also emerged that:
Other Premier League clubs have been formally told about the independent panel's decision. A select group of club directors were informed by email and had to sign a non-disclosure agreement before they could read the document, a source told the BBC. It is not yet known when the decision of the panel will be announced officially.
Manchester City deny wrongdoing but being found guilty on the most serious charges means they could be looking at a points deduction serious enough to relegate them, large fines or even expulsion from the Premier League
A sanctions hearing will need to take place to decide the punishment. That has not happened yet and could take months.
An appeal would then take place - and while it is possible the punishment is not made public until after that, there remains the possibility that any sanctions will be communicated before any appeal takes place
An appeal process could mean the uncertainty surrounding the case continues to cloud the top flight
It is understood a number of City players do not have relegation release clauses in their contracts in the event of the club losing their Premier League status as a result of any sanctions
Manchester City declined to comment on whether they had been found guilty, instead providing a statement which read: "Premier League process remains ongoing with significant elements to be completed, and subject to strict confidentiality.
"The club has diligently respected due process for eight years on the basis that the Premier League board and executive would behave as an independent, impartial and fair-minded regulator, free from partisan influence."
Man City and the 115 charges - key questions answered
- Published14 hours ago
Man City fans face up to reality of guilty verdict
- Published14 hours ago
Everton told to pay Burnley £35m over PSR breach
- Published10 June
What is the background?
In February 2023, City were charged with more than 100 breaches of the Premier League's financial rules following a four-year investigation.
The club was referred to an independent commission over allegations it breached financial rules between 2009 and 2018.
The hearing began in September 2024 behind closed doors and concluded that December after around 12 weeks.
The Premier League claimed City breached rules requiring the club to provide "accurate financial information that gives a true and fair view of the club's financial position".
City strongly denied all charges and have said their case is supported by a "comprehensive body of irrefutable evidence".
The club won eight trophies in the period covered by the case, including three Premier League titles, three League Cups, one Community Shield and one FA Cup.
The charges cover the mangerial tenures of Roberto Mancini and Manuel Pellegrini, and the first two years under Pep Guardiola, who left the club after 10 seasons at the end of the 2025-26 campaign.
A separate case between City and the Premier League was also heard last year.
In 2024, an independent arbitration panel found against aspects of the league's Associated Party Transaction regulations (APTs) after City launched an arbitration challenge.
A tribunal held in February 2025 found the Premier League's rules governing sponsorship deals from the period between 2021 and 2024 are "void and unenforceable".
City and the Premier League reached a settlement in September 2025, with the club accepting the APT rules are valid and binding and both parties agreeing to terminate legal proceedings.
The rules were formed by the Premier League to prevent clubs from profiting from commercial deals with companies linked to their owners that are deemed above "fair market value".
What were the 115 charges?
• 54x Failure to provide accurate financial information 2009-10 to 2017-18.
• 14x Failure to provide accurate details for player and manager payments from 2009-10 to 2017-18.
• 5x Failure to comply with Uefa's rules including Financial Fair Play (FFP) 2013-14 to 2017-18.
• 7x Breaching Premier League's Profitability and Sustainability Rules (PSR) 2015-16 to 2017-18.
• 35x Failure to co-operate with Premier League investigations December 2018 - Feb 2023.
There have been suggestions by the Times and football finance expert Kieran Maguire the number of charges is as high as 130. BBC Sport has been unable to verify this.
Follow Manchester City on BBC Sounds
Pre-match, post-match and topical City content
Subscribe and listen for everything you love about City`,
    bodyJa: `Clubs seek legal advice over Man City charges compensation
- Published
Premier League clubs are seeking legal advice about compensation after Manchester City were found guilty of the vast majority of 115 breaches of financial rules they had been accused of by the Premier League.
Sanctions on the club are yet to be announced, but repercussions could include a points deduction, expulsion from the Premier League or a huge fine. BBC Sport has been told that the club will appeal.
The news that City had been found guilty was broken by the Athletic,, external which reported that 114 of the 115 counts were upheld.
It came 1,327 days after City were charged by the Premier League in February 2023 following a four-year investigation, and 22 months since a hearing by an independent commission concluded.
No official announcement has been made by the Premier League, which has declined to comment.
BBC Sport has been told the independent panel has ruled, and the majority of the charges have been upheld.
Manchester City were accused of a wide-range of rule breaches which centred around claims that they inflated sponsorship revenue from connected companies and made other "off the books" payments to circumvent football's financial rules.
The seismic decisions have left a huge number of questions about what will happen next, what City's punishment might be and how the current season will be affected.
And one possibility emerging is that rival Premier League sides may take legal action for compensation, claiming they have been impacted by City's actions.
A number of sides, prior to Friday's news, had already started seeking advice over whether they would have a case for financial compensation.
One source, who held a senior executive position at one Premier League club before moving to another, said they expected clubs to submit individual compensation claims against Manchester City.
However, another leading lawyer told the BBC that process could even be centralised by the league.
Such a move is not unprecedented. In June, Everton were told they must pay Burnley £35m after they broke profit and sustainability regulations (PSR) over a three-year period.
Burnley argued the breach impacted their chances of staying in the Premier League, and sought compensation for the losses associated with being relegated.
Everton have appealed, with sources saying they would "robustly and thoroughly" contest the ruling, but it provides an interesting backdrop to the Manchester City case.
Meanwhile, it also emerged that:
Other Premier League clubs have been formally told about the independent panel's decision. A select group of club directors were informed by email and had to sign a non-disclosure agreement before they could read the document, a source told the BBC. It is not yet known when the decision of the panel will be announced officially.
Manchester City deny wrongdoing but being found guilty on the most serious charges means they could be looking at a points deduction serious enough to relegate them, large fines or even expulsion from the Premier League
A sanctions hearing will need to take place to decide the punishment. That has not happened yet and could take months.
An appeal would then take place - and while it is possible the punishment is not made public until after that, there remains the possibility that any sanctions will be communicated before any appeal takes place
An appeal process could mean the uncertainty surrounding the case continues to cloud the top flight
It is understood a number of City players do not have relegation release clauses in their contracts in the event of the club losing their Premier League status as a result of any sanctions
Manchester City declined to comment on whether they had been found guilty, instead providing a statement which read: "Premier League process remains ongoing with significant elements to be completed, and subject to strict confidentiality.
"The club has diligently respected due process for eight years on the basis that the Premier League board and executive would behave as an independent, impartial and fair-minded regulator, free from partisan influence."
Man City and the 115 charges - key questions answered
- Published14 hours ago
Man City fans face up to reality of guilty verdict
- Published14 hours ago
Everton told to pay Burnley £35m over PSR breach
- Published10 June
What is the background?
In February 2023, City were charged with more than 100 breaches of the Premier League's financial rules following a four-year investigation.
The club was referred to an independent commission over allegations it breached financial rules between 2009 and 2018.
The hearing began in September 2024 behind closed doors and concluded that December after around 12 weeks.
The Premier League claimed City breached rules requiring the club to provide "accurate financial information that gives a true and fair view of the club's financial position".
City strongly denied all charges and have said their case is supported by a "comprehensive body of irrefutable evidence".
The club won eight trophies in the period covered by the case, including three Premier League titles, three League Cups, one Community Shield and one FA Cup.
The charges cover the mangerial tenures of Roberto Mancini and Manuel Pellegrini, and the first two years under Pep Guardiola, who left the club after 10 seasons at the end of the 2025-26 campaign.
A separate case between City and the Premier League was also heard last year.
In 2024, an independent arbitration panel found against aspects of the league's Associated Party Transaction regulations (APTs) after City launched an arbitration challenge.
A tribunal held in February 2025 found the Premier League's rules governing sponsorship deals from the period between 2021 and 2024 are "void and unenforceable".
City and the Premier League reached a settlement in September 2025, with the club accepting the APT rules are valid and binding and both parties agreeing to terminate legal proceedings.
The rules were formed by the Premier League to prevent clubs from profiting from commercial deals with companies linked to their owners that are deemed above "fair market value".
What were the 115 charges?
• 54x Failure to provide accurate financial information 2009-10 to 2017-18.
• 14x Failure to provide accurate details for player and manager payments from 2009-10 to 2017-18.
• 5x Failure to comply with Uefa's rules including Financial Fair Play (FFP) 2013-14 to 2017-18.
• 7x Breaching Premier League's Profitability and Sustainability Rules (PSR) 2015-16 to 2017-18.
• 35x Failure to co-operate with Premier League investigations December 2018 - Feb 2023.
There have been suggestions by the Times and football finance expert Kieran Maguire the number of charges is as high as 130. BBC Sport has been unable to verify this.
Follow Manchester City on BBC Sounds
Pre-match, post-match and topical City content
Subscribe and listen for everything you love about City`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/sport/football/articles/cr89jjwy4nqpo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-25T20:13:53+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/588a/live/72e11970-b96b-11f1-b55e-350150ef61ab.jpg",
    readTime: 10,
  },
  {
    id: "man-city-found-guilty-of-breaking-financ-21380120",
    title: "Man City found guilty of breaking financial rules",
    titleJa: "Man City found guilty of breaking financial rules",
    summaryJa: "Manchester City have been found guilty of breaking the majority of the 115 financial rules they were accused of breaching.",
    bodyOriginal: `Man City found guilty of breaking financial rules
- Published
Manchester City have been found guilty of breaking the majority of the 115 financial rules they were accused of breaching.
The Athletic , externalis reporting that the sanctions have not been decided but that the independent panel has reached its decision, finding the club guilty of all but one count.
The Premier League declined to comment.
Asked if the report was correct, City did not comment either way.
Instead they released a statement saying the "Premier League process remains ongoing with significant elements to be completed, and subject to strict confidentiality".
"The club has diligently respected due process for eight years on the basis that the Premier League board and executive would behave as an independent, impartial and fair-minded regulator, free from partisan influence," it added.
BBC Sport has also been told that, in the event of being found guilty, City will appeal against the findings.
Other Premier League clubs are believed to have been informed about the independent panel's decision and have sought legal advice as to whether they would have a compensation claim.
Clubs seek legal advice over Man City charges compensation
- Published8 hours ago
Relegation? Titles stripped? Appeals? What next for Man City
- Published7 hours ago
What is the background?
In February 2023, City were charged with more than 100 breaches of the Premier League's financial rules following a four-year investigation.
The club was referred to an independent commission over allegations it breached financial rules between 2009 and 2018.
The hearing began in September 2024 behind closed doors and concluded that December after around 12 weeks.
The Premier League claimed City breached rules requiring the club to provide "accurate financial information that gives a true and fair view of the club's financial position".
City strongly denied all charges and have said their case is supported by a "comprehensive body of irrefutable evidence".
The club won eight trophies in the period covered by the case, including three Premier League titles, three League Cups, one Community Shield and one FA Cup.
The charges cover the mangerial tenures of Roberto Mancini and Manuel Pellegrini, and the first two years under Pep Guardiola, who left the club after 10 seasons at the end of the 2025-26 campaign.
A separate case between City and the Premier League was also heard last year.
In 2024, an independent arbitration panel found against aspects of the league's Associated Party Transaction regulations (APTs) after City launched an arbitration challenge.
A tribunal held in February 2025 found the Premier League's rules governing sponsorship deals from the period between 2021 and 2024 are "void and unenforceable".
City and the Premier League reached a settlement in September 2025, with the club accepting the APT rules are valid and binding and both parties agreeing to terminate legal proceedings.
The rules were formed by the Premier League to prevent clubs from profiting from commercial deals with companies linked to their owners that are deemed above "fair market value".
What were the 115 charges?
• 54x Failure to provide accurate financial information 2009-10 to 2017-18.
• 14x Failure to provide accurate details for player and manager payments from 2009-10 to 2017-18.
• 5x Failure to comply with Uefa's rules including Financial Fair Play (FFP) 2013-14 to 2017-18.
• 7x Breaching Premier League's Profitability and Sustainability Rules (PSR) 2015-16 to 2017-18.
• 35x Failure to co-operate with Premier League investigations December 2018 - Feb 2023.
There have been suggestions by the Times and football finance expert Kieran Maguire the number of charges is as high as 130. BBC Sport has been unable to verify this.`,
    bodyJa: `Man City found guilty of breaking financial rules
- Published
Manchester City have been found guilty of breaking the majority of the 115 financial rules they were accused of breaching.
The Athletic , externalis reporting that the sanctions have not been decided but that the independent panel has reached its decision, finding the club guilty of all but one count.
The Premier League declined to comment.
Asked if the report was correct, City did not comment either way.
Instead they released a statement saying the "Premier League process remains ongoing with significant elements to be completed, and subject to strict confidentiality".
"The club has diligently respected due process for eight years on the basis that the Premier League board and executive would behave as an independent, impartial and fair-minded regulator, free from partisan influence," it added.
BBC Sport has also been told that, in the event of being found guilty, City will appeal against the findings.
Other Premier League clubs are believed to have been informed about the independent panel's decision and have sought legal advice as to whether they would have a compensation claim.
Clubs seek legal advice over Man City charges compensation
- Published8 hours ago
Relegation? Titles stripped? Appeals? What next for Man City
- Published7 hours ago
What is the background?
In February 2023, City were charged with more than 100 breaches of the Premier League's financial rules following a four-year investigation.
The club was referred to an independent commission over allegations it breached financial rules between 2009 and 2018.
The hearing began in September 2024 behind closed doors and concluded that December after around 12 weeks.
The Premier League claimed City breached rules requiring the club to provide "accurate financial information that gives a true and fair view of the club's financial position".
City strongly denied all charges and have said their case is supported by a "comprehensive body of irrefutable evidence".
The club won eight trophies in the period covered by the case, including three Premier League titles, three League Cups, one Community Shield and one FA Cup.
The charges cover the mangerial tenures of Roberto Mancini and Manuel Pellegrini, and the first two years under Pep Guardiola, who left the club after 10 seasons at the end of the 2025-26 campaign.
A separate case between City and the Premier League was also heard last year.
In 2024, an independent arbitration panel found against aspects of the league's Associated Party Transaction regulations (APTs) after City launched an arbitration challenge.
A tribunal held in February 2025 found the Premier League's rules governing sponsorship deals from the period between 2021 and 2024 are "void and unenforceable".
City and the Premier League reached a settlement in September 2025, with the club accepting the APT rules are valid and binding and both parties agreeing to terminate legal proceedings.
The rules were formed by the Premier League to prevent clubs from profiting from commercial deals with companies linked to their owners that are deemed above "fair market value".
What were the 115 charges?
• 54x Failure to provide accurate financial information 2009-10 to 2017-18.
• 14x Failure to provide accurate details for player and manager payments from 2009-10 to 2017-18.
• 5x Failure to comply with Uefa's rules including Financial Fair Play (FFP) 2013-14 to 2017-18.
• 7x Breaching Premier League's Profitability and Sustainability Rules (PSR) 2015-16 to 2017-18.
• 35x Failure to co-operate with Premier League investigations December 2018 - Feb 2023.
There have been suggestions by the Times and football finance expert Kieran Maguire the number of charges is as high as 130. BBC Sport has been unable to verify this.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/sport/football/articles/cw7v44ezry5go?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-25T20:11:12+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/f162/live/8ef99460-b91c-11f1-b1d1-571ed4d7ff2c.jpg",
    readTime: 10,
  },
  {
    id: "trump-xi-wrap-state-visit-centered-on-sp-235ac99e",
    title: "Trump, Xi wrap state visit centered on spectacle over substance. Here are the top takeaways",
    titleJa: "Trump, Xi wrap state visit centered on spectacle over substance. Here are the top takeaways",
    summaryJa: "President Trump and Chinese leader Xi went heavy on the ceremony and light on deliverables as they danced around Taiwan and Iran during two days in Washington.",
    bodyOriginal: `Chinese leader Xi Jinping ended his first formal trip to Washington in 11 years Friday, capping a highly anticipated state visit with President Donald Trump that saw three days of bonhomie and pageantry but delivered few concrete agreements.
Trump gave Xi a rare airport tarmac greeting, the two leaders enjoyed a splashy state dinner and tea with their spouses and visited the National Archives. In between ceremonial elements, Trump and Xi inked an extension to an existing trade pact, and Xi promised to send a pair of pandas to Atlanta.
What didn't happen were promises of purchases or agreement on addressing artificial intelligence risks, the war in Iran or taking steps toward resolving other vexing world challenges.
A state visit that featured much pomp but little change in circumstances might have been intentional.
"Ahead of the midterms, President Trump's interest is to keep things calm," Scott Kennedy, a Center for Strategic and International Studies senior advisor who studies the Chinese economy. "We have interest rates getting to record highs, and he doesn't want to make markets even more skittish."
For those watching from afar in China, the mood was upbeat.
"I think it's a great success," said Hai Zhao, a director of international political studies at the Chinese Academy of Social Sciences, a state-affiliated think tank. "Chinese people are very happy to see that President Xi is very well received in Washington, D.C.," he said as the Trump-Xi dinner was wrapping up.
Here's what to know about the historic visit:
Trade truce continues
One concrete deliverable came when Treasury Secretary Scott Bessent announced the U.S. and China agreed to continue their soon-to-expire trade truce until Jan. 10, a two-month extension of the agreement inked last year.
Without specifying a date, Xi noted a "new joint arrangement" on bilateral trade, according to Beijing's readout of his meeting with Trump.
The truce, struck after Trump and Xi met in Busan, South Korea, lowered U.S. tariffs and suspended Beijing's controls on exports of rare earths and critical minerals, among other provisions.
China experts told CNBC a shorter extension could slightly favor the U.S., which can use the prospect of renewed trade hostilities as leverage.
Many had expected a longer, six-month extension. But the shorter time frame could give both sides negotiating leverage into future talks between Xi and Trump. They are expected to meet twice more this year: at the Asia-Pacific Economic Cooperation summit in Shenzhen, China, in November, and the G20 in Miami in December.
After those two events, "I think you need to be cautious that things will not stay as calm as they look right now," Kennedy said Friday on CNBC's "Squawk Box Asia."
"As some have said, on the surface, like a polo match, things look relatively calm, but underneath, there's a lot of kicking, and that kicking will become more visible as we get to the new year," he said.
'Thucydides Trap' avoided?
China's rhetoric has grown notably more confident.
"The Thucydides Trap can be overcome," Xi said on his arrival at the White House, according to the Chinese side's official readout.
That contrasts with his rhetorical question when the pair met in May in Beijing of whether the two countries could avoid the Thucydides Trap. The term refers to how tensions historically between a rising and ruling power have often resulted in war.
Xi said Thursday the two countries can have "healthy" competition without confrontation. "It should be a race of catching up with one another, not a wrestle in which one either wins or loses," he said.
Establishing a bottom line — on competing intensely without military conflict — is the "most significant political outcome" of the summit, Cui Shoujun, a professor at Renmin University of China's School of International Studies, said in Chinese, translated by CNBC. "This injected certainty into the volatile bilateral relationship."
Trump's comments upon Xi's arrival at the White House only emphasized general collaboration. The U.S. president has yet to comment on Taiwan around this summit, despite Xi calling on the U.S. to "oppose 'Taiwan independence,'" according to Beijing's readout of the two president's talks on Thursday.
China's readout also noted Trump and Xi discussed the Middle East situation, without mentioning the Iran war.
However, Zhai Jun, China's special envoy for the Middle East, said at an event Friday in Singapore that "the Middle East situation was a big issue in the leaders' discussion that just took place, and the consensus they reached there will be critical to cooling the temperature in the conflict."
AI questions linger
Neither side signaled major steps to curtail AI. That's despite some tech leaders and U.S. lawmakers sounding alarms about the risks posed by rapidly advancing AI models.
"I want to leave it exactly where it is," Trump said of AI in a Truth Social post sent before Xi arrived at the White House. "That is China's position also."
Xi, speaking at the White House later, struck a different tone, saying he U.S. and China have "both the capability and responsibility to develop and manage AI for good, and ensure that the development of AI is always under human control and serves the well-being of the people."
The Chinese leader underscored the need for the two countries to cooperate on AI.
Trump and Xi are both being "pulled in two directions" as they balance the aims of breakneck AI growth with concerns about the technology spiraling out of control, Ho-Fung Hung, a China expert and professor at Johns Hopkins University's School of Advanced International Studies, told CNBC.
But it was again a topic where public announcements fell short of specifics, amid a flurry of photo-ops.
"There are a range of issues in this complex relationship that are not really being addressed below the leader-to-leader level in an institutionalized, system-wide manner," Dewardric McNeal, Longview Global senior policy analyst, told CNBC's "Closing Bell: Overtime" Thursday afternoon.
Fanfare, flattery flow freely
Xi was expected to receive red-carpet treatment from Trump, and he got it — literally: A red carpet was rolled out to Xi's plane on the Joint Base Andrews tarmac, and another appeared at the White House as his motorcade arrived at the South Portico.
Trump and First Lady Melania Trump waited for Xi at the airport stairs upon his arrival. It was Trump's first time traveling to the base to welcome a foreign leader.
That set the tone for a fanfare-filled summit stuffed with displays of synchronized military power from large numbers of service members, who performed music, raised flags and rifles and marched in formation in various locations.
In the newly paved-over Rose Garden, Xi and Trump stood for a military review that included a rooftop performance from the U.S. Army Herald Trumpets and demonstrations from the Army's Old Guard Fife and Drum Corps, as well as the Marines' Silent Drill Platoon and its Drum and Bugle Corps.
Service members also conducted low flyovers Wednesday and Thursday – the first of which arrived with a loud roar that drew a flinching grimace from Trump, while Xi had no reaction.
After a private bilateral meeting midday Thursday, Trump gave Xi a tour of the newly built helipad installed outside the White House. "He loves good granite," Trump said of Xi as the leaders passed reporters en route to the helipad, where they toured the presidential helicopter.
It's not unusual for a leader to go heavy on hospitality and arrange ornate ceremonies when hosting a state visit, the highest form of leader-to-leader diplomacy. But Trump's treatment of Xi still stands out.
"Trump has taken the pageantry further than most of his predecessors," Ryan Hass, director of the Brookings Institution's John L. Thornton China Center Hass, told CNBC. "The portion of the day devoted to substantive discussion is smaller than the amount of time both leaders will spend on ceremonial affairs."
Not seen on TV
The summit overflowed with colorful, large-scale displays of military choreography – but major television networks didn't air them.
That's because of a now-ended suspension of so-called TV pool coverage of the White House, implemented in solidarity with MS NOW, CNN and Politico, whom Trump banned last week over what he claims is their harmful reporting.
A federal judge ordered the White House to restore access to the three outlets for up to two weeks, while casting doubt on a claim from the government that the ban is a matter of national security.
Despite the ruling, some journalists from all three outlets were barred from entering the White House on Thursday morning – even as Chinese state media outlets were granted entry. Access was fully restored later Thursday, the Trump administration said in a court filing.
In a Truth Social post Thursday afternoon, Trump railed against the networks for not broadcasting Xi's arrival, complaining that the moment was "Actually made for Television."
— CNBC's Anniek Bao contributed to this report.`,
    bodyJa: `Chinese leader Xi Jinping ended his first formal trip to Washington in 11 years Friday, capping a highly anticipated state visit with President Donald Trump that saw three days of bonhomie and pageantry but delivered few concrete agreements.
Trump gave Xi a rare airport tarmac greeting, the two leaders enjoyed a splashy state dinner and tea with their spouses and visited the National Archives. In between ceremonial elements, Trump and Xi inked an extension to an existing trade pact, and Xi promised to send a pair of pandas to Atlanta.
What didn't happen were promises of purchases or agreement on addressing artificial intelligence risks, the war in Iran or taking steps toward resolving other vexing world challenges.
A state visit that featured much pomp but little change in circumstances might have been intentional.
"Ahead of the midterms, President Trump's interest is to keep things calm," Scott Kennedy, a Center for Strategic and International Studies senior advisor who studies the Chinese economy. "We have interest rates getting to record highs, and he doesn't want to make markets even more skittish."
For those watching from afar in China, the mood was upbeat.
"I think it's a great success," said Hai Zhao, a director of international political studies at the Chinese Academy of Social Sciences, a state-affiliated think tank. "Chinese people are very happy to see that President Xi is very well received in Washington, D.C.," he said as the Trump-Xi dinner was wrapping up.
Here's what to know about the historic visit:
Trade truce continues
One concrete deliverable came when Treasury Secretary Scott Bessent announced the U.S. and China agreed to continue their soon-to-expire trade truce until Jan. 10, a two-month extension of the agreement inked last year.
Without specifying a date, Xi noted a "new joint arrangement" on bilateral trade, according to Beijing's readout of his meeting with Trump.
The truce, struck after Trump and Xi met in Busan, South Korea, lowered U.S. tariffs and suspended Beijing's controls on exports of rare earths and critical minerals, among other provisions.
China experts told CNBC a shorter extension could slightly favor the U.S., which can use the prospect of renewed trade hostilities as leverage.
Many had expected a longer, six-month extension. But the shorter time frame could give both sides negotiating leverage into future talks between Xi and Trump. They are expected to meet twice more this year: at the Asia-Pacific Economic Cooperation summit in Shenzhen, China, in November, and the G20 in Miami in December.
After those two events, "I think you need to be cautious that things will not stay as calm as they look right now," Kennedy said Friday on CNBC's "Squawk Box Asia."
"As some have said, on the surface, like a polo match, things look relatively calm, but underneath, there's a lot of kicking, and that kicking will become more visible as we get to the new year," he said.
'Thucydides Trap' avoided?
China's rhetoric has grown notably more confident.
"The Thucydides Trap can be overcome," Xi said on his arrival at the White House, according to the Chinese side's official readout.
That contrasts with his rhetorical question when the pair met in May in Beijing of whether the two countries could avoid the Thucydides Trap. The term refers to how tensions historically between a rising and ruling power have often resulted in war.
Xi said Thursday the two countries can have "healthy" competition without confrontation. "It should be a race of catching up with one another, not a wrestle in which one either wins or loses," he said.
Establishing a bottom line — on competing intensely without military conflict — is the "most significant political outcome" of the summit, Cui Shoujun, a professor at Renmin University of China's School of International Studies, said in Chinese, translated by CNBC. "This injected certainty into the volatile bilateral relationship."
Trump's comments upon Xi's arrival at the White House only emphasized general collaboration. The U.S. president has yet to comment on Taiwan around this summit, despite Xi calling on the U.S. to "oppose 'Taiwan independence,'" according to Beijing's readout of the two president's talks on Thursday.
China's readout also noted Trump and Xi discussed the Middle East situation, without mentioning the Iran war.
However, Zhai Jun, China's special envoy for the Middle East, said at an event Friday in Singapore that "the Middle East situation was a big issue in the leaders' discussion that just took place, and the consensus they reached there will be critical to cooling the temperature in the conflict."
AI questions linger
Neither side signaled major steps to curtail AI. That's despite some tech leaders and U.S. lawmakers sounding alarms about the risks posed by rapidly advancing AI models.
"I want to leave it exactly where it is," Trump said of AI in a Truth Social post sent before Xi arrived at the White House. "That is China's position also."
Xi, speaking at the White House later, struck a different tone, saying he U.S. and China have "both the capability and responsibility to develop and manage AI for good, and ensure that the development of AI is always under human control and serves the well-being of the people."
The Chinese leader underscored the need for the two countries to cooperate on AI.
Trump and Xi are both being "pulled in two directions" as they balance the aims of breakneck AI growth with concerns about the technology spiraling out of control, Ho-Fung Hung, a China expert and professor at Johns Hopkins University's School of Advanced International Studies, told CNBC.
But it was again a topic where public announcements fell short of specifics, amid a flurry of photo-ops.
"There are a range of issues in this complex relationship that are not really being addressed below the leader-to-leader level in an institutionalized, system-wide manner," Dewardric McNeal, Longview Global senior policy analyst, told CNBC's "Closing Bell: Overtime" Thursday afternoon.
Fanfare, flattery flow freely
Xi was expected to receive red-carpet treatment from Trump, and he got it — literally: A red carpet was rolled out to Xi's plane on the Joint Base Andrews tarmac, and another appeared at the White House as his motorcade arrived at the South Portico.
Trump and First Lady Melania Trump waited for Xi at the airport stairs upon his arrival. It was Trump's first time traveling to the base to welcome a foreign leader.
That set the tone for a fanfare-filled summit stuffed with displays of synchronized military power from large numbers of service members, who performed music, raised flags and rifles and marched in formation in various locations.
In the newly paved-over Rose Garden, Xi and Trump stood for a military review that included a rooftop performance from the U.S. Army Herald Trumpets and demonstrations from the Army's Old Guard Fife and Drum Corps, as well as the Marines' Silent Drill Platoon and its Drum and Bugle Corps.
Service members also conducted low flyovers Wednesday and Thursday – the first of which arrived with a loud roar that drew a flinching grimace from Trump, while Xi had no reaction.
After a private bilateral meeting midday Thursday, Trump gave Xi a tour of the newly built helipad installed outside the White House. "He loves good granite," Trump said of Xi as the leaders passed reporters en route to the helipad, where they toured the presidential helicopter.
It's not unusual for a leader to go heavy on hospitality and arrange ornate ceremonies when hosting a state visit, the highest form of leader-to-leader diplomacy. But Trump's treatment of Xi still stands out.
"Trump has taken the pageantry further than most of his predecessors," Ryan Hass, director of the Brookings Institution's John L. Thornton China Center Hass, told CNBC. "The portion of the day devoted to substantive discussion is smaller than the amount of time both leaders will spend on ceremonial affairs."
Not seen on TV
The summit overflowed with colorful, large-scale displays of military choreography – but major television networks didn't air them.
That's because of a now-ended suspension of so-called TV pool coverage of the White House, implemented in solidarity with MS NOW, CNN and Politico, whom Trump banned last week over what he claims is their harmful reporting.
A federal judge ordered the White House to restore access to the three outlets for up to two weeks, while casting doubt on a claim from the government that the ban is a matter of national security.
Despite the ruling, some journalists from all three outlets were barred from entering the White House on Thursday morning – even as Chinese state media outlets were granted entry. Access was fully restored later Thursday, the Trump administration said in a court filing.
In a Truth Social post Thursday afternoon, Trump railed against the networks for not broadcasting Xi's arrival, complaining that the moment was "Actually made for Television."
— CNBC's Anniek Bao contributed to this report.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/25/trump-xi-summit-takeaways.html",
    publishedAt: "2026-09-25T18:52:40+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "u-s-appeals-court-upholds-pentagon-desig-7e6a6459",
    title: "U.S. appeals court upholds Pentagon designation of Anthropic as supply chain risk",
    titleJa: "U.S. appeals court upholds Pentagon designation of Anthropic as supply chain risk",
    summaryJa: "In a 2-1 decision, a federal appeals court upheld the Department of Defense's blacklisting of Anthropic.",
    bodyOriginal: `A federal appeals court panel in Washington, D.C., on Friday upheld the Pentagon's blacklisting of Anthropic, dealing a blow to the artificial intelligence company in its months-long battle with the Trump administration.
The 2-1 decision rejected Anthropic's argument that the Department of Defense's ban on its Claude models was arbitrary, unauthorized and unconstitutional.
"The Department had ample support for its conclusion that the continued integration of Claude into the Department's information systems, by the Department or its contractors, presented a statutorily covered national-security risk," Judge Gregory Katsas wrote in the majority opinion for the U.S. Court of Appeals for the District of Columbia, which Judge Neomi Rao joined. Katsas and Rao were appointed by President Donald Trump.
Judge Karen LeCraft Henderson, who was appointed by former President George H.W. Bush, dissented.
In March, the DOD labeled Anthropic a supply chain risk, meaning the company purportedly threatened U.S. national security, after negotiations about how the military could use its Claude AI models spiraled out of control. The designation prevents the U.S. military from using Anthropic's models and blocks defense contractors from using them in their work with the agency.
Anthropic's relationship with the Trump administration has been fraught ever since, and Trump has repeatedly slammed company's CEO Dario Amodei on social media. Amodei recently drew Trump's ire by calling for an industry wide slowdown, and he was not invited to the glitzy state dinner the White House hosted for Chinese President Xi Jinping on Thursday.
"The Trump Administration has stopped AI "people" from doing bad, or potentially bad, "things," like Dario (Anthropic!), who is now pretending to be a "perfect little angel" - and we will continue to do so!," Trump wrote in a post on Truth Social on Monday.
Anthropic sued the Trump administration in U.S. District Court in San Francisco and in the D.C. Circuit Appeals Court in March, seeking to reverse its blacklisting. The DOD relied on two distinct designations to justify its supply chain risk action, which meant they had to be litigated in two separate courts.
A San Francisco federal judge ruled last month that one designation was illegal. The ruling Friday by the D.C. appeals court upheld the second designation.
"We respectfully disagree with the court's decision," an Anthropic spokesperson told CNBC in a statement. "Another federal court has already held the government's parallel designation unlawful. We remain confident in our position and are considering all options, including further review."
The appellate panel said it would delay the decision from taking immediate effect to give Anthropic time to petition the same panel for a rehearing or to seek an en banc rehearing of the case, by all of the judges on the D.C. Circuit Court of Appeals. Anthropic could also ask the Supreme Court to take the case.
Before the clash between the two sides spilled into the public's view earlier this year, Anthropic served as an early partner across many U.S. agencies, including the DOD. Anthropic signed a $200 million contract with the Pentagon in July of 2025, but as the company began negotiating Claude's deployment on the DOD's GenAI.mil AI platform that September, talks collapsed.
The DOD wanted Anthropic to grant the military unfettered access to its models across all lawful purposes, while Anthropic wanted assurance that its technology would not be used for fully autonomous weapons or domestic mass surveillance. They were unable to come to an agreement, and Defense Secretary Pete Hegseth accused Anthropic of attempting to "to seize veto power over the operational decisions of the United States military."
"The Department reasonably feared that Anthropic might manipulate Claude's design to prevent it from performing national-security functions that the Department deems contractually authorized and necessary," Katsas wrote Friday.
WATCH: CEOs of OpenAI, Anthropic and Hugging Face to brief UN Security Council`,
    bodyJa: `A federal appeals court panel in Washington, D.C., on Friday upheld the Pentagon's blacklisting of Anthropic, dealing a blow to the artificial intelligence company in its months-long battle with the Trump administration.
The 2-1 decision rejected Anthropic's argument that the Department of Defense's ban on its Claude models was arbitrary, unauthorized and unconstitutional.
"The Department had ample support for its conclusion that the continued integration of Claude into the Department's information systems, by the Department or its contractors, presented a statutorily covered national-security risk," Judge Gregory Katsas wrote in the majority opinion for the U.S. Court of Appeals for the District of Columbia, which Judge Neomi Rao joined. Katsas and Rao were appointed by President Donald Trump.
Judge Karen LeCraft Henderson, who was appointed by former President George H.W. Bush, dissented.
In March, the DOD labeled Anthropic a supply chain risk, meaning the company purportedly threatened U.S. national security, after negotiations about how the military could use its Claude AI models spiraled out of control. The designation prevents the U.S. military from using Anthropic's models and blocks defense contractors from using them in their work with the agency.
Anthropic's relationship with the Trump administration has been fraught ever since, and Trump has repeatedly slammed company's CEO Dario Amodei on social media. Amodei recently drew Trump's ire by calling for an industry wide slowdown, and he was not invited to the glitzy state dinner the White House hosted for Chinese President Xi Jinping on Thursday.
"The Trump Administration has stopped AI "people" from doing bad, or potentially bad, "things," like Dario (Anthropic!), who is now pretending to be a "perfect little angel" - and we will continue to do so!," Trump wrote in a post on Truth Social on Monday.
Anthropic sued the Trump administration in U.S. District Court in San Francisco and in the D.C. Circuit Appeals Court in March, seeking to reverse its blacklisting. The DOD relied on two distinct designations to justify its supply chain risk action, which meant they had to be litigated in two separate courts.
A San Francisco federal judge ruled last month that one designation was illegal. The ruling Friday by the D.C. appeals court upheld the second designation.
"We respectfully disagree with the court's decision," an Anthropic spokesperson told CNBC in a statement. "Another federal court has already held the government's parallel designation unlawful. We remain confident in our position and are considering all options, including further review."
The appellate panel said it would delay the decision from taking immediate effect to give Anthropic time to petition the same panel for a rehearing or to seek an en banc rehearing of the case, by all of the judges on the D.C. Circuit Court of Appeals. Anthropic could also ask the Supreme Court to take the case.
Before the clash between the two sides spilled into the public's view earlier this year, Anthropic served as an early partner across many U.S. agencies, including the DOD. Anthropic signed a $200 million contract with the Pentagon in July of 2025, but as the company began negotiating Claude's deployment on the DOD's GenAI.mil AI platform that September, talks collapsed.
The DOD wanted Anthropic to grant the military unfettered access to its models across all lawful purposes, while Anthropic wanted assurance that its technology would not be used for fully autonomous weapons or domestic mass surveillance. They were unable to come to an agreement, and Defense Secretary Pete Hegseth accused Anthropic of attempting to "to seize veto power over the operational decisions of the United States military."
"The Department reasonably feared that Anthropic might manipulate Claude's design to prevent it from performing national-security functions that the Department deems contractually authorized and necessary," Katsas wrote Friday.
WATCH: CEOs of OpenAI, Anthropic and Hugging Face to brief UN Security Council`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/25/pentagon-anthropic-ai-risk-appeals-court.html",
    publishedAt: "2026-09-25T17:01:15+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "micron-investors-should-get-ready-for-a-ccb6c706",
    title: "Micron investors should get ready for a seesaw ride, analyst says",
    titleJa: "Micron investors should get ready for a seesaw ride, analyst says",
    summaryJa: "The timing of an Nvidia product ramp may require a balancing act for Micron investors, as some estimated revenue shifts toward next year instead of this year.",
    bodyOriginal: `The timing of an Nvidia product ramp may require a balancing act for Micron investors, as some estimated revenue shifts toward next year instead of this year.`,
    bodyJa: `The timing of an Nvidia product ramp may require a balancing act for Micron investors, as some estimated revenue shifts toward next year instead of this year.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/micron-investors-should-get-ready-for-a-seesaw-ride-analyst-says-1c0cc651?mod=mw_rss_topstories",
    publishedAt: "2026-09-25T16:27:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-40268001",
    readTime: 2,
  },
  {
    id: "details-on-u-s-china-trade-negotiations-763004b0",
    title: "Details on U.S.-China trade negotiations coming Monday, USTR Greer says",
    titleJa: "Details on U.S.-China trade negotiations coming Monday, USTR Greer says",
    summaryJa: "Top White House trade official Jamieson Greer said the two days of talks between President Trump and Chinese leader Xi brought some trade matter agreements.",
    bodyOriginal: `U.S. Trade Representative Jamieson Greer told CNBC on Friday that the U.S. and China have reached agreements covering a subset of goods the two countries can trade on more favorable terms, marking fresh progress in negotiations between the world's two largest economies.
"We've actually reached agreement with the Chinese on a number of these things," Greer said on CNBC's "Squawk Box," referring to goods including U.S. agricultural products and medical devices and Chinese consumer goods considered nonsensitive.
Greer said the Trump administration plans to release "a lot more details" Monday about what the two sides have accomplished in negotiations over the past several weeks. He said the goal is to carve out areas of trade that could remain insulated from future tariff measures or broader trade disputes.
The two countries want some goods to be traded on a "more preferential basis" and potentially left aside if either country imposes new tariffs.
Greer did not specify Friday which products are covered by the agreements, how tariffs on those goods could change or when the new terms would take effect. Negotiations under the new U.S.-China "Board of Trade" mechanism are focused on "pure trade issues," Greer said, rather than U.S. national security restrictions on advanced technology.
"All those export controls that are national security issues, we take those off the table," Greer said.
President Donald Trump and Chinese President Xi Jinping, after they met in Beijing in May, announced the establishment of the Board of Trade to manage trade between the two rivals in nonsensitive products. Businesses have been waiting for more details on what categories of trade would be set aside under the new framework for lower tariffs.
The news comes as Washington and Beijing have also agreed to extend their broader trade truce by two months, giving the two sides more time to negotiate over long-standing economic disputes.
Greer said Friday that the U.S. views those two months as "compliance periods" to assess whether China is following through on earlier commitments, including purchases of U.S. soybeans and other agricultural products and access to rare earths needed by American manufacturers.
"Whenever we have these compliance periods that roll over, it's a time for us to assess, reassess and determine whether or not to continue this period of relative peace on the economic front with the Chinese," Greer said.
Meanwhile, tariffs have sharply altered U.S. trade flows. Greer said Friday that the U.S. goods trade deficit with China has fallen nearly 40%, while acknowledging that some trade has shifted to other countries as companies adjust their supply chains.
Mexico has been one beneficiary of that shift. U.S. imports from Mexico reached a record $60.6 billion in July, according to the Census Bureau. The seasonally adjusted U.S. goods deficit with Mexico increased by $7.2 billion that month to $27.5 billion, according to the Census Bureau.
"When you impose tariffs ... you see market actors starting to do what market actors do, which is respond to new terms of trade, respond to new incentives in the market," Greer said. "We're actually seeing a lot come back to North America."
Greer's comments also provided new detail from the U.S. side following Trump's meeting with Xi at the White House on Thursday. Beijing has so far released a more detailed public account of the talks than Washington.
Xi told Trump on Thursday that artificial intelligence presents greater opportunities for U.S.-China cooperation than competition, according to a Chinese state media readout.
"The two sides can continue AI dialogue, exchange views on risks and benefits, and together guard against the misuse or malicious use of AI," Xi said, according to a CNBC translation of the readout.
Trump, in a Truth Social post Friday morning, called the meeting with Xi "very productive" and said the Chinese leader appeared receptive to Trump's preferred term of "SUPER INTELLIGENCE" for artificial intelligence.
"Tremendous things will be happening," Trump wrote.`,
    bodyJa: `U.S. Trade Representative Jamieson Greer told CNBC on Friday that the U.S. and China have reached agreements covering a subset of goods the two countries can trade on more favorable terms, marking fresh progress in negotiations between the world's two largest economies.
"We've actually reached agreement with the Chinese on a number of these things," Greer said on CNBC's "Squawk Box," referring to goods including U.S. agricultural products and medical devices and Chinese consumer goods considered nonsensitive.
Greer said the Trump administration plans to release "a lot more details" Monday about what the two sides have accomplished in negotiations over the past several weeks. He said the goal is to carve out areas of trade that could remain insulated from future tariff measures or broader trade disputes.
The two countries want some goods to be traded on a "more preferential basis" and potentially left aside if either country imposes new tariffs.
Greer did not specify Friday which products are covered by the agreements, how tariffs on those goods could change or when the new terms would take effect. Negotiations under the new U.S.-China "Board of Trade" mechanism are focused on "pure trade issues," Greer said, rather than U.S. national security restrictions on advanced technology.
"All those export controls that are national security issues, we take those off the table," Greer said.
President Donald Trump and Chinese President Xi Jinping, after they met in Beijing in May, announced the establishment of the Board of Trade to manage trade between the two rivals in nonsensitive products. Businesses have been waiting for more details on what categories of trade would be set aside under the new framework for lower tariffs.
The news comes as Washington and Beijing have also agreed to extend their broader trade truce by two months, giving the two sides more time to negotiate over long-standing economic disputes.
Greer said Friday that the U.S. views those two months as "compliance periods" to assess whether China is following through on earlier commitments, including purchases of U.S. soybeans and other agricultural products and access to rare earths needed by American manufacturers.
"Whenever we have these compliance periods that roll over, it's a time for us to assess, reassess and determine whether or not to continue this period of relative peace on the economic front with the Chinese," Greer said.
Meanwhile, tariffs have sharply altered U.S. trade flows. Greer said Friday that the U.S. goods trade deficit with China has fallen nearly 40%, while acknowledging that some trade has shifted to other countries as companies adjust their supply chains.
Mexico has been one beneficiary of that shift. U.S. imports from Mexico reached a record $60.6 billion in July, according to the Census Bureau. The seasonally adjusted U.S. goods deficit with Mexico increased by $7.2 billion that month to $27.5 billion, according to the Census Bureau.
"When you impose tariffs ... you see market actors starting to do what market actors do, which is respond to new terms of trade, respond to new incentives in the market," Greer said. "We're actually seeing a lot come back to North America."
Greer's comments also provided new detail from the U.S. side following Trump's meeting with Xi at the White House on Thursday. Beijing has so far released a more detailed public account of the talks than Washington.
Xi told Trump on Thursday that artificial intelligence presents greater opportunities for U.S.-China cooperation than competition, according to a Chinese state media readout.
"The two sides can continue AI dialogue, exchange views on risks and benefits, and together guard against the misuse or malicious use of AI," Xi said, according to a CNBC translation of the readout.
Trump, in a Truth Social post Friday morning, called the meeting with Xi "very productive" and said the Chinese leader appeared receptive to Trump's preferred term of "SUPER INTELLIGENCE" for artificial intelligence.
"Tremendous things will be happening," Trump wrote.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/25/trump-xi-china-trade-greer.html",
    publishedAt: "2026-09-25T16:20:40+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "apple-s-expensive-new-iphones-could-be-a-9a58eef0",
    title: "Apple’s expensive new iPhones could be a double-edged sword for the company",
    titleJa: "Apple’s expensive new iPhones could be a double-edged sword for the company",
    summaryJa: "Bernstein analysts suggest Wall Street isn’t properly modeling the extent to which gross margins, a profit metric, could take a hit due to the rising costs of smartphone components.",
    bodyOriginal: `Bernstein analysts suggest Wall Street isn’t properly modeling the extent to which gross margins, a profit metric, could take a hit due to the rising costs of smartphone components.`,
    bodyJa: `Bernstein analysts suggest Wall Street isn’t properly modeling the extent to which gross margins, a profit metric, could take a hit due to the rising costs of smartphone components.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/apples-expensive-new-iphones-could-be-a-double-edged-sword-for-the-company-21c4fefb?mod=mw_rss_topstories",
    publishedAt: "2026-09-25T16:11:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-38300245",
    readTime: 2,
  },
  {
    id: "sir-david-beckham-nets-38-5m-after-world-57c3175f",
    title: "Sir David Beckham nets £38.5m after World Cup ad deals",
    titleJa: "Sir David Beckham nets £38.5m after World Cup ad deals",
    summaryJa: "His stake in DRJB Holdings has entitled him to almost half of its £85.5m in dividend payments.",
    bodyOriginal: `Sir David Beckham nets £38.5m after World Cup ad deals
- Published
Sir David Beckham has netted a £38.5m payout from his sports, fashion, and media business after the 2026 Men's Football World Cup helped it bring in record profits.
The former England star's DRJB Holdings, which includes the Beckham brand, reported an almost £50m profit in 2025, a 46% jump compared to a year earlier. Sales rose from £72.2m to £84m.
The rise was driven by a slew of advertising partnerships struck in the runup to the tournament, including with Bank of America, McDonald's, Verizon, and PepsiCo Lay's.
Sir David, Britain's first billionaire sportsman, was commonly seen in adverts during the summer's World Cup.
In the US, it was difficult for fans to watch a game without coming across Beckham in adverts for Stella Artois, Home Depot and Lay's crisps - known as Walkers in the UK.
Sir David also launched menswear collections for Hugo Boss last year, as well as a pair of Adidas Predator football boots and an eyewear range with Italian glasses maker Safilo.
Revenues at DRJB, of which Beckham owns almost half, were boosted by growth in Beckham's health supplements business too.
DRJB paid its shareholders £38.9m, followed by a special £46.6m payment after the end of the financial year.
Sir David's share of those dividends would have been around £38.5m due to how much of the company he owns.
The remainder of DRJB is owned by New York-based Authentic Brands Group, which also owns Reebok, as well as the rights to other celebrity brands such as comedian and actor Kevin Hart.
Authentic's entertainment chief executive Corey Salter said the performance showed Sir David's name is "one of the most powerful global brands in sport, lifestyle, entertainment and much more".
"It's been an outstanding year, from new partnerships to important philanthropic campaigns and overall brand growth," he said.
Sir David previously drew criticism for associating himself with a country where same-sex relationships are illegal by acting as an ambassador for the 2022 Men's Football World Cup in Qatar.
"It was an important competition and one I was proud to be part of," he said at the time, adding that he had engaged with the LGBTQ community during the tournament.
Related topics
- Published20 July
- Published17 July`,
    bodyJa: `Sir David Beckham nets £38.5m after World Cup ad deals
- Published
Sir David Beckham has netted a £38.5m payout from his sports, fashion, and media business after the 2026 Men's Football World Cup helped it bring in record profits.
The former England star's DRJB Holdings, which includes the Beckham brand, reported an almost £50m profit in 2025, a 46% jump compared to a year earlier. Sales rose from £72.2m to £84m.
The rise was driven by a slew of advertising partnerships struck in the runup to the tournament, including with Bank of America, McDonald's, Verizon, and PepsiCo Lay's.
Sir David, Britain's first billionaire sportsman, was commonly seen in adverts during the summer's World Cup.
In the US, it was difficult for fans to watch a game without coming across Beckham in adverts for Stella Artois, Home Depot and Lay's crisps - known as Walkers in the UK.
Sir David also launched menswear collections for Hugo Boss last year, as well as a pair of Adidas Predator football boots and an eyewear range with Italian glasses maker Safilo.
Revenues at DRJB, of which Beckham owns almost half, were boosted by growth in Beckham's health supplements business too.
DRJB paid its shareholders £38.9m, followed by a special £46.6m payment after the end of the financial year.
Sir David's share of those dividends would have been around £38.5m due to how much of the company he owns.
The remainder of DRJB is owned by New York-based Authentic Brands Group, which also owns Reebok, as well as the rights to other celebrity brands such as comedian and actor Kevin Hart.
Authentic's entertainment chief executive Corey Salter said the performance showed Sir David's name is "one of the most powerful global brands in sport, lifestyle, entertainment and much more".
"It's been an outstanding year, from new partnerships to important philanthropic campaigns and overall brand growth," he said.
Sir David previously drew criticism for associating himself with a country where same-sex relationships are illegal by acting as an ambassador for the 2022 Men's Football World Cup in Qatar.
"It was an important competition and one I was proud to be part of," he said at the time, adding that he had engaged with the LGBTQ community during the tournament.
Related topics
- Published20 July
- Published17 July`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/crkgww5j0yzwo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-25T16:00:44+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/8b69/live/25d24650-b8f2-11f1-bd4a-e9ce4be469f6.jpg",
    readTime: 6,
  },
  {
    id: "tesla-s-stock-falls-as-launch-of-semi-tr-39799357",
    title: "Tesla’s stock falls as launch of Semi truck fails to excite investors",
    titleJa: "Tesla’s stock falls as launch of Semi truck fails to excite investors",
    summaryJa: "Autonomous trucking represents a compelling opportunity for Tesla, but it’s unclear what the company’s initial Semi targets look like.",
    bodyOriginal: `Autonomous trucking represents a compelling opportunity for Tesla, but it’s unclear what the company’s initial Semi targets look like.`,
    bodyJa: `Autonomous trucking represents a compelling opportunity for Tesla, but it’s unclear what the company’s initial Semi targets look like.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/teslas-stock-falls-as-semi-launch-fails-to-excite-investors-5b216e59?mod=mw_rss_topstories",
    publishedAt: "2026-09-25T15:53:00+00:00",
    category: "自動車",
    imageUrl: "https://images.mktw.net/im-70259571",
    readTime: 2,
  },
  {
    id: "airlines-waive-flight-change-fees-ahead-ca0b2852",
    title: "Airlines waive flight-change fees ahead of nor'easter",
    titleJa: "Airlines waive flight-change fees ahead of nor'easter",
    summaryJa: "U.S. airlines waived change fees for flights Friday through Sunday ahead of a nor'easter that federal forecasters warn will bring high winds and rainfall with the potential for dangerous flooding.As of Friday morning, there were minimal delays around the Northeast ahead of the storm and few cancelations set for the weekend.",
    bodyOriginal: `U.S. airlines waived change fees for flights Friday through Sunday ahead of a nor'easter that federal forecasters warn will bring high winds and rainfall with the potential for dangerous flooding.
As of Friday morning, there were minimal delays around the Northeast ahead of the storm and few cancelations set for the weekend.
Carriers will often cancel a chunk, if not most of their schedules, during severe winter storms or hurricanes to ensure planes, passengers and crews aren't out of place, but airlines are still assessing the nor'easter's potential path.
American Airlines, United Airlines and JetBlue Airways said customers can change their flights for a host of airports in the New York City area, Boston and smaller New England airports, without paying a change fee or difference in fare if they can fly anytime before the middle of next week.
The potential weekend disruptions come after an equipment outage on Monday forced carriers to cancel hundreds of flights bound for the New York area and Philadelphia.`,
    bodyJa: `U.S. airlines waived change fees for flights Friday through Sunday ahead of a nor'easter that federal forecasters warn will bring high winds and rainfall with the potential for dangerous flooding.
As of Friday morning, there were minimal delays around the Northeast ahead of the storm and few cancelations set for the weekend.
Carriers will often cancel a chunk, if not most of their schedules, during severe winter storms or hurricanes to ensure planes, passengers and crews aren't out of place, but airlines are still assessing the nor'easter's potential path.
American Airlines, United Airlines and JetBlue Airways said customers can change their flights for a host of airports in the New York City area, Boston and smaller New England airports, without paying a change fee or difference in fare if they can fly anytime before the middle of next week.
The potential weekend disruptions come after an equipment outage on Monday forced carriers to cancel hundreds of flights bound for the New York area and Philadelphia.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/25/flights-storm-new-york-boston-east-coast.html",
    publishedAt: "2026-09-25T14:10:40+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "special-agents-blood-and-urine-test-resu-afb5bb1f",
    title: "Special agents' blood and urine test results stolen in FBI hack",
    titleJa: "Special agents' blood and urine test results stolen in FBI hack",
    summaryJa: "Experts say the hack could leave agents vulnerable to scams, blackmail and targeted attacks.",
    bodyOriginal: `Special agents' blood and urine test results stolen in FBI hack
- Published
Cyber-criminals who hacked the FBI say they have extremely sensitive medical data for thousands of its special agents.
BBC News has seen samples of the stolen "fitness-for-work" medical examinations, which contain information such as blood and urine test results, and doctors' notes mentioning conditions such as a "shellfish and banana allergy".
The records include agents' full names and addresses, as well as references to medical concerns including 'blood in the urine' and 'high cholesterol'.
Experts say the hack - which the FBI is investigating - could leave agents vulnerable to scams, blackmail and targeted attacks, as well as help criminals impersonate law enforcement officers.
"The list maps thousands of agents against their medical and fitness records," said Etay Maor, vice-president of threat intelligence at Cato Networks.
"Passwords can be reset if stolen, but medical records cannot, so once this data is out, it stays compromised for good. That permanence, applied across an entire workforce, is what makes this leak so serious."
The FBI has not responded to requests for comment. However, on Wednesday it acknowledged the breach and said it was "aggressively investigating" how it happened.
The cyber-criminal group ShinyHunters claims it breached FBI systems on Monday, and later posted details of the attack on its darknet site.
The group also shared samples of the alleged stolen data with reporters, along with an extortion demand.
Unusually, the hackers are not demanding money. Instead, they are seeking a retraction of an FBI advisory published in May, which they claim "offended" them.
The samples shared with journalists appear genuine and include names, addresses, phone numbers, badge numbers, job titles and information about spouses.
The records appear to relate to thousands of agents, including senior officials such as deputy directors.
Professor Ciaran Martin, the former head of the UK's National Cyber Security Centre, has described the hack - if confirmed - "as serious as it gets when it comes to data breaches."
'Phishing, impersonation, identity fraud'
The news agency Reuters reports that some of the data includes information on agents, external involved in investigations relating to Russia, China and drug cartels.
Reporting by 404 Media suggests details of a previously little-known FBI hacking unit may also have been exposed, external.
It was initially thought the breach affected the FBI's 38,000 current employees, but the hackers now claim the number could be far higher.
The group says it underestimated the scale of the data theft and now claims to hold sensitive information on around 60,000 current and former FBI staff.
Jamie Akhtar, chief executive and co-founder of CyberSmart, said the hackers' claims should be treated with caution but that the breach appeared to be extremely concerning.
"Such data could be used for highly convincing phishing, impersonation, identity fraud, blackmail or even operations targeting law-enforcement personnel, making the potential implications particularly serious," he said.
The hackers, who communicate with reporters in English via the messaging service, Telegram, say they will publish the full dataset in five days unless the FBI meets their demands.
ShinyHunters is an international hacking collective that has been active since 2019 and has been linked to a number of high-profile cyber-attacks, including incidents affecting Rockstar Games and the education platform Canvas.
The group claims it exploited a vulnerability in an Oracle cloud storage system used by the FBI, gaining access to multiple platforms including FBIJobs, FBI BEAST, which handles background checks on employees and applicants, FBI MedLink, which stores medical records, and FBI BICS, which contains investigative information.
In a statement posted on X, the FBI said it was still trying to determine whether the hackers had breached its systems directly or compromised a third-party provider.
"We are actively and aggressively investigating this matter and working closely with those third-party providers that support FBIJobs.gov to mitigate any and all risk," the statement said.
FBI investigating claim hackers have stolen details of all its agents
- Published1 day ago
GTA-maker Rockstar Games hacked again but downplays impact
- Published13 April
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.`,
    bodyJa: `Special agents' blood and urine test results stolen in FBI hack
- Published
Cyber-criminals who hacked the FBI say they have extremely sensitive medical data for thousands of its special agents.
BBC News has seen samples of the stolen "fitness-for-work" medical examinations, which contain information such as blood and urine test results, and doctors' notes mentioning conditions such as a "shellfish and banana allergy".
The records include agents' full names and addresses, as well as references to medical concerns including 'blood in the urine' and 'high cholesterol'.
Experts say the hack - which the FBI is investigating - could leave agents vulnerable to scams, blackmail and targeted attacks, as well as help criminals impersonate law enforcement officers.
"The list maps thousands of agents against their medical and fitness records," said Etay Maor, vice-president of threat intelligence at Cato Networks.
"Passwords can be reset if stolen, but medical records cannot, so once this data is out, it stays compromised for good. That permanence, applied across an entire workforce, is what makes this leak so serious."
The FBI has not responded to requests for comment. However, on Wednesday it acknowledged the breach and said it was "aggressively investigating" how it happened.
The cyber-criminal group ShinyHunters claims it breached FBI systems on Monday, and later posted details of the attack on its darknet site.
The group also shared samples of the alleged stolen data with reporters, along with an extortion demand.
Unusually, the hackers are not demanding money. Instead, they are seeking a retraction of an FBI advisory published in May, which they claim "offended" them.
The samples shared with journalists appear genuine and include names, addresses, phone numbers, badge numbers, job titles and information about spouses.
The records appear to relate to thousands of agents, including senior officials such as deputy directors.
Professor Ciaran Martin, the former head of the UK's National Cyber Security Centre, has described the hack - if confirmed - "as serious as it gets when it comes to data breaches."
'Phishing, impersonation, identity fraud'
The news agency Reuters reports that some of the data includes information on agents, external involved in investigations relating to Russia, China and drug cartels.
Reporting by 404 Media suggests details of a previously little-known FBI hacking unit may also have been exposed, external.
It was initially thought the breach affected the FBI's 38,000 current employees, but the hackers now claim the number could be far higher.
The group says it underestimated the scale of the data theft and now claims to hold sensitive information on around 60,000 current and former FBI staff.
Jamie Akhtar, chief executive and co-founder of CyberSmart, said the hackers' claims should be treated with caution but that the breach appeared to be extremely concerning.
"Such data could be used for highly convincing phishing, impersonation, identity fraud, blackmail or even operations targeting law-enforcement personnel, making the potential implications particularly serious," he said.
The hackers, who communicate with reporters in English via the messaging service, Telegram, say they will publish the full dataset in five days unless the FBI meets their demands.
ShinyHunters is an international hacking collective that has been active since 2019 and has been linked to a number of high-profile cyber-attacks, including incidents affecting Rockstar Games and the education platform Canvas.
The group claims it exploited a vulnerability in an Oracle cloud storage system used by the FBI, gaining access to multiple platforms including FBIJobs, FBI BEAST, which handles background checks on employees and applicants, FBI MedLink, which stores medical records, and FBI BICS, which contains investigative information.
In a statement posted on X, the FBI said it was still trying to determine whether the hackers had breached its systems directly or compromised a third-party provider.
"We are actively and aggressively investigating this matter and working closely with those third-party providers that support FBIJobs.gov to mitigate any and all risk," the statement said.
FBI investigating claim hackers have stolen details of all its agents
- Published1 day ago
GTA-maker Rockstar Games hacked again but downplays impact
- Published13 April
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cw62me2vlj07o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-25T13:56:16+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/6dff/live/04222c60-b793-11f1-a7dc-51a9fb487fda.jpg",
    readTime: 10,
  },
  {
    id: "ceo-who-posted-lake-america-sweatshirt-p-f4d4a5b0",
    title: "CEO who posted 'Lake America' sweatshirt photos is no longer with the company",
    titleJa: "CEO who posted 'Lake America' sweatshirt photos is no longer with the company",
    summaryJa: "Smith on Sept. 11 had posted an allegedly AI-edited photo on Facebook of her family dressed in \"Lake America\" sweatshirts.",
    bodyOriginal: `The CEO of U.S.-based credit union Family First is no longer with the company, days after she posted an allegedly artificial intelligence-edited photo of her family with "Lake America" sweatshirts.
On Wednesday, a statement posted on the credit union's website revealed that Jane Smith was no longer with Family First "effective immediately," with Chief Operations Officer Jason Acosta serving as interim CEO. It was signed by Maurice Patterson, chairman of the Family First Credit Union board, and Acosta.
Family First did not state that if the reaction was the reason for Smith leaving, even though the credit union posted on Thursday that "we sincerely apologize for the concern, disappointment and pain this situation has caused our members and community."
Family First is based in Michigan, a state that borders Canada.
Smith on Sept. 11 had posted the photo on Facebook with the caption: "Like our sweatshirts? Not sure Canada will. Lol lol"
The post has since been deleted from Facebook, CBC News reported.
U.S. President Donald Trump declared the renaming of Lake Ontario on the U.S.-Canadian border to "Lake America" last month, prompting massive backlash from Canadians, Prime Minister Mark Carney, and even animated comedy TV show "South Park," which changed its name to "South America" in a jab at the U.S. president's order.
In an interview on Sept. 17 with ABC12 News in Michigan, Smith said that the picture contained an artificial intelligence marker, but was later reposted by her sister without the AI marker.
"We weren't trying to make a political statement," Smith reportedly said. "However, we were, you know, kind of poking fun at the fact that you know one of the Great Lakes' names were getting changed."
In an earlier statement to ABC12 News, Family First had said it "unequivocally disapproves and rejects the content of the social media post involving our CEO, Jane Smith."
U.S. Rep. Timothy Kennedy, D-N.Y., has also introduced legislation to block Trump's attempt to rename Lake Ontario and prohibit the future renaming of any of the five Great Lakes.`,
    bodyJa: `The CEO of U.S.-based credit union Family First is no longer with the company, days after she posted an allegedly artificial intelligence-edited photo of her family with "Lake America" sweatshirts.
On Wednesday, a statement posted on the credit union's website revealed that Jane Smith was no longer with Family First "effective immediately," with Chief Operations Officer Jason Acosta serving as interim CEO. It was signed by Maurice Patterson, chairman of the Family First Credit Union board, and Acosta.
Family First did not state that if the reaction was the reason for Smith leaving, even though the credit union posted on Thursday that "we sincerely apologize for the concern, disappointment and pain this situation has caused our members and community."
Family First is based in Michigan, a state that borders Canada.
Smith on Sept. 11 had posted the photo on Facebook with the caption: "Like our sweatshirts? Not sure Canada will. Lol lol"
The post has since been deleted from Facebook, CBC News reported.
U.S. President Donald Trump declared the renaming of Lake Ontario on the U.S.-Canadian border to "Lake America" last month, prompting massive backlash from Canadians, Prime Minister Mark Carney, and even animated comedy TV show "South Park," which changed its name to "South America" in a jab at the U.S. president's order.
In an interview on Sept. 17 with ABC12 News in Michigan, Smith said that the picture contained an artificial intelligence marker, but was later reposted by her sister without the AI marker.
"We weren't trying to make a political statement," Smith reportedly said. "However, we were, you know, kind of poking fun at the fact that you know one of the Great Lakes' names were getting changed."
In an earlier statement to ABC12 News, Family First had said it "unequivocally disapproves and rejects the content of the social media post involving our CEO, Jane Smith."
U.S. Rep. Timothy Kennedy, D-N.Y., has also introduced legislation to block Trump's attempt to rename Lake Ontario and prohibit the future renaming of any of the five Great Lakes.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/25/ceo-who-posted-lake-america-sweatshirt-photos-has-left-the-company.html",
    publishedAt: "2026-09-25T13:32:57+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "see-which-incumbents-have-the-biggest-ca-b0542418",
    title: "See which incumbents have the biggest cash advantage in the tightest U.S. House races",
    titleJa: "See which incumbents have the biggest cash advantage in the tightest U.S. House races",
    summaryJa: "Incumbents hold commanding cash advantages in many of the U.S. House 2026 midterm election races expected to help decide control of Congress.",
    bodyOriginal: `The most competitive races for control of the House of Representatives in the 2026 midterm election may be toss-ups on the political map. But in the most fiercely contested districts, one candidate often holds a massive financial edge.
In 11 of the 19 incumbent-versus-challenger matchups rated as "toss ups" by The Cook Political Report with Amy Walter, a clear financial divide emerged: One campaign had at least twice as much money available as the other, according to Federal Election Commission data compiled by OpenSecrets, a nonprofit, nonpartisan organization that tracks money in politics. In every one of those races, the incumbent held that commanding lead.
The latest uniform quarterly reports covered activity through June 30, though some candidates have since filed additional reports tied to their states' primary calendars. CNBC used figures from the most recent FEC reporting period available for each candidate as of Sept. 18.
The pattern cuts across party lines, but it matters especially for Republicans because the GOP is defending most of the seats at the center of the House battlefield. The Cook Report currently rates 21 House races as toss-ups, including 16 Republican-held seats and five Democratic-held seats.
In Michigan's 7th District, Republican Rep. Tom Barrett had about $2.9 million on hand compared with roughly $383,000 for Democratic challenger William Lawrence — a more than 7-to-1 advantage.
Republican Rep. Gabe Evans had about $3.9 million available in Colorado's 8th District compared with roughly $601,000 for Democratic challenger Manny Rutinel. And in California's 22nd District, Republican Rep. David Valadao held about $3.4 million, nearly six times the roughly $572,000 held by Democratic challenger Randy Villegas.
Democratic incumbents have built large cushions of their own. Democratic Rep. Marcy Kaptur had about $3.5 million on hand in Ohio's 9th District, more than seven times the amount available to Republican challenger Derek Merrin. Democratic Reps. Jared Moskowitz of Florida and Texas's Vicente Gonzalez also held more than three times as much cash as their Republican opponents.
But incumbency does not guarantee the advantage.
Democratic challengers had more cash than Republican incumbents in both Iowa toss-up races and two of Pennsylvania's three.
Christina Bohannan had about $5.4 million on hand compared with roughly $4.7 million for Republican Rep. Mariannette Miller-Meeks in Iowa's 1st District.
In Pennsylvania's 10th District, Democrat Janelle Stelson had nearly $4.5 million available compared with about $2.8 million for Republican Rep. Scott Perry.
Paige Cognetti also led Republican Rep. Rob Bresnahan in Pennsylvania's 8th District, while Democrat Elaine Luria held a narrow cash advantage over Republican Rep. Jen Kiggans, who defeated Luria in 2024, in Virginia's 2nd District.
Still, the challenger advantages were generally much smaller. Among the 21 races CNBC analyzed, six challengers led incumbents in cash, but none had twice as much money as the sitting member. By contrast, 11 incumbents held at least a 2-to-1 advantage.
Cash on hand offers a different view than top-line fundraising because it shows what campaigns still have available after spending as Election Day approaches. It also captures only part of the money flowing into these contests.
Super PACs and other groups can independently spend to support or oppose candidates without those dollars flowing through the candidates' campaign accounts, under federal campaign finance rules.
The next quarterly reports, covering activity through Sept. 30, are due Oct. 15.`,
    bodyJa: `The most competitive races for control of the House of Representatives in the 2026 midterm election may be toss-ups on the political map. But in the most fiercely contested districts, one candidate often holds a massive financial edge.
In 11 of the 19 incumbent-versus-challenger matchups rated as "toss ups" by The Cook Political Report with Amy Walter, a clear financial divide emerged: One campaign had at least twice as much money available as the other, according to Federal Election Commission data compiled by OpenSecrets, a nonprofit, nonpartisan organization that tracks money in politics. In every one of those races, the incumbent held that commanding lead.
The latest uniform quarterly reports covered activity through June 30, though some candidates have since filed additional reports tied to their states' primary calendars. CNBC used figures from the most recent FEC reporting period available for each candidate as of Sept. 18.
The pattern cuts across party lines, but it matters especially for Republicans because the GOP is defending most of the seats at the center of the House battlefield. The Cook Report currently rates 21 House races as toss-ups, including 16 Republican-held seats and five Democratic-held seats.
In Michigan's 7th District, Republican Rep. Tom Barrett had about $2.9 million on hand compared with roughly $383,000 for Democratic challenger William Lawrence — a more than 7-to-1 advantage.
Republican Rep. Gabe Evans had about $3.9 million available in Colorado's 8th District compared with roughly $601,000 for Democratic challenger Manny Rutinel. And in California's 22nd District, Republican Rep. David Valadao held about $3.4 million, nearly six times the roughly $572,000 held by Democratic challenger Randy Villegas.
Democratic incumbents have built large cushions of their own. Democratic Rep. Marcy Kaptur had about $3.5 million on hand in Ohio's 9th District, more than seven times the amount available to Republican challenger Derek Merrin. Democratic Reps. Jared Moskowitz of Florida and Texas's Vicente Gonzalez also held more than three times as much cash as their Republican opponents.
But incumbency does not guarantee the advantage.
Democratic challengers had more cash than Republican incumbents in both Iowa toss-up races and two of Pennsylvania's three.
Christina Bohannan had about $5.4 million on hand compared with roughly $4.7 million for Republican Rep. Mariannette Miller-Meeks in Iowa's 1st District.
In Pennsylvania's 10th District, Democrat Janelle Stelson had nearly $4.5 million available compared with about $2.8 million for Republican Rep. Scott Perry.
Paige Cognetti also led Republican Rep. Rob Bresnahan in Pennsylvania's 8th District, while Democrat Elaine Luria held a narrow cash advantage over Republican Rep. Jen Kiggans, who defeated Luria in 2024, in Virginia's 2nd District.
Still, the challenger advantages were generally much smaller. Among the 21 races CNBC analyzed, six challengers led incumbents in cash, but none had twice as much money as the sitting member. By contrast, 11 incumbents held at least a 2-to-1 advantage.
Cash on hand offers a different view than top-line fundraising because it shows what campaigns still have available after spending as Election Day approaches. It also captures only part of the money flowing into these contests.
Super PACs and other groups can independently spend to support or oppose candidates without those dollars flowing through the candidates' campaign accounts, under federal campaign finance rules.
The next quarterly reports, covering activity through Sept. 30, are due Oct. 15.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/25/house-midterms-toss-ups-campaign-cash-incumbents.html",
    publishedAt: "2026-09-25T11:17:27+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 9,
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
