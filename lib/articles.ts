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
    id: "widespread-outages-hit-banks-air-travel-1c9478bd",
    title: "Widespread outages hit banks, air travel, the NSA and Apple, disrupting seemingly everything",
    titleJa: "Widespread outages hit banks, air travel, the NSA and Apple, disrupting seemingly everything",
    summaryJa: "It's been a tough few days for the technology world as a series of widespread outages has brought different parts of life to a halt.On Tuesday, an outage halted internal communications at the National Security Agency and iPhone maker Apple confirmed that different products were either down or having issues.",
    bodyOriginal: `It's been a tough few days for the technology world as a series of widespread outages has brought different parts of life to a halt.
On Tuesday, an outage halted internal communications at the National Security Agency and iPhone maker Apple confirmed that different products were either down or having issues.
The NSA pointed to "scheduled routine maintenance," while Apple cited "an internal update" as the reason behind each issue.
It marked four major system problems in four consecutive business days.
Microsoft's Outlook issues wreaked havoc on businesses on Thursday, and the Federal Aviation Administration grounded flights on Friday. On Monday, issues at JPMorgan Chase affected customer transactions.
"When Microsoft goes down, the whole world comes to a standstill," said Raj Rajamani, CEO of JetStream Security. "That's a stark reminder of how deeply embedded these services and technologies are in our day-to-day life."
The disruptions have rattled consumers and led to a steady stream of memes on social media, as people look for a silver lining — or sinister plot — in the string of technology problems.
Experts say the real culprit behind this strange series of coincidences is much more benign.
"We're in the weird teenage phase of technology not quite maturing enough to know how to do this without disrupting services and so forth," said Tom Hegel, research head at SentinelOne.
With the help of AI, businesses are patching more software vulnerabilities than ever before and updating archaic systems to prepare for swarms of attacks in the wake of high-profile incidents like Hugging Face.
That's leaving IT and security teams strained and scrambling to keep up with heightened demand, said Sam Rubin, SVP of consulting and threat intelligence at Palo Alto Networks' Unit 42.
Amid this prolonged period of uncertainty, Rubin said businesses should prioritize updating their most exploitable systems and keeping operations underway when an outage hits.
"You need to think about how you continue to operate in the face of one of your IT systems going down," he said.
Last week, millions of users lost access to email in a fiasco that Microsoft eventually said was the result of an undetected bug that was lurking since July.
The FAA, which is still looking into the root cause of the system failure, pointed in part to a router upgrade in southern Arkansas overseen by government contractor L3Harris Technologies that overwhelmed the agency's telecommunications network.
JPMorgan said longer-than-usual service times on Monday stemmed from a software bug in on-premise hardware systems.
Agencies and businesses have ruled out cyber attacks, but the routine patching alibi hasn't satisfied some skeptics, and lawmakers are calling for more transparency.
Sen. Mark Warner, D-Va., on Tuesday used the recent incidents to make the case for an AI safety bill. House Minority Leader Hakeem Jeffries, D-N.Y., acknowledged that it's "too premature" to conclude malicious activity but called for a congressional briefing.
"I think it's time for the administration to come up to the Hill and explain themselves so we can be informed about the steps that need to be taken and we can inform the people of the United States of America," he said during a press conference on Tuesday.`,
    bodyJa: `It's been a tough few days for the technology world as a series of widespread outages has brought different parts of life to a halt.
On Tuesday, an outage halted internal communications at the National Security Agency and iPhone maker Apple confirmed that different products were either down or having issues.
The NSA pointed to "scheduled routine maintenance," while Apple cited "an internal update" as the reason behind each issue.
It marked four major system problems in four consecutive business days.
Microsoft's Outlook issues wreaked havoc on businesses on Thursday, and the Federal Aviation Administration grounded flights on Friday. On Monday, issues at JPMorgan Chase affected customer transactions.
"When Microsoft goes down, the whole world comes to a standstill," said Raj Rajamani, CEO of JetStream Security. "That's a stark reminder of how deeply embedded these services and technologies are in our day-to-day life."
The disruptions have rattled consumers and led to a steady stream of memes on social media, as people look for a silver lining — or sinister plot — in the string of technology problems.
Experts say the real culprit behind this strange series of coincidences is much more benign.
"We're in the weird teenage phase of technology not quite maturing enough to know how to do this without disrupting services and so forth," said Tom Hegel, research head at SentinelOne.
With the help of AI, businesses are patching more software vulnerabilities than ever before and updating archaic systems to prepare for swarms of attacks in the wake of high-profile incidents like Hugging Face.
That's leaving IT and security teams strained and scrambling to keep up with heightened demand, said Sam Rubin, SVP of consulting and threat intelligence at Palo Alto Networks' Unit 42.
Amid this prolonged period of uncertainty, Rubin said businesses should prioritize updating their most exploitable systems and keeping operations underway when an outage hits.
"You need to think about how you continue to operate in the face of one of your IT systems going down," he said.
Last week, millions of users lost access to email in a fiasco that Microsoft eventually said was the result of an undetected bug that was lurking since July.
The FAA, which is still looking into the root cause of the system failure, pointed in part to a router upgrade in southern Arkansas overseen by government contractor L3Harris Technologies that overwhelmed the agency's telecommunications network.
JPMorgan said longer-than-usual service times on Monday stemmed from a software bug in on-premise hardware systems.
Agencies and businesses have ruled out cyber attacks, but the routine patching alibi hasn't satisfied some skeptics, and lawmakers are calling for more transparency.
Sen. Mark Warner, D-Va., on Tuesday used the recent incidents to make the case for an AI safety bill. House Minority Leader Hakeem Jeffries, D-N.Y., acknowledged that it's "too premature" to conclude malicious activity but called for a congressional briefing.
"I think it's time for the administration to come up to the Hill and explain themselves so we can be informed about the steps that need to be taken and we can inform the people of the United States of America," he said during a press conference on Tuesday.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/17/apple-microsoft-faa-jpmorgan-outages.html",
    publishedAt: "2026-11-17T20:38:19+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 8,
  },
  {
    id: "wall-street-s-fear-gauge-is-surging-agai-bd581328",
    title: "Wall Street's fear gauge is surging again and this time it's not just about AI jitters",
    titleJa: "Wall Street's fear gauge is surging again and this time it's not just about AI jitters",
    summaryJa: "There's a bull market... in fear.Faced with a barrage of headlines from nationwide tech outages to Nvidia earnings and Anthropic's initial public offering, traders on Tuesday piled into protective put options on the S&P 500 Index at a rate that suggests fear beyond just an AI-specific correction.",
    bodyOriginal: `There's a bull market... in fear.
Faced with a barrage of headlines from nationwide tech outages to Nvidia earnings and Anthropic's initial public offering, traders on Tuesday piled into protective put options on the S&P 500 Index at a rate that suggests fear beyond just an AI-specific correction.
The Cboe Volatility Index (VIX) surged nearly 5 points to a high of 27.7 at the worst of Tuesday's selling and the ratio of put to call volumes on the SPDR S&P 500 ETF (SPY) hit 1.5, the highest since the first week of April, according to Barchart data. The 'VIX' was last still hovering above 26.
With the VIX climbing four days in a row, the volatility gauge hasn't traded under 16 since Oct. 16, arguably trending higher as the S&P 500 slips below this month's lows, trading under 7,300 for the lowest price for the benchmark equity gauge since June. Cboe's three-month volatility gauge, VIX3M, briefly touched the highest since April.
While Nvidia earnings are contributing to the uncertainty – the stock's options currently imply more than a 7% move after its report, the biggest in almost two years – volatility in the S&P 500 jumped more than in the Nasdaq 100 Tuesday, pointing to a more widespread fear among investors.
"SPX vol is expanding faster than NDX vol, as SPX vol is coming from a lower base," Eric Metz, CIO, SpiderRock Advisors for BlackRock, said via email. "Today, the market is pricing acute near-term stress in large-caps broadly, but tech-specific fear is still notable.
Even within the technology cohort, Tuesday's laggards took on a different tone. Software stocks declined the most ahead of Anthropic's IPO, with options volume on the iShares Expanded Tech-Software Sector ETF (IGV) surging to almost four times the 30-day average, according to Cboe LiveVol data. Salesforce was hardest hit, with put contracts outpacing calls on twice the average options volume.
"There's a lot of reasons to be risk-off," said Noel Smith, co-CIO of Kai Asset Management. "This is a market-wide phenomenon today that's not just AI stocks."
To be sure, bulls weren't totally absent from the session, with the Nasdaq 100 Index holding its November low and VIX still under its Nov. 5 high of 28.4.
"While vol is now at a relatively elevated level, we have not seen much fear in the options market," said VolSignals' Matthew Nadel, citing fixed-strike volatility in S&P 500 options, which measures volatility changes across specific options strikes. "We have seen a pretty decent move higher in SPX fixed strike vol, however the move up in vol has been mostly orderly."`,
    bodyJa: `There's a bull market... in fear.
Faced with a barrage of headlines from nationwide tech outages to Nvidia earnings and Anthropic's initial public offering, traders on Tuesday piled into protective put options on the S&P 500 Index at a rate that suggests fear beyond just an AI-specific correction.
The Cboe Volatility Index (VIX) surged nearly 5 points to a high of 27.7 at the worst of Tuesday's selling and the ratio of put to call volumes on the SPDR S&P 500 ETF (SPY) hit 1.5, the highest since the first week of April, according to Barchart data. The 'VIX' was last still hovering above 26.
With the VIX climbing four days in a row, the volatility gauge hasn't traded under 16 since Oct. 16, arguably trending higher as the S&P 500 slips below this month's lows, trading under 7,300 for the lowest price for the benchmark equity gauge since June. Cboe's three-month volatility gauge, VIX3M, briefly touched the highest since April.
While Nvidia earnings are contributing to the uncertainty – the stock's options currently imply more than a 7% move after its report, the biggest in almost two years – volatility in the S&P 500 jumped more than in the Nasdaq 100 Tuesday, pointing to a more widespread fear among investors.
"SPX vol is expanding faster than NDX vol, as SPX vol is coming from a lower base," Eric Metz, CIO, SpiderRock Advisors for BlackRock, said via email. "Today, the market is pricing acute near-term stress in large-caps broadly, but tech-specific fear is still notable.
Even within the technology cohort, Tuesday's laggards took on a different tone. Software stocks declined the most ahead of Anthropic's IPO, with options volume on the iShares Expanded Tech-Software Sector ETF (IGV) surging to almost four times the 30-day average, according to Cboe LiveVol data. Salesforce was hardest hit, with put contracts outpacing calls on twice the average options volume.
"There's a lot of reasons to be risk-off," said Noel Smith, co-CIO of Kai Asset Management. "This is a market-wide phenomenon today that's not just AI stocks."
To be sure, bulls weren't totally absent from the session, with the Nasdaq 100 Index holding its November low and VIX still under its Nov. 5 high of 28.4.
"While vol is now at a relatively elevated level, we have not seen much fear in the options market," said VolSignals' Matthew Nadel, citing fixed-strike volatility in S&P 500 options, which measures volatility changes across specific options strikes. "We have seen a pretty decent move higher in SPX fixed strike vol, however the move up in vol has been mostly orderly."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/17/wall-streets-fear-gauge-is-surging-again-and-this-time-its-not-just-about-ai-jitters.html",
    publishedAt: "2026-11-17T20:28:07+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 6,
  },
  {
    id: "speed-camera-fault-may-have-allowed-driv-e7e06137",
    title: "Speed camera fault may have allowed drivers to escape fines",
    titleJa: "Speed camera fault may have allowed drivers to escape fines",
    summaryJa: "The Home Office has revoked approval that allowed footage from speed cameras to be used in evidence.",
    bodyOriginal: `Speed camera fault may have allowed drivers to escape fines
- Published
Further problems with the accuracy of speed cameras on English roads have been uncovered which may have allowed drivers to slip through the cracks and escape fines.
National Highways discovered issues with speed cameras last year, affecting 154 out of 400 cameras but, following an investigation, said it had found another fault on units monitoring roads including those running between Huntingdon and Cambridge.
The Home Office has revoked approval that allows footage from the cameras to be used as evidence in legal proceedings. US firm Verra Mobility operates the cameras but National Highways said it will now end the contract.
Roads minister Justin Madders said: "We can't take chances with this.
"If we're going to prosecute people, we need to be confident the system is working as it should. That's why we've taken the action we have."
In a statement, Verra Mobility said it "remains fully committed to delivering reliable, innovative technology that helps make roads safer".
The fault affected all of the variable speed cameras on smart motorways, and a section of the A14 between Huntingdon and Cambridge as well as the A1 approach junction to the A14.
A spokesperson for National Highways said that Verra's camera system had been selected on the basis that it maintained Home Office approval.
The agency said that since that was no longer the case "we are ending our contractual relationship to use the cameras for enforcement".
It added: "We are considering all further commercial and legal options that may be appropriate."
The BBC has contacted Verra Mobility for comment.
Madders said that the enforcement of speed limits continues to be conducted through a range of different tactics, including mobile cameras as well as marked and unmarked police patrols.
But he admitted that the camera system will not be fully fixed until sometime next year.
Rod Dennis, senior policy officer at the RAC motoring organisation, said: "Malfunctioning speed cameras on smart motorways do more than just let speeding drivers get away with breaking the law and endangering lives – they further undermine confidence in the very types of road we know drivers already have serious misgivings about."
There are 4,000 cameras across the entire road network.
In December 2025, National Highways, which runs England's motorways, blamed an "anomaly" in how variable speed cameras were interacting with speed limit signs on some A roads and motorways.
For example, on a road where the speed limit increases, a driver may see a sign showing 60mph but the camera recording it may still be working on the basis of a previous 40mph speed limit.
The fault led to 2,650 wrongful speed camera activations between 2021 and the end of last year.
Those who had been wrongfully fined have been reimbursed.
As National Highways continued to test the system, it discovered a further problem "relating to how some of these cameras may activate in specific and rare circumstances".
It said that according to its calculations, "the circumstances in which the latest issue could occur are extremely rare, and there is no evidence to suggest it has impacted enforcement".
Nevertheless, it said it was "taking immediate steps to ensure compliance is maintained at relevant locations".
It said it would out further traffic officer patrols in place to monitor the sites.
Get in touch
Have you been affected by issues covered in this story? Share your experiences.
- Published16 December 2025
- Published12 February`,
    bodyJa: `Speed camera fault may have allowed drivers to escape fines
- Published
Further problems with the accuracy of speed cameras on English roads have been uncovered which may have allowed drivers to slip through the cracks and escape fines.
National Highways discovered issues with speed cameras last year, affecting 154 out of 400 cameras but, following an investigation, said it had found another fault on units monitoring roads including those running between Huntingdon and Cambridge.
The Home Office has revoked approval that allows footage from the cameras to be used as evidence in legal proceedings. US firm Verra Mobility operates the cameras but National Highways said it will now end the contract.
Roads minister Justin Madders said: "We can't take chances with this.
"If we're going to prosecute people, we need to be confident the system is working as it should. That's why we've taken the action we have."
In a statement, Verra Mobility said it "remains fully committed to delivering reliable, innovative technology that helps make roads safer".
The fault affected all of the variable speed cameras on smart motorways, and a section of the A14 between Huntingdon and Cambridge as well as the A1 approach junction to the A14.
A spokesperson for National Highways said that Verra's camera system had been selected on the basis that it maintained Home Office approval.
The agency said that since that was no longer the case "we are ending our contractual relationship to use the cameras for enforcement".
It added: "We are considering all further commercial and legal options that may be appropriate."
The BBC has contacted Verra Mobility for comment.
Madders said that the enforcement of speed limits continues to be conducted through a range of different tactics, including mobile cameras as well as marked and unmarked police patrols.
But he admitted that the camera system will not be fully fixed until sometime next year.
Rod Dennis, senior policy officer at the RAC motoring organisation, said: "Malfunctioning speed cameras on smart motorways do more than just let speeding drivers get away with breaking the law and endangering lives – they further undermine confidence in the very types of road we know drivers already have serious misgivings about."
There are 4,000 cameras across the entire road network.
In December 2025, National Highways, which runs England's motorways, blamed an "anomaly" in how variable speed cameras were interacting with speed limit signs on some A roads and motorways.
For example, on a road where the speed limit increases, a driver may see a sign showing 60mph but the camera recording it may still be working on the basis of a previous 40mph speed limit.
The fault led to 2,650 wrongful speed camera activations between 2021 and the end of last year.
Those who had been wrongfully fined have been reimbursed.
As National Highways continued to test the system, it discovered a further problem "relating to how some of these cameras may activate in specific and rare circumstances".
It said that according to its calculations, "the circumstances in which the latest issue could occur are extremely rare, and there is no evidence to suggest it has impacted enforcement".
Nevertheless, it said it was "taking immediate steps to ensure compliance is maintained at relevant locations".
It said it would out further traffic officer patrols in place to monitor the sites.
Get in touch
Have you been affected by issues covered in this story? Share your experiences.
- Published16 December 2025
- Published12 February`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c5y4j7z373kzo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-17T20:04:54+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/a189/live/29535f50-e28a-11f1-b166-176de21e2352.jpg",
    readTime: 9,
  },
  {
    id: "jensen-huang-says-he-would-be-honoured-t-941e05d6",
    title: "Jensen Huang says he would be 'honoured' to return as Nvidia CEO if board asked him",
    titleJa: "Jensen Huang says he would be 'honoured' to return as Nvidia CEO if board asked him",
    summaryJa: "Huang says he has had an \"outpouring\" of calls from investors and others calling for him to return.",
    bodyOriginal: `Jensen Huang says he would be 'honoured' to return as Nvidia CEO if board asked him
