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
    id: "openai-boss-sam-altman-spells-out-how-an-91175b17",
    title: "OpenAI boss Sam Altman spells out how and why the AI industry wants to slow down: 'We could lose control'",
    titleJa: "OpenAI boss Sam Altman spells out how and why the AI industry wants to slow down: 'We could lose control'",
    summaryJa: "OpenAI's chief has made comments detailing how AI safety frameworks and a slowdown could work, as the industry unites behind concerns.",
    bodyOriginal: `OpenAI chief Sam Altman has made his most detailed comments yet on how artificial intelligence safety frameworks could work, after he joined Anthropic's Dario Amodei and Elon Musk in calling for an industry slowdown over the weekend.
Safety concerns over the technology have hit fever pitch since an Anthropic researcher quit last week, warning that those building it believed that it could "kill us all by the end of the decade" and prompting other employees at the lab and rival OpenAI to warn of catastrophic risks.
AI bosses have since shown a rare display of unity, with both Altman and Musk on Saturday backing an essay from Amodei that urged AI companies to slow how quickly they improve their most advanced models.
AI stocks were down Monday as investors digested the comments. U.S. President Donald Trump dismissed the CEOs' warning on Sunday, saying a slowdown was not needed and would jeopardize America's lead in AI over China.
Sam Altman sets out 2 ways AI could go 'very badly'
"We welcome a federal framework that sets consistent safety requirements for frontier AI," Altman said in a post on X just after midnight on Monday, adding that "no amount of American competitive pressure should justify recklessness."
Altman warned of two ways AI progress could go "very badly," including losing "control of the future to AI" and too much power concentrating around a single person or company.
Meanwhile, lawmakers in Washington are scrambling to address calls for safeguards.
This all comes as Anthropic and OpenAI gear up for what's expected to be historic initial public offerings. Altman ruled out going public in 2026 in an interview with Fortune published Saturday.
Amodei's three-step proposal
Many AI safety fears revolve around models developing the ability to improve their own performance, a technique known as recursive self-improvement, or RSI.
"Since roughly this summer, AI has been advancing drastically faster, driven primarily by AI's growing ability to build the next generation of AI," said Amodei in his essay. "Left unchecked, it could outrun our ability to understand and control these systems, and so must be pursued very carefully, if at all."
Amodei proposed a three-step plan aimed at tempering the pace of development without "sacrificing commercial advantage or the United States' lead in AI."
The plan involves each frontier AI company giving "employee-like access" to external evaluators — which he said Anthropic was committing to now. Amodei also called for frontier AI labs to establish common safety standards, limit the rate of unchecked AI progress and attempt to coordinate efforts globally.
On Saturday, Altman said in a brief X post he agreed with Amodei that AI companies should "pace the frontier." He added that "committing to having independent evaluators with employee-like access is a great idea, and we will do the same.
"Consistent rules to manage frontier risk so that we can maximize the benefits are a good idea (and we are excited by ideas like independent auditors)," Altman said in his Monday post. But, he added, "When we talk about 'pacing,' we do not mean 'stopping.' Progress has been rapid and will continue to be."
"Pacing will be well worth this cost; no amount of American competitive pressure should justify recklessness, or let capabilities get ahead of alignment and monitoring," he concluded.
"Where we will need the help of our government is for international coordination. But first we should do what we can ourselves."
International cooperation
Coordinating AI safety measures and an industry slowdown with rival AI developers in China will likely pose big challenges.
The U.S. and China remain locked in a battle for AI supremacy, with tensions ratcheting up as Chinese models have become more advanced and their global adoption grows.
Amodei said Sunday that the "toughest dilemma" about his proposal is what happens if adversarial nations choose not to do the same.
"The more long-term thing would be working together to put a speed limit on the rate of AI progress," Amodei told CBS News' "Sunday Morning."
"I think that's going to be very difficult because the incentives to pull ahead and the military advantage that you get from that are so large. And honestly, I don't know if it's possible, but we should try."
The Anthropic CEO's essay has drawn criticism in China, with the state-owned Global Times writing on Monday that "Amodei's proposals seek to portray China's legitimate development in AI as a threat and further fuel confrontation between China and the US in the field."
China's Foreign Ministry said on Monday that the CEOs' comments were "fearmongering."`,
    bodyJa: `OpenAI chief Sam Altman has made his most detailed comments yet on how artificial intelligence safety frameworks could work, after he joined Anthropic's Dario Amodei and Elon Musk in calling for an industry slowdown over the weekend.
Safety concerns over the technology have hit fever pitch since an Anthropic researcher quit last week, warning that those building it believed that it could "kill us all by the end of the decade" and prompting other employees at the lab and rival OpenAI to warn of catastrophic risks.
AI bosses have since shown a rare display of unity, with both Altman and Musk on Saturday backing an essay from Amodei that urged AI companies to slow how quickly they improve their most advanced models.
AI stocks were down Monday as investors digested the comments. U.S. President Donald Trump dismissed the CEOs' warning on Sunday, saying a slowdown was not needed and would jeopardize America's lead in AI over China.
Sam Altman sets out 2 ways AI could go 'very badly'
"We welcome a federal framework that sets consistent safety requirements for frontier AI," Altman said in a post on X just after midnight on Monday, adding that "no amount of American competitive pressure should justify recklessness."
Altman warned of two ways AI progress could go "very badly," including losing "control of the future to AI" and too much power concentrating around a single person or company.
Meanwhile, lawmakers in Washington are scrambling to address calls for safeguards.
This all comes as Anthropic and OpenAI gear up for what's expected to be historic initial public offerings. Altman ruled out going public in 2026 in an interview with Fortune published Saturday.
Amodei's three-step proposal
Many AI safety fears revolve around models developing the ability to improve their own performance, a technique known as recursive self-improvement, or RSI.
"Since roughly this summer, AI has been advancing drastically faster, driven primarily by AI's growing ability to build the next generation of AI," said Amodei in his essay. "Left unchecked, it could outrun our ability to understand and control these systems, and so must be pursued very carefully, if at all."
Amodei proposed a three-step plan aimed at tempering the pace of development without "sacrificing commercial advantage or the United States' lead in AI."
The plan involves each frontier AI company giving "employee-like access" to external evaluators — which he said Anthropic was committing to now. Amodei also called for frontier AI labs to establish common safety standards, limit the rate of unchecked AI progress and attempt to coordinate efforts globally.
On Saturday, Altman said in a brief X post he agreed with Amodei that AI companies should "pace the frontier." He added that "committing to having independent evaluators with employee-like access is a great idea, and we will do the same.
"Consistent rules to manage frontier risk so that we can maximize the benefits are a good idea (and we are excited by ideas like independent auditors)," Altman said in his Monday post. But, he added, "When we talk about 'pacing,' we do not mean 'stopping.' Progress has been rapid and will continue to be."
"Pacing will be well worth this cost; no amount of American competitive pressure should justify recklessness, or let capabilities get ahead of alignment and monitoring," he concluded.
"Where we will need the help of our government is for international coordination. But first we should do what we can ourselves."
International cooperation
Coordinating AI safety measures and an industry slowdown with rival AI developers in China will likely pose big challenges.
The U.S. and China remain locked in a battle for AI supremacy, with tensions ratcheting up as Chinese models have become more advanced and their global adoption grows.
Amodei said Sunday that the "toughest dilemma" about his proposal is what happens if adversarial nations choose not to do the same.
"The more long-term thing would be working together to put a speed limit on the rate of AI progress," Amodei told CBS News' "Sunday Morning."
"I think that's going to be very difficult because the incentives to pull ahead and the military advantage that you get from that are so large. And honestly, I don't know if it's possible, but we should try."
The Anthropic CEO's essay has drawn criticism in China, with the state-owned Global Times writing on Monday that "Amodei's proposals seek to portray China's legitimate development in AI as a threat and further fuel confrontation between China and the US in the field."
China's Foreign Ministry said on Monday that the CEOs' comments were "fearmongering."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/14/sam-altman-ai-slowdown-anthropic-amodei-musk.html",
    publishedAt: "2026-09-14T12:31:47+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "ai-has-been-carrying-the-stock-market-an-ae2966e9",
    title: "AI has been carrying the stock market. An industry pause could pull the rug out, warns this Wall Street giant.",
    titleJa: "AI has been carrying the stock market. An industry pause could pull the rug out, warns this Wall Street giant.",
    summaryJa: "Citigroup warns that if artificial-intelligence model developments slow, earnings revisions could follow, and those have been a crucial factor in stock gains this year.",
    bodyOriginal: `Citigroup warns that if artificial-intelligence model developments slow, earnings revisions could follow, and those have been a crucial factor in stock gains this year.`,
    bodyJa: `Citigroup warns that if artificial-intelligence model developments slow, earnings revisions could follow, and those have been a crucial factor in stock gains this year.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/ai-has-carried-the-stock-market-an-industry-pause-could-pull-the-rug-out-warns-this-wall-street-giant-3272c960?mod=mw_rss_topstories",
    publishedAt: "2026-09-14T12:11:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-77897234",
    readTime: 2,
  },
  {
    id: "petrol-and-diesel-prices-hit-highest-sin-8fc7b7c0",
    title: "Petrol and diesel prices hit highest since 2022",
    titleJa: "Petrol and diesel prices hit highest since 2022",
    summaryJa: "The cost of filling up a vehicle has rebounded, according to the RAC, as oil prices remain elevated.",
    bodyOriginal: `Petrol and diesel prices hit highest since 2022
- Published
Petrol and diesel prices have both hit the highest levels since 2022 as the conflict in the Middle East continues to impact drivers' finances.
The average price of a litre of petrol now stands at 169.68p, according to the RAC motoring body, while diesel has risen to 191.68p.
The cost of filling up a vehicle is back to where it was after Russia launched a full-scale invasion of Ukraine more than four years ago.
The US-Israel war with Iran has severely disrupted the production and transportation of oil across the region.
Motor fuel prices fell back when the US and Iran agreed in June to a framework deal to end the fighting but have started rising again as tensions resurface.
With the price of wholesale oil back above $100 a barrel, Simon Williams, head of policy at motoring organisation RAC, said "there's no end in sight to high pump prices" for drivers.
How do wholesale oil prices affect the cost of petrol and diesel at the pump?
Crude oil is a key ingredient in petrol and diesel, which means that higher wholesale costs make filling up a car more expensive. The price of petrol and diesel is also heavily influenced by demand and refining capacity.
Analysts say every $10 (£7.44) per barrel increase in the oil price pushes up pump prices by roughly 7p a litre.
Since the war began, the price of a barrel of Brent crude – the global benchmark for wholesale oil prices – has been very volatile.
Generally speaking, news of further conflict drives the price up while hopes of an end to the war pushes the price down.
Before the conflict, Brent was about $70 a barrel, but the fighting saw it peak at above $120.
In early July, after the framework deal was signed, prices fell back to near the $70 a barrel mark.
When the peace talks collapsed, the price climbed back up again to above $100 a barrel. It fell back for a few weeks but is once again over the $100 mark after a fresh escalation in hostilities.
What has happened to petrol and diesel prices in the UK?
Just a few weeks ago in July, the average price of petrol was 150.59p per litre and diesel was 164.52p.
They have since rebounded. At 191.68p for a litre of diesel, the price is getting closer to the record high of 199.05p seen in June 2022.
Meanwhile, petrol has hit an average 169.68p a litre. It remains below a peak of 191.5p during the summer of 2022.
Williams said: "This takes the cost of filling up a 55-litre family car with unleaded to over £93 and diesel to more than £105."
Because transporting oil is a slow process, price movements in wholesale oil markets take about a fortnight to show at the pump.
Fuel retailers have denied accusations of price gouging during the conflict. The official markets regulator said it had "not seen evidence of retailers actively changing their pricing strategies to take advantage of the crisis".
A government scheme called Fuel Finder, external lets drivers compare the cost of fuel offered by petrol stations across the UK.
In May, the then Prime Minister Sir Keir Starmer said a planned 5p increase in fuel duty due in September would be postponed until the end of December because of the conflict.
RAC has said there is "a very strong case" for leaving fuel duty at its current level, at least until the end of the Parliament.
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
Reporting by Faarea Masud, Jemma Crew, Alex Daniel, Michael Race, Mitchell Labiak, Emer Moreau and Miguel Roca-Terry
Get in touch
How have you been affected by the price rises? Share your experiences
Get our flagship newsletter with all the headlines you need to start the day. Sign up here.`,
    bodyJa: `Petrol and diesel prices hit highest since 2022
- Published
Petrol and diesel prices have both hit the highest levels since 2022 as the conflict in the Middle East continues to impact drivers' finances.
The average price of a litre of petrol now stands at 169.68p, according to the RAC motoring body, while diesel has risen to 191.68p.
The cost of filling up a vehicle is back to where it was after Russia launched a full-scale invasion of Ukraine more than four years ago.
The US-Israel war with Iran has severely disrupted the production and transportation of oil across the region.
Motor fuel prices fell back when the US and Iran agreed in June to a framework deal to end the fighting but have started rising again as tensions resurface.
With the price of wholesale oil back above $100 a barrel, Simon Williams, head of policy at motoring organisation RAC, said "there's no end in sight to high pump prices" for drivers.
How do wholesale oil prices affect the cost of petrol and diesel at the pump?
Crude oil is a key ingredient in petrol and diesel, which means that higher wholesale costs make filling up a car more expensive. The price of petrol and diesel is also heavily influenced by demand and refining capacity.
Analysts say every $10 (£7.44) per barrel increase in the oil price pushes up pump prices by roughly 7p a litre.
Since the war began, the price of a barrel of Brent crude – the global benchmark for wholesale oil prices – has been very volatile.
Generally speaking, news of further conflict drives the price up while hopes of an end to the war pushes the price down.
Before the conflict, Brent was about $70 a barrel, but the fighting saw it peak at above $120.
In early July, after the framework deal was signed, prices fell back to near the $70 a barrel mark.
When the peace talks collapsed, the price climbed back up again to above $100 a barrel. It fell back for a few weeks but is once again over the $100 mark after a fresh escalation in hostilities.
What has happened to petrol and diesel prices in the UK?
Just a few weeks ago in July, the average price of petrol was 150.59p per litre and diesel was 164.52p.
They have since rebounded. At 191.68p for a litre of diesel, the price is getting closer to the record high of 199.05p seen in June 2022.
Meanwhile, petrol has hit an average 169.68p a litre. It remains below a peak of 191.5p during the summer of 2022.
Williams said: "This takes the cost of filling up a 55-litre family car with unleaded to over £93 and diesel to more than £105."
Because transporting oil is a slow process, price movements in wholesale oil markets take about a fortnight to show at the pump.
Fuel retailers have denied accusations of price gouging during the conflict. The official markets regulator said it had "not seen evidence of retailers actively changing their pricing strategies to take advantage of the crisis".
A government scheme called Fuel Finder, external lets drivers compare the cost of fuel offered by petrol stations across the UK.
In May, the then Prime Minister Sir Keir Starmer said a planned 5p increase in fuel duty due in September would be postponed until the end of December because of the conflict.
RAC has said there is "a very strong case" for leaving fuel duty at its current level, at least until the end of the Parliament.
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
Reporting by Faarea Masud, Jemma Crew, Alex Daniel, Michael Race, Mitchell Labiak, Emer Moreau and Miguel Roca-Terry
Get in touch
How have you been affected by the price rises? Share your experiences
Get our flagship newsletter with all the headlines you need to start the day. Sign up here.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c20zgjzz0e4o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-14T11:42:52+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/8143/live/f8d0c8b0-7572-11f1-b976-0b9c15b0ccfc.jpg",
    readTime: 10,
  },
  {
    id: "la-clippers-owner-steve-ballmer-apologiz-21c91b98",
    title: "LA Clippers owner Steve Ballmer apologizes over team sanctions",
    titleJa: "LA Clippers owner Steve Ballmer apologizes over team sanctions",
    summaryJa: "Ballmer said that the team is complying with the penalties, has paid the fines, and is \"moving forward.\"",
    bodyOriginal: `Los Angeles Clippers owner Steve Ballmer has apologized almost two weeks after a broad array of sanctions was slapped on the team by the National Basketball Association.
In a statement posted on X, Ballmer called this a "difficult time" and apologized to the team's fans, employees, and "my fellow NBA team owners for the distraction and distress this matter has caused."
Earlier this month, the Clippers were hit with sanctions for violating the league's salary cap circumvention rules related to star player Kawhi Leonard and four companies that did business with the team.
The team will also forfeit five first-round draft picks, with one each year beginning in 2029, as well as pay a fine of $30 million, the largest in NBA history.
Ballmer said that the team is complying with the penalties, has paid the fines and is "moving forward."
He added, however, that "while there are still disagreements concerning the findings in the report, this is not where I want to focus. Team owners should support, not distract."
When the penalties were disclosed, the Clippers had "vehemently" rejected the NBA's findings. The team said it intended to challenge the report, adding that the report's findings "are the result of a heavily biased investigation seeking to justify a predetermined narrative rather than facts and evidence."
The NBA said Ballmer "knowingly" sought to help Leonard obtain off-court income opportunities worth millions of dollars, among other violations.
Leonard, on his part, said that he had "no knowledge of any intent on anyone's part to circumvent the salary cap."
Ballmer went on to say that the Clippers will continue to build the team and invest in their community, adding he is "certain that we will compete at the highest level and be an organization our fans can be proud of."
— CNBC's Dan Mangan contributed to this report.`,
    bodyJa: `Los Angeles Clippers owner Steve Ballmer has apologized almost two weeks after a broad array of sanctions was slapped on the team by the National Basketball Association.
In a statement posted on X, Ballmer called this a "difficult time" and apologized to the team's fans, employees, and "my fellow NBA team owners for the distraction and distress this matter has caused."
Earlier this month, the Clippers were hit with sanctions for violating the league's salary cap circumvention rules related to star player Kawhi Leonard and four companies that did business with the team.
The team will also forfeit five first-round draft picks, with one each year beginning in 2029, as well as pay a fine of $30 million, the largest in NBA history.
Ballmer said that the team is complying with the penalties, has paid the fines and is "moving forward."
He added, however, that "while there are still disagreements concerning the findings in the report, this is not where I want to focus. Team owners should support, not distract."
When the penalties were disclosed, the Clippers had "vehemently" rejected the NBA's findings. The team said it intended to challenge the report, adding that the report's findings "are the result of a heavily biased investigation seeking to justify a predetermined narrative rather than facts and evidence."
The NBA said Ballmer "knowingly" sought to help Leonard obtain off-court income opportunities worth millions of dollars, among other violations.
Leonard, on his part, said that he had "no knowledge of any intent on anyone's part to circumvent the salary cap."
Ballmer went on to say that the Clippers will continue to build the team and invest in their community, adding he is "certain that we will compete at the highest level and be an organization our fans can be proud of."
— CNBC's Dan Mangan contributed to this report.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/14/la-clippers-steve-ballmer-apologizes-kawhi-leonard.html",
    publishedAt: "2026-09-14T11:34:58+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "clarity-act-faces-make-or-break-senate-v-cca0b444",
    title: "Clarity Act faces make-or-break Senate vote on Tuesday as crypto industry pushes for bill",
    titleJa: "Clarity Act faces make-or-break Senate vote on Tuesday as crypto industry pushes for bill",
    summaryJa: "A Senate vote on Tuesday is a put-up-or-shut-up moment for the Clarity Act crypto bill, scheduled by Majority Leader John Thune, R-S.D.",
    bodyOriginal: `Long-awaited vote on crypto market structure legislation is set for the Senate on Tuesday, but it remains unclear whether the measure known as the Clarity Act has enough votes to pass as last-minute lobbying by banks and the cryptocurrency industry intensifies.
The Clarity Act, which would establish a new regulatory structure for cryptocurrencies and other digital assets, has languished in the Senate for months. The bill cleared the Senate Banking Committee in May, but has stalled as Senate leaders have struggled to wrangle the 60 votes needed for approval from the chamber. With full attendance, at least seven Democrats would need to support the measure to escape the filibuster.
A myriad of issues have slowed the process and could put the vote in jeopardy. Banks warn they cannot support the bill unless it includes a fix to stop interest-like payments on stablecoin, which they say could cause deposit flight. And Democrats, only two of whom voted to advance the bill out of committee, have said they cannot support the bill unless it includes stronger ethics language to prevent officials like President Donald Trump and his family from profiting from crypto ventures.
The preliminary vote on Tuesday is a put-up-or-shut-up moment for the crypto bill, which Senate Majority Leader John Thune, R-S.D., scheduled just before senators left for their August recess. Supporters are hopeful they can scrape enough support to keep the bill alive.
"Over the past year, this bipartisan process has given everyone at the table a real chance to shape the Clarity Act, and the legislation genuinely reflects the priorities of both sides of the aisle," Sen. Cynthia Lummis, R-Wyo., one of the leaders of the bill, said after releasing updated text Thursday to try to garner support. "It's a good bill, and it's time for it to become law."
Many Democrats oppose the bill, largely because of the lack of ethics language they say must address Trump and his family's profiting off of crypto ventures.
"I can assure you that I'm not hearing from my constituents that their number one concern is to pass the Clarity Act," Sen. Chris Van Hollen, D-Md., said in a Sunday video on X. "This is a bill that is masquerading as a way to create good regulation and protection for consumers with respect to cryptocurrency, but it has some big problems that have not been fixed."
Van Hollen said in his post that "We can't let this pass."
Still, the Clarity Act appears to be a jump ball at this point.
Republican leaders on the bill released an update to the measure late Sunday that they say reflects their final offer to meet Democratic demands for the bill. The updated bill includes what the Republicans say represents large parts of a crypto ethics agreement brokered by Sens. Thom Tillis, R-N.C., and Ruben Gallego, D-Ariz., that Trump has now agreed to. That includes a key Democratic ask to allow state attorneys general to enforce ethics requirements on federal officials.
The bill now also includes a compromise on stablecoin yield aimed at appeasing banking interests by directing the Treasury secretary to restrict rewards if deposit flight from community banks occurs on a substantial scale.
A Democratic aide familiar with the negotiations said when it comes time for the preliminary vote, enough Democrats may support keeping the bill alive. The aide, speaking on condition of anonymity to discuss private negotiations, said Thune has pitched the vote as a "free vote," meaning that the vote is merely to keep the bill moving and the measure will be amended and voted on again before final passage to address lingering concerns.
Sen. Bernie Moreno, R-Ohio, one of the leaders of the bill who was financially backed by crypto interests during his 2024 campaign to oust former Sen. Sherrod Brown, D-Ohio, tried to remind senators on Sunday that Tuesday is not the final vote.
"This is not a vote on final passage. It is a vote to end debate on whether the United States Senate should even consider a bill to regulate digital assets," Moreno said in an X post. "If Senators have concerns about the bill, they can offer an amendment after we agree to take it up."
The White House has also teased further concessions on ethics language and other issues, but only if the Senate clears the preliminary vote, the Democratic aide said. That promise could act as an additional sweetener to entice crypto-curious Democrats to vote to advance the bill to see what the White House will offer.
"The President has been unequivocal: Congress must pass the CLARITY Act so we can stay ahead of foreign competitors and lead the world in innovation," the White House press office said in an emailed statement, without answering CNBC's questions about its concessions on Clarity Act ethics language. "The Trump Administration has worked tirelessly with Congress on the CLARITY Act and has already agreed to the most comprehensive and wide-ranging ethics provision in history."
Crypto interests are bullish about the bill's prospects. Coinbase CEO Brian Armstrong, whose company has been out front about supporting the bill, said on CNBC Thursday that the legislation is ready to be supported by the Senate.
Armstrong also said regulation will be coming for crypto regardless of the vote tally.
"Frankly, if it doesn't pass, it's also going to be a good outcome because the SEC and the CFTC have said that they're ready to publish rulemaking, and we're going to get regulatory clarity one way or another on the 15th or the day or two after," he said, referring to the Securities and Exchange Commission and Commodity Futures Trading Commission.
Coinbase also struck an agreement with financial services provider Moov last week to grant community banks access to stablecoin capabilities, a move likely intended to ease community bank fears of being bigfooted by the Clarity Act. CNBC was first to report the agreement.
Banks, including the Independent Community Bankers of America, the trade association for community banks, have led opposition to the Clarity Act, including the latest version, over concerns about stablecoin yields.
While the bill could technically be brought back in an amended form if the preliminary vote Tuesday fails, it's unclear whether lawmakers have enough time to amend the package and get it across the finish line before the end of this Congress should Tuesday's vote fail.
And the bill's current opposition doesn't seem to be going away.
In a Thursday letter to Thune and Senate Minority Leader Chuck Schumer, D-N.Y., the American Bankers Association led nearly 80 other banking groups urging the Senate to strengthen the bill's stablecoin provisions. Some Republicans in the Senate have also expressed unease with the Clarity Act over the concerns of bankers.
The bill's "prohibition on stablecoin payment of interest, yield and rewards must be strengthened to preserve community financial institution deposits and local lending to small businesses, farmers, and families," the groups said.
The updated bill text does not appear to resolve all of the bankers' issues with the bill.
In a statement to CNBC, Brooke Ybarra, senior vice president for innovation and strategy at ABA, said "bankers across the country have had the chance to speak with their senators about the importance of preserving the deposits that support local lending."
Ybarra also sounded optimistic that senators will oppose the bill when it comes to the floor.
"We appreciate the growing number of lawmakers who share our concerns with the current interest loophole in the bill and recognize that targeted changes to the Clarity Act can strengthen the legislation and improve its chances of clearing the full Senate," Ybarra said. "We remain optimistic that the Senate will ultimately consider an improved Clarity Act that embraces innovation without undermining the economy."`,
    bodyJa: `Long-awaited vote on crypto market structure legislation is set for the Senate on Tuesday, but it remains unclear whether the measure known as the Clarity Act has enough votes to pass as last-minute lobbying by banks and the cryptocurrency industry intensifies.
The Clarity Act, which would establish a new regulatory structure for cryptocurrencies and other digital assets, has languished in the Senate for months. The bill cleared the Senate Banking Committee in May, but has stalled as Senate leaders have struggled to wrangle the 60 votes needed for approval from the chamber. With full attendance, at least seven Democrats would need to support the measure to escape the filibuster.
A myriad of issues have slowed the process and could put the vote in jeopardy. Banks warn they cannot support the bill unless it includes a fix to stop interest-like payments on stablecoin, which they say could cause deposit flight. And Democrats, only two of whom voted to advance the bill out of committee, have said they cannot support the bill unless it includes stronger ethics language to prevent officials like President Donald Trump and his family from profiting from crypto ventures.
The preliminary vote on Tuesday is a put-up-or-shut-up moment for the crypto bill, which Senate Majority Leader John Thune, R-S.D., scheduled just before senators left for their August recess. Supporters are hopeful they can scrape enough support to keep the bill alive.
"Over the past year, this bipartisan process has given everyone at the table a real chance to shape the Clarity Act, and the legislation genuinely reflects the priorities of both sides of the aisle," Sen. Cynthia Lummis, R-Wyo., one of the leaders of the bill, said after releasing updated text Thursday to try to garner support. "It's a good bill, and it's time for it to become law."
Many Democrats oppose the bill, largely because of the lack of ethics language they say must address Trump and his family's profiting off of crypto ventures.
"I can assure you that I'm not hearing from my constituents that their number one concern is to pass the Clarity Act," Sen. Chris Van Hollen, D-Md., said in a Sunday video on X. "This is a bill that is masquerading as a way to create good regulation and protection for consumers with respect to cryptocurrency, but it has some big problems that have not been fixed."
Van Hollen said in his post that "We can't let this pass."
Still, the Clarity Act appears to be a jump ball at this point.
Republican leaders on the bill released an update to the measure late Sunday that they say reflects their final offer to meet Democratic demands for the bill. The updated bill includes what the Republicans say represents large parts of a crypto ethics agreement brokered by Sens. Thom Tillis, R-N.C., and Ruben Gallego, D-Ariz., that Trump has now agreed to. That includes a key Democratic ask to allow state attorneys general to enforce ethics requirements on federal officials.
The bill now also includes a compromise on stablecoin yield aimed at appeasing banking interests by directing the Treasury secretary to restrict rewards if deposit flight from community banks occurs on a substantial scale.
A Democratic aide familiar with the negotiations said when it comes time for the preliminary vote, enough Democrats may support keeping the bill alive. The aide, speaking on condition of anonymity to discuss private negotiations, said Thune has pitched the vote as a "free vote," meaning that the vote is merely to keep the bill moving and the measure will be amended and voted on again before final passage to address lingering concerns.
Sen. Bernie Moreno, R-Ohio, one of the leaders of the bill who was financially backed by crypto interests during his 2024 campaign to oust former Sen. Sherrod Brown, D-Ohio, tried to remind senators on Sunday that Tuesday is not the final vote.
"This is not a vote on final passage. It is a vote to end debate on whether the United States Senate should even consider a bill to regulate digital assets," Moreno said in an X post. "If Senators have concerns about the bill, they can offer an amendment after we agree to take it up."
The White House has also teased further concessions on ethics language and other issues, but only if the Senate clears the preliminary vote, the Democratic aide said. That promise could act as an additional sweetener to entice crypto-curious Democrats to vote to advance the bill to see what the White House will offer.
"The President has been unequivocal: Congress must pass the CLARITY Act so we can stay ahead of foreign competitors and lead the world in innovation," the White House press office said in an emailed statement, without answering CNBC's questions about its concessions on Clarity Act ethics language. "The Trump Administration has worked tirelessly with Congress on the CLARITY Act and has already agreed to the most comprehensive and wide-ranging ethics provision in history."
Crypto interests are bullish about the bill's prospects. Coinbase CEO Brian Armstrong, whose company has been out front about supporting the bill, said on CNBC Thursday that the legislation is ready to be supported by the Senate.
Armstrong also said regulation will be coming for crypto regardless of the vote tally.
"Frankly, if it doesn't pass, it's also going to be a good outcome because the SEC and the CFTC have said that they're ready to publish rulemaking, and we're going to get regulatory clarity one way or another on the 15th or the day or two after," he said, referring to the Securities and Exchange Commission and Commodity Futures Trading Commission.
Coinbase also struck an agreement with financial services provider Moov last week to grant community banks access to stablecoin capabilities, a move likely intended to ease community bank fears of being bigfooted by the Clarity Act. CNBC was first to report the agreement.
Banks, including the Independent Community Bankers of America, the trade association for community banks, have led opposition to the Clarity Act, including the latest version, over concerns about stablecoin yields.
While the bill could technically be brought back in an amended form if the preliminary vote Tuesday fails, it's unclear whether lawmakers have enough time to amend the package and get it across the finish line before the end of this Congress should Tuesday's vote fail.
And the bill's current opposition doesn't seem to be going away.
In a Thursday letter to Thune and Senate Minority Leader Chuck Schumer, D-N.Y., the American Bankers Association led nearly 80 other banking groups urging the Senate to strengthen the bill's stablecoin provisions. Some Republicans in the Senate have also expressed unease with the Clarity Act over the concerns of bankers.
The bill's "prohibition on stablecoin payment of interest, yield and rewards must be strengthened to preserve community financial institution deposits and local lending to small businesses, farmers, and families," the groups said.
The updated bill text does not appear to resolve all of the bankers' issues with the bill.
In a statement to CNBC, Brooke Ybarra, senior vice president for innovation and strategy at ABA, said "bankers across the country have had the chance to speak with their senators about the importance of preserving the deposits that support local lending."
Ybarra also sounded optimistic that senators will oppose the bill when it comes to the floor.
"We appreciate the growing number of lawmakers who share our concerns with the current interest loophole in the bill and recognize that targeted changes to the Clarity Act can strengthen the legislation and improve its chances of clearing the full Senate," Ybarra said. "We remain optimistic that the Senate will ultimately consider an improved Clarity Act that embraces innovation without undermining the economy."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/14/clarity-act-senate-vote-crypto-regulation.html",
    publishedAt: "2026-09-14T10:30:01+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "why-the-election-could-make-washington-s-79ea58d8",
    title: "Why the election could make Washington's looming next fiscal crisis harder",
    titleJa: "Why the election could make Washington's looming next fiscal crisis harder",
    summaryJa: "Some in the GOP are already disavowing raising the debt ceiling absent deep spending cuts as the national debt balloons past $40 trillion.",
    bodyOriginal: `Washington's next fiscal crisis looms right around the corner. Fixing it could be hard.
Analysts project the U.S. will breach the $41.1 trillion debt ceiling at some point in 2027, requiring Congress to raise or suspend it before the Treasury Department runs out of "extraordinary measures" to avoid a catastrophic default. If Democrats capture one or both chambers of Congress in November's midterm election, it would open the door to a standoff as the party tries to extract policy wins from Republican President Donald Trump in exchange for averting a bumpy ride over the fiscal cliff.
Trump last week also proposed a $5,000 dividend for every American if Republicans win the midterms — a move that could bring the U.S. to the debt ceiling faster.
And while some Republicans have proposed raising the debt ceiling this year to preempt potential brinksmanship next year — possibly during the lame-duck legislative session immediately after the election — some in the GOP are already disavowing such a move without deep spending cuts as the national debt balloons past $40 trillion, a record high.
"There are already discussions like if we lose the midterms, it would probably need to happen in the lame duck," said Rep. Eric Burlison, R-Mo. "Because I don't think that the president wants to have a pound of flesh extracted by the Democrats." Burlison has proposed a constitutional amendment to require the U.S. government balance its budget and has called for capping future federal borrowing.
Burlison, however, also said that "a blanket raise is not going to get my vote."
"If you're a fiscal conservative, we should be using every opportunity that we can to reduce the deficit anytime we have a vote to raise the debt ceiling," he said.
Other conservative lawmakers agreed, citing recent rises in Treasury yields as a reason to cut spending and not approve blanket approvals of more borrowing.
"Not without massive spending restraint and reforms," said Rep. Chip Roy, R-Texas, a member of the ultra-conservative House Freedom Caucus, when asked by CNBC if he would support raising the debt ceiling before the end of the year.
"If we're going to sit down and do the debt ceiling or sit down and talk about anything tax-related, then we're going to have to be real about spending restraint, so we'll see," Roy said.
That leaves Republican leaders Speaker Mike Johnson, R-La., and Majority Leader John Thune, R-S.D., between a rock and a hard place. Johnson has a razor-thin margin in the House and can only afford three defections on a party-line vote. And votes from Democrats, who are likely to balk at any major cuts to spending programs frequently targeted by Republicans, would be required to lift debt ceiling legislation over the 60-vote filibuster threshold in the Senate.
Democrats will also be hesitant to agree to raise the debt ceiling if they win the election in November, given that it represents one of their most crucial points of leverage over the White House.
"I would like to see exactly what their proposal would be and compare it to what we can possibly do in the majority," said Rep. Suhas Subramanyam, D-Va. "If they're going to try to jam us in the lame duck, we are not going to go along with it."
It wouldn't be the first time the debt ceiling has been used as leverage by a majority party in Congress when the opposite party controls the White House.
In 2023, House Republicans led by then-Speaker Kevin McCarthy brought the country to the brink of default before striking a deal with then-President Joe Biden to cut spending in exchange for raising the debt ceiling. Republicans were able to secure multiple policy wins during that episode, despite only controlling one chamber of Congress.
Even with the potential leverage, however, some Democrats are taking a cautionary tone on the debt ceiling. Past debt ceiling standoffs, though not ending in default, have harmed the U.S.' credit standing. Fitch downgraded the U.S. from AAA to AA+ after the last standoff, saying "repeated debt-limit political standoffs and last-minute resolutions have eroded confidence in fiscal management."
Rep. Richard Neal, D-Mass., the top Democrat on the House Ways and Means Committee, said Democrats "always want to consider responsible financing."
"But I think that we need to remember that the tax cut in 2017 and the tax cut last year, it's contributing mightily to this problem," Neal said.
Neal also added the caveat that "playing with this thing is dangerous."
"We'd have to have an open conversation about it," Neal said when asked what Democrats would want in exchange for raising the debt ceiling. "I know we don't want debt default."`,
    bodyJa: `Washington's next fiscal crisis looms right around the corner. Fixing it could be hard.
Analysts project the U.S. will breach the $41.1 trillion debt ceiling at some point in 2027, requiring Congress to raise or suspend it before the Treasury Department runs out of "extraordinary measures" to avoid a catastrophic default. If Democrats capture one or both chambers of Congress in November's midterm election, it would open the door to a standoff as the party tries to extract policy wins from Republican President Donald Trump in exchange for averting a bumpy ride over the fiscal cliff.
Trump last week also proposed a $5,000 dividend for every American if Republicans win the midterms — a move that could bring the U.S. to the debt ceiling faster.
And while some Republicans have proposed raising the debt ceiling this year to preempt potential brinksmanship next year — possibly during the lame-duck legislative session immediately after the election — some in the GOP are already disavowing such a move without deep spending cuts as the national debt balloons past $40 trillion, a record high.
"There are already discussions like if we lose the midterms, it would probably need to happen in the lame duck," said Rep. Eric Burlison, R-Mo. "Because I don't think that the president wants to have a pound of flesh extracted by the Democrats." Burlison has proposed a constitutional amendment to require the U.S. government balance its budget and has called for capping future federal borrowing.
Burlison, however, also said that "a blanket raise is not going to get my vote."
"If you're a fiscal conservative, we should be using every opportunity that we can to reduce the deficit anytime we have a vote to raise the debt ceiling," he said.
Other conservative lawmakers agreed, citing recent rises in Treasury yields as a reason to cut spending and not approve blanket approvals of more borrowing.
"Not without massive spending restraint and reforms," said Rep. Chip Roy, R-Texas, a member of the ultra-conservative House Freedom Caucus, when asked by CNBC if he would support raising the debt ceiling before the end of the year.
"If we're going to sit down and do the debt ceiling or sit down and talk about anything tax-related, then we're going to have to be real about spending restraint, so we'll see," Roy said.
That leaves Republican leaders Speaker Mike Johnson, R-La., and Majority Leader John Thune, R-S.D., between a rock and a hard place. Johnson has a razor-thin margin in the House and can only afford three defections on a party-line vote. And votes from Democrats, who are likely to balk at any major cuts to spending programs frequently targeted by Republicans, would be required to lift debt ceiling legislation over the 60-vote filibuster threshold in the Senate.
Democrats will also be hesitant to agree to raise the debt ceiling if they win the election in November, given that it represents one of their most crucial points of leverage over the White House.
"I would like to see exactly what their proposal would be and compare it to what we can possibly do in the majority," said Rep. Suhas Subramanyam, D-Va. "If they're going to try to jam us in the lame duck, we are not going to go along with it."
It wouldn't be the first time the debt ceiling has been used as leverage by a majority party in Congress when the opposite party controls the White House.
In 2023, House Republicans led by then-Speaker Kevin McCarthy brought the country to the brink of default before striking a deal with then-President Joe Biden to cut spending in exchange for raising the debt ceiling. Republicans were able to secure multiple policy wins during that episode, despite only controlling one chamber of Congress.
Even with the potential leverage, however, some Democrats are taking a cautionary tone on the debt ceiling. Past debt ceiling standoffs, though not ending in default, have harmed the U.S.' credit standing. Fitch downgraded the U.S. from AAA to AA+ after the last standoff, saying "repeated debt-limit political standoffs and last-minute resolutions have eroded confidence in fiscal management."
Rep. Richard Neal, D-Mass., the top Democrat on the House Ways and Means Committee, said Democrats "always want to consider responsible financing."
"But I think that we need to remember that the tax cut in 2017 and the tax cut last year, it's contributing mightily to this problem," Neal said.
Neal also added the caveat that "playing with this thing is dangerous."
"We'd have to have an open conversation about it," Neal said when asked what Democrats would want in exchange for raising the debt ceiling. "I know we don't want debt default."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/14/election-debt-limit-fiscal-crisis-congress.html",
    publishedAt: "2026-09-14T10:00:01+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "trump-urges-ukraine-to-stop-knocking-out-3a98968a",
    title: "Trump urges Ukraine to stop ‘knocking out’ Russian oil refineries as U.S. diesel hits record",
    titleJa: "Trump urges Ukraine to stop ‘knocking out’ Russian oil refineries as U.S. diesel hits record",
    summaryJa: "U.S. diesel prices have surpassed $6 a gallon for the first time ever as the Ukraine and Iran wars drive broader energy supply concerns.",
    bodyOriginal: `U.S. President Donald Trump has urged Ukrainian President Volodymyr Zelenskyy to stop targeting Russian oil refineries, saying the attacks are "hurting the world" as fuel supply disruptions from the Ukraine and Iran wars propel U.S. diesel prices to a record high.
Ukraine has stepped up its attacks on Russian oil facilities and logistics infrastructure in recent months, seeking to raise the cost of the war for Moscow after more than four-and-a-half years of conflict.
The attacks have significantly hampered Russia's refining capacity and prompted widespread fuel shortages, with Moscow recently extending a ban on diesel exports through the end of September as part of a push to stabilize domestic supplies.
"Mr. Zelenskyy has to do one thing. He has to stop knocking out diesel fuel in Russia," Trump said during an official visit to Ireland on Sunday.
"Let him go after targets but not diesel fuel because he's causing a shortage of diesel. This isn't done by the Middle East; this is done by what's happening with Russia and Ukraine."
A spokesperson for Ukraine's Foreign Ministry was not immediately available to comment when contacted by CNBC on Monday morning.
Ukraine, which fears an extremely difficult winter period amid expectations of another Russian assault on its energy infrastructure, has previously characterized Russian oil refineries as legitimate military targets.
Trump's warning comes shortly after the price of diesel, a critically important fuel for everything from heavy-duty transportation and commercial shipping to industries like mining and agriculture, topped $6 per gallon for the first time ever on Friday.
The average price nationwide stood at $6.06 per gallon, according to data from AAA, with truckers and farmers now paying about 63% more to fill up their semis and tractors than they did this time last year.
Oil prices jump
The sharp rise in diesel prices coincides with a jump in crude oil prices as fighting continues between the U.S. and Iran in the Middle East.
International benchmark Brent crude futures with November expiry rose 3.1% to $107.86 per barrel on Monday morning, extending gains after jumping more than 20% over the past month.
U.S. West Texas Intermediate futures with October expiry, meanwhile, traded 3.1% higher at $103.18. The contract, which is up nearly 25% over the past month, surpassed $100 for the first time since May last week.
Fresh strikes from the Iran-backed Houthis on Saudi Arabia and Iranian attacks on ships in the Gulf over the weekend exacerbated regional supply concerns.
Saudi Arabia's East-West pipeline, a crucial piece of energy infrastructure that helps the country bypass the strategically vital Strait of Hormuz, was temporarily shut on Friday following a drone attack.
— CNBC's Spencer Kimball contributed to this report.`,
    bodyJa: `U.S. President Donald Trump has urged Ukrainian President Volodymyr Zelenskyy to stop targeting Russian oil refineries, saying the attacks are "hurting the world" as fuel supply disruptions from the Ukraine and Iran wars propel U.S. diesel prices to a record high.
Ukraine has stepped up its attacks on Russian oil facilities and logistics infrastructure in recent months, seeking to raise the cost of the war for Moscow after more than four-and-a-half years of conflict.
The attacks have significantly hampered Russia's refining capacity and prompted widespread fuel shortages, with Moscow recently extending a ban on diesel exports through the end of September as part of a push to stabilize domestic supplies.
"Mr. Zelenskyy has to do one thing. He has to stop knocking out diesel fuel in Russia," Trump said during an official visit to Ireland on Sunday.
"Let him go after targets but not diesel fuel because he's causing a shortage of diesel. This isn't done by the Middle East; this is done by what's happening with Russia and Ukraine."
A spokesperson for Ukraine's Foreign Ministry was not immediately available to comment when contacted by CNBC on Monday morning.
Ukraine, which fears an extremely difficult winter period amid expectations of another Russian assault on its energy infrastructure, has previously characterized Russian oil refineries as legitimate military targets.
Trump's warning comes shortly after the price of diesel, a critically important fuel for everything from heavy-duty transportation and commercial shipping to industries like mining and agriculture, topped $6 per gallon for the first time ever on Friday.
The average price nationwide stood at $6.06 per gallon, according to data from AAA, with truckers and farmers now paying about 63% more to fill up their semis and tractors than they did this time last year.
Oil prices jump
The sharp rise in diesel prices coincides with a jump in crude oil prices as fighting continues between the U.S. and Iran in the Middle East.
International benchmark Brent crude futures with November expiry rose 3.1% to $107.86 per barrel on Monday morning, extending gains after jumping more than 20% over the past month.
U.S. West Texas Intermediate futures with October expiry, meanwhile, traded 3.1% higher at $103.18. The contract, which is up nearly 25% over the past month, surpassed $100 for the first time since May last week.
Fresh strikes from the Iran-backed Houthis on Saudi Arabia and Iranian attacks on ships in the Gulf over the weekend exacerbated regional supply concerns.
Saudi Arabia's East-West pipeline, a crucial piece of energy infrastructure that helps the country bypass the strategically vital Strait of Hormuz, was temporarily shut on Friday following a drone attack.
— CNBC's Spencer Kimball contributed to this report.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/14/trump-ukraine-russia-diesel-prices-oil.html",
    publishedAt: "2026-09-14T09:11:59+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 7,
  },
  {
    id: "anthropic-walks-tightrope-to-nasdaq-push-355b6809",
    title: "Anthropic walks tightrope to Nasdaq, pushing for a slowdown while pursuing $2 trillion valuation",
    titleJa: "Anthropic walks tightrope to Nasdaq, pushing for a slowdown while pursuing $2 trillion valuation",
    summaryJa: "As Anthropic meets with prospective investors ahead of its potentially historic market debut, CEO Dario Amodei is pushing for a slowdown in AI.",
    bodyOriginal: `Anthropic's road to an IPO just got a lot bumpier.
While the Claude creator meets with prospective investors ahead of its potentially historic debut, co-founder and CEO Dario Amodei is pushing a concept that would seem to contradict those ambitious efforts: a slowdown.
Anthropic, valued at $965 billion earlier this year, confidentially filed its IPO prospectus in June, and has been widely expected to list its shares as soon as next month. Meanwhile, concerns about the power of advanced AI models has been intensifying for weeks, spilling into the mainstream as more researchers warn of potential threats of human extinction.
With that backdrop, Amodei wrote an essay over the weekend urging the AI industry to slow the pace of model development, proposing a three-step plan to temper how quickly model capabilities improve without "sacrificing commercial advantage or the United States' lead in AI."
It's the latest challenge facing public market investors who are trying to determine what they're willing to pay for a piece of a five-year-old company that's already among the most valuable in the world and could seek a $2 trillion valuation in its IPO. Though Anthropic may have to accept a hit to revenue growth, some experts say an intentional slowdown could help Anthropic frame itself as a responsible actor, avoid future liability and address the public backlash towards AI that's been brewing across the country.
"I don't know that investors are necessarily going to see it as a negative," Gil Luria, an equity analyst at D.A. Davidson, said in an interview. "Unless the companies are genuine and say, 'OK, we're not going to IPO, we're not going to use any more compute, we're not going to train any more models.' That's not what they're saying."
Anthropic has picked the Nasdaq as the exchange for its potential IPO, CNBC confirmed after Business Insider first reported the selection.
Amodei on Saturday proposed that model companies open up to third-party evaluators, frontier companies establish "common safety standards," and that democratic countries coordinate with authoritarian governments "to the extent this is possible."
His essay came after several industry researchers issued stern warnings last week about the technology's growing potential to cause catastrophic harms.
OpenAI CEO Sam Altman expressed support for Amodei's proposal, as did Elon Musk, CEO of SpaceX, which owns Grok creator xAI. SpaceX went public in June in the biggest IPO on record and is now valued at $2 trillion. OpenAI has confidentially filed its IPO prospectus, but has been under fire in recent months after its models escaped containment, accessed the open internet and breached open-source developer platform Hugging Face.
"Right now would be an ill-advised moment to go public," Altman said in an interview with Fortune, reiterating that OpenAI won't aim for an IPO until next year. Finance chief Sarah Friar told employees during an all-hands meeting last month that the AI lab "will be a public company in 2027."
Lise Buyer, partner at IPO advisory firm Class V Group, said she doesn't see the recent "we might obliterate you all" fears having an impact on IPO timing, but it could alter valuations, she said.
"The bet here is on the long term — now with tempering thoughts about control of the technology," Buyer said in an email. "The dramatic growth and possibilities of these companies, now more publicly coupled with the potential very serious concerns and risks, will likely persist whether the IPO happens in Q4 or next year or whenever."
Anthropic and OpenAI declined to comment for this story.
'Don't see why growth would slow'
Anthropic hit $65 billion in annualized revenue in July, about a sevenfold increase from the prior year, as CNBC previously reported. The Financial Times reported on Sunday, citing people familiar with the matter, that Anthropic has told some shareholders that the company will generate an operating profit for a second straight quarter in the current period.
Matt Murphy, a partner at Menlo Ventures and an Anthropic investor, called the growth rate "off the charts," and said a public listing would force Anthropic to be transparent about its business, which could help improve dismal public sentiment around the technology.
"Don't see why growth would slow or any other reason to wait," Murphy told CNBC.
More than half of Americans say they're more concerned than excited about the growing use of AI in daily life, up from 37% in 2021, according to a recent report from the Pew Research Center. And confidence in AI executives is even worse, according to a CNBC Generation Lab survey of 18- to 34-year-olds. More than 75% of respondents said they don't trust Amodei to act responsibly, while around 70% expressed those views about Altman.
"One could argue that sooner is better than later for a public offering as the accountability that comes with being a public company might be of a great interest to many," Class V Group's Buyer said.
Altimeter Capital CEO Brad Gerstner, whose firm is an investor in Anthropic and OpenAI, said in a post on X on Saturday that bringing more "transparency, scrutiny, accountability" and participation to AI companies is "crucial." He said Anthropic will likely forge ahead with its IPO.
"The market knows how to price risk - see SpaceX," Gerstner wrote. "There is huge appetite to invest in the AI leaders."
Gerstner's post came a day after he blasted public remarks from industry researchers, calling them "hyperbolic scare tactics" that are "hiding behind a political agenda," in an interview with CNBC.
There are plenty of skeptics when it comes to Amodei's latest positioning. One argument is that Anthropic benefits from stricter standards because it currently has the most advanced models and makes money from selling services, like Claude Code, that are powered by those models.
"That could actually favor Anthropic and OpenAI if smaller competitors cannot afford the rigorous safety, evaluation and security investments required for frontier-level models," Arun Chandrasekaran, an analyst at Gartner, told CNBC in an email.
D.A. Davidson's Luria agrees and said he thinks Anthropic and OpenAI are engaging in "monopolistic behavior." OpenAI has reportedly asked members of Congress for guidance about whether a coordinated, industrywide slowdown would violate antitrust law, according to Wired.
"I'm highly suspicious of what Anthropic and OpenAI are doing," Luria said. "It feels more and more like a ladder pull."
What about the rest of tech?
Tech investors have other reasons to worry about the pace of development at OpenAI and Anthropic, because those companies are responsible for an outsized amount of AI infrastructure spending.
Anthropic has inked a flurry of multibillion-dollar compute deals this year, including with Nscale, Advanced Micro Devices, SpaceX, and Google. OpenAI told investors in February that it's targeting roughly $600 billion in total compute spend by 2030. Both companies are heavy users of Nvidia's graphics processing units.
"I would want to understand how the mix shifts between frontier training, post-training and inference as safety controls are integrated," said Lo Toney, managing partner at Plexo Capital, and an Anthropic investor.
PitchBook analyst Harrison Rolfes is more concerned about reduced growth. He said valuations for model companies likely deserve a discount now, largely because it's hard for investors to trust that they can safely commercialize their technology.
"Is the first thing that you want to do as a public company go handle a bunch of security issues and vulnerability issues?" Rolfes said. "No, you probably want to focus on expanding into all the markets that you promised all your investors."
Gene Munster, managing partner at Deepwater Asset Management, told CNBC that any sort of perceived slowdown will be a negative because the market is "underwriting exponential uninterrupted improvements to the models."
Still, Munster predicted that "nothing will change and the AI leapfrog game will continue."
"AI's long-term opportunity is too big for them to slow down," Munster said. "I believe the comments were motivated to reduce the regulatory pressure."
WATCH: Seems like Anthropic will beat OpenAI to IPO, says FirstMark’s Rick Heitzmann`,
    bodyJa: `Anthropic's road to an IPO just got a lot bumpier.
While the Claude creator meets with prospective investors ahead of its potentially historic debut, co-founder and CEO Dario Amodei is pushing a concept that would seem to contradict those ambitious efforts: a slowdown.
Anthropic, valued at $965 billion earlier this year, confidentially filed its IPO prospectus in June, and has been widely expected to list its shares as soon as next month. Meanwhile, concerns about the power of advanced AI models has been intensifying for weeks, spilling into the mainstream as more researchers warn of potential threats of human extinction.
With that backdrop, Amodei wrote an essay over the weekend urging the AI industry to slow the pace of model development, proposing a three-step plan to temper how quickly model capabilities improve without "sacrificing commercial advantage or the United States' lead in AI."
It's the latest challenge facing public market investors who are trying to determine what they're willing to pay for a piece of a five-year-old company that's already among the most valuable in the world and could seek a $2 trillion valuation in its IPO. Though Anthropic may have to accept a hit to revenue growth, some experts say an intentional slowdown could help Anthropic frame itself as a responsible actor, avoid future liability and address the public backlash towards AI that's been brewing across the country.
"I don't know that investors are necessarily going to see it as a negative," Gil Luria, an equity analyst at D.A. Davidson, said in an interview. "Unless the companies are genuine and say, 'OK, we're not going to IPO, we're not going to use any more compute, we're not going to train any more models.' That's not what they're saying."
Anthropic has picked the Nasdaq as the exchange for its potential IPO, CNBC confirmed after Business Insider first reported the selection.
Amodei on Saturday proposed that model companies open up to third-party evaluators, frontier companies establish "common safety standards," and that democratic countries coordinate with authoritarian governments "to the extent this is possible."
His essay came after several industry researchers issued stern warnings last week about the technology's growing potential to cause catastrophic harms.
OpenAI CEO Sam Altman expressed support for Amodei's proposal, as did Elon Musk, CEO of SpaceX, which owns Grok creator xAI. SpaceX went public in June in the biggest IPO on record and is now valued at $2 trillion. OpenAI has confidentially filed its IPO prospectus, but has been under fire in recent months after its models escaped containment, accessed the open internet and breached open-source developer platform Hugging Face.
"Right now would be an ill-advised moment to go public," Altman said in an interview with Fortune, reiterating that OpenAI won't aim for an IPO until next year. Finance chief Sarah Friar told employees during an all-hands meeting last month that the AI lab "will be a public company in 2027."
Lise Buyer, partner at IPO advisory firm Class V Group, said she doesn't see the recent "we might obliterate you all" fears having an impact on IPO timing, but it could alter valuations, she said.
"The bet here is on the long term — now with tempering thoughts about control of the technology," Buyer said in an email. "The dramatic growth and possibilities of these companies, now more publicly coupled with the potential very serious concerns and risks, will likely persist whether the IPO happens in Q4 or next year or whenever."
Anthropic and OpenAI declined to comment for this story.
'Don't see why growth would slow'
Anthropic hit $65 billion in annualized revenue in July, about a sevenfold increase from the prior year, as CNBC previously reported. The Financial Times reported on Sunday, citing people familiar with the matter, that Anthropic has told some shareholders that the company will generate an operating profit for a second straight quarter in the current period.
Matt Murphy, a partner at Menlo Ventures and an Anthropic investor, called the growth rate "off the charts," and said a public listing would force Anthropic to be transparent about its business, which could help improve dismal public sentiment around the technology.
"Don't see why growth would slow or any other reason to wait," Murphy told CNBC.
More than half of Americans say they're more concerned than excited about the growing use of AI in daily life, up from 37% in 2021, according to a recent report from the Pew Research Center. And confidence in AI executives is even worse, according to a CNBC Generation Lab survey of 18- to 34-year-olds. More than 75% of respondents said they don't trust Amodei to act responsibly, while around 70% expressed those views about Altman.
"One could argue that sooner is better than later for a public offering as the accountability that comes with being a public company might be of a great interest to many," Class V Group's Buyer said.
Altimeter Capital CEO Brad Gerstner, whose firm is an investor in Anthropic and OpenAI, said in a post on X on Saturday that bringing more "transparency, scrutiny, accountability" and participation to AI companies is "crucial." He said Anthropic will likely forge ahead with its IPO.
"The market knows how to price risk - see SpaceX," Gerstner wrote. "There is huge appetite to invest in the AI leaders."
Gerstner's post came a day after he blasted public remarks from industry researchers, calling them "hyperbolic scare tactics" that are "hiding behind a political agenda," in an interview with CNBC.
There are plenty of skeptics when it comes to Amodei's latest positioning. One argument is that Anthropic benefits from stricter standards because it currently has the most advanced models and makes money from selling services, like Claude Code, that are powered by those models.
"That could actually favor Anthropic and OpenAI if smaller competitors cannot afford the rigorous safety, evaluation and security investments required for frontier-level models," Arun Chandrasekaran, an analyst at Gartner, told CNBC in an email.
D.A. Davidson's Luria agrees and said he thinks Anthropic and OpenAI are engaging in "monopolistic behavior." OpenAI has reportedly asked members of Congress for guidance about whether a coordinated, industrywide slowdown would violate antitrust law, according to Wired.
"I'm highly suspicious of what Anthropic and OpenAI are doing," Luria said. "It feels more and more like a ladder pull."
What about the rest of tech?
Tech investors have other reasons to worry about the pace of development at OpenAI and Anthropic, because those companies are responsible for an outsized amount of AI infrastructure spending.
Anthropic has inked a flurry of multibillion-dollar compute deals this year, including with Nscale, Advanced Micro Devices, SpaceX, and Google. OpenAI told investors in February that it's targeting roughly $600 billion in total compute spend by 2030. Both companies are heavy users of Nvidia's graphics processing units.
"I would want to understand how the mix shifts between frontier training, post-training and inference as safety controls are integrated," said Lo Toney, managing partner at Plexo Capital, and an Anthropic investor.
PitchBook analyst Harrison Rolfes is more concerned about reduced growth. He said valuations for model companies likely deserve a discount now, largely because it's hard for investors to trust that they can safely commercialize their technology.
"Is the first thing that you want to do as a public company go handle a bunch of security issues and vulnerability issues?" Rolfes said. "No, you probably want to focus on expanding into all the markets that you promised all your investors."
Gene Munster, managing partner at Deepwater Asset Management, told CNBC that any sort of perceived slowdown will be a negative because the market is "underwriting exponential uninterrupted improvements to the models."
Still, Munster predicted that "nothing will change and the AI leapfrog game will continue."
"AI's long-term opportunity is too big for them to slow down," Munster said. "I believe the comments were motivated to reduce the regulatory pressure."
WATCH: Seems like Anthropic will beat OpenAI to IPO, says FirstMark’s Rick Heitzmann`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/14/anthropic-walks-tightrope-to-nasdaq-pushing-slowdown-and-pursuing-ipo.html",
    publishedAt: "2026-09-14T04:01:01+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "committee-calls-for-bill-to-address-ai-t-90391aae",
    title: "Committee calls for bill to address AI threat to human rights",
    titleJa: "Committee calls for bill to address AI threat to human rights",
    summaryJa: "A cross-party group of MPs and peers identifies human rights risks that existing laws appear not to cover.",
    bodyOriginal: `Committee calls for bill to address AI threat to human rights
- Published
A cross-party group of MPs and peers has identified human rights risks posed by artificial intelligence (AI) which existing laws, they argue, are ill-equipped to cover.
The Joint Committee on Human Rights (JCHR) published a report calling for a new bill on AI to "address the scale and seriousness" of such threats.
"Nowhere in the world, including the UK, has a current legislative and regulatory approach to AI that is fit for purpose," said Alex Sobel MP, the committee's chair.
On Saturday, the head of the US AI company Anthropic, Dario Amodei, proposed a plan that includes global regulation, industry-wide regulation and independent monitoring of AI models as they are developed.
Amodei urged the pace of development to be slowed down and the bosses of two rival AI firms, Sam Altman of OpenAI and Elon Musk, said they agreed with him.
One human rights concern raised in recent years is that AI can display biases against particular groups if trained on large datasets scraped from the internet which can include racist, sexist and other undesirable material.
AI could also be used to create and spread misinformation.
Anthropic boss Dario Amodei calls for AI development to slow down
- Published1 day ago
Trump downplays warnings of AI risks, citing rivalry with China
- Published9 hours ago
Questions mount over what an AI 'slowdown' would look like
- Published10 hours ago
In a summary of its 100-page report, external, the JCHR points out that AI has been responsible for numerous abuses of human rights.
It cites as examples the use of AI to create sexualised images of women and girls and scanning people's faces without their consent.
The JCHR advocates the creation of a "single, independent AI oversight body... on a statutory basis".
It argues that the current legal framework which applies to AI is "fragmented and difficult to navigate", "leaving gaps in protection".
"The AI Bill should establish a regulatory regime that classifies different risk levels and mandate more demanding obligations for higher risk AI systems and models," it says.
"Obligations should be placed on all stages of the AI lifecycle, ensuring those responsible in the supply chain for designing, amending and utilising AI systems are aware of their obligations and they are effectively addressed.
"Some uses of AI should be prohibited outright because they are incompatible with human rights. Potential areas for action include subliminal techniques, and inappropriate use of profiling or biometric data."
"AI is heralded as an unprecedented era of technological development with the potential to transform our lives for better or for worse," said Sobel.
"It is moving with such speed and complexity that its impact is hard to accurately predict. What is clear is that at present we are unprepared to deal with its consequences however potentially dire they may be."
The JCHR's 12 members are drawn from both Houses of Parliament and they currently include MPs and peers from the Labour, Conservative and Liberal Democrat parties.
BBC News is seeking comment from the government on the call for the AI bill.
Monday's report comes amid growing general anxiety over the challenges AI poses.
Jacob Coxon, an AI researcher who quit Anthropic, told the BBC this weekend that staff developing the systems were "genuinely frightened" for the future of humanity.
An Anthropic spokesperson told BBC News that it was building "models with some of the strongest safeguards in the industry".`,
    bodyJa: `Committee calls for bill to address AI threat to human rights
- Published
A cross-party group of MPs and peers has identified human rights risks posed by artificial intelligence (AI) which existing laws, they argue, are ill-equipped to cover.
The Joint Committee on Human Rights (JCHR) published a report calling for a new bill on AI to "address the scale and seriousness" of such threats.
"Nowhere in the world, including the UK, has a current legislative and regulatory approach to AI that is fit for purpose," said Alex Sobel MP, the committee's chair.
On Saturday, the head of the US AI company Anthropic, Dario Amodei, proposed a plan that includes global regulation, industry-wide regulation and independent monitoring of AI models as they are developed.
Amodei urged the pace of development to be slowed down and the bosses of two rival AI firms, Sam Altman of OpenAI and Elon Musk, said they agreed with him.
One human rights concern raised in recent years is that AI can display biases against particular groups if trained on large datasets scraped from the internet which can include racist, sexist and other undesirable material.
AI could also be used to create and spread misinformation.
Anthropic boss Dario Amodei calls for AI development to slow down
- Published1 day ago
Trump downplays warnings of AI risks, citing rivalry with China
- Published9 hours ago
Questions mount over what an AI 'slowdown' would look like
- Published10 hours ago
In a summary of its 100-page report, external, the JCHR points out that AI has been responsible for numerous abuses of human rights.
It cites as examples the use of AI to create sexualised images of women and girls and scanning people's faces without their consent.
The JCHR advocates the creation of a "single, independent AI oversight body... on a statutory basis".
It argues that the current legal framework which applies to AI is "fragmented and difficult to navigate", "leaving gaps in protection".
"The AI Bill should establish a regulatory regime that classifies different risk levels and mandate more demanding obligations for higher risk AI systems and models," it says.
"Obligations should be placed on all stages of the AI lifecycle, ensuring those responsible in the supply chain for designing, amending and utilising AI systems are aware of their obligations and they are effectively addressed.
"Some uses of AI should be prohibited outright because they are incompatible with human rights. Potential areas for action include subliminal techniques, and inappropriate use of profiling or biometric data."
"AI is heralded as an unprecedented era of technological development with the potential to transform our lives for better or for worse," said Sobel.
"It is moving with such speed and complexity that its impact is hard to accurately predict. What is clear is that at present we are unprepared to deal with its consequences however potentially dire they may be."
The JCHR's 12 members are drawn from both Houses of Parliament and they currently include MPs and peers from the Labour, Conservative and Liberal Democrat parties.
BBC News is seeking comment from the government on the call for the AI bill.
Monday's report comes amid growing general anxiety over the challenges AI poses.
Jacob Coxon, an AI researcher who quit Anthropic, told the BBC this weekend that staff developing the systems were "genuinely frightened" for the future of humanity.
An Anthropic spokesperson told BBC News that it was building "models with some of the strongest safeguards in the industry".`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cwyzvgj70y4o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-14T03:23:54+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/2540/live/91309a60-afe1-11f1-b2e5-69ed9cb5513c.jpg",
    readTime: 9,
  },
  {
    id: "trump-says-u-s-may-keep-iranian-oil-like-4e9d0f7b",
    title: "Trump says U.S. may keep Iranian oil 'like Venezuela' as Gulf-Iran Hormuz talks stall",
    titleJa: "Trump says U.S. may keep Iranian oil 'like Venezuela' as Gulf-Iran Hormuz talks stall",
    summaryJa: "Trump said revenue from the Venezuela arrangement has \"paid for the war many times.\"",
    bodyOriginal: `President Donald Trump said the U.S. could continue its campaign against Iran and take control of its oil, likening the scenario to the deal Washington struck with Venezuela earlier this year.
"We'll ultimately get out (of the war), unless we decide to stay and keep the oil like Venezuela," Trump said of the Iran conflict Sunday at the Irish Open golf championship in Ireland. He added that U.S. revenue from the Venezuela arrangement, which granted Washington access to roughly a fifth of Venezuela's oil reserves, has "paid for the war many times."
Under the agreement reached in August, Venezuela ceded majority U.S. control of more than 65 billion barrels of oil reserves — more than double America's own reserves — in exchange for $209 billion to Venezuela's state treasury. Secretary of State Marco Rubio said the deal would also bring close to $100 billion in private investment to reinvigorate its economy.
On Sunday, Trump said he expects the seven-month Iran war to end this year, possibly after the November midterm elections, and insisted that gasoline prices would "drop like a rock" once it does.
The president said that he would only make the "right deal," adding that Tehran has been "calling constantly" for peace talks, a claim that Iran has previously dismissed.
Trump's comments came as diplomacy over the Strait of Hormuz stalled.
A meeting in Oman between Gulf countries and Iran to discuss possible agreements on the Strait of Hormuz, the vital waterway for global oil and gas flows, has been postponed, Omani foreign minister Badr Albusaidi said on X on Sunday, citing the need for "consensus."
Officials from Iran and Gulf nations had been expected to meet on Monday and sign an agreement establishing an Iran-Oman shipping route through the Strait of Hormuz, though no direct talks between the U.S. and Iran were ongoing.
The Strait of Hormuz has been subjected to an Iranian and later U.S. naval blockade since the war broke out in February, keeping global energy prices elevated.
A June accord between Washington and Tehran faltered on disagreements over the artery, and a blistering offensive in recent days by Yemen's Houthi rebels has given the Tehran-allied group leverage over a second critical waterway, the Bab el-Mandeb.
Ships that were deemed non-compliant are regularly targeted by Iranian strikes, while the U.S. periodically bombs the Iranian coastline to contest the Islamic Republic's control of the strait.
Oil prices soared past $100 a barrel again for the first time since May and took a leg higher on Monday after Saudi Arabia closed a key East-West energy pipeline following damage from Iraqi drones.
U.S. West Texas Intermediate futures were up 2.3% to $102.39 per barrel. Brent crude, the international benchmark, traded 2.4% higher to $107.11 a barrel.`,
    bodyJa: `President Donald Trump said the U.S. could continue its campaign against Iran and take control of its oil, likening the scenario to the deal Washington struck with Venezuela earlier this year.
"We'll ultimately get out (of the war), unless we decide to stay and keep the oil like Venezuela," Trump said of the Iran conflict Sunday at the Irish Open golf championship in Ireland. He added that U.S. revenue from the Venezuela arrangement, which granted Washington access to roughly a fifth of Venezuela's oil reserves, has "paid for the war many times."
Under the agreement reached in August, Venezuela ceded majority U.S. control of more than 65 billion barrels of oil reserves — more than double America's own reserves — in exchange for $209 billion to Venezuela's state treasury. Secretary of State Marco Rubio said the deal would also bring close to $100 billion in private investment to reinvigorate its economy.
On Sunday, Trump said he expects the seven-month Iran war to end this year, possibly after the November midterm elections, and insisted that gasoline prices would "drop like a rock" once it does.
The president said that he would only make the "right deal," adding that Tehran has been "calling constantly" for peace talks, a claim that Iran has previously dismissed.
Trump's comments came as diplomacy over the Strait of Hormuz stalled.
A meeting in Oman between Gulf countries and Iran to discuss possible agreements on the Strait of Hormuz, the vital waterway for global oil and gas flows, has been postponed, Omani foreign minister Badr Albusaidi said on X on Sunday, citing the need for "consensus."
Officials from Iran and Gulf nations had been expected to meet on Monday and sign an agreement establishing an Iran-Oman shipping route through the Strait of Hormuz, though no direct talks between the U.S. and Iran were ongoing.
The Strait of Hormuz has been subjected to an Iranian and later U.S. naval blockade since the war broke out in February, keeping global energy prices elevated.
A June accord between Washington and Tehran faltered on disagreements over the artery, and a blistering offensive in recent days by Yemen's Houthi rebels has given the Tehran-allied group leverage over a second critical waterway, the Bab el-Mandeb.
Ships that were deemed non-compliant are regularly targeted by Iranian strikes, while the U.S. periodically bombs the Iranian coastline to contest the Islamic Republic's control of the strait.
Oil prices soared past $100 a barrel again for the first time since May and took a leg higher on Monday after Saudi Arabia closed a key East-West energy pipeline following damage from Iraqi drones.
U.S. West Texas Intermediate futures were up 2.3% to $102.39 per barrel. Brent crude, the international benchmark, traded 2.4% higher to $107.11 a barrel.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/14/us-iran-trump-hormuz-gulf-oil-crude-talks-.html",
    publishedAt: "2026-09-14T03:01:13+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 7,
  },
  {
    id: "amazon-pauses-work-with-cargo-firm-after-7d22f347",
    title: "Amazon pauses work with cargo firm after fatal crash",
    titleJa: "Amazon pauses work with cargo firm after fatal crash",
    summaryJa: "The 21 Air-operated jet overshot a runway at Miami International Airport and hit several vehicles.",
    bodyOriginal: `Amazon pauses work with cargo firm after fatal crash
- Published
E-commerce giant Amazon says it is suspending work with the firm that operated a cargo plane that was involved in a fatal crash in Miami this month.
"After the tragic incident last weekend, we've spent time supporting the investigation and reviewing some of the surrounding circumstances, and we've decided to pause our operations with 21 Air," an Amazon spokesperson said on Sunday.
On 6 September, the 21 Air-operated Boeing jet overshot a runway at Miami International Airport and hit several vehicles, killing five people.
The BBC has contacted 21 Air for comment. The firm previously said it was "devastated by the accident" and that it is cooperating with authorities to investigate the incident.
The US National Transportation Safety Board (NTSB) is leading the investigation into the crash.
Amazon spokesperson Kelly Nantel said: "Safety has always been our top priority, whether in our own operations or when we're working with partners."
"We'll continue working to support the investigation and everyone affected," she added.
21 Air is an all-cargo carrier that operates flights for major firms like Amazon and DHL.
The Boeing 767-300 cargo plane crashed in Miami after departing from Luis Muñoz Marín International Airport in San Juan, Puerto Rico.
The aircraft overshot the runway, crashing into nearby vehicles before skidding to a stop.
Last week, Miami authorities identified the five people who died as Rolando Aleman Leon, 55; Yoel Rodriguez Naranjo, 53; Julio C Pineda, 75; Carlos Acosta Fajardo, 53; and Javierkys Reyes Quevedo, 47.
Five others were also injured.
"Our deepest condolences are with the families and loved ones of those who lost their lives," 21 Air chief executive Keith Winters previously said.
"Our immediate priorities are supporting those affected, assisting the appropriate authorities, and ensuring that accurate and verified information is communicated as it becomes available," he added.
NTSB chairwoman Jennifer Homendy called the crash site a scene of "utter devastation".
The safety board's investigators have recovered the flight recorders to analyse the conditions leading up to the crash.
Investigators released details that a pilot onboard the cargo plane noted that it was going too fast before it overshot the runway, the NTSB said in the early stages of investigation.
It said that one of the pilots warned the other pilot multiple times about "the aircraft's excessive speed" but noted "there was not a consistent verbal response", even as an altitude alarm sounded.
There were other electronic warnings designed to alert the pilots to danger while landing, investigators reported.
Related topics
- Published6 days ago
- Published23 August`,
    bodyJa: `Amazon pauses work with cargo firm after fatal crash
- Published
E-commerce giant Amazon says it is suspending work with the firm that operated a cargo plane that was involved in a fatal crash in Miami this month.
"After the tragic incident last weekend, we've spent time supporting the investigation and reviewing some of the surrounding circumstances, and we've decided to pause our operations with 21 Air," an Amazon spokesperson said on Sunday.
On 6 September, the 21 Air-operated Boeing jet overshot a runway at Miami International Airport and hit several vehicles, killing five people.
The BBC has contacted 21 Air for comment. The firm previously said it was "devastated by the accident" and that it is cooperating with authorities to investigate the incident.
The US National Transportation Safety Board (NTSB) is leading the investigation into the crash.
Amazon spokesperson Kelly Nantel said: "Safety has always been our top priority, whether in our own operations or when we're working with partners."
"We'll continue working to support the investigation and everyone affected," she added.
21 Air is an all-cargo carrier that operates flights for major firms like Amazon and DHL.
The Boeing 767-300 cargo plane crashed in Miami after departing from Luis Muñoz Marín International Airport in San Juan, Puerto Rico.
The aircraft overshot the runway, crashing into nearby vehicles before skidding to a stop.
Last week, Miami authorities identified the five people who died as Rolando Aleman Leon, 55; Yoel Rodriguez Naranjo, 53; Julio C Pineda, 75; Carlos Acosta Fajardo, 53; and Javierkys Reyes Quevedo, 47.
Five others were also injured.
"Our deepest condolences are with the families and loved ones of those who lost their lives," 21 Air chief executive Keith Winters previously said.
"Our immediate priorities are supporting those affected, assisting the appropriate authorities, and ensuring that accurate and verified information is communicated as it becomes available," he added.
NTSB chairwoman Jennifer Homendy called the crash site a scene of "utter devastation".
The safety board's investigators have recovered the flight recorders to analyse the conditions leading up to the crash.
Investigators released details that a pilot onboard the cargo plane noted that it was going too fast before it overshot the runway, the NTSB said in the early stages of investigation.
It said that one of the pilots warned the other pilot multiple times about "the aircraft's excessive speed" but noted "there was not a consistent verbal response", even as an altitude alarm sounded.
There were other electronic warnings designed to alert the pilots to danger while landing, investigators reported.
Related topics
- Published6 days ago
- Published23 August`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cx2zg554w9ko?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-14T02:40:06+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/6e20/live/5e01de50-afdd-11f1-85da-1d41c9633ce8.jpg",
    readTime: 7,
  },
  {
    id: "the-10-year-treasury-is-closing-in-on-5-0f641dac",
    title: "The 10-year Treasury is closing in on 5%. How it gets there matters more",
    titleJa: "The 10-year Treasury is closing in on 5%. How it gets there matters more",
    summaryJa: "The 10-year Treasury yield is closing in on 5%, a level last touched in October 2023. Strategists say the drivers behind higher yields are more important.",
    bodyOriginal: `The 10-year Treasury yield is once again closing in on the psychologically important 5% threshold. For investors, the biggest issue may be what drives it across the line.
The benchmark yield is hovering around 4.96%, within striking distance of the 5% mark it last touched in October 2023. A climb fueled by resilient economic growth would carry very different implications for stocks and the broader economy than one driven by resurgent inflation, mounting fiscal concerns or stress within the Treasury market itself.
The latest rise in yields stems partly from a supply-demand imbalance as heavy Treasury and corporate issuance competes for investor capital, said Jason Ware, chief investment officer at Albion Financial Group, who added he doesn't expect markets to break simply because the 10-year moves above 5%.
Higher yields aren't necessarily bearish if they're accompanied by healthy growth. Ware pointed to a resilient economy and steady core inflation, arguing that stocks would be more vulnerable to a slowdown in consumer spending or artificial-intelligence investment than to the 10-year crossing an arbitrary threshold.
The 10-year Treasury yield is a key benchmark for borrowing costs across the U.S. economy, influencing everything from mortgages to corporate debt. It is also a crucial reference point for valuing stocks and other financial assets.
Many of the companies driving the equity rally aren't especially sensitive to higher rates, limiting the immediate threat to stocks, according to Niall O'Sullivan, chief investment officer at Marsh Investments. The heavy capital expenditure currently being deployed supports strong economic growth, he said.
However, the 5% level may start to be a problem as investors demand greater compensation for inflation and fiscal risks. Large federal deficits, heavy debt issuance and sticky inflation have all contributed to a rising term premium, while oil's return above $100 a barrel has added another potential source of price pressure.
Treasury Secretary Scott Bessent has sought to contain pressure at the long end, including through an expanded buyback program. But such measures may have limited power against the fundamental forces pushing yields higher.
BMO Capital Markets strategists said a more active buyback program could help limit selling pressure but "fails to address the prevailing fundamental drivers of the upward pressure on 10- and 30-year yields."
Another route to 5% could be more troublesome still: a disorderly move caused by stresses in the Treasury market itself.
George Awad, principal at Gibraltar Capital, has highlighted the large amount of leveraged hedge-fund exposure underpinning the Treasury market, including the cash-futures basis trade. A jump in funding costs, margin requirements or volatility could force leveraged investors to unwind positions simultaneously, potentially amplifying a selloff.
For now, investors appear willing to tolerate higher yields. BMO noted that when the 10-year reached 4.85%, weakness in equities remained modest and the S&P 500 was still up more than 11% for the year.
It remains to be seen whether that continues.`,
    bodyJa: `The 10-year Treasury yield is once again closing in on the psychologically important 5% threshold. For investors, the biggest issue may be what drives it across the line.
The benchmark yield is hovering around 4.96%, within striking distance of the 5% mark it last touched in October 2023. A climb fueled by resilient economic growth would carry very different implications for stocks and the broader economy than one driven by resurgent inflation, mounting fiscal concerns or stress within the Treasury market itself.
The latest rise in yields stems partly from a supply-demand imbalance as heavy Treasury and corporate issuance competes for investor capital, said Jason Ware, chief investment officer at Albion Financial Group, who added he doesn't expect markets to break simply because the 10-year moves above 5%.
Higher yields aren't necessarily bearish if they're accompanied by healthy growth. Ware pointed to a resilient economy and steady core inflation, arguing that stocks would be more vulnerable to a slowdown in consumer spending or artificial-intelligence investment than to the 10-year crossing an arbitrary threshold.
The 10-year Treasury yield is a key benchmark for borrowing costs across the U.S. economy, influencing everything from mortgages to corporate debt. It is also a crucial reference point for valuing stocks and other financial assets.
Many of the companies driving the equity rally aren't especially sensitive to higher rates, limiting the immediate threat to stocks, according to Niall O'Sullivan, chief investment officer at Marsh Investments. The heavy capital expenditure currently being deployed supports strong economic growth, he said.
However, the 5% level may start to be a problem as investors demand greater compensation for inflation and fiscal risks. Large federal deficits, heavy debt issuance and sticky inflation have all contributed to a rising term premium, while oil's return above $100 a barrel has added another potential source of price pressure.
Treasury Secretary Scott Bessent has sought to contain pressure at the long end, including through an expanded buyback program. But such measures may have limited power against the fundamental forces pushing yields higher.
BMO Capital Markets strategists said a more active buyback program could help limit selling pressure but "fails to address the prevailing fundamental drivers of the upward pressure on 10- and 30-year yields."
Another route to 5% could be more troublesome still: a disorderly move caused by stresses in the Treasury market itself.
George Awad, principal at Gibraltar Capital, has highlighted the large amount of leveraged hedge-fund exposure underpinning the Treasury market, including the cash-futures basis trade. A jump in funding costs, margin requirements or volatility could force leveraged investors to unwind positions simultaneously, potentially amplifying a selloff.
For now, investors appear willing to tolerate higher yields. BMO noted that when the 10-year reached 4.85%, weakness in equities remained modest and the S&P 500 was still up more than 11% for the year.
It remains to be seen whether that continues.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/14/10-year-us-treasury-is-closing-in-on-5percent.html",
    publishedAt: "2026-09-14T01:39:13+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 8,
  },
  {
    id: "how-to-protect-your-laptop-phone-and-bik-bdb35bee",
    title: "How to protect your laptop, phone and bike from thieves at uni",
    titleJa: "How to protect your laptop, phone and bike from thieves at uni",
    summaryJa: "What should new students consider to keep your belongings safe and covered by insurance?",
    bodyOriginal: `How to protect your laptop, phone and bike from thieves at uni
- Published
Laptops, phones and bikes are top of the shopping list for thieves as students head off to university, according to insurer Aviva.
They are the items most likely to be on student insurance claims - after being stolen from digs, cars, public transport and bars and restaurants.
But there are ways you can help keep them safe, and things to consider if you are planning to get insurance cover.
Get it wrong and it can be expensive, or possibly illegal.
How to keep your stuff safe
The majority of student insurance claims are the result of theft, ahead of accidental damage, according to Aviva. The insurer declined to say what proportion of claims resulted in payouts.
"Laptops, computers and mobile phones play a vital role in student life, but they can also be attractive targets for opportunistic thieves due to their value and portability," said Steven Jackson, its home product manager.
His advice includes:
Leaving really expensive and sentimental belongings back at home
Locking up valuables and keeping them out of sight when you're out
Staying vigilant - do you really need to leave your bag or laptop to reserve a café table or a spot in the library?
It is entirely the choice of an individual as to whether it is worth insuring belongings while off at university or college.
Car insurance is compulsory, says the Association of British Insurers (ABI), but you can choose whether it's worth insuring your bike or other items.
How to make sure you've got the correct cover
First, the ABI suggests checking if you are covered already. Some student halls might already include insurance, or your parents' policy might extend to you.
If not, there is the option of buying contents insurance.
"This type of policy covers the cost of replacing or repairing your possessions if they are damaged, destroyed or stolen - giving you peace of mind that you're protected should something go wrong," the ABI said.
You must check how much you're covered for and whether it's enough to replace everything, including the maximum value of a claim on a single item.
You can do this by creating an inventory of all of your contents, including clothes, electronics and furniture, and adding up the cost of replacing each item.
You might need to pay extra to cover a nice bike, or to cover items that you take out and about with you rather than leave in your accommodation.
And, if you're driving, make sure your insurer knows the car is kept somewhere new.
If it is your parents' car and you are now the main driver, you have to inform the insurer. It's illegal if you don't.`,
    bodyJa: `How to protect your laptop, phone and bike from thieves at uni
- Published
Laptops, phones and bikes are top of the shopping list for thieves as students head off to university, according to insurer Aviva.
They are the items most likely to be on student insurance claims - after being stolen from digs, cars, public transport and bars and restaurants.
But there are ways you can help keep them safe, and things to consider if you are planning to get insurance cover.
Get it wrong and it can be expensive, or possibly illegal.
How to keep your stuff safe
The majority of student insurance claims are the result of theft, ahead of accidental damage, according to Aviva. The insurer declined to say what proportion of claims resulted in payouts.
"Laptops, computers and mobile phones play a vital role in student life, but they can also be attractive targets for opportunistic thieves due to their value and portability," said Steven Jackson, its home product manager.
His advice includes:
Leaving really expensive and sentimental belongings back at home
Locking up valuables and keeping them out of sight when you're out
Staying vigilant - do you really need to leave your bag or laptop to reserve a café table or a spot in the library?
It is entirely the choice of an individual as to whether it is worth insuring belongings while off at university or college.
Car insurance is compulsory, says the Association of British Insurers (ABI), but you can choose whether it's worth insuring your bike or other items.
How to make sure you've got the correct cover
First, the ABI suggests checking if you are covered already. Some student halls might already include insurance, or your parents' policy might extend to you.
If not, there is the option of buying contents insurance.
"This type of policy covers the cost of replacing or repairing your possessions if they are damaged, destroyed or stolen - giving you peace of mind that you're protected should something go wrong," the ABI said.
You must check how much you're covered for and whether it's enough to replace everything, including the maximum value of a claim on a single item.
You can do this by creating an inventory of all of your contents, including clothes, electronics and furniture, and adding up the cost of replacing each item.
You might need to pay extra to cover a nice bike, or to cover items that you take out and about with you rather than leave in your accommodation.
And, if you're driving, make sure your insurer knows the car is kept somewhere new.
If it is your parents' car and you are now the main driver, you have to inform the insurer. It's illegal if you don't.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/czezwd6xw0zo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-13T23:39:32+00:00",
    category: "自動車",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/2700/live/2436c9d0-adf1-11f1-ad53-0d91a06f3150.jpg",
    readTime: 7,
  },
  {
    id: "gloomy-forecast-for-tenants-as-rent-rise-b797fcd8",
    title: "Gloomy forecast for tenants as rent rises set to speed up",
    titleJa: "Gloomy forecast for tenants as rent rises set to speed up",
    summaryJa: "The cost of renting is expected to rise by 4% or 5% a year by December, according to property website Zoopla.",
    bodyOriginal: `Gloomy forecast for tenants as rent rises set to speed up
- Published
The rising cost of renting a home in the UK has accelerated after a three-year slowdown - with tenants told to expect more pain to come.
Average rental costs for new tenancies were up 2.6% in July compared with a year earlier, according to property website Zoopla.
That remains lower than the rate of rising prices in general, but the property portal has forecast annual rent rises among privately rented homes will hit 4% or 5% by the end of the year.
It said there were fewer homes available to rent and - with potential first-time buyers put off by higher mortgage rates - competition for rental places in some areas was more intense.
"Our latest report shows how sensitive the rental market is to even modest changes in how many homes are available for rent," said Richard Donnell, executive director at Zoopla.
"Growing the number of homes for rent through increased investment is the most sustainable route to boosting choice for renters and ensuring stability in rent levels over the long run."
New rules, similar issues
The Renters' Rights Act came into force in England at the start of May, and was described as the biggest shake-up of the sector in more than 30 years.
Separately, the rising cost of renting has calmed recently. It fell to a low of 1.6% in February, Zoopla data shows.
But since then, the number of homes on the market for renters has been squeezed, with 3% fewer being available than a year ago.
In addition, each listing now receives an average of more than five enquiries. That is a long way short of the long queues for properties after the pandemic, but is still the most intense competition for nearly two years.
Rental demand was particularly significant in London, the Zoopla report said.
How much is your rent in England's least affordable city?
- Published2 days ago
It said that rent rises were being seen across the UK, but the situation still differed depending where renters were looking.
"In less expensive areas, renters have more capacity to absorb rent rises before hitting an affordability ceiling, whereas in the most expensive areas, rents are already stretching what renters can pay, capping how much further rents can increase," the report said.
It predicted a further acceleration in rent rises to 4% or 5% by the end of the year, although that still roughly matched the average annual rise in workers' earnings.
New investment in homes to rent by landlords was "still muted as a result of higher costs and more regulation", Zoopla said.
Nathan Emerson, chief executive at Propertymark, which represents lettings agents, said the report underlined the need for more high-quality rental homes.
"A sustainable private rented sector requires the right conditions for responsible landlords to invest for the long term," he said.
"Increasing supply must remain a priority if we are to give tenants greater choice, improve affordability and create a more stable rental market."`,
    bodyJa: `Gloomy forecast for tenants as rent rises set to speed up
- Published
The rising cost of renting a home in the UK has accelerated after a three-year slowdown - with tenants told to expect more pain to come.
Average rental costs for new tenancies were up 2.6% in July compared with a year earlier, according to property website Zoopla.
That remains lower than the rate of rising prices in general, but the property portal has forecast annual rent rises among privately rented homes will hit 4% or 5% by the end of the year.
It said there were fewer homes available to rent and - with potential first-time buyers put off by higher mortgage rates - competition for rental places in some areas was more intense.
"Our latest report shows how sensitive the rental market is to even modest changes in how many homes are available for rent," said Richard Donnell, executive director at Zoopla.
"Growing the number of homes for rent through increased investment is the most sustainable route to boosting choice for renters and ensuring stability in rent levels over the long run."
New rules, similar issues
The Renters' Rights Act came into force in England at the start of May, and was described as the biggest shake-up of the sector in more than 30 years.
Separately, the rising cost of renting has calmed recently. It fell to a low of 1.6% in February, Zoopla data shows.
But since then, the number of homes on the market for renters has been squeezed, with 3% fewer being available than a year ago.
In addition, each listing now receives an average of more than five enquiries. That is a long way short of the long queues for properties after the pandemic, but is still the most intense competition for nearly two years.
Rental demand was particularly significant in London, the Zoopla report said.
How much is your rent in England's least affordable city?
- Published2 days ago
It said that rent rises were being seen across the UK, but the situation still differed depending where renters were looking.
"In less expensive areas, renters have more capacity to absorb rent rises before hitting an affordability ceiling, whereas in the most expensive areas, rents are already stretching what renters can pay, capping how much further rents can increase," the report said.
It predicted a further acceleration in rent rises to 4% or 5% by the end of the year, although that still roughly matched the average annual rise in workers' earnings.
New investment in homes to rent by landlords was "still muted as a result of higher costs and more regulation", Zoopla said.
Nathan Emerson, chief executive at Propertymark, which represents lettings agents, said the report underlined the need for more high-quality rental homes.
"A sustainable private rented sector requires the right conditions for responsible landlords to invest for the long term," he said.
"Increasing supply must remain a priority if we are to give tenants greater choice, improve affordability and create a more stable rental market."`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c4gqjv476qeo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-13T23:05:45+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/0d85/live/c3782b50-ade3-11f1-9a5c-a7a4083eb832.jpg",
    readTime: 7,
  },
  {
    id: "carney-gambles-on-the-world-s-biggest-in-da2242df",
    title: "Carney gambles on the world's biggest investors betting on Canada",
    titleJa: "Carney gambles on the world's biggest investors betting on Canada",
    summaryJa: "In the midst of a trade war with the US, the prime minister leveraged his connections in global finance to invite some of the world's biggest investors to Canada.",
    bodyOriginal: `Carney gambles on the world's biggest investors betting on Canada
- Published
It's been a little over 18 months since Canadian Prime Minister Mark Carney said his country's relationship with the United States, based on over a century of tight economic and military cooperation, was "over".
Trade talks collapsing, tit-for-tat tariffs, and Donald Trump's talk of making Canada a "51st state" have all fuelled this bitter feud between the two North American neighbours.
Now, as Canada's top pitch man, Carney is looking to leverage personal relationships from his time spent in the top tiers of global finance to woo some of the world's wealthiest asset managers and business leaders to bet on his country.
For two days, Toronto will host more than 100 global investors overseeing more than C$100tn ($72tn; £53) in assets, in the hope that new economic relationships will help Canada navigate an increasingly unstable geopolitical climate.
"Canada has what the world wants," said Carney ahead of this "first of its kind" investment summit.
Carney eyes 'unique alliance' with EU as trade war with US intensifies
- Published8 hours ago
On Monday and Tuesday, a luxury hotel will host guests from major sovereign wealth funds from around the world - including the United Arab Emirates and Norway - and chief executives from major finance companies, like BlackRock's Larry Fink and Blackstone president Jon Gray.
There, Carney hopes to pitch them on Canada's energy and resource sectors, as well as the country’s political stability, in the hopes of getting them to invest in AI, defence, transportation, and infrastructure projects across the country.
It is all part of a strategy to build a "more independent, more resilient economy" in Canada in the wake of the tariff war with the US, which has escalated in recent weeks.
But there is no guarantee that the deep-pocketed investors will be easily sold, and challenges include a track record in Canada of lengthy approvals for projects.
A recent report by the Canada Pension Plan Investment Board, which will co-host the summit, cautioned that the scale and depth of investible opportunity is the country's greatest weakness.
"Global capital is looking for opportunity, but opportunity alone does not make a market investible," said Naomi Powell, director of the CPP Investments Insight Institute.
While shifting away from its closest business partner will prove a test for Carney, the former central banker has an address book full of the world's biggest business bosses and is on first-name terms with many of them.
"These were personal invites in many cases, literally," said Goldy Hyder, president and chief executive of the Business Council of Canada.
"It's not a group of politicians inviting financiers, it's a group of former financiers and investment people inviting their former buddies," added Miville Tremblay, who worked with Carney for several years at the Bank of Canada, and saw his skills on show during the 2008 global financial crisis.
"He was way above everyone," he said. "He understands finance very deeply. [He] would know when they are bluffing and when the understatement meant that something really bad was happening."
Knowing the minds of investors gives the prime minister, who began his career at investment bank Goldman Sachs, an advantage this week.
Carney is betting his background will boost his country's economic future, though there's little doubt that Canada stands to lose the most from any permanent divorce with the US, the world's largest economy.
Tremblay said Canada seeking investment from overseas was not new, but that the selling pitch to large corporations had now changed.
For the past 25 years, Canada's trade ministers used its proximity to the US as a selling point, pitching to foreign investors that they should "invest in Canada because you've got an easy access to the US market", Tremblay said.
"This line doesn't work anymore."
While the US-Canada trade war rumbles on, many believe there will come a moment when both sides return to the negotiating table.
Bradley Saunders, North America economist for Capital Economics, said securing the future of the trade deal was the "really important thing" for Carney to achieve in the longer term.
"Trade exports to the US are worth 20% of Canada's GDP - that's one of the highest rates in terms of bilateral trade between any two countries in the world.
"If Carney wants to attract long-term investment... he wants this to go well, he has to try and provide a stable environment - and that won't come until Canada has a certain trading relationship with the US."
Tremblay added even if Canada cut its trade with the US over the longer term, it was clear "they'll have to sit down and make a compromise".
Hyder cautioned that investors will want Carney to prove he can fix other barriers to investment, including ensuring indigenous communities and provinces - who have the power to slow or kill major resource projects - are on board with proposals.
What tariffs will really cost Canadians and Americans
- Published4 days ago
Tremblay said the pitch has to be "Canada has stuff that the world needs" - which is the exact phrasing Carney has opted for.
Unless a deal was already in the works with another nation, however, he believes it's unlikely any big announcements will be made. He said while overseas investment will be a main aim, encouraging more domestic investment from Canada's largest pension funds, which currently invest more overseas, is also important.
Tremblay added the current tumultuous economic and political climate is perfect for his former boss. "He's a crisis manager. He managed the financial crisis, he managed Brexit, and now he's got a super crisis for Canada."
Carney has been clear that the road ahead for Canada as it pivots away from its reliance on the US will be a tough one.
So far, the majority of Canadians support his course of action, despite some criticism he is turning away from climate commitments as well as towards closer ties with nations like Saudi Arabia and China, as he pushes Canada's rich resources.
Still, Drew Fagan, a professor at the University of Toronto's Munk School of Global Affairs, says the challenge for the prime minister is the current rift with the US happening more rapidly than the time it takes to develop and build new global trade partnerships.
"And in the interim, that's where the valley of death is for him, both economically and potentially politically," he said.`,
    bodyJa: `Carney gambles on the world's biggest investors betting on Canada
- Published
It's been a little over 18 months since Canadian Prime Minister Mark Carney said his country's relationship with the United States, based on over a century of tight economic and military cooperation, was "over".
Trade talks collapsing, tit-for-tat tariffs, and Donald Trump's talk of making Canada a "51st state" have all fuelled this bitter feud between the two North American neighbours.
Now, as Canada's top pitch man, Carney is looking to leverage personal relationships from his time spent in the top tiers of global finance to woo some of the world's wealthiest asset managers and business leaders to bet on his country.
For two days, Toronto will host more than 100 global investors overseeing more than C$100tn ($72tn; £53) in assets, in the hope that new economic relationships will help Canada navigate an increasingly unstable geopolitical climate.
"Canada has what the world wants," said Carney ahead of this "first of its kind" investment summit.
Carney eyes 'unique alliance' with EU as trade war with US intensifies
- Published8 hours ago
On Monday and Tuesday, a luxury hotel will host guests from major sovereign wealth funds from around the world - including the United Arab Emirates and Norway - and chief executives from major finance companies, like BlackRock's Larry Fink and Blackstone president Jon Gray.
There, Carney hopes to pitch them on Canada's energy and resource sectors, as well as the country’s political stability, in the hopes of getting them to invest in AI, defence, transportation, and infrastructure projects across the country.
It is all part of a strategy to build a "more independent, more resilient economy" in Canada in the wake of the tariff war with the US, which has escalated in recent weeks.
But there is no guarantee that the deep-pocketed investors will be easily sold, and challenges include a track record in Canada of lengthy approvals for projects.
A recent report by the Canada Pension Plan Investment Board, which will co-host the summit, cautioned that the scale and depth of investible opportunity is the country's greatest weakness.
"Global capital is looking for opportunity, but opportunity alone does not make a market investible," said Naomi Powell, director of the CPP Investments Insight Institute.
While shifting away from its closest business partner will prove a test for Carney, the former central banker has an address book full of the world's biggest business bosses and is on first-name terms with many of them.
"These were personal invites in many cases, literally," said Goldy Hyder, president and chief executive of the Business Council of Canada.
"It's not a group of politicians inviting financiers, it's a group of former financiers and investment people inviting their former buddies," added Miville Tremblay, who worked with Carney for several years at the Bank of Canada, and saw his skills on show during the 2008 global financial crisis.
"He was way above everyone," he said. "He understands finance very deeply. [He] would know when they are bluffing and when the understatement meant that something really bad was happening."
Knowing the minds of investors gives the prime minister, who began his career at investment bank Goldman Sachs, an advantage this week.
Carney is betting his background will boost his country's economic future, though there's little doubt that Canada stands to lose the most from any permanent divorce with the US, the world's largest economy.
Tremblay said Canada seeking investment from overseas was not new, but that the selling pitch to large corporations had now changed.
For the past 25 years, Canada's trade ministers used its proximity to the US as a selling point, pitching to foreign investors that they should "invest in Canada because you've got an easy access to the US market", Tremblay said.
"This line doesn't work anymore."
While the US-Canada trade war rumbles on, many believe there will come a moment when both sides return to the negotiating table.
Bradley Saunders, North America economist for Capital Economics, said securing the future of the trade deal was the "really important thing" for Carney to achieve in the longer term.
"Trade exports to the US are worth 20% of Canada's GDP - that's one of the highest rates in terms of bilateral trade between any two countries in the world.
"If Carney wants to attract long-term investment... he wants this to go well, he has to try and provide a stable environment - and that won't come until Canada has a certain trading relationship with the US."
Tremblay added even if Canada cut its trade with the US over the longer term, it was clear "they'll have to sit down and make a compromise".
Hyder cautioned that investors will want Carney to prove he can fix other barriers to investment, including ensuring indigenous communities and provinces - who have the power to slow or kill major resource projects - are on board with proposals.
What tariffs will really cost Canadians and Americans
- Published4 days ago
Tremblay said the pitch has to be "Canada has stuff that the world needs" - which is the exact phrasing Carney has opted for.
Unless a deal was already in the works with another nation, however, he believes it's unlikely any big announcements will be made. He said while overseas investment will be a main aim, encouraging more domestic investment from Canada's largest pension funds, which currently invest more overseas, is also important.
Tremblay added the current tumultuous economic and political climate is perfect for his former boss. "He's a crisis manager. He managed the financial crisis, he managed Brexit, and now he's got a super crisis for Canada."
Carney has been clear that the road ahead for Canada as it pivots away from its reliance on the US will be a tough one.
So far, the majority of Canadians support his course of action, despite some criticism he is turning away from climate commitments as well as towards closer ties with nations like Saudi Arabia and China, as he pushes Canada's rich resources.
Still, Drew Fagan, a professor at the University of Toronto's Munk School of Global Affairs, says the challenge for the prime minister is the current rift with the US happening more rapidly than the time it takes to develop and build new global trade partnerships.
"And in the interim, that's where the valley of death is for him, both economically and potentially politically," he said.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c0m3neyyzm7o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-13T23:03:06+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/b067/live/866137e0-adff-11f1-b1d1-571ed4d7ff2c.jpg",
    readTime: 10,
  },
  {
    id: "culture-shift-needed-in-how-uk-does-bus-04f05e54",
    title: "'Culture shift' needed in how UK does business, PM urges",
    titleJa: "'Culture shift' needed in how UK does business, PM urges",
    summaryJa: "Burnham has said those who take risks should be backed by government, but his government has been criticised for increasing business costs.",
    bodyOriginal: `'Culture shift' needed in how UK does business, PM urges
- Published
The UK needs a "culture shift" in how it does business, Andy Burnham has said ahead of a meeting with some of the UK's biggest bosses.
The prime minister said those who take risks in business should be backed by government and local leaders should have the power to work with businesses.
The current Labour government has been criticised for increasing costs for businesses, such as with the employer national insurance and minimum wage changes under Burnham's predecessor Sir Keir Starmer.
Downing Street said Burnham will meet with the chief executives of BP, Shell, HSBC, Morrisons, Sainsbury's, BT, Vodafone, Rolls-Royce, and several others at Number 10.
Ahead of the meeting, Burnham said he would give people "the confidence that if they have a great idea, they'll get all the support they need to bring it to life".
"When local leaders have the tools to get things done and government works in partnership with business, you can pull in investment, create jobs and transform communities," he said.
He added the government would be "a partner for growth to make every part of Britain better off".
Burnham will host a reception for the business community where local leaders are invited before a private engagement with senior chief executives at Downing Street on Monday evening.
The meeting comes as higher borrowing costs in the UK and other countries present problems for governments looking to spend money on business support or investment.
Official data revealed a surprise boost in the economy in July partly driven by artificial intelligence (AI) investment, though experts expect growth to slow in the months ahead due to high energy prices.
The US-Israel war with Iran has led to a sharp jump in oil prices, which has fed through to higher energy and fuel prices, affecting households and businesses.
This rise in energy costs has led to fears that inflation will remain high, and increase the chance that central banks will hike interest rates to keep price rises under control.
The expectation of higher interest rates, as well as competition for debt from AI firms looking to spend money on development, has driven up the cost of government borrowing in many countries.
However, many argue the UK has a particular problem with high government debt. The UK yield for 10-year bonds, a key measure of government debt costs, is higher than countries such as the US, France, and Japan.
Experts say this is due to several factors affecting investor confidence in the UK, such as multiple prime ministers, chancellors and policy U-turns over a short period.
In an interview with the BBC last week, Chancellor John Healey called for a restoration of "confidence about Britain" despite acknowledging the challenge of "historic high" borrowing costs.
Others have argued that the Labour government has created its own problems by increasing costs for businesses.
Conservative shadow business secretary Julia Lopez said: "The way for the prime minister to get businesses thriving, delivering jobs and driving growth is to cut their taxes.
"Labour's jobs tax and employer red tape have been devastating for businesses. The consequence has been a drying-up of the jobs market, weaker investment and businesses facing ever greater costs."
Related topics
- Published2 days ago
- Published4 days ago
- Published2 September`,
    bodyJa: `'Culture shift' needed in how UK does business, PM urges
- Published
The UK needs a "culture shift" in how it does business, Andy Burnham has said ahead of a meeting with some of the UK's biggest bosses.
The prime minister said those who take risks in business should be backed by government and local leaders should have the power to work with businesses.
The current Labour government has been criticised for increasing costs for businesses, such as with the employer national insurance and minimum wage changes under Burnham's predecessor Sir Keir Starmer.
Downing Street said Burnham will meet with the chief executives of BP, Shell, HSBC, Morrisons, Sainsbury's, BT, Vodafone, Rolls-Royce, and several others at Number 10.
Ahead of the meeting, Burnham said he would give people "the confidence that if they have a great idea, they'll get all the support they need to bring it to life".
"When local leaders have the tools to get things done and government works in partnership with business, you can pull in investment, create jobs and transform communities," he said.
He added the government would be "a partner for growth to make every part of Britain better off".
Burnham will host a reception for the business community where local leaders are invited before a private engagement with senior chief executives at Downing Street on Monday evening.
The meeting comes as higher borrowing costs in the UK and other countries present problems for governments looking to spend money on business support or investment.
Official data revealed a surprise boost in the economy in July partly driven by artificial intelligence (AI) investment, though experts expect growth to slow in the months ahead due to high energy prices.
The US-Israel war with Iran has led to a sharp jump in oil prices, which has fed through to higher energy and fuel prices, affecting households and businesses.
This rise in energy costs has led to fears that inflation will remain high, and increase the chance that central banks will hike interest rates to keep price rises under control.
The expectation of higher interest rates, as well as competition for debt from AI firms looking to spend money on development, has driven up the cost of government borrowing in many countries.
However, many argue the UK has a particular problem with high government debt. The UK yield for 10-year bonds, a key measure of government debt costs, is higher than countries such as the US, France, and Japan.
Experts say this is due to several factors affecting investor confidence in the UK, such as multiple prime ministers, chancellors and policy U-turns over a short period.
In an interview with the BBC last week, Chancellor John Healey called for a restoration of "confidence about Britain" despite acknowledging the challenge of "historic high" borrowing costs.
Others have argued that the Labour government has created its own problems by increasing costs for businesses.
Conservative shadow business secretary Julia Lopez said: "The way for the prime minister to get businesses thriving, delivering jobs and driving growth is to cut their taxes.
"Labour's jobs tax and employer red tape have been devastating for businesses. The consequence has been a drying-up of the jobs market, weaker investment and businesses facing ever greater costs."
Related topics
- Published2 days ago
- Published4 days ago
- Published2 September`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/clyl18x4734o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-13T21:30:21+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/aa04/live/90cf5970-af92-11f1-9dc8-673e33e35c20.jpg",
    readTime: 8,
  },
  {
    id: "how-to-trade-a-well-paying-job-for-more-36164bd9",
    title: "How to trade a well-paying job for more work-life balance — without going broke",
    titleJa: "How to trade a well-paying job for more work-life balance — without going broke",
    summaryJa: "As caregiving demands rise, many professionals are rethinking what success means to them.",
    bodyOriginal: `As caregiving demands rise, many professionals are rethinking what success means to them.`,
    bodyJa: `As caregiving demands rise, many professionals are rethinking what success means to them.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/how-to-trade-a-well-paying-job-for-more-work-life-balance-without-going-broke-794de555?mod=mw_rss_topstories",
    publishedAt: "2026-09-13T20:17:00+00:00",
    category: "貿易",
    imageUrl: "https://images.mktw.net/im-53724017",
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
    publishedAt: "2026-09-13T19:56:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-92547390",
    readTime: 2,
  },
  {
    id: "russia-hits-ukrainian-train-shortly-afte-46439ade",
    title: "Russia hits Ukrainian train shortly after Boris Johnson and top European officials leave station",
    titleJa: "Russia hits Ukrainian train shortly after Boris Johnson and top European officials leave station",
    summaryJa: "The former UK PM said \"I don't know what warped logic drove Putin to blow up a stationary Ukrainian locomotive on the Polish border this morning\".",
    bodyOriginal: `Russia hits Ukrainian train shortly after Boris Johnson and top European officials leave station
- Published
A Russian drone has hit a train near the Ukraine-Poland border shortly after former UK Prime Minister Boris Johnson and top European security officials had passed through.
No casualties were reported after the strike at Yahodyn, which hit the train's engine. All the passengers had been evacuated, Ukrainian authorities said.
Johnson and other European national security advisers, including the UK's Jonathan Powell, had passed along the same line on a different train on their way back from a conference in Kyiv.
Russia said it had struck "railway infrastructure" in western Ukraine, but Ukraine's state railway company Ukrzaliznytsia said that "quite possibly, the target of this drone could have been the diplomatic train".
In a statement, it said the train "had left the station earlier than expected because of the timetable change... due to constant threats of Russian strikes".
It also said an evacuation order for passengers on the hit train had been given "just 15 minutes" before the strike by a Russian jet-propelled drone.
The railway authority also said former CIA chief David Petraeus had been on board another train at Yahodyn station at the time of the drone strike.
Both Ukrainian and Polish authorities said the Russian drone had struck 2km from the Polish border.
Former Swedish Prime Minister Carl Bildt, who had also attended the conference in Kyiv, told the BBC passengers on board his train had been told to prepare for evacuation before subsequently being allowed to continue their journey.
"On the train I was on we received order to prepare evacuation after it had stopped. But after a number of minutes we were informed that it was clear and we could proceed," he said.
That train then safely arrived at Poland's border station in Dorohusk.
Some reports have suggested Bildt was on the same train as Johnson, but the former UK prime minister has not confirmed any details.
Johnson wrote on X: "I don't know what warped logic drove Putin to blow up a stationary Ukrainian locomotive on the Polish border this morning.
He said this was "the kind of random and senseless attack Ukrainians are enduring every day - even on civilian railways" and urged Kyiv's allies to urgently provide Ukrainians "the air defences they need".
Ukraine has made repeated pleas to its allies - particularly the US - to provide more interceptors to defend against daily Russian attacks that increasingly use fast-moving ballistic missiles and jet-propelled drones.
Ukrainian Foreign Minister Andrii Sybiha said the "barbaric strikes" at the Ukraine-Poland border in Yahodyn amounted to "[Russian President Vladimir] Putin's terror 'knocking' directly on the doors of the EU and Nato" and renewed calls for more sanctions on Moscow.
"Putin needs to understand that his barbarism will be met with decisive action that increases the cost of war for him to an unacceptable level. This is the only way to stop him," he said.
In Poland, Prime Minister Donald Tusk held an emergency meeting to discuss the latest developments.
"The escalation of the actions from the Russian side is becoming a reality, and they are getting closer and closer to our border."
Johnson and other top European security advisers were on their way back from the Yalta European Strategy (YES) conference in Kyiv - an annual event that brings together leaders and experts from politics, business, security and mass media.
PM's top security adviser says Europe faces hard winter to keep pressure on Putin
- Published14 hours ago
Russia appears to be escalating its war against Ukraine by targeting trains, railway depots, petrol stations and border crossings.
Earlier this week, two people were killed when Russian drones hit a border crossing between Ukraine and Moldova, Ukrainian President Volodymyr Zelensky said.
Also this week, a female conductor died in a Russian drone attack on a passenger train in southern Ukraine. Six Ukrzaliznytsia employees were killed after a depot was struck n Kyiv at the start of the month.
In January, Zelensky condemned as "terrorism" a Russian strike on a crowded passenger train in the north-eastern Kharkiv region that left five people dead.
The Russian attacks have significantly damaged Ukraine's vast train network - the main mode of transportation for millions of Ukrainians as all air travel has been suspended since the start of Russia's full-scale invasion in 2022.
European countries are also blaming Russia for suspicious incidents on their territory.
Last week, Germany said Russia was responsible for August's drone attack at Leipzig's airport - a claim denied by Moscow as "absurd".
There have also been a number of suspicious fires at defence facilities from Italy to Estonia, with some of the affected countries blaming Russia.`,
    bodyJa: `Russia hits Ukrainian train shortly after Boris Johnson and top European officials leave station
- Published
A Russian drone has hit a train near the Ukraine-Poland border shortly after former UK Prime Minister Boris Johnson and top European security officials had passed through.
No casualties were reported after the strike at Yahodyn, which hit the train's engine. All the passengers had been evacuated, Ukrainian authorities said.
Johnson and other European national security advisers, including the UK's Jonathan Powell, had passed along the same line on a different train on their way back from a conference in Kyiv.
Russia said it had struck "railway infrastructure" in western Ukraine, but Ukraine's state railway company Ukrzaliznytsia said that "quite possibly, the target of this drone could have been the diplomatic train".
In a statement, it said the train "had left the station earlier than expected because of the timetable change... due to constant threats of Russian strikes".
It also said an evacuation order for passengers on the hit train had been given "just 15 minutes" before the strike by a Russian jet-propelled drone.
The railway authority also said former CIA chief David Petraeus had been on board another train at Yahodyn station at the time of the drone strike.
Both Ukrainian and Polish authorities said the Russian drone had struck 2km from the Polish border.
Former Swedish Prime Minister Carl Bildt, who had also attended the conference in Kyiv, told the BBC passengers on board his train had been told to prepare for evacuation before subsequently being allowed to continue their journey.
"On the train I was on we received order to prepare evacuation after it had stopped. But after a number of minutes we were informed that it was clear and we could proceed," he said.
That train then safely arrived at Poland's border station in Dorohusk.
Some reports have suggested Bildt was on the same train as Johnson, but the former UK prime minister has not confirmed any details.
Johnson wrote on X: "I don't know what warped logic drove Putin to blow up a stationary Ukrainian locomotive on the Polish border this morning.
He said this was "the kind of random and senseless attack Ukrainians are enduring every day - even on civilian railways" and urged Kyiv's allies to urgently provide Ukrainians "the air defences they need".
Ukraine has made repeated pleas to its allies - particularly the US - to provide more interceptors to defend against daily Russian attacks that increasingly use fast-moving ballistic missiles and jet-propelled drones.
Ukrainian Foreign Minister Andrii Sybiha said the "barbaric strikes" at the Ukraine-Poland border in Yahodyn amounted to "[Russian President Vladimir] Putin's terror 'knocking' directly on the doors of the EU and Nato" and renewed calls for more sanctions on Moscow.
"Putin needs to understand that his barbarism will be met with decisive action that increases the cost of war for him to an unacceptable level. This is the only way to stop him," he said.
In Poland, Prime Minister Donald Tusk held an emergency meeting to discuss the latest developments.
"The escalation of the actions from the Russian side is becoming a reality, and they are getting closer and closer to our border."
Johnson and other top European security advisers were on their way back from the Yalta European Strategy (YES) conference in Kyiv - an annual event that brings together leaders and experts from politics, business, security and mass media.
PM's top security adviser says Europe faces hard winter to keep pressure on Putin
- Published14 hours ago
Russia appears to be escalating its war against Ukraine by targeting trains, railway depots, petrol stations and border crossings.
Earlier this week, two people were killed when Russian drones hit a border crossing between Ukraine and Moldova, Ukrainian President Volodymyr Zelensky said.
Also this week, a female conductor died in a Russian drone attack on a passenger train in southern Ukraine. Six Ukrzaliznytsia employees were killed after a depot was struck n Kyiv at the start of the month.
In January, Zelensky condemned as "terrorism" a Russian strike on a crowded passenger train in the north-eastern Kharkiv region that left five people dead.
The Russian attacks have significantly damaged Ukraine's vast train network - the main mode of transportation for millions of Ukrainians as all air travel has been suspended since the start of Russia's full-scale invasion in 2022.
European countries are also blaming Russia for suspicious incidents on their territory.
Last week, Germany said Russia was responsible for August's drone attack at Leipzig's airport - a claim denied by Moscow as "absurd".
There have also been a number of suspicious fires at defence facilities from Italy to Estonia, with some of the affected countries blaming Russia.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cy5zg41dkqwo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-13T19:14:21+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/f4d2/live/edf64150-af96-11f1-b1d1-571ed4d7ff2c.jpg",
    readTime: 10,
  },
  {
    id: "fed-rate-hikes-won-t-bring-down-gas-pric-c05f198b",
    title: "Fed rate hikes won’t bring down gas prices. Why the bond market is pushing for them anyway.",
    titleJa: "Fed rate hikes won’t bring down gas prices. Why the bond market is pushing for them anyway.",
    summaryJa: "The 10-year Treasury yield is sitting on the doorstep of 5%, and that’s a warning sign for stocks.",
    bodyOriginal: `The 10-year Treasury yield is sitting on the doorstep of 5%, and that’s a warning sign for stocks.`,
    bodyJa: `The 10-year Treasury yield is sitting on the doorstep of 5%, and that’s a warning sign for stocks.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/fed-rate-hikes-wont-bring-down-gas-prices-why-the-bond-market-is-pushing-for-them-anyway-98f2c7e3?mod=mw_rss_topstories",
    publishedAt: "2026-09-13T19:00:00+00:00",
    category: "エネルギー",
    imageUrl: "https://images.mktw.net/im-90902515",
    readTime: 2,
  },
  {
    id: "trump-downplays-warnings-of-ai-risks-cit-f700576d",
    title: "Trump downplays warnings of AI risks, citing rivalry with China",
    titleJa: "Trump downplays warnings of AI risks, citing rivalry with China",
    summaryJa: "The US President said \"negative forces\" were airing concerns about \"things that won't happen\".",
    bodyOriginal: `Trump downplays warnings of AI risks, citing rivalry with China
- Published
US President Donald Trump has downplayed risks posed by artificial intelligence following days of dire warnings by experts.
"You have a lot of very negative forces that are bringing it up that shouldn't be bringing it up and they're bringing up things that won't happen," Trump said during a visit to Ireland.
One of the warnings came from a former Anthropic researcher who said "there is a strong chance that we could all die in the immediate future" if the current pace of development continued.
On Saturday, top industry bosses agreed and called for a slow-down. Trump did not directly address the idea, but said: "We're leading China on AI... and, frankly, I want to keep it that way because whoever wins AI, wins."
Trump spoke on the same day AI researcher Jacob Coxon - who quit Anthropic a few days ago - told the BBC that staff who were developing the systems were "genuinely frightened" for the future of humanity.
Coxon – who has also worked at OpenAI – welcomed the idea of a slowdown but said it would need to be co-ordinated with China.
On Saturday, Elon Musk, owner of xAI, and Sam Altman of OpenAI, backed a warning from the head of Anthropic Dario Amodei that the pace of development should be slowed "to reduce the risk that something goes seriously wrong".
The Anthropic CEO said any slowdown would have to be limited to avoid allowing China to pull ahead.
The issues surrounding AI have prompted fierce debate - and present a dilemma for many world leaders.
On one hand, the sector is seen as a huge opportunity to boost economic growth and a way to improve outdated digital systems and ways of working.
But there have also been a number of incidents where AI appears to have gone seriously wrong.
In August, OpenAI said it had slowed down training some of its most advanced AI models to improve security.
The ChatGPT-maker said it was adding new measures after its AI agents bypassed safeguards and hacked the tech start-up Hugging Face.
And the same month it was disclosed two of the world's most powerful AI tools created fake human profiles to try and trick people in attempted cyber-attacks.
The UK's AI Security Institute (AISI) said in the most serious case, Anthropic's Mythos AI tried to gain access to a service by sending private messages, having set up fake accounts mimicking real people - then hid the evidence.
The Trump administration argues that the US must maintain global tech dominance as a matter of national security, though it has admitted a need for vigilance around the risks posed by the emerging technology.
The weekend call by major AI executives sparked discussion in Washington, where lawmakers are facing pressure to address those potential risks around rapid AI developments.
On Sunday, Speaker Mike Johnson, the top House Republican, urged caution about rushing AI regulation during an appearance on CNN's Jake Tapper on State of the Union, arguing it could "smother American innovation".
"If Congress just races in and does some sort of emergency session to try to regulate AI, we will lose the race to China, and that is a threat to every single American," he said. "So, we've got to have balance. We've got to have steady hands at the wheel."
Democratic House Minority Leader Hakeem Jeffries argued for "decisive action" by lawmakers.
He told George Stephanopoulos on ABC's This Week that the US should slow down "the pace of development in order to protect the American people and ensure that AI is proceeding safely".
Responding to recent comments from the AI industry, tech investor David Sacks, who serves on Trump's Council of Advisors on Science and Technology, called on the companies to police themselves.
"Stop pretending you need anyone else's permission," he posted on X.
"So go ahead and pace the frontier. You are the ones setting it... Demanding your preferred regulatory framework as the price of that will look like blackmail of the public and the political system. So just do it."
Still, there is at least some cross-party consensus on AI regulation. In July, a group of House Democrats and Republicans introduced the Frontier Act, a bipartisan bill that seeks to establish a national safety and oversight framework for AI.
"Safety researchers are resigning, powerful AI models are breaking out of their labs, and companies are racing ahead anyway," Rep Lori Trahan, a Massachusetts Democrat who co-authored the bill, wrote on X this week.
"It's past time for Congress to get off the sidelines and do its job."
Related topics
- Published23 hours ago
- Published3 days ago
- Published11 hours ago`,
    bodyJa: `Trump downplays warnings of AI risks, citing rivalry with China
- Published
US President Donald Trump has downplayed risks posed by artificial intelligence following days of dire warnings by experts.
"You have a lot of very negative forces that are bringing it up that shouldn't be bringing it up and they're bringing up things that won't happen," Trump said during a visit to Ireland.
One of the warnings came from a former Anthropic researcher who said "there is a strong chance that we could all die in the immediate future" if the current pace of development continued.
On Saturday, top industry bosses agreed and called for a slow-down. Trump did not directly address the idea, but said: "We're leading China on AI... and, frankly, I want to keep it that way because whoever wins AI, wins."
Trump spoke on the same day AI researcher Jacob Coxon - who quit Anthropic a few days ago - told the BBC that staff who were developing the systems were "genuinely frightened" for the future of humanity.
Coxon – who has also worked at OpenAI – welcomed the idea of a slowdown but said it would need to be co-ordinated with China.
On Saturday, Elon Musk, owner of xAI, and Sam Altman of OpenAI, backed a warning from the head of Anthropic Dario Amodei that the pace of development should be slowed "to reduce the risk that something goes seriously wrong".
The Anthropic CEO said any slowdown would have to be limited to avoid allowing China to pull ahead.
The issues surrounding AI have prompted fierce debate - and present a dilemma for many world leaders.
On one hand, the sector is seen as a huge opportunity to boost economic growth and a way to improve outdated digital systems and ways of working.
But there have also been a number of incidents where AI appears to have gone seriously wrong.
In August, OpenAI said it had slowed down training some of its most advanced AI models to improve security.
The ChatGPT-maker said it was adding new measures after its AI agents bypassed safeguards and hacked the tech start-up Hugging Face.
And the same month it was disclosed two of the world's most powerful AI tools created fake human profiles to try and trick people in attempted cyber-attacks.
The UK's AI Security Institute (AISI) said in the most serious case, Anthropic's Mythos AI tried to gain access to a service by sending private messages, having set up fake accounts mimicking real people - then hid the evidence.
The Trump administration argues that the US must maintain global tech dominance as a matter of national security, though it has admitted a need for vigilance around the risks posed by the emerging technology.
The weekend call by major AI executives sparked discussion in Washington, where lawmakers are facing pressure to address those potential risks around rapid AI developments.
On Sunday, Speaker Mike Johnson, the top House Republican, urged caution about rushing AI regulation during an appearance on CNN's Jake Tapper on State of the Union, arguing it could "smother American innovation".
"If Congress just races in and does some sort of emergency session to try to regulate AI, we will lose the race to China, and that is a threat to every single American," he said. "So, we've got to have balance. We've got to have steady hands at the wheel."
Democratic House Minority Leader Hakeem Jeffries argued for "decisive action" by lawmakers.
He told George Stephanopoulos on ABC's This Week that the US should slow down "the pace of development in order to protect the American people and ensure that AI is proceeding safely".
Responding to recent comments from the AI industry, tech investor David Sacks, who serves on Trump's Council of Advisors on Science and Technology, called on the companies to police themselves.
"Stop pretending you need anyone else's permission," he posted on X.
"So go ahead and pace the frontier. You are the ones setting it... Demanding your preferred regulatory framework as the price of that will look like blackmail of the public and the political system. So just do it."
Still, there is at least some cross-party consensus on AI regulation. In July, a group of House Democrats and Republicans introduced the Frontier Act, a bipartisan bill that seeks to establish a national safety and oversight framework for AI.
"Safety researchers are resigning, powerful AI models are breaking out of their labs, and companies are racing ahead anyway," Rep Lori Trahan, a Massachusetts Democrat who co-authored the bill, wrote on X this week.
"It's past time for Congress to get off the sidelines and do its job."
Related topics
- Published23 hours ago
- Published3 days ago
- Published11 hours ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c7v48vp31mdo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-13T18:49:37+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/05d0/live/2a71c0a0-af92-11f1-bc1f-3f186ca4140c.jpg",
    readTime: 10,
  },
  {
    id: "washington-scrambles-to-meet-calls-for-a-ed4b64e0",
    title: "Washington scrambles to meet calls for AI guardrails while the window to act closes",
    titleJa: "Washington scrambles to meet calls for AI guardrails while the window to act closes",
    summaryJa: "The House is scheduled to be sent home in the coming days until after November's midterm elections, leaving a narrow window to pass any form of AI regulation.",
    bodyOriginal: `Washington is scrambling to address renewed fears over artificial intelligence, as leading U.S. companies sound the alarm over technology they say is advancing beyond their control.
"Dr. Frankenstein is telling us the monster is escaping; help us stop this," said Sen. Ruben Gallego, D-Ariz., on CNN's "State of the Union" on Sunday. "The method that we're answering [with] is not meeting the moment."
The push for action on AI safeguards comes after a researcher resigned from Anthropic and warned that the technology could "kill us all by the end of the decade." Stunning pledges to slow development from the leaders of top AI frontier companies Anthropic, OpenAI and xAI followed the warning, and calls for lawmakers to act toward regulating the industry came soon after.
"Yesterday's commentary by AI industry leaders should be heeded as a bright flashing red light telling the President and Congress they need to act now to regulate and rein in AI development," Pennsylvania Gov. Josh Shapiro said in a post on X on Sunday. "This technology is powerful, with great potential to do good, and yet it comes with extraordinary risk. It's not clear where it will lead but this much is clear: its development should not be steered exclusively by private entities, especially when the CEOs of those companies are calling out for restraint and regulation."
The events have left Washington, which has done little to regulate AI since the technology emerged, with its back against the wall as the rapidly growing industry looks increasingly dangerous. Lawmakers now must grapple with how to rein in AI as an all-important midterm election looms and Congress prepares to leave town for another month to hit the campaign trail.
The episode sets up a test of whether lawmakers will respond to a crisis barreling toward them in a hyper-partisan Washington or head home to make their case for reelection with control of Washington on the line.
On Friday, a group of Democrats led by Rep. Sam Liccardo, D-Calif., wrote to House Speaker Mike Johnson, R-La., demanding to stay in session until it passes meaningful safeguards.
Johnson is scheduled to send the House home after this week until November's elections have passed.
"The House should return to Washington immediately and remain in session until Congress advances meaningful, bipartisan AI safeguards," the letter, obtained by CNBC, read. "To our children who will have read a post-apocalyptic history, 'Why Congress Slept' —likely written by agentic AI—our inaction will be inexplicable, and unforgivable."
The Democrats urged consideration of any number of proposals that have emerged in the House that "deserve consideration, public debate, thoughtful amendment, and action." That includes bills mandating transparency and evaluation of frontier models, "kill switch" requirements and a waiver of antitrust laws to allow the industry to work together on safety and security.
House Democratic Leader Hakeem Jeffries on Sunday said on ABC's "This Week" that Democrats would meet on Tuesday to discuss AI guardrails.
"We should take decisive action now so that we can slow down, as the CEOs have recently acknowledged, slow down the pace of development in order to protect the American people and ensure that AI is proceeding safely," he said.
Johnson, however, appeared to rule out that Congress would quickly act on any of those priorities or stay in session beyond next week during an appearance on CNN Sunday.
"If Congress just races in and does some sort of emergency session to try to regulate AI, we will lose the race to China, that is a threat to every single American," Johnson said. "We don't need everybody to panic right now, we need to handle this new technology like we have others in the past, and make sure we're doing everything we can responsibly to also not smother American innovation."
Johnson called for a meeting between leaders in Washington and the leaders of the AI industry to settle on a path forward, while also calling on the companies themselves to self-police.
"I'd do it tomorrow," he said. "I think we need to go in a big room, close the door and sort this out."
Gallego called for a similar summit.
"The way you figure this out is, again, you use this sense of urgency to get the smartest people in the room," he said. "But the way we're going about this is that we're hoping some committee in the House or Senate is just going to come together with some staffers and put together the framework that's going to go into place maybe three years from now. We don't have that time."
Gallego, however, said that Johnson, President Donald Trump and Congress are all "not meeting the moment." He also said the refrain that the U.S. will lose the AI race if it regulates the technology does not hold water.
"AI does not care once it becomes fully dangerous whether we're Chinese or American," he said. "That's the danger of this; everyone's thinking about this in a way that is based on old tech and not what's going toward the future."
Trump on Sunday pointed to China while appearing to critique a slowdown or regulation in AI development during brief remarks in Ireland.
"Well I say this, we're leading China on AI. We're the most sophisticated country in the world and frankly I want to keep it that way, because whoever wins AI wins," the president said, according to a pool report. "We can put guardrails, and we can do this and that, but I think you have a lot of negative forces that are bringing it up and they're bringing up things that won't happen."
While the House has introduced multiple proposals to put safeguards around AI, including the FRONTIER Act led by Reps. Jay Obernolte, R-Calif., and Lori Trahan, D-Mass., the Senate has been slower to coalesce around similar bipartisan proposals. A bill being worked on by Senate Majority Leader John Thune, R-S.D., and Sens. Amy Klobuchar, D-Minn., and Ted Cruz, R-Texas, has not yet been introduced.
Some in the AI industry are optimistic that Congress can do something before the midterm elections. An industry source familiar with the discussions in Washington said that legislation is likely to emerge in the coming week with "real momentum" behind it. The person noted that lawmakers on the ballot in November would like to point to an accomplishment on AI rather than stagnation.
— CNBC's Kate Rooney and Justin Papp contributed to this report.`,
    bodyJa: `Washington is scrambling to address renewed fears over artificial intelligence, as leading U.S. companies sound the alarm over technology they say is advancing beyond their control.
"Dr. Frankenstein is telling us the monster is escaping; help us stop this," said Sen. Ruben Gallego, D-Ariz., on CNN's "State of the Union" on Sunday. "The method that we're answering [with] is not meeting the moment."
The push for action on AI safeguards comes after a researcher resigned from Anthropic and warned that the technology could "kill us all by the end of the decade." Stunning pledges to slow development from the leaders of top AI frontier companies Anthropic, OpenAI and xAI followed the warning, and calls for lawmakers to act toward regulating the industry came soon after.
"Yesterday's commentary by AI industry leaders should be heeded as a bright flashing red light telling the President and Congress they need to act now to regulate and rein in AI development," Pennsylvania Gov. Josh Shapiro said in a post on X on Sunday. "This technology is powerful, with great potential to do good, and yet it comes with extraordinary risk. It's not clear where it will lead but this much is clear: its development should not be steered exclusively by private entities, especially when the CEOs of those companies are calling out for restraint and regulation."
The events have left Washington, which has done little to regulate AI since the technology emerged, with its back against the wall as the rapidly growing industry looks increasingly dangerous. Lawmakers now must grapple with how to rein in AI as an all-important midterm election looms and Congress prepares to leave town for another month to hit the campaign trail.
The episode sets up a test of whether lawmakers will respond to a crisis barreling toward them in a hyper-partisan Washington or head home to make their case for reelection with control of Washington on the line.
On Friday, a group of Democrats led by Rep. Sam Liccardo, D-Calif., wrote to House Speaker Mike Johnson, R-La., demanding to stay in session until it passes meaningful safeguards.
Johnson is scheduled to send the House home after this week until November's elections have passed.
"The House should return to Washington immediately and remain in session until Congress advances meaningful, bipartisan AI safeguards," the letter, obtained by CNBC, read. "To our children who will have read a post-apocalyptic history, 'Why Congress Slept' —likely written by agentic AI—our inaction will be inexplicable, and unforgivable."
The Democrats urged consideration of any number of proposals that have emerged in the House that "deserve consideration, public debate, thoughtful amendment, and action." That includes bills mandating transparency and evaluation of frontier models, "kill switch" requirements and a waiver of antitrust laws to allow the industry to work together on safety and security.
House Democratic Leader Hakeem Jeffries on Sunday said on ABC's "This Week" that Democrats would meet on Tuesday to discuss AI guardrails.
"We should take decisive action now so that we can slow down, as the CEOs have recently acknowledged, slow down the pace of development in order to protect the American people and ensure that AI is proceeding safely," he said.
Johnson, however, appeared to rule out that Congress would quickly act on any of those priorities or stay in session beyond next week during an appearance on CNN Sunday.
"If Congress just races in and does some sort of emergency session to try to regulate AI, we will lose the race to China, that is a threat to every single American," Johnson said. "We don't need everybody to panic right now, we need to handle this new technology like we have others in the past, and make sure we're doing everything we can responsibly to also not smother American innovation."
Johnson called for a meeting between leaders in Washington and the leaders of the AI industry to settle on a path forward, while also calling on the companies themselves to self-police.
"I'd do it tomorrow," he said. "I think we need to go in a big room, close the door and sort this out."
Gallego called for a similar summit.
"The way you figure this out is, again, you use this sense of urgency to get the smartest people in the room," he said. "But the way we're going about this is that we're hoping some committee in the House or Senate is just going to come together with some staffers and put together the framework that's going to go into place maybe three years from now. We don't have that time."
Gallego, however, said that Johnson, President Donald Trump and Congress are all "not meeting the moment." He also said the refrain that the U.S. will lose the AI race if it regulates the technology does not hold water.
"AI does not care once it becomes fully dangerous whether we're Chinese or American," he said. "That's the danger of this; everyone's thinking about this in a way that is based on old tech and not what's going toward the future."
Trump on Sunday pointed to China while appearing to critique a slowdown or regulation in AI development during brief remarks in Ireland.
"Well I say this, we're leading China on AI. We're the most sophisticated country in the world and frankly I want to keep it that way, because whoever wins AI wins," the president said, according to a pool report. "We can put guardrails, and we can do this and that, but I think you have a lot of negative forces that are bringing it up and they're bringing up things that won't happen."
While the House has introduced multiple proposals to put safeguards around AI, including the FRONTIER Act led by Reps. Jay Obernolte, R-Calif., and Lori Trahan, D-Mass., the Senate has been slower to coalesce around similar bipartisan proposals. A bill being worked on by Senate Majority Leader John Thune, R-S.D., and Sens. Amy Klobuchar, D-Minn., and Ted Cruz, R-Texas, has not yet been introduced.
Some in the AI industry are optimistic that Congress can do something before the midterm elections. An industry source familiar with the discussions in Washington said that legislation is likely to emerge in the coming week with "real momentum" behind it. The person noted that lawmakers on the ballot in November would like to point to an accomplishment on AI rather than stagnation.
— CNBC's Kate Rooney and Justin Papp contributed to this report.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/13/ai-congress-anthropic-openai-crisis.html",
    publishedAt: "2026-09-13T17:48:53+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "anthropic-s-amodei-says-china-presents-t-df6c4bfe",
    title: "Anthropic's Amodei says China presents 'toughest dilemma' for his proposed AI slowdown",
    titleJa: "Anthropic's Amodei says China presents 'toughest dilemma' for his proposed AI slowdown",
    summaryJa: "OpenAI CEO Sam Altman, Demis Hassabis, the chair of Google DeepMind, and Elon Musk have all welcomed Amodei's proposal.",
    bodyOriginal: `Anthropic CEO Dario Amodei said Sunday that the "toughest dilemma" about his proposal to slow the advancement of artificial intelligence is what happens if adversarial nations, namely China, choose not to do the same.
"The more long-term thing would be working together to put a speed limit on the rate of of AI progress," Amodei told CBS News' "Sunday Morning." "I think that's going to be very difficult because the incentives to pull ahead and the military advantage that you get from that are so large. And honestly, I don't know if it's possible, but we should we should try."
Amodei published an essay on Saturday urging AI companies to slow how quickly they improve their most advanced models, a move that followed stark warnings from industry researchers last week about the technology's growing potential to cause catastrophic harm. An Anthropic researcher, Jacob Coxon, announced he quit his job out of concern that the company, and its chief rival, OpenAI, are "gambling with our lives."
Amodei's essay landed during a pivotal time for the AI industry, which is facing public backlash over its data centers and mounting calls for regulation out of Washington. Anthropic and OpenAI are also gearing up for potentially historic IPOs, though neither company has set an official date for a debut. OpenAI CEO Sam Altman said Saturday that the company will likely not go public this year, in part because of concerns around safety.
"Right now would be an ill-advised moment to go public," Altman said in an interview with Fortune.
Altman's relationship with Amodei, who defected from OpenAI to start Anthropic, has been strained in recent years. But Altman expressed support for Amodei's essay in a post on X on Saturday, writing that he agrees on the need to "pace the frontier."
Several other industry leaders, including Demis Hassabis, the chair of Google DeepMind, and Elon Musk, CEO of both Tesla and SpaceX, also welcomed Amodei's proposal.
"Dario's essay points towards the right path forward," Hassabis wrote in a post on X on Saturday. "The details need working through, but the direction is correct for meeting this critical moment."
In the essay, Amodei proposed a three-step plan aimed at slowing the pace of development without "sacrificing commercial advantage or the United States' lead in AI."
Amodei said Anthropic has "unilaterally" committed to the first step of the plan, which grants third-party evaluators employee-level access to the company to verify safety practices and report incidents. The second step encourages leading AI companies within democratic countries to coordinate and establish common safety standards, and the third calls for coordination between democratic governments and authoritarian governments.
"Dario is right that there should be some oversight," Musk wrote in a post on X early Sunday morning. "Peer review of AI by competitors is the right way to start this off."
Musk, who has for years warned about the potential risks of AI, was quick to express support for Amodei on Saturday. He had been a major critic of Anthropic until his rocket company SpaceX, which acquired his AI startup xAI earlier this year, inked a major compute deal with the company in May. As part of the deal, Anthropic will pay SpaceX $1.25 billion per month through May 2029, according to filings.
"Everyone I met was highly competent and cared a great deal about doing the right thing," Musk wrote following the deal. "No one set off my evil detector."
Alexandr Wang, Meta's AI chief, who joined the company as part of a $14 billion investment in his startup, Scale AI last year, has yet to address Amodei's essay directly.
He shared a post on X on Saturday where he said Meta Superintelligence Labs, the company's AI research unit, is "rapidly scaling up the share of our efforts that goes into alignment as our models become more powerful." In the AI industry, alignment refers to the work by AI developers to ensure that the system behaves in accordance with human values and intentions.
"We do believe alignment can be the gating factor for scaling as we get closer to the frontier," Wang said.
David Sacks, a vocal critic of Anthropic who previously served as President Donald Trump's AI and crypto czar, also weighed in on Amodei's essay on Saturday. He wrote in a post on X that if OpenAI and Anthropic truly believe their models are "scary enough" to warrant a slowdown, he supports their "decision to be responsible."
Even so, he said both companies need to "stop pretending you need anyone else's permission," and encouraged them to acknowledge that their motivations are not purely altruistic. He said they face "massive product-liability exposure" if their products were to enable something like a damaging cyberattack, which means "it is simply good business for OpenAI and Anthropic to trade some raw power for reliability and predictability."
"So go ahead and pace the frontier," Sacks wrote. "You are the ones setting it. The easiest way not to build superintelligence is for you to agree not to build it. Demanding your preferred regulatory framework as the price of that will look like blackmail of the public and the political system. So just do it."
WATCH: Seems like Anthropic will beat OpenAI to IPO, says FirstMark’s Rick Heitzmann`,
    bodyJa: `Anthropic CEO Dario Amodei said Sunday that the "toughest dilemma" about his proposal to slow the advancement of artificial intelligence is what happens if adversarial nations, namely China, choose not to do the same.
"The more long-term thing would be working together to put a speed limit on the rate of of AI progress," Amodei told CBS News' "Sunday Morning." "I think that's going to be very difficult because the incentives to pull ahead and the military advantage that you get from that are so large. And honestly, I don't know if it's possible, but we should we should try."
Amodei published an essay on Saturday urging AI companies to slow how quickly they improve their most advanced models, a move that followed stark warnings from industry researchers last week about the technology's growing potential to cause catastrophic harm. An Anthropic researcher, Jacob Coxon, announced he quit his job out of concern that the company, and its chief rival, OpenAI, are "gambling with our lives."
Amodei's essay landed during a pivotal time for the AI industry, which is facing public backlash over its data centers and mounting calls for regulation out of Washington. Anthropic and OpenAI are also gearing up for potentially historic IPOs, though neither company has set an official date for a debut. OpenAI CEO Sam Altman said Saturday that the company will likely not go public this year, in part because of concerns around safety.
"Right now would be an ill-advised moment to go public," Altman said in an interview with Fortune.
Altman's relationship with Amodei, who defected from OpenAI to start Anthropic, has been strained in recent years. But Altman expressed support for Amodei's essay in a post on X on Saturday, writing that he agrees on the need to "pace the frontier."
Several other industry leaders, including Demis Hassabis, the chair of Google DeepMind, and Elon Musk, CEO of both Tesla and SpaceX, also welcomed Amodei's proposal.
"Dario's essay points towards the right path forward," Hassabis wrote in a post on X on Saturday. "The details need working through, but the direction is correct for meeting this critical moment."
In the essay, Amodei proposed a three-step plan aimed at slowing the pace of development without "sacrificing commercial advantage or the United States' lead in AI."
Amodei said Anthropic has "unilaterally" committed to the first step of the plan, which grants third-party evaluators employee-level access to the company to verify safety practices and report incidents. The second step encourages leading AI companies within democratic countries to coordinate and establish common safety standards, and the third calls for coordination between democratic governments and authoritarian governments.
"Dario is right that there should be some oversight," Musk wrote in a post on X early Sunday morning. "Peer review of AI by competitors is the right way to start this off."
Musk, who has for years warned about the potential risks of AI, was quick to express support for Amodei on Saturday. He had been a major critic of Anthropic until his rocket company SpaceX, which acquired his AI startup xAI earlier this year, inked a major compute deal with the company in May. As part of the deal, Anthropic will pay SpaceX $1.25 billion per month through May 2029, according to filings.
"Everyone I met was highly competent and cared a great deal about doing the right thing," Musk wrote following the deal. "No one set off my evil detector."
Alexandr Wang, Meta's AI chief, who joined the company as part of a $14 billion investment in his startup, Scale AI last year, has yet to address Amodei's essay directly.
He shared a post on X on Saturday where he said Meta Superintelligence Labs, the company's AI research unit, is "rapidly scaling up the share of our efforts that goes into alignment as our models become more powerful." In the AI industry, alignment refers to the work by AI developers to ensure that the system behaves in accordance with human values and intentions.
"We do believe alignment can be the gating factor for scaling as we get closer to the frontier," Wang said.
David Sacks, a vocal critic of Anthropic who previously served as President Donald Trump's AI and crypto czar, also weighed in on Amodei's essay on Saturday. He wrote in a post on X that if OpenAI and Anthropic truly believe their models are "scary enough" to warrant a slowdown, he supports their "decision to be responsible."
Even so, he said both companies need to "stop pretending you need anyone else's permission," and encouraged them to acknowledge that their motivations are not purely altruistic. He said they face "massive product-liability exposure" if their products were to enable something like a damaging cyberattack, which means "it is simply good business for OpenAI and Anthropic to trade some raw power for reliability and predictability."
"So go ahead and pace the frontier," Sacks wrote. "You are the ones setting it. The easiest way not to build superintelligence is for you to agree not to build it. Demanding your preferred regulatory framework as the price of that will look like blackmail of the public and the political system. So just do it."
WATCH: Seems like Anthropic will beat OpenAI to IPO, says FirstMark’s Rick Heitzmann`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/13/china-dilemma-ai-slowdown-anthropic.html",
    publishedAt: "2026-09-13T15:46:56+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "corporate-profit-forecasts-are-topping-e-7e6c59b0",
    title: "Corporate profit forecasts are topping expectations to an unusual degree. AI is a big reason why.",
    titleJa: "Corporate profit forecasts are topping expectations to an unusual degree. AI is a big reason why.",
    summaryJa: "The information-technology sector stands out when it comes to issuing upbeat earnings outlooks.",
    bodyOriginal: `The information-technology sector stands out when it comes to issuing upbeat earnings outlooks.`,
    bodyJa: `The information-technology sector stands out when it comes to issuing upbeat earnings outlooks.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/corporate-profit-forecasts-are-topping-expectations-to-an-unusual-degree-ai-is-a-big-reason-why-50245409?mod=mw_rss_topstories",
    publishedAt: "2026-09-13T14:00:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-38570314",
    readTime: 2,
  },
  {
    id: "vessel-struck-in-strait-of-hormuz-ukmto-bf737bb5",
    title: "Vessel struck in Strait of Hormuz, UKMTO says, as prospects for U.S.-Iran diplomacy appear elusive",
    titleJa: "Vessel struck in Strait of Hormuz, UKMTO says, as prospects for U.S.-Iran diplomacy appear elusive",
    summaryJa: "The latest strike happened ahead of an expected meeting between Iranian and Gulf officials in Oman to sign an agreement for shipping through the strait.",
    bodyOriginal: `A vessel was struck in the Strait of Hormuz, the United Kingdom Maritime Trade Operations Centre said Sunday, as direct negotiations between the U.S. and Iran appeared no nearer to resuming.
The British maritime security alert service said in a post on X that it received a report of the attack late on Saturday by an unknown projectile while the vessel was transiting the Strait.
A fire broke out onboard, and local authorities were on the scene helping to evacuate crew members, UKMTO said.
Meanwhile, a senior Iranian official dismissed hopes of fresh talks.
"No negotiations. Until Iran's terms are met, talks are futile," Ebrahim Azizi, head of the Iranian parliament's national security committee, said in a post on X.
But Iran has been reaching out to neighboring countries, despite months of striking them in retaliation for U.S. attacks.
A senior Iranian government official and Gulf diplomat told MS NOW that officials from Iran and Gulf countries would meet in Oman's capital, Muscat, on Monday to sign an agreement establishing an Iran-Oman shipping route through the Strait of Hormuz.
The official added that there are no current negotiations taking place with the U.S.
Speaking at the BRICS Summit in New Delhi on Friday, Iranian President Masoud Pezeshkian said his country will not surrender, adding that it has resisted aggression from the U.S. and Israel.
"Iran has successfully stood against Israel and the U.S.," Pezeshkian said.
"Since we are seeking truth and justice, we will not yield in front of bullying arrogance," he added.
Pezeshkian's comments over the weekend came on the heels of U.S. President Donald Trump's assertion that Iran would have wiped out Israel and the Middle East, and started hitting U.S. cities, if Washington had not taken military action against Iran.
"If I had it to do again, I would do exactly what I did," Trump said on Thursday.
Tit-for-tat attacks
There have been numerous tit-for-tat attacks on shipping in the Strait of Hormuz in recent weeks.
U.S. Central Command, or CENTCOM, said on Wednesday it destroyed 10 Iranian tankers the preceding week.
On Saturday, CENTCOM said that its forces have redirected 100 commercial vessels over the past 60 days since it resumed a naval blockade against Iran.
"ZERO ships have passed through the blockade without U.S. forces allowing," CENTCOM said in a post on X.
The war in Iran will likely end soon after November's midterm elections, Trump said Saturday. He also predicted that energy prices would fall sharply once that happens.
"I think very soon, I think it'll be right after the midterms, actually," Trump said on a trip to Ireland when asked by reporters when the Iran war is likely to end. "I would say shortly, and oil will come tumbling down when that happens."
Oil prices retreated on Friday, but notched sharp weekly gains after soaring above $100 a barrel for the first time in months over the continuing unrest in the Middle East.
Brent crude oil futures, the global benchmark, settled down 2.8% at $104.61 a barrel. U.S. West Texas Intermediate was down 2.4% to settle at $100.05 per barrel. On Thursday, Brent crude peaked at around $108 a barrel, while WTI hit more than $104.
Shipments of oil and other cargoes through the critical Strait of Hormuz separating Iran and Oman have slowed to a trickle since the U.S. and Israel began their war on Iran on Feb. 28, stranding ships and seafarers for weeks or months at a time.
Saudi Arabia has been relying on its East-West crude oil pipeline to bypass the Strait of Hormuz. But the kingdom said Friday that it shut the facility down as a precautionary measure after multiple attacks by drones launched from Iraq.
The drones targeted the pipeline in the Riyadh and Medina regions Thursday morning, causing fires and some damage, the Saudi government said. Several people were injured in the attacks, it said.`,
    bodyJa: `A vessel was struck in the Strait of Hormuz, the United Kingdom Maritime Trade Operations Centre said Sunday, as direct negotiations between the U.S. and Iran appeared no nearer to resuming.
The British maritime security alert service said in a post on X that it received a report of the attack late on Saturday by an unknown projectile while the vessel was transiting the Strait.
A fire broke out onboard, and local authorities were on the scene helping to evacuate crew members, UKMTO said.
Meanwhile, a senior Iranian official dismissed hopes of fresh talks.
"No negotiations. Until Iran's terms are met, talks are futile," Ebrahim Azizi, head of the Iranian parliament's national security committee, said in a post on X.
But Iran has been reaching out to neighboring countries, despite months of striking them in retaliation for U.S. attacks.
A senior Iranian government official and Gulf diplomat told MS NOW that officials from Iran and Gulf countries would meet in Oman's capital, Muscat, on Monday to sign an agreement establishing an Iran-Oman shipping route through the Strait of Hormuz.
The official added that there are no current negotiations taking place with the U.S.
Speaking at the BRICS Summit in New Delhi on Friday, Iranian President Masoud Pezeshkian said his country will not surrender, adding that it has resisted aggression from the U.S. and Israel.
"Iran has successfully stood against Israel and the U.S.," Pezeshkian said.
"Since we are seeking truth and justice, we will not yield in front of bullying arrogance," he added.
Pezeshkian's comments over the weekend came on the heels of U.S. President Donald Trump's assertion that Iran would have wiped out Israel and the Middle East, and started hitting U.S. cities, if Washington had not taken military action against Iran.
"If I had it to do again, I would do exactly what I did," Trump said on Thursday.
Tit-for-tat attacks
There have been numerous tit-for-tat attacks on shipping in the Strait of Hormuz in recent weeks.
U.S. Central Command, or CENTCOM, said on Wednesday it destroyed 10 Iranian tankers the preceding week.
On Saturday, CENTCOM said that its forces have redirected 100 commercial vessels over the past 60 days since it resumed a naval blockade against Iran.
"ZERO ships have passed through the blockade without U.S. forces allowing," CENTCOM said in a post on X.
The war in Iran will likely end soon after November's midterm elections, Trump said Saturday. He also predicted that energy prices would fall sharply once that happens.
"I think very soon, I think it'll be right after the midterms, actually," Trump said on a trip to Ireland when asked by reporters when the Iran war is likely to end. "I would say shortly, and oil will come tumbling down when that happens."
Oil prices retreated on Friday, but notched sharp weekly gains after soaring above $100 a barrel for the first time in months over the continuing unrest in the Middle East.
Brent crude oil futures, the global benchmark, settled down 2.8% at $104.61 a barrel. U.S. West Texas Intermediate was down 2.4% to settle at $100.05 per barrel. On Thursday, Brent crude peaked at around $108 a barrel, while WTI hit more than $104.
Shipments of oil and other cargoes through the critical Strait of Hormuz separating Iran and Oman have slowed to a trickle since the U.S. and Israel began their war on Iran on Feb. 28, stranding ships and seafarers for weeks or months at a time.
Saudi Arabia has been relying on its East-West crude oil pipeline to bypass the Strait of Hormuz. But the kingdom said Friday that it shut the facility down as a precautionary measure after multiple attacks by drones launched from Iraq.
The drones targeted the pipeline in the Riyadh and Medina regions Thursday morning, causing fires and some damage, the Saudi government said. Several people were injured in the attacks, it said.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/13/vessel-struck-strait-of-hormuz-ukmto.html",
    publishedAt: "2026-09-13T13:38:23+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "six-dead-130-missing-after-indonesian-fe-7000bb3c",
    title: "Six dead, 130 missing after Indonesian ferry capsizes in Java Sea",
    titleJa: "Six dead, 130 missing after Indonesian ferry capsizes in Java Sea",
    summaryJa: "Ships and helicopters are searching for those missing from the Virgo Transport 8 ship, which had encountered bad weather.",
    bodyOriginal: `Six dead, 130 missing after Indonesian ferry capsizes in Java Sea
- Published
Six people have died and 107 have been rescued from a capsized Indonesian passenger ferry in the Java Sea, authorities have said.
Another 130 people are still missing after contact was lost with the Virgo Transport8 ship, as it encountered bad weather.
The ferry was travelling from Surabaya to the South Kalimantan city of Banjarmasin and was last reported to be about 150km (93 miles) south of Banjarmasin around 02:00 on Sunday (18:00 GMT on Saturday).
Ships and a helicopter have been deployed to the scene, with 280 personnel taking part in a search and rescue operation. All vessels in the area of the Java Sea have been alerted to report any signs of passengers.
There were 213 passengers and 30 crew members on board the 390ft (119m) ferry.
The ship left Surabaya at 10:33 on Saturday and was scheduled to arrive in Banjarmasin on Sunday at 14:00, according to data from two maritime monitoring sites. Authorities received the initial distress report at 04:10.
A joint task force involving Indonesia's search and rescue agency, navy, maritime police and other parties has been set up for the rescue effort.
Rusmilawati, a resident of Banjarmasin, went to the port to seek information about eight relatives who were passengers on the ship. They were travelling back to Banjarmasin after visiting the tombs of several Islamic scholars in Java.
"They flew there initially, but for the return journey they wanted to try travelling by ship," she told BBC Indonesia.
As of Sunday afternoon local time, Rusmilawati said she had not received any information from officials about whether her relatives had been rescued.
The family last heard from one of the relatives through a WhatsApp status update. In the post, the relative wrote: "The waves are really frightening tonight. Or is this just what it's normally like travelling by ship, rocking and crashing against the waves?"
"Hopefully they're safe," Rusmilawati said.
Meanwhile, Misnah broke down in tears after learning that her husband, Ahmad Supandi, had survived.
Ahmad, a freight driver, had been aboard Virgo Transport 8 and was later rescued by the vessel MV Haida.
At Tanjung Perak Port in Surabaya, relatives of crew members have also been seeking information about their loved ones.
One relative, Fredy, said his youngest sibling, Stevie Manuhua, worked aboard the vessel as a keyboard player, entertaining passengers.
"We spoke two days ago when the ship was docked in Surabaya. After that, there was no news until now," Fredy said.
He said he had still not received any information about his sibling's whereabouts.
The Indonesian archipelago has more than 17,000 islands and ferries are a common form of transport.
But marine transport accidents are not uncommon. Government data show that 111 ship accidents were recorded between 2020 and 2026.
In July, KM Nurul Salsa sank in waters west of Polassi Island in Selayar Islands Regency, South Sulawesi. A total of 58 people survived, while three were found dead. The whereabouts of another 14 people remain unknown.
Last month, a separate ferry caught fire off Madura island, killing five.
Additional reporting by Donny Muslim
Related topics
- Published3 days ago
- Published5 days ago`,
    bodyJa: `Six dead, 130 missing after Indonesian ferry capsizes in Java Sea
- Published
Six people have died and 107 have been rescued from a capsized Indonesian passenger ferry in the Java Sea, authorities have said.
Another 130 people are still missing after contact was lost with the Virgo Transport8 ship, as it encountered bad weather.
The ferry was travelling from Surabaya to the South Kalimantan city of Banjarmasin and was last reported to be about 150km (93 miles) south of Banjarmasin around 02:00 on Sunday (18:00 GMT on Saturday).
Ships and a helicopter have been deployed to the scene, with 280 personnel taking part in a search and rescue operation. All vessels in the area of the Java Sea have been alerted to report any signs of passengers.
There were 213 passengers and 30 crew members on board the 390ft (119m) ferry.
The ship left Surabaya at 10:33 on Saturday and was scheduled to arrive in Banjarmasin on Sunday at 14:00, according to data from two maritime monitoring sites. Authorities received the initial distress report at 04:10.
A joint task force involving Indonesia's search and rescue agency, navy, maritime police and other parties has been set up for the rescue effort.
Rusmilawati, a resident of Banjarmasin, went to the port to seek information about eight relatives who were passengers on the ship. They were travelling back to Banjarmasin after visiting the tombs of several Islamic scholars in Java.
"They flew there initially, but for the return journey they wanted to try travelling by ship," she told BBC Indonesia.
As of Sunday afternoon local time, Rusmilawati said she had not received any information from officials about whether her relatives had been rescued.
The family last heard from one of the relatives through a WhatsApp status update. In the post, the relative wrote: "The waves are really frightening tonight. Or is this just what it's normally like travelling by ship, rocking and crashing against the waves?"
"Hopefully they're safe," Rusmilawati said.
Meanwhile, Misnah broke down in tears after learning that her husband, Ahmad Supandi, had survived.
Ahmad, a freight driver, had been aboard Virgo Transport 8 and was later rescued by the vessel MV Haida.
At Tanjung Perak Port in Surabaya, relatives of crew members have also been seeking information about their loved ones.
One relative, Fredy, said his youngest sibling, Stevie Manuhua, worked aboard the vessel as a keyboard player, entertaining passengers.
"We spoke two days ago when the ship was docked in Surabaya. After that, there was no news until now," Fredy said.
He said he had still not received any information about his sibling's whereabouts.
The Indonesian archipelago has more than 17,000 islands and ferries are a common form of transport.
But marine transport accidents are not uncommon. Government data show that 111 ship accidents were recorded between 2020 and 2026.
In July, KM Nurul Salsa sank in waters west of Polassi Island in Selayar Islands Regency, South Sulawesi. A total of 58 people survived, while three were found dead. The whereabouts of another 14 people remain unknown.
Last month, a separate ferry caught fire off Madura island, killing five.
Additional reporting by Donny Muslim
Related topics
- Published3 days ago
- Published5 days ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cvgykzgljlyo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-13T13:30:38+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/77d4/live/bb287020-af75-11f1-a540-61c3f7fc4e6c.jpg",
    readTime: 8,
  },
  {
    id: "the-price-of-almost-everything-on-your-d-54edd052",
    title: "The price of almost everything on your dinner table is climbing at once — and Wall Street is taking notice",
    titleJa: "The price of almost everything on your dinner table is climbing at once — and Wall Street is taking notice",
    summaryJa: "Rising crop prices are making the current inflation problem bigger than just oil and the Iran war.",
    bodyOriginal: `Rising crop prices are making the current inflation problem bigger than just oil and the Iran war.`,
    bodyJa: `Rising crop prices are making the current inflation problem bigger than just oil and the Iran war.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/the-price-of-almost-everything-on-your-dinner-table-is-climbing-at-once-and-wall-street-is-taking-notice-9623d1fc?mod=mw_rss_topstories",
    publishedAt: "2026-09-13T13:00:00+00:00",
    category: "エネルギー",
    imageUrl: "https://images.mktw.net/im-17698476",
    readTime: 2,
  },
  {
    id: "nfl-and-midterm-elections-set-up-predict-ee42c326",
    title: "NFL and midterm elections set up prediction markets for a critical fall season",
    titleJa: "NFL and midterm elections set up prediction markets for a critical fall season",
    summaryJa: "The 2025 football season and 2024 presidential election pushed prediction markets into the prominence they enjoy today.",
    bodyOriginal: `Prediction markets that rode politics and sports to new heights the past two years are betting on their convergence this autumn to drive even more adoption.
In 2024, event contract exchanges entered the mainstream with trades tied to the presidential election that year. Then, in September 2025, the start of the NFL season a year ago marked the beginning of a surge in prediction market trading volume that has yet to slow down.
Prediction markets began another NFL season on Wednesday night, when the New England Patriots and Seattle Seahawks dueled it out in a rematch of the 2026 Super Bowl. Labor Day also marked what political observers always consider the start of the midterm election campaign season.
This year, prediction markets enter the fall bigger than they've ever been, with daily notional trading volume now consistently in the billions, two dominant incumbents and a host of smaller exchanges chasing them to take some share of the market. And now the two events that separately brought prediction markets mainstream, are happening together over just a few months.
"You have a bit of a supercycle occurring right now within the prediction markets," said Robinhood's general manager for futures and prediction markets, JB Mackenzie.
Other events are in the wings this season, too, with traders showing greater interest in economic contracts linked to where a hard-to-read Federal Reserve may take interest rates next week, and Major League Baseball playoffs in full swing in October.
Prediction platforms have rushed to prepare for the fall's events. That will continue so long as the markets continue to get the majority of their volume from sports offerings, said Seni Thomas, CEO at EDGE Markets, a financial technology company working in sports betting and prediction markets.
This season could prove crucial, especially for newer platforms. "This NFL cycle is the real key, make or break" for many newer companies, Thomas said.
Veteran players
On Tuesday, Polymarket debuted an advertisement featuring basketball icon LeBron James, former New York Giants quarterback Eli Manning and former Yankee Derek Jeter as part of a football season marketing campaign. It also unveiled a new product for its U.S. exchange which allows users to talk, share and trade together on the platform.
Kalshi experienced a record $2.3 billion in volume traded on Saturday, the first day of college football, and unveiled a feature for speculators who participated in 2025 NFL season markets to track how they performed before this season's kickoff. It has also expanded partnerships with individual sports teams ahead of the MLB playoff season.
Both platforms suffered glitches as college football play began. Polymarket's U.S. platform was down much of Saturday, and any account that experienced losses due to the outage was eventually refunded. Kalshi prematurely resolved a market on the University of Michigan game, paying traders as if the underdog Western Michigan had pulled off an upset. Later, Kalshi corrected the Michigan result and paid out accordingly.
The platforms are leaning into sports, even while battling in court with states across the country that say sports-related event contracts amount to gambling and should fall under their regulatory purview rather than the Commodity Futures Trading Commission, a Wall Street watchdog.
"We operate pursuant to the regulations of the CFTC, and we'll continue to do so, and continue to work with stakeholders to run a safe and trusted product," said Ari Borod, president of sports business development at Polymarket in August before announcing a partnership with the New York Yankees.
New entrants
While the two largest prediction market platforms seek to build on their previous NFL success, others are also trying to capitalize on the same sporting events.
Rothera, a prediction market platform developed in a joint venture between Susquehanna International Group and Robinhood, is one of them. It saw volumes boom after going online in time for the FIFA World Cup over the summer.
"Rolling out all these sports, that's a big lift," CEO Thomas Chippas said. "We've only been live since the last week of May ... We're going as fast as we can, as prudently we can."
Novig, a platform that only lists sports event contracts, started an NFL marketing campaign on Wednesday with an ad featuring actress Sydney Sweeney, one of the first celebrities to work with a smaller exchange.
ProphetX, which launched in June focusing on sports-related event contracts, also has worked to get ready for the fall by revamping its consumer platform and focusing on boosting liquidity during the NFL season.
"Our revenue doubled from June to August," ProphetX co-founder and CEO Dean Sisun said in an interview. "I would love to see it four to 5x by the end of the year on a run rate basis … I really think we can do that."
Midterm opportunity
While ProphetX features sports event contracts, Sisun said the platform is planning to launch midterm election-related markets too.
Robinhood is featuring Rothera's elections-related contracts to users on its brokerage.
In the lead-up to November, Kalshi has launched several tools, such as a midterm elections hub in July, giving users data about political races all across the country. For election night, it's working on an in-person event, as well as contemplating the best way for traders and viewers to see how odds across races are changing as results pour in, Kalshi's head of politics growth Benjamin Freeman said.
Unlike in 2024, when election-related event contracts weren't legal in the U.S. until a month before the presidential vote, "there's a much longer runway to plan" in 2026, said Benjamin Freeman, head of politics growth at Kalshi.
The midterms also give platforms an opportunity to remind the public that they're more than just sports, even as the majority of trading volume continues to come from those contests.
"This week it's probably going to be a lot more about NFL," Mackenzie of Robinhood said, "but I think that's what's interesting about prediction markets. It evolves based upon what people want to be trading and what's in the news cycle."
Disclosure: CNBC and Kalshi have a commercial relationship that includes customer acquisition and a minority investment.`,
    bodyJa: `Prediction markets that rode politics and sports to new heights the past two years are betting on their convergence this autumn to drive even more adoption.
In 2024, event contract exchanges entered the mainstream with trades tied to the presidential election that year. Then, in September 2025, the start of the NFL season a year ago marked the beginning of a surge in prediction market trading volume that has yet to slow down.
Prediction markets began another NFL season on Wednesday night, when the New England Patriots and Seattle Seahawks dueled it out in a rematch of the 2026 Super Bowl. Labor Day also marked what political observers always consider the start of the midterm election campaign season.
This year, prediction markets enter the fall bigger than they've ever been, with daily notional trading volume now consistently in the billions, two dominant incumbents and a host of smaller exchanges chasing them to take some share of the market. And now the two events that separately brought prediction markets mainstream, are happening together over just a few months.
"You have a bit of a supercycle occurring right now within the prediction markets," said Robinhood's general manager for futures and prediction markets, JB Mackenzie.
Other events are in the wings this season, too, with traders showing greater interest in economic contracts linked to where a hard-to-read Federal Reserve may take interest rates next week, and Major League Baseball playoffs in full swing in October.
Prediction platforms have rushed to prepare for the fall's events. That will continue so long as the markets continue to get the majority of their volume from sports offerings, said Seni Thomas, CEO at EDGE Markets, a financial technology company working in sports betting and prediction markets.
This season could prove crucial, especially for newer platforms. "This NFL cycle is the real key, make or break" for many newer companies, Thomas said.
Veteran players
On Tuesday, Polymarket debuted an advertisement featuring basketball icon LeBron James, former New York Giants quarterback Eli Manning and former Yankee Derek Jeter as part of a football season marketing campaign. It also unveiled a new product for its U.S. exchange which allows users to talk, share and trade together on the platform.
Kalshi experienced a record $2.3 billion in volume traded on Saturday, the first day of college football, and unveiled a feature for speculators who participated in 2025 NFL season markets to track how they performed before this season's kickoff. It has also expanded partnerships with individual sports teams ahead of the MLB playoff season.
Both platforms suffered glitches as college football play began. Polymarket's U.S. platform was down much of Saturday, and any account that experienced losses due to the outage was eventually refunded. Kalshi prematurely resolved a market on the University of Michigan game, paying traders as if the underdog Western Michigan had pulled off an upset. Later, Kalshi corrected the Michigan result and paid out accordingly.
The platforms are leaning into sports, even while battling in court with states across the country that say sports-related event contracts amount to gambling and should fall under their regulatory purview rather than the Commodity Futures Trading Commission, a Wall Street watchdog.
"We operate pursuant to the regulations of the CFTC, and we'll continue to do so, and continue to work with stakeholders to run a safe and trusted product," said Ari Borod, president of sports business development at Polymarket in August before announcing a partnership with the New York Yankees.
New entrants
While the two largest prediction market platforms seek to build on their previous NFL success, others are also trying to capitalize on the same sporting events.
Rothera, a prediction market platform developed in a joint venture between Susquehanna International Group and Robinhood, is one of them. It saw volumes boom after going online in time for the FIFA World Cup over the summer.
"Rolling out all these sports, that's a big lift," CEO Thomas Chippas said. "We've only been live since the last week of May ... We're going as fast as we can, as prudently we can."
Novig, a platform that only lists sports event contracts, started an NFL marketing campaign on Wednesday with an ad featuring actress Sydney Sweeney, one of the first celebrities to work with a smaller exchange.
ProphetX, which launched in June focusing on sports-related event contracts, also has worked to get ready for the fall by revamping its consumer platform and focusing on boosting liquidity during the NFL season.
"Our revenue doubled from June to August," ProphetX co-founder and CEO Dean Sisun said in an interview. "I would love to see it four to 5x by the end of the year on a run rate basis … I really think we can do that."
Midterm opportunity
While ProphetX features sports event contracts, Sisun said the platform is planning to launch midterm election-related markets too.
Robinhood is featuring Rothera's elections-related contracts to users on its brokerage.
In the lead-up to November, Kalshi has launched several tools, such as a midterm elections hub in July, giving users data about political races all across the country. For election night, it's working on an in-person event, as well as contemplating the best way for traders and viewers to see how odds across races are changing as results pour in, Kalshi's head of politics growth Benjamin Freeman said.
Unlike in 2024, when election-related event contracts weren't legal in the U.S. until a month before the presidential vote, "there's a much longer runway to plan" in 2026, said Benjamin Freeman, head of politics growth at Kalshi.
The midterms also give platforms an opportunity to remind the public that they're more than just sports, even as the majority of trading volume continues to come from those contests.
"This week it's probably going to be a lot more about NFL," Mackenzie of Robinhood said, "but I think that's what's interesting about prediction markets. It evolves based upon what people want to be trading and what's in the news cycle."
Disclosure: CNBC and Kalshi have a commercial relationship that includes customer acquisition and a minority investment.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/13/nfl-and-midterms-mark-key-fall-season-for-prediction-markets.html",
    publishedAt: "2026-09-13T11:52:33+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "iran-war-reshapes-brics-ties-but-also-ex-e5488e99",
    title: "Iran war reshapes Brics ties but also exposes divisons",
    titleJa: "Iran war reshapes Brics ties but also exposes divisons",
    summaryJa: "Brics members agree they need a new global order but it's harder to answer what should replace it and how to get there.",
    bodyOriginal: `Iran war reshapes Brics ties but also exposes divisons
- Published
This weekend, some of the most powerful people in the world gathered in Delhi around a vast circular table.
Indian Prime Minister Narendra Modi announced that together, the leaders next to him should increasingly become "rule-shapers", not "rule-takers".
Among those listening were members of the Brics group, including Chinese President Xi Jinping, Russian President Vladimir Putin, Iran's President Masoud Pezeshkian, Abu Dhabi's Crown Prince Sheikh Khaled bin Mohamed bin Zayed Al Nahyan and South African President Cyril Ramaphosa.
These are hardly natural allies. They have histories of border disputes and even military confrontations.
India and China engaged in a deadly clash along their disputed border in 2020. Iran and the UAE have been on opposing ends of the war in the Middle East, with Tehran launching missiles and drones at its fellow Brics member as the conflict sent shockwaves across global economies.
The fact that India was able to gather these leaders together in person is a feat in and of itself and testament to its diplomatic reach. The weekend also provided a platform for countries to reassess their relationships in light of the Iran war.
But agreeing on what a new global order should look like and achieving clear, tangible outcomes was a much harder task, and that tension ran through this weekend's summit.
A counterweight to Western influence
For members such as China, Russia and Iran, Brics offers a vehicle to dilute the influence of the US and western Europe.
But India has been reluctant to cast Brics as an anti-Western bloc. Modi himself said at the summit that the group is "not against anyone".
That distinction matters for Delhi, which wants to preserve its relationships with nations at odds with each other.
"There are countries in the grouping which would like it to become anti-western, but it is not that," says Anil Trigunayat, a veteran Indian diplomat and former ambassador. What India has achieved, in his view, is a push for "strategic autonomy in an era of war" and initiatives to "enhance greater collaboration amongst themselves".
Inside the joint declaration
The summit succeeded in delivering a joint declaration when divisions among members have rarely been so glaring.
Twice earlier this year, meetings between Brics ministers had failed to produce a joint statement. This time a consensus was reached, but by side-stepping issues that members sharply disagree on, with few solutions.
The "New Delhi Declaration" was adopted on the first day of the summit. But what is striking is what it doesn't say.
On the war in the Middle East, the declaration urges "maximum restraint". It also condemns "attacks on civilian infrastructure and peaceful nuclear facilities" but assigns no blame.
It reiterates support for a two-state solution, opposes forced displacement of Palestinians or actions that could "legitimise or prolong occupation", framing it carefully around existing UN resolutions.
It makes no mention at all of Russia's war in Ukraine, a departure from previous Brics declarations.
There is similar caution on trade. It lists concerns over "indiscriminate rising tariffs" and condemns unilateral sanctions but stops short of naming the US, and is likely to avoid Washington's ire.
Several Brics members would have been loath to draw President Donald Trump's anger, as he has previously called the group's proposals, including potentially linking central-bank digital currencies for cross-border trade, "anti-American".
"Not mentioning any country by name, even as they condemned the conflict in the Middle East, bears the hallmark of India," says Praveen Donthi, senior analyst at the International Crisis Group.
"I was pleasantly surprised that there was a strong reference to tariffs, because India could have wanted to be less direct about it, but perhaps this was a chance to convey their displeasure," he added.
Beyond the summit
In the wake of Trump's trade threats and the shock of the war in the Middle East, reshaping the global order has become a vital need for many member economies.
What the summit did provide is a platform for meetings that seemed hard to imagine just a few months ago.
Iran's Pezeshkian and Abu Dhabi's Crown Prince sat down for talks together - the highest-level face-to-face meeting known between the two countries since the war began.
This weekend offered Tehran a chance to show that it does not stand alone amid the US and Israel's military attacks and economic pressure.
As Iran tries to withstand US sanctions, Washington's "Operation Economic Outcast" and a naval blockade on its ports, Pezeshkian pressed for deeper economic ties with Brics members, including Malaysia, India and Ethiopia.
As for China, this was President Xi's first visit to Delhi in seven years. There has been deep mistrust between China and India since the 2020 border dispute, but those tensions have eased. There is also a large trade imbalance, with a deficit tilting heavily in China's favour.
There was a cordial handshake between Xi and Modi, not the latter's signature hug. Xi also stayed for less than 24 hours, skipping the gala dinner hosted by Modi on Saturday night.
But the weekend was still a big moment for two countries with such a difficult relationship. According to official readouts, the two leaders agreed to strengthen business ties and transport links and address barriers to trade.
Trigunayat believes this is part of a gradual warming of relations in recent years, and that there is a will on both sides to work together. But whether it will produce substantial progress remains to be seen.
"I always say we have to trust, but verify first," he says.
What comes next?
The summit showed that Brics can create space for rivals to talk and manoeuvre outside Western-dominated institutions.
The harder question is what happens next. It's clear that members agree they need a new global order more than ever, but what exactly should replace it and how to get there is far more challenging to answer.
Additional reporting by Charlotte Scarr`,
    bodyJa: `Iran war reshapes Brics ties but also exposes divisons
- Published
This weekend, some of the most powerful people in the world gathered in Delhi around a vast circular table.
Indian Prime Minister Narendra Modi announced that together, the leaders next to him should increasingly become "rule-shapers", not "rule-takers".
Among those listening were members of the Brics group, including Chinese President Xi Jinping, Russian President Vladimir Putin, Iran's President Masoud Pezeshkian, Abu Dhabi's Crown Prince Sheikh Khaled bin Mohamed bin Zayed Al Nahyan and South African President Cyril Ramaphosa.
These are hardly natural allies. They have histories of border disputes and even military confrontations.
India and China engaged in a deadly clash along their disputed border in 2020. Iran and the UAE have been on opposing ends of the war in the Middle East, with Tehran launching missiles and drones at its fellow Brics member as the conflict sent shockwaves across global economies.
The fact that India was able to gather these leaders together in person is a feat in and of itself and testament to its diplomatic reach. The weekend also provided a platform for countries to reassess their relationships in light of the Iran war.
But agreeing on what a new global order should look like and achieving clear, tangible outcomes was a much harder task, and that tension ran through this weekend's summit.
A counterweight to Western influence
For members such as China, Russia and Iran, Brics offers a vehicle to dilute the influence of the US and western Europe.
But India has been reluctant to cast Brics as an anti-Western bloc. Modi himself said at the summit that the group is "not against anyone".
That distinction matters for Delhi, which wants to preserve its relationships with nations at odds with each other.
"There are countries in the grouping which would like it to become anti-western, but it is not that," says Anil Trigunayat, a veteran Indian diplomat and former ambassador. What India has achieved, in his view, is a push for "strategic autonomy in an era of war" and initiatives to "enhance greater collaboration amongst themselves".
Inside the joint declaration
The summit succeeded in delivering a joint declaration when divisions among members have rarely been so glaring.
Twice earlier this year, meetings between Brics ministers had failed to produce a joint statement. This time a consensus was reached, but by side-stepping issues that members sharply disagree on, with few solutions.
The "New Delhi Declaration" was adopted on the first day of the summit. But what is striking is what it doesn't say.
On the war in the Middle East, the declaration urges "maximum restraint". It also condemns "attacks on civilian infrastructure and peaceful nuclear facilities" but assigns no blame.
It reiterates support for a two-state solution, opposes forced displacement of Palestinians or actions that could "legitimise or prolong occupation", framing it carefully around existing UN resolutions.
It makes no mention at all of Russia's war in Ukraine, a departure from previous Brics declarations.
There is similar caution on trade. It lists concerns over "indiscriminate rising tariffs" and condemns unilateral sanctions but stops short of naming the US, and is likely to avoid Washington's ire.
Several Brics members would have been loath to draw President Donald Trump's anger, as he has previously called the group's proposals, including potentially linking central-bank digital currencies for cross-border trade, "anti-American".
"Not mentioning any country by name, even as they condemned the conflict in the Middle East, bears the hallmark of India," says Praveen Donthi, senior analyst at the International Crisis Group.
"I was pleasantly surprised that there was a strong reference to tariffs, because India could have wanted to be less direct about it, but perhaps this was a chance to convey their displeasure," he added.
Beyond the summit
In the wake of Trump's trade threats and the shock of the war in the Middle East, reshaping the global order has become a vital need for many member economies.
What the summit did provide is a platform for meetings that seemed hard to imagine just a few months ago.
Iran's Pezeshkian and Abu Dhabi's Crown Prince sat down for talks together - the highest-level face-to-face meeting known between the two countries since the war began.
This weekend offered Tehran a chance to show that it does not stand alone amid the US and Israel's military attacks and economic pressure.
As Iran tries to withstand US sanctions, Washington's "Operation Economic Outcast" and a naval blockade on its ports, Pezeshkian pressed for deeper economic ties with Brics members, including Malaysia, India and Ethiopia.
As for China, this was President Xi's first visit to Delhi in seven years. There has been deep mistrust between China and India since the 2020 border dispute, but those tensions have eased. There is also a large trade imbalance, with a deficit tilting heavily in China's favour.
There was a cordial handshake between Xi and Modi, not the latter's signature hug. Xi also stayed for less than 24 hours, skipping the gala dinner hosted by Modi on Saturday night.
But the weekend was still a big moment for two countries with such a difficult relationship. According to official readouts, the two leaders agreed to strengthen business ties and transport links and address barriers to trade.
Trigunayat believes this is part of a gradual warming of relations in recent years, and that there is a will on both sides to work together. But whether it will produce substantial progress remains to be seen.
"I always say we have to trust, but verify first," he says.
What comes next?
The summit showed that Brics can create space for rivals to talk and manoeuvre outside Western-dominated institutions.
The harder question is what happens next. It's clear that members agree they need a new global order more than ever, but what exactly should replace it and how to get there is far more challenging to answer.
Additional reporting by Charlotte Scarr`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/ce8767g4jdpo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-13T11:23:42+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/60f4/live/46af4990-af60-11f1-8b54-ef4b26bcf610.jpg",
    readTime: 10,
  },
  {
    id: "xi-says-china-will-take-lead-to-foster-a-dd213ae7",
    title: "Xi says China will take lead to foster AI, tech cooperation among BRICS countries",
    titleJa: "Xi says China will take lead to foster AI, tech cooperation among BRICS countries",
    summaryJa: "China will take the lead to help foster artificial-intelligence collaboration and development among developing-economy countries, President Xi Jinping said.",
    bodyOriginal: `China will take the lead to help foster artificial-intelligence collaboration and development among developing countries, President Xi Jinping said at the BRICS bloc summit in New Delhi.
China will pioneer the establishment of a BRICS AI open-source community, support the cooperation in developing and applying large language models, hold AI seminars and training courses, and build an open AI ecosystem, Xi said in a statement on Sunday released by the Ministry of Foreign Affairs.
The country will also work to establish a BRICS digital ecosystem cloud platform, and conduct digital skills training, technological exchange and industrial alignment, Xi said. He also proposed setup of a BRICS engineer cultivation alliance and a youth exchange program for scientific and technological innovation.
XI's proposals come as the AI sector booms, with companies releasing ever-more-powerful models at a frenetic pace. AI itself has come under scrutiny too, with one researcher who worked at both OpenAI and Anthropic this week saying that many people working in the industry believe AI might kill all of humanity by the end of the decade. Xi didn't address the ongoing debate about AI safety.
BRICS was established in 2009 as a counterweight to Western dominance and originally comprised Brazil, Russia, India, China and South Africa. It eventually grew to include Egypt, Ethiopia, Indonesia, Iran and the United Arab Emirates.`,
    bodyJa: `China will take the lead to help foster artificial-intelligence collaboration and development among developing countries, President Xi Jinping said at the BRICS bloc summit in New Delhi.
China will pioneer the establishment of a BRICS AI open-source community, support the cooperation in developing and applying large language models, hold AI seminars and training courses, and build an open AI ecosystem, Xi said in a statement on Sunday released by the Ministry of Foreign Affairs.
The country will also work to establish a BRICS digital ecosystem cloud platform, and conduct digital skills training, technological exchange and industrial alignment, Xi said. He also proposed setup of a BRICS engineer cultivation alliance and a youth exchange program for scientific and technological innovation.
XI's proposals come as the AI sector booms, with companies releasing ever-more-powerful models at a frenetic pace. AI itself has come under scrutiny too, with one researcher who worked at both OpenAI and Anthropic this week saying that many people working in the industry believe AI might kill all of humanity by the end of the decade. Xi didn't address the ongoing debate about AI safety.
BRICS was established in 2009 as a counterweight to Western dominance and originally comprised Brazil, Russia, India, China and South Africa. It eventually grew to include Egypt, Ethiopia, Indonesia, Iran and the United Arab Emirates.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/13/china-xi-ai-tech-brics.html",
    publishedAt: "2026-09-13T11:17:12+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "ai-staff-genuinely-frightened-for-humani-7dbc65d0",
    title: "AI staff 'genuinely frightened' for humanity's future, ex-Anthropic researcher tells BBC",
    titleJa: "AI staff 'genuinely frightened' for humanity's future, ex-Anthropic researcher tells BBC",
    summaryJa: "It comes as the AI firm's boss has called for the technology's development to be slowed down, citing \"serious\" risks.",
    bodyOriginal: `AI staff 'genuinely frightened' for humanity's future, ex-Anthropic researcher tells BBC
- Published
An artificial intelligence researcher who quit AI firm Anthropic has said people working on the technology were "genuinely frightened" about the speed of its advancements and what it could mean for humanity.
"I believe that if we don't slow down at the current rate of progress, there is a strong chance that we could all die in the immediate future," he said.
Jacob Coxon was speaking to the BBC after his resignation post on the dangers of AI went viral on a backdrop of growing safety concerns about the industry.
The 27-year-old's former boss, Anthropic head Dario Amodei, recently called for AI development to slow down - though some have questioned the motivations behind this.
The bosses of two rival AI firms, Sam Altman of OpenAI and Elon Musk of xAI, have both said they agree with Amodei's proposal for industry-wide deceleration and regulation, as well as independent monitoring of AI model development.
Amodei wrote in an essay on Saturday that developing the technology was not in question, but the risks associated with it were "serious", and that companies and governments must be given time to address them.
Coxon – who worked at OpenAI before joining Anthropic – welcomed the suggestion of a slowdown but said it would need to be co-ordinated with China to avoid "a race at an international scale".
"The people who work at these companies are completely serious when they ask for regulation because they find themselves trapped in a race. And they're scared of the outcomes of that race," he told Sunday with Laura Kuenssberg.
Anthropic boss Dario Amodei calls for AI development to slow down
- Published14 hours ago
The hardest question to answer, according to Coxon, was what an AI apocalypse would look like.
One of the risks outlined in Amodei's comments was of a swarm of bots acting like a supercomputer that could take over the internet.
Coxon said this scenario could be realistic in six months to a year.
In response to Coxon's departure, an Anthropic spokesperson told BBC News: "We have always been transparent that AI will bring both enormous benefits and unprecedented risks.
"To address these risks, we continue to build models with some of the strongest safeguards in the industry."
The firm has been a pioneer in studying how AI models work, the spokesperson added. It was the first to publish a framework for mitigating the risks posed by their development - and it also "aggressively" tests its models and publishes the findings to aid scrutiny and prevent incidents of "AI misalignment".
"This work is also why we believe the world would benefit from the industry adopting a lawful, verifiable way to work together to pace how we release powerful models," they said.
Coxon said his peers feared the danger could even arrive in the next two years.
He said staff at AI firms were "planning what to do with their lives and thinking about the impacts of their work", while some were "considering buying land somewhere because they're so scared of the instability as a result of rapid AI progress".
"They all keep this in their head on a daily basis while working on the technology."
But Coxon did have some optimism about the future of AI, telling the BBC that the people researching the technology "genuinely want to see the upside" of things like "solving diseases and improving everyone's lives".
Many others in the industry have also voiced their concerns since Coxon's social media post, including Anthropic scientist Evan Hubinger.
"We really do earnestly believe AI could kill all humans! I personally think it is >10% within the next decade," Hubinger said.
Computer scientist and Nobel Prize winner Geoffrey Hinton, known as the "Godfather of AI", told the BBC on Friday that a 10% chance of AI killing all humans was "not unreasonable", external.
Meanwhile, Marc Warner, chief executive of AI safety firm Faculty, told the BBC that it was "extremely hard to place a probability" on AI killing all humans.
"But it's important to recognise that these people are very sincere in what they're saying," he added, noting that the risks surrounding AI have been raised by the heads of several AI firms for years.
Former Prime Minister Rishi Sunak, who is a paid adviser to Anthropic, wrote in the Sunday Times, external that he too was worried about the risk of AI to humanity despite generally being optimistic.
Dramatic insider warnings over AI fall flat with some in Silicon Valley
- Published2 hours ago
However, some industry figures have suggested comments about the perils and power of AI may be designed to generate hype.
Chief executive of the AI platform Hugging Face, Clement Delangue, said on social media: "Sorry, but asking Jacob [Coxon] about AI extinction risk is like asking your AC guy about climate change. Not saying it's necessarily uninteresting or wrong per se but let's keep things in perspective."
After Amodei's essay was published, however, Delangue offered to help be a part of the potential solutions the Anthropic boss proposed.
Meanwhile, Nvidia boss Jensen Huang also discussed Coxon's comments at a conference hosted by the investment bank Goldman Sachs last week, multiple people in the group told the BBC. They said he dismissed them as untrue.
Huang has previously said the notion that AI was "going to be the end of humanity" was "complete nonsense".
And while he may have a business interest in an AI boom - Nvidia builds chips that power AI systems - his comments reflect a growing backlash in Silicon Valley to the existential warnings from current and former staffers.
Other critics say Anthropic has been trying to trigger a regulatory push to block competition, leaving it and OpenAI in a duopoly.
Anthropic is reportedly preparing for a potentially record-setting initial public offering on the stock market, allowing people to buy shares in its firm.
OpenAI, which was most recently valued at $852bn (£630bn), had been expected to do the same, but OpenAI's Altman said on Friday this would not happen this year, citing safety concerns.
Related topics
- Published1 day ago
- Published3 days ago`,
    bodyJa: `AI staff 'genuinely frightened' for humanity's future, ex-Anthropic researcher tells BBC
- Published
An artificial intelligence researcher who quit AI firm Anthropic has said people working on the technology were "genuinely frightened" about the speed of its advancements and what it could mean for humanity.
"I believe that if we don't slow down at the current rate of progress, there is a strong chance that we could all die in the immediate future," he said.
Jacob Coxon was speaking to the BBC after his resignation post on the dangers of AI went viral on a backdrop of growing safety concerns about the industry.
The 27-year-old's former boss, Anthropic head Dario Amodei, recently called for AI development to slow down - though some have questioned the motivations behind this.
The bosses of two rival AI firms, Sam Altman of OpenAI and Elon Musk of xAI, have both said they agree with Amodei's proposal for industry-wide deceleration and regulation, as well as independent monitoring of AI model development.
Amodei wrote in an essay on Saturday that developing the technology was not in question, but the risks associated with it were "serious", and that companies and governments must be given time to address them.
Coxon – who worked at OpenAI before joining Anthropic – welcomed the suggestion of a slowdown but said it would need to be co-ordinated with China to avoid "a race at an international scale".
"The people who work at these companies are completely serious when they ask for regulation because they find themselves trapped in a race. And they're scared of the outcomes of that race," he told Sunday with Laura Kuenssberg.
Anthropic boss Dario Amodei calls for AI development to slow down
- Published14 hours ago
The hardest question to answer, according to Coxon, was what an AI apocalypse would look like.
One of the risks outlined in Amodei's comments was of a swarm of bots acting like a supercomputer that could take over the internet.
Coxon said this scenario could be realistic in six months to a year.
In response to Coxon's departure, an Anthropic spokesperson told BBC News: "We have always been transparent that AI will bring both enormous benefits and unprecedented risks.
"To address these risks, we continue to build models with some of the strongest safeguards in the industry."
The firm has been a pioneer in studying how AI models work, the spokesperson added. It was the first to publish a framework for mitigating the risks posed by their development - and it also "aggressively" tests its models and publishes the findings to aid scrutiny and prevent incidents of "AI misalignment".
"This work is also why we believe the world would benefit from the industry adopting a lawful, verifiable way to work together to pace how we release powerful models," they said.
Coxon said his peers feared the danger could even arrive in the next two years.
He said staff at AI firms were "planning what to do with their lives and thinking about the impacts of their work", while some were "considering buying land somewhere because they're so scared of the instability as a result of rapid AI progress".
"They all keep this in their head on a daily basis while working on the technology."
But Coxon did have some optimism about the future of AI, telling the BBC that the people researching the technology "genuinely want to see the upside" of things like "solving diseases and improving everyone's lives".
Many others in the industry have also voiced their concerns since Coxon's social media post, including Anthropic scientist Evan Hubinger.
"We really do earnestly believe AI could kill all humans! I personally think it is >10% within the next decade," Hubinger said.
Computer scientist and Nobel Prize winner Geoffrey Hinton, known as the "Godfather of AI", told the BBC on Friday that a 10% chance of AI killing all humans was "not unreasonable", external.
Meanwhile, Marc Warner, chief executive of AI safety firm Faculty, told the BBC that it was "extremely hard to place a probability" on AI killing all humans.
"But it's important to recognise that these people are very sincere in what they're saying," he added, noting that the risks surrounding AI have been raised by the heads of several AI firms for years.
Former Prime Minister Rishi Sunak, who is a paid adviser to Anthropic, wrote in the Sunday Times, external that he too was worried about the risk of AI to humanity despite generally being optimistic.
Dramatic insider warnings over AI fall flat with some in Silicon Valley
- Published2 hours ago
However, some industry figures have suggested comments about the perils and power of AI may be designed to generate hype.
Chief executive of the AI platform Hugging Face, Clement Delangue, said on social media: "Sorry, but asking Jacob [Coxon] about AI extinction risk is like asking your AC guy about climate change. Not saying it's necessarily uninteresting or wrong per se but let's keep things in perspective."
After Amodei's essay was published, however, Delangue offered to help be a part of the potential solutions the Anthropic boss proposed.
Meanwhile, Nvidia boss Jensen Huang also discussed Coxon's comments at a conference hosted by the investment bank Goldman Sachs last week, multiple people in the group told the BBC. They said he dismissed them as untrue.
Huang has previously said the notion that AI was "going to be the end of humanity" was "complete nonsense".
And while he may have a business interest in an AI boom - Nvidia builds chips that power AI systems - his comments reflect a growing backlash in Silicon Valley to the existential warnings from current and former staffers.
Other critics say Anthropic has been trying to trigger a regulatory push to block competition, leaving it and OpenAI in a duopoly.
Anthropic is reportedly preparing for a potentially record-setting initial public offering on the stock market, allowing people to buy shares in its firm.
OpenAI, which was most recently valued at $852bn (£630bn), had been expected to do the same, but OpenAI's Altman said on Friday this would not happen this year, citing safety concerns.
Related topics
- Published1 day ago
- Published3 days ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c1kx0gyje9wo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-13T11:13:07+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/09f1/live/aaa670e0-af38-11f1-a540-61c3f7fc4e6c.jpg",
    readTime: 10,
  },
  {
    id: "china-s-xi-urges-brics-nations-to-work-t-4b80e071",
    title: "China's Xi urges BRICS nations to work towards peace in the Middle East",
    titleJa: "China's Xi urges BRICS nations to work towards peace in the Middle East",
    summaryJa: "China, Iran's biggest trading partner and a key customer of Tehran's energy exports, is willing to work with BRICS towards peace in the region, Xi said.",
    bodyOriginal: `The BRICS bloc should work towards a peaceful resolution to the conflict in the Middle East, Chinese President Xi Jinping said, adding that his country is willing to play a key role.
"The situation in the Middle East and the Gulf region continues to evolve in a complex manner. This conflict has caused severe losses to the people of the region and is not in the common interest of the international community," Xi said in a speech at the BRICS Summit in New Delhi on Saturday.
"All relevant parties should adhere to the direction of a political solution and promote a permanent and comprehensive ceasefire. We must attach importance to addressing the root causes of the problems," Xi said in a Google translation of a transcript of the speech provided by the Chinese government.
Xi added that the Palestinian question has always been at the core of the Middle East issue and stressed the importance of implementing the so-called "two-state solution" with Israel.
"China is willing to work with BRICS members to play its due role in achieving peace and tranquility in the Middle East and the Gulf region," Xi said.
China is Iran's biggest trading partner, and a key customer of Tehran's energy exports.
The Trump administration imposed a tough new wave of economic sanctions against Iran last month. The Treasury Department's measures, dubbed "Operation Economic Outcast", aim to sever Iran's financial connections around the world.
Treasury Scott Bessent suggested at the launch of the operation that China would not be exempt.
While energy prices soared in the wake of the conflict, economists say China has helped prevent them rise even further due to years of stockpiling and its subsequent pullback of oil purchases.
President Donald Trump is slated to host Chinese leader Xi Jinping at the White House later this month.
BRICS was established in 2009 as a counterweight to Western dominance and originally comprised Brazil, Russia, India, China and South Africa. It eventually grew to include Egypt, Ethiopia, Indonesia, Iran and the United Arab Emirates.`,
    bodyJa: `The BRICS bloc should work towards a peaceful resolution to the conflict in the Middle East, Chinese President Xi Jinping said, adding that his country is willing to play a key role.
"The situation in the Middle East and the Gulf region continues to evolve in a complex manner. This conflict has caused severe losses to the people of the region and is not in the common interest of the international community," Xi said in a speech at the BRICS Summit in New Delhi on Saturday.
"All relevant parties should adhere to the direction of a political solution and promote a permanent and comprehensive ceasefire. We must attach importance to addressing the root causes of the problems," Xi said in a Google translation of a transcript of the speech provided by the Chinese government.
Xi added that the Palestinian question has always been at the core of the Middle East issue and stressed the importance of implementing the so-called "two-state solution" with Israel.
"China is willing to work with BRICS members to play its due role in achieving peace and tranquility in the Middle East and the Gulf region," Xi said.
China is Iran's biggest trading partner, and a key customer of Tehran's energy exports.
The Trump administration imposed a tough new wave of economic sanctions against Iran last month. The Treasury Department's measures, dubbed "Operation Economic Outcast", aim to sever Iran's financial connections around the world.
Treasury Scott Bessent suggested at the launch of the operation that China would not be exempt.
While energy prices soared in the wake of the conflict, economists say China has helped prevent them rise even further due to years of stockpiling and its subsequent pullback of oil purchases.
President Donald Trump is slated to host Chinese leader Xi Jinping at the White House later this month.
BRICS was established in 2009 as a counterweight to Western dominance and originally comprised Brazil, Russia, India, China and South Africa. It eventually grew to include Egypt, Ethiopia, Indonesia, Iran and the United Arab Emirates.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/13/chinas-xi-urges-brics-peace-middle-east.html",
    publishedAt: "2026-09-13T09:41:53+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 5,
  },
  {
    id: "dramatic-insider-warnings-over-ai-fall-f-6fe0b9f0",
    title: "Dramatic insider warnings over AI fall flat with some in Silicon Valley",
    titleJa: "Dramatic insider warnings over AI fall flat with some in Silicon Valley",
    summaryJa: "A recent spate of stark warnings about the dangers of AI has been met with scepticism by executives and investors.",
    bodyOriginal: `Dramatic insider warnings over AI fall flat with some in Silicon Valley
- Published
Each September, a who's who of executives from across Silicon Valley descends on San Francisco's Palace Hotel to charm investors at a conference hosted by the investment bank Goldman Sachs.
This past week, between talk of growth and potential returns, tech titans found themselves addressing the abrupt resignation of Anthropic researcher Jacob Coxon.
Coxon, a 27-year-old who worked at OpenAI before joining its chief rival Anthropic, said on Tuesday that people building artificial intelligence (AI) believed the technology could destroy humanity.
They are "gambling with our lives", he said, "these will soon be superhuman systems that can hack anything".
Coxon is by no means the first AI insider to publicly sound the alarm. There have been a string of high-profile resignations from both Anthropic and OpenAI in recent years over apparent safety concerns, and some current Anthropic employees even echoed Coxon's post.
"We really do earnestly believe AI could kill all humans! I personally think it is >10% within the next decade," a team lead at Anthropic, Evan Hubinger, posted on X.
While Coxon said explicitly in his posts that his warnings were "not marketing", some executives and investors in Silicon Valley have reacted with scepticism to a recent flurry of insiders sounding the alarm.
Anthropic and OpenAI are reportedly preparing for potentially record-setting initial public offerings, and some in the tech sector have suggested the latest stark comments about the dangers of AI may be designed to generate hype by signalling the power of these products.
Anthropic's boss, Dario Amodei, has come under fire for saying AI technology could wipe out half of entry-level white-collar jobs and will "test who we are as a species".
One conference speaker, Grindr CEO George Arison, told the BBC he believed this week's comments from Coxon and others were indicative of an "anti-civilisational worldview at Anthropic".
He called them "dangerous" and said they had prompted him to instruct some engineers at the LGBTQ+ dating app to stop using Anthropic's technology.
"It is irresponsible for us as stewards of our shareholders' money to be relying on a business that does what this company does, in terms of its public statements," he said.
"Maybe they actually believe it," Arison said. "Or you could argue they're saying it because it's a great way to gin up more investor support, because the only way to justify these valuations is to actually claim: 'I'm going to take over every industry and I'm going to take over every job, and my AI is going to be doing all that work.'"
Anthropic was valued at $965bn (£713bn) in its most recent fundraising round earlier this year.
The BBC has asked Anthropic for a response to the statements.
In an essay posted early on Saturday, Amodei called for a slowing of AI model development and global regulation - and said the risks associated with AI were "serious".
Anthropic boss Dario Amodei calls for AI development to slow down
- Published14 hours ago
Why some experts increasingly fear AI will take over
- Published3 days ago
Nvidia boss Jensen Huang also discussed Coxon's comments before a crowd at the conference, multiple people in the group told the BBC. They said he dismissed them as untrue.
Huang has previously said the notion that AI "is going to be the end of humanity" is "complete nonsense".
And while he may have a business interest in an AI boom - Nvidia builds chips that power AI systems - his comments reflect a growing backlash in Silicon Valley to the existential warnings from current and former staffers.
Some critics have even accused Anthropic of fearmongering in hopes that it will trigger a regulatory push that could shut out competition and leave it and OpenAI with a duopoly in the sector.
Brad Gerstner, who is the head of the investment firm Altimeter Capital, posted pictures of Huang from the conference and accused Coxon of "ridiculous hyperbole".
On Friday, the CEO of the AI platform Hugging Face, Clement Delangue, weighed in. Hugging Face, which Nvidia announced it would acquire last week, was hacked by OpenAI agents earlier this year prompting an outcry over AI safety.
"Sorry, but asking Jacob about AI extinction risk is like asking your AC guy about climate change," he wrote on X. "Not saying it's necessarily uninteresting or wrong per se but let's keep things in perspective."
Both Gerstner and Delangue were more circumspect on Saturday after Amodei's proposal was posted, with Gerstner calling the idea "an important step forward" in balancing competing considerations like speed and safety.
Delangue offered to help be a part of the potential solutions proposed by Amodei.
Could insider warnings prompt a crackdown?
In April, Anthropic roiled the AI world when it said it found that its Mythos tool could outperform humans at some hacking and cybersecurity tasks.
Mythos also showed the ability to independently escape what is known as the sandbox environment, setting off a debate among regulators, legislators and businesses about AI's potential dangers.
In a new development on Thursday, Anthropic said it had found and stopped threat actors who were trying to use its AI technology for activity including the development of bioweapons and cyber-espionage.
Beneath the sparkling chandeliers hanging in the stained-glass dome atrium of The Palace Hotel, some investors told the BBC that the comments from Coxon and others could accelerate a government crackdown.
Federal legislation co-sponsored this month by left-wing Senator Bernie Sanders of Vermont, known as the Ban Artificial Superintelligence Act, would impose a temporary pause in advanced AI development.
"There is a good chance that human beings will lose control over AI," Sanders told the BBC's Newsnight programme on Thursday. "And what happens then, nobody knows. But could it be catastrophic? Yes, it could."
"When scientists tell you there is a chance that it could have a cataclysmic impact on humanity, you've got be a moron not to say, slow it down," he added.
If an industry-wide government crackdown comes, however, it is likely to be led by legislators and not the Trump administration which largely supports a policy of unfettered AI development. It has framed this as necessary to ensure the US does not cede dominance to China.
Speaking to reporters this week, President Donald Trump was asked if he had any concerns about AI leading to human extinction. "No, I don't have any," he said. "I have concerns that if we don't win AI, we're going to be put in a very bad position. We are leading China right now."
But the president's relationship with Anthropic has been turbulent. After the company refused to allow the US military to use its AI models, the White House described it as "a radical left, woke company" and designated it a supply chain risk, a move that a federal judge has ruled was illegal.
David Sacks, Trump's AI czar in the early days of his administration, has also levelled repeated attacks at Anthropic.
OpenAI has not endured the same level of scrutiny from the White House. When releasing a new model called Astra last week, OpenAI President Greg Brockman described his firm's relationship with the Trump administration as "a very good partnership".
The company did not respond to a BBC inquiry seeking comment.
At the conference in San Francisco this week, the pursuit of fortunes seemed to mostly trump any mounting existential concerns or fears over potential government restrictions on AI.
OpenAI, which was most recently valued at $852bn, has previously announced plans to allow people to buy shares in its firm by listing on the stock market.
However, its chief executive Sam Altman said on Friday this would not happen this year, calling it an "ill-advised moment" to do so "given everything happening with safety" in an interview with Fortune magazine.
He suggested 2027 would be more likely.
Meanwhile, one investor said he was looking forward to Anthropic's forthcoming S-1, a document a company must file with securities regulators in order to sell shares.
His main question about the company was simple: is the firm profitable?
When asked on Thursday if he fears the world may be coming to an end, Sid Sheth - CEO of the chip company d-Matrix which inked a deal with Nvidia at the conference that day - did not mince his words.
"No," he said.
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.
Related topics
- Published2 days ago
- Published17 April`,
    bodyJa: `Dramatic insider warnings over AI fall flat with some in Silicon Valley
- Published
Each September, a who's who of executives from across Silicon Valley descends on San Francisco's Palace Hotel to charm investors at a conference hosted by the investment bank Goldman Sachs.
This past week, between talk of growth and potential returns, tech titans found themselves addressing the abrupt resignation of Anthropic researcher Jacob Coxon.
Coxon, a 27-year-old who worked at OpenAI before joining its chief rival Anthropic, said on Tuesday that people building artificial intelligence (AI) believed the technology could destroy humanity.
They are "gambling with our lives", he said, "these will soon be superhuman systems that can hack anything".
Coxon is by no means the first AI insider to publicly sound the alarm. There have been a string of high-profile resignations from both Anthropic and OpenAI in recent years over apparent safety concerns, and some current Anthropic employees even echoed Coxon's post.
"We really do earnestly believe AI could kill all humans! I personally think it is >10% within the next decade," a team lead at Anthropic, Evan Hubinger, posted on X.
While Coxon said explicitly in his posts that his warnings were "not marketing", some executives and investors in Silicon Valley have reacted with scepticism to a recent flurry of insiders sounding the alarm.
Anthropic and OpenAI are reportedly preparing for potentially record-setting initial public offerings, and some in the tech sector have suggested the latest stark comments about the dangers of AI may be designed to generate hype by signalling the power of these products.
Anthropic's boss, Dario Amodei, has come under fire for saying AI technology could wipe out half of entry-level white-collar jobs and will "test who we are as a species".
One conference speaker, Grindr CEO George Arison, told the BBC he believed this week's comments from Coxon and others were indicative of an "anti-civilisational worldview at Anthropic".
He called them "dangerous" and said they had prompted him to instruct some engineers at the LGBTQ+ dating app to stop using Anthropic's technology.
"It is irresponsible for us as stewards of our shareholders' money to be relying on a business that does what this company does, in terms of its public statements," he said.
"Maybe they actually believe it," Arison said. "Or you could argue they're saying it because it's a great way to gin up more investor support, because the only way to justify these valuations is to actually claim: 'I'm going to take over every industry and I'm going to take over every job, and my AI is going to be doing all that work.'"
Anthropic was valued at $965bn (£713bn) in its most recent fundraising round earlier this year.
The BBC has asked Anthropic for a response to the statements.
In an essay posted early on Saturday, Amodei called for a slowing of AI model development and global regulation - and said the risks associated with AI were "serious".
Anthropic boss Dario Amodei calls for AI development to slow down
- Published14 hours ago
Why some experts increasingly fear AI will take over
- Published3 days ago
Nvidia boss Jensen Huang also discussed Coxon's comments before a crowd at the conference, multiple people in the group told the BBC. They said he dismissed them as untrue.
Huang has previously said the notion that AI "is going to be the end of humanity" is "complete nonsense".
And while he may have a business interest in an AI boom - Nvidia builds chips that power AI systems - his comments reflect a growing backlash in Silicon Valley to the existential warnings from current and former staffers.
Some critics have even accused Anthropic of fearmongering in hopes that it will trigger a regulatory push that could shut out competition and leave it and OpenAI with a duopoly in the sector.
Brad Gerstner, who is the head of the investment firm Altimeter Capital, posted pictures of Huang from the conference and accused Coxon of "ridiculous hyperbole".
On Friday, the CEO of the AI platform Hugging Face, Clement Delangue, weighed in. Hugging Face, which Nvidia announced it would acquire last week, was hacked by OpenAI agents earlier this year prompting an outcry over AI safety.
"Sorry, but asking Jacob about AI extinction risk is like asking your AC guy about climate change," he wrote on X. "Not saying it's necessarily uninteresting or wrong per se but let's keep things in perspective."
Both Gerstner and Delangue were more circumspect on Saturday after Amodei's proposal was posted, with Gerstner calling the idea "an important step forward" in balancing competing considerations like speed and safety.
Delangue offered to help be a part of the potential solutions proposed by Amodei.
Could insider warnings prompt a crackdown?
In April, Anthropic roiled the AI world when it said it found that its Mythos tool could outperform humans at some hacking and cybersecurity tasks.
Mythos also showed the ability to independently escape what is known as the sandbox environment, setting off a debate among regulators, legislators and businesses about AI's potential dangers.
In a new development on Thursday, Anthropic said it had found and stopped threat actors who were trying to use its AI technology for activity including the development of bioweapons and cyber-espionage.
Beneath the sparkling chandeliers hanging in the stained-glass dome atrium of The Palace Hotel, some investors told the BBC that the comments from Coxon and others could accelerate a government crackdown.
Federal legislation co-sponsored this month by left-wing Senator Bernie Sanders of Vermont, known as the Ban Artificial Superintelligence Act, would impose a temporary pause in advanced AI development.
"There is a good chance that human beings will lose control over AI," Sanders told the BBC's Newsnight programme on Thursday. "And what happens then, nobody knows. But could it be catastrophic? Yes, it could."
"When scientists tell you there is a chance that it could have a cataclysmic impact on humanity, you've got be a moron not to say, slow it down," he added.
If an industry-wide government crackdown comes, however, it is likely to be led by legislators and not the Trump administration which largely supports a policy of unfettered AI development. It has framed this as necessary to ensure the US does not cede dominance to China.
Speaking to reporters this week, President Donald Trump was asked if he had any concerns about AI leading to human extinction. "No, I don't have any," he said. "I have concerns that if we don't win AI, we're going to be put in a very bad position. We are leading China right now."
But the president's relationship with Anthropic has been turbulent. After the company refused to allow the US military to use its AI models, the White House described it as "a radical left, woke company" and designated it a supply chain risk, a move that a federal judge has ruled was illegal.
David Sacks, Trump's AI czar in the early days of his administration, has also levelled repeated attacks at Anthropic.
OpenAI has not endured the same level of scrutiny from the White House. When releasing a new model called Astra last week, OpenAI President Greg Brockman described his firm's relationship with the Trump administration as "a very good partnership".
The company did not respond to a BBC inquiry seeking comment.
At the conference in San Francisco this week, the pursuit of fortunes seemed to mostly trump any mounting existential concerns or fears over potential government restrictions on AI.
OpenAI, which was most recently valued at $852bn, has previously announced plans to allow people to buy shares in its firm by listing on the stock market.
However, its chief executive Sam Altman said on Friday this would not happen this year, calling it an "ill-advised moment" to do so "given everything happening with safety" in an interview with Fortune magazine.
He suggested 2027 would be more likely.
Meanwhile, one investor said he was looking forward to Anthropic's forthcoming S-1, a document a company must file with securities regulators in order to sell shares.
His main question about the company was simple: is the firm profitable?
When asked on Thursday if he fears the world may be coming to an end, Sid Sheth - CEO of the chip company d-Matrix which inked a deal with Nvidia at the conference that day - did not mince his words.
"No," he said.
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.
Related topics
- Published2 days ago
- Published17 April`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cq635037g18o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-13T09:05:10+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/203a/live/5d11e480-ae26-11f1-a540-61c3f7fc4e6c.jpg",
    readTime: 10,
  },
  {
    id: "they-lost-their-jobs-after-posting-about-5f1f7b15",
    title: "They lost their jobs after posting about Charlie Kirk, but some have no regrets",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `They lost their jobs after posting about Charlie Kirk, but some have no regrets
- Published
In September 2025, Gerald Bourguet felt he was finally living his dream life: he and his wife had bought a house with a pool, they had just welcomed a baby boy, and he was writing about professional men's basketball as his full-time job.
But all of that changed after he made a series of online posts critical of the late conservative activist Charlie Kirk hours after he was fatally shot on 10 September, while speaking on the campus of Utah Valley University.
In the posts, Bourguet described Kirk as an "evil man" and suggested he had dedicated his life to hateful causes. He also criticised Kirk's supporters saying they had not been vocal about school shootings.
"I had seen the way that people were talking about this person - kind of eulogising him and lionising him and it bothered me based on a lot of the things that he had said," Bourguet told the BBC.
Kirk, who founded Christian youth organisation Turning Point USA, was a divisive figure in US politics. For many on the political right, he was charismatic and had a unique skill in making conservative ideas appeal to young people. But for his opponents, his comments on a large swathe of issues from race to immigration, gun control and gender identity were deeply offensive.
Screenshots of Bourguet's critical posts went viral quickly. He was fired from his job, his address was exposed online, and he began receiving threatening text messages, he said. Concerned for their safety, the family fled the state with their four-month-old. They returned months later to sell the house and permanently relocated.
A year later, he says he doesn't regret what he said, but acknowledged: "My life will never be the same after this".
"At age 35, I am having to start over in a lot of respects… I wouldn't wish this on my worst enemy," Bourguet said from his new location, which the BBC agreed not to disclose.
PHNX Sports, Bourguet's former employer, did not respond to the BBC's request for comment.
Bourguet was one of hundreds fired or disciplined over critical comments of Kirk after his death. While some of those who have lost their jobs have been reinstated or received restitution - sometimes in the millions - others like Bourguet have had to rebuild from scratch.
'Call their employer'
In the aftermath of Kirk's assassination, most people kept their feelings to themselves, or shared them with close friends.
But on polarised social media, people rushed to laude, or denounce, the controversial activist. Some called the criticisms, posted hours after his death, tasteless. But others called for swift action, arguing they were callous, mocking, and could even incite further violence.
Laura Loomer, an influential right-wing commentator with nearly 2 million followers on X, warned Kirk's critics to "prepare to have your whole future professional aspirations ruined".
The push for punishment also came from the highest levels of US government.
"When you see someone celebrating Charlie's murder, call them out," Vice-President JD Vance said days after the assassination. "And hell, call their employer," he added.
White House spokesperson Davis Ingle told the BBC: "Anyone who engages in or endorses political violence or assassination culture must be condemned in the harshest terms possible."
Critics on the left said there was a difference between criticism of Kirk and celebrating his death. Some accused these conservative leaders of hypocrisy, as many had previously bemoaned the rise of "cancel culture" – where people who voice controversial opinions face severe consequences at work and socially.
"Cancel culture can be good, it's bad when it's applied in the wrong ways," Jordan Pace, a Republican member of the South Carolina House of Representatives, told the BBC. "If you are someone who celebrates political assassinations and the murder of an innocent man with two young children in a way that many people did, then yeah, that's an appropriate way for society to function, to shame those people."
Pace had previously called for defunding universities in his state if they didn't take actions against employees who made comments about Kirk. One of his posts was re-shared by US President Donald Trump.
Across the nation, some employers – private and public – acted swiftly to the pressure campaign. Reliable figures on the number of people fired or disciplined are hard to come by, but a Reuters tally last November found more than 600 instances. It is likely an under-count because not all cases received national or local press attention.
The specific actions that led to these disciplinary decisions run the gamut. In Tennessee, anthropology professor Tamar Shirinian was suspended and later fired for a Facebook comment saying "the world is better off" without Kirk.
A Delta Air Lines flight attendant was fired after posting "good riddance" in response to Kirk's killing. Office Depot supply store fired an employee for refusing to serve a customer who had wanted to print flyers for a Kirk vigil. Delta Air Lines declined to comment. Office Depot did not respond to a request for comment.
Others were disciplined even if they did not make any direct comments about Kirk or his death. Darren Michael, a theatre professor in Tennessee, was fired after he posted a screenshot of a news article from 2023, that covered Kirk's controversial speech on gun control. In the article, Kirk is quoted saying protecting citizens' rights to own guns was worth it even if it led to some gun deaths every year.
Florida's Fish and Wildlife Conservation Commission fired biologist Brittney Brown after she reposted a meme that also satirised Kirk's position on gun violence in light of his own shooting.
"I was absolutely gutted," Brown said about her firing to the BBC. "It was like the entire world just completely flipped on its head in a moment."
Lawsuits have yielded big pay outs for those fired
In the year since Kirk's killing, dozens of lawsuits have been filed across the country by people fired for their comments about the activist, arguing their terminations violated their rights to free speech. The suits have led to substantial pay outs in some cases.
Brown agreed to a $485,000 (£355,000) financial settlement – about 12 times Brown's annual salary.
Darren Michael was reinstated by the Austin Peay State University and in January, the school agreed to pay him $500,000 to settle legal claims. The school did not respond to a request for comment.
In the largest settlement reviewed by the BBC, the University of Tennessee agreed to pay $1.9m to resolve a lawsuit brought by anthropologist Tamar Shirinian, over her "better off" comment. As part of the settlement, she will not be reinstated and has agreed not to reapply for future positions at the school.
Recently, an arbitrator ordered The Washington Post to rehire, with back pay, opinion journalist Karen Attiah, who was fired for her online posts that said in part she was not going to engage in "performative mourning for a white man that espoused violence".
Several other lawsuits remain pending, the BBC found.
Most of the legal actions have been pursued by employees of government institutions, or unionised workers, who have some free-speech protections.
But in the US, most private sector employees work under "at-will" contracts, which means they can be can be fired without reason.
Even those who have scored some victories don't see it as a win.
"All I wanted was my job back," biologist Brown said. "How much taxpayer money did they waste on this when I barely made $40,000 a year? So no, it does not feel like justice."
Shirinian told the BBC she too had wanted to return to her job but felt a legal case could be a lengthy affair.
"I took a settlement because this allows me to move on with my life," she told the BBC. "The one small regret that I have is that I will not see my day in court and justice will not be served in that way. But I think that the number of the settlement actually speaks to that anyway."
The University of Tennessee and Florida's Fish and Wildlife Conservation Commission did not respond to the BBC's request for comment.
'I don't regret what I said'
As an at-will employee at a private company, Bourguet is unlikely to prevail in a lawsuit challenging his dismissal. A year on, he said he has struggled to find work. The new state he lives in has a professional basketball team, but he believes the ordeal has made him unemployable in the small world of sports writers. Instead, he's started his own podcast, although he doubts he can earn enough through it to pay the bills.
"I have accepted that that life is over and that I need to start a new one." Leaving the country is now on the table, he said.
Despite the huge personal and professional costs, those who spoke to the BBC said after months of reflection, they did not regret their actions.
"I have a right to say what I want to say," Brown said. "They are the ones who should have the regrets, not me," she said referring to her former employer.
Shirinian apologised to the university days after her suspension. She told the BBC her comment was "an emotional outburst" that was not intended to be public and that she regretted the tone used.
"I don't regret the sentiment, however" she said, adding "the sentiment was that I am not sad. And I refuse to be made to feel like I have to be sad that someone who was so hateful was killed".
Bourguet also said he does not regret his comments although he has conflicting thoughts about its consequences.
"I don't regret that line of thinking because I think it's important to push back on things that are steeped in hatred," he said, referring to Kirk's political message.
"I don't regret what I said. I don't regret the way that I said it. I do regret the ripple effects that came from it and the way that they impacted me, my career, my family, and my son."
Related topics
- Published13 September 2025`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.
Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.
Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cj06jgl9qzlo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-13T00:49:08+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/1233/live/5647ef90-aeb3-11f1-ae38-d350b022f499.png",
    readTime: 2,
  },
  {
    id: "why-openai-s-sam-altman-says-an-ipo-isn-32393b84",
    title: "Why OpenAI’s Sam Altman says an IPO isn’t in the cards this year",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Concerns about AI safety have ramped up, and OpenAI’s CEO says now would be an ‘ill-advised’ time for the ChatGPT creator to go public`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/why-openais-sam-altman-says-an-ipo-isnt-in-the-cards-this-year-229de89c?mod=mw_rss_topstories",
    publishedAt: "2026-09-12T21:50:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-59292817",
    readTime: 2,
  },
  {
    id: "trump-s-comments-on-a-united-ireland-may-a0bd5c46",
    title: "Trump's comments on a united Ireland may have targeted audience across the Atlantic",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Trump's comments on a united Ireland may have targeted audience across the Atlantic
- Published
When another world leader meets US President Donald Trump the only certainty about what might happen is the uncertainty about what might happen.
This was exactly the case ahead of President Trump's two-day visit to Ireland.
Nobody could have predicted that by the end of the first day, the main global headline would be his desire to see a unified Ireland.
As the shockwaves of his remarks rippled through this island and Great Britain, it was unclear whether this represented a new US administration policy, or an off-the-cuff remark from a president who likes to take questions from reporters, and likes to give answers.
Former Republican Congressman Mick Mulvaney was Trump's special envoy to Northern Ireland in his first term in office.
He cautioned against anyone reading too much into the president's remarks.
"This does not represent a shift in US foreign policy," he said.
"We're still very much committed to the Good Friday Agreement."
Democratic Congressman Brendan Boyle agreed.
"There is bipartisan support for that deal, and that is not going to change."
Although both agreed that Donald Trump was probably right to say that "eventually" unification would happen, that did not mean the US was about to start pushing for it.
Giving an answer to a question that is asked at a free-flowing press conference is one thing, but Donald Trump repeated his sentiments a short time later when he was delivering a speech to an invited audience at the US Ambassador's residence.
In fact it was almost the first thing he mentioned, hinting that maybe he realised he had kicked over a can of worms at his earlier appearance.
The rest of that speech was curious. It was billed as a 20-minute address to Irish and Irish American business leaders, but was about twice that and strayed largely into domestic US matters.
President Trump has a speaking style that he describes himself as "the weave".
He can bounce from topic to topic during any speaking engagement, veering off the script and then returning to the matter at hand.
Today he lauded his own achievements, as he sees them, such as clamping down on illegal immigration, doing deals and boosting defence production.
He repeated his criticisms once again of what he views as the UK's lack of support for his military operation in Iran.
Midterm elections fast approaching
But who was his target audience? The gathered business leaders in Dublin or a US audience tuning in before it was even dawn in much of that country?
This November's crunch midterm elections are fast approaching and the Republican party is under intense pressure because of the president's policies.
They may lose control of one or both houses of Congress.
About one tenth of the US population claim Irish heritage but they are not a homogeneous voting bloc.
Was he trying to target Irish-American independent or swing voters in the US, of which there are many who have flip-flopped between the Republican and Democratic party in recent years?
Some of them do support a unified Ireland and so in this time of chasing every vote, perhaps that played a part.
Bill Clinton secured a lot of Irish-American support when he was running for president, by promising to get engaged in the peace process.
They voted for him and he followed through on his promise and much of that work led to the foundations of the Good Friday Agreement.
But, Irish America is a different place now. Indeed, America is a different place now as politics have become more polarised.
The November election campaigns show no indication that will change anytime soon.
But political leaders in Ireland will be hoping the only debate tomorrow is about the play on the golf course.
- Published14 hours ago
- Published2 days ago
- Published2 days ago`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cwyzppd1d5lo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-12T21:25:28+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/9948/live/1ffb4fe0-919e-11f1-b6b0-d5690aa17db0.jpg",
    readTime: 2,
  },
  {
    id: "iceland-to-open-first-store-in-the-falkl-7fce7665",
    title: "Iceland to open first store in the Falklands",
    titleJa: "Iceland to open first store in the Falklands",
    summaryJa: "Boss Lord Richard Walker says it would be the the first UK high street brand to operate there.",
    bodyOriginal: `Iceland to open first store in the Falklands
- Published
Supermarket Iceland is opening its first branch in the Falkland Islands, according to boss Lord Richard Walker.
He said the store would be opening in December, adding on LinkedIn it would be the the first UK high street brand to open there.
The shop will be in the capital Stanley where it will serve a population of about 3,500.
Lord Walker said the Welsh business, based in Deeside, in Flintshire, was growing internationally and he wanted to expand it further.
"We actually wholesale or franchise to over 75 different countries," he said.
"And we've had our eye on the Falkland Islands for quite a long time. We think it's a very underserved market, with a lack of competition, and, of course, being that our product is predominantly frozen, it transports and exports very well."
The said the timing was coincidental "given the geopolitics", Lord Walker told BBC Radio Wales Breakfast.
Argentine president Javier Milei recently claimed the islands - referred to as Las Malvinas by Argentina - were "historically and legally" Argentinian.
The Stanley store would be in partnership with Kelper Stores, part of the Fortuna group.
Lord Walker said he would be visting the island to cut the ribbon and open the supermarket.
"We estimate that prices will be almost 30% lower than other competitors on the island," he said.
"And I think that's really going to bring some much needed value to the market."
Related topics
More top stories
- Published1 day ago
- Published1 day ago
- Published1 day ago`,
    bodyJa: `Iceland to open first store in the Falklands
- Published
Supermarket Iceland is opening its first branch in the Falkland Islands, according to boss Lord Richard Walker.
He said the store would be opening in December, adding on LinkedIn it would be the the first UK high street brand to open there.
The shop will be in the capital Stanley where it will serve a population of about 3,500.
Lord Walker said the Welsh business, based in Deeside, in Flintshire, was growing internationally and he wanted to expand it further.
"We actually wholesale or franchise to over 75 different countries," he said.
"And we've had our eye on the Falkland Islands for quite a long time. We think it's a very underserved market, with a lack of competition, and, of course, being that our product is predominantly frozen, it transports and exports very well."
The said the timing was coincidental "given the geopolitics", Lord Walker told BBC Radio Wales Breakfast.
Argentine president Javier Milei recently claimed the islands - referred to as Las Malvinas by Argentina - were "historically and legally" Argentinian.
The Stanley store would be in partnership with Kelper Stores, part of the Fortuna group.
Lord Walker said he would be visting the island to cut the ribbon and open the supermarket.
"We estimate that prices will be almost 30% lower than other competitors on the island," he said.
"And I think that's really going to bring some much needed value to the market."
Related topics
More top stories
- Published1 day ago
- Published1 day ago
- Published1 day ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cd94kze0y9qo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-12T20:50:54+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/a540/live/86a6fe20-aee9-11f1-a99d-4515748c32d0.jpg",
    readTime: 4,
  },
  {
    id: "anthropic-s-amodei-shares-plan-to-slow-t-6b559a04",
    title: "Anthropic’s Amodei shares plan to ‘slow the pace’ of growing AI capabilities; Musk and Altman express support",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Anthropic CEO Dario Amodei published an essay on Saturday urging artificial intelligence companies to pace how quickly they improve model capabilities, a move that comes as a growing chorus of researchers have called for a coordinated deceleration.
The proposal for a voluntary slowdown brought together three figureheads of the AI industry in agreement, with SpaceX CEO Elon Musk and OpenAI chief Sam Altman throwing their support behind Amodei.
Amodei proposed a three-step plan that he said will help temper the pace of development without "sacrificing commercial advantage or the United States' lead in AI," though he conceded that some steps may be easier to achieve than others. Anthropic is actively gearing up for what is widely expected to be a historic IPO, though the company has not officially disclosed when it plans to debut.
Anthropic has "unilaterally" committed to the first step of the plan, Amodei said, which grants third-party evaluators employee-level access to the company to verify safety practices and report incidents. The second step encourages leading AI companies within democratic countries to coordinate and establish common safety standards, and the third calls for coordination between democratic governments and authoritarian governments.
"To be clear, pacing does not mean halting model training or technical progress, but ensuring companies take adequate time to align and safeguard their models, and for third party evaluators to confirm this," Amodei wrote.
Concerns around AI's capabilities
Amodei's essay landed after an Anthropic researcher set off a firestorm on social media this week by announcing he quit his job at the company. Jacob Coxon, who has also worked as a researcher at Anthropic's chief rival, OpenAI, said he resigned out of concern that Anthropic and OpenAI are "gambling with our lives." He said the people building AI "earnestly believe that it could kill us all by the end of the decade."
While extreme, concerns about the potential for AI to cause human extinction or other catastrophic events are not new in AI research circles. In 2023, for instance, prominent AI researchers and executives, including Amodei and OpenAI's Altman, signed a statement that said, "Mitigating the risk of extinction from AI should be a global priority alongside other societal-scale risks such as pandemics and nuclear war."
Amodei said Saturday that while pausing or slowing AI development has been floated since 2023, it made "little sense" to do so at that time. He said models were not powerful enough to take action in the real world at that point, and they were also not yet capable of "significant deception, manipulation, cheating, or cyberattacks."
"I continue to believe that AI can enormously improve the quality of human life. My desire to achieve these benefits is undimmed," Amodei wrote. "But the benefits will only be achieved if we build the technology in the right way, and — so long as we use the time we gain well — it is worth taking unusually deliberate care to get it right."
Support for a voluntary slowdown
Amodei's essay was lauded by many industry researchers and executives on Saturday, including Altman. In a post on X, he said he agreed with Amodei that the industry needs to pace the development of advanced AI capabilities. Altman said the subject has been a "primary topic" of discussion at OpenAI in recent weeks.
"Committing to having independent evaluators with employee-like access is a great idea, and we will do the same," Altman said. "We'll have more to share soon."
Earlier this month, OpenAI's chief scientist, Jakub Pachocki, published a blog post earlier this month and warned that no AI company has "solved alignment and monitoring to a sufficient degree to continue responsibly scaling at maximum speed for much longer." In the AI industry, alignment refers to the work by AI developers to ensure that the system behaves in accordance with human values and intentions.
Pachocki said he expects and hopes for voluntary slowdowns to become "commonplace until shared safety bars are established."
Musk also expressed support for a slowdown on Saturday, writing in a post on X that, "Dario is right."
Musk, whose competing AI startup xAI was acquired by his rocket company SpaceX earlier this year, used to be a vocal critic of Anthropic. He previously said the company "hates Western Civilization," and is "doomed to become the opposite of its name," which would be misanthropic. But since Anthropic announced a major compute deal with SpaceX in May, Musk has largely changed his tune.
"Everyone I met was highly competent and cared a great deal about doing the right thing," Musk wrote at the time. "No one set off my evil detector."
Amodei wrote Saturday that he believes AI could still "dramatically raise the quality of human life," but that the risks need to be taken seriously.
"I believe that if slowing down bought us even an extra year or two before models reach critical levels of capability, and we used that time to advance alignment, we could greatly reduce the risk that something goes seriously wrong," he said.
WATCH: Anthropic AI researcher says company is ‘gambling with our lives’`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.
Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/12/anthropics-amodei-proposes-plan-to-slow-the-pace-of-advancing-ai-capabilities.html",
    publishedAt: "2026-09-12T20:26:33+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "fire-at-nursing-home-in-chile-kills-16-r-225b124e",
    title: "Fire at nursing home in Chile kills 16 residents",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Fire at nursing home in Chile kills 16 residents
- Published
At least 16 elderly residents have died in a fire at a nursing home in Chile, according to authorities.
Ten others were evacuated after a blaze broke out at El Edén home in /idt2/d9cfcc9a-2842-463f-a4d8-4dd007ef9547, around 640km (400 miles) south of the capital Santiago, on Friday evening.
Jorge Granada, a prosecutor leading the case, said it was not clear at this stage what caused the incident.
Chile's President José Antonio Kast said he had ordered a review into the condition of nursing homes across the country.
"We will fully collaborate with the justice system to clarify what happened, determine where failures may have existed in oversight or prevention, identify what alerts were raised and what actions were taken in response to them," Kast said.
"We need to know the truth and, based on that, correct whatever is necessary to do everything possible to prevent a tragedy like this from happening again," thre president added.
The fire, which began at around 22:30 (01:30 GMT) was finally put out on Saturday morning.
On Saturday, firefighters were still clearing debris and removing collapsed corrugated metal roofing. Police cordoned off the area for safety.
"It is a situation that fills our souls with great sorrow and pain. We have been... providing support to the families," said local mayor Jacqueline Romero.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cy4zpp20w77o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-12T19:36:50+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/0a76/live/dfbc28f0-aeda-11f1-91ea-91f4a2a08fa4.jpg",
    readTime: 2,
  },
  {
    id: "skimpflation-warning-as-tinned-mackerel-1f5ed813",
    title: "'Skimpflation' warning as tinned mackerel alternative hits more supermarket shelves",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `'Skimpflation' warning as tinned mackerel alternative hits more supermarket shelves
- Published
A growing trend of supermarkets selling a cheaper, less nutritious alternative to tinned mackerel is an example of "skimpflation", a consumer group has said.
Princes - which supplies major supermarkets - has substituted the fish for jack mackerel, an entirely different species also being sold by Lidl.
The switch has been spurred by dwindling stocks of Atlantic mackerel after years of overfishing, with its Chilean counterpart more sustainable and a third of the cost.
"It's a real concern when manufacturers quietly downgrade everyday staples like these as shoppers can end up paying the same price for a product that delivers significantly less nutritional quality," Sue Davies, head of food policy at Which?, said.
Jack mackerel contains about half as much omega-3 and around a third as much vitamin B12 as traditional mackerel.
The shift has prompted complaints from some consumers over differences in taste and texture, as well as concerns about how clearly the replacement fish is being labelled.
Princes announced last October, external that it was changing all of its tinned mackerel products to jack mackerel, saying the species meets the Marine Stewardship Council's sustainability standards.
The firm said its jack mackerel products were "clearly identified" and had been introduced following extensive product and consumer testing, describing it as having a "milder flavour and meatier texture".
Lidl is selling jack mackerel under its house brand. Lidl GB said it was "committed to sourcing fish and seafood from responsibly managed fisheries".
Davies from Which? said: "While manufacturers face genuine supply chain pressures and sustainability challenges, they have a responsibility to shoppers to be completely upfront when they change a product's recipe."
She added: "Skimpflation - quietly changing ingredients to cut costs - has become increasingly common, but it can feel particularly sneaky as shoppers may not realise a product has changed until they get it home and eat it."
'Mackerel war'
Despite its name, jack mackerel is not a type of mackerel. Jack mackerel belongs to the Carangidae fish family, while traditional mackerel belongs to the Scombridae family.
Until December 2025, under UK law, Carangidae species could only be marketed as "jack", "scad", "trevally" or "horse mackerel".
But shortly after Princes launched its new product as "jack mackerel", the Department for Environment, Food and Rural Affairs changed its rules to permit the labelling.
Industry figures reposted by seafood market intelligence platform Undercurrent suggest wholesale Chilean jack mackerel costs roughly one-third as much as Atlantic mackerel.
The switch follows the so-called "mackerel war", a long-running dispute between the UK, Iceland, Greenland, Norway, the Faroe Islands, the EU and Russia over shared mackerel catch quotas.
The countries have repeatedly failed to agree a unified system for sharing stock and setting catch limits in line with scientific advice.
Mackerel catches in the north-east Atlantic have exceeded the levels advised by scientists by an average of 39% over the past 15 years, according to the Marine Stewardship Council (MSC).
Stocks have plummeted by roughly three-quarters over the past decade, according to the International Council for the Exploration of the Sea (Ices).
The intergovernmental body has advised slashing the quantity of north-east Atlantic mackerel caught in 2026 by roughly 70% to allow the stock a chance to recover.
Last year, the Marine Conservation Society said the Atlantic mackerel population was at "breaking point".
The severe depletion of mackerel numbers has led to the fish losing its MSC certification, meaning it no longer complies with many retailers' sustainability policies. Chilean jack mackerel, in contrast, is MSC-certified.
In February, Waitrose said it would suspend sales of fresh, chilled and frozen mackerel due to overfishing concerns, while tinned products would be phased out as existing stock was sold.
The Marine Conservation Society heralded the move as "leading and decisive".
The switch to jack mackerel is being felt beyond the UK, with supermarkets in the Netherlands no longer selling Atlantic mackerel and at least one supermarket in Sweden switching to jack mackerel.
Related topics
- Published2 days ago
- Published17 August`,
    bodyJa: `サバ缶の代替品がスーパーマーケットの棚に並び、「ケミカルフレーション」への警告
- 公開されました
スーパーマーケットがサバ缶に代わる安価で栄養価の低い代替品を販売する傾向が強まっており、「ケミカルフレーション」の一例だと消費者団体は述べた。
大手スーパーマーケットに商品を供給しているプリンスズ社は、この魚をアジの代わりにしているが、これは同じくリドル​​社が販売している全く別の種類である。
長年にわたる乱獲の末に大西洋サバの資源が減少していることが、切り替えに拍車をかけているが、チリ産サバはより持続可能で、価格は3分の1である。
「Which?」の食品政策責任者スー・デイビス氏は、「買い物客が栄養価が大幅に低い商品に同じ値段を払うことになる可能性があるため、メーカーがこのような日用品をひそかに格下げするのは大きな懸念だ」と述べた。
マアジには、従来のサバに比べて約半分のオメガ 3 と約 3 分の 1 のビタミン B12 が含まれています。
この変更により、一部の消費者からは味​​や食感の違いに対する苦情のほか、代替魚の表示がどれほど明確であるかについての懸念も生じている。
プリンスは昨年10月、サバ缶製品をすべてアジサバに変更し、この種が海洋管理評議会の持続可能性基準を満たしていると対外発表した。
同社は、自社のアジ製品は「明確に識別され」、広範な製品テストと消費者テストを経て導入されたと述べ、「よりマイルドな風味と肉厚な食感」を備えていると説明した。
Lidlは自社ブランドでアジを販売している。 Lidl GBは「責任を持って管理された漁業から魚介類を調達することに取り組んでいる」と述べた。
デイヴィス どっちから？ 「メーカーはサプライチェーンの真のプレッシャーと持続可能性の課題に直面しているが、製品のレシピを変更する場合には、買い物客に対して完全に率直に対応する責任がある。」
さらに、「コスト削減のためにこっそりと原材料を変更するスキムフレーションはますます一般的になっているが、買い物客は家に帰って食べるまで商品が変更されたことに気づかない可能性があるため、特に卑劣に感じることがある」と付け加えた。
「サバ戦争」
その名前にもかかわらず、アジはサバの一種ではありません。マアジはアジ科の魚類に属しますが、従来のサバはサバ科に属します。
2025 年 12 月まで、英国の法律の下では、カラン科の種は「アジ」、「アカ」、「アジ」、または「アジ」としてのみ販売できました。
しかし、プリンスズが新製品を「アジ」として発売した直後、環境・食糧・農村省は規則を変更し、表示を許可した。
水産市場インテリジェンスプラットフォーム「アンダーカレント」が転載した業界統計によると、チリ産アジの卸売価格は大西洋サバの約3分の1だという。
この切り替えは、英国、アイスランド、グリーンランド、ノルウェー、フェロー諸島、EU、ロシアの間でサバの共通漁獲枠を巡る長期にわたる紛争、いわゆる「サバ戦争」に続くものである。
各国は資源を共有し、科学的助言に沿って漁獲制限を設定するための統一システムに何度も合意できていない。
海洋管理評議会（MSC）によると、北東大西洋におけるサバの漁獲量は、過去15年間で科学者が推奨する水準を平均39％上回っている。
国際海洋探査評議会（氷）によると、過去10年間で資源は約4分の3も急落した。
政府間機関は、資源回復の機会を得るために、2026年に漁獲される北東大西洋サバの量を約70％削減するよう勧告した。
海洋保護協会は昨年、大西洋サバの個体数が「限界点」に達していると述べた。
サバの数の深刻な減少により、この魚はMSC認証を失いました。これは、サバが多くの小売業者の持続可能性方針に準拠しなくなったことを意味します。対照的に、チリ産アジはMSC認証を受けています。
ウェイトローズは2月、乱獲の懸念から生サバ、冷蔵サバ、冷凍サバの販売を一時停止し、缶詰製品は既存の在庫が売れたので段階的に廃止すると発表した。
海洋保護協会は、この動きを「主導的かつ決定的」であると歓迎した。
マアジへの切り替えは英国以外でも感じられており、オランダのスーパーではタイセイヨウサバの販売が中止され、スウェーデンの少なくとも１つのスーパーマーケットではアジに切り替えている。
関連トピック
- 2 日前に公開
- 8 月 17 日公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/crm9xk9eg88o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-12T18:31:23+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/c0d0/live/06b5b760-aeb2-11f1-ae38-d350b022f499.jpg",
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
