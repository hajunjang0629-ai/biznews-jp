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
    id: "amd-stock-jumps-8-on-earnings-as-data-ce-1f897f29",
    title: "AMD stock jumps 8% on earnings as data center revenue nearly doubles",
    titleJa: "AMD stock jumps 8% on earnings as data center revenue nearly doubles",
    summaryJa: "AMD reported better-than-expected third-quarter results, driven by booming sales of AI chips",
    bodyOriginal: `Advanced Micro Devices reported third-quarter earnings on Tuesday that beat Wall Street's expectations, with revenue jumping 45% and data center sales nearly doubling from a year earlier. The stock was up 8% in extended trading.
Here's how the chipmaker did versus LSEG consensus estimates for the quarter:
- Earnings per share: $2.09 adjusted vs. $1.95 expected
- Revenue: $13.38 billion vs. $13.09 billion expected
Revenue increased from $9.25 billion a year earlier, AMD said in a statement. Neoclouds like CoreWeave and Nebius rallied earlier Tuesday and remained higher after AMD reported results.
CEO Lisa Su said on the earnings call that she expects server revenue to double year over year in 2027 and data center AI growth to accelerate even faster than the company had projected 90 days ago. The company expects data center to drive the majority of its revenue and earnings growth.
"We have worked across our supply chain to secure the wafers, substrates, advanced packaging, memory, and other key components needed to support much higher growth next year," Su said on the earnings call.
AMD's report comes days after Intel disclosed similar data center growth, with revenue in that segment up 78% in the third quarter. But Intel's stock plummeted 29% on Friday over concerns about weak guidance and Intel's ability to meet demand.
The data center unit makes up the majority of AMD's business, accounting for 64% of overall revenue, up from 47% a year ago.
After years spent chasing Nvidia in the market for artificial intelligence graphics processing units, or GPUs, AMD's central processing units, or CPUs, are experiencing a major resurgence with the rise of agentic AI apps like Meta's Muse. AMD's server CPUs are key for agentic apps because they power virtual machines and can run for hours on their own. Demand from agentic AI boosted AMD shares to a record in October.
"Adoption is just starting, and we expect demand to grow sharply as agents are deployed more broadly and take on more complex work," Su said on the earnings call with analysts.
PC market struggles
AMD's stock is up about 125% this year, but it saw three consecutive days of losses before rallying on Tuesday amid an industrywide sell-off tied to fears about overspending on AI.
AMD is also a major player in the weakening PC market, which Intel blamed for its poor outlook last week. AMD and Intel are the largest makers of traditional x86 processors that power many laptops and desktops, while other laptops rely on Arm-based processors from the likes of Qualcomm and Apple.
Global PC shipments declined 4% in the second quarter from a year earlier due to soaring costs for memory and other components, according to Counterpoint Research.
AMD reports PC chip sales in a segment combined with gaming chips. Revenue in that business fell 8% from a year earlier to $3.7 billion. Gaming revenue was down 40% from a year ago.
For the fourth quarter, AMD said it expects about $17 billion in revenue, beating the $16.2 billion average analyst estimate, according to LSEG. AMD sees its gross margin for the quarter coming in at 55%, slightly below the average estimate of 55.3%, according to StreetAccount.
AMD also sells data center GPUs and full rack-scale systems called Helios that compete directly with Nvidia's Grace Blackwell and Vera Rubin systems. Meta, Microsoft, Anthropic, OpenAI, and Oracle are all beginning to use AMD Helios in their data centers. Meta said last week that its Helios racks are up and running, and AMD agreed to invest $1 billion in Meta's equity offering.
AMD has also committed to investing up to $5 billion in Anthropic, which unveiled its highly anticipated prospectus last week as it inches closer to a potentially historic initial public offering.
During a visit to Taiwan in October, Su said she plans to "substantially increase our supply in 2027." Su and Nvidia CEO Jensen Huang have both made multiple trips to Taiwan and South Korea this year, holding meetings with key suppliers like Taiwan Semiconductor Manufacturing Company and memory leaders SK Hynix and Samsung.
In September, AMD said it would acquire World Labs for $8.2 billion in an all-stock deal. The San Francisco-based AI lab, founded by industry pioneer Fei-Fei Li, is developing a so-called world model that simulates 3D environments to aid in developing robots and other physically grounded AI applications.
WATCH: Helios is AMD’s first AI system to rival Nvidia Vera Rubin — we got an exclusive, first look`,
    bodyJa: `Advanced Micro Devices reported third-quarter earnings on Tuesday that beat Wall Street's expectations, with revenue jumping 45% and data center sales nearly doubling from a year earlier. The stock was up 8% in extended trading.
Here's how the chipmaker did versus LSEG consensus estimates for the quarter:
- Earnings per share: $2.09 adjusted vs. $1.95 expected
- Revenue: $13.38 billion vs. $13.09 billion expected
Revenue increased from $9.25 billion a year earlier, AMD said in a statement. Neoclouds like CoreWeave and Nebius rallied earlier Tuesday and remained higher after AMD reported results.
CEO Lisa Su said on the earnings call that she expects server revenue to double year over year in 2027 and data center AI growth to accelerate even faster than the company had projected 90 days ago. The company expects data center to drive the majority of its revenue and earnings growth.
"We have worked across our supply chain to secure the wafers, substrates, advanced packaging, memory, and other key components needed to support much higher growth next year," Su said on the earnings call.
AMD's report comes days after Intel disclosed similar data center growth, with revenue in that segment up 78% in the third quarter. But Intel's stock plummeted 29% on Friday over concerns about weak guidance and Intel's ability to meet demand.
The data center unit makes up the majority of AMD's business, accounting for 64% of overall revenue, up from 47% a year ago.
After years spent chasing Nvidia in the market for artificial intelligence graphics processing units, or GPUs, AMD's central processing units, or CPUs, are experiencing a major resurgence with the rise of agentic AI apps like Meta's Muse. AMD's server CPUs are key for agentic apps because they power virtual machines and can run for hours on their own. Demand from agentic AI boosted AMD shares to a record in October.
"Adoption is just starting, and we expect demand to grow sharply as agents are deployed more broadly and take on more complex work," Su said on the earnings call with analysts.
PC market struggles
AMD's stock is up about 125% this year, but it saw three consecutive days of losses before rallying on Tuesday amid an industrywide sell-off tied to fears about overspending on AI.
AMD is also a major player in the weakening PC market, which Intel blamed for its poor outlook last week. AMD and Intel are the largest makers of traditional x86 processors that power many laptops and desktops, while other laptops rely on Arm-based processors from the likes of Qualcomm and Apple.
Global PC shipments declined 4% in the second quarter from a year earlier due to soaring costs for memory and other components, according to Counterpoint Research.
AMD reports PC chip sales in a segment combined with gaming chips. Revenue in that business fell 8% from a year earlier to $3.7 billion. Gaming revenue was down 40% from a year ago.
For the fourth quarter, AMD said it expects about $17 billion in revenue, beating the $16.2 billion average analyst estimate, according to LSEG. AMD sees its gross margin for the quarter coming in at 55%, slightly below the average estimate of 55.3%, according to StreetAccount.
AMD also sells data center GPUs and full rack-scale systems called Helios that compete directly with Nvidia's Grace Blackwell and Vera Rubin systems. Meta, Microsoft, Anthropic, OpenAI, and Oracle are all beginning to use AMD Helios in their data centers. Meta said last week that its Helios racks are up and running, and AMD agreed to invest $1 billion in Meta's equity offering.
AMD has also committed to investing up to $5 billion in Anthropic, which unveiled its highly anticipated prospectus last week as it inches closer to a potentially historic initial public offering.
During a visit to Taiwan in October, Su said she plans to "substantially increase our supply in 2027." Su and Nvidia CEO Jensen Huang have both made multiple trips to Taiwan and South Korea this year, holding meetings with key suppliers like Taiwan Semiconductor Manufacturing Company and memory leaders SK Hynix and Samsung.
In September, AMD said it would acquire World Labs for $8.2 billion in an all-stock deal. The San Francisco-based AI lab, founded by industry pioneer Fei-Fei Li, is developing a so-called world model that simulates 3D environments to aid in developing robots and other physically grounded AI applications.
WATCH: Helios is AMD’s first AI system to rival Nvidia Vera Rubin — we got an exclusive, first look`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/03/amd-amd-q3-earnings-report-2026-.html",
    publishedAt: "2026-11-03T23:04:37+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "what-analysts-are-telling-us-while-apple-15f24a2b",
    title: "What analysts are telling us while Apple’s stock falls after earnings report",
    titleJa: "What analysts are telling us while Apple’s stock falls after earnings report",
    summaryJa: "Shares in Apple declined nearly 2% on Tuesday after investors were left feeling disappointed about the company’s gross margin outlook and slowing services revenue  growth.",
    bodyOriginal: `Shares in Apple declined nearly 2% on Tuesday after investors were left feeling disappointed about the company’s gross margin outlook and slowing services revenue  growth.`,
    bodyJa: `Shares in Apple declined nearly 2% on Tuesday after investors were left feeling disappointed about the company’s gross margin outlook and slowing services revenue  growth.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/what-analysts-are-saying-as-apples-stock-falls-after-earnings-report-f0afa357?mod=mw_rss_topstories",
    publishedAt: "2026-11-03T22:48:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-04195586",
    readTime: 2,
  },
  {
    id: "strand-bookstore-to-pay-nearly-1-5-milli-48f88544",
    title: "Strand bookstore to pay nearly $1.5 million over Covid loan tied to Sen. Wyden's wife",
    titleJa: "Strand bookstore to pay nearly $1.5 million over Covid loan tied to Sen. Wyden's wife",
    summaryJa: "Nancy Bass Wyden, whose grandfather founded the New York City bookstore, had signed off on the PPP, which was off-limits because she is a senator's wife.",
    bodyOriginal: `The Strand, the iconic New York City bookstore, agreed to pay nearly $1.5 million in a civil settlement for accepting a Covid government loan that was off-limits because the store is owned by the wife of Oregon Democratic Sen. Ron Wyden, according to the U.S. Attorney's Office in Washington, D.C.
The Strand applied for the $932,350 loan in February 2021 from the Paycheck Protection Program administered by the Small Business Administration, U.S. Attorney Jeanine Pirro's office said Tuesday.
Store owner Nancy Bass Wyden certified on the loan application that "the spouse of a Member of Congress does not directly or indirectly hold a controlling interest in the applicant," Pirro's office said.
"Ms. Wyden's certification was knowingly and materially false and Strand was not eligible for the second draw loan it received," the office said.
The Strand will pay $1,482,560 to settle the case. There was no determination of liability by the store, Pirro's office said.
The Strand, in a statement, said the store made an "unintentional" mistake in applying for the loan, and said it was unaware at the time the funds were barred to businesses owned by the spouse of a member of Congress.
Bass Wyden's husband, who has served in the Senate for more than 30 years, is a staunch critic of President Donald Trump, who appointed Pirro to the post of top prosecutor in the District of Columbia.
Bass Wyden is the granddaughter of Ben Bass, founder of the Strand, whose flagship store is in Greenwich Village.
Congress authorized the forgivable PPP loans when it passed the Coronavirus Aid, Relief, and Economic Security Act in March 2020.
In December 2020, Congress provided additional funding for the PPP loan program with separate legislation, which "included a prohibition against businesses obtaining second draw PPP funds if a member of Congress or their spouse directly or indirectly held a controlling interest in the PPP loan applicant," Pirro's office said.
In a statement Tuesday, Pirro said, "The Paycheck Protection Program was created to save American jobs, not to enrich those who aren't eligible for taxpayer-funded relief, especially the wife of a U.S. Senator."
Her office noted that the False Claims Act, which the Strand was alleged to have violated, "allows the government to establish liability based on reckless disregard and permits the government to recover more than its actual losses," which is what occurred in this case.
The civil settlement resolved claims brought under a so-called qui tam lawsuit, which allows private whistleblowers to sue on behalf of the U.S. government and receive a portion of any recovery.
The qui tam action in this case was filed by a corporate entity, Blockquote Inc., in U.S. District Court in Washington. Blockquote, whose owners were not disclosed by Pirro's office, will receive a total share of about $148,256 in connection with the settlement.
The docket for Blockquote's lawsuit is sealed from public view.
The Strand, in a statement after CNBC requested comment from the store and Bass Wyden, said the restriction that the store violated was passed by Congress between the first and second rounds of the PPP.
"Unfortunately, the bookstore's accountant and the bank administering the loan were not aware of this change when the second-draw application was processed," the Strand said.
"We stand by the facts: the circumstances arose during an unprecedented and rapidly changing public health emergency, the mistake was unintentional," the store said. "We hope this matter will be viewed objectively and in its proper context, with the understanding that the application of justice should always be fair, impartial, and free from political considerations," the store said.
Sen. Wyden's office did not immediately respond to requests for comment.`,
    bodyJa: `The Strand, the iconic New York City bookstore, agreed to pay nearly $1.5 million in a civil settlement for accepting a Covid government loan that was off-limits because the store is owned by the wife of Oregon Democratic Sen. Ron Wyden, according to the U.S. Attorney's Office in Washington, D.C.
The Strand applied for the $932,350 loan in February 2021 from the Paycheck Protection Program administered by the Small Business Administration, U.S. Attorney Jeanine Pirro's office said Tuesday.
Store owner Nancy Bass Wyden certified on the loan application that "the spouse of a Member of Congress does not directly or indirectly hold a controlling interest in the applicant," Pirro's office said.
"Ms. Wyden's certification was knowingly and materially false and Strand was not eligible for the second draw loan it received," the office said.
The Strand will pay $1,482,560 to settle the case. There was no determination of liability by the store, Pirro's office said.
The Strand, in a statement, said the store made an "unintentional" mistake in applying for the loan, and said it was unaware at the time the funds were barred to businesses owned by the spouse of a member of Congress.
Bass Wyden's husband, who has served in the Senate for more than 30 years, is a staunch critic of President Donald Trump, who appointed Pirro to the post of top prosecutor in the District of Columbia.
Bass Wyden is the granddaughter of Ben Bass, founder of the Strand, whose flagship store is in Greenwich Village.
Congress authorized the forgivable PPP loans when it passed the Coronavirus Aid, Relief, and Economic Security Act in March 2020.
In December 2020, Congress provided additional funding for the PPP loan program with separate legislation, which "included a prohibition against businesses obtaining second draw PPP funds if a member of Congress or their spouse directly or indirectly held a controlling interest in the PPP loan applicant," Pirro's office said.
In a statement Tuesday, Pirro said, "The Paycheck Protection Program was created to save American jobs, not to enrich those who aren't eligible for taxpayer-funded relief, especially the wife of a U.S. Senator."
Her office noted that the False Claims Act, which the Strand was alleged to have violated, "allows the government to establish liability based on reckless disregard and permits the government to recover more than its actual losses," which is what occurred in this case.
The civil settlement resolved claims brought under a so-called qui tam lawsuit, which allows private whistleblowers to sue on behalf of the U.S. government and receive a portion of any recovery.
The qui tam action in this case was filed by a corporate entity, Blockquote Inc., in U.S. District Court in Washington. Blockquote, whose owners were not disclosed by Pirro's office, will receive a total share of about $148,256 in connection with the settlement.
The docket for Blockquote's lawsuit is sealed from public view.
The Strand, in a statement after CNBC requested comment from the store and Bass Wyden, said the restriction that the store violated was passed by Congress between the first and second rounds of the PPP.
"Unfortunately, the bookstore's accountant and the bank administering the loan were not aware of this change when the second-draw application was processed," the Strand said.
"We stand by the facts: the circumstances arose during an unprecedented and rapidly changing public health emergency, the mistake was unintentional," the store said. "We hope this matter will be viewed objectively and in its proper context, with the understanding that the application of justice should always be fair, impartial, and free from political considerations," the store said.
Sen. Wyden's office did not immediately respond to requests for comment.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/03/strand-bookstore-ppp-loan-ron-wyden-wife-settlement.html",
    publishedAt: "2026-11-03T22:38:38+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "trump-doj-sends-target-letters-to-democr-21b0003e",
    title: "Trump DOJ sends target letters to Democrats in Alaska Senate criminal probe: Reports",
    titleJa: "Trump DOJ sends target letters to Democrats in Alaska Senate criminal probe: Reports",
    summaryJa: "\"There's no doubt that the threats are threats to our democracy,\" said John Cusick, assistant counsel at the Legal Defense Fund.",
    bodyOriginal: `The Trump administration's months-long campaign to challenge how states conduct elections and pushback against those efforts came to a head on Election Day on Tuesday.
Those efforts have included lawsuits, an attempt to implement a new U.S. Postal Service rule for mail-in ballots this year, threatening letters to state election officials and a plan to increase the number of poll monitors.
On Tuesday afternoon, The New York Times reported that the Department of Justice had sent letters to about 20 Democrats, among them prominent election lawyer Marc Elias, informing them that they might be targets in a criminal investigation of how a candidate with the same name as incumbent Republican Sen. Dan Sullivan ended up on the ballot of the Alaska Senate race.
NBC News reported that the tally of letters includes both target letters "and preservation requests to third parties to retain records."
Elias has represented Mary Peltola, the Democratic nominee in the Alaska election. In addition to him, at least one official at the Democratic Senatorial Campaign Committee was sent a target letter, The Times reported.
"The department is investigating possible donor fraud and conspiracy charges," according to The Times, citing a person familiar with the investigation.
Receiving a target letter does not mean a person has been charged with a crime, and does not necessarily mean that they will be charged.
In a statement, Elias said, "No one should be surprised that President Trump's Department of Justice is targeting me and my law firm on Election Day."
President Donald Trump, during an interview earlier Tuesday on Fox News' "Fox and Friends," blasted Elias.
"You had the Democrat Party headed up by Elias, their lawyer, who was a bad guy, very bad guy — should go to jail, in my opinion, " Trump said. "But you had the Democrat Party look all over Alaska for somebody named Sullivan."
A federal judge on Sunday dismissed the DOJ lawsuit that sought to delay certification of Alaska's Senate election if incumbent Sen. Sullivan loses by a margin that could be attributable to voter confusion from having another Dan Sullivan on the ballot. The DOJ is appealing that ruling.
That case, and the reported letters to Elias and other Democrats, underscore the likelihood that the Trump administration's election-targeting efforts will continue beyond Election Day.
Democratic lawmakers, attorneys general and advocacy groups are poised for battle if the administration tries to interfere with voting sites or challenge ballot counts, particularly in the states that could determine whether Trump's fellow Republicans lose their narrow Senate majority.
Senate Minority Leader Chuck Schumer, D-N.Y., on Sunday night convened the entire Senate Democratic Caucus for a briefing by him and Elias about what a Democratic aide said was the "current landscape of election threats from Trump and his allies." The aide spoke on condition of anonymity to discuss the private briefing.
"We've been, you know, blocking and tackling and protecting and defending our elections for months and through the last few weeks of the voting window, and it'll all culminate tomorrow," California Attorney General Rob Bonta told CNBC on Monday evening. "And each of Trump's attempts has failed."
"I'm not sure what he has up his sleeves," Bonta said of Trump.
Bonta said he and other California officials, along with the 23 other Democratic state attorneys general for months have been preparing for Election Day and potential actions by the Trump administration "to disenfranchise and suppress votes and voters."
"We game-planned, and ... war-gamed and tabletop- and scenario planned all the possibilities," Bonta said.
Bonta said that if extreme events happened, California officials would quickly seek relief from the court system.
He noted, "We have laws in place right now where it is a criminal offense" to remove ballots from the custody and control of an election official.
On Monday, multiple federal courts dealt with urgent motions in election-related lawsuits and appeals by and against the Trump administration.
The DOJ on Monday asked the Supreme Court to block California from counting about 20,000 mail-in ballots from voters whom the DOJ suggests might not be U.S. citizens. Hours later, the Supreme Court rejected that request without any noted dissents.
In U.S. District Court in Washington, a DOJ lawyer told Judge Reggie Walton on Monday that the department expected to deploy 900 people to monitor polling places at sites in all 50 states.
"In 2024, there were about 100 monitors," the lawyer, Kathryn Barragan, said.
The DOJ on Tuesday said it was deploying approximately 1,000 election monitors and observers across the country. The areas it is focusing on are primarily in urban areas that vote Democratic.
Barragan's statement came at a hearing where Walton was considering an emergency request by the NAACP to bar the DOJ from using election monitors who are federal law enforcement personnel.
John Cusick, assistant counsel at the Legal Defense Fund, a civil rights group, said the administration has used the DOJ, Department of Homeland Security and other federal agencies to target election procedures this election cycle for three main reasons.
"First and foremost, it's an attempt to intimidate voters and election officials," Cusick said in an interview.
"The second component is confusion" about election rules, he said. "And the third, the unfortunate part, is trying to lay the groundwork for challenging the post-election counting and certification of ballots."
He said there has been a "constant barrage" by the administration to target election workers and election officials with unlawful actions.
"That has created such a chilling effect," Cusick said. "There's no doubt that the threats are threats to our democracy."
The DOJ, which did not respond to a request for comment by CNBC for this article, has previously defended its election-related efforts.
"Voting by noncitizens and other ineligible voters is a federal crime, and the department will enforce the law whether a case involves one illegal ballot or hundreds," the DOJ's rapid response account on X said on Oct. 12.
Attorney General Todd Blanche, when asked on Oct. 22 if there was any scenario in which the DOJ would try to block states from certifying their election results, conceded that was possible.
"I mean, is there any scenario?" Blanche told reporters in Virginia. "Yes, of course. There's scenarios that we could all come up with, hypothetically, you know, some doomsday scenario, for example."
"It is not DOJ's intention to, and it's never our intention to improperly interfere with elections and the state confirmation process or certification process," the attorney general said.
"But, you know, to say that there's no circumstances that we would ever do that? Of course I'm not going to say that."
Cusick and other experts note the president and executive branch of the federal government have no official role in administering elections, which are handled by the states as designated under the Constitution.
In her ruling Sunday dismissing the DOJ's Alaska Senate lawsuit, District Court Judge Sharon Gleason said the Trump administration was making requests that involve "the time, place, and manner of Alaska's election, which are the responsibilities of the State, not the executive branch of the federal government."
On Monday, a bipartisan group of former election officials in a filing told the 9th Circuit U.S. Court of Appeals that "increased federal pressure and threats on election officials ... are part of a pattern by the administration of attempting to assert authority over elections and questioning the integrity of state and local officials."
The filing came in a case where the DOJ is appealing an order issued Friday by a federal judge in California barring the Trump administration "from carrying out a series of efforts to actually or attempting to intimidate, threaten, or coerce election workers who aid others in exercising their right to vote."
The judge cited threats by the DOJ to prosecute state and local election officials if they process and count ballots using procedures that are legally required.
Bonta, California's attorney general, said he expected Trump and the DOJ To continue targeting states over their election procedures through the next cycle in 2028, when voters will choose a new president.
"We can't be naive about it. We have to expect it to get worse, prepared for it to get worse. I don't want to be alarmist," Bonta said. "I am a realist though, and I see the way he thinks and acts and what he's done, and maybe we'll be prepared for the worst, and it'll never happen."
"But we can't not be prepared for it. And I expect him to escalate as he gets more desperate."`,
    bodyJa: `The Trump administration's months-long campaign to challenge how states conduct elections and pushback against those efforts came to a head on Election Day on Tuesday.
Those efforts have included lawsuits, an attempt to implement a new U.S. Postal Service rule for mail-in ballots this year, threatening letters to state election officials and a plan to increase the number of poll monitors.
On Tuesday afternoon, The New York Times reported that the Department of Justice had sent letters to about 20 Democrats, among them prominent election lawyer Marc Elias, informing them that they might be targets in a criminal investigation of how a candidate with the same name as incumbent Republican Sen. Dan Sullivan ended up on the ballot of the Alaska Senate race.
NBC News reported that the tally of letters includes both target letters "and preservation requests to third parties to retain records."
Elias has represented Mary Peltola, the Democratic nominee in the Alaska election. In addition to him, at least one official at the Democratic Senatorial Campaign Committee was sent a target letter, The Times reported.
"The department is investigating possible donor fraud and conspiracy charges," according to The Times, citing a person familiar with the investigation.
Receiving a target letter does not mean a person has been charged with a crime, and does not necessarily mean that they will be charged.
In a statement, Elias said, "No one should be surprised that President Trump's Department of Justice is targeting me and my law firm on Election Day."
President Donald Trump, during an interview earlier Tuesday on Fox News' "Fox and Friends," blasted Elias.
"You had the Democrat Party headed up by Elias, their lawyer, who was a bad guy, very bad guy — should go to jail, in my opinion, " Trump said. "But you had the Democrat Party look all over Alaska for somebody named Sullivan."
A federal judge on Sunday dismissed the DOJ lawsuit that sought to delay certification of Alaska's Senate election if incumbent Sen. Sullivan loses by a margin that could be attributable to voter confusion from having another Dan Sullivan on the ballot. The DOJ is appealing that ruling.
That case, and the reported letters to Elias and other Democrats, underscore the likelihood that the Trump administration's election-targeting efforts will continue beyond Election Day.
Democratic lawmakers, attorneys general and advocacy groups are poised for battle if the administration tries to interfere with voting sites or challenge ballot counts, particularly in the states that could determine whether Trump's fellow Republicans lose their narrow Senate majority.
Senate Minority Leader Chuck Schumer, D-N.Y., on Sunday night convened the entire Senate Democratic Caucus for a briefing by him and Elias about what a Democratic aide said was the "current landscape of election threats from Trump and his allies." The aide spoke on condition of anonymity to discuss the private briefing.
"We've been, you know, blocking and tackling and protecting and defending our elections for months and through the last few weeks of the voting window, and it'll all culminate tomorrow," California Attorney General Rob Bonta told CNBC on Monday evening. "And each of Trump's attempts has failed."
"I'm not sure what he has up his sleeves," Bonta said of Trump.
Bonta said he and other California officials, along with the 23 other Democratic state attorneys general for months have been preparing for Election Day and potential actions by the Trump administration "to disenfranchise and suppress votes and voters."
"We game-planned, and ... war-gamed and tabletop- and scenario planned all the possibilities," Bonta said.
Bonta said that if extreme events happened, California officials would quickly seek relief from the court system.
He noted, "We have laws in place right now where it is a criminal offense" to remove ballots from the custody and control of an election official.
On Monday, multiple federal courts dealt with urgent motions in election-related lawsuits and appeals by and against the Trump administration.
The DOJ on Monday asked the Supreme Court to block California from counting about 20,000 mail-in ballots from voters whom the DOJ suggests might not be U.S. citizens. Hours later, the Supreme Court rejected that request without any noted dissents.
In U.S. District Court in Washington, a DOJ lawyer told Judge Reggie Walton on Monday that the department expected to deploy 900 people to monitor polling places at sites in all 50 states.
"In 2024, there were about 100 monitors," the lawyer, Kathryn Barragan, said.
The DOJ on Tuesday said it was deploying approximately 1,000 election monitors and observers across the country. The areas it is focusing on are primarily in urban areas that vote Democratic.
Barragan's statement came at a hearing where Walton was considering an emergency request by the NAACP to bar the DOJ from using election monitors who are federal law enforcement personnel.
John Cusick, assistant counsel at the Legal Defense Fund, a civil rights group, said the administration has used the DOJ, Department of Homeland Security and other federal agencies to target election procedures this election cycle for three main reasons.
"First and foremost, it's an attempt to intimidate voters and election officials," Cusick said in an interview.
"The second component is confusion" about election rules, he said. "And the third, the unfortunate part, is trying to lay the groundwork for challenging the post-election counting and certification of ballots."
He said there has been a "constant barrage" by the administration to target election workers and election officials with unlawful actions.
"That has created such a chilling effect," Cusick said. "There's no doubt that the threats are threats to our democracy."
The DOJ, which did not respond to a request for comment by CNBC for this article, has previously defended its election-related efforts.
"Voting by noncitizens and other ineligible voters is a federal crime, and the department will enforce the law whether a case involves one illegal ballot or hundreds," the DOJ's rapid response account on X said on Oct. 12.
Attorney General Todd Blanche, when asked on Oct. 22 if there was any scenario in which the DOJ would try to block states from certifying their election results, conceded that was possible.
"I mean, is there any scenario?" Blanche told reporters in Virginia. "Yes, of course. There's scenarios that we could all come up with, hypothetically, you know, some doomsday scenario, for example."
"It is not DOJ's intention to, and it's never our intention to improperly interfere with elections and the state confirmation process or certification process," the attorney general said.
"But, you know, to say that there's no circumstances that we would ever do that? Of course I'm not going to say that."
Cusick and other experts note the president and executive branch of the federal government have no official role in administering elections, which are handled by the states as designated under the Constitution.
In her ruling Sunday dismissing the DOJ's Alaska Senate lawsuit, District Court Judge Sharon Gleason said the Trump administration was making requests that involve "the time, place, and manner of Alaska's election, which are the responsibilities of the State, not the executive branch of the federal government."
On Monday, a bipartisan group of former election officials in a filing told the 9th Circuit U.S. Court of Appeals that "increased federal pressure and threats on election officials ... are part of a pattern by the administration of attempting to assert authority over elections and questioning the integrity of state and local officials."
The filing came in a case where the DOJ is appealing an order issued Friday by a federal judge in California barring the Trump administration "from carrying out a series of efforts to actually or attempting to intimidate, threaten, or coerce election workers who aid others in exercising their right to vote."
The judge cited threats by the DOJ to prosecute state and local election officials if they process and count ballots using procedures that are legally required.
Bonta, California's attorney general, said he expected Trump and the DOJ To continue targeting states over their election procedures through the next cycle in 2028, when voters will choose a new president.
"We can't be naive about it. We have to expect it to get worse, prepared for it to get worse. I don't want to be alarmist," Bonta said. "I am a realist though, and I see the way he thinks and acts and what he's done, and maybe we'll be prepared for the worst, and it'll never happen."
"But we can't not be prepared for it. And I expect him to escalate as he gets more desperate."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/03/trump-doj-election-lawsuits-monitors-2026-midterms.html",
    publishedAt: "2026-11-03T20:33:31+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "apple-warns-of-risks-related-to-ai-agent-baffd296",
    title: "Apple warns of risks related to AI agents behaving in 'unintended or unpredictable' ways",
    titleJa: "Apple warns of risks related to AI agents behaving in 'unintended or unpredictable' ways",
    summaryJa: "Apple’s annual filing warns that AI agents could exceed permissions, resist instructions or take actions that are difficult to reverse.",
    bodyOriginal: `Apple said in its annual financial filing on Tuesday that AI agents that can act in "unintended or unpredictable ways" could represent a threat to its business by opening the company up to lawsuits or hurting its reputation.
The new risk factors in Apple's filing show the disruptive potential of AI agents, which have rapidly become top of mind for Silicon Valley's most important companies.
"In particular, artificial intelligence agents and other technologies can take actions autonomously, including interacting with internal or external systems that in some cases they may not be authorized to access, executing or altering code, sending communications, and completing transactions," Apple wrote in the filing.
The company added that agents "may behave in unintended or unpredictable ways, including by taking actions that were not directed, instructed or authorized."
Earlier this year, OpenAI released Dots, and Meta introduced Muse. Both AI agents use advanced AI models to work autonomously for tasks. They can even email or remind users when new messages arrive.
Apple's disclosure comes after several episodes that involved rogue AI agents breaking out of their sandboxes to hack third-party websites, like the Hugging Face incident, which has drawn renewed attention from policymakers in Washington, D.C., and around the world.
Separately, the ability of agents to use a computer in human ways is forcing big companies like Amazon and JPMorgan Chase to come up with policies around agentic access to services for strategic or security reasons.
Last month, Apple announced changes to full disk access on Macs to reduce "risks related to this level of access" for AI agents installed on PCs.
"The Company's ability to oversee and control third-party artificial intelligence agents and other technologies may be limited," Apple warned in its filing.
Apple doesn't currently have an agentic AI. But when new CEO John Ternus was asked on Monday's earnings call about AI agents, he said that the company had "real room" to expand Siri's capabilities.
"As far as agentic capabilities, we think these are promising tools for users," Ternus said. "We just want to make sure that users are aware of what they are giving access to. We want to make sure this is done in a way that protects security and privacy."
This fall, Apple released Siri AI, a new assistant that uses the iPhone's local data storage to access data like calendars and emails, but Apple's Siri can't work autonomously for long stretches like Dots or Muse.
Ternus said Apple can't access private data on its devices, calling it a "core differentiator."
"If you think about it, so much of your personal data is on your iPhone, whether it's your contacts, your communications, health data, financial data, all of that," Ternus said. "Siri can tap into that and help you access it in a way that's very secure and private and that nobody else has access to."
Commercial AI agents like those from OpenAI and Meta ask for high-level access to the user's accounts like email in order to be more useful.
Apple indicated that the current regulations around AI and "super intelligence" are changing, unpredictable and that it could cost a lot of money to adapt to new laws governing AI.
"In addition, the Company is subject to the risks posed by ethical concerns and negative consumer perceptions related to automation, artificial intelligence and super intelligence, including perceived threats to safety or other societal harms or complications," according to the filing.`,
    bodyJa: `Apple said in its annual financial filing on Tuesday that AI agents that can act in "unintended or unpredictable ways" could represent a threat to its business by opening the company up to lawsuits or hurting its reputation.
The new risk factors in Apple's filing show the disruptive potential of AI agents, which have rapidly become top of mind for Silicon Valley's most important companies.
"In particular, artificial intelligence agents and other technologies can take actions autonomously, including interacting with internal or external systems that in some cases they may not be authorized to access, executing or altering code, sending communications, and completing transactions," Apple wrote in the filing.
The company added that agents "may behave in unintended or unpredictable ways, including by taking actions that were not directed, instructed or authorized."
Earlier this year, OpenAI released Dots, and Meta introduced Muse. Both AI agents use advanced AI models to work autonomously for tasks. They can even email or remind users when new messages arrive.
Apple's disclosure comes after several episodes that involved rogue AI agents breaking out of their sandboxes to hack third-party websites, like the Hugging Face incident, which has drawn renewed attention from policymakers in Washington, D.C., and around the world.
Separately, the ability of agents to use a computer in human ways is forcing big companies like Amazon and JPMorgan Chase to come up with policies around agentic access to services for strategic or security reasons.
Last month, Apple announced changes to full disk access on Macs to reduce "risks related to this level of access" for AI agents installed on PCs.
"The Company's ability to oversee and control third-party artificial intelligence agents and other technologies may be limited," Apple warned in its filing.
Apple doesn't currently have an agentic AI. But when new CEO John Ternus was asked on Monday's earnings call about AI agents, he said that the company had "real room" to expand Siri's capabilities.
"As far as agentic capabilities, we think these are promising tools for users," Ternus said. "We just want to make sure that users are aware of what they are giving access to. We want to make sure this is done in a way that protects security and privacy."
This fall, Apple released Siri AI, a new assistant that uses the iPhone's local data storage to access data like calendars and emails, but Apple's Siri can't work autonomously for long stretches like Dots or Muse.
Ternus said Apple can't access private data on its devices, calling it a "core differentiator."
"If you think about it, so much of your personal data is on your iPhone, whether it's your contacts, your communications, health data, financial data, all of that," Ternus said. "Siri can tap into that and help you access it in a way that's very secure and private and that nobody else has access to."
Commercial AI agents like those from OpenAI and Meta ask for high-level access to the user's accounts like email in order to be more useful.
Apple indicated that the current regulations around AI and "super intelligence" are changing, unpredictable and that it could cost a lot of money to adapt to new laws governing AI.
"In addition, the Company is subject to the risks posed by ethical concerns and negative consumer perceptions related to automation, artificial intelligence and super intelligence, including perceived threats to safety or other societal harms or complications," according to the filing.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/03/apple-warns-of-ai-agents-behave-in-unintended-or-unpredictable-ways.html",
    publishedAt: "2026-11-03T20:10:41+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 9,
  },
  {
    id: "what-the-2026-midterm-elections-could-me-5990e347",
    title: "What the 2026 midterm elections could mean for Trump's final two years",
    titleJa: "What the 2026 midterm elections could mean for Trump's final two years",
    summaryJa: "Oddsmakers and public polls place Democrats in a favorable position ahead of Election Day.",
    bodyOriginal: `Tuesday's midterm elections will at their heart determine control of Congress for the remainder of Donald Trump's presidency. U.S. voters will decide whether Trump will maintain his Republican iron grip on Washington or recede into lame-duck status after a Democratic triumph.
