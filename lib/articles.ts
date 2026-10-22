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
    id: "musk-s-clash-with-ukraine-accelerates-de-9f304431",
    title: "Musk's clash with Ukraine accelerates demand for Starlink alternatives. Few exist",
    titleJa: "Musk's clash with Ukraine accelerates demand for Starlink alternatives. Few exist",
    summaryJa: "Governments or companies looking for an alternative to SpaceX's Starlink are faced with few options, as Amazon, Eutelsat and others are far behind.",
    bodyOriginal: `Elon Musk's latest clash with Ukraine underscores the critical role that his company's Starlink satellite internet service has played in Kyiv's defense against Russia, which invaded unprovoked in 2022.
It's also laid bare the downsides of depending on a single provider for satellite internet communications, though other options are not yet comparable to SpaceX's Starlink and its military-grade Starshield offering.
On Oct. 14, Ukrainian officials accused SpaceX of undermining the country's ability to defend itself.
SpaceX and the U.S., they said, had suddenly and without warning imposed speed limits on Starshield. SpaceX describes Starshield as a "secured satellite network for government entities" that "leverages Starlink technology."
The changes cut wireless internet connectivity in drones and other aircraft moving at speeds over 100 mph that Ukrainian forces were using in the campaign against Russia. A Ukrainian senior commander told The New York Times the Starlink restrictions cost his unit more than $1 million and delayed missions by three days.
Musk and President Donald Trump, both critics of Ukrainian President Volodymyr Zelenskyy, have each shirked accountability for the communications disruptions in the war-torn nation.
On Tuesday, The Wall Street Journal reported that Musk individually ordered the service changes, and had discussed them with Trump before putting them in place. Trump insisted on Wednesday that he "was not involved."
Robert Weissman, who is co-president of watchdog group Public Citizen, said the situation is an "extreme danger" that raises antitrust and security concerns around Musk's ability to control a "crucial means of communication."
"People worry about the political, as well as economic, impacts of oligarchy, and this is it," Weissman said in an interview. "It's not just that Musk can drown out other speakers, he can close down communications in a national security context for a country. No person should have that ability or power."
The disruptions have prompted a bipartisan group of lawmakers in the U.S. to call for an investigation into Musk's actions, including calls for him to potentially testify under oath.
Sen. John Cornyn, R-Texas, told CNBC on Wednesday that he doesn't believe Musk would have acted "without at least the acquiescence of the White House," and called attempts to throttle Starlink service in Ukraine "frankly shameful."
"There's a reason why we've had relative peace in Europe since World War II," Cornyn said in a "Squawk on the Street" interview. "And that's because of the alliance between the United States and our European allies. And I think anything we do to undermine that or degrade that is a big mistake."
Rep. Pramila Jayapal, D-Wash., called for an investigation on the matter and wrote, in a social media post Wednesday, "No billionaire, especially one that gets massive contracts from our government, should have the power to unilaterally decide to shut down communications and weapons during a war of critical importance to the US and Ukraine."
On SpaceX's earnings call this week, executives didn't address the issue and weren't asked about it by analysts.
Starlink dominance
Governments or companies looking for an alternative to Musk, SpaceX and its satellite internet services have few options.
Amazon's Leo, which also delivers internet connectivity via a low Earth orbit satellite constellation, is seven years in the making and has yet to fully come online, with only 390 satellites in orbit.
SpaceX, by comparison, boasts a Starlink constellation of more than 11,000 satellites in orbit, according to data tracked by astronomer Jonathan C. McDowell. Starlink connectivity is live in 174 countries, SpaceX COO Gwynne Shotwell said on Tuesday's earnings call.
Blue Origin, Jeff Bezos' space company, in January unveiled a service called TeraWave for enterprise and government customers. It's targeting deployment of the first batch of satellites in the fourth quarter of 2027.
France's Eutelsat, also a competitor to Starlink, has more than 600 satellites in orbit. The stock surged 23% on Oct. 14 as reports emerged that Musk had restricted Starlink in Ukraine.
Several countries are looking into sovereign satellite communications systems. The EU is building IRIS², which is expected to span hundreds of satellites, but the first launches aren't expected until 2029.
Most of these planned systems are unlikely to "come anywhere close" in terms of capacity, coverage, resilience or cost compared to Starlink, said Christian Freiherr von der Ropp, an independent satellite consultant. The cost, size, weight and power draw of Eutelsat's terminals make them particularly unsuitable in the battlefield, he added.
While SpaceX's Connectivity business has raced ahead of rivals, the company also has the advantage of overseeing a hugely successful rocket launch business, which has carried satellites to orbit for many of its competitors.
SpaceX is now phasing out commercial rides on its workhorse Falcon 9 rocket, while it tests and develops its massive Starship rocket.
Many new constellations "could therefore face substantial delays and materially higher launch costs," von der Ropp said.
This week, Ukraine and European lawmakers moved to explore alternatives to Starlink, framing the issue as a matter of national security.
Their concern is that access to a critical communications service could potentially be disrupted "as a consequence of Musk's political agenda," said von der Ropp.
"The degree of soft power SpaceX has accumulated over companies, governments and militaries is substantial, and that has now become very visible," von der Ropp said. "Inevitably, this is creating mistrust and accelerating demand for alternatives."
Zelenskyy wrote Wednesday in a post on X that he met with Norwegian officials and Kongsberg, a Norwegian defense company, to discuss air defense systems and "launching work on new satellite communication capabilities for our warriors."
Musk enjoyed accolades for providing Starlink terminals and satellite internet service during the early days of the war, but relations have soured between the world's richest person and Ukrainian officials over the years.
Musk previously ordered SpaceX engineers to shut off Starlink's satellite network over Crimea to thwart a Ukrainian attack on Russian warships, according to a chapter in the 2023 Musk biography written by Walter Isaacson. Musk disputed the report. The revelation drew rebuke from Ukrainian officials, including a top Zelenskyy aide, who said it led to Ukrainian civilians being killed.
"This is the price of a cocktail of ignorance and big ego," Mykhailo Podolyak, a top Zelenskyy advisor, wrote in a post on X, then known as Twitter.
Musk has also repeatedly argued that Ukraine should strike a "truce" with Russia and cede ownership of Crimea, a strategically important territory, to Putin.
Musk's treatment of Ukraine played a part in Canada's decision to cut ties with Starlink. Officials in India and Taiwan have also expressed wariness of Starlink, citing national security concerns and preferring to adopt a mass communications service that's not controlled by SpaceX.
Musk lashed out at Indian "oligarchs" for stalling the Starlink rollout in the country.
He's also targeted some of Starlink's prospective enterprise customers.
Starlink has become the dominant provider for airlines' in-flight satellite Wi-Fi service, signing on dozens of carriers, including United Airlines, Alaska Airlines, American Airlines and Southwest Airlines.
But Delta Air Lines is one of the few carriers to choose Amazon's Leo service.
Earlier this month, Musk posted on X that Delta CEO Ed Bastian would "lose his job" over not choosing Starlink, following unconfirmed comments posted on X that Bastian told employees, "We do not want to be with Elon Musk. Trust me."
Bastian denied making the comment, and told CNBC on Oct. 9 that he's a "big fan" of Starlink and even drives a Tesla.
"All this nonsense about it being personal is not true at all," he said.
-- CNBC's Elsa Ohlen and Leslie Josephs contributed reporting to this story.
WATCH: Musk reportedly ordered Starlink slowdown for Ukraine`,
    bodyJa: `Elon Musk's latest clash with Ukraine underscores the critical role that his company's Starlink satellite internet service has played in Kyiv's defense against Russia, which invaded unprovoked in 2022.
It's also laid bare the downsides of depending on a single provider for satellite internet communications, though other options are not yet comparable to SpaceX's Starlink and its military-grade Starshield offering.
On Oct. 14, Ukrainian officials accused SpaceX of undermining the country's ability to defend itself.
SpaceX and the U.S., they said, had suddenly and without warning imposed speed limits on Starshield. SpaceX describes Starshield as a "secured satellite network for government entities" that "leverages Starlink technology."
The changes cut wireless internet connectivity in drones and other aircraft moving at speeds over 100 mph that Ukrainian forces were using in the campaign against Russia. A Ukrainian senior commander told The New York Times the Starlink restrictions cost his unit more than $1 million and delayed missions by three days.
Musk and President Donald Trump, both critics of Ukrainian President Volodymyr Zelenskyy, have each shirked accountability for the communications disruptions in the war-torn nation.
On Tuesday, The Wall Street Journal reported that Musk individually ordered the service changes, and had discussed them with Trump before putting them in place. Trump insisted on Wednesday that he "was not involved."
Robert Weissman, who is co-president of watchdog group Public Citizen, said the situation is an "extreme danger" that raises antitrust and security concerns around Musk's ability to control a "crucial means of communication."
"People worry about the political, as well as economic, impacts of oligarchy, and this is it," Weissman said in an interview. "It's not just that Musk can drown out other speakers, he can close down communications in a national security context for a country. No person should have that ability or power."
The disruptions have prompted a bipartisan group of lawmakers in the U.S. to call for an investigation into Musk's actions, including calls for him to potentially testify under oath.
Sen. John Cornyn, R-Texas, told CNBC on Wednesday that he doesn't believe Musk would have acted "without at least the acquiescence of the White House," and called attempts to throttle Starlink service in Ukraine "frankly shameful."
"There's a reason why we've had relative peace in Europe since World War II," Cornyn said in a "Squawk on the Street" interview. "And that's because of the alliance between the United States and our European allies. And I think anything we do to undermine that or degrade that is a big mistake."
Rep. Pramila Jayapal, D-Wash., called for an investigation on the matter and wrote, in a social media post Wednesday, "No billionaire, especially one that gets massive contracts from our government, should have the power to unilaterally decide to shut down communications and weapons during a war of critical importance to the US and Ukraine."
On SpaceX's earnings call this week, executives didn't address the issue and weren't asked about it by analysts.
Starlink dominance
Governments or companies looking for an alternative to Musk, SpaceX and its satellite internet services have few options.
Amazon's Leo, which also delivers internet connectivity via a low Earth orbit satellite constellation, is seven years in the making and has yet to fully come online, with only 390 satellites in orbit.
SpaceX, by comparison, boasts a Starlink constellation of more than 11,000 satellites in orbit, according to data tracked by astronomer Jonathan C. McDowell. Starlink connectivity is live in 174 countries, SpaceX COO Gwynne Shotwell said on Tuesday's earnings call.
Blue Origin, Jeff Bezos' space company, in January unveiled a service called TeraWave for enterprise and government customers. It's targeting deployment of the first batch of satellites in the fourth quarter of 2027.
France's Eutelsat, also a competitor to Starlink, has more than 600 satellites in orbit. The stock surged 23% on Oct. 14 as reports emerged that Musk had restricted Starlink in Ukraine.
Several countries are looking into sovereign satellite communications systems. The EU is building IRIS², which is expected to span hundreds of satellites, but the first launches aren't expected until 2029.
Most of these planned systems are unlikely to "come anywhere close" in terms of capacity, coverage, resilience or cost compared to Starlink, said Christian Freiherr von der Ropp, an independent satellite consultant. The cost, size, weight and power draw of Eutelsat's terminals make them particularly unsuitable in the battlefield, he added.
While SpaceX's Connectivity business has raced ahead of rivals, the company also has the advantage of overseeing a hugely successful rocket launch business, which has carried satellites to orbit for many of its competitors.
SpaceX is now phasing out commercial rides on its workhorse Falcon 9 rocket, while it tests and develops its massive Starship rocket.
Many new constellations "could therefore face substantial delays and materially higher launch costs," von der Ropp said.
This week, Ukraine and European lawmakers moved to explore alternatives to Starlink, framing the issue as a matter of national security.
Their concern is that access to a critical communications service could potentially be disrupted "as a consequence of Musk's political agenda," said von der Ropp.
"The degree of soft power SpaceX has accumulated over companies, governments and militaries is substantial, and that has now become very visible," von der Ropp said. "Inevitably, this is creating mistrust and accelerating demand for alternatives."
Zelenskyy wrote Wednesday in a post on X that he met with Norwegian officials and Kongsberg, a Norwegian defense company, to discuss air defense systems and "launching work on new satellite communication capabilities for our warriors."
Musk enjoyed accolades for providing Starlink terminals and satellite internet service during the early days of the war, but relations have soured between the world's richest person and Ukrainian officials over the years.
Musk previously ordered SpaceX engineers to shut off Starlink's satellite network over Crimea to thwart a Ukrainian attack on Russian warships, according to a chapter in the 2023 Musk biography written by Walter Isaacson. Musk disputed the report. The revelation drew rebuke from Ukrainian officials, including a top Zelenskyy aide, who said it led to Ukrainian civilians being killed.
"This is the price of a cocktail of ignorance and big ego," Mykhailo Podolyak, a top Zelenskyy advisor, wrote in a post on X, then known as Twitter.
Musk has also repeatedly argued that Ukraine should strike a "truce" with Russia and cede ownership of Crimea, a strategically important territory, to Putin.
Musk's treatment of Ukraine played a part in Canada's decision to cut ties with Starlink. Officials in India and Taiwan have also expressed wariness of Starlink, citing national security concerns and preferring to adopt a mass communications service that's not controlled by SpaceX.
Musk lashed out at Indian "oligarchs" for stalling the Starlink rollout in the country.
He's also targeted some of Starlink's prospective enterprise customers.
Starlink has become the dominant provider for airlines' in-flight satellite Wi-Fi service, signing on dozens of carriers, including United Airlines, Alaska Airlines, American Airlines and Southwest Airlines.
But Delta Air Lines is one of the few carriers to choose Amazon's Leo service.
Earlier this month, Musk posted on X that Delta CEO Ed Bastian would "lose his job" over not choosing Starlink, following unconfirmed comments posted on X that Bastian told employees, "We do not want to be with Elon Musk. Trust me."
Bastian denied making the comment, and told CNBC on Oct. 9 that he's a "big fan" of Starlink and even drives a Tesla.
"All this nonsense about it being personal is not true at all," he said.
-- CNBC's Elsa Ohlen and Leslie Josephs contributed reporting to this story.
WATCH: Musk reportedly ordered Starlink slowdown for Ukraine`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/22/elon-musk-ukraine-starlink-alternatives.html",
    publishedAt: "2026-10-22T16:54:26+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "lawsuit-accuses-trump-of-illegally-profi-9162dfa4",
    title: "Lawsuit accuses Trump of illegally profiting off foreign crypto deals",
    titleJa: "Lawsuit accuses Trump of illegally profiting off foreign crypto deals",
    summaryJa: "\"We're suing to stop the corruption and to force President Trump to return the profits to American taxpayers,\" attorney Matt Pelikan told CNBC.",
    bodyOriginal: `A lawsuit filed Thursday accuses President Donald Trump and his family's crypto company of "corruptly profiting" off more than $2 billion in digital currency-related deals, violating constitutional restrictions on accepting foreign money.
"No president in American history has profited from his office so brazenly," alleges the federal civil complaint from a shareholder of Circle Internet Group, a publicly traded U.S. crypto company and competitor of the Trump family business, World Liberty Financial.
The suit filed in U.S. District Court in Washington by shareholder and former Circle employee J. Benjamin Greenberg centers on two allegedly "illegal foreign emoluments" involving World Liberty and Sheikh Tahnoon bin Zayed Al Nahyan, the national security advisor to the United Arab Emirates.
Days before Trump's inauguration in January 2025, an entity backed by Tahnoon — widely known as the "Spy Sheikh" because of his powerful intelligence role — agreed to buy a 49% stake in World Liberty for $500 million.
The company told The Wall Street Journal, which revealed the transaction in January 2026, that Trump had no involvement in the deal. But Trump would receive millions of dollars from that purchase after becoming president, according to his financial disclosures.
The lawsuit also highlights a "scheme" by an Abu Dhabi-based investment fund chaired by Tahnoon to "inflate the value of President Trump's crypto holdings" through last year's purchase of $2 billion in World Liberty's stablecoin, USD1.
The lawsuit asserts the conduct violates the U.S. Constitution's Foreign Emoluments Clause, which forbids federal officeholders from accepting money or other gifts from foreign officials without the consent of Congress.
"What President Trump did is brazenly corrupt. He's made millions from these deals by selling out the American people," Matt Pelikan, an attorney at Evergreen Legal, said in a statement to CNBC.
"We're suing to stop the corruption and to force President Trump to return the profits to American taxpayers," Pelikan said.
The suit says Greenberg is filing derivatively on behalf of Circle. The company said in a statement to CNBC it was not behind the lawsuit and does not comment on pending litigation.
"Circle did not initiate, direct, authorize, or participate in the filing," the company said via a spokesperson.
The suit names Trump, World Liberty and U.S. Middle East Special Envoy Steve Witkoff as defendants, as well as four related limited liability companies.
"World Liberty Financial is compliant with all U.S. laws and regulations," David Wachsman, a World Liberty spokesperson, told CNBC. "No one at World Liberty Financial works for the U.S. Government. These claims are without merit and we look forward to resolving them in court."
The White House and a spokesperson for Witkoff did not immediately respond to CNBC's requests for comment on the lawsuit.
In addition to seeking a court declaration that Trump's profits violate the Constitution, Greenberg wants the president to disclose all other foreign crypto emoluments he's received and return any profits found to be illegal.
Trump and his family have rapidly expanded their crypto business since he returned to the White House. World Liberty Financial, launched with members of the Trump and Witkoff families in 2024, operates the USD1 stablecoin, and an entity affiliated with Trump and his family owns about 38% of the company.
The business has been highly lucrative for Trump even as WLFI investors suffered steep losses. Trump reported more than $1.4 billion in crypto income in his 2025 annual financial disclosure, including nearly $800 million tied to World Liberty. WLFI, meanwhile, fell from about 45 cents in August 2025 to about 5 cents by the end of June 2026.
The venture has drawn particular scrutiny over its ties to the UAE. Months after Tahnoon's 2025 investment, the administration expanded UAE access to advanced U.S. AI chips, including for G42, a UAE state-backed AI company controlled by Tahnoon.
U.S. lawmakers have sought information about those dealings and signaled that Trump family business transactions could face further investigation if Democrats gain subpoena power in Congress in the 2026 midterm election.`,
    bodyJa: `A lawsuit filed Thursday accuses President Donald Trump and his family's crypto company of "corruptly profiting" off more than $2 billion in digital currency-related deals, violating constitutional restrictions on accepting foreign money.
"No president in American history has profited from his office so brazenly," alleges the federal civil complaint from a shareholder of Circle Internet Group, a publicly traded U.S. crypto company and competitor of the Trump family business, World Liberty Financial.
The suit filed in U.S. District Court in Washington by shareholder and former Circle employee J. Benjamin Greenberg centers on two allegedly "illegal foreign emoluments" involving World Liberty and Sheikh Tahnoon bin Zayed Al Nahyan, the national security advisor to the United Arab Emirates.
Days before Trump's inauguration in January 2025, an entity backed by Tahnoon — widely known as the "Spy Sheikh" because of his powerful intelligence role — agreed to buy a 49% stake in World Liberty for $500 million.
The company told The Wall Street Journal, which revealed the transaction in January 2026, that Trump had no involvement in the deal. But Trump would receive millions of dollars from that purchase after becoming president, according to his financial disclosures.
The lawsuit also highlights a "scheme" by an Abu Dhabi-based investment fund chaired by Tahnoon to "inflate the value of President Trump's crypto holdings" through last year's purchase of $2 billion in World Liberty's stablecoin, USD1.
The lawsuit asserts the conduct violates the U.S. Constitution's Foreign Emoluments Clause, which forbids federal officeholders from accepting money or other gifts from foreign officials without the consent of Congress.
"What President Trump did is brazenly corrupt. He's made millions from these deals by selling out the American people," Matt Pelikan, an attorney at Evergreen Legal, said in a statement to CNBC.
"We're suing to stop the corruption and to force President Trump to return the profits to American taxpayers," Pelikan said.
The suit says Greenberg is filing derivatively on behalf of Circle. The company said in a statement to CNBC it was not behind the lawsuit and does not comment on pending litigation.
"Circle did not initiate, direct, authorize, or participate in the filing," the company said via a spokesperson.
The suit names Trump, World Liberty and U.S. Middle East Special Envoy Steve Witkoff as defendants, as well as four related limited liability companies.
"World Liberty Financial is compliant with all U.S. laws and regulations," David Wachsman, a World Liberty spokesperson, told CNBC. "No one at World Liberty Financial works for the U.S. Government. These claims are without merit and we look forward to resolving them in court."
The White House and a spokesperson for Witkoff did not immediately respond to CNBC's requests for comment on the lawsuit.
In addition to seeking a court declaration that Trump's profits violate the Constitution, Greenberg wants the president to disclose all other foreign crypto emoluments he's received and return any profits found to be illegal.
Trump and his family have rapidly expanded their crypto business since he returned to the White House. World Liberty Financial, launched with members of the Trump and Witkoff families in 2024, operates the USD1 stablecoin, and an entity affiliated with Trump and his family owns about 38% of the company.
The business has been highly lucrative for Trump even as WLFI investors suffered steep losses. Trump reported more than $1.4 billion in crypto income in his 2025 annual financial disclosure, including nearly $800 million tied to World Liberty. WLFI, meanwhile, fell from about 45 cents in August 2025 to about 5 cents by the end of June 2026.
The venture has drawn particular scrutiny over its ties to the UAE. Months after Tahnoon's 2025 investment, the administration expanded UAE access to advanced U.S. AI chips, including for G42, a UAE state-backed AI company controlled by Tahnoon.
U.S. lawmakers have sought information about those dealings and signaled that Trump family business transactions could face further investigation if Democrats gain subpoena power in Congress in the 2026 midterm election.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/22/trump-world-liberty-crypto-lawsuit-uae.html",
    publishedAt: "2026-10-22T16:49:56+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "jobless-claims-near-the-lowest-since-the-9ca3f0fe",
    title: "Jobless claims near the lowest since the 1960s as low-fire trend continues",
    titleJa: "Jobless claims near the lowest since the 1960s as low-fire trend continues",
    summaryJa: "Initial filings for unemployment insurance slipped to a seasonally adjusted 194,000.",
    bodyOriginal: `Employers continue to hold onto workers even as hiring remains weak, sending weekly jobless claims to around their lowest levels in records that stretch back nearly six decades.
Initial filings for unemployment insurance slipped to a seasonally adjusted 194,000 for the week ended Oct. 17, the Labor Department reported Thursday.
That marked another leg lower in the low-fire trend, with the total just off the 189,000 reported for the week of July 18 that was the lowest since September 1969. Claims have averaged 212,000 over the past year, and the four-week moving average is down to 197,750.
Those numbers come against an uncertain backdrop for the labor market.
Nonfarm payrolls rose by just 29,000 in September and have averaged a gain of just 69,000 a month in 2026. The unemployment rate rose to 4.2%, an increase largely due to a sharp spike in labor force participation. Layoffs have remained modest, declining by 61,000 in August, according to Bureau of Labor Statistics data released Sept. 29.
Over the prior 12 months, the layoff rate measured as a share of the total workforce fell to 1%, down 0.2 percentage point during the period. Job openings were relatively flat during the period.
"Despite extremely pessimistic views expressed in consumer confidence surveys regarding the economy overall, countless headlines describing job cuts from a variety of businesses, and the phantom job-stealing power of AI, the claims data suggests that labor market conditions are stable," Thomas Simons, chief U.S. economist at Jefferies, said in a client note.
The data comes during the reference week that the BLS uses to calculate the payrolls growth number. The October jobs report will be released Nov. 6.
Federal Reserve officials gather next week to issue their latest decision on interest rates. Policymakers in recent days have characterized the labor market as a source of general strength and focused more of their attention on the nettlesome inflation problem that has kept the pace of price increases well above the central bank's 2% target.
Markets expect the Fed to hold off on a rate hike in October but then to institute another quarter percentage point increase in December.
Correction: The October jobs report will be released Nov. 6. An earlier version misstated the month and date.`,
    bodyJa: `Employers continue to hold onto workers even as hiring remains weak, sending weekly jobless claims to around their lowest levels in records that stretch back nearly six decades.
