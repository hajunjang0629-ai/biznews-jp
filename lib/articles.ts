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
    id: "spacex-deal-to-acquire-spectrum-license-90022e11",
    title: "SpaceX deal to acquire spectrum license hammers shares of AT&T, Verizon and T-Mobile",
    titleJa: "SpaceX deal to acquire spectrum license hammers shares of AT&T, Verizon and T-Mobile",
    summaryJa: "SpaceX agreed to purchase a nationwide spectrum portfolio as it to pushes its Starlink service deeper into the U.S. telecommunications market.",
    bodyOriginal: `SpaceX announced an agreement on Thursday to purchase a nationwide spectrum portfolio as it pushes its Starlink service deeper into the U.S. telecommunications market. Shares of AT&T, Verizon and T-Mobile tumbled in extended trading.
The deal involves the acquisition of a spectrum portfolio from Grain Management, which specializes in digital infrastructure, and is subject to approval by the Federal Communications Commission. SpaceX said in a statement that it's a "license portfolio of up to 14 megahertz of paired spectrum in the 800 MHz band."
"This prime low-band spectrum addresses one of the key remaining technical gaps that will pave the way for Starlink Mobile to become a major mobile carrier in the US," SpaceX said.
In a post on X, SpaceX CEO Elon Musk called it a "very big deal."
Last week, T-Mobile, AT&T and Verizon formed a joint venture "focused on expanding coverage in underserved areas," via satellite and direct-to-device (D2D) services, and Starlink was notably absent. T-Mobile has also previously removed mention of Starlink from its T-Satellite promotions.
SpaceX appears determined to battle telecommunications giants in the U.S., and deliver its own services without them.
"This adds fuel to the fire in the battle between SpaceX and the mobile operators," said TMF Associates' Tim Farrar, an industry expert. "But it's still a very limited amount of spectrum and to get reliable building penetration in urban areas SpaceX would have to deploy towers on the ground."
The announcement comes a day after the FCC said it would vote on a proposal to auction 25 megahertz of "prime spectrum" to support D2D services from satellites to smart phones. The FCC also said it would vote Oct. 29 on taking public comment on a proposal to make an additional 482MHz of spectrum available for supplemental coverage from space and to modernize FCC rules for D2D services in the licensed spectrum.
The two proposals could benefit SpaceX as well as Amazon, which has also moved to build a service with satellite networks.
SpaceX, which went public in June in a record IPO and is now valued at over $2 trillion, has relied on Starlink as its cash cow and only profitable business segment to date.
The service is available in 205 countries and had 12 million subscribers as of June 30, according to SpaceX's second-quarter report. The connectivity business generated $1.66 billion in operating income in the period on $4.29 billion in revenue. Starlink is the largest global satellite communications network with over 11,000 satellites in orbit.
Deutsche Bank analysts, who recommend buying SpaceX stock, estimated in a report this week that Starlink's global subscriber base reached 13.5 million at the end of September, including 4.1 million based in the U.S.
In its rocket business, SpaceX has reduced its planned cadence of launches for next year. The company is now looking to make its massive Starship rockets reliable and fully reusable in order to transition away from use of its smaller Falcon rockets. SpaceX is also building a cloud computing business and aims to someday build orbital data centers. For now, its space and artificial intelligence units are losing money.
SpaceX didn't immediately respond to a request for further information, including when its new services may come online if approved by regulators. If cleared, the added spectrum will help SpaceX combine satellite and ground-based coverage once it builds out a network of towers.
SpaceX shares rose about 2.5% in extended trading after dropping 4% during regular market hours.`,
    bodyJa: `SpaceX announced an agreement on Thursday to purchase a nationwide spectrum portfolio as it pushes its Starlink service deeper into the U.S. telecommunications market. Shares of AT&T, Verizon and T-Mobile tumbled in extended trading.
The deal involves the acquisition of a spectrum portfolio from Grain Management, which specializes in digital infrastructure, and is subject to approval by the Federal Communications Commission. SpaceX said in a statement that it's a "license portfolio of up to 14 megahertz of paired spectrum in the 800 MHz band."
"This prime low-band spectrum addresses one of the key remaining technical gaps that will pave the way for Starlink Mobile to become a major mobile carrier in the US," SpaceX said.
In a post on X, SpaceX CEO Elon Musk called it a "very big deal."
Last week, T-Mobile, AT&T and Verizon formed a joint venture "focused on expanding coverage in underserved areas," via satellite and direct-to-device (D2D) services, and Starlink was notably absent. T-Mobile has also previously removed mention of Starlink from its T-Satellite promotions.
SpaceX appears determined to battle telecommunications giants in the U.S., and deliver its own services without them.
"This adds fuel to the fire in the battle between SpaceX and the mobile operators," said TMF Associates' Tim Farrar, an industry expert. "But it's still a very limited amount of spectrum and to get reliable building penetration in urban areas SpaceX would have to deploy towers on the ground."
The announcement comes a day after the FCC said it would vote on a proposal to auction 25 megahertz of "prime spectrum" to support D2D services from satellites to smart phones. The FCC also said it would vote Oct. 29 on taking public comment on a proposal to make an additional 482MHz of spectrum available for supplemental coverage from space and to modernize FCC rules for D2D services in the licensed spectrum.
The two proposals could benefit SpaceX as well as Amazon, which has also moved to build a service with satellite networks.
SpaceX, which went public in June in a record IPO and is now valued at over $2 trillion, has relied on Starlink as its cash cow and only profitable business segment to date.
The service is available in 205 countries and had 12 million subscribers as of June 30, according to SpaceX's second-quarter report. The connectivity business generated $1.66 billion in operating income in the period on $4.29 billion in revenue. Starlink is the largest global satellite communications network with over 11,000 satellites in orbit.
Deutsche Bank analysts, who recommend buying SpaceX stock, estimated in a report this week that Starlink's global subscriber base reached 13.5 million at the end of September, including 4.1 million based in the U.S.
In its rocket business, SpaceX has reduced its planned cadence of launches for next year. The company is now looking to make its massive Starship rockets reliable and fully reusable in order to transition away from use of its smaller Falcon rockets. SpaceX is also building a cloud computing business and aims to someday build orbital data centers. For now, its space and artificial intelligence units are losing money.
SpaceX didn't immediately respond to a request for further information, including when its new services may come online if approved by regulators. If cleared, the added spectrum will help SpaceX combine satellite and ground-based coverage once it builds out a network of towers.
SpaceX shares rose about 2.5% in extended trading after dropping 4% during regular market hours.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/08/spacex-spectrum-license-att-verizon-tmobile.html",
    publishedAt: "2026-10-08T22:55:46+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 9,
  },
  {
    id: "white-house-blocks-microsoft-from-foreig-7ea73cd2",
    title: "White House blocks Microsoft from foreign worker hiring program",
    titleJa: "White House blocks Microsoft from foreign worker hiring program",
    summaryJa: "An international visa program has for years allowed US tech companies to hire highly skilled workers from abroad.",
    bodyOriginal: `White House blocks Microsoft from foreign worker hiring program
- Published
Microsoft and several other technology firms have been barred by the White House from hiring skilled international workers on a permanent basis through a widely used visa program.
Vice President JD Vance on Thursday accused Microsoft alongside other firms of committing fraud through the use of the H1b visa programme and a related process for workers from abroad to become permanent US residents.
Vance claimed that Microsoft, one of the most valuable companies in the US, has been effectively replacing American workers with "foreign indentured servants."
Microsoft said most of the H1b visas filed over the last financial year were for existing workers, who are paid the same as local staff.
"No company in the US has abused this system more than Microsoft," Vance said.
He also made similar accusations about Adobe, Cognizant, Infosys, Tata, Wipro, HCL and Capgemini.
The US government will not process any new or pending Permanent Labor Certification Program (PERM) applications from Microsoft or the seven other companies, Secretary of Labor Keith Sonderling said during the same conference.
Sonderling said companies like Microsoft, as well as US universities, have turned into "visa mills" that were "flooding" the US with foreign workers.
The BBC has contacted all of the companies for comment.
The total number of H1b visas, a precursor to anyone seeking to go through the PERM process, is capped, external at 85,000 per year.
A spokeswoman for Microsoft noted to the BBC that "the vast majority of Microsoft employees in the United States are Americans." The company employs more than 200,000 people worldwide.
Vance put forward on Thursday that Microsoft had laid off about 6,000 workers and filed 6,800 H1b visa applications over the same period of time. He claimed this was evidence of the company using foreign workers to replace domestic workers and "undercut" their wages.
The Microsoft spokeswoman said that 80% of the H1b visa filings the company has submitted over the last fiscal year were related to employees already working at Microsoft, not new hires.
She added that the international workers that Microsoft does hire through the H1b visa program are paid the same level of compensation that a worker from the US would receive.
According to Ellis, a company which aids many tech companies with the process of hiring skilled workers from abroad, the median salary, external for an H1b worker at Microsoft is $155,000.
"We look forward to providing the Administration with additional information," the Microsoft spokeswoman said.
Satya Nadella, Microsoft's long-time chief executive, was at the White House on Thursday to receive a novel medal for technology innovation from President Donald Trump.
Introducing Nadella during the event, Trump said the White House was "honoured" to be awarding the medal to him and that it was "so well-deserved".
Other tech industry figures to receive medals from Trump were Elon Musk, Jensen Huang, Lisa Su, Sergey Brin, and Michael Dell.
Nadella and most of the other medal recipients were also present at other recent White House events, including a lunch on artificial intelligence and a state dinner for China's President Xi Jinping.
Yet, Microsoft was the focus of Vance's criticism on Thursday.
"Our message to Microsoft is quite simple: You're a great American company, you've got to hire great American workers. You cannot lay off American workers and then replace them with foreign indentured servants," Vance said.
He explained that his reference to workers from abroad in such a way was due to the fact that, should they be fired or laid off from the company that sponsored their visa, they "have to leave" the US.
Typically, such a worker has a 60-day grace period in that circumstance. Last month, the US government proposed eliminating, external that grace period altogether.
Every major tech firm in the US hires international workers through the H1b visa program, and has done so for many years, including Amazon, Google, Meta, Apple, Nvidia, and more.
None of those companies were included in Vance's Thursday comments.
The program has been aimed at highly skilled or specialized workers that a company needs, but is unable to find or hire domestically, for decades.
The PERM program is a pathway for such workers to become permanent US residents, often leading to a Green Card that would allow them to remain and work in the US indefinitely.
During the last fiscal year, the US Department of Labor certified, external more than 130,000 PERM applications accross ten business categories.`,
    bodyJa: `White House blocks Microsoft from foreign worker hiring program