If Republicans win, Trump could spend another two years facing little congressional resistance and pushing through major policy packages. If Democrats win one or both chambers, the president's remaining legislative priorities would be severely kneecapped, and even the basic functions of government could become gridlocked.
Oddsmakers and public polls placed Democrats in a favorable position ahead of Election Day, especially for flipping control of the Republican-held House. Still, the balance of power will not be decided until ballots are counted — a process that could take days or, in some cases, weeks to complete. The Senate is expected to be particularly close, and if the balance of power comes down to Alaska, the nation may have to wait while the state counts.
"The election results could trigger an immediate market reaction, particularly as the Senate outcome becomes clearer," the Washington Policy Strategy Group of Stifel wrote Sunday in an analyst report, where it predicted Democrats will win the House while the Senate remains too close to call. "However, the market's knee-jerk trade could reverse as investors recognize that gridlock remains the most likely policy outcome in either case."
Republicans also control the Senate and with a larger majority than in the House.
If Democrats capture one chamber of Congress, Washington policymaking would become significantly more gridlocked. Single-party budget reconciliation bills, the procedural vehicle for most major spending and policy changes in the current status quo of tight congressional margins, would become impossible. Bipartisanship would be required to advance legislation, making must-pass bills such as government funding packages, defense spending and the looming debt ceiling hike more important — and more contentious.
In a divided Congress, the party that doesn't control the White House typically uses moments including government funding and debt-ceiling hikes to extract concessions from the majority party, a practice that can lead to brinksmanship.
"If Republicans defy the conventional wisdom and maintain their Senate majority, then we would expect a relief rally in the sectors that might react negatively to a Democratic victory," Stifel wrote. "Democrats would still govern the House and gridlock would prevail. In this scenario, Senate Republicans would act as a check on both the Democrats and many of Trump's populist impulses."
Democrats are also widely expected to use any majority in Congress to launch investigations into the White House and businesses that have worked with the Trump administration. The majority party gains subpoena power in congressional committees.
Polling indicates a Democratic sweep of the House and Senate is possible. In that case, Democrats may more aggressively pursue party-line reconciliation measures that wouldn't become law but would give the party a megaphone ahead of the 2028 presidential election. Trump would still have the ability to veto legislation that Congress passed, severely limiting Democratic bills' prospects of becoming law.
Must-pass legislation would be slightly easier to get through Congress if Democrats controlled both chambers. But deals would still need to be brokered with the White House, and the Senate's 60-vote filibuster threshold could still prove a hurdle that requires bipartisanship. Whichever party gains Senate control is highly unlikely to have at least 60 seats.
Democratic lawmakers in both the House and Senate would jump at the chance to lead investigations of the White House and business if given the opportunity.
In either a divided Congress or unified Democratic Congress, analysts expect Trump's use of executive orders will increase due to congressional gridlock.
There is a possibility Republicans maintain control of both chambers of Congress. In that case, Trump's remaining legislative agenda could continue to be enacted, and the status quo would be maintained.
Democrats would still hold some leverage, largely due to the Senate's 60-vote filibuster threshold, but would be limited in investigating the White House and business.`,
    bodyJa: `Tuesday's midterm elections will at their heart determine control of Congress for the remainder of Donald Trump's presidency. U.S. voters will decide whether Trump will maintain his Republican iron grip on Washington or recede into lame-duck status after a Democratic triumph.
If Republicans win, Trump could spend another two years facing little congressional resistance and pushing through major policy packages. If Democrats win one or both chambers, the president's remaining legislative priorities would be severely kneecapped, and even the basic functions of government could become gridlocked.
Oddsmakers and public polls placed Democrats in a favorable position ahead of Election Day, especially for flipping control of the Republican-held House. Still, the balance of power will not be decided until ballots are counted — a process that could take days or, in some cases, weeks to complete. The Senate is expected to be particularly close, and if the balance of power comes down to Alaska, the nation may have to wait while the state counts.
"The election results could trigger an immediate market reaction, particularly as the Senate outcome becomes clearer," the Washington Policy Strategy Group of Stifel wrote Sunday in an analyst report, where it predicted Democrats will win the House while the Senate remains too close to call. "However, the market's knee-jerk trade could reverse as investors recognize that gridlock remains the most likely policy outcome in either case."
Republicans also control the Senate and with a larger majority than in the House.
If Democrats capture one chamber of Congress, Washington policymaking would become significantly more gridlocked. Single-party budget reconciliation bills, the procedural vehicle for most major spending and policy changes in the current status quo of tight congressional margins, would become impossible. Bipartisanship would be required to advance legislation, making must-pass bills such as government funding packages, defense spending and the looming debt ceiling hike more important — and more contentious.
In a divided Congress, the party that doesn't control the White House typically uses moments including government funding and debt-ceiling hikes to extract concessions from the majority party, a practice that can lead to brinksmanship.
"If Republicans defy the conventional wisdom and maintain their Senate majority, then we would expect a relief rally in the sectors that might react negatively to a Democratic victory," Stifel wrote. "Democrats would still govern the House and gridlock would prevail. In this scenario, Senate Republicans would act as a check on both the Democrats and many of Trump's populist impulses."
Democrats are also widely expected to use any majority in Congress to launch investigations into the White House and businesses that have worked with the Trump administration. The majority party gains subpoena power in congressional committees.
Polling indicates a Democratic sweep of the House and Senate is possible. In that case, Democrats may more aggressively pursue party-line reconciliation measures that wouldn't become law but would give the party a megaphone ahead of the 2028 presidential election. Trump would still have the ability to veto legislation that Congress passed, severely limiting Democratic bills' prospects of becoming law.
Must-pass legislation would be slightly easier to get through Congress if Democrats controlled both chambers. But deals would still need to be brokered with the White House, and the Senate's 60-vote filibuster threshold could still prove a hurdle that requires bipartisanship. Whichever party gains Senate control is highly unlikely to have at least 60 seats.
Democratic lawmakers in both the House and Senate would jump at the chance to lead investigations of the White House and business if given the opportunity.
In either a divided Congress or unified Democratic Congress, analysts expect Trump's use of executive orders will increase due to congressional gridlock.
There is a possibility Republicans maintain control of both chambers of Congress. In that case, Trump's remaining legislative agenda could continue to be enacted, and the status quo would be maintained.
Democrats would still hold some leverage, largely due to the Senate's 60-vote filibuster threshold, but would be limited in investigating the White House and business.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/03/midterm-elections-congress-trump-democrats-republicans.html",
    publishedAt: "2026-11-03T18:29:24+00:00",
    category: "自動車",
    imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    readTime: 10,
  },
  {
    id: "asda-hires-ex-morrisons-boss-in-bid-to-g-ceb9773e",
    title: "Asda hires ex-Morrisons boss in bid to grow firm",
    titleJa: "Asda hires ex-Morrisons boss in bid to grow firm",
    summaryJa: "David Potts takes charge of Asda, which is based in Leeds, with immediate effect.",
    bodyOriginal: `Asda hires ex-Morrisons boss in bid to grow firm
- Published
Asda has appointed a former Morrisons boss as chief executive to help lead revival efforts at the supermarket chain.
Asda, which is based in Leeds, said David Potts would take on the role with immediate effect, while current boss Allan Leighton would become non-executive chairman, two years after returning to lead the supermarket chain.
Potts led Morrisons from its Bradford headquarters for eight years until 2023, overseeing a turnaround during which the supermarket chain was bought by US private equity firm Clayton, Dubilier & Rice.
Potts said Asda had "made good progress but significant opportunities remain" to reinvigorate sales, with a focus on keeping prices low for shoppers.
"By making improvements to the shopping trip every week, which customers can experience and feel in their pockets, we will revitalise the business and bring benefits for all our stakeholders, including our 116,296 very hard-working colleagues," he said.
Before joining Morrisons, Potts was chief executive of Tesco's Irish business, its UK arm and its Asian operation.
According to Asda, Leighton had planned to step aside from the day-to-day running of the group, after he returned in 2024, more than two decades after serving as chief executive.
"Over the last two years, we have stabilised the business and returned it to some growth," said Leighton.
"David has an outstanding record in our industry, his experience is exactly what we now require for the next stage of our transformation and beyond and it will be great to work with him."
Last year, issues with an IT upgrade hit product availability at the supermarket and dented sales, impacting its bottom line.
But in August, it reported sales had returned to growth for the current quarter for the first time in two years.
Get in touch
Your Voice
Listen to highlights from West Yorkshire on BBC Sounds, catch up with the latest episode of Look North.
More stories like this
- Published22 May
- Published25 August
- Published18 June`,
    bodyJa: `Asda hires ex-Morrisons boss in bid to grow firm
- Published
Asda has appointed a former Morrisons boss as chief executive to help lead revival efforts at the supermarket chain.
Asda, which is based in Leeds, said David Potts would take on the role with immediate effect, while current boss Allan Leighton would become non-executive chairman, two years after returning to lead the supermarket chain.
Potts led Morrisons from its Bradford headquarters for eight years until 2023, overseeing a turnaround during which the supermarket chain was bought by US private equity firm Clayton, Dubilier & Rice.
Potts said Asda had "made good progress but significant opportunities remain" to reinvigorate sales, with a focus on keeping prices low for shoppers.
"By making improvements to the shopping trip every week, which customers can experience and feel in their pockets, we will revitalise the business and bring benefits for all our stakeholders, including our 116,296 very hard-working colleagues," he said.
Before joining Morrisons, Potts was chief executive of Tesco's Irish business, its UK arm and its Asian operation.
According to Asda, Leighton had planned to step aside from the day-to-day running of the group, after he returned in 2024, more than two decades after serving as chief executive.
"Over the last two years, we have stabilised the business and returned it to some growth," said Leighton.
"David has an outstanding record in our industry, his experience is exactly what we now require for the next stage of our transformation and beyond and it will be great to work with him."
Last year, issues with an IT upgrade hit product availability at the supermarket and dented sales, impacting its bottom line.
But in August, it reported sales had returned to growth for the current quarter for the first time in two years.
Get in touch
Your Voice
Listen to highlights from West Yorkshire on BBC Sounds, catch up with the latest episode of Look North.
More stories like this
- Published22 May
- Published25 August
- Published18 June`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c6vg0xzd0ln4o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-03T15:12:35+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/4bba/live/70863010-d794-11f1-801d-cf196dc7232c.jpg",
    readTime: 5,
  },
  {
    id: "mining-giant-joins-fight-to-stop-killer-48b8d503",
    title: "Mining giant joins fight to stop killer toad march across Australia",
    titleJa: "Mining giant joins fight to stop killer toad march across Australia",
    summaryJa: "Rio Tinto is jointly funding a A$28m \"toad containment zoe\" to protect the Pilbara region.",
    bodyOriginal: `Mining giant joins fight to stop killer toad march across Australia
- Published
Rio Tinto is ploughing millions of dollars into stopping the poisonous cane toad reaching the Pilbara region of western Australia, where the mining giant has a vast iron ore operation.
The firm, alongside Curtin University in Perth and others, will spend A$28m (£14.5m) building a "toad containment zone" to prevent the pest travelling south.
While the cane toad is not a direct threat to Rio Tinto's business, it produces toxins lethal to native wildlife and poses a threat to Pilbara's ecosystem.
Rio Tinto has previously faced criticism for destroying two sacred Aboriginal rock shelters in Pilbara which sat above tonnes of iron ore.
The decision cost the former chief executive his job, provoked a widespread backlash and saw Rio Tinto commit to rebuilding trust with Indigenous communities.
Commenting on the proposed containment zone, Roberta Hunter, a ranger in Australia's Nyangumarta Warrarn Indigenous Protected Area, said: "Cane toads destroy the water and animals.
"When toads come close to our country, we want to be there to stop them because we don't want the country to be destroyed."
The plan is to cut off the toad's water supply by building a barrier across 7,500 sq km (2,895 sq m) of land between the Great Sandy Desert and the Indian Ocean.
In drier months, the cane toad needs water every few days to survive.
If there are no natural water sources, the toad relies on artificial water points normally used for cattle and irrigation.
The funding will be used to stop the toad accessing dams, storage tanks or other ground-level water sources. The five-year project will begin in 2027.
A number of native species are at risk if the toad gets into Pilbara. These include the northern quoll, whose numbers have been decreasing, the goanna lizard and the ghost bat.
The toads were introduced into Australia in 1935 to control beetles within the sugar cane industry.
Since then, they have been on a slow march west across the country's northern landscape, according to the Australian government, travelling between 40 km and 60 km a year.
There are no predators or diseases that control the toads, which defend themselves using poison.
Ben Phillips, a professor at Curtin University, said the toads would reach Pilbara within two decades without action.
He said: "The toad containment zone is a once in a lifetime opportunity to stop one of the world's worst invasive species in its tracks and protect the region's unique wildlife."`,
    bodyJa: `Mining giant joins fight to stop killer toad march across Australia
- Published
Rio Tinto is ploughing millions of dollars into stopping the poisonous cane toad reaching the Pilbara region of western Australia, where the mining giant has a vast iron ore operation.
The firm, alongside Curtin University in Perth and others, will spend A$28m (£14.5m) building a "toad containment zone" to prevent the pest travelling south.
While the cane toad is not a direct threat to Rio Tinto's business, it produces toxins lethal to native wildlife and poses a threat to Pilbara's ecosystem.
Rio Tinto has previously faced criticism for destroying two sacred Aboriginal rock shelters in Pilbara which sat above tonnes of iron ore.
The decision cost the former chief executive his job, provoked a widespread backlash and saw Rio Tinto commit to rebuilding trust with Indigenous communities.
Commenting on the proposed containment zone, Roberta Hunter, a ranger in Australia's Nyangumarta Warrarn Indigenous Protected Area, said: "Cane toads destroy the water and animals.
"When toads come close to our country, we want to be there to stop them because we don't want the country to be destroyed."
The plan is to cut off the toad's water supply by building a barrier across 7,500 sq km (2,895 sq m) of land between the Great Sandy Desert and the Indian Ocean.
In drier months, the cane toad needs water every few days to survive.
If there are no natural water sources, the toad relies on artificial water points normally used for cattle and irrigation.
The funding will be used to stop the toad accessing dams, storage tanks or other ground-level water sources. The five-year project will begin in 2027.
A number of native species are at risk if the toad gets into Pilbara. These include the northern quoll, whose numbers have been decreasing, the goanna lizard and the ghost bat.
The toads were introduced into Australia in 1935 to control beetles within the sugar cane industry.
Since then, they have been on a slow march west across the country's northern landscape, according to the Australian government, travelling between 40 km and 60 km a year.
There are no predators or diseases that control the toads, which defend themselves using poison.
Ben Phillips, a professor at Curtin University, said the toads would reach Pilbara within two decades without action.
He said: "The toad containment zone is a once in a lifetime opportunity to stop one of the world's worst invasive species in its tracks and protect the region's unique wildlife."`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c3dxw8p99ervo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-03T15:05:01+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/1be5/live/c655d960-d770-11f1-a956-ff083523ef77.jpg",
    readTime: 6,
  },
  {
    id: "u-s-crude-oil-falls-below-95-per-barrel-47867581",
    title: "U.S. crude oil falls below $95 per barrel as market hopes for diplomatic resolution to Iran war",
    titleJa: "U.S. crude oil falls below $95 per barrel as market hopes for diplomatic resolution to Iran war",
    summaryJa: "The rebound in oil prices come a day after the U.S. and Iranian presidents signalled they are open to a diplomatic solution to Iran war.",
    bodyOriginal: `Crude oil prices fell Tuesday for a second consecutive session, as the market hopes the U.S. and Iran will reach a diplomatic settlement to the eight-month-long conflict that has disrupted global energy supplies.
Brent crude was down 3% at $101.54 per barrel, while West Texas Intermediate was 2.3% lower to $94.23. The move lower came after rumors circulated the U.S. and Iran were making progress toward a deal.
Oil prices sold off more than 7% on Monday after Washington and Tehran signaled they were both open to discussions to reach a settlement. The market had been pricing in the risk of escalation after the U.S. midterm elections, with oil gaining more than 10% in October.
The situation in the Middle East remains volatile and there's still a risk that renewed fighting could break out. Washington attacked Iran's Qeshm Island on Monday, U.S. officials told The Wall Street Journal, adding that the U.S. has been carrying out "limited strikes" against the country in recent weeks.
The military campaign against Iran has been kept deliberately low-profile to avoid signaling plans for a major escalation in fighting, the report said, quoting an unnamed official.
But despite these strikes, the Trump administration has also been touting a possible diplomatic solution to the conflict, with Vice President JD Vance telling CNN, "The president and I both feel really good about the prospect of potentially coming to a negotiated settlement."
On Sunday, U.S. Secretary of State Marco Rubio said President Donald Trump would like to resolve the Iranian war "diplomatically," and prefers not to use military force.
High oil prices have contributed substantially to inflation and high gasoline prices in the U.S., which have become a cause of concern for Trump ahead of the midterm elections.
Last week, two Federal Reserve presidents said interest rates will need to move higher to rein in inflation. Higher rates generally crimp growth and raise costs for consumers, but help to bring down inflation.
— CNBC's Priyanka Salve contributed to this report.`,
    bodyJa: `Crude oil prices fell Tuesday for a second consecutive session, as the market hopes the U.S. and Iran will reach a diplomatic settlement to the eight-month-long conflict that has disrupted global energy supplies.
Brent crude was down 3% at $101.54 per barrel, while West Texas Intermediate was 2.3% lower to $94.23. The move lower came after rumors circulated the U.S. and Iran were making progress toward a deal.
Oil prices sold off more than 7% on Monday after Washington and Tehran signaled they were both open to discussions to reach a settlement. The market had been pricing in the risk of escalation after the U.S. midterm elections, with oil gaining more than 10% in October.
The situation in the Middle East remains volatile and there's still a risk that renewed fighting could break out. Washington attacked Iran's Qeshm Island on Monday, U.S. officials told The Wall Street Journal, adding that the U.S. has been carrying out "limited strikes" against the country in recent weeks.
The military campaign against Iran has been kept deliberately low-profile to avoid signaling plans for a major escalation in fighting, the report said, quoting an unnamed official.
But despite these strikes, the Trump administration has also been touting a possible diplomatic solution to the conflict, with Vice President JD Vance telling CNN, "The president and I both feel really good about the prospect of potentially coming to a negotiated settlement."
On Sunday, U.S. Secretary of State Marco Rubio said President Donald Trump would like to resolve the Iranian war "diplomatically," and prefers not to use military force.
High oil prices have contributed substantially to inflation and high gasoline prices in the U.S., which have become a cause of concern for Trump ahead of the midterm elections.
Last week, two Federal Reserve presidents said interest rates will need to move higher to rein in inflation. Higher rates generally crimp growth and raise costs for consumers, but help to bring down inflation.
— CNBC's Priyanka Salve contributed to this report.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/03/oil-prices-climb-after-us-reportedly-strikes-irans-qeshm-island.html",
    publishedAt: "2026-11-03T13:58:32+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 5,
  },
  {
    id: "apple-stock-sinks-as-global-memory-crisi-a0d4eda4",
    title: "Apple stock sinks as global memory crisis hurts profits, giving Ternus his first big test",
    titleJa: "Apple stock sinks as global memory crisis hurts profits, giving Ternus his first big test",
    summaryJa: "In John Ternus' first earnings report as CEO, Apple issued a gross margin forecast that disappointed Wall Street.",
    bodyOriginal: `John Ternus' first earnings report as Apple CEO was going fine until it was time to issue a forecast for the company's gross margin, one of the key metrics followed by investors.
Apple reported better-than-expected earnings and revenue on Monday, including in the company's core iPhone unit, and even projected sales in the current period that topped estimates. But just before Ternus opened the earnings call up to analysts' questions, CFO Kevan Parekh came forward with the first real piece of bad news.
Parekh said that for the December quarter, which goes through the holiday season, Apple's gross margin will be between 45% and 46%, trailing the 46.3% average analyst estimate, according to LSEG.
"This includes primarily the impact of higher memory costs, as well as some costs related to the ramp of Siri AI," Parekh said.
Apple shares slid 4% in premarket trading on Tuesday.
It's part of an ongoing trend for Apple, which is absorbing some of the soaring costs from the global memory shortage. A margin drop in the fiscal first quarter would be a third straight decline for Apple, following a gross margin of 50.1% in the June period and 47.9% in the September quarter, boosted by 1 percentage point of tariff refunds.
At the midpoint of the forecasted range, it would be Apple's lowest gross margin since the fiscal fourth quarter of 2023.
"What we're seeing with memory pricing right now is unprecedented," Ternus said on the call, adding that the company is paying more than it did earlier this year. "Looking beyond the December quarter, we see the pricing for memory purchases continuing to increase."
Ternus, who took the reins from Tim Cook on Sept. 1, is grappling with a problem that his predecessor spent his final months addressing. Cook told The Wall Street Journal in June that the memory situation was a "hundred-year flood." Apple followed by raising prices across the board on Macs, iPads, and accessories.
In September, Apple increased the prices of its iPhones by $100, which Ternus said the company did "reluctantly."
'Less flexibility in the supply chain'
Computer and smartphone makers everywhere are suffering. On Friday, Intel had its worst day on the market since the 1970s due to a weak forecast tied to the softening PC market. It's all because of insatiable artificial intelligence demand.
AI server giants like Nvidia and hyperscalers are buying up all the RAM they can find, and they're willing to pay a premium for it, leaving little supply for companies that make smartphones and tablets.
Despite its size and global clout, Apple said it expects supply constraints on iPhones and Macs in the holiday quarter, primarily driven by memory.
On the call, Ternus had some top lieutenants field component-related questions. Sabih Khan, chief operating officer, became the first Apple COO to appear on an earnings call since Cook in 2010, when Steve Jobs was CEO.
"As we have said before, we're seeing less flexibility in the supply chain than normal," Khan told analysts on the call.
In response, Apple has drastically increased its purchase obligations to secure supply, Khan said. Those obligations rose by $33 billion from the June quarter to the September period, Khan said, though he declined to answer questions about whether Apple had signed "long-term agreements" with memory makers.
"We're always working hard to improve supply," Khan said.
Even with the recent margin slide, Apple's gross margins are still well above where they sat earlier in the Cook era, when the number would predictably come in between 38% and 39%. As Apple's profitable services business grew, its gross margin expanded, hitting 40% in 2021 and growing from there.
Analysts see a potential silver lining for Apple in the current market turmoil. Because Apple is more capable of eating a portion of the increased costs, some experts predict the company will take market share from makers of Windows PC and Android phones that don't have such a cushion.
Citing data from a third-party researcher, Ternus said gains are already happening.
"According to IDC, we gained share globally for the quarter and for the full fiscal year," Ternus said. "And we have never sold more Macs in a fiscal year than we did this time, which is a truly remarkable testament to these incredible products."
WATCH: Apple beats estimates even as rising component costs squeeze margins`,
    bodyJa: `John Ternus' first earnings report as Apple CEO was going fine until it was time to issue a forecast for the company's gross margin, one of the key metrics followed by investors.
Apple reported better-than-expected earnings and revenue on Monday, including in the company's core iPhone unit, and even projected sales in the current period that topped estimates. But just before Ternus opened the earnings call up to analysts' questions, CFO Kevan Parekh came forward with the first real piece of bad news.
Parekh said that for the December quarter, which goes through the holiday season, Apple's gross margin will be between 45% and 46%, trailing the 46.3% average analyst estimate, according to LSEG.
"This includes primarily the impact of higher memory costs, as well as some costs related to the ramp of Siri AI," Parekh said.
Apple shares slid 4% in premarket trading on Tuesday.
It's part of an ongoing trend for Apple, which is absorbing some of the soaring costs from the global memory shortage. A margin drop in the fiscal first quarter would be a third straight decline for Apple, following a gross margin of 50.1% in the June period and 47.9% in the September quarter, boosted by 1 percentage point of tariff refunds.
At the midpoint of the forecasted range, it would be Apple's lowest gross margin since the fiscal fourth quarter of 2023.
"What we're seeing with memory pricing right now is unprecedented," Ternus said on the call, adding that the company is paying more than it did earlier this year. "Looking beyond the December quarter, we see the pricing for memory purchases continuing to increase."
Ternus, who took the reins from Tim Cook on Sept. 1, is grappling with a problem that his predecessor spent his final months addressing. Cook told The Wall Street Journal in June that the memory situation was a "hundred-year flood." Apple followed by raising prices across the board on Macs, iPads, and accessories.
In September, Apple increased the prices of its iPhones by $100, which Ternus said the company did "reluctantly."
'Less flexibility in the supply chain'
Computer and smartphone makers everywhere are suffering. On Friday, Intel had its worst day on the market since the 1970s due to a weak forecast tied to the softening PC market. It's all because of insatiable artificial intelligence demand.
AI server giants like Nvidia and hyperscalers are buying up all the RAM they can find, and they're willing to pay a premium for it, leaving little supply for companies that make smartphones and tablets.
Despite its size and global clout, Apple said it expects supply constraints on iPhones and Macs in the holiday quarter, primarily driven by memory.
On the call, Ternus had some top lieutenants field component-related questions. Sabih Khan, chief operating officer, became the first Apple COO to appear on an earnings call since Cook in 2010, when Steve Jobs was CEO.
"As we have said before, we're seeing less flexibility in the supply chain than normal," Khan told analysts on the call.
In response, Apple has drastically increased its purchase obligations to secure supply, Khan said. Those obligations rose by $33 billion from the June quarter to the September period, Khan said, though he declined to answer questions about whether Apple had signed "long-term agreements" with memory makers.
"We're always working hard to improve supply," Khan said.
Even with the recent margin slide, Apple's gross margins are still well above where they sat earlier in the Cook era, when the number would predictably come in between 38% and 39%. As Apple's profitable services business grew, its gross margin expanded, hitting 40% in 2021 and growing from there.
Analysts see a potential silver lining for Apple in the current market turmoil. Because Apple is more capable of eating a portion of the increased costs, some experts predict the company will take market share from makers of Windows PC and Android phones that don't have such a cushion.
Citing data from a third-party researcher, Ternus said gains are already happening.
"According to IDC, we gained share globally for the quarter and for the full fiscal year," Ternus said. "And we have never sold more Macs in a fiscal year than we did this time, which is a truly remarkable testament to these incredible products."
WATCH: Apple beats estimates even as rising component costs squeeze margins`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/03/apple-earnings-john-ternus-faces-first-test-amid-high-memory-costs.html",
    publishedAt: "2026-11-03T13:55:52+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "midterm-elections-could-jolt-stocks-if-d-60e33bc8",
    title: "Midterm elections could jolt stocks if Democrats sweep Congress",
    titleJa: "Midterm elections could jolt stocks if Democrats sweep Congress",
    summaryJa: "Wall Street weighs how the 2026 midterms could affect stocks, Treasury yields, artificial intelligence, energy prices, banks, defense and healthcare.",
    bodyOriginal: `The stock market is not yet pricing in a Democratic sweep of Congress — despite some polls and most prediction markets pointing that way — so that scenario could weigh on share prices Wednesday, according to investors and analysts.
