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
    id: "how-asian-countries-are-looking-to-prop-4e7f9d99",
    title: "How Asian countries are looking to prop up markets as AI downturn sinks stocks",
    titleJa: "How Asian countries are looking to prop up markets as AI downturn sinks stocks",
    summaryJa: "Market regulators in South Korea, China and Taiwan have introduced new measures to support markets.",
    bodyOriginal: `South Korea, China and Taiwan have introduced new measures aimed at supporting their respective markets, as a tech-fueled sell-off in the region spills into another week.
On Sunday, South Korea's finance ministry said it would prepare its securities-market stabilization fund for immediate activation. The fund, reportedly established in 2020 during the Covid-19 pandemic by financial firms and other institutions seeks to support markets during sharp downturns and is valued at 10.76 trillion won (nearly $8 billion).
The government also plans to relax listed companies' daily share-buyback order limits for three months, starting Nov. 24 and start a "special intensive monitoring period" to prevent illegal short-selling. Regulators will also track margin lending and forced liquidations.
South Korean stocks have seen wild swings over 2026 as investors piled into, then fled from its two tech heavyweights, Samsung Electronics and SK Hynix, both critical companies in the AI supply chain. The benchmark Kospi index is deep in bear territory, down more than 46% from its June high.
The ministry said that it "assessed that volatility in domestic and international stock markets has significantly increased recently due to internal and external uncertainties surrounding the global AI and semiconductor industries, as well as U.S. interest rate hikes," according to a Google translation of the release in Korean.
However, Seoul also said that the mid-to-long-term growth expectations for the AI industry remain intact, and that "excessive anxiety is not a concern."
Taiwan, which is also exposed to the AI industry through Taiwan Semiconductor Manufacturing Company and other tech firms, has also moved to rein in market volatility.
Taiwan's Financial Supervisory Commission announced Friday that short selling below the closing price was "completely prohibited," while making it an exception if used for hedging purposes by securities and futures firms.
"Investors must not sell listed (OTC) stocks or Taiwan Depositary Receipts at a price lower than the closing price of the previous trading day," the FSC said, according to a Google translation of the statement in Chinese.
Margin requirements for short selling will also be increased, and applications from securities firms to issue warrants for listing will be suspended, as the regulator aims to curb speculative activity.
In a similar move to Seoul, Taipei encouraged firms to buy back stocks, adding that the purchases will be included in the companies' environmental, social and governance scores if completed between the fourth quarter of 2026 and the first quarter of 2027.
The island's stock market is heavily dominated by its tech industry, most notably, chip manufacturing giant TSMC. The stock fell 15% last week, while the index dropped 17.5%.
While South Korea and Taiwan are looking to curb speculative trading to arrest the slide in their markets, Beijing is looking to encourage more leverage-based buying.
The Shanghai Stock Exchange said on Sunday that exchanges in Shanghai, Shenzhen and Beijing will cut the minimum margin ratio for margin-financed stock purchases to 80% from 100%, starting Nov. 30. That means investors will be able to borrow more for their stock market bets.
The Shanghai and Shenzhen exchanges also announced fee cuts, while Shenzhen proposed a market-making mechanism for its ChiNext board. The steps will help inject more liquidity into the market that has also born the brunt of the souring in tech and AI trade, with the benchmark CSI 300 index closing lower for 14 of the past 15 weeks.
Seoul's markets led losses in the region, with the Kospi down over 3.26%. Smaller losses were seen in mainland China's CSI 300, which declined 0.71%. The Taiwan Weighted Index, however, reversed earlier losses to gain over 2% on Monday.`,
    bodyJa: `South Korea, China and Taiwan have introduced new measures aimed at supporting their respective markets, as a tech-fueled sell-off in the region spills into another week.
On Sunday, South Korea's finance ministry said it would prepare its securities-market stabilization fund for immediate activation. The fund, reportedly established in 2020 during the Covid-19 pandemic by financial firms and other institutions seeks to support markets during sharp downturns and is valued at 10.76 trillion won (nearly $8 billion).
The government also plans to relax listed companies' daily share-buyback order limits for three months, starting Nov. 24 and start a "special intensive monitoring period" to prevent illegal short-selling. Regulators will also track margin lending and forced liquidations.
South Korean stocks have seen wild swings over 2026 as investors piled into, then fled from its two tech heavyweights, Samsung Electronics and SK Hynix, both critical companies in the AI supply chain. The benchmark Kospi index is deep in bear territory, down more than 46% from its June high.
The ministry said that it "assessed that volatility in domestic and international stock markets has significantly increased recently due to internal and external uncertainties surrounding the global AI and semiconductor industries, as well as U.S. interest rate hikes," according to a Google translation of the release in Korean.
However, Seoul also said that the mid-to-long-term growth expectations for the AI industry remain intact, and that "excessive anxiety is not a concern."
Taiwan, which is also exposed to the AI industry through Taiwan Semiconductor Manufacturing Company and other tech firms, has also moved to rein in market volatility.
Taiwan's Financial Supervisory Commission announced Friday that short selling below the closing price was "completely prohibited," while making it an exception if used for hedging purposes by securities and futures firms.
"Investors must not sell listed (OTC) stocks or Taiwan Depositary Receipts at a price lower than the closing price of the previous trading day," the FSC said, according to a Google translation of the statement in Chinese.
Margin requirements for short selling will also be increased, and applications from securities firms to issue warrants for listing will be suspended, as the regulator aims to curb speculative activity.
In a similar move to Seoul, Taipei encouraged firms to buy back stocks, adding that the purchases will be included in the companies' environmental, social and governance scores if completed between the fourth quarter of 2026 and the first quarter of 2027.
The island's stock market is heavily dominated by its tech industry, most notably, chip manufacturing giant TSMC. The stock fell 15% last week, while the index dropped 17.5%.
While South Korea and Taiwan are looking to curb speculative trading to arrest the slide in their markets, Beijing is looking to encourage more leverage-based buying.
The Shanghai Stock Exchange said on Sunday that exchanges in Shanghai, Shenzhen and Beijing will cut the minimum margin ratio for margin-financed stock purchases to 80% from 100%, starting Nov. 30. That means investors will be able to borrow more for their stock market bets.
The Shanghai and Shenzhen exchanges also announced fee cuts, while Shenzhen proposed a market-making mechanism for its ChiNext board. The steps will help inject more liquidity into the market that has also born the brunt of the souring in tech and AI trade, with the benchmark CSI 300 index closing lower for 14 of the past 15 weeks.
Seoul's markets led losses in the region, with the Kospi down over 3.26%. Smaller losses were seen in mainland China's CSI 300, which declined 0.71%. The Taiwan Weighted Index, however, reversed earlier losses to gain over 2% on Monday.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/23/asia-markets-kospi-taiwan-china-csi300.html",
    publishedAt: "2026-11-23T06:50:48+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "u-s-probes-megaspeed-alice-huang-as-new-ff9da61c",
    title: "U.S. probes Megaspeed, Alice Huang as new figure emerges in Nvidia chip case",
    titleJa: "U.S. probes Megaspeed, Alice Huang as new figure emerges in Nvidia chip case",
    summaryJa: "The U.S. is investigating Megaspeed and Alice Huang after it emerged a former associate of hers was reportedly \"deeply involved\" in the firm's activities",
    bodyOriginal: `Director of National Intelligence Jay Clayton said the U.S. is investigating Alice Huang and her former company, Megaspeed, as a report identified one of her associates as a key decision-maker at the Singapore-based company.
Alice Huang, with whom ousted Nvidia CEO Jensen Huang reportedly had a romantic relationship, was a key figure in Megaspeed International, a cloud computing firm that operates data centers across Southeast Asia linked to the fallout surrounding the leadership shake-up.
"There is an investigation ongoing into her firm and into her," Clayton told ABC on Sunday, adding that, "Nvidia chips, they are the jewel. They are the absolute top that everybody wants, that's why we're focusing on this."
Alice Huang's associate, Chinese national Li Ming, who is now out on bail in Singapore, was "deeply involved" in Megaspeed's activities and took part in major decisions, The Wall Street Journal reported earlier on Saturday, citing people familiar with the matter.
The Singapore charges against Li concern alleged false representations to Super Micro Computer, a U.S.-based firm with known links to chipmaker Nvidia, though Megaspeed is not named in those charges.
Last week, the Commerce and Justice departments said that the investigation into Megaspeed began in 2024 over potential export-control violations. Their joint statement said Commerce's Bureau of Industry and Security and Singapore law enforcement interviewed Huang during an on-site check in June 2025.
The Justice Department later took the lead in the criminal investigation.
Treasury Secretary Scott Bessent told CBS on Sunday that the administration was seeking answers from Nvidia about its chip sales to China, including who oversaw compliance and which levels of the company knew about the activity.
Separately, The New York Times reported Sunday that Alice Huang was in contact with an officer of a top Chinese intelligence agency from spring 2025 through fall 2026, citing people briefed on U.S. intelligence reports.
Bloomberg reported last week that the Justice Department is investigating whether entities linked to Alice Huang helped smuggle Super Micro products to China.
Li faces five charges in Singapore, including two counts of fraud by false representation, along with allegations involving the operation of a company he controlled, unauthorized bank-account access and another company director's duties.
Prosecutors allege he falsely told Super Micro that the company would hold and lease the servers it purchased.
The Journal reported that Li is out on bail and that his case is ongoing. He was offered bail of S$1 million in March 2025. The Singapore charges do not name Megaspeed.
Earlier this month, Singapore's Ministry of Home Affairs said that police had found insufficient evidence to establish that Alice Huang committed offenses related to the possible inaccurate declarations under investigation.
The ministry said she was issued a stern warning for providing information that police assessed as knowingly inaccurate and for downplaying her role at Megaspeed. It also said Singapore had not investigated her for espionage.
Megaspeed has said it is a "legitimate and lawful business" and that Huang left the company in August 2025.
Multiple smoking guns
The scrutiny is set to intensify in Washington. Former Nvidia CEO Jensen Huang and the company's general counsel, Tim Teter, have agreed to closed-door, transcribed interviews with three House committees on Dec. 1 and Dec. 2, respectively.
The committees said they want answers about Nvidia's role in allowing Chinese actors to access advanced chips and the involvement of a potential Chinese intelligence asset.
Speaking to CNBC's Squawk Box on Sunday U.S. time, Ryan Fedasiuk, a former advisor for U.S.-China Bilateral Affairs at the State Department, said that there was "still a lot we don't know" about the case.
He said lawmakers would likely focus on Nvidia's customer relationships and "who knew what at the company when."
Fedasiuk added that there was "a very good chance" investigators would find that people at Nvidia knew their products could be used for restricted purposes. He characterized the existing evidence as containing "multiple" smoking guns.`,
    bodyJa: `Director of National Intelligence Jay Clayton said the U.S. is investigating Alice Huang and her former company, Megaspeed, as a report identified one of her associates as a key decision-maker at the Singapore-based company.