- Published
Microsoft and several other technology firms have been barred by the White House from hiring skilled international workers on a permanent basis through a widely used visa program.
Vice President JD Vance on Thursday accused Microsoft alongside other firms of committing fraud through the use of the H1b visa programme and a related process for workers from abroad to become permanent US residents.
Vance claimed that Microsoft, one of the most valuable companies in the US, has been effectively replacing American workers with "foreign indentured servants."
Microsoft said most of the H1b visas filed over the last financial year were for existing workers, who are paid the same as local staff.
"No company in the US has abused this system more than Microsoft," Vance said.
He also made similar accusations about Adobe, Cognizant, Infosys, Tata, Wipro, HCL and Capgemini.
The US government will not process any new or pending Permanent Labor Certification Program (PERM) applications from Microsoft or the seven other companies, Secretary of Labor Keith Sonderling said during the same conference.
Sonderling said companies like Microsoft, as well as US universities, have turned into "visa mills" that were "flooding" the US with foreign workers.
The BBC has contacted all of the companies for comment.
The total number of H1b visas, a precursor to anyone seeking to go through the PERM process, is capped, external at 85,000 per year.
A spokeswoman for Microsoft noted to the BBC that "the vast majority of Microsoft employees in the United States are Americans." The company employs more than 200,000 people worldwide.
Vance put forward on Thursday that Microsoft had laid off about 6,000 workers and filed 6,800 H1b visa applications over the same period of time. He claimed this was evidence of the company using foreign workers to replace domestic workers and "undercut" their wages.
The Microsoft spokeswoman said that 80% of the H1b visa filings the company has submitted over the last fiscal year were related to employees already working at Microsoft, not new hires.
She added that the international workers that Microsoft does hire through the H1b visa program are paid the same level of compensation that a worker from the US would receive.
According to Ellis, a company which aids many tech companies with the process of hiring skilled workers from abroad, the median salary, external for an H1b worker at Microsoft is $155,000.
"We look forward to providing the Administration with additional information," the Microsoft spokeswoman said.
Satya Nadella, Microsoft's long-time chief executive, was at the White House on Thursday to receive a novel medal for technology innovation from President Donald Trump.
Introducing Nadella during the event, Trump said the White House was "honoured" to be awarding the medal to him and that it was "so well-deserved".
Other tech industry figures to receive medals from Trump were Elon Musk, Jensen Huang, Lisa Su, Sergey Brin, and Michael Dell.
Nadella and most of the other medal recipients were also present at other recent White House events, including a lunch on artificial intelligence and a state dinner for China's President Xi Jinping.
Yet, Microsoft was the focus of Vance's criticism on Thursday.
"Our message to Microsoft is quite simple: You're a great American company, you've got to hire great American workers. You cannot lay off American workers and then replace them with foreign indentured servants," Vance said.
He explained that his reference to workers from abroad in such a way was due to the fact that, should they be fired or laid off from the company that sponsored their visa, they "have to leave" the US.
Typically, such a worker has a 60-day grace period in that circumstance. Last month, the US government proposed eliminating, external that grace period altogether.
Every major tech firm in the US hires international workers through the H1b visa program, and has done so for many years, including Amazon, Google, Meta, Apple, Nvidia, and more.
None of those companies were included in Vance's Thursday comments.
The program has been aimed at highly skilled or specialized workers that a company needs, but is unable to find or hire domestically, for decades.
The PERM program is a pathway for such workers to become permanent US residents, often leading to a Green Card that would allow them to remain and work in the US indefinitely.
During the last fiscal year, the US Department of Labor certified, external more than 130,000 PERM applications accross ten business categories.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/ck5yngl2y4gpo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-08T21:37:35+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/d7e9/live/ec86f2b0-c346-11f1-9a39-31b474234113.jpg",
    readTime: 10,
  },
  {
    id: "nvidia-oracle-coreweave-and-other-ai-sto-cfeee474",
    title: "Nvidia, Oracle, CoreWeave and other AI stocks sink on OpenAI revenue report",
    titleJa: "Nvidia, Oracle, CoreWeave and other AI stocks sink on OpenAI revenue report",
    summaryJa: "OpenAI has told investors that it hit roughly $50 billion in annualized revenue at the end of September, CNBC confirmed.",
    bodyOriginal: `Shares of Nvidia, Oracle, CoreWeave and other artificial intelligence names sank lower on Thursday after the market learned more details about OpenAI's revenue.
OpenAI told investors that it hit roughly $50 billion in annualized revenue at the end of September, CNBC confirmed, lower than the the $68 billion figure that was widely reported late last month. A person familiar with the matter said the $68 billion figure included gross revenue from OpenAI's partners, which helps investors make a more direct comparison with its chief rival, Anthropic.
The Financial Times was first to report the $50 billion figure.
OpenAI shared an update about its finances in an investor presentation, said the person, who asked not to be named in order to discuss the numbers. In addition to the $50 billion in annualized revenue, OpenAI touted 77% total run rate growth during its third quarter, as well as 107% run rate growth for its enterprise business during the same period, the person said.
Nvidia shares fell 3%, Oracle shares fell nearly 6% and CoreWeave shares slipped nearly 8% on Thursday. Additionally, Advanced Micro Devices fell 4%, Broadcom fell 4%, Intel fell 5% and Super Micro Computer fell nearly 5%.
OpenAI is under pressure to justify its $852 billion valuation to investors as it gears up for what is widely expected to be a blockbuster IPO. OpenAI confidentially filed its prospectus with regulators in June, and executives have signaled that the company is eyeing a 2027 debut.
Anthropic is also readying for a major IPO. The company has not officially disclosed when it plans to debut, but it's been engaging in meetings with prospective investors and is reportedly seeking a $2 trillion valuation. In August, Anthropic told investors that its annualized revenue run rate hit $65 billion at the end of July.
In a report on Tuesday, independent financial research provider New Constructs called Anthropic's upcoming offering the "most ridiculous IPO of 2026," and valued the company at a mere $150 billion. Anthropic's revenue in 2025 was $4.6 billion as the company racked up a net loss of $42 billion, according to Reuters, which cited a leaked copy of the company's prospectus.
Both Anthropic and OpenAI have been at the center of a fierce debate over AI safety, after a growing chorus of researchers warned that the companies' models could potentially cause catastrophic harm. OpenAI has disclosed several incidents where its models behaved in unintended ways, and the company recently pulled its plans to launch GPT-6.1 Astra, saying the model did not meet its safety standards.
OpenAI CEO Sam Altman said in September that "right now would be an ill-advised moment to go public," in part because of the ongoing concerns around safety.
As OpenAI bides its time, the company is engaging in early stage discussions with investors about a potential new funding round. The company could raise around $30 billion, CNBC previously reported, but that figure could change. The round is being driven by investor demand and no term sheet has been finalized yet.
OpenAI closed a historic $122 billion funding round in March, and CFO Sarah Friar told CNBC last week that it is still "very well capitalized."
WATCH: OpenAI annualized revenues $20 billion less than previously signaled: Report`,
    bodyJa: `Shares of Nvidia, Oracle, CoreWeave and other artificial intelligence names sank lower on Thursday after the market learned more details about OpenAI's revenue.
OpenAI told investors that it hit roughly $50 billion in annualized revenue at the end of September, CNBC confirmed, lower than the the $68 billion figure that was widely reported late last month. A person familiar with the matter said the $68 billion figure included gross revenue from OpenAI's partners, which helps investors make a more direct comparison with its chief rival, Anthropic.
The Financial Times was first to report the $50 billion figure.
OpenAI shared an update about its finances in an investor presentation, said the person, who asked not to be named in order to discuss the numbers. In addition to the $50 billion in annualized revenue, OpenAI touted 77% total run rate growth during its third quarter, as well as 107% run rate growth for its enterprise business during the same period, the person said.
Nvidia shares fell 3%, Oracle shares fell nearly 6% and CoreWeave shares slipped nearly 8% on Thursday. Additionally, Advanced Micro Devices fell 4%, Broadcom fell 4%, Intel fell 5% and Super Micro Computer fell nearly 5%.
OpenAI is under pressure to justify its $852 billion valuation to investors as it gears up for what is widely expected to be a blockbuster IPO. OpenAI confidentially filed its prospectus with regulators in June, and executives have signaled that the company is eyeing a 2027 debut.
Anthropic is also readying for a major IPO. The company has not officially disclosed when it plans to debut, but it's been engaging in meetings with prospective investors and is reportedly seeking a $2 trillion valuation. In August, Anthropic told investors that its annualized revenue run rate hit $65 billion at the end of July.
In a report on Tuesday, independent financial research provider New Constructs called Anthropic's upcoming offering the "most ridiculous IPO of 2026," and valued the company at a mere $150 billion. Anthropic's revenue in 2025 was $4.6 billion as the company racked up a net loss of $42 billion, according to Reuters, which cited a leaked copy of the company's prospectus.
Both Anthropic and OpenAI have been at the center of a fierce debate over AI safety, after a growing chorus of researchers warned that the companies' models could potentially cause catastrophic harm. OpenAI has disclosed several incidents where its models behaved in unintended ways, and the company recently pulled its plans to launch GPT-6.1 Astra, saying the model did not meet its safety standards.
OpenAI CEO Sam Altman said in September that "right now would be an ill-advised moment to go public," in part because of the ongoing concerns around safety.
As OpenAI bides its time, the company is engaging in early stage discussions with investors about a potential new funding round. The company could raise around $30 billion, CNBC previously reported, but that figure could change. The round is being driven by investor demand and no term sheet has been finalized yet.
OpenAI closed a historic $122 billion funding round in March, and CFO Sarah Friar told CNBC last week that it is still "very well capitalized."
WATCH: OpenAI annualized revenues $20 billion less than previously signaled: Report`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/08/open-ai-revenue-nvidia-oracle-coreweave.html",
    publishedAt: "2026-10-08T21:19:14+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 8,
  },
  {
    id: "major-league-baseball-proposes-shortenin-97f84c70",
    title: "Major League Baseball proposes shortening its regular season as it pushes for a salary cap",
    titleJa: "Major League Baseball proposes shortening its regular season as it pushes for a salary cap",
    summaryJa: "Major League Baseball proposed a return to a shorter 154-game regular season schedule as it attempts to convince players to approve a salary cap.",
    bodyOriginal: `Major League Baseball proposed shortening its regular season to 154 games from 162 as it attempts to convince players to approve a salary cap in the league's next collective bargaining agreement. The new shortened schedule would begin in 2029.
MLB's CBA expires Dec. 1, after the conclusion of this season's World Series. The most contentious issue is the introduction of a salary cap on players. MLB is the only major American sports league without a cap. The league has failed to convince the players' union to adopt one in several previous CBA negotiations.
A 154-game season was used between 1904 and 1960, except for 1918 and 1919 when the schedule was abbreviated because of World War I. For the past 66 years, 162 regular season games has been the standard, though some seasons have been shortened. Lopping off eight games "is good for player health, while also creating a new national broadcast window to showcase our most exciting teams and players," MLB spokesman Glen Caplin said in a statement. "A shorter regular season unlocks making October even better for our fans — with fewer weekday afternoon games, a longer Division Series, and more opportunities to see the game's best pitchers on the biggest stage."
As part of the proposal, MLB wants to cement Monday as an exclusive broadcast window for one or two games to "increase national exposure for the sport." The league could conceivably sell a package of Monday-only games to a streaming service looking to increase subscriber and advertising revenue. Every team not playing in the national game or games would have an off day. Teams that play Monday would be off on Thursday, MLB said.
In addition to lowering the number of regular season games, MLB would extend the divisional round of the playoffs to seven games from five and would allow the higher-seeded teams in both the wild card round and in the divisional round to choose their lower-seeded opponent.
The Major League Baseball Players Association responded to the MLB's proposed changes by claiming the league "once again made clear that all of its proposals are contingent on players' agreement to a salary cap, a system that guts player rights and compensation, as well as its other anti-player proposals."
An MLB spokesperson confirmed that Thursday's proposed changes are contingent on adopting a cap – and a salary floor, which would force teams to spend a certain amount on players. Still, the MLBPA said it would review the proposed changes. "Players will weigh in on these proposals and we will respond at the bargaining table," MLBPA said in a statement.`,
    bodyJa: `Major League Baseball proposed shortening its regular season to 154 games from 162 as it attempts to convince players to approve a salary cap in the league's next collective bargaining agreement. The new shortened schedule would begin in 2029.
MLB's CBA expires Dec. 1, after the conclusion of this season's World Series. The most contentious issue is the introduction of a salary cap on players. MLB is the only major American sports league without a cap. The league has failed to convince the players' union to adopt one in several previous CBA negotiations.
A 154-game season was used between 1904 and 1960, except for 1918 and 1919 when the schedule was abbreviated because of World War I. For the past 66 years, 162 regular season games has been the standard, though some seasons have been shortened. Lopping off eight games "is good for player health, while also creating a new national broadcast window to showcase our most exciting teams and players," MLB spokesman Glen Caplin said in a statement. "A shorter regular season unlocks making October even better for our fans — with fewer weekday afternoon games, a longer Division Series, and more opportunities to see the game's best pitchers on the biggest stage."
As part of the proposal, MLB wants to cement Monday as an exclusive broadcast window for one or two games to "increase national exposure for the sport." The league could conceivably sell a package of Monday-only games to a streaming service looking to increase subscriber and advertising revenue. Every team not playing in the national game or games would have an off day. Teams that play Monday would be off on Thursday, MLB said.
In addition to lowering the number of regular season games, MLB would extend the divisional round of the playoffs to seven games from five and would allow the higher-seeded teams in both the wild card round and in the divisional round to choose their lower-seeded opponent.
The Major League Baseball Players Association responded to the MLB's proposed changes by claiming the league "once again made clear that all of its proposals are contingent on players' agreement to a salary cap, a system that guts player rights and compensation, as well as its other anti-player proposals."
An MLB spokesperson confirmed that Thursday's proposed changes are contingent on adopting a cap – and a salary floor, which would force teams to spend a certain amount on players. Still, the MLBPA said it would review the proposed changes. "Players will weigh in on these proposals and we will respond at the bargaining table," MLBPA said in a statement.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/08/major-league-baseball-proposes-shorter-season-amid-salary-cap-push.html",
    publishedAt: "2026-10-08T20:16:21+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 6,
  },
  {
    id: "why-a-starbucks-takeover-of-chipotle-wou-752ef76f",
    title: "Why a Starbucks takeover of Chipotle would — and wouldn't — make sense for both companies",
    titleJa: "Why a Starbucks takeover of Chipotle would — and wouldn't — make sense for both companies",
    summaryJa: "Starbucks has reportedly been working with advisers on a takeover proposal for Chipotle, but a potential deal comes with pros and cons for investors.",
    bodyOriginal: `Starbucks has reportedly explored buying Chipotle Mexican Grill, but investors are split on whether the megadeal would make sense for both companies.
The coffee giant has been working with advisers on a takeover proposal of the fast-casual chain in recent months, the Financial Times reported on Thursday, citing people familiar with the matter.
If Starbucks bought Chipotle, it would combine two of the largest U.S. restaurant chains. With about $31 billion in annual domestic sales, Starbucks is the second-biggest U.S. chain by sales. Chipotle sits in the number seven spot, with more than $11 billion in annual system-wide sales in its home market.
The report sent Chipotle stock up about 6% on Thursday, while shares of Starbucks fell slightly after dropping more sharply earlier in the day. It is not unusual for deal rumors to lower the potential acquirer's value and increase the target's share price, but investor reactions show that a prospective takeover comes with pros and cons for each side of the deal.
To be sure, it is unclear if Starbucks will even pursue the takeover. D.A. Davidson analyst Matt Curtis wrote in a note to clients on Thursday that he views the odds of a deal being completed as "relatively low" — about 20%.
A Starbucks spokesperson told CNBC that the company does not comment on rumors and speculation. Chipotle did not immediately respond to a request for comment from CNBC.
Why it makes sense:
1. The Niccol connection
Starbucks CEO Brian Niccol knows more than a thing or two about Chipotle.
Before joining the coffee company in 2024, he was chief executive of Chipotle for more than six years. He led a turnaround of the burrito chain, helping it bounce back from a series of foodborne illness outbreaks that had turned into a full-blown crisis for the company.
In the wake of Niccol's departure, traffic to Chipotle restaurants fell in 2025, as budget-conscious consumers visited its restaurants less often. These days, the chain looks like it is starting to get back on track, with signs of "encouraging progress," Chipotle CEO Scott Boatwright said on the company's earnings conference call in late July.
Still, its shaky 2025 means that the stock is trading at a 20% discount from a year ago, even with Thursday's big move. And since Niccol left, shares have lost about 40% of their value.
2. Building the next Yum
Chipotle would be a splashy acquisition for Niccol. More than that, it could create a new restaurant conglomerate, following in the footsteps of Yum Brands, Restaurant Brands International and Roark Capital-backed Inspire Brands.
Multi-brand restaurant companies are more diversified, which can be more attractive to investors. While Starbucks is still a much larger chain than Chipotle, the difference in their categories means that one's poor performance could be offset by growth at the other.
Moreover, Starbucks could help Chipotle grow more quickly in international markets; the burrito chain only has about 100 locations outside of the U.S., while Starbucks has about 23,000.
Other restaurant companies have set a blueprint for that strategy: Yum has leaned on its international experience from KFC and Pizza Hut to launch Taco Bell outside of the U.S. And Restaurant Brands has leaned on Burger King's international expertise to grow Popeyes' international footprint.
3. Potential synergies
With any strategic acquisition, investors hope for synergies that justify the price tag and explain why the deal makes sense. A coffee shop and a burrito restaurant do not have much overlap in ingredients, but there are other potential benefits for both companies and their investors.
Combining Starbucks and Chipotle would open up potential cost cuts, like layoffs for some now-redundant corporate roles.
The two chains also have significant overlap in their U.S. real estate footprints. Roughly 90% of Chipotle restaurants are within one mile of a Starbucks cafe, according to a research note from Stephens analyst Jim Salera published on Thursday. Both companies could benefit from shared real estate development and even operating efficiencies as a result.
But real estate is not the only area where they overlap. Many Starbucks customers also frequent Chipotle restaurants. As one entity, they could leverage that overlap through a combined rewards program, Salera suggested.
4. Alignment in business model
Unlike many big restaurant players, both Chipotle and Starbucks operate most of their U.S. locations, although Starbucks also has thousands of licensed cafes in its home market.
That marks a difference from Chipotle's last strategic owner — McDonald's.
The burger giant, which franchises the vast majority of its U.S. restaurants, made a majority investment in the upstart Mexican-inspired chain in 1998. But by 2006, McDonald's divested its ownership. Its restaurant investments, which also included Boston Market, were labeled a distraction by Wall Street as the Golden Arches struggled.
Before it sold its stake, McDonald's tried to franchise some of Chipotle's restaurants to its own franchisees. But Chipotle's leadership, including founder Steve Ells, pushed back. It was one sign of the cultural misalignment between the two brands.
Chipotle also resisted efforts to make it more similar to McDonald's, declining suggestions like adding drive-thru windows and a breakfast menu.
Why it doesn't make sense:
1. Starbucks' ongoing turnaround
Niccol joined Starbucks more than two years ago to lead a turnaround of the embattled coffee chain. Early signs show that his efforts have improved its U.S. business — but the company is not done yet. Starbucks is aiming to be "the world's greatest customer service company," Niccol wrote in a memo to employees in September, part of a broader push to improve customer loyalty.
Starbucks also has other deals that it is reportedly considering. In September, Reuters reported that the company was considering selling a majority stake in its Japan business. The country has been the chain's largest overseas company-operated market since it formed a joint venture to operate its cafes in China less than a year ago.
Integrating a new chain into the company would be a big distraction for Starbucks at a time when many investors think it should still be focusing on itself.
"Starbucks is still executing its turnaround strategy, and acquiring Chipotle could consume significant senior management time on financing, integration, organizational design, systems, and personnel," BTIG analyst Pete Saleh wrote in a note. "Why introduce another major strategic initiative before demonstrating that Starbucks can deliver sustainable margin recovery?"
2. The price tag
Starbucks' turnaround has also been expensive, which hasn't pleased investors.
The company has been investing heavily in labor, cafe makeovers and store equipment to improve its service and the overall customer experience. Even layoffs and store closures, which will cut costs in the long term, have weighed on its quarterly earnings.
But Chipotle would be an even bigger expense. Even with shares' recent struggles, the company still has a market cap of roughly $42 billion. If Starbucks pursues the acquisition, it would be the biggest-ever restaurant takeover.
Starbucks had about $9.4 billion in debt at the end of June. William Blair analyst Sharon Zackfia estimated that its leverage would balloon to about six times if the company paid a 20% premium and sought to finance the potential deal primarily through debt. An all-stock deal would not weigh on earnings as much, although Zackfia estimates it would still dilute earnings per share by about 10%.
3. Niccol's experience
At Chipotle and Starbucks, Niccol was tasked with turning around struggling restaurants. But his corporate experience so far has not prepared him for a deal of this size.
Merging two colossal restaurant companies would be a massive undertaking, potentially at the expense of the individual success of both brands.
Two-brand restaurant companies often struggle to keep both operating with same-store sales growth, Citi Research analyst Jon Tower wrote in a note to clients. Additionally, he said internal employees usually gravitate toward the brand that is perceived to perform better or offer more career opportunities.
While the size of the deal makes the takeover unique, the restaurant industry already has plenty of examples of mergers and takeovers that did not work for either party.
The latest example comes from Jack in the Box, which bought Del Taco in a $585 million deal in 2022. At the time that the deal was announced, executives said it was "strategically and financially compelling."
During the period that Jack in the Box officially owned Del Taco, shares of the company cratered 73%. The burger chain shuttered dozens of locations as its sales struggled. And Del Taco reported even worse results, including more than a year straight of quarterly same-store sales declines.
More than three years later, Jack in the Box sold Del Taco to a franchisee for about $119 million.`,
    bodyJa: `Starbucks has reportedly explored buying Chipotle Mexican Grill, but investors are split on whether the megadeal would make sense for both companies.
The coffee giant has been working with advisers on a takeover proposal of the fast-casual chain in recent months, the Financial Times reported on Thursday, citing people familiar with the matter.
If Starbucks bought Chipotle, it would combine two of the largest U.S. restaurant chains. With about $31 billion in annual domestic sales, Starbucks is the second-biggest U.S. chain by sales. Chipotle sits in the number seven spot, with more than $11 billion in annual system-wide sales in its home market.
The report sent Chipotle stock up about 6% on Thursday, while shares of Starbucks fell slightly after dropping more sharply earlier in the day. It is not unusual for deal rumors to lower the potential acquirer's value and increase the target's share price, but investor reactions show that a prospective takeover comes with pros and cons for each side of the deal.
To be sure, it is unclear if Starbucks will even pursue the takeover. D.A. Davidson analyst Matt Curtis wrote in a note to clients on Thursday that he views the odds of a deal being completed as "relatively low" — about 20%.
A Starbucks spokesperson told CNBC that the company does not comment on rumors and speculation. Chipotle did not immediately respond to a request for comment from CNBC.
Why it makes sense:
1. The Niccol connection
Starbucks CEO Brian Niccol knows more than a thing or two about Chipotle.
Before joining the coffee company in 2024, he was chief executive of Chipotle for more than six years. He led a turnaround of the burrito chain, helping it bounce back from a series of foodborne illness outbreaks that had turned into a full-blown crisis for the company.
In the wake of Niccol's departure, traffic to Chipotle restaurants fell in 2025, as budget-conscious consumers visited its restaurants less often. These days, the chain looks like it is starting to get back on track, with signs of "encouraging progress," Chipotle CEO Scott Boatwright said on the company's earnings conference call in late July.
Still, its shaky 2025 means that the stock is trading at a 20% discount from a year ago, even with Thursday's big move. And since Niccol left, shares have lost about 40% of their value.
2. Building the next Yum
Chipotle would be a splashy acquisition for Niccol. More than that, it could create a new restaurant conglomerate, following in the footsteps of Yum Brands, Restaurant Brands International and Roark Capital-backed Inspire Brands.
Multi-brand restaurant companies are more diversified, which can be more attractive to investors. While Starbucks is still a much larger chain than Chipotle, the difference in their categories means that one's poor performance could be offset by growth at the other.
Moreover, Starbucks could help Chipotle grow more quickly in international markets; the burrito chain only has about 100 locations outside of the U.S., while Starbucks has about 23,000.
Other restaurant companies have set a blueprint for that strategy: Yum has leaned on its international experience from KFC and Pizza Hut to launch Taco Bell outside of the U.S. And Restaurant Brands has leaned on Burger King's international expertise to grow Popeyes' international footprint.
3. Potential synergies
With any strategic acquisition, investors hope for synergies that justify the price tag and explain why the deal makes sense. A coffee shop and a burrito restaurant do not have much overlap in ingredients, but there are other potential benefits for both companies and their investors.
Combining Starbucks and Chipotle would open up potential cost cuts, like layoffs for some now-redundant corporate roles.
The two chains also have significant overlap in their U.S. real estate footprints. Roughly 90% of Chipotle restaurants are within one mile of a Starbucks cafe, according to a research note from Stephens analyst Jim Salera published on Thursday. Both companies could benefit from shared real estate development and even operating efficiencies as a result.
But real estate is not the only area where they overlap. Many Starbucks customers also frequent Chipotle restaurants. As one entity, they could leverage that overlap through a combined rewards program, Salera suggested.
4. Alignment in business model
Unlike many big restaurant players, both Chipotle and Starbucks operate most of their U.S. locations, although Starbucks also has thousands of licensed cafes in its home market.
That marks a difference from Chipotle's last strategic owner — McDonald's.
The burger giant, which franchises the vast majority of its U.S. restaurants, made a majority investment in the upstart Mexican-inspired chain in 1998. But by 2006, McDonald's divested its ownership. Its restaurant investments, which also included Boston Market, were labeled a distraction by Wall Street as the Golden Arches struggled.
Before it sold its stake, McDonald's tried to franchise some of Chipotle's restaurants to its own franchisees. But Chipotle's leadership, including founder Steve Ells, pushed back. It was one sign of the cultural misalignment between the two brands.
Chipotle also resisted efforts to make it more similar to McDonald's, declining suggestions like adding drive-thru windows and a breakfast menu.
Why it doesn't make sense:
1. Starbucks' ongoing turnaround
Niccol joined Starbucks more than two years ago to lead a turnaround of the embattled coffee chain. Early signs show that his efforts have improved its U.S. business — but the company is not done yet. Starbucks is aiming to be "the world's greatest customer service company," Niccol wrote in a memo to employees in September, part of a broader push to improve customer loyalty.
Starbucks also has other deals that it is reportedly considering. In September, Reuters reported that the company was considering selling a majority stake in its Japan business. The country has been the chain's largest overseas company-operated market since it formed a joint venture to operate its cafes in China less than a year ago.
Integrating a new chain into the company would be a big distraction for Starbucks at a time when many investors think it should still be focusing on itself.
"Starbucks is still executing its turnaround strategy, and acquiring Chipotle could consume significant senior management time on financing, integration, organizational design, systems, and personnel," BTIG analyst Pete Saleh wrote in a note. "Why introduce another major strategic initiative before demonstrating that Starbucks can deliver sustainable margin recovery?"
2. The price tag
Starbucks' turnaround has also been expensive, which hasn't pleased investors.
The company has been investing heavily in labor, cafe makeovers and store equipment to improve its service and the overall customer experience. Even layoffs and store closures, which will cut costs in the long term, have weighed on its quarterly earnings.
But Chipotle would be an even bigger expense. Even with shares' recent struggles, the company still has a market cap of roughly $42 billion. If Starbucks pursues the acquisition, it would be the biggest-ever restaurant takeover.
Starbucks had about $9.4 billion in debt at the end of June. William Blair analyst Sharon Zackfia estimated that its leverage would balloon to about six times if the company paid a 20% premium and sought to finance the potential deal primarily through debt. An all-stock deal would not weigh on earnings as much, although Zackfia estimates it would still dilute earnings per share by about 10%.
3. Niccol's experience
At Chipotle and Starbucks, Niccol was tasked with turning around struggling restaurants. But his corporate experience so far has not prepared him for a deal of this size.
Merging two colossal restaurant companies would be a massive undertaking, potentially at the expense of the individual success of both brands.
Two-brand restaurant companies often struggle to keep both operating with same-store sales growth, Citi Research analyst Jon Tower wrote in a note to clients. Additionally, he said internal employees usually gravitate toward the brand that is perceived to perform better or offer more career opportunities.
While the size of the deal makes the takeover unique, the restaurant industry already has plenty of examples of mergers and takeovers that did not work for either party.
The latest example comes from Jack in the Box, which bought Del Taco in a $585 million deal in 2022. At the time that the deal was announced, executives said it was "strategically and financially compelling."
During the period that Jack in the Box officially owned Del Taco, shares of the company cratered 73%. The burger chain shuttered dozens of locations as its sales struggled. And Del Taco reported even worse results, including more than a year straight of quarterly same-store sales declines.
More than three years later, Jack in the Box sold Del Taco to a franchisee for about $119 million.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/08/starbucks-chipotle-acquisition.html",
    publishedAt: "2026-10-08T20:12:33+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    readTime: 10,
  },
  {
    id: "treasury-yields-are-really-really-high-b-1e7dee75",
    title: "Treasury yields are 'really, really high' but can come down soon, Bessent's new advisor says",
    titleJa: "Treasury yields are 'really, really high' but can come down soon, Bessent's new advisor says",
    summaryJa: "The comments from David Zervos come after the 10-year and 30-year yields marched to 24-year highs in recent days.",
    bodyOriginal: `U.S. Treasury yields are likely to cool off after a surge to multidecade highs that alarmed bond traders and pressured consumer borrowing power, according to David Zervos, the Wall Street veteran who recently took a senior role in the Treasury Department.
"These real yields are really, really high by any historic standard, so I think we have some room to come down in the future," Zervos, a counselor to Treasury Secretary Scott Bessent, said Thursday on CNBC's "Power Lunch."
Zervos' comments come after the 10-year and 30-year U.S. Treasury yields have marched to 24-year highs over recent days. Yields in the global bond market have been on a tear as expectations grow for central banks to hike interest rates and corporations keep borrowing money to build out artificial intelligence infrastructure.
Demand for popular consumer loans such as home mortgages has dropped as borrowing costs have increased alongside Treasury yields.
Zervos said the Federal Reserve and other central banks have reacted to short-term rate increases but said the longer-term expectation of rates and inflation hasn't changed much.
The Fed last month lifted interest rates for the first time in three years. Central bank officials signaled this week that more increases could be coming before the end of the year.
Fed funds futures traders anticipate a more than 82% likelihood that the central bank will next increase borrowing costs at its December meeting, according to CME's FedWatch tool.
Zervos said some of the pressure on global real rates has also come from increased corporate spending on AI. He referred to the technology as "SI," an abbreviation of "super intelligence" — the term President Donald Trump has touted amid mounting local opposition to data centers.
But Zervos, an alumnus of Jefferies and the Fed, characterized these investments as a positive sign for the economy overall and said the resulting impact on yields is a short-term problem.
He said bond yields are likely to come down after the resolution of the energy shock caused by the U.S. war with Iran. Prices for Brent, the global crude benchmark, have climbed about 38% between the beginning of the conflict and Wednesday.
"We're just going to have to live with that for a short period of time," Zervos said.
Zervos said the increase in rates is "not a U.S.-specific phenomenon," listing Germany, France, Italy and Japan as countries seeing similar moves.
"The U.S. has been kind of a fantastic performer in all this vis-a-vis many other developed markets, developed small markets," Zervos said. "It's not a U.S. problem."`,
    bodyJa: `U.S. Treasury yields are likely to cool off after a surge to multidecade highs that alarmed bond traders and pressured consumer borrowing power, according to David Zervos, the Wall Street veteran who recently took a senior role in the Treasury Department.
"These real yields are really, really high by any historic standard, so I think we have some room to come down in the future," Zervos, a counselor to Treasury Secretary Scott Bessent, said Thursday on CNBC's "Power Lunch."
Zervos' comments come after the 10-year and 30-year U.S. Treasury yields have marched to 24-year highs over recent days. Yields in the global bond market have been on a tear as expectations grow for central banks to hike interest rates and corporations keep borrowing money to build out artificial intelligence infrastructure.
Demand for popular consumer loans such as home mortgages has dropped as borrowing costs have increased alongside Treasury yields.
Zervos said the Federal Reserve and other central banks have reacted to short-term rate increases but said the longer-term expectation of rates and inflation hasn't changed much.
The Fed last month lifted interest rates for the first time in three years. Central bank officials signaled this week that more increases could be coming before the end of the year.
Fed funds futures traders anticipate a more than 82% likelihood that the central bank will next increase borrowing costs at its December meeting, according to CME's FedWatch tool.
Zervos said some of the pressure on global real rates has also come from increased corporate spending on AI. He referred to the technology as "SI," an abbreviation of "super intelligence" — the term President Donald Trump has touted amid mounting local opposition to data centers.
But Zervos, an alumnus of Jefferies and the Fed, characterized these investments as a positive sign for the economy overall and said the resulting impact on yields is a short-term problem.
He said bond yields are likely to come down after the resolution of the energy shock caused by the U.S. war with Iran. Prices for Brent, the global crude benchmark, have climbed about 38% between the beginning of the conflict and Wednesday.
"We're just going to have to live with that for a short period of time," Zervos said.
Zervos said the increase in rates is "not a U.S.-specific phenomenon," listing Germany, France, Italy and Japan as countries seeing similar moves.
"The U.S. has been kind of a fantastic performer in all this vis-a-vis many other developed markets, developed small markets," Zervos said. "It's not a U.S. problem."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/08/treasury-yields-david-zervos.html",
    publishedAt: "2026-10-08T20:06:31+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 6,
  },
  {
    id: "adidas-sues-australian-label-white-fox-o-bf3a0440",
    title: "Adidas sues Australian label White Fox over four stripes design",
    titleJa: "Adidas sues Australian label White Fox over four stripes design",
    summaryJa: "The German sportswear brand wants the Sydney-based label to stop selling the clothes and pay damages.",
    bodyOriginal: `Adidas sues Australian label White Fox over four stripes design
- Published
Adidas is suing Australian label White Fox for selling and advertising clothes with a four-striped design, arguing it is "deceptively similar" to the German brand's distinct logo.
The sportswear giant said it had repeatedly asked White Fox to stop selling and promoting the clothes since March, but the Sydney-based company refused.
The fast-fashion online retailer is popular with teenagers and young adults in Australia, the UK and the US, and has relied on billboards, bus advertising and influencers - often university-aged - to grow its profile.
The Australian law firms representing Adidas and White Fox both declined to comment on the case, the first hearing due to begin on Friday.
In Federal Court documents, Adidas states that its three-striped design has a "substantial and valuable reputation" in Australia, where it has been trademarked since 1957.
The company says since at least March, White Fox has been selling and advertising clothes with four parallel stripes of equal width, which it claims is an infringement of Adidas's trademark.
White Fox's designs are "substantially identical with or otherwise deceptively similar" to Adidas, the company claims.
It also argues that White Fox's advertisements for its four-striped clothes and White Fox-branded socks feature people wearing "genuine" Adidas items.
This might lead Australians to think Adidas is associated with White Fox and has approved of the design, the documents claim.
The company says White Fox is "taking advantage" of Adidas's reputation, "drawing an association in the minds of consumers" of the two brands, or at least "sailing close to the wind".
Adidas, which reported €24.8 billion (£21bn; $28bn) in revenue in 2025, is also seeking damages, saying White Fox must pay them the profit from the products plus interest and costs.
Evidence provided by Adidas included side-by-side comparisons of its products with White Fox clothes which include sweatpants and lounge shorts, as well as images of billboards on buses and at bus stops.
In one example, Adidas claimed that an online listing from June 2025 showed a pair of White Fox-branded socks being modelled by someone wearing pink Adidas shoes.
A few days after the court proceedings were lodged last month, the Adidas logo on the shoes were digitally altered to remove one of the stripes, the documents alleged, and a week later, all three stripes were scrubbed from the image.
In 2013, Adidas successfully sued Pacific Brands in Australia for selling shoes with four stripes.
White Fox was launched in 2013 by Georgia and Daniel Contos and is privately-owned by the Greek-Australian couple and Daniel's mother Melina Maceri. It has a growing presence in the US and expanded into the UK market in 2024.
In the 12 months to June 2025, the company generated AU$542m (£286m; $377m) in revenue, a four-fold jump from its 2022 figure of $121m, according to the Australian Financial Review.
Related topics
- Published13 January 2023
- Published10 August 2025`,
    bodyJa: `Adidas sues Australian label White Fox over four stripes design
- Published
Adidas is suing Australian label White Fox for selling and advertising clothes with a four-striped design, arguing it is "deceptively similar" to the German brand's distinct logo.
The sportswear giant said it had repeatedly asked White Fox to stop selling and promoting the clothes since March, but the Sydney-based company refused.
The fast-fashion online retailer is popular with teenagers and young adults in Australia, the UK and the US, and has relied on billboards, bus advertising and influencers - often university-aged - to grow its profile.
The Australian law firms representing Adidas and White Fox both declined to comment on the case, the first hearing due to begin on Friday.
In Federal Court documents, Adidas states that its three-striped design has a "substantial and valuable reputation" in Australia, where it has been trademarked since 1957.
The company says since at least March, White Fox has been selling and advertising clothes with four parallel stripes of equal width, which it claims is an infringement of Adidas's trademark.
White Fox's designs are "substantially identical with or otherwise deceptively similar" to Adidas, the company claims.
It also argues that White Fox's advertisements for its four-striped clothes and White Fox-branded socks feature people wearing "genuine" Adidas items.
This might lead Australians to think Adidas is associated with White Fox and has approved of the design, the documents claim.
The company says White Fox is "taking advantage" of Adidas's reputation, "drawing an association in the minds of consumers" of the two brands, or at least "sailing close to the wind".
Adidas, which reported €24.8 billion (£21bn; $28bn) in revenue in 2025, is also seeking damages, saying White Fox must pay them the profit from the products plus interest and costs.
Evidence provided by Adidas included side-by-side comparisons of its products with White Fox clothes which include sweatpants and lounge shorts, as well as images of billboards on buses and at bus stops.
In one example, Adidas claimed that an online listing from June 2025 showed a pair of White Fox-branded socks being modelled by someone wearing pink Adidas shoes.
A few days after the court proceedings were lodged last month, the Adidas logo on the shoes were digitally altered to remove one of the stripes, the documents alleged, and a week later, all three stripes were scrubbed from the image.
In 2013, Adidas successfully sued Pacific Brands in Australia for selling shoes with four stripes.
White Fox was launched in 2013 by Georgia and Daniel Contos and is privately-owned by the Greek-Australian couple and Daniel's mother Melina Maceri. It has a growing presence in the US and expanded into the UK market in 2024.
In the 12 months to June 2025, the company generated AU$542m (£286m; $377m) in revenue, a four-fold jump from its 2022 figure of $121m, according to the Australian Financial Review.
Related topics
- Published13 January 2023
- Published10 August 2025`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c9e8ld448km8o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-08T18:17:28+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/690e/live/fcec4c60-c33a-11f1-a64c-550be9e3c66b.jpg",
    readTime: 8,
  },
  {
    id: "trump-says-u-s-will-not-attack-iran-befo-dc719c8d",
    title: "Trump says U.S. will not attack Iran before midterm election",
    titleJa: "Trump says U.S. will not attack Iran before midterm election",
    summaryJa: "Trump said talks with Tehran were “productive” as the Iran war pushes oil and gas prices higher and support for the conflict falls.",
    bodyOriginal: `President Donald Trump said Thursday that the U.S. will not attack Iran before the Nov. 3 midterm election, explicitly tying the timing of potential further military action to the domestic political calendar.
"We will not be attacking Iran at any time prior to the Midterm Elections," Trump said in a post on Truth Social, adding that the U.S. was having "productive discussions" with Tehran.
Trump's declaration came after he told reporters late Wednesday that his administration was considering renewed strikes against Tehran before the election, helping send oil prices higher amid fears of further escalation. Brent crude rose more than 4% Thursday to above $104 a barrel.
Trump said the U.S. naval blockade of Iran would remain in place and reiterated that Tehran would not be allowed to obtain a nuclear weapon.
It's a shift from his posture less than a day ago. At a campaign rally Wednesday night, Trump said a deal with Iran was "not really something that I wanted to do."
The more diplomatic tone comes as voters are already casting midterm ballots and public support for the war has fallen. Just 31% of Americans supported U.S. military action against Iran in an August Reuters/Ipsos poll, down from 37% in March, while 83% expected the conflict to be prolonged.
The war has helped push fuel costs higher, compounding Republicans' vulnerability on affordability as they fight to retain control of Congress. Poll after poll has ranked the cost of living among voters' top concerns heading into the Nov. 3 election.
Gas prices have climbed roughly 40% from a year ago, according to AAA data. The national average stood at $4.36 a gallon Thursday, up from $2.98 just before war began in late February.
The political fallout is showing up on the campaign trail. Numerous GOP candidates in competitive congressional races have tried to distance themselves from Trump, often on the Iran war.
Inside the White House, the election calendar has reportedly loomed over the administration's Iran strategy for weeks. Reuters reported in September that top Trump aides were pushing to keep the war contained through the midterms to limit Republican losses, while leaving open heavier U.S. strikes after votes are tallied.
Trump's latest statement does just that. Meanwhile, the U.S. is sending roughly 9,000 sailors and Marines and a third aircraft carrier to the region, a buildup that could put three U.S. carriers in the Middle East by late October, the Associated Press reported last week.
The president also claimed Thursday that 22 million barrels of oil moved through the Strait of Hormuz overnight, with none coming from or going to Iran. CNBC has not independently verified that figure.
Kpler data show about 11.3 million barrels per day of crude oil and petroleum products exited the strait during the week ended Tuesday, while total oil flows from the region stood at 20.4 million barrels per day.
– CNBC's Spencer Kimball contributed to this report`,
    bodyJa: `President Donald Trump said Thursday that the U.S. will not attack Iran before the Nov. 3 midterm election, explicitly tying the timing of potential further military action to the domestic political calendar.
"We will not be attacking Iran at any time prior to the Midterm Elections," Trump said in a post on Truth Social, adding that the U.S. was having "productive discussions" with Tehran.
Trump's declaration came after he told reporters late Wednesday that his administration was considering renewed strikes against Tehran before the election, helping send oil prices higher amid fears of further escalation. Brent crude rose more than 4% Thursday to above $104 a barrel.
Trump said the U.S. naval blockade of Iran would remain in place and reiterated that Tehran would not be allowed to obtain a nuclear weapon.
It's a shift from his posture less than a day ago. At a campaign rally Wednesday night, Trump said a deal with Iran was "not really something that I wanted to do."
The more diplomatic tone comes as voters are already casting midterm ballots and public support for the war has fallen. Just 31% of Americans supported U.S. military action against Iran in an August Reuters/Ipsos poll, down from 37% in March, while 83% expected the conflict to be prolonged.
The war has helped push fuel costs higher, compounding Republicans' vulnerability on affordability as they fight to retain control of Congress. Poll after poll has ranked the cost of living among voters' top concerns heading into the Nov. 3 election.
Gas prices have climbed roughly 40% from a year ago, according to AAA data. The national average stood at $4.36 a gallon Thursday, up from $2.98 just before war began in late February.
The political fallout is showing up on the campaign trail. Numerous GOP candidates in competitive congressional races have tried to distance themselves from Trump, often on the Iran war.
Inside the White House, the election calendar has reportedly loomed over the administration's Iran strategy for weeks. Reuters reported in September that top Trump aides were pushing to keep the war contained through the midterms to limit Republican losses, while leaving open heavier U.S. strikes after votes are tallied.
Trump's latest statement does just that. Meanwhile, the U.S. is sending roughly 9,000 sailors and Marines and a third aircraft carrier to the region, a buildup that could put three U.S. carriers in the Middle East by late October, the Associated Press reported last week.
The president also claimed Thursday that 22 million barrels of oil moved through the Strait of Hormuz overnight, with none coming from or going to Iran. CNBC has not independently verified that figure.
Kpler data show about 11.3 million barrels per day of crude oil and petroleum products exited the strait during the week ended Tuesday, while total oil flows from the region stood at 20.4 million barrels per day.
– CNBC's Spencer Kimball contributed to this report`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/08/iran-war-trump-midterm-election.html",
    publishedAt: "2026-10-08T17:41:20+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 7,
  },
  {
    id: "inflation-on-many-everyday-items-was-ent-d6bb8fc8",
    title: "Inflation on many everyday items was entirely due to tariffs, NY Fed says",
    titleJa: "Inflation on many everyday items was entirely due to tariffs, NY Fed says",
    summaryJa: "Tariffs added 2.9 percentage points to inflation in 67 categories of goods by February 2026, researchers at the New York Federal Reserve found.",
    bodyOriginal: `The cost of many everyday items would have declined last year and early this year without President Donald Trump's tariffs, according to the New York Federal Reserve.
The cost of 67 categories of goods was 2.9 percentage points higher as of February thanks to tariffs, according to a paper from a team of researchers at the central bank's New York arm.
Without the levies, the team found that prices for the products they studied would have pulled back by almost 1%.
The New York Fed's report offers the clearest evidence yet of the impact of Trump's tariffs — a core policy of his most recent campaign and second term in the White House — on consumers' wallets. Economists had widely expected his levies to push up prices, though the precise effects had been hard to estimate due to the changing nature of the policy and the lack of transparency on how companies set their prices.
The researchers didn't say which 67 types of goods they evaluated.
For each percentage point increase in the average tariff, the team said that consumer goods prices were higher by roughly a quarter of a percent a year later.
Annual price growth in the dozens of goods they tracked peaked at the start of 2026, according to the report. But consumers are still expected to pay elevated prices into 2027 as a result of the policy, it said.
Roughly two-thirds of the tariff-related price impact has directly come from the levies themselves, according to the New York Fed's report. The remaining increase was driven by knock-on effects, such as U.S.-based companies that use imported parts and materials in their products.
"Tariffs have a larger and more drawn-out impact on consumer prices than the direct effect alone would suggest," the study's three authors, Mary Amiti, Sebastian Heise and David Weinstein, wrote.
Trump argued that companies could absorb the increased cost from tariffs rather than pass them down to shoppers in the form of price hikes. The New York Fed team said that around 26% of last year's tariff increases ended up trickling into higher prices.
The Supreme Court in February struck down many of Trump's tariffs, resulting in billions of dollars in refunds to retailers. The White House has vowed to push forward with levies through alternative measures, and products imported from many countries now often face tariffs of about 10%. In many cases, that is significantly less than what they were under the earlier round of tariffs.`,
    bodyJa: `The cost of many everyday items would have declined last year and early this year without President Donald Trump's tariffs, according to the New York Federal Reserve.
The cost of 67 categories of goods was 2.9 percentage points higher as of February thanks to tariffs, according to a paper from a team of researchers at the central bank's New York arm.
Without the levies, the team found that prices for the products they studied would have pulled back by almost 1%.
The New York Fed's report offers the clearest evidence yet of the impact of Trump's tariffs — a core policy of his most recent campaign and second term in the White House — on consumers' wallets. Economists had widely expected his levies to push up prices, though the precise effects had been hard to estimate due to the changing nature of the policy and the lack of transparency on how companies set their prices.
The researchers didn't say which 67 types of goods they evaluated.
For each percentage point increase in the average tariff, the team said that consumer goods prices were higher by roughly a quarter of a percent a year later.
Annual price growth in the dozens of goods they tracked peaked at the start of 2026, according to the report. But consumers are still expected to pay elevated prices into 2027 as a result of the policy, it said.
Roughly two-thirds of the tariff-related price impact has directly come from the levies themselves, according to the New York Fed's report. The remaining increase was driven by knock-on effects, such as U.S.-based companies that use imported parts and materials in their products.
"Tariffs have a larger and more drawn-out impact on consumer prices than the direct effect alone would suggest," the study's three authors, Mary Amiti, Sebastian Heise and David Weinstein, wrote.
Trump argued that companies could absorb the increased cost from tariffs rather than pass them down to shoppers in the form of price hikes. The New York Fed team said that around 26% of last year's tariff increases ended up trickling into higher prices.
The Supreme Court in February struck down many of Trump's tariffs, resulting in billions of dollars in refunds to retailers. The White House has vowed to push forward with levies through alternative measures, and products imported from many countries now often face tariffs of about 10%. In many cases, that is significantly less than what they were under the earlier round of tariffs.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/08/inflation-tariffs-trump-fed-consumer-goods.html",
    publishedAt: "2026-10-08T13:08:57+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 6,
  },
  {
    id: "amazon-overhauls-aging-devices-lineup-wi-78ce6c17",
    title: "Amazon overhauls aging devices lineup with higher priced Alexa tablet, dumping the budget Fire",
    titleJa: "Amazon overhauls aging devices lineup with higher priced Alexa tablet, dumping the budget Fire",
    summaryJa: "The company said the Alexa tablet's improved speed and performance, artificial intelligence features and upgraded design warrant a higher price tag.",
    bodyOriginal: `Amazon on Thursday debuted a set of new, pricier Alexa tablets and said it's ditching its budget-friendly Fire lineup, marking a significant shift in the e-commerce juggernaut's devices strategy.
The company unveiled 8-inch, 11-inch and 12-inch models, which start at $230 and run up to $550. All devices are available for preorder on Thursday and will begin shipping Oct. 14.
Amazon has historically sold its devices at or near the cost of manufacturing them, partly to undercut competitors with extremely cheap prices, but also with the goal of promoting its other products and services. It's hoped that for every $80 Echo smart speaker it sells, users will purchase movies, audiobook subscriptions or items from its sprawling webstore, which tend to have higher margins.
The company has recently taken steps to make more money from its devices business under CEO Andy Jassy, who succeeded founder Jeff Bezos in 2021. Last year, it introduced pricier versions of its Echo smart speakers and began charging non-Prime members a subscription for Alexa+, the souped-up version of its digital assistant.
The $550 Alexa Tablet 12 Pro costs more than double the price of the $155 Fire HD 10, Amazon's base model, and puts it more in line with Apple's iPad, which runs from $449 to $1199.
The launch comes as Amazon and other devicemakers are grappling with a historic surge in memory prices. Amazon in August boosted prices on Echos, Kindles, Fire TVs and other hardware, citing the memory crunch. And earlier this year, Apple raised its prices on MacBooks and iPads, while Nintendo hiked the price of its Switch 2 console.
Amazon denied that rising memory costs played a role in its decision to charge more for the Alexa tablet. But Panos Panay, the company's devices boss, acknowledged that the shortage made it "quite tricky" to build a premium tablet at a reasonable price without making any "trade-offs."
"I think the team did a good job designing without making that trade," Panay told CNBC in an interview. "They gave you the full craftsmanship of a product, but are able to keep it at that price point."
The company said the Alexa tablet's improved speed and performance, artificial intelligence features and upgraded design warrant a higher price tag and put the devices on par with "the best tablets on the market."
Amazon added a sleeker, sturdier aluminum backing, higher resolution display and faster processors. On the Alexa Tablet 12 Pro, the highest-end model, it incorporated "Nanomatte" display technology that was developed in partnership with Corning to "dramatically reduce screen glare."
One of the most notable upgrades is that all of the devices run Google's Android operating system, a major departure from earlier models, which relied on a custom Android version dubbed Fire OS and used Amazon's own app store, limiting the number of apps that were available.
It's also the first time Amazon has attached a set of devices to the Alexa brand, the company's automated assistant first launched in 2014 via the Echo smart speaker. Alexa is front and center in the new tablets, via a "dynamic tab" on the home screen that offers recommendations and lets users quickly pick up where they left off reading or watching a TV show.
The company also introduced a new feature called "On-Screen Intelligence," where users can ask Alexa to look at what's on their screen and make suggestions or take actions.
In a demo, Panay showed how users could watch a TikTok clip of someone cooking on a grill and ask Alexa to shop for a burger press used in the video. Users can also pull up a game schedule and add every date to their calendar, Amazon said.
"She'll do the homework, and if things work out, she's gonna bring up a shopping list where I can just hit buy now," Panos said.
Amazon said it will continue to support the Fire lineup and consumers can continue using their devices as they do today, but it is no longer manufacturing new units. The Fire lineup includes a 10-inch and 8-inch model, as well as two versions targeted for kids.`,
    bodyJa: `Amazon on Thursday debuted a set of new, pricier Alexa tablets and said it's ditching its budget-friendly Fire lineup, marking a significant shift in the e-commerce juggernaut's devices strategy.
The company unveiled 8-inch, 11-inch and 12-inch models, which start at $230 and run up to $550. All devices are available for preorder on Thursday and will begin shipping Oct. 14.
Amazon has historically sold its devices at or near the cost of manufacturing them, partly to undercut competitors with extremely cheap prices, but also with the goal of promoting its other products and services. It's hoped that for every $80 Echo smart speaker it sells, users will purchase movies, audiobook subscriptions or items from its sprawling webstore, which tend to have higher margins.
The company has recently taken steps to make more money from its devices business under CEO Andy Jassy, who succeeded founder Jeff Bezos in 2021. Last year, it introduced pricier versions of its Echo smart speakers and began charging non-Prime members a subscription for Alexa+, the souped-up version of its digital assistant.
The $550 Alexa Tablet 12 Pro costs more than double the price of the $155 Fire HD 10, Amazon's base model, and puts it more in line with Apple's iPad, which runs from $449 to $1199.
The launch comes as Amazon and other devicemakers are grappling with a historic surge in memory prices. Amazon in August boosted prices on Echos, Kindles, Fire TVs and other hardware, citing the memory crunch. And earlier this year, Apple raised its prices on MacBooks and iPads, while Nintendo hiked the price of its Switch 2 console.
Amazon denied that rising memory costs played a role in its decision to charge more for the Alexa tablet. But Panos Panay, the company's devices boss, acknowledged that the shortage made it "quite tricky" to build a premium tablet at a reasonable price without making any "trade-offs."
"I think the team did a good job designing without making that trade," Panay told CNBC in an interview. "They gave you the full craftsmanship of a product, but are able to keep it at that price point."
The company said the Alexa tablet's improved speed and performance, artificial intelligence features and upgraded design warrant a higher price tag and put the devices on par with "the best tablets on the market."
Amazon added a sleeker, sturdier aluminum backing, higher resolution display and faster processors. On the Alexa Tablet 12 Pro, the highest-end model, it incorporated "Nanomatte" display technology that was developed in partnership with Corning to "dramatically reduce screen glare."
One of the most notable upgrades is that all of the devices run Google's Android operating system, a major departure from earlier models, which relied on a custom Android version dubbed Fire OS and used Amazon's own app store, limiting the number of apps that were available.
It's also the first time Amazon has attached a set of devices to the Alexa brand, the company's automated assistant first launched in 2014 via the Echo smart speaker. Alexa is front and center in the new tablets, via a "dynamic tab" on the home screen that offers recommendations and lets users quickly pick up where they left off reading or watching a TV show.
The company also introduced a new feature called "On-Screen Intelligence," where users can ask Alexa to look at what's on their screen and make suggestions or take actions.
In a demo, Panay showed how users could watch a TikTok clip of someone cooking on a grill and ask Alexa to shop for a burger press used in the video. Users can also pull up a game schedule and add every date to their calendar, Amazon said.
"She'll do the homework, and if things work out, she's gonna bring up a shopping list where I can just hit buy now," Panos said.
Amazon said it will continue to support the Fire lineup and consumers can continue using their devices as they do today, but it is no longer manufacturing new units. The Fire lineup includes a 10-inch and 8-inch model, as well as two versions targeted for kids.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/08/amazon-alexa-tablet-release.html",
    publishedAt: "2026-10-08T13:02:03+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "skydance-s-david-ellison-tells-cnbc-comb-1b5c463f",
    title: "Skydance's David Ellison tells CNBC combined company is 'positioned to win in every single vertical'",
    titleJa: "Skydance's David Ellison tells CNBC combined company is 'positioned to win in every single vertical'",
    summaryJa: "Skydance includes two film studios, the CBS broadcast network, a sprawling pay TV portfolio and streaming services Paramount+ and HBO Max.",
    bodyOriginal: `Skydance co-CEO David Ellison told CNBC on Thursday — days after Paramount's acquisition of Warner Bros. Discovery officially closed — that the combined company is "positioned to win in every single vertical that we operate in."
Skydance includes film studios Paramount and Warner Bros.; the CBS broadcast network; a sprawling pay TV portfolio that includes CNN, TNT, MTV and BET; and streaming services Paramount+ and HBO Max.
"By combining Paramount and Warner Bros, we have the greatest content engine," Ellison said, noting blockbuster intellectual property and a strong sports portfolio. "You're immediately getting to scale in streaming between HBO Max and Paramount+, over 200 million global streaming subscribers. ... Not to mention the Olympics internationally, and an incredibly profitable linear portfolio anchored by CBS."
Tune in at 8:30 a.m. ET as Skydance co-CEOs David Ellison and Ynon Kreiz join CNBC TV. Watch in real time on CNBC+ or the CNBC Pro stream.
Ellison and co-CEO Ynon Kreiz plan to split executive duties, with Ellison focusing on the company's creative vision, technological innovations and long-term strategy while Kreiz leads the integration of the two companies and handles day-to-day management and operations.
"We have a unique opportunity to build the next generation media and entertainment global company that is powered by creativity and technology," Kreiz said. "We have the assets that David mentioned. We have the capability. We have the people, and all of this is happening at the point in time when the industry is at an inflection point, where it's getting harder and harder to reach the consumer and aggregate fans."
Kreiz is a 30-year veteran of the media space with a reputation as a turnaround man. Ellison, who is also Skydance chairman, has spent more than 15 years as an on-set producer and has said he's looking to position Skydance as a creative hub for filmmakers.
The executives will have a tall task at the helm of a media behemoth: As part of a settlement with a group of state attorneys general who sued to block the acquisition over antitrust concerns, Skydance has agreed to release at least 30 films into theaters annually in 2027 and 2028 and at least 32 films annually in 2028, 2030 and 2031.
Currently, the combined entity has 35 films scheduled for release next year, according to data from Rentrak.
Ellison has also said he plans to merge the Paramount+ and HBO Max streaming services.
This story is developing. Please check back for updates.`,
    bodyJa: `Skydance co-CEO David Ellison told CNBC on Thursday — days after Paramount's acquisition of Warner Bros. Discovery officially closed — that the combined company is "positioned to win in every single vertical that we operate in."
Skydance includes film studios Paramount and Warner Bros.; the CBS broadcast network; a sprawling pay TV portfolio that includes CNN, TNT, MTV and BET; and streaming services Paramount+ and HBO Max.
"By combining Paramount and Warner Bros, we have the greatest content engine," Ellison said, noting blockbuster intellectual property and a strong sports portfolio. "You're immediately getting to scale in streaming between HBO Max and Paramount+, over 200 million global streaming subscribers. ... Not to mention the Olympics internationally, and an incredibly profitable linear portfolio anchored by CBS."
Tune in at 8:30 a.m. ET as Skydance co-CEOs David Ellison and Ynon Kreiz join CNBC TV. Watch in real time on CNBC+ or the CNBC Pro stream.
Ellison and co-CEO Ynon Kreiz plan to split executive duties, with Ellison focusing on the company's creative vision, technological innovations and long-term strategy while Kreiz leads the integration of the two companies and handles day-to-day management and operations.
"We have a unique opportunity to build the next generation media and entertainment global company that is powered by creativity and technology," Kreiz said. "We have the assets that David mentioned. We have the capability. We have the people, and all of this is happening at the point in time when the industry is at an inflection point, where it's getting harder and harder to reach the consumer and aggregate fans."
Kreiz is a 30-year veteran of the media space with a reputation as a turnaround man. Ellison, who is also Skydance chairman, has spent more than 15 years as an on-set producer and has said he's looking to position Skydance as a creative hub for filmmakers.
The executives will have a tall task at the helm of a media behemoth: As part of a settlement with a group of state attorneys general who sued to block the acquisition over antitrust concerns, Skydance has agreed to release at least 30 films into theaters annually in 2027 and 2028 and at least 32 films annually in 2028, 2030 and 2031.
Currently, the combined entity has 35 films scheduled for release next year, according to data from Rentrak.
Ellison has also said he plans to merge the Paramount+ and HBO Max streaming services.
This story is developing. Please check back for updates.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/08/skydance-co-ceos-ellison-kreiz.html",
    publishedAt: "2026-10-08T12:56:59+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 6,
  },
  {
    id: "trump-s-former-defense-secretary-sees-no-544c2a0f",
    title: "Trump's former defense secretary sees no end in sight for Iran war — to the benefit of America's 'greatest adversary'",
    titleJa: "Trump's former defense secretary sees no end in sight for Iran war — to the benefit of America's 'greatest adversary'",
    summaryJa: "Mark Esper, who served as U.S. Secretary of Defense during Trump's first presidential term, said he did not see the conflict ending in the foreseeable future.",
    bodyOriginal: `The U.S.-Iran war could drag on for years, putting America at risk of overlooking China's rise to power, according to President Donald Trump's former defense secretary.
During a panel discussion at LSEG and Eurasia Group's GZERO Summit in London, Mark Esper said on Thursday he saw the conflict continuing "well into 2027," with a possibility that it could be handed to the next U.S. administration in three years' time.
"At some point, we will reach a point where maybe both sides are willing to come to the table and find a negotiated settlement, but the challenge for president Trump will be he's going to have to get a deal that returns the Strait of Hormuz to the status quo, which is going to be really hard, and is a deal that's better than what [former President Barack Obama] got out of the JCPOA, and I think that's going to be very difficult too," he said.
"So the question is, will he be willing to make that deal and live with the consequences or how the critics judge that deal? And so you can see another path where it gets handed off to the next administration in 2029."
Speaking to CNBC on the sidelines of the event, Esper said he does not see an end to the war "in the foreseeable future."
"I think it continues at this type of pace where we see the American blockade continue, we see occasional outbursts from either side, and it drags along," he said.
The war, now in its eighth month, has reached an impasse, with Trump saying Wednesday that making a deal with Tehran "isn't really something that I want to do." According to reports, U.S. officials are considering a resumption of large-scale military operations in the coming weeks.
Esper, who served as U.S. Secretary of Defense during Trump's first presidential term from July 2019 to November 2020, said he had long been an advocate for "the economic strangulation" of Iran. But he said such a policy was vulnerable to impatience in Washington.
"The challenge is that policy requires time, discipline and patience, and those aren't things that the states are typically good at doing," he said. "So, if allowed to, I think it could have an impact. It doesn't mean it'll actually bring them back to the table, which would be my end, but it's the least worst option at this point in time."
Over the summer, Trump announced an intensification of sanctions and economic restrictions on Iran, a strategy he labeled "Economic D-Day." The administration has since touted the success of its economic warfare strategies.
Advantage China
But Esper warned Thursday that with attention in Washington focused on the Iran war, America's "greatest adversary" was building up its capabilities.
"China is our greatest adversary," he said. "It's the lurking threat out there that we're not paying attention to because we're so focused, and have been for 20 plus years now, on the Middle East, and Europe is focused on Russia."
Beijing, he said, was continuing to build economic, technological and diplomatic power, having executed "the largest military buildup in history."
"We're just not paying enough attention to the Chinese," Esper told CNBC. "They've told us by 2049 they want to dominate the Indo-Pacific region and the world for all intents and purposes. They want to be able to call the shots and dictate global governance."
China had been working to this end for at least 30 years, he said.
"Certainly, since their entry into the WTO, they've used the world trading system against us to build their own economic and military power, and they have a game plan," Esper said.
He highlighted Beijing's domination of certain industries and goods, such as electric vehicles, rare earths, solar panels and critical materials. This, he said, had been achieved thanks to the Chinese government's ability to "consolidate control" and direct the country's economy in a certain direction.
"They have a game plan, and they're and they're executing it," Esper said.
"I would focus our efforts on China, and I would do it in partnership with our European and Asian allies, and that would include not just military [alliances], but diplomatic, economic and technological as well."
CNBC reached out to the U.S. and Chinese governments for comment.`,
    bodyJa: `The U.S.-Iran war could drag on for years, putting America at risk of overlooking China's rise to power, according to President Donald Trump's former defense secretary.
During a panel discussion at LSEG and Eurasia Group's GZERO Summit in London, Mark Esper said on Thursday he saw the conflict continuing "well into 2027," with a possibility that it could be handed to the next U.S. administration in three years' time.
"At some point, we will reach a point where maybe both sides are willing to come to the table and find a negotiated settlement, but the challenge for president Trump will be he's going to have to get a deal that returns the Strait of Hormuz to the status quo, which is going to be really hard, and is a deal that's better than what [former President Barack Obama] got out of the JCPOA, and I think that's going to be very difficult too," he said.
"So the question is, will he be willing to make that deal and live with the consequences or how the critics judge that deal? And so you can see another path where it gets handed off to the next administration in 2029."
Speaking to CNBC on the sidelines of the event, Esper said he does not see an end to the war "in the foreseeable future."
"I think it continues at this type of pace where we see the American blockade continue, we see occasional outbursts from either side, and it drags along," he said.
The war, now in its eighth month, has reached an impasse, with Trump saying Wednesday that making a deal with Tehran "isn't really something that I want to do." According to reports, U.S. officials are considering a resumption of large-scale military operations in the coming weeks.
Esper, who served as U.S. Secretary of Defense during Trump's first presidential term from July 2019 to November 2020, said he had long been an advocate for "the economic strangulation" of Iran. But he said such a policy was vulnerable to impatience in Washington.
"The challenge is that policy requires time, discipline and patience, and those aren't things that the states are typically good at doing," he said. "So, if allowed to, I think it could have an impact. It doesn't mean it'll actually bring them back to the table, which would be my end, but it's the least worst option at this point in time."
Over the summer, Trump announced an intensification of sanctions and economic restrictions on Iran, a strategy he labeled "Economic D-Day." The administration has since touted the success of its economic warfare strategies.
Advantage China
But Esper warned Thursday that with attention in Washington focused on the Iran war, America's "greatest adversary" was building up its capabilities.
"China is our greatest adversary," he said. "It's the lurking threat out there that we're not paying attention to because we're so focused, and have been for 20 plus years now, on the Middle East, and Europe is focused on Russia."
Beijing, he said, was continuing to build economic, technological and diplomatic power, having executed "the largest military buildup in history."
"We're just not paying enough attention to the Chinese," Esper told CNBC. "They've told us by 2049 they want to dominate the Indo-Pacific region and the world for all intents and purposes. They want to be able to call the shots and dictate global governance."
China had been working to this end for at least 30 years, he said.
"Certainly, since their entry into the WTO, they've used the world trading system against us to build their own economic and military power, and they have a game plan," Esper said.
He highlighted Beijing's domination of certain industries and goods, such as electric vehicles, rare earths, solar panels and critical materials. This, he said, had been achieved thanks to the Chinese government's ability to "consolidate control" and direct the country's economy in a certain direction.
"They have a game plan, and they're and they're executing it," Esper said.
"I would focus our efforts on China, and I would do it in partnership with our European and Asian allies, and that would include not just military [alliances], but diplomatic, economic and technological as well."
CNBC reached out to the U.S. and Chinese governments for comment.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/08/trump-iran-war-mark-esper.html",
    publishedAt: "2026-10-08T12:50:51+00:00",
    category: "貿易",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
    readTime: 10,
  },
  {
    id: "chrysler-building-to-get-its-crown-resto-5b8854b8",
    title: "Chrysler Building to get its crown restored after being sold",
    titleJa: "Chrysler Building to get its crown restored after being sold",
    summaryJa: "The distinctive Manhattan skyescraper will undergo a major renovation and provide a new supply of offices.",
    bodyOriginal: `Chrysler Building to get its crown restored after being sold
- Published
The Chrysler Building, one of the most distinctive high-rises in Manhattan's skyline, will undergo a major renovation as part of a multi-million-dollar sale deal.
The skyscraper, opened in New York nearly 100 years ago, will see its Art Deco crown polished and restored during a refurbishment that will also involve the restoration of the building's 77-storey façade.
Developer Tishman Speyer has taken over the lease from the Cooper Union for the Advancement of Science and Art, a private college.
Tishman Speyer and its partners will invest $235m (£178m) in the project, as part of which it will upgrade the 61st floor, which is home to huge eagle gargoyles and will also feature an "upscale" lounge.
The developer is planning to use most of the building, which is close to Grand Central railway station, for office space. It is following what it calls a "prebuild approach" that will allow firms to move into their new premises quickly.
Tishman Speyer explained that the area "has one of the lowest office availability rates in Manhattan", adding: "Construction of new office supply in the neighbourhood has been virtually nonexistent for decades."
The renovation will include internal work, such as upgrades to the building's mechanical, elevator, electrical and air handling systems.
At 1,046ft (319m), the Chrysler Building was once the world's tallest building - before being usurped less than a year later by the nearby Empire State Building.
Financed by Walter Chrysler, the motor magnate, the skyscraper's construction began in 1928 and was completed two years later.
Architect William Van Alen modelled the eagle gargoyles on hood ornaments found on the 1929 Chrysler car.
The Cooper Union college, whose alumni include inventor Thomas Edison, has owned the land on which the Chrysler Building stands since 1902.
The land was bequeathed to it by the children of Peter Cooper, a manufacturer and industrialist who founded the college in 1859.
As part of the deal, Tishman Speyer will make ground lease payments to the Cooper Union which the college wants to use to finance "a bold plan to restore full-tuition scholarships for all undergraduates".
Cooper Union's president Steven McLaughlin, said: "The significance of this agreement is ultimately about what it makes possible for generations of Cooper Union students."`,
    bodyJa: `Chrysler Building to get its crown restored after being sold
- Published
The Chrysler Building, one of the most distinctive high-rises in Manhattan's skyline, will undergo a major renovation as part of a multi-million-dollar sale deal.
The skyscraper, opened in New York nearly 100 years ago, will see its Art Deco crown polished and restored during a refurbishment that will also involve the restoration of the building's 77-storey façade.
Developer Tishman Speyer has taken over the lease from the Cooper Union for the Advancement of Science and Art, a private college.
Tishman Speyer and its partners will invest $235m (£178m) in the project, as part of which it will upgrade the 61st floor, which is home to huge eagle gargoyles and will also feature an "upscale" lounge.
The developer is planning to use most of the building, which is close to Grand Central railway station, for office space. It is following what it calls a "prebuild approach" that will allow firms to move into their new premises quickly.
Tishman Speyer explained that the area "has one of the lowest office availability rates in Manhattan", adding: "Construction of new office supply in the neighbourhood has been virtually nonexistent for decades."
The renovation will include internal work, such as upgrades to the building's mechanical, elevator, electrical and air handling systems.
At 1,046ft (319m), the Chrysler Building was once the world's tallest building - before being usurped less than a year later by the nearby Empire State Building.
Financed by Walter Chrysler, the motor magnate, the skyscraper's construction began in 1928 and was completed two years later.
Architect William Van Alen modelled the eagle gargoyles on hood ornaments found on the 1929 Chrysler car.
The Cooper Union college, whose alumni include inventor Thomas Edison, has owned the land on which the Chrysler Building stands since 1902.
The land was bequeathed to it by the children of Peter Cooper, a manufacturer and industrialist who founded the college in 1859.
As part of the deal, Tishman Speyer will make ground lease payments to the Cooper Union which the college wants to use to finance "a bold plan to restore full-tuition scholarships for all undergraduates".
Cooper Union's president Steven McLaughlin, said: "The significance of this agreement is ultimately about what it makes possible for generations of Cooper Union students."`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c8g47z3r4dzvo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-08T12:49:12+00:00",
    category: "自動車",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/5125/live/1926f250-c30d-11f1-babe-4199b0e7ccea.jpg",
    readTime: 6,
  },
  {
    id: "bid-to-run-new-trains-on-west-coast-main-5052bb3e",
    title: "Bid to run new trains on West Coast Mainline refused",
    titleJa: "Bid to run new trains on West Coast Mainline refused",
    summaryJa: "Plans for more trains would “likely increase delays and cancelled trains\", the rail regulator says.",
    bodyOriginal: `Bid to run new trains on West Coast Mainline refused
- Published
Plans for new train services between London and Wrexham, Rochdale and Blackpool have been rejected by the Office of Rail and Road (ORR).
The proposal to add more trains on the West Coast Main Line would "likely increase delays and cancelled trains for passengers", the regulator said.
It rejected Wrexham, Shropshire and Midlands Railway's application for four daily Wrexham to London Euston return services, as well as Lumo's proposal for up to four return services between Rochdale and Euston on weekdays and Saturdays, and three on Sundays.
Avanti West Coast's plans for additional services between Blackpool and Euston were also denied by the ORR.
The regulator said: "Gaps in the current timetable need to provide important space for trains to recover when disruption occurs, minimising delays to passengers.
"ORR concluded that adding more services into these windows in the timetable for recovery would reduce that resilience, increasing the risk of disruption spreading to other services and affecting more passengers."
'Heavily used'
Stephanie Tobyn, from the ORR, said: "New services, destinations and greater choice can bring real benefits for passengers and communities.
"But the West Coast Main Line is already under significant pressure, with performance reflecting limited resilience on a heavily used part of the rail network.
"Our detailed analysis has shown that adding more trains to the current timetable would reduce the ability to recover when disruption occurs, increasing the risk of delays spreading and making reliability of the network worse for all passengers."
The ORR said its assessment and decision came after similar applications were rejected in 2025.
Get in touch
Tell us which stories we should cover in Lancashire
Listen to the best of BBC Radio Lancashire on Sounds and follow BBC Lancashire on Facebook, external, X, external and Instagram, external. You can also send story ideas via Whatsapp to 0808 100 2230.
- Published17 May 2024
- Published18 January
- Published3 March
- Published1 day ago
- Published9 September
- Published3 January`,
    bodyJa: `Bid to run new trains on West Coast Mainline refused
- Published
Plans for new train services between London and Wrexham, Rochdale and Blackpool have been rejected by the Office of Rail and Road (ORR).
The proposal to add more trains on the West Coast Main Line would "likely increase delays and cancelled trains for passengers", the regulator said.
It rejected Wrexham, Shropshire and Midlands Railway's application for four daily Wrexham to London Euston return services, as well as Lumo's proposal for up to four return services between Rochdale and Euston on weekdays and Saturdays, and three on Sundays.
Avanti West Coast's plans for additional services between Blackpool and Euston were also denied by the ORR.
The regulator said: "Gaps in the current timetable need to provide important space for trains to recover when disruption occurs, minimising delays to passengers.
"ORR concluded that adding more services into these windows in the timetable for recovery would reduce that resilience, increasing the risk of disruption spreading to other services and affecting more passengers."
'Heavily used'
Stephanie Tobyn, from the ORR, said: "New services, destinations and greater choice can bring real benefits for passengers and communities.
"But the West Coast Main Line is already under significant pressure, with performance reflecting limited resilience on a heavily used part of the rail network.
"Our detailed analysis has shown that adding more trains to the current timetable would reduce the ability to recover when disruption occurs, increasing the risk of delays spreading and making reliability of the network worse for all passengers."
The ORR said its assessment and decision came after similar applications were rejected in 2025.
Get in touch
Tell us which stories we should cover in Lancashire
Listen to the best of BBC Radio Lancashire on Sounds and follow BBC Lancashire on Facebook, external, X, external and Instagram, external. You can also send story ideas via Whatsapp to 0808 100 2230.
- Published17 May 2024
- Published18 January
- Published3 March
- Published1 day ago
- Published9 September
- Published3 January`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cm3wve9l057vo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-08T11:42:31+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/7d5e/live/3e90f230-c307-11f1-8f04-85217d686658.png",
    readTime: 5,
  },
  {
    id: "asos-hackers-took-more-personal-details-aabbb97b",
    title: "Asos hackers took more personal details than first revealed, BBC finds",
    titleJa: "Asos hackers took more personal details than first revealed, BBC finds",
    summaryJa: "Retailer issues update after BBC contacted by cyber criminals who said this week's breach went beyond \"basic contact details\"",
    bodyOriginal: `Asos hackers took more personal details than first revealed, BBC finds
- Published
Asos has told its customers that hackers are in possession of detailed profiles of potentially millions of the online store's users.
It issued the update after BBC News told the retailer it had been contacted by cyber criminals who said this week's breach went beyond the "basic contact details" Asos previously said might have been accessed.
Names, addresses, phone numbers, emails and customer numbers are now in the hands of cyber criminals.
So too are the searches customers have made on the website. Terms like "reclaimed vintage", "glamorous wide fit" and "Asos petite" are visible in the data.
With this information, scammers may be able to craft potent phishing attack emails or phone calls.
The risk to individuals is now higher and customers are being warned about potential impersonation scams.
In its email to customers, Asos confirmed data profiles were taken but said no bank details or passwords were accessed.
"Please remain cautious of unexpected messages or calls claiming to be from Asos," it said.
"We will never ask you to share passwords, security codes or payment details through an unsolicited message or call."
The company did not respond to questions about the scale of the breach.
The high profile hack made global headlines on Tuesday when cyber criminals used Asos's own app system to send a pop up notification to potentially millions of people.
Later that day the firm confirmed to shareholders via the London Stock Exchange that the pop up was sent by an "unauthorised third party" and "basic personal information including name and contact details may have been accessed."
The company then sent an email to customers with similar wording.
On Wednesday evening the cyber criminals responsible contacted the BBC sharing a sample of the stolen data which showed the true extent of the hack.
The BBC held off publishing this article to allow Asos to contact its customers first.
Asos said it is still investigating the data breach and it would "contact customers directly where we believe additional information, support or action may be required".
The UK fashion site explained to customers that hackers gained access to an Asos employee account by "impersonating a trusted contact to obtain log in credentials".
With that log in to an unnamed service, the hackers were able to download the customer data.
In the pop up notification send to customers by the hackers, they claimed they had "compromised the Snowflake instance".
Snowflake is a popular data storage and analysis company whose customers have been breached in the past due to unauthorised log ins.
The cyber criminals, calling themselves Xuanyewen, claimed to the BBC they used a platform which is built natively on top of Snowflake - called Simon AI - to gain access to the data.
Simon AI has been contacted for comment. Snowflake previously said its platform had not been breached.
Asos said customers are not being asked to take any action.
But cyber security experts have warned users to change passwords as a precaution and be on alert for suspicious activity.
"Passwords have not been stolen, so be highly suspicious of any unsolicited text or email asking you to change or share yours," said Trevor Dearing, Senior Director of Critical Infrastructure at Illumio.
"Expect scammers to mention the attack, use your personal details to seem genuine, and create urgency, such as threatening to lock your account within 24 hours."
Asos said its website and app are safe to use and "we know our customers trust us with their information".
"We take that responsibility seriously and have already taken additional steps to further strengthen security controls," it said.
Get in touch
Have you been affected by this hack?
Asos confirms hackers sent 'unauthorised' notification to app users
- Published1 day ago
What can I do to protect myself after 'Asos hacked' message?
- Published1 day ago
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.`,
    bodyJa: `Asos hackers took more personal details than first revealed, BBC finds
- Published
Asos has told its customers that hackers are in possession of detailed profiles of potentially millions of the online store's users.
It issued the update after BBC News told the retailer it had been contacted by cyber criminals who said this week's breach went beyond the "basic contact details" Asos previously said might have been accessed.
Names, addresses, phone numbers, emails and customer numbers are now in the hands of cyber criminals.
So too are the searches customers have made on the website. Terms like "reclaimed vintage", "glamorous wide fit" and "Asos petite" are visible in the data.
With this information, scammers may be able to craft potent phishing attack emails or phone calls.
The risk to individuals is now higher and customers are being warned about potential impersonation scams.
In its email to customers, Asos confirmed data profiles were taken but said no bank details or passwords were accessed.
"Please remain cautious of unexpected messages or calls claiming to be from Asos," it said.
"We will never ask you to share passwords, security codes or payment details through an unsolicited message or call."
The company did not respond to questions about the scale of the breach.
The high profile hack made global headlines on Tuesday when cyber criminals used Asos's own app system to send a pop up notification to potentially millions of people.
Later that day the firm confirmed to shareholders via the London Stock Exchange that the pop up was sent by an "unauthorised third party" and "basic personal information including name and contact details may have been accessed."
The company then sent an email to customers with similar wording.
On Wednesday evening the cyber criminals responsible contacted the BBC sharing a sample of the stolen data which showed the true extent of the hack.
The BBC held off publishing this article to allow Asos to contact its customers first.
Asos said it is still investigating the data breach and it would "contact customers directly where we believe additional information, support or action may be required".
The UK fashion site explained to customers that hackers gained access to an Asos employee account by "impersonating a trusted contact to obtain log in credentials".
With that log in to an unnamed service, the hackers were able to download the customer data.
In the pop up notification send to customers by the hackers, they claimed they had "compromised the Snowflake instance".
Snowflake is a popular data storage and analysis company whose customers have been breached in the past due to unauthorised log ins.
The cyber criminals, calling themselves Xuanyewen, claimed to the BBC they used a platform which is built natively on top of Snowflake - called Simon AI - to gain access to the data.
Simon AI has been contacted for comment. Snowflake previously said its platform had not been breached.
Asos said customers are not being asked to take any action.
But cyber security experts have warned users to change passwords as a precaution and be on alert for suspicious activity.
"Passwords have not been stolen, so be highly suspicious of any unsolicited text or email asking you to change or share yours," said Trevor Dearing, Senior Director of Critical Infrastructure at Illumio.
"Expect scammers to mention the attack, use your personal details to seem genuine, and create urgency, such as threatening to lock your account within 24 hours."
Asos said its website and app are safe to use and "we know our customers trust us with their information".
"We take that responsibility seriously and have already taken additional steps to further strengthen security controls," it said.
Get in touch
Have you been affected by this hack?
Asos confirms hackers sent 'unauthorised' notification to app users
- Published1 day ago
What can I do to protect myself after 'Asos hacked' message?
- Published1 day ago
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c3zxjdw5ywgpo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-08T11:01:29+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/ef63/live/b1b98540-c30e-11f1-a64c-550be9e3c66b.jpg",
    readTime: 10,
  },
  {
    id: "cnbc-s-financial-advisor-100-best-financ-787ec5d9",
    title: "CNBC's Financial Advisor 100: Best financial advisors, top firms for 2026 ranked",
    titleJa: "CNBC's Financial Advisor 100: Best financial advisors, top firms for 2026 ranked",
    summaryJa: "CNBC's Financial Advisor 100 ranks the best financial advisors and top firms for 2026. Here's how to pick the best financial planner for you and your family.",
    bodyOriginal: `Many consumers face tough investing decisions amid rising inflation, the artificial intelligence boom and geopolitical uncertainty, among other factors that affect the stock and bond markets.
An experienced financial advisor can help.
But the best advisors do more than manage your portfolio. They can help craft a roadmap to meet competing goals such as saving for retirement, reducing your taxes, protecting your family, building a legacy and more.
CNBC's Financial Advisor 100 list ranks the country's best financial advisors and top financial advisory firms. Investors can use this list as a starting point — along with referrals — to find an expert who is well-suited for their family's needs.
To make a list of prospective advisors, always verify credentials and check for complaints via the Financial Industry Regulatory Authority's BrokerCheck or the U.S. Securities and Exchange Commission's Investment Adviser Public Disclosure. Then you can interview your short list of candidates.
CNBC's Financial Advisor 100 list is determined through a blend of data analysis and editorial review. Firms do not apply or pay to be considered, and inclusion and ranking are based solely on the list's methodology. The list takes months to compile, with multiple steps and checks designed to ensure rigor and consistency.
To prepare the 2026 list, CNBC worked with AccuPoint Solutions, a wealth management data and research firm specializing in advisor intelligence and industry analytics. The process started with 41,578 registered investment advisor firms, or RIAs, narrowed to 1,015 that met CNBC's requirements. These firms also passed a due diligence check, including any regulatory disclosures.
To get more details, CNBC surveyed the finalists about their practices and fact-checked responses via publicly available resources. AccuPoint used CNBC's weighted criteria to rank the firms. Read more about the methodology below.
For 2026, CNBC's top advisors collectively manage $329.7 billion. The firms have an average of 35 years in business.
What is a fiduciary financial advisor?
Finding the right financial advisor isn't easy, and there's a key question you should ask each prospect: Are you a fiduciary?
A fiduciary financial advisor must act in the best interest of clients at all times, regardless of how it affects their compensation or profits.
Certain financial advisors, such as RIAs, are bound by the fiduciary standard. By comparison, investment brokers must follow a suitability standard, which means recommendations must be appropriate but not always the best option for the client.
What steps should you take when choosing a financial advisor?
One of the first steps to finding the right financial advisor could be referrals from your colleagues, friends or family.
You'll want to consider those candidates' credentials, including designations such as certified financial planner, or CFP; certified public accountant, or CPA; and chartered financial analyst, or CFA.
You should also check each prospect for regulatory violations and customer complaints, known as "disclosures," via FINRA's BrokerCheck and the SEC's Investment Adviser Public Disclosure website. You can check state regulators for smaller firms.
It's important to meet and interview prospective candidates before choosing a financial advisor. The CFP Board, which sets and enforces standards for CFP professionals, recommends 10 questions to narrow down your list:
1. What are your qualifications and credentials?
2. What services do you offer?
3. Will you have a fiduciary duty to me?
4. What is your approach to financial planning?
5. What types of clients do you typically work with?
6. Will you be the only advisor working with me?
7. How will I pay for your services?
8. How much do you typically charge?
9. Do others stand to gain from the financial advice you give me?
10. Have you ever been publicly disciplined for unethical or unlawful actions in your career?
What's the difference between a fee-only financial advisor and a commission-based advisor?
It's important to understand your financial advisor's pay structure before starting your planning engagement.
Generally, financial advisors are fee-only, commission-based or fee-based, the latter of which is mostly fees with commissions for certain products.
Fee-only means the advisor won't receive a commission from products. This category can include assets under management, or AUM, which is typically a set percentage each year and varies by the size of your portfolio. Fee-only may also include one-time projects, hourly fees or advice-only advisors, who don't charge AUM or receive commissions.
Commission-based advice generally includes commissions for certain products, such as mutual funds or life insurance. It can be the lowest-cost option for advice about a specific financial product, but the guidance can present a conflict of interest in some cases.
What are the pros and cons of using a robo-advisor vs. a human financial advisor?
Technology continues to shape the landscape of financial advice, including robo-advisors and digital advice via artificial intelligence platforms.
Robo-advisors use algorithms to automatically invest your money based on your risk tolerance and timeline. Typically, the cost is based on a percentage of your portfolio, or you pay a flat monthly fee.
Some robo-advisors offer more customization and features, such as tax-loss harvesting, which uses losses to offset other portfolio gains, or automatic rebalancing.
By comparison, human advisors can build a comprehensive financial plan — including investing, taxes, insurance, retirement planning, estate planning and more — based on your specific goals.
In 2024, the median robo-advisor fee was about 0.25% of assets per year, according to Morningstar's latest robo-advisor report from 2025, which analyzed 16 U.S.-based platforms. To compare, it's common to pay around 1% of assets under management, or 100 basis points, for a human advisor, depending on the size of your portfolio.
Meanwhile, do-it-yourself investors may turn to AI platforms for quick answers to their money questions. Our next section covers some of the key things to know about AI financial advice.
What to know about AI financial advice
As consumers embrace generative AI platforms such as ChatGPT, Claude, Copilot or Gemini, it may be tempting to tap the software for financial advice.
Roughly 1 in 5 Americans looking for financial advice in the prior year have used AI, according to a Gallup survey conducted with financial services firm Edward Jones.
But fewer than 30% of U.S. adults overall say they have "a great deal" or "some" confidence in AI expertise when it comes to managing money, according to the survey, which polled more than 5,000 U.S. adults in March and April.
Before turning to AI platforms for money advice, here are some of the key things to know.
Can AI replace a human financial advisor?
In short, no.
Experts say that AI is generally good at providing high-level overviews of financial topics: For example, why it's important to diversify investments, why exchange-traded funds may be better than mutual funds in some cases but not others, or the ages at which people can claim Social Security.
However, it would be unwise to take AI's advice blindly. The technology may sound authoritative, but it can make mistakes — especially when it comes to making very specific financial calculations for one's personal situation, experts say.
Is AI financial advice safe and accurate?
Experts say AI can be a good starting point when learning about a particular financial topic, such as the ins and outs of Medicare. But AI can "hallucinate" — essentially, it can make up information that's inaccurate but sounds true to users.
Surprisingly, AI isn't — yet — strong at doing financial calculations, so any numbers-based financial planning questions, such as those involving your taxes, are generally best avoided, experts said. Small differences in prompts can also lead to variation in its recommendations, research has shown.
It's important to double- and triple-check AI's output or, for complex questions, consult with a financial advisor.
Is an AI financial advisor a fiduciary?
Fiduciary duty is a legal term that means an advisor must put their client's best interests ahead of their own. It's a concept that applies in other fields, too, such as medicine and law.
Many human financial advisors — but not all of them — have a fiduciary duty. Advisors who do have a fiduciary duty and who violate that responsibility can be subject to fairly serious consequences, including regulatory penalties, civil liabilities and criminal charges.
Generative AI platforms, such as ChatGPT and Claude, don't have a fiduciary duty, according to experts. In other words, they don't bear responsibility for output that leads to bad outcomes for users, experts said.
Is it safe to share personal financial information with AI?
It would be unwise to input sensitive financial information or sensitive personally identifiable information into generative AI platforms, such as ChatGPT and Claude, experts said.
For example, it's likely not a good idea to feed your entire tax return into the algorithms, experts said. AI companies currently have no restrictions on how they can use such personal data, they said. Perhaps the biggest risk is that the companies could get hacked, potentially exposing your personal data, they said.
Who is responsible if AI-generated financial advice is wrong?
Legal experts say this is an unresolved issue.
Currently, AI companies aren't responsible for giving financial advice that's in users' best interests — and therefore aren't on the hook if a user implements the advice and something goes wrong, experts said. They said it's important not to accept AI output without researching and vetting it further.
Financial advisor FAQs
- Many investors have competing financial goals, such as saving for retirement, funding a child's college education, paying off student loans or buying a new home.
- A financial advisor can help clients prioritize and fund goals while answering key questions about taxes, investing, insurance, estate planning and more.
- Paid financial advice comes in many forms, but it's not right for everyone. While some investors want hands-on guidance, others prefer to handle money decisions on their own.
- Clients meet with their advisor periodically to discuss priorities and review progress on financial goals.
- Generally, meetings happen at least once per year, but the cadence may vary based on complexity and the scope of the engagement.
- Regardless of your meeting schedule, your advisor should have an open line of communication to review questions and concerns as they arise.
- Switching financial advisors is a personal decision that could hinge on a range of factors, including your goals and expectations.
- You may seek a new planner if your current advisor doesn't offer the expertise you need, such as complex tax or small business planning.
- Other reasons to switch could be poor communication, missed meetings or failing to execute key elements of your financial plan.
- Your choice between local, national or online firms may depend on your service and meeting preferences.
- Some boutique firms refer clients to local experts, such as certified public accountants or estate planning attorneys, while national firms may have these experts on staff.
- Ultimately, you can find personalized care from a range of firms, depending on how many households your advisor serves.
- You could work with a single advisor or a team, depending on your planning needs and the firm's structure.
- If you have a preference, it's a good idea to address this question while interviewing prospective advisors.
- A registered investment advisor, or RIA, is an individual or company that provides financial advice for compensation. They are also known as financial planners or wealth managers.
- An investment advisor representative, or IAR, is an individual who works at an RIA, managing portfolios and offering investment advice.
- A broker buys and sells investments for an investor's account.
- An RIA is bound by the fiduciary standard and must act in the client's best interest, while a broker must follow a suitability standard, which allows more flexibility for recommendations.
- There are four requirements a person must meet to become a certified financial planner, or CFP: education, exam, experience and ethics.
- These professionals must complete a CFP Board-registered program and hold a bachelor's degree before passing an exam.
- CFP candidates also must complete 4,000 or 6,000 experience hours, depending on their pathway, and meet ongoing ethics and continuing education guidelines.
- Before picking a financial advisor, you should verify credentials and check for regulatory violations via FINRA's BrokerCheck and the SEC's Investment Adviser Public Disclosure website.
- One red flag is a lack of transparency about compensation, which RIAs must outline via Form ADV Part 2A.
- Another warning sign could be an advisor who pushes products before fully understanding your goals, timeline and risk tolerance.
- The right investing strategy will depend on your goals, risk tolerance and timeline. Common long-term goals may include saving for retirement or funding college education.
- Many advisors also aim to reduce your lifetime tax bill with such strategies as selling profitable assets during your lower income years.
- At retirement, advisors can help optimize streams of income, including Social Security, pensions, retirement account drawdowns and more.
- Estate planning, which covers your wishes at death or incapacitation, is also important for investors at all income levels.
- Typically, financial advisors who specialize in working with retirees can help with investing, portfolio distribution, Social Security, tax planning, Medicare, long-term care and estate planning, among other issues.
- You should look for credentials such as CFP or retirement income certified professional, or RICP.
- However, many years of experience working with retirees could outweigh credentials.
- The right financial advisor will act as a fiduciary and consider your goals, timeline and risk tolerance before making recommendations.
- Young professionals often have multiple financial priorities, such as beginning to invest, paying off student loans, employee benefits, buying a first home, and saving for a wedding or starting a family.
- While some financial advisors have asset minimums, others may charge one-time, hourly or monthly fees rather than a percentage for assets under management.
- Advisors have different compensation models, including commission-based, fee-only, fee-based or advice-only, which doesn't include managed assets.
- You can find a fiduciary financial advisor via directories such as the CFP Board, XY Planning Network or the National Association of Personal Financial Advisors.
- No. The right advisory firm, if any, depends on your family's unique financial needs. You can use this list as a starting point — along with referrals — to find an expert who is well-suited for your family's needs.
- A firm's or advisor's placement in our yearly ranking is not an endorsement from CNBC.
Methodology: How we picked the best financial advisors for 2026
CNBC used data analysis and editorial review to compile its eighth annual Financial Advisor 100 list.
For 2026, CNBC and data partner AccuPoint Solutions started with 41,578 RIAs from the SEC's regulatory database. That list was culled to 1,015 firms, and finalists completed surveys to confirm key details. CNBC made an editorial review of entries, and AccuPoint used our proprietary weighted criteria to narrow down the list and rank the firms.
Among other criteria, we weighed:
- Advisory firm's regulatory/compliance record
- Number of years in the business
- Number of employees
- Number of investment advisors registered with the firm
- Ratio of investment advisors to the total number of employees
- Total assets under management
- Total accounts under management
- Number of states where the RIA is registered
- Country of domicile
You can learn more by reading our FAQ.
CNBC personal finance reporter Greg Iacurci contributed to this story.
CNBC receives no compensation from placing financial advisory firms on our Financial Advisor 100 list. Additionally, a firm's or advisor's appearance in our ranking does not constitute an individual endorsement by CNBC of any firm or advisor.`,
    bodyJa: `Many consumers face tough investing decisions amid rising inflation, the artificial intelligence boom and geopolitical uncertainty, among other factors that affect the stock and bond markets.
An experienced financial advisor can help.
But the best advisors do more than manage your portfolio. They can help craft a roadmap to meet competing goals such as saving for retirement, reducing your taxes, protecting your family, building a legacy and more.
CNBC's Financial Advisor 100 list ranks the country's best financial advisors and top financial advisory firms. Investors can use this list as a starting point — along with referrals — to find an expert who is well-suited for their family's needs.
To make a list of prospective advisors, always verify credentials and check for complaints via the Financial Industry Regulatory Authority's BrokerCheck or the U.S. Securities and Exchange Commission's Investment Adviser Public Disclosure. Then you can interview your short list of candidates.
CNBC's Financial Advisor 100 list is determined through a blend of data analysis and editorial review. Firms do not apply or pay to be considered, and inclusion and ranking are based solely on the list's methodology. The list takes months to compile, with multiple steps and checks designed to ensure rigor and consistency.
To prepare the 2026 list, CNBC worked with AccuPoint Solutions, a wealth management data and research firm specializing in advisor intelligence and industry analytics. The process started with 41,578 registered investment advisor firms, or RIAs, narrowed to 1,015 that met CNBC's requirements. These firms also passed a due diligence check, including any regulatory disclosures.
To get more details, CNBC surveyed the finalists about their practices and fact-checked responses via publicly available resources. AccuPoint used CNBC's weighted criteria to rank the firms. Read more about the methodology below.
For 2026, CNBC's top advisors collectively manage $329.7 billion. The firms have an average of 35 years in business.
What is a fiduciary financial advisor?
Finding the right financial advisor isn't easy, and there's a key question you should ask each prospect: Are you a fiduciary?
A fiduciary financial advisor must act in the best interest of clients at all times, regardless of how it affects their compensation or profits.
Certain financial advisors, such as RIAs, are bound by the fiduciary standard. By comparison, investment brokers must follow a suitability standard, which means recommendations must be appropriate but not always the best option for the client.
What steps should you take when choosing a financial advisor?
One of the first steps to finding the right financial advisor could be referrals from your colleagues, friends or family.
You'll want to consider those candidates' credentials, including designations such as certified financial planner, or CFP; certified public accountant, or CPA; and chartered financial analyst, or CFA.
You should also check each prospect for regulatory violations and customer complaints, known as "disclosures," via FINRA's BrokerCheck and the SEC's Investment Adviser Public Disclosure website. You can check state regulators for smaller firms.
It's important to meet and interview prospective candidates before choosing a financial advisor. The CFP Board, which sets and enforces standards for CFP professionals, recommends 10 questions to narrow down your list:
1. What are your qualifications and credentials?
2. What services do you offer?
3. Will you have a fiduciary duty to me?
4. What is your approach to financial planning?
5. What types of clients do you typically work with?
6. Will you be the only advisor working with me?
7. How will I pay for your services?
8. How much do you typically charge?
9. Do others stand to gain from the financial advice you give me?
10. Have you ever been publicly disciplined for unethical or unlawful actions in your career?
What's the difference between a fee-only financial advisor and a commission-based advisor?
It's important to understand your financial advisor's pay structure before starting your planning engagement.
Generally, financial advisors are fee-only, commission-based or fee-based, the latter of which is mostly fees with commissions for certain products.
Fee-only means the advisor won't receive a commission from products. This category can include assets under management, or AUM, which is typically a set percentage each year and varies by the size of your portfolio. Fee-only may also include one-time projects, hourly fees or advice-only advisors, who don't charge AUM or receive commissions.
Commission-based advice generally includes commissions for certain products, such as mutual funds or life insurance. It can be the lowest-cost option for advice about a specific financial product, but the guidance can present a conflict of interest in some cases.
What are the pros and cons of using a robo-advisor vs. a human financial advisor?
Technology continues to shape the landscape of financial advice, including robo-advisors and digital advice via artificial intelligence platforms.
Robo-advisors use algorithms to automatically invest your money based on your risk tolerance and timeline. Typically, the cost is based on a percentage of your portfolio, or you pay a flat monthly fee.
Some robo-advisors offer more customization and features, such as tax-loss harvesting, which uses losses to offset other portfolio gains, or automatic rebalancing.
By comparison, human advisors can build a comprehensive financial plan — including investing, taxes, insurance, retirement planning, estate planning and more — based on your specific goals.
In 2024, the median robo-advisor fee was about 0.25% of assets per year, according to Morningstar's latest robo-advisor report from 2025, which analyzed 16 U.S.-based platforms. To compare, it's common to pay around 1% of assets under management, or 100 basis points, for a human advisor, depending on the size of your portfolio.
Meanwhile, do-it-yourself investors may turn to AI platforms for quick answers to their money questions. Our next section covers some of the key things to know about AI financial advice.
What to know about AI financial advice
As consumers embrace generative AI platforms such as ChatGPT, Claude, Copilot or Gemini, it may be tempting to tap the software for financial advice.
Roughly 1 in 5 Americans looking for financial advice in the prior year have used AI, according to a Gallup survey conducted with financial services firm Edward Jones.
But fewer than 30% of U.S. adults overall say they have "a great deal" or "some" confidence in AI expertise when it comes to managing money, according to the survey, which polled more than 5,000 U.S. adults in March and April.
Before turning to AI platforms for money advice, here are some of the key things to know.
Can AI replace a human financial advisor?
In short, no.
Experts say that AI is generally good at providing high-level overviews of financial topics: For example, why it's important to diversify investments, why exchange-traded funds may be better than mutual funds in some cases but not others, or the ages at which people can claim Social Security.
However, it would be unwise to take AI's advice blindly. The technology may sound authoritative, but it can make mistakes — especially when it comes to making very specific financial calculations for one's personal situation, experts say.
Is AI financial advice safe and accurate?
Experts say AI can be a good starting point when learning about a particular financial topic, such as the ins and outs of Medicare. But AI can "hallucinate" — essentially, it can make up information that's inaccurate but sounds true to users.
Surprisingly, AI isn't — yet — strong at doing financial calculations, so any numbers-based financial planning questions, such as those involving your taxes, are generally best avoided, experts said. Small differences in prompts can also lead to variation in its recommendations, research has shown.
It's important to double- and triple-check AI's output or, for complex questions, consult with a financial advisor.
Is an AI financial advisor a fiduciary?
Fiduciary duty is a legal term that means an advisor must put their client's best interests ahead of their own. It's a concept that applies in other fields, too, such as medicine and law.
Many human financial advisors — but not all of them — have a fiduciary duty. Advisors who do have a fiduciary duty and who violate that responsibility can be subject to fairly serious consequences, including regulatory penalties, civil liabilities and criminal charges.
Generative AI platforms, such as ChatGPT and Claude, don't have a fiduciary duty, according to experts. In other words, they don't bear responsibility for output that leads to bad outcomes for users, experts said.
Is it safe to share personal financial information with AI?
It would be unwise to input sensitive financial information or sensitive personally identifiable information into generative AI platforms, such as ChatGPT and Claude, experts said.
For example, it's likely not a good idea to feed your entire tax return into the algorithms, experts said. AI companies currently have no restrictions on how they can use such personal data, they said. Perhaps the biggest risk is that the companies could get hacked, potentially exposing your personal data, they said.
Who is responsible if AI-generated financial advice is wrong?
Legal experts say this is an unresolved issue.
Currently, AI companies aren't responsible for giving financial advice that's in users' best interests — and therefore aren't on the hook if a user implements the advice and something goes wrong, experts said. They said it's important not to accept AI output without researching and vetting it further.
Financial advisor FAQs
- Many investors have competing financial goals, such as saving for retirement, funding a child's college education, paying off student loans or buying a new home.
- A financial advisor can help clients prioritize and fund goals while answering key questions about taxes, investing, insurance, estate planning and more.
- Paid financial advice comes in many forms, but it's not right for everyone. While some investors want hands-on guidance, others prefer to handle money decisions on their own.
- Clients meet with their advisor periodically to discuss priorities and review progress on financial goals.
- Generally, meetings happen at least once per year, but the cadence may vary based on complexity and the scope of the engagement.
- Regardless of your meeting schedule, your advisor should have an open line of communication to review questions and concerns as they arise.
- Switching financial advisors is a personal decision that could hinge on a range of factors, including your goals and expectations.
- You may seek a new planner if your current advisor doesn't offer the expertise you need, such as complex tax or small business planning.
- Other reasons to switch could be poor communication, missed meetings or failing to execute key elements of your financial plan.
- Your choice between local, national or online firms may depend on your service and meeting preferences.
- Some boutique firms refer clients to local experts, such as certified public accountants or estate planning attorneys, while national firms may have these experts on staff.
- Ultimately, you can find personalized care from a range of firms, depending on how many households your advisor serves.
- You could work with a single advisor or a team, depending on your planning needs and the firm's structure.
- If you have a preference, it's a good idea to address this question while interviewing prospective advisors.
- A registered investment advisor, or RIA, is an individual or company that provides financial advice for compensation. They are also known as financial planners or wealth managers.
- An investment advisor representative, or IAR, is an individual who works at an RIA, managing portfolios and offering investment advice.
- A broker buys and sells investments for an investor's account.
- An RIA is bound by the fiduciary standard and must act in the client's best interest, while a broker must follow a suitability standard, which allows more flexibility for recommendations.
- There are four requirements a person must meet to become a certified financial planner, or CFP: education, exam, experience and ethics.
- These professionals must complete a CFP Board-registered program and hold a bachelor's degree before passing an exam.
- CFP candidates also must complete 4,000 or 6,000 experience hours, depending on their pathway, and meet ongoing ethics and continuing education guidelines.
- Before picking a financial advisor, you should verify credentials and check for regulatory violations via FINRA's BrokerCheck and the SEC's Investment Adviser Public Disclosure website.
- One red flag is a lack of transparency about compensation, which RIAs must outline via Form ADV Part 2A.
- Another warning sign could be an advisor who pushes products before fully understanding your goals, timeline and risk tolerance.
- The right investing strategy will depend on your goals, risk tolerance and timeline. Common long-term goals may include saving for retirement or funding college education.
- Many advisors also aim to reduce your lifetime tax bill with such strategies as selling profitable assets during your lower income years.
- At retirement, advisors can help optimize streams of income, including Social Security, pensions, retirement account drawdowns and more.
- Estate planning, which covers your wishes at death or incapacitation, is also important for investors at all income levels.
- Typically, financial advisors who specialize in working with retirees can help with investing, portfolio distribution, Social Security, tax planning, Medicare, long-term care and estate planning, among other issues.
- You should look for credentials such as CFP or retirement income certified professional, or RICP.
- However, many years of experience working with retirees could outweigh credentials.
- The right financial advisor will act as a fiduciary and consider your goals, timeline and risk tolerance before making recommendations.
- Young professionals often have multiple financial priorities, such as beginning to invest, paying off student loans, employee benefits, buying a first home, and saving for a wedding or starting a family.
- While some financial advisors have asset minimums, others may charge one-time, hourly or monthly fees rather than a percentage for assets under management.
- Advisors have different compensation models, including commission-based, fee-only, fee-based or advice-only, which doesn't include managed assets.
- You can find a fiduciary financial advisor via directories such as the CFP Board, XY Planning Network or the National Association of Personal Financial Advisors.
- No. The right advisory firm, if any, depends on your family's unique financial needs. You can use this list as a starting point — along with referrals — to find an expert who is well-suited for your family's needs.
- A firm's or advisor's placement in our yearly ranking is not an endorsement from CNBC.
Methodology: How we picked the best financial advisors for 2026
CNBC used data analysis and editorial review to compile its eighth annual Financial Advisor 100 list.
For 2026, CNBC and data partner AccuPoint Solutions started with 41,578 RIAs from the SEC's regulatory database. That list was culled to 1,015 firms, and finalists completed surveys to confirm key details. CNBC made an editorial review of entries, and AccuPoint used our proprietary weighted criteria to narrow down the list and rank the firms.
Among other criteria, we weighed:
- Advisory firm's regulatory/compliance record
- Number of years in the business
- Number of employees
- Number of investment advisors registered with the firm
- Ratio of investment advisors to the total number of employees
- Total assets under management
- Total accounts under management
- Number of states where the RIA is registered
- Country of domicile
You can learn more by reading our FAQ.
CNBC personal finance reporter Greg Iacurci contributed to this story.
CNBC receives no compensation from placing financial advisory firms on our Financial Advisor 100 list. Additionally, a firm's or advisor's appearance in our ranking does not constitute an individual endorsement by CNBC of any firm or advisor.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/08/best-financial-advisors.html",
    publishedAt: "2026-10-08T10:07:13+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "elon-musk-blames-indian-oligarchs-for-st-aadf9c9a",
    title: "Elon Musk blames Indian 'oligarchs' for stalling Starlink launch",
    titleJa: "Elon Musk blames Indian 'oligarchs' for stalling Starlink launch",
    summaryJa: "Space X founder Elon Musk accused oligarchs in India of keeping Starlink out of the country to protect their monopoly over consumers.",
    bodyOriginal: `SpaceX founder Elon Musk has accused vested interests of blocking the launch of his company's satellite internet service, Starlink, to protect their hold over consumers, calling it "a crime against the people of India"
The country's telecom and internet service market is dominated by Reliance Chairman Mukesh Ambani's Jio and Sunil Mittal's Airtel, with both companies together holding over 80% market share.
"We are being blocked by certain oligarchs in order to maintain their monopolistic chokehold on the Indian people," Musk said Wednesday stateside in a post on X, without naming his rivals. "You can guess who they are," he said.
On Thursday, the Indian government said suggestions that its regulatory framework was unfair or discriminatory were "baseless and misconceived."
Licenses have been granted to three global satellite communication services providers, the government said, without naming the companies, adding that every licensee was "required to demonstrate compliance with security conditions." Starlink received the government license last year.
In a second post, Musk said Starlink in India would "enable high-speed, affordable internet connectivity for those who cannot afford current prices." At present, Reliance Industries-owned Jio is the country's largest telecom operator and has been widely credited for slashing high-speed mobile data costs in the country since the company's launch a decade ago.
Starlink's competition
In June, Jio Platforms announced plans to roll out low-orbit satellite communications in the country. Akash Ambani, the son of Mukesh, told shareholders that the company is partnering with leading global constellation providers to lease satellite capacity as it looks for a quick rollout of satellite connectivity.
SpaceX last year had announced deals with Jio and India's second-largest telecom service provider, Bharti Airtel, to roll out Starlink internet services across India. There seems to have been little progress on that front, with Starlink yet to launch its service in the country.
CNBC has reached out to Airtel and Reliance Industries for comments.
There are 11,000 Starlink satellites currently in orbit that provide service to people in over 170 countries, Lauren Dreyer, SpaceX's Vice President of Starlink business operations, said while speaking at India Mobile Congress on Wednesday.
Starlink works with government and private companies to close the digital divide by providing internet access to people in remote places, she said, adding that it has been "working for years" in India to do the same, and mentioned the company's memorandum of understanding with Airtel and Reliance Jio.
Elon Musk's satellite internet services company is also facing pushback from regulators in India over security concerns, which the company has denied. In June, Bloomberg reported that regulators in New Delhi had frozen approvals for Starlink over fears that its terminals could be used despite the service not being licensed.
The Indian government is concerned about a foreign player operating in a sensitive technology like satellite communications, and there are questions around how Starlink's terminals will be "geofenced" and whether the data will be localized, said Neil Shah, a partner at Counterpoint Research.
Starlink is likely to get approval to launch around the time when Indian companies also develop their own satellite internet services, Shah said. If Starlink is launched without creating a "level playing field," it will dominate satellite communications services in India, he added.`,
    bodyJa: `SpaceX founder Elon Musk has accused vested interests of blocking the launch of his company's satellite internet service, Starlink, to protect their hold over consumers, calling it "a crime against the people of India"
The country's telecom and internet service market is dominated by Reliance Chairman Mukesh Ambani's Jio and Sunil Mittal's Airtel, with both companies together holding over 80% market share.
"We are being blocked by certain oligarchs in order to maintain their monopolistic chokehold on the Indian people," Musk said Wednesday stateside in a post on X, without naming his rivals. "You can guess who they are," he said.
On Thursday, the Indian government said suggestions that its regulatory framework was unfair or discriminatory were "baseless and misconceived."
Licenses have been granted to three global satellite communication services providers, the government said, without naming the companies, adding that every licensee was "required to demonstrate compliance with security conditions." Starlink received the government license last year.
In a second post, Musk said Starlink in India would "enable high-speed, affordable internet connectivity for those who cannot afford current prices." At present, Reliance Industries-owned Jio is the country's largest telecom operator and has been widely credited for slashing high-speed mobile data costs in the country since the company's launch a decade ago.
Starlink's competition
In June, Jio Platforms announced plans to roll out low-orbit satellite communications in the country. Akash Ambani, the son of Mukesh, told shareholders that the company is partnering with leading global constellation providers to lease satellite capacity as it looks for a quick rollout of satellite connectivity.
SpaceX last year had announced deals with Jio and India's second-largest telecom service provider, Bharti Airtel, to roll out Starlink internet services across India. There seems to have been little progress on that front, with Starlink yet to launch its service in the country.
CNBC has reached out to Airtel and Reliance Industries for comments.
There are 11,000 Starlink satellites currently in orbit that provide service to people in over 170 countries, Lauren Dreyer, SpaceX's Vice President of Starlink business operations, said while speaking at India Mobile Congress on Wednesday.
Starlink works with government and private companies to close the digital divide by providing internet access to people in remote places, she said, adding that it has been "working for years" in India to do the same, and mentioned the company's memorandum of understanding with Airtel and Reliance Jio.
Elon Musk's satellite internet services company is also facing pushback from regulators in India over security concerns, which the company has denied. In June, Bloomberg reported that regulators in New Delhi had frozen approvals for Starlink over fears that its terminals could be used despite the service not being licensed.
The Indian government is concerned about a foreign player operating in a sensitive technology like satellite communications, and there are questions around how Starlink's terminals will be "geofenced" and whether the data will be localized, said Neil Shah, a partner at Counterpoint Research.
Starlink is likely to get approval to launch around the time when Indian companies also develop their own satellite internet services, Shah said. If Starlink is launched without creating a "level playing field," it will dominate satellite communications services in India, he added.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/08/elon-musk-starlink-spacex-jio-airtel-india.html",
    publishedAt: "2026-10-08T05:28:40+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 9,
  },
  {
    id: "come-all-the-way-back-to-eu-french-fina-f88e4978",
    title: "'Come all the way' back to EU, French finance minister tells UK",
    titleJa: "'Come all the way' back to EU, French finance minister tells UK",
    summaryJa: "Roland Lescure tells the BBC that being in the bloc enables members to better address the challenges facing the world.",
    bodyOriginal: `'Come all the way' back to EU, French finance minister tells UK
- Published
French finance minister Roland Lescure has invited Britain to "come all the way" back to the EU, after Prime Minister Andy Burnham signalled a second Brexit referendum was "possible" in a future Labour election manifesto.
Lescure said being in the bloc comes with some difficulties, but it enables members to better address the challenges facing the world.
Last week, Burnham said the UK needed to "consider the options", ranging from staying as is, rejoining the customs union or single market, or going "all the way".
Asked about the PM's comments, Lescure told the BBC: "British people decided, and that's obviously their 100% right, and if they're willing to come back, they will have to decide."
"But what I can tell them is: come back, anytime."
Burnham recently warned that planned EU rules to help European manufacturers would damage the UK.
The prime minister expressed concerns about how British industry and supply chains could be affected by the planned Made In Europe scheme.
The proposals aim to protect EU industry from Chinese competitors by giving companies inside the bloc priority for public contracts and subsidies. The EU's car industry has called for the UK to be included to prevent disruption to its own supply chains.
Asked about the possibility of Britain being kept out of the scheme, Lescure said: "Come back, and you'll be at the table, and we discuss all these things together."
'Our duty is to listen to young people'
The finance minister's interview with the BBC also touched on French domestic matters, including the student protests that have swept the country, with more than 500 schools fully or partially shut as of Wednesday.
Hundreds of thousands of people have been taking to the streets to call for better conditions in schools.
Lescure said it was a "tough world" for young people, saying he understood why they were anxious and that "our duty as leaders is to listen to them".
"It's hard to tell young people we're not going to have the money for you because we're spending a lot on health and pensions," he acknowledged.
"We're getting people more healthy. People live longer. But we cannot just say 'this is fine' and then we don't have money left for the kids, so we need to rebalance that."
In France's upcoming budget he said he will cut back on health spending and ask retired people to accept a below-inflation rise to their pension next year.
While he said "not all" French schools were crumbling, he promised further investment in education, adding: "If we need to do more, we'll have to see."
Public deficit is 'alarming'
Other challenges France is currently facing include its budget deficit, and markets pushing up borrowing costs.
Lescure acknowledged that France's annual public borrowing of over 5% of its gross domestic product (GDP) was "alarming", and said "that's why we need to act now" to avoid being forced to act later.
Asked about the possibility of an intervention from the eurozone's central bank, Lescure said his job was to make sure France did not have to "go there".
With significant rises in French borrowing costs, especially the premium paid over its eurozone partner, Germany, Lescure acknowledged it was "more expensive" to borrow but said there was "no issue" with issuing its debt.
He said that his budget "will pass" a fractious French parliament and there were "lots of different ways" to ensure that.
Related topics
- Published30 September
- Published22 September`,
    bodyJa: `'Come all the way' back to EU, French finance minister tells UK
- Published
French finance minister Roland Lescure has invited Britain to "come all the way" back to the EU, after Prime Minister Andy Burnham signalled a second Brexit referendum was "possible" in a future Labour election manifesto.
Lescure said being in the bloc comes with some difficulties, but it enables members to better address the challenges facing the world.
Last week, Burnham said the UK needed to "consider the options", ranging from staying as is, rejoining the customs union or single market, or going "all the way".
Asked about the PM's comments, Lescure told the BBC: "British people decided, and that's obviously their 100% right, and if they're willing to come back, they will have to decide."
"But what I can tell them is: come back, anytime."
Burnham recently warned that planned EU rules to help European manufacturers would damage the UK.
The prime minister expressed concerns about how British industry and supply chains could be affected by the planned Made In Europe scheme.
The proposals aim to protect EU industry from Chinese competitors by giving companies inside the bloc priority for public contracts and subsidies. The EU's car industry has called for the UK to be included to prevent disruption to its own supply chains.
Asked about the possibility of Britain being kept out of the scheme, Lescure said: "Come back, and you'll be at the table, and we discuss all these things together."
'Our duty is to listen to young people'
The finance minister's interview with the BBC also touched on French domestic matters, including the student protests that have swept the country, with more than 500 schools fully or partially shut as of Wednesday.
Hundreds of thousands of people have been taking to the streets to call for better conditions in schools.
Lescure said it was a "tough world" for young people, saying he understood why they were anxious and that "our duty as leaders is to listen to them".
"It's hard to tell young people we're not going to have the money for you because we're spending a lot on health and pensions," he acknowledged.
"We're getting people more healthy. People live longer. But we cannot just say 'this is fine' and then we don't have money left for the kids, so we need to rebalance that."
In France's upcoming budget he said he will cut back on health spending and ask retired people to accept a below-inflation rise to their pension next year.
While he said "not all" French schools were crumbling, he promised further investment in education, adding: "If we need to do more, we'll have to see."
Public deficit is 'alarming'
Other challenges France is currently facing include its budget deficit, and markets pushing up borrowing costs.
Lescure acknowledged that France's annual public borrowing of over 5% of its gross domestic product (GDP) was "alarming", and said "that's why we need to act now" to avoid being forced to act later.
Asked about the possibility of an intervention from the eurozone's central bank, Lescure said his job was to make sure France did not have to "go there".
With significant rises in French borrowing costs, especially the premium paid over its eurozone partner, Germany, Lescure acknowledged it was "more expensive" to borrow but said there was "no issue" with issuing its debt.
He said that his budget "will pass" a fractious French parliament and there were "lots of different ways" to ensure that.
Related topics
- Published30 September
- Published22 September`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cqdjvg3xww2go?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-08T04:02:26+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/9bb5/live/5f9aaa00-c2a5-11f1-979a-a7b535522d35.png",
    readTime: 9,
  },
  {
    id: "trump-says-he-is-not-keen-on-a-deal-with-308a5156",
    title: "Trump says he is not keen on a deal with Iran as U.S. reportedly prepares for 'massive bombing'",
    titleJa: "Trump says he is not keen on a deal with Iran as U.S. reportedly prepares for 'massive bombing'",
    summaryJa: "The U.S. president and his national security team have discussed possibly resuming large-scale U.S. military operations in the coming weeks, NBC News reported.",
    bodyOriginal: `U.S. President Donald Trump said Wednesday that he no longer wants a deal with Iran, following reports that the U.S. military is preparing for possible strikes against the country, likely before the midterm election.
"I think the deal isn't really something that I want to do, but they're willing to offer us anything to stop," Trump said at a campaign rally with Republican candidates in San Antonio, Texas, late Wednesday stateside. Steve Witkoff, the U.S. special envoy to the Middle East, has been working on the deal and "doing very well," Trump added.
The U.S. president and his national security team have discussed possibly resuming large-scale U.S. military operations in the coming weeks, NBC News reported Wednesday, citing a U.S. official and another person with knowledge of the discussions.
Axios reported earlier in the day that a possible resumption in armed conflict could include "massive bombing" of Iranian energy, infrastructure and nuclear targets, adding that military aggression could influence the outcome of the upcoming midterm elections.
Trump has seen his approval ratings fall to a record low amid concerns over high living costs spurred by soaring gasoline and diesel prices.
Earlier this week, Trump said the biggest problem for Washington was that nobody knew who was running Iran during the talks to end the conflict. Iranian officials rejected those claims, saying "the problem is actually the opposite." Iran's foreign ministry spokesperson Esmaeli Baghaei pointed to the "contradictory positions and mixed messaging from U.S. officials."
Crude oil prices have remained elevated even as Middle East exports have been recovering to near pre-war levels, according to Kpler. Combined crude volumes exiting the Gulf, excluding Iran, plus volumes from Saudi Arabia and the United Arab Emirates, were around pre-conflict levels of 18.5 million barrels per day (Mbd).
"Normalisation no longer needs to wait for a deal," said Matt Wright, lead freight analyst at Kpler, forecasting "slower, uneven normalisation" under continued conflict, with traffic recovering through operational adaptation rather than waiting for a diplomatic trigger.`,
    bodyJa: `U.S. President Donald Trump said Wednesday that he no longer wants a deal with Iran, following reports that the U.S. military is preparing for possible strikes against the country, likely before the midterm election.
"I think the deal isn't really something that I want to do, but they're willing to offer us anything to stop," Trump said at a campaign rally with Republican candidates in San Antonio, Texas, late Wednesday stateside. Steve Witkoff, the U.S. special envoy to the Middle East, has been working on the deal and "doing very well," Trump added.
The U.S. president and his national security team have discussed possibly resuming large-scale U.S. military operations in the coming weeks, NBC News reported Wednesday, citing a U.S. official and another person with knowledge of the discussions.
Axios reported earlier in the day that a possible resumption in armed conflict could include "massive bombing" of Iranian energy, infrastructure and nuclear targets, adding that military aggression could influence the outcome of the upcoming midterm elections.
Trump has seen his approval ratings fall to a record low amid concerns over high living costs spurred by soaring gasoline and diesel prices.
Earlier this week, Trump said the biggest problem for Washington was that nobody knew who was running Iran during the talks to end the conflict. Iranian officials rejected those claims, saying "the problem is actually the opposite." Iran's foreign ministry spokesperson Esmaeli Baghaei pointed to the "contradictory positions and mixed messaging from U.S. officials."
Crude oil prices have remained elevated even as Middle East exports have been recovering to near pre-war levels, according to Kpler. Combined crude volumes exiting the Gulf, excluding Iran, plus volumes from Saudi Arabia and the United Arab Emirates, were around pre-conflict levels of 18.5 million barrels per day (Mbd).
"Normalisation no longer needs to wait for a deal," said Matt Wright, lead freight analyst at Kpler, forecasting "slower, uneven normalisation" under continued conflict, with traffic recovering through operational adaptation rather than waiting for a diplomatic trigger.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/08/us-iran-war-trump-hormuz.html",
    publishedAt: "2026-10-08T03:29:29+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 5,
  },
  {
    id: "ai-chip-boom-pushes-samsung-profits-to-r-f0467446",
    title: "AI chip boom pushes Samsung profits to record $80bn",
    titleJa: "AI chip boom pushes Samsung profits to record $80bn",
    summaryJa: "The tech giant is also expected to get a boost from its latest folding devices that were launched in August.",
    bodyOriginal: `AI chip boom pushes Samsung profits to record $80bn
- Published
Samsung Electronics says it expects a nine-fold surge in its quarterly profits compared with a year earlier, driven by surging demand for memory chips used in artificial intelligence (AI) data centres.
The tech giant estimates that its operating profit for the three months to the end of September will jump to 107.4tn won (£61bn; $80bn), its fourth quarter in a row of record earnings.
Samsung is one of the world's largest memory chip makers alongside local rival SK Hynix and Micron in the US, which produce chips crucial for AI firms like Nvidia.
Samsung, which makes the Galaxy Fold and S26 smartphones, is also expected to get a boost from its latest folding devices that were launched in August.
The firm's full third-quarter earnings will be released at the end of October.
Major South Korean companies tend to release previews of their earnings to advise investors ahead of more detailed reports.
There has been huge global demand for computer chips that power AI development, helping to lift the earnings and shares of manufacturers linked to the technology.
The surge in demand in recent years has resulted in a shortage of semiconductors globally, pushing up sales for firms like Samsung, with its stock market valuation crossing $1tn (£757bn) earlier this year.
Investment in the industry has surged, with US tech giants including Google, Amazon and Meta pledging to pour more than $650bn into AI projects this year.
In June, South Korea unveiled plans for at least $880bn in projects led by Samsung and SK Hynix to build out the country's chip manufacturing capabilities in the coming years.
Rival Asian firms in Japan, China and Taiwan are also investing heavily in chip plants as demand for AI soars.
A chip shortage driven by surging demand has led firms including Samsung to raise prices, making products such as smartphones and computers more expensive.
- Published29 June
- Published19 September 2024`,
    bodyJa: `AI chip boom pushes Samsung profits to record $80bn
- Published
Samsung Electronics says it expects a nine-fold surge in its quarterly profits compared with a year earlier, driven by surging demand for memory chips used in artificial intelligence (AI) data centres.
The tech giant estimates that its operating profit for the three months to the end of September will jump to 107.4tn won (£61bn; $80bn), its fourth quarter in a row of record earnings.
Samsung is one of the world's largest memory chip makers alongside local rival SK Hynix and Micron in the US, which produce chips crucial for AI firms like Nvidia.
Samsung, which makes the Galaxy Fold and S26 smartphones, is also expected to get a boost from its latest folding devices that were launched in August.
The firm's full third-quarter earnings will be released at the end of October.
Major South Korean companies tend to release previews of their earnings to advise investors ahead of more detailed reports.
There has been huge global demand for computer chips that power AI development, helping to lift the earnings and shares of manufacturers linked to the technology.
The surge in demand in recent years has resulted in a shortage of semiconductors globally, pushing up sales for firms like Samsung, with its stock market valuation crossing $1tn (£757bn) earlier this year.
Investment in the industry has surged, with US tech giants including Google, Amazon and Meta pledging to pour more than $650bn into AI projects this year.
In June, South Korea unveiled plans for at least $880bn in projects led by Samsung and SK Hynix to build out the country's chip manufacturing capabilities in the coming years.
Rival Asian firms in Japan, China and Taiwan are also investing heavily in chip plants as demand for AI soars.
A chip shortage driven by surging demand has led firms including Samsung to raise prices, making products such as smartphones and computers more expensive.
- Published29 June
- Published19 September 2024`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c687z8127302o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-08T01:59:54+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/2882/live/c97d4d10-c2b4-11f1-a0fd-81bd2aaa775c.jpg",
    readTime: 5,
  },
  {
    id: "what-independence-could-mean-for-oil-ric-bd2cfeb1",
    title: "What independence could mean for oil-rich Alberta's economy",
    titleJa: "What independence could mean for oil-rich Alberta's economy",
    summaryJa: "Albertans vote this month on staying in Canada or moving ahead to a binding independence referendum.",
    bodyOriginal: `What independence could mean for oil-rich Alberta's economy
- Published
For Alberta independence supporter Keith Wilson, the western Canadian province is in a league of its own.
With its wealth of rich oil and gas reserves, a significant agricultural sector and a young and skilled workforce, its economy is one to be reckoned with, says Wilson.
The province will hold a referendum on 19 October, giving residents two options: vote to stay in Canada, or vote to move ahead with a formal binding referendum on independence at a later date.
The vote, despite not being a cut and dry "stay or leave", still stands to be among the most consequential in recent Canadian history, and a significant test of national unity.
One key issue has become central to the debate: Would Alberta be richer if it were to become an independent country?
The answer for Wilson is yes.
"Alberta's economy is unique. is fundamentally different than the rest of Canada's - we have the people, the institutions, the infrastructure to excel," he says.
Alberta separatists have long argued that the province has been short-changed by being part of Canada, and that more of the oil and gas wealth would be kept within its borders instead of being shared with Ottawa, delivering it tens of billions in savings.
But many disagree with their accounting.
Alberta Premier Danielle Smith, who opposes independence, predicts a more sober outcome. She says the province could risk paying C$400bn ($283bn; £213bn) in transition costs alone, while bleeding billions more in lost investments and trade due to the political upheaval.
A report commissioned, external by her government released earlier this month calculated the costs of separation as between C$50bn and C$170bn over five years - and a highly unpredictable outlook over the long term.
The report cautions that the to-do list for a newly independent Alberta would be long and costly.
It would have to set up agencies to manage taxes and national security, develop its own constitution, legal and court systems, and pension plans, and negotiate the division of federal assets like national parks and military bases.
Lennie Kaplan, a former finance official in Alberta, says the province would be expected to take on a share of Canada's national debt, among many other fiscal challenges and responsibilities.
A report on Alberta independence by the CanadaWest Foundation, external, a non-profit Alberta-based think tank, estimates that the province could be stuck with additional debt ranging from C$258bn to C$333bn.
With a projected hit to Alberta's GDP and the additional costs, the report estimates separation could hit Albertans' bottom line and reduce their disposable income by 5.8% on average.
"Why do we have to create all this uncertainty that might impact and impair the province's fiscal position going forward? Why wouldn't we just work within Canada to address these issues?" Kaplan asks.
Opinion polling indicates that around 20% to 25% of Albertans plan to vote in favour of moving ahead with a binding separation referendum, with higher support among younger, rural and conservative voters.
Behind the separatist push is the belief that Alberta is misunderstood and overlooked by decision-makers in Ottawa. For decades, that sentiment fuelled a sense of "western alienation" in the prairie province.
Once a fringe movement, a number of factors pushed it to the forefront of Alberta politics.
There was anger over environmental and political pushback that killed proposed pipelines from landlocked Alberta to coastal waters.
A decade of Liberal government in Ottawa has also caused frustration in reliably conservative Alberta. And, in addition, there is also leftover distrust of the federal government over what some Albertans saw as excessive lockdowns during the Covid-19 pandemic.
Over the past year, separatist organisers held townhalls across the province to gauge interest from the public. They then launched a citizen-led petition to separate earlier this year, which got more than 300,000 signatures.
Smith, the premier, decided earlier this year she would authorise a vote.
Alberta is home to Canada's oil and gas sector, with oil reserves estimated to be the fourth-largest in the world. Crude oil is by far Canada's most profitable commodity, accounting for C$142bn in export value in 2025 alone.
Most of it is sold to refineries in the US.
The province has the highest GDP per capita in the country, and it contributes billions a year to the federal tax pool because of its strong economy.
It has not received any "equalisation" payments - money that so-called "have not", or less wealthy, provinces receive from the federal government - since 1965.
Calculations by Tegan Hill and Nathaniel Li, economists at the Fraser Institute think tank, show that Alberta's total net contribution to Ottawa since 2007 has been C$322bn, or an average of around $17bn per year.
"That's nearly four times that of British Columbia, more than four times Ontario," Hill tells the BBC. "The other seven provinces were net recipients, meaning Ottawa spent or transferred more money to those provinces than it collected."
Hill explains that the amount Alberta contributes to the rest of Canada is one of the main frustrations cited by those in favour of separation.
The sentiment, she says, is that: "We're paying to support these other provinces, and if we just went our own way, we could keep all that wealth for ourselves."
This belief is at the heart of the economic projections from the Alberta Prosperity Project, one of the main groups organising in favour of independence.
In its fiscal plan, released last year, external, they estimate Alberta will save up to C$47bn annually if it stops paying federal taxes.
The plan acknowledges that Alberta's costs would be higher if it were independent because it would have to pay for things like national defence and international diplomacy, estimating those costs to be up to C$31.6bn annually.
This would be in addition to paying for things Alberta as a province already covers, like healthcare and education, which cost around C$75bn.
After all its essentials and new expenses are paid for, the Alberta Prosperity Project estimates a surplus of C$24bn to C$46bn per year.
With all this extra money, proponents of separation argue Alberta could lower taxes on individuals by more than C$10,000 a year, build out its infrastructure or invest the surplus into the province's wealth fund.
But a number of economists argue their projections lack clarity and likely overestimate the windfall.
Hill of the Fraser Institute says one of the biggest drivers for economic decline is prolonged uncertainty, especially if the referendum doesn't put the issue to bed or if it ends up in a lengthy divorce from Canada.
"If someone doesn't know if Alberta is going to be a part of Canada or if it's going to go on its own way in the next couple years, in what world are they going to be putting their money in the province?" she asks.
Prime Minister Mark Carney often points to Brexit - the vote to separate Britain from the European Union - as a cautionary tale for Alberta.
The UK economy has taken a 6% hit from the effects of Brexit, according to one report published earlier this year. If Alberta's economy suffered a similar fate post-independence, its economy could shrink by C$62bn annually, according to one projection by Calgary-based economist Trevor Tombe.
This would also result in its workforce shrinking by 175,000, he estimated.
Wilson dismisses that comparison, arguing the "fundamental dynamics are completely different".
He says some of the projections by the stay side are all "doom and gloom", joking that the only possible negative they failed to include is "a large asteroid hitting Canada".
"We're a resource economy. We have leverage. We have products the world wants. That's why investment comes here, despite the constraints imposed by Ottawa," he says.`,
    bodyJa: `What independence could mean for oil-rich Alberta's economy
- Published
For Alberta independence supporter Keith Wilson, the western Canadian province is in a league of its own.
With its wealth of rich oil and gas reserves, a significant agricultural sector and a young and skilled workforce, its economy is one to be reckoned with, says Wilson.
The province will hold a referendum on 19 October, giving residents two options: vote to stay in Canada, or vote to move ahead with a formal binding referendum on independence at a later date.
The vote, despite not being a cut and dry "stay or leave", still stands to be among the most consequential in recent Canadian history, and a significant test of national unity.
One key issue has become central to the debate: Would Alberta be richer if it were to become an independent country?
The answer for Wilson is yes.
"Alberta's economy is unique. is fundamentally different than the rest of Canada's - we have the people, the institutions, the infrastructure to excel," he says.
Alberta separatists have long argued that the province has been short-changed by being part of Canada, and that more of the oil and gas wealth would be kept within its borders instead of being shared with Ottawa, delivering it tens of billions in savings.
But many disagree with their accounting.
Alberta Premier Danielle Smith, who opposes independence, predicts a more sober outcome. She says the province could risk paying C$400bn ($283bn; £213bn) in transition costs alone, while bleeding billions more in lost investments and trade due to the political upheaval.
A report commissioned, external by her government released earlier this month calculated the costs of separation as between C$50bn and C$170bn over five years - and a highly unpredictable outlook over the long term.
The report cautions that the to-do list for a newly independent Alberta would be long and costly.
It would have to set up agencies to manage taxes and national security, develop its own constitution, legal and court systems, and pension plans, and negotiate the division of federal assets like national parks and military bases.
Lennie Kaplan, a former finance official in Alberta, says the province would be expected to take on a share of Canada's national debt, among many other fiscal challenges and responsibilities.
A report on Alberta independence by the CanadaWest Foundation, external, a non-profit Alberta-based think tank, estimates that the province could be stuck with additional debt ranging from C$258bn to C$333bn.
With a projected hit to Alberta's GDP and the additional costs, the report estimates separation could hit Albertans' bottom line and reduce their disposable income by 5.8% on average.
"Why do we have to create all this uncertainty that might impact and impair the province's fiscal position going forward? Why wouldn't we just work within Canada to address these issues?" Kaplan asks.
Opinion polling indicates that around 20% to 25% of Albertans plan to vote in favour of moving ahead with a binding separation referendum, with higher support among younger, rural and conservative voters.
Behind the separatist push is the belief that Alberta is misunderstood and overlooked by decision-makers in Ottawa. For decades, that sentiment fuelled a sense of "western alienation" in the prairie province.
Once a fringe movement, a number of factors pushed it to the forefront of Alberta politics.
There was anger over environmental and political pushback that killed proposed pipelines from landlocked Alberta to coastal waters.
A decade of Liberal government in Ottawa has also caused frustration in reliably conservative Alberta. And, in addition, there is also leftover distrust of the federal government over what some Albertans saw as excessive lockdowns during the Covid-19 pandemic.
Over the past year, separatist organisers held townhalls across the province to gauge interest from the public. They then launched a citizen-led petition to separate earlier this year, which got more than 300,000 signatures.
Smith, the premier, decided earlier this year she would authorise a vote.
Alberta is home to Canada's oil and gas sector, with oil reserves estimated to be the fourth-largest in the world. Crude oil is by far Canada's most profitable commodity, accounting for C$142bn in export value in 2025 alone.
Most of it is sold to refineries in the US.
The province has the highest GDP per capita in the country, and it contributes billions a year to the federal tax pool because of its strong economy.
It has not received any "equalisation" payments - money that so-called "have not", or less wealthy, provinces receive from the federal government - since 1965.
Calculations by Tegan Hill and Nathaniel Li, economists at the Fraser Institute think tank, show that Alberta's total net contribution to Ottawa since 2007 has been C$322bn, or an average of around $17bn per year.
"That's nearly four times that of British Columbia, more than four times Ontario," Hill tells the BBC. "The other seven provinces were net recipients, meaning Ottawa spent or transferred more money to those provinces than it collected."
Hill explains that the amount Alberta contributes to the rest of Canada is one of the main frustrations cited by those in favour of separation.
The sentiment, she says, is that: "We're paying to support these other provinces, and if we just went our own way, we could keep all that wealth for ourselves."
This belief is at the heart of the economic projections from the Alberta Prosperity Project, one of the main groups organising in favour of independence.
In its fiscal plan, released last year, external, they estimate Alberta will save up to C$47bn annually if it stops paying federal taxes.
The plan acknowledges that Alberta's costs would be higher if it were independent because it would have to pay for things like national defence and international diplomacy, estimating those costs to be up to C$31.6bn annually.
This would be in addition to paying for things Alberta as a province already covers, like healthcare and education, which cost around C$75bn.
After all its essentials and new expenses are paid for, the Alberta Prosperity Project estimates a surplus of C$24bn to C$46bn per year.
With all this extra money, proponents of separation argue Alberta could lower taxes on individuals by more than C$10,000 a year, build out its infrastructure or invest the surplus into the province's wealth fund.
But a number of economists argue their projections lack clarity and likely overestimate the windfall.
Hill of the Fraser Institute says one of the biggest drivers for economic decline is prolonged uncertainty, especially if the referendum doesn't put the issue to bed or if it ends up in a lengthy divorce from Canada.
"If someone doesn't know if Alberta is going to be a part of Canada or if it's going to go on its own way in the next couple years, in what world are they going to be putting their money in the province?" she asks.
Prime Minister Mark Carney often points to Brexit - the vote to separate Britain from the European Union - as a cautionary tale for Alberta.
The UK economy has taken a 6% hit from the effects of Brexit, according to one report published earlier this year. If Alberta's economy suffered a similar fate post-independence, its economy could shrink by C$62bn annually, according to one projection by Calgary-based economist Trevor Tombe.
This would also result in its workforce shrinking by 175,000, he estimated.
Wilson dismisses that comparison, arguing the "fundamental dynamics are completely different".
He says some of the projections by the stay side are all "doom and gloom", joking that the only possible negative they failed to include is "a large asteroid hitting Canada".
"We're a resource economy. We have leverage. We have products the world wants. That's why investment comes here, despite the constraints imposed by Ottawa," he says.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cy745jznvxpo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-07T23:10:13+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/157e/live/547f90e0-b7a1-11f1-bc1f-3f186ca4140c.jpg",
    readTime: 10,
  },
  {
    id: "we-spent-thousands-on-a-tui-river-cruise-c433f2a1",
    title: "We spent thousands on a Tui river cruise but ended up on coach trips",
    titleJa: "We spent thousands on a Tui river cruise but ended up on coach trips",
    summaryJa: "Passengers have described their anger after their itineraries changed to involve hours spent on coach trips instead.",
    bodyOriginal: `We spent thousands on a Tui river cruise but ended up on coach trips
- Published
Passengers who paid thousands of pounds for European river cruises with Tui have described their anger after their itineraries changed to involve hours spent on coach trips instead.
Several have told the BBC they believe they should get some money back, but have been offered no refund.
Tui apologised and blamed low water levels on the Danube, adding that customers continued their holidays on amended itineraries under its standard booking conditions.
It follows previous complaints about conditions on board two of Tui's river vessels.
Those who contacted the BBC include Richard Pearson from Lincolnshire, whose week-long holiday began on 21 September.
Upon arrival in Budapest, he says passengers were told their vessel, Isla, was in Vienna and could not get to them, so they were being put up in a hotel instead, which he describes as "average".
The next day involved a four-hour coach journey to reach the ship.
The vessel then sailed overnight - meaning no chance to take in the scenery - to Krems. It then stayed there for a few days, with passengers bussed on day trips to locations between 45 minutes and two hours away. The return sailing to Vienna was also in the dark.
The one time there was a "scenic sail" during the day, it was a round trip back to Krems which started early in the morning.
'A floating hotel with coach transfers'
Richard says the food and the staff on board Isla were excellent, but overall the experience was not what he expected when he booked the trip - especially the schedule.
He worked out that "we spent 14 to 15 hours of that holiday on a coach trip, plus time wasted waiting for coaches".
Richard says the reason people were given for the changes of plan was "circumstances beyond [Tui's] control because of the low water levels".
"[But] the main thing for us was it wasn't relaxing. It wasn't a river cruise, it was a little bit of sailing, a floating hotel with coach transfers."
If they had been offered a refund, Richard and his partner would have not gone.
He is now contacting Tui to complain and request some of their £3,300 back.
'We feel as though we've been had'
Sue Crosby and her husband booked on Isla, with the holiday starting on 14 September - her 70th birthday.
She had a similar experience and told the BBC: "We feel as though we've been had."
A revised itinerary was sent a few days before departure, making clear there would be multiple coach trips on offer due to low water levels on the Danube.
The couple didn't want to do this and so asked for a refund. But after being told no refund was possible, they travelled "reluctantly".
Even during the trip, the schedule changed further.
It wasn't the river levels themselves that frustrated Sue. "It's how they handled it, and the fact they're still advertising the holidays now."
She also describes the food and the people on the ship as great. However, her complaint is "about the drastic change of itinerary... and the fact we weren't able to get a full refund".
Sue says there were only two half days of sailing where people could actually experience a river cruise.
"We didn't want to go on a tour on coaches every day."
'It's the way they handled it'
David Mallon and a group of five others were due to travel on 21 September. But they decided the new itinerary presented to them a few days before departure was so different from what they had booked that they didn't want to go.
"What they were planning to give us was not a cruise but a glorified coach trip," says David.
One reason for not wanting to accept the new plan was that a member of the group was meant to be avoiding long periods of sitting down - such as coach journeys - for health reasons.
With no offer of a refund, the group booked a last-minute holiday to Kos instead and decided to try and claim money back on their return.
"We don't blame Tui for the water levels, but it's the way they've handled the consequences of that," David says.
He has now submitted a complaint to Tui and says he will take his quest for a refund to the small claims court if necessary.
The BBC contacted Tui River Cruises about passengers' unhappiness with the extensive itinerary changes and the fact they were not offered any refund.
In a statement, a spokesperson said: "Extreme heat across Europe this summer caused low water levels on the Danube, affecting river cruise operators across the region. We review every sailing individually with our nautical partners.
"Customers on the Tui Isla departures on 14 and 21 September were sent revised itineraries before travelling. Where the ship couldn't sail sections of the river, we arranged coach transfers, hotel stays and adjusted travel arrangements to minimise transfer times so customers could still visit destinations, including Budapest, Vienna and Bratislava.
"We reviewed the revised arrangements carefully and customers continued their holiday on the amended itinerary under our standard booking conditions. While customers were still able to visit the key destinations on their itinerary, we're sorry some did not get the river cruise experience they had anticipated."`,
    bodyJa: `We spent thousands on a Tui river cruise but ended up on coach trips
- Published
Passengers who paid thousands of pounds for European river cruises with Tui have described their anger after their itineraries changed to involve hours spent on coach trips instead.
Several have told the BBC they believe they should get some money back, but have been offered no refund.
Tui apologised and blamed low water levels on the Danube, adding that customers continued their holidays on amended itineraries under its standard booking conditions.
It follows previous complaints about conditions on board two of Tui's river vessels.
Those who contacted the BBC include Richard Pearson from Lincolnshire, whose week-long holiday began on 21 September.
Upon arrival in Budapest, he says passengers were told their vessel, Isla, was in Vienna and could not get to them, so they were being put up in a hotel instead, which he describes as "average".
The next day involved a four-hour coach journey to reach the ship.
The vessel then sailed overnight - meaning no chance to take in the scenery - to Krems. It then stayed there for a few days, with passengers bussed on day trips to locations between 45 minutes and two hours away. The return sailing to Vienna was also in the dark.
The one time there was a "scenic sail" during the day, it was a round trip back to Krems which started early in the morning.
'A floating hotel with coach transfers'
Richard says the food and the staff on board Isla were excellent, but overall the experience was not what he expected when he booked the trip - especially the schedule.
He worked out that "we spent 14 to 15 hours of that holiday on a coach trip, plus time wasted waiting for coaches".
Richard says the reason people were given for the changes of plan was "circumstances beyond [Tui's] control because of the low water levels".
"[But] the main thing for us was it wasn't relaxing. It wasn't a river cruise, it was a little bit of sailing, a floating hotel with coach transfers."
If they had been offered a refund, Richard and his partner would have not gone.
He is now contacting Tui to complain and request some of their £3,300 back.
'We feel as though we've been had'
Sue Crosby and her husband booked on Isla, with the holiday starting on 14 September - her 70th birthday.
She had a similar experience and told the BBC: "We feel as though we've been had."
A revised itinerary was sent a few days before departure, making clear there would be multiple coach trips on offer due to low water levels on the Danube.
The couple didn't want to do this and so asked for a refund. But after being told no refund was possible, they travelled "reluctantly".
Even during the trip, the schedule changed further.
It wasn't the river levels themselves that frustrated Sue. "It's how they handled it, and the fact they're still advertising the holidays now."
She also describes the food and the people on the ship as great. However, her complaint is "about the drastic change of itinerary... and the fact we weren't able to get a full refund".
Sue says there were only two half days of sailing where people could actually experience a river cruise.
"We didn't want to go on a tour on coaches every day."
'It's the way they handled it'
David Mallon and a group of five others were due to travel on 21 September. But they decided the new itinerary presented to them a few days before departure was so different from what they had booked that they didn't want to go.
"What they were planning to give us was not a cruise but a glorified coach trip," says David.
One reason for not wanting to accept the new plan was that a member of the group was meant to be avoiding long periods of sitting down - such as coach journeys - for health reasons.
With no offer of a refund, the group booked a last-minute holiday to Kos instead and decided to try and claim money back on their return.
"We don't blame Tui for the water levels, but it's the way they've handled the consequences of that," David says.
He has now submitted a complaint to Tui and says he will take his quest for a refund to the small claims court if necessary.
The BBC contacted Tui River Cruises about passengers' unhappiness with the extensive itinerary changes and the fact they were not offered any refund.
In a statement, a spokesperson said: "Extreme heat across Europe this summer caused low water levels on the Danube, affecting river cruise operators across the region. We review every sailing individually with our nautical partners.
"Customers on the Tui Isla departures on 14 and 21 September were sent revised itineraries before travelling. Where the ship couldn't sail sections of the river, we arranged coach transfers, hotel stays and adjusted travel arrangements to minimise transfer times so customers could still visit destinations, including Budapest, Vienna and Bratislava.
"We reviewed the revised arrangements carefully and customers continued their holiday on the amended itinerary under our standard booking conditions. While customers were still able to visit the key destinations on their itinerary, we're sorry some did not get the river cruise experience they had anticipated."`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cq62j2lzlnm8o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-07T23:05:17+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/1364/live/c9d48c10-c278-11f1-bc2e-018d645d8d21.jpg",
    readTime: 10,
  },
  {
    id: "hedgehog-among-four-animals-chosen-to-fe-51f1a2a2",
    title: "Hedgehog among four animals chosen to feature on new banknotes",
    titleJa: "Hedgehog among four animals chosen to feature on new banknotes",
    summaryJa: "The decision comes after nearly half a million people voted on a shortlist of 18 creatures.",
    bodyOriginal: `Hedgehog among four animals chosen to feature on new banknotes
- Published
Banknotes are getting a nature makeover - and the Bank of England has revealed the four creatures that will feature on our money.
The Atlantic puffin, barn owl, buff-tailed bumblebee and European hedgehog will appear on the redesigned notes in years to come - although no decision has been made about which animal will be shown on which banknote.
The owl, bumblebee and hedgehog topped a public vote in their specific categories, and the puffin was included to celebrate marine life, the coastline and bring variety to the notes, the Bank said.
Wildlife is replacing notable figures from history, such as Sir Winston Churchill, on our cash in a decision that angered a number of leading politicians.
'Four distinct and inspiring animals'
"We have chosen four distinct and inspiring animals that not only showcase the great variety of wildlife we have in the UK but will also enhance the security of our banknotes," said Victoria Cleland, the Bank's chief cashier.
A panel of wildlife experts drew up a shortlist of 18 mammals, birds, amphibians insects and fish which were put forward to public nominations. Respondents were invited to select up to six.
More than 2.5 million votes were cast by 478,531 people, ranging from wildlife enthusiasts to primary school classes.
The buff-tailed bumblebee (Bombus terrestris) was a clear winner, receiving 360,399 votes, nearly 90,000 more than the barn owl (Tyto alba).
The European hedgehog (Erinaceus europaeus) was most popular in the mammals category.
The red fox, in the mammals category, and the common kingfisher, among the birds, received more nominations than the Atlantic puffin. The puffin (Fratercula arctica) was still selected because it was the most popular marine animal.
The Bank said its inclusion added variety to the series, made the denominations easier to distinguish, and gave an opportunity to celebrate the British coastline.
The puffin and bees also feature on coins, as part of the Royal Mint's redesigned 20p and £1 coins respectively.
Each of the quartet of creatures will feature as the central image of a £5, £10, £20 or £50 note, which will also feature other elements from nature as part of their designs, potentially including other shortlisted animals. The monarch will still feature on the other side of the notes.
Rhys Phillips, the Bank's incoming chief cashier who will be responsible for the roll-out of the new series of notes, said the process of designing, testing and printing banknotes could take years.
He said the Bank needed to make sure they were high-quality, resilient and accessible. As the designs were only in the very early stages, they would be unveiled closer to their launch.
"We'll now work to design, test and produce the banknotes, combining the imagery we've announced today with cutting-edge security features and materials science," he said.
Wildlife already appears on banknotes in the UK, with mackerel, otters, red squirrels and osprey featuring on notes issued by the Royal Bank of Scotland, external.
Yet it will be the first time since 1970 that the reverse side of Bank of England notes will no longer feature notable figures from history.
On notes circulating currently, in ascending order of value, are former Prime Minister Sir Winston Churchill, author Jane Austen, artist JMW Turner and mathematician and wartime codebreaker Alan Turing.
The proposed removal of wartime leader Churchill angered Reform leader Nigel Farage, and Liberal Democrat leader Sir Ed Davey, with Conservative leader Kemi Badenoch describing the move as "a silly thing to do".
The Bank said the move was primarily to stop counterfeiting so all images needed to be replaced on banknotes over time.
Related topics
- Published15 March
- Published1 day ago`,
    bodyJa: `Hedgehog among four animals chosen to feature on new banknotes
- Published
Banknotes are getting a nature makeover - and the Bank of England has revealed the four creatures that will feature on our money.
The Atlantic puffin, barn owl, buff-tailed bumblebee and European hedgehog will appear on the redesigned notes in years to come - although no decision has been made about which animal will be shown on which banknote.
The owl, bumblebee and hedgehog topped a public vote in their specific categories, and the puffin was included to celebrate marine life, the coastline and bring variety to the notes, the Bank said.
Wildlife is replacing notable figures from history, such as Sir Winston Churchill, on our cash in a decision that angered a number of leading politicians.
'Four distinct and inspiring animals'
"We have chosen four distinct and inspiring animals that not only showcase the great variety of wildlife we have in the UK but will also enhance the security of our banknotes," said Victoria Cleland, the Bank's chief cashier.
A panel of wildlife experts drew up a shortlist of 18 mammals, birds, amphibians insects and fish which were put forward to public nominations. Respondents were invited to select up to six.
More than 2.5 million votes were cast by 478,531 people, ranging from wildlife enthusiasts to primary school classes.
The buff-tailed bumblebee (Bombus terrestris) was a clear winner, receiving 360,399 votes, nearly 90,000 more than the barn owl (Tyto alba).
The European hedgehog (Erinaceus europaeus) was most popular in the mammals category.
The red fox, in the mammals category, and the common kingfisher, among the birds, received more nominations than the Atlantic puffin. The puffin (Fratercula arctica) was still selected because it was the most popular marine animal.
The Bank said its inclusion added variety to the series, made the denominations easier to distinguish, and gave an opportunity to celebrate the British coastline.
The puffin and bees also feature on coins, as part of the Royal Mint's redesigned 20p and £1 coins respectively.
Each of the quartet of creatures will feature as the central image of a £5, £10, £20 or £50 note, which will also feature other elements from nature as part of their designs, potentially including other shortlisted animals. The monarch will still feature on the other side of the notes.
Rhys Phillips, the Bank's incoming chief cashier who will be responsible for the roll-out of the new series of notes, said the process of designing, testing and printing banknotes could take years.
He said the Bank needed to make sure they were high-quality, resilient and accessible. As the designs were only in the very early stages, they would be unveiled closer to their launch.
"We'll now work to design, test and produce the banknotes, combining the imagery we've announced today with cutting-edge security features and materials science," he said.
Wildlife already appears on banknotes in the UK, with mackerel, otters, red squirrels and osprey featuring on notes issued by the Royal Bank of Scotland, external.
Yet it will be the first time since 1970 that the reverse side of Bank of England notes will no longer feature notable figures from history.
On notes circulating currently, in ascending order of value, are former Prime Minister Sir Winston Churchill, author Jane Austen, artist JMW Turner and mathematician and wartime codebreaker Alan Turing.
The proposed removal of wartime leader Churchill angered Reform leader Nigel Farage, and Liberal Democrat leader Sir Ed Davey, with Conservative leader Kemi Badenoch describing the move as "a silly thing to do".
The Bank said the move was primarily to stop counterfeiting so all images needed to be replaced on banknotes over time.
Related topics
- Published15 March
- Published1 day ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cwe8ld517ry3o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-07T23:01:30+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/ab31/live/c6dee830-c277-11f1-babe-4199b0e7ccea.jpg",
    readTime: 10,
  },
  {
    id: "stop-throwing-shade-the-woman-trying-to-66328fc8",
    title: "'Stop throwing shade' - the woman trying to stop firms leaving the UK",
    titleJa: "'Stop throwing shade' - the woman trying to stop firms leaving the UK",
    summaryJa: "British people need more incentives to invest in big firms listed in the UK, Dame Julia Hoggett, boss of the London Stock Exchange, says.",
    bodyOriginal: `'Stop throwing shade' - the woman trying to stop firms leaving the UK
- Published
The UK needs to do more to back its own companies at a time when a growing number are choosing to list their shares in the US rather than at home, the boss of the London Stock Exchange (LSE) has told the BBC.
Dame Julia Hoggett said the government needed to make it "more attractive" to invest in the UK stock market, otherwise big firms would continue to look overseas for their next stage of growth.
Over the last few years, scores of big firms have left the London market, are considering a move or have been bought by private foreign investors.
The fear is this weakens the UK economy by reducing tax revenues and depressing business valuations.
'Take the handbrake off'
"If we want Britain to back Britain, which is what I hear the chancellor and the prime minister saying, then let's make sure that we're creating structural incentives to do so," Dame Julia told the BBC's Big Boss podcast.
"We need to take the handbrake off."
The LSE's main market is made up of around 930 companies with a total market value of about £4.9 trillion.
Almost 40% are international businesses, hailing from over 80 countries.
But in the last few years, many firms have delisted or moved away from the LSE, including takeaway chain Just Eat, which joined the Amsterdam stock exchange, travel giant Tui which opted for Frankfurt, and Paddy Power-owner Flutter which now trades in New York.
'Stop throwing shade'
Meanwhile, the number of companies newly listing their shares in London has dwindled.
Last year, there were 23 initial public offerings (IPOs) on the London market, with £2.1bn raised. In the US, which has much larger capital markets, there were 354 with $44bn (£33bn) raised.
It has coincided in a big rise of UK investment money flowing into US stocks in search of better returns.
"We talk as a nation about wanting growth in every postcode, but at the moment, a lot of us are funding growth in every zip code," Dame Julia said.
There was "no shortage of great companies and no shortage of capital", she added.
But negative sentiment about the UK market - which was often exaggerated - had contributed to companies leaving in the past, she said.
"We need to stop throwing shade at ourselves as a nation... it's a national habit."
Big Boss Interview: LSE's Dame Julia Hoggett
The boss of the London Stock Exchange speaks to the BBC about the attraction of the UK as a place for companies to list.
However, she said British people needed more "incentives" to invest in UK stocks.
She wants the government to scrap the 0.5% tax, external Britons pay when they purchase UK shares, pointing out there is no tax when they buy foreign stocks.
She also supports the idea of tax credits for Britons investing domestically. The UK had such a scheme until 2016.
Business lobbying group the Confederation of British Industry has called for urgent action to halt the exodus of firms from the London Stock Exchange.
It said that lighter regulation, better marketing and incentives for investors were needed to stem the outflow.
The government declined to say if stock market reform would be part of its Budget this month.
"As has always been the case, decisions on tax are a matter for the chancellor to set out at fiscal events, rather than routinely commenting on rumour, speculation or proposals," a spokesman said.
Related topics
- Published24 April`,
    bodyJa: `'Stop throwing shade' - the woman trying to stop firms leaving the UK
- Published
The UK needs to do more to back its own companies at a time when a growing number are choosing to list their shares in the US rather than at home, the boss of the London Stock Exchange (LSE) has told the BBC.
Dame Julia Hoggett said the government needed to make it "more attractive" to invest in the UK stock market, otherwise big firms would continue to look overseas for their next stage of growth.
Over the last few years, scores of big firms have left the London market, are considering a move or have been bought by private foreign investors.
The fear is this weakens the UK economy by reducing tax revenues and depressing business valuations.
'Take the handbrake off'
"If we want Britain to back Britain, which is what I hear the chancellor and the prime minister saying, then let's make sure that we're creating structural incentives to do so," Dame Julia told the BBC's Big Boss podcast.
"We need to take the handbrake off."
The LSE's main market is made up of around 930 companies with a total market value of about £4.9 trillion.
Almost 40% are international businesses, hailing from over 80 countries.
But in the last few years, many firms have delisted or moved away from the LSE, including takeaway chain Just Eat, which joined the Amsterdam stock exchange, travel giant Tui which opted for Frankfurt, and Paddy Power-owner Flutter which now trades in New York.
'Stop throwing shade'
Meanwhile, the number of companies newly listing their shares in London has dwindled.
Last year, there were 23 initial public offerings (IPOs) on the London market, with £2.1bn raised. In the US, which has much larger capital markets, there were 354 with $44bn (£33bn) raised.
It has coincided in a big rise of UK investment money flowing into US stocks in search of better returns.
"We talk as a nation about wanting growth in every postcode, but at the moment, a lot of us are funding growth in every zip code," Dame Julia said.
There was "no shortage of great companies and no shortage of capital", she added.
But negative sentiment about the UK market - which was often exaggerated - had contributed to companies leaving in the past, she said.
"We need to stop throwing shade at ourselves as a nation... it's a national habit."
Big Boss Interview: LSE's Dame Julia Hoggett
The boss of the London Stock Exchange speaks to the BBC about the attraction of the UK as a place for companies to list.
However, she said British people needed more "incentives" to invest in UK stocks.
She wants the government to scrap the 0.5% tax, external Britons pay when they purchase UK shares, pointing out there is no tax when they buy foreign stocks.
She also supports the idea of tax credits for Britons investing domestically. The UK had such a scheme until 2016.
Business lobbying group the Confederation of British Industry has called for urgent action to halt the exodus of firms from the London Stock Exchange.
It said that lighter regulation, better marketing and incentives for investors were needed to stem the outflow.
The government declined to say if stock market reform would be part of its Budget this month.
"As has always been the case, decisions on tax are a matter for the chancellor to set out at fiscal events, rather than routinely commenting on rumour, speculation or proposals," a spokesman said.
Related topics
- Published24 April`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cmgqwydpd4xwo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-07T23:00:55+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/d29e/live/f8595c00-c264-11f1-b3ac-93b64873b487.jpg",
    readTime: 9,
  },
  {
    id: "samsung-forecasts-record-third-quarter-p-0fb47849",
    title: "Samsung forecasts record third-quarter profit of $80 billion on the back of AI boom",
    titleJa: "Samsung forecasts record third-quarter profit of $80 billion on the back of AI boom",
    summaryJa: "Samsung Electronics reported preliminary third-quarter earnings on Thursday, with operating profit forecast to top 100 trillion won for the first time.",
    bodyOriginal: `Samsung Electronics on Thursday reported third-quarter preliminary operating profit of 107.40 trillion won ($80.2 billion), surging past 100 trillion won for the first time in the company's history as booming demand for artificial intelligence continues to fuel its chips business.
Quarterly operating profit jumped 782% from a year earlier. Revenue came in at about 195 trillion won, up nearly 127% from the same period last year.
Samsung, the world's largest memory chipmaker, has benefited from surging demand for memory used in AI infrastructure. In the second quarter, the company posted record revenue of 171.5 trillion won and record operating profit of 89.5 trillion won, driven by its memory business.
The company has also stepped up investments and partnerships tied to AI. In September, Samsung announced a strategic partnership with French artificial intelligence startup Mistral AI, with plans to deploy the startup's AI models across its semiconductor operations.
Samsung is expected to release its full third-quarter earnings, including a breakdown by business division, later this month.`,
    bodyJa: `Samsung Electronics on Thursday reported third-quarter preliminary operating profit of 107.40 trillion won ($80.2 billion), surging past 100 trillion won for the first time in the company's history as booming demand for artificial intelligence continues to fuel its chips business.
Quarterly operating profit jumped 782% from a year earlier. Revenue came in at about 195 trillion won, up nearly 127% from the same period last year.
Samsung, the world's largest memory chipmaker, has benefited from surging demand for memory used in AI infrastructure. In the second quarter, the company posted record revenue of 171.5 trillion won and record operating profit of 89.5 trillion won, driven by its memory business.
The company has also stepped up investments and partnerships tied to AI. In September, Samsung announced a strategic partnership with French artificial intelligence startup Mistral AI, with plans to deploy the startup's AI models across its semiconductor operations.
Samsung is expected to release its full third-quarter earnings, including a breakdown by business division, later this month.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/08/samsung-q3-earnings.html",
    publishedAt: "2026-10-07T22:58:05+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "anthropic-will-be-most-ridiculous-ipo-of-4689c096",
    title: "Anthropic will be 'most ridiculous IPO' of year, analyst says",
    titleJa: "Anthropic will be 'most ridiculous IPO' of year, analyst says",
    summaryJa: "Anthropic reportedly plans to list on the Nasdaq before Thanksgiving, and one bearish advisory firm suggests that investors sit this one out.",
    bodyOriginal: `As Anthropic barrels toward a potential $2 trillion market cap on the Nasdaq, one research firm is valuing the artificial intelligence company at a mere $150 billion and says Wall Street is about to face an "unprecedented test of investor gullibility."
In a report on Tuesday, independent financial research provider New Constructs called Anthropic's upcoming offering the "most ridiculous IPO of 2026."
To reach its desired valuation, the firm estimates Anthropic would need to record double the trailing year of profit for Nvidia, the world's most valuable tech company. Nvidia's net income over the past four quarters topped $190 billion. Meanwhile, Anthropic's revenue in 2025 was $4.6 billion as the company racked up a net loss of $42 billion, according to Reuters, which cited a leaked copy of the company's prospectus.
Anthropic's mounting operating losses coupled with emerging competition from a plethora of open-source models led New Constructs to conclude that, "We don't think Anthropic has a viable business."
"Since the arrival of open-source models, it's been clear that the closed models would struggle to generate profits," the firm wrote.
David Trainer, founder and CEO of New Constructs, has built a reputation on Wall Street as a notorious bear on IPOs. He's been right in the past.
New Constructs called WeWork "the most ridiculous IPO of 2019," ahead of the office-sharing company's planned offering. WeWork had been valued privately at $47 billion, but just six weeks after the New Constructs report, the company pulled its IPO amid weak demand and intense criticism surrounding its financials. WeWork filed for bankruptcy in 2023.
"While Anthropic offers more to society than WeWork ever did, at a $2 trillion valuation, its IPO presents far bigger risks and is positioned to be a far bigger rip off of U.S. capital markets," New Constructs wrote, adding that the IPO's purpose isn't to provide wealth for public markets investors, but rather liquidity for the company's Wall Street backers.
Anthropic didn't respond to a request for comment.
New Constructs was also bearish on Allbirds' IPO in 2021. The shoe company debuted on the Nasdaq and reached a valuation of $4.1 billion on its opening day. Earlier this year, the company sold its assets to American Exchange Group for an estimated $39 million, pivoting to AI in the process.
Trainer's firm has also missed the mark on calls. Its "most ridiculous" 2020 IPO choice was DoorDash, which the firm also compared to WeWork, calling the food delivery company "similarly disadvantaged."
However, DoorDash has held up on the public market. The stock shot up on its first day in December 2020, giving the company a market cap of over $60 billion. That number has since swelled to $83 billion.
In an interview with CNBC in 2021, Trainer acknowledged that "crazy stuff happens" and New Constructs doesn't always get it right.
"I can't let that bother me," he said at the time. "I have to stay true to what I think is right."
Anthropic still hasn't made its prospectus public, so New Constructs hasn't seen the actual filing. However, the firm cited figures that have been reported, including from the New York Times, which reported in September that the company was on pace to generate $100 billion in annualized revenue by the end of 2026.
Anthropic claimed at the end of July that its annualized revenue run rate was up sevenfold year-over-year to $65 billion.
The New Constructs report also notes that Anthropic's assertion that AI could pose "a catastrophic or existential risk to humanity" is another reason why investors should avoid the IPO.
"While we were not fortunate enough to be one of the few to whom Anthropic's S-1 was selectively disclosed, the reports of the leaked financials reveal more than enough to assess the gargantuan risks of investing in this IPO," New Constructs wrote.`,
    bodyJa: `As Anthropic barrels toward a potential $2 trillion market cap on the Nasdaq, one research firm is valuing the artificial intelligence company at a mere $150 billion and says Wall Street is about to face an "unprecedented test of investor gullibility."
In a report on Tuesday, independent financial research provider New Constructs called Anthropic's upcoming offering the "most ridiculous IPO of 2026."
To reach its desired valuation, the firm estimates Anthropic would need to record double the trailing year of profit for Nvidia, the world's most valuable tech company. Nvidia's net income over the past four quarters topped $190 billion. Meanwhile, Anthropic's revenue in 2025 was $4.6 billion as the company racked up a net loss of $42 billion, according to Reuters, which cited a leaked copy of the company's prospectus.
Anthropic's mounting operating losses coupled with emerging competition from a plethora of open-source models led New Constructs to conclude that, "We don't think Anthropic has a viable business."
"Since the arrival of open-source models, it's been clear that the closed models would struggle to generate profits," the firm wrote.
David Trainer, founder and CEO of New Constructs, has built a reputation on Wall Street as a notorious bear on IPOs. He's been right in the past.
New Constructs called WeWork "the most ridiculous IPO of 2019," ahead of the office-sharing company's planned offering. WeWork had been valued privately at $47 billion, but just six weeks after the New Constructs report, the company pulled its IPO amid weak demand and intense criticism surrounding its financials. WeWork filed for bankruptcy in 2023.
"While Anthropic offers more to society than WeWork ever did, at a $2 trillion valuation, its IPO presents far bigger risks and is positioned to be a far bigger rip off of U.S. capital markets," New Constructs wrote, adding that the IPO's purpose isn't to provide wealth for public markets investors, but rather liquidity for the company's Wall Street backers.
Anthropic didn't respond to a request for comment.
New Constructs was also bearish on Allbirds' IPO in 2021. The shoe company debuted on the Nasdaq and reached a valuation of $4.1 billion on its opening day. Earlier this year, the company sold its assets to American Exchange Group for an estimated $39 million, pivoting to AI in the process.
Trainer's firm has also missed the mark on calls. Its "most ridiculous" 2020 IPO choice was DoorDash, which the firm also compared to WeWork, calling the food delivery company "similarly disadvantaged."
However, DoorDash has held up on the public market. The stock shot up on its first day in December 2020, giving the company a market cap of over $60 billion. That number has since swelled to $83 billion.
In an interview with CNBC in 2021, Trainer acknowledged that "crazy stuff happens" and New Constructs doesn't always get it right.
"I can't let that bother me," he said at the time. "I have to stay true to what I think is right."
Anthropic still hasn't made its prospectus public, so New Constructs hasn't seen the actual filing. However, the firm cited figures that have been reported, including from the New York Times, which reported in September that the company was on pace to generate $100 billion in annualized revenue by the end of 2026.
Anthropic claimed at the end of July that its annualized revenue run rate was up sevenfold year-over-year to $65 billion.
The New Constructs report also notes that Anthropic's assertion that AI could pose "a catastrophic or existential risk to humanity" is another reason why investors should avoid the IPO.
"While we were not fortunate enough to be one of the few to whom Anthropic's S-1 was selectively disclosed, the reports of the leaked financials reveal more than enough to assess the gargantuan risks of investing in this IPO," New Constructs wrote.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/07/anthropic-will-be-most-ridiculous-ipo-of-year-analyst-says.html",
    publishedAt: "2026-10-07T22:29:41+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "trump-doesn-t-think-russia-plague-incide-49fdd007",
    title: "Trump doesn't think Russia plague incident is bioweapon, plans Putin call Wednesday",
    titleJa: "Trump doesn't think Russia plague incident is bioweapon, plans Putin call Wednesday",
    summaryJa: "Nearly 200 people were placed under medical observation earlier this week in Russia's Irkutsk region in eastern Siberia over suspected exposure to plague.",
    bodyOriginal: `President Donald Trump said Wednesday that the U.S. does not think the death of a Russian laboratory worker from a suspected case of plague is the result of a bioweapon.
Trump also said he planned to call Russian President Vladimir Putin, who turned 74 on Wednesday, later in the day. Trump previously had said that call would focus on the plague-related incident.
Trump's comments came at an Oval Office event promoting Trump Accounts, the new tax-deferred savings and investment accounts that more than 60 million American children under age 18 have been automatically enrolled in.
Russian media reported earlier this week that nearly 200 people had been placed under medical observation in Russia's Irkutsk region in eastern Siberia over suspected exposure to plague, after a female worker at an anti-plague research institute in Irkutsk fell ill and died.
A reporter at Wednesday's Oval Office event asked Trump, "Is the plague in Russia a bioweapon?"
Trump replied, "Well, we don't think so."
"We're going to find out soon enough. But we don't think so," Trump said. "And if you listen to them, it's under control. You know, people have said that before about other things."
Asked if he was "getting the same vibe" from Russia that he got from China at the start of the Covid-19 outbreak there, Trump acknowledged, "China didn't say much, and Russia is not saying much either."
"But they do say they have it very much under control," Trump said.
Asked about being in contact with Putin, Trump said, "I have a call set up. Today is his birthday."`,
    bodyJa: `President Donald Trump said Wednesday that the U.S. does not think the death of a Russian laboratory worker from a suspected case of plague is the result of a bioweapon.
Trump also said he planned to call Russian President Vladimir Putin, who turned 74 on Wednesday, later in the day. Trump previously had said that call would focus on the plague-related incident.
Trump's comments came at an Oval Office event promoting Trump Accounts, the new tax-deferred savings and investment accounts that more than 60 million American children under age 18 have been automatically enrolled in.
Russian media reported earlier this week that nearly 200 people had been placed under medical observation in Russia's Irkutsk region in eastern Siberia over suspected exposure to plague, after a female worker at an anti-plague research institute in Irkutsk fell ill and died.
A reporter at Wednesday's Oval Office event asked Trump, "Is the plague in Russia a bioweapon?"
Trump replied, "Well, we don't think so."
"We're going to find out soon enough. But we don't think so," Trump said. "And if you listen to them, it's under control. You know, people have said that before about other things."
Asked if he was "getting the same vibe" from Russia that he got from China at the start of the Covid-19 outbreak there, Trump acknowledged, "China didn't say much, and Russia is not saying much either."
"But they do say they have it very much under control," Trump said.
Asked about being in contact with Putin, Trump said, "I have a call set up. Today is his birthday."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/07/trump-russia-plague-bioweapon-putin.html",
    publishedAt: "2026-10-07T21:20:40+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "openai-says-teen-chatgpt-use-limited-but-45286291",
    title: "OpenAI says teen ChatGPT use limited but research finds it an 'unacceptable risk'",
    titleJa: "OpenAI says teen ChatGPT use limited but research finds it an 'unacceptable risk'",
    summaryJa: "The research found that important guardrails for teens using ChatGPT often failed.",
    bodyOriginal: `OpenAI says teen ChatGPT use limited but research finds it an 'unacceptable risk'
- Published
OpenAI's ChatGPT for Teens was designed to promote healthier use of the artificial intelligence (AI) chatbot, but new research has found its important safety features fall short.
The major AI firm rolled out many teen safety guardrails in August, including curbs on emotional dependence and new parental alerts for problematic use.
On Wednesday, OpenAI said it found average teen use of ChatGPT to be relatively limited and tended toward "learning" activity.
However, research released the same day from non-profit Common Sense Media found that ChatGPT still poses an "unacceptable risk" for teens as safety features, including notifying parents of self-harm conversations, often fail.
When OpenAI this summer released what it called ChatGPT for Teens, external, it said users identified as being between the ages of 13 and 17 would be opted into "features to promote healthy use and additional controls for parents".
Those features include preventing teen ChatGPT users from engaging in romantic or other language that could encourage " emotional dependence," including preventing the tool from implying that it was in any way conscious. There are also blocks on sexualized imagery and "reminders" for teens if they were to share an image that was "sensitive."
The features are also meant to enable parents to receive notifications, if they had linked to their children's ChatGPT account, about chats that included discussions of self-harm or disordered eating.
OpenAI said those features have caused an uptick in teen use focused on learning, from study help to advice on their school work.
In addition to seeing the average teen user on ChatGPT for less than 15 minutes a day, OpenAI said that for longer stretches of use, automatic reminders to take a break work well. Almost half of teen users quickly stopped using ChatGPT after such a reminder.
The company added that, for teens who are seen to have used ChatGPT for three consecutive hours or more, their prompts included something related to learning in more than 80% of such cases.
But Common Sense Media's new research, external determined that ChatGPT for Teens was an "unacceptable risk" for young people and parents, and said OpenAI should ban people under 18 years old from using the platform until teen guardrails were proven reliable.
An OpenAI spokesman said a review of Common Sense Media's methodology found that much of the testing may have begun and concluded before activation of parental controls was complete."
"We welcome rigorous independent evaluation, but we do not believe Common Sense Media's testing accurately reflects how ChatGPT's teen safeguards work in practice or expert perspectives on how AI can support teens," he said.
While the firm's research, done through multiple accounts registered as belonging to a teen and conversations before and after the teen guardrails were put in place, found that ChatGPT was good at avoiding "sexual roleplay" with young users, other OpenAI guardrails failed, including for discussions of suicide.
The research found that even an hour of teen-ChatGPT conversation about "suicidal ideation, self-harm, or disordered eating on newly created, parent-linked accounts" resulted in "zero" alerts sent to parents.
It was only older ChatGPT accounts with "weeks of accumulated conversation history on sensitive topics" that would result in a parental alert.
In such conversations, ChatGPT also "failed to reliably recommend that teens in crisis connect to a hotline or professional," the report found.
The tests also showed that ChatGPT for Teens continues to do school work, and that the bot still will engage in anthropomorphised language or "talk like it's a friend," despite OpenAI's promise to curb that behaviour.
"ChatGPT for Teens could give parents false confidence in guardrails and safety alerts that frequently don't work," Tom Siegel, who leads the Youth AI Safety Institute within Common Sense, said.
The way young people interact with online platforms has become a major issue in recent years as self-harm and suicide among children has become more common.
This year has seen several lawsuits looking to hold companies like Meta, TikTok and others responsible for harming the mental health of children end in unprecedented losses for the firms.
OpenAI, too, has come under increased scrutiny and legal pressure over the way young people use ChatGPT.
The Tumbler Ridge mass shooting in rural Canada in February was carried out by an 18-year old who had for months prior been discussing gun violence with ChatGPT.
OpenAI has previously apologised for failing to flag the shooter's account with law enforcement, and is facing several lawsuits over the incident.`,
    bodyJa: `OpenAI says teen ChatGPT use limited but research finds it an 'unacceptable risk'
- Published
OpenAI's ChatGPT for Teens was designed to promote healthier use of the artificial intelligence (AI) chatbot, but new research has found its important safety features fall short.
The major AI firm rolled out many teen safety guardrails in August, including curbs on emotional dependence and new parental alerts for problematic use.
On Wednesday, OpenAI said it found average teen use of ChatGPT to be relatively limited and tended toward "learning" activity.
However, research released the same day from non-profit Common Sense Media found that ChatGPT still poses an "unacceptable risk" for teens as safety features, including notifying parents of self-harm conversations, often fail.
When OpenAI this summer released what it called ChatGPT for Teens, external, it said users identified as being between the ages of 13 and 17 would be opted into "features to promote healthy use and additional controls for parents".
Those features include preventing teen ChatGPT users from engaging in romantic or other language that could encourage " emotional dependence," including preventing the tool from implying that it was in any way conscious. There are also blocks on sexualized imagery and "reminders" for teens if they were to share an image that was "sensitive."
The features are also meant to enable parents to receive notifications, if they had linked to their children's ChatGPT account, about chats that included discussions of self-harm or disordered eating.
OpenAI said those features have caused an uptick in teen use focused on learning, from study help to advice on their school work.
In addition to seeing the average teen user on ChatGPT for less than 15 minutes a day, OpenAI said that for longer stretches of use, automatic reminders to take a break work well. Almost half of teen users quickly stopped using ChatGPT after such a reminder.
The company added that, for teens who are seen to have used ChatGPT for three consecutive hours or more, their prompts included something related to learning in more than 80% of such cases.
But Common Sense Media's new research, external determined that ChatGPT for Teens was an "unacceptable risk" for young people and parents, and said OpenAI should ban people under 18 years old from using the platform until teen guardrails were proven reliable.
An OpenAI spokesman said a review of Common Sense Media's methodology found that much of the testing may have begun and concluded before activation of parental controls was complete."
"We welcome rigorous independent evaluation, but we do not believe Common Sense Media's testing accurately reflects how ChatGPT's teen safeguards work in practice or expert perspectives on how AI can support teens," he said.
While the firm's research, done through multiple accounts registered as belonging to a teen and conversations before and after the teen guardrails were put in place, found that ChatGPT was good at avoiding "sexual roleplay" with young users, other OpenAI guardrails failed, including for discussions of suicide.
The research found that even an hour of teen-ChatGPT conversation about "suicidal ideation, self-harm, or disordered eating on newly created, parent-linked accounts" resulted in "zero" alerts sent to parents.
It was only older ChatGPT accounts with "weeks of accumulated conversation history on sensitive topics" that would result in a parental alert.
In such conversations, ChatGPT also "failed to reliably recommend that teens in crisis connect to a hotline or professional," the report found.
The tests also showed that ChatGPT for Teens continues to do school work, and that the bot still will engage in anthropomorphised language or "talk like it's a friend," despite OpenAI's promise to curb that behaviour.
"ChatGPT for Teens could give parents false confidence in guardrails and safety alerts that frequently don't work," Tom Siegel, who leads the Youth AI Safety Institute within Common Sense, said.
The way young people interact with online platforms has become a major issue in recent years as self-harm and suicide among children has become more common.
This year has seen several lawsuits looking to hold companies like Meta, TikTok and others responsible for harming the mental health of children end in unprecedented losses for the firms.
OpenAI, too, has come under increased scrutiny and legal pressure over the way young people use ChatGPT.
The Tumbler Ridge mass shooting in rural Canada in February was carried out by an 18-year old who had for months prior been discussing gun violence with ChatGPT.
OpenAI has previously apologised for failing to flag the shooter's account with law enforcement, and is facing several lawsuits over the incident.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cwz0vrmxkvy4o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-07T20:34:17+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/8459/live/4bc569a0-c27f-11f1-98ea-35e6bf307fc9.jpg",
    readTime: 10,
  },
  {
    id: "supertanker-chartered-from-gulf-coast-to-74bcb604",
    title: "Supertanker chartered from Gulf Coast to China for $76 million, 10 times higher than pre-war level",
    titleJa: "Supertanker chartered from Gulf Coast to China for $76 million, 10 times higher than pre-war level",
    summaryJa: "Shipping costs have exploded as the war in the Persian Gulf has led to a shortage of available tankers.",
    bodyOriginal: `(Subscribe to Brian Sullivan's "Power Insider" newsletter here.)
A supertanker was recently chartered to sail from the U.S. Gulf Coast to China for $76 million, a source familiar told CNBC, as shipping costs soar globally due to the crisis in the Middle East.
The Alexandros was chartered by the trading firm Trafigura and is expected to load around Nov. 19, the source said. A normal rate for the route based on pre-war levels would be $7 million to $10 million.
The cost of the journey comes to $38 per barrel of oil assuming the tanker holds 2 million barrels. Shipping costs have exploded as the war in the Persian Gulf has led to a shortage of available tankers.
The Middle East producers are using a shuttle system to export oil through the Strait of Hormuz. A loaded tanker crosses the strait and then loads the oil onto another ship in the Gulf of Oman that takes the cargo to Asia.
This system reduces the exposure to Iranian attack and has led to a rebound of crude exports through Hormuz. But it also requires a lot more ships to get the oil out of the Gulf.`,
    bodyJa: `(Subscribe to Brian Sullivan's "Power Insider" newsletter here.)
A supertanker was recently chartered to sail from the U.S. Gulf Coast to China for $76 million, a source familiar told CNBC, as shipping costs soar globally due to the crisis in the Middle East.
The Alexandros was chartered by the trading firm Trafigura and is expected to load around Nov. 19, the source said. A normal rate for the route based on pre-war levels would be $7 million to $10 million.
The cost of the journey comes to $38 per barrel of oil assuming the tanker holds 2 million barrels. Shipping costs have exploded as the war in the Persian Gulf has led to a shortage of available tankers.
The Middle East producers are using a shuttle system to export oil through the Strait of Hormuz. A loaded tanker crosses the strait and then loads the oil onto another ship in the Gulf of Oman that takes the cargo to Asia.
This system reduces the exposure to Iranian attack and has led to a rebound of crude exports through Hormuz. But it also requires a lot more ships to get the oil out of the Gulf.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/07/supertanker-from-us-to-china-chartered-for-76-million-source.html",
    publishedAt: "2026-10-07T20:33:34+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "fed-officials-see-another-hike-coming-bu-b58072cb",
    title: "Fed officials see another hike coming, but no sign as to when, minutes show",
    titleJa: "Fed officials see another hike coming, but no sign as to when, minutes show",
    summaryJa: "The Federal Reserve on Wednesday released minutes from its Sept. 15-16 policy meeting.",
    bodyOriginal: `Federal Reserve officials expect they will raise interest rates again before the end of the year to head off inflation that has run above target for more than five years, according to meeting minutes released Wednesday.
But the meeting summary provided no indication of when specifically policymakers expected to raise benchmark rates – only that persistently higher prices and a stable labor market likely would lead to a second hike this year. The Fed next decides on rates on Oct. 28 and then again on Dec. 9.
"With regard to the outlook for monetary policy beyond the current meeting, most participants assessed that another increase in the target range for the federal funds rate would likely be appropriate by year end," the document stated.
That position came with a note of caution.
"Participants emphasized, however, that they approached each meeting with an open mind and decisions at future meetings would depend on incoming information and its implications for the outlook and the balance of risks," the minutes said.
Coming off the meeting, which featured tough inflation talk from Chairman Kevin Warsh during his subsequent news conference, markets started betting the Fed would follow the Sept. 16 hike with another move at the late October meeting.
However, recent inflation data and comments from leading Fed officials indicate that at least for October, another increase is unlikely.
The Fed's preferred gauge – the personal consumption expenditures price index – showed core inflation at 3% for August and headline at 3.4%. While both readings were still well north of the central bank's 2% target, they were considerably lower than expectations, benefiting in part from changes in the way some of the inputs are calculated.
Discussion at the September meeting showed officials see risks that inflation will prove sticky, while the labor market is "close to maximum employment" and economic growth overall has picked up.
The vote to raise the benchmark funds rate by a quarter percentage point was unanimous, despite prior indications that several key officials were reluctant to hike.
"Many participants emphasized that a higher path for the target range would be prudent on risk-management grounds, providing insurance against inflation remaining persistently above target due to stronger-than-expected demand or further adverse supply shocks," the summary said.
As a group, the Federal Open Market Committee indicated one more hike this year, then none in 2027. Of the 18 FOMC officials who submitted forecasts, 16 said they expected another increase.
Warsh has not submitted a forecast since taking the position in May. During his news conference, he described the rate rise as removing "a dose of accommodation" from monetary policy, a remark that Wall Street analysts pored over and took to mean that additional increases could be on the way.
But several other officials since then have stressed that the Fed doesn't need to rush, while inflation data has been at least a bit more encouraging even if short-term expectations have risen considerably.
Market-based indicators for inflation are still elevated, and a fresh survey released Wednesday by the New York Fed showed consumer fears over rising prices in the next year are at their highest since May 2023.
Treasury yields have been soaring as well, hitting levels not seen since 2002.
Officials at the meeting discussed the rise in yields, attributing them to expectations for higher rates from the Fed as well as the build-out in artificial intelligence and solid economic growth. Staff economists also noted that some of the surge may have come from "uncertainty related to the U.S. Treasury's announcement and implementation of the buyback program."
Treasury Secretary Scott Bessent in August announced his department would ramp up its buybacks of already-issued long-dated debt. However, the move has had little impact on yields, which are around their highest levels since 2002.`,
    bodyJa: `Federal Reserve officials expect they will raise interest rates again before the end of the year to head off inflation that has run above target for more than five years, according to meeting minutes released Wednesday.
But the meeting summary provided no indication of when specifically policymakers expected to raise benchmark rates – only that persistently higher prices and a stable labor market likely would lead to a second hike this year. The Fed next decides on rates on Oct. 28 and then again on Dec. 9.
"With regard to the outlook for monetary policy beyond the current meeting, most participants assessed that another increase in the target range for the federal funds rate would likely be appropriate by year end," the document stated.
That position came with a note of caution.
"Participants emphasized, however, that they approached each meeting with an open mind and decisions at future meetings would depend on incoming information and its implications for the outlook and the balance of risks," the minutes said.
Coming off the meeting, which featured tough inflation talk from Chairman Kevin Warsh during his subsequent news conference, markets started betting the Fed would follow the Sept. 16 hike with another move at the late October meeting.
However, recent inflation data and comments from leading Fed officials indicate that at least for October, another increase is unlikely.
The Fed's preferred gauge – the personal consumption expenditures price index – showed core inflation at 3% for August and headline at 3.4%. While both readings were still well north of the central bank's 2% target, they were considerably lower than expectations, benefiting in part from changes in the way some of the inputs are calculated.
Discussion at the September meeting showed officials see risks that inflation will prove sticky, while the labor market is "close to maximum employment" and economic growth overall has picked up.
The vote to raise the benchmark funds rate by a quarter percentage point was unanimous, despite prior indications that several key officials were reluctant to hike.
"Many participants emphasized that a higher path for the target range would be prudent on risk-management grounds, providing insurance against inflation remaining persistently above target due to stronger-than-expected demand or further adverse supply shocks," the summary said.
As a group, the Federal Open Market Committee indicated one more hike this year, then none in 2027. Of the 18 FOMC officials who submitted forecasts, 16 said they expected another increase.
Warsh has not submitted a forecast since taking the position in May. During his news conference, he described the rate rise as removing "a dose of accommodation" from monetary policy, a remark that Wall Street analysts pored over and took to mean that additional increases could be on the way.
But several other officials since then have stressed that the Fed doesn't need to rush, while inflation data has been at least a bit more encouraging even if short-term expectations have risen considerably.
Market-based indicators for inflation are still elevated, and a fresh survey released Wednesday by the New York Fed showed consumer fears over rising prices in the next year are at their highest since May 2023.
Treasury yields have been soaring as well, hitting levels not seen since 2002.
Officials at the meeting discussed the rise in yields, attributing them to expectations for higher rates from the Fed as well as the build-out in artificial intelligence and solid economic growth. Staff economists also noted that some of the surge may have come from "uncertainty related to the U.S. Treasury's announcement and implementation of the buyback program."
Treasury Secretary Scott Bessent in August announced his department would ramp up its buybacks of already-issued long-dated debt. However, the move has had little impact on yields, which are around their highest levels since 2002.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/07/fed-officials-see-another-hike-coming-but-no-sign-as-to-when-minutes-show.html",
    publishedAt: "2026-10-07T18:42:36+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "boots-sold-in-7bn-deal-to-canadian-billi-2f4e6806",
    title: "Boots sold in £7bn deal to Canadian billionaire family",
    titleJa: "Boots sold in £7bn deal to Canadian billionaire family",
    summaryJa: "Boots sold in £7bn deal to Canadian billionaire family- Published",
    bodyOriginal: `Boots sold in £7bn deal to Canadian billionaire family
- Published
Boots, the High Street pharmacy and retail chain, has been sold in an $8.9bn (£6.7bn) deal to Canada's billionaire Weston family.
Wittington Investments, the holding company, confirmed it had agreed to buy the 177-year-old retailer on Wednesday from US private equity firm Sycamore Partners and the Pessina family.
Boots started as a simple apothecary in Nottingham but has evolved to become a stalwart of the High Street, expanding its business to sell a vast range of health and beauty products, meal deals and travel accessories.
The chain has performed well in recent years despite challenges from rivals and changing shopping habits.
Its stores have seen lower footfall as people switched to working from home rather than visiting town and city centre offices every weekday.
It has closed hundreds of branches across the UK in recent years, leaving it with about 1,800 stores and 51,000 employees, but remains a familiar British brand.
In its most recent annual results, Boots generated £7.5bn in sales - a 3.2% increase on 2024.
Retail expert Catherine Shuttleworth, chief executive of savvy marketing, said shoppers were unlikely to see much change to stores in the coming months, but added what they can "expect over time is an improved shopping experience as the new owners invest in the business".
She said health and beauty was a "massive area for growth", and fresh investment from its new ownership would help.
The last two decades has seen several changes of ownership under discussion and sometimes completed.
Sycamore only owned the retailer for 18 months, and Shuttleworth said the chopping and changing of owners had been "an unhelpful distraction".
Boots gets new US owner in multi-billion dollar deal
- Published7 March 2025
The company was established by John Boot, who opened the first herbalist store in Nottingham, offering an affordable alternative to traditional medicines in 1849.
It has since expanded over the decades into selling various products, but health products have remained a key part of its business.
As well as vaccines, it offers eye and hearing tests, providing much needed health care support in everyday moments as well as at times of national crisis like the coronavirus pandemic.
It launched its loyalty scheme in 1997, the Advantage Card, which became hugely popular and a move repeated by various retailers since.
Galen Weston, the chairman of Wittington, will become chairman of Boots.
He signalled the new owners had fresh plans for the chain, including shop upgrades and an expansion of healthcare services.
"We see a meaningful opportunity to make a great business even better through stable long-term ownership, further capital investment, and the renewed operating focus required to serve customers with excellence for generations to come," he said.
The Weston family will be buying Boots' retail operations in the UK and Ireland, Boots Opticians, No7 Beauty Company and its Thailand and franchised businesses. It is set be completed in early 2027.
The Weston family owns the Canadian grocery chain Loblaws, pharmacy business Shoppers Drug Mart, and previously owned the London department store Selfridges from 2003 to 2021, before selling it for $4bn.
The separate UK branch of the Weston family is the majority owner of Associated British Foods, the parent firm of Primark.
The Westons were ranked fifth on this year's Sunday Times Rich List with a combined fortune of almost £19bn.
Wittington will have operational control over Boots, it has secured ownership in partnership with Fairfax Financial Holdings, a Toronto-based holding company.
Sycamore Partners, in partnership with Stefano Pessina and his family, will retain ownership of The Boots Group's Farmacias Benavides in Mexico and Alliance Healthcare Deutschland in Germany.
Get in touch
What are your views on Boots? What has been your shopping experience? Get in touch.`,
    bodyJa: `Boots sold in £7bn deal to Canadian billionaire family
- Published
Boots, the High Street pharmacy and retail chain, has been sold in an $8.9bn (£6.7bn) deal to Canada's billionaire Weston family.
Wittington Investments, the holding company, confirmed it had agreed to buy the 177-year-old retailer on Wednesday from US private equity firm Sycamore Partners and the Pessina family.
Boots started as a simple apothecary in Nottingham but has evolved to become a stalwart of the High Street, expanding its business to sell a vast range of health and beauty products, meal deals and travel accessories.
The chain has performed well in recent years despite challenges from rivals and changing shopping habits.
Its stores have seen lower footfall as people switched to working from home rather than visiting town and city centre offices every weekday.
It has closed hundreds of branches across the UK in recent years, leaving it with about 1,800 stores and 51,000 employees, but remains a familiar British brand.
In its most recent annual results, Boots generated £7.5bn in sales - a 3.2% increase on 2024.
Retail expert Catherine Shuttleworth, chief executive of savvy marketing, said shoppers were unlikely to see much change to stores in the coming months, but added what they can "expect over time is an improved shopping experience as the new owners invest in the business".
She said health and beauty was a "massive area for growth", and fresh investment from its new ownership would help.
The last two decades has seen several changes of ownership under discussion and sometimes completed.
Sycamore only owned the retailer for 18 months, and Shuttleworth said the chopping and changing of owners had been "an unhelpful distraction".
Boots gets new US owner in multi-billion dollar deal
- Published7 March 2025
The company was established by John Boot, who opened the first herbalist store in Nottingham, offering an affordable alternative to traditional medicines in 1849.
It has since expanded over the decades into selling various products, but health products have remained a key part of its business.
As well as vaccines, it offers eye and hearing tests, providing much needed health care support in everyday moments as well as at times of national crisis like the coronavirus pandemic.
It launched its loyalty scheme in 1997, the Advantage Card, which became hugely popular and a move repeated by various retailers since.
Galen Weston, the chairman of Wittington, will become chairman of Boots.
He signalled the new owners had fresh plans for the chain, including shop upgrades and an expansion of healthcare services.
"We see a meaningful opportunity to make a great business even better through stable long-term ownership, further capital investment, and the renewed operating focus required to serve customers with excellence for generations to come," he said.
The Weston family will be buying Boots' retail operations in the UK and Ireland, Boots Opticians, No7 Beauty Company and its Thailand and franchised businesses. It is set be completed in early 2027.
The Weston family owns the Canadian grocery chain Loblaws, pharmacy business Shoppers Drug Mart, and previously owned the London department store Selfridges from 2003 to 2021, before selling it for $4bn.
The separate UK branch of the Weston family is the majority owner of Associated British Foods, the parent firm of Primark.
The Westons were ranked fifth on this year's Sunday Times Rich List with a combined fortune of almost £19bn.
Wittington will have operational control over Boots, it has secured ownership in partnership with Fairfax Financial Holdings, a Toronto-based holding company.
Sycamore Partners, in partnership with Stefano Pessina and his family, will retain ownership of The Boots Group's Farmacias Benavides in Mexico and Alliance Healthcare Deutschland in Germany.
Get in touch
What are your views on Boots? What has been your shopping experience? Get in touch.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cwly0jyk2vl5o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-07T17:18:30+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/882a/live/37402510-c257-11f1-ab30-1f92d324dff9.jpg",
    readTime: 10,
  },
  {
    id: "badenoch-says-tories-would-scrap-inherit-c90b3176",
    title: "Badenoch says Tories would scrap inheritance tax on family homes",
    titleJa: "Badenoch says Tories would scrap inheritance tax on family homes",
    summaryJa: "Tory leader says her party is \"coming back\", as she aims to convince voters it has changed after 2024 election defeat.",
    bodyOriginal: `Badenoch says Tories would scrap inheritance tax on family homes
- Published
Conservative Party leader Kemi Badenoch has pledged to scrap inheritance tax (IHT) on family homes while also allowing couples to leave £1m tax-free, in her keynote speech at the party's conference in Birmingham.
Badenoch added her ambition would be for a Conservative government to abolish IHT "as soon as we can afford it", but said she could not currently propose this due to spending commitments on defence, prisons and the economy.
Badenoch also used her speech to try to make clear how the Tories differed to Labour and Reform UK.
She pitched them as the "no-nonsense party" compared to the Reform UK "circus" and accused Prime Minister Andy Burnham of wanting to "live in the past".
Tories united behind Badenoch - but party still needs to win over voters
- Published6 hours ago
Why Tories are talking about winning the next election
- Published1 day ago
What's in the Conservatives' inheritance tax plan and who benefits?
- Published6 hours ago
Rival parties hit back and said the proposals for IHT, which is levied on the value of someone's estate when they die, would prioritise support for wealthier people in the country.
Badenoch arrived in Birmingham's Symphony Hall with a message to Conservative Party members that they face a "battle for the soul of the this nation".
She argued her party is "renewed" and "coming back" as she continued efforts to convince voters that it has changed following an historic defeat at the 2024 general election.
In a nod to those who have defected to Nigel Farage's party, Badenoch said: "The Conservatives have had an export boom of drama queens going to Reform.
"This party is now the no drama party, we are the no-nonsense party."
With the party trailing Labour and Reform in the polls, Badenoch acknowledged that people are "looking through the shop window", they "like what they see" but "not enough of them are buying yet, we need to fix that".
Her inspiration for how to revive a long-standing brand was Marks and Spencer (M&S), saying they have "adapted their style for today's market and people are flooding back".
Badenoch added: "Just like M&S, we must learn from our mistakes, win back trust and make people feel good about our party again."
One of the biggest responses in the room from members came as Badenoch made clear she did not want to do an election deal with Reform.
She described many Reform voters as "our people", adding: "We let them down and we want them to come back home."
Following a section of the speech mocking some of Reform's senior figures, Badenoch said: "To those who say 'unite the right', we are not uniting with that.
"People deserve better than that and we are going to give them better than that. Character, conduct, and standards matter."
She also said she did not want to live in a country run by people who "debate whether my mixed-race children are English".
In one of many jibes aimed at Burnham, Badenoch labelled him a "Paddington Bear prime minister" who was "hoping that the problems will just go away".
In the days ahead of Wednesday's speech, there was widespread speculation that Badenoch would announce changes to IHT.
As the opposition leader neared the end of her 66-minute speech, she said IHT was "supposed to be a tax on the super wealthy" but it is "now a tax on ordinary middle-class families in every corner of our country".
She said: "The next Conservative government will legislate so nobody will ever pay inheritance tax on their family home.
"On top of that, couples would be able to leave an additional £1m tax-free and these changes mean every inheritance tax bill will be cut and the number of families paying inheritance tax will fall by more than half."
The Conservatives have estimated the policy would cost around £6bn a year and believe they have identified £71bn of savings that can be made to government spending, including welfare cuts.
Under the current rules, estates worth more than £325,000, or £500,000 if a home is left to children or grandchildren, can face a 40% tax rate on assets above the threshold.
Married or civil partners can also transfer assets between each other.
In 2023-24, 4.72% of UK deaths resulted in an IHT charge and raised around £7bn for the government.
Badenoch also said her "ambition is to abolish inheritance tax altogether, as soon as we can afford it".
Labour Party chairwoman Bridget Phillipson said: "The Tories haven't changed.
"Kemi Badenoch has shown that the Tories' choice is to do nothing to help ordinary families struggling with the cost of social care, prioritising the wealthiest instead."
Reform UK economy spokesman Robert Jenrick said Badenoch had "chickened out of doing anything big" and is "for the 2%".
The former Tory MP said: "While the Tory Party is offering handouts to multi-millionaires, Reform will give everyone a £500 tax cut by raising the tax-free personal allowance to £15,000.
"The Tory Party is looking after its own in Kensington, Reform is looking after the country."
Elsewhere in her speech, Badenoch referred to other policies the party has announced in recent days.
These include a £10bn anti-missile defence system, 50,000 new prison places and halving the rate of employer national insurance on earnings for people aged between 21 to 24.
They also pledged to scrap the "cliff edge" that means parents in England lose out on childcare support when they earn more than £100,000 a year.
Another policy to be scrapped would be the High Value Council Tax Surcharge (HVCTS), dubbed the "mansion tax".
This is due to take effect from 2028 and introduces an extra levy for owners of properties in England valued at more than £2m.
Liberal Democrat leader Sir Ed Davey responded to the speech by saying Badenoch had been "lecturing the country on fiscal responsibility while making tens of billions in unfunded promises".
Green MP Carla Denyer added: "Kemi Badenoch once again defined the Conservative Party as pro-billionaires, pro-inequality and pro-damaging the environment."
Sign up for our Politics Essential newsletter to keep up with the inner workings of Westminster and beyond.`,
    bodyJa: `Badenoch says Tories would scrap inheritance tax on family homes
- Published
Conservative Party leader Kemi Badenoch has pledged to scrap inheritance tax (IHT) on family homes while also allowing couples to leave £1m tax-free, in her keynote speech at the party's conference in Birmingham.
Badenoch added her ambition would be for a Conservative government to abolish IHT "as soon as we can afford it", but said she could not currently propose this due to spending commitments on defence, prisons and the economy.
Badenoch also used her speech to try to make clear how the Tories differed to Labour and Reform UK.
She pitched them as the "no-nonsense party" compared to the Reform UK "circus" and accused Prime Minister Andy Burnham of wanting to "live in the past".
Tories united behind Badenoch - but party still needs to win over voters
- Published6 hours ago
Why Tories are talking about winning the next election
- Published1 day ago
What's in the Conservatives' inheritance tax plan and who benefits?
- Published6 hours ago
Rival parties hit back and said the proposals for IHT, which is levied on the value of someone's estate when they die, would prioritise support for wealthier people in the country.
Badenoch arrived in Birmingham's Symphony Hall with a message to Conservative Party members that they face a "battle for the soul of the this nation".
She argued her party is "renewed" and "coming back" as she continued efforts to convince voters that it has changed following an historic defeat at the 2024 general election.
In a nod to those who have defected to Nigel Farage's party, Badenoch said: "The Conservatives have had an export boom of drama queens going to Reform.
"This party is now the no drama party, we are the no-nonsense party."
With the party trailing Labour and Reform in the polls, Badenoch acknowledged that people are "looking through the shop window", they "like what they see" but "not enough of them are buying yet, we need to fix that".
Her inspiration for how to revive a long-standing brand was Marks and Spencer (M&S), saying they have "adapted their style for today's market and people are flooding back".
Badenoch added: "Just like M&S, we must learn from our mistakes, win back trust and make people feel good about our party again."
One of the biggest responses in the room from members came as Badenoch made clear she did not want to do an election deal with Reform.
She described many Reform voters as "our people", adding: "We let them down and we want them to come back home."
Following a section of the speech mocking some of Reform's senior figures, Badenoch said: "To those who say 'unite the right', we are not uniting with that.
"People deserve better than that and we are going to give them better than that. Character, conduct, and standards matter."
She also said she did not want to live in a country run by people who "debate whether my mixed-race children are English".
In one of many jibes aimed at Burnham, Badenoch labelled him a "Paddington Bear prime minister" who was "hoping that the problems will just go away".
In the days ahead of Wednesday's speech, there was widespread speculation that Badenoch would announce changes to IHT.
As the opposition leader neared the end of her 66-minute speech, she said IHT was "supposed to be a tax on the super wealthy" but it is "now a tax on ordinary middle-class families in every corner of our country".
She said: "The next Conservative government will legislate so nobody will ever pay inheritance tax on their family home.
"On top of that, couples would be able to leave an additional £1m tax-free and these changes mean every inheritance tax bill will be cut and the number of families paying inheritance tax will fall by more than half."
The Conservatives have estimated the policy would cost around £6bn a year and believe they have identified £71bn of savings that can be made to government spending, including welfare cuts.
Under the current rules, estates worth more than £325,000, or £500,000 if a home is left to children or grandchildren, can face a 40% tax rate on assets above the threshold.
Married or civil partners can also transfer assets between each other.
In 2023-24, 4.72% of UK deaths resulted in an IHT charge and raised around £7bn for the government.
Badenoch also said her "ambition is to abolish inheritance tax altogether, as soon as we can afford it".
Labour Party chairwoman Bridget Phillipson said: "The Tories haven't changed.
"Kemi Badenoch has shown that the Tories' choice is to do nothing to help ordinary families struggling with the cost of social care, prioritising the wealthiest instead."
Reform UK economy spokesman Robert Jenrick said Badenoch had "chickened out of doing anything big" and is "for the 2%".
The former Tory MP said: "While the Tory Party is offering handouts to multi-millionaires, Reform will give everyone a £500 tax cut by raising the tax-free personal allowance to £15,000.
"The Tory Party is looking after its own in Kensington, Reform is looking after the country."
Elsewhere in her speech, Badenoch referred to other policies the party has announced in recent days.
These include a £10bn anti-missile defence system, 50,000 new prison places and halving the rate of employer national insurance on earnings for people aged between 21 to 24.
They also pledged to scrap the "cliff edge" that means parents in England lose out on childcare support when they earn more than £100,000 a year.
Another policy to be scrapped would be the High Value Council Tax Surcharge (HVCTS), dubbed the "mansion tax".
This is due to take effect from 2028 and introduces an extra levy for owners of properties in England valued at more than £2m.
Liberal Democrat leader Sir Ed Davey responded to the speech by saying Badenoch had been "lecturing the country on fiscal responsibility while making tens of billions in unfunded promises".
Green MP Carla Denyer added: "Kemi Badenoch once again defined the Conservative Party as pro-billionaires, pro-inequality and pro-damaging the environment."
Sign up for our Politics Essential newsletter to keep up with the inner workings of Westminster and beyond.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cmn5vw05l0q3o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-07T14:33:11+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/bfc8/live/ac877ba0-c26d-11f1-b278-615cdfb74f16.png",
    readTime: 10,
  },
  {
    id: "used-car-prices-fall-in-q3-while-demand-d6c3300d",
    title: "Used car prices fall in Q3, while demand for fuel-efficient vehicles grows",
    titleJa: "Used car prices fall in Q3, while demand for fuel-efficient vehicles grows",
    summaryJa: "Used vehicle prices are forecast to fall more than previously expected this year, according to Cox Automotive.",
    bodyOriginal: `DETROIT — Used vehicle prices are forecast to fall more than previously expected this year, as high gas prices and broader inflationary costs hit Americans' pocketbooks.
Cox Automotive on Tuesday lowered its forecast for the company's Manheim Used Vehicle Value Index from an increase of 2% to an uptick of 0.2%.
The lower forecast follows a 0.6% decline for the index in September, which marked the first time since early last year when the monthly index hasn't been higher than a year earlier.
The historical average for the Manheim index is about a 2.3% year-over-year gain, but last year it was only up 0.4% after a historical run-up in prices during the coronavirus pandemic earlier in the decade.
Non-adjusted wholesale used-vehicle prices fell 1.2% year over year in September and 1.3% from August as depreciation accelerated in the third quarter.
"The first half of the year actually showed more appreciation than usual, even in the face of higher fuel prices. But with the conflict in the Middle East ongoing, diesel prices at record highs, and interest rates climbing rapidly, increasingly worrying both businesses and consumers, wholesale prices have felt the sting," Cox Automotive's chief economist, Jeremy Robb, said in a release.
The index is a closely monitored gauge for used vehicle prices that tracks the pricing of used vehicles sold at Manheim U.S. wholesale auctions. Retail prices for consumers traditionally follow changes in wholesale costs.
Cox noted electric vehicle sales and off-lease volume continued to grow, reshaping used-vehicle market dynamics as EVs and smaller, fuel-efficient vehicle values increased during the quarter. That compares with poor performances of large trucks and SUVs, the company said.
The juxtaposition in smaller, fuel-efficient cars and larger vehicles occurred as the national average of gas in September was $4.33 per gallon. That was 50 cents higher than the previous September record of $3.83 set in 2023, according to AAA.
Cox said retail demand for used vehicles is relatively healthy, but the pricing changes seem to be signaling dealers have hit a ceiling on what they can charge consumers.
The average listed price of a used vehicle was $27,239 as of August, according to Cox. That compares with new vehicles at an average price of more than $50,000.
The majority of U.S. consumers purchase used vehicles since they're more affordable than new models.`,
    bodyJa: `DETROIT — Used vehicle prices are forecast to fall more than previously expected this year, as high gas prices and broader inflationary costs hit Americans' pocketbooks.
Cox Automotive on Tuesday lowered its forecast for the company's Manheim Used Vehicle Value Index from an increase of 2% to an uptick of 0.2%.
The lower forecast follows a 0.6% decline for the index in September, which marked the first time since early last year when the monthly index hasn't been higher than a year earlier.
The historical average for the Manheim index is about a 2.3% year-over-year gain, but last year it was only up 0.4% after a historical run-up in prices during the coronavirus pandemic earlier in the decade.
Non-adjusted wholesale used-vehicle prices fell 1.2% year over year in September and 1.3% from August as depreciation accelerated in the third quarter.
"The first half of the year actually showed more appreciation than usual, even in the face of higher fuel prices. But with the conflict in the Middle East ongoing, diesel prices at record highs, and interest rates climbing rapidly, increasingly worrying both businesses and consumers, wholesale prices have felt the sting," Cox Automotive's chief economist, Jeremy Robb, said in a release.
The index is a closely monitored gauge for used vehicle prices that tracks the pricing of used vehicles sold at Manheim U.S. wholesale auctions. Retail prices for consumers traditionally follow changes in wholesale costs.
Cox noted electric vehicle sales and off-lease volume continued to grow, reshaping used-vehicle market dynamics as EVs and smaller, fuel-efficient vehicle values increased during the quarter. That compares with poor performances of large trucks and SUVs, the company said.
The juxtaposition in smaller, fuel-efficient cars and larger vehicles occurred as the national average of gas in September was $4.33 per gallon. That was 50 cents higher than the previous September record of $3.83 set in 2023, according to AAA.
Cox said retail demand for used vehicles is relatively healthy, but the pricing changes seem to be signaling dealers have hit a ceiling on what they can charge consumers.
The average listed price of a used vehicle was $27,239 as of August, according to Cox. That compares with new vehicles at an average price of more than $50,000.
The majority of U.S. consumers purchase used vehicles since they're more affordable than new models.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/07/used-cars-manheim-index.html",
    publishedAt: "2026-10-07T13:09:59+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 6,
  },
  {
    id: "10-year-treasury-note-yield-hits-highest-9b3a1865",
    title: "10-year Treasury note yield hits highest level since 2002 as traders brace for key bond sale",
    titleJa: "10-year Treasury note yield hits highest level since 2002 as traders brace for key bond sale",
    summaryJa: "U.S. Treasury yields climbed Wednesday after retreating in the previous session, as oil prices moved higher.",
    bodyOriginal: `U.S. Treasury yields climbed Wednesday, trading back around multiyear highs, as traders braced for the sale of 10-year notes at a time when rising yields have rattled investors around the world.
The benchmark 10-year Treasury was up nearly 8 basis points at 5.35% — its highest level since 2002. The 30-year Treasury bond rose 8.3 basis points to 5.724%, also reaching a 24-year high. The 2-year Treasury note yield was up 2.7 basis points to 4.818%.
One basis point equals 0.01%, and yields and prices move in opposite directions.
The Treasury plans to sell $39 billion of 10-year notes in an auction on Wednesday that will test whether yields are now attractive enough to draw buyers or investors will demand an even bigger premium, amid concerns about inflation, debt levels and term risk. The auction's results will be released at 1 p.m. ET.
This will be the second of three Treasury Department sales this week. The government sold $58 billion in 3-year notes on Tuesday and is scheduled to sell $22 billion 30-year bonds on Thursday.
"We were encouraged by the takedown of Tuesday's 3-year auction supply – which stopped through slightly but didn't tail as had been the previous streak for coupon auctions," BMO's Head of U.S. Rates Strategy Ian Lyngen said in a note at Tuesday's close.
"It goes without saying that [Wednesday's] 10-year supply is far more relevant for setting the tone in US rates. Notwithstanding the solid reception to the 3-year supply, we'll look for an auction concession of significance ahead of the reopening of 10s – either outright or on the curve," the analysts added.
Treasury also will stage its latest buyback operation on Thursday, when it will be targeting maturities between 20 years and 30 years. The liquidity support operation will be at least $4 billion, or double the normal size. The last buyback in that range came to just over $4 billion.
Bonds have been selling off recently with investors concerned about inflation and rising energy prices. The 10-year has surged 60 basis points since the end of July, , while U.S. crude prices have soared 20% in that time.
Selling pressure is also picking up overseas. The yield on the 10-year French bond surged 12 basis points to trade at 4.876%. The 10-year U.K. Gilt yield jumped 7 basis points to 5.447%.
Against that backdrop, FOMC meeting minutes will be released at 2 p.m. ET. Traders will parse them for potential insights on Fed monetary policy decision-making. At the Fed's September meeting, policymakers voted to raise interest rates for the first time since 2023.
The New York Fed at 11 a.m. will release its monthly survey of consumer expectations, which will contain the outlook for inflation at the one-, three- and five-year horizons.`,
    bodyJa: `U.S. Treasury yields climbed Wednesday, trading back around multiyear highs, as traders braced for the sale of 10-year notes at a time when rising yields have rattled investors around the world.
The benchmark 10-year Treasury was up nearly 8 basis points at 5.35% — its highest level since 2002. The 30-year Treasury bond rose 8.3 basis points to 5.724%, also reaching a 24-year high. The 2-year Treasury note yield was up 2.7 basis points to 4.818%.
One basis point equals 0.01%, and yields and prices move in opposite directions.
The Treasury plans to sell $39 billion of 10-year notes in an auction on Wednesday that will test whether yields are now attractive enough to draw buyers or investors will demand an even bigger premium, amid concerns about inflation, debt levels and term risk. The auction's results will be released at 1 p.m. ET.
This will be the second of three Treasury Department sales this week. The government sold $58 billion in 3-year notes on Tuesday and is scheduled to sell $22 billion 30-year bonds on Thursday.
"We were encouraged by the takedown of Tuesday's 3-year auction supply – which stopped through slightly but didn't tail as had been the previous streak for coupon auctions," BMO's Head of U.S. Rates Strategy Ian Lyngen said in a note at Tuesday's close.
"It goes without saying that [Wednesday's] 10-year supply is far more relevant for setting the tone in US rates. Notwithstanding the solid reception to the 3-year supply, we'll look for an auction concession of significance ahead of the reopening of 10s – either outright or on the curve," the analysts added.
Treasury also will stage its latest buyback operation on Thursday, when it will be targeting maturities between 20 years and 30 years. The liquidity support operation will be at least $4 billion, or double the normal size. The last buyback in that range came to just over $4 billion.
Bonds have been selling off recently with investors concerned about inflation and rising energy prices. The 10-year has surged 60 basis points since the end of July, , while U.S. crude prices have soared 20% in that time.
Selling pressure is also picking up overseas. The yield on the 10-year French bond surged 12 basis points to trade at 4.876%. The 10-year U.K. Gilt yield jumped 7 basis points to 5.447%.
Against that backdrop, FOMC meeting minutes will be released at 2 p.m. ET. Traders will parse them for potential insights on Fed monetary policy decision-making. At the Fed's September meeting, policymakers voted to raise interest rates for the first time since 2023.
The New York Fed at 11 a.m. will release its monthly survey of consumer expectations, which will contain the outlook for inflation at the one-, three- and five-year horizons.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/07/treasury-yields-auction-fomc-minutes.html",
    publishedAt: "2026-10-07T12:41:10+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 7,
  },
  {
    id: "ex-bankers-jailed-for-rigging-rates-have-5ce4a274",
    title: "Ex-bankers jailed for rigging rates have convictions quashed",
    titleJa: "Ex-bankers jailed for rigging rates have convictions quashed",
    summaryJa: "Jay Merchant, Jonathan Mathew, Philippe Moryoussef, Alex Pabon, Colin Bermingham had their convictions overturned by the Court of Appeal.",
    bodyOriginal: `Ex-bankers jailed for rigging rates have convictions quashed
- Published
Five former Barclays traders sentenced in one of the biggest scandals of the financial crisis have had their convictions overturned following a long-running legal battle.
Jay Merchant, Jonathan Mathew, Philippe Moryoussef, Alex Pabon, Colin Bermingham were convicted following trials for manipulating the interest rates used for loans between banks.
But their convictions were quashed on Wednesday by the Court of Appeal. The ruling came after two other former City traders had their convictions overturned last year, which has paved the way for others to appeal.
The traders were cast by prosecutors as a symbol of banker greed amid public backlash and anger during the 2008 financial crisis.
Merchant, Mathew, Pabon and Bermingham have all served various jail terms. Moryoussef was sentenced in his absence in 2018, never returned to the UK to serve time after France refused to extradite him.
The prosecutions were over the manipulation of two key interest rate mechanisms: Libor and Euribor, which at the time were used to set borrowing costs on a range of loans such as mortgages and car finance deals.
Mathew said the "strain" of what he had gone through had been a burden on him for the last 10 years.
"Having this conviction quashed is not simply about correcting the record, it's about finally having validation that this is an injustice that never should have happened," the 45-year-old said.
"I now have two children and this means a great deal to have the record corrected for their sake as well."
Merchant, 55, added that he looked forward to moving on with life, but said part of that would be "ensuring that those responsible for what happened are held fully accountable".
Lord Justice Edis said full reasons behind the overturned convictions would be given later on Wednesday.
City traders have rate-rigging convictions quashed
- Published23 July 2025
The financial crisis began in 2008, sending huge economic shockwaves across the world and triggering recessions in many countries.
There was a public backlash against bankers, held by many to be responsible for the crisis, while the financial sector was protected by taxpayer-funded bailouts.
The Libor scandal erupted in 2012, when it was discovered that at the outbreak of the financial crisis, banks had been misrepresenting their positions during the process of setting the lending rate, helping to boost profits and mask difficulties.
Some 19 City traders were convicted in the US and UK between 2015 and 2019 across nine criminal trials held in London and New York.
Each of the former Barclays traders in Wednesday's successful appeal had originally been convicted of a single count of conspiracy to defraud as result of alleged attempts to influence financial benchmark rates.
Two other bankers have already had their names cleared.
Tom Hayes, a former trader at Swiss bank UBS, was the first banker jailed. He won a 10-year legal battle last year to have his conviction overturned at the Supreme Court in July 2025.
His victory alongside that of fellow trader Carlo Palombo, who was jailed in 2019, paved the way for others to challenge their convictions.
Hayes and Palombo argued they were wrongly prosecuted for what were normal commercial practices in order to appease public anger towards the banks over the financial crisis.
The latest ruling means just two traders still have convictions over interest rate rigging - former Deutsche Bank trader Christian Bittar and former Barclays trader Peter Johnson.
Bittar was jailed in 2018 after pleading guilty and served two years in prison. He will challenge his conviction on 9 October.
Johnson was the original whistleblower calling attention to the Libor scandal but pleaded guilty on advice that he had little chance of winning at trial. He also hopes to appeal.`,
    bodyJa: `Ex-bankers jailed for rigging rates have convictions quashed
- Published
Five former Barclays traders sentenced in one of the biggest scandals of the financial crisis have had their convictions overturned following a long-running legal battle.
Jay Merchant, Jonathan Mathew, Philippe Moryoussef, Alex Pabon, Colin Bermingham were convicted following trials for manipulating the interest rates used for loans between banks.
But their convictions were quashed on Wednesday by the Court of Appeal. The ruling came after two other former City traders had their convictions overturned last year, which has paved the way for others to appeal.
The traders were cast by prosecutors as a symbol of banker greed amid public backlash and anger during the 2008 financial crisis.
Merchant, Mathew, Pabon and Bermingham have all served various jail terms. Moryoussef was sentenced in his absence in 2018, never returned to the UK to serve time after France refused to extradite him.
The prosecutions were over the manipulation of two key interest rate mechanisms: Libor and Euribor, which at the time were used to set borrowing costs on a range of loans such as mortgages and car finance deals.
Mathew said the "strain" of what he had gone through had been a burden on him for the last 10 years.
"Having this conviction quashed is not simply about correcting the record, it's about finally having validation that this is an injustice that never should have happened," the 45-year-old said.
"I now have two children and this means a great deal to have the record corrected for their sake as well."
Merchant, 55, added that he looked forward to moving on with life, but said part of that would be "ensuring that those responsible for what happened are held fully accountable".
Lord Justice Edis said full reasons behind the overturned convictions would be given later on Wednesday.
City traders have rate-rigging convictions quashed
- Published23 July 2025
The financial crisis began in 2008, sending huge economic shockwaves across the world and triggering recessions in many countries.
There was a public backlash against bankers, held by many to be responsible for the crisis, while the financial sector was protected by taxpayer-funded bailouts.
The Libor scandal erupted in 2012, when it was discovered that at the outbreak of the financial crisis, banks had been misrepresenting their positions during the process of setting the lending rate, helping to boost profits and mask difficulties.
Some 19 City traders were convicted in the US and UK between 2015 and 2019 across nine criminal trials held in London and New York.
Each of the former Barclays traders in Wednesday's successful appeal had originally been convicted of a single count of conspiracy to defraud as result of alleged attempts to influence financial benchmark rates.
Two other bankers have already had their names cleared.
Tom Hayes, a former trader at Swiss bank UBS, was the first banker jailed. He won a 10-year legal battle last year to have his conviction overturned at the Supreme Court in July 2025.
His victory alongside that of fellow trader Carlo Palombo, who was jailed in 2019, paved the way for others to challenge their convictions.
Hayes and Palombo argued they were wrongly prosecuted for what were normal commercial practices in order to appease public anger towards the banks over the financial crisis.
The latest ruling means just two traders still have convictions over interest rate rigging - former Deutsche Bank trader Christian Bittar and former Barclays trader Peter Johnson.
Bittar was jailed in 2018 after pleading guilty and served two years in prison. He will challenge his conviction on 9 October.
Johnson was the original whistleblower calling attention to the Libor scandal but pleaded guilty on advice that he had little chance of winning at trial. He also hopes to appeal.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cm4g175e8163o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-07T12:28:52+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/f749/live/38a2e400-c244-11f1-b2a8-994b2a5598cb.jpg",
    readTime: 10,
  },
  {
    id: "royal-mail-plans-to-cut-2-500-jobs-8db0cded",
    title: "Royal Mail plans to cut 2,500 jobs",
    titleJa: "Royal Mail plans to cut 2,500 jobs",
    summaryJa: "The postal service firm wants to cut head office and other non-frontline jobs by the end of 2027.",
    bodyOriginal: `Royal Mail plans to cut 2,500 jobs
- Published
Royal Mail has announced plans to cut 2,500 head office and other supporting roles by the end of 2027 as it battles competition and falling demand for letter deliveries.
The cuts at the postal service will represent about 2% of the 131,000-strong workforce.
However, frontline postal workers - posties and drivers - are not part of the proposed restructuring.
Royal Mail said the workforce reduction, designed to improve efficiency, would be achieved through voluntary redundancies and people choosing to leave the company.
"These proposed changes remove duplication and allow us to invest further in the service we deliver for our customers," said chief executive Alistair Cochrane.
He added that the job cuts "will not be easy, but they are an important part of building a stronger, simpler and future-ready Royal Mail for our customers and colleagues".
Royal Mail said it was in formal consultation with its unions, the Communication Workers Union (CWU) and Unite CMA, over the plans.
The CWU said despite reassurances that there would be no compulsory redundancies, the announcement was "further evidence of a company that is demoralising staff and failing to deliver for customers and the wider community".
"We urge the government to confront the reality of a collapsing Royal Mail and intervene to save this national institution," deputy general secretary Martin Walsh told the BBC.
Royal Mail has been struggling to meet its delivery targets for first and second class post, and has been fined by the regulator for missing targets in recent years.
Just over 75% of first class letters were delivered on time in the year to the end of March, far off its target of 93%.
Fewer people are sending letters, and the company has repeatedly said that its Universal Service Obligation (USO) – a legal requirement to deliver letters six days a week to every address in the UK – is outdated and needs reform.
Royal Mail, which is a separate from the Post Office, has faced years of criticism from politicians and the public over slow letter deliveries.
In March, postal workers across the UK told the BBC they were being asked to move or hide mail from senior bosses to make it look like delivery targets were being met.
This year, more than 100 MPs have written to regulator Ofcom and the business secretary asking for something to be done about the poor service their constituents say they are receiving.
The firm has said it is investing £500m over the next five years as part of its improvement plan.
Royal Mail is owned by Czech billionaire Daniel Kretinsky's EP Group, after his takeover was approved by shareholders at the end of April last year.
Kretinsky has previously said he will not walk away from the requirement to deliver letters throughout the UK six days a week, as long as he is running the service.
Get in touch
Do you work for Royal Mail? Tell us your story
Related topics
- Published29 May
- Published4 days ago`,
    bodyJa: `Royal Mail plans to cut 2,500 jobs
- Published
Royal Mail has announced plans to cut 2,500 head office and other supporting roles by the end of 2027 as it battles competition and falling demand for letter deliveries.
The cuts at the postal service will represent about 2% of the 131,000-strong workforce.
However, frontline postal workers - posties and drivers - are not part of the proposed restructuring.
Royal Mail said the workforce reduction, designed to improve efficiency, would be achieved through voluntary redundancies and people choosing to leave the company.
"These proposed changes remove duplication and allow us to invest further in the service we deliver for our customers," said chief executive Alistair Cochrane.
He added that the job cuts "will not be easy, but they are an important part of building a stronger, simpler and future-ready Royal Mail for our customers and colleagues".
Royal Mail said it was in formal consultation with its unions, the Communication Workers Union (CWU) and Unite CMA, over the plans.
The CWU said despite reassurances that there would be no compulsory redundancies, the announcement was "further evidence of a company that is demoralising staff and failing to deliver for customers and the wider community".
"We urge the government to confront the reality of a collapsing Royal Mail and intervene to save this national institution," deputy general secretary Martin Walsh told the BBC.
Royal Mail has been struggling to meet its delivery targets for first and second class post, and has been fined by the regulator for missing targets in recent years.
Just over 75% of first class letters were delivered on time in the year to the end of March, far off its target of 93%.
Fewer people are sending letters, and the company has repeatedly said that its Universal Service Obligation (USO) – a legal requirement to deliver letters six days a week to every address in the UK – is outdated and needs reform.
Royal Mail, which is a separate from the Post Office, has faced years of criticism from politicians and the public over slow letter deliveries.
In March, postal workers across the UK told the BBC they were being asked to move or hide mail from senior bosses to make it look like delivery targets were being met.
This year, more than 100 MPs have written to regulator Ofcom and the business secretary asking for something to be done about the poor service their constituents say they are receiving.
The firm has said it is investing £500m over the next five years as part of its improvement plan.
Royal Mail is owned by Czech billionaire Daniel Kretinsky's EP Group, after his takeover was approved by shareholders at the end of April last year.
Kretinsky has previously said he will not walk away from the requirement to deliver letters throughout the UK six days a week, as long as he is running the service.
Get in touch
Do you work for Royal Mail? Tell us your story
Related topics
- Published29 May
- Published4 days ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cwvgdld13e3eo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-07T12:25:46+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/f14c/live/dee1ef00-c235-11f1-be2f-0fbd447d6e43.jpg",
    readTime: 7,
  },
  {
    id: "ice-came-to-town-and-left-behind-weakene-199c0055",
    title: "ICE came to town and left behind weakened economies",
    titleJa: "ICE came to town and left behind weakened economies",
    summaryJa: "Research links ICE enforcement surges to lasting declines in local spending, foot traffic and jobs. In Minneapolis, businesses are still recovering.",
    bodyOriginal: `MINNEAPOLIS — Operation Metro Surge has been over for months. The same can't be said for the crisis facing Daniel Hernandez's Colonial Market grocery stores.
After Hernandez's parking lot became a well-known hangout spot for Immigration and Customs Enforcement officers, the lines that Hernandez grew accustomed to seeing each morning at his stores disappeared. The rebound in traffic Hernandez hoped to see after the end of the surge never materialized.
"We're barely — literally barely — surviving," Hernandez told CNBC in an interview inside one of his stores, where Spanish-language music played through speakers and piñatas dangled from the ceiling. "The damage has been done."
This summer, Hernandez shuttered Colonial Market's location on Lake Street, the heart of Minneapolis' Hispanic business community. Hernandez had spent savings and borrowed money against his house to open the store two years prior. He said sales at his stores have declined by roughly 60%.
The financial turmoil facing Hernandez and others in Minneapolis is being experienced, to varying degrees, in communities across the country. As President Donald Trump has directed federal immigration officers to carry out mass deportations in major U.S. cities during his second term, a growing body of research shows that a monthslong economic chill followed.
Cities where immigration raids took place in 2025 experienced a nearly 3% decline in weekly foot traffic and a more than 6% drawdown in spending, according to an analysis from University of Pennsylvania professor Zeke Hernandez. (No one with the surname Hernandez mentioned in this article is related to one another.)
Collectively, he found that resulted in around 8 billion fewer visits and billions of dollars worth of lost spending in those places that year.
"You are creating recession-like conditions in targeted neighborhoods," Zeke Hernandez said. "It's like a localized recession."
'Disaster' in Minnesota
Operation Metro Surge, which was billed as the largest-ever immigration enforcement action by the Department of Homeland Security, ran from early December to mid-February in Minneapolis. Months after its official conclusion, local businesses were still trying to get back on steady ground while community leaders calculate the economic effects.
The Lake Street Council said immigrant-owned businesses in the commercial district cumulatively lost $46 million in December and January. Council members went door to door in the months after the surge to help small business owners — several of whom do not speak English as their first language, if at all — complete paperwork for emergency relief funds.
At bars and eateries in the ZIP codes containing the Lake Street corridor, year-over-year foot traffic underperformed nearby neighborhoods for months after the surge officially ended, according to data analyzed exclusively for CNBC by Advan Research. That gap peaked in March at nearly 10 percentage points.
Across the board, the Minneapolis government estimated that the City of Lakes lost almost $700 million worth of economic activity between December and April from the surge. Mayor Jacob Frey told CNBC that figure was likely conservative and that the city was left grappling with "tail" effects from the operation.
City lawmakers released about $7 million for local businesses and more than $3 million in rental assistance. Frey acknowledged that would not be enough funding to resolve a situation that many in the community compared with a natural disaster.
"Traditionally, disaster relief is not a partisan issue," Frey, a Democrat, told CNBC. "Traditionally, disasters are not caused by the government themselves."
Employment dropped in U.S. cities experiencing immigration enforcement surges, according to an analysis from the Brookings Institution published last month. Six months after a respective surge, the report found that the most-impacted cities had a 0.4% employment shortfall.
The labor force participation rate fell at a faster clip in Minnesota than it has in the U.S. overall in the last year, according to the Bureau of Labor Statistics. The North Star State's seasonally adjusted unemployment rate in 2026 eclipsed the national average for the first time in about 19 years.
"Operation Metro Surge can sometimes be perceived as only affecting undocumented workers," said Tyler Schipper, an economist at the University of St. Thomas, Minnesota's largest private college. "That wasn't the case at all."
Eviction notices dropped year over year in Minneapolis in January and February, according to Home Line, a Minnesota-based tenant advocacy group. While the surge caused some companies to cut workers' hours, Eric Hauge, Home Line's co-executive director, said a combination of government housing funds and mutual aid programs likely helped cushion their personal finances.
As those funding sources ran dry, Hauge said the relative volume of eviction notifications spiked. Total notices in the year through August rose around 7% compared with the same period in 2025.
To supplement government aid during the surge, the Minneapolis Foundation collected millions of dollars from corporations based in the city. However, R.T. Rybak, the nonprofit's chief executive, said big firms were slower to speak out about the surge than they were following the death of George Floyd — a shift he attributed to a fear of retribution from the Trump administration.
"I understand the extraordinary political pressure that was put on these businesses," said Rybak, a former Democratic mayor of Minneapolis. "But I think it's pretty well understood around here that this was not the greatest moment for our usually very effective corporate philanthropic sector."
The Hispanic American economy
Trump made mass deportations a pillar of his first term and 2024 campaign. Democrats have marketed next month's midterm elections as an opportunity for voters to show their displeasure with his signature policies.
White House spokesperson Lauren Bis said in a statement to CNBC that a "surge in illegal immigration under President Biden threatened the long run fiscal health of the country, contributed to record high inflation, and suppressed the wages of American workers."
A spokesperson for the Department of Homeland Security, which oversees ICE, said that "illegal immigration is a labor-supply shock aimed at the bottom" and can drive up rent costs.
Advocates for Hispanic Americans warn immigration crackdowns could stymie a demographic that has become a key driver for national economic growth. If U.S.-based Latinos made up their own country, the Latino Donor Collaborative told CNBC on Wednesday that its gross domestic product would be the fourth largest in the world at $5.1 trillion.
Yet the growth rate for the average Hispanic household's spending in the U.S. decreased by about 2 percentage points over the last two years, according to Numerator. In a 2025 survey from the market research firm, Hispanic consumers were 50% more likely to cite immigration-related policy as a top issue.
"We're being challenged right now," said Sol Trujillo, co-founder of the California-based Latino Donor Collaborative. "These policies can be highly disruptive to our economy."
To be sure, it's not only Hispanic consumers and businesses under pressure.
The Minneapolis-based Children's Theatre Co. had to cancel several shows when its venue became unreachable due to blockades created by the National Guard. After the theater reopened, managing director Ryan French said crowds were around half the size of what was previously expected.
Depressed ticket and concession sales caused the nonprofit to lose roughly half-a-million dollars in revenue and end its fiscal year in the red. The 6-decade-old organization cut three jobs and reduced hours for other employees, French said.
'Fear never left'
On a weekday in Minneapolis late last month, residents referred to the operation as "the surge" in passing and described major life events as happening before or after it. Weathered posters on a building facade memorialized Renee Good and Alex Pretti, the two U.S. citizens killed by federal immigration officers during the operation. Houses and businesses around town displayed signs alerting immigration officers that they are not welcome on private property.
Many immigrant business owners depleted their life savings to keep stores afloat during the surge, according to Jason Chavez, a Minneapolis City Council member who represents part of Lake Street. Now, Chavez said the community's mom-and-pop shops may not survive a small emergency like a pipe burst or inclement weather event.
Recently, green shoots have emerged for these businesses. The Lake Street Council drew large crowds for World Cup viewing events and a recent "taco tour" food crawl, offering hope of customers returning to the area. In August, Advan Research found that year-over-year foot traffic growth for restaurants in Lake Street ZIP codes outperformed surrounding areas for the first time since Operation Metro Surge began.
But community members worry that immigration enforcement could ramp up again. While the volume of arrests by ICE in Minnesota has slowed compared with earlier this year, the national number in July rose to its highest level since Trump returned to office, according to the Deportation Data Project.
"For immigrants who are still here in Minneapolis and in the surrounding areas, that fear never left," said Miguel Hernandez, owner of Lito's Burritos on Lake Street. "They are operating at an intense level of caution still to this day."
The restaurateur still sees foot traffic plunge in the days after the news runs headlines about immigration enforcement. Some of his employees with work authorizations left the country due to fear over how they would be treated by federal officers. He sold his gray Chevrolet Tahoe after he said children began mistaking it for an ICE vehicle and running away.
For the past several Sundays, one of Daniel Hernandez's remaining Colonial Market stores has become home to a pop-up market where immigrant entrepreneurs sell their products. The owner said he invites Minneapolis police officers to patrol during the weekly event, drawing on a belief that the presence of local law enforcement with body cameras would deter ICE agents.
But Daniel Hernandez said the pop-up's traffic boost may not be enough for that location to survive.
The grocer could be evicted later this month, he said, after falling behind on rent as a result of lost sales during and after the surge. Colonial Market has raised more than $3,000 through a GoFundMe campaign to help keep the doors open.
"During the storm, you can feel the winds. But once the storm is over, all that you see is destruction," he said. "That's what happened here."`,
    bodyJa: `MINNEAPOLIS — Operation Metro Surge has been over for months. The same can't be said for the crisis facing Daniel Hernandez's Colonial Market grocery stores.
After Hernandez's parking lot became a well-known hangout spot for Immigration and Customs Enforcement officers, the lines that Hernandez grew accustomed to seeing each morning at his stores disappeared. The rebound in traffic Hernandez hoped to see after the end of the surge never materialized.
"We're barely — literally barely — surviving," Hernandez told CNBC in an interview inside one of his stores, where Spanish-language music played through speakers and piñatas dangled from the ceiling. "The damage has been done."
This summer, Hernandez shuttered Colonial Market's location on Lake Street, the heart of Minneapolis' Hispanic business community. Hernandez had spent savings and borrowed money against his house to open the store two years prior. He said sales at his stores have declined by roughly 60%.
The financial turmoil facing Hernandez and others in Minneapolis is being experienced, to varying degrees, in communities across the country. As President Donald Trump has directed federal immigration officers to carry out mass deportations in major U.S. cities during his second term, a growing body of research shows that a monthslong economic chill followed.
Cities where immigration raids took place in 2025 experienced a nearly 3% decline in weekly foot traffic and a more than 6% drawdown in spending, according to an analysis from University of Pennsylvania professor Zeke Hernandez. (No one with the surname Hernandez mentioned in this article is related to one another.)
Collectively, he found that resulted in around 8 billion fewer visits and billions of dollars worth of lost spending in those places that year.
"You are creating recession-like conditions in targeted neighborhoods," Zeke Hernandez said. "It's like a localized recession."
'Disaster' in Minnesota
Operation Metro Surge, which was billed as the largest-ever immigration enforcement action by the Department of Homeland Security, ran from early December to mid-February in Minneapolis. Months after its official conclusion, local businesses were still trying to get back on steady ground while community leaders calculate the economic effects.
The Lake Street Council said immigrant-owned businesses in the commercial district cumulatively lost $46 million in December and January. Council members went door to door in the months after the surge to help small business owners — several of whom do not speak English as their first language, if at all — complete paperwork for emergency relief funds.
At bars and eateries in the ZIP codes containing the Lake Street corridor, year-over-year foot traffic underperformed nearby neighborhoods for months after the surge officially ended, according to data analyzed exclusively for CNBC by Advan Research. That gap peaked in March at nearly 10 percentage points.
Across the board, the Minneapolis government estimated that the City of Lakes lost almost $700 million worth of economic activity between December and April from the surge. Mayor Jacob Frey told CNBC that figure was likely conservative and that the city was left grappling with "tail" effects from the operation.
City lawmakers released about $7 million for local businesses and more than $3 million in rental assistance. Frey acknowledged that would not be enough funding to resolve a situation that many in the community compared with a natural disaster.
"Traditionally, disaster relief is not a partisan issue," Frey, a Democrat, told CNBC. "Traditionally, disasters are not caused by the government themselves."
Employment dropped in U.S. cities experiencing immigration enforcement surges, according to an analysis from the Brookings Institution published last month. Six months after a respective surge, the report found that the most-impacted cities had a 0.4% employment shortfall.
The labor force participation rate fell at a faster clip in Minnesota than it has in the U.S. overall in the last year, according to the Bureau of Labor Statistics. The North Star State's seasonally adjusted unemployment rate in 2026 eclipsed the national average for the first time in about 19 years.
"Operation Metro Surge can sometimes be perceived as only affecting undocumented workers," said Tyler Schipper, an economist at the University of St. Thomas, Minnesota's largest private college. "That wasn't the case at all."
Eviction notices dropped year over year in Minneapolis in January and February, according to Home Line, a Minnesota-based tenant advocacy group. While the surge caused some companies to cut workers' hours, Eric Hauge, Home Line's co-executive director, said a combination of government housing funds and mutual aid programs likely helped cushion their personal finances.
As those funding sources ran dry, Hauge said the relative volume of eviction notifications spiked. Total notices in the year through August rose around 7% compared with the same period in 2025.
To supplement government aid during the surge, the Minneapolis Foundation collected millions of dollars from corporations based in the city. However, R.T. Rybak, the nonprofit's chief executive, said big firms were slower to speak out about the surge than they were following the death of George Floyd — a shift he attributed to a fear of retribution from the Trump administration.
"I understand the extraordinary political pressure that was put on these businesses," said Rybak, a former Democratic mayor of Minneapolis. "But I think it's pretty well understood around here that this was not the greatest moment for our usually very effective corporate philanthropic sector."
The Hispanic American economy
Trump made mass deportations a pillar of his first term and 2024 campaign. Democrats have marketed next month's midterm elections as an opportunity for voters to show their displeasure with his signature policies.
White House spokesperson Lauren Bis said in a statement to CNBC that a "surge in illegal immigration under President Biden threatened the long run fiscal health of the country, contributed to record high inflation, and suppressed the wages of American workers."
A spokesperson for the Department of Homeland Security, which oversees ICE, said that "illegal immigration is a labor-supply shock aimed at the bottom" and can drive up rent costs.
Advocates for Hispanic Americans warn immigration crackdowns could stymie a demographic that has become a key driver for national economic growth. If U.S.-based Latinos made up their own country, the Latino Donor Collaborative told CNBC on Wednesday that its gross domestic product would be the fourth largest in the world at $5.1 trillion.
Yet the growth rate for the average Hispanic household's spending in the U.S. decreased by about 2 percentage points over the last two years, according to Numerator. In a 2025 survey from the market research firm, Hispanic consumers were 50% more likely to cite immigration-related policy as a top issue.
"We're being challenged right now," said Sol Trujillo, co-founder of the California-based Latino Donor Collaborative. "These policies can be highly disruptive to our economy."
To be sure, it's not only Hispanic consumers and businesses under pressure.
The Minneapolis-based Children's Theatre Co. had to cancel several shows when its venue became unreachable due to blockades created by the National Guard. After the theater reopened, managing director Ryan French said crowds were around half the size of what was previously expected.
Depressed ticket and concession sales caused the nonprofit to lose roughly half-a-million dollars in revenue and end its fiscal year in the red. The 6-decade-old organization cut three jobs and reduced hours for other employees, French said.
'Fear never left'
On a weekday in Minneapolis late last month, residents referred to the operation as "the surge" in passing and described major life events as happening before or after it. Weathered posters on a building facade memorialized Renee Good and Alex Pretti, the two U.S. citizens killed by federal immigration officers during the operation. Houses and businesses around town displayed signs alerting immigration officers that they are not welcome on private property.
Many immigrant business owners depleted their life savings to keep stores afloat during the surge, according to Jason Chavez, a Minneapolis City Council member who represents part of Lake Street. Now, Chavez said the community's mom-and-pop shops may not survive a small emergency like a pipe burst or inclement weather event.
Recently, green shoots have emerged for these businesses. The Lake Street Council drew large crowds for World Cup viewing events and a recent "taco tour" food crawl, offering hope of customers returning to the area. In August, Advan Research found that year-over-year foot traffic growth for restaurants in Lake Street ZIP codes outperformed surrounding areas for the first time since Operation Metro Surge began.
But community members worry that immigration enforcement could ramp up again. While the volume of arrests by ICE in Minnesota has slowed compared with earlier this year, the national number in July rose to its highest level since Trump returned to office, according to the Deportation Data Project.
"For immigrants who are still here in Minneapolis and in the surrounding areas, that fear never left," said Miguel Hernandez, owner of Lito's Burritos on Lake Street. "They are operating at an intense level of caution still to this day."
The restaurateur still sees foot traffic plunge in the days after the news runs headlines about immigration enforcement. Some of his employees with work authorizations left the country due to fear over how they would be treated by federal officers. He sold his gray Chevrolet Tahoe after he said children began mistaking it for an ICE vehicle and running away.
For the past several Sundays, one of Daniel Hernandez's remaining Colonial Market stores has become home to a pop-up market where immigrant entrepreneurs sell their products. The owner said he invites Minneapolis police officers to patrol during the weekly event, drawing on a belief that the presence of local law enforcement with body cameras would deter ICE agents.
But Daniel Hernandez said the pop-up's traffic boost may not be enough for that location to survive.
The grocer could be evicted later this month, he said, after falling behind on rent as a result of lost sales during and after the surge. Colonial Market has raised more than $3,000 through a GoFundMe campaign to help keep the doors open.
"During the storm, you can feel the winds. But once the storm is over, all that you see is destruction," he said. "That's what happened here."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/07/ice-raids-local-economies.html",
    publishedAt: "2026-10-07T12:24:32+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "rubio-says-tehran-missed-multiple-chance-42a6a7c8",
    title: "Rubio says Tehran missed 'multiple' chances for nuclear deal amid Iran stalemate",
    titleJa: "Rubio says Tehran missed 'multiple' chances for nuclear deal amid Iran stalemate",
    summaryJa: "Iran has failed to take advantage of \"multiple opportunities\" to reach a deal on its nuclear program, Secretary of State Marco Rubio said Wednesday.",
    bodyOriginal: `U.S. Secretary of State Marco Rubio said Wednesday that Iran has passed up "multiple" chances to reach a deal on its nuclear program, as talks between Washington and Tehran over a lasting Middle East peace agreement remain stalled.
"Iran has failed to take advantage of multiple opportunities to reach agreement with us on nuclear program," Rubio said during a visit to Greece.
Curtailment of Iran's nuclear ambitions remains a critical part of U.S. demands, as efforts to reach a lasting ceasefire agreement between the two sides remain fruitless.
Iran indicated there have been "no negotiations" between Tehran and Washington over Iran's nuclear program, according to a Reuters report. The news agency cited comments by a senior Iranian official involved in indirect talks with Washington, who said U.S. ideas about the program are "at odds" with those of the Islamic Republic.
Rubio's remarks follow comments by Vice President J.D. Vance, who earlier this week said any agreement to resolve the seven-month conflict must include a commitment by Iran to a "meaningful" reduction in its nuclear enrichment.
The senior Iranian official said Vance's comments reflect American "ideas and interests", adding: "Iran will never give up its right to enrich, but enrichment details can be discussed later."
President Donald Trump last week denied reports that he had pitched sanctions relief to Iran in exchange for nuclear concessions.
The absence of any agreement has seen Iran ramp up attacks on tankers passing through the Strait of Hormuz in recent days, where vessels now rely on U.S. military protection to navigate the critical waterway.
Energy prices moved higher on Wednesday, following two separate attacks by Yemen's Iran-backed Houthis on airports in Saudi Arabia.
Brent crude, the international oil benchmark, rose 0.64% to $101.23, while U.S. West Texas Intermediate futures climbed 0.21% to $89.63.`,
    bodyJa: `U.S. Secretary of State Marco Rubio said Wednesday that Iran has passed up "multiple" chances to reach a deal on its nuclear program, as talks between Washington and Tehran over a lasting Middle East peace agreement remain stalled.
"Iran has failed to take advantage of multiple opportunities to reach agreement with us on nuclear program," Rubio said during a visit to Greece.
Curtailment of Iran's nuclear ambitions remains a critical part of U.S. demands, as efforts to reach a lasting ceasefire agreement between the two sides remain fruitless.
Iran indicated there have been "no negotiations" between Tehran and Washington over Iran's nuclear program, according to a Reuters report. The news agency cited comments by a senior Iranian official involved in indirect talks with Washington, who said U.S. ideas about the program are "at odds" with those of the Islamic Republic.
Rubio's remarks follow comments by Vice President J.D. Vance, who earlier this week said any agreement to resolve the seven-month conflict must include a commitment by Iran to a "meaningful" reduction in its nuclear enrichment.
The senior Iranian official said Vance's comments reflect American "ideas and interests", adding: "Iran will never give up its right to enrich, but enrichment details can be discussed later."
President Donald Trump last week denied reports that he had pitched sanctions relief to Iran in exchange for nuclear concessions.
The absence of any agreement has seen Iran ramp up attacks on tankers passing through the Strait of Hormuz in recent days, where vessels now rely on U.S. military protection to navigate the critical waterway.
Energy prices moved higher on Wednesday, following two separate attacks by Yemen's Iran-backed Houthis on airports in Saudi Arabia.
Brent crude, the international oil benchmark, rose 0.64% to $101.23, while U.S. West Texas Intermediate futures climbed 0.21% to $89.63.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/07/us-iran-war-trump-hormuz.html",
    publishedAt: "2026-10-07T12:18:15+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 5,
  },
  {
    id: "rainmakers-the-drones-used-to-seed-cloud-bf77cad2",
    title: "Rainmakers: The drones used to seed clouds",
    titleJa: "Rainmakers: The drones used to seed clouds",
    summaryJa: "Cloud seeding is gaining attention as countries look to boost rainfall - will drones help?",
    bodyOriginal: `Rainmakers: The drones used to seed clouds
- Published
On 23 August, Cooper Freeman had no idea clouds above his head were being filled with a silver compound in order to cause rainfall.
Neither did thousands of other residents in Homer, Alaska, who later discovered San Francisco start-up Rainmaker conducted an experiment in that region using cloud-seeding technology.
The company claims it produced 19 million US gallons of water in the sky in three hours.
This approach to weather modification, now more than 80-years-old, involves using planes and drones to disperse compounds such as silver iodide into clouds to form ice crystals. Those crystals eventually become large enough to fall as rain or snow, depending on the temperatures below.
Essentially, cloud seeding speeds up the natural process of water vapor condensing inside of clouds. Gravity then pulls those crystals to the ground. The technology, though, needs ideal climate environments, such as mountainous or cold regions such as Alaska.
Freeman, the Alaska director of the Center for Biological Diversity, isn't just concerned Homer residents weren't widely alerted to these experiments. He's sceptical about what was shot into the clouds, and questions how safe it was for both residents and their habitat.
"It doesn't appear that there was any downstream monitoring to verify that this silver iodide didn't impact the environment," he says.
Freeman adds, "Having a company come in to do this seeding isn't going to solve our water woes, and it feels like a distraction from solving the urgent issues related to water conservation."
Concerns are mounting about the challenges surrounding water security. United Nations Secretary-General António Guterres said in July "our world is using freshwater faster than it can be replenished, external", which echoes reports noting how the past five years have led to the driest period for global rivers, external in more than three decades.
Cloud-seeding technology may be a drop in the bucket, as it doesn't create rainstorms. For example, Rainmaker's 19 million gallons equates to around 0.01 inch of rain across 100 square miles.
Nevertheless, more than 50 countries, external are developing programmes to modify the weather and a surge of start-ups are developing systems to create rain.
As well developed and promising as this innovative field has become, these businesses continue to face thorny questions on safety and efficacy, leading to novel approaches with both finding the right material to spray into clouds and how they do it.
Augustus Doricko, the founder and CEO of Rainmaker, is quick to answer any questions on the consequences of how his company uses the silver iodide compound. It's clear he's been asked about chemical safety many times.
He says Rainmaker releases this form of silver at 20 grams per flight, distributed across thousands of square kilometres. "The resultant increase in concentration on the ground is in the parts per quadrillion, way below the threshold laid out by the FDA [Food and Drug Administration] on what is allowable."
Rainmaker's flights use drones to soar into clouds because without clouds, "we can't do anything," he says, pointing to one of the key limits of cloud-seeding processes. Cloud-seeding sessions have to wait for clouds to form to try to coax them into precipitation.
Their drones are outfitted with silver iodide flairs, and when lit the burning atomizes the water particles into a small enough size so they can stay suspended in the freezing cloud for hours, eventually turning into crystals and later rain.
Rainmaker operates in states such as Idaho, Utah, Colorado and areas of the Middle East such as Jordan. Doricko says, "Jordan residents often only have water for hours per week from their utility because of how scarce water is, and it's a privilege to try to help this storied region."
Cloud seeding's roots began in 1946 when researchers from the General Electric Research Laboratory used dry ice as the first seeding agent. A year later, silver iodide was found to be more effective than dry ice, which quickly turns into useless gas.
While seeding agents caused more rainfall, they didn't move the needle much. In fact, sobering statistics point to how patchy this technology can be in what it pours on the ground.
"With the right conditions, cloud seeding squeeze out about an extra five to 10% of precipitation," says Jon Meyer, an assistant state climatologist with the Utah Climate Center.
What was encouraging, though, for the cloud-seeding sector was a landmark 2017 study that found how silver iodide worked as expected, one of the first reports to observe cloud seeding in action using radar and precipitation gauges.
In the past several years, Meyer has been encouraged to see more companies such as Rainmaker bring innovation to an old industry. "Drones [such as Rainmaker's products] present this new avenue," says Meyer, "and they offer a more targeted nature to these clouds we hope will be responsive."
What is sprayed into clouds may also be undergoing a major shift. Recast Systems in San Francisco is experimenting with a type of protein made from amino acids found in the soil, says CEO Olivia Li.
While still undergoing tests at Texas A&M University, this new seeding agent moves Recast away from silver iodide as the go-to compound.
"It's safe, biodegradable and nucleates ice at a higher efficiency than silver iodide," says Li, whose company currently uses silver iodide to seed clouds in several US states.
Meyer is optimistic this technology's trajectory will only continue to rise. "We're going to see more demand for these services as so many regions are experiencing water demand," he says, "and they're going to be looking for ways to help bridge that gap."
Technology of Business
- Published25 September
- Published23 September
- Published18 September`,
    bodyJa: `Rainmakers: The drones used to seed clouds
- Published
On 23 August, Cooper Freeman had no idea clouds above his head were being filled with a silver compound in order to cause rainfall.
Neither did thousands of other residents in Homer, Alaska, who later discovered San Francisco start-up Rainmaker conducted an experiment in that region using cloud-seeding technology.
The company claims it produced 19 million US gallons of water in the sky in three hours.
This approach to weather modification, now more than 80-years-old, involves using planes and drones to disperse compounds such as silver iodide into clouds to form ice crystals. Those crystals eventually become large enough to fall as rain or snow, depending on the temperatures below.
Essentially, cloud seeding speeds up the natural process of water vapor condensing inside of clouds. Gravity then pulls those crystals to the ground. The technology, though, needs ideal climate environments, such as mountainous or cold regions such as Alaska.
Freeman, the Alaska director of the Center for Biological Diversity, isn't just concerned Homer residents weren't widely alerted to these experiments. He's sceptical about what was shot into the clouds, and questions how safe it was for both residents and their habitat.
"It doesn't appear that there was any downstream monitoring to verify that this silver iodide didn't impact the environment," he says.
Freeman adds, "Having a company come in to do this seeding isn't going to solve our water woes, and it feels like a distraction from solving the urgent issues related to water conservation."
Concerns are mounting about the challenges surrounding water security. United Nations Secretary-General António Guterres said in July "our world is using freshwater faster than it can be replenished, external", which echoes reports noting how the past five years have led to the driest period for global rivers, external in more than three decades.
Cloud-seeding technology may be a drop in the bucket, as it doesn't create rainstorms. For example, Rainmaker's 19 million gallons equates to around 0.01 inch of rain across 100 square miles.
Nevertheless, more than 50 countries, external are developing programmes to modify the weather and a surge of start-ups are developing systems to create rain.
As well developed and promising as this innovative field has become, these businesses continue to face thorny questions on safety and efficacy, leading to novel approaches with both finding the right material to spray into clouds and how they do it.
Augustus Doricko, the founder and CEO of Rainmaker, is quick to answer any questions on the consequences of how his company uses the silver iodide compound. It's clear he's been asked about chemical safety many times.
He says Rainmaker releases this form of silver at 20 grams per flight, distributed across thousands of square kilometres. "The resultant increase in concentration on the ground is in the parts per quadrillion, way below the threshold laid out by the FDA [Food and Drug Administration] on what is allowable."
Rainmaker's flights use drones to soar into clouds because without clouds, "we can't do anything," he says, pointing to one of the key limits of cloud-seeding processes. Cloud-seeding sessions have to wait for clouds to form to try to coax them into precipitation.
Their drones are outfitted with silver iodide flairs, and when lit the burning atomizes the water particles into a small enough size so they can stay suspended in the freezing cloud for hours, eventually turning into crystals and later rain.
Rainmaker operates in states such as Idaho, Utah, Colorado and areas of the Middle East such as Jordan. Doricko says, "Jordan residents often only have water for hours per week from their utility because of how scarce water is, and it's a privilege to try to help this storied region."
Cloud seeding's roots began in 1946 when researchers from the General Electric Research Laboratory used dry ice as the first seeding agent. A year later, silver iodide was found to be more effective than dry ice, which quickly turns into useless gas.
While seeding agents caused more rainfall, they didn't move the needle much. In fact, sobering statistics point to how patchy this technology can be in what it pours on the ground.
"With the right conditions, cloud seeding squeeze out about an extra five to 10% of precipitation," says Jon Meyer, an assistant state climatologist with the Utah Climate Center.
What was encouraging, though, for the cloud-seeding sector was a landmark 2017 study that found how silver iodide worked as expected, one of the first reports to observe cloud seeding in action using radar and precipitation gauges.
In the past several years, Meyer has been encouraged to see more companies such as Rainmaker bring innovation to an old industry. "Drones [such as Rainmaker's products] present this new avenue," says Meyer, "and they offer a more targeted nature to these clouds we hope will be responsive."
What is sprayed into clouds may also be undergoing a major shift. Recast Systems in San Francisco is experimenting with a type of protein made from amino acids found in the soil, says CEO Olivia Li.
While still undergoing tests at Texas A&M University, this new seeding agent moves Recast away from silver iodide as the go-to compound.
"It's safe, biodegradable and nucleates ice at a higher efficiency than silver iodide," says Li, whose company currently uses silver iodide to seed clouds in several US states.
Meyer is optimistic this technology's trajectory will only continue to rise. "We're going to see more demand for these services as so many regions are experiencing water demand," he says, "and they're going to be looking for ways to help bridge that gap."
Technology of Business
- Published25 September
- Published23 September
- Published18 September`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c64g71j4lgyjo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-07T07:09:32+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/7095/live/a810f030-bb31-11f1-bc1f-3f186ca4140c.png",
    readTime: 10,
  },
  {
    id: "oil-rises-as-concerns-over-houthi-attack-c95f9cab",
    title: "Oil rises as concerns over Houthi attacks on Saudi Arabia eclipse supply recovery",
    titleJa: "Oil rises as concerns over Houthi attacks on Saudi Arabia eclipse supply recovery",
    summaryJa: "Iran's move to step up attacks on tankers which are transiting through the Strait of Hormuz has also led to renewed worries over oil supplies among traders.",
    bodyOriginal: `Oil rose Wednesday as attacks by Yemen's Iran-backed Houthis on Saudi Arabia raised concerns over crude flows from the Middle East even as supplies have been recovering.
Futures for international benchmark Brent crude for December delivery gained 0.93% at $101.52 a barrel. U.S. West Texas Intermediate futures for November advanced 0.81% at $90.16 per barrel.
Oil pumped through the East-West Pipeline had reached 5.8 million barrels as of Tuesday morning, according to Saudi Energy Minister Prince Abdulaziz bin Salman.
However, concerns that there may be further supply disruptions in the Middle East weighed on sentiment. The Saudi aviation authority reportedly said Tuesday that the country's airports in Jazan and Najran were targeted in two attacks, amid growing hostilities between Yemen's Iran-backed Houthis and the kingdom.
Iran's move to step up attacks on tankers which are transiting through the Strait of Hormuz has also led to renewed worries over oil supplies among traders, as it threatens to disrupt the fragile rebound in oil exports through the crucial waterway.
Naeem Aslam, chief investment officer of Zaye Capital Markets, said Tuesday that oil remains "caught between improving physical supply and persistent geopolitical risk."
"The sustained ability of the Houthis in Yemen to target oil facilities hundreds of kilometers from the border keeps the risks of a renewed large-scale crude supply disruption present and high, and these risks could worsen if the Houthis feel the need to apply more pressure as a result of losing more territory," said Samer Hasn, senior market analyst at forex trading platform XS.com.`,
    bodyJa: `Oil rose Wednesday as attacks by Yemen's Iran-backed Houthis on Saudi Arabia raised concerns over crude flows from the Middle East even as supplies have been recovering.
Futures for international benchmark Brent crude for December delivery gained 0.93% at $101.52 a barrel. U.S. West Texas Intermediate futures for November advanced 0.81% at $90.16 per barrel.
Oil pumped through the East-West Pipeline had reached 5.8 million barrels as of Tuesday morning, according to Saudi Energy Minister Prince Abdulaziz bin Salman.
However, concerns that there may be further supply disruptions in the Middle East weighed on sentiment. The Saudi aviation authority reportedly said Tuesday that the country's airports in Jazan and Najran were targeted in two attacks, amid growing hostilities between Yemen's Iran-backed Houthis and the kingdom.
Iran's move to step up attacks on tankers which are transiting through the Strait of Hormuz has also led to renewed worries over oil supplies among traders, as it threatens to disrupt the fragile rebound in oil exports through the crucial waterway.
Naeem Aslam, chief investment officer of Zaye Capital Markets, said Tuesday that oil remains "caught between improving physical supply and persistent geopolitical risk."
"The sustained ability of the Houthis in Yemen to target oil facilities hundreds of kilometers from the border keeps the risks of a renewed large-scale crude supply disruption present and high, and these risks could worsen if the Houthis feel the need to apply more pressure as a result of losing more territory," said Samer Hasn, senior market analyst at forex trading platform XS.com.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/07/oil-prices-today-brent-wti-hormuz.html",
    publishedAt: "2026-10-07T05:29:30+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
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