Republicans managing to keep control could cause a short-term relief rally, they said.
Short-term moves aside, the typical post-midterm pattern in the months ahead is bullish. But some wonder if the market could buck the positive historical trend this time because the S&P 500 is already up so much this year going into the election.
As far as certain stocks to watch, a big Democratic win on Tuesday night — especially in the Texas governor race — could add fuel to an AI stock sell-off on the notion that more data center restrictions would gain momentum nationally. Defense stocks could come under pressure on fears of limits on spending.
Expected stock market reaction
Polls are pointing to a Democratic victory in the House and a toss-up in the Senate. Prediction markets have been more favorable to Democrats, calling for a blue sweep.
While investors are signaling "begrudging acceptance" to a base case scenario that there will indeed be a Democratic sweep, that's not how they're positioning, said Tobin Marcus, head of U.S. policy and politics at Wolfe Research. The firm's recent survey data among more than 100 institutional investors suggests they are not strongly positioned for any particular result.
"Investors seem to have a significant dose of skepticism about whether the final outcome is going to be quite as favorable to Democrats as the polling suggests," Marcus told CNBC, noting that the firm shares the view that the "polling is likely overstating Democratic strength."
JPMorgan sees a blue wave knocking the S&P 500 by about a half percent on Wednesday.
On the other hand, if Republicans end up retaining both chambers of Congress, that could spur a rally, said Sameer Samana, head of global equities and real assets at Wells Fargo Investment Institute.
"From a certainty standpoint, the market knows what to do with Republicans holding both chambers," he said.
Citigroup strategists said Monday that Republicans losing the House but managing to keep the Senate could be "a tailwind for equities into year-end." JPMorgan traders predict up to a 1% pop on Wednesday if Republicans hold on to that chamber.
Looking past any short-term move, stocks tend to rally after the midterms have concluded. In fact, the S&P 500 was up one year out after all midterm elections going back to the early 1980s.
But the S&P 500 has already recorded double-digit gains so far in 2026, so some on Wall Street worry that investors are being overly complacent heading into this year's elections.
During midterm election years, the S&P 500 has typically averaged a 14% drawdown at some point in the second half of the year found Jonathan Krinsky, chief market technician at BTIG.
"The reason stocks often perform well in November during midterms is because [the S&P 500] typically is weak INTO the elections. We have the opposite setup this year," Krinsky wrote last week. "Therefore, while consensus is that we see a post midterm rally, we think the opposite is actually more likely."
AI jitters meet the ballot box
It's not helping that the broader market has recently come under significant pressure due to turbulence in the AI trade, which led the Nasdaq Composite to post its worst day since June on Friday. AI shares led the market lower again on Monday.
A strong showing from Democrats in Tuesday's midterm elections could pressure the trade even more.
At the state level, increased Democratic control is probably a headwind for stocks associated with data centers and technological capital equipment, analysts said.
"It [would solidify] the early kind of cautionary signs in different states around the advancement of AI infrastructure," Rob Rains at Washington Analysis told CNBC.
Goldman Sachs strategists said this week that a Democratic Congress "might limit data center tax incentives, but a national moratorium looks unlikely in any election outcome."
One example would be Texas — a key hub of the data-center buildout. A surprise loss there by Republican Gov. Greg Abbott has the "potential to spook" the market in the short term, Wolfe's Marcus said.
Defense and healthcare stocks
A blue wave might pressure defense shares, while boosting health care stocks, analysts and investors said.
"A substantial Democratic sweep could limit real spending growth unless a broader agreement increases both defense and health-care funding," said Alex Sagal, global equity analyst at Wells Fargo Investment Institute. However, he noted that the earnings outlook for the defense industry looks "stable to modestly positive."
Wolfe Research's Marcus said that healthcare is going to be "the biggest focus," as Democrats will push for restoring expired Affordable Care Act enhanced premium subsidies or unwinding some of the Medicaid reforms in the One Big Beautiful Bill Act.
"Healthcare stocks have been doing really well lately," Jed Ellerbroek, portfolio manager at Argent Capital Management, said to CNBC. "I think part of that is the anti-AI trade, but I also think part of it is just optimism that Democrats are taking over."
Ellerbroek is keeping his eye on hospital-related stocks such as HCA Healthcare and Tenet Healthcare as well as health insurers like UnitedHealth and Centene.
Bank pressure incoming?
Financials was the worst S&P 500 sector in early 2026 on the heels of President Donald Trump calling on Congress to pass a law that would cap credit card interest rates at 10%. While the sector has been able to notch gains since, with its year-to-date rise now at around 3%, things could get more unstable for the group under Democratic control.
"Democrats will come in wanting to show tangible progress on the affordability issue, and that means targeting sectors that are front and center in consumer budgets," said Evercore ISI's Matthew Aks. "We know Trump has populist instincts, populist leanings, and could he pick a couple of issues and decide to team up with the Democrats on those issues and target those industries in a populist way? Absolutely."
Given that Democratic control is often associated with increased regulation, while Republican control is thought to promote deregulation, Democrats could be interested in passing credit card rate caps if they come out victorious.
"I think if Democrats have control of one or both chambers, they would try to pass it and see if they could get Trump to either sign it or force him to veto it, and that would let Democrats kind of score a political point," Aks said.
Iran wildcard
Trump could restart the war against Iran after holding off any major strikes leading up to the midterms, a move that could upend the overall market and cause energy stocks to outperform. Crude oil prices jumped more than 10% in October, though they gave a lot of that gain back on Monday.
Gasoline prices stood at $4.17 a gallon on average nationwide Sunday, a nearly 40% increase compared to the same period last year, per AAA.
"If there are escalations, that could obviously put upward pressure on prices just ahead of Thanksgiving," said Patrick De Haan, head of petroleum analysts at Gas Buddy, "which is also when Americans have really staunch traditions in terms of driving to friends and family."
If Trump decides to take forceful action, it could snuff out hope for a typical post-midterm year-end rally.
Evercore ISI said the S&P 500 could retreat by double-digits to end the year at 6,800 as oil spikes if the president "moves to kinetic escalation in Iran ahead of seating the new Congress in January" and Democrats take Congress.
— With reporting by Sarah Min, Tobias Burns and Spencer Kimball`,
    bodyJa: `The stock market is not yet pricing in a Democratic sweep of Congress — despite some polls and most prediction markets pointing that way — so that scenario could weigh on share prices Wednesday, according to investors and analysts.
Republicans managing to keep control could cause a short-term relief rally, they said.
Short-term moves aside, the typical post-midterm pattern in the months ahead is bullish. But some wonder if the market could buck the positive historical trend this time because the S&P 500 is already up so much this year going into the election.
As far as certain stocks to watch, a big Democratic win on Tuesday night — especially in the Texas governor race — could add fuel to an AI stock sell-off on the notion that more data center restrictions would gain momentum nationally. Defense stocks could come under pressure on fears of limits on spending.
Expected stock market reaction
Polls are pointing to a Democratic victory in the House and a toss-up in the Senate. Prediction markets have been more favorable to Democrats, calling for a blue sweep.
While investors are signaling "begrudging acceptance" to a base case scenario that there will indeed be a Democratic sweep, that's not how they're positioning, said Tobin Marcus, head of U.S. policy and politics at Wolfe Research. The firm's recent survey data among more than 100 institutional investors suggests they are not strongly positioned for any particular result.
"Investors seem to have a significant dose of skepticism about whether the final outcome is going to be quite as favorable to Democrats as the polling suggests," Marcus told CNBC, noting that the firm shares the view that the "polling is likely overstating Democratic strength."
JPMorgan sees a blue wave knocking the S&P 500 by about a half percent on Wednesday.
On the other hand, if Republicans end up retaining both chambers of Congress, that could spur a rally, said Sameer Samana, head of global equities and real assets at Wells Fargo Investment Institute.
"From a certainty standpoint, the market knows what to do with Republicans holding both chambers," he said.
Citigroup strategists said Monday that Republicans losing the House but managing to keep the Senate could be "a tailwind for equities into year-end." JPMorgan traders predict up to a 1% pop on Wednesday if Republicans hold on to that chamber.
Looking past any short-term move, stocks tend to rally after the midterms have concluded. In fact, the S&P 500 was up one year out after all midterm elections going back to the early 1980s.
But the S&P 500 has already recorded double-digit gains so far in 2026, so some on Wall Street worry that investors are being overly complacent heading into this year's elections.
During midterm election years, the S&P 500 has typically averaged a 14% drawdown at some point in the second half of the year found Jonathan Krinsky, chief market technician at BTIG.
"The reason stocks often perform well in November during midterms is because [the S&P 500] typically is weak INTO the elections. We have the opposite setup this year," Krinsky wrote last week. "Therefore, while consensus is that we see a post midterm rally, we think the opposite is actually more likely."
AI jitters meet the ballot box
It's not helping that the broader market has recently come under significant pressure due to turbulence in the AI trade, which led the Nasdaq Composite to post its worst day since June on Friday. AI shares led the market lower again on Monday.
A strong showing from Democrats in Tuesday's midterm elections could pressure the trade even more.
At the state level, increased Democratic control is probably a headwind for stocks associated with data centers and technological capital equipment, analysts said.
"It [would solidify] the early kind of cautionary signs in different states around the advancement of AI infrastructure," Rob Rains at Washington Analysis told CNBC.
Goldman Sachs strategists said this week that a Democratic Congress "might limit data center tax incentives, but a national moratorium looks unlikely in any election outcome."
One example would be Texas — a key hub of the data-center buildout. A surprise loss there by Republican Gov. Greg Abbott has the "potential to spook" the market in the short term, Wolfe's Marcus said.
Defense and healthcare stocks
A blue wave might pressure defense shares, while boosting health care stocks, analysts and investors said.
"A substantial Democratic sweep could limit real spending growth unless a broader agreement increases both defense and health-care funding," said Alex Sagal, global equity analyst at Wells Fargo Investment Institute. However, he noted that the earnings outlook for the defense industry looks "stable to modestly positive."
Wolfe Research's Marcus said that healthcare is going to be "the biggest focus," as Democrats will push for restoring expired Affordable Care Act enhanced premium subsidies or unwinding some of the Medicaid reforms in the One Big Beautiful Bill Act.
"Healthcare stocks have been doing really well lately," Jed Ellerbroek, portfolio manager at Argent Capital Management, said to CNBC. "I think part of that is the anti-AI trade, but I also think part of it is just optimism that Democrats are taking over."
Ellerbroek is keeping his eye on hospital-related stocks such as HCA Healthcare and Tenet Healthcare as well as health insurers like UnitedHealth and Centene.
Bank pressure incoming?
Financials was the worst S&P 500 sector in early 2026 on the heels of President Donald Trump calling on Congress to pass a law that would cap credit card interest rates at 10%. While the sector has been able to notch gains since, with its year-to-date rise now at around 3%, things could get more unstable for the group under Democratic control.
"Democrats will come in wanting to show tangible progress on the affordability issue, and that means targeting sectors that are front and center in consumer budgets," said Evercore ISI's Matthew Aks. "We know Trump has populist instincts, populist leanings, and could he pick a couple of issues and decide to team up with the Democrats on those issues and target those industries in a populist way? Absolutely."
Given that Democratic control is often associated with increased regulation, while Republican control is thought to promote deregulation, Democrats could be interested in passing credit card rate caps if they come out victorious.
"I think if Democrats have control of one or both chambers, they would try to pass it and see if they could get Trump to either sign it or force him to veto it, and that would let Democrats kind of score a political point," Aks said.
Iran wildcard
Trump could restart the war against Iran after holding off any major strikes leading up to the midterms, a move that could upend the overall market and cause energy stocks to outperform. Crude oil prices jumped more than 10% in October, though they gave a lot of that gain back on Monday.
Gasoline prices stood at $4.17 a gallon on average nationwide Sunday, a nearly 40% increase compared to the same period last year, per AAA.
"If there are escalations, that could obviously put upward pressure on prices just ahead of Thanksgiving," said Patrick De Haan, head of petroleum analysts at Gas Buddy, "which is also when Americans have really staunch traditions in terms of driving to friends and family."
If Trump decides to take forceful action, it could snuff out hope for a typical post-midterm year-end rally.
Evercore ISI said the S&P 500 could retreat by double-digits to end the year at 6,800 as oil spikes if the president "moves to kinetic escalation in Iran ahead of seating the new Congress in January" and Democrats take Congress.
— With reporting by Sarah Min, Tobias Burns and Spencer Kimball`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/03/midterm-election-stock-market.html",
    publishedAt: "2026-11-03T13:28:36+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "russia-confirms-new-ukraine-peace-talks-eb646760",
    title: "Russia confirms new Ukraine peace talks as Melania Trump prepares to host ceasefire meeting",
    titleJa: "Russia confirms new Ukraine peace talks as Melania Trump prepares to host ceasefire meeting",
    summaryJa: "Russia confirmed Ukraine peace talks in Abu Dhabi next week and signaled a possible Trump-Putin-Xi summit, raising questions over Kyiv's role in negotiations.",
    bodyOriginal: `Russia on Tuesday confirmed that peace talks with Ukraine and the U.S. will go ahead next week in Abu Dhabi, while also signaling that a meeting between Presidents Vladimir Putin, Donald Trump and Xi Jinping to end the conflict was on the table.
Putin aide Vladimir Medinsky will serve as Moscow's chief negotiator at the talks in Abu Dhabi on Nov. 10-11, Kremlin spokesman Dmitry Peskov told reporters on a conference call, according to Reuters.
Separately, First Lady Melania Trump will bring Russian and Ukrainian representatives to the White House to discuss the local ceasefire in Kherson, the White House said Tuesday.
Monday saw the end of a six-day ceasefire in the Russian-occupied city of Oleshky and surrounding areas in the Kherson region to allow for evacuation of residents, in a pause of hostilities that the White House said was brokered by the first lady.
Ukraine on Monday accused Russia of using the ceasefire to reinforce its military positions in the city.
The first lady's summit on Thursday will be "an extraordinary moment in American history," the White House said, but did not name the representatives who will attend. Melania Trump will deliver remarks on the Oleshky ceasefire at 11 a.m. ET Thursday, it added.
Peskov also said Tuesday the Kremlin hopes to finalize plans for a trilateral meeting between the leaders of Russia, the U.S., and China in the coming days. The comments follow earlier reports that these countries were planning to negotiate an end to the war in Ukraine, without Ukrainian President Volodymyr Zelenskyy at the table.
Zelenskyy has said that any negotiations over Ukraine's future must include Kyiv.
"It can be acceptable only when we are at the table of negotiations," he said on Oct. 20, adding that he had discussed the proposal of a three-way meeting between the U.S., China, and Russia to negotiate an end to the nearly five-year full-scale war. "Nothing about Ukraine without Ukraine," he said.
Tensions between the U.S. and Ukraine have mounted over recent weeks amid continued strikes between Moscow and Kyiv, including on civilian and energy targets.
A series of moves by the Trump administration in October raised questions about Washington's reliability as Kyiv's most important military partner.
Tuesday's announcement follows U.S. special envoy Steve Witkoff saying late Monday that Washington will mediate Ukraine-Russia peace talks in Abu Dhabi on Nov. 10-11, focusing on security arrangements, de-escalation and humanitarian issues.
Witkoff also said that U.S. negotiators will meet European and NATO officials in Brussels this week to discuss post-war security guarantees and Ukraine's reconstruction.`,
    bodyJa: `Russia on Tuesday confirmed that peace talks with Ukraine and the U.S. will go ahead next week in Abu Dhabi, while also signaling that a meeting between Presidents Vladimir Putin, Donald Trump and Xi Jinping to end the conflict was on the table.
Putin aide Vladimir Medinsky will serve as Moscow's chief negotiator at the talks in Abu Dhabi on Nov. 10-11, Kremlin spokesman Dmitry Peskov told reporters on a conference call, according to Reuters.
Separately, First Lady Melania Trump will bring Russian and Ukrainian representatives to the White House to discuss the local ceasefire in Kherson, the White House said Tuesday.
Monday saw the end of a six-day ceasefire in the Russian-occupied city of Oleshky and surrounding areas in the Kherson region to allow for evacuation of residents, in a pause of hostilities that the White House said was brokered by the first lady.
Ukraine on Monday accused Russia of using the ceasefire to reinforce its military positions in the city.
The first lady's summit on Thursday will be "an extraordinary moment in American history," the White House said, but did not name the representatives who will attend. Melania Trump will deliver remarks on the Oleshky ceasefire at 11 a.m. ET Thursday, it added.
Peskov also said Tuesday the Kremlin hopes to finalize plans for a trilateral meeting between the leaders of Russia, the U.S., and China in the coming days. The comments follow earlier reports that these countries were planning to negotiate an end to the war in Ukraine, without Ukrainian President Volodymyr Zelenskyy at the table.
Zelenskyy has said that any negotiations over Ukraine's future must include Kyiv.
"It can be acceptable only when we are at the table of negotiations," he said on Oct. 20, adding that he had discussed the proposal of a three-way meeting between the U.S., China, and Russia to negotiate an end to the nearly five-year full-scale war. "Nothing about Ukraine without Ukraine," he said.
Tensions between the U.S. and Ukraine have mounted over recent weeks amid continued strikes between Moscow and Kyiv, including on civilian and energy targets.
A series of moves by the Trump administration in October raised questions about Washington's reliability as Kyiv's most important military partner.
Tuesday's announcement follows U.S. special envoy Steve Witkoff saying late Monday that Washington will mediate Ukraine-Russia peace talks in Abu Dhabi on Nov. 10-11, focusing on security arrangements, de-escalation and humanitarian issues.
Witkoff also said that U.S. negotiators will meet European and NATO officials in Brussels this week to discuss post-war security guarantees and Ukraine's reconstruction.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/03/russia-ukraine-peace-talks-abu-dhabi-trump-putin-xi.html",
    publishedAt: "2026-11-03T13:22:25+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 7,
  },
  {
    id: "uk-and-eu-agree-draft-deal-to-scrap-brex-25637153",
    title: "UK and EU agree draft deal to scrap Brexit red tape over food exports",
    titleJa: "UK and EU agree draft deal to scrap Brexit red tape over food exports",
    summaryJa: "The food deal, ahead of a UK-EU summit later this month, is the most significant part of the so-called Brexit reset agreed so far.",
    bodyOriginal: `UK and EU agree draft deal to scrap Brexit red tape over food exports
- Published
The UK and EU have agreed a draft deal on removing post-Brexit checks from food and agriculture exports, ahead of the UK-EU summit later this month.
The BBC understands the 200-page draft text for this so called "SPS" [sanitary and phytosanitary] agreement has been circulated to EU nations in Brussels for consideration at a meeting on Wednesday.
Similar texts for deals on emissions trading and a youth travel and work scheme have also been circulated alongside a 15-page draft joint statement for UK and EU top leaders.
The food deal is the most significant part of the so-called Brexit reset agreed so far, removing checks and red tape that hit exporters after the UK exited the EU's single market.
As a result of the agreement, the government claims the UK economy will eventually see £5.1bn worth of annual benefits.
The deal could have the following impact:
Exports to the EU of fresh sausages, burgers, shellfish from domestic waters and seed potatoes would be able to resume
It should remove the need for £200 Export Health Certificates, which confirm the product meets the health requirements of the country it is heading to
It should also end the need for £25 Phytosanitary certificates, which show that plants or plant products are free from pests and diseases
Inspector fees, organic certificates, some port fees and other checks for exports and imports to and from the EU could be removed
It will bring back passports for British pets being taken into the EU
In return, the UK is expected to commit to observing and adapting to existing EU regulations on plant, animal and food trade standards - a process called "dynamic alignment".
Each of the elements on the table was up for discussion under Sir Keir Starmer, and the summit would have taken place by now had Labour not replaced its leader in July.
Under Andy Burnham, Britain's approach to post-Brexit relations with the EU have shifted significantly. Sir Keir said the UK would not rejoin the bloc in his lifetime, while Burnham has said he would like to see Britain back in the EU in his.
Jon Walsh, the chief executive and co-founder of Bio&Me, which makes granolas, mueslis and yoghurts, told BBC 5 Live the draft deal sounded like "really good news".
"We're just a small company but when we were trying to export our yoghurts before, every time we'd send a pallet we had to pay a vet to inspect it and that was £140, and that meant that you'd lose money... so we had to stop."
The company also had problems exporting granola and overnight oats, with some shipments being returned.
"It was so frustrating because it was the same person filling out the same form and yet half would make it through and half wouldn't," Walsh said.
"You just kind of give up because you're losing money."
In an interview with ITV, Burnham said "public opinion has changed nationally" since the 2016 Brexit vote, but added he would "not run ahead of public opinion" on the issue.
"The public need to be the boss when it comes to whatever happens with Brexit," he added.
Burnham also said he had not proposed the return of freedom of movement between the UK and EU.
Asked by the BBC about the UK's relationship with the EU, Tory Leader Kemi Badenoch said that while we should "work closely", "dynamic alignment" with the EU would be a red line and "actually take us backwards".
Liberal Democrat Europe spokesperson Al Pinkerton said the draft deal was a "patch, not a fix".
"The real solution is to rejoin the single market and to establish a customs union with the EU," he added.
Reform UK's business spokesman Richard Tice said: "One of the key benefits of Brexit was that Britain no longer had to adhere to ridiculous EU rules.
"Returning to any form of alignment with Europe would crush Britain's competitiveness and force us to surrender sovereignty over trade policy, putting trade deals worth hundreds of billions of pounds at risk."
While UK rules remain mostly aligned with EU ones, there are some areas where England has diverged from the EU rule book, for example on "precision breeding" of plants, previously known as gene editing. In recent weeks, agreement has been struck on transition arrangements while the EU's new regulations come in to force.
The government has already announced a European Partnerships Bill which will provide a legal mechanism for the application of new EU rules and regulations. This will also allow for the necessary alignments for the linking of the UK emissions trading scheme with the EU's, and save the need for UK exporters to pay the EU's new carbon border tax.
The draft agreements will be discussed at a meeting of EU ambassadors called Coreper on Wednesday, with some key details on the planned numbers in a Youth Experience Scheme to be finalised at a political level in the coming days. A discount on full foreign student fees for EU students is likely to be pushed to next year alongside a plan to reconnect electricity markets.
The BBC understands the draft agreements will also include some references to UK involvement in defence co-operation schemes, access to law enforcement databases and some reassurances over the EU's "Made in Europe" plans.
A food deal will have particular significance for Northern Ireland, radically reducing the impact of the post-Brexit Irish Sea border.
Northern Ireland's Brexit deal kept it inside the EU's single market for goods. That means food products from elsewhere in the UK require paperwork and some physical checks when arriving at NI's ports. A deal will ultimately end those requirements.
While the food trade plans have been backed by supermarkets and farmers representatives, some pro-Brexit campaigners have criticised the reapplication of EU rules. The post-Brexit trade deal signed by Boris Johnson's government prioritised regulatory freedoms for the UK over avoiding new regulatory red tape, checks and delays.
But William Bain, the British Chamber of Commerce's (BCC) head of trade policy, told the BBC's Today programme that business overall thought it was a "price is worth paying" to follow common rules, as companies would benefit from "lower costs, reduced delays [and] increased market access".
At the moment, he said, the requirement for Export Health Certificates can add thousands of pounds of costs to each truck carrying goods, in addition "to the delays that people find at the ports or at the borders".
"So we get lower exports because of the delays and the massive increases in costs that have come into the supply chain."
The BCC has released a new analysis of its members' views suggesting options for a closer relationship.
The business lobby group says the current trade relationship is "failing to deliver", leaving firms "struggling with a thicket of Brexit red tape" nearly six years after the UK's exit from the bloc.
Sign up for our Politics Essential newsletter to keep up with the inner workings of Westminster and beyond.
- Published24 June
- Published2 days ago
- Published6 days ago`,
    bodyJa: `UK and EU agree draft deal to scrap Brexit red tape over food exports