- Published
Jensen Huang said he would be "honoured" to return as the boss of tech giant Nvidia if the board asked him to, in his first public comments since his shock resignation.
"I created problems for the Board that I deeply regret. I own my mistakes completely," Huang said on X, days after reports he had extramarital affairs, including with an alleged Chinese spy.
He said he had an "outpouring" of calls from company employees, investors and others calling for him to return as CEO of Nvidia.
But, as the BBC reported on Monday, Nvidia's board is not considering bringing him back to lead the company.
The prospect of Huang returning at this point looks unlikely.
The company's board is investigating his conduct, which includes an alleged affair with an Nvidia executive.
The AI chip giant is set to report its financial results later on Tuesday, during which the company's interim chief executive, Collette Kress, may address the situation with Huang.
Beyond the internal Nvidia investigation, Huang's affair with a woman suspected of being an asset for Beijing is set to see the billionaire questioned before multiple committees of US lawmakers in the weeks ahead.
The Nvidia founder said he had "made serious mistakes in my personal life".
Nonetheless, Huang's statement appeared to show some hope he would be able to move past the major corporate scandal.
Huang said people have continued to "reach out to me directly as the company navigates complex technology, market, competitive, and geopolitical dynamics".
"If the board of directors decides that my return is in the best interest of our shareholders, our employees, the company, and America, I would be honoured to answer these calls and return as CEO," Huang added.
Many technology executives in recent days have praised Huang's role in the artificial intelligence boom. A petition began circulating online over the weekend calling for his reinstatement at the company.
Yet, by Monday, many executives were not openly calling for Huang's return.
Brad Gerstner, a major tech investor who knows Huang personally and also holds a significant stake in Nvidia, last week wrote an open letter saying that Nvidia could consider Huang's reinstatement.
On Monday, Gerstner said during an event hosted by Semafor that his letter had been misunderstood and the investigation into Huang's conduct needed to run its course.
While Gerstner questioned the facts around Huang's departure, he added: "I don't know to what degree he misled the board. If I was on a board I would take that very seriously. Let's be clear no one is above the law."`,
    bodyJa: `Jensen Huang says he would be 'honoured' to return as Nvidia CEO if board asked him
- Published
Jensen Huang said he would be "honoured" to return as the boss of tech giant Nvidia if the board asked him to, in his first public comments since his shock resignation.
"I created problems for the Board that I deeply regret. I own my mistakes completely," Huang said on X, days after reports he had extramarital affairs, including with an alleged Chinese spy.
He said he had an "outpouring" of calls from company employees, investors and others calling for him to return as CEO of Nvidia.
But, as the BBC reported on Monday, Nvidia's board is not considering bringing him back to lead the company.
The prospect of Huang returning at this point looks unlikely.
The company's board is investigating his conduct, which includes an alleged affair with an Nvidia executive.
The AI chip giant is set to report its financial results later on Tuesday, during which the company's interim chief executive, Collette Kress, may address the situation with Huang.
Beyond the internal Nvidia investigation, Huang's affair with a woman suspected of being an asset for Beijing is set to see the billionaire questioned before multiple committees of US lawmakers in the weeks ahead.
The Nvidia founder said he had "made serious mistakes in my personal life".
Nonetheless, Huang's statement appeared to show some hope he would be able to move past the major corporate scandal.
Huang said people have continued to "reach out to me directly as the company navigates complex technology, market, competitive, and geopolitical dynamics".
"If the board of directors decides that my return is in the best interest of our shareholders, our employees, the company, and America, I would be honoured to answer these calls and return as CEO," Huang added.
Many technology executives in recent days have praised Huang's role in the artificial intelligence boom. A petition began circulating online over the weekend calling for his reinstatement at the company.
Yet, by Monday, many executives were not openly calling for Huang's return.
Brad Gerstner, a major tech investor who knows Huang personally and also holds a significant stake in Nvidia, last week wrote an open letter saying that Nvidia could consider Huang's reinstatement.
On Monday, Gerstner said during an event hosted by Semafor that his letter had been misunderstood and the investigation into Huang's conduct needed to run its course.
While Gerstner questioned the facts around Huang's departure, he added: "I don't know to what degree he misled the board. If I was on a board I would take that very seriously. Let's be clear no one is above the law."`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cwx2en2vrxmdo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-17T18:24:21+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/40ef/live/51fc1a30-e2aa-11f1-99a1-253766e7ad8b.jpg",
    readTime: 7,
  },
  {
    id: "u-s-officially-loses-measles-elimination-c360b7ee",
    title: "U.S. officially loses measles elimination status amid ongoing outbreaks",
    titleJa: "U.S. officially loses measles elimination status amid ongoing outbreaks",
    summaryJa: "The director of PAHO made the final call that measles is endemic — or always present — in the U.S. following 12 months of continuous transmission.",
    bodyOriginal: `The U.S. on Tuesday lost its official designation as a measles-free nation, more than 25 years after it eliminated the highly contagious virus.
The Pan American Health Organization announced the decision, which came after an independent panel of eight scientific experts convened last week to consider the country's epidemiological evidence. The director of PAHO, the regional branch of the World Health Organization, made the final call that measles is endemic — or always present — in the U.S. following 12 months of continuous transmission.
In other words, measles is spreading regularly in the country again, with ongoing outbreaks sparking new ones.
"The commission concluded that endemic measles transmission has now been reestablished in Bolivia, Mexico and the United States, and recommended that their measles elimination status be withdrawn — a recommendation which I have accepted," Dr. Jarbas Barbosa, PAHO director, said during a news briefing on Tuesday.
It's a devastating step backward for American public health, as declining childhood vaccination rates and vaccine hesitancy fuel outbreaks across the country that have sickened thousands of people and led to a tragic string of preventable deaths. Among the deaths where vaccination status was reported, all were unvaccinated.
More than 5,400 measles cases had been reported nationwide in 2026 as of mid-November, marking the country's worst outbreak in more than three decades. States have confirmed 10 deaths associated with the disease so far in 2026: seven in Pennsylvania, one in New York and two in Wisconsin.
The commission found that out of 52 U.S. states and territories it tracked, 48 experienced measles outbreaks during the reporting period between January 2025 and January 2026, PAHO Assistant Director Dr. Rhonda Sealey-Thomas said during the briefing. But Barbosa said countries are already taking action to control outbreaks, such as strengthening vaccination, surveillance and outbreak response efforts.
The U.S. in particular has ramped up vaccination efforts to close immunity gaps, particularly in areas with low immunization coverage experiencing outbreaks, said Dr. Daniel Salas, executive manager of PAHO's Special Program for Comprehensive Immunization. He said PAHO expects the U.S. to present its corrective action plan in the coming weeks, outlining strategies to regain its designation.
In a Tuesday release, the Centers for Disease Control and Prevention said it will continue to ensure all communities have the resources to prevent and respond to outbreaks and is committed to working with states and other local partners to restore the U.S.'s measles elimination status.
CDC Director Dr. Erica Schwartz said in the release that the measles elimination designation "is not what protects Americans. Vaccination does." She said the agency has invested $100 million in state and local health departments to reach communities where transmission is occurring.
Last week, Schwartz told Reuters that the agency is going to be "doing the same exact thing that we've been doing today" if the U.S. loses its measles-free status.
The decision also poses a new test for the Trump administration and its Health and Human Services Secretary Robert F. Kennedy Jr., who has taken steps to change recommendations for the childhood measles, mumps and rubella, or MMR, vaccine and has a long history of questioning its safety without evidence.
CNBC previously reported on how the return of measles in the U.S. exposes weaknesses in the nation's public health system that raise concerns about the return of other eliminated diseases. The resurgence of measles exposes eroding trust in health institutions and growing challenges in persuading people to protect themselves, their children and their communities.
Public health experts previously told CNBC that the return of measles ultimately boils down to fewer children getting vaccinated.
The MMR vaccine is about 97% effective against measles after two doses, while a single dose is 93% effective, according to the CDC. Yet data aggregated by the CDC shows that vaccination coverage for that shot among U.S. kindergarteners fell to 92.4% in the 2025-2026 school year, which is below the 95% threshold public health officials generally recommend to prevent sustained transmission.
The American Medical Association urged the public to get vaccinated after PAHO's announcement.
"We must treat the current measles outbreaks as an urgent call to rebuild trust in science-based recommendations and restore strong, fully-funded public health infrastructure to protect families and communities and prevent the return of diseases once eliminated," AMA President Dr. Willie Underwood said in a statement.
In a separate statement, the pharmaceutical industry's largest lobbying group called on policymakers to provide "clear, accurate information about the seriousness of measles infection and the effectiveness of vaccines against it, restore and sustain high vaccination coverage in every community, strengthen vaccination efforts, and invest in disease surveillance and rapid outbreak response."
"We have the tools to eliminate measles again and what we need now is the commitment to use them," said Dr. Michael Ybarra, chief medical officer of the Pharmaceutical Research and Manufacturers of America.
Measles isn't just a public health threat — it's also a huge financial burden on the healthcare system, CNBC reported.
Based on this year's case count, a new tool developed by researchers at Johns Hopkins University estimates an economic cost of nearly $83 million for the outbreaks. That total includes $56 million in public health response costs, almost $25 million in lost productivity and more than $1.8 million in direct medical expenses.
The U.S. now joins Canada, Spain and the U.K., which all recently lost their measles-free status after a review by experts at the World Health Organization. While the U.S. dropped out of the WHO, it remains a member of PAHO, its Americas branch.`,
    bodyJa: `The U.S. on Tuesday lost its official designation as a measles-free nation, more than 25 years after it eliminated the highly contagious virus.
The Pan American Health Organization announced the decision, which came after an independent panel of eight scientific experts convened last week to consider the country's epidemiological evidence. The director of PAHO, the regional branch of the World Health Organization, made the final call that measles is endemic — or always present — in the U.S. following 12 months of continuous transmission.
In other words, measles is spreading regularly in the country again, with ongoing outbreaks sparking new ones.
"The commission concluded that endemic measles transmission has now been reestablished in Bolivia, Mexico and the United States, and recommended that their measles elimination status be withdrawn — a recommendation which I have accepted," Dr. Jarbas Barbosa, PAHO director, said during a news briefing on Tuesday.
It's a devastating step backward for American public health, as declining childhood vaccination rates and vaccine hesitancy fuel outbreaks across the country that have sickened thousands of people and led to a tragic string of preventable deaths. Among the deaths where vaccination status was reported, all were unvaccinated.
More than 5,400 measles cases had been reported nationwide in 2026 as of mid-November, marking the country's worst outbreak in more than three decades. States have confirmed 10 deaths associated with the disease so far in 2026: seven in Pennsylvania, one in New York and two in Wisconsin.
The commission found that out of 52 U.S. states and territories it tracked, 48 experienced measles outbreaks during the reporting period between January 2025 and January 2026, PAHO Assistant Director Dr. Rhonda Sealey-Thomas said during the briefing. But Barbosa said countries are already taking action to control outbreaks, such as strengthening vaccination, surveillance and outbreak response efforts.
The U.S. in particular has ramped up vaccination efforts to close immunity gaps, particularly in areas with low immunization coverage experiencing outbreaks, said Dr. Daniel Salas, executive manager of PAHO's Special Program for Comprehensive Immunization. He said PAHO expects the U.S. to present its corrective action plan in the coming weeks, outlining strategies to regain its designation.
In a Tuesday release, the Centers for Disease Control and Prevention said it will continue to ensure all communities have the resources to prevent and respond to outbreaks and is committed to working with states and other local partners to restore the U.S.'s measles elimination status.
CDC Director Dr. Erica Schwartz said in the release that the measles elimination designation "is not what protects Americans. Vaccination does." She said the agency has invested $100 million in state and local health departments to reach communities where transmission is occurring.
Last week, Schwartz told Reuters that the agency is going to be "doing the same exact thing that we've been doing today" if the U.S. loses its measles-free status.
The decision also poses a new test for the Trump administration and its Health and Human Services Secretary Robert F. Kennedy Jr., who has taken steps to change recommendations for the childhood measles, mumps and rubella, or MMR, vaccine and has a long history of questioning its safety without evidence.
CNBC previously reported on how the return of measles in the U.S. exposes weaknesses in the nation's public health system that raise concerns about the return of other eliminated diseases. The resurgence of measles exposes eroding trust in health institutions and growing challenges in persuading people to protect themselves, their children and their communities.
Public health experts previously told CNBC that the return of measles ultimately boils down to fewer children getting vaccinated.
The MMR vaccine is about 97% effective against measles after two doses, while a single dose is 93% effective, according to the CDC. Yet data aggregated by the CDC shows that vaccination coverage for that shot among U.S. kindergarteners fell to 92.4% in the 2025-2026 school year, which is below the 95% threshold public health officials generally recommend to prevent sustained transmission.
The American Medical Association urged the public to get vaccinated after PAHO's announcement.
"We must treat the current measles outbreaks as an urgent call to rebuild trust in science-based recommendations and restore strong, fully-funded public health infrastructure to protect families and communities and prevent the return of diseases once eliminated," AMA President Dr. Willie Underwood said in a statement.
In a separate statement, the pharmaceutical industry's largest lobbying group called on policymakers to provide "clear, accurate information about the seriousness of measles infection and the effectiveness of vaccines against it, restore and sustain high vaccination coverage in every community, strengthen vaccination efforts, and invest in disease surveillance and rapid outbreak response."
"We have the tools to eliminate measles again and what we need now is the commitment to use them," said Dr. Michael Ybarra, chief medical officer of the Pharmaceutical Research and Manufacturers of America.
Measles isn't just a public health threat — it's also a huge financial burden on the healthcare system, CNBC reported.
Based on this year's case count, a new tool developed by researchers at Johns Hopkins University estimates an economic cost of nearly $83 million for the outbreaks. That total includes $56 million in public health response costs, almost $25 million in lost productivity and more than $1.8 million in direct medical expenses.
The U.S. now joins Canada, Spain and the U.K., which all recently lost their measles-free status after a review by experts at the World Health Organization. While the U.S. dropped out of the WHO, it remains a member of PAHO, its Americas branch.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/17/us-measles-elimination-status.html",
    publishedAt: "2026-11-17T18:10:16+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "we-can-t-afford-to-hire-under-25s-say-fi-df8d8206",
    title: "We can't afford to hire under-25s, say firms. Will Milburn plans help?",
    titleJa: "We can't afford to hire under-25s, say firms. Will Milburn plans help?",
    summaryJa: "The proposal to cut employers' National Insurance costs is \"essential\" to tackling the Neet problem, one business group says.",
    bodyOriginal: `We can't afford to hire under-25s, say firms. Will Milburn plans help?
- Published
Lowering employers' National Insurance (NI) payments for those between 21 and 24, and cash incentives to take on some workers are among proposals put forward in Alan Milburn's report to get more 18-24 year-olds working.
Many companies have complained that recent increases in National Insurance and the minimum wage have made it more expensive to take on staff.
We talked to firms and business groups about the issues they face when hiring younger works and what they make of the proposals.
Costs the key issue
Cutting NI costs is "right in the sweet spot of what firms need to hit the hire button", said the Recruitment and Employment Confederation (REC).
The Milburn report proposes NI thresholds could be raised over the next five years, from £5,000 to £10,000 for those aged 21 to 24, and suggests prioritising the retail and hospitality sectors.
Bournemouth-based café owner Ben Blades says the high costs he faces currently make it difficult to employ young people with no work experience.
"My labour costs are already over 45%. We simply cannot justify the extra cost to put on an extra staff member to train someone up for three months," he says.
"In hospitality our margins have been squeezed and squeezed and squeezed"
As a result, he says it currently makes more sense to employ someone who already has experience.
Allen Simpson, chief executive of UKHospitality, says the recommendation to raise the threshold is "the right one" and "would be an immediate shot in the arm for job creation".
But the British Chambers of Commerce (BCC) argues the Milburn report does not go far enough in tackling costs facing businesses.
It says while the NI proposal is welcome, the change should be wider than just retail and hospitality, otherwise it "risks adding complexity and blocking off potential career paths".
Cash incentives
Other proposals put forward by the Milburn review include cash incentives to employ younger workers.
Employers who take on any young person who has been Neet - not in education, employment or training - for six months should receive a £3,000 payment, and small businesses - with less than 50 employees - that do so should receive an extra £2,000
There would also be an extra £2,000 payment if the young person has been in care or is disabled.
Ally Fir runs a bookshop in Westbourne, alongside her partner Matt, and thinks more state support is needed.
She says incentivised schemes for small business "would help us to employ more, especially young people. If a scheme like that was going we'd jump on it right away."
Fir says she gets job applications "every single day". She'd like to take more people on but "it is the cost of employing people that makes that impossible".
Tom Parsons has already had experience of using government schemes to employ young people at his design consultancy, Aetha, in Poole, Dorset.
The Kickstart Scheme in 2020 meant he could take on two young people in fully funded six-month job placements offering 25 hours a week.
"One of them stayed with us for five years and the other one I think about three years. And it completely changed the game for them," Tom told the BBC. "So if there was a scheme like that, again, that would really help us."
He says he wants to employ young people but costs remain a huge barrier.
Where are the most jobs for 18-24 year-olds?
- Published7 hours ago
Why Milburn's Neets reforms will only save £200m a year by 2036
- Published7 hours ago
Guaranteed hours a concern
One of the government's flagship employment rights reforms risks weakening the hiring of young people, according to Milburn's report.
Ministers are abolishing what they call ''exploitative'' zero-hours contracts and replacing them with guaranteed hours contracts which would be based on the number of hours people normally work.
Much of the detail is yet to be finalised but the Employment Rights Act is due to be enacted next year.
Milburn is concerned that the changes could cause problems "at a time when the youth labour market is already weak'.'
The REC said companies were "particularly worried" over the guaranteed hours measure.
It added that addressing the Neets problem gave ministers "the perfect opportunity" to reconsider the issue.
Help getting staff
Young people should have a legal right to a route into education, training or work, and would be supported to do so under an "opportunity guarantee", Milburn has proposed.
This could help firms which are struggling to recruit. Thirty-five-year-old Dean Greene, a sales director at waste management facility Williams Environmental, says it's tricky finding staff.
"We didn't get many applicants for it at all," says Greene, referencing an ad for a marketing and sales role.
"There wasn't a huge uptake from that sort of 16-to-24 range," he adds.
He thinks the lack of applicants may be because the waste industry is perceived as "mucky and dirty", but he is confident many would be interested if they knew the job was available.
Pointing to himself as an example of progressing in the industry, he tells me how he started as an admin officer scanning paperwork at 18 before remaining with the company for 17 years.
Get in touch
Share your experiences and ask your questions.`,
    bodyJa: `We can't afford to hire under-25s, say firms. Will Milburn plans help?
- Published
Lowering employers' National Insurance (NI) payments for those between 21 and 24, and cash incentives to take on some workers are among proposals put forward in Alan Milburn's report to get more 18-24 year-olds working.
Many companies have complained that recent increases in National Insurance and the minimum wage have made it more expensive to take on staff.
We talked to firms and business groups about the issues they face when hiring younger works and what they make of the proposals.
Costs the key issue
Cutting NI costs is "right in the sweet spot of what firms need to hit the hire button", said the Recruitment and Employment Confederation (REC).
The Milburn report proposes NI thresholds could be raised over the next five years, from £5,000 to £10,000 for those aged 21 to 24, and suggests prioritising the retail and hospitality sectors.
Bournemouth-based café owner Ben Blades says the high costs he faces currently make it difficult to employ young people with no work experience.
"My labour costs are already over 45%. We simply cannot justify the extra cost to put on an extra staff member to train someone up for three months," he says.
"In hospitality our margins have been squeezed and squeezed and squeezed"
As a result, he says it currently makes more sense to employ someone who already has experience.
Allen Simpson, chief executive of UKHospitality, says the recommendation to raise the threshold is "the right one" and "would be an immediate shot in the arm for job creation".
But the British Chambers of Commerce (BCC) argues the Milburn report does not go far enough in tackling costs facing businesses.
It says while the NI proposal is welcome, the change should be wider than just retail and hospitality, otherwise it "risks adding complexity and blocking off potential career paths".
Cash incentives
Other proposals put forward by the Milburn review include cash incentives to employ younger workers.
Employers who take on any young person who has been Neet - not in education, employment or training - for six months should receive a £3,000 payment, and small businesses - with less than 50 employees - that do so should receive an extra £2,000
There would also be an extra £2,000 payment if the young person has been in care or is disabled.
Ally Fir runs a bookshop in Westbourne, alongside her partner Matt, and thinks more state support is needed.
She says incentivised schemes for small business "would help us to employ more, especially young people. If a scheme like that was going we'd jump on it right away."
Fir says she gets job applications "every single day". She'd like to take more people on but "it is the cost of employing people that makes that impossible".
Tom Parsons has already had experience of using government schemes to employ young people at his design consultancy, Aetha, in Poole, Dorset.
The Kickstart Scheme in 2020 meant he could take on two young people in fully funded six-month job placements offering 25 hours a week.
"One of them stayed with us for five years and the other one I think about three years. And it completely changed the game for them," Tom told the BBC. "So if there was a scheme like that, again, that would really help us."
He says he wants to employ young people but costs remain a huge barrier.
Where are the most jobs for 18-24 year-olds?
- Published7 hours ago
Why Milburn's Neets reforms will only save £200m a year by 2036
- Published7 hours ago
Guaranteed hours a concern
One of the government's flagship employment rights reforms risks weakening the hiring of young people, according to Milburn's report.
Ministers are abolishing what they call ''exploitative'' zero-hours contracts and replacing them with guaranteed hours contracts which would be based on the number of hours people normally work.
Much of the detail is yet to be finalised but the Employment Rights Act is due to be enacted next year.
Milburn is concerned that the changes could cause problems "at a time when the youth labour market is already weak'.'
The REC said companies were "particularly worried" over the guaranteed hours measure.
It added that addressing the Neets problem gave ministers "the perfect opportunity" to reconsider the issue.
Help getting staff
Young people should have a legal right to a route into education, training or work, and would be supported to do so under an "opportunity guarantee", Milburn has proposed.
This could help firms which are struggling to recruit. Thirty-five-year-old Dean Greene, a sales director at waste management facility Williams Environmental, says it's tricky finding staff.
"We didn't get many applicants for it at all," says Greene, referencing an ad for a marketing and sales role.
"There wasn't a huge uptake from that sort of 16-to-24 range," he adds.
He thinks the lack of applicants may be because the waste industry is perceived as "mucky and dirty", but he is confident many would be interested if they knew the job was available.
Pointing to himself as an example of progressing in the industry, he tells me how he started as an admin officer scanning paperwork at 18 before remaining with the company for 17 years.
Get in touch
Share your experiences and ask your questions.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c6d01e8m15mko?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-17T15:56:04+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/1236/live/f4363760-e29e-11f1-a094-5fdc692f3e33.png",
    readTime: 10,
  },
  {
    id: "homebuilder-sentiment-plunges-to-14-year-dbaac29d",
    title: "Homebuilder sentiment plunges to 14-year low, leading more builders to drop prices",
    titleJa: "Homebuilder sentiment plunges to 14-year low, leading more builders to drop prices",
    summaryJa: "Homebuilder sentiment fell to a 14-year low amid high mortgage rates and higher prices for energy, labor and materials. That caused more builder price cuts.",
    bodyOriginal: `Sentiment among U.S. homebuilders dropped to the lowest level in 14 years, as higher mortgage rates, higher costs for energy, materials and labor, as well as weaker consumer confidence, led to more builders cutting prices.
Builder confidence in the single-family housing market fell four points to 25, according to the National Association of Home Builders/Wells Fargo Housing Market Index, or HMI. That is the lowest since April 2012, when the market was just recovering from the housing crash and foreclosure crisis. Last November, the index stood at 38.
Mortgage rates pulled back slightly in October, but surged higher again last week. The average rate on the 30-year fixed hit 7.51% on Monday, according to Mortgage News Daily. Last year at this time it was 6.38%.
Of the HMI's three components, the index measuring current sales conditions fell six points to 28, and future sales expectations dropped two points to 30. Buyer traffic declined two points to 16 — its lowest level in 15 years, excluding the start of the pandemic in 2020.
"Builders are confronting multiple challenges in today's economy," Bill Owens, NAHB chairman and a home builder and remodeler from Worthington, Ohio, said in a release. "Stepped-up immigration enforcement is keeping legal workers off job sites, deepening labor shortages and driving up costs. Higher fuel prices are prompting subcontractors to raise their rates sharply, and with fewer buyers in the market, more builders are scaling back construction."
More builders are now cutting prices as they try to get buyers in the door. In November, 46% of them reduced prices, the highest share in the post-Covid period, according to the report. The share of builders using sales incentives also hit a post-Covid high of 68%. That was the 20th consecutive month in which at least 60% of builders used them.
"The housing market faces a range of supply-side challenges, including building material costs pushed higher by tariffs, an ongoing shortage of construction workers and excessive regulations that undermine housing affordability," Robert Dietz, NAHB's chief economist, said in the release. "Mortgage rates above 7%, softer consumer confidence and an uncertain economic outlook are holding buyers back."
In the three-month moving averages for regional HMI scores, the Northeast dropped four points to 34, the Midwest fell five points to 35, the South fell three points to 27, and the West posted a three-point decline to 23.`,
    bodyJa: `Sentiment among U.S. homebuilders dropped to the lowest level in 14 years, as higher mortgage rates, higher costs for energy, materials and labor, as well as weaker consumer confidence, led to more builders cutting prices.
Builder confidence in the single-family housing market fell four points to 25, according to the National Association of Home Builders/Wells Fargo Housing Market Index, or HMI. That is the lowest since April 2012, when the market was just recovering from the housing crash and foreclosure crisis. Last November, the index stood at 38.
Mortgage rates pulled back slightly in October, but surged higher again last week. The average rate on the 30-year fixed hit 7.51% on Monday, according to Mortgage News Daily. Last year at this time it was 6.38%.
Of the HMI's three components, the index measuring current sales conditions fell six points to 28, and future sales expectations dropped two points to 30. Buyer traffic declined two points to 16 — its lowest level in 15 years, excluding the start of the pandemic in 2020.
"Builders are confronting multiple challenges in today's economy," Bill Owens, NAHB chairman and a home builder and remodeler from Worthington, Ohio, said in a release. "Stepped-up immigration enforcement is keeping legal workers off job sites, deepening labor shortages and driving up costs. Higher fuel prices are prompting subcontractors to raise their rates sharply, and with fewer buyers in the market, more builders are scaling back construction."
More builders are now cutting prices as they try to get buyers in the door. In November, 46% of them reduced prices, the highest share in the post-Covid period, according to the report. The share of builders using sales incentives also hit a post-Covid high of 68%. That was the 20th consecutive month in which at least 60% of builders used them.
"The housing market faces a range of supply-side challenges, including building material costs pushed higher by tariffs, an ongoing shortage of construction workers and excessive regulations that undermine housing affordability," Robert Dietz, NAHB's chief economist, said in the release. "Mortgage rates above 7%, softer consumer confidence and an uncertain economic outlook are holding buyers back."
In the three-month moving averages for regional HMI scores, the Northeast dropped four points to 34, the Midwest fell five points to 35, the South fell three points to 27, and the West posted a three-point decline to 23.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/17/homebuilder-sentiment-plunges-to-14-year-low-leading-more-builders-to-drop-prices.html",
    publishedAt: "2026-11-17T15:36:43+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 6,
  },
  {
    id: "how-new-us-chip-restrictions-on-south-ea-d40a4115",
    title: "How new US chip restrictions on South East Asia will hit China",
    titleJa: "How new US chip restrictions on South East Asia will hit China",
    summaryJa: "The new rules restrict chip exports and also access to their computing power, which China relies on heavily.",
    bodyOriginal: `How new US chip restrictions on South East Asia will hit China
- Published
As US President Donald Trump heads to China, his administration has renewed efforts to curb Beijing's access to advanced semiconductors.
On Monday, Washington announced new interim rules that will increase scrutiny of data centre operators in Singapore, Malaysia, Thailand, Indonesia and Brazil.
The move not only restricts the export of advanced chips, but also access to their computing power, which Chinese firms currently rent abroad to train artificial intelligence (AI) models.
South East Asian countries in particular have invested heavily in data centres to power their AI ambitions - and Chinese firms seeking computing power overseas have been a key market.
But now these firms will need a US government licence to buy advanced chips from Nvidia or other American chipmakers. This allows Washington to monitor if those chips are being used to serve Chinese companies, or being smuggled to China.
This poses a fresh challenge for Beijing, which has become deeply dependent on compute from abroad in the wake of US export restrictions. At least 30% of China's advanced AI computing power is projected to come from renting overseas or smuggling in 2027, according to research by the Institute for Progress, external, a US-based think-tank.
China's foreign ministry called the new rules "economic coercion" and said Beijing "will take necessary measures to firmly safeguard its own legitimate rights and interests".
A blow to Asia's AI boom
This is also a problem for South East Asian economies where large numbers of data centres have sprung up recently. Some of the firms behind them are accused of helping China evade US export controls on advanced chips.
One of those is Singaporean data centre firm Megaspeed, whose former director Alice Huang is suspected of being a Chinese spy. Calls for tighter export controls have grown after Nvidia's Jensen Huang admited to an affair with her and resigned as CEO.
Megaspeed, the biggest buyer of Nvidia's chips in South East Asia, is accused of illegally smuggling chips to Chinese companies after purchasing them for use in data centres in Malaysia, Indonesia and Thailand.
The company has denied these allegations, defended its business as "legitimate and lawful", and said it has "retained external legal counsel to conduct a thorough internal investigation". It also said Alice Huang stepped down from her role as director in late 2023 and left the firm last year.
The US Commerce Department's Bureau of Industry and Security, however, has said Brazil and the four South East Asian nations "present a higher-than-normal risk of diversion" of the chips that Washington wants to keep out of China's hands.
The new measures are aimed at ensuring sensitive US technology "cannot be circumvented through remote computing arrangements involving data centers in third countries," the bureau added. Licences will be issued on a "case-by-case basis", it said.
Countries like Malaysia and Thailand whose data centre roll out has been heavily driven by Chinese buyers could be hit hardest, says international trade expert Naoise McDonagh from Australia's Edith Cowan University.
But the new rules are unlikely to derail the data centre boom as a whole, says Reema Bhattacharya from advisory firm Verisk Maplecroft, adding that investment backed by major tech firms and clearly identifiable customers should "remain relatively resilient".
Singapore was an early adopter of data centres but when it began limiting new construction, investment flowed to neighbours Malaysia and Thailand. Johor in Malaysia and Batam in Indonesia have also approved billions of dollars worth of data centres to catch the spillover demand.
These countries have been offering incentives such as cheaper land to attract foreign investment, including from Chinese tech giants Alibaba and Tencent.
But now, the region could find it harder to get hold of advanced chips.
The BBC has contacted Indonesia, Malaysia and Thailand for comment.
Singapore said it is "engaging relevant US authorities" to understand the new rules better, and is "exploring how to facilitate trusted access" for local firms.
A spokesperson for Brazil's Ministry of Development, Industry, Trade and Services said it is aware of the US announcement and it "is closely monitoring any potential developments regarding this measure".
Malaysia previously said it welcomes data centre investment but "will not allow itself to be used to get around export controls".
A headache for China
The new rules also come just ahead of Trump's meeting with Chinese leader Xi Jinping in Shenzhen this week.
Beijing has made self-sufficiency in tech a national priority and needs the best chips to build powerful AI models.
Chinese firms DeepSeek and MoonShot have come close to US rivals like Anthropic and OpenAI. So much so that The Institute for Progress estimates top US AI models lead the best Chinese platforms by only about six and half months.
"This is despite US AI companies having significantly better compute access and financing," it said.
Still, China needs advanced US chips to ensure its best AI models are competitive, experts tell the BBC.
The new restrictions on South East Asia and Brazil have taken away "one of the more practical routes Chinese AI developers had to accessing frontier computing power," Bhattacharya said.
But tighter restrictions could also push Chinese firms towards domestic semiconductors and further drive advancement at home.
That has been a longstanding dilemma for Washington, McDonagh said: whether to keep selling chips to China to retain its reliance on the US, or restrict access and risk further spurring Chinese innovation.
Related topics
- Published12 October
- Published22 September
- Published3 September`,
    bodyJa: `How new US chip restrictions on South East Asia will hit China
- Published
As US President Donald Trump heads to China, his administration has renewed efforts to curb Beijing's access to advanced semiconductors.
On Monday, Washington announced new interim rules that will increase scrutiny of data centre operators in Singapore, Malaysia, Thailand, Indonesia and Brazil.
The move not only restricts the export of advanced chips, but also access to their computing power, which Chinese firms currently rent abroad to train artificial intelligence (AI) models.
South East Asian countries in particular have invested heavily in data centres to power their AI ambitions - and Chinese firms seeking computing power overseas have been a key market.
But now these firms will need a US government licence to buy advanced chips from Nvidia or other American chipmakers. This allows Washington to monitor if those chips are being used to serve Chinese companies, or being smuggled to China.
This poses a fresh challenge for Beijing, which has become deeply dependent on compute from abroad in the wake of US export restrictions. At least 30% of China's advanced AI computing power is projected to come from renting overseas or smuggling in 2027, according to research by the Institute for Progress, external, a US-based think-tank.
China's foreign ministry called the new rules "economic coercion" and said Beijing "will take necessary measures to firmly safeguard its own legitimate rights and interests".
A blow to Asia's AI boom
This is also a problem for South East Asian economies where large numbers of data centres have sprung up recently. Some of the firms behind them are accused of helping China evade US export controls on advanced chips.
One of those is Singaporean data centre firm Megaspeed, whose former director Alice Huang is suspected of being a Chinese spy. Calls for tighter export controls have grown after Nvidia's Jensen Huang admited to an affair with her and resigned as CEO.
Megaspeed, the biggest buyer of Nvidia's chips in South East Asia, is accused of illegally smuggling chips to Chinese companies after purchasing them for use in data centres in Malaysia, Indonesia and Thailand.
The company has denied these allegations, defended its business as "legitimate and lawful", and said it has "retained external legal counsel to conduct a thorough internal investigation". It also said Alice Huang stepped down from her role as director in late 2023 and left the firm last year.
The US Commerce Department's Bureau of Industry and Security, however, has said Brazil and the four South East Asian nations "present a higher-than-normal risk of diversion" of the chips that Washington wants to keep out of China's hands.
The new measures are aimed at ensuring sensitive US technology "cannot be circumvented through remote computing arrangements involving data centers in third countries," the bureau added. Licences will be issued on a "case-by-case basis", it said.
Countries like Malaysia and Thailand whose data centre roll out has been heavily driven by Chinese buyers could be hit hardest, says international trade expert Naoise McDonagh from Australia's Edith Cowan University.
But the new rules are unlikely to derail the data centre boom as a whole, says Reema Bhattacharya from advisory firm Verisk Maplecroft, adding that investment backed by major tech firms and clearly identifiable customers should "remain relatively resilient".
Singapore was an early adopter of data centres but when it began limiting new construction, investment flowed to neighbours Malaysia and Thailand. Johor in Malaysia and Batam in Indonesia have also approved billions of dollars worth of data centres to catch the spillover demand.
These countries have been offering incentives such as cheaper land to attract foreign investment, including from Chinese tech giants Alibaba and Tencent.
But now, the region could find it harder to get hold of advanced chips.
The BBC has contacted Indonesia, Malaysia and Thailand for comment.
Singapore said it is "engaging relevant US authorities" to understand the new rules better, and is "exploring how to facilitate trusted access" for local firms.
A spokesperson for Brazil's Ministry of Development, Industry, Trade and Services said it is aware of the US announcement and it "is closely monitoring any potential developments regarding this measure".
Malaysia previously said it welcomes data centre investment but "will not allow itself to be used to get around export controls".
A headache for China
The new rules also come just ahead of Trump's meeting with Chinese leader Xi Jinping in Shenzhen this week.
Beijing has made self-sufficiency in tech a national priority and needs the best chips to build powerful AI models.
Chinese firms DeepSeek and MoonShot have come close to US rivals like Anthropic and OpenAI. So much so that The Institute for Progress estimates top US AI models lead the best Chinese platforms by only about six and half months.
"This is despite US AI companies having significantly better compute access and financing," it said.
Still, China needs advanced US chips to ensure its best AI models are competitive, experts tell the BBC.
The new restrictions on South East Asia and Brazil have taken away "one of the more practical routes Chinese AI developers had to accessing frontier computing power," Bhattacharya said.
But tighter restrictions could also push Chinese firms towards domestic semiconductors and further drive advancement at home.
That has been a longstanding dilemma for Washington, McDonagh said: whether to keep selling chips to China to retain its reliance on the US, or restrict access and risk further spurring Chinese innovation.
Related topics
- Published12 October
- Published22 September
- Published3 September`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cwq6e2qgvmlgo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-17T14:25:45+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/bfea/live/8fbafe20-e225-11f1-ae7e-97d0d3a43181.jpg",
    readTime: 10,
  },
  {
    id: "which-areas-have-the-most-jobs-for-16-24-8d601789",
    title: "Which areas have the most jobs for 16-24 year-olds? Use our look-up to find out",
    titleJa: "Which areas have the most jobs for 16-24 year-olds? Use our look-up to find out",
    summaryJa: "How many jobs are there where you live and in which sectors are you most likely to find an opening?",
    bodyOriginal: `Which areas have the most jobs for 16-24 year-olds? Use our look-up to find out
- Published
If you're one of the nearly one million people aged 16-24 not in education, employment or training - otherwise known as "Neet" - then you might be wondering where to start.
Under-25s should be guaranteed job placements or training to help them find permanent work, a major review aimed at cutting the number of Neets will say.
But how many jobs are there where you live and in which sectors are you most likely to find an opening?
How many job vacancies are there?
There is no official measure of how many vacancies are suitable for young people, but across the whole economy there were 690,000 jobs available in the August to October period this year, which is the lowest number since early 2021.
The Covid pandemic led to huge swings in the number of job vacancies available as companies reacted to shutdowns and then reopened as restrictions were lifted.
Stripping out the fluctuations seen during the pandemic, the number of vacancies is now at its lowest level for 12 years.
Apprenticeships have often been a way for people to get their first taste of employment.
In England the number of people starting apprenticeships has risen in recent years, although this has been driven by an increase in those aged 25 and over after schemes for older workers were fully rolled out in 2008.
The number of people aged 24 and under starting apprenticeships in England in 2025 was 172,230, down from a peak of 291,300 in 2012.
Where are the available jobs?
Where you live will often have a big impact on your ability to find a job.
We have used online job adverts to help identify the number of vacancies suitable for young people in the area they live, relative to the size of the local population.
The Institute for Public Policy Research (IPPR) think tank used AI to help identify the jobs, which were broadly defined as roles requiring relatively low experience or education.
According to its analysis, South Oxfordshire had 387 suitable vacancies per 1,000 18 to 24-year-olds in the area - the most of any local authority. Rotherham had the least, at 53 per 1,000.
Use this tool to check out the situation in your area. The data for London is only available for the region as a whole and is not broken down by individual councils.
Which sectors have the most entry-level jobs?
Even if there are jobs available in your area, you might not find one in the sector you want to work in.
The sector with the highest average number of entry-level vacancies in the year to October was teaching, with most of those jobs being for teaching assistants, learning support and cover supervisor roles, according to jobs website Adzuna.
The next largest was hospitality and catering, traditionally an area where younger people get their first experience of work.
Adzuna, a major online jobs website, includes adverts for full-time roles marked as entry-level, those asking for up to two years' experience, graduate roles, internships and apprenticeships.
Accounting and finance had the third-highest number of job openings.
What are the typical rates of pay?
Figures on salaries for vacancies can be patchy because many employers do not include them in job adverts.
Prime Minister Andy Burnham recently urged businesses to start publishing salaries ahead of plans to make pay details compulsory in adverts.
Only about 40% of Adzuna's jobs data for the year to October stated a salary, although that figure varies widely by sector.
Here are the average salaries for jobs in the sectors with the largest number of entry-level jobs, according to Adzuna. The highest average salary is £30,530 in engineering, while social care has the lowest at £25,880.`,
    bodyJa: `Which areas have the most jobs for 16-24 year-olds? Use our look-up to find out
- Published
If you're one of the nearly one million people aged 16-24 not in education, employment or training - otherwise known as "Neet" - then you might be wondering where to start.
Under-25s should be guaranteed job placements or training to help them find permanent work, a major review aimed at cutting the number of Neets will say.
But how many jobs are there where you live and in which sectors are you most likely to find an opening?
How many job vacancies are there?
There is no official measure of how many vacancies are suitable for young people, but across the whole economy there were 690,000 jobs available in the August to October period this year, which is the lowest number since early 2021.
The Covid pandemic led to huge swings in the number of job vacancies available as companies reacted to shutdowns and then reopened as restrictions were lifted.
Stripping out the fluctuations seen during the pandemic, the number of vacancies is now at its lowest level for 12 years.
Apprenticeships have often been a way for people to get their first taste of employment.
In England the number of people starting apprenticeships has risen in recent years, although this has been driven by an increase in those aged 25 and over after schemes for older workers were fully rolled out in 2008.
The number of people aged 24 and under starting apprenticeships in England in 2025 was 172,230, down from a peak of 291,300 in 2012.
Where are the available jobs?
Where you live will often have a big impact on your ability to find a job.
We have used online job adverts to help identify the number of vacancies suitable for young people in the area they live, relative to the size of the local population.
The Institute for Public Policy Research (IPPR) think tank used AI to help identify the jobs, which were broadly defined as roles requiring relatively low experience or education.
According to its analysis, South Oxfordshire had 387 suitable vacancies per 1,000 18 to 24-year-olds in the area - the most of any local authority. Rotherham had the least, at 53 per 1,000.
Use this tool to check out the situation in your area. The data for London is only available for the region as a whole and is not broken down by individual councils.
Which sectors have the most entry-level jobs?
Even if there are jobs available in your area, you might not find one in the sector you want to work in.
The sector with the highest average number of entry-level vacancies in the year to October was teaching, with most of those jobs being for teaching assistants, learning support and cover supervisor roles, according to jobs website Adzuna.
The next largest was hospitality and catering, traditionally an area where younger people get their first experience of work.
Adzuna, a major online jobs website, includes adverts for full-time roles marked as entry-level, those asking for up to two years' experience, graduate roles, internships and apprenticeships.
Accounting and finance had the third-highest number of job openings.
What are the typical rates of pay?
Figures on salaries for vacancies can be patchy because many employers do not include them in job adverts.
Prime Minister Andy Burnham recently urged businesses to start publishing salaries ahead of plans to make pay details compulsory in adverts.
Only about 40% of Adzuna's jobs data for the year to October stated a salary, although that figure varies widely by sector.
Here are the average salaries for jobs in the sectors with the largest number of entry-level jobs, according to Adzuna. The highest average salary is £30,530 in engineering, while social care has the lowest at £25,880.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cw3djdjk5d7ko?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-17T07:21:37+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/ca90/live/0c02f160-e1ac-11f1-8ee3-23d0d09d2796.jpg",
    readTime: 9,
  },
  {
    id: "nvidia-warns-chip-buyers-of-legal-risks-dca9aa1d",
    title: "Nvidia warns chip buyers of legal risks tied to China AI access, sources tell CNBC",
    titleJa: "Nvidia warns chip buyers of legal risks tied to China AI access, sources tell CNBC",
    summaryJa: "Nvidia warned its customers that new legislation on Chinese companies remotely accessing its artificial-intelligence chips could expose it and them to U.S. \"legal action,\" sources told CNBC.The chip giant is facing increasing scrutiny from U.S. lawmakers over Chinese companies' access to its advanced chips, which U.S. export controls restrict from going to China.",
    bodyOriginal: `Nvidia warned its customers that new legislation on Chinese companies remotely accessing its artificial-intelligence chips could expose it and them to U.S. "legal action," sources told CNBC.
The chip giant is facing increasing scrutiny from U.S. lawmakers over Chinese companies' access to its advanced chips, which U.S. export controls restrict from going to China.
Nvidia messaged chip buyers in recent months to caution that the proposed Remote Access Security Act, or RASA, would give the U.S. government broader authority to control access to cloud services in the same way as physical hardware, potentially exposing both parties to legal risk, according to two people with direct knowledge of the matter. The people asked not to be named while discussing private communications.
It also said that, for now, it would not sell its chips to customers who rent more than 50% of the graphics processing units, or GPUs, to Chinese companies, the people said.
Separately, the Financial Times reported earlier this month that Nvidia verbally told data-center clients to direct at least 51% of their services to non-Chinese customers under future contracts.
Regulators have had limited powers to control companies' access to those chips through cloud services hosted overseas.
RASA passed the House of Representatives in January but has not yet passed the Senate. Remote access to the chips has provoked the ire of President Donald Trump's administration, which has sought to keep the chips out of China to maintain the U.S. lead in the AI race.
CNBC reported on Nov. 5 that Chinese lab Moonshot AI sought access to Nvidia chips through data centers in Europe. The Trump administration previously singled the company out, accusing it in July of accessing the chips through centers in East Asia.
The U.S. Commerce Department's Bureau of Industry and Security, or BIS, announced on Monday an interim final rule designed to prevent Chinese companies' remote access to AI chips.
Nvidia and BIS did not respond to a request for comment.
Nvidia under pressure
On Sunday, U.S. Treasury Secretary Scott Bessent called for a "dramatic shakeup" at Nvidia after Jensen Huang's shock departure as CEO, amid reports of an extramarital affair with a woman U.S. authorities reportedly suspect of spying for China.
Bessent suggested other Nvidia executives should face scrutiny over the chip giant's compliance with export controls.
"I want to keep coming back to what was the culture at Nvidia, and were they pressing these seemingly illicit sales to goose their revenues and their earnings?" Bessent told Fox News.
In an August securities filing, Nvidia said it sought to "strictly comply with all applicable export control regulators" but did not have "physical control of our products after sale" and relied on its customers' and partners' compliance programs.
Huang has been asked to testify before the Senate Banking Committee on Dec. 3.`,
    bodyJa: `Nvidia warned its customers that new legislation on Chinese companies remotely accessing its artificial-intelligence chips could expose it and them to U.S. "legal action," sources told CNBC.
The chip giant is facing increasing scrutiny from U.S. lawmakers over Chinese companies' access to its advanced chips, which U.S. export controls restrict from going to China.
Nvidia messaged chip buyers in recent months to caution that the proposed Remote Access Security Act, or RASA, would give the U.S. government broader authority to control access to cloud services in the same way as physical hardware, potentially exposing both parties to legal risk, according to two people with direct knowledge of the matter. The people asked not to be named while discussing private communications.
It also said that, for now, it would not sell its chips to customers who rent more than 50% of the graphics processing units, or GPUs, to Chinese companies, the people said.
Separately, the Financial Times reported earlier this month that Nvidia verbally told data-center clients to direct at least 51% of their services to non-Chinese customers under future contracts.
Regulators have had limited powers to control companies' access to those chips through cloud services hosted overseas.
RASA passed the House of Representatives in January but has not yet passed the Senate. Remote access to the chips has provoked the ire of President Donald Trump's administration, which has sought to keep the chips out of China to maintain the U.S. lead in the AI race.
CNBC reported on Nov. 5 that Chinese lab Moonshot AI sought access to Nvidia chips through data centers in Europe. The Trump administration previously singled the company out, accusing it in July of accessing the chips through centers in East Asia.
The U.S. Commerce Department's Bureau of Industry and Security, or BIS, announced on Monday an interim final rule designed to prevent Chinese companies' remote access to AI chips.
Nvidia and BIS did not respond to a request for comment.
Nvidia under pressure
On Sunday, U.S. Treasury Secretary Scott Bessent called for a "dramatic shakeup" at Nvidia after Jensen Huang's shock departure as CEO, amid reports of an extramarital affair with a woman U.S. authorities reportedly suspect of spying for China.
Bessent suggested other Nvidia executives should face scrutiny over the chip giant's compliance with export controls.
"I want to keep coming back to what was the culture at Nvidia, and were they pressing these seemingly illicit sales to goose their revenues and their earnings?" Bessent told Fox News.
In an August securities filing, Nvidia said it sought to "strictly comply with all applicable export control regulators" but did not have "physical control of our products after sale" and relied on its customers' and partners' compliance programs.
Huang has been asked to testify before the Senate Banking Committee on Dec. 3.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/17/nvidia-china-cloud-ai-chip-access.html",
    publishedAt: "2026-11-17T07:07:35+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 7,
  },
  {
    id: "iran-escalates-threats-as-third-u-s-carr-2cce7256",
    title: "Iran escalates threats as third U.S. carrier arrives in Middle East, tanker struck in Hormuz",
    titleJa: "Iran escalates threats as third U.S. carrier arrives in Middle East, tanker struck in Hormuz",
    summaryJa: "Iran has ratcheted up threats against U.S. forces as a third American aircraft carrier arrived in the Gulf, stoking fears of a resumption of military tensions.",
    bodyOriginal: `Iran has ratcheted up threats against U.S. forces and commercial shipping as a third American aircraft carrier arrived in the Gulf, stoking fears of renewed escalation in the nine-month conflict.
Iran's Revolutionary Guards Navy warned shipping companies against using the U.S.-backed southern route through the Strait of Hormuz, describing it as fully closed and a "minefield of fire," according to regional media outlets citing a statement from the force.
Brig. Gen. Mohammad Akrami-Nia, a spokesperson for the Iranian Army, said the Strait of Hormuz would not reopen until "the enemy accepts Iran's conditions."
Separately, CNN reported Tuesday that new U.S. intelligence indicated Iran was developing plans that could target senior Trump administration officials with a so-called dirty bomb, or a chemical weapon in Washington, D.C. CNBC cannot immediately verify the report.
The intelligence was characterized as an effort by Iran to develop options rather than evidence of an imminent attack, CNN reported. U.S. officials have held several meetings over the past week to consider how to respond to the potential threat.
The heightened security concerns come after Iranian threats prompted Treasury Secretary Scott Bessent to relocate to military housing last week.
"We remain vigilant, monitoring any and all potential threats, but at this time there are no credible threats to the homeland," a White House spokesperson said in a statement to CNBC.
Oil prices inched lower in Asian trading Tuesday, with international benchmark Brent crude futures dropping 0.7% to $91.8 a barrel and U.S. West Texas Intermediate futures falling 0.7% to $85.1 a barrel.
War escalation looms
On Tuesday, the U.K. Maritime Trade Operations said a tanker was struck by an unidentified projectile in the Strait of Hormuz and subsequently caught fire. The agency did not say who was responsible and urged vessels to transit with caution and report suspicious activity.
Separately, the Iranian navy said four oil tankers had struck mines and caught fire in the eastern Strait of Hormuz over the previous 24 hours.
The escalation in Tehran's rhetoric came as the USS Theodore Roosevelt arrived in the Gulf region on Sunday, joining the USS George H.W. Bush and USS George Washington. That added to U.S. firepower near Iran even as President Donald Trump said the war was winding down.
Trump has sent mixed signals regarding the conflict in recent weeks, alternating between declaring it could soon end and warning of renewed large-scale strikes if efforts to reach a deal fail.
After meeting Qatari Prime Minister Sheikh Mohammed bin Abdulrahman Al Thani last week, Trump said the war with Iran could end "fairly soon," adding that it "militarily is effectively over."
Tehran said Sunday that it launched six drones at a U.S. air-defense radar at Bahrain's Riffa air base, the second attack Iran claimed against the kingdom in three days. Bahrain's military said it intercepted and destroyed several Iranian aerial attacks.
Secretary of State Marco Rubio condemned the attacks in a call Monday with Bahraini Foreign Minister Abdullatif bin Rashid Al Zayani and reaffirmed Washington's commitment to the security of Bahrain and other Gulf partners.
The conflict began in late February when the U.S. and Israel attacked Iran, prompting Tehran to retaliate with strikes on Israel and Gulf states hosting American military bases. Indirect talks between Washington and Tehran through Qatar have since appeared to run into a stalemate as warring powers disagreed over terms to reach a lasting peace deal.
'Misread' of Iran's resistance
Washington appears unwilling to accept several of Iran's demands to end the war, including lifting the U.S. naval blockade on its southern ports and lifting sanctions, while stressing that Iran cannot possess a nuclear weapon.
Iran is likely to continue escalating attacks on tankers and container ships, along with occasional strikes on U.S. military targets, in an effort to pressure Washington into offering concessions, said Ian Bremmer, president and founder of Eurasia Group. In response, Washington will likely expand its blockade on Iran's maritime and inland trade routes, he said.
"The presumption is that eventually Iran can't handle the economic pressure and will accept better terms," Bremmer said, calling that view a "misread of the Iranian leadership and their capacity to resist."
Over the coming year, Iran is likely to intensify efforts to disrupt shipping through the Strait of Hormuz, Bremmer said.`,
    bodyJa: `Iran has ratcheted up threats against U.S. forces and commercial shipping as a third American aircraft carrier arrived in the Gulf, stoking fears of renewed escalation in the nine-month conflict.
Iran's Revolutionary Guards Navy warned shipping companies against using the U.S.-backed southern route through the Strait of Hormuz, describing it as fully closed and a "minefield of fire," according to regional media outlets citing a statement from the force.
Brig. Gen. Mohammad Akrami-Nia, a spokesperson for the Iranian Army, said the Strait of Hormuz would not reopen until "the enemy accepts Iran's conditions."
Separately, CNN reported Tuesday that new U.S. intelligence indicated Iran was developing plans that could target senior Trump administration officials with a so-called dirty bomb, or a chemical weapon in Washington, D.C. CNBC cannot immediately verify the report.
The intelligence was characterized as an effort by Iran to develop options rather than evidence of an imminent attack, CNN reported. U.S. officials have held several meetings over the past week to consider how to respond to the potential threat.
The heightened security concerns come after Iranian threats prompted Treasury Secretary Scott Bessent to relocate to military housing last week.
"We remain vigilant, monitoring any and all potential threats, but at this time there are no credible threats to the homeland," a White House spokesperson said in a statement to CNBC.
Oil prices inched lower in Asian trading Tuesday, with international benchmark Brent crude futures dropping 0.7% to $91.8 a barrel and U.S. West Texas Intermediate futures falling 0.7% to $85.1 a barrel.
War escalation looms
On Tuesday, the U.K. Maritime Trade Operations said a tanker was struck by an unidentified projectile in the Strait of Hormuz and subsequently caught fire. The agency did not say who was responsible and urged vessels to transit with caution and report suspicious activity.
Separately, the Iranian navy said four oil tankers had struck mines and caught fire in the eastern Strait of Hormuz over the previous 24 hours.
The escalation in Tehran's rhetoric came as the USS Theodore Roosevelt arrived in the Gulf region on Sunday, joining the USS George H.W. Bush and USS George Washington. That added to U.S. firepower near Iran even as President Donald Trump said the war was winding down.
Trump has sent mixed signals regarding the conflict in recent weeks, alternating between declaring it could soon end and warning of renewed large-scale strikes if efforts to reach a deal fail.
After meeting Qatari Prime Minister Sheikh Mohammed bin Abdulrahman Al Thani last week, Trump said the war with Iran could end "fairly soon," adding that it "militarily is effectively over."
Tehran said Sunday that it launched six drones at a U.S. air-defense radar at Bahrain's Riffa air base, the second attack Iran claimed against the kingdom in three days. Bahrain's military said it intercepted and destroyed several Iranian aerial attacks.
Secretary of State Marco Rubio condemned the attacks in a call Monday with Bahraini Foreign Minister Abdullatif bin Rashid Al Zayani and reaffirmed Washington's commitment to the security of Bahrain and other Gulf partners.
The conflict began in late February when the U.S. and Israel attacked Iran, prompting Tehran to retaliate with strikes on Israel and Gulf states hosting American military bases. Indirect talks between Washington and Tehran through Qatar have since appeared to run into a stalemate as warring powers disagreed over terms to reach a lasting peace deal.
'Misread' of Iran's resistance
Washington appears unwilling to accept several of Iran's demands to end the war, including lifting the U.S. naval blockade on its southern ports and lifting sanctions, while stressing that Iran cannot possess a nuclear weapon.
Iran is likely to continue escalating attacks on tankers and container ships, along with occasional strikes on U.S. military targets, in an effort to pressure Washington into offering concessions, said Ian Bremmer, president and founder of Eurasia Group. In response, Washington will likely expand its blockade on Iran's maritime and inland trade routes, he said.
"The presumption is that eventually Iran can't handle the economic pressure and will accept better terms," Bremmer said, calling that view a "misread of the Iranian leadership and their capacity to resist."
Over the coming year, Iran is likely to intensify efforts to disrupt shipping through the Strait of Hormuz, Bremmer said.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/17/iran-war-trump-hormuz-oil-.html",
    publishedAt: "2026-11-17T05:51:13+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "analysis-the-fed-s-chairman-sees-an-ai-r-cf390478",
    title: "Analysis: The Fed's chairman sees an AI revolution coming. Now he has to figure out what it means",
    titleJa: "Analysis: The Fed's chairman sees an AI revolution coming. Now he has to figure out what it means",
    summaryJa: "Kevin Warsh sees AI at a turning point. He faces tough questions on jobs and interest rates.",
    bodyOriginal: `Artificial intelligence is about to sweep through the economy. The Federal Reserve is bracing for impact.
"We are at a hinge point in the U.S. economy," Fed Chairman Kevin Warsh said at a conference he convened in San Francisco on Monday. But exactly when and how the economy could turn, and what that means for interest rates and inflation, isn't yet clear.
The meeting of Warsh's AI task force saw the new Fed chairman publicly asking the questions Americans will ultimately expect him to answer. He hinted at a few of his private views on whether white-collar workers could soon face massive job losses, but he largely left the speculation to an array of experts he has assembled to advise the Fed.
With the technology racing ahead, Warsh won't be able to put off giving his own answers much longer. AI lab Anthropic plans to price the shares for its initial public offering on Wednesday and could raise as much as $64 billion at a $1.4 trillion valuation. Vast spending from AI firms is prompting the Fed to contemplate raising interest rates in December to slow down the rate of price increases as the tech sector heats up the economy.
Meanwhile Americans are souring on some aspects of the technology. The Nov. 3 midterms saw voters enact an array of state-level measures to slow down construction of the data centers that are essential to powering AI.
Warsh moderated three out of four sessions at Monday's event and was involved in selecting the speakers. Among them was one of the few prominent Democrats who was willing to speak out against that anti-data center trend.
It is "a very troubling sign" that so many anti-data center measures passed in the midterms, Gina Raimondo said. She is a former secretary of commerce under President Joe Biden and a former governor of Rhode Island.
Stopping AI "would be very bad for America" and for the people who voted for the measures, Raimondo said.
Warsh didn't say whether he shares that view, and how it would translate into monetary policy isn't exactly clear.
The event was an unusual one for the Fed. The central bank employs a small army of Ph.D. economists who can rapidly weigh in on anything affecting the U.S. and global economies. But in keeping with his longstanding critiques of the Fed as insular and outdated, Warsh has chosen to draw expertise from outside the institution to help it figure out how to think about what AI will do to productivity and jobs.
Warsh has assembled a task force on that issue, alongside four others devoted to aspects of Fed policymaking.
The public heard Monday from one of the three official members of the task force: venture capitalist Marc Andreessen. Warsh went to Stanford University with Andreessen's wife, and the two have been longtime friends. Another task force member, Stanford economist Chad Jones, is on leave and working at Anthropic and couldn't speak during the company's blackout period ahead of the IPO. The third, Xbox CEO Asha Sharma, didn't attend the event.
Andreessen is hugely optimistic about the promise of AI as a technology, but believes the government won't let Americans experience its full effects. Heavy regulation in areas such as healthcare and education mean technology can't replace people's jobs in those sectors, he said.
"To the extent our economy is a free-market economy, then maybe you could see the, let's say, extremely rapid displacement scenarios people are talking about," Andreessen said. "But we've mostly outlawed the kind of job transition that … both the utopians the doomers talk about."
Warsh returned repeatedly to one scenario for the economy that draws on past experience. The so-called China shock unfolded after that country joined the World Trade Organization in 2001 and moved heavily into low-cost manufacturing. Americans saw prices on clothing and furniture drop rapidly, for instance, but at the cost of severe job losses. One widely cited estimate found the U.S. lost a million manufacturing jobs and 2.4 million jobs overall in the years that followed.
Warsh suggested to one of the panelists that the widespread adoption of AI might produce its own version of the China shock, this time focused on service workers.
"I don't want to hold this too tightly," Warsh said. "But if in some ways over the last generation or generation and a half, the China shock, for lack of a better word, lowered prices of goods in the United States, the way that I heard you talking about the philosophy of this new technology is it might do something for services."
In other words, AI could do, say, legal or administrative work more cheaply than a human. That could lower prices but put many people out of a job.
Warsh asked panelists whether "we should expect disinflation over the medium term, from what AI could do to services."
They largely suggested it was possible, which could mean the Fed might eventually want to lower interest rates over the long term.
But at the end of the day, it is Warsh and his fellow Fed members who will need to have conviction on the answer.
There are still many steps between the task force discussion and any kind of change in Fed policy. First, the three task force members will have to assemble their points of view into a report for Warsh sometime in the next few months. Then the Fed itself will need to debate those results and decide whether or how to use them to shape monetary policy.
But with AI growing bigger every day, the Fed may need to make up its mind sooner rather than later.`,
    bodyJa: `Artificial intelligence is about to sweep through the economy. The Federal Reserve is bracing for impact.
"We are at a hinge point in the U.S. economy," Fed Chairman Kevin Warsh said at a conference he convened in San Francisco on Monday. But exactly when and how the economy could turn, and what that means for interest rates and inflation, isn't yet clear.
The meeting of Warsh's AI task force saw the new Fed chairman publicly asking the questions Americans will ultimately expect him to answer. He hinted at a few of his private views on whether white-collar workers could soon face massive job losses, but he largely left the speculation to an array of experts he has assembled to advise the Fed.
With the technology racing ahead, Warsh won't be able to put off giving his own answers much longer. AI lab Anthropic plans to price the shares for its initial public offering on Wednesday and could raise as much as $64 billion at a $1.4 trillion valuation. Vast spending from AI firms is prompting the Fed to contemplate raising interest rates in December to slow down the rate of price increases as the tech sector heats up the economy.
Meanwhile Americans are souring on some aspects of the technology. The Nov. 3 midterms saw voters enact an array of state-level measures to slow down construction of the data centers that are essential to powering AI.
Warsh moderated three out of four sessions at Monday's event and was involved in selecting the speakers. Among them was one of the few prominent Democrats who was willing to speak out against that anti-data center trend.
It is "a very troubling sign" that so many anti-data center measures passed in the midterms, Gina Raimondo said. She is a former secretary of commerce under President Joe Biden and a former governor of Rhode Island.
Stopping AI "would be very bad for America" and for the people who voted for the measures, Raimondo said.
Warsh didn't say whether he shares that view, and how it would translate into monetary policy isn't exactly clear.
The event was an unusual one for the Fed. The central bank employs a small army of Ph.D. economists who can rapidly weigh in on anything affecting the U.S. and global economies. But in keeping with his longstanding critiques of the Fed as insular and outdated, Warsh has chosen to draw expertise from outside the institution to help it figure out how to think about what AI will do to productivity and jobs.
Warsh has assembled a task force on that issue, alongside four others devoted to aspects of Fed policymaking.
The public heard Monday from one of the three official members of the task force: venture capitalist Marc Andreessen. Warsh went to Stanford University with Andreessen's wife, and the two have been longtime friends. Another task force member, Stanford economist Chad Jones, is on leave and working at Anthropic and couldn't speak during the company's blackout period ahead of the IPO. The third, Xbox CEO Asha Sharma, didn't attend the event.
Andreessen is hugely optimistic about the promise of AI as a technology, but believes the government won't let Americans experience its full effects. Heavy regulation in areas such as healthcare and education mean technology can't replace people's jobs in those sectors, he said.
"To the extent our economy is a free-market economy, then maybe you could see the, let's say, extremely rapid displacement scenarios people are talking about," Andreessen said. "But we've mostly outlawed the kind of job transition that … both the utopians the doomers talk about."
Warsh returned repeatedly to one scenario for the economy that draws on past experience. The so-called China shock unfolded after that country joined the World Trade Organization in 2001 and moved heavily into low-cost manufacturing. Americans saw prices on clothing and furniture drop rapidly, for instance, but at the cost of severe job losses. One widely cited estimate found the U.S. lost a million manufacturing jobs and 2.4 million jobs overall in the years that followed.
Warsh suggested to one of the panelists that the widespread adoption of AI might produce its own version of the China shock, this time focused on service workers.
"I don't want to hold this too tightly," Warsh said. "But if in some ways over the last generation or generation and a half, the China shock, for lack of a better word, lowered prices of goods in the United States, the way that I heard you talking about the philosophy of this new technology is it might do something for services."
In other words, AI could do, say, legal or administrative work more cheaply than a human. That could lower prices but put many people out of a job.
Warsh asked panelists whether "we should expect disinflation over the medium term, from what AI could do to services."
They largely suggested it was possible, which could mean the Fed might eventually want to lower interest rates over the long term.
But at the end of the day, it is Warsh and his fellow Fed members who will need to have conviction on the answer.
There are still many steps between the task force discussion and any kind of change in Fed policy. First, the three task force members will have to assemble their points of view into a report for Warsh sometime in the next few months. Then the Fed itself will need to debate those results and decide whether or how to use them to shape monetary policy.
But with AI growing bigger every day, the Fed may need to make up its mind sooner rather than later.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/16/kevin-warsh-fed-ai-jobs-productivity-interest-rateshtml.html",
    publishedAt: "2026-11-17T00:42:33+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "customers-report-service-outages-at-majo-7bea3e59",
    title: "Customers report service outages at major US banks",
    titleJa: "Customers report service outages at major US banks",
    summaryJa: "Chase Bank, the largest US bank, said a software bug might be causing the issue, but that it was not \"systemic'\" or \"cyber-related\".",
    bodyOriginal: `Customers report service outages at major US banks
- Published
Thousands of customers at major US banks, including JP Morgan Chase, Wells Fargo and Bank of America, have reported trouble accessing services.
Chase Bank - the largest banking institution in the US - said a "software bug" in its hardware systems may have been behind the glitch and noted the impacts may have affected other banks. It added the issue was "temporary" and not "systemic" or "cyber-related".
Problems appeared to be easing for many customers by early Monday evening.
The issue comes after a string of unrelated technical problems, including a massive Microsoft outage, a network failure that grounded all US flights, and United Airlines reporting a "widespread system outage".
Problems started on Monday afternoon. There were almost 5,000 reports of problems with Chase Bank's services, according to the Downdetector website.
Clients reported issues accessing their online accounts, viewing balances and performing transactions, like bank transfers and wire transfers, according to the BBC's US media partner CBS News.
A Chase Bank customer in Texas told the outlet that he could not deposit a check at a Dallas branch on Monday, reporting that he was told his transaction could not be completed. He said a bank teller told the customer in front of him that the "system was down" but did not provide additional details.
Microsoft says services fully restored after day-long global outage
- Published3 days ago
Microsoft outage 'stark reminder' of how much we rely on tech
- Published3 days ago
Chase Bank told its customers that "some transactions are taking longer than usual to complete" but they still had "access to their accounts and funds".
The bank, a subsidiary of JP Morgan Chase, serves more than 86m customers at 5,000 branches across the US, as well as 7.4m small businesses, according to the company's webpage. It is also the top credit card issuer in the US.
The exact nature of the bug was unclear. The BBC has contacted Chase Bank.
Bank of America customers had issues at ATMs and using mobile banking services online, while US Bank customers reported issues with their online accounts and the bank's mobile app, CBS reported.
Customers using another institution, US Bank, also reported issues transferring funds and Wells Fargo customers said they had problems signing into their accounts, getting account balances and making transactions.
US Bank said some its systems were not directly affected but clients using the Zelle, a digital payment platform, received error messages saying their payments could not be sent.
Zelle has said its service is "operating as it should" and issues at other banks could be affecting payments.
Customers also reported issues with Truist, PNC and Capital One but all these companies told the BBC they have not been impacted.
As of 18:00 EST (23:00 GMT), Chase, Bank of America and US Bank had seen a fall in the number of reported outages.
Just as the banking issue affected US customers on Monday, United Airlines confirmed a "widespread system outage", which it described as "a technology issue affecting departing flights".
That issue resolved within a few hours.
The Chicago-based airline did not say what is believed to have caused the issue, but a spokesperson said it is not related to cybersecurity.
The issue did not appear to be affecting any other airlines.
The United issue is separate from the one that hit the US Federal Aviation Administration (FAA), but comes as other industries report different outages around the US.
On Friday, the FAA issued a rare nationwide a ground stop, halting all US air travel due to a telecommunication and network upgrade issues.
The halt lasted just over four hours, but the knock-on effect continues to snarl US air travel.
Additional reporting by Max Matza.
Related topics
- Published1 day ago
- Published2 days ago`,
    bodyJa: `Customers report service outages at major US banks
- Published
Thousands of customers at major US banks, including JP Morgan Chase, Wells Fargo and Bank of America, have reported trouble accessing services.
Chase Bank - the largest banking institution in the US - said a "software bug" in its hardware systems may have been behind the glitch and noted the impacts may have affected other banks. It added the issue was "temporary" and not "systemic" or "cyber-related".
Problems appeared to be easing for many customers by early Monday evening.
The issue comes after a string of unrelated technical problems, including a massive Microsoft outage, a network failure that grounded all US flights, and United Airlines reporting a "widespread system outage".
Problems started on Monday afternoon. There were almost 5,000 reports of problems with Chase Bank's services, according to the Downdetector website.
Clients reported issues accessing their online accounts, viewing balances and performing transactions, like bank transfers and wire transfers, according to the BBC's US media partner CBS News.
A Chase Bank customer in Texas told the outlet that he could not deposit a check at a Dallas branch on Monday, reporting that he was told his transaction could not be completed. He said a bank teller told the customer in front of him that the "system was down" but did not provide additional details.
Microsoft says services fully restored after day-long global outage
- Published3 days ago
Microsoft outage 'stark reminder' of how much we rely on tech
- Published3 days ago
Chase Bank told its customers that "some transactions are taking longer than usual to complete" but they still had "access to their accounts and funds".
The bank, a subsidiary of JP Morgan Chase, serves more than 86m customers at 5,000 branches across the US, as well as 7.4m small businesses, according to the company's webpage. It is also the top credit card issuer in the US.
The exact nature of the bug was unclear. The BBC has contacted Chase Bank.
Bank of America customers had issues at ATMs and using mobile banking services online, while US Bank customers reported issues with their online accounts and the bank's mobile app, CBS reported.
Customers using another institution, US Bank, also reported issues transferring funds and Wells Fargo customers said they had problems signing into their accounts, getting account balances and making transactions.
US Bank said some its systems were not directly affected but clients using the Zelle, a digital payment platform, received error messages saying their payments could not be sent.
Zelle has said its service is "operating as it should" and issues at other banks could be affecting payments.
Customers also reported issues with Truist, PNC and Capital One but all these companies told the BBC they have not been impacted.
As of 18:00 EST (23:00 GMT), Chase, Bank of America and US Bank had seen a fall in the number of reported outages.
Just as the banking issue affected US customers on Monday, United Airlines confirmed a "widespread system outage", which it described as "a technology issue affecting departing flights".
That issue resolved within a few hours.
The Chicago-based airline did not say what is believed to have caused the issue, but a spokesperson said it is not related to cybersecurity.
The issue did not appear to be affecting any other airlines.
The United issue is separate from the one that hit the US Federal Aviation Administration (FAA), but comes as other industries report different outages around the US.
On Friday, the FAA issued a rare nationwide a ground stop, halting all US air travel due to a telecommunication and network upgrade issues.
The halt lasted just over four hours, but the knock-on effect continues to snarl US air travel.
Additional reporting by Max Matza.
Related topics
- Published1 day ago
- Published2 days ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cj752wvqneq6o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-17T00:18:01+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/d633/live/6fb04df0-e212-11f1-b9ca-b9964628501b.jpg",
    readTime: 10,
  },
  {
    id: "we-couldn-t-afford-a-house-alone-so-we-b-7afee35f",
    title: "We couldn't afford a house alone, so we bought one with strangers",
    titleJa: "We couldn't afford a house alone, so we bought one with strangers",
    summaryJa: "People who can't afford to get on the housing ladder are buying homes with someone they don't know.",
    bodyOriginal: `We couldn't afford a house alone, so we bought one with strangers
- Published
When Elizabeth and Tom Wilcox realised they could never afford to buy the home they wanted for themselves and their two children, they decided to take a leap of faith.
They'd find another couple with young kids, complete strangers to them, and propose that they go halves on a property and all move in together.
Based in Vancouver, which has long had some of the highest house prices in Canada, the Wilcoxes were desperate to buy a home that had a back garden for their children to play in.
"We wanted a house with a yard that could fit a trampoline, in a walkable neighbourhood, but we couldn't afford it," says Elizabeth, a project manager in the healthcare sector.
With a budget of C$1m ($700,000; £500,000) all they could hope for was a small apartment with a balcony at best.
That was when Elizabeth came up with the idea of buying with another family.
'We've saved thousands'
They placed an advert in a local estate agent's e-newsletter, but it took two years before they finally met a family whom they clicked with – Ashley Pullman and her husband and two children.
In 2023, the Wilcoxes and the Pullmans co-bought a six-bedroom, detached house, complete with a back garden, for C$1.85m.
The two families split the deposit of C$250,000, and continue to go halves on the monthly mortgage payments of C$3,900. They also divide bills and other expenses equally, such as any necessary home repairs.
Elizabeth says the arrangement has saved both families "tens of thousands of dollars".
While there is no official data available for the number of people buying homes with people they previously didn't know, Parimal Gosal says he has seen a big increase in interest in Toronto as a response to high property prices.
Gosal is the founder and CEO of Husmates, an app and website that connects people in Canada's largest city who are looking to potentially buy a home with a stranger.
It can be seen as "a financial relationship, and that takes emotions out of it", he says.
It's unclear how common this phenomenon is elsewhere in the world. David Hollingworth, from British mortgage broker L&C, says while he hasn't come across it himself, he thinks it also happens in the UK, though is "very niche".
"I remember that before Covid-19 there was a matchmaking event in a London pub, like speed dating, for people looking to buy a house with a stranger," he says. "How successful this was I don' t know."
Three years on, the Wilcoxes and the Pullmans say their living arrangement is still working out.
While each family has some private living spaces, such as their own kitchens, they share the big basement-level living room, which includes a home gym in one corner, and a shared freezer.
"If someone says they're in the basement to work out, we know not to go there for a bit, and it's never been an issue," says Elizabeth.
Ashley agrees that there are no problems. "Maybe it's arrogance but my husband and I felt like we were the type of people who could live with strangers," she says.
'We have house meetings'
Sabrina Bowman, a freelance business consultant in Toronto, has co-owned a home with two other housemates since 2018. When she signed on the dotted line and moved in she didn't know one of the other two people.
While Sabrina says she isn't comfortable sharing the exact financial details, she says they decided to divide up the deposit and mortgage payments based on each of their levels of income.
She says any household disputes can be addressed early with open discussions. "What is important to us is having structures to communicate about everything that happens in the home."
They have regular house meetings where they discuss chores, financial issues, birthday celebrations, and any disagreements.
"It's great to see people be honest about something they may not be comfortable about and for us to find a solution to that problem," Sabrina says.
In the case of both Sabrina's house in Toronto and the Wilcox and Pullman property in Vancouver, they have legal agreements in place in case someone wants to sell up and move out.
For both homes, reasonable notice periods are specified, and for Sabrina's, the departing housemate is required to give those remaining the first opportunity to buy their share.
Toronto real estate lawyer Tanya Walker says such legal assurances are vital. "You need something legally binding instead of a bunch of emails and Facebook messages that can be too messy to collect if a dispute comes up," Walker says.
Back in Vancouver, Elizabeth says that neither family has a timeframe for how long they will live in the house. "All of us are really happy with the set-up and location so it would be hard to move.
"I can't put a price on how it felt to watch the kids jump on the trampoline for the first time, or run in circles on our patch of green grass."
Get in touch
Are you looking to get onto the property ladder? Share your experience.
- Published3 November
- Published13 October
- Published15 September`,
    bodyJa: `We couldn't afford a house alone, so we bought one with strangers
- Published
When Elizabeth and Tom Wilcox realised they could never afford to buy the home they wanted for themselves and their two children, they decided to take a leap of faith.
They'd find another couple with young kids, complete strangers to them, and propose that they go halves on a property and all move in together.
Based in Vancouver, which has long had some of the highest house prices in Canada, the Wilcoxes were desperate to buy a home that had a back garden for their children to play in.
"We wanted a house with a yard that could fit a trampoline, in a walkable neighbourhood, but we couldn't afford it," says Elizabeth, a project manager in the healthcare sector.
With a budget of C$1m ($700,000; £500,000) all they could hope for was a small apartment with a balcony at best.
That was when Elizabeth came up with the idea of buying with another family.
'We've saved thousands'
They placed an advert in a local estate agent's e-newsletter, but it took two years before they finally met a family whom they clicked with – Ashley Pullman and her husband and two children.
In 2023, the Wilcoxes and the Pullmans co-bought a six-bedroom, detached house, complete with a back garden, for C$1.85m.
The two families split the deposit of C$250,000, and continue to go halves on the monthly mortgage payments of C$3,900. They also divide bills and other expenses equally, such as any necessary home repairs.
Elizabeth says the arrangement has saved both families "tens of thousands of dollars".
While there is no official data available for the number of people buying homes with people they previously didn't know, Parimal Gosal says he has seen a big increase in interest in Toronto as a response to high property prices.
Gosal is the founder and CEO of Husmates, an app and website that connects people in Canada's largest city who are looking to potentially buy a home with a stranger.
It can be seen as "a financial relationship, and that takes emotions out of it", he says.
It's unclear how common this phenomenon is elsewhere in the world. David Hollingworth, from British mortgage broker L&C, says while he hasn't come across it himself, he thinks it also happens in the UK, though is "very niche".
"I remember that before Covid-19 there was a matchmaking event in a London pub, like speed dating, for people looking to buy a house with a stranger," he says. "How successful this was I don' t know."
Three years on, the Wilcoxes and the Pullmans say their living arrangement is still working out.
While each family has some private living spaces, such as their own kitchens, they share the big basement-level living room, which includes a home gym in one corner, and a shared freezer.
"If someone says they're in the basement to work out, we know not to go there for a bit, and it's never been an issue," says Elizabeth.
Ashley agrees that there are no problems. "Maybe it's arrogance but my husband and I felt like we were the type of people who could live with strangers," she says.
'We have house meetings'
Sabrina Bowman, a freelance business consultant in Toronto, has co-owned a home with two other housemates since 2018. When she signed on the dotted line and moved in she didn't know one of the other two people.
While Sabrina says she isn't comfortable sharing the exact financial details, she says they decided to divide up the deposit and mortgage payments based on each of their levels of income.
She says any household disputes can be addressed early with open discussions. "What is important to us is having structures to communicate about everything that happens in the home."
They have regular house meetings where they discuss chores, financial issues, birthday celebrations, and any disagreements.
"It's great to see people be honest about something they may not be comfortable about and for us to find a solution to that problem," Sabrina says.
In the case of both Sabrina's house in Toronto and the Wilcox and Pullman property in Vancouver, they have legal agreements in place in case someone wants to sell up and move out.
For both homes, reasonable notice periods are specified, and for Sabrina's, the departing housemate is required to give those remaining the first opportunity to buy their share.
Toronto real estate lawyer Tanya Walker says such legal assurances are vital. "You need something legally binding instead of a bunch of emails and Facebook messages that can be too messy to collect if a dispute comes up," Walker says.
Back in Vancouver, Elizabeth says that neither family has a timeframe for how long they will live in the house. "All of us are really happy with the set-up and location so it would be hard to move.
"I can't put a price on how it felt to watch the kids jump on the trampoline for the first time, or run in circles on our patch of green grass."
Get in touch
Are you looking to get onto the property ladder? Share your experience.
- Published3 November
- Published13 October
- Published15 September`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c5742lwdyzglo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-17T00:00:02+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/6aa8/live/134f7040-e181-11f1-9386-1b849272ca8f.jpg",
    readTime: 10,
  },
  {
    id: "openai-sued-by-california-over-hugging-f-98d80275",
    title: "OpenAI sued by California over Hugging Face attack",
    titleJa: "OpenAI sued by California over Hugging Face attack",
    summaryJa: "Attorney General Rob Bonta alleges that the artificial intelligence misled and endangered the public.",
    bodyOriginal: `OpenAI sued by California over Hugging Face attack
- Published
California Attorney General Rob Bonta sued OpenAI on Monday, alleging the ChatGPT-maker misled and endangered the public by developing artificial intelligence (AI) models without proper safeguards.
In the lawsuit, Bonta cited the July 2026 attack on the AI platform Hugging Face by experimental OpenAI agents which accessed the internet to breach that company's internal systems.
Bonta claimed OpenAI created a public nuisance and violated the state's unfair competition laws.
OpenAI spokesperson Drew Pusateri told the BBC in a statement that Bonta's lawsuit "appears to single out OpenAI over a challenge that's been identified by every major AI lab".
Other major AI developers including Anthropic, Meta, and Google have also said their models have staged similar attacks.
But Bonta's lawsuit, filed in San Francisco, where the company is headquartered, appears to be the first such suit filed by a US state.
Hundreds of OpenAI agents coordinated the Hugging Face attack over two days even though they were supposed to be contained in a safe testing environment.
The incident drew added scrutiny because the agents went as far as attempting to cover their tracks.
Bonta announced an investigation into the incident in September, and served an investigative subpoena on OpenAI as part of its probe.
"The company knowingly tested a dangerous product without proper oversight or safety procedures and misled the public about it - this disregard for public safety violated California law," Bonta said in a statement on Monday.
OpenAI said it has been transparent and responsive to the Attorney General's office.
"We take misalignment seriously, and we have engaged - and will continue to engage - constructively with the Attorney General's office to share information and advance strong, practical safety standards for the entire industry," the company said.
The company added that, since the Hugging Face incident, it has worked to understand and address "misaligned model activity" which industry figures often refer to as rogue agents.
Nathan Calvin, chief strategy officer at AI safety campaign group Encode AI, said the lawsuit "recognises something we at Encode have long raised alarms about".
"OpenAI and other companies developing frontier AI systems have safety and security practices that are insufficient to protect the public from risks that could be catastrophic," he said.
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.`,
    bodyJa: `OpenAI sued by California over Hugging Face attack
- Published
California Attorney General Rob Bonta sued OpenAI on Monday, alleging the ChatGPT-maker misled and endangered the public by developing artificial intelligence (AI) models without proper safeguards.
In the lawsuit, Bonta cited the July 2026 attack on the AI platform Hugging Face by experimental OpenAI agents which accessed the internet to breach that company's internal systems.
Bonta claimed OpenAI created a public nuisance and violated the state's unfair competition laws.
OpenAI spokesperson Drew Pusateri told the BBC in a statement that Bonta's lawsuit "appears to single out OpenAI over a challenge that's been identified by every major AI lab".
Other major AI developers including Anthropic, Meta, and Google have also said their models have staged similar attacks.
But Bonta's lawsuit, filed in San Francisco, where the company is headquartered, appears to be the first such suit filed by a US state.
Hundreds of OpenAI agents coordinated the Hugging Face attack over two days even though they were supposed to be contained in a safe testing environment.
The incident drew added scrutiny because the agents went as far as attempting to cover their tracks.
Bonta announced an investigation into the incident in September, and served an investigative subpoena on OpenAI as part of its probe.
"The company knowingly tested a dangerous product without proper oversight or safety procedures and misled the public about it - this disregard for public safety violated California law," Bonta said in a statement on Monday.
OpenAI said it has been transparent and responsive to the Attorney General's office.
"We take misalignment seriously, and we have engaged - and will continue to engage - constructively with the Attorney General's office to share information and advance strong, practical safety standards for the entire industry," the company said.
The company added that, since the Hugging Face incident, it has worked to understand and address "misaligned model activity" which industry figures often refer to as rogue agents.
Nathan Calvin, chief strategy officer at AI safety campaign group Encode AI, said the lawsuit "recognises something we at Encode have long raised alarms about".
"OpenAI and other companies developing frontier AI systems have safety and security practices that are insufficient to protect the public from risks that could be catastrophic," he said.
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c6wy4xv2mxglo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-16T23:12:24+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/ce1a/live/7c81aa70-e211-11f1-a541-6d0c391a4254.jpg",
    readTime: 6,
  },
  {
    id: "trump-s-accounts-traded-up-to-97-5-milli-dd53bd11",
    title: "Trump’s accounts traded up to $97.5 million in Nvidia as Huang gained White House access",
    titleJa: "Trump’s accounts traded up to $97.5 million in Nvidia as Huang gained White House access",
    summaryJa: "Trump’s accounts sold up to $1 million in Nvidia stock five days after he was briefed on Jensen Huang’s relationship with a suspected Chinese spy.",
    bodyOriginal: `President Donald Trump has had plenty of reason to cheer the rise of Nvidia.
The chipmaker helped propel the stock market that Trump is fond of touting. Its billionaire co-founder, Jensen Huang, became one of the president's favorite businessmen. And by the end of last year, Nvidia had become one of Trump's three largest individual stock holdings, worth between $12.5 million and $58 million, up from between $615,000 and $1.3 million a year earlier.
Since returning to the White House, Trump's investment accounts have bought or sold Nvidia shares at least 103 times — transactions worth a combined $27 million to $97.5 million, according to a new CNBC analysis of his annual and periodic financial disclosures, which were most recently updated through August.
By midday Monday, Trump's Nvidia stake, based on the value he reported holding in August, would be worth $4.5 million to $57.7 million with stock priced around $157. But the filings give broad dollar ranges for holdings rather than the number of shares, leaving his current stake unclear.
Now, Huang's resignation as Nvidia's CEO on Thursday, following revelations about his relationship with a woman suspected of spying for China and reports of affairs with company employees, has put those trades back in the spotlight.
Among them was a sale of $500,001 to $1 million on May 18, the first Monday after Trump returned from a state visit to China with Huang. Five days earlier, before Huang boarded Air Force One during a refueling stop in Alaska, Secretary of State Marco Rubio had briefed Trump on intelligence concerning Huang's relationship with the suspected spy, The New York Times reported.
Trump on Monday denied being briefed. Asked about the reported briefing from Rubio, Trump said, "I haven't heard that," adding that he did not know whether the woman, Alice Huang, was a Chinese spy.
The president's financial accounts also bought smaller amounts of Nvidia shares in the days immediately before and after the May 18 sale, part of a broader trading blitz. Such flurries have defined his second term: Trump disclosed more than 21,000 trades in 2025 alone, compared with roughly 500 during his entire first term, according to CNBC's analysis.
A White House spokesperson told CNBC independent advisors manage Trump's portfolio without his input. Trump Organization spokesperson Kimberly Benza said the arrangement is designed to "avoid even the appearance of a conflict of interest." The disclosures offer no evidence Trump directed the trades or that his advisors had access to classified intelligence.
Trump has long used the stock market as a scorecard for the economy, touting its record highs — sometimes when highs have not actually been reached — despite the turbulence caused by his tariffs and the Iran war.
"Look, we have the highest stock market we've ever had," Trump told ESPN commentator and political talk show host Stephen A. Smith on Thursday when pressed about Republicans' midterm losses.
Nvidia alone accounted for about 13.5% of the S&P 500's 2026 gains through September, according to an analysis by Choate Wealth that looked at how chip stocks have driven the year's performance.
Huang's rise in Trump's Washington has been nearly as striking as Nvidia's on Wall Street. The two have met or appeared together at least 15 times since Trump returned to office, according to a CNBC review of public records and news reports. Huang in June told The Associated Press that Trump even "calls me in the middle of the night."
It wasn't always that way.
At Trump's Jan. 20, 2025, inauguration, several Silicon Valley titans occupied prime seats, but Huang wasn't there. The two men had never met.
That changed on Jan. 31, 2025, when Huang visited the White House, capping a bruising week for Nvidia: Chinese AI startup DeepSeek had wiped $593 billion off the company's market value in a single day, according to LSEG data cited by Reuters.
Two days before the meeting, Trump's money managers bought between $1 million and $5 million in Nvidia stock.
For Huang, much of the relationship hinged on access to China. In April 2025, the administration effectively halted sales of Nvidia's H20 chips to China, prompting a $4.5 billion charge, according to an SEC filing. Huang argued that withholding U.S. chips would only accelerate China's development of its own.
The administration eventually relented. After another meeting with Trump in July 2025, Huang announced from Beijing that Nvidia expected to resume H20 sales. A week after Trump confirmed an August 2025 deal calling for 15% of the revenue from the company's chip sales to China to go to the U.S. government, his accounts also bought between $5 million and $25 million in Nvidia stock, one of several large tech investments that day.
Huang was also becoming a fixture of Trump's international diplomacy, joining him in Saudi Arabia and the U.K. Nvidia, already a $1 million donor to Trump's inaugural fund, would pledge another $25 million to his planned White House ballroom on condition of anonymity, The Washington Post first reported.
But behind the scenes, intelligence officials first briefed Trump last fall on Huang's relationship with the woman suspected of spying for China, The New York Times reported.
Trump nevertheless continued to ease restrictions on Nvidia's business in China, announcing Dec. 8 that the company could sell its more powerful H200 chips. His accounts had sold as much as $1 million in Nvidia stock four days earlier and bought more the day after.
In the first eight months of 2026, Trump's accounts made another 38 Nvidia trades worth a combined $9.4 million to $28.3 million, according to CNBC's analysis. A disclosure released Oct. 8 — the day Trump awarded Huang the National Medal of Science — showed purchases of up to $1.6 million and sales of up to $1 million in August alone.
Trump stood by Huang as Nvidia's board weighed his future last week, urging him to fight to keep his job, the Times reported.
With Huang out and Nvidia's shares tumbling, Trump described him Thursday as a "tremendous talent" who was "going through hell" — in the same interview in which he boasted of the market's record highs.
Trump is already floating a comeback for Huang, telling reporters Monday that reinstating him "certainly isn't a bad idea." But Nvidia's board is not considering his return, a person familiar with the matter told CNBC. The person asked not to be named because they were discussing internal matters."`,
    bodyJa: `President Donald Trump has had plenty of reason to cheer the rise of Nvidia.
The chipmaker helped propel the stock market that Trump is fond of touting. Its billionaire co-founder, Jensen Huang, became one of the president's favorite businessmen. And by the end of last year, Nvidia had become one of Trump's three largest individual stock holdings, worth between $12.5 million and $58 million, up from between $615,000 and $1.3 million a year earlier.
Since returning to the White House, Trump's investment accounts have bought or sold Nvidia shares at least 103 times — transactions worth a combined $27 million to $97.5 million, according to a new CNBC analysis of his annual and periodic financial disclosures, which were most recently updated through August.
By midday Monday, Trump's Nvidia stake, based on the value he reported holding in August, would be worth $4.5 million to $57.7 million with stock priced around $157. But the filings give broad dollar ranges for holdings rather than the number of shares, leaving his current stake unclear.
Now, Huang's resignation as Nvidia's CEO on Thursday, following revelations about his relationship with a woman suspected of spying for China and reports of affairs with company employees, has put those trades back in the spotlight.
Among them was a sale of $500,001 to $1 million on May 18, the first Monday after Trump returned from a state visit to China with Huang. Five days earlier, before Huang boarded Air Force One during a refueling stop in Alaska, Secretary of State Marco Rubio had briefed Trump on intelligence concerning Huang's relationship with the suspected spy, The New York Times reported.
Trump on Monday denied being briefed. Asked about the reported briefing from Rubio, Trump said, "I haven't heard that," adding that he did not know whether the woman, Alice Huang, was a Chinese spy.
The president's financial accounts also bought smaller amounts of Nvidia shares in the days immediately before and after the May 18 sale, part of a broader trading blitz. Such flurries have defined his second term: Trump disclosed more than 21,000 trades in 2025 alone, compared with roughly 500 during his entire first term, according to CNBC's analysis.
A White House spokesperson told CNBC independent advisors manage Trump's portfolio without his input. Trump Organization spokesperson Kimberly Benza said the arrangement is designed to "avoid even the appearance of a conflict of interest." The disclosures offer no evidence Trump directed the trades or that his advisors had access to classified intelligence.
Trump has long used the stock market as a scorecard for the economy, touting its record highs — sometimes when highs have not actually been reached — despite the turbulence caused by his tariffs and the Iran war.
"Look, we have the highest stock market we've ever had," Trump told ESPN commentator and political talk show host Stephen A. Smith on Thursday when pressed about Republicans' midterm losses.
Nvidia alone accounted for about 13.5% of the S&P 500's 2026 gains through September, according to an analysis by Choate Wealth that looked at how chip stocks have driven the year's performance.
Huang's rise in Trump's Washington has been nearly as striking as Nvidia's on Wall Street. The two have met or appeared together at least 15 times since Trump returned to office, according to a CNBC review of public records and news reports. Huang in June told The Associated Press that Trump even "calls me in the middle of the night."
It wasn't always that way.
At Trump's Jan. 20, 2025, inauguration, several Silicon Valley titans occupied prime seats, but Huang wasn't there. The two men had never met.
That changed on Jan. 31, 2025, when Huang visited the White House, capping a bruising week for Nvidia: Chinese AI startup DeepSeek had wiped $593 billion off the company's market value in a single day, according to LSEG data cited by Reuters.
Two days before the meeting, Trump's money managers bought between $1 million and $5 million in Nvidia stock.
For Huang, much of the relationship hinged on access to China. In April 2025, the administration effectively halted sales of Nvidia's H20 chips to China, prompting a $4.5 billion charge, according to an SEC filing. Huang argued that withholding U.S. chips would only accelerate China's development of its own.
The administration eventually relented. After another meeting with Trump in July 2025, Huang announced from Beijing that Nvidia expected to resume H20 sales. A week after Trump confirmed an August 2025 deal calling for 15% of the revenue from the company's chip sales to China to go to the U.S. government, his accounts also bought between $5 million and $25 million in Nvidia stock, one of several large tech investments that day.
Huang was also becoming a fixture of Trump's international diplomacy, joining him in Saudi Arabia and the U.K. Nvidia, already a $1 million donor to Trump's inaugural fund, would pledge another $25 million to his planned White House ballroom on condition of anonymity, The Washington Post first reported.
But behind the scenes, intelligence officials first briefed Trump last fall on Huang's relationship with the woman suspected of spying for China, The New York Times reported.
Trump nevertheless continued to ease restrictions on Nvidia's business in China, announcing Dec. 8 that the company could sell its more powerful H200 chips. His accounts had sold as much as $1 million in Nvidia stock four days earlier and bought more the day after.
In the first eight months of 2026, Trump's accounts made another 38 Nvidia trades worth a combined $9.4 million to $28.3 million, according to CNBC's analysis. A disclosure released Oct. 8 — the day Trump awarded Huang the National Medal of Science — showed purchases of up to $1.6 million and sales of up to $1 million in August alone.
Trump stood by Huang as Nvidia's board weighed his future last week, urging him to fight to keep his job, the Times reported.
With Huang out and Nvidia's shares tumbling, Trump described him Thursday as a "tremendous talent" who was "going through hell" — in the same interview in which he boasted of the market's record highs.
Trump is already floating a comeback for Huang, telling reporters Monday that reinstating him "certainly isn't a bad idea." But Nvidia's board is not considering his return, a person familiar with the matter told CNBC. The person asked not to be named because they were discussing internal matters."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/16/trump-nvidia-stock-trades-jensen-huang.html",
    publishedAt: "2026-11-16T22:37:45+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "jpmorgan-chase-says-temporary-software-b-2754926b",
    title: "JPMorgan Chase says temporary software bug is affecting consumer banking",
    titleJa: "JPMorgan Chase says temporary software bug is affecting consumer banking",
    summaryJa: "CNBC's Eamon Javers reported there was no indication of bad actors involved and likewise no indication that a bug was impacting multiple banks at the same time.",
    bodyOriginal: `JPMorgan Chase reported a "technical issue" that was affecting some consumer banking services Monday.
The bank said a "temporary issue related to a software bug in on-premise hardware systems" was causing some customer transactions to take longer than usual, though it said customers can still access their accounts and funds.
"There is no evidence it is cyber-related," a JPMorgan spokesperson said in a statement to CNBC.
"This is not a systemic issue – other banks may have been impacted by slowness in transactions only to the extent that they were a party to a transaction with us," the spokesperson said. "We're working diligently to resolve this by the end of the day today."
CNBC's Eamon Javers reported there was no indication of bad actors involved.
Still, other major banks were listed in outage reports as transactions between Chase and other institutions appeared to get held up. Users reported errors as early as 11:30 a.m. ET.
A representative for U.S. Bank said that company was "not directly impacted. However, clients attempting to send or receive Zelle payments with another financial institution may experience transaction delays."
Zelle is the peer-to-peer payments system backed by many of the largest U.S. banks, including JPMorgan.
The outage reports come days after separate, widespread issues with Microsoft Outlook and communication systems used by air traffic control centers.
— CNBC's Leslie Picker contributed to this report.`,
    bodyJa: `JPMorgan Chase reported a "technical issue" that was affecting some consumer banking services Monday.
The bank said a "temporary issue related to a software bug in on-premise hardware systems" was causing some customer transactions to take longer than usual, though it said customers can still access their accounts and funds.
"There is no evidence it is cyber-related," a JPMorgan spokesperson said in a statement to CNBC.
"This is not a systemic issue – other banks may have been impacted by slowness in transactions only to the extent that they were a party to a transaction with us," the spokesperson said. "We're working diligently to resolve this by the end of the day today."
CNBC's Eamon Javers reported there was no indication of bad actors involved.
Still, other major banks were listed in outage reports as transactions between Chase and other institutions appeared to get held up. Users reported errors as early as 11:30 a.m. ET.
A representative for U.S. Bank said that company was "not directly impacted. However, clients attempting to send or receive Zelle payments with another financial institution may experience transaction delays."
Zelle is the peer-to-peer payments system backed by many of the largest U.S. banks, including JPMorgan.
The outage reports come days after separate, widespread issues with Microsoft Outlook and communication systems used by air traffic control centers.
— CNBC's Leslie Picker contributed to this report.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/16/jpmorgan-chase-technical-issue.html",
    publishedAt: "2026-11-16T21:55:19+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 4,
  },
  {
    id: "kalshi-plans-to-launch-stock-trading-soo-eade3787",
    title: "Kalshi plans to launch stock trading soon",
    titleJa: "Kalshi plans to launch stock trading soon",
    summaryJa: "Kalshi's interest in offering stock trading shows the platform's push into traditional financial markets.",
    bodyOriginal: `Leading prediction market platform Kalshi will offer stock trading within the next few months, a person familiar with the matter told CNBC.
The platform's move to offer equity trading is the boldest so far in its ongoing push into traditional financial markets and comes amid an escalating fight by states and lawmakers against its sports trading business. Sports contracts continue to account for a large share of trading on the platform.
In September, the platform introduced perpetual futures tied to precious metals such as gold and silver after it had originally filed in July to offer beyond prediction market event contracts with the Commodity Futures Trading Commission, the federal regulator overseeing derivatives contracts. Perpetual futures are futures-style contracts that have no expiration date.
Kalshi also received approval to list perpetual futures tied to cryptocurrencies in late May.
The prediction market's stock trading offering was enabled by its purchase of broker-dealer FB Securities in July, the source said. FB Securities was founded in Delaware in 2024 and became registered with the Securities and Exchange Commission in December 2025. The broker did not respond to a request for comment.
The Wall Street Journal first reported that Kalshi plans to introduce stock trading.
Shares of Robinhood, which offers some prediction markets alongside equity trading, fell on Monday, though the stock was already lower amid a broader market sell-off. Robinhood closed down by 7.8%.
Disclosure: CNBC and Kalshi have a commercial relationship that includes customer acquisition and a minority investment.`,
    bodyJa: `Leading prediction market platform Kalshi will offer stock trading within the next few months, a person familiar with the matter told CNBC.
The platform's move to offer equity trading is the boldest so far in its ongoing push into traditional financial markets and comes amid an escalating fight by states and lawmakers against its sports trading business. Sports contracts continue to account for a large share of trading on the platform.
In September, the platform introduced perpetual futures tied to precious metals such as gold and silver after it had originally filed in July to offer beyond prediction market event contracts with the Commodity Futures Trading Commission, the federal regulator overseeing derivatives contracts. Perpetual futures are futures-style contracts that have no expiration date.
Kalshi also received approval to list perpetual futures tied to cryptocurrencies in late May.
The prediction market's stock trading offering was enabled by its purchase of broker-dealer FB Securities in July, the source said. FB Securities was founded in Delaware in 2024 and became registered with the Securities and Exchange Commission in December 2025. The broker did not respond to a request for comment.
The Wall Street Journal first reported that Kalshi plans to introduce stock trading.
Shares of Robinhood, which offers some prediction markets alongside equity trading, fell on Monday, though the stock was already lower amid a broader market sell-off. Robinhood closed down by 7.8%.
Disclosure: CNBC and Kalshi have a commercial relationship that includes customer acquisition and a minority investment.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/16/kalshi-plans-to-launch-stock-trading-soon.html",
    publishedAt: "2026-11-16T21:23:34+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "u-s-crude-oil-declines-to-85-a-barrel-on-2f504774",
    title: "U.S. crude oil declines to $85 a barrel on recovering Middle East exports",
    titleJa: "U.S. crude oil declines to $85 a barrel on recovering Middle East exports",
    summaryJa: "Oil prices are falling as forecasts project a surplus in oil in the fourth quarter",
    bodyOriginal: `Oil prices are falling Monday as shipments through the Strait of Hormuz recover and tensions between Iran and the U.S remain at a stalemate.
Brent crude fell 3.55% to $92.44 per barrel Monday while West Texas Intermediate crude slipped 3.21% to about $85.72 per barrel.
The International Energy Agency said on Friday it expects global supply to exceed 1.7 million barrels a day in the fourth quarter of 2026, reversing its earlier forecast for a deficit as Middle East exports recover faster than global demand and even as shipping attacks continue.
Meanwhile, Russia's crude oil production rose to 8.73 million barrels a day in October, a 210,000-barrel-a-day surge, according to the International Energy Agency.
Goldman Sachs said in a Sunday note it expects Brent to average $88 a barrel in 2027 and fall to $78 by December 2027 as the market returns to a surplus.
The bank believes Middle East supply to rise above its 2025 average as producers use ship-to-ship transfers and add pipeline capacity.`,
    bodyJa: `Oil prices are falling Monday as shipments through the Strait of Hormuz recover and tensions between Iran and the U.S remain at a stalemate.
Brent crude fell 3.55% to $92.44 per barrel Monday while West Texas Intermediate crude slipped 3.21% to about $85.72 per barrel.
The International Energy Agency said on Friday it expects global supply to exceed 1.7 million barrels a day in the fourth quarter of 2026, reversing its earlier forecast for a deficit as Middle East exports recover faster than global demand and even as shipping attacks continue.
Meanwhile, Russia's crude oil production rose to 8.73 million barrels a day in October, a 210,000-barrel-a-day surge, according to the International Energy Agency.
Goldman Sachs said in a Sunday note it expects Brent to average $88 a barrel in 2027 and fall to $78 by December 2027 as the market returns to a surplus.
The bank believes Middle East supply to rise above its 2025 average as producers use ship-to-ship transfers and add pipeline capacity.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/16/us-crude-oil-declines-to-87-a-barrel-on-recovering-middle-east-exports.html",
    publishedAt: "2026-11-16T20:51:28+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "anthropic-s-wall-street-whisperer-meet-c-404e88ca",
    title: "Anthropic’s Wall Street whisperer: Meet CFO Krishna Rao",
    titleJa: "Anthropic’s Wall Street whisperer: Meet CFO Krishna Rao",
    summaryJa: "Anthropic's upcoming IPO is putting finance chief Krishna Rao into the limelight.",
    bodyOriginal: `It's been a busy year for Anthropic CFO Krishna Rao.
After closing a $65 billion funding round in May, he's been readying the artificial intelligence company for what's widely expected to be a blockbuster initial public offering. The listing could value Anthropic at roughly $1.4 trillion, instantly making it one of the largest tech companies in the world.
Rao joined Anthropic in 2024, when the company was still considered an underdog to OpenAI, now its chief rival. He's known as a straight shooter and a deft operator with a relentless work ethic, according to Anthropic investors and former colleagues, and he's played a crucial role in fueling the company's historic rise.
The 43-year-old finance chief has largely stayed out of the public eye, opting to yield the spotlight to Anthropic's seven co-founders, including CEO Dario Amodei and President Daniela Amodei. But Anthropic's upcoming Nasdaq debut, which is expected to take place on Thursday, will likely push him to center stage, as public market investors and analysts hang on his every word for insight into the AI trade.
Rao has nearly two decades of experience in finance across a range of companies, including Fanatics Commerce, a sports merchandise retailer, Cedar, a healthcare payments and billing platform, Airbnb and Blackstone. But he's never taken a company public as a CFO, and the stakes are high.
Investors are still reeling after Jensen Huang resigned as CEO of Nvidia following shocking reports of three extramarital affairs. The market was already jittery on concerns that rising interest rates would make debt unaffordable for companies that need it for costly infrastructure purchases.
Against that backdrop, Rao is under pressure to deliver.
"He's a committed professional. He's integrity-based, and he's had this meteoric rise in a very, very complex set of companies," Jonathan Mildenhall, Airbnb's former marketing chief and a Fanatics board member, told CNBC in an interview. "There was nothing easy about Airbnb. There was nothing easy about Fanatics. There's nothing easy about Anthropic, and yet he makes it look so."
CNBC spoke to current Anthropic investors, Rao's friends and former colleagues for this story, many of whom asked not to be named because they were not authorized to speak publicly. Rao declined to participate in an interview through an Anthropic spokesperson.
Anthropic's straight shooter
As Anthropic's first CFO, Rao has been instrumental in helping the company raise tens of billions of dollars over the past two years.
He has made himself easily accessible to Anthropic's backers, even during fast-moving, tense discussions about allocation sizes and valuations, according to investors. He often communicates in short bursts of texts or via quick phone calls, sometimes late into the night and through weekends.
"He will communicate even bad news very directly, and I think that's important in this role, especially as they're launching into the public life," Byron Deeter, a partner at Bessemer Venture Partners, a repeat Anthropic investor, told CNBC in an interview. "He doesn't let the important stuff go unsaid, and he's very good at giving you headlights into what's coming."
Rao has a deep mastery of the nuts and bolts of Anthropic's business, as well as its broader strategy, and he's able to translate the complexities into language that financiers understand, according to investors and a former colleague. That's been especially useful ahead of the IPO, while Wall Street has been working to digest Anthropic's ambitious infrastructure plans, the people said.
Anthropic has to secure massive amounts of computing power to train AI models and serve customers, and has entered into a range of purchase and lease agreements to try to meet anticipated demand. The company said in an amended prospectus last week that its aggregate spend commitments total roughly $900 billion, "substantially all of which is related to compute and infrastructure."
"The compute that we procure, it's the lifeblood of our business," Rao said during a rare podcast appearance on "Invest Like The Best" in May. "It is the most important thing in the company. It's like the canvas on which everything else gets built."
Rao's frank communication style is different from that of Amodei, Anthropic's chief executive, who's known for penning long essays and opining about AI's transformative potential and grave risks. But the pair complement one another well, according to investors, and Rao has earned Amodei's trust.
Both executives have been closely involved with Anthropic's fundraising efforts and IPO planning, but Rao has taken the lead in many of those discussions. He's been front and center during Anthropic's road show, and he led the early testing-the-waters meetings that the company held in August, as CNBC previously reported.
Deeter called Rao "the glue" of the company, helping turn the founders' ideas into reality.
'Close proximity to visionary founders'
For friends and early colleagues, Rao's ascension hardly came as a surprise.
He earned his undergraduate degree in economics at Harvard University, where he graduated summa cum laude in 2005. Six years later, after a stint as a strategy consultant at Bain & Company, he completed his J.D. at Yale Law School.
Instead of pursuing a career as a lawyer, Rao took a job at Blackstone and worked as a private equity investor. He soaked up the training he received there and was regarded as a competent and personable teammate, according to a former colleague. Rao is also credited with inspiring the private equity unit's annual poker tournament, after he famously schooled his bosses during a game in 2014.
The following year, Rao followed Blackstone's then CFO, Laurence Tosi, to Airbnb, where he cut his teeth in the world of fast-growing tech startups.
Rao helped lead the financing that kept Airbnb afloat during the Covid-19 pandemic, which he's publicly described as a "harrowing time" for the business. During his May podcast appearance, Rao said Airbnb lost 70% of its revenue during a seven-week period. The company survived, and Rao helped support its IPO in late 2020.
"Airbnb was so dynamic," said Mildenhall, who is now the chief marketing officer at Rocket Companies. "I think that both his short time at Fanatics and his time at Airbnb really gave him close proximity to visionary founders that have a relentless frustration with the status quo."
While Airbnb was one of the fastest-moving startups of the 2010s, it would be dwarfed by the hypergrowth that Rao would later be tasked with steering at Anthropic.
Anthropic reported $33.24 billion in revenue for the nine months ending Sept. 30, up roughly 1,200% from the same period last year. In 2024, the year that Rao joined the company, Anthropic generated a total of $386 million in revenue.
The company could net more than $60 billion in proceeds through its IPO this week, as CNBC previously reported, and Rao will be charged with deploying that capital and ushering Anthropic into its next phase of life as a public company. As he prepares to dive headfirst into the world of quarterly earnings calls, investors and former colleagues said they believe he's up to the task.
"What I do try to do, maybe once a week, is in a quiet moment, just think, 'Wow, this is really cool,'" Rao said in May. "'It's an incredible opportunity to work with this group of people on this problem at this company at this moment in time.'"
WATCH: Anthropic’s breakneck rise: What to know before the IPO`,
    bodyJa: `It's been a busy year for Anthropic CFO Krishna Rao.
After closing a $65 billion funding round in May, he's been readying the artificial intelligence company for what's widely expected to be a blockbuster initial public offering. The listing could value Anthropic at roughly $1.4 trillion, instantly making it one of the largest tech companies in the world.
Rao joined Anthropic in 2024, when the company was still considered an underdog to OpenAI, now its chief rival. He's known as a straight shooter and a deft operator with a relentless work ethic, according to Anthropic investors and former colleagues, and he's played a crucial role in fueling the company's historic rise.
The 43-year-old finance chief has largely stayed out of the public eye, opting to yield the spotlight to Anthropic's seven co-founders, including CEO Dario Amodei and President Daniela Amodei. But Anthropic's upcoming Nasdaq debut, which is expected to take place on Thursday, will likely push him to center stage, as public market investors and analysts hang on his every word for insight into the AI trade.
Rao has nearly two decades of experience in finance across a range of companies, including Fanatics Commerce, a sports merchandise retailer, Cedar, a healthcare payments and billing platform, Airbnb and Blackstone. But he's never taken a company public as a CFO, and the stakes are high.
Investors are still reeling after Jensen Huang resigned as CEO of Nvidia following shocking reports of three extramarital affairs. The market was already jittery on concerns that rising interest rates would make debt unaffordable for companies that need it for costly infrastructure purchases.
Against that backdrop, Rao is under pressure to deliver.
"He's a committed professional. He's integrity-based, and he's had this meteoric rise in a very, very complex set of companies," Jonathan Mildenhall, Airbnb's former marketing chief and a Fanatics board member, told CNBC in an interview. "There was nothing easy about Airbnb. There was nothing easy about Fanatics. There's nothing easy about Anthropic, and yet he makes it look so."
CNBC spoke to current Anthropic investors, Rao's friends and former colleagues for this story, many of whom asked not to be named because they were not authorized to speak publicly. Rao declined to participate in an interview through an Anthropic spokesperson.
Anthropic's straight shooter
As Anthropic's first CFO, Rao has been instrumental in helping the company raise tens of billions of dollars over the past two years.
He has made himself easily accessible to Anthropic's backers, even during fast-moving, tense discussions about allocation sizes and valuations, according to investors. He often communicates in short bursts of texts or via quick phone calls, sometimes late into the night and through weekends.
"He will communicate even bad news very directly, and I think that's important in this role, especially as they're launching into the public life," Byron Deeter, a partner at Bessemer Venture Partners, a repeat Anthropic investor, told CNBC in an interview. "He doesn't let the important stuff go unsaid, and he's very good at giving you headlights into what's coming."
Rao has a deep mastery of the nuts and bolts of Anthropic's business, as well as its broader strategy, and he's able to translate the complexities into language that financiers understand, according to investors and a former colleague. That's been especially useful ahead of the IPO, while Wall Street has been working to digest Anthropic's ambitious infrastructure plans, the people said.
Anthropic has to secure massive amounts of computing power to train AI models and serve customers, and has entered into a range of purchase and lease agreements to try to meet anticipated demand. The company said in an amended prospectus last week that its aggregate spend commitments total roughly $900 billion, "substantially all of which is related to compute and infrastructure."
"The compute that we procure, it's the lifeblood of our business," Rao said during a rare podcast appearance on "Invest Like The Best" in May. "It is the most important thing in the company. It's like the canvas on which everything else gets built."
Rao's frank communication style is different from that of Amodei, Anthropic's chief executive, who's known for penning long essays and opining about AI's transformative potential and grave risks. But the pair complement one another well, according to investors, and Rao has earned Amodei's trust.
Both executives have been closely involved with Anthropic's fundraising efforts and IPO planning, but Rao has taken the lead in many of those discussions. He's been front and center during Anthropic's road show, and he led the early testing-the-waters meetings that the company held in August, as CNBC previously reported.
Deeter called Rao "the glue" of the company, helping turn the founders' ideas into reality.
'Close proximity to visionary founders'
For friends and early colleagues, Rao's ascension hardly came as a surprise.
He earned his undergraduate degree in economics at Harvard University, where he graduated summa cum laude in 2005. Six years later, after a stint as a strategy consultant at Bain & Company, he completed his J.D. at Yale Law School.
Instead of pursuing a career as a lawyer, Rao took a job at Blackstone and worked as a private equity investor. He soaked up the training he received there and was regarded as a competent and personable teammate, according to a former colleague. Rao is also credited with inspiring the private equity unit's annual poker tournament, after he famously schooled his bosses during a game in 2014.
The following year, Rao followed Blackstone's then CFO, Laurence Tosi, to Airbnb, where he cut his teeth in the world of fast-growing tech startups.
Rao helped lead the financing that kept Airbnb afloat during the Covid-19 pandemic, which he's publicly described as a "harrowing time" for the business. During his May podcast appearance, Rao said Airbnb lost 70% of its revenue during a seven-week period. The company survived, and Rao helped support its IPO in late 2020.
"Airbnb was so dynamic," said Mildenhall, who is now the chief marketing officer at Rocket Companies. "I think that both his short time at Fanatics and his time at Airbnb really gave him close proximity to visionary founders that have a relentless frustration with the status quo."
While Airbnb was one of the fastest-moving startups of the 2010s, it would be dwarfed by the hypergrowth that Rao would later be tasked with steering at Anthropic.
Anthropic reported $33.24 billion in revenue for the nine months ending Sept. 30, up roughly 1,200% from the same period last year. In 2024, the year that Rao joined the company, Anthropic generated a total of $386 million in revenue.
The company could net more than $60 billion in proceeds through its IPO this week, as CNBC previously reported, and Rao will be charged with deploying that capital and ushering Anthropic into its next phase of life as a public company. As he prepares to dive headfirst into the world of quarterly earnings calls, investors and former colleagues said they believe he's up to the task.
"What I do try to do, maybe once a week, is in a quiet moment, just think, 'Wow, this is really cool,'" Rao said in May. "'It's an incredible opportunity to work with this group of people on this problem at this company at this moment in time.'"
WATCH: Anthropic’s breakneck rise: What to know before the IPO`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/16/anthropic-cfo-krishna-rao-ipo.html",
    publishedAt: "2026-11-16T20:44:24+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "nvidia-board-is-not-considering-bringing-8823de81",
    title: "Nvidia board is not considering bringing Jensen Huang back as CEO, source tells CNBC",
    titleJa: "Nvidia board is not considering bringing Jensen Huang back as CEO, source tells CNBC",
    summaryJa: "Nvidia's board of directors is not considering bringing back Jensen Huang as CEO, a person familiar with the matter told CNBC.The board is focused on an investigation into Huang, and is not in discussions to bring him back, said the person, who spoke on condition of anonymity in order to discuss internal matters. Nvidia has hired law firm Wachtell Lipton to lead a probe into Huang's conduct and whether it compromised national security or company secrets.",
    bodyOriginal: `Nvidia's board of directors is not considering bringing back Jensen Huang as CEO, a person familiar with the matter told CNBC.
The board is focused on an investigation into Huang, and is not in discussions to bring him back, said the person, who spoke on condition of anonymity in order to discuss internal matters. Nvidia has hired law firm Wachtell Lipton to lead a probe into Huang's conduct and whether it compromised national security or company secrets.
Last week, Huang resigned from Nvidia, the company he founded, after 33 years as CEO. The resignation came days after Huang admitted to an affair, and news stories alleged he had an affair with Alice Huang, who worked for a customer and is alleged to have contact with Chinese intelligence, as well as affairs with employees at Nvidia.
Over the weekend, the Financial Times reported that Huang had discussed coming back with allies. Altimeter Capital's Brad Gerstner told CNBC on Monday that Huang had not discussed a comeback with him.
A representative for Huang declined to comment on speculation on Sunday.
Many in the tech world have called for Huang to return as Nvidia CEO.
An online petition calling for his reinstatement has drawn 180,000 signatures as well as support from major figures including Elon Musk, Y Combinator CEO Garry Tan and Epic Games CEO Tim Sweeney.
President Donald Trump said on Monday that he is open to Jensen Huang returning as CEO of Nvidia.
"It was not put at risk, and our country is now stronger than ever before," Trump told reporters when asked about U.S. national security concerns.
On Friday, a representative for Nvidia's board said it was in the process of selecting a search firm for the Nvidia CEO role.`,
    bodyJa: `Nvidia's board of directors is not considering bringing back Jensen Huang as CEO, a person familiar with the matter told CNBC.
The board is focused on an investigation into Huang, and is not in discussions to bring him back, said the person, who spoke on condition of anonymity in order to discuss internal matters. Nvidia has hired law firm Wachtell Lipton to lead a probe into Huang's conduct and whether it compromised national security or company secrets.
Last week, Huang resigned from Nvidia, the company he founded, after 33 years as CEO. The resignation came days after Huang admitted to an affair, and news stories alleged he had an affair with Alice Huang, who worked for a customer and is alleged to have contact with Chinese intelligence, as well as affairs with employees at Nvidia.
Over the weekend, the Financial Times reported that Huang had discussed coming back with allies. Altimeter Capital's Brad Gerstner told CNBC on Monday that Huang had not discussed a comeback with him.
A representative for Huang declined to comment on speculation on Sunday.
Many in the tech world have called for Huang to return as Nvidia CEO.
An online petition calling for his reinstatement has drawn 180,000 signatures as well as support from major figures including Elon Musk, Y Combinator CEO Garry Tan and Epic Games CEO Tim Sweeney.
President Donald Trump said on Monday that he is open to Jensen Huang returning as CEO of Nvidia.
"It was not put at risk, and our country is now stronger than ever before," Trump told reporters when asked about U.S. national security concerns.
On Friday, a representative for Nvidia's board said it was in the process of selecting a search firm for the Nvidia CEO role.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/16/nvidia-ceo-jensen-huang.html",
    publishedAt: "2026-11-16T19:46:26+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "trump-backs-return-of-ex-nvidia-boss-aft-176a4925",
    title: "Trump backs return of ex-Nvidia boss after 'Bring Jensen Back' campaign launched",
    titleJa: "Trump backs return of ex-Nvidia boss after 'Bring Jensen Back' campaign launched",
    summaryJa: "A number of tech figures want the board of the AI chip giant to give Jensen Huang his job back.",
    bodyOriginal: `Trump backs return of ex-Nvidia boss after 'Bring Jensen Back' campaign launched
- Published
US President Donald Trump has said he "would certainly not mind" seeing Jensen Huang handed back his job as allies of the former Nvidia chief executive called for him to be reinstated.
Huang resigned as boss of the AI chip giant last week after the emergence of two affairs, one of which was with a woman suspected of spying for China and another allegedly with one of his employees.
It created a crisis for one of the world's most valuable firms, which is a key part of the AI rollout, but the BBC has been told Nvidia's board is not considering reinstating Huang.
Meanwhile the Trump administration on Monday said it will further restrict China's access to AI chips from companies like Nvidia.
Fellow tech bosses, including SpaceX's Elon Musk and Tim Sweeney, chief executive of Fortnite-maker Epic Games, have backed a campaign to get Nvidia's board to "Bring Jensen Back".
The pair were among more than 175,000 signatories of an open letter calling for the board to reinstate Huang while an ongoing internal probe is conducted.
President Trump gave his views on Huang's future on Monday, saying he "would certainly not mind" seeing the former boss given his job back.
"I guess maybe one lesson is more important than another, but I would certainly not mind seeing that," he told reporters as he left the White House.
The Trump administration on Monday also issued new restrictions on chip exports to overseas data centres, which allow Chinese companies to access advanced AI chips to train AI models.
The move came ahead of Trump's meeting with Chinese President Xi Jingping.
The new rules will require companies in Singapore, Thailand, Malaysia, Indonesia and Brazil to apply for US export licences for the most advanced chips in an effort to cut down on them being illegally diverted to China.
The president's comments on Huang came after the "Stand with Jensen" campaign group, which claims to be made up of current and former Nvidia employees, partners, shareholders and supporters, demanded the return of the former chief executive.
They expressed concerns the ex-Nvidia boss "was removed without meaningful due process".
Huang had been expected to weather the storm following the revelation of an affair involving Alice Huang, alleged to be a Chinese spy.
However, he resigned last Thursday after a second extra-marital relationship emerged, allegedly with an executive at Nvidia who reported to him.
The scandal-hit tech boss is now discussing a possible return to Nvidia with confidants, according to the Financial Times, external, though the publication reported Nvidia's board is not considering reappointing him.
A person familiar with the thinking of Nvidia's board told the BBC its directors are not interested in bringing Huang back to lead the company.
A representative for Huang declined to comment on the report.
The so-called war room also wants to get support for Huang from the White House.
President Trump has spoken in glowing terms about Huang since the scandal broke out, and also said he believed Huang when the former Nvidia boss told him he had "no idea she was a spy".
Trump's view is at odds with his Treasury Secretary, Scott Bessent, who has called for Nvidia to hire its next chief executive from outside the company.
The scandal has created tensions between the US Treasury and Commerce departments over shipments of high-end Nvidia chips to Alice Huang's former firm, Megaspeed. China has denied that Alice Huang is a spy.
It has raised questions about the possibility that the chips may have ended up in China despite US export restrictions.
'China plays games with us, so we play games with China'
On Monday, Trump said he did not know whether the women Huang had an affair with was a spy for China.
"They say she's a spy. I don't know that she was a spy at all. I mean, I really don't, I don't know that." he said.
Huang has agreed to testify in Congress, including before the House Select Committee on China to discuss whether US national security was compromised by his affair.
Trump said he did not think Huang had put national security at risk. "You know, China plays games with us. So we play games with China," he said.
The FBI is also investigating the affair between the former Nvidia boss and Alice Huang, according to Trump.
'A handshake with Jensen'
Musk claimed that "critical deals" involving Nvidia's technology would be lost following Huang's resignation.
"Jensen drove supply chain brilliantly at Nvidia but many of those deals were a handshake with Jensen, not a written contract," he posted on X., external
"Without Jensen, at least some of those critical deals will be lost."
Fellow tech boss Sam Altman, the chief executive of OpenAI, sidestepped the question of Huang returning to Nvidia at a conference, saying: "I don't think I know enough to answer that question."
But Altman, who himself was reinstated to his job after being fired back in 2023, said Huang was a "hero of mine".
Shareholders in Nvidia also want Huang back at the company's helm.
Hundreds of billions of pounds have been wiped off the firm's stock market value in recent days, but it is still worth some $3.87 trillion. Its share price was down in early Monday trading.
In an open letter to the board, Brad Gerstner, founder of Altimeter Capital and Atreides Management boss Gavin Baker called for management to leave "all options on the table, including the potential return of Jensen Huang".
Lord Sarfraz, a member of the UK's House of Lords, has also written to Nvidia's new chair, Harvey Jones, urging the firm's directors to give "serious consideration" to Huang's return following the investigation.
For the moment, Nvidia's chief financial officer Colette Kress is leading the firm and will present the company's results on Tuesday.
Related topics
- Published20 hours ago`,
    bodyJa: `Trump backs return of ex-Nvidia boss after 'Bring Jensen Back' campaign launched
- Published
US President Donald Trump has said he "would certainly not mind" seeing Jensen Huang handed back his job as allies of the former Nvidia chief executive called for him to be reinstated.
Huang resigned as boss of the AI chip giant last week after the emergence of two affairs, one of which was with a woman suspected of spying for China and another allegedly with one of his employees.
It created a crisis for one of the world's most valuable firms, which is a key part of the AI rollout, but the BBC has been told Nvidia's board is not considering reinstating Huang.
Meanwhile the Trump administration on Monday said it will further restrict China's access to AI chips from companies like Nvidia.
Fellow tech bosses, including SpaceX's Elon Musk and Tim Sweeney, chief executive of Fortnite-maker Epic Games, have backed a campaign to get Nvidia's board to "Bring Jensen Back".
The pair were among more than 175,000 signatories of an open letter calling for the board to reinstate Huang while an ongoing internal probe is conducted.
President Trump gave his views on Huang's future on Monday, saying he "would certainly not mind" seeing the former boss given his job back.
"I guess maybe one lesson is more important than another, but I would certainly not mind seeing that," he told reporters as he left the White House.
The Trump administration on Monday also issued new restrictions on chip exports to overseas data centres, which allow Chinese companies to access advanced AI chips to train AI models.
The move came ahead of Trump's meeting with Chinese President Xi Jingping.
The new rules will require companies in Singapore, Thailand, Malaysia, Indonesia and Brazil to apply for US export licences for the most advanced chips in an effort to cut down on them being illegally diverted to China.
The president's comments on Huang came after the "Stand with Jensen" campaign group, which claims to be made up of current and former Nvidia employees, partners, shareholders and supporters, demanded the return of the former chief executive.
They expressed concerns the ex-Nvidia boss "was removed without meaningful due process".
Huang had been expected to weather the storm following the revelation of an affair involving Alice Huang, alleged to be a Chinese spy.
However, he resigned last Thursday after a second extra-marital relationship emerged, allegedly with an executive at Nvidia who reported to him.
The scandal-hit tech boss is now discussing a possible return to Nvidia with confidants, according to the Financial Times, external, though the publication reported Nvidia's board is not considering reappointing him.
A person familiar with the thinking of Nvidia's board told the BBC its directors are not interested in bringing Huang back to lead the company.
A representative for Huang declined to comment on the report.
The so-called war room also wants to get support for Huang from the White House.
President Trump has spoken in glowing terms about Huang since the scandal broke out, and also said he believed Huang when the former Nvidia boss told him he had "no idea she was a spy".
Trump's view is at odds with his Treasury Secretary, Scott Bessent, who has called for Nvidia to hire its next chief executive from outside the company.
The scandal has created tensions between the US Treasury and Commerce departments over shipments of high-end Nvidia chips to Alice Huang's former firm, Megaspeed. China has denied that Alice Huang is a spy.
It has raised questions about the possibility that the chips may have ended up in China despite US export restrictions.
'China plays games with us, so we play games with China'
On Monday, Trump said he did not know whether the women Huang had an affair with was a spy for China.
"They say she's a spy. I don't know that she was a spy at all. I mean, I really don't, I don't know that." he said.
Huang has agreed to testify in Congress, including before the House Select Committee on China to discuss whether US national security was compromised by his affair.
Trump said he did not think Huang had put national security at risk. "You know, China plays games with us. So we play games with China," he said.
The FBI is also investigating the affair between the former Nvidia boss and Alice Huang, according to Trump.
'A handshake with Jensen'
Musk claimed that "critical deals" involving Nvidia's technology would be lost following Huang's resignation.
"Jensen drove supply chain brilliantly at Nvidia but many of those deals were a handshake with Jensen, not a written contract," he posted on X., external
"Without Jensen, at least some of those critical deals will be lost."
Fellow tech boss Sam Altman, the chief executive of OpenAI, sidestepped the question of Huang returning to Nvidia at a conference, saying: "I don't think I know enough to answer that question."
But Altman, who himself was reinstated to his job after being fired back in 2023, said Huang was a "hero of mine".
Shareholders in Nvidia also want Huang back at the company's helm.
Hundreds of billions of pounds have been wiped off the firm's stock market value in recent days, but it is still worth some $3.87 trillion. Its share price was down in early Monday trading.
In an open letter to the board, Brad Gerstner, founder of Altimeter Capital and Atreides Management boss Gavin Baker called for management to leave "all options on the table, including the potential return of Jensen Huang".
Lord Sarfraz, a member of the UK's House of Lords, has also written to Nvidia's new chair, Harvey Jones, urging the firm's directors to give "serious consideration" to Huang's return following the investigation.
For the moment, Nvidia's chief financial officer Colette Kress is leading the firm and will present the company's results on Tuesday.
Related topics
- Published20 hours ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cry49plv8v3go?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-16T19:16:52+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/78e4/live/4bc24280-e1d2-11f1-b8c8-67fa35f5afdb.jpg",
    readTime: 10,
  },
  {
    id: "fed-chairman-kevin-warsh-stresses-import-0dca05ab",
    title: "Fed Chairman Kevin Warsh stresses importance of AI to economy, but says it could ‘disappoint’",
    titleJa: "Fed Chairman Kevin Warsh stresses importance of AI to economy, but says it could ‘disappoint’",
    summaryJa: "[The stream is slated to start at noon ET. Please refresh the page if you do not see a player above.]Federal Reserve Chairman Kevin Warsh on Monday highlighted the potential economic benefits of artificial intelligence while warning that the emerging technology also could lead to widespread job losses or fail to deliver on its lofty expectations.",
    bodyOriginal: `[The stream is slated to start at noon ET. Please refresh the page if you do not see a player above.]
Federal Reserve Chairman Kevin Warsh on Monday highlighted the potential economic benefits of artificial intelligence while warning that the emerging technology also could lead to widespread job losses or fail to deliver on its lofty expectations.
Speaking in San Francisco before a blue-ribbon task force he assembled to examine productivity and employment, the central bank leader stressed that AI "will have significant impact on the economy, with important implications for monetary policy down the road."
"I stress that while I'm not here to offer predictions, I'm not exactly impartial about American leadership in a time so filled with both challenge and possibility," he said in prepared remarks before his productivity and jobs task force.
In his remarks, Warsh used the term "super intelligence" instead of artificial intelligence and described it as "an entirely new force in economic life and society" that has already begun to transform economic activity. President Donald Trump recently ordered that the U.S. government now use the term "super intelligence" almost exclusively instead of AI.
Since taking the Fed chair position, Warsh has emphasized the importance of AI and its potential to improve productivity and ultimately to be a disinflationary force on the economy.
In his remarks Monday, he noted that AI could lead to productivity gains that could accelerate real economic growth beyond its current range while keeping employment near full capacity. On the downside, he said "less positive" outcomes include job displacement through automation that could raise unemployment.
At the same time, he outlined a third scenario where AI could simply "disappoint."
"After significant capital investment and stock market gains, expected returns could turn down and equity valuations could fall, leading to an economic slowdown and a more notable rise in unemployment," he said. "In time, the economy would recover, but without the productivity gains."
The potential for AI advancement has driven stock market valuations higher and led to companies raising capital to continue competing.
Monday's conference features discussion panels with business leaders, economists and academics. The final session will be a fireside chat that will include Warsh and task force leader and AI advocate Marc Andreessen, co-founder of Andreessen Horowitz.
Warsh created four other task forces addressing topics such as Fed communication, data reliance, balance sheet policy and inflation frameworks.
The chairman noted that this was the first visit he has made to a regional bank.`,
    bodyJa: `[The stream is slated to start at noon ET. Please refresh the page if you do not see a player above.]
Federal Reserve Chairman Kevin Warsh on Monday highlighted the potential economic benefits of artificial intelligence while warning that the emerging technology also could lead to widespread job losses or fail to deliver on its lofty expectations.
Speaking in San Francisco before a blue-ribbon task force he assembled to examine productivity and employment, the central bank leader stressed that AI "will have significant impact on the economy, with important implications for monetary policy down the road."
"I stress that while I'm not here to offer predictions, I'm not exactly impartial about American leadership in a time so filled with both challenge and possibility," he said in prepared remarks before his productivity and jobs task force.
In his remarks, Warsh used the term "super intelligence" instead of artificial intelligence and described it as "an entirely new force in economic life and society" that has already begun to transform economic activity. President Donald Trump recently ordered that the U.S. government now use the term "super intelligence" almost exclusively instead of AI.
Since taking the Fed chair position, Warsh has emphasized the importance of AI and its potential to improve productivity and ultimately to be a disinflationary force on the economy.
In his remarks Monday, he noted that AI could lead to productivity gains that could accelerate real economic growth beyond its current range while keeping employment near full capacity. On the downside, he said "less positive" outcomes include job displacement through automation that could raise unemployment.
At the same time, he outlined a third scenario where AI could simply "disappoint."
"After significant capital investment and stock market gains, expected returns could turn down and equity valuations could fall, leading to an economic slowdown and a more notable rise in unemployment," he said. "In time, the economy would recover, but without the productivity gains."
The potential for AI advancement has driven stock market valuations higher and led to companies raising capital to continue competing.
Monday's conference features discussion panels with business leaders, economists and academics. The final session will be a fireside chat that will include Warsh and task force leader and AI advocate Marc Andreessen, co-founder of Andreessen Horowitz.
Warsh created four other task forces addressing topics such as Fed communication, data reliance, balance sheet policy and inflation frameworks.
The chairman noted that this was the first visit he has made to a regional bank.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/16/fed-ai-task-force-kevin-warsh.html",
    publishedAt: "2026-11-16T18:46:07+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 7,
  },
  {
    id: "gas-starts-flowing-from-jackdaw-after-go-31ccbe57",
    title: "Gas starts flowing from Jackdaw after government green light",
    titleJa: "Gas starts flowing from Jackdaw after government green light",
    summaryJa: "Ministers last month announced the Jackdaw gas field, which lies 150 miles east of Aberdeen, had been approved after years of uncertainty.",
    bodyOriginal: `Gas starts flowing from Jackdaw after government green light
- Published
Gas has begun flowing from the Jackdaw gas field, with the UK energy secretary saying it will help to heat millions of homes and businesses this winter.
Ministers last month announced the Jackdaw field, which lies 150 miles east of Aberdeen, had been approved after years of uncertainty and a court case.
It has now been announced that it has begun producing gas which will start flowing into Britain, according to its operator Adura.
The UK government approved production from the gas field in the North Sea last month, amid intense debate about the project's environmental and economic impact.
Jackdaw is operated by Adura under a joint venture between Shell and Norwegian state energy firm Equinor.
A decision is yet to be taken on whether production can begin at Rosebank, the UK's largest known untapped oil field, which is located off the coast of Shetland in the North Atlantic.
Energy Secretary Miatta Fahnbulleh said: "Last month, I gave Jackdaw the green light and today its gas will start flowing into Britain, thanks to the hard work of the skilled North Sea workers.
"It means homegrown gas from this project will help to heat millions of British homes and businesses this winter and beyond, in a boost for our energy security.
"It also will help minimise the UK's use of imported higher emission gas as we continue our transition to renewables and nuclear."
Claire Mueller, Jackdaw project director at Adura, said the gas field was "now helping to power Britain".
She added: "At a time of considerable uncertainty around the world, Jackdaw will provide secure energy from our own waters to heat British homes and power our economy, while reducing our reliance on imports with higher emissions.
"Jackdaw also demonstrates what can be achieved when Britain makes pragmatic, evidence-led decisions about the energy it needs, while properly accounting for our climate responsibilities."
Mueller said the decision was a "positive step towards restoring confidence in the North Sea".
She added that Adura was "proud to be producing the oil and gas our country will continue to need for decades".
Adura has said Jackdaw will provide about 6% of UK gas production, enough to power 1.4 million homes. After imports are included, that amounts to about 2% of total UK demand.
The gas will be pumped to the existing Shearwater platform for processing – known as a tie-back in industry terms – before being piped to the St Fergus gas terminal in Aberdeenshire.
The UK government said that over its expected 11-year lifespan, Jackdaw would support the UK's gas supply, protect hundreds of jobs and add £2.9bn to the economy.
The timeline of Jackdaw and Rosebank
The decision to green-light Jackdaw drew criticism from some Labour backbenchers and environmentalists, while Conservatives called on the government to also approve the Rosebank oil field.
Both projects were approved for development by the previous Tory government in 2022 and 2023 respectively but these decisions were struck down by the Scottish courts after a challenge from environmental campaigners.
This followed a Supreme Court ruling that developers had to account for the climate impact caused by burning fossil fuels in their planning applications.
Prime Minister Andy Burnham has pledged to stick to the UK's net zero target despite giving the green light to Jackdaw.
He previously said the decision would "significantly strengthen our energy security by increasing domestic gas production by about 6% and support the UK's energy supply for more than a decade".
A decision on the larger Rosebank oil project is yet to be made.
The co-leader of the Scottish Greens, Ross Greer, described the Jackdaw approval as "climate vandalism".
He said: "It is a devastating betrayal of our children's future and it won't even lower energy bills in the here and now."
Environmental campaigners argue that this summer's heatwaves demonstrate the need to tackle climate change by rejecting both Jackdaw and Rosebank.
Areeba Hamid, the co-executive director of Greenpeace, said approving Jackdaw was "the wrong decision" in terms of lowering energy bills, providing energy security, and addressing climate change.
Oxfam said the government had "drilled straight through the UK's climate commitments" and accused the prime minister of sending "the wrong signal as the impacts of climate change intensify".
The charity says the government must commit to not approving any new oil and gas licences, including the proposals for Rosebank.
Jackdaw sits close to the boundary between the British and Norwegian sectors of the North Sea, in an area where Westminster originally granted licences to explore for oil and gas in 1970 and 1989.
The field was discovered in 2005 but it was expensive and technically difficult to exploit.
Shell did not commit to its development until 2022, shortly after the Conservative government had granted consent for production.
But in January 2025, after a challenge by environmentalists, the Court of Session in Edinburgh ruled that consent for Jackdaw and Rosebank had been granted unlawfully.
The judge, Lord Ericht, said the developers should have provided a more detailed account of the fields' impact on climate change as part of the permitting process.
The judge allowed the companies to continue with preparatory work short of producing oil and gas while they crafted new environmental impact assessments taking into account the eventual effect of actually burning the fossil fuels, not just the emissions which would be created in extracting them.
On the Front Line: Inside the Platform
An inside look at Jackdaw, the UK’s newest and most contested gas platform.
When BBC News visited the platform this summer, Adura CEO Neil McCulloch said its approval was vital to avoid domestic supply shortages this winter.
However, the UK government has previously suggested that Jackdaw will have little impact on energy security and none on reducing domestic gas and electricity bills.
In August, in an interim response to a consultation on the future of the country's gas supplies, Energy Minister Michael Shanks said the UK would inevitably become more reliant on imports as domestic production declined, external.
"With diminishing output from the North Sea over the past decades, any gas produced from the UK Continental Shelf represents a tiny fraction of global demand and so will not lower prices nor materially boost supply," wrote Shanks.
Labour has previously said it is opposed to the issuing of new exploration licences but it will consider new production projects if they are tied back to existing facilities.
McCulloch described the Jackdaw decision as "an important and positive step forward" - but said attention now turned to Rosebank.
He has urged the UK government to approve production from the field, in which Adura owns an 80% stake. The other 20% is held by London-based Ithaca Energy.
Rosebank contains an estimated 300 million to 500 million barrels of oil.
But while most of Jackdaw's gas is likely to be consumed in the UK, Rosebank's oil will be taken off by tanker and sold on international markets.
Related topics
- Published21 October
- Published21 October`,
    bodyJa: `Gas starts flowing from Jackdaw after government green light
- Published
Gas has begun flowing from the Jackdaw gas field, with the UK energy secretary saying it will help to heat millions of homes and businesses this winter.
Ministers last month announced the Jackdaw field, which lies 150 miles east of Aberdeen, had been approved after years of uncertainty and a court case.
It has now been announced that it has begun producing gas which will start flowing into Britain, according to its operator Adura.
The UK government approved production from the gas field in the North Sea last month, amid intense debate about the project's environmental and economic impact.
Jackdaw is operated by Adura under a joint venture between Shell and Norwegian state energy firm Equinor.
A decision is yet to be taken on whether production can begin at Rosebank, the UK's largest known untapped oil field, which is located off the coast of Shetland in the North Atlantic.
Energy Secretary Miatta Fahnbulleh said: "Last month, I gave Jackdaw the green light and today its gas will start flowing into Britain, thanks to the hard work of the skilled North Sea workers.
"It means homegrown gas from this project will help to heat millions of British homes and businesses this winter and beyond, in a boost for our energy security.
"It also will help minimise the UK's use of imported higher emission gas as we continue our transition to renewables and nuclear."
Claire Mueller, Jackdaw project director at Adura, said the gas field was "now helping to power Britain".
She added: "At a time of considerable uncertainty around the world, Jackdaw will provide secure energy from our own waters to heat British homes and power our economy, while reducing our reliance on imports with higher emissions.
"Jackdaw also demonstrates what can be achieved when Britain makes pragmatic, evidence-led decisions about the energy it needs, while properly accounting for our climate responsibilities."
Mueller said the decision was a "positive step towards restoring confidence in the North Sea".
She added that Adura was "proud to be producing the oil and gas our country will continue to need for decades".
Adura has said Jackdaw will provide about 6% of UK gas production, enough to power 1.4 million homes. After imports are included, that amounts to about 2% of total UK demand.
The gas will be pumped to the existing Shearwater platform for processing – known as a tie-back in industry terms – before being piped to the St Fergus gas terminal in Aberdeenshire.
The UK government said that over its expected 11-year lifespan, Jackdaw would support the UK's gas supply, protect hundreds of jobs and add £2.9bn to the economy.
The timeline of Jackdaw and Rosebank
The decision to green-light Jackdaw drew criticism from some Labour backbenchers and environmentalists, while Conservatives called on the government to also approve the Rosebank oil field.
Both projects were approved for development by the previous Tory government in 2022 and 2023 respectively but these decisions were struck down by the Scottish courts after a challenge from environmental campaigners.
This followed a Supreme Court ruling that developers had to account for the climate impact caused by burning fossil fuels in their planning applications.
Prime Minister Andy Burnham has pledged to stick to the UK's net zero target despite giving the green light to Jackdaw.
He previously said the decision would "significantly strengthen our energy security by increasing domestic gas production by about 6% and support the UK's energy supply for more than a decade".
A decision on the larger Rosebank oil project is yet to be made.
The co-leader of the Scottish Greens, Ross Greer, described the Jackdaw approval as "climate vandalism".
He said: "It is a devastating betrayal of our children's future and it won't even lower energy bills in the here and now."
Environmental campaigners argue that this summer's heatwaves demonstrate the need to tackle climate change by rejecting both Jackdaw and Rosebank.
Areeba Hamid, the co-executive director of Greenpeace, said approving Jackdaw was "the wrong decision" in terms of lowering energy bills, providing energy security, and addressing climate change.
Oxfam said the government had "drilled straight through the UK's climate commitments" and accused the prime minister of sending "the wrong signal as the impacts of climate change intensify".
The charity says the government must commit to not approving any new oil and gas licences, including the proposals for Rosebank.
Jackdaw sits close to the boundary between the British and Norwegian sectors of the North Sea, in an area where Westminster originally granted licences to explore for oil and gas in 1970 and 1989.
The field was discovered in 2005 but it was expensive and technically difficult to exploit.
Shell did not commit to its development until 2022, shortly after the Conservative government had granted consent for production.
But in January 2025, after a challenge by environmentalists, the Court of Session in Edinburgh ruled that consent for Jackdaw and Rosebank had been granted unlawfully.
The judge, Lord Ericht, said the developers should have provided a more detailed account of the fields' impact on climate change as part of the permitting process.
The judge allowed the companies to continue with preparatory work short of producing oil and gas while they crafted new environmental impact assessments taking into account the eventual effect of actually burning the fossil fuels, not just the emissions which would be created in extracting them.
On the Front Line: Inside the Platform
An inside look at Jackdaw, the UK’s newest and most contested gas platform.
When BBC News visited the platform this summer, Adura CEO Neil McCulloch said its approval was vital to avoid domestic supply shortages this winter.
However, the UK government has previously suggested that Jackdaw will have little impact on energy security and none on reducing domestic gas and electricity bills.
In August, in an interim response to a consultation on the future of the country's gas supplies, Energy Minister Michael Shanks said the UK would inevitably become more reliant on imports as domestic production declined, external.
"With diminishing output from the North Sea over the past decades, any gas produced from the UK Continental Shelf represents a tiny fraction of global demand and so will not lower prices nor materially boost supply," wrote Shanks.
Labour has previously said it is opposed to the issuing of new exploration licences but it will consider new production projects if they are tied back to existing facilities.
McCulloch described the Jackdaw decision as "an important and positive step forward" - but said attention now turned to Rosebank.
He has urged the UK government to approve production from the field, in which Adura owns an 80% stake. The other 20% is held by London-based Ithaca Energy.
Rosebank contains an estimated 300 million to 500 million barrels of oil.
But while most of Jackdaw's gas is likely to be consumed in the UK, Rosebank's oil will be taken off by tanker and sold on international markets.
Related topics
- Published21 October
- Published21 October`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c9x2elzm047po?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-16T06:24:08+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/015f/live/3d2a7950-e190-11f1-b441-2b33b063138f.jpg",
    readTime: 10,
  },
  {
    id: "china-confirms-xi-trump-putin-historic-s-4a5412ca",
    title: "China confirms Xi-Trump-Putin historic summit. What will be on the agenda?",
    titleJa: "China confirms Xi-Trump-Putin historic summit. What will be on the agenda?",
    summaryJa: "The talks are expected to focus on issues including nuclear non-proliferation, the Middle East war, trade policies and, possibly, the Ukraine war.",
    bodyOriginal: `China confirmed Monday that President Xi Jinping will meet with Russian President Vladimir Putin and U.S. President Donald Trump in Shenzhen on Thursday, setting up the first-ever gathering of the three leaders.
That confirmation from a spokesperson at China's Foreign Ministry follows announcements from Moscow and the White House. The Wall Street Journal had reported last month that Putin had proposed a three-way sit-down in an attempt to negotiate an end to the four-year war in Ukraine.
While the summit among the three nations, on the sidelines of the APEC meeting in Shenzhen, is unprecedented, the leaders have held bilateral meetings over the years. Xi has met with Trump three times since October last year and more than 40 times with Putin since becoming president in 2013. Trump and Putin have met in person on several occasions, including a visit to Alaska by the Russian leader in August 2025.
"For Xi, just the ability to bring Putin and Trump to the table, a first among equals scenario, will deliver much of the political benefit even before the discussions begin," said Peter Alexander, Shanghai-based managing director at Z-Ben Advisors.
Trump has departed Washington, D.C. for a four-day trip to Asia that also includes a stop in the Philippines.
Uncertain agenda
The main hurdle to the first-of-its-kind summit now appears to be "a disagreement over the agenda," said Neo Wang, chief China strategist at Evercore ISI.
The White House signaled the U.S. intention to prioritize talks over nuclear non-proliferation and the Middle East war, while downplaying the prospects of engaging in talks over Ukraine — a topic high on Moscow's agenda.
"He [Trump] will discuss the reduction of nuclear weapons in the world, whose proliferation President Trump believes is very dangerous," Olivia Wales, a White House spokeswoman, told reporters on a briefing call. The president will raise the U.S.-Israeli war against Iran in the meeting but is not expected to bring up Russia's war in Ukraine, the official said.
Putin's position on the war appears unwavering, with the Russian president telling U.S. envoys Jared Kushner and Steve Witkoff in a meeting in Moscow last week that Europe should "figure out" whether "they want peace or war." The meeting came a day after an earlier round of talks aimed at ending the war in Ukraine wrapped up in Abu Dhabi.
Russian presidential aide Yuri Ushakov said last week the talks in Shenzhen would continue the diplomatic efforts aimed at reaching a negotiated settlement to the Ukraine war, according to state-controlled local media Russia Today.
China and Russia could turn more aggressive with their military ambitions over the next two years if they perceive Trump as politically weakened, Brookings Institution senior fellow Robert Kagan told CNBC earlier this month, following the dramatic defeat of Trump's Republican Party in the midterm election.
China did not specify what will be discussed at the three leaders' meeting in Monday's statement.
"Xi may be inclined to do Putin a favor by showing up, given close strategic ties," said Wang. But a joint statement on Ukraine territory, security arrangements or sanctions against Russia appears unlikely, he said, as it would leave Beijing "more exposed to political scrutiny and accountability."
A U.S.-China trade truce set to expire in January is likely to be on the table, with analysts largely expecting an extension despite signs of growing friction in the bilateral relationship.
Aside from an immediate extension, leaders may also look to assess "whether a more durable framework for a rebalancing of U.S.–China trade relations can be established," said Carlos Casanova, senior economist for Asia at UBP.
U.S. trade deficit with China remains substantial, with Beijing's exports to Washington recording double-digit growth for most of this year, from last year's low base. Narrowing that deficit will be central to Washington's call for a more balanced trade, Casanova said.`,
    bodyJa: `China confirmed Monday that President Xi Jinping will meet with Russian President Vladimir Putin and U.S. President Donald Trump in Shenzhen on Thursday, setting up the first-ever gathering of the three leaders.
That confirmation from a spokesperson at China's Foreign Ministry follows announcements from Moscow and the White House. The Wall Street Journal had reported last month that Putin had proposed a three-way sit-down in an attempt to negotiate an end to the four-year war in Ukraine.
While the summit among the three nations, on the sidelines of the APEC meeting in Shenzhen, is unprecedented, the leaders have held bilateral meetings over the years. Xi has met with Trump three times since October last year and more than 40 times with Putin since becoming president in 2013. Trump and Putin have met in person on several occasions, including a visit to Alaska by the Russian leader in August 2025.
"For Xi, just the ability to bring Putin and Trump to the table, a first among equals scenario, will deliver much of the political benefit even before the discussions begin," said Peter Alexander, Shanghai-based managing director at Z-Ben Advisors.
Trump has departed Washington, D.C. for a four-day trip to Asia that also includes a stop in the Philippines.
Uncertain agenda
The main hurdle to the first-of-its-kind summit now appears to be "a disagreement over the agenda," said Neo Wang, chief China strategist at Evercore ISI.
The White House signaled the U.S. intention to prioritize talks over nuclear non-proliferation and the Middle East war, while downplaying the prospects of engaging in talks over Ukraine — a topic high on Moscow's agenda.
"He [Trump] will discuss the reduction of nuclear weapons in the world, whose proliferation President Trump believes is very dangerous," Olivia Wales, a White House spokeswoman, told reporters on a briefing call. The president will raise the U.S.-Israeli war against Iran in the meeting but is not expected to bring up Russia's war in Ukraine, the official said.
Putin's position on the war appears unwavering, with the Russian president telling U.S. envoys Jared Kushner and Steve Witkoff in a meeting in Moscow last week that Europe should "figure out" whether "they want peace or war." The meeting came a day after an earlier round of talks aimed at ending the war in Ukraine wrapped up in Abu Dhabi.
Russian presidential aide Yuri Ushakov said last week the talks in Shenzhen would continue the diplomatic efforts aimed at reaching a negotiated settlement to the Ukraine war, according to state-controlled local media Russia Today.
China and Russia could turn more aggressive with their military ambitions over the next two years if they perceive Trump as politically weakened, Brookings Institution senior fellow Robert Kagan told CNBC earlier this month, following the dramatic defeat of Trump's Republican Party in the midterm election.
China did not specify what will be discussed at the three leaders' meeting in Monday's statement.
"Xi may be inclined to do Putin a favor by showing up, given close strategic ties," said Wang. But a joint statement on Ukraine territory, security arrangements or sanctions against Russia appears unlikely, he said, as it would leave Beijing "more exposed to political scrutiny and accountability."
A U.S.-China trade truce set to expire in January is likely to be on the table, with analysts largely expecting an extension despite signs of growing friction in the bilateral relationship.
Aside from an immediate extension, leaders may also look to assess "whether a more durable framework for a rebalancing of U.S.–China trade relations can be established," said Carlos Casanova, senior economist for Asia at UBP.
U.S. trade deficit with China remains substantial, with Beijing's exports to Washington recording double-digit growth for most of this year, from last year's low base. Narrowing that deficit will be central to Washington's call for a more balanced trade, Casanova said.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/16/trump-xi-putin-ukraine-nuclear-tariffs-russia-iran-.html",
    publishedAt: "2026-11-16T04:34:00+00:00",
    category: "貿易",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
    readTime: 10,
  },
  {
    id: "china-s-slowdown-deepens-in-october-as-i-bc870298",
    title: "China’s slowdown deepens in October as industrial output, retail sales, investment miss estimates",
    titleJa: "China’s slowdown deepens in October as industrial output, retail sales, investment miss estimates",
    summaryJa: "A deepening reliance on external demand leaves China more exposed to shocks abroad as domestic momentum fades, analysts say.",
    bodyOriginal: `China's economic slowdown worsened in October with retail sales, investment and industrial output all missing economists' estimates, as analysts warn a growing reliance on external demand leaves growth more exposed to shocks abroad.
Monday's data showed the investment slump deepened and retail sales again lagged industrial output, as consumer spending languished with the property market downturn eroding household wealth for a fifth year.
Retail sales, a gauge of consumption, rose 0.4% from a year ago in October, disappointing analysts' forecast for a 0.8% rise, slowing from a six-month high of 1.1% in September.
Industrial output expanded 4.8% from a year earlier last month, missing analysts' estimates for 5.3% growth and sharply slowing from 5.5% in September, the highest level in five months.
For the first ten months of this year, fixed-asset investments, including property and infrastructure, shrank 8.1%, deepening a collapse plaguing the economy this year that's unprecedented outside the Covid-19 period. That figure marked a significant deterioration compared to analysts' expectations for a 7% decline.
The economic malaise also weighed on the labor market. Unemployment inched lower to 5.1% in October, while the jobless rate for those aged between 16 and 24, excluding students, hovered near the highest level in a year, standing at 18% in September.
Growth in the world's second-largest economy bounced off three-year lows in the third quarter, expanding 4.5% from a year earlier. Goldman Sachs expects China's economy to slow to 4.6% this year, from 5% expansion in 2025, before easing further to 4.5% in 2027.
The Wall Street bank expects the low inflation to extend into next year, with consumer inflation ticking lower to 0.8% this year, 0.5 in 2027. It cited soft domestic demand, abundant aggregate supply, easing commodity-price momentum and potential artificial intelligence disruption risks.
Despite the moderation, the projected growth rate still puts the economy on track to achieve Beijing's ambition of doubling 2020 per capita income by 2035, Goldman Sachs said in a note Monday.
Subdued consumer inflation and roaring exports paint a picture of an economy increasingly dominant in global markets but struggling to generate prosperity at home. Consumer inflation ticked down to 0.7% in October, its first deceleration after two straight months of increases, while exports surged by a more-than-expected 35.2%.
China is on track to surpass last year's record $1.2 trillion trade surplus despite growing trade tensions, with the gap reaching the $1 trillion threshold by October — the fastest it has ever reached that mark.
AI demand risks
The strong export momentum has largely been driven by global demand for AI-related technology and equipment. Any signs of pullback in the industry could weigh on China's exports, analysts warn.
"The market was already worried" about a slowdown in the AI capital-spending cycle even before the Nvidia scandal that put flows of restricted chips to China under renewed scrutiny, said Zhiwei Zhang, president and chief economist at Pinpoint Asset Management.
"Now the risk has become even more serious," Zhang said, forecasting further downside risk for global economic growth next year.
The increasingly lopsided growth came as major trading partners have ramped up calls for the economy to rebalance. Headwinds on China's export engine could intensify next year, with further trade restrictions from the European Union posing a critical downside risk, Citi Research analysts said.
"More EU trade measures targeting China look plausible to us, potentially adding to tensions ahead," the bank said, though Beijing is likely to be open to negotiating "reasonable, practical concessions," such as import pledges, sector-specific deals and value-added tax rebate cuts.
— CNBC's Evelyn Cheng contributed to this report.`,
    bodyJa: `China's economic slowdown worsened in October with retail sales, investment and industrial output all missing economists' estimates, as analysts warn a growing reliance on external demand leaves growth more exposed to shocks abroad.
Monday's data showed the investment slump deepened and retail sales again lagged industrial output, as consumer spending languished with the property market downturn eroding household wealth for a fifth year.
Retail sales, a gauge of consumption, rose 0.4% from a year ago in October, disappointing analysts' forecast for a 0.8% rise, slowing from a six-month high of 1.1% in September.
Industrial output expanded 4.8% from a year earlier last month, missing analysts' estimates for 5.3% growth and sharply slowing from 5.5% in September, the highest level in five months.
For the first ten months of this year, fixed-asset investments, including property and infrastructure, shrank 8.1%, deepening a collapse plaguing the economy this year that's unprecedented outside the Covid-19 period. That figure marked a significant deterioration compared to analysts' expectations for a 7% decline.
The economic malaise also weighed on the labor market. Unemployment inched lower to 5.1% in October, while the jobless rate for those aged between 16 and 24, excluding students, hovered near the highest level in a year, standing at 18% in September.
Growth in the world's second-largest economy bounced off three-year lows in the third quarter, expanding 4.5% from a year earlier. Goldman Sachs expects China's economy to slow to 4.6% this year, from 5% expansion in 2025, before easing further to 4.5% in 2027.
The Wall Street bank expects the low inflation to extend into next year, with consumer inflation ticking lower to 0.8% this year, 0.5 in 2027. It cited soft domestic demand, abundant aggregate supply, easing commodity-price momentum and potential artificial intelligence disruption risks.
Despite the moderation, the projected growth rate still puts the economy on track to achieve Beijing's ambition of doubling 2020 per capita income by 2035, Goldman Sachs said in a note Monday.
Subdued consumer inflation and roaring exports paint a picture of an economy increasingly dominant in global markets but struggling to generate prosperity at home. Consumer inflation ticked down to 0.7% in October, its first deceleration after two straight months of increases, while exports surged by a more-than-expected 35.2%.
China is on track to surpass last year's record $1.2 trillion trade surplus despite growing trade tensions, with the gap reaching the $1 trillion threshold by October — the fastest it has ever reached that mark.
AI demand risks
The strong export momentum has largely been driven by global demand for AI-related technology and equipment. Any signs of pullback in the industry could weigh on China's exports, analysts warn.
"The market was already worried" about a slowdown in the AI capital-spending cycle even before the Nvidia scandal that put flows of restricted chips to China under renewed scrutiny, said Zhiwei Zhang, president and chief economist at Pinpoint Asset Management.
"Now the risk has become even more serious," Zhang said, forecasting further downside risk for global economic growth next year.
The increasingly lopsided growth came as major trading partners have ramped up calls for the economy to rebalance. Headwinds on China's export engine could intensify next year, with further trade restrictions from the European Union posing a critical downside risk, Citi Research analysts said.
"More EU trade measures targeting China look plausible to us, potentially adding to tensions ahead," the bank said, though Beijing is likely to be open to negotiating "reasonable, practical concessions," such as import pledges, sector-specific deals and value-added tax rebate cuts.
— CNBC's Evelyn Cheng contributed to this report.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/16/china-retail-sales-october-industrial-output-investment.html",
    publishedAt: "2026-11-16T03:53:59+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "tech-world-s-calls-for-jensen-huang-to-r-fdc77f3c",
    title: "Tech world's calls for Jensen Huang to return to Nvidia are growing",
    titleJa: "Tech world's calls for Jensen Huang to return to Nvidia are growing",
    summaryJa: "Calls for Jensen Huang's return as Nvidia CEO are growing, with tech executives and major shareholders backing a potential comeback following his resignation.",
    bodyOriginal: `An online petition calling for Jensen Huang's reinstatement as CEO of Nvidia has drawn more than 160,000 signatures, as prominent tech executives, employees and shareholders rally behind the chipmaker's co-founder following his resignation last week.
The "Stand with Jensen" campaign has attracted support from Tesla CEO Elon Musk, Epic Games CEO Tim Sweeney and Y Combinator CEO Garry Tan, according to the petition's website, which notes that affiliations are self-reported and not verified.
Huang, who co-founded the company in 1993 and helped turn it into a dominant supplier of artificial intelligence chips, resigned as Nvidia's president, CEO and board member last week following reports of extramarital affairs — including one involving a woman suspected of ties to Chinese intelligence.
Nvidia appointed longtime finance chief Colette Kress as interim CEO and said its board would consider both internal and external candidates in its search for a permanent successor. The growing campaign to reinstate Huang adds a layer of complexity to the decision for Nvidia's board as it looks to put the controversy behind it, and coincides with reports that he is considering a comeback.
Any potential return, however, faces significant hurdles. Nvidia's board is continuing an independent investigation into the conduct that led to Huang's departure. What's more, U.S. lawmakers are preparing for investigations into how the now-ex-CEO's affair may have damaged America's artificial intelligence dominance, the national security implications and the executive's close relationship with President Donald Trump and his Cabinet.
Silicon Valley's view
Musk was among the most prominent tech executives to publicly back Huang's reinstatement, saying on X that he would sign a petition calling for the former Nvidia chief's return.
"A petition is underway to reinstate Jensen and I'm signing it too," Musk wrote on X. He had previously also said it would be "an honor" to hire Huang.
The campaign has drawn support from people identifying themselves as current and former Nvidia employees, shareholders and business partners, according to the petition's website. It calls on Nvidia's board to ensure a fair investigation into Huang's conduct and provide greater transparency around the circumstances of his departure.
Some Nvidia employees have also publicly expressed support for Huang, with one engineer saying he had decided to leave the company following the CEO's departure.
Darrell Dai, who identified himself as a robotics engineer at Nvidia, said Huang's vision and the engineering culture he fostered were key reasons he had stayed at the company.
Another Nvidia employee, Vartika Singh, who said she had worked at the chipmaker for nearly eight years, praised Huang's leadership and personal support during a family medical crisis.
"I have never worked for anyone quite like Jensen Huang, and I doubt I ever will," Singh wrote on X, describing his commitment to employees, researchers and startups.
The push has also gained traction among major shareholders, with Altimeter Capital CEO Brad Gerstner and Atreides Management's Gavin Baker urging Nvidia's board to consider all options, including Huang's potential return, in an open letter Friday.
The investors called for a measured approach to choosing Nvidia's next leader, arguing that Huang deserved a fair process before the board made any permanent decision.
Reinstatement chances
Huang has discussed the possibility of returning as Nvidia's chief executive with close confidants, the Financial Times reported, citing multiple people familiar with the matter.
One of his allies told the FT that supporters were assembling a "war room" of Silicon Valley executives to lobby for his reinstatement and would seek backing from the White House.
The efforts had Huang's support, the person added, according to the report.
"We are in the process of selecting a search firm for the NVIDIA CEO role. We have not formally engaged any potential candidates," an Nvidia spokesperson said in response to CNBC's request for comment on the company's search.
The spokesperson added that any speculation about individual candidates, whether internal or external, was premature.
Anthony Scaramucci, founder of alternative investment firm SkyBridge and a former White House communications director, also dismissed the prospect of Huang returning as CEO, saying the investigations surrounding him presented obstacles that a public campaign could not overcome.
"The tech bros want Jensen back. Not happening," Scaramucci wrote on X, arguing that Nvidia's board could not reinstate a chief executive whose conduct remained under investigation.
In a separate post, Scaramucci rejected comparisons with OpenAI CEO Sam Altman, who returned to the company days after being ousted in 2023.
"The FBI doesn't take petitions," he wrote, saying that Huang's situation was fundamentally different from Altman's. Altman's ouster stemmed from an internal governance dispute, while Huang's situation involves ongoing investigations into his conduct that make a swift board reversal far more difficult.
Megaspeed, a Singapore-based company linked to the controversy, said recent media reports contained assertions about its business and supply chain that were not supported by verifiable evidence.
The company said it had retained external legal counsel to conduct an internal investigation and that Alice Huang, a woman reportedly romantically linked to Jensen Huang and an alleged Chinese spy, left Megaspeed effective Aug. 30, 2025, and no longer holds any role there.
Alice Huang may have owned stakes in businesses in China that benefited Nvidia's biggest competitor in China, Huawei, CNBC reported earlier.
Meanwhile, Nvidia's board has approached Arm CEO Rene Haas as a potential successor to Huang, the FT reported. Nvidia's board said at the time that it had not formally engaged any candidates.
Some analysts see a path for Huang to return despite the controversy surrounding his departure.
Jay Goldberg, a senior analyst at Seaport Research Partners, said Huang could make a comeback if he overcomes his legal challenges, citing his influence in the AI industry and continued support from investors.
"If he can get through the legal trouble, I think we'll have a second act from him," Goldberg told CNBC's "Squawk Box Asia."
But not everyone on Wall Street is convinced it can happen so soon.
"We see no chance Jensen comes back to Nvidia as CEO," Dan Ives, partner and senior managing director at Yorkville Ives & Co., said in a note.
Ives said the shareholder petition and public pressure could create further distractions for Nvidia, but would not change the central task facing interim CEO Kress: restoring stability and investor confidence.
Ives added that Nvidia's leadership in AI chips and its long-term demand outlook remained intact despite the management upheaval.
Nvidia is scheduled to report its fiscal third-quarter earnings Tuesday, putting Kress and the company's leadership team under the spotlight as investors look for reassurance about its future.`,
    bodyJa: `An online petition calling for Jensen Huang's reinstatement as CEO of Nvidia has drawn more than 160,000 signatures, as prominent tech executives, employees and shareholders rally behind the chipmaker's co-founder following his resignation last week.
The "Stand with Jensen" campaign has attracted support from Tesla CEO Elon Musk, Epic Games CEO Tim Sweeney and Y Combinator CEO Garry Tan, according to the petition's website, which notes that affiliations are self-reported and not verified.
Huang, who co-founded the company in 1993 and helped turn it into a dominant supplier of artificial intelligence chips, resigned as Nvidia's president, CEO and board member last week following reports of extramarital affairs — including one involving a woman suspected of ties to Chinese intelligence.
Nvidia appointed longtime finance chief Colette Kress as interim CEO and said its board would consider both internal and external candidates in its search for a permanent successor. The growing campaign to reinstate Huang adds a layer of complexity to the decision for Nvidia's board as it looks to put the controversy behind it, and coincides with reports that he is considering a comeback.
Any potential return, however, faces significant hurdles. Nvidia's board is continuing an independent investigation into the conduct that led to Huang's departure. What's more, U.S. lawmakers are preparing for investigations into how the now-ex-CEO's affair may have damaged America's artificial intelligence dominance, the national security implications and the executive's close relationship with President Donald Trump and his Cabinet.
Silicon Valley's view
Musk was among the most prominent tech executives to publicly back Huang's reinstatement, saying on X that he would sign a petition calling for the former Nvidia chief's return.
"A petition is underway to reinstate Jensen and I'm signing it too," Musk wrote on X. He had previously also said it would be "an honor" to hire Huang.
The campaign has drawn support from people identifying themselves as current and former Nvidia employees, shareholders and business partners, according to the petition's website. It calls on Nvidia's board to ensure a fair investigation into Huang's conduct and provide greater transparency around the circumstances of his departure.
Some Nvidia employees have also publicly expressed support for Huang, with one engineer saying he had decided to leave the company following the CEO's departure.
Darrell Dai, who identified himself as a robotics engineer at Nvidia, said Huang's vision and the engineering culture he fostered were key reasons he had stayed at the company.
Another Nvidia employee, Vartika Singh, who said she had worked at the chipmaker for nearly eight years, praised Huang's leadership and personal support during a family medical crisis.
"I have never worked for anyone quite like Jensen Huang, and I doubt I ever will," Singh wrote on X, describing his commitment to employees, researchers and startups.
The push has also gained traction among major shareholders, with Altimeter Capital CEO Brad Gerstner and Atreides Management's Gavin Baker urging Nvidia's board to consider all options, including Huang's potential return, in an open letter Friday.
The investors called for a measured approach to choosing Nvidia's next leader, arguing that Huang deserved a fair process before the board made any permanent decision.
Reinstatement chances
Huang has discussed the possibility of returning as Nvidia's chief executive with close confidants, the Financial Times reported, citing multiple people familiar with the matter.
One of his allies told the FT that supporters were assembling a "war room" of Silicon Valley executives to lobby for his reinstatement and would seek backing from the White House.
The efforts had Huang's support, the person added, according to the report.
"We are in the process of selecting a search firm for the NVIDIA CEO role. We have not formally engaged any potential candidates," an Nvidia spokesperson said in response to CNBC's request for comment on the company's search.
The spokesperson added that any speculation about individual candidates, whether internal or external, was premature.
Anthony Scaramucci, founder of alternative investment firm SkyBridge and a former White House communications director, also dismissed the prospect of Huang returning as CEO, saying the investigations surrounding him presented obstacles that a public campaign could not overcome.
"The tech bros want Jensen back. Not happening," Scaramucci wrote on X, arguing that Nvidia's board could not reinstate a chief executive whose conduct remained under investigation.
In a separate post, Scaramucci rejected comparisons with OpenAI CEO Sam Altman, who returned to the company days after being ousted in 2023.
"The FBI doesn't take petitions," he wrote, saying that Huang's situation was fundamentally different from Altman's. Altman's ouster stemmed from an internal governance dispute, while Huang's situation involves ongoing investigations into his conduct that make a swift board reversal far more difficult.
Megaspeed, a Singapore-based company linked to the controversy, said recent media reports contained assertions about its business and supply chain that were not supported by verifiable evidence.
The company said it had retained external legal counsel to conduct an internal investigation and that Alice Huang, a woman reportedly romantically linked to Jensen Huang and an alleged Chinese spy, left Megaspeed effective Aug. 30, 2025, and no longer holds any role there.
Alice Huang may have owned stakes in businesses in China that benefited Nvidia's biggest competitor in China, Huawei, CNBC reported earlier.
Meanwhile, Nvidia's board has approached Arm CEO Rene Haas as a potential successor to Huang, the FT reported. Nvidia's board said at the time that it had not formally engaged any candidates.
Some analysts see a path for Huang to return despite the controversy surrounding his departure.
Jay Goldberg, a senior analyst at Seaport Research Partners, said Huang could make a comeback if he overcomes his legal challenges, citing his influence in the AI industry and continued support from investors.
"If he can get through the legal trouble, I think we'll have a second act from him," Goldberg told CNBC's "Squawk Box Asia."
But not everyone on Wall Street is convinced it can happen so soon.
"We see no chance Jensen comes back to Nvidia as CEO," Dan Ives, partner and senior managing director at Yorkville Ives & Co., said in a note.
Ives said the shareholder petition and public pressure could create further distractions for Nvidia, but would not change the central task facing interim CEO Kress: restoring stability and investor confidence.
Ives added that Nvidia's leadership in AI chips and its long-term demand outlook remained intact despite the management upheaval.
Nvidia is scheduled to report its fiscal third-quarter earnings Tuesday, putting Kress and the company's leadership team under the spotlight as investors look for reassurance about its future.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/16/nvidia-jensen-huang-return-tech.html",
    publishedAt: "2026-11-16T03:35:09+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "investors-sue-chip-giant-intel-after-29-7966049a",
    title: "Investors sue chip giant Intel after 29% stock plunge",
    titleJa: "Investors sue chip giant Intel after 29% stock plunge",
    summaryJa: "A proposed class action says Intel hid the impact of slowing sales, inflating its shares.",
    bodyOriginal: `Investors sue chip giant Intel after 29% stock plunge
- Published
Shareholders have sued US chip giant Intel, accusing it of hiding the severity of a slump in personal computer (PC) sales, which they say led to a nearly 29% one-day collapse in the firm's stock.
A proposed class action lawsuit in San Jose, California said Intel was too late to alert shareholders about how slowing sales could impact its earnings, allegedly artificially inflating its stock price.
Intel shares plunged on 30 October, erasing tens of billions of dollars off its market value the day after it forecasted disappointing revenue in its coming earnings report.
The BBC has contacted Intel for comment.
The lawsuit, filed by legal firm Robbins Geller Rudman & Dowd on behalf of owners of Intel common shares between 23 July and 29 October this year, was filed against the chipmaker, its chief executive Tan Lip-Bu and other company leaders.
Intel has been accused of making "materially false and/or misleading" statements that failed to disclose the slowdown in PC sales and the impact of its data centre projects, the complaint said.
In October, the firm announced that its computer hardware sales had dropped sharply in the three months that ended in September. That report undermined earlier suggestions from Intel that demand had been improving, sending Intel shares plunging, according to the lawsuit.
The lawsuit said the "depressed demand for PC sales" caused "a dramatic slowdown" in quarterly earnings – a drop of 9%, or about $800m, to $8.1bn.
Intel has poured huge investments into manufacturing to meet the enormous demand for AI computing power.
As more semiconductors are channelled towards data centres, chips for PCs and other electronics have become more expensive.
Intel boss Tan had told analysts that the industry was facing an "unprecedented memory crunch", resulting in a shortage of chip supplies for PCs.
"We need to address these challenges with urgency," Tan said in October.
Intel shares have fallen sharply in the past month by 37.5%, though the stock is still up by 51% overall this year.
Related topics
- Published22 August 2025
- Published20 hours ago`,
    bodyJa: `Investors sue chip giant Intel after 29% stock plunge
- Published
Shareholders have sued US chip giant Intel, accusing it of hiding the severity of a slump in personal computer (PC) sales, which they say led to a nearly 29% one-day collapse in the firm's stock.
A proposed class action lawsuit in San Jose, California said Intel was too late to alert shareholders about how slowing sales could impact its earnings, allegedly artificially inflating its stock price.
Intel shares plunged on 30 October, erasing tens of billions of dollars off its market value the day after it forecasted disappointing revenue in its coming earnings report.
The BBC has contacted Intel for comment.
The lawsuit, filed by legal firm Robbins Geller Rudman & Dowd on behalf of owners of Intel common shares between 23 July and 29 October this year, was filed against the chipmaker, its chief executive Tan Lip-Bu and other company leaders.
Intel has been accused of making "materially false and/or misleading" statements that failed to disclose the slowdown in PC sales and the impact of its data centre projects, the complaint said.
In October, the firm announced that its computer hardware sales had dropped sharply in the three months that ended in September. That report undermined earlier suggestions from Intel that demand had been improving, sending Intel shares plunging, according to the lawsuit.
The lawsuit said the "depressed demand for PC sales" caused "a dramatic slowdown" in quarterly earnings – a drop of 9%, or about $800m, to $8.1bn.
Intel has poured huge investments into manufacturing to meet the enormous demand for AI computing power.
As more semiconductors are channelled towards data centres, chips for PCs and other electronics have become more expensive.
Intel boss Tan had told analysts that the industry was facing an "unprecedented memory crunch", resulting in a shortage of chip supplies for PCs.
"We need to address these challenges with urgency," Tan said in October.
Intel shares have fallen sharply in the past month by 37.5%, though the stock is still up by 51% overall this year.
Related topics
- Published22 August 2025
- Published20 hours ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cw62p42p288do?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-16T03:04:01+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/e63c/live/afebacc0-e14f-11f1-8fb1-c394c4317b6a.jpg",
    readTime: 5,
  },
  {
    id: "japan-s-economy-unexpectedly-contracts-i-303dab90",
    title: "Japan's economy unexpectedly contracts in third-quarter as elevated energy costs bite",
    titleJa: "Japan's economy unexpectedly contracts in third-quarter as elevated energy costs bite",
    summaryJa: "Energy subsidies for households had reportedly expired in September, exposing the economy to the higher energy prices brought about by the Iran war.",
    bodyOriginal: `Japan's economy unexpectedly contracted in the third quarter, shrinking at an annualized 0.1% compared to the previous quarter, as elevated energy prices weighed on consumption and net exports.
A Reuters poll of economists had estimated the economy to grow at 0.3% in the three months to September, while GDP had expanded at 1.4% in the previous quarter.
Japan's exports beat expectations for two of the three months in the quarter, but net exports weighed on the economy due to higher costs of energy imports, cutting 0.6 percentage point from the country's growth.
Energy subsidies for households had reportedly expired in September, exposing consumers to higher energy prices brought about by the Iran war.
The GDP data could complicate Japan's policy normalization path, though there's still a 75.6% chance of the Bank of Japan raising rates by 25 basis points in December, according to LSEG.
"Today's GDP data is hardly a green light for the BOJ to hike in December," according to Krishna Bhimavarapu, APAC economist at State Street Investment Management.
He pointed out that real final sales of domestic product fell 2.1% annualized, which is the largest decline outside the Covid-19 pandemic and the first quarter of 2022. "[This] looks to be a loss of momentum," he added. That metric is a measure of
Real final sales of domestic product refer to GDP growth, net of private inventories, and indicate underlying demand.
Marcel Thieliant, head of Asia Pacific at Capital Economics, still expects the BOJ to go ahead with the rate hike. "It looks increasingly likely that the Bank will have to tighten policy more aggressively than we've been anticipating as inflation is about to surge."
The BOJ had declared that its 2% underlying inflation target had been met for the first time in 13 years at its meeting last month. Core inflation in September also hit its highest level this year at 2.1%, overshooting analysts' expectations.
On an year-on-year basis Japan's economy grew 1.1%, its strongest growth since the second quarter of 2025. Theliant noted that this was owed to a lower base in the third quarter of 2025.
Following the data release, the Nikkei 225 fell 0.62%, while the yield on the benchmark 10-year Japanese Government Bonds was at 2.885%. The yen weakened marginally against the dollar, trading at 159.76.`,
    bodyJa: `Japan's economy unexpectedly contracted in the third quarter, shrinking at an annualized 0.1% compared to the previous quarter, as elevated energy prices weighed on consumption and net exports.
A Reuters poll of economists had estimated the economy to grow at 0.3% in the three months to September, while GDP had expanded at 1.4% in the previous quarter.
Japan's exports beat expectations for two of the three months in the quarter, but net exports weighed on the economy due to higher costs of energy imports, cutting 0.6 percentage point from the country's growth.
Energy subsidies for households had reportedly expired in September, exposing consumers to higher energy prices brought about by the Iran war.
The GDP data could complicate Japan's policy normalization path, though there's still a 75.6% chance of the Bank of Japan raising rates by 25 basis points in December, according to LSEG.
"Today's GDP data is hardly a green light for the BOJ to hike in December," according to Krishna Bhimavarapu, APAC economist at State Street Investment Management.
He pointed out that real final sales of domestic product fell 2.1% annualized, which is the largest decline outside the Covid-19 pandemic and the first quarter of 2022. "[This] looks to be a loss of momentum," he added. That metric is a measure of
Real final sales of domestic product refer to GDP growth, net of private inventories, and indicate underlying demand.
Marcel Thieliant, head of Asia Pacific at Capital Economics, still expects the BOJ to go ahead with the rate hike. "It looks increasingly likely that the Bank will have to tighten policy more aggressively than we've been anticipating as inflation is about to surge."
The BOJ had declared that its 2% underlying inflation target had been met for the first time in 13 years at its meeting last month. Core inflation in September also hit its highest level this year at 2.1%, overshooting analysts' expectations.
On an year-on-year basis Japan's economy grew 1.1%, its strongest growth since the second quarter of 2025. Theliant noted that this was owed to a lower base in the third quarter of 2025.
Following the data release, the Nikkei 225 fell 0.62%, while the yield on the benchmark 10-year Japanese Government Bonds was at 2.885%. The yen weakened marginally against the dollar, trading at 159.76.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/16/japan-q3-gdp-energy-oil-prices.html",
    publishedAt: "2026-11-16T02:56:24+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 6,
  },
  {
    id: "black-friday-and-tax-return-scams-don-t-779db28a",
    title: "Black Friday and tax return scams  - don't fall for these",
    titleJa: "Black Friday and tax return scams  - don't fall for these",
    summaryJa: "Tens of thousands of scams are reported to HMRC - so it has advice on how to spot a fake request and refund.",
    bodyOriginal: `Black Friday and tax return scams - don't fall for these
- Published
This month's Black Friday and the tax return deadline at the end of January are both opportunities for fraudsters to scam you.
That's because people are more likely to expect emails, texts and other correspondence at this time of year.
Fraudsters will use the dates to impersonate genuine organisations and retailers by pushing victims towards fake websites to steal personal information.
Here's how to spot a scam and how you can avoid being caught out.
Is it really HMRC? Here's how to tell
If you are self-employed or have more than one source of income you will need to file a tax return by the end of January.
Fraudsters seize on this deadline to blitz people with messages that look like they are official and from the UK's tax authority, HMRC.
Any such calls or messages should be ignored, but you can also check whether an email, external, text message, external or phone call, external claiming to be from HMRC is genuine.
"Reporting scams helps us shut them down and protect others," adds Lucy Pike, HMRC's chief security officer.
New figures from HMRC, shared with the BBC, show that it received 95,340 reports of suspected scams in the year to the end of October.
There were 900 reports of one specific scam which used emails containing a malicious attachment which directed customers to a fake gov.uk webpage designed to steal personal and financial information.
To avoid being caught out, HMRC says:
it never contacts people by email, text or phone to tell them they are due a refund or ask them to claim one
it never asks for personal or financial information by email or text message
it never leaves threatening voicemails about legal action or arrest
Is it a real deal? Here's how to check
In the run-up to Black Friday you may be looking around for discounts, but fraudsters will impersonate genuine retailers to steal personal details or take payment for a product that will never be delivered.
Kirsty Adams, a fraud and scams expert at High Street bank Barclays, says make sure you pause before you buy.
"When you're scrolling on the sofa and a countdown timer starts ticking, or a deal pops up in your feed from an account that looks just like a brand you trust, it's easy to get swept up and pay before you've had a chance to check.
"No deal is worth rushing for. So take a moment before you buy."
The bank also advises doing these four things:
Pause and check, rather than being blinded by a countdown timer
Pay safely using a credit or debit card via a trusted payment service, not a bank transfer to a stranger
Open an official website or app yourself rather than clicking on links in emails, ads or social posts
Talk to a friend, family or your bank if you think something does not feel right, and calling your bank straight away if you think you've been scammed
Related topics
- Published7 days ago
- Published19 October`,
    bodyJa: `Black Friday and tax return scams - don't fall for these
- Published
This month's Black Friday and the tax return deadline at the end of January are both opportunities for fraudsters to scam you.
That's because people are more likely to expect emails, texts and other correspondence at this time of year.
Fraudsters will use the dates to impersonate genuine organisations and retailers by pushing victims towards fake websites to steal personal information.
Here's how to spot a scam and how you can avoid being caught out.
Is it really HMRC? Here's how to tell
If you are self-employed or have more than one source of income you will need to file a tax return by the end of January.
Fraudsters seize on this deadline to blitz people with messages that look like they are official and from the UK's tax authority, HMRC.
Any such calls or messages should be ignored, but you can also check whether an email, external, text message, external or phone call, external claiming to be from HMRC is genuine.
"Reporting scams helps us shut them down and protect others," adds Lucy Pike, HMRC's chief security officer.
New figures from HMRC, shared with the BBC, show that it received 95,340 reports of suspected scams in the year to the end of October.
There were 900 reports of one specific scam which used emails containing a malicious attachment which directed customers to a fake gov.uk webpage designed to steal personal and financial information.
To avoid being caught out, HMRC says:
it never contacts people by email, text or phone to tell them they are due a refund or ask them to claim one
it never asks for personal or financial information by email or text message
it never leaves threatening voicemails about legal action or arrest
Is it a real deal? Here's how to check
In the run-up to Black Friday you may be looking around for discounts, but fraudsters will impersonate genuine retailers to steal personal details or take payment for a product that will never be delivered.
Kirsty Adams, a fraud and scams expert at High Street bank Barclays, says make sure you pause before you buy.
"When you're scrolling on the sofa and a countdown timer starts ticking, or a deal pops up in your feed from an account that looks just like a brand you trust, it's easy to get swept up and pay before you've had a chance to check.
"No deal is worth rushing for. So take a moment before you buy."
The bank also advises doing these four things:
Pause and check, rather than being blinded by a countdown timer
Pay safely using a credit or debit card via a trusted payment service, not a bank transfer to a stranger
Open an official website or app yourself rather than clicking on links in emails, ads or social posts
Talk to a friend, family or your bank if you think something does not feel right, and calling your bank straight away if you think you've been scammed
Related topics
- Published7 days ago
- Published19 October`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cm4gnlz2p61ko?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-16T00:50:39+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/ab33/live/9ed5ff60-dea9-11f1-98eb-79ee6ea9ba56.jpg",
    readTime: 7,
  },
  {
    id: "cut-national-insurance-for-under-25s-to-ad6ae5ae",
    title: "Cut national insurance for under-25s to create jobs, Milburn report to say",
    titleJa: "Cut national insurance for under-25s to create jobs, Milburn report to say",
    summaryJa: "The report being launched this week will suggest gradually reducing employment costs over five years.",
    bodyOriginal: `Cut national insurance for under-25s to create jobs, Milburn report to say
- Published
National Insurance (NI) paid by businesses on workers aged under 25 should be gradually lowered to encourage companies to create jobs for young people, a major review of youth unemployment will say.
A report by former Labour minister Alan Milburn will suggest the government should reduce NI costs over five years for people aged between 21 and 24 years old, starting in retail and hospitality.
Under Sir Keir Starmer, the government raised NI for firms. Milburn will say the number of young people not in employment, education or training - known as Neets - was not started by the NI rise.
But shadow work and pensions secretary, Helen Whately, said the government should "just stop doing the taxing".
The independent report, which has been in the works for a year and will be published on Tuesday, will also make recommendations on reducing the UK's benefits bill.
Milburn has said the government spends £22bn a year supporting young people who are economically inactive. There are nearly one million so-called Neets aged between 16 and 24 in the UK, according to data from the Office for National Statistics.
He will recommend that under-25s should no longer be able to claim the health element of UK-wide Universal Credit or personal independence payment (Pip), which is the main disability benefit in England and Wales.
Milburn wants the government to provide a legal guarantee of a job, training or employment support. Those who refuse to take up help could lose their benefits.
Milburn is also expected to say that helping young people develop skills is pointless if there are no jobs available for them.
The former health secretary will recommend doubling the threshold at which businesses start paying NI for 21 to 24-year-olds from £5,000 to £10,000.
But he will say this should only be done "when fiscal conditions allow".
Immediately axing NI for 21 to 24-year-olds would cost £5.1bn, according to research by the Resolution Foundation, a left-leaning think tank.
Milburn is set to say that given the UK's fiscal position, an immediate across-the-board cut in employer NI is not the best use of several billions of pounds of public money.
'Government's foot firmly on my neck'
But Collette Osborne, a hairdresser who owns three salons in Nottingham, said she feels "suffocated by employment costs" including NI and the minimum wage.
She said she used to employ eight apprentices a year, now she cannot afford to take on any. Her workforce has more than halved to 21 staff.
Osborne told the BBC it costs "around £60,000 to train an apprentice before we can actually start allowing them onto customers' heads".
She said she has had parents so desperate for their children to find employment at her salons that some have even offered to pay their wages.
"I'm inundated with applications - and I mean inundated - which is heartbreaking because I can't take them on," she said.
Osborne does not feel she is getting help to offer jobs to youngsters.
"I feel like the government's foot is firmly on my neck," she said. "They promise breathing space. I feel suffocated, suffocated by employment costs."
Milburn told the BBC's Sunday with Laura Kuenssberg programme he agreed with a recent move by Chancellor John Healey to slow down the equalisation of the national minimum wage across age groups.
Labour had pledged in its manifesto to remove "discriminatory age bands" and close the gap between adult minimum wages and pay for 18 to 20-year-olds.
But in his Budget, Healey said pay for that age group would rise from £10.85 to £11.27 an hour in April next year while people aged 21 and over will see their wages increase from £12.71 to £13.21.
"I understand why because nobody wants to see young workers on poverty pay," Milburn said, but he said it "imposed a lot of costs on [the] government".
"I think we have got to look very carefully at the convergence issue," he said.
Milburn said he supported the government subsidising wages to encourage businesses to take on young workers.
"Because young people today are walking into the workplace often with a mental health problem, ADHD or anxiety, if you're a small business that's a cost that you've got to absorb," he said.
"The state has a responsibility to help them with that."
On Sunday, Work and Pensions Secretary Pat McFadden said the government would extend its subsidised jobs guarantee scheme for 18 to 24-year-olds who are claiming Universal Credit.
People who have been on benefits for 12 months will be eligible, down from 18 months and the scheme would be available for people in England, Scotland and Wales.
McFadden said the scheme, which guarantees workers a six-month job, "will help more than 90,000 young people into work by March 2029".
But Whately said it is "just absurd that they are taxing businesses here and they're going to subsidise things that look like jobs over here. Just stop doing the taxing".
She said the Tories want to halve employer NI costs "because I talk to businesses who say they really want to employ young people but they just can't afford to anymore and the regulation that the Labour Party has put in place has made it harder".
Milburn will say that if the government does go ahead with a gradual reduction in NI over five years, it should start with businesses such as shops, bars and restaurants.
Retail and hospitality together provide 37% of jobs for young people aged between 16 and 24.
Additional reporting by Ollie Smith
Related topics
- Published3 days ago`,
    bodyJa: `Cut national insurance for under-25s to create jobs, Milburn report to say
- Published
National Insurance (NI) paid by businesses on workers aged under 25 should be gradually lowered to encourage companies to create jobs for young people, a major review of youth unemployment will say.
A report by former Labour minister Alan Milburn will suggest the government should reduce NI costs over five years for people aged between 21 and 24 years old, starting in retail and hospitality.
Under Sir Keir Starmer, the government raised NI for firms. Milburn will say the number of young people not in employment, education or training - known as Neets - was not started by the NI rise.
But shadow work and pensions secretary, Helen Whately, said the government should "just stop doing the taxing".
The independent report, which has been in the works for a year and will be published on Tuesday, will also make recommendations on reducing the UK's benefits bill.
Milburn has said the government spends £22bn a year supporting young people who are economically inactive. There are nearly one million so-called Neets aged between 16 and 24 in the UK, according to data from the Office for National Statistics.
He will recommend that under-25s should no longer be able to claim the health element of UK-wide Universal Credit or personal independence payment (Pip), which is the main disability benefit in England and Wales.
Milburn wants the government to provide a legal guarantee of a job, training or employment support. Those who refuse to take up help could lose their benefits.
Milburn is also expected to say that helping young people develop skills is pointless if there are no jobs available for them.
The former health secretary will recommend doubling the threshold at which businesses start paying NI for 21 to 24-year-olds from £5,000 to £10,000.
But he will say this should only be done "when fiscal conditions allow".
Immediately axing NI for 21 to 24-year-olds would cost £5.1bn, according to research by the Resolution Foundation, a left-leaning think tank.
Milburn is set to say that given the UK's fiscal position, an immediate across-the-board cut in employer NI is not the best use of several billions of pounds of public money.
'Government's foot firmly on my neck'
But Collette Osborne, a hairdresser who owns three salons in Nottingham, said she feels "suffocated by employment costs" including NI and the minimum wage.
She said she used to employ eight apprentices a year, now she cannot afford to take on any. Her workforce has more than halved to 21 staff.
Osborne told the BBC it costs "around £60,000 to train an apprentice before we can actually start allowing them onto customers' heads".
She said she has had parents so desperate for their children to find employment at her salons that some have even offered to pay their wages.
"I'm inundated with applications - and I mean inundated - which is heartbreaking because I can't take them on," she said.
Osborne does not feel she is getting help to offer jobs to youngsters.
"I feel like the government's foot is firmly on my neck," she said. "They promise breathing space. I feel suffocated, suffocated by employment costs."
Milburn told the BBC's Sunday with Laura Kuenssberg programme he agreed with a recent move by Chancellor John Healey to slow down the equalisation of the national minimum wage across age groups.
Labour had pledged in its manifesto to remove "discriminatory age bands" and close the gap between adult minimum wages and pay for 18 to 20-year-olds.
But in his Budget, Healey said pay for that age group would rise from £10.85 to £11.27 an hour in April next year while people aged 21 and over will see their wages increase from £12.71 to £13.21.
"I understand why because nobody wants to see young workers on poverty pay," Milburn said, but he said it "imposed a lot of costs on [the] government".
"I think we have got to look very carefully at the convergence issue," he said.
Milburn said he supported the government subsidising wages to encourage businesses to take on young workers.
"Because young people today are walking into the workplace often with a mental health problem, ADHD or anxiety, if you're a small business that's a cost that you've got to absorb," he said.
"The state has a responsibility to help them with that."
On Sunday, Work and Pensions Secretary Pat McFadden said the government would extend its subsidised jobs guarantee scheme for 18 to 24-year-olds who are claiming Universal Credit.
People who have been on benefits for 12 months will be eligible, down from 18 months and the scheme would be available for people in England, Scotland and Wales.
McFadden said the scheme, which guarantees workers a six-month job, "will help more than 90,000 young people into work by March 2029".
But Whately said it is "just absurd that they are taxing businesses here and they're going to subsidise things that look like jobs over here. Just stop doing the taxing".
She said the Tories want to halve employer NI costs "because I talk to businesses who say they really want to employ young people but they just can't afford to anymore and the regulation that the Labour Party has put in place has made it harder".
Milburn will say that if the government does go ahead with a gradual reduction in NI over five years, it should start with businesses such as shops, bars and restaurants.
Retail and hospitality together provide 37% of jobs for young people aged between 16 and 24.
Additional reporting by Ollie Smith
Related topics
- Published3 days ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c6p9dzmj514ko?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-15T22:30:03+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/ad4a/live/a30d20c0-e117-11f1-a7db-d90284d21c62.png",
    readTime: 10,
  },
  {
    id: "uk-will-have-voice-but-no-vote-on-eu-foo-d57dbf74",
    title: "UK will have 'voice' but no vote on EU food rules in Brexit reset",
    titleJa: "UK will have 'voice' but no vote on EU food rules in Brexit reset",
    summaryJa: "EU minister Hamish Falconer insists Britain would have some influence on policy as part of a new deal.",
    bodyOriginal: `UK will have 'voice' but no vote on EU food rules in Brexit reset
- Published
The UK will have a "voice in the room" but no vote on European Union food policies as part of a so-called "Brexit reset" to reduce red tape, EU relations minister Hamish Falconer has told the BBC.
Prime Minister Andy Burnham hopes to agree a deal at a summit on Friday but critics have said a reset will make the UK "a rule taker" but not a rule maker.
Falconer said the UK will be involved in a process to shape the rules and said the deal could help bring down prices for shoppers.
The reset would not involve any upfront payments, Falconer added, but made it clear there could well be an "exit clause" in case a future UK government reversed the closer alignment.
Falconer said it was "reasonable" to consider what would happen if a future Conservative or Reform government wanted to undo the new arrangements.
"The EU is worried about that and you can see why," he said.
The BBC understands that the clause is a result of EU concerns about the possible cost of having to rebuild facilities for border food safety checks which were put in place following Brexit.
The reset means they will be dismantled.
In September, the Conservative Party said it was "raising the alarm" over the government's planned reset, saying it would leave British consumers and businesses "dangerously exposed, with no input on how regulations are made or power to reject them".
Both the Conservatives and Reform have said they would undo the planned reset if they were in power.
The prime minister has said he believes there is a "win-win" deal to be had with the EU.
Speaking at a Marks & Spencer food court in central London, Falconer said the deal would help bring down costs for firms importing food.
"This will mean less cost for supermarkets, and I hope that less cost then turns into cheaper produce on the shelves," he said.
He said currently "pages and pages" of form-filling meant some suppliers had given up exporting to the EU and some products, such as Lincolnshire sausages, meant they were almost impossible to export at all.
Some M&S trucks require over 300 pages of documents for food exports, from export health certificates, phytosanitary certificates, visits from vets and border check paperwork.
Some exports are rejected for having the wrong colour of ink on forms, or an inaccurate Latin name for cooked meats.
"The amount of paperwork you would need to do, the amount of uncertainty - you have to have it in the right pen colour, if it's not black, it might be refused," Falconer said.
"If you're selling Cox apples from Kent, they have to wait a day before they go into the European Union."
The reset could also mean "tearing up" checks that were introduced on goods flowing from Great Britain to Northern Ireland, following Brexit, he said, as well as separate "Not for EU" labelling.
Falconer said the impact of the reset deal for food would be an additional £5bn.
The whole deal to be signed on Friday is calculated to add 0.4% to UK GDP.
This wider agreement includes aligning emissions trading rules, and agreeing to a youth mobility scheme, as well as the reset on food trading.
Tom Bradshaw, president of the National Farmers' Union, welcomed reduced border inspections and paperwork but said that for the NFU it was "a moment of opportunity and risk" with farmers waiting to see what carve-outs and transitional arrangements would be included.
Trade volumes in food exports to the EU had "fallen significantly - by over a third" since 2019, he said.
But the UK should take a "pragmatic" approach to implementing any new rules.
He raised pesticides and precision breeding - or gene edited crops - as areas where he hoped some compromise would be found.
UK firms are, for example, developing tomatoes engineered to contain extra vitamin D.
Historically the EU has had much stricter rules on gene-editing, but this year relaxed regulations.
Falconer said people would have to "wait and see the detail" in this area.
He said there were bound to be compromises and trade-offs in any deal but that where the UK had advantages the government wanted to make sure "those aren't lost under the deal".
Crisp flavourings a contentious area
Another contentious area has been crisp flavourings, with concerns raised that stricter EU rules on certain ingredients might limit the sale of some popular snack flavours in the UK.
"I want to take this opportunity to absolutely stamp down on misinformation about smoky bacon crisps," Falconer said.
Post-Brexit the UK had stayed "pretty closely aligned" to European food safety standards, he said.
Two leading snack brands had already adapted their recipes to accommodate EU rules, an example of the kind of alignment that would happen whether or not there was a reset of UK-EU relations.
"The truth is, almost every business in this country that wants to export food or drink will be aligning with EU rules because it's our biggest market.
"Lots of people, like the good people at Walkers and Frazzles have made these changes already, so I would want to reassure people, particularly smoky bacon fans, it's okay," he said.
- Published6 days ago
- Published14 September
- Published1 November`,
    bodyJa: `UK will have 'voice' but no vote on EU food rules in Brexit reset
- Published
The UK will have a "voice in the room" but no vote on European Union food policies as part of a so-called "Brexit reset" to reduce red tape, EU relations minister Hamish Falconer has told the BBC.
Prime Minister Andy Burnham hopes to agree a deal at a summit on Friday but critics have said a reset will make the UK "a rule taker" but not a rule maker.
Falconer said the UK will be involved in a process to shape the rules and said the deal could help bring down prices for shoppers.
The reset would not involve any upfront payments, Falconer added, but made it clear there could well be an "exit clause" in case a future UK government reversed the closer alignment.
Falconer said it was "reasonable" to consider what would happen if a future Conservative or Reform government wanted to undo the new arrangements.
"The EU is worried about that and you can see why," he said.
The BBC understands that the clause is a result of EU concerns about the possible cost of having to rebuild facilities for border food safety checks which were put in place following Brexit.
The reset means they will be dismantled.
In September, the Conservative Party said it was "raising the alarm" over the government's planned reset, saying it would leave British consumers and businesses "dangerously exposed, with no input on how regulations are made or power to reject them".
Both the Conservatives and Reform have said they would undo the planned reset if they were in power.
The prime minister has said he believes there is a "win-win" deal to be had with the EU.
Speaking at a Marks & Spencer food court in central London, Falconer said the deal would help bring down costs for firms importing food.
"This will mean less cost for supermarkets, and I hope that less cost then turns into cheaper produce on the shelves," he said.
He said currently "pages and pages" of form-filling meant some suppliers had given up exporting to the EU and some products, such as Lincolnshire sausages, meant they were almost impossible to export at all.
Some M&S trucks require over 300 pages of documents for food exports, from export health certificates, phytosanitary certificates, visits from vets and border check paperwork.
Some exports are rejected for having the wrong colour of ink on forms, or an inaccurate Latin name for cooked meats.
"The amount of paperwork you would need to do, the amount of uncertainty - you have to have it in the right pen colour, if it's not black, it might be refused," Falconer said.
"If you're selling Cox apples from Kent, they have to wait a day before they go into the European Union."
The reset could also mean "tearing up" checks that were introduced on goods flowing from Great Britain to Northern Ireland, following Brexit, he said, as well as separate "Not for EU" labelling.
Falconer said the impact of the reset deal for food would be an additional £5bn.
The whole deal to be signed on Friday is calculated to add 0.4% to UK GDP.
This wider agreement includes aligning emissions trading rules, and agreeing to a youth mobility scheme, as well as the reset on food trading.
Tom Bradshaw, president of the National Farmers' Union, welcomed reduced border inspections and paperwork but said that for the NFU it was "a moment of opportunity and risk" with farmers waiting to see what carve-outs and transitional arrangements would be included.
Trade volumes in food exports to the EU had "fallen significantly - by over a third" since 2019, he said.
But the UK should take a "pragmatic" approach to implementing any new rules.
He raised pesticides and precision breeding - or gene edited crops - as areas where he hoped some compromise would be found.
UK firms are, for example, developing tomatoes engineered to contain extra vitamin D.
Historically the EU has had much stricter rules on gene-editing, but this year relaxed regulations.
Falconer said people would have to "wait and see the detail" in this area.
He said there were bound to be compromises and trade-offs in any deal but that where the UK had advantages the government wanted to make sure "those aren't lost under the deal".
Crisp flavourings a contentious area
Another contentious area has been crisp flavourings, with concerns raised that stricter EU rules on certain ingredients might limit the sale of some popular snack flavours in the UK.
"I want to take this opportunity to absolutely stamp down on misinformation about smoky bacon crisps," Falconer said.
Post-Brexit the UK had stayed "pretty closely aligned" to European food safety standards, he said.
Two leading snack brands had already adapted their recipes to accommodate EU rules, an example of the kind of alignment that would happen whether or not there was a reset of UK-EU relations.
"The truth is, almost every business in this country that wants to export food or drink will be aligning with EU rules because it's our biggest market.
"Lots of people, like the good people at Walkers and Frazzles have made these changes already, so I would want to reassure people, particularly smoky bacon fans, it's okay," he said.
- Published6 days ago
- Published14 September
- Published1 November`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c6wy4l8nl42wo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-15T22:00:24+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/81c7/live/353868b0-6be8-11f1-aa71-afd82ef74c53.jpg",
    readTime: 10,
  },
  {
    id: "we-slept-here-flight-delays-linger-but-63ca4a0b",
    title: "'We slept here': Flight delays linger but schedule is back on track for Monday",
    titleJa: "'We slept here': Flight delays linger but schedule is back on track for Monday",
    summaryJa: "Flight disruptions lingered two days after the Federal Aviation Administration grounded departures nationwide for more than four hours.",
    bodyOriginal: `U.S. flights are set to run close to normal on Monday as airlines scramble to get back on track after the Federal Aviation Administration grounded departures nationwide for more than four hours on Friday.
Disruptions lingered on Sunday, but passengers were getting on their way.
More than 1,600 U.S. flights there were canceled as of noon ET and more than 4,000 were delayed, according to FlightAware data. That was far fewer than the almost 6,700 cancellations on Saturday and more than 9,200 on Sunday when the FAA halted all departures into U.S. airports.
"We slept here," said Beth Martin, who was trying to travel home to Birmingham, Alabama, from New York's LaGuardia Airport on Sunday at the end of her daughter's birthday trip. They were booked for Saturday night, and when delay announcements started rolling in from Delta Air Lines, they decided to make good use of the extra time: after strolling through Central Park, they went window shopping on Fifth Avenue.
But when the flight was canceled, the standby list on a backup flight looked grim, and their original midtown hotel was charging about $700 for an additional night, the two of them slept at LaGuardia on Saturday. She said they found wheelchairs to sleep in outside security.
Transportation Secretary Sean Duffy on Saturday tied the issue to a router and work to update from copper wires, a system overseen by L3Harris Technologies, to a fiber-optic system. FAA administrator Bryan Bedford said the upgrades were part of "routine" maintenance to switch over to fiber optic.
"We are supporting the FAA in its investigation to understand the conditions that led to the Nov. 13 ground stop of our nation's air travel," L3Harris said in a statement Saturday afternoon.
Airlines waived change fees and fare differences and offered pilots and flight attendants extra pay to ease the delays.
Customers told CNBC they were booked on several flights before getting on board.
Justine Fritz, who works in sales for a consumer goods company, was in New York for a business event on Friday. She tried five different flights before getting on a flight to Houston, then flew four hours out of her way to get back to Minneapolis after her Saturday flight was canceled. Fritz said she had so many boarding passes that TSA wouldn't let her through security at first.
"It's been bananas," she told CNBC at the gate. Fritz said she made the best of it by shopping and getting a haircut, but she's still disappointed.
"I'm missing the first hour of the Vikings game," she said.
Martin said her trip home with her daughter will take even longer. Delta booked them to Memphis, and her husband will drive the four hours from Birmingham to pick them up.
Shortly after the groundstop, the longest since 9/11, Duffy pushed Congress for as much as $50 billion for upgrades to the aging U.S. air traffic control system. A day later, Democratic lawmakers pushed back, citing unspent money from existing funding, which includes Congress's approval last year of $12.5 billion for airport and air traffic control improvements over five years.
"Our committee, on behalf of the flying public, will hold the administration accountable for what happened to make sure this chaos does not happen again," said Reps. Rick Larsen (D.-Wash.), ranking member of the House Committee on Transportation and Infrastructure, and Rep. Andre Carson (D.-Ind.), ranking member of the aviation subcommittee, said in a joint statement.`,
    bodyJa: `U.S. flights are set to run close to normal on Monday as airlines scramble to get back on track after the Federal Aviation Administration grounded departures nationwide for more than four hours on Friday.
Disruptions lingered on Sunday, but passengers were getting on their way.
More than 1,600 U.S. flights there were canceled as of noon ET and more than 4,000 were delayed, according to FlightAware data. That was far fewer than the almost 6,700 cancellations on Saturday and more than 9,200 on Sunday when the FAA halted all departures into U.S. airports.
"We slept here," said Beth Martin, who was trying to travel home to Birmingham, Alabama, from New York's LaGuardia Airport on Sunday at the end of her daughter's birthday trip. They were booked for Saturday night, and when delay announcements started rolling in from Delta Air Lines, they decided to make good use of the extra time: after strolling through Central Park, they went window shopping on Fifth Avenue.
But when the flight was canceled, the standby list on a backup flight looked grim, and their original midtown hotel was charging about $700 for an additional night, the two of them slept at LaGuardia on Saturday. She said they found wheelchairs to sleep in outside security.
Transportation Secretary Sean Duffy on Saturday tied the issue to a router and work to update from copper wires, a system overseen by L3Harris Technologies, to a fiber-optic system. FAA administrator Bryan Bedford said the upgrades were part of "routine" maintenance to switch over to fiber optic.
"We are supporting the FAA in its investigation to understand the conditions that led to the Nov. 13 ground stop of our nation's air travel," L3Harris said in a statement Saturday afternoon.
Airlines waived change fees and fare differences and offered pilots and flight attendants extra pay to ease the delays.
Customers told CNBC they were booked on several flights before getting on board.
Justine Fritz, who works in sales for a consumer goods company, was in New York for a business event on Friday. She tried five different flights before getting on a flight to Houston, then flew four hours out of her way to get back to Minneapolis after her Saturday flight was canceled. Fritz said she had so many boarding passes that TSA wouldn't let her through security at first.
"It's been bananas," she told CNBC at the gate. Fritz said she made the best of it by shopping and getting a haircut, but she's still disappointed.
"I'm missing the first hour of the Vikings game," she said.
Martin said her trip home with her daughter will take even longer. Delta booked them to Memphis, and her husband will drive the four hours from Birmingham to pick them up.
Shortly after the groundstop, the longest since 9/11, Duffy pushed Congress for as much as $50 billion for upgrades to the aging U.S. air traffic control system. A day later, Democratic lawmakers pushed back, citing unspent money from existing funding, which includes Congress's approval last year of $12.5 billion for airport and air traffic control improvements over five years.
"Our committee, on behalf of the flying public, will hold the administration accountable for what happened to make sure this chaos does not happen again," said Reps. Rick Larsen (D.-Wash.), ranking member of the House Committee on Transportation and Infrastructure, and Rep. Andre Carson (D.-Ind.), ranking member of the aviation subcommittee, said in a joint statement.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/15/flight-delays-ground-faa-stop.html",
    publishedAt: "2026-11-15T18:22:23+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 9,
  },
  {
    id: "bessent-calls-for-dramatic-shakeup-at-nv-43ed46a0",
    title: "Bessent calls for ‘dramatic shakeup’ at Nvidia, urges outside CEO",
    titleJa: "Bessent calls for ‘dramatic shakeup’ at Nvidia, urges outside CEO",
    summaryJa: "Bessent has criticized Howard Lutnick’s department over suspected chip diversion to China while defending President Donald Trump’s handling of the matter.",
    bodyOriginal: `Treasury Secretary Scott Bessent on Sunday called for a "dramatic shakeup" at Nvidia after CEO Jensen Huang's resignation, questioning whether the chipmaker pursued illicit sales of its advanced artificial intelligence chips to boost earnings.
Bessent said Nvidia's board should look outside the company for its next chief executive and suggested other executives should face scrutiny over the chip giant's compliance with U.S. export controls.
"I want to keep coming back to what was the culture at Nvidia, and were they pressing these seemingly illicit sales to goose their revenues and their earnings?" Bessent said in an interview on Fox News.
The remarks come amid a growing feud between Bessent and Commerce Secretary Howard Lutnick over the suspected diversion of advanced AI chips to China, even as the Treasury secretary continues to defend President Donald Trump's handling of the matter.
Both Bessent and Lutnick are expected to accompany Trump to China this week, Semafor reported Sunday, putting the two Cabinet secretaries alongside the president as he prepares to meet with Chinese President Xi Jinping and Russian President Vladimir Putin on the sidelines of the APEC summit.
A White House official told Reuters on Thursday that the president maintains "complete confidence" in Lutnick, despite mounting scrutiny of the secretary’s handling of the Nvidia matter.
Huang resigned Thursday following revelations about his relationship with Alice Huang, a former executive at Singapore-based Megaspeed, whom U.S. intelligence officials suspect of spying for China. Megaspeed is suspected of diverting Nvidia chips to China in violation of U.S. export controls.
Nvidia named Chief Financial Officer Colette Kress interim CEO.
Bessent suggested Sunday that Nvidia's problems extended well beyond Huang.
"If this were a bank and they hadn't complied like this, the OCC would be in there right now, and a lot of the executives would be removed," Bessent said, referring to the Office of the Comptroller of the Currency.
Bessent also questioned Nvidia's financial disclosures, pointing to a surge in reported Singapore revenue as its China sales fell.
Nvidia stopped separately reporting Singapore revenue in November 2025, saying a new methodology based on customers' headquarters rather than billing addresses better reflected the geographic distribution of its sales.
Bessent's remarks came two days after he told CNBC's "Squawk Box" that several federal agencies had supported adding Megaspeed to the government's export blacklist for months.
"But Commerce has the pen," Bessent said.
The public rebuke followed reporting by Axios that Bessent confronted Lutnick in the White House Situation Room over Commerce's failure to act against Megaspeed. Commerce denied that the confrontation took place.
Lutnick is also facing scrutiny over his family's financial ties to Nvidia. CNBC reported Friday that Cantor Fitzgerald, the Wall Street firm formerly run by Lutnick and now led by his sons, has helped arrange billions of dollars in financing for Nvidia's business partners.
Cantor said Nvidia share holdings fell nearly 50% over six months as national security concerns surrounding Huang escalated. The positions were associated with client swap transactions, not proprietary investments, the investment bank said.
There is no evidence Lutnick shared sensitive information with his sons or that Cantor traded on such information.
Bessent on Sunday said Trump had drawn a firm line against sales of chips more advanced than Nvidia's H200 to China. Trump himself authorized H200 sales to approved Chinese customers in December —following months of lobbying by Huang — in an arrangement under which the U.S. government would receive a 25% cut.
Bessent's latest criticism comes two days before Nvidia is scheduled to report its first quarterly earnings since Huang's departure.`,
    bodyJa: `Treasury Secretary Scott Bessent on Sunday called for a "dramatic shakeup" at Nvidia after CEO Jensen Huang's resignation, questioning whether the chipmaker pursued illicit sales of its advanced artificial intelligence chips to boost earnings.
Bessent said Nvidia's board should look outside the company for its next chief executive and suggested other executives should face scrutiny over the chip giant's compliance with U.S. export controls.
"I want to keep coming back to what was the culture at Nvidia, and were they pressing these seemingly illicit sales to goose their revenues and their earnings?" Bessent said in an interview on Fox News.
The remarks come amid a growing feud between Bessent and Commerce Secretary Howard Lutnick over the suspected diversion of advanced AI chips to China, even as the Treasury secretary continues to defend President Donald Trump's handling of the matter.
Both Bessent and Lutnick are expected to accompany Trump to China this week, Semafor reported Sunday, putting the two Cabinet secretaries alongside the president as he prepares to meet with Chinese President Xi Jinping and Russian President Vladimir Putin on the sidelines of the APEC summit.
A White House official told Reuters on Thursday that the president maintains "complete confidence" in Lutnick, despite mounting scrutiny of the secretary’s handling of the Nvidia matter.
Huang resigned Thursday following revelations about his relationship with Alice Huang, a former executive at Singapore-based Megaspeed, whom U.S. intelligence officials suspect of spying for China. Megaspeed is suspected of diverting Nvidia chips to China in violation of U.S. export controls.
Nvidia named Chief Financial Officer Colette Kress interim CEO.
Bessent suggested Sunday that Nvidia's problems extended well beyond Huang.
"If this were a bank and they hadn't complied like this, the OCC would be in there right now, and a lot of the executives would be removed," Bessent said, referring to the Office of the Comptroller of the Currency.
Bessent also questioned Nvidia's financial disclosures, pointing to a surge in reported Singapore revenue as its China sales fell.
Nvidia stopped separately reporting Singapore revenue in November 2025, saying a new methodology based on customers' headquarters rather than billing addresses better reflected the geographic distribution of its sales.
Bessent's remarks came two days after he told CNBC's "Squawk Box" that several federal agencies had supported adding Megaspeed to the government's export blacklist for months.
"But Commerce has the pen," Bessent said.
The public rebuke followed reporting by Axios that Bessent confronted Lutnick in the White House Situation Room over Commerce's failure to act against Megaspeed. Commerce denied that the confrontation took place.
Lutnick is also facing scrutiny over his family's financial ties to Nvidia. CNBC reported Friday that Cantor Fitzgerald, the Wall Street firm formerly run by Lutnick and now led by his sons, has helped arrange billions of dollars in financing for Nvidia's business partners.
Cantor said Nvidia share holdings fell nearly 50% over six months as national security concerns surrounding Huang escalated. The positions were associated with client swap transactions, not proprietary investments, the investment bank said.
There is no evidence Lutnick shared sensitive information with his sons or that Cantor traded on such information.
Bessent on Sunday said Trump had drawn a firm line against sales of chips more advanced than Nvidia's H200 to China. Trump himself authorized H200 sales to approved Chinese customers in December —following months of lobbying by Huang — in an arrangement under which the U.S. government would receive a 25% cut.
Bessent's latest criticism comes two days before Nvidia is scheduled to report its first quarterly earnings since Huang's departure.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/15/bessent-nvidia-ceo-lutnick-megaspeed.html",
    publishedAt: "2026-11-15T18:10:18+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "trump-breaks-silence-about-faa-nationwid-574cbb42",
    title: "Trump breaks silence about FAA nationwide ground stop, blames Biden administration",
    titleJa: "Trump breaks silence about FAA nationwide ground stop, blames Biden administration",
    summaryJa: "Trump blamed the Biden administration for the FAA’s aging system after a nationwide ground stop disrupted air travel and urged Congress to approve more funding.",
    bodyOriginal: `President Donald Trump on Sunday made his first public comments about Friday's nationwide ground stop by the Federal Aviation Administration, blaming the Biden administration for making an "old and broken" air traffic control system worse. Trump also urged Congress to approve more funding to modernize the system.
The ground stop lasted more than four hours Friday, disrupted flights nationwide, contributed to thousands of cancellations and delays, and affected hundreds of thousands of passengers.
"The Biden Administration was an FAA disaster," Trump wrote on his social media platform. "Big money spent unwisely, making an old and broken system worse than when they began."
The president added that his administration has "the knowledge and plan for the Flight Control Systems," but said that "we need Congress to give the money, FAST!"
Congress approved $12.5 billion for the FAA last year as part of a major tax and spending package. Transportation Secretary Sean Duffy has said that the aging air traffic control system will need more funding for a broader overhaul.
The FAA said its equipment became unstable after a high volume of data flooded its network. The agency said contractor work at one site may be related and that the underlying cause remains under investigation.
Nationwide FAA ground stops are rare. Before the Nov. 2026 shutdown, the last two were after the Sept. 11 attacks and a brief FAA computer outage in January 2023.`,
    bodyJa: `President Donald Trump on Sunday made his first public comments about Friday's nationwide ground stop by the Federal Aviation Administration, blaming the Biden administration for making an "old and broken" air traffic control system worse. Trump also urged Congress to approve more funding to modernize the system.
The ground stop lasted more than four hours Friday, disrupted flights nationwide, contributed to thousands of cancellations and delays, and affected hundreds of thousands of passengers.
"The Biden Administration was an FAA disaster," Trump wrote on his social media platform. "Big money spent unwisely, making an old and broken system worse than when they began."
The president added that his administration has "the knowledge and plan for the Flight Control Systems," but said that "we need Congress to give the money, FAST!"
Congress approved $12.5 billion for the FAA last year as part of a major tax and spending package. Transportation Secretary Sean Duffy has said that the aging air traffic control system will need more funding for a broader overhaul.
The FAA said its equipment became unstable after a high volume of data flooded its network. The agency said contractor work at one site may be related and that the underlying cause remains under investigation.
Nationwide FAA ground stops are rare. Before the Nov. 2026 shutdown, the last two were after the Sept. 11 attacks and a brief FAA computer outage in January 2023.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/15/trump-breaks-silence-on-faa-nationwide-ground-stop-blames-biden-.html",
    publishedAt: "2026-11-15T16:56:40+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "we-had-the-worst-fight-i-want-my-husban-49829581",
    title: "‘We had the worst fight’: I want my husband to retire at 65, but I don’t want to lose his $280,000 salary. Is that unreasonable?",
    titleJa: "‘We had the worst fight’: I want my husband to retire at 65, but I don’t want to lose his $280,000 salary. Is that unreasonable?",
    summaryJa: "“We have $2.6 million, most of it in his 401(k) and IRAs, plus $450,000 in a brokerage account.”",
    bodyOriginal: `“We have $2.6 million, most of it in his 401(k) and IRAs, plus $450,000 in a brokerage account.”`,
    bodyJa: `“We have $2.6 million, most of it in his 401(k) and IRAs, plus $450,000 in a brokerage account.”`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/we-had-the-worst-fight-weve-ever-had-i-want-my-husband-to-retire-at-65-but-i-dont-want-to-lose-his-280-000-salary-48511469?mod=mw_rss_topstories",
    publishedAt: "2026-11-15T16:00:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-41887542",
    readTime: 2,
  },
  {
    id: "suspected-china-spy-linked-to-nvidia-s-e-c621dae0",
    title: "Suspected China spy linked to Nvidia's ex-boss left in 2025, Megaspeed says",
    titleJa: "Suspected China spy linked to Nvidia's ex-boss left in 2025, Megaspeed says",
    summaryJa: "The Nvidia scandal has raised questions over whether advanced AI chips ended up in China, despite US restrictions.",
    bodyOriginal: `Suspected China spy linked to Nvidia's ex-boss left in 2025, Megaspeed says
- Published
Alice Huang, a suspected China spy who has been linked to Nvidia's former boss Jensen Huang, left her executive role at Megaspeed in August last year, the company says.
Jensen Huang resigned as chief executive of the AI chip-making giant Nvidia after it emerged he had allegedly had affairs with Alice Huang as well as with one of his employees.
Megaspeed is the biggest buyer of Nvidia chips in south-east Asia and the scandal at Nvidia has raised questions about the possibility that high-end AI chips may have ended up in China despite US export restrictions.
The Singapore-based company said on Sunday it had launched an internal investigation into its business.
It said it was aware of reports "containing assertions about our business, supply chain and global operations that are not supported by verifiable evidence".
It added that it "conducts legitimate and lawful business" and has "retained external legal counsel to conduct a thorough internal investigation".
On Friday, US Treasury Secretary Scott Bessent blamed fellow Trump cabinet colleague Howard Lutnick's commerce department for failing to properly oversee the export of high-end chips.
Bessent told CNBC that several agencies "were in favour of putting Megaspeed on the entity list for months... but Commerce has the pen... and you will have to ask them about their internal process".
The so-called entity list restricts US trade with overseas firms and individuals.
Lutnick has been called to testify before the Senate Banking Committee next month over his department's role in allowing Nvidia to export its advanced chips.
Other congressional committees have asked both Lutnick and his department to retain all records relating to Nvidia and Jensen Huang.
Megaspeed is suspected of giving backdoor access to Nvidia chips to Chinese companies via its data centres in Malaysia, Indonesia and Thailand.
Nvidia has been banned from selling its advanced chips to China.
While Singapore does not prohibit the transfer of advanced AI chips to companies abroad, such moves can breach US export controls.
Singapore has said that while it does not enforce "unilateral export controls imposed by other countries" it expects all companies in its jurisdiction to respect such regulations.
Megaspeed said it "designs and maintains its global operational and supply-chain control frameworks to comply with all applicable laws and regulatory regimes". It said this includes "US export control requirements and local jurisdiction rules in every market where we operate".
China has denied that Alice Huang is a spy and warned the US not to use the scandal as a "pretext for imposing a technological blockade" on AI technology.
Related topics
- Published2 days ago
- Published3 days ago`,
    bodyJa: `Suspected China spy linked to Nvidia's ex-boss left in 2025, Megaspeed says
- Published
Alice Huang, a suspected China spy who has been linked to Nvidia's former boss Jensen Huang, left her executive role at Megaspeed in August last year, the company says.
Jensen Huang resigned as chief executive of the AI chip-making giant Nvidia after it emerged he had allegedly had affairs with Alice Huang as well as with one of his employees.
Megaspeed is the biggest buyer of Nvidia chips in south-east Asia and the scandal at Nvidia has raised questions about the possibility that high-end AI chips may have ended up in China despite US export restrictions.
The Singapore-based company said on Sunday it had launched an internal investigation into its business.
It said it was aware of reports "containing assertions about our business, supply chain and global operations that are not supported by verifiable evidence".
It added that it "conducts legitimate and lawful business" and has "retained external legal counsel to conduct a thorough internal investigation".
On Friday, US Treasury Secretary Scott Bessent blamed fellow Trump cabinet colleague Howard Lutnick's commerce department for failing to properly oversee the export of high-end chips.
Bessent told CNBC that several agencies "were in favour of putting Megaspeed on the entity list for months... but Commerce has the pen... and you will have to ask them about their internal process".
The so-called entity list restricts US trade with overseas firms and individuals.
Lutnick has been called to testify before the Senate Banking Committee next month over his department's role in allowing Nvidia to export its advanced chips.
Other congressional committees have asked both Lutnick and his department to retain all records relating to Nvidia and Jensen Huang.
Megaspeed is suspected of giving backdoor access to Nvidia chips to Chinese companies via its data centres in Malaysia, Indonesia and Thailand.
Nvidia has been banned from selling its advanced chips to China.
While Singapore does not prohibit the transfer of advanced AI chips to companies abroad, such moves can breach US export controls.
Singapore has said that while it does not enforce "unilateral export controls imposed by other countries" it expects all companies in its jurisdiction to respect such regulations.
Megaspeed said it "designs and maintains its global operational and supply-chain control frameworks to comply with all applicable laws and regulatory regimes". It said this includes "US export control requirements and local jurisdiction rules in every market where we operate".
China has denied that Alice Huang is a spy and warned the US not to use the scandal as a "pretext for imposing a technological blockade" on AI technology.
Related topics
- Published2 days ago
- Published3 days ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cmdx1vpprk9vo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-15T14:56:21+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/fa43/live/e2a9a870-e10d-11f1-93e1-3b657b665bcf.jpg",
    readTime: 7,
  },
  {
    id: "minister-backs-legal-right-to-job-suppor-b65091f0",
    title: "Minister backs legal right to job support for young people",
    titleJa: "Minister backs legal right to job support for young people",
    summaryJa: "The work and pensions secretary said the level of support currently on offer was too vague.",
    bodyOriginal: `Minister backs legal right to job support for young people
- Published
The work and pensions secretary has backed the idea that the government should legally guarantee young people help to get into employment.
Pat McFadden told the BBC that job support should be given a "legislative underpinning", adding the level of assistance on offer was currently "vague".
McFadden also confirmed that some current benefit claimants would see their current entitlement to benefits reduced when they are reassessed.
But his Conservative counterpart Helen Whately said the idea of legally guaranteeing support "doesn't make sense" and ministers should focus instead on reducing taxes paid by employers.
It comes ahead of a long-awaited review by former Labour cabinet minister Alan Milburn, which will recommend on Tuesday that under-25s should be guaranteed job placements or training to help them find permanent work.
His report is also expected to say that under-25s should no longer be able to claim the health element of UK-wide universal credit - or personal independence payment (Pip), the main disability benefit in England and Wales.
Some could be eligible for a new "additional cost allowance" to cover day-to-day costs related to health conditions, under the plans.
Speaking to Sunday with Laura Kuenssberg, Milburn said the government should divert money away from the benefits system to boost work support, adding he wanted to see "billions" extra spent on help over the next decade.
However, the idea of reducing the entitlement of existing benefit claimants could prove controversial among Labour MPs, who scuppered a previous benefits-cutting plan under Sir Keir Starmer last year.
Milburn said the reduced entitlement for some should be accompanied by a new "duty on government" to provide jobs support to young people, such as apprenticeships, college places, job coaching, or a job.
He added that the temporary nature of previous job support schemes, including the Kickstart programme during the Covid pandemic, meant that they had been less effective as reducing long-term joblessness.
How the new guarantee would work in practice is not yet clear, with McFadden adding it would have to be "carefully" drafted.
Although local councils have some specific legal duties, including in the areas of child protection and homelessness, duties on central government currently tend to be much broader, such as operating a "comprehensive" health service.
Asked on the same programme whether he agreed with the idea of a guarantee, McFadden said: "I do think we need some legislative underpinning to this."
He added that the offer of support "needs to be more firm," adding: "People need more certainty about what they are entitled to."
He confirmed that the government planned to move younger claimants onto a new benefits system when they undergo scheduled reassessment, and some of them would not receive "what they would get today".
Other claimants, such as those with long-term disabilities, would receive an increased amount, he added.
Also speaking to Kuenssberg, shadow work and pensions secretary Helen Whately said her party backed moves to reduce welfare spending.
But she criticised the proposed legal guarantee of work support, arguing it might "sound a nice thing to do," but ministers would be better off reducing taxes and regulations on businesses to help youngsters find "real jobs".
She added it was "absurd" the government had increased taxes for employers in order to "subsidise things that look like jobs". She added: "Just stop doing the taxing.
Elsewhere in his interview, former health secretary Milburn said:
a sustainable reduction in welfare spending cannot be achieved in two or three years, warning that "crude cuts" to the benefits system would create other additional costs for government
GPs should not be responsible for signing sick notes declaring people unable to work
ministers should "look very carefully" at Labour's manifesto commitment to phase out the reduced minimum wage for those aged 18-21, adding that moves towards this had "imposed a lot of cost" on firms
It comes as the government announced it will further widen eligibly for its scheme that offers jobless under-25s subsidised six-month job roles on the minimum wage.
From next April, eligible claimants will be offered a role after 12 months of unsuccessfully looking for work, rather 18 currently.
It is the second time that eligibility for the scheme has been widened, after the maximum age was increased from 21 to 24 earlier this year.
Get in touch
How have you been affected by the issues raised in this story? Tell us about your experience.
Related topics
- Published2 days ago
- Published3 days ago`,
    bodyJa: `Minister backs legal right to job support for young people
- Published
The work and pensions secretary has backed the idea that the government should legally guarantee young people help to get into employment.
Pat McFadden told the BBC that job support should be given a "legislative underpinning", adding the level of assistance on offer was currently "vague".
McFadden also confirmed that some current benefit claimants would see their current entitlement to benefits reduced when they are reassessed.
But his Conservative counterpart Helen Whately said the idea of legally guaranteeing support "doesn't make sense" and ministers should focus instead on reducing taxes paid by employers.
It comes ahead of a long-awaited review by former Labour cabinet minister Alan Milburn, which will recommend on Tuesday that under-25s should be guaranteed job placements or training to help them find permanent work.
His report is also expected to say that under-25s should no longer be able to claim the health element of UK-wide universal credit - or personal independence payment (Pip), the main disability benefit in England and Wales.
Some could be eligible for a new "additional cost allowance" to cover day-to-day costs related to health conditions, under the plans.
Speaking to Sunday with Laura Kuenssberg, Milburn said the government should divert money away from the benefits system to boost work support, adding he wanted to see "billions" extra spent on help over the next decade.
However, the idea of reducing the entitlement of existing benefit claimants could prove controversial among Labour MPs, who scuppered a previous benefits-cutting plan under Sir Keir Starmer last year.
Milburn said the reduced entitlement for some should be accompanied by a new "duty on government" to provide jobs support to young people, such as apprenticeships, college places, job coaching, or a job.
He added that the temporary nature of previous job support schemes, including the Kickstart programme during the Covid pandemic, meant that they had been less effective as reducing long-term joblessness.
How the new guarantee would work in practice is not yet clear, with McFadden adding it would have to be "carefully" drafted.
Although local councils have some specific legal duties, including in the areas of child protection and homelessness, duties on central government currently tend to be much broader, such as operating a "comprehensive" health service.
Asked on the same programme whether he agreed with the idea of a guarantee, McFadden said: "I do think we need some legislative underpinning to this."
He added that the offer of support "needs to be more firm," adding: "People need more certainty about what they are entitled to."
He confirmed that the government planned to move younger claimants onto a new benefits system when they undergo scheduled reassessment, and some of them would not receive "what they would get today".
Other claimants, such as those with long-term disabilities, would receive an increased amount, he added.
Also speaking to Kuenssberg, shadow work and pensions secretary Helen Whately said her party backed moves to reduce welfare spending.
But she criticised the proposed legal guarantee of work support, arguing it might "sound a nice thing to do," but ministers would be better off reducing taxes and regulations on businesses to help youngsters find "real jobs".
She added it was "absurd" the government had increased taxes for employers in order to "subsidise things that look like jobs". She added: "Just stop doing the taxing.
Elsewhere in his interview, former health secretary Milburn said:
a sustainable reduction in welfare spending cannot be achieved in two or three years, warning that "crude cuts" to the benefits system would create other additional costs for government
GPs should not be responsible for signing sick notes declaring people unable to work
ministers should "look very carefully" at Labour's manifesto commitment to phase out the reduced minimum wage for those aged 18-21, adding that moves towards this had "imposed a lot of cost" on firms
It comes as the government announced it will further widen eligibly for its scheme that offers jobless under-25s subsidised six-month job roles on the minimum wage.
From next April, eligible claimants will be offered a role after 12 months of unsuccessfully looking for work, rather 18 currently.
It is the second time that eligibility for the scheme has been widened, after the maximum age was increased from 21 to 24 earlier this year.
Get in touch
How have you been affected by the issues raised in this story? Tell us about your experience.
Related topics
- Published2 days ago
- Published3 days ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cqr7gn1zmlj1o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-15T13:06:15+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/5ee9/live/2745bfb0-e103-11f1-b441-2b33b063138f.jpg",
    readTime: 10,
  },
  {
    id: "rivian-lucid-scout-ceos-aren-t-counting-2e4a7c72",
    title: "Rivian, Lucid, Scout CEOs aren’t counting on Democrats to restore EV federal support after midterm wins",
    titleJa: "Rivian, Lucid, Scout CEOs aren’t counting on Democrats to restore EV federal support after midterm wins",
    summaryJa: "EV makers have had to contend with flip-flopping regulatory support from Washington over the years.",
    bodyOriginal: `Leaders of several U.S. electric vehicle manufacturers said they're not counting on increased federal support for their businesses once Democrats gain control of Congress in January, but they said they'll gladly take it if it does happen.
That was the overall sentiment from CEOs of Rivian Automotive, Lucid Group and EV startup Scout Motors during interviews with CNBC after Democrats' historic midterm election wins.
"We've honestly constructed Scout from day one to be in an environment where we're not going to count on, let's say, legislation or count on things that may or may not be there," Scout CEO Scott Keogh, an automotive veteran, told CNBC on Wednesday.
EV makers have had to contend with flip-flopping support from Washington over the years. The Trump administration has ended or rolled back support for climate change initiatives and EVs that were supported by the Biden administration, including an up to $7,500 customer incentive for purchasing an EV.
Legacy automakers such as General Motors and EV startups alike had counted on such credits to help them boost their sales and assist in electric vehicle profitability. But now they don't have that same level of federal assistance.
'Plan for the worst'
Rivian CEO RJ Scaringe said it's his hope that the Democratic-controlled Congress and Republican President Donald Trump can find middle ground to make progress for the EV industry, but Rivian's not counting on that.
"We try not to plan for those sort of things. The reality is it's probably going to have less of an impact than we think," Scaringe said Nov. 6 following the election results. "I think we're going to actually have a lot of challenges getting things done."
Fellow EV manufacturer Lucid, which is backed by Saudi Arabia's Public Investment Fund, is taking a similar approach.
"You know, they say, 'Plan for the worst and … hope for the best.' That's all we can say," Lucid CEO Silvio Napoli told CNBC on Monday. "Anything positive, we'll take it."
The lack of expected support comes as Democrats seem to be more focused on hot topics such as healthcare and data centers rather than climate change and support for alternative energy technologies such as EVs.
CNBC previously reported that House Democrats plan to bring to the floor bills reinstating the enhanced health insurance subsidies that expired under the GOP-held Congress and reversing the Medicaid cuts Trump signed into law last year. They also plan to focus on oversight of the Trump administration and affordability.
Rachel McCleery, executive director of the nonprofit policy advisory Coalition for Reimagined Mobility at SAFE, said she believes affordability concerns also could include the cost of vehicles, including EVs.
"I fully expect there will be legislative debates over what to do moving forward, including on EV and EV supply chain incentives," McCleery, a former U.S. Department of Treasury senior advisor and Ford Motor policy director, said. "Bringing down the cost of vehicles for U.S. consumers is top of mind for Democratic policymakers, and electric vehicles are a critical aspect of this agenda because of the multiple challenges greater EV adoption solves for."
Affordability concerns
Scout's Keogh said if legislators decide to offer any type of support, he would prefer it to be for EV production, which could then have a trickle-down effect on vehicle pricing and help companies amid inflated costs.
"I always prefer it on the production side," Keogh said. "Anything that can drive down production cost is going to, of course, get passed along to the customer."
Affordability has been a concern for EV adoption as the vehicles typically cost more than traditional models with internal combustion engines.
Sales of EVs spiked last year ahead of the Trump administration ending the up to $7,500 incentive after September 2025, but have since come down from that high.
Cox Automotive reports the average price for a new electric vehicle as of September was more than $54,800, according to the most recent available data. That compared to the average overall industry at just over $51,100 last month.
"Ultimately, incentives can help accelerate adoption, but the industry can't build its long-term strategy around them," Stephanie Valdez Streaty, Cox director of industry insight, said Friday. "The goal has to be making EVs affordable and compelling enough that they make sense for more consumers with or without an incentive."`,
    bodyJa: `Leaders of several U.S. electric vehicle manufacturers said they're not counting on increased federal support for their businesses once Democrats gain control of Congress in January, but they said they'll gladly take it if it does happen.
That was the overall sentiment from CEOs of Rivian Automotive, Lucid Group and EV startup Scout Motors during interviews with CNBC after Democrats' historic midterm election wins.
"We've honestly constructed Scout from day one to be in an environment where we're not going to count on, let's say, legislation or count on things that may or may not be there," Scout CEO Scott Keogh, an automotive veteran, told CNBC on Wednesday.
EV makers have had to contend with flip-flopping support from Washington over the years. The Trump administration has ended or rolled back support for climate change initiatives and EVs that were supported by the Biden administration, including an up to $7,500 customer incentive for purchasing an EV.
Legacy automakers such as General Motors and EV startups alike had counted on such credits to help them boost their sales and assist in electric vehicle profitability. But now they don't have that same level of federal assistance.
'Plan for the worst'
Rivian CEO RJ Scaringe said it's his hope that the Democratic-controlled Congress and Republican President Donald Trump can find middle ground to make progress for the EV industry, but Rivian's not counting on that.
"We try not to plan for those sort of things. The reality is it's probably going to have less of an impact than we think," Scaringe said Nov. 6 following the election results. "I think we're going to actually have a lot of challenges getting things done."
Fellow EV manufacturer Lucid, which is backed by Saudi Arabia's Public Investment Fund, is taking a similar approach.
"You know, they say, 'Plan for the worst and … hope for the best.' That's all we can say," Lucid CEO Silvio Napoli told CNBC on Monday. "Anything positive, we'll take it."
The lack of expected support comes as Democrats seem to be more focused on hot topics such as healthcare and data centers rather than climate change and support for alternative energy technologies such as EVs.
CNBC previously reported that House Democrats plan to bring to the floor bills reinstating the enhanced health insurance subsidies that expired under the GOP-held Congress and reversing the Medicaid cuts Trump signed into law last year. They also plan to focus on oversight of the Trump administration and affordability.
Rachel McCleery, executive director of the nonprofit policy advisory Coalition for Reimagined Mobility at SAFE, said she believes affordability concerns also could include the cost of vehicles, including EVs.
"I fully expect there will be legislative debates over what to do moving forward, including on EV and EV supply chain incentives," McCleery, a former U.S. Department of Treasury senior advisor and Ford Motor policy director, said. "Bringing down the cost of vehicles for U.S. consumers is top of mind for Democratic policymakers, and electric vehicles are a critical aspect of this agenda because of the multiple challenges greater EV adoption solves for."
Affordability concerns
Scout's Keogh said if legislators decide to offer any type of support, he would prefer it to be for EV production, which could then have a trickle-down effect on vehicle pricing and help companies amid inflated costs.
"I always prefer it on the production side," Keogh said. "Anything that can drive down production cost is going to, of course, get passed along to the customer."
Affordability has been a concern for EV adoption as the vehicles typically cost more than traditional models with internal combustion engines.
Sales of EVs spiked last year ahead of the Trump administration ending the up to $7,500 incentive after September 2025, but have since come down from that high.
Cox Automotive reports the average price for a new electric vehicle as of September was more than $54,800, according to the most recent available data. That compared to the average overall industry at just over $51,100 last month.
"Ultimately, incentives can help accelerate adoption, but the industry can't build its long-term strategy around them," Stephanie Valdez Streaty, Cox director of industry insight, said Friday. "The goal has to be making EVs affordable and compelling enough that they make sense for more consumers with or without an incentive."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/15/rivian-lucid-scout-arent-counting-on-dems-to-restore-ev-incentives.html",
    publishedAt: "2026-11-15T13:00:02+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "anthropic-s-ipo-lands-as-the-embattled-a-dfb87a15",
    title: "Anthropic’s IPO lands as the embattled AI trade looks for a much-needed bright spot",
    titleJa: "Anthropic’s IPO lands as the embattled AI trade looks for a much-needed bright spot",
    summaryJa: "Anthropic's IPO has outsized importance in the tech industry, which is heavily invested in the AI lab and is desperate for some positive momentum.",
    bodyOriginal: `Between rising interest rates, a nationwide AI backlash, a major political shift in Washington, D.C., and the sudden ouster of Nvidia CEO Jensen Huang, the tech industry is under mounting strain.
Now comes the most important tech IPO in years, and a defining event for the burgeoning but still young artificial intelligence market.
With Anthropic expected to debut on the Nasdaq on Thursday, the stakes are sky-high for almost every major tech company. Advanced Micro Devices, Broadcom, Google, Micron, Microsoft, Nvidia and Taiwan Semiconductor Manufacturing Company are collectively investing $26 billion at the IPO price, which is currently expected at $70 to $78 a share. Some of those companies are existing investors, as is early backer Amazon, whose stake could be in the hundreds of billions of dollars.
In addition to all the cash on the line, tech giants also need Anthropic's spending for many years to come. The Claude creator and its top rival, OpenAI, are driving an outsized amount of the AI buildout, and are burning historic amounts of money in the process.
Anthropic has outstanding spending commitments of over $900 billion, according to its latest prospectus. It's on the hook to spend at least $110 billion with Amazon over the course of a decade, and another $400 billion with other companies for cloud capacity, according to filings and partner disclosures. The lab also made $300 billion in commitments with data center and chip partners. Anthropic intends to lay out $125 billion to $150 billion for AI chips from Google, though delivery won't start until 2028.
"The numbers are just staggering," Joe Fath, a partner at venture firm Eclipse and former T. Rowe Price portfolio manager, said in an interview. "It's hard to get your head wrapped around it."
Cloud partners Amazon, Google and Microsoft account for 31% of contractual obligations, Anthropic said in its prospectus. Last year, Amazon built an Indiana data center just for Anthropic, using custom chips.
By going public now, Anthropic can raise a large portion of the money it needs to pay for the technology and infrastructure required for building and hosting its frontier models and expanding portfolio of services. The company recorded a net loss of $104 billion through the first nine months of 2026. The IPO could yield over $90 billion in proceeds, on top of Anthropic's $132 billion in existing cash, including short-term investments.
The length of Anthropic's contracts is also unique. Typically such contracts last five years or less, while Anthropic's agreement with Amazon extends for twice that amount of time.
"Realistically, anything past three to four years, you're basically throwing darts in the dark," said Corey Quinn, chief cloud economist at spend management software vendor Duckbill. "It is almost a certainty that it will be renegotiated long before the culmination of that contract."
Meanwhile, a data center for Anthropic that starts leasing in 2027 has a 20-year term. For both space and computing, Anthropic is splurging now so it doesn't end up short on capacity long into the future.
"In the past, we have significantly underestimated our compute requirements, which left us capacity constrained and impacted both product development and deployment," Anthropic said in the prospectus.
Anthropic and Amazon didn't provide a comment.
'Future of Google'
It's a tough time for Anthropic to hit the Nasdaq, with the offering coming as tech investors are desperate for some good news. The Nasdaq is down to start November after dropping 5.3% in October, its worst month since March 2025.
Rising interest rates pushed investors out of debt-heavy neoclouds, which have become a critical piece of the infrastructure buildout. And in the midterm elections earlier this month, Democrats won sweeping victories in both houses of Congress and in key gubernatorial races, while dozens of ballot measures were passed that will potentially limit new data center development across the country.
Then came the Nvidia crisis. Shares of the chipmaker at the center of the AI boom tumbled 13% this week to their lowest since July 2025, after Huang's multiple reported affairs, including one with an alleged Chinese spy, led to his ouster early Thursday. Huang was replaced on an interim basis with CFO Colette Cress, who faces a major test on Tuesday, two days before the Anthropic debut, as Nvidia is set to report quarterly results.
The ongoing Nvidia fallout and the Anthropic IPO create quite the split-screen moment for tech's heavyweights, which are closely tied to both companies.
Google will be paying particularly close attention.
The company is set to own about 13% of Anthropic after the IPO, and is backstopping the lab's $19 billion in lease commitments to Terawulf, which will supply data center space in Kentucky. If Anthropic goes insolvent, Google will step in and pay the remaining rent or a termination fee, Terawulf said.
"Everybody knows that Anthropic is going to be the future of Google," said Subhadeep Chatterjee, a former Google cloud partnerships leader who now advises companies.
Google didn't provide a comment.
One major impetus for Anthropic to enter costly and long-term guarantees is that OpenAI is being equally aggressive, and capacity is limited, particularly for graphics processing units. Going long can mean locking in rates as the industry confronts questions about whether data center development will slow.
"You will need to be in a rush to get infrastructure, and if you are not going to be there, you will be out of business," said Eli Mansoor, CEO of OskaQ Consulting, which advises companies on cloud negotiations. "It used to be that prices always go down, but this is changing, especially in the GPU world."
Big financial firms are lining up to help Anthropic get what it wants. Bank of America, Blackstone, Citigroup and Morgan Stanley have offered $63 billion to buy racks full of Broadcom AI chips that Anthropic will rent. Broadcom has provided a backstop with a maximum liability of $43 billion.
That's a lot of silicon and a massive bet for a five-year-old company that's never lived through a technology downturn.
"It's not a risk-free prospect, but I would call it smart investing," said David Tollen, founder of Sycamore Legal, where he specializes in IT contracts. "They're investing, in a sense, in themselves. They're putting money into something that if it succeeds, they get a piece of the action."
WATCH: Buying Anthropic means betting its explosive growth can outpace its expenses, says Jim Cramer`,
    bodyJa: `Between rising interest rates, a nationwide AI backlash, a major political shift in Washington, D.C., and the sudden ouster of Nvidia CEO Jensen Huang, the tech industry is under mounting strain.
Now comes the most important tech IPO in years, and a defining event for the burgeoning but still young artificial intelligence market.
With Anthropic expected to debut on the Nasdaq on Thursday, the stakes are sky-high for almost every major tech company. Advanced Micro Devices, Broadcom, Google, Micron, Microsoft, Nvidia and Taiwan Semiconductor Manufacturing Company are collectively investing $26 billion at the IPO price, which is currently expected at $70 to $78 a share. Some of those companies are existing investors, as is early backer Amazon, whose stake could be in the hundreds of billions of dollars.
In addition to all the cash on the line, tech giants also need Anthropic's spending for many years to come. The Claude creator and its top rival, OpenAI, are driving an outsized amount of the AI buildout, and are burning historic amounts of money in the process.
Anthropic has outstanding spending commitments of over $900 billion, according to its latest prospectus. It's on the hook to spend at least $110 billion with Amazon over the course of a decade, and another $400 billion with other companies for cloud capacity, according to filings and partner disclosures. The lab also made $300 billion in commitments with data center and chip partners. Anthropic intends to lay out $125 billion to $150 billion for AI chips from Google, though delivery won't start until 2028.
"The numbers are just staggering," Joe Fath, a partner at venture firm Eclipse and former T. Rowe Price portfolio manager, said in an interview. "It's hard to get your head wrapped around it."
Cloud partners Amazon, Google and Microsoft account for 31% of contractual obligations, Anthropic said in its prospectus. Last year, Amazon built an Indiana data center just for Anthropic, using custom chips.
By going public now, Anthropic can raise a large portion of the money it needs to pay for the technology and infrastructure required for building and hosting its frontier models and expanding portfolio of services. The company recorded a net loss of $104 billion through the first nine months of 2026. The IPO could yield over $90 billion in proceeds, on top of Anthropic's $132 billion in existing cash, including short-term investments.
The length of Anthropic's contracts is also unique. Typically such contracts last five years or less, while Anthropic's agreement with Amazon extends for twice that amount of time.
"Realistically, anything past three to four years, you're basically throwing darts in the dark," said Corey Quinn, chief cloud economist at spend management software vendor Duckbill. "It is almost a certainty that it will be renegotiated long before the culmination of that contract."
Meanwhile, a data center for Anthropic that starts leasing in 2027 has a 20-year term. For both space and computing, Anthropic is splurging now so it doesn't end up short on capacity long into the future.
"In the past, we have significantly underestimated our compute requirements, which left us capacity constrained and impacted both product development and deployment," Anthropic said in the prospectus.
Anthropic and Amazon didn't provide a comment.
'Future of Google'
It's a tough time for Anthropic to hit the Nasdaq, with the offering coming as tech investors are desperate for some good news. The Nasdaq is down to start November after dropping 5.3% in October, its worst month since March 2025.
Rising interest rates pushed investors out of debt-heavy neoclouds, which have become a critical piece of the infrastructure buildout. And in the midterm elections earlier this month, Democrats won sweeping victories in both houses of Congress and in key gubernatorial races, while dozens of ballot measures were passed that will potentially limit new data center development across the country.
Then came the Nvidia crisis. Shares of the chipmaker at the center of the AI boom tumbled 13% this week to their lowest since July 2025, after Huang's multiple reported affairs, including one with an alleged Chinese spy, led to his ouster early Thursday. Huang was replaced on an interim basis with CFO Colette Cress, who faces a major test on Tuesday, two days before the Anthropic debut, as Nvidia is set to report quarterly results.
The ongoing Nvidia fallout and the Anthropic IPO create quite the split-screen moment for tech's heavyweights, which are closely tied to both companies.
Google will be paying particularly close attention.
The company is set to own about 13% of Anthropic after the IPO, and is backstopping the lab's $19 billion in lease commitments to Terawulf, which will supply data center space in Kentucky. If Anthropic goes insolvent, Google will step in and pay the remaining rent or a termination fee, Terawulf said.
"Everybody knows that Anthropic is going to be the future of Google," said Subhadeep Chatterjee, a former Google cloud partnerships leader who now advises companies.
Google didn't provide a comment.
One major impetus for Anthropic to enter costly and long-term guarantees is that OpenAI is being equally aggressive, and capacity is limited, particularly for graphics processing units. Going long can mean locking in rates as the industry confronts questions about whether data center development will slow.
"You will need to be in a rush to get infrastructure, and if you are not going to be there, you will be out of business," said Eli Mansoor, CEO of OskaQ Consulting, which advises companies on cloud negotiations. "It used to be that prices always go down, but this is changing, especially in the GPU world."
Big financial firms are lining up to help Anthropic get what it wants. Bank of America, Blackstone, Citigroup and Morgan Stanley have offered $63 billion to buy racks full of Broadcom AI chips that Anthropic will rent. Broadcom has provided a backstop with a maximum liability of $43 billion.
That's a lot of silicon and a massive bet for a five-year-old company that's never lived through a technology downturn.
"It's not a risk-free prospect, but I would call it smart investing," said David Tollen, founder of Sycamore Legal, where he specializes in IT contracts. "They're investing, in a sense, in themselves. They're putting money into something that if it succeeds, they get a piece of the action."
WATCH: Buying Anthropic means betting its explosive growth can outpace its expenses, says Jim Cramer`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/15/anthropic-ipo-is-make-or-break-for-the-technology-industry.html",
    publishedAt: "2026-11-15T12:00:01+00:00",
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
