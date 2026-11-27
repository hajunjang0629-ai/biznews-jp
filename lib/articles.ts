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
    id: "these-stocks-soared-the-most-during-a-wi-603de0ec",
    title: "These stocks soared the most during a wild week highlighted by Huang’s return to Nvidia",
    titleJa: "These stocks soared the most during a wild week highlighted by Huang’s return to Nvidia",
    summaryJa: "Nvidia’s stock soared this week, but was still down nearly 28% for November and 21% for 2026.",
    bodyOriginal: `Nvidia’s stock soared this week, but was still down nearly 28% for November and 21% for 2026.`,
    bodyJa: `Nvidia’s stock soared this week, but was still down nearly 28% for November and 21% for 2026.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/these-stocks-soared-the-most-during-a-wild-week-highlighted-by-huangs-return-to-nvidia-578b3f9a?mod=mw_rss_topstories",
    publishedAt: "2026-11-27T20:16:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-70107432",
    readTime: 2,
  },
  {
    id: "the-warnings-behind-this-week-s-stock-ma-e74bd764",
    title: "The warnings behind this week’s stock-market rally",
    titleJa: "The warnings behind this week’s stock-market rally",
    summaryJa: "Also in Weekend Reads: Important tips for Medicare enrollment, how to spot online shopping scams and marital advice from The Moneyist.",
    bodyOriginal: `Also in Weekend Reads: Important tips for Medicare enrollment, how to spot online shopping scams and marital advice from The Moneyist.`,
    bodyJa: `Also in Weekend Reads: Important tips for Medicare enrollment, how to spot online shopping scams and marital advice from The Moneyist.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/the-warnings-behind-this-weeks-stock-market-rally-86e5319c?mod=mw_rss_topstories",
    publishedAt: "2026-11-27T18:40:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-85185426",
    readTime: 2,
  },
  {
    id: "budget-airline-norse-atlantic-files-for-db363f7c",
    title: "Budget airline Norse Atlantic files for bankruptcy in Europe after failing to secure funding",
    titleJa: "Budget airline Norse Atlantic files for bankruptcy in Europe after failing to secure funding",
    summaryJa: "Budget carrier Norse Atlantic filed for bankruptcy Friday, saying it failed to secure funding after soaring fuel costs strained the company's operations.",
    bodyOriginal: `Budget carrier Norse Atlantic filed for bankruptcy Friday, saying it failed to secure funding after soaring fuel costs strained the company's operations throughout the year.
Its parent company, Norse Atlantic ASA, concluded that the Norwegian carrier no longer has a basis to continue operations.
"Despite extensive efforts, the Company has so far not been able to secure sufficient funding to meet its short-term liquidity needs," the firm said in a statement Friday.
It comes days after Norse said it's facing a "critical financial situation" and was considering its options from a strategic takeover to ACMI contracts, which refer to short-term capacity leasing. The company's shares closed 85% lower on Wednesday.
The board has now filed a bankruptcy petition with the Agder District Court, where a trustee will be appointed to manage the process further.
"The Board of Norse Atlantic Airways AS has made the difficult decision to file for bankruptcy despite extensive efforts from the Company and the Group to find a solution," Norse Atlantic CEO Eivind Roald said.
"We are deeply sorry for the impact this has on our passengers, employees and partners. The Board, management and advisers of the listed entity Norse Atlantic ASA and the UK subsidiary are working to find a solution for the remaining part of the business to continue operations," Roald added.
The company has canceled all flights, and ticket sales have been discontinued.
Norse was founded in March 2021 and offered cheap flights between Europe, North America, Africa and Asia.
Soaring fuel costs strain airlines
The Iran war began on Feb. 28 and caused jet fuel prices to skyrocket, forcing airlines around the world to grapple with higher costs. Prices are now up nearly 72% to $155 per barrel year-on-year as of the week ending Nov. 20, according to the International Air Transport Association's Jet Fuel Price Monitor.
Norse Atlantic's Roald told CNBC in May that he wasn't "overly concerned" about access to fuel but flagged that the company had canceled over 700 flights, which impacted more than 240,000 passengers.
Ryanair's CEO Michael O'Leary warned in April that if jet fuel prices continued to stay elevated throughout the year, then other European airlines were likely to face "financial difficulties" during the winter season.
In fact, several European airlines have stopped operating this winter, including Slovakia's AirExplore, Spain's AlbaStar, Ireland's Fly4 and Spain's Plus Ultra, which has canceled all flights but hasn't permanently closed.`,
    bodyJa: `Budget carrier Norse Atlantic filed for bankruptcy Friday, saying it failed to secure funding after soaring fuel costs strained the company's operations throughout the year.
Its parent company, Norse Atlantic ASA, concluded that the Norwegian carrier no longer has a basis to continue operations.
"Despite extensive efforts, the Company has so far not been able to secure sufficient funding to meet its short-term liquidity needs," the firm said in a statement Friday.
It comes days after Norse said it's facing a "critical financial situation" and was considering its options from a strategic takeover to ACMI contracts, which refer to short-term capacity leasing. The company's shares closed 85% lower on Wednesday.
The board has now filed a bankruptcy petition with the Agder District Court, where a trustee will be appointed to manage the process further.
"The Board of Norse Atlantic Airways AS has made the difficult decision to file for bankruptcy despite extensive efforts from the Company and the Group to find a solution," Norse Atlantic CEO Eivind Roald said.
"We are deeply sorry for the impact this has on our passengers, employees and partners. The Board, management and advisers of the listed entity Norse Atlantic ASA and the UK subsidiary are working to find a solution for the remaining part of the business to continue operations," Roald added.
The company has canceled all flights, and ticket sales have been discontinued.
Norse was founded in March 2021 and offered cheap flights between Europe, North America, Africa and Asia.
Soaring fuel costs strain airlines
The Iran war began on Feb. 28 and caused jet fuel prices to skyrocket, forcing airlines around the world to grapple with higher costs. Prices are now up nearly 72% to $155 per barrel year-on-year as of the week ending Nov. 20, according to the International Air Transport Association's Jet Fuel Price Monitor.
Norse Atlantic's Roald told CNBC in May that he wasn't "overly concerned" about access to fuel but flagged that the company had canceled over 700 flights, which impacted more than 240,000 passengers.
Ryanair's CEO Michael O'Leary warned in April that if jet fuel prices continued to stay elevated throughout the year, then other European airlines were likely to face "financial difficulties" during the winter season.
In fact, several European airlines have stopped operating this winter, including Slovakia's AirExplore, Spain's AlbaStar, Ireland's Fly4 and Spain's Plus Ultra, which has canceled all flights but hasn't permanently closed.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/27/norse-atlantic-bankruptcy-fuel-costs.html",
    publishedAt: "2026-11-27T18:20:32+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 6,
  },
  {
    id: "clearing-out-my-parents-house-was-a-lega-68fd21a2",
    title: "Clearing out my parents’ house was a legal nightmare. How can I downsize without putting my kids through the same ordeal?",
    titleJa: "Clearing out my parents’ house was a legal nightmare. How can I downsize without putting my kids through the same ordeal?",
    summaryJa: "Some countercultural advice this Black Friday: stop buying stuff, plus other rules for downsizing.",
    bodyOriginal: `Some countercultural advice this Black Friday: stop buying stuff, plus other rules for downsizing.`,
    bodyJa: `Some countercultural advice this Black Friday: stop buying stuff, plus other rules for downsizing.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/clearing-out-my-parents-house-was-a-legal-nightmare-how-can-i-downsize-without-putting-my-children-through-the-same-ordeal-6537d804?mod=mw_rss_topstories",
    publishedAt: "2026-11-27T17:31:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-71398430",
    readTime: 2,
  },
  {
    id: "ai-shopping-agents-are-having-a-moment-b-b37a4fb6",
    title: "AI shopping agents are having a moment, but Amazon and a growing number of sites threaten to stunt their growth",
    titleJa: "AI shopping agents are having a moment, but Amazon and a growing number of sites threaten to stunt their growth",
    summaryJa: "AI shopping agents from OpenAI, Meta, Google and Instinct promise to help users shop, but they're hitting roadblocks at Amazon and other retailers.",
    bodyOriginal: `Maia Bittner urgently needed to replace her car's windshield wipers. So last month, she turned to Meta's Muse personal artificial intelligence agent.
Bittner, chief product officer at fintech startup Imprint, gave Muse the greenlight to buy some wipers on her behalf from AutoZone. Or so she thought.
About 17 hours later, she got a notification from her Muse agent, saying AutoZone canceled her order due to an unspecified error.
"Honestly, the most reliable path now is you ordering on Amazon yourself," Muse said, according to a screenshot of the message.
The interaction encapsulates the current messy and complicated landscape of agentic shopping apps, the AI tools that can make purchases on behalf of users. Over the past year, tech companies such as OpenAI, Meta, Google and Instinct have introduced versions of personal agents that promise to take the hassle out of browsing and buying online.
The rollout has been far from smooth.
While some major retailers, such as Walmart and Sephora, have opened up their sites to agents, companies including Amazon, eBay, United Airlines and Kohl's limit what actions agents can take or block them outright. Others have added provisions to their terms of service spelling out that they're not liable if users' AI-driven purchases go wrong.
"It's a very mixed bag," Emily Pfeiffer, a principal analyst at Forrester, said in an interview. "It means that a consumer who's using an agent to shop and browse and learn is not going to see the full set of options because some websites are unavailable."
The hiccups threaten to stunt the growth of shopping agents by creating a clunky and frustrating experience for users who are just starting to experiment with the tools. The question of who takes the blame when a transaction goes wrong also remains unclear.
Despite those challenges, analysts remain bullish about agentic commerce's potential. U.S. revenue from agentic commerce could reach up to $1 trillion by 2030, analysts at McKinsey and ICSC forecast in April.
Retailers and tech companies are also positioning agents as a helping hand for holiday shopping. Walmart on Tuesday touted its partnership with Meta, saying consumers could "put an AI agent to work" to nab Black Friday deals.
Earlier this month, Shopify President Harley Finkelstein predicted this year would be the "first holiday season" where AI-driven shopping goes mainstream.
"I think last year we saw AI influence more in discovery," Finkelstein told CNBC's "Squawk on the Street." "I think now we're going to see more of that conversion."
Patchwork of permissions
For users hoping to turn their online shopping over to AI agents, the experience can be unpredictable.
Agents encounter a patchwork of permissions across various websites. Retailers such as Coach and Gap allow AI bots to browse but not check out, while others such as Target sometimes "block shopping agents by accident," according to an audit conducted in August by agent security company Billions Network.
Amazon has responded the most aggressively to agents by walling off its site entirely. The company rankled Elon Musk last month after it prevented his Grok Bot from placing orders.
In September, the company also blocked Meta's Muse from shopping on its platform, saying it never agreed to participate in the program. And last November, Amazon sued Perplexity, accusing the startup of concealing its Comet agent, which can purchase products on behalf of users.
Amazon CEO Andy Jassy has said the company expects "over time, to partner with third-party agents," but that any partnerships will require the right "value exchange" between agents and retailers.
Bots encounter issues even when retailers welcome them in. They often fumble through webpages and get stumped by login requirements at checkout. In some cases, the agents may require human intervention to bypass a Captcha test and continue browsing.
A Visa study published earlier this month instructed 22 models from 12 AI labs to carry out a range of shopping tasks, such as buying a TV, a laptop and a hair appliance. The agents failed about 43% of test runs, and in more than half of those failed runs, an agent purchased a product "that did not meet the customer's identified requirements," according to the study.
Bittner said she is a "big believer" in AI agents' potential. Earlier this year, she said, she was delighted when Perplexity's shopping agent found and purchased a pair of Adidas sneakers that were sold out for months.
Other experiences have been clumsier. Last week, she said, she asked Meta's Muse to help her find a Jellycat octopus plushie for her kids. It suggested a product marked 75% off from "Crazy Hobby Supply," a retailer she'd never heard of and that didn't appear to have any reviews, she said.
"I sort of trust Google to only surface sites that are not scams to me in their sponsored ads," Bittner said. "In the same way, I want AI to only surface to me websites that are not scams. I don't think we're there yet."
Users have reported mishaps with other AI tools, including one case where Instinct's text-based agent booked a hotel and signed up for a loyalty program without the consumer's consent.
Many retailers are approaching agents cautiously because they're concerned about fraudulent bot activity. San Francisco-based Skyfire is trying to solve that problem by arming retailers with more data to identify which bots are visiting their site and to verify that a human has actually consented to let an agent buy a product on their behalf.
Typically, when a human visits a website, there are "all kinds of signals" to prove it's not a fraudulent user, Skyfire CEO Amir Sarhangi said in an interview.
None of those things are available to retailers when an agent accesses their site, Sarhangi said. Agents might appear even more suspicious because they mask their IP address or origin via data centers, and they often use one-time, virtual cards to check out.
"So we talked to a lot of merchants and banks and financial institutions, and the things they told us were: We want to know who the end user is, and we want to know it's a real human," Sarhangi said. "We want to know who these agents are, because we're not going to just let willy-nilly anybody do these types of transactions, and we need a way to kind of verify that."
AI companies, retailers, financial institutions and other industries have announced an alphabet soup of "protocols," rules that propose ways to make it easier for agents to transact on websites.
There's yet to be a broad consensus around who takes responsibility when an agent purchase goes sideways. American Express in April said it would protect eligible customers "from charges related to AI agent error." Stripe, whose Link digital wallet is integrated with Muse, protects some agent purchases and offers a "refund guarantee."
Others are more wary. Last month, JPMorgan Chase blocked external agents from operating on behalf of customers, citing security concerns. Best Buy is among several retailers that deem users responsible for agent purchases in their terms of service. Best Buy says it views those transactions "as if you performed them yourself."
"Best Buy is not responsible for conduct, errors, actions, or inaction by any Digital Agent," the company's terms say.
Sarhangi said he can see why retailers, especially Amazon, are shutting their doors to external agents when the user experience remains inconsistent.
"At the scale [Amazon] operates in, I would think they need it to be much more aligned with their existing processes, so that they're not going to have a bunch of unhappy users saying, 'What's going on here?'" he said.
Can't ignore them forever
For now, agents remain a niche tool for shopping, with agentic purchases making up just 0.4% of global e-commerce transactions and 0.2% of value, according to Bain & Co. research published earlier this month.
Uber disclosed last month that AI agents booked only 504 rides and Uber Eats orders during its busiest week in October. Airbnb also said it has seen little volume from agents, while DoorDash said it has recorded only "several hundred" agent orders so far.
But retailers may not be able to ignore them forever. Roughly a quarter of Muse's 10 million users are shopping online via an AI agent with an average spend of $200 per order, Meta CEO Mark Zuckerberg said in October.
Instinct CEO Noah Shinn told CNBC earlier this month that the average transaction value among its users exceeds $500 per person.
Asked about some companies' efforts to block agents, Shinn said he tries to "give them some slack."
"It's a new interface, it's a new mode of where users' attention is coming from, and it might just disrupt existing large services of theirs," Shinn said at a CNBC CEO Council dinner in San Francisco. "They just need time, and we've just done a lot of thinking on our side."
"We can obviously move very fast and certain businesses cannot," he said. "So, how can we collaborate with them?"`,
    bodyJa: `Maia Bittner urgently needed to replace her car's windshield wipers. So last month, she turned to Meta's Muse personal artificial intelligence agent.
Bittner, chief product officer at fintech startup Imprint, gave Muse the greenlight to buy some wipers on her behalf from AutoZone. Or so she thought.
About 17 hours later, she got a notification from her Muse agent, saying AutoZone canceled her order due to an unspecified error.
"Honestly, the most reliable path now is you ordering on Amazon yourself," Muse said, according to a screenshot of the message.
The interaction encapsulates the current messy and complicated landscape of agentic shopping apps, the AI tools that can make purchases on behalf of users. Over the past year, tech companies such as OpenAI, Meta, Google and Instinct have introduced versions of personal agents that promise to take the hassle out of browsing and buying online.
The rollout has been far from smooth.
While some major retailers, such as Walmart and Sephora, have opened up their sites to agents, companies including Amazon, eBay, United Airlines and Kohl's limit what actions agents can take or block them outright. Others have added provisions to their terms of service spelling out that they're not liable if users' AI-driven purchases go wrong.
"It's a very mixed bag," Emily Pfeiffer, a principal analyst at Forrester, said in an interview. "It means that a consumer who's using an agent to shop and browse and learn is not going to see the full set of options because some websites are unavailable."
The hiccups threaten to stunt the growth of shopping agents by creating a clunky and frustrating experience for users who are just starting to experiment with the tools. The question of who takes the blame when a transaction goes wrong also remains unclear.
Despite those challenges, analysts remain bullish about agentic commerce's potential. U.S. revenue from agentic commerce could reach up to $1 trillion by 2030, analysts at McKinsey and ICSC forecast in April.
Retailers and tech companies are also positioning agents as a helping hand for holiday shopping. Walmart on Tuesday touted its partnership with Meta, saying consumers could "put an AI agent to work" to nab Black Friday deals.
Earlier this month, Shopify President Harley Finkelstein predicted this year would be the "first holiday season" where AI-driven shopping goes mainstream.
"I think last year we saw AI influence more in discovery," Finkelstein told CNBC's "Squawk on the Street." "I think now we're going to see more of that conversion."
Patchwork of permissions
For users hoping to turn their online shopping over to AI agents, the experience can be unpredictable.
Agents encounter a patchwork of permissions across various websites. Retailers such as Coach and Gap allow AI bots to browse but not check out, while others such as Target sometimes "block shopping agents by accident," according to an audit conducted in August by agent security company Billions Network.
Amazon has responded the most aggressively to agents by walling off its site entirely. The company rankled Elon Musk last month after it prevented his Grok Bot from placing orders.
In September, the company also blocked Meta's Muse from shopping on its platform, saying it never agreed to participate in the program. And last November, Amazon sued Perplexity, accusing the startup of concealing its Comet agent, which can purchase products on behalf of users.
Amazon CEO Andy Jassy has said the company expects "over time, to partner with third-party agents," but that any partnerships will require the right "value exchange" between agents and retailers.
Bots encounter issues even when retailers welcome them in. They often fumble through webpages and get stumped by login requirements at checkout. In some cases, the agents may require human intervention to bypass a Captcha test and continue browsing.
A Visa study published earlier this month instructed 22 models from 12 AI labs to carry out a range of shopping tasks, such as buying a TV, a laptop and a hair appliance. The agents failed about 43% of test runs, and in more than half of those failed runs, an agent purchased a product "that did not meet the customer's identified requirements," according to the study.
Bittner said she is a "big believer" in AI agents' potential. Earlier this year, she said, she was delighted when Perplexity's shopping agent found and purchased a pair of Adidas sneakers that were sold out for months.
Other experiences have been clumsier. Last week, she said, she asked Meta's Muse to help her find a Jellycat octopus plushie for her kids. It suggested a product marked 75% off from "Crazy Hobby Supply," a retailer she'd never heard of and that didn't appear to have any reviews, she said.
"I sort of trust Google to only surface sites that are not scams to me in their sponsored ads," Bittner said. "In the same way, I want AI to only surface to me websites that are not scams. I don't think we're there yet."
Users have reported mishaps with other AI tools, including one case where Instinct's text-based agent booked a hotel and signed up for a loyalty program without the consumer's consent.
Many retailers are approaching agents cautiously because they're concerned about fraudulent bot activity. San Francisco-based Skyfire is trying to solve that problem by arming retailers with more data to identify which bots are visiting their site and to verify that a human has actually consented to let an agent buy a product on their behalf.
Typically, when a human visits a website, there are "all kinds of signals" to prove it's not a fraudulent user, Skyfire CEO Amir Sarhangi said in an interview.
None of those things are available to retailers when an agent accesses their site, Sarhangi said. Agents might appear even more suspicious because they mask their IP address or origin via data centers, and they often use one-time, virtual cards to check out.
"So we talked to a lot of merchants and banks and financial institutions, and the things they told us were: We want to know who the end user is, and we want to know it's a real human," Sarhangi said. "We want to know who these agents are, because we're not going to just let willy-nilly anybody do these types of transactions, and we need a way to kind of verify that."
AI companies, retailers, financial institutions and other industries have announced an alphabet soup of "protocols," rules that propose ways to make it easier for agents to transact on websites.
There's yet to be a broad consensus around who takes responsibility when an agent purchase goes sideways. American Express in April said it would protect eligible customers "from charges related to AI agent error." Stripe, whose Link digital wallet is integrated with Muse, protects some agent purchases and offers a "refund guarantee."
Others are more wary. Last month, JPMorgan Chase blocked external agents from operating on behalf of customers, citing security concerns. Best Buy is among several retailers that deem users responsible for agent purchases in their terms of service. Best Buy says it views those transactions "as if you performed them yourself."
"Best Buy is not responsible for conduct, errors, actions, or inaction by any Digital Agent," the company's terms say.
Sarhangi said he can see why retailers, especially Amazon, are shutting their doors to external agents when the user experience remains inconsistent.
"At the scale [Amazon] operates in, I would think they need it to be much more aligned with their existing processes, so that they're not going to have a bunch of unhappy users saying, 'What's going on here?'" he said.
Can't ignore them forever
For now, agents remain a niche tool for shopping, with agentic purchases making up just 0.4% of global e-commerce transactions and 0.2% of value, according to Bain & Co. research published earlier this month.
Uber disclosed last month that AI agents booked only 504 rides and Uber Eats orders during its busiest week in October. Airbnb also said it has seen little volume from agents, while DoorDash said it has recorded only "several hundred" agent orders so far.
But retailers may not be able to ignore them forever. Roughly a quarter of Muse's 10 million users are shopping online via an AI agent with an average spend of $200 per order, Meta CEO Mark Zuckerberg said in October.
Instinct CEO Noah Shinn told CNBC earlier this month that the average transaction value among its users exceeds $500 per person.
Asked about some companies' efforts to block agents, Shinn said he tries to "give them some slack."
"It's a new interface, it's a new mode of where users' attention is coming from, and it might just disrupt existing large services of theirs," Shinn said at a CNBC CEO Council dinner in San Francisco. "They just need time, and we've just done a lot of thinking on our side."
"We can obviously move very fast and certain businesses cannot," he said. "So, how can we collaborate with them?"`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/27/ai-shopping-agents-retailer-blocks.html",
    publishedAt: "2026-11-27T16:43:14+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "the-s-p-500-is-in-a-correction-bear-mark-4585632d",
    title: "The S&P 500 is in a correction. Bear markets and recessions don't always follow",
    titleJa: "The S&P 500 is in a correction. Bear markets and recessions don't always follow",
    summaryJa: "The November sell-off has so far pushed the S&amp;P 500 into a correction. History shows that a correction doesn't always lead to a bear market, or a recession.",
    bodyOriginal: `The S&P 500 fell into a correction on Nov. 20 for the first time since April 2025 as stocks pulled back sharply from October's record highs.
The market correction, defined as a 10% decline from a recent high, came as investor concern mounted over a potential slowdown in AI spending, mega-cap tech valuations and the path of Federal Reserve interest rate policy. The S&P 500 fell 3.7% on Nov. 20 alone, closing at 6,910.39, its seventh consecutive daily decline. That left the index 11.6% below the Oct. 6 closing high of 7,818.93.
A correction can deepen into a bear market, defined as a drop of 20% or more from the most recent top. But history shows that even a bear market, let alone a correction, doesn't automatically mean the economy is destined for a recession.
In a CNBC analysis, eight of the 13 S&P 500 bear markets overlapped with recessions, as defined by the National Bureau of Economic Research, and five did not. The NBER says a recession is "a significant decline in economic activity that is spread across the economy and lasts more than a few months."
The 1973-74 oil shock, the dot-com bust in 2000, the 2007-09 financial crisis and the 2020 pandemic downturn all overlapped with recessions. But some major bear markets also occurred without one, including in 1987 and 2022.
What Wall Street says
Deutsche Bank macro strategist Henry Allen said that every S&P 500 bear market since the 1962 "Kennedy Slide" has coincided with at least one of three factors: a recession, worsening economic data raising recession fears, or a cycle of Federal Reserve rate hikes. None of those are present today, at least so far.
"Much as last week's selloff was severe, it's worth remembering that it has several differences with many of the other big risk-off moves in recent times," the London-based strategist wrote on Tuesday.
Allen said there hasn't been any sudden reassessment of the growth outlook recently, which happened during the Covid-19 shock, when the pandemic pushed the global economy into recession and the S&P 500 plunged 33.9% in just 33 days. Nor is the current situation similar to the 2025 "Liberation Day" tariff period either, which also prompted a reassessment of the growth outlook.
Economic numbers aren't deteriorating either, with the November U.S. flash composite Purchasing Managers' Index, or PMI, at 54.6, above 50 and indicating that business activity continued to expand. Another factor that often coincides with a recession, Allen said, was a big hawkish shift from the central banks, seen in the 1966 and 2022 bear markets.
"Today however, the equity declines have not coincided with a hawkish repricing," despite widespread expectations that the central bank is set to raise rates again at its final meeting of the year, on Dec. 9, Allen said.
Today, markets are pricing fewer Fed rate hikes through September 2027 than they were on Oct. 6, when the S&P 500 set its record, Allen said. "If anything, pricing has shifted slightly dovishly with the equity declines."
Over more than six decades since 1962, bear markets have always coincided with at least one of those three circumstances, according to Allen.
"So it would be unusual to see one today without those" happening too, he said.`,
    bodyJa: `The S&P 500 fell into a correction on Nov. 20 for the first time since April 2025 as stocks pulled back sharply from October's record highs.
The market correction, defined as a 10% decline from a recent high, came as investor concern mounted over a potential slowdown in AI spending, mega-cap tech valuations and the path of Federal Reserve interest rate policy. The S&P 500 fell 3.7% on Nov. 20 alone, closing at 6,910.39, its seventh consecutive daily decline. That left the index 11.6% below the Oct. 6 closing high of 7,818.93.
A correction can deepen into a bear market, defined as a drop of 20% or more from the most recent top. But history shows that even a bear market, let alone a correction, doesn't automatically mean the economy is destined for a recession.
In a CNBC analysis, eight of the 13 S&P 500 bear markets overlapped with recessions, as defined by the National Bureau of Economic Research, and five did not. The NBER says a recession is "a significant decline in economic activity that is spread across the economy and lasts more than a few months."
The 1973-74 oil shock, the dot-com bust in 2000, the 2007-09 financial crisis and the 2020 pandemic downturn all overlapped with recessions. But some major bear markets also occurred without one, including in 1987 and 2022.
What Wall Street says
Deutsche Bank macro strategist Henry Allen said that every S&P 500 bear market since the 1962 "Kennedy Slide" has coincided with at least one of three factors: a recession, worsening economic data raising recession fears, or a cycle of Federal Reserve rate hikes. None of those are present today, at least so far.
"Much as last week's selloff was severe, it's worth remembering that it has several differences with many of the other big risk-off moves in recent times," the London-based strategist wrote on Tuesday.
Allen said there hasn't been any sudden reassessment of the growth outlook recently, which happened during the Covid-19 shock, when the pandemic pushed the global economy into recession and the S&P 500 plunged 33.9% in just 33 days. Nor is the current situation similar to the 2025 "Liberation Day" tariff period either, which also prompted a reassessment of the growth outlook.
Economic numbers aren't deteriorating either, with the November U.S. flash composite Purchasing Managers' Index, or PMI, at 54.6, above 50 and indicating that business activity continued to expand. Another factor that often coincides with a recession, Allen said, was a big hawkish shift from the central banks, seen in the 1966 and 2022 bear markets.
"Today however, the equity declines have not coincided with a hawkish repricing," despite widespread expectations that the central bank is set to raise rates again at its final meeting of the year, on Dec. 9, Allen said.
Today, markets are pricing fewer Fed rate hikes through September 2027 than they were on Oct. 6, when the S&P 500 set its record, Allen said. "If anything, pricing has shifted slightly dovishly with the equity declines."
Over more than six decades since 1962, bear markets have always coincided with at least one of those three circumstances, according to Allen.
"So it would be unusual to see one today without those" happening too, he said.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/27/the-sp-500-is-in-a-correction-bear-markets-and-recessions-dont-always-follow.html",
    publishedAt: "2026-11-27T13:21:56+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 8,
  },
  {
    id: "my-self-care-ritual-is-a-meal-at-a-fancy-85331d41",
    title: "My self-care ritual is a meal at a fancy restaurant - on my own",
    titleJa: "My self-care ritual is a meal at a fancy restaurant - on my own",
    summaryJa: "Solo-dining is being embraced as a self-care trend and it's reshaping the restaurant industry.",
    bodyOriginal: `My self-care ritual is a meal at a fancy restaurant - on my own
- Published
Catherine Smith is perusing the menu at a high-end Mediterranean restaurant she has been excited to try. She has a new outfit on, and as she sips her rosé, she looks across at the empty seat opposite - bliss.
"I think what is so special about solo dining is that you don't have to wait for people to make those plans. You can go out and do them yourself," says the 23-year-old.
The self-confessed foodie is part of a growing trend of people booking tables for one - not because they're away with work but as a treat.
As food trends analyst Charles Banks puts it: "[Eating alone] is becoming an intentional act, a little pocket of independence, indulgence and self-care."
We spoke to solo dining fans and hospitality industry experts about how the trend is shaping the restaurant experience and asked if you would book a table for one.
Catherine, from Yorkshire, began dining solo at university and now does it at least once a month, choosing high-end restaurants she would not usually go to with friends and family.
She has been to a range of places both in the UK and abroad, doing "lots of research" to find new spots, typically spending £100 to £200 per meal.
"I think because a lot of my friends are vegan or vegetarian, I find that difficult sometimes because I'm quite a big meat eater," she says.
"I find it nice to be able to go out and pick a restaurant where I haven't had to scour through the menu to make sure that it's suitable for them."
Catherine says the sense of freedom she gets from picking where and when she eats "feels empowering".
"It definitely feels like not only a form of self-care but also a form of female liberation."
Online booking platform OpenTable says it covers more than 5,000 restaurants in the UK. It says solo dining makes up the smallest proportion of its bookings in the UK but it is the fastest-growing category.
Figures from 1 January to 31 August this year saw a rise of 23% in solo bookings compared to the same time period a year ago. It did not provide the data to the BBC to verify.
Nishi Singh was an avid solo diner when she lived in London, but found it wasn't widely accepted after moving to Delhi.
"Someone approached me and said that they assumed I'd been stood up," she tells BBC World Service's The Food Chain podcast.
"It sparked a conversation about the culture around solo dining in Delhi and I was really shocked to hear that it's not really something people do."
A couple of days later, she started documenting her solo dining experience on social media.
"Quite a lot of people have reached out and said that this is something they'd like to do and they're too scared to do it themselves," she says.
The Food Chain
Ruth Alexander hears from solo diners - some who find peace and joy in a table for one, and others who would much rather not be alone
Banks, joint managing director of The Food People, a food trends and ideas agency, says that while solo dining isn't a "new consumer behaviour", changes in society mean it has become "almost aspirational".
But he notes that not every restaurant has welcomed the trend.
"A single diner could therefore feel like an inefficient use of a table rather than a customer the restaurant actively wanted."
SoloTable, a website that helps identify restaurants suitable for solo diners, found that one in eight of 178 restaurants it surveyed in London did not accept online reservations from solo diners.
Catherine says she has previously been turned away. "There are a lot of restaurants that I've wanted to go to before where they don't actually allow solo diners. And I've always found that to be really disappointing."
However, some restaurants like Jungli, an Indian restaurant in Newcastle upon Tyne, is working to attract solo diners.
Co-founder and director Yousaf Khalid has included high tables and bar seats in his recently opened restaurant. They also have charging points for laptops and phones.
"We want people to feel comfortable in these sorts of environments, being able to walk in on their own," he says.
He has hired staff with "bigger personalities" to engage customers in conversation but they also know when to leave diners alone if they want a more solitary experience.
Catherine urges anyone who fancies solo dining to give it a go.
"Food is a great way to bring people together, but it's also a great way to have good experiences on your own.
"I think with time, people will see and will start to accept it as something that's more normal."
Additional reporting by Jemma Crew and Emma Jackson.
Get in touch
Do you treat yourself to meals out on your own?
Related topics
More like this
- Published15 November`,
    bodyJa: `My self-care ritual is a meal at a fancy restaurant - on my own
- Published
Catherine Smith is perusing the menu at a high-end Mediterranean restaurant she has been excited to try. She has a new outfit on, and as she sips her rosé, she looks across at the empty seat opposite - bliss.
"I think what is so special about solo dining is that you don't have to wait for people to make those plans. You can go out and do them yourself," says the 23-year-old.
The self-confessed foodie is part of a growing trend of people booking tables for one - not because they're away with work but as a treat.
As food trends analyst Charles Banks puts it: "[Eating alone] is becoming an intentional act, a little pocket of independence, indulgence and self-care."
We spoke to solo dining fans and hospitality industry experts about how the trend is shaping the restaurant experience and asked if you would book a table for one.
Catherine, from Yorkshire, began dining solo at university and now does it at least once a month, choosing high-end restaurants she would not usually go to with friends and family.
She has been to a range of places both in the UK and abroad, doing "lots of research" to find new spots, typically spending £100 to £200 per meal.
"I think because a lot of my friends are vegan or vegetarian, I find that difficult sometimes because I'm quite a big meat eater," she says.
"I find it nice to be able to go out and pick a restaurant where I haven't had to scour through the menu to make sure that it's suitable for them."
Catherine says the sense of freedom she gets from picking where and when she eats "feels empowering".
"It definitely feels like not only a form of self-care but also a form of female liberation."
Online booking platform OpenTable says it covers more than 5,000 restaurants in the UK. It says solo dining makes up the smallest proportion of its bookings in the UK but it is the fastest-growing category.
Figures from 1 January to 31 August this year saw a rise of 23% in solo bookings compared to the same time period a year ago. It did not provide the data to the BBC to verify.
Nishi Singh was an avid solo diner when she lived in London, but found it wasn't widely accepted after moving to Delhi.
"Someone approached me and said that they assumed I'd been stood up," she tells BBC World Service's The Food Chain podcast.
"It sparked a conversation about the culture around solo dining in Delhi and I was really shocked to hear that it's not really something people do."
A couple of days later, she started documenting her solo dining experience on social media.
"Quite a lot of people have reached out and said that this is something they'd like to do and they're too scared to do it themselves," she says.
The Food Chain
Ruth Alexander hears from solo diners - some who find peace and joy in a table for one, and others who would much rather not be alone
Banks, joint managing director of The Food People, a food trends and ideas agency, says that while solo dining isn't a "new consumer behaviour", changes in society mean it has become "almost aspirational".
But he notes that not every restaurant has welcomed the trend.
"A single diner could therefore feel like an inefficient use of a table rather than a customer the restaurant actively wanted."
SoloTable, a website that helps identify restaurants suitable for solo diners, found that one in eight of 178 restaurants it surveyed in London did not accept online reservations from solo diners.
Catherine says she has previously been turned away. "There are a lot of restaurants that I've wanted to go to before where they don't actually allow solo diners. And I've always found that to be really disappointing."
However, some restaurants like Jungli, an Indian restaurant in Newcastle upon Tyne, is working to attract solo diners.
Co-founder and director Yousaf Khalid has included high tables and bar seats in his recently opened restaurant. They also have charging points for laptops and phones.
"We want people to feel comfortable in these sorts of environments, being able to walk in on their own," he says.
He has hired staff with "bigger personalities" to engage customers in conversation but they also know when to leave diners alone if they want a more solitary experience.
Catherine urges anyone who fancies solo dining to give it a go.
"Food is a great way to bring people together, but it's also a great way to have good experiences on your own.
"I think with time, people will see and will start to accept it as something that's more normal."
Additional reporting by Jemma Crew and Emma Jackson.
Get in touch
Do you treat yourself to meals out on your own?
Related topics
More like this
- Published15 November`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cw8dv11dp2yeo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-27T07:46:02+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/0041/live/4371efb0-ea36-11f1-9fc4-ef897a334b75.jpg",
    readTime: 10,
  },
  {
    id: "tech-german-software-major-sap-is-report-ffd826ee",
    title: "Tech German software major SAP is reportedly weighing cutting at least 10,000 jobs in AI push",
    titleJa: "Tech German software major SAP is reportedly weighing cutting at least 10,000 jobs in AI push",
    summaryJa: "SAP is weighing cuts of at least 10,000 jobs as it reshapes its software business around AI, Bloomberg reported.",
    bodyOriginal: `SAP is preparing a plan to eliminate at least 10,000 positions as the German firm reshapes its software business for the artificial intelligence era, Bloomberg reported on Thursday, citing people familiar with the matter.
The report came as the company flagged a cybersecurity attack, but said it had found "no evidence of unauthorized access to customer business data."
"SAP has identified suspicious activity and promptly implemented the necessary measures to protect its customers and preserve the security of its services," a company spokesperson said.
"Our customers trust us to protect their data, and that remains our highest priority. In a highly dynamic threat environment, we will continue to strengthen our security to provide the secure and resilient environment our customers depend on."
The company did not respond to a request for comment on the reported job cuts. The number could change after labor negotiations.
Other software companies have also tied workforce reductions to AI initiatives, though for different reasons. WiseTech Global said in February it planned to cut about 2,000 jobs over two years as it integrated AI into its products and operations.
Atlassian said in March it would cut about 1,600 jobs partly to fund further AI investment, while Cloudflare said in May it would eliminate more than 1,100 roles as it moved toward an AI-first operating model.
In the U.S., employers cited AI in 121,401 job-cut announcements through October 2026, accounting for about 20% of the total, according to a Nov. 5 report from outplacement and executive coaching firm Challenger, Gray & Christmas.
SAP employs more than 110,000 people worldwide. Bloomberg reported that all departments had been asked to identify potential cuts, with product, engineering and sales in particular focus.
The company also underwent a reorganization in 2024, when it eliminated around 10,000 positions through a program that relied mainly on voluntary departures and retraining.
Its headcount later remained relatively flat as it hired for new roles, Bloomberg reported.
In 2023, SAP CEO Christian Klein told CNBC he did not necessarily expect a reduction in the workforce, saying he expected the company to grow and "accelerate" its total revenue.
The reported cuts come as Klein pushes SAP toward an AI-first strategy. This year, SAP completed four acquisitions — Reltio, Dremio, Prior Labs and TechWolf — and made strategic investments in AI-focused companies including Parloa, n8n and Conduct.
The acquisitions are intended to help SAP organize company data, develop AI models for business information and analyze workforce skills.`,
    bodyJa: `SAP is preparing a plan to eliminate at least 10,000 positions as the German firm reshapes its software business for the artificial intelligence era, Bloomberg reported on Thursday, citing people familiar with the matter.
The report came as the company flagged a cybersecurity attack, but said it had found "no evidence of unauthorized access to customer business data."
"SAP has identified suspicious activity and promptly implemented the necessary measures to protect its customers and preserve the security of its services," a company spokesperson said.
"Our customers trust us to protect their data, and that remains our highest priority. In a highly dynamic threat environment, we will continue to strengthen our security to provide the secure and resilient environment our customers depend on."
The company did not respond to a request for comment on the reported job cuts. The number could change after labor negotiations.
Other software companies have also tied workforce reductions to AI initiatives, though for different reasons. WiseTech Global said in February it planned to cut about 2,000 jobs over two years as it integrated AI into its products and operations.
Atlassian said in March it would cut about 1,600 jobs partly to fund further AI investment, while Cloudflare said in May it would eliminate more than 1,100 roles as it moved toward an AI-first operating model.
In the U.S., employers cited AI in 121,401 job-cut announcements through October 2026, accounting for about 20% of the total, according to a Nov. 5 report from outplacement and executive coaching firm Challenger, Gray & Christmas.
SAP employs more than 110,000 people worldwide. Bloomberg reported that all departments had been asked to identify potential cuts, with product, engineering and sales in particular focus.
The company also underwent a reorganization in 2024, when it eliminated around 10,000 positions through a program that relied mainly on voluntary departures and retraining.
Its headcount later remained relatively flat as it hired for new roles, Bloomberg reported.
In 2023, SAP CEO Christian Klein told CNBC he did not necessarily expect a reduction in the workforce, saying he expected the company to grow and "accelerate" its total revenue.
The reported cuts come as Klein pushes SAP toward an AI-first strategy. This year, SAP completed four acquisitions — Reltio, Dremio, Prior Labs and TechWolf — and made strategic investments in AI-focused companies including Parloa, n8n and Conduct.
The acquisitions are intended to help SAP organize company data, develop AI models for business information and analyze workforce skills.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/27/sap-job-cuts-ai-restructuring.html",
    publishedAt: "2026-11-27T07:15:44+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 7,
  },
  {
    id: "spacex-shares-jump-on-alternative-tradin-e9e46b91",
    title: "SpaceX shares jump on alternative trading platform after Musk says he will expand on Trump Account share donations",
    titleJa: "SpaceX shares jump on alternative trading platform after Musk says he will expand on Trump Account share donations",
    summaryJa: "SpaceX shares jumped in overnight trading on Blue Ocean ATS after Elon Musk said on X that he would donate shares to American children every year.",
    bodyOriginal: `Shares of SpaceX jumped 7.47% in overnight trading on Blue Ocean ATS after CEO Elon Musk expanded his SpaceX share-donation plan for U.S. children.
"I will be donating another share of SpaceX to all kids in America every year," Musk said in a post on X.
Blue Ocean ATS is an alternative trading system for U.S. equities that operates from 8 p.m. to 4 a.m. ET, outside regular U.S. stock market hours. According to the platform's holiday schedule, overnight trading resumed at 8 p.m. ET on Thanksgiving Day. U.S. stock exchanges were closed Thursday and are scheduled to close early Friday.
SpaceX shares closed 1.30% higher on Wednesday ahead of Thanksgiving.
The latest pledge follows SpaceX's announcement Wednesday that it would donate one share of its Class A stock to every active Trump Account, tax-advantaged investment accounts for American children, with Musk personally matching the gift.
In a separate post on X, Musk said SpaceX's contribution would be transferred next month, while his personal donation would follow when his lockup period expires in June next year.
Nearly 70 million Trump Accounts had been created as of October, according to the White House.
Since the program's launch in July, families and friends have contributed more than $1 billion to the accounts, bringing total deposits from all sources to more than $9 billion, CNBC reported earlier this week.`,
    bodyJa: `Shares of SpaceX jumped 7.47% in overnight trading on Blue Ocean ATS after CEO Elon Musk expanded his SpaceX share-donation plan for U.S. children.
"I will be donating another share of SpaceX to all kids in America every year," Musk said in a post on X.
Blue Ocean ATS is an alternative trading system for U.S. equities that operates from 8 p.m. to 4 a.m. ET, outside regular U.S. stock market hours. According to the platform's holiday schedule, overnight trading resumed at 8 p.m. ET on Thanksgiving Day. U.S. stock exchanges were closed Thursday and are scheduled to close early Friday.
SpaceX shares closed 1.30% higher on Wednesday ahead of Thanksgiving.
The latest pledge follows SpaceX's announcement Wednesday that it would donate one share of its Class A stock to every active Trump Account, tax-advantaged investment accounts for American children, with Musk personally matching the gift.
In a separate post on X, Musk said SpaceX's contribution would be transferred next month, while his personal donation would follow when his lockup period expires in June next year.
Nearly 70 million Trump Accounts had been created as of October, according to the White House.
Since the program's launch in July, families and friends have contributed more than $1 billion to the accounts, bringing total deposits from all sources to more than $9 billion, CNBC reported earlier this week.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/27/spacex-shares-musk-donations.html",
    publishedAt: "2026-11-27T07:15:13+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "two-italians-killed-in-kuwait-drone-atta-0594dea0",
    title: "Two Italians killed in Kuwait drone attack; Trump says Iran war ends ‘whenever I want it’",
    titleJa: "Two Italians killed in Kuwait drone attack; Trump says Iran war ends ‘whenever I want it’",
    summaryJa: "Iran's foreign minister Abbas Araghchi said \"The incident is suspicious and looks like a precooked recipe for war.\"",
    bodyOriginal: `Two Italians have been killed after an alleged Iranian attack on Kuwait, Kuwaiti forces said Thursday.
In a post on X, Kuwait's army said the deaths followed Iranian attacks on the country, with the two Italians killed by falling missile debris. Two others were also injured.
In response, a spokesperson for Iran's military told state media that no offensive or military operations had been carried out in the area and that "these accusations should be viewed as a cover for continued malevolence and an attempt to exacerbate insecurity in the region" by U.S. and Israeli forces.
Iranian Foreign Minister Abbas Araghchi said on Telegram that he had spoken with his Italian counterpart, Antonio Tajani, and expressed regret over their deaths, while stressing that Tehran had no role or involvement in the incident.
"The incident is suspicious and looks like a precooked recipe for war," Araghchi wrote on X.
He also said Iran was ready to cooperate with the governments of Kuwait and Italy in investigating the incident.
Separately, Israel said Thursday that it was prepared to carry out strikes against Iran "at any moment," even without U.S. forces joining the effort, according to Israeli military spokesman Effie Defrin on Israeli broadcaster Kan.
The comments came after U.S. envoy Jared Kushner told a podcast Wednesday that Israel "needs to get out of the constant wartime mindset."
Israel has been pushing the Trump administration to back another offensive against Tehran, with Reuters reporting on Nov. 18 that Israeli spy chief Roman Gofman pushed for joint strikes when he met U.S. officials earlier in the month.
Late Thursday, President Donald Trump said on PBS that the U.S. had "victory at hand" in the Iran conflict and reiterated that victory would come "whenever I want it to be, to be honest."
Speaking during a Thanksgiving call with U.S. military personnel, Trump said Washington was still trying to give Iran "every chance to make a deal and save a lot of lives."
But he added that he was not sure whether Tehran would agree.
"Some people question why. Are they crazy? Maybe they are," Trump said.`,
    bodyJa: `Two Italians have been killed after an alleged Iranian attack on Kuwait, Kuwaiti forces said Thursday.
In a post on X, Kuwait's army said the deaths followed Iranian attacks on the country, with the two Italians killed by falling missile debris. Two others were also injured.
In response, a spokesperson for Iran's military told state media that no offensive or military operations had been carried out in the area and that "these accusations should be viewed as a cover for continued malevolence and an attempt to exacerbate insecurity in the region" by U.S. and Israeli forces.
Iranian Foreign Minister Abbas Araghchi said on Telegram that he had spoken with his Italian counterpart, Antonio Tajani, and expressed regret over their deaths, while stressing that Tehran had no role or involvement in the incident.
"The incident is suspicious and looks like a precooked recipe for war," Araghchi wrote on X.
He also said Iran was ready to cooperate with the governments of Kuwait and Italy in investigating the incident.
Separately, Israel said Thursday that it was prepared to carry out strikes against Iran "at any moment," even without U.S. forces joining the effort, according to Israeli military spokesman Effie Defrin on Israeli broadcaster Kan.
The comments came after U.S. envoy Jared Kushner told a podcast Wednesday that Israel "needs to get out of the constant wartime mindset."
Israel has been pushing the Trump administration to back another offensive against Tehran, with Reuters reporting on Nov. 18 that Israeli spy chief Roman Gofman pushed for joint strikes when he met U.S. officials earlier in the month.
Late Thursday, President Donald Trump said on PBS that the U.S. had "victory at hand" in the Iran conflict and reiterated that victory would come "whenever I want it to be, to be honest."
Speaking during a Thanksgiving call with U.S. military personnel, Trump said Washington was still trying to give Iran "every chance to make a deal and save a lot of lives."
But he added that he was not sure whether Tehran would agree.
"Some people question why. Are they crazy? Maybe they are," Trump said.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/27/us-iran-war-trump-hormuz-italian-killed-trump.html",
    publishedAt: "2026-11-27T03:30:23+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "from-250-job-to-9-000-bill-inside-the-ro-8360d1b1",
    title: "From £250 job to £9,000 bill: Inside the rogue trader networks scamming customers at scale",
    titleJa: "From £250 job to £9,000 bill: Inside the rogue trader networks scamming customers at scale",
    summaryJa: "Networks of plumbers and electricians are scamming people on a large scale, the BBC reveals.",
    bodyOriginal: `From £250 job to £9,000 bill: Inside the rogue trader networks scamming customers at scale
- Published
Organised networks of rogue plumbers and electricians have been scamming people on a large scale, a BBC investigation has found.
Nessar Khawaja, who used the online name ThatGuyNess, regularly posted TikTok videos showing his work as a plumber, explaining how he made thousands of pounds from "desperate" customers, and recruiting online to expand his network.
"Me and my team, we're top of the food chain," he said in one video.
The investigation found the 23-year-old is a key figure within an organised group that is systematically ripping off customers and teaching others to do the same.
The BBC put these allegations to Khawaja in writing. He denied any wrongdoing and said his social media posts were intended as light-hearted comedy that did not reflect how he operated in practice.
In a recorded phone call, Khawaja insisted he was an entertainer, was joking and that the BBC had "taken things out of context".
In another video, Khawaja made claims he had electricians working for him who made more than £40,000 a month.
"I've got 100-120 engineers. Imagine how much money I am making them and making from them," he said.
One of Khawaja's associates told an undercover BBC journalist during a secretly-recorded recruitment call that engineers working for them had to hand over 60% from every job to the network.
After being approached for comment, TikTok said it banned the account for "breaching its rules on fraud and scams".
Trading Standards said the average rogue trader call-out scam now costs the victim about £10,000.
The impact can be devastating.
Clive, who lives in London, is undergoing treatment for cancer.
He said he had felt forced to pay the rogue trader who came to his home and charged £9,153 for installing an outdoor socket to fit garden lights he already owned.
An independent electrical expert told the BBC the job had not been done properly, was left in an unsafe state and should have cost no more than £250.
Clive said he no longer feels safe in his home.
He explained how he had searched for a local electrician on Google when his usual tradesperson was unavailable and came across Chriss Electrician Ltd.
Clive said the engineer spent about two hours at the property before presenting him with the bill.
"I was shocked," said Clive.
He added he had felt pressured into paying as the work had already been completed.
He went to his local bank branch to move money between accounts before returning home and making the payment through the engineer's portable card reader.
Despite his doubts about the costs, Clive said he had feared what might happen if he refused to pay.
"If I hadn't paid him, I thought something might happen," he said.
"When people come to the door now, I think, 'Oh God, who's that?' I don't feel safe any more."
Hunting the Rogue Traders
Sky-high bills. Hostile threats. What happens when the person you hire to fix a domestic problem is plotting to rip you off?
While the BBC has not seen evidence that Khawaja controls or runs this company, it has established the following:
Companies House places Chriss Electrician Ltd at an address in Ilford
Khawaja appears as the listed director of two dissolved companies inside that same building, one inside the very same flat
Khawaja's company First Choice Maintenance 24/7 Limited was registered 22 days before Chriss Electrician Ltd was incorporated and registered at the same flat as its address.
The BBC contacted Chriss Electrician Ltd for comment but it has not responded.
Khawaja denied having any connection with Chriss Electrician Ltd.
Clive was refunded by his bank after it was contacted by the BBC. The bank said it had done so as a "gesture of goodwill".
'I was threatened with rape after locksmith scam'
- Published5 March
Secret filming catches locksmith charging 10 times quote
- Published13 February
Like Clive, another man, who the BBC has named as Tom, felt he had no choice but to settle the bill when he mistakenly called a rogue trader to his property in Essex after finding a leak.
He says he was initially quoted £49 over the phone after calling a listing at the top of Google purporting to be an established business.
But on arrival, the plumber increased the call-out fee to £250 and the costs kept on climbing.
"He charged us for the first load of repairs, and then the second load with the water cylinder. Basically, he was running my taps constantly saying, 'Look, it's coming out this hot', which caused me to panic."
By the end, the plumber presented a bill for £6,237.60.
"I noticed afterwards that the invoice said Ibby & Co. Ltd. That was when alarm bells started ringing because I had never heard of that company. It wasn't the company I called out, essentially."
Customer received threats
Tom called another plumber to get a second opinion and was told the work that was completed should have cost no more than £1,000.
When Tom called the company to complain, he received threats from an unknown man. The call was recorded and the BBC heard threats including: "We'll show up at your house. And we're gonna be sleeping there for months."
Ibrahim Nazir, the plumber who came to Tom's property and the listed director of Ibby and Co Ltd, has been contacted by the BBC for comment but has not responded.
Sources close to Khawaja place Nazir inside the same network.
Khawaja said he did not know anything about the job involving Tom and stated Nazir was not in his employ.
Monetising vulnerability and desperation is key to the rogue trader business model, insiders say.
One insider forwarded the BBC a script being circulated by a different rogue trader network recruiting young men for commission-based work.
The document tells recruits to hike prices if children or pets are trapped inside and even instructs them to fake picking a lock for seven minutes before drilling it.
'You make up the pricing'
Lee, not his real name, spent a year working for Khawaja as a plumber until, he says, his conscience got the better of him.
"It got a bit too much for me," he said. "I didn't like scamming people. So, I left.
"I've worked for London's biggest plumbing company and, no word of a lie, this lot have more jobs. They're giants."
Rather than relying on solid reputations and recommendation, rogue traders rely on search engine traffic.
They either pay to get their details at the top of Google, which means they are seen first, or they mimic the names of reputable companies by making tiny changes to the business name.
Reached by the BBC's undercover journalist posing as a plumber seeking to work with them, one of Khawaja's associates said: "We're a lead company. We'll send you jobs, and then you go to the jobs.
"We sort the jobs through online advertisement. Usually we'll try and get emergencies so we can charge more. You make up the pricing."
The associate told the undercover reporter they had to charge in the region of £400 for every job, regardless of what work was actually needed.
Both Clive and Tom reported what happened to the Metropolitan Police and Essex Police.
Khawaja said he was not a party to the phone call with the undercover journalist and could not comment on its contents.
He said the alleged statements did not reflect how he operates.
He separately told the BBC in the recorded phone call: "You guys should know I am an entertainer and you guys are taking it out of context."
"I am clearly joking and I'm entertaining and I am engaging with the comments, it is not literal," he added.
He said the right of reply sent to him by the BBC contained "false information which has nothing to do with me".
What did TikTok and Google say?
TikTok said its community guidelines were "clear" and did not "allow any attempts to scam, trick or defraud people".
The firm said in the three months up to June 2026, it had removed 99.2% of content found to be in breach of its "policies on fraud and scams... before it was reported to us".
The BBC put questions to Google including why rogue traders were able to advertise on its platform. It did not answer specific questions, but a Google spokesperson said: "We have strict ads policies that govern the types of ads and advertisers we allow on our platforms.
"Keeping our users and partners safe is our top priority and we invest heavily in the enforcement of our policies.
"We have a team of thousands working around the clock to create and enforce our policies at scale."
Get in touch
Do you have a story to share with the BBC London investigations team in confidence?
More from London and East Investigations
- Published28 September
- Published20 August`,
    bodyJa: `From £250 job to £9,000 bill: Inside the rogue trader networks scamming customers at scale
- Published
Organised networks of rogue plumbers and electricians have been scamming people on a large scale, a BBC investigation has found.
Nessar Khawaja, who used the online name ThatGuyNess, regularly posted TikTok videos showing his work as a plumber, explaining how he made thousands of pounds from "desperate" customers, and recruiting online to expand his network.
"Me and my team, we're top of the food chain," he said in one video.
The investigation found the 23-year-old is a key figure within an organised group that is systematically ripping off customers and teaching others to do the same.
The BBC put these allegations to Khawaja in writing. He denied any wrongdoing and said his social media posts were intended as light-hearted comedy that did not reflect how he operated in practice.
In a recorded phone call, Khawaja insisted he was an entertainer, was joking and that the BBC had "taken things out of context".
In another video, Khawaja made claims he had electricians working for him who made more than £40,000 a month.
"I've got 100-120 engineers. Imagine how much money I am making them and making from them," he said.
One of Khawaja's associates told an undercover BBC journalist during a secretly-recorded recruitment call that engineers working for them had to hand over 60% from every job to the network.
After being approached for comment, TikTok said it banned the account for "breaching its rules on fraud and scams".
Trading Standards said the average rogue trader call-out scam now costs the victim about £10,000.
The impact can be devastating.
Clive, who lives in London, is undergoing treatment for cancer.
He said he had felt forced to pay the rogue trader who came to his home and charged £9,153 for installing an outdoor socket to fit garden lights he already owned.
An independent electrical expert told the BBC the job had not been done properly, was left in an unsafe state and should have cost no more than £250.
Clive said he no longer feels safe in his home.
He explained how he had searched for a local electrician on Google when his usual tradesperson was unavailable and came across Chriss Electrician Ltd.
Clive said the engineer spent about two hours at the property before presenting him with the bill.
"I was shocked," said Clive.
He added he had felt pressured into paying as the work had already been completed.
He went to his local bank branch to move money between accounts before returning home and making the payment through the engineer's portable card reader.
Despite his doubts about the costs, Clive said he had feared what might happen if he refused to pay.
"If I hadn't paid him, I thought something might happen," he said.
"When people come to the door now, I think, 'Oh God, who's that?' I don't feel safe any more."
Hunting the Rogue Traders
Sky-high bills. Hostile threats. What happens when the person you hire to fix a domestic problem is plotting to rip you off?
While the BBC has not seen evidence that Khawaja controls or runs this company, it has established the following:
Companies House places Chriss Electrician Ltd at an address in Ilford
Khawaja appears as the listed director of two dissolved companies inside that same building, one inside the very same flat
Khawaja's company First Choice Maintenance 24/7 Limited was registered 22 days before Chriss Electrician Ltd was incorporated and registered at the same flat as its address.
The BBC contacted Chriss Electrician Ltd for comment but it has not responded.
Khawaja denied having any connection with Chriss Electrician Ltd.
Clive was refunded by his bank after it was contacted by the BBC. The bank said it had done so as a "gesture of goodwill".
'I was threatened with rape after locksmith scam'
- Published5 March
Secret filming catches locksmith charging 10 times quote
- Published13 February
Like Clive, another man, who the BBC has named as Tom, felt he had no choice but to settle the bill when he mistakenly called a rogue trader to his property in Essex after finding a leak.
He says he was initially quoted £49 over the phone after calling a listing at the top of Google purporting to be an established business.
But on arrival, the plumber increased the call-out fee to £250 and the costs kept on climbing.
"He charged us for the first load of repairs, and then the second load with the water cylinder. Basically, he was running my taps constantly saying, 'Look, it's coming out this hot', which caused me to panic."
By the end, the plumber presented a bill for £6,237.60.
"I noticed afterwards that the invoice said Ibby & Co. Ltd. That was when alarm bells started ringing because I had never heard of that company. It wasn't the company I called out, essentially."
Customer received threats
Tom called another plumber to get a second opinion and was told the work that was completed should have cost no more than £1,000.
When Tom called the company to complain, he received threats from an unknown man. The call was recorded and the BBC heard threats including: "We'll show up at your house. And we're gonna be sleeping there for months."
Ibrahim Nazir, the plumber who came to Tom's property and the listed director of Ibby and Co Ltd, has been contacted by the BBC for comment but has not responded.
Sources close to Khawaja place Nazir inside the same network.
Khawaja said he did not know anything about the job involving Tom and stated Nazir was not in his employ.
Monetising vulnerability and desperation is key to the rogue trader business model, insiders say.
One insider forwarded the BBC a script being circulated by a different rogue trader network recruiting young men for commission-based work.
The document tells recruits to hike prices if children or pets are trapped inside and even instructs them to fake picking a lock for seven minutes before drilling it.
'You make up the pricing'
Lee, not his real name, spent a year working for Khawaja as a plumber until, he says, his conscience got the better of him.
"It got a bit too much for me," he said. "I didn't like scamming people. So, I left.
"I've worked for London's biggest plumbing company and, no word of a lie, this lot have more jobs. They're giants."
Rather than relying on solid reputations and recommendation, rogue traders rely on search engine traffic.
They either pay to get their details at the top of Google, which means they are seen first, or they mimic the names of reputable companies by making tiny changes to the business name.
Reached by the BBC's undercover journalist posing as a plumber seeking to work with them, one of Khawaja's associates said: "We're a lead company. We'll send you jobs, and then you go to the jobs.
"We sort the jobs through online advertisement. Usually we'll try and get emergencies so we can charge more. You make up the pricing."
The associate told the undercover reporter they had to charge in the region of £400 for every job, regardless of what work was actually needed.
Both Clive and Tom reported what happened to the Metropolitan Police and Essex Police.
Khawaja said he was not a party to the phone call with the undercover journalist and could not comment on its contents.
He said the alleged statements did not reflect how he operates.
He separately told the BBC in the recorded phone call: "You guys should know I am an entertainer and you guys are taking it out of context."
"I am clearly joking and I'm entertaining and I am engaging with the comments, it is not literal," he added.
He said the right of reply sent to him by the BBC contained "false information which has nothing to do with me".
What did TikTok and Google say?
TikTok said its community guidelines were "clear" and did not "allow any attempts to scam, trick or defraud people".
The firm said in the three months up to June 2026, it had removed 99.2% of content found to be in breach of its "policies on fraud and scams... before it was reported to us".
The BBC put questions to Google including why rogue traders were able to advertise on its platform. It did not answer specific questions, but a Google spokesperson said: "We have strict ads policies that govern the types of ads and advertisers we allow on our platforms.
"Keeping our users and partners safe is our top priority and we invest heavily in the enforcement of our policies.
"We have a team of thousands working around the clock to create and enforce our policies at scale."
Get in touch
Do you have a story to share with the BBC London investigations team in confidence?
More from London and East Investigations
- Published28 September
- Published20 August`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c65yme31k7m2o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-27T00:58:49+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/3451/live/fbe22210-e9cb-11f1-99a1-253766e7ad8b.jpg",
    readTime: 10,
  },
  {
    id: "sovereign-wealth-funds-are-acting-more-l-a4441d34",
    title: "Sovereign wealth funds are acting more like private equity giants — and inheriting their risks",
    titleJa: "Sovereign wealth funds are acting more like private equity giants — and inheriting their risks",
    summaryJa: "Sovereign wealth funds are increasingly originating deals, taking controlling stakes and building their own investment platforms.",
    bodyOriginal: `For decades, sovereign wealth funds were among private equity's most deep-pocketed backers, entrusting billions of dollars to buyout firms to invest on their behalf. Increasingly, they are doing the dealmaking themselves.
From originating transactions and taking controlling stakes in companies to building their own investment platforms, some of the world's largest state investors are adopting the playbook of traditional private equity giants, according to industry veterans.
"The imminent change is that the lines between LPs and GPs are becoming increasingly blurry. This could bring more fundamental changes in the long term," Diego Lopez of Global SWF told CNBC.
Limited partners, or LPs, typically commit capital to private equity funds, while general partners, or GPs, are responsible for sourcing deals and managing investments.
Sovereign funds and state investment companies are increasingly taking on the GP role, Lopez said, pointing to the establishment of their own private equity management platforms, such as Mubadala Capital and Singapore's Seviora.
The shift is also reflected in the way some of the world's largest sovereign investors are approaching dealmaking.
"They originate transactions rather than waiting for them. They build platforms rather than buying single assets. They take control positions and operate what they own," PwC said in their latest report on sovereign wealth funds.
"Whether you're a company, a general partner, or a government, you'll find that these institutions are no longer the limited partner you're raising money from; they're the principal sitting across the table."
Last year, Abu Dhabi's MGX, an investment vehicle established by state fund Mubadala in 2024, anchored the roughly $40 billion acquisition of Aligned Data Centers alongside BlackRock, Nvidia and Microsoft. A year earlier, a consortium led by Mubadala Capital acquired a 68% equity stake in alternative asset manager Fortress, which at the time managed more than $48 billion.
Some sovereign funds are striking deals at a speed typically associated with large private equity firms, according to PwC.
Singapore's GIC recorded 553 transactions between July 2023 and July 2026, Abu Dhabi's Mubadala 397 and the Abu Dhabi Investment Authority 367, according to PwC's analysis of PitchBook data, which includes transactions by subsidiaries.
The shift comes as sovereign wealth funds command unprecedented financial firepower. Their assets have surged about 59% over the past five years to $16.5 trillion, up from $10.4 trillion in 2022 and more than nine times the $1.8 trillion they managed in 2005, according to data provided to CNBC by research firm Global SWF which focuses on state-owned investors.
PwC projects that sovereign wealth fund assets to reach $22.4 trillion by 2030.
Cutting out the middleman
While sovereign funds' push into direct investing has been underway for years, a more challenging fundraising environment for PE firms and a resurgence in megadeals have recently accelerated the trend.
The fundraising slowdown has tilted bargaining power toward large institutional investors, allowing them to negotiate more opportunities to invest directly alongside private equity managers, said Kyle Walters of PitchBook.
A key attraction is the potential to save on fees. Co-investments typically carry little or no management fees and no carried interest, which is the share of investment profits that managers receive. Additionally, direct deals can eliminate external manager fees altogether.
"For a large SWF writing big checks, the fee savings in dollar terms can be substantial," Walters said.
Sovereign funds also enjoy structural advantages over traditional buyout firms. Unlike conventional private equity funds, which operate within predetermined lifespans, sovereign investors can hold assets for decades, the experts highlighted.
They can also deploy substantial sums from their own balance sheets without having to raise fresh capital, an advantage particularly valuable in capital-intensive sectors such as AI infrastructure and energy.
But deep pockets and patient capital alone do not guarantee success.
As sovereign wealth funds take controlling stakes in companies, they assume operational responsibilities traditionally borne by private equity managers, while potentially stretching their own capacity to source deals, conduct due diligence and manage complex assets, PwC cautioned.
"Building the required capability, the talent, the systems, and the governance is a slower process than committing the capital," PwC said. The firm also flagged concentration risks as sovereign investors increasingly pile into similar investment themes, particularly AI, data centers and power infrastructure, leaving even geographically diversified portfolios vulnerable to the same underlying risks.
Relationship reset?
Despite their growing ambitions, industry experts are skeptical that sovereign wealth funds will supplant established private equity managers.
"This new path these large LPs are paving is more of a partnership than a competition between GPs and LPs," Walters said, noting that much of the increased activity is taking the form of co-investments.
He pointed to the $55 billion take-private deal for video-game maker Electronic Arts announced last year, in which Saudi Arabia's PIF contributed significant capital, as an example of how both sides ae joining hands.
Traditional buyout firms also retain an edge in sourcing deals and managing portfolio companies.
"However, capital alone does not replace the specialist sourcing, operational expertise, and active ownership capabilities required to consistently create value, which experienced managers have built over time," said Vincent Ng, managing director and co-head of Asia at Partners Group.
Direct investing also raises concentration risks, while illiquidity could become a problem during crises when governments need access to capital, experts said.
Rather than displacing traditional buyout firms, sovereign investors' growing ambitions could change the economics of private equity, forcing managers to become more flexible in how they work with their biggest clients.
"This is likely to reshape the relationship between asset owners and managers, with more customized mandates, co-investments, and long-term partnerships," Ng said.`,
    bodyJa: `For decades, sovereign wealth funds were among private equity's most deep-pocketed backers, entrusting billions of dollars to buyout firms to invest on their behalf. Increasingly, they are doing the dealmaking themselves.
From originating transactions and taking controlling stakes in companies to building their own investment platforms, some of the world's largest state investors are adopting the playbook of traditional private equity giants, according to industry veterans.
"The imminent change is that the lines between LPs and GPs are becoming increasingly blurry. This could bring more fundamental changes in the long term," Diego Lopez of Global SWF told CNBC.
Limited partners, or LPs, typically commit capital to private equity funds, while general partners, or GPs, are responsible for sourcing deals and managing investments.
Sovereign funds and state investment companies are increasingly taking on the GP role, Lopez said, pointing to the establishment of their own private equity management platforms, such as Mubadala Capital and Singapore's Seviora.
The shift is also reflected in the way some of the world's largest sovereign investors are approaching dealmaking.
"They originate transactions rather than waiting for them. They build platforms rather than buying single assets. They take control positions and operate what they own," PwC said in their latest report on sovereign wealth funds.
"Whether you're a company, a general partner, or a government, you'll find that these institutions are no longer the limited partner you're raising money from; they're the principal sitting across the table."
Last year, Abu Dhabi's MGX, an investment vehicle established by state fund Mubadala in 2024, anchored the roughly $40 billion acquisition of Aligned Data Centers alongside BlackRock, Nvidia and Microsoft. A year earlier, a consortium led by Mubadala Capital acquired a 68% equity stake in alternative asset manager Fortress, which at the time managed more than $48 billion.
Some sovereign funds are striking deals at a speed typically associated with large private equity firms, according to PwC.
Singapore's GIC recorded 553 transactions between July 2023 and July 2026, Abu Dhabi's Mubadala 397 and the Abu Dhabi Investment Authority 367, according to PwC's analysis of PitchBook data, which includes transactions by subsidiaries.
The shift comes as sovereign wealth funds command unprecedented financial firepower. Their assets have surged about 59% over the past five years to $16.5 trillion, up from $10.4 trillion in 2022 and more than nine times the $1.8 trillion they managed in 2005, according to data provided to CNBC by research firm Global SWF which focuses on state-owned investors.
PwC projects that sovereign wealth fund assets to reach $22.4 trillion by 2030.
Cutting out the middleman
While sovereign funds' push into direct investing has been underway for years, a more challenging fundraising environment for PE firms and a resurgence in megadeals have recently accelerated the trend.
The fundraising slowdown has tilted bargaining power toward large institutional investors, allowing them to negotiate more opportunities to invest directly alongside private equity managers, said Kyle Walters of PitchBook.
A key attraction is the potential to save on fees. Co-investments typically carry little or no management fees and no carried interest, which is the share of investment profits that managers receive. Additionally, direct deals can eliminate external manager fees altogether.
"For a large SWF writing big checks, the fee savings in dollar terms can be substantial," Walters said.
Sovereign funds also enjoy structural advantages over traditional buyout firms. Unlike conventional private equity funds, which operate within predetermined lifespans, sovereign investors can hold assets for decades, the experts highlighted.
They can also deploy substantial sums from their own balance sheets without having to raise fresh capital, an advantage particularly valuable in capital-intensive sectors such as AI infrastructure and energy.
But deep pockets and patient capital alone do not guarantee success.
As sovereign wealth funds take controlling stakes in companies, they assume operational responsibilities traditionally borne by private equity managers, while potentially stretching their own capacity to source deals, conduct due diligence and manage complex assets, PwC cautioned.
"Building the required capability, the talent, the systems, and the governance is a slower process than committing the capital," PwC said. The firm also flagged concentration risks as sovereign investors increasingly pile into similar investment themes, particularly AI, data centers and power infrastructure, leaving even geographically diversified portfolios vulnerable to the same underlying risks.
Relationship reset?
Despite their growing ambitions, industry experts are skeptical that sovereign wealth funds will supplant established private equity managers.
"This new path these large LPs are paving is more of a partnership than a competition between GPs and LPs," Walters said, noting that much of the increased activity is taking the form of co-investments.
He pointed to the $55 billion take-private deal for video-game maker Electronic Arts announced last year, in which Saudi Arabia's PIF contributed significant capital, as an example of how both sides ae joining hands.
Traditional buyout firms also retain an edge in sourcing deals and managing portfolio companies.
"However, capital alone does not replace the specialist sourcing, operational expertise, and active ownership capabilities required to consistently create value, which experienced managers have built over time," said Vincent Ng, managing director and co-head of Asia at Partners Group.
Direct investing also raises concentration risks, while illiquidity could become a problem during crises when governments need access to capital, experts said.
Rather than displacing traditional buyout firms, sovereign investors' growing ambitions could change the economics of private equity, forcing managers to become more flexible in how they work with their biggest clients.
"This is likely to reshape the relationship between asset owners and managers, with more customized mandates, co-investments, and long-term partnerships," Ng said.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/27/swf-private-equity-risks.html",
    publishedAt: "2026-11-27T00:22:29+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "why-is-there-a-shortage-of-wizard-elevat-10b92806",
    title: "Why is there a shortage of 'wizard' elevator mechanics?",
    titleJa: "Why is there a shortage of 'wizard' elevator mechanics?",
    summaryJa: "The pay is good and there's lots of work, so what's behind the shortage of elevator mechanics?",
    bodyOriginal: `Why is there a shortage of 'wizard' elevator mechanics?
- Published
Some of them are angry. Nerves are frayed. Many of them are just relieved that he's here.
When a lift stops working in Chicago, frazzled building managers might get a visit from Jim Lembesis. For more than 47 years, Lembesis has repaired and upgraded lifts. He says he understands why staff and residents are so anxious to have things working again.
"They wait and they wait," says Lembesis, a field technician for Parkway Elevators. "There's a lot of frustration. Sometimes it's a repeat issue. It's a never-ending cycle, you know what I mean?"
The widely reported shortage of lift and escalator mechanics in the US, which is also a problem in many other countries, has got worse over time, he adds: "It's been like night and day compared to when I started."
Everyone needs a lift now and again. Some people depend on them – elderly residents of high-rise buildings, say, or wheelchair users.
Storm-damaged lifts in Hawaiian apartment blocks this year left some residents trapped, external in their homes for weeks. A lack of mechanics, and problems sourcing parts, were blamed for the repair delays.
In the US, the average salary for a lift mechanic, external is $110,000 (£83,000). And yet people in the industry say it is difficult to attract new workers.
Sure, says Lembesis, you do encounter some dangers in a job like this. There are risks of falling from a great height – or being electrocuted. Once, he was even hit on the head with an umbrella by an elderly lady after he rescued her from a stuck lift.
But there are so many skills to learn, and great camaraderie and knowledge-sharing among mechanics, he says. As one recruiter puts it, these technicians amaze people with their ability to fix things. They are like "wizards". The overall-clad shamans who know how to get modern life running again.
Nine times out of 10, the problem is with the doors, says Lembesis. These components repeatedly move back and forth. "People hit them with carts, and dirt and debris [falls into them]," says Lembesis. "[The doors] take the most beating."
Mechanics often keep various spare door parts in their vehicles, ready to use.
But technicians like Lembesis don't just have to get lifts working, they also have to verify the lifts are safe. He remembers one case, decades ago, getting called out to a burning building. His role was to ensure the lifts, which were being drenched with huge volumes of water, were still safe to use while firefighters tackled the blaze.
"I was there for 15 hours that night," he says. "Everyone, on the way out of the door, shook my hand."
Finding good lift technicians is "becoming more difficult" says Matt Hollinshead, president of the US National Association for Elevator Contractors. "We have a four-year apprenticeship," he says. That's the first hurdle. And many states require certification or licensing before you can work on lifts.
"We have a vast array of equipment that has to be maintained in the United States." Some lifts are 100-years-old. As time goes on, the technological knowledge required to repair them only grows.
Hollinshead says that weeks or months-long delays to lift repairs are not typically due to staff shortages but that, in such cases, it's likely that a particular part isn't readily available. Manufacturing a replacement hydraulic cylinder takes six to 12 weeks, he notes.
But the lack of technicians does mean that that building managers might have to wait days before someone can even diagnose what's wrong with a lift after it stops working.
Hollinshead says teaching the basics of the trade in high schools or technical schools could entice more people into the role.
Matt Allred, a recruiter and host of The Elevator Careers Podcast, emphasises the many skills that lift mechanics require. "You're a little bit of a wizard, right? You show up and if you can fix it – 'Wow!'."
He blames major lift companies, in part, for locking down maintenance contracts, making it difficult or impossible for third-party repairers to intervene when a lift fails.
Two large lift manufacturers approached by BBC News declined interviews. The chief executive of Otis, one of the firms, said in May that her company was struggling to hire enough staff, external to meet demand. The firm also states on its website, external that the shortage of lift mechanics affects "almost every part of the world".
However, a spokesman for Otis claimed its "US talent pipeline" was healthy, and declined an interview.
Everyone else who spoke to BBC News said hiring was challenging in the US. Allred was recently contacted by a major lift company and asked to help them find a technician. "I was surprised that a major company would reach out to a little recruiting shop," he says, suggesting that this reflects the extent of the labour shortage.
That shortage is also a problem in the UK. "It is bad and getting worse," says Dave Cooper, president of the Chartered Institution of Building Services Engineers, who is also chief executive of a lift and escalator engineering consultancy.
"We've known food delivery companies to refuse to deliver to flats above the ground floor because the lift is out of service."
Offering better tax breaks to companies that train lift mechanics could help ensure that plenty of workers continue to enter the industry, he adds.
Training to be a lift mechanic is "not a quick route to competency – and it requires people to stick at it for the long term" says Karen Slade, head of assessment at the Lift and Escalator Industry Association (Leia).
Continued investment in training and attracting new workers is "essential", according to Leia. There are currently 259 active lift and escalator apprentices in the UK, the body adds.
Back in Chicago, Lembesis is working with two younger mechanics who have been "really good", he says, so there's at least some hope for the future.
He stresses again how rewarding he finds his work. The people for whom he fixes lifts tend to be very appreciative.
"I love that. You get that reaction from the customers," he says. "Without them, you got nothing."
Technology of Business
- Published6 November
- Published9 October
- Published25 September`,
    bodyJa: `Why is there a shortage of 'wizard' elevator mechanics?
- Published
Some of them are angry. Nerves are frayed. Many of them are just relieved that he's here.
When a lift stops working in Chicago, frazzled building managers might get a visit from Jim Lembesis. For more than 47 years, Lembesis has repaired and upgraded lifts. He says he understands why staff and residents are so anxious to have things working again.
"They wait and they wait," says Lembesis, a field technician for Parkway Elevators. "There's a lot of frustration. Sometimes it's a repeat issue. It's a never-ending cycle, you know what I mean?"
The widely reported shortage of lift and escalator mechanics in the US, which is also a problem in many other countries, has got worse over time, he adds: "It's been like night and day compared to when I started."
Everyone needs a lift now and again. Some people depend on them – elderly residents of high-rise buildings, say, or wheelchair users.
Storm-damaged lifts in Hawaiian apartment blocks this year left some residents trapped, external in their homes for weeks. A lack of mechanics, and problems sourcing parts, were blamed for the repair delays.
In the US, the average salary for a lift mechanic, external is $110,000 (£83,000). And yet people in the industry say it is difficult to attract new workers.
Sure, says Lembesis, you do encounter some dangers in a job like this. There are risks of falling from a great height – or being electrocuted. Once, he was even hit on the head with an umbrella by an elderly lady after he rescued her from a stuck lift.
But there are so many skills to learn, and great camaraderie and knowledge-sharing among mechanics, he says. As one recruiter puts it, these technicians amaze people with their ability to fix things. They are like "wizards". The overall-clad shamans who know how to get modern life running again.
Nine times out of 10, the problem is with the doors, says Lembesis. These components repeatedly move back and forth. "People hit them with carts, and dirt and debris [falls into them]," says Lembesis. "[The doors] take the most beating."
Mechanics often keep various spare door parts in their vehicles, ready to use.
But technicians like Lembesis don't just have to get lifts working, they also have to verify the lifts are safe. He remembers one case, decades ago, getting called out to a burning building. His role was to ensure the lifts, which were being drenched with huge volumes of water, were still safe to use while firefighters tackled the blaze.
"I was there for 15 hours that night," he says. "Everyone, on the way out of the door, shook my hand."
Finding good lift technicians is "becoming more difficult" says Matt Hollinshead, president of the US National Association for Elevator Contractors. "We have a four-year apprenticeship," he says. That's the first hurdle. And many states require certification or licensing before you can work on lifts.
"We have a vast array of equipment that has to be maintained in the United States." Some lifts are 100-years-old. As time goes on, the technological knowledge required to repair them only grows.
Hollinshead says that weeks or months-long delays to lift repairs are not typically due to staff shortages but that, in such cases, it's likely that a particular part isn't readily available. Manufacturing a replacement hydraulic cylinder takes six to 12 weeks, he notes.
But the lack of technicians does mean that that building managers might have to wait days before someone can even diagnose what's wrong with a lift after it stops working.
Hollinshead says teaching the basics of the trade in high schools or technical schools could entice more people into the role.
Matt Allred, a recruiter and host of The Elevator Careers Podcast, emphasises the many skills that lift mechanics require. "You're a little bit of a wizard, right? You show up and if you can fix it – 'Wow!'."
He blames major lift companies, in part, for locking down maintenance contracts, making it difficult or impossible for third-party repairers to intervene when a lift fails.
Two large lift manufacturers approached by BBC News declined interviews. The chief executive of Otis, one of the firms, said in May that her company was struggling to hire enough staff, external to meet demand. The firm also states on its website, external that the shortage of lift mechanics affects "almost every part of the world".
However, a spokesman for Otis claimed its "US talent pipeline" was healthy, and declined an interview.
Everyone else who spoke to BBC News said hiring was challenging in the US. Allred was recently contacted by a major lift company and asked to help them find a technician. "I was surprised that a major company would reach out to a little recruiting shop," he says, suggesting that this reflects the extent of the labour shortage.
That shortage is also a problem in the UK. "It is bad and getting worse," says Dave Cooper, president of the Chartered Institution of Building Services Engineers, who is also chief executive of a lift and escalator engineering consultancy.
"We've known food delivery companies to refuse to deliver to flats above the ground floor because the lift is out of service."
Offering better tax breaks to companies that train lift mechanics could help ensure that plenty of workers continue to enter the industry, he adds.
Training to be a lift mechanic is "not a quick route to competency – and it requires people to stick at it for the long term" says Karen Slade, head of assessment at the Lift and Escalator Industry Association (Leia).
Continued investment in training and attracting new workers is "essential", according to Leia. There are currently 259 active lift and escalator apprentices in the UK, the body adds.
Back in Chicago, Lembesis is working with two younger mechanics who have been "really good", he says, so there's at least some hope for the future.
He stresses again how rewarding he finds his work. The people for whom he fixes lifts tend to be very appreciative.
"I love that. You get that reaction from the customers," he says. "Without them, you got nothing."
Technology of Business
- Published6 November
- Published9 October
- Published25 September`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c52e8k19y94mo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-27T00:02:19+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/8c0e/live/0c8a5940-e7e0-11f1-99a1-253766e7ad8b.jpg",
    readTime: 10,
  },
  {
    id: "uk-to-pay-participation-fee-to-deliver-e-79ce82f0",
    title: "UK to pay 'participation' fee to deliver EU deals",
    titleJa: "UK to pay 'participation' fee to deliver EU deals",
    summaryJa: "Details of the contribution towards EU running costs have been revealed in new legal documents.",
    bodyOriginal: `UK to pay 'participation' fee to deliver EU deals
- Published
The UK will pay a "participation fee" to the EU as part of the deals agreed by Andy Burnham, according to legal documents.
The surcharge will go towards the running costs of EU agencies and systems required to deliver two of the agreements unveiled by the prime minister last week.
It will be paid in addition to a contribution towards costs that broadly mirrors how EU members contribute to the bloc's shared budget, the documents show.
The government has sought to contrast the financial costs of the deals against their overall effect on the economy, which it estimates will receive an eventual boost by billions a year due to increased trade.
The government is yet to publish an estimate of overall additional costs, but officials said they expected them to be in the low tens of millions per year and "massively outweighed" by predicted economic gains.
British ministers had already said they were prepared to pay towards administrative costs required to implement deals to re-link the UK to the EU's carbon trading regime, and align Britain with the EU's food standards.
Now, details of how the payments will be calculated have been revealed in treaties to deliver the two agreements, which are meant to take effect during 2028.
Legal text for a third agreement agreed last week, on youth visas for 18 to 31 year olds, is expected to be published in the coming days.
Fee details
According to the treaties, the payments will be made as a share of the running costs of three EU agencies, as well as various systems that will be used to implement the food standards and emissions deals.
The bulk of the payments, to be made in euros, will come in the form of an "operational contribution" in proportion to the size of the British economy compared to that of the EU.
This broadly mirrors the way in which EU member states split the cost of their main contributions towards the bloc's overall budget.
But in addition, the UK will also pay a "participation fee" set at 4% of its main contribution figure.
The government has pointed to the 2021 Brexit trade agreement negotiated by the Conservatives, which also applied an additional surcharge to UK contributions towards the cost of relevant EU programmes.
However, any additional contributions are likely to be seized upon by opponents of the latest deals.
Ministers had declined to enter into specifics of the fees during negotiations on the treaties. On Sunday, Foreign Secretary Ed Miliband said the latest deals agreed by Burnham were "not about cost to the taxpayer".
'Extraordinary powers'
It comes as the government published separate legislation granting it broad powers to incorporate new EU laws required to implement the agreements, without having to hold a full vote each time.
The food standards deal in particular will mean Britain will have to align with scores of current EU food-related laws that have been updated since Brexit, along with future rules in these areas.
The government argues the new powers are required because it would be impractical to run a full parliamentary process each time UK legislation needs to be updated to make the agreement work.
But it has prompted criticism from opposition parties, because the UK no longer has voting rights at the EU to shape European legislation.
The government argues the UK will get a say on new rules, with the treaty texts confirming British experts can be consulted when new EU laws are being drawn up, with the UK granted "observer" status in certain meetings.
But Conservative leader Kemi Badenoch said Burnham was showing "disdain for the democratic process" by asking for a "blank cheque to install and enact EU law".
"The prime minister is telling MPs to hand him extraordinary powers whilst having no idea what the EU will actually agree to," she added.
Reform UK leader Nigel Farage has argued the Burnham's deals would take Britain back into "much of the European Union's single market".
He added: "European economies are not growing as fast as ours. The idea that getting closer to the EU will mean growth for us is a myth."
Get our flagship newsletter with all the headlines you need to start the day. Sign up here.
Related topics
- Published16 hours ago
- Published1 day ago`,
    bodyJa: `UK to pay 'participation' fee to deliver EU deals
- Published
The UK will pay a "participation fee" to the EU as part of the deals agreed by Andy Burnham, according to legal documents.
The surcharge will go towards the running costs of EU agencies and systems required to deliver two of the agreements unveiled by the prime minister last week.
It will be paid in addition to a contribution towards costs that broadly mirrors how EU members contribute to the bloc's shared budget, the documents show.
The government has sought to contrast the financial costs of the deals against their overall effect on the economy, which it estimates will receive an eventual boost by billions a year due to increased trade.
The government is yet to publish an estimate of overall additional costs, but officials said they expected them to be in the low tens of millions per year and "massively outweighed" by predicted economic gains.
British ministers had already said they were prepared to pay towards administrative costs required to implement deals to re-link the UK to the EU's carbon trading regime, and align Britain with the EU's food standards.
Now, details of how the payments will be calculated have been revealed in treaties to deliver the two agreements, which are meant to take effect during 2028.
Legal text for a third agreement agreed last week, on youth visas for 18 to 31 year olds, is expected to be published in the coming days.
Fee details
According to the treaties, the payments will be made as a share of the running costs of three EU agencies, as well as various systems that will be used to implement the food standards and emissions deals.
The bulk of the payments, to be made in euros, will come in the form of an "operational contribution" in proportion to the size of the British economy compared to that of the EU.
This broadly mirrors the way in which EU member states split the cost of their main contributions towards the bloc's overall budget.
But in addition, the UK will also pay a "participation fee" set at 4% of its main contribution figure.
The government has pointed to the 2021 Brexit trade agreement negotiated by the Conservatives, which also applied an additional surcharge to UK contributions towards the cost of relevant EU programmes.
However, any additional contributions are likely to be seized upon by opponents of the latest deals.
Ministers had declined to enter into specifics of the fees during negotiations on the treaties. On Sunday, Foreign Secretary Ed Miliband said the latest deals agreed by Burnham were "not about cost to the taxpayer".
'Extraordinary powers'
It comes as the government published separate legislation granting it broad powers to incorporate new EU laws required to implement the agreements, without having to hold a full vote each time.
The food standards deal in particular will mean Britain will have to align with scores of current EU food-related laws that have been updated since Brexit, along with future rules in these areas.
The government argues the new powers are required because it would be impractical to run a full parliamentary process each time UK legislation needs to be updated to make the agreement work.
But it has prompted criticism from opposition parties, because the UK no longer has voting rights at the EU to shape European legislation.
The government argues the UK will get a say on new rules, with the treaty texts confirming British experts can be consulted when new EU laws are being drawn up, with the UK granted "observer" status in certain meetings.
But Conservative leader Kemi Badenoch said Burnham was showing "disdain for the democratic process" by asking for a "blank cheque to install and enact EU law".
"The prime minister is telling MPs to hand him extraordinary powers whilst having no idea what the EU will actually agree to," she added.
Reform UK leader Nigel Farage has argued the Burnham's deals would take Britain back into "much of the European Union's single market".
He added: "European economies are not growing as fast as ours. The idea that getting closer to the EU will mean growth for us is a myth."
Get our flagship newsletter with all the headlines you need to start the day. Sign up here.
Related topics
- Published16 hours ago
- Published1 day ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/ck2057x387ego?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-26T23:17:12+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/e264/live/8e58c180-e9e5-11f1-ab41-f1f84c0c758a.png",
    readTime: 10,
  },
  {
    id: "asia-made-a-big-ai-bet-on-nvidia-what-ha-80778f1c",
    title: "Asia made a big AI bet on Nvidia. What happens now?",
    titleJa: "Asia made a big AI bet on Nvidia. What happens now?",
    summaryJa: "Asian stocks have been on a rollercoaster ride after Jensen Huang's shock return as Nvidia CEO.",
    bodyOriginal: `Asia made a big AI bet on Nvidia. What happens now?
- Published
Jensen Huang's extraordinary return as Nvidia's boss rocked not only its shares in New York but also sent shockwaves through the artificial intelligence (AI) industry around the world.
Those jolts were felt particularly in Asia as the saga highlighted the region's huge exposure to the technology.
Tech-heavy stock indexes in Japan, South Korea and Taiwan went on a rollercoaster ride this week. Markets soared after a near-trillion dollar surge in Nvidia's share price but then slumped as concerns about political and regulatory scrutiny hit investor confidence.
The chipmaker is a "symbolic bellwether" of the AI trade that is fast becoming key to places like South Korea, Taiwan, Singapore and Malaysia," says Dylan Loh, an international studies lecturer at Nanyang Technological University.
From chip manufacturing to data centres to foreign investments, AI has become a strategic priority for these economies - and they are now increasingly dependent on Nvidia's fortunes.
Nvidia is everywhere
In Nvidia, the AI industry has the unrivalled power of cutting-edge chips and the financial clout that turned it into "the bank of AI". And in Huang, it has a high-profile evangelist.
That combination has put it at the heart of the AI ecosystem in more ways than one.
For one, Nvidia was able to grow rapidly by outsourcing chip production instead of having to spend heavily to build its own manufacturing plants.
It contracts out most of its production to Taiwanese chipmaking giant TSMC.
That means Taiwan is vulnerable to changes in AI tech demand, says Paul Cavey, founder of Taipei-based research firm East Asia Econ.
"The surge in [Taiwan's] real economic growth since 2024 has been because of the big increase in AI related exports".
Huang said earlier this year that Nvidia plans to invest around $150bn (£114.4bn) a year in Taiwan at a launch to celebrate the firm's planned headquarters on the island.
To a lesser extent, South Korea and Japan are also exposed to the industry, Cavey adds. They are among its suppliers of key components such as memory chips and testing equipment, with firms like Samsung and SK Hynix making the firm's processors.
On top of that, Nvidia is a financial backstop and major lender to companies in the AI supply chain.
It is difficult to overstate the role Nvidia, with Huang at its helm, has played in the region's AI industry. Nvidia's chips fill its data centres, power its AI models and feed the companies making cars and electronics.
"Asia isn't just a customer base for Nvidia. It is an indispensable engine of the company's AI dominance because of East Asia's semiconductor manufacturing and memory ecosystems," Loh says.
In the Asia-Pacific region, the data centre market, which is largely powered by Nvidia chips, is in the midst of an "unprecedented boom", according to property services firm CBRE, external. The volume of investment has been rising steadily in recent years to reach a record of $11.6bn (£8.85bn) in 2025.
In South East Asia, Singapore-based AI company Megaspeed had become the region's biggest buyer of Nvidia chips before it was accused of smuggling them to China. Megaspeed has said it "conducts legitimate and lawful business" and has "retained external legal counsel to conduct a thorough internal investigation".
The US has said it intends to ban Megaspeed Ltd from doing business in the United States.
But in a timely example of the importance of AI to this region, Singapore this week further raised its growth forecast for this year as the technology boosts its economy.
The world's biggest tech firms - Google, Microsoft, Oracle - also plan to boost their spending on infrastructure in the region by roughly 60% this year, CBRE added.
The demand for neoclouds, which are specialised data centres which power AI, has also risen rapidly, it said.
For economies betting heavily on AI, Nvidia has become "hugely important", with vast sums being spent on its chips and factory activity increasingly dependent on its technology, Loh told the BBC.
Huang's return carries risks
In many economies, news of Huang's return to Nvidia was met with jubilation.
In Taiwan, where he was born and the home of "Jensanity", investors jokingly described his return as a "one man saves the village" story.
Social media and groups on messaging platform Line saw posts like "Old Huang is back," while some investors said "Daddy is back to save my life" and "the humanitarian corridor is open."
However, some said the episode should also prompt a closer look at how effective Taiwan has been in building a "non-China" semiconductor supply chain, and how risks from the industry's heavy reliance on Nvidia should be managed better.
Asia's technology industry has been under increasing pressure from the US in recent years. The administrations of both Joe Biden and Donald Trump have tightened rules on the export of Nvidia's most advanced chips to China.
Those efforts seem to have been renewed. Just last week, Washington announced new rules that will increase scrutiny of data centre operators in Singapore, Malaysia, Thailand, Indonesia and Brazil.
The latest move not only restricts the export of high-end chips to China, but also access to their computing power, which Chinese firms currently rent abroad to train AI models.
This will hit South East Asian countries, which have invested billions in data centre infrastructure to cater to Chinese firms. Nvidia has already paused shipments to the region, according to the Financial Times, although it is unclear if this is only a temporary move while it figures out how to comply with the new export rules.
Nvidia did not immediately respond to a BBC request for comment.
Then there is the growing bipartisan backlash against President Trump and Nvidia after he said he "made the deal" to "convince" the company‘s board to reinstate Huang.
Huang is also due to testify before Congress next week. And as Democrats prepare to take control of the US House and Senate in the New Year, Huang is likely to face further risks.
"Jensen's return may resolve the immediate leadership crisis, but it does not resolve the legal and political overhangs," said Charu Chanana, chief investment strategist from Saxo Bank.
Investor concerns about the trillions of dollars being poured into AI and the pivotal role Nvidia plays in the industry were already sending tremors through global stock markets.
Some fear that while the company and its charismatic leader have been crucial in driving AI's growth that concentration of influence also poses a threat.
Especially now when it appears that Huang's future - which is still uncertain - could impact economies that are heavily exposed to the AI industry.
"I would say the President and White House would love to brush this over and say its fine but I believe Democrats in Congress will definitely be probing", Ray Wang, founder of San Francisco-based Constellation Research said.
"The story is not over yet... Jensen coming back is probably the biggest, baddest return ever. The question is what will happen next?"
Additional reporting by Benny Lu, BBC Chinese
Related topics
- Published20 July`,
    bodyJa: `Asia made a big AI bet on Nvidia. What happens now?
- Published
Jensen Huang's extraordinary return as Nvidia's boss rocked not only its shares in New York but also sent shockwaves through the artificial intelligence (AI) industry around the world.
Those jolts were felt particularly in Asia as the saga highlighted the region's huge exposure to the technology.
Tech-heavy stock indexes in Japan, South Korea and Taiwan went on a rollercoaster ride this week. Markets soared after a near-trillion dollar surge in Nvidia's share price but then slumped as concerns about political and regulatory scrutiny hit investor confidence.
The chipmaker is a "symbolic bellwether" of the AI trade that is fast becoming key to places like South Korea, Taiwan, Singapore and Malaysia," says Dylan Loh, an international studies lecturer at Nanyang Technological University.
From chip manufacturing to data centres to foreign investments, AI has become a strategic priority for these economies - and they are now increasingly dependent on Nvidia's fortunes.
Nvidia is everywhere
In Nvidia, the AI industry has the unrivalled power of cutting-edge chips and the financial clout that turned it into "the bank of AI". And in Huang, it has a high-profile evangelist.
That combination has put it at the heart of the AI ecosystem in more ways than one.
For one, Nvidia was able to grow rapidly by outsourcing chip production instead of having to spend heavily to build its own manufacturing plants.
It contracts out most of its production to Taiwanese chipmaking giant TSMC.
That means Taiwan is vulnerable to changes in AI tech demand, says Paul Cavey, founder of Taipei-based research firm East Asia Econ.
"The surge in [Taiwan's] real economic growth since 2024 has been because of the big increase in AI related exports".
Huang said earlier this year that Nvidia plans to invest around $150bn (£114.4bn) a year in Taiwan at a launch to celebrate the firm's planned headquarters on the island.
To a lesser extent, South Korea and Japan are also exposed to the industry, Cavey adds. They are among its suppliers of key components such as memory chips and testing equipment, with firms like Samsung and SK Hynix making the firm's processors.
On top of that, Nvidia is a financial backstop and major lender to companies in the AI supply chain.
It is difficult to overstate the role Nvidia, with Huang at its helm, has played in the region's AI industry. Nvidia's chips fill its data centres, power its AI models and feed the companies making cars and electronics.
"Asia isn't just a customer base for Nvidia. It is an indispensable engine of the company's AI dominance because of East Asia's semiconductor manufacturing and memory ecosystems," Loh says.
In the Asia-Pacific region, the data centre market, which is largely powered by Nvidia chips, is in the midst of an "unprecedented boom", according to property services firm CBRE, external. The volume of investment has been rising steadily in recent years to reach a record of $11.6bn (£8.85bn) in 2025.
In South East Asia, Singapore-based AI company Megaspeed had become the region's biggest buyer of Nvidia chips before it was accused of smuggling them to China. Megaspeed has said it "conducts legitimate and lawful business" and has "retained external legal counsel to conduct a thorough internal investigation".
The US has said it intends to ban Megaspeed Ltd from doing business in the United States.
But in a timely example of the importance of AI to this region, Singapore this week further raised its growth forecast for this year as the technology boosts its economy.
The world's biggest tech firms - Google, Microsoft, Oracle - also plan to boost their spending on infrastructure in the region by roughly 60% this year, CBRE added.
The demand for neoclouds, which are specialised data centres which power AI, has also risen rapidly, it said.
For economies betting heavily on AI, Nvidia has become "hugely important", with vast sums being spent on its chips and factory activity increasingly dependent on its technology, Loh told the BBC.
Huang's return carries risks
In many economies, news of Huang's return to Nvidia was met with jubilation.
In Taiwan, where he was born and the home of "Jensanity", investors jokingly described his return as a "one man saves the village" story.
Social media and groups on messaging platform Line saw posts like "Old Huang is back," while some investors said "Daddy is back to save my life" and "the humanitarian corridor is open."
However, some said the episode should also prompt a closer look at how effective Taiwan has been in building a "non-China" semiconductor supply chain, and how risks from the industry's heavy reliance on Nvidia should be managed better.
Asia's technology industry has been under increasing pressure from the US in recent years. The administrations of both Joe Biden and Donald Trump have tightened rules on the export of Nvidia's most advanced chips to China.
Those efforts seem to have been renewed. Just last week, Washington announced new rules that will increase scrutiny of data centre operators in Singapore, Malaysia, Thailand, Indonesia and Brazil.
The latest move not only restricts the export of high-end chips to China, but also access to their computing power, which Chinese firms currently rent abroad to train AI models.
This will hit South East Asian countries, which have invested billions in data centre infrastructure to cater to Chinese firms. Nvidia has already paused shipments to the region, according to the Financial Times, although it is unclear if this is only a temporary move while it figures out how to comply with the new export rules.
Nvidia did not immediately respond to a BBC request for comment.
Then there is the growing bipartisan backlash against President Trump and Nvidia after he said he "made the deal" to "convince" the company‘s board to reinstate Huang.
Huang is also due to testify before Congress next week. And as Democrats prepare to take control of the US House and Senate in the New Year, Huang is likely to face further risks.
"Jensen's return may resolve the immediate leadership crisis, but it does not resolve the legal and political overhangs," said Charu Chanana, chief investment strategist from Saxo Bank.
Investor concerns about the trillions of dollars being poured into AI and the pivotal role Nvidia plays in the industry were already sending tremors through global stock markets.
Some fear that while the company and its charismatic leader have been crucial in driving AI's growth that concentration of influence also poses a threat.
Especially now when it appears that Huang's future - which is still uncertain - could impact economies that are heavily exposed to the AI industry.
"I would say the President and White House would love to brush this over and say its fine but I believe Democrats in Congress will definitely be probing", Ray Wang, founder of San Francisco-based Constellation Research said.
"The story is not over yet... Jensen coming back is probably the biggest, baddest return ever. The question is what will happen next?"
Additional reporting by Benny Lu, BBC Chinese
Related topics
- Published20 July`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cqevr4lnd1nxo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-26T23:08:12+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/2c76/live/9f54a560-e956-11f1-a629-63e812fa871f.jpg",
    readTime: 10,
  },
  {
    id: "trump-demands-probe-into-record-setting-cde0fd0e",
    title: "Trump demands probe into ‘record setting error’ after third-quarter GDP data gets massive revision higher",
    titleJa: "Trump demands probe into ‘record setting error’ after third-quarter GDP data gets massive revision higher",
    summaryJa: "President Donald Trump on Thursday deemed the latest gross domestic product revision a mistake, claiming that it should be \"immediately investigated.\"",
    bodyOriginal: `President Donald Trump on Thursday falsely deemed the latest gross domestic product revision a mistake, claiming that it should be "immediately investigated."
Data released Wednesday from the Commerce Department revealed that the U.S. economy exhibited much stronger growth for the third quarter than initially estimated, showing that real GDP grew at a 4.3% annualized rate. That was revised upward from the department's advance estimate of 3.4%.
That revision was a "RECORD SETTING ERROR," Trump said in a Truth Social post, suggesting that the initial release could have influenced the outcome of the 2026 U.S. midterm elections, where Democrats flipped both chambers of Congress and even multiple governorships.
"I would like to wish a Happy Thanksgiving to even those who issued fake Economic Numbers, just prior to the Election, and corrected them yesterday, three weeks late, showing that the GDP was actually 4.3%, versus 3.4%, A RECORD SETTING ERROR, and one so grave that it should be immediately investigated," Trump wrote.
However, the difference between the advance estimate and the figure in the second release is far from being an all-time record. It was the largest revision since the 1.2 percentage point revision seen in the second quarter of 2020.
On an absolute basis, the latest revision was tied for 16th among all revisions from the advance estimate to the second release since 1990. It also tied four other quarters with a similar 0.9 percentage point difference — and was approximately double the average revision of 0.43 percentage points for all 147 quarters.
The upward revision shows Trump's policies are "delivering results" that defy expectations, White House spokesman Matthew Middleton told CNBC.
Nothing new
Revisions to U.S. economic numbers are not out of the ordinary. Initial reports count on partial survey data and early estimates. Those data are later updated with more survey responses — which sometimes leads to changes from the initial reports.
GDP data is revised repeatedly over a five year period. By the time the final revision is done, the average absolute error from the second release to the final is 1.14 percentage points.
The advance estimate for Q3 U.S. GDP, which came just days before Election Day in early November, was still better than the figure economists had expected at the time. It also showed a significant step-up in growth from the second quarter.
Because that was a strong showing for the economy, some on Wall Street consider this week's revision to be a confirmation of the economy's recent growth trend.
Jim Baird of Plante Moran Financial Advisors said immediately following the release that it "reinforces an increasingly familiar tension" that the economy is "performing quite well, but its resilience also gives the Fed an even stronger case for further rate hikes."
"The economy isn't merely hanging in there. It continues to demonstrate considerable resilience, with consumers spending, businesses investing and few signs that restrictive monetary policy is creating significant cracks in the broader expansion," the firm's chief investment officer said.
Traders are currently pricing in a nearly 100% chance of a hike at the Federal Open Market Committee's December meeting, per the CME FedWatch tool. They're also anticipating an additional hike in January.
— CNBC's Jeff Cox and Fred Imbert contributed reporting`,
    bodyJa: `President Donald Trump on Thursday falsely deemed the latest gross domestic product revision a mistake, claiming that it should be "immediately investigated."
Data released Wednesday from the Commerce Department revealed that the U.S. economy exhibited much stronger growth for the third quarter than initially estimated, showing that real GDP grew at a 4.3% annualized rate. That was revised upward from the department's advance estimate of 3.4%.
That revision was a "RECORD SETTING ERROR," Trump said in a Truth Social post, suggesting that the initial release could have influenced the outcome of the 2026 U.S. midterm elections, where Democrats flipped both chambers of Congress and even multiple governorships.
"I would like to wish a Happy Thanksgiving to even those who issued fake Economic Numbers, just prior to the Election, and corrected them yesterday, three weeks late, showing that the GDP was actually 4.3%, versus 3.4%, A RECORD SETTING ERROR, and one so grave that it should be immediately investigated," Trump wrote.
However, the difference between the advance estimate and the figure in the second release is far from being an all-time record. It was the largest revision since the 1.2 percentage point revision seen in the second quarter of 2020.
On an absolute basis, the latest revision was tied for 16th among all revisions from the advance estimate to the second release since 1990. It also tied four other quarters with a similar 0.9 percentage point difference — and was approximately double the average revision of 0.43 percentage points for all 147 quarters.
The upward revision shows Trump's policies are "delivering results" that defy expectations, White House spokesman Matthew Middleton told CNBC.
Nothing new
Revisions to U.S. economic numbers are not out of the ordinary. Initial reports count on partial survey data and early estimates. Those data are later updated with more survey responses — which sometimes leads to changes from the initial reports.
GDP data is revised repeatedly over a five year period. By the time the final revision is done, the average absolute error from the second release to the final is 1.14 percentage points.
The advance estimate for Q3 U.S. GDP, which came just days before Election Day in early November, was still better than the figure economists had expected at the time. It also showed a significant step-up in growth from the second quarter.
Because that was a strong showing for the economy, some on Wall Street consider this week's revision to be a confirmation of the economy's recent growth trend.
Jim Baird of Plante Moran Financial Advisors said immediately following the release that it "reinforces an increasingly familiar tension" that the economy is "performing quite well, but its resilience also gives the Fed an even stronger case for further rate hikes."
"The economy isn't merely hanging in there. It continues to demonstrate considerable resilience, with consumers spending, businesses investing and few signs that restrictive monetary policy is creating significant cracks in the broader expansion," the firm's chief investment officer said.
Traders are currently pricing in a nearly 100% chance of a hike at the Federal Open Market Committee's December meeting, per the CME FedWatch tool. They're also anticipating an additional hike in January.
— CNBC's Jeff Cox and Fred Imbert contributed reporting`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/26/trump-gdp-revision-investigation.html",
    publishedAt: "2026-11-26T21:13:17+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 8,
  },
  {
    id: "faisal-islam-why-trump-s-new-tariffs-are-f42fab11",
    title: "Faisal Islam: Why Trump's new tariffs are less of a threat",
    titleJa: "Faisal Islam: Why Trump's new tariffs are less of a threat",
    summaryJa: "Other countries have rerouted trade in response to his first tariff salvo, now they are looking beyond Trump's tenure.",
    bodyOriginal: `Faisal Islam: Why Trump's new tariffs are less of a threat
- Published
There was none of last April's fanfare, the Rose Garden reveal, the gameshow blue board or "Liberation Day" rhetoric surrounding Trump's tariff announcement this week.
Instead there is something rather tentative about this latest exercise with talk of further negotiations.
"We expect to have a broad, even a plurilateral negotiation to talk about excess capacity and how to resolve it," US Trade Representative Jamieson Greer told CNBC.
Around the world the view is that this week's announcement is an attempt to shore up the domestic legal underpinning of these tariffs, more than a fundamental change in the Trump trade agenda.
The tariffs are also not due to come in until January or possibly February, after a period of consultation. There has already been eight months of process and hearings, and the rates announced are upper ceilings, often up for negotiation. It's quite the contrast to the overnight shock meted out to the world last April.
Still, the USA is making the argument that large swathes of the rest of the world, including allies, are harming the US goods trade position by supporting their own industries. This is the basis for the tariffs, in large part replacing the previous tariffs justified on "forced labour" provisions.
The UK, which was unaffected by the new tariff announcements, remains caught by the forced labour provisions, albeit at a rate of 10% extra on global tariffs. There was no move in response to the UK's digital services tax.
It means for many important countries there are now two legal bases upon which the Trump tariffs rest, after the Supreme Court struck down the original emergency basis earlier this year. A group of 25 states has taken the Trump administration to court to strike down the forced labour tariffs.
The tariffs will have to be finalised under a Democrat Congress, which has influence, but not power. The Speaker-designate Hakeem Jeffries said this week that the new House would in its first 100 days "move aggressively to… repeal the Trump tariffs".
The Chinese rate of 20% is the truce rate from last year's Trump-Xi deal. The truce is due to expire in mid-January. Beijing's response was muted, no retaliation, criticism of industrial overcapacity as a "false issue", and a call to implement the Xi-Trump deal. The leverage over China has weakened, with the US share of its exports dropping to around 10% this year, down from 15%, just two years ago, and 19% in 2018.
US announces new tariffs on host of countries including China
- Published17 hours ago
New UK-EU treaty has 10-year termination clause
- Published5 hours ago
However, the most interesting spot to focus on is closer to home for Trump. Over half of Canada tariffs are authorised under "Section 338" of the 1930s Smoot-Hawley act. There is already a Senate Bill to repeal them, and it is possible that there would be enough rebel Republicans in the House and Senate to threaten to over-ride any Presidential veto. The incoming Senate Finance Committee chair Ron Wyden last week said Democrats were focussed on "figuring out a way to beat Trump and his veto".
Before that an interim deal is being sought, and Democrat senators such as Chris Coons are appearing on Canadian TV, telling CBC, external: "Frankly, if you can get an interim deal, I'd take it, and then put it to us in the new majority to legislate an even better deal."
The rest of world is watching the machinations in Washington and also looking beyond Donald Trump's tenure.
It pays to look at how the initial Trump trade-quake has reshaped the pattern of world trade already.
The rest of the world has rerouted its trade flows around Donald Trump's tariff wall, proving far more resilient than expected. In cash terms, China's exports so far in 2026 are down about 8% on 2024, but that is more than 25 times made up for by its increased exports to everywhere else.
Canada has seen flat exports to the USA since tariffs, fewer cars and lumber, but pricier flows of energy. Its exports, especially commodities, to the rest of the world have rocketed.
This means that next month's G20 summit at the president's Miami resort is an important moment. In general US allies have not rocked the boat, accepting the lower level of tariffs as part of the new reality. Could the middle powers choose to upset their host in Florida next month?
The bigger question however, is how much the Democrats decide to keep of the America First trade agenda. It will not be all, but nor will it be nothing. Economists now expect some of these tariffs to stay in place for years.`,
    bodyJa: `Faisal Islam: Why Trump's new tariffs are less of a threat
- Published
There was none of last April's fanfare, the Rose Garden reveal, the gameshow blue board or "Liberation Day" rhetoric surrounding Trump's tariff announcement this week.
Instead there is something rather tentative about this latest exercise with talk of further negotiations.
"We expect to have a broad, even a plurilateral negotiation to talk about excess capacity and how to resolve it," US Trade Representative Jamieson Greer told CNBC.
Around the world the view is that this week's announcement is an attempt to shore up the domestic legal underpinning of these tariffs, more than a fundamental change in the Trump trade agenda.
The tariffs are also not due to come in until January or possibly February, after a period of consultation. There has already been eight months of process and hearings, and the rates announced are upper ceilings, often up for negotiation. It's quite the contrast to the overnight shock meted out to the world last April.
Still, the USA is making the argument that large swathes of the rest of the world, including allies, are harming the US goods trade position by supporting their own industries. This is the basis for the tariffs, in large part replacing the previous tariffs justified on "forced labour" provisions.
The UK, which was unaffected by the new tariff announcements, remains caught by the forced labour provisions, albeit at a rate of 10% extra on global tariffs. There was no move in response to the UK's digital services tax.
It means for many important countries there are now two legal bases upon which the Trump tariffs rest, after the Supreme Court struck down the original emergency basis earlier this year. A group of 25 states has taken the Trump administration to court to strike down the forced labour tariffs.
The tariffs will have to be finalised under a Democrat Congress, which has influence, but not power. The Speaker-designate Hakeem Jeffries said this week that the new House would in its first 100 days "move aggressively to… repeal the Trump tariffs".
The Chinese rate of 20% is the truce rate from last year's Trump-Xi deal. The truce is due to expire in mid-January. Beijing's response was muted, no retaliation, criticism of industrial overcapacity as a "false issue", and a call to implement the Xi-Trump deal. The leverage over China has weakened, with the US share of its exports dropping to around 10% this year, down from 15%, just two years ago, and 19% in 2018.
US announces new tariffs on host of countries including China
- Published17 hours ago
New UK-EU treaty has 10-year termination clause
- Published5 hours ago
However, the most interesting spot to focus on is closer to home for Trump. Over half of Canada tariffs are authorised under "Section 338" of the 1930s Smoot-Hawley act. There is already a Senate Bill to repeal them, and it is possible that there would be enough rebel Republicans in the House and Senate to threaten to over-ride any Presidential veto. The incoming Senate Finance Committee chair Ron Wyden last week said Democrats were focussed on "figuring out a way to beat Trump and his veto".
Before that an interim deal is being sought, and Democrat senators such as Chris Coons are appearing on Canadian TV, telling CBC, external: "Frankly, if you can get an interim deal, I'd take it, and then put it to us in the new majority to legislate an even better deal."
The rest of world is watching the machinations in Washington and also looking beyond Donald Trump's tenure.
It pays to look at how the initial Trump trade-quake has reshaped the pattern of world trade already.
The rest of the world has rerouted its trade flows around Donald Trump's tariff wall, proving far more resilient than expected. In cash terms, China's exports so far in 2026 are down about 8% on 2024, but that is more than 25 times made up for by its increased exports to everywhere else.
Canada has seen flat exports to the USA since tariffs, fewer cars and lumber, but pricier flows of energy. Its exports, especially commodities, to the rest of the world have rocketed.
This means that next month's G20 summit at the president's Miami resort is an important moment. In general US allies have not rocked the boat, accepting the lower level of tariffs as part of the new reality. Could the middle powers choose to upset their host in Florida next month?
The bigger question however, is how much the Democrats decide to keep of the America First trade agenda. It will not be all, but nor will it be nothing. Economists now expect some of these tariffs to stay in place for years.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c6r7g4e3yep1o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-26T19:55:58+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/a44e/live/be7b3450-e9af-11f1-859a-37130cd3a1d7.jpg",
    readTime: 10,
  },
  {
    id: "semiconductor-chips-are-the-new-oil-here-c2472664",
    title: "Semiconductor chips are the new oil. Here's why",
    titleJa: "Semiconductor chips are the new oil. Here's why",
    summaryJa: "Semiconductor exports overtook oil and gas for the first time in 2026, as the AI boom fueled chip demand.",
    bodyOriginal: `The artificial intelligence boom has pushed semiconductors past oil and gas in global export value for the first time, according to a Deutsche Bank analysis of International Trade Centre data.
Yet the milestone arrives at an awkward moment, just as investors reassess the outlook for artificial intelligence spending and drive down the price of semiconductor stocks. Last week, before Monday's breathtaking reversal, semiconductor stocks suffered their worst weekly loss in a quarter century, with the PHLX Semiconductor Index (SOX) plunging nearly 11% last Friday alone, capping a more than 17% weekly decline.
Nvidia soared more than 31% Monday after the leading maker of artificial intelligence chips had fallen for a seventh straight week, plunging 46% during that stretch. Then it fell again, dropping almost 10% on Tuesday and Wednesday. Advanced Micro Devices tumbled 20% in two days last Thursday and Friday. Micron Technology sank 27% over the seven days ended last Friday.
"For decades we've talked about the petrodollar. Perhaps increasingly we need to think about the chip dollar," Jim Reid, global head of macro and thematic research at Deutsche Bank wrote in a report this month.
Semiconductor exports overtook oil and gas for the first time during the January-March quarter of 2026, reaching about $1.61 trillion, compared with $1.53 trillion for oil and gas, the report said, using four-quarter rolling totals.
The gap widened in the second quarter, when semiconductor exports totaled about $1.60 trillion and oil and gas exports reached about $1.47 trillion. Disruptions to oil supplies through the Strait of Hormuz after the Iran war helped widen the gap. Daily oil flows through the Strait collapsed nearly 77%, to 4.9 million barrels in the second quarter of 2026 from 21.6 million barrels in the fourth quarter of 2025, according to the U.S. Energy Information Administration.
AI driven demand
Yet the demand for semiconductors has proven insatiable in the face of soaring data center construction, boosting global trade in the increasingly scarce AI component. Hundreds of billions of dollars of orders for graphics processing units and data centers aim at providing AI computing power, Rothschild & Co. Redburn wrote in a report last Thursday.
"Compute will be the new commodity fueling this transformation on a global scale," Rothschild analyst Cara Thomson said.
The shift toward chips has macroeconomic implications just as the explosion in oil trade did in the 1970s.
Oil-exporting countries historically recycled much of their surpluses into the purchase of U.S. Treasuries and other bonds, helping finance U.S. deficits and underpin demand for other government debt.
Reid at Deutsche Bank said that since semiconductor-surplus countries in Asia are more closely tied to U.S. tech companies, some chip-export earnings could flow back into U.S. technology stocks, startups and data centers, further helping to finance the AI investment cycle.
The changing dynamics in global trade could also tilt the mix of global financial flows, Reid said. "So welcome to the chip-dollar era: potentially more growth, more excitement, more volatility, and structurally higher yields" in corporate and government debt.`,
    bodyJa: `The artificial intelligence boom has pushed semiconductors past oil and gas in global export value for the first time, according to a Deutsche Bank analysis of International Trade Centre data.
Yet the milestone arrives at an awkward moment, just as investors reassess the outlook for artificial intelligence spending and drive down the price of semiconductor stocks. Last week, before Monday's breathtaking reversal, semiconductor stocks suffered their worst weekly loss in a quarter century, with the PHLX Semiconductor Index (SOX) plunging nearly 11% last Friday alone, capping a more than 17% weekly decline.
Nvidia soared more than 31% Monday after the leading maker of artificial intelligence chips had fallen for a seventh straight week, plunging 46% during that stretch. Then it fell again, dropping almost 10% on Tuesday and Wednesday. Advanced Micro Devices tumbled 20% in two days last Thursday and Friday. Micron Technology sank 27% over the seven days ended last Friday.
"For decades we've talked about the petrodollar. Perhaps increasingly we need to think about the chip dollar," Jim Reid, global head of macro and thematic research at Deutsche Bank wrote in a report this month.
Semiconductor exports overtook oil and gas for the first time during the January-March quarter of 2026, reaching about $1.61 trillion, compared with $1.53 trillion for oil and gas, the report said, using four-quarter rolling totals.
The gap widened in the second quarter, when semiconductor exports totaled about $1.60 trillion and oil and gas exports reached about $1.47 trillion. Disruptions to oil supplies through the Strait of Hormuz after the Iran war helped widen the gap. Daily oil flows through the Strait collapsed nearly 77%, to 4.9 million barrels in the second quarter of 2026 from 21.6 million barrels in the fourth quarter of 2025, according to the U.S. Energy Information Administration.
AI driven demand
Yet the demand for semiconductors has proven insatiable in the face of soaring data center construction, boosting global trade in the increasingly scarce AI component. Hundreds of billions of dollars of orders for graphics processing units and data centers aim at providing AI computing power, Rothschild & Co. Redburn wrote in a report last Thursday.
"Compute will be the new commodity fueling this transformation on a global scale," Rothschild analyst Cara Thomson said.
The shift toward chips has macroeconomic implications just as the explosion in oil trade did in the 1970s.
Oil-exporting countries historically recycled much of their surpluses into the purchase of U.S. Treasuries and other bonds, helping finance U.S. deficits and underpin demand for other government debt.
Reid at Deutsche Bank said that since semiconductor-surplus countries in Asia are more closely tied to U.S. tech companies, some chip-export earnings could flow back into U.S. technology stocks, startups and data centers, further helping to finance the AI investment cycle.
The changing dynamics in global trade could also tilt the mix of global financial flows, Reid said. "So welcome to the chip-dollar era: potentially more growth, more excitement, more volatility, and structurally higher yields" in corporate and government debt.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/26/semiconductor-chips-are-the-new-oil-heres-why.html",
    publishedAt: "2026-11-26T17:52:15+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 8,
  },
  {
    id: "when-will-poundland-shops-close-five-key-574745a9",
    title: "When will Poundland shops close? Five key questions answered",
    titleJa: "When will Poundland shops close? Five key questions answered",
    summaryJa: "When will Poundland shops close? Five key questions answered- Published",
    bodyOriginal: `When will Poundland shops close? Five key questions answered
- Published
Poundland has collapsed into administration, leaving the jobs of its 11,000 staff in doubt in the run-up to Christmas.
The company has appointed consultancy Alix Partners to oversee a sale of part or all of the discount retailer, with questions remaining about the future of the company.
1. When will Poundland shops close?
This is the question that is most difficult to answer.
Poundland shops will remain open as usual for now. The firm collapsing has acted as a reset in the process of selling it.
Administrators are looking to either sell the business as a whole, or to break it up, which is the more likely outcome.
When Poundland was still a going concern, Irish property firm Martin Property Group made an offer for it. But a source said the group was now "unlikely" to make a fresh bid due to "irreparable harm" to the brand from the administration process.
Before the collapse, Fortress, which owns rival budget chain Poundstretcher, was interested in buying about 200 of the stores, and wanted to keep those trading under the Poundland brand.
But Fortress's position at the moment is unclear. The BBC understands it is considering selling Poundstretcher, a move first reported by Bloomberg.
A decision on Poundstretcher could come before the end of this week. However, Fortress has declined to comment.
2. Why is Poundland closing down?
That depends on who you ask.
When the chain was sold by Pepco last year for £1 it was struggling. It suffered a £68m loss that year.
Poundland's managing director Barry Williams said Poundland had been seeing a "strong recovery" and recorded a profit by one measure in the first nine months of this year.
Poundland's management paint a picture of a retailer that was turning a corner until the owner, US investment firm Gordon Brothers, pulled the plug on funding for day-to-day expenses such as buying stock.
The Usdaw union, which represents shopworkers, claim the owners forced Poundland into administration.
Labour MP Antonia Bance said she was "pretty appalled" by the conduct of Gordon Brothers over the past few weeks, and that it was going to make much bigger profits by breaking up the business rather than by keeping it going.
However, Gordon Brothers insisted the business was only turning a profit on paper, and had missed budget forecasts.
A spokeswoman said while the management team had made £100m in cost reductions, the business had moved from a £70m loss to "around break-even".
"Break-even is different from generating the cash needed to buy stock, invest, and withstand increasing economic pressures," the spokeswoman said. "A few good weeks do not make a turnaround."
Poundland repeatedly missed budget targets over the year, the spokeswoman added.
Gordon Brothers was concerned that as inflation goes up next year, those pressures would have helped to make the business unviable, it said.
And Julie Palmer, managing partner at insolvency agency Begbies Traynor, said Poundland's collapse "seemed somehow inevitable" due to challenges facing retailers - including higher costs to employ staff.
3. What will happen to staff?
Stores are still trading while the administrators work out if the business is viable.
The funds locked up by Gordon Brothers - at the last count about £70m - have now been released by the administrators.
This has turned the taps back on, so staff will continue to be paid in the run-up to Christmas, and so will suppliers.
But here's the catch: the administrators have a legal obligation to maximise value for "secured" creditors. It means the owners, Gordon Brothers, are at the head of the queue for being paid back the loans that were stumbling blocks in the negotiations.
But more importantly for staff, if the administrators can get more value by breaking up the business than by selling it as a whole, then that is what they have to do, even if the business would be viable.
If the business is broken up and its stores are sold off, the new owners would not be obliged to keep staff on.
4. Will shoppers still be able to buy from Poundland?
In the short term, yes.
From 26 November you will not get a refund for goods if you change your mind about the purchase. If the item is faulty you will still get a refund.
The immediate reason Poundland collapsed was that Gordon Brothers locked up funds for the day-to-day running of the business, including to pay suppliers.
This meant that stock was running low at Poundland.
But those funds have now been unlocked, meaning suppliers can be paid, and supply chains can be re-established, at least in the short term.
If an item is on the shelves, then shoppers can buy it.
5. How will Poundland's collapse change the High Street?
That depends on what happens next.
Administrators will have to get the best value for creditors, which could mean selling the business as it stands.
But if Poundland is broken up, administrators could sell the brand without the stores, or the brand along with some of the stores, or the stores without the Poundland brand, to other retailers.
As a result there could be fewer discount stores on the High Street, providing less incentive for other retailers to keep prices down.
"Poundland is a place they go on the High Street to get bargains and... given the cost of living challenges we face, that is of concern to us in government," Wes Streeting, the defence secretary, told the BBC on Thursday.
Poundland's customers may well turn to rival budget retailers in the hunt for bargains.
Get in touch
Are you a Poundland employee? Tell us your story. Get in touch.`,
    bodyJa: `When will Poundland shops close? Five key questions answered
- Published
Poundland has collapsed into administration, leaving the jobs of its 11,000 staff in doubt in the run-up to Christmas.
The company has appointed consultancy Alix Partners to oversee a sale of part or all of the discount retailer, with questions remaining about the future of the company.
1. When will Poundland shops close?
This is the question that is most difficult to answer.
Poundland shops will remain open as usual for now. The firm collapsing has acted as a reset in the process of selling it.
Administrators are looking to either sell the business as a whole, or to break it up, which is the more likely outcome.
When Poundland was still a going concern, Irish property firm Martin Property Group made an offer for it. But a source said the group was now "unlikely" to make a fresh bid due to "irreparable harm" to the brand from the administration process.
Before the collapse, Fortress, which owns rival budget chain Poundstretcher, was interested in buying about 200 of the stores, and wanted to keep those trading under the Poundland brand.
But Fortress's position at the moment is unclear. The BBC understands it is considering selling Poundstretcher, a move first reported by Bloomberg.
A decision on Poundstretcher could come before the end of this week. However, Fortress has declined to comment.
2. Why is Poundland closing down?
That depends on who you ask.
When the chain was sold by Pepco last year for £1 it was struggling. It suffered a £68m loss that year.
Poundland's managing director Barry Williams said Poundland had been seeing a "strong recovery" and recorded a profit by one measure in the first nine months of this year.
Poundland's management paint a picture of a retailer that was turning a corner until the owner, US investment firm Gordon Brothers, pulled the plug on funding for day-to-day expenses such as buying stock.
The Usdaw union, which represents shopworkers, claim the owners forced Poundland into administration.
Labour MP Antonia Bance said she was "pretty appalled" by the conduct of Gordon Brothers over the past few weeks, and that it was going to make much bigger profits by breaking up the business rather than by keeping it going.
However, Gordon Brothers insisted the business was only turning a profit on paper, and had missed budget forecasts.
A spokeswoman said while the management team had made £100m in cost reductions, the business had moved from a £70m loss to "around break-even".
"Break-even is different from generating the cash needed to buy stock, invest, and withstand increasing economic pressures," the spokeswoman said. "A few good weeks do not make a turnaround."
Poundland repeatedly missed budget targets over the year, the spokeswoman added.
Gordon Brothers was concerned that as inflation goes up next year, those pressures would have helped to make the business unviable, it said.
And Julie Palmer, managing partner at insolvency agency Begbies Traynor, said Poundland's collapse "seemed somehow inevitable" due to challenges facing retailers - including higher costs to employ staff.
3. What will happen to staff?
Stores are still trading while the administrators work out if the business is viable.
The funds locked up by Gordon Brothers - at the last count about £70m - have now been released by the administrators.
This has turned the taps back on, so staff will continue to be paid in the run-up to Christmas, and so will suppliers.
But here's the catch: the administrators have a legal obligation to maximise value for "secured" creditors. It means the owners, Gordon Brothers, are at the head of the queue for being paid back the loans that were stumbling blocks in the negotiations.
But more importantly for staff, if the administrators can get more value by breaking up the business than by selling it as a whole, then that is what they have to do, even if the business would be viable.
If the business is broken up and its stores are sold off, the new owners would not be obliged to keep staff on.
4. Will shoppers still be able to buy from Poundland?
In the short term, yes.
From 26 November you will not get a refund for goods if you change your mind about the purchase. If the item is faulty you will still get a refund.
The immediate reason Poundland collapsed was that Gordon Brothers locked up funds for the day-to-day running of the business, including to pay suppliers.
This meant that stock was running low at Poundland.
But those funds have now been unlocked, meaning suppliers can be paid, and supply chains can be re-established, at least in the short term.
If an item is on the shelves, then shoppers can buy it.
5. How will Poundland's collapse change the High Street?
That depends on what happens next.
Administrators will have to get the best value for creditors, which could mean selling the business as it stands.
But if Poundland is broken up, administrators could sell the brand without the stores, or the brand along with some of the stores, or the stores without the Poundland brand, to other retailers.
As a result there could be fewer discount stores on the High Street, providing less incentive for other retailers to keep prices down.
"Poundland is a place they go on the High Street to get bargains and... given the cost of living challenges we face, that is of concern to us in government," Wes Streeting, the defence secretary, told the BBC on Thursday.
Poundland's customers may well turn to rival budget retailers in the hunt for bargains.
Get in touch
Are you a Poundland employee? Tell us your story. Get in touch.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c6z9d3pv93glo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-26T17:21:21+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/b760/live/084c3aa0-e9b2-11f1-859a-37130cd3a1d7.jpg",
    readTime: 10,
  },
  {
    id: "millions-of-people-to-see-average-monthl-8a9be5d6",
    title: "Millions of people to see average monthly mortgage payments rise by £100",
    titleJa: "Millions of people to see average monthly mortgage payments rise by £100",
    summaryJa: "More people face higher mortgage repayments when they roll off a fixed deal than previously estimated.",
    bodyOriginal: `Millions of people to see average monthly mortgage payments rise by £100
- Published
More people face higher mortgage repayments when they roll off a fixed deal than previously estimated, new figures from the the Bank of England show.
About 6.5 million owners are forecast to see their monthly repayment jump by £100 on average when they move onto their next deal by the end of 2029, new data in its Financial Stability Report reveals.
That is more the double the £45-a-month hike that the Bank estimated in its last report in July.
In the shorter term, about one million of those homeowners, who are on mortgage rates below 3% and due to refinance by the end of next year, will see an average £200 increase in their monthly repayments.
For borrowers, the interest rate on a fixed mortgage does not change until it expires, usually after two or five years, and a new one is chosen to replace it. The vast majority of homeowners and buyers have this kind of mortgage.
Since the Iran war began, global economic uncertainty has been pushing up the cost of deals, with the average rates on two and five year fixed mortgages at their highest for about three years.
On Thursday, the average rate on a two-year deal was 5.99%, and at 6% for a five-year deal, according to the financial information service Moneyfacts.
Analysts have described the situation as "brutal" for homeowners coming to the end of their fixed deals.
However, the Bank's report points out that the average £100 increase in monthly repayments was half the rise experienced by those refinancing during 2023 and 2024.
Dawn Fazackerley-King is a Pilates instructor who lives near Ipswich and has previously spoken to the BBC about her struggles with the cost of living.
She was on a five-year fixed deal at 1.4%, which she took out in January 2022. But the mother-of-two is about to refix for two years and the best deal she can find is a 5.69% loan. That will push her costs up by about £200 a month.
She is far from alone, with one million homeowners facing a similar increase often because they are coming off deals that were agreed before interest rates began rising in 2022.
The Bank's report said that households facing higher payments "may need to reduce discretionary spending or draw down savings as higher energy and other essential costs feed through".
Most had savings buffers but lower-income households, including renters, had less wriggle room owing to spending a greater proportion of their income on essentials.
Early in November, the Bank raised the benchmark interest rate, which influences borrowing costs for individuals and businesses, for the first time in more than three years, from 3.75% to 4%.
Some positive signs
The numbers could change were mortgage rates to fall, primarily if international economic volatility eased.
Even so, the Bank said around 350,000 were already projected to see monthly mortgage repayments fall when they fixed their next deal within three years.
The report also suggested there were no signs of an increase in borrowers defaulting on their loans, while UK households remained resilient.
"We have not seen the scale of mortgage arrears that we saw if you go back to earlier periods, the early 90s, the early 80s, actually even the financial crisis. And we are not seeing the scale of house repossessions, and that has to be a good thing," said the Bank's governor, Andrew Bailey.
However, separately, the Bank warned that cyber attacks had become a more prominent threat to the UK's financial stability.
Financial firms needed to "keep pace with the growing scale and sophistication of cyber threats", the report said.
Get in touch
Are your mortgage payments rising? Share your experience.
- Published18 November
- Published5 November
- Published4 November`,
    bodyJa: `Millions of people to see average monthly mortgage payments rise by £100
- Published
More people face higher mortgage repayments when they roll off a fixed deal than previously estimated, new figures from the the Bank of England show.
About 6.5 million owners are forecast to see their monthly repayment jump by £100 on average when they move onto their next deal by the end of 2029, new data in its Financial Stability Report reveals.
That is more the double the £45-a-month hike that the Bank estimated in its last report in July.
In the shorter term, about one million of those homeowners, who are on mortgage rates below 3% and due to refinance by the end of next year, will see an average £200 increase in their monthly repayments.
For borrowers, the interest rate on a fixed mortgage does not change until it expires, usually after two or five years, and a new one is chosen to replace it. The vast majority of homeowners and buyers have this kind of mortgage.
Since the Iran war began, global economic uncertainty has been pushing up the cost of deals, with the average rates on two and five year fixed mortgages at their highest for about three years.
On Thursday, the average rate on a two-year deal was 5.99%, and at 6% for a five-year deal, according to the financial information service Moneyfacts.
Analysts have described the situation as "brutal" for homeowners coming to the end of their fixed deals.
However, the Bank's report points out that the average £100 increase in monthly repayments was half the rise experienced by those refinancing during 2023 and 2024.
Dawn Fazackerley-King is a Pilates instructor who lives near Ipswich and has previously spoken to the BBC about her struggles with the cost of living.
She was on a five-year fixed deal at 1.4%, which she took out in January 2022. But the mother-of-two is about to refix for two years and the best deal she can find is a 5.69% loan. That will push her costs up by about £200 a month.
She is far from alone, with one million homeowners facing a similar increase often because they are coming off deals that were agreed before interest rates began rising in 2022.
The Bank's report said that households facing higher payments "may need to reduce discretionary spending or draw down savings as higher energy and other essential costs feed through".
Most had savings buffers but lower-income households, including renters, had less wriggle room owing to spending a greater proportion of their income on essentials.
Early in November, the Bank raised the benchmark interest rate, which influences borrowing costs for individuals and businesses, for the first time in more than three years, from 3.75% to 4%.
Some positive signs
The numbers could change were mortgage rates to fall, primarily if international economic volatility eased.
Even so, the Bank said around 350,000 were already projected to see monthly mortgage repayments fall when they fixed their next deal within three years.
The report also suggested there were no signs of an increase in borrowers defaulting on their loans, while UK households remained resilient.
"We have not seen the scale of mortgage arrears that we saw if you go back to earlier periods, the early 90s, the early 80s, actually even the financial crisis. And we are not seeing the scale of house repossessions, and that has to be a good thing," said the Bank's governor, Andrew Bailey.
However, separately, the Bank warned that cyber attacks had become a more prominent threat to the UK's financial stability.
Financial firms needed to "keep pace with the growing scale and sophistication of cyber threats", the report said.
Get in touch
Are your mortgage payments rising? Share your experience.
- Published18 November
- Published5 November
- Published4 November`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cwg5r02zel9qo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-26T14:00:20+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/0133/live/865c5960-e9a9-11f1-99b6-a35a62fa4264.jpg",
    readTime: 9,
  },
  {
    id: "simon-jack-is-poundland-s-us-owner-to-bl-3759a77a",
    title: "Simon Jack: Is Poundland's US owner to blame for its collapse?",
    titleJa: "Simon Jack: Is Poundland's US owner to blame for its collapse?",
    summaryJa: "Poundland's management and MPs blame the retailer's owners, Gordon Brothers, but the US firm says without them the chain would have collapsed last year.",
    bodyOriginal: `Simon Jack: Is Poundland's US owner to blame for its collapse?
- Published
The blame game for the demise of Poundland is in full swing.
The number one target is US-based Gordon Brothers who bought the discount chain for £1 and have taken nearly £20m out of the business already.
Gordon Brothers stand to get paid back a further £22.5m, as their share of an existing £30m loan is set to be one of the first debts that the administrators will have to pay out of the proceeds of any sale of the business in whole or in part.
The team running Poundland blame the owners for strangling their ability to turn the business around, saying that their access to Poundland's own cash was restricted, leaving them unable to fully restock ahead of the crucial Christmas period.
They point to improving sales over recent months as proof the business had a future.
MPs also laid into the US firm with members of the Business Committee accusing it of "predatory capitalism" and "asset stripping".
Poundland collapses putting 11,000 jobs at risk
- Published12 hours ago
What's gone wrong at Poundland?
- Published11 hours ago
No-one appears to dispute the fact that Gordon Brothers' insistence that they get paid most of their £22.5m debt was a major stumbling block to a sale.
Potential buyers balked at paying out millions on a loan that Gordon Brothers inherited for nothing.
Martin Property Group offered £5m up front with the balance to be deferred, while Xyra Holdings offered £12.5m up front but, according to sources close to the deal, were thought unable to actually pay.
Two versions
Unsurprisingly perhaps, Gordon Brothers dispute a lot of how they have been characterised.
First, they insist that they lent the business £85m to try to keep it alive for the 17 months since they bought it. Without them, this collapse would have happened in June last year.
The £20m taken out of the business since then has mostly been interest on that loan.
Despite brief periods of sales growth compared with a year earlier, Poundland was not generating enough cash to sustain itself. Sales were forecast to be £115m lower than predicted when Gordon Brothers bought the business - more than offsetting a £100m cost-cutting programme.
Like other retailers Poundland was hit by rising labour costs, employment taxes and business rates.
In the end, argue Gordon Brothers, none of the potential buyers could meet their terms and prove they had the money and expertise to make a go of it.
Such is the discrepancy between the two versions that the chair of the Business Committee wants Gordon Brothers and the management back in front of them to get to the truth.
It is still possible that a bidder may emerge in the coming hours and days to save the business as a whole but most industry observers think that looks unlikely.
Julie Palmer of insolvency specialists Begbies Traynor told the BBC: "This sort of direction of travel seemed somehow inevitable. Obviously, if one of those interested parties steps up and buys the whole business and assets, that's the best, quickest and cleanest outcome. I think realistically, though, there is a chance now that there will be a breakup."
Like previous busts such as Woolworths, BHS and Wilko, many of these stores will find new owners and they will need local, experienced staff.
But none of that will be much comfort to those workers facing grave uncertainty a month before Christmas, when they should be at their busiest and most needed.
Gordon Brothers specialise in situations of commercial distress. When they take on a distressed company, they try to make sure that the worst possible outcome is still one that makes money for them.
In this situation, the worst outcome would mean they get paid back £22.5m, earn interest on the loan they provided the company (secured against the company assets) and a few other miscellaneous fees.
Little wonder then that many people say they had little incentive to strain every sinew to secure a buyer. They argue they kept a business that would have collapsed last June going for another 17 months, which extended employment for thousands of workers.
But if, as some retail veterans have told the BBC, Gordon Brothers never really intended to turn this business around, why would the previous owners PepCo give them a no-lose gamble? Why didn't they do what Gordon Brothers are doing - profiting with no risk?
The answer is simple: Pepco have other businesses, which could have got tangled up in the administration of Poundland.
Get in touch
Are you a Poundland employee? Tell us your story. Get in touch.`,
    bodyJa: `Simon Jack: Is Poundland's US owner to blame for its collapse?
- Published
The blame game for the demise of Poundland is in full swing.
The number one target is US-based Gordon Brothers who bought the discount chain for £1 and have taken nearly £20m out of the business already.
Gordon Brothers stand to get paid back a further £22.5m, as their share of an existing £30m loan is set to be one of the first debts that the administrators will have to pay out of the proceeds of any sale of the business in whole or in part.
The team running Poundland blame the owners for strangling their ability to turn the business around, saying that their access to Poundland's own cash was restricted, leaving them unable to fully restock ahead of the crucial Christmas period.
They point to improving sales over recent months as proof the business had a future.
MPs also laid into the US firm with members of the Business Committee accusing it of "predatory capitalism" and "asset stripping".
Poundland collapses putting 11,000 jobs at risk
- Published12 hours ago
What's gone wrong at Poundland?
- Published11 hours ago
No-one appears to dispute the fact that Gordon Brothers' insistence that they get paid most of their £22.5m debt was a major stumbling block to a sale.
Potential buyers balked at paying out millions on a loan that Gordon Brothers inherited for nothing.
Martin Property Group offered £5m up front with the balance to be deferred, while Xyra Holdings offered £12.5m up front but, according to sources close to the deal, were thought unable to actually pay.
Two versions
Unsurprisingly perhaps, Gordon Brothers dispute a lot of how they have been characterised.
First, they insist that they lent the business £85m to try to keep it alive for the 17 months since they bought it. Without them, this collapse would have happened in June last year.
The £20m taken out of the business since then has mostly been interest on that loan.
Despite brief periods of sales growth compared with a year earlier, Poundland was not generating enough cash to sustain itself. Sales were forecast to be £115m lower than predicted when Gordon Brothers bought the business - more than offsetting a £100m cost-cutting programme.
Like other retailers Poundland was hit by rising labour costs, employment taxes and business rates.
In the end, argue Gordon Brothers, none of the potential buyers could meet their terms and prove they had the money and expertise to make a go of it.
Such is the discrepancy between the two versions that the chair of the Business Committee wants Gordon Brothers and the management back in front of them to get to the truth.
It is still possible that a bidder may emerge in the coming hours and days to save the business as a whole but most industry observers think that looks unlikely.
Julie Palmer of insolvency specialists Begbies Traynor told the BBC: "This sort of direction of travel seemed somehow inevitable. Obviously, if one of those interested parties steps up and buys the whole business and assets, that's the best, quickest and cleanest outcome. I think realistically, though, there is a chance now that there will be a breakup."
Like previous busts such as Woolworths, BHS and Wilko, many of these stores will find new owners and they will need local, experienced staff.
But none of that will be much comfort to those workers facing grave uncertainty a month before Christmas, when they should be at their busiest and most needed.
Gordon Brothers specialise in situations of commercial distress. When they take on a distressed company, they try to make sure that the worst possible outcome is still one that makes money for them.
In this situation, the worst outcome would mean they get paid back £22.5m, earn interest on the loan they provided the company (secured against the company assets) and a few other miscellaneous fees.
Little wonder then that many people say they had little incentive to strain every sinew to secure a buyer. They argue they kept a business that would have collapsed last June going for another 17 months, which extended employment for thousands of workers.
But if, as some retail veterans have told the BBC, Gordon Brothers never really intended to turn this business around, why would the previous owners PepCo give them a no-lose gamble? Why didn't they do what Gordon Brothers are doing - profiting with no risk?
The answer is simple: Pepco have other businesses, which could have got tangled up in the administration of Poundland.
Get in touch
Are you a Poundland employee? Tell us your story. Get in touch.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c62klzxvyzyqo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-26T13:40:46+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/db70/live/c33d5240-e999-11f1-a094-5fdc692f3e33.jpg",
    readTime: 10,
  },
  {
    id: "new-boss-appointed-to-lead-travelodge-a1442fef",
    title: "New boss appointed to lead Travelodge",
    titleJa: "New boss appointed to lead Travelodge",
    summaryJa: "The new CEO will lead the Thame-based company from 1 December following Jo Boydell's resignation.",
    bodyOriginal: `New boss appointed to lead Travelodge
- Published
Travelodge has appointed a former Tui executive to become its new boss from the start of December.
The former CEO of the Oxfordshire-based budget hotel chain Jo Boydell quit in the summer after safety issues were raised at many of its sites.
A woman staying at its Maidenhead hotel was sexually assaulted in December 2022 after a man lied to staff to get a key card to her room. Kyran Smith was jailed for seven-and-a-half years for the attack.
Peter Krueger will start his new role at Travelodge on Tuesday, replacing interim chief Ray Reidy who has led the company since Boydell quit.
She left the company after facing significant criticism over the handling of the sexual assault incident and wider safety concerns.
It prompted former prime minister Sir Keir Starmer to urge her to "seriously engage" with the government on the issue after she cancelled a meeting with MPs.
An independent review by Paul Greaney KC published in October found the sexual assault victim was treated in a "disgraceful" way and "fundamentally failed" by the hotel chain.
In an update on Thursday, Reidy said the business is "continuing to make further investments into room security, and the safety and security of our guests remains our top priority".
Travelodge said it will be making additional investments in room security "over the course of 2027".
Get in touch
Your Voice
- Published1 October`,
    bodyJa: `New boss appointed to lead Travelodge
- Published
Travelodge has appointed a former Tui executive to become its new boss from the start of December.
The former CEO of the Oxfordshire-based budget hotel chain Jo Boydell quit in the summer after safety issues were raised at many of its sites.
A woman staying at its Maidenhead hotel was sexually assaulted in December 2022 after a man lied to staff to get a key card to her room. Kyran Smith was jailed for seven-and-a-half years for the attack.
Peter Krueger will start his new role at Travelodge on Tuesday, replacing interim chief Ray Reidy who has led the company since Boydell quit.
She left the company after facing significant criticism over the handling of the sexual assault incident and wider safety concerns.
It prompted former prime minister Sir Keir Starmer to urge her to "seriously engage" with the government on the issue after she cancelled a meeting with MPs.
An independent review by Paul Greaney KC published in October found the sexual assault victim was treated in a "disgraceful" way and "fundamentally failed" by the hotel chain.
In an update on Thursday, Reidy said the business is "continuing to make further investments into room security, and the safety and security of our guests remains our top priority".
Travelodge said it will be making additional investments in room security "over the course of 2027".
Get in touch
Your Voice
- Published1 October`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cqx2wx89kg0eo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-26T12:03:49+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/a7c6/live/aeced5c0-e98c-11f1-9d1c-4dcc8fcde666.jpg",
    readTime: 4,
  },
  {
    id: "new-uk-eu-treaty-has-10-year-termination-072cd8f0",
    title: "New UK-EU treaty has 10-year termination clause, BBC understands",
    titleJa: "New UK-EU treaty has 10-year termination clause, BBC understands",
    summaryJa: "Text of the treaties will be published this afternoon, alongside legislation designed to enact the bulk of the deal.",
    bodyOriginal: `New UK-EU treaty has 10-year termination clause, BBC understands
- Published
The government and the EU are set to publish the texts of two treaties that were agreed last week as part of a post-Brexit reset.
The treaties will be published on Thursday afternoon, alongside legislation which is designed to enact the bulk of the deal.
The BBC understands the deal covering food exports has a 10-year termination clause that would mean if one party ended the agreement, they would have to pay to rebuild border checks infrastructure, which will be significantly scaled back as part of the new deal.
Opposition leader Kemi Badenoch has said she would scrap the deal and Reform UK's Nigel Farage has suggested he would refuse to pay.
The Brexit reset deal has already sparked debate about its benefits, its costs, and a wider discussion on the long-term UK-EU relationship.
The deal covers British food exports, emissions trading and a youth experience scheme.
Two of the three legal texts will be released on Thursday, covering the food trade and emissions trading scheme deals, alongside the government's cost-cutting bill to enact the deal.
New assessments of the impact of the deal on different sectors and regions of the country are also expected.
EU offers UK fresh deal on 'Made in Europe' scheme
- Published15 hours ago
Badenoch challenges Burnham over university fees for EU students
- Published15 hours ago
Farage helps launch new campaign against the UK rejoining the EU
- Published13 hours ago
Under the deal, food exporters will be significant beneficiaries from the scrapping of considerable red tape and checks, and dismantling of border facilities. An internal analysis forecasts a 16% boost to agricultural exports.
The industry and government hope the reduction in costs for food producers and sellers will be passed on to customers, but there may be no clear visible impact at the checkout.
Privately, industry insiders told the BBC earlier this week that there are too many moving parts in the world economy, in particular the energy price shock resulting from war in the Middle East.
Regarding the fine detail in the text of one of the treaties relating to the 10-year termination clause, European affairs minister Hamish Falconer said: "The Cutting Costs Bill allows us to implement two major trade agreements."
"It allows us to eliminate paperwork for our food and drink traders, protect billions of pounds worth of British exports from carbon taxes, and make doing business with our largest trading partner cheaper and easier."
The BBC understands that a plan to link British and European emissions trading schemes will see more coverage across the UK's aviation and maritime industries.
The treaty text will also contain finer detail of how the UK will observe, shape but not vote on relevant EU rules.
Plans to use secondary legislation, including granting direct so-called "Henry VIII powers" to ministers to align UK and EU laws, will also be detailed in the legislation.
Such powers could enable ministers to make changes to bills with less Parliamentary scrutiny.
Outlining the agreement with the EU to MPs earlier this week, the prime minister said new agreements with the EU are "pragmatic" and "not a prelude to anything".
Andy Burnham also said it would be "unthinkable" for the UK to rejoin the bloc without a referendum.
Several former prime ministers have urged him not to reopen the Brexit debate. Burnham said they are "stuck in the past" and later claimed there would be "no banging on about Europe" from Labour.
Badenoch said Burnham has "oversold" the deal and was "trying to take Britain back to 2015".`,
    bodyJa: `New UK-EU treaty has 10-year termination clause, BBC understands
- Published
The government and the EU are set to publish the texts of two treaties that were agreed last week as part of a post-Brexit reset.
The treaties will be published on Thursday afternoon, alongside legislation which is designed to enact the bulk of the deal.
The BBC understands the deal covering food exports has a 10-year termination clause that would mean if one party ended the agreement, they would have to pay to rebuild border checks infrastructure, which will be significantly scaled back as part of the new deal.
Opposition leader Kemi Badenoch has said she would scrap the deal and Reform UK's Nigel Farage has suggested he would refuse to pay.
The Brexit reset deal has already sparked debate about its benefits, its costs, and a wider discussion on the long-term UK-EU relationship.
The deal covers British food exports, emissions trading and a youth experience scheme.
Two of the three legal texts will be released on Thursday, covering the food trade and emissions trading scheme deals, alongside the government's cost-cutting bill to enact the deal.
New assessments of the impact of the deal on different sectors and regions of the country are also expected.
EU offers UK fresh deal on 'Made in Europe' scheme
- Published15 hours ago
Badenoch challenges Burnham over university fees for EU students
- Published15 hours ago
Farage helps launch new campaign against the UK rejoining the EU
- Published13 hours ago
Under the deal, food exporters will be significant beneficiaries from the scrapping of considerable red tape and checks, and dismantling of border facilities. An internal analysis forecasts a 16% boost to agricultural exports.
The industry and government hope the reduction in costs for food producers and sellers will be passed on to customers, but there may be no clear visible impact at the checkout.
Privately, industry insiders told the BBC earlier this week that there are too many moving parts in the world economy, in particular the energy price shock resulting from war in the Middle East.
Regarding the fine detail in the text of one of the treaties relating to the 10-year termination clause, European affairs minister Hamish Falconer said: "The Cutting Costs Bill allows us to implement two major trade agreements."
"It allows us to eliminate paperwork for our food and drink traders, protect billions of pounds worth of British exports from carbon taxes, and make doing business with our largest trading partner cheaper and easier."
The BBC understands that a plan to link British and European emissions trading schemes will see more coverage across the UK's aviation and maritime industries.
The treaty text will also contain finer detail of how the UK will observe, shape but not vote on relevant EU rules.
Plans to use secondary legislation, including granting direct so-called "Henry VIII powers" to ministers to align UK and EU laws, will also be detailed in the legislation.
Such powers could enable ministers to make changes to bills with less Parliamentary scrutiny.
Outlining the agreement with the EU to MPs earlier this week, the prime minister said new agreements with the EU are "pragmatic" and "not a prelude to anything".
Andy Burnham also said it would be "unthinkable" for the UK to rejoin the bloc without a referendum.
Several former prime ministers have urged him not to reopen the Brexit debate. Burnham said they are "stuck in the past" and later claimed there would be "no banging on about Europe" from Labour.
Badenoch said Burnham has "oversold" the deal and was "trying to take Britain back to 2015".`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c98r7p65edvgo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-26T07:40:04+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/dbe3/live/d6fe8520-e961-11f1-a094-5fdc692f3e33.jpg",
    readTime: 9,
  },
  {
    id: "wealthy-europeans-look-beyond-stocks-ami-47336685",
    title: "Wealthy Europeans look beyond stocks amid AI selloff. Here’s where they’re investing",
    titleJa: "Wealthy Europeans look beyond stocks amid AI selloff. Here’s where they’re investing",
    summaryJa: "Goldman Sachs Alternatives' inaugural survey of high-net-worth investors found they're increasingly looking to alternatives amid turbulent markets.",
    bodyOriginal: `Wealthy Europeans are looking to alternative asset classes to build exposure to artificial intelligence themes amid turbulence in public markets.
Goldman Sachs Alternatives' inaugural survey of high-net-worth and ultra-high-net-worth investors found 47% of European respondents saw alternatives as the best way to gain exposure to AI and future tech growth, compared to just 24% of U.S. investors.
The survey found a significant gap between the U.S. and Europe in terms of investor knowledge of alternatives, which include assets like private equity, property and infrastructure. Goldman said 82% of European respondents are familiar with the alternative investments market — compared to 50% of U.S. investors.
Goldman polled 1,000 investors with at least 1 million in investable assets in their local currency across the U.K., France, Germany, Italy and Switzerland. The survey was carried out between June 29 and Aug. 18 this year.
The report on the findings, published Wednesday, did not specify the proportion of respondents who already have a stake in some kind of alternative investment — but wealthy Europeans appeared particularly bullish on the space.
Private equity made up the largest proportion of current alternatives holdings. Among wealthy Europeans with alternatives exposure, 62% said they invested in private equity. The second most commonly held asset class was private real estate, which was backed by 51% of European alternatives investors. Hedge funds were held by 37% of European alternatives owners, and private infrastructure was held by 30%.
One in four respondents who did not already own an alternative investment said they were likely to invest in the market in the coming 12 months. Among those already in the space, 26% said they were likely to increase their allocations over the next year, while just 5% said they planned to decrease their exposure.
Of the European investors who already owned alternatives, 54% said their assets had performed as expected, while 44% said their assets had exceeded their expectations to the upside. Only 2% said their alternative investments had performed worse than expected.
"Recent reforms gave individual investors unprecedented access to alternative asset classes like private equity, venture capital, and private credit," Kyle Kniffen, global head of alternatives for third-party wealth at Goldman Sachs Asset Management, said in Wednesday's report.
He added that wealthy investors "look ready to jump at the opportunity."
"Our survey shows satisfaction among current alts owners is high and adoption looks set to increase," Kniffen said.
Alternative investments have increasingly become a staple of high-net-worth individuals' investment portfolios.
Over the past year, JPMorgan Asset Management's private wealth alternative assets in the Asia-Pacific region have jumped 40%, while BNY Wealth says alternative investments now account for 60% of single-family office portfolios — recently surpassing traditional assets for the first time.
But investing in alternatives carries risks. Private equity, for example, can lock up capital for long periods, and although the number of exits ticked slightly higher last year, the value of those deals fell.
Concerns about private credit, meanwhile, have dominated headlines, with JPMorgan CEO Jamie Dimon warning on Oct. 14, 2025, that "cockroaches" were likely to be lurking in private markets.
— CNBC's Lee Ying Shan contributed to this article.`,
    bodyJa: `Wealthy Europeans are looking to alternative asset classes to build exposure to artificial intelligence themes amid turbulence in public markets.
Goldman Sachs Alternatives' inaugural survey of high-net-worth and ultra-high-net-worth investors found 47% of European respondents saw alternatives as the best way to gain exposure to AI and future tech growth, compared to just 24% of U.S. investors.
The survey found a significant gap between the U.S. and Europe in terms of investor knowledge of alternatives, which include assets like private equity, property and infrastructure. Goldman said 82% of European respondents are familiar with the alternative investments market — compared to 50% of U.S. investors.
Goldman polled 1,000 investors with at least 1 million in investable assets in their local currency across the U.K., France, Germany, Italy and Switzerland. The survey was carried out between June 29 and Aug. 18 this year.
The report on the findings, published Wednesday, did not specify the proportion of respondents who already have a stake in some kind of alternative investment — but wealthy Europeans appeared particularly bullish on the space.
Private equity made up the largest proportion of current alternatives holdings. Among wealthy Europeans with alternatives exposure, 62% said they invested in private equity. The second most commonly held asset class was private real estate, which was backed by 51% of European alternatives investors. Hedge funds were held by 37% of European alternatives owners, and private infrastructure was held by 30%.
One in four respondents who did not already own an alternative investment said they were likely to invest in the market in the coming 12 months. Among those already in the space, 26% said they were likely to increase their allocations over the next year, while just 5% said they planned to decrease their exposure.
Of the European investors who already owned alternatives, 54% said their assets had performed as expected, while 44% said their assets had exceeded their expectations to the upside. Only 2% said their alternative investments had performed worse than expected.
"Recent reforms gave individual investors unprecedented access to alternative asset classes like private equity, venture capital, and private credit," Kyle Kniffen, global head of alternatives for third-party wealth at Goldman Sachs Asset Management, said in Wednesday's report.
He added that wealthy investors "look ready to jump at the opportunity."
"Our survey shows satisfaction among current alts owners is high and adoption looks set to increase," Kniffen said.
Alternative investments have increasingly become a staple of high-net-worth individuals' investment portfolios.
Over the past year, JPMorgan Asset Management's private wealth alternative assets in the Asia-Pacific region have jumped 40%, while BNY Wealth says alternative investments now account for 60% of single-family office portfolios — recently surpassing traditional assets for the first time.
But investing in alternatives carries risks. Private equity, for example, can lock up capital for long periods, and although the number of exits ticked slightly higher last year, the value of those deals fell.
Concerns about private credit, meanwhile, have dominated headlines, with JPMorgan CEO Jamie Dimon warning on Oct. 14, 2025, that "cockroaches" were likely to be lurking in private markets.
— CNBC's Lee Ying Shan contributed to this article.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/26/wealthy-europeans-alternative-investments-ai.html",
    publishedAt: "2026-11-26T07:23:42+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 9,
  },
  {
    id: "spacex-musk-pledge-to-donate-a-share-eac-05100b2b",
    title: "SpaceX, Musk pledge to donate a share each to active Trump Accounts",
    titleJa: "SpaceX, Musk pledge to donate a share each to active Trump Accounts",
    summaryJa: "SpaceX said it will donate one share of the company's class A stock to every active Trump Account, and CEO Elon Musk would match it.",
    bodyOriginal: `SpaceX said Wednesday it will donate one share of the company's class A stock to every active Trump Account, and CEO Elon Musk would personally match the gift.
"SpaceX is building the infrastructure of the future and working to make life multiplanetary," the company said in a statement. "We believe ownership of the company creating these systems should extend to the next generation of Americans for their long-term benefit."
The White House announced in October that nearly 70 million Trump Accounts had been created, including more than 60 million through auto-enrollment. It's unclear how many are considered active.
Musk said in a social media post on X on Thursday that the share from SpaceX would be transferred next month, without providing further details. "The share directly from me will be transferred when my lockup expires in June next year," he added.
Eligible children must have their account claimed to enable contributions from family members, friends and employers, and to receive the government's one-time $1,000 seed contribution. Auto-enrolled children can receive philanthropic contributions without a parent or guardian claiming an account, according to TrumpAccounts.gov.
Representatives for SpaceX and the U.S. Department of the Treasury did not immediately respond to a request for further details about the planned gift.
SpaceX Chief Operating Officer Gwynne Shotwell had previously agreed to make a personal gift of over 2 million SpaceX shares to Trump Accounts, with eligible account holders expected to receive them in December.
In October, Elon Musk posted on X that he would give a share of SpaceX to every kid in America next year.
Trump Accounts, also known as 530A accounts, are open to any U.S. child under 18 with a Social Security number.
Parents, guardians, grandparents and others can collectively contribute up to $5,000 per child per year in after-tax dollars up until the year before the beneficiary turns 18. The annual contribution limit is indexed for inflation after 2027.
Since the July 4 launch, families and friends have collectively contributed more than $1 billion to Trump Accounts. Total deposits now sit at more than $9 billion, CNBC first reported.
Children born from 2025 through 2028 may receive a one-time $1,000 deposit from the Treasury. Other funds may also be available, depending on certain criteria.
The Treasury rolled out temporary regulations at the end of September that allow Trump Accounts to hold stock donations, a move officials have said is meant to encourage more philanthropic gifts.
Contributing stock can benefit donors, who are able to avoid capital gains taxes triggered by selling appreciated stock. But families can face restrictions related to selling that donated stock. The policy also means some children's wealth accumulation could be tied to the performance of individual companies.
Under U.S. Department of the Treasury guidelines, families cannot refuse stock gifted to Trump Accounts and generally cannot sell it until the earlier of five years or the end of the calendar year in which the beneficiary turns 17.
SpaceX shares have been under some pricing pressure as the company negotiates a possible merger with Elon Musk's automaker Tesla. The companies have established two special committees to handle merger negotiations, and hired advisers for a potential mega-deal.
CNBC's Sam Meredith, Kevin Breuninger, Kate Dore and Jess Dickler contributed to this story`,
    bodyJa: `SpaceX said Wednesday it will donate one share of the company's class A stock to every active Trump Account, and CEO Elon Musk would personally match the gift.
"SpaceX is building the infrastructure of the future and working to make life multiplanetary," the company said in a statement. "We believe ownership of the company creating these systems should extend to the next generation of Americans for their long-term benefit."
The White House announced in October that nearly 70 million Trump Accounts had been created, including more than 60 million through auto-enrollment. It's unclear how many are considered active.
Musk said in a social media post on X on Thursday that the share from SpaceX would be transferred next month, without providing further details. "The share directly from me will be transferred when my lockup expires in June next year," he added.
Eligible children must have their account claimed to enable contributions from family members, friends and employers, and to receive the government's one-time $1,000 seed contribution. Auto-enrolled children can receive philanthropic contributions without a parent or guardian claiming an account, according to TrumpAccounts.gov.
Representatives for SpaceX and the U.S. Department of the Treasury did not immediately respond to a request for further details about the planned gift.
SpaceX Chief Operating Officer Gwynne Shotwell had previously agreed to make a personal gift of over 2 million SpaceX shares to Trump Accounts, with eligible account holders expected to receive them in December.
In October, Elon Musk posted on X that he would give a share of SpaceX to every kid in America next year.
Trump Accounts, also known as 530A accounts, are open to any U.S. child under 18 with a Social Security number.
Parents, guardians, grandparents and others can collectively contribute up to $5,000 per child per year in after-tax dollars up until the year before the beneficiary turns 18. The annual contribution limit is indexed for inflation after 2027.
Since the July 4 launch, families and friends have collectively contributed more than $1 billion to Trump Accounts. Total deposits now sit at more than $9 billion, CNBC first reported.
Children born from 2025 through 2028 may receive a one-time $1,000 deposit from the Treasury. Other funds may also be available, depending on certain criteria.
The Treasury rolled out temporary regulations at the end of September that allow Trump Accounts to hold stock donations, a move officials have said is meant to encourage more philanthropic gifts.
Contributing stock can benefit donors, who are able to avoid capital gains taxes triggered by selling appreciated stock. But families can face restrictions related to selling that donated stock. The policy also means some children's wealth accumulation could be tied to the performance of individual companies.
Under U.S. Department of the Treasury guidelines, families cannot refuse stock gifted to Trump Accounts and generally cannot sell it until the earlier of five years or the end of the calendar year in which the beneficiary turns 17.
SpaceX shares have been under some pricing pressure as the company negotiates a possible merger with Elon Musk's automaker Tesla. The companies have established two special committees to handle merger negotiations, and hired advisers for a potential mega-deal.
CNBC's Sam Meredith, Kevin Breuninger, Kate Dore and Jess Dickler contributed to this story`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/25/spacex-musk-trump-account-stock.html",
    publishedAt: "2026-11-26T06:39:34+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 9,
  },
  {
    id: "south-korea-s-kospi-leads-gains-as-tech-aae5b32e",
    title: "South Korea's Kospi leads gains as tech rebound lifts Asia markets",
    titleJa: "South Korea's Kospi leads gains as tech rebound lifts Asia markets",
    summaryJa: "Investors appear to have looked past a fresh set of U.S. tariffs unveiled by the White House on Wednesday, targeting more than a dozen major trading partners.",
    bodyOriginal: `Asia-Pacific markets rose Thursday, tracking Wall Street gains overnight, with tech stocks rebounding from steep losses in the prior session.
Investors appear to have looked past a fresh set of tariffs unveiled by the White House on Wednesday, targeting more than a dozen major trading partners, including China and the European Union.
South Korea's Kospi gained 0.29% to close at 4,711.21, while the small-cap Kosdaq index advanced 0.78% to 655.71 after the country's central bank hiked benchmark lending rates to a 2-year high, in its final meeting of the year.
Japan's Nikkei 225 rose 0.86% to 57,499.16 while the Topix edged 0.11% higher to 3,750.4. Australia's S&P/ASX 200 gained 0.82% to 8,763.8.
Hong Kong's Hang Seng index was up 1.52% in its last hour of trade, while mainland China's CSI 300 edged higher marginally, closing at 3,900.55.
Asian technology stocks rebounded sharply Thursday, led by Japanese chip-related companies.
SoftBank Group surged more than 7%, while chip-testing equipment maker Advantest rose 4.57%. Lasertec and Disco gained , while Tokyo Electron climbed 0.59%
In South Korea, memory chip giants SK Hynix and Samsung Electronics advanced more than 2% and 0.35%, respectively. The gains followed a bruising session Wednesday amid renewed concerns over the sustainability of artificial intelligence spending.
Cryptocurrencies also traded higher, with bitcoin rising 1.58% to $60,944.60, while ether gained 1.15% to $1,702.96.
The gains come amid lingering concerns over the outlook for digital assets, with the co-founder of now-shuttered crypto exchange BitMEX Arthur Hayes telling CNBC on Tuesday that bitcoin could test $50,000 if the Nasdaq continues to slide.
Meanwhile, fresh U.S. inflation data reinforced expectations of further monetary tightening by the Federal Reserve. The personal consumption expenditures price index rose 3.8% year on year in October, accelerating from 3.7% in September, while core inflation came in slightly above expectations at 3.3%.
Overnight in the U.S., the Dow Jones Industrial Average erased an 1,100-point plunge on Wednesday, advancing 164.25 points, or 0.33%, to end at 50,182.95. The Nasdaq Composite, however, fell 0.62% to 23,585.80, while the S&P 500 shed 0.25% to close at 7,182.78.
U.S. markets will be closed Thursday for the Thanksgiving holiday and will have a shortened trading session on Friday.`,
    bodyJa: `Asia-Pacific markets rose Thursday, tracking Wall Street gains overnight, with tech stocks rebounding from steep losses in the prior session.
Investors appear to have looked past a fresh set of tariffs unveiled by the White House on Wednesday, targeting more than a dozen major trading partners, including China and the European Union.
South Korea's Kospi gained 0.29% to close at 4,711.21, while the small-cap Kosdaq index advanced 0.78% to 655.71 after the country's central bank hiked benchmark lending rates to a 2-year high, in its final meeting of the year.
Japan's Nikkei 225 rose 0.86% to 57,499.16 while the Topix edged 0.11% higher to 3,750.4. Australia's S&P/ASX 200 gained 0.82% to 8,763.8.
Hong Kong's Hang Seng index was up 1.52% in its last hour of trade, while mainland China's CSI 300 edged higher marginally, closing at 3,900.55.
Asian technology stocks rebounded sharply Thursday, led by Japanese chip-related companies.
SoftBank Group surged more than 7%, while chip-testing equipment maker Advantest rose 4.57%. Lasertec and Disco gained , while Tokyo Electron climbed 0.59%
In South Korea, memory chip giants SK Hynix and Samsung Electronics advanced more than 2% and 0.35%, respectively. The gains followed a bruising session Wednesday amid renewed concerns over the sustainability of artificial intelligence spending.
Cryptocurrencies also traded higher, with bitcoin rising 1.58% to $60,944.60, while ether gained 1.15% to $1,702.96.
The gains come amid lingering concerns over the outlook for digital assets, with the co-founder of now-shuttered crypto exchange BitMEX Arthur Hayes telling CNBC on Tuesday that bitcoin could test $50,000 if the Nasdaq continues to slide.
Meanwhile, fresh U.S. inflation data reinforced expectations of further monetary tightening by the Federal Reserve. The personal consumption expenditures price index rose 3.8% year on year in October, accelerating from 3.7% in September, while core inflation came in slightly above expectations at 3.3%.
Overnight in the U.S., the Dow Jones Industrial Average erased an 1,100-point plunge on Wednesday, advancing 164.25 points, or 0.33%, to end at 50,182.95. The Nasdaq Composite, however, fell 0.62% to 23,585.80, while the S&P 500 shed 0.25% to close at 7,182.78.
U.S. markets will be closed Thursday for the Thanksgiving holiday and will have a shortened trading session on Friday.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/26/stock-markets-today-.html",
    publishedAt: "2026-11-26T04:49:03+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 6,
  },
  {
    id: "how-trump-s-latest-tariff-moves-hand-ind-377581d9",
    title: "How Trump’s latest tariff moves hand India an edge over rival Asian exporters",
    titleJa: "How Trump’s latest tariff moves hand India an edge over rival Asian exporters",
    summaryJa: "Proposed tariffs of 18% on Bangladesh, Cambodia, Thailand, and 20% on China and Vietnam, subject to their respective trade deals, offer India a competitive advantage.",
    bodyOriginal: `The latest U.S. tariff rates announced Wednesday have signaled that Washington is willing to offer India an edge over its competitors if New Delhi agrees to finalize a long-pending trade deal.
The Office of the United States Trade Representative has proposed a tariff of 17% on Indian exports if New Delhi "were to reach an Agreement on Reciprocal Trade" with Washington. It added that without a trade deal, India could face tariffs of up to 25% under Section 301 investigations encompassing excess production capacity that harms U.S. interests.
Meanwhile, the USTR has proposed tariffs of 18% on Bangladesh, Cambodia, Thailand, and 20% on China and Vietnam, subject to their respective trade deals, handing India a competitive advantage over rival exporters.
The U.S. expects the announcement of a lower tariff rate will encourage New Delhi to sign off on a trade deal before the G20, Atman Trivedi, partner at Washington-based DGA Albright Stonebridge Group, told CNBC.
India has got a "better bargain with Washington than its main competitors," and it may be enough for the Indian government "to declare victory and secure domestic backing for the deal," Trivedi said.
In February, U.S. President Donald Trump had announced a deal with India, claiming that New Delhi had accepted to "Buy American" at a much higher level after the U.S. agreed to slash tariffs to 18% from 50% earlier.
U.S. pressure
The India-U.S. trade deal has been pending with both sides indicating there was little room to grant concessions, while the Supreme Court annulling Trump tariffs allowed New Delhi to demand preferential tariffs that give it an edge over competitors.
"Today's announcement increases the urgency of reaching an agreement," Ronak D. Desai, visiting fellow at Hoover Institution, Stanford University, told CNBC. He added that while the prospect of a 17% tariff may strengthen the economic case for the deal, the threat of a 25% tariff could stir the sensitivity of the Indian government.
"The Modi government will be particularly sensitive to any perception that India is conceding under American Pressure," Desai said.
India's commerce ministry on Wednesday said it "does not have structural excess capacity in any sector," denying the findings of the USTR investigation, but added that it remains committed to "working closely with the United States towards the early conclusion of the India-U.S. Bilateral Trade Agreement."
Despite India facing steep tariffs, which were raised to 50%, New Delhi's trade surplus with the U.S. rose to $57.3 billion in 2025 from $45.2 billion in 2024.
Indian Prime Minister Narendra Modi and Trump are likely to meet in December for the G20 leaders' meeting in Florida, and several experts believe the two leaders could seal the trade deal on the sidelines of the summit.`,
    bodyJa: `The latest U.S. tariff rates announced Wednesday have signaled that Washington is willing to offer India an edge over its competitors if New Delhi agrees to finalize a long-pending trade deal.
The Office of the United States Trade Representative has proposed a tariff of 17% on Indian exports if New Delhi "were to reach an Agreement on Reciprocal Trade" with Washington. It added that without a trade deal, India could face tariffs of up to 25% under Section 301 investigations encompassing excess production capacity that harms U.S. interests.
Meanwhile, the USTR has proposed tariffs of 18% on Bangladesh, Cambodia, Thailand, and 20% on China and Vietnam, subject to their respective trade deals, handing India a competitive advantage over rival exporters.
The U.S. expects the announcement of a lower tariff rate will encourage New Delhi to sign off on a trade deal before the G20, Atman Trivedi, partner at Washington-based DGA Albright Stonebridge Group, told CNBC.
India has got a "better bargain with Washington than its main competitors," and it may be enough for the Indian government "to declare victory and secure domestic backing for the deal," Trivedi said.
In February, U.S. President Donald Trump had announced a deal with India, claiming that New Delhi had accepted to "Buy American" at a much higher level after the U.S. agreed to slash tariffs to 18% from 50% earlier.
U.S. pressure
The India-U.S. trade deal has been pending with both sides indicating there was little room to grant concessions, while the Supreme Court annulling Trump tariffs allowed New Delhi to demand preferential tariffs that give it an edge over competitors.
"Today's announcement increases the urgency of reaching an agreement," Ronak D. Desai, visiting fellow at Hoover Institution, Stanford University, told CNBC. He added that while the prospect of a 17% tariff may strengthen the economic case for the deal, the threat of a 25% tariff could stir the sensitivity of the Indian government.
"The Modi government will be particularly sensitive to any perception that India is conceding under American Pressure," Desai said.
India's commerce ministry on Wednesday said it "does not have structural excess capacity in any sector," denying the findings of the USTR investigation, but added that it remains committed to "working closely with the United States towards the early conclusion of the India-U.S. Bilateral Trade Agreement."
Despite India facing steep tariffs, which were raised to 50%, New Delhi's trade surplus with the U.S. rose to $57.3 billion in 2025 from $45.2 billion in 2024.
Indian Prime Minister Narendra Modi and Trump are likely to meet in December for the G20 leaders' meeting in Florida, and several experts believe the two leaders could seal the trade deal on the sidelines of the summit.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/26/trump-us-tariff-india-trade.html",
    publishedAt: "2026-11-26T04:12:18+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 7,
  },
  {
    id: "s-p-warns-nvidia-credit-rating-could-be-5c1989de",
    title: "S&P warns Nvidia credit rating could be cut over 'rising' management and governance risk",
    titleJa: "S&P warns Nvidia credit rating could be cut over 'rising' management and governance risk",
    summaryJa: "S&amp;P Global Ratings said Nvidia's credit rating could be cut by one notch as it flagged \"rising\" management and governance risk at the chipmaker.",
    bodyOriginal: `Nvidia's credit rating could be cut by one notch over the next 90 days if the company continues to have "deficiencies" in its management and governance framework, S&P Global Ratings said in the wake of the Jensen Huang's ouster and reinstatement as Nvidia CEO.
"News regarding the CEO and questions regarding potential export control violations have exposed vulnerabilities in Nvidia's management and governance framework, especially in regard to its board structure, composition, and effectiveness," S&P said in a Wednesday note.
Nvidia currently holds an AA rating, the third-highest level.
S&P has placed the chipmaker on "CreditWatch with negative implications," though any potential downgrade would be limited to one notch, to AA-, unless investigations or disclosures lead the agency to conclude that Nvidia's reputation or future prospects have also been harmed.
A downgrade can pressure bond prices, push yields higher and raise borrowing costs. Nvidia priced $25 billion of investment-grade senior notes in June, with maturities from 2028 through 2056, shortly after S&P upgraded the company from AA- to AA.
Nvidia has about $32.5 billion of bonds in the U.S. high-grade corporate bond index, according to Bloomberg.
S&P's Wednesday note follows Moody's Ratings changing its outlook on Nvidia to stable from positive on Nov. 18, citing governance concerns, and leaving that outlook unchanged after Huang's return on Monday.
In its note, S&P cited the "long tenure" of certain board members as a reason their independence may be "compromised" and said Nvidia's management and governance risk was "rising."
The ratings agency added that it remained unaware of any remedial action taken by the board to address what could be "meaningful" management and governance deficiencies.
Chairman Harvey Jones and early investor Tench Coxe have served on Nvidia's board since 1993, while Brooke Seawell joined in 1997. Mark Stevens served from 1993 to 2006 and rejoined the board in 2008.
S&P also flagged questions around geopolitical risk management and internal controls arising from Nvidia's exposure to China.
"While Nvidia management has delivered significant returns for its stakeholders over decades, weak executive oversight and lack of succession planning have brought questions around the "key man" risk to the forefront," S&P's Andrew Chang and David Tsui said.
Chang and Tsui noted that Huang's resignation and subsequent reinstatement did not resolve questions about the board's oversight of executive conduct.
The agency also intends to meet with Nvidia's board and management to discuss plans to address those deficiencies, particularly around "board independence, effective management oversight and a credible leadership succession plan."
Huang returned less than two weeks after Jones said Nvidia's directors did not intend to reinstate him. The board later voted unanimously to bring Huang back, sending Nvidia shares up as much as 36% during Monday's session.
Nvidia shares are down about 12.5% since Monday's close.`,
    bodyJa: `Nvidia's credit rating could be cut by one notch over the next 90 days if the company continues to have "deficiencies" in its management and governance framework, S&P Global Ratings said in the wake of the Jensen Huang's ouster and reinstatement as Nvidia CEO.
"News regarding the CEO and questions regarding potential export control violations have exposed vulnerabilities in Nvidia's management and governance framework, especially in regard to its board structure, composition, and effectiveness," S&P said in a Wednesday note.
Nvidia currently holds an AA rating, the third-highest level.
S&P has placed the chipmaker on "CreditWatch with negative implications," though any potential downgrade would be limited to one notch, to AA-, unless investigations or disclosures lead the agency to conclude that Nvidia's reputation or future prospects have also been harmed.
A downgrade can pressure bond prices, push yields higher and raise borrowing costs. Nvidia priced $25 billion of investment-grade senior notes in June, with maturities from 2028 through 2056, shortly after S&P upgraded the company from AA- to AA.
Nvidia has about $32.5 billion of bonds in the U.S. high-grade corporate bond index, according to Bloomberg.
S&P's Wednesday note follows Moody's Ratings changing its outlook on Nvidia to stable from positive on Nov. 18, citing governance concerns, and leaving that outlook unchanged after Huang's return on Monday.
In its note, S&P cited the "long tenure" of certain board members as a reason their independence may be "compromised" and said Nvidia's management and governance risk was "rising."
The ratings agency added that it remained unaware of any remedial action taken by the board to address what could be "meaningful" management and governance deficiencies.
Chairman Harvey Jones and early investor Tench Coxe have served on Nvidia's board since 1993, while Brooke Seawell joined in 1997. Mark Stevens served from 1993 to 2006 and rejoined the board in 2008.
S&P also flagged questions around geopolitical risk management and internal controls arising from Nvidia's exposure to China.
"While Nvidia management has delivered significant returns for its stakeholders over decades, weak executive oversight and lack of succession planning have brought questions around the "key man" risk to the forefront," S&P's Andrew Chang and David Tsui said.
Chang and Tsui noted that Huang's resignation and subsequent reinstatement did not resolve questions about the board's oversight of executive conduct.
The agency also intends to meet with Nvidia's board and management to discuss plans to address those deficiencies, particularly around "board independence, effective management oversight and a credible leadership succession plan."
Huang returned less than two weeks after Jones said Nvidia's directors did not intend to reinstate him. The board later voted unanimously to bring Huang back, sending Nvidia shares up as much as 36% during Monday's session.
Nvidia shares are down about 12.5% since Monday's close.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/26/nvidia-market-governance-risk.html",
    publishedAt: "2026-11-26T03:19:44+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 8,
  },
  {
    id: "us-approves-spacex-plan-to-send-a-millio-cc11c413",
    title: "US approves SpaceX plan to send a million data satellites to space",
    titleJa: "US approves SpaceX plan to send a million data satellites to space",
    summaryJa: "The Starmind constellation aims to be the most cost and energy-efficient way to meet the growing demand for AI computing power.",
    bodyOriginal: `US approves SpaceX plan to send a million data satellites to space
- Published
US regulators have given SpaceX the go-ahead to launch a million satellites into Earth's orbit to help build data centres in space - the first approval of its kind.
The company, which is owned by Elon Musk, wants to use sunlight to power satellites that will process data for AI and send the results back to Earth.
The Federal Communications Commission (FCC) said on Wednesday that the project, known as Starmind, will "support America's booming super intelligence economy".
Its approval comes as communities across the US have pushed back against the expansion of data centres on the ground.
Space X believes the "orbital data centres" are the most cost and energy-efficient way to meet the growing demand for artificial intelligence (AI) computing power that is beyond "terrestrial capabilities".
FCC Chairman Brendan Carr said in a statement that the project "opens a bold new frontier for the computing infrastructure needed to power America's leadership and growth".
"This is the kind of American ingenuity that can unite our strengths in space and advanced technology, reinforce our economic leadership, and expand prosperity here at home," Carr said.
Responding to the announcement, Musk wrote on X: "Much appreciated. This will be a great asset to America and the world."
Under the FCC licence, deployment of the satellites has to begin no later than November 2033. SpaceX will be required to have deployed 10% by November 2035, rising to 50% by November 2038.
The company has already said it wants to launch its first Starmind satellite next year.
Its unclear if a million satellites will be launched or if SpaceX has sought approval for a higher number than it will use.
Like SpaceX's current Starlink network, which provides high-speed internet via more than 10,000 satellites, Starmind's satellites will operate in low-Earth orbit at altitudes ranging between 500-2,000km (310-1,242 miles).
Starmind's satellites will communicate with Starlink's and then relay the data to Earth.
The solar-powered satellite system "promises to bring the human race closer to a Kardashev II civilisation—one that can harness the full power of the sun", the FCC statement said, in a reference to a hypothetical society, proposed by an astronomer in the 1960s, capable of harnessing the entire energy output of its home star.
The orbiting data centre concept is also being explored by other firms - including Google and Blue Origin - and is being pitched as a greener alternative to traditional centres, which require enormous amounts of power to run and water for cooling.
The ever-expanding use of AI computing has seen a massive increase in the amount of data that needs to be stored and processed around the world.
New facilities continue to be built but it is becoming difficult to find places to put them. Data centres are large and sprawling, use enormous amounts of power and water for cooling, and increasingly local people don't want them built nearby.
Data centres were a central issue in the midterm elections earlier in November, with many Democratic candidates promising tougher regulation on their construction.
An expert previously told the BBC that launching hardware into orbit remains expensive and that the infrastructure to protect, cool and power them can be complex - while a growing quantity of space debris puts the physical hardware at risk.
Separately, another cautioned that the growing number of low-orbit craft increases the possibility of crashes between objects - which could damage machines or send materials falling back to earth.
Starlink has been accused of creating congestion in space, something Musk denies. He has also rejected claims his satellites have been taking up too much room and crowding out competitors.
Related topics
- Published14 hours ago
- Published22 January`,
    bodyJa: `US approves SpaceX plan to send a million data satellites to space
- Published
US regulators have given SpaceX the go-ahead to launch a million satellites into Earth's orbit to help build data centres in space - the first approval of its kind.
The company, which is owned by Elon Musk, wants to use sunlight to power satellites that will process data for AI and send the results back to Earth.
The Federal Communications Commission (FCC) said on Wednesday that the project, known as Starmind, will "support America's booming super intelligence economy".
Its approval comes as communities across the US have pushed back against the expansion of data centres on the ground.
Space X believes the "orbital data centres" are the most cost and energy-efficient way to meet the growing demand for artificial intelligence (AI) computing power that is beyond "terrestrial capabilities".
FCC Chairman Brendan Carr said in a statement that the project "opens a bold new frontier for the computing infrastructure needed to power America's leadership and growth".
"This is the kind of American ingenuity that can unite our strengths in space and advanced technology, reinforce our economic leadership, and expand prosperity here at home," Carr said.
Responding to the announcement, Musk wrote on X: "Much appreciated. This will be a great asset to America and the world."
Under the FCC licence, deployment of the satellites has to begin no later than November 2033. SpaceX will be required to have deployed 10% by November 2035, rising to 50% by November 2038.
The company has already said it wants to launch its first Starmind satellite next year.
Its unclear if a million satellites will be launched or if SpaceX has sought approval for a higher number than it will use.
Like SpaceX's current Starlink network, which provides high-speed internet via more than 10,000 satellites, Starmind's satellites will operate in low-Earth orbit at altitudes ranging between 500-2,000km (310-1,242 miles).
Starmind's satellites will communicate with Starlink's and then relay the data to Earth.
The solar-powered satellite system "promises to bring the human race closer to a Kardashev II civilisation—one that can harness the full power of the sun", the FCC statement said, in a reference to a hypothetical society, proposed by an astronomer in the 1960s, capable of harnessing the entire energy output of its home star.
The orbiting data centre concept is also being explored by other firms - including Google and Blue Origin - and is being pitched as a greener alternative to traditional centres, which require enormous amounts of power to run and water for cooling.
The ever-expanding use of AI computing has seen a massive increase in the amount of data that needs to be stored and processed around the world.
New facilities continue to be built but it is becoming difficult to find places to put them. Data centres are large and sprawling, use enormous amounts of power and water for cooling, and increasingly local people don't want them built nearby.
Data centres were a central issue in the midterm elections earlier in November, with many Democratic candidates promising tougher regulation on their construction.
An expert previously told the BBC that launching hardware into orbit remains expensive and that the infrastructure to protect, cool and power them can be complex - while a growing quantity of space debris puts the physical hardware at risk.
Separately, another cautioned that the growing number of low-orbit craft increases the possibility of crashes between objects - which could damage machines or send materials falling back to earth.
Starlink has been accused of creating congestion in space, something Musk denies. He has also rejected claims his satellites have been taking up too much room and crowding out competitors.
Related topics
- Published14 hours ago
- Published22 January`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cwp836l8n1jgo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-26T00:07:51+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/5383/live/4c315c90-e968-11f1-a094-5fdc692f3e33.jpg",
    readTime: 10,
  },
  {
    id: "guitar-wars-the-transatlantic-battle-ove-147ce9ab",
    title: "Guitar wars - the transatlantic battle over the Stratocaster",
    titleJa: "Guitar wars - the transatlantic battle over the Stratocaster",
    summaryJa: "US company Fender is in dispute with a German firm that makes generic versions of its key model.",
    bodyOriginal: `Guitar wars - the transatlantic battle over the Stratocaster
- Published
Hans Thomann leads the way through his music store in central Germany to the large electric guitar department, where the walls are hung with hundreds of instruments.
Brands on show include famous names Fender and Gibson, plus Harley Benton.
The latter is a low-price range of guitars owned by the family-run company that Thomann leads – Thomann, one of the world's largest online retailers of musical instruments.
The shop, together with warehouses and offices, are at the company's headquarters in the tiny village of Treppendorf in rural Upper Franconia, in Bavaria.
The business was founded by Thomann's father, Hans Thomann Senior, in 1954.
In one corner of the store, a young man is trying out a Fender Stratocaster, one of the world's most iconic electric guitars.
Designed in the US in the early 1950's, the "Strat" became the instrument of choice for many famous rock and pop musicians, such as Jimi Hendrix, Eric Clapton and Buddy Holly.
Hendrix famously set one on fire at the Monterey Pop Festival in 1967, and his performances helped make the guitar a symbol of modern rock music.
These days, the Stratocaster is very much on Hans Thomann's mind, because it's the subject of an intense copyright dispute.
When the guitar was first made, California-based Fender did not trademark the body shape. So, since the 1960s Strat-shaped guitars have been made and sold around the world by countless manufacturers.
The shape is so ubiquitous that many musicians consider it to be a generic design.
But since March of this year, Fender has begun a new campaign to defend its right to the guitar's sinuous shape. It follows a decision by a court in Düsseldorf last December which granted Fender copyright protection, external of the Stratocaster design in Germany.
The defendant, Chinese seller Yiwu Philharmonic Musical Instruments, did not appear. The Düsseldorf court accepted Fender's arguments and ruled in its favour. According to German law the court makes its decision based on the facts presented by the plaintiff if the defendant doesn't raise objections.
The ruling said that Fender's design for the Stratocaster was "an outstanding, free creative achievement" that "clearly reflects the personality of its author".
It described the guitar as "a body without edges" with "soft curves that evoke associations with the female torso consisting of hips, waist and arms".
On its website, Fender announced in March, external the decision created "enforceable rights" against any guitars using the Strat body shape, that are manufactured, sold or distributed into Germany or other EU countries, "regardless of where those guitars are produced".
Fender began to send out cease and desist letters to dozens of retailers and manufacturers, both large and small, asking them to stop making and selling Strat lookalikes heading for Europe.
One of these letters, seen by the BBC, said Fender "insists that you immediately stop manufacturing, marketing, selling and producing the infringing products".
The letter also demanded that companies recall and destroy the guitars.
The move caused an outcry in the guitar world, among manufacturers and musicians.
"Time to boycott Fender," one person wrote on the Facebook page of the boutique US guitar maker, LSL Instruments.
Thomann received a cease-and-desist letter shortly after a visit to Treppendorf in March by Fender's chief executive Bud Cole.
"We remember the meeting as a very positive and constructive exchange," says Thomann. "At the time we had no indication that Fender was considering legal action."
The letter, he says, came as a shock.
"For more than 70 years, we have carried Fender instruments with great appreciation for the brand and many of us are Fender players ourselves. We were therefore surprised and disappointed by Fender's recent actions."
In 2025, Thomann sold over 112,000 Strat-style guitars, including more than 16,000 made by Fender and Fender subsidiary brand Squier.
"As a retailer, we want to continue offering our customers everything that is available in the world of guitars," adds Thomann. "We would have welcomed to the opportunity to discuss the matter openly before receiving a formal legal demand for such extreme action."
In June, Thomann the company started legal action against Fender, filing an "action of non-infringement" that said that Fender does not have a valid copyright claim to the Stat shape.
Thomann says that the Düsseldorf ruling was simply a default judgement based on missed deadlines and didn't represent a "comprehensive review of the legal claims".
For its part, Fender, which is majority-owned by Hawaii-based company Servco Pacific, says it has a responsibility to protect the Stratocaster's iconic design. In July, it sued Thomann in a German court, for copyright infringement.
In a statement to the BBC, Fender said it remained "confident" in the original Düsseldorf court judgement.
"Our preference has always been to keep lines of communication open and resolve these matters through constructive dialogue rather than litigation," it added.
With the legal cases continuing, Thomann says he believes it is important to get "legal clarity – not only for us but for the wider guitar industry."
"Ultimately, we want to help preserve an environment in which innovation, diversity and creative development can continue to thrive," he adds.
Thomann says he was taking legal action not just for his company, but for smaller music companies too.
"We used to be a small music shop ourselves," he says.
"Many of the smaller manufacturers, guitar makers and dealers affected simply don't have the financial and legal resources to conduct a legal dispute like this."
One such company is LSL Instruments, a family-owned boutique guitar maker in California. Its director of sales, Johny Miller, told me that when they first received Fender's letter they were "pretty terrified and blown away".
"They were asking us to retrieve guitars from dealers out there and destroy them and send them proof.
"So when we heard Hans Thomann got the same letter and responded by suing them… so that everybody in the guitar community could understand exactly what's going on… we were so thankful and grateful," he says.
Fender tells BBC that it agrees that "legal clarity was important", and that it was now focusing more on targeting larger manufacturers.
It also says it realises that "our outreach has caused concern and frustration, particularly among smaller, independent guitar builders. "To them we say: we continue to hear you, and we're listening."
Read more global business stories
- Published3 days ago
- Published12 November
- Published24 September`,
    bodyJa: `Guitar wars - the transatlantic battle over the Stratocaster
- Published
Hans Thomann leads the way through his music store in central Germany to the large electric guitar department, where the walls are hung with hundreds of instruments.
Brands on show include famous names Fender and Gibson, plus Harley Benton.
The latter is a low-price range of guitars owned by the family-run company that Thomann leads – Thomann, one of the world's largest online retailers of musical instruments.
The shop, together with warehouses and offices, are at the company's headquarters in the tiny village of Treppendorf in rural Upper Franconia, in Bavaria.
The business was founded by Thomann's father, Hans Thomann Senior, in 1954.
In one corner of the store, a young man is trying out a Fender Stratocaster, one of the world's most iconic electric guitars.
Designed in the US in the early 1950's, the "Strat" became the instrument of choice for many famous rock and pop musicians, such as Jimi Hendrix, Eric Clapton and Buddy Holly.
Hendrix famously set one on fire at the Monterey Pop Festival in 1967, and his performances helped make the guitar a symbol of modern rock music.
These days, the Stratocaster is very much on Hans Thomann's mind, because it's the subject of an intense copyright dispute.
When the guitar was first made, California-based Fender did not trademark the body shape. So, since the 1960s Strat-shaped guitars have been made and sold around the world by countless manufacturers.
The shape is so ubiquitous that many musicians consider it to be a generic design.
But since March of this year, Fender has begun a new campaign to defend its right to the guitar's sinuous shape. It follows a decision by a court in Düsseldorf last December which granted Fender copyright protection, external of the Stratocaster design in Germany.
The defendant, Chinese seller Yiwu Philharmonic Musical Instruments, did not appear. The Düsseldorf court accepted Fender's arguments and ruled in its favour. According to German law the court makes its decision based on the facts presented by the plaintiff if the defendant doesn't raise objections.
The ruling said that Fender's design for the Stratocaster was "an outstanding, free creative achievement" that "clearly reflects the personality of its author".
It described the guitar as "a body without edges" with "soft curves that evoke associations with the female torso consisting of hips, waist and arms".
On its website, Fender announced in March, external the decision created "enforceable rights" against any guitars using the Strat body shape, that are manufactured, sold or distributed into Germany or other EU countries, "regardless of where those guitars are produced".
Fender began to send out cease and desist letters to dozens of retailers and manufacturers, both large and small, asking them to stop making and selling Strat lookalikes heading for Europe.
One of these letters, seen by the BBC, said Fender "insists that you immediately stop manufacturing, marketing, selling and producing the infringing products".
The letter also demanded that companies recall and destroy the guitars.
The move caused an outcry in the guitar world, among manufacturers and musicians.
"Time to boycott Fender," one person wrote on the Facebook page of the boutique US guitar maker, LSL Instruments.
Thomann received a cease-and-desist letter shortly after a visit to Treppendorf in March by Fender's chief executive Bud Cole.
"We remember the meeting as a very positive and constructive exchange," says Thomann. "At the time we had no indication that Fender was considering legal action."
The letter, he says, came as a shock.
"For more than 70 years, we have carried Fender instruments with great appreciation for the brand and many of us are Fender players ourselves. We were therefore surprised and disappointed by Fender's recent actions."
In 2025, Thomann sold over 112,000 Strat-style guitars, including more than 16,000 made by Fender and Fender subsidiary brand Squier.
"As a retailer, we want to continue offering our customers everything that is available in the world of guitars," adds Thomann. "We would have welcomed to the opportunity to discuss the matter openly before receiving a formal legal demand for such extreme action."
In June, Thomann the company started legal action against Fender, filing an "action of non-infringement" that said that Fender does not have a valid copyright claim to the Stat shape.
Thomann says that the Düsseldorf ruling was simply a default judgement based on missed deadlines and didn't represent a "comprehensive review of the legal claims".
For its part, Fender, which is majority-owned by Hawaii-based company Servco Pacific, says it has a responsibility to protect the Stratocaster's iconic design. In July, it sued Thomann in a German court, for copyright infringement.
In a statement to the BBC, Fender said it remained "confident" in the original Düsseldorf court judgement.
"Our preference has always been to keep lines of communication open and resolve these matters through constructive dialogue rather than litigation," it added.
With the legal cases continuing, Thomann says he believes it is important to get "legal clarity – not only for us but for the wider guitar industry."
"Ultimately, we want to help preserve an environment in which innovation, diversity and creative development can continue to thrive," he adds.
Thomann says he was taking legal action not just for his company, but for smaller music companies too.
"We used to be a small music shop ourselves," he says.
"Many of the smaller manufacturers, guitar makers and dealers affected simply don't have the financial and legal resources to conduct a legal dispute like this."
One such company is LSL Instruments, a family-owned boutique guitar maker in California. Its director of sales, Johny Miller, told me that when they first received Fender's letter they were "pretty terrified and blown away".
"They were asking us to retrieve guitars from dealers out there and destroy them and send them proof.
"So when we heard Hans Thomann got the same letter and responded by suing them… so that everybody in the guitar community could understand exactly what's going on… we were so thankful and grateful," he says.
Fender tells BBC that it agrees that "legal clarity was important", and that it was now focusing more on targeting larger manufacturers.
It also says it realises that "our outreach has caused concern and frustration, particularly among smaller, independent guitar builders. "To them we say: we continue to hear you, and we're listening."
Read more global business stories
- Published3 days ago
- Published12 November
- Published24 September`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cqd01l9x8k48o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-26T00:01:37+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/67c1/live/7aa1e2b0-e80b-11f1-99a1-253766e7ad8b.jpg",
    readTime: 10,
  },
  {
    id: "liesman-why-greenspan-could-bet-on-produ-32e6217a",
    title: "Liesman: Why Greenspan could bet on productivity — and Warsh needs to hike",
    titleJa: "Liesman: Why Greenspan could bet on productivity — and Warsh needs to hike",
    summaryJa: "Alan Greenspan famously held the line on interest rates because he believed in the productivity promise of the internet boom. Why can't Kevin Warsh do the same?",
    bodyOriginal: `In a discussion on CNBC's Halftime Report Wednesday, the question came up: Why can't Federal Reserve Chairman Kevin Warsh hold the line on interest rates the way his icon Alan Greenspan did at the beginning of the dot-com era?
Greenspan famously leaned against inflation hawks on his committee in 1995 and 1996, holding the line on interest rates amid strong growth, because he believed in the productivity promise of the internet revolution.
It would be nice if Warsh could follow the same playbook amid the artificial intelligence build-out and keep rates steady until the productivity arrives. Unfortunately, a quick look at the numbers shows just how different the situation is for Warsh when it comes to inflation, the magnitude of the capital-investment boom and the monetary and fiscal stimulus boosting the economy.
Bottom line: the Fed looks like it has to hike — and maybe substantially — to be anywhere close to the position where the Fed was in Greenspan's time at the dawn of a major technological revolution.
Here are some key points:
- The nominal Fed funds rate was substantially higher in 1995 than it is today. The real, or inflation adjusted, funds rate was a positive 3.75% back then, and it's now at zero. So the Fed was leaning against the dotcom boom. Greenspan just decided not to lean more. Today, at a zero real rate, the Fed could be said to be fueling the boom.
- Inflation, as measured by the personal consumption expenditures price index, was substantially lower, right about target at 1.99% (even though there wasn't a formal 2% target then). It's above target now, at 3.8% according to government data published today, and going the wrong way.
- The current investment boom now is absolutely off the charts compared with the dot-com era. No real comparison. In 1995, spending on information processing equipment rose 15% year over year. In 2025, it was 27%. Looking at the latest data reported today, it grew 60% in the third quarter at an annualized rate. In the second quarter of 1995, it was 18%.
- Government deficit spending is substantially more stimulative now than it was then. In 1995, the deficit was just 2.2% of GDP. Today, it's 6.2%.
- Add higher oil prices, higher tariffs and the recent tax cuts and accelerated depreciation on investments, and there's a lot for the Fed to lean against.
It may be that the massive capex spending on AI will mean more productivity and less inflation down the road. But the front-end build-out is proving to be more inflationary, and more challenging, to a Fed already dealing with high inflation. In many ways, that's the opposite of what Greenspan had to handle.`,
    bodyJa: `In a discussion on CNBC's Halftime Report Wednesday, the question came up: Why can't Federal Reserve Chairman Kevin Warsh hold the line on interest rates the way his icon Alan Greenspan did at the beginning of the dot-com era?
Greenspan famously leaned against inflation hawks on his committee in 1995 and 1996, holding the line on interest rates amid strong growth, because he believed in the productivity promise of the internet revolution.
It would be nice if Warsh could follow the same playbook amid the artificial intelligence build-out and keep rates steady until the productivity arrives. Unfortunately, a quick look at the numbers shows just how different the situation is for Warsh when it comes to inflation, the magnitude of the capital-investment boom and the monetary and fiscal stimulus boosting the economy.
Bottom line: the Fed looks like it has to hike — and maybe substantially — to be anywhere close to the position where the Fed was in Greenspan's time at the dawn of a major technological revolution.
Here are some key points:
- The nominal Fed funds rate was substantially higher in 1995 than it is today. The real, or inflation adjusted, funds rate was a positive 3.75% back then, and it's now at zero. So the Fed was leaning against the dotcom boom. Greenspan just decided not to lean more. Today, at a zero real rate, the Fed could be said to be fueling the boom.
- Inflation, as measured by the personal consumption expenditures price index, was substantially lower, right about target at 1.99% (even though there wasn't a formal 2% target then). It's above target now, at 3.8% according to government data published today, and going the wrong way.
- The current investment boom now is absolutely off the charts compared with the dot-com era. No real comparison. In 1995, spending on information processing equipment rose 15% year over year. In 2025, it was 27%. Looking at the latest data reported today, it grew 60% in the third quarter at an annualized rate. In the second quarter of 1995, it was 18%.
- Government deficit spending is substantially more stimulative now than it was then. In 1995, the deficit was just 2.2% of GDP. Today, it's 6.2%.
- Add higher oil prices, higher tariffs and the recent tax cuts and accelerated depreciation on investments, and there's a lot for the Fed to lean against.
It may be that the massive capex spending on AI will mean more productivity and less inflation down the road. But the front-end build-out is proving to be more inflationary, and more challenging, to a Fed already dealing with high inflation. In many ways, that's the opposite of what Greenspan had to handle.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/25/kevin-warsh-greenspan-fed-rates-ai-inflation.html",
    publishedAt: "2026-11-25T21:56:43+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 7,
  },
  {
    id: "poundland-collapses-putting-11-000-jobs-5330f6f7",
    title: "Poundland collapses putting 11,000 jobs at risk",
    titleJa: "Poundland collapses putting 11,000 jobs at risk",
    summaryJa: "The discount chain has fallen into administration after its owners failed to find a buyer.",
    bodyOriginal: `Poundland collapses putting 11,000 jobs at risk
- Published
Poundland has collapsed into administration, putting 11,000 jobs at risk, after its owners failed to find a buyer to keep it in business.
The retailer's shops and distribution centres will remain open and continue to trade during the administration process with the business likely to be broken up and some of its stores sold off to rival retailers.
Poundland's US owners held talks with several bidders over a last-minute rescue deal, but no agreement was reached.
Poundland boss Barry Williams said in a note to staff that the board had "no alternative but to take this decision", but was making it with "sincere sadness and intense regret".
He said the US owners Gordon Brothers had removed "all borrowing facilities and access to our bank accounts" on 27 October, and adequate funds had not been released since then to keep the business solvent.
"Under these circumstances, it is impossible for the board of directors to see how Poundland can continue to operate as a going concern," he added.
'My income is gone'
Kelvin Blake, 62, who has worked for the firm for 25 years, and whose partner has been there 29 years, said he was feeling "down, depressed", and because of his age, feared he would not find a job elsewhere.
"We didn't want it, but it's come so now we've just got to face it and see what the future holds.
"My income's gone," he added. "Obviously, we'll be working until we're told to leave."
Prime Minister Andy Burnham said Poundland was "part of the fabric of high streets and communities up and down the country".
He said the news of it going into administration just weeks before Christmas would be "deeply concerning for workers and their families".
He added: "While it is worrying, going into administration does give other potential buyers the opportunity to engage and we will work hard with all the relevant parties to ensure the best possible outcome."
Alix Partners, which has been appointed as administrator, said they would look at all options for the business, "including sales of the business and its assets, either in whole or part".
"We appreciate this is a deeply concerning time for all involved - customers, suppliers and, in particular, Poundland colleagues," they said.
Gordon Brothers has been criticised over how it handled a potential sale of Poundland, with accusations the investment firm hoped to profit from selling off the chain's 600 shops and stock piecemeal after running it into the ground.
Gordon Brothers, which specialises in buying and restructuring distressed companies, has denied such claims.
On the funding question, Gordon Brothers said it had loaned the firm £85m over a year to help save it from insolvency.
But insiders critical of the US firm have said it stands to make its loans back and more from the insolvency process.
Previously, Gordon Brothers netted millions from liquidating the stock of fashion retailer LK Bennett, and in insolvency fees.
Labour MP Liam Byrne told the BBC the House of Commons' Business, Innovation, Science and Trade Committee will recall Gordon Brothers before Parliament - two weeks after Gordon Brothers representatives last appeared at the committee to answer questions about Poundland, and where MPs said they were "deeply concerned" about the business.
Byrne said: "I am really worried that a 'greed is good' approach to business by its owners has forced [Poundland] into an administration."
He added the committee wants to know "how much money they're ripping out and crucially, how do we make sure, as a country, that we don't have this kind of scenario unfold again".
What's gone wrong at Poundland?
- Published4 hours ago
Gordon Brothers met Business Secretary Jonathan Reynolds on Monday to update him on the progress.
The firm said on Wednesday that despite the Poundland management bringing about a turnaround over the past year, the firm was "still vulnerable" to inflation and any downturn in sales or profit margin, and it had faced "several years of instability".
A spokesperson added the firm's "thoughts are with Poundland colleagues".
It said it had stepped in to take over the retailer in 2025 when it was struggling, and when "no-one else was willing to finance the business".
One of the central stumbling blocks in negotiations to keep the business afloat was a shareholder loan Gordon Brothers inherited when it bought the business for less than £1 last year.
Gordon Brothers was owed £22.5m of that loan, while the previous owner Pepco was owed £7.5m.
Gordon Brothers rejected various offers to buy the business as a going concern with deals to pay off that loan.
Irish firm Martin Property Group offered to pay off £5m of the loan up front, and defer the rest of the payments to 2030.
London-based Xyra group offered £12.5m up front but ran out of time to get a deal over the line.
German investment firm Zachert Private Equity is also understood to have made a late offer.
All of these were rejected.
The crisis at Poundland really came to a head over the past few weeks after Gordon Brothers restricted access to funds for day-to-day operations.
This meant that stock at the retailer was not being replenished at the necessary pace in the vital run-up to the festive period.
Get in touch
Are you a Poundland employee? Tell us your story. Get in touch.`,
    bodyJa: `Poundland collapses putting 11,000 jobs at risk
- Published
Poundland has collapsed into administration, putting 11,000 jobs at risk, after its owners failed to find a buyer to keep it in business.
The retailer's shops and distribution centres will remain open and continue to trade during the administration process with the business likely to be broken up and some of its stores sold off to rival retailers.
Poundland's US owners held talks with several bidders over a last-minute rescue deal, but no agreement was reached.
Poundland boss Barry Williams said in a note to staff that the board had "no alternative but to take this decision", but was making it with "sincere sadness and intense regret".
He said the US owners Gordon Brothers had removed "all borrowing facilities and access to our bank accounts" on 27 October, and adequate funds had not been released since then to keep the business solvent.
"Under these circumstances, it is impossible for the board of directors to see how Poundland can continue to operate as a going concern," he added.
'My income is gone'
Kelvin Blake, 62, who has worked for the firm for 25 years, and whose partner has been there 29 years, said he was feeling "down, depressed", and because of his age, feared he would not find a job elsewhere.
"We didn't want it, but it's come so now we've just got to face it and see what the future holds.
"My income's gone," he added. "Obviously, we'll be working until we're told to leave."
Prime Minister Andy Burnham said Poundland was "part of the fabric of high streets and communities up and down the country".
He said the news of it going into administration just weeks before Christmas would be "deeply concerning for workers and their families".
He added: "While it is worrying, going into administration does give other potential buyers the opportunity to engage and we will work hard with all the relevant parties to ensure the best possible outcome."
Alix Partners, which has been appointed as administrator, said they would look at all options for the business, "including sales of the business and its assets, either in whole or part".
"We appreciate this is a deeply concerning time for all involved - customers, suppliers and, in particular, Poundland colleagues," they said.
Gordon Brothers has been criticised over how it handled a potential sale of Poundland, with accusations the investment firm hoped to profit from selling off the chain's 600 shops and stock piecemeal after running it into the ground.
Gordon Brothers, which specialises in buying and restructuring distressed companies, has denied such claims.
On the funding question, Gordon Brothers said it had loaned the firm £85m over a year to help save it from insolvency.
But insiders critical of the US firm have said it stands to make its loans back and more from the insolvency process.
Previously, Gordon Brothers netted millions from liquidating the stock of fashion retailer LK Bennett, and in insolvency fees.
Labour MP Liam Byrne told the BBC the House of Commons' Business, Innovation, Science and Trade Committee will recall Gordon Brothers before Parliament - two weeks after Gordon Brothers representatives last appeared at the committee to answer questions about Poundland, and where MPs said they were "deeply concerned" about the business.
Byrne said: "I am really worried that a 'greed is good' approach to business by its owners has forced [Poundland] into an administration."
He added the committee wants to know "how much money they're ripping out and crucially, how do we make sure, as a country, that we don't have this kind of scenario unfold again".
What's gone wrong at Poundland?
- Published4 hours ago
Gordon Brothers met Business Secretary Jonathan Reynolds on Monday to update him on the progress.
The firm said on Wednesday that despite the Poundland management bringing about a turnaround over the past year, the firm was "still vulnerable" to inflation and any downturn in sales or profit margin, and it had faced "several years of instability".
A spokesperson added the firm's "thoughts are with Poundland colleagues".
It said it had stepped in to take over the retailer in 2025 when it was struggling, and when "no-one else was willing to finance the business".
One of the central stumbling blocks in negotiations to keep the business afloat was a shareholder loan Gordon Brothers inherited when it bought the business for less than £1 last year.
Gordon Brothers was owed £22.5m of that loan, while the previous owner Pepco was owed £7.5m.
Gordon Brothers rejected various offers to buy the business as a going concern with deals to pay off that loan.
Irish firm Martin Property Group offered to pay off £5m of the loan up front, and defer the rest of the payments to 2030.
London-based Xyra group offered £12.5m up front but ran out of time to get a deal over the line.
German investment firm Zachert Private Equity is also understood to have made a late offer.
All of these were rejected.
The crisis at Poundland really came to a head over the past few weeks after Gordon Brothers restricted access to funds for day-to-day operations.
This meant that stock at the retailer was not being replenished at the necessary pace in the vital run-up to the festive period.
Get in touch
Are you a Poundland employee? Tell us your story. Get in touch.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cm3vgdn037z4o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-25T21:31:10+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/5177/live/c7a2f690-e8fa-11f1-99a1-253766e7ad8b.jpg",
    readTime: 10,
  },
  {
    id: "macy-s-postpones-thanksgiving-day-parade-f736cfca",
    title: "Macy's postpones Thanksgiving Day Parade due to severe weather",
    titleJa: "Macy's postpones Thanksgiving Day Parade due to severe weather",
    summaryJa: "Macy's announced on Wednesday that the annual Thanksgiving Day Parade is being postponed to Saturday due to severe weather.",
    bodyOriginal: `Macy's on Wednesday announced it's postponing the annual Thanksgiving Day Parade due to severe weather.
The parade, held each year on Thursday morning, will now take place on Saturday at 8:30 a.m. ET, according to the company. The New York City area is expected to have heavy rain and thunderstorms on Thanksgiving.
"The safety of our participants and spectators is our top priority, and after close consultation with our city and agency partners, we have made the decision to move this year's celebration," Macy's said in a statement.
This year's event marks the 100th Macy's Thanksgiving Day Parade. The annual event has never been canceled due to weather, though it was suspended between 1942 and 1944 for World War II.
The parade's viability this year had been in question after concerns arose over strong winds that could become dangerous for the massive balloons that the event is known for. Many of the balloons had already been inflated as of Wednesday afternoon.
The postponement also means thousands of volunteers and artists slated to perform will have to adapt to Saturday's schedule.`,
    bodyJa: `Macy's on Wednesday announced it's postponing the annual Thanksgiving Day Parade due to severe weather.
The parade, held each year on Thursday morning, will now take place on Saturday at 8:30 a.m. ET, according to the company. The New York City area is expected to have heavy rain and thunderstorms on Thanksgiving.
"The safety of our participants and spectators is our top priority, and after close consultation with our city and agency partners, we have made the decision to move this year's celebration," Macy's said in a statement.
This year's event marks the 100th Macy's Thanksgiving Day Parade. The annual event has never been canceled due to weather, though it was suspended between 1942 and 1944 for World War II.
The parade's viability this year had been in question after concerns arose over strong winds that could become dangerous for the massive balloons that the event is known for. Many of the balloons had already been inflated as of Wednesday afternoon.
The postponement also means thousands of volunteers and artists slated to perform will have to adapt to Saturday's schedule.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/25/macys-thanksgiving-day-parade-postponed.html",
    publishedAt: "2026-11-25T21:26:36+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "vance-says-he-was-assured-jensen-huang-w-92850af2",
    title: "Vance says he was assured Jensen Huang was not under DOJ investigation",
    titleJa: "Vance says he was assured Jensen Huang was not under DOJ investigation",
    summaryJa: "Whether the Trump administration has investigated Jensen Huang for potential national security risks has been the subject of questions.",
    bodyOriginal: `Vice President JD Vance said Wednesday that Attorney General Todd Blanche told him Nvidia CEO Jensen Huang was not under investigation.
"I was told by the Department of Justice and multiple officials in our national security apparatus that he was under no investigation," Vance told reporters in Ohio on Wednesday after being asked what assurances he had gotten that Huang was not under investigation. "Not even that he was about to be prosecuted; that he's under no investigation."
Vance spoke two days after President Donald Trump told CNBC in an interview that an investigation had been done.
Trump was asked what Blanche had told him about potential criminal liability for Huang and the question of whether Nvidia chips had ended up in China in violation of U.S. export laws.
"They did a pretty good investigation, and they felt that he, himself, was exonerated," Trump said Monday.
Reuters reported Wednesday that the Department of Justice did not conduct a formal investigation into Huang before Trump pushed for his reinstatement as CEO.
Blanche had concluded there was no evidence Huang had broken any laws based on investigations into Nvidia clients Super Micro Computer and Megaspeed, according to the report.
The DOJ did not immediately respond to a request for comment on the Reuters report. And the White House didn't immediately respond to a request for comment on Vance saying Huang was under no investigation when Trump had said there was one. Nvidia didn't immediately respond to a request for comment about Vance's remarks.
Blanche on Tuesday dodged questions about whether there had been an investigation.
"What the president said is that he talked to a lot of people going into the decision that he made to encourage the board to reinstate him," Blanche said after being asked whether the DOJ had investigated Huang and, if so, what were the results of the probe.
Huang was reinstated as CEO of Nvidia on Monday, after the chipmaker's board of directors said it had received "input from senior levels of the United States government" that Huang was not a national security risk. Trump took credit for Huang's reinstatement in the interview with CNBC shortly after Nvidia's announcement.
Huang resigned following The New York Times reporting multiple affairs, including one with a Chinese businesswoman who is alleged to be a spy for Beijing and who was an executive for the Singapore-based cloud provider Megaspeed.
The reporting added fuel to allegations that Nvidia should have known its artificial intelligence chips were being diverted to China and being used by Chinese companies, violating U.S. export laws.
"The product they create is a very important part of us staying ahead of the SI arms race with China. We really do care about ensuring those chips do not fall into the wrong hands," Vance said, using the Trump administration's preferred acronym for AI, which the president calls "super intelligence."
"We actually see this is an opportunity for Nvidia to focus on complying with American export controls, and we think Jensen Huang is going to take that very seriously," Vance continued.
"We received the assurances that he was not under any significant — he was under no investigation — and the accusations against him were based on anonymous reporting, not on actual evidence," Vance said.
On Tuesday, Trump left the door open to pardon Huang in an interview with the New York Post, but Vance said on Wednesday that the CEO doesn't need one.
"I don't think he needs a pardon at all," Vance said. "I haven't seen any evidence again that he committed a crime. And if there is evidence that he committed a crime, then that's up to relevant authorities to actually bring a prosecution against him."
Huang is scheduled to appear for a closed-door interview with House committees about his dealings with Megaspeed on Tuesday. At the same time, Nvidia will hold its annual conference where it showcases new technology in Washington.
— Kevin Breuninger contributed to this report.`,
    bodyJa: `Vice President JD Vance said Wednesday that Attorney General Todd Blanche told him Nvidia CEO Jensen Huang was not under investigation.
"I was told by the Department of Justice and multiple officials in our national security apparatus that he was under no investigation," Vance told reporters in Ohio on Wednesday after being asked what assurances he had gotten that Huang was not under investigation. "Not even that he was about to be prosecuted; that he's under no investigation."
Vance spoke two days after President Donald Trump told CNBC in an interview that an investigation had been done.
Trump was asked what Blanche had told him about potential criminal liability for Huang and the question of whether Nvidia chips had ended up in China in violation of U.S. export laws.
"They did a pretty good investigation, and they felt that he, himself, was exonerated," Trump said Monday.
Reuters reported Wednesday that the Department of Justice did not conduct a formal investigation into Huang before Trump pushed for his reinstatement as CEO.
Blanche had concluded there was no evidence Huang had broken any laws based on investigations into Nvidia clients Super Micro Computer and Megaspeed, according to the report.
The DOJ did not immediately respond to a request for comment on the Reuters report. And the White House didn't immediately respond to a request for comment on Vance saying Huang was under no investigation when Trump had said there was one. Nvidia didn't immediately respond to a request for comment about Vance's remarks.
Blanche on Tuesday dodged questions about whether there had been an investigation.
"What the president said is that he talked to a lot of people going into the decision that he made to encourage the board to reinstate him," Blanche said after being asked whether the DOJ had investigated Huang and, if so, what were the results of the probe.
Huang was reinstated as CEO of Nvidia on Monday, after the chipmaker's board of directors said it had received "input from senior levels of the United States government" that Huang was not a national security risk. Trump took credit for Huang's reinstatement in the interview with CNBC shortly after Nvidia's announcement.
Huang resigned following The New York Times reporting multiple affairs, including one with a Chinese businesswoman who is alleged to be a spy for Beijing and who was an executive for the Singapore-based cloud provider Megaspeed.
The reporting added fuel to allegations that Nvidia should have known its artificial intelligence chips were being diverted to China and being used by Chinese companies, violating U.S. export laws.
"The product they create is a very important part of us staying ahead of the SI arms race with China. We really do care about ensuring those chips do not fall into the wrong hands," Vance said, using the Trump administration's preferred acronym for AI, which the president calls "super intelligence."
"We actually see this is an opportunity for Nvidia to focus on complying with American export controls, and we think Jensen Huang is going to take that very seriously," Vance continued.
"We received the assurances that he was not under any significant — he was under no investigation — and the accusations against him were based on anonymous reporting, not on actual evidence," Vance said.
On Tuesday, Trump left the door open to pardon Huang in an interview with the New York Post, but Vance said on Wednesday that the CEO doesn't need one.
"I don't think he needs a pardon at all," Vance said. "I haven't seen any evidence again that he committed a crime. And if there is evidence that he committed a crime, then that's up to relevant authorities to actually bring a prosecution against him."
Huang is scheduled to appear for a closed-door interview with House committees about his dealings with Megaspeed on Tuesday. At the same time, Nvidia will hold its annual conference where it showcases new technology in Washington.
— Kevin Breuninger contributed to this report.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/25/vance-jensen-huang-nvidia-doj-investigation.html",
    publishedAt: "2026-11-25T21:00:08+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "spacex-wins-fcc-approval-to-deploy-1-mil-eb47aa85",
    title: "SpaceX wins FCC approval to deploy 1 million orbital data center satellites",
    titleJa: "SpaceX wins FCC approval to deploy 1 million orbital data center satellites",
    summaryJa: "SpaceX won approval from the FCC to put 1 million orbital data center satellites into space, a proposal that was opposed by Amazon and other groups.",
    bodyOriginal: `The Federal Communications Commission has authorized Elon Musk's SpaceX to put 1 million artificial intelligence computing satellites in orbit, Chairman Brendan Carr announced on Wednesday.
Carr said in a post on X, the social network owned by SpaceX, that the company's Starmind constellation, and "competitor constellations will use solar power to extend America's lead" in AI.
Musk said in a reply, "Much appreciated. This will be a great asset to America and the world."
The FCC, in its authorization filing, noted that SpaceX's application "received a substantial number of comments from the public, including petitions to deny filed by Kuiper Systems LLC (Amazon Leo), Viasat Inc. (Viasat), and the American Astronomical Society (AAS)."
In a March petition urging the FCC to deny SpaceX's application, Amazon had labeled the company's Starmind project as a "lofty ambition rather than a real plan."
The e-commerce and cloud computing giant is building a competitor to SpaceX's Starlink satellite internet service, and said it would take SpaceX "centuries" to build the constellation, adding that the company provided scant details about how it would "deliver on these grand claims."
The petition resulted in a rebuke from Carr, who said Amazon "should focus on the fact" that it's falling short of its own satellite deployment milestone.
Amazon declined to comment on the FCC's approval.
Other companies have also set their sights on orbital data centers. Google last year announced Project Suncatcher, which it describes as a "moonshot to put AI in space," and launched its first chips into space on a SpaceX rocket and Planet Labs satellite in October.
In March, Jeff Bezos' Blue Origin petitioned the FCC to let it launch up to 51,600 satellites as part of a low Earth orbit satellite constellation dubbed "Project Sunrise." The constellation would work in tandem with Blue Origin's planned TeraWave satellite internet service, announced in January.
Astrophysicist and author Adam Becker was critical of the FCC move in an email to CNBC on Wednesday.
"Any serious attempt at this is going to further pollute the night sky and runs a serious risk of a cascading chain reaction of space junk collisions, which would be a disaster for all of humanity," he wrote. "Musk and Carr are either profoundly stupid themselves, or hoping the rest of us are too stupid to notice this is nonsense."
SpaceX did not respond to a request for comment.
The FCC said in its authorization that it dismissed "comments and concerns raised regarding topics over which the Commission has no authority, including environmental concerns," and concerns about its impact on "optical astronomy."
This story is developing. Please check back for updates.`,
    bodyJa: `The Federal Communications Commission has authorized Elon Musk's SpaceX to put 1 million artificial intelligence computing satellites in orbit, Chairman Brendan Carr announced on Wednesday.
Carr said in a post on X, the social network owned by SpaceX, that the company's Starmind constellation, and "competitor constellations will use solar power to extend America's lead" in AI.
Musk said in a reply, "Much appreciated. This will be a great asset to America and the world."
The FCC, in its authorization filing, noted that SpaceX's application "received a substantial number of comments from the public, including petitions to deny filed by Kuiper Systems LLC (Amazon Leo), Viasat Inc. (Viasat), and the American Astronomical Society (AAS)."
In a March petition urging the FCC to deny SpaceX's application, Amazon had labeled the company's Starmind project as a "lofty ambition rather than a real plan."
The e-commerce and cloud computing giant is building a competitor to SpaceX's Starlink satellite internet service, and said it would take SpaceX "centuries" to build the constellation, adding that the company provided scant details about how it would "deliver on these grand claims."
The petition resulted in a rebuke from Carr, who said Amazon "should focus on the fact" that it's falling short of its own satellite deployment milestone.
Amazon declined to comment on the FCC's approval.
Other companies have also set their sights on orbital data centers. Google last year announced Project Suncatcher, which it describes as a "moonshot to put AI in space," and launched its first chips into space on a SpaceX rocket and Planet Labs satellite in October.
In March, Jeff Bezos' Blue Origin petitioned the FCC to let it launch up to 51,600 satellites as part of a low Earth orbit satellite constellation dubbed "Project Sunrise." The constellation would work in tandem with Blue Origin's planned TeraWave satellite internet service, announced in January.
Astrophysicist and author Adam Becker was critical of the FCC move in an email to CNBC on Wednesday.
"Any serious attempt at this is going to further pollute the night sky and runs a serious risk of a cascading chain reaction of space junk collisions, which would be a disaster for all of humanity," he wrote. "Musk and Carr are either profoundly stupid themselves, or hoping the rest of us are too stupid to notice this is nonsense."
SpaceX did not respond to a request for comment.
The FCC said in its authorization that it dismissed "comments and concerns raised regarding topics over which the Commission has no authority, including environmental concerns," and concerns about its impact on "optical astronomy."
This story is developing. Please check back for updates.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/25/spacex-fcc-satellite-approval.html",
    publishedAt: "2026-11-25T19:52:47+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 7,
  },
  {
    id: "saudi-national-in-openai-bugging-case-is-2973378a",
    title: "Saudi national in OpenAI bugging case is out on bond after DOJ tries to block release",
    titleJa: "Saudi national in OpenAI bugging case is out on bond after DOJ tries to block release",
    summaryJa: "Abdulrahman Alfozan, a former OpenAI engineer, is expected to be fitted with an ankle monitor, his attorney, David Rizk, previously told CNBC.",
    bodyOriginal: `Abdulrahman Alfozan, the Saudi national accused of bugging an executive conference room at OpenAI's headquarters, has been released from custody, his attorney told CNBC on Wednesday.
The confirmation of Alfozan's release came a day after a federal judge in San Francisco said the defendant would be allowed out of jail on a $1 million bond, despite prosecutors' warnings that he posed a serious flight risk.
Alfozan, a former OpenAI engineer, is expected to be fitted with an ankle monitor, his attorney, David Rizk, previously told CNBC.
Alfozan was scheduled to be released from detention Wednesday morning at 8 a.m. PT. Shortly before that deadline, U.S. Attorney Craig Missakian of the Northern District of California urged the court to maintain Alfozan's detention pending trial, "given the significant risk that the defendant will flee to Saudi Arabia if he is released from custody."
In an order posted on the case docket later Wednesday, Judge Vince Chhabria said the court only learned of the government's last-minute bid to block Alfozan's release after he had already been let out.
The government's motion "is therefore denied as moot," Chhabria's order stated. The judge set a hearing for Dec. 3 on the bid to revoke the magistrate judge's order releasing Alfozan.
Pointing to Alfozan's "ample resources, significant family and professional ties to Saudi Arabia, and few remaining ties to the United States," Missakian had argued in a court filing that the release conditions imposed by Magistrate Judge Alex Tse "are insufficient to safeguard the defendant's appearance for future proceedings in this case."
Alfozan "presents a serious risk of flight that no set of release conditions can reasonably mitigate," Missakian wrote.
His office sought to pause the magistrate judge's release order until a ruling on a motion to revoke it. The Department of Justice did not immediately respond to CNBC's request for comment on Alfozan's release.
Tse in a court hearing Tuesday ruled in favor of Rizk's motion for his client's release, which said prosecutors have admitted finding "no new evidence to support the theory that Mr. Alfozan was stealing trade secrets, or to support the speculation that he was acting as an unregistered foreign agent for Saudi Arabia."
In a text message to CNBC after that hearing, Rizk said, "We are simply grateful that the Court made the right decision to release Mr. Alfozan and now we look forward to defending the case."
But Missakian's filing Wednesday morning pushed back, saying "the government's investigation of this seven-week-old case is ongoing."
Prosecutors have so far found "hundreds of audio files" on Alfozan's personal computer, "including dozens of recordings of meetings or conversations that occurred at OpenAI throughout September 2026, at least one of which involved representatives of a foreign government and many of which involved discussions of what may be trade secrets," according to the filing.
"To be sure, what the defendant did or intended to do with those audio files remains under investigation, but the absence of that evidence at this point has no bearing" on whether Alfozan is a flight risk, Missakian argued.
Alfozan was arrested Oct. 9 and is accused of concealing a recording device in the artificial intelligence company's conference room to secretly record discussions. The device was found in a USB port in a television in the room on Sept. 30, prosecutors have said.
Jury selection for Alfozan's trial is scheduled to begin Jan. 20.
— CNBC's Dan Mangan contributed to this report.`,
    bodyJa: `Abdulrahman Alfozan, the Saudi national accused of bugging an executive conference room at OpenAI's headquarters, has been released from custody, his attorney told CNBC on Wednesday.
The confirmation of Alfozan's release came a day after a federal judge in San Francisco said the defendant would be allowed out of jail on a $1 million bond, despite prosecutors' warnings that he posed a serious flight risk.
Alfozan, a former OpenAI engineer, is expected to be fitted with an ankle monitor, his attorney, David Rizk, previously told CNBC.
Alfozan was scheduled to be released from detention Wednesday morning at 8 a.m. PT. Shortly before that deadline, U.S. Attorney Craig Missakian of the Northern District of California urged the court to maintain Alfozan's detention pending trial, "given the significant risk that the defendant will flee to Saudi Arabia if he is released from custody."
In an order posted on the case docket later Wednesday, Judge Vince Chhabria said the court only learned of the government's last-minute bid to block Alfozan's release after he had already been let out.
The government's motion "is therefore denied as moot," Chhabria's order stated. The judge set a hearing for Dec. 3 on the bid to revoke the magistrate judge's order releasing Alfozan.
Pointing to Alfozan's "ample resources, significant family and professional ties to Saudi Arabia, and few remaining ties to the United States," Missakian had argued in a court filing that the release conditions imposed by Magistrate Judge Alex Tse "are insufficient to safeguard the defendant's appearance for future proceedings in this case."
Alfozan "presents a serious risk of flight that no set of release conditions can reasonably mitigate," Missakian wrote.
His office sought to pause the magistrate judge's release order until a ruling on a motion to revoke it. The Department of Justice did not immediately respond to CNBC's request for comment on Alfozan's release.
Tse in a court hearing Tuesday ruled in favor of Rizk's motion for his client's release, which said prosecutors have admitted finding "no new evidence to support the theory that Mr. Alfozan was stealing trade secrets, or to support the speculation that he was acting as an unregistered foreign agent for Saudi Arabia."
In a text message to CNBC after that hearing, Rizk said, "We are simply grateful that the Court made the right decision to release Mr. Alfozan and now we look forward to defending the case."
But Missakian's filing Wednesday morning pushed back, saying "the government's investigation of this seven-week-old case is ongoing."
Prosecutors have so far found "hundreds of audio files" on Alfozan's personal computer, "including dozens of recordings of meetings or conversations that occurred at OpenAI throughout September 2026, at least one of which involved representatives of a foreign government and many of which involved discussions of what may be trade secrets," according to the filing.
"To be sure, what the defendant did or intended to do with those audio files remains under investigation, but the absence of that evidence at this point has no bearing" on whether Alfozan is a flight risk, Missakian argued.
Alfozan was arrested Oct. 9 and is accused of concealing a recording device in the artificial intelligence company's conference room to secretly record discussions. The device was found in a USB port in a television in the room on Sept. 30, prosecutors have said.
Jury selection for Alfozan's trial is scheduled to begin Jan. 20.
— CNBC's Dan Mangan contributed to this report.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/25/openai-bugging-aflozan-bond-release-saudi.html",
    publishedAt: "2026-11-25T19:11:53+00:00",
    category: "貿易",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
    readTime: 9,
  },
  {
    id: "us-stocks-fall-further-as-fears-over-ai-83aab49f",
    title: "US stocks fall further as fears over AI intensify",
    titleJa: "US stocks fall further as fears over AI intensify",
    summaryJa: "All three main US indexes were down in early trading, with the tech-dominated Nasdaq down almost 4%.",
    bodyOriginal: `US stocks fall further as fears over AI intensify
- Published
Big technology firms connected to AI continued to see share prices fall on Wednesday, with stock in Nvidia and Anthropic dropping sharply in early trading.
The surge in Nvidia shares after boss Jensen Huang was reinstated was temporary, and the general stock sell-off continued, with all three main US stock market indices down. The tech-dominated Nasdaq has shed over 2%.
The declines come amid concerns over the level and sustainability of AI investment which has rattled investors in recent weeks.
Shares in other major tech firms, including Amazon, Tesla and SpaceX, Micrsoft and Meta were also down.
Nvidia's share price was down 8% in early trading on Wednesday, extending Tuesday's slide as the boost from Huang's return eased.
The resignation and subsequent reinstatement of Nvidia boss Jensen Huang after revelations of his extra marital affairs has seen the market value of the world's premier AI chipmaker fluctuate wildly.
Given Nvidia's position as both supplier and financier of many other firms involved in the AI rollout, its rocky fortnight has had a wider impact.
The US government also announced a raft of new tariffs on countries and trading partners on Wednesday as part of President Donald Trump's flagship trade policy.
The value of big tech companies have sheltered the US economy from global economic shocks, including tariffs, but share prices in recent weeks have been volatile in response to the US midterm elections and other events in the AI industry.
Faisal Islam: Fears over the AI boom haven't gone away
- Published1 day ago
Investors have taken fright at Democrat gains in the US midterm elections, with many having campaigned for tougher regulation of AI firms and even a moratorium on the development of new data centres.
Questions also remain about whether the huge sums being invested in AI will eventually pay off.
"It seems that these companies are trying to one-up each other on the amount of money that they're spending but you have to show that it's worth it, and that's where Wall Street is saying I don't know," said Todd Schoenberger, chief investment officer at CrossCheck Management.
Despite concerns, investment in AI is expected to exceed $1 trillion in 2026, according to investment bank Goldman Sachs, which said the technology will remain the "dominant driver of business investment growth" next year.
Shares in Anthropic continued to trade below the $83 they debuted at last week, while Amazon shares fell by more than 5%.
The declines come ahead of the US stock market closing for Thanksgiving on Thursday before opening for a shortened session on Friday.`,
    bodyJa: `US stocks fall further as fears over AI intensify
- Published
Big technology firms connected to AI continued to see share prices fall on Wednesday, with stock in Nvidia and Anthropic dropping sharply in early trading.
The surge in Nvidia shares after boss Jensen Huang was reinstated was temporary, and the general stock sell-off continued, with all three main US stock market indices down. The tech-dominated Nasdaq has shed over 2%.
The declines come amid concerns over the level and sustainability of AI investment which has rattled investors in recent weeks.
Shares in other major tech firms, including Amazon, Tesla and SpaceX, Micrsoft and Meta were also down.
Nvidia's share price was down 8% in early trading on Wednesday, extending Tuesday's slide as the boost from Huang's return eased.
The resignation and subsequent reinstatement of Nvidia boss Jensen Huang after revelations of his extra marital affairs has seen the market value of the world's premier AI chipmaker fluctuate wildly.
Given Nvidia's position as both supplier and financier of many other firms involved in the AI rollout, its rocky fortnight has had a wider impact.
The US government also announced a raft of new tariffs on countries and trading partners on Wednesday as part of President Donald Trump's flagship trade policy.
The value of big tech companies have sheltered the US economy from global economic shocks, including tariffs, but share prices in recent weeks have been volatile in response to the US midterm elections and other events in the AI industry.
Faisal Islam: Fears over the AI boom haven't gone away
- Published1 day ago
Investors have taken fright at Democrat gains in the US midterm elections, with many having campaigned for tougher regulation of AI firms and even a moratorium on the development of new data centres.
Questions also remain about whether the huge sums being invested in AI will eventually pay off.
"It seems that these companies are trying to one-up each other on the amount of money that they're spending but you have to show that it's worth it, and that's where Wall Street is saying I don't know," said Todd Schoenberger, chief investment officer at CrossCheck Management.
Despite concerns, investment in AI is expected to exceed $1 trillion in 2026, according to investment bank Goldman Sachs, which said the technology will remain the "dominant driver of business investment growth" next year.
Shares in Anthropic continued to trade below the $83 they debuted at last week, while Amazon shares fell by more than 5%.
The declines come ahead of the US stock market closing for Thanksgiving on Thursday before opening for a shortened session on Friday.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cq0md8g14zryo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-25T17:48:09+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/9f2e/live/6940e8e0-e8f1-11f1-99a1-253766e7ad8b.jpg",
    readTime: 7,
  },
  {
    id: "what-s-gone-wrong-at-poundland-e6272212",
    title: "What's gone wrong at Poundland?",
    titleJa: "What's gone wrong at Poundland?",
    summaryJa: "What's gone wrong at Poundland?- Published",
    bodyOriginal: `What's gone wrong at Poundland?
- Published
The future of Poundland hangs in the balance after the discount retailer's collapse into administration.
Its owner, US investment firm Gordon Brothers, put it up for sale in September, but then rejected offers to keep the business afloat.
Poundland has a major presence on the High Street, with 600 stores in the UK and Ireland, where it trades under the Dealz brand.
Its collapse puts the jobs of its 11,000 employees at risk, as well as potentially thousands of others at firms that supply the retailer.
How have we got here?
Have people stopped shopping at Poundland?
People have not stopped shopping at Poundland - quite the opposite.
Although the chain was struggling when it was sold by Pepco last year for £1, the business turned a corner over the year to September, going from a £68m loss to an £18.1m profit before interest, tax and certain accounting charges.
Going into the vital Christmas period, first-quarter like-for-like sales were up 7% and operational profits of £1.9m were up £1.2m on last year.
According to Julie Palmer, managing partner at insolvency specialist Begbies Traynor, "this isn't a story about shoppers abandoning Poundland".
She told the BBC the tills were "busier than they were a year ago", adding that on the face of it a turnaround seemed "well under way".
However, Gordon Brothers had been restricting Poundland's access to cash needed to restock stores and meet day-to-day expenses.
So why is it now in administration?
Poundland faced "a funding and ownership problem rather than a trading collapse", according to Palmer.
However, while Poundland boss Barry Williams claimed the business was making a "strong recovery", Gordon Brothers painted a different picture, saying the chain remained "challenged and vulnerable to any potential downturn in future trading".
It said it had provided significant funding to support the company's ability to trade since it acquired the business.
Poundland collapses putting 11,000 jobs at risk
- Published10 minutes ago
Poundland workers 'in limbo' over firm's future
- Published1 day ago
It has also made about £18m from a combination of debt interest payments and other fees and charges.
As well as being Poundland's owner, it is one of its lenders, and is owed loans, including a £22.5m shareholder loan it inherited when it bought the business for £1.
As the main creditor, Gordon Brothers would be first in line to get paid back if the business goes under - but its suppliers are not.
"When the owner is also the main lender, its first priority is recovering [loans]," says Palmer. "Sometimes the route that best protects the lender is different from the one that saves the most jobs, and that tension is why this has become such a political story."
Irish firm Martin Property Group, London-based holding company Xyra Group and German investment firm Zachert Private Equity are all also understood to have made offers for Poundland.
Gordon Brothers had also been weighing options to break Poundland up.
Its view was that ultimately breaking the retailer up would provide more security for employees in the long term, because any buyers of its store estate would also have to agree to keep the employees on.
Insiders who are critical of how Gordon Brothers has handled the Poundland sale accuse it of driving the business into the ground to make money through the insolvency process.
But the investment firm, which specialises in buying and restructuring distressed companies, has denied the claim.
What's next for Poundland?
Now that the company has entered administration, consultants at Alix Partners have been appointed to pursue a sale of the business and its assets.
There are various options on the table, which include securing a buyer for the business either in whole or piecemeal.
The prime minister has said he wants "every effort made to secure a deal that protects jobs and keeps as many shops open as possible".
In the immediate future, Poundland stores and distribution centres will continue operating as normal.`,
    bodyJa: `What's gone wrong at Poundland?
- Published
The future of Poundland hangs in the balance after the discount retailer's collapse into administration.
Its owner, US investment firm Gordon Brothers, put it up for sale in September, but then rejected offers to keep the business afloat.
Poundland has a major presence on the High Street, with 600 stores in the UK and Ireland, where it trades under the Dealz brand.
Its collapse puts the jobs of its 11,000 employees at risk, as well as potentially thousands of others at firms that supply the retailer.
How have we got here?
Have people stopped shopping at Poundland?
People have not stopped shopping at Poundland - quite the opposite.
Although the chain was struggling when it was sold by Pepco last year for £1, the business turned a corner over the year to September, going from a £68m loss to an £18.1m profit before interest, tax and certain accounting charges.
Going into the vital Christmas period, first-quarter like-for-like sales were up 7% and operational profits of £1.9m were up £1.2m on last year.
According to Julie Palmer, managing partner at insolvency specialist Begbies Traynor, "this isn't a story about shoppers abandoning Poundland".
She told the BBC the tills were "busier than they were a year ago", adding that on the face of it a turnaround seemed "well under way".
However, Gordon Brothers had been restricting Poundland's access to cash needed to restock stores and meet day-to-day expenses.
So why is it now in administration?
Poundland faced "a funding and ownership problem rather than a trading collapse", according to Palmer.
However, while Poundland boss Barry Williams claimed the business was making a "strong recovery", Gordon Brothers painted a different picture, saying the chain remained "challenged and vulnerable to any potential downturn in future trading".
It said it had provided significant funding to support the company's ability to trade since it acquired the business.
Poundland collapses putting 11,000 jobs at risk
- Published10 minutes ago
Poundland workers 'in limbo' over firm's future
- Published1 day ago
It has also made about £18m from a combination of debt interest payments and other fees and charges.
As well as being Poundland's owner, it is one of its lenders, and is owed loans, including a £22.5m shareholder loan it inherited when it bought the business for £1.
As the main creditor, Gordon Brothers would be first in line to get paid back if the business goes under - but its suppliers are not.
"When the owner is also the main lender, its first priority is recovering [loans]," says Palmer. "Sometimes the route that best protects the lender is different from the one that saves the most jobs, and that tension is why this has become such a political story."
Irish firm Martin Property Group, London-based holding company Xyra Group and German investment firm Zachert Private Equity are all also understood to have made offers for Poundland.
Gordon Brothers had also been weighing options to break Poundland up.
Its view was that ultimately breaking the retailer up would provide more security for employees in the long term, because any buyers of its store estate would also have to agree to keep the employees on.
Insiders who are critical of how Gordon Brothers has handled the Poundland sale accuse it of driving the business into the ground to make money through the insolvency process.
But the investment firm, which specialises in buying and restructuring distressed companies, has denied the claim.
What's next for Poundland?
Now that the company has entered administration, consultants at Alix Partners have been appointed to pursue a sale of the business and its assets.
There are various options on the table, which include securing a buyer for the business either in whole or piecemeal.
The prime minister has said he wants "every effort made to secure a deal that protects jobs and keeps as many shops open as possible".
In the immediate future, Poundland stores and distribution centres will continue operating as normal.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cm4g10p2r0g9o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-25T17:00:32+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/fbc6/live/78341a50-e8f8-11f1-99a1-253766e7ad8b.jpg",
    readTime: 10,
  },
  {
    id: "u-s-proposes-new-tariffs-on-14-trading-p-4a5f51e6",
    title: "U.S. proposes new tariffs on 14 trading partners, including China and the EU",
    titleJa: "U.S. proposes new tariffs on 14 trading partners, including China and the EU",
    summaryJa: "The new levies seek to counter foreign trade practices deemed unfair, discriminatory or burdensome to U.S. commerce.",
    bodyOriginal: `The U.S. is preparing new tariffs on 14 economies, including China, the EU, Japan and India, following investigations into what the Trump administration says are excess manufacturing practices that disadvantage U.S. commerce.
The administration launched those and other trade investigations in March, weeks after the Supreme Court unraveled a major piece of President Donald Trump's tariff-heavy economic policy by striking down his "liberation day" duties. Trump has since been accused by critics of his tariffs of trying to revive the canceled duties using other legal authorities.
The latest action targets foreign economies that create, sustain or contribute to structural excess capacity and production in manufacturing sectors that the U.S. finds unreasonable and burdensome or restrictive to its commerce, a senior U.S. official told reporters Tuesday evening.
The new tariffs are "targeted," not blanket rates, and will vary for each economy, and many will not exceed the rates established in previously reached trade deals, said the official, who spoke on condition of anonymity to discuss the forthcoming duties.
The rates, which mostly range from 15% to 20%, are "not really additive" and generally will not stack on top of existing duties, U.S. Trade Representative Jamieson Greer told CNBC's "Squawk Box" Wednesday morning.
"In effect, it'll look more like a top up," Greer said. "When it all nets out, it really will just top up a few percentage points."
An exception is China, which faces a 20% rate under the new tariff policy, "so it will go up some," Greer said. But at the same time, both countries are moving to remove tariffs on some of each other's goods in what Greer called "stability-generating activity through this action."
The senior U.S. official said Tuesday that the 20% rate will come on top of the so-called forced technology transfer-related tariffs of roughly 25%, which were implemented during Trump's first presidential term. U.S. tariffs on Chinese goods will therefore reach about 45%, give or take for different goods, the official said.
Average U.S. tariffs rates on Chinese goods stood at about 36.5% as of July, according to the Congressional Research Service.
Greer also said on CNBC that the new policy likely will not take effect for months.
"We've talked to our trading partners about this. They know what we're proposing," he said. "I think a lot of this is baked in, and I don't think any of these would actually take effect earlier than a couple months from now."
The administration says the tariffs target what it calls "overcapacity" — excess industrial production, often supported by government subsidies, that allows cheaper goods to flood global markets and undercut U.S. producers.
China has disputed the allegations. "The so-called 'overcapacity' does not really exist," China's foreign ministry said Wednesday before the official reports were released by the Office of the U.S. Trade Representative, according to Reuters.
The overcapacity levies are being imposed under Section 301 of the Trade Act of 1974. The Trump administration invoked the same statute to launch investigations into 60 economies over alleged forced-labor issues.
Those investigations, which also began in March, led to broad tariffs of 10% to 12.5% on goods from dozens of countries covering 99.4% of U.S. imports.
The Section 301 actions came weeks after the Supreme Court struck down the near-global tariffs that Trump had enacted under the International Emergency Economic Powers Act.
Shortly after the court's ruling, Trump invoked Section 122 of the Trade Act of 1974 to impose a 10% global tariff. That tariff expired after 150 days, and was immediately replaced with the forced-labor-related duties.
An ongoing lawsuit accuses the Trump administration of citing forced-labor issues as a "pretext" in pursuit of reviving Trump's worldwide tariff regime.`,
    bodyJa: `The U.S. is preparing new tariffs on 14 economies, including China, the EU, Japan and India, following investigations into what the Trump administration says are excess manufacturing practices that disadvantage U.S. commerce.
The administration launched those and other trade investigations in March, weeks after the Supreme Court unraveled a major piece of President Donald Trump's tariff-heavy economic policy by striking down his "liberation day" duties. Trump has since been accused by critics of his tariffs of trying to revive the canceled duties using other legal authorities.
The latest action targets foreign economies that create, sustain or contribute to structural excess capacity and production in manufacturing sectors that the U.S. finds unreasonable and burdensome or restrictive to its commerce, a senior U.S. official told reporters Tuesday evening.
The new tariffs are "targeted," not blanket rates, and will vary for each economy, and many will not exceed the rates established in previously reached trade deals, said the official, who spoke on condition of anonymity to discuss the forthcoming duties.
The rates, which mostly range from 15% to 20%, are "not really additive" and generally will not stack on top of existing duties, U.S. Trade Representative Jamieson Greer told CNBC's "Squawk Box" Wednesday morning.
"In effect, it'll look more like a top up," Greer said. "When it all nets out, it really will just top up a few percentage points."
An exception is China, which faces a 20% rate under the new tariff policy, "so it will go up some," Greer said. But at the same time, both countries are moving to remove tariffs on some of each other's goods in what Greer called "stability-generating activity through this action."
The senior U.S. official said Tuesday that the 20% rate will come on top of the so-called forced technology transfer-related tariffs of roughly 25%, which were implemented during Trump's first presidential term. U.S. tariffs on Chinese goods will therefore reach about 45%, give or take for different goods, the official said.
Average U.S. tariffs rates on Chinese goods stood at about 36.5% as of July, according to the Congressional Research Service.
Greer also said on CNBC that the new policy likely will not take effect for months.
"We've talked to our trading partners about this. They know what we're proposing," he said. "I think a lot of this is baked in, and I don't think any of these would actually take effect earlier than a couple months from now."
The administration says the tariffs target what it calls "overcapacity" — excess industrial production, often supported by government subsidies, that allows cheaper goods to flood global markets and undercut U.S. producers.
China has disputed the allegations. "The so-called 'overcapacity' does not really exist," China's foreign ministry said Wednesday before the official reports were released by the Office of the U.S. Trade Representative, according to Reuters.
The overcapacity levies are being imposed under Section 301 of the Trade Act of 1974. The Trump administration invoked the same statute to launch investigations into 60 economies over alleged forced-labor issues.
Those investigations, which also began in March, led to broad tariffs of 10% to 12.5% on goods from dozens of countries covering 99.4% of U.S. imports.
The Section 301 actions came weeks after the Supreme Court struck down the near-global tariffs that Trump had enacted under the International Emergency Economic Powers Act.
Shortly after the court's ruling, Trump invoked Section 122 of the Trade Act of 1974 to impose a 10% global tariff. That tariff expired after 150 days, and was immediately replaced with the forced-labor-related duties.
An ongoing lawsuit accuses the Trump administration of citing forced-labor issues as a "pretext" in pursuit of reviving Trump's worldwide tariff regime.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/25/us-tariffs-trump-section-301.html",
    publishedAt: "2026-11-25T16:02:52+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "fed-s-preferred-inflation-gauge-accelera-ba89a581",
    title: "Fed’s preferred inflation gauge accelerated to 3.8% in October, raising the 2027 stakes for the central bank",
    titleJa: "Fed’s preferred inflation gauge accelerated to 3.8% in October, raising the 2027 stakes for the central bank",
    summaryJa: "The personal consumption expenditures price index was expected to show an annual inflation rate of 3.8% in October, according to the Dow Jones consensus.",
    bodyOriginal: `Inflation moved further away from the Federal Reserve's target in October, reinforcing expectations that another interest rate hike is in the cards for December and raising questions about how much more work the central bank will have to do in 2027.
The personal consumption expenditures price index, the Fed's preferred inflation gauge, showed a seasonally adjusted 3.8% annual inflation rate, in line with the Dow Jones consensus estimate and nearly twice the central bank's goal. The reading was 0.1 percentage point higher than September.
Excluding food and energy, core PCE was 3.3%, the Commerce Department reported Wednesday. That was 0.1 percentage point above the forecast.
While the Fed officially follows the headline figure, policymakers consider core to be a more reliable longer-term gauge of inflation trends.
A separate report also showed much stronger economic growth for the third quarter, with gross domestic product rising at a 4.3% annualized rate, according to a revised Commerce Department estimate. The strong top-line gain for the economy adds further fuel to the notion that Fed monetary policy is not restricting economic activity.
Consumer spending rose 0.3% for the month, which matched the pace of price increases but was 0.1 percentage point lower than forecast. Income, on the other hand, surged 0.7%, much more than the 0.4% estimate. The personal saving rate rose to 4.1%.
Stock market futures added to losses following the release, while Treasury yields also were sharply lower. Even with the higher-than-expected core inflation figure, expectations eased a bit for Fed rate hikes in 2027. Traders continued to price in two more increases but lowered odds for a third hike to about 1-in-3, compared to 50-50 on Tuesday, according to the CME Group's FedWatch.
"Inflation is too hot and it will not be brought under control as long as economic demand is also too hot," said Chris Rupkey, chief economist at Fwdbonds.
The report comes with the market fully pricing in a quarter percentage point interest rate hike when the Fed meets Dec. 8-9. Less certain is how much more rates will need to increase to get inflation back down to the Fed's 2% target. Inflation has been running above target for some 5½ years.
Inflation had been drifting lower but spiked again following the late-February attacks on Iran led by the U.S. and Israel. Tariffs also have continued to exert pressure, as has strong demand associated with the artificial intelligence buildout. The White House on Wednesday announced a fresh round of tariffs on 14 trading partners including China, the European Union and Japan.
Policymakers generally consider factors such as tariffs and supply shocks to be temporary, but some fear the impact has begun spreading through the economy and could become embedded.
"America's inflation problem is bigger than an energy shock," said Heather Long, chief economist at Navy Federal Credit Union.
The large upward increase in GDP came from revisions to investment as well as consumer and government spending.
Consumer spending, which accounts for about two-thirds of all economic activity, rose 4.2% in the third quarter. A metric known as real final sales to private domestic purchasers, which Fed officials regard as a key indicator of underlying demand, jumped 5.8%, reflecting an upward revision of 0.9 percentage point.
In other economic news Wednesday, the Labor Department reported that initial jobless claims slipped to 189,000 for the week ending Nov. 21, down 13,000 from the prior week and back to around the lowest level since the late 1960s. Wall Street had been expecting 200,000.`,
    bodyJa: `Inflation moved further away from the Federal Reserve's target in October, reinforcing expectations that another interest rate hike is in the cards for December and raising questions about how much more work the central bank will have to do in 2027.
The personal consumption expenditures price index, the Fed's preferred inflation gauge, showed a seasonally adjusted 3.8% annual inflation rate, in line with the Dow Jones consensus estimate and nearly twice the central bank's goal. The reading was 0.1 percentage point higher than September.
Excluding food and energy, core PCE was 3.3%, the Commerce Department reported Wednesday. That was 0.1 percentage point above the forecast.
While the Fed officially follows the headline figure, policymakers consider core to be a more reliable longer-term gauge of inflation trends.
A separate report also showed much stronger economic growth for the third quarter, with gross domestic product rising at a 4.3% annualized rate, according to a revised Commerce Department estimate. The strong top-line gain for the economy adds further fuel to the notion that Fed monetary policy is not restricting economic activity.
Consumer spending rose 0.3% for the month, which matched the pace of price increases but was 0.1 percentage point lower than forecast. Income, on the other hand, surged 0.7%, much more than the 0.4% estimate. The personal saving rate rose to 4.1%.
Stock market futures added to losses following the release, while Treasury yields also were sharply lower. Even with the higher-than-expected core inflation figure, expectations eased a bit for Fed rate hikes in 2027. Traders continued to price in two more increases but lowered odds for a third hike to about 1-in-3, compared to 50-50 on Tuesday, according to the CME Group's FedWatch.
"Inflation is too hot and it will not be brought under control as long as economic demand is also too hot," said Chris Rupkey, chief economist at Fwdbonds.
The report comes with the market fully pricing in a quarter percentage point interest rate hike when the Fed meets Dec. 8-9. Less certain is how much more rates will need to increase to get inflation back down to the Fed's 2% target. Inflation has been running above target for some 5½ years.
Inflation had been drifting lower but spiked again following the late-February attacks on Iran led by the U.S. and Israel. Tariffs also have continued to exert pressure, as has strong demand associated with the artificial intelligence buildout. The White House on Wednesday announced a fresh round of tariffs on 14 trading partners including China, the European Union and Japan.
Policymakers generally consider factors such as tariffs and supply shocks to be temporary, but some fear the impact has begun spreading through the economy and could become embedded.
"America's inflation problem is bigger than an energy shock," said Heather Long, chief economist at Navy Federal Credit Union.
The large upward increase in GDP came from revisions to investment as well as consumer and government spending.
Consumer spending, which accounts for about two-thirds of all economic activity, rose 4.2% in the third quarter. A metric known as real final sales to private domestic purchasers, which Fed officials regard as a key indicator of underlying demand, jumped 5.8%, reflecting an upward revision of 0.9 percentage point.
In other economic news Wednesday, the Labor Department reported that initial jobless claims slipped to 189,000 for the week ending Nov. 21, down 13,000 from the prior week and back to around the lowest level since the late 1960s. Wall Street had been expecting 200,000.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/25/pce-inflation-report-october-2026.html",
    publishedAt: "2026-11-25T14:18:45+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
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