- Published
The UK and EU have agreed a draft deal on removing post-Brexit checks from food and agriculture exports, ahead of the UK-EU summit later this month.
The BBC understands the 200-page draft text for this so called "SPS" [sanitary and phytosanitary] agreement has been circulated to EU nations in Brussels for consideration at a meeting on Wednesday.
Similar texts for deals on emissions trading and a youth travel and work scheme have also been circulated alongside a 15-page draft joint statement for UK and EU top leaders.
The food deal is the most significant part of the so-called Brexit reset agreed so far, removing checks and red tape that hit exporters after the UK exited the EU's single market.
As a result of the agreement, the government claims the UK economy will eventually see £5.1bn worth of annual benefits.
The deal could have the following impact:
Exports to the EU of fresh sausages, burgers, shellfish from domestic waters and seed potatoes would be able to resume
It should remove the need for £200 Export Health Certificates, which confirm the product meets the health requirements of the country it is heading to
It should also end the need for £25 Phytosanitary certificates, which show that plants or plant products are free from pests and diseases
Inspector fees, organic certificates, some port fees and other checks for exports and imports to and from the EU could be removed
It will bring back passports for British pets being taken into the EU
In return, the UK is expected to commit to observing and adapting to existing EU regulations on plant, animal and food trade standards - a process called "dynamic alignment".
Each of the elements on the table was up for discussion under Sir Keir Starmer, and the summit would have taken place by now had Labour not replaced its leader in July.
Under Andy Burnham, Britain's approach to post-Brexit relations with the EU have shifted significantly. Sir Keir said the UK would not rejoin the bloc in his lifetime, while Burnham has said he would like to see Britain back in the EU in his.
Jon Walsh, the chief executive and co-founder of Bio&Me, which makes granolas, mueslis and yoghurts, told BBC 5 Live the draft deal sounded like "really good news".
"We're just a small company but when we were trying to export our yoghurts before, every time we'd send a pallet we had to pay a vet to inspect it and that was £140, and that meant that you'd lose money... so we had to stop."
The company also had problems exporting granola and overnight oats, with some shipments being returned.
"It was so frustrating because it was the same person filling out the same form and yet half would make it through and half wouldn't," Walsh said.
"You just kind of give up because you're losing money."
In an interview with ITV, Burnham said "public opinion has changed nationally" since the 2016 Brexit vote, but added he would "not run ahead of public opinion" on the issue.
"The public need to be the boss when it comes to whatever happens with Brexit," he added.
Burnham also said he had not proposed the return of freedom of movement between the UK and EU.
Asked by the BBC about the UK's relationship with the EU, Tory Leader Kemi Badenoch said that while we should "work closely", "dynamic alignment" with the EU would be a red line and "actually take us backwards".
Liberal Democrat Europe spokesperson Al Pinkerton said the draft deal was a "patch, not a fix".
"The real solution is to rejoin the single market and to establish a customs union with the EU," he added.
Reform UK's business spokesman Richard Tice said: "One of the key benefits of Brexit was that Britain no longer had to adhere to ridiculous EU rules.
"Returning to any form of alignment with Europe would crush Britain's competitiveness and force us to surrender sovereignty over trade policy, putting trade deals worth hundreds of billions of pounds at risk."
While UK rules remain mostly aligned with EU ones, there are some areas where England has diverged from the EU rule book, for example on "precision breeding" of plants, previously known as gene editing. In recent weeks, agreement has been struck on transition arrangements while the EU's new regulations come in to force.
The government has already announced a European Partnerships Bill which will provide a legal mechanism for the application of new EU rules and regulations. This will also allow for the necessary alignments for the linking of the UK emissions trading scheme with the EU's, and save the need for UK exporters to pay the EU's new carbon border tax.
The draft agreements will be discussed at a meeting of EU ambassadors called Coreper on Wednesday, with some key details on the planned numbers in a Youth Experience Scheme to be finalised at a political level in the coming days. A discount on full foreign student fees for EU students is likely to be pushed to next year alongside a plan to reconnect electricity markets.
The BBC understands the draft agreements will also include some references to UK involvement in defence co-operation schemes, access to law enforcement databases and some reassurances over the EU's "Made in Europe" plans.
A food deal will have particular significance for Northern Ireland, radically reducing the impact of the post-Brexit Irish Sea border.
Northern Ireland's Brexit deal kept it inside the EU's single market for goods. That means food products from elsewhere in the UK require paperwork and some physical checks when arriving at NI's ports. A deal will ultimately end those requirements.
While the food trade plans have been backed by supermarkets and farmers representatives, some pro-Brexit campaigners have criticised the reapplication of EU rules. The post-Brexit trade deal signed by Boris Johnson's government prioritised regulatory freedoms for the UK over avoiding new regulatory red tape, checks and delays.
But William Bain, the British Chamber of Commerce's (BCC) head of trade policy, told the BBC's Today programme that business overall thought it was a "price is worth paying" to follow common rules, as companies would benefit from "lower costs, reduced delays [and] increased market access".
At the moment, he said, the requirement for Export Health Certificates can add thousands of pounds of costs to each truck carrying goods, in addition "to the delays that people find at the ports or at the borders".
"So we get lower exports because of the delays and the massive increases in costs that have come into the supply chain."
The BCC has released a new analysis of its members' views suggesting options for a closer relationship.
The business lobby group says the current trade relationship is "failing to deliver", leaving firms "struggling with a thicket of Brexit red tape" nearly six years after the UK's exit from the bloc.
Sign up for our Politics Essential newsletter to keep up with the inner workings of Westminster and beyond.
- Published24 June
- Published2 days ago
- Published6 days ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cmp3grwre9xdo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-03T12:07:59+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/2a94/live/6d035ba0-d778-11f1-a701-fddedf244c16.jpg",
    readTime: 10,
  },
  {
    id: "drivers-may-get-compensation-offers-befo-fa9b19a2",
    title: "Drivers may get compensation offers before car finance saga ends",
    titleJa: "Drivers may get compensation offers before car finance saga ends",
    summaryJa: "The regulator says it supports lenders offering early compensation offers, as long as they are fair.",
    bodyOriginal: `Drivers may get compensation offers before car finance saga ends
- Published
Drivers may be offered compensation from lenders ahead of the next legal battle in the car finance mis-selling saga.
Regulator the Financial Conduct Authority (FCA) said it would welcome lenders making settlement offers as long as customers were not given a worse deal than under its proposed central scheme.
That scheme is facing a legal challenge, to be heard in February, with resulting compensation unlikely to be paid until late next year.
But Barclays has confirmed it will make early compensation offers from now, with others expected to follow suit.
The FCA said it would still only expect a minority of claimants to be made early offers, with most having to wait for the outcome of next year's court case.
Stephen Braviner Roman, the FCA's general counsel and co-lead on the motor finance project, said: "Fair settlement offers could result in some people getting money sooner. It's clear they want the choice.
"Anyone who wants to wait can, and there's no obligation to agree to the offer. We'll closely monitor firms making offers and expect them to be clear what accepting an offer means."
Why drivers will receive payouts
The vast majority of new cars, and many second-hand ones, are bought with finance agreements. Customers pay an initial deposit to secure the vehicle, then a monthly fee with interest.
But millions of drivers who took out a car loan between April 2007 and November 2024 will be entitled to compensation after the loans were mis-sold.
They mostly related to when car dealers received commission from lenders, based on the interest rate charged to the customer. These were known as discretionary commission arrangements (DCAs) and customers were often not told about them.
Average compensation payouts of about £829 are expected to be made related to about 12 million car loans - about 37% of the total number during the period.
Car finance compensation payments delayed until next year
- Published1 hour ago
Compensation will cost the industry up to £9.1bn, including administrative costs. Individual payouts will vary, depending on the degree of harm each driver faced.
With huge compensation payouts inevitable, some lenders have already set aside millions of pounds to cover the cost.
Barclays has decided to start making compensation payments early, potentially to start clearing the cost off its balance sheet. It pointed out that claimants had already faced "a considerable wait".
"By making these early settlement offers, we are giving some customers the option of receiving redress sooner, rather than waiting for the legal challenges and any subsequent FCA action to conclude," said a Barclays Partner Finance spokesperson.
"Each offer will be calculated using the FCA's redress scheme methodology. We will clearly explain how it has been calculated and what accepting a full and final settlement means, so customers can decide whether accepting the offer is right for them."
The lender said claimants would start to be contacted directly "in the coming weeks".
But it stressed not all customers whose complaints were acknowledged on or before 1 October 2026 would receive an early settlement offer.
Guidelines on whether to accept an offer
The FCA has published a factsheet to help drivers, external work out whether they should accept early settlements from lenders.
It will include a list of lenders who are making early offers, to ensure claimants with other lenders are not scammed.
The regulator said lenders will need to be clear with people about what accepting any offer means. This includes:
Being able to keep any payment, even if the final settlement under the central scheme after the legal challenges proved to be smaller
Claimants would not be able to claim more later if the outcome of the legal challenge meant they would have been paid more
Accepting an offer takes you out of the scheme and stops any further input from the financial ombudsman
The Finance and Leasing Association, which represents lenders, said: "We want to see consumers receive the fairest outcome in as timely a way as possible and recognise that, in some cases, that may point to early settlement, while in others it may be appropriate to await greater legal certainty."
But Kevin Durkin, solicitor advocate and director at HD Law, who represented Marcus Johnson who won his case in the Supreme Court, said he had "real reservations" that fair compensation would be offered.
"These are only heightened by reports that just a small number of claimants will receive what could be lowball offers. I fear this is crumbs from the table, for some customers who are highly likely to be owed more, while the vast majority will receive no offer at all," he said.
The main proposed FCA scheme remains partially suspended, pending legal challenges in February.
Consumer group Consumer Voice said the proposed compensation scheme left "too many people short-changed". Three lenders - Volkswagen Financial Services, Mercedes Benz Financial Services, and Credit Agricole Auto Finance - are also challenging the scheme.
The UK's Upper Tribunal has agreed to hear legal challenges to the scheme, with a hearing scheduled from 16 February to 3 March.
Anyone who is concerned about their car finance deal and has not yet complained can still complain directly to their lender. There is information on the FCA website on how to complain for free, external.`,
    bodyJa: `Drivers may get compensation offers before car finance saga ends
- Published
Drivers may be offered compensation from lenders ahead of the next legal battle in the car finance mis-selling saga.
Regulator the Financial Conduct Authority (FCA) said it would welcome lenders making settlement offers as long as customers were not given a worse deal than under its proposed central scheme.
That scheme is facing a legal challenge, to be heard in February, with resulting compensation unlikely to be paid until late next year.
But Barclays has confirmed it will make early compensation offers from now, with others expected to follow suit.
The FCA said it would still only expect a minority of claimants to be made early offers, with most having to wait for the outcome of next year's court case.
Stephen Braviner Roman, the FCA's general counsel and co-lead on the motor finance project, said: "Fair settlement offers could result in some people getting money sooner. It's clear they want the choice.
"Anyone who wants to wait can, and there's no obligation to agree to the offer. We'll closely monitor firms making offers and expect them to be clear what accepting an offer means."
Why drivers will receive payouts
The vast majority of new cars, and many second-hand ones, are bought with finance agreements. Customers pay an initial deposit to secure the vehicle, then a monthly fee with interest.
But millions of drivers who took out a car loan between April 2007 and November 2024 will be entitled to compensation after the loans were mis-sold.
They mostly related to when car dealers received commission from lenders, based on the interest rate charged to the customer. These were known as discretionary commission arrangements (DCAs) and customers were often not told about them.
Average compensation payouts of about £829 are expected to be made related to about 12 million car loans - about 37% of the total number during the period.
Car finance compensation payments delayed until next year
- Published1 hour ago
Compensation will cost the industry up to £9.1bn, including administrative costs. Individual payouts will vary, depending on the degree of harm each driver faced.
With huge compensation payouts inevitable, some lenders have already set aside millions of pounds to cover the cost.
Barclays has decided to start making compensation payments early, potentially to start clearing the cost off its balance sheet. It pointed out that claimants had already faced "a considerable wait".
"By making these early settlement offers, we are giving some customers the option of receiving redress sooner, rather than waiting for the legal challenges and any subsequent FCA action to conclude," said a Barclays Partner Finance spokesperson.
"Each offer will be calculated using the FCA's redress scheme methodology. We will clearly explain how it has been calculated and what accepting a full and final settlement means, so customers can decide whether accepting the offer is right for them."
The lender said claimants would start to be contacted directly "in the coming weeks".
But it stressed not all customers whose complaints were acknowledged on or before 1 October 2026 would receive an early settlement offer.
Guidelines on whether to accept an offer
The FCA has published a factsheet to help drivers, external work out whether they should accept early settlements from lenders.
It will include a list of lenders who are making early offers, to ensure claimants with other lenders are not scammed.
The regulator said lenders will need to be clear with people about what accepting any offer means. This includes:
Being able to keep any payment, even if the final settlement under the central scheme after the legal challenges proved to be smaller
Claimants would not be able to claim more later if the outcome of the legal challenge meant they would have been paid more
Accepting an offer takes you out of the scheme and stops any further input from the financial ombudsman
The Finance and Leasing Association, which represents lenders, said: "We want to see consumers receive the fairest outcome in as timely a way as possible and recognise that, in some cases, that may point to early settlement, while in others it may be appropriate to await greater legal certainty."
But Kevin Durkin, solicitor advocate and director at HD Law, who represented Marcus Johnson who won his case in the Supreme Court, said he had "real reservations" that fair compensation would be offered.
"These are only heightened by reports that just a small number of claimants will receive what could be lowball offers. I fear this is crumbs from the table, for some customers who are highly likely to be owed more, while the vast majority will receive no offer at all," he said.
The main proposed FCA scheme remains partially suspended, pending legal challenges in February.
Consumer group Consumer Voice said the proposed compensation scheme left "too many people short-changed". Three lenders - Volkswagen Financial Services, Mercedes Benz Financial Services, and Credit Agricole Auto Finance - are also challenging the scheme.
The UK's Upper Tribunal has agreed to hear legal challenges to the scheme, with a hearing scheduled from 16 February to 3 March.
Anyone who is concerned about their car finance deal and has not yet complained can still complain directly to their lender. There is information on the FCA website on how to complain for free, external.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cqrky5nxxn4po?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-03T11:56:31+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/fe5c/live/9c202ea0-d6dc-11f1-b2be-0146bf989691.jpg",
    readTime: 10,
  },
  {
    id: "quiet-quitting-could-be-hitting-the-eco-356e86ad",
    title: "'Quiet quitting' could be hitting the economy - here's why",
    titleJa: "'Quiet quitting' could be hitting the economy - here's why",
    summaryJa: "Britons have become less engaged with the jobs they do and are less willing to put in extra effort, a report has found.",
    bodyOriginal: `'Quiet quitting' could be hitting the economy - here's why
- Published
The so-called "quiet quitting" trend where workers do the basic requirements of a job but refuse to do anything more might be hitting the economy, analysis has found.
Over the last decade, Britons have become less engaged with the jobs they do and are less willing to put in extra effort, according to a Resolution Foundation report.
The thinktank said this could partly help explain the slump in productivity since the pandemic.
"This is self-evidently bad for workers, but it also doesn't bode well for productivity and labour supply, both of which are vital for lifting living standards in the years ahead," said Hannah Slaughter, principal economist at the Resolution Foundation.
Quiet quitting was popularised on social media shortly after the pandemic.
Frustrated by high demands, low pay, and a squeeze in living standards, many online posts said workers should only do what their bosses asked and nothing more.
So you still show up for work, but no more helping out with additional tasks or checking emails outside work hours, instead focusing on work-life balance and "acting your wage".
Yet, far from being just a talking point on TikTok, the Resolution Foundation said the findings in its report were "consistent" with the idea of quiet quitting.
'I was working 60 hours a week so I quiet quit'
- Published31 August 2022
The percentage of those surveyed willing to go the extra mile to help their employer has sunk from 69% in 2015 to 55% in 2025, according to their survey of 4,656 adults.
Meanwhile, those who were not even "fairly" satisfied with their roles has sank to one-in-four, the lowest level on record.
In addition, workers are less likely than 10 years ago to say they have an interesting job, with 63% of those surveyed saying so, down from 74%.
"Workers today are indeed a little less committed to their employers, and a little less intrinsically drawn to work in general, than workers were a decade ago," the report added.
This shift over the last decade "may have contributed to weak productivity growth", which has slowed since the financial crisis and weakened again after the pandemic, the Resolution Foundation found.
Workers were also more focused on pay than in the past, which it said was "perhaps unsurprising... given the flatlining living standards of the past decade".
Sir John Curtice, politics professor and co-editor of the report, said the analysis does not mean that young people have "become more 'work-shy', nor have workers in general become more reluctant to change jobs".
"But if workers are to be fully engaged in their work, it has seemingly become more important for employers to provide jobs that are both financially rewarding and have flexible work hours," he added.
Get in touch
Are you quiet quitting? Tell us how and why.`,
    bodyJa: `'Quiet quitting' could be hitting the economy - here's why
- Published
The so-called "quiet quitting" trend where workers do the basic requirements of a job but refuse to do anything more might be hitting the economy, analysis has found.
Over the last decade, Britons have become less engaged with the jobs they do and are less willing to put in extra effort, according to a Resolution Foundation report.
The thinktank said this could partly help explain the slump in productivity since the pandemic.
"This is self-evidently bad for workers, but it also doesn't bode well for productivity and labour supply, both of which are vital for lifting living standards in the years ahead," said Hannah Slaughter, principal economist at the Resolution Foundation.
Quiet quitting was popularised on social media shortly after the pandemic.
Frustrated by high demands, low pay, and a squeeze in living standards, many online posts said workers should only do what their bosses asked and nothing more.
So you still show up for work, but no more helping out with additional tasks or checking emails outside work hours, instead focusing on work-life balance and "acting your wage".
Yet, far from being just a talking point on TikTok, the Resolution Foundation said the findings in its report were "consistent" with the idea of quiet quitting.
'I was working 60 hours a week so I quiet quit'
- Published31 August 2022
The percentage of those surveyed willing to go the extra mile to help their employer has sunk from 69% in 2015 to 55% in 2025, according to their survey of 4,656 adults.
Meanwhile, those who were not even "fairly" satisfied with their roles has sank to one-in-four, the lowest level on record.
In addition, workers are less likely than 10 years ago to say they have an interesting job, with 63% of those surveyed saying so, down from 74%.
"Workers today are indeed a little less committed to their employers, and a little less intrinsically drawn to work in general, than workers were a decade ago," the report added.
This shift over the last decade "may have contributed to weak productivity growth", which has slowed since the financial crisis and weakened again after the pandemic, the Resolution Foundation found.
Workers were also more focused on pay than in the past, which it said was "perhaps unsurprising... given the flatlining living standards of the past decade".
Sir John Curtice, politics professor and co-editor of the report, said the analysis does not mean that young people have "become more 'work-shy', nor have workers in general become more reluctant to change jobs".
"But if workers are to be fully engaged in their work, it has seemingly become more important for employers to provide jobs that are both financially rewarding and have flexible work hours," he added.
Get in touch
Are you quiet quitting? Tell us how and why.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cw23d5z87drpo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-03T11:15:51+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/fd90/live/95d1b5d0-d76a-11f1-a956-ff083523ef77.jpg",
    readTime: 7,
  },
  {
    id: "north-korea-denies-being-behind-record-6-6b261816",
    title: "North Korea denies being behind record $6.3bn Binance hack",
    titleJa: "North Korea denies being behind record $6.3bn Binance hack",
    summaryJa: "US government agencies and cyber analysts have blamed Pyongyang for the record-breaking heist.",
    bodyOriginal: `North Korea denies being behind record $6.3bn Binance hack
- Published
North Korea has denied claims that it was behind the record $6.3bn (£4.7bn) hack of cryptocurrency exchange Binance, calling the allegations "absurd rhetoric".
Kim Yo Jong, a top Democratic People's Republic of Korea official and the sister of leader Kim Jong Un, said on Tuesday that the accusations are another "sinister attempt" by the US to damage Pyongyang's public image.
The US Federal Bureau of Investigation (FBI), the Secret Service and cyber analysts have said North Korea orchestrated the hack, which has been described as the largest in history.
This is the latest hack to be linked to North Korea, which has been accused of relying on cyber-crime to help finance its sanctioned economy.
Blockchain analysts and the FBI have said the attack was led by state-backed hacking group TraderTraitor.
The FBI has called on industry partners to help block transactions involving cryptocurrency accounts linked to the group.
"The US has made a trite provocation of linking it with the Democratic People's Republic of Korea again," Kim Yo-jong, the director of North Korea's General Affairs Department, said in a statement.
"It is a grave political provocation against the DPRK that the US misleads the international public opinion as if all the cyber crimes in different parts of the world are our deeds," she said.
Who could be behind the Binance hack and what we know so far
- Published4 days ago
But Pyongyang has been blamed for a number of major cyber attacks in recent years - accusations that it has denied.
The TraderTraitor unit, which is also known as the Lazarus Group, was blamed for a then-record $1.5bn hack of crypto exchange Bybit in 2025.
Pyongyang has systematically built its cyber operations, recruiting promising students from universities and sending them to hacker units overseen by North Korea's intelligence agency, research groups like the S Rajaratnam School of International Studies think tank have said.
The country has consistently denied such claims.
Kim Yo Jong said "it is the consistent policy stand of the DPRK government to resolutely oppose all sorts of malicious acts in cyberspace".
Kim Yo-jong: North Korea's heir apparent?
- Published16 June 2020
Who is Kim Yo-jong? Video, 00:02:32
- Published16 June 2020
Binance did not respond to the BBC's queries about North Korea's alleged involvement in the hack.
Since the incident, the crypto giant has largely focused its public statements on the technical nature of the breach and its response to protect users.
The company's spokesperson said that a net $4.72bn has been withdrawn from the exchange since transactions resumed on Sunday.
The net outflow represents a "relatively limited portion" of Binance's total assets, which stand at approximately $157bn, the spokesperson told the BBC on Tuesday.
That figure reflects the impact of the hack, subsequent withdrawals and market price changes.
"Withdrawal levels are stabilising to what we would consider normal and expected on-chain activity," she added.
The company said last week that initial checks indicated that an engineer's laptop had been compromised, enabling an attacker to make unauthorised withdrawals.
Trading in major cryptocurrencies on Binance has since resumed after the exchange worked with issuers to freeze assets impacted by the hack.
The company has repeatedly said it would cover all of the losses linked to the attack and that it has so far covered around 95% of the assets stolen in the breach.`,
    bodyJa: `North Korea denies being behind record $6.3bn Binance hack
- Published
North Korea has denied claims that it was behind the record $6.3bn (£4.7bn) hack of cryptocurrency exchange Binance, calling the allegations "absurd rhetoric".
Kim Yo Jong, a top Democratic People's Republic of Korea official and the sister of leader Kim Jong Un, said on Tuesday that the accusations are another "sinister attempt" by the US to damage Pyongyang's public image.
The US Federal Bureau of Investigation (FBI), the Secret Service and cyber analysts have said North Korea orchestrated the hack, which has been described as the largest in history.
This is the latest hack to be linked to North Korea, which has been accused of relying on cyber-crime to help finance its sanctioned economy.
Blockchain analysts and the FBI have said the attack was led by state-backed hacking group TraderTraitor.
The FBI has called on industry partners to help block transactions involving cryptocurrency accounts linked to the group.
"The US has made a trite provocation of linking it with the Democratic People's Republic of Korea again," Kim Yo-jong, the director of North Korea's General Affairs Department, said in a statement.
"It is a grave political provocation against the DPRK that the US misleads the international public opinion as if all the cyber crimes in different parts of the world are our deeds," she said.
Who could be behind the Binance hack and what we know so far
- Published4 days ago
But Pyongyang has been blamed for a number of major cyber attacks in recent years - accusations that it has denied.
The TraderTraitor unit, which is also known as the Lazarus Group, was blamed for a then-record $1.5bn hack of crypto exchange Bybit in 2025.
Pyongyang has systematically built its cyber operations, recruiting promising students from universities and sending them to hacker units overseen by North Korea's intelligence agency, research groups like the S Rajaratnam School of International Studies think tank have said.
The country has consistently denied such claims.
Kim Yo Jong said "it is the consistent policy stand of the DPRK government to resolutely oppose all sorts of malicious acts in cyberspace".
Kim Yo-jong: North Korea's heir apparent?
- Published16 June 2020
Who is Kim Yo-jong? Video, 00:02:32
- Published16 June 2020
Binance did not respond to the BBC's queries about North Korea's alleged involvement in the hack.
Since the incident, the crypto giant has largely focused its public statements on the technical nature of the breach and its response to protect users.
The company's spokesperson said that a net $4.72bn has been withdrawn from the exchange since transactions resumed on Sunday.
The net outflow represents a "relatively limited portion" of Binance's total assets, which stand at approximately $157bn, the spokesperson told the BBC on Tuesday.
That figure reflects the impact of the hack, subsequent withdrawals and market price changes.
"Withdrawal levels are stabilising to what we would consider normal and expected on-chain activity," she added.
The company said last week that initial checks indicated that an engineer's laptop had been compromised, enabling an attacker to make unauthorised withdrawals.
Trading in major cryptocurrencies on Binance has since resumed after the exchange worked with issuers to freeze assets impacted by the hack.
The company has repeatedly said it would cover all of the losses linked to the attack and that it has so far covered around 95% of the assets stolen in the breach.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c6rey4v53exgo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-03T08:33:20+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/7a90/live/75145840-d727-11f1-b237-93d5595d4291.jpg",
    readTime: 9,
  },
  {
    id: "apple-s-iphone-business-is-booming-here-c5adf90a",
    title: "Apple’s iPhone business is booming. Here’s why the stock is falling anyway.",
    titleJa: "Apple’s iPhone business is booming. Here’s why the stock is falling anyway.",
    summaryJa: "Although iPhone demand remains strong, Apple faces a worsening memory crunch and a slowing services business.",
    bodyOriginal: `Although iPhone demand remains strong, Apple faces a worsening memory crunch and a slowing services business.`,
    bodyJa: `Although iPhone demand remains strong, Apple faces a worsening memory crunch and a slowing services business.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/apples-iphone-business-is-booming-heres-why-the-stock-is-falling-anyway-07de9fff?mod=mw_rss_topstories",
    publishedAt: "2026-11-03T00:52:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-87586292",
    readTime: 2,
  },
  {
    id: "from-scooters-to-shampoo-the-people-savi-c8bd78b9",
    title: "From scooters to shampoo - the people saving hundreds from dumpster diving",
    titleJa: "From scooters to shampoo - the people saving hundreds from dumpster diving",
    summaryJa: "The men and women who rummage through commercial bins to take clothes and other items.",
    bodyOriginal: `From scooters to shampoo - the people saving hundreds from dumpster diving
- Published
Darryl Baker was shocked to see piles of clothes dumped beside the recycling bins outside her local supermarket.
On several trips to the dumpsters she has also found a host of other items, such as "a perfectly decent" Ikea picture frame and children's scooters.
Always on the lookout for ways to save money and appalled by the waste, the thrifty mother-of-two from north London asked supermarket staff if she could take some of it.
Permission granted, "I got my children entire new wardrobes," says Darryl, 39, adding that she's stuff put away for years to come.
During a six-month stint this year, "I have probably saved hundreds of pounds," says the freelance journalist.
Darryl reels off the names of brands she has salvaged - Ralph Lauren, Nike and The North Face, among others. "My mind was blown," she says. "This stuff is just strewn all over the floor."
In addition to finding clothing for her children and her nephews and nieces, she keeps some for herself. Others she donates or sells, including recently getting £30 for a men's Barbour jacket.
Darryl has joined the ranks of so-called dumpster divers – people who rummage through commercial bins for treasures. Motivations include saving money, giving items to charity and disgust at how often perfectly usable items are being consigned to waste - or a combination of all three.
'I'm a bit of a Robin Hood'
Texan Jeff Ferrell has been rooting around in trash for more than 50 years.
"I still dumpster dive every day by bicycle," says the 72-year old, who lives in Fort Worth, and has written books on the topic. "I still enjoy it as much, or more, than ever."
Jeff considers himself a "bit of Robin Hood mixed with anarchist direct action", only scrounging in more affluent neighbourhoods and giving away many of his finds.
"Almost everything in our home is scrounged, and I never buy, for example, soap or toiletries or medical supplies, or shoes and clothes and tools and garden supplies," he says.
Jeff looks for discarded metal to sell at a scrapyard which, he says, earns him around $150 (£110) every two weeks. His wife sells his other finds, such as "an antique or piece of jewellery", on eBay.
Through savings and selling the more valuable items, he estimates his finds are worth "tens of thousands of dollars a year".
'If something catches my eye, I'll grab it'
While dumpster diving may have been considered taboo in the past, it's now something many people are proud to do and post about online.
Millie Diamond, a London-based stylist, posts videos on TikTok of her rummaging through bins. But she has a very specific aim - to unearth fabrics and clothing that she can salvage and refashion into new items, some of which she then sells.
She estimates that one dress she found was worth £600.
"I'm a bit of a magpie. I like collecting things off the street or anywhere that there's a freebie. If I see something that catches my eye, then I'll grab it."
Millie, 36, began bin diving after spotting some fabrics discarded by a business that had shut down. "I literally clambered into the bin. It turned out it was loads of vintage clothes."
'I haven't bought shampoo for years'
For Charlotte Bayford in Essex it's all about timing. Her best finds come when students at Essex University head home for the summer and ditch anything they don't want to take with them.
This includes half-filled toiletries. "I haven't bought shampoo for eight years," says the 44-year-old sales assistant. "I'd say that has saved me some money."
Like other dumpster divers, Charlotte gives a lot of her finds to charity. But she has also filled her house with salvaged objects, and sells on some valuable items.
Food, as long as it remains sealed, is fair game too. "I've found tins of Heinz baked beans, perfectly fine. I'm quite happy to eat those," Charlotte says.
But is taking things out of bins and keeping them acceptable in the eyes of the law?
Jeff, who is professor emeritus of sociology at Texas Christian University, says many US cities have made the practice illegal, including New York, Cleveland and Wichita.
"Dumpster diving is considered illegal [in such places] because that which is thrown away now belongs to the city... or to the private company that provided trash services," he explains. Any dumpster diver also risks trespass charges.
In Fort Worth, where Jeff lives, items can only be removed from bins if they are on public land, external.
In the UK, Sunjay Versani of Duncan Lewis Solicitors says it depends on the circumstances.
"In many cases involving genuinely discarded goods, prosecution is unlikely," he says.
"But there is no general rule that something is free to take simply because it has been put in a skip or bin. If in doubt, the safest approach is to ask the owner or business for permission."
- Published4 days ago
- Published13 October
- Published29 September`,
    bodyJa: `From scooters to shampoo - the people saving hundreds from dumpster diving
- Published
Darryl Baker was shocked to see piles of clothes dumped beside the recycling bins outside her local supermarket.
On several trips to the dumpsters she has also found a host of other items, such as "a perfectly decent" Ikea picture frame and children's scooters.
Always on the lookout for ways to save money and appalled by the waste, the thrifty mother-of-two from north London asked supermarket staff if she could take some of it.
Permission granted, "I got my children entire new wardrobes," says Darryl, 39, adding that she's stuff put away for years to come.
During a six-month stint this year, "I have probably saved hundreds of pounds," says the freelance journalist.
Darryl reels off the names of brands she has salvaged - Ralph Lauren, Nike and The North Face, among others. "My mind was blown," she says. "This stuff is just strewn all over the floor."
In addition to finding clothing for her children and her nephews and nieces, she keeps some for herself. Others she donates or sells, including recently getting £30 for a men's Barbour jacket.
Darryl has joined the ranks of so-called dumpster divers – people who rummage through commercial bins for treasures. Motivations include saving money, giving items to charity and disgust at how often perfectly usable items are being consigned to waste - or a combination of all three.
'I'm a bit of a Robin Hood'
Texan Jeff Ferrell has been rooting around in trash for more than 50 years.
"I still dumpster dive every day by bicycle," says the 72-year old, who lives in Fort Worth, and has written books on the topic. "I still enjoy it as much, or more, than ever."
Jeff considers himself a "bit of Robin Hood mixed with anarchist direct action", only scrounging in more affluent neighbourhoods and giving away many of his finds.
"Almost everything in our home is scrounged, and I never buy, for example, soap or toiletries or medical supplies, or shoes and clothes and tools and garden supplies," he says.
Jeff looks for discarded metal to sell at a scrapyard which, he says, earns him around $150 (£110) every two weeks. His wife sells his other finds, such as "an antique or piece of jewellery", on eBay.
Through savings and selling the more valuable items, he estimates his finds are worth "tens of thousands of dollars a year".
'If something catches my eye, I'll grab it'
While dumpster diving may have been considered taboo in the past, it's now something many people are proud to do and post about online.
Millie Diamond, a London-based stylist, posts videos on TikTok of her rummaging through bins. But she has a very specific aim - to unearth fabrics and clothing that she can salvage and refashion into new items, some of which she then sells.
She estimates that one dress she found was worth £600.
"I'm a bit of a magpie. I like collecting things off the street or anywhere that there's a freebie. If I see something that catches my eye, then I'll grab it."
Millie, 36, began bin diving after spotting some fabrics discarded by a business that had shut down. "I literally clambered into the bin. It turned out it was loads of vintage clothes."
'I haven't bought shampoo for years'
For Charlotte Bayford in Essex it's all about timing. Her best finds come when students at Essex University head home for the summer and ditch anything they don't want to take with them.
This includes half-filled toiletries. "I haven't bought shampoo for eight years," says the 44-year-old sales assistant. "I'd say that has saved me some money."
Like other dumpster divers, Charlotte gives a lot of her finds to charity. But she has also filled her house with salvaged objects, and sells on some valuable items.
Food, as long as it remains sealed, is fair game too. "I've found tins of Heinz baked beans, perfectly fine. I'm quite happy to eat those," Charlotte says.
But is taking things out of bins and keeping them acceptable in the eyes of the law?
Jeff, who is professor emeritus of sociology at Texas Christian University, says many US cities have made the practice illegal, including New York, Cleveland and Wichita.
"Dumpster diving is considered illegal [in such places] because that which is thrown away now belongs to the city... or to the private company that provided trash services," he explains. Any dumpster diver also risks trespass charges.
In Fort Worth, where Jeff lives, items can only be removed from bins if they are on public land, external.
In the UK, Sunjay Versani of Duncan Lewis Solicitors says it depends on the circumstances.
"In many cases involving genuinely discarded goods, prosecution is unlikely," he says.
"But there is no general rule that something is free to take simply because it has been put in a skip or bin. If in doubt, the safest approach is to ask the owner or business for permission."
- Published4 days ago
- Published13 October
- Published29 September`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cm86zdp2ygqno?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-03T00:41:36+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/2fcb/live/1bb38aa0-d6d7-11f1-b441-2b33b063138f.jpg",
    readTime: 10,
  },
  {
    id: "apple-unsure-when-more-foldable-iphones-e63da366",
    title: "Apple unsure when more foldable iPhones will be available after selling out",
    titleJa: "Apple unsure when more foldable iPhones will be available after selling out",
    summaryJa: "Apple’s foldable iPhone Duo was a hit with people willing to spend $2,000 on a new mobile.",
    bodyOriginal: `Apple unsure when more foldable iPhones will be available after selling out
- Published
The new head of Apple says the company is working to get its new foldable iPhones available to more people after the $1,999 smartphone quickly sold out when it was released just over a week ago.
John Ternus, who in September took over the role as Apple's chief executive from Tim Cook, said on Monday that he was "thrilled" at the early reaction to the iPhone Duo.
While the costly phone, which sells for £1,999 in the UK, immediately sold out, some buyers have seen their screens crack.
The phones are still in high demand and Sabhi Kahn, Apple's new chief operating officer, said the technology giant did not know when more Duos would be available.
"At this time, it's really hard to predict when supply and demand will be in balance," Kahn said during a call with financial analysts to discuss Apple's latest financial results.
Apple executives did not mention during the call any issues with the iPhone Duo. But last week, the company said it would replace any phones that were impacted by an issue that caused a "small number" of the new phones to crack along the inside fold.
Nevertheless, Apple said on Monday that over the last year it sold more iPhones globally than it ever has before.
During the three months to 26 September, which did not include sales of the iPhone Duo that went on sale toward the end of October, Apple saw iPhone sales rise 17% to $57bn.
Apple has boasted throughout the year that iPhone sales have been surging, despite the company's warnings that crucial components for the device, along with Mac computers and iPads, were constrained to the point of weighing down sales.
Sales of Mac computers also grew during the quarter by 27%, hitting $10.7bn, another record for Apple.
Overall sales at the company rose by 15% for the year, to $479bn.
However, sales for both the iPad and Apple's wearable products, including its headphones and Watch fell by 10% and 7%, respectively.
Kahn noted during the call that most Apple devices are still seeing supply constraints driven in part by difficulty in getting enough microprocessors with "advanced nodes."
Those components are essentially computer chip technology that allows Apple's devices to operate more quickly, most of which Apple has manufactured through TSMC, which is based in Taiwan.
Khan said that such supply constraints are expected to continue into next year, particularly impacting iPads and Macs. The situation has been made worse by what the company has repeatedly insisted is "unexpected demand" for its products.
Ternus noted, too, that Apple is still seeing "unprecedented" cost increases for memory, or the ability of Apple devices to store data like apps, photos, and text messages.
Much of that memory storage runs through data centres which have seen a huge boom in demand for space as artificial intelligence (AI) chatbots and platforms, including those developed by OpenAI and Anthropic, have become popular.
As demand for memory has grown, storage prices have gone up for tech companies like Apple.
Cook had earlier this year referred to the sudden increase in data centre costs that Apple was seeing as a "thousand year flood."
It has led to the company raising prices on essentially all of its hardware products by around 20%.`,
    bodyJa: `Apple unsure when more foldable iPhones will be available after selling out
- Published
The new head of Apple says the company is working to get its new foldable iPhones available to more people after the $1,999 smartphone quickly sold out when it was released just over a week ago.
John Ternus, who in September took over the role as Apple's chief executive from Tim Cook, said on Monday that he was "thrilled" at the early reaction to the iPhone Duo.
While the costly phone, which sells for £1,999 in the UK, immediately sold out, some buyers have seen their screens crack.
The phones are still in high demand and Sabhi Kahn, Apple's new chief operating officer, said the technology giant did not know when more Duos would be available.
"At this time, it's really hard to predict when supply and demand will be in balance," Kahn said during a call with financial analysts to discuss Apple's latest financial results.
Apple executives did not mention during the call any issues with the iPhone Duo. But last week, the company said it would replace any phones that were impacted by an issue that caused a "small number" of the new phones to crack along the inside fold.
Nevertheless, Apple said on Monday that over the last year it sold more iPhones globally than it ever has before.
During the three months to 26 September, which did not include sales of the iPhone Duo that went on sale toward the end of October, Apple saw iPhone sales rise 17% to $57bn.
Apple has boasted throughout the year that iPhone sales have been surging, despite the company's warnings that crucial components for the device, along with Mac computers and iPads, were constrained to the point of weighing down sales.
Sales of Mac computers also grew during the quarter by 27%, hitting $10.7bn, another record for Apple.
Overall sales at the company rose by 15% for the year, to $479bn.
However, sales for both the iPad and Apple's wearable products, including its headphones and Watch fell by 10% and 7%, respectively.
Kahn noted during the call that most Apple devices are still seeing supply constraints driven in part by difficulty in getting enough microprocessors with "advanced nodes."
Those components are essentially computer chip technology that allows Apple's devices to operate more quickly, most of which Apple has manufactured through TSMC, which is based in Taiwan.
Khan said that such supply constraints are expected to continue into next year, particularly impacting iPads and Macs. The situation has been made worse by what the company has repeatedly insisted is "unexpected demand" for its products.
Ternus noted, too, that Apple is still seeing "unprecedented" cost increases for memory, or the ability of Apple devices to store data like apps, photos, and text messages.
Much of that memory storage runs through data centres which have seen a huge boom in demand for space as artificial intelligence (AI) chatbots and platforms, including those developed by OpenAI and Anthropic, have become popular.
As demand for memory has grown, storage prices have gone up for tech companies like Apple.
Cook had earlier this year referred to the sudden increase in data centre costs that Apple was seeing as a "thousand year flood."
It has led to the company raising prices on essentially all of its hardware products by around 20%.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c6n8dn457ypko?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-03T00:29:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/3b2b/live/05d33ff0-d71d-11f1-b723-458a2ded4fa2.jpg",
    readTime: 8,
  },
  {
    id: "supreme-court-rejects-doj-s-bid-to-block-f5dc1c23",
    title: "Supreme Court rejects DOJ's bid to block California from counting disputed ballots",
    titleJa: "Supreme Court rejects DOJ's bid to block California from counting disputed ballots",
    summaryJa: "The Department of Justice's request to the Supreme Court in the California case came as it appeals dismissal of a lawsuit over Alaska's Senate election.",
    bodyOriginal: `The Supreme Court, in an order Monday evening, denied the Department of Justice's last-minute request to temporarily block California from counting mail-in ballots from about 20,000 voters who it suggested may not be U.S. citizens.
The one-sentence order came hours after the DOJ sought the injunction, and on the eve of Election Day.
The Supreme Court did not explain its reason for the denial, which had no noted dissents. The order came after Justice Elena Kagan presented the DOJ's request to the full court, which did not seek a response from California officials before issuing the decision.
The swift ruling is yet another courtroom blow to the Trump administration, which is engaged in multiple other legal fights related to the midterm elections.
Those contests will determine which political party holds majorities in the House and Senate. Pollsters and analysts widely predict Democrats will make significant gains.
The DOJ's application to the Supreme Court came three days after the 9th Circuit U.S. Court of Appeals rejected the department's attempt to overturn a federal district court judge's ruling that allowed the California ballots to be counted.
That same day, another federal district judge in a separate case in California barred DOJ from threatening election workers with criminal prosecution for refusing to stop processing ballots or resisting other demands.
During a hearing Monday in that second case, a DOJ lawyer admitted to Judge Trina Thompson that the lists of purported noncitizens on California's voter rolls had a "high error rate," MS NOW reported. But that lawyer also argued the errors are evidence of why election officials need to examine those rolls and make sure that everyone on them is a U.S. citizen.
Solicitor General D. John Sauer, in his application to the Supreme Court on Monday morning, said, "In this case, this Office has been informed that the United States has identified more than 20,000 individuals who appear to be registered to vote in California based on publicly available information at the time that information was received, but who, in the United States' view, are likely not U.S. citizens."
Sauer said "the United States is likely to succeed on the merits of its appeal" of the lower court ruling denying the DOJ's request.
"The district court concluded that the United States lacks Article III standing to bring this suit, but the United States suffers a judicially cognizable 'injury to its sovereignty' from the 'violation of its laws,'" Sauer said in the petition. "Once California commingles the challenged ballots with lawful ones, there is no way to get the challenged ballots back."
The DOJ sued California on Oct. 15 in U.S. District Court in Los Angeles. The complaint sought to prevent state election officials from tabulating mail-in ballots "from likely non-citizens in the upcoming federal election until the voter's citizenship status can be determined."
The DOJ previously gave Los Angeles County officials a thumb drive containing names of voters the department suggested could be noncitizens, who by law are barred from voting in federal elections.
Last Wednesday, Judge David Carter denied the DOJ's request that he order California officials to set aside mail ballots from alleged noncitizens named on a list prepared by the Department of Homeland Security, and not count their votes until their citizenship is confirmed.
"This case is about the right of every American citizen to vote in a free and fair election," Carter said in his ruling.
"Never before in American history has the federal government, on the eve of an election, sought to coerce a state and local government to abandon their own Constitutional elections procedures and bend to the will of the Executive Branch," Carter wrote.
"In bringing this lawsuit, the Executive would have this Court believe that it reigns as a sole sovereign. But California and its people are sovereign, too."
The DOJ then appealed that ruling to the 9th Circuit. A three-judge panel on that court denied the appeal in a 2-1 ruling on Friday
"There is a material risk that granting the United States its requested relief would result in disenfranchisement," said the ruling by the majority, Circuit Judges Mark Bennett and Gabriel Sanchez. Bennett was appointed by President Donald Trump, and Sanchez was appointed by former President Joe Biden.
On Sunday, a federal judge dismissed a DOJ lawsuit that sought to block Alaska election officials from immediately certifying the result of the U.S. Senate election there if incumbent Republican Sen. Dan Sullivan loses that race by a margin that could be attributable to voter confusion about another candidate with his name.
The DOJ is appealing that ruling.`,
    bodyJa: `The Supreme Court, in an order Monday evening, denied the Department of Justice's last-minute request to temporarily block California from counting mail-in ballots from about 20,000 voters who it suggested may not be U.S. citizens.
The one-sentence order came hours after the DOJ sought the injunction, and on the eve of Election Day.
The Supreme Court did not explain its reason for the denial, which had no noted dissents. The order came after Justice Elena Kagan presented the DOJ's request to the full court, which did not seek a response from California officials before issuing the decision.
The swift ruling is yet another courtroom blow to the Trump administration, which is engaged in multiple other legal fights related to the midterm elections.
Those contests will determine which political party holds majorities in the House and Senate. Pollsters and analysts widely predict Democrats will make significant gains.
The DOJ's application to the Supreme Court came three days after the 9th Circuit U.S. Court of Appeals rejected the department's attempt to overturn a federal district court judge's ruling that allowed the California ballots to be counted.
That same day, another federal district judge in a separate case in California barred DOJ from threatening election workers with criminal prosecution for refusing to stop processing ballots or resisting other demands.
During a hearing Monday in that second case, a DOJ lawyer admitted to Judge Trina Thompson that the lists of purported noncitizens on California's voter rolls had a "high error rate," MS NOW reported. But that lawyer also argued the errors are evidence of why election officials need to examine those rolls and make sure that everyone on them is a U.S. citizen.
Solicitor General D. John Sauer, in his application to the Supreme Court on Monday morning, said, "In this case, this Office has been informed that the United States has identified more than 20,000 individuals who appear to be registered to vote in California based on publicly available information at the time that information was received, but who, in the United States' view, are likely not U.S. citizens."
Sauer said "the United States is likely to succeed on the merits of its appeal" of the lower court ruling denying the DOJ's request.
"The district court concluded that the United States lacks Article III standing to bring this suit, but the United States suffers a judicially cognizable 'injury to its sovereignty' from the 'violation of its laws,'" Sauer said in the petition. "Once California commingles the challenged ballots with lawful ones, there is no way to get the challenged ballots back."
The DOJ sued California on Oct. 15 in U.S. District Court in Los Angeles. The complaint sought to prevent state election officials from tabulating mail-in ballots "from likely non-citizens in the upcoming federal election until the voter's citizenship status can be determined."
The DOJ previously gave Los Angeles County officials a thumb drive containing names of voters the department suggested could be noncitizens, who by law are barred from voting in federal elections.
Last Wednesday, Judge David Carter denied the DOJ's request that he order California officials to set aside mail ballots from alleged noncitizens named on a list prepared by the Department of Homeland Security, and not count their votes until their citizenship is confirmed.
"This case is about the right of every American citizen to vote in a free and fair election," Carter said in his ruling.
"Never before in American history has the federal government, on the eve of an election, sought to coerce a state and local government to abandon their own Constitutional elections procedures and bend to the will of the Executive Branch," Carter wrote.
"In bringing this lawsuit, the Executive would have this Court believe that it reigns as a sole sovereign. But California and its people are sovereign, too."
The DOJ then appealed that ruling to the 9th Circuit. A three-judge panel on that court denied the appeal in a 2-1 ruling on Friday
"There is a material risk that granting the United States its requested relief would result in disenfranchisement," said the ruling by the majority, Circuit Judges Mark Bennett and Gabriel Sanchez. Bennett was appointed by President Donald Trump, and Sanchez was appointed by former President Joe Biden.
On Sunday, a federal judge dismissed a DOJ lawsuit that sought to block Alaska election officials from immediately certifying the result of the U.S. Senate election there if incumbent Republican Sen. Dan Sullivan loses that race by a margin that could be attributable to voter confusion about another candidate with his name.
The DOJ is appealing that ruling.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/02/supreme-court-california-mail-ballots-election.html",
    publishedAt: "2026-11-02T23:48:28+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "marvell-and-lumentum-shareholders-unite-41d1bb09",
    title: "Marvell and Lumentum shareholders unite in panning merger deal: ‘It’s a trash offer’",
    titleJa: "Marvell and Lumentum shareholders unite in panning merger deal: ‘It’s a trash offer’",
    summaryJa: "Shares of both companies fell Monday after Marvell said it reached an all-stock agreement to buy Lumentum.",
    bodyOriginal: `Shares of both companies fell Monday after Marvell said it reached an all-stock agreement to buy Lumentum.`,
    bodyJa: `Shares of both companies fell Monday after Marvell said it reached an all-stock agreement to buy Lumentum.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/marvell-and-lumentum-shareholders-unite-in-panning-merger-deal-its-a-trash-offer-53a9f307?mod=mw_rss_topstories",
    publishedAt: "2026-11-02T23:39:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-759206",
    readTime: 2,
  },
  {
    id: "stock-market-after-midterm-elections-wha-1dcf07dd",
    title: "Stock market after midterm elections: What S&P 500 history shows",
    titleJa: "Stock market after midterm elections: What S&P 500 history shows",
    summaryJa: "Midterms historically precede a strong year for the S&amp;P 500. What to know if Democrats win back Congress",
    bodyOriginal: `Markets are sweating it out ahead of the midterm elections, but the event historically heralds strong performance for stocks — regardless of whether it's a red or blue wave, split decision, or status quo in Washington.
The S&P 500 tends to perform well after both midterm and presidential elections. According to a CNBC analysis of S&P 500 returns after elections from 1980 through 2024, the index rose an average of 0.2% after one day and one week, and 1.1% after one month across both presidential and midterm elections.
A year later, the index gained an average of 13.7% after midterms and 13.8% after presidential elections. Returns were positive in 91% of cases. And the S&P 500 was up after all 11 midterms from 1982 through 2022.
Short-term returns were less reliable, particularly after presidential contests, which produced slightly negative average returns after one day and one week.
"There's some anxiousness before these elections," Ryan Detrick, CNBC contributor and chief market strategist at Carson Group, told CNBC. "Once you are through it, it's a big relief and markets tend to do pretty well."
Markets prefer gridlock
Still, the market usually prefers divided government: one party in charge of the White House and the other holding at least one house of Congress.
Across 10 midterm and five presidential elections that left no single party in charge, the S&P 500 rose an average 15% after one year. One-year returns were positive in 14 out of 15 cases. By comparison, the index gained an average of 11.5% over the year after elections that resulted in single-party control.
"If you have a huge red wave or a big blue wave, markets actually kind of don't like that as much because you have too much spending one way and too much power," Detrick said.
Leaving Democrats in control of Congress with a Republican in the White House — a scenario that may emerge from the elections on Tuesday — was also positive. A CNBC analysis found that after the three midterms (1986, 1990 and 2006) when Democrats controlled both houses and a Republican held the presidency, the S&P 500 averaged a 0.5% decline on the reaction day but was up 3.4% a month later and 10.9% after a year.
Granted, elections may be coincident events to factors that matter far more for market performance.
The S&P 500 plunged 22.1% in the year after the 2000 elections due to the dotcom bust, marking the worst post-election performance since 1980. Conversely, the S&P 500's best post-election year was a 38.3% gain after the 2020 elections, when markets mounted a massive comeback from the COVID-induced selloff.
Investors should bear in mind that Federal Reserve policy and the corporate earnings cycle ultimately matter more than elections, according to Société Générale.
Stocks declined in the aftermath of the 2018 midterms, for instance, when Democrats wrested control of the House during President Donald Trump's first term. More importantly, the Fed tightened monetary policy that year, raising interest rates four times, and the S&P 500 ended the year down 6.2%, though the market was up 11.7% a year after the election.
The big swing factor now is AI and whether declines in tech will continue. As long as the AI wave is still moving and the economy keeps growing, "this bull market is probably still alive and well," Detrick says.
But a Democratic sweep of the House and Senate would almost certainly pressure the AI infrastructure buildout and could lead to more retrenchment.
The bond market is also skittish with yields rising globally and a mini debt crisis in France. And the war with Iran could get worse post-election if President Trump follows through on threats of more strikes or Iran escalates.
"Seasonality isn't destiny, and worries around Iran, AI and France won't mysteriously vanish," said Jim Reid, Deutsche Bank's global head of macro and thematic research, in a note.
If history is any guide, we could see a Santa rally and S&P 500 gains after the midterms. But this is still an AI-driven market, with geopolitics, the Fed, and bond market very much in charge.
— CNBC's Chris Hayes contributed reporting.`,
    bodyJa: `Markets are sweating it out ahead of the midterm elections, but the event historically heralds strong performance for stocks — regardless of whether it's a red or blue wave, split decision, or status quo in Washington.
The S&P 500 tends to perform well after both midterm and presidential elections. According to a CNBC analysis of S&P 500 returns after elections from 1980 through 2024, the index rose an average of 0.2% after one day and one week, and 1.1% after one month across both presidential and midterm elections.
A year later, the index gained an average of 13.7% after midterms and 13.8% after presidential elections. Returns were positive in 91% of cases. And the S&P 500 was up after all 11 midterms from 1982 through 2022.
Short-term returns were less reliable, particularly after presidential contests, which produced slightly negative average returns after one day and one week.
"There's some anxiousness before these elections," Ryan Detrick, CNBC contributor and chief market strategist at Carson Group, told CNBC. "Once you are through it, it's a big relief and markets tend to do pretty well."
Markets prefer gridlock
Still, the market usually prefers divided government: one party in charge of the White House and the other holding at least one house of Congress.
Across 10 midterm and five presidential elections that left no single party in charge, the S&P 500 rose an average 15% after one year. One-year returns were positive in 14 out of 15 cases. By comparison, the index gained an average of 11.5% over the year after elections that resulted in single-party control.
"If you have a huge red wave or a big blue wave, markets actually kind of don't like that as much because you have too much spending one way and too much power," Detrick said.
Leaving Democrats in control of Congress with a Republican in the White House — a scenario that may emerge from the elections on Tuesday — was also positive. A CNBC analysis found that after the three midterms (1986, 1990 and 2006) when Democrats controlled both houses and a Republican held the presidency, the S&P 500 averaged a 0.5% decline on the reaction day but was up 3.4% a month later and 10.9% after a year.
Granted, elections may be coincident events to factors that matter far more for market performance.
The S&P 500 plunged 22.1% in the year after the 2000 elections due to the dotcom bust, marking the worst post-election performance since 1980. Conversely, the S&P 500's best post-election year was a 38.3% gain after the 2020 elections, when markets mounted a massive comeback from the COVID-induced selloff.
Investors should bear in mind that Federal Reserve policy and the corporate earnings cycle ultimately matter more than elections, according to Société Générale.
Stocks declined in the aftermath of the 2018 midterms, for instance, when Democrats wrested control of the House during President Donald Trump's first term. More importantly, the Fed tightened monetary policy that year, raising interest rates four times, and the S&P 500 ended the year down 6.2%, though the market was up 11.7% a year after the election.
The big swing factor now is AI and whether declines in tech will continue. As long as the AI wave is still moving and the economy keeps growing, "this bull market is probably still alive and well," Detrick says.
But a Democratic sweep of the House and Senate would almost certainly pressure the AI infrastructure buildout and could lead to more retrenchment.
The bond market is also skittish with yields rising globally and a mini debt crisis in France. And the war with Iran could get worse post-election if President Trump follows through on threats of more strikes or Iran escalates.
"Seasonality isn't destiny, and worries around Iran, AI and France won't mysteriously vanish," said Jim Reid, Deutsche Bank's global head of macro and thematic research, in a note.
If history is any guide, we could see a Santa rally and S&P 500 gains after the midterms. But this is still an AI-driven market, with geopolitics, the Fed, and bond market very much in charge.
— CNBC's Chris Hayes contributed reporting.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/02/stock-market-after-midterm-elections-sp-500-history.html",
    publishedAt: "2026-11-02T23:13:34+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "palantir-reports-booming-u-s-commercial-3f1dcb56",
    title: "Palantir reports booming U.S. commercial revenue growth, topping government for first time",
    titleJa: "Palantir reports booming U.S. commercial revenue growth, topping government for first time",
    summaryJa: "Palantir's commercial revenue jumped 148% to $984 million, surpassing government revenue of $953 million.",
    bodyOriginal: `Palantir beat Wall Street's third-quarter estimates after the bell on Monday, with U.S. commercial revenue topping government for the first time as businesses adopt more of the company's artificial intelligence tools.
Shares dipped about 3% in extended trading.
Here's how the company did compared to LSEG estimates:
- Earnings per share: 44 cents adjusted vs. 41 cents expected
- Revenue: $2.31 billion vs. $2.18 billion expected
Revenue nearly doubled from a year ago and blew past $2 billion for the first time ever, Palantir said. Net income more than doubled to $1.13 billion, or 44 cents per share, from about $476 million, or 18 cents per share.
"I don't believe anyone's had consistent results like this in the history of software AI, ever," CEO Alex Karp told CNBC's Seema Mody in an interview, adding that the business is succeeding without salespeople.
Palantir has long been known for its strength in the government sector, but its commercial segment caught up in Q3.
U.S. commercial revenue jumped 148% to $984 million, surpassing U.S. government revenue of $953 million, which was up 96%. The company's U.S. commercial revenue has more than quintupled over the last two years.
Palantir lifted its guidance, saying it now expects U.S. commercial revenue "in excess of" $3.56 billion for the full year. Last quarter, the company boosted its forecast to $3.42 billion. The company projects about $2.65 billion in revenue for the fourth quarter and about $8.53 billion for full-year 2026.
Karp has openly supported the use of open-weight models and criticized leading AI labs, which he told CNBC earlier this year are forcing businesses to sell their data sovereignty. Karp, on Monday, also reiterated recent calls to nationalize AI labs, calling it the "only realistic way" to manage liability.
In September, Karp joined major tech CEOs at the White House as calls for regulation mounted following claims from AI researchers that the technology has a more than 10% of killing humanity.
"My message to everybody is: Beware of thinking you can delay the future in AI," he told CNBC. "The future is here. The political ramifications of it are here."`,
    bodyJa: `Palantir beat Wall Street's third-quarter estimates after the bell on Monday, with U.S. commercial revenue topping government for the first time as businesses adopt more of the company's artificial intelligence tools.
Shares dipped about 3% in extended trading.
Here's how the company did compared to LSEG estimates:
- Earnings per share: 44 cents adjusted vs. 41 cents expected
- Revenue: $2.31 billion vs. $2.18 billion expected
Revenue nearly doubled from a year ago and blew past $2 billion for the first time ever, Palantir said. Net income more than doubled to $1.13 billion, or 44 cents per share, from about $476 million, or 18 cents per share.
"I don't believe anyone's had consistent results like this in the history of software AI, ever," CEO Alex Karp told CNBC's Seema Mody in an interview, adding that the business is succeeding without salespeople.
Palantir has long been known for its strength in the government sector, but its commercial segment caught up in Q3.
U.S. commercial revenue jumped 148% to $984 million, surpassing U.S. government revenue of $953 million, which was up 96%. The company's U.S. commercial revenue has more than quintupled over the last two years.
Palantir lifted its guidance, saying it now expects U.S. commercial revenue "in excess of" $3.56 billion for the full year. Last quarter, the company boosted its forecast to $3.42 billion. The company projects about $2.65 billion in revenue for the fourth quarter and about $8.53 billion for full-year 2026.
Karp has openly supported the use of open-weight models and criticized leading AI labs, which he told CNBC earlier this year are forcing businesses to sell their data sovereignty. Karp, on Monday, also reiterated recent calls to nationalize AI labs, calling it the "only realistic way" to manage liability.
In September, Karp joined major tech CEOs at the White House as calls for regulation mounted following claims from AI researchers that the technology has a more than 10% of killing humanity.
"My message to everybody is: Beware of thinking you can delay the future in AI," he told CNBC. "The future is here. The political ramifications of it are here."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/02/palantir-pltr-earnings-q3-2026.html",
    publishedAt: "2026-11-02T22:53:20+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "trump-focuses-on-reflecting-pool-in-fina-b67c8a74",
    title: "Trump focuses on Reflecting Pool in final public speech before midterms",
    titleJa: "Trump focuses on Reflecting Pool in final public speech before midterms",
    summaryJa: "Trump seemed to acknowledge that Democrats had an advantage heading into Election Day. \"But we gave this a very strong shot,\" he said.",
    bodyOriginal: `President Donald Trump began his final scheduled in-person speech before Tuesday's Election Day with a lengthy disquisition about his efforts to renovate the Lincoln Memorial Reflecting Pool and other sites in Washington.
"Today I'm thrilled to announce the official opening of the Lincoln Memorial Reflecting Pool," Trump said Monday afternoon in front of the water feature, which was fenced off for months amid a problem-plagued renovation the president had ordered.
The speech, which lasted nearly an hour, was expected to serve as Trump's "closing argument" on the midterms before millions of voters head to the polls to determine which party will control the House and Senate in the next Congress.
But Trump kicked off his remarks with more than 20 minutes of commentary that focused largely on the Reflecting Pool, along with his administration's work on refurbishing other Washington-area monuments and cracking down on crime in the nation's capital.
"The pool is now better and more beautiful than it's ever been before, and we're very proud of it," Trump said, before repeating unfounded claims that vandals were responsible for damaging the pool and delaying repairs.
U.S. Attorney for the District of Columbia Jeanine Pirro told a court July 31 that the damage was caused by a contractor's botched installation. Trump lashed out at Pirro over the admission and has continued to claim vandals were to blame.
Trump's first explicit reference to the midterms came around the 23-minute mark.
"As you know, this is the last day before the midterm elections, the most important midterm, I believe, in our lifetime," Trump said.
"The Democrat Party has nominated the most extreme and dangerous slate of candidates in American history," he said.
He touted his administration's record and lashed out at some Democratic candidates by name, including Michigan Senate nominee Abdul El-Sayed. He also repeated his controversial claim that if Republicans win, "everybody is going to get $5,000."
"We have to keep our Congress strong, free," Trump said. "America is ready to go. They're ready to vote. I hope they're ready to do the right thing."
But Trump, as he has done in other recent remarks, seemed to acknowledge that Democrats had an advantage — at least when looking to historical trends that show the president's party tends to underperform in midterm elections.
"For some reason, the sitting president doesn't win the midterms. But we gave this a very strong shot," he said.
Later in the speech, Trump continued discussing the pool, as well as his push to erect a massive triumphal arch in Washington and his plans to build a promenade along the Potomac River.
He also said the government planned to build a "National Garden of American Heroes," comprising "250 to 500 great American heroes in statue form." And he talked about ongoing efforts to renovate a public golf course in Washington that is subject to legal challenges.`,
    bodyJa: `President Donald Trump began his final scheduled in-person speech before Tuesday's Election Day with a lengthy disquisition about his efforts to renovate the Lincoln Memorial Reflecting Pool and other sites in Washington.
"Today I'm thrilled to announce the official opening of the Lincoln Memorial Reflecting Pool," Trump said Monday afternoon in front of the water feature, which was fenced off for months amid a problem-plagued renovation the president had ordered.
The speech, which lasted nearly an hour, was expected to serve as Trump's "closing argument" on the midterms before millions of voters head to the polls to determine which party will control the House and Senate in the next Congress.
But Trump kicked off his remarks with more than 20 minutes of commentary that focused largely on the Reflecting Pool, along with his administration's work on refurbishing other Washington-area monuments and cracking down on crime in the nation's capital.
"The pool is now better and more beautiful than it's ever been before, and we're very proud of it," Trump said, before repeating unfounded claims that vandals were responsible for damaging the pool and delaying repairs.
U.S. Attorney for the District of Columbia Jeanine Pirro told a court July 31 that the damage was caused by a contractor's botched installation. Trump lashed out at Pirro over the admission and has continued to claim vandals were to blame.
Trump's first explicit reference to the midterms came around the 23-minute mark.
"As you know, this is the last day before the midterm elections, the most important midterm, I believe, in our lifetime," Trump said.
"The Democrat Party has nominated the most extreme and dangerous slate of candidates in American history," he said.
He touted his administration's record and lashed out at some Democratic candidates by name, including Michigan Senate nominee Abdul El-Sayed. He also repeated his controversial claim that if Republicans win, "everybody is going to get $5,000."
"We have to keep our Congress strong, free," Trump said. "America is ready to go. They're ready to vote. I hope they're ready to do the right thing."
But Trump, as he has done in other recent remarks, seemed to acknowledge that Democrats had an advantage — at least when looking to historical trends that show the president's party tends to underperform in midterm elections.
"For some reason, the sitting president doesn't win the midterms. But we gave this a very strong shot," he said.
Later in the speech, Trump continued discussing the pool, as well as his push to erect a massive triumphal arch in Washington and his plans to build a promenade along the Potomac River.
He also said the government planned to build a "National Garden of American Heroes," comprising "250 to 500 great American heroes in statue form." And he talked about ongoing efforts to renovate a public golf course in Washington that is subject to legal challenges.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/02/trump-midterm-election-speech-reflecting-pool.html",
    publishedAt: "2026-11-02T21:15:13+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 7,
  },
  {
    id: "wall-street-s-fear-index-is-doing-someth-27a9fc84",
    title: "Wall Street's Fear Index is doing something strange. Here's what it means for stocks",
    titleJa: "Wall Street's Fear Index is doing something strange. Here's what it means for stocks",
    summaryJa: "Stocks wrapped their worst week since June on Friday, but a group of the most sophisticated options analysts agree the reaction in the options market was oddly calm.While the Cboe Volatility Index (VIX), often referred to as a so-called fear index, did touch its highest intraday level since April on Friday, it quickly retreated and closed at 19.4. Its rollover came even as the S&P 500 finished the day down nearly 2%. For that size of a decline in stocks, the 2.2-point move in VIX was \"relatively",
    bodyOriginal: `Stocks wrapped their worst week since June on Friday, but a group of the most sophisticated options analysts agree the reaction in the options market was oddly calm.
While the Cboe Volatility Index (VIX), often referred to as a so-called fear index, did touch its highest intraday level since April on Friday, it quickly retreated and closed at 19.4. Its rollover came even as the S&P 500 finished the day down nearly 2%. For that size of a decline in stocks, the 2.2-point move in VIX was "relatively muted," according to SpotGamma's Brent Kochuba, whose analysis suggests VIX should have jumped closer to 2.6 points, based on a study of 126 selloffs since 2018.
Even in the Nasdaq 100 Index, where implied volatility increased for most options contracts, there were key exceptions. Prices on put contracts that are between 20% and 50% out-of-the-money were higher on a volatility basis after the sell-off on Oct. 16, according to data shared by Nasdaq's Kevin Davitt.
So not only did traders not pile into S&P 500 Index options on Friday, they were also especially choosy with which Nasdaq hedges they bought. For example, in the Nasdaq, puts were more expensive two weeks ago, according to Nations Indexes data. And out-of-the-money S&P 500 Index puts "just aren't being chased-into at this moment," writes Nomura managing director Charlie McElligott, indicating investor calm in the face of falling stocks.
"Index options skew hasn't been particularly reactive to the few days of spot equities selloff this week, and even where it has, it's partially a function of call vol getting mushed," McElligot said in a note to clients on Friday.
One explanation for the lack of hedging could be that asset managers are quickly selling stocks instead of using options to protect those stocks from further decline.
One popular chart making the rounds over the weekend came from Morgan Stanley's prime brokerage. According to the firm's data on long-short active managers, total global gross equity exposure is down 8% from its most recent peak, the biggest drawdown in at least ten years.
"Long/short has experienced a massive de-levering event," said Zed Francis, CIO of Chicago-based Convexitas. "Buy the shorts, sell the longs. If you were closer to cash than you were before, no need to hedge. I believe this is the main reason implied volatility has remained quiet during an increased-stress month."`,
    bodyJa: `Stocks wrapped their worst week since June on Friday, but a group of the most sophisticated options analysts agree the reaction in the options market was oddly calm.
While the Cboe Volatility Index (VIX), often referred to as a so-called fear index, did touch its highest intraday level since April on Friday, it quickly retreated and closed at 19.4. Its rollover came even as the S&P 500 finished the day down nearly 2%. For that size of a decline in stocks, the 2.2-point move in VIX was "relatively muted," according to SpotGamma's Brent Kochuba, whose analysis suggests VIX should have jumped closer to 2.6 points, based on a study of 126 selloffs since 2018.
Even in the Nasdaq 100 Index, where implied volatility increased for most options contracts, there were key exceptions. Prices on put contracts that are between 20% and 50% out-of-the-money were higher on a volatility basis after the sell-off on Oct. 16, according to data shared by Nasdaq's Kevin Davitt.
So not only did traders not pile into S&P 500 Index options on Friday, they were also especially choosy with which Nasdaq hedges they bought. For example, in the Nasdaq, puts were more expensive two weeks ago, according to Nations Indexes data. And out-of-the-money S&P 500 Index puts "just aren't being chased-into at this moment," writes Nomura managing director Charlie McElligott, indicating investor calm in the face of falling stocks.
"Index options skew hasn't been particularly reactive to the few days of spot equities selloff this week, and even where it has, it's partially a function of call vol getting mushed," McElligot said in a note to clients on Friday.
One explanation for the lack of hedging could be that asset managers are quickly selling stocks instead of using options to protect those stocks from further decline.
One popular chart making the rounds over the weekend came from Morgan Stanley's prime brokerage. According to the firm's data on long-short active managers, total global gross equity exposure is down 8% from its most recent peak, the biggest drawdown in at least ten years.
"Long/short has experienced a massive de-levering event," said Zed Francis, CIO of Chicago-based Convexitas. "Buy the shorts, sell the longs. If you were closer to cash than you were before, no need to hedge. I believe this is the main reason implied volatility has remained quiet during an increased-stress month."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/02/wall-streets-fear-index-is-doing-something-strange-heres-what-it-means-for-stocks.html",
    publishedAt: "2026-11-02T15:30:41+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 6,
  },
  {
    id: "crude-oil-dives-to-session-low-on-iran-p-1866e0e5",
    title: "Crude oil dives to session low on Iran peace talk hopes ahead of midterms",
    titleJa: "Crude oil dives to session low on Iran peace talk hopes ahead of midterms",
    summaryJa: "Oil fell Monday, amid news that both the U.S. and Iran are pursuing diplomacy amid ongoing Mideast tensions",
    bodyOriginal: `Crude oil prices fell sharply Monday as senior U.S. and Iranian officials signal they are open to a diplomatic solution to the conflict that has disrupted energy markets for eight months.
Brent crude futures, the international benchmark, fell 6.4% to $106.20 a barrel as of 9:50 a.m. ET. U.S. West Texas Intermediate declined 6.5% to $97.35 per barrel.
U.S. Secretary of State Marco Rubio said President Donald Trump prefers not to use military force against Iran and would like to resolve the conflict diplomatically.
Trump has previously said that he will not attack Iran before the U.S. midterms. But the oil market had priced in the risk of a major military escalation after the elections.
The president "hasn't made a decision," Rubio told reporters over the weekend.
"What the president expresses to you is incredible confidence that if we needed to do something militarily, we would have the ability to do it," the secretary of state said. "But we would prefer to do it peacefully."
Meanwhile, Iran's Foreign Minister Abbas Araghchi said an agreement with the U.S. is possible if Washington "demonstrates goodwill" and is "truly seeking a peaceful solution," according to the state-owned Islamic Republic News Agency.
Araghchi said mediators are discussing the proposal Iran made during the United Nations General Assembly in September. Tehran expects the U.S. to lift sanctions, reduce its military presence in the region to previous levels and lift the blockade, the foreign minister said.
But Iranian Supreme Leader Mojtaba Khamenei on Saturday called for Tehran's armed forces to meet "any level or type of threat" with "an immediate, impactful, and geographically unrestricted response."
Concerns over the Middle East and Ukraine conflicts will likely linger in the near term.
"Attacks on ships and refineries in the Middle East and on civilians in Ukraine continue, doing little to inspire confidence in the prospects for lasting ceasefires in the foreseeable future," said Tamas Varga, analyst at PVM Oil Associates.
"Nonetheless, hope springs eternal," Varga added.
—CNBC's Lim Hui Jie contributed to this report.`,
    bodyJa: `Crude oil prices fell sharply Monday as senior U.S. and Iranian officials signal they are open to a diplomatic solution to the conflict that has disrupted energy markets for eight months.
Brent crude futures, the international benchmark, fell 6.4% to $106.20 a barrel as of 9:50 a.m. ET. U.S. West Texas Intermediate declined 6.5% to $97.35 per barrel.
U.S. Secretary of State Marco Rubio said President Donald Trump prefers not to use military force against Iran and would like to resolve the conflict diplomatically.
Trump has previously said that he will not attack Iran before the U.S. midterms. But the oil market had priced in the risk of a major military escalation after the elections.
The president "hasn't made a decision," Rubio told reporters over the weekend.
"What the president expresses to you is incredible confidence that if we needed to do something militarily, we would have the ability to do it," the secretary of state said. "But we would prefer to do it peacefully."
Meanwhile, Iran's Foreign Minister Abbas Araghchi said an agreement with the U.S. is possible if Washington "demonstrates goodwill" and is "truly seeking a peaceful solution," according to the state-owned Islamic Republic News Agency.
Araghchi said mediators are discussing the proposal Iran made during the United Nations General Assembly in September. Tehran expects the U.S. to lift sanctions, reduce its military presence in the region to previous levels and lift the blockade, the foreign minister said.
But Iranian Supreme Leader Mojtaba Khamenei on Saturday called for Tehran's armed forces to meet "any level or type of threat" with "an immediate, impactful, and geographically unrestricted response."
Concerns over the Middle East and Ukraine conflicts will likely linger in the near term.
"Attacks on ships and refineries in the Middle East and on civilians in Ukraine continue, doing little to inspire confidence in the prospects for lasting ceasefires in the foreseeable future," said Tamas Varga, analyst at PVM Oil Associates.
"Nonetheless, hope springs eternal," Varga added.
—CNBC's Lim Hui Jie contributed to this report.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/02/oil-prices-fall-as-iran-us-pursue-diplomacy.html",
    publishedAt: "2026-11-02T15:29:50+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 5,
  },
  {
    id: "anthropic-reports-17-billion-in-q3-reven-ef14e7af",
    title: "Anthropic reports $17 billion in Q3 revenue, purchase commitments of $895.4 billion in revised S-1",
    titleJa: "Anthropic reports $17 billion in Q3 revenue, purchase commitments of $895.4 billion in revised S-1",
    summaryJa: "Anthropic unveiled its S-1 prospectus last week, but the initial filing only included the company's financials through the first half of the year.",
    bodyOriginal: `Anthropic reported updated financials as part of an amended Form S-1 filing with the Securities and Exchange Commission on Monday, giving investors a more comprehensive look into the state of its business.
The artificial intelligence company said it generated $33.24 billion in revenue for the nine months ended Sept. 30, up roughly 1,200% from the same period last year. It reported a $104 billion net loss during the period, though most of that was due to the change in fair value of convertible notes and derivative liabilities. Anthropic lost $25.1 billion over the same stretch in 2025.
Anthropic unveiled its highly anticipated prospectus last week, bringing the company one step closer to a potentially historic IPO. The initial filing only included the company's financials through the first half of the year.
During its third quarter, Anthropic generated roughly $17 billion in revenue. The company reported a net loss of $23.29 billion for the period.
As the five-year-old company prepares to kick off its road show, it will have to reckon with growing market jitters around the AI buildout. Wall Street has been worried that rising interest rates will make debt unaffordable for many data center developers and neoclouds, and quarterly reports from Microsoft, Google and Amazon last week added fuel to those concerns.
The hyperscalers' aggressive AI spending is eating into their cash flows, causing some investors to worry that compute capacity may not come online quickly enough to meet Anthropic's demands. Anthropic gets much of its capacity from Amazon, Google and SpaceX, but it also relies on neoclouds for some compute as it races to expand as quickly as possible.
In the amended S-1, Anthropic said it has entered into purchase commitments and lease agreements with an aggregate committed spend of about $895.4 billion, "substantially all of which is related to compute and infrastructure."
Anthropic said its compute and infrastructure expenses increased by $14.4 billion for the nine months ended Sept. 30, up 329% compared to the same period last year.
"As our compute and infrastructure capacity grows, the associated compute and infrastructure expenses have increased," Anthropic said in the filing.
The company's CEO Dario Amodei co-founded Anthropic alongside a handful of other researchers who defected from OpenAI, now its chief rival. OpenAI confidentially filed its prospectus with the SEC in June, but its executives have signaled that it's aiming for a 2027 debut.
Anthropic has worked to position itself as more safety-conscious than its competitors, and its S-1 includes more than 90 pages of risk factors. The company highlights risks including potential political headwinds, its complex infrastructure needs as well as the difficulties that can come from balancing safety and commercial objectives.
This is breaking news. Please refresh for updates.`,
    bodyJa: `Anthropic reported updated financials as part of an amended Form S-1 filing with the Securities and Exchange Commission on Monday, giving investors a more comprehensive look into the state of its business.
The artificial intelligence company said it generated $33.24 billion in revenue for the nine months ended Sept. 30, up roughly 1,200% from the same period last year. It reported a $104 billion net loss during the period, though most of that was due to the change in fair value of convertible notes and derivative liabilities. Anthropic lost $25.1 billion over the same stretch in 2025.
Anthropic unveiled its highly anticipated prospectus last week, bringing the company one step closer to a potentially historic IPO. The initial filing only included the company's financials through the first half of the year.
During its third quarter, Anthropic generated roughly $17 billion in revenue. The company reported a net loss of $23.29 billion for the period.
As the five-year-old company prepares to kick off its road show, it will have to reckon with growing market jitters around the AI buildout. Wall Street has been worried that rising interest rates will make debt unaffordable for many data center developers and neoclouds, and quarterly reports from Microsoft, Google and Amazon last week added fuel to those concerns.
The hyperscalers' aggressive AI spending is eating into their cash flows, causing some investors to worry that compute capacity may not come online quickly enough to meet Anthropic's demands. Anthropic gets much of its capacity from Amazon, Google and SpaceX, but it also relies on neoclouds for some compute as it races to expand as quickly as possible.
In the amended S-1, Anthropic said it has entered into purchase commitments and lease agreements with an aggregate committed spend of about $895.4 billion, "substantially all of which is related to compute and infrastructure."
Anthropic said its compute and infrastructure expenses increased by $14.4 billion for the nine months ended Sept. 30, up 329% compared to the same period last year.
"As our compute and infrastructure capacity grows, the associated compute and infrastructure expenses have increased," Anthropic said in the filing.
The company's CEO Dario Amodei co-founded Anthropic alongside a handful of other researchers who defected from OpenAI, now its chief rival. OpenAI confidentially filed its prospectus with the SEC in June, but its executives have signaled that it's aiming for a 2027 debut.
Anthropic has worked to position itself as more safety-conscious than its competitors, and its S-1 includes more than 90 pages of risk factors. The company highlights risks including potential political headwinds, its complex infrastructure needs as well as the difficulties that can come from balancing safety and commercial objectives.
This is breaking news. Please refresh for updates.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/02/anthropic-ant-s-1-quarter-financials.html",
    publishedAt: "2026-11-02T15:23:34+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 7,
  },
  {
    id: "shop-freezers-in-seven-european-countrie-ab6109d9",
    title: "Shop freezers in seven European countries hit by cyber-attack",
    titleJa: "Shop freezers in seven European countries hit by cyber-attack",
    summaryJa: "The temperature of freezers in several shops across Europe reportedly rose to as high as 50C.",
    bodyOriginal: `Shop freezers in seven European countries hit by cyber-attack
- Published
Dozens of supermarkets across seven European countries have been hit by a cyber-attack affecting their refrigerators and freezers.
Around 40 Delhaize supermarkets in Belgium and Luxembourg were affected, while a smaller number of shops were hit in Sweden, Ireland, the Netherlands, Estonia and Finland.
Sabcobel, a Belgian company that manufactures some of the affected refrigerators, said the units' evaporators were switched to defrost mode, causing them to warm up, in what is believed to be the same method used in last month's incident that hit hundreds of French supermarkets.
Millions of euros worth of food had to be thrown away in October, local media reported at the time.
Stephan Moelans, the CEO of Sabcobel, which operates Delhaize's systems, on Monday told the Belga news agency that the incident was a cyber-attack and that the company had been "working all night and morning to disconnect the affected units from the network".
He said since the French attack in early October, the company had been working to "protect our customers fridges against this vulnerability" but that the units needed physical modifications, not just software updates.
Most supermarkets across Europe are linked to the internet, and maintenance and troubleshooting can be done remotely.
"The simplest solution is to manage the fridges over a secure internet connection. Most of our customers switched to that after the attack in France," Moelans added.
The temperature of freezers in several shops across Europe reportedly rose to as high as 50C (122F).
It is unclear who is behind the latest apparent attack.
In the US, authorities are investigating what caused refrigeration malfunctions at a number of American military bases in August and working together with French officials to examine whether the incidents could be linked.
Both Belgium and Sweden's national cyber-security agencies said they were monitoring the incident.
The UK's National Cyber Security Centre said it was working with international partners and industry to "fully understand details of an incident". No incidents have been reported in the UK.
In Flanders, northern Belgium, a Delhaize branch in Hoeilaart told news website Het Laatste Nieuws it had lost €100,000 (£83,500) worth of produce.
The manager said that estimate did not even take into account further losses that would result from closing the shop.
Carrefour, a French-owned supermarket, said the incident had only affected 15 of its Belgian stores, adding that measures had been taken immediately to ensure all shops remained open.
A spokesperson for Colruyt Group, which operates Spar stores in Belgium under a franchise system, told Reuters news agency five shops had their fridge systems attacked.
Sweden's budget furniture retailer Ikea said refrigeration systems of its store in the western Belgian city of Mons were affected, with a spokesman quoted by Reuters as saying "we cannot rule out that additional locations may be affected".
In Sweden, several ICA and Coop shops were hit.
A spokesperson for ICA confirmed the incident had affected a "small number of ICA stores operating outside ICA's central network".
"ICA is currently supporting the affected stores in managing the situation," they said.
One of the ICA branches located in Sjöbo, southern Sweden, wrote on social media: "Our refrigerators and freezers have been hacked overnight and they have set the temperature to 50 degrees."
The store was closed earlier but has now reopened to customers.
Seven out of the 800 Coop stores in Sweden were also affected but the "situation is currently contained and under control", the company told the BBC.
In neighbouring Finland, refrigerator malfunctions were detected in some K-stores.
The owner of the supermarket chain Kesko was quoted by Finland's Helsingin Sanomat newspaper as saying its security experts were investigating what caused the problem.
The attack is also affecting shops in Ireland, the Netherlands and Estonia.
In Ireland, it impacted 13 SuperValu supermarkets. A spokesman for the owner of the chain, Musgrave Group, confirmed to The Irish Times that a "cyber incident" affected its refrigeration systems, but added that the impact was limited to a "specific model" of refrigerator.
A spokesperson for Danish manufacturer Danfoss told Dutch public radio channel NOS that the freezing and cooling systems of at least 17 companies in the Netherlands were attacked overnight, affecting butcher shops and small neighbourhood stores.
A Selver supermarket in Estonia was also affected and there are reports of other affected companies in the country, according to ERR.
Additional reporting by Shiona McCallum
Have you been affected by the issues raised in this story? Click here or use the form below.
Get in touch
Are you affected by the issues raised in this story?`,
    bodyJa: `Shop freezers in seven European countries hit by cyber-attack
- Published
Dozens of supermarkets across seven European countries have been hit by a cyber-attack affecting their refrigerators and freezers.
Around 40 Delhaize supermarkets in Belgium and Luxembourg were affected, while a smaller number of shops were hit in Sweden, Ireland, the Netherlands, Estonia and Finland.
Sabcobel, a Belgian company that manufactures some of the affected refrigerators, said the units' evaporators were switched to defrost mode, causing them to warm up, in what is believed to be the same method used in last month's incident that hit hundreds of French supermarkets.
Millions of euros worth of food had to be thrown away in October, local media reported at the time.
Stephan Moelans, the CEO of Sabcobel, which operates Delhaize's systems, on Monday told the Belga news agency that the incident was a cyber-attack and that the company had been "working all night and morning to disconnect the affected units from the network".
He said since the French attack in early October, the company had been working to "protect our customers fridges against this vulnerability" but that the units needed physical modifications, not just software updates.
Most supermarkets across Europe are linked to the internet, and maintenance and troubleshooting can be done remotely.
"The simplest solution is to manage the fridges over a secure internet connection. Most of our customers switched to that after the attack in France," Moelans added.
The temperature of freezers in several shops across Europe reportedly rose to as high as 50C (122F).
It is unclear who is behind the latest apparent attack.
In the US, authorities are investigating what caused refrigeration malfunctions at a number of American military bases in August and working together with French officials to examine whether the incidents could be linked.
Both Belgium and Sweden's national cyber-security agencies said they were monitoring the incident.
The UK's National Cyber Security Centre said it was working with international partners and industry to "fully understand details of an incident". No incidents have been reported in the UK.
In Flanders, northern Belgium, a Delhaize branch in Hoeilaart told news website Het Laatste Nieuws it had lost €100,000 (£83,500) worth of produce.
The manager said that estimate did not even take into account further losses that would result from closing the shop.
Carrefour, a French-owned supermarket, said the incident had only affected 15 of its Belgian stores, adding that measures had been taken immediately to ensure all shops remained open.
A spokesperson for Colruyt Group, which operates Spar stores in Belgium under a franchise system, told Reuters news agency five shops had their fridge systems attacked.
Sweden's budget furniture retailer Ikea said refrigeration systems of its store in the western Belgian city of Mons were affected, with a spokesman quoted by Reuters as saying "we cannot rule out that additional locations may be affected".
In Sweden, several ICA and Coop shops were hit.
A spokesperson for ICA confirmed the incident had affected a "small number of ICA stores operating outside ICA's central network".
"ICA is currently supporting the affected stores in managing the situation," they said.
One of the ICA branches located in Sjöbo, southern Sweden, wrote on social media: "Our refrigerators and freezers have been hacked overnight and they have set the temperature to 50 degrees."
The store was closed earlier but has now reopened to customers.
Seven out of the 800 Coop stores in Sweden were also affected but the "situation is currently contained and under control", the company told the BBC.
In neighbouring Finland, refrigerator malfunctions were detected in some K-stores.
The owner of the supermarket chain Kesko was quoted by Finland's Helsingin Sanomat newspaper as saying its security experts were investigating what caused the problem.
The attack is also affecting shops in Ireland, the Netherlands and Estonia.
In Ireland, it impacted 13 SuperValu supermarkets. A spokesman for the owner of the chain, Musgrave Group, confirmed to The Irish Times that a "cyber incident" affected its refrigeration systems, but added that the impact was limited to a "specific model" of refrigerator.
A spokesperson for Danish manufacturer Danfoss told Dutch public radio channel NOS that the freezing and cooling systems of at least 17 companies in the Netherlands were attacked overnight, affecting butcher shops and small neighbourhood stores.
A Selver supermarket in Estonia was also affected and there are reports of other affected companies in the country, according to ERR.
Additional reporting by Shiona McCallum
Have you been affected by the issues raised in this story? Click here or use the form below.
Get in touch
Are you affected by the issues raised in this story?`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cq1kd1nee80eo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-02T15:12:22+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/31c7/live/152ec730-d6c3-11f1-93e1-3b657b665bcf.jpg",
    readTime: 10,
  },
  {
    id: "marvell-to-buy-lumentum-in-all-stock-dea-67db38a1",
    title: "Marvell to buy Lumentum in all-stock deal, a massive bet on AI connectivity",
    titleJa: "Marvell to buy Lumentum in all-stock deal, a massive bet on AI connectivity",
    summaryJa: "Marvell Technology on Monday said it will buy optical components maker Lumentum to address growing connectivity demands from the artificial intelligence infrastructure buildout.\"AI infrastructure is undergoing a fundamental architectural shift toward optical connectivity, creating an opportunity that comes along once in a generation,\" said Marvell Chairman and CEO Matt Murphy in a release. \"The companies that move first and help define this transition will set the standard for decades to come.\"",
    bodyOriginal: `Marvell Technology on Monday said it will buy optical components maker Lumentum to address growing connectivity demands from the artificial intelligence infrastructure buildout.
"AI infrastructure is undergoing a fundamental architectural shift toward optical connectivity, creating an opportunity that comes along once in a generation," said Marvell Chairman and CEO Matt Murphy in a release. "The companies that move first and help define this transition will set the standard for decades to come."
Since the tie-up is a fixed ratio deal with no cash, the value will depend on the price of Marvell shares. The company said the transaction has an implied enterprise value of $115 billion for Lumentum, in a release.
Through the acquisition, Marvell said it can combine electrical and optical technologies to meet accelerating and shifting AI connectivity demands across regions and systems. Companies are increasingly relying on optical connections to piece together chips used to run and train large language models.
Lumentum shareholders will receive 4.5 Marvell shares for each Lumentum share under the agreement. The deal is expected to close during the first half of 2028.
Marvell's takeover marks one of the most significant bets on AI in 2026 and comes despite recent concerns over the long-term sustainability of infrastructure spending.
This isn't the company's first bet on AI growth. This year, the company closed a multibillion-dollar deal for Celestial AI, a startup focused on optical interconnectivity technology.
Marvell has seen its market value more than triple over the last three years, buoyed by unrelenting AI enthusiasm. Lumentum's stock has more than doubled in 2026 alone.
Marvell shares slumped 3%, while Lumentum's stock declined about 4% before the bell.`,
    bodyJa: `Marvell Technology on Monday said it will buy optical components maker Lumentum to address growing connectivity demands from the artificial intelligence infrastructure buildout.
"AI infrastructure is undergoing a fundamental architectural shift toward optical connectivity, creating an opportunity that comes along once in a generation," said Marvell Chairman and CEO Matt Murphy in a release. "The companies that move first and help define this transition will set the standard for decades to come."
Since the tie-up is a fixed ratio deal with no cash, the value will depend on the price of Marvell shares. The company said the transaction has an implied enterprise value of $115 billion for Lumentum, in a release.
Through the acquisition, Marvell said it can combine electrical and optical technologies to meet accelerating and shifting AI connectivity demands across regions and systems. Companies are increasingly relying on optical connections to piece together chips used to run and train large language models.
Lumentum shareholders will receive 4.5 Marvell shares for each Lumentum share under the agreement. The deal is expected to close during the first half of 2028.
Marvell's takeover marks one of the most significant bets on AI in 2026 and comes despite recent concerns over the long-term sustainability of infrastructure spending.
This isn't the company's first bet on AI growth. This year, the company closed a multibillion-dollar deal for Celestial AI, a startup focused on optical interconnectivity technology.
Marvell has seen its market value more than triple over the last three years, buoyed by unrelenting AI enthusiasm. Lumentum's stock has more than doubled in 2026 alone.
Marvell shares slumped 3%, while Lumentum's stock declined about 4% before the bell.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/02/marvell-lumentum-ai-deal.html",
    publishedAt: "2026-11-02T14:23:40+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "poundland-s-former-owner-offers-to-inves-9a8820b6",
    title: "Poundland's former owner offers to invest as minister prepares to meet board",
    titleJa: "Poundland's former owner offers to invest as minister prepares to meet board",
    summaryJa: "Wolverhampton's Steve Smith says he attempted to contact Gordon Brothers but did not get a reply.",
    bodyOriginal: `Poundland's former owner offers to invest in firm
- Published
Poundland's former owner has said he would invest in the firm as a government minister said she would meet the firm's board.
Steve Smith, who left the Walsall-based business in 2006, said he had attempted to contact owners Gordon Brothers having been "really surprised" to learn about them filing for administration when sales were up 11% on last year.
The BBC understands that Business Minister Kate Dearden will meet with senior Poundland executives later this week to discuss the company's threatened insolvency.
US-based Gordon Brothers said it was evaluating interest for the whole business and formal and indicative offers for significant viable parts of it.
Gordon Brothers, who bought the firm from Polish retail group Pepco last year for £1, has stopped funding the business and rejected a takeover offer from Irish firm Martin Property Group (MPG).
The retailer has given the business until Thursday to find a rescue deal, putting up to 12,000 staff at risk.
It's understood the meeting with Deardon will be predominantly a "fact finding" meeting with government sources conceding there is limited scope for the government to intervene in a commercial transaction albeit one that puts over 10,000 jobs and hundreds of stores at risk.
The meeting was first reported by Sky News.
There is no current meeting planned between the government and executives from current owners, US private equity group Gordon Brothers.
Concerns have been raised that Gordon Brothers have declined an offer from another buyer to keep Poundland afloat in order to ensure repayment of £30 million loan it inherited after buying the company for £1.
More on Poundland
'Poundland closure would leave a void in our town'
- Published2 days ago
How Poundland grew from a market stall to a high street giant
- Published3 days ago
Poundland staff protest after chain approach administrators
- Published3 days ago
Prime Minister Andy Burnham has said the government was "ready to support" staff as he also called for answers over why an offer to buy the business had been rejected.
Smith, from Wolverhampton and who set up the firm in 1990 with a store in Burton-upon-Trent, Staffordshire, said he contacted the owners over the last three months but had no reply. He had thought that was good news as he assumed the firm must have had offers on the table.
"And maybe I was a bit too late, but I'd certainly... with talking to the staff and how Poundland's performing at the moment, I'd certainly, if there's an opportunity, I definitely want to put some money back in there."
He said he was still in touch with staff there at levels within the business and "even last week" sales were 11.2 % upon last year.
"Although Poundland made a loss last year, they're going to make a good profit this year, so it's just crazy."
He warned that the two or three thousand suppliers to the firm only worked for Poundland so they would be directly affected by its collapse.
"This is not just about 12, 000 jobs. I'm estimating more like 20 or 30,000 jobs," he added.
The company has 600 stores in the UK and Ireland, and Smith said it had between four and five million customers a week, so with Poundland not being present on high streets would "cause a lot of other retailers to fall as well".
Liam Byrne, chair of the Business, Innovation, Science and Trade Committee and Labour MP for Birmingham Hodge Hill and Solihull North, said he felt the company could be saved and "the whole deal stinks to high heaven right now".
"Because I think the issue that we've got is, you've got an owner that could well be trying to cut and run, to sell a business that is in fact a going concern in order to maximize their own profits and put in jeopardy 12,000 British jobs on the high street."
'Get on the case now'
"Our message today to government and to ministers is, do not leave this to the last minute, which is Thursday... please get on the case now to get everybody around the table to maximize every option to save as much of the business as possible," he added.
In a statement, the board of Poundland Limited said it had been "working on a formal sale process for Poundland" and despite "enormous efforts it had not been possible to identify an acceptable offer for the business as a whole".
"We recognise any sale process creates uncertainty and particularly when set against a challenging UK economic environment."
Gordon Brothers said: "While Martin Property Group had been identified as the preferred bidder by Poundland's management team, attention must now turn to other active bids."
The interest, formal and indicative offers were being evaluated "with a view to minimising uncertainty for Poundland's people and all relevant stakeholders."
Get in touch
Tell us which stories we should cover in Wolverhampton
Follow BBC Wolverhampton & Black Country on BBC Sounds, Facebook, external, X, external and Instagram, external.
Related internet links
- Published3 days ago
- Published13 October
- Published21 November 2025`,
    bodyJa: `Poundland's former owner offers to invest in firm
- Published
Poundland's former owner has said he would invest in the firm as a government minister said she would meet the firm's board.
Steve Smith, who left the Walsall-based business in 2006, said he had attempted to contact owners Gordon Brothers having been "really surprised" to learn about them filing for administration when sales were up 11% on last year.
The BBC understands that Business Minister Kate Dearden will meet with senior Poundland executives later this week to discuss the company's threatened insolvency.
US-based Gordon Brothers said it was evaluating interest for the whole business and formal and indicative offers for significant viable parts of it.
Gordon Brothers, who bought the firm from Polish retail group Pepco last year for £1, has stopped funding the business and rejected a takeover offer from Irish firm Martin Property Group (MPG).
The retailer has given the business until Thursday to find a rescue deal, putting up to 12,000 staff at risk.
It's understood the meeting with Deardon will be predominantly a "fact finding" meeting with government sources conceding there is limited scope for the government to intervene in a commercial transaction albeit one that puts over 10,000 jobs and hundreds of stores at risk.
The meeting was first reported by Sky News.
There is no current meeting planned between the government and executives from current owners, US private equity group Gordon Brothers.
Concerns have been raised that Gordon Brothers have declined an offer from another buyer to keep Poundland afloat in order to ensure repayment of £30 million loan it inherited after buying the company for £1.
More on Poundland
'Poundland closure would leave a void in our town'
- Published2 days ago
How Poundland grew from a market stall to a high street giant
- Published3 days ago
Poundland staff protest after chain approach administrators
- Published3 days ago
Prime Minister Andy Burnham has said the government was "ready to support" staff as he also called for answers over why an offer to buy the business had been rejected.
Smith, from Wolverhampton and who set up the firm in 1990 with a store in Burton-upon-Trent, Staffordshire, said he contacted the owners over the last three months but had no reply. He had thought that was good news as he assumed the firm must have had offers on the table.
"And maybe I was a bit too late, but I'd certainly... with talking to the staff and how Poundland's performing at the moment, I'd certainly, if there's an opportunity, I definitely want to put some money back in there."
He said he was still in touch with staff there at levels within the business and "even last week" sales were 11.2 % upon last year.
"Although Poundland made a loss last year, they're going to make a good profit this year, so it's just crazy."
He warned that the two or three thousand suppliers to the firm only worked for Poundland so they would be directly affected by its collapse.
"This is not just about 12, 000 jobs. I'm estimating more like 20 or 30,000 jobs," he added.
The company has 600 stores in the UK and Ireland, and Smith said it had between four and five million customers a week, so with Poundland not being present on high streets would "cause a lot of other retailers to fall as well".
Liam Byrne, chair of the Business, Innovation, Science and Trade Committee and Labour MP for Birmingham Hodge Hill and Solihull North, said he felt the company could be saved and "the whole deal stinks to high heaven right now".
"Because I think the issue that we've got is, you've got an owner that could well be trying to cut and run, to sell a business that is in fact a going concern in order to maximize their own profits and put in jeopardy 12,000 British jobs on the high street."
'Get on the case now'
"Our message today to government and to ministers is, do not leave this to the last minute, which is Thursday... please get on the case now to get everybody around the table to maximize every option to save as much of the business as possible," he added.
In a statement, the board of Poundland Limited said it had been "working on a formal sale process for Poundland" and despite "enormous efforts it had not been possible to identify an acceptable offer for the business as a whole".
"We recognise any sale process creates uncertainty and particularly when set against a challenging UK economic environment."
Gordon Brothers said: "While Martin Property Group had been identified as the preferred bidder by Poundland's management team, attention must now turn to other active bids."
The interest, formal and indicative offers were being evaluated "with a view to minimising uncertainty for Poundland's people and all relevant stakeholders."
Get in touch
Tell us which stories we should cover in Wolverhampton
Follow BBC Wolverhampton & Black Country on BBC Sounds, Facebook, external, X, external and Instagram, external.
Related internet links
- Published3 days ago
- Published13 October
- Published21 November 2025`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/ck1wv1j0xgywo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-02T13:40:36+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/e116/live/dde58360-d6ca-11f1-ac20-7783925c811f.jpg",
    readTime: 10,
  },
  {
    id: "defense-healthcare-crypto-and-ai-how-the-c35c7e06",
    title: "Defense, healthcare, crypto and AI: How the midterm election could affect stocks",
    titleJa: "Defense, healthcare, crypto and AI: How the midterm election could affect stocks",
    summaryJa: "Democratic gains in Congress could bring tougher oversight of major companies and shift billions of dollars in federal spending and regulatory policy.",
    bodyOriginal: `Lockheed Martin gets about 70% of its sales from the U.S. government. Medicaid accounts for three-quarters of Molina Healthcare's premium revenue. Coinbase is waiting on Congress to finish writing the rules for cryptocurrency.
For some of the biggest U.S. companies, Washington is part of the business model. Now, the midterm election could change who holds the leverage.
A Democratic victory in either or both chambers of Congress would grant the party new leverage to investigate companies, challenge federal spending and demand legislative concessions. But their reach would have limits: President Donald Trump would retain his veto and broad authority over tariffs, immigration and federal regulation.
Historically, stocks have performed well under divided government. Under Republican presidents, the S&P 500 has gained an average of 23% in the year after midterms when Congress was split, compared with 16% when Democrats controlled both chambers, according to a Morgan Stanley analysis published Thursday. Analysts often attribute the pattern in part to congressional gridlock limiting sweeping policy changes.
Still, some analysts caution against assuming that pattern will repeat.
"We don't think that blueprint holds up this time around, and we still see plenty of reasons to be constructive on the U.S. equity market," said Ariana Salvatore, head of U.S. public policy research at Morgan Stanley.
For investors, the midterm election could reshape which businesses preserve their advantages in Washington, particularly in industries such as defense, healthcare, banking and artificial intelligence.
"There are some policy changes that might be market moving, at least for certain segments," said Jeff Buchbinder, chief equity strategist at LPL Financial.
Congressional oversight and investigations
Control of either the House or Senate would give Democrats committee gavels and subpoena power, allowing them to demand documents, compel testimony and haul executives before public hearings.
Companies are already getting a preview.
On Oct. 21, Sen. Richard Blumenthal, D-Conn., the top Democrat on the Senate Homeland Security and Governmental Affairs Permanent Subcommittee on Investigations, sought records tied to Trump's White House ballroom from donors including Cisco, Salesforce, ServiceNow and Kraken. Apple and Nvidia each committed $25 million to the project, according to records obtained by The Washington Post.
Rep. Jamie Raskin, D-Md., has separately sought records involving tariff exclusions, including communications involving Apple's former CEO, Tim Cook, as Democrats investigate whether Trump used trade policy to reward political allies and donors.
While donations do not prove wrongdoing or favorable treatment, congressional probes still carry risks: subpoenas consume executive bandwidth, reveal internal communications and generate unpredictable news coverage. Few CEOs relish the idea of sitting at a witness table before lawmakers and television cameras.
"It creates volatility because you get a negative headline," said Monica Guerra, Morgan Stanley's head of policy and geopolitical strategy, who expects Democrats to cast a wide net for their probes.
Democrats have signaled interest in Trump family businesses, government contractors, firms tied to Donald Trump Jr.'s 1789 Capital, and companies associated with Elon Musk and the so-called Department of Government Efficiency.
Federal spending
Then there is the most basic power Congress has: deciding where the money goes.
Trump's 2025 tax cuts and spending law, known as One Big Beautiful Bill, is projected to reduce federal Medicaid spending by $911 billion through 2034, according to a KFF analysis of Congressional Budget Office estimates. KFF is a nonpartisan nonprofit that provides health policy information. Meanwhile, new work requirements for Medicaid enrollees are scheduled to take effect Jan. 1, or earlier in some states, while tighter state budgets could mean fewer people are covered and greater pressure on provider payments.
Molina Healthcare generated $32.2 billion, or 75% of its 2025 premium revenue, from Medicaid, according to the company's annual Securities and Exchange Commission filing. In the same filing, Molina warned that losing government contracts or failing to renew them on favorable terms could materially reduce premium revenue.
A Democratic-controlled chamber could not repeal the 2025 law on its own but could use must-pass budget negotiations to seek funding changes or delays to some cuts.
"They're probably going to push back on those Medicaid cuts," Buchbinder told CNBC, noting that preserving coverage could help stabilize enrollment for Medicaid insurers and patient volumes for hospitals.
Hospitals face their own squeeze: fewer insured patients can mean more uncompensated care, while state budget pressure can reduce reimbursement rates, according to KFF. Congress created a $50 billion rural health fund over five years to cushion some of the blow, but KFF and medical providers have said the money would not fully offset the broader Medicaid reductions.
Democratic gains could still cut both ways for healthcare. The same lawmakers seeking to protect Medicaid funding could also intensify scrutiny of insurers, hospitals and drugmakers over prices, coverage and profits.
Defense contractors face a fight over which weapons and programs Congress keeps funding. The White House has requested $1.5 trillion for national defense in fiscal 2027, with a focus on replenishing weapons, bolstering readiness and covering other needs, some tied to the Iran war.
The White House has requested $1.5 trillion for national defense in fiscal 2027, while separately seeking an $87.6 billion supplemental appropriation from Congress for fiscal 2026, driven primarily by military operations related to Iran.
A Democratic Congress could challenge some Iran- and Israel-related spending while pushing for more aid to Ukraine. However, bipartisan consensus on China deterrence, nuclear modernization and missile defense could protect other major programs, according to multiple analysts.
For contractors, the difference could mean billions of dollars in orders.
Lockheed Martin, for example, recently reached a framework agreement with the Pentagon covering 850 F-35 fighter jets over a decade. But the agreement is not yet a finalized contract: Congress must authorize the multiyear purchase and provide the funding.
"You want to be a stock picker and not just ride the whole sector," Guerra told CNBC, pointing to areas such as shipbuilding, autonomous systems and missile defense as likely winners.
Rules and regulations
For crypto companies, the midterms could determine whether Trump's regulatory shift becomes durable law or remains vulnerable to the next administration. The industry's push for permanence stalled in September, when the Senate failed to advance the Trump-backed Clarity Act, a sweeping market structure bill.
Shares of Coinbase and stablecoin issuer Circle fell as much as 11% when the measure failed.
Getting a bill through the next Congress could come at a price. Democratic gains would give the party more leverage to demand stricter consumer safeguards, limits on yield-bearing stablecoins and tighter scrutiny of Trump's crypto businesses.
"In some ways, the industry doesn't really care who got elected," said Sam Stovall, chief investment strategist at CFRA Research. "They just want to know what the rules are going to be for the coming year."
Banks are looking for durability, too.
Federal regulators estimate their proposed capital overhaul would cut requirements for the largest banks by roughly 4.8%, potentially freeing billions for lending and shareholder payouts. The Federal Reserve writes the rules, but Senate control shapes who fills future vacancies, and congressional committees can pressure regulators through hearings and investigations.
"It's at the regulatory level where stuff can happen that matters," Buchbinder said.
AI may be the messiest political trade of all.
Trump has made rapid data center construction an economic and national security priority. Morgan Stanley expects hyperscalers including Microsoft, Amazon, Alphabet and Meta to spend more than $1 trillion on capital projects in 2027, even as the buildout faces growing backlash over electricity bills, water use and infrastructure costs.
CNBC's All-America Economic Survey from October found that 63% of registered voters oppose having a data center within 10 miles of their home, compared with just 13% who support one. The level of opposition is higher from Democrats than Republicans.
That friction has already reached Congress. In September, the House voted 417-3 to require state regulators to consider making large data centers cover the additional electricity infrastructure costs needed to serve them. The measure stalled in the Senate, 57-43 on a procedural vote, after Democrats argued it was too weak and pushed for mandatory protections instead of trusting the industry to police itself.
The midterms therefore could decide who gets the power. Democratic gains could put more grid-upgrade costs on tech developers, raising project costs just as access to power is constraining new construction.
But Congress is only part of the equation. State regulators, utilities and local governments will still decide where projects connect to the grid and which facilities get built.
"We think the election can have meaningful consequences, but on a highly localized basis," Salvatore said.`,
    bodyJa: `Lockheed Martin gets about 70% of its sales from the U.S. government. Medicaid accounts for three-quarters of Molina Healthcare's premium revenue. Coinbase is waiting on Congress to finish writing the rules for cryptocurrency.
For some of the biggest U.S. companies, Washington is part of the business model. Now, the midterm election could change who holds the leverage.
A Democratic victory in either or both chambers of Congress would grant the party new leverage to investigate companies, challenge federal spending and demand legislative concessions. But their reach would have limits: President Donald Trump would retain his veto and broad authority over tariffs, immigration and federal regulation.
Historically, stocks have performed well under divided government. Under Republican presidents, the S&P 500 has gained an average of 23% in the year after midterms when Congress was split, compared with 16% when Democrats controlled both chambers, according to a Morgan Stanley analysis published Thursday. Analysts often attribute the pattern in part to congressional gridlock limiting sweeping policy changes.
Still, some analysts caution against assuming that pattern will repeat.
"We don't think that blueprint holds up this time around, and we still see plenty of reasons to be constructive on the U.S. equity market," said Ariana Salvatore, head of U.S. public policy research at Morgan Stanley.
For investors, the midterm election could reshape which businesses preserve their advantages in Washington, particularly in industries such as defense, healthcare, banking and artificial intelligence.
"There are some policy changes that might be market moving, at least for certain segments," said Jeff Buchbinder, chief equity strategist at LPL Financial.
Congressional oversight and investigations
Control of either the House or Senate would give Democrats committee gavels and subpoena power, allowing them to demand documents, compel testimony and haul executives before public hearings.
Companies are already getting a preview.
On Oct. 21, Sen. Richard Blumenthal, D-Conn., the top Democrat on the Senate Homeland Security and Governmental Affairs Permanent Subcommittee on Investigations, sought records tied to Trump's White House ballroom from donors including Cisco, Salesforce, ServiceNow and Kraken. Apple and Nvidia each committed $25 million to the project, according to records obtained by The Washington Post.
Rep. Jamie Raskin, D-Md., has separately sought records involving tariff exclusions, including communications involving Apple's former CEO, Tim Cook, as Democrats investigate whether Trump used trade policy to reward political allies and donors.
While donations do not prove wrongdoing or favorable treatment, congressional probes still carry risks: subpoenas consume executive bandwidth, reveal internal communications and generate unpredictable news coverage. Few CEOs relish the idea of sitting at a witness table before lawmakers and television cameras.
"It creates volatility because you get a negative headline," said Monica Guerra, Morgan Stanley's head of policy and geopolitical strategy, who expects Democrats to cast a wide net for their probes.
Democrats have signaled interest in Trump family businesses, government contractors, firms tied to Donald Trump Jr.'s 1789 Capital, and companies associated with Elon Musk and the so-called Department of Government Efficiency.
Federal spending
Then there is the most basic power Congress has: deciding where the money goes.
Trump's 2025 tax cuts and spending law, known as One Big Beautiful Bill, is projected to reduce federal Medicaid spending by $911 billion through 2034, according to a KFF analysis of Congressional Budget Office estimates. KFF is a nonpartisan nonprofit that provides health policy information. Meanwhile, new work requirements for Medicaid enrollees are scheduled to take effect Jan. 1, or earlier in some states, while tighter state budgets could mean fewer people are covered and greater pressure on provider payments.
Molina Healthcare generated $32.2 billion, or 75% of its 2025 premium revenue, from Medicaid, according to the company's annual Securities and Exchange Commission filing. In the same filing, Molina warned that losing government contracts or failing to renew them on favorable terms could materially reduce premium revenue.
A Democratic-controlled chamber could not repeal the 2025 law on its own but could use must-pass budget negotiations to seek funding changes or delays to some cuts.
"They're probably going to push back on those Medicaid cuts," Buchbinder told CNBC, noting that preserving coverage could help stabilize enrollment for Medicaid insurers and patient volumes for hospitals.
Hospitals face their own squeeze: fewer insured patients can mean more uncompensated care, while state budget pressure can reduce reimbursement rates, according to KFF. Congress created a $50 billion rural health fund over five years to cushion some of the blow, but KFF and medical providers have said the money would not fully offset the broader Medicaid reductions.
Democratic gains could still cut both ways for healthcare. The same lawmakers seeking to protect Medicaid funding could also intensify scrutiny of insurers, hospitals and drugmakers over prices, coverage and profits.
Defense contractors face a fight over which weapons and programs Congress keeps funding. The White House has requested $1.5 trillion for national defense in fiscal 2027, with a focus on replenishing weapons, bolstering readiness and covering other needs, some tied to the Iran war.
The White House has requested $1.5 trillion for national defense in fiscal 2027, while separately seeking an $87.6 billion supplemental appropriation from Congress for fiscal 2026, driven primarily by military operations related to Iran.
A Democratic Congress could challenge some Iran- and Israel-related spending while pushing for more aid to Ukraine. However, bipartisan consensus on China deterrence, nuclear modernization and missile defense could protect other major programs, according to multiple analysts.
For contractors, the difference could mean billions of dollars in orders.
Lockheed Martin, for example, recently reached a framework agreement with the Pentagon covering 850 F-35 fighter jets over a decade. But the agreement is not yet a finalized contract: Congress must authorize the multiyear purchase and provide the funding.
"You want to be a stock picker and not just ride the whole sector," Guerra told CNBC, pointing to areas such as shipbuilding, autonomous systems and missile defense as likely winners.
Rules and regulations
For crypto companies, the midterms could determine whether Trump's regulatory shift becomes durable law or remains vulnerable to the next administration. The industry's push for permanence stalled in September, when the Senate failed to advance the Trump-backed Clarity Act, a sweeping market structure bill.
Shares of Coinbase and stablecoin issuer Circle fell as much as 11% when the measure failed.
Getting a bill through the next Congress could come at a price. Democratic gains would give the party more leverage to demand stricter consumer safeguards, limits on yield-bearing stablecoins and tighter scrutiny of Trump's crypto businesses.
"In some ways, the industry doesn't really care who got elected," said Sam Stovall, chief investment strategist at CFRA Research. "They just want to know what the rules are going to be for the coming year."
Banks are looking for durability, too.
Federal regulators estimate their proposed capital overhaul would cut requirements for the largest banks by roughly 4.8%, potentially freeing billions for lending and shareholder payouts. The Federal Reserve writes the rules, but Senate control shapes who fills future vacancies, and congressional committees can pressure regulators through hearings and investigations.
"It's at the regulatory level where stuff can happen that matters," Buchbinder said.
AI may be the messiest political trade of all.
Trump has made rapid data center construction an economic and national security priority. Morgan Stanley expects hyperscalers including Microsoft, Amazon, Alphabet and Meta to spend more than $1 trillion on capital projects in 2027, even as the buildout faces growing backlash over electricity bills, water use and infrastructure costs.
CNBC's All-America Economic Survey from October found that 63% of registered voters oppose having a data center within 10 miles of their home, compared with just 13% who support one. The level of opposition is higher from Democrats than Republicans.
That friction has already reached Congress. In September, the House voted 417-3 to require state regulators to consider making large data centers cover the additional electricity infrastructure costs needed to serve them. The measure stalled in the Senate, 57-43 on a procedural vote, after Democrats argued it was too weak and pushed for mandatory protections instead of trusting the industry to police itself.
The midterms therefore could decide who gets the power. Democratic gains could put more grid-upgrade costs on tech developers, raising project costs just as access to power is constraining new construction.
But Congress is only part of the equation. State regulators, utilities and local governments will still decide where projects connect to the grid and which facilities get built.
"We think the election can have meaningful consequences, but on a highly localized basis," Salvatore said.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/02/midterm-election-stocks-defense-healthcare-crypto-ai.html",
    publishedAt: "2026-11-02T13:23:58+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "ryanair-says-it-may-freeze-workers-pay-a-4596c5a0",
    title: "Ryanair says it may freeze workers' pay and raise airfares",
    titleJa: "Ryanair says it may freeze workers' pay and raise airfares",
    summaryJa: "The airline says fuel prices may rise by €2bn in 2028 unless there is an end to the US-Israel war with Iran.",
    bodyOriginal: `Ryanair says it may freeze workers' pay and raise airfares
- Published
Ryanair is considering a temporary wage freeze for staff and confirmed airfares will be "materially higher" next summer because of a sharp rise in fuel costs following the US-Israel war with Iran.
The airline said it expects fuel prices to remain high "well into 2027" unless there is a "swift resolution" to the conflict.
Ryanair said its fuel bill is forecast to be €2bn (£1.6bn) higher in the short-term and its boss, Michael O'Leary, said airfares would have to rise by "double-digits" to help cover the cost.
But the firm said that was unlikely to be enough and it is looking into pay freezes. Unite, the union representing Ryanair staff, said it had not been told of "any such proposals".
O'Leary also said the company would slow down hiring as airline's costs rise.
The airline said its pre-tax profits fell by 16% to €2.4bn during the six months to the end of September, largely due to fuel costs jumping by 15%.
The company said that although 80% of its fuel bill had been "hedged" – in effect, bought in advance at fixed prices – the cost of the remainder was elevated.
O'Leary reiterated forecasts from earlier this year Ryanair would "need a 20% fare increase" to cover the cost of jet fuel.
"I'm not sure we'll get to 20%," he said. "But we're certainly looking at double-digit fare increases across Europe from all airlines in 2027."
Aviation fuel prices have surged this year as a result of the US-Israel war with Iran, which has dramatically reduced the supply of refined products coming from the Gulf and increased competition for those produced elsewhere.
Ryanair also said it was weighing up freezing pay as "maturing labour agreements" – multi-year wage deals with unions – come to to an end and the policy could be implemented from April next year.
Oliver Richardson, national officer at Unite, said the union "hasn't been advised of any such proposals and we have a multi-year pay deal in place which covers next year. A number of Unions across Europe have the same".
He said: "Our pay agreement was not attached to, nor dependent on company performance. This was something that the Ryanair was at pains to emphasise. As such we would expect it to be honoured."
Ryanair also said it would increase its use of artificial intelligence within its back office and support functions.
Meanwhile, Ryanair has cut back on winter flights and said on Monday there would be more to come. It said this was happening across the airline industry, particularly with short-haul carriers.
O'Leary said: "We believe those cuts will continue into the summer of 2027. Over the medium term, we expect short-haul capacity will remain constrained out to the early 2030s."
- Published11 September
- Published21 July`,
    bodyJa: `Ryanair says it may freeze workers' pay and raise airfares
- Published
Ryanair is considering a temporary wage freeze for staff and confirmed airfares will be "materially higher" next summer because of a sharp rise in fuel costs following the US-Israel war with Iran.
The airline said it expects fuel prices to remain high "well into 2027" unless there is a "swift resolution" to the conflict.
Ryanair said its fuel bill is forecast to be €2bn (£1.6bn) higher in the short-term and its boss, Michael O'Leary, said airfares would have to rise by "double-digits" to help cover the cost.
But the firm said that was unlikely to be enough and it is looking into pay freezes. Unite, the union representing Ryanair staff, said it had not been told of "any such proposals".
O'Leary also said the company would slow down hiring as airline's costs rise.
The airline said its pre-tax profits fell by 16% to €2.4bn during the six months to the end of September, largely due to fuel costs jumping by 15%.
The company said that although 80% of its fuel bill had been "hedged" – in effect, bought in advance at fixed prices – the cost of the remainder was elevated.
O'Leary reiterated forecasts from earlier this year Ryanair would "need a 20% fare increase" to cover the cost of jet fuel.
"I'm not sure we'll get to 20%," he said. "But we're certainly looking at double-digit fare increases across Europe from all airlines in 2027."
Aviation fuel prices have surged this year as a result of the US-Israel war with Iran, which has dramatically reduced the supply of refined products coming from the Gulf and increased competition for those produced elsewhere.
Ryanair also said it was weighing up freezing pay as "maturing labour agreements" – multi-year wage deals with unions – come to to an end and the policy could be implemented from April next year.
Oliver Richardson, national officer at Unite, said the union "hasn't been advised of any such proposals and we have a multi-year pay deal in place which covers next year. A number of Unions across Europe have the same".
He said: "Our pay agreement was not attached to, nor dependent on company performance. This was something that the Ryanair was at pains to emphasise. As such we would expect it to be honoured."
Ryanair also said it would increase its use of artificial intelligence within its back office and support functions.
Meanwhile, Ryanair has cut back on winter flights and said on Monday there would be more to come. It said this was happening across the airline industry, particularly with short-haul carriers.
O'Leary said: "We believe those cuts will continue into the summer of 2027. Over the medium term, we expect short-haul capacity will remain constrained out to the early 2030s."
- Published11 September
- Published21 July`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cr0qkve1x224o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-02T12:22:10+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/895b/live/a85523b0-d691-11f1-8f56-0b6ab08f384e.jpg",
    readTime: 7,
  },
  {
    id: "binance-sees-3-64-billion-in-net-outflow-b271cc3a",
    title: "Binance sees $3.64 billion in net outflows as withdrawals resume after massive hack",
    titleJa: "Binance sees $3.64 billion in net outflows as withdrawals resume after massive hack",
    summaryJa: "Binance recorded $3.64 billion in net outflows after resuming withdrawals following a $6.3 billion hack, representing 2.1% of its total assets.",
    bodyOriginal: `Binance said it recorded $3.64 billion in net outflows after reopening withdrawals on Sunday following a $6.3 billion hack, as customers rushed to move funds off the platform.
The exchange processed $4.65 billion in withdrawals and $1.01 billion in deposits between 6 a.m. and 3:30 p.m. UTC on Nov. 1, Binance said in a post on X.
The resulting net outflows represented 2.1% of Binance's $171 billion in total assets, based on its latest available proof-of-reserves data as of Oct. 28.
Binance said withdrawal volumes had declined and were stabilizing following an initial spike, while deposit volumes remained substantial.
The exchange began restoring withdrawals in phases at 6 a.m. UTC on Sunday, with services resuming across all 15 networks and assets included in the initial phase by 12:36 p.m. UTC. It said testing was continuing for the remaining networks and assets.
"Circle activated its incident response procedures and coordinated with law enforcement to freeze more than $1.1 billion in USDC associated with the incident," a spokesperson for the stablecoin issuer told CNBC in an email. The company said the investigation is ongoing.
The updated figure follows a Friday post from Circle CEO Jeremy Allaire, who said at the time that more than $800 million in USDC linked to the incident had been frozen.
Binance founder and former CEO Changpeng Zhao sought to reassure users following the breach, writing on X that "98% choose to stay!" He said most of the net outflows occurred within the first couple of hours after withdrawals resumed. "Trust isn't earned by what you say in good times. It's earned by what you do in hard times," Zhao added.
The withdrawals followed a record $6.3 billion hack of Binance last week. The FBI attributed the attack to North Korean hackers, identifying the operation as TraderTraitor.
The exchange has said it would absorb the financial impact of the stolen funds rather than pass the losses on to users.
Binance said it had covered around 95% of the impacted amount, up from 90% in its previous update. The exchange said the remaining 5% consisted of less liquid tokens that would take longer to source in the quantities required.`,
    bodyJa: `Binance said it recorded $3.64 billion in net outflows after reopening withdrawals on Sunday following a $6.3 billion hack, as customers rushed to move funds off the platform.
The exchange processed $4.65 billion in withdrawals and $1.01 billion in deposits between 6 a.m. and 3:30 p.m. UTC on Nov. 1, Binance said in a post on X.
The resulting net outflows represented 2.1% of Binance's $171 billion in total assets, based on its latest available proof-of-reserves data as of Oct. 28.
Binance said withdrawal volumes had declined and were stabilizing following an initial spike, while deposit volumes remained substantial.
The exchange began restoring withdrawals in phases at 6 a.m. UTC on Sunday, with services resuming across all 15 networks and assets included in the initial phase by 12:36 p.m. UTC. It said testing was continuing for the remaining networks and assets.
"Circle activated its incident response procedures and coordinated with law enforcement to freeze more than $1.1 billion in USDC associated with the incident," a spokesperson for the stablecoin issuer told CNBC in an email. The company said the investigation is ongoing.
The updated figure follows a Friday post from Circle CEO Jeremy Allaire, who said at the time that more than $800 million in USDC linked to the incident had been frozen.
Binance founder and former CEO Changpeng Zhao sought to reassure users following the breach, writing on X that "98% choose to stay!" He said most of the net outflows occurred within the first couple of hours after withdrawals resumed. "Trust isn't earned by what you say in good times. It's earned by what you do in hard times," Zhao added.
The withdrawals followed a record $6.3 billion hack of Binance last week. The FBI attributed the attack to North Korean hackers, identifying the operation as TraderTraitor.
The exchange has said it would absorb the financial impact of the stolen funds rather than pass the losses on to users.
Binance said it had covered around 95% of the impacted amount, up from 90% in its previous update. The exchange said the remaining 5% consisted of less liquid tokens that would take longer to source in the quantities required.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/02/binance-outflow-hack-bitcoin.html",
    publishedAt: "2026-11-02T05:09:45+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "canada-india-5-5-billion-bank-takeover-a-e589f905",
    title: "Canada-India $5.5 billion bank takeover attracts opposition from workers, politicians",
    titleJa: "Canada-India $5.5 billion bank takeover attracts opposition from workers, politicians",
    summaryJa: "IDBI workers demand the government \"cancel the privatization process\" and work to strengthen the bank while protecting public investment and staff interests.",
    bodyOriginal: `Canadian firm Fairfax Financial Holdings' proposed $5.5 billion takeover of IDBI Bank is facing pushback from employees of the Indian state-owned lender and political parties in the country.
On Sunday, the United Forum of IDBI Officers and Employees called for a two-day "nationwide" strike against the sale of the bank to Fairfax. The workers' union also expressed "grave concerns" about the transparency of the sale and valuation process, according to a post on X.
It is demanding that the government "cancel the privatization process" and instead focus on strengthening the bank while protecting public investment and employees' interests.
Last week, Rahul Gandhi, India's leader of the opposition, extended support to the IDBI Bank employee unions opposing the takeover by Fairfax. "Public banks are not assets to be sold off, they are tools to build the nation," Gandhi said in a statement on Thursday.
He added that the sale of over 60% stake in IDBI Bank to Fairfax goes against the commitment of previous governments to hold a 51% stake in the state-owned lender.
Nirmala Sitharaman, India's finance minister, in her response said the public sector bank was handed to the government in "poor shape" and was revived through "professionalism, prudence" and recapitalization of more than 250 billion rupees ($2.6 billion).
"The IDBI Bank is now poised for its next phase of growth," the finance minister said. The government has previously said that the next phase of growth will be driven by a strategic investor.
The Indian government on Oct.14 said the sale of over 60% of the share in IDBI will mark the largest foreign direct investment transaction in India's financial sector. Fairfax made a bid to pay 81 rupees per share for IDBI against the average fair value set at 75.99 rupees apiece.
On Monday, shares of IDBI opened at around 79 rupees per share.
However, Indian media outlet Businessworld on Thursday reported that government officials had suppressed the valuation of IDBI to make Fairfax's offer seem attractive. The Ministry of Finance has defended its procedure, adding that the bidding process was a "double blind" as the bidder did not know the valuation and the valuators did not see the bids.
The Indian government has been divesting stakes this year as it pushes to keep the country's growth engine running amid deepening fiscal pressures. It sold shares in several companies, including Cochin Shipyard, Indian Railways Finance Corp, NHPC and Coal India. In August, it got $3.3 billion for a 6.5% stake in the country's top life insurer, Life Insurance Corporation of India.`,
    bodyJa: `Canadian firm Fairfax Financial Holdings' proposed $5.5 billion takeover of IDBI Bank is facing pushback from employees of the Indian state-owned lender and political parties in the country.
On Sunday, the United Forum of IDBI Officers and Employees called for a two-day "nationwide" strike against the sale of the bank to Fairfax. The workers' union also expressed "grave concerns" about the transparency of the sale and valuation process, according to a post on X.
It is demanding that the government "cancel the privatization process" and instead focus on strengthening the bank while protecting public investment and employees' interests.
Last week, Rahul Gandhi, India's leader of the opposition, extended support to the IDBI Bank employee unions opposing the takeover by Fairfax. "Public banks are not assets to be sold off, they are tools to build the nation," Gandhi said in a statement on Thursday.
He added that the sale of over 60% stake in IDBI Bank to Fairfax goes against the commitment of previous governments to hold a 51% stake in the state-owned lender.
Nirmala Sitharaman, India's finance minister, in her response said the public sector bank was handed to the government in "poor shape" and was revived through "professionalism, prudence" and recapitalization of more than 250 billion rupees ($2.6 billion).
"The IDBI Bank is now poised for its next phase of growth," the finance minister said. The government has previously said that the next phase of growth will be driven by a strategic investor.
The Indian government on Oct.14 said the sale of over 60% of the share in IDBI will mark the largest foreign direct investment transaction in India's financial sector. Fairfax made a bid to pay 81 rupees per share for IDBI against the average fair value set at 75.99 rupees apiece.
On Monday, shares of IDBI opened at around 79 rupees per share.
However, Indian media outlet Businessworld on Thursday reported that government officials had suppressed the valuation of IDBI to make Fairfax's offer seem attractive. The Ministry of Finance has defended its procedure, adding that the bidding process was a "double blind" as the bidder did not know the valuation and the valuators did not see the bids.
The Indian government has been divesting stakes this year as it pushes to keep the country's growth engine running amid deepening fiscal pressures. It sold shares in several companies, including Cochin Shipyard, Indian Railways Finance Corp, NHPC and Coal India. In August, it got $3.3 billion for a 6.5% stake in the country's top life insurer, Life Insurance Corporation of India.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/02/canada-india-bank-takeover-protest-workers.html",
    publishedAt: "2026-11-02T04:09:34+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 7,
  },
  {
    id: "binance-users-withdraw-3-6bn-after-recor-c7bed4c4",
    title: "Binance users withdraw $3.6bn after record crypto hack",
    titleJa: "Binance users withdraw $3.6bn after record crypto hack",
    summaryJa: "The exchange froze transactions in the wake of the incident, which impacted $6.3bn worth of digital assets.",
    bodyOriginal: `Binance users withdraw $3.6bn after record crypto hack
- Published
Binance customers withdrew $3.64bn (£2.72bn) of assets from the world's largest cryptocurrency exchange as it reopened on Sunday following a record hack last week.
The firm suspended all transactions in the wake of the incident, which impacted $6.3bn worth of digital assets.
Major organisations, including the US Federal Bureau of Investigation (FBI), have accused North Korea of being responsible for the cyber-attack, which is said to be the largest hack in history.
The company said it has covered around 95% of the assets stolen in the breach, but that the remaining amount may take longer to source. Binance has repeatedly said it would cover all of the losses linked to the attack.
"Between 06:00 and 15:30 [GMT] on November 1, we processed $4.649 billion in withdrawals and $1.01 billion in deposits, resulting in a net outflow of approximately $3.64 billion," Binance posted on X.
There was an "initial spike" in withdrawals, which later declined and "are stabilising as expected", it added.
Sunday's net withdrawals account for just over 2% of the $171bn of assets under its management, said Binance.
The firm said last week that it has reserved more than $6.34bn in funds, to deal with the fallout of the attack.
Binance also said withdrawals of more than two dozen major cryptocurrencies like Bitcoin and Ethereum have resumed and that more services will resume in phases once security checks are completed.
AI discovered a massive cyber-security flaw - here's what happened
- Published22 October
The attack on Binance has been attributed to TraderTraitor, a North Korean cybercrime group also known as the Lazarus Group, which stole a then-record $1.5bn from crypto exchange Bybit in 2025.
The FBI on Saturday published a list of cryptocurrency wallet addresses linked to the group and urged partners in the industry to help by blocking transactions involving them.
The exchange scrambled to urge cryptocurrency issuers to freeze affected assets.
Binance said last week that early checks suggest the incident may have started with a compromised laptop that belonged to an engineer, allowing hackers to find a way to make unauthorised transactions.
The hack hit Binance's global centralised exchange, Binance.com, while its US-facing platform has said it was not affected by the issue.
Binance said it had replaced customers' assets using a combination of sources, including its corporate treasury as well as its futures insurance and emergency reserve funds.
"Our commitment remains the same: Binance will fully cover the financial impact of the funds stolen in this incident," the firm said.
Cryptocurrencies are digital assets traded on exchanges such as Binance. Unlike cash, they do not exist in physical form and are managed on computers, smartphones and other digital devices.
Binance was founded in China and has hundreds of millions of registered users globally.`,
    bodyJa: `Binance users withdraw $3.6bn after record crypto hack
- Published
Binance customers withdrew $3.64bn (£2.72bn) of assets from the world's largest cryptocurrency exchange as it reopened on Sunday following a record hack last week.
The firm suspended all transactions in the wake of the incident, which impacted $6.3bn worth of digital assets.
Major organisations, including the US Federal Bureau of Investigation (FBI), have accused North Korea of being responsible for the cyber-attack, which is said to be the largest hack in history.
The company said it has covered around 95% of the assets stolen in the breach, but that the remaining amount may take longer to source. Binance has repeatedly said it would cover all of the losses linked to the attack.
"Between 06:00 and 15:30 [GMT] on November 1, we processed $4.649 billion in withdrawals and $1.01 billion in deposits, resulting in a net outflow of approximately $3.64 billion," Binance posted on X.
There was an "initial spike" in withdrawals, which later declined and "are stabilising as expected", it added.
Sunday's net withdrawals account for just over 2% of the $171bn of assets under its management, said Binance.
The firm said last week that it has reserved more than $6.34bn in funds, to deal with the fallout of the attack.
Binance also said withdrawals of more than two dozen major cryptocurrencies like Bitcoin and Ethereum have resumed and that more services will resume in phases once security checks are completed.
AI discovered a massive cyber-security flaw - here's what happened
- Published22 October
The attack on Binance has been attributed to TraderTraitor, a North Korean cybercrime group also known as the Lazarus Group, which stole a then-record $1.5bn from crypto exchange Bybit in 2025.
The FBI on Saturday published a list of cryptocurrency wallet addresses linked to the group and urged partners in the industry to help by blocking transactions involving them.
The exchange scrambled to urge cryptocurrency issuers to freeze affected assets.
Binance said last week that early checks suggest the incident may have started with a compromised laptop that belonged to an engineer, allowing hackers to find a way to make unauthorised transactions.
The hack hit Binance's global centralised exchange, Binance.com, while its US-facing platform has said it was not affected by the issue.
Binance said it had replaced customers' assets using a combination of sources, including its corporate treasury as well as its futures insurance and emergency reserve funds.
"Our commitment remains the same: Binance will fully cover the financial impact of the funds stolen in this incident," the firm said.
Cryptocurrencies are digital assets traded on exchanges such as Binance. Unlike cash, they do not exist in physical form and are managed on computers, smartphones and other digital devices.
Binance was founded in China and has hundreds of millions of registered users globally.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cwj34gdmnly4o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-02T03:32:14+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/3a7f/live/ad865b20-d64f-11f1-a701-fddedf244c16.jpg",
    readTime: 7,
  },
  {
    id: "sam-altman-makes-surprise-south-korea-vi-98d2eaaa",
    title: "Sam Altman makes surprise South Korea visit as OpenAI builds on chip partnerships",
    titleJa: "Sam Altman makes surprise South Korea visit as OpenAI builds on chip partnerships",
    summaryJa: "OpenAI CEO Sam Altman made an unannounced visit to South Korea over the weekend, meeting with Samsung executives and reportedly SK Group executives.",
    bodyOriginal: `OpenAI CEO Sam Altman made an unannounced visit to South Korea over the weekend, meeting with Samsung executives and reportedly holding talks with SK Group Chairman Chey Tae-won, building on existing partnerships with the country's leading chipmakers.
Samsung said Saturday that Altman met with around 50 executives from its affiliates spanning electronics, finance and biotechnology in Yongin, south of Seoul.
The discussions covered AI developments, potential business opportunities and the technology's impact on corporate decision-making and operations, Samsung said.
Altman also met with SK Group Chairman Chey Tae-won over lunch Saturday, with senior executives from SK Hynix and SK Telecom in attendance, according to South Korean media reports.
The two sides may have discussed cooperation on AI chips and data centers, including existing plans for high-bandwidth memory supplies and AI data center development, according to local media reports. The participants didn't provide details of the discussions.
SK Hynix told CNBC it was unable to confirm the reported meeting.
Altman also visited South Korea in October 2025, when he met with President Lee Jae Myung, Samsung Electronics Executive Chairman Jay Y. Lee and SK Group Chairman Chey Tae-won, and announced partnerships with Samsung and SK Group as part of OpenAI's Stargate initiative.
OpenAI's Stargate initiative aims to expand AI infrastructure globally, with South Korea playing a role through partnerships focused on advanced memory chip supplies and AI data center development.
Under the agreements, Samsung Electronics and SK Hynix outlined plans to ramp up production of advanced memory chips, while OpenAI and its South Korean partners agreed to explore developing AI data centers in the country.
OpenAI cited South Korea's ranking among global leaders in AI readiness and significant public-private funding to strengthen competitiveness as reasons for expanding its presence in the country.
Altman's latest visit also follows a July meeting with Samsung Electronics Executive Chairman Jay Y. Lee at OpenAI's headquarters in San Francisco, according to Samsung.
Altman left South Korea on Saturday, according to local media reports.`,
    bodyJa: `OpenAI CEO Sam Altman made an unannounced visit to South Korea over the weekend, meeting with Samsung executives and reportedly holding talks with SK Group Chairman Chey Tae-won, building on existing partnerships with the country's leading chipmakers.
Samsung said Saturday that Altman met with around 50 executives from its affiliates spanning electronics, finance and biotechnology in Yongin, south of Seoul.
The discussions covered AI developments, potential business opportunities and the technology's impact on corporate decision-making and operations, Samsung said.
Altman also met with SK Group Chairman Chey Tae-won over lunch Saturday, with senior executives from SK Hynix and SK Telecom in attendance, according to South Korean media reports.
The two sides may have discussed cooperation on AI chips and data centers, including existing plans for high-bandwidth memory supplies and AI data center development, according to local media reports. The participants didn't provide details of the discussions.
SK Hynix told CNBC it was unable to confirm the reported meeting.
Altman also visited South Korea in October 2025, when he met with President Lee Jae Myung, Samsung Electronics Executive Chairman Jay Y. Lee and SK Group Chairman Chey Tae-won, and announced partnerships with Samsung and SK Group as part of OpenAI's Stargate initiative.
OpenAI's Stargate initiative aims to expand AI infrastructure globally, with South Korea playing a role through partnerships focused on advanced memory chip supplies and AI data center development.
Under the agreements, Samsung Electronics and SK Hynix outlined plans to ramp up production of advanced memory chips, while OpenAI and its South Korean partners agreed to explore developing AI data centers in the country.
OpenAI cited South Korea's ranking among global leaders in AI readiness and significant public-private funding to strengthen competitiveness as reasons for expanding its presence in the country.
Altman's latest visit also follows a July meeting with Samsung Electronics Executive Chairman Jay Y. Lee at OpenAI's headquarters in San Francisco, according to Samsung.
Altman left South Korea on Saturday, according to local media reports.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/02/openai-sam-altman-samsung-sk-south-korea.html",
    publishedAt: "2026-11-02T02:58:53+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 6,
  },
  {
    id: "rubio-says-trump-wants-to-end-iran-war-p-83270d8e",
    title: "Rubio says Trump wants to end Iran war 'peacefully' even as both sides prepare for strikes",
    titleJa: "Rubio says Trump wants to end Iran war 'peacefully' even as both sides prepare for strikes",
    summaryJa: "The remarks come as reports suggest that both sides are gearing up for additional military strikes after the U.S. midterm elections.",
    bodyOriginal: `U.S. Secretary of State Marco Rubio said President Donald Trump would like to resolve the Iranian war "diplomatically," and prefers not to use military force.
Speaking over the weekend, Rubio told reporters that "He [Trump] hasn't made a decision...what the president expresses to you is incredible confidence that if we needed to do something militarily, we would have the ability to do it, and we really we have everything we need to be successful. But we would prefer to do it peacefully."
The remarks come as reports suggest both sides are gearing up for additional military strikes after the midterm elections.
On Saturday, Iranian Supreme Leader Mojtaba Khamenei called for Tehran's armed forces to meet "any level or type of threat" with "an immediate, impactful, and geographically unrestricted response."
He also ordered that its military database be updated so that "all kinds of physical and non-physical assets of the U.S.-Zionist enemy are brought within the reach of the Armed Forces," referring to U.S. and Israeli forces.
Washington has not explicitly stated it plans to resume attacks on Iran, but reports from The Wall Street Journal and The New York Times indicate the U.S. is preparing for possible renewed military actions after the Nov. 3 midterm elections.
On Sunday, Trump told the Right Side Broadcasting Network. "We've had such a victory, and we'll put it away very soon, one way or the other."
"Either they'll make a deal, or we'll just end it," he added.
Iran targets U.K. intelligence
On Sunday, Iran's foreign ministry designated the U.K.'s Military Intelligence Services as a "hostile group" and accused the Royal Navy and Air Force of supporting "terrorist organizations."
In a Telegram post, the ministry said that the move was a response to what it called London's "malicious" actions, including the designation of the Islamic Revolutionary Guard Corps as a "terrorist organization."
Tehran has separately accused the U.K. of participating in the U.S.-Iran war by allowing American forces access to British military and logistical bases.
The U.K. had allowed U.S. forces to use RAF Fairford and Diego Garcia for what were described as "defensive" strikes on Iran, according to the BBC.`,
    bodyJa: `U.S. Secretary of State Marco Rubio said President Donald Trump would like to resolve the Iranian war "diplomatically," and prefers not to use military force.
Speaking over the weekend, Rubio told reporters that "He [Trump] hasn't made a decision...what the president expresses to you is incredible confidence that if we needed to do something militarily, we would have the ability to do it, and we really we have everything we need to be successful. But we would prefer to do it peacefully."
The remarks come as reports suggest both sides are gearing up for additional military strikes after the midterm elections.
On Saturday, Iranian Supreme Leader Mojtaba Khamenei called for Tehran's armed forces to meet "any level or type of threat" with "an immediate, impactful, and geographically unrestricted response."
He also ordered that its military database be updated so that "all kinds of physical and non-physical assets of the U.S.-Zionist enemy are brought within the reach of the Armed Forces," referring to U.S. and Israeli forces.
Washington has not explicitly stated it plans to resume attacks on Iran, but reports from The Wall Street Journal and The New York Times indicate the U.S. is preparing for possible renewed military actions after the Nov. 3 midterm elections.
On Sunday, Trump told the Right Side Broadcasting Network. "We've had such a victory, and we'll put it away very soon, one way or the other."
"Either they'll make a deal, or we'll just end it," he added.
Iran targets U.K. intelligence
On Sunday, Iran's foreign ministry designated the U.K.'s Military Intelligence Services as a "hostile group" and accused the Royal Navy and Air Force of supporting "terrorist organizations."
In a Telegram post, the ministry said that the move was a response to what it called London's "malicious" actions, including the designation of the Islamic Revolutionary Guard Corps as a "terrorist organization."
Tehran has separately accused the U.K. of participating in the U.S.-Iran war by allowing American forces access to British military and logistical bases.
The U.K. had allowed U.S. forces to use RAF Fairford and Diego Garcia for what were described as "defensive" strikes on Iran, according to the BBC.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/02/us-iran-war-trump-hormuz-rubio.html",
    publishedAt: "2026-11-02T02:39:35+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 6,
  },
  {
    id: "this-is-the-biggest-threat-to-the-ai-pow-da1011a6",
    title: "This is the biggest threat to the AI-powered bull market",
    titleJa: "This is the biggest threat to the AI-powered bull market",
    summaryJa: "Blockbuster earnings growth has helped to power the stock market higher in 2026. In 2027, that engine might stall.",
    bodyOriginal: `Blockbuster earnings growth has helped to power the stock market higher in 2026. In 2027, that engine might stall.`,
    bodyJa: `Blockbuster earnings growth has helped to power the stock market higher in 2026. In 2027, that engine might stall.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/this-is-the-biggest-threat-to-the-ai-powered-bull-market-e757ca37?mod=mw_rss_topstories",
    publishedAt: "2026-11-02T00:22:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-72130104",
    readTime: 2,
  },
  {
    id: "don-t-get-caught-out-by-new-buy-now-pay-ce8a0e05",
    title: "Don't get caught out by new Buy Now Pay Later rules",
    titleJa: "Don't get caught out by new Buy Now Pay Later rules",
    summaryJa: "New affordability checks mean you could be blocked from using Buy Now Pay Later but here are ways to avoid it.",
    bodyOriginal: `Don't get caught out by new Buy Now Pay Later rules
- Published
If you've bought something via Buy Now Pay Later (BNPL) since the summer, then you'll have been tested to see if you can afford it.
BNPL has always been a type of loan, usually paid back in instalments, but it's only been officially regulated since July.
This means stricter background checks on your ability to repay.
If you fail, then your purchase via BNPL will be blocked. If there's a chance of this happening to you, here are some ways to approach the situation.
What are the new rules?
BNPL lenders - such as Klarna, Clearpay and others - must now have regulator approval to operate, giving shoppers more access to refunds and independent rulings on complaints if things go wrong.
But new affordability checks on each BNPL transaction could also leave you blocked from services for the first time.
There are different affordability checks for different purchases, partially based on how much is borrowed.
But, with the expensive festive season approaching, here's how to avoid being blocked when time and finances are tight.
How do I avoid being blocked?
Here are four things to consider if you find your account is closed or your borrowing limit has been massively reduced, from Sara Williams, a former volunteer debt adviser at Citizens Advice who posts tips as Debt Camel on social media.
Slow down your purchases: is what you are buying essential or can you postpone it?
Be more careful about what you buy to avoid needing a high credit limit to, for example, buy lots of clothes in different sizes
Cancel subscriptions to escape the trap of having to use BNPL to make up for the cost of previous payments
Talk to debt charities for help and access to food bank vouchers if you are using BNPL for essentials
Avoid getting into debt
If you are struggling to make repayments on any type of loan - BNPL or otherwise - you should seek help before things spiral out of control.
The government-backed, independent, MoneyHelper website, external has a guide to finding free debt advice near you, external.
It also suggests writing down exactly what you owe, to help plan how you will repay the money.
There are also tools to work out if you are receiving all the benefits and grants you are entitled to, and a bill prioritiser, external to show which payments to make first and what to do if you miss a payment.
You should also be sceptical of supposed debt solutions you might see on your social feeds.
Related topics
- Published12 October
- Published19 October`,
    bodyJa: `Don't get caught out by new Buy Now Pay Later rules
- Published
If you've bought something via Buy Now Pay Later (BNPL) since the summer, then you'll have been tested to see if you can afford it.
BNPL has always been a type of loan, usually paid back in instalments, but it's only been officially regulated since July.
This means stricter background checks on your ability to repay.
If you fail, then your purchase via BNPL will be blocked. If there's a chance of this happening to you, here are some ways to approach the situation.
What are the new rules?
BNPL lenders - such as Klarna, Clearpay and others - must now have regulator approval to operate, giving shoppers more access to refunds and independent rulings on complaints if things go wrong.
But new affordability checks on each BNPL transaction could also leave you blocked from services for the first time.
There are different affordability checks for different purchases, partially based on how much is borrowed.
But, with the expensive festive season approaching, here's how to avoid being blocked when time and finances are tight.
How do I avoid being blocked?
Here are four things to consider if you find your account is closed or your borrowing limit has been massively reduced, from Sara Williams, a former volunteer debt adviser at Citizens Advice who posts tips as Debt Camel on social media.
Slow down your purchases: is what you are buying essential or can you postpone it?
Be more careful about what you buy to avoid needing a high credit limit to, for example, buy lots of clothes in different sizes
Cancel subscriptions to escape the trap of having to use BNPL to make up for the cost of previous payments
Talk to debt charities for help and access to food bank vouchers if you are using BNPL for essentials
Avoid getting into debt
If you are struggling to make repayments on any type of loan - BNPL or otherwise - you should seek help before things spiral out of control.
The government-backed, independent, MoneyHelper website, external has a guide to finding free debt advice near you, external.
It also suggests writing down exactly what you owe, to help plan how you will repay the money.
There are also tools to work out if you are receiving all the benefits and grants you are entitled to, and a bill prioritiser, external to show which payments to make first and what to do if you miss a payment.
You should also be sceptical of supposed debt solutions you might see on your social feeds.
Related topics
- Published12 October
- Published19 October`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/crpdgp4y017go?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-01T23:34:49+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/c3c9/live/8607fcf0-d462-11f1-ab12-eb0c94f5b382.jpg",
    readTime: 6,
  },
  {
    id: "judge-dismisses-alaska-senate-election-l-52f2d094",
    title: "Judge dismisses Alaska Senate election lawsuit; DOJ vows appeal",
    titleJa: "Judge dismisses Alaska Senate election lawsuit; DOJ vows appeal",
    summaryJa: "Democratic nominee Mary Peltola is facing two candidates named Dan Sullivan in the Alaska Senate election, one of whom is the Republican incumbent.",
    bodyOriginal: `A federal judge on Sunday dismissed the Department of Justice's extraordinary lawsuit seeking to delay certification of the Alaska Senate election if incumbent Republican Dan Sullivan loses, citing possible voter confusion from another candidate with his name on the ballot.
The ruling came two days before Election Day and two days after the U.S. Attorney for Alaska said ongoing criminal and civil investigations into non-incumbent Dan J. Sullivan's decision to run for the Senate.
The campaign of Democratic nominee Mary Peltola, state election officials and outside advocacy groups had asked Judge Sharon Gleason to dismiss the DOJ's lawsuit in U.S. District Court in Anchorage.
The Department of Justice quickly filed a notice of its intention to appeal the decision to the 9th Circuit U.S. Court of Appeals.
Peltola is locked in a tight contest with Sen. Dan Sullivan, whose winner will be determined by a ranked-choice system.
The outcome of the race is one of several contests that determine which party has a Senate majority, where Republicans currently hold a narrow lead.
Neither the other Sullivan nor the fourth candidate on the ballot, Gerald Heikes, is considered a contender.
But voters who rank them as a first choice could swing the outcome by ranking Peltola or Sen. Sullivan second.
Peltola's campaign has been accused of encouraging retired schoolteacher Dan Sullivan to run for the Senate against the incumbent Sen. Dan S. Sullivan and Peltola.
Her campaign has denied those claims.
"No sham investigation or baseless lawsuit from a weaponized Department of Justice is going to stop Alaskans from electing Mary on November 3rd so she can lower costs for Alaska's working families," Peltola's campaign said in a statement after Sunday's ruling.
"Alaskans will choose their next U.S. Senator – not Dan Sullivan or his DC allies," the campaign said.
In her 20-page decision, Gleason did not resolve whether another Sullivan had been recruited to confuse voters.
Instead, she said the federal government had failed to establish that it had legal standing to file a civil complaint to postpone certification of the election if Sen. Sullivan lost.
In that event, the DOJ wanted an investigation into voter intent and possible confusion from having two Dan Sullivans on the ballot.
"The absence of any explanation from the United States as to how its requested relief could redress its alleged injury while simultaneously maintaining the secrecy of the ballot is telling," Gleason said in her ruling.
She noted that early voting in the state was already underway, and that ballots already cast have been commingled in a way that would prevent officials from linking individual ballots to voters.
"More fundamentally, the United States provides no workable plan as to how it proposes to segregate ballots cast for Daniel J. Sullivan on Election Day and then conduct a court-ordered unspecified 'investigation' of those ballots in a manner that would preserve voter secrecy," Gleason wrote.
The judge also cited a Supreme Court decision that established the so-called Purcell principle, which "strongly cautions" against courts altering election rules on the eve of election.
She noted that DOJ claimed it was not seeking to alter the "time, place or manner of Alaska's election."
But at the same time, Gleason said, the DOJ was asking her for an order "preventing the State
from certifying the election if certain circumstances occur; a court order requiring the State to segregate and preserve certain ballots; and a court order permitting the United States to conduct an investigation into the intent of those voters who cast ballots for Daniel J. Sullivan."
"These requests certainly involve the time, place, and manner of Alaska's election, which are the responsibilities of the State, not the executive branch of the federal government," Gleason said.
The judge said she would not allow the DOJ to amend the lawsuit, which was revised last week to add a new legal claim under the Supremacy Clause of the U.S. Constitution to the first claim under the National Voter Registration Act. The amended complaint also added details of a New York Times article about the alleged recruitment of the second Sullivan.
"The Court finds that further amendment would be futile because this Court lacks the authority to order that certain ballots cast by Alaskans be segregated so that federal law enforcement officials can conduct an unspecified investigation of the voters who cast them," Gleason said.
A DOJ spokesperson said in a statement, "The court dismissed the case on procedural grounds but did not dispute the argument of the United States that Daniel J. Sullivan (a/k/a Decoy Dan) entered the race as a frivolous candidate to confuse voters."
"DOJ plans to file a notice of appeal," the spokesperson said. "Alaskan voters deserve a fair election, not to be misled in an attempt to rig outcomes."
The White House, when asked for comment, referred CNBC to the DOJ's statement.
President Donald Trump has said he ordered the lawsuit, which was filed Oct. 22.
Trump argued that Peltola and other Democrats had recruited the former school teacher to run in hopes of confusing voters who wanted to cast their ballots for Sen. Sullivan.
The New York Times on Wednesday reported that Peltola campaign aides and DSCC aides had been involved in efforts to recruit the retiree for the race.
Peltola's campaign and the Democratic Senatorial Campaign Committee have denied having any involvement in his campaign.
DSCC Executive Director Devan Barber said in a statement, "Today's ruling is a victory for democracy and a clear message to Donald Trump and Senate Republicans: No one, no matter how powerful, can toss out free and fair elections just because they don't like the result."
"We will never stop fighting back against the shameful, brazen efforts from the Trump administration and their weaponized Department of Justice to subvert the U.S. Senate race in Alaska, or any other election as voters reject Republicans at ballot boxes across the country – and we are confident Alaska voters will elect Mary Peltola to the Senate," Barber said.
Sen. Sullivan, in an interview on CNN before Gleason issued her ruling, said he would accept the election results if he lost.
But he also blasted Peltola's campaign and the DSCC.
"Recognizing they couldn't run on their record, so they had to cheat," Sullivan said. "I think a lot of Alaskans, even Democrats, are thinking she is not fit for office; she's continually lying to the Alaskan people, and I guarantee you she's lying right now."
Alaska election officials have pointed to steps they took to avoid voter confusion on the ballots for the race.
The ballots list Sen. Sullivan as "Dan S. Sullivan," with the words "incumbent" and "registered Republican" next to his name.
The other Sullivan is listed as "Daniel J. Sullivan," with no other words next to his name.
Election officials originally had blocked the retired teacher from the primary ballot. But a state judge allowed him on the ballot. Alaska's Supreme Court upheld that ruling.`,
    bodyJa: `A federal judge on Sunday dismissed the Department of Justice's extraordinary lawsuit seeking to delay certification of the Alaska Senate election if incumbent Republican Dan Sullivan loses, citing possible voter confusion from another candidate with his name on the ballot.
The ruling came two days before Election Day and two days after the U.S. Attorney for Alaska said ongoing criminal and civil investigations into non-incumbent Dan J. Sullivan's decision to run for the Senate.
The campaign of Democratic nominee Mary Peltola, state election officials and outside advocacy groups had asked Judge Sharon Gleason to dismiss the DOJ's lawsuit in U.S. District Court in Anchorage.
The Department of Justice quickly filed a notice of its intention to appeal the decision to the 9th Circuit U.S. Court of Appeals.
Peltola is locked in a tight contest with Sen. Dan Sullivan, whose winner will be determined by a ranked-choice system.
The outcome of the race is one of several contests that determine which party has a Senate majority, where Republicans currently hold a narrow lead.
Neither the other Sullivan nor the fourth candidate on the ballot, Gerald Heikes, is considered a contender.
But voters who rank them as a first choice could swing the outcome by ranking Peltola or Sen. Sullivan second.
Peltola's campaign has been accused of encouraging retired schoolteacher Dan Sullivan to run for the Senate against the incumbent Sen. Dan S. Sullivan and Peltola.
Her campaign has denied those claims.
"No sham investigation or baseless lawsuit from a weaponized Department of Justice is going to stop Alaskans from electing Mary on November 3rd so she can lower costs for Alaska's working families," Peltola's campaign said in a statement after Sunday's ruling.
"Alaskans will choose their next U.S. Senator – not Dan Sullivan or his DC allies," the campaign said.
In her 20-page decision, Gleason did not resolve whether another Sullivan had been recruited to confuse voters.
Instead, she said the federal government had failed to establish that it had legal standing to file a civil complaint to postpone certification of the election if Sen. Sullivan lost.
In that event, the DOJ wanted an investigation into voter intent and possible confusion from having two Dan Sullivans on the ballot.
"The absence of any explanation from the United States as to how its requested relief could redress its alleged injury while simultaneously maintaining the secrecy of the ballot is telling," Gleason said in her ruling.
She noted that early voting in the state was already underway, and that ballots already cast have been commingled in a way that would prevent officials from linking individual ballots to voters.
"More fundamentally, the United States provides no workable plan as to how it proposes to segregate ballots cast for Daniel J. Sullivan on Election Day and then conduct a court-ordered unspecified 'investigation' of those ballots in a manner that would preserve voter secrecy," Gleason wrote.
The judge also cited a Supreme Court decision that established the so-called Purcell principle, which "strongly cautions" against courts altering election rules on the eve of election.
She noted that DOJ claimed it was not seeking to alter the "time, place or manner of Alaska's election."
But at the same time, Gleason said, the DOJ was asking her for an order "preventing the State
from certifying the election if certain circumstances occur; a court order requiring the State to segregate and preserve certain ballots; and a court order permitting the United States to conduct an investigation into the intent of those voters who cast ballots for Daniel J. Sullivan."
"These requests certainly involve the time, place, and manner of Alaska's election, which are the responsibilities of the State, not the executive branch of the federal government," Gleason said.
The judge said she would not allow the DOJ to amend the lawsuit, which was revised last week to add a new legal claim under the Supremacy Clause of the U.S. Constitution to the first claim under the National Voter Registration Act. The amended complaint also added details of a New York Times article about the alleged recruitment of the second Sullivan.
"The Court finds that further amendment would be futile because this Court lacks the authority to order that certain ballots cast by Alaskans be segregated so that federal law enforcement officials can conduct an unspecified investigation of the voters who cast them," Gleason said.
A DOJ spokesperson said in a statement, "The court dismissed the case on procedural grounds but did not dispute the argument of the United States that Daniel J. Sullivan (a/k/a Decoy Dan) entered the race as a frivolous candidate to confuse voters."
"DOJ plans to file a notice of appeal," the spokesperson said. "Alaskan voters deserve a fair election, not to be misled in an attempt to rig outcomes."
The White House, when asked for comment, referred CNBC to the DOJ's statement.
President Donald Trump has said he ordered the lawsuit, which was filed Oct. 22.
Trump argued that Peltola and other Democrats had recruited the former school teacher to run in hopes of confusing voters who wanted to cast their ballots for Sen. Sullivan.
The New York Times on Wednesday reported that Peltola campaign aides and DSCC aides had been involved in efforts to recruit the retiree for the race.
Peltola's campaign and the Democratic Senatorial Campaign Committee have denied having any involvement in his campaign.
DSCC Executive Director Devan Barber said in a statement, "Today's ruling is a victory for democracy and a clear message to Donald Trump and Senate Republicans: No one, no matter how powerful, can toss out free and fair elections just because they don't like the result."
"We will never stop fighting back against the shameful, brazen efforts from the Trump administration and their weaponized Department of Justice to subvert the U.S. Senate race in Alaska, or any other election as voters reject Republicans at ballot boxes across the country – and we are confident Alaska voters will elect Mary Peltola to the Senate," Barber said.
Sen. Sullivan, in an interview on CNN before Gleason issued her ruling, said he would accept the election results if he lost.
But he also blasted Peltola's campaign and the DSCC.
"Recognizing they couldn't run on their record, so they had to cheat," Sullivan said. "I think a lot of Alaskans, even Democrats, are thinking she is not fit for office; she's continually lying to the Alaskan people, and I guarantee you she's lying right now."
Alaska election officials have pointed to steps they took to avoid voter confusion on the ballots for the race.
The ballots list Sen. Sullivan as "Dan S. Sullivan," with the words "incumbent" and "registered Republican" next to his name.
The other Sullivan is listed as "Daniel J. Sullivan," with no other words next to his name.
Election officials originally had blocked the retired teacher from the primary ballot. But a state judge allowed him on the ballot. Alaska's Supreme Court upheld that ruling.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/01/alaska-senate-doj-lawsuit-dismissed-sullivan-peltola.html",
    publishedAt: "2026-11-01T21:25:03+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
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