Alice Huang, with whom ousted Nvidia CEO Jensen Huang reportedly had a romantic relationship, was a key figure in Megaspeed International, a cloud computing firm that operates data centers across Southeast Asia linked to the fallout surrounding the leadership shake-up.
"There is an investigation ongoing into her firm and into her," Clayton told ABC on Sunday, adding that, "Nvidia chips, they are the jewel. They are the absolute top that everybody wants, that's why we're focusing on this."
Alice Huang's associate, Chinese national Li Ming, who is now out on bail in Singapore, was "deeply involved" in Megaspeed's activities and took part in major decisions, The Wall Street Journal reported earlier on Saturday, citing people familiar with the matter.
The Singapore charges against Li concern alleged false representations to Super Micro Computer, a U.S.-based firm with known links to chipmaker Nvidia, though Megaspeed is not named in those charges.
Last week, the Commerce and Justice departments said that the investigation into Megaspeed began in 2024 over potential export-control violations. Their joint statement said Commerce's Bureau of Industry and Security and Singapore law enforcement interviewed Huang during an on-site check in June 2025.
The Justice Department later took the lead in the criminal investigation.
Treasury Secretary Scott Bessent told CBS on Sunday that the administration was seeking answers from Nvidia about its chip sales to China, including who oversaw compliance and which levels of the company knew about the activity.
Separately, The New York Times reported Sunday that Alice Huang was in contact with an officer of a top Chinese intelligence agency from spring 2025 through fall 2026, citing people briefed on U.S. intelligence reports.
Bloomberg reported last week that the Justice Department is investigating whether entities linked to Alice Huang helped smuggle Super Micro products to China.
Li faces five charges in Singapore, including two counts of fraud by false representation, along with allegations involving the operation of a company he controlled, unauthorized bank-account access and another company director's duties.
Prosecutors allege he falsely told Super Micro that the company would hold and lease the servers it purchased.
The Journal reported that Li is out on bail and that his case is ongoing. He was offered bail of S$1 million in March 2025. The Singapore charges do not name Megaspeed.
Earlier this month, Singapore's Ministry of Home Affairs said that police had found insufficient evidence to establish that Alice Huang committed offenses related to the possible inaccurate declarations under investigation.
The ministry said she was issued a stern warning for providing information that police assessed as knowingly inaccurate and for downplaying her role at Megaspeed. It also said Singapore had not investigated her for espionage.
Megaspeed has said it is a "legitimate and lawful business" and that Huang left the company in August 2025.
Multiple smoking guns
The scrutiny is set to intensify in Washington. Former Nvidia CEO Jensen Huang and the company's general counsel, Tim Teter, have agreed to closed-door, transcribed interviews with three House committees on Dec. 1 and Dec. 2, respectively.
The committees said they want answers about Nvidia's role in allowing Chinese actors to access advanced chips and the involvement of a potential Chinese intelligence asset.
Speaking to CNBC's Squawk Box on Sunday U.S. time, Ryan Fedasiuk, a former advisor for U.S.-China Bilateral Affairs at the State Department, said that there was "still a lot we don't know" about the case.
He said lawmakers would likely focus on Nvidia's customer relationships and "who knew what at the company when."
Fedasiuk added that there was "a very good chance" investigators would find that people at Nvidia knew their products could be used for restricted purposes. He characterized the existing evidence as containing "multiple" smoking guns.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/23/nvidia-megaspeed-chipmaker-us.html",
    publishedAt: "2026-11-23T05:08:03+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "the-number-of-401-k-millionaires-drops-a-cce463ad",
    title: "The number of 401(k) millionaires drops amid stock-market swings",
    titleJa: "The number of 401(k) millionaires drops amid stock-market swings",
    summaryJa: "‘It was a rocky quarter’: 401(k) balances drop and affordability concerns persist, Fidelity says",
    bodyOriginal: `‘It was a rocky quarter’: 401(k) balances drop and affordability concerns persist, Fidelity says`,
    bodyJa: `‘It was a rocky quarter’: 401(k) balances drop and affordability concerns persist, Fidelity says`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/the-number-of-401-k-millionaires-drops-amid-stock-market-swings-23939b94?mod=mw_rss_topstories",
    publishedAt: "2026-11-23T05:01:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-24997077",
    readTime: 2,
  },
  {
    id: "pip-assessments-need-fundamental-overhau-b04456eb",
    title: "Pip assessments need 'fundamental overhaul', report to say",
    titleJa: "Pip assessments need 'fundamental overhaul', report to say",
    summaryJa: "Disability minister Sir Stephen Timms says he will recommend major reforms to the personal independence payment.",
    bodyOriginal: `Pip assessments need 'fundamental overhaul', report to say
- Published
A review into the personal independence payment (Pip) will call for a "fundamental overhaul" of the assessment process to "better recognise people's varying costs and needs", the disability minister has said.
Sir Stephen Timms has been looking into disability benefits for the past year and found the set up was "no longer fit for purpose".
Writing in the Times, external, he said his review, to be published in full on Tuesday, would recommend people with the most severe conditions have a "fast track" process which is "less burdensome".
It comes after a separate review into young people not in education, employment or training (Neets) recommended Pip be scrapped and replaced for under-25s.
Sir Stephen said that while Pip had the "right aims" when it was created, there have been "marked shifts in the nature of disability and ill health" in the 13 years since.
He said there had been "substantial growth in claims for mental health and neurodiverse conditions as well as changes to wider society and the workplace".
"For those with the most severe conditions and end of life care, the review recommends a fast track which is less burdensome, with assessment capacity freed up for other cases," he said.
"Someone with a lifelong or degenerative illness should not need regular reassessments which feel adversarial and unnecessary."
He added: "Disabled people must have the chance to participate fully in everyday life, including in work, and need a more personalised, flexible system that supports them to do so, rather than itself being a barrier."
The Timms review was commissioned after a U-turn from former prime minister Sir Keir Starmer's government on a plan for major benefit reform in an attempt to reduce the welfare bill by £5bn a year.
More than 130 MPs, including 120 from Labour, signed an amendment to reject plans to cut disability and sickness-related benefit payments in 2025.
The rebels said they opposed the plans because of the number of people expected to be pushed into relative poverty and a lack of consultation at the time.
Number of people claiming key disability benefit hits record high
- Published15 September
Sir Stephen's long-awaited review comes only a week after a former Labour Health Secretary Alan Milburn handed down his proposed reforms to tackle youth unemployment.
The government accepted recommendations from the Milburn review to move those aged 18 to 24 off Pip and the health element of universal credit, and onto an entirely new benefits system.
Prime Minister Andy Burnham said he thought the "same philosophy" could be applied "right through the age range".
At this stage it is unclear how both of the reviews will complement one another.
The cost of Pip is expected to rise to more than £41bn by 2030, up from £15bn in 2020. It was being claimed by 4m people in the UK as of 30 April 2026, according to the Department for Work and Pensions.
Though reforming the benefit has frequently been looked at as a way to reduce the Treasury's welfare bill, disability charities have described it as a lifeline for many.
Ahead of the Timms review being handed down, disability equality charity Scope said ministers must ensure Pip is not weakened.
"Life costs more when you're disabled, whether you work or not," executive director James Taylor said, adding that Pip was "vital financial support".
"We know there is real fear among disabled people that changes could leave them unable to afford the essentials."`,
    bodyJa: `Pip assessments need 'fundamental overhaul', report to say
- Published
A review into the personal independence payment (Pip) will call for a "fundamental overhaul" of the assessment process to "better recognise people's varying costs and needs", the disability minister has said.
Sir Stephen Timms has been looking into disability benefits for the past year and found the set up was "no longer fit for purpose".
Writing in the Times, external, he said his review, to be published in full on Tuesday, would recommend people with the most severe conditions have a "fast track" process which is "less burdensome".
It comes after a separate review into young people not in education, employment or training (Neets) recommended Pip be scrapped and replaced for under-25s.
Sir Stephen said that while Pip had the "right aims" when it was created, there have been "marked shifts in the nature of disability and ill health" in the 13 years since.
He said there had been "substantial growth in claims for mental health and neurodiverse conditions as well as changes to wider society and the workplace".
"For those with the most severe conditions and end of life care, the review recommends a fast track which is less burdensome, with assessment capacity freed up for other cases," he said.
"Someone with a lifelong or degenerative illness should not need regular reassessments which feel adversarial and unnecessary."
He added: "Disabled people must have the chance to participate fully in everyday life, including in work, and need a more personalised, flexible system that supports them to do so, rather than itself being a barrier."
The Timms review was commissioned after a U-turn from former prime minister Sir Keir Starmer's government on a plan for major benefit reform in an attempt to reduce the welfare bill by £5bn a year.
More than 130 MPs, including 120 from Labour, signed an amendment to reject plans to cut disability and sickness-related benefit payments in 2025.
The rebels said they opposed the plans because of the number of people expected to be pushed into relative poverty and a lack of consultation at the time.
Number of people claiming key disability benefit hits record high
- Published15 September
Sir Stephen's long-awaited review comes only a week after a former Labour Health Secretary Alan Milburn handed down his proposed reforms to tackle youth unemployment.
The government accepted recommendations from the Milburn review to move those aged 18 to 24 off Pip and the health element of universal credit, and onto an entirely new benefits system.
Prime Minister Andy Burnham said he thought the "same philosophy" could be applied "right through the age range".
At this stage it is unclear how both of the reviews will complement one another.
The cost of Pip is expected to rise to more than £41bn by 2030, up from £15bn in 2020. It was being claimed by 4m people in the UK as of 30 April 2026, according to the Department for Work and Pensions.
Though reforming the benefit has frequently been looked at as a way to reduce the Treasury's welfare bill, disability charities have described it as a lifeline for many.
Ahead of the Timms review being handed down, disability equality charity Scope said ministers must ensure Pip is not weakened.
"Life costs more when you're disabled, whether you work or not," executive director James Taylor said, adding that Pip was "vital financial support".
"We know there is real fear among disabled people that changes could leave them unable to afford the essentials."`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cvlyj3rn201xo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-23T04:01:13+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/1e9d/live/6a04c6f0-e6f5-11f1-a094-5fdc692f3e33.jpg",
    readTime: 9,
  },
  {
    id: "yemen-s-houthis-claim-attacks-on-saudi-o-e2ccf725",
    title: "Yemen's Houthis claim attacks on Saudi oil refinery as Trump warns of new strikes next year",
    titleJa: "Yemen's Houthis claim attacks on Saudi oil refinery as Trump warns of new strikes next year",
    summaryJa: "Yemen's Iran-aligned Houthis claimed an operation against Saudi Arabia's Rabigh oil refinery, as diplomatic efforts to end the war face long odds.",
    bodyOriginal: `Yemen's Houthis, backed by Iran, said Sunday that they had targeted Rabigh oil refinery in Saudi Arabia, in the latest sign of worsening hostilities in the region, as Iranian forces seek to pressure the U.S. into accepting its terms.
The Houthis said they has directly hit the infrastructure, though the extent of the damage remains unclear, Reuters reported.
The Saudi-led coalition fighting the Houthis said earlier in the day that it had "intercepted and destroyed" a drone launched by the Houthis toward Saudi Arabia's western region, which included some of the country's critical energy refining and export infrastructure.
Rabigh, about 165 kilometers north of Jeddah on the kingdom's western Red Sea coast, hosts Petro Rabigh, a major oil refining and petrochemical complex, developed by Saudi Aramco and Japan's Sumitomo Chemical.
Saudi Arabia's Ministry of Interior did not immediately respond to CNBC's request for comment.
Gulf countries reported multiple attacks by Iran-linked forces over the weekend, even as the country's foreign minister said his government remains open to a negotiated end to the war. Bahrain authorities said an Iranian attack on a civilian industrial facility injured two people on Saturday.
The string of attacks mark the latest sign of escalation in the regional hostilities since the war between the U.S.-Israel and Iran began in late February, as negotiators have so far failed to agree on terms to end the monthslong war.
The conflict has drawn in countries in the Gulf region, disrupting energy flows through the Strait of Hormuz, which used to carry a fifth of the world's crude shipments prior to the war, pushing up global prices for oil and commodities.
The United Kingdom Maritime Trade Operations reported another incident involving a tanker and military forces in the Gulf of Oman on Sunday, after two tankers were struck by unknown projectiles the day before. The maritime agency gave no further details about the incident, urging vessels to stay vigilant about the operational environment.
Diplomatic impasse
Tehran has indicated its intention to end the war with the U.S. through diplomacy, but President Donald Trump has dismissed Iranian proposals. Both sides have been in indirect communication via Qatar.
In an interview to Fox News on Saturday, Trump warned that he was inclined to order military strikes against Tehran next year, if the two countries failed to finalize an agreement. The president blamed the Iranian officials for stalling while escalating hostilities after the U.S. elections.
"They're more aggressive now than before the election," Trump said, describing Iranian officials as "professional tap dancers." "They talk all the time, all they do is talk," he added.
The president has previously said that Tehran wants a deal to end hostilities but not one that is "acceptable" to him. He has oscillated between favoring an agreement that would end the fighting and insisting that the U.S. does not need to rush into any deal and is not afraid of resuming more aggressive attacks.
The Iranian Deputy Foreign Minister Kazem Gharibabadi said Saturday after a two-hour meeting with visiting Qatari mediators that, "We are in contact with mediators, including the Qataris, both in person and virtually, and are holding the necessary discussions to see whether another opportunity can be given to diplomacy," according to Reuters.
International benchmark Brent futures inched 0.22% lower to $92.35 per barrel in early Asia trading hours, while WTI crude was down 0.19% at $83.25 a barrel.`,
    bodyJa: `Yemen's Houthis, backed by Iran, said Sunday that they had targeted Rabigh oil refinery in Saudi Arabia, in the latest sign of worsening hostilities in the region, as Iranian forces seek to pressure the U.S. into accepting its terms.
The Houthis said they has directly hit the infrastructure, though the extent of the damage remains unclear, Reuters reported.
The Saudi-led coalition fighting the Houthis said earlier in the day that it had "intercepted and destroyed" a drone launched by the Houthis toward Saudi Arabia's western region, which included some of the country's critical energy refining and export infrastructure.
Rabigh, about 165 kilometers north of Jeddah on the kingdom's western Red Sea coast, hosts Petro Rabigh, a major oil refining and petrochemical complex, developed by Saudi Aramco and Japan's Sumitomo Chemical.
Saudi Arabia's Ministry of Interior did not immediately respond to CNBC's request for comment.
Gulf countries reported multiple attacks by Iran-linked forces over the weekend, even as the country's foreign minister said his government remains open to a negotiated end to the war. Bahrain authorities said an Iranian attack on a civilian industrial facility injured two people on Saturday.
The string of attacks mark the latest sign of escalation in the regional hostilities since the war between the U.S.-Israel and Iran began in late February, as negotiators have so far failed to agree on terms to end the monthslong war.
The conflict has drawn in countries in the Gulf region, disrupting energy flows through the Strait of Hormuz, which used to carry a fifth of the world's crude shipments prior to the war, pushing up global prices for oil and commodities.
The United Kingdom Maritime Trade Operations reported another incident involving a tanker and military forces in the Gulf of Oman on Sunday, after two tankers were struck by unknown projectiles the day before. The maritime agency gave no further details about the incident, urging vessels to stay vigilant about the operational environment.
Diplomatic impasse
Tehran has indicated its intention to end the war with the U.S. through diplomacy, but President Donald Trump has dismissed Iranian proposals. Both sides have been in indirect communication via Qatar.
In an interview to Fox News on Saturday, Trump warned that he was inclined to order military strikes against Tehran next year, if the two countries failed to finalize an agreement. The president blamed the Iranian officials for stalling while escalating hostilities after the U.S. elections.
"They're more aggressive now than before the election," Trump said, describing Iranian officials as "professional tap dancers." "They talk all the time, all they do is talk," he added.
The president has previously said that Tehran wants a deal to end hostilities but not one that is "acceptable" to him. He has oscillated between favoring an agreement that would end the fighting and insisting that the U.S. does not need to rush into any deal and is not afraid of resuming more aggressive attacks.
The Iranian Deputy Foreign Minister Kazem Gharibabadi said Saturday after a two-hour meeting with visiting Qatari mediators that, "We are in contact with mediators, including the Qataris, both in person and virtually, and are holding the necessary discussions to see whether another opportunity can be given to diplomacy," according to Reuters.
International benchmark Brent futures inched 0.22% lower to $92.35 per barrel in early Asia trading hours, while WTI crude was down 0.19% at $83.25 a barrel.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/23/trump-iran-war-hormuz-saudi-.html",
    publishedAt: "2026-11-23T03:52:17+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 9,
  },
  {
    id: "energy-bills-will-soar-here-s-how-you-ca-7fd29480",
    title: "Energy bills will soar - here's how you can ease the pain",
    titleJa: "Energy bills will soar - here's how you can ease the pain",
    summaryJa: "Household energy bills are about to increase but there are ways to keep a lid on your expenditure.",
    bodyOriginal: `Energy bills will soar - here's how you can ease the pain
- Published
Energy prices are forecast to rise by 26% for millions of homes in January, but experts say there are ways to keep a check on rising bills.
Here are four areas to consider ahead of the increase.
1. Practical ways to reduce your energy use
Energy regulator Ofgem's price cap, as well as suppliers' fixed deals, set a limit on the price of each unit of energy, not the total bill.
So, you pay for what you use. Millions of people have cut back on their energy consumption during years of relatively high prices.
With the unit price of gas, in particular, set to soar, experts say you should take a fresh look at your energy use and renew good habits.
Research foundation Nesta suggests:
turning down the flow temperature on a combi boiler - usually indicated by a radiator icon, to make it operate more efficiently
turning off the pre-heat facility on some combi boilers, which would have kept some water heated up when not in use
turning down the thermostat one degree, although 18C is the recommended minimum
closing all curtains at night
lowering radiator valves outside of the living room
turning off the heating before April
These are small changes but - alongside washing clothes at 30C, blocking draughts and batch cooking - they can reduce energy use and bills.
2. Pay by direct debit
Ofgem says about five million people still pay their bill when it arrives every three months, rather than receive a monthly bill often initially based on an estimate.
Taking regular meter readings, or having a smart meter, while paying by monthly direct debit solves that problem.
Paying by direct debit costs significantly less than by so-called standard credit - typically £138 cheaper a year.
Customers on prepayment schemes - usually people on low incomes struggling to pay bills - used to pay a higher rate than others, but now they pay slightly less than the capped direct debit variable rate.
Various deals may rely on paying by direct debit or having a smart meter.
3. Consider switching to a fixed rate
Moving to a fixed energy tariff means the price you are charged per unit of gas or electricity does not change every three months, although the total bill will still vary depending on how much energy you use.
The trouble is that it is very difficult to work out whether a fixed deal is a good deal at the moment, for those renewing fixed deals or looking for one for the first time.
Some fixed deals are available at unit prices below the next forecast price cap level. But should energy prices fall sharply then a longer-term fix might not seem such good value compared with the price cap.
So consumer group Which? also recommends paying close attention to any exit fees when picking a fixed deal. If variable prices fall below your fixed rate and you want to get out of it before the end of your agreement period, you may have to pay a hefty sum.
Before you fix, consumer website MoneySavingExpert advises you look at all the deals available, not just what your own supplier is offering.
4. Check what financial support you can get
The government will give a £100 payment to millions of homes to help cover winter energy costs. It will go to homes in council tax bands A to D in England, with the equivalent expected in Scotland and Wales.
There are also a range of other forms of support specifically for people on low incomes.
This winter anyone on means-tested benefits will get £150 off their electricity bill.
Your supplier will apply the discount automatically unless you are in Scotland, where you will need to contact your energy company to ask for the help.
Some people will also be eligible for a Cold Weather Payment, external and most pensioners will receive the winter fuel payment.
Beyond that, most energy suppliers offer hardship grants for people struggling to pay their bills and the government's Fuel Direct Scheme, external can help you repay energy debt.
You can get more advice from Ofgem, external, Citizens Advice, external, or your own energy supplier. Trade body Energy UK has a list of support schemes, external.
People on low incomes may also be eligible for grants to help with insulating their homes, and there are local schemes offering grants for solar panels, heat pumps and the like.
But if you are hunting around for grants, watch out for scams pretending to be official money-off schemes.`,
    bodyJa: `Energy bills will soar - here's how you can ease the pain
- Published
Energy prices are forecast to rise by 26% for millions of homes in January, but experts say there are ways to keep a check on rising bills.
Here are four areas to consider ahead of the increase.
1. Practical ways to reduce your energy use
Energy regulator Ofgem's price cap, as well as suppliers' fixed deals, set a limit on the price of each unit of energy, not the total bill.
So, you pay for what you use. Millions of people have cut back on their energy consumption during years of relatively high prices.
With the unit price of gas, in particular, set to soar, experts say you should take a fresh look at your energy use and renew good habits.
Research foundation Nesta suggests:
turning down the flow temperature on a combi boiler - usually indicated by a radiator icon, to make it operate more efficiently
turning off the pre-heat facility on some combi boilers, which would have kept some water heated up when not in use
turning down the thermostat one degree, although 18C is the recommended minimum
closing all curtains at night
lowering radiator valves outside of the living room
turning off the heating before April
These are small changes but - alongside washing clothes at 30C, blocking draughts and batch cooking - they can reduce energy use and bills.
2. Pay by direct debit
Ofgem says about five million people still pay their bill when it arrives every three months, rather than receive a monthly bill often initially based on an estimate.
Taking regular meter readings, or having a smart meter, while paying by monthly direct debit solves that problem.
Paying by direct debit costs significantly less than by so-called standard credit - typically £138 cheaper a year.
Customers on prepayment schemes - usually people on low incomes struggling to pay bills - used to pay a higher rate than others, but now they pay slightly less than the capped direct debit variable rate.
Various deals may rely on paying by direct debit or having a smart meter.
3. Consider switching to a fixed rate
Moving to a fixed energy tariff means the price you are charged per unit of gas or electricity does not change every three months, although the total bill will still vary depending on how much energy you use.
The trouble is that it is very difficult to work out whether a fixed deal is a good deal at the moment, for those renewing fixed deals or looking for one for the first time.
Some fixed deals are available at unit prices below the next forecast price cap level. But should energy prices fall sharply then a longer-term fix might not seem such good value compared with the price cap.
So consumer group Which? also recommends paying close attention to any exit fees when picking a fixed deal. If variable prices fall below your fixed rate and you want to get out of it before the end of your agreement period, you may have to pay a hefty sum.
Before you fix, consumer website MoneySavingExpert advises you look at all the deals available, not just what your own supplier is offering.
4. Check what financial support you can get
The government will give a £100 payment to millions of homes to help cover winter energy costs. It will go to homes in council tax bands A to D in England, with the equivalent expected in Scotland and Wales.
There are also a range of other forms of support specifically for people on low incomes.
This winter anyone on means-tested benefits will get £150 off their electricity bill.
Your supplier will apply the discount automatically unless you are in Scotland, where you will need to contact your energy company to ask for the help.
Some people will also be eligible for a Cold Weather Payment, external and most pensioners will receive the winter fuel payment.
Beyond that, most energy suppliers offer hardship grants for people struggling to pay their bills and the government's Fuel Direct Scheme, external can help you repay energy debt.
You can get more advice from Ofgem, external, Citizens Advice, external, or your own energy supplier. Trade body Energy UK has a list of support schemes, external.
People on low incomes may also be eligible for grants to help with insulating their homes, and there are local schemes offering grants for solar panels, heat pumps and the like.
But if you are hunting around for grants, watch out for scams pretending to be official money-off schemes.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/crm4rygl4m3o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-23T01:05:07+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/53c7/live/9b2f4a60-bd7f-11f1-bc2e-018d645d8d21.jpg",
    readTime: 10,
  },
  {
    id: "what-is-going-on-with-poundland-e6272212",
    title: "What is going on with Poundland?",
    titleJa: "What is going on with Poundland?",
    summaryJa: "Poundland has a matter of days to find a buyer or face collapsing into administration. Why?",
    bodyOriginal: `What is going on with Poundland?
- Published
The future of Poundland hangs in the balance as it faces a possible collapse into administration.
Its owner, US investment firm Gordon Brothers, put it up for sale in September, but then rejected offers to keep the business afloat.
Poundland has a major presence on the High Street, with 600 stores in the UK and Ireland, where it trades under the Dealz brand.
If it were to collapse, the jobs of its 11,000 employees would be at risk, as well as potentially thousands of others at firms that supply the retailer.
How have we got here?
Have people stopped shopping at Poundland?
People have not stopped shopping at Poundland - quite the opposite.
Although the chain was struggling when it was sold by Pepco last year for £1, the business turned a corner over the year to September, going from a £68m loss to an £18.1m profit before interest, tax and certain accounting charges.
Going into the vital Christmas period, first-quarter like-for-like sales were up 7% and operational profits of £1.9m were up £1.2m on last year.
Halloween sales were 11.4% higher than last year - this is usually a good indicator of how a retailer will do at Christmas, says retail analyst Catherine Shuttleworth of Savvy Marketing.
According to Julie Palmer, managing partner at insolvency specialist Begbies Traynor: "This isn't a story about shoppers abandoning Poundland. The tills are busier than they were a year ago."
She adds: "On the face of it, a turnaround seems well under way."
However, Gordon Brothers has been restricting Poundland's access to cash needed to restock stores and meet day-to-day expenses.
It had frozen about £50m in funds leading to concerns Poundland's shops would run out of stock.
However, Gordon Brothers released around £21m over two weeks recently, giving the chain a little more breathing space.
So why is it facing administration?
Poundland seems to be facing "a funding and ownership problem rather than a trading collapse", Palmer says.
However, while Poundland boss Barry Williams says the business is making a "strong recovery", Gordon Brothers has painted a different picture, saying the chain remains "challenged and vulnerable to any potential downturn in future trading".
It says it has provided significant funding to support the company's ability to trade since it acquired the business.
It has also made about £18m from a combination of debt interest payments and other fees and charges.
As well as being Poundland's owner, it is one of its lenders, and is owed loans, including a £22.5m shareholder loan it inherited when it bought the business for £1.
As the main creditor, Gordon Brothers would be first in line to get paid back if the business goes under - but its suppliers are not.
"When the owner is also the main lender, its first priority is recovering [loans]," says Palmer. "Sometimes the route that best protects the lender is different from the one that saves the most jobs, and that tension is why this has become such a political story."
Irish firm Martin Property Group has offered to buy the business as a going concern, while London-based holding company Xyra Group has also made a rescue bid, although doubts remain about the credibility of Xyra's offer.
There is also a third, unnamed bid on the table.
Gordon Brothers has also been weighing options to break Poundland up.
The US company's view is that ultimately breaking the retailer up will provide more security for employees in the long term, because any buyers of its store estate will also have to agree to keep the employees on.
Insiders who are critical of how Gordon Brothers has handled the Poundland sale say it is driving the business into the ground to make money through the insolvency process.
But the investment firm, which specialises in buying and restructuring distressed companies, has denied the claim.
What future does Poundland have?
For now, Poundland has avoided immediate collapse after a deadline was extended by 10 days to find a rescue deal.
Shuttleworth says the future of Poundland is "really unclear, with the owners and the management at loggerheads about its future".
Palmer says there are two ways forward for Poundland - either a solvent deal, where the company gets bought and carries on trading, or a collapse followed by a break-up.
"The immediate make-or-break issue is Christmas: a value retailer that can't get stock on its shelves in November and December is in serious trouble, whatever its full-year results say," says Palmer.
There has been political pressure on Gordon Brothers from both Prime Minister Andy Burnham and Business Secretary Jonathan Reynolds. They have called for answers over why the Martin Property Group offer to buy the business, which would have protected jobs, was rejected.
A committee of MPs also questioned Gordon Brothers last week, adding to pressure.
But Shuttleworth says that as a US firm Gordon Brothers appears "unmoved" by the arguments that the UK government has put forward.`,
    bodyJa: `What is going on with Poundland?
- Published
The future of Poundland hangs in the balance as it faces a possible collapse into administration.
Its owner, US investment firm Gordon Brothers, put it up for sale in September, but then rejected offers to keep the business afloat.
Poundland has a major presence on the High Street, with 600 stores in the UK and Ireland, where it trades under the Dealz brand.
If it were to collapse, the jobs of its 11,000 employees would be at risk, as well as potentially thousands of others at firms that supply the retailer.
How have we got here?
Have people stopped shopping at Poundland?
People have not stopped shopping at Poundland - quite the opposite.
Although the chain was struggling when it was sold by Pepco last year for £1, the business turned a corner over the year to September, going from a £68m loss to an £18.1m profit before interest, tax and certain accounting charges.
Going into the vital Christmas period, first-quarter like-for-like sales were up 7% and operational profits of £1.9m were up £1.2m on last year.
Halloween sales were 11.4% higher than last year - this is usually a good indicator of how a retailer will do at Christmas, says retail analyst Catherine Shuttleworth of Savvy Marketing.
According to Julie Palmer, managing partner at insolvency specialist Begbies Traynor: "This isn't a story about shoppers abandoning Poundland. The tills are busier than they were a year ago."
She adds: "On the face of it, a turnaround seems well under way."
However, Gordon Brothers has been restricting Poundland's access to cash needed to restock stores and meet day-to-day expenses.
It had frozen about £50m in funds leading to concerns Poundland's shops would run out of stock.
However, Gordon Brothers released around £21m over two weeks recently, giving the chain a little more breathing space.
So why is it facing administration?
Poundland seems to be facing "a funding and ownership problem rather than a trading collapse", Palmer says.
However, while Poundland boss Barry Williams says the business is making a "strong recovery", Gordon Brothers has painted a different picture, saying the chain remains "challenged and vulnerable to any potential downturn in future trading".
It says it has provided significant funding to support the company's ability to trade since it acquired the business.
It has also made about £18m from a combination of debt interest payments and other fees and charges.
As well as being Poundland's owner, it is one of its lenders, and is owed loans, including a £22.5m shareholder loan it inherited when it bought the business for £1.
As the main creditor, Gordon Brothers would be first in line to get paid back if the business goes under - but its suppliers are not.
"When the owner is also the main lender, its first priority is recovering [loans]," says Palmer. "Sometimes the route that best protects the lender is different from the one that saves the most jobs, and that tension is why this has become such a political story."
Irish firm Martin Property Group has offered to buy the business as a going concern, while London-based holding company Xyra Group has also made a rescue bid, although doubts remain about the credibility of Xyra's offer.
There is also a third, unnamed bid on the table.
Gordon Brothers has also been weighing options to break Poundland up.
The US company's view is that ultimately breaking the retailer up will provide more security for employees in the long term, because any buyers of its store estate will also have to agree to keep the employees on.
Insiders who are critical of how Gordon Brothers has handled the Poundland sale say it is driving the business into the ground to make money through the insolvency process.
But the investment firm, which specialises in buying and restructuring distressed companies, has denied the claim.
What future does Poundland have?
For now, Poundland has avoided immediate collapse after a deadline was extended by 10 days to find a rescue deal.
Shuttleworth says the future of Poundland is "really unclear, with the owners and the management at loggerheads about its future".
Palmer says there are two ways forward for Poundland - either a solvent deal, where the company gets bought and carries on trading, or a collapse followed by a break-up.
"The immediate make-or-break issue is Christmas: a value retailer that can't get stock on its shelves in November and December is in serious trouble, whatever its full-year results say," says Palmer.
There has been political pressure on Gordon Brothers from both Prime Minister Andy Burnham and Business Secretary Jonathan Reynolds. They have called for answers over why the Martin Property Group offer to buy the business, which would have protected jobs, was rejected.
A committee of MPs also questioned Gordon Brothers last week, adding to pressure.
But Shuttleworth says that as a US firm Gordon Brothers appears "unmoved" by the arguments that the UK government has put forward.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cm4g10p2r0g9o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-23T00:22:27+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/f2b3/live/3c7f3110-d7bf-11f1-a719-bf3dc3a3d5b5.jpg",
    readTime: 10,
  },
  {
    id: "san-francisco-is-enjoying-an-ai-boom-but-bba972b7",
    title: "San Francisco is enjoying an AI boom, but worries about a crash are growing",
    titleJa: "San Francisco is enjoying an AI boom, but worries about a crash are growing",
    summaryJa: "AI employees in the industry's epicentre - San Francisco - worry that the sector is overheated.",
    bodyOriginal: `San Francisco is enjoying an AI boom, but worries about a crash are growing
- Published
Lauren Goldboss is busy. The owner of a small San Francisco dog-walking company, she has been hiring staff and buying vans.
Fuelling the growth is her new office dog-walking service Paw Perk, popular with some local AI start-ups.
Her business is an example of how the AI boom in San Francisco is benefiting other sectors.
The city saw an exodus of residents during the pandemic and its downtown was weakened by remote work, but it s now enjoying a rejuvenation, with AI being the major driver.
Leading AI firms OpenAI and Anthropic – which have been hiring top engineering talent, often on eye-popping salaries – are based here. Anthropic, the company behind the Claude chatbot, last week listed on New York's Nasdaq stock exchange.
Thousands of other AI start-ups have also sprung up, external in San Francisco.
Signs of the boom are evident in soaring rents and house prices, falling office vacancies, and buses and billboards plastered with cryptic AI adverts.
But what if there is a significant downward correction in AI share prices and a resulting big fall in investment in the industry? The International Monetary Fund last month became the latest organization to warn, external that this was a possibility.
Concerns have since continued due to the scandal surrounding Jensen Huang, the former boss of AI firm Nvidia, based south of San Francisco, causing some wider AI stock falls. However, Nvidia remains highly profitable, and Wednesday of this week it reported that its latest quarterly profits had doubled from a year earlier to $65bn (£49bn).
Simon Jack: Can Anthropic's record-breaking IPO stop the AI bubble bursting?
- Published4 days ago
Wealthy AI workers send San Francisco house prices soaring
- Published9 July
What are the thoughts of AI workers in the city, and should San Francisco – no stranger to tech's boom-and-bust cycles – be preparing for a possible crash?
One AI worker, employed by one of the largest companies in the city, is convinced that a crash is coming. "I am certain that the house of cards will come down… and I'm sure it will affect me," says the man who asked that we didn't use his name.
He questions whether leading US AI companies can generate enough revenues to justify their enormous spending commitments as cheaper, increasingly capable AI models emerge, especially from China.
But he isn't losing sleep over it. "Why worry about things I can't control?"
Another San Francisco-based AI worker, who also asked to remain anonymous, says that a significant market correction is "totally possible".
Yet he adds that most people don't think of it as the core risk. Instead, he says that the bigger concern in his circles, and the one he shares, is the existential risk that AI could pose to humanity.
"In some weird way, a market correction being the worst-case outcome feels great."
If there is an AI crash, San Francisco could be hit far more than Silicon Valley which lies 40 miles to its south.
That's because the AI boom is very much centred on the city itself rather than the wider San Francisco Bay Area, which includes Silicon Valley.
One study, external found that 60% of all venture capital invested in US AI firms from 2023 to 2025 went to the companies located in San Francisco, dwarfing the significantly smaller percentage given to companies in Silicon Valley.
But some factors suggest that the impact of a crash in San Francisco may be softer than some fear.
For all the investment they have attracted, AI companies are employing relatively few workers in the city compared to previous tech booms. So there may not be that many jobs to lose in a downturn.
"Hiring isn't necessarily on the scale as we would have thought with the amount of venture capital and new company formation," says Jeff Bellisario, executive director of the Bay Area Council Economic Institute, a business-affiliated think tank.
Ted Egan, the chief economist for the City and County of San Francisco, adds that "because of AI, it is a good time for tech again in the city, but we are not seeing tonnes of overall tech job growth".
Despite the expansion of the AI sector, the city remains about 35,000 jobs shy of its pre-pandemic peak, estimates Enrico Moretti, an economics professor at the University of California, Berkeley.
Instead, much of the spending by AI firms in the US is going towards data centres and computing power, relatively little of which are located in the Bay Area. San Francisco might be the brains of the AI boom, but it isn't the brawn.
Nonetheless, a significant correction could still be "very painful" for San Francisco, warns Moretti. Less AI hiring and potential layoffs would ripple through the local service sector, likely to affect jobs in everything from restaurants, to retail, to personal services like dog walking.
"It is the spillover on service jobs that would actually be the main effect," he says.
Office vacancies could also rise, reducing downtown foot traffic, while rents and house prices could weaken.
But AI isn't the only force driving San Francisco's recovery. Healthcare and tourism – which the city has been working to encourage, including by improving downtown safety and cleanliness – are also growing,, external which may help cushion against a possible AI downturn.
"Tourism is not fully back, but the growth has been healthy," says Egan, adding that it is a sign of confidence in San Francisco.
All told, Egan doesn't expect an AI crash to fundamentally alter San Francisco's economic trajectory.
"The city's economy has not been screaming during this AI boom, so I wouldn't expect it to grind to a halt if there was a slowdown in AI spending," he says. "I think of it primarily as a hiccup that we should expect, rather than a major course correction for the city's economy."
As to whether and how San Francisco's city government should prepare, there are limits to what it can do, note Bellisario and Moretti. But encouraging growth in sectors beyond technology and maintaining financial reserves could help.
For Goldboss, the dog-walking company owner, her philosophy is to "build while it is here". If the next tech bust comes – "always a reality in San Francisco" – she will try to adapt to what the market needs. "It is just the risk you kind of have to take," she says.
- Published12 November
- Published24 September`,
    bodyJa: `San Francisco is enjoying an AI boom, but worries about a crash are growing
- Published
Lauren Goldboss is busy. The owner of a small San Francisco dog-walking company, she has been hiring staff and buying vans.
Fuelling the growth is her new office dog-walking service Paw Perk, popular with some local AI start-ups.
Her business is an example of how the AI boom in San Francisco is benefiting other sectors.
The city saw an exodus of residents during the pandemic and its downtown was weakened by remote work, but it s now enjoying a rejuvenation, with AI being the major driver.
Leading AI firms OpenAI and Anthropic – which have been hiring top engineering talent, often on eye-popping salaries – are based here. Anthropic, the company behind the Claude chatbot, last week listed on New York's Nasdaq stock exchange.
Thousands of other AI start-ups have also sprung up, external in San Francisco.
Signs of the boom are evident in soaring rents and house prices, falling office vacancies, and buses and billboards plastered with cryptic AI adverts.
But what if there is a significant downward correction in AI share prices and a resulting big fall in investment in the industry? The International Monetary Fund last month became the latest organization to warn, external that this was a possibility.
Concerns have since continued due to the scandal surrounding Jensen Huang, the former boss of AI firm Nvidia, based south of San Francisco, causing some wider AI stock falls. However, Nvidia remains highly profitable, and Wednesday of this week it reported that its latest quarterly profits had doubled from a year earlier to $65bn (£49bn).
Simon Jack: Can Anthropic's record-breaking IPO stop the AI bubble bursting?
- Published4 days ago
Wealthy AI workers send San Francisco house prices soaring
- Published9 July
What are the thoughts of AI workers in the city, and should San Francisco – no stranger to tech's boom-and-bust cycles – be preparing for a possible crash?
One AI worker, employed by one of the largest companies in the city, is convinced that a crash is coming. "I am certain that the house of cards will come down… and I'm sure it will affect me," says the man who asked that we didn't use his name.
He questions whether leading US AI companies can generate enough revenues to justify their enormous spending commitments as cheaper, increasingly capable AI models emerge, especially from China.
But he isn't losing sleep over it. "Why worry about things I can't control?"
Another San Francisco-based AI worker, who also asked to remain anonymous, says that a significant market correction is "totally possible".
Yet he adds that most people don't think of it as the core risk. Instead, he says that the bigger concern in his circles, and the one he shares, is the existential risk that AI could pose to humanity.
"In some weird way, a market correction being the worst-case outcome feels great."
If there is an AI crash, San Francisco could be hit far more than Silicon Valley which lies 40 miles to its south.
That's because the AI boom is very much centred on the city itself rather than the wider San Francisco Bay Area, which includes Silicon Valley.
One study, external found that 60% of all venture capital invested in US AI firms from 2023 to 2025 went to the companies located in San Francisco, dwarfing the significantly smaller percentage given to companies in Silicon Valley.
But some factors suggest that the impact of a crash in San Francisco may be softer than some fear.
For all the investment they have attracted, AI companies are employing relatively few workers in the city compared to previous tech booms. So there may not be that many jobs to lose in a downturn.
"Hiring isn't necessarily on the scale as we would have thought with the amount of venture capital and new company formation," says Jeff Bellisario, executive director of the Bay Area Council Economic Institute, a business-affiliated think tank.
Ted Egan, the chief economist for the City and County of San Francisco, adds that "because of AI, it is a good time for tech again in the city, but we are not seeing tonnes of overall tech job growth".
Despite the expansion of the AI sector, the city remains about 35,000 jobs shy of its pre-pandemic peak, estimates Enrico Moretti, an economics professor at the University of California, Berkeley.
Instead, much of the spending by AI firms in the US is going towards data centres and computing power, relatively little of which are located in the Bay Area. San Francisco might be the brains of the AI boom, but it isn't the brawn.
Nonetheless, a significant correction could still be "very painful" for San Francisco, warns Moretti. Less AI hiring and potential layoffs would ripple through the local service sector, likely to affect jobs in everything from restaurants, to retail, to personal services like dog walking.
"It is the spillover on service jobs that would actually be the main effect," he says.
Office vacancies could also rise, reducing downtown foot traffic, while rents and house prices could weaken.
But AI isn't the only force driving San Francisco's recovery. Healthcare and tourism – which the city has been working to encourage, including by improving downtown safety and cleanliness – are also growing,, external which may help cushion against a possible AI downturn.
"Tourism is not fully back, but the growth has been healthy," says Egan, adding that it is a sign of confidence in San Francisco.
All told, Egan doesn't expect an AI crash to fundamentally alter San Francisco's economic trajectory.
"The city's economy has not been screaming during this AI boom, so I wouldn't expect it to grind to a halt if there was a slowdown in AI spending," he says. "I think of it primarily as a hiccup that we should expect, rather than a major course correction for the city's economy."
As to whether and how San Francisco's city government should prepare, there are limits to what it can do, note Bellisario and Moretti. But encouraging growth in sectors beyond technology and maintaining financial reserves could help.
For Goldboss, the dog-walking company owner, her philosophy is to "build while it is here". If the next tech bust comes – "always a reality in San Francisco" – she will try to adapt to what the market needs. "It is just the risk you kind of have to take," she says.
- Published12 November
- Published24 September`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cqe9k09j9jv4o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-23T00:08:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/4d7f/live/712502a0-e2cd-11f1-99ed-7de3e5932968.jpg",
    readTime: 10,
  },
  {
    id: "employees-at-eric-trump-backed-robot-sta-774ce43f",
    title: "Employees at Eric Trump-backed robot startup lose health benefits as company's cash crunch deepens",
    titleJa: "Employees at Eric Trump-backed robot startup lose health benefits as company's cash crunch deepens",
    summaryJa: "Foundation is pursuing an emergency bridge loan and has been in talks with VC firms as it waits for a $150 million investment from South Korea's Base Group.",
    bodyOriginal: `Employees at Foundation Future Industries were told that their health benefits through administrator Rippling have been terminated, according to a memo obtained by CNBC, adding to mounting signs of financial distress at the humanoid robot startup advised and backed by Eric Trump.
Foundation told staff in a Friday evening email that they'd be offered coverage through COBRA, the federal law that generally lets workers temporarily keep their health insurance after losing benefits by paying the full premium out of pocket.
"Because our last pay run through Rippling was in October, they have ended our benefits with them retroactive to October," a Foundation human resources manager said in the memo. "COBRA will be offered to all employees to cover November."
Foundation has garnered headlines for the bold claims that co-founder Sankaet Pathak — whose previous startup collapsed in 2024 — has made about his robots and their potential use in war zones. Employees were last paid on Oct. 15, and some inside the company are angry at Pathak for a $4.6 million loan he took from his company last year, CNBC reported earlier this month.
A Foundation spokesman didn't immediately respond to an email or phone call seeking comment.
In the staff memo, Foundation blamed Rippling for the disruption to health coverage. The startup also said it would reimburse COBRA premiums paid by workers and that it was onboarding a new benefits provider.
But employees, especially those whose family members are undergoing treatment for medical ailments, worry the company won't have funds to reimburse workers or reinstate coverage, people with direct knowledge of the situation said.
In a statement to CNBC, Rippling indicated it was Foundation's failure to pay for its employee benefits that led to the change: "If a client enrolled in Rippling's [Professional Employer Organization] is unable to meet their payroll and benefits obligations for multiple months, they will first receive a warning and if not met, they are terminated."
Rescue loan
Foundation has been seeking a bridge loan to repay employees after its financial woes began in August. It has been in talks with three or four venture capital firms, including existing investor Tribe Capital, Pathak has told employees, according to people familiar with the situation, who asked to remain unnamed because they were not authorized to speak publicly and feared retaliation. Tribe didn't immediately return a request for comment.
The bridge loan would help the company survive until a possible $150 million investment from South Korean conglomerate Base Group lands as early as December or January, Pathak has told employees, the people said.
Base confirmed to Reuters in recent days that it was considering an investment, but the funding has not been finalized.
The potential investment would deepen business ties between the Trump family and the South Korean conglomerate, an aluminum producer also known for real estate and hospitality projects.
Base paid the Trump Organization $2 million in 2025, according to a New York Times article, drawing scrutiny from Democratic senators over conflict-of-interest concerns. Base has also pursued other business relationships with the Trump Organization, including a Trump-branded golf course in South Korea.
Eric Trump, who has invested in Foundation and was given the title of chief strategy advisor, didn't immediately respond to a CNBC email seeking comment.
Inside Foundation
The prospect of employees having to pay for their own health coverage comes as many are already drawing down savings to cover living expenses. With another scheduled payday approaching on Nov. 30, workers are facing a third straight pay cycle without income.
Many are actively interviewing for other jobs, and attendance at the company's San Francisco headquarters has fallen sharply, according to people familiar.
Frustration has boiled over into distrust of Pathak's leadership for some employees, while others hope Pathak can secure funding to repay workers and bring the company back to financial health. In conversations and memos, Pathak says that he is highly invested in securing Foundation's future, the people said.
Despite the firm's shaky finances, Foundation continued to hire for open roles until recently and some new workers have never been fully paid, said the people.
To keep employees from leaving before a possible Base Group investment, Pathak has floated the idea of offering workers equity in the startup, the people said.
At the same time, human resources staff have warned workers against taking legal action with California to recover their wages, saying that any employees who file complaints with the state would be dismissed, the people said.
Following a Nov. 14 CNBC report detailing the missed payrolls and a $4.6 million loan Pathak took from the startup in 2025, the chief executive addressed the issue in an all-hands meeting, according to the people.
Pathak defended the arrangement by telling workers that he had plowed his own money into the startup and takes only a nominal salary, the people said.
The co-founder also told employees who were in dire financial straits to contact human resources for help covering personal bills, the people added.
"I'm burning through savings just to afford my apartment," one employee told CNBC. "It's extremely unfortunate we're in this situation."`,
    bodyJa: `Employees at Foundation Future Industries were told that their health benefits through administrator Rippling have been terminated, according to a memo obtained by CNBC, adding to mounting signs of financial distress at the humanoid robot startup advised and backed by Eric Trump.
Foundation told staff in a Friday evening email that they'd be offered coverage through COBRA, the federal law that generally lets workers temporarily keep their health insurance after losing benefits by paying the full premium out of pocket.
"Because our last pay run through Rippling was in October, they have ended our benefits with them retroactive to October," a Foundation human resources manager said in the memo. "COBRA will be offered to all employees to cover November."
Foundation has garnered headlines for the bold claims that co-founder Sankaet Pathak — whose previous startup collapsed in 2024 — has made about his robots and their potential use in war zones. Employees were last paid on Oct. 15, and some inside the company are angry at Pathak for a $4.6 million loan he took from his company last year, CNBC reported earlier this month.
A Foundation spokesman didn't immediately respond to an email or phone call seeking comment.
In the staff memo, Foundation blamed Rippling for the disruption to health coverage. The startup also said it would reimburse COBRA premiums paid by workers and that it was onboarding a new benefits provider.
But employees, especially those whose family members are undergoing treatment for medical ailments, worry the company won't have funds to reimburse workers or reinstate coverage, people with direct knowledge of the situation said.
In a statement to CNBC, Rippling indicated it was Foundation's failure to pay for its employee benefits that led to the change: "If a client enrolled in Rippling's [Professional Employer Organization] is unable to meet their payroll and benefits obligations for multiple months, they will first receive a warning and if not met, they are terminated."
Rescue loan
Foundation has been seeking a bridge loan to repay employees after its financial woes began in August. It has been in talks with three or four venture capital firms, including existing investor Tribe Capital, Pathak has told employees, according to people familiar with the situation, who asked to remain unnamed because they were not authorized to speak publicly and feared retaliation. Tribe didn't immediately return a request for comment.
The bridge loan would help the company survive until a possible $150 million investment from South Korean conglomerate Base Group lands as early as December or January, Pathak has told employees, the people said.
Base confirmed to Reuters in recent days that it was considering an investment, but the funding has not been finalized.
The potential investment would deepen business ties between the Trump family and the South Korean conglomerate, an aluminum producer also known for real estate and hospitality projects.
Base paid the Trump Organization $2 million in 2025, according to a New York Times article, drawing scrutiny from Democratic senators over conflict-of-interest concerns. Base has also pursued other business relationships with the Trump Organization, including a Trump-branded golf course in South Korea.
Eric Trump, who has invested in Foundation and was given the title of chief strategy advisor, didn't immediately respond to a CNBC email seeking comment.
Inside Foundation
The prospect of employees having to pay for their own health coverage comes as many are already drawing down savings to cover living expenses. With another scheduled payday approaching on Nov. 30, workers are facing a third straight pay cycle without income.
Many are actively interviewing for other jobs, and attendance at the company's San Francisco headquarters has fallen sharply, according to people familiar.
Frustration has boiled over into distrust of Pathak's leadership for some employees, while others hope Pathak can secure funding to repay workers and bring the company back to financial health. In conversations and memos, Pathak says that he is highly invested in securing Foundation's future, the people said.
Despite the firm's shaky finances, Foundation continued to hire for open roles until recently and some new workers have never been fully paid, said the people.
To keep employees from leaving before a possible Base Group investment, Pathak has floated the idea of offering workers equity in the startup, the people said.
At the same time, human resources staff have warned workers against taking legal action with California to recover their wages, saying that any employees who file complaints with the state would be dismissed, the people said.
Following a Nov. 14 CNBC report detailing the missed payrolls and a $4.6 million loan Pathak took from the startup in 2025, the chief executive addressed the issue in an all-hands meeting, according to the people.
Pathak defended the arrangement by telling workers that he had plowed his own money into the startup and takes only a nominal salary, the people said.
The co-founder also told employees who were in dire financial straits to contact human resources for help covering personal bills, the people added.
"I'm burning through savings just to afford my apartment," one employee told CNBC. "It's extremely unfortunate we're in this situation."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/22/foundation-future-industries-health-benefits-payroll-base-group.html",
    publishedAt: "2026-11-22T18:55:05+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    readTime: 10,
  },
  {
    id: "director-of-national-intelligence-jay-cl-738bb154",
    title: "Director of National Intelligence Jay Clayton warns Americans of 'bumps in the road' after tech outages",
    titleJa: "Director of National Intelligence Jay Clayton warns Americans of 'bumps in the road' after tech outages",
    summaryJa: "Clayton’s warning comes ahead of Thanksgiving travel, after separate outages disrupted air travel, Microsoft 365 and some bank transactions.",
    bodyOriginal: `Director of National Intelligence Jay Clayton warned Americans to prepare for "bumps in the road" after a set of damaging technology outages rocked air travel and systems like Microsoft Outlook.
Government officials have largely dismissed the prospects that the outages, which also slowed bank transactions, are linked to a coordinated or artificial intelligence cyberattack.
Clayton, however, said on CNN's "State of the Union" that outages may continue as companies and the government upgrade their systems to adapt to the AI age.
"The American people should be prepared for a great deal of investment in upgrading our systems; they should be prepared for investment in cybersecurity, and they should be prepared that any time there is a step change in technology, a step change in both compute and applications, there will be bumps in the road," Clayton said.
"You prepare by knowing that systems are going to be upgraded; they may be interrupted for a period of time and that companies and government are dealing with this on the front foot," he said.
Clayton's warning came as the U.S. prepares to celebrate Thanksgiving on Thursday, one of the busiest travel weeks of the year. A technology outage prompted a nationwide ground stop just over a week ago, which lasted for hours.
The Federal Aviation Administration said router upgrades caused a flood of data that led to the ground stop, and that there is no indication of a cyberattack.
Separately, Microsoft said the Outlook outage was caused by "an issue during an earlier network capacity upgrade."
Treasury Secretary Scott Bessent delivered a similar message on CBS' "Face the Nation."
Asked if Americans should be concerned about the security of their financial institutions, Bessent said: "No, they shouldn't."
"The patches may cause a glitch," he said, referring to measures banks are taking to safeguard from AI. "I think the American people should think of it as a vaccine; your arm may hurt, you may feel a little bad the next day, but it increases your long-term immunity and resiliency."`,
    bodyJa: `Director of National Intelligence Jay Clayton warned Americans to prepare for "bumps in the road" after a set of damaging technology outages rocked air travel and systems like Microsoft Outlook.
Government officials have largely dismissed the prospects that the outages, which also slowed bank transactions, are linked to a coordinated or artificial intelligence cyberattack.
Clayton, however, said on CNN's "State of the Union" that outages may continue as companies and the government upgrade their systems to adapt to the AI age.
"The American people should be prepared for a great deal of investment in upgrading our systems; they should be prepared for investment in cybersecurity, and they should be prepared that any time there is a step change in technology, a step change in both compute and applications, there will be bumps in the road," Clayton said.
"You prepare by knowing that systems are going to be upgraded; they may be interrupted for a period of time and that companies and government are dealing with this on the front foot," he said.
Clayton's warning came as the U.S. prepares to celebrate Thanksgiving on Thursday, one of the busiest travel weeks of the year. A technology outage prompted a nationwide ground stop just over a week ago, which lasted for hours.
The Federal Aviation Administration said router upgrades caused a flood of data that led to the ground stop, and that there is no indication of a cyberattack.
Separately, Microsoft said the Outlook outage was caused by "an issue during an earlier network capacity upgrade."
Treasury Secretary Scott Bessent delivered a similar message on CBS' "Face the Nation."
Asked if Americans should be concerned about the security of their financial institutions, Bessent said: "No, they shouldn't."
"The patches may cause a glitch," he said, referring to measures banks are taking to safeguard from AI. "I think the American people should think of it as a vaccine; your arm may hurt, you may feel a little bad the next day, but it increases your long-term immunity and resiliency."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/22/jay-clayton-tech-outages-faa-microsoft-thanksgiving.html",
    publishedAt: "2026-11-22T17:14:03+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 5,
  },
  {
    id: "centrica-boss-says-he-is-hugely-concerne-d65b769f",
    title: "Centrica boss says he is 'hugely concerned' over impact of soaring energy bills",
    titleJa: "Centrica boss says he is 'hugely concerned' over impact of soaring energy bills",
    summaryJa: "Chris O'Shea says the number of people unable or unwilling to pay their energy bills will increase when prices jump in the new year.",
    bodyOriginal: `Centrica boss 'hugely concerned' over impact of soaring energy bills
- Published
The boss of British Gas owner Centrica says he is "hugely concerned" about the impact the expected jump in energy bills in January will have on consumers.
Chris O'Shea told the BBC he thought the number of people unable or unwilling to pay their energy bills would rise when prices go up in the new year.
The new energy price cap to take effect from January will be announced on Wednesday and consultancy Cornwall Insight has forecast it will jump by £443 a year for a typical household.
The government has said some households will get £100 to help with energy bills, but Citizens Advice said it was a "drop in the ocean" while one pressure group called for action on "inflated energy firm profits".
Speaking to the Sunday with Laura Kuenssberg programme, O'Shea said the predictions for a "substantial increase" in bills from January were "materially correct", adding that the first quarter of the year was the time when most energy was consumed.
"That's right at the point where people will be paying for Christmas and the like. So I am hugely concerned," he said.
O'Shea added there was a "massive problem" with people not paying their bills in the UK, with some not able to pay their bills and an "increasing number of people that are choosing not to pay their bills".
He said the collective impact of that was that "every single electricity consumer, is paying about £1.50, £1.60 a week to cover the cost of people that are not paying their bills, and it's just going to get worse when bills go up".
The amount owed to energy suppliers by households hit £5bn in the April to June period, according to energy regulator Ofgem.
Wholesale energy prices paid by suppliers have been rising this year as a result of the conflict in the Middle East, which has pushed up bills for households.
Cornwall Insight has predicted Ofgem's energy price cap will rise by 26% to £2,166 a year for a typical household from 1 January.
The price cap affects about 20 million households in England, Scotland and Wales and sets a maximum price for each unit of gas and electricity, so the actual level of bills will vary according to energy usage.
The government has said some households will get a £100 payment to help with energy bills, a policy which was announced in the Budget.
The government has also temporarily cut 5% VAT from electricity bills until the end of June next year, which is expected to save the typical household about £45 a year.
But consumer groups have argued the £100 payment announced in the Budget will not be enough for some.
Citizens Advice said it was a "drop in the ocean" and that we would see "cold-related deaths" this winter.
"For someone in a lot of debt, who can't afford their bills, it's not going to touch the sides."
The Fuel Poverty Action Group said the government and Ofgem needed to take stronger action against energy companies.
"Our inflated energy prices are driven by inflated energy firm profits," the group said.
"Government and Ofgem must take stronger action against this blatant profiteering whilst we suffer in cold homes, or are forced into debt."
Energy firms operating in the UK are subject to a windfall tax that was introduced in 2022.
When the windfall tax is added to other taxes levied, it means the overall tax rate on profits earned by oil and gas companies operating in the UK is 78%.`,
    bodyJa: `Centrica boss 'hugely concerned' over impact of soaring energy bills
- Published
The boss of British Gas owner Centrica says he is "hugely concerned" about the impact the expected jump in energy bills in January will have on consumers.
Chris O'Shea told the BBC he thought the number of people unable or unwilling to pay their energy bills would rise when prices go up in the new year.
The new energy price cap to take effect from January will be announced on Wednesday and consultancy Cornwall Insight has forecast it will jump by £443 a year for a typical household.
The government has said some households will get £100 to help with energy bills, but Citizens Advice said it was a "drop in the ocean" while one pressure group called for action on "inflated energy firm profits".
Speaking to the Sunday with Laura Kuenssberg programme, O'Shea said the predictions for a "substantial increase" in bills from January were "materially correct", adding that the first quarter of the year was the time when most energy was consumed.
"That's right at the point where people will be paying for Christmas and the like. So I am hugely concerned," he said.
O'Shea added there was a "massive problem" with people not paying their bills in the UK, with some not able to pay their bills and an "increasing number of people that are choosing not to pay their bills".
He said the collective impact of that was that "every single electricity consumer, is paying about £1.50, £1.60 a week to cover the cost of people that are not paying their bills, and it's just going to get worse when bills go up".
The amount owed to energy suppliers by households hit £5bn in the April to June period, according to energy regulator Ofgem.
Wholesale energy prices paid by suppliers have been rising this year as a result of the conflict in the Middle East, which has pushed up bills for households.
Cornwall Insight has predicted Ofgem's energy price cap will rise by 26% to £2,166 a year for a typical household from 1 January.
The price cap affects about 20 million households in England, Scotland and Wales and sets a maximum price for each unit of gas and electricity, so the actual level of bills will vary according to energy usage.
The government has said some households will get a £100 payment to help with energy bills, a policy which was announced in the Budget.
The government has also temporarily cut 5% VAT from electricity bills until the end of June next year, which is expected to save the typical household about £45 a year.
But consumer groups have argued the £100 payment announced in the Budget will not be enough for some.
Citizens Advice said it was a "drop in the ocean" and that we would see "cold-related deaths" this winter.
"For someone in a lot of debt, who can't afford their bills, it's not going to touch the sides."
The Fuel Poverty Action Group said the government and Ofgem needed to take stronger action against energy companies.
"Our inflated energy prices are driven by inflated energy firm profits," the group said.
"Government and Ofgem must take stronger action against this blatant profiteering whilst we suffer in cold homes, or are forced into debt."
Energy firms operating in the UK are subject to a windfall tax that was introduced in 2022.
When the windfall tax is added to other taxes levied, it means the overall tax rate on profits earned by oil and gas companies operating in the UK is 78%.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c6jre7gpdw13o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-22T13:50:21+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/7208/live/d02d4240-e682-11f1-99b6-a35a62fa4264.jpg",
    readTime: 9,
  },
  {
    id: "saudi-arabia-bahrain-report-new-attacks-f99a1d07",
    title: "Saudi Arabia, Bahrain report new attacks as Iran says it remains open to a deal with U.S.",
    titleJa: "Saudi Arabia, Bahrain report new attacks as Iran says it remains open to a deal with U.S.",
    summaryJa: "Saudi Arabia said it destroyed a drone launched by Iran-backed Houthis, while Bahrain said an industrial facility was hit by Iranian projectiles.",
    bodyOriginal: `Saudi Arabia and Bahrain reported attacks by Iran-linked forces over the weekend, as Iran's foreign minister said his government remains open to a deal to end the war with the U.S.
"Intercepted and destroyed a drone launched by the Houthi terrorist militia toward the Riyadh area," the Saudi-led Coalition to Support Legitimacy in Yemen, which has been leading the fight against the Iran-backed group, said Sunday in a post on X.
The coalition said late Saturday that its air defenses "intercepted and destroyed a ballistic missile" launched by the Yemen-based Houthis toward Saudi Arabia's western region, which includes some of the country's sensitive energy refining and export infrastructure.
Neighboring Bahrain also said it came under Iranian fire.
"As a result of the heinous Iranian aggression, a civilian industrial facility was targeted, causing a fire at the site," Bahrain's Ministry of Interior said on X. The ministry later said two people, a Bahraini citizen and a Pakistani resident, were injured in the attack.
Bahrain is home to the U.S. Navy's Fifth Fleet.
Iranian state media reported late Saturday that the country's Islamic Revolutionary Guard Corps fired missiles and drones at U.S. military facilities in Bahrain.
A separate Iranian media report claimed the IRGC's air defenses intercepted and destroyed a U.S. MQ-9 drone.
U.S. Central Command did not immediately respond to CNBC's request for comment on either Iranian report.
Reaching a final agreement
Meanwhile, Iranian Foreign Minister Abbas Araghchi said his government remains open to a negotiated settlement to the war. An agreement aimed at developing a permanent peace deal signed in June between President Donald Trump and his Iranian counterpart Masoud Pezeshkian — the so-called Islamabad Memorandum of Understanding — later broke down.
"The Islamabad Memorandum of Understanding is no longer on the table and has no implementation relevance," Araghchi told the Iran newspaper.
"However, the commitments that the U.S. had accepted in that Memorandum of Understanding and the principle that the implementation of those commitments can pave the way for reaching a final agreement are still accepted by both sides," he said.
The war, which began with U.S. and Israeli airstrikes on Iranian targets on Feb. 28, has resulted in major disruptions to energy shipments through the Strait of Hormuz between Iran and Oman.
The United Kingdom Maritime Trade Operations reported that two tankers near Oman were struck by unidentified projectiles on Saturday.
Iran has imposed curbs on vessels moving through the strait, a major sticking point in negotiations with the U.S.
Oil prices have fallen for three straight weeks, however, as traders weighed strong Middle East flows and rising U.S. inventories.
International benchmark Brent crude fell 3.4% for the week, while U.S. crude tumbled 5.2%.`,
    bodyJa: `Saudi Arabia and Bahrain reported attacks by Iran-linked forces over the weekend, as Iran's foreign minister said his government remains open to a deal to end the war with the U.S.
"Intercepted and destroyed a drone launched by the Houthi terrorist militia toward the Riyadh area," the Saudi-led Coalition to Support Legitimacy in Yemen, which has been leading the fight against the Iran-backed group, said Sunday in a post on X.
The coalition said late Saturday that its air defenses "intercepted and destroyed a ballistic missile" launched by the Yemen-based Houthis toward Saudi Arabia's western region, which includes some of the country's sensitive energy refining and export infrastructure.
Neighboring Bahrain also said it came under Iranian fire.
"As a result of the heinous Iranian aggression, a civilian industrial facility was targeted, causing a fire at the site," Bahrain's Ministry of Interior said on X. The ministry later said two people, a Bahraini citizen and a Pakistani resident, were injured in the attack.
Bahrain is home to the U.S. Navy's Fifth Fleet.
Iranian state media reported late Saturday that the country's Islamic Revolutionary Guard Corps fired missiles and drones at U.S. military facilities in Bahrain.
A separate Iranian media report claimed the IRGC's air defenses intercepted and destroyed a U.S. MQ-9 drone.
U.S. Central Command did not immediately respond to CNBC's request for comment on either Iranian report.
Reaching a final agreement
Meanwhile, Iranian Foreign Minister Abbas Araghchi said his government remains open to a negotiated settlement to the war. An agreement aimed at developing a permanent peace deal signed in June between President Donald Trump and his Iranian counterpart Masoud Pezeshkian — the so-called Islamabad Memorandum of Understanding — later broke down.
"The Islamabad Memorandum of Understanding is no longer on the table and has no implementation relevance," Araghchi told the Iran newspaper.
"However, the commitments that the U.S. had accepted in that Memorandum of Understanding and the principle that the implementation of those commitments can pave the way for reaching a final agreement are still accepted by both sides," he said.
The war, which began with U.S. and Israeli airstrikes on Iranian targets on Feb. 28, has resulted in major disruptions to energy shipments through the Strait of Hormuz between Iran and Oman.
The United Kingdom Maritime Trade Operations reported that two tankers near Oman were struck by unidentified projectiles on Saturday.
Iran has imposed curbs on vessels moving through the strait, a major sticking point in negotiations with the U.S.
Oil prices have fallen for three straight weeks, however, as traders weighed strong Middle East flows and rising U.S. inventories.
International benchmark Brent crude fell 3.4% for the week, while U.S. crude tumbled 5.2%.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/22/saudi-houthi-bahrain-iran-attacks-araghchi-talks.html",
    publishedAt: "2026-11-22T13:25:47+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 7,
  },
  {
    id: "pizza-chains-are-under-pressure-glp-1-us-e89b3dba",
    title: "Pizza chains are under pressure. GLP-1 use is only one part of the problem",
    titleJa: "Pizza chains are under pressure. GLP-1 use is only one part of the problem",
    summaryJa: "Domino's, Papa Johns and Pizza Hut face weaker demand, more delivery competition and changing eating habits, including GLP-1 use.",
    bodyOriginal: `Big pizza chains are struggling as weaker consumer spending, a wider variety of dining options and the rise of GLP-1 medications weigh on their sales.
The pandemic was a boom time for Domino's Pizza, Papa Johns, Little Caesars and Pizza Hut. But since dining rooms reopened, the biggest U.S. pizza chains have faced an uphill battle to retain their customers.
These days, consumers are watching their discretionary spending but have more delivery and takeout options when they do decide to order, thanks to the accessibility of third-party platforms. Plus, food quality and the customer experience have become more important to diners who are looking for value when they order from restaurants.
As a result of pizza fatigue and challenges facing the broader restaurant industry, the number of U.S. pizza restaurants has tumbled. Since pizza locations hit a peak of 83,035 nationwide in August 2019, more than 9,600 pizzerias had closed their doors as of July 2026, according to data from Datassential.
In 2025, sales at U.S. pizza restaurants fell 0.3%, according to Technomic data. Sales at independent pizzerias slipped 0.4%. Chains, which account for about two-thirds of the domestic pizza category sales, saw revenue shrink 0.3%.
Papa Johns reported that North American same-store sales declined 2.5% in 2025. Pizza Hut's U.S. same-store sales fell 5%. Among the three pizza chains that were publicly traded last year, only Domino's posted annual same-store sales growth at its U.S. restaurants, with an increase of 3%.
It isn't just diners who have lost their appetite for pizza. Since March 2020, Papa Johns stock has lost about two-thirds of its value. Even shares of Domino's, which dominates the category, have seen gains of only about 2% in that time. For comparison, the S&P 500 has climbed about 150% over the same period.
And Yum Brands sold Pizza Hut this year, offloading the laggard of its portfolio to LongRange Capital and Yum China after about two decades of stagnating sales.
"Pizza Hut has been a detractor for YUM ... Going forward, YUM won't be tripped up by pizza category dynamics (discounting, etc.), translating to stronger growth and higher concentration in higher growth industry segments and markets," Wells Fargo analyst Zachary Fadem wrote in a research note in September.
Pizza's challenges
Pizza chains now have significantly more competition for diners' dollars than they did in 2020. Third-party delivery platforms, which grew in popularity during the pandemic, offer a wide variety of cuisines beyond the traditional pizza and Chinese. As a result, Domino's and Papa John's have to compete with other fast-food chains, like McDonald's and Chick-fil-A, for DoorDash and Uber Eats orders.
As pizza has grown more expensive, a pie seems less appealing to budget-conscious diners. The average large cheese pizza is now almost $17, according to the 2026 Pizza Power Report from PMQ Pizza, a trade publication.
Plus, frozen pizza is another convenient option, with a lower price tag. Retail sales of single- and multi-serve frozen pizza rose 2.9% in the 52 weeks ended Nov. 7 compared with the same period in 2022, according to NielsenIQ data.
"When the American consumer is focused on the least expensive eating occasion, the items that are in my pantry, my refrigerator and my freezer win every single time," said David Portalatin, a food and food service industry advisor for Circana.
Convenience stores like Casey's General Stores have also won over customers with pizza at a low price point.
"We believe that [Casey's] has an advantage over [quick-service restaurants] and dollar stores, which have fewer options to navigate the persistent inflationary environment, while [Casey's] can offset food pressures with margins," Bank of America Securities analyst Sara Senatore wrote in a research note published in June.
She added that geographic overlap of locations suggests that Casey's is stealing share from Pizza Hut.
The biggest pizza chains have also been slow to adapt to shifting consumer attitudes toward nutrition. For example, of the four biggest chains, Papa Johns is the only one to even test a pizza crust with added protein as more diners prioritize it in their diets. And the test was only in one Atlanta restaurant — for a single day.
Pizza's nutritional content more broadly is another drag for the category. Its carbohydrate and fat content, from its dough and cheese, respectively, can make it less appealing for consumers on GLP-1 drugs, which have skyrocketed in use over the last several years.
Spending on pizza quick-service restaurants has fallen 22.2% per GLP-1 household after six to eight months using the medications, according to a 2026 survey published by PwC.
To be sure, pizza's recent struggles do not mean an existential crisis for the category. Total pizza servings are down only about 1% this year, Circana's Portalatin said.
And chains are trying to reverse that downturn in servings. In August, Domino's launched the Domino, a customizable Detroit-style personal pizza to attract solo diners. In November, Papa Johns unveiled a new turnaround plan focusing on improving food consistency and restaurant operations. And Pizza Hut is running a holiday-themed meal deal.
"Pizza's not going anywhere," Portalatin said. "The American consumer loves pizza."`,
    bodyJa: `Big pizza chains are struggling as weaker consumer spending, a wider variety of dining options and the rise of GLP-1 medications weigh on their sales.
The pandemic was a boom time for Domino's Pizza, Papa Johns, Little Caesars and Pizza Hut. But since dining rooms reopened, the biggest U.S. pizza chains have faced an uphill battle to retain their customers.
These days, consumers are watching their discretionary spending but have more delivery and takeout options when they do decide to order, thanks to the accessibility of third-party platforms. Plus, food quality and the customer experience have become more important to diners who are looking for value when they order from restaurants.
As a result of pizza fatigue and challenges facing the broader restaurant industry, the number of U.S. pizza restaurants has tumbled. Since pizza locations hit a peak of 83,035 nationwide in August 2019, more than 9,600 pizzerias had closed their doors as of July 2026, according to data from Datassential.
In 2025, sales at U.S. pizza restaurants fell 0.3%, according to Technomic data. Sales at independent pizzerias slipped 0.4%. Chains, which account for about two-thirds of the domestic pizza category sales, saw revenue shrink 0.3%.
Papa Johns reported that North American same-store sales declined 2.5% in 2025. Pizza Hut's U.S. same-store sales fell 5%. Among the three pizza chains that were publicly traded last year, only Domino's posted annual same-store sales growth at its U.S. restaurants, with an increase of 3%.
It isn't just diners who have lost their appetite for pizza. Since March 2020, Papa Johns stock has lost about two-thirds of its value. Even shares of Domino's, which dominates the category, have seen gains of only about 2% in that time. For comparison, the S&P 500 has climbed about 150% over the same period.
And Yum Brands sold Pizza Hut this year, offloading the laggard of its portfolio to LongRange Capital and Yum China after about two decades of stagnating sales.
"Pizza Hut has been a detractor for YUM ... Going forward, YUM won't be tripped up by pizza category dynamics (discounting, etc.), translating to stronger growth and higher concentration in higher growth industry segments and markets," Wells Fargo analyst Zachary Fadem wrote in a research note in September.
Pizza's challenges
Pizza chains now have significantly more competition for diners' dollars than they did in 2020. Third-party delivery platforms, which grew in popularity during the pandemic, offer a wide variety of cuisines beyond the traditional pizza and Chinese. As a result, Domino's and Papa John's have to compete with other fast-food chains, like McDonald's and Chick-fil-A, for DoorDash and Uber Eats orders.
As pizza has grown more expensive, a pie seems less appealing to budget-conscious diners. The average large cheese pizza is now almost $17, according to the 2026 Pizza Power Report from PMQ Pizza, a trade publication.
Plus, frozen pizza is another convenient option, with a lower price tag. Retail sales of single- and multi-serve frozen pizza rose 2.9% in the 52 weeks ended Nov. 7 compared with the same period in 2022, according to NielsenIQ data.
"When the American consumer is focused on the least expensive eating occasion, the items that are in my pantry, my refrigerator and my freezer win every single time," said David Portalatin, a food and food service industry advisor for Circana.
Convenience stores like Casey's General Stores have also won over customers with pizza at a low price point.
"We believe that [Casey's] has an advantage over [quick-service restaurants] and dollar stores, which have fewer options to navigate the persistent inflationary environment, while [Casey's] can offset food pressures with margins," Bank of America Securities analyst Sara Senatore wrote in a research note published in June.
She added that geographic overlap of locations suggests that Casey's is stealing share from Pizza Hut.
The biggest pizza chains have also been slow to adapt to shifting consumer attitudes toward nutrition. For example, of the four biggest chains, Papa Johns is the only one to even test a pizza crust with added protein as more diners prioritize it in their diets. And the test was only in one Atlanta restaurant — for a single day.
Pizza's nutritional content more broadly is another drag for the category. Its carbohydrate and fat content, from its dough and cheese, respectively, can make it less appealing for consumers on GLP-1 drugs, which have skyrocketed in use over the last several years.
Spending on pizza quick-service restaurants has fallen 22.2% per GLP-1 household after six to eight months using the medications, according to a 2026 survey published by PwC.
To be sure, pizza's recent struggles do not mean an existential crisis for the category. Total pizza servings are down only about 1% this year, Circana's Portalatin said.
And chains are trying to reverse that downturn in servings. In August, Domino's launched the Domino, a customizable Detroit-style personal pizza to attract solo diners. In November, Papa Johns unveiled a new turnaround plan focusing on improving food consistency and restaurant operations. And Pizza Hut is running a holiday-themed meal deal.
"Pizza's not going anywhere," Portalatin said. "The American consumer loves pizza."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/22/pizza-chains-sales-glp-1-demand.html",
    publishedAt: "2026-11-22T13:00:01+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "italian-jeweller-and-businessman-paolo-b-75589a11",
    title: "Italian jeweller and businessman Paolo Bulgari dies aged 89",
    titleJa: "Italian jeweller and businessman Paolo Bulgari dies aged 89",
    summaryJa: "In a statement to Italian media, his family remember him as \"the greatest jeweller of our time\".",
    bodyOriginal: `Italian jeweller and businessman Paolo Bulgari dies aged 89
- Published
Italian jeweller Paolo Bulgari, who helped turn his family's business into a global luxury brand, has died in Rome aged age 89.
His family announced the news, remembering him as "the greatest jeweller of our time", according to Italian media.
Paolo Bulgari was Chairman of the Bvlgari Group since 1984 and its jewellery pieces have adorned Hollywood stars and royalty including Diana, Princess of Wales.
The company Bvlgari posted an online tribute to the "true creative soul", whose work would "continue to inspire generations to come".
The firm, Bulgari, was set up by his grandfather, Greek silversmith Sotirios Voulgaris, in Rome in the late 19th century - who later adapted his name to Bulgari in Italian.
Originally from Paramythia, a mountain village in the Epirus region of northwestern Greece renowned for its silver jewellery, Voulgaris fled Ottoman rule and settled in Naples before opening a shop in Rome.
Paolo Bulgari joined the company shortly after leaving school, becoming an expert in gemstones - eventually leading the business and overseeing international growth.
The Bulgari family favoured bold gemstones, rich yellow gold, generous proportions and unexpected colour combinations to set them apart from the delicate asethetic associated with Parisian jewellery houses.
The business broke into luxury markets and diversified beyond jewellery into watches, perfumes, leather goods and hotels.
"Paolo Bulgari began collaborating with his father in 1960, specialising in the knowledge of precious stones, of which he was one of the world's leading experts, and refining the sensibility and aesthetic sense that are at the root of the Bvlgari style," the Bvlgari company posted on social media., external
"He poured his heart into his craft and into nurturing the talents of young designers, leaving an indelible mark on the world of jewellery.
"Thank you, Mr. Paolo, your legacy as a brilliant beacon of creative inspiration will continue to inspire generations to come."
The post included a quote from Paolo Bulgari: "Everything can be a source of inspiration. There are no rules in creativity. Never."
The designer brand's celebrity clients have included Elizabeth Taylor, Audrey Hepburn, Marilyn Monroe, Ingrid Bergman, Sophie Loren, Anne Hathaway, Zendaya and Rihanna.
In 2011 the family sold its controlling stake to the French luxury group LVMH, in a deal worth about 3.7 billion euros.
In 2019, he and his wife established the Paolo Bulgari Foundation to support young people through schooling and job training in disadvantaged neighbourhoods on the outskirts of Rome.
The funeral will take place in Rome on Monday, 23 November in the Basilica of Santa Croce in Gerusalemme.
- Published7 March 2011`,
    bodyJa: `Italian jeweller and businessman Paolo Bulgari dies aged 89
- Published
Italian jeweller Paolo Bulgari, who helped turn his family's business into a global luxury brand, has died in Rome aged age 89.
His family announced the news, remembering him as "the greatest jeweller of our time", according to Italian media.
Paolo Bulgari was Chairman of the Bvlgari Group since 1984 and its jewellery pieces have adorned Hollywood stars and royalty including Diana, Princess of Wales.
The company Bvlgari posted an online tribute to the "true creative soul", whose work would "continue to inspire generations to come".
The firm, Bulgari, was set up by his grandfather, Greek silversmith Sotirios Voulgaris, in Rome in the late 19th century - who later adapted his name to Bulgari in Italian.
Originally from Paramythia, a mountain village in the Epirus region of northwestern Greece renowned for its silver jewellery, Voulgaris fled Ottoman rule and settled in Naples before opening a shop in Rome.
Paolo Bulgari joined the company shortly after leaving school, becoming an expert in gemstones - eventually leading the business and overseeing international growth.
The Bulgari family favoured bold gemstones, rich yellow gold, generous proportions and unexpected colour combinations to set them apart from the delicate asethetic associated with Parisian jewellery houses.
The business broke into luxury markets and diversified beyond jewellery into watches, perfumes, leather goods and hotels.
"Paolo Bulgari began collaborating with his father in 1960, specialising in the knowledge of precious stones, of which he was one of the world's leading experts, and refining the sensibility and aesthetic sense that are at the root of the Bvlgari style," the Bvlgari company posted on social media., external
"He poured his heart into his craft and into nurturing the talents of young designers, leaving an indelible mark on the world of jewellery.
"Thank you, Mr. Paolo, your legacy as a brilliant beacon of creative inspiration will continue to inspire generations to come."
The post included a quote from Paolo Bulgari: "Everything can be a source of inspiration. There are no rules in creativity. Never."
The designer brand's celebrity clients have included Elizabeth Taylor, Audrey Hepburn, Marilyn Monroe, Ingrid Bergman, Sophie Loren, Anne Hathaway, Zendaya and Rihanna.
In 2011 the family sold its controlling stake to the French luxury group LVMH, in a deal worth about 3.7 billion euros.
In 2019, he and his wife established the Paolo Bulgari Foundation to support young people through schooling and job training in disadvantaged neighbourhoods on the outskirts of Rome.
The funeral will take place in Rome on Monday, 23 November in the Basilica of Santa Croce in Gerusalemme.
- Published7 March 2011`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c8e39qk5vrpdo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-22T07:12:41+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/11c4/live/b30a2e00-e635-11f1-bcaa-b74b42067918.jpg",
    readTime: 7,
  },
  {
    id: "new-draft-deal-aims-to-avert-collapse-of-34642264",
    title: "New draft deal aims to avert collapse of talks at climate summit",
    titleJa: "New draft deal aims to avert collapse of talks at climate summit",
    summaryJa: "The UN COP31 meeting in Turkey enters a second day of overtime as countries struggle to reach an agreement.",
    bodyOriginal: `New draft deal aims to avert collapse of talks at climate summit
- Published
Talks were set to resume at the UN COP31 summit on Sunday for a second day of overtime as countries struggled to reach a new global climate deal.
A new draft agreement was published in the early hours of Sunday which the Turkey and Australia co-hosts hoped would bridge the divide between nations.
Although it still includes no specific reference to "transitioning away from fossil fuels" - an omission in the previous draft that sparked threats of walkouts - it does acknowledge a previous commitment made by countries to do just that three years ago.
And it includes for the first time a recognition that the world is on track to miss the crucial goal of keeping temperatures below 1.5C of warming.
The EU and Pacific states had been arguing against the removal of fossil fuels from the draft text. The EU has not yet reacted to this latest draft.
The Africa Group is likely to be disappointed at this latest iteration as it includes no specific figure on money for adaptation and instead kicks that decision to future meetings.
Countries were expected to reconvene at 09:00 local time (06:00GMT) to decide whether to approve a new deal.
If countries cannot reach consensus - as required by the UN's climate talks process - the negotiations could be suspended until next year. This has only happened once before since countries started holding COP climate meetings in 1995.
Just hours before the new text was published, EU Commissioner for Climate Wopke Hoekstra said if the bloc could not get "what is needed in terms of climate action... then there's no deal."
Energy Secretary Miatta Fahnbulleh, the UK's chief negotiator, struck a more hopeful tone, saying her team was still working to get an agreement.
A draft deal unveiled earlier this week called for a faster phase-out of fossil fuels, but a second, pared-down version released on Thursday stripped away all mentions of coal, oil and gas - sparking threats of a walk out.
The fallout led to the summit in Antalya blowing past the original deadline of Friday. On Saturday negotiating teams who had Sunday morning flights were rescheduling them - a sign a deal was still not in sight, and raising the risk that as teams eventually had to leave, the meeting could lose the critical numbers needed to pass an agreement.
As part of a last ditch effort to produce an acceptable text, the European Union and Saudi Arabia - who were deeply divided over the future of fossil fuels - were brought together on Saturday to seek a compromise.
COP31 President and Turkish Environment Minister Murat Kurum told delegates in the early hours of Sunday he believed concerns had been addressed.
"We ask you to look at this decision carefully," Kurum said. "We are closer than ever to agreement on the remaining issues."
What has the issue been?
Ministers from Panama, Solomon Islands, Cote d'Ivoire and the EU were fighting to have a commitment to move away from fossil fuels put back into the final agreement, after fossil fuel producers led by Saudi Arabia pushed for its removal.
"It is not acceptable to have a COP or a cover decision that does not even mention fossil fuels and we simply will not put up with it," said Juan Carlos Navarro, Panama's minister for the environment.
Tuvalu's Climate Minister Maina Talia told reporters it was a "red line" for the low-lying Pacific nation: "We're talking about the root cause of all of this".
France's Minister of Ecological Transition, Monique Barbut, took aim at several references in the text to carbon capture, use and storage (CCUS) - the technology that takes emissions when they are released and stores them underground - as a licence for other countries to keep burning oil and gas.
"We cannot be announcing to the world that we are now getting to 1.5 increase in the temperature and do business like nothing was happening," Barbut said.
In the latest text the commitments to CCUS have been reduced, which may be enough to alleviate the EU's concerns.
For the first time at a COP, the agreement - known officially as the Antalya Accords - could acknowledge that the goal set under the Paris climate accord of keeping global temperature rise below 1.5C has been missed.
The world is entering a period called "overshoot".
Beyond this point scientists warn millions more people will be exposed to sea level rise and extreme heat.
But Australia's Climate Change and Energy Minister, Chris Bowen, who is leading negotiations, pushed back on the need to include language on fossil fuels.
He argued the summit was about implementation, and should focus on the move towards clean energy sources.
'We did not come here to beg'
One of the other key issues raised by developing nations - the lack of money - appears unresolved in the latest draft agreement.
Earlier versions of the text included an agreement to ramp up money for adaptation to $120bn (£91bn) by 2035 - a figure that was then removed.
"We did not come here to beg, we came here to claim what is rightfully ours for our people who are suffering the brunt of anthropogenic activities of developed countries," said Zanetor Agyeman Rawlings, Ghana's Environment Minister and chair of the African Group of negotiators.
Climate activists and environmental groups, who are observers to these talks, have slammed negotiations.
"I can tell you without any doubt that this has been the worst COP ever," said Mohamed Adow of Powershift Africa.
Related topics
- Published2 days ago
- Published8 hours ago`,
    bodyJa: `New draft deal aims to avert collapse of talks at climate summit
- Published
Talks were set to resume at the UN COP31 summit on Sunday for a second day of overtime as countries struggled to reach a new global climate deal.
A new draft agreement was published in the early hours of Sunday which the Turkey and Australia co-hosts hoped would bridge the divide between nations.
Although it still includes no specific reference to "transitioning away from fossil fuels" - an omission in the previous draft that sparked threats of walkouts - it does acknowledge a previous commitment made by countries to do just that three years ago.
And it includes for the first time a recognition that the world is on track to miss the crucial goal of keeping temperatures below 1.5C of warming.
The EU and Pacific states had been arguing against the removal of fossil fuels from the draft text. The EU has not yet reacted to this latest draft.
The Africa Group is likely to be disappointed at this latest iteration as it includes no specific figure on money for adaptation and instead kicks that decision to future meetings.
Countries were expected to reconvene at 09:00 local time (06:00GMT) to decide whether to approve a new deal.
If countries cannot reach consensus - as required by the UN's climate talks process - the negotiations could be suspended until next year. This has only happened once before since countries started holding COP climate meetings in 1995.
Just hours before the new text was published, EU Commissioner for Climate Wopke Hoekstra said if the bloc could not get "what is needed in terms of climate action... then there's no deal."
Energy Secretary Miatta Fahnbulleh, the UK's chief negotiator, struck a more hopeful tone, saying her team was still working to get an agreement.
A draft deal unveiled earlier this week called for a faster phase-out of fossil fuels, but a second, pared-down version released on Thursday stripped away all mentions of coal, oil and gas - sparking threats of a walk out.
The fallout led to the summit in Antalya blowing past the original deadline of Friday. On Saturday negotiating teams who had Sunday morning flights were rescheduling them - a sign a deal was still not in sight, and raising the risk that as teams eventually had to leave, the meeting could lose the critical numbers needed to pass an agreement.
As part of a last ditch effort to produce an acceptable text, the European Union and Saudi Arabia - who were deeply divided over the future of fossil fuels - were brought together on Saturday to seek a compromise.
COP31 President and Turkish Environment Minister Murat Kurum told delegates in the early hours of Sunday he believed concerns had been addressed.
"We ask you to look at this decision carefully," Kurum said. "We are closer than ever to agreement on the remaining issues."
What has the issue been?
Ministers from Panama, Solomon Islands, Cote d'Ivoire and the EU were fighting to have a commitment to move away from fossil fuels put back into the final agreement, after fossil fuel producers led by Saudi Arabia pushed for its removal.
"It is not acceptable to have a COP or a cover decision that does not even mention fossil fuels and we simply will not put up with it," said Juan Carlos Navarro, Panama's minister for the environment.
Tuvalu's Climate Minister Maina Talia told reporters it was a "red line" for the low-lying Pacific nation: "We're talking about the root cause of all of this".
France's Minister of Ecological Transition, Monique Barbut, took aim at several references in the text to carbon capture, use and storage (CCUS) - the technology that takes emissions when they are released and stores them underground - as a licence for other countries to keep burning oil and gas.
"We cannot be announcing to the world that we are now getting to 1.5 increase in the temperature and do business like nothing was happening," Barbut said.
In the latest text the commitments to CCUS have been reduced, which may be enough to alleviate the EU's concerns.
For the first time at a COP, the agreement - known officially as the Antalya Accords - could acknowledge that the goal set under the Paris climate accord of keeping global temperature rise below 1.5C has been missed.
The world is entering a period called "overshoot".
Beyond this point scientists warn millions more people will be exposed to sea level rise and extreme heat.
But Australia's Climate Change and Energy Minister, Chris Bowen, who is leading negotiations, pushed back on the need to include language on fossil fuels.
He argued the summit was about implementation, and should focus on the move towards clean energy sources.
'We did not come here to beg'
One of the other key issues raised by developing nations - the lack of money - appears unresolved in the latest draft agreement.
Earlier versions of the text included an agreement to ramp up money for adaptation to $120bn (£91bn) by 2035 - a figure that was then removed.
"We did not come here to beg, we came here to claim what is rightfully ours for our people who are suffering the brunt of anthropogenic activities of developed countries," said Zanetor Agyeman Rawlings, Ghana's Environment Minister and chair of the African Group of negotiators.
Climate activists and environmental groups, who are observers to these talks, have slammed negotiations.
"I can tell you without any doubt that this has been the worst COP ever," said Mohamed Adow of Powershift Africa.
Related topics
- Published2 days ago
- Published8 hours ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cq7827z2841zo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-22T05:26:10+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/9b71/live/e0c68530-e61e-11f1-94c8-1db910b5b42e.jpg",
    readTime: 10,
  },
  {
    id: "mexican-drug-lord-on-fbi-s-10-most-wante-81f00345",
    title: "Mexican drug lord on FBI's 10 most wanted list arrested in shoot-out",
    titleJa: "Mexican drug lord on FBI's 10 most wanted list arrested in shoot-out",
    summaryJa: "Fausto Isidro \"Chapo Idisro\" Meza Flores, who is accused of drug trafficking and torture, is detained after gun fight with authorities.",
    bodyOriginal: `Mexican drug lord on FBI's 10 most wanted list arrested in shoot-out
- Published
A Mexican drug lord who was on the FBI's 10 most wanted list has been arrested following a shoot-out with Mexican authorities.
Fausto Isidro "Chapo Isidro" Meza Flores and seven others were detained by Mexican special forces in Guasave, Sinaloa on Friday, Mexico's defence secretariat said.
Seven suspects were killed in the operation, as were four members of the Mexican army who were travelling to reinforce security in Guasave, the secretariat added.
Meza Flores was wanted in Mexico on organised crime charges, while he has been accused of "flooding the US with fentanyl, cocaine, heroin and other deadly drugs" by the FBI. The US is seeking his extradition.
Mexico has stepped up efforts to tackle drug-related crime after coming under pressure from US President Donald Trump since he returned to the White House.
Meza Flores, the leader of the Meza Flores Organisation, also known as the Guasave Cartel, is thought to have been active in the drug trafficking trade since the 1990s but managed to evade authorities till now by maintaining a relatively low profile.
Using US intelligence on his whereabouts, Mexican special forces descended on his location using "stealth and surprise", establishing a perimeter to prevent him from escaping and reinforcements arriving, Mexico's defence secretariat said.
However, they "came under attack from gunfire and explosives" before entering the property and arresting Meza Flores, the secretariat continued.
Videos circulating online appear to show helicopters firing streams of bullets towards the ground in Guasave. Others appear to show people at a baseball stadium fleeing as they hear shooting sounds.
Eight people in total were arrested, including Meza Flores' second-in-command, who is also his cousin, and his brother-in-law, who is the group's financial operator, the secretariat added.
Meza Flores, his cousin, and his brother-in-law were flown to Mexico City to face prosecution, the defence secretariat said. The other five remained in the state of Sinaloa.
Authorities also said they had seized multiple weapons during the operation, including a grenade launcher, as well as drugs and cash.
The US Consulate General in the city of Hermosillo said it was "monitoring reports of ongoing security operations, armed clashes, road blockades, and vehicle fires that occurred overnight in Ahome, Guamúchil, Guasave, and Navolato" following the arrest of Meza-Flores.
It advised US citizens to remain alert for potential violence in the area and for residents to remain sheltered in place.
When Meza Flores was added to the FBI's most-wanted list in 2025, he was accused of "heinous crimes" including kidnapping, extortion and torture.
Then-acting FBI director Brian Driscoll said Meza Flores and his organisation had also unleashed a "scourge of illicit drugs" into the US via its southern border with Mexico.
He was initially charged with drug trafficking in the US in 2012 before being charged again in 2019.
The 44-year-old is alleged to have conspired to manufacture and distribute large quantities of cocaine, heroin, methamphetamine and marijuana between 2005 and 2019.
Meza Flores was originally a high-ranking member of the Beltrán Leyva Organization, but a split between rival factions led to a surge of violence and prompted him to establish his own cartel by 2013.
His organisation has also engaged in what US officials described as an "extremely violent turf war" with the Sinaloa Cartel, one of the most powerful drug trafficking gangs, which operates in the same region.
Meza Flores was added to the FBI's most-wanted list after Mexican authorities reportedly linked his cartel to 20 million fentanyl pills they seized in 2024.
Mexican President Claudia Sheinbaum has taken a tougher stance on the country's cartels in a bid to resist US intervention on Mexican soil. Mexico has welcomed closer collaboration but resisted US boots on the ground.
Trump made stemming the flow of drugs into the US across its southern border one of his key election pledges.
Related topics
- Published22 January
- Published14 September`,
    bodyJa: `Mexican drug lord on FBI's 10 most wanted list arrested in shoot-out
- Published
A Mexican drug lord who was on the FBI's 10 most wanted list has been arrested following a shoot-out with Mexican authorities.
Fausto Isidro "Chapo Isidro" Meza Flores and seven others were detained by Mexican special forces in Guasave, Sinaloa on Friday, Mexico's defence secretariat said.
Seven suspects were killed in the operation, as were four members of the Mexican army who were travelling to reinforce security in Guasave, the secretariat added.
Meza Flores was wanted in Mexico on organised crime charges, while he has been accused of "flooding the US with fentanyl, cocaine, heroin and other deadly drugs" by the FBI. The US is seeking his extradition.
Mexico has stepped up efforts to tackle drug-related crime after coming under pressure from US President Donald Trump since he returned to the White House.
Meza Flores, the leader of the Meza Flores Organisation, also known as the Guasave Cartel, is thought to have been active in the drug trafficking trade since the 1990s but managed to evade authorities till now by maintaining a relatively low profile.
Using US intelligence on his whereabouts, Mexican special forces descended on his location using "stealth and surprise", establishing a perimeter to prevent him from escaping and reinforcements arriving, Mexico's defence secretariat said.
However, they "came under attack from gunfire and explosives" before entering the property and arresting Meza Flores, the secretariat continued.
Videos circulating online appear to show helicopters firing streams of bullets towards the ground in Guasave. Others appear to show people at a baseball stadium fleeing as they hear shooting sounds.
Eight people in total were arrested, including Meza Flores' second-in-command, who is also his cousin, and his brother-in-law, who is the group's financial operator, the secretariat added.
Meza Flores, his cousin, and his brother-in-law were flown to Mexico City to face prosecution, the defence secretariat said. The other five remained in the state of Sinaloa.
Authorities also said they had seized multiple weapons during the operation, including a grenade launcher, as well as drugs and cash.
The US Consulate General in the city of Hermosillo said it was "monitoring reports of ongoing security operations, armed clashes, road blockades, and vehicle fires that occurred overnight in Ahome, Guamúchil, Guasave, and Navolato" following the arrest of Meza-Flores.
It advised US citizens to remain alert for potential violence in the area and for residents to remain sheltered in place.
When Meza Flores was added to the FBI's most-wanted list in 2025, he was accused of "heinous crimes" including kidnapping, extortion and torture.
Then-acting FBI director Brian Driscoll said Meza Flores and his organisation had also unleashed a "scourge of illicit drugs" into the US via its southern border with Mexico.
He was initially charged with drug trafficking in the US in 2012 before being charged again in 2019.
The 44-year-old is alleged to have conspired to manufacture and distribute large quantities of cocaine, heroin, methamphetamine and marijuana between 2005 and 2019.
Meza Flores was originally a high-ranking member of the Beltrán Leyva Organization, but a split between rival factions led to a surge of violence and prompted him to establish his own cartel by 2013.
His organisation has also engaged in what US officials described as an "extremely violent turf war" with the Sinaloa Cartel, one of the most powerful drug trafficking gangs, which operates in the same region.
Meza Flores was added to the FBI's most-wanted list after Mexican authorities reportedly linked his cartel to 20 million fentanyl pills they seized in 2024.
Mexican President Claudia Sheinbaum has taken a tougher stance on the country's cartels in a bid to resist US intervention on Mexican soil. Mexico has welcomed closer collaboration but resisted US boots on the ground.
Trump made stemming the flow of drugs into the US across its southern border one of his key election pledges.
Related topics
- Published22 January
- Published14 September`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/ckz749ey0r75o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-22T01:25:03+00:00",
    category: "自動車",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/5701/live/7ac9e270-e5ad-11f1-99a1-253766e7ad8b.jpg",
    readTime: 10,
  },
  {
    id: "fbi-reportedly-investigating-apparent-ha-2cc7b750",
    title: "FBI reportedly investigating apparent hack of its criminal database",
    titleJa: "FBI reportedly investigating apparent hack of its criminal database",
    summaryJa: "The National Crime Information Center database is used by federal and local law enforcement to share information.",
    bodyOriginal: `FBI reportedly investigating apparent hack of its criminal database
- Published
The FBI is investigating an apparent breach of its criminal information database, US media reports, citing two people briefed on the issue.
The National Crime Information Center (NCIC) database is used by federal and local law enforcement to share information on warrants and background checks.
It would not be the first time hackers have targeted the FBI, the domestic intelligence and security service of the US. The agency did not respond to the BBC's request for comment.
When asked about the breach in a Fox News interview on Saturday, President Donald Trump said he had "just heard" about the hack. "I will say that it's not good. I don't like that," he said.
"But maybe we'll learn things that we would've never learned otherwise," Trump added.
This apparent breach of FBI database comes after a string of tech outages which hit banking, air traffic control and other sectors in the US last week. Officials have said they were not caused by cyber-attacks, but the blackouts have sparked scrutiny from lawmakers.
White House National Cyber Director Sean Cairncross was fired this week, with Trump saying he was not good enough.
Dan Lorhmann, a former analyst for the National Security Agency (NSA), told the BBC News Channel that the NCIC's data included "critical information relating to nationwide criminal activity" and needed to be protected.
He added that while US security agencies including the FBI have "an amazing ability" to keep such information safe" and are "globally respected", the level of cyber-attacks is rising globally.
"There's a lot of different reasons why that's happening but I do have faith in our experts in government," Lorhmann said.
In September, the FBI said it was investigating an apparent breach by a cyber-crime group ShinyHunters, which claimed it had stolen sensitive information on all bureau staff - around 38,000 people.
After that hack, one former FBI agent told the BBC he feared for the safety of current employees, whose personal information could soon become available online to criminals and hostile nation-state hackers.
In a separate development, NBC reported an apparent cyberattack against the US Department of Agriculture (USDA).
Employees were informed on Thursday that its farm payment system had been targeted, NBC said.
The USDA has not publicly commented on the issue.`,
    bodyJa: `FBI reportedly investigating apparent hack of its criminal database
- Published
The FBI is investigating an apparent breach of its criminal information database, US media reports, citing two people briefed on the issue.
The National Crime Information Center (NCIC) database is used by federal and local law enforcement to share information on warrants and background checks.
It would not be the first time hackers have targeted the FBI, the domestic intelligence and security service of the US. The agency did not respond to the BBC's request for comment.
When asked about the breach in a Fox News interview on Saturday, President Donald Trump said he had "just heard" about the hack. "I will say that it's not good. I don't like that," he said.
"But maybe we'll learn things that we would've never learned otherwise," Trump added.
This apparent breach of FBI database comes after a string of tech outages which hit banking, air traffic control and other sectors in the US last week. Officials have said they were not caused by cyber-attacks, but the blackouts have sparked scrutiny from lawmakers.
White House National Cyber Director Sean Cairncross was fired this week, with Trump saying he was not good enough.
Dan Lorhmann, a former analyst for the National Security Agency (NSA), told the BBC News Channel that the NCIC's data included "critical information relating to nationwide criminal activity" and needed to be protected.
He added that while US security agencies including the FBI have "an amazing ability" to keep such information safe" and are "globally respected", the level of cyber-attacks is rising globally.
"There's a lot of different reasons why that's happening but I do have faith in our experts in government," Lorhmann said.
In September, the FBI said it was investigating an apparent breach by a cyber-crime group ShinyHunters, which claimed it had stolen sensitive information on all bureau staff - around 38,000 people.
After that hack, one former FBI agent told the BBC he feared for the safety of current employees, whose personal information could soon become available online to criminals and hostile nation-state hackers.
In a separate development, NBC reported an apparent cyberattack against the US Department of Agriculture (USDA).
Employees were informed on Thursday that its farm payment system had been targeted, NBC said.
The USDA has not publicly commented on the issue.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cvze7de86pk3o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-22T00:10:44+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/3fd7/live/9009b220-e58d-11f1-99a1-253766e7ad8b.jpg",
    readTime: 6,
  },
  {
    id: "employers-are-being-asked-to-give-interv-1d866549",
    title: "Employers are being asked to give interview feedback - here's what applicants want",
    titleJa: "Employers are being asked to give interview feedback - here's what applicants want",
    summaryJa: "People say they often hear nothing back after applying for jobs. But could employers be forced to respond to every applicant?",
    bodyOriginal: `Employers are being asked to give interview feedback - here's what applicants want
- Published
Have you ever applied for a job or attended an interview, only to hear absolutely nothing back from the employer?
So-called "job ghosting" has become a big problem for jobseekers in the UK, leaving them "demoralised", denting their confidence and undermining their hopes of finding work.
It's an issue that was mentioned in former minister Alan Milburn's major review into young people who are not in employment, education or training - those dubbed as Neets - this week.
Among his recommendations - aimed at reducing the proportion of Neets from 13% to about 5% by 2036 - Milburn proposed that large employers should give all unsuccessful job applicants under 25 "meaningful feedback".
The report's proposals relate mostly to England, with a recommendation that Scotland, Wales and Northern Ireland adapt the principles to suit their own systems.
But is feedback for all applicants realistic, given the vast number of applications these firms receive? And what can people do to improve their chances in such a tough job market?
Yugraj Samrai, 23, from Coventry is currently unemployed and says he has submitted hundreds of job applications since he graduated from his marketing degree in July.
But 30 to 40% of the time he hears nothing back at all, which can make him "feel like a statistic, not a person".
He tells the BBC: "I understand there are very few graduate jobs available, but at least give me a response to say whether I'll progress onto the next stage or not."
'I'm just not hearing anything'
Ffion Johns, from Llanelli, has been unemployed since June and did not get an interview until September after submitting 70 applications.
The 24-year-old says her biggest problem throughout the job-hunting process has been the lack of feedback about why she didn't get the job, so she knows what to fix next time.
Sometimes she has even been ghosted after attending an interview.
"With most of these roles I'm not getting a rejection. I'm just not hearing anything, which can be quite frustrating," she says.
Research by head-hunting firm Robert Walters last year found 86% of UK job hunters said their applications had been ignored, with no response at all from the hiring organisation.
The Milburn report, external says this "wall of silence" is especially hard on young people as it gives them "nothing to learn from". It adds that "time and emotional investment" goes into their applications.
"It can really take hours and hours, so it just feels even worse to not even have that be recognised," says Jessica Anderson, 21, from Swindon.
Employers say they are being flooded with job applications in a very competitive jobs market and it can be hard to respond to all of them.
And AI is adding to the problem, enabling applicants to submit large numbers of applications in the hope of improving their chances.
But Meg Burton, a career coach based in Leeds, says firms should at the very least inform job applicants when they are unsuccessful and that AI could help achieve this.
Candidates should also be given proper feedback if they reach the interview stage, she says.
"It doesn't have to be hugely detailed, it's just some pointers on why they were unsuccessful and what they can learn from that experience going forward," she says.
The government could choose to adopt the Milburn proposals and crack down on job ghosting.
But it raises another question: if candidates began receiving significantly more rejections than before, could this itself have a demoralising effect?
Ellie McCrone, 20, from Northampton understands the concern but thinks hearing back and getting constructive feedback where possible is always best.
"If you are applying for hundreds of jobs and never getting anything, I think something is going wrong... You can't fix something unless you know what the problem is."
There are things applicants can do to improve their chances and avoid ghosting, such as tailoring their CV to each job and not submitting "hundreds and hundreds of applications" that all look the same, Burton adds.
Candidates should also never take being ghosted personally, she adds.
"Not hearing back doesn't mean you aren't a great candidate. Put it down to experience and move on."`,
    bodyJa: `Employers are being asked to give interview feedback - here's what applicants want
- Published
Have you ever applied for a job or attended an interview, only to hear absolutely nothing back from the employer?
So-called "job ghosting" has become a big problem for jobseekers in the UK, leaving them "demoralised", denting their confidence and undermining their hopes of finding work.
It's an issue that was mentioned in former minister Alan Milburn's major review into young people who are not in employment, education or training - those dubbed as Neets - this week.
Among his recommendations - aimed at reducing the proportion of Neets from 13% to about 5% by 2036 - Milburn proposed that large employers should give all unsuccessful job applicants under 25 "meaningful feedback".
The report's proposals relate mostly to England, with a recommendation that Scotland, Wales and Northern Ireland adapt the principles to suit their own systems.
But is feedback for all applicants realistic, given the vast number of applications these firms receive? And what can people do to improve their chances in such a tough job market?
Yugraj Samrai, 23, from Coventry is currently unemployed and says he has submitted hundreds of job applications since he graduated from his marketing degree in July.
But 30 to 40% of the time he hears nothing back at all, which can make him "feel like a statistic, not a person".
He tells the BBC: "I understand there are very few graduate jobs available, but at least give me a response to say whether I'll progress onto the next stage or not."
'I'm just not hearing anything'
Ffion Johns, from Llanelli, has been unemployed since June and did not get an interview until September after submitting 70 applications.
The 24-year-old says her biggest problem throughout the job-hunting process has been the lack of feedback about why she didn't get the job, so she knows what to fix next time.
Sometimes she has even been ghosted after attending an interview.
"With most of these roles I'm not getting a rejection. I'm just not hearing anything, which can be quite frustrating," she says.
Research by head-hunting firm Robert Walters last year found 86% of UK job hunters said their applications had been ignored, with no response at all from the hiring organisation.
The Milburn report, external says this "wall of silence" is especially hard on young people as it gives them "nothing to learn from". It adds that "time and emotional investment" goes into their applications.
"It can really take hours and hours, so it just feels even worse to not even have that be recognised," says Jessica Anderson, 21, from Swindon.
Employers say they are being flooded with job applications in a very competitive jobs market and it can be hard to respond to all of them.
And AI is adding to the problem, enabling applicants to submit large numbers of applications in the hope of improving their chances.
But Meg Burton, a career coach based in Leeds, says firms should at the very least inform job applicants when they are unsuccessful and that AI could help achieve this.
Candidates should also be given proper feedback if they reach the interview stage, she says.
"It doesn't have to be hugely detailed, it's just some pointers on why they were unsuccessful and what they can learn from that experience going forward," she says.
The government could choose to adopt the Milburn proposals and crack down on job ghosting.
But it raises another question: if candidates began receiving significantly more rejections than before, could this itself have a demoralising effect?
Ellie McCrone, 20, from Northampton understands the concern but thinks hearing back and getting constructive feedback where possible is always best.
"If you are applying for hundreds of jobs and never getting anything, I think something is going wrong... You can't fix something unless you know what the problem is."
There are things applicants can do to improve their chances and avoid ghosting, such as tailoring their CV to each job and not submitting "hundreds and hundreds of applications" that all look the same, Burton adds.
Candidates should also never take being ghosted personally, she adds.
"Not hearing back doesn't mean you aren't a great candidate. Put it down to experience and move on."`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cm2d94le23xyo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-22T00:04:07+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/fb80/live/784ad260-e4e1-11f1-99b6-a35a62fa4264.jpg",
    readTime: 10,
  },
  {
    id: "i-m-in-my-40s-should-i-accept-a-lower-pe-4daa42af",
    title: "I’m in my 40s. Should I accept a lower pension in exchange for naming my husband or child as a beneficiary?",
    titleJa: "I’m in my 40s. Should I accept a lower pension in exchange for naming my husband or child as a beneficiary?",
    summaryJa: "“If I die before my husband, he will receive a lifetime pension equal to 50%–66% of my monthly benefit.”",
    bodyOriginal: `“If I die before my husband, he will receive a lifetime pension equal to 50%–66% of my monthly benefit.”`,
    bodyJa: `“If I die before my husband, he will receive a lifetime pension equal to 50%–66% of my monthly benefit.”`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/im-in-my-40s-should-i-accept-a-lower-pension-in-exchange-for-naming-my-husband-or-child-as-a-beneficiary-b2352059?mod=mw_rss_topstories",
    publishedAt: "2026-11-21T23:05:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-29241577",
    readTime: 2,
  },
  {
    id: "it-s-downright-dirty-my-brother-moved-i-e4977130",
    title: "‘It’s downright dirty’: My brother moved in with our ailing mother and closed her bank account. What can I do?",
    titleJa: "‘It’s downright dirty’: My brother moved in with our ailing mother and closed her bank account. What can I do?",
    summaryJa: "“It is devastating when the people you should be able to trust become the very people you have to protect yourself from.”",
    bodyOriginal: `“It is devastating when the people you should be able to trust become the very people you have to protect yourself from.”`,
    bodyJa: `“It is devastating when the people you should be able to trust become the very people you have to protect yourself from.”`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/it-is-heartbreaking-exhausting-and-downright-dirty-my-brother-took-over-our-ailing-mothers-life-and-finances-what-can-i-do-b4d48817?mod=mw_rss_topstories",
    publishedAt: "2026-11-21T20:15:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-72281427",
    readTime: 2,
  },
  {
    id: "buyers-are-out-for-blood-with-home-sale-62b30a54",
    title: "‘Buyers are out for blood’: With home sales at a record low, buyers are calling the shots",
    titleJa: "‘Buyers are out for blood’: With home sales at a record low, buyers are calling the shots",
    summaryJa: "The few buyers left in the market braving record-high home prices and 7% mortgage rates are starting to call the shots, real-estate agents say.",
    bodyOriginal: `The few buyers left in the market braving record-high home prices and 7% mortgage rates are starting to call the shots, real-estate agents say.`,
    bodyJa: `The few buyers left in the market braving record-high home prices and 7% mortgage rates are starting to call the shots, real-estate agents say.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/buyers-are-out-for-blood-as-housing-market-finally-hits-rock-bottom-fa5093a6?mod=mw_rss_topstories",
    publishedAt: "2026-11-21T19:45:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-39779425",
    readTime: 2,
  },
  {
    id: "russia-bound-ship-attacked-in-gulf-of-fi-2b1585b5",
    title: "Russia-bound ship attacked in Gulf of Finland",
    titleJa: "Russia-bound ship attacked in Gulf of Finland",
    summaryJa: "Finnish defence forces say that Ukraine was likely behind the drone attack on the vessel.",
    bodyOriginal: `Russia-bound ship attacked in Gulf of Finland
- Published
A Russian cargo vessel bound for the country's Baltic exclave Kaliningrad has been hit by a drone attack in the eastern Gulf of Finland, Russian and Finnish authorities say.
The ship - the Sparta II - caught on fire after the strike on Saturday morning, before drifting into Finnish waters. Finnish defence forces said Ukraine was likely behind the attack. Kyiv has yet to comment.
"War is spilling over into our immediate vicinity," Finnish Prime Minister Petteri Orpo said. "Ukraine has the right to fight back against the aggressor."
Kaliningrad Governor Alexei Besprozvannykh said two drones had been used, based on preliminary information, and there was "no threat" to the territory's supplies.
The Sparta II was sanctioned by the US in 2022 and Ukraine earlier this year, and is run by a Russian company, according to the Ukrainian and US governments.
The company says on its website that it was established within the structure of Russia's defence ministry in 2011 and since 2015 has been operating within the military construction complex.
Finland's coast guard said it had been alerted to the attack at around 08:50 local time (06:50 GMT) on Saturday and that the cargo vessel had been located approximately 50km west of the island of Suursaari in the Gulf of Finland.
This prompted "temporary aviation and maritime restrictions" around the area, Finnish border officials said.
Shortly after the incident, Finland's defence ministry said a Russian helicopter was suspected of violating the country's airspace, potentially linked to "rescue or tracking operations".
A Russian rescue vessel approached the ship and was told by the crew that they did not need to be evacuated, Kaliningrad's governor wrote on Telegram, adding: "The crew is currently carrying out the necessary work and plans to continue on its way."
The Finnish Border Guard later said the crew had been evacuated to another Russian vessel that was now already en route to Russia. The Russian rescue vessel had remained at the location of the stricken ship.
It added that no environmental damage had been detected and that there was no danger to maritime traffic or people.
Kaliningrad is a Russian exclave that sits between Poland and Lithuania.
Defence Minister Antti Häkkänen said that the Finnish Border Guard were responsible for the investigation into the attack and were co-operating with other relevant authorities.
Nato has also been informed, the defence ministry said.
The Baltic Sea has become a flashpoint in the Russia-Ukraine war, triggered when Russia launched a full-scale invasion of Ukraine in 2022. Ukraine has recently ramped up its long-range attacks against Russia beyond the front lines.
Earlier this month, a Ukrainian drone strike hit a Russian warship in the Gulf of Finland.
Related topics
- Published17 hours ago
- Published2 days ago
- Published3 days ago`,
    bodyJa: `Russia-bound ship attacked in Gulf of Finland
- Published
A Russian cargo vessel bound for the country's Baltic exclave Kaliningrad has been hit by a drone attack in the eastern Gulf of Finland, Russian and Finnish authorities say.
The ship - the Sparta II - caught on fire after the strike on Saturday morning, before drifting into Finnish waters. Finnish defence forces said Ukraine was likely behind the attack. Kyiv has yet to comment.
"War is spilling over into our immediate vicinity," Finnish Prime Minister Petteri Orpo said. "Ukraine has the right to fight back against the aggressor."
Kaliningrad Governor Alexei Besprozvannykh said two drones had been used, based on preliminary information, and there was "no threat" to the territory's supplies.
The Sparta II was sanctioned by the US in 2022 and Ukraine earlier this year, and is run by a Russian company, according to the Ukrainian and US governments.
The company says on its website that it was established within the structure of Russia's defence ministry in 2011 and since 2015 has been operating within the military construction complex.
Finland's coast guard said it had been alerted to the attack at around 08:50 local time (06:50 GMT) on Saturday and that the cargo vessel had been located approximately 50km west of the island of Suursaari in the Gulf of Finland.
This prompted "temporary aviation and maritime restrictions" around the area, Finnish border officials said.
Shortly after the incident, Finland's defence ministry said a Russian helicopter was suspected of violating the country's airspace, potentially linked to "rescue or tracking operations".
A Russian rescue vessel approached the ship and was told by the crew that they did not need to be evacuated, Kaliningrad's governor wrote on Telegram, adding: "The crew is currently carrying out the necessary work and plans to continue on its way."
The Finnish Border Guard later said the crew had been evacuated to another Russian vessel that was now already en route to Russia. The Russian rescue vessel had remained at the location of the stricken ship.
It added that no environmental damage had been detected and that there was no danger to maritime traffic or people.
Kaliningrad is a Russian exclave that sits between Poland and Lithuania.
Defence Minister Antti Häkkänen said that the Finnish Border Guard were responsible for the investigation into the attack and were co-operating with other relevant authorities.
Nato has also been informed, the defence ministry said.
The Baltic Sea has become a flashpoint in the Russia-Ukraine war, triggered when Russia launched a full-scale invasion of Ukraine in 2022. Ukraine has recently ramped up its long-range attacks against Russia beyond the front lines.
Earlier this month, a Ukrainian drone strike hit a Russian warship in the Gulf of Finland.
Related topics
- Published17 hours ago
- Published2 days ago
- Published3 days ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cj752ddve27ko?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-21T19:20:22+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/4cee/live/4e2fa7a0-e5c5-11f1-a738-4787e1a18cce.jpg",
    readTime: 7,
  },
  {
    id: "never-too-late-to-start-practical-inves-237afe33",
    title: "‘Never too late to start’: Practical investing advice from some of the top women in finance",
    titleJa: "‘Never too late to start’: Practical investing advice from some of the top women in finance",
    summaryJa: "There are plenty of rich and influential women in the U.S. Their time may be coming.",
    bodyOriginal: `There are plenty of rich and influential women in the U.S. Their time may be coming.`,
    bodyJa: `There are plenty of rich and influential women in the U.S. Their time may be coming.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/never-too-late-to-start-practical-investing-advice-from-some-of-the-top-women-in-finance-e01f0755?mod=mw_rss_topstories",
    publishedAt: "2026-11-21T18:19:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-39302735",
    readTime: 2,
  },
  {
    id: "trump-says-there-could-be-a-positive-spi-5bd6e5d6",
    title: "Trump says there could be a 'positive spin' from the latest FBI database hack",
    titleJa: "Trump says there could be a 'positive spin' from the latest FBI database hack",
    summaryJa: "President Donald Trump suggested Saturday that there could be a bright spot in the latest incursion into the FBI computer database.The president confirmed in an interview with Fox News that a system has been breached that houses information used by law enforcement at all levels to share criminal justice information.",
    bodyOriginal: `President Donald Trump suggested Saturday that there could be a bright spot in the latest incursion into the FBI computer database.
The president confirmed in an interview with Fox News that a system has been breached that houses information used by law enforcement at all levels to share criminal justice information.
The hackers accessed the National Criminal Information Center (NCIC), a database that includes FBI fingerprint records, wanted persons, violent felons, missing persons and related information, two people familiar with the matter told MS NOW. The database is restricted to law enforcement use but not classified and it is unclear what data was extracted.
CNN had first reported on the suspected hack, citing sources familiar with the issue.
In a wide-ranging interview on Fox, Trump said there could be upside from the news.
"Maybe we'll learn about the voter fraud, all the voter fraud that took place," he said. "I always like to put things on a positive spin."
This would be the second recent intrusion into the FBI system; the previous one came in September, when a group known as "ShinyHunters" broke into an FBI jobs website. The result compromised data on current and former FBI employees and shut down part of the agency's operations until the issue was resolved.
Trump said it's possible there could be information gleaned from the latest hack.
"I wonder who's doing it, because wouldn't it be great to learn about Russia, Russia, Russia?" he said. "People should hear about it, because it actually put our country in danger, and so maybe we'll learn things that we wouldn't have learned otherwise."
The FBI did not immediately respond to a CNBC request for comment.`,
    bodyJa: `President Donald Trump suggested Saturday that there could be a bright spot in the latest incursion into the FBI computer database.
The president confirmed in an interview with Fox News that a system has been breached that houses information used by law enforcement at all levels to share criminal justice information.
The hackers accessed the National Criminal Information Center (NCIC), a database that includes FBI fingerprint records, wanted persons, violent felons, missing persons and related information, two people familiar with the matter told MS NOW. The database is restricted to law enforcement use but not classified and it is unclear what data was extracted.
CNN had first reported on the suspected hack, citing sources familiar with the issue.
In a wide-ranging interview on Fox, Trump said there could be upside from the news.
"Maybe we'll learn about the voter fraud, all the voter fraud that took place," he said. "I always like to put things on a positive spin."
This would be the second recent intrusion into the FBI system; the previous one came in September, when a group known as "ShinyHunters" broke into an FBI jobs website. The result compromised data on current and former FBI employees and shut down part of the agency's operations until the issue was resolved.
Trump said it's possible there could be information gleaned from the latest hack.
"I wonder who's doing it, because wouldn't it be great to learn about Russia, Russia, Russia?" he said. "People should hear about it, because it actually put our country in danger, and so maybe we'll learn things that we wouldn't have learned otherwise."
The FBI did not immediately respond to a CNBC request for comment.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/21/trump-fbi-database-hack.html",
    publishedAt: "2026-11-21T16:57:34+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    readTime: 4,
  },
  {
    id: "is-social-security-a-ponzi-scheme-no-don-de2b8bba",
    title: "Is Social Security a Ponzi scheme? No. Don’t get carried away with 1930s-era prophecies of doom.",
    titleJa: "Is Social Security a Ponzi scheme? No. Don’t get carried away with 1930s-era prophecies of doom.",
    summaryJa: "Wisconsin Republican Sen. Ron Johnson called Social Security a “scam” and urged lawmakers to shut it down.",
    bodyOriginal: `Wisconsin Republican Sen. Ron Johnson called Social Security a “scam” and urged lawmakers to shut it down.`,
    bodyJa: `Wisconsin Republican Sen. Ron Johnson called Social Security a “scam” and urged lawmakers to shut it down.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/the-thought-of-living-to-100-terrifies-me-is-social-security-a-giant-ponzi-scheme-84a64e7e?mod=mw_rss_topstories",
    publishedAt: "2026-11-21T16:50:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-49247042",
    readTime: 2,
  },
  {
    id: "anthropic-s-record-ipo-collides-with-tec-20c463de",
    title: "Anthropic’s record IPO collides with tech’s worst week on Wall Street since 2020",
    titleJa: "Anthropic’s record IPO collides with tech’s worst week on Wall Street since 2020",
    summaryJa: "Anthropic held its historic Nasdaq debut a day before Nvidia's stock closed out its longest weekly losing streak since 2008.",
    bodyOriginal: `Startup investor Ben Narasin is so jazzed about Anthropic's blockbuster IPO that he's planning a party later this month at his Silicon Valley home. Sake, vodka and Krug Champagne will be served. Each attendee will be given two jars of caviar.
"This is a celebration of the most material, significant, and mind-blowingly awesome event that has ever happened in venture capital," Narasin, founding partner of Tenacity Venture Capital, told CNBC in an interview, adding that he didn't even invest in the company.
Anthropic raised a record $93.5 billion in its IPO and an additional $26 billion from tech giants that bought at the offer price. The stock gained 17% in its debut on Thursday, lifting Anthropic's market cap to $1.8 trillion and providing a much-needed windfall for Silicon Valley's startup ecosystem.
It was quite the split-screen moment on Wall Street, which spent the week in an AI-driven tailspin. Led by Nvidia's 23% plunge, which marked the stock's sharpest weekly pullback in 18 years, the Nasdaq slid 10% over the past five trading days in its worst week since the early days of Covid in 2020.
Investors and analysts spent the week debating whether Anthropic will trade alongside AI hardware, as it's reliant on advanced chips, memory and data centers, or whether it will stand alone as the first public pure-play AI developer and a company that's achieved unrivaled growth in less than six years of existence.
That question will likely persist for some time, but Friday's market action showed that Wall Street is skeptical of Anthropic's ability to grow into its lofty valuation. At week's end, the Claude creator's $1.6 trillion fully diluted market cap put it behind just six U.S. companies: Apple, Microsoft, Alphabet, Nvidia, Amazon and SpaceX.
With the tech market in turmoil due to rising interest rates, raging anti-AI sentiment and Nvidia's C-suite crisis, Anthropic's IPO was part exuberance, part relief for an industry hungry for exits.
After venture-backed IPOs yielded $73 billion in proceeds in 2021, the amount raised in the next four years totaled just $39 billion, according to data from University of Florida emeritus professor Jay Ritter. In 2021, 126 technology companies went public, compared with 34 in 2025.
When going public was 'not worth it'
Meanwhile, the private market has continued to balloon, with companies raising ever-larger sums at sky-high valuations without the pressures of quarterly earnings. Many startups that had hoped to go public early in the decade fell out of favor in the AI boom. They experienced hefty job cuts, down rounds and acquisitions for pennies on the dollar.
"There was a time in Silicon Valley not that long ago where the prevailing wisdom was the default path should be avoiding going public for as long as possible," said Somesh Dash, a general partner at venture firm IVP. The view was, "it's too long, it's too hard, it's not worth it," he said.
Anthropic is very young compared to some of those companies, but it was a huge collector of private capital. Investors poured $141 billion into the AI lab as of September, according to Anthropic's prospectus.
For a few Silicon Valley firms that contributed to those funding rounds, the returns are unlike anything they've ever seen. At the IPO price, Menlo Ventures and Lightspeed Venture Partners each owned about $25 billion worth of Anthropic stock. Bessemer Venture Partners owned a stake worth roughly $10 billion, partner Byron Deeter said.
Matt Murphy, a partner at Menlo, told CNBC's David Faber on Thursday that his firm has more than five limited partners "that we delivered over $1 billion of returns to."
"At the end of the day, that's really our job, is to get dollars back into foundations and endowments," Murphy said. "There's a lot of pride in being able to do that."
Bessemer's Deeter was also jubilant on Thursday, posting on X that, in addition to being "the largest bet in Bessemer's history," the IPO "is a punctuation mark in the history of both humanity and computation."
That's quite a change from a few years earlier, when Anthropic was hardly generating revenue, and success was far from guaranteed. In 2023, Anthropic's Claude 2 was struggling to keep pace with models from Google and OpenAI. In April 2024, investors at Bessemer wrote in a memo that if Anthropic missed its own targets, there was "a good chance that we lose all or part of our money."
Guru Chahal at Lightspeed told CNBC that Anthropic was clearly the team taking a more measured approach to AI. The company looked beyond Nvidia's dominant AI chips, choosing to use alternatives from Amazon and Google as well. Anthropic said it generated $1.72 in revenue per dollar spent on computing power in the third quarter, up from 68 cents a year earlier.
"It is true that it required lots of capital, but when you dig in and you realize that capital is going toward compute, and this is the team that's positioned to use that compute in the most effective way, then we could connect those dots," Chahal said. He added that those metrics showed it was "going to be a very high-quality business."
IPO pipeline?
Anthropic isn't the only big win for VCs this year.
Five months before Anthropic's Nasdaq debut, SpaceX hit the market in what, until this week, was by far the largest IPO in history. SpaceX, which Elon Musk founded in 2002, produced outsized returns for firms including Sequoia and Andreessen Horowitz.
SpaceX and Anthropic alone will make 2026 a monster year for the venture industry, easily exceeding any other year in IPO proceeds. And investors in OpenAI hope appetite remains strong for trillion-dollar companies next year, as the ChatGPT maker is looking to 2027 for a potential offering.
IVP's Dash said that in his AI portfolio, "a lot of companies are starting IPO prep" even if it's only "year four, year five, year six since inception." He hopes to see at least half a dozen companies go public at valuations north of $10 billion each in the second half of 2027.
The macro picture, however, is ominous.
Jensen Huang's sudden departure from Nvidia has left the chip giant without a clear leader at a time when the company already faced heightened concerns about a slowdown in spending. Nvidia is a key investor in Anthropic and OpenAI and a critical supplier and financing partner for the entire AI industry, which is getting hammered across the board.
In January, Democrats will take control of the House and Senate after this month's midterm elections, which included the passage of numerous ballot measures that could stymie data center development. Anthropic investor Brad Gerstner predicted after the election that market dynamics would push Anthropic to price toward the lower end of its range.
Narasin said he wasn't even sure the company would get that far.
"I was concerned they'd delay," Narasin said.
That makes the outcome that much more impressive, he said, after Anthropic priced above its expected range and upsized the offering.
"This will be bedtime stories for years for future VCs," Narasin said. "There was a company that was created, backed by angels and later venture" that in a few short years "became the single biggest IPO of all history."
— CNBC's Ari Levy contributed to this report.
WATCH: I like owning Anthropic over the long term, says Gabelli Funds' John Belton`,
    bodyJa: `Startup investor Ben Narasin is so jazzed about Anthropic's blockbuster IPO that he's planning a party later this month at his Silicon Valley home. Sake, vodka and Krug Champagne will be served. Each attendee will be given two jars of caviar.
"This is a celebration of the most material, significant, and mind-blowingly awesome event that has ever happened in venture capital," Narasin, founding partner of Tenacity Venture Capital, told CNBC in an interview, adding that he didn't even invest in the company.
Anthropic raised a record $93.5 billion in its IPO and an additional $26 billion from tech giants that bought at the offer price. The stock gained 17% in its debut on Thursday, lifting Anthropic's market cap to $1.8 trillion and providing a much-needed windfall for Silicon Valley's startup ecosystem.
It was quite the split-screen moment on Wall Street, which spent the week in an AI-driven tailspin. Led by Nvidia's 23% plunge, which marked the stock's sharpest weekly pullback in 18 years, the Nasdaq slid 10% over the past five trading days in its worst week since the early days of Covid in 2020.
Investors and analysts spent the week debating whether Anthropic will trade alongside AI hardware, as it's reliant on advanced chips, memory and data centers, or whether it will stand alone as the first public pure-play AI developer and a company that's achieved unrivaled growth in less than six years of existence.
That question will likely persist for some time, but Friday's market action showed that Wall Street is skeptical of Anthropic's ability to grow into its lofty valuation. At week's end, the Claude creator's $1.6 trillion fully diluted market cap put it behind just six U.S. companies: Apple, Microsoft, Alphabet, Nvidia, Amazon and SpaceX.
With the tech market in turmoil due to rising interest rates, raging anti-AI sentiment and Nvidia's C-suite crisis, Anthropic's IPO was part exuberance, part relief for an industry hungry for exits.
After venture-backed IPOs yielded $73 billion in proceeds in 2021, the amount raised in the next four years totaled just $39 billion, according to data from University of Florida emeritus professor Jay Ritter. In 2021, 126 technology companies went public, compared with 34 in 2025.
When going public was 'not worth it'
Meanwhile, the private market has continued to balloon, with companies raising ever-larger sums at sky-high valuations without the pressures of quarterly earnings. Many startups that had hoped to go public early in the decade fell out of favor in the AI boom. They experienced hefty job cuts, down rounds and acquisitions for pennies on the dollar.
"There was a time in Silicon Valley not that long ago where the prevailing wisdom was the default path should be avoiding going public for as long as possible," said Somesh Dash, a general partner at venture firm IVP. The view was, "it's too long, it's too hard, it's not worth it," he said.
Anthropic is very young compared to some of those companies, but it was a huge collector of private capital. Investors poured $141 billion into the AI lab as of September, according to Anthropic's prospectus.
For a few Silicon Valley firms that contributed to those funding rounds, the returns are unlike anything they've ever seen. At the IPO price, Menlo Ventures and Lightspeed Venture Partners each owned about $25 billion worth of Anthropic stock. Bessemer Venture Partners owned a stake worth roughly $10 billion, partner Byron Deeter said.
Matt Murphy, a partner at Menlo, told CNBC's David Faber on Thursday that his firm has more than five limited partners "that we delivered over $1 billion of returns to."
"At the end of the day, that's really our job, is to get dollars back into foundations and endowments," Murphy said. "There's a lot of pride in being able to do that."
Bessemer's Deeter was also jubilant on Thursday, posting on X that, in addition to being "the largest bet in Bessemer's history," the IPO "is a punctuation mark in the history of both humanity and computation."
That's quite a change from a few years earlier, when Anthropic was hardly generating revenue, and success was far from guaranteed. In 2023, Anthropic's Claude 2 was struggling to keep pace with models from Google and OpenAI. In April 2024, investors at Bessemer wrote in a memo that if Anthropic missed its own targets, there was "a good chance that we lose all or part of our money."
Guru Chahal at Lightspeed told CNBC that Anthropic was clearly the team taking a more measured approach to AI. The company looked beyond Nvidia's dominant AI chips, choosing to use alternatives from Amazon and Google as well. Anthropic said it generated $1.72 in revenue per dollar spent on computing power in the third quarter, up from 68 cents a year earlier.
"It is true that it required lots of capital, but when you dig in and you realize that capital is going toward compute, and this is the team that's positioned to use that compute in the most effective way, then we could connect those dots," Chahal said. He added that those metrics showed it was "going to be a very high-quality business."
IPO pipeline?
Anthropic isn't the only big win for VCs this year.
Five months before Anthropic's Nasdaq debut, SpaceX hit the market in what, until this week, was by far the largest IPO in history. SpaceX, which Elon Musk founded in 2002, produced outsized returns for firms including Sequoia and Andreessen Horowitz.
SpaceX and Anthropic alone will make 2026 a monster year for the venture industry, easily exceeding any other year in IPO proceeds. And investors in OpenAI hope appetite remains strong for trillion-dollar companies next year, as the ChatGPT maker is looking to 2027 for a potential offering.
IVP's Dash said that in his AI portfolio, "a lot of companies are starting IPO prep" even if it's only "year four, year five, year six since inception." He hopes to see at least half a dozen companies go public at valuations north of $10 billion each in the second half of 2027.
The macro picture, however, is ominous.
Jensen Huang's sudden departure from Nvidia has left the chip giant without a clear leader at a time when the company already faced heightened concerns about a slowdown in spending. Nvidia is a key investor in Anthropic and OpenAI and a critical supplier and financing partner for the entire AI industry, which is getting hammered across the board.
In January, Democrats will take control of the House and Senate after this month's midterm elections, which included the passage of numerous ballot measures that could stymie data center development. Anthropic investor Brad Gerstner predicted after the election that market dynamics would push Anthropic to price toward the lower end of its range.
Narasin said he wasn't even sure the company would get that far.
"I was concerned they'd delay," Narasin said.
That makes the outcome that much more impressive, he said, after Anthropic priced above its expected range and upsized the offering.
"This will be bedtime stories for years for future VCs," Narasin said. "There was a company that was created, backed by angels and later venture" that in a few short years "became the single biggest IPO of all history."
— CNBC's Ari Levy contributed to this report.
WATCH: I like owning Anthropic over the long term, says Gabelli Funds' John Belton`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/21/anthropic-ipo-tech-selloff.html",
    publishedAt: "2026-11-21T16:40:05+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "tech-outages-are-fueling-a-new-doomsday-a9237249",
    title: "Tech outages are fueling a new doomsday economy",
    titleJa: "Tech outages are fueling a new doomsday economy",
    summaryJa: "Recent technology outages have left some worried about AI cyberattacks and the U.S. electricity grid. The doomsday economy is heating up as a result.",
    bodyOriginal: `Americans are shopping like there's no tomorrow.
A spate of high-profile technology outages that grounded planes, halted email access and slowed bank transactions have left many people worried about artificial intelligence-driven cyberattacks and the state of the U.S. energy grid.
Government officials have dismissed rumors and speculation circulating online that there could be a nefarious culprit for the series of malfunctions. Despite those assurances, consumers like Sabrina Cepeda are readying for a larger-scale technology blackout or other emergency event.
In recent days, the Houston resident has purchased propane and lighter fluid for cooking and heating equipment that can be used without electricity. The mother of three also replenished her backup stockpiles of non-perishable foods, hygiene products and allergy medicine in the event that her family is homebound for several days.
"I have a way to keep my family fed, clean, hydrated, warm and safe," said Cepeda, 39. "You want to have these things and not need them, rather than need them and not have them."
The doomsday economy is catching a bid. Wall Street and retailers are taking note.
Emergency prep buying
At least half a dozen major technology outages took place in the U.S. between Nov. 12 and Nov. 17. In that time frame, spending at brands specializing in emergency products spiked about 400% compared with the same period a year prior, according to card data analyzed exclusively for CNBC by Consumer Edge.
At Ready America, which sells products like emergency survival kits, prepackaged water and high-calorie food bars, sales through e-commerce platforms have seen a roughly five-fold increase in recent days. In addition, corporate customers who keep the Vista, California-based company's supplies in their offices in case of emergency have called in to order more.
The company has rarely seen this much demand since the Covid pandemic sent Americans into lockdown more than six years ago, said Ready America President Trevyn Reese. As a result, Ready America asked its suppliers to scale up production. The family-owned business has faced a shortage of water purification tablets, and redirected shoppers to alternative offerings like prepackaged water pouches.
"With everything going on in the news right now, we've seen a large spike of people wanting to get prepared," said Reese.
While the string of outages brought power-related concerns to a boiling point, data shows that worries had been bubbling under the surface for weeks.
Shoppers began significantly ramping up buying from emergency preparedness brands late last month, according to Consumer Edge. Around that time, Fox News reported that the Pentagon was preparing U.S. military bases to operate for at least 90 days without external support. Exacerbating those fears was the ongoing war with Iran that President Donald Trump signaled could ramp back up.
Firearm trade group NSSF said that gun sales rose about 8% in October from the same month a year prior. Retailers and gun manufacturers have anecdotally reported that demand has remained elevated into November, which NSSF said can be attributed to a combination of uncertainty tied to the midterm election and the recent outages.
"If people are investing in firearms and ammunition, they're telling you very directly, with their wallet, what their priority is," said Mark Oliva, NSSF's managing director of public affairs. "You're literally investing in a product that's going to be able to protect your life and protect the lives of your family."
'Apocalyptic concerns'
Now, the doomsday talk has begun making its way to Wall Street.
Mizuho told clients on Monday that consumer worries about the outages — coupled with what the bank called "apocalyptic concerns" swirling on social media — drove shoppers to stock up on emergency supplies at Costco. As a result, Mizuho said it expects a key measure of non-fuel sales growth for Costco in November to rise above 10% for the first time since 2022.
And RBC said so-called doomsday prepping has had a "real impact" on buying behavior around the globe over recent weeks. Still, the Canadian bank reported that the trend has so far boosted sales for only a small basket of items, such as shelf-stable proteins, water purification products and dry-pantry foods.
Clients of Richard McWhorter, a private wealth advisor at SRM, have been rushing to Costco to buy goods in bulk and splurging for power generators. McWhorter said he's also fielded questions about how to prepare for a situation in which the financial system goes down.
"I've never seen anything like this in my life," McWhorter said. "There's the financial side of what I do, and then there's the psychological side. And the past two weeks have been much more psychological."
Metal dealer American Hartford Gold reported an uptick in customer inquiries this week. Company president Max Baecker said he heard from some customers that their interest in products like gold — long considered a safe-haven asset during times of turmoil — was driven by newfound concern about being overly reliant on digital financial networks following a glitch at JPMorgan Chase that affected customer transactions for several hours.
Vice President JD Vance abruptly canceled his appearance at a New York Times summit on Wednesday to attend meetings about the technology outages. A day prior, Jay Clayton, the U.S. director of national intelligence, told CNBC that the recent outages were not a cyberattack or a coordinated effort by a foreign nation.
Still, Sen. Mark Warner, D-Va., told CNBC on Wednesday that people were "freaked out" by the outages. Warner, who acts as the vice chairman of the Senate Intelligence Committee, said that the U.S. was "lucky" to have not yet seen a major AI-generated cyberattack or crisis due to AI agents going rogue.
Investors may begin pushing companies to accelerate their cybersecurity spending out of an abundance of caution around rogue AI agents following the outages, according to Macro Hive CEO Bilal Hafeez. Such a situation would be reminiscent of the antivirus software push seen during the dot-com boom, he said.
The Global X Cybersecurity ETF (BUG) has climbed around 3% over the past two weeks, bucking the downtrend seen among AI stocks and the broader technology trade. The Nasdaq Composite on Friday fell into negative territory for 2026, putting the tech-heavy index on track for its first losing year since 2022.
The 'old-fashioned way'
To be sure, not everyone on social media has bought into the idea that they should be prepping for a doomsday scenario. In satirical videos posted on TikTok, users joked that they were gearing up by placing orders in the Starbucks drive-thru or purchasing significant quantities of alcohol.
Still, the topic appears to be on the minds of a growing number of Americans. U.S. Google searches for the term "prepping" have more than doubled when comparing the past month with the same period a year prior. On YouTube, queries for videos about "survivalism," a term describing the practice of preparing for emergencies, have soared by more than 5,000% over the same time frame.
Cepeda, the Houston mom, sees emergency prep efforts as a way to be safe rather than sorry. She's previously tapped into backup food stashes during extreme weather events like Hurricane Harvey in 2017 and Winter Storm Uri in 2021.
But this year is the first time that she's felt she needed to be prepared for a potential emergency caused by technology outages, she said. Cepeda and her husband have ensured they have enough cash on hand and fuel in their cars if there's a broader hit to the U.S. power grid, she said.
"We rely so much on technology," Cepeda said. "You need to be able to do these things the more traditional, old-fashioned way."`,
    bodyJa: `Americans are shopping like there's no tomorrow.
A spate of high-profile technology outages that grounded planes, halted email access and slowed bank transactions have left many people worried about artificial intelligence-driven cyberattacks and the state of the U.S. energy grid.
Government officials have dismissed rumors and speculation circulating online that there could be a nefarious culprit for the series of malfunctions. Despite those assurances, consumers like Sabrina Cepeda are readying for a larger-scale technology blackout or other emergency event.
In recent days, the Houston resident has purchased propane and lighter fluid for cooking and heating equipment that can be used without electricity. The mother of three also replenished her backup stockpiles of non-perishable foods, hygiene products and allergy medicine in the event that her family is homebound for several days.
"I have a way to keep my family fed, clean, hydrated, warm and safe," said Cepeda, 39. "You want to have these things and not need them, rather than need them and not have them."
The doomsday economy is catching a bid. Wall Street and retailers are taking note.
Emergency prep buying
At least half a dozen major technology outages took place in the U.S. between Nov. 12 and Nov. 17. In that time frame, spending at brands specializing in emergency products spiked about 400% compared with the same period a year prior, according to card data analyzed exclusively for CNBC by Consumer Edge.
At Ready America, which sells products like emergency survival kits, prepackaged water and high-calorie food bars, sales through e-commerce platforms have seen a roughly five-fold increase in recent days. In addition, corporate customers who keep the Vista, California-based company's supplies in their offices in case of emergency have called in to order more.
The company has rarely seen this much demand since the Covid pandemic sent Americans into lockdown more than six years ago, said Ready America President Trevyn Reese. As a result, Ready America asked its suppliers to scale up production. The family-owned business has faced a shortage of water purification tablets, and redirected shoppers to alternative offerings like prepackaged water pouches.
"With everything going on in the news right now, we've seen a large spike of people wanting to get prepared," said Reese.
While the string of outages brought power-related concerns to a boiling point, data shows that worries had been bubbling under the surface for weeks.
Shoppers began significantly ramping up buying from emergency preparedness brands late last month, according to Consumer Edge. Around that time, Fox News reported that the Pentagon was preparing U.S. military bases to operate for at least 90 days without external support. Exacerbating those fears was the ongoing war with Iran that President Donald Trump signaled could ramp back up.
Firearm trade group NSSF said that gun sales rose about 8% in October from the same month a year prior. Retailers and gun manufacturers have anecdotally reported that demand has remained elevated into November, which NSSF said can be attributed to a combination of uncertainty tied to the midterm election and the recent outages.
"If people are investing in firearms and ammunition, they're telling you very directly, with their wallet, what their priority is," said Mark Oliva, NSSF's managing director of public affairs. "You're literally investing in a product that's going to be able to protect your life and protect the lives of your family."
'Apocalyptic concerns'
Now, the doomsday talk has begun making its way to Wall Street.
Mizuho told clients on Monday that consumer worries about the outages — coupled with what the bank called "apocalyptic concerns" swirling on social media — drove shoppers to stock up on emergency supplies at Costco. As a result, Mizuho said it expects a key measure of non-fuel sales growth for Costco in November to rise above 10% for the first time since 2022.
And RBC said so-called doomsday prepping has had a "real impact" on buying behavior around the globe over recent weeks. Still, the Canadian bank reported that the trend has so far boosted sales for only a small basket of items, such as shelf-stable proteins, water purification products and dry-pantry foods.
Clients of Richard McWhorter, a private wealth advisor at SRM, have been rushing to Costco to buy goods in bulk and splurging for power generators. McWhorter said he's also fielded questions about how to prepare for a situation in which the financial system goes down.
"I've never seen anything like this in my life," McWhorter said. "There's the financial side of what I do, and then there's the psychological side. And the past two weeks have been much more psychological."
Metal dealer American Hartford Gold reported an uptick in customer inquiries this week. Company president Max Baecker said he heard from some customers that their interest in products like gold — long considered a safe-haven asset during times of turmoil — was driven by newfound concern about being overly reliant on digital financial networks following a glitch at JPMorgan Chase that affected customer transactions for several hours.
Vice President JD Vance abruptly canceled his appearance at a New York Times summit on Wednesday to attend meetings about the technology outages. A day prior, Jay Clayton, the U.S. director of national intelligence, told CNBC that the recent outages were not a cyberattack or a coordinated effort by a foreign nation.
Still, Sen. Mark Warner, D-Va., told CNBC on Wednesday that people were "freaked out" by the outages. Warner, who acts as the vice chairman of the Senate Intelligence Committee, said that the U.S. was "lucky" to have not yet seen a major AI-generated cyberattack or crisis due to AI agents going rogue.
Investors may begin pushing companies to accelerate their cybersecurity spending out of an abundance of caution around rogue AI agents following the outages, according to Macro Hive CEO Bilal Hafeez. Such a situation would be reminiscent of the antivirus software push seen during the dot-com boom, he said.
The Global X Cybersecurity ETF (BUG) has climbed around 3% over the past two weeks, bucking the downtrend seen among AI stocks and the broader technology trade. The Nasdaq Composite on Friday fell into negative territory for 2026, putting the tech-heavy index on track for its first losing year since 2022.
The 'old-fashioned way'
To be sure, not everyone on social media has bought into the idea that they should be prepping for a doomsday scenario. In satirical videos posted on TikTok, users joked that they were gearing up by placing orders in the Starbucks drive-thru or purchasing significant quantities of alcohol.
Still, the topic appears to be on the minds of a growing number of Americans. U.S. Google searches for the term "prepping" have more than doubled when comparing the past month with the same period a year prior. On YouTube, queries for videos about "survivalism," a term describing the practice of preparing for emergencies, have soared by more than 5,000% over the same time frame.
Cepeda, the Houston mom, sees emergency prep efforts as a way to be safe rather than sorry. She's previously tapped into backup food stashes during extreme weather events like Hurricane Harvey in 2017 and Winter Storm Uri in 2021.
But this year is the first time that she's felt she needed to be prepared for a potential emergency caused by technology outages, she said. Cepeda and her husband have ensured they have enough cash on hand and fuel in their cars if there's a broader hit to the U.S. power grid, she said.
"We rely so much on technology," Cepeda said. "You need to be able to do these things the more traditional, old-fashioned way."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/21/emergency-prep-spending-tech-outages.html",
    publishedAt: "2026-11-21T15:04:56+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "zelensky-says-crimean-bridge-strikes-fai-43786a9b",
    title: "Zelensky says Crimean Bridge strikes 'fair response' as he meets UK's Streeting",
    titleJa: "Zelensky says Crimean Bridge strikes 'fair response' as he meets UK's Streeting",
    summaryJa: "Ukraine's president says Kyiv acted after 109 separate Russian aerial attacks on bridges in Ukraine.",
    bodyOriginal: `Zelensky says Crimean Bridge strikes 'fair response' as he meets UK's Streeting
- Published
Ukrainian President Volodymyr Zelensky has justified Kyiv's repeated attacks on a critical bridge linking Russia to occupied Crimea, calling it a "fair response" to 109 separate Russian attacks on bridges in Ukraine.
In comments to the BBC in Kyiv, Zelensky said the intense attacks on Ukraine by Russia that have followed the strikes on the Crimean Bridge were only a "signal that Vladimir Putin does not want to stop. He wants a reason to escalate".
He rejected the claim by the Russian president that the bridge - which links Russia to the peninsula it illegally annexed from Ukraine - was "exclusively civilian" in use.
"There are facts, not just the words of Putin. We can see," he said.
The Ukrainian president pointed to images online of tanks and other Russian military hardware using the route from Russia into occupied Crimea as a supply line and for logistics.
"If Putin used the internet, he could see that."
The Ukrainian president added that Russia had carried out attacks with missiles and drones on bridges in Ukraine.
This week's combined missile-and-drone strikes by Ukrainian forces destroyed the central road section of the Crimean Bridge, collapsing part of it together with one of the two support arches into the sea and rendering the structure unusable for road traffic.
Russian attacks on Ukraine continued on Friday evening and overnight: a seven-year-old boy was killed in missile and drone strikes on Zelensky's hometown of Kryvyi Rih in the central Dnipropetrovsk region. Local officials say he had been in a playground at the time.
A 20-year-old female medic was also killed. A local official added that when rescuers rushed to the scene, the same site was targeted again with jet powered drones. Another 58 people were injured in the city.
Ukraine's state emergency service DSNS said 11 people were also injured in the north-eastern Kharkiv region, and one person in Rivne, in the north-west.
Russia launched its full-scale invasion of Ukraine in February 2022.
Zelensky was speaking ahead of a meeting in Kyiv with UK Defence Secretary Wes Streeting, who told the Ukrainian president he was here to show that Europe was united in its support.
"The more Putin tries to divide us, the more resolute we become," Streeting said.
He said that Russian missiles hitting Poland on Friday, during military exercises of the so-called Coalition of the Willing, was an "outrageous provocation".
The timing, Streeting said, seemed "more than a coincidence".
Asked by the BBC about Nato's response, he said the best way was to "do more for Ukraine" to defend itself against Putin who he called a "cold-blooded killer".
Streeting's description of Putin chimed with the comments made earlier by Zelensky, who described the Kremlin leader a "killer". This was done in response to US President Donald Trump referring this week to Putin as his "friend".
Streeting's visit to Kyiv came after European leaders meeting in Berlin on Thursday alongside US envoys said they were ready for negotiations with Moscow on ending the war in Ukraine.
"Europe has a clear and consistent and united negotiating position," UK Prime Minister Andy Burnham said, while German Chancellor Friedrich Merz stressed that Moscow's "maximalist demands are not realistic".
Donald Trump's son-in-law Jared Kushner, one of the two US envoys who were in Berlin, said the US president - who had also dialled into the meeting from Air Force One - wanted to make a deal with Moscow "with Europe by his side".
Russia's Vladimir Putin has so far rejected any European role in the US-led peace talks - but earlier this week he invited European representatives to Moscow as it wanted to clarify "what Europe will bring to these talks".
That meeting in the German capital came hours after Putin had held historic trilateral talks in Shenzhen, China, with Trump and Chinese President Xi Jinping.
Zelensky said he had been "sceptical" ahead of the latest round of talks, when US envoys claimed that Russia was prepared to make compromises to end the war.
"I thought [Putin] would find reason to escalate."
Speaking to the BBC, Streeting added: "Putin has absolutely no business playing the victim. He is the aggressor in this war. He provoked an illegal invasion of Ukraine. And all of us, right throughout the world, need to judge Putin not on his words, but on his actions."
In a separate development on Saturday, Finland said it "detected a drone strike on a Russian merchant vessel" in the eastern Gulf of Finland, "in an international maritime area".
The Finnish defence ministry said in a statement that the vessel was damaged, without giving any further details.
It added that "temporary restrictions on aviation and maritime areas in the eastern Gulf of Finland" were now reinstated for safety reasons.
Russia has not publicly commented on the issue.
Related topics
- Published3 days ago
- Published2 days ago`,
    bodyJa: `Zelensky says Crimean Bridge strikes 'fair response' as he meets UK's Streeting
- Published
Ukrainian President Volodymyr Zelensky has justified Kyiv's repeated attacks on a critical bridge linking Russia to occupied Crimea, calling it a "fair response" to 109 separate Russian attacks on bridges in Ukraine.
In comments to the BBC in Kyiv, Zelensky said the intense attacks on Ukraine by Russia that have followed the strikes on the Crimean Bridge were only a "signal that Vladimir Putin does not want to stop. He wants a reason to escalate".
He rejected the claim by the Russian president that the bridge - which links Russia to the peninsula it illegally annexed from Ukraine - was "exclusively civilian" in use.
"There are facts, not just the words of Putin. We can see," he said.
The Ukrainian president pointed to images online of tanks and other Russian military hardware using the route from Russia into occupied Crimea as a supply line and for logistics.
"If Putin used the internet, he could see that."
The Ukrainian president added that Russia had carried out attacks with missiles and drones on bridges in Ukraine.
This week's combined missile-and-drone strikes by Ukrainian forces destroyed the central road section of the Crimean Bridge, collapsing part of it together with one of the two support arches into the sea and rendering the structure unusable for road traffic.
Russian attacks on Ukraine continued on Friday evening and overnight: a seven-year-old boy was killed in missile and drone strikes on Zelensky's hometown of Kryvyi Rih in the central Dnipropetrovsk region. Local officials say he had been in a playground at the time.
A 20-year-old female medic was also killed. A local official added that when rescuers rushed to the scene, the same site was targeted again with jet powered drones. Another 58 people were injured in the city.
Ukraine's state emergency service DSNS said 11 people were also injured in the north-eastern Kharkiv region, and one person in Rivne, in the north-west.
Russia launched its full-scale invasion of Ukraine in February 2022.
Zelensky was speaking ahead of a meeting in Kyiv with UK Defence Secretary Wes Streeting, who told the Ukrainian president he was here to show that Europe was united in its support.
"The more Putin tries to divide us, the more resolute we become," Streeting said.
He said that Russian missiles hitting Poland on Friday, during military exercises of the so-called Coalition of the Willing, was an "outrageous provocation".
The timing, Streeting said, seemed "more than a coincidence".
Asked by the BBC about Nato's response, he said the best way was to "do more for Ukraine" to defend itself against Putin who he called a "cold-blooded killer".
Streeting's description of Putin chimed with the comments made earlier by Zelensky, who described the Kremlin leader a "killer". This was done in response to US President Donald Trump referring this week to Putin as his "friend".
Streeting's visit to Kyiv came after European leaders meeting in Berlin on Thursday alongside US envoys said they were ready for negotiations with Moscow on ending the war in Ukraine.
"Europe has a clear and consistent and united negotiating position," UK Prime Minister Andy Burnham said, while German Chancellor Friedrich Merz stressed that Moscow's "maximalist demands are not realistic".
Donald Trump's son-in-law Jared Kushner, one of the two US envoys who were in Berlin, said the US president - who had also dialled into the meeting from Air Force One - wanted to make a deal with Moscow "with Europe by his side".
Russia's Vladimir Putin has so far rejected any European role in the US-led peace talks - but earlier this week he invited European representatives to Moscow as it wanted to clarify "what Europe will bring to these talks".
That meeting in the German capital came hours after Putin had held historic trilateral talks in Shenzhen, China, with Trump and Chinese President Xi Jinping.
Zelensky said he had been "sceptical" ahead of the latest round of talks, when US envoys claimed that Russia was prepared to make compromises to end the war.
"I thought [Putin] would find reason to escalate."
Speaking to the BBC, Streeting added: "Putin has absolutely no business playing the victim. He is the aggressor in this war. He provoked an illegal invasion of Ukraine. And all of us, right throughout the world, need to judge Putin not on his words, but on his actions."
In a separate development on Saturday, Finland said it "detected a drone strike on a Russian merchant vessel" in the eastern Gulf of Finland, "in an international maritime area".
The Finnish defence ministry said in a statement that the vessel was damaged, without giving any further details.
It added that "temporary restrictions on aviation and maritime areas in the eastern Gulf of Finland" were now reinstated for safety reasons.
Russia has not publicly commented on the issue.
Related topics
- Published3 days ago
- Published2 days ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c6wy0qj7w5zqo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-21T13:17:38+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/3686/live/9ee585d0-e5a6-11f1-99b6-a35a62fa4264.jpg",
    readTime: 10,
  },
  {
    id: "state-and-federal-battle-over-prediction-2e3d2cc8",
    title: "State and federal battle over prediction markets regulation heats up after midterms",
    titleJa: "State and federal battle over prediction markets regulation heats up after midterms",
    summaryJa: "States, Congress and the CFTC are escalating the fight over prediction market regulation after the midterms.",
    bodyOriginal: `The turf war between states and the federal government is intensifying after Democrats secured control of Congress and key governorships on midterm elections night.
While it was widely expected Democrats would step up oversight of the emerging, multibillion-dollar industry if they won control of Congress, the actions after the elections have come from primarily Republican-led states.
At the same time, the Commodity Futures Trading Commission — the federal regulator for prediction markets — has ramped up its oversight of "mention" markets, where traders speculate on what individuals will say during a speech or broadcast. It's a type of event contract the agency has said is susceptible to manipulation.
CNBC first reported on Tuesday that the CFTC placed a hold on the certification of markets related to President Donald Trump's words in mid-November. Kalshi said it was complying with the order, but CEO Tarek Mansour said at an Axios event on Tuesday that the company disagreed with the regulatory decision.
On Thursday, the Senate passed a bipartisan bill that would ban CFTC-registered entities from listing contracts involving terrorism, assassination, war or military operations. The measure also bars contracts that are "reasonably expected" to resolve based on an individual's death.
Criminal charges, restraining order, lawsuits
Utah Attorney General Derek Brown filed 14 criminal charges against Kalshi and its founders, Mansour and Luana Lopes Lara, on Oct. 28, asserting the company violated a state law that prohibits gambling.
Kalshi's founders are expected to appear in person at Utah's Third District Court on Dec. 4, according to court documents.
"This is a crazy overreach; Utah is clearly playing politics. We look forward to putting a stop to this in court, just like we did in Arizona," said Kalshi's spokesperson Dani Lever.
In a separate, civil complaint on Oct. 20, Utah also named institutional market maker Susquehanna International Group as a defendant, along with Kalshi.
Though Arizona Attorney General Kris Mayes filed a criminal complaint against Kalshi in March, a federal judge blocked the case from proceeding in April.
Louisiana's Republican attorney general also filed a complaint to ban multiple exchanges from operating in the state on Nov. 12. A state judge ordered a temporary restraining order against the prediction market companies that same day.
"Who would have thought that these red states, that were reluctant to jump into the litigation arena, ended up having the most boldest and most innovative solutions," said gambling attorney Daniel Wallach, noting that Louisiana and Utah's latest lawsuits were led by Republican attorneys general.
In response, the CFTC sued Louisiana on Nov. 13. Separately, the federal agency filed suit against Arkansas after that state pursued civil enforcement against Kalshi.
The CFTC has sued 12 states as it tries to defend what it views as its exclusive jurisdiction to regulate prediction markets.
Meanwhile, the CFTC may soon add commissioners. President Donald Trump sent bipartisan nominations to the U.S. Senate on Nov. 12 to fill two of the four open seats on the commission. Chairman Michael Selig has been the only member since his nomination was approved by the Senate in December 2025.
Nathan Anonick, a Republican, and Matthew Rowland, a Democrat, appeared before the Senate Agriculture Committee on Tuesday. Multiple senators questioned them on the issue of prediction markets. Both demurred when asked whether they viewed sports-related event contracts as gambling.
Kalshi loses in Maryland
The CFTC's position faced another setback in a complicated decision by the Fourth U.S. Circuit Court of Appeals this week. The court ruled 2-1 that Maryland can enforce its state gambling law against Kalshi, though the judges disagreed on the reasoning.
"Judges can't agree with each other on why we're wrong," Kalshi spokesperson Elisabeth Diana said in a statement about the decision. "This splintered decision, including three separate contradictory opinions, demonstrates there is no unified coherent legal argument against prediction markets."
Overall, prediction markets have now seen three losses and one win at the circuit court level. It's widely expected the question of whether states or the federal government can regulate sports-related event contracts will be decided by the Supreme Court.
Donald Trump Jr. parts ways with Kalshi
Kalshi on Nov. 12 ended its advisory relationship with Donald Trump Jr. The prediction platform pointed to his venture capital firm 1789 Capital having a stake in rival platform Polymarket.
Though 1789 Capital announced its holding in Polymarket in August, Kalshi and the president's son ended their relationship after Democrats secured a majority in the House and Senate. Democratic lawmakers are expected to probe companies with relationships to the Trump family.
Nine Democratic senators, led by Adam Schiff, D-California, on Monday sent a letter to the CFTC asking it to reverse a directive to platforms not to geofence their offerings when they receive unfavorable court rulings stopping exchanges from operating in certain states.
Geofencing involves the use of location technology to block users in certain jurisdictions from participating in events contracts.
"Your unilateral decision directly conflicts with active court orders, undermines state and tribal law, and must be reversed," the senators wrote.
Meanwhile, Democratic Rep. Ro Khanna, D-California, has called for Congress to ban sports-related prediction markets entirely.
"Kalshi, a $40B company, lets 18 year olds bet on sports. They call it a 'prediction market.' It's gambling," he wrote in a post on X on Wednesday. "Investigate and ban sports prediction markets."
Disclosure: CNBC and Kalshi have a commercial relationship that includes customer acquisition and a minority investment.`,
    bodyJa: `The turf war between states and the federal government is intensifying after Democrats secured control of Congress and key governorships on midterm elections night.
While it was widely expected Democrats would step up oversight of the emerging, multibillion-dollar industry if they won control of Congress, the actions after the elections have come from primarily Republican-led states.
At the same time, the Commodity Futures Trading Commission — the federal regulator for prediction markets — has ramped up its oversight of "mention" markets, where traders speculate on what individuals will say during a speech or broadcast. It's a type of event contract the agency has said is susceptible to manipulation.
CNBC first reported on Tuesday that the CFTC placed a hold on the certification of markets related to President Donald Trump's words in mid-November. Kalshi said it was complying with the order, but CEO Tarek Mansour said at an Axios event on Tuesday that the company disagreed with the regulatory decision.
On Thursday, the Senate passed a bipartisan bill that would ban CFTC-registered entities from listing contracts involving terrorism, assassination, war or military operations. The measure also bars contracts that are "reasonably expected" to resolve based on an individual's death.
Criminal charges, restraining order, lawsuits
Utah Attorney General Derek Brown filed 14 criminal charges against Kalshi and its founders, Mansour and Luana Lopes Lara, on Oct. 28, asserting the company violated a state law that prohibits gambling.
Kalshi's founders are expected to appear in person at Utah's Third District Court on Dec. 4, according to court documents.
"This is a crazy overreach; Utah is clearly playing politics. We look forward to putting a stop to this in court, just like we did in Arizona," said Kalshi's spokesperson Dani Lever.
In a separate, civil complaint on Oct. 20, Utah also named institutional market maker Susquehanna International Group as a defendant, along with Kalshi.
Though Arizona Attorney General Kris Mayes filed a criminal complaint against Kalshi in March, a federal judge blocked the case from proceeding in April.
Louisiana's Republican attorney general also filed a complaint to ban multiple exchanges from operating in the state on Nov. 12. A state judge ordered a temporary restraining order against the prediction market companies that same day.
"Who would have thought that these red states, that were reluctant to jump into the litigation arena, ended up having the most boldest and most innovative solutions," said gambling attorney Daniel Wallach, noting that Louisiana and Utah's latest lawsuits were led by Republican attorneys general.
In response, the CFTC sued Louisiana on Nov. 13. Separately, the federal agency filed suit against Arkansas after that state pursued civil enforcement against Kalshi.
The CFTC has sued 12 states as it tries to defend what it views as its exclusive jurisdiction to regulate prediction markets.
Meanwhile, the CFTC may soon add commissioners. President Donald Trump sent bipartisan nominations to the U.S. Senate on Nov. 12 to fill two of the four open seats on the commission. Chairman Michael Selig has been the only member since his nomination was approved by the Senate in December 2025.
Nathan Anonick, a Republican, and Matthew Rowland, a Democrat, appeared before the Senate Agriculture Committee on Tuesday. Multiple senators questioned them on the issue of prediction markets. Both demurred when asked whether they viewed sports-related event contracts as gambling.
Kalshi loses in Maryland
The CFTC's position faced another setback in a complicated decision by the Fourth U.S. Circuit Court of Appeals this week. The court ruled 2-1 that Maryland can enforce its state gambling law against Kalshi, though the judges disagreed on the reasoning.
"Judges can't agree with each other on why we're wrong," Kalshi spokesperson Elisabeth Diana said in a statement about the decision. "This splintered decision, including three separate contradictory opinions, demonstrates there is no unified coherent legal argument against prediction markets."
Overall, prediction markets have now seen three losses and one win at the circuit court level. It's widely expected the question of whether states or the federal government can regulate sports-related event contracts will be decided by the Supreme Court.
Donald Trump Jr. parts ways with Kalshi
Kalshi on Nov. 12 ended its advisory relationship with Donald Trump Jr. The prediction platform pointed to his venture capital firm 1789 Capital having a stake in rival platform Polymarket.
Though 1789 Capital announced its holding in Polymarket in August, Kalshi and the president's son ended their relationship after Democrats secured a majority in the House and Senate. Democratic lawmakers are expected to probe companies with relationships to the Trump family.
Nine Democratic senators, led by Adam Schiff, D-California, on Monday sent a letter to the CFTC asking it to reverse a directive to platforms not to geofence their offerings when they receive unfavorable court rulings stopping exchanges from operating in certain states.
Geofencing involves the use of location technology to block users in certain jurisdictions from participating in events contracts.
"Your unilateral decision directly conflicts with active court orders, undermines state and tribal law, and must be reversed," the senators wrote.
Meanwhile, Democratic Rep. Ro Khanna, D-California, has called for Congress to ban sports-related prediction markets entirely.
"Kalshi, a $40B company, lets 18 year olds bet on sports. They call it a 'prediction market.' It's gambling," he wrote in a post on X on Wednesday. "Investigate and ban sports prediction markets."
Disclosure: CNBC and Kalshi have a commercial relationship that includes customer acquisition and a minority investment.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/21/prediction-market-regulation-kalshi-cftc.html",
    publishedAt: "2026-11-21T13:12:41+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "warren-buffett-quadruples-thanksgiving-g-25a2dbea",
    title: "Warren Buffett quadruples Thanksgiving gifts: A breakdown of how much wealth he's giving away",
    titleJa: "Warren Buffett quadruples Thanksgiving gifts: A breakdown of how much wealth he's giving away",
    summaryJa: "Warren Buffett more than quadrupled his Thanksgiving donations to four family foundations this year to $5.5 billion.",
    bodyOriginal: `(This is the Warren Buffett Watch newsletter, news and analysis on all things Warren Buffett and Berkshire Hathaway. You can sign up here to receive it every Friday evening in your inbox.)
Buffett says kindness 'compounds' as his Thanksgiving gifts soar
Warren Buffett, 96, more than quadrupled his Thanksgiving donations to four family foundations this year to $5.5 billion.
The gifts consist of Berkshire Class B shares that have been converted from his roughly $160 billion of Class A shares.
The increase is in line with his new goal, announced last July, to give away all of his Berkshire Hathaway shares "within about eight years," with no additional annual donations going to the Gates Foundation.
Around $2.2 billion of shares goes to the Susan Thompson Buffett Foundation, named for his late first wife, with the three foundations run by his children, Susie Buffett's Sherwood Foundation, the Howard G. Buffett Foundation, and Peter Buffett's NoVo Foundation each getting $1.1 billion each.
In July of last year, Buffett gave shares worth $4.6 billion to the Gates Foundation with another $1.4 billion going to the family foundations.
This July, the family foundations received $5.9 billion in stock, bringing the year's total to $11.4 billion, an increase of almost 55% from last year, even as the Gates Foundation received nothing.
In comments included in the Berkshire news release this week announcing the new gifts, Buffett reaffirmed his confidence in his children's ability to disburse his fortune over time, saying they "have given thoughtfully to worthy causes for decades, and I trust 100% both their abilities and their fidelity."
He also said his confidence in Berkshire is "as strong as ever."
Recalling that in last year's lengthier Thanksgiving message he had said, "Kindness is costless but also priceless," Buffett wrote, " A year later, I would only add that it compounds, and at a better rate than anything Charlie [Munger] and I ever bought."
"Both of us received beyond measurement costless benefits from a few teachers such as Ben Graham, Joe Rosenfield and Tom Murphy. Because of this we not only prospered mightily but were able to pass along many of the benefits we received.
"Much of my good fortune has come in the form of people who were kind to me and expected nothing in return. I'm grateful to every one of them.
"This Thanksgiving, thank one of those selfless people in your own life. Better yet, be a benefactor for someone else."
Berkshire rally stalls but it's not as bad as S&P's AI selloff
Berkshire Hathaway's fourth quarter rally that had produced a string of record highs cooled this week as both classes of its stock posted five straight daily declines.
That sent them down 3.9% for the week.
Last Friday, Berkshire was up 19.1% since October 1. Now that gain has been cut to 14.5%
The S&P's decline of 8.6% this week, however, was even bigger than Berkshire's 5-day drop, as investors sold to lock in profits from AI-related stocks.
The benchmark index, along with the Dow Industrials, are in a correction after falling 10% from their recent highs, and the Nasdaq Composite has erased all of its year-to-date gains.
Berkshire's smaller decline increased its year-to-date outperformance of the S&P to 12.5 percentage points.
One Wall Street firm, however, thinks Berkshire's run-up has run its course.
Argus Research downgraded the B shares to hold from buy Friday, saying the stock is "fully valued" at about 25 times next year's estimate for operating earnings per share.
Berkshire buys Delta, sells BofA in quiet quarter
As foreshadowed by its 10-Q financial report released almost two weeks ago, Berkshire Hathaway's Q3 13F portfolio snapshot filed with the SEC on Monday showed it wasn't doing much buying and selling of equities this summer.
And the two largest additions, Lennar and Bending Spoons, had been previously disclosed, along with additional purchases at the start of the fourth quarter.
The most notable change we didn't expect was a 12% increase in Berkshire's Delta Air Lines position, bringing it just short of a 10% stake, now valued at $5.2 billion.
Exceeding 10% triggers a number of regulatory burdens, including the requirement to promptly disclose new buying or selling, so we may not see additional purchases going forward.
Delta's return to the portfolio after Warren Buffett sold all of Berkshire's airline stocks in 2020 has been something of a surprise given his bumpy ride with the industry over the years.
As expected, Berkshire continued to trim its Bank of America stake. After nine consecutive quarters of sales, it's been cut by 56% but remains the fifth largest portfolio holding at $21.4 billion.
Berkshire also cut another financial, Capital One, by almost 62%, although it was already a relatively small position, now worth $207 million.
Also notable are two positions that didn't change.
After adding $17 billion in Q2 to the Alphabet bet that had only been initiated last summer, Berkshire defied some expectations by keeping the holding unchanged.
Its 106 million shares are valued at $28.1 billion.
And for the fourth consecutive quarter, Berkshire's largest equity holding, Apple, didn't change. With a big boost from the stock's year-to-date gain of 26.1%, the position is now valued at more than $78 billion.
The complete portfolio
BUFFETT & BERKSHIRE AROUND THE INTERNET
Some links may require a subscription:
- Barron's on MSN: Berkshire executives buy $2 million in stock with shares near record
HIGHLIGHTS FROM CNBC'S BUFFETT ARCHIVE
Why Buffett doesn't worry about what he eats (2001)
Warren Buffett loves to eat what many would call junk food and drink a lot of sugary beverages. A quarter-century ago, when he was 70, Buffett explained why he still thought a life insurance company would rate his life expectancy "considerably better than the average."
AUDIENCE MEMBER: Every time I hear what you like to eat, Warren, it makes me wonder what your cholesterol level is — (laughter) — or if you even worry about it...
WARREN BUFFETT: I do know the number, and I don't remember it. My doctor tells me, "It's a little high," but if he says it's a little high, it means it isn't that high, or he would — because he always tries to push me into making a few changes in my life.
But he — I've got a wonderful doctor. And I was lucky last year, because I hadn't been in to see him for about five years. And — (laughter) — due to — those guys cost a lot of money, I mean. (Laughter)
And due to purely an accident, a reaction to some other medicine I was given when I was out of the city, he got a hold of me, and then he shamed me into having a physical. And it was extremely lucky, because I had a polyp in the colon that would have probably caused trouble, you know, within a couple of years.
I would say that if you ask my doctor, he would want me to make a few changes, but he would also say that my life expectancy is probably a lot better than the average person of 70.
You know, I have no stress whatsoever. Zero. You know, I mean, I get to do what I love to do every day. You know, and I'm surrounded by people that are terrific.
So that problem in life just doesn't exist for me. You know, and I don't smoke or drink or, well, we'll end it right there. (Laughter)
And so, you know, if you were an underwriter for a life company, you would rate me considerably better than the average. You'd rate Charlie better than average, too.
And I'm sure that, you know, I could change it slightly, perhaps, on the probabilities, you know, if I change my diet dramatically or something. But it's very unlikely to happen.
BERKSHIRE STOCK WATCH
Four weeks
Twelve months
BRK.A stock price: $855,000.00
BRK.B stock price: $570.00
BRK.B P/E (TTM): 15.91
Berkshire market capitalization: $1,210,976,168,580
Berkshire Cash as of Sept 30: $377.4 billion (Up 3.3% from June 30)
Excluding Rail Cash and Subtracting T-Bills Payable: $352.3 billion (Down 1.9% from June 30)
Berkshire repurchased $9.6 billion of its shares in Q3 2026.
BERKSHIRE'S TOP EQUITY HOLDINGS - Nov. 20, 2026
Berkshire's top holdings of disclosed publicly traded stocks in the U.S. and Japan, by market value, based on the latest closing prices.
Holdings are as of September 30, 2026, as reported in Berkshire Hathaway's 13F filing on November 16, 2026, except for:
- Mitsubishi, which is as of April 30, 2026
The full list of holdings and current market values is available from CNBC.com's Berkshire Hathaway Portfolio Tracker.
QUESTIONS OR COMMENTS
Please send any questions or comments about the newsletter to me at alex.crippen@cnbc.com. (Sorry, but we don't forward questions or comments to Buffett himself.)
If you aren't already subscribed to this newsletter, you can sign up here.
Also, Buffett's annual letters to shareholders are highly recommended reading. There are collected here on Berkshire's website.
-- Alex Crippen, Editor, Warren Buffett Watch`,
    bodyJa: `(This is the Warren Buffett Watch newsletter, news and analysis on all things Warren Buffett and Berkshire Hathaway. You can sign up here to receive it every Friday evening in your inbox.)
Buffett says kindness 'compounds' as his Thanksgiving gifts soar
Warren Buffett, 96, more than quadrupled his Thanksgiving donations to four family foundations this year to $5.5 billion.
The gifts consist of Berkshire Class B shares that have been converted from his roughly $160 billion of Class A shares.
The increase is in line with his new goal, announced last July, to give away all of his Berkshire Hathaway shares "within about eight years," with no additional annual donations going to the Gates Foundation.
Around $2.2 billion of shares goes to the Susan Thompson Buffett Foundation, named for his late first wife, with the three foundations run by his children, Susie Buffett's Sherwood Foundation, the Howard G. Buffett Foundation, and Peter Buffett's NoVo Foundation each getting $1.1 billion each.
In July of last year, Buffett gave shares worth $4.6 billion to the Gates Foundation with another $1.4 billion going to the family foundations.
This July, the family foundations received $5.9 billion in stock, bringing the year's total to $11.4 billion, an increase of almost 55% from last year, even as the Gates Foundation received nothing.
In comments included in the Berkshire news release this week announcing the new gifts, Buffett reaffirmed his confidence in his children's ability to disburse his fortune over time, saying they "have given thoughtfully to worthy causes for decades, and I trust 100% both their abilities and their fidelity."
He also said his confidence in Berkshire is "as strong as ever."
Recalling that in last year's lengthier Thanksgiving message he had said, "Kindness is costless but also priceless," Buffett wrote, " A year later, I would only add that it compounds, and at a better rate than anything Charlie [Munger] and I ever bought."
"Both of us received beyond measurement costless benefits from a few teachers such as Ben Graham, Joe Rosenfield and Tom Murphy. Because of this we not only prospered mightily but were able to pass along many of the benefits we received.
"Much of my good fortune has come in the form of people who were kind to me and expected nothing in return. I'm grateful to every one of them.
"This Thanksgiving, thank one of those selfless people in your own life. Better yet, be a benefactor for someone else."
Berkshire rally stalls but it's not as bad as S&P's AI selloff
Berkshire Hathaway's fourth quarter rally that had produced a string of record highs cooled this week as both classes of its stock posted five straight daily declines.
That sent them down 3.9% for the week.
Last Friday, Berkshire was up 19.1% since October 1. Now that gain has been cut to 14.5%
The S&P's decline of 8.6% this week, however, was even bigger than Berkshire's 5-day drop, as investors sold to lock in profits from AI-related stocks.
The benchmark index, along with the Dow Industrials, are in a correction after falling 10% from their recent highs, and the Nasdaq Composite has erased all of its year-to-date gains.
Berkshire's smaller decline increased its year-to-date outperformance of the S&P to 12.5 percentage points.
One Wall Street firm, however, thinks Berkshire's run-up has run its course.
Argus Research downgraded the B shares to hold from buy Friday, saying the stock is "fully valued" at about 25 times next year's estimate for operating earnings per share.
Berkshire buys Delta, sells BofA in quiet quarter
As foreshadowed by its 10-Q financial report released almost two weeks ago, Berkshire Hathaway's Q3 13F portfolio snapshot filed with the SEC on Monday showed it wasn't doing much buying and selling of equities this summer.
And the two largest additions, Lennar and Bending Spoons, had been previously disclosed, along with additional purchases at the start of the fourth quarter.
The most notable change we didn't expect was a 12% increase in Berkshire's Delta Air Lines position, bringing it just short of a 10% stake, now valued at $5.2 billion.
Exceeding 10% triggers a number of regulatory burdens, including the requirement to promptly disclose new buying or selling, so we may not see additional purchases going forward.
Delta's return to the portfolio after Warren Buffett sold all of Berkshire's airline stocks in 2020 has been something of a surprise given his bumpy ride with the industry over the years.
As expected, Berkshire continued to trim its Bank of America stake. After nine consecutive quarters of sales, it's been cut by 56% but remains the fifth largest portfolio holding at $21.4 billion.
Berkshire also cut another financial, Capital One, by almost 62%, although it was already a relatively small position, now worth $207 million.
Also notable are two positions that didn't change.
After adding $17 billion in Q2 to the Alphabet bet that had only been initiated last summer, Berkshire defied some expectations by keeping the holding unchanged.
Its 106 million shares are valued at $28.1 billion.
And for the fourth consecutive quarter, Berkshire's largest equity holding, Apple, didn't change. With a big boost from the stock's year-to-date gain of 26.1%, the position is now valued at more than $78 billion.
The complete portfolio
BUFFETT & BERKSHIRE AROUND THE INTERNET
Some links may require a subscription:
- Barron's on MSN: Berkshire executives buy $2 million in stock with shares near record
HIGHLIGHTS FROM CNBC'S BUFFETT ARCHIVE
Why Buffett doesn't worry about what he eats (2001)
Warren Buffett loves to eat what many would call junk food and drink a lot of sugary beverages. A quarter-century ago, when he was 70, Buffett explained why he still thought a life insurance company would rate his life expectancy "considerably better than the average."
AUDIENCE MEMBER: Every time I hear what you like to eat, Warren, it makes me wonder what your cholesterol level is — (laughter) — or if you even worry about it...
WARREN BUFFETT: I do know the number, and I don't remember it. My doctor tells me, "It's a little high," but if he says it's a little high, it means it isn't that high, or he would — because he always tries to push me into making a few changes in my life.
But he — I've got a wonderful doctor. And I was lucky last year, because I hadn't been in to see him for about five years. And — (laughter) — due to — those guys cost a lot of money, I mean. (Laughter)
And due to purely an accident, a reaction to some other medicine I was given when I was out of the city, he got a hold of me, and then he shamed me into having a physical. And it was extremely lucky, because I had a polyp in the colon that would have probably caused trouble, you know, within a couple of years.
I would say that if you ask my doctor, he would want me to make a few changes, but he would also say that my life expectancy is probably a lot better than the average person of 70.
You know, I have no stress whatsoever. Zero. You know, I mean, I get to do what I love to do every day. You know, and I'm surrounded by people that are terrific.
So that problem in life just doesn't exist for me. You know, and I don't smoke or drink or, well, we'll end it right there. (Laughter)
And so, you know, if you were an underwriter for a life company, you would rate me considerably better than the average. You'd rate Charlie better than average, too.
And I'm sure that, you know, I could change it slightly, perhaps, on the probabilities, you know, if I change my diet dramatically or something. But it's very unlikely to happen.
BERKSHIRE STOCK WATCH
Four weeks
Twelve months
BRK.A stock price: $855,000.00
BRK.B stock price: $570.00
BRK.B P/E (TTM): 15.91
Berkshire market capitalization: $1,210,976,168,580
Berkshire Cash as of Sept 30: $377.4 billion (Up 3.3% from June 30)
Excluding Rail Cash and Subtracting T-Bills Payable: $352.3 billion (Down 1.9% from June 30)
Berkshire repurchased $9.6 billion of its shares in Q3 2026.
BERKSHIRE'S TOP EQUITY HOLDINGS - Nov. 20, 2026
Berkshire's top holdings of disclosed publicly traded stocks in the U.S. and Japan, by market value, based on the latest closing prices.
Holdings are as of September 30, 2026, as reported in Berkshire Hathaway's 13F filing on November 16, 2026, except for:
- Mitsubishi, which is as of April 30, 2026
The full list of holdings and current market values is available from CNBC.com's Berkshire Hathaway Portfolio Tracker.
QUESTIONS OR COMMENTS
Please send any questions or comments about the newsletter to me at alex.crippen@cnbc.com. (Sorry, but we don't forward questions or comments to Buffett himself.)
If you aren't already subscribed to this newsletter, you can sign up here.
Also, Buffett's annual letters to shareholders are highly recommended reading. There are collected here on Berkshire's website.
-- Alex Crippen, Editor, Warren Buffett Watch`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/21/warren-buffett-quadruples-thanksgiving-gifts.html",
    publishedAt: "2026-11-21T13:01:44+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "international-first-class-is-over-for-u-db52fc97",
    title: "International first class is over for U.S. airlines. Enter the mega business-class cabin",
    titleJa: "International first class is over for U.S. airlines. Enter the mega business-class cabin",
    summaryJa: "Airlines are opting to build giant business-class cabins with ever-more luxurious suites.",
    bodyOriginal: `The era of U.S. airlines' long-haul, international first class ended this week when American Airlines' last flight with its eight-suite section landed. In its place will be a massive business-class cabin with room for 70 passengers.
U.S. airlines have been ditching international first-class cabins for a new top tier: larger and souped-up business classes, featuring suites with sliding doors, the design du jour. Delta Air Lines and United Airlines have already taken this step. American was the last of the U.S. airlines to still have first class on long-haul international routes.
Many travelers might not notice the difference. That's because of airlines' investments into business class: new suites, bigger screens, better technology like device-charging pads, and improved bedding.
It's part of airlines' big bet on mass luxury. Consumers have been willing to shell out more to fly comfortably, which is helping to boost airline revenue. That's all the more important as costs of everything from fuel to airport landing fees have been rising, soaking up more of the industry's profits.
The retirement of first class ends a more-than-six-decade stretch of the jet age that in the early days included service like seat-side carving of chateaubriand and meals served on fine bone china.
A few decades ago, business class was much smaller, with two-by-two seats in some configurations, and recliners, not the lie-flat seats that dominate those cabins now.
"When you've got individual pods in biz class, and you've got a comfortable enough seat and bedding and decent wine, for a lot of people this is good enough," said Henry Harteveldt, founder of travel consulting firm Atmosphere Research Group and a former airline executive.
The over-the-top dining of the early days of international first class was a form of entertainment, long before laptops, personal seat-back screens and in-flight Wi-Fi, or even the promise of sleep on lie-flat beds, but customers still eat lots on board, Harteveldt said.
"People say they want to sleep but then they stay up and they eat every morsel," he said. "They're hypocrites."
There was still a hefty price gap between first and business.
A flight between Los Angeles and London on American's Boeing 777-300ER this week went for $12,994 in business class for a one-way ticket and $15,669 for a first-class seat.
American's last flight with international first class departed Friday morning local time in Sydney, bound for Los Angeles.
Its new cabin on its Boeing 777-300ERs will feature 70 business-class suites, the most of any U.S. airline. Pre-overhaul, the cabins had been operating with eight first-class suites and 52 pods in business, though the remodeling is ongoing. American is also flying a subfleet of 787-9 Dreamliners that have 51 business-class suites. (United is putting 64 new suites on that aircraft.)
Part of the allure is that some companies allow employees to book business-class tickets, but not first class.
American Airlines told CNBC it's growing its business-class cabins across the fleet. It's evaluating increasing the number of suites on its smaller long-haul jets, the Boeing 787-8 Dreamliners, from 20 currently to somewhere in the 30s.
"You don't have enough seats to make the seat cost competitive," Nat Pieper, American's chief commercial officer, said in an interview this month. "So what you need to do to make that airplane work is it's got to be a yield play. You need more business-class seats."
No soup, no olives
Differences between first and business classes on American lately came down to details.
On American's first-class long-haul section, passengers got olives with warm nuts to accompany their beverage early in the flight, while there were no olives for business class.
First class got a soup; business did not. First class got a warm dessert served a la mode in addition to the cold dessert or fruit and cheese plate both cabins were offered.
And there was no memory foam lumbar pillow for business class like there was in first, American said. But otherwise, the experiences were fairly similar for passengers. They still got better food options and service than economy passengers, along with their bigger seats, early boarding and lounge access.
"It's not like the bed can go any flatter than 180 degrees," Harteveldt said. "The bedding can be thicker, and the food nicer."
Delta and United have already replaced international, long-haul first class with dozens of their Delta One and Polaris business lie-flat suites, respectively, each of which is getting upgrades now.
American will continue offering a separate lie-flat first class on its Airbus A321T subfleet it uses for domestic cross-country flying until early 2027. But then that goes away, too.
Meanwhile, airlines over the past decade have added a premium economy section, which sits between business class and economy. It features recliner seats similar to those in domestic first class, often with foot rests, meals served on actual plates, larger seat-back screens than economy and earlier boarding.
Carving up business class
Airlines are now cutting up business class into different segments, something they've done for more than a decade with the coach cabin's basic economy, standard and extra legroom seats.
United and Delta this year each announced their most expensive cabins will be sold with basic options, which are more restrictive and don't include things like the ability to pick your seat ahead of time or get access to a special airport lounge.
There are also a few seats in some of the business-class cabins that are roomier, like American's Flagship Suite Preferred and United's Polaris Studio. Even the guest seating in the United suite varies with "standard and companion ottomans," the latter including a seatbelt so you can ask "another Polaris passenger to visit you between takeoff and landing for a drink, chat or game," the airline says.
There's more to come.
"I don't think we found the limit on segmentation," United CFO Mike Leskinen told CNBC on Thursday. "We have a few things on the drawing board. We're not done."
First class still flies globally
Although U.S. carriers are moving away from the designation, first class is far from dead.
Singapore Airlines, Germany's Lufthansa, British Airways and Air France have unveiled updated first-class cabins and other service improvements like food.
British Airways last month said it will build a record 106-suite business class on its Airbus A380 aircraft, the world's largest passenger airplane, but it's also upgrading its first class on board.
Meanwhile, smaller airlines like JetBlue Airways, Frontier Airlines and Allegiant Air are introducing domestic or short-haul first-class seats.
"We're going to be able to do that at a really low price comparatively to what you're used to out there in the marketplace," Frontier Chief Commercial Officer Bobby Schroeter said last month.`,
    bodyJa: `The era of U.S. airlines' long-haul, international first class ended this week when American Airlines' last flight with its eight-suite section landed. In its place will be a massive business-class cabin with room for 70 passengers.
U.S. airlines have been ditching international first-class cabins for a new top tier: larger and souped-up business classes, featuring suites with sliding doors, the design du jour. Delta Air Lines and United Airlines have already taken this step. American was the last of the U.S. airlines to still have first class on long-haul international routes.
Many travelers might not notice the difference. That's because of airlines' investments into business class: new suites, bigger screens, better technology like device-charging pads, and improved bedding.
It's part of airlines' big bet on mass luxury. Consumers have been willing to shell out more to fly comfortably, which is helping to boost airline revenue. That's all the more important as costs of everything from fuel to airport landing fees have been rising, soaking up more of the industry's profits.
The retirement of first class ends a more-than-six-decade stretch of the jet age that in the early days included service like seat-side carving of chateaubriand and meals served on fine bone china.
A few decades ago, business class was much smaller, with two-by-two seats in some configurations, and recliners, not the lie-flat seats that dominate those cabins now.
"When you've got individual pods in biz class, and you've got a comfortable enough seat and bedding and decent wine, for a lot of people this is good enough," said Henry Harteveldt, founder of travel consulting firm Atmosphere Research Group and a former airline executive.
The over-the-top dining of the early days of international first class was a form of entertainment, long before laptops, personal seat-back screens and in-flight Wi-Fi, or even the promise of sleep on lie-flat beds, but customers still eat lots on board, Harteveldt said.
"People say they want to sleep but then they stay up and they eat every morsel," he said. "They're hypocrites."
There was still a hefty price gap between first and business.
A flight between Los Angeles and London on American's Boeing 777-300ER this week went for $12,994 in business class for a one-way ticket and $15,669 for a first-class seat.
American's last flight with international first class departed Friday morning local time in Sydney, bound for Los Angeles.
Its new cabin on its Boeing 777-300ERs will feature 70 business-class suites, the most of any U.S. airline. Pre-overhaul, the cabins had been operating with eight first-class suites and 52 pods in business, though the remodeling is ongoing. American is also flying a subfleet of 787-9 Dreamliners that have 51 business-class suites. (United is putting 64 new suites on that aircraft.)
Part of the allure is that some companies allow employees to book business-class tickets, but not first class.
American Airlines told CNBC it's growing its business-class cabins across the fleet. It's evaluating increasing the number of suites on its smaller long-haul jets, the Boeing 787-8 Dreamliners, from 20 currently to somewhere in the 30s.
"You don't have enough seats to make the seat cost competitive," Nat Pieper, American's chief commercial officer, said in an interview this month. "So what you need to do to make that airplane work is it's got to be a yield play. You need more business-class seats."
No soup, no olives
Differences between first and business classes on American lately came down to details.
On American's first-class long-haul section, passengers got olives with warm nuts to accompany their beverage early in the flight, while there were no olives for business class.
First class got a soup; business did not. First class got a warm dessert served a la mode in addition to the cold dessert or fruit and cheese plate both cabins were offered.
And there was no memory foam lumbar pillow for business class like there was in first, American said. But otherwise, the experiences were fairly similar for passengers. They still got better food options and service than economy passengers, along with their bigger seats, early boarding and lounge access.
"It's not like the bed can go any flatter than 180 degrees," Harteveldt said. "The bedding can be thicker, and the food nicer."
Delta and United have already replaced international, long-haul first class with dozens of their Delta One and Polaris business lie-flat suites, respectively, each of which is getting upgrades now.
American will continue offering a separate lie-flat first class on its Airbus A321T subfleet it uses for domestic cross-country flying until early 2027. But then that goes away, too.
Meanwhile, airlines over the past decade have added a premium economy section, which sits between business class and economy. It features recliner seats similar to those in domestic first class, often with foot rests, meals served on actual plates, larger seat-back screens than economy and earlier boarding.
Carving up business class
Airlines are now cutting up business class into different segments, something they've done for more than a decade with the coach cabin's basic economy, standard and extra legroom seats.
United and Delta this year each announced their most expensive cabins will be sold with basic options, which are more restrictive and don't include things like the ability to pick your seat ahead of time or get access to a special airport lounge.
There are also a few seats in some of the business-class cabins that are roomier, like American's Flagship Suite Preferred and United's Polaris Studio. Even the guest seating in the United suite varies with "standard and companion ottomans," the latter including a seatbelt so you can ask "another Polaris passenger to visit you between takeoff and landing for a drink, chat or game," the airline says.
There's more to come.
"I don't think we found the limit on segmentation," United CFO Mike Leskinen told CNBC on Thursday. "We have a few things on the drawing board. We're not done."
First class still flies globally
Although U.S. carriers are moving away from the designation, first class is far from dead.
Singapore Airlines, Germany's Lufthansa, British Airways and Air France have unveiled updated first-class cabins and other service improvements like food.
British Airways last month said it will build a record 106-suite business class on its Airbus A380 aircraft, the world's largest passenger airplane, but it's also upgrading its first class on board.
Meanwhile, smaller airlines like JetBlue Airways, Frontier Airlines and Allegiant Air are introducing domestic or short-haul first-class seats.
"We're going to be able to do that at a really low price comparatively to what you're used to out there in the marketplace," Frontier Chief Commercial Officer Bobby Schroeter said last month.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/21/us-airlines-first-class-business-class.html",
    publishedAt: "2026-11-21T12:00:01+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    readTime: 10,
  },
  {
    id: "tech-outages-are-rattling-americans-so-m-e90c804c",
    title: "Tech outages are rattling Americans so much that they’re stockpiling cash and supplies",
    titleJa: "Tech outages are rattling Americans so much that they’re stockpiling cash and supplies",
    summaryJa: "A lack of clarity from world leaders is prompting some people to prepare for the worst.",
    bodyOriginal: `A lack of clarity from world leaders is prompting some people to prepare for the worst.`,
    bodyJa: `A lack of clarity from world leaders is prompting some people to prepare for the worst.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/why-are-these-tech-outages-rattling-americans-so-much-that-theyre-stockpiling-cash-and-supplies-07516bdd?mod=mw_rss_topstories",
    publishedAt: "2026-11-21T03:20:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-46571930",
    readTime: 2,
  },
  {
    id: "can-ai-really-help-spot-black-friday-dea-0ec089ab",
    title: "Can AI really help spot Black Friday deals? We put it to the test",
    titleJa: "Can AI really help spot Black Friday deals? We put it to the test",
    summaryJa: "We put four AI models to the test to see if they could save us money on a new TV.",
    bodyOriginal: `Can AI really help spot Black Friday deals? We put it to the test
- Published
Whether it's scrolling through endless choice, spotting fake reviews, or working out if a "deal" is a deal at all, Black Friday sums up a lot of online woes.
Retailers promise bargains - but the sheer number of offers can leave us feeling no closer to finding the best deal.
It's an area where generative AI products, such as ChatGPT, Claude and Gemini, have promised to help.
But are they any good at finding Black Friday deals? We had a go ourselves a week ahead of the big day.
Figures suggest relatively few UK shoppers currently go to AI tools for help.
A recent YouGov survey of 19 countries found the UK ranked second-last in the proportion of people who said they had used AI to help them shop.
Crucially, 36% of respondents who said they would be shopping around Black Friday didn't plan to use an AI tool at all.
But the survey suggested a growing number of people were considering it - and tech firms have released features to capitalise on this.
Amazon launched Alexa for Shopping for UK users in November and OpenAI launched a Shopping Research tool on ChatGPT days before last year's Black Friday.
In the US, Google recently launched Universal Cart, with AI-powered features such as price tracking and identification of relevant promo codes.
But there has been criticism that fact-checking AI ends up taking more time, while some brands are working to try to make sure their products show up in chatbot answers.
We asked four models to find a 55-inch TV deal, using the free versions of many of the most popular tools.
While this was not a rigorous scientific test, the experience we had produced mixed results.
ChatGPT - full price and not available to buy
OpenAI's ChatGPT came up with four options.
Its top pick was a Hisense TV on Chinese retailer Joybuy's website, on sale for £499 down from £649.
The next recommendation was a 55-inch TCL-branded TV, but a sidebar showed prices for the 50-inch version, from £379 to £814.
Option three was the same Hisense TV as before, but for full price at £649 from John Lewis and Richer Sounds.
This was the "best safer purchase" according to ChatGPT, as the sites offered longer guarantee periods.
But clicking on the links did not go well. Both retailers said the TV was no longer listed online.
The fourth option was equally fruitless - another TCL TV, at full price, £150 over our budget and not available online.
At the bottom, ChatGPT served one last offer - "one OLED option to compare" - for a £1,100 LG TV that was marked as "Ad".
Claude - honest, but not too helpful
Claude produced the shortest answer of all the models we tested, and unlike the others, it did not give much detail on the specifications of each model.
Instead, it seemed to base its results on a small number of reviews published online.
It recommended the same two TCL TVs as ChatGPT.
But when we clicked on the links, they sent us to two dead pages on the Richer Sounds website.
Some other links led to year-old round-ups of Black Friday 2025 deals.
Claude was not very enthusiastic about its other two recommendations due to a lack of independent reviews - calling one "a decent option" but saying it "wouldn't pick" the other.
It also listed two Samsung TVs, but it told us not to buy them, with one "over budget and not clearly better than the TCLs".
We were left wondering why it even mentioned them in the first place.
Gemini - a familiar pattern
Different AI model, same TV manufacturers - albeit different Hisense and TCL models to the previous chatbots' recommendations.
Gemini generated a table comparing four different models, but offered no links to the stores it named, so we searched for them ourselves.
The prices for one TCL TV were correct at £649, but it was sold out at one of the named retailers.
It said the other TCL model was available from Argos and Currys for £539 - correct for Argos, but when we checked Currys, it was £60 more expensive.
Again, it included two Samsung models to avoid due to lower screen specs.
Alexa - accurate but limited
Alexa came back with four TVs, from its own Amazon Ember at £532 to a £699 Samsung.
But its top recommendation was to go for another Samsung model at £616 (down from £749), based on its picture quality and Amazon customer rating.
Its fourth option was for a Sony TV, but it was only 50 inches, leaving us unsure why it had included it.
All the prices stated were correct, but Amazon only searches its own store. Alexa did acknowledge this, encouraging us to check its rivals for better deals, "as prices can vary" and we could get longer guarantees elsewhere.
Inconsistent pricing
There are methods that can boost the likelihood of getting a better response, from crafting more informative prompts to upping a chatbot's "thinking" level.
Tech journalist Alex Hughes had better luck than we did when he used ChatGPT's agentic AI mode to find a TV in last year's Black Friday sales.
Agentic AI is still in its early days, but it allows AI to act with more autonomy and carry out multi-step tasks.
The search took about 20 minutes "with very little work on my end needed," Hughes wrote for Tom's Guide, external in November 2025.
A year on, he told the BBC he didn't go through with buying a TV at that time.
He did later purchase one of the seven models ChatGPT had surfaced - but he had found it for a lower price in a bricks-and-mortar shop.
Will he be using AI to find Black Friday deals again this year? "Probably not," he said.
He reckoned it saved him time, but "when you're trying to deal with something like live price data... it will be inconsistent and quite often incorrect".
Slim pickings
While we were served up the same brands again and again, in reality there are tonnes of products listed for sale around Black Friday.
Naureen Mohammed, who advises businesses on how to get their products to appear in AI results, told the BBC customers did not see the full picture when they talked to chatbots.
If businesses fail to update their prices when people start hunting for bargains, "last year's prices are served up as today's deals".
"I suspect the whole model for advertising is going to start influencing AI recommendations," she said.
Her own analysis of chatbots' Black Friday tech deals in the UK suggested the big retailers came out on top - with Amazon mentioned in half of responses, and Currys following closely behind.
Her tips include asking an assistant "is that this year's price?" and clicking on the links provided - "because you shouldn't take any advice from the AI system at face value".
But consumer group Which? recently said inaccurate pricing in AI results added more work, external to Black Friday deal-hunting.
"If you ask ChatGPT for a list of 10 laptops under £400 and seven of the results are priced higher, you've likely wasted a good chunk of time going through them to discover the bot gave you only three options," said senior researcher Hannah Walsh.
"The opposite is also true - you could miss out on great models in your budget if ChatGPT tells you they are more expensive than they actually are."
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.`,
    bodyJa: `Can AI really help spot Black Friday deals? We put it to the test
- Published
Whether it's scrolling through endless choice, spotting fake reviews, or working out if a "deal" is a deal at all, Black Friday sums up a lot of online woes.
Retailers promise bargains - but the sheer number of offers can leave us feeling no closer to finding the best deal.
It's an area where generative AI products, such as ChatGPT, Claude and Gemini, have promised to help.
But are they any good at finding Black Friday deals? We had a go ourselves a week ahead of the big day.
Figures suggest relatively few UK shoppers currently go to AI tools for help.
A recent YouGov survey of 19 countries found the UK ranked second-last in the proportion of people who said they had used AI to help them shop.
Crucially, 36% of respondents who said they would be shopping around Black Friday didn't plan to use an AI tool at all.
But the survey suggested a growing number of people were considering it - and tech firms have released features to capitalise on this.
Amazon launched Alexa for Shopping for UK users in November and OpenAI launched a Shopping Research tool on ChatGPT days before last year's Black Friday.
In the US, Google recently launched Universal Cart, with AI-powered features such as price tracking and identification of relevant promo codes.
But there has been criticism that fact-checking AI ends up taking more time, while some brands are working to try to make sure their products show up in chatbot answers.
We asked four models to find a 55-inch TV deal, using the free versions of many of the most popular tools.
While this was not a rigorous scientific test, the experience we had produced mixed results.
ChatGPT - full price and not available to buy
OpenAI's ChatGPT came up with four options.
Its top pick was a Hisense TV on Chinese retailer Joybuy's website, on sale for £499 down from £649.
The next recommendation was a 55-inch TCL-branded TV, but a sidebar showed prices for the 50-inch version, from £379 to £814.
Option three was the same Hisense TV as before, but for full price at £649 from John Lewis and Richer Sounds.
This was the "best safer purchase" according to ChatGPT, as the sites offered longer guarantee periods.
But clicking on the links did not go well. Both retailers said the TV was no longer listed online.
The fourth option was equally fruitless - another TCL TV, at full price, £150 over our budget and not available online.
At the bottom, ChatGPT served one last offer - "one OLED option to compare" - for a £1,100 LG TV that was marked as "Ad".
Claude - honest, but not too helpful
Claude produced the shortest answer of all the models we tested, and unlike the others, it did not give much detail on the specifications of each model.
Instead, it seemed to base its results on a small number of reviews published online.
It recommended the same two TCL TVs as ChatGPT.
But when we clicked on the links, they sent us to two dead pages on the Richer Sounds website.
Some other links led to year-old round-ups of Black Friday 2025 deals.
Claude was not very enthusiastic about its other two recommendations due to a lack of independent reviews - calling one "a decent option" but saying it "wouldn't pick" the other.
It also listed two Samsung TVs, but it told us not to buy them, with one "over budget and not clearly better than the TCLs".
We were left wondering why it even mentioned them in the first place.
Gemini - a familiar pattern
Different AI model, same TV manufacturers - albeit different Hisense and TCL models to the previous chatbots' recommendations.
Gemini generated a table comparing four different models, but offered no links to the stores it named, so we searched for them ourselves.
The prices for one TCL TV were correct at £649, but it was sold out at one of the named retailers.
It said the other TCL model was available from Argos and Currys for £539 - correct for Argos, but when we checked Currys, it was £60 more expensive.
Again, it included two Samsung models to avoid due to lower screen specs.
Alexa - accurate but limited
Alexa came back with four TVs, from its own Amazon Ember at £532 to a £699 Samsung.
But its top recommendation was to go for another Samsung model at £616 (down from £749), based on its picture quality and Amazon customer rating.
Its fourth option was for a Sony TV, but it was only 50 inches, leaving us unsure why it had included it.
All the prices stated were correct, but Amazon only searches its own store. Alexa did acknowledge this, encouraging us to check its rivals for better deals, "as prices can vary" and we could get longer guarantees elsewhere.
Inconsistent pricing
There are methods that can boost the likelihood of getting a better response, from crafting more informative prompts to upping a chatbot's "thinking" level.
Tech journalist Alex Hughes had better luck than we did when he used ChatGPT's agentic AI mode to find a TV in last year's Black Friday sales.
Agentic AI is still in its early days, but it allows AI to act with more autonomy and carry out multi-step tasks.
The search took about 20 minutes "with very little work on my end needed," Hughes wrote for Tom's Guide, external in November 2025.
A year on, he told the BBC he didn't go through with buying a TV at that time.
He did later purchase one of the seven models ChatGPT had surfaced - but he had found it for a lower price in a bricks-and-mortar shop.
Will he be using AI to find Black Friday deals again this year? "Probably not," he said.
He reckoned it saved him time, but "when you're trying to deal with something like live price data... it will be inconsistent and quite often incorrect".
Slim pickings
While we were served up the same brands again and again, in reality there are tonnes of products listed for sale around Black Friday.
Naureen Mohammed, who advises businesses on how to get their products to appear in AI results, told the BBC customers did not see the full picture when they talked to chatbots.
If businesses fail to update their prices when people start hunting for bargains, "last year's prices are served up as today's deals".
"I suspect the whole model for advertising is going to start influencing AI recommendations," she said.
Her own analysis of chatbots' Black Friday tech deals in the UK suggested the big retailers came out on top - with Amazon mentioned in half of responses, and Currys following closely behind.
Her tips include asking an assistant "is that this year's price?" and clicking on the links provided - "because you shouldn't take any advice from the AI system at face value".
But consumer group Which? recently said inaccurate pricing in AI results added more work, external to Black Friday deal-hunting.
"If you ask ChatGPT for a list of 10 laptops under £400 and seven of the results are priced higher, you've likely wasted a good chunk of time going through them to discover the bot gave you only three options," said senior researcher Hannah Walsh.
"The opposite is also true - you could miss out on great models in your budget if ChatGPT tells you they are more expensive than they actually are."
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cw8dv4jmnle2o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-21T00:06:11+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/dcbf/live/85d51550-e435-11f1-8346-933d3547e297.jpg",
    readTime: 10,
  },
  {
    id: "dow-s-p-500-enter-correction-as-nasdaq-s-7a2c029c",
    title: "Dow, S&P 500 enter correction as Nasdaq suffers worst week since 2020",
    titleJa: "Dow, S&P 500 enter correction as Nasdaq suffers worst week since 2020",
    summaryJa: "All 11 S&amp;P 500 sectors finished more than 1% lower this week for the first time since April 2025.",
    bodyOriginal: `All 11 S&amp;P 500 sectors finished more than 1% lower this week for the first time since April 2025.`,
    bodyJa: `All 11 S&amp;P 500 sectors finished more than 1% lower this week for the first time since April 2025.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/dow-s-p-500-enter-correction-as-nasdaq-suffers-worst-week-since-2020-bd74dadf?mod=mw_rss_topstories",
    publishedAt: "2026-11-20T22:46:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-22825043",
    readTime: 2,
  },
  {
    id: "chip-stocks-see-2-3-trillion-weekly-wipe-6f1f5f08",
    title: "Chip stocks see $2.3 trillion weekly wipeout as panic grips the AI trade",
    titleJa: "Chip stocks see $2.3 trillion weekly wipeout as panic grips the AI trade",
    summaryJa: "A major semiconductor index just posted its worst weekly performance in 25 years.",
    bodyOriginal: `A major semiconductor index just posted its worst weekly performance in 25 years.`,
    bodyJa: `A major semiconductor index just posted its worst weekly performance in 25 years.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/chip-stocks-see-2-3-trillion-weekly-wipeout-as-panic-grips-the-ai-trade-371f2f03?mod=mw_rss_topstories",
    publishedAt: "2026-11-20T22:44:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-69966637",
    readTime: 2,
  },
  {
    id: "these-stocks-were-crushed-the-most-this-5097b2a9",
    title: "These stocks were crushed the most this week as the tech wreck accelerated",
    titleJa: "These stocks were crushed the most this week as the tech wreck accelerated",
    summaryJa: "94% of stocks in the S&amp;P 500 declined for the week, 11 of them by at least 20%. But for now, analysts still think you can make a lot of money if you buy them.",
    bodyOriginal: `94% of stocks in the S&amp;P 500 declined for the week, 11 of them by at least 20%. But for now, analysts still think you can make a lot of money if you buy them.`,
    bodyJa: `94% of stocks in the S&amp;P 500 declined for the week, 11 of them by at least 20%. But for now, analysts still think you can make a lot of money if you buy them.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/these-stocks-were-crushed-the-most-this-week-as-the-tech-wreck-accelerated-8d6f7323?mod=mw_rss_topstories",
    publishedAt: "2026-11-20T22:44:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-51562776",
    readTime: 2,
  },
  {
    id: "zscaler-stock-jumps-18-on-report-that-cr-cae786ea",
    title: "Zscaler stock jumps 18% on report that CrowdStrike in talks to buy security vendor",
    titleJa: "Zscaler stock jumps 18% on report that CrowdStrike in talks to buy security vendor",
    summaryJa: "Zscaler shares surged 18% in extended trading on Friday after Bloomberg reported that CrowdStrike is in talks to buy the cybersecurity vendor. Shares of CrowdStrike shares fell more than 8%.The talks between the two companies are ongoing, Bloomberg reported, citing sources familiar in the matter. CrowdStrike declined to comment on the report. Zscaler didn't immediately respond to CNBC's request for comment.",
    bodyOriginal: `Zscaler shares surged 18% in extended trading on Friday after Bloomberg reported that CrowdStrike is in talks to buy the cybersecurity vendor. Shares of CrowdStrike shares fell more than 8%.
The talks between the two companies are ongoing, Bloomberg reported, citing sources familiar in the matter. CrowdStrike declined to comment on the report. Zscaler didn't immediately respond to CNBC's request for comment.
CrowdStrike has been one of the big cybersecurity winners in the artificial intelligence boom, with its stock about doubling in value this year, lifting its market cap to $235 billion. Zscaler, meanwhile, is down 13% this year, pushing its market cap down to about $32 billion.
Along with CrowdStrike, Palo Alto Networks has seen its business boom as businesses race to upgrade their networks in the AI era. Palo Alto closed Friday at a nearly $282 billion market cap.
Should a deal take place, it would be among the largest in the history of the cybersecurity industry. Google acquired Wiz last year for $32 billion. In 2024, Cisco paid about $28 billion for Splunk. Earlier this year, Palo Alto closed its purchase of CyberArk for $25 billion.
CrowdStrike's deals to this point have been on the smaller side.The company announced plans earlier this month to acquire agentic observability platform Fiddler AI and AI trust platform Dreadnode.
This is breaking news. Please refresh for updates.`,
    bodyJa: `Zscaler shares surged 18% in extended trading on Friday after Bloomberg reported that CrowdStrike is in talks to buy the cybersecurity vendor. Shares of CrowdStrike shares fell more than 8%.
The talks between the two companies are ongoing, Bloomberg reported, citing sources familiar in the matter. CrowdStrike declined to comment on the report. Zscaler didn't immediately respond to CNBC's request for comment.
CrowdStrike has been one of the big cybersecurity winners in the artificial intelligence boom, with its stock about doubling in value this year, lifting its market cap to $235 billion. Zscaler, meanwhile, is down 13% this year, pushing its market cap down to about $32 billion.
Along with CrowdStrike, Palo Alto Networks has seen its business boom as businesses race to upgrade their networks in the AI era. Palo Alto closed Friday at a nearly $282 billion market cap.
Should a deal take place, it would be among the largest in the history of the cybersecurity industry. Google acquired Wiz last year for $32 billion. In 2024, Cisco paid about $28 billion for Splunk. Earlier this year, Palo Alto closed its purchase of CyberArk for $25 billion.
CrowdStrike's deals to this point have been on the smaller side.The company announced plans earlier this month to acquire agentic observability platform Fiddler AI and AI trust platform Dreadnode.
This is breaking news. Please refresh for updates.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/20/zscaler-crowdstrike-deal.html",
    publishedAt: "2026-11-20T21:35:24+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "prediction-markets-outlook-for-stocks-in-f557d0b1",
    title: "Prediction markets outlook for stocks in 2026 dims amid AI sell-off",
    titleJa: "Prediction markets outlook for stocks in 2026 dims amid AI sell-off",
    summaryJa: "Odds that the S&amp;P 500 will cross 8,000, which were once north of 70%, are extremely low on platform Kalshi.",
    bodyOriginal: `As stocks continue their tech-driven sell-off, prediction markets traders are seeing a bleaker outlook for the remainder of the year.
On platform Kalshi, speculators place just 6% odds that the S&P 500 will cross 8,000 in 2026. On Oct. 13, those odds were as high as 72%.
Contracts ask traders if the S&P 500 will go above various levels in 2026, and they're resolved using data from S&P Dow Jones Indices.
On Friday, the Nasdaq Composite turned negative for the year as investors continued to dump tech stocks, primarily those with exposure to the artificial intelligence build-out. The Dow Jones Industrial Average and the S&P 500 fell into correction territory, too.
The S&P 500 has slashed its year-to-date gain to just over 2%.
The Stock Trader's Almanac in a Thursday note broadly agreed that the hopes for a December rally are fading, with the caveat that a "Santa rally" could still appear at the end of the year.
"The market is under pressure and more downside can't be ruled out," the note said.
The Stock Trader's Almanac sees 2026 following the year-end pattern of 2018, when the Federal Reserve was in a tightening cycle in a midterm year. The Fed is widely expected to hike rates at its December meeting.
In that scenario, the Stock Trader's Almanac thinks more churn is to come. "The low is more likely in mid- to late December than this week."
Disclosure: CNBC and Kalshi have a commercial relationship that includes customer acquisition and a minority investment.`,
    bodyJa: `As stocks continue their tech-driven sell-off, prediction markets traders are seeing a bleaker outlook for the remainder of the year.
On platform Kalshi, speculators place just 6% odds that the S&P 500 will cross 8,000 in 2026. On Oct. 13, those odds were as high as 72%.
Contracts ask traders if the S&P 500 will go above various levels in 2026, and they're resolved using data from S&P Dow Jones Indices.
On Friday, the Nasdaq Composite turned negative for the year as investors continued to dump tech stocks, primarily those with exposure to the artificial intelligence build-out. The Dow Jones Industrial Average and the S&P 500 fell into correction territory, too.
The S&P 500 has slashed its year-to-date gain to just over 2%.
The Stock Trader's Almanac in a Thursday note broadly agreed that the hopes for a December rally are fading, with the caveat that a "Santa rally" could still appear at the end of the year.
"The market is under pressure and more downside can't be ruled out," the note said.
The Stock Trader's Almanac sees 2026 following the year-end pattern of 2018, when the Federal Reserve was in a tightening cycle in a midterm year. The Fed is widely expected to hike rates at its December meeting.
In that scenario, the Stock Trader's Almanac thinks more churn is to come. "The low is more likely in mid- to late December than this week."
Disclosure: CNBC and Kalshi have a commercial relationship that includes customer acquisition and a minority investment.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/20/sp-500-8000-kalshi-odds-ai-selloff.html",
    publishedAt: "2026-11-20T19:59:03+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 4,
  },
  {
    id: "nvidia-stock-plunges-12-rides-longest-we-c3ef6775",
    title: "Nvidia stock plunges 12%, rides longest weekly losing streak since 2008 financial crisis",
    titleJa: "Nvidia stock plunges 12%, rides longest weekly losing streak since 2008 financial crisis",
    summaryJa: "Once the most valuable company in the world, Nvidia now ranks third behind Apple and Microsoft.",
    bodyOriginal: `The last time Wall Street was this down on Nvidia the chipmaker's flagship product was the GeForce graphics processor for high-end PC video games, and markets were reeling from the global financial crisis.
Nvidia shares fell 12% on Friday, sliding for a seventh straight day as investors grew increasingly concerned about life after co-founder Jensen Huang. The stock is poised to close lower for a seventh consecutive week, the longest such stretch since 2008.
Shares of Nvidia are down 44% over the period, pushing the company's market cap down by $2.5 trillion. The stock is now trading at around 9.3 times forward earnings, while Advanced Micro Devices is valued at 29 times profit for the next 12 months.
On Friday, Reuters reported that the Securities and Exchange Commission is exploring potential accounting issues at Nvidia, pushing the stock down further.
Once the most valuable company, now, at a market cap of $3.1 trillion, Nvidia is fourth behind Apple and Microsoft and Alphabet.
Nvidia is reeling from the removal of Huang, who resigned on Nov. 12, after multiple reported affairs, including one with a Chinese businesswoman who was allegedly a spy.
Harvey Jones, Nvidia's newly appointed board chair, said earlier this week that Huang had resigned after "disclosure of personal behavior inconsistent with the company's code of conduct, standards and cultural norms."
But the chipmaker's losing streak started before Nvidia was thrown into crisis as investors worried over the sustainability of the AI buildout, particularly after the midterm elections, and emerging competition in AI chips from Google and AMD.
Even a better-than-expected earnings report, which included an increase to fiscal 2028 guidance, didn't stem the selling. Interim CEO Colette Kress, the company's longtime CFO, projected revenue growth next fiscal year of 75%, and said that customers aren't going anywhere.
On Tuesday's earnings call with analysts, Kress signed off by saying, "we've got this." In a company meeting the next day, executives told staff that it was moving its yearly review process, which can come with more stock, from March to December.
For investors, one major question is whether Nvidia can continue to innovate and sustain its commanding lead in the AI chip market without its visionary leader. Almost the entire company now is built around the AI trade, a phenomenon that began taking hold just four years ago with the launch of OpenAI's ChatGPT.
Before that, Nvidia's primary business was selling graphics cards used for video games. In mid-2008, the last time the stock was this deep into a weekly losing streak, Nvidia was generating less than $1 billion per quarter. Now it pulls in more than $1 billion per day. At the time, the entire market was in freefall due to the worst financial crisis since the Great Depression.`,
    bodyJa: `The last time Wall Street was this down on Nvidia the chipmaker's flagship product was the GeForce graphics processor for high-end PC video games, and markets were reeling from the global financial crisis.
Nvidia shares fell 12% on Friday, sliding for a seventh straight day as investors grew increasingly concerned about life after co-founder Jensen Huang. The stock is poised to close lower for a seventh consecutive week, the longest such stretch since 2008.
Shares of Nvidia are down 44% over the period, pushing the company's market cap down by $2.5 trillion. The stock is now trading at around 9.3 times forward earnings, while Advanced Micro Devices is valued at 29 times profit for the next 12 months.
On Friday, Reuters reported that the Securities and Exchange Commission is exploring potential accounting issues at Nvidia, pushing the stock down further.
Once the most valuable company, now, at a market cap of $3.1 trillion, Nvidia is fourth behind Apple and Microsoft and Alphabet.
Nvidia is reeling from the removal of Huang, who resigned on Nov. 12, after multiple reported affairs, including one with a Chinese businesswoman who was allegedly a spy.
Harvey Jones, Nvidia's newly appointed board chair, said earlier this week that Huang had resigned after "disclosure of personal behavior inconsistent with the company's code of conduct, standards and cultural norms."
But the chipmaker's losing streak started before Nvidia was thrown into crisis as investors worried over the sustainability of the AI buildout, particularly after the midterm elections, and emerging competition in AI chips from Google and AMD.
Even a better-than-expected earnings report, which included an increase to fiscal 2028 guidance, didn't stem the selling. Interim CEO Colette Kress, the company's longtime CFO, projected revenue growth next fiscal year of 75%, and said that customers aren't going anywhere.
On Tuesday's earnings call with analysts, Kress signed off by saying, "we've got this." In a company meeting the next day, executives told staff that it was moving its yearly review process, which can come with more stock, from March to December.
For investors, one major question is whether Nvidia can continue to innovate and sustain its commanding lead in the AI chip market without its visionary leader. Almost the entire company now is built around the AI trade, a phenomenon that began taking hold just four years ago with the launch of OpenAI's ChatGPT.
Before that, Nvidia's primary business was selling graphics cards used for video games. In mid-2008, the last time the stock was this deep into a weekly losing streak, Nvidia was generating less than $1 billion per quarter. Now it pulls in more than $1 billion per day. At the time, the entire market was in freefall due to the worst financial crisis since the Great Depression.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/20/nvidias-7-week-losing-streak-is-longest-since-2008-financial-crisis.html",
    publishedAt: "2026-11-20T19:54:31+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 7,
  },
  {
    id: "trump-threatens-ban-on-us-firms-building-cc3c28b4",
    title: "Trump threatens ban on US firms building AI data centres overseas",
    titleJa: "Trump threatens ban on US firms building AI data centres overseas",
    summaryJa: "The US president provided little detail on the potential policy, saying others in his team were hearing about it for the first time.",
    bodyOriginal: `Trump threatens ban on US firms building AI data centres overseas
- Published
Donald Trump has said he will ban US companies from building AI data centres overseas, threatening a "tremendous tax" for tech firms who do so.
"We're going to keep it all in this country," the US president said, while providing little detail on the potential policy he said others in his cabinet were hearing about for the first time.
Data centres were a central issue in the midterm elections earlier in November, with many Democratic candidates promising tougher regulation on their construction.
Tech giants including Meta and Google have entered agreements to build data centres overseas. It remains unclear how such a policy would be enforced if it was brought in.
"We're not going to allow our companies to build data centres outside of our country," Trump told reporters in a press briefing following his return from his trip to Asia.
"Because China will take all of them, and we're not allowing that to happen."
But whether that idea will become policy remains unclear.
"I don't know if that's a breaking story, but I haven't even said that to my people. But I'm telling them now, they're here," he said.
Trump floated the policy after saying the US was leading on data centre construction, and he would not allow China to beat the US when it came to AI - which he calls super intelligence, or SI.
Data centres are crucial to the AI boom. The vast warehouse-style buildings house the advanced computer chips and servers that are needed to run AI programmes such as Claude and ChatGPT.
As of April there were about 3,000 data centres across the US, with another 1,500 in various stages of approval and construction, according to the Pew Research Centre.
Many of them are built in rural areas, and concerns about issues including noise pollution and energy consumption helped drive Democratic candidates promising tougher rules on data centre construction to wins on 3 November.
"You ought to take advantage of the the data centres. Make them pay you, make them pay your community, but take advantage don't shut them off," Trump said.
"We have a lot of places that want them badly, and they're great places. They have energy and they have everything. They're tremendous assets."
Canada has made moves to step in to offer itself as an alternative location for these sites, with less local pushback against projects so far.
Large tech firms - often called AI hyperscalers due to the size of their investments in AI - have also been branching out.
In September Google announced a €13bn ($15bn: £11bn) investment in AI infrastructure in Finland, which included funding for three data centres.
Last month, building work for two of those centres was halted due to concerns over the clearance of more than 300 hectares of forest.
Trump called out the build in Finland specifically, saying his administration was "not allowing that to happen".
Google has been contacted for comment.
Related topics
- Published19 hours ago`,
    bodyJa: `Trump threatens ban on US firms building AI data centres overseas
- Published
Donald Trump has said he will ban US companies from building AI data centres overseas, threatening a "tremendous tax" for tech firms who do so.
"We're going to keep it all in this country," the US president said, while providing little detail on the potential policy he said others in his cabinet were hearing about for the first time.
Data centres were a central issue in the midterm elections earlier in November, with many Democratic candidates promising tougher regulation on their construction.
Tech giants including Meta and Google have entered agreements to build data centres overseas. It remains unclear how such a policy would be enforced if it was brought in.
"We're not going to allow our companies to build data centres outside of our country," Trump told reporters in a press briefing following his return from his trip to Asia.
"Because China will take all of them, and we're not allowing that to happen."
But whether that idea will become policy remains unclear.
"I don't know if that's a breaking story, but I haven't even said that to my people. But I'm telling them now, they're here," he said.
Trump floated the policy after saying the US was leading on data centre construction, and he would not allow China to beat the US when it came to AI - which he calls super intelligence, or SI.
Data centres are crucial to the AI boom. The vast warehouse-style buildings house the advanced computer chips and servers that are needed to run AI programmes such as Claude and ChatGPT.
As of April there were about 3,000 data centres across the US, with another 1,500 in various stages of approval and construction, according to the Pew Research Centre.
Many of them are built in rural areas, and concerns about issues including noise pollution and energy consumption helped drive Democratic candidates promising tougher rules on data centre construction to wins on 3 November.
"You ought to take advantage of the the data centres. Make them pay you, make them pay your community, but take advantage don't shut them off," Trump said.
"We have a lot of places that want them badly, and they're great places. They have energy and they have everything. They're tremendous assets."
Canada has made moves to step in to offer itself as an alternative location for these sites, with less local pushback against projects so far.
Large tech firms - often called AI hyperscalers due to the size of their investments in AI - have also been branching out.
In September Google announced a €13bn ($15bn: £11bn) investment in AI infrastructure in Finland, which included funding for three data centres.
Last month, building work for two of those centres was halted due to concerns over the clearance of more than 300 hectares of forest.
Trump called out the build in Finland specifically, saying his administration was "not allowing that to happen".
Google has been contacted for comment.
Related topics
- Published19 hours ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cmde1lw9y54ko?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-20T19:51:52+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/09a4/live/7e18d7e0-e514-11f1-b40b-5f46e8cf687c.jpg",
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