Initial filings for unemployment insurance slipped to a seasonally adjusted 194,000 for the week ended Oct. 17, the Labor Department reported Thursday.
That marked another leg lower in the low-fire trend, with the total just off the 189,000 reported for the week of July 18 that was the lowest since September 1969. Claims have averaged 212,000 over the past year, and the four-week moving average is down to 197,750.
Those numbers come against an uncertain backdrop for the labor market.
Nonfarm payrolls rose by just 29,000 in September and have averaged a gain of just 69,000 a month in 2026. The unemployment rate rose to 4.2%, an increase largely due to a sharp spike in labor force participation. Layoffs have remained modest, declining by 61,000 in August, according to Bureau of Labor Statistics data released Sept. 29.
Over the prior 12 months, the layoff rate measured as a share of the total workforce fell to 1%, down 0.2 percentage point during the period. Job openings were relatively flat during the period.
"Despite extremely pessimistic views expressed in consumer confidence surveys regarding the economy overall, countless headlines describing job cuts from a variety of businesses, and the phantom job-stealing power of AI, the claims data suggests that labor market conditions are stable," Thomas Simons, chief U.S. economist at Jefferies, said in a client note.
The data comes during the reference week that the BLS uses to calculate the payrolls growth number. The October jobs report will be released Nov. 6.
Federal Reserve officials gather next week to issue their latest decision on interest rates. Policymakers in recent days have characterized the labor market as a source of general strength and focused more of their attention on the nettlesome inflation problem that has kept the pace of price increases well above the central bank's 2% target.
Markets expect the Fed to hold off on a rate hike in October but then to institute another quarter percentage point increase in December.
Correction: The October jobs report will be released Nov. 6. An earlier version misstated the month and date.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/22/jobless-claims-record-low-weekly.html",
    publishedAt: "2026-10-22T16:40:09+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 6,
  },
  {
    id: "meta-stock-sinks-6-as-ai-spend-pushes-fr-edf5754b",
    title: "Meta stock sinks 6% as AI spend pushes free cash flow negative",
    titleJa: "Meta stock sinks 6% as AI spend pushes free cash flow negative",
    summaryJa: "Prices for the social media giant's 5-year credit default swaps are reaching all-time highs as investors signal growing credit concerns.",
    bodyOriginal: `Meta shares slumped roughly 6% on Thursday as the social media giant showed negative free cash flow in its third-quarter earnings and raised the floor of its full-year capital expenditures.
The spread on the social media giant's five-year credit default swaps reached all-time highs on Thursday, a signal of growing credit concerns from investors as the company leans deeper into its artificial intelligence spending plans.
Meta said it expects its full-year capex to range from $135 billion to $145 billion, raising the bottom of the range from a previous $130 billion to $145 billion.
Free cash flow came in at a negative $2.12 billion during the quarter.
The company revealed Wednesday that it would create a new class of nonvoting Class C common stock during its earnings release, meant to maintain its "founder-led structure" and "provide Meta the ability to finance its growth."
Meta also said CEO Mark Zuckerberg could leave the state if the "California Wealth Tax" were to pass, as he "could become liable for a significant, multi-billion-dollar tax payment based on his ownership of stock in the Company," according to the SEC filing.
Zuckerberg was convinced to stay in California with the company's new stock plan, the filing noted.
Revenue for the social media giant jumped 26% in the third quarter from a year ago, coming in at $64.60 billion versus the $63.37 billion analysts expected. Earnings per share were reported at $3.83, though it wasn't clear if it was directly comparable to the $5.75 per share Wall Street was looking for.
—CNBC's Jonathan Vanian and Seema Mody contributed to this report.`,
    bodyJa: `Meta shares slumped roughly 6% on Thursday as the social media giant showed negative free cash flow in its third-quarter earnings and raised the floor of its full-year capital expenditures.
The spread on the social media giant's five-year credit default swaps reached all-time highs on Thursday, a signal of growing credit concerns from investors as the company leans deeper into its artificial intelligence spending plans.
Meta said it expects its full-year capex to range from $135 billion to $145 billion, raising the bottom of the range from a previous $130 billion to $145 billion.
Free cash flow came in at a negative $2.12 billion during the quarter.
The company revealed Wednesday that it would create a new class of nonvoting Class C common stock during its earnings release, meant to maintain its "founder-led structure" and "provide Meta the ability to finance its growth."
Meta also said CEO Mark Zuckerberg could leave the state if the "California Wealth Tax" were to pass, as he "could become liable for a significant, multi-billion-dollar tax payment based on his ownership of stock in the Company," according to the SEC filing.
Zuckerberg was convinced to stay in California with the company's new stock plan, the filing noted.
Revenue for the social media giant jumped 26% in the third quarter from a year ago, coming in at $64.60 billion versus the $63.37 billion analysts expected. Earnings per share were reported at $3.83, though it wasn't clear if it was directly comparable to the $5.75 per share Wall Street was looking for.
—CNBC's Jonathan Vanian and Seema Mody contributed to this report.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/22/meta-stock-q3-earnings-free-cash-flow.html",
    publishedAt: "2026-10-22T15:45:57+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "under-the-radar-stocks-to-play-the-next-b29701d1",
    title: "Under-the-radar stocks to play the next leg of the energy trade with oil prices jumping again",
    titleJa: "Under-the-radar stocks to play the next leg of the energy trade with oil prices jumping again",
    summaryJa: "Iran is going to grow more desperate as oil money dries up, which makes the country even more dangerous.",
    bodyOriginal: `POWER POINT
What I'm hearing from energy insiders
So… what now?
It seems to be the question many in the energy markets are asking. We are about to enter the ninth month of the Iran war. Or Iran "conflict." At this point, it's not very clear what to call it. The only thing right now that's "clear" is that very little is clear.
What we know… now.
Oil is moving through the Strait of Hormuz. Most Gulf nation export volumes are well up from their lows. Iran volumes are the exception. Those are down to the point of almost being nonexistent. From the little information that trickles out of the mostly closed country, it seems the Iranian economy is crumbling. Iran's currency is losing value, and people I speak with who have family there tell me they are increasingly worried about more economic pain ahead.
Iran has one main source of money: oil. Without oil, there is little money. Without money, there is little ability to buy the weapons, drones, and missiles that cause havoc and spread fear in the Gulf. Iran is going to grow more desperate, which makes Iran even more dangerous. In just the last week or so, multiple ships have been attacked. Iran's proxy gang - the Yemeni terror group known as the Houthis - has recently killed civilians in Saudi Arabia with attacks on the airport. They also blew up part of Aramco's headquarters.
The point is this is not just a grim recap of where we stand, but an attempt to understand where we're going. As I've said and written before… I have no idea. I'm not sure that anyone really does. The best we can do is gather as much information and intelligence as possible and make educated guesses. Sorry to say it, but right now, guessing is what many are doing. The markets remain one good or bad headline away from a $10 move in oil in either direction.
While we wait, oil markets stay elevated. The paper price of oil is around $100 per barrel. Most companies and countries don't use "paper" oil. As I wrote last week, the price of an actual physical barrel of oil is much, much higher than what you see on your screens. In some cases, it may be double.
Another of the few things we are clear on is that demand destruction is not here yet. All prices are up, and demand is staying relatively consistent. Sky-high diesel prices across Europe are going to hit demand, but they have not landed a knockout blow yet. $100 oil and $10 diesel are not what they used to be. Inflation has been a huge part of the global economic story since COVID and the lockdowns. Those were self-imposed, and I would argue that this is as well, because the attacks on Iran — whether you believe them to be just, given that regime's cruelty toward its own people — were a human decision. Humans got us into this, and humans are going to have to get us out.
It doesn't appear that we are any closer to a real resolution than we were a few months ago. Shipping costs continue to soar, and insurance is available but expensive.
So… what now?
What now is that we keep as calm as we can and carry on. Every week, I write Power Insider knowing tomorrow could be an entirely different headline. But like it or not, oil is the lifeblood of the global economy. And it will be for decades to come. So the oil must flow. And it is flowing. But at a cost.
Meantime, global markets wait for any scrap of clarity. What little we have will come from corporate earnings and any guidance management can provide. Energy services firm SLB (SLB) is first out of the gate with numbers on October 23. Baker Hughes (BKR) and natural gas exporter Cheniere Energy (LNG) are next. But the real focus comes on October 30, when both ExxonMobil (XOM) and Chevron (CVX) show off their earnings. It's not rocket science knowing those numbers will be big. Sales will rise with the price of oil. Refining earnings will be even bigger. The biggest piece of news, however, will be whatever glimmer of guidance these companies feel confident enough to provide. My spider sense tells me it won't be much. While mega oil and gas companies pay for some of the greatest intelligence in the world, even the world's greatest intelligence gatherers are subject to the whims of rogues with missile launchers.
That's what's now… sadly.
Thanks for reading—and watching—and be safe in these crazy and often scary times.
—Brian
THE ACTIONABLE INSIDER
Global markets may be waiting for earnings, but Goldman Sachs isn't waiting to give clients advice on what to buy now. Neil Mehta and team are out with 10 energy stocks they love now, and I have thoughts.
Let's dig in.
Neil has loved the refining stocks for a while — a great call — but is now turning his focus to other names. He hasn't fallen out of love with the refiners; it's just that so much money has been made that he feels there are better opportunities elsewhere. Here are a few.
On the large-cap side, he loves two companies with new CEOs: ConocoPhillips (COP) and Occidental Petroleum (OXY).
Conoco's legendary boss, Ryan Lance, has made way for Andrew O'Brien. Neil doesn't see that as a problem, but is watching two things closely: COP's huge new Willow project in Alaska and the status of the damaged natural gas plant at QatarEnergy, in which ConocoPhillips is invested.
Occidental also has a new CEO, Richard Jackson, and Goldman recently upgraded the stock to Buy from Neutral with a $69 target. More bullishly, Goldman chose to add OXY to its vaunted "America's Conviction List." The company has long been saddled with high debt, but it's pushing through a new plan to improve cash flow. Investors have been rewarded with a solid 53% gain over the last year, but Neil Mehta sees more to come.
My Take → Energy investors are right to be nervous about oil and gas stocks. The group largely trades with the price of crude, so if we do get a meaningful peace with Iran — a big "if," I know — oil prices are likely to drop, perhaps meaningfully. I look forward to hopefully speaking soon with the CEOs of both ConocoPhillips and Occidental Petroleum about all of this and more.
Those two are the megacaps. I'd like to now hit on two of the smaller-cap, less-talked-about stocks on Goldman's golden list.
First, Permian Resources (PR). This is a name you may have heard mentioned a few times recently. Despite the name, Permian operates a big chunk of the Delaware Basin, which is in New Mexico, not Delaware. Get to know oil geography. And get to know free cash flow. Neil and his team see PR's free cash flow growing around 20% for the next couple of years, benefiting from the company's shift to more "oil-focused production." While the analyst team would like to get more "clarity on the company's outlook for organic oil production growth" and regional pricing, it believes that the current macro environment is a tailwind for Permian Resources.
Also on Goldman's love list is TC Energy (TRP). The Canadian pipeline company has seen a big pullback in its stock, and that's one reason Neil and his team like it. They see TRP announcing more U.S. projects and are "more comfortable" with the company's funding outlook. TC Energy CEO François Poirier has spoken with us on CNBC a few times and expressed frustration about what he calls America's "underinvestment" in certain energy infrastructure.
My Take → More pipelines are bullish for TRP, but given the upcoming midterm elections in America and a good chance that both houses of Congress shift to Democratic control, the odds of more fossil fuel energy infrastructure being built are likely heading lower, not higher.
We always like to add value here on Power Insider, so here are nine of those ten stocks, ranked by possible upside versus the median Wall Street price target. TC Energy doesn't have an equivalent price target because it's listed in Canada.
The last name on that list - H.F. Sinclair - is one to focus on. It's the only one on the list trading at its median target, and maybe one reason Neil and his team are shifting their focus away from refiners. 'DINO' has had an epic run, but after a 138% gain in 12 months, it and other refiners may soon become extinct from new portfolios.
TAKE A LOOK
Two key interviews for you to watch this week. First, we spoke with energy legend Dan Yergin about the current state of the Middle East, Russia, diesel and fuel supplies.
Per The Actionable Insider above, here's our interview with Neil Mehta about his big oil stock call.
INSIDE LINE
This week's Inside Line is with Dan Pickering, founder and chief investment officer of Pickering Energy Partners. He has been a friend and great contact of mine for years and is a frequent face on CNBC.
RANDOM, BUT INTERESTING
The U.S. Strategic Petroleum Reserve continues to fall, and it's now at its lowest level since being filled. The question now is how low it can go before it becomes more difficult — and slower — to remove the oil. Some have suggested to me that when the SPR falls below 300 million barrels, the physics of pulling out the oil changes.
RBI→ The "SPR" is not one facility. It is a collection of old caves around Texas and Louisiana.
THE GRID
How Ukraine's drone strikes on Russia crippled the world's second-largest diesel supplier
Russia says it will send first diesel cargo to US on Thursday (Reuters)
Google says it can build data centers the right way. Some experts and residents are skeptical
Catch up with more on energy including interviews and video content from CNBC and Power Insider.
Read the last issue of Power Insider here.`,
    bodyJa: `POWER POINT
What I'm hearing from energy insiders
So… what now?
It seems to be the question many in the energy markets are asking. We are about to enter the ninth month of the Iran war. Or Iran "conflict." At this point, it's not very clear what to call it. The only thing right now that's "clear" is that very little is clear.
What we know… now.
Oil is moving through the Strait of Hormuz. Most Gulf nation export volumes are well up from their lows. Iran volumes are the exception. Those are down to the point of almost being nonexistent. From the little information that trickles out of the mostly closed country, it seems the Iranian economy is crumbling. Iran's currency is losing value, and people I speak with who have family there tell me they are increasingly worried about more economic pain ahead.
Iran has one main source of money: oil. Without oil, there is little money. Without money, there is little ability to buy the weapons, drones, and missiles that cause havoc and spread fear in the Gulf. Iran is going to grow more desperate, which makes Iran even more dangerous. In just the last week or so, multiple ships have been attacked. Iran's proxy gang - the Yemeni terror group known as the Houthis - has recently killed civilians in Saudi Arabia with attacks on the airport. They also blew up part of Aramco's headquarters.
The point is this is not just a grim recap of where we stand, but an attempt to understand where we're going. As I've said and written before… I have no idea. I'm not sure that anyone really does. The best we can do is gather as much information and intelligence as possible and make educated guesses. Sorry to say it, but right now, guessing is what many are doing. The markets remain one good or bad headline away from a $10 move in oil in either direction.
While we wait, oil markets stay elevated. The paper price of oil is around $100 per barrel. Most companies and countries don't use "paper" oil. As I wrote last week, the price of an actual physical barrel of oil is much, much higher than what you see on your screens. In some cases, it may be double.
Another of the few things we are clear on is that demand destruction is not here yet. All prices are up, and demand is staying relatively consistent. Sky-high diesel prices across Europe are going to hit demand, but they have not landed a knockout blow yet. $100 oil and $10 diesel are not what they used to be. Inflation has been a huge part of the global economic story since COVID and the lockdowns. Those were self-imposed, and I would argue that this is as well, because the attacks on Iran — whether you believe them to be just, given that regime's cruelty toward its own people — were a human decision. Humans got us into this, and humans are going to have to get us out.
It doesn't appear that we are any closer to a real resolution than we were a few months ago. Shipping costs continue to soar, and insurance is available but expensive.
So… what now?
What now is that we keep as calm as we can and carry on. Every week, I write Power Insider knowing tomorrow could be an entirely different headline. But like it or not, oil is the lifeblood of the global economy. And it will be for decades to come. So the oil must flow. And it is flowing. But at a cost.
Meantime, global markets wait for any scrap of clarity. What little we have will come from corporate earnings and any guidance management can provide. Energy services firm SLB (SLB) is first out of the gate with numbers on October 23. Baker Hughes (BKR) and natural gas exporter Cheniere Energy (LNG) are next. But the real focus comes on October 30, when both ExxonMobil (XOM) and Chevron (CVX) show off their earnings. It's not rocket science knowing those numbers will be big. Sales will rise with the price of oil. Refining earnings will be even bigger. The biggest piece of news, however, will be whatever glimmer of guidance these companies feel confident enough to provide. My spider sense tells me it won't be much. While mega oil and gas companies pay for some of the greatest intelligence in the world, even the world's greatest intelligence gatherers are subject to the whims of rogues with missile launchers.
That's what's now… sadly.
Thanks for reading—and watching—and be safe in these crazy and often scary times.
—Brian
THE ACTIONABLE INSIDER
Global markets may be waiting for earnings, but Goldman Sachs isn't waiting to give clients advice on what to buy now. Neil Mehta and team are out with 10 energy stocks they love now, and I have thoughts.
Let's dig in.
Neil has loved the refining stocks for a while — a great call — but is now turning his focus to other names. He hasn't fallen out of love with the refiners; it's just that so much money has been made that he feels there are better opportunities elsewhere. Here are a few.
On the large-cap side, he loves two companies with new CEOs: ConocoPhillips (COP) and Occidental Petroleum (OXY).
Conoco's legendary boss, Ryan Lance, has made way for Andrew O'Brien. Neil doesn't see that as a problem, but is watching two things closely: COP's huge new Willow project in Alaska and the status of the damaged natural gas plant at QatarEnergy, in which ConocoPhillips is invested.
Occidental also has a new CEO, Richard Jackson, and Goldman recently upgraded the stock to Buy from Neutral with a $69 target. More bullishly, Goldman chose to add OXY to its vaunted "America's Conviction List." The company has long been saddled with high debt, but it's pushing through a new plan to improve cash flow. Investors have been rewarded with a solid 53% gain over the last year, but Neil Mehta sees more to come.
My Take → Energy investors are right to be nervous about oil and gas stocks. The group largely trades with the price of crude, so if we do get a meaningful peace with Iran — a big "if," I know — oil prices are likely to drop, perhaps meaningfully. I look forward to hopefully speaking soon with the CEOs of both ConocoPhillips and Occidental Petroleum about all of this and more.
Those two are the megacaps. I'd like to now hit on two of the smaller-cap, less-talked-about stocks on Goldman's golden list.
First, Permian Resources (PR). This is a name you may have heard mentioned a few times recently. Despite the name, Permian operates a big chunk of the Delaware Basin, which is in New Mexico, not Delaware. Get to know oil geography. And get to know free cash flow. Neil and his team see PR's free cash flow growing around 20% for the next couple of years, benefiting from the company's shift to more "oil-focused production." While the analyst team would like to get more "clarity on the company's outlook for organic oil production growth" and regional pricing, it believes that the current macro environment is a tailwind for Permian Resources.
Also on Goldman's love list is TC Energy (TRP). The Canadian pipeline company has seen a big pullback in its stock, and that's one reason Neil and his team like it. They see TRP announcing more U.S. projects and are "more comfortable" with the company's funding outlook. TC Energy CEO François Poirier has spoken with us on CNBC a few times and expressed frustration about what he calls America's "underinvestment" in certain energy infrastructure.
My Take → More pipelines are bullish for TRP, but given the upcoming midterm elections in America and a good chance that both houses of Congress shift to Democratic control, the odds of more fossil fuel energy infrastructure being built are likely heading lower, not higher.
We always like to add value here on Power Insider, so here are nine of those ten stocks, ranked by possible upside versus the median Wall Street price target. TC Energy doesn't have an equivalent price target because it's listed in Canada.
The last name on that list - H.F. Sinclair - is one to focus on. It's the only one on the list trading at its median target, and maybe one reason Neil and his team are shifting their focus away from refiners. 'DINO' has had an epic run, but after a 138% gain in 12 months, it and other refiners may soon become extinct from new portfolios.
TAKE A LOOK
Two key interviews for you to watch this week. First, we spoke with energy legend Dan Yergin about the current state of the Middle East, Russia, diesel and fuel supplies.
Per The Actionable Insider above, here's our interview with Neil Mehta about his big oil stock call.
INSIDE LINE
This week's Inside Line is with Dan Pickering, founder and chief investment officer of Pickering Energy Partners. He has been a friend and great contact of mine for years and is a frequent face on CNBC.
RANDOM, BUT INTERESTING
The U.S. Strategic Petroleum Reserve continues to fall, and it's now at its lowest level since being filled. The question now is how low it can go before it becomes more difficult — and slower — to remove the oil. Some have suggested to me that when the SPR falls below 300 million barrels, the physics of pulling out the oil changes.
RBI→ The "SPR" is not one facility. It is a collection of old caves around Texas and Louisiana.
THE GRID
How Ukraine's drone strikes on Russia crippled the world's second-largest diesel supplier
Russia says it will send first diesel cargo to US on Thursday (Reuters)
Google says it can build data centers the right way. Some experts and residents are skeptical
Catch up with more on energy including interviews and video content from CNBC and Power Insider.
Read the last issue of Power Insider here.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/22/under-the-radar-stocks-to-play-the-next-leg-of-the-energy-trade-with-oil-prices-jumping-again.html",
    publishedAt: "2026-10-22T15:16:05+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "i-wasn-t-thinking-straight-says-five-jo-26345a91",
    title: "'I wasn't thinking straight' says five jobs civil servant",
    titleJa: "'I wasn't thinking straight' says five jobs civil servant",
    summaryJa: "Kashim Chowdhury is accused of fraudulently juggling multiple public sector jobs.",
    bodyOriginal: `'I wasn't thinking straight' says five jobs civil servant
- Published
A civil servant accused of fraudulently juggling multiple public sector jobs has told the court he "wasn't thinking straight" when he allegedly misled future bosses about his employment status.
Kashim Chowdhury said he was "in a panic" when he applied for a job at the Department of Health (DHSC), failing to declare he was already working at the Department for the Environment (Defra).
The prosecution said he already had three full-time jobs at the time, including roles at the London Borough of Tower Hamlets and East London NHS Trust.
The 55-year-old, who is from east London, is on trial accused of nine counts of fraud. He denies acting dishonestly or intending to make a dishonest gain.
Chowdhury said he was "in a panic'' because he feared losing his Defra job and was uncertain about his future. He told the jury he was "not paying attention, I was not thinking straight',' when filling out the application.
The prosecution said Chowdhury held five jobs on full-time salaries at the height of the alleged deceit.
Civil servant faked illness with make-up to juggle five jobs, court hears
- Published14 October
Civil servant admits he 'made mistakes' juggling five government jobs
- Published1 day ago
In the spring of 2023, he was employed by the Defra, the UK Health Security Agency, the Food Standards Agency, the Department for Business and Trade and the Home Office.
The jury was told that throughout this period he was contracted to work 183 hours a week - more than the number of hours that exist in seven days. Each job paid a full-time wage, with Chowdhury paid £11,000 for a single month's work in 2023.
Prosecutors say Chowdhury "exploited" the work-from-home culture which began during the Covid-19 pandemic to hide his multiple jobs and took sick leave from some employers to manage the workload.
But Chowdhury told the court he had not wanted the jobs at the DHSC, Department for Business and Trade and the Home Office.
He told the jury: ''I sent out a flurry of these applications. The offers for these jobs came all at once. I had discussions with my line managers saying that I did not want these jobs and explained my circumstances. These were all short term and probationary and my priority was to look after my mother.''
He added that around May and June 2022, his mother's health "deteriorated".
He said: "That overwhelmed me at the time. It just destroyed me."
Chowdhury described the jobs as his "lifeline at the time".
"They gave me a link to the outside world and were a distraction from what was going on in my personal life, looking after my mum at that time."
The prosecution alleges Chowdhury managed to keep his overlapping jobs secret because he worked entirely remotely. He told his employers he was the sole carer for his elderly mother and the prosecution alleges he "exploited this opportunity".
The trial continues.`,
    bodyJa: `'I wasn't thinking straight' says five jobs civil servant
- Published
A civil servant accused of fraudulently juggling multiple public sector jobs has told the court he "wasn't thinking straight" when he allegedly misled future bosses about his employment status.
Kashim Chowdhury said he was "in a panic" when he applied for a job at the Department of Health (DHSC), failing to declare he was already working at the Department for the Environment (Defra).
The prosecution said he already had three full-time jobs at the time, including roles at the London Borough of Tower Hamlets and East London NHS Trust.
The 55-year-old, who is from east London, is on trial accused of nine counts of fraud. He denies acting dishonestly or intending to make a dishonest gain.
Chowdhury said he was "in a panic'' because he feared losing his Defra job and was uncertain about his future. He told the jury he was "not paying attention, I was not thinking straight',' when filling out the application.
The prosecution said Chowdhury held five jobs on full-time salaries at the height of the alleged deceit.
Civil servant faked illness with make-up to juggle five jobs, court hears
- Published14 October
Civil servant admits he 'made mistakes' juggling five government jobs
- Published1 day ago
In the spring of 2023, he was employed by the Defra, the UK Health Security Agency, the Food Standards Agency, the Department for Business and Trade and the Home Office.
The jury was told that throughout this period he was contracted to work 183 hours a week - more than the number of hours that exist in seven days. Each job paid a full-time wage, with Chowdhury paid £11,000 for a single month's work in 2023.
Prosecutors say Chowdhury "exploited" the work-from-home culture which began during the Covid-19 pandemic to hide his multiple jobs and took sick leave from some employers to manage the workload.
But Chowdhury told the court he had not wanted the jobs at the DHSC, Department for Business and Trade and the Home Office.
He told the jury: ''I sent out a flurry of these applications. The offers for these jobs came all at once. I had discussions with my line managers saying that I did not want these jobs and explained my circumstances. These were all short term and probationary and my priority was to look after my mother.''
He added that around May and June 2022, his mother's health "deteriorated".
He said: "That overwhelmed me at the time. It just destroyed me."
Chowdhury described the jobs as his "lifeline at the time".
"They gave me a link to the outside world and were a distraction from what was going on in my personal life, looking after my mum at that time."
The prosecution alleges Chowdhury managed to keep his overlapping jobs secret because he worked entirely remotely. He told his employers he was the sole carer for his elderly mother and the prosecution alleges he "exploited this opportunity".
The trial continues.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cmx23dwp3qzro?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-22T15:05:47+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/1a08/live/66d2ad60-ce29-11f1-9f18-490cec60aa0f.jpg",
    readTime: 7,
  },
  {
    id: "tank-barrel-production-returns-to-uk-aft-08bce485",
    title: "Tank barrel production returns to UK after 20 years",
    titleJa: "Tank barrel production returns to UK after 20 years",
    summaryJa: "The defence secretary says the UK is \"back in the business of making weapons\" for its armed forces.",
    bodyOriginal: `Tank barrel production returns to UK after 20 years
- Published
The production of gun barrels to be used on tanks has returned to the UK for the first time in 20 years with the opening of a new manufacturing facility.
The UK Gun Hall in Telford, run by German defence firm Rheinmetall, has supported 100 jobs and will make barrels and breaches for large calibre weapons.
Defence secretary, Wes Streeting, attended the opening ceremony on Thursday and said Britain was "back in the business of making weapons" for its armed forces.
"From an empty site to full production in eight months, this is rapid reindustrialisation in action," he said.
"One hundred skilled jobs in world class manufacturing and the return of large calibre weapon production to UK soil for the first time in 20 years - this is what defence as an engine for growth looks like," Streeting added.
The barrels and breaches will be made for both 120m and 155mm weapon systems, including for the RCH 155 and future artillery platforms, according to Rheinmetall.
The firm is already involved in the UK's Boxer combat vehicle programme and is upgrading the country's Challenger tanks.
Specialist workers from Telford have been recruited and the firm said it would expand its workforce as production ramped up.
Ahead of the factory's opening, staff spent time at a Rheinmetall facility in Germany where they were trained in precision manufacturing, quality assurance and specialist weapon production.
Armin Papperger, CEO of Rheinmetall, said the gun hall was an "important milestone" that would strengthen the country's industrial base "for decades to come".
"We are committed to investing in the UK for the long term, expanding our industrial footprint and working together to deliver the capabilities needed for the future," he added.
'Statement of intent'
Papperger told BBC Radio Shropshire it was a significant investment in Telford, adding that the firm only had one similar production line in Germany.
"At the moment, we have a lot of orders and we need the capacity. Telford has very well-educated people, highly-motivated people," he added.
Papperger said the company currently had 1,300 employees in the UK but was looking to build up that number.
During his speech at the event, Streeting described Telford as being "synonymous with engineering and manufacturing".
"Today is a vote of confidence in our country," he continued, "a statement of intent on our mission to reindustrialise Britain and create good, well-paid jobs across our country."
Get in touch
Tell us which stories we should cover in Shropshire
Follow BBC Shropshire on BBC Sounds, Facebook, external, X, external and Instagram, external.
Related topics
- Published16 April
- Published18 February
- Published19 May 2025`,
    bodyJa: `Tank barrel production returns to UK after 20 years
- Published
The production of gun barrels to be used on tanks has returned to the UK for the first time in 20 years with the opening of a new manufacturing facility.
The UK Gun Hall in Telford, run by German defence firm Rheinmetall, has supported 100 jobs and will make barrels and breaches for large calibre weapons.
Defence secretary, Wes Streeting, attended the opening ceremony on Thursday and said Britain was "back in the business of making weapons" for its armed forces.
"From an empty site to full production in eight months, this is rapid reindustrialisation in action," he said.
"One hundred skilled jobs in world class manufacturing and the return of large calibre weapon production to UK soil for the first time in 20 years - this is what defence as an engine for growth looks like," Streeting added.
The barrels and breaches will be made for both 120m and 155mm weapon systems, including for the RCH 155 and future artillery platforms, according to Rheinmetall.
The firm is already involved in the UK's Boxer combat vehicle programme and is upgrading the country's Challenger tanks.
Specialist workers from Telford have been recruited and the firm said it would expand its workforce as production ramped up.
Ahead of the factory's opening, staff spent time at a Rheinmetall facility in Germany where they were trained in precision manufacturing, quality assurance and specialist weapon production.
Armin Papperger, CEO of Rheinmetall, said the gun hall was an "important milestone" that would strengthen the country's industrial base "for decades to come".
"We are committed to investing in the UK for the long term, expanding our industrial footprint and working together to deliver the capabilities needed for the future," he added.
'Statement of intent'
Papperger told BBC Radio Shropshire it was a significant investment in Telford, adding that the firm only had one similar production line in Germany.
"At the moment, we have a lot of orders and we need the capacity. Telford has very well-educated people, highly-motivated people," he added.
Papperger said the company currently had 1,300 employees in the UK but was looking to build up that number.
During his speech at the event, Streeting described Telford as being "synonymous with engineering and manufacturing".
"Today is a vote of confidence in our country," he continued, "a statement of intent on our mission to reindustrialise Britain and create good, well-paid jobs across our country."
Get in touch
Tell us which stories we should cover in Shropshire
Follow BBC Shropshire on BBC Sounds, Facebook, external, X, external and Instagram, external.
Related topics
- Published16 April
- Published18 February
- Published19 May 2025`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cm70pj51zdk4o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-22T13:45:19+00:00",
    category: "自動車",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/57ea/live/ff2243b0-ce05-11f1-8991-296181d7e3de.jpg",
    readTime: 7,
  },
  {
    id: "trump-s-approval-rating-on-economy-hits-8d6bb954",
    title: "Trump's approval rating on economy hits all-time low as midterm looms: CNBC survey",
    titleJa: "Trump's approval rating on economy hits all-time low as midterm looms: CNBC survey",
    summaryJa: "Eight out of 10 Americans now rate the economy as fair or poor, one of several findings in a CNBC poll that show why Republican candidates face uphill battles.",
    bodyOriginal: `With less than two weeks to go before the congressional elections, Americans are nearly as gloomy about the economy as they were when the nation was emerging from the pandemic, and President Donald Trump's economic approval rating is hitting an all-time low, according to the latest CNBC All-America Economic Survey.
Eight out of 10 Americans rate the economy as fair or poor, the highest number since December 2023 and one of several ominous signs for Republicans in the new polling data released Thursday that show why their candidates are facing an uphill battle in the midterm.
Downbeat views on the economy are most intense among Democrats and independents, but there's been a strong move toward economic pessimism even among Republicans in recent months. Overall, 63% of the public is pessimistic about the current state of the economy and the outlook, up 1 percentage point from the July survey. But that percentage now includes 35% of Republicans, up 6 points from July and the highest level of Republican pessimism of either of Trump's two terms.
"We got there not because of independents or Democrats getting more sour — it's because Republicans have," said Micah Roberts, partner at Public Opinion Strategies, the Republican pollster for the survey. "Since Trump has been president, [Republicans] have held on to a small margin saying that the current economy is either excellent or good. And now that has kind of broken and changed."
The survey of 1,000 registered voters nationwide, with a margin of error of plus or minus 3.1%, found Americans preferring Democratic control of Congress by a 52% to 45% margin. The 7 percentage point Democratic edge represents a 3 percentage point gain for Democrats from the July survey.
The poll contained other foreboding signs for Republicans as well. It showed 72% of Democrats highly interested in the midterm election on Nov. 3, compared with just 62% of Republicans. Women are 10 percentage points more interested in the election than men, and they prefer Democratic control of Congress by 22 points. Independents prefer Democratic control by a wide 49% to 33% margin. And the majority of survey respondents said Democrats would do a better job than Republicans on many of the issues they singled out as their top concerns, including corruption and the cost of food and gas.
Read the full survey results here.
In the eight states with competitive Senate races, respondents prefer Democratic congressional control by 4 percentage points. Trump carried those eight states by a combined 10 points in the 2024 presidential election.
The survey shows "things moving either away from Republicans or toward Democrats, depending how you want to look at it, in a way that would make me very nervous if I was leading Republican campaigns leading into these last two weeks," said Jay Campbell, partner at Hart Associates, the Democratic pollster for the poll.
Despite the economic gloom, Trump's overall approval rating has remained stable, though at just 40% approving and 59% disapproving. His current net approval of -19 percentage points compares with -8 a year ago.
More striking is the sharp 9-point drop in the president's net economic approval rating from just the last survey in July. The president's economic approval fell to 34% from 38% in three months and disapproval rose to 65% from 60%. The net -31 economic approval is the lowest of either of Trump's two terms. The 65% disapproval rating is 1 percentage point higher than former President Joe Biden's worst showing and the highest for any president surveyed by CNBC going back to President Barack Obama.
Government corruption was identified as the top concern by 36% of respondents, and Democrats hold a 4-point lead on addressing the issue. On the cost of food and groceries, the second-most important issue, the Democratic lead widened to +16 from +7 in the July survey. Democrats also topped Republicans on protecting democracy as well as dealing with the high price of gas.
Among those most interested in the election are respondents who identify corruption and protecting democracy as top issues, and they prefer Democratic congressional control by wide margins.
Republicans continued to hold a strong advantage on border security and immigration, but the lead on immigration fell to +9 from +15. Democrats, meanwhile, are seen as better at handling the issues of jobs and unemployment and Iran, which flipped from +2 for Republicans to +5 for Democrats.
The public continued to be skeptical of the value of the Iran war. The survey found just 46% of the public believe the military action was worth it to disrupt development of Iran's nuclear capabilities, down from a 53% majority in April. And just 35% say the military action was worth it given the rise in the price of gasoline.
While the survey showed continued deep divisions by party, there was near unity on the corruption issue. Ninety-three percent said elected officials, including the president and members of Congress, should not be allowed to personally own or trade stocks in individual companies that have contracts with the federal government. And 89% said companies owned by or invested in by a sitting president's immediate family members should not be allowed to receive contracts from the federal government.
While corruption was a top issue, prices are clearly top of mind for registered voters. Taken together, concern about the cost of food, gas and housing is the top concern for 57% of respondents. Eighty percent say prices are rising, up 5 percentage points from a year ago, with 55% saying they are rising faster than usual, also up 5 points. The cost of food actually eclipses gas as a greater concern in the survey 34% to 23%. It's a top worry among most major demographic groups but is most elevated among those making $30,000 or less and supporters of the agenda of Democratic Socialists of America. Yet it's also the top issue for those Republicans who don't count themselves as MAGA supporters.
Both pollsters were cautious about how extensive Democratic gains could be. Roberts from POS said it's a battle between "the map and momentum."
"There are several indications nationally that the electorate is tilting more toward Democrats … but the movement is also fairly concentrated, each party's base is consolidating, and a 'big change' is dependent on Democrats flipping a lot of districts and states that Trump won handily just two years ago," he said.
Campbell doesn't see a "realignment" election like in 1994 and 2008, saying, "This looks like a return to the mean—young voters and voters of color returning to the Democratic fold, bolstered by independents being fed up with Trumpenomics." He adds, "At no point did anyone expect that Democratic candidates would suddenly pull 15% of the Republican vote."`,
    bodyJa: `With less than two weeks to go before the congressional elections, Americans are nearly as gloomy about the economy as they were when the nation was emerging from the pandemic, and President Donald Trump's economic approval rating is hitting an all-time low, according to the latest CNBC All-America Economic Survey.
Eight out of 10 Americans rate the economy as fair or poor, the highest number since December 2023 and one of several ominous signs for Republicans in the new polling data released Thursday that show why their candidates are facing an uphill battle in the midterm.
Downbeat views on the economy are most intense among Democrats and independents, but there's been a strong move toward economic pessimism even among Republicans in recent months. Overall, 63% of the public is pessimistic about the current state of the economy and the outlook, up 1 percentage point from the July survey. But that percentage now includes 35% of Republicans, up 6 points from July and the highest level of Republican pessimism of either of Trump's two terms.
"We got there not because of independents or Democrats getting more sour — it's because Republicans have," said Micah Roberts, partner at Public Opinion Strategies, the Republican pollster for the survey. "Since Trump has been president, [Republicans] have held on to a small margin saying that the current economy is either excellent or good. And now that has kind of broken and changed."
The survey of 1,000 registered voters nationwide, with a margin of error of plus or minus 3.1%, found Americans preferring Democratic control of Congress by a 52% to 45% margin. The 7 percentage point Democratic edge represents a 3 percentage point gain for Democrats from the July survey.
The poll contained other foreboding signs for Republicans as well. It showed 72% of Democrats highly interested in the midterm election on Nov. 3, compared with just 62% of Republicans. Women are 10 percentage points more interested in the election than men, and they prefer Democratic control of Congress by 22 points. Independents prefer Democratic control by a wide 49% to 33% margin. And the majority of survey respondents said Democrats would do a better job than Republicans on many of the issues they singled out as their top concerns, including corruption and the cost of food and gas.
Read the full survey results here.
In the eight states with competitive Senate races, respondents prefer Democratic congressional control by 4 percentage points. Trump carried those eight states by a combined 10 points in the 2024 presidential election.
The survey shows "things moving either away from Republicans or toward Democrats, depending how you want to look at it, in a way that would make me very nervous if I was leading Republican campaigns leading into these last two weeks," said Jay Campbell, partner at Hart Associates, the Democratic pollster for the poll.
Despite the economic gloom, Trump's overall approval rating has remained stable, though at just 40% approving and 59% disapproving. His current net approval of -19 percentage points compares with -8 a year ago.
More striking is the sharp 9-point drop in the president's net economic approval rating from just the last survey in July. The president's economic approval fell to 34% from 38% in three months and disapproval rose to 65% from 60%. The net -31 economic approval is the lowest of either of Trump's two terms. The 65% disapproval rating is 1 percentage point higher than former President Joe Biden's worst showing and the highest for any president surveyed by CNBC going back to President Barack Obama.
Government corruption was identified as the top concern by 36% of respondents, and Democrats hold a 4-point lead on addressing the issue. On the cost of food and groceries, the second-most important issue, the Democratic lead widened to +16 from +7 in the July survey. Democrats also topped Republicans on protecting democracy as well as dealing with the high price of gas.
Among those most interested in the election are respondents who identify corruption and protecting democracy as top issues, and they prefer Democratic congressional control by wide margins.
Republicans continued to hold a strong advantage on border security and immigration, but the lead on immigration fell to +9 from +15. Democrats, meanwhile, are seen as better at handling the issues of jobs and unemployment and Iran, which flipped from +2 for Republicans to +5 for Democrats.
The public continued to be skeptical of the value of the Iran war. The survey found just 46% of the public believe the military action was worth it to disrupt development of Iran's nuclear capabilities, down from a 53% majority in April. And just 35% say the military action was worth it given the rise in the price of gasoline.
While the survey showed continued deep divisions by party, there was near unity on the corruption issue. Ninety-three percent said elected officials, including the president and members of Congress, should not be allowed to personally own or trade stocks in individual companies that have contracts with the federal government. And 89% said companies owned by or invested in by a sitting president's immediate family members should not be allowed to receive contracts from the federal government.
While corruption was a top issue, prices are clearly top of mind for registered voters. Taken together, concern about the cost of food, gas and housing is the top concern for 57% of respondents. Eighty percent say prices are rising, up 5 percentage points from a year ago, with 55% saying they are rising faster than usual, also up 5 points. The cost of food actually eclipses gas as a greater concern in the survey 34% to 23%. It's a top worry among most major demographic groups but is most elevated among those making $30,000 or less and supporters of the agenda of Democratic Socialists of America. Yet it's also the top issue for those Republicans who don't count themselves as MAGA supporters.
Both pollsters were cautious about how extensive Democratic gains could be. Roberts from POS said it's a battle between "the map and momentum."
"There are several indications nationally that the electorate is tilting more toward Democrats … but the movement is also fairly concentrated, each party's base is consolidating, and a 'big change' is dependent on Democrats flipping a lot of districts and states that Trump won handily just two years ago," he said.
Campbell doesn't see a "realignment" election like in 1994 and 2008, saying, "This looks like a return to the mean—young voters and voters of color returning to the Democratic fold, bolstered by independents being fed up with Trumpenomics." He adds, "At no point did anyone expect that Democratic candidates would suddenly pull 15% of the Republican vote."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/22/trump-economic-approval-rating-midterms-poll.html",
    publishedAt: "2026-10-22T13:18:36+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "david-s-bridal-plans-to-spin-off-ai-plat-7015df93",
    title: "David's Bridal plans to spin off AI platform Pearl into publicly traded company",
    titleJa: "David's Bridal plans to spin off AI platform Pearl into publicly traded company",
    summaryJa: "David's Bridal told CNBC exclusively that it's planning to spin off its AI platform, Pearl, into a stand-alone publicly traded company.",
    bodyOriginal: `David's Bridal is planning to spin off its artificial intelligence platform, Pearl, into a stand-alone publicly traded company targeting a valuation of roughly $350 million, CNBC learned exclusively.
The company expects the deal to close in the first half of 2027.
David's Bridal filed a nonbinding letter of intent on Thursday to separate out Pearl. The AI-centered business would own David's Bridal's intellectual property and look to build on its growing AI model, while the original company would try to strengthen its physical retail business.
"We have a fast-growing, high-margin business generating positive cash flow right now in Pearl, and going public now will help us attract the talent and give us more optionality to fuel the growth that we believe that we have," David's Bridal CEO Kelly Cook, who will take over as CEO of Pearl after the deal closes, told CNBC in an interview.
Cook said the companies will work hand in hand to serve customers throughout the wedding-planning process, adding that the split is "positioning both companies for strategic growth."
Pearl's services include an agentic AI-powered wedding-planning platform, a proprietary tool to streamline appointments and communications and a digital content network with original programming. It uses AI to personalize its suggestions based on its data collection for each client.
David's Bridal expects Pearl to generate an EBITDA margin of more than 30% this year and is projecting revenue growth of more than 100% in 2027, exceeding $85 million. It's expected to be debt-free after the deal closes and have positive free cash flow over the next two years, according to the company.
"Pearl has earned the right to stand on its own because it's created more value than we've expected," Cook said.
Following the transaction, Pearl will own David's Bridal's intellectual property and license it back to the chain.
"It's a very healthy business model," Cook said.
She added that the demand remains strong for both of the businesses. Grand View Research estimates the U.S. wedding services market will top $96 billion in 2026 — and both Pearl and David's Bridal want to be at the forefront of that segment.
The companies will continue to have a "relationship built on reciprocity," she said, sharing proprietary data and pointing customers to the other business for the next steps in their wedding planning. The split will allow each company to refine its focus, she added.
Still, the plan to go public comes at a time when AI stocks have been struggling. The initial public offering market for consumer companies has been lackluster, more companies are postponing their public debuts and investors are beginning to lose confidence in the AI boom.
Cook said the differentiator for Pearl is that the company is "not AI for AI's sake."
"Most AI companies have to find a customer," she said. "We already have her ... we have her information, and it's less about the AI side and more about modernizing this entire ecosystem for her that desperately needed modernization."
David's Bridal is no stranger to financial struggles. The company filed for bankruptcy protection in 2018 and emerged a few months later. It then filed a second time in 2023, citing a significant business slowdown from the pandemic and high inflation. To save itself, the company then sold its business to asset manager Cion Investment Corp. to avoid a shutdown.
As part of the spinoff deal, Cion has proposed to invest $25 million as an anchor investor in the separate company.
Cook, who took over as CEO last year to help it transition from a legacy retailer to a more cohesive online and in-store experience, said the company has "been through a hard chapter," but those struggles led to the decision to split the business.
"That's no secret, we've talked about that openly," she said. "What's extraordinary is what came out of that process is a leaner David's, a more focused David's ... I think it's a move from strength."`,
    bodyJa: `David's Bridal is planning to spin off its artificial intelligence platform, Pearl, into a stand-alone publicly traded company targeting a valuation of roughly $350 million, CNBC learned exclusively.
The company expects the deal to close in the first half of 2027.
David's Bridal filed a nonbinding letter of intent on Thursday to separate out Pearl. The AI-centered business would own David's Bridal's intellectual property and look to build on its growing AI model, while the original company would try to strengthen its physical retail business.
"We have a fast-growing, high-margin business generating positive cash flow right now in Pearl, and going public now will help us attract the talent and give us more optionality to fuel the growth that we believe that we have," David's Bridal CEO Kelly Cook, who will take over as CEO of Pearl after the deal closes, told CNBC in an interview.
Cook said the companies will work hand in hand to serve customers throughout the wedding-planning process, adding that the split is "positioning both companies for strategic growth."
Pearl's services include an agentic AI-powered wedding-planning platform, a proprietary tool to streamline appointments and communications and a digital content network with original programming. It uses AI to personalize its suggestions based on its data collection for each client.
David's Bridal expects Pearl to generate an EBITDA margin of more than 30% this year and is projecting revenue growth of more than 100% in 2027, exceeding $85 million. It's expected to be debt-free after the deal closes and have positive free cash flow over the next two years, according to the company.
"Pearl has earned the right to stand on its own because it's created more value than we've expected," Cook said.
Following the transaction, Pearl will own David's Bridal's intellectual property and license it back to the chain.
"It's a very healthy business model," Cook said.
She added that the demand remains strong for both of the businesses. Grand View Research estimates the U.S. wedding services market will top $96 billion in 2026 — and both Pearl and David's Bridal want to be at the forefront of that segment.
The companies will continue to have a "relationship built on reciprocity," she said, sharing proprietary data and pointing customers to the other business for the next steps in their wedding planning. The split will allow each company to refine its focus, she added.
Still, the plan to go public comes at a time when AI stocks have been struggling. The initial public offering market for consumer companies has been lackluster, more companies are postponing their public debuts and investors are beginning to lose confidence in the AI boom.
Cook said the differentiator for Pearl is that the company is "not AI for AI's sake."
"Most AI companies have to find a customer," she said. "We already have her ... we have her information, and it's less about the AI side and more about modernizing this entire ecosystem for her that desperately needed modernization."
David's Bridal is no stranger to financial struggles. The company filed for bankruptcy protection in 2018 and emerged a few months later. It then filed a second time in 2023, citing a significant business slowdown from the pandemic and high inflation. To save itself, the company then sold its business to asset manager Cion Investment Corp. to avoid a shutdown.
As part of the spinoff deal, Cion has proposed to invest $25 million as an anchor investor in the separate company.
Cook, who took over as CEO last year to help it transition from a legacy retailer to a more cohesive online and in-store experience, said the company has "been through a hard chapter," but those struggles led to the decision to split the business.
"That's no secret, we've talked about that openly," she said. "What's extraordinary is what came out of that process is a leaner David's, a more focused David's ... I think it's a move from strength."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/22/davids-bridal-pearl-ai-spinoff.html",
    publishedAt: "2026-10-22T11:32:08+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "american-airlines-expects-deeper-2026-lo-55f73b8a",
    title: "American Airlines expects deeper 2026 loss on pricier fuel despite record revenue",
    titleJa: "American Airlines expects deeper 2026 loss on pricier fuel despite record revenue",
    summaryJa: "It's the fourth major U.S. carrier to cut its 2026 forecast this month because of a spike in fuel costs.",
    bodyOriginal: `American Airlines forecast deeper losses this year as record revenue failed to help the airline recover from this year's spike in fuel costs.
American on Thursday said it expects to lose between $1 and $1.60 a share, on an adjusted basis for the full year. In July, it forecast earnings of up to 65 cents a share to a loss of as low as 65 cents a share.
"American delivered record third-quarter revenue and the strongest year-over-year revenue growth in my career, with premium performance leading the way," American CEO Robert Isom said in a news release. "The investments we are making across the four pillars of our commercial strategy are working, and we expect another quarter of record revenue growth to close out the year."
The Fort Worth, Texas-based airline is the fourth major U.S. carrier to cut its forecast for 2026 due to a jump in jet fuel following the start of the Iran war. Rising jet fuel prices have also driven up airfare more than 20% from last year. Delta Air Lines, United Airlines, and Southwest Airlines also slashed their outlooks this month.
Jet fuel is airlines' biggest cost after labor, and the spike has added billions to costs this year. American's fuel bill was up 67.5% in the third quarter from last year to $4.64 billion.
American forecast it will lose between 50 cents and $1.10 a share, adjusted, in the fourth quarter, with revenue expected to be up as much as 22.5% from a year earlier and capacity up between 5.5% and 6.5%.
Here is what American reported in the third quarter compared with Wall Street estimates compiled by LSEG:
- Loss per share: 28 cents adjusted vs. 35 cents expected
- Revenue: $16.34 billion vs. $16.22 billion expected
For the third quarter, American had a net loss of $269 million or 41 cents a share, compared with $114 million, or 17 cents a share, a year earlier. Adjusting for one-time items, American reported a loss of 28 cents a share. Revenue jumped 19.3% from a year earlier to $16.34 billion.`,
    bodyJa: `American Airlines forecast deeper losses this year as record revenue failed to help the airline recover from this year's spike in fuel costs.
American on Thursday said it expects to lose between $1 and $1.60 a share, on an adjusted basis for the full year. In July, it forecast earnings of up to 65 cents a share to a loss of as low as 65 cents a share.
"American delivered record third-quarter revenue and the strongest year-over-year revenue growth in my career, with premium performance leading the way," American CEO Robert Isom said in a news release. "The investments we are making across the four pillars of our commercial strategy are working, and we expect another quarter of record revenue growth to close out the year."
The Fort Worth, Texas-based airline is the fourth major U.S. carrier to cut its forecast for 2026 due to a jump in jet fuel following the start of the Iran war. Rising jet fuel prices have also driven up airfare more than 20% from last year. Delta Air Lines, United Airlines, and Southwest Airlines also slashed their outlooks this month.
Jet fuel is airlines' biggest cost after labor, and the spike has added billions to costs this year. American's fuel bill was up 67.5% in the third quarter from last year to $4.64 billion.
American forecast it will lose between 50 cents and $1.10 a share, adjusted, in the fourth quarter, with revenue expected to be up as much as 22.5% from a year earlier and capacity up between 5.5% and 6.5%.
Here is what American reported in the third quarter compared with Wall Street estimates compiled by LSEG:
- Loss per share: 28 cents adjusted vs. 35 cents expected
- Revenue: $16.34 billion vs. $16.22 billion expected
For the third quarter, American had a net loss of $269 million or 41 cents a share, compared with $114 million, or 17 cents a share, a year earlier. Adjusting for one-time items, American reported a loss of 28 cents a share. Revenue jumped 19.3% from a year earlier to $16.34 billion.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/22/american-airlines-aal-q3-2026-earnings.html",
    publishedAt: "2026-10-22T11:31:47+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    readTime: 5,
  },
  {
    id: "procter-gamble-earnings-beat-as-sales-ri-c161ffb5",
    title: "Procter & Gamble earnings beat as sales rise 4%, boosted by laundry and home products",
    titleJa: "Procter & Gamble earnings beat as sales rise 4%, boosted by laundry and home products",
    summaryJa: "Procter & Gamble topped Wall Street's estimates for its quarterly earnings and revenue.",
    bodyOriginal: `Procter & Gamble on Thursday reported quarterly earnings and revenue that beat analysts' expectations, fueled by growing demand for its laundry detergent and home care products.
Shares of the company rose more than 2% in premarket trading.
Here's what the company reported compared with what Wall Street was expecting, based on a survey of analysts by LSEG:
- Earnings per share: $2.00 adjusted vs. $1.88 expected
- Revenue: $23.3 billion vs. $22.8 billion expected
P&G reported fiscal first-quarter net income attributable to the company of $4.73 billion, or $1.97 per share, down from $4.75 billion, or $1.95 per share, a year earlier.
Excluding restructuring costs and other items, the company earned $2 per share.
Net sales rose 4% to $23.3 billion.
P&G reported volume growth of 2.4%, a strong start for its new fiscal year. Like many consumer companies, P&G has seen demand for its products weaken as shoppers have become more value conscious.
Executives have previously said that consumers are now using every last drop of shampoo or laundry detergent, and value packs have become more popular. In fiscal 2026, P&G reported just one quarter of volume growth.
P&G's top performing division was fabric and home care, which includes brands like Tide and Febreze. The segment's volume rose 4.3% in the quarter.
The company's baby, feminine and family care segment and its beauty business both reported volume growth of more than 2%.
P&G's grooming division saw volume shrink 0.4% in the quarter. The segment includes Gillette and Venus razors.
The company's health care business was the laggard of the portfolio this quarter. Its volume fell 2.9% as demand for oral health care products, like Crest toothpaste, and personal health care items, like Pepto-Bismol, shrank.
The company is expecting continued "geopolitical and economic challenges," but P&G is on track to meet its guidance, CEO Shailesh Jejurikar said in a statement.
For fiscal 2027, P&G reiterated its forecast for core earnings per share in a range of $6.89 to $7.11. The company is now projecting all-in sales growth in the range of 2% to 4% compared with the prior year, up from its prior outlook of 1% to 3%. The change reflects its acquisition of vitamin company Thorne, which closed on Oct. 1.`,
    bodyJa: `Procter & Gamble on Thursday reported quarterly earnings and revenue that beat analysts' expectations, fueled by growing demand for its laundry detergent and home care products.
Shares of the company rose more than 2% in premarket trading.
Here's what the company reported compared with what Wall Street was expecting, based on a survey of analysts by LSEG:
- Earnings per share: $2.00 adjusted vs. $1.88 expected
- Revenue: $23.3 billion vs. $22.8 billion expected
P&G reported fiscal first-quarter net income attributable to the company of $4.73 billion, or $1.97 per share, down from $4.75 billion, or $1.95 per share, a year earlier.
Excluding restructuring costs and other items, the company earned $2 per share.
Net sales rose 4% to $23.3 billion.
P&G reported volume growth of 2.4%, a strong start for its new fiscal year. Like many consumer companies, P&G has seen demand for its products weaken as shoppers have become more value conscious.
Executives have previously said that consumers are now using every last drop of shampoo or laundry detergent, and value packs have become more popular. In fiscal 2026, P&G reported just one quarter of volume growth.
P&G's top performing division was fabric and home care, which includes brands like Tide and Febreze. The segment's volume rose 4.3% in the quarter.
The company's baby, feminine and family care segment and its beauty business both reported volume growth of more than 2%.
P&G's grooming division saw volume shrink 0.4% in the quarter. The segment includes Gillette and Venus razors.
The company's health care business was the laggard of the portfolio this quarter. Its volume fell 2.9% as demand for oral health care products, like Crest toothpaste, and personal health care items, like Pepto-Bismol, shrank.
The company is expecting continued "geopolitical and economic challenges," but P&G is on track to meet its guidance, CEO Shailesh Jejurikar said in a statement.
For fiscal 2027, P&G reiterated its forecast for core earnings per share in a range of $6.89 to $7.11. The company is now projecting all-in sales growth in the range of 2% to 4% compared with the prior year, up from its prior outlook of 1% to 3%. The change reflects its acquisition of vitamin company Thorne, which closed on Oct. 1.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/22/procter-gamble-pg-q1-2027-earnings.html",
    publishedAt: "2026-10-22T11:30:40+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    readTime: 6,
  },
  {
    id: "france-protests-macron-condemns-stupid-c-8a228ed8",
    title: "France protests: Macron condemns 'stupid' comments from Trump, others as bond-market pressure builds",
    titleJa: "France protests: Macron condemns 'stupid' comments from Trump, others as bond-market pressure builds",
    summaryJa: "France is facing a mounting economic crisis that pushed its 10-year government bond yield to a new 24-year high on Thursday.",
    bodyOriginal: `French President Emmanuel Macron has criticized "unacceptable" and "stupid" comments made by foreign leaders and others after the country saw mass protests and its worst rioting in years.
"There was foreign disinformation in the aftermath, which prompted comments that were as unacceptable as they were stupid from many people, including foreign leaders," Macron told reporters on Wednesday, according to Reuters.
Macron clarified he was talking about U.S. President Donald Trump "among others," and said politicians were using the situation in France for their own ends.
Posting on his Truth social platform, Trump earlier this week blamed the unrest on "migrants, jihadists, and Communists" and told Europe to close its borders.
Trump and other Republicans, including Vice President JD Vance and Speaker Mike Johnson, have referenced the unrest in France on the campaign trail ahead of the upcoming U.S. midterms. They have claimed that Democrat policies on immigration would raise similar tensions.
Officials in Iran — where rights groups say authorities killed hundreds of people during a crackdown on recent demonstrations — have also weighed in, with Foreign Minister Seyed Abbas Araghchi calling on Macron to listen to the protesters' demands.
Separate protests also took place in Italy, Spain, Portugal and Albania on Saturday and Sunday. Thousands of people marched in Greece on Wednesday for improved education services, in solidarity with French students whose protests were the initial trigger for mounting unrest in the country.
Tensions remain high in France. Student union UNEF and the anti-establishment "Gilets jaunes," or "yellow vest" group, have both called for further rallies this coming weekend.
Macron — who has faced criticism this week for embarking on a tour of Gulf countries — has vowed that there will be no repeat of the recent violence. Several French cities were rocked by looting and arson at the weekend, alongside mass peaceful protests over the state of public services, the cost of living and discontent with political leadership.
French Interior Minister Laurent Nuñez said Wednesday that some military forces would be deployed to help maintain order.
French bond turmoil worsens
French social and political volatility is compounded by an emerging fiscal crisis, which on Thursday pushed its benchmark government borrowing cost to a fresh 24-year high.
The yield on 10-year French government bonds soared another 11 basis points on Thursday morning, hitting 5.113% and surpassing the yield on the 10-year U.S. Treasury for the first time since 2013.
Loading chart...
Investors are increasingly skeptical that France will pass a program of fiscal consolidation to shrink its high deficit-to-GDP ratio. Parliament is currently debating its 2027 budget, but the government lacks a parliamentary majority and may resort to special powers. Using those powers could provide short-term budget certainty but would likely stoke further political volatility.
France is facing spiraling debt servicing payments that are putting further pressure on its finances, raising the specter of potential intervention by the European Central Bank if the spread in its borrowing costs against euro area benchmark Germany continues to widen.
Businesses and insurers are meanwhile facing a financial hit from the recent protests, both from direct costs and public perception around the country.
Morningstar has estimated the cost of insured losses at up to 1.2 billion euros ($1.34 billion) amid widespread theft and damage to commercial premises and public buildings, assuming no further significant impact.
"The direct economic impact on France of the unrest surrounding the 17 October protests is likely to be limited, but it comes at a challenging time for the economy and public finances," Mehdi Fadli, SVP for Global Sovereign Ratings at Morningstar, told CNBC by email.
Fadli noted the government's recent revision of its 2026 real GDP growth forecast to 0.5% from 1%.
"Against a backdrop of continued uncertainty surrounding the international environment and the domestic presidential election, prolonged protests could further weigh on household and business confidence, dampening economic activity and exacerbating fiscal pressures in both 2026 and 2027," Fadli said.`,
    bodyJa: `French President Emmanuel Macron has criticized "unacceptable" and "stupid" comments made by foreign leaders and others after the country saw mass protests and its worst rioting in years.
"There was foreign disinformation in the aftermath, which prompted comments that were as unacceptable as they were stupid from many people, including foreign leaders," Macron told reporters on Wednesday, according to Reuters.
Macron clarified he was talking about U.S. President Donald Trump "among others," and said politicians were using the situation in France for their own ends.
Posting on his Truth social platform, Trump earlier this week blamed the unrest on "migrants, jihadists, and Communists" and told Europe to close its borders.
Trump and other Republicans, including Vice President JD Vance and Speaker Mike Johnson, have referenced the unrest in France on the campaign trail ahead of the upcoming U.S. midterms. They have claimed that Democrat policies on immigration would raise similar tensions.
Officials in Iran — where rights groups say authorities killed hundreds of people during a crackdown on recent demonstrations — have also weighed in, with Foreign Minister Seyed Abbas Araghchi calling on Macron to listen to the protesters' demands.
Separate protests also took place in Italy, Spain, Portugal and Albania on Saturday and Sunday. Thousands of people marched in Greece on Wednesday for improved education services, in solidarity with French students whose protests were the initial trigger for mounting unrest in the country.
Tensions remain high in France. Student union UNEF and the anti-establishment "Gilets jaunes," or "yellow vest" group, have both called for further rallies this coming weekend.
Macron — who has faced criticism this week for embarking on a tour of Gulf countries — has vowed that there will be no repeat of the recent violence. Several French cities were rocked by looting and arson at the weekend, alongside mass peaceful protests over the state of public services, the cost of living and discontent with political leadership.
French Interior Minister Laurent Nuñez said Wednesday that some military forces would be deployed to help maintain order.
French bond turmoil worsens
French social and political volatility is compounded by an emerging fiscal crisis, which on Thursday pushed its benchmark government borrowing cost to a fresh 24-year high.
The yield on 10-year French government bonds soared another 11 basis points on Thursday morning, hitting 5.113% and surpassing the yield on the 10-year U.S. Treasury for the first time since 2013.
Loading chart...
Investors are increasingly skeptical that France will pass a program of fiscal consolidation to shrink its high deficit-to-GDP ratio. Parliament is currently debating its 2027 budget, but the government lacks a parliamentary majority and may resort to special powers. Using those powers could provide short-term budget certainty but would likely stoke further political volatility.
France is facing spiraling debt servicing payments that are putting further pressure on its finances, raising the specter of potential intervention by the European Central Bank if the spread in its borrowing costs against euro area benchmark Germany continues to widen.
Businesses and insurers are meanwhile facing a financial hit from the recent protests, both from direct costs and public perception around the country.
Morningstar has estimated the cost of insured losses at up to 1.2 billion euros ($1.34 billion) amid widespread theft and damage to commercial premises and public buildings, assuming no further significant impact.
"The direct economic impact on France of the unrest surrounding the 17 October protests is likely to be limited, but it comes at a challenging time for the economy and public finances," Mehdi Fadli, SVP for Global Sovereign Ratings at Morningstar, told CNBC by email.
Fadli noted the government's recent revision of its 2026 real GDP growth forecast to 0.5% from 1%.
"Against a backdrop of continued uncertainty surrounding the international environment and the domestic presidential election, prolonged protests could further weigh on household and business confidence, dampening economic activity and exacerbating fiscal pressures in both 2026 and 2027," Fadli said.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/22/macron-trump-france-protests.html",
    publishedAt: "2026-10-22T11:21:02+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "nvidia-ceo-jensen-huang-says-neocloud-de-3f6f17fd",
    title: "Nvidia CEO Jensen Huang says neocloud demand is 'off the charts' but capital is scarce",
    titleJa: "Nvidia CEO Jensen Huang says neocloud demand is 'off the charts' but capital is scarce",
    summaryJa: "Nvidia CEO Jensen Huang told CNBC Thursday that demand for neocloud firms is \"off the charts,\" but scarce capital is holding back growth.",
    bodyOriginal: `Nvidia CEO Jensen Huang told CNBC Thursday that demand for neocloud firms is "off the charts," but scarce capital is holding back growth.
"If you look at the fundamentals, the demand for the neo clouds is off the charts," Huang told CNBC's Arjun Kharpal on the sidelines of the company's GTC conference in Berlin on Thursday, adding that capabilities are "extraordinary."
"What is missing in the middle is the working capital to fuel that growth… because there's just so much demand across so many sectors of AI, there's a scarcity of capital," Huang said.
"The demand of the capital is much greater than the availability of the capital. That's going to get solved," he added.
Power is a major constraint for the AI boom, particularly in Europe, where electricity prices are higher. Huang said that the allocation of energy — which is scarce in the region — to companies like Nebius and Mistral is crucial for their growth.
"You can bring investments into Europe, but you have to start with having your own infrastructure," Huang explained. "If the neoclouds in Europe are able to establish an infrastructure here, then you can build the AI ecosystem, the AI economy on top of them, and then the flywheel of the AI economy will start in Europe. It will terminate in Europe."
He added: "Across all of Europe, you're going to need a lot more neoclouds."
Neoclouds under pressure
Neocloud stocks such as CoreWeave and Nebius have been selling off recently as concerns grow over how much companies are spending on the AI infrastructure buildout, with the return on investments set to take longer than expected.
Investors are also wary of how much debt CoreWeave, one of the biggest neocloud players, is using to fund its data center buildout.
Neocloud stocks were lower in premarket trading on Thursday, with Nebius down 3.6%, and CoreWeave 4% lower. Iren and Applied Digital also shed nearly 4%.
Huang has been on a European media blitz this month as the chip giant looks to expand investments in the region's AI sector. The company has committed nearly $10 billion towards companies, universities, and research institutions.
While visiting London last week, Nvidia announced a stake worth over $1 billion in five U.K. startups. The chip giant is also investing in various French startups.
"We're trying to kickstart the AI economy in Europe," Huang told CNBC. "Europe has a tremendous amount of technology, tremendous amount of industrial know-how, incredible science and technology, and it's ready to engage and build the AI economy here."`,
    bodyJa: `Nvidia CEO Jensen Huang told CNBC Thursday that demand for neocloud firms is "off the charts," but scarce capital is holding back growth.
"If you look at the fundamentals, the demand for the neo clouds is off the charts," Huang told CNBC's Arjun Kharpal on the sidelines of the company's GTC conference in Berlin on Thursday, adding that capabilities are "extraordinary."
"What is missing in the middle is the working capital to fuel that growth… because there's just so much demand across so many sectors of AI, there's a scarcity of capital," Huang said.
"The demand of the capital is much greater than the availability of the capital. That's going to get solved," he added.
Power is a major constraint for the AI boom, particularly in Europe, where electricity prices are higher. Huang said that the allocation of energy — which is scarce in the region — to companies like Nebius and Mistral is crucial for their growth.
"You can bring investments into Europe, but you have to start with having your own infrastructure," Huang explained. "If the neoclouds in Europe are able to establish an infrastructure here, then you can build the AI ecosystem, the AI economy on top of them, and then the flywheel of the AI economy will start in Europe. It will terminate in Europe."
He added: "Across all of Europe, you're going to need a lot more neoclouds."
Neoclouds under pressure
Neocloud stocks such as CoreWeave and Nebius have been selling off recently as concerns grow over how much companies are spending on the AI infrastructure buildout, with the return on investments set to take longer than expected.
Investors are also wary of how much debt CoreWeave, one of the biggest neocloud players, is using to fund its data center buildout.
Neocloud stocks were lower in premarket trading on Thursday, with Nebius down 3.6%, and CoreWeave 4% lower. Iren and Applied Digital also shed nearly 4%.
Huang has been on a European media blitz this month as the chip giant looks to expand investments in the region's AI sector. The company has committed nearly $10 billion towards companies, universities, and research institutions.
While visiting London last week, Nvidia announced a stake worth over $1 billion in five U.K. startups. The chip giant is also investing in various French startups.
"We're trying to kickstart the AI economy in Europe," Huang told CNBC. "Europe has a tremendous amount of technology, tremendous amount of industrial know-how, incredible science and technology, and it's ready to engage and build the AI economy here."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/22/nvidia-jensen-huang-neocloud-demand-capital.html",
    publishedAt: "2026-10-22T10:49:16+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 6,
  },
  {
    id: "barclays-cutting-5-000-jobs-as-it-increa-dfbc5e34",
    title: "Barclays cutting 5,000 jobs as it increases reliance on AI",
    titleJa: "Barclays cutting 5,000 jobs as it increases reliance on AI",
    summaryJa: "Barclays cutting 5,000 jobs as it increases reliance on AI- Published",
    bodyOriginal: `Barclays cutting 5,000 jobs as it increases reliance on AI
- Published
Barclays is cutting its staff by around 5,000 as it introduces more artificial intelligence (AI) into its work processes.
The banking group said 1,000 posts had already been closed and it expects a further reduction of 4,000 to be complete by the end of this year, amounting to around 5% of its global workforce.
The bank's cost reductions are focused on its UK retail bank, but some back office functions for the UK are done in India, where a significant proportion of the job cuts are expected to fall.
Barclays said the changes were the result of an ongoing modernisation plan, with the use of AI being the "icing on the cake" of its strategy.
The banking group is reaching the end of a three year cost-cutting programme focused primarily on its UK retail banking arm, although the investment banking division is also affected.
Barclays also revealed it made £2.3bn profit in the three months to September, higher than the same period a year ago, but slightly less than forecast.
Economists have been watching companies' results carefully for signs that investment in new technology, and AI specifically, is making a difference in their day-to-day operations, leading to greater efficiency and lower employment.
Barclays Group chief executive CS Venkatakrishnan said the job cuts were the result of significant investment it is making in technology to simplify and improve its business.
"AI has an important role to play and may have a more important role to play in the future.
"We will employ the AI at scale," he said. "But AI is the icing on the cake not the cake.
"Because you need to do the infrastructure build to get the benefits of AI."
Barclays said around 60% of the job cuts will fall within its support functions, including among developers.
Russ Mould, investment director at AJ Bell, said Barclays was "reaching for the AI lever, expecting to cut a decent chunk of its workforce as it expands the use of artificial intelligence", but had failed to match expectations with its financial results.
Will Howlett, financials analyst at Quilter Cheviot said the cuts illustrated "how significantly AI and automation could reshape the banking industry over the next few years".
"Banks have spent heavily on technology for years, but we are increasingly reaching the point where that investment translates into fewer people being required to run the business," he said.
Barclays said it expects its efficiency measures to deliver a further £1.1bn of savings in 2027.
Get in touch
How has AI changed your job or the type of work your do?
Related topics
- Published17 September
- Published1 October`,
    bodyJa: `Barclays cutting 5,000 jobs as it increases reliance on AI
- Published
Barclays is cutting its staff by around 5,000 as it introduces more artificial intelligence (AI) into its work processes.
The banking group said 1,000 posts had already been closed and it expects a further reduction of 4,000 to be complete by the end of this year, amounting to around 5% of its global workforce.
The bank's cost reductions are focused on its UK retail bank, but some back office functions for the UK are done in India, where a significant proportion of the job cuts are expected to fall.
Barclays said the changes were the result of an ongoing modernisation plan, with the use of AI being the "icing on the cake" of its strategy.
The banking group is reaching the end of a three year cost-cutting programme focused primarily on its UK retail banking arm, although the investment banking division is also affected.
Barclays also revealed it made £2.3bn profit in the three months to September, higher than the same period a year ago, but slightly less than forecast.
Economists have been watching companies' results carefully for signs that investment in new technology, and AI specifically, is making a difference in their day-to-day operations, leading to greater efficiency and lower employment.
Barclays Group chief executive CS Venkatakrishnan said the job cuts were the result of significant investment it is making in technology to simplify and improve its business.
"AI has an important role to play and may have a more important role to play in the future.
"We will employ the AI at scale," he said. "But AI is the icing on the cake not the cake.
"Because you need to do the infrastructure build to get the benefits of AI."
Barclays said around 60% of the job cuts will fall within its support functions, including among developers.
Russ Mould, investment director at AJ Bell, said Barclays was "reaching for the AI lever, expecting to cut a decent chunk of its workforce as it expands the use of artificial intelligence", but had failed to match expectations with its financial results.
Will Howlett, financials analyst at Quilter Cheviot said the cuts illustrated "how significantly AI and automation could reshape the banking industry over the next few years".
"Banks have spent heavily on technology for years, but we are increasingly reaching the point where that investment translates into fewer people being required to run the business," he said.
Barclays said it expects its efficiency measures to deliver a further £1.1bn of savings in 2027.
Get in touch
How has AI changed your job or the type of work your do?
Related topics
- Published17 September
- Published1 October`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cm4g1p347qgxo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-22T09:37:58+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/4d20/live/5fb48ff0-622b-11f0-8e4a-613b923287ab.jpg",
    readTime: 7,
  },
  {
    id: "world-s-largest-wealth-fund-posts-30-bil-90cc6f9d",
    title: "World's largest wealth fund posts $30 billion loss after bond market turbulence",
    titleJa: "World's largest wealth fund posts $30 billion loss after bond market turbulence",
    summaryJa: "Norway's sovereign wealth fund — the largest in the world — said Thursday that its investment portfolio delivered a loss of $30 billion in the third quarter, as rising interest rates dented returns on its bond holdings.",
    bodyOriginal: `Norway's sovereign wealth fund — the largest in the world — said Thursday that its investment portfolio delivered a loss of $30 billion in the third quarter, as rising interest rates dented returns on its bond holdings.
Norges Bank Investment Management (NBIM), which manages the $2.3 trillion fund, said the accounting return for the period was a loss of 278 billion kroner ($29.7 billion). Around 70% of NBIM's fixed income portfolio is allocated to government bonds, with the remainder invested in corporate debt.
The third quarter saw a global bond market rout. Government bond yields surged as major central banks, including the U.S. Federal Reserve, began rate-hiking cycles and concerns about inflation and government debt levels mounted.
NBIM's fixed income investments delivered a negative return of 3.5%, with the fund's management saying this was a key driver of the overall downturn.
"The fund's return was close to flat, ending slightly negative as rising interest rates led to weaker results on our fixed-income investments," NBIM's Deputy CEO Trond Grande said in a statement.
Fixed income accounts for just over a quarter of the fund's entire portfolio, with NBIM invested in 1,664 bonds across 51 countries.
Last month, NBIM said it wanted to cut its U.S. Treasury holdings as part of wider plans to reduce its allocation to government-issued debt.
Equities, which account for 72% of the sovereign wealth fund's investments, returned 0.5% for the fund in the third quarter.
The fund has small stakes in around 7,100 companies across most countries. With holdings in 1.5% of all listed companies globally, it is the world's largest single investor.
Stock markets were turbulent in the three months to September. Wall Street's major averages ended the third quarter in mixed territory. The S&P 500 index added 2.03%, while the Dow Jones Industrial Average fell 1.9% and the tech-heavy Nasdaq Composite ended the quarter 2.2% higher.
The average change across the three indexes was just 0.6%, marking a slowdown in the rally that saw double-digit gains in the previous quarter.
NBIM is an investor in America's biggest companies, with its top holdings including a $65.4 billion stake in Nvidia, as well as positions in Apple, Alphabet and Microsoft.
Its positions in the world's biggest companies make NBIM influential in terms of both voting power and setting investment trends.
"Equity returns were also close to zero, but there were large differences between sectors. Energy companies rose the most, while interest-rate-sensitive sectors such as utilities and real estate fell," Grande said Thursday.
Energy stocks benefited from surging oil prices in the third quarter, as the U.S.-Iran war continued, said NBIM, which has stakes in various energy majors, including Exxon Mobil, Shell and Chevron.
Over the summer, NBIM CEO Nicolai Tangen told CNBC that investors should not expect a continuation of the bumper gains seen in the stock market in the first half of this year.
"For sure, we should not be expecting the same kind of returns going forward as we've seen over the last six months," he said at the time.
The fund delivered a first-half return of 12.95%, and a record first-half profit nearing $185 billion. It also invests in real estate and renewable energy infrastructure, which returned 0.4% and 7.5%, respectively, in the third quarter.
Norway established its sovereign wealth fund in 1998 to invest revenues from the country's oil.`,
    bodyJa: `Norway's sovereign wealth fund — the largest in the world — said Thursday that its investment portfolio delivered a loss of $30 billion in the third quarter, as rising interest rates dented returns on its bond holdings.
Norges Bank Investment Management (NBIM), which manages the $2.3 trillion fund, said the accounting return for the period was a loss of 278 billion kroner ($29.7 billion). Around 70% of NBIM's fixed income portfolio is allocated to government bonds, with the remainder invested in corporate debt.
The third quarter saw a global bond market rout. Government bond yields surged as major central banks, including the U.S. Federal Reserve, began rate-hiking cycles and concerns about inflation and government debt levels mounted.
NBIM's fixed income investments delivered a negative return of 3.5%, with the fund's management saying this was a key driver of the overall downturn.
"The fund's return was close to flat, ending slightly negative as rising interest rates led to weaker results on our fixed-income investments," NBIM's Deputy CEO Trond Grande said in a statement.
Fixed income accounts for just over a quarter of the fund's entire portfolio, with NBIM invested in 1,664 bonds across 51 countries.
Last month, NBIM said it wanted to cut its U.S. Treasury holdings as part of wider plans to reduce its allocation to government-issued debt.
Equities, which account for 72% of the sovereign wealth fund's investments, returned 0.5% for the fund in the third quarter.
The fund has small stakes in around 7,100 companies across most countries. With holdings in 1.5% of all listed companies globally, it is the world's largest single investor.
Stock markets were turbulent in the three months to September. Wall Street's major averages ended the third quarter in mixed territory. The S&P 500 index added 2.03%, while the Dow Jones Industrial Average fell 1.9% and the tech-heavy Nasdaq Composite ended the quarter 2.2% higher.
The average change across the three indexes was just 0.6%, marking a slowdown in the rally that saw double-digit gains in the previous quarter.
NBIM is an investor in America's biggest companies, with its top holdings including a $65.4 billion stake in Nvidia, as well as positions in Apple, Alphabet and Microsoft.
Its positions in the world's biggest companies make NBIM influential in terms of both voting power and setting investment trends.
"Equity returns were also close to zero, but there were large differences between sectors. Energy companies rose the most, while interest-rate-sensitive sectors such as utilities and real estate fell," Grande said Thursday.
Energy stocks benefited from surging oil prices in the third quarter, as the U.S.-Iran war continued, said NBIM, which has stakes in various energy majors, including Exxon Mobil, Shell and Chevron.
Over the summer, NBIM CEO Nicolai Tangen told CNBC that investors should not expect a continuation of the bumper gains seen in the stock market in the first half of this year.
"For sure, we should not be expecting the same kind of returns going forward as we've seen over the last six months," he said at the time.
The fund delivered a first-half return of 12.95%, and a record first-half profit nearing $185 billion. It also invests in real estate and renewable energy infrastructure, which returned 0.4% and 7.5%, respectively, in the third quarter.
Norway established its sovereign wealth fund in 1998 to invest revenues from the country's oil.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/22/norges-bank-nbim-wealth-fund-q3-results.html",
    publishedAt: "2026-10-22T09:25:09+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 9,
  },
  {
    id: "is-an-ai-war-complicating-your-job-searc-33130fae",
    title: "Is an 'AI war' complicating your job search?",
    titleJa: "Is an 'AI war' complicating your job search?",
    summaryJa: "How fair are AI recruitment tools that help decide our future, and what happens when we click \"apply\"?",
    bodyOriginal: `Is an 'AI war' complicating your job search?
- Published
I have lost track of the number of people who have told me they have applied for hundreds of jobs, only to be met with rejection after rejection.
Often, they said it felt like a human had not even looked at their applications.
There are lots of different types of recruitment tools. Some match candidates to jobs, others grade and screen CVs. Employers use them to save time sifting through applications, but there are growing concerns that these tools could be biased.
I want to find out how fair AI recruitment tools being used to help decide our futures really are - and what happens when we click "apply".
What is the 'AI war' in recruitment?
A London-based non-profit organisation, People Like Us, is raising awareness of people's legal right to challenge automated decisions when they disagree with the outcome.
A survey conducted by Censuswide among 2,000 UK workers who had applied for at least one job in the past 24 months found that 75% were unaware of their right to challenge an automated rejection.
Sheeraz Gulsher, CEO of People Like Us, is leading the campaign called Reject the Rejections, which calls on employers to improve transparency and accountability in the use of AI and automated recruitment systems.
He describes the current situation as an "AI war", with candidates "resorting to AI to bolster their applications" while "employers are dealing with huge amounts of applications".
Gulsher said: "We can't say for certain that every company is operating its automated or AI systems without bias. That's why we're calling for companies to audit these systems, publish the results and have them independently assessed.
"In our research, we found guidance from the Information Commissioner's Office, external stating that people subject to certain automated decisions have the right to request a human review. We're trying to remind people of that right, as many simply aren't aware of it."
The research also found 70% of ethnically diverse jobseekers had altered or concealed information on their CVs, including their country of origin, religion or name, out of fear that recruitment software or AI tools would reject their applications. This compares with 57% of white candidates.
Would people ask for a human review?
Business consultant Vivi, who lives in Lewisham, was made redundant earlier this year. She says she has applied for so many jobs that she's given up and started her own company.
"There's one instance where applications closed on Friday and I got a reply on a Saturday morning basically saying that I should work on my skills and come back in six months. But it was so obvious that nobody had assessed my skills."
If she had known she could ask for a human to review her application, she might have done things differently.
"I would definitely go back and ask for a human to look at my application and if it is a 'no', that's fine, but feedback helps me as a jobseeker."
Hema, 49, from Surrey, is an HR and talent professional who has worked internationally across multiple sectors.
She was made redundant in June and has since tracked more than 100 job applications and recruitment opportunities.
"A lot of them have been automatically rejected within 24 to 36 hours."
She added: "I've always landed a job in 10 applications, so to be nearing 100 is completely out of this world."
While she is "hesitant" about asking for a human review in case she jeopardises her application, she believes "a human recruiter can see the fuller picture".
"If you've got an in-house recruitment team, they know the culture, they can see the type of language that you're using in your CV, in your cover letter, during a phone screen."
How much do recruiters use AI?
Of the 425 recruiters CV Library spoke to, about 90 said they used AI in the CV screening stage.
Alec Stanwell, director of marketing, believes there is a "perception gap".
"Candidates almost universally believe that employers are using AI to screen their CVs, filter them and to screen them as they go through the process and that is happening but nowhere near as much as candidates think it is.
"That perception gap is a problem because candidates are now writing their CVs, and applications, through the lens of 'an AI bot is going to be reviewing this rather than a human'.
He adds this is a problem because recruiters are seeing all CVs look the same because "they're all written by AI, or polished by AI".
He says this creates a "perfect storm" because AI is then more likely to be used to filter through a large volume of applications.
"We're going to end up with computers hiring computers, but we're actually in the world of hiring people."
Is there evidence of AI hiring bias?
In the four years to December 2022, Stanford researchers analysed four million job applications processed by an AI hiring tool, external.
Some candidates were rejected from multiple roles more often than would have been expected if they had been assessed by each employer independently.
The analysis also indicated black and Asian applicants were recommended for jobs at lower rates.
But the evidence is limited. They only looked at one AI hiring tool, and other factors such as education and immigration status could have also played a role.
The hiring tool assessed did not respond to our requests for comment.
The people I have interviewed are not talking about any company in particular, but concerns over AI used in recruitment are also playing out in the courts.
One company, Workday, is facing legal claims, external in the US, alleging that its tools discriminated against job applicants.
The case is ongoing, but Workday denies the claims and says its tools do not make hiring decisions.
More generally, it says its tools "support rather than replace human judgement".
Do AI tools work in different ways?
What makes this even more difficult is that AI hiring tools work in different ways, with some not even screening CVs in the first place.
I spoke to one company that grades candidates on text-based chat interviews.
Barb Hyman, founder of Sapia AI, said: "We don't know anything about you from a demographic perspective and we don't know whether or not you were hired or not hired for a previous role. So I think you've really got to look at the nature of the AI and how it's built. Not all AI is the same.
"At least in the enterprise space, every company we speak to is very conscious of the EU AI Act, even if they don't see themselves as having to comply with that yet. And that requires a level of accountability."
She added: "No company ever built a high-performing culture by monitoring its people, and you won't build a fair hiring process by policing candidates either.
"Start by earning candidates' trust: tell them what you're measuring, how they'll be scored, and give them feedback. Fraud gets smaller when people trust the process."
Can you tell when somebody has used AI on their CV?
Alec Samways, CEO of London-based Splendid Communications, says they usually get three to four hundred applications for three places on their annual intern programme but last year they saw triple the numbers.
"We saw a huge uptick in applications, but strangely, they all look the same. Our suspicion was candidates all of a sudden were using AI to make the applications themselves."
Samways used two different AI tools to help the company understand how much of the content was produced by AI but they "produced such a variety of responses".
"We found we couldn't trust them and we had to literally sift through those, applications in a human way in the end.
"It's just clear that at this point we're not prepared to trust AI for this kind of decision-making."
What are the rules and regulations?
An ICO spokesperson said AI and automation could "make recruitment quicker and more efficient" but "must not come at the expense of people's rights".
They said: "Employers should be upfront about when automated decision-making is being used, how it works and how it could affect someone's application.
"Bias can appear at different stages of building and using AI products, and we expect all organisations to take steps to identify and mitigate it."
A government spokesperson said that "while AI can help employers manage large volumes of applications and reduce administrative burdens, it is vital that recruitment processes remain fair, transparent and accessible".
They added: "Existing legal protections, including equality and data protection law, already apply to AI systems, and we will act where additional protections are needed."
There seems to be a real fear of the unknown because we are often unsure what happens on the other end once we click "apply".
But given it seems AI is here to stay, how can we ensure it's fair?
Listen to the best of BBC Radio London on Sounds and follow BBC London on Facebook, external, X, external and Instagram, external. Send your story ideas to hello.bbclondon@bbc.co.uk, external`,
    bodyJa: `Is an 'AI war' complicating your job search?
- Published
I have lost track of the number of people who have told me they have applied for hundreds of jobs, only to be met with rejection after rejection.
Often, they said it felt like a human had not even looked at their applications.
There are lots of different types of recruitment tools. Some match candidates to jobs, others grade and screen CVs. Employers use them to save time sifting through applications, but there are growing concerns that these tools could be biased.
I want to find out how fair AI recruitment tools being used to help decide our futures really are - and what happens when we click "apply".
What is the 'AI war' in recruitment?
A London-based non-profit organisation, People Like Us, is raising awareness of people's legal right to challenge automated decisions when they disagree with the outcome.
A survey conducted by Censuswide among 2,000 UK workers who had applied for at least one job in the past 24 months found that 75% were unaware of their right to challenge an automated rejection.
Sheeraz Gulsher, CEO of People Like Us, is leading the campaign called Reject the Rejections, which calls on employers to improve transparency and accountability in the use of AI and automated recruitment systems.
He describes the current situation as an "AI war", with candidates "resorting to AI to bolster their applications" while "employers are dealing with huge amounts of applications".
Gulsher said: "We can't say for certain that every company is operating its automated or AI systems without bias. That's why we're calling for companies to audit these systems, publish the results and have them independently assessed.
"In our research, we found guidance from the Information Commissioner's Office, external stating that people subject to certain automated decisions have the right to request a human review. We're trying to remind people of that right, as many simply aren't aware of it."
The research also found 70% of ethnically diverse jobseekers had altered or concealed information on their CVs, including their country of origin, religion or name, out of fear that recruitment software or AI tools would reject their applications. This compares with 57% of white candidates.
Would people ask for a human review?
Business consultant Vivi, who lives in Lewisham, was made redundant earlier this year. She says she has applied for so many jobs that she's given up and started her own company.
"There's one instance where applications closed on Friday and I got a reply on a Saturday morning basically saying that I should work on my skills and come back in six months. But it was so obvious that nobody had assessed my skills."
If she had known she could ask for a human to review her application, she might have done things differently.
"I would definitely go back and ask for a human to look at my application and if it is a 'no', that's fine, but feedback helps me as a jobseeker."
Hema, 49, from Surrey, is an HR and talent professional who has worked internationally across multiple sectors.
She was made redundant in June and has since tracked more than 100 job applications and recruitment opportunities.
"A lot of them have been automatically rejected within 24 to 36 hours."
She added: "I've always landed a job in 10 applications, so to be nearing 100 is completely out of this world."
While she is "hesitant" about asking for a human review in case she jeopardises her application, she believes "a human recruiter can see the fuller picture".
"If you've got an in-house recruitment team, they know the culture, they can see the type of language that you're using in your CV, in your cover letter, during a phone screen."
How much do recruiters use AI?
Of the 425 recruiters CV Library spoke to, about 90 said they used AI in the CV screening stage.
Alec Stanwell, director of marketing, believes there is a "perception gap".
"Candidates almost universally believe that employers are using AI to screen their CVs, filter them and to screen them as they go through the process and that is happening but nowhere near as much as candidates think it is.
"That perception gap is a problem because candidates are now writing their CVs, and applications, through the lens of 'an AI bot is going to be reviewing this rather than a human'.
He adds this is a problem because recruiters are seeing all CVs look the same because "they're all written by AI, or polished by AI".
He says this creates a "perfect storm" because AI is then more likely to be used to filter through a large volume of applications.
"We're going to end up with computers hiring computers, but we're actually in the world of hiring people."
Is there evidence of AI hiring bias?
In the four years to December 2022, Stanford researchers analysed four million job applications processed by an AI hiring tool, external.
Some candidates were rejected from multiple roles more often than would have been expected if they had been assessed by each employer independently.
The analysis also indicated black and Asian applicants were recommended for jobs at lower rates.
But the evidence is limited. They only looked at one AI hiring tool, and other factors such as education and immigration status could have also played a role.
The hiring tool assessed did not respond to our requests for comment.
The people I have interviewed are not talking about any company in particular, but concerns over AI used in recruitment are also playing out in the courts.
One company, Workday, is facing legal claims, external in the US, alleging that its tools discriminated against job applicants.
The case is ongoing, but Workday denies the claims and says its tools do not make hiring decisions.
More generally, it says its tools "support rather than replace human judgement".
Do AI tools work in different ways?
What makes this even more difficult is that AI hiring tools work in different ways, with some not even screening CVs in the first place.
I spoke to one company that grades candidates on text-based chat interviews.
Barb Hyman, founder of Sapia AI, said: "We don't know anything about you from a demographic perspective and we don't know whether or not you were hired or not hired for a previous role. So I think you've really got to look at the nature of the AI and how it's built. Not all AI is the same.
"At least in the enterprise space, every company we speak to is very conscious of the EU AI Act, even if they don't see themselves as having to comply with that yet. And that requires a level of accountability."
She added: "No company ever built a high-performing culture by monitoring its people, and you won't build a fair hiring process by policing candidates either.
"Start by earning candidates' trust: tell them what you're measuring, how they'll be scored, and give them feedback. Fraud gets smaller when people trust the process."
Can you tell when somebody has used AI on their CV?
Alec Samways, CEO of London-based Splendid Communications, says they usually get three to four hundred applications for three places on their annual intern programme but last year they saw triple the numbers.
"We saw a huge uptick in applications, but strangely, they all look the same. Our suspicion was candidates all of a sudden were using AI to make the applications themselves."
Samways used two different AI tools to help the company understand how much of the content was produced by AI but they "produced such a variety of responses".
"We found we couldn't trust them and we had to literally sift through those, applications in a human way in the end.
"It's just clear that at this point we're not prepared to trust AI for this kind of decision-making."
What are the rules and regulations?
An ICO spokesperson said AI and automation could "make recruitment quicker and more efficient" but "must not come at the expense of people's rights".
They said: "Employers should be upfront about when automated decision-making is being used, how it works and how it could affect someone's application.
"Bias can appear at different stages of building and using AI products, and we expect all organisations to take steps to identify and mitigate it."
A government spokesperson said that "while AI can help employers manage large volumes of applications and reduce administrative burdens, it is vital that recruitment processes remain fair, transparent and accessible".
They added: "Existing legal protections, including equality and data protection law, already apply to AI systems, and we will act where additional protections are needed."
There seems to be a real fear of the unknown because we are often unsure what happens on the other end once we click "apply".
But given it seems AI is here to stay, how can we ensure it's fair?
Listen to the best of BBC Radio London on Sounds and follow BBC London on Facebook, external, X, external and Instagram, external. Send your story ideas to hello.bbclondon@bbc.co.uk, external`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cm9qzgg5z89no?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-22T05:01:31+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/b0fd/live/7fe856d0-cca1-11f1-94e6-edd4c60b2e1d.jpg",
    readTime: 10,
  },
  {
    id: "no-purchase-no-seats-starbucks-china-rol-2414e059",
    title: "No purchase, no seats: Starbucks China rolls out new policy",
    titleJa: "No purchase, no seats: Starbucks China rolls out new policy",
    summaryJa: "Starbucks says it is improving customers' in-store experience as it competes with homegrown rivals.",
    bodyOriginal: `No purchase, no seats: Starbucks China rolls out new policy
- Published
Taking a seat at a Starbucks in China? Just make sure you're also ordering something there.
A new policy by Starbucks China takes effect across all its 8,000 stores on Thursday, making it mandatory for people to purchase items if they want to sit in its cafes.
Starbucks China said the move was part of efforts to improve the "in-store experience" for customers. The company is facing stiff competition from homegrown brands such as Luckin Coffee.
Reports of the new policy circulated this week, along with social media videos of what appear to be "purchase to sit" signs in Starbucks stores.
Many on Chinese social media welcomed the new policy.
"Finally, there won't be peak periods where people are just sitting there not ordering anything, drinking Luckin coffee, playing games and yelling on the phone," reads one of the top-liked comment on Weibo. "Every time I walk around, there's nowhere to sit,"
"There's nothing wrong with it. I'd feel awkward sitting there if I didn't make a purchase. I'd rather leave the seats for those who made purchases and need the seats," another Weibo user commented.
Starbucks stores around the world have been wrestling with non-paying seat-hoggers and other undesirable behaviour from customers.
Last month, a Starbucks store in Sichuan province sparked debate after video of its chained-up outdoor seats and tables were circulated on social media. It appeared to be an attempt to block people from sitting there without paying.
In South Korea, Starbucks has told customers to stop bringing "bulky items" into their stores, after some patrons reportedly hogged seats with printers and desktop computers in tow.
In North America, Starbucks reversed its open-door policy which for years allowed people to use their seats and toilets without buying anything, saying that it wanted to "prioritise" paying customers.
Since opening its first store there in 1999, China has become Starbucks' second-largest market. But it has faced stiff competition in recent years from Luckin and other local brands that offer cheaper products.
Luckin also offers a robust app-based ordering system that prioritises grab-and-go transactions, challenging Starbucks' model of a full cafe experience where people can sit down and enjoy their food and drinks.
In 2023, Luckin overtook Starbucks as China's largest coffee chain.
Starbucks said last year it would sell 60% stake of its business in China as part of a $4bn (£3.04bn) deal with investment firm Boyu Capital.
In another statement on Wednesday, Starbucks China said it was planning to increase staffing and improve digital systems at its stores, among other investments to "ensure customers receive timely and warm service even during peak hours".`,
    bodyJa: `No purchase, no seats: Starbucks China rolls out new policy
- Published
Taking a seat at a Starbucks in China? Just make sure you're also ordering something there.
A new policy by Starbucks China takes effect across all its 8,000 stores on Thursday, making it mandatory for people to purchase items if they want to sit in its cafes.
Starbucks China said the move was part of efforts to improve the "in-store experience" for customers. The company is facing stiff competition from homegrown brands such as Luckin Coffee.
Reports of the new policy circulated this week, along with social media videos of what appear to be "purchase to sit" signs in Starbucks stores.
Many on Chinese social media welcomed the new policy.
"Finally, there won't be peak periods where people are just sitting there not ordering anything, drinking Luckin coffee, playing games and yelling on the phone," reads one of the top-liked comment on Weibo. "Every time I walk around, there's nowhere to sit,"
"There's nothing wrong with it. I'd feel awkward sitting there if I didn't make a purchase. I'd rather leave the seats for those who made purchases and need the seats," another Weibo user commented.
Starbucks stores around the world have been wrestling with non-paying seat-hoggers and other undesirable behaviour from customers.
Last month, a Starbucks store in Sichuan province sparked debate after video of its chained-up outdoor seats and tables were circulated on social media. It appeared to be an attempt to block people from sitting there without paying.
In South Korea, Starbucks has told customers to stop bringing "bulky items" into their stores, after some patrons reportedly hogged seats with printers and desktop computers in tow.
In North America, Starbucks reversed its open-door policy which for years allowed people to use their seats and toilets without buying anything, saying that it wanted to "prioritise" paying customers.
Since opening its first store there in 1999, China has become Starbucks' second-largest market. But it has faced stiff competition in recent years from Luckin and other local brands that offer cheaper products.
Luckin also offers a robust app-based ordering system that prioritises grab-and-go transactions, challenging Starbucks' model of a full cafe experience where people can sit down and enjoy their food and drinks.
In 2023, Luckin overtook Starbucks as China's largest coffee chain.
Starbucks said last year it would sell 60% stake of its business in China as part of a $4bn (£3.04bn) deal with investment firm Boyu Capital.
In another statement on Wednesday, Starbucks China said it was planning to increase staffing and improve digital systems at its stores, among other investments to "ensure customers receive timely and warm service even during peak hours".`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/ckzd6rjmlzvmo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-22T04:02:29+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/d52a/live/22a66e60-cdc5-11f1-ae0b-3f5d64e6a869.jpg",
    readTime: 7,
  },
  {
    id: "china-s-stock-market-sinks-into-bear-ter-e4355094",
    title: "China's stock market sinks into bear territory as CSI 300 extends 10-week rout",
    titleJa: "China's stock market sinks into bear territory as CSI 300 extends 10-week rout",
    summaryJa: "China's benchmark CSI 300 index has entered bear-market territory, falling 20% from its June peak, as a prolonged selloff in mainland equities deepens.",
    bodyOriginal: `China's benchmark CSI 300 index on Thursday entered bear-market territory, falling 20% from its June peak, as a prolonged sell-off in its equities deepens.
The index, which tracks 300 of the largest stocks listed in Shanghai and Shenzhen, has declined for 10 consecutive weeks and is down 2.6% so far this week, underscoring sustained pressure on Chinese equities, data from LSEG showed. The index was more than 1% lower Thursday.
Jordan Cvetanovski, chairman and CIO at Pella Funds, said China's equity market continues to face structural challenges, particularly as the world's second-largest economy grapples with the fallout from years of excess capacity and overinvestment.
"I think China is really struggling with reining in the problems that they've had in the past from the overbuild of capacity and other things," Cvetanovski told CNBC, pointing to challenges facing companies even in globally competitive industries such as batteries — a sector where he still sees select opportunities in China.
Chinese firms have been suffering from declining profit growth amid intense competition that has eroded margins and even invited the government to step in. In September, the country posted it's weakest growth in industrial profits this year.
The world's second-largest economy also posted its slowest growth in over three years in the second quarter, pressured by a multiyear slowdown in the property sector and extended weakness in consumer demand.
Shaun Rein, managing director at China Market Research Group, expects further selling pressure as geopolitical uncertainty, concerns over an artificial intelligence bubble and deteriorating consumer confidence weigh on investor sentiment.
China's large base of retail investors could also exacerbate market volatility, Rein said, as individual investors are prone to exiting the market faster during periods of uncertainty.
Unlike major markets such as the New York Stock Exchange, where retail investors account for about 20%-25% of trade volumes, China's retail investors drive 90% of daily trading, according to data provided by HSBC.
"For Chinese, it's about wealth preservation," Rein said, noting that investors are increasingly favoring safer assets such as time deposits amid a weakening property market and sluggish labor conditions.
While Rein expects increased pressure on markets, he said the sell-off has been excessive, pointing to resilient exports and signs of a recovery in property prices in China's largest cities.
"It's a crisis of confidence right now not a crisis in the economy," he said, predicting a strong rebound in Chinese equities in 2027.
Daniel Gerard, senior multi-asset strategist at State Street Markets, also struck a more optimistic tone, saying that China's growing capabilities in artificial intelligence could eventually draw global investors back into its equity market, even before corporate earnings recover.`,
    bodyJa: `China's benchmark CSI 300 index on Thursday entered bear-market territory, falling 20% from its June peak, as a prolonged sell-off in its equities deepens.
The index, which tracks 300 of the largest stocks listed in Shanghai and Shenzhen, has declined for 10 consecutive weeks and is down 2.6% so far this week, underscoring sustained pressure on Chinese equities, data from LSEG showed. The index was more than 1% lower Thursday.
Jordan Cvetanovski, chairman and CIO at Pella Funds, said China's equity market continues to face structural challenges, particularly as the world's second-largest economy grapples with the fallout from years of excess capacity and overinvestment.
"I think China is really struggling with reining in the problems that they've had in the past from the overbuild of capacity and other things," Cvetanovski told CNBC, pointing to challenges facing companies even in globally competitive industries such as batteries — a sector where he still sees select opportunities in China.
Chinese firms have been suffering from declining profit growth amid intense competition that has eroded margins and even invited the government to step in. In September, the country posted it's weakest growth in industrial profits this year.
The world's second-largest economy also posted its slowest growth in over three years in the second quarter, pressured by a multiyear slowdown in the property sector and extended weakness in consumer demand.
Shaun Rein, managing director at China Market Research Group, expects further selling pressure as geopolitical uncertainty, concerns over an artificial intelligence bubble and deteriorating consumer confidence weigh on investor sentiment.
China's large base of retail investors could also exacerbate market volatility, Rein said, as individual investors are prone to exiting the market faster during periods of uncertainty.
Unlike major markets such as the New York Stock Exchange, where retail investors account for about 20%-25% of trade volumes, China's retail investors drive 90% of daily trading, according to data provided by HSBC.
"For Chinese, it's about wealth preservation," Rein said, noting that investors are increasingly favoring safer assets such as time deposits amid a weakening property market and sluggish labor conditions.
While Rein expects increased pressure on markets, he said the sell-off has been excessive, pointing to resilient exports and signs of a recovery in property prices in China's largest cities.
"It's a crisis of confidence right now not a crisis in the economy," he said, predicting a strong rebound in Chinese equities in 2027.
Daniel Gerard, senior multi-asset strategist at State Street Markets, also struck a more optimistic tone, saying that China's growing capabilities in artificial intelligence could eventually draw global investors back into its equity market, even before corporate earnings recover.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/22/chinas-stock-market-csi-300-bear-market.html",
    publishedAt: "2026-10-22T04:02:18+00:00",
    category: "貿易",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
    readTime: 7,
  },
  {
    id: "what-is-php-and-why-did-it-spark-a-globa-079c4be7",
    title: "What is PHP and why did it spark a global cyber-security scramble?",
    titleJa: "What is PHP and why did it spark a global cyber-security scramble?",
    summaryJa: "AI uncovered long-hidden programming flaws, triggering a rare global cyber-security response.",
    bodyOriginal: `What is PHP and why did it spark a global cyber-security scramble?
- Published
For more than a decade, serious flaws had gone undetected in technology underpinning much of the internet.
It took artificial intelligence (AI) to bring them to light and caused a global cyber-security alert.
The vulnerabilities lie within a programming language called PHP, which has been used internationally since the 2000s to build websites.
Governments and cyber-security agencies around the world scrambled to contain the fallout of this discovery on Wednesday, and have urged website operators to install a new emergency fix or consider taking their platforms offline.
Cyber-security firm Wiz - one of the companies whose researchers uncovered the vulnerabilities - described the flaws as the "most severe" ever detected by AI.
OpenAI, whose technology was used to find the flaws, called the discovery "one of the most impactful security issues in recent memory".
What is the flaw?
Most people may not have heard of PHP - short for PHP: Hypertext Preprocessor - but they most certainly interact with it daily.
PHP powers a vast number of platforms, including online shops, Wikipedia and WordPress – the content management system behind many websites like blogs.
When you visit a website like Wikipedia, PHP is the code that collects information you need and presents it in a way you can read on the web, Paul Spain, chief executive of Gorilla Cyber Security, told the BBC.
But due to a flaw that could allow attackers to take control of affected web servers without authentication and steal sensitive data, everything built on PHP was left exposed.
AI could make such attacks easier and faster, Spain said, estimating that the flaw could affect "millions and millions" of websites.
It would be "disastrous" if hackers or countries weaponised the flaw and seized private data from websites, said cyber-security researcher Jill Slay from the University of Adelaide.
What websites have been affected?
The alert has disrupted services globally, from gaming platforms to government portals and online forums.
That includes Wikimedia - the organisation behind the online encyclopaedia Wikipedia - which took down a number of its systems as a precautionary measure.
Sites and pages have been taken offline by the Finnish government, Edinburgh council and the BBC, with the Netherlands' cyber-security agency also pulling its website.
A number of Scotland's public organisations, including councils and health boards, have also taken their websites offline.
Some experts warn the vulnerability could leave poorly maintained websites, particularly those belonging to smaller organisations with limited security resources, at greater risk.
More attempts to exploit these flaws are likely in the coming weeks since the technical details are now being made public, cyber-security researcher Salil Kanhere from UNSW Sydney said.
What happened after the flaws were exposed?
Developers of the PHP platform on Wednesday rolled out patches to fix the vulnerabilities that had been lurking in their software for years.
"All PHP users are strongly encouraged to update immediately," the company said.
Authorities and security organisations around the world have echoed those warnings to website operators to secure their platforms.
The US National Security Agency told all organisations that use PHP to take their systems offline if they were unable to patch them immediately, adding that the flaw could provide a "direct path" to exploit a system's database.
"These risks are serious enough to require immediate patching across United States Government departments and agencies," the agency said.
The UK's National Cyber Security Centre gave similar advice and told organisations to check for "backdoors installed by an attacker".
Its counterparts in the EU and Australia have also issued similar alerts.
Japanese Prime Minister Sanae Takaichi urged people to check if their publicly available websites ran on PHP.
"We have an urgent request for everyone to take action tonight," Takaichi wrote on X.
"If it is difficult to apply the fix patch promptly, temporarily suspending websites and similar measures can be considered an effective way to reduce risk," she said.
How is AI finding weak spots?
The vulnerabilities were found by researchers at the security firms Calif and Wiz.
The researchers used advanced AI tools that are able to analyse code and find flaws much faster than humans or older systems can.
"Modern software is incredibly complex, and some vulnerabilities can remain undetected for years," Kanhere said.
"The underlying bugs weren't new; what changed was our ability to find them," Kanhere said.
Details of the discovery leaked online this week, forcing the PHP platform's developers to rush out its announcement of the security flaw and its huge scale.
The incident "highlights how AI can uncover security flaws" but also how it can "help attackers rapidly develop offensive tools and exploits," OpenAI said in a blog post.
The ChatGPT-maker said it had released a program to check if the PHP platform is secure.
"Many of these flaws stem from the way software were built in the past, which were built for functionality and not with security in mind," said Ryan Ko, at the University of Queensland's Cyber Research Centre.
What can people do to safeguard themselves?
Website owners are being urged to secure their websites with the latest version of PHP.
The US National Security Agency has urged "heightened awareness" in the coming weeks and to closely monitor updates from software vendors.
"Vigilance in applying patches related to those systems is paramount," it said.
The onus lies mainly on website operators, but users should stay alert for any security advice issued by affected services, such as requests to change passwords, Kanhere said.
He warned people to be alert to any phishing messages exploiting the publicity around the incident too.
- Published10 October
- Published12 October`,
    bodyJa: `What is PHP and why did it spark a global cyber-security scramble?
- Published
For more than a decade, serious flaws had gone undetected in technology underpinning much of the internet.
It took artificial intelligence (AI) to bring them to light and caused a global cyber-security alert.
The vulnerabilities lie within a programming language called PHP, which has been used internationally since the 2000s to build websites.
Governments and cyber-security agencies around the world scrambled to contain the fallout of this discovery on Wednesday, and have urged website operators to install a new emergency fix or consider taking their platforms offline.
Cyber-security firm Wiz - one of the companies whose researchers uncovered the vulnerabilities - described the flaws as the "most severe" ever detected by AI.
OpenAI, whose technology was used to find the flaws, called the discovery "one of the most impactful security issues in recent memory".
What is the flaw?
Most people may not have heard of PHP - short for PHP: Hypertext Preprocessor - but they most certainly interact with it daily.
PHP powers a vast number of platforms, including online shops, Wikipedia and WordPress – the content management system behind many websites like blogs.
When you visit a website like Wikipedia, PHP is the code that collects information you need and presents it in a way you can read on the web, Paul Spain, chief executive of Gorilla Cyber Security, told the BBC.
But due to a flaw that could allow attackers to take control of affected web servers without authentication and steal sensitive data, everything built on PHP was left exposed.
AI could make such attacks easier and faster, Spain said, estimating that the flaw could affect "millions and millions" of websites.
It would be "disastrous" if hackers or countries weaponised the flaw and seized private data from websites, said cyber-security researcher Jill Slay from the University of Adelaide.
What websites have been affected?
The alert has disrupted services globally, from gaming platforms to government portals and online forums.
That includes Wikimedia - the organisation behind the online encyclopaedia Wikipedia - which took down a number of its systems as a precautionary measure.
Sites and pages have been taken offline by the Finnish government, Edinburgh council and the BBC, with the Netherlands' cyber-security agency also pulling its website.
A number of Scotland's public organisations, including councils and health boards, have also taken their websites offline.
Some experts warn the vulnerability could leave poorly maintained websites, particularly those belonging to smaller organisations with limited security resources, at greater risk.
More attempts to exploit these flaws are likely in the coming weeks since the technical details are now being made public, cyber-security researcher Salil Kanhere from UNSW Sydney said.
What happened after the flaws were exposed?
Developers of the PHP platform on Wednesday rolled out patches to fix the vulnerabilities that had been lurking in their software for years.
"All PHP users are strongly encouraged to update immediately," the company said.
Authorities and security organisations around the world have echoed those warnings to website operators to secure their platforms.
The US National Security Agency told all organisations that use PHP to take their systems offline if they were unable to patch them immediately, adding that the flaw could provide a "direct path" to exploit a system's database.
"These risks are serious enough to require immediate patching across United States Government departments and agencies," the agency said.
The UK's National Cyber Security Centre gave similar advice and told organisations to check for "backdoors installed by an attacker".
Its counterparts in the EU and Australia have also issued similar alerts.
Japanese Prime Minister Sanae Takaichi urged people to check if their publicly available websites ran on PHP.
"We have an urgent request for everyone to take action tonight," Takaichi wrote on X.
"If it is difficult to apply the fix patch promptly, temporarily suspending websites and similar measures can be considered an effective way to reduce risk," she said.
How is AI finding weak spots?
The vulnerabilities were found by researchers at the security firms Calif and Wiz.
The researchers used advanced AI tools that are able to analyse code and find flaws much faster than humans or older systems can.
"Modern software is incredibly complex, and some vulnerabilities can remain undetected for years," Kanhere said.
"The underlying bugs weren't new; what changed was our ability to find them," Kanhere said.
Details of the discovery leaked online this week, forcing the PHP platform's developers to rush out its announcement of the security flaw and its huge scale.
The incident "highlights how AI can uncover security flaws" but also how it can "help attackers rapidly develop offensive tools and exploits," OpenAI said in a blog post.
The ChatGPT-maker said it had released a program to check if the PHP platform is secure.
"Many of these flaws stem from the way software were built in the past, which were built for functionality and not with security in mind," said Ryan Ko, at the University of Queensland's Cyber Research Centre.
What can people do to safeguard themselves?
Website owners are being urged to secure their websites with the latest version of PHP.
The US National Security Agency has urged "heightened awareness" in the coming weeks and to closely monitor updates from software vendors.
"Vigilance in applying patches related to those systems is paramount," it said.
The onus lies mainly on website operators, but users should stay alert for any security advice issued by affected services, such as requests to change passwords, Kanhere said.
He warned people to be alert to any phishing messages exploiting the publicity around the incident too.
- Published10 October
- Published12 October`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c3qjnwye0ep5o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-22T03:48:50+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/6c55/live/d85b8680-cda9-11f1-a64c-550be9e3c66b.jpg",
    readTime: 10,
  },
  {
    id: "james-talarico-fires-back-at-elon-musk-i-d9f44d73",
    title: "James Talarico fires back at Elon Musk in Texas Senate race feud",
    titleJa: "James Talarico fires back at Elon Musk in Texas Senate race feud",
    summaryJa: "Musk in September donated $158 million to a Republican Super PAC, which sent that cash to a PAC backing GOP Senate nominee Ken Paxton, Talarico's opponent.",
    bodyOriginal: `James Talarico, the Democratic nominee seeking a Senate seat from Texas, fired back Wednesday night at Elon Musk for an X post in which the world's richest man hours earlier had said, "There is something deeply wrong with Talarico."
"There is something deeply wrong with a political system that allows one trillionaire to buy his own personal U.S. Senator," Talarico wrote in reply to Musk's tweet.
Talarico earlier Wednesday, during a campaign speech at the UH Hilton on the main campus of the University of Houston, called out Musk.
"In all likelihood, if you've seen an attack ad on your screen, that was Elon. If you've gotten lies in your mailbox, that was Elon," Talarico said, according to a report by Houston Public Media.
"If you've received a text message saying scary things about me, that was Elon too," Talarico said. "Elon Musk wants our land. He wants our water. He wants our taxpayer dollars. He wants his very own personal United States Senator. He is trying to buy Texas. But on Nov. 3, we are going to send a clear message to the world's first trillionaire: Texas is not for sale."
The sniping between Musk and Talarico came five days after news broke that Musk donated $158 million to a Republican super PAC, the Senate Leadership Fund, in September.
That money ended up with Texas PAC, a group that is backing Talarico's opponent, GOP nominee Ken Paxton, the Texas attorney general.
Musk also sent $10 million to Lone Star Liberty PAC, another group that is backing Paxton.
Musk, who is CEO of both SpaceX and Tesla, executed the big money dump as polls showed Paxton trailing Talarico in the contest.
Talarico's campaign last week said he had raised $64 million in the third quarter of this year. That was the largest tally ever reported for a Senate candidate in a third quarter, his campaign said.
In comparison, Paxton's campaign raised just $18 million for the same quarter.
Paxton beat incumbent Sen. John Cornyn in the Republican primary earlier this year.
His campaign didn't immediately respond to a request for comment.`,
    bodyJa: `James Talarico, the Democratic nominee seeking a Senate seat from Texas, fired back Wednesday night at Elon Musk for an X post in which the world's richest man hours earlier had said, "There is something deeply wrong with Talarico."
"There is something deeply wrong with a political system that allows one trillionaire to buy his own personal U.S. Senator," Talarico wrote in reply to Musk's tweet.
Talarico earlier Wednesday, during a campaign speech at the UH Hilton on the main campus of the University of Houston, called out Musk.
"In all likelihood, if you've seen an attack ad on your screen, that was Elon. If you've gotten lies in your mailbox, that was Elon," Talarico said, according to a report by Houston Public Media.
"If you've received a text message saying scary things about me, that was Elon too," Talarico said. "Elon Musk wants our land. He wants our water. He wants our taxpayer dollars. He wants his very own personal United States Senator. He is trying to buy Texas. But on Nov. 3, we are going to send a clear message to the world's first trillionaire: Texas is not for sale."
The sniping between Musk and Talarico came five days after news broke that Musk donated $158 million to a Republican super PAC, the Senate Leadership Fund, in September.
That money ended up with Texas PAC, a group that is backing Talarico's opponent, GOP nominee Ken Paxton, the Texas attorney general.
Musk also sent $10 million to Lone Star Liberty PAC, another group that is backing Paxton.
Musk, who is CEO of both SpaceX and Tesla, executed the big money dump as polls showed Paxton trailing Talarico in the contest.
Talarico's campaign last week said he had raised $64 million in the third quarter of this year. That was the largest tally ever reported for a Senate candidate in a third quarter, his campaign said.
In comparison, Paxton's campaign raised just $18 million for the same quarter.
Paxton beat incumbent Sen. John Cornyn in the Republican primary earlier this year.
His campaign didn't immediately respond to a request for comment.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/22/james-talarico-elon-musk-ken-paxton-texas-senate-race.html",
    publishedAt: "2026-10-22T01:21:10+00:00",
    category: "自動車",
    imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    readTime: 5,
  },
  {
    id: "critical-web-security-flaws-spark-global-7287b578",
    title: "Critical web security flaws spark global alarm as Google, OpenAI and Amazon respond",
    titleJa: "Critical web security flaws spark global alarm as Google, OpenAI and Amazon respond",
    summaryJa: "Critical PHP security flaws trigger global warnings as Google, OpenAI and Amazon respond to potential cyber threats.",
    bodyOriginal: `The tech world is racing to implement fixes after the discovery of critical security vulnerabilities in software used to power much of the internet.
The software, known as PHP, is an open-source programming language widely used to power websites and web applications. The discovery of the flaws prompted urgent warnings from governments worldwide, while tech giants including Google, OpenAI and Amazon have been involved in efforts to uncover the vulnerabilities, detect potential attacks and protect affected systems.
The two vulnerabilities, collectively known as "PHP2Shell," could allow hackers to remotely execute malicious code on affected servers, potentially exposing sensitive data, according to cybersecurity researchers. While not every website using PHP is necessarily vulnerable, the software's widespread use has raised concerns about the potential scale of attacks.
The U.S. National Security Agency on Wednesday urged organizations using PHP to prepare security updates addressing the vulnerabilities, warning that the flaws could provide attackers with direct access to server file systems and databases. The agency recommended taking affected systems offline until the vulnerabilities are fully addressed if immediate updates are not possible.
The Federal Bureau of Investigation also warned that malicious actors could exploit the vulnerabilities to execute code remotely, putting sensitive data and networks at risk.
Cybersecurity authorities in Singapore, the United Kingdom, Australia, Canada and the European Union have issued similar alerts, underscoring concerns about the potential impact on businesses, government agencies and other organizations that rely on PHP-based systems.
Amazon said its threat intelligence team had detected attempts to exploit the vulnerabilities before they were publicly disclosed, using its MadPot threat detection system, which monitors suspicious activity across internet-facing infrastructure. It said the findings suggest malicious actors were already attempting to exploit the vulnerabilities. However, Amazon said it remains unclear how the attackers obtained information about the flaws ahead of their disclosure.
Meanwhile, Google and OpenAI highlighted the growing role of artificial intelligence in identifying and addressing cybersecurity threats. Google said its cybersecurity unit Wiz used AI models to help find and investigate the vulnerabilities, while its Gemini AI contributed to efforts to assess the flaws, test potential attacks and verify security patches.
OpenAI said researchers working with its AI models had also helped uncover critical vulnerabilities in PHP. The company said it had spent the past two months leading a coalition of software maintainers, cybersecurity researchers and security providers to coordinate fixes and prepare protective measures ahead of public disclosure.
The ChatGPT maker described the flaws as among the most significant security issues in recent memory, highlighting both the potential of advanced AI systems to identify vulnerabilities in widely used software and the risk that similar capabilities could be exploited by cybercriminals.
Cloudflare, which provides cybersecurity and website infrastructure services, said it had deployed protections against the PHP2Shell vulnerabilities through its web application firewall. The company said its measures were designed to help block malicious requests targeting affected systems, providing an additional layer of defense as organizations work to install software updates.
The PHP development team has released security fixes, with authorities urging website operators to identify affected versions and apply the updates as quickly as possible. The episode underscores how vulnerabilities in widely used software can pose risks across industries and borders, even as AI increasingly plays a role in helping security researchers uncover and address those weaknesses.`,
    bodyJa: `The tech world is racing to implement fixes after the discovery of critical security vulnerabilities in software used to power much of the internet.
The software, known as PHP, is an open-source programming language widely used to power websites and web applications. The discovery of the flaws prompted urgent warnings from governments worldwide, while tech giants including Google, OpenAI and Amazon have been involved in efforts to uncover the vulnerabilities, detect potential attacks and protect affected systems.
The two vulnerabilities, collectively known as "PHP2Shell," could allow hackers to remotely execute malicious code on affected servers, potentially exposing sensitive data, according to cybersecurity researchers. While not every website using PHP is necessarily vulnerable, the software's widespread use has raised concerns about the potential scale of attacks.
The U.S. National Security Agency on Wednesday urged organizations using PHP to prepare security updates addressing the vulnerabilities, warning that the flaws could provide attackers with direct access to server file systems and databases. The agency recommended taking affected systems offline until the vulnerabilities are fully addressed if immediate updates are not possible.
The Federal Bureau of Investigation also warned that malicious actors could exploit the vulnerabilities to execute code remotely, putting sensitive data and networks at risk.
Cybersecurity authorities in Singapore, the United Kingdom, Australia, Canada and the European Union have issued similar alerts, underscoring concerns about the potential impact on businesses, government agencies and other organizations that rely on PHP-based systems.
Amazon said its threat intelligence team had detected attempts to exploit the vulnerabilities before they were publicly disclosed, using its MadPot threat detection system, which monitors suspicious activity across internet-facing infrastructure. It said the findings suggest malicious actors were already attempting to exploit the vulnerabilities. However, Amazon said it remains unclear how the attackers obtained information about the flaws ahead of their disclosure.
Meanwhile, Google and OpenAI highlighted the growing role of artificial intelligence in identifying and addressing cybersecurity threats. Google said its cybersecurity unit Wiz used AI models to help find and investigate the vulnerabilities, while its Gemini AI contributed to efforts to assess the flaws, test potential attacks and verify security patches.
OpenAI said researchers working with its AI models had also helped uncover critical vulnerabilities in PHP. The company said it had spent the past two months leading a coalition of software maintainers, cybersecurity researchers and security providers to coordinate fixes and prepare protective measures ahead of public disclosure.
The ChatGPT maker described the flaws as among the most significant security issues in recent memory, highlighting both the potential of advanced AI systems to identify vulnerabilities in widely used software and the risk that similar capabilities could be exploited by cybercriminals.
Cloudflare, which provides cybersecurity and website infrastructure services, said it had deployed protections against the PHP2Shell vulnerabilities through its web application firewall. The company said its measures were designed to help block malicious requests targeting affected systems, providing an additional layer of defense as organizations work to install software updates.
The PHP development team has released security fixes, with authorities urging website operators to identify affected versions and apply the updates as quickly as possible. The episode underscores how vulnerabilities in widely used software can pose risks across industries and borders, even as AI increasingly plays a role in helping security researchers uncover and address those weaknesses.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/22/php-google-openai-and-amazon-cyber.html",
    publishedAt: "2026-10-22T01:05:15+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "the-trillion-pound-oil-fund-the-governme-f46e8788",
    title: "The 'trillion pound' oil fund the government believes Britain could have built",
    titleJa: "The 'trillion pound' oil fund the government believes Britain could have built",
    summaryJa: "For the first time, the Treasury calculates how much the UK could have raised by investing North Sea proceeds.",
    bodyOriginal: `The 'trillion pound' oil fund the government believes Britain could have built
- Published
After a half-century wait, the United Kingdom now has an oil fund.
Chancellor John Healey announced the creation of an Energy Wealth Fund at the Jackdaw gas approval announcement on Wednesday, with £2bn of funding diverted from the existing National Wealth Fund.
A selection of energy exporting countries, mainly in the Gulf, but also including Norway, over the years have amassed multi-trillion funds using oil and gas revenues to create epic national piggy banks.
It has been a long-standing debate in UK economic policy circles. If neighbouring Norway has amassed a $2.4tn war chest from the same North Sea, where exactly did the UK's sovereign wealth fund go?
It is an apposite question on the week when the national debt also hit £3tn for the first time.
"The proceeds of this oil and gas coming ashore now can be invested for the future generations," the chancellor said.
"If we had done this when North Sea oil was first discovered in the 1980s, we'd have a British Sovereign Wealth Fund now that would be worth probably a trillion pounds."
On Wednesday, for the first time, Treasury officials actually calculated how much that missing British fund could have been worth.
The trillion pound number comes from internal Treasury modelling. The assumption was that the UK's historical North Sea receipts of £200bn had been invested, with no withdrawals and grown at a rate comparable to Norway's.
"Norway demonstrates the power of long-term investment: the government wants to learn from that principle, rather than copy its model wholesale," one insider told me.
It was a "missed opportunity" which "had we systematically invested those receipts, we could have built a huge national asset for future generations", they said.
It is a giant "What if?" asked often by economists critical of the Margaret Thatcher era.
The peak oil revenues were, in their view, frittered away in pre-election tax cuts, which ended up being spent on 1980s garden conservatories.
Others might argue that the revenues under subsequent governments were squandered on wasteful government spending. It is worth noting that Norway's fund only began in earnest in 1996.
The idea of a lost oil fund has also featured in arguments from supporters of Scottish independence, and was suggested by some government advisers in the 1970s.
I have met some of the officials running Norway's fund. They are sometimes lambasted by ordinary Norwegians on the Oslo commuter trains who can all check the live value of the national fund.
Three percent of its value is drawn down each year to fund a fifth to a quarter of government budgets. The nation drew down on the fund during the coronavirus pandemic.
It is meant to help fund Norway's post oil economy and society, as indeed are some of the equivalent funds in the Gulf. It is a gift to the future.
While the UK government promises to divert new revenues into its new fund, it will be run rather differently. Norway's fund is obliged to invest abroad, and has grown hugely off the back off investments in US big tech. The UK plan is to create a fund that can invest domestically in green energy. It may struggle to match the performance.
UK energy tax revenues are also forecast to dwindle as North Sea production slows. The rate of slowing may now ease, with Jackdaw and extensions to existing fields. Critically Norway's state still controls its oil companies, also giving a share of their profits.
Two billion Norwegian Kroner was exactly the starting investment in Norway's fund 30 years ago. It is now worth over a thousand times that.
Nobody expects the Energy Wealth Fund's £2bn to be worth £2tn by 2056. The question is: what might have been, had a similar, far-sighted idea been adopted here in decades past?
- Published16 hours ago`,
    bodyJa: `The 'trillion pound' oil fund the government believes Britain could have built
- Published
After a half-century wait, the United Kingdom now has an oil fund.
Chancellor John Healey announced the creation of an Energy Wealth Fund at the Jackdaw gas approval announcement on Wednesday, with £2bn of funding diverted from the existing National Wealth Fund.
A selection of energy exporting countries, mainly in the Gulf, but also including Norway, over the years have amassed multi-trillion funds using oil and gas revenues to create epic national piggy banks.
It has been a long-standing debate in UK economic policy circles. If neighbouring Norway has amassed a $2.4tn war chest from the same North Sea, where exactly did the UK's sovereign wealth fund go?
It is an apposite question on the week when the national debt also hit £3tn for the first time.
"The proceeds of this oil and gas coming ashore now can be invested for the future generations," the chancellor said.
"If we had done this when North Sea oil was first discovered in the 1980s, we'd have a British Sovereign Wealth Fund now that would be worth probably a trillion pounds."
On Wednesday, for the first time, Treasury officials actually calculated how much that missing British fund could have been worth.
The trillion pound number comes from internal Treasury modelling. The assumption was that the UK's historical North Sea receipts of £200bn had been invested, with no withdrawals and grown at a rate comparable to Norway's.
"Norway demonstrates the power of long-term investment: the government wants to learn from that principle, rather than copy its model wholesale," one insider told me.
It was a "missed opportunity" which "had we systematically invested those receipts, we could have built a huge national asset for future generations", they said.
It is a giant "What if?" asked often by economists critical of the Margaret Thatcher era.
The peak oil revenues were, in their view, frittered away in pre-election tax cuts, which ended up being spent on 1980s garden conservatories.
Others might argue that the revenues under subsequent governments were squandered on wasteful government spending. It is worth noting that Norway's fund only began in earnest in 1996.
The idea of a lost oil fund has also featured in arguments from supporters of Scottish independence, and was suggested by some government advisers in the 1970s.
I have met some of the officials running Norway's fund. They are sometimes lambasted by ordinary Norwegians on the Oslo commuter trains who can all check the live value of the national fund.
Three percent of its value is drawn down each year to fund a fifth to a quarter of government budgets. The nation drew down on the fund during the coronavirus pandemic.
It is meant to help fund Norway's post oil economy and society, as indeed are some of the equivalent funds in the Gulf. It is a gift to the future.
While the UK government promises to divert new revenues into its new fund, it will be run rather differently. Norway's fund is obliged to invest abroad, and has grown hugely off the back off investments in US big tech. The UK plan is to create a fund that can invest domestically in green energy. It may struggle to match the performance.
UK energy tax revenues are also forecast to dwindle as North Sea production slows. The rate of slowing may now ease, with Jackdaw and extensions to existing fields. Critically Norway's state still controls its oil companies, also giving a share of their profits.
Two billion Norwegian Kroner was exactly the starting investment in Norway's fund 30 years ago. It is now worth over a thousand times that.
Nobody expects the Energy Wealth Fund's £2bn to be worth £2tn by 2056. The question is: what might have been, had a similar, far-sighted idea been adopted here in decades past?
- Published16 hours ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cm4g1zrl2nrqo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-21T23:27:05+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/219e/live/8e724170-cda0-11f1-9a39-31b474234113.jpg",
    readTime: 10,
  },
  {
    id: "airbnb-hosts-can-no-longer-make-guests-s-30c425c7",
    title: "Airbnb hosts can no longer make guests strip beds and wash dishes under new rules",
    titleJa: "Airbnb hosts can no longer make guests strip beds and wash dishes under new rules",
    summaryJa: "The updated policy will apply to all reservations booked on the accommodation site on or after 20 November.",
    bodyOriginal: `Airbnb hosts can no longer make guests strip beds and wash dishes under new rules
- Published
Airbnb has changed its rules to limit what property hosts may ask guests to do - including when it comes to cleaning.
The updated guidelines state that hosts can now set seven standard house rules and can also add other "reasonable" requests.
Airbnb states that guests - who are required to pay a cleaning fee - should not be asked to complete tasks normally done by a cleaner, including washing dishes and stripping beds.
The new rules will apply to all reservations booked on or after 20 November on the accommodation marketplace.
"House rules help guests understand what hosts expect, but we've heard from our community that they can be confusing, onerous and hard to manage," Airbnb told the BBC.
"So, we've redesigned them to make them easier to discover and clearer to set, alongside a new policy that keeps requests reasonable, with no surprises."
According to the new requirements on the Airbnb website, hosts are generally not allowed to ask guests to complete tasks that "require significant effort or time, or would typically be performed by a cleaner, including stripping the bed, taking trash offsite, or washing and putting away dishes".
The company said it may grant exceptions in some circumstances. For example, guests can be asked to limit shower time if there are local drought-related water restrictions.
A property's rules will be displayed to guests more prominently moving forward and will appear in the guests' reservation reminders.
Contracts will only be allowed in limited circumstances, including when required by law or homeowners association rules.
While a host will not be able to impose fines, they remain in control of their house rules and requests, the company said.
If a host's request does not follow Airbnb policies, the issue will be flagged and the owner can appeal if they disagree.
Guests have for years complained about unreasonable tasks they we required to complete before departure, especially as they are required to pay cleaning fees.
TikTok videos from Airbnb hosts Cassie and Jon that show them closely inspecting their rental property in the US state of Georgia after guests leave have gone viral recently for their attention to detail.
One video from the couple, for example, accuses guests of "disrespecting the house rules" for leaving a television remote out of place.
They have been criticised for their strict rules and high standards but said in response that their content had been misinterpreted
Their videos have inspired other content creators to parody stringent hosts.
Related topics
- Published15 September
- Published15 December 2025`,
    bodyJa: `Airbnb hosts can no longer make guests strip beds and wash dishes under new rules
- Published
Airbnb has changed its rules to limit what property hosts may ask guests to do - including when it comes to cleaning.
The updated guidelines state that hosts can now set seven standard house rules and can also add other "reasonable" requests.
Airbnb states that guests - who are required to pay a cleaning fee - should not be asked to complete tasks normally done by a cleaner, including washing dishes and stripping beds.
The new rules will apply to all reservations booked on or after 20 November on the accommodation marketplace.
"House rules help guests understand what hosts expect, but we've heard from our community that they can be confusing, onerous and hard to manage," Airbnb told the BBC.
"So, we've redesigned them to make them easier to discover and clearer to set, alongside a new policy that keeps requests reasonable, with no surprises."
According to the new requirements on the Airbnb website, hosts are generally not allowed to ask guests to complete tasks that "require significant effort or time, or would typically be performed by a cleaner, including stripping the bed, taking trash offsite, or washing and putting away dishes".
The company said it may grant exceptions in some circumstances. For example, guests can be asked to limit shower time if there are local drought-related water restrictions.
A property's rules will be displayed to guests more prominently moving forward and will appear in the guests' reservation reminders.
Contracts will only be allowed in limited circumstances, including when required by law or homeowners association rules.
While a host will not be able to impose fines, they remain in control of their house rules and requests, the company said.
If a host's request does not follow Airbnb policies, the issue will be flagged and the owner can appeal if they disagree.
Guests have for years complained about unreasonable tasks they we required to complete before departure, especially as they are required to pay cleaning fees.
TikTok videos from Airbnb hosts Cassie and Jon that show them closely inspecting their rental property in the US state of Georgia after guests leave have gone viral recently for their attention to detail.
One video from the couple, for example, accuses guests of "disrespecting the house rules" for leaving a television remote out of place.
They have been criticised for their strict rules and high standards but said in response that their content had been misinterpreted
Their videos have inspired other content creators to parody stringent hosts.
Related topics
- Published15 September
- Published15 December 2025`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c6n049gg75r4o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-21T22:54:58+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/c5a8/live/221cd660-cda1-11f1-96a8-11b361e3c25f.jpg",
    readTime: 7,
  },
  {
    id: "trump-says-data-centers-should-generate-1b0e018f",
    title: "Trump says data centers should generate their own electricity — but experts say only states can mandate that",
    titleJa: "Trump says data centers should generate their own electricity — but experts say only states can mandate that",
    summaryJa: "The president’s statement comes as a voter backlash against the facilities intensifies ahead of the midterm elections.",
    bodyOriginal: `The president’s statement comes as a voter backlash against the facilities intensifies ahead of the midterm elections.`,
    bodyJa: `The president’s statement comes as a voter backlash against the facilities intensifies ahead of the midterm elections.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/trump-says-data-centers-should-generate-their-own-electricity-but-experts-say-only-states-can-mandate-that-415dcaad?mod=mw_rss_topstories",
    publishedAt: "2026-10-21T21:31:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-03800189",
    readTime: 2,
  },
  {
    id: "trump-denies-ordering-starlink-slowdown-3eb7d4ad",
    title: "Trump denies ordering Starlink slowdown in Ukraine, says he doesn't know who did",
    titleJa: "Trump denies ordering Starlink slowdown in Ukraine, says he doesn't know who did",
    summaryJa: "Asked if Elon Musk ordered the slowdown, Trump said, \"I don't know who did it, but I was not involved.\"",
    bodyOriginal: `President Donald Trump on Wednesday insisted that he had nothing to do with a slowdown of SpaceX's Starlink in Ukraine, and does not know if Elon Musk was responsible for speed-capping the critical satellite service.
Trump's latest denial came one day after The Wall Street Journal, citing unnamed U.S. officials and people familiar with the matter, reported that Musk ordered the slowdown and discussed it with Trump.
"I wasn't involved," Trump told a reporter when asked about the decision as he departed the White House for a campaign rally in South Carolina.
When pressed to answer if Musk, SpaceX's founder and CEO, ordered the slowdown, Trump said, "I don't know who did it, but I was not involved."
The recent disruption of Starshield, the military-grade version of Starlink, rendered some Ukrainian drones effectively useless, weakening defenses against Russian attacks.
Ukrainian President Volodymyr Zelenskyy on Monday said his military still faces "speed restrictions on Starlink and Starshield services in different parts of the front."
"No explanation for either of these issues has been provided to Ukraine by the American side," he said.
The Journal reported Tuesday that Musk and Trump discussed the move to throttle Starlink "soon after" the change first became public last week, two people told the Journal.
One of the people who spoke with the news outlet claimed that Musk discussed the matter with multiple senior administration officials, including Trump himself, prior to imposing the Starlink speed cap.
Trump and Musk have both recently ramped up their criticism of Zelenskyy. But neither of them have yet identified who ordered the Starlink disruption.
Musk said on X last week that Starshield systems are "owned and controlled by the US government" and that any speed or usage limits are "decided by the US military and ultimately POTUS."
Earlier Wednesday, Zelesnkyy said he and Norwegian Defense Minister Tore Sandvik "discussed in detail launching work on new satellite communication capabilities for our warriors."
"We will involve partners who have the capacity to provide support," Zelenskyy said in an X post.
Sen. John Cornyn, R-Texas, told CNBC's "Squawk Box" on Wednesday morning that he does not believe Musk would throttle Starlink without "at least the acquiescence of the White House."`,
    bodyJa: `President Donald Trump on Wednesday insisted that he had nothing to do with a slowdown of SpaceX's Starlink in Ukraine, and does not know if Elon Musk was responsible for speed-capping the critical satellite service.
Trump's latest denial came one day after The Wall Street Journal, citing unnamed U.S. officials and people familiar with the matter, reported that Musk ordered the slowdown and discussed it with Trump.
"I wasn't involved," Trump told a reporter when asked about the decision as he departed the White House for a campaign rally in South Carolina.
When pressed to answer if Musk, SpaceX's founder and CEO, ordered the slowdown, Trump said, "I don't know who did it, but I was not involved."
The recent disruption of Starshield, the military-grade version of Starlink, rendered some Ukrainian drones effectively useless, weakening defenses against Russian attacks.
Ukrainian President Volodymyr Zelenskyy on Monday said his military still faces "speed restrictions on Starlink and Starshield services in different parts of the front."
"No explanation for either of these issues has been provided to Ukraine by the American side," he said.
The Journal reported Tuesday that Musk and Trump discussed the move to throttle Starlink "soon after" the change first became public last week, two people told the Journal.
One of the people who spoke with the news outlet claimed that Musk discussed the matter with multiple senior administration officials, including Trump himself, prior to imposing the Starlink speed cap.
Trump and Musk have both recently ramped up their criticism of Zelenskyy. But neither of them have yet identified who ordered the Starlink disruption.
Musk said on X last week that Starshield systems are "owned and controlled by the US government" and that any speed or usage limits are "decided by the US military and ultimately POTUS."
Earlier Wednesday, Zelesnkyy said he and Norwegian Defense Minister Tore Sandvik "discussed in detail launching work on new satellite communication capabilities for our warriors."
"We will involve partners who have the capacity to provide support," Zelenskyy said in an X post.
Sen. John Cornyn, R-Texas, told CNBC's "Squawk Box" on Wednesday morning that he does not believe Musk would throttle Starlink without "at least the acquiescence of the White House."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/21/trump-starlink-ukraine-elon-musk.html",
    publishedAt: "2026-10-21T21:29:14+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 6,
  },
  {
    id: "ibm-beats-on-top-and-bottom-lines-as-ceo-a7d3c04e",
    title: "IBM beats on top and bottom lines as CEO Krishna touts 'Super Intelligence' traction",
    titleJa: "IBM beats on top and bottom lines as CEO Krishna touts 'Super Intelligence' traction",
    summaryJa: "CEO Arvind Krishna indicated that IBM is helping clients in artificial intelligence.",
    bodyOriginal: `IBM shares climbed in extended trading on Wednesday after the technology vendor reported better-than-predicted third-quarter results.
Here's how the company performed relative to LSEG consensus:
- Earnings: $2.95 adjusted vs. $2.86 expected
- Revenue: $17.10 billion vs. $16.82 billion expected
IBM's revenue grew about 5% from a year ago, according to a statement. Net income, at $2.19 billion, or $2.30 per share, increased from $1.74 billion, or $1.84 per share, a year ago. Adjusted earnings exclude acquisition-related adjustments.
"Our clients are now deploying 'Super Intelligence' in ways that transform entire operating models, instead of simply addressing narrow or novel problems," IBM CEO Arvind Krishna was quoted as saying in a statement.
With respect to guidance, IBM called for full-year free cash flow to increase by more than $1 billion. The forecast as of July was a bump of approximately $1 billion. IBM still sees 2026 constant-currency revenue growth between 4% and 5%.
In the third quarter, IBM generated $7.80 billion in software revenue, growing 8% and topping the $7.66 billion consensus among analysts polled by StreetAccount.
Consulting revenue, at $5.34 billion, was flat and just below StreetAccount's $5.37 billion consensus.
"AI is increasingly embedded in broader transformations our clients are undertaking, representing about 30% of our consulting revenue in the quarter and 35% of our backlog," Jim Kavanaugh, IBM's finance chief, said on a conference call with analysts.
The consulting unit's 27.4% gross margin narrowed from 28.9% in the second quarter.
"We reinvested productivity gains into digital assets, accelerating our transition towards a services as software model to capture the growing AI opportunity," Kavanaugh said.
Infrastructure revenue came to $3.70 billion. That was up 4% and higher than the $3.57 billion consensus from StreetAccount.
The company's adjusted gross margin, at 58.5%, was narrower than the StreetAccount consensus of 59.1%.
During the quarter, IBM said it agreed to buy Boeing and General Motors' HRL Laboratories, formerly known as Hughes Aircraft's research division, for an undisclosed sum.
As of Wednesday's close, IBM stock has come down 15%, while the S&P 500 index has gained 13%.
Executives will discuss the results with analysts on a conference call starting at 5 p.m. ET.
WATCH: IBM CEO on quantum computing: Will see $1 trillion in value in by end of 2030s`,
    bodyJa: `IBM shares climbed in extended trading on Wednesday after the technology vendor reported better-than-predicted third-quarter results.
Here's how the company performed relative to LSEG consensus:
- Earnings: $2.95 adjusted vs. $2.86 expected
- Revenue: $17.10 billion vs. $16.82 billion expected
IBM's revenue grew about 5% from a year ago, according to a statement. Net income, at $2.19 billion, or $2.30 per share, increased from $1.74 billion, or $1.84 per share, a year ago. Adjusted earnings exclude acquisition-related adjustments.
"Our clients are now deploying 'Super Intelligence' in ways that transform entire operating models, instead of simply addressing narrow or novel problems," IBM CEO Arvind Krishna was quoted as saying in a statement.
With respect to guidance, IBM called for full-year free cash flow to increase by more than $1 billion. The forecast as of July was a bump of approximately $1 billion. IBM still sees 2026 constant-currency revenue growth between 4% and 5%.
In the third quarter, IBM generated $7.80 billion in software revenue, growing 8% and topping the $7.66 billion consensus among analysts polled by StreetAccount.
Consulting revenue, at $5.34 billion, was flat and just below StreetAccount's $5.37 billion consensus.
"AI is increasingly embedded in broader transformations our clients are undertaking, representing about 30% of our consulting revenue in the quarter and 35% of our backlog," Jim Kavanaugh, IBM's finance chief, said on a conference call with analysts.
The consulting unit's 27.4% gross margin narrowed from 28.9% in the second quarter.
"We reinvested productivity gains into digital assets, accelerating our transition towards a services as software model to capture the growing AI opportunity," Kavanaugh said.
Infrastructure revenue came to $3.70 billion. That was up 4% and higher than the $3.57 billion consensus from StreetAccount.
The company's adjusted gross margin, at 58.5%, was narrower than the StreetAccount consensus of 59.1%.
During the quarter, IBM said it agreed to buy Boeing and General Motors' HRL Laboratories, formerly known as Hughes Aircraft's research division, for an undisclosed sum.
As of Wednesday's close, IBM stock has come down 15%, while the S&P 500 index has gained 13%.
Executives will discuss the results with analysts on a conference call starting at 5 p.m. ET.
WATCH: IBM CEO on quantum computing: Will see $1 trillion in value in by end of 2030s`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/21/ibm-q3-earnings-report-2026.html",
    publishedAt: "2026-10-21T21:21:40+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 6,
  },
  {
    id: "coreweave-s-market-confidence-erodes-as-9c0a48b8",
    title: "CoreWeave’s market confidence erodes as bond yields spike and stock sinks",
    titleJa: "CoreWeave’s market confidence erodes as bond yields spike and stock sinks",
    summaryJa: "CoreWeave shares are down 29% in October, and the spreads in its credit default swaps are widening.",
    bodyOriginal: `CoreWeave is facing a crisis of confidence on Wall Street that's playing out in real time among equity and bond investors.
With interest rates spiking and AI buildout concerns mounting, debt-heavy neoclouds like CoreWeave are being viewed by many market participants as the most vulnerable trade in the artificial intelligence space.
"Sentiment is decidedly negative," Andrew Keches, a credit analyst at Barclays, wrote in a note to clients on Tuesday, referring broadly to corporate debt in tech. Keches highlighted the "speed at which AI vibes are shifting on a day-to-day basis."
CoreWeave, which went public in March of last year and reached a peak market cap of about $90 billion three months later, is now valued at roughly $34 billion, with its stock down 29% this month. Its unsecured debt, meanwhile, is sporting a yield of about 15%.
The spread on CoreWeave's five-year credit default swaps, which are insurance against default, is up 164% in the past year and 30% in October. It last stood at nearly 1,067 basis points, or 10.67%.
CoreWeave declined to comment.
The story is playing out across the neocloud sector. Shares of Nebius are down 27% this month, while IREN's stock is down 32%. In Australia, shares of data center operator NextDC plunged 40% on Wednesday after the company slashed its annual earnings forecast. Earlier this month, Australian data center company Firmus scrapped its planned IPO, citing market volatility and conditions.
U.K. neocloud Nscale is now under the microscope as investors wait to see whether the Nvidia-backed company will go through with its IPO. The company filed to go public on the New York Stock Exchange last month.
A representative from Nscale declined to comment.
On hold until midterms
CoreWeave is the biggest of the pack, and is intimately tied to the U.S. AI market. Nvidia is its top institutional investor, with a stake of about 9%, according to FactSet. And more than two-thirds of CoreWeave's revenue last year came from Microsoft.
That's put a spotlight on CoreWeave's financials and its ability to remain viable. The company has about $20.7 billion in debt coming due through 2030 and another $14.9 billion thereafter, with the prospects of higher interest rates on future financing.
Sources on credit desks told CNBC that the high-yield debt market is effectively on hold until after the midterm elections in two weeks given ongoing concerns about the political pushback that data centers are facing. One source, who asked not to be named because of the sensitivity of the matter, said fixed income investors "want permitting and regulatory requirements to be substantially resolved" before they commit financing.
"Given recent turbulence, pausing makes sense," Seth Meyer, global head of client portfolio Management at Janus Henderson, said in an interview.
CoreWeave CEO Mike Intrator, who co-founded the company in 2017 initially as a crypto mining venture, sent a memo to employees on Thursday, which CNBC obtained, to try and tamp down concern. Intrator stressed that the company maintains a range of funding options.
"Our financing model combines infrastructure-backed borrowing, corporate debt, equity, and customer prepayments," Intrator wrote. He added that the company has "additional flexibility to raise equity over time as market conditions and our capital needs warrant."
CoreWeave had $5.5 billion of cash and equivalents at the end of the second quarter. The company is expected to report third-quarter results next month. Analysts expect negative free cash flow in the period to swell to $10.1 billion, the highest since the company started reporting quarterly financials, according to FactSet.
One issue being debated heading into the report is how much more capital CoreWeave needs to raise. Rob Oliver, a software analyst at Baird, is estimating roughly $30 billion in 2027.
"Earnings may address financing measures to shore up confidence," Oliver said in an interview. "But they wouldn't need that capital until the first quarter."
Another question is whether Nvidia step in if necessary?
Nvidia, which supplies the graphics processing units that CoreWeave rents out, invested $2 billion in January for a 10% stake. The purchase price was $87.20 a share. The stock is now trading at $61.82 even after jumping 6% the day of the announcement.
While Nvidia CEO Jensen Huang said last week that CoreWeave doesn't need a backstop, some investors say the chip giant's further participation may be necessary if credit conditions continue to worsen.
Nvidia didn't immediately respond to a request for comment.
Analysts at Goldman Sachs, JPMorgan Chase and Barclays have put out bullish notes on the company this week, highlighting the company's GPU-backed loans and its solid list of investment grade customers like Microsoft and Meta. Goldman analysts emphasized the company's strength in the market relative to many of its neocloud competitors.
"Not all neoclouds are created equal," they wrote, in upgrading their rating to buy from hold. "CoreWeave is likely in the top quartile of neoclouds, if not the top decile, when measured on performance and ability to execute."
—CNBC's Michelle Fox and Jordan Novet contributed to this report.
WATCH: Market rotation favors quality over AI leverage, says Charles Schwab's Liz Ann Sonders`,
    bodyJa: `CoreWeave is facing a crisis of confidence on Wall Street that's playing out in real time among equity and bond investors.
With interest rates spiking and AI buildout concerns mounting, debt-heavy neoclouds like CoreWeave are being viewed by many market participants as the most vulnerable trade in the artificial intelligence space.
"Sentiment is decidedly negative," Andrew Keches, a credit analyst at Barclays, wrote in a note to clients on Tuesday, referring broadly to corporate debt in tech. Keches highlighted the "speed at which AI vibes are shifting on a day-to-day basis."
CoreWeave, which went public in March of last year and reached a peak market cap of about $90 billion three months later, is now valued at roughly $34 billion, with its stock down 29% this month. Its unsecured debt, meanwhile, is sporting a yield of about 15%.
The spread on CoreWeave's five-year credit default swaps, which are insurance against default, is up 164% in the past year and 30% in October. It last stood at nearly 1,067 basis points, or 10.67%.
CoreWeave declined to comment.
The story is playing out across the neocloud sector. Shares of Nebius are down 27% this month, while IREN's stock is down 32%. In Australia, shares of data center operator NextDC plunged 40% on Wednesday after the company slashed its annual earnings forecast. Earlier this month, Australian data center company Firmus scrapped its planned IPO, citing market volatility and conditions.
U.K. neocloud Nscale is now under the microscope as investors wait to see whether the Nvidia-backed company will go through with its IPO. The company filed to go public on the New York Stock Exchange last month.
A representative from Nscale declined to comment.
On hold until midterms
CoreWeave is the biggest of the pack, and is intimately tied to the U.S. AI market. Nvidia is its top institutional investor, with a stake of about 9%, according to FactSet. And more than two-thirds of CoreWeave's revenue last year came from Microsoft.
That's put a spotlight on CoreWeave's financials and its ability to remain viable. The company has about $20.7 billion in debt coming due through 2030 and another $14.9 billion thereafter, with the prospects of higher interest rates on future financing.
Sources on credit desks told CNBC that the high-yield debt market is effectively on hold until after the midterm elections in two weeks given ongoing concerns about the political pushback that data centers are facing. One source, who asked not to be named because of the sensitivity of the matter, said fixed income investors "want permitting and regulatory requirements to be substantially resolved" before they commit financing.
"Given recent turbulence, pausing makes sense," Seth Meyer, global head of client portfolio Management at Janus Henderson, said in an interview.
CoreWeave CEO Mike Intrator, who co-founded the company in 2017 initially as a crypto mining venture, sent a memo to employees on Thursday, which CNBC obtained, to try and tamp down concern. Intrator stressed that the company maintains a range of funding options.
"Our financing model combines infrastructure-backed borrowing, corporate debt, equity, and customer prepayments," Intrator wrote. He added that the company has "additional flexibility to raise equity over time as market conditions and our capital needs warrant."
CoreWeave had $5.5 billion of cash and equivalents at the end of the second quarter. The company is expected to report third-quarter results next month. Analysts expect negative free cash flow in the period to swell to $10.1 billion, the highest since the company started reporting quarterly financials, according to FactSet.
One issue being debated heading into the report is how much more capital CoreWeave needs to raise. Rob Oliver, a software analyst at Baird, is estimating roughly $30 billion in 2027.
"Earnings may address financing measures to shore up confidence," Oliver said in an interview. "But they wouldn't need that capital until the first quarter."
Another question is whether Nvidia step in if necessary?
Nvidia, which supplies the graphics processing units that CoreWeave rents out, invested $2 billion in January for a 10% stake. The purchase price was $87.20 a share. The stock is now trading at $61.82 even after jumping 6% the day of the announcement.
While Nvidia CEO Jensen Huang said last week that CoreWeave doesn't need a backstop, some investors say the chip giant's further participation may be necessary if credit conditions continue to worsen.
Nvidia didn't immediately respond to a request for comment.
Analysts at Goldman Sachs, JPMorgan Chase and Barclays have put out bullish notes on the company this week, highlighting the company's GPU-backed loans and its solid list of investment grade customers like Microsoft and Meta. Goldman analysts emphasized the company's strength in the market relative to many of its neocloud competitors.
"Not all neoclouds are created equal," they wrote, in upgrading their rating to buy from hold. "CoreWeave is likely in the top quartile of neoclouds, if not the top decile, when measured on performance and ability to execute."
—CNBC's Michelle Fox and Jordan Novet contributed to this report.
WATCH: Market rotation favors quality over AI leverage, says Charles Schwab's Liz Ann Sonders`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/21/coreweaves-market-confidence-erodes-as-bond-yields-spike-stock-sinks.html",
    publishedAt: "2026-10-21T21:12:29+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "southwest-airlines-cuts-2026-profit-fore-5ce2caca",
    title: "Southwest Airlines cuts 2026 profit forecast on higher fuel",
    titleJa: "Southwest Airlines cuts 2026 profit forecast on higher fuel",
    summaryJa: "Southwest Airlines became the third major U.S. airline this month to cut its 2026 profit forecast due to higher fuel prices.",
    bodyOriginal: `Southwest Airlines became the third major U.S. airline this month to cut its 2026 profit forecast due to higher fuel prices, but CEO Bob Jordan said travelers continue to book despite higher fares.
The carrier expects to earn between $2.60 and $2.85 a share on an adjusted basis this year, down from its forecast in July of between $3.25 to as much as $4.25 a share.
Here's what Southwest reported for third quarter compared with Wall Street expectations, according to consensus estimates from LSEG:
- Earnings per share: 66 cents adjusted vs. 58 cents expected
- Revenue: $8.42 billion adjusted vs. $8.25 billion expected
Southwest forecast per-share adjusted earnings of between 55 cents and 80 cents in the fourth quarter and unit revenue, a gauge of airfare, up as much as 21% from a year earlier. It said it expects to grow capacity by up to 4% year over year.
"Demand remained strong as we lapped last year's bag fee and other commercial initiatives, reinforcing our belief that the earnings power we've built is durable, even with significantly higher fuel costs," Jordan said in an earnings release.
The airline said its average passenger fare was $231.69 in the third quarter, up almost 27% from the same quarter of 2025. A spokesman said that number does not include add-on fees. The number of revenue passengers carried fell 3.2% to 33.47 million people.
Under pressure to grow revenue, Southwest has been remaking its longtime business model over the past several years, scrapping its old policies like two free checked bags per passenger and open seating. In its place, Southwest has started charging for many seat assignments and added a bag fee, similar to major competitors.
For the third quarter, Southwest posted net income of $270 million, or 55 cents a share, up from $54 million or 10 cents a share a year earlier. Revenue rose more than 21% to $8.42 billion.
Adjusting for one-time items, Southwest reported 66 cents a share.
Delta Air Lines and United Airlines also cut their profit outlooks for the rest of the year when they reported third-quarter earnings. Both of those airlines reported top- and bottom-line misses for the third quarter.`,
    bodyJa: `Southwest Airlines became the third major U.S. airline this month to cut its 2026 profit forecast due to higher fuel prices, but CEO Bob Jordan said travelers continue to book despite higher fares.
The carrier expects to earn between $2.60 and $2.85 a share on an adjusted basis this year, down from its forecast in July of between $3.25 to as much as $4.25 a share.
Here's what Southwest reported for third quarter compared with Wall Street expectations, according to consensus estimates from LSEG:
- Earnings per share: 66 cents adjusted vs. 58 cents expected
- Revenue: $8.42 billion adjusted vs. $8.25 billion expected
Southwest forecast per-share adjusted earnings of between 55 cents and 80 cents in the fourth quarter and unit revenue, a gauge of airfare, up as much as 21% from a year earlier. It said it expects to grow capacity by up to 4% year over year.
"Demand remained strong as we lapped last year's bag fee and other commercial initiatives, reinforcing our belief that the earnings power we've built is durable, even with significantly higher fuel costs," Jordan said in an earnings release.
The airline said its average passenger fare was $231.69 in the third quarter, up almost 27% from the same quarter of 2025. A spokesman said that number does not include add-on fees. The number of revenue passengers carried fell 3.2% to 33.47 million people.
Under pressure to grow revenue, Southwest has been remaking its longtime business model over the past several years, scrapping its old policies like two free checked bags per passenger and open seating. In its place, Southwest has started charging for many seat assignments and added a bag fee, similar to major competitors.
For the third quarter, Southwest posted net income of $270 million, or 55 cents a share, up from $54 million or 10 cents a share a year earlier. Revenue rose more than 21% to $8.42 billion.
Adjusting for one-time items, Southwest reported 66 cents a share.
Delta Air Lines and United Airlines also cut their profit outlooks for the rest of the year when they reported third-quarter earnings. Both of those airlines reported top- and bottom-line misses for the third quarter.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/21/southwest-airlines-luv-3q-2026-earnings.html",
    publishedAt: "2026-10-21T21:07:11+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "websites-taken-down-worldwide-as-critica-e2498d0c",
    title: "Websites taken down worldwide as critical cyber-security update issued",
    titleJa: "Websites taken down worldwide as critical cyber-security update issued",
    summaryJa: "The vulnerabilities with PHP, a programming language widely used across the internet, have been described as the most significant ever found by AI.",
    bodyOriginal: `Websites taken down worldwide as critical cyber-security update issued
- Published
International governments and agencies have urged websites to address two critical cyber-security flaws in a programming language which powers much of the internet.
The vulnerabilities were found within the PHP programming language, with a fix issued on Wednesday afternoon.
Multiple cyber-security agencies have urged organisations unable to apply fixes in time to consider taking their sites down, leaving bodies such as the Finnish government, Edinburgh council and the BBC to take pages offline.
The flaws were discovered by AI, with cyber-security firm Wiz saying they were the "most severe vulnerabilities ever discovered" by the tech, which is reshaping the cyber landscape.
Finland has temporarily shut down the government's public web services, while the Netherlands' cyber-security agency said it was taking its own website offline due to the vulnerabilities.
The US National Security Agency issued similar advice on X, external for organisations to take their systems offline if they were unable to update with the fix.
"These vulnerabilities often provide a direct path to the server's file system or database," it wrote.
Meanwhile, the White House said federal agencies were working with leading AI labs to speed up a fix to the issue.
And in a post on X, external, Japan's Prime Minister Sanae Takaichi urged people to check if their publicly available websites ran on PHP.
The Wikimedia Foundation, which runs the online encyclopedia Wikipedia, said it was addressing the security vulnerabilities.
"We have taken down a number of other systems as a precautionary measure until they can be safely patched," it said.
That led some people to be unable to access parts of Wikipedia on Wednesday.
Edinburgh council's website has also become inaccessible, as well as the online homes for several BBC programmes including Doctor Who and The Traitors.
They have not confirmed a link to PHP - BBC News has approached them for comment.
'Roughly 70%' of internet
Other websites, including the art platform DeviantArt, have said they are "temporarily down for maintenance, external" without specifying the reason.
The vulnerabilities were discovered by cyber-security researchers at the firms Calif and Wiz.
Calif, along with PHP Foundation, were part of a program started by OpenAI called Patch the Planet.
Through that program, they were given access to the AI company's advanced AI tools in order to find and fix flaws in web development language.
OpenAI said in a blog post, external that the discovery was "one of the most impactful security issues in recent memory". It added an internal researcher at the company had also discovered the issue around the same time as the other firms.
The flaws had gone undetected for more than a decade. By August, after a few weeks of using advanced AI tools, they were discovered.
"Frontier models were critical to making this process practical, enabling us to develop and adapt working exploits across multiple applications in hours," Wiz said in a blog post.
It has estimated "roughly 70%" of the internet is affected, though the BBC is unable to verify that figure.
While PHP Foundation intended to release its discovery later this month along with a complete fix for the problem, usually referred to by software developers as a "patch," details of the flaw were leaked on social media on Tuesday.
It forced PHP Foundation to rush out its announcement of the vulnerability and its huge scale.
The Netherlands' National Institute for Public Health and the Environment, an agency of the Dutch government, has taken down its website.
Similarly the website of the Tweede Kamer, the lower house of the nation's parliament, has become inaccessible.
The UK's National Cyber Security Centre (NCSC), as well as its counterparts in the EU and Australia have urged those who use PHP to apply the fixes.
"Where immediate remediation is not feasible, organisations should consider taking the system offline until it can be fully mitigated," the NCSC said in a note, external.
Japan's national cyber-security office and EU cyber-security officials have issued a similar warning, external.
'Early attacks emerging'
"PHP is everywhere. It quietly powers WordPress, Drupal, Joomla, and Magento sites, shared hosting platforms, control panels, and an awful lot of software that doesn't even advertise that it runs PHP under the hood," cyber-security company Huntress said.
Cyber-security expert Don Smith, from the Sophos Counter Threat Unit, told the BBC this would "likely be a priority target" for hackers.
The immediate challenge was not simply installing a patch to fix the issue, but finding and managing every instance where PHP was running, he said.
"The use of PHP is pervasive, it can sit beneath public websites, content management systems, hosting platforms and third-party products, sometimes without even being obvious to the organisation using it," he said.
He said it was crucial that organisations looked out for signs that an attacker "might have already have gained a foothold".
The European Union Computer Emergency Response Team (CERT-EU) said the risk scores given to the vulnerabilities "indicate the potential for unauthenticated remote code execution".
Such a cyber-attack could potentially allow hackers to install malware and take down websites.
Dane Knecht, chief technology officer at internet infrastructure firm Cloudflare, said he was, external "seeing early attacks emerging and are updating mitigations as new vectors show up".
The NCSC said once organisations have installed the update, they should "continuously monitor for security updates from third-party software vendors, including for appliances and services that may bundle PHP".
It is not yet clear which versions of the programming language are affected, but CERT-EU said it could affect all versions of it dating back to PHP 5 onwards - which launched in 2004.
The PHP Foundation has issued the update only for the latest versions however - with people using PHP 8.1 or older being urged to upgrade.
PHP was created for web development. It is used on servers to implement what you see when you visit websites.
Not all websites use it, but it nonetheless powers a large portion of the internet.
King warns malicious online actors are evolving tactics
- Published10 October
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.`,
    bodyJa: `Websites taken down worldwide as critical cyber-security update issued
- Published
International governments and agencies have urged websites to address two critical cyber-security flaws in a programming language which powers much of the internet.
The vulnerabilities were found within the PHP programming language, with a fix issued on Wednesday afternoon.
Multiple cyber-security agencies have urged organisations unable to apply fixes in time to consider taking their sites down, leaving bodies such as the Finnish government, Edinburgh council and the BBC to take pages offline.
The flaws were discovered by AI, with cyber-security firm Wiz saying they were the "most severe vulnerabilities ever discovered" by the tech, which is reshaping the cyber landscape.
Finland has temporarily shut down the government's public web services, while the Netherlands' cyber-security agency said it was taking its own website offline due to the vulnerabilities.
The US National Security Agency issued similar advice on X, external for organisations to take their systems offline if they were unable to update with the fix.
"These vulnerabilities often provide a direct path to the server's file system or database," it wrote.
Meanwhile, the White House said federal agencies were working with leading AI labs to speed up a fix to the issue.
And in a post on X, external, Japan's Prime Minister Sanae Takaichi urged people to check if their publicly available websites ran on PHP.
The Wikimedia Foundation, which runs the online encyclopedia Wikipedia, said it was addressing the security vulnerabilities.
"We have taken down a number of other systems as a precautionary measure until they can be safely patched," it said.
That led some people to be unable to access parts of Wikipedia on Wednesday.
Edinburgh council's website has also become inaccessible, as well as the online homes for several BBC programmes including Doctor Who and The Traitors.
They have not confirmed a link to PHP - BBC News has approached them for comment.
'Roughly 70%' of internet
Other websites, including the art platform DeviantArt, have said they are "temporarily down for maintenance, external" without specifying the reason.
The vulnerabilities were discovered by cyber-security researchers at the firms Calif and Wiz.
Calif, along with PHP Foundation, were part of a program started by OpenAI called Patch the Planet.
Through that program, they were given access to the AI company's advanced AI tools in order to find and fix flaws in web development language.
OpenAI said in a blog post, external that the discovery was "one of the most impactful security issues in recent memory". It added an internal researcher at the company had also discovered the issue around the same time as the other firms.
The flaws had gone undetected for more than a decade. By August, after a few weeks of using advanced AI tools, they were discovered.
"Frontier models were critical to making this process practical, enabling us to develop and adapt working exploits across multiple applications in hours," Wiz said in a blog post.
It has estimated "roughly 70%" of the internet is affected, though the BBC is unable to verify that figure.
While PHP Foundation intended to release its discovery later this month along with a complete fix for the problem, usually referred to by software developers as a "patch," details of the flaw were leaked on social media on Tuesday.
It forced PHP Foundation to rush out its announcement of the vulnerability and its huge scale.
The Netherlands' National Institute for Public Health and the Environment, an agency of the Dutch government, has taken down its website.
Similarly the website of the Tweede Kamer, the lower house of the nation's parliament, has become inaccessible.
The UK's National Cyber Security Centre (NCSC), as well as its counterparts in the EU and Australia have urged those who use PHP to apply the fixes.
"Where immediate remediation is not feasible, organisations should consider taking the system offline until it can be fully mitigated," the NCSC said in a note, external.
Japan's national cyber-security office and EU cyber-security officials have issued a similar warning, external.
'Early attacks emerging'
"PHP is everywhere. It quietly powers WordPress, Drupal, Joomla, and Magento sites, shared hosting platforms, control panels, and an awful lot of software that doesn't even advertise that it runs PHP under the hood," cyber-security company Huntress said.
Cyber-security expert Don Smith, from the Sophos Counter Threat Unit, told the BBC this would "likely be a priority target" for hackers.
The immediate challenge was not simply installing a patch to fix the issue, but finding and managing every instance where PHP was running, he said.
"The use of PHP is pervasive, it can sit beneath public websites, content management systems, hosting platforms and third-party products, sometimes without even being obvious to the organisation using it," he said.
He said it was crucial that organisations looked out for signs that an attacker "might have already have gained a foothold".
The European Union Computer Emergency Response Team (CERT-EU) said the risk scores given to the vulnerabilities "indicate the potential for unauthenticated remote code execution".
Such a cyber-attack could potentially allow hackers to install malware and take down websites.
Dane Knecht, chief technology officer at internet infrastructure firm Cloudflare, said he was, external "seeing early attacks emerging and are updating mitigations as new vectors show up".
The NCSC said once organisations have installed the update, they should "continuously monitor for security updates from third-party software vendors, including for appliances and services that may bundle PHP".
It is not yet clear which versions of the programming language are affected, but CERT-EU said it could affect all versions of it dating back to PHP 5 onwards - which launched in 2004.
The PHP Foundation has issued the update only for the latest versions however - with people using PHP 8.1 or older being urged to upgrade.
PHP was created for web development. It is used on servers to implement what you see when you visit websites.
Not all websites use it, but it nonetheless powers a large portion of the internet.
King warns malicious online actors are evolving tactics
- Published10 October
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cmly0lg3w5x2o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-21T19:54:57+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/6136/live/b103d880-cd90-11f1-b1e7-39558e114359.jpg",
    readTime: 10,
  },
  {
    id: "meta-fined-25bn-for-lies-over-user-data-533d6e9e",
    title: "Meta fined $25bn for 'lies' over user data privacy",
    titleJa: "Meta fined $25bn for 'lies' over user data privacy",
    summaryJa: "The fine is the largest to date against Facebook's owner, larger than an $18bn deal with California.",
    bodyOriginal: `Meta fined $25bn for 'lies' over user data privacy
- Published
Meta, the company behind Facebook, Instagram and WhatsApp has been hit with the largest ever fine against it for its business practices.
A judge in New Mexico on Wednesday ordered the company to pay $25bn (£18.6bn) following a two-week trial earlier this year that found it had spent years lying to the public about how it handled Facebook user data.
"The lies extend beyond Facebook's data practices as well," the judge said, adding they went to "the heart of Facebook's core business practices".
Meta's head lawyer CJ Mahoney said the ruling made it "all but impossible to do business in the state of New Mexico". The company intends to appeal, a move Mahoney said will be successful.
The fine is the largest to date against Meta, which has either been fined or agreed to settle several other lawsuits this year, including an $18bn deal with California over child safety.
New Mexico's lawsuit stemmed from the role of Meta, then still doing business as Facebook, in what became known as the Cambridge Analytica scandal.
That firm utilised data and information from millions of Facebook users as part of its work in political consulting, including on work related to the 2016 US Presidential election, which saw Donald Trump elected for the first time.
New Mexico had also accused Meta of intentionally misleading the public on how it benefitted from content that included hate speech, and how such rules against it were enforced. The jury found the company had intentionally misled the public on those claims, too.
Meta disputed those accusations. "At its core, this lawsuit seeks to impose a tax on speech to enforce new rules for what people can say online," Mahoney added.
Lawyers for New Mexico sued the company over many statements Meta executives had made over the years that user data was never shared with or accessed by third parties without a user's permission, when in reality it had been.
They claimed that the entire population of the state, roughly two million people, was impacted by Meta's dishonesty regarding the way it controlled user data. A jury found that Meta had violated state laws more than 40 million times.
"For too long, powerful technology companies have operated as though their size and influence put them beyond the reach of the law," New Mexico Attorney General Raúl Torrez said on Wednesday.
"Today's result makes clear that no corporation is too powerful to be held accountable."
The state lawyers sought up to $40bn in fines against Meta. Meta had argued anything beyond $3.4bn would be unconstitutional.
Judge Francis Mathew on Wednesday was direct in his decision to fine Meta an amount roughly equal to its profits each quarter.
He said Meta's violations of law and misrepresentations to the public about how their Facebook data was used and shared were "willful" and spanned "more than 11 years", stretching from 2010 to 2021.
Communications between senior executives, including Mark Zuckerberg, were "designed to mislead the public", Judge Mathew wrote in his order.
While the full amount of the penalty against Meta, based on thousands of violations of state law, was calculated as $219bn, Judge Mathew reduced the penalty to the $25bn fine.
It follows a $5bn fine levied by the US Federal Trade Commission in 2019 against the company over its data privacy practices.
New Mexico has been one of Meta's most notable adversaries in court. The state this year also fined Meta almost $1bn for misleading the public about the safety of its social media platforms for children.
The judge overseeing that lawsuit ultimately compared Meta to an industrial polluter of the air, with its form of pollution being "the psychological harm and sexual exploitation of children".
California and several other states had collectively sued Meta over similar issues. They reached a mutual settlement deal to end that case only a few days into what was expected to be a multi-week trial.`,
    bodyJa: `Meta fined $25bn for 'lies' over user data privacy
- Published
Meta, the company behind Facebook, Instagram and WhatsApp has been hit with the largest ever fine against it for its business practices.
A judge in New Mexico on Wednesday ordered the company to pay $25bn (£18.6bn) following a two-week trial earlier this year that found it had spent years lying to the public about how it handled Facebook user data.
"The lies extend beyond Facebook's data practices as well," the judge said, adding they went to "the heart of Facebook's core business practices".
Meta's head lawyer CJ Mahoney said the ruling made it "all but impossible to do business in the state of New Mexico". The company intends to appeal, a move Mahoney said will be successful.
The fine is the largest to date against Meta, which has either been fined or agreed to settle several other lawsuits this year, including an $18bn deal with California over child safety.
New Mexico's lawsuit stemmed from the role of Meta, then still doing business as Facebook, in what became known as the Cambridge Analytica scandal.
That firm utilised data and information from millions of Facebook users as part of its work in political consulting, including on work related to the 2016 US Presidential election, which saw Donald Trump elected for the first time.
New Mexico had also accused Meta of intentionally misleading the public on how it benefitted from content that included hate speech, and how such rules against it were enforced. The jury found the company had intentionally misled the public on those claims, too.
Meta disputed those accusations. "At its core, this lawsuit seeks to impose a tax on speech to enforce new rules for what people can say online," Mahoney added.
Lawyers for New Mexico sued the company over many statements Meta executives had made over the years that user data was never shared with or accessed by third parties without a user's permission, when in reality it had been.
They claimed that the entire population of the state, roughly two million people, was impacted by Meta's dishonesty regarding the way it controlled user data. A jury found that Meta had violated state laws more than 40 million times.
"For too long, powerful technology companies have operated as though their size and influence put them beyond the reach of the law," New Mexico Attorney General Raúl Torrez said on Wednesday.
"Today's result makes clear that no corporation is too powerful to be held accountable."
The state lawyers sought up to $40bn in fines against Meta. Meta had argued anything beyond $3.4bn would be unconstitutional.
Judge Francis Mathew on Wednesday was direct in his decision to fine Meta an amount roughly equal to its profits each quarter.
He said Meta's violations of law and misrepresentations to the public about how their Facebook data was used and shared were "willful" and spanned "more than 11 years", stretching from 2010 to 2021.
Communications between senior executives, including Mark Zuckerberg, were "designed to mislead the public", Judge Mathew wrote in his order.
While the full amount of the penalty against Meta, based on thousands of violations of state law, was calculated as $219bn, Judge Mathew reduced the penalty to the $25bn fine.
It follows a $5bn fine levied by the US Federal Trade Commission in 2019 against the company over its data privacy practices.
New Mexico has been one of Meta's most notable adversaries in court. The state this year also fined Meta almost $1bn for misleading the public about the safety of its social media platforms for children.
The judge overseeing that lawsuit ultimately compared Meta to an industrial polluter of the air, with its form of pollution being "the psychological harm and sexual exploitation of children".
California and several other states had collectively sued Meta over similar issues. They reached a mutual settlement deal to end that case only a few days into what was expected to be a multi-week trial.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cqdr8zxrr3dxo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-21T19:54:16+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/6026/live/1fd68c80-cd78-11f1-bc2e-018d645d8d21.jpg",
    readTime: 10,
  },
  {
    id: "blackrock-s-rick-rieder-sees-historic-op-da9c6b26",
    title: "BlackRock's Rick Rieder sees 'historic' opportunity in high-quality bonds",
    titleJa: "BlackRock's Rick Rieder sees 'historic' opportunity in high-quality bonds",
    summaryJa: "Rick Rieder, BlackRock's CIO of global fixed income, lays out his expectations for the fourth quarter and where he sees the best opportunities.",
    bodyOriginal: `Investors may be wary of the volatility hitting parts of the bond market right now, but they have an "historic" opportunity to grab attractive yields in high-quality credit, Rick Rieder, BlackRock's chief investment officer for global fixed income, told CNBC in an exclusive interview.
Hypothetically, it's now possible for investors to build a diversified portfolio that yields more than 7% with less than three years of duration and an average credit quality of A-, he said. Duration is a measurement of a bond's price sensitivity to fluctuations in rates, and issues with shorter maturities tend to have lower duration.
"Not only is it historic in that these yields are where they are, but the only time these yields are ever here is when there's some problem, like an economic problem or default problem," Rieder said in an interview about his fourth-quarter outlook, released Wednesday.
That isn't the case now, where the economy remains strong, he said. "So you don't really have to worry about defaults of any significance."
While Rieder didn't specifically identify the credits in the aforementioned portfolio, the iShares Aaa - A Rated Corporate Bond ETF (QLTA) has a 30-day SEC yield of 5.68% and an effective duration of 6.48 years — higher than Rieder's low duration focus.
The iShares Flexible Income Active ETF (BINC), which is managed by Rieder, has a 5.66% 30-day SEC yield and three-year effective duration, but its portfolio extends beyond investment-grade credit.
Best opportunities include hyperscalers
Rieder sees the best opportunity right now in investment-grade corporate bonds — which he pointed out he hasn't said "in a really long time." Investment grade bonds are rated AAA through BBB- by S&P and Fitch, while Moody's rates them Aaa through Baa3.
That includes hyperscaler bonds, which have flooded the market with issuance this year as they ramp up their AI infrastructure. Alphabet, Amazon, Meta Platforms and Oracle have issued a total of about $228.4 billion in bonds year to date, as of Oct. 20, according to LSEG.
"They're very low leverage. They have tremendous amounts of cash flow coming in," Rieder said of the hyperscalers in general. "You're now getting to buy these entities which are higher quality, paying you a very attractive yield to get it."
Rieder's iShares Flexible Income Active ETF has upped its allocation to investment-grade corporates to 14.3% of its portfolio. In July, that stood at 8.5%.
That said, investors need to be patient and sit tight since rates could still move higher from here, he advised.
"Your starting point is by far your best barometer of what your return is going to be," he noted. "So if you get seven and a quarter, maybe you get eight, maybe you get six, but ... if your holding period is a year or longer, you're going to get that yield."
Caution should also be exercised outside of investment-grade credit, which requires more selectivity and deep research, he warned. That includes AI names.
"There's parts of the data center supply that's not hyperscaler guaranteed or hyperscaler backed," he said. "That we've been more cautious around, and we'll continue to be."
The bond market, particularly high-yield credit, has been rocked as investor concern grows over the massive amount of debt some companies are taking out to fund their artificial intelligence build-out.
Junk-rated CoreWeave has become the poster child, seeing its stock drop, bond yields jump and credit-default spreads widen. Oracle, which is sitting in the lower end of investment grade and is seen as a bellwether on the broader AI market, has also taken some hits.
Fed watch
Rieder is also keeping an eye on the Federal Reserve, which is expected to raise its federal funds rate again in December to combat inflation. The market is currently pricing in a nearly 90% probability that the central bank will hike at that time, according to the CME Group FedWatch tool.
The money manager expects that to happen, although he does not agree with it. Higher rates are hurting parts of the economy, like housing, while not having much of an impact on other areas — such as tech companies' capital expenditures, which have become a big driver of growth, he said.
"They're not borrowing off the overnight funds rate," Rieder noted. "There's a lot of floating rate finance in housing, credit card, auto loan finance, and you're seeing those areas already under pressure."
Instead, the market is and will continue to price the AI supply coming into the market, he added.
Calculating risks ahead
Rieder sees a number of possible risks ahead, including rising levels of government debt across the globe. In the United States, the budget deficit has grown to $2 trillion for fiscal 2026.
"The more the central banks raise the rates, the cost of debt to these to already indebted governments is something we've got to be careful about over time," he said.
Bond supply coming from AI companies should also be watched.
"With the amount of supply that's coming — data center, hyperscaler — there's some crowding-out effect that's taking place," he said. "With government rates moving higher, that is something that we just got to keep an eye on."
In the meantime, Rieder would just continue to reap the rewards of high investment-grade yields "and smile a lot," he said.`,
    bodyJa: `Investors may be wary of the volatility hitting parts of the bond market right now, but they have an "historic" opportunity to grab attractive yields in high-quality credit, Rick Rieder, BlackRock's chief investment officer for global fixed income, told CNBC in an exclusive interview.
Hypothetically, it's now possible for investors to build a diversified portfolio that yields more than 7% with less than three years of duration and an average credit quality of A-, he said. Duration is a measurement of a bond's price sensitivity to fluctuations in rates, and issues with shorter maturities tend to have lower duration.
"Not only is it historic in that these yields are where they are, but the only time these yields are ever here is when there's some problem, like an economic problem or default problem," Rieder said in an interview about his fourth-quarter outlook, released Wednesday.
That isn't the case now, where the economy remains strong, he said. "So you don't really have to worry about defaults of any significance."
While Rieder didn't specifically identify the credits in the aforementioned portfolio, the iShares Aaa - A Rated Corporate Bond ETF (QLTA) has a 30-day SEC yield of 5.68% and an effective duration of 6.48 years — higher than Rieder's low duration focus.
The iShares Flexible Income Active ETF (BINC), which is managed by Rieder, has a 5.66% 30-day SEC yield and three-year effective duration, but its portfolio extends beyond investment-grade credit.
Best opportunities include hyperscalers
Rieder sees the best opportunity right now in investment-grade corporate bonds — which he pointed out he hasn't said "in a really long time." Investment grade bonds are rated AAA through BBB- by S&P and Fitch, while Moody's rates them Aaa through Baa3.
That includes hyperscaler bonds, which have flooded the market with issuance this year as they ramp up their AI infrastructure. Alphabet, Amazon, Meta Platforms and Oracle have issued a total of about $228.4 billion in bonds year to date, as of Oct. 20, according to LSEG.
"They're very low leverage. They have tremendous amounts of cash flow coming in," Rieder said of the hyperscalers in general. "You're now getting to buy these entities which are higher quality, paying you a very attractive yield to get it."
Rieder's iShares Flexible Income Active ETF has upped its allocation to investment-grade corporates to 14.3% of its portfolio. In July, that stood at 8.5%.
That said, investors need to be patient and sit tight since rates could still move higher from here, he advised.
"Your starting point is by far your best barometer of what your return is going to be," he noted. "So if you get seven and a quarter, maybe you get eight, maybe you get six, but ... if your holding period is a year or longer, you're going to get that yield."
Caution should also be exercised outside of investment-grade credit, which requires more selectivity and deep research, he warned. That includes AI names.
"There's parts of the data center supply that's not hyperscaler guaranteed or hyperscaler backed," he said. "That we've been more cautious around, and we'll continue to be."
The bond market, particularly high-yield credit, has been rocked as investor concern grows over the massive amount of debt some companies are taking out to fund their artificial intelligence build-out.
Junk-rated CoreWeave has become the poster child, seeing its stock drop, bond yields jump and credit-default spreads widen. Oracle, which is sitting in the lower end of investment grade and is seen as a bellwether on the broader AI market, has also taken some hits.
Fed watch
Rieder is also keeping an eye on the Federal Reserve, which is expected to raise its federal funds rate again in December to combat inflation. The market is currently pricing in a nearly 90% probability that the central bank will hike at that time, according to the CME Group FedWatch tool.
The money manager expects that to happen, although he does not agree with it. Higher rates are hurting parts of the economy, like housing, while not having much of an impact on other areas — such as tech companies' capital expenditures, which have become a big driver of growth, he said.
"They're not borrowing off the overnight funds rate," Rieder noted. "There's a lot of floating rate finance in housing, credit card, auto loan finance, and you're seeing those areas already under pressure."
Instead, the market is and will continue to price the AI supply coming into the market, he added.
Calculating risks ahead
Rieder sees a number of possible risks ahead, including rising levels of government debt across the globe. In the United States, the budget deficit has grown to $2 trillion for fiscal 2026.
"The more the central banks raise the rates, the cost of debt to these to already indebted governments is something we've got to be careful about over time," he said.
Bond supply coming from AI companies should also be watched.
"With the amount of supply that's coming — data center, hyperscaler — there's some crowding-out effect that's taking place," he said. "With government rates moving higher, that is something that we just got to keep an eye on."
In the meantime, Rieder would just continue to reap the rewards of high investment-grade yields "and smile a lot," he said.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/21/rick-rieder-investment-grade-bonds.html",
    publishedAt: "2026-10-21T19:54:16+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "burnham-proposes-plan-to-cut-standing-ch-b081b7f7",
    title: "Burnham proposes plan to cut standing charges from gas bills",
    titleJa: "Burnham proposes plan to cut standing charges from gas bills",
    summaryJa: "The prime minister provided little detail, and there are questions over shifting the fees onto unit costs.",
    bodyOriginal: `Burnham proposes plan to cut standing charges from gas bills
- Published
Prime Minister Andy Burnham has asked ministers to develop a plan to remove standing charges from gas bills.
These are fixed daily fees that cover the costs of connecting to a supply. They vary by region and households must still pay them even when energy is not being used.
Industry body Energy UK said whether the proposed changes would make a difference to bills would depend on how or where the charges were reallocated on the bill.
But an influential research foundation argued it would be a progressive move that would help those on low-incomes and knock £27 off a typical annual bill.
During Prime Minister's Questions, Burnham said the "pragmatic decision" on giving the green light to the Jackdaw gas field in the North Sea would allow the government to increase investment in renewables and "do more to help people with bills".
He said he had asked the Chancellor John Healey and Energy Secretary Miatta Fahnbulleh "to look at whether we can remove standing charges from gas bills and to report back to this house at the earliest opportunity".
No details have been given on how removing standing charges would work in practice. But the suggestion has been made by research firm Nesta that they could be moved to the unit rate, external, so people pay for what they use.
This would probably benefit customers who don't use much gas, but heavy users could end up paying more.
For nearly two years, regulator Ofgem has run a series of consultations on standing charges, with a massive public response including vociferous opposition from low-energy users who can do nothing to cut standing charges.
Ofgem is running a pilot scheme on low standing charge tariffs, but is yet to draw any firm conclusions, suggesting there are no easy answers.
Higher cost of electricity standing charges
Average standing charges are 54.8p a day for electricity and 29.7p a day for gas.
When asked why electricity standing charges would not be scrapped as well, the PM's official spokesman said VAT had already been cut on electricity bills.
Standing charges cover costs such as transporting energy to homes via pipes and wires, and the upkeep of that infrastructure.
The standing charges also fund schemes to support low-income households.
Many of these costs will need to be recouped somehow, but Citizens Advice has warned, external about the potential consequences of reform for vulnerable customers.
Vulnerable people who don't have a high income, but have high energy usage, could be penalised.
But Madeleine Gabriel, director of sustainable future at Nesta, said: "Abolishing the gas standing charge and moving those costs onto the unit rate would help those worst hit by rising energy prices."
Pressure remains on the chancellor to offer more fundamental, targeted energy support this winter in his Budget next week, with energy prices forecast to rise by 16% to a four-year high in January.
In addition to standing charges, Burnham said investing in renewables would also bring household bills down "substantially" by breaking the link between gas and electricity prices "in this parliament".
Electricity prices in the UK are mainly set by gas prices, and this is often cited as a reason why electricity prices in the UK are higher than many other countries.
Get in touch
Do you have any views, comments or questions about this story?
Related topics
- Published30 September`,
    bodyJa: `Burnham proposes plan to cut standing charges from gas bills
- Published
Prime Minister Andy Burnham has asked ministers to develop a plan to remove standing charges from gas bills.
These are fixed daily fees that cover the costs of connecting to a supply. They vary by region and households must still pay them even when energy is not being used.
Industry body Energy UK said whether the proposed changes would make a difference to bills would depend on how or where the charges were reallocated on the bill.
But an influential research foundation argued it would be a progressive move that would help those on low-incomes and knock £27 off a typical annual bill.
During Prime Minister's Questions, Burnham said the "pragmatic decision" on giving the green light to the Jackdaw gas field in the North Sea would allow the government to increase investment in renewables and "do more to help people with bills".
He said he had asked the Chancellor John Healey and Energy Secretary Miatta Fahnbulleh "to look at whether we can remove standing charges from gas bills and to report back to this house at the earliest opportunity".
No details have been given on how removing standing charges would work in practice. But the suggestion has been made by research firm Nesta that they could be moved to the unit rate, external, so people pay for what they use.
This would probably benefit customers who don't use much gas, but heavy users could end up paying more.
For nearly two years, regulator Ofgem has run a series of consultations on standing charges, with a massive public response including vociferous opposition from low-energy users who can do nothing to cut standing charges.
Ofgem is running a pilot scheme on low standing charge tariffs, but is yet to draw any firm conclusions, suggesting there are no easy answers.
Higher cost of electricity standing charges
Average standing charges are 54.8p a day for electricity and 29.7p a day for gas.
When asked why electricity standing charges would not be scrapped as well, the PM's official spokesman said VAT had already been cut on electricity bills.
Standing charges cover costs such as transporting energy to homes via pipes and wires, and the upkeep of that infrastructure.
The standing charges also fund schemes to support low-income households.
Many of these costs will need to be recouped somehow, but Citizens Advice has warned, external about the potential consequences of reform for vulnerable customers.
Vulnerable people who don't have a high income, but have high energy usage, could be penalised.
But Madeleine Gabriel, director of sustainable future at Nesta, said: "Abolishing the gas standing charge and moving those costs onto the unit rate would help those worst hit by rising energy prices."
Pressure remains on the chancellor to offer more fundamental, targeted energy support this winter in his Budget next week, with energy prices forecast to rise by 16% to a four-year high in January.
In addition to standing charges, Burnham said investing in renewables would also bring household bills down "substantially" by breaking the link between gas and electricity prices "in this parliament".
Electricity prices in the UK are mainly set by gas prices, and this is often cited as a reason why electricity prices in the UK are higher than many other countries.
Get in touch
Do you have any views, comments or questions about this story?
Related topics
- Published30 September`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cw0541p65dyzo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-21T17:06:16+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/8b7c/live/04502cf0-cd5a-11f1-b962-b7ff822cde72.jpg",
    readTime: 9,
  },
  {
    id: "new-mexico-ag-lawsuit-accuses-epstein-s-86cefb1d",
    title: "New Mexico AG lawsuit accuses Epstein's attorney and accountant of facilitating sex trafficking",
    titleJa: "New Mexico AG lawsuit accuses Epstein's attorney and accountant of facilitating sex trafficking",
    summaryJa: "Darren Indyke and Richard Kahn allegedly helped finance and conceal Epstein's sex trafficking, which included abuse at his Zorro Ranch, a lawsuit says.",
    bodyOriginal: `New Mexico's attorney general on Wednesday filed a lawsuit accusing Jeffrey Epstein's long-time personal lawyer and accountant of facilitating Epstein's sex trafficking operation.
The suit alleges that the attorney, Darren Indyke, and the accountant, Richard Kahn, helped finance and conceal Epstein's sex trafficking, which included the abuse of girls and young women at his Zorro Ranch in Santa Fe County, New Mexico.
Indyke and Kahn are beneficiaries of Epstein's 1953 Trust and are co-executors of Epstein's estate and trust administrators. New Mexico's suit asks a judge to block Indyke and Kahn from receiving payments from the estate as the case proceeds.
Attorney General Raul Torrez's office said that Epstein's estate is currently valued at more than $107 million, and the suit says Indyke and Kahn are eligible for bequests of $50 million and $25 million, subject to the availability of funds.
"Jeffrey Epstein did not operate alone, and his death does not end the pursuit of accountability for the people who helped make his crimes possible," Torrez said in a statement.
"The allegations in this lawsuit describe a network of people and financial arrangements that helped sustain and conceal the abuse of vulnerable girls and young women, including here in New Mexico," Torrez said. "Those who allegedly enabled this exploitation should not be allowed to profit from it while survivors continue to live with its consequences."
The lawsuit alleges that Indyke and Kahn personally profited from their relationship to Epstein, who killed himself in a federal jail in New York in August 2019, weeks after being arrested on child sex trafficking charges.
"Between 2011 and 2019, Indyke received more than $16 million from Epstein and related entities, and Kahn received more than $10 million," Kahn's office said in a statement.
Torrez, at a press conference Wednesday, said that his office is continuing a criminal investigation of Epstein's sex trafficking operation. No criminal charges have been filed in connection with that probe.
This is breaking news. Please refresh for updates.`,
    bodyJa: `New Mexico's attorney general on Wednesday filed a lawsuit accusing Jeffrey Epstein's long-time personal lawyer and accountant of facilitating Epstein's sex trafficking operation.
The suit alleges that the attorney, Darren Indyke, and the accountant, Richard Kahn, helped finance and conceal Epstein's sex trafficking, which included the abuse of girls and young women at his Zorro Ranch in Santa Fe County, New Mexico.
Indyke and Kahn are beneficiaries of Epstein's 1953 Trust and are co-executors of Epstein's estate and trust administrators. New Mexico's suit asks a judge to block Indyke and Kahn from receiving payments from the estate as the case proceeds.
Attorney General Raul Torrez's office said that Epstein's estate is currently valued at more than $107 million, and the suit says Indyke and Kahn are eligible for bequests of $50 million and $25 million, subject to the availability of funds.
"Jeffrey Epstein did not operate alone, and his death does not end the pursuit of accountability for the people who helped make his crimes possible," Torrez said in a statement.
"The allegations in this lawsuit describe a network of people and financial arrangements that helped sustain and conceal the abuse of vulnerable girls and young women, including here in New Mexico," Torrez said. "Those who allegedly enabled this exploitation should not be allowed to profit from it while survivors continue to live with its consequences."
The lawsuit alleges that Indyke and Kahn personally profited from their relationship to Epstein, who killed himself in a federal jail in New York in August 2019, weeks after being arrested on child sex trafficking charges.
"Between 2011 and 2019, Indyke received more than $16 million from Epstein and related entities, and Kahn received more than $10 million," Kahn's office said in a statement.
Torrez, at a press conference Wednesday, said that his office is continuing a criminal investigation of Epstein's sex trafficking operation. No criminal charges have been filed in connection with that probe.
This is breaking news. Please refresh for updates.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/21/epstein-new-mexico-lawsuit-sex-trafficking.html",
    publishedAt: "2026-10-21T17:02:41+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "intel-hits-construction-milestone-at-ohi-f912e045",
    title: "Intel hits construction milestone at Ohio chip fab that’s at least 5 years behind schedule",
    titleJa: "Intel hits construction milestone at Ohio chip fab that’s at least 5 years behind schedule",
    summaryJa: "Intel has installed the first major structural truss at its delayed Ohio chip fab, but the company has yet to announce a major outside customer.",
    bodyOriginal: `Intel has hit a milestone in the construction of its massive chip fabrication plant in New Albany, Ohio, that's running at least five years behind schedule, a delay that's coincided with soaring demand for advanced chips.
On Wednesday, Intel announced that crews have installed the first major structural truss in Ohio, which means the next part of the construction has finally begun.
"This represents another significant step toward expanded U.S. leading-edge semiconductor capacity," Intel Foundry head Naga Chandrasekaran wrote in a post on the company's website on Wednesday.
Intel still needs customers to make the investment pay off.
In September, reports surfaced that the world's leading maker of high-bandwidth memory, SK Hynix, could team up with Intel in Ohio to lease some foundry space to make memory chips at the new site. Neither company would confirm any plans.
When Intel first announced the Ohio factory in 2022, it was expected to start delivering chips in 2025. Intel pushed back that timeline, now aiming to finish construction in 2030. A second Ohio fab is also planned for completion in 2031 at the site, just northeast of Columbus.
The delay reflects a broader recalibration of Intel's foundry ambitions under CEO Lip-Bu Tan.
The Ohio factory is only one piece of Intel's ambitious build-out to start making chips for outside customers that began under former CEO Pat Gelsinger. When Tan took the helm in 2025, his turnaround strategy was more cautious, choosing to wait for customer demand before forging ahead with ambitious chip fab plans.
Still, by late 2025, Intel was in high-volume production at its Arizona chip fab, producing its most advanced 18A chips. On Wednesday, Chandrasekaran also announced that operations at its next fab in Arizona are expected to begin by the end of 2028.
But Intel has yet to land a major external customer for those 18A chips coming out of Arizona. Instead, Intel is using them to make its own processors for devices.
Once a dominant force in the chip manufacturing landscape, Intel hit major delays with its 7- and 10-nanometer nodes, triggering the stock's worst year ever in 2024. Customers have been reluctant to commit again since.
Now, Intel's window of opportunity may have arrived alongside record demand for AI, as leading chip manufacturer Taiwan Semiconductor Manufacturing Co. can't make chips fast enough. Even for the biggest chipmakers like Nvidia, Advanced Micro Devices, Apple and Broadcom, "competition is extremely fierce," to get space on TSMC's factory lines, according to Mizuho Securities analyst Jordan Klein.
Intel could offer customers an alternative source for chip production, according to TechInsights analyst Dan Hutcheson.
"People want a second source to be able to twist TSMC's arm and keep them honest on pricing," Hutcheson said. "All the big ones have been testing there."
WATCH: Inside Intel’s new Arizona fab, where the chipmaker’s fate hangs in the balance`,
    bodyJa: `Intel has hit a milestone in the construction of its massive chip fabrication plant in New Albany, Ohio, that's running at least five years behind schedule, a delay that's coincided with soaring demand for advanced chips.
On Wednesday, Intel announced that crews have installed the first major structural truss in Ohio, which means the next part of the construction has finally begun.
"This represents another significant step toward expanded U.S. leading-edge semiconductor capacity," Intel Foundry head Naga Chandrasekaran wrote in a post on the company's website on Wednesday.
Intel still needs customers to make the investment pay off.
In September, reports surfaced that the world's leading maker of high-bandwidth memory, SK Hynix, could team up with Intel in Ohio to lease some foundry space to make memory chips at the new site. Neither company would confirm any plans.
When Intel first announced the Ohio factory in 2022, it was expected to start delivering chips in 2025. Intel pushed back that timeline, now aiming to finish construction in 2030. A second Ohio fab is also planned for completion in 2031 at the site, just northeast of Columbus.
The delay reflects a broader recalibration of Intel's foundry ambitions under CEO Lip-Bu Tan.
The Ohio factory is only one piece of Intel's ambitious build-out to start making chips for outside customers that began under former CEO Pat Gelsinger. When Tan took the helm in 2025, his turnaround strategy was more cautious, choosing to wait for customer demand before forging ahead with ambitious chip fab plans.
Still, by late 2025, Intel was in high-volume production at its Arizona chip fab, producing its most advanced 18A chips. On Wednesday, Chandrasekaran also announced that operations at its next fab in Arizona are expected to begin by the end of 2028.
But Intel has yet to land a major external customer for those 18A chips coming out of Arizona. Instead, Intel is using them to make its own processors for devices.
Once a dominant force in the chip manufacturing landscape, Intel hit major delays with its 7- and 10-nanometer nodes, triggering the stock's worst year ever in 2024. Customers have been reluctant to commit again since.
Now, Intel's window of opportunity may have arrived alongside record demand for AI, as leading chip manufacturer Taiwan Semiconductor Manufacturing Co. can't make chips fast enough. Even for the biggest chipmakers like Nvidia, Advanced Micro Devices, Apple and Broadcom, "competition is extremely fierce," to get space on TSMC's factory lines, according to Mizuho Securities analyst Jordan Klein.
Intel could offer customers an alternative source for chip production, according to TechInsights analyst Dan Hutcheson.
"People want a second source to be able to twist TSMC's arm and keep them honest on pricing," Hutcheson said. "All the big ones have been testing there."
WATCH: Inside Intel’s new Arizona fab, where the chipmaker’s fate hangs in the balance`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/21/intel-hits-construction-milestone-at-delayed-ohio-chip-fab-.html",
    publishedAt: "2026-10-21T16:55:51+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 7,
  },
  {
    id: "meta-and-tesla-bulls-get-confidence-boos-f39e652d",
    title: "Meta and Tesla bulls get confidence boost after SpaceX earnings",
    titleJa: "Meta and Tesla bulls get confidence boost after SpaceX earnings",
    summaryJa: "A big rally in SpaceX after earnings is giving hope to Meta and Tesla bulls ahead of their reports due Wednesday afternoon.",
    bodyOriginal: `A big rally in SpaceX after earnings is giving hope to Meta and Tesla bulls ahead of their reports due Wednesday afternoon.
Options trading in both stocks leaned bullish after the open Wednesday, with Meta options looking particularly one-sided as traders bought more calls than puts and more put trades likely initiated by sellers than buyers. More than 30,000 calls traded at or above the ask, suggesting they were bought, versus under 17,000 puts, Cboe LiveVol data shows.
Meta options have generally been bullish since the stock's March low, when the put/call ratio of open contracts plunged to 0.5, meaning two calls open for every one put contract, and that hasn't budged much since, Barchart data show. Almost $22 million of trades were done with a bullish intent on Wednesday, compared to $7.5 million looking for downside.
Market-makers are pricing a 6.5% swing for Meta after earnings, a little under the 9% average the past four quarters. The most popular contract to buy on Wednesday was the 800 strike call expiring Friday that costs $1.40 and needs Meta to rally 14% into the weekend, SpotGamma data shows.
In Tesla, the flows also lean bullish, but with less conviction. The put/call ratio of open contracts is 0.75, compared to Meta's 0.5, though more calls did trade Wednesday morning than puts.
Of the 520,000 contracts traded in Tesla, 315,000 were calls, as traders bought 88,000 calls and 65,000 puts, according to Cboe LiveVol data. There was also notable call-selling, with 83,000 call contracts likely sold and seven of the top 10 trades by dollar-amount call sales.
Still, traders spent more money buying calls than they did puts, with call-buying premiums amounting to over $200 million, compared to $84 million in puts, according to SpotGamma's analysis.
Market-makers are pricing a 5.5% swing in Tesla after its report, above the four-quarter median of 3.5%. That said, Tesla's last report caused a 14% selloff in the stock that makes the average move in that period 5.5%.
The most-heavily traded contracts by volume Wednesday were the 385 and 400-strike calls expiring Friday, with buyers favoring the cheaper 400-strike call and sellers leaning into the 385-strikes, SpotGamms data show.`,
    bodyJa: `A big rally in SpaceX after earnings is giving hope to Meta and Tesla bulls ahead of their reports due Wednesday afternoon.
Options trading in both stocks leaned bullish after the open Wednesday, with Meta options looking particularly one-sided as traders bought more calls than puts and more put trades likely initiated by sellers than buyers. More than 30,000 calls traded at or above the ask, suggesting they were bought, versus under 17,000 puts, Cboe LiveVol data shows.
Meta options have generally been bullish since the stock's March low, when the put/call ratio of open contracts plunged to 0.5, meaning two calls open for every one put contract, and that hasn't budged much since, Barchart data show. Almost $22 million of trades were done with a bullish intent on Wednesday, compared to $7.5 million looking for downside.
Market-makers are pricing a 6.5% swing for Meta after earnings, a little under the 9% average the past four quarters. The most popular contract to buy on Wednesday was the 800 strike call expiring Friday that costs $1.40 and needs Meta to rally 14% into the weekend, SpotGamma data shows.
In Tesla, the flows also lean bullish, but with less conviction. The put/call ratio of open contracts is 0.75, compared to Meta's 0.5, though more calls did trade Wednesday morning than puts.
Of the 520,000 contracts traded in Tesla, 315,000 were calls, as traders bought 88,000 calls and 65,000 puts, according to Cboe LiveVol data. There was also notable call-selling, with 83,000 call contracts likely sold and seven of the top 10 trades by dollar-amount call sales.
Still, traders spent more money buying calls than they did puts, with call-buying premiums amounting to over $200 million, compared to $84 million in puts, according to SpotGamma's analysis.
Market-makers are pricing a 5.5% swing in Tesla after its report, above the four-quarter median of 3.5%. That said, Tesla's last report caused a 14% selloff in the stock that makes the average move in that period 5.5%.
The most-heavily traded contracts by volume Wednesday were the 385 and 400-strike calls expiring Friday, with buyers favoring the cheaper 400-strike call and sellers leaning into the 385-strikes, SpotGamms data show.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/21/meta-tesla-options-earnings.html",
    publishedAt: "2026-10-21T16:35:48+00:00",
    category: "自動車",
    imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    readTime: 6,
  },
  {
    id: "how-ukraine-s-drone-strikes-on-russia-cr-205817ac",
    title: "How Ukraine’s drone strikes on Russia crippled the world’s second largest diesel supplier",
    titleJa: "How Ukraine’s drone strikes on Russia crippled the world’s second largest diesel supplier",
    summaryJa: "President Donald Trump has blamed Ukraine for surging diesel prices that are hurting Republicans' election chances with the midterms just two weeks away.",
    bodyOriginal: `Ukraine launched massive drone assaults against Russia this week, hitting key oil infrastructure and signaling Kyiv intends to block the Kremlin from increasing diesel exports in defiance of President Donald Trump.
More than 1,000 Ukrainian drones targeted Russia on Sunday alone in one of the largest attacks this year, according to state media reports. The strikes set ablaze an oil export terminal in St. Petersburg, Russia's second-largest city and President Vladimir Putin's hometown.
Kyiv has ended its brief adherence to an energy ceasefire that Trump declared between Ukraine and Russia on Oct. 11. Moscow ignored that truce from the start and Kyiv vowed to retaliate.
Ukraine's drone strikes have achieved a scale, range and effectiveness that they have crippled Russia's diesel exports, said Tatiana Mitrova, an expert on the Russian oil industry at Columbia University's Center on Global Energy Policy. Before the attacks, Russia was the second-largest diesel supplier in the world after the U.S.
As a result, Trump's deal with Putin to boost Russian diesel exports is likely dead in the water, said Matt Smith, director of commodity research at Kpler. "It seems unlikely that they'll be able to bring the volume of diesel back to the market that they are talking about without an energy ceasefire," Smith said.
Kyiv's strikes on Russian refineries and related oil infrastructure almost tripled to 31 in July compared to 11 in January, according to data from open-source intelligence firm Rochan Consulting in Warsaw, Poland.
The attacks slashed Russia's diesel exports by more than 75%, to 141,000 barrels per day (bpd) in September, compared to 608,000 bpd in the same period last year, according to Kpler data.
In response, Moscow banned exports in July to preserve domestic supplies. The Kremlin partially resumed shipments this month to fulfill the Trump-Putin deal.
Under Trump's diesel deal to relieve pressure on surging fuel prices, the Kremlin agreed to supply the global market with about 75,000 bpd in October and 124,000 bpd in November. But those export volumes are a rounding error compared to total demand, Mitrova said.
The Ukrainians are regularly launching swarms of drones now that number in the hundreds, compared to dozens earlier in the war, Mitrova said. They are also striking deeper into Russian territory, she said. In July, Kyiv hit Russia's largest refinery at Omsk, deep in Siberia near the Kazakhstan border, more than 1,000 miles from Ukraine.
And they have learned to target more complex refinery equipment that is harder to repair, Mitrova said. A destroyed fuel tank takes just a couple weeks to fix, she said. But replacing a secondary refining unit, for example, requires supply chains outside Russia, the analyst said.
"You cannot just order it on Alibaba," Mitrova said. "You need to make your order in advance and therefore securing this equipment quickly is not possible. You need to compensate for the risks of all the parties involved because [counterparties] are violating sanctions."
"You have to wait at least for several months if the right equipment is destroyed," she said.
With midterm elections less than two weeks away, Trump has blamed Ukraine for surging diesel prices that are jeopardizing Republicans' election chances.
Nationally, diesel cost $6.32 per gallon on average Tuesday, nearly 75% above the same period last year, according to AAA.
But the diesel market was already under pressure due to Trump's decision to go to war with Iran in late February. Tehran's attacks on tankers in the Strait of Hormuz and strikes by its Houthi militant allies on oil infrastructure of U.S. Gulf Arab allies has disrupted fuel exports from the Middle East.
Diesel exports through Hormuz, for example, are down about 540,000 bpd compared to last year, Kpler's Smith said. Global diesel exports have fallen about 1 million bpd due to lost supplies from Russia and the Middle East, he said.
Trump's options to reduce fuel prices are limited. The underlying problem is the shortfall of refining capacity due to damage from two wars that don't appear close to ending soon. U.S. refiners are already working at maximum capacity to fill the gap as much as possible.
The International Energy Agency warned this month that diesel supplies will likely remain constrained well into 2027. "The diesel tightness is likely going to persist in the coming months and prices are going to remain elevated," Smith said.`,
    bodyJa: `Ukraine launched massive drone assaults against Russia this week, hitting key oil infrastructure and signaling Kyiv intends to block the Kremlin from increasing diesel exports in defiance of President Donald Trump.
More than 1,000 Ukrainian drones targeted Russia on Sunday alone in one of the largest attacks this year, according to state media reports. The strikes set ablaze an oil export terminal in St. Petersburg, Russia's second-largest city and President Vladimir Putin's hometown.
Kyiv has ended its brief adherence to an energy ceasefire that Trump declared between Ukraine and Russia on Oct. 11. Moscow ignored that truce from the start and Kyiv vowed to retaliate.
Ukraine's drone strikes have achieved a scale, range and effectiveness that they have crippled Russia's diesel exports, said Tatiana Mitrova, an expert on the Russian oil industry at Columbia University's Center on Global Energy Policy. Before the attacks, Russia was the second-largest diesel supplier in the world after the U.S.
As a result, Trump's deal with Putin to boost Russian diesel exports is likely dead in the water, said Matt Smith, director of commodity research at Kpler. "It seems unlikely that they'll be able to bring the volume of diesel back to the market that they are talking about without an energy ceasefire," Smith said.
Kyiv's strikes on Russian refineries and related oil infrastructure almost tripled to 31 in July compared to 11 in January, according to data from open-source intelligence firm Rochan Consulting in Warsaw, Poland.
The attacks slashed Russia's diesel exports by more than 75%, to 141,000 barrels per day (bpd) in September, compared to 608,000 bpd in the same period last year, according to Kpler data.
In response, Moscow banned exports in July to preserve domestic supplies. The Kremlin partially resumed shipments this month to fulfill the Trump-Putin deal.
Under Trump's diesel deal to relieve pressure on surging fuel prices, the Kremlin agreed to supply the global market with about 75,000 bpd in October and 124,000 bpd in November. But those export volumes are a rounding error compared to total demand, Mitrova said.
The Ukrainians are regularly launching swarms of drones now that number in the hundreds, compared to dozens earlier in the war, Mitrova said. They are also striking deeper into Russian territory, she said. In July, Kyiv hit Russia's largest refinery at Omsk, deep in Siberia near the Kazakhstan border, more than 1,000 miles from Ukraine.
And they have learned to target more complex refinery equipment that is harder to repair, Mitrova said. A destroyed fuel tank takes just a couple weeks to fix, she said. But replacing a secondary refining unit, for example, requires supply chains outside Russia, the analyst said.
"You cannot just order it on Alibaba," Mitrova said. "You need to make your order in advance and therefore securing this equipment quickly is not possible. You need to compensate for the risks of all the parties involved because [counterparties] are violating sanctions."
"You have to wait at least for several months if the right equipment is destroyed," she said.
With midterm elections less than two weeks away, Trump has blamed Ukraine for surging diesel prices that are jeopardizing Republicans' election chances.
Nationally, diesel cost $6.32 per gallon on average Tuesday, nearly 75% above the same period last year, according to AAA.
But the diesel market was already under pressure due to Trump's decision to go to war with Iran in late February. Tehran's attacks on tankers in the Strait of Hormuz and strikes by its Houthi militant allies on oil infrastructure of U.S. Gulf Arab allies has disrupted fuel exports from the Middle East.
Diesel exports through Hormuz, for example, are down about 540,000 bpd compared to last year, Kpler's Smith said. Global diesel exports have fallen about 1 million bpd due to lost supplies from Russia and the Middle East, he said.
Trump's options to reduce fuel prices are limited. The underlying problem is the shortfall of refining capacity due to damage from two wars that don't appear close to ending soon. U.S. refiners are already working at maximum capacity to fill the gap as much as possible.
The International Energy Agency warned this month that diesel supplies will likely remain constrained well into 2027. "The diesel tightness is likely going to persist in the coming months and prices are going to remain elevated," Smith said.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/21/ukraine-russia-drone-diesel-refinery-trump-putin-zelenskyy.html",
    publishedAt: "2026-10-21T16:18:27+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "tesla-earnings-loom-after-musk-calls-spa-c3a2d872",
    title: "Tesla earnings loom after Musk calls SpaceX merger a 'good idea'",
    titleJa: "Tesla earnings loom after Musk calls SpaceX merger a 'good idea'",
    summaryJa: "A day after Elon Musk's SpaceX reported third-quarter results, Tesla is scheduled to update investors.",
    bodyOriginal: `On SpaceX's earnings call late Tuesday, CEO Elon Musk, who also runs Tesla, took a break from talking about financial results to tell investors that it would be a "good idea" to merge his two companies, and said the boards at both have formed special committees to discuss a possible tie-up.
Musk will be back in public after market close on Wednesday, this time to discuss Tesla earnings.
Here's what Wall Street is expecting, according to estimates from analysts polled by LSEG:
- Earnings per share: 43 cents estimated
- Revenue: $27.9 billion estimated
Should Tesla fail to top expectations, the company would see a slight decrease in revenue from $28.1 billion a year earlier. Tesla has recorded double-digit growth in each of the two prior quarters, but revenue dropped in three of four quarters in 2025, as Chinese EV makers such as BYD and Xiaomi gained popularity in Asia and Europe with affordable and innovative EVs. Tesla was also hit last year by the end of a federal EV tax credit.
Earlier this month, Tesla reported vehicle deliveries for the third quarter of 486,532, about 2% below the year-ago number. Deliveries are the closest approximation of sales reported by Tesla but are not precisely defined in its shareholder communications.
While Tesla still counts on auto sales for the bulk of its revenue, Musk sees the company's future in robotaxis and humanoid robots. That's putting the focus on capital expenditures, which are expected to top $25 billion this year, based on a prior forecast, up from about $8.5 billion in 2025.
One of Tesla's big investments is in a semiconductor factory that it's building with SpaceX and Intel in Grimes County, Texas. That partnership with SpaceX along with other areas of overlap, including work on Tesla's recently announced Roadster refresh, fueled intensifying speculation that Musk's companies were on the verge of combining in what would be a historic transaction.
"I feel like I'm tap dancing through a minefield," Musk said on the SpaceX earnings call, responding to a question about a potential merger.
"Do I think it would be a good idea? Yes," Musk said. "But at the end of the day, the shareholders have to be supportive of this." On the Tesla side, that means needing a 50% vote of all shares, which is "quite a high hurdle," he said.
Musk pointed to the company's potential to cooperate on AI software, chip design, Terafab and robotics. Tesla is already using Grok AI technology, developed by SpaceX, to power AI assistants in customer cars, and to help control the company's Optimus humanoid robots now in development.
Tesla's stock price is down 14% this year, after rallying on Wednesday, underperforming all of its megacap tech peers. SpaceX went public in June, and is up from its $150 IPO price after its post-earnings pop.
Tesla CFO Vaibhav Taneja told investors on the company's last earnings call in July that automotive margins had been challenged this year by rising interest rates and energy costs.
But he also touted growing revenue from Full Self-Driving (Supervised), sometimes referred to as FSD, the partially automated driving system Tesla sells for $99 per month. FSD doesn't make Tesla vehicles safe to use without a human driver, and the company markets the system as Assisted Driving in Europe. Taneja said Tesla reached close to 1.5 million paid FSD customers globally as of the end of June.
Investors submitted questions online ahead of Wednesday's call, and one of the top-voted requests was for updates on FSD and when it could become "unsupervised," making customers' vehicles fully automated and safe to use like a robotaxi.
Shareholders also want to hear an update on Tesla's Cybercab, a bronze two-seater designed for use as a robotaxi, but not yet sold to individuals.
Tesla is testing the Cybercab, and has deployed driverless vehicles in a limited U.S. fleet. But the company still lags far behind Alphabet's Waymo in the U.S., and Baidu's Apollo Go in China.
WATCH: Deepwater's Gene Munster on a possible SpaceX-Tesla merger`,
    bodyJa: `On SpaceX's earnings call late Tuesday, CEO Elon Musk, who also runs Tesla, took a break from talking about financial results to tell investors that it would be a "good idea" to merge his two companies, and said the boards at both have formed special committees to discuss a possible tie-up.
Musk will be back in public after market close on Wednesday, this time to discuss Tesla earnings.
Here's what Wall Street is expecting, according to estimates from analysts polled by LSEG:
- Earnings per share: 43 cents estimated
- Revenue: $27.9 billion estimated
Should Tesla fail to top expectations, the company would see a slight decrease in revenue from $28.1 billion a year earlier. Tesla has recorded double-digit growth in each of the two prior quarters, but revenue dropped in three of four quarters in 2025, as Chinese EV makers such as BYD and Xiaomi gained popularity in Asia and Europe with affordable and innovative EVs. Tesla was also hit last year by the end of a federal EV tax credit.
Earlier this month, Tesla reported vehicle deliveries for the third quarter of 486,532, about 2% below the year-ago number. Deliveries are the closest approximation of sales reported by Tesla but are not precisely defined in its shareholder communications.
While Tesla still counts on auto sales for the bulk of its revenue, Musk sees the company's future in robotaxis and humanoid robots. That's putting the focus on capital expenditures, which are expected to top $25 billion this year, based on a prior forecast, up from about $8.5 billion in 2025.
One of Tesla's big investments is in a semiconductor factory that it's building with SpaceX and Intel in Grimes County, Texas. That partnership with SpaceX along with other areas of overlap, including work on Tesla's recently announced Roadster refresh, fueled intensifying speculation that Musk's companies were on the verge of combining in what would be a historic transaction.
"I feel like I'm tap dancing through a minefield," Musk said on the SpaceX earnings call, responding to a question about a potential merger.
"Do I think it would be a good idea? Yes," Musk said. "But at the end of the day, the shareholders have to be supportive of this." On the Tesla side, that means needing a 50% vote of all shares, which is "quite a high hurdle," he said.
Musk pointed to the company's potential to cooperate on AI software, chip design, Terafab and robotics. Tesla is already using Grok AI technology, developed by SpaceX, to power AI assistants in customer cars, and to help control the company's Optimus humanoid robots now in development.
Tesla's stock price is down 14% this year, after rallying on Wednesday, underperforming all of its megacap tech peers. SpaceX went public in June, and is up from its $150 IPO price after its post-earnings pop.
Tesla CFO Vaibhav Taneja told investors on the company's last earnings call in July that automotive margins had been challenged this year by rising interest rates and energy costs.
But he also touted growing revenue from Full Self-Driving (Supervised), sometimes referred to as FSD, the partially automated driving system Tesla sells for $99 per month. FSD doesn't make Tesla vehicles safe to use without a human driver, and the company markets the system as Assisted Driving in Europe. Taneja said Tesla reached close to 1.5 million paid FSD customers globally as of the end of June.
Investors submitted questions online ahead of Wednesday's call, and one of the top-voted requests was for updates on FSD and when it could become "unsupervised," making customers' vehicles fully automated and safe to use like a robotaxi.
Shareholders also want to hear an update on Tesla's Cybercab, a bronze two-seater designed for use as a robotaxi, but not yet sold to individuals.
Tesla is testing the Cybercab, and has deployed driverless vehicles in a limited U.S. fleet. But the company still lags far behind Alphabet's Waymo in the U.S., and Baidu's Apollo Go in China.
WATCH: Deepwater's Gene Munster on a possible SpaceX-Tesla merger`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/21/tesla-tsla-q3-2026-earnings-report.html",
    publishedAt: "2026-10-21T16:01:25+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "polymarket-traders-see-a-10-chance-the-a-8dafafbf",
    title: "Polymarket traders see a 10% chance the AI bubble bursts before New Year’s Day",
    titleJa: "Polymarket traders see a 10% chance the AI bubble bursts before New Year’s Day",
    summaryJa: "For investors worried that the runaway artificial-intelligence trade might be about to hit the skids, prediction markets are already starting to reflect that anxiety.",
    bodyOriginal: `For investors worried that the runaway artificial-intelligence trade might be about to hit the skids, prediction markets are already starting to reflect that anxiety.`,
    bodyJa: `For investors worried that the runaway artificial-intelligence trade might be about to hit the skids, prediction markets are already starting to reflect that anxiety.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/polymarket-traders-see-a-10-chance-the-ai-bubble-bursts-before-new-years-day-ad33258b?mod=mw_rss_topstories",
    publishedAt: "2026-10-21T15:59:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-57386204",
    readTime: 2,
  },
  {
    id: "civil-servant-admits-he-made-mistakes-ju-649c8224",
    title: "Civil servant admits he 'made mistakes' juggling five government jobs",
    titleJa: "Civil servant admits he 'made mistakes' juggling five government jobs",
    summaryJa: "Kashim Chowdhury was contracted for 183 hours a week, more than the number of hours in seven days.",
    bodyOriginal: `Civil servant admits he 'made mistakes' juggling five government jobs
- Published
The civil servant accused of fraudulently earning more than £284,000 by juggling multiple public-sector jobs admitted making mistakes but said ''I do not believe there was criminal intent".
Giving evidence at Southwark Crown Court, Kashim Chowdhury told the jury he had made mistakes because he was ''overwhelmed and stressed'' and had felt ''terror and panic'' at the thought of losing his livelihood.
He told the jury he had been diagnosed with post-traumatic stress disorder in 2015 and that it had been triggered in 2021.
The 55-year-old, who is from east London, is on trial accused of nine counts of fraud. He denies acting dishonestly or intending to make a dishonest gain.
The prosecution alleges Chowdhury failed to reveal to his employers that he had other full-time employment. But Chowdhury told the jury some of his managers knew he had other jobs.
He told the court that staff and managers at the Department for Environment and Rural Affairs (Defra), the London Borough of Tower Hamlets, East London NHS Trust and the Department for Health and Social Care (DHSC) all knew he had jobs elsewhere.
At the height of the alleged deceit, Chowdhury held five full-time jobs on full-time salaries within the public sector.
In the spring of 2023, he was employed by the Department for Environment, Food and Rural Affairs, the UK Health Security Agency, the Food Standards Agency, the Department for Business and Trade and the Home Office. The jury was told that throughout this period he was contracted to work 183 hours a week - more than the number of hours that exist in seven days.
Each job paid a full-time wage, with Chowdhury paid £11,000 for a single month's work in 2023.
Chowdhury said the jobs were a "lifeline" during a time his mother's health had declined.
Asked by defence barrister Pieter Briegel what extent stress in his life was due to the number of jobs, he replied: "The jobs at the time were my lifeline at the time, that was what I survived on at that particular moment.
"And they gave me a link to the outside, they were the only thing I had to the outside world and were a distraction from what was going on in my personal life, looking after my mum at that time," he told the court.
The prosecution alleges Chowdhury managed to keep his overlapping jobs secret because he worked entirely remotely. He told his employers he was the sole carer for his elderly mother and the prosecution alleges he "exploited this opportunity".
A succession of Chowdhury's line managers have told the jury that he performed poorly in his roles.
Abigail Mounde, who was Chowdhury's line manager at the Department for Business and Trade previously told the court: ''Any basic tasks I asked him to do he either did late or not to the standard I would have expected."
Chowdhury was asked whether he accepted the criticism of his performance, including the allegation he failed to deliver work on time. He replied: "I reject them all."
The prosecution also alleges Chowdhury used sick notes from his doctor as part of the cover-up.
But the prosecution said while he was telling some employers he was sick and unfit to work because of "mixed anxiety and depressive disorder" he was not giving sick notes to other employers. The prosecution said this ''underlines the dishonesty involved in the whole affair".
His line manager at the Health Security Agency, Aleesha Adams, arranged a video call in May 2023, to support him returning to work after a period of absence.
In previous evidence she told the court she was surprised when he logged on wearing white make-up because his name led her to expect to see an Asian man with darker skin.
She told the court that as the call went on the make-up started coming off his forehead. ''He was sweating, it was like rubbing off so it was darker underneath and darker on the neck."
Prosecuting barrister Lucy Organ told the court: ''This almost laughable incident demonstrates quite how far the defendant was willing to go in his deceit.''
The trial continues.
Related topics
- Published7 days ago`,
    bodyJa: `Civil servant admits he 'made mistakes' juggling five government jobs
- Published
The civil servant accused of fraudulently earning more than £284,000 by juggling multiple public-sector jobs admitted making mistakes but said ''I do not believe there was criminal intent".
Giving evidence at Southwark Crown Court, Kashim Chowdhury told the jury he had made mistakes because he was ''overwhelmed and stressed'' and had felt ''terror and panic'' at the thought of losing his livelihood.
He told the jury he had been diagnosed with post-traumatic stress disorder in 2015 and that it had been triggered in 2021.
The 55-year-old, who is from east London, is on trial accused of nine counts of fraud. He denies acting dishonestly or intending to make a dishonest gain.
The prosecution alleges Chowdhury failed to reveal to his employers that he had other full-time employment. But Chowdhury told the jury some of his managers knew he had other jobs.
He told the court that staff and managers at the Department for Environment and Rural Affairs (Defra), the London Borough of Tower Hamlets, East London NHS Trust and the Department for Health and Social Care (DHSC) all knew he had jobs elsewhere.
At the height of the alleged deceit, Chowdhury held five full-time jobs on full-time salaries within the public sector.
In the spring of 2023, he was employed by the Department for Environment, Food and Rural Affairs, the UK Health Security Agency, the Food Standards Agency, the Department for Business and Trade and the Home Office. The jury was told that throughout this period he was contracted to work 183 hours a week - more than the number of hours that exist in seven days.
Each job paid a full-time wage, with Chowdhury paid £11,000 for a single month's work in 2023.
Chowdhury said the jobs were a "lifeline" during a time his mother's health had declined.
Asked by defence barrister Pieter Briegel what extent stress in his life was due to the number of jobs, he replied: "The jobs at the time were my lifeline at the time, that was what I survived on at that particular moment.
"And they gave me a link to the outside, they were the only thing I had to the outside world and were a distraction from what was going on in my personal life, looking after my mum at that time," he told the court.
The prosecution alleges Chowdhury managed to keep his overlapping jobs secret because he worked entirely remotely. He told his employers he was the sole carer for his elderly mother and the prosecution alleges he "exploited this opportunity".
A succession of Chowdhury's line managers have told the jury that he performed poorly in his roles.
Abigail Mounde, who was Chowdhury's line manager at the Department for Business and Trade previously told the court: ''Any basic tasks I asked him to do he either did late or not to the standard I would have expected."
Chowdhury was asked whether he accepted the criticism of his performance, including the allegation he failed to deliver work on time. He replied: "I reject them all."
The prosecution also alleges Chowdhury used sick notes from his doctor as part of the cover-up.
But the prosecution said while he was telling some employers he was sick and unfit to work because of "mixed anxiety and depressive disorder" he was not giving sick notes to other employers. The prosecution said this ''underlines the dishonesty involved in the whole affair".
His line manager at the Health Security Agency, Aleesha Adams, arranged a video call in May 2023, to support him returning to work after a period of absence.
In previous evidence she told the court she was surprised when he logged on wearing white make-up because his name led her to expect to see an Asian man with darker skin.
She told the court that as the call went on the make-up started coming off his forehead. ''He was sweating, it was like rubbing off so it was darker underneath and darker on the neck."
Prosecuting barrister Lucy Organ told the court: ''This almost laughable incident demonstrates quite how far the defendant was willing to go in his deceit.''
The trial continues.
Related topics
- Published7 days ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cmze4w63ly42o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-21T15:58:05+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/ca73/live/aa125910-cd46-11f1-8177-0f8bd59b54c4.jpg",
    readTime: 10,
  },
  {
    id: "nvidia-announces-plug-and-play-vera-rubi-12d295db",
    title: "Nvidia announces plug and play Vera Rubin racks that can be shipped on a truck",
    titleJa: "Nvidia announces plug and play Vera Rubin racks that can be shipped on a truck",
    summaryJa: "Nvidia says its DSX Pod AI Factory, which combines seven Vera Rubin racks in a shipping container, could cut the time to start serving AI tokens to 14 days.",
    bodyOriginal: `Nvidia announced Wednesday a new product that will put seven of its Vera Rubin AI racks into a shipping container, the company's latest effort to move up the stack and offer complete systems for artificial intelligence computing.
The DSX Pod AI Factory is roughly the size of a standard shipping container and weighs about 28,000 kilograms, Nvidia said. It's designed to be shipped on a truck on normal roads and all the cabling and liquid cooling for the Pod are assembled at the factory, the company said.
"The only thing that has to happen when it gets to the site is it's placed in its location, connected to the rest of the other containers, and validated through final burning and testing," Nvidia VP of hyperscale computing Ian Buck said on a call with reporters this week.
DSX Pod AI factory will reduce the time for a new AI data center to start serving tokens from six months to 14 days, according to the company. Nvidia said the pod is intended for customers worldwide and could help address deployment challenges faced by European customers.
Nvidia did not announce a price for the system, but analysts say a single Vera Rubin rack can cost over $7 million.
The DSX Pod is a reference design that will ship from Nvidia's manufacturing partners. Nvidia said it was working with manufacturers including Foxconn, Gigabyte, Lenovo, HPE, Quanta, and Pegatron. Nvidia expects deliveries to start in early 2027.
Nvidia, once a chip company, now offers networking, storage, and other data center needs to its customers. Its AI systems have evolved from single GPU chips to servers with four or eight GPUs, then to entire racks and now to the DSX Pod, a containerized building block with several racks already integrated.
"What we offer into one gigawatt went from about $18 billion or so per gigawatt, to $20-something billion per gigawatt, to now $40-plus billion per gigawatt," Nvidia CEO Jensen Huang said recently on a podcast. Gigawatts refer to the size of data center infrastructure by how much power is used. "My sense is that's going to keep going up."`,
    bodyJa: `Nvidia announced Wednesday a new product that will put seven of its Vera Rubin AI racks into a shipping container, the company's latest effort to move up the stack and offer complete systems for artificial intelligence computing.
The DSX Pod AI Factory is roughly the size of a standard shipping container and weighs about 28,000 kilograms, Nvidia said. It's designed to be shipped on a truck on normal roads and all the cabling and liquid cooling for the Pod are assembled at the factory, the company said.
"The only thing that has to happen when it gets to the site is it's placed in its location, connected to the rest of the other containers, and validated through final burning and testing," Nvidia VP of hyperscale computing Ian Buck said on a call with reporters this week.
DSX Pod AI factory will reduce the time for a new AI data center to start serving tokens from six months to 14 days, according to the company. Nvidia said the pod is intended for customers worldwide and could help address deployment challenges faced by European customers.
Nvidia did not announce a price for the system, but analysts say a single Vera Rubin rack can cost over $7 million.
The DSX Pod is a reference design that will ship from Nvidia's manufacturing partners. Nvidia said it was working with manufacturers including Foxconn, Gigabyte, Lenovo, HPE, Quanta, and Pegatron. Nvidia expects deliveries to start in early 2027.
Nvidia, once a chip company, now offers networking, storage, and other data center needs to its customers. Its AI systems have evolved from single GPU chips to servers with four or eight GPUs, then to entire racks and now to the DSX Pod, a containerized building block with several racks already integrated.
"What we offer into one gigawatt went from about $18 billion or so per gigawatt, to $20-something billion per gigawatt, to now $40-plus billion per gigawatt," Nvidia CEO Jensen Huang said recently on a podcast. Gigawatts refer to the size of data center infrastructure by how much power is used. "My sense is that's going to keep going up."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/21/nvidia-announces-vera-rubin-racks-that-can-be-shipped-on-a-truck-.html",
    publishedAt: "2026-10-21T11:30:01+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
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
