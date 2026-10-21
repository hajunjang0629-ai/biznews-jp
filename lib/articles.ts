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
  {
    id: "house-committee-says-webull-messages-poi-787afc34",
    title: "House committee says Webull messages point to China access to U.S. customer data",
    titleJa: "House committee says Webull messages point to China access to U.S. customer data",
    summaryJa: "The House Select Committee on China earlier this month said online investing platform Webull is quietly \"tied in structural ways\" to China's government.",
    bodyOriginal: `Internal messages between employees of online investing platform Webull suggest a company employee in China had access to information about a U.S. customer, despite the company having said it bars such sharing, according to an analysis of the messages by the House Select Committee on China.
The analysis comes nearly two weeks after CNBC first detailed the bipartisan select committee's report that concluded that Webull, which counts 28 million users, is quietly "tied in structural ways" to China's government, representing a national security threat to American finance.
Webull shares slid more than 19% on the heels of that Oct. 7 report.
At the time of the report, Webull told CNBC in a statement that "U.S. customer data is stored in the U.S. and access to sensitive customer data is controlled by the U.S."
But the newly released internal messages by the House Select Committee on China, which CNBC exclusively obtained, raise questions about whether that has always been the case.
The committee has focused on threats posed by China and protecting U.S. industry from Chinese competition.
One message thread suggests a Webull employee was in China during a discussion about a U.S. customer account.
The thread also indicates the account was previously approved by a China Webull team member and an American counterpart.
The messages, dating to 2021, were sent on Microsoft Teams between Brendan Fuller, a manager at Webull's U.S. brokerage, and an employee named Zhenghan Wang, whose nickname is "Rock."
The select committee says Wang was likely in China at the time.
In one message, Fuller messaged Wang about concerns involving a particular trading account.
"We saw these problems ... and approve account," Fuller wrote.
Wang replied: "Yes,CIP."
CIP is an acronym for Customer Identification Program, a U.S. regulatory requirement that financial institutions verify the identities of individuals and entities opening accounts.
"I thought so," Fuller responded.
Wang asked Fuller: "Who approve the account?"
Fuller responded: "One China team member and one US team."
Wang then asked: "I want to know in what situation (CIP), can we approve the account open?"
Fuller responded: "I think we just approve them all no matter what ..."
"And then we pay for vendors. And create report and work," Fuller added.
Wang then replied that "CIP=" followed by Mandarin Chinese characters forming a common phrase that translates as "Exists in name only," or "Useless."
A spokesperson for the select committee, in a statement to CNBC, said, "All the evidence in these text messages points to Zhenghan Wang, a Webull employee, being located in China with access to U.S. customer data at the time he worked for the company."
An analysis by the committee concluded that Wang was in China at the time of the exchange because the messages' time stamps indicated that Wang was working daytime hours in Beijing, and because he set his software to translate the messages into simplified Chinese.
A Webull spokesperson did not directly respond to CNBC's questions about Wang's access to U.S. customer data in 2021 and whether that disproved the company's assertion that its U.S. data does not go to China.
The Webull spokesperson said, "Protecting customer data is central to Webull's operations."
"Webull's U.S. customer data is stored only in the U.S. on AWS servers in Virginia and Oregon, with access to sensitive data restricted to U.S.-based employees," the spokesperson said.
"U.S. broker-dealer operations are directed exclusively by U.S.-based personnel, and no individuals based outside the U.S. have ever exercised operational or decision-making authority over Webull's U.S. broker-dealer business."
The company spokesperson also criticized the select committee's release of the messages.
"The Teams messages now being referenced date back to a 2021 routine FINRA matter, which was concluded," the spokesperson said. FINRA, or the Financial Industry Regulatory Authority, is the self-regulatory organization for member broker-dealers.
The messages' "recent disclosure, alongside the Select Committee's report relying on preliminary and outdated information, raises legitimate questions about the timing and circumstances surrounding their release," Webull's spokesperson said.
"Webull rejects irresponsible speculation and stands on our well-documented record: Webull's data protection practices are robust, continuously enhanced, and independently verified."
The select committee's Oct. 7 report argued that Webull's corporate structure means the firm's "software development, data pipelines, and core engineering operations" are dependent on infrastructure subject directly to Beijing's laws. Those Chinese laws can compel firms to cooperate with the government in various ways, including mandating data transfers.
The select committee on Tuesday issued a press release titled, "The Facts on Webull's Ties to China."
The release said that since the committee issued its report, Webull "has ... responded with numerous false statements about its business and its interactions with the Select Committee."
The committee listed five claims by Webull, followed by what the committee labeled "The Truth."
One section, titled "Webull Claim: 'U.S. customer data is stored in the U.S.,'" was followed by a rebuttal that said, "The Truth: The Select Committee's report does not dispute where the data is stored.
"Its finding is about who can reach the data and the systems that process it," the committee continued. "The report found that Webull affiliate Webull Technologies Limited previously used Tencent Cloud, a China-based provider, to host certain user data ... Webull has not said what data Tencent hosted or when that ended."
Webull said Tuesday that it was partnering with Kalshi, the prediction market platform, to offer so-called perpetual futures to U.S. customers.
The first set of perpetual futures, which do not have an expiration date, as traditional futures do, would be for cryptocurrencies, Webull said.`,
    bodyJa: `Internal messages between employees of online investing platform Webull suggest a company employee in China had access to information about a U.S. customer, despite the company having said it bars such sharing, according to an analysis of the messages by the House Select Committee on China.
The analysis comes nearly two weeks after CNBC first detailed the bipartisan select committee's report that concluded that Webull, which counts 28 million users, is quietly "tied in structural ways" to China's government, representing a national security threat to American finance.
Webull shares slid more than 19% on the heels of that Oct. 7 report.
At the time of the report, Webull told CNBC in a statement that "U.S. customer data is stored in the U.S. and access to sensitive customer data is controlled by the U.S."
But the newly released internal messages by the House Select Committee on China, which CNBC exclusively obtained, raise questions about whether that has always been the case.
The committee has focused on threats posed by China and protecting U.S. industry from Chinese competition.
One message thread suggests a Webull employee was in China during a discussion about a U.S. customer account.
The thread also indicates the account was previously approved by a China Webull team member and an American counterpart.
The messages, dating to 2021, were sent on Microsoft Teams between Brendan Fuller, a manager at Webull's U.S. brokerage, and an employee named Zhenghan Wang, whose nickname is "Rock."
The select committee says Wang was likely in China at the time.
In one message, Fuller messaged Wang about concerns involving a particular trading account.
"We saw these problems ... and approve account," Fuller wrote.
Wang replied: "Yes,CIP."
CIP is an acronym for Customer Identification Program, a U.S. regulatory requirement that financial institutions verify the identities of individuals and entities opening accounts.
"I thought so," Fuller responded.
Wang asked Fuller: "Who approve the account?"
Fuller responded: "One China team member and one US team."
Wang then asked: "I want to know in what situation (CIP), can we approve the account open?"
Fuller responded: "I think we just approve them all no matter what ..."
"And then we pay for vendors. And create report and work," Fuller added.
Wang then replied that "CIP=" followed by Mandarin Chinese characters forming a common phrase that translates as "Exists in name only," or "Useless."
A spokesperson for the select committee, in a statement to CNBC, said, "All the evidence in these text messages points to Zhenghan Wang, a Webull employee, being located in China with access to U.S. customer data at the time he worked for the company."
An analysis by the committee concluded that Wang was in China at the time of the exchange because the messages' time stamps indicated that Wang was working daytime hours in Beijing, and because he set his software to translate the messages into simplified Chinese.
A Webull spokesperson did not directly respond to CNBC's questions about Wang's access to U.S. customer data in 2021 and whether that disproved the company's assertion that its U.S. data does not go to China.
The Webull spokesperson said, "Protecting customer data is central to Webull's operations."
"Webull's U.S. customer data is stored only in the U.S. on AWS servers in Virginia and Oregon, with access to sensitive data restricted to U.S.-based employees," the spokesperson said.
"U.S. broker-dealer operations are directed exclusively by U.S.-based personnel, and no individuals based outside the U.S. have ever exercised operational or decision-making authority over Webull's U.S. broker-dealer business."
The company spokesperson also criticized the select committee's release of the messages.
"The Teams messages now being referenced date back to a 2021 routine FINRA matter, which was concluded," the spokesperson said. FINRA, or the Financial Industry Regulatory Authority, is the self-regulatory organization for member broker-dealers.
The messages' "recent disclosure, alongside the Select Committee's report relying on preliminary and outdated information, raises legitimate questions about the timing and circumstances surrounding their release," Webull's spokesperson said.
"Webull rejects irresponsible speculation and stands on our well-documented record: Webull's data protection practices are robust, continuously enhanced, and independently verified."
The select committee's Oct. 7 report argued that Webull's corporate structure means the firm's "software development, data pipelines, and core engineering operations" are dependent on infrastructure subject directly to Beijing's laws. Those Chinese laws can compel firms to cooperate with the government in various ways, including mandating data transfers.
The select committee on Tuesday issued a press release titled, "The Facts on Webull's Ties to China."
The release said that since the committee issued its report, Webull "has ... responded with numerous false statements about its business and its interactions with the Select Committee."
The committee listed five claims by Webull, followed by what the committee labeled "The Truth."
One section, titled "Webull Claim: 'U.S. customer data is stored in the U.S.,'" was followed by a rebuttal that said, "The Truth: The Select Committee's report does not dispute where the data is stored.
"Its finding is about who can reach the data and the systems that process it," the committee continued. "The report found that Webull affiliate Webull Technologies Limited previously used Tencent Cloud, a China-based provider, to host certain user data ... Webull has not said what data Tencent hosted or when that ended."
Webull said Tuesday that it was partnering with Kalshi, the prediction market platform, to offer so-called perpetual futures to U.S. customers.
The first set of perpetual futures, which do not have an expiration date, as traditional futures do, would be for cryptocurrencies, Webull said.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/21/webull-us-customer-data-china-access.html",
    publishedAt: "2026-10-21T11:05:18+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "mortgage-rates-drop-for-the-first-time-i-14123ab3",
    title: "Mortgage rates drop for the first time in 2 months, but demand still falls further",
    titleJa: "Mortgage rates drop for the first time in 2 months, but demand still falls further",
    summaryJa: "Mortgage rates finally came down a little, but borrowers are still having trouble getting into the housing market.",
    bodyOriginal: `Mortgage demand took another leg lower, despite a brief respite from rising interest rates.
Total mortgage application volume fell 5.3% last week compared with the previous week, according to the Mortgage Bankers Association's seasonally adjusted index.
The average contract interest rate for 30-year fixed-rate mortgages with conforming loan balances, $832,750 or less, decreased last week to 7.41% from 7.50%, with points decreasing to 0.75 from 0.83 (including the origination fee, for loans with a 20% down payment.
"Mortgage rates decreased for the first time in over two months," said Joel Kan, an MBA economist in a release. "However, lower rates were not enough to boost application activity, as both purchase and refinance applications continued to decline."
Applications to refinance a home loan, which are most sensitive to weekly moves, fell just 2% week-to-week, a smaller drop than some previous weeks when rates were moving higher. Refinance demand was still 59% lower than the same week one year ago. With rates now over a full percentage point higher than they were a year ago, there is a very small pool of borrowers who can benefit from a refinance.
Applications for a mortgage to purchase a home fell a steeper 7% for the week and were 18% lower from the year before. Buyers are reacting less to the weekly move in rates but more to the overall higher level. A report from the National Association of Realtors Wednesday showed a sharp drop in September pending home sales. These are measured by signed contracts, so it showed the real-time impact of rising rates during the month. Rates remained at that higher level in October.
For those buyers in the market, a continued high share are opting for adjustable-rate loans (ARMs), which offer lower rates but are considered riskier because they will eventually reset to whatever the market rate is at the end of their term.
"The ARM share held steady at 10.5 percent, as ARM rates remained almost a full percentage point lower than the 30-year fixed rate, giving qualified borrowers a lower rate option to purchase a home," Kan added.
Mortgage rates haven't done much to start this week, according to a separate survey from Mortgage News Daily. Last week was a particularly volatile week for rates, due to multiple monthly inflation reports. This week the moves have seemed to follow oil prices.
"But we'd caution against placing too much emphasis on the oil price correlation," wrote Matthew Graham, chief operating officer at Mortgage News Daily. "It's been highly unreliable for more than a month."`,
    bodyJa: `Mortgage demand took another leg lower, despite a brief respite from rising interest rates.
Total mortgage application volume fell 5.3% last week compared with the previous week, according to the Mortgage Bankers Association's seasonally adjusted index.
The average contract interest rate for 30-year fixed-rate mortgages with conforming loan balances, $832,750 or less, decreased last week to 7.41% from 7.50%, with points decreasing to 0.75 from 0.83 (including the origination fee, for loans with a 20% down payment.
"Mortgage rates decreased for the first time in over two months," said Joel Kan, an MBA economist in a release. "However, lower rates were not enough to boost application activity, as both purchase and refinance applications continued to decline."
Applications to refinance a home loan, which are most sensitive to weekly moves, fell just 2% week-to-week, a smaller drop than some previous weeks when rates were moving higher. Refinance demand was still 59% lower than the same week one year ago. With rates now over a full percentage point higher than they were a year ago, there is a very small pool of borrowers who can benefit from a refinance.
Applications for a mortgage to purchase a home fell a steeper 7% for the week and were 18% lower from the year before. Buyers are reacting less to the weekly move in rates but more to the overall higher level. A report from the National Association of Realtors Wednesday showed a sharp drop in September pending home sales. These are measured by signed contracts, so it showed the real-time impact of rising rates during the month. Rates remained at that higher level in October.
For those buyers in the market, a continued high share are opting for adjustable-rate loans (ARMs), which offer lower rates but are considered riskier because they will eventually reset to whatever the market rate is at the end of their term.
"The ARM share held steady at 10.5 percent, as ARM rates remained almost a full percentage point lower than the 30-year fixed rate, giving qualified borrowers a lower rate option to purchase a home," Kan added.
Mortgage rates haven't done much to start this week, according to a separate survey from Mortgage News Daily. Last week was a particularly volatile week for rates, due to multiple monthly inflation reports. This week the moves have seemed to follow oil prices.
"But we'd caution against placing too much emphasis on the oil price correlation," wrote Matthew Graham, chief operating officer at Mortgage News Daily. "It's been highly unreliable for more than a month."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/21/mortgage-rates-drop-for-the-first-time-in-2-months-but-demand-falls.html",
    publishedAt: "2026-10-21T11:00:01+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 6,
  },
  {
    id: "spacex-up-over-8-in-premarket-after-earn-4de597c2",
    title: "SpaceX up over 8% in premarket after earnings beat and Musk hints at Tesla tie-up",
    titleJa: "SpaceX up over 8% in premarket after earnings beat and Musk hints at Tesla tie-up",
    summaryJa: "SpaceX shares jumped after the company reported surging revenue growth in its third quarter, and owner Elon Musk floated a potential SpaceX-Tesla merger.",
    bodyOriginal: `SpaceX jumped in premarket trading on Wednesday after the company reported surging revenue growth in its third quarter, and owner Elon Musk floated a potential SpaceX-Tesla merger.
The space company, which made its debut on the Nasdaq in the biggest IPO ever in June, reported third-quarter revenue on Tuesday of $14.6 billion, up 161% from the previous year, and beating LSEG consensus estimates of $12.72 billion.
Meanwhile, its operating income from operations came in at $2.8 billion, with net income of $4.4 billion, after reporting a net loss of $1.05 billion in the same period a year earlier.
On the earnings call, Musk said he's considering a combination with Tesla — which would mark the largest merger in history — and that the boards of both companies have created specific committees to discuss a consolidation.
"I do think there's a lot of merit to combining the companies as we are pretty much in the superintelligence singularity, and there's a lot to be gained from cooperating," Musk said on the call. Tesla is set to report third-quarter earnings after the closing bell on Wednesday.
SpaceX shares last rose 8.5% before the markets opened on Wednesday. Meanwhile, Tesla shares were up 1.4% in premarket trading.
Shares of other space stocks, including Rocket Lab, Intuitive Machines, and AST SpaceMobile, were all higher in premarket trading.
SpaceX forecasts first-quarter 2027 revenue between $33 billion and $37 billion, beating the average analyst estimate of $22.2 billion, per LSEG.
"We delivered another strong quarter in Q3. Revenue grew an impressive 161% year-over-year, fueled by continued momentum in Connectivity and a clear inflection in our Super Intelligence business," SpaceX's Chief Financial Officer Bret Johnson said in the earnings release.
Johnson pinned the strong results on recurring revenue from its satellite internet business, Starlink, and significant expansion of its Super Intelligence [SI] infrastructure.
The company has dived into AI this year, which it's now calling SI. The segment is its largest business unit, with revenue soaring ninefold to $7.56 billion from $813 million in the same quarter last year.
Bull case for AI cloud providers
Commentary on computing during the earnings call supported "continued pricing power and shorter payback periods" for AI cloud providers, Truist Securities analysts said in a Tuesday note.
"Despite market concerns relating to financing for AI cloud providers this past week, we believe SpaceX's third-quarter 2026 represents the first data point during the earnings season to support the bull case for AI cloud providers," they added.
They explained that demand appears "insatiable," with SpaceX noting that it could rent out its capacity several times over. The analysts said Coreweave and Nebius are set to benefit and capture demand as "pricing power will more than offset higher rates."
The shares of cloud providers including Nebius, Coreweave, Iren, and Applied Digital also rose in premarket trading on Wednesday following Musk's comments.
— Lora Kolodny contributed to this report`,
    bodyJa: `SpaceX jumped in premarket trading on Wednesday after the company reported surging revenue growth in its third quarter, and owner Elon Musk floated a potential SpaceX-Tesla merger.
The space company, which made its debut on the Nasdaq in the biggest IPO ever in June, reported third-quarter revenue on Tuesday of $14.6 billion, up 161% from the previous year, and beating LSEG consensus estimates of $12.72 billion.
Meanwhile, its operating income from operations came in at $2.8 billion, with net income of $4.4 billion, after reporting a net loss of $1.05 billion in the same period a year earlier.
On the earnings call, Musk said he's considering a combination with Tesla — which would mark the largest merger in history — and that the boards of both companies have created specific committees to discuss a consolidation.
"I do think there's a lot of merit to combining the companies as we are pretty much in the superintelligence singularity, and there's a lot to be gained from cooperating," Musk said on the call. Tesla is set to report third-quarter earnings after the closing bell on Wednesday.
SpaceX shares last rose 8.5% before the markets opened on Wednesday. Meanwhile, Tesla shares were up 1.4% in premarket trading.
Shares of other space stocks, including Rocket Lab, Intuitive Machines, and AST SpaceMobile, were all higher in premarket trading.
SpaceX forecasts first-quarter 2027 revenue between $33 billion and $37 billion, beating the average analyst estimate of $22.2 billion, per LSEG.
"We delivered another strong quarter in Q3. Revenue grew an impressive 161% year-over-year, fueled by continued momentum in Connectivity and a clear inflection in our Super Intelligence business," SpaceX's Chief Financial Officer Bret Johnson said in the earnings release.
Johnson pinned the strong results on recurring revenue from its satellite internet business, Starlink, and significant expansion of its Super Intelligence [SI] infrastructure.
The company has dived into AI this year, which it's now calling SI. The segment is its largest business unit, with revenue soaring ninefold to $7.56 billion from $813 million in the same quarter last year.
Bull case for AI cloud providers
Commentary on computing during the earnings call supported "continued pricing power and shorter payback periods" for AI cloud providers, Truist Securities analysts said in a Tuesday note.
"Despite market concerns relating to financing for AI cloud providers this past week, we believe SpaceX's third-quarter 2026 represents the first data point during the earnings season to support the bull case for AI cloud providers," they added.
They explained that demand appears "insatiable," with SpaceX noting that it could rent out its capacity several times over. The analysts said Coreweave and Nebius are set to benefit and capture demand as "pricing power will more than offset higher rates."
The shares of cloud providers including Nebius, Coreweave, Iren, and Applied Digital also rose in premarket trading on Wednesday following Musk's comments.
— Lora Kolodny contributed to this report`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/21/spacex-spcx-stock-musk-merger-tesla.html",
    publishedAt: "2026-10-21T10:52:39+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 8,
  },
  {
    id: "faisal-islam-inflation-and-borrowing-fig-8274d11b",
    title: "Faisal Islam: Inflation and borrowing figures illustrate chancellor's Budget challenge",
    titleJa: "Faisal Islam: Inflation and borrowing figures illustrate chancellor's Budget challenge",
    summaryJa: "The economic figures released on Wednesday show the constraints for John Healey as he puts the finishing touches to his Budget.",
    bodyOriginal: `Faisal Islam: Inflation and borrowing figures illustrate chancellor's Budget challenge
- Published
The Chancellor was on a early flight to North East Scotland on Wednesday to announce new North Sea energy approvals as the last set of major economic figures dropped.
From a mile high, as well as close up, the figures for inflation and for the public finances set out his Budget balancing act in clear terms.
The National Debt has topped £3 trillion for the first time in the official figures.
The headline rate of inflation has hit 3.5% and is surely heading back up to 4% in the coming months.
Borrowing is running ahead of forecasts, as spending and interest costs increase.
These show the constraints for John Healey as he puts the finishing touches to his statement next week.
On the one hand he says he wants to give "breathing space" to consumers yet again feeling the heat from cost of living pressures.
The public finances remain under pressure, however, from the double whammy of rising inflation and borrowing costs.
While inflation was of course expected to increase as petrol and diesel prices surged, in some cases, to records, other measures of underlying inflation also increased.
From airfares to computer game download prices, there are the first signs of stickier forms of price pressure and of higher inflation becoming more embedded, suggesting elevated price rises are not temporary. Capital Economics now expects the main measure of inflation to peak at 4.2% next year.
The Bank of England carefully watches services inflation and core inflation, and this ups the odds significantly for a rise in interest rates next month.
The services sector, which includes everything from law and banking to retail, hospitality and tourism, makes up the vast majority of the UK's economic output.
Cost of living trade off
The latest inflation figure also applies as the uprating to tens of billions in welfare payments next April.
By law, benefits such as personal independence payment (PIP) and carer's allowance must rise in line with September's consumer price index (CPI) measure of inflation.
The figure also confirms that the Triple Lock will see the State Pension increase by 3.9% next April.
There is one form of relief here - food price inflation remains largely unaffected by the energy shock.
While higher inflation at a time of frozen tax thresholds will raise more tax in cash terms, it will also increase the cost of public services, including likely union pay demands.
All the while, UK borrowing costs have risen alongside most of the advanced world as the US-Israel war against Iran has intensified.
The Jackdaw gas field decision is seen as the start of a run of "pro growth" pre-Budget announcements.
It sends a directional message, but will not fundamentally change the trade off between cost of living breathing space, and delivering a Budget that convinces the markets and investors.
The fact the borrowing costs gap has narrowed a bit with other G7 nations, and the IMF praised pencilled-in plans to shrink borrowing, provided a platform for the chancellor's Budget.
The latest economic numbers amply illustrate the challenge of actually delivering them.`,
    bodyJa: `Faisal Islam: Inflation and borrowing figures illustrate chancellor's Budget challenge
- Published
The Chancellor was on a early flight to North East Scotland on Wednesday to announce new North Sea energy approvals as the last set of major economic figures dropped.
From a mile high, as well as close up, the figures for inflation and for the public finances set out his Budget balancing act in clear terms.
The National Debt has topped £3 trillion for the first time in the official figures.
The headline rate of inflation has hit 3.5% and is surely heading back up to 4% in the coming months.
Borrowing is running ahead of forecasts, as spending and interest costs increase.
These show the constraints for John Healey as he puts the finishing touches to his statement next week.
On the one hand he says he wants to give "breathing space" to consumers yet again feeling the heat from cost of living pressures.
The public finances remain under pressure, however, from the double whammy of rising inflation and borrowing costs.
While inflation was of course expected to increase as petrol and diesel prices surged, in some cases, to records, other measures of underlying inflation also increased.
From airfares to computer game download prices, there are the first signs of stickier forms of price pressure and of higher inflation becoming more embedded, suggesting elevated price rises are not temporary. Capital Economics now expects the main measure of inflation to peak at 4.2% next year.
The Bank of England carefully watches services inflation and core inflation, and this ups the odds significantly for a rise in interest rates next month.
The services sector, which includes everything from law and banking to retail, hospitality and tourism, makes up the vast majority of the UK's economic output.
Cost of living trade off
The latest inflation figure also applies as the uprating to tens of billions in welfare payments next April.
By law, benefits such as personal independence payment (PIP) and carer's allowance must rise in line with September's consumer price index (CPI) measure of inflation.
The figure also confirms that the Triple Lock will see the State Pension increase by 3.9% next April.
There is one form of relief here - food price inflation remains largely unaffected by the energy shock.
While higher inflation at a time of frozen tax thresholds will raise more tax in cash terms, it will also increase the cost of public services, including likely union pay demands.
All the while, UK borrowing costs have risen alongside most of the advanced world as the US-Israel war against Iran has intensified.
The Jackdaw gas field decision is seen as the start of a run of "pro growth" pre-Budget announcements.
It sends a directional message, but will not fundamentally change the trade off between cost of living breathing space, and delivering a Budget that convinces the markets and investors.
The fact the borrowing costs gap has narrowed a bit with other G7 nations, and the IMF praised pencilled-in plans to shrink borrowing, provided a platform for the chancellor's Budget.
The latest economic numbers amply illustrate the challenge of actually delivering them.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cm3wv9pn22e5o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-21T10:20:15+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/d837/live/21441720-cd34-11f1-935f-b9c228680c6f.jpg",
    readTime: 8,
  },
  {
    id: "inflation-and-government-borrowing-highe-1e50a91f",
    title: "Inflation and government borrowing highest for a year ahead of next week's Budget",
    titleJa: "Inflation and government borrowing highest for a year ahead of next week's Budget",
    summaryJa: "Inflation accelerated to 3.5% from 3.1% in the year to September, according to the Office for National Statistics (ONS).",
    bodyOriginal: `Inflation and government borrowing highest for a year ahead of next week's Budget
- Published
UK inflation and government borrowing both hit their highest in a year on Wednesday, adding to the pressure on Chancellor John Healey ahead of his first Budget in a week.
The pace of UK price rises accelerated to 3.5% in the year to September, pushed up by sharp increases in petrol and diesel prices.
The inflation figures came as UK government borrowing jumped to nearly £25bn in September, which means borrowing for the financial year to date is running £6bn above official forecasts.
Healey has promised a Budget which will keep to Labour's commitment not to hike the three main taxes - income tax, National Insurance and VAT - while sticking to the party's fiscal rules.
Inflation, the rate at which prices are rising, jumped from 3.1% in the year to August to 3.5% in the year to September. It is the highest inflation has been since October 2025, according to the Office for National Statistics (ONS).
The cost of filling up a vehicle has soared in recent months as conflicts in the Middle East and Europe continue to squeeze global oil supplies.
The effective closure of the Strait of Hormuz by Iran after US and Israeli attacks has severely disrupted a major global supply line for crude oil, while oil refining capacity has been hampered globally by Russian and Ukrainian attacks on each other's infrastructure after Russia's invasion of Ukraine.
Petrol prices in September were the highest since August 2022, the ONS said, while diesel also rocketed.
The average price of petrol rose by 8.2p per litre to 169.5p per litre between August and September, while diesel rose to 192.5p per litre.
Motor fuel prices overall rose by 29.8% in the period covered by the figures.
ONS chief economist Grant Fitzner said September's "notable" increase meant inflation was at its highest rate in almost a year.
As well as fuel prices, the increase was driven by rising prices for airfares, computer games and live events, Fitzner said.
September's inflation figure is also important because it suggests how benefits will increase next April.
It means the state pension will most likely rise by 3.9%, in line with average wage rises from May to July, due to the triple lock.
The inflation figure for September also dictates how other benefits will rise in April. By law, benefits such as personal independence payment (PIP) and carer's allowance must rise in line with September's consumer price index (CPI) measure of inflation.
With a week to go until he delivers the Budget, Healey said: "We know that price rises from conflicts in the Middle East and Europe are hitting Britain and countries worldwide."
He said the International Monetary Fund last week had praised the UK government for its "fiscal discipline", and that the government has just given the go-ahead for getting more gas from the North Sea's Jackdaw field.
The Budget on 28 October will "keep up this momentum", he said, by sticking to the government's self-imposed fiscal rules, and by driving "growth in every postcode, while giving businesses and families some breathing space".
But the inflation figure came as the ONS said the government borrowed £24.5bn in September, £1.8bn higher than a year earlier, as higher inflation helped to push up debt interest costs.
The overshoot means, cumulatively, the government has borrowed £6bn more this year than the Office for Budget Responsibility (OBR), which scores government spending plans, had forecast.
Despite overall debt topping £3tn for the first time, debt as a proportion of the UK's economic output - the measure used by the government to judge whether it is in line with its fiscal rules - fell.
The Conservatives said higher inflation and borrowing showed Labour had "lost control of the economy".
Shadow Chancellor Andrew Griffith called for Healey to use his Budget to "tackle the deficit, and reduce the red tape and net zero costs that are driving up the cost of living for families".
He added that the Conservatives would cut taxes, the costs of benefits and "wasteful" spending to "make our country prosperous again".
Ruth Gregory, deputy chief UK economist at Capital Economics, said the borrowing figures "painted a dismal picture" ahead of Healey's Budget. She said the amount borrowed in September was higher than analyst expectations as well as spending watchdog the Office for Budget Responsibility (OBR)'s forecast.
"This reinforces our view that the Chancellor will deliver a cautious Budget on 28 October that has little net impact on the economy and leaves the toughest fiscal choices for next year," she said.`,
    bodyJa: `Inflation and government borrowing highest for a year ahead of next week's Budget
- Published
UK inflation and government borrowing both hit their highest in a year on Wednesday, adding to the pressure on Chancellor John Healey ahead of his first Budget in a week.
The pace of UK price rises accelerated to 3.5% in the year to September, pushed up by sharp increases in petrol and diesel prices.
The inflation figures came as UK government borrowing jumped to nearly £25bn in September, which means borrowing for the financial year to date is running £6bn above official forecasts.
Healey has promised a Budget which will keep to Labour's commitment not to hike the three main taxes - income tax, National Insurance and VAT - while sticking to the party's fiscal rules.
Inflation, the rate at which prices are rising, jumped from 3.1% in the year to August to 3.5% in the year to September. It is the highest inflation has been since October 2025, according to the Office for National Statistics (ONS).
The cost of filling up a vehicle has soared in recent months as conflicts in the Middle East and Europe continue to squeeze global oil supplies.
The effective closure of the Strait of Hormuz by Iran after US and Israeli attacks has severely disrupted a major global supply line for crude oil, while oil refining capacity has been hampered globally by Russian and Ukrainian attacks on each other's infrastructure after Russia's invasion of Ukraine.
Petrol prices in September were the highest since August 2022, the ONS said, while diesel also rocketed.
The average price of petrol rose by 8.2p per litre to 169.5p per litre between August and September, while diesel rose to 192.5p per litre.
Motor fuel prices overall rose by 29.8% in the period covered by the figures.
ONS chief economist Grant Fitzner said September's "notable" increase meant inflation was at its highest rate in almost a year.
As well as fuel prices, the increase was driven by rising prices for airfares, computer games and live events, Fitzner said.
September's inflation figure is also important because it suggests how benefits will increase next April.
It means the state pension will most likely rise by 3.9%, in line with average wage rises from May to July, due to the triple lock.
The inflation figure for September also dictates how other benefits will rise in April. By law, benefits such as personal independence payment (PIP) and carer's allowance must rise in line with September's consumer price index (CPI) measure of inflation.
With a week to go until he delivers the Budget, Healey said: "We know that price rises from conflicts in the Middle East and Europe are hitting Britain and countries worldwide."
He said the International Monetary Fund last week had praised the UK government for its "fiscal discipline", and that the government has just given the go-ahead for getting more gas from the North Sea's Jackdaw field.
The Budget on 28 October will "keep up this momentum", he said, by sticking to the government's self-imposed fiscal rules, and by driving "growth in every postcode, while giving businesses and families some breathing space".
But the inflation figure came as the ONS said the government borrowed £24.5bn in September, £1.8bn higher than a year earlier, as higher inflation helped to push up debt interest costs.
The overshoot means, cumulatively, the government has borrowed £6bn more this year than the Office for Budget Responsibility (OBR), which scores government spending plans, had forecast.
Despite overall debt topping £3tn for the first time, debt as a proportion of the UK's economic output - the measure used by the government to judge whether it is in line with its fiscal rules - fell.
The Conservatives said higher inflation and borrowing showed Labour had "lost control of the economy".
Shadow Chancellor Andrew Griffith called for Healey to use his Budget to "tackle the deficit, and reduce the red tape and net zero costs that are driving up the cost of living for families".
He added that the Conservatives would cut taxes, the costs of benefits and "wasteful" spending to "make our country prosperous again".
Ruth Gregory, deputy chief UK economist at Capital Economics, said the borrowing figures "painted a dismal picture" ahead of Healey's Budget. She said the amount borrowed in September was higher than analyst expectations as well as spending watchdog the Office for Budget Responsibility (OBR)'s forecast.
"This reinforces our view that the Chancellor will deliver a cautious Budget on 28 October that has little net impact on the economy and leaves the toughest fiscal choices for next year," she said.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c6gel2xv4493o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-21T10:16:17+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/295f/live/2e2e9560-cd3d-11f1-9a39-31b474234113.jpg",
    readTime: 10,
  },
  {
    id: "what-is-happening-to-uk-prices-cb190e87",
    title: "What is happening to UK prices?",
    titleJa: "What is happening to UK prices?",
    summaryJa: "What is happening to UK prices?- Published",
    bodyOriginal: `What is happening to UK prices?
- Published
Inflation in the UK rose to 3.5% in the year to September, the highest rate in nearly a year and above the Bank of England's 2% target.
The rise was slightly higher than economists had predicted, driven by higher petrol and diesel prices.
Inflation is widely expected to rise again in the coming months.
What is inflation?
Inflation is the increase in the price of something over time.
For example, if a bottle of milk costs £1 but is £1.05 a year later, then annual milk inflation is 5%.
How is the UK's inflation rate measured and what does it mean for UK interest rates?
The prices of hundreds of everyday items, including food and fuel, are tracked by the Office for National Statistics (ONS).
This virtual "basket of goods" is regularly updated to reflect shopping trends, with alcohol-free beer, dashboard cameras, and pet grooming equipment among items added in 2026, while premium bottled lager and sheets of wrapping paper were removed.
The ONS uses price changes in the basket of goods over the previous 12 months to calculate inflation.
The main inflation measure is called the Consumer Prices Index (CPI), external, and the latest figure is published every month.
The Bank of England looks closely at the inflation figures when deciding whether to increase, lower or hold its base interest rate, which is currently 3.75%.
Putting rates up makes borrowing more expensive, giving people and businesses less money to spend, reducing demand for goods and slowing price rises.
But it is a careful balancing act – increasing borrowing costs also risks harming the economy.
For example, homeowners face higher mortgage repayments, which can outweigh better savings deals.
Businesses also borrow less, making them less likely to create jobs. Some may cut staff and reduce investment.
What is happening to UK inflation?
Although CPI inflation of 3.5% remains above the Bank of England's 2% target, it is well below the 11.1% figure reached in October 2022 as gas and oil prices soared in the wake of Russia's full-scale invasion of Ukraine.
That was the highest rate for 40 years.
While inflation has fallen significantly since then, prices have not. They have just risen less quickly.
The higher figure for September was mostly caused by higher prices for motor fuel, which rose by 29.8% compared to September last year.
Food price inflation remained at 1.3%.
But it can take a year for changes in the cost of food to filter through to the shop floor because of the way supply chains work, so prices could still rise as a result of the widespread disruption caused by the war in Iran.
How do energy prices affect UK inflation?
Inflation soared in 2022 because oil and gas were in greater demand after the Covid pandemic, and energy prices surged again when Russia invaded Ukraine.
Before the war in the Middle East broke out, UK inflation had been expected to be at or around the target level of 2% over the next five years, according to the official forecasts published in March 2026.
But in April, the Bank of England warned that disruption to global energy markets could push UK inflation as high as 6% in the worst-case scenario.
When the latest ceasefire took effect, analysts said it could limit further inflation hikes. Oil prices initially fell sharply after the deal was announced, but have risen again since the US and Iran resumed attacks in the Strait of Hormuz in July.
As a result, UK petrol prices are likely to climb back up. This - coupled with the 4% increase in household energy bills from 1 October when the latest Ofgem price cap took effect - is expected to push UK inflation higher.
As part of his pledge to provide "breathing space" for households struggling with the cost of living, Prime Minister Andy Burnham scrapped VAT on household electricity bills in October. It is predicted to have a small downward impact on inflation.
Precisely because food and energy prices can be very volatile, the Bank of England also considers other economic measures such as "core inflation", which excludes these costs.
Core CPI was 2.8% in the 12 months to September 2026, up from 2.6% in the 12 months to August.
Why are UK fuel prices rising again?
- Published2 October
What will the energy cap changes mean for my bills?
- Published28 September
What does an Andy Burnham-led government mean for your money?
- Published22 July
What is happening to UK interest rates and will they fall again?
The Bank cut interest rates six times between August 2024 and June 2026, which brought rates down to 3.75%, the lowest level since early 2023.
In April, the Bank's Monetary Policy Committee indicated it would act "forcefully" if oil prices did not start to fall, with up to six rate hikes in a worst-case scenario.
At its September meeting, Bank of England governor Andrew Bailey said energy price volatility made it more likely that interest rates would rise.
Are wages keeping up with inflation?
The Bank also looks closely at what is happening to wages and unemployment.
The latest official figures show that regular pay in the UK grew ahead of inflation in the three months to August.
Average annual growth in pay, excluding bonuses, during the three-month period was 3.7%.
After taking inflation into account, it means regular pay grew by 0.8% between June and August.
The 20-somethings juggling three jobs to make ends meet
- Published21 April
What needs to change to get more people working?
- Published5 November 2025
What is happening to inflation and interest rates in Europe and the US?
The US and eurozone countries have also been trying to limit price increases, but also face challenges with inflation.
The inflation rate for countries using the euro was 3.8% in September, according to EU data, external - up from 3.2% in August.
The European Central Bank (ECB) has raised interest rates twice in recent months to 2.5%.
US inflation was in 3.7% in September, up from 3.4% in August, with prices there also affected by higher fuel costs.
The Federal Reserve cited "too high" inflation when it raised interest rates for the first time in three years in September, to a range of 3.75%-4%.
The move came despite fierce opposition from President Donald Trump, who had called for rates to be cut.
Get in touch
Have you been affected by the issues discussed in this story?`,
    bodyJa: `What is happening to UK prices?
- Published
Inflation in the UK rose to 3.5% in the year to September, the highest rate in nearly a year and above the Bank of England's 2% target.
The rise was slightly higher than economists had predicted, driven by higher petrol and diesel prices.
Inflation is widely expected to rise again in the coming months.
What is inflation?
Inflation is the increase in the price of something over time.
For example, if a bottle of milk costs £1 but is £1.05 a year later, then annual milk inflation is 5%.
How is the UK's inflation rate measured and what does it mean for UK interest rates?
The prices of hundreds of everyday items, including food and fuel, are tracked by the Office for National Statistics (ONS).
This virtual "basket of goods" is regularly updated to reflect shopping trends, with alcohol-free beer, dashboard cameras, and pet grooming equipment among items added in 2026, while premium bottled lager and sheets of wrapping paper were removed.
The ONS uses price changes in the basket of goods over the previous 12 months to calculate inflation.
The main inflation measure is called the Consumer Prices Index (CPI), external, and the latest figure is published every month.
The Bank of England looks closely at the inflation figures when deciding whether to increase, lower or hold its base interest rate, which is currently 3.75%.
Putting rates up makes borrowing more expensive, giving people and businesses less money to spend, reducing demand for goods and slowing price rises.
But it is a careful balancing act – increasing borrowing costs also risks harming the economy.
For example, homeowners face higher mortgage repayments, which can outweigh better savings deals.
Businesses also borrow less, making them less likely to create jobs. Some may cut staff and reduce investment.
What is happening to UK inflation?
Although CPI inflation of 3.5% remains above the Bank of England's 2% target, it is well below the 11.1% figure reached in October 2022 as gas and oil prices soared in the wake of Russia's full-scale invasion of Ukraine.
That was the highest rate for 40 years.
While inflation has fallen significantly since then, prices have not. They have just risen less quickly.
The higher figure for September was mostly caused by higher prices for motor fuel, which rose by 29.8% compared to September last year.
Food price inflation remained at 1.3%.
But it can take a year for changes in the cost of food to filter through to the shop floor because of the way supply chains work, so prices could still rise as a result of the widespread disruption caused by the war in Iran.
How do energy prices affect UK inflation?
Inflation soared in 2022 because oil and gas were in greater demand after the Covid pandemic, and energy prices surged again when Russia invaded Ukraine.
Before the war in the Middle East broke out, UK inflation had been expected to be at or around the target level of 2% over the next five years, according to the official forecasts published in March 2026.
But in April, the Bank of England warned that disruption to global energy markets could push UK inflation as high as 6% in the worst-case scenario.
When the latest ceasefire took effect, analysts said it could limit further inflation hikes. Oil prices initially fell sharply after the deal was announced, but have risen again since the US and Iran resumed attacks in the Strait of Hormuz in July.
As a result, UK petrol prices are likely to climb back up. This - coupled with the 4% increase in household energy bills from 1 October when the latest Ofgem price cap took effect - is expected to push UK inflation higher.
As part of his pledge to provide "breathing space" for households struggling with the cost of living, Prime Minister Andy Burnham scrapped VAT on household electricity bills in October. It is predicted to have a small downward impact on inflation.
Precisely because food and energy prices can be very volatile, the Bank of England also considers other economic measures such as "core inflation", which excludes these costs.
Core CPI was 2.8% in the 12 months to September 2026, up from 2.6% in the 12 months to August.
Why are UK fuel prices rising again?
- Published2 October
What will the energy cap changes mean for my bills?
- Published28 September
What does an Andy Burnham-led government mean for your money?
- Published22 July
What is happening to UK interest rates and will they fall again?
The Bank cut interest rates six times between August 2024 and June 2026, which brought rates down to 3.75%, the lowest level since early 2023.
In April, the Bank's Monetary Policy Committee indicated it would act "forcefully" if oil prices did not start to fall, with up to six rate hikes in a worst-case scenario.
At its September meeting, Bank of England governor Andrew Bailey said energy price volatility made it more likely that interest rates would rise.
Are wages keeping up with inflation?
The Bank also looks closely at what is happening to wages and unemployment.
The latest official figures show that regular pay in the UK grew ahead of inflation in the three months to August.
Average annual growth in pay, excluding bonuses, during the three-month period was 3.7%.
After taking inflation into account, it means regular pay grew by 0.8% between June and August.
The 20-somethings juggling three jobs to make ends meet
- Published21 April
What needs to change to get more people working?
- Published5 November 2025
What is happening to inflation and interest rates in Europe and the US?
The US and eurozone countries have also been trying to limit price increases, but also face challenges with inflation.
The inflation rate for countries using the euro was 3.8% in September, according to EU data, external - up from 3.2% in August.
The European Central Bank (ECB) has raised interest rates twice in recent months to 2.5%.
US inflation was in 3.7% in September, up from 3.4% in August, with prices there also affected by higher fuel costs.
The Federal Reserve cited "too high" inflation when it raised interest rates for the first time in three years in September, to a range of 3.75%-4%.
The move came despite fierce opposition from President Donald Trump, who had called for rates to be cut.
Get in touch
Have you been affected by the issues discussed in this story?`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c17rgd8e9gjo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-21T08:35:47+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/73aa/live/9eb3d5f0-a8dd-11f0-a522-95977dce8b09.jpg",
    readTime: 10,
  },
  {
    id: "why-is-elon-musk-plotting-a-mega-merger-dcc1295a",
    title: "Why is Elon Musk plotting a mega-merger of SpaceX and Tesla?",
    titleJa: "Why is Elon Musk plotting a mega-merger of SpaceX and Tesla?",
    summaryJa: "Musk says there's \"a lot to be gained\" by combining the firms in what would be the biggest merger in history.",
    bodyOriginal: `Why is Elon Musk plotting a mega-merger of SpaceX and Tesla?
- Published
Elon Musk has spent years building Tesla and SpaceX into a pair of trillion-dollar technology empires. Now, he is considering bringing them together.
Asked on Tuesday whether a merger would be a good idea, Musk was clear: "Yes."
The prospect is more than hypothetical. Musk said special committees have been formed to assess a potential deal, although he stressed that there is no guarantee a merger will happen and that nothing has been agreed.
With Tesla valued at roughly $1.5 trillion (£1.1 trillion) and SpaceX at $2 trillion, a combination of the two companies would mark the largest merger ever.
Any deal would also need shareholder backing. But Musk said he saw "a lot to be gained" in bringing the businesses together.
How likely is the merger?
"In my opinion, 100%. It's just a question of when," says David Nicholson, chief technology advisor at market research firm The Futurum Group.
The unveiling of the Tesla Roadster last week - a futuristic electric car powered by SpaceX rocket thrusters - served as a "symbolic embodiment" hinting at the two Musk companies merging, Nicholson said.
Musk, chief executive of both SpaceX and Tesla, said bringing the firms together would be beneficial given the work each does around chips, artificial intelligence (AI) and other technology projects.
Specifically, the deal would combine Tesla's cars, robots and self-driving technology with SpaceX's rockets, data centres, satellites and telecommunications operations.
The move could be a step towards Musk's mission to build a self-sustaining city on Mars - a vision that has invited sceptics but also plenty of backers.
Over the past year, Musk has moved to consolidate his businesses, with SpaceX acquiring xAI and X, formerly Twitter, before going public this year.
But the merger would ultimately be decided by shareholders, with half of Tesla's needed to back the deal, a threshold even Musk described as "quite a high hurdle".
Musk, as boss of both companies, cannot participate in shareholder discussions.
Even so, Musk, a key shareholder of Tesla, will likely get his way in the next few years, said investment analyst Dan Sheehan from Telos Wealth Advisors.
He believes shareholders will back the deal as the technology the companies develop complement each other, Sheehan said.
But the merger would mean that Tesla shareholders will likely hold a "smaller slice of a much larger and more complex business," he added.
"There's no real precedent for how a public company like Tesla gets priced in this," Sheehan said.
SpaceX shares rose 8% in after hours trading while shares of Tesla climbed by 2%.
What would it mean for customers?
Experts told the BBC that Tesla drivers are unlikely to see much drastic change in the near term, even if the two companies combine.
In fact, vehicles seem almost like "an afterthought", overshadowed by the potential to combine the Tesla and SpaceX's tech capabilities, Nicholson said.
Changes are already underway at Tesla. The carmaker said earlier this year that it would prioritise its best-selling Model Y and Model 3, shifting focus away from less popular models.
Tesla also started using a manufacturing plant in California to produce humanoid robots, known as Optimus.
Pairing Tesla's self-driving technology and robotics with SpaceX's AI and satellite network could result in more capable vehicles, Sheehan said.
"The question is how much priority cars get inside a company increasingly driven by AI infrastructure," he added.
The recent Roadster showcase suggests SpaceX technology could be pulled into future Tesla products, which could attract more customers, said Tu Le, the founder of advisory firm Sino Auto Insights.
The Cybertruck-maker faces intense competition from Chinese carmakers like BYD, which overtook Tesla as the world's biggest EV maker in January.
What does Musk get out of it?
The biggest winner is probably Musk - the world's richest man who also became the world's first trillionaire earlier this year.
The merger would give Musk greater voting control over the combined company than he currently has at Tesla, a factor the special committee assessing the deal would have to consider.
A single company makes it easier for Musk to run his AI strategy the way he wants, Sheehan said.
"The deal itself doesn't add to Musk's wealth, but it concentrates it further in one stock," he said.
However, the merger could attract scrutiny over Musk, already a polarising figure in the US, Nicholson said.
The move could also face more regulatory pressure if Democrats - many of whom have been critical of Musk - win more seats in the US midterm elections next month.
Shareholders have backed Musk's desires before. Last year, Tesla investors approved an unprecedented compensation package for Musk valued around $1tn.
"I honestly don't think Musk will be keeping track of what the merger will do for his wealth," Nicholson said.
The deal also brings Musk closer to what Nicholson says is "his mission in life": colonising Mars.
- Published6 days ago
- Published12 June`,
    bodyJa: `Why is Elon Musk plotting a mega-merger of SpaceX and Tesla?
- Published
Elon Musk has spent years building Tesla and SpaceX into a pair of trillion-dollar technology empires. Now, he is considering bringing them together.
Asked on Tuesday whether a merger would be a good idea, Musk was clear: "Yes."
The prospect is more than hypothetical. Musk said special committees have been formed to assess a potential deal, although he stressed that there is no guarantee a merger will happen and that nothing has been agreed.
With Tesla valued at roughly $1.5 trillion (£1.1 trillion) and SpaceX at $2 trillion, a combination of the two companies would mark the largest merger ever.
Any deal would also need shareholder backing. But Musk said he saw "a lot to be gained" in bringing the businesses together.
How likely is the merger?
"In my opinion, 100%. It's just a question of when," says David Nicholson, chief technology advisor at market research firm The Futurum Group.
The unveiling of the Tesla Roadster last week - a futuristic electric car powered by SpaceX rocket thrusters - served as a "symbolic embodiment" hinting at the two Musk companies merging, Nicholson said.
Musk, chief executive of both SpaceX and Tesla, said bringing the firms together would be beneficial given the work each does around chips, artificial intelligence (AI) and other technology projects.
Specifically, the deal would combine Tesla's cars, robots and self-driving technology with SpaceX's rockets, data centres, satellites and telecommunications operations.
The move could be a step towards Musk's mission to build a self-sustaining city on Mars - a vision that has invited sceptics but also plenty of backers.
Over the past year, Musk has moved to consolidate his businesses, with SpaceX acquiring xAI and X, formerly Twitter, before going public this year.
But the merger would ultimately be decided by shareholders, with half of Tesla's needed to back the deal, a threshold even Musk described as "quite a high hurdle".
Musk, as boss of both companies, cannot participate in shareholder discussions.
Even so, Musk, a key shareholder of Tesla, will likely get his way in the next few years, said investment analyst Dan Sheehan from Telos Wealth Advisors.
He believes shareholders will back the deal as the technology the companies develop complement each other, Sheehan said.
But the merger would mean that Tesla shareholders will likely hold a "smaller slice of a much larger and more complex business," he added.
"There's no real precedent for how a public company like Tesla gets priced in this," Sheehan said.
SpaceX shares rose 8% in after hours trading while shares of Tesla climbed by 2%.
What would it mean for customers?
Experts told the BBC that Tesla drivers are unlikely to see much drastic change in the near term, even if the two companies combine.
In fact, vehicles seem almost like "an afterthought", overshadowed by the potential to combine the Tesla and SpaceX's tech capabilities, Nicholson said.
Changes are already underway at Tesla. The carmaker said earlier this year that it would prioritise its best-selling Model Y and Model 3, shifting focus away from less popular models.
Tesla also started using a manufacturing plant in California to produce humanoid robots, known as Optimus.
Pairing Tesla's self-driving technology and robotics with SpaceX's AI and satellite network could result in more capable vehicles, Sheehan said.
"The question is how much priority cars get inside a company increasingly driven by AI infrastructure," he added.
The recent Roadster showcase suggests SpaceX technology could be pulled into future Tesla products, which could attract more customers, said Tu Le, the founder of advisory firm Sino Auto Insights.
The Cybertruck-maker faces intense competition from Chinese carmakers like BYD, which overtook Tesla as the world's biggest EV maker in January.
What does Musk get out of it?
The biggest winner is probably Musk - the world's richest man who also became the world's first trillionaire earlier this year.
The merger would give Musk greater voting control over the combined company than he currently has at Tesla, a factor the special committee assessing the deal would have to consider.
A single company makes it easier for Musk to run his AI strategy the way he wants, Sheehan said.
"The deal itself doesn't add to Musk's wealth, but it concentrates it further in one stock," he said.
However, the merger could attract scrutiny over Musk, already a polarising figure in the US, Nicholson said.
The move could also face more regulatory pressure if Democrats - many of whom have been critical of Musk - win more seats in the US midterm elections next month.
Shareholders have backed Musk's desires before. Last year, Tesla investors approved an unprecedented compensation package for Musk valued around $1tn.
"I honestly don't think Musk will be keeping track of what the merger will do for his wealth," Nicholson said.
The deal also brings Musk closer to what Nicholson says is "his mission in life": colonising Mars.
- Published6 days ago
- Published12 June`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cr93z1e87e0do?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-21T06:36:39+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/a691/live/0777e580-cd28-11f1-bc2e-018d645d8d21.png",
    readTime: 10,
  },
  {
    id: "australian-data-center-operator-nextdc-s-fce62826",
    title: "Australian data center operator NextDC's shares plunge 40% after it slashes earnings forecast",
    titleJa: "Australian data center operator NextDC's shares plunge 40% after it slashes earnings forecast",
    summaryJa: "The company cited power supply delays at its Melbourne facility amid local community and stakeholder opposition for lowering earnings forecast.",
    bodyOriginal: `Shares of Australia's NextDC plunged 39.5% on Wednesday after the data center operator slashed its annual earnings forecast, citing power supply delays at its Melbourne facility amid local community and stakeholder opposition.
The company lowered its fiscal 2027 revenue guidance to between $475 million Australian dollars and A$500 million, from A$615 million to A$640 million forecast earlier, while cutting its underlying earnings before interest, taxes, depreciation and amortization, or EBITDA, forecast to A$245 million to A$265 million from A$385 million to A$410 million.
The delays to power stem from the suspension of infrastructure upgrades at the company's M3 Melbourne data center amid community opposition, with electricity distributor Jemena not expecting to resume work before February 2027, according to NextDC.
Jemena cited safety concerns and restricted access to work sites due to community opposition, as well as a lack of consent from the local council pending further community consultation.
Citi said in a note that NextDC's power delays could affect earnings beyond fiscal 2027, citing delays to approvals for the M3 expansion and a longer-than-expected timeline for transformer upgrades.
As Australia grapples with growing concerns over the impact of data center developments on local communities, Treasurer Jim Chalmers said the government was working to establish national standards for investment.
Chalmers told CNBC's "Squawk Box Asia" on Wednesday that the government welcomes investment in data centers and AI infrastructure, provided it aligns with the country's national interest, adding that the government was finalizing national investment standards to address concerns surrounding AI deployment.
Australia is not alone in facing opposition to data center projects, there has been growing push back against data center developments worldwide, amid concerns over their impact on local communities and the environment.
NextDC shares have declined for seven straight weeks, and are on course to end lower for the eighth week.`,
    bodyJa: `Shares of Australia's NextDC plunged 39.5% on Wednesday after the data center operator slashed its annual earnings forecast, citing power supply delays at its Melbourne facility amid local community and stakeholder opposition.
The company lowered its fiscal 2027 revenue guidance to between $475 million Australian dollars and A$500 million, from A$615 million to A$640 million forecast earlier, while cutting its underlying earnings before interest, taxes, depreciation and amortization, or EBITDA, forecast to A$245 million to A$265 million from A$385 million to A$410 million.
The delays to power stem from the suspension of infrastructure upgrades at the company's M3 Melbourne data center amid community opposition, with electricity distributor Jemena not expecting to resume work before February 2027, according to NextDC.
Jemena cited safety concerns and restricted access to work sites due to community opposition, as well as a lack of consent from the local council pending further community consultation.
Citi said in a note that NextDC's power delays could affect earnings beyond fiscal 2027, citing delays to approvals for the M3 expansion and a longer-than-expected timeline for transformer upgrades.
As Australia grapples with growing concerns over the impact of data center developments on local communities, Treasurer Jim Chalmers said the government was working to establish national standards for investment.
Chalmers told CNBC's "Squawk Box Asia" on Wednesday that the government welcomes investment in data centers and AI infrastructure, provided it aligns with the country's national interest, adding that the government was finalizing national investment standards to address concerns surrounding AI deployment.
Australia is not alone in facing opposition to data center projects, there has been growing push back against data center developments worldwide, amid concerns over their impact on local communities and the environment.
NextDC shares have declined for seven straight weeks, and are on course to end lower for the eighth week.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/21/australia-data-center-operator-nexdc-datacenter.html",
    publishedAt: "2026-10-21T02:55:38+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "elice-s-huge-stock-swings-show-ai-s-spen-c31ccfba",
    title: "Elice's huge stock swings show AI's spending boom is getting more investor scrutiny",
    titleJa: "Elice's huge stock swings show AI's spending boom is getting more investor scrutiny",
    summaryJa: "The AI boom is entering a more unforgiving phase, as investors question whether the billions poured into data centers will translate into sustainable profits.",
    bodyOriginal: `The artificial intelligence boom may be entering a more unforgiving phase, as investors increasingly question whether the billions poured into data centers will translate into sustainable profits.
A bruising stock market debut by South Korean AI infrastructure provider Elice has become the latest warning sign that investors may be more closely scrutinizing ambitious expansion plans and paths to profitability.
Shares of the Seoul-based neocloud company plunged 32% in their trading debut Tuesday, even after it raised 201 billion won ($151 million) in an initial public offering priced at the top of its marketed range. The stock then rebounded by about 30% on Wednesday. Neoclouds offer specialized cloud infrastructure dedicated to AI workloads.
"This is a gut check moment in the tech trade," said Dan Ives, tech analyst at Yorkville Ives. "Investors are trying to better discern between the winners and losers and if there are any weak links in the tech AI food chain."
"Patience is wearing thin and scrutiny will be elevated especially for those taking on a major debt load like some of the neoclouds," he added.
The weak debut underscores a broader shift in sentiment toward the AI trade, where rising borrowing costs and concerns over debt-fueled expansion may force investors to distinguish between companies generating cash from the boom and those spending heavily in anticipation of future demand.
"The AI trade has moved from a phase where the size of the capex announcement was itself viewed positively to one where investors are asking who can actually earn an adequate return on that capital," said Billy Leung of Global X ETFs. "The market is distinguishing between companies that need capital to survive the build-out and companies that are being paid as the build-out continues."
The most vulnerable companies are neocloud providers expanding faster than their ability to generate cash, particularly those heavily dependent on external financing, according to Leung.
CoreWeave, one of the largest neocloud providers, is "the poster child of this whole thing," according to John Blank, chief equity strategist at Zacks Investment Research. "This is broad market stress, not just speculation," he said, pointing to widening credit spreads.
Companies borrowing heavily to build computing capacity could face a squeeze if financing costs rise faster than revenue, particularly where construction expenses and depreciation mount before facilities reach full utilization.
The shift is particularly significant for Asia, where technology markets are heavily exposed to the semiconductor and memory-chip industries that have powered the global AI investment frenzy.
"U.S. semiconductor and AI plays are overbuilt. And in South Korea, even more overbuilt," Blank said.
Beneficiaries of demand
South Korea's SK Hynix and Samsung Electronics have been among the biggest beneficiaries of soaring demand for advanced memory chips, but their shares have come under pressure as investors reassess the sustainability of AI spending.
"Asia is simply much more directly geared to the hardware and memory side of the AI trade, so when investors question AI capex and financing, Korea and other North Asian technology markets feel it disproportionately," Leung said.
He added that rising earnings estimates across South Korea and Taiwan suggest the recent selloff reflects deteriorating sentiment and shrinking valuations rather than a sudden collapse in demand.
The change reflects a growing divide between companies with the financial firepower to sustain aggressive AI investments and those relying heavily on borrowing to fund expansion.
HSBC Chief Executive Officer Georges Elhedery warned that investors and lenders must become more discerning about which data-center projects deserve financing.
"You have to look at the quality of the tenancy agreements," he said. "You have to look at the pricing of these contracts. Not all of them are of that level of virtuosity that you can support strongly. Some of them may be more challenging."`,
    bodyJa: `The artificial intelligence boom may be entering a more unforgiving phase, as investors increasingly question whether the billions poured into data centers will translate into sustainable profits.
A bruising stock market debut by South Korean AI infrastructure provider Elice has become the latest warning sign that investors may be more closely scrutinizing ambitious expansion plans and paths to profitability.
Shares of the Seoul-based neocloud company plunged 32% in their trading debut Tuesday, even after it raised 201 billion won ($151 million) in an initial public offering priced at the top of its marketed range. The stock then rebounded by about 30% on Wednesday. Neoclouds offer specialized cloud infrastructure dedicated to AI workloads.
"This is a gut check moment in the tech trade," said Dan Ives, tech analyst at Yorkville Ives. "Investors are trying to better discern between the winners and losers and if there are any weak links in the tech AI food chain."
"Patience is wearing thin and scrutiny will be elevated especially for those taking on a major debt load like some of the neoclouds," he added.
The weak debut underscores a broader shift in sentiment toward the AI trade, where rising borrowing costs and concerns over debt-fueled expansion may force investors to distinguish between companies generating cash from the boom and those spending heavily in anticipation of future demand.
"The AI trade has moved from a phase where the size of the capex announcement was itself viewed positively to one where investors are asking who can actually earn an adequate return on that capital," said Billy Leung of Global X ETFs. "The market is distinguishing between companies that need capital to survive the build-out and companies that are being paid as the build-out continues."
The most vulnerable companies are neocloud providers expanding faster than their ability to generate cash, particularly those heavily dependent on external financing, according to Leung.
CoreWeave, one of the largest neocloud providers, is "the poster child of this whole thing," according to John Blank, chief equity strategist at Zacks Investment Research. "This is broad market stress, not just speculation," he said, pointing to widening credit spreads.
Companies borrowing heavily to build computing capacity could face a squeeze if financing costs rise faster than revenue, particularly where construction expenses and depreciation mount before facilities reach full utilization.
The shift is particularly significant for Asia, where technology markets are heavily exposed to the semiconductor and memory-chip industries that have powered the global AI investment frenzy.
"U.S. semiconductor and AI plays are overbuilt. And in South Korea, even more overbuilt," Blank said.
Beneficiaries of demand
South Korea's SK Hynix and Samsung Electronics have been among the biggest beneficiaries of soaring demand for advanced memory chips, but their shares have come under pressure as investors reassess the sustainability of AI spending.
"Asia is simply much more directly geared to the hardware and memory side of the AI trade, so when investors question AI capex and financing, Korea and other North Asian technology markets feel it disproportionately," Leung said.
He added that rising earnings estimates across South Korea and Taiwan suggest the recent selloff reflects deteriorating sentiment and shrinking valuations rather than a sudden collapse in demand.
The change reflects a growing divide between companies with the financial firepower to sustain aggressive AI investments and those relying heavily on borrowing to fund expansion.
HSBC Chief Executive Officer Georges Elhedery warned that investors and lenders must become more discerning about which data-center projects deserve financing.
"You have to look at the quality of the tenancy agreements," he said. "You have to look at the pricing of these contracts. Not all of them are of that level of virtuosity that you can support strongly. Some of them may be more challenging."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/21/ai-boom-spending-profit.html",
    publishedAt: "2026-10-21T01:02:36+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "japan-exports-post-huge-miss-in-septembe-d1a57cdc",
    title: "Japan exports post huge miss in September as growth slows to 16.7%",
    titleJa: "Japan exports post huge miss in September as growth slows to 16.7%",
    summaryJa: "Japan's exports in September rose 16.7% from a year earlier, missing market expectations by a huge margin. Reuters-polled analysts had pegged exports growth at 20.1%.This is the second straight month that shipments from Japan have recorded a slowdown, after hitting a near four-year high in July.",
    bodyOriginal: `Japan's exports in September rose 16.7% from a year earlier, missing market expectations by a huge margin. Reuters-polled analysts had pegged exports growth at 20.1%.
This is the second straight month that shipments from Japan have recorded a slowdown, after hitting a near four-year high in July.
Growth was supported by continued strong semiconductor exports, with shipments rising 49.4% year on year by value.
Exports of machinery also bolstered growth, with semiconductor-related machinery shipments up 43.9% and power generation machinery exports climbing 22.6%.
In terms of destinations, shipments to mainland China — Japan's largest trading partner — rose 8.6%, while exports to the U.S. climbed 22.9%.
Exports have been the main driver of Japan's growth for the first two quarters of 2026, helping the world's fourth largest economy beat expectations in the first quarter, and supporting growth in the second.
Japan's imports in September grew 18.9%, also missing expectations of 19.6% from Reuters.
Tokyo's imports of petroleum climbed 51.1% by value in September, with inbound shipments from the U.S. surging nearly 820%, while those from the Middle East inching up just 1.5% as the conflict in the region continues to impede supplies.
Following the data release, the benchmark Nikkei 225 was up 1.8%, while the Topix gained 1.14%.
The data comes as the Bank of Japan is set to meet next week, and Reuters poll estimates indicate that the central bank is set to hold its policy rate steady at 1%.`,
    bodyJa: `Japan's exports in September rose 16.7% from a year earlier, missing market expectations by a huge margin. Reuters-polled analysts had pegged exports growth at 20.1%.
This is the second straight month that shipments from Japan have recorded a slowdown, after hitting a near four-year high in July.
Growth was supported by continued strong semiconductor exports, with shipments rising 49.4% year on year by value.
Exports of machinery also bolstered growth, with semiconductor-related machinery shipments up 43.9% and power generation machinery exports climbing 22.6%.
In terms of destinations, shipments to mainland China — Japan's largest trading partner — rose 8.6%, while exports to the U.S. climbed 22.9%.
Exports have been the main driver of Japan's growth for the first two quarters of 2026, helping the world's fourth largest economy beat expectations in the first quarter, and supporting growth in the second.
Japan's imports in September grew 18.9%, also missing expectations of 19.6% from Reuters.
Tokyo's imports of petroleum climbed 51.1% by value in September, with inbound shipments from the U.S. surging nearly 820%, while those from the Middle East inching up just 1.5% as the conflict in the region continues to impede supplies.
Following the data release, the benchmark Nikkei 225 was up 1.8%, while the Topix gained 1.14%.
The data comes as the Bank of Japan is set to meet next week, and Reuters poll estimates indicate that the central bank is set to hold its policy rate steady at 1%.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/21/japan-trade-exports-semiconductor-yen.html",
    publishedAt: "2026-10-21T00:44:16+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 4,
  },
  {
    id: "bull-markets-tend-to-peak-with-a-whimper-f9581561",
    title: "Bull markets tend to peak with a whimper, not a bang — but a 15% correction for the S&P 500 may be next",
    titleJa: "Bull markets tend to peak with a whimper, not a bang — but a 15% correction for the S&P 500 may be next",
    summaryJa: "Unlike bear-market bottoms, which typically end with a spasm of despair as traders throw in the towel, bull-market tops are far more gradual and less dramatic.",
    bodyOriginal: `Unlike bear-market bottoms, which typically end with a spasm of despair as traders throw in the towel, bull-market tops are far more gradual and less dramatic.`,
    bodyJa: `Unlike bear-market bottoms, which typically end with a spasm of despair as traders throw in the towel, bull-market tops are far more gradual and less dramatic.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/bull-markets-tend-to-peak-with-a-whimper-not-a-bang-but-a-15-correction-for-the-s-p-500-may-be-next-dab40e2c?mod=mw_rss_topstories",
    publishedAt: "2026-10-21T00:24:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-43495041",
    readTime: 2,
  },
  {
    id: "super-micro-s-stock-soars-after-surprise-abcf0e6d",
    title: "Super Micro’s stock soars after surprise update — with Dell and HPE shares joining the rally",
    titleJa: "Super Micro’s stock soars after surprise update — with Dell and HPE shares joining the rally",
    summaryJa: "Super Micro unexpectedly disclosed that its revenue and profitability could be much stronger than originally anticipated.",
    bodyOriginal: `Super Micro unexpectedly disclosed that its revenue and profitability could be much stronger than originally anticipated.`,
    bodyJa: `Super Micro unexpectedly disclosed that its revenue and profitability could be much stronger than originally anticipated.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/super-micros-stock-soars-after-surprise-update-with-dell-and-hpe-shares-joining-the-rally-1837a69f?mod=mw_rss_topstories",
    publishedAt: "2026-10-21T00:15:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-31427887",
    readTime: 2,
  },
  {
    id: "tesla-s-stock-rises-as-elon-musk-drops-n-550bbab7",
    title: "Tesla’s stock rises as Elon Musk drops new clues about a possible SpaceX merger",
    titleJa: "Tesla’s stock rises as Elon Musk drops new clues about a possible SpaceX merger",
    summaryJa: "Special committees at both companies are assessing merger prospects but a combination is no sure thing, Musk says.",
    bodyOriginal: `Special committees at both companies are assessing merger prospects but a combination is no sure thing, Musk says.`,
    bodyJa: `Special committees at both companies are assessing merger prospects but a combination is no sure thing, Musk says.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/teslas-stock-rises-as-elon-musk-drops-new-clues-about-a-possible-spacex-merger-8cc44fc2?mod=mw_rss_topstories",
    publishedAt: "2026-10-21T00:14:00+00:00",
    category: "自動車",
    imageUrl: "https://images.mktw.net/im-71362137",
    readTime: 2,
  },
  {
    id: "elon-musk-says-tesla-spacex-merger-being-02d0a294",
    title: "Elon Musk says Tesla-SpaceX merger being considered",
    titleJa: "Elon Musk says Tesla-SpaceX merger being considered",
    summaryJa: "Musk says special committees within both companies have been formed to look at a possible mega-merger.",
    bodyOriginal: `Elon Musk says Tesla-SpaceX merger being considered
- Published
Elon Musk has said he likes the idea of a merger of Tesla and SpaceX, two of his most notable companies, and it is under active consideration.
"Do I think it would be a good idea? Yes," Musk said during a call with financial analysts over the quarterly business results of SpaceX on Tuesday.
While Musk noted the certainty of such a merger should not be assumed, and it would need shareholders' support, he said special committees within both companies have been formed to examine the move.
"The special committees have not reached agreement on terms of any transaction and there's no guarantee that they will," Musk added. "But I do think there is a lot of merit to merging and a lot to be gained."
With Tesla valued roughly $1.5 trillion and SpaceX valued at $2 trillion, a combination of the two companies would mark one of the largest mergers in history.
Shares of SpaceX rose 8% in after hours trading.
The company, which builds space rockets and Starlink internet satellites, is now expanding into offering cloud compute capacity for other tech companies, like Anthropic and Google.
That line of business has become the most profitable part of SpaceX, bringing in $7.5bn according to the latest quarterly results. Starlink also tallied revenue of $5.2bn.
SpaceX as a whole, however, is not profitable and has lost $1.1bn so far this year.
Shares of Tesla, which reports its own quarterly results on Wednesday, rose 2% after being down slightly for weeks.
Over the last year, Musk has taken to bringing more of his various companies under fewer banners. Before it went public earlier this year, SpaceX acquired xAI and X, the platform formerly known as Twitter, both of which Musk owned.
The recent launch of Terafab, a combined effort to manufacture computer chips between Tesla and SpaceX, was another signal that Musk sees his companies as potentially more effective when working together.
Musk said on Tuesday a full merger between the two companies would make sense for the work each is doing around chips, artificial intelligence, software and more.
Musk, who became the world's first paper trillionaire after the SpaceX stock market debut earlier this year, said he is not included in either of the special committees considering the mega-merger.
He described himself as a "conflicted party" as the chief executive of Tesla and of SpaceX.
Even commenting on the possibility of a merger between the two companies, Musk compared to "tap dancing through a minefield".
He added a merger would ultimately be decided by shareholders. At least 50% of Tesla's shareholders would need to approve the merger, which Musk described as "quite a high hurdle to achieve".
Shareholders have supported Musk's desires before. Last year, a majority of investors in Tesla approved a compensation package for Musk valued around $1 trillion.
While Tesla is known as an electric car company, Musk has lately been shifting resources there to work around robotics.
SpaceX, with its growing focus on AI infrastructure, quickly outstripped Tesla on the stock market in terms of value when it made its stock market debut.
- Published1 day ago`,
    bodyJa: `Elon Musk says Tesla-SpaceX merger being considered
- Published
Elon Musk has said he likes the idea of a merger of Tesla and SpaceX, two of his most notable companies, and it is under active consideration.
"Do I think it would be a good idea? Yes," Musk said during a call with financial analysts over the quarterly business results of SpaceX on Tuesday.
While Musk noted the certainty of such a merger should not be assumed, and it would need shareholders' support, he said special committees within both companies have been formed to examine the move.
"The special committees have not reached agreement on terms of any transaction and there's no guarantee that they will," Musk added. "But I do think there is a lot of merit to merging and a lot to be gained."
With Tesla valued roughly $1.5 trillion and SpaceX valued at $2 trillion, a combination of the two companies would mark one of the largest mergers in history.
Shares of SpaceX rose 8% in after hours trading.
The company, which builds space rockets and Starlink internet satellites, is now expanding into offering cloud compute capacity for other tech companies, like Anthropic and Google.
That line of business has become the most profitable part of SpaceX, bringing in $7.5bn according to the latest quarterly results. Starlink also tallied revenue of $5.2bn.
SpaceX as a whole, however, is not profitable and has lost $1.1bn so far this year.
Shares of Tesla, which reports its own quarterly results on Wednesday, rose 2% after being down slightly for weeks.
Over the last year, Musk has taken to bringing more of his various companies under fewer banners. Before it went public earlier this year, SpaceX acquired xAI and X, the platform formerly known as Twitter, both of which Musk owned.
The recent launch of Terafab, a combined effort to manufacture computer chips between Tesla and SpaceX, was another signal that Musk sees his companies as potentially more effective when working together.
Musk said on Tuesday a full merger between the two companies would make sense for the work each is doing around chips, artificial intelligence, software and more.
Musk, who became the world's first paper trillionaire after the SpaceX stock market debut earlier this year, said he is not included in either of the special committees considering the mega-merger.
He described himself as a "conflicted party" as the chief executive of Tesla and of SpaceX.
Even commenting on the possibility of a merger between the two companies, Musk compared to "tap dancing through a minefield".
He added a merger would ultimately be decided by shareholders. At least 50% of Tesla's shareholders would need to approve the merger, which Musk described as "quite a high hurdle to achieve".
Shareholders have supported Musk's desires before. Last year, a majority of investors in Tesla approved a compensation package for Musk valued around $1 trillion.
While Tesla is known as an electric car company, Musk has lately been shifting resources there to work around robotics.
SpaceX, with its growing focus on AI infrastructure, quickly outstripped Tesla on the stock market in terms of value when it made its stock market debut.
- Published1 day ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cmlyl09xjke4o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-20T23:24:47+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/819f/live/f7b5d9b0-ccd0-11f1-b06b-25a52a186d15.png",
    readTime: 8,
  },
  {
    id: "the-tech-helping-crack-decades-old-cold-94b8198d",
    title: "The tech helping crack decades-old cold cases",
    titleJa: "The tech helping crack decades-old cold cases",
    summaryJa: "Investigative genetic genealogy can help hunt down criminals but raises worries over privacy.",
    bodyOriginal: `The tech helping crack decades-old cold cases
- Published
Randy Gail Sperino was last seen alive on the evening of 9 November 1993, as she was getting into a pickup truck in Granite City, Illinois.
The 34-year-old's body was found hours later in a field nearby, the victim of blunt force trauma.
The identity of her killer was a mystery. DNA evidence found at the crime scene was tested against standard law enforcement databases, but no matches were found.
For three decades, investigators from the Madison County Sheriff's Office chased leads and interviewed hundreds of people as they attempted to identify the perpetrator.
The case looked like it would remain one of more than 250,000 unsolved homicides in the US.
Then, last year, detectives tried a fresh approach. They sent genetic evidence to Othram, a Houston-based company that uses DNA technology to help identify the perpetrators in cold and current crime cases.
The Madison County detectives had been inspired by investigative genetic genealogy techniques used to identify the Golden State Killer, Joseph James DeAngelo, back in 2018. In that case, an investigative team constructed a family tree to help identify the killer.
They were able to do so thanks to DNA data that relatives had provided to commercial databases, similar to consumer ancestry platforms.
Unlike traditional forensic DNA testing, which generally relies on a direct comparison between evidence and a known person, investigative genetic genealogy can identify distant genetic relatives of an unknown individual.
Othram set about applying this technique to track down Sperino's killer. While the killer's own DNA profile wasn't available, profiles submitted by his extended relatives allowed the company to identify a male family member.
"That lead broke the case open," said Captain Tim Lawrence of Madison County Sheriff's Office, which was responsible for investigating the crime.
It was a crucial clue that led the detectives to Albert "Buddy" Zigler, 70, who then confessed to the murder. He was charged in May this year.
Wes Sperino, Gail's son, said at a press conference: "I finally get closure and I finally know who did this."
The technique that led detectives to Zigler is credited with revolutionising how forensic cases are solved.
It has been highly successful in helping solve cases involving unidentified human remains and identifying suspects in longstanding investigations.
Othram claims it has helped solve thousands of cases. The company's chief executive David Mittelman likens investigative genetic genealogy to a GPS system: "The DNA profile is the GPS signal and it says 'you belong here.' But to understand where 'here' is, you need a map."
Public records, obituaries, and census data build that map so Othram's scientists can establish how different family trees connect.
However, Mittelman is quick to point out that DNA technology can only go so far before "a cascade of investigative steps" are needed.
DNA science isn't the only technology that are helping detectives solve cold cases.
One of the challenges facing detectives on major cases investigations like the hunt for Sperino's killer is the sheer amount of evidence they dig up.
Officers investigating Sperino's murder realised AI could help them wade through the mountains of evidence they had accumulated since 1993.
They used a platform called Centerline AI, from Florida software company CentralSquare, to analyse more than 2,000 pages of records and identify evidence for the DNA testing that helped to break the case.
The AI helped them reconstruct timelines and organise witness information. "It's so much easier than having a detective have to read through 2,000 pages," Lawrence says. His team could interact with the AI like a chat bot.
This also helped when it came to interviewing Zigler after they had tracked him down. Detectives were able to ask questions of the AI to help "figure out if Zigler was being truthful", says Lawrence.
But the technology is "only as good as the investigator," says the captain. There comes a point, he says, "where you leave the technology behind and you have to go track people down and talk to them."
Investigative genetic genealogy has its limitations too. Mittelman says: "It can't solve every case. If you have no DNA, you can't really use this technique."
"But this technique is a lot more powerful and a lot more likely to yield identities than having to rely on the chance that you find a match somewhere in a database," he adds.
While firms like Othram only use ancestry platforms where users have provided consent for law enforcement matching, there remain some concerns about the ethical implications of using this data.
"There are significant privacy concerns," says Denise Syndercombe Court, professor of forensic genetics at King's College London. While one person may have opted in to their DNA being used, genetic relatives may not have given consent.
A lack of funding is another hurdle. Mittelman says: "Every law enforcement agency wants to do it. There's just not a lot of funding for it."
Sometimes cases are funded through donations or crowdfunding. Othram operates a website listing cases that members of the public can help fund.
While investigative genetic genealogy has been adopted in countries such as Sweden, Denmark and Australia, it is not yet used in the UK. The Home Office is conducting a study to consider whether it should be adopted in the UK but did not respond to a request for comment.
The UK is already in a strong position, says Syndercombe Court. "We have such an efficient DNA database that if you can get any DNA out of a crime scene, you've got over a 65% chance of putting a name to that person, which is enormously powerful," she says.
Technology of Business
- Published25 September
- Published1 October
- Published30 September`,
    bodyJa: `The tech helping crack decades-old cold cases
- Published
Randy Gail Sperino was last seen alive on the evening of 9 November 1993, as she was getting into a pickup truck in Granite City, Illinois.
The 34-year-old's body was found hours later in a field nearby, the victim of blunt force trauma.
The identity of her killer was a mystery. DNA evidence found at the crime scene was tested against standard law enforcement databases, but no matches were found.
For three decades, investigators from the Madison County Sheriff's Office chased leads and interviewed hundreds of people as they attempted to identify the perpetrator.
The case looked like it would remain one of more than 250,000 unsolved homicides in the US.
Then, last year, detectives tried a fresh approach. They sent genetic evidence to Othram, a Houston-based company that uses DNA technology to help identify the perpetrators in cold and current crime cases.
The Madison County detectives had been inspired by investigative genetic genealogy techniques used to identify the Golden State Killer, Joseph James DeAngelo, back in 2018. In that case, an investigative team constructed a family tree to help identify the killer.
They were able to do so thanks to DNA data that relatives had provided to commercial databases, similar to consumer ancestry platforms.
Unlike traditional forensic DNA testing, which generally relies on a direct comparison between evidence and a known person, investigative genetic genealogy can identify distant genetic relatives of an unknown individual.
Othram set about applying this technique to track down Sperino's killer. While the killer's own DNA profile wasn't available, profiles submitted by his extended relatives allowed the company to identify a male family member.
"That lead broke the case open," said Captain Tim Lawrence of Madison County Sheriff's Office, which was responsible for investigating the crime.
It was a crucial clue that led the detectives to Albert "Buddy" Zigler, 70, who then confessed to the murder. He was charged in May this year.
Wes Sperino, Gail's son, said at a press conference: "I finally get closure and I finally know who did this."
The technique that led detectives to Zigler is credited with revolutionising how forensic cases are solved.
It has been highly successful in helping solve cases involving unidentified human remains and identifying suspects in longstanding investigations.
Othram claims it has helped solve thousands of cases. The company's chief executive David Mittelman likens investigative genetic genealogy to a GPS system: "The DNA profile is the GPS signal and it says 'you belong here.' But to understand where 'here' is, you need a map."
Public records, obituaries, and census data build that map so Othram's scientists can establish how different family trees connect.
However, Mittelman is quick to point out that DNA technology can only go so far before "a cascade of investigative steps" are needed.
DNA science isn't the only technology that are helping detectives solve cold cases.
One of the challenges facing detectives on major cases investigations like the hunt for Sperino's killer is the sheer amount of evidence they dig up.
Officers investigating Sperino's murder realised AI could help them wade through the mountains of evidence they had accumulated since 1993.
They used a platform called Centerline AI, from Florida software company CentralSquare, to analyse more than 2,000 pages of records and identify evidence for the DNA testing that helped to break the case.
The AI helped them reconstruct timelines and organise witness information. "It's so much easier than having a detective have to read through 2,000 pages," Lawrence says. His team could interact with the AI like a chat bot.
This also helped when it came to interviewing Zigler after they had tracked him down. Detectives were able to ask questions of the AI to help "figure out if Zigler was being truthful", says Lawrence.
But the technology is "only as good as the investigator," says the captain. There comes a point, he says, "where you leave the technology behind and you have to go track people down and talk to them."
Investigative genetic genealogy has its limitations too. Mittelman says: "It can't solve every case. If you have no DNA, you can't really use this technique."
"But this technique is a lot more powerful and a lot more likely to yield identities than having to rely on the chance that you find a match somewhere in a database," he adds.
While firms like Othram only use ancestry platforms where users have provided consent for law enforcement matching, there remain some concerns about the ethical implications of using this data.
"There are significant privacy concerns," says Denise Syndercombe Court, professor of forensic genetics at King's College London. While one person may have opted in to their DNA being used, genetic relatives may not have given consent.
A lack of funding is another hurdle. Mittelman says: "Every law enforcement agency wants to do it. There's just not a lot of funding for it."
Sometimes cases are funded through donations or crowdfunding. Othram operates a website listing cases that members of the public can help fund.
While investigative genetic genealogy has been adopted in countries such as Sweden, Denmark and Australia, it is not yet used in the UK. The Home Office is conducting a study to consider whether it should be adopted in the UK but did not respond to a request for comment.
The UK is already in a strong position, says Syndercombe Court. "We have such an efficient DNA database that if you can get any DNA out of a crime scene, you've got over a 65% chance of putting a name to that person, which is enormously powerful," she says.
Technology of Business
- Published25 September
- Published1 October
- Published30 September`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c370pzdkw77jo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-20T23:13:24+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/d033/live/5b8c8300-c16c-11f1-babe-4199b0e7ccea.jpg",
    readTime: 10,
  },
  {
    id: "boeing-wins-faa-approval-for-737-max-10-9f033253",
    title: "Boeing wins FAA approval for 737 Max 10 after years of delays as Duffy says certification process should be faster",
    titleJa: "Boeing wins FAA approval for 737 Max 10 after years of delays as Duffy says certification process should be faster",
    summaryJa: "The 737 Max 10, the largest model in the family, was set to start flying in 2020, but increased scrutiny and other safety issues delayed its certification.",
    bodyOriginal: `The Federal Aviation Administration on Tuesday signed off on the Boeing 737 Max 10 after years of delays, a major win for the manufacturer and the last in Boeing's best-selling family of jets to get government approval.
The green light comes weeks after federal officials reviewed a navigation system glitch on the aircraft but deemed it was not a safety-of-flight issue.
Transportation Secretary Sean Duffy told CNBC's Phil LeBeau that safety is paramount, but he also said the U.S. needs to improve its certification process.
"It takes Boeing, to certify an aircraft in Europe, about half the time, less than half the time that it does in the U.S. You have China now playing to take over in aviation," Duffy said. "We have to certify aircraft more quickly if we're going to compete as Americans."
The 737 Max 10, the largest model in the family that can seat up to 230 people, was set to start flying in 2020, but increased scrutiny following two Max crashes in 2018 and 2019 and other safety issues delayed its certification. Engineering changes were also required, including to an anti-icing system for the aircraft's engines.
Max 10 customers include Alaska Airlines, American Airlines, United Airlines and Delta Air Lines. Boeing said the Max 10 makes up about 30% of its Max backlog.
Airlines can finally start flying passengers soon after planes are certified, but it can take months for carriers to work them into schedules.
"Completing the certification program clears the path for us to deliver a Boeing airplane that will set a new standard in commercial aviation," Stephanie Pope, CEO of Boeing's commercial airplane unit, said in a news release.
United CEO Scott Kirby told CNBC in August that the airline had been waiting so long for the Max 10 that the lie-flat seats it expected for the plane no longer make sense and are sitting in a warehouse. Alaska Airlines last month said it plans to put lie-flat seats on some of its 737 Max 10s in a push for more premium offerings.
The FAA approved the smallest model of the 737 Max family, the Max 7, in early August.
Boeing has been working to ramp up production of its 737 Maxes and 787 Dreamliners, which are key to its recovery since airlines and other customers pay the bulk of the aircraft's price upon delivery. The manufacturer opened a fourth production line in Everett, Washington, in July for its 737 Max airplanes.`,
    bodyJa: `The Federal Aviation Administration on Tuesday signed off on the Boeing 737 Max 10 after years of delays, a major win for the manufacturer and the last in Boeing's best-selling family of jets to get government approval.
The green light comes weeks after federal officials reviewed a navigation system glitch on the aircraft but deemed it was not a safety-of-flight issue.
Transportation Secretary Sean Duffy told CNBC's Phil LeBeau that safety is paramount, but he also said the U.S. needs to improve its certification process.
"It takes Boeing, to certify an aircraft in Europe, about half the time, less than half the time that it does in the U.S. You have China now playing to take over in aviation," Duffy said. "We have to certify aircraft more quickly if we're going to compete as Americans."
The 737 Max 10, the largest model in the family that can seat up to 230 people, was set to start flying in 2020, but increased scrutiny following two Max crashes in 2018 and 2019 and other safety issues delayed its certification. Engineering changes were also required, including to an anti-icing system for the aircraft's engines.
Max 10 customers include Alaska Airlines, American Airlines, United Airlines and Delta Air Lines. Boeing said the Max 10 makes up about 30% of its Max backlog.
Airlines can finally start flying passengers soon after planes are certified, but it can take months for carriers to work them into schedules.
"Completing the certification program clears the path for us to deliver a Boeing airplane that will set a new standard in commercial aviation," Stephanie Pope, CEO of Boeing's commercial airplane unit, said in a news release.
United CEO Scott Kirby told CNBC in August that the airline had been waiting so long for the Max 10 that the lie-flat seats it expected for the plane no longer make sense and are sitting in a warehouse. Alaska Airlines last month said it plans to put lie-flat seats on some of its 737 Max 10s in a push for more premium offerings.
The FAA approved the smallest model of the 737 Max family, the Max 7, in early August.
Boeing has been working to ramp up production of its 737 Maxes and 787 Dreamliners, which are key to its recovery since airlines and other customers pay the bulk of the aircraft's price upon delivery. The manufacturer opened a fourth production line in Everett, Washington, in July for its 737 Max airplanes.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/20/boeing-737-max-10-certification.html",
    publishedAt: "2026-10-20T20:59:32+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 6,
  },
  {
    id: "it-s-no-secret-what-the-best-financial-a-8e2c26e5",
    title: "It’s no secret what the best financial advice for retirement is — but most people ignore it anyway",
    titleJa: "It’s no secret what the best financial advice for retirement is — but most people ignore it anyway",
    summaryJa: "Research can prove a lot of facts, but that doesn’t mean it changes how people act.",
    bodyOriginal: `Research can prove a lot of facts, but that doesn’t mean it changes how people act.`,
    bodyJa: `Research can prove a lot of facts, but that doesn’t mean it changes how people act.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/its-no-secret-what-the-best-financial-advice-for-retirement-is-but-most-people-ignore-it-anyway-7c9075c8?mod=mw_rss_topstories",
    publishedAt: "2026-10-20T20:57:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-00601261",
    readTime: 2,
  },
  {
    id: "audit-regulator-looking-into-manchester-b2400f34",
    title: "Audit regulator looking into Manchester City accounting",
    titleJa: "Audit regulator looking into Manchester City accounting",
    summaryJa: "No formal investigation has started, but the regulator is making inquiries into the case.",
    bodyOriginal: `Audit regulator looking into Manchester City accounting
- Published
The UK audit regulator has confirmed it is leading inquiries into accounting irregularities at Manchester City.
The Financial Reporting Council confirmed in a letter to the House of Commons business select committee it had taken over "regulatory consideration" of the case from the Institute of Chartered Accountants in England and Wales on 30 September.
No formal investigation has started, but the FRC is making inquiries into the case.
It comes after Manchester City were found guilty by an independent commission of all charges relating to breaches of the Premier League's financial regulations between the 2009-10 and 2017-18 seasons, including by artificially inflating the club's financial position by more than £900m. City are appealing the verdict.
The FRC has greater resources, and greater powers, to apply sanctions if it does find evidence of violations. It routinely oversees accounting standards at bigger institutions such as listed public companies, but not football clubs.
The FRC can look into the conduct of BDO, Manchester City's auditors, to ask whether the audit was in line with the rules.
It can also apply sanctions to individuals such as directors or employees of the Etihad club, if they are members of professional accountancy bodies.
BDO is the UK's fifth-biggest accounting firm, but claims to be a market leader in football, advising more Premier League and Championship clubs than any other firm.
The independent commission which looked into Manchester City found that the club gave a "misleading impression" of the scheme used to disguise the origin of shareholder funds injected into the club to its auditors, who were "unaware" of the scheme.
Manchester City have said they will appeal against the commission's decision, arguing that it contains "material errors, of law, principle and fact and is unsafe".
Liam Byrne, chair of the business select committee, called for greater powers for the FRC to look into similar cases.
He wrote on X: "The regulator's letter exposes gaps in its ability to compel evidence from the club and pursue directors who fall outside its disciplinary rules.
"This raises serious questions about the powers available to hold companies and directors to account.
"The government has a responsibility to explain why reforms to close these gaps were abandoned - and what will now be done to strengthen accountability."
BDO declined to comment.
- Published2 October`,
    bodyJa: `Audit regulator looking into Manchester City accounting
- Published
The UK audit regulator has confirmed it is leading inquiries into accounting irregularities at Manchester City.
The Financial Reporting Council confirmed in a letter to the House of Commons business select committee it had taken over "regulatory consideration" of the case from the Institute of Chartered Accountants in England and Wales on 30 September.
No formal investigation has started, but the FRC is making inquiries into the case.
It comes after Manchester City were found guilty by an independent commission of all charges relating to breaches of the Premier League's financial regulations between the 2009-10 and 2017-18 seasons, including by artificially inflating the club's financial position by more than £900m. City are appealing the verdict.
The FRC has greater resources, and greater powers, to apply sanctions if it does find evidence of violations. It routinely oversees accounting standards at bigger institutions such as listed public companies, but not football clubs.
The FRC can look into the conduct of BDO, Manchester City's auditors, to ask whether the audit was in line with the rules.
It can also apply sanctions to individuals such as directors or employees of the Etihad club, if they are members of professional accountancy bodies.
BDO is the UK's fifth-biggest accounting firm, but claims to be a market leader in football, advising more Premier League and Championship clubs than any other firm.
The independent commission which looked into Manchester City found that the club gave a "misleading impression" of the scheme used to disguise the origin of shareholder funds injected into the club to its auditors, who were "unaware" of the scheme.
Manchester City have said they will appeal against the commission's decision, arguing that it contains "material errors, of law, principle and fact and is unsafe".
Liam Byrne, chair of the business select committee, called for greater powers for the FRC to look into similar cases.
He wrote on X: "The regulator's letter exposes gaps in its ability to compel evidence from the club and pursue directors who fall outside its disciplinary rules.
"This raises serious questions about the powers available to hold companies and directors to account.
"The government has a responsibility to explain why reforms to close these gaps were abandoned - and what will now be done to strengthen accountability."
BDO declined to comment.
- Published2 October`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cm93z1xlgqxqo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-20T20:56:53+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/969d/live/e4786420-ccb8-11f1-b6d1-8953b372d724.jpg",
    readTime: 6,
  },
  {
    id: "united-airlines-slashes-2026-profit-outl-9fb812f9",
    title: "United Airlines slashes 2026 profit outlook on fuel prices, but travelers keep booking despite higher fares",
    titleJa: "United Airlines slashes 2026 profit outlook on fuel prices, but travelers keep booking despite higher fares",
    summaryJa: "United Airlines cut its profit outlook for the year as fuel prices continued to climb.",
    bodyOriginal: `United Airlines is slashing its profit forecast for the year as fuel costs continue to bite, but the carrier said passengers keep booking.
United said Tuesday that it expects to earn between 50 cents and $1.50 a share on an adjusted basis in the fourth quarter, well below the $1.76 a share Wall Street analysts expected. At the high end of that range, it would bring United's 2026 adjusted earnings to no more than $7.22 per share. In mid-July, United said it was expecting full-year earnings of $9 to $11 a share.
The carrier expects to pay an average of $4.80 a gallon for fuel in the fourth quarter, up from an average price of $3.90 a gallon in the third.
A surge in fuel prices this year has added billions of dollars to airlines' costs, eating into profits, despite strong demand, and driving up airfares.
Here is what United Airlines reported for the quarter that ended Sept. 30 compared with what Wall Street was expecting, based on estimates compiled by LSEG:
- Earnings per share: $2.54 adjusted vs. $2.57 expected
- Revenue: $17.88 billion vs. $17.9 billion expected
United's third-quarter net income rose 8.5% from a year earlier to $1.03 billion, or $3.14 a share. During the same period last year its net income totaled $949 million, or $2.90 a share.
"Our employees met the challenge of our ever-changing environment and our results prove the resilience of focusing on building a brand-loyal airline for customers," United CEO Scott Kirby said in an earnings release.
United's fuel bill rose close to 62% in the quarter from a year earlier to $4.84 billion.
Revenue for the three months ended Sept. 30 rose 17.4% from a year earlier to $17.88 billion, compared with $15.23 billion the year before.
Domestic passenger unit revenue rose 14.5% from a year earlier, while international unit revenue was up 17.4%, a sign of higher fares. Passengers continue to book, United said, with passenger counts up more than 2% from last year.
Adjusting for one-time items, United reported net income of $833 million or $2.54 a share.`,
    bodyJa: `United Airlines is slashing its profit forecast for the year as fuel costs continue to bite, but the carrier said passengers keep booking.
United said Tuesday that it expects to earn between 50 cents and $1.50 a share on an adjusted basis in the fourth quarter, well below the $1.76 a share Wall Street analysts expected. At the high end of that range, it would bring United's 2026 adjusted earnings to no more than $7.22 per share. In mid-July, United said it was expecting full-year earnings of $9 to $11 a share.
The carrier expects to pay an average of $4.80 a gallon for fuel in the fourth quarter, up from an average price of $3.90 a gallon in the third.
A surge in fuel prices this year has added billions of dollars to airlines' costs, eating into profits, despite strong demand, and driving up airfares.
Here is what United Airlines reported for the quarter that ended Sept. 30 compared with what Wall Street was expecting, based on estimates compiled by LSEG:
- Earnings per share: $2.54 adjusted vs. $2.57 expected
- Revenue: $17.88 billion vs. $17.9 billion expected
United's third-quarter net income rose 8.5% from a year earlier to $1.03 billion, or $3.14 a share. During the same period last year its net income totaled $949 million, or $2.90 a share.
"Our employees met the challenge of our ever-changing environment and our results prove the resilience of focusing on building a brand-loyal airline for customers," United CEO Scott Kirby said in an earnings release.
United's fuel bill rose close to 62% in the quarter from a year earlier to $4.84 billion.
Revenue for the three months ended Sept. 30 rose 17.4% from a year earlier to $17.88 billion, compared with $15.23 billion the year before.
Domestic passenger unit revenue rose 14.5% from a year earlier, while international unit revenue was up 17.4%, a sign of higher fares. Passengers continue to book, United said, with passenger counts up more than 2% from last year.
Adjusting for one-time items, United reported net income of $833 million or $2.54 a share.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/20/united-airlines-ual-3q-2026-earnings.html",
    publishedAt: "2026-10-20T20:23:58+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "trump-sued-over-canadian-tariffs-in-late-c7ed80e0",
    title: "Trump sued over Canadian tariffs in latest legal challenge",
    titleJa: "Trump sued over Canadian tariffs in latest legal challenge",
    summaryJa: "The lawsuit argues the White House exceeded its authority in imposing the latest tariffs on the country and caused \"immediate harm to American businesses\".",
    bodyOriginal: `Trump sued over Canadian tariffs in latest legal challenge
- Published
US President Donald Trump is facing another legal challenge on tariffs after the group that successfully sued over his so-called "liberation day" import taxes filed a new lawsuit over the latest Canadian levies.
The White House imposed a 50% levy on some $20bn of Canadian goods after trade talks between the US and Canada broke down in August.
The Liberty Justice Center filed a suit on behalf of US food business Gellert Global Group, urging the US Court of International Trade to find the levies unlawful and to order refunds with interest for affected importers.
The lawsuit argues the White House exceeded its authority in imposing the tariffs and caused "immediate harm to American businesses".
The White House has been contacted for comment.
Gellert Global Group is a third-generation family business that is paying 50% tariffs on cheese exported from Canada. The New Jersey-based firm is also facing retaliatory tariffs from Canada on American-made cheese it sells north of the border.
Co-chief executive Thomas Gellert said the firm had spent generations building relationships with suppliers and customers in the food industry.
"These tariffs disrupt those relationships overnight and create costs and uncertainty that ripple through the entire supply chain," he said on Tuesday.
The Liberty Justice Center is challenging the administration's use of Section 338 of the 1930 Tariff Act to hit Canadian goods from wine to dairy products and hockey sticks.
That section of the nearly 100-year-old Act is aimed at protecting US business against foreign discrimination, but the legal group is arguing that it does not allow the executive branch "to impose sweeping tariffs or import restrictions whenever a trade dispute arises".
The US-Canada trade war in 5 charts
- Published31 August
The lawsuit seeks to challenge the White House's reliance on retaliatory tariffs imposed by Canada to justify its own duties under Section 338.
Canada has imposed a series of countermeasures against numerous US tariffs. Last month, Canadian Prime Minister Mark Carney matched the Section 338 US tariffs "dollar for dollar" after Trump imposed them for what he called "unequal treatment" of US cars, dairy and alcohol.
It also points out Section 338 requires a 30-day waiting period before levies can be imposed, but the tariff on products including cheese was added to the list just a week before tariff collection began.
Sara Albrecht, chief executive of the Liberty Justice Center, said the case was not about Trump himself but about the presidency.
"No president should have the power to pull a dormant statute off the shelf and use it to impose sweeping tariffs or import bans without the limits Congress required," she said.
The lawsuit argues that Section 338 of the Tariff Act of 1930 has been superseded by Section 301 of the Trade Act of 1974.
It also argues that if Section 338 still applies, the White House has not established the legal basis for the sweeping tariffs against Canada.
"The case is not an objection to tariffs as such. It asks who has the power to impose them and whether the executive branch followed the law Congress wrote," the Liberty Justice Center said.
The law group has also filed a motion for a preliminary injunction to block their collection.
It is the fourth case brought by the group against Trump's tariffs, including its successful case against the sweeping tariffs brought in under the International Emergency Economic Powers Act (IEEPA) that were struck down in February this year.
Albrecht said the group had brought all the cases for the same reason: "the Constitution gives tariff power to Congress. The executive branch cannot keep moving the same policy from one statute to another and pretend the limits disappear".
- Published9 September
- Published22 August
- Published24 August`,
    bodyJa: `Trump sued over Canadian tariffs in latest legal challenge
- Published
US President Donald Trump is facing another legal challenge on tariffs after the group that successfully sued over his so-called "liberation day" import taxes filed a new lawsuit over the latest Canadian levies.
The White House imposed a 50% levy on some $20bn of Canadian goods after trade talks between the US and Canada broke down in August.
The Liberty Justice Center filed a suit on behalf of US food business Gellert Global Group, urging the US Court of International Trade to find the levies unlawful and to order refunds with interest for affected importers.
The lawsuit argues the White House exceeded its authority in imposing the tariffs and caused "immediate harm to American businesses".
The White House has been contacted for comment.
Gellert Global Group is a third-generation family business that is paying 50% tariffs on cheese exported from Canada. The New Jersey-based firm is also facing retaliatory tariffs from Canada on American-made cheese it sells north of the border.
Co-chief executive Thomas Gellert said the firm had spent generations building relationships with suppliers and customers in the food industry.
"These tariffs disrupt those relationships overnight and create costs and uncertainty that ripple through the entire supply chain," he said on Tuesday.
The Liberty Justice Center is challenging the administration's use of Section 338 of the 1930 Tariff Act to hit Canadian goods from wine to dairy products and hockey sticks.
That section of the nearly 100-year-old Act is aimed at protecting US business against foreign discrimination, but the legal group is arguing that it does not allow the executive branch "to impose sweeping tariffs or import restrictions whenever a trade dispute arises".
The US-Canada trade war in 5 charts
- Published31 August
The lawsuit seeks to challenge the White House's reliance on retaliatory tariffs imposed by Canada to justify its own duties under Section 338.
Canada has imposed a series of countermeasures against numerous US tariffs. Last month, Canadian Prime Minister Mark Carney matched the Section 338 US tariffs "dollar for dollar" after Trump imposed them for what he called "unequal treatment" of US cars, dairy and alcohol.
It also points out Section 338 requires a 30-day waiting period before levies can be imposed, but the tariff on products including cheese was added to the list just a week before tariff collection began.
Sara Albrecht, chief executive of the Liberty Justice Center, said the case was not about Trump himself but about the presidency.
"No president should have the power to pull a dormant statute off the shelf and use it to impose sweeping tariffs or import bans without the limits Congress required," she said.
The lawsuit argues that Section 338 of the Tariff Act of 1930 has been superseded by Section 301 of the Trade Act of 1974.
It also argues that if Section 338 still applies, the White House has not established the legal basis for the sweeping tariffs against Canada.
"The case is not an objection to tariffs as such. It asks who has the power to impose them and whether the executive branch followed the law Congress wrote," the Liberty Justice Center said.
The law group has also filed a motion for a preliminary injunction to block their collection.
It is the fourth case brought by the group against Trump's tariffs, including its successful case against the sweeping tariffs brought in under the International Emergency Economic Powers Act (IEEPA) that were struck down in February this year.
Albrecht said the group had brought all the cases for the same reason: "the Constitution gives tariff power to Congress. The executive branch cannot keep moving the same policy from one statute to another and pretend the limits disappear".
- Published9 September
- Published22 August
- Published24 August`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cqrkyj13m588o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-20T19:30:05+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/18fe/live/5bca92c0-ccb7-11f1-a64c-550be9e3c66b.jpg",
    readTime: 10,
  },
  {
    id: "housing-is-flashing-warning-signs-just-a-137c5988",
    title: "Housing is flashing warning signs just as the Fed weighs more interest rate hikes",
    titleJa: "Housing is flashing warning signs just as the Fed weighs more interest rate hikes",
    summaryJa: "Housing data deteriorated further in September, according to separate reports Tuesday.",
    bodyOriginal: `The Federal Reserve's inflation fight is running into a growing complication: The housing market is slumping even as broader price pressures persist.
Housing data deteriorated further in September, according to separate reports Tuesday, adding to an already complicated policy landscape for the central bank as it contemplates its next move on interest rates.
Things appear poised to get worse before they get better. If the Fed raises short-term rates as expected over the next several months, mortgage rates that are already at 7.43% could push even higher, putting a further damper on affordability. Higher home borrowing costs have coincided with a general rise in inflation and a housing shortage.
"The housing market is about to go into a deep sleep unless Washington can do a 180 on its policies and make the cost of a new home more affordable," wrote Chris Rupkey, chief economist at Fwdbonds. "It is not winter yet but housing is going into a deep freeze."
The National Association of Realtors reported that pending sales, a forward-looking index that measures home sales under agreement but not completed, hit an all-time low in records that stretch back to 2001. The index slid 7.3% for the month and was off 11.3% from a year ago. The Wall Street estimate was for a decline of just 0.4%.
Housing starts, another important metric when evaluating the state of the market, also posted a decline well outside already-muted expectations Tuesday.
Privately owned housing starts fell at a seasonally adjusted annualized rate of 5.2% on the month, against expectations for a decline of just 0.4%, while building permits were off 0.2%, against the Dow Jones consensus outlook for a 2% gain, according to Commerce Department data.
Moreover, single-family permits totaled just 845,000, down 4% from August and the lowest number since 2023.
"Market conditions weakened in September due to fast-rising mortgage rates," said Lawrence Yun, the NAR's chief economist. "Although job growth and income gains can support home purchases, housing affordability is more affected by changes in mortgage rates."
Rising rates weigh on outlook
The rate for a 30-year mortgage was above 7% for most of September, ending the month around 7.6%, according to Mortgage News Daily. Five years ago, rates were closer to 3%, feeding into the Covid-era housing boom that saw an explosion in demand and, consequently, prices.
Outside of the pending sales number, home builder sentiment is at lows not seen in 14 years.
Under some conditions, Fed officials might respond to the housing weakness with easier monetary policy. Lower rates generally help spur demand by lowering borrowing costs.
But the Fed has a bigger fight on its hands in its effort to bring inflation under control. Readings last week on consumer and producer prices provided few signs of optimism, with wholesale final demand goods prices rising 2.6%, the fastest pace in a Bureau of Labor Statistics data series going back to December 2009.
Fed officials have said they are tracking the inflationary effects of the robust investment in artificial intelligence, which is driving up the cost of chips and electronics. At the same time, they believe that benefits from AI investment could offset weaker sectors of the economy such as housing.
However, conditions generally point to a housing market likely to weaken further before stabilizing, Goldman Sachs economist Ronnie Walker said in a client note Monday.
"In 2027, we expect the headwind from affordability—reignited by the recent rebound in mortgage rates—to increasingly dominate, weighing further on activity," Walker wrote. "Sustained higher mortgage rates will continue to have their most pronounced impact on housing turnover, and the recent run-up in rates is likely to push existing home sales lower in the coming months."
More of the same
Several data points tell the story: More than 95% of mortgage borrowers have rates below the prevailing level, and 65% are 2 percentage points below. Goldman forecasts residential investment to decline 2.5%, 4% and 1%, respectively, over the coming three quarters, with a possibility for a steeper decline if mortgage rates don't fall.
The firm sees single-family starts of just 875,000 in 2027, little changed from this year, while existing sales are forecast at 3.9 million, also about the same as 2026 but notably 26% below pre-Covid 2019 levels. Walker attributed the middling levels as a product of the "lock-in" effect in which it's too expensive for current homeowners to move and take on higher borrowing costs while deteriorating affordability weighs on new construction.
"Housing activity has remained rangebound in recent years, capped on the upside by affordability headwinds and buffered on the downside by the longstanding housing shortage," Walker wrote. "In 2027, we expect the headwind from affordability to increasingly dominate, weighing further on activity."
Markets expect the Fed to hold benchmark rates steady when it meets next week. However, futures pricing implies a strong chance of a quarter-point hike in December and another in March 2027, according to the CME Group's FedWatch tool.
One point of optimism comes from Yun, the NAR economist, who thinks the trend of mortgage costs running ahead of Fed hikes could mean that rates are topping out.
"Given that mortgage rates have already risen much more than the Federal Reserve's short-term interest rate hikes, mortgage rates could be topping out," he said. "Buyers and sellers may simply be holding back until mortgage rates move favorably."`,
    bodyJa: `The Federal Reserve's inflation fight is running into a growing complication: The housing market is slumping even as broader price pressures persist.
Housing data deteriorated further in September, according to separate reports Tuesday, adding to an already complicated policy landscape for the central bank as it contemplates its next move on interest rates.
Things appear poised to get worse before they get better. If the Fed raises short-term rates as expected over the next several months, mortgage rates that are already at 7.43% could push even higher, putting a further damper on affordability. Higher home borrowing costs have coincided with a general rise in inflation and a housing shortage.
"The housing market is about to go into a deep sleep unless Washington can do a 180 on its policies and make the cost of a new home more affordable," wrote Chris Rupkey, chief economist at Fwdbonds. "It is not winter yet but housing is going into a deep freeze."
The National Association of Realtors reported that pending sales, a forward-looking index that measures home sales under agreement but not completed, hit an all-time low in records that stretch back to 2001. The index slid 7.3% for the month and was off 11.3% from a year ago. The Wall Street estimate was for a decline of just 0.4%.
Housing starts, another important metric when evaluating the state of the market, also posted a decline well outside already-muted expectations Tuesday.
Privately owned housing starts fell at a seasonally adjusted annualized rate of 5.2% on the month, against expectations for a decline of just 0.4%, while building permits were off 0.2%, against the Dow Jones consensus outlook for a 2% gain, according to Commerce Department data.
Moreover, single-family permits totaled just 845,000, down 4% from August and the lowest number since 2023.
"Market conditions weakened in September due to fast-rising mortgage rates," said Lawrence Yun, the NAR's chief economist. "Although job growth and income gains can support home purchases, housing affordability is more affected by changes in mortgage rates."
Rising rates weigh on outlook
The rate for a 30-year mortgage was above 7% for most of September, ending the month around 7.6%, according to Mortgage News Daily. Five years ago, rates were closer to 3%, feeding into the Covid-era housing boom that saw an explosion in demand and, consequently, prices.
Outside of the pending sales number, home builder sentiment is at lows not seen in 14 years.
Under some conditions, Fed officials might respond to the housing weakness with easier monetary policy. Lower rates generally help spur demand by lowering borrowing costs.
But the Fed has a bigger fight on its hands in its effort to bring inflation under control. Readings last week on consumer and producer prices provided few signs of optimism, with wholesale final demand goods prices rising 2.6%, the fastest pace in a Bureau of Labor Statistics data series going back to December 2009.
Fed officials have said they are tracking the inflationary effects of the robust investment in artificial intelligence, which is driving up the cost of chips and electronics. At the same time, they believe that benefits from AI investment could offset weaker sectors of the economy such as housing.
However, conditions generally point to a housing market likely to weaken further before stabilizing, Goldman Sachs economist Ronnie Walker said in a client note Monday.
"In 2027, we expect the headwind from affordability—reignited by the recent rebound in mortgage rates—to increasingly dominate, weighing further on activity," Walker wrote. "Sustained higher mortgage rates will continue to have their most pronounced impact on housing turnover, and the recent run-up in rates is likely to push existing home sales lower in the coming months."
More of the same
Several data points tell the story: More than 95% of mortgage borrowers have rates below the prevailing level, and 65% are 2 percentage points below. Goldman forecasts residential investment to decline 2.5%, 4% and 1%, respectively, over the coming three quarters, with a possibility for a steeper decline if mortgage rates don't fall.
The firm sees single-family starts of just 875,000 in 2027, little changed from this year, while existing sales are forecast at 3.9 million, also about the same as 2026 but notably 26% below pre-Covid 2019 levels. Walker attributed the middling levels as a product of the "lock-in" effect in which it's too expensive for current homeowners to move and take on higher borrowing costs while deteriorating affordability weighs on new construction.
"Housing activity has remained rangebound in recent years, capped on the upside by affordability headwinds and buffered on the downside by the longstanding housing shortage," Walker wrote. "In 2027, we expect the headwind from affordability to increasingly dominate, weighing further on activity."
Markets expect the Fed to hold benchmark rates steady when it meets next week. However, futures pricing implies a strong chance of a quarter-point hike in December and another in March 2027, according to the CME Group's FedWatch tool.
One point of optimism comes from Yun, the NAR economist, who thinks the trend of mortgage costs running ahead of Fed hikes could mean that rates are topping out.
"Given that mortgage rates have already risen much more than the Federal Reserve's short-term interest rate hikes, mortgage rates could be topping out," he said. "Buyers and sellers may simply be holding back until mortgage rates move favorably."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/20/housing-mortgage-rates-real-estate-federal-reserve.html",
    publishedAt: "2026-10-20T19:28:43+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "google-resolves-cloud-outage-affecting-u-5bef8947",
    title: "Google resolves cloud outage affecting UK banks and websites",
    titleJa: "Google resolves cloud outage affecting UK banks and websites",
    summaryJa: "Revolut was one of the hardest hit, with banking services going down for many customers.",
    bodyOriginal: `Google resolves cloud outage affecting UK banks and websites
- Published
Google Cloud says it has resolved disruption at its UK cloud site which caused an outage affecting UK banks, businesses and the courts.
The company, one of a few large cloud computing firms whose infrastructure and services underpin many online platforms, reported an "issue with multiple services" at its London data centre complex "europe-west2" early on Tuesday.
Revolut, Lloyds Bank and HSBC were among popular UK services that confirmed disruption on Tuesday morning, after thousands of reports of problems were raised by users online.
The tech giant apologised to those affected and thanked customers for their patience.
"We have resolved a disruption to Google Cloud services at a third-party facility in our europe-west2 cloud region due to a power event," a Google Cloud spokesperson said in a statement on Tuesday evening.
"Services have been restored."
They added that the company would publish an analysis of the incident on its service health dashboard, external, where it provides customers with updates about the status of its cloud services globally.
Cloud computing giants like Amazon Web Services (AWS), Microsoft Azure and Google Cloud make their services available to clients in local or regional sites around the world, which they call "regions", containing their data centres.
In updates to its service dashboard on Tuesday morning, Google Cloud had said a number of its cloud services were "experiencing elevated errors and intermittent network failures in europe-west2 region" - its UK cloud facility in London.
It later said that the issues had stemmed from a "power event" within one of its smaller data centre zones, europe-west2-b.
These seemingly affected a host of popular UK platforms and services, with customers flagging issues with sites including Royal Mail, DPD and e-bike service Forest.
The HM Courts and Tribunals Service also said it was aware of an issue affecting the video platform used for remote hearings.
Banking services disrupted
Banks appeared to be among the most badly affected, with customers reporting problems ranging from being unable to access funds abroad to struggling to complete a property purchase.
Rachael Ellen, 25, a Revolut customer from Glasgow, told BBC News she was left unable to access her money.
"Today I was unable to pay for my parking at a shopping centre because my Revolut account wasn't working properly," she told the BBC.
"This left me in a difficult situation as I had no way to access the money I needed at the time."
She said the outage also meant she could not view a transaction from a relative and was told by the app's help bot that there were no pending incoming transactions.
"It's frustrating not knowing where the payment is or when I'll receive it," Rachael added.
More than 1,500 reports of issues affecting Revolut services were flagged to platform outage monitor shortly after 08:00 BST on Tuesday.
A spokesperson for the company said some Revolut services were disrupted earlier as a result of the Google Cloud outage.
"We can confirm that services are now fully restored. Our customers' money and data are safe and remained safe throughout.
"We apologise for any inconvenience caused."
Customers of Lloyds Bank, Halifax and Bank of Scotland - all owned by the Lloyds Banking Group - also reported issues affecting some online banking services.
A Lloyds spokesperson did not confirm the cause of issues affecting some of its services, but told the BBC later on Tuesday "we understand the root issues have been resolved, so we expect all our services to be back to normal soon".
'Incredibly frustrating'
Guy Baybutt, who works for a family-run business The Veg Box Company also said he was "severely affected" by Tuesday's outage.
Baybutt, who is from Preston, told the BBC the firm - which supplies fresh fruit, vegetables and other produce to customers across the UK - could not access its website to download and process customer orders amid the technical issues.
"We were also unable to book parcels onto DPD's system for collection, meaning orders that should have been dispatched today were at risk of being delayed," he said.
"To make matters worse, customers were unable to access our website to place new orders, meaning we lost valuable sales during the outage."
He said that such disruptions can have "serious financial consequences" for small businesses like his own.
"We don't have the resources of larger companies to simply absorb lost revenue, particularly when we're dealing with fresh, perishable produce that needs to reach customers promptly," Baybutt added.
Dependent on the cloud
Tuesday's incident came exactly one year after more than 1,000 sites, including UK banks, were knocked offline for hours during an outage at AWS' largest cloud site.
Experts say this latest outage show how many businesses still rely on core services provided by a few large cloud operators.
"Google Cloud's outage is a reminder of how deeply our economies depend on just a handful of cloud providers," said Prof Feng Li, associate dean for research & innovation at Bayes Business School.
He added that it was not yet clear what caused the power problem identified by Google Cloud.
"Large cloud systems are complex, and failures will happen.
"What matters is how far they spread, how quickly services recover and whether customers have workable alternatives," he added.
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.
Get in touch
Have you been affected by issues covered in this story? Share your experiences.
Related topics
- Published21 October 2025
- Published20 April 2024`,
    bodyJa: `Google resolves cloud outage affecting UK banks and websites
- Published
Google Cloud says it has resolved disruption at its UK cloud site which caused an outage affecting UK banks, businesses and the courts.
The company, one of a few large cloud computing firms whose infrastructure and services underpin many online platforms, reported an "issue with multiple services" at its London data centre complex "europe-west2" early on Tuesday.
Revolut, Lloyds Bank and HSBC were among popular UK services that confirmed disruption on Tuesday morning, after thousands of reports of problems were raised by users online.
The tech giant apologised to those affected and thanked customers for their patience.
"We have resolved a disruption to Google Cloud services at a third-party facility in our europe-west2 cloud region due to a power event," a Google Cloud spokesperson said in a statement on Tuesday evening.
"Services have been restored."
They added that the company would publish an analysis of the incident on its service health dashboard, external, where it provides customers with updates about the status of its cloud services globally.
Cloud computing giants like Amazon Web Services (AWS), Microsoft Azure and Google Cloud make their services available to clients in local or regional sites around the world, which they call "regions", containing their data centres.
In updates to its service dashboard on Tuesday morning, Google Cloud had said a number of its cloud services were "experiencing elevated errors and intermittent network failures in europe-west2 region" - its UK cloud facility in London.
It later said that the issues had stemmed from a "power event" within one of its smaller data centre zones, europe-west2-b.
These seemingly affected a host of popular UK platforms and services, with customers flagging issues with sites including Royal Mail, DPD and e-bike service Forest.
The HM Courts and Tribunals Service also said it was aware of an issue affecting the video platform used for remote hearings.
Banking services disrupted
Banks appeared to be among the most badly affected, with customers reporting problems ranging from being unable to access funds abroad to struggling to complete a property purchase.
Rachael Ellen, 25, a Revolut customer from Glasgow, told BBC News she was left unable to access her money.
"Today I was unable to pay for my parking at a shopping centre because my Revolut account wasn't working properly," she told the BBC.
"This left me in a difficult situation as I had no way to access the money I needed at the time."
She said the outage also meant she could not view a transaction from a relative and was told by the app's help bot that there were no pending incoming transactions.
"It's frustrating not knowing where the payment is or when I'll receive it," Rachael added.
More than 1,500 reports of issues affecting Revolut services were flagged to platform outage monitor shortly after 08:00 BST on Tuesday.
A spokesperson for the company said some Revolut services were disrupted earlier as a result of the Google Cloud outage.
"We can confirm that services are now fully restored. Our customers' money and data are safe and remained safe throughout.
"We apologise for any inconvenience caused."
Customers of Lloyds Bank, Halifax and Bank of Scotland - all owned by the Lloyds Banking Group - also reported issues affecting some online banking services.
A Lloyds spokesperson did not confirm the cause of issues affecting some of its services, but told the BBC later on Tuesday "we understand the root issues have been resolved, so we expect all our services to be back to normal soon".
'Incredibly frustrating'
Guy Baybutt, who works for a family-run business The Veg Box Company also said he was "severely affected" by Tuesday's outage.
Baybutt, who is from Preston, told the BBC the firm - which supplies fresh fruit, vegetables and other produce to customers across the UK - could not access its website to download and process customer orders amid the technical issues.
"We were also unable to book parcels onto DPD's system for collection, meaning orders that should have been dispatched today were at risk of being delayed," he said.
"To make matters worse, customers were unable to access our website to place new orders, meaning we lost valuable sales during the outage."
He said that such disruptions can have "serious financial consequences" for small businesses like his own.
"We don't have the resources of larger companies to simply absorb lost revenue, particularly when we're dealing with fresh, perishable produce that needs to reach customers promptly," Baybutt added.
Dependent on the cloud
Tuesday's incident came exactly one year after more than 1,000 sites, including UK banks, were knocked offline for hours during an outage at AWS' largest cloud site.
Experts say this latest outage show how many businesses still rely on core services provided by a few large cloud operators.
"Google Cloud's outage is a reminder of how deeply our economies depend on just a handful of cloud providers," said Prof Feng Li, associate dean for research & innovation at Bayes Business School.
He added that it was not yet clear what caused the power problem identified by Google Cloud.
"Large cloud systems are complex, and failures will happen.
"What matters is how far they spread, how quickly services recover and whether customers have workable alternatives," he added.
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.
Get in touch
Have you been affected by issues covered in this story? Share your experiences.
Related topics
- Published21 October 2025
- Published20 April 2024`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cxdd8mm6qy4mo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-20T18:03:19+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/06fb/live/5e172460-ccc3-11f1-951b-8fbc7a9ea030.jpg",
    readTime: 10,
  },
  {
    id: "uk-government-to-make-jackdaw-gas-field-9b52601b",
    title: "UK government to make Jackdaw gas field announcement",
    titleJa: "UK government to make Jackdaw gas field announcement",
    summaryJa: "The long-awaited decision about the controversial North Sea field is expected on Wednesday morning.",
    bodyOriginal: `UK government to make Jackdaw gas field announcement
- Published
The UK government is expected to announce a long-awaited decision on whether to approve the Jackdaw gas field in the North Sea.
It is widely believed in Westminster that Jackdaw will be approved but that a decision on the Rosebank oil field off Shetland will not yet be made.
The question of whether to approve the two sites has become hugely politically significant and has been delayed for several months.
Multiple Whitehall sources have told BBC News the government would make an announcement on Jackdaw on Wednesday morning with the Energy Secretary Miatta Fahnbulleh expected to address MPs in the afternoon.
Prime Minister Andy Burnham has spoken repeatedly of the need for a "flexible" approach to energy and is believed to be in favour of drilling more where licensing already exist in the North Sea.
Labour's 2024 manifesto pledged not to issue any new oil and gas licences in the North Sea but to honour existing ones such as Jackdaw.
Jackdaw, about 150 miles (241.4km) east of Aberdeen, is a gas field which its operators say could be connected to the UK network within months.
Rosebank, about 80 miles (128.7km) north-west of Shetland, is Britain's largest untapped oil field, which would also produce some gas.
The controversial fields have been the subject of years of debates, legal wrangling and public consultations, with arguments from both industry bodies and environmentalists being weighed up by the UK government.
Licences for the fields were granted by the Conservative UK government in 2022 and 2023, which sparked legal challenges from environmental groups.
The Court of Session in Edinburgh ruled last year that Rosebank and Jackdaw had been unlawfully approved because the government had failed to take into account the climate impact of burning extracted oil and gas from the sites.
Environmentalists insist more drilling would be unconscionable, and hamper efforts to cut planet-warming carbon emissions as deadly heatwaves and extreme weather affect people across the globe.
They also claim starting production would not protect energy security and transitioning sooner to greener technologies would be better for supporting jobs.
Industry bodies argue starting production at Rosebank and Jackdaw will provide jobs and improve the UK's energy security as overseas conflicts threaten supply.
Related topics
- Published6 days ago
- Published17 August
- Published19 July`,
    bodyJa: `UK government to make Jackdaw gas field announcement
- Published
The UK government is expected to announce a long-awaited decision on whether to approve the Jackdaw gas field in the North Sea.
It is widely believed in Westminster that Jackdaw will be approved but that a decision on the Rosebank oil field off Shetland will not yet be made.
The question of whether to approve the two sites has become hugely politically significant and has been delayed for several months.
Multiple Whitehall sources have told BBC News the government would make an announcement on Jackdaw on Wednesday morning with the Energy Secretary Miatta Fahnbulleh expected to address MPs in the afternoon.
Prime Minister Andy Burnham has spoken repeatedly of the need for a "flexible" approach to energy and is believed to be in favour of drilling more where licensing already exist in the North Sea.
Labour's 2024 manifesto pledged not to issue any new oil and gas licences in the North Sea but to honour existing ones such as Jackdaw.
Jackdaw, about 150 miles (241.4km) east of Aberdeen, is a gas field which its operators say could be connected to the UK network within months.
Rosebank, about 80 miles (128.7km) north-west of Shetland, is Britain's largest untapped oil field, which would also produce some gas.
The controversial fields have been the subject of years of debates, legal wrangling and public consultations, with arguments from both industry bodies and environmentalists being weighed up by the UK government.
Licences for the fields were granted by the Conservative UK government in 2022 and 2023, which sparked legal challenges from environmental groups.
The Court of Session in Edinburgh ruled last year that Rosebank and Jackdaw had been unlawfully approved because the government had failed to take into account the climate impact of burning extracted oil and gas from the sites.
Environmentalists insist more drilling would be unconscionable, and hamper efforts to cut planet-warming carbon emissions as deadly heatwaves and extreme weather affect people across the globe.
They also claim starting production would not protect energy security and transitioning sooner to greener technologies would be better for supporting jobs.
Industry bodies argue starting production at Rosebank and Jackdaw will provide jobs and improve the UK's energy security as overseas conflicts threaten supply.
Related topics
- Published6 days ago
- Published17 August
- Published19 July`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cvze4wx3elj1o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-20T17:33:42+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/f31e/live/85d6bcc0-ccac-11f1-8789-fd6bb060c3f9.jpg",
    readTime: 6,
  },
  {
    id: "trump-sued-over-50-tariffs-on-canada-in-10207a3b",
    title: "Trump sued over 50% tariffs on Canada in latest trade challenge",
    titleJa: "Trump sued over 50% tariffs on Canada in latest trade challenge",
    summaryJa: "A new lawsuit challenges President Donald Trump's tariffs on a range of Canadian goods using Section 338 of the Tariff Act of 1930.",
    bodyOriginal: `A new lawsuit filed Tuesday challenges President Donald Trump's invocation of a Depression-era law to impose 50% tariffs on a range of Canadian goods.
Trump in July used Section 338 of the Tariff Act of 1930 to slap those steep tariffs on Canadian hockey sticks, wine, honey, wigs, and other products in response to alleged trade discrimination by Ottawa. It was the first time the 96-year-old law had ever been used to impose a tariff.
"Section 338 is a relic of the retaliation-based tariff policy" that has been "impliedly repealed" by subsequent legislation, the civil complaint filed in the U.S. Court of International Trade says.
The suit was filed by Gellert Global Group, a New Jersey-based food importer that says its cheeses are covered by the tariffs. The complaint asks the court to declare the tariffs unlawful, block their enforcement, and order the Trump administration to issue refunds for duties already paid, with interest.
Gellert Global is represented by the Liberty Justice Center, the same legal group that dealt a major blow to Trump's trade agenda by successfully contesting his "reciprocal" tariffs.
The Supreme Court struck those tariffs down in February. The administration is in the process of refunding the estimated $166 billion that the federal government collected from importers through the reciprocal duties.
The Liberty Justice Center is currently engaged in two other lawsuits against what it says is Trump's misuse of laws to impose sweeping tariffs.
"This case is not about the president. It is about the presidency," the group's CEO Sara Albrecht said in a statement Tuesday morning announcing Gellert Global's suit. "No president should have the power to pull a dormant statute off the shelf and use it to impose sweeping tariffs or import bans without the limits Congress required."
The White House did not immediately respond to CNBC's request for comment on the suit.`,
    bodyJa: `A new lawsuit filed Tuesday challenges President Donald Trump's invocation of a Depression-era law to impose 50% tariffs on a range of Canadian goods.
Trump in July used Section 338 of the Tariff Act of 1930 to slap those steep tariffs on Canadian hockey sticks, wine, honey, wigs, and other products in response to alleged trade discrimination by Ottawa. It was the first time the 96-year-old law had ever been used to impose a tariff.
"Section 338 is a relic of the retaliation-based tariff policy" that has been "impliedly repealed" by subsequent legislation, the civil complaint filed in the U.S. Court of International Trade says.
The suit was filed by Gellert Global Group, a New Jersey-based food importer that says its cheeses are covered by the tariffs. The complaint asks the court to declare the tariffs unlawful, block their enforcement, and order the Trump administration to issue refunds for duties already paid, with interest.
Gellert Global is represented by the Liberty Justice Center, the same legal group that dealt a major blow to Trump's trade agenda by successfully contesting his "reciprocal" tariffs.
The Supreme Court struck those tariffs down in February. The administration is in the process of refunding the estimated $166 billion that the federal government collected from importers through the reciprocal duties.
The Liberty Justice Center is currently engaged in two other lawsuits against what it says is Trump's misuse of laws to impose sweeping tariffs.
"This case is not about the president. It is about the presidency," the group's CEO Sara Albrecht said in a statement Tuesday morning announcing Gellert Global's suit. "No president should have the power to pull a dormant statute off the shelf and use it to impose sweeping tariffs or import bans without the limits Congress required."
The White House did not immediately respond to CNBC's request for comment on the suit.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/20/trump-tariffs-canada-section-338-lawsuit.html",
    publishedAt: "2026-10-20T16:43:42+00:00",
    category: "貿易",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
    readTime: 5,
  },
  {
    id: "here-s-what-to-expect-when-netflix-repor-f777bf46",
    title: "Here's what to expect when Netflix reports earnings after the bell",
    titleJa: "Here's what to expect when Netflix reports earnings after the bell",
    summaryJa: "Investors will be looking for updates on Netflix's ad-supported business, engagement metrics and how the streaming giant continues to view potential M&amp;A.",
    bodyOriginal: `Netflix is set to report quarterly earnings after market close on Tuesday as the media industry faces consolidation, spinouts and intensified competition.
Here's how Netflix is expected to perform for the period ended Sept. 30, according to estimates from analysts polled by LSEG:
- Earnings per share: 82 cents estimated
- Revenue: $12.87 billion estimated
Last week, Netflix said it was laying off about 6% of employees, or roughly 1,000 workers, and that Chief Content Officer Bela Bajaria was departing from that role.
The changes come as Netflix faces stagnating viewership and growing competition from the likes of YouTube. At the same time that streaming subscriber additions have slowed in recent years, advertising has once again become a major revenue driver for media companies.
With the help of its cheaper, ad-supported tier, Netflix continues to post solid profits and remains the biggest player in the streaming realm.
On Tuesday, Netflix announced new features for advertisers that it says will help better connect brands to the right audiences and measure the impact of their ads.
However, the company's stock has fallen about 40% in the past year, and executives have been publicly exploring new avenues for growth.
This story is developing. Please check back for updates.`,
    bodyJa: `Netflix is set to report quarterly earnings after market close on Tuesday as the media industry faces consolidation, spinouts and intensified competition.
Here's how Netflix is expected to perform for the period ended Sept. 30, according to estimates from analysts polled by LSEG:
- Earnings per share: 82 cents estimated
- Revenue: $12.87 billion estimated
Last week, Netflix said it was laying off about 6% of employees, or roughly 1,000 workers, and that Chief Content Officer Bela Bajaria was departing from that role.
The changes come as Netflix faces stagnating viewership and growing competition from the likes of YouTube. At the same time that streaming subscriber additions have slowed in recent years, advertising has once again become a major revenue driver for media companies.
With the help of its cheaper, ad-supported tier, Netflix continues to post solid profits and remains the biggest player in the streaming realm.
On Tuesday, Netflix announced new features for advertisers that it says will help better connect brands to the right audiences and measure the impact of their ads.
However, the company's stock has fallen about 40% in the past year, and executives have been publicly exploring new avenues for growth.
This story is developing. Please check back for updates.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/20/netflix-nflx-earnings-q3-2026.html",
    publishedAt: "2026-10-20T16:00:01+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    readTime: 3,
  },
  {
    id: "looking-for-ai-stocks-that-are-still-che-e6ea46c2",
    title: "Looking for AI stocks that are still cheap? Consider these two under-the-radar picks.",
    titleJa: "Looking for AI stocks that are still cheap? Consider these two under-the-radar picks.",
    summaryJa: "Simon King of Saturna Capital names two stocks tied to base metals, for investors who want to look beyond the beaten path for AI-related trades.",
    bodyOriginal: `Simon King of Saturna Capital names two stocks tied to base metals, for investors who want to look beyond the beaten path for AI-related trades.`,
    bodyJa: `Simon King of Saturna Capital names two stocks tied to base metals, for investors who want to look beyond the beaten path for AI-related trades.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/looking-for-ai-stocks-that-are-still-cheap-consider-these-two-under-the-radar-picks-b4ca2b28?mod=mw_rss_topstories",
    publishedAt: "2026-10-20T15:58:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-91198545",
    readTime: 2,
  },
  {
    id: "paddy-power-cuts-1-400-jobs-and-blames-b-8f5a25e4",
    title: "Paddy Power cuts 1,400 jobs and blames betting tax rises",
    titleJa: "Paddy Power cuts 1,400 jobs and blames betting tax rises",
    summaryJa: "The government increased taxes on online casino and sports betting in last year's Budget.",
    bodyOriginal: `Paddy Power cuts 1,400 jobs and blames betting tax rises
- Published
Paddy Power-owner Flutter has announced plans to cut up to 1,400 jobs as its boss claimed the company "cannot fully absorb" tax rises imposed on the gambling industry.
Staff based in Leeds and Dublin, as well as workers for its UK and Ireland business at Flutter's Portugal and Romania sites, will be most affected, but what roles are at risk has not been disclosed.
The government announced taxes rises on online casino and sports betting, with an exemption for horse racing, in the Budget last year.
Flutter boss Kevin Harrington said the tax hikes had "fundamentally changed" the economic model of the UK betting and gaming industry, arguing it had helped "fuel the unlicensed, unregulated market".
"We continue to expect these tax increases to have a very significant impact on the overall market," Flutter Entertainment said on Tuesday.
Flutter, which also owns Sky Bet and Betfair, employs 28,500 people across the world, including 9,000 in the UK and Ireland.
As well as its Leeds and Dublin offices, the BBC understands the cuts could also affect staff based in London and Sunderland, as well as Malta and Gibraltar.
Harrington, who is chief executive of the betting giant's UK and Ireland business, said: "As we warned a year ago, we cannot fully absorb a rise of this magnitude without reducing our fixed cost base and therefore must restructure our business so that we can best position ourselves for the future."
A government spokesperson said the job cuts were a "commercial decision for Flutter, not the UK government".
"However, we understand this will be a difficult time for the workers," they added.
Flutter delisted from the London Stock Exchange in August in a blow to the UK, with its shares now solely traded in New York.
In its most recent results, the company reported a $299m (£224m) pre-tax loss for the three months to June for its entire business worldwide, compared to a $205m profit in the same period last year. Sales rose 3% to $4.3bn.
However, revenues in the UK and Ireland rose by 4% over the period, due to strong growth in online gambling games.
Some online gambling tax rises announced in last year's Budget took effect in April. This included remote gaming duty, which is paid on online casino betting, rising from 21% to 40%.
General betting duty, paid on the profits made from various forms of sports betting, was kept at 15% in betting shops, but is set to rise from 15% to 25% online in April next year.
Betting firms had warned that cost increases would lead to job losses and betting shop closures, but MPs dismissed the warnings as "scaremongering".
During the summer, Ladbrokes owner Entain announced job cuts, with news agency Reuters reporting 500 roles were being removed.
Punters' winnings from gambling are not taxed in the UK, nor is VAT charged on bets.
Flutter said its restructuring plan would cost between $80m and $90m.
The company has claimed in previous financial results that the impact of UK tax rises would hit its underlying profit by $320m this year and $540m in 2027, before any savings or restructure to mitigate the impact.`,
    bodyJa: `Paddy Power cuts 1,400 jobs and blames betting tax rises
- Published
Paddy Power-owner Flutter has announced plans to cut up to 1,400 jobs as its boss claimed the company "cannot fully absorb" tax rises imposed on the gambling industry.
Staff based in Leeds and Dublin, as well as workers for its UK and Ireland business at Flutter's Portugal and Romania sites, will be most affected, but what roles are at risk has not been disclosed.
The government announced taxes rises on online casino and sports betting, with an exemption for horse racing, in the Budget last year.
Flutter boss Kevin Harrington said the tax hikes had "fundamentally changed" the economic model of the UK betting and gaming industry, arguing it had helped "fuel the unlicensed, unregulated market".
"We continue to expect these tax increases to have a very significant impact on the overall market," Flutter Entertainment said on Tuesday.
Flutter, which also owns Sky Bet and Betfair, employs 28,500 people across the world, including 9,000 in the UK and Ireland.
As well as its Leeds and Dublin offices, the BBC understands the cuts could also affect staff based in London and Sunderland, as well as Malta and Gibraltar.
Harrington, who is chief executive of the betting giant's UK and Ireland business, said: "As we warned a year ago, we cannot fully absorb a rise of this magnitude without reducing our fixed cost base and therefore must restructure our business so that we can best position ourselves for the future."
A government spokesperson said the job cuts were a "commercial decision for Flutter, not the UK government".
"However, we understand this will be a difficult time for the workers," they added.
Flutter delisted from the London Stock Exchange in August in a blow to the UK, with its shares now solely traded in New York.
In its most recent results, the company reported a $299m (£224m) pre-tax loss for the three months to June for its entire business worldwide, compared to a $205m profit in the same period last year. Sales rose 3% to $4.3bn.
However, revenues in the UK and Ireland rose by 4% over the period, due to strong growth in online gambling games.
Some online gambling tax rises announced in last year's Budget took effect in April. This included remote gaming duty, which is paid on online casino betting, rising from 21% to 40%.
General betting duty, paid on the profits made from various forms of sports betting, was kept at 15% in betting shops, but is set to rise from 15% to 25% online in April next year.
Betting firms had warned that cost increases would lead to job losses and betting shop closures, but MPs dismissed the warnings as "scaremongering".
During the summer, Ladbrokes owner Entain announced job cuts, with news agency Reuters reporting 500 roles were being removed.
Punters' winnings from gambling are not taxed in the UK, nor is VAT charged on bets.
Flutter said its restructuring plan would cost between $80m and $90m.
The company has claimed in previous financial results that the impact of UK tax rises would hit its underlying profit by $320m this year and $540m in 2027, before any savings or restructure to mitigate the impact.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cqzrdpkm3g84o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-20T15:53:13+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/826e/live/4d1d92e0-cc80-11f1-9a39-31b474234113.jpg",
    readTime: 8,
  },
  {
    id: "union-attacks-natwest-plans-to-get-worke-46d1aed8",
    title: "Union attacks NatWest plans to get workers back to the office",
    titleJa: "Union attacks NatWest plans to get workers back to the office",
    summaryJa: "The bank says workers will be required to attend the office at least two days a week from February.",
    bodyOriginal: `Union attacks NatWest plans to get workers back to the office
- Published
The Unite union has hit out at a plan by NatWest to reduce the rights of 30,000 of its employees to work from home.
NatWest says it is moving to a hybrid approach where workers will be required to attend the office at least two days a week, from February.
The bank says this is still very competitive with the rest of the finance industry, and exceptions will be made for colleagues who require additional flexibility.
But Unite said NatWest's decision was "out of touch with the realities facing its workforce", with many facing higher travel and childcare costs.
Firms have been gradually drawing people back into the office since working from home became the norm for some office workers during the Covid pandemic.
In January last year, Amazon required staff to return to the office five days a week after they had been working two days at home.
Other firms such as Boots and JP Morgan have brought in policies requiring head office staff to be in every day.
But Barclays faced a backlash from staff last month over plans to require workers to go to the office three days a week. It brought in a longer transition period in response to staff and union complaints.
Unite said NatWest was abolishing its "remote first" employment category, which allows 13,497 workers to attend the office around twice a month, and requiring 17,272 hybrid workers to increase their office attendance.
The union says that many of the affected workers are lower-paid grades, and the new requirements will increase cost-of-living pressures, while disrupting the arrangements of disabled workers and carers.
In a statement, Unite general secretary Sharon Graham called NatWest's move a "kick in the teeth" for its workers.
"Thousands of workers face higher travel and childcare costs and disruption to caring responsibilities," she said
"For NatWest to impose these changes while reneging on existing agreements shows complete contempt for its workforce."
Graham called on NatWest to "ditch these proposals and engage properly with its workers".
A NatWest spokesman said: "Flexible working remains an important part of how we work but we've also learned more about the value that spending time together brings for our colleagues and customers - helping teams collaborate, share ideas, build relationships and learn from one another.
"That's why we're introducing a more consistent approach across the bank, with colleagues expected to spend at least two days a week in the office, depending on the needs of their role and business area.
"We recognise this will be a change for some colleagues and we're giving them time to plan ahead and will support them through the transition."`,
    bodyJa: `Union attacks NatWest plans to get workers back to the office
- Published
The Unite union has hit out at a plan by NatWest to reduce the rights of 30,000 of its employees to work from home.
NatWest says it is moving to a hybrid approach where workers will be required to attend the office at least two days a week, from February.
The bank says this is still very competitive with the rest of the finance industry, and exceptions will be made for colleagues who require additional flexibility.
But Unite said NatWest's decision was "out of touch with the realities facing its workforce", with many facing higher travel and childcare costs.
Firms have been gradually drawing people back into the office since working from home became the norm for some office workers during the Covid pandemic.
In January last year, Amazon required staff to return to the office five days a week after they had been working two days at home.
Other firms such as Boots and JP Morgan have brought in policies requiring head office staff to be in every day.
But Barclays faced a backlash from staff last month over plans to require workers to go to the office three days a week. It brought in a longer transition period in response to staff and union complaints.
Unite said NatWest was abolishing its "remote first" employment category, which allows 13,497 workers to attend the office around twice a month, and requiring 17,272 hybrid workers to increase their office attendance.
The union says that many of the affected workers are lower-paid grades, and the new requirements will increase cost-of-living pressures, while disrupting the arrangements of disabled workers and carers.
In a statement, Unite general secretary Sharon Graham called NatWest's move a "kick in the teeth" for its workers.
"Thousands of workers face higher travel and childcare costs and disruption to caring responsibilities," she said
"For NatWest to impose these changes while reneging on existing agreements shows complete contempt for its workforce."
Graham called on NatWest to "ditch these proposals and engage properly with its workers".
A NatWest spokesman said: "Flexible working remains an important part of how we work but we've also learned more about the value that spending time together brings for our colleagues and customers - helping teams collaborate, share ideas, build relationships and learn from one another.
"That's why we're introducing a more consistent approach across the bank, with colleagues expected to spend at least two days a week in the office, depending on the needs of their role and business area.
"We recognise this will be a change for some colleagues and we're giving them time to plan ahead and will support them through the transition."`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cmly0qwnlgdvo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-20T14:50:19+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/7ac8/live/b29c3c60-cc8b-11f1-bed8-c51b95c602ec.jpg",
    readTime: 7,
  },
  {
    id: "september-data-shows-housing-market-in-a-2529016a",
    title: "September data shows housing market in a deep freeze",
    titleJa: "September data shows housing market in a deep freeze",
    summaryJa: "New data on the housing market's performance in September is bleak, with sales, construction and sentiment all falling more than expected.",
    bodyOriginal: `Fast-rising mortgage rates in September took a harsh toll on the housing market, according to new monthly data released today.
Pending home sales, a measure of signed contracts on existing homes, dropped 7.3% from August and were down 11.3% year-over-year, according to the National Association of Realtors.
This count reflects buyers out shopping in September, when the average rate on the 30-year fixed mortgage rose sharply. It started the month around 6.8% and hit 7.6% by the end of the month, according to Mortgage News Daily.
"Although job growth and income gains can support home purchases, housing affordability is more affected by changes in mortgage rates," said Lawrence Yun, NAR's chief economist in a release.
Regionally, sales dropped across the nation but the biggest month-to-month drops were in the South (-8.2%) and West (-9.2%). The South is usually the most active market and the West is the most expensive.
Home construction also took a hit in September. Both single-family housing starts and building permits fell much more sharply than analysts had predicted. Starts were down 4.56% to 859,000 annualized, according to the U.S. Census. That is the lowest level since September 2025. Building permits, which are a measure of future construction, fell 4% for the month.
"We expect home construction activity to remain moribund into 2027," said Ben Ayers, senior economist at Nationwide Financial in a note to investors. "Many builders are still trying to unload current projects with widespread use of price cuts and incentives cutting into profit margins. Housing starts, especially for single-family homes, could be low for much of the next year as the market adjusts to a higher rate environment – adding a modest drag to economic growth from reduced residential construction."
An October read on homebuilder sentiment Tuesday came in at the lowest level in 14 years, according to the National Association of Home Builders. Current sales, future sales expectations and buyer traffic all fell, with the latter seeing the lowest level.
"Housing remains squeezed by supply-side constraints and significant affordability challenges," said Robert Dietz, NAHB's chief economist in a release. "Demand persists, but higher mortgage rates, elevated construction costs and weaker consumer confidence are keeping more buyers on the sidelines."`,
    bodyJa: `Fast-rising mortgage rates in September took a harsh toll on the housing market, according to new monthly data released today.
Pending home sales, a measure of signed contracts on existing homes, dropped 7.3% from August and were down 11.3% year-over-year, according to the National Association of Realtors.
This count reflects buyers out shopping in September, when the average rate on the 30-year fixed mortgage rose sharply. It started the month around 6.8% and hit 7.6% by the end of the month, according to Mortgage News Daily.
"Although job growth and income gains can support home purchases, housing affordability is more affected by changes in mortgage rates," said Lawrence Yun, NAR's chief economist in a release.
Regionally, sales dropped across the nation but the biggest month-to-month drops were in the South (-8.2%) and West (-9.2%). The South is usually the most active market and the West is the most expensive.
Home construction also took a hit in September. Both single-family housing starts and building permits fell much more sharply than analysts had predicted. Starts were down 4.56% to 859,000 annualized, according to the U.S. Census. That is the lowest level since September 2025. Building permits, which are a measure of future construction, fell 4% for the month.
"We expect home construction activity to remain moribund into 2027," said Ben Ayers, senior economist at Nationwide Financial in a note to investors. "Many builders are still trying to unload current projects with widespread use of price cuts and incentives cutting into profit margins. Housing starts, especially for single-family homes, could be low for much of the next year as the market adjusts to a higher rate environment – adding a modest drag to economic growth from reduced residential construction."
An October read on homebuilder sentiment Tuesday came in at the lowest level in 14 years, according to the National Association of Home Builders. Current sales, future sales expectations and buyer traffic all fell, with the latter seeing the lowest level.
"Housing remains squeezed by supply-side constraints and significant affordability challenges," said Robert Dietz, NAHB's chief economist in a release. "Demand persists, but higher mortgage rates, elevated construction costs and weaker consumer confidence are keeping more buyers on the sidelines."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/20/september-data-shows-housing-market-in-a-deep-freeze.html",
    publishedAt: "2026-10-20T14:18:58+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 6,
  },
  {
    id: "anthropic-in-talks-with-neocloud-nscale-6a9f261b",
    title: "Anthropic in talks with neocloud Nscale over second multibillion-dollar deal, source tells CNBC",
    titleJa: "Anthropic in talks with neocloud Nscale over second multibillion-dollar deal, source tells CNBC",
    summaryJa: "Anthropic and Nscale previously inked a similar deal for a data center on the same site in the U.S.",
    bodyOriginal: `Anthropic is in talks with U.K. neocloud Nscale for a second multibillion-dollar deal to lease computing capacity at a site in the U.S., a person familiar with the matter told CNBC.
The agreement would cover a second 460-megawatt data center at the same West Virginia site as the first deal, the person said. The person asked not to be named because they were not authorized to discuss the talks. The deal could be worth around $45 billion, the person said.
CNBC reported the first deal in August.
Bloomberg first reported that Anthropic and Nscale were in talks over a second deal. Anthropic declined to comment. Nscale has been approached for comment.
AI infrastructure faces headwinds
Nvidia-backed Nscale is one of several companies that have emerged in recent years to develop the infrastructure needed to power artificial intelligence. The company builds or leases data centers and sells computing capacity to hyperscalers and AI labs.
Rivals CoreWeave and Nebius have seen their shares drop 28% and 27%, respectively, in the past month, amid concerns over heavy borrowing.
Nscale has faced its own challenges. On Sunday, U.K. newspaper The Telegraph reported that Microsoft had pulled out of a deal to anchor an Nscale data center just outside London, amid delays connecting to the country's power grid.
An Nscale spokesperson told CNBC that it remained "committed" to the project and was "exploring alternative power sources for the site."
"Our relationship with Microsoft remains strong and long-term, and this unfortunate London-wide grid issue has no impact on our other contracts," the spokesperson added.
The U.K.-based company filed to go public on the New York Stock Exchange in September.
Anthropic's computing push
Anthropic said earlier this year that growing demand for its Claude AI models and products has caused "inevitable strain" on its infrastructure.
Since then, it has announced a flurry of deals with infrastructure partners to try and increase its computing capacity, including major agreements with Advanced Micro Devices, Elon Musk's SpaceX, Google and Broadcom.`,
    bodyJa: `Anthropic is in talks with U.K. neocloud Nscale for a second multibillion-dollar deal to lease computing capacity at a site in the U.S., a person familiar with the matter told CNBC.
The agreement would cover a second 460-megawatt data center at the same West Virginia site as the first deal, the person said. The person asked not to be named because they were not authorized to discuss the talks. The deal could be worth around $45 billion, the person said.
CNBC reported the first deal in August.
Bloomberg first reported that Anthropic and Nscale were in talks over a second deal. Anthropic declined to comment. Nscale has been approached for comment.
AI infrastructure faces headwinds
Nvidia-backed Nscale is one of several companies that have emerged in recent years to develop the infrastructure needed to power artificial intelligence. The company builds or leases data centers and sells computing capacity to hyperscalers and AI labs.
Rivals CoreWeave and Nebius have seen their shares drop 28% and 27%, respectively, in the past month, amid concerns over heavy borrowing.
Nscale has faced its own challenges. On Sunday, U.K. newspaper The Telegraph reported that Microsoft had pulled out of a deal to anchor an Nscale data center just outside London, amid delays connecting to the country's power grid.
An Nscale spokesperson told CNBC that it remained "committed" to the project and was "exploring alternative power sources for the site."
"Our relationship with Microsoft remains strong and long-term, and this unfortunate London-wide grid issue has no impact on our other contracts," the spokesperson added.
The U.K.-based company filed to go public on the New York Stock Exchange in September.
Anthropic's computing push
Anthropic said earlier this year that growing demand for its Claude AI models and products has caused "inevitable strain" on its infrastructure.
Since then, it has announced a flurry of deals with infrastructure partners to try and increase its computing capacity, including major agreements with Advanced Micro Devices, Elon Musk's SpaceX, Google and Broadcom.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/20/anthropic-nscale-data-center-deal.html",
    publishedAt: "2026-10-20T14:12:38+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "investors-look-to-earnings-to-reset-the-00752be1",
    title: "Investors look to earnings to reset the bull market. The key level to watch on the S&P 500",
    titleJa: "Investors look to earnings to reset the bull market. The key level to watch on the S&P 500",
    summaryJa: "The key level traders are watching on the S&amp;P 500 that could mean an even bigger decline is ahead.",
    bodyOriginal: `Get Mike Santoli's Market Memo in your inbox first. SUBSCRIBE HERE
In a previous life, when I routinely shut down New York City bars, the end of Daylight Saving Time was an annual bonus, as 2am on a Saturday night instantly became 1am, leaving three more hours until closing time.
The financial markets now are undergoing several forms of late-cycle unease, and Wall Street is now looking for earnings season and the passage of the midterm elections to turn back the clock before last call.
To be clear, this remains a bull market, the S&P 500's uptrend unbroken, with constant rotations between AI tech and remainder of the market fitfully supporting the tape, with pullbacks limited to 3% for half a year.
Still, the index is now chopping around a flattish 50-day moving average at levels first reached 11 weeks ago, the AI-hardware cohort has badly broken stride, bank stocks are trading poorly off their results, and credit markets are getting colicky.
Late last week, the urgent selling in semiconductors and data-center equities and debt resembled the sort of forced-unwind rhythms from July, when a big upstart tech hedge fund was in the process of being all but liquidated.
A tentative bounce in semiconductor stocks Monday was minimally reassuring, in that it meant we didn't get the further disorderly purge many had braced for over the weekend (when S&P 500 "perpetual" futures on Hyperliquid had a sudden head-fake drop late Saturday).
Jason Hunter, technical strategist at JP Morgan, sets out the crucial question for a market sending mixed signals:
"With the bearish seasonal window now closing, we are left wondering if the market is in the terminal phase of a sequence of rolling corrections ahead of a typical late-year rally. Or are the plentiful amounts of bearish internal, momentum, and intra-market divergences that have formed as the S&P 500 index has decelerated below longer-term channel resistance setting the market up for a larger and more correlated setback?"
He leans toward a more cautious interpretation, keeping the S&P 500 on a short leash that extends about 2.5% lower to 7500, a break of which would lose the tape the benefit of the doubt.
Based on precedent and circumstance, the market "should" be setting up for a comeback that could reset the clock in bulls' favor. The fourth quarter after a midterm election year, historically, is overwhelmingly positive. Earnings growth projected to exceed a 20% year-over-year growth rate again this quarter can hardly be viewed as anything but a positive at least to bolster the fundamental case.
Still, against most probabilities, 2018 happened. By which I mean a 19% S&P 500 peak-to-trough decline in the fourth quarter of a midterm-election year, one that saw total S&P 500 earnings grow by more than 20%.
The 2018 tailspin had followed a massive momentum crescendo and reversal several months earlier, which gave way to an erratic tape that couldn't absorb what seemed at the time relatively unthreatening Federal Reserve tightening actions.
Financial conditions have now been tightening by means of higher Treasury yields, somewhat wider corporate-credit spreads, an uptick in volatility and a stronger U.S. dollar.
It's become common to hear investors insist that "the market is doing the Fed's tightening for it," suggesting Chairman Kevin Warsh himself should show restraint in further hiking rates despite the recent upturn in inflation. Sure, but the reason the markets are tightening is, in part, because Warsh himself expressed resolve in fighting inflation and investors therefore believe he'll take short-term rates up a bit more.
How Warsh treats these market shifts after next week's Fed meeting is another node of disagreement on the Street.
Bank of America economist Aditya Bhave says the markets are testing the Fed's pain threshold with the Nasdaq retreating 5% and credit spreads flaring a bit. The market has taken recent Fedspeak to suggest very low chances of an October rate hike, even though Warsh himself has decried forward guidance and said the Fed shouldn't suppress normal market volatility. Bhave is maintaining his non-consensus prediction for an October hike, conceding it's a close call.
Morgan Stanley equity strategist Mike Wilson takes the other side on the Fed's response to the recent tensing up of markets: "We think some acknowledgement of this tightening by Warsh would be well received by rate-sensitive areas that have already derated notably. Conversely, an indifference to this tightening may invoke memories of Powell's 2018 'auto-pilot' remarks in reference to that tightening episode."
The "de-rating" and "de-risking" process has surely been notable in recent weeks, with small and cyclical stocks under significant valuation pressure and hedge funds aggressively repositioning out of tech.
Is it enough to enliven buyers into or after the election?
Ned Davis Research thematic strategist Pat Tschosik notes his firm's proprietary market-breadth reading Big Mo Tape tentatively turning higher from oversold readings. "If Big Tech disappoints on Q3 earnings, we may get a full market washout and Big Mo could head even lower like it did in October 2023. Perhaps this is what is needed to set up for a post-midterm-election rally into yearend."
Market Temperature Gauge
John Kolovos of Macro Risk Advisors sees a similar level to JPMorgan's as the market's breaking point, while evaluating his sentiment indicator.
Kolovos on the latest reading: "A noticeable sentiment reset is underway on the heels of the AI trade unwind and tightening financial conditions. The good news is that bullish sentiment is finally starting to wash out, which should set the stage for a year-end rally. However, a break below the mid-September lows on the S&P 500 near 7,500 would warn that something more than a routine pullback is unfolding."
Around the Street
-There's something of a paradox at work – or a collective investor blind spot - when the bond market is finally offering relatively safe income after many years of meager yields and yet people continue to rush for the engineered income delivered by options-selling ETFs. This CNBC.com piece offers a thorough, smart rundown of these strategies, complete with warnings of tax pitfalls. This Bloomberg report details a more aggressive approach through funds many investors don't quite understand, while introducing me to the community of self-styled "dividend nomads."
-Anthropic's proposal to place 5% of its equity into a "public benefit fund" to help groups potentially disadvantaged by AI's propagation and Elon Musk's stated offer to give one of his SpaceX shares to every American child via Trump Accounts suggest that anxiety over AI economic disruption is going from simmer to boil.
We can cynically observe that such efforts also hype these companies' world-changing potency, a form of marketing through scare-mongering sheathed in generosity. But the concern over AI's impact on current worker groups is well-placed, even if ultimately society adapts around step-function technological change. The best hedge against AI-powered capital overtaking labor is arguably to own more capital, whether through the S&P 500 or other vehicles.
Or one could raise the value of one's human capital, through training or becoming excellent at something. This has always been Warren Buffett's answer for how one should become inflation-resistant, as he detailed at Berkshire Hathaway's annual meeting a few years ago, at the height of the pandemic inflation surge.
Market on Close
Bull markets can keep rolling for a long while after they've become fully embraced and stocks are no longer cheap. But I find myself cataloguing various ways that the cushions against adverse surprises are getting worn pretty flat.
Here's the running tally of investors' collective cash holdings as a percentage of total margin debt. It's running well below the levels of the year 2000 at this point.
Industry participants are quick to point out some extenuating factors: A massive jump in certain long-short tax-avoidance strategies that pushed up margin borrowing without representing true upside leverage. And investors these days often have their cash swept into bank deposits that might not be captured in this measure.
Still, whatever's driving it suggests high market exposures and a bit less cash buying power.
Here's a cut-to-the-chase relationship for comparing equities and bonds. Total shareholder yield – through dividends and share buybacks combined – now lags the yield on the 10-year Treasury note.
Not a bright flashing alarm, but a reason to assume that the hurdle rate for taking equity risk is a bit higher than it's been for most of the past 20 years.
SUBSCRIBE TO MIKE SANTOLI'S MARKET MEMO HERE`,
    bodyJa: `Get Mike Santoli's Market Memo in your inbox first. SUBSCRIBE HERE
In a previous life, when I routinely shut down New York City bars, the end of Daylight Saving Time was an annual bonus, as 2am on a Saturday night instantly became 1am, leaving three more hours until closing time.
The financial markets now are undergoing several forms of late-cycle unease, and Wall Street is now looking for earnings season and the passage of the midterm elections to turn back the clock before last call.
To be clear, this remains a bull market, the S&P 500's uptrend unbroken, with constant rotations between AI tech and remainder of the market fitfully supporting the tape, with pullbacks limited to 3% for half a year.
Still, the index is now chopping around a flattish 50-day moving average at levels first reached 11 weeks ago, the AI-hardware cohort has badly broken stride, bank stocks are trading poorly off their results, and credit markets are getting colicky.
Late last week, the urgent selling in semiconductors and data-center equities and debt resembled the sort of forced-unwind rhythms from July, when a big upstart tech hedge fund was in the process of being all but liquidated.
A tentative bounce in semiconductor stocks Monday was minimally reassuring, in that it meant we didn't get the further disorderly purge many had braced for over the weekend (when S&P 500 "perpetual" futures on Hyperliquid had a sudden head-fake drop late Saturday).
Jason Hunter, technical strategist at JP Morgan, sets out the crucial question for a market sending mixed signals:
"With the bearish seasonal window now closing, we are left wondering if the market is in the terminal phase of a sequence of rolling corrections ahead of a typical late-year rally. Or are the plentiful amounts of bearish internal, momentum, and intra-market divergences that have formed as the S&P 500 index has decelerated below longer-term channel resistance setting the market up for a larger and more correlated setback?"
He leans toward a more cautious interpretation, keeping the S&P 500 on a short leash that extends about 2.5% lower to 7500, a break of which would lose the tape the benefit of the doubt.
Based on precedent and circumstance, the market "should" be setting up for a comeback that could reset the clock in bulls' favor. The fourth quarter after a midterm election year, historically, is overwhelmingly positive. Earnings growth projected to exceed a 20% year-over-year growth rate again this quarter can hardly be viewed as anything but a positive at least to bolster the fundamental case.
Still, against most probabilities, 2018 happened. By which I mean a 19% S&P 500 peak-to-trough decline in the fourth quarter of a midterm-election year, one that saw total S&P 500 earnings grow by more than 20%.
The 2018 tailspin had followed a massive momentum crescendo and reversal several months earlier, which gave way to an erratic tape that couldn't absorb what seemed at the time relatively unthreatening Federal Reserve tightening actions.
Financial conditions have now been tightening by means of higher Treasury yields, somewhat wider corporate-credit spreads, an uptick in volatility and a stronger U.S. dollar.
It's become common to hear investors insist that "the market is doing the Fed's tightening for it," suggesting Chairman Kevin Warsh himself should show restraint in further hiking rates despite the recent upturn in inflation. Sure, but the reason the markets are tightening is, in part, because Warsh himself expressed resolve in fighting inflation and investors therefore believe he'll take short-term rates up a bit more.
How Warsh treats these market shifts after next week's Fed meeting is another node of disagreement on the Street.
Bank of America economist Aditya Bhave says the markets are testing the Fed's pain threshold with the Nasdaq retreating 5% and credit spreads flaring a bit. The market has taken recent Fedspeak to suggest very low chances of an October rate hike, even though Warsh himself has decried forward guidance and said the Fed shouldn't suppress normal market volatility. Bhave is maintaining his non-consensus prediction for an October hike, conceding it's a close call.
Morgan Stanley equity strategist Mike Wilson takes the other side on the Fed's response to the recent tensing up of markets: "We think some acknowledgement of this tightening by Warsh would be well received by rate-sensitive areas that have already derated notably. Conversely, an indifference to this tightening may invoke memories of Powell's 2018 'auto-pilot' remarks in reference to that tightening episode."
The "de-rating" and "de-risking" process has surely been notable in recent weeks, with small and cyclical stocks under significant valuation pressure and hedge funds aggressively repositioning out of tech.
Is it enough to enliven buyers into or after the election?
Ned Davis Research thematic strategist Pat Tschosik notes his firm's proprietary market-breadth reading Big Mo Tape tentatively turning higher from oversold readings. "If Big Tech disappoints on Q3 earnings, we may get a full market washout and Big Mo could head even lower like it did in October 2023. Perhaps this is what is needed to set up for a post-midterm-election rally into yearend."
Market Temperature Gauge
John Kolovos of Macro Risk Advisors sees a similar level to JPMorgan's as the market's breaking point, while evaluating his sentiment indicator.
Kolovos on the latest reading: "A noticeable sentiment reset is underway on the heels of the AI trade unwind and tightening financial conditions. The good news is that bullish sentiment is finally starting to wash out, which should set the stage for a year-end rally. However, a break below the mid-September lows on the S&P 500 near 7,500 would warn that something more than a routine pullback is unfolding."
Around the Street
-There's something of a paradox at work – or a collective investor blind spot - when the bond market is finally offering relatively safe income after many years of meager yields and yet people continue to rush for the engineered income delivered by options-selling ETFs. This CNBC.com piece offers a thorough, smart rundown of these strategies, complete with warnings of tax pitfalls. This Bloomberg report details a more aggressive approach through funds many investors don't quite understand, while introducing me to the community of self-styled "dividend nomads."
-Anthropic's proposal to place 5% of its equity into a "public benefit fund" to help groups potentially disadvantaged by AI's propagation and Elon Musk's stated offer to give one of his SpaceX shares to every American child via Trump Accounts suggest that anxiety over AI economic disruption is going from simmer to boil.
We can cynically observe that such efforts also hype these companies' world-changing potency, a form of marketing through scare-mongering sheathed in generosity. But the concern over AI's impact on current worker groups is well-placed, even if ultimately society adapts around step-function technological change. The best hedge against AI-powered capital overtaking labor is arguably to own more capital, whether through the S&P 500 or other vehicles.
Or one could raise the value of one's human capital, through training or becoming excellent at something. This has always been Warren Buffett's answer for how one should become inflation-resistant, as he detailed at Berkshire Hathaway's annual meeting a few years ago, at the height of the pandemic inflation surge.
Market on Close
Bull markets can keep rolling for a long while after they've become fully embraced and stocks are no longer cheap. But I find myself cataloguing various ways that the cushions against adverse surprises are getting worn pretty flat.
Here's the running tally of investors' collective cash holdings as a percentage of total margin debt. It's running well below the levels of the year 2000 at this point.
Industry participants are quick to point out some extenuating factors: A massive jump in certain long-short tax-avoidance strategies that pushed up margin borrowing without representing true upside leverage. And investors these days often have their cash swept into bank deposits that might not be captured in this measure.
Still, whatever's driving it suggests high market exposures and a bit less cash buying power.
Here's a cut-to-the-chase relationship for comparing equities and bonds. Total shareholder yield – through dividends and share buybacks combined – now lags the yield on the 10-year Treasury note.
Not a bright flashing alarm, but a reason to assume that the hurdle rate for taking equity risk is a bit higher than it's been for most of the past 20 years.
SUBSCRIBE TO MIKE SANTOLI'S MARKET MEMO HERE`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/20/santoli-key-sp-500-level-to-watch.html",
    publishedAt: "2026-10-20T12:52:29+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "u-s-oil-surges-to-top-109-brent-crude-at-d2447442",
    title: "U.S. oil surges to top $109, Brent crude at five-month high amid Mideast tensions",
    titleJa: "U.S. oil surges to top $109, Brent crude at five-month high amid Mideast tensions",
    summaryJa: "Oil extended its rally on Tuesday as investors continued to monitor developments in the Middle East.",
    bodyOriginal: `Oil prices climbed on Tuesday as investors continued to monitor simmering tensions in the Middle East and U.S. front-month futures contracts neared expiry.
Front-month U.S. West Texas Intermediate crude oil futures jumped 5.23% by 7:04 a.m. ET, trading at around $109.08 per barrel. The contracts expire on Tuesday.
WTI crude futures for November delivery have been on a tear this month, with Tuesday's moves putting the contracts on track for their ninth consecutive session of gains and a monthly rise of almost 20%.
Global benchmark Brent crude futures for December delivery were last seen trading 1.65% higher at $111.36 per barrel — their highest price since May.
Developments in the Middle East remain in focus, with attacks on commercial ships transiting the Strait of Hormuz escalating in recent weeks. At least 18 vessels have come under fire over the past two weeks, according to ship tracker Kpler.
Iran's Revolutionary Guard Corps said Tuesday that two "non-compliant" oil tankers had been set ablaze in the strait after hitting mines laid by its naval unit, Iranian state-affiliated news agency Tasnim reported.
Meanwhile, Foreign Ministry Spokesperson Esmaeil Baqaei said at a weekly news conference on Tuesday that Tehran would respond to any American strike "in equal measure, if not more forcefully," according to Tasnim.
U.S. President Donald Trump said earlier this month that American forces will not attack Iran before the midterm elections on Nov. 3.
Tamas Varga, analyst at PVM Oil Associates, told CNBC in an email on Tuesday that front-end WTI strength ahead of the contract expiry is a sign of tightness in the global crude oil market.
"It is a reflection of falling export volumes from the Middle East as tanker attacks and Houthi strikes on Saudi oil infrastructure intensify," he said. "Secondly, the U.S. decision to exempt Russian shadow fleet from sanctions will push freight rates possibly lower, which was a prohibitive factor to increase demand for U.S.-sourced crude."
"With this hurdle removed, at least temporary, U.S. crude oil grades are back in play as replacements of Mideast crude oil," he added. "Thirdly, U.S. commercial oil stocks are expected to have declined last week."`,
    bodyJa: `Oil prices climbed on Tuesday as investors continued to monitor simmering tensions in the Middle East and U.S. front-month futures contracts neared expiry.
Front-month U.S. West Texas Intermediate crude oil futures jumped 5.23% by 7:04 a.m. ET, trading at around $109.08 per barrel. The contracts expire on Tuesday.
WTI crude futures for November delivery have been on a tear this month, with Tuesday's moves putting the contracts on track for their ninth consecutive session of gains and a monthly rise of almost 20%.
Global benchmark Brent crude futures for December delivery were last seen trading 1.65% higher at $111.36 per barrel — their highest price since May.
Developments in the Middle East remain in focus, with attacks on commercial ships transiting the Strait of Hormuz escalating in recent weeks. At least 18 vessels have come under fire over the past two weeks, according to ship tracker Kpler.
Iran's Revolutionary Guard Corps said Tuesday that two "non-compliant" oil tankers had been set ablaze in the strait after hitting mines laid by its naval unit, Iranian state-affiliated news agency Tasnim reported.
Meanwhile, Foreign Ministry Spokesperson Esmaeil Baqaei said at a weekly news conference on Tuesday that Tehran would respond to any American strike "in equal measure, if not more forcefully," according to Tasnim.
U.S. President Donald Trump said earlier this month that American forces will not attack Iran before the midterm elections on Nov. 3.
Tamas Varga, analyst at PVM Oil Associates, told CNBC in an email on Tuesday that front-end WTI strength ahead of the contract expiry is a sign of tightness in the global crude oil market.
"It is a reflection of falling export volumes from the Middle East as tanker attacks and Houthi strikes on Saudi oil infrastructure intensify," he said. "Secondly, the U.S. decision to exempt Russian shadow fleet from sanctions will push freight rates possibly lower, which was a prohibitive factor to increase demand for U.S.-sourced crude."
"With this hurdle removed, at least temporary, U.S. crude oil grades are back in play as replacements of Mideast crude oil," he added. "Thirdly, U.S. commercial oil stocks are expected to have declined last week."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/20/oil-price-wti-brent-crude.html",
    publishedAt: "2026-10-20T11:19:45+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 6,
  },
  {
    id: "best-buy-launches-new-gaming-hub-ahead-o-3b8e5320",
    title: "Best Buy launches new gaming hub ahead of 'Zelda' and 'Grand Theft Auto VI'",
    titleJa: "Best Buy launches new gaming hub ahead of 'Zelda' and 'Grand Theft Auto VI'",
    summaryJa: "Best Buy is launching a new gaming experience for customers as it leans into the business ahead of this fall's big launches.",
    bodyOriginal: `Best Buy is tapping further into a growing customer cohort: gamers.
Chief Revenue Officer Patrick McGinnis told CNBC exclusively that the electronics retailer is launching a new experience Tuesday for customers featuring gaming content, new technology and special offers, among other features. The online destination is called Best Buy Gamers and is launching in a beta version.
"Gamers are a customer that are really like no other in terms of their passion for not just the tech, the titles, but also how they want to work with each other as a community," McGinnis said. "So for us, being relevant for that customer wherever and whenever they want to interact with the thing that they love is really important."
Best Buy says tens of millions of gamers shop at the retailer each year, including trying out games in the store and seeking advice from in-store experts. The new gaming experience, created in partnership with video game website IGN, will offer members gaming articles and reviews, live Best Buy event updates for launches and deals on new technology.
The announcement comes ahead of some of the biggest launches in gaming this year, including the Nov. 5 release of "The Legend of Zelda: Ocarina of Time," a remake from Nintendo, and the Nov. 19 launch of Take-Two Interactive's highly anticipated "Grand Theft Auto VI."
McGinnis said the timing of the rollout is "pretty perfect" given the slate of new video games over the next month, though Best Buy has been developing the new platform for over a year.
"We want to be relevant for our gaming customers, not just during the important, big tentpole periods of the calendar, like when we have these big gaming launches coming up, but really every day," he said. "We want to be there when they discover new titles and connect with the community, and not just when they're buying a big console or a new gaming title."
Best Buy has been leaning into gaming as it sees growing demand from its customers. For its fiscal first-quarter results reported in May, the company said gaming and computing was one of its biggest drivers of growth. On a call with analysts to discuss Best Buy's fiscal second quarter in August, incoming CEO Jason Bonfig said the company expects that demand for "Grand Theft Auto VI" will boost the gaming category.
Best Buy has been looking for growth drivers as the retailer tries to revitalize its business performance under Bonfig. The company has seen slumping sales and was hit by tariffs and lower consumer confidence, among other factors. Tapping into gaming could help revitalize the retailer.
McGinnis said the new gamer experience is an example of the company's strategic goals coming together.
"If you think about what those priorities are, the Gamers [beta] community is definitely a way that we're expanding and growing our reach, reaching that gaming customer," he said. "Providing a place for them to again pursue what they're most passionate about certainly is elevating our experience."
Best Buy is also leaning into in-store experiences around gaming, starting with a location in Torrance, California, next month, where Sony, Nintendo and Microsoft will come together to offer gaming experiences and activations for customers.
With the combination of physical retail and the online platform, McGinnis said, Best Buy hopes to sit at the intersection of technology, entertainment and culture within the gaming community. He said the company plans to tweak its new online experience based on feedback from its customers and continue innovating to meet its audience where it is, especially as the gaming segment continues to be one of the company's strongest performers.
"We recognize the gaming customer as incredibly passionate and wants to engage with what they love in a lot of different ways," he said. "There's observations of gaps that exist in the places and spaces where gamers are engaged, and we thought that we could build something that would really complement what they're engaging with today from a social platform perspective, not to replace those types of experiences in any way, shape or form."`,
    bodyJa: `Best Buy is tapping further into a growing customer cohort: gamers.
Chief Revenue Officer Patrick McGinnis told CNBC exclusively that the electronics retailer is launching a new experience Tuesday for customers featuring gaming content, new technology and special offers, among other features. The online destination is called Best Buy Gamers and is launching in a beta version.
"Gamers are a customer that are really like no other in terms of their passion for not just the tech, the titles, but also how they want to work with each other as a community," McGinnis said. "So for us, being relevant for that customer wherever and whenever they want to interact with the thing that they love is really important."
Best Buy says tens of millions of gamers shop at the retailer each year, including trying out games in the store and seeking advice from in-store experts. The new gaming experience, created in partnership with video game website IGN, will offer members gaming articles and reviews, live Best Buy event updates for launches and deals on new technology.
The announcement comes ahead of some of the biggest launches in gaming this year, including the Nov. 5 release of "The Legend of Zelda: Ocarina of Time," a remake from Nintendo, and the Nov. 19 launch of Take-Two Interactive's highly anticipated "Grand Theft Auto VI."
McGinnis said the timing of the rollout is "pretty perfect" given the slate of new video games over the next month, though Best Buy has been developing the new platform for over a year.
"We want to be relevant for our gaming customers, not just during the important, big tentpole periods of the calendar, like when we have these big gaming launches coming up, but really every day," he said. "We want to be there when they discover new titles and connect with the community, and not just when they're buying a big console or a new gaming title."
Best Buy has been leaning into gaming as it sees growing demand from its customers. For its fiscal first-quarter results reported in May, the company said gaming and computing was one of its biggest drivers of growth. On a call with analysts to discuss Best Buy's fiscal second quarter in August, incoming CEO Jason Bonfig said the company expects that demand for "Grand Theft Auto VI" will boost the gaming category.
Best Buy has been looking for growth drivers as the retailer tries to revitalize its business performance under Bonfig. The company has seen slumping sales and was hit by tariffs and lower consumer confidence, among other factors. Tapping into gaming could help revitalize the retailer.
McGinnis said the new gamer experience is an example of the company's strategic goals coming together.
"If you think about what those priorities are, the Gamers [beta] community is definitely a way that we're expanding and growing our reach, reaching that gaming customer," he said. "Providing a place for them to again pursue what they're most passionate about certainly is elevating our experience."
Best Buy is also leaning into in-store experiences around gaming, starting with a location in Torrance, California, next month, where Sony, Nintendo and Microsoft will come together to offer gaming experiences and activations for customers.
With the combination of physical retail and the online platform, McGinnis said, Best Buy hopes to sit at the intersection of technology, entertainment and culture within the gaming community. He said the company plans to tweak its new online experience based on feedback from its customers and continue innovating to meet its audience where it is, especially as the gaming segment continues to be one of the company's strongest performers.
"We recognize the gaming customer as incredibly passionate and wants to engage with what they love in a lot of different ways," he said. "There's observations of gaps that exist in the places and spaces where gamers are engaged, and we thought that we could build something that would really complement what they're engaging with today from a social platform perspective, not to replace those types of experiences in any way, shape or form."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/20/best-buy-gamers-beta-ign.html",
    publishedAt: "2026-10-20T11:00:01+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "general-motors-beats-wall-street-s-q3-ea-4734901b",
    title: "General Motors beats Wall Street's Q3 earnings expectations, narrows full-year guidance",
    titleJa: "General Motors beats Wall Street's Q3 earnings expectations, narrows full-year guidance",
    summaryJa: "GM narrowed its 2026 earnings guidance and raised its adjusted automotive free cash flow outlook after beating Wall Street’s third-quarter estimates.",
    bodyOriginal: `DETROIT — General Motors narrowed its 2026 earnings guidance and raised its free cash flow expectations after beating Wall Street's third-quarter expectations.
The Detroit automaker also announced a new multiyear stock buyback of $20 billion after GM completed a $6 billion share repurchase program that was announced in January. GM did not disclose a specific time to complete the program.
Tune in at 7:15 a.m. ET as GM CFO Paul Jacobson joins CNBC TV to discuss earnings. Watch in real time on CNBC+ or the CNBC Pro stream.
Here's how GM performed in the third quarter, compared with average estimates compiled by LSEG:
- Earnings per share: $3.70 adjusted vs. $3.63 expected
- Revenue: $50.02 billion vs. $48.7 billion expected
The new guidance includes adjusted earnings before interest and taxes of between $14.5 billion and $15.5 billion, or $12.75 to $13.75 adjusted earnings per share, and adjusted automotive free cash flow of between $11.5 billion and $12.5 billion.
That compares with its raised guidance from July that included adjusted EBIT of between $14 billion and $16 billion, or $12 to $14 adjusted EPS, and adjusted automotive free cash flow of $9.5 billion to $11.5 billion.
GM stock was off roughly 5% during premarket trading despite the earnings beats.
Wall Street analysts were mixed before the report on whether GM would raise its guidance Tuesday amid concerns of slowing sales and rising commodity costs.
GM on Tuesday said it expects commodity inflation costs to be around $2 billion, which was the high end of its previous guidance. That includes higher costs for logistics and dynamic random-access memory, or DRAM, chips that are impacting multiple industries.
While the inflationary costs were at the automaker's high end of guidance, GM said its gross tariff costs are expected to be at the low end of its expected $2.5 billion to $3.5 billion range. Warranty costs are expected to be at high end between $1 billion and $1.5 billion, GM said.
"GM is performing well, and we are working hard to continue our momentum despite growing inflationary pressures through strategic investments in new products and services, and through improved quality and operating efficiency," GM CEO Mary Barra said Tuesday in a letter to shareholders.
The automaker also said the costs of its pullback in all-electric vehicles announced last year were "substantially completed," saying it has recorded $11.2 billion in such charges since the second half of last year, including paying $4.6 billion of $7.4 billion in cash through the third quarter.
The company's net income attributed to stockholders was $3.3 billion during the third quarter, up roughly $2 billion from a year earlier.
GM's North American operations continued to lead the automaker's results, accounting for $3.6 billion of its $4.1 billion in adjusted EBIT results during the third quarter.
GM's 2025 third-quarter results included $48.59 billion in revenue, net income attributable to stockholders of $1.3 billion and earnings per share of $2.80 adjusted.`,
    bodyJa: `DETROIT — General Motors narrowed its 2026 earnings guidance and raised its free cash flow expectations after beating Wall Street's third-quarter expectations.
The Detroit automaker also announced a new multiyear stock buyback of $20 billion after GM completed a $6 billion share repurchase program that was announced in January. GM did not disclose a specific time to complete the program.
Tune in at 7:15 a.m. ET as GM CFO Paul Jacobson joins CNBC TV to discuss earnings. Watch in real time on CNBC+ or the CNBC Pro stream.
Here's how GM performed in the third quarter, compared with average estimates compiled by LSEG:
- Earnings per share: $3.70 adjusted vs. $3.63 expected
- Revenue: $50.02 billion vs. $48.7 billion expected
The new guidance includes adjusted earnings before interest and taxes of between $14.5 billion and $15.5 billion, or $12.75 to $13.75 adjusted earnings per share, and adjusted automotive free cash flow of between $11.5 billion and $12.5 billion.
That compares with its raised guidance from July that included adjusted EBIT of between $14 billion and $16 billion, or $12 to $14 adjusted EPS, and adjusted automotive free cash flow of $9.5 billion to $11.5 billion.
GM stock was off roughly 5% during premarket trading despite the earnings beats.
Wall Street analysts were mixed before the report on whether GM would raise its guidance Tuesday amid concerns of slowing sales and rising commodity costs.
GM on Tuesday said it expects commodity inflation costs to be around $2 billion, which was the high end of its previous guidance. That includes higher costs for logistics and dynamic random-access memory, or DRAM, chips that are impacting multiple industries.
While the inflationary costs were at the automaker's high end of guidance, GM said its gross tariff costs are expected to be at the low end of its expected $2.5 billion to $3.5 billion range. Warranty costs are expected to be at high end between $1 billion and $1.5 billion, GM said.
"GM is performing well, and we are working hard to continue our momentum despite growing inflationary pressures through strategic investments in new products and services, and through improved quality and operating efficiency," GM CEO Mary Barra said Tuesday in a letter to shareholders.
The automaker also said the costs of its pullback in all-electric vehicles announced last year were "substantially completed," saying it has recorded $11.2 billion in such charges since the second half of last year, including paying $4.6 billion of $7.4 billion in cash through the third quarter.
The company's net income attributed to stockholders was $3.3 billion during the third quarter, up roughly $2 billion from a year earlier.
GM's North American operations continued to lead the automaker's results, accounting for $3.6 billion of its $4.1 billion in adjusted EBIT results during the third quarter.
GM's 2025 third-quarter results included $48.59 billion in revenue, net income attributable to stockholders of $1.3 billion and earnings per share of $2.80 adjusted.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/20/general-motors-gm-earnings-q3-2026.html",
    publishedAt: "2026-10-20T10:46:05+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 8,
  },
  {
    id: "zelenskyy-to-meet-with-u-s-envoy-as-tens-baa324e8",
    title: "Zelenskyy to meet with U.S. envoy as tensions with Trump mount",
    titleJa: "Zelenskyy to meet with U.S. envoy as tensions with Trump mount",
    summaryJa: "Ukraine's President Volodymyr Zelenskyy is set to meet with U.S. special envoys on Tuesday after President Donald Trump aimed fresh criticism at the wartime leader.",
    bodyOriginal: `Ukrainian President Volodymyr Zelenskyy is set to meet with U.S. special envoys on Tuesday after U.S. President Donald Trump aimed a fresh spate of criticism at the wartime leader.
Zelenskyy will arrive in Norway on Tuesday and meet with the country's Prime Minister Jonas Gahr and President of Finland Alexander Stubb in Oslo later in the day. U.S. envoys Steve Witkoff and Jared Kushner will also take part in the discussions.
The meetings come as tensions mount between Zelenskyy and Trump, while the U.S. has recently eased some pressure on Russia, which invaded Ukraine in 2022.
Ukraine requested that Witkoff and Kushner join the meeting in Oslo, Norway, Prime Minister Jonas Gahr Støre said in a statement.
"Diplomatic efforts have previously taken place in several countries, and Norway and Finland are pleased to be able to continue this work. The aim is to put diplomatic efforts on a more constructive path," he said.
Trump responded to criticism on Monday that he waived sanctions against Russia recently and is on the "wrong side" of history.
"Zelenskyy doesn't know what he's talking about," Trump said to reporters outside the White House. "Zelenskyy is a man that should have had this war settled a long time ago."
"I think it's time for somebody else to negotiate on behalf of Ukraine," Trump said, echoing previous calls for a "new president" in Kyiv. "If he would have listened to me, he would have made a much better deal a long time ago, and he'd have a million people living from his side."
Trump also said he would meet with Russian President Vladimir Putin and Chinese President Xi Jinping to figure out how to end the Ukraine war, which reportedly could exclude Zelenskyy. "Anything I can do to end the war, whether somebody's there or not," Trump said.
Starshield complications
Last week, Zelenskyy hit out at the U.S. government over restrictions on access to satellite services offered by SpaceX's military satellite system, Starshield, which is critical to Ukraine's defense against Russian strikes.
"No explanation for either of these issues has been provided to Ukraine by the American side," Zelenskyy said on Monday.
SpaceX CEO Elon Musk had shifted the blame to the U.S. government and Trump, who he said are "ultimately" responsible for any slowdowns. Secretary of State Marco Rubio denied that the U.S. is responsible, and Treasury Secretary Scott Bessent told Zelenskyy to be "very careful about making statements like this that aren't true."
Trump said Monday that he doesn't know who restricted the Starlink service in Ukraine, "but I'd like to find out."
— CNBC's Kevin Breuninger has contributed to this report.`,
    bodyJa: `Ukrainian President Volodymyr Zelenskyy is set to meet with U.S. special envoys on Tuesday after U.S. President Donald Trump aimed a fresh spate of criticism at the wartime leader.
Zelenskyy will arrive in Norway on Tuesday and meet with the country's Prime Minister Jonas Gahr and President of Finland Alexander Stubb in Oslo later in the day. U.S. envoys Steve Witkoff and Jared Kushner will also take part in the discussions.
The meetings come as tensions mount between Zelenskyy and Trump, while the U.S. has recently eased some pressure on Russia, which invaded Ukraine in 2022.
Ukraine requested that Witkoff and Kushner join the meeting in Oslo, Norway, Prime Minister Jonas Gahr Støre said in a statement.
"Diplomatic efforts have previously taken place in several countries, and Norway and Finland are pleased to be able to continue this work. The aim is to put diplomatic efforts on a more constructive path," he said.
Trump responded to criticism on Monday that he waived sanctions against Russia recently and is on the "wrong side" of history.
"Zelenskyy doesn't know what he's talking about," Trump said to reporters outside the White House. "Zelenskyy is a man that should have had this war settled a long time ago."
"I think it's time for somebody else to negotiate on behalf of Ukraine," Trump said, echoing previous calls for a "new president" in Kyiv. "If he would have listened to me, he would have made a much better deal a long time ago, and he'd have a million people living from his side."
Trump also said he would meet with Russian President Vladimir Putin and Chinese President Xi Jinping to figure out how to end the Ukraine war, which reportedly could exclude Zelenskyy. "Anything I can do to end the war, whether somebody's there or not," Trump said.
Starshield complications
Last week, Zelenskyy hit out at the U.S. government over restrictions on access to satellite services offered by SpaceX's military satellite system, Starshield, which is critical to Ukraine's defense against Russian strikes.
"No explanation for either of these issues has been provided to Ukraine by the American side," Zelenskyy said on Monday.
SpaceX CEO Elon Musk had shifted the blame to the U.S. government and Trump, who he said are "ultimately" responsible for any slowdowns. Secretary of State Marco Rubio denied that the U.S. is responsible, and Treasury Secretary Scott Bessent told Zelenskyy to be "very careful about making statements like this that aren't true."
Trump said Monday that he doesn't know who restricted the Starlink service in Ukraine, "but I'd like to find out."
— CNBC's Kevin Breuninger has contributed to this report.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/20/zelenskyy-witkoff-trump-ukraine-russia.html",
    publishedAt: "2026-10-20T10:30:49+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 7,
  },
  {
    id: "chancellor-rejects-calls-to-raise-capita-91ccae25",
    title: "Chancellor rejects calls to raise Capital Gains Tax in Budget",
    titleJa: "Chancellor rejects calls to raise Capital Gains Tax in Budget",
    summaryJa: "Influential Labour figures had been pushing for equalising CGT and income tax, but critics have said this could drive wealthy people out of Britain.",
    bodyOriginal: `Chancellor rejects calls to raise Capital Gains Tax in Budget
- Published
Chancellor John Healey has dismissed calls from some Labour MPs to increase Capital Gains Tax (CGT).
Cabinet ministers Wes Streeting and Louise Haigh both previously voiced support for raising CGT before Andy Burnham became prime minister in July.
Ahead of next week's Budget, as first reported by the Times, external, Healey is minded not to increase CGT - which is imposed on the profit people make when they sell an asset that has increased in value, such as shares in a company or properties which are not primary residences.
The move followed warnings that it could end up costing the government money if wealthy people leave the country or defer selling off assets.
If you pay income tax at the basic rate then CGT is charged at 18%. For higher and additional rate income tax payers, the CGT rate is 24%.
Last year, HMRC estimated, external that lifting the lower rate of CGT by 1% could raise £5m by 2028-9 but increasing the higher rate of CGT by 10% would reduce the Treasury's receipts by £3.6bn in 2028-9.
The amount raised could be reduced if people adapt their behaviour to the tax rise, for example by moving abroad or deciding not to sell a property.
The chancellor gave an indication of his approach last month in a speech when he spoke about the importance of businesses and self-employed people making profits.
"I want to see this country as a country of wealth creation. I want our government decisions and policies to raise the levels of confidence, and investment, and profit in British business," Healey said.
Burnham has faced warnings against lifting CGT. His former adviser and Goldman Sachs Chief Economist Lord Jim O'Neill suggested it would send "the wrong message to business".
But influential Labour figures had pushed for equalising CGT and income tax, with the former generally attracting a lower tax rate.
Louise Haigh, a key ally of the prime minister, had suggested capital gains should go up to be closer to income tax, before she became Burnham's first secretary of state.
In an article for the Renewal journal,, external Haigh argued that raising CGT would "shift the taxation burden away from punishing work, and towards unproductive capital accumulation which does little to grow the everyday economy".
She said this could be accompanied by measures to ensure that "genuine investment returns are not penalised".
Defence Secretary Wes Streeting called for a "wealth tax that works" in May, shortly after resigning as a minister in former Prime Minister Sir Keir Starmer's government.
He had argued that equalising CGT with income tax would address an unfair system that was "penalising work".
Healey had already ruled out levelling the two tax rates, according to a report in the Financial Times last week, external.
Asked about the government's plans for CGT on BBC Breakfast, Communities Secretary Angela Rayner would not speculate on the Budget.
Pressed over whether rejecting calls to increase the tax was a win for the rich, she said the government had already taken steps to give people "breathing space" and help with the cost of living.
It comes after senior banking executives told the BBC they expect Healey to raise taxes on the sector. UK banks have been reporting bumper profits, leading to calls from unions for higher taxes.
Healey is due to set out his tax and spending plans at his first Budget on 28 October, against the backdrop of the US-Iran war which has led to rising prices.
The chancellor is under pressure to find measures to ease the cost of living and fund an increase for defence at his spending review next year.
The chancellor's options for raising money are limited as Labour's 2024 manifesto pledged not to increase income tax, National Insurance and VAT, the three big revenue raisers.
The government is also restricted in how much it can borrow due to its self-imposed rules on debt.
In a pre-Budget speech on Tuesday, Conservative leader Kemi Badenoch urged the government to cut spending and reduce its borrowing.
She said the prime minister and the chancellor should "live within our means" and pointed to her party's plan to save £70bn in cuts, including to welfare and overseas development aid.
Badenoch told an audience in central London that Labour would not "find the courage" to cut spending.
She said the chancellor wanted to deliver a "nothing to see here Budget" but added: "Britain cannot afford to do as little as possible."
The Liberal Democrats have said the government could raise £14bn partly by introducing a windfall tax on the profits of banks.
The party's deputy leader Daisy Cooper said the money could go towards cutting fuel duty, rail and bus fares and VAT for hospitality businesses.
Get in touch
What are you hoping for from the Budget? What questions do you have?
Related topics
- Published2 hours ago
- Published21 May
- Published4 days ago`,
    bodyJa: `Chancellor rejects calls to raise Capital Gains Tax in Budget
- Published
Chancellor John Healey has dismissed calls from some Labour MPs to increase Capital Gains Tax (CGT).
Cabinet ministers Wes Streeting and Louise Haigh both previously voiced support for raising CGT before Andy Burnham became prime minister in July.
Ahead of next week's Budget, as first reported by the Times, external, Healey is minded not to increase CGT - which is imposed on the profit people make when they sell an asset that has increased in value, such as shares in a company or properties which are not primary residences.
The move followed warnings that it could end up costing the government money if wealthy people leave the country or defer selling off assets.
If you pay income tax at the basic rate then CGT is charged at 18%. For higher and additional rate income tax payers, the CGT rate is 24%.
Last year, HMRC estimated, external that lifting the lower rate of CGT by 1% could raise £5m by 2028-9 but increasing the higher rate of CGT by 10% would reduce the Treasury's receipts by £3.6bn in 2028-9.
The amount raised could be reduced if people adapt their behaviour to the tax rise, for example by moving abroad or deciding not to sell a property.
The chancellor gave an indication of his approach last month in a speech when he spoke about the importance of businesses and self-employed people making profits.
"I want to see this country as a country of wealth creation. I want our government decisions and policies to raise the levels of confidence, and investment, and profit in British business," Healey said.
Burnham has faced warnings against lifting CGT. His former adviser and Goldman Sachs Chief Economist Lord Jim O'Neill suggested it would send "the wrong message to business".
But influential Labour figures had pushed for equalising CGT and income tax, with the former generally attracting a lower tax rate.
Louise Haigh, a key ally of the prime minister, had suggested capital gains should go up to be closer to income tax, before she became Burnham's first secretary of state.
In an article for the Renewal journal,, external Haigh argued that raising CGT would "shift the taxation burden away from punishing work, and towards unproductive capital accumulation which does little to grow the everyday economy".
She said this could be accompanied by measures to ensure that "genuine investment returns are not penalised".
Defence Secretary Wes Streeting called for a "wealth tax that works" in May, shortly after resigning as a minister in former Prime Minister Sir Keir Starmer's government.
He had argued that equalising CGT with income tax would address an unfair system that was "penalising work".
Healey had already ruled out levelling the two tax rates, according to a report in the Financial Times last week, external.
Asked about the government's plans for CGT on BBC Breakfast, Communities Secretary Angela Rayner would not speculate on the Budget.
Pressed over whether rejecting calls to increase the tax was a win for the rich, she said the government had already taken steps to give people "breathing space" and help with the cost of living.
It comes after senior banking executives told the BBC they expect Healey to raise taxes on the sector. UK banks have been reporting bumper profits, leading to calls from unions for higher taxes.
Healey is due to set out his tax and spending plans at his first Budget on 28 October, against the backdrop of the US-Iran war which has led to rising prices.
The chancellor is under pressure to find measures to ease the cost of living and fund an increase for defence at his spending review next year.
The chancellor's options for raising money are limited as Labour's 2024 manifesto pledged not to increase income tax, National Insurance and VAT, the three big revenue raisers.
The government is also restricted in how much it can borrow due to its self-imposed rules on debt.
In a pre-Budget speech on Tuesday, Conservative leader Kemi Badenoch urged the government to cut spending and reduce its borrowing.
She said the prime minister and the chancellor should "live within our means" and pointed to her party's plan to save £70bn in cuts, including to welfare and overseas development aid.
Badenoch told an audience in central London that Labour would not "find the courage" to cut spending.
She said the chancellor wanted to deliver a "nothing to see here Budget" but added: "Britain cannot afford to do as little as possible."
The Liberal Democrats have said the government could raise £14bn partly by introducing a windfall tax on the profits of banks.
The party's deputy leader Daisy Cooper said the money could go towards cutting fuel duty, rail and bus fares and VAT for hospitality businesses.
Get in touch
What are you hoping for from the Budget? What questions do you have?
Related topics
- Published2 hours ago
- Published21 May
- Published4 days ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c50me4w4x1vyo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-20T10:06:34+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/95e7/live/6cd357a0-cc17-11f1-b7d0-7f346cefa9a9.jpg",
    readTime: 10,
  },
  {
    id: "walmart-launches-joint-membership-with-s-eb220a4d",
    title: "Walmart launches joint membership with Sam's Club as it leans into delivery, gas discounts",
    titleJa: "Walmart launches joint membership with Sam's Club as it leans into delivery, gas discounts",
    summaryJa: "Walmart is now offering a joint membership with Sam's Club for $120 per year as the retailer further leans into convenience.",
    bodyOriginal: `Walmart on Tuesday announced a new joint membership combining its namesake chain and its subsidiary Sam's Club, as the retailer leans further into convenience and value to win over cash-strapped shoppers.
The membership, which combines Walmart+ and Sam's Club Plus, will cost $120 per year, according to the company. That price is nearly $100 less than buying individual annual memberships to each retailer, though there is no monthly payment option for the new deal. Both stores will continue to offer standalone options.
"We're giving people a reason to expect more from their memberships," Walmart CEO John Furner said in a statement. "For $120 a year, we're raising expectations for what a membership can deliver: more money in their pockets and more time to call their own."
The membership gives customers access to Sam's Club warehouses, free delivery from both chains, a subscription to Peacock or Paramount+ streaming services, gas savings and 2% Sam's Club cash on eligible purchases. Customers who already have accounts at both stores can link their accounts to receive the discount.
While Walmart's customers often shop for routine, everyday essentials, Sam's Club warehouses offer more opportunity to stock up on bulk purchases. A joint membership could allow the store models to complement one another, according to the company.
The announcement comes as Walmart bets on convenience to drive sales, especially as consumer wallets are squeezed by high gas and food prices.
In August, as Walmart reported fiscal second-quarter earnings, the company raised its outlook for the year, with Chief Financial Officer John David Rainey telling CNBC that consumer spending remained strong despite higher fuel prices. Even so, its stock fell at the time as its sales outlook disappointed Wall Street.
Rainey said in August that the company was lowering prices across various categories, including beef, adding that it's well positioned to weather economic uncertainty because of its emphasis on value and its scale.
Meanwhile, Sam's Club saw a 26% increase in e-commerce sales in the fiscal second quarter, driven by increased transactions and membership growth. The retailer, which also operates its own gas stations, reported net sales of $25.7 billion, including fuel, during that period.
The membership business — which is part of Walmart's push to grow sales with higher profit margins — is already strong. Walmart reported a 17% increase globally in revenue from its membership in the fiscal second quarter with Walmart+ net adds notching a record second-quarter high. For Sam's Club, that revenue number grew 6%.
Walmart added Tuesday that employees at both stores will also receive joint memberships as part of their benefits.
The company said any costs related to the changes in the membership program are not expected to materially impact the company's fiscal third-quarter or full-year guidance.`,
    bodyJa: `Walmart on Tuesday announced a new joint membership combining its namesake chain and its subsidiary Sam's Club, as the retailer leans further into convenience and value to win over cash-strapped shoppers.
The membership, which combines Walmart+ and Sam's Club Plus, will cost $120 per year, according to the company. That price is nearly $100 less than buying individual annual memberships to each retailer, though there is no monthly payment option for the new deal. Both stores will continue to offer standalone options.
"We're giving people a reason to expect more from their memberships," Walmart CEO John Furner said in a statement. "For $120 a year, we're raising expectations for what a membership can deliver: more money in their pockets and more time to call their own."
The membership gives customers access to Sam's Club warehouses, free delivery from both chains, a subscription to Peacock or Paramount+ streaming services, gas savings and 2% Sam's Club cash on eligible purchases. Customers who already have accounts at both stores can link their accounts to receive the discount.
While Walmart's customers often shop for routine, everyday essentials, Sam's Club warehouses offer more opportunity to stock up on bulk purchases. A joint membership could allow the store models to complement one another, according to the company.
The announcement comes as Walmart bets on convenience to drive sales, especially as consumer wallets are squeezed by high gas and food prices.
In August, as Walmart reported fiscal second-quarter earnings, the company raised its outlook for the year, with Chief Financial Officer John David Rainey telling CNBC that consumer spending remained strong despite higher fuel prices. Even so, its stock fell at the time as its sales outlook disappointed Wall Street.
Rainey said in August that the company was lowering prices across various categories, including beef, adding that it's well positioned to weather economic uncertainty because of its emphasis on value and its scale.
Meanwhile, Sam's Club saw a 26% increase in e-commerce sales in the fiscal second quarter, driven by increased transactions and membership growth. The retailer, which also operates its own gas stations, reported net sales of $25.7 billion, including fuel, during that period.
The membership business — which is part of Walmart's push to grow sales with higher profit margins — is already strong. Walmart reported a 17% increase globally in revenue from its membership in the fiscal second quarter with Walmart+ net adds notching a record second-quarter high. For Sam's Club, that revenue number grew 6%.
Walmart added Tuesday that employees at both stores will also receive joint memberships as part of their benefits.
The company said any costs related to the changes in the membership program are not expected to materially impact the company's fiscal third-quarter or full-year guidance.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/20/walmart-sams-club-plus-membership.html",
    publishedAt: "2026-10-20T10:00:01+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 7,
  },
  {
    id: "jobless-rate-falls-but-small-firms-cut-b-ff7075d0",
    title: "Jobless rate falls but small firms cut back hiring",
    titleJa: "Jobless rate falls but small firms cut back hiring",
    summaryJa: "Small firms cite labour costs as a key factor in scaling back hiring, the Office for National Statistics says.",
    bodyOriginal: `Jobless rate falls but small firms cut back hiring
- Published
The UK's unemployment rate has dropped to its lowest for more than year, but job vacancies have continued to fall as smaller businesses cut back on recruitment, official figures indicate.
The jobless rate fell to 4.7% in the three months to August, the Office for National Statistics (ONS) said, the lowest since July last year.
However, vacancies fell by 21,000 in the three months to September to 691,000, with the ONS saying small firms were citing labour costs as a key factor in scaling back hiring.
The figures are the last official snapshot of the jobs market before the Budget, and analysts said they indicated the jobs market was showing signs of recovery despite the weakness in hiring.
ONS deputy director of labour market statistics, David Freeman, said the labour market remained "broadly flat", with the latest data showing the employment rate edging up and "a small drop in unemployment".
"The number of workers on payroll remains slightly down over the same period, though data for the most recent month suggests that might be starting to level off," he said.
"The number of vacancies has seen its largest fall since the start of the year, concentrated mainly within smaller businesses, which cite increased labour costs as a key factor."
Energy costs have risen since the Iran war began, and companies have also said that increases in National Insurance and the minimum wage have made it more expensive to employ staff.
The number of job vacancies fell to its lowest level in more than five years, the figures indicated, with the largest decrease in construction jobs.
Average earnings excluding bonuses rose 3.7% in the three months to August, up from 3.5% last month. Taking inflation into account, wages grew 0.8% in real terms.
Pat McFadden, the Secretary of State for Work and Pensions, said the figures "show the resilience of our labour market" with the UK's employment rate "now the third highest in the G7, despite a backdrop of global uncertainty".
However, he said that "too many young people still find themselves locked out of employment".
The government is working with industry "to bring young people back into the labour market and prevent them from drifting into the welfare system", he added.
But Conservative shadow chancellor Andrew Griffith said on X, external that "businesses can't afford to hire".
"This is what happens when you attack employers, tax jobs, and put up red tape," he said.
The latest ONS figures showed the unemployment rate for those aged 16 to 24 was 15.6% in the June to August quarter. While that was down from 16.4% in the March to May period, it was still higher than the rate of 14.6% seen in the June-to-August period last year.
Separate ONS figures have indicated that nearly one million young people in the UK are not in education, employment or training - or "Neet"
On Monday, Prime Minister Andy Burnham warned the UK faces an "economic catastrophe and moral failure" due to high levels of youth unemployment.
Ashley Webb, senior UK economist for Capital Economics, said the fall in the unemployment rate was "unexpected", and that it suggests the labour market "continues to recover".
But "with businesses' energy costs likely to fall only slowly, we still think hiring will stay subdued," he said.
Louise Murphy, senior economist at the Resolution Foundation, said the labour market "has performed poorly in recent years as the number of jobs has fallen and pay growth weakened".
But she added that the UK's "recent bout of economic resilience may finally be creating some green shoots", pointing to "rising employment levels and private sector wage growth stabilising".
The quality of ONS statistics has been criticised in recent years, with a review last year finding "deep seated" issues with the body.
The Labour Force Survey, which it uses to report payroll and employment figures, has suffered from low response rates.
In an update on Tuesday, the ONS said that response levels had improved, but that "some volatility" remained in the statistics.
Get in touch
Have you been affected by the issues raised in this story? Get in touch.`,
    bodyJa: `Jobless rate falls but small firms cut back hiring
- Published
The UK's unemployment rate has dropped to its lowest for more than year, but job vacancies have continued to fall as smaller businesses cut back on recruitment, official figures indicate.
The jobless rate fell to 4.7% in the three months to August, the Office for National Statistics (ONS) said, the lowest since July last year.
However, vacancies fell by 21,000 in the three months to September to 691,000, with the ONS saying small firms were citing labour costs as a key factor in scaling back hiring.
The figures are the last official snapshot of the jobs market before the Budget, and analysts said they indicated the jobs market was showing signs of recovery despite the weakness in hiring.
ONS deputy director of labour market statistics, David Freeman, said the labour market remained "broadly flat", with the latest data showing the employment rate edging up and "a small drop in unemployment".
"The number of workers on payroll remains slightly down over the same period, though data for the most recent month suggests that might be starting to level off," he said.
"The number of vacancies has seen its largest fall since the start of the year, concentrated mainly within smaller businesses, which cite increased labour costs as a key factor."
Energy costs have risen since the Iran war began, and companies have also said that increases in National Insurance and the minimum wage have made it more expensive to employ staff.
The number of job vacancies fell to its lowest level in more than five years, the figures indicated, with the largest decrease in construction jobs.
Average earnings excluding bonuses rose 3.7% in the three months to August, up from 3.5% last month. Taking inflation into account, wages grew 0.8% in real terms.
Pat McFadden, the Secretary of State for Work and Pensions, said the figures "show the resilience of our labour market" with the UK's employment rate "now the third highest in the G7, despite a backdrop of global uncertainty".
However, he said that "too many young people still find themselves locked out of employment".
The government is working with industry "to bring young people back into the labour market and prevent them from drifting into the welfare system", he added.
But Conservative shadow chancellor Andrew Griffith said on X, external that "businesses can't afford to hire".
"This is what happens when you attack employers, tax jobs, and put up red tape," he said.
The latest ONS figures showed the unemployment rate for those aged 16 to 24 was 15.6% in the June to August quarter. While that was down from 16.4% in the March to May period, it was still higher than the rate of 14.6% seen in the June-to-August period last year.
Separate ONS figures have indicated that nearly one million young people in the UK are not in education, employment or training - or "Neet"
On Monday, Prime Minister Andy Burnham warned the UK faces an "economic catastrophe and moral failure" due to high levels of youth unemployment.
Ashley Webb, senior UK economist for Capital Economics, said the fall in the unemployment rate was "unexpected", and that it suggests the labour market "continues to recover".
But "with businesses' energy costs likely to fall only slowly, we still think hiring will stay subdued," he said.
Louise Murphy, senior economist at the Resolution Foundation, said the labour market "has performed poorly in recent years as the number of jobs has fallen and pay growth weakened".
But she added that the UK's "recent bout of economic resilience may finally be creating some green shoots", pointing to "rising employment levels and private sector wage growth stabilising".
The quality of ONS statistics has been criticised in recent years, with a review last year finding "deep seated" issues with the body.
The Labour Force Survey, which it uses to report payroll and employment figures, has suffered from low response rates.
In an update on Tuesday, the ONS said that response levels had improved, but that "some volatility" remained in the statistics.
Get in touch
Have you been affected by the issues raised in this story? Get in touch.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c6eq327pzr53o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-20T09:31:29+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/c778/live/bb751480-cc48-11f1-9a30-cb277859b43a.jpg",
    readTime: 10,
  },
  {
    id: "how-is-the-us-economy-really-doing-under-51a3bfaf",
    title: "How is the US economy really doing under President Trump?",
    titleJa: "How is the US economy really doing under President Trump?",
    summaryJa: "Ahead of the midterms Trump has boasted about the performance of the US economy. BBC Verify looks at inflation, jobs and economic growth in the country.",
    bodyOriginal: `How is the US economy really doing under President Trump?
- Published
President Donald Trump has been boasting about the performance of the US economy ahead of the midterm congressional elections, claiming he has boosted incomes, reduced inflation and created jobs.
Trump has repeatedly said: "We have the hottest country anywhere in the world."
While the overall US economy is faring better than many expected after Trump launched his sweeping "Liberation Day" tariffs in 2025, there's evidence those import taxes and the impact of the US-Israel war with Iran have pushed up inflation, with the harmful effects felt by most American households.
The US economy is also being helped by an AI investment boom, and could falter if that spending were to dry up.
So how does all this feel for the average American? BBC Verify has looked at whether the evidence supports the president's claims.
1. US economy growing
The overall US economy is growing at a respectable clip by the country's recent historic standards.
The latest data shows US GDP, external - which is how economists measure the size of the US economy - currently expanding at an annualised rate of 2.2%.
And it has increased by around 3.2% overall since the end of 2024, just before Trump took office for his second term.
That is more growth than any other member of the G7 group of leading economies over that period.
The US growth rate has been faster than was forecast by the International Monetary Fund (IMF), external in the immediate wake of Trump's announcement of a swathe of new tariffs on goods coming into the US on 2 April 2025.
It downgraded its forecasts at the time, citing the negative impact of Trump's import duties on investment and consumer spending.
Though it is important to note that Trump eased the tariffs considerably in the months that followed, reducing the impact that had initially been expected on the economy.
The US economy has also been heavily supported in recent years by American technology companies making massive investments in AI, including by constructing data centres around the country.
Spending on building data centres, external (excluding the IT hardware to go in them) by US businesses in August 2026 was $5bn, almost double the monthly rate when Trump returned to office.
2. Inflation picked up
Many American voters wanted to punish Joe Biden in the 2024 presidential election, holding him responsible for the pain caused by a significant spike in prices in the wake of the pandemic.
The current rate of US inflation, external is 3.7%.
That's still well down on the recent peak rate of 9% under Biden in 2022, but higher than the 3% rate that Donald Trump inherited in January 2025.
Economists estimate, external US inflation would have been lower without the new tariffs imposed by Trump since he returned to office.
While the impact of the Iran war on global energy prices, with the significant disruption to oil and fuel supplies from the Middle East, has also helped push up US domestic inflation.
The price of a gallon of diesel in the US, external - a fuel used not only by drivers but also widely in agriculture and industry - hit a record high of $6.52 in September.
The price of some grocery staples , externallike beef and coffee have risen since Trump returned to office, though the price of eggs has fallen.
And some US retailers have warned, external that rising energy prices caused by the Iran war will make producing food more expensive and raise prices at the till.
3. Household income growth held back
Average US household incomes are still rising under Trump.
The median income - after adjusting for inflation - rose 2.6% in 2025 to $87,460, the highest on record, external.
However, the Institute on Taxation and Economic Policy (ITEP) think tank has estimated the combined effects of the following, external on US households:
- Trump's tax cuts
- The expiry of extra government subsidies that had made health insurance cheaper for millions of Americans
- Higher-than-expected price rises during Trump's second term, including those linked to tariffs and the Iran war
ITEP's conclusion is that the middle fifth of households are, on average, around $1,700 worse off in 2026 than they would have been, while the poorest fifth are around $750 worse off.
The richest 1%, by contrast, are estimated to be an average of $12,560 better off than they woud have been, primarily because of Trump's tax cuts.
ITEP's estimates about the impact of tariffs on American households of different income levels are broadly similar to those of the Tax Foundation think tank, external.
4. Job creation slowed down
Trump predicted his tariffs would result in America being "flooded with jobs", external as manufacturing firms set up new factories on US soil to avoid their products being taxed at the border.
Since he returned to the White House, an average of 34,000 jobs have been added to the economy each month.
But that is significantly down on the 122,000 jobs added each month in the final year of Biden's presidency, external.
And the number of Americans employed in manufacturing, external - 12.6 million in September 2026 - is slightly lower than it was when Trump's second term began.
However, the US unemployment rate remains relatively low, external at 4.2%, which is broadly where it was when Trump returned to the White House.
Part of the reason for this is Trump's immigration crackdown and deportation programme, which has reduced the size of the available US workforce, external and means a lower number of jobs need to be created each month to stop unemployment rising.
5. Borrowing costs rising
US government borrowing has increased in Trump's second term, partly driven up by his significant tax cuts.
The federal government deficit - the gap between its revenues from taxes and its spending - was $2 trillion in the year to September 2026, external. That's equivalent to around 6%, external of US GDP.
And the US deficit is projected to rise to above 8% of GDP by 2030, external.
That high rate of government borrowing is itself helping to boost US GDP growth.
The IMF has warned that excessive US government borrowing, external, which it uses to bridge the deficit, and its rapidly rising national debt are raising the risk of a future financial crisis in America. This would have a deeply damaging impact on most American households.
The growing deficit is also one of the reasons the US government gets charged more to borrow money in financial markets.
The 10-year US government bond yield has risen sharply since Trump returned to office in January 2025 and is now above 5%, the highest rate since the global financial crisis in 2007.
That increase in the market cost of US government borrowing also puts upward pressure on the interest rates on mortgages available to American households.
The interest rate on a new 30-year US mortgage has risen to 7.4%, external per year, up from 6.9% when Trump returned to the White House.
That's added to problems in the US housing market, making homes less affordable for new buyers. It has left many existing owners reluctant to move because doing so would mean giving up their cheaper mortgages, which they took out at lower rates, external and cannot take with them to a new property.
Data graphics by Erwan Rivault.`,
    bodyJa: `How is the US economy really doing under President Trump?
- Published
President Donald Trump has been boasting about the performance of the US economy ahead of the midterm congressional elections, claiming he has boosted incomes, reduced inflation and created jobs.
Trump has repeatedly said: "We have the hottest country anywhere in the world."
While the overall US economy is faring better than many expected after Trump launched his sweeping "Liberation Day" tariffs in 2025, there's evidence those import taxes and the impact of the US-Israel war with Iran have pushed up inflation, with the harmful effects felt by most American households.
The US economy is also being helped by an AI investment boom, and could falter if that spending were to dry up.
So how does all this feel for the average American? BBC Verify has looked at whether the evidence supports the president's claims.
1. US economy growing
The overall US economy is growing at a respectable clip by the country's recent historic standards.
The latest data shows US GDP, external - which is how economists measure the size of the US economy - currently expanding at an annualised rate of 2.2%.
And it has increased by around 3.2% overall since the end of 2024, just before Trump took office for his second term.
That is more growth than any other member of the G7 group of leading economies over that period.
The US growth rate has been faster than was forecast by the International Monetary Fund (IMF), external in the immediate wake of Trump's announcement of a swathe of new tariffs on goods coming into the US on 2 April 2025.
It downgraded its forecasts at the time, citing the negative impact of Trump's import duties on investment and consumer spending.
Though it is important to note that Trump eased the tariffs considerably in the months that followed, reducing the impact that had initially been expected on the economy.
The US economy has also been heavily supported in recent years by American technology companies making massive investments in AI, including by constructing data centres around the country.
Spending on building data centres, external (excluding the IT hardware to go in them) by US businesses in August 2026 was $5bn, almost double the monthly rate when Trump returned to office.
2. Inflation picked up
Many American voters wanted to punish Joe Biden in the 2024 presidential election, holding him responsible for the pain caused by a significant spike in prices in the wake of the pandemic.
The current rate of US inflation, external is 3.7%.
That's still well down on the recent peak rate of 9% under Biden in 2022, but higher than the 3% rate that Donald Trump inherited in January 2025.
Economists estimate, external US inflation would have been lower without the new tariffs imposed by Trump since he returned to office.
While the impact of the Iran war on global energy prices, with the significant disruption to oil and fuel supplies from the Middle East, has also helped push up US domestic inflation.
The price of a gallon of diesel in the US, external - a fuel used not only by drivers but also widely in agriculture and industry - hit a record high of $6.52 in September.
The price of some grocery staples , externallike beef and coffee have risen since Trump returned to office, though the price of eggs has fallen.
And some US retailers have warned, external that rising energy prices caused by the Iran war will make producing food more expensive and raise prices at the till.
3. Household income growth held back
Average US household incomes are still rising under Trump.
The median income - after adjusting for inflation - rose 2.6% in 2025 to $87,460, the highest on record, external.
However, the Institute on Taxation and Economic Policy (ITEP) think tank has estimated the combined effects of the following, external on US households:
- Trump's tax cuts
- The expiry of extra government subsidies that had made health insurance cheaper for millions of Americans
- Higher-than-expected price rises during Trump's second term, including those linked to tariffs and the Iran war
ITEP's conclusion is that the middle fifth of households are, on average, around $1,700 worse off in 2026 than they would have been, while the poorest fifth are around $750 worse off.
The richest 1%, by contrast, are estimated to be an average of $12,560 better off than they woud have been, primarily because of Trump's tax cuts.
ITEP's estimates about the impact of tariffs on American households of different income levels are broadly similar to those of the Tax Foundation think tank, external.
4. Job creation slowed down
Trump predicted his tariffs would result in America being "flooded with jobs", external as manufacturing firms set up new factories on US soil to avoid their products being taxed at the border.
Since he returned to the White House, an average of 34,000 jobs have been added to the economy each month.
But that is significantly down on the 122,000 jobs added each month in the final year of Biden's presidency, external.
And the number of Americans employed in manufacturing, external - 12.6 million in September 2026 - is slightly lower than it was when Trump's second term began.
However, the US unemployment rate remains relatively low, external at 4.2%, which is broadly where it was when Trump returned to the White House.
Part of the reason for this is Trump's immigration crackdown and deportation programme, which has reduced the size of the available US workforce, external and means a lower number of jobs need to be created each month to stop unemployment rising.
5. Borrowing costs rising
US government borrowing has increased in Trump's second term, partly driven up by his significant tax cuts.
The federal government deficit - the gap between its revenues from taxes and its spending - was $2 trillion in the year to September 2026, external. That's equivalent to around 6%, external of US GDP.
And the US deficit is projected to rise to above 8% of GDP by 2030, external.
That high rate of government borrowing is itself helping to boost US GDP growth.
The IMF has warned that excessive US government borrowing, external, which it uses to bridge the deficit, and its rapidly rising national debt are raising the risk of a future financial crisis in America. This would have a deeply damaging impact on most American households.
The growing deficit is also one of the reasons the US government gets charged more to borrow money in financial markets.
The 10-year US government bond yield has risen sharply since Trump returned to office in January 2025 and is now above 5%, the highest rate since the global financial crisis in 2007.
That increase in the market cost of US government borrowing also puts upward pressure on the interest rates on mortgages available to American households.
The interest rate on a new 30-year US mortgage has risen to 7.4%, external per year, up from 6.9% when Trump returned to the White House.
That's added to problems in the US housing market, making homes less affordable for new buyers. It has left many existing owners reluctant to move because doing so would mean giving up their cheaper mortgages, which they took out at lower rates, external and cannot take with them to a new property.
Data graphics by Erwan Rivault.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cv98ze40jz18o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-20T05:00:45+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/711c/live/8e797e10-cbd7-11f1-a64c-550be9e3c66b.jpg",
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
